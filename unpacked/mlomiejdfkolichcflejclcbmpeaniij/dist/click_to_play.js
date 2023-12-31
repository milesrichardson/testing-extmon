typeof browser < "u" && (chrome = browser),
  (() => {
    "use strict";
    var O = {};
    let y = chrome.runtime.getManifest().debug || !1;
    function v() {
      return y;
    }
    function N(e = !0) {
      y = e;
    }
    function E(...e) {
      const n = e.toString().toLowerCase().includes("error");
      return e.unshift(`${new Date().toLocaleTimeString()}	`), n ? (console.error(...e), console.trace()) : console.log(...e), !0;
    }
    function h(...e) {
      return y ? E(...e) : !1;
    }
    function C(...e) {
      return new Promise((n, r) => {
        chrome.storage.local.get(e.length ? e : null, (t) => {
          if (chrome.runtime.lastError) h("prefsGet ERROR", chrome.runtime.lastError), r(chrome.runtime.lastError);
          else {
            let o = null;
            if (e.length <= 0) o = t;
            else if (e.length === 1) {
              const i = e[0];
              t && t.hasOwnProperty(i) && (o = t[i]);
            } else
              (o = {}),
                e.forEach((i) => {
                  (o[i] = null), t && t.hasOwnProperty(i) && (o[i] = t[i]);
                });
            n(o);
          }
        });
      });
    }
    function P(e) {
      if (e == null) throw new Error("Bad argument");
      return new Promise((n, r) => {
        try {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError ? (E("prefsSet ERROR", chrome.runtime.lastError), r(chrome.runtime.lastError)) : n(e);
          });
        } catch (t) {
          E("prefsSet ERROR", t), r(t);
        }
      });
    }
    function R(e, n) {
      return typeof n > "u" ? C(e) : P({ [e]: n });
    }
    function I(e) {
      let n = 0,
        r,
        t;
      if (e.length === 0) return n;
      for (t = 0; t < e.length; t++) (r = e.charCodeAt(t)), (n = (n << 5) - n + r), (n &= n);
      return n;
    }
    function x(e) {
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
    function T() {
      return new Date().toISOString().split("T")[0];
    }
    const k = () => {
      chrome.runtime.lastError && h("defaultCallback error:", chrome.runtime.lastError);
    };
    function _(e, n, r = "") {
      return new Promise((t) => {
        chrome.runtime.sendMessage({ name: e, message: n, origin: r }, (o) => {
          chrome.runtime.lastError && (h(chrome.runtime.lastError, e, n), t(!1)), t(o);
        });
      });
    }
    function g(e, n, r = "", t = k()) {
      return h("Panel sendMessage: sending to background", e), chrome.runtime.sendMessage({ name: e, message: n, origin: r }, t);
    }
    function B(e) {
      e.preventDefault();
      let n = e.target;
      for (; !n.href; ) n = n.parentElement;
      const { href: r } = n;
      g("openNewTab", { url: r, become_active: !0 });
    }
    function $() {
      g("account.openSubscriptionPage"), window.close();
    }
    function D(e) {
      g("account.openCheckoutPage", { utm: e }), window.close();
    }
    function j(e) {
      e.preventDefault(), g("account.openSupportPage"), window.close();
    }
    function A(e) {
      e.preventDefault(), g("openAccountAndroid");
    }
    function S(e) {
      function n(o, i) {
        return _(o, i, e);
      }
      function r(o, i, p) {
        h(`origin ${e} sending to handler`, o), g(o, i, e, p);
      }
      function t(o, i, p) {
        h(`origin ${e} sending to background onMessageHandler`, o), g(o, i, "", p);
      }
      return { sendMessageInPromise: n, sendMessage: r, sendMessageToBackground: t };
    }
    const M = S("click_to_play"),
      { sendMessage: b } = M,
      { onMessage: L } = chrome.runtime;
    (function (e, n) {
      const r = function (l) {
          return n.createElement(l);
        },
        t = function (l, ...c) {
          for (let d = 0; d < c.length; d++) l.appendChild(c[d]);
        },
        o = function (l, c, d) {
          l.addEventListener(
            "load",
            () => {
              const a = l.contentDocument;
              (a.documentElement.innerHTML = d),
                c.button
                  ? ((l.style.width = "30px"), (l.style.height = "19px"), (l.style.border = "0px"))
                  : ((l.style.width = "100%"), (l.style.border = "1px solid #ccc"), (l.style.height = "80px")),
                c.frameColor && (l.style.background = c.frameColor);
              const u = a.getElementById("action-once");
              u &&
                u.addEventListener(
                  "click",
                  (s) => {
                    b("processC2P", { action: "once", app_ids: c.allow }, () => {
                      n.location.reload();
                    }),
                      s.preventDefault();
                  },
                  !0
                );
              const m = a.getElementById("action-always");
              m &&
                m.addEventListener(
                  "click",
                  (s) => {
                    b("processC2P", { action: "always", app_ids: c.allow }, () => {
                      n.location.reload();
                    }),
                      s.preventDefault();
                  },
                  !0
                );
            },
            !1
          );
        },
        i = function (l, c, d) {
          c.forEach((a, u) => {
            const m = n.querySelectorAll(a.ele);
            for (let s = 0; s < m.length; s++) {
              const f = m[s],
                w = r("iframe");
              o(w, a, d[u]),
                (w.style.display = "inline-block"),
                (a.attach && a.attach === "parentNode") || f.nodeName === "IFRAME"
                  ? f.parentNode && f.parentNode.nodeName !== "BODY" && f.parentNode.nodeName !== "HEAD" && f.parentNode.replaceChild(w, f)
                  : ((f.textContent = ""), (f.style.display = "inline-block"), t(f, w));
            }
          });
        },
        p = function () {
          L.addListener((l, c, d) => {
            const { name: a, message: u } = l;
            return (
              h("click_to_play.js received message", a),
              a === "c2p" &&
                u &&
                Object.keys(u).forEach((s) => {
                  i(s, u[s].data, u[s].html), delete u[s];
                }),
              d(),
              !1
            );
          });
        };
      return {
        init() {
          p();
        }
      };
    })(window, document).init();
  })();
