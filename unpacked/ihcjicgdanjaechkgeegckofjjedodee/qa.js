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
    var s = (r[t] = { exports: {} });
    return e[t](s, s.exports, o), s.exports;
  }
  (o.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (o.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      const e =
          (Object.freeze({
            LicenseStateUnknown: 0,
            LicenseStateFree: 1,
            LicenseStateTrial: 2,
            LicenseStateTrialExpired: 3,
            LicenseStateLicensed: 4,
            LicenseStateLicenseExpired: 5,
            LicenseStateLicenseGrace: 6
          }),
          Object.freeze([2, 4, 6]),
          "MSG_INT_VER"),
        r = "MSG_IS_LAYER_ACTIVE";
      var t = o(4846);
      document.addEventListener("DOMContentLoaded", function () {
        new Promise((e, r) => {
          t.chrome.runtime.sendMessage({ type: "MSG_USER_GROUP_GET" }, function (r) {
            !r || r.error ? console.error("Error fetching AB group", r) : $(".value-ab-group").text("GROUP_A" === r.success ? "A" : "B"),
              e();
          });
        })
          .then((e) => {
            t.chrome.runtime.sendMessage({ type: "MSG_UUID_GET" }, function (e) {
              return !e || e.error ? console.error("Error fetching UUID", e) : $(".value-uuid").text(e.success), Promise.resolve();
            });
          })
          .then((r) => {
            t.chrome.runtime.sendMessage({ type: e }, function (e) {
              return (
                !e || e.error ? console.error("Error fetching int ver", e) : $(".value-internal-version").text(e.success), Promise.resolve()
              );
            });
          })
          .then((r) => {
            t.chrome.runtime.sendMessage({ type: e }, function (e) {
              return (
                !e || e.error ? console.error("Error fetching int ver", e) : $(".value-internal-version").text(e.success), Promise.resolve()
              );
            });
          })
          .then((e) => {}),
          $("#check-layers-url").val("http://www.malwarebytes.com"),
          $("#check-layers-btn").on("click", function () {
            var e;
            (e = $("#check-layers-url").val()),
              console.log("Checking layers for " + e),
              $(".value-global-active").text("--"),
              $(".value-malware-layer-active").text("--"),
              $(".value-scam-layer-active").text("--"),
              $(".value-ads-layer-active").text("--"),
              t.chrome.storage.local.get("enableProtection", function (e) {
                t.chrome.runtime.lastError
                  ? console.error("Can't check global layer: ", t.chrome.runtime.lastError)
                  : $(".value-global-active").text(!1 === e.enableProtection ? "No" : "Yes");
              }),
              t.chrome.runtime.sendMessage({ type: r, payload: { exclConst: "EXCLUSION_MALWARE", url: e } }, function (e) {
                return (
                  !e || e.error
                    ? console.error("Error fetching layer", e)
                    : $(".value-malware-layer-active").text(e.success ? "Yes" : "No"),
                  Promise.resolve()
                );
              }),
              t.chrome.runtime.sendMessage({ type: r, payload: { exclConst: "EXCLUSION_SCAMS", url: e } }, function (e) {
                return (
                  !e || e.error ? console.error("Error fetching layer", e) : $(".value-scam-layer-active").text(e.success ? "Yes" : "No"),
                  Promise.resolve()
                );
              }),
              t.chrome.runtime.sendMessage({ type: r, payload: { exclConst: "EXCLUSION_ADS", url: e } }, function (e) {
                return (
                  !e || e.error ? console.error("Error fetching layer", e) : $(".value-ads-layer-active").text(e.success ? "Yes" : "No"),
                  Promise.resolve()
                );
              });
          });
      });
    })();
})();
