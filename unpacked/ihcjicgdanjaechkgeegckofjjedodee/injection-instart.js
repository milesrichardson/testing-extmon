(() => {
  var e,
    o = {
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
    t = {};
  function n(e) {
    var r = t[e];
    if (void 0 !== r) return r.exports;
    var i = (t[e] = { exports: {} });
    return o[e](i, i.exports, n), i.exports;
  }
  (e = new URLSearchParams(document.currentScript.src.split("?")[1]).get("extId")),
    console.debug("INS: Instart scanner loaded into " + window.location.href + " by " + e),
    (function () {
      function o(e) {
        if (document.currentScript && document.currentScript.textContent) {
          let o = document.currentScript.textContent,
            t = ["Instart", "instart", "INSTART", "I10C", "I11C", "I12C", "IXC_353_1119062411120848"];
          for (let n of t) if (o.includes(n)) throw new Error("Instart " + e + " Logic");
        }
      }
      function t(e, t) {
        console.debug("INS: " + t + " hooked for " + window.location.href);
        let n = e[t];
        Object.defineProperty(e, t, {
          get: function () {
            return o(t), n;
          },
          set: function (e) {
            o(t), (n = e);
          }
        });
      }
      function r(o, r) {
        if (
          (console.debug("INS: Sending an is-whitelisted request about " + r),
          console.debug("INS: Extension ID " + e),
          window.chrome || window.browser || "undefined" != typeof browser)
        ) {
          const { chrome: i } = n(4846);
          i.runtime.sendMessage(e, { type: "isInstartWhitelisted", parameters: { href: window.location.href, prop: r } }, (e) => {
            e && e.isWhitelisted
              ? console.debug("INS: " + r + " is whitelisted for " + window.location.href)
              : (i.runtime.lastError &&
                  console.error("INS: Failed with is-whitelisted request for " + r + ": " + i.runtime.lastError.message),
                t(o, r));
          });
        } else {
          const e = { href: window.location.href, prop: r };
          window.postMessage(
            { type: "isInstartWhitelisted", parameters: JSON.stringify(e) },
            `${window.location.protocol}//${window.location.host}`
          );
        }
      }
      r(window, "INSTART"),
        r(window, "INSTART_TARGET_NAME"),
        r(window, "I10C"),
        r(window, "I11C"),
        r(window, "I12C"),
        r(window, "IXC_353_1119062411120848");
      let i = window.setTimeout;
      window.setTimeout = function () {
        return o("Timeout"), i.apply(window, arguments);
      };
      let s = window.setInterval;
      (window.setInterval = function () {
        return o("Interval"), s.apply(window, arguments);
      }),
        window.addEventListener("message", (e) => {
          const o = new URL(e.origin).host;
          if ("isInstartWhitelistedResponse" === e.data.type && o === window.location.host) {
            const o = JSON.parse(e.data.parameters);
            !1 === o.isWhitelisted && t(window, o.property);
          }
        });
    })();
})();
