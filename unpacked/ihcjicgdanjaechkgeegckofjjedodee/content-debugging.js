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
  function o(n) {
    var w = r[n];
    if (void 0 !== w) return w.exports;
    var t = (r[n] = { exports: {} });
    return e[n](t, t.exports, o), t.exports;
  }
  (o.n = (e) => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return o.d(r, { a: r }), r;
  }),
    (o.d = (e, r) => {
      for (var n in r) o.o(r, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
    }),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (o.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (o.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      var e = o(4846);
      console.debug("DBG: content-debugging.js loaded:  " + window.location.href),
        "https://www.malwarebytes.com/browserguard/download-debug-logs?yes=true" === window.location.href &&
          (window.location.href = e.chrome.runtime.getURL("app/eventpages/downloading.html"));
    })();
})();
