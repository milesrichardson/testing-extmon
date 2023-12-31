typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var P = {};
    let i = chrome.runtime.getManifest().debug || !1;
    function E() {
      return i;
    }
    function b(e = !0) {
      i = e;
    }
    function u(...e) {
      const n = e.toString().toLowerCase().includes("error");
      return e.unshift(`${new Date().toLocaleTimeString()}	`), n ? (console.error(...e), console.trace()) : console.log(...e), !0;
    }
    function a(...e) {
      return i ? u(...e) : !1;
    }
    function f(...e) {
      return new Promise((n, o) => {
        chrome.storage.local.get(e.length ? e : null, (t) => {
          if (chrome.runtime.lastError) a("prefsGet ERROR", chrome.runtime.lastError), o(chrome.runtime.lastError);
          else {
            let r = null;
            if (e.length <= 0) r = t;
            else if (e.length === 1) {
              const c = e[0];
              t && t.hasOwnProperty(c) && (r = t[c]);
            } else
              (r = {}),
                e.forEach((c) => {
                  (r[c] = null), t && t.hasOwnProperty(c) && (r[c] = t[c]);
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
            chrome.runtime.lastError ? (u("prefsSet ERROR", chrome.runtime.lastError), o(chrome.runtime.lastError)) : n(e);
          });
        } catch (t) {
          u("prefsSet ERROR", t), o(t);
        }
      });
    }
    function S(e, n) {
      return typeof n > "u" ? f(e) : g({ [e]: n });
    }
    function _(e) {
      let n = 0,
        o,
        t;
      if (e.length === 0) return n;
      for (t = 0; t < e.length; t++) (o = e.charCodeAt(t)), (n = (n << 5) - n + o), (n &= n);
      return n;
    }
    function C(e) {
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
    function M() {
      return new Date().toISOString().split("T")[0];
    }
    const d = () => {
      chrome.runtime.lastError && a("defaultCallback error:", chrome.runtime.lastError);
    };
    function h(e, n, o = "") {
      return new Promise((t) => {
        chrome.runtime.sendMessage({ name: e, message: n, origin: o }, (r) => {
          chrome.runtime.lastError && (a(chrome.runtime.lastError, e, n), t(!1)), t(r);
        });
      });
    }
    function s(e, n, o = "", t = d()) {
      return a("Panel sendMessage: sending to background", e), chrome.runtime.sendMessage({ name: e, message: n, origin: o }, t);
    }
    function R(e) {
      e.preventDefault();
      let n = e.target;
      for (; !n.href; ) n = n.parentElement;
      const { href: o } = n;
      s("openNewTab", { url: o, become_active: !0 });
    }
    function O() {
      s("account.openSubscriptionPage"), window.close();
    }
    function k(e) {
      s("account.openCheckoutPage", { utm: e }), window.close();
    }
    function A(e) {
      e.preventDefault(), s("account.openSupportPage"), window.close();
    }
    function L(e) {
      e.preventDefault(), s("openAccountAndroid");
    }
    function p(e) {
      function n(r, c) {
        return h(r, c, e);
      }
      function o(r, c, l) {
        a(`origin ${e} sending to handler`, r), s(r, c, e, l);
      }
      function t(r, c, l) {
        a(`origin ${e} sending to background onMessageHandler`, r), s(r, c, "", l);
      }
      return { sendMessageInPromise: n, sendMessage: o, sendMessageToBackground: t };
    }
    const m = p("account_pages"),
      { sendMessage: w } = m;
    (function (e) {
      const n = [
          "accountPage.login",
          "accountPage.register",
          "accountPage.getUser",
          "accountPage.getUserSubscriptionData",
          "accountPage.logout"
        ],
        o = function () {
          n.forEach((t) => e.addEventListener(t, () => w(t)));
        };
      return {
        init() {
          o();
        }
      };
    })(window, document).init();
  })();
