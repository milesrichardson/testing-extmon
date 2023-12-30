(() => {
  "use strict";
  var e,
    n = {
      8096: (e, n) => {
        var t = [],
          r = {};
        function o(e, n) {
          for (const [t, r] of Object.entries(n))
            e[t]
              ? typeof r == typeof e[t]
                ? Array.isArray(r)
                  ? (e[t] = e[t].concat(r))
                  : (e[t] = "object" != typeof r ? r : o(e[t], r))
                : console.log(`skipping ${t} due to conflicting types`)
              : (e[t] = r);
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
            (e = o(e || {}, {
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
                    n({ [e]: r[e] });
                  },
                  set: function (e) {
                    for (const n in e) e.hasOwnProperty(n) && (r[n] = e[n]);
                  },
                  remove: function (e, n) {
                    delete r[e], n(r);
                  },
                  clear: function (e, n) {
                    r = {};
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
      }
    },
    t = {};
  function r(e) {
    var o = t[e];
    if (void 0 !== o) return o.exports;
    var i = (t[e] = { exports: {} });
    return n[e](i, i.exports, r), i.exports;
  }
  (e = r(8096)).default.runtime.onMessage.addListener(function (n, t, r) {
    if ("nucleusMessage" === n.activity)
      return (function (n, t, r) {
        return (
          e.default.runtime.sendNativeMessage("com.microsoft.onedrive.nucleus.auth.provider", n, (e) => {
            r(e);
          }),
          e.default.runtime.lastError && r({ success: !1, lastError: e.default.runtime.lastError.message }),
          !0
        );
      })(n.body, 0, r);
  });
})();
