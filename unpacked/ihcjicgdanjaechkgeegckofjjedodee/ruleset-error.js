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
  function o(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s](r, r.exports, o), r.exports;
  }
  (o.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (o.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      var e = o(4846);
      e.chrome.i18n.getUILanguage().split("-")[0],
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
      async function t() {
        const t = document.querySelector('#choose-features input[name="feature"]:checked');
        if (!t) return;
        const o = t.value;
        console.debug("SELECTED CHOICE: ", o),
          (document.querySelector("#save-choice-btn").disabled = !0),
          n(!0),
          r(!1),
          await (async function (t) {
            try {
              return void (await e.chrome.runtime.sendMessage({ type: "MSG_MV3_INIT_WITH_FEATURES", features: t, mv3: !0 }));
            } catch (t) {
              console.error(t), console.error(e.chrome.runtime.lastError);
            }
          })(o),
          (document.querySelector("#save-choice-btn").disabled = !1),
          s(!1),
          n(!1),
          r(!0);
      }
      function s(e) {
        e
          ? document.querySelector("#save-choice-btn").classList.remove("hidden")
          : document.querySelector("#save-choice-btn").classList.add("hidden");
      }
      function n(e) {
        e
          ? document.querySelector("#save-choice-btn .sk-fading-circle").classList.remove("hidden")
          : document.querySelector("#save-choice-btn .sk-fading-circle").classList.add("hidden");
      }
      function r(e) {
        e
          ? document.querySelector("#choice-saved").classList.remove("hidden")
          : document.querySelector("#choice-saved").classList.add("hidden");
      }
      document.addEventListener("DOMContentLoaded", async () => {
        ((t, o = document) => {
          [
            { id: "re-title", msg: "mv3RulesetErrorTitle" },
            { id: "re-what-happened-title", msg: "mv3WhatHappenedTitle" },
            { id: "re-what-happened", msg: "mv3WhatHappened" },
            { id: "re-what-happened-link", msg: "mv3WhatHappenedLink" },
            { id: "re-what-you-can-do-title", msg: "mv3WhatYouCanDoTitle" },
            { id: "re-what-you-can-do", msg: "mv3WhatYouCanDo" },
            { id: "re-what-you-can-do-or", msg: "mv3WhatYouCanDoOr" },
            { id: "re-choose-features-title", msg: "mv3ChooseFeaturesTitle" },
            { id: "re-choose-features-ads", msg: "mv3ChooseFeaturesAds" },
            { id: "re-choose-features-ads-hint", msg: "mv3ChooseFeaturesAdsHint" },
            { id: "re-choose-features-ads-desc", msg: "mv3ChooseFeaturesAdsDesc" },
            { id: "re-choose-features-malware", msg: "mv3ChooseFeaturesMalware" },
            { id: "re-choose-features-malware-desc", msg: "mv3ChooseFeaturesMalwareDesc" },
            { id: "re-rule-type-dynamic", msg: "mv3RuleStatsDynamic" },
            { id: "re-rule-type-dynamic-desc", msg: "mv3RuleStatsDynamicDesc" },
            { id: "re-rule-type-static", msg: "mv3RuleStatsStatic" },
            { id: "re-rule-type-static-desc", msg: "mv3RuleStatsStaticDesc" },
            { id: "re-rule-type-static-ruleset", msg: "mv3RuleStatsStaticRuleset" },
            { id: "re-rule-type-static-ruleset-desc", msg: "mv3RuleStatsStaticRulesetDesc" },
            { id: "mv3-block-level-up", msg: "mv3WebsiteBlockLevelUp" },
            { id: "mv3-block-level-up-info", msg: "mv3WebsiteBlockLevelUpInfo" },
            { id: "mv3-block-level-up-info-link", msg: "mv3WebsiteBlockLevelUpInfoLink" },
            { id: "mv3-block-level-up-info-contd", msg: "mv3WebsiteBlockLevelUpInfoContd" },
            { id: "mv3-block-get-started", msg: "mv3WebsiteBlockGetStarted" }
          ].forEach(({ id: t, msg: s, sub: n = null }) => {
            const r = o.getElementById(t);
            r && (r.textContent = e.chrome.i18n.getMessage(s, n));
          });
        })(),
          (function () {
            document.querySelector("#save-choice-btn").addEventListener("click", t),
              document.querySelectorAll('#choose-features input[name="feature"]').forEach((e) => {
                e.addEventListener("change", () => {
                  s(!0), r(!1);
                });
              });
            const {
              dynamicRuleCount: e,
              statcicRuleCount: o,
              staticRulesetCount: n
            } = (function () {
              let e = new URLSearchParams(window.location.search),
                t = {};
              for (const o of e) "null" === o[1] ? (t[o[0]] = null) : "undefined" === o[1] ? (t[o[0]] = void 0) : (t[o[0]] = o[1]);
              return { dynamicRuleCount: t.dCnt || 0, statcicRuleCount: t.sCnt || 0, staticRulesetCount: t.srCnt || 0 };
            })();
            (document.querySelector("#d-cnt").textContent = e),
              (document.querySelector("#s-cnt").textContent = o),
              (document.querySelector("#sr-cnt").textContent = n);
          })();
      });
    })();
})();
