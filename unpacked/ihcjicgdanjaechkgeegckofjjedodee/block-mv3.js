(() => {
  var e = {
      4846: (e) => {
        let t,
          o = chrome || window.chrome || browser || window.browser;
        navigator.userAgent.includes("Firefox/") && (o = browser || window.browser),
          navigator.userAgent.includes("Edge/") && (o = browser || window.browser);
        try {
          t = indexedDB || window.indexedDB;
        } catch (e) {
          (t = null), console.log(`Error initializing indexedDB: ${e.message}`);
        }
        e.exports = { chrome: o, indexedDB: t, performance: performance || window.performance, URL: URL || window.URL };
      }
    },
    t = {};
  function o(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, o), i.exports;
  }
  (o.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (o.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      var e = o(4846);
      e.chrome.i18n.getUILanguage().split("-")[0];
      const t = function (e) {
        if (null == e || "" === e) return "";
        e.toLowerCase().startsWith("blob:") && (e = e.substring(5));
        try {
          return new URL(e).hostname;
        } catch (t) {
          if (!e.toLowerCase().startsWith("http://") && !e.toLowerCase().startsWith("https://"))
            try {
              return new URL(`http://${e}`).hostname;
            } catch (t) {
              console.debug("UH: invalid URL ", e, " ", t);
            }
          return e;
        }
      };
      Object.defineProperty({}, "browser", { writable: !0 });
      Object.defineProperty({}, "os", { writable: !0 });
      Object.defineProperty({}, "isMV3", { writable: !0 });
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
      let r = {
          templateParameters: () => {
            let e = {},
              t = new URLSearchParams(window.location.search);
            for (let o of t) "null" === o[1] ? (e[o[0]] = null) : "undefined" === o[1] ? (e[o[0]] = void 0) : (e[o[0]] = o[1]);
            return e;
          }
        },
        n = r.templateParameters();
      console.debug("BLOCK_MV3: MV3 BLOCK PAGE PARAMS: ", n),
        (r.updateAllowListViaMessage = (o) => {
          const r = document.getElementById("continue-always").checked,
            n = o.url ? t(o.url) : t(o.referrer),
            s = ["EXCLUSION_ADS", "EXCLUSION_MALWARE", "EXCLUSION_SCAMS", "EXCLUSION_PUPS"];
          r
            ? (console.debug("BLOCK_MV3: Checkbox switched on - requesting allow for " + s),
              e.chrome.runtime.sendMessage({ type: "MSG_ADD_ALLOW", payload: { host: n, allow: s } }, function (e) {
                !e || e.error ? console.error(e ? e.error : "NO RESPONSE!") : i(o.url);
              }))
            : (console.debug("BLOCK_MV3: Checkbox switched off - requesting block for " + s),
              e.chrome.runtime.sendMessage({ type: "MSG_REM_ALLOW_SINGLE", payload: { host: n, exclusion: s } }, function (e) {
                !e || e.error ? console.error(e ? e.error : "NO RESPONSE!") : console.debug("BLOCK_MV3: Remove exclusions was successful");
              }));
        }),
        (r.excludeTemporary = async (o) => {
          if (document.getElementById("continue-always").checked);
          else
            try {
              const r = await e.chrome.runtime.sendMessage({
                type: "MSG_ADD_ALLOW_TEMPORARY",
                host: n.url ? t(n.url) : t(n.referrer),
                initiator: n.tabId,
                exclusion: o,
                filename: n.filename
              });
              r && r.success && i(n.url);
            } catch (e) {
              console.error(e);
            }
        });
      const i = (e) => {
        console.debug("BLOCK_MV3: Add exclusions was successful. Will redirect to: ", e),
          n.filename ? s() : (window.location.href = `http://${n.url.split(/^https?:\/\//)[1]}`);
      };
      function s() {
        if (n.prevUrl && n.prevUrl.length > 0) return window.location.replace(n.prevUrl);
        if (window.history.length > 1) return window.history.go(-1);
        let t;
        try {
          t = new URL(n.referrer);
        } catch (e) {}
        e.chrome.tabs.query({ currentWindow: !0, active: !0 }, (o) => {
          t
            ? e.chrome.tabs.query({ currentWindow: !0, url: `${t.origin}/*` }, (t) => {
                t[0].index &&
                  e.chrome.tabs.highlight({ tabs: t[0].index }, () => {
                    o[0].id && e.chrome.tabs.remove(o[0].id);
                  });
              })
            : o[0].id && e.chrome.tabs.remove(o[0].id);
        });
      }
      function l() {
        const e = document.getElementById("continue-always").checked;
        console.debug("BLOCK_MV3: Continue ", { continueAlways: e, url: n.url }), e ? r.updateAllowListViaMessage(n) : r.excludeTemporary();
      }
      document.addEventListener("DOMContentLoaded", () => {
        ((t, o = document) => {
          [
            { id: "blocked-by-title", msg: "blockedByTitle" },
            { id: "mv3-block-header", msg: "mv3WebsiteBlockHeader" },
            { id: "mv3-block-explanation", msg: "mv3WebsiteBlockExplanation" },
            { id: "mv3-block-alert-text", msg: "mv3WebsiteBlockAlert" },
            { id: "mv3-block-alert-link", msg: "mv3WebsiteBlockMalwarebytesSupport" },
            { id: "mv3-block-go-back", msg: "mv3WebsiteBlockGoBack" },
            { id: "continue-button", msg: "mv3WebsiteBlockContinue" },
            { id: "mv3-block-continue-always", msg: "mv3WebsiteBlockContinueAlways" },
            { id: "mv3-block-level-up", msg: "mv3WebsiteBlockLevelUp" },
            { id: "mv3-block-level-up-info", msg: "mv3WebsiteBlockLevelUpInfo" },
            { id: "mv3-block-level-up-info-link", msg: "mv3WebsiteBlockLevelUpInfoLink" },
            { id: "mv3-block-level-up-info-contd", msg: "mv3WebsiteBlockLevelUpInfoContd" },
            { id: "mv3-block-get-started", msg: "mv3WebsiteBlockGetStarted" },
            { id: "mv3-block-learn-more", msg: "mv3WebsiteBlockLearnMore" },
            { id: "mv3-block-learn-more-link", msg: "mv3WebsiteBlockLearnMoreLink" }
          ].forEach(({ id: t, msg: r, sub: n = null }) => {
            const i = o.getElementById(t);
            i && (i.textContent = e.chrome.i18n.getMessage(r, n));
          });
        })(),
          document.getElementById("go-back").addEventListener("click", s),
          document.getElementById("continue-button").addEventListener("click", l),
          (async function () {
            const t = await e.chrome.tabs.getCurrent();
            if (!t) return null;
            const o = t.id;
            try {
              const t = await e.chrome.runtime.sendMessage({ type: "MSG_MV3_LAST_TAB_URL", payload: { tabId: o }, mv3: !0 });
              return t && t.url ? { tabId: o, url: t.url } : { tabId: o, url: null };
            } catch (e) {
              throw (console.error("Failed to get last tab url", e), e);
            }
          })().then(({ tabId: t, url: o }) => {
            console.debug("BLOCK_MV3: Curr url: ", { tabId: t, url: o }),
              (n.url = o),
              (n.tabId = t),
              (async function (t, o) {
                try {
                  await e.chrome.runtime.sendMessage({ type: "MSG_MV3_POST_NATIVE_EXCLUSION", mv3: !0, tabId: t, url: o }),
                    console.debug("BLOCK_MV3: Posted mv3 native exclusion");
                } catch (e) {
                  console.error("BLOCK_MV3: Failed to post mv3 native exclusion", e);
                }
              })(t, o),
              (document.querySelector("#mv3-block-url").textContent = n.url),
              console.debug("BLOCK_MV3: Updated blocked url text to: ", n.url);
          });
      });
    })();
})();
