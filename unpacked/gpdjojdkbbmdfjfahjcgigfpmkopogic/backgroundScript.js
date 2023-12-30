(() => {
  (() => {
    var ct = {
        531: function (W, de) {
          var K, Ee, F;
          (function (ge, X) {
            if (!0) (Ee = [W]), (K = X), (F = typeof K == "function" ? K.apply(de, Ee) : K), F !== void 0 && (W.exports = F);
            else var q;
          })(typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : this, function (ge) {
            var X, q;
            if (!((q = (X = globalThis.chrome) == null ? void 0 : X.runtime) != null && q.id))
              throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser == "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
              const j = "The message port closed before a response was received.",
                he = (z) => {
                  const U = {
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
                  if (Object.keys(U).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                  class oe extends WeakMap {
                    constructor(v, O = void 0) {
                      super(O), (this.createItem = v);
                    }
                    get(v) {
                      return this.has(v) || this.set(v, this.createItem(v)), super.get(v);
                    }
                  }
                  const Re = (E) => E && typeof E == "object" && typeof E.then == "function",
                    ve =
                      (E, v) =>
                      (...O) => {
                        z.runtime.lastError
                          ? E.reject(new Error(z.runtime.lastError.message))
                          : v.singleCallbackArg || (O.length <= 1 && v.singleCallbackArg !== !1)
                          ? E.resolve(O[0])
                          : E.resolve(O);
                      },
                    ie = (E) => (E == 1 ? "argument" : "arguments"),
                    Ce = (E, v) =>
                      function (S, ...C) {
                        if (C.length < v.minArgs)
                          throw new Error(`Expected at least ${v.minArgs} ${ie(v.minArgs)} for ${E}(), got ${C.length}`);
                        if (C.length > v.maxArgs)
                          throw new Error(`Expected at most ${v.maxArgs} ${ie(v.maxArgs)} for ${E}(), got ${C.length}`);
                        return new Promise((M, H) => {
                          if (v.fallbackToNoCallback)
                            try {
                              S[E](...C, ve({ resolve: M, reject: H }, v));
                            } catch (_) {
                              console.warn(
                                `${E} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                _
                              ),
                                S[E](...C),
                                (v.fallbackToNoCallback = !1),
                                (v.noCallback = !0),
                                M();
                            }
                          else v.noCallback ? (S[E](...C), M()) : S[E](...C, ve({ resolve: M, reject: H }, v));
                        });
                      },
                    Q = (E, v, O) =>
                      new Proxy(v, {
                        apply(S, C, M) {
                          return O.call(C, E, ...M);
                        }
                      });
                  let I = Function.call.bind(Object.prototype.hasOwnProperty);
                  const le = (E, v = {}, O = {}) => {
                      let S = Object.create(null),
                        C = {
                          has(H, _) {
                            return _ in E || _ in S;
                          },
                          get(H, _, P) {
                            if (_ in S) return S[_];
                            if (!(_ in E)) return;
                            let R = E[_];
                            if (typeof R == "function")
                              if (typeof v[_] == "function") R = Q(E, E[_], v[_]);
                              else if (I(O, _)) {
                                let Y = Ce(_, O[_]);
                                R = Q(E, E[_], Y);
                              } else R = R.bind(E);
                            else if (typeof R == "object" && R !== null && (I(v, _) || I(O, _))) R = le(R, v[_], O[_]);
                            else if (I(O, "*")) R = le(R, v[_], O["*"]);
                            else
                              return (
                                Object.defineProperty(S, _, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get() {
                                    return E[_];
                                  },
                                  set(Y) {
                                    E[_] = Y;
                                  }
                                }),
                                R
                              );
                            return (S[_] = R), R;
                          },
                          set(H, _, P, R) {
                            return _ in S ? (S[_] = P) : (E[_] = P), !0;
                          },
                          defineProperty(H, _, P) {
                            return Reflect.defineProperty(S, _, P);
                          },
                          deleteProperty(H, _) {
                            return Reflect.deleteProperty(S, _);
                          }
                        },
                        M = Object.create(E);
                      return new Proxy(M, C);
                    },
                    me = (E) => ({
                      addListener(v, O, ...S) {
                        v.addListener(E.get(O), ...S);
                      },
                      hasListener(v, O) {
                        return v.hasListener(E.get(O));
                      },
                      removeListener(v, O) {
                        v.removeListener(E.get(O));
                      }
                    }),
                    we = new oe((E) =>
                      typeof E != "function"
                        ? E
                        : function (O) {
                            const S = le(O, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                            E(S);
                          }
                    ),
                    pe = new oe((E) =>
                      typeof E != "function"
                        ? E
                        : function (O, S, C) {
                            let M = !1,
                              H,
                              _ = new Promise((ae) => {
                                H = function (G) {
                                  (M = !0), ae(G);
                                };
                              }),
                              P;
                            try {
                              P = E(O, S, H);
                            } catch (ae) {
                              P = Promise.reject(ae);
                            }
                            const R = P !== !0 && Re(P);
                            if (P !== !0 && !R && !M) return !1;
                            const Y = (ae) => {
                              ae.then(
                                (G) => {
                                  C(G);
                                },
                                (G) => {
                                  let fe;
                                  G && (G instanceof Error || typeof G.message == "string")
                                    ? (fe = G.message)
                                    : (fe = "An unexpected error occurred"),
                                    C({ __mozWebExtensionPolyfillReject__: !0, message: fe });
                                }
                              ).catch((G) => {
                                console.error("Failed to send onMessage rejected reply", G);
                              });
                            };
                            return Y(R ? P : _), !0;
                          }
                    ),
                    ke = ({ reject: E, resolve: v }, O) => {
                      z.runtime.lastError
                        ? z.runtime.lastError.message === j
                          ? v()
                          : E(new Error(z.runtime.lastError.message))
                        : O && O.__mozWebExtensionPolyfillReject__
                        ? E(new Error(O.message))
                        : v(O);
                    },
                    be = (E, v, O, ...S) => {
                      if (S.length < v.minArgs)
                        throw new Error(`Expected at least ${v.minArgs} ${ie(v.minArgs)} for ${E}(), got ${S.length}`);
                      if (S.length > v.maxArgs)
                        throw new Error(`Expected at most ${v.maxArgs} ${ie(v.maxArgs)} for ${E}(), got ${S.length}`);
                      return new Promise((C, M) => {
                        const H = ke.bind(null, { resolve: C, reject: M });
                        S.push(H), O.sendMessage(...S);
                      });
                    },
                    xe = {
                      devtools: { network: { onRequestFinished: me(we) } },
                      runtime: {
                        onMessage: me(pe),
                        onMessageExternal: me(pe),
                        sendMessage: be.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
                      },
                      tabs: { sendMessage: be.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
                    },
                    Z = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                  return (U.privacy = { network: { "*": Z }, services: { "*": Z }, websites: { "*": Z } }), le(z, xe, U);
                };
              ge.exports = he(chrome);
            } else ge.exports = globalThis.browser;
          });
        }
      },
      He = {};
    function Ve(W) {
      var de = He[W];
      if (de !== void 0) return de.exports;
      var K = (He[W] = { exports: {} });
      return ct[W].call(K.exports, K, K.exports, Ve), K.exports;
    }
    var $r = {};
    (() => {
      "use strict";
      const W = {
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
        de = {
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
        K = {
          BOARD_COVER: 36,
          CREATE_BUTTON: 44,
          PIN_SAVE_BUTTON: 48,
          SECTION_COVER: 11854,
          SAVE_BUTTON: 12018,
          VISIT_BUTTON: 12796,
          PRIMARY_ACTION_BUTTON: 13004
        },
        Ee = { BROWSER_EXTENSION: 8 },
        F = { OTHER: 0, CHROME: 1, SAFARI: 2, IE: 3, FIREFOX: 4, OPERA: 5, EDGE: 7 };
      var ge = ((e) => ((e.PRODUCTION = "production"), (e.DEVELOPMENT = "development"), e))(ge || {}),
        X = ((e) => ((e.SAFARI = "safari"), (e.CHROME = "chrome"), (e.CHROME_GROWTH = "chrome_growth"), e))(X || {}),
        q = ((e) => (
          (e[(e.API_REQUEST = 0)] = "API_REQUEST"),
          (e[(e.LIFECYCLE_EVENT = 1)] = "LIFECYCLE_EVENT"),
          (e[(e.DATA_REQUEST = 2)] = "DATA_REQUEST"),
          e
        ))(q || {}),
        j = ((e) => (
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
        ))(j || {}),
        he = ((e) => ((e[(e.LOG_EVENT = 0)] = "LOG_EVENT"), e))(he || {}),
        z = ((e) => ((e.POPULATE_GRID = "populateGrid"), e))(z || {}),
        U = ((e) => (
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
        ))(U || {}),
        oe = ((e) => ((e.PUBLIC = "public"), (e.SECRET = "secret"), e))(oe || {}),
        Re = ((e) => (
          (e[(e.MOUNT_SAVEPICKER = 0)] = "MOUNT_SAVEPICKER"),
          (e[(e.MOUNT_SIDEBAR = 1)] = "MOUNT_SIDEBAR"),
          (e[(e.SET_FUNNEL_ID = 2)] = "SET_FUNNEL_ID"),
          e
        ))(Re || {}),
        ve = ((e) => ((e[(e.SAVEPICKER = 0)] = "SAVEPICKER"), (e[(e.SIDEBAR = 1)] = "SIDEBAR"), e))(ve || {});
      const ie = { [F.OTHER]: "xx", [F.CHROME]: "cr", [F.SAFARI]: "sf", [F.IE]: "ie", [F.FIREFOX]: "ff", [F.OPERA]: "op", [F.EDGE]: "ms" };
      var Ce = ((e) => (
        (e[(e.SignIn = 0)] = "SignIn"),
        (e[(e.ImagePicker = 1)] = "ImagePicker"),
        (e[(e.BoardPicker = 2)] = "BoardPicker"),
        (e[(e.BoardCreate = 3)] = "BoardCreate"),
        (e[(e.BoardSectionPicker = 4)] = "BoardSectionPicker"),
        (e[(e.BoardSectionCreate = 5)] = "BoardSectionCreate"),
        (e[(e.PinCreate = 6)] = "PinCreate"),
        e
      ))(Ce || {});
      function Q() {
        return [1e7, 1e3, 4e3, 8e3, 1e11]
          .join("")
          .replace(/[018]/g, (e) => (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16));
      }
      var I = Ve(531),
        le = Object.defineProperty,
        me = Object.defineProperties,
        we = Object.getOwnPropertyDescriptors,
        pe = Object.getOwnPropertySymbols,
        ke = Object.prototype.hasOwnProperty,
        be = Object.prototype.propertyIsEnumerable,
        xe = (e, t, s) => (t in e ? le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        Z = (e, t) => {
          for (var s in t || (t = {})) ke.call(t, s) && xe(e, s, t[s]);
          if (pe) for (var s of pe(t)) be.call(t, s) && xe(e, s, t[s]);
          return e;
        },
        E = (e, t) => me(e, we(t)),
        v = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      function O() {
        const e = navigator.userAgent.toLowerCase();
        return e.indexOf("edge") > -1 || e.indexOf("edg") > -1
          ? F.EDGE
          : e.indexOf("trident") > -1
          ? F.IE
          : e.indexOf("firefox") > -1
          ? F.FIREFOX
          : e.indexOf("opr") > -1
          ? F.OPERA
          : e.indexOf("chrome") > -1
          ? F.CHROME
          : e.indexOf("safari") > -1
          ? F.SAFARI
          : F.OTHER;
      }
      const S = ["config", "requests", "userToken", "user", "boards", "boardSections", "rolloutConfig"],
        C = O(),
        M = {
          config: {
            isAuthenticated: !1,
            unauthId: Q(),
            extensionVersion: `${ie[C]}${I.runtime.getManifest().version}`,
            browserType: C,
            buildTarget: "chrome"
          },
          requests: {},
          userToken: {},
          user: {},
          boards: [],
          boardSections: {},
          rolloutConfig: { group: "control" }
        };
      function H(e) {
        let t = e;
        const s = () => t,
          r = (p) =>
            v(this, null, function* () {
              return yield I.storage.local.set(Z({}, p)), (t = Z(Z({}, t), p)), t;
            });
        return {
          getBackgroundScriptState: s,
          setBackgroundScriptState: r,
          clearBackgroundScriptState: () =>
            v(this, null, function* () {
              const { rolloutConfig: p } = t,
                a = structuredClone(p),
                d = E(Z({}, e), { rolloutConfig: a });
              yield I.storage.local.clear(), yield r(d);
            })
        };
      }
      const { getBackgroundScriptState: _, setBackgroundScriptState: P, clearBackgroundScriptState: R } = H(M);
      function Y() {
        return v(this, null, function* () {
          const e = yield I.storage.local.get(S);
          for (const t of S) e[t] && P({ [t]: e[t] });
        });
      }
      var ae = Object.defineProperty,
        G = Object.getOwnPropertySymbols,
        fe = Object.prototype.hasOwnProperty,
        ut = Object.prototype.propertyIsEnumerable,
        qe = (e, t, s) => (t in e ? ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        dt = (e, t) => {
          for (var s in t || (t = {})) fe.call(t, s) && qe(e, s, t[s]);
          if (G) for (var s of G(t)) ut.call(t, s) && qe(e, s, t[s]);
          return e;
        },
        gt = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      const mt = (e) => {
          let t = "";
          return (
            e &&
              (t = Object.entries(e)
                .map(([s, r]) => `${s}=${r}`)
                .join("&")),
            t
          );
        },
        ee = (function () {
          const e = ({ method: s, token: r, formData: o, buildTarget: p }) => {
            const { language: a } = navigator,
              d = { "Accept-Language": a, charset: "UTF-8" };
            return (
              p === X.SAFARI
                ? r && (d.Authorization = `Bearer ${r}`)
                : ((d.Accept = "application/json"),
                  (d["X-Pinterest-App-Type-Detailed"] = "8"),
                  (d["X-Client-ID"] = "1447278"),
                  r && (d["X-Request-Forgery-Token"] = r)),
              dt({ method: s, headers: d, credentials: p === X.SAFARI ? "omit" : "include" }, o && { body: o })
            );
          };
          return {
            makeRequest: (s) =>
              gt(this, [s], function* ({ subDomain: r = "api", path: o, params: p, method: a, formData: d }) {
                const { userToken: { token: l } = {}, config: { buildTarget: m } = {} } = _(),
                  w = mt(p),
                  k = e({ method: a, token: l, formData: d, buildTarget: m }),
                  N = `https://${r}.pinterest.com/v3${o}?${w}`;
                try {
                  const A = yield fetch(N, k),
                    f = yield A.json();
                  return A.status === 200
                    ? { data: f.data }
                    : (l && (A.status === 401 || A.status === 403) && (yield R(), yield Fe(), yield Y()), { error: f.message });
                } catch (A) {
                  return { error: A == null ? void 0 : A.toString() };
                }
              })
          };
        })();
      function pt(e) {
        const { user: { gatekeeper_experiments: t = {} } = {} } = _(),
          s = t[e] || {},
          r = s != null && s.group ? s.group : "";
        return Ge(r);
      }
      function Ge(e) {
        const t = e.startsWith("enabled") || e.startsWith("employees");
        return { group: e, anyEnabled: t };
      }
      var ft = Object.defineProperty,
        At = Object.defineProperties,
        _t = Object.getOwnPropertyDescriptors,
        $e = Object.getOwnPropertySymbols,
        Et = Object.prototype.hasOwnProperty,
        ht = Object.prototype.propertyIsEnumerable,
        We = (e, t, s) => (t in e ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        te = (e, t) => {
          for (var s in t || (t = {})) Et.call(t, s) && We(e, s, t[s]);
          if ($e) for (var s of $e(t)) ht.call(t, s) && We(e, s, t[s]);
          return e;
        },
        re = (e, t) => At(e, _t(t)),
        vt = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      const bt = 500,
        xt = 2048,
        Tt = 50,
        Ot = 50;
      var St = ((e) => (
        (e[(e.USER = 6e5)] = "USER"),
        (e[(e.BOARDS = 6e5)] = "BOARDS"),
        (e[(e.BOARD_SECTIONS = 6e5)] = "BOARD_SECTIONS"),
        (e[(e.GATEKEEPER = 6e5)] = "GATEKEEPER"),
        e
      ))(St || {});
      const Ne = (e, ...t) =>
        vt(void 0, [e, ...t], function* (s, r = {}, o = !0) {
          var p, a, d, l;
          X.CHROME === "chrome" && ((yield Nt()) || (yield R(), yield Fe(), yield Y()));
          const { requests: m } = _(),
            w = Date.now(),
            k = (A, f) => {
              A.forEach((T) => {
                if (!(T in f)) throw new Error(`Field '${T}' is missing from ${U[s]}.`);
              });
            },
            N = (A) => {
              var f;
              return (((f = m == null ? void 0 : m[A]) == null ? void 0 : f.expires) || 0) < w;
            };
          switch (s) {
            case U.FETCH_CONFIG: {
              const { config: A } = _();
              return { data: A };
            }
            case U.FETCH_EXPERIMENT: {
              k(["experimentName"], r);
              const { experimentName: A, dangerousOptions: f } = r,
                { user: T, userToken: { token: b } = {} } = _(),
                D = "/gatekeeper/activate/",
                V = `${D}${A}`;
              if (!b) return { data: { group: "", anyEnabled: !1 } };
              if ((f != null && f.dangerouslySkipActivation) || !N(V)) return { data: pt(A) };
              const J = { experiment_data: JSON.stringify({ key: A }) },
                $ = yield ee.makeRequest({ params: J, path: D, method: "PUT" }),
                ce = ((p = $ == null ? void 0 : $.data) == null ? void 0 : p.group) || "",
                y = Ge(ce);
              if ($ != null && $.data && T != null && T.id) {
                const { gatekeeper_experiments: ne } = T;
                yield P({ user: re(te({}, T), { gatekeeper_experiments: re(te({}, ne), { [A]: { key: A, group: ce } }) }) });
              }
              return yield P({ requests: re(te({}, m), { [V]: { expires: w + 6e5 } }) }), { data: y };
            }
            case U.FETCH_USER: {
              const A = "/users/me/";
              if (o && !N(A)) {
                const { user: b } = _();
                if (b != null && b.id) return { data: b };
              }
              const f = {
                  add_fields: ["user.ads_customize_from_conversion", "user.personalize_from_offsite_browsing", "user.country"].join(",")
                },
                T = yield ee.makeRequest({ path: A, params: f, method: "GET" });
              return (
                (a = T.data) != null &&
                  a.id &&
                  (yield ze(), yield P({ user: T.data, requests: re(te({}, m), { [A]: { expires: w + 6e5 } }) })),
                T
              );
            }
            case U.FETCH_BOARDS: {
              const A = "/users/me/boards/feed/";
              if (o && !N(A)) {
                const { boards: b = [] } = _();
                return { data: b };
              }
              const f = {
                  page_size: 250,
                  filter: "all",
                  sort: "last_pinned_to",
                  add_fields: ["board.image_cover_url", "board.privacy", "board.collaborated_by_me", "board.section_count"].join(",")
                },
                T = yield ee.makeRequest({ path: A, params: f, method: "GET" });
              return T.data && (yield P({ boards: T.data, requests: re(te({}, m), { [A]: { expires: w + 6e5 } }) })), T;
            }
            case U.FETCH_BOARD_SECTIONS: {
              k(["boardId"], r);
              const { boardId: A } = r,
                { boardSections: f } = _(),
                T = `/board/${A}/sections/`;
              if (o && !N(T)) return { data: (f == null ? void 0 : f[A]) || [] };
              const b = yield ee.makeRequest({ path: T, method: "GET" });
              return (
                b.data &&
                  (yield P({ boardSections: re(te({}, f), { [A]: b.data }), requests: re(te({}, m), { [T]: { expires: w + 6e5 } }) })),
                b
              );
            }
            case U.CREATE_BOARD: {
              k(["name", "secret"], r);
              const { name: A, secret: f } = r,
                T = "/boards/",
                b = { name: encodeURIComponent(A.substring(0, Tt)), privacy: f ? oe.SECRET : oe.PUBLIC },
                D = yield ee.makeRequest({ path: T, params: b, method: "PUT" });
              if ((d = D == null ? void 0 : D.data) != null && d.id) {
                const { boards: V = [] } = _();
                yield P({ boards: [D.data, ...V] });
              }
              return D;
            }
            case U.CREATE_BOARD_SECTION: {
              k(["title", "boardId"], r);
              const { title: A, boardId: f } = r,
                T = `/board/${f}/sections/`,
                b = { title: encodeURIComponent(A.substring(0, Ot)) },
                D = yield ee.makeRequest({ path: T, params: b, method: "PUT" });
              if (D != null && D.data) {
                const { boardSections: V } = _(),
                  J = (V == null ? void 0 : V[f]) || [],
                  $ = [D.data, ...J];
                yield P({ boardSections: re(te({}, V), { [f]: $ }) });
              }
              return D;
            }
            case U.CREATE_PIN: {
              k(["boardId", "pinUrl"], r);
              const {
                  description: A,
                  boardId: f,
                  boardSectionId: T,
                  pinUrl: b,
                  imageBase64: D,
                  url: V,
                  metadata: J,
                  color: $ = "#ffffff"
                } = r,
                ce = "/pins/",
                y = new FormData();
              y.set("method", "extension"),
                y.set("add_fields", "user.is_partner"),
                y.set("board_id", f),
                T && y.set("section", T),
                A && y.set("description", A.substring(0, bt)),
                V && y.set("source_url", V.substring(0, xt)),
                J && y.set("found_metadata", J),
                b === ""
                  ? (y.set("isGeneratedTextImage", "true"), y.set("color", $))
                  : D
                  ? y.set("image_base64", D)
                  : y.set("image_url", b);
              const ne = yield ee.makeRequest({ path: ce, method: "PUT", formData: y });
              if ((l = ne == null ? void 0 : ne.data) != null && l.id) {
                const { boards: Pe = [] } = _(),
                  se = Pe.find((ue) => ue.id === f);
                if (se != null && se.id) {
                  const ue = Pe.filter((je) => je.id !== f);
                  yield P({ boards: [se, ...ue] });
                }
              }
              return ne;
            }
            case U.CREATE_LOGS: {
              k(["eventBatchJson"], r);
              const { eventBatchJson: A } = r,
                f = "/callback/event/",
                T = new FormData();
              return (
                T.set("isJSONData", "true"),
                T.set("event_batch_json", A),
                yield ee.makeRequest({ subDomain: "trk", path: f, method: "POST", formData: T })
              );
            }
            default:
              throw new Error("'action' not found");
          }
        });
      var It = Object.defineProperty,
        Pt = Object.defineProperties,
        yt = Object.getOwnPropertyDescriptors,
        Ke = Object.getOwnPropertySymbols,
        Rt = Object.prototype.hasOwnProperty,
        Ct = Object.prototype.propertyIsEnumerable,
        Xe = (e, t, s) => (t in e ? It(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        wt = (e, t) => {
          for (var s in t || (t = {})) Rt.call(t, s) && Xe(e, s, t[s]);
          if (Ke) for (var s of Ke(t)) Ct.call(t, s) && Xe(e, s, t[s]);
          return e;
        },
        kt = (e, t) => Pt(e, yt(t)),
        Ae = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      function ze() {
        return Ae(this, null, function* () {
          const { config: e } = _();
          yield P({ config: kt(wt({}, e), { isAuthenticated: !0 }) });
        });
      }
      function Ye(e) {
        return Ae(this, null, function* () {
          const t = new TextEncoder().encode(e.replace(/"/g, "")),
            s = yield crypto.subtle.digest("SHA-512", t);
          return Array.from(new Uint8Array(s))
            .map((p) => p.toString(16).padStart(2, "0"))
            .join("");
        });
      }
      function De() {
        return Ae(this, null, function* () {
          const e = yield I.cookies.getAll({ domain: ".pinterest.com" }),
            t = e.find((p) => p.name === "_auth"),
            s = t == null ? void 0 : t.value,
            r = e.find((p) => p.name === "_pinterest_sess"),
            o = r == null ? void 0 : r.value;
          return { authCookieValue: s, sessionCookieValue: o };
        });
      }
      function Fe() {
        return Ae(this, null, function* () {
          const { authCookieValue: e, sessionCookieValue: t } = yield De();
          if (!!(e === "1" && t)) {
            const r = yield Ye(t);
            yield P({ userToken: { token: r, sessionCookieValue: t } }), yield ze(), yield Ne(U.FETCH_USER);
          }
        });
      }
      function Nt() {
        return Ae(this, null, function* () {
          const { userToken: { sessionCookieValue: e } = {} } = _(),
            { sessionCookieValue: t } = yield De();
          return t === e;
        });
      }
      var Te = (e, t, s) =>
        new Promise((r, o) => {
          var p = (l) => {
              try {
                d(s.next(l));
              } catch (m) {
                o(m);
              }
            },
            a = (l) => {
              try {
                d(s.throw(l));
              } catch (m) {
                o(m);
              }
            },
            d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
          d((s = s.apply(e, t)).next());
        });
      const Dt = 60 * 10;
      function Ft(e) {
        return Te(this, null, function* () {
          const t = new TextEncoder(),
            s = "8299a6dd23e63be958e6f8c9899647cdfa08bdca",
            r = yield crypto.subtle.importKey("raw", t.encode(s), { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign", "verify"]),
            o = yield crypto.subtle.sign("HMAC", r, t.encode(e)),
            p = new Uint8Array(o);
          return Array.prototype.map.call(p, (d) => d.toString(16).padStart(2, "0")).join("");
        });
      }
      function Be() {
        return Te(this, null, function* () {
          const { rolloutConfig: e } = yield I.storage.local.get(["rolloutConfig"]);
          return e;
        });
      }
      function Wr() {
        return Te(this, null, function* () {
          var e;
          const { language: t } = navigator,
            s = { "Accept-Language": t, charset: "UTF-8", "Content-Type": "application/x-www-form-urlencoded" };
          let r = yield Be(),
            o = (r == null ? void 0 : r.group) || "control";
          try {
            const p = "PUT",
              a = "https://api.pinterest.com/v3/gatekeeper/activate/",
              l = (r == null ? void 0 : r.uniqueId) || randomUUID(),
              m = Math.floor(Date.now() / 1e3),
              w = JSON.stringify({ key: "seo_save_extension_chrome_v6_rollout", is_seo_exp: !0, unique_id: l }),
              k = [p, encodeURIComponent(a), "client_id=1447723", `experiment_data=${encodeURIComponent(w)}`, `timestamp=${m}`].join("&"),
              N = yield Ft(k),
              A = yield fetch(`${a}?client_id=1447723&oauth_signature=${N}&timestamp=${m}&experiment_data=${w}`, {
                method: p,
                headers: s,
                credentials: "omit"
              }),
              f = yield A.json();
            A.status === 200 &&
              ((o = ((e = f == null ? void 0 : f.data) == null ? void 0 : e.group) || "control"),
              (r = r || {}),
              (r.uniqueId = l),
              (r.requestDate = m),
              (r.group = o),
              yield storage.local.set({ rolloutConfig: r }));
          } catch (p) {}
        });
      }
      function Bt() {
        return Te(this, null, function* () {
          var e;
          let t = yield Be(),
            s = (t == null ? void 0 : t.group) || "control";
          const r = Math.floor(Date.now() / 1e3);
          if (t != null && t.group && t != null && t.requestDate && t.requestDate + Dt > r) return;
          const { authCookieValue: o, sessionCookieValue: p } = yield De(),
            a = !!(o === "1" && p);
          let d = "";
          if ((a && (d = yield Ye(p)), !d)) return;
          const l = (t == null ? void 0 : t.uniqueId) || Q(),
            { language: m } = navigator,
            w = {
              "Accept-Language": m,
              charset: "UTF-8",
              Accept: "application/json",
              "X-Pinterest-App-Type-Detailed": "8",
              "X-Client-ID": "1447278",
              "X-Request-Forgery-Token": d
            };
          try {
            const k = "PUT",
              N = JSON.stringify({ key: "chrome_save_extension_v6_rollout" }),
              A = yield fetch(`https://api.pinterest.com/v3/gatekeeper/activate/?experiment_data=${N}`, {
                method: k,
                headers: w,
                credentials: "include"
              }),
              f = yield A.json();
            A.status === 200 &&
              ((s = ((e = f == null ? void 0 : f.data) == null ? void 0 : e.group) || "control"),
              (t = t || {}),
              (t.uniqueId = l),
              (t.requestDate = r),
              (t.group = s),
              yield I.storage.local.set({ rolloutConfig: t }));
          } catch (k) {}
        });
      }
      const Kr = "pinterest-save-extension",
        Xr = "https://help.pinterest.com/en/save-extension/oauth-access-token",
        Lt = [
          "AT",
          "BE",
          "BG",
          "CY",
          "CZ",
          "DE",
          "DK",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "HR",
          "HU",
          "IE",
          "IS",
          "IT",
          "LI",
          "LT",
          "LU",
          "LV",
          "MT",
          "NL",
          "NO",
          "PL",
          "PT",
          "RO",
          "SE",
          "SI",
          "SK",
          "UK"
        ];
      var Ut = Object.defineProperty,
        Je = Object.getOwnPropertySymbols,
        Mt = Object.prototype.hasOwnProperty,
        jt = Object.prototype.propertyIsEnumerable,
        Qe = (e, t, s) => (t in e ? Ut(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        Oe = (e, t) => {
          for (var s in t || (t = {})) Mt.call(t, s) && Qe(e, s, t[s]);
          if (Je) for (var s of Je(t)) jt.call(t, s) && Qe(e, s, t[s]);
          return e;
        };
      const Ht = (e) => {
          const { type: t, action: s, payload: r, onSuccess: o, onError: p } = e;
          runtime.sendMessage({ type: t, action: s, payload: r }).then(
            (a) => {
              a != null && a.error ? p && p(a.error) : o && o(a);
            },
            (a) => {
              p && p(a);
            }
          );
        },
        zr = ({ eventType: e, viewType: t, auxData: s, element: r, objectIdStr: o }) => {
          Ht({
            type: MessageType.DATA_REQUEST,
            action: DataRequestActionType.LOG_EVENT,
            payload: Oe(
              Oe(Oe(Oe({ eventType: e }, t && { viewType: t }), r && { element: r }), o && { objectIdStr: o }),
              s && { auxData: s }
            )
          });
        },
        _e = ({ tab: e, type: t, action: s, payload: r }) => {
          I.tabs.sendMessage(e, { type: t, action: s, payload: r });
        },
        Yr = ({ element: e, action: t, payload: s = {} }) => {
          e.postMessage({ target: PINTEREST_SAVE_EXTENSION_ID, action: t, payload: s }, "*");
        };
      var Vt = Object.defineProperty,
        qt = Object.defineProperties,
        Gt = Object.getOwnPropertyDescriptors,
        Ze = Object.getOwnPropertySymbols,
        $t = Object.prototype.hasOwnProperty,
        Wt = Object.prototype.propertyIsEnumerable,
        et = (e, t, s) => (t in e ? Vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        Se = (e, t) => {
          for (var s in t || (t = {})) $t.call(t, s) && et(e, s, t[s]);
          if (Ze) for (var s of Ze(t)) Wt.call(t, s) && et(e, s, t[s]);
          return e;
        },
        Kt = (e, t) => qt(e, Gt(t)),
        Xt = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      const zt = 20,
        Yt = 5 * 60 * 1e3;
      function Jt() {
        let e = [];
        const t = ({ eventType: r, viewType: o, element: p, objectIdStr: a, auxData: d }) => {
            const {
                user: { id: l } = {},
                config: { extensionVersion: m, browserType: w, unauthId: k, isAuthenticated: N } = {},
                rolloutConfig: A
              } = _(),
              f = Date.now(),
              T = Ee.BROWSER_EXTENSION;
            if (!m || !w) throw new Error("Missing new log event data");
            const b = Kt(
              Se(Se({ eventType: r, viewType: o, element: p }, a && { objectIdStr: a }), d && typeof d == "object" && { auxData: d }),
              { time: f * 1e6, app: T, appVersion: `${m}-${A == null ? void 0 : A.group}`, browser: w }
            );
            (o || p) && (b.context = Se(Se({}, o && { viewType: o }), p && { element: p })),
              N && l ? (b.userId = l) : (b.unauthId = k),
              e.push(b),
              (e.length >= zt || (e.length > 0 && f - e[0].time >= Yt * 1e6)) && s();
          },
          s = () =>
            Xt(this, null, function* () {
              if (e.length > 0) {
                const r = Date.now() * 1e6,
                  o = { eventBatchJson: JSON.stringify({ reportTime: r, events: e }) };
                Ne(U.CREATE_LOGS, o), (e = []);
              }
            });
        return { contextLogEvent: t };
      }
      const { contextLogEvent: Le } = Jt(),
        tt = 10,
        Qt = 60;
      function Zt() {
        let e = {},
          t = Date.now();
        const s = (p) => {
            if (p in e) {
              const a = e[p].data;
              return delete e[p], a;
            } else return {};
          },
          r = (p) => {
            o();
            const a = Q(),
              d = Date.now(),
              l = d + tt * 1e3;
            return (e[a] = { data: p, expires: l }), (t = d), a;
          },
          o = () => {
            const p = Date.now();
            t + Qt * 1e3 < p ? (e = {}) : t + tt * 1e3 < p && (e = Object.fromEntries(Object.entries(e).filter(([, a]) => a.expires > p)));
          };
        return { savePinmarkletPayload: r, getPinmarkletPayload: s };
      }
      const { savePinmarkletPayload: er, getPinmarkletPayload: tr } = Zt();
      var rr = Object.defineProperty,
        nr = Object.defineProperties,
        sr = Object.getOwnPropertyDescriptors,
        rt = Object.getOwnPropertySymbols,
        ar = Object.prototype.hasOwnProperty,
        or = Object.prototype.propertyIsEnumerable,
        nt = (e, t, s) => (t in e ? rr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        ir = (e, t) => {
          for (var s in t || (t = {})) ar.call(t, s) && nt(e, s, t[s]);
          if (rt) for (var s of rt(t)) or.call(t, s) && nt(e, s, t[s]);
          return e;
        },
        lr = (e, t) => nr(e, sr(t)),
        cr = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      function ur(e) {
        if (e != null && e.id) {
          const { config: t } = _();
          _e({
            tab: e.id,
            type: q.LIFECYCLE_EVENT,
            action: j.TOGGLE_APP,
            payload: { isAuthenticated: !!(t != null && t.isAuthenticated) }
          });
        }
      }
      const dr = (e, t) =>
          cr(void 0, null, function* () {
            var s, r, o, p, a, d, l, m, w;
            const { type: k, action: N, payload: A } = e;
            switch (k) {
              case q.API_REQUEST:
                return yield Ne(N, A);
              case q.LIFECYCLE_EVENT: {
                switch (N) {
                  case j.INJECT_PINMARKLET:
                    (s = t == null ? void 0 : t.tab) != null &&
                      s.id &&
                      (Le({ eventType: W.SAVE_BROWSER_PIN_IMAGES_REQUESTED }),
                      I.scripting.executeScript({
                        target: { tabId: (r = t == null ? void 0 : t.tab) == null ? void 0 : r.id },
                        files: ["/pinmarklet.js"]
                      }));
                    break;
                  case j.FETCH_PINMARKLET_PAYLOAD:
                    if ((o = t == null ? void 0 : t.tab) != null && o.id && A.payloadId) {
                      const { config: f } = _(),
                        T = tr(A.payloadId);
                      return lr(ir({}, T), {
                        isAuthenticated: !!(f != null && f.isAuthenticated),
                        buildTarget: f == null ? void 0 : f.buildTarget
                      });
                    }
                    break;
                  case j.HIDE_APP:
                    (p = t == null ? void 0 : t.tab) != null &&
                      p.id &&
                      _e({ tab: t.tab.id, type: q.LIFECYCLE_EVENT, action: j.UNLOAD_APP });
                    break;
                  case j.SETUP_OATH_FLOW: {
                    const { accessToken: f } = A;
                    return (a = t == null ? void 0 : t.tab) != null && a.id && f
                      ? (yield P({ userToken: { token: f, sessionCookieValue: "" } }), { data: { status: "success" } })
                      : { error: "Failed to finish oAuth flow" };
                  }
                  case j.CHECK_OAUTH_STATE: {
                    if ((d = t == null ? void 0 : t.tab) != null && d.id) {
                      const { userToken: f } = _();
                      return { data: { status: f != null && f.token ? "success" : "waiting" } };
                    }
                    break;
                  }
                  case j.KEEP_ALIVE_PING:
                    (l = t == null ? void 0 : t.tab) != null &&
                      l.id &&
                      _e({ tab: t.tab.id, type: q.LIFECYCLE_EVENT, action: j.KEEP_ALIVE_PONG, payload: { now: Date.now() } });
                    break;
                  default:
                    break;
                }
                break;
              }
              case q.DATA_REQUEST: {
                switch (N) {
                  case he.LOG_EVENT:
                    (m = t == null ? void 0 : t.tab) != null && m.id && Le(A);
                    break;
                  default:
                    break;
                }
                break;
              }
              default:
                {
                  const { act: f, data: T } = e;
                  if (Object.values(z).includes(f) && f === z.POPULATE_GRID && (w = t == null ? void 0 : t.tab) != null && w.id && T) {
                    Le({ eventType: T.thumb.length > 0 ? W.SAVE_BROWSER_PIN_IMAGES_FOUND : W.SAVE_BROWSER_PIN_IMAGES_NOT_FOUND });
                    const b = er(T);
                    _e({ tab: t.tab.id, type: q.LIFECYCLE_EVENT, action: j.POPULATE_APP, payload: { payloadId: b } });
                  }
                }
                break;
            }
          }),
        gr = (e, t) => {
          t != null && t.id && _e({ tab: t.id, type: q.LIFECYCLE_EVENT, action: j.HANDLE_CONTEXT_MENU_SAVE_ACTION });
        },
        st = () => {
          const {
            user: { id: e = null, country: t = null, ads_customize_from_conversion: s = !1, personalize_from_offsite_browsing: r = !1 } = {}
          } = _();
          e && s && r && t && !Lt.includes(t)
            ? I.declarativeNetRequest.updateSessionRules({
                removeRuleIds: [1002],
                addRules: [
                  {
                    id: 1002,
                    priority: 1,
                    action: {
                      type: "redirect",
                      redirect: { transform: { queryTransform: { addOrReplaceParams: [{ key: "beuid", value: e }] } } }
                    },
                    condition: { urlFilter: "*://ct.pinterest.com/*" }
                  }
                ]
              })
            : I.declarativeNetRequest.updateSessionRules({ removeRuleIds: [1002] });
        },
        mr = "contextMenuSave";
      function pr() {
        I.contextMenus.removeAll().then(() => {
          I.contextMenus.create({ id: mr, title: I.i18n.getMessage("contextMenuSaveActionText"), contexts: ["image"] }, () => {
            I.contextMenus.onClicked.addListener(gr);
          });
        });
      }
      var fr = Object.defineProperty,
        Ar = Object.defineProperties,
        _r = Object.getOwnPropertyDescriptors,
        at = Object.getOwnPropertySymbols,
        Er = Object.prototype.hasOwnProperty,
        hr = Object.prototype.propertyIsEnumerable,
        ot = (e, t, s) => (t in e ? fr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s)),
        Ue = (e, t) => {
          for (var s in t || (t = {})) Er.call(t, s) && ot(e, s, t[s]);
          if (at) for (var s of at(t)) hr.call(t, s) && ot(e, s, t[s]);
          return e;
        },
        Me = (e, t) => Ar(e, _r(t)),
        Ie = (e, t, s) =>
          new Promise((r, o) => {
            var p = (l) => {
                try {
                  d(s.next(l));
                } catch (m) {
                  o(m);
                }
              },
              a = (l) => {
                try {
                  d(s.throw(l));
                } catch (m) {
                  o(m);
                }
              },
              d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
            d((s = s.apply(e, t)).next());
          });
      function vr() {
        const e = {
            clientId: 1447278,
            canHaz: { saveAsDataURI: !0, localImagePicker: !0 },
            endpoint: {
              grid: {
                pinCreate: "https://www.pinterest.com/pin/create/extension/",
                rePinCreate: "https://www.pinterest.com/pin/%s/repin/x/"
              }
            },
            path: { welcome: "/_/_/about/browser-button/install/" },
            updatePage: { version: "5.0.0", show: !1, focus: !1, path: "/_/_/about/browser-button/update/" },
            ctx: {
              flushTypes: { 1: !0, 20: !0, 8219: !0 },
              flushConstants: { timeoutNanoseconds: 3e11, numEvents: 20 },
              EventTypes: {
                PIN_CREATE: 1,
                VIEW: 13,
                BOARD_CREATE: 20,
                USER_FOLLOW: 45,
                CLICK: 101,
                SAVE_BROWSER_PIN_IMAGES_FOUND: 2900,
                SAVE_BROWSER_PIN_IMAGES_NOT_FOUND: 2901,
                PIN_CREATE_FAILURE: 7564,
                USER_ACTIVE: 7137,
                INSTALL: 8219,
                BROWSER_SESSION: 8221,
                BROWSER_EXTENSION_BOOKMARKS_FOUND: 9001,
                BROWSER_EXTENSION_BOOKMARKS_CREATE_SUCCESS: 9002
              },
              ViewTypes: {
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
              ElementTypes: { BOARD_COVER: 36, CREATE_BUTTON: 44, PIN_SAVE_BUTTON: 48, SECTION_COVER: 11854, VISIT_BUTTON: 12796 },
              AppTypes: { BROWSER_EXTENSION: 8 },
              BrowserTypes: { OTHER: 0, CHROME: 1, SAFARI: 2, IE: 3, FIREFOX: 4, OPERA: 5, EDGE: 7 }
            },
            server: { domain: ".pinterest.com", api: "api", www: "www", trk: "trk" },
            pattern: {
              api: /^https?:\/\/api\.pinterest\.com\//,
              trk: /^https?:\/\/trk\.pinterest\.com\//,
              pinmarklet: /^https?:\/\/assets\.pinterest\.com\/js\/pinmarklet\.js/,
              pinterestDomain:
                /^https?:\/\/(([a-z]{1,3}|latest)\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\//,
              alwaysConvertToData: [/\.cdninstagram\.com/]
            }
          },
          t = {
            choosePinMultiSelectHeader: "Save an idea to Pinterest",
            choosePinSelectAllSubHeader: "Select up to twenty images",
            nextAction: "Next",
            selectAll: "Select all",
            noPinDomain: "Sorry, pinning is not allowed from this domain. Please contact the site operator if you have any questions.",
            boardPickerOpenerLabel: "Save to board",
            boardPickerSuccessLabel: "Saved to",
            visitButton: "Visit",
            help: "Help",
            msgOops: "Oops!",
            msgPinFail: "Could not save this page",
            chooseBoard: "Choose board",
            saveAction: "Save",
            topChoices: "Top choices",
            allBoards: "All boards",
            createBoard: "Create board",
            addFormSecretLabel: "Secret",
            chooseSection: "Choose section",
            addSection: "Add Section",
            optYes: "Yes",
            optNo: "No",
            closeAddForm: "Cancel",
            submitAddForm: "Create",
            msgBoardFail: "Could not create new board",
            msgLoginFail: "Sorry, something's not quite right here. Please check that you are logged into Pinterest and try again.",
            msgHelp: "Get Help",
            authHelpHead: "Psst!",
            authHelpBody: "Looks like you're not signed in to Pinterest. Let's fix that!",
            signIn: "Sign in"
          },
          s = {
            debug: !1,
            remoteAssetPath: "https://assets.pinterest.com/ext/",
            me: "background",
            forbiddenQueryKey: [/password/gi],
            browserTest: [
              { k: "ff", r: / Firefox\// },
              { k: "op", r: / OPR\// },
              { k: "ms", r: / Edg\// },
              { k: "cr", r: / Chrome\// }
            ],
            ttl: { userInfo: 10 * 60 * 1e3 },
            ua: "Pinterest for BrowserExtension",
            theOtherList: [
              "05ae1d0135c1",
              "0c4e6e46540b",
              "129e2089d8b8",
              "15c442d8f57b",
              "1b551d2f2233",
              "3bb3293aa4f9",
              "592bd1529ad2",
              "5cd69c1c51a8",
              "67fa18caa358",
              "6c62158de5d4",
              "7da2f8f258db",
              "9af245e8c2d5",
              "9d5cb16066e3",
              "a20c46b653b0",
              "b7c70898d90f",
              "d095fd7b7ac1",
              "d2944127ec33",
              "e42128ea2bf8",
              "e43ff7b11415",
              "efa3a2deb839",
              "faf820a6e7ba",
              "ff33e73a21b1"
            ],
            limit: { dataUrlWidth: 1e3 },
            inject: { logic: "/v5/js/logic.js", pinmarklet: "/v5/js/pinmarklet.js" },
            digits: "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz",
            ctrl: e,
            translateThese: t
          },
          r = {
            boards: {},
            endpoint: {},
            experimentGroup: {},
            enabledExperimentGroups: {},
            hashList: [],
            puid: "",
            context: { eventBatch: [], user: {}, userId: "", unauthId: "" },
            sessionStart: Date.now(),
            userInfo: {},
            timestamp: { boardsAndSections: 0, experiments: 0 }
          },
          o = chrome || o;
        function p() {
          (s.installObj = {}),
            (chrome || {}).runtime
              ? chrome.runtime.onInstalled.addListener((n) => {
                  s.installObj = n;
                })
              : (o || {}).runtime &&
                o.runtime.onInstalled.addListener((n) => {
                  s.installObj = n;
                });
        }
        function a(n, c = 0) {
          n && r.debug && (typeof r.debug == "number" ? c >= r.debug && console.log(n) : console.log(n));
        }
        function d(n) {
          return Ie(this, null, function* () {
            function c() {
              return Ie(this, null, function* () {
                let i = new Headers();
                i.append("Accept-Language", navigator.language),
                  i.append("X-Pinterest-App-Type-Detailed", "8"),
                  i.append("charset", "UTF-8"),
                  (r.ctrl || {}).clientId && i.append("X-Client-ID", r.ctrl.clientId),
                  n.auth &&
                    n.xRequestForgeryToken &&
                    (a("Setting X-Request-Forgery-Token to " + n.xRequestForgeryToken),
                    i.append("X-Request-Forgery-Token", n.xRequestForgeryToken));
                let u = { method: n.method || "GET", headers: i, responseType: n.responseType || "json" };
                n.formData && (u.body = n.formData);
                let g = new Request(n.url, u);
                a(`Fecthing: ${n.url}`), a(`headers ${String(i)}`);
                const h = yield fetch(g);
                if (h.status === 200) {
                  const x = { response: yield h.json() };
                  return n.key && (x.key = n.key), x;
                } else return { response: { status: "fail", error: "API Error" } };
              });
            }
            try {
              const i = yield c();
              return n.url.match("api.") && (a("An API request has loaded", 1), a(n.url, 1), a(i, 1)), i;
            } catch (i) {
              return i;
            }
          });
        }
        function l(n) {
          return (n.response || {}).status !== "success";
        }
        function m(n, c) {
          c || (c = () => {}), o.storage.local.set(n, c), a("Local storage was updated"), a(n);
        }
        function w(n) {
          const i = [];
          function u(h) {
            d({ auth: !0, xRequestForgeryToken: h.xRequestForgeryToken, url: `${r.endpoint.api}board/${h.board}/sections/all/` }).then(
              (x) => {
                l(x) ||
                  (x.response.data.sort((B, L) => (B.title > L.title ? 1 : -1)),
                  i.filter((B) => {
                    B.id === h.board && (B.sections = x.response.data);
                  }),
                  m({ boards: i }));
              }
            );
          }
          function g(h) {
            let x = "";
            h.bookmark && (x = `&bookmark=${h.bookmark}`),
              d({
                auth: !0,
                xRequestForgeryToken: h.xRequestForgeryToken,
                url: `${r.endpoint.api}users/me/boards/feed/?page_size=250${x}&filter=all&sort=last_pinned_to&add_fields=board.image_cover_url,board.privacy,board.collaborated_by_me,board.section_count`
              }).then((B) => {
                l(B) ||
                  (B.response.data &&
                    (B.response.data.filter((L) => {
                      i.push({
                        id: L.id,
                        image_cover_url: L.image_cover_url || L.image_thumbnail_url,
                        name: L.name,
                        privacy: L.privacy,
                        is_collaborative: L.is_collaborative,
                        section_count: L.section_count
                      }),
                        L.section_count && u(Me(Ue({}, h), { board: L.id }));
                    }),
                    m({ boards: i })),
                  B.response.bookmark
                    ? (a("Getting next page of boards"), g(Me(Ue({}, h), { bookmark: B.response.bookmark })))
                    : ((r.timestamp.boardsAndSections = Date.now()), a("Done loading boards; sections may still be coming."), a(i)));
              });
          }
          n.xRequestForgeryToken && g({ xRequestForgeryToken: n.xRequestForgeryToken });
        }
        function k(n) {
          return new Promise((c) => {
            const i = [
              "user.ads_customize_from_conversion",
              "user.country",
              "user.last_pin_save_time",
              "user.personalize_from_offsite_browsing"
            ];
            d({ url: `${r.endpoint.api}users/me/?add_fields=${i.join(",")}` }).then((u) => {
              var g, h;
              const x = (g = u == null ? void 0 : u.response) == null ? void 0 : g.data;
              if (x) {
                (r.userInfo = { id: x.id, canHazMeasurement: !1, lastPinSaveTime: Date.parse(x.last_pin_save_time || 0) }),
                  (r.timestamp.userInfo = Date.now()),
                  (r.experimentGroup = {}),
                  Object.keys(x.gatekeeper_experiments)
                    .filter((ye) => ye.startsWith("browser_extension"))
                    .forEach((ye) => {
                      r.experimentGroup[ye] = { group: x.gatekeeper_experiments[ye].group, activated: !1 };
                    });
                const B = "browser_extension_measurement_decider",
                  L = (h = r.experimentGroup[B]) == null ? void 0 : h.group;
                (L === "enabled" || L === "employees") &&
                  !"AT BE BG CY CZ DE DK EE ES FI FR GB GR HR HU IE IS IT LI LT LU lV MT NL NO PL PT RO SE SI SK UK".match(x.country) &&
                  x.ads_customize_from_conversion &&
                  x.personalize_from_offsite_browsing &&
                  (r.userInfo.canHazMeasurement = !0),
                  a(`Okay to assist with conversion tracking? ${r.userInfo.canHazMeasurement}`),
                  m({ userInfo: r.userInfo }),
                  m({ experimentGroup: r.experimentGroup }),
                  w({ xRequestForgeryToken: n.xRequestForgeryToken }),
                  c(!0);
              }
            });
          });
        }
        function N(n) {
          const c = (u) => {
            let g,
              h = new DataView(u),
              x = [];
            for (g = 0; g < h.byteLength; g = g + 4) x.push(("00000000" + h.getUint32(g).toString(16)).slice(-8));
            return x.join("");
          };
          let i = new TextEncoder("utf-8").encode(n.str);
          return crypto.subtle.digest(n.method, i).then((u) => ({ digest: c(u), input: n.str }));
        }
        function A(n) {
          o.storage.local.remove(n), a("Local storage was updated"), a(n);
        }
        function f() {
          const n = (i, u) => {
              i.auth && i.sess
                ? (a("Hashing _pinterest_sess for xRequestForgeryToken"),
                  N({ str: i.sess.replace(/(^")|("$)/g, ""), method: "SHA-512" }).then((g) => {
                    a(
                      `xRequestForgeryToken is:
` + g.digest
                    ),
                      (i.change = !1),
                      g.digest !== r.lastToken
                        ? ((i.change = !0),
                          a("User change detected, zeroing out some globals"),
                          (r.timestamp.userInfo = 0),
                          (r.lastToken = g.digest),
                          k({ xRequestForgeryToken: g.digest }).then((h) => {
                            a("New user info"), a(r.userInfo);
                          }))
                        : Date.now() - (r.timestamp.userInfo || 0) > s.ttl.userInfo &&
                          (a("User info is stale"),
                          k({ xRequestForgeryToken: g.digest }).then((h) => {
                            a("Refreshed user info"), a(r.userInfo);
                          })),
                      delete i.sess,
                      (i.xRequestForgeryToken = g.digest),
                      u(i);
                  }))
                : (a("User is not authenticated"),
                  (r.lastToken = ""),
                  (r.userInfo = {}),
                  A("userInfo"),
                  (r.experimentGroup = {}),
                  A("experimentGroup"),
                  A("boards"),
                  u(i));
            },
            c = (i) => {
              const u = { auth: !1, timeCheck: 0 };
              return (
                i._auth &&
                  ((u.timeCheck = i._auth.expirationDate || 0),
                  i._auth.value === "1" && (i._pinterest_sess || {}).value && ((u.auth = !0), (u.sess = i._pinterest_sess.value))),
                u
              );
            };
          return new Promise((i) => {
            o.cookies.getAll({ domain: `${r.ctrl.server.domain}` }, (u) => {
              const g = {
                  _auth: { domain: `${r.ctrl.server.domain}`, value: null },
                  _pinterest_sess: { domain: `${r.ctrl.server.domain}`, value: null }
                },
                h = Object.assign({}, g);
              for (let x of u)
                h[x.name] && x.domain === h[x.name].domain && ((h[x.name].value = x.value), (h[x.name].expirationDate = x.expirationDate));
              n(c(h), (x) => {
                i(x);
              });
            });
          });
        }
        function T(n) {
          n.callback &&
            o.tabs.query({ active: !0, currentWindow: !0 }, (c) => {
              ((o.runtime.lastError || {}).message || "").match("Tabs cannot be queried right now")
                ? (a("Tab query error encountered; trying again in just a moment."), window.setTimeout(() => T(n), 100))
                : (a("Tab query success."),
                  ((c || {})[0] || {}).url
                    ? n.callback(c[0])
                    : a(
                        "Tab or window switch detected but no tabs came back from query; this tab may contain an URL that won't run our logic."
                      ));
            });
        }
        function b(n) {
          a("Request to send message to logic script received."),
            a(n),
            (n.experimentGroup = r.experimentGroup),
            T({
              callback: (c) => {
                c.url.match(/^https?:\/\//)
                  ? (a("Active tab has a valid URL: " + c.url), (n.tabId = c.id), o.tabs.sendMessage(c.id, n))
                  : (a("Could not send message to active tab; we need http protocol."), a(c.url));
              }
            });
        }
        function D() {
          f().then((n) => {
            r.debug && (n.auth ? o.action.setBadgeBackgroundColor({ color: "red" }) : o.action.setBadgeBackgroundColor({ color: "black" })),
              b({ to: "logic", act: "pongLogin", data: { auth: n.auth } });
          });
        }
        function V() {
          if (!r.context.eventBatch.length) return;
          const n = { url: `${r.endpoint.trk}callback/event/`, formData: new FormData(), method: "POST" };
          n.formData.append("isJSONData", !0),
            n.formData.append("event_batch_json", JSON.stringify({ reportTime: Date.now() * 1e6, events: r.context.eventBatch })),
            a("Preparing to sending context log global.context.eventBatch."),
            a(n),
            (r.context.eventBatch = []),
            d(n);
        }
        function J() {
          let n = r.context.eventBatch,
            c = n.length,
            i = r.ctrl.ctx.flushTypes,
            u = r.ctrl.ctx.flushConstants.numEvents,
            g = !1;
          return (
            c &&
              (c > u && (g = !0),
              Date.now() * 1e6 - n[c - 1].time > r.ctrl.ctx.flushConstants.timeoutNanoseconds && (g = !0),
              (i["" + n[0].eventType] || i["" + (n[0].context || {}).viewType]) && (g = !0)),
            g
          );
        }
        function $() {
          return [1e7, 1e3, 4e3, 8e3, 1e11]
            .join("")
            .replace(/[018]/g, (n) => (n ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (n / 4)))).toString(16));
        }
        function ce(n) {
          let c = !1,
            i = !1;
          n.eventType === r.ctrl.ctx.EventTypes.VIEW &&
            (n.context || {}).viewType === r.ctrl.ctx.ViewTypes.HOVER_BOARD_OPENER &&
            typeof (n.auxData || {}).url == "string" &&
            r.context.eventBatch.filter((u) => {
              (u.auxData || {}).url === n.auxData.url && (c = !0);
            }),
            c
              ? a("Discarding a duplicate event")
              : (r.context.eventBatch.unshift(n),
                r.context.lastKnownUserId
                  ? n.userId
                    ? n.userId !== r.context.lastKnownUserId && ((r.context.lastKnownUserId = n.userId), (i = !0))
                    : ((r.context.lastKnownUserId = ""), (i = !0))
                  : n.userId && ((r.context.lastKnownUserId = n.userId), (r.context.unauthId = $()), (i = !0)),
                i || J()
                  ? (a(`Flushing event queue.  Batch size: ${r.context.eventBatch.length}`), V())
                  : a(`Adding event to batch. New length:  ${r.context.eventBatch.length}`),
                a(r.context.eventBatch));
        }
        function y(n) {
          if ((a("A context log event has been requested."), a(n), n.eventType === void 0))
            return a("Context logging requires an eventType"), !1;
          const c = r.ctrl.ctx.EventTypes[n.eventType],
            i = r.ctrl.ctx.ViewTypes[n.viewType],
            u = r.ctrl.ctx.ElementTypes[n.element];
          if (!c) return a("Context logging requires an eventType listed in ctrl.ctx.EventTypes"), a(n), !1;
          if (n.eventType === "VIEW" && !i) return a("A view requires a viewType listed in ctrl.ctx.ViewTypes"), a(n), !1;
          if (n.eventType === "CLICK" && !u) return a("A click requires an element listed in ctrl.ctx.ElementTypes"), a(n), !1;
          const g = {
            eventType: c,
            time: Date.now() * 1e6,
            app: r.ctrl.ctx.AppTypes.BROWSER_EXTENSION,
            appVersion: r.xv,
            browser: r.browserType
          };
          if (i || u) {
            const h = {};
            Object.assign(h, !!i && { viewType: i }, !!u && { element: u }), (g.context = h);
          }
          n.objectIdStr && (g.objectIdStr = n.objectIdStr),
            n.auxData && n.auxData.constructor === Object && (g.auxData = n.auxData),
            r.context.unauthId || (a(`No unauthId found; creating one. ${r.context.unauthId}`), (r.context.unauthId = $())),
            f().then((h) => {
              h.auth ? (g.userId = r.userInfo.id) : (g.unauthId = r.context.unauthId), ce(g);
            });
        }
        function ne() {
          a("Creating welcome note"),
            o.tabs.create({ url: `https://${r.ctrl.server.www}${r.ctrl.server.domain}${r.ctrl.path.welcome}?xv=${r.xv}` }),
            m({ beenWelcomed: r.sessionStart });
        }
        function Pe() {
          if ((s.installObj || {}).reason)
            switch (s.installObj.reason) {
              case "install":
                y({ eventType: "INSTALL" }), ne();
                break;
              case "update":
                r.xv &&
                  o.runtime.getManifest().version === r.ctrl.updatePage.version &&
                  r.ctrl.updatePage.show &&
                  o.tabs.create({
                    url: `https://${r.ctrl.server.www}${r.ctrl.server.domain}${r.ctrl.updatePage.path}?xv=${r.xv}`,
                    active: r.ctrl.updatePage.focus
                  });
                break;
            }
        }
        function se(n) {
          n.menus && o.contextMenus.removeAll(),
            n.button &&
              o.action
                .setIcon({ path: "/icons/disabled/icon_toolbar.png" })
                .then(() => a("Icon set"))
                .catch(() => a("Error while setting icon"));
        }
        function ue() {
          a("Tab switch detected."),
            T({
              callback: (n) => {
                n.url.match(/^https?:\/\//)
                  ? n.url.match(r.ctrl.pattern.pinterestDomain)
                    ? (a("On a known Pinterest app domain; no need to refresh context; disabling pinning features."),
                      se({ menus: !0, button: !0 }))
                    : o.tabs.sendMessage(n.id, { to: "logic", act: "refreshContext" })
                  : (a("Focus changed to a non-http tab or non-browser window; disabling pinning features."),
                    se({ menus: !0, button: !0 }));
              }
            }),
            r.userInfo.id && r.userInfo.canHazMeasurement
              ? o.declarativeNetRequest.updateSessionRules({
                  removeRuleIds: [1002],
                  addRules: [
                    {
                      id: 1002,
                      priority: 1,
                      action: {
                        type: "redirect",
                        redirect: { transform: { queryTransform: { addOrReplaceParams: [{ key: "beuid", value: r.userInfo.id }] } } }
                      },
                      condition: { urlFilter: "*://ct.pinterest.com/*" }
                    }
                  ]
                })
              : o.declarativeNetRequest.updateSessionRules({ removeRuleIds: [1002] });
        }
        function je(n) {
          return Ie(this, null, function* () {
            a(`Attempting to activate ${n}`);
            const c = yield f();
            if (!c.auth && !c.xRequestForgeryToken) return !1;
            const i = new FormData();
            i.append("experiment_data", JSON.stringify({ key: n }));
            const u = yield d({
              auth: !0,
              formData: i,
              method: "PUT",
              url: `${r.endpoint.api}gatekeeper/activate/`,
              xRequestForgeryToken: c.xRequestForgeryToken
            });
            return l(u) ? (a(`Activation check for ${n} failed!`), !1) : (a(`Experiment Activation response for ${n}`), a(u), u);
          });
        }
        function Tr(n) {
          return Ie(this, null, function* () {
            if (!(n in r.experimentGroup) || !r.experimentGroup[n].activated) {
              const u = ((((yield je(n)) || {}).response || {}).data || {}).group;
              a(`Activated experimental group ${u} for experiment ${n}`), (r.experimentGroup[n] = { group: u, activated: !0 });
            }
            return (((r.override || {}).exp || {})[n] || {}).group || r.experimentGroup[n].group;
          });
        }
        function Or(n) {
          a("Injecting logic into tab " + n.tabId), o.scripting.executeScript({ target: { tabId: n.tabId }, files: [s.inject.logic] });
        }
        function Sr() {
          b({ to: "logic", act: "closeGrid" });
        }
        function Ir(n) {
          a("Populate Grid"),
            f().then((c) => {
              (n.data.auth = c.auth),
                (n.data.hideSearch = r.hideSearch),
                (n.data.funnel_uuid = $()),
                (n.data.funnel_url = n.data.url),
                y({ eventType: "SAVE_BROWSER_PIN_IMAGES_FOUND", auxData: { url: n.data.funnel_url, funnel_uuid: n.data.funnel_uuid } }),
                b({ to: "save", act: "renderPinmarkletData", data: n.data });
            });
        }
        function Pr(n) {
          const c = { nohover: !1, nopin: !1 },
            i = n.domain.split(".").reverse();
          let u = i[0];
          for (let g = 1; g < i.length; g = g + 1)
            (u = i[g] + "." + u),
              N({ str: u, method: "SHA-1" }).then((h) => {
                s.theOtherList.filter((x) => {
                  h.digest.match(x) && (a("No-pin list match on " + u + "; pin and hover disabled"), (c.nopin = c.nohover = !0));
                }),
                  r.hashList.filter((x) => {
                    h.digest.match(x) && (a("No-hover list match on " + u + "; hover disabled"), (c.nohover = !0));
                  });
              });
          b({ to: "logic", act: "renderFeatureBlock", data: c });
        }
        function yr(n) {
          if ((J() && V(), se({ menus: !0 }), n.data.nopin)) se({ button: !0 }), a("data.nopin encountered; no context menus for you!");
          else {
            a("no data.nopin encountered; making context menus"),
              o.action
                .setIcon({ path: "/icons/icon_toolbar.png" })
                .then(() => a("Toolbar icon set"))
                .catch(() => a("Error while setting the Toolbar Icon")),
              o.contextMenus.removeAll();
            try {
              o.contextMenus.create({ id: "rightClickToPin", title: o.i18n.getMessage("saveAction"), contexts: ["image"] }, () => {
                o.contextMenus.onClicked.addListener((c) => {
                  b({ to: "logic", act: "contextSave" });
                });
              }),
                r.hideSearch
                  ? a("Login NOT found; no Search menu for you.")
                  : (a("You get the Search context menu."),
                    o.contextMenus.create(
                      {
                        id: "search",
                        title: o.i18n.getMessage("searchAction"),
                        contexts: ["page", "frame", "selection", "editable", "video", "audio"]
                      },
                      () => {
                        a("Adding search click event listener"),
                          o.contextMenus.onClicked.addListener(() => {
                            b({ to: "logic", act: "openSearch", data: { method: "r" } });
                          });
                      }
                    )),
                a("context menu create success.");
            } catch (c) {
              a("context menu create FAIL."), a(c);
            }
          }
        }
        function Rr(n) {
          a("Injecting pinmarklet into tab " + n.tabId),
            o.scripting.executeScript({ target: { tabId: n.tabId }, files: [s.inject.pinmarklet] });
        }
        function Cr() {
          b({ to: "logic", act: "closeSave" });
        }
        function wr() {
          b({ to: "logic", act: "closeSave" }), o.tabs.create({ url: `https://${r.ctrl.server.www}${r.ctrl.server.domain}/login/` });
        }
        function kr(n) {
          f().then((c) => {
            if (c.auth && c.xRequestForgeryToken) {
              const i = { auth: !0, xRequestForgeryToken: c.xRequestForgeryToken, method: "PUT", url: r.endpoint.api + "boards/?" };
              n.data.name &&
                ((i.url = i.url + "name=" + encodeURIComponent(n.data.name)),
                n.data.secret && (i.url = i.url + "&privacy=secret"),
                d(i).then((u) => {
                  if ((a("Board create results"), a(u), (u.response || {}).status === "success")) {
                    const g = u.response.data;
                    b({ to: n.replyTo, act: "newBoardWin", data: g }),
                      y({ objectIdStr: g.id, eventType: "BOARD_CREATE" }),
                      o.storage.local.get("boards", (h) => {
                        h.boards.unshift({
                          id: g.id,
                          image_cover_url: g.image_cover_url || g.image_thumbnail_url,
                          name: g.name,
                          privacy: g.privacy,
                          is_collaborative: !1,
                          section_count: 0,
                          orderModified: Date.now()
                        }),
                          m({ boards: h.boards });
                      });
                  } else b({ to: n.replyTo, act: "newBoardFail", data: u.response });
                }));
            } else b({ to: n.replyTo, act: "newBoardFail", data: { message: r.msg.msgOops, message_detail: r.msg.msgLoginFail } });
          });
        }
        function Nr(n) {
          f().then((c) => {
            if (c.auth && c.xRequestForgeryToken) {
              const i = {
                auth: !0,
                xRequestForgeryToken: c.xRequestForgeryToken,
                method: "PUT",
                url: `${r.endpoint.api}board/${n.data.board}/sections/?`
              };
              n.data.title &&
                n.data.board &&
                ((i.url = i.url + "title=" + encodeURIComponent(n.data.title)),
                d(i).then((u) => {
                  a("Section create results"),
                    a(u),
                    (u.response || {}).status === "success"
                      ? (b({ to: n.replyTo, act: "newSectionWin", data: u.response.data }),
                        o.storage.local.get("boards", (g) => {
                          let h = !1;
                          g.boards.filter((x) => {
                            x.id === n.data.board &&
                              ((h = !0),
                              x.sections || (x.sections = []),
                              x.sections.push({ id: u.response.data.id, title: n.data.title }),
                              x.sections.sort((B, L) => (B.title > L.title ? 1 : -1)),
                              (x.orderModified = 0));
                          }),
                            h && m({ boards: g.boards });
                        }))
                      : b({ to: n.replyTo, act: "newSectionFail", data: u.response });
                }));
            } else b({ to: n.replyTo, act: "newSectionFail", data: { message: r.msg.msgOops, message_detail: r.msg.msgLoginFail } });
          });
        }
        function Dr(n) {
          n.boards && n.boards.length > 0 && b({ to: "logic", act: "openSave", data: n });
        }
        function Fr(n) {
          setTimeout(function () {
            b({ to: "save", act: "renderStructure", data: n.data });
          }, 10);
        }
        function Br(n) {
          o.tabs.captureVisibleTab((c) => {
            a("screen captured"), b({ to: "save", act: "renderSearch", data: Me(Ue({}, n.data), { method: "r", searchMe: c }) });
          });
        }
        function Lr(n) {
          let c;
          n.split(",")[0].indexOf("base64") >= 0 ? (c = atob(n.split(",")[1])) : (c = unescape(n.split(",")[1]));
          const i = n.split(",")[0].split(":")[1].split(";")[0],
            u = new Uint8Array(c.length);
          for (let g = 0; g < c.length; g++) u[g] = c.charCodeAt(g);
          return new Blob([u], { type: i });
        }
        function Ur(n) {
          const c = "save";
          ((u) => {
            const g = { method: "PUT", url: `${r.endpoint.api}visual_search/extension/image/`, formData: new FormData() };
            g.formData.append("x", u.data.x || 0),
              g.formData.append("y", u.data.y || 0),
              g.formData.append("h", u.data.h || 1),
              g.formData.append("w", u.data.w || 1),
              g.formData.append("client_id=", r.ctrl.clientId),
              g.formData.append("base_scheme", "https"),
              g.formData.append("add_fields", "pin.pinner(),pin.rich_summary,pin.dominant_color,pin.board()"),
              g.formData.append("image", Lr(u.data.img)),
              r.puid && g.formData.append("viewing_user_id", r.puid),
              d(g).then((h) => {
                (h.response || {}).status
                  ? (a("Search API call succeeded."),
                    ((h.response || {}).data || {}).length
                      ? ((r.userInfo || {}).id && (h.response.auth = !0), b({ to: c, act: "showResults", data: h.response }))
                      : (b({ to: c, act: "searchFail", data: "Search API call had no results." }), a("Search API call had no results.")))
                  : (b({ to: c, act: "searchFail", data: "Search API call failed." }), a("Search API call failed."));
              });
          })(n);
        }
        function Mr(n) {
          f().then((c) => {
            if ((a("Auth State to save "), a(c), c.auth && c.xRequestForgeryToken)) {
              a("Parsing Pins to be saved"), a(n.data.pins);
              for (let i of n.data.pins) {
                a("Pin being parsed"), a(i);
                const u = {
                  auth: !0,
                  xRequestForgeryToken: c.xRequestForgeryToken,
                  url: `${r.endpoint.api}pins/`,
                  formData: new FormData(),
                  method: "PUT"
                };
                u.formData.append("method", "extension"),
                  u.formData.append("add_fields", "user.is_partner"),
                  u.formData.append("description", (i.description || "").substr(0, 500)),
                  u.formData.append("board_id", n.data.board),
                  n.data.section && u.formData.append("section", n.data.section),
                  i.meta && typeof i.meta == "object" && u.formData.append("found_metadata", JSON.stringify(i.meta)),
                  i.id
                    ? ((u.url = u.url + `${i.id}/repin/`), (u.method = "POST"))
                    : (u.formData.append("source_url", i.url),
                      i.media
                        ? (a("Image resized?"),
                          a(i.imageConverted.dataURI),
                          i.imageConverted.dataURI && ((i.convertedFromUrl = i.media), (i.media = i.imageConverted.dataURI)),
                          i.media.match(/^data/)
                            ? (u.formData.append("image_base64", i.media),
                              i.convertedFromUrl && u.formData.append("image_url", i.convertedFromUrl))
                            : u.formData.append("image_url", i.media))
                        : (u.formData.append("isGeneratedTextImage", "true"), i.color && u.formData.append("color", i.color)));
                const g = { funnel_uuid: i.funnel_uuid, domain_url: i.funnel_url || i.url };
                g.domain_url && (g.domain_url.match(/^https?:\/\//) ? (g.domain_url = g.domain_url.split("/")[2]) : delete g.domain_url),
                  a("Save Object"),
                  a(u.formData),
                  d(u).then((h) => {
                    a("Save results"),
                      a(h.response),
                      (h.response || {}).status === "success"
                        ? (a("Pin saved."),
                          o.storage.local.get("boards", (x) => {
                            let B = 0;
                            a(`Looking for board id ${n.data.board}`),
                              x.boards.filter((L, lt) => {
                                L.id === n.data.board && (B = lt), a("Found saved board index");
                              }),
                              B &&
                                (a("Saved board index is greater than zero, shifting and saving boards back to local storage"),
                                x.boards.unshift(x.boards.splice(B, 1)[0]),
                                m({ boards: x.boards }));
                          }),
                          (r.userInfo.lastPinSaveTime = Date.now()),
                          m({ userInfo: r.userInfo }),
                          a("Response json"),
                          a(h.response.data),
                          (h.response.data.title = n.data.sectionName),
                          y({ eventType: "USER_ACTIVE", viewType: "BROWSER_EXTENSION_DAU" }),
                          y({ objectIdStr: h.response.data.id, eventType: "PIN_CREATE", auxData: g }),
                          b({ to: n.replyTo, act: "newPinWin", data: h.response.data, pin: i, total: n.data.pins.length }))
                        : (a("Pin failed."),
                          y({ eventType: "PIN_CREATE_FAILURE", auxData: g }),
                          b({ to: n.replyTo, act: "newPinFail", data: h.response }));
                  });
              }
            } else b({ to: n.replyTo, act: "newPinFail", data: { msg: r.msg.msgOops, message_detail: r.msg.msgLoginFail } });
          });
        }
        function jr(n) {
          a("Attempting to activate an experiment"),
            a(n),
            n.experimentName
              ? Tr(n.experimentName).then((c) => {
                  if ((a(`Found group ${c} for experiment ${n.experimentName}.`), n.callback)) {
                    a(`returning to ${n.callback} in ${n.via}.`);
                    const i = { to: n.via, act: n.callback, group: c };
                    n.data && (i.data = n.data), b(i);
                  } else a("Activation attempted without callback");
                })
              : (a("Could not activate; need experiment name"), a(n));
        }
        function Hr(n) {
          y(n.data);
        }
        const it = {
          injectLogic: Or,
          closeGrid: Sr,
          populateGrid: Ir,
          checkFeatureBlock: Pr,
          injectPinmarklet: Rr,
          refreshContextMenus: yr,
          closeSave: Cr,
          getAuthHelp: wr,
          newBoard: kr,
          newSection: Nr,
          openSave: Dr,
          populateSave: Fr,
          populateSearch: Br,
          runSearch: Ur,
          save: Mr,
          activate: jr,
          contextLog: Hr,
          login: D
        };
        function Vr() {
          o.runtime.onMessage.addListener((n, c) => {
            n.to === s.me &&
              (a("Message received"),
              a(n),
              n.act && typeof it[n.act] == "function"
                ? (((c || {}).tab || {}).id && (n.tabId = c.tab.id), it[n.act](n))
                : a("No handler found for " + n.act, 1));
          });
        }
        function qr() {
          let n = !1;
          (r.xv = "xx" + o.runtime.getManifest().version),
            (r.browserType = r.ctrl.ctx.BrowserTypes.OTHER),
            s.browserTest.filter((i) => {
              if (!n && navigator.userAgent.match(i.r))
                switch (((r.xv = i.k + o.runtime.getManifest().version), (n = !0), i.k)) {
                  case "ff":
                    r.browserType = r.ctrl.ctx.BrowserTypes.FIREFOX;
                    break;
                  case "ms":
                    r.browserType = r.ctrl.ctx.BrowserTypes.EDGE;
                    break;
                  case "op":
                    r.browserType = r.ctrl.ctx.BrowserTypes.OPERA;
                    break;
                  case "cr":
                    r.browserType = r.ctrl.ctx.BrowserTypes.CHROME;
                    break;
                }
            }),
            m({ xv: r.xv }),
            (r.endpoint.api = `https://${r.ctrl.server.api}${r.ctrl.server.domain}/v3/`),
            (r.endpoint.trk = `https://${r.ctrl.server.trk}${r.ctrl.server.domain}/v3/`),
            m({ debug: s.debug }),
            Pe();
          const c = `https://${r.ctrl.server.www}${r.ctrl.server.domain}/_/_/about/browser-button/uninstall/?xv=${r.xv}`;
          o.runtime.setUninstallURL(c),
            a("setting uninstall URL to " + c),
            a("Listening Messages"),
            Vr(),
            o.action.onClicked.addListener(() => {
              b({ to: "logic", act: "openImagePicker" });
            }),
            r.debug && o.action.setBadgeText({ text: o.runtime.getManifest().version.replace(/\./g, "") }),
            o.tabs.onActivated.addListener(() => {
              ue();
            }),
            o.windows.onFocusChanged.addListener(() => {
              ue();
            }),
            D(),
            d({ url: o.runtime.getURL("./v5/data/hashList.json") }).then((i) => {
              (r.hashList = i.response), a(`hashList loaded; ${r.hashList.length} items found`);
            });
        }
        function Gr() {
          r.msg = {};
          for (const n in s.translateThese) r.msg[n] = o.i18n.getMessage(n);
          a("Messages retrieved from i18n:"),
            a(r.msg),
            m({ msg: r.msg }),
            (r.debug = s.debug),
            m({ debug: s.debug }),
            (r.ctrl = s.ctrl),
            m({ ctrl: s.ctrl }),
            qr();
        }
        p(),
          o.storage.local.get(null, (n) => {
            for (let c in n) r[c] = n[c];
            r.msg && (r.msg = r.msg[s.me]),
              r.override &&
                console.log(`You have global overrides set thusly:

${JSON.stringify(r.override, null, 2)}

Run this:

chrome.storage.local.remove("override");

... to remove.`),
              Gr();
          });
      }
      var br = (e, t, s) =>
        new Promise((r, o) => {
          var p = (l) => {
              try {
                d(s.next(l));
              } catch (m) {
                o(m);
              }
            },
            a = (l) => {
              try {
                d(s.throw(l));
              } catch (m) {
                o(m);
              }
            },
            d = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(p, a));
          d((s = s.apply(e, t)).next());
        });
      function xr() {
        return br(this, null, function* () {
          const e = yield Be(),
            t = (e == null ? void 0 : e.group) || "control",
            s = (t == null ? void 0 : t.startsWith("enabled")) || (t == null ? void 0 : t.startsWith("employees"));
          s
            ? (X.CHROME === "chrome" && (yield Fe()),
              yield Y(),
              I.action.onClicked.addListener(ur),
              I.runtime.onMessage.addListener(dr),
              I.tabs.onActivated.addListener(() => {
                st();
              }),
              I.windows.onFocusChanged.addListener(() => {
                st();
              }),
              pr())
            : vr();
          const r = {
            contentScript: s
              ? { id: `content-script-v6-${Q()}`, js: ["contentScript.js"], matches: ["*://*/*"], allFrames: !1 }
              : { id: `content-script-v5-${Q()}`, js: ["/v5/js/content.js"], matches: ["*://*/*"], allFrames: !0 }
          };
          yield I.scripting.unregisterContentScripts(), yield I.scripting.registerContentScripts([r.contentScript]);
        });
      }
      xr(), Bt();
    })();
  })();
})();
