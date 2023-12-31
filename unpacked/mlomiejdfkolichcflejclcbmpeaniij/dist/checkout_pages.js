typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var P = {};
    let i = chrome.runtime.getManifest().debug || !1;
    function b() {
      return i;
    }
    function E(e = !0) {
      i = e;
    }
    function a(...e) {
      const n = e.toString().toLowerCase().includes("error");
      return e.unshift(`${new Date().toLocaleTimeString()}	`), n ? (console.error(...e), console.trace()) : console.log(...e), !0;
    }
    function u(...e) {
      return i ? a(...e) : !1;
    }
    function f(...e) {
      return new Promise((n, r) => {
        chrome.storage.local.get(e.length ? e : null, (t) => {
          if (chrome.runtime.lastError) u("prefsGet ERROR", chrome.runtime.lastError), r(chrome.runtime.lastError);
          else {
            let o = null;
            if (e.length <= 0) o = t;
            else if (e.length === 1) {
              const c = e[0];
              t && t.hasOwnProperty(c) && (o = t[c]);
            } else
              (o = {}),
                e.forEach((c) => {
                  (o[c] = null), t && t.hasOwnProperty(c) && (o[c] = t[c]);
                });
            n(o);
          }
        });
      });
    }
    function g(e) {
      if (e == null) throw new Error("Bad argument");
      return new Promise((n, r) => {
        try {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError ? (a("prefsSet ERROR", chrome.runtime.lastError), r(chrome.runtime.lastError)) : n(e);
          });
        } catch (t) {
          a("prefsSet ERROR", t), r(t);
        }
      });
    }
    function k(e, n) {
      return typeof n > "u" ? f(e) : g({ [e]: n });
    }
    function S(e) {
      let n = 0,
        r,
        t;
      if (e.length === 0) return n;
      for (t = 0; t < e.length; t++) (r = e.charCodeAt(t)), (n = (n << 5) - n + r), (n &= n);
      return n;
    }
    function _(e) {
      const r = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
        t = decodeURIComponent(
          window
            .atob(r)
            .split("")
            .map((o) => `%${`00${o.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join("")
        );
      return JSON.parse(t);
    }
    function C() {
      return new Date().toISOString().split("T")[0];
    }
    const h = () => {
      chrome.runtime.lastError && u("defaultCallback error:", chrome.runtime.lastError);
    };
    function d(e, n, r = "") {
      return new Promise((t) => {
        chrome.runtime.sendMessage({ name: e, message: n, origin: r }, (o) => {
          chrome.runtime.lastError && (u(chrome.runtime.lastError, e, n), t(!1)), t(o);
        });
      });
    }
    function s(e, n, r = "", t = h()) {
      return u("Panel sendMessage: sending to background", e), chrome.runtime.sendMessage({ name: e, message: n, origin: r }, t);
    }
    function M(e) {
      e.preventDefault();
      let n = e.target;
      for (; !n.href; ) n = n.parentElement;
      const { href: r } = n;
      s("openNewTab", { url: r, become_active: !0 });
    }
    function R() {
      s("account.openSubscriptionPage"), window.close();
    }
    function O(e) {
      s("account.openCheckoutPage", { utm: e }), window.close();
    }
    function L(e) {
      e.preventDefault(), s("account.openSupportPage"), window.close();
    }
    function y(e) {
      e.preventDefault(), s("openAccountAndroid");
    }
    function p(e) {
      function n(o, c) {
        return d(o, c, e);
      }
      function r(o, c, l) {
        u(`origin ${e} sending to handler`, o), s(o, c, e, l);
      }
      function t(o, c, l) {
        u(`origin ${e} sending to background onMessageHandler`, o), s(o, c, "", l);
      }
      return { sendMessageInPromise: n, sendMessage: r, sendMessageToBackground: t };
    }
    const m = p("checkout_pages"),
      { sendMessage: w } = m;
    (function (e) {
      const n = [
          "checkoutPage.buyInsights",
          "checkoutPage.buyPlus",
          "checkoutPage.buyPremium",
          "checkoutPage.login",
          "checkoutPage.register"
        ],
        r = function () {
          n.forEach((t) => e.addEventListener(t, () => w(t)));
        };
      return {
        init() {
          r();
        }
      };
    })(window, document).init();
  })();
