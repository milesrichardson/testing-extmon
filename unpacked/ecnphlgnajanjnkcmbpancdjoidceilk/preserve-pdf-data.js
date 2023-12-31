"use strict";
var g_requestHeaders = {},
  g_documentData = {};
function getReferer(e, t) {
  return getDocumentData(e, "referer");
}
function getContentDisposition(e, t) {
  return getDocumentData(e, "content-disposition");
}
function getDocumentData(e, t, r) {
  if (!e.requestId) {
    var a = g_documentData[e.tabId],
      d = a && a[e.frameId];
    return d && d[t];
  }
  var s = g_requestHeaders[e.requestId] && getHeaderFromHeaders(g_requestHeaders[e.requestId], t);
  return s && s.value;
}
function saveDocumentData(e) {
  var t = g_requestHeaders[e.requestId] && getHeaderFromHeaders(g_requestHeaders[e.requestId], "referer"),
    r = getHeaderFromHeaders(e.responseHeaders, "content-disposition");
  g_documentData[e.tabId] || (g_documentData[e.tabId] = {}),
    (g_documentData[e.tabId][e.frameId] = { referer: t && t.value, "content-disposition": r && r.value });
}
!(function () {
  var e = { urls: ["*://*/*"], types: ["main_frame", "sub_frame"] };
  function t(e) {
    delete g_requestHeaders[e.requestId];
  }
  chrome.webRequest.onSendHeaders.addListener(
    function (e) {
      g_requestHeaders[e.requestId] = e.requestHeaders;
    },
    e,
    ["requestHeaders", "extraHeaders"]
  ),
    chrome.webRequest.onBeforeRedirect.addListener(t, e),
    chrome.webRequest.onCompleted.addListener(t, e),
    chrome.webRequest.onErrorOccurred.addListener(t, e);
})(),
  chrome.tabs.onRemoved.addListener(function (e) {
    delete g_documentData[e];
  });
