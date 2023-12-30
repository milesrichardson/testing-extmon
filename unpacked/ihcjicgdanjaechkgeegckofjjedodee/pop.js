(() => {
  var e = {
      4846: (e) => {
        let r,
          n = chrome || window.chrome || browser || window.browser;
        navigator.userAgent.includes("Firefox/") && (n = browser || window.browser),
          navigator.userAgent.includes("Edge/") && (n = browser || window.browser);
        try {
          r = indexedDB || window.indexedDB;
        } catch (e) {
          (r = null), console.log(`Error initializing indexedDB: ${e.message}`);
        }
        e.exports = { chrome: n, indexedDB: r, performance: performance || window.performance, URL: URL || window.URL };
      }
    },
    r = {};
  function n(o) {
    var i = r[o];
    if (void 0 !== i) return i.exports;
    var t = (r[o] = { exports: {} });
    return e[o](t, t.exports, n), t.exports;
  }
  (n.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (n.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      var e = n(4846);
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
      const r = "MSG_FIREFOX";
      function o(n, o) {
        e.chrome.runtime.sendMessage({ type: r, payload: n, obj: o }, function (e) {
          console.debug("SF Msg sent:", e);
        });
      }
      function i() {
        o("Pop redirecting to Dashboard"), (window.location.href = "app.html");
      }
      function t() {
        o("Pop redirecting to Onboarding"), (window.location.href = "eventpages/email.html");
      }
      document.addEventListener("DOMContentLoaded", function () {
        o("Pop doc ready. Onboarding."),
          e.chrome.runtime.sendMessage({ type: "MSG_IS_ONBOARDING_COMPLETE" }, function (e) {
            !e || e.error
              ? (o("Onboarding failed: " + e), t())
              : (o("Is onboarding complete: ", e.success),
                e.success ? (e.success.group ? ("GROUP_A" === e.success.group && e.success.result ? i() : t()) : i()) : t());
          });
      });
    })();
})();
