(() => {
  "use strict";
  var e = {
      8096: (e, n) => {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = [],
          t = {};
        function r(e, n) {
          for (const [o, t] of Object.entries(n))
            e[o]
              ? typeof t == typeof e[o]
                ? Array.isArray(t)
                  ? (e[o] = e[o].concat(t))
                  : (e[o] = "object" != typeof t ? t : r(e[o], t))
                : console.log(`skipping ${o} due to conflicting types`)
              : (e[o] = t);
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
                create: function (e, n, o) {
                  null != n && void 0 !== n.priority && null !== n.priority && n.priority > 0 && window.alert(n.message), o(e);
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
                    o.push(e);
                  },
                  removeListener: function (e) {
                    o.splice(o.indexOf(e), 1);
                  }
                },
                sendMessage: function (e) {
                  for (let n = 0; n < o.length; ++n) o[n](e);
                },
                id: "ndjpnladcallmjemlbaebfadecfhkepb"
              },
              storage: {
                local: {
                  get: function (e, n) {
                    n({ [e]: t[e] });
                  },
                  set: function (e) {
                    for (const n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  },
                  remove: function (e, n) {
                    delete t[e], n(t);
                  },
                  clear: function (e, n) {
                    t = {};
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
      4721: (e, n, o) => {
        Object.defineProperty(n, "__esModule", { value: !0 }), (n.log = n.isIFrame = void 0);
        const t = o(8096);
        (n.isIFrame = window.parent !== window),
          (n.log = function (e, o = "DEBUG") {
            var r = (() => {
              var e = new Error().stack.split("\n");
              if (!(e.length < 4)) return e[3].match(/\b[\w.]+\b:\d+/g).pop();
            })();
            t.default.runtime.sendMessage({ activity: "log", filename: `${n.isIFrame ? "(iframe)" : ""}${r || ""}`, severity: o, log: e });
          });
      }
    },
    n = {};
  function o(t) {
    var r = n[t];
    if (void 0 !== r) return r.exports;
    var s = (n[t] = { exports: {} });
    return e[t](s, s.exports, o), s.exports;
  }
  (() => {
    const e = o(4721);
    let n = null;
    e.isIFrame || "login.microsoftonline.com" !== location.hostname || e.log(`Loaded ${location.href}`),
      window.addEventListener(
        "message",
        function (o) {
          if (o.data.channel) {
            const a = "53ee284d-920a-4b59-9d30-a60315b26836";
            try {
              if (o.data.channel !== a) return void e.log(`bad channel: ${o.data}`);
              if (o.source !== window) return void e.log(`invalid event.source: ${o.source}`);
              const c = o.data,
                d = c.body.method,
                l = chrome.runtime.id;
              if ("CreateProviderAsync" === d) {
                const e = document.getElementById(`ch-${a}`);
                if (e) {
                  var t = document.createElement("div");
                  t.id = l;
                  var r = chrome.runtime.getManifest().version;
                  r && t.setAttribute("ver", r), e.appendChild(t);
                }
                return;
              }
              if (
                (n ||
                  (n = {
                    Call: function (e, o) {
                      try {
                        chrome.runtime.sendMessage({ activity: "sso", body: e.body }, function (t) {
                          if (null != t) n.Callback(e, t, o);
                          else {
                            const t = chrome.runtime.lastError ? chrome.runtime.lastError.message : "No response";
                            n.Callback(e, { status: "Fail", code: "ContentError", description: t }, o);
                          }
                        });
                      } catch (t) {
                        n.Callback(e, { status: "Fail", code: "ContentError", description: t.toString() }, o);
                      }
                    },
                    Callback: function (n, o, t) {
                      const r = { channel: a, extensionId: l, responseId: n.responseId, body: { method: "Response", response: o } };
                      e.log(`SSO response status: ${JSON.stringify(o.status)}`, "Fail" === o.status ? "ERROR" : "DEBUG"),
                        t
                          ? (e.log("Sending response over MessageChannel port"), t.postMessage(r))
                          : (e.log("Sending response over window.postMessage"), window.postMessage(r, location.origin));
                    }
                  }),
                "Handshake" !== d || (c.extensionId && c.extensionId !== l) || !o.ports || !o.ports.length)
              )
                c.extensionId === l && "Response" !== d ? n.Call(c) : e.log(`method: ${d} not handled, location: ${location.href}`);
              else {
                o.stopImmediatePropagation(), e.log("Received Handshake request, sending HandshakeResponse");
                var s = {
                    channel: a,
                    extensionId: l,
                    responseId: c.responseId,
                    body: { method: "HandshakeResponse", version: chrome.runtime.getManifest().version }
                  },
                  i = o.ports[0];
                (i.onmessage = (e) => {
                  var o = e.data;
                  n.Call(o, i);
                }),
                  i.postMessage(s);
              }
            } catch (n) {
              e.log(`caught exception: ${JSON.stringify(n)}`, "INFO");
            }
          }
        },
        !0
      );
  })();
})();
