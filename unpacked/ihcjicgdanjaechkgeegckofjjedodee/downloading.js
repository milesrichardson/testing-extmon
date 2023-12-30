(() => {
  var e = {
      4846: (e) => {
        let o,
          t = chrome || window.chrome || browser || window.browser;
        navigator.userAgent.includes("Firefox/") && (t = browser || window.browser),
          navigator.userAgent.includes("Edge/") && (t = browser || window.browser);
        try {
          o = indexedDB || window.indexedDB;
        } catch (e) {
          (o = null), console.log(`Error initializing indexedDB: ${e.message}`);
        }
        e.exports = { chrome: t, indexedDB: o, performance: performance || window.performance, URL: URL || window.URL };
      }
    },
    o = {};
  function t(r) {
    var n = o[r];
    if (void 0 !== n) return n.exports;
    var s = (o[r] = { exports: {} });
    return e[r](s, s.exports, t), s.exports;
  }
  (t.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (t.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      Object.freeze({
        LicenseStateUnknown: 0,
        LicenseStateFree: 1,
        LicenseStateTrial: 2,
        LicenseStateTrialExpired: 3,
        LicenseStateLicensed: 4,
        LicenseStateLicenseExpired: 5,
        LicenseStateLicenseGrace: 6
      }),
        Object.freeze([2, 4, 6]);
      var e = t(4846);
      e.chrome.i18n.getUILanguage().split("-")[0];
      const o = (o, t = document) =>
        o.forEach(({ id: o, msg: r, sub: n = null }) => {
          const s = t.getElementById(o);
          s && (s.textContent = e.chrome.i18n.getMessage(r, n));
        });
      window.addEventListener("DOMContentLoaded", () => {
        o([{ id: "download-status", msg: "downloadingStatus" }]),
          (document.getElementById("progress-percentage").textContent = "65%"),
          document.querySelector(".debug-page-header").classList.remove("hidden");
      }),
        window.addEventListener("load", () => {
          const t = document.querySelector(".download-debug-logs-content .img-container"),
            r = document.getElementById("download-status"),
            n = document.querySelector(".download-debug-logs-content .progress-bar-container"),
            s = document.getElementById("progress-percentage"),
            d = document.querySelector(".download-debug-logs-content .debug-error-footer");
          e.chrome.runtime.sendMessage({ type: "MSG_DOWNLOAD_LOGS", fullLog: !0 }, (i) => {
            !i || i.error
              ? (o([
                  { id: "debug-error-message", msg: "debugErrorMessage" },
                  { id: "support-txt", msg: "supportTxt" }
                ]),
                (r.textContent = e.chrome.i18n.getMessage("downloadErrorStatus")),
                t.classList.remove("downloading"),
                t.classList.add("error"),
                n.classList.remove("downloading"),
                n.classList.remove("pulse-animation"),
                n.classList.add("error"),
                (s.textContent = e.chrome.i18n.getMessage("downloadError")),
                d.classList.remove("hidden"))
              : ((r.textContent = e.chrome.i18n.getMessage("downloadCompleteStatus")),
                t.classList.remove("downloading"),
                t.classList.add("complete"),
                n.classList.remove("downloading"),
                n.classList.remove("pulse-animation"),
                n.classList.add("complete"),
                (s.textContent = "100%"));
          });
        });
    })();
})();
