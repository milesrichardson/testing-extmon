typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var b = {};
    let u = chrome.runtime.getManifest().debug || !1;
    function _() {
      return u;
    }
    function y(e = !0) {
      u = e;
    }
    function l(...e) {
      const n = e.toString().toLowerCase().includes("error");
      return e.unshift(`${new Date().toLocaleTimeString()}	`), n ? (console.error(...e), console.trace()) : console.log(...e), !0;
    }
    function c(...e) {
      return u ? l(...e) : !1;
    }
    function d(...e) {
      return new Promise((n, o) => {
        chrome.storage.local.get(e.length ? e : null, (t) => {
          if (chrome.runtime.lastError) c("prefsGet ERROR", chrome.runtime.lastError), o(chrome.runtime.lastError);
          else {
            let r = null;
            if (e.length <= 0) r = t;
            else if (e.length === 1) {
              const a = e[0];
              t && t.hasOwnProperty(a) && (r = t[a]);
            } else
              (r = {}),
                e.forEach((a) => {
                  (r[a] = null), t && t.hasOwnProperty(a) && (r[a] = t[a]);
                });
            n(r);
          }
        });
      });
    }
    function g(e) {
      if (e == null) throw new Error("Bad argument");
      return new Promise((n, o) => {
        try {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError ? (l("prefsSet ERROR", chrome.runtime.lastError), o(chrome.runtime.lastError)) : n(e);
          });
        } catch (t) {
          l("prefsSet ERROR", t), o(t);
        }
      });
    }
    function C(e, n) {
      return typeof n > "u" ? d(e) : g({ [e]: n });
    }
    function M(e) {
      let n = 0,
        o,
        t;
      if (e.length === 0) return n;
      for (t = 0; t < e.length; t++) (o = e.charCodeAt(t)), (n = (n << 5) - n + o), (n &= n);
      return n;
    }
    function v(e) {
      const o = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
        t = decodeURIComponent(
          window
            .atob(o)
            .split("")
            .map((r) => `%${`00${r.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join("")
        );
      return JSON.parse(t);
    }
    function I() {
      return new Date().toISOString().split("T")[0];
    }
    const m = () => {
      chrome.runtime.lastError && c("defaultCallback error:", chrome.runtime.lastError);
    };
    function p(e, n, o = "") {
      return new Promise((t) => {
        chrome.runtime.sendMessage({ name: e, message: n, origin: o }, (r) => {
          chrome.runtime.lastError && (c(chrome.runtime.lastError, e, n), t(!1)), t(r);
        });
      });
    }
    function i(e, n, o = "", t = m()) {
      return c("Panel sendMessage: sending to background", e), chrome.runtime.sendMessage({ name: e, message: n, origin: o }, t);
    }
    function R(e) {
      e.preventDefault();
      let n = e.target;
      for (; !n.href; ) n = n.parentElement;
      const { href: o } = n;
      i("openNewTab", { url: o, become_active: !0 });
    }
    function L() {
      i("account.openSubscriptionPage"), window.close();
    }
    function O(e) {
      i("account.openCheckoutPage", { utm: e }), window.close();
    }
    function k(e) {
      e.preventDefault(), i("account.openSupportPage"), window.close();
    }
    function T(e) {
      e.preventDefault(), i("openAccountAndroid");
    }
    function h(e) {
      function n(r, a) {
        return p(r, a, e);
      }
      function o(r, a, s) {
        c(`origin ${e} sending to handler`, r), i(r, a, e, s);
      }
      function t(r, a, s) {
        c(`origin ${e} sending to background onMessageHandler`, r), i(r, a, "", s);
      }
      return { sendMessageInPromise: n, sendMessage: o, sendMessageToBackground: t };
    }
    const w = h("page_performance"),
      { sendMessage: E } = w;
    (function (e, n) {
      const o = n;
      let t = o.readyState;
      const r = function () {
          const { host: s, pathname: P, protocol: S } = o.location,
            f = performance.timing.domContentLoadedEventStart - performance.timing.requestStart || 0;
          c("Sending latency from page_performance", f),
            E("recordPageInfo", {
              domain: `${S}//${s}${P}`,
              latency: f,
              performanceAPI: {
                timing: { navigationStart: performance.timing.navigationStart, loadEventEnd: performance.timing.loadEventEnd }
              }
            });
        },
        a = function () {
          t !== "complete"
            ? (o.onreadystatechange = function () {
                (t = o.readyState), t === "complete" && r();
              })
            : r();
        };
      return {
        init() {
          a();
        }
      };
    })(window, document).init();
  })();
