(() => {
  var O = Object.defineProperty;
  var ne = Object.getOwnPropertyDescriptor;
  var ge = Object.getOwnPropertyNames;
  var ie = Object.prototype.hasOwnProperty;
  var ae = (r, e) => () => (r && (e = r((r = 0))), e);
  var S = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
    oe = (r, e) => {
      for (var t in e) O(r, t, { get: e[t], enumerable: !0 });
    },
    le = (r, e, t, i) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let s of ge(e)) !ie.call(r, s) && s !== t && O(r, s, { get: () => e[s], enumerable: !(i = ne(e, s)) || i.enumerable });
      return r;
    };
  var me = (r) => le(O({}, "__esModule", { value: !0 }), r);
  var W = S((j, U) => {
    (function (r, e) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], e);
      else if (typeof j < "u") e(U);
      else {
        var t = { exports: {} };
        e(t), (r.browser = t.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : j, function (r) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let e = "The message port closed before a response was received.",
          t = (i) => {
            let s = {
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
            if (Object.keys(s).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class a extends WeakMap {
              constructor(g, l = void 0) {
                super(l), (this.createItem = g);
              }
              get(g) {
                return this.has(g) || this.set(g, this.createItem(g)), super.get(g);
              }
            }
            let A = (n) => n && typeof n == "object" && typeof n.then == "function",
              T =
                (n, g) =>
                (...l) => {
                  i.runtime.lastError
                    ? n.reject(new Error(i.runtime.lastError.message))
                    : g.singleCallbackArg || (l.length <= 1 && g.singleCallbackArg !== !1)
                    ? n.resolve(l[0])
                    : n.resolve(l);
                },
              w = (n) => (n == 1 ? "argument" : "arguments"),
              y = (n, g) =>
                function (m, ...u) {
                  if (u.length < g.minArgs) throw new Error(`Expected at least ${g.minArgs} ${w(g.minArgs)} for ${n}(), got ${u.length}`);
                  if (u.length > g.maxArgs) throw new Error(`Expected at most ${g.maxArgs} ${w(g.maxArgs)} for ${n}(), got ${u.length}`);
                  return new Promise((d, f) => {
                    if (g.fallbackToNoCallback)
                      try {
                        m[n](...u, T({ resolve: d, reject: f }, g));
                      } catch (o) {
                        console.warn(
                          `${n} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          o
                        ),
                          m[n](...u),
                          (g.fallbackToNoCallback = !1),
                          (g.noCallback = !0),
                          d();
                      }
                    else g.noCallback ? (m[n](...u), d()) : m[n](...u, T({ resolve: d, reject: f }, g));
                  });
                },
              v = (n, g, l) =>
                new Proxy(g, {
                  apply(m, u, d) {
                    return l.call(u, n, ...d);
                  }
                }),
              C = Function.call.bind(Object.prototype.hasOwnProperty),
              P = (n, g = {}, l = {}) => {
                let m = Object.create(null),
                  u = {
                    has(f, o) {
                      return o in n || o in m;
                    },
                    get(f, o, p) {
                      if (o in m) return m[o];
                      if (!(o in n)) return;
                      let c = n[o];
                      if (typeof c == "function")
                        if (typeof g[o] == "function") c = v(n, n[o], g[o]);
                        else if (C(l, o)) {
                          let k = y(o, l[o]);
                          c = v(n, n[o], k);
                        } else c = c.bind(n);
                      else if (typeof c == "object" && c !== null && (C(g, o) || C(l, o))) c = P(c, g[o], l[o]);
                      else if (C(l, "*")) c = P(c, g[o], l["*"]);
                      else
                        return (
                          Object.defineProperty(m, o, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return n[o];
                            },
                            set(k) {
                              n[o] = k;
                            }
                          }),
                          c
                        );
                      return (m[o] = c), c;
                    },
                    set(f, o, p, c) {
                      return o in m ? (m[o] = p) : (n[o] = p), !0;
                    },
                    defineProperty(f, o, p) {
                      return Reflect.defineProperty(m, o, p);
                    },
                    deleteProperty(f, o) {
                      return Reflect.deleteProperty(m, o);
                    }
                  },
                  d = Object.create(n);
                return new Proxy(d, u);
              },
              M = (n) => ({
                addListener(g, l, ...m) {
                  g.addListener(n.get(l), ...m);
                },
                hasListener(g, l) {
                  return g.hasListener(n.get(l));
                },
                removeListener(g, l) {
                  g.removeListener(n.get(l));
                }
              }),
              re = new a((n) =>
                typeof n != "function"
                  ? n
                  : function (l) {
                      let m = P(l, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                      n(m);
                    }
              ),
              B = new a((n) =>
                typeof n != "function"
                  ? n
                  : function (l, m, u) {
                      let d = !1,
                        f,
                        o = new Promise((_) => {
                          f = function (h) {
                            (d = !0), _(h);
                          };
                        }),
                        p;
                      try {
                        p = n(l, m, f);
                      } catch (_) {
                        p = Promise.reject(_);
                      }
                      let c = p !== !0 && A(p);
                      if (p !== !0 && !c && !d) return !1;
                      let k = (_) => {
                        _.then(
                          (h) => {
                            u(h);
                          },
                          (h) => {
                            let q;
                            h && (h instanceof Error || typeof h.message == "string")
                              ? (q = h.message)
                              : (q = "An unexpected error occurred"),
                              u({ __mozWebExtensionPolyfillReject__: !0, message: q });
                          }
                        ).catch((h) => {
                          console.error("Failed to send onMessage rejected reply", h);
                        });
                      };
                      return k(c ? p : o), !0;
                    }
              ),
              se = ({ reject: n, resolve: g }, l) => {
                i.runtime.lastError
                  ? i.runtime.lastError.message === e
                    ? g()
                    : n(new Error(i.runtime.lastError.message))
                  : l && l.__mozWebExtensionPolyfillReject__
                  ? n(new Error(l.message))
                  : g(l);
              },
              I = (n, g, l, ...m) => {
                if (m.length < g.minArgs) throw new Error(`Expected at least ${g.minArgs} ${w(g.minArgs)} for ${n}(), got ${m.length}`);
                if (m.length > g.maxArgs) throw new Error(`Expected at most ${g.maxArgs} ${w(g.maxArgs)} for ${n}(), got ${m.length}`);
                return new Promise((u, d) => {
                  let f = se.bind(null, { resolve: u, reject: d });
                  m.push(f), l.sendMessage(...m);
                });
              },
              te = {
                devtools: { network: { onRequestFinished: M(re) } },
                runtime: { onMessage: M(B), onMessageExternal: M(B), sendMessage: I.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: I.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
              },
              L = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (s.privacy = { network: { "*": L }, services: { "*": L }, websites: { "*": L } }), P(i, te, s);
          };
        r.exports = t(chrome);
      } else r.exports = globalThis.browser;
    });
  });
  var H = S((fe, b) => {
    b.exports.browser = W();
    var E;
    typeof browser > "u" && typeof chrome < "u" && chrome.runtime
      ? /\bOPR\//.test(navigator.userAgent)
        ? (E = "opera")
        : (E = "chrome")
      : /\bEdge\//.test(navigator.userAgent)
      ? (E = "edge")
      : (E = "firefox"),
      (b.exports.browserType = E),
      typeof b.exports.browser.action > "u" && (b.exports.browser.action = b.exports.browser.browserAction),
      (b.exports.isBrowser = (...r) => {
        for (let e = 0; e < r.length; e++) if (r[e] == b.exports.browserType) return !0;
        return !1;
      }),
      (b.exports.error = (r) => {
        console.groupCollapsed(r.message), r.stack && console.error(r.stack), console.groupEnd();
      });
  });
  var Z = S((pe, X) => {
    var F = class {
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
      setPost(e, t) {
        typeof e == "string" ? (this.posts[e] = t) : (this.post = e);
      }
      setUseTarget(e) {
        this.useTarget = e;
      }
      setDebugLevel(e) {
        this.debugLevel = e;
      }
      setHook(e) {
        let t = this,
          i = Date.now();
        function s() {
          return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - i;
        }
        e
          ? (this.hook = (a) => {
              a.timestamp = s();
              try {
                e(a);
              } catch (A) {
                t.logger.warn("Hoor error", A);
              }
            })
          : (this.hook = this.nullHook);
      }
      nullHook() {}
      call() {
        let e = this,
          t,
          i,
          s,
          a,
          A = Array.prototype.slice.call(arguments);
        return (
          typeof A[0] == "function" && (t = A.shift()),
          e.useTarget ? ([i, s, ...a] = A) : ([s, ...a] = A),
          new Promise(function (T, w) {
            let y = ++e.replyId;
            e.debugLevel >= 2 && e.logger.info("rpc #" + y, "call =>", s, a),
              e.hook({ type: "call", callee: i, rid: y, method: s, args: a }),
              (e.replies[y] = { resolve: T, reject: w, peer: i });
            let v = t || (e.useTarget && e.posts[i]) || e.post;
            e.useTarget
              ? v(i, { type: "weh#rpc", _request: y, _method: s, _args: [...a] })
              : v({ type: "weh#rpc", _request: y, _method: s, _args: [...a] });
          })
        );
      }
      receive(e, t, i) {
        let s = this;
        if (e._request)
          Promise.resolve()
            .then(() => {
              let a = s.listeners[e._method];
              if (typeof a == "function")
                return (
                  s.debugLevel >= 2 && s.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                  s.hook({ type: "call", caller: i, rid: e._request, method: e._method, args: e._args }),
                  Promise.resolve(a.apply(null, e._args))
                    .then((A) => (s.hook({ type: "reply", caller: i, rid: e._request, result: A }), A))
                    .catch((A) => {
                      throw (s.hook({ type: "reply", caller: i, rid: e._request, error: A.message }), A);
                    })
                );
              throw new Error("Method " + e._method + " is not a function");
            })
            .then((a) => {
              s.debugLevel >= 2 && s.logger.info("rpc #" + e._request, "serve => ", a),
                t({ type: "weh#rpc", _reply: e._request, _result: a });
            })
            .catch((a) => {
              s.debugLevel >= 1 && s.logger.info("rpc #" + e._request, "serve => !", a.message),
                t({ type: "weh#rpc", _reply: e._request, _error: a.message });
            });
        else if (e._reply) {
          let a = s.replies[e._reply];
          delete s.replies[e._reply],
            a
              ? e._error
                ? (s.debugLevel >= 1 && s.logger.info("rpc #" + e._reply, "call <= !", e._error),
                  s.hook({ type: "reply", callee: a.peer, rid: e._reply, error: e._error }),
                  a.reject(new Error(e._error)))
                : (s.debugLevel >= 2 && s.logger.info("rpc #" + e._reply, "call <= ", e._result),
                  s.hook({ type: "reply", callee: a.peer, rid: e._reply, result: e._result }),
                  a.resolve(e._result))
              : s.logger.error("Missing reply handler");
        }
      }
      listen(e) {
        Object.assign(this.listeners, e);
      }
    };
    X.exports = new F();
  });
  var G = S((he, V) => {
    var x = H(),
      z = x.browser;
    x.rpc = Z();
    x.uiName = window._wehPanelName;
    x.uiName || (x.uiName = "injected-" + Math.round(Math.random() * 1e9));
    var Ae = "weh:" + z.runtime.id + ":" + x.uiName,
      N = z.runtime.connect({ name: Ae });
    x.rpc.setPost(N.postMessage.bind(N));
    N.onMessage.addListener((r) => {
      x.rpc.receive(r, N.postMessage.bind(N));
    });
    x.rpc.listen({ setPrefs: () => {}, close: () => {} });
    x.is_safe = (async () => {
      await x.rpc.call("appStarted", { uiName: x.uiName }), await x.rpc.call("appReady", { uiName: x.uiName });
    })();
    V.exports = x;
  });
  var Y = {};
  oe(Y, { SmartNameEvaluate: () => ue });
  function ue(r) {
    let e = r.xpath,
      t = null;
    function i() {
      if (((t = (t && t.trim()) || ""), t && r.regexp)) {
        let a = new RegExp(r.regexp, "m").exec(t);
        a ? (typeof a[1] < "u" ? (t = a[1] || "") : (t = a[0] || "")) : (t = "");
      }
    }
    switch (r.mode) {
      case "page-title":
        e = "/html/head/title/text()";
      case "page-content":
        t = document.evaluate(e, document, null, XPathResult.STRING_TYPE, null).stringValue || null;
        break;
      case "obfuscated":
        return new Promise((s, a) => {
          crypto.subtle
            .digest("SHA-256", new TextEncoder("utf-8").encode(window.location.href))
            .then((A) => {
              (t = Array.from(new Uint8Array(A))
                .slice(0, 16)
                .map((w) => ("00" + w.toString(16)).slice(-2))
                .join("")),
                i(),
                s(t);
            })
            .catch(a);
        });
      case "header-url":
        if (((t = r.headerFilename || r.urlFilename), !t)) {
          let s = ce.exec(window.location.href);
          s ? (t = s[1]) : (t = "");
        }
        break;
      default:
        t = "";
    }
    return i(), t.length > 128 && (t = t.substr(0, 64)), t;
  }
  var ce,
    K = ae(() => {
      ce = new RegExp("^.*?:/?/?[^/]+/(?:[^/]*/)*([^#\\?/]+?)(?:\\.[a-zA-Z0-9]{1,5})?(?:$|#|\\?|/)");
    });
  var R = G(),
    { SmartNameEvaluate: xe } = (K(), me(Y)),
    J = {
      getElementTreeXPath: (r) => {
        let e = [];
        for (; r && r.nodeType == Node.ELEMENT_NODE; r = r.parentNode) {
          let t = 0,
            i = !1;
          for (let A = r.previousSibling; A; A = A.previousSibling)
            A.nodeType != Node.DOCUMENT_TYPE_NODE && A.nodeName == r.nodeName && ++t;
          for (let A = r.nextSibling; A && !i; A = A.nextSibling) A.nodeName == r.nodeName && (i = !0);
          let s = (r.prefix ? r.prefix + ":" : "") + r.localName,
            a = t || i ? "[" + (t + 1) + "]" : "";
          e.splice(0, 0, s + a);
        }
        return e.length ? "/" + e.join("/") : null;
      },
      getElementXPath: (r) => (r && r.id ? '//*[@id="' + r.id + '"]' : J.getElementTreeXPath(r))
    },
    $ = !1;
  function Q() {
    return R.rpc
      .call("openSmartNameDefiner", window._wehPanelName)
      .then(
        () =>
          new Promise((r, e) => {
            let t = window.getSelection();
            if (t.rangeCount > 0) {
              let i = t.getRangeAt(0);
              i.startContainer === i.endContainer && i.startOffset == i.endOffset && r(null);
              let s = i.startContainer;
              s && s.nodeType == 3 && (s = s.parentElement), r(J.getElementXPath(s));
            } else r(null);
          })
      )
      .then((r) => (r && ["page-content", r]) || ["page-title", "/html/head/title/text()"])
      .then(([r, e]) =>
        R.rpc.call("setSmartNameData", { mode: r, xpath: e, domain: new URL(window.location.href).hostname, ref: R.uiName })
      );
  }
  Q();
  var D = null;
  function ee() {
    D && clearTimeout(D),
      !$ &&
        (D = setTimeout(() => {
          Q();
        }, 250));
  }
  document.addEventListener("selectionchange", ee);
  R.rpc.listen({
    evaluate: (r) => xe(r),
    select: (r) => {
      let e = window.getSelection();
      e.removeAllRanges();
      let t = document.evaluate(r, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (t) {
        ($ = !0),
          setTimeout(() => {
            $ = !1;
          }, 1e3);
        let i = document.createRange();
        return i.setStart(t, 0), i.setEndAfter(t), e.addRange(i), !0;
      }
      return !1;
    },
    close: () => {
      document.removeEventListener("selectionchange", ee);
    }
  });
})();
