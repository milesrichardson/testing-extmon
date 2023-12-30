(() => {
  var e = {
      4846: (e) => {
        let r,
          o = chrome || window.chrome || browser || window.browser;
        navigator.userAgent.includes("Firefox/") && (o = browser || window.browser),
          navigator.userAgent.includes("Edge/") && (o = browser || window.browser);
        try {
          r = indexedDB || window.indexedDB;
        } catch (e) {
          (r = null), console.log(`Error initializing indexedDB: ${e.message}`);
        }
        e.exports = { chrome: o, indexedDB: r, performance: performance || window.performance, URL: URL || window.URL };
      }
    },
    r = {};
  function o(t) {
    var n = r[t];
    if (void 0 !== n) return n.exports;
    var i = (r[t] = { exports: {} });
    return e[t](i, i.exports, o), i.exports;
  }
  (o.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (o.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      var e = o(4846);
      e.chrome.i18n.getUILanguage().split("-")[0];
      const r = (r, o = document) =>
        r.forEach(({ id: r, msg: t, sub: n = null }) => {
          const i = o.getElementById(r);
          i && (i.textContent = e.chrome.i18n.getMessage(t, n));
        });
      Object.defineProperty({}, "browser", { writable: !0 });
      Object.defineProperty({}, "os", { writable: !0 });
      Object.defineProperty({}, "isMV3", { writable: !0 }),
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
      const t = {};
      function n() {
        if (t.params.prevUrl && t.params.prevUrl.length > 0) return window.location.replace(t.params.prevUrl);
        if (window.history.length > 1) return window.history.go(-1);
        let r;
        try {
          r = new URL(t.params.referrer);
        } catch (e) {}
        e.chrome.tabs.query({ currentWindow: !0, active: !0 }, (o) => {
          r
            ? e.chrome.tabs.query({ currentWindow: !0, url: `${r.origin}/*` }, (r) => {
                r[0].index &&
                  e.chrome.tabs.highlight({ tabs: r[0].index }, () => {
                    o[0].id && e.chrome.tabs.remove(o[0].id);
                  });
              })
            : o[0].id && e.chrome.tabs.remove(o[0].id);
        });
      }
      (t.templateParameters = () => {
        let e = {},
          r = new URLSearchParams(window.location.search);
        for (let o of r) "null" === o[1] ? (e[o[0]] = null) : "undefined" === o[1] ? (e[o[0]] = void 0) : (e[o[0]] = o[1]);
        return e;
      }),
        (t.params = t.templateParameters()),
        document.addEventListener("DOMContentLoaded", function () {
          window.addEventListener("resize", () => {
            $("#mbbgb-inf").popup({ inline: !0, hoverable: !0, lastResort: "bottom center" });
          }),
            r([
              { id: "blocked-by-title", msg: "blockedByTitle" },
              { id: "block-reason", msg: "contentControlWebsiteBlockHeader" },
              { id: "block-explanation", msg: "contentControlWebsiteBlockExplanation" },
              { id: "block-alert-text", msg: "contentControlBlockAlertText" },
              { id: "block-alert-link", msg: "mv3WebsiteBlockMalwarebytesSupport" },
              { id: "block-go-back", msg: "mv3WebsiteBlockGoBack" },
              { id: "block-learn-more", msg: "mv3WebsiteBlockLearnMore" },
              { id: "block-learn-more-link", msg: "mv3WebsiteBlockLearnMoreLink" }
            ]),
            (function () {
              const e = document.querySelector("#block-url"),
                r = ((e, r = 2048) => (e.length > r ? e.substr(0, r - 1) + "..." : e))(t.params.url);
              e.textContent = r;
            })(),
            document.getElementById("go-back").addEventListener("click", n),
            e.chrome.runtime.sendMessage({ type: "MSG_IS_NEEDING_NATIVE_MSG", parameters: { source: "contentControlBlockPage" } }, (r) => {
              e.chrome.runtime.lastError && console.error("MBN: Chrome Runtime Failure: ", e.chrome.runtime.lastError),
                r && r.needsIt && ($("#mbbgb-header-footer").animate({ "max-height": "100%", opacity: 1 }, 800), i());
            });
        });
      const i = () => {
        r([
          { id: "nm-header", msg: "nativeMessagingHeader2" },
          { id: "nm-message", msg: "nativeMessagingMessage2" },
          { id: "decline-nm", msg: "buttonOptOut" },
          { id: "accept-nm", msg: "buttonOptIn" }
        ]),
          [
            { id: "accept-nm", val: !0 },
            { id: "decline-nm", val: !1 }
          ].forEach(({ id: r, val: o }) => {
            document.getElementById(r).addEventListener("click", async () => {
              let r = o
                ? await new Promise((r) => {
                    e.chrome.permissions.request({ permissions: ["nativeMessaging"] }, (e) => {
                      console.log("MMPPNM: Permissions request resp: ", e), r(e);
                    });
                  })
                : await new Promise((r) => {
                    e.chrome.permissions.remove({ permissions: ["nativeMessaging"] }, (e) => {
                      e
                        ? (console.debug("MRNM: Successfully removed permissions"), r(!1))
                        : (console.log("MRNM: Did not remove permissions... ", e), r(!0));
                    });
                  });
              e.chrome.runtime.sendMessage({ type: "MSG_SETTINGS_SET", payload: { enableNativeMessaging: r } }, (e) => {
                !e || e.error ? console.error(e && e.error) : console.debug(`PR: Turned ${r ? "on" : "off"} Native Messaging`),
                  (document.getElementById("mbbgb-header-footer").style.display = "none");
              });
            });
          });
      };
    })();
})();
