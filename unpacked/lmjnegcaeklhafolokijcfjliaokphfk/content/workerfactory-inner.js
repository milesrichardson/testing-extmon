(() => {
  var L = (a, t) => () => (t || a((t = { exports: {} }).exports, t), t.exports);
  var O = L((P, F) => {
    (function (a, t) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], t);
      else if (typeof P < "u") t(F);
      else {
        var x = { exports: {} };
        t(x), (a.browser = x.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : P, function (a) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let t = "The message port closed before a response was received.",
          x = (d) => {
            let C = {
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
            if (Object.keys(C).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class S extends WeakMap {
              constructor(r, n = void 0) {
                super(n), (this.createItem = r);
              }
              get(r) {
                return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
              }
            }
            let j = (e) => e && typeof e == "object" && typeof e.then == "function",
              M =
                (e, r) =>
                (...n) => {
                  d.runtime.lastError
                    ? e.reject(new Error(d.runtime.lastError.message))
                    : r.singleCallbackArg || (n.length <= 1 && r.singleCallbackArg !== !1)
                    ? e.resolve(n[0])
                    : e.resolve(n);
                },
              w = (e) => (e == 1 ? "argument" : "arguments"),
              W = (e, r) =>
                function (g, ...m) {
                  if (m.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${w(r.minArgs)} for ${e}(), got ${m.length}`);
                  if (m.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${w(r.maxArgs)} for ${e}(), got ${m.length}`);
                  return new Promise((o, A) => {
                    if (r.fallbackToNoCallback)
                      try {
                        g[e](...m, M({ resolve: o, reject: A }, r));
                      } catch (s) {
                        console.warn(
                          `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          s
                        ),
                          g[e](...m),
                          (r.fallbackToNoCallback = !1),
                          (r.noCallback = !0),
                          o();
                      }
                    else r.noCallback ? (g[e](...m), o()) : g[e](...m, M({ resolve: o, reject: A }, r));
                  });
                },
              R = (e, r, n) =>
                new Proxy(r, {
                  apply(g, m, o) {
                    return n.call(m, e, ...o);
                  }
                }),
              p = Function.call.bind(Object.prototype.hasOwnProperty),
              k = (e, r = {}, n = {}) => {
                let g = Object.create(null),
                  m = {
                    has(A, s) {
                      return s in e || s in g;
                    },
                    get(A, s, l) {
                      if (s in g) return g[s];
                      if (!(s in e)) return;
                      let i = e[s];
                      if (typeof i == "function")
                        if (typeof r[s] == "function") i = R(e, e[s], r[s]);
                        else if (p(n, s)) {
                          let f = W(s, n[s]);
                          i = R(e, e[s], f);
                        } else i = i.bind(e);
                      else if (typeof i == "object" && i !== null && (p(r, s) || p(n, s))) i = k(i, r[s], n[s]);
                      else if (p(n, "*")) i = k(i, r[s], n["*"]);
                      else
                        return (
                          Object.defineProperty(g, s, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return e[s];
                            },
                            set(f) {
                              e[s] = f;
                            }
                          }),
                          i
                        );
                      return (g[s] = i), i;
                    },
                    set(A, s, l, i) {
                      return s in g ? (g[s] = l) : (e[s] = l), !0;
                    },
                    defineProperty(A, s, l) {
                      return Reflect.defineProperty(g, s, l);
                    },
                    deleteProperty(A, s) {
                      return Reflect.deleteProperty(g, s);
                    }
                  },
                  o = Object.create(e);
                return new Proxy(o, m);
              },
              T = (e) => ({
                addListener(r, n, ...g) {
                  r.addListener(e.get(n), ...g);
                },
                hasListener(r, n) {
                  return r.hasListener(e.get(n));
                },
                removeListener(r, n) {
                  r.removeListener(e.get(n));
                }
              }),
              q = new S((e) =>
                typeof e != "function"
                  ? e
                  : function (n) {
                      let g = k(n, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                      e(g);
                    }
              ),
              N = new S((e) =>
                typeof e != "function"
                  ? e
                  : function (n, g, m) {
                      let o = !1,
                        A,
                        s = new Promise((b) => {
                          A = function (c) {
                            (o = !0), b(c);
                          };
                        }),
                        l;
                      try {
                        l = e(n, g, A);
                      } catch (b) {
                        l = Promise.reject(b);
                      }
                      let i = l !== !0 && j(l);
                      if (l !== !0 && !i && !o) return !1;
                      let f = (b) => {
                        b.then(
                          (c) => {
                            m(c);
                          },
                          (c) => {
                            let E;
                            c && (c instanceof Error || typeof c.message == "string")
                              ? (E = c.message)
                              : (E = "An unexpected error occurred"),
                              m({ __mozWebExtensionPolyfillReject__: !0, message: E });
                          }
                        ).catch((c) => {
                          console.error("Failed to send onMessage rejected reply", c);
                        });
                      };
                      return f(i ? l : s), !0;
                    }
              ),
              U = ({ reject: e, resolve: r }, n) => {
                d.runtime.lastError
                  ? d.runtime.lastError.message === t
                    ? r()
                    : e(new Error(d.runtime.lastError.message))
                  : n && n.__mozWebExtensionPolyfillReject__
                  ? e(new Error(n.message))
                  : r(n);
              },
              $ = (e, r, n, ...g) => {
                if (g.length < r.minArgs) throw new Error(`Expected at least ${r.minArgs} ${w(r.minArgs)} for ${e}(), got ${g.length}`);
                if (g.length > r.maxArgs) throw new Error(`Expected at most ${r.maxArgs} ${w(r.maxArgs)} for ${e}(), got ${g.length}`);
                return new Promise((m, o) => {
                  let A = U.bind(null, { resolve: m, reject: o });
                  g.push(A), n.sendMessage(...g);
                });
              },
              D = {
                devtools: { network: { onRequestFinished: T(q) } },
                runtime: { onMessage: T(N), onMessageExternal: T(N), sendMessage: $.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: $.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
              },
              v = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (C.privacy = { network: { "*": v }, services: { "*": v }, websites: { "*": v } }), k(d, D, C);
          };
        a.exports = x(chrome);
      } else a.exports = globalThis.browser;
    });
  });
  var _ = L((z, u) => {
    u.exports.browser = O();
    var h;
    typeof browser > "u" && typeof chrome < "u" && chrome.runtime
      ? /\bOPR\//.test(navigator.userAgent)
        ? (h = "opera")
        : (h = "chrome")
      : /\bEdge\//.test(navigator.userAgent)
      ? (h = "edge")
      : (h = "firefox"),
      (u.exports.browserType = h),
      typeof u.exports.browser.action > "u" && (u.exports.browser.action = u.exports.browser.browserAction),
      (u.exports.isBrowser = (...a) => {
        for (let t = 0; t < a.length; t++) if (a[t] == u.exports.browserType) return !0;
        return !1;
      }),
      (u.exports.error = (a) => {
        console.groupCollapsed(a.message), a.stack && console.error(a.stack), console.groupEnd();
      });
  });
  var { browser: I } = _(),
    y = new Map(),
    B = new BroadcastChannel("workerfactory-inner");
  B.addEventListener("message", (a) => {
    if (a.data.type == "spawn-worker") {
      let t = a.data.path;
      if (y.has(t)) throw new Error(`Worker already running: ${t}`);
      let x = I.runtime.getURL(`/content/${t}`),
        d = new Worker(x);
      y.set(t, d);
    } else if (a.data.type == "kill-worker") {
      let t = a.data.path,
        x = y.get(t);
      if (!x) throw new Error("Worker not running.");
      x.terminate(), y.delete(t), B.postMessage({ type: "worker-killed", worker_path: t });
    }
  });
})();
