(() => {
  "use strict";
  var e = {
      8096: (e, n) => {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var t = [],
          o = {};
        function r(e, n) {
          for (const [t, o] of Object.entries(n))
            e[t]
              ? typeof o == typeof e[t]
                ? Array.isArray(o)
                  ? (e[t] = e[t].concat(o))
                  : (e[t] = "object" != typeof o ? o : r(e[t], o))
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
            (e = r(e || {}, {
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
        n.isIFrame = void 0;
        const o = t(8096);
        n.isIFrame = window.parent !== window;
      }
    },
    n = {};
  (function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var i = (n[o] = { exports: {} });
    return e[o](i, i.exports, t), i.exports;
  })(4721);
})();
