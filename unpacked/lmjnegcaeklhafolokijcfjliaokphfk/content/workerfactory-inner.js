(() => {
  var r = [
      (r, e, s) => {
        "use strict";
        var g;
        (e.browser = s(2)),
          (g =
            "undefined" == typeof browser && "undefined" != typeof chrome && chrome.runtime
              ? /\bOPR\//.test(navigator.userAgent)
                ? "opera"
                : "chrome"
              : /\bEdge\//.test(navigator.userAgent)
              ? "edge"
              : "firefox"),
          (e.browserType = g),
          void 0 === e.browser.action && (e.browser.action = e.browser.browserAction),
          (e.isBrowser = function () {
            for (var r = arguments.length, s = Array(r), g = 0; g < r; g++) s[g] = arguments[g];
            for (var n = 0; n < s.length; n++) if (s[n] == e.browserType) return !0;
            return !1;
          }),
          (e.error = function (r) {
            console.groupCollapsed(r.message), r.stack && console.error(r.stack), console.groupEnd();
          });
      },
      ,
      function (r, e) {
        var s, g, n;
        (g = [r]),
          (s = function (r) {
            "use strict";
            if ("undefined" == typeof browser) {
              const e = () => {
                const r = {
                  alarms: {
                    clear: { minArgs: 0, maxArgs: 1 },
                    clearAll: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getAll: { minArgs: 0, maxArgs: 0 }
                  },
                  bookmarks: {
                    create: { minArgs: 1, maxArgs: 1 },
                    export: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 1, maxArgs: 1 },
                    getChildren: { minArgs: 1, maxArgs: 1 },
                    getRecent: { minArgs: 1, maxArgs: 1 },
                    getTree: { minArgs: 0, maxArgs: 0 },
                    getSubTree: { minArgs: 1, maxArgs: 1 },
                    import: { minArgs: 0, maxArgs: 0 },
                    move: { minArgs: 2, maxArgs: 2 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    removeTree: { minArgs: 1, maxArgs: 1 },
                    search: { minArgs: 1, maxArgs: 1 },
                    update: { minArgs: 2, maxArgs: 2 }
                  },
                  browserAction: {
                    getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                    getBadgeText: { minArgs: 1, maxArgs: 1 },
                    getPopup: { minArgs: 1, maxArgs: 1 },
                    getTitle: { minArgs: 1, maxArgs: 1 },
                    setIcon: { minArgs: 1, maxArgs: 1 }
                  },
                  commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                  contextMenus: {
                    update: { minArgs: 2, maxArgs: 2 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    removeAll: { minArgs: 0, maxArgs: 0 }
                  },
                  cookies: {
                    get: { minArgs: 1, maxArgs: 1 },
                    getAll: { minArgs: 1, maxArgs: 1 },
                    getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 }
                  },
                  downloads: {
                    download: { minArgs: 1, maxArgs: 1 },
                    cancel: { minArgs: 1, maxArgs: 1 },
                    erase: { minArgs: 1, maxArgs: 1 },
                    getFileIcon: { minArgs: 1, maxArgs: 2 },
                    open: { minArgs: 1, maxArgs: 1 },
                    pause: { minArgs: 1, maxArgs: 1 },
                    removeFile: { minArgs: 1, maxArgs: 1 },
                    resume: { minArgs: 1, maxArgs: 1 },
                    search: { minArgs: 1, maxArgs: 1 },
                    show: { minArgs: 1, maxArgs: 1 }
                  },
                  extension: {
                    isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                    isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 }
                  },
                  history: {
                    addUrl: { minArgs: 1, maxArgs: 1 },
                    getVisits: { minArgs: 1, maxArgs: 1 },
                    deleteAll: { minArgs: 0, maxArgs: 0 },
                    deleteRange: { minArgs: 1, maxArgs: 1 },
                    deleteUrl: { minArgs: 1, maxArgs: 1 },
                    search: { minArgs: 1, maxArgs: 1 }
                  },
                  i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } },
                  idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                  management: {
                    get: { minArgs: 1, maxArgs: 1 },
                    getAll: { minArgs: 0, maxArgs: 0 },
                    getSelf: { minArgs: 0, maxArgs: 0 },
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
                    hide: { minArgs: 0, maxArgs: 0 },
                    setIcon: { minArgs: 1, maxArgs: 1 },
                    show: { minArgs: 0, maxArgs: 0 }
                  },
                  runtime: {
                    getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                    getBrowserInfo: { minArgs: 0, maxArgs: 0 },
                    getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                    openOptionsPage: { minArgs: 0, maxArgs: 0 },
                    requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                    sendMessage: { minArgs: 1, maxArgs: 3 },
                    sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                    setUninstallURL: { minArgs: 1, maxArgs: 1 }
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
                    create: { minArgs: 1, maxArgs: 1 },
                    captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                    detectLanguage: { minArgs: 0, maxArgs: 1 },
                    duplicate: { minArgs: 1, maxArgs: 1 },
                    executeScript: { minArgs: 1, maxArgs: 2 },
                    get: { minArgs: 1, maxArgs: 1 },
                    getCurrent: { minArgs: 0, maxArgs: 0 },
                    getZoom: { minArgs: 0, maxArgs: 1 },
                    getZoomSettings: { minArgs: 0, maxArgs: 1 },
                    highlight: { minArgs: 1, maxArgs: 1 },
                    insertCSS: { minArgs: 1, maxArgs: 2 },
                    move: { minArgs: 2, maxArgs: 2 },
                    reload: { minArgs: 0, maxArgs: 2 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    query: { minArgs: 1, maxArgs: 1 },
                    removeCSS: { minArgs: 1, maxArgs: 2 },
                    sendMessage: { minArgs: 2, maxArgs: 3 },
                    setZoom: { minArgs: 1, maxArgs: 2 },
                    setZoomSettings: { minArgs: 1, maxArgs: 2 },
                    update: { minArgs: 1, maxArgs: 2 }
                  },
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
                if (0 === Object.keys(r).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                class e extends WeakMap {
                  constructor(r, e = void 0) {
                    super(e), (this.createItem = r);
                  }
                  get(r) {
                    return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
                  }
                }
                const s = (r) => r && "object" == typeof r && "function" == typeof r.then,
                  g =
                    (r) =>
                    (...e) => {
                      chrome.runtime.lastError ? r.reject(chrome.runtime.lastError) : 1 === e.length ? r.resolve(e[0]) : r.resolve(e);
                    },
                  n = (r, e) => {
                    const s = (r) => (1 == r ? "argument" : "arguments");
                    return function (n, ...t) {
                      if (t.length < e.minArgs)
                        throw new Error(`Expected at least ${e.minArgs} ${s(e.minArgs)} for ${r}(), got ${t.length}`);
                      if (t.length > e.maxArgs)
                        throw new Error(`Expected at most ${e.maxArgs} ${s(e.maxArgs)} for ${r}(), got ${t.length}`);
                      return new Promise((e, s) => {
                        n[r](...t, g({ resolve: e, reject: s }));
                      });
                    };
                  },
                  t = (r, e, s) => new Proxy(e, { apply: (e, g, n) => s.call(g, r, ...n) });
                let m = Function.call.bind(Object.prototype.hasOwnProperty);
                const a = (r, e = {}, s = {}) => {
                    let g = Object.create(null),
                      A = {
                        has: (r, e) => e in r || e in g,
                        get(r, A, i) {
                          if (A in g) return g[A];
                          if (!(A in r)) return;
                          let o = r[A];
                          if ("function" == typeof o)
                            if ("function" == typeof e[A]) o = t(r, r[A], e[A]);
                            else if (m(s, A)) {
                              let e = n(A, s[A]);
                              o = t(r, r[A], e);
                            } else o = o.bind(r);
                          else {
                            if ("object" != typeof o || null === o || (!m(e, A) && !m(s, A)))
                              return (
                                Object.defineProperty(g, A, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: () => r[A],
                                  set(e) {
                                    r[A] = e;
                                  }
                                }),
                                o
                              );
                            o = a(o, e[A], s[A]);
                          }
                          return (g[A] = o), o;
                        },
                        set: (r, e, s, n) => (e in g ? (g[e] = s) : (r[e] = s), !0),
                        defineProperty: (r, e, s) => Reflect.defineProperty(g, e, s),
                        deleteProperty: (r, e) => Reflect.deleteProperty(g, e)
                      };
                    return new Proxy(r, A);
                  },
                  A = {
                    runtime: {
                      onMessage:
                        ((i = new e((r) =>
                          "function" != typeof r
                            ? r
                            : function (e, g, n) {
                                let t = r(e, g);
                                if (s(t))
                                  return (
                                    t.then(n, (r) => {
                                      console.error(r), n(r);
                                    }),
                                    !0
                                  );
                                void 0 !== t && n(t);
                              }
                        )),
                        {
                          addListener(r, e, ...s) {
                            r.addListener(i.get(e), ...s);
                          },
                          hasListener: (r, e) => r.hasListener(i.get(e)),
                          removeListener(r, e) {
                            r.removeListener(i.get(e));
                          }
                        })
                    }
                  };
                var i;
                return a(chrome, A, r);
              };
              r.exports = e();
            } else r.exports = browser;
          }),
          void 0 === (n = "function" == typeof s ? s.apply(e, g) : s) || (r.exports = n);
      }
    ],
    e = {};
  function s(g) {
    var n = e[g];
    if (void 0 !== n) return n.exports;
    var t = (e[g] = { exports: {} });
    return r[g].call(t.exports, t, t.exports, s), t.exports;
  }
  (() => {
    "use strict";
    var r = s(0).browser,
      e = new Map(),
      g = new BroadcastChannel("workerfactory-inner");
    g.addEventListener("message", function (s) {
      if ("spawn-worker" == s.data.type) {
        var n = s.data.path;
        if (e.has(n)) throw new Error("Worker already running: " + n);
        var t = r.runtime.getURL("/content/" + n),
          m = new Worker(t);
        e.set(n, m);
      } else if ("kill-worker" == s.data.type) {
        var a = s.data.path,
          A = e.get(a);
        if (!A) throw new Error("Worker not running.");
        A.terminate(), e.delete(a), g.postMessage({ type: "worker-killed", worker_path: a });
      }
    });
  })();
})();
