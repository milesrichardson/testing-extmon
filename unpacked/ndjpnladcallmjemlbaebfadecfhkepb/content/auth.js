(() => {
  "use strict";
  var e = {
      8096: (e, n) => {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var t = [],
          o = {};
        function i(e, n) {
          for (const [t, o] of Object.entries(n))
            e[t]
              ? typeof o == typeof e[t]
                ? Array.isArray(o)
                  ? (e[t] = e[t].concat(o))
                  : (e[t] = "object" != typeof o ? o : i(e[t], o))
                : console.log(`skipping ${t} due to conflicting types`)
              : (e[t] = o);
          return e;
        }
        n.default = (function () {
          var e = (() => {
            if ("object" == typeof browser) {
              var e = Object.create(browser);
              (e.notifications = {
                clear: function (e, n) {
                  n(!1);
                },
                create: function (e, n, t) {
                  null != n && void 0 !== n.priority && null !== n.priority && n.priority > 0 && window.alert(n.message), t(e);
                },
                onButtonClicked: { addListener: function (e) {} },
                onClicked: { addListener: function (e) {} }
              }),
                (e.runtime = { getPlatformInfo: function (e) {} });
            } else if ("object" == typeof chrome) return Object.create(chrome);
          })();
          if (window.jasmine) {
            (e = i(e || {}, {
              mock: !0,
              browserAction: { setIcon: function (e) {} },
              extension: {
                getURL: function (e) {
                  return "";
                }
              },
              i18n: {
                getUILanguage: function (e, n) {
                  return "";
                },
                getMessage: function () {
                  return "";
                }
              },
              runtime: {
                onMessage: {
                  addListener: function (e) {
                    t.push(e);
                  },
                  removeListener: function (e) {
                    t.splice(t.indexOf(e), 1);
                  }
                },
                sendMessage: function (e) {
                  for (let n = 0; n < t.length; ++n) t[n](e);
                },
                id: "ndjpnladcallmjemlbaebfadecfhkepb"
              },
              storage: {
                local: {
                  get: function (e, n) {
                    n({ [e]: o[e] });
                  },
                  set: function (e) {
                    for (const n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
                  },
                  remove: function (e, n) {
                    delete o[e], n(o);
                  },
                  clear: function (e, n) {
                    o = {};
                  }
                }
              },
              tabs: {
                create: function (e, n) {
                  n && n({});
                }
              }
            })),
              window.chrome || (window.chrome = e);
          }
          return window.BrowserHandler || (window.BrowserHandler = e), e;
        })();
      },
      4721: (e, n, t) => {
        Object.defineProperty(n, "__esModule", { value: !0 }), (n.log = n.isIFrame = void 0);
        const o = t(8096);
        (n.isIFrame = window.parent !== window),
          (n.log = function (e, t = "DEBUG") {
            var i = (() => {
              var e = new Error().stack.split("\n");
              if (!(e.length < 4)) return e[3].match(/\b[\w.]+\b:\d+/g).pop();
            })();
            o.default.runtime.sendMessage({ activity: "log", filename: `${n.isIFrame ? "(iframe)" : ""}${i || ""}`, severity: t, log: e });
          });
      }
    },
    n = {};
  function t(o) {
    var i = n[o];
    if (void 0 !== i) return i.exports;
    var r = (n[o] = { exports: {} });
    return e[o](r, r.exports, t), r.exports;
  }
  (() => {
    const e = t(8096);
    function n(n, t) {
      const o = { activity: "authorization", origin: window.location.origin, type: n, close: !0 };
      Object.assign(o, t), (location.hash = ""), e.default.runtime.sendMessage(o);
    }
    t(4721).log(`navigated to: ${location.href}`),
      window.addEventListener("load", function () {
        const e = (function (e) {
          const n = e.split(/[?#]/);
          if (n.length < 2) return {};
          let t = 1;
          for (var o = {}; t < n.length; ) {
            e = n[t];
            var i = new URLSearchParams(e);
            for (var [r, c] of i.entries()) o[r] = c;
            t++;
          }
          return o;
        })(location.href);
        e.state &&
          e.state.includes("OfficeOnlineExtension") &&
          ("https://login.microsoftonline.com" === window.location.origin
            ? e.code
              ? n("o365UserService", e)
              : location.hash.length > 0 && "/common/oauth2/nativeclient" === location.pathname && n("msidUserService", e)
            : "https://login.live.com" === window.location.origin &&
              (e.code ? n("msaUserService", e) : "/oauth20_authorize" === location.pathname && n("msidUserService", e)));
      });
  })();
})();
