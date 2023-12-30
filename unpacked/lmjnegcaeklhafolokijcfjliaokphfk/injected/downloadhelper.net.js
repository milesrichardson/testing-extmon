(() => {
  var N = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
  var B = N((R, F) => {
    (function (a, e) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], e);
      else if (typeof R < "u") e(F);
      else {
        var u = { exports: {} };
        e(u), (a.browser = u.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : R, function (a) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let e = "The message port closed before a response was received.",
          u = (m) => {
            let n = {
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
            if (Object.keys(n).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class o extends WeakMap {
              constructor(s, g = void 0) {
                super(g), (this.createItem = s);
              }
              get(s) {
                return this.has(s) || this.set(s, this.createItem(s)), super.get(s);
              }
            }
            let x = (r) => r && typeof r == "object" && typeof r.then == "function",
              E =
                (r, s) =>
                (...g) => {
                  m.runtime.lastError
                    ? r.reject(new Error(m.runtime.lastError.message))
                    : s.singleCallbackArg || (g.length <= 1 && s.singleCallbackArg !== !1)
                    ? r.resolve(g[0])
                    : r.resolve(g);
                },
              y = (r) => (r == 1 ? "argument" : "arguments"),
              w = (r, s) =>
                function (i, ...A) {
                  if (A.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${y(s.minArgs)} for ${r}(), got ${A.length}`);
                  if (A.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${y(s.maxArgs)} for ${r}(), got ${A.length}`);
                  return new Promise((d, p) => {
                    if (s.fallbackToNoCallback)
                      try {
                        i[r](...A, E({ resolve: d, reject: p }, s));
                      } catch (t) {
                        console.warn(
                          `${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          t
                        ),
                          i[r](...A),
                          (s.fallbackToNoCallback = !1),
                          (s.noCallback = !0),
                          d();
                      }
                    else s.noCallback ? (i[r](...A), d()) : i[r](...A, E({ resolve: d, reject: p }, s));
                  });
                },
              v = (r, s, g) =>
                new Proxy(s, {
                  apply(i, A, d) {
                    return g.call(A, r, ...d);
                  }
                }),
              P = Function.call.bind(Object.prototype.hasOwnProperty),
              M = (r, s = {}, g = {}) => {
                let i = Object.create(null),
                  A = {
                    has(p, t) {
                      return t in r || t in i;
                    },
                    get(p, t, f) {
                      if (t in i) return i[t];
                      if (!(t in r)) return;
                      let l = r[t];
                      if (typeof l == "function")
                        if (typeof s[t] == "function") l = v(r, r[t], s[t]);
                        else if (P(g, t)) {
                          let k = w(t, g[t]);
                          l = v(r, r[t], k);
                        } else l = l.bind(r);
                      else if (typeof l == "object" && l !== null && (P(s, t) || P(g, t))) l = M(l, s[t], g[t]);
                      else if (P(g, "*")) l = M(l, s[t], g["*"]);
                      else
                        return (
                          Object.defineProperty(i, t, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return r[t];
                            },
                            set(k) {
                              r[t] = k;
                            }
                          }),
                          l
                        );
                      return (i[t] = l), l;
                    },
                    set(p, t, f, l) {
                      return t in i ? (i[t] = f) : (r[t] = f), !0;
                    },
                    defineProperty(p, t, f) {
                      return Reflect.defineProperty(i, t, f);
                    },
                    deleteProperty(p, t) {
                      return Reflect.deleteProperty(i, t);
                    }
                  },
                  d = Object.create(r);
                return new Proxy(d, A);
              },
              S = (r) => ({
                addListener(s, g, ...i) {
                  s.addListener(r.get(g), ...i);
                },
                hasListener(s, g) {
                  return s.hasListener(r.get(g));
                },
                removeListener(s, g) {
                  s.removeListener(r.get(g));
                }
              }),
              z = new o((r) =>
                typeof r != "function"
                  ? r
                  : function (g) {
                      let i = M(g, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                      r(i);
                    }
              ),
              O = new o((r) =>
                typeof r != "function"
                  ? r
                  : function (g, i, A) {
                      let d = !1,
                        p,
                        t = new Promise((_) => {
                          p = function (h) {
                            (d = !0), _(h);
                          };
                        }),
                        f;
                      try {
                        f = r(g, i, p);
                      } catch (_) {
                        f = Promise.reject(_);
                      }
                      let l = f !== !0 && x(f);
                      if (f !== !0 && !l && !d) return !1;
                      let k = (_) => {
                        _.then(
                          (h) => {
                            A(h);
                          },
                          (h) => {
                            let q;
                            h && (h instanceof Error || typeof h.message == "string")
                              ? (q = h.message)
                              : (q = "An unexpected error occurred"),
                              A({ __mozWebExtensionPolyfillReject__: !0, message: q });
                          }
                        ).catch((h) => {
                          console.error("Failed to send onMessage rejected reply", h);
                        });
                      };
                      return k(l ? f : t), !0;
                    }
              ),
              G = ({ reject: r, resolve: s }, g) => {
                m.runtime.lastError
                  ? m.runtime.lastError.message === e
                    ? s()
                    : r(new Error(m.runtime.lastError.message))
                  : g && g.__mozWebExtensionPolyfillReject__
                  ? r(new Error(g.message))
                  : s(g);
              },
              $ = (r, s, g, ...i) => {
                if (i.length < s.minArgs) throw new Error(`Expected at least ${s.minArgs} ${y(s.minArgs)} for ${r}(), got ${i.length}`);
                if (i.length > s.maxArgs) throw new Error(`Expected at most ${s.maxArgs} ${y(s.maxArgs)} for ${r}(), got ${i.length}`);
                return new Promise((A, d) => {
                  let p = G.bind(null, { resolve: A, reject: d });
                  i.push(p), g.sendMessage(...i);
                });
              },
              V = {
                devtools: { network: { onRequestFinished: S(z) } },
                runtime: { onMessage: S(O), onMessageExternal: S(O), sendMessage: $.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: $.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
              },
              L = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (n.privacy = { network: { "*": L }, services: { "*": L }, websites: { "*": L } }), M(m, V, n);
          };
        a.exports = u(chrome);
      } else a.exports = globalThis.browser;
    });
  });
  var D = N((X, b) => {
    b.exports.browser = B();
    var T;
    typeof browser > "u" && typeof chrome < "u" && chrome.runtime
      ? /\bOPR\//.test(navigator.userAgent)
        ? (T = "opera")
        : (T = "chrome")
      : /\bEdge\//.test(navigator.userAgent)
      ? (T = "edge")
      : (T = "firefox"),
      (b.exports.browserType = T),
      typeof b.exports.browser.action > "u" && (b.exports.browser.action = b.exports.browser.browserAction),
      (b.exports.isBrowser = (...a) => {
        for (let e = 0; e < a.length; e++) if (a[e] == b.exports.browserType) return !0;
        return !1;
      }),
      (b.exports.error = (a) => {
        console.groupCollapsed(a.message), a.stack && console.error(a.stack), console.groupEnd();
      });
  });
  var I = N((Y, W) => {
    var j = class {
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
      setPost(e, u) {
        typeof e == "string" ? (this.posts[e] = u) : (this.post = e);
      }
      setUseTarget(e) {
        this.useTarget = e;
      }
      setDebugLevel(e) {
        this.debugLevel = e;
      }
      setHook(e) {
        let u = this,
          m = Date.now();
        function n() {
          return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - m;
        }
        e
          ? (this.hook = (o) => {
              o.timestamp = n();
              try {
                e(o);
              } catch (x) {
                u.logger.warn("Hoor error", x);
              }
            })
          : (this.hook = this.nullHook);
      }
      nullHook() {}
      call() {
        let e = this,
          u,
          m,
          n,
          o,
          x = Array.prototype.slice.call(arguments);
        return (
          typeof x[0] == "function" && (u = x.shift()),
          e.useTarget ? ([m, n, ...o] = x) : ([n, ...o] = x),
          new Promise(function (E, y) {
            let w = ++e.replyId;
            e.debugLevel >= 2 && e.logger.info("rpc #" + w, "call =>", n, o),
              e.hook({ type: "call", callee: m, rid: w, method: n, args: o }),
              (e.replies[w] = { resolve: E, reject: y, peer: m });
            let v = u || (e.useTarget && e.posts[m]) || e.post;
            e.useTarget
              ? v(m, { type: "weh#rpc", _request: w, _method: n, _args: [...o] })
              : v({ type: "weh#rpc", _request: w, _method: n, _args: [...o] });
          })
        );
      }
      receive(e, u, m) {
        let n = this;
        if (e._request)
          Promise.resolve()
            .then(() => {
              let o = n.listeners[e._method];
              if (typeof o == "function")
                return (
                  n.debugLevel >= 2 && n.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                  n.hook({ type: "call", caller: m, rid: e._request, method: e._method, args: e._args }),
                  Promise.resolve(o.apply(null, e._args))
                    .then((x) => (n.hook({ type: "reply", caller: m, rid: e._request, result: x }), x))
                    .catch((x) => {
                      throw (n.hook({ type: "reply", caller: m, rid: e._request, error: x.message }), x);
                    })
                );
              throw new Error("Method " + e._method + " is not a function");
            })
            .then((o) => {
              n.debugLevel >= 2 && n.logger.info("rpc #" + e._request, "serve => ", o),
                u({ type: "weh#rpc", _reply: e._request, _result: o });
            })
            .catch((o) => {
              n.debugLevel >= 1 && n.logger.info("rpc #" + e._request, "serve => !", o.message),
                u({ type: "weh#rpc", _reply: e._request, _error: o.message });
            });
        else if (e._reply) {
          let o = n.replies[e._reply];
          delete n.replies[e._reply],
            o
              ? e._error
                ? (n.debugLevel >= 1 && n.logger.info("rpc #" + e._reply, "call <= !", e._error),
                  n.hook({ type: "reply", callee: o.peer, rid: e._reply, error: e._error }),
                  o.reject(new Error(e._error)))
                : (n.debugLevel >= 2 && n.logger.info("rpc #" + e._reply, "call <= ", e._result),
                  n.hook({ type: "reply", callee: o.peer, rid: e._reply, result: e._result }),
                  o.resolve(e._result))
              : n.logger.error("Missing reply handler");
        }
      }
      listen(e) {
        Object.assign(this.listeners, e);
      }
    };
    W.exports = new j();
  });
  var Z = N((ee, H) => {
    var c = D(),
      U = c.browser;
    c.rpc = I();
    c.uiName = window._wehPanelName;
    c.uiName || (c.uiName = "injected-" + Math.round(Math.random() * 1e9));
    var K = "weh:" + U.runtime.id + ":" + c.uiName,
      C = U.runtime.connect({ name: K });
    c.rpc.setPost(C.postMessage.bind(C));
    C.onMessage.addListener((a) => {
      c.rpc.receive(a, C.postMessage.bind(C));
    });
    c.rpc.listen({ setPrefs: () => {}, close: () => {} });
    c.is_safe = (async () => {
      await c.rpc.call("appStarted", { uiName: c.uiName }), await c.rpc.call("appReady", { uiName: c.uiName });
    })();
    H.exports = c;
  });
  var J = Z();
  window.addEventListener("message", (a) => {
    window.self == window.top &&
      a.data.fromContent &&
      a.data.type == "recheck-license" &&
      J.rpc
        .call("validateLicense", a.data.key)
        .then((e) => {
          window.postMessage({ fromAddon: !0, licenseStatus: e.status, licenseEmail: e.email }, "*");
        })
        .catch((e) => {
          window.location.href = "/install-coapp-v2";
        });
  });
})();
