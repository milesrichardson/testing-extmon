"use strict";
var EXTENSION_IDS = [
    "ecnphlgnajanjnkcmbpancdjoidceilk",
    "lodjbngldcpejfnhmjkljfdinellpnji",
    "bhfdppnpkppcmclldhnadigbmfheemjf",
    "nlnndloljhkmcbihclnpkhpbpbapdmpc"
  ],
  VIEWER_URL = "https://web.kamihq.com" + "/web/viewer.html",
  kamiUrl = null;
function getViewerURL(e, r) {
  var t = VIEWER_URL,
    a = e ? e.url : null,
    n = {};
  if ((null != a && a.length && ((n.source = "extension_pdfhandler"), r && r.length && (n.extension_handler = r), (n.file = a)), e)) {
    var i = e["content-disposition"];
    if ((!i && e.responseHeaders && (i = (i = getHeaderFromHeaders(e.responseHeaders, "content-disposition")) && i.value), i)) {
      var o;
      try {
        o = contentDisposition.parse(i);
      } catch (e) {}
      o && o.parameters && o.parameters.filename && (n.filename = o.parameters.filename);
    }
    if (e.referer) n.referer = e.referer;
    else {
      var s = getReferer(e);
      s && s.length && (n.referer = s);
    }
  }
  var l = Object.keys(n);
  if (l.length) {
    t += "?";
    for (var d = encodeURIComponent, c = 0; c < l.length; c++) {
      var u = l[c],
        f = n[u];
      t += `${c > 0 ? "&" : ""}${d(u)}=${d(f)}`;
    }
  }
  return t;
}
function isPdfDownloadable(e) {
  if (e.url.indexOf("pdfjs.action=download") >= 0) return !0;
  if ("main_frame" === e.type && -1 === e.url.indexOf("=download")) return !1;
  var r = e.responseHeaders && getHeaderFromHeaders(e.responseHeaders, "content-disposition");
  return r && /^attachment/i.test(r.value);
}
function getHeaderFromHeaders(e, r) {
  for (var t = 0; t < e.length; ++t) {
    var a = e[t];
    if (a.name.toLowerCase() === r) return a;
  }
}
function isPdfFile(e) {
  var r = getHeaderFromHeaders(e.responseHeaders, "content-type");
  if (r) {
    var t = r.value.toLowerCase().split(";", 1)[0].trim();
    return "application/pdf" === t || ("application/octet-stream" === t && e.url.toLowerCase().indexOf(".pdf") > 0);
  }
}
function getHeadersWithContentDispositionAttachment(e) {
  var r = e.responseHeaders,
    t = getHeaderFromHeaders(r, "content-disposition");
  if ((t || ((t = { name: "Content-Disposition" }), r.push(t)), !/^attachment/i.test(t.value)))
    return (t.value = "attachment" + t.value.replace(/^[^;]+/i, "")), { responseHeaders: r };
}
function removeHeader(e, r) {
  for (var t = 0; t < e.length; t++) {
    e[t].name.toLowerCase() === r && (e.splice(t, 1), t--);
  }
}
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (e) {
    for (var r = e.requestHeaders, t = 0; t < EXTENSION_IDS.length; t++)
      if (e.initiator == "chrome-extension://" + EXTENSION_IDS[t]) {
        var a = getHeaderFromHeaders(r, "kami-referer");
        a && (removeHeader(r, "kami-referer"), removeHeader(r, "referer"), r.push({ name: "Referer", value: a.value }));
        break;
      }
    return { requestHeaders: r };
  },
  { urls: ["<all_urls>"], types: ["xmlhttprequest"] },
  ["blocking", "requestHeaders", "extraHeaders"]
),
  chrome.webRequest.onBeforeRequest.addListener(
    function (e) {
      var r = e.url.slice(0, -17);
      return (kamiUrl = r), { redirectUrl: r };
    },
    { urls: ["*://*/*&(open_with_kami)"], types: ["main_frame"] },
    ["blocking"]
  ),
  chrome.webRequest.onHeadersReceived.addListener(
    function (e) {
      if (!/(\.kamihq\.com|local\.kamipdf\.com)$/.test(e.initiator)) return;
      return { responseHeaders: e.responseHeaders.filter((e) => "cross-origin-opener-policy" != e.name.toLowerCase()) };
    },
    { urls: ["https://classroom.google.com/*c/*a/*attachFileId*"], types: ["main_frame"] },
    ["blocking", "responseHeaders"]
  ),
  chrome.webRequest.onHeadersReceived.addListener(
    function (e) {
      if ("GET" === e.method) {
        var r = e.url == kamiUrl;
        if (((kamiUrl = null), !r)) {
          if (!isPdfFile(e)) return;
          if ("true" !== autoload) return void saveDocumentData(e);
          if (isPdfDownloadable(e)) return getHeadersWithContentDispositionAttachment(e);
          if (-1 !== e.url.indexOf("print=true")) return;
          if (-1 !== e.url.indexOf("calendar.google.com/calendar/printevent")) return;
        }
        var t = kami_user && kami_user.id;
        return { redirectUrl: getViewerURL(e, "webrequest_1_autoload_" + autoload + "_user_" + t) };
      }
    },
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["blocking", "responseHeaders"]
  );
var allowedFileSchemeAccess = !1;
chrome.webRequest.onBeforeRequest.addListener(
  function (e) {
    if ((allowedFileSchemeAccess || !fileSchemeRequestDisabled) && "true" === autoload && !isPdfDownloadable(e))
      return { redirectUrl: getViewerURL(e, "webrequest_file") };
  },
  { urls: ["file://*/*.pdf", "file://*/*.PDF"], types: ["main_frame", "sub_frame"] },
  ["blocking"]
),
  chrome.extension.isAllowedFileSchemeAccess(function (e) {
    (allowedFileSchemeAccess = e),
      e ||
        fileSchemeRequestDisabled ||
        chrome.webNavigation.onBeforeNavigate.addListener(
          function (e) {
            (!allowedFileSchemeAccess && fileSchemeRequestDisabled) ||
              ("true" === autoload &&
                (0 !== e.frameId || isPdfDownloadable(e) || chrome.tabs.update(e.tabId, { url: getViewerURL(e, "webnavigation_file") })));
          },
          {
            url: [
              { urlPrefix: "file://", pathSuffix: ".pdf" },
              { urlPrefix: "file://", pathSuffix: ".PDF" }
            ]
          }
        );
  }),
  chrome.runtime.onMessage.addListener(function (e, r, t) {
    if (e && "getParentOrigin" === e.action) {
      if (!r.tab) return void t("");
      var a = r.tab.url;
      if (!a) return void t("");
      if (0 === a.lastIndexOf("file:", 0)) return void t("file://");
      var n = /^[^:]+:\/\/[^/]+/.exec(a);
      return t(n ? n[1] : a), !0;
    }
    if (e && "isAllowedFileSchemeAccess" === e.action) return chrome.extension.isAllowedFileSchemeAccess(t), !0;
    if (e && "openExtensionsPageForFileAccess" === e.action) {
      var i = "chrome://extensions/?id=" + chrome.runtime.id;
      e.data.newTab
        ? chrome.tabs.create({ windowId: r.tab.windowId, index: r.tab.index + 1, url: i, openerTabId: r.tab.id })
        : chrome.tabs.update(r.tab.id, { url: i });
    }
  });
