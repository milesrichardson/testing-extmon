(() => {
  var C = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
  var D = C((R, W) => {
    (function (n, e) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], e);
      else if (typeof R < "u") e(W);
      else {
        var m = { exports: {} };
        e(m), (n.browser = m.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : R, function (n) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let e = "The message port closed before a response was received.",
          m = (a) => {
            let t = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 }
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 }
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 }
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 }
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 }
              },
              devtools: {
                inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 } },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } }
                }
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
              },
              extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 }
              },
              i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 }
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 }
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 }
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 }
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 }
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 }
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 }
                },
                managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 }
                }
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 }
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } },
              webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 }
              }
            };
            if (Object.keys(t).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class o extends WeakMap {
              constructor(s, i = void 0) {
                super(i), (this.createItem = s);
              }
              get(s) {
                return this.has(s) || this.set(s, this.createItem(s)), super.get(s);
              }
            }
            let u = (r) => r && typeof r == "object" && typeof r.then == "function",
              k =
                (r, s) =>
                (...i) => {
                  a.runtime.lastError
                    ? r.reject(new Error(a.runtime.lastError.message))
                    : s.singleCallbackArg || (i.length <= 1 && s.singleCallbackArg !== !1)
                    ? r.resolve(i[0])
                    : r.resolve(i);
                },
              h = (r) => (r == 1 ? "argument" : "arguments"),
              b = (r, s) =>
                function (l, ...c) {
                  if (c.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${h(s.minArgs)} for ${r}(), got ${c.length}`);
                  if (c.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${h(s.maxArgs)} for ${r}(), got ${c.length}`);
                  return new Promise((d, p) => {
                    if (s.fallbackToNoCallback)
                      try {
                        l[r](...c, k({ resolve: d, reject: p }, s));
                      } catch (g) {
                        console.warn(
                          `${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          g
                        ),
                          l[r](...c),
                          (s.fallbackToNoCallback = !1),
                          (s.noCallback = !0),
                          d();
                      }
                    else s.noCallback ? (l[r](...c), d()) : l[r](...c, k({ resolve: d, reject: p }, s));
                  });
                },
              v = (r, s, i) =>
                new Proxy(s, {
                  apply(l, c, d) {
                    return i.call(c, r, ...d);
                  }
                }),
              P = Function.call.bind(Object.prototype.hasOwnProperty),
              M = (r, s = {}, i = {}) => {
                let l = Object.create(null),
                  c = {
                    has(p, g) {
                      return g in r || g in l;
                    },
                    get(p, g, f) {
                      if (g in l) return l[g];
                      if (!(g in r)) return;
                      let A = r[g];
                      if (typeof A == "function")
                        if (typeof s[g] == "function") A = v(r, r[g], s[g]);
                        else if (P(i, g)) {
                          let _ = b(g, i[g]);
                          A = v(r, r[g], _);
                        } else A = A.bind(r);
                      else if (typeof A == "object" && A !== null && (P(s, g) || P(i, g))) A = M(A, s[g], i[g]);
                      else if (P(i, "*")) A = M(A, s[g], i["*"]);
                      else
                        return (
                          Object.defineProperty(l, g, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return r[g];
                            },
                            set(_) {
                              r[g] = _;
                            }
                          }),
                          A
                        );
                      return (l[g] = A), A;
                    },
                    set(p, g, f, A) {
                      return g in l ? (l[g] = f) : (r[g] = f), !0;
                    },
                    defineProperty(p, g, f) {
                      return Reflect.defineProperty(l, g, f);
                    },
                    deleteProperty(p, g) {
                      return Reflect.deleteProperty(l, g);
                    }
                  },
                  d = Object.create(r);
                return new Proxy(d, c);
              },
              N = (r) => ({
                addListener(s, i, ...l) {
                  s.addListener(r.get(i), ...l);
                },
                hasListener(s, i) {
                  return s.hasListener(r.get(i));
                },
                removeListener(s, i) {
                  s.removeListener(r.get(i));
                }
              }),
              re = new o((r) =>
                typeof r != "function"
                  ? r
                  : function (i) {
                      let l = M(i, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                      r(l);
                    }
              ),
              F = new o((r) =>
                typeof r != "function"
                  ? r
                  : function (i, l, c) {
                      let d = !1,
                        p,
                        g = new Promise((T) => {
                          p = function (w) {
                            (d = !0), T(w);
                          };
                        }),
                        f;
                      try {
                        f = r(i, l, p);
                      } catch (T) {
                        f = Promise.reject(T);
                      }
                      let A = f !== !0 && u(f);
                      if (f !== !0 && !A && !d) return !1;
                      let _ = (T) => {
                        T.then(
                          (w) => {
                            c(w);
                          },
                          (w) => {
                            let L;
                            w && (w instanceof Error || typeof w.message == "string")
                              ? (L = w.message)
                              : (L = "An unexpected error occurred"),
                              c({ __mozWebExtensionPolyfillReject__: !0, message: L });
                          }
                        ).catch((w) => {
                          console.error("Failed to send onMessage rejected reply", w);
                        });
                      };
                      return _(A ? f : g), !0;
                    }
              ),
              se = ({ reject: r, resolve: s }, i) => {
                a.runtime.lastError
                  ? a.runtime.lastError.message === e
                    ? s()
                    : r(new Error(a.runtime.lastError.message))
                  : i && i.__mozWebExtensionPolyfillReject__
                  ? r(new Error(i.message))
                  : s(i);
              },
              U = (r, s, i, ...l) => {
                if (l.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${h(s.minArgs)} for ${r}(), got ${l.length}`);
                if (l.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${h(s.maxArgs)} for ${r}(), got ${l.length}`);
                return new Promise((c, d) => {
                  let p = se.bind(null, { resolve: c, reject: d });
                  l.push(p), i.sendMessage(...l);
                });
              },
              te = {
                devtools: { network: { onRequestFinished: N(re) } },
                runtime: { onMessage: N(F), onMessageExternal: N(F), sendMessage: U.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: U.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
              },
              q = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (t.privacy = { network: { "*": q }, services: { "*": q }, websites: { "*": q } }), M(a, te, t);
          };
        n.exports = m(chrome);
      } else n.exports = globalThis.browser;
    });
  });
  var j = C((me, y) => {
    y.exports.browser = D();
    var E;
    typeof browser > "u" && typeof chrome < "u" && chrome.runtime
      ? /\bOPR\//.test(navigator.userAgent)
        ? (E = "opera")
        : (E = "chrome")
      : /\bEdge\//.test(navigator.userAgent)
      ? (E = "edge")
      : (E = "firefox"),
      (y.exports.browserType = E),
      typeof y.exports.browser.action > "u" && (y.exports.browser.action = y.exports.browser.browserAction),
      (y.exports.isBrowser = (...n) => {
        for (let e = 0; e < n.length; e++) if (n[e] == y.exports.browserType) return !0;
        return !1;
      }),
      (y.exports.error = (n) => {
        console.groupCollapsed(n.message), n.stack && console.error(n.stack), console.groupEnd();
      });
  });
  var z = C((Ae, H) => {
    var O = class {
      constructor() {
        (this.replyId = 0),
          (this.replies = {}),
          (this.listeners = {}),
          (this.hook = this.nullHook),
          (this.debugLevel = 0),
          (this.useTarget = !1),
          (this.logger = console),
          (this.posts = {});
      }
      setPost(e, m) {
        typeof e == "string" ? (this.posts[e] = m) : (this.post = e);
      }
      setUseTarget(e) {
        this.useTarget = e;
      }
      setDebugLevel(e) {
        this.debugLevel = e;
      }
      setHook(e) {
        let m = this,
          a = Date.now();
        function t() {
          return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - a;
        }
        e
          ? (this.hook = (o) => {
              o.timestamp = t();
              try {
                e(o);
              } catch (u) {
                m.logger.warn("Hoor error", u);
              }
            })
          : (this.hook = this.nullHook);
      }
      nullHook() {}
      call() {
        let e = this,
          m,
          a,
          t,
          o,
          u = Array.prototype.slice.call(arguments);
        return (
          typeof u[0] == "function" && (m = u.shift()),
          e.useTarget ? ([a, t, ...o] = u) : ([t, ...o] = u),
          new Promise(function (k, h) {
            let b = ++e.replyId;
            e.debugLevel >= 2 && e.logger.info("rpc #" + b, "call =>", t, o),
              e.hook({ type: "call", callee: a, rid: b, method: t, args: o }),
              (e.replies[b] = { resolve: k, reject: h, peer: a });
            let v = m || (e.useTarget && e.posts[a]) || e.post;
            e.useTarget
              ? v(a, { type: "weh#rpc", _request: b, _method: t, _args: [...o] })
              : v({ type: "weh#rpc", _request: b, _method: t, _args: [...o] });
          })
        );
      }
      receive(e, m, a) {
        let t = this;
        if (e._request)
          Promise.resolve()
            .then(() => {
              let o = t.listeners[e._method];
              if (typeof o == "function")
                return (
                  t.debugLevel >= 2 && t.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                  t.hook({ type: "call", caller: a, rid: e._request, method: e._method, args: e._args }),
                  Promise.resolve(o.apply(null, e._args))
                    .then((u) => (t.hook({ type: "reply", caller: a, rid: e._request, result: u }), u))
                    .catch((u) => {
                      throw (t.hook({ type: "reply", caller: a, rid: e._request, error: u.message }), u);
                    })
                );
              throw new Error("Method " + e._method + " is not a function");
            })
            .then((o) => {
              t.debugLevel >= 2 && t.logger.info("rpc #" + e._request, "serve => ", o),
                m({ type: "weh#rpc", _reply: e._request, _result: o });
            })
            .catch((o) => {
              t.debugLevel >= 1 && t.logger.info("rpc #" + e._request, "serve => !", o.message),
                m({ type: "weh#rpc", _reply: e._request, _error: o.message });
            });
        else if (e._reply) {
          let o = t.replies[e._reply];
          delete t.replies[e._reply],
            o
              ? e._error
                ? (t.debugLevel >= 1 && t.logger.info("rpc #" + e._reply, "call <= !", e._error),
                  t.hook({ type: "reply", callee: o.peer, rid: e._reply, error: e._error }),
                  o.reject(new Error(e._error)))
                : (t.debugLevel >= 2 && t.logger.info("rpc #" + e._reply, "call <= ", e._result),
                  t.hook({ type: "reply", callee: o.peer, rid: e._reply, result: e._result }),
                  o.resolve(e._result))
              : t.logger.error("Missing reply handler");
        }
      }
      listen(e) {
        Object.assign(this.listeners, e);
      }
    };
    H.exports = new O();
  });
  var K = C((ce, G) => {
    var x = j(),
      Z = x.browser;
    x.rpc = z();
    x.uiName = window._wehPanelName;
    x.uiName || (x.uiName = "injected-" + Math.round(Math.random() * 1e9));
    var ne = "weh:" + Z.runtime.id + ":" + x.uiName,
      S = Z.runtime.connect({ name: ne });
    x.rpc.setPost(S.postMessage.bind(S));
    S.onMessage.addListener((n) => {
      x.rpc.receive(n, S.postMessage.bind(S));
    });
    x.rpc.listen({ setPrefs: () => {}, close: () => {} });
    x.is_safe = (async () => {
      await x.rpc.call("appStarted", { uiName: x.uiName }), await x.rpc.call("appReady", { uiName: x.uiName });
    })();
    G.exports = x;
  });
  var Y = C((ue, X) => {
    var { browser: I } = j(),
      J = {},
      V = new RegExp("\\$[a-zA-Z]*([0-9]+)\\$", "g"),
      Q = !1,
      ge = I.storage.local.get("wehI18nCustom").then((n) => {
        Q = !0;
        let e = n.wehI18nCustom;
        e && Object.assign(J, e);
      });
    function oe(n, e) {
      if ((Q || console.warn("Using `weh._` before custom strings were loaded:", n), /-/.test(n))) {
        let a = n.replace(/-/g, "_");
        console.warn("Wrong i18n message name. Should it be", a, "instead of", n, "?"), (n = a);
      }
      let m = J[n];
      return (
        e && !Array.isArray(e) && (e = [e]),
        m && m.message.length > 0
          ? (m.message || "").replace(V, (a) => {
              let t = V.exec(a);
              return (t && e && e[parseInt(t[1]) - 1]) || "??";
            })
          : e
          ? I.i18n.getMessage(n, e)
          : I.i18n.getMessage(n)
      );
    }
    X.exports = { getMessage: oe, custom_strings_ready: ge };
  });
  var B = K(),
    ie = new RegExp("\\bv=([^&]+)");
  function ee() {
    let n = window.getSelection();
    if (!n) return;
    let e = {};
    for (let a = 0; a < n.rangeCount; a++) {
      let t = n.getRangeAt(a),
        o = t.commonAncestorContainer;
      if ((o.nodeType == 1 && (o = o.parentNode), typeof o.querySelectorAll != "function")) continue;
      let u = o.querySelectorAll("a[href]");
      Array.from(u).forEach((k) => {
        if (!t.isPointInRange(k, 0)) return;
        let h = k.getAttribute("href");
        if (h && h.length > 0) {
          let b = ie.exec(h);
          b && (e[b[1]] = 1);
        }
      });
    }
    let m = window._$vdhTopUrl;
    try {
      m = window.top.location.href;
    } catch {}
    B.rpc.call("tbvwsSelectedIds", { pageUrl: window.location.href, topUrl: m, ids: Object.keys(e) });
  }
  var $ = null;
  document.addEventListener("selectionchange", function () {
    $ && clearTimeout($),
      ($ = setTimeout(() => {
        ee();
      }, 25));
  });
  ee();
  function ae() {
    B._ = Y().getMessage;
    let n = document.createElement("div");
    Object.assign(n.style, {
      backgroundColor: "rgba(0,0,0,.75)",
      position: "fixed",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 2147483647,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    });
    let e = document.createElement("div");
    Object.assign(e.style, {
      backgroundColor: "#fff",
      color: "#444",
      maxWidth: "400px",
      padding: "1em",
      textAlign: "center",
      fontSize: "2em",
      opacity: 1
    }),
      e.appendChild(document.createTextNode(B._("bulk_in_progress"))),
      n.appendChild(e),
      setInterval(() => {
        !n.parentNode && document.body && document.body.appendChild(n);
      }, 100);
    let m = setInterval(() => {
      let a = document.querySelector("button.videoAdUiSkipButton");
      a && (clearInterval(m), a.click());
    }, 250);
  }
  /vdh\-bulk=/.test(window.location.href) && ae();
})();
