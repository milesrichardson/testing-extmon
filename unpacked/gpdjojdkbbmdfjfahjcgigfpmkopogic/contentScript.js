(() => {
  (() => {
    var _e = {
        531: function (M, U) {
          var T, X, D;
          (function (k, j) {
            if (!0) (X = [M]), (T = j), (D = typeof T == "function" ? T.apply(U, X) : T), D !== void 0 && (M.exports = D);
            else var C;
          })(typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : this, function (k) {
            var j, C;
            if (!((C = (j = globalThis.chrome) == null ? void 0 : j.runtime) != null && C.id))
              throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser == "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
              const O = "The message port closed before a response was received.",
                Z = (R) => {
                  const F = {
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
                    extension: {
                      isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                      isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 }
                    },
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
                  if (Object.keys(F).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                  class Q extends WeakMap {
                    constructor(n, i = void 0) {
                      super(i), (this.createItem = n);
                    }
                    get(n) {
                      return this.has(n) || this.set(n, this.createItem(n)), super.get(n);
                    }
                  }
                  const L = (s) => s && typeof s == "object" && typeof s.then == "function",
                    P =
                      (s, n) =>
                      (...i) => {
                        R.runtime.lastError
                          ? s.reject(new Error(R.runtime.lastError.message))
                          : n.singleCallbackArg || (i.length <= 1 && n.singleCallbackArg !== !1)
                          ? s.resolve(i[0])
                          : s.resolve(i);
                      },
                    z = (s) => (s == 1 ? "argument" : "arguments"),
                    q = (s, n) =>
                      function (g, ..._) {
                        if (_.length < n.minArgs)
                          throw new Error(`Expected at least ${n.minArgs} ${z(n.minArgs)} for ${s}(), got ${_.length}`);
                        if (_.length > n.maxArgs)
                          throw new Error(`Expected at most ${n.maxArgs} ${z(n.maxArgs)} for ${s}(), got ${_.length}`);
                        return new Promise((I, S) => {
                          if (n.fallbackToNoCallback)
                            try {
                              g[s](..._, P({ resolve: I, reject: S }, n));
                            } catch (l) {
                              console.warn(
                                `${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                l
                              ),
                                g[s](..._),
                                (n.fallbackToNoCallback = !1),
                                (n.noCallback = !0),
                                I();
                            }
                          else n.noCallback ? (g[s](..._), I()) : g[s](..._, P({ resolve: I, reject: S }, n));
                        });
                      },
                    b = (s, n, i) =>
                      new Proxy(n, {
                        apply(g, _, I) {
                          return i.call(_, s, ...I);
                        }
                      });
                  let y = Function.call.bind(Object.prototype.hasOwnProperty);
                  const B = (s, n = {}, i = {}) => {
                      let g = Object.create(null),
                        _ = {
                          has(S, l) {
                            return l in s || l in g;
                          },
                          get(S, l, f) {
                            if (l in g) return g[l];
                            if (!(l in s)) return;
                            let E = s[l];
                            if (typeof E == "function")
                              if (typeof n[l] == "function") E = b(s, s[l], n[l]);
                              else if (y(i, l)) {
                                let w = q(l, i[l]);
                                E = b(s, s[l], w);
                              } else E = E.bind(s);
                            else if (typeof E == "object" && E !== null && (y(n, l) || y(i, l))) E = B(E, n[l], i[l]);
                            else if (y(i, "*")) E = B(E, n[l], i["*"]);
                            else
                              return (
                                Object.defineProperty(g, l, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get() {
                                    return s[l];
                                  },
                                  set(w) {
                                    s[l] = w;
                                  }
                                }),
                                E
                              );
                            return (g[l] = E), E;
                          },
                          set(S, l, f, E) {
                            return l in g ? (g[l] = f) : (s[l] = f), !0;
                          },
                          defineProperty(S, l, f) {
                            return Reflect.defineProperty(g, l, f);
                          },
                          deleteProperty(S, l) {
                            return Reflect.deleteProperty(g, l);
                          }
                        },
                        I = Object.create(s);
                      return new Proxy(I, _);
                    },
                    V = (s) => ({
                      addListener(n, i, ...g) {
                        n.addListener(s.get(i), ...g);
                      },
                      hasListener(n, i) {
                        return n.hasListener(s.get(i));
                      },
                      removeListener(n, i) {
                        n.removeListener(s.get(i));
                      }
                    }),
                    J = new Q((s) =>
                      typeof s != "function"
                        ? s
                        : function (i) {
                            const g = B(i, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                            s(g);
                          }
                    ),
                    ee = new Q((s) =>
                      typeof s != "function"
                        ? s
                        : function (i, g, _) {
                            let I = !1,
                              S,
                              l = new Promise((h) => {
                                S = function (v) {
                                  (I = !0), h(v);
                                };
                              }),
                              f;
                            try {
                              f = s(i, g, S);
                            } catch (h) {
                              f = Promise.reject(h);
                            }
                            const E = f !== !0 && L(f);
                            if (f !== !0 && !E && !I) return !1;
                            const w = (h) => {
                              h.then(
                                (v) => {
                                  _(v);
                                },
                                (v) => {
                                  let K;
                                  v && (v instanceof Error || typeof v.message == "string")
                                    ? (K = v.message)
                                    : (K = "An unexpected error occurred"),
                                    _({ __mozWebExtensionPolyfillReject__: !0, message: K });
                                }
                              ).catch((v) => {
                                console.error("Failed to send onMessage rejected reply", v);
                              });
                            };
                            return w(E ? f : l), !0;
                          }
                    ),
                    re = ({ reject: s, resolve: n }, i) => {
                      R.runtime.lastError
                        ? R.runtime.lastError.message === O
                          ? n()
                          : s(new Error(R.runtime.lastError.message))
                        : i && i.__mozWebExtensionPolyfillReject__
                        ? s(new Error(i.message))
                        : n(i);
                    },
                    H = (s, n, i, ...g) => {
                      if (g.length < n.minArgs)
                        throw new Error(`Expected at least ${n.minArgs} ${z(n.minArgs)} for ${s}(), got ${g.length}`);
                      if (g.length > n.maxArgs)
                        throw new Error(`Expected at most ${n.maxArgs} ${z(n.maxArgs)} for ${s}(), got ${g.length}`);
                      return new Promise((_, I) => {
                        const S = re.bind(null, { resolve: _, reject: I });
                        g.push(S), i.sendMessage(...g);
                      });
                    },
                    te = {
                      devtools: { network: { onRequestFinished: V(J) } },
                      runtime: {
                        onMessage: V(ee),
                        onMessageExternal: V(ee),
                        sendMessage: H.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
                      },
                      tabs: { sendMessage: H.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
                    },
                    G = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                  return (F.privacy = { network: { "*": G }, services: { "*": G }, websites: { "*": G } }), B(R, te, F);
                };
              k.exports = Z(chrome);
            } else k.exports = globalThis.browser;
          });
        }
      },
      ie = {};
    function le(M) {
      var U = ie[M];
      if (U !== void 0) return U.exports;
      var T = (ie[M] = { exports: {} });
      return _e[M].call(T.exports, T, T.exports, le), T.exports;
    }
    var He = {};
    (() => {
      "use strict";
      const M = {
          PIN_CREATE: 1,
          VIEW: 13,
          BOARD_CREATE: 20,
          USER_FOLLOW: 45,
          CLICK: 101,
          SAVE_BROWSER_PIN_IMAGES_REQUESTED: 14563,
          SAVE_BROWSER_PIN_IMAGES_FOUND: 2900,
          SAVE_BROWSER_PIN_IMAGES_NOT_FOUND: 2901,
          PIN_CREATE_FAILURE: 7564,
          PIN_CREATE_ATTEMPTED: 14564,
          USER_ACTIVE: 7137,
          INSTALL: 8219,
          BROWSER_SESSION: 8221,
          BROWSER_EXTENSION_BOOKMARKS_FOUND: 9001,
          BROWSER_EXTENSION_BOOKMARKS_CREATE_SUCCESS: 9002,
          OFFSITE_SAVE_ENTER: 14703
        },
        U = {
          BOARD_PICKER: 21,
          VISUAL_SEARCH: 43,
          BROWSER_EXTENSION_DAU: 192,
          IMAGE_PICKER: 268,
          CREATE_BOARD: 269,
          PIN_CREATE_SUCCESS: 270,
          FOLLOW_FROM_SAVE: 271,
          FOLLOW_FROM_SAVE_SUCCESS: 272,
          BOARD_SECTION_CREATE: 274,
          BOARD_SECTION_PICKER: 275,
          BROWSER_EXTENSION_OPTIONS: 276,
          HOVER_BOARD_OPENER: 277,
          HOVER_BOARD_PICKER: 278,
          VISUAL_SEARCH_RESULTS: 279
        },
        T = {
          BOARD_COVER: 36,
          CREATE_BUTTON: 44,
          PIN_SAVE_BUTTON: 48,
          SECTION_COVER: 11854,
          SAVE_BUTTON: 12018,
          VISIT_BUTTON: 12796,
          PRIMARY_ACTION_BUTTON: 13004
        },
        X = { BROWSER_EXTENSION: 8 },
        D = { OTHER: 0, CHROME: 1, SAFARI: 2, IE: 3, FIREFOX: 4, OPERA: 5, EDGE: 7 };
      var k = ((e) => ((e.PRODUCTION = "production"), (e.DEVELOPMENT = "development"), e))(k || {}),
        j = ((e) => ((e.SAFARI = "safari"), (e.CHROME = "chrome"), (e.CHROME_GROWTH = "chrome_growth"), e))(j || {}),
        C = ((e) => (
          (e[(e.API_REQUEST = 0)] = "API_REQUEST"),
          (e[(e.LIFECYCLE_EVENT = 1)] = "LIFECYCLE_EVENT"),
          (e[(e.DATA_REQUEST = 2)] = "DATA_REQUEST"),
          e
        ))(C || {}),
        O = ((e) => (
          (e[(e.TOGGLE_APP = 0)] = "TOGGLE_APP"),
          (e[(e.HIDE_APP = 1)] = "HIDE_APP"),
          (e[(e.UNLOAD_APP = 2)] = "UNLOAD_APP"),
          (e[(e.POPULATE_APP = 3)] = "POPULATE_APP"),
          (e[(e.INJECT_PINMARKLET = 4)] = "INJECT_PINMARKLET"),
          (e[(e.FETCH_PINMARKLET_PAYLOAD = 5)] = "FETCH_PINMARKLET_PAYLOAD"),
          (e[(e.HANDLE_CONTEXT_MENU_SAVE_ACTION = 6)] = "HANDLE_CONTEXT_MENU_SAVE_ACTION"),
          (e[(e.SETUP_OATH_FLOW = 7)] = "SETUP_OATH_FLOW"),
          (e[(e.CHECK_OAUTH_STATE = 8)] = "CHECK_OAUTH_STATE"),
          (e[(e.KEEP_ALIVE_PING = 9)] = "KEEP_ALIVE_PING"),
          (e[(e.KEEP_ALIVE_PONG = 10)] = "KEEP_ALIVE_PONG"),
          e
        ))(O || {}),
        Z = ((e) => ((e[(e.LOG_EVENT = 0)] = "LOG_EVENT"), e))(Z || {}),
        R = ((e) => ((e.POPULATE_GRID = "populateGrid"), e))(R || {}),
        F = ((e) => (
          (e[(e.FETCH_CONFIG = 0)] = "FETCH_CONFIG"),
          (e[(e.FETCH_USER = 1)] = "FETCH_USER"),
          (e[(e.FETCH_BOARDS = 2)] = "FETCH_BOARDS"),
          (e[(e.FETCH_BOARD_SECTIONS = 3)] = "FETCH_BOARD_SECTIONS"),
          (e[(e.FETCH_EXPERIMENT = 4)] = "FETCH_EXPERIMENT"),
          (e[(e.CREATE_BOARD = 5)] = "CREATE_BOARD"),
          (e[(e.CREATE_BOARD_SECTION = 6)] = "CREATE_BOARD_SECTION"),
          (e[(e.CREATE_PIN = 7)] = "CREATE_PIN"),
          (e[(e.CREATE_LOGS = 8)] = "CREATE_LOGS"),
          e
        ))(F || {}),
        Q = ((e) => ((e.PUBLIC = "public"), (e.SECRET = "secret"), e))(Q || {}),
        L = ((e) => (
          (e[(e.MOUNT_SAVEPICKER = 0)] = "MOUNT_SAVEPICKER"),
          (e[(e.MOUNT_SIDEBAR = 1)] = "MOUNT_SIDEBAR"),
          (e[(e.SET_FUNNEL_ID = 2)] = "SET_FUNNEL_ID"),
          e
        ))(L || {}),
        P = ((e) => ((e[(e.SAVEPICKER = 0)] = "SAVEPICKER"), (e[(e.SIDEBAR = 1)] = "SIDEBAR"), e))(P || {});
      const z = { [D.OTHER]: "xx", [D.CHROME]: "cr", [D.SAFARI]: "sf", [D.IE]: "ie", [D.FIREFOX]: "ff", [D.OPERA]: "op", [D.EDGE]: "ms" };
      var q = ((e) => (
          (e[(e.SignIn = 0)] = "SignIn"),
          (e[(e.ImagePicker = 1)] = "ImagePicker"),
          (e[(e.BoardPicker = 2)] = "BoardPicker"),
          (e[(e.BoardCreate = 3)] = "BoardCreate"),
          (e[(e.BoardSectionPicker = 4)] = "BoardSectionPicker"),
          (e[(e.BoardSectionCreate = 5)] = "BoardSectionCreate"),
          (e[(e.PinCreate = 6)] = "PinCreate"),
          e
        ))(q || {}),
        b = le(531);
      const y = (e) =>
        document.cookie.split(";").reduce((r, t) => {
          const a = t.trim().split("=");
          return a[0] === e ? decodeURIComponent(a[1]) : r;
        }, "");
      function B() {
        let e = y("access_token");
        const r = y("state");
        if (!e || !r || typeof e != "string" || e.length < 10) return !1;
        (e = e.replace(/"/g, "")),
          b.runtime.sendMessage({ type: C.LIFECYCLE_EVENT, action: O.SETUP_OATH_FLOW, payload: { accessToken: e, state: r } }).then(
            (t) => {
              var a;
              ((a = t == null ? void 0 : t.data) == null ? void 0 : a.status) === "success" && window.close();
            },
            () => {}
          );
      }
      const V = "pinterest-save-extension",
        J = "https://help.pinterest.com/en/save-extension/oauth-access-token",
        ee = null;
      var re = Object.defineProperty,
        H = Object.getOwnPropertySymbols,
        te = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        s = (e, r, t) => (r in e ? re(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t)),
        n = (e, r) => {
          for (var t in r || (r = {})) te.call(r, t) && s(e, t, r[t]);
          if (H) for (var t of H(r)) G.call(r, t) && s(e, t, r[t]);
          return e;
        };
      const i = (e) => {
          const { type: r, action: t, payload: a, onSuccess: c, onError: u } = e;
          b.runtime.sendMessage({ type: r, action: t, payload: a }).then(
            (A) => {
              A != null && A.error ? u && u(A.error) : c && c(A);
            },
            (A) => {
              u && u(A);
            }
          );
        },
        g = ({ eventType: e, viewType: r, auxData: t, element: a, objectIdStr: c }) => {
          i({
            type: C.DATA_REQUEST,
            action: Z.LOG_EVENT,
            payload: n(n(n(n({ eventType: e }, r && { viewType: r }), a && { element: a }), c && { objectIdStr: c }), t && { auxData: t })
          });
        },
        _ = ({ tab: e, type: r, action: t, payload: a }) => {
          tabs.sendMessage(e, { type: r, action: t, payload: a });
        },
        I = ({ element: e, action: r, payload: t = {} }) => {
          e.postMessage({ target: V, action: r, payload: t }, "*");
        };
      function S() {
        return [1e7, 1e3, 4e3, 8e3, 1e11]
          .join("")
          .replace(/[018]/g, (e) => (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16));
      }
      var l = Object.defineProperty,
        f = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        h = (e, r, t) => (r in e ? l(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t)),
        v = (e, r) => {
          for (var t in r || (r = {})) E.call(r, t) && h(e, t, r[t]);
          if (f) for (var t of f(r)) w.call(r, t) && h(e, t, r[t]);
          return e;
        },
        K = (e, r, t) =>
          new Promise((a, c) => {
            var u = (m) => {
                try {
                  o(t.next(m));
                } catch (d) {
                  c(d);
                }
              },
              A = (m) => {
                try {
                  o(t.throw(m));
                } catch (d) {
                  c(d);
                }
              },
              o = (m) => (m.done ? a(m.value) : Promise.resolve(m.value).then(u, A));
            o((t = t.apply(e, r)).next());
          });
      const se = ["config", "boards"],
        Ie = {
          isSaveButtonInjected: !1,
          isSaveButtonDisplayed: !1,
          isAppIframeInjected: !1,
          isAppIframeDisplayed: !1,
          lastScrollTime: 0,
          saveButton: {},
          appIframe: {}
        };
      function Se(e) {
        let r = e;
        const t = () => r,
          a = (o) => {
            r = v(v({}, r), o);
          },
          c = () => {
            var o, m;
            (o = r.appIframeMutationObserver) == null || o.disconnect(), (m = r.saveButtonMutationObserver) == null || m.disconnect();
          };
        return {
          getContentScriptState: t,
          setContentScriptState: a,
          clearContentState: () => {
            c(), (r = e);
          },
          clearAppIframeState: () => {
            var o;
            (r.isAppIframeInjected = e.isAppIframeInjected),
              (r.isAppIframeDisplayed = e.isAppIframeDisplayed),
              (o = r.appIframeMutationObserver) == null || o.disconnect(),
              (r.appIframeMutationObserver = e.appIframeMutationObserver),
              (r.appIframe = e.appIframe);
          }
        };
      }
      function Ne() {
        return K(this, null, function* () {
          const e = yield b.storage.local.get(se);
          for (const r of se)
            if (r === "boards") {
              const t = (e[r] || [])[0];
              x({ lastSavedToBoard: t });
            } else x({ [r]: e[r] });
          b.storage.local.onChanged.addListener((r) => {
            const t = Object.keys(r);
            for (const a of se)
              if (t.includes(a))
                if (a === "boards") {
                  const c = (r[a].newValue || [])[0];
                  x({ lastSavedToBoard: c });
                } else x({ [a]: r[a].newValue });
          });
        });
      }
      const { getContentScriptState: p, setContentScriptState: x, clearContentState: Ge, clearAppIframeState: ge } = Se(Ie),
        fe = 120;
      function ne(e) {
        const r = [];
        for (const [t, a] of Object.entries(e)) r.push(`${t}:${a} !important`);
        return r.join(";");
      }
      function pe() {
        const e = {};
        return (r) => {
          if (!r.currentSrc) return !1;
          if (r.currentSrc in e) return e[r.currentSrc];
          const t = fe;
          let a;
          return r.naturalHeight < t || r.naturalWidth < t || r.height < t || r.width < t ? (a = !1) : (a = !0), (e[r.currentSrc] = a), a;
        };
      }
      const xe = pe();
      function me(e, r) {
        const t = new MutationObserver((a, c) => {
          const u = ["style", "class"],
            { attributeName: A, target: o } = a[0];
          A && u.includes(A) && (c.disconnect(), r(o));
        });
        return t.observe(e, { attributes: !0 }), t;
      }
      function Ae({ allowedMutatedAttrs: e, mutatedStyle: r }) {
        return r
          ? ne(
              Object.fromEntries(
                e.map((t) => {
                  const a = r.getPropertyValue(t);
                  return a ? [t, a] : [];
                })
              )
            )
          : "";
      }
      const Te = () => {
          const e = /^https?:\/\/([a-z]*\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\//;
          return (document == null ? void 0 : document.body) && document.URL.match(e);
        },
        Oe = () => {
          const { config: { extensionVersion: e } = {} } = p();
          document.body.setAttribute("data-pinterest-extension-installed", e || "xx");
        },
        ve = () => (document == null ? void 0 : document.body) && document.URL.startsWith(J);
      function ae() {
        const { hoveredImage: e } = p();
        e == null || e.setAttribute("data-pin-me-only", "true");
      }
      function Me(e) {
        return { src: e.currentSrc, description: e.title || document.title, url: document.URL };
      }
      var Ce = Object.defineProperty,
        be = Object.defineProperties,
        De = Object.getOwnPropertyDescriptors,
        ce = Object.getOwnPropertySymbols,
        Pe = Object.prototype.hasOwnProperty,
        Re = Object.prototype.propertyIsEnumerable,
        ue = (e, r, t) => (r in e ? Ce(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t)),
        we = (e, r) => {
          for (var t in r || (r = {})) Pe.call(r, t) && ue(e, t, r[t]);
          if (ce) for (var t of ce(r)) Re.call(r, t) && ue(e, t, r[t]);
          return e;
        },
        he = (e, r) => be(e, De(r));
      const Le = ne({
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          "z-index": 9007199254740991,
          "background-color": "transparent",
          border: "0px",
          display: "none",
          "color-scheme": " none",
          margin: "0",
          clip: "auto",
          opacity: "1",
          padding: "0"
        }),
        $ = ({ view: e, funnelId: r }) => {
          const { isAppIframeInjected: t, hoveredImage: a, saveButton: c } = p();
          if (t) return;
          let u = 0,
            A = 0;
          if (e === P.SAVEPICKER && c) {
            const N = c.getBoundingClientRect();
            (u = N.left), (A = N.top);
          }
          const o = document.createElement("iframe"),
            m = b.runtime.getURL("/index.html");
          (o.src = m),
            (o.onload = () => {
              switch (e) {
                case P.SAVEPICKER: {
                  const { lastSavedToBoard: { id: N, name: W } = {} } = p(),
                    Y = he(we({}, Me(a)), { savePicker: !0, x: u, y: A, boardId: N, boardName: W });
                  (o.style.display = "block"),
                    x({ isAppIframeDisplayed: !0 }),
                    o.contentWindow &&
                      (I({ element: o.contentWindow, action: L.SET_FUNNEL_ID, payload: { funnelId: r } }),
                      I({ element: o.contentWindow, action: L.MOUNT_SAVEPICKER, payload: Y }));
                  break;
                }
                case P.SIDEBAR:
                  o.contentWindow && I({ element: o.contentWindow, action: L.SET_FUNNEL_ID, payload: { funnelId: r } }),
                    i({ type: C.LIFECYCLE_EVENT, action: O.INJECT_PINMARKLET });
                  break;
                default:
                  break;
              }
            });
          const d = (N) => {
            const W = Ae({ allowedMutatedAttrs: ["display"], mutatedStyle: N == null ? void 0 : N.style });
            o.setAttribute("style", `${Le};${W}`), o.removeAttribute("class");
            const Y = me(o, d);
            x({ appIframeMutationObserver: Y });
          };
          d(), x({ appIframe: o, isAppIframeInjected: !0 }), document.body.appendChild(o);
        },
        ye = ne({
          "border-radius": "10px",
          "text-indent": "12px",
          width: "auto",
          height: "20px",
          padding: "0px 8px",
          "text-align": "center",
          "vertical-align": "middle",
          font: 'bold 11px / 20px "Helvetica Neue", Helvetica, sans-serif',
          color: "rgb(255, 255, 255)",
          background:
            'url("data:image/svg+xml;base64,PHN2ZyBpZD0ic291cmNlIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjYiIGZpbGw9IiNFNjAwMjMiPjwvY2lyY2xlPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDguNTYxNSAxLjYwNTUgMTAuNzQ4NSAzLjg2NSAxMS42MDlDMy44MSAxMS4xNDA1IDMuNzUxNSAxMC4zNjggMy44Nzc1IDkuODI2QzMuOTg2IDkuMzYgNC41NzggNi44NTcgNC41NzggNi44NTdDNC41NzggNi44NTcgNC4zOTk1IDYuNDk5NSA0LjM5OTUgNS45N0M0LjM5OTUgNS4xNCA0Ljg4MDUgNC41MiA1LjQ4IDQuNTJDNS45OSA0LjUyIDYuMjM2IDQuOTAyNSA2LjIzNiA1LjM2MUM2LjIzNiA1Ljg3MzUgNS45MDk1IDYuNjM5NSA1Ljc0MSA3LjM1QzUuNjAwNSA3Ljk0NDUgNi4wMzk1IDguNDI5NSA2LjYyNTUgOC40Mjk1QzcuNjg3IDguNDI5NSA4LjUwMzUgNy4zMSA4LjUwMzUgNS42OTRDOC41MDM1IDQuMjYzNSA3LjQ3NTUgMy4yNjQgNi4wMDggMy4yNjRDNC4zMDkgMy4yNjQgMy4zMTE1IDQuNTM4NSAzLjMxMTUgNS44NTZDMy4zMTE1IDYuMzY5NSAzLjUwOSA2LjkxOTUgMy43NTYgNy4yMTlDMy44MDQ1IDcuMjc4NSAzLjgxMiA3LjMzIDMuNzk3NSA3LjM5MDVDMy43NTIgNy41Nzk1IDMuNjUxIDcuOTg1IDMuNjMxNSA4LjA2OEMzLjYwNSA4LjE3NyAzLjU0NSA4LjIwMDUgMy40MzE1IDguMTQ3NUMyLjY4NTUgNy44MDA1IDIuMjE5NSA2LjcxIDIuMjE5NSA1LjgzNEMyLjIxOTUgMy45NDk1IDMuNTg4IDIuMjE5NSA2LjE2NTUgMi4yMTk1QzguMjM3NSAyLjIxOTUgOS44NDggMy42OTYgOS44NDggNS42NjlDOS44NDggNy43Mjc1IDguNTUwNSA5LjM4NDUgNi43NDg1IDkuMzg0NUM2LjE0MyA5LjM4NDUgNS41NzQ1IDkuMDY5NSA1LjM3OTUgOC42OThDNS4zNzk1IDguNjk4IDUuMDggOS44MzkgNS4wMDc1IDEwLjExOEM0Ljg2NjUgMTAuNjYgNC40NzU1IDExLjM0NiA0LjIzMyAxMS43MzU1QzQuNzkyIDExLjkwNzUgNS4zODUgMTIgNiAxMkM5LjMxMzUgMTIgMTIgOS4zMTM1IDEyIDZDMTIgMi42ODY1IDkuMzEzNSAwIDYgMEMyLjY4NjUgMCAwIDIuNjg2NSAwIDZaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L3N2Zz4=") 4px 50% / 12px 12px no-repeat rgb(230, 0, 35)',
          position: "absolute",
          opacity: 1,
          "z-index": 9007199254740990,
          display: "none",
          cursor: "pointer",
          border: "none",
          "-webkit-font-smoothing": "antialiased",
          top: "0",
          left: "0"
        });
      function Ue() {
        var e;
        const { isSaveButtonInjected: r } = p();
        if (r) return;
        const t = document.createElement("span");
        t.innerText = (e = b.i18n) == null ? void 0 : e.getMessage("saveButtonText");
        const a = (o) => {
          const m = Ae({ allowedMutatedAttrs: ["display", "top", "left"], mutatedStyle: o == null ? void 0 : o.style });
          t.setAttribute("style", `${ye};${m}`), t.removeAttribute("class");
          const d = me(t, a);
          x({ saveButtonMutationObserver: d });
        };
        a();
        const c = () => {
            const { saveButtonHideTimeout: o, config: m, lastSavedToBoard: d } = p();
            if ((window.clearTimeout(o), !(m != null && m.isAuthenticated) || !(d != null && d.id))) {
              const N = S();
              ae(),
                $({ view: P.SIDEBAR, funnelId: N }),
                g({ eventType: M.CLICK, element: T.SAVE_BUTTON, auxData: { funnel_uuid: N, url: document.URL } });
            }
          },
          u = () => {
            const { saveButtonHideTimeout: o, config: m, lastSavedToBoard: d, lastScrollTime: N } = p();
            if ((window.clearTimeout(o), m != null && m.isAuthenticated && d != null && d.id)) {
              const W = Date.now() - 10;
              if (N < W) {
                const { isAppIframeInjected: Y } = p();
                if (!Y) {
                  const oe = S();
                  $({ view: P.SAVEPICKER, funnelId: oe }),
                    x({ isAppIframeInjected: !0 }),
                    ae(),
                    g({ eventType: M.VIEW, viewType: U.HOVER_BOARD_OPENER, auxData: { funnel_uuid: oe, url: document.URL } }),
                    g({ eventType: M.OFFSITE_SAVE_ENTER, auxData: { funnel_uuid: oe, url: document.URL } });
                }
              }
            }
          },
          A = () => {
            const { isAppIframeDisplayed: o, appIframe: m } = p();
            if (!o) {
              try {
                document.body.removeChild(m);
              } catch (d) {}
              ge();
            }
          };
        t == null || t.addEventListener("click", c),
          t == null || t.addEventListener("mouseover", u),
          t == null || t.addEventListener("mouseout", A),
          x({ saveButton: t, isSaveButtonInjected: !0 }),
          document.body.appendChild(t);
      }
      const je = 1 * 60 * 1e3,
        Be = (e) => {
          const { type: r, action: t, payload: a } = e,
            { appIframe: c, isAppIframeDisplayed: u } = p();
          if (r === C.LIFECYCLE_EVENT)
            switch (t) {
              case O.TOGGLE_APP:
                if (u) i({ type: C.LIFECYCLE_EVENT, action: O.HIDE_APP });
                else {
                  const A = S();
                  $({ view: P.SIDEBAR, funnelId: A }),
                    g({ eventType: M.CLICK, element: T.PRIMARY_ACTION_BUTTON, auxData: { funnel_uuid: A, url: document.URL } });
                }
                break;
              case O.POPULATE_APP:
                {
                  const { isAppIframeDisplayed: A } = p();
                  A || (x({ isAppIframeDisplayed: !0 }), (c.style.display = "block")),
                    c != null && c.contentWindow && I({ element: c.contentWindow, action: L.MOUNT_SIDEBAR, payload: a });
                }
                break;
              case O.HANDLE_CONTEXT_MENU_SAVE_ACTION:
                {
                  const A = S();
                  ae(),
                    $({ view: P.SIDEBAR, funnelId: A }),
                    g({ eventType: M.CLICK, element: T.PIN_SAVE_BUTTON, auxData: { funnel_uuid: A, url: document.URL } });
                }
                break;
              case O.UNLOAD_APP:
                {
                  const { appIframe: A, hoveredImage: o } = p();
                  try {
                    document.body.removeChild(A);
                  } catch (m) {}
                  ge(), o == null || o.removeAttribute("data-pin-me-only");
                }
                break;
              default:
                break;
            }
        },
        ke = (e) => {
          const r = e.target,
            { saveButton: t, isSaveButtonInjected: a, saveButtonHideTimeout: c } = p();
          if (r.tagName === "IMG" && xe(r)) {
            a || Ue();
            const u = 10,
              { top: A, left: o } = r.getBoundingClientRect(),
              m = Math.round(A + window.scrollY) + u,
              d = Math.round(o + window.scrollX) + u;
            x({ isSaveButtonDisplayed: !0, hoveredImage: r });
            const { saveButton: N } = p();
            (N.style.display = "block"), (N.style.top = `${m}px`), (N.style.left = `${d}px`), window.clearTimeout(c);
          } else r === t && window.clearTimeout(c);
        },
        de = () => {
          const { isSaveButtonDisplayed: r, saveButtonHideTimeout: t, saveButton: a } = p();
          r &&
            (window.clearTimeout(t),
            x({
              saveButtonHideTimeout: window.setTimeout(() => {
                (a.style.display = "none"), x({ isSaveButtonDisplayed: !1 });
              }, 100)
            }));
        },
        Ee = () => {
          x({ lastScrollTime: Date.now() });
        },
        Fe = () => {
          setInterval(() => {
            i({ type: C.LIFECYCLE_EVENT, action: O.KEEP_ALIVE_PING, payload: { now: Date.now() } });
          }, je);
        },
        ze = (e) => {
          var r;
          const { type: t, action: a } = e;
          if (t === C.LIFECYCLE_EVENT)
            switch (a) {
              case O.TOGGLE_APP:
              case O.HANDLE_CONTEXT_MENU_SAVE_ACTION:
                alert((r = b.i18n) == null ? void 0 : r.getMessage("noPinDomain"));
                break;
              default:
                break;
            }
        };
      var Ve = (e, r, t) =>
        new Promise((a, c) => {
          var u = (m) => {
              try {
                o(t.next(m));
              } catch (d) {
                c(d);
              }
            },
            A = (m) => {
              try {
                o(t.throw(m));
              } catch (d) {
                c(d);
              }
            },
            o = (m) => (m.done ? a(m.value) : Promise.resolve(m.value).then(u, A));
          o((t = t.apply(e, r)).next());
        });
      (() =>
        Ve(void 0, null, function* () {
          var e, r;
          if ((yield Ne(), ve())) return B(), !1;
          if (Te()) return Oe(), b.runtime.onMessage.addListener(ze), !1;
          b.runtime.onMessage.addListener(Be),
            (e = document.body) == null || e.addEventListener("mouseover", ke),
            (r = document.body) == null || r.addEventListener("mouseout", de),
            window == null || window.addEventListener("blur", de),
            window == null || window.addEventListener("scroll", Ee, { passive: !1 }),
            document == null || document.addEventListener("wheel", Ee, { passive: !1 }),
            Fe();
        }))();
    })();
  })();
})();
