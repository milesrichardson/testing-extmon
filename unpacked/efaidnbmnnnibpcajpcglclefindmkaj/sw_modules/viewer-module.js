/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
import { analytics as e } from "../common/analytics.js";
import { communicate as t } from "./communicate.js";
import { util as n } from "./util.js";
import { SETTINGS as r } from "./settings.js";
import { dcLocalStorage as o } from "../common/local-storage.js";
import { downloadManager as s } from "./download-manager.js";
import { privateApi as i } from "./private-api.js";
import { viewerModuleUtils as a } from "./viewer-module-utils.js";
import { floodgate as c } from "./floodgate.js";
import { openLocalFteWindow as l } from "./ch-context-menu.js";
let u = null,
  m = chrome.runtime.getURL("viewer.html"),
  p = !1,
  d = {};
chrome.extension.isAllowedFileSchemeAccess((e) => {
  p = e;
});
const f = (e) => {
  chrome.tabs.get(e.tabId, (e) => {
    chrome.runtime.lastError || E(e);
  });
};
function E(e) {
  if (!r.IS_READER && 0 != t.version && (1 != t.version || 0 != t.NMHConnStatus) && e.url) {
    const t = new URL(e.url);
    chrome.runtime.id === t.host
      ? (chrome.contextMenus.update("convertPageContextMenu", { visible: !1 }),
        chrome.contextMenus.update("appendPageContextMenu", { visible: !1 }))
      : (chrome.contextMenus.update("convertPageContextMenu", { visible: !0 }),
        chrome.contextMenus.update("appendPageContextMenu", { visible: !0 }));
  }
}
function h(e) {
  const t = new Date();
  t.setMinutes(t.getMinutes() + r.VIEWER_RECHECK_CDN_ACCESS_DELAY_MINS), o.setItem("netAccAdT", t.getTime()), o.setItem("netAcc", e);
}
function g() {
  try {
    return "true" === o.getItem("pdfViewer");
  } catch (e) {
    return !1;
  }
}
function I(e, t) {
  for (let n = 0; n < e.length; ++n) {
    let r = e[n];
    if (r.name.toLowerCase() === t) return r;
  }
}
function _(t) {
  if (void 0 !== t.responseHeaders) {
    const n = I(t.responseHeaders, "content-type"),
      r = I(t.responseHeaders, "content-disposition");
    if (n) {
      const t = n.value.toLowerCase().split(";", 1)[0].trim();
      if (r && /^\s*attachment[;]?/i.test(r.value))
        return (
          "application/pdf" === t || "application/octet-stream" === t
            ? e.event(e.e.VIEWER_PDF_ATTACHMENT_IGNORED)
            : e.event(e.e.VIEWER_ATTACHMENT_IGNORED),
          !1
        );
      if ("application/pdf" === t) return e.event(e.e.VIEWER_PDF_PROCESS_PDF), !0;
      if ("application/octet-stream" === t && r && /\.pdf(["']|$)/i.test(r.value)) return e.event(e.e.VIEWER_PDF_PROCESS_OS_CD), !0;
    }
  } else if (
    "file" ==
      (function (e) {
        let t = e.indexOf("/");
        return e.substr(0, t - 1);
      })(t.url) &&
    "PDF" ==
      (function (e) {
        if (e)
          try {
            let t = new URL(e).pathname;
            return t.substr(t.lastIndexOf(".") + 1).toUpperCase();
          } catch (e) {
            return "";
          }
        return "";
      })(t.url)
  )
    return !0;
  return !1;
}
const v = async (r, o, i) => {
  const a = i.incognito;
  if (("complete" === i.status && E(i), "loading" === o.status)) {
    t.loading({ id: r });
    try {
      !n.isViewerURL(i.url) ||
        (g() && !a) ||
        w(
          r,
          (function (e, t) {
            t || (t = window.location.href);
            try {
              const n = new URL(t);
              return new URLSearchParams(n.search).get(e);
            } catch (e) {
              return;
            }
          })("pdfurl", i.url)
        );
    } catch (e) {}
  } else if ("complete" === o.status) {
    s.newTab(i.url, r);
    const t = await chrome.extension.isAllowedFileSchemeAccess();
    i.url.toLowerCase().startsWith("file://") && i.url.toLowerCase().endsWith(".pdf") && !t && (l(i), e.event(e.e.LOCAL_FILE_OPENED));
  }
};
function w(e, t) {
  e && t && chrome.tabs.update(e, { url: t });
}
function A(e) {
  if ("GET" !== e.method || !r.VIEWER_ENABLED || !g()) return !1;
  let t = e.url,
    n = `reloadurl-${e.tabId}`;
  const s = o.getItem(n);
  if (s && s === t) {
    try {
      o.removeItem(n);
    } catch (e) {}
    return !1;
  }
  if (
    !((e) => {
      if (!e || null === e || "undefined" === e) return !1;
      let t = [
          /^chrome\:\/\//,
          /^chrome\-extension\:\/\//,
          /^https:\/\/([a-zA-Z\d-]+\.){0,}officeapps.live.com/,
          /^https\:\/\/*.*\/(saml|login)/,
          /^https:\/\/sharedcloud.([a-zA-Z\d-]+)+.(s3|s3-accelerate).amazonaws.com/,
          /^https\:\/\/*.*.\/(login|auth|okta|saml).*\/S*|\/(login|auth|okta|saml|IWA|owa)\//,
          /^https\:\/\/www.google.com\/search\?q/,
          /^https\:\/\/www.citibank.*/,
          /^https:\/\/[^/]*\.*\/([$-/:-?{-~!"^_`\[\]A-Za-z0-9]*)view-sdk/
        ],
        n = c.getFeatureMeta("dc-cv-invalid-urls");
      if (n) {
        n = JSON.parse(n);
        for (let e in n) n[e] = new RegExp(n[e]);
        t = n;
      }
      return !![/^http\:\/\/[^/]/, /^https\:\/\/[^/]/, /^file?:/].find((t) => t.test(e)) && !t.find((t) => t.test(e));
    })(t)
  )
    return !1;
  const i = _(e);
  return i;
}
function R(e) {
  try {
    const t = new URL(e.url),
      n = new URLSearchParams(t.search);
    let r = !1;
    const o = e.initiator;
    return (
      o &&
        ["https://classroom.google.com", "https://mail.google.com", "https://drive.google.com"].includes(o) &&
        n.forEach((e, t) => {
          t.startsWith("print") && "true" === e && (r = !0);
        }),
      r
    );
  } catch (e) {
    return !1;
  }
}
async function C(t) {
  try {
    if (o.getItem("retryOnNextPage")) {
      await chrome.scripting.executeScript({ target: { tabId: t }, files: ["content_scripts/injectCopyLSIframe.js"] }),
        await n.sleep(300),
        e.event(e.e.LOCAL_STORAGE_MIGRATION_RETRYING);
      const r = await chrome.runtime.sendMessage({ main_op: "copy-ls" });
      chrome.tabs.sendMessage(t, { content_op: "remove-lsCopy" }).catch(() => null),
        "succeed" === r &&
          (e.event(e.e.LOCAL_STORAGE_MIGRATION_RETRYING_SUCCESS),
          o.removeItem("retryOnNextPage"),
          Object.assign(o.storage, await chrome.storage.local.get()));
    }
  } catch (e) {}
}
function L(t) {
  i.isMimeHandlerAvailable().then(async (s) => {
    const { tabId: i } = t;
    if ((await C(i), o.getItem("sessionStarted") || (o.setItem("sessionId", n.uuid()), o.setItem("sessionStarted", !0)), !s)) {
      let o = n.parseExtensionURL(t.url);
      if (o) {
        o = m + "?pdfurl=" + o;
        let n = t.url.indexOf("#");
        n > 0 && (o += t.url.slice(n)), r.VIEWER_ENABLED && g() && e.event(e.e.VIEWER_EXTN_PDF_OPENED), chrome.tabs.update(i, { url: o });
      }
    }
  });
}
function D(r, s) {
  i.isMimeHandlerAvailable().then(async (i) => {
    if ((o.getItem("sessionStarted") || (o.setItem("sessionId", n.uuid()), o.setItem("sessionStarted", !0)), i)) {
      const e = R(r),
        t = r.tabId;
      t > -1 && (d[t] = { isGooglePrint: e });
    } else {
      if ("main_frame" === r.type) {
        const { tabId: n } = r;
        if (
          (await C(n),
          !(function () {
            if (!navigator.onLine && o.getItem("offlineSupportDisable")) return !1;
            const e = new Date(),
              t = o.getItem("netAcc"),
              n = o.getItem("netAccAdT");
            return !(n && n > e.getTime()) || t;
          })() || !A(r))
        )
          return;
        if (s && !p) return void e.event(e.e.VIEWER_PDF_LOCAL_FILE_IGNORED);
        if (((u = r.url), s)) e.event(e.e.VIEWER_PDF_LOCAL_FILE);
        else {
          const { origin: t } = new URL(u);
          e.setArg("pdfDomain", t), e.event(e.e.VIEWER_PDF_DETECT_HEADERS), e.setArg("pdfDomain", null);
        }
        a.updateVariables(t.version), a.fetchAndUpdateVersionConfig();
        let i = (function (e) {
          let t = m;
          if (((t += "?pdfurl=" + encodeURIComponent(e.url)), void 0 !== e.responseHeaders)) {
            const n = I(e.responseHeaders, "content-length");
            n && (t += "&clen=" + n.value);
            const r = I(e.responseHeaders, "accept-ranges");
            r && r.value && "bytes" === r.value.toLowerCase() && (t += "&chunk=true");
            const o = I(e.responseHeaders, "content-disposition");
            if (o && o.value && /\.pdf(["']|$)/i.test(o.value)) {
              const e = /filename[^;=\n\*]?=((['"]).*?\2|[^;\n]*)/.exec(o.value);
              null != e && e.length > 1 && (t += "&pdffilename=" + e[1].replace(/['"]/g, ""));
            }
          }
          return R(e) && (t += "&googlePrint=true"), t;
        })(r);
        e.event(e.e.VIEWER_EXTN_PDF_OPENED);
        for (let e = 0; e < 20; e++)
          try {
            await chrome.tabs.update(n, { url: i });
          } catch (e) {}
      }
      "sub_frame" === r.type &&
        ((c = r.url), /^https:\/\/[^/]*(acrobat|adobe)\.com\/proxy\/chrome-viewer/.test(c)) &&
        (200 !== r.statusCode
          ? 403 === r.statusCode
            ? (o.setItem("pdfViewer", "false"), e.event(e.e.VIEWER_FALLBACK_TO_NATIVE_CDN_FORBIDDEN), w(r.tabId, u))
            : (h(!1), e.event(e.e.VIEWER_FALLBACK_TO_NATIVE_CDN_OFFLINE), w(r.tabId, u))
          : h(!0));
    }
    var c;
  });
}
t.registerHandlers({
  "check-is-google-print": function (e, t, n) {
    return d && d[e.tabId] ? n({ isGooglePrint: d[e.tabId].isGooglePrint }) : n({ isGooglePrint: !1 });
  }
});
export { D as processRequest, L as honorRequest, f as onTabActivated, v as onTabsUpdated };
