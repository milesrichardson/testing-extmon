(() => {
  var Qi = Object.defineProperty;
  var cm = Object.getOwnPropertyDescriptor;
  var fm = Object.getOwnPropertyNames;
  var dm = Object.prototype.hasOwnProperty;
  var B = (t, e) => () => (t && (e = t((t = 0))), e);
  var q = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
    H = (t, e) => {
      for (var r in e) Qi(t, r, { get: e[r], enumerable: !0 });
    },
    pm = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let i of fm(e)) !dm.call(t, i) && i !== r && Qi(t, i, { get: () => e[i], enumerable: !(n = cm(e, i)) || n.enumerable });
      return t;
    };
  var S = (t) => pm(Qi({}, "__esModule", { value: !0 }), t);
  var Tl = q((ea, Pl) => {
    (function (t, e) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], e);
      else if (typeof ea < "u") e(Pl);
      else {
        var r = { exports: {} };
        e(r), (t.browser = r.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ea, function (t) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let e = "The message port closed before a response was received.",
          r = (n) => {
            let i = {
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
            if (Object.keys(i).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            class a extends WeakMap {
              constructor(_, P = void 0) {
                super(P), (this.createItem = _);
              }
              get(_) {
                return this.has(_) || this.set(_, this.createItem(_)), super.get(_);
              }
            }
            let o = (m) => m && typeof m == "object" && typeof m.then == "function",
              s =
                (m, _) =>
                (...P) => {
                  n.runtime.lastError
                    ? m.reject(new Error(n.runtime.lastError.message))
                    : _.singleCallbackArg || (P.length <= 1 && _.singleCallbackArg !== !1)
                    ? m.resolve(P[0])
                    : m.resolve(P);
                },
              l = (m) => (m == 1 ? "argument" : "arguments"),
              u = (m, _) =>
                function (T, ...N) {
                  if (N.length < _.minArgs) throw new Error(`Expected at least ${_.minArgs} ${l(_.minArgs)} for ${m}(), got ${N.length}`);
                  if (N.length > _.maxArgs) throw new Error(`Expected at most ${_.maxArgs} ${l(_.maxArgs)} for ${m}(), got ${N.length}`);
                  return new Promise((U, Y) => {
                    if (_.fallbackToNoCallback)
                      try {
                        T[m](...N, s({ resolve: U, reject: Y }, _));
                      } catch (D) {
                        console.warn(
                          `${m} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          D
                        ),
                          T[m](...N),
                          (_.fallbackToNoCallback = !1),
                          (_.noCallback = !0),
                          U();
                      }
                    else _.noCallback ? (T[m](...N), U()) : T[m](...N, s({ resolve: U, reject: Y }, _));
                  });
                },
              f = (m, _, P) =>
                new Proxy(_, {
                  apply(T, N, U) {
                    return P.call(N, m, ...U);
                  }
                }),
              c = Function.call.bind(Object.prototype.hasOwnProperty),
              d = (m, _ = {}, P = {}) => {
                let T = Object.create(null),
                  N = {
                    has(Y, D) {
                      return D in m || D in T;
                    },
                    get(Y, D, X) {
                      if (D in T) return T[D];
                      if (!(D in m)) return;
                      let W = m[D];
                      if (typeof W == "function")
                        if (typeof _[D] == "function") W = f(m, m[D], _[D]);
                        else if (c(P, D)) {
                          let Z = u(D, P[D]);
                          W = f(m, m[D], Z);
                        } else W = W.bind(m);
                      else if (typeof W == "object" && W !== null && (c(_, D) || c(P, D))) W = d(W, _[D], P[D]);
                      else if (c(P, "*")) W = d(W, _[D], P["*"]);
                      else
                        return (
                          Object.defineProperty(T, D, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return m[D];
                            },
                            set(Z) {
                              m[D] = Z;
                            }
                          }),
                          W
                        );
                      return (T[D] = W), W;
                    },
                    set(Y, D, X, W) {
                      return D in T ? (T[D] = X) : (m[D] = X), !0;
                    },
                    defineProperty(Y, D, X) {
                      return Reflect.defineProperty(T, D, X);
                    },
                    deleteProperty(Y, D) {
                      return Reflect.deleteProperty(T, D);
                    }
                  },
                  U = Object.create(m);
                return new Proxy(U, N);
              },
              v = (m) => ({
                addListener(_, P, ...T) {
                  _.addListener(m.get(P), ...T);
                },
                hasListener(_, P) {
                  return _.hasListener(m.get(P));
                },
                removeListener(_, P) {
                  _.removeListener(m.get(P));
                }
              }),
              x = new a((m) =>
                typeof m != "function"
                  ? m
                  : function (P) {
                      let T = d(P, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                      m(T);
                    }
              ),
              A = new a((m) =>
                typeof m != "function"
                  ? m
                  : function (P, T, N) {
                      let U = !1,
                        Y,
                        D = new Promise((re) => {
                          Y = function (Q) {
                            (U = !0), re(Q);
                          };
                        }),
                        X;
                      try {
                        X = m(P, T, Y);
                      } catch (re) {
                        X = Promise.reject(re);
                      }
                      let W = X !== !0 && o(X);
                      if (X !== !0 && !W && !U) return !1;
                      let Z = (re) => {
                        re.then(
                          (Q) => {
                            N(Q);
                          },
                          (Q) => {
                            let at;
                            Q && (Q instanceof Error || typeof Q.message == "string")
                              ? (at = Q.message)
                              : (at = "An unexpected error occurred"),
                              N({ __mozWebExtensionPolyfillReject__: !0, message: at });
                          }
                        ).catch((Q) => {
                          console.error("Failed to send onMessage rejected reply", Q);
                        });
                      };
                      return Z(W ? X : D), !0;
                    }
              ),
              g = ({ reject: m, resolve: _ }, P) => {
                n.runtime.lastError
                  ? n.runtime.lastError.message === e
                    ? _()
                    : m(new Error(n.runtime.lastError.message))
                  : P && P.__mozWebExtensionPolyfillReject__
                  ? m(new Error(P.message))
                  : _(P);
              },
              p = (m, _, P, ...T) => {
                if (T.length < _.minArgs) throw new Error(`Expected at least ${_.minArgs} ${l(_.minArgs)} for ${m}(), got ${T.length}`);
                if (T.length > _.maxArgs) throw new Error(`Expected at most ${_.maxArgs} ${l(_.maxArgs)} for ${m}(), got ${T.length}`);
                return new Promise((N, U) => {
                  let Y = g.bind(null, { resolve: N, reject: U });
                  T.push(Y), P.sendMessage(...T);
                });
              },
              w = {
                devtools: { network: { onRequestFinished: v(x) } },
                runtime: { onMessage: v(A), onMessageExternal: v(A), sendMessage: p.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: p.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
              },
              k = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (i.privacy = { network: { "*": k }, services: { "*": k }, websites: { "*": k } }), d(n, w, i);
          };
        t.exports = r(chrome);
      } else t.exports = globalThis.browser;
    });
  });
  var qt = q((LA, Je) => {
    Je.exports.browser = Tl();
    var Ar;
    typeof browser > "u" && typeof chrome < "u" && chrome.runtime
      ? /\bOPR\//.test(navigator.userAgent)
        ? (Ar = "opera")
        : (Ar = "chrome")
      : /\bEdge\//.test(navigator.userAgent)
      ? (Ar = "edge")
      : (Ar = "firefox"),
      (Je.exports.browserType = Ar),
      typeof Je.exports.browser.action > "u" && (Je.exports.browser.action = Je.exports.browser.browserAction),
      (Je.exports.isBrowser = (...t) => {
        for (let e = 0; e < t.length; e++) if (t[e] == Je.exports.browserType) return !0;
        return !1;
      }),
      (Je.exports.error = (t) => {
        console.groupCollapsed(t.message), t.stack && console.error(t.stack), console.groupEnd();
      });
  });
  var Xe = q((BA, Cl) => {
    var ta = class {
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
      setPost(e, r) {
        typeof e == "string" ? (this.posts[e] = r) : (this.post = e);
      }
      setUseTarget(e) {
        this.useTarget = e;
      }
      setDebugLevel(e) {
        this.debugLevel = e;
      }
      setHook(e) {
        let r = this,
          n = Date.now();
        function i() {
          return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - n;
        }
        e
          ? (this.hook = (a) => {
              a.timestamp = i();
              try {
                e(a);
              } catch (o) {
                r.logger.warn("Hoor error", o);
              }
            })
          : (this.hook = this.nullHook);
      }
      nullHook() {}
      call() {
        let e = this,
          r,
          n,
          i,
          a,
          o = Array.prototype.slice.call(arguments);
        return (
          typeof o[0] == "function" && (r = o.shift()),
          e.useTarget ? ([n, i, ...a] = o) : ([i, ...a] = o),
          new Promise(function (s, l) {
            let u = ++e.replyId;
            e.debugLevel >= 2 && e.logger.info("rpc #" + u, "call =>", i, a),
              e.hook({ type: "call", callee: n, rid: u, method: i, args: a }),
              (e.replies[u] = { resolve: s, reject: l, peer: n });
            let f = r || (e.useTarget && e.posts[n]) || e.post;
            e.useTarget
              ? f(n, { type: "weh#rpc", _request: u, _method: i, _args: [...a] })
              : f({ type: "weh#rpc", _request: u, _method: i, _args: [...a] });
          })
        );
      }
      receive(e, r, n) {
        let i = this;
        if (e._request)
          Promise.resolve()
            .then(() => {
              let a = i.listeners[e._method];
              if (typeof a == "function")
                return (
                  i.debugLevel >= 2 && i.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                  i.hook({ type: "call", caller: n, rid: e._request, method: e._method, args: e._args }),
                  Promise.resolve(a.apply(null, e._args))
                    .then((o) => (i.hook({ type: "reply", caller: n, rid: e._request, result: o }), o))
                    .catch((o) => {
                      throw (i.hook({ type: "reply", caller: n, rid: e._request, error: o.message }), o);
                    })
                );
              throw new Error("Method " + e._method + " is not a function");
            })
            .then((a) => {
              i.debugLevel >= 2 && i.logger.info("rpc #" + e._request, "serve => ", a),
                r({ type: "weh#rpc", _reply: e._request, _result: a });
            })
            .catch((a) => {
              i.debugLevel >= 1 && i.logger.info("rpc #" + e._request, "serve => !", a.message),
                r({ type: "weh#rpc", _reply: e._request, _error: a.message });
            });
        else if (e._reply) {
          let a = i.replies[e._reply];
          delete i.replies[e._reply],
            a
              ? e._error
                ? (i.debugLevel >= 1 && i.logger.info("rpc #" + e._reply, "call <= !", e._error),
                  i.hook({ type: "reply", callee: a.peer, rid: e._reply, error: e._error }),
                  a.reject(new Error(e._error)))
                : (i.debugLevel >= 2 && i.logger.info("rpc #" + e._reply, "call <= ", e._result),
                  i.hook({ type: "reply", callee: a.peer, rid: e._reply, result: e._result }),
                  a.resolve(e._result))
              : i.logger.error("Missing reply handler");
        }
      }
      listen(e) {
        Object.assign(this.listeners, e);
      }
    };
    Cl.exports = new ta();
  });
  var na = q((HA, Fl) => {
    var { browser: ra } = qt(),
      Ml = {},
      Rl = new RegExp("\\$[a-zA-Z]*([0-9]+)\\$", "g"),
      Dl = !1,
      hm = ra.storage.local.get("wehI18nCustom").then((t) => {
        Dl = !0;
        let e = t.wehI18nCustom;
        e && Object.assign(Ml, e);
      });
    function gm(t, e) {
      if ((Dl || console.warn("Using `weh._` before custom strings were loaded:", t), /-/.test(t))) {
        let n = t.replace(/-/g, "_");
        console.warn("Wrong i18n message name. Should it be", n, "instead of", t, "?"), (t = n);
      }
      let r = Ml[t];
      return (
        e && !Array.isArray(e) && (e = [e]),
        r && r.message.length > 0
          ? (r.message || "").replace(Rl, (n) => {
              let i = Rl.exec(n);
              return (i && e && e[parseInt(i[1]) - 1]) || "??";
            })
          : e
          ? ra.i18n.getMessage(t, e)
          : ra.i18n.getMessage(t)
      );
    }
    Fl.exports = { getMessage: gm, custom_strings_ready: hm };
  });
  var Wl = q((zA, jl) => {
    var Sr = qt(),
      mm = Xe(),
      V = Sr.browser,
      _r = {},
      An = {};
    function Nl(t, e) {
      let r = !1;
      return new Promise(function (n, i) {
        return V.tabs.query({}).then(function (a) {
          a.forEach(function (o) {
            o.url === t && (V.tabs.update(o.id, { active: !0 }), V.windows.update(o.windowId, { focused: !0 }), (r = !0));
          }),
            n(r);
        });
      });
    }
    function ym(t, e) {
      return new Promise((r, n) => {
        let i = V.runtime.getURL(e.url + "?panel=" + t);
        Nl(i)
          .then(function (a) {
            if (!a)
              return V.tabs.create({ url: i }).then(function (o) {
                Sr.__declareAppTab(t, { tab: o.id, initData: e.initData }), (_r[t] = { type: "tab", tabId: o.id }), (An[o.id] = t);
              });
          })
          .then(r)
          .catch(n);
      });
    }
    function vm(t, e) {
      return new Promise((r, n) => {
        let i = V.runtime.getURL(e.url + "?panel=" + t);
        V.windows
          .getCurrent()
          .then((a) => {
            let o = e.width || 500,
              s = e.height || 400,
              l = {
                url: i,
                width: o,
                height: s,
                type: "popup",
                left: Math.round((a.width - o) / 2 + a.left),
                top: Math.round((a.height - s) / 2 + a.top)
              };
            return (
              Sr.isBrowser("chrome", "opera") && (l.focused = !0),
              V.windows
                .create(l)
                .then((u) => ((_r[t] = { type: "window", windowId: u.id }), Promise.all([u, V.windows.update(u.id, { focused: !0 })])))
                .then(([u]) => {
                  Promise.resolve()
                    .then(() => {
                      if (!(e.initData && e.initData.autoResize))
                        return V.windows
                          .update(u.id, { height: u.height + 1 })
                          .then(() => V.windows.update(u.id, { height: u.height - 1 }));
                    })
                    .then(() => {
                      let d = new Promise((x, A) => {
                          let g;
                          function p(w) {
                            w.windowId == u.id && (clearTimeout(g), V.tabs.onCreated.removeListener(p), x(w));
                          }
                          (g = setTimeout(() => {
                            V.tabs.onCreated.removeListener(p), A(new Error("Tab did not open"));
                          }, 5e3)),
                            V.tabs.onCreated.addListener(p);
                        }),
                        v = V.tabs.query({ windowId: u.id }).then(
                          (x) =>
                            new Promise((A, g) => {
                              x.length > 0 && A(x[0]);
                            })
                        );
                      return Promise.race([d, v]);
                    })
                    .then((d) =>
                      d.status == "loading"
                        ? new Promise((v, x) => {
                            let A;
                            function g(p, w, k) {
                              p == d.id && k.status == "complete" && (clearTimeout(A), V.tabs.onUpdated.removeListener(g), v(k));
                            }
                            (A = setTimeout(() => {
                              V.tabs.onUpdated.removeListener(g), x(new Error("Tab did not complete"));
                            }, 6e4)),
                              V.tabs.onUpdated.addListener(g);
                          })
                        : d
                    )
                    .then((d) => {
                      Sr.__declareAppTab(t, { tab: d.id, initData: e.initData }), (An[d.id] = t);
                    })
                    .then(r)
                    .catch(n);
                  function f(d) {
                    d != u.id &&
                      e.autoClose &&
                      V.windows.getCurrent().then((v) => {
                        v.id != u.id &&
                          V.windows.remove(u.id).then(
                            () => {},
                            () => {}
                          );
                      });
                  }
                  function c(d) {
                    d == u.id && (V.windows.onFocusChanged.removeListener(f), V.windows.onFocusChanged.removeListener(c));
                  }
                  V.windows.onFocusChanged.addListener(f), V.windows.onRemoved.addListener(c);
                })
                .catch(n)
            );
          })
          .catch(n);
      });
    }
    function wm(t, e) {
      return new Promise((r, n) => {
        let i = V.runtime.getURL(e.url + "?panel=" + t);
        Nl(i)
          .then((a) => {
            if (!a) return vm(t, e);
          })
          .then(r)
          .catch(n);
      });
    }
    function bm(t, e) {
      switch (e.type) {
        case "panel":
          return wm(t, e);
        case "tab":
        default:
          return ym(t, e);
      }
    }
    V.tabs.onRemoved.addListener((t) => {
      Sr.__closeByTab(t);
      let e = An[t];
      e && (delete An[t], delete _r[e]);
    });
    function xm(t) {
      let e = _r[t];
      e && e.type == "tab" ? V.tabs.remove(e.tabId) : e && e.type == "window" ? V.windows.remove(e.windowId) : mm.call(t, "close");
    }
    function Am(t) {
      return !!_r[t];
    }
    jl.exports = { open: bm, close: xm, isOpen: Am };
  });
  var oa = q((VA, Bl) => {
    var ia = na().getMessage,
      Ul = {};
    function Ll() {
      (this.$specs = {}), (this.$values = null), this.$values || (this.$values = {}), (this.$listeners = {});
    }
    Ll.prototype = {
      notify: function (t, e, r, n) {
        let i = this,
          a = t.split("."),
          o = [];
        for (let s = a.length; s >= 0; s--) o.push(a.slice(0, s).join("."));
        o.forEach(function (s) {
          let l = i.$listeners[s];
          l &&
            l.forEach(function (u) {
              if (u.specs == n)
                if (u.pack)
                  (u.pack[t] = e),
                    typeof u.old[t] > "u" && (u.old[t] = r),
                    u.timer && clearTimeout(u.timer),
                    (u.timer = setTimeout(function () {
                      delete u.timer;
                      let f = u.pack,
                        c = u.old;
                      (u.pack = {}), (u.old = {});
                      try {
                        u.callback(f, c);
                      } catch {}
                    }, 0));
                else
                  try {
                    u.callback(t, e, r);
                  } catch {}
            });
        });
      },
      forceNotify: function (t) {
        typeof t > "u" && (t = !1);
        let e = this;
        Object.keys(e.$specs).forEach((r) => {
          e.notify(r, e.$values[r], e.$values[r], t);
        });
      },
      declare: function (t) {
        let e = this;
        Array.isArray(t) ||
          (t = Object.keys(t).map(function (r) {
            let n = t[r];
            return (n.name = r), n;
          })),
          t.forEach(function (r) {
            if (Ul[r.name]) throw new Error("Forbidden prefs key " + r.name);
            let n;
            r.hidden
              ? ((r.label = r.name), (r.description = ""))
              : ((n = r.name.replace(/[^0-9a-zA-Z_]/g, "_")),
                (r.label = r.label || ia("weh_prefs_label_" + n) || r.name),
                (r.description = r.description || ia("weh_prefs_description_" + n) || "")),
              r.type == "choice" &&
                (r.choices = (r.choices || []).map(function (o) {
                  if (typeof o == "object") return o;
                  if (r.hidden) return { value: o, name: o };
                  {
                    let s = o.replace(/[^0-9a-zA-Z_]/g, "_");
                    return { value: o, name: ia("weh_prefs_" + n + "_option_" + s) || o };
                  }
                }));
            let i = null;
            e.$specs[r.name] ||
              (function (o) {
                typeof e[r.name] < "u" && (i = e[r.name]),
                  Object.defineProperty(e, o, {
                    set: function (s) {
                      let l = e.$values[o];
                      l !== s && ((e.$values[o] = s), e.notify(o, s, l, !1));
                    },
                    get: function () {
                      return e.$values[o] !== void 0 ? e.$values[o] : (e.$specs[o] && e.$specs[o].defaultValue) || void 0;
                    }
                  });
              })(r.name);
            let a = e.$specs[r.name];
            (e.$specs[r.name] = r),
              i !== null ? (e.$values[r.name] = i) : typeof e.$values[r.name] > "u" && (e.$values[r.name] = r.defaultValue),
              e.notify(r.name, r, a, !0);
          });
      },
      on: function () {
        let t = "",
          e = {},
          r = 0;
        typeof arguments[r] == "string" && (t = arguments[r++]), typeof arguments[r] == "object" && (e = arguments[r++]);
        let n = arguments[r],
          i = !!e.pack;
        this.$listeners[t] || (this.$listeners[t] = []);
        let a = { callback: n, specs: !!e.specs };
        i && ((a.pack = {}), (a.old = {})), this.$listeners[t].push(a);
      },
      off: function () {
        let t = "",
          e = 0;
        typeof arguments[e] == "string" && (t = arguments[e++]);
        let r = arguments[e],
          n = this.$listeners[t];
        if (n) for (let i = n.length - 1; i >= 0; i--) (!r || n[i] == r) && n.splice(i, 1);
      },
      getAll: function () {
        return Object.assign({}, this.$values);
      },
      getSpecs: function () {
        return Object.assign({}, this.$specs);
      },
      assign: function (t) {
        for (let e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
      },
      isValid: function (t, e) {
        let r = this.$specs[t];
        if (r) {
          switch (r.type) {
            case "string":
              if (r.regexp && !new RegExp(r.regexp).test(e)) return !1;
              break;
            case "integer":
              if (!/^-?[0-9]+$/.test(e) || isNaN(parseInt(e))) return !1;
            case "float":
              if (
                (r.type == "float" && (!/^-?[0-9]+(\.[0-9]+)?|(\.[0-9]+)$/.test(e) || isNaN(parseFloat(e)))) ||
                (typeof r.minimum < "u" && e < r.minimum) ||
                (typeof r.maximum < "u" && e > r.maximum)
              )
                return !1;
              break;
            case "choice":
              {
                let n = !1;
                if (
                  ((r.choices || []).forEach((i) => {
                    e == i.value && (n = !0);
                  }),
                  !n)
                )
                  return !1;
              }
              break;
          }
          return !0;
        }
      },
      reducer: function (t = {}, e) {
        switch (e.type) {
          case "weh.SET_PREFS":
            t = Object.assign({}, t, e.payload);
            break;
        }
        return t;
      },
      reduxDispatch(t) {
        this.on("", { pack: !0 }, (e) => {
          t.dispatch({ type: "weh.SET_PREFS", payload: e });
        });
      }
    };
    var aa = new Ll();
    for (let t in aa) aa.hasOwnProperty(t) && (Ul[t] = !0);
    Bl.exports = aa;
  });
  var zl = q(($A, Hl) => {
    Hl.exports = [
      { name: "networkProbe", type: "boolean", defaultValue: !0 },
      { name: "titleMode", type: "choice", defaultValue: "right", choices: ["right", "left", "multiline"] },
      { name: "iconActivation", type: "choice", defaultValue: "currenttab", choices: ["currenttab", "anytab"] },
      { name: "iconBadge", type: "choice", defaultValue: "tasks", choices: ["none", "tasks", "activetab", "anytab", "pinned", "mixed"] },
      { name: "hitsGotoTab", type: "boolean", defaultValue: !0 },
      { name: "default-action-0", type: "string", defaultValue: "quickdownload", hidden: !0 },
      { name: "default-action-1", type: "string", defaultValue: "openlocalfile", hidden: !0 },
      { name: "default-action-2", type: "string", defaultValue: "abort", hidden: !0 },
      { name: "smartnamerFnameSpaces", type: "choice", defaultValue: "keep", choices: ["keep", "remove", "hyphen", "underscore"] },
      { name: "smartnamerFnameMaxlen", type: "integer", defaultValue: 64, minimum: 12, maximum: 256 },
      { name: "downloadControlledMax", type: "integer", defaultValue: 6, minimum: 0 },
      { name: "downloadStreamControlledMax", type: "integer", defaultValue: 6, minimum: 0 },
      { name: "autoPin", type: "boolean", defaultValue: !1 },
      { name: "mediaExtensions", type: "string", defaultValue: "flv|ram|mpg|mpeg|avi|rm|wmv|mov|asf|mp3|rar|movie|divx|rbs|mp4|mpeg4" },
      { name: "dashHideM4s", type: "boolean", defaultValue: !0 },
      { name: "mpegtsHideTs", type: "boolean", defaultValue: !0 },
      { name: "orphanExpiration", type: "integer", defaultValue: 60, minimum: 0 },
      { name: "chunksEnabled", type: "boolean", defaultValue: !0 },
      { name: "hlsEnabled", type: "boolean", defaultValue: !0 },
      { name: "dashEnabled", type: "boolean", defaultValue: !0 },
      { name: "dashOnAdp", type: "choice", defaultValue: "audio_video", choices: ["audio", "video", "audio_video"] },
      { name: "hlsDownloadAsM2ts", type: "boolean", defaultValue: !1 },
      { name: "networkFilterOut", type: "string", defaultValue: "/frag\\\\([0-9]+\\\\)/|[&\\\\?]range=[0-9]+-[0-9]+|/silverlight/" },
      { name: "mediaweightThreshold", type: "integer", defaultValue: 2097152 },
      { name: "mediaweightMinSize", type: "integer", defaultValue: 8192 },
      { name: "tbvwsEnabled", type: "boolean", defaultValue: !0, hidden: !0 },
      { name: "ignoreProtectedVariants", type: "boolean", defaultValue: !0 },
      { name: "qualitiesMaxVariants", type: "integer", defaultValue: 6 },
      { name: "adpHide", type: "boolean", defaultValue: !1 },
      { name: "adaptativeCount", type: "integer", defaultValue: 4, hidden: !0 },
      { name: "converterThreads", type: "string", defaultValue: "auto" },
      { name: "converterAggregTuneH264", type: "boolean", defaultValue: !1 },
      { name: "notifyReady", type: "boolean", defaultValue: !0 },
      { name: "noPrivateNotification", type: "boolean", defaultValue: !0 },
      { name: "avplayEnabled", type: "boolean", defaultValue: !0 },
      { name: "blacklistEnabled", type: "boolean", defaultValue: !0 },
      { name: "chunksConcurrentDownloads", type: "integer", defaultValue: 4 },
      { name: "chunksPrefetchCount", type: "integer", defaultValue: 4 },
      { name: "downloadRetries", type: "integer", defaultValue: 3 },
      { name: "downloadRetryDelay", type: "integer", defaultValue: 1e3 },
      { name: "mpegtsSaveRaw", type: "boolean", defaultValue: !1, hidden: !0 },
      { name: "mpegtsSaveRawStreams", type: "boolean", defaultValue: !1, hidden: !0 },
      { name: "mpegtsEndsOnSeenChunk", type: "boolean", defaultValue: !0, hidden: !0 },
      { name: "converterKeepTmpFiles", type: "boolean", defaultValue: !1 },
      { name: "backgroundReduxLogger", type: "boolean", defaultValue: !1, hidden: !0 },
      { name: "dlconvLastOutput", type: "string", defaultValue: "", hidden: !0 },
      { name: "qrMessageNotAgain", type: "boolean", defaultValue: !1, hidden: !0 },
      { name: "coappShellEnabled", type: "boolean", defaultValue: !1, hidden: !0 },
      { name: "downloadCount", type: "integer", defaultValue: 0, hidden: !0 },
      { name: "donateNotAgainExpire", type: "integer", defaultValue: 0, hidden: !0 },
      { name: "popupHeightLeftOver", type: "integer", defaultValue: 100, hidden: !0 },
      { name: "coappDownloads", type: "choice", defaultValue: "ask", choices: ["ask", "coapp", "browser"] },
      { name: "lastDownloadDirectory", type: "string", defaultValue: "dwhelper" },
      { name: "fileDialogType", type: "choice", defaultValue: "tab", choices: ["tab", "panel"] },
      { name: "alertDialogType", type: "choice", defaultValue: "tab", choices: ["tab", "panel"] },
      { name: "monitorNetworkRequests", type: "boolean", defaultValue: !0 },
      { name: "chunkedCoappManifestsRequests", type: "boolean", defaultValue: !1 },
      { name: "chunkedCoappDataRequests", type: "boolean", defaultValue: !0 },
      { name: "coappRestartDelay", type: "integer", defaultValue: 1e3 },
      { name: "rememberLastDir", type: "boolean", defaultValue: !0 },
      { name: "coappIdleExit", type: "integer", defaultValue: 6e4 },
      { name: "dialogAutoClose", type: "boolean", defaultValue: !1 },
      { name: "convertControlledMax", type: "integer", defaultValue: 1 },
      { name: "checkCoappOnStartup", type: "boolean", defaultValue: !0 },
      { name: "coappUseProxy", type: "boolean", defaultValue: !0 },
      { name: "downloadCompleteDelay", type: "integer", defaultValue: 1e3 },
      { name: "contentRedirectEnabled", type: "boolean", defaultValue: !0 },
      { name: "contextMenuEnabled", type: "boolean", defaultValue: !0 },
      { name: "toolsMenuEnabled", type: "boolean", defaultValue: !1 },
      { name: "medialinkExtensions", type: "string", defaultValue: "jpg|jpeg|gif|png|mpg|mpeg|avi|rm|wmv|mov|flv|mp3|mp4" },
      { name: "medialinkMaxHits", type: "integer", defaultValue: 50 },
      { name: "medialinkMinFilesPerGroup", type: "integer", defaultValue: 6 },
      { name: "medialinkMinImgSize", type: "integer", defaultValue: 80 },
      { name: "medialinkAutoDetect", type: "boolean", defaultValue: !1 },
      { name: "medialinkScanImages", type: "boolean", defaultValue: !0 },
      { name: "medialinkScanLinks", type: "boolean", defaultValue: !0 },
      { name: "bulkEnabled", type: "boolean", defaultValue: !0 },
      { name: "tbvwsGrabDelay", type: "integer", defaultValue: 2e3 },
      { name: "forcedCoappVersion", type: "string", regexp: "^$|^\\d+\\.\\d+\\.\\d+$", defaultValue: "" },
      { name: "lastHlsDownload", type: "integer", defaultValue: 0, hidden: !0 },
      { name: "galleryNaming", type: "choice", choices: ["type-index", "url", "index-url"], defaultValue: "type-index" },
      { name: "hlsRememberPrevLiveChunks", type: "boolean", defaultValue: !1 },
      { name: "hlsEndTimeout", type: "integer", defaultValue: 20 },
      {
        name: "tbvwsExtractionMethod",
        type: "choice",
        choices: [
          "page_android_ios_tvep",
          "page_ios_android_tvep",
          "android_ios_tvep_page",
          "ios_android_tvep_page",
          "page_tvep_android_ios",
          "android_ios_tvep",
          "page",
          "android",
          "tvep",
          "ios"
        ],
        defaultValue: "page_android_ios_tvep"
      },
      { name: "hitUpdateFloodProtect", type: "integer", defaultValue: 100, hidden: !0 }
    ];
  });
  var z = q((GA, $l) => {
    var ee = qt(),
      sa = ee.browser,
      Ae = {},
      Te = {};
    (ee.rpc = Xe()),
      ee.rpc.setUseTarget(!0),
      ee.rpc.setPost((t, e) => {
        let r = Ae[t];
        r && r.port && r.port.postMessage(e);
      }),
      ee.rpc.listen({
        appStarted: (t) => {},
        appReady: (t) => {},
        closePanel: (t) => {
          ee.ui.close(t);
        }
      }),
      sa.runtime.onConnect.addListener((t) => {
        /^weh:(.*?):(.*)/.exec(t.name) &&
          (t.onMessage.addListener((e) => {
            if (typeof e._method < "u" && (e._method === "appStarted" || e._method === "appReady")) {
              let r = (e._args[0] && e._args[0].uiName) || null,
                n = Ae[r] || { ready: !1 };
              if (((Ae[r] = n), Object.assign(n, e._args[0], { port: t }), e._method == "appReady")) {
                (n.ready = !0), n.initData && setTimeout(() => ee.rpc.call(r, "wehInitData", n.initData));
                let i = Te[r];
                i && i.timer && clearTimeout(i.timer);
              }
              t._weh_app = r;
            }
            ee.rpc.receive(e, t.postMessage.bind(t), t._weh_app);
          }),
          t.onDisconnect.addListener(() => {
            let e = t._weh_app;
            if (e) {
              delete Ae[e];
              let r = Te[e];
              r && (r.timer && clearTimeout(r.timer), delete Te[e], r.reject(new Error("Disconnected waiting for " + e)));
            }
          }));
      }),
      (ee.__declareAppTab = function (t, e) {
        Ae[t] || (Ae[t] = {}), Object.assign(Ae[t], e);
      }),
      (ee.__closeByTab = function (t) {
        Object.keys(Ae).forEach((e) => {
          if (Ae[e].tab === t) {
            delete Ae[e];
            let r = Te[e];
            r && (r.timer && clearTimeout(r.timer), delete Te[e], r.reject(new Error("Disconnected waiting for " + e)));
          }
        });
      }),
      (ee._ = na().getMessage),
      (ee.ui = Wl()),
      (ee.openedContents = () => Object.keys(Ae));
    function Sm(t) {
      let e = 0,
        r;
      if (t.length === 0) return e;
      for (let n = 0; n < t.length; n++) (r = t.charCodeAt(n)), (e = (e << 5) - e + r), (e = e & e);
      return e;
    }
    function _m(t) {
      return JSON.stringify(
        Object.keys(t)
          .sort()
          .map(function (e) {
            return { name: e, value: t[e] };
          })
      );
    }
    var Vl = 0;
    (ee.unsafe_prefs = oa()),
      (ee.prefs = sa.storage.local
        .get("weh-prefs")
        .then((t) => {
          let e = ee.unsafe_prefs,
            r = t["weh-prefs"] || {};
          return (
            e.assign(r),
            e.on("", { pack: !0 }, function (n, i) {
              Object.assign(r, n);
              let a = _m(r),
                o = Sm(a);
              o != Vl && ((Vl = o), sa.storage.local.set({ "weh-prefs": r })),
                Object.keys(Ae).forEach((s) => {
                  ee.rpc.call(s, "setPrefs", n);
                });
            }),
            e.declare(zl()),
            e
          );
        })
        .catch((t) => {
          console.error("web-background error:", t);
        })),
      (ee.wait = (t, e = {}) => {
        let r = Te[t];
        return (
          r && (r.timer && clearTimeout(r.timer), delete Te[t], r.reject(new Error("Waiter for " + t + " overriden"))),
          new Promise((n, i) => {
            Te[t] = {
              resolve: n,
              reject: i,
              timer: setTimeout(() => {
                delete Te[t], i(new Error("Waiter for " + t + " timed out"));
              }, e.timeout || 6e4)
            };
          })
        );
      }),
      ee.rpc.listen({
        prefsGetAll: async () => (await ee.prefs).getAll(),
        prefsGetSpecs: async () => (await ee.prefs).getSpecs(),
        prefsSet: async (t) => (await ee.prefs).assign(t),
        trigger: (t, e) => {
          let r = Te[t];
          if (!r) throw new Error("No waiter for", t);
          r.timer && (clearTimeout(r.timer), delete r.timer), delete Te[t], r.resolve(e);
        }
      }),
      ($l.exports = ee);
  });
  var ot = q((KA, Im) => {
    Im.exports = {
      prod: !0,
      beta: !1,
      buildDate: "mer. 20 d\xE9c. 2023 16:32:19 UTC",
      buildOptions: { linuxlic: !1, noyt: !0, browser: "chrome" }
    };
  });
  var Jl = q((YA, Yl) => {
    var km = qt(),
      Gl = Xe(),
      la = oa(),
      Sn = km.browser,
      Ir = null,
      Kl = null,
      kr = !1;
    Sn.runtime.onMessageExternal &&
      (Sn.runtime.onMessageExternal.addListener(function (t, e, r) {
        switch (t.type) {
          case "weh#inspect-ping":
            (Ir = e.id), r({ type: "weh#inspect-pong", version: 1, manifest: Sn.runtime.getManifest() });
            break;
          case "weh#inspect":
            (Ir = e.id),
              (kr = t.inspected),
              kr
                ? Gl.setHook((n) => {
                    kr &&
                      Ir &&
                      Sn.runtime.sendMessage(Ir, { type: "weh#inspect-message", message: n }).catch((i) => {
                        console.info("Error sending message", i), (kr = !1);
                      });
                  })
                : Gl.setHook(null),
              r({ type: "weh#inspect", version: 1, inspected: kr });
            break;
          case "weh#get-prefs":
            (Ir = e.id), r({ type: "weh#prefs", prefs: la.getAll(), specs: la.getSpecs() });
            break;
          case "weh#set-pref":
            (la[t.pref] = t.value), r(!0);
            break;
        }
      }),
      (Kl = {
        send: () => {
          console.info("TODO implement inspect.send");
        }
      })),
      (Yl.exports = Kl);
  });
  var ua = q((JA, Zl) => {
    "use strict";
    var Xl = Object.prototype.toString;
    Zl.exports = function (e) {
      var r = Xl.call(e),
        n = r === "[object Arguments]";
      return (
        n ||
          (n =
            r !== "[object Array]" &&
            e !== null &&
            typeof e == "object" &&
            typeof e.length == "number" &&
            e.length >= 0 &&
            Xl.call(e.callee) === "[object Function]"),
        n
      );
    };
  });
  var su = q((XA, ou) => {
    "use strict";
    var au;
    Object.keys ||
      ((qr = Object.prototype.hasOwnProperty),
      (ca = Object.prototype.toString),
      (Ql = ua()),
      (fa = Object.prototype.propertyIsEnumerable),
      (eu = !fa.call({ toString: null }, "toString")),
      (tu = fa.call(function () {}, "prototype")),
      (Er = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]),
      (_n = function (t) {
        var e = t.constructor;
        return e && e.prototype === t;
      }),
      (ru = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
      }),
      (nu = (function () {
        if (typeof window > "u") return !1;
        for (var t in window)
          try {
            if (!ru["$" + t] && qr.call(window, t) && window[t] !== null && typeof window[t] == "object")
              try {
                _n(window[t]);
              } catch {
                return !0;
              }
          } catch {
            return !0;
          }
        return !1;
      })()),
      (iu = function (t) {
        if (typeof window > "u" || !nu) return _n(t);
        try {
          return _n(t);
        } catch {
          return !1;
        }
      }),
      (au = function (e) {
        var r = e !== null && typeof e == "object",
          n = ca.call(e) === "[object Function]",
          i = Ql(e),
          a = r && ca.call(e) === "[object String]",
          o = [];
        if (!r && !n && !i) throw new TypeError("Object.keys called on a non-object");
        var s = tu && n;
        if (a && e.length > 0 && !qr.call(e, 0)) for (var l = 0; l < e.length; ++l) o.push(String(l));
        if (i && e.length > 0) for (var u = 0; u < e.length; ++u) o.push(String(u));
        else for (var f in e) !(s && f === "prototype") && qr.call(e, f) && o.push(String(f));
        if (eu) for (var c = iu(e), d = 0; d < Er.length; ++d) !(c && Er[d] === "constructor") && qr.call(e, Er[d]) && o.push(Er[d]);
        return o;
      }));
    var qr, ca, Ql, fa, eu, tu, Er, _n, ru, nu, iu;
    ou.exports = au;
  });
  var kn = q((ZA, cu) => {
    "use strict";
    var qm = Array.prototype.slice,
      Em = ua(),
      lu = Object.keys,
      In = lu
        ? function (e) {
            return lu(e);
          }
        : su(),
      uu = Object.keys;
    In.shim = function () {
      if (Object.keys) {
        var e = (function () {
          var r = Object.keys(arguments);
          return r && r.length === arguments.length;
        })(1, 2);
        e ||
          (Object.keys = function (n) {
            return Em(n) ? uu(qm.call(n)) : uu(n);
          });
      } else Object.keys = In;
      return Object.keys || In;
    };
    cu.exports = In;
  });
  var Or = q((QA, fu) => {
    "use strict";
    fu.exports = function () {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
      if (typeof Symbol.iterator == "symbol") return !0;
      var e = {},
        r = Symbol("test"),
        n = Object(r);
      if (
        typeof r == "string" ||
        Object.prototype.toString.call(r) !== "[object Symbol]" ||
        Object.prototype.toString.call(n) !== "[object Symbol]"
      )
        return !1;
      var i = 42;
      e[r] = i;
      for (r in e) return !1;
      if (
        (typeof Object.keys == "function" && Object.keys(e).length !== 0) ||
        (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      )
        return !1;
      var a = Object.getOwnPropertySymbols(e);
      if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(e, r);
        if (o.value !== i || o.enumerable !== !0) return !1;
      }
      return !0;
    };
  });
  var qn = q((e4, pu) => {
    "use strict";
    var du = typeof Symbol < "u" && Symbol,
      Om = Or();
    pu.exports = function () {
      return typeof du != "function" || typeof Symbol != "function" || typeof du("foo") != "symbol" || typeof Symbol("bar") != "symbol"
        ? !1
        : Om();
    };
  });
  var mu = q((t4, gu) => {
    "use strict";
    var hu = { foo: {} },
      Pm = Object;
    gu.exports = function () {
      return { __proto__: hu }.foo === hu.foo && !({ __proto__: null } instanceof Pm);
    };
  });
  var vu = q((r4, yu) => {
    "use strict";
    var Tm = "Function.prototype.bind called on incompatible ",
      da = Array.prototype.slice,
      Cm = Object.prototype.toString,
      Rm = "[object Function]";
    yu.exports = function (e) {
      var r = this;
      if (typeof r != "function" || Cm.call(r) !== Rm) throw new TypeError(Tm + r);
      for (
        var n = da.call(arguments, 1),
          i,
          a = function () {
            if (this instanceof i) {
              var f = r.apply(this, n.concat(da.call(arguments)));
              return Object(f) === f ? f : this;
            } else return r.apply(e, n.concat(da.call(arguments)));
          },
          o = Math.max(0, r.length - n.length),
          s = [],
          l = 0;
        l < o;
        l++
      )
        s.push("$" + l);
      if (((i = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a)), r.prototype)) {
        var u = function () {};
        (u.prototype = r.prototype), (i.prototype = new u()), (u.prototype = null);
      }
      return i;
    };
  });
  var En = q((n4, wu) => {
    "use strict";
    var Mm = vu();
    wu.exports = Function.prototype.bind || Mm;
  });
  var pa = q((i4, bu) => {
    "use strict";
    var Dm = En();
    bu.exports = Dm.call(Function.call, Object.prototype.hasOwnProperty);
  });
  var Ce = q((a4, Iu) => {
    "use strict";
    var L,
      Kt = SyntaxError,
      _u = Function,
      Gt = TypeError,
      ha = function (t) {
        try {
          return _u('"use strict"; return (' + t + ").constructor;")();
        } catch {}
      },
      Et = Object.getOwnPropertyDescriptor;
    if (Et)
      try {
        Et({}, "");
      } catch {
        Et = null;
      }
    var ga = function () {
        throw new Gt();
      },
      Fm = Et
        ? (function () {
            try {
              return arguments.callee, ga;
            } catch {
              try {
                return Et(arguments, "callee").get;
              } catch {
                return ga;
              }
            }
          })()
        : ga,
      Vt = qn()(),
      Nm = mu()(),
      se =
        Object.getPrototypeOf ||
        (Nm
          ? function (t) {
              return t.__proto__;
            }
          : null),
      $t = {},
      jm = typeof Uint8Array > "u" || !se ? L : se(Uint8Array),
      Ot = {
        "%AggregateError%": typeof AggregateError > "u" ? L : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? L : ArrayBuffer,
        "%ArrayIteratorPrototype%": Vt && se ? se([][Symbol.iterator]()) : L,
        "%AsyncFromSyncIteratorPrototype%": L,
        "%AsyncFunction%": $t,
        "%AsyncGenerator%": $t,
        "%AsyncGeneratorFunction%": $t,
        "%AsyncIteratorPrototype%": $t,
        "%Atomics%": typeof Atomics > "u" ? L : Atomics,
        "%BigInt%": typeof BigInt > "u" ? L : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? L : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? L : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? L : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? L : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? L : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? L : FinalizationRegistry,
        "%Function%": _u,
        "%GeneratorFunction%": $t,
        "%Int8Array%": typeof Int8Array > "u" ? L : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? L : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? L : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Vt && se ? se(se([][Symbol.iterator]())) : L,
        "%JSON%": typeof JSON == "object" ? JSON : L,
        "%Map%": typeof Map > "u" ? L : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !Vt || !se ? L : se(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? L : Promise,
        "%Proxy%": typeof Proxy > "u" ? L : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? L : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? L : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !Vt || !se ? L : se(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? L : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Vt && se ? se(""[Symbol.iterator]()) : L,
        "%Symbol%": Vt ? Symbol : L,
        "%SyntaxError%": Kt,
        "%ThrowTypeError%": Fm,
        "%TypedArray%": jm,
        "%TypeError%": Gt,
        "%Uint8Array%": typeof Uint8Array > "u" ? L : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? L : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? L : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? L : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? L : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? L : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? L : WeakSet
      };
    if (se)
      try {
        null.error;
      } catch (t) {
        (xu = se(se(t))), (Ot["%Error.prototype%"] = xu);
      }
    var xu,
      Wm = function t(e) {
        var r;
        if (e === "%AsyncFunction%") r = ha("async function () {}");
        else if (e === "%GeneratorFunction%") r = ha("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") r = ha("async function* () {}");
        else if (e === "%AsyncGenerator%") {
          var n = t("%AsyncGeneratorFunction%");
          n && (r = n.prototype);
        } else if (e === "%AsyncIteratorPrototype%") {
          var i = t("%AsyncGenerator%");
          i && se && (r = se(i.prototype));
        }
        return (Ot[e] = r), r;
      },
      Au = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      },
      Pr = En(),
      On = pa(),
      Um = Pr.call(Function.call, Array.prototype.concat),
      Lm = Pr.call(Function.apply, Array.prototype.splice),
      Su = Pr.call(Function.call, String.prototype.replace),
      Pn = Pr.call(Function.call, String.prototype.slice),
      Bm = Pr.call(Function.call, RegExp.prototype.exec),
      Hm = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      zm = /\\(\\)?/g,
      Vm = function (e) {
        var r = Pn(e, 0, 1),
          n = Pn(e, -1);
        if (r === "%" && n !== "%") throw new Kt("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%") throw new Kt("invalid intrinsic syntax, expected opening `%`");
        var i = [];
        return (
          Su(e, Hm, function (a, o, s, l) {
            i[i.length] = s ? Su(l, zm, "$1") : o || a;
          }),
          i
        );
      },
      $m = function (e, r) {
        var n = e,
          i;
        if ((On(Au, n) && ((i = Au[n]), (n = "%" + i[0] + "%")), On(Ot, n))) {
          var a = Ot[n];
          if ((a === $t && (a = Wm(n)), typeof a > "u" && !r))
            throw new Gt("intrinsic " + e + " exists, but is not available. Please file an issue!");
          return { alias: i, name: n, value: a };
        }
        throw new Kt("intrinsic " + e + " does not exist!");
      };
    Iu.exports = function (e, r) {
      if (typeof e != "string" || e.length === 0) throw new Gt("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof r != "boolean") throw new Gt('"allowMissing" argument must be a boolean');
      if (Bm(/^%?[^%]*%?$/, e) === null) throw new Kt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = Vm(e),
        i = n.length > 0 ? n[0] : "",
        a = $m("%" + i + "%", r),
        o = a.name,
        s = a.value,
        l = !1,
        u = a.alias;
      u && ((i = u[0]), Lm(n, Um([0, 1], u)));
      for (var f = 1, c = !0; f < n.length; f += 1) {
        var d = n[f],
          v = Pn(d, 0, 1),
          x = Pn(d, -1);
        if ((v === '"' || v === "'" || v === "`" || x === '"' || x === "'" || x === "`") && v !== x)
          throw new Kt("property names with quotes must have matching quotes");
        if (((d === "constructor" || !c) && (l = !0), (i += "." + d), (o = "%" + i + "%"), On(Ot, o))) s = Ot[o];
        else if (s != null) {
          if (!(d in s)) {
            if (!r) throw new Gt("base intrinsic for " + e + " exists, but the property is not available.");
            return;
          }
          if (Et && f + 1 >= n.length) {
            var A = Et(s, d);
            (c = !!A), c && "get" in A && !("originalValue" in A.get) ? (s = A.get) : (s = s[d]);
          } else (c = On(s, d)), (s = s[d]);
          c && !l && (Ot[o] = s);
        }
      }
      return s;
    };
  });
  var qu = q((o4, ku) => {
    "use strict";
    var Gm = Ce(),
      ma = Gm("%Object.defineProperty%", !0),
      ya = function () {
        if (ma)
          try {
            return ma({}, "a", { value: 1 }), !0;
          } catch {
            return !1;
          }
        return !1;
      };
    ya.hasArrayLengthDefineBug = function () {
      if (!ya()) return null;
      try {
        return ma([], "length", { value: 1 }).length !== 1;
      } catch {
        return !0;
      }
    };
    ku.exports = ya;
  });
  var st = q((s4, Tu) => {
    "use strict";
    var Km = kn(),
      Ym = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
      Jm = Object.prototype.toString,
      Xm = Array.prototype.concat,
      Eu = Object.defineProperty,
      Zm = function (t) {
        return typeof t == "function" && Jm.call(t) === "[object Function]";
      },
      Qm = qu()(),
      Ou = Eu && Qm,
      e0 = function (t, e, r, n) {
        if (e in t) {
          if (n === !0) {
            if (t[e] === r) return;
          } else if (!Zm(n) || !n()) return;
        }
        Ou ? Eu(t, e, { configurable: !0, enumerable: !1, value: r, writable: !0 }) : (t[e] = r);
      },
      Pu = function (t, e) {
        var r = arguments.length > 2 ? arguments[2] : {},
          n = Km(e);
        Ym && (n = Xm.call(n, Object.getOwnPropertySymbols(e)));
        for (var i = 0; i < n.length; i += 1) e0(t, n[i], e[n[i]], r[n[i]]);
      };
    Pu.supportsDescriptors = !!Ou;
    Tu.exports = Pu;
  });
  var Tt = q((l4, Tn) => {
    "use strict";
    var va = En(),
      Yt = Ce(),
      Mu = Yt("%Function.prototype.apply%"),
      Du = Yt("%Function.prototype.call%"),
      Fu = Yt("%Reflect.apply%", !0) || va.call(Du, Mu),
      Cu = Yt("%Object.getOwnPropertyDescriptor%", !0),
      Pt = Yt("%Object.defineProperty%", !0),
      t0 = Yt("%Math.max%");
    if (Pt)
      try {
        Pt({}, "a", { value: 1 });
      } catch {
        Pt = null;
      }
    Tn.exports = function (e) {
      var r = Fu(va, Du, arguments);
      if (Cu && Pt) {
        var n = Cu(r, "length");
        n.configurable && Pt(r, "length", { value: 1 + t0(0, e.length - (arguments.length - 1)) });
      }
      return r;
    };
    var Ru = function () {
      return Fu(va, Mu, arguments);
    };
    Pt ? Pt(Tn.exports, "apply", { value: Ru }) : (Tn.exports.apply = Ru);
  });
  var ve = q((u4, Wu) => {
    "use strict";
    var Nu = Ce(),
      ju = Tt(),
      r0 = ju(Nu("String.prototype.indexOf"));
    Wu.exports = function (e, r) {
      var n = Nu(e, !!r);
      return typeof n == "function" && r0(e, ".prototype.") > -1 ? ju(n) : n;
    };
  });
  var wa = q((c4, zu) => {
    "use strict";
    var n0 = kn(),
      Bu = Or()(),
      Hu = ve(),
      Uu = Object,
      i0 = Hu("Array.prototype.push"),
      Lu = Hu("Object.prototype.propertyIsEnumerable"),
      a0 = Bu ? Object.getOwnPropertySymbols : null;
    zu.exports = function (e, r) {
      if (e == null) throw new TypeError("target must be an object");
      var n = Uu(e);
      if (arguments.length === 1) return n;
      for (var i = 1; i < arguments.length; ++i) {
        var a = Uu(arguments[i]),
          o = n0(a),
          s = Bu && (Object.getOwnPropertySymbols || a0);
        if (s)
          for (var l = s(a), u = 0; u < l.length; ++u) {
            var f = l[u];
            Lu(a, f) && i0(o, f);
          }
        for (var c = 0; c < o.length; ++c) {
          var d = o[c];
          if (Lu(a, d)) {
            var v = a[d];
            n[d] = v;
          }
        }
      }
      return n;
    };
  });
  var xa = q((f4, Vu) => {
    "use strict";
    var ba = wa(),
      o0 = function () {
        if (!Object.assign) return !1;
        for (var t = "abcdefghijklmnopqrst", e = t.split(""), r = {}, n = 0; n < e.length; ++n) r[e[n]] = e[n];
        var i = Object.assign({}, r),
          a = "";
        for (var o in i) a += o;
        return t !== a;
      },
      s0 = function () {
        if (!Object.assign || !Object.preventExtensions) return !1;
        var t = Object.preventExtensions({ 1: 2 });
        try {
          Object.assign(t, "xy");
        } catch {
          return t[1] === "y";
        }
        return !1;
      };
    Vu.exports = function () {
      return !Object.assign || o0() || s0() ? ba : Object.assign;
    };
  });
  var Gu = q((d4, $u) => {
    "use strict";
    var l0 = st(),
      u0 = xa();
    $u.exports = function () {
      var e = u0();
      return (
        l0(
          Object,
          { assign: e },
          {
            assign: function () {
              return Object.assign !== e;
            }
          }
        ),
        e
      );
    };
  });
  var Xu = q((p4, Ju) => {
    "use strict";
    var c0 = st(),
      f0 = Tt(),
      d0 = wa(),
      Ku = xa(),
      p0 = Gu(),
      h0 = f0.apply(Ku()),
      Yu = function (e, r) {
        return h0(Object, arguments);
      };
    c0(Yu, { getPolyfill: Ku, implementation: d0, shim: p0 });
    Ju.exports = Yu;
  });
  var Qu = q((h4, Zu) => {
    "use strict";
    var Cr = function () {
        return typeof function () {}.name == "string";
      },
      Tr = Object.getOwnPropertyDescriptor;
    if (Tr)
      try {
        Tr([], "length");
      } catch {
        Tr = null;
      }
    Cr.functionsHaveConfigurableNames = function () {
      if (!Cr() || !Tr) return !1;
      var e = Tr(function () {}, "name");
      return !!e && !!e.configurable;
    };
    var g0 = Function.prototype.bind;
    Cr.boundFunctionsHaveNames = function () {
      return Cr() && typeof g0 == "function" && function () {}.bind().name !== "";
    };
    Zu.exports = Cr;
  });
  var Sa = q((g4, Aa) => {
    "use strict";
    var m0 = Qu().functionsHaveConfigurableNames(),
      y0 = Object,
      v0 = TypeError;
    Aa.exports = function () {
      if (this != null && this !== y0(this)) throw new v0("RegExp.prototype.flags getter called on non-object");
      var e = "";
      return (
        this.hasIndices && (e += "d"),
        this.global && (e += "g"),
        this.ignoreCase && (e += "i"),
        this.multiline && (e += "m"),
        this.dotAll && (e += "s"),
        this.unicode && (e += "u"),
        this.unicodeSets && (e += "v"),
        this.sticky && (e += "y"),
        e
      );
    };
    m0 && Object.defineProperty && Object.defineProperty(Aa.exports, "name", { value: "get flags" });
  });
  var _a = q((m4, ec) => {
    "use strict";
    var w0 = Sa(),
      b0 = st().supportsDescriptors,
      x0 = Object.getOwnPropertyDescriptor;
    ec.exports = function () {
      if (b0 && /a/gim.flags === "gim") {
        var e = x0(RegExp.prototype, "flags");
        if (
          e &&
          typeof e.get == "function" &&
          typeof RegExp.prototype.dotAll == "boolean" &&
          typeof RegExp.prototype.hasIndices == "boolean"
        ) {
          var r = "",
            n = {};
          if (
            (Object.defineProperty(n, "hasIndices", {
              get: function () {
                r += "d";
              }
            }),
            Object.defineProperty(n, "sticky", {
              get: function () {
                r += "y";
              }
            }),
            r === "dy")
          )
            return e.get;
        }
      }
      return w0;
    };
  });
  var nc = q((y4, rc) => {
    "use strict";
    var A0 = st().supportsDescriptors,
      S0 = _a(),
      _0 = Object.getOwnPropertyDescriptor,
      I0 = Object.defineProperty,
      k0 = TypeError,
      tc = Object.getPrototypeOf,
      q0 = /a/;
    rc.exports = function () {
      if (!A0 || !tc) throw new k0("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      var e = S0(),
        r = tc(q0),
        n = _0(r, "flags");
      return (!n || n.get !== e) && I0(r, "flags", { configurable: !0, enumerable: !1, get: e }), e;
    };
  });
  var sc = q((v4, oc) => {
    "use strict";
    var E0 = st(),
      O0 = Tt(),
      P0 = Sa(),
      ic = _a(),
      T0 = nc(),
      ac = O0(ic());
    E0(ac, { getPolyfill: ic, implementation: P0, shim: T0 });
    oc.exports = ac;
  });
  var lt = q((w4, lc) => {
    "use strict";
    var C0 = Or();
    lc.exports = function () {
      return C0() && !!Symbol.toStringTag;
    };
  });
  var ka = q((b4, cc) => {
    "use strict";
    var R0 = lt()(),
      M0 = ve(),
      Ia = M0("Object.prototype.toString"),
      Cn = function (e) {
        return R0 && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : Ia(e) === "[object Arguments]";
      },
      uc = function (e) {
        return Cn(e)
          ? !0
          : e !== null &&
              typeof e == "object" &&
              typeof e.length == "number" &&
              e.length >= 0 &&
              Ia(e) !== "[object Array]" &&
              Ia(e.callee) === "[object Function]";
      },
      D0 = (function () {
        return Cn(arguments);
      })();
    Cn.isLegacyArguments = uc;
    cc.exports = D0 ? Cn : uc;
  });
  var fc = q(() => {});
  var Tc = q((S4, Pc) => {
    var Fa = typeof Map == "function" && Map.prototype,
      qa = Object.getOwnPropertyDescriptor && Fa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
      Mn = Fa && qa && typeof qa.get == "function" ? qa.get : null,
      dc = Fa && Map.prototype.forEach,
      Na = typeof Set == "function" && Set.prototype,
      Ea = Object.getOwnPropertyDescriptor && Na ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
      Dn = Na && Ea && typeof Ea.get == "function" ? Ea.get : null,
      pc = Na && Set.prototype.forEach,
      F0 = typeof WeakMap == "function" && WeakMap.prototype,
      Mr = F0 ? WeakMap.prototype.has : null,
      N0 = typeof WeakSet == "function" && WeakSet.prototype,
      Dr = N0 ? WeakSet.prototype.has : null,
      j0 = typeof WeakRef == "function" && WeakRef.prototype,
      hc = j0 ? WeakRef.prototype.deref : null,
      W0 = Boolean.prototype.valueOf,
      U0 = Object.prototype.toString,
      L0 = Function.prototype.toString,
      B0 = String.prototype.match,
      ja = String.prototype.slice,
      ct = String.prototype.replace,
      H0 = String.prototype.toUpperCase,
      gc = String.prototype.toLowerCase,
      _c = RegExp.prototype.test,
      mc = Array.prototype.concat,
      We = Array.prototype.join,
      z0 = Array.prototype.slice,
      yc = Math.floor,
      Ta = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
      Oa = Object.getOwnPropertySymbols,
      Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
      Jt = typeof Symbol == "function" && typeof Symbol.iterator == "object",
      fe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Jt || "symbol") ? Symbol.toStringTag : null,
      Ic = Object.prototype.propertyIsEnumerable,
      vc =
        (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (t) {
              return t.__proto__;
            }
          : null);
    function wc(t, e) {
      if (t === 1 / 0 || t === -1 / 0 || t !== t || (t && t > -1e3 && t < 1e3) || _c.call(/e/, e)) return e;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof t == "number") {
        var n = t < 0 ? -yc(-t) : yc(t);
        if (n !== t) {
          var i = String(n),
            a = ja.call(e, i.length + 1);
          return ct.call(i, r, "$&_") + "." + ct.call(ct.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return ct.call(e, r, "$&_");
    }
    var Ra = fc(),
      bc = Ra.custom,
      xc = qc(bc) ? bc : null;
    Pc.exports = function t(e, r, n, i) {
      var a = r || {};
      if (ut(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        ut(a, "maxStringLength") &&
        (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null)
      )
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var o = ut(a, "customInspect") ? a.customInspect : !0;
      if (typeof o != "boolean" && o !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (ut(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (ut(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var s = a.numericSeparator;
      if (typeof e > "u") return "undefined";
      if (e === null) return "null";
      if (typeof e == "boolean") return e ? "true" : "false";
      if (typeof e == "string") return Oc(e, a);
      if (typeof e == "number") {
        if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
        var l = String(e);
        return s ? wc(e, l) : l;
      }
      if (typeof e == "bigint") {
        var u = String(e) + "n";
        return s ? wc(e, u) : u;
      }
      var f = typeof a.depth > "u" ? 5 : a.depth;
      if ((typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")) return Ma(e) ? "[Array]" : "[Object]";
      var c = ly(a, n);
      if (typeof i > "u") i = [];
      else if (Ec(i, e) >= 0) return "[Circular]";
      function d(W, Z, re) {
        if ((Z && ((i = z0.call(i)), i.push(Z)), re)) {
          var Q = { depth: a.depth };
          return ut(a, "quoteStyle") && (Q.quoteStyle = a.quoteStyle), t(W, Q, n + 1, i);
        }
        return t(W, a, n + 1, i);
      }
      if (typeof e == "function" && !Ac(e)) {
        var v = Q0(e),
          x = Rn(e, d);
        return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (x.length > 0 ? " { " + We.call(x, ", ") + " }" : "");
      }
      if (qc(e)) {
        var A = Jt ? ct.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ca.call(e);
        return typeof e == "object" && !Jt ? Rr(A) : A;
      }
      if (ay(e)) {
        for (var g = "<" + gc.call(String(e.nodeName)), p = e.attributes || [], w = 0; w < p.length; w++)
          g += " " + p[w].name + "=" + kc(V0(p[w].value), "double", a);
        return (g += ">"), e.childNodes && e.childNodes.length && (g += "..."), (g += "</" + gc.call(String(e.nodeName)) + ">"), g;
      }
      if (Ma(e)) {
        if (e.length === 0) return "[]";
        var k = Rn(e, d);
        return c && !sy(k) ? "[" + Da(k, c) + "]" : "[ " + We.call(k, ", ") + " ]";
      }
      if (G0(e)) {
        var m = Rn(e, d);
        return !("cause" in Error.prototype) && "cause" in e && !Ic.call(e, "cause")
          ? "{ [" + String(e) + "] " + We.call(mc.call("[cause]: " + d(e.cause), m), ", ") + " }"
          : m.length === 0
          ? "[" + String(e) + "]"
          : "{ [" + String(e) + "] " + We.call(m, ", ") + " }";
      }
      if (typeof e == "object" && o) {
        if (xc && typeof e[xc] == "function" && Ra) return Ra(e, { depth: f - n });
        if (o !== "symbol" && typeof e.inspect == "function") return e.inspect();
      }
      if (ey(e)) {
        var _ = [];
        return (
          dc &&
            dc.call(e, function (W, Z) {
              _.push(d(Z, e, !0) + " => " + d(W, e));
            }),
          Sc("Map", Mn.call(e), _, c)
        );
      }
      if (ny(e)) {
        var P = [];
        return (
          pc &&
            pc.call(e, function (W) {
              P.push(d(W, e));
            }),
          Sc("Set", Dn.call(e), P, c)
        );
      }
      if (ty(e)) return Pa("WeakMap");
      if (iy(e)) return Pa("WeakSet");
      if (ry(e)) return Pa("WeakRef");
      if (Y0(e)) return Rr(d(Number(e)));
      if (X0(e)) return Rr(d(Ta.call(e)));
      if (J0(e)) return Rr(W0.call(e));
      if (K0(e)) return Rr(d(String(e)));
      if (!$0(e) && !Ac(e)) {
        var T = Rn(e, d),
          N = vc ? vc(e) === Object.prototype : e instanceof Object || e.constructor === Object,
          U = e instanceof Object ? "" : "null prototype",
          Y = !N && fe && Object(e) === e && fe in e ? ja.call(ft(e), 8, -1) : U ? "Object" : "",
          D = N || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
          X = D + (Y || U ? "[" + We.call(mc.call([], Y || [], U || []), ": ") + "] " : "");
        return T.length === 0 ? X + "{}" : c ? X + "{" + Da(T, c) + "}" : X + "{ " + We.call(T, ", ") + " }";
      }
      return String(e);
    };
    function kc(t, e, r) {
      var n = (r.quoteStyle || e) === "double" ? '"' : "'";
      return n + t + n;
    }
    function V0(t) {
      return ct.call(String(t), /"/g, "&quot;");
    }
    function Ma(t) {
      return ft(t) === "[object Array]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function $0(t) {
      return ft(t) === "[object Date]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function Ac(t) {
      return ft(t) === "[object RegExp]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function G0(t) {
      return ft(t) === "[object Error]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function K0(t) {
      return ft(t) === "[object String]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function Y0(t) {
      return ft(t) === "[object Number]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function J0(t) {
      return ft(t) === "[object Boolean]" && (!fe || !(typeof t == "object" && fe in t));
    }
    function qc(t) {
      if (Jt) return t && typeof t == "object" && t instanceof Symbol;
      if (typeof t == "symbol") return !0;
      if (!t || typeof t != "object" || !Ca) return !1;
      try {
        return Ca.call(t), !0;
      } catch {}
      return !1;
    }
    function X0(t) {
      if (!t || typeof t != "object" || !Ta) return !1;
      try {
        return Ta.call(t), !0;
      } catch {}
      return !1;
    }
    var Z0 =
      Object.prototype.hasOwnProperty ||
      function (t) {
        return t in this;
      };
    function ut(t, e) {
      return Z0.call(t, e);
    }
    function ft(t) {
      return U0.call(t);
    }
    function Q0(t) {
      if (t.name) return t.name;
      var e = B0.call(L0.call(t), /^function\s*([\w$]+)/);
      return e ? e[1] : null;
    }
    function Ec(t, e) {
      if (t.indexOf) return t.indexOf(e);
      for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
      return -1;
    }
    function ey(t) {
      if (!Mn || !t || typeof t != "object") return !1;
      try {
        Mn.call(t);
        try {
          Dn.call(t);
        } catch {
          return !0;
        }
        return t instanceof Map;
      } catch {}
      return !1;
    }
    function ty(t) {
      if (!Mr || !t || typeof t != "object") return !1;
      try {
        Mr.call(t, Mr);
        try {
          Dr.call(t, Dr);
        } catch {
          return !0;
        }
        return t instanceof WeakMap;
      } catch {}
      return !1;
    }
    function ry(t) {
      if (!hc || !t || typeof t != "object") return !1;
      try {
        return hc.call(t), !0;
      } catch {}
      return !1;
    }
    function ny(t) {
      if (!Dn || !t || typeof t != "object") return !1;
      try {
        Dn.call(t);
        try {
          Mn.call(t);
        } catch {
          return !0;
        }
        return t instanceof Set;
      } catch {}
      return !1;
    }
    function iy(t) {
      if (!Dr || !t || typeof t != "object") return !1;
      try {
        Dr.call(t, Dr);
        try {
          Mr.call(t, Mr);
        } catch {
          return !0;
        }
        return t instanceof WeakSet;
      } catch {}
      return !1;
    }
    function ay(t) {
      return !t || typeof t != "object"
        ? !1
        : typeof HTMLElement < "u" && t instanceof HTMLElement
        ? !0
        : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
    }
    function Oc(t, e) {
      if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength,
          n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return Oc(ja.call(t, 0, e.maxStringLength), e) + n;
      }
      var i = ct.call(ct.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, oy);
      return kc(i, "single", e);
    }
    function oy(t) {
      var e = t.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
      return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + H0.call(e.toString(16));
    }
    function Rr(t) {
      return "Object(" + t + ")";
    }
    function Pa(t) {
      return t + " { ? }";
    }
    function Sc(t, e, r, n) {
      var i = n ? Da(r, n) : We.call(r, ", ");
      return t + " (" + e + ") {" + i + "}";
    }
    function sy(t) {
      for (var e = 0; e < t.length; e++)
        if (
          Ec(
            t[e],
            `
`
          ) >= 0
        )
          return !1;
      return !0;
    }
    function ly(t, e) {
      var r;
      if (t.indent === "	") r = "	";
      else if (typeof t.indent == "number" && t.indent > 0) r = We.call(Array(t.indent + 1), " ");
      else return null;
      return { base: r, prev: We.call(Array(e + 1), r) };
    }
    function Da(t, e) {
      if (t.length === 0) return "";
      var r =
        `
` +
        e.prev +
        e.base;
      return (
        r +
        We.call(t, "," + r) +
        `
` +
        e.prev
      );
    }
    function Rn(t, e) {
      var r = Ma(t),
        n = [];
      if (r) {
        n.length = t.length;
        for (var i = 0; i < t.length; i++) n[i] = ut(t, i) ? e(t[i], t) : "";
      }
      var a = typeof Oa == "function" ? Oa(t) : [],
        o;
      if (Jt) {
        o = {};
        for (var s = 0; s < a.length; s++) o["$" + a[s]] = a[s];
      }
      for (var l in t)
        ut(t, l) &&
          ((r && String(Number(l)) === l && l < t.length) ||
            (Jt && o["$" + l] instanceof Symbol) ||
            (_c.call(/[^\w$]/, l) ? n.push(e(l, t) + ": " + e(t[l], t)) : n.push(l + ": " + e(t[l], t))));
      if (typeof Oa == "function") for (var u = 0; u < a.length; u++) Ic.call(t, a[u]) && n.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
      return n;
    }
  });
  var La = q((_4, Cc) => {
    "use strict";
    var Wa = Ce(),
      Xt = ve(),
      uy = Tc(),
      cy = Wa("%TypeError%"),
      Fn = Wa("%WeakMap%", !0),
      Nn = Wa("%Map%", !0),
      fy = Xt("WeakMap.prototype.get", !0),
      dy = Xt("WeakMap.prototype.set", !0),
      py = Xt("WeakMap.prototype.has", !0),
      hy = Xt("Map.prototype.get", !0),
      gy = Xt("Map.prototype.set", !0),
      my = Xt("Map.prototype.has", !0),
      Ua = function (t, e) {
        for (var r = t, n; (n = r.next) !== null; r = n) if (n.key === e) return (r.next = n.next), (n.next = t.next), (t.next = n), n;
      },
      yy = function (t, e) {
        var r = Ua(t, e);
        return r && r.value;
      },
      vy = function (t, e, r) {
        var n = Ua(t, e);
        n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
      },
      wy = function (t, e) {
        return !!Ua(t, e);
      };
    Cc.exports = function () {
      var e,
        r,
        n,
        i = {
          assert: function (a) {
            if (!i.has(a)) throw new cy("Side channel does not contain " + uy(a));
          },
          get: function (a) {
            if (Fn && a && (typeof a == "object" || typeof a == "function")) {
              if (e) return fy(e, a);
            } else if (Nn) {
              if (r) return hy(r, a);
            } else if (n) return yy(n, a);
          },
          has: function (a) {
            if (Fn && a && (typeof a == "object" || typeof a == "function")) {
              if (e) return py(e, a);
            } else if (Nn) {
              if (r) return my(r, a);
            } else if (n) return wy(n, a);
            return !1;
          },
          set: function (a, o) {
            Fn && a && (typeof a == "object" || typeof a == "function")
              ? (e || (e = new Fn()), dy(e, a, o))
              : Nn
              ? (r || (r = new Nn()), gy(r, a, o))
              : (n || (n = { key: {}, next: null }), vy(n, a, o));
          }
        };
      return i;
    };
  });
  var Mc = q((I4, Rc) => {
    "use strict";
    var by = Ce(),
      xy = pa(),
      Fr = La()(),
      Ze = by("%TypeError%"),
      Ba = {
        assert: function (t, e) {
          if (!t || (typeof t != "object" && typeof t != "function")) throw new Ze("`O` is not an object");
          if (typeof e != "string") throw new Ze("`slot` must be a string");
          if ((Fr.assert(t), !Ba.has(t, e))) throw new Ze("`" + e + "` is not present on `O`");
        },
        get: function (t, e) {
          if (!t || (typeof t != "object" && typeof t != "function")) throw new Ze("`O` is not an object");
          if (typeof e != "string") throw new Ze("`slot` must be a string");
          var r = Fr.get(t);
          return r && r["$" + e];
        },
        has: function (t, e) {
          if (!t || (typeof t != "object" && typeof t != "function")) throw new Ze("`O` is not an object");
          if (typeof e != "string") throw new Ze("`slot` must be a string");
          var r = Fr.get(t);
          return !!r && xy(r, "$" + e);
        },
        set: function (t, e, r) {
          if (!t || (typeof t != "object" && typeof t != "function")) throw new Ze("`O` is not an object");
          if (typeof e != "string") throw new Ze("`slot` must be a string");
          var n = Fr.get(t);
          n || ((n = {}), Fr.set(t, n)), (n["$" + e] = r);
        }
      };
    Object.freeze && Object.freeze(Ba);
    Rc.exports = Ba;
  });
  var Nc = q((k4, Fc) => {
    "use strict";
    var Nr = Mc(),
      Ay = SyntaxError,
      Dc = typeof StopIteration == "object" ? StopIteration : null;
    Fc.exports = function (e) {
      if (!Dc) throw new Ay("this environment lacks StopIteration");
      Nr.set(e, "[[Done]]", !1);
      var r = {
        next: function () {
          var i = Nr.get(this, "[[Iterator]]"),
            a = Nr.get(i, "[[Done]]");
          try {
            return { done: a, value: a ? void 0 : i.next() };
          } catch (o) {
            if ((Nr.set(i, "[[Done]]", !0), o !== Dc)) throw o;
            return { done: !0, value: void 0 };
          }
        }
      };
      return Nr.set(r, "[[Iterator]]", e), r;
    };
  });
  var Ha = q((q4, jc) => {
    var Sy = {}.toString;
    jc.exports =
      Array.isArray ||
      function (t) {
        return Sy.call(t) == "[object Array]";
      };
  });
  var za = q((E4, Wc) => {
    "use strict";
    var _y = String.prototype.valueOf,
      Iy = function (e) {
        try {
          return _y.call(e), !0;
        } catch {
          return !1;
        }
      },
      ky = Object.prototype.toString,
      qy = "[object String]",
      Ey = lt()();
    Wc.exports = function (e) {
      return typeof e == "string" ? !0 : typeof e != "object" ? !1 : Ey ? Iy(e) : ky.call(e) === qy;
    };
  });
  var $a = q((O4, Bc) => {
    "use strict";
    var Va = typeof Map == "function" && Map.prototype ? Map : null,
      Oy = typeof Set == "function" && Set.prototype ? Set : null,
      jn;
    Va ||
      (jn = function (e) {
        return !1;
      });
    var Lc = Va ? Map.prototype.has : null,
      Uc = Oy ? Set.prototype.has : null;
    !jn &&
      !Lc &&
      (jn = function (e) {
        return !1;
      });
    Bc.exports =
      jn ||
      function (e) {
        if (!e || typeof e != "object") return !1;
        try {
          if ((Lc.call(e), Uc))
            try {
              Uc.call(e);
            } catch {
              return !0;
            }
          return e instanceof Va;
        } catch {}
        return !1;
      };
  });
  var Ka = q((P4, Vc) => {
    "use strict";
    var Py = typeof Map == "function" && Map.prototype ? Map : null,
      Ga = typeof Set == "function" && Set.prototype ? Set : null,
      Wn;
    Ga ||
      (Wn = function (e) {
        return !1;
      });
    var Hc = Py ? Map.prototype.has : null,
      zc = Ga ? Set.prototype.has : null;
    !Wn &&
      !zc &&
      (Wn = function (e) {
        return !1;
      });
    Vc.exports =
      Wn ||
      function (e) {
        if (!e || typeof e != "object") return !1;
        try {
          if ((zc.call(e), Hc))
            try {
              Hc.call(e);
            } catch {
              return !0;
            }
          return e instanceof Ga;
        } catch {}
        return !1;
      };
  });
  var nf = q((T4, Bn) => {
    "use strict";
    var $c = ka(),
      Gc = Nc();
    qn()() || Or()()
      ? ((Un = Symbol.iterator),
        (Bn.exports = function (e) {
          if (e != null && typeof e[Un] < "u") return e[Un]();
          if ($c(e)) return Array.prototype[Un].call(e);
        }))
      : ((Kc = Ha()),
        (Yc = za()),
        (Ya = Ce()),
        (Jc = Ya("%Map%", !0)),
        (Xc = Ya("%Set%", !0)),
        (Se = ve()),
        (Ja = Se("Array.prototype.push")),
        (Xa = Se("String.prototype.charCodeAt")),
        (Zc = Se("String.prototype.slice")),
        (Qc = function (e, r) {
          var n = e.length;
          if (r + 1 >= n) return r + 1;
          var i = Xa(e, r);
          if (i < 55296 || i > 56319) return r + 1;
          var a = Xa(e, r + 1);
          return a < 56320 || a > 57343 ? r + 1 : r + 2;
        }),
        (Ln = function (e) {
          var r = 0;
          return {
            next: function () {
              var i = r >= e.length,
                a;
              return i || ((a = e[r]), (r += 1)), { done: i, value: a };
            }
          };
        }),
        (Za = function (e, r) {
          if (Kc(e) || $c(e)) return Ln(e);
          if (Yc(e)) {
            var n = 0;
            return {
              next: function () {
                var a = Qc(e, n),
                  o = Zc(e, n, a);
                return (n = a), { done: a > e.length, value: o };
              }
            };
          }
          if (r && typeof e["_es6-shim iterator_"] < "u") return e["_es6-shim iterator_"]();
        }),
        !Jc && !Xc
          ? (Bn.exports = function (e) {
              if (e != null) return Za(e, !0);
            })
          : ((ef = $a()),
            (tf = Ka()),
            (Qa = Se("Map.prototype.forEach", !0)),
            (eo = Se("Set.prototype.forEach", !0)),
            (typeof process > "u" || !process.versions || !process.versions.node) &&
              ((to = Se("Map.prototype.iterator", !0)), (ro = Se("Set.prototype.iterator", !0))),
            (no = Se("Map.prototype.@@iterator", !0) || Se("Map.prototype._es6-shim iterator_", !0)),
            (io = Se("Set.prototype.@@iterator", !0) || Se("Set.prototype._es6-shim iterator_", !0)),
            (rf = function (e) {
              if (ef(e)) {
                if (to) return Gc(to(e));
                if (no) return no(e);
                if (Qa) {
                  var r = [];
                  return (
                    Qa(e, function (i, a) {
                      Ja(r, [a, i]);
                    }),
                    Ln(r)
                  );
                }
              }
              if (tf(e)) {
                if (ro) return Gc(ro(e));
                if (io) return io(e);
                if (eo) {
                  var n = [];
                  return (
                    eo(e, function (i) {
                      Ja(n, i);
                    }),
                    Ln(n)
                  );
                }
              }
            }),
            (Bn.exports = function (e) {
              return rf(e) || Za(e);
            })));
    var Un, Kc, Yc, Ya, Jc, Xc, Se, Ja, Xa, Zc, Qc, Ln, Za, ef, tf, Qa, eo, to, ro, no, io, rf;
  });
  var ao = q((C4, of) => {
    "use strict";
    var af = function (t) {
      return t !== t;
    };
    of.exports = function (e, r) {
      return e === 0 && r === 0 ? 1 / e === 1 / r : !!(e === r || (af(e) && af(r)));
    };
  });
  var oo = q((R4, sf) => {
    "use strict";
    var Ty = ao();
    sf.exports = function () {
      return typeof Object.is == "function" ? Object.is : Ty;
    };
  });
  var uf = q((M4, lf) => {
    "use strict";
    var Cy = oo(),
      Ry = st();
    lf.exports = function () {
      var e = Cy();
      return (
        Ry(
          Object,
          { is: e },
          {
            is: function () {
              return Object.is !== e;
            }
          }
        ),
        e
      );
    };
  });
  var pf = q((D4, df) => {
    "use strict";
    var My = st(),
      Dy = Tt(),
      Fy = ao(),
      cf = oo(),
      Ny = uf(),
      ff = Dy(cf(), Object);
    My(ff, { getPolyfill: cf, implementation: Fy, shim: Ny });
    df.exports = ff;
  });
  var yf = q((F4, mf) => {
    "use strict";
    var gf = Function.prototype.toString,
      Zt = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
      lo,
      Hn;
    if (typeof Zt == "function" && typeof Object.defineProperty == "function")
      try {
        (lo = Object.defineProperty({}, "length", {
          get: function () {
            throw Hn;
          }
        })),
          (Hn = {}),
          Zt(
            function () {
              throw 42;
            },
            null,
            lo
          );
      } catch (t) {
        t !== Hn && (Zt = null);
      }
    else Zt = null;
    var jy = /^\s*class\b/,
      uo = function (e) {
        try {
          var r = gf.call(e);
          return jy.test(r);
        } catch {
          return !1;
        }
      },
      so = function (e) {
        try {
          return uo(e) ? !1 : (gf.call(e), !0);
        } catch {
          return !1;
        }
      },
      zn = Object.prototype.toString,
      Wy = "[object Object]",
      Uy = "[object Function]",
      Ly = "[object GeneratorFunction]",
      By = "[object HTMLAllCollection]",
      Hy = "[object HTML document.all class]",
      zy = "[object HTMLCollection]",
      Vy = typeof Symbol == "function" && !!Symbol.toStringTag,
      $y = !(0 in [,]),
      co = function () {
        return !1;
      };
    typeof document == "object" &&
      ((hf = document.all),
      zn.call(hf) === zn.call(document.all) &&
        (co = function (e) {
          if (($y || !e) && (typeof e > "u" || typeof e == "object"))
            try {
              var r = zn.call(e);
              return (r === By || r === Hy || r === zy || r === Wy) && e("") == null;
            } catch {}
          return !1;
        }));
    var hf;
    mf.exports = Zt
      ? function (e) {
          if (co(e)) return !0;
          if (!e || (typeof e != "function" && typeof e != "object")) return !1;
          try {
            Zt(e, null, lo);
          } catch (r) {
            if (r !== Hn) return !1;
          }
          return !uo(e) && so(e);
        }
      : function (e) {
          if (co(e)) return !0;
          if (!e || (typeof e != "function" && typeof e != "object")) return !1;
          if (Vy) return so(e);
          if (uo(e)) return !1;
          var r = zn.call(e);
          return r !== Uy && r !== Ly && !/^\[object HTML/.test(r) ? !1 : so(e);
        };
  });
  var bf = q((N4, wf) => {
    "use strict";
    var Gy = yf(),
      Ky = Object.prototype.toString,
      vf = Object.prototype.hasOwnProperty,
      Yy = function (e, r, n) {
        for (var i = 0, a = e.length; i < a; i++) vf.call(e, i) && (n == null ? r(e[i], i, e) : r.call(n, e[i], i, e));
      },
      Jy = function (e, r, n) {
        for (var i = 0, a = e.length; i < a; i++) n == null ? r(e.charAt(i), i, e) : r.call(n, e.charAt(i), i, e);
      },
      Xy = function (e, r, n) {
        for (var i in e) vf.call(e, i) && (n == null ? r(e[i], i, e) : r.call(n, e[i], i, e));
      },
      Zy = function (e, r, n) {
        if (!Gy(r)) throw new TypeError("iterator must be a function");
        var i;
        arguments.length >= 3 && (i = n), Ky.call(e) === "[object Array]" ? Yy(e, r, i) : typeof e == "string" ? Jy(e, r, i) : Xy(e, r, i);
      };
    wf.exports = Zy;
  });
  var Af = q((j4, xf) => {
    "use strict";
    var fo = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
      ],
      Qy = typeof globalThis > "u" ? global : globalThis;
    xf.exports = function () {
      for (var e = [], r = 0; r < fo.length; r++) typeof Qy[fo[r]] == "function" && (e[e.length] = fo[r]);
      return e;
    };
  });
  var _f = q((W4, Sf) => {
    "use strict";
    var ev = Ce(),
      Vn = ev("%Object.getOwnPropertyDescriptor%", !0);
    if (Vn)
      try {
        Vn([], "length");
      } catch {
        Vn = null;
      }
    Sf.exports = Vn;
  });
  var yo = q((U4, Ef) => {
    "use strict";
    var Gn = bf(),
      tv = Af(),
      If = Tt(),
      go = ve(),
      $n = _f(),
      rv = go("Object.prototype.toString"),
      qf = lt()(),
      kf = typeof globalThis > "u" ? global : globalThis,
      ho = tv(),
      mo = go("String.prototype.slice"),
      po = Object.getPrototypeOf,
      nv =
        go("Array.prototype.indexOf", !0) ||
        function (e, r) {
          for (var n = 0; n < e.length; n += 1) if (e[n] === r) return n;
          return -1;
        },
      Kn = { __proto__: null };
    qf && $n && po
      ? Gn(ho, function (t) {
          var e = new kf[t]();
          if (Symbol.toStringTag in e) {
            var r = po(e),
              n = $n(r, Symbol.toStringTag);
            if (!n) {
              var i = po(r);
              n = $n(i, Symbol.toStringTag);
            }
            Kn["$" + t] = If(n.get);
          }
        })
      : Gn(ho, function (t) {
          var e = new kf[t]();
          Kn["$" + t] = If(e.slice);
        });
    var iv = function (e) {
        var r = !1;
        return (
          Gn(Kn, function (n, i) {
            if (!r)
              try {
                "$" + n(e) === i && (r = mo(i, 1));
              } catch {}
          }),
          r
        );
      },
      av = function (e) {
        var r = !1;
        return (
          Gn(Kn, function (n, i) {
            if (!r)
              try {
                n(e), (r = mo(i, 1));
              } catch {}
          }),
          r
        );
      };
    Ef.exports = function (e) {
      if (!e || typeof e != "object") return !1;
      if (!qf) {
        var r = mo(rv(e), 8, -1);
        return nv(ho, r) > -1 ? r : r !== "Object" ? !1 : av(e);
      }
      return $n ? iv(e) : null;
    };
  });
  var Pf = q((L4, Of) => {
    "use strict";
    var ov = yo();
    Of.exports = function (e) {
      return !!ov(e);
    };
  });
  var vo = q((B4, Ff) => {
    "use strict";
    var sv = Tt(),
      lv = ve(),
      Df = Ce(),
      uv = Pf(),
      Tf = Df("ArrayBuffer", !0),
      Cf = Df("Float32Array", !0),
      Yn = lv("ArrayBuffer.prototype.byteLength", !0),
      Rf = Tf && !Yn && new Tf().slice,
      Mf = Rf && sv(Rf);
    Ff.exports =
      Yn || Mf
        ? function (e) {
            if (!e || typeof e != "object") return !1;
            try {
              return Yn ? Yn(e) : Mf(e, 0), !0;
            } catch {
              return !1;
            }
          }
        : Cf
        ? function (e) {
            try {
              return new Cf(e).buffer === e && !uv(e);
            } catch (r) {
              return typeof e == "object" && r.name === "RangeError";
            }
          }
        : function (e) {
            return !1;
          };
  });
  var jf = q((H4, Nf) => {
    "use strict";
    var cv = Date.prototype.getDay,
      fv = function (e) {
        try {
          return cv.call(e), !0;
        } catch {
          return !1;
        }
      },
      dv = Object.prototype.toString,
      pv = "[object Date]",
      hv = lt()();
    Nf.exports = function (e) {
      return typeof e != "object" || e === null ? !1 : hv ? fv(e) : dv.call(e) === pv;
    };
  });
  var Hf = q((z4, Bf) => {
    "use strict";
    var wo = ve(),
      Wf = lt()(),
      Uf,
      Lf,
      bo,
      xo;
    Wf &&
      ((Uf = wo("Object.prototype.hasOwnProperty")),
      (Lf = wo("RegExp.prototype.exec")),
      (bo = {}),
      (Jn = function () {
        throw bo;
      }),
      (xo = { toString: Jn, valueOf: Jn }),
      typeof Symbol.toPrimitive == "symbol" && (xo[Symbol.toPrimitive] = Jn));
    var Jn,
      gv = wo("Object.prototype.toString"),
      mv = Object.getOwnPropertyDescriptor,
      yv = "[object RegExp]";
    Bf.exports = Wf
      ? function (e) {
          if (!e || typeof e != "object") return !1;
          var r = mv(e, "lastIndex"),
            n = r && Uf(r, "value");
          if (!n) return !1;
          try {
            Lf(e, xo);
          } catch (i) {
            return i === bo;
          }
        }
      : function (e) {
          return !e || (typeof e != "object" && typeof e != "function") ? !1 : gv(e) === yv;
        };
  });
  var $f = q((V4, Vf) => {
    "use strict";
    var vv = ve(),
      zf = vv("SharedArrayBuffer.prototype.byteLength", !0);
    Vf.exports = zf
      ? function (e) {
          if (!e || typeof e != "object") return !1;
          try {
            return zf(e), !0;
          } catch {
            return !1;
          }
        }
      : function (e) {
          return !1;
        };
  });
  var Kf = q(($4, Gf) => {
    "use strict";
    var wv = Number.prototype.toString,
      bv = function (e) {
        try {
          return wv.call(e), !0;
        } catch {
          return !1;
        }
      },
      xv = Object.prototype.toString,
      Av = "[object Number]",
      Sv = lt()();
    Gf.exports = function (e) {
      return typeof e == "number" ? !0 : typeof e != "object" ? !1 : Sv ? bv(e) : xv.call(e) === Av;
    };
  });
  var Xf = q((G4, Jf) => {
    "use strict";
    var Yf = ve(),
      _v = Yf("Boolean.prototype.toString"),
      Iv = Yf("Object.prototype.toString"),
      kv = function (e) {
        try {
          return _v(e), !0;
        } catch {
          return !1;
        }
      },
      qv = "[object Boolean]",
      Ev = lt()();
    Jf.exports = function (e) {
      return typeof e == "boolean" ? !0 : e === null || typeof e != "object" ? !1 : Ev && Symbol.toStringTag in e ? kv(e) : Iv(e) === qv;
    };
  });
  var td = q((K4, Ao) => {
    "use strict";
    var Ov = Object.prototype.toString,
      Pv = qn()();
    Pv
      ? ((Zf = Symbol.prototype.toString),
        (Qf = /^Symbol\(.*\)$/),
        (ed = function (e) {
          return typeof e.valueOf() != "symbol" ? !1 : Qf.test(Zf.call(e));
        }),
        (Ao.exports = function (e) {
          if (typeof e == "symbol") return !0;
          if (Ov.call(e) !== "[object Symbol]") return !1;
          try {
            return ed(e);
          } catch {
            return !1;
          }
        }))
      : (Ao.exports = function (e) {
          return !1;
        });
    var Zf, Qf, ed;
  });
  var id = q((Y4, nd) => {
    "use strict";
    var rd = typeof BigInt < "u" && BigInt;
    nd.exports = function () {
      return typeof rd == "function" && typeof BigInt == "function" && typeof rd(42) == "bigint" && typeof BigInt(42) == "bigint";
    };
  });
  var sd = q((J4, So) => {
    "use strict";
    var Tv = id()();
    Tv
      ? ((ad = BigInt.prototype.valueOf),
        (od = function (e) {
          try {
            return ad.call(e), !0;
          } catch {}
          return !1;
        }),
        (So.exports = function (e) {
          return e === null ||
            typeof e > "u" ||
            typeof e == "boolean" ||
            typeof e == "string" ||
            typeof e == "number" ||
            typeof e == "symbol" ||
            typeof e == "function"
            ? !1
            : typeof e == "bigint"
            ? !0
            : od(e);
        }))
      : (So.exports = function (e) {
          return !1;
        });
    var ad, od;
  });
  var ud = q((X4, ld) => {
    "use strict";
    var Cv = za(),
      Rv = Kf(),
      Mv = Xf(),
      Dv = td(),
      Fv = sd();
    ld.exports = function (e) {
      if (e == null || (typeof e != "object" && typeof e != "function")) return null;
      if (Cv(e)) return "String";
      if (Rv(e)) return "Number";
      if (Mv(e)) return "Boolean";
      if (Dv(e)) return "Symbol";
      if (Fv(e)) return "BigInt";
    };
  });
  var dd = q((Z4, fd) => {
    "use strict";
    var Xn = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null,
      cd = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null,
      Zn;
    Xn ||
      (Zn = function (e) {
        return !1;
      });
    var Io = Xn ? Xn.prototype.has : null,
      _o = cd ? cd.prototype.has : null;
    !Zn &&
      !Io &&
      (Zn = function (e) {
        return !1;
      });
    fd.exports =
      Zn ||
      function (e) {
        if (!e || typeof e != "object") return !1;
        try {
          if ((Io.call(e, Io), _o))
            try {
              _o.call(e, _o);
            } catch {
              return !0;
            }
          return e instanceof Xn;
        } catch {}
        return !1;
      };
  });
  var hd = q((Q4, qo) => {
    "use strict";
    var Nv = Ce(),
      pd = ve(),
      jv = Nv("%WeakSet%", !0),
      ko = pd("WeakSet.prototype.has", !0);
    ko
      ? ((Qn = pd("WeakMap.prototype.has", !0)),
        (qo.exports = function (e) {
          if (!e || typeof e != "object") return !1;
          try {
            if ((ko(e, ko), Qn))
              try {
                Qn(e, Qn);
              } catch {
                return !0;
              }
            return e instanceof jv;
          } catch {}
          return !1;
        }))
      : (qo.exports = function (e) {
          return !1;
        });
    var Qn;
  });
  var md = q((e9, gd) => {
    "use strict";
    var Wv = $a(),
      Uv = Ka(),
      Lv = dd(),
      Bv = hd();
    gd.exports = function (e) {
      if (e && typeof e == "object") {
        if (Wv(e)) return "Map";
        if (Uv(e)) return "Set";
        if (Lv(e)) return "WeakMap";
        if (Bv(e)) return "WeakSet";
      }
      return !1;
    };
  });
  var wd = q((t9, vd) => {
    "use strict";
    var Hv = ve(),
      yd = Hv("ArrayBuffer.prototype.byteLength", !0),
      zv = vo();
    vd.exports = function (e) {
      return zv(e) ? (yd ? yd(e) : e.byteLength) : NaN;
    };
  });
  var Po = q((r9, Hd) => {
    "use strict";
    var Ud = Xu(),
      Ue = ve(),
      bd = sc(),
      Vv = Ce(),
      Qt = nf(),
      $v = La(),
      xd = pf(),
      Ad = ka(),
      Sd = Ha(),
      _d = vo(),
      Id = jf(),
      kd = Hf(),
      qd = $f(),
      Ed = kn(),
      Od = ud(),
      Pd = md(),
      Td = yo(),
      Cd = wd(),
      Rd = Ue("SharedArrayBuffer.prototype.byteLength", !0),
      Md = Ue("Date.prototype.getTime"),
      Eo = Object.getPrototypeOf,
      Dd = Ue("Object.prototype.toString"),
      ti = Vv("%Set%", !0),
      Oo = Ue("Map.prototype.has", !0),
      ri = Ue("Map.prototype.get", !0),
      Fd = Ue("Map.prototype.size", !0),
      ni = Ue("Set.prototype.add", !0),
      Ld = Ue("Set.prototype.delete", !0),
      ii = Ue("Set.prototype.has", !0),
      ei = Ue("Set.prototype.size", !0);
    function Nd(t, e, r, n) {
      for (var i = Qt(t), a; (a = i.next()) && !a.done; ) if (Re(e, a.value, r, n)) return Ld(t, a.value), !0;
      return !1;
    }
    function Bd(t) {
      if (typeof t > "u") return null;
      if (typeof t != "object") return typeof t == "symbol" ? !1 : typeof t == "string" || typeof t == "number" ? +t == +t : !0;
    }
    function Gv(t, e, r, n, i, a) {
      var o = Bd(r);
      if (o != null) return o;
      var s = ri(e, o),
        l = Ud({}, i, { strict: !1 });
      return (typeof s > "u" && !Oo(e, o)) || !Re(n, s, l, a) ? !1 : !Oo(t, o) && Re(n, s, l, a);
    }
    function Kv(t, e, r) {
      var n = Bd(r);
      return n ?? (ii(e, n) && !ii(t, n));
    }
    function jd(t, e, r, n, i, a) {
      for (var o = Qt(t), s, l; (s = o.next()) && !s.done; )
        if (((l = s.value), Re(r, l, i, a) && Re(n, ri(e, l), i, a))) return Ld(t, l), !0;
      return !1;
    }
    function Re(t, e, r, n) {
      var i = r || {};
      if (i.strict ? xd(t, e) : t === e) return !0;
      var a = Od(t),
        o = Od(e);
      if (a !== o) return !1;
      if (!t || !e || (typeof t != "object" && typeof e != "object")) return i.strict ? xd(t, e) : t == e;
      var s = n.has(t),
        l = n.has(e),
        u;
      if (s && l) {
        if (n.get(t) === n.get(e)) return !0;
      } else u = {};
      return s || n.set(t, u), l || n.set(e, u), Xv(t, e, i, n);
    }
    function Wd(t) {
      return !t ||
        typeof t != "object" ||
        typeof t.length != "number" ||
        typeof t.copy != "function" ||
        typeof t.slice != "function" ||
        (t.length > 0 && typeof t[0] != "number")
        ? !1
        : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
    }
    function Yv(t, e, r, n) {
      if (ei(t) !== ei(e)) return !1;
      for (var i = Qt(t), a = Qt(e), o, s, l; (o = i.next()) && !o.done; )
        if (o.value && typeof o.value == "object") l || (l = new ti()), ni(l, o.value);
        else if (!ii(e, o.value)) {
          if (r.strict || !Kv(t, e, o.value)) return !1;
          l || (l = new ti()), ni(l, o.value);
        }
      if (l) {
        for (; (s = a.next()) && !s.done; )
          if (s.value && typeof s.value == "object") {
            if (!Nd(l, s.value, r.strict, n)) return !1;
          } else if (!r.strict && !ii(t, s.value) && !Nd(l, s.value, r.strict, n)) return !1;
        return ei(l) === 0;
      }
      return !0;
    }
    function Jv(t, e, r, n) {
      if (Fd(t) !== Fd(e)) return !1;
      for (var i = Qt(t), a = Qt(e), o, s, l, u, f, c; (o = i.next()) && !o.done; )
        if (((u = o.value[0]), (f = o.value[1]), u && typeof u == "object")) l || (l = new ti()), ni(l, u);
        else if (((c = ri(e, u)), (typeof c > "u" && !Oo(e, u)) || !Re(f, c, r, n))) {
          if (r.strict || !Gv(t, e, u, f, r, n)) return !1;
          l || (l = new ti()), ni(l, u);
        }
      if (l) {
        for (; (s = a.next()) && !s.done; )
          if (((u = s.value[0]), (c = s.value[1]), u && typeof u == "object")) {
            if (!jd(l, t, u, c, r, n)) return !1;
          } else if (!r.strict && (!t.has(u) || !Re(ri(t, u), c, r, n)) && !jd(l, t, u, c, Ud({}, r, { strict: !1 }), n)) return !1;
        return ei(l) === 0;
      }
      return !0;
    }
    function Xv(t, e, r, n) {
      var i, a;
      if (typeof t != typeof e || t == null || e == null || Dd(t) !== Dd(e) || Ad(t) !== Ad(e)) return !1;
      var o = Sd(t),
        s = Sd(e);
      if (o !== s) return !1;
      var l = t instanceof Error,
        u = e instanceof Error;
      if (l !== u || ((l || u) && (t.name !== e.name || t.message !== e.message))) return !1;
      var f = kd(t),
        c = kd(e);
      if (f !== c || ((f || c) && (t.source !== e.source || bd(t) !== bd(e)))) return !1;
      var d = Id(t),
        v = Id(e);
      if (d !== v || ((d || v) && Md(t) !== Md(e)) || (r.strict && Eo && Eo(t) !== Eo(e))) return !1;
      var x = Td(t),
        A = Td(e);
      if (x !== A) return !1;
      if (x || A) {
        if (t.length !== e.length) return !1;
        for (i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      var g = Wd(t),
        p = Wd(e);
      if (g !== p) return !1;
      if (g || p) {
        if (t.length !== e.length) return !1;
        for (i = 0; i < t.length; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      var w = _d(t),
        k = _d(e);
      if (w !== k) return !1;
      if (w || k) return Cd(t) !== Cd(e) ? !1 : typeof Uint8Array == "function" && Re(new Uint8Array(t), new Uint8Array(e), r, n);
      var m = qd(t),
        _ = qd(e);
      if (m !== _) return !1;
      if (m || _) return Rd(t) !== Rd(e) ? !1 : typeof Uint8Array == "function" && Re(new Uint8Array(t), new Uint8Array(e), r, n);
      if (typeof t != typeof e) return !1;
      var P = Ed(t),
        T = Ed(e);
      if (P.length !== T.length) return !1;
      for (P.sort(), T.sort(), i = P.length - 1; i >= 0; i--) if (P[i] != T[i]) return !1;
      for (i = P.length - 1; i >= 0; i--) if (((a = P[i]), !Re(t[a], e[a], r, n))) return !1;
      var N = Pd(t),
        U = Pd(e);
      return N !== U ? !1 : N === "Set" || U === "Set" ? Yv(t, e, r, n) : N === "Map" ? Jv(t, e, r, n) : !0;
    }
    Hd.exports = function (e, r, n) {
      return Re(e, r, n, $v());
    };
  });
  var Vd = {};
  H(Vd, { removeOriginAndReferrerSetterForUrl: () => ew, setOriginAndReferrerSetterForUrl: () => Qv });
  async function Qv(t, e, r) {
    if (!(!e && !r))
      if (zd) {
        let n = [];
        e && n.push({ operation: "set", header: "origin", value: e }), r && n.push({ operation: "set", header: "referer", value: r });
        let i = Zv++,
          a = {
            id: i,
            priority: 1,
            action: { type: "modifyHeaders", requestHeaders: n },
            condition: { urlFilter: t, resourceTypes: ["xmlhttprequest"] }
          };
        await jr.declarativeNetRequest.updateSessionRules({ addRules: [a] }), Co.set(t, [i]);
      } else {
        let n = (i) => {
          let a = i.requestHeaders.filter((o) => o.name != "origin" && o.name != "referer");
          return e && a.push({ name: "origin", value: e }), r && a.push({ name: "referer", value: r }), { requestHeaders: a };
        };
        To.set(t, n), jr.webRequest.onBeforeSendHeaders.addListener(n, { urls: [t] }, ["blocking", "requestHeaders"]);
      }
  }
  async function ew(t) {
    if (zd) {
      let e = Co.get(t);
      e && (Co.delete(t), await jr.declarativeNetRequest.updateSessionRules({ removeRuleIds: e }));
    } else {
      let e = To.get(t);
      e && (To.delete(e), jr.webRequest.onBeforeSendHeaders.removeListener(e));
    }
  }
  var jr,
    To,
    Co,
    Zv,
    zd,
    $d = B(() => {
      ({ browser: jr } = z()), (To = new Map()), (Co = new Map()), (Zv = 1), (zd = jr.runtime.getManifest().manifest_version >= 3);
    });
  var ae = {};
  H(ae, {
    Cache: () => Ro,
    Concurrent: () => gw,
    DetailsError: () => Fo,
    VDHError: () => ai,
    arrayEquals: () => sw,
    bufferToHex: () => hw,
    downloadToByteArray: () => pw,
    equals: () => lw,
    executeScriptWithGlobal: () => yw,
    fromByteArray: () => cw,
    generateRandomString: () => Yd,
    gotoOrOpenTab: () => ow,
    gotoTab: () => Kd,
    hash: () => Gd,
    hashHex: () => aw,
    headerSubsSalt: () => dw,
    isMinimumVersion: () => mw,
    request: () => Jd,
    toByteArray: () => uw
  });
  function Gd(t) {
    let e = 0,
      r,
      n,
      i;
    if (t.length === 0) return e;
    for (r = 0, i = t.length; r < i; r++) (n = t.charCodeAt(r)), (e = (e << 5) - e + n), (e |= 0);
    return e;
  }
  function aw(t) {
    return Math.abs(Gd(t)).toString(16);
  }
  function Kd(t) {
    return _e.tabs
      .query({ url: t })
      .then((e) => (e.length > 0 ? (_e.tabs.update(e[0].id, { active: !0 }), _e.windows.update(e[0].windowId, { focused: !0 }), !0) : !1));
  }
  function ow(t, e = null) {
    let r = 0;
    function n() {
      return _e.windows
        .getLastFocused({ windowTypes: ["normal"] })
        .then((i) =>
          i.type != "normal"
            ? ++r < 20
              ? new Promise((a, o) => {
                  setTimeout(() => n(), 100);
                })
              : new Promise((a, o) => {
                  _e.windows.getAll({ windowTypes: ["normal"] }).then((s) => {
                    if (s.every((l) => (l.type == "normal" ? (a(l.id), !1) : !0))) throw new Error("No normal window to open tab");
                  });
                })
            : i.id
        )
        .then((i) => {
          let a = null;
          if (i)
            return _e.tabs.query({ active: !0, lastFocusedWindow: !0 }).then(
              (o) => (
                o.length > 0 && (a = o[0].id),
                new Promise((s, l) => {
                  let u = null,
                    f = (c, d, v) => {
                      c == u && d.status === "complete" && (_e.tabs.onUpdated.removeListener(f), s(v));
                    };
                  _e.tabs.onUpdated.addListener(f),
                    _e.tabs.create({ url: t, windowId: i }).then((c) => {
                      c.status === "complete" ? (_e.tabs.onUpdated.removeListener(f), s(c)) : (u = c.id);
                    });
                }).then((s) => {
                  a && e && e(s.id, a);
                })
              )
            );
        });
    }
    return Kd(t).then((i) => (i ? Promise.resolve() : n()));
  }
  function sw(t, e) {
    if (t.length !== e.length) return !1;
    for (let r = 0, n = t.length; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function lw(t, e) {
    return rw(t, e);
  }
  function Yd(t) {
    let e = new Uint8Array(t);
    crypto.getRandomValues(e);
    let r = "";
    for (let n = 0; n < e.length; n++) r += ("0" + e[n].toString(16)).slice(-2);
    return r.substring(0, t);
  }
  async function Jd(t) {
    let e = "include";
    t.anonymous && (e = "omit");
    let r = t.url,
      n = t.method || "GET",
      i = "",
      a = new Headers();
    if (t.headers) {
      if (t.headers instanceof Array) for (let l of t.headers) a.append(l.name, l.value);
      else a = new Headers(t.headers);
      a.has("referer") && (i = a.get("referer")), a.has("referrer") && (i = a.get("referrer"));
      for (let l of fw) a.delete(l);
    }
    let o;
    t.contentJSON ? (o = JSON.stringify(t.contentJSON)) : t.content && (o = t.content), await nw(r, a.get("origin"), i);
    let s;
    try {
      s = await fetch(r, { referrer: i, method: n, headers: a, body: o, credentials: e });
    } finally {
      await iw(r);
    }
    return s;
  }
  async function pw(t, e, r) {
    let n = await Jd({ url: t, headers: e, anonymous: r });
    if (!n.ok) throw new Error("Request response status " + n.status);
    let i = await n.arrayBuffer();
    if (!i) throw new Error("Empty/no response");
    return new Uint8Array(i);
  }
  function hw(t) {
    let e = [],
      r = new DataView(t);
    for (let n = 0; n < r.byteLength; n += 4) {
      let a = r.getUint32(n).toString(16),
        o = "00000000",
        s = (o + a).slice(-o.length);
      e.push(s);
    }
    return e.join("");
  }
  function gw(...t) {
    let e = new Mo(...t);
    return e.callFn().bind(e);
  }
  function mw(t, e) {
    let r = t.split(".").map((i) => parseInt(i)),
      n = e.split(".").map((i) => parseInt(i));
    for (let i = 0; i < r.length; i++) {
      if (typeof n[i] > "u" || r[i] > n[i]) return !0;
      if (r[i] < n[i]) return !1;
    }
    return !0;
  }
  async function yw(t, e, r) {
    let n = (s) => s && typeof s == "object",
      i = (s) => JSON.parse(JSON.stringify(s));
    if (!n(e)) throw new Error("global argument is not an object");
    e = i(e);
    let o = {
      target: t,
      func: (s) => {
        Object.assign(window, s);
      },
      args: [e]
    };
    await _e.scripting.executeScript(o), (o = { target: t, files: [r] }), await _e.scripting.executeScript(o);
  }
  var tw,
    _e,
    rw,
    nw,
    iw,
    uw,
    cw,
    fw,
    dw,
    Ro,
    Mo,
    Do,
    ai,
    Fo,
    oe = B(() => {
      (tw = z()),
        (_e = tw.browser),
        (rw = Po()),
        ({ setOriginAndReferrerSetterForUrl: nw, removeOriginAndReferrerSetterForUrl: iw } = ($d(), S(Vd)));
      ({ toByteArray: uw, fromByteArray: cw } = (() => {
        let t,
          e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          r = [];
        for (t = 0; t < e.length; t++) r[t] = e[t];
        let n = [];
        for (t = 0; t < e.length; ++t) n[e.charCodeAt(t)] = t;
        (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        let i = typeof Uint8Array < "u" ? Uint8Array : Array;
        function a(c) {
          let d = n[c.charCodeAt(0)];
          return d !== void 0 ? d : -1;
        }
        function o(c) {
          let d, v, x, A, g, p;
          if (c.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          let w = c.length;
          (g = c.charAt(w - 2) === "=" ? 2 : c.charAt(w - 1) === "=" ? 1 : 0),
            (p = new i((c.length * 3) / 4 - g)),
            (x = g > 0 ? c.length - 4 : c.length);
          let k = 0;
          function m(_) {
            p[k++] = _;
          }
          for (d = 0, v = 0; d < x; d += 4, v += 3)
            (A = (a(c.charAt(d)) << 18) | (a(c.charAt(d + 1)) << 12) | (a(c.charAt(d + 2)) << 6) | a(c.charAt(d + 3))),
              m(((A & 16711680) >>> 16) >>> 0),
              m(((A & 65280) >>> 8) >>> 0),
              m((A & 255) >>> 0);
          return (
            g === 2
              ? ((A = (a(c.charAt(d)) << 2) | ((a(c.charAt(d + 1)) >>> 4) >>> 0)), m(A & 255))
              : g === 1 &&
                ((A = (a(c.charAt(d)) << 10) | (a(c.charAt(d + 1)) << 4) | ((a(c.charAt(d + 2)) >>> 2) >>> 0)),
                m(((A >>> 8) >>> 0) & 255),
                m(A & 255)),
            p
          );
        }
        function s(c) {
          return r[c];
        }
        function l(c) {
          return s(((c >>> 18) >>> 0) & 63) + s(((c >>> 12) >>> 0) & 63) + s(((c >>> 6) >>> 0) & 63) + s(c & 63);
        }
        function u(c, d, v) {
          let x,
            A = [];
          for (let g = d; g < v; g += 3) (x = (c[g] << 16) + (c[g + 1] << 8) + c[g + 2]), A.push(l(x));
          return A.join("");
        }
        function f(c) {
          let d,
            v = c.length % 3,
            x = "",
            A = [],
            g,
            p,
            w = 16383;
          for (d = 0, p = c.length - v; d < p; d += w) A.push(u(c, d, d + w > p ? p : d + w));
          switch (v) {
            case 1:
              (g = c[c.length - 1]), (x += s((g >>> 2) >>> 0)), (x += s((g << 4) & 63)), (x += "==");
              break;
            case 2:
              (g = (c[c.length - 2] << 8) + c[c.length - 1]),
                (x += s((g >>> 10) >>> 0)),
                (x += s(((g >>> 4) >>> 0) & 63)),
                (x += s((g << 2) & 63)),
                (x += "=");
              break;
            default:
              break;
          }
          return A.push(x), A.join("");
        }
        return { toByteArray: o, fromByteArray: f };
      })()),
        (fw = [
          "Accept-Charset",
          "Accept-Encoding",
          "Access-Control-Request-Headers",
          "Access-Control-Request-Method",
          "Connection",
          "Content-Length",
          "Cookie",
          "Cookie2",
          "Date",
          "DNT",
          "Expect",
          "Host",
          "Keep-Alive",
          "Referer",
          "TE",
          "Trailer",
          "Transfer-Encoding",
          "Upgrade",
          "Via",
          "x-chrome-uma-enabled",
          "x-client-data"
        ]);
      dw = Yd(8);
      (Ro = class {
        constructor(e, r) {
          (this.getFn = e), (this.setFn = r), (this.callbacks = []), (this.queried = !1), (this.value = void 0);
        }
        get() {
          let e = this;
          return () =>
            typeof e.value < "u"
              ? Promise.resolve(e.value)
              : new Promise((r, n) => {
                  if ((e.callbacks.push({ resolve: r, reject: n }), !e.queried)) {
                    e.queried = !0;
                    try {
                      Promise.resolve(e.getFn())
                        .then((i) => {
                          for (e.value = i; e.callbacks.length; ) e.callbacks.shift().resolve(i);
                        })
                        .catch((i) => {
                          for (; e.callbacks.length; ) e.callbacks.shift().reject(i);
                        });
                    } catch (i) {
                      for (e.queried = !1; e.callbacks.length; ) e.callbacks.shift().reject(i);
                    }
                  }
                });
        }
        set(e) {
          if (!this.setFn) return Promise.reject(new Error("Value is read-only"));
          if (typeof e > "u") return Promise.reject(new Error("Cannot set undefined value"));
          for (this.value = e; this.callbacks.length; ) this.callbacks.shift().resolve();
          return this.setFn(e), Promise.resolve();
        }
      }),
        (Mo = class {
          constructor(e = 1) {
            (this.maxFn = e), (this.pendings = []), (this.count = 0);
          }
          async getMax() {
            return typeof this.maxFn == "function" ? this.maxFn() : this.maxFn;
          }
          callFn() {
            let e = this;
            return (r, n) =>
              e.getMax().then((i) =>
                e.count < i
                  ? e.doCall(r)
                  : new Promise((a, o) => {
                      let s = () => Promise.resolve(r()).then(a).catch(o);
                      e.pendings.push(s),
                        n &&
                          n(
                            (l) => {
                              let u = e.pendings.indexOf(s);
                              u >= 0 && (e.pendings.splice(u, 1), a(l));
                            },
                            (l) => {
                              let u = e.pendings.indexOf(s);
                              u >= 0 && (e.pendings.splice(u, 1), o(l));
                            }
                          );
                    })
              );
          }
          attempt() {
            if (this.pendings.length > 0) {
              let e = this;
              e.getMax().then((r) => {
                e.count < r && e.doCall(e.pendings.shift());
              });
            }
          }
          doCall(e) {
            let r = this;
            return (
              this.count++,
              Promise.resolve(e())
                .then((n) => (r.count--, r.attempt(), n))
                .catch((n) => {
                  throw (r.count--, r.attempt(), n);
                })
            );
          }
        });
      (Do = class extends Error {
        constructor(e) {
          super(e),
            (this.name = this.constructor.name),
            typeof Error.captureStackTrace == "function"
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error(e).stack);
        }
      }),
        (ai = class extends Do {
          constructor(e, r) {
            super(e), Object.assign(this, r);
          }
        }),
        (Fo = class extends ai {
          constructor(e, r) {
            super(e, { _details: r });
          }
          get details() {
            return this._details;
          }
          toString() {
            return `${this.message}: ${this._details}`;
          }
        });
    });
  var Xd = {};
  H(Xd, { Downloads: () => No });
  var No,
    Zd = B(() => {
      No = class {
        constructor(e) {
          this.coapp = e;
        }
        download(e) {
          return this.coapp.call("downloads.download", e);
        }
        search(e) {
          return this.coapp.call("downloads.search", e);
        }
        cancel(e) {
          return this.coapp.call("downloads.cancel", e);
        }
      };
    });
  var er,
    Le,
    Qd = B(() => {
      (er = (t) => Object.prototype.toString.call(t).slice(8, -1)), (Le = (t) => typeof t == "string" || t instanceof String);
    });
  var vw,
    oi,
    np,
    ep,
    ww,
    tp,
    bw,
    ip,
    rp,
    jo,
    Wo,
    tr,
    Ct,
    Uo,
    Lo,
    xw,
    Aw,
    Sw,
    ap,
    op = B(() => {
      Qd();
      (vw = 10),
        (oi = "0|[1-9]\\d*"),
        (np = "\\d*[A-Za-z-][A-Za-z\\d-]*"),
        (ep = `(?:${np}|${oi})`),
        (ww = `${ep}(?:\\.${ep})*`),
        (tp = `(?:${np}|\\d+)`),
        (bw = `${tp}(?:\\.${tp})*`),
        (ip = `((?:${oi})(?:\\.(?:${oi})){2})(?:-(${ww}))?(?:\\+(${bw}))?`),
        (rp = new RegExp(`^(?:${oi})$`)),
        (jo = new RegExp(`^v?${ip}$`)),
        (Wo = new RegExp(`^${ip}$`)),
        (tr = (t, e = !1) => {
          if (!Le(t)) throw new TypeError(`Expected String but got ${er(t)}.`);
          return (e ? Wo : jo).test(t);
        }),
        (Ct = (t, e = !1) => {
          if (!Le(t)) throw new TypeError(`Expected String but got ${er(t)}.`);
          if (!(e || rp.test(t))) throw new Error(`${t} is not a stringified positive integer.`);
          let r;
          if (rp.test(t)) {
            if (((r = parseInt(t, vw)), !Number.isSafeInteger(r))) throw new RangeError(`${r} exceeds ${Number.MAX_SAFE_INTEGER}.`);
          } else r = t;
          return r;
        }),
        (Uo = (t, e, r = !1) => {
          if (!Le(t)) throw new TypeError(`Expected String but got ${er(t)}.`);
          if (!Le(e)) throw new TypeError(`Expected String but got ${er(e)}.`);
          if (!tr(t, !!r)) throw new Error(`${t} is not valid version string.`);
          if (!tr(e, !!r)) throw new Error(`${e} is not valid version string.`);
          let n;
          if (t === e) n = 0;
          else {
            let i = r ? Wo : jo,
              [, a, o] = t.match(i),
              [, s, l] = e.match(i),
              [u, f, c] = a.split(".").map((A) => Ct(A)),
              [d, v, x] = s.split(".").map((A) => Ct(A));
            if (u > d) n = 1;
            else if (u < d) n = -1;
            else if (f > v) n = 1;
            else if (f < v) n = -1;
            else if (c > x) n = 1;
            else if (c < x) n = -1;
            else if (o === l) n = 0;
            else if (!o && l) n = 1;
            else if (o && !l) n = -1;
            else {
              let A = o.split(".").map((k) => Ct(k, !0)),
                g = l.split(".").map((k) => Ct(k, !0)),
                p = Math.max(A.length, g.length),
                w = 0;
              for (; w < p; ) {
                let k = A[w],
                  m = g[w];
                if (
                  ((k && !m) || (Le(k) && Number.isInteger(m))
                    ? (n = 1)
                    : (!k && m) || (Number.isInteger(k) && Le(m))
                    ? (n = -1)
                    : k !== m && Le(k) && Le(m)
                    ? (n = k.localeCompare(m))
                    : Number.isInteger(k) && Number.isInteger(m) && (k > m ? (n = 1) : k < m && (n = -1)),
                  Number.isInteger(n))
                )
                  break;
                w++;
              }
            }
          }
          return n;
        }),
        (Lo = (t, e = !1) => {
          if (!Le(t)) throw new TypeError(`Expected String but got ${er(t)}.`);
          let r = tr(t, !!e),
            n,
            i,
            a,
            o,
            s;
          if (r) {
            let l = e ? Wo : jo,
              [, u, f, c] = t.match(l);
            ([n, i, a] = u.split(".").map((d) => Ct(d))),
              f && (o = f.split(".").map((d) => Ct(d, !0))),
              c && (s = c.split(".").map((d) => Ct(d, !0)));
          }
          return { version: t, matches: r, major: n, minor: i, patch: a, pre: o, build: s };
        }),
        (xw = async (t, e, r = !1) => Uo(t, e, r)),
        (Aw = async (t, e = !1) => tr(t, e)),
        (Sw = async (t, e = !1) => Lo(t, e)),
        (ap = { compareSemVer: xw, isValidSemVer: Aw, parseSemVer: Sw });
    });
  var sp = {};
  H(sp, { compareSemVer: () => Uo, isValidSemVer: () => tr, parseSemVer: () => Lo, promises: () => ap });
  var lp = B(() => {
    op();
  });
  var cp = q((s9, up) => {
    var _w = qt(),
      Bo = _w.browser,
      si = Xe(),
      Wr = class {
        constructor() {
          this.listeners = [];
        }
        addListener(e) {
          this.listeners.push(e);
        }
        removeListener(e) {
          this.listeners = this.listeners.filter((r) => e !== r);
        }
        removeAllListeners() {
          this.listeners = [];
        }
        notify(...e) {
          this.listeners.forEach((r) => {
            try {
              r(...e);
            } catch (n) {
              console.warn(n);
            }
          });
        }
      },
      dt = 1,
      li = 2,
      Ho = class {
        constructor(e, r = {}) {
          (this.appId = e),
            (this.name = r.name || e),
            (this.appPort = null),
            (this.pendingCalls = []),
            (this.runningCalls = []),
            (this.state = "idle"),
            (this.postFn = this.post.bind(this)),
            (this.postMessageFn = this.postMessage.bind(this)),
            (this.onAppNotFound = new Wr()),
            (this.onAppNotFoundCheck = new Wr()),
            (this.onCallCount = new Wr()),
            (this.appStatus = "unknown"),
            (this.app2AddonCallCount = 0),
            (this.addon2AppCallCount = 0);
        }
        post(e, r) {
          this.appPort.postMessage(r);
        }
        postMessage(e) {
          this.appPort.postMessage(e);
        }
        updateCallCount(e, r) {
          switch (e) {
            case li:
              this.app2AddonCallCount += r;
              break;
            case dt:
              this.addon2AppCallCount += r;
              break;
          }
          this.onCallCount.notify(this.addon2AppCallCount, this.app2AddonCallCount);
        }
        close() {
          if (this.appPort)
            try {
              this.appPort.disconnect(), this.cleanup();
            } catch {}
        }
        call(...e) {
          return this.callCatchAppNotFound(null, ...e);
        }
        callCatchAppNotFound(e, ...r) {
          let n = this;
          function i(a) {
            let o;
            for (; (o = n.pendingCalls.shift()); )
              if (a) o.reject(a);
              else {
                n.runningCalls.push(o);
                let s = o;
                si.call(n.postFn, n.name, ...o.params)
                  .then((l) => (n.runningCalls.splice(n.runningCalls.indexOf(s), 1), l))
                  .then(s.resolve)
                  .catch((l) => {
                    n.runningCalls.splice(n.runningCalls.indexOf(s), 1), s.reject(l);
                  });
              }
          }
          switch (
            (e && (n.appStatus == "unknown" || n.appStatus == "checking") && n.onAppNotFoundCheck.addListener(e),
            n.updateCallCount(dt, 1),
            this.state)
          ) {
            case "running":
              return new Promise((a, o) => {
                let s = { resolve: a, reject: o, params: [...r] };
                n.runningCalls.push(s),
                  si
                    .call(n.postFn, n.name, ...r)
                    .then((l) => (n.runningCalls.splice(n.runningCalls.indexOf(s), 1), l))
                    .then(s.resolve)
                    .catch((l) => {
                      n.runningCalls.splice(n.runningCalls.indexOf(s), 1), s.reject(l);
                    });
              })
                .then((a) => (n.updateCallCount(dt, -1), a))
                .catch((a) => {
                  throw (n.updateCallCount(dt, -1), a);
                });
            case "idle":
              return (
                (n.state = "pending"),
                new Promise((a, o) => {
                  n.pendingCalls.push({ resolve: a, reject: o, params: [...r] });
                  let s = Bo.runtime.connectNative(n.appId);
                  (n.appStatus = "checking"),
                    (n.appPort = s),
                    s.onMessage.addListener((l) => {
                      n.appStatus == "checking" && ((n.appStatus = "ok"), n.onAppNotFoundCheck.removeAllListeners()),
                        si.receive(l, n.postMessageFn, n.name);
                    }),
                    s.onDisconnect.addListener(() => {
                      i(new Error("Disconnected")),
                        n.cleanup(),
                        n.appStatus == "checking" && !e && n.onAppNotFound.notify((n.appPort && n.appPort.error) || Bo.runtime.lastError);
                    }),
                    (n.state = "running"),
                    i();
                })
                  .then((a) => (n.updateCallCount(dt, -1), a))
                  .catch((a) => {
                    throw (n.updateCallCount(dt, -1), a);
                  })
              );
            case "pending":
              return new Promise((a, o) => {
                n.pendingCalls.push({ resolve: a, reject: o, params: [...r] });
              })
                .then((a) => (n.updateCallCount(dt, -1), a))
                .catch((a) => {
                  throw (n.updateCallCount(dt, -1), a);
                });
          }
        }
        listen(e) {
          let r = this,
            n = {};
          return (
            Object.keys(e).forEach((i) => {
              n[i] = (...a) => (
                r.updateCallCount(li, 1),
                Promise.resolve(e[i](...a))
                  .then((o) => (r.updateCallCount(li, -1), o))
                  .catch((o) => {
                    throw (r.updateCallCount(li, -1), o);
                  })
              );
            }),
            si.listen(n)
          );
        }
        cleanup() {
          let e = this;
          e.appStatus == "checking" &&
            (e.onAppNotFoundCheck.notify((e.appPort && e.appPort.error) || Bo.runtime.lastError),
            e.onAppNotFoundCheck.removeAllListeners());
          let r;
          for (; (r = e.runningCalls.shift()); ) r.reject(new Error("Native port disconnected"));
          (e.state = "idle"), (e.appStatus = "unknown"), (e.appPort = null);
        }
      };
    up.exports = function (...t) {
      return new Ho(...t);
    };
  });
  var dp = q((l9, fp) => {
    var Iw = typeof global == "object" && global && global.Object === Object && global;
    fp.exports = Iw;
  });
  var hp = q((u9, pp) => {
    var kw = dp(),
      qw = typeof self == "object" && self && self.Object === Object && self,
      Ew = kw || qw || Function("return this")();
    pp.exports = Ew;
  });
  var zo = q((c9, gp) => {
    var Ow = hp(),
      Pw = Ow.Symbol;
    gp.exports = Pw;
  });
  var wp = q((f9, vp) => {
    var mp = zo(),
      yp = Object.prototype,
      Tw = yp.hasOwnProperty,
      Cw = yp.toString,
      Ur = mp ? mp.toStringTag : void 0;
    function Rw(t) {
      var e = Tw.call(t, Ur),
        r = t[Ur];
      try {
        t[Ur] = void 0;
        var n = !0;
      } catch {}
      var i = Cw.call(t);
      return n && (e ? (t[Ur] = r) : delete t[Ur]), i;
    }
    vp.exports = Rw;
  });
  var xp = q((d9, bp) => {
    var Mw = Object.prototype,
      Dw = Mw.toString;
    function Fw(t) {
      return Dw.call(t);
    }
    bp.exports = Fw;
  });
  var Ip = q((p9, _p) => {
    var Ap = zo(),
      Nw = wp(),
      jw = xp(),
      Ww = "[object Null]",
      Uw = "[object Undefined]",
      Sp = Ap ? Ap.toStringTag : void 0;
    function Lw(t) {
      return t == null ? (t === void 0 ? Uw : Ww) : Sp && Sp in Object(t) ? Nw(t) : jw(t);
    }
    _p.exports = Lw;
  });
  var qp = q((h9, kp) => {
    function Bw(t, e) {
      return function (r) {
        return t(e(r));
      };
    }
    kp.exports = Bw;
  });
  var Op = q((g9, Ep) => {
    var Hw = qp(),
      zw = Hw(Object.getPrototypeOf, Object);
    Ep.exports = zw;
  });
  var Tp = q((m9, Pp) => {
    function Vw(t) {
      return t != null && typeof t == "object";
    }
    Pp.exports = Vw;
  });
  var Vo = q((y9, Rp) => {
    var $w = Ip(),
      Gw = Op(),
      Kw = Tp(),
      Yw = "[object Object]",
      Jw = Function.prototype,
      Xw = Object.prototype,
      Cp = Jw.toString,
      Zw = Xw.hasOwnProperty,
      Qw = Cp.call(Object);
    function e1(t) {
      if (!Kw(t) || $w(t) != Yw) return !1;
      var e = Gw(t);
      if (e === null) return !0;
      var r = Zw.call(e, "constructor") && e.constructor;
      return typeof r == "function" && r instanceof r && Cp.call(r) == Qw;
    }
    Rp.exports = e1;
  });
  var Mp = q(($o) => {
    "use strict";
    Object.defineProperty($o, "__esModule", { value: !0 });
    $o.default = t1;
    function t1(t) {
      var e,
        r = t.Symbol;
      return (
        typeof r == "function" ? (r.observable ? (e = r.observable) : ((e = r("observable")), (r.observable = e))) : (e = "@@observable"), e
      );
    }
  });
  var Dp = q((Ko, Go) => {
    "use strict";
    Object.defineProperty(Ko, "__esModule", { value: !0 });
    var r1 = Mp(),
      n1 = i1(r1);
    function i1(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var rr;
    typeof self < "u"
      ? (rr = self)
      : typeof window < "u"
      ? (rr = window)
      : typeof global < "u"
      ? (rr = global)
      : typeof Go < "u"
      ? (rr = Go)
      : (rr = Function("return this")());
    var a1 = (0, n1.default)(rr);
    Ko.default = a1;
  });
  var Yo = q((Lr) => {
    "use strict";
    Lr.__esModule = !0;
    Lr.ActionTypes = void 0;
    Lr.default = Wp;
    var o1 = Vo(),
      s1 = jp(o1),
      l1 = Dp(),
      Fp = jp(l1);
    function jp(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var Np = (Lr.ActionTypes = { INIT: "@@redux/INIT" });
    function Wp(t, e, r) {
      var n;
      if ((typeof e == "function" && typeof r > "u" && ((r = e), (e = void 0)), typeof r < "u")) {
        if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
        return r(Wp)(t, e);
      }
      if (typeof t != "function") throw new Error("Expected the reducer to be a function.");
      var i = t,
        a = e,
        o = [],
        s = o,
        l = !1;
      function u() {
        s === o && (s = o.slice());
      }
      function f() {
        return a;
      }
      function c(A) {
        if (typeof A != "function") throw new Error("Expected listener to be a function.");
        var g = !0;
        return (
          u(),
          s.push(A),
          function () {
            if (g) {
              (g = !1), u();
              var w = s.indexOf(A);
              s.splice(w, 1);
            }
          }
        );
      }
      function d(A) {
        if (!(0, s1.default)(A)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof A.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          (l = !0), (a = i(a, A));
        } finally {
          l = !1;
        }
        for (var g = (o = s), p = 0; p < g.length; p++) {
          var w = g[p];
          w();
        }
        return A;
      }
      function v(A) {
        if (typeof A != "function") throw new Error("Expected the nextReducer to be a function.");
        (i = A), d({ type: Np.INIT });
      }
      function x() {
        var A,
          g = c;
        return (
          (A = {
            subscribe: function (w) {
              if (typeof w != "object") throw new TypeError("Expected the observer to be an object.");
              function k() {
                w.next && w.next(f());
              }
              k();
              var m = g(k);
              return { unsubscribe: m };
            }
          }),
          (A[Fp.default] = function () {
            return this;
          }),
          A
        );
      }
      return d({ type: Np.INIT }), (n = { dispatch: d, subscribe: c, getState: f, replaceReducer: v }), (n[Fp.default] = x), n;
    }
  });
  var Xo = q((Jo) => {
    "use strict";
    Jo.__esModule = !0;
    Jo.default = u1;
    function u1(t) {
      typeof console < "u" && typeof console.error == "function" && console.error(t);
      try {
        throw new Error(t);
      } catch {}
    }
  });
  var Bp = q((Zo) => {
    "use strict";
    Zo.__esModule = !0;
    Zo.default = h1;
    var Up = Yo(),
      c1 = Vo(),
      x9 = Lp(c1),
      f1 = Xo(),
      A9 = Lp(f1);
    function Lp(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function d1(t, e) {
      var r = e && e.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function p1(t) {
      Object.keys(t).forEach(function (e) {
        var r = t[e],
          n = r(void 0, { type: Up.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              e +
              `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`
          );
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              e +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " + Up.ActionTypes.INIT + ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null."
          );
      });
    }
    function h1(t) {
      for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) {
        var i = e[n];
        typeof t[i] == "function" && (r[i] = t[i]);
      }
      var a = Object.keys(r),
        o = void 0,
        s = void 0;
      try {
        p1(r);
      } catch (l) {
        s = l;
      }
      return function () {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          f = arguments[1];
        if (s) throw s;
        if (!1) var c;
        for (var d = !1, v = {}, x = 0; x < a.length; x++) {
          var A = a[x],
            g = r[A],
            p = u[A],
            w = g(p, f);
          if (typeof w > "u") {
            var k = d1(A, f);
            throw new Error(k);
          }
          (v[A] = w), (d = d || w !== p);
        }
        return d ? v : u;
      };
    }
  });
  var zp = q((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    Qo.default = g1;
    function Hp(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }
    function g1(t, e) {
      if (typeof t == "function") return Hp(t, e);
      if (typeof t != "object" || t === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (t === null ? "null" : typeof t) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(t), n = {}, i = 0; i < r.length; i++) {
        var a = r[i],
          o = t[a];
        typeof o == "function" && (n[a] = Hp(o, e));
      }
      return n;
    }
  });
  var ts = q((es) => {
    "use strict";
    es.__esModule = !0;
    es.default = m1;
    function m1() {
      for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return e.length === 0
        ? function (n) {
            return n;
          }
        : e.length === 1
        ? e[0]
        : e.reduce(function (n, i) {
            return function () {
              return n(i.apply(void 0, arguments));
            };
          });
    }
  });
  var Vp = q((rs) => {
    "use strict";
    rs.__esModule = !0;
    var y1 =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      };
    rs.default = x1;
    var v1 = ts(),
      w1 = b1(v1);
    function b1(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function x1() {
      for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return function (n) {
        return function (i, a, o) {
          var s = n(i, a, o),
            l = s.dispatch,
            u = [],
            f = {
              getState: s.getState,
              dispatch: function (d) {
                return l(d);
              }
            };
          return (
            (u = e.map(function (c) {
              return c(f);
            })),
            (l = w1.default.apply(void 0, u)(s.dispatch)),
            y1({}, s, { dispatch: l })
          );
        };
      };
    }
  });
  var $p = q((Ie) => {
    "use strict";
    Ie.__esModule = !0;
    Ie.compose = Ie.applyMiddleware = Ie.bindActionCreators = Ie.combineReducers = Ie.createStore = void 0;
    var A1 = Yo(),
      S1 = nr(A1),
      _1 = Bp(),
      I1 = nr(_1),
      k1 = zp(),
      q1 = nr(k1),
      E1 = Vp(),
      O1 = nr(E1),
      P1 = ts(),
      T1 = nr(P1),
      C1 = Xo(),
      q9 = nr(C1);
    function nr(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Ie.createStore = S1.default;
    Ie.combineReducers = I1.default;
    Ie.bindActionCreators = q1.default;
    Ie.applyMiddleware = O1.default;
    Ie.compose = T1.default;
  });
  var Kp = q((ui, Gp) => {
    (function (t, e) {
      typeof ui == "object" && typeof Gp < "u"
        ? e(ui)
        : typeof define == "function" && define.amd
        ? define(["exports"], e)
        : e((t.reduxLogger = t.reduxLogger || {}));
    })(ui, function (t) {
      "use strict";
      function e(y, I) {
        (y.super_ = I),
          (y.prototype = Object.create(I.prototype, { constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 } }));
      }
      function r(y, I) {
        Object.defineProperty(this, "kind", { value: y, enumerable: !0 }),
          I && I.length && Object.defineProperty(this, "path", { value: I, enumerable: !0 });
      }
      function n(y, I, b) {
        n.super_.call(this, "E", y),
          Object.defineProperty(this, "lhs", { value: I, enumerable: !0 }),
          Object.defineProperty(this, "rhs", { value: b, enumerable: !0 });
      }
      function i(y, I) {
        i.super_.call(this, "N", y), Object.defineProperty(this, "rhs", { value: I, enumerable: !0 });
      }
      function a(y, I) {
        a.super_.call(this, "D", y), Object.defineProperty(this, "lhs", { value: I, enumerable: !0 });
      }
      function o(y, I, b) {
        o.super_.call(this, "A", y),
          Object.defineProperty(this, "index", { value: I, enumerable: !0 }),
          Object.defineProperty(this, "item", { value: b, enumerable: !0 });
      }
      function s(y, I, b) {
        var O = y.slice((b || I) + 1 || y.length);
        return (y.length = I < 0 ? y.length + I : I), y.push.apply(y, O), y;
      }
      function l(y) {
        var I = typeof y > "u" ? "undefined" : W(y);
        return I !== "object"
          ? I
          : y === Math
          ? "math"
          : y === null
          ? "null"
          : Array.isArray(y)
          ? "array"
          : Object.prototype.toString.call(y) === "[object Date]"
          ? "date"
          : typeof y.toString == "function" && /^\/.*\//.test(y.toString())
          ? "regexp"
          : "object";
      }
      function u(y, I, b, O, C, R, j) {
        (C = C || []), (j = j || []);
        var M = C.slice(0);
        if (typeof R < "u") {
          if (O) {
            if (typeof O == "function" && O(M, R)) return;
            if ((typeof O > "u" ? "undefined" : W(O)) === "object") {
              if (O.prefilter && O.prefilter(M, R)) return;
              if (O.normalize) {
                var xe = O.normalize(M, R, y, I);
                xe && ((y = xe[0]), (I = xe[1]));
              }
            }
          }
          M.push(R);
        }
        l(y) === "regexp" && l(I) === "regexp" && ((y = y.toString()), (I = I.toString()));
        var Oe = typeof y > "u" ? "undefined" : W(y),
          ye = typeof I > "u" ? "undefined" : W(I),
          pe = Oe !== "undefined" || (j && j[j.length - 1].lhs && j[j.length - 1].lhs.hasOwnProperty(R)),
          Pe = ye !== "undefined" || (j && j[j.length - 1].rhs && j[j.length - 1].rhs.hasOwnProperty(R));
        if (!pe && Pe) b(new i(M, I));
        else if (!Pe && pe) b(new a(M, y));
        else if (l(y) !== l(I)) b(new n(M, y, I));
        else if (l(y) === "date" && y - I !== 0) b(new n(M, y, I));
        else if (Oe === "object" && y !== null && I !== null)
          if (
            j.filter(function (ne) {
              return ne.lhs === y;
            }).length
          )
            y !== I && b(new n(M, y, I));
          else {
            if ((j.push({ lhs: y, rhs: I }), Array.isArray(y))) {
              var G;
              for (y.length, G = 0; G < y.length; G++) G >= I.length ? b(new o(M, G, new a(void 0, y[G]))) : u(y[G], I[G], b, O, M, G, j);
              for (; G < I.length; ) b(new o(M, G, new i(void 0, I[G++])));
            } else {
              var It = Object.keys(y),
                Ye = Object.keys(I);
              It.forEach(function (ne, zt) {
                var wr = Ye.indexOf(ne);
                wr >= 0 ? (u(y[ne], I[ne], b, O, M, ne, j), (Ye = s(Ye, wr))) : u(y[ne], void 0, b, O, M, ne, j);
              }),
                Ye.forEach(function (ne) {
                  u(void 0, I[ne], b, O, M, ne, j);
                });
            }
            j.length = j.length - 1;
          }
        else y !== I && ((Oe === "number" && isNaN(y) && isNaN(I)) || b(new n(M, y, I)));
      }
      function f(y, I, b, O) {
        return (
          (O = O || []),
          u(
            y,
            I,
            function (C) {
              C && O.push(C);
            },
            b
          ),
          O.length ? O : void 0
        );
      }
      function c(y, I, b) {
        if (b.path && b.path.length) {
          var O,
            C = y[I],
            R = b.path.length - 1;
          for (O = 0; O < R; O++) C = C[b.path[O]];
          switch (b.kind) {
            case "A":
              c(C[b.path[O]], b.index, b.item);
              break;
            case "D":
              delete C[b.path[O]];
              break;
            case "E":
            case "N":
              C[b.path[O]] = b.rhs;
          }
        } else
          switch (b.kind) {
            case "A":
              c(y[I], b.index, b.item);
              break;
            case "D":
              y = s(y, I);
              break;
            case "E":
            case "N":
              y[I] = b.rhs;
          }
        return y;
      }
      function d(y, I, b) {
        if (y && I && b && b.kind) {
          for (var O = y, C = -1, R = b.path ? b.path.length - 1 : 0; ++C < R; )
            typeof O[b.path[C]] > "u" && (O[b.path[C]] = typeof b.path[C] == "number" ? [] : {}), (O = O[b.path[C]]);
          switch (b.kind) {
            case "A":
              c(b.path ? O[b.path[C]] : O, b.index, b.item);
              break;
            case "D":
              delete O[b.path[C]];
              break;
            case "E":
            case "N":
              O[b.path[C]] = b.rhs;
          }
        }
      }
      function v(y, I, b) {
        if (b.path && b.path.length) {
          var O,
            C = y[I],
            R = b.path.length - 1;
          for (O = 0; O < R; O++) C = C[b.path[O]];
          switch (b.kind) {
            case "A":
              v(C[b.path[O]], b.index, b.item);
              break;
            case "D":
              C[b.path[O]] = b.lhs;
              break;
            case "E":
              C[b.path[O]] = b.lhs;
              break;
            case "N":
              delete C[b.path[O]];
          }
        } else
          switch (b.kind) {
            case "A":
              v(y[I], b.index, b.item);
              break;
            case "D":
              y[I] = b.lhs;
              break;
            case "E":
              y[I] = b.lhs;
              break;
            case "N":
              y = s(y, I);
          }
        return y;
      }
      function x(y, I, b) {
        if (y && I && b && b.kind) {
          var O,
            C,
            R = y;
          for (C = b.path.length - 1, O = 0; O < C; O++) typeof R[b.path[O]] > "u" && (R[b.path[O]] = {}), (R = R[b.path[O]]);
          switch (b.kind) {
            case "A":
              v(R[b.path[O]], b.index, b.item);
              break;
            case "D":
              R[b.path[O]] = b.lhs;
              break;
            case "E":
              R[b.path[O]] = b.lhs;
              break;
            case "N":
              delete R[b.path[O]];
          }
        }
      }
      function A(y, I, b) {
        if (y && I) {
          var O = function (C) {
            (b && !b(y, I, C)) || d(y, I, C);
          };
          u(y, I, O);
        }
      }
      function g(y) {
        return "color: " + Q[y].color + "; font-weight: bold";
      }
      function p(y) {
        var I = y.kind,
          b = y.path,
          O = y.lhs,
          C = y.rhs,
          R = y.index,
          j = y.item;
        switch (I) {
          case "E":
            return [b.join("."), O, "\u2192", C];
          case "N":
            return [b.join("."), C];
          case "D":
            return [b.join(".")];
          case "A":
            return [b.join(".") + "[" + R + "]", j];
          default:
            return [];
        }
      }
      function w(y, I, b, O) {
        var C = f(y, I);
        try {
          O ? b.groupCollapsed("diff") : b.group("diff");
        } catch {
          b.log("diff");
        }
        C
          ? C.forEach(function (R) {
              var j = R.kind,
                M = p(R);
              b.log.apply(b, ["%c " + Q[j].text, g(j)].concat(Z(M)));
            })
          : b.log("\u2014\u2014 no diff \u2014\u2014");
        try {
          b.groupEnd();
        } catch {
          b.log("\u2014\u2014 diff end \u2014\u2014 ");
        }
      }
      function k(y, I, b, O) {
        switch (typeof y > "u" ? "undefined" : W(y)) {
          case "object":
            return typeof y[O] == "function" ? y[O].apply(y, Z(b)) : y[O];
          case "function":
            return y(I);
          default:
            return y;
        }
      }
      function m(y) {
        var I = y.timestamp,
          b = y.duration;
        return function (O, C, R) {
          var j = ["action"];
          return j.push("%c" + String(O.type)), I && j.push("%c@ " + C), b && j.push("%c(in " + R.toFixed(2) + " ms)"), j.join(" ");
        };
      }
      function _(y, I) {
        var b = I.logger,
          O = I.actionTransformer,
          C = I.titleFormatter,
          R = C === void 0 ? m(I) : C,
          j = I.collapsed,
          M = I.colors,
          xe = I.level,
          Oe = I.diff,
          ye = typeof I.titleFormatter > "u";
        y.forEach(function (pe, Pe) {
          var G = pe.started,
            It = pe.startedTime,
            Ye = pe.action,
            ne = pe.prevState,
            zt = pe.error,
            wr = pe.took,
            kt = pe.nextState,
            Ki = y[Pe + 1];
          Ki && ((kt = Ki.prevState), (wr = Ki.started - G));
          var je = O(Ye),
            Ol =
              typeof j == "function"
                ? j(
                    function () {
                      return kt;
                    },
                    Ye,
                    pe
                  )
                : j,
            nm = D(It),
            im = M.title ? "color: " + M.title(je) + ";" : "",
            br = ["color: gray; font-weight: lighter;"];
          br.push(im),
            I.timestamp && br.push("color: gray; font-weight: lighter;"),
            I.duration && br.push("color: gray; font-weight: lighter;");
          var xr = R(je, nm, wr);
          try {
            Ol
              ? M.title && ye
                ? b.groupCollapsed.apply(b, ["%c " + xr].concat(br))
                : b.groupCollapsed(xr)
              : M.title && ye
              ? b.group.apply(b, ["%c " + xr].concat(br))
              : b.group(xr);
          } catch {
            b.log(xr);
          }
          var Yi = k(xe, je, [ne], "prevState"),
            Ji = k(xe, je, [je], "action"),
            Xi = k(xe, je, [zt, ne], "error"),
            Zi = k(xe, je, [kt], "nextState");
          if (Yi)
            if (M.prevState) {
              var am = "color: " + M.prevState(ne) + "; font-weight: bold";
              b[Yi]("%c prev state", am, ne);
            } else b[Yi]("prev state", ne);
          if (Ji)
            if (M.action) {
              var om = "color: " + M.action(je) + "; font-weight: bold";
              b[Ji]("%c action    ", om, je);
            } else b[Ji]("action    ", je);
          if (zt && Xi)
            if (M.error) {
              var sm = "color: " + M.error(zt, ne) + "; font-weight: bold;";
              b[Xi]("%c error     ", sm, zt);
            } else b[Xi]("error     ", zt);
          if (Zi)
            if (M.nextState) {
              var lm = "color: " + M.nextState(kt) + "; font-weight: bold";
              b[Zi]("%c next state", lm, kt);
            } else b[Zi]("next state", kt);
          Oe && w(ne, kt, b, Ol);
          try {
            b.groupEnd();
          } catch {
            b.log("\u2014\u2014 log end \u2014\u2014");
          }
        });
      }
      function P() {
        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          I = Object.assign({}, at, y),
          b = I.logger,
          O = I.stateTransformer,
          C = I.errorTransformer,
          R = I.predicate,
          j = I.logErrors,
          M = I.diffPredicate;
        if (typeof b > "u")
          return function () {
            return function (Oe) {
              return function (ye) {
                return Oe(ye);
              };
            };
          };
        if (y.getState && y.dispatch)
          return (
            console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),
            function () {
              return function (Oe) {
                return function (ye) {
                  return Oe(ye);
                };
              };
            }
          );
        var xe = [];
        return function (Oe) {
          var ye = Oe.getState;
          return function (pe) {
            return function (Pe) {
              if (typeof R == "function" && !R(ye, Pe)) return pe(Pe);
              var G = {};
              xe.push(G), (G.started = X.now()), (G.startedTime = new Date()), (G.prevState = O(ye())), (G.action = Pe);
              var It = void 0;
              if (j)
                try {
                  It = pe(Pe);
                } catch (ne) {
                  G.error = C(ne);
                }
              else It = pe(Pe);
              (G.took = X.now() - G.started), (G.nextState = O(ye()));
              var Ye = I.diff && typeof M == "function" ? M(ye, Pe) : I.diff;
              if ((_(xe, Object.assign({}, I, { diff: Ye })), (xe.length = 0), G.error)) throw G.error;
              return It;
            };
          };
        };
      }
      var T,
        N,
        U = function (y, I) {
          return new Array(I + 1).join(y);
        },
        Y = function (y, I) {
          return U("0", I - y.toString().length) + y;
        },
        D = function (y) {
          return Y(y.getHours(), 2) + ":" + Y(y.getMinutes(), 2) + ":" + Y(y.getSeconds(), 2) + "." + Y(y.getMilliseconds(), 3);
        },
        X = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date,
        W =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (y) {
                return typeof y;
              }
            : function (y) {
                return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
              },
        Z = function (y) {
          if (Array.isArray(y)) {
            for (var I = 0, b = Array(y.length); I < y.length; I++) b[I] = y[I];
            return b;
          }
          return Array.from(y);
        },
        re = [];
      (T = (typeof global > "u" ? "undefined" : W(global)) === "object" && global ? global : typeof window < "u" ? window : {}),
        (N = T.DeepDiff),
        N &&
          re.push(function () {
            typeof N < "u" && T.DeepDiff === f && ((T.DeepDiff = N), (N = void 0));
          }),
        e(n, r),
        e(i, r),
        e(a, r),
        e(o, r),
        Object.defineProperties(f, {
          diff: { value: f, enumerable: !0 },
          observableDiff: { value: u, enumerable: !0 },
          applyDiff: { value: A, enumerable: !0 },
          applyChange: { value: d, enumerable: !0 },
          revertChange: { value: x, enumerable: !0 },
          isConflict: {
            value: function () {
              return typeof N < "u";
            },
            enumerable: !0
          },
          noConflict: {
            value: function () {
              return (
                re &&
                  (re.forEach(function (y) {
                    y();
                  }),
                  (re = null)),
                f
              );
            },
            enumerable: !0
          }
        });
      var Q = {
          E: { color: "#2196F3", text: "CHANGED:" },
          N: { color: "#4CAF50", text: "ADDED:" },
          D: { color: "#F44336", text: "DELETED:" },
          A: { color: "#2196F3", text: "ARRAY:" }
        },
        at = {
          level: "log",
          logger: console,
          logErrors: !0,
          collapsed: void 0,
          predicate: void 0,
          duration: !1,
          timestamp: !0,
          stateTransformer: function (y) {
            return y;
          },
          actionTransformer: function (y) {
            return y;
          },
          errorTransformer: function (y) {
            return y;
          },
          colors: {
            title: function () {
              return "inherit";
            },
            prevState: function () {
              return "#9E9E9E";
            },
            action: function () {
              return "#03A9F4";
            },
            nextState: function () {
              return "#4CAF50";
            },
            error: function () {
              return "#F20404";
            }
          },
          diff: !1,
          diffPredicate: void 0,
          transformer: void 0
        },
        xn = function () {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            I = y.dispatch,
            b = y.getState;
          return typeof I == "function" || typeof b == "function"
            ? P()({ dispatch: I, getState: b })
            : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`);
        };
      (t.defaults = at), (t.createLogger = P), (t.logger = xn), (t.default = xn), Object.defineProperty(t, "__esModule", { value: !0 });
    });
  });
  var Jp = q((Yp, ci) => {
    (function (t, e) {
      "use strict";
      typeof ci == "object" && typeof ci.exports == "object"
        ? (ci.exports = e())
        : typeof define == "function" && define.amd
        ? define([], e)
        : (t.objectPath = e());
    })(Yp, function () {
      "use strict";
      var t = Object.prototype.toString;
      function e(f, c) {
        return f == null ? !1 : Object.prototype.hasOwnProperty.call(f, c);
      }
      function r(f) {
        if (!f || (a(f) && f.length === 0)) return !0;
        if (typeof f != "string") {
          for (var c in f) if (e(f, c)) return !1;
          return !0;
        }
        return !1;
      }
      function n(f) {
        return t.call(f);
      }
      function i(f) {
        return typeof f == "object" && n(f) === "[object Object]";
      }
      var a =
        Array.isArray ||
        function (f) {
          return t.call(f) === "[object Array]";
        };
      function o(f) {
        return typeof f == "boolean" || n(f) === "[object Boolean]";
      }
      function s(f) {
        var c = parseInt(f);
        return c.toString() === f ? c : f;
      }
      function l(f) {
        f = f || {};
        var c = function (g) {
            return Object.keys(c).reduce(function (p, w) {
              return w === "create" || (typeof c[w] == "function" && (p[w] = c[w].bind(c, g))), p;
            }, {});
          },
          d;
        f.includeInheritedProps
          ? (d = function () {
              return !0;
            })
          : (d = function (g, p) {
              return (typeof p == "number" && Array.isArray(g)) || e(g, p);
            });
        function v(g, p) {
          if (d(g, p)) return g[p];
        }
        var x;
        f.includeInheritedProps
          ? (x = function (g, p) {
              typeof p != "string" && typeof p != "number" && (p = String(p));
              var w = v(g, p);
              if (p === "__proto__" || p === "prototype" || (p === "constructor" && typeof w == "function"))
                throw new Error("For security reasons, object's magic properties cannot be set");
              return w;
            })
          : (x = function (g, p) {
              return v(g, p);
            });
        function A(g, p, w, k) {
          if ((typeof p == "number" && (p = [p]), !p || p.length === 0)) return g;
          if (typeof p == "string") return A(g, p.split(".").map(s), w, k);
          var m = p[0],
            _ = x(g, m);
          return p.length === 1
            ? ((_ === void 0 || !k) && (g[m] = w), _)
            : (_ === void 0 && (typeof p[1] == "number" ? (g[m] = []) : (g[m] = {})), A(g[m], p.slice(1), w, k));
        }
        return (
          (c.has = function (g, p) {
            if ((typeof p == "number" ? (p = [p]) : typeof p == "string" && (p = p.split(".")), !p || p.length === 0)) return !!g;
            for (var w = 0; w < p.length; w++) {
              var k = s(p[w]);
              if ((typeof k == "number" && a(g) && k < g.length) || (f.includeInheritedProps ? k in Object(g) : e(g, k))) g = g[k];
              else return !1;
            }
            return !0;
          }),
          (c.ensureExists = function (g, p, w) {
            return A(g, p, w, !0);
          }),
          (c.set = function (g, p, w, k) {
            return A(g, p, w, k);
          }),
          (c.insert = function (g, p, w, k) {
            var m = c.get(g, p);
            (k = ~~k), a(m) || ((m = []), c.set(g, p, m)), m.splice(k, 0, w);
          }),
          (c.empty = function (g, p) {
            if (!r(p) && g != null) {
              var w, k;
              if ((w = c.get(g, p))) {
                if (typeof w == "string") return c.set(g, p, "");
                if (o(w)) return c.set(g, p, !1);
                if (typeof w == "number") return c.set(g, p, 0);
                if (a(w)) w.length = 0;
                else if (i(w)) for (k in w) d(w, k) && delete w[k];
                else return c.set(g, p, null);
              }
            }
          }),
          (c.push = function (g, p) {
            var w = c.get(g, p);
            a(w) || ((w = []), c.set(g, p, w)), w.push.apply(w, Array.prototype.slice.call(arguments, 2));
          }),
          (c.coalesce = function (g, p, w) {
            for (var k, m = 0, _ = p.length; m < _; m++) if ((k = c.get(g, p[m])) !== void 0) return k;
            return w;
          }),
          (c.get = function (g, p, w) {
            if ((typeof p == "number" && (p = [p]), !p || p.length === 0)) return g;
            if (g == null) return w;
            if (typeof p == "string") return c.get(g, p.split("."), w);
            var k = s(p[0]),
              m = x(g, k);
            return m === void 0 ? w : p.length === 1 ? m : c.get(g[k], p.slice(1), w);
          }),
          (c.del = function (p, w) {
            if ((typeof w == "number" && (w = [w]), p == null || r(w))) return p;
            if (typeof w == "string") return c.del(p, w.split("."));
            var k = s(w[0]);
            if ((x(p, k), !d(p, k))) return p;
            if (w.length === 1) a(p) ? p.splice(k, 1) : delete p[k];
            else return c.del(p[k], w.slice(1));
            return p;
          }),
          c
        );
      }
      var u = l();
      return (u.create = l), (u.withInheritedProps = l({ includeInheritedProps: !0 })), u;
    });
  });
  var Qp = q((O9, Zp) => {
    "use strict";
    var Xp = Jp().get;
    function R1(t, e) {
      return t === e;
    }
    function M1(t, e, r) {
      r = r || R1;
      var n = Xp(t(), e);
      return function (a) {
        return function () {
          var o = Xp(t(), e);
          if (!r(n, o)) {
            var s = n;
            (n = o), a(o, s, e);
          }
        };
      };
    }
    Zp.exports = M1;
  });
  var Br = {};
  H(Br, { clear: () => th, error: () => j1, getEntry: () => nh, log: () => eh, logDetails: () => rh, reducer: () => N1 });
  function N1(t = [], e) {
    switch (e.type) {
      case "log.new":
        t = t.concat([Object.assign({ key: ++F1 }, e.payload)]);
        break;
      case "log.clear":
        t = [];
        break;
    }
    return t;
  }
  function eh(t, e = "log") {
    if (t instanceof Error) {
      let r = "";
      t.fileName &&
        t.lineNumber &&
        ((r = t.fileName + ":" + t.lineNumber),
        r.columnNumber && (r += ":" + t.columnNumber),
        (r += `
`)),
        t.stack && (r += t.stack),
        (t = { message: t.message, details: t.details || r || void 0, videoTitle: t.videoTitle || void 0 });
    } else typeof t == "string" ? (t = { message: t }) : (t = { message: t.message || "" + t, details: t.details || void 0 });
    is.dispatch("log.new", Object.assign(t, { type: e }));
  }
  function j1(t) {
    eh(t, "error");
  }
  function th() {
    is.dispatch("log.clear");
  }
  function rh(t) {
    ns.rpc.call("main", "embed", D1.runtime.getURL("content/logdetails-embed.html?panel=logdetails#" + encodeURIComponent(t)));
  }
  function nh(t) {
    let e = null;
    if (
      (is.getLogs().forEach((n) => {
        n.key == t && (e = n);
      }),
      e)
    )
      return e;
    throw new Error("Log entry not found");
  }
  var ns,
    D1,
    is,
    F1,
    Hr = B(() => {
      (ns = z()), (D1 = ns.browser), (is = (ge(), S(he))), (F1 = 0);
      ns.rpc.listen({ clearLogs: th, logDetails: rh, getLogEntry: nh });
    });
  var fi = {};
  H(fi, {
    alert: () => ih,
    dialog: () => as,
    fileDialog: () => ir,
    saveAs: () => B1,
    selectConvertFiles: () => H1,
    selectDirectory: () => ah,
    selectMergeAudioFile: () => V1,
    selectMergeVideoFile: () => z1
  });
  function as(t) {
    let e = Promise.resolve();
    t.type === "tab" &&
      (e = e.then(() =>
        W1.tabs.query({ active: !0, lastFocusedWindow: !0 }).then((n) => {
          n.length > 0 && U1.setTransientTab("<next-tab>", n[0].id);
        })
      ));
    let r = "dialog" + ++L1;
    return (
      (e = e
        .then(() => {
          le.ui.open(r, t);
        })
        .then(() => le.wait(r))),
      (e.__dialogName = r),
      e
    );
  }
  async function ih(t) {
    let e = { autoResize: !0 },
      r = await le.prefs;
    return (
      r.alertDialogType == "tab" && (e = { bodyClass: "dialog-in-tab", autoResize: !1 }),
      as({
        url: "content/alert.html",
        type: r.alertDialogType,
        height: t.height || 200,
        autoClose: r.dialogAutoClose,
        initData: Object.assign(e, t)
      })
    );
  }
  async function ir(t) {
    let e = await le.prefs,
      r = as({
        type: e.fileDialogType,
        url: "content/file-dialog.html",
        height: 500,
        width: 750,
        autoClose: e.dialogAutoClose,
        initData: Object.assign(
          {
            filename: null,
            directory: null,
            uniqueFilename: !0,
            titleText: "",
            noSizeColumn: !1,
            dirOnly: !1,
            upDir: !0,
            editFileInput: !0,
            readonlyDir: !1,
            showDir: !0,
            okText: "OK",
            confirmOverwrite: !1,
            newDir: !1,
            createDir: !0
          },
          t
        )
      });
    return r.then((n) => (le.ui.close(r.__dialogName), n)).catch((n) => (le.ui.close(r.__dialogName), null));
  }
  function B1(t, e, r = {}) {
    return ir(
      Object.assign(
        {
          filename: t,
          directory: e,
          uniqueFilename: !0,
          titleText: le._("save_file_as"),
          noSizeColumn: !1,
          dirOnly: !1,
          upDir: !0,
          editFileInput: !0,
          readonlyDir: !1,
          showDir: !0,
          okText: le._("save"),
          confirmOverwrite: !0,
          newDir: !0,
          createDir: !0
        },
        r
      )
    );
  }
  function ah(t, e = {}) {
    return ir(
      Object.assign(
        {
          directory: t,
          uniqueFilename: !1,
          titleText: le._("weh_prefs_label_lastDownloadDirectory"),
          noSizeColumn: !0,
          dirOnly: !0,
          upDir: !0,
          editFileInput: !1,
          readonlyDir: !0,
          showDir: !1,
          okText: le._("ok"),
          confirmOverwrite: !1,
          newDir: !0,
          createDir: !1
        },
        e
      )
    );
  }
  function H1(t, e = {}) {
    return ir(
      Object.assign(
        {
          directory: t,
          uniqueFilename: !1,
          titleText: le._("select_files_to_convert"),
          noSizeColumn: !1,
          dirOnly: !1,
          upDir: !0,
          readonlyDir: !0,
          editFileInput: !1,
          showDir: !1,
          okText: le._("convert"),
          confirmOverwrite: !1,
          newDir: !1,
          createDir: !1,
          selectMultiple: !0,
          outputConfigs: !0
        },
        e
      )
    );
  }
  function z1(t, e = {}) {
    return ir(
      Object.assign(
        {
          directory: t,
          uniqueFilename: !1,
          titleText: le._("select_video_file_to_merge"),
          noSizeColumn: !1,
          dirOnly: !1,
          upDir: !0,
          readonlyDir: !0,
          editFileInput: !1,
          showDir: !1,
          okText: le._("next"),
          confirmOverwrite: !1,
          newDir: !1,
          createDir: !1,
          selectMultiple: !1,
          outputConfigs: !1
        },
        e
      )
    );
  }
  function V1(t, e = {}) {
    return ir(
      Object.assign(
        {
          directory: t,
          uniqueFilename: !1,
          titleText: le._("select_audio_file_to_merge"),
          noSizeColumn: !1,
          dirOnly: !1,
          upDir: !0,
          readonlyDir: !0,
          editFileInput: !1,
          showDir: !1,
          okText: le._("next"),
          confirmOverwrite: !1,
          newDir: !1,
          createDir: !1,
          selectMultiple: !1,
          outputConfigs: !1
        },
        e
      )
    );
  }
  var le,
    W1,
    U1,
    L1,
    di = B(() => {
      (le = z()), (W1 = le.browser), (U1 = (ht(), S(pt))), (L1 = 0);
      le.rpc.listen({ alert: ih, selectDirectory: ah });
    });
  var zr = {};
  H(zr, {
    alertAudioNeedsReg: () => Y1,
    alertHlsDownloadLimit: () => J1,
    checkLicense: () => uh,
    hlsDownloadLimit: () => fh,
    setLicense: () => ch,
    validateLicense: () => us
  });
  function G1(t) {
    return (t && t.substring(0, 1).toUpperCase() + t.substring(1)) || "";
  }
  function lh(t, e) {
    let r = new TextEncoder("utf-8").encode(e + t.key + t.email);
    return crypto.subtle.digest("SHA-256", r).then((n) => ss.bufferToHex(n));
  }
  async function us(t) {
    let e = await oh.check();
    if (!e.status) return { key: t, last: Date.now(), status: "nocoapp" };
    let r = e.info.home,
      n;
    try {
      n = await ss.request({
        url: "https://www.downloadhelper.net/license-check.json",
        content: "key=" + encodeURIComponent(t) + "&product=converthelper",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        method: "POST"
      });
    } catch {
      throw new Error(He._("network_error_no_response"));
    }
    if (!n.ok) throw new Error(He._("network_error_status", n.status + " " + n.statusText));
    let i = await n.json(),
      a = { key: t, last: Date.now(), remoteStatus: i.status, status: i.status, name: i.name, email: i.email },
      o = G1(Be);
    if (
      ((i.target == "fx" || i.target == "firefox") && Be != "firefox"
        ? ((a.status = "mismatch"), (a.brExt = o), (a.brLicense = "Firefox"))
        : i.target == "edge" && Be != "edge"
        ? ((a.status = "mismatch"), (a.brExt = o), (a.brLicense = "Edge"))
        : (i.target == "crx" || i.target == "chrome") &&
          Be != "chrome" &&
          ((a.status = "mismatch"), (a.brExt = o), (a.brLicense = "Chrome")),
      a.status == "accepted")
    ) {
      let s = await lh(a, r);
      a.sign = s;
    }
    return await ls.set(a), a;
  }
  function uh() {
    return new Promise((t, e) => {
      os.runtime
        .getPlatformInfo()
        .then((r) => {
          if (r.os == "linux" && !$1) return t({ status: "unneeded" });
          K1()
            .then((n) => {
              if (n === null) return t({ status: "unset" });
              let i = { status: "unset" };
              if ((n.email && (i.email = n.email), n.key && (i.key = n.key), n.name && (i.name = n.name), n.status == "mismatch"))
                return (i.status = "mismatch"), (i.brLicense = n.brLicense), (i.brExt = n.brExt), t(i);
              oh.check()
                .then((a) => (a.status ? lh(n, a.info.home) : ((i.status = "nocoapp"), t(i), null)))
                .then((a) => {
                  if (a)
                    return !n.remoteStatus && i.key
                      ? new Promise((o, s) => {
                          us(i.key)
                            .then((l) => {
                              (n = l), o(a);
                            })
                            .catch((l) => {
                              s(l);
                            });
                        })
                      : a;
                })
                .then((a) => {
                  a &&
                    (n.remoteStatus == "accepted" && a === n.sign
                      ? (i.status = "accepted")
                      : n.remoteStatus == "blocked"
                      ? (i.status = "blocked")
                      : n.remoteStatus == "locked" && (i.status = "locked"),
                    t(i));
                })
                .catch(e);
            })
            .catch(e);
        })
        .catch(e);
    });
  }
  function ch(t) {
    return ls.set(t);
  }
  function Y1() {
    sh.alert({
      title: He._("converter_needs_reg"),
      text: He._("converter_reg_audio"),
      buttons: [
        {
          text: He._("get_conversion_license"),
          className: "btn-success",
          rpcMethod: "goto",
          rpcArgs: ["https://www.downloadhelper.net/convert" + (Be ? "?browser=" + encodeURIComponent(Be) : "")]
        }
      ]
    });
  }
  function J1() {
    sh.alert({
      title: He._("chrome_premium_required"),
      text: He._("chrome_premium_hls", [fh]),
      buttons: [
        {
          text: He._("continue"),
          className: "btn-success",
          rpcMethod: "goto",
          rpcArgs: ["https://www.downloadhelper.net/convert" + (Be ? "?browser=" + encodeURIComponent(Be) : "")]
        }
      ]
    });
  }
  var He,
    os,
    oh,
    ss,
    sh,
    Be,
    $1,
    ls,
    K1,
    fh,
    Vr = B(() => {
      (He = z()),
        (os = He.browser),
        (oh = (De(), S(Me))),
        (ss = (oe(), S(ae))),
        (sh = (di(), S(fi))),
        ({ browser: Be, linuxlic: $1 } = ot().buildOptions);
      ls = new ss.Cache(
        () => os.storage.local.get("license").then((t) => t.license || null),
        (t) => os.storage.local.set({ license: t })
      );
      K1 = ls.get();
      fh = Be === "edge" || Be === "chrome" ? 120 : 0;
      He.rpc.listen({ checkLicense: uh, validateLicense: us, setLicense: ch });
    });
  var ph = q((P9, fs) => {
    var gt = z(),
      Gr = gt.browser,
      pi = (oe(), S(ae)),
      X1 = (De(), S(Me)),
      Z1 = 1e3,
      Q1 = 0,
      Qe = {},
      $r = null,
      Rt = null;
    function cs() {}
    function hi(t) {
      return t && t.coappDownload
        ? X1.downloads
        : Rt ||
            ((Rt = {}),
            (Rt.cancel = Gr.downloads.cancel),
            (Rt.search = Gr.downloads.search),
            (Rt.download = (e) => (e.headers && (e.headers = []), delete e.directory, delete e.proxy, Gr.downloads.download(e))),
            Rt);
    }
    function ar() {
      let t = Object.keys(Qe).length;
      $r && t == 0 ? (clearInterval($r), ($r = null)) : !$r && t > 0 && ($r = setInterval(eb, Z1));
    }
    function dh(t, e) {
      ar(), t.failure(e);
    }
    fs.exports.download = function (t, e, r, n) {
      let i = ++Q1,
        a = { id: i, data: t, success: e || cs, failure: r || cs, progress: n || cs };
      ar(), (a.lastProgress = -1);
      let o = {
        url: a.data.source.url,
        conflictAction: "uniquify",
        filename: a.data.target.filename,
        directory: a.data.target.directory,
        saveAs: a.data.target.saveAs || !1,
        incognito: !!a.data.source.isPrivate
      };
      return (
        a.data.source.headers
          ? (o.headers = a.data.source.headers)
          : a.data.source.referrer && (o.headers = [{ name: "Referer", value: a.data.source.referrer }]),
        a.data.proxy && gt.unsafe_prefs.coappUseProxy && (o.proxy = a.data.proxy),
        Promise.resolve((Gr.runtime.getBrowserInfo && Gr.runtime.getBrowserInfo()) || null)
          .then((s) => ((!s || s.name != "Firefox" || parseInt(s.version) <= 56) && delete o.incognito, hi(a.data).download(o)))
          .then((s) => {
            if (!s) {
              dh(a, new Error(gt._("aborted"))), ar();
              return;
            }
            (a.downloadId = s), (Qe[a.id] = a), ar();
          })
          .catch((s) => {
            dh(a, new pi.DetailsError(gt._("download_error"), s.message));
          }),
        i
      );
    };
    function eb() {
      for (let t in Qe) {
        let e = Qe[t];
        hi(e.data)
          .search({ id: e.downloadId })
          .then((r) => {
            if (r.length > 0) {
              let n = r[0];
              if (n.state == "in_progress") {
                let i = Math.floor((n.bytesReceived * 100) / n.totalBytes);
                i != e.lastProgress && ((e.lastProgress = i), e.progress(i)),
                  n.error && (hi(e.data).cancel(n.id), e.failure(new pi.DetailsError(gt._("download_error"), n.error)), delete Qe[t], ar());
              } else
                delete Qe[t],
                  ar(),
                  n.state == "complete"
                    ? gt.prefs.then((i) => {
                        setTimeout(() => {
                          e.success(n.filename);
                        }, i.downloadCompleteDelay);
                      })
                    : n.error == "Aborted"
                    ? e.failure(new pi.VDHError(gt._("download_error"), { noReport: !0 }))
                    : e.failure(new pi.DetailsError(gt._("download_error"), n.error));
            } else console.warn("Not found download", t);
          });
      }
    }
    fs.exports.abort = function (t) {
      Qe[t] && hi(Qe[t].data).cancel(Qe[t].downloadId);
    };
  });
  var Kr = {};
  H(Kr, {
    aggregate: () => ub,
    convert: () => lb,
    getCodecs: () => bh,
    getFormats: () => wh,
    getOutputConfigs: () => ys,
    info: () => rb,
    makeUniqueFileName: () => ob,
    open: () => ib,
    play: () => nb,
    resetOutputConfigs: () => vh,
    setOutputConfigs: () => yh,
    sideDownload: () => db,
    sideDownloadAbort: () => fb,
    updateHit: () => tb,
    wmForHeight: () => ab
  });
  function tb(t) {
    console.warn("TODO converter.updateHit");
  }
  function gh(t) {
    (t || []).forEach((e) => {
      e.name == "Accept-Encoding" &&
        (e.value = e.value
          .split(",")
          .map((r) => r.trim())
          .filter((r) => r != "br")
          .join(", "));
    });
  }
  function rb(t, e = !1, r = []) {
    gh(r);
    let n = de.call("probe", t, e, r);
    return e ? n.then((i) => JSON.parse(i)) : n;
  }
  function nb(t) {
    return de.call("play", t);
  }
  function ib(t) {
    return de.call("open", t);
  }
  function ab(t) {
    return new Promise((e, r) => {
      let n = 1 / 0,
        i = null;
      for (let u in ds) {
        let f = parseInt(u),
          c = Math.abs(t - f);
        c < n && ((i = u), (n = c));
      }
      let a,
        o,
        s = ds[i],
        l = de.isAtLeastVersion("2.0.0");
      de.call("tmp.file", { prefix: "vdh-wm-", postfix: ".gif" })
        .then(({ path: u, fd: f }) => {
          if (((a = u), (o = f), l)) return de.call("fs.write2", o, s.qr);
          {
            let c = atob(s.qr),
              d = new Array(c.length);
            for (let v = 0; v < c.length; v++) d[v] = c.charCodeAt(v);
            return de.call("fs.write", o, d);
          }
        })
        .then(() => de.call("fs.close", o))
        .then(() => {
          e({ x: s.x, y: s.y, qr: a });
        })
        .catch(r);
    });
  }
  function ob(t) {
    return de.call("makeUniqueFileName", t);
  }
  function mh(t) {
    return t.wm && t.wm.qr && !(t.config && t.config.audioonly)
      ? ["-i", t.wm.qr, "-filter_complex", "[0:v][1:v] overlay=" + t.wm.x + ":" + t.wm.y]
      : null;
  }
  async function lb(t, e) {
    let r = await or.prefs;
    return new Promise((n, i) => {
      let a = ["-y", "-i", t.source];
      t.wm && t.wm.qr && !t.config.audioonly && (a = a.concat(mh(t) || []));
      for (let s in t.config.params) {
        let l = t.config.params[s];
        l !== null && (typeof l != "string" || l.length > 0) && (a.push("-" + s), a.push("" + l));
      }
      t.config.extra &&
        /^\s*(.*?)\s*$/
          .exec(t.config.extra)[1]
          .split(/\s+/)
          .forEach(function (l) {
            a.push(l);
          }),
        t.config.audioonly && a.push("-vn"),
        (a = a.concat(["-threads", r.converterThreads, "-strict", "experimental"]));
      let o = ++gs;
      (mt[o] = e),
        t.config.twopasses
          ? console.warn("TODO implement 2 passes conversion")
          : (a.push(t.target),
            de
              .call("convert", a, { progressTime: "" + o })
              .then(({ exitCode: s, stderr: l }) => {
                delete mt[o], s !== 0 ? i(new gi.DetailsError(or._("failed_converting", t.source), l)) : n();
              })
              .catch((s) => {
                delete mt[o], i(s);
              }));
    });
  }
  async function ub(t, e) {
    let r = await or.prefs;
    return new Promise((n, i) => {
      let a = ["-y", "-i", t.audio, "-i", t.video],
        o = !1;
      t.videoCodec == "h264" && r.converterAggregTuneH264 && ((o = !0), (t.videoCodec = "libx264"));
      let s;
      t.wm && t.videoCodec && t.fps
        ? ((s = "[m]"),
          (a = a.concat(["-i", t.wm.qr, "-filter_complex", "[1:v][2:v] overlay=" + t.wm.x + ":" + t.wm.y + " " + s, "-c:v", t.videoCodec])))
        : ((s = "1:v"), a.push("-c:v"), o ? a.push(t.videoCodec) : a.push("copy")),
        (a = a.concat(["-map", "0:a", "-map", s])),
        o && (a = a.concat(["-preset", "fast", "-tune", "film", "-profile:v", "baseline", "-level", "30"])),
        (a = a.concat(["-g", "9999"])),
        (a = a.concat(["-c:a", "copy", "-threads", r.converterThreads, "-strict", "experimental", t.target]));
      let l = ++gs;
      (mt[l] = e),
        de
          .call("convert", a, { progressTime: "" + l })
          .then((u) => {
            if ((delete mt[l], u.exitCode !== 0)) throw new gi.DetailsError("Failed conversion", u.stderr);
            n();
          })
          .catch((u) => {
            delete mt[l], i(u);
          });
    });
  }
  function yh(t) {
    return ms.set(Object.assign({}, hs, t));
  }
  function vh() {
    return ys().then((t) => {
      let e = Object.assign({}, t);
      return (
        Object.keys(e).forEach((r) => {
          e[r].readonly || delete e[r];
        }),
        ms.set(e)
      );
    });
  }
  function wh() {
    return de.call("formats");
  }
  function bh() {
    return de.call("codecs");
  }
  function cb(t, e, r) {
    let n = mt[t];
    n && n(e, r);
  }
  function fb(t) {
    return de.call("abortConvert", t);
  }
  async function db(t, e) {
    let r = [];
    gh(e.headers),
      e.headers &&
        e.headers.length &&
        (r.push("-headers"),
        r.push(
          e.headers.map((o) => o.name + ": " + o.value).join(`\r
`) +
            `\r
`
        ));
    let n = mh(e) || [];
    Array.isArray(t) && t.length == 2 ? (r.push("-i", t[1]), (r = r.concat(n)), r.push("-i", t[0])) : r.push("-i", t),
      n.length == 0 && r.push("-c", "copy"),
      r.push("-y", e.filePath);
    let i = ++gs;
    mt[i] = e.on_progress;
    let a = ++sb;
    ps[a] = e.on_start;
    try {
      let o = await de.call("convert", r, { progressTime: "" + i, startHandler: "" + a });
      if (o.exitCode != 0) throw new gi.DetailsError("SideDownload error: ", o.stderr);
    } finally {
      delete i[i], delete ps[a];
    }
  }
  function pb(t, e) {
    let r = ps[t];
    if (r)
      try {
        r(e);
      } catch (n) {
        console.error("start handler error", n);
      }
  }
  var or,
    hh,
    de,
    gi,
    ds,
    hs,
    gs,
    mt,
    sb,
    ps,
    ms,
    ys,
    Yr = B(() => {
      (or = z()), (hh = or.browser), (de = (De(), S(Me))), (gi = (oe(), S(ae)));
      (gs = 0), (mt = {}), (sb = 0), (ps = {});
      (ms = new gi.Cache(
        () => hh.storage.local.get("outputConfigs").then((t) => t.outputConfigs || hs),
        (t) => hh.storage.local.set({ outputConfigs: t })
      )),
        (ys = ms.get());
      or.rpc.listen({
        getOutputConfigs: ys,
        setOutputConfigs: yh,
        resetOutputConfigs: vh,
        editConverterConfigs: (t) => {
          or.ui.open("convoutput" + (t ? "#" + t : ""), { type: "tab", url: "content/convoutput.html" });
        },
        getFormats: wh,
        getCodecs: bh,
        convertStartNotification: pb
      });
      de.listen({ convertOutput: cb });
      hs = {
        "e6587753-4ca5-4d2e-b7ba-beaf1e7f191c": {
          title: "Re-encoded MP4 (h264/aac)",
          ext: "mp4",
          params: { "c:a": "aac", f: "mp4", "c:v": "h264" },
          audioonly: !1,
          readonly: !0
        },
        "249a7d34-3640-4ac3-8300-13827811d2cf": {
          title: "MPEG (mpeg1+mp2)",
          ext: "mpg",
          params: { "c:a": "mp2", f: "mpeg", r: 24, "c:v": "mpeg1video" },
          extra: "-mbd rd -trellis 2 -cmp 2 -subcmp 2 -g 100",
          audioonly: !1,
          readonly: !0
        },
        "6de4f5ce-8cfe-4f0f-8246-bacb7b0d7624": {
          title: "WMV 500Kb (Windows Media Player)",
          ext: "wmv",
          params: { "c:a": "wmav2", f: "asf", "c:v": "wmv2", "b:v": "500k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "21a19146-e116-4460-8356-a8eab9cf61ce": {
          title: "WMV 1Mb (Windows Media Player)",
          ext: "wmv",
          params: { "c:a": "wmav2", f: "asf", "c:v": "wmv2", "b:v": "1000k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "933b1b41-6862-4ce0-9605-10fa5e4b310c": {
          title: "WMV 2Mb (Windows Media Player)",
          ext: "wmv",
          params: { "c:a": "wmav2", f: "asf", "c:v": "wmv2", "b:v": "2000k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "90195ab2-d891-443c-a164-8f0953ec8975": {
          title: "WMV 4Mb (Windows Media Player)",
          ext: "wmv",
          params: { "c:a": "wmav2", f: "asf", "c:v": "wmv2", "b:v": "4000k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "3a4cc0a6-6eb0-4cff-90fb-fdf8eb6a9571": {
          title: "AVI 500Kb (mpeg4/mp3)",
          ext: "avi",
          params: { "c:a": "mp3", f: "avi", "c:v": "mpeg4", "b:v": "500k", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "ebdbb895-7a1e-43e2-bef4-be6e62cb8507": {
          title: "AVI 1Mb (mpeg4/mp3)",
          ext: "avi",
          params: { "c:a": "mp3", f: "avi", "c:v": "mpeg4", "b:v": "1000k", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "0b6280d3-f8f2-4cb6-8235-a5a4b91488f7": {
          title: "AVI 2Mb (mpeg4/mp3)",
          ext: "avi",
          params: { "c:a": "mp3", f: "avi", "c:v": "mpeg4", "b:v": "2000k", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "9ea8a22b-5738-4d0f-8494-3037ec568191": {
          title: "AVI 4Mb (mpeg4/mp3)",
          ext: "avi",
          params: { "c:a": "mp3", f: "avi", "c:v": "mpeg4", "b:v": "4000k", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "4174b9dd-c2a0-409d-801d-c84f96be0b76": {
          title: "MP3",
          ext: "mp3",
          params: { "b:a": "128k", "c:a": "mp3", f: "mp3" },
          extra: null,
          audioonly: !0,
          readonly: !0
        },
        "05cb6b27-9167-4d83-833d-218a107d0376": {
          title: "MP3 HQ",
          ext: "mp3",
          params: { "b:a": "256k", "c:a": "mp3", f: "mp3" },
          extra: null,
          audioonly: !0,
          readonly: !0
        },
        "69397f64-54f2-4ee4-b47a-b4fc42ee2ec1": {
          title: "MP4 500Kb",
          ext: "mp4",
          params: { "c:v": "mpeg4", "c:a": "aac", f: "mp4", "b:v": "500k", "b:a": "128k", ac: 2 },
          extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
          audioonly: !1,
          readonly: !0
        },
        "16044db3-3b75-4155-b549-c0ba19c18887": {
          title: "MP4 1Mb",
          ext: "mp4",
          params: { "c:v": "mpeg4", "c:a": "aac", f: "mp4", "b:v": "1000k", "b:a": "128k", ac: 2 },
          extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
          audioonly: !1,
          readonly: !0
        },
        "b5535083-bf16-4ae0-a21f-7c637ce0617f": {
          title: "MP4 2Mb",
          ext: "mp4",
          params: { "c:v": "mpeg4", "c:a": "aac", f: "mp4", "b:v": "2000k", "b:a": "128k", ac: 2 },
          extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
          audioonly: !1,
          readonly: !0
        },
        "dfbed97f-46c9-4db8-b5d1-4d19901bc236": {
          title: "MP4 4Mb",
          ext: "mp4",
          params: { "c:v": "mpeg4", "c:a": "aac", f: "mp4", "b:v": "4000k", "b:a": "128k", ac: 2 },
          extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
          audioonly: !1,
          readonly: !0
        },
        "912806c1-6c43-44ad-ac6e-05f105bade55": {
          title: "iPhone",
          ext: "m4v",
          params: { "c:v": "mpeg4", "c:a": "aac", s: "480x320", "b:v": "800k", f: "mp4", r: "24", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "2416dcbf-146d-4ca4-b948-f6f702fb043c": {
          title: "iPod",
          ext: "m4v",
          params: { "c:v": "mpeg4", "c:a": "aac", s: "320x240", "b:v": "500k", f: "mp4", r: "24", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "42fb9cf9-94f9-45c1-954f-1c5879f3d372": {
          title: "Galaxy Tab",
          ext: "mp4",
          params: { "c:a": "aac", "b:a": "160k", ac: "2", "c:v": "h264", f: "mp4" },
          extra: "-crf 22",
          audioonly: !1,
          readonly: !0
        },
        "edf545c2-88fc-4354-b91d-83e2f31d3c14": {
          title: "MOV (QuickTime player)",
          ext: "mov",
          params: { f: "mov", "c:v": "h264", preset: "fast", "profile:v": "baseline", "c:a": "aac", "b:a": "128k" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "f31ac68e-db3b-4b17-95d7-04456cbc3c26": {
          title: "Mobile 3GP (Qcif)",
          ext: "3gp",
          params: { f: "3gp", "c:v": "h263", "c:a": "aac", "b:a": "12k", s: "176x144", "b:v": "64k", ar: "8000", r: "24" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "85cd71a0-fb61-45a4-9fed-6f2e6e405bc3": {
          title: "MPEG-2 DVD (PAL)",
          ext: "mpeg",
          params: { f: "mpeg2video", target: "pal-dvd" },
          extra: null,
          audioonly: !1,
          readonly: !0
        },
        "47b9b2eb-8fd4-4e10-8993-f7d467ed1928": {
          title: "MPEG-2 DVD (NTSC)",
          ext: "mpeg",
          params: { f: "mpeg2video", target: "ntsc-dvd" },
          extra: null,
          audioonly: !1,
          readonly: !0
        }
      };
      ds = {
        240: {
          x: 7,
          y: 7,
          qr: "R0lGODlhHwAfAKEAAAAAAP///wAAAAAAACH5BAEKAAIALAAAAAAfAB8AAAKejI+pi+DvwksTQgNUZk1jWUlHFWXXZoYhWLLmd7KiK8a1etFpO3cgDKRgLLwXypXj/DY/JTLom9lKpMho0utRt0xatjt8eWDg6PF62nXX2+xIar3CSeG4ln4UL4dvyzOed6Y22CTVtNbBpEjkp5T29gHJyIY4eBYFGanVt4KGBsjZQkk1Ryba8IhipXbjN4nlVqPpc4nUKWua5LSrUAAAOw=="
        },
        481: {
          x: 10,
          y: 10,
          qr: "R0lGODlhXQBdAKEAAAAAAP///wAAAAAAACH5BAEKAAIALAAAAABdAF0AAAL+jI+py+0Po5y02ouz3gr4D4bih4iWeYzquqxuWMIVarw20N5uDJ5yrWN1PD4cJ0KaEYdGSvL4eE6kqaXTCm1Qkdhqc9rNMou5787LK4940rYQ+EV713K4mhbAu1Xp8VyPtZX3NthTV0hn5weXWMgWGIYIaEYouNd4CRnHOPn447go+ZlJuSlqqMg5GkmKCqral3CWerpX5unaive3WorJqvnrS8ibG9wZOvta+1ls66x5q2Rq+YT6fEUdGQWsbXUdPS2dPc42dyjI7U0Wes6Ivu1QHSTsjmivS39Hjw3+bX2MXzeB/QD+O4iLnxh54bTEWwhxWbpDESvSmkjLYkX+bAwwitFRziOTTa6gldrHJ9lDNSNRcjRZ8uLKlrLm1RtpMCUzUy4HMnyY6IVJCcrssXT4Q6iqmB2JvUPKE8LNC/NwaZzKruawmRqwilPZbKFXcmCZYmBq8yfIpQm5mmv3tGmQYm2jyl1H8+4NukO52N3pKVZWiU6X9dwq+KtMnYlx9npJdnEjio6NWc7AsajUnIdbwdwFV10TtDasLtWsddpom5VoKPypNiiye3FjYp2s1/Vsf6vD3AbdmW8q3kbZwgsb3PhwznGFE0Z+XOlO3lXzksZ7Wndp5Y1pe++eL+le7pS9Xye6ErLhygQZw36fMb7W9tLV2S/vkf54i7PpcK9PDd9Gb/iXX3puYTYgcAX+JdIG/SloIIMDtRcbcMfVRaB+dtUHFoYQ6lchdIt5iFyDAIIBVIRHyTWYXxuqmFc56P0VY2jgYWRid2oFKGNzZc0m2odrzRegMiai9hqRSNWlI3sTbqcki32NCNWDvTD545XlfXbQZVMKZmRDneWUWWHhgZkilL+5JxmQFHIpUJGtbTXkdG9Kmd1JcE6ioYj/3bfcgVGiSaN8gL5i1mbdNHkiirEkKlpIbuV4oY8oYvenk3NtWdsW1OmjaZ04MveWnWZqyChxUdKnUauuvgprrLLOSqtGBQAAOw=="
        },
        721: {
          x: 15,
          y: 15,
          qr: "R0lGODlhugC6AKEAAAAAAP///wAAAAAAACH5BAEKAAIALAAAAAC6ALoAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNe2CeT6zvf+D9QtgjscMTc8Kpc/CfMJTR6NUwX0qnRit01rtrSUcsfICPkMEAepRDX6qn1v3V1S2CvHxvNRfBv8lcCnZzbYJxg4codoyLQnBMhz0+HDBglRGVk0uZFp1/NY9inJqeGpCFpIOrpZinEqAtsgC0LrGpqmeflg69F7y5vKuuvwy2EMzIBsKhy8ijDnR2ywHBDN+Ic9bU2oLercCt0t/nxQfU2enb6Nbt5c/E497l4uX688b69OH87/RIeLTiJ/3wjmwpSPWxVvB9c5klZwVjyFhxw2NIhroL7+NRAvbnzIMGBHjRTZTRS40CKtlQnPTWz30WPJiPjgjHyJ02ZIVf1ikmSZEiPCljkrCh3ac+YiiyjvLeMC8Oa+mCIZ/izKcSc4o1SlZmXK06ROsFax0vT69ajKoF2RiuWqtGnSpzDjoq1DdivNukCn2tULMq/Bq/eilvXbN21beESdNk5qeC1is2PC/usoF0hkxnMfvz1jObDawWz/As6Md7TPundTLyY9uTDm1pRRi645VrVSwpBnH1ZsGnZu3HAT3w4u0fFw5LtZ/wZufKnuzSFcyvZGnXm1Vyd9o7ouOPnnvbV1nfUeq7tWvdmjWzq/Pj346RDblx8GP3wt9fr+3dhX3hsl/NEn4HyviUcegOPJ9IF1AR4z4IHEyeQeetVF2FwjFcb30X+daUiSbSB6OB6JCYLol4gamkihgicuiCKGMZa2oUMsqthIRjMuaOKNtK0Y2o48WjiTj8/FqKOQRtpIZHRC5pfMkhRsF2WV+lHZn5VaSjkBllsmU+OUGH5ZZZhdjkkmmPdV4GWapZhZlZs/ltYkmhY4uA2OQ7pFRmjZNShjoMvh2SefLRqYAaEMzrknYFAZ+qcvgj4onGZE6glcnYhyh6iivOXJaKYcMgdop5NeNiqmlp52qaSmvlrcqatKBp1zd9qaJasXSLdabMtx+murut5Ko2eoQpj+UKTDsvnpcY8WGGyqkAJb66C4ipmssJyBaqiTxWZLbLS5bgslgrNW6lqGKe56rYR+ttDsovjJe2WIVsYLr6yHrlvmt5ReCCuMdk6CLwuK2ianui+Wu1/AC6erZcErHNxawhKrQPGR9MJAaJzM5lhxqBt3IqvH2BqCsMgndPwuuyBrrOrKJbcc7iApazzwx/8WSbPONoeM86bUMqxvokDCrPJ7I/M8rcsoA03ruSQLHfSHvnL7ndUP8zrh0jFDTWDWJYq8dJu9Vns1w6VqvS9cyjrqL9pYy8e2qmXnfLbUCj+cr4t2m3ymtXGr7WrdZMtcj6cwcT3i0F47ri26tzH+fnTNhDs9jeL5UP6y5Y9jHpHmw3H+NOifex553seq3jYfRlONurRVT0X6z6Yj3pPoXNXuOuSO88p7662/Lbl/YE89+sW6rUluupSZ3TXwykvIvLnOuwjx7xoF32Pqew9/PDObT68d9kkajnThu5NvHPGsG58+tOsPLjz84xZfX/iAy2G3tztnHLYAUu8N/Xuew+6WuKL1jHXxelbUEPi/eACweQVkW2XuAjjqTNB6FRSYsTbYNe+BkH9k89/c3GUhELKILyQ8UgZTqED1XW55MfTZk0CzthNyKYSmu6EDkbUzTUUQdgz0IZ18FzvZ3S96RhSXDU83wANqr4mrQ57+DoWoQ7NREYcyhGL5pNjDLR4nYizk1xIn9LogvqmMolIiudJ4xTV+sIY2hOMMb/BD1b2QT3b0Yg3yuLc9sgeJaQKkvdxorj5ajI16cx8aCdm8G/bxkMuKYungpqQptrGSX7xkJJ80ySM2rV6d+2Qmw2hGCmKxd90CpSYbucBO2g6TOwplKjm4yjycb0a23KQqR9W4UdItjqBT5NAE+Uux3fFkyySVZZCJy3nhrpnQoyMzmxnLhhHzjPZL5hOVNk0/VhOMtzOPH0NhzGJmc53yw+YzIXlNaPJwdnzL4RhLKEpu5pJ8vYQlPe+JyHk+EE79zN4/uebIFdJPm1VkIhr+5KnQtJ0zaa18KDs5yUh3/nOXFxTmNYXHPrx9r4Fm+VssM1q/VzqrWSb16EjN570Obq2khzvpBxOKTwu2r6YuRSlOD2pAv/EUozeNaU49iL6BjrCoAZUpSGl60P0xVakEPCov4flSCzo1eGI0KFEFp9PKSa6r6aSqVq260q7m05tFPCtQ56hWIlqyoSac5VjFWNa7utWsXORrE/MKsL0KkKFEg2kXwZnLvg2xUUDc5kd3iFg+GtWl9kxpUw/7zstSFrPAFClWu4nCckozsQabmWY5WVnImhOdk6XlVU9LEEfWlZWuRVJrYyvCoHrSepK8bYdyi71g1hZFP2VSQGc4q8sguRK2vz2ubu3K2+XqEzvADWspo3vK6Rr3jMhtYcK+C97wine85C2vec+L3vSqd73sbe96CwAAOw=="
        },
        1081: {
          x: 25,
          y: 25,
          qr: "R0lGODlhNgE2AaEAAAAAAP///wAAAAAAACH5BAEKAAIALAAAAAA2ATYBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1KrVAshqt9yu9wsOi8dZCDncO4PN6rb7Td7A5/Q5m56u3+v8/lfuFygIsAeXh/cwqMgHuOjoVvh2aJf4aHnWeKn5V4m4w9i5KbqVOToaCckD6mDaSqjhaoraNmkYGntZivs4q1YrebvrqCus2IupqhdcPEjMHHgcl+zZ8MwLa70YPfabypptjL3WTXr1IuaDLs45zW7Oot7u5ayVjvbeEv95n6Gv448PBUAcAykUtHEw4IiENBhGszdOYQqHMih+i7gPo0T+ExZhdGTw0UXIjRhGwuNXEuU/lSQXsiT40mBMhDNbejC5AucBnRNr2uTAU6DPh+Tq/SQR9ERQh7mWlbvo7oImp76olrHah2i/oU2hzsNKD5pXYGO5bFNW9mlKjQu6VuM6FGvWtFXpXrU7F2/YV3hXvWWrYKnbtmj/RiV8Te+6r30Lg4QLWKYluUwhDwO7uMtZao8jIxA8ubFlxoa1Yd7qeWdoxazXJu5MqTVs07KxjA5XO3Bc0Zx19/Z9GDjt0pozm6X8O0Hl1BGm8g6u/Haz065Jz8ZN/Hhuya8Rx86u9vr07ROWXyavmvnm5Om/iw/vffh7o6ihf14Nnn5+ZPv+71bHPp9/AebV317r2YKeAX7FZ51t3TGoXX8LQghfBebJR6F+A3LT114TClfcc2QVaFyF0T0IYoQbMsRhfRimaOJ9KJ5onwQXApihgDlKI6GHju144IgDGoice0AWWWMALf43HokieuMkkzG29yKNDcJY14Y+skdliBL+iKWOFkoniFZf+rSkVPgNiaSQR7ro5YpcKkhmljvyJaVYCSq55pt5imkljmHiKSdzaTp4XpSFIqgoolcG2iSbT6o4KKGOCgrplHTOKGOSZi7q5qBBxlnplkaK2iaUkv5paaVgZqrhnYNdGqmfoKpqK62a8slpl5S62ueYvW7q6ayowvn+K6x+fCprsNxV2emj0WI6bbLl1bksdbfWKmyiq25rZ67dSutrmdo2O+yotJwL7KnKtvosqe0y+i263uqqZ6PzhvoukZOGe+yZ6aa67p7G9ltirPviGjC4+aqZ7o3cIozsrgdXa7EwptIr7rsfUsyqugCD7HC2FT/cMcYoN4wvoCqbrK/HF9vo7Mvw2vyxzf5m5KlcO9fLctA3gNZzDEQXHbPO7JKcw9HyDr1bjwm7XK7CTAtNk3pLZ420llPfXDXVxJI79tNck80sTFp3+HXaV799ttk0r+1R1F6fLDavxWILdkN2p1yD03I3x7fbSsszuOGB/11q21uH3bfeaFf+xDjci9N9d8iPl20t5BB1DbjfmN/5c+iSJ54UR5UfzvPkbOMducQZj57P6p4XlbfPjhtcOO6REwxO77yrJ7vVOAdfMKvIJw+05ZzPvjfxy8MM8fSvst489qYXb/3I13Y/5+mdP2/87cNHDz7H46bP/PbCJ22+wOyPLzL7ipOfN/ex8z0/6Av3fz/xQQ9t+qtf+jbWv/y9L3vxYyD+Eug6+UEwgAXcnADL90AI0g949rNgBc9HQA3yR3kiVKD0Toi+EKKwhLQ7CuHQlDqpuXCGqoOh7V7YQhrqEIdJOhQIfLjDIMKub0C8SQyFGMQiZrCGOUSiE5f4Opfc8IlCVOL+BTHoISpqMV6Ds2IWtwhG3clQik0MIw2t6MWv/c6MT0TjEUnHxjhCjohvbJwc/7UyLg4wcZQr4xVzh0cewY+Hrigd1i7nP48hkGHOMyCBqqfCROZkimkMpBcFJ4vdDXIGmNwVBwXpQEfmbG4p5KPRKNlJ6pnuk49s2f78qBRUyvJehyRkKwzZyD5Kco6LbF8tRXk9UkYygueY5S4zGMwH9tJcsAugLokJxyEm84/LzOP3SrnBU/qxkhJkpPbWd0tNhvKZphwjJKnVQFe6sWbInCYToSVMaIIzmyS04bCcU7eBRVEE3DynN9s5J3wWU5/mDEE/1cmimf2xlSchaOb++FlHmdmTlsdzZwkUuo13ylOP3gOou+Y4SqE4NJpkPKYjWbnOkRqUnbakpz9ditCJwnOhIY2lShV50YhW1FAKFahIWJrRnE6RlShNKFA1OrFrmlSMJeUXSJPp09rdFGdIhek8O0pTqGK0qtaMZzlf6snWOTWdQzjoL2taxWnqVAVmbSRak6jWoWpzm/xbqxVqaleR0nWFY3UiXuWaz71i05da/Css52pS/bX1KIZdKmI3+k2JHlYijYUsIhNbV8AqpLJfbVoqX/nRNsZ1sgMV7DD7ikTOWhVqxkSdRaOwWLJyFItqLAZRi0paiLZ2tVQV6vRua8m8frGZauSqNYD+203CXtayyiyub5eH3JLFVq+YNS1zgclS1TJzJbsNa0F/2L3o2gu1j+3sL5mq299aEruORcpnh9vU4In3f1glp3lzuc+VWm++klVf3O4bWaVeF7f3HC1Flwtg2Qo4wS3NBn936l8E81bBXp1wg4+7XgIPWJzpnWlWearZn/KVflvdUzVBOd4uCte4oD1tUitM29qGL6TT5eQCU6xcGANSmjPWaoilOlgslniTJ76kj3MLZBfv8cUXXiOPQ+tRstXYvkuuclebbNMDPxXESG5okE2oZSyzWLtYnXJ5rQxmD1uwyIo1apcnOWI0M3S2Tq4nlD/cwxU/17VxvrIzZXz+Zxrr2b19TjM6bSxTBuN5pmR+RpY3TGguVxcXD95yLB6t6DGjN6YF7rF692xhTKu4u6fIcHCPymHWSvq6tjV1cksNau+KeNWKbvWrhbxfFvuOjqQWRaWjHM5Yx7i0ee71Jn696GBHGtLxHV+NbS1d9qo51f919mej2l8lY1jYO551sa2rbBzLGdrNHra3pXztnhoYeaKWNaeh3OgW8/nLdRY3rguNYjh3OtA3PquxjYxvM9sZ3uuet7YNHep4nzSwYVa4B/tNZ4DTW+BgvbLDQWjwWhecxK/tMKM3LmcK/vuDt+62fvcdYQo3F+MJB/m978xtVWY74xzH959LLu/+msN82R/3NL1FDu4crxznZ96uvREe8ocHvb5t/nHEBe3zg+c86U/+ObKpDeGeU/rqJs4vTokLdpxDfeuurni97fhQV+Iy64cm99HPjt/v9jbsZpd2X91OX3Ov0utz1xzd3z72S3OdyHznJdZ1PHVYSzfez/73pq9qcn/vQsOofSvh5W74v0M+8b4+ddTJ23XMQ1HzdLb7P5PNZNS7+7yFH73fX7/4Iwu+7Gp3rujFTHq2MxnvM2/50jHY+N9z/tie53f41tz6ha69J28OsMqDynMWFrLokd/8zdMOXulPnvpwLz3yb89m7R8/5u1+OavzKv7tMzzTSp90e2OfftD+R3/11v8+9j8Q/9kTm/0sp3/fPZ5/2KZvzBZK1zZmAZh6uqaAoXd/RoSAnbd+oQZ07keAefeAp1d+1ed9DEhSAHiB0wZXEdNxe5d7Dvh+mwVUljdOh9cBgwZbKTiCrFeCLeh074BRKkiCsOeBendGMDh+l6eDJ1eB+HCDMRh3QZh9JxgQRfiDKziDQFGD5sCEOweEdbeAbDSFKYd788eD9RdHWSh/ToiE+BeFVwCGGGh/Vkh+cnSGQnd9asiFGmhpE3SATQiHBZhrVUeHMYeDtdd/2zZwexiHc0aGNkd5CVh87FaHVDiGzxdegKZBGUiIJih1pmd07yaI5SZzSVj+iYd4iZsnfZLYh164SY+ohwkkika4gaWYh4GIiouohVBoiIl4aJYIiJo4iTQ4i2KHarz4aYM4iquIh794h57VfJTIf1Xoh8pzhdylhEKYjGJYjKDYjMb4jJwYjTk4jRFXjWpzjYX4jc+3fE3WfYj3OUOIjRKYhstoduW4hc6IjuAYj+LIgtCHi+eYjdCojhzIjurUjao2j7oYjkN3j7ZXkIizj4MoiQtpkDsoh8w3kLIYkcJlgGuIkP7HVmVIkA7pjspnkWKVkAepkP+4YCEpeWFGTdyXi7a4iSWJke8IeBCXkb0Ifyj5ePJIc594hBy5kp7oZzeJjDrnYS4YkyP+p37M+JE12YkRiIi+aJPJN46qN0LSqI9NqZS1CJQCKXUXt39YSYtW2YFVaX61SJQWmG9Pd5TtSJJziIFl2Xtu6JMtiXgd2X5DqZEs+ZBSSXxDtJbA5oZuqXtw+ZU66ZJdWJjDx5VUCYrq9nlC6ZWsKIK7iIsCyJaOaZmEaY5xOXxviIlt53JI95N/KJcbKYOuuHufiZiq6Ig+aHV8yJjGN3GqSZpvOZXuc4x+iZl6uZmaGZVtOJYmaZaBV3mZxYi2iZIkN5mvGYtNV5wnaZeSyZPKOZwBJ5spOZi/SXXAKJ1tSZyxWJdkKZNBmUlE951g6ZzgCZ1iCYHRVp65OYH+zxmbrViUF9iXuomc86l/+ImA9emboNlBTvmA/MmaW2mKVxmAAhqZ8UmMwfmBdCmaK8mc0HWd6Yegx9mdigig+5mU+nmZ2Dk/mql9FQqfBCqfDPqBIoqeCiqhGXqgG2qircmi42mg+VefVOah/umgTPmS1qmM6bijDPmgSRB8MHpuwOmjN7qbRzCkS9mVP4qiHZqXNmqYq3mbnOllTKqY1baj93ml+XikOGqlWjqls+l81OWlOAmlSWoES5qTYyqRAfmmbQqmSMCmaSqlOTqSQUqn77WOX4qnIjmMEalp9QiY9Kijc8qPAHl+6TmAZyqeSBqmEral4WmmNNqnwqimjWjHoTLajiwUqZmZqP/3ovnZmQB0qYf5qR4Zo4rXqSWUqu+pcYlmqqc4qz2KqaUZlrTpaJCYiZlKilmaeTPKqqX6oacKqrYarJs6rIvpqsYKk7iqqaM6fbRarKGKqs6aUpHIq69orccKrK6nrOvZqiL0qu3pptnaq3ekruvKru3qru8Kr/Eqr/NKr/Vqr/eKr/mqr/vKr/3qr/8KsAErsANLsPZaAAA7"
        }
      };
    });
  var Sh = q((mi) => {
    "use strict";
    mi.byteLength = gb;
    mi.toByteArray = yb;
    mi.fromByteArray = bb;
    var ze = [],
      ke = [],
      hb = typeof Uint8Array < "u" ? Uint8Array : Array,
      vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (Mt = 0, xh = vs.length; Mt < xh; ++Mt) (ze[Mt] = vs[Mt]), (ke[vs.charCodeAt(Mt)] = Mt);
    var Mt, xh;
    ke["-".charCodeAt(0)] = 62;
    ke["_".charCodeAt(0)] = 63;
    function Ah(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      r === -1 && (r = e);
      var n = r === e ? 0 : 4 - (r % 4);
      return [r, n];
    }
    function gb(t) {
      var e = Ah(t),
        r = e[0],
        n = e[1];
      return ((r + n) * 3) / 4 - n;
    }
    function mb(t, e, r) {
      return ((e + r) * 3) / 4 - r;
    }
    function yb(t) {
      var e,
        r = Ah(t),
        n = r[0],
        i = r[1],
        a = new hb(mb(t, n, i)),
        o = 0,
        s = i > 0 ? n - 4 : n,
        l;
      for (l = 0; l < s; l += 4)
        (e = (ke[t.charCodeAt(l)] << 18) | (ke[t.charCodeAt(l + 1)] << 12) | (ke[t.charCodeAt(l + 2)] << 6) | ke[t.charCodeAt(l + 3)]),
          (a[o++] = (e >> 16) & 255),
          (a[o++] = (e >> 8) & 255),
          (a[o++] = e & 255);
      return (
        i === 2 && ((e = (ke[t.charCodeAt(l)] << 2) | (ke[t.charCodeAt(l + 1)] >> 4)), (a[o++] = e & 255)),
        i === 1 &&
          ((e = (ke[t.charCodeAt(l)] << 10) | (ke[t.charCodeAt(l + 1)] << 4) | (ke[t.charCodeAt(l + 2)] >> 2)),
          (a[o++] = (e >> 8) & 255),
          (a[o++] = e & 255)),
        a
      );
    }
    function vb(t) {
      return ze[(t >> 18) & 63] + ze[(t >> 12) & 63] + ze[(t >> 6) & 63] + ze[t & 63];
    }
    function wb(t, e, r) {
      for (var n, i = [], a = e; a < r; a += 3)
        (n = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (t[a + 2] & 255)), i.push(vb(n));
      return i.join("");
    }
    function bb(t) {
      for (var e, r = t.length, n = r % 3, i = [], a = 16383, o = 0, s = r - n; o < s; o += a) i.push(wb(t, o, o + a > s ? s : o + a));
      return (
        n === 1
          ? ((e = t[r - 1]), i.push(ze[e >> 2] + ze[(e << 4) & 63] + "=="))
          : n === 2 && ((e = (t[r - 2] << 8) + t[r - 1]), i.push(ze[e >> 10] + ze[(e >> 4) & 63] + ze[(e << 2) & 63] + "=")),
        i.join("")
      );
    }
  });
  var bs = {};
  H(bs, { File: () => ws });
  var Ve,
    xb,
    Ab,
    _h,
    ws,
    xs = B(() => {
      (Ve = (De(), S(Me))),
        (xb = (oe(), S(ae))),
        (Ab = Sh()),
        (_h = 2e5),
        (ws = class t {
          constructor(e) {
            (this.fd = e), (this.position = 0), (this.fileLength = 0), (this.writeControl = xb.Concurrent(1));
          }
          _close() {
            return Ve.call("fs.close", this.fd);
          }
          _write(e) {
            let r = this;
            return new Promise((n, i) => {
              let a = 0,
                o = Ve.isAtLeastVersion("2.0.0");
              function s(l, u) {
                let f,
                  c,
                  d = e.subarray(l, u);
                o ? ((c = Ab.fromByteArray(d)), (f = "fs.write2")) : ((c = d.toString()), (f = "fs.write")),
                  Ve.call(f, r.fd, c, 0, u - l, r.position)
                    .then((x) => {
                      (a += x),
                        (r.position += x),
                        (r.fileLength = Math.max(r.fileLength, r.position)),
                        a >= e.length ? n(a) : s(a, a + Math.min(e.length - a, _h));
                    })
                    .catch(i);
              }
              s(0, Math.min(e.length, _h));
            });
          }
          _setPosition(e, r = t.POS_START) {
            switch (r) {
              case t.POS_START:
                this.position = e;
                break;
              case t.POS_END:
                this.position = this.fileLength - e;
                break;
              case t.POS_CUR:
                this.position += e;
                break;
            }
            return Promise.resolve();
          }
          write(...e) {
            let r = this;
            return r.writeControl(() => r._write(...e));
          }
          close(...e) {
            let r = this;
            return r.writeControl(() => r._close(...e));
          }
          setPosition(...e) {
            let r = this;
            return r.writeControl(() => r._setPosition(...e));
          }
          static open(e, r = {}, n) {
            return new Promise((i, a) => {
              let o = "r";
              r.write && ((o = "r+"), r.truncate && (o = "w+")),
                Ve.call("fs.open", e, o)
                  .catch((s) => {
                    if (o == "r+")
                      return Ve.call("fs.open", e, "w")
                        .then((l) => Ve.call("fs.close", l))
                        .then(() => Ve.call("fs.open", e, o));
                    throw s;
                  })
                  .then((s) => {
                    let l = new t(s);
                    r.truncate
                      ? i(l)
                      : Ve.call("fs.stat", e)
                          .then((u) => {
                            (l.fileLength = u.size), (l.position = u.size), i(l);
                          })
                          .catch(a);
                  })
                  .catch(a);
            });
          }
          static move(...e) {
            return Ve.call("fs.rename", ...e);
          }
          static remove(...e) {
            return Ve.call("fs.unlink", ...e);
          }
          static get POS_START() {
            return 0;
          }
          static get POS_CUR() {
            return 1;
          }
          static get POS_END() {
            return 2;
          }
        });
    });
  var yi = {};
  H(yi, {
    ReadInt16: () => kb,
    ReadInt24: () => Ib,
    ReadInt32: () => As,
    ReadInt64: () => _b,
    ReadInt8: () => qb,
    ReadString: () => Sb,
    WriteInt16: () => Pb,
    WriteInt24: () => Ob,
    WriteInt32: () => Eb,
    WriteInt8: () => Tb,
    dump: () => Cb
  });
  function Sb(t, e) {
    let r = [];
    for (; t[e]; ) r.push(t[e++]);
    return { string: String.fromCharCode.apply(null, r), length: r.length + 1 };
  }
  function As(t, e) {
    return (t[e] << 24) + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3];
  }
  function _b(t, e) {
    let r = As(t, e),
      n = As(t, e + 4);
    return r * 4294967296 + n;
  }
  function Ib(t, e) {
    return (t[e] << 16) + (t[e + 1] << 8) + t[e + 2];
  }
  function kb(t, e) {
    return (t[e] << 8) + t[e + 1];
  }
  function qb(t, e) {
    return t[e];
  }
  function Eb(t, e, r) {
    (t[e] = ((r >>> 24) & 255) >>> 0),
      (t[e + 1] = ((r >>> 16) & 255) >>> 0),
      (t[e + 2] = ((r >>> 8) & 255) >>> 0),
      (t[e + 3] = (r & 255) >>> 0);
  }
  function Ob(t, e, r) {
    (t[e] = ((r >>> 16) & 255) >>> 0), (t[e + 1] = ((r >>> 8) & 255) >>> 0), (t[e + 2] = (r & 255) >>> 0);
  }
  function Pb(t, e, r) {
    (t[e] = ((r >>> 8) & 255) >>> 0), (t[e + 1] = (r & 255) >>> 0);
  }
  function Tb(t, e, r) {
    t[e] = (r & 255) >>> 0;
  }
  function Cb(t, e, r) {
    (e = e || 0), (r = r || t.length);
    let n = [];
    for (let i = 0; i < r && i < t.length; i++) {
      i % 16 == 0 &&
        n.push(`
`);
      let a = t[e + i].toString(16).toUpperCase();
      if ((a.length == 1 && (a = "0" + a), n.push(a), (i + 1) % 16 == 0 || i == r - 1 || i == t.length - 1)) {
        for (let o = i + 1; o < ((i + 15) & 4294967280); o++) n.push("  ");
        a = "";
        for (let o = i & 4294967280; o <= i; o++) {
          let s = t[e + o];
          s >= 32 && s < 127 ? (a += String.fromCharCode(s)) : (a += ".");
        }
        n.push(a);
      }
    }
    return n.join(" ");
  }
  var vi = B(() => {});
  var Xr = {};
  H(Xr, {
    finalize: () => ux,
    firstBuffer: () => sx,
    flatten: () => ox,
    getTags: () => dx,
    length: () => ax,
    mdatBox: () => px,
    parse: () => fx,
    updateMdatLength: () => Ph,
    writeFileHeader: () => cx,
    writeMulti: () => lx
  });
  function lr(t) {
    if (Array.isArray(t)) {
      let e = 0;
      for (let r = 0, n = t.length; r < n; r++) e += lr(t[r]);
      return e;
    } else return t.length;
  }
  function Ih(t, e) {
    [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824].forEach(function (r, n) {
      h.WriteInt32(t, e + 4 * n, r);
    });
  }
  function Dt(t, e, r) {
    (e = e || new Uint8Array(t.length)), (r = r || 0);
    for (let n = 0, i = t.length; n < i; n++) e[r + n] = t.charCodeAt(n) & 255;
    return e;
  }
  function F(t, e) {
    let r = lr(e),
      n = new Uint8Array(4);
    return h.WriteInt32(n, 0, 8 + r), (t = (t + "    ").substring(0, 4)), [n, Dt(t), e];
  }
  function Rb(t, e) {
    let r = new Uint8Array(4);
    return h.WriteInt32(r, 0, 1), F("url ", r);
  }
  function Mb(t, e) {
    let r = new Uint8Array(8);
    h.WriteInt32(r, 0, 0), h.WriteInt32(r, 4, 1);
    let n = Rb(t, e);
    return F("dref", [r, n]);
  }
  function Db(t) {
    if (t.init && t.init.mvhd) {
      let r = t.init.mvhd;
      return h.WriteInt32(r, 12, 1e3), h.WriteInt32(r, 16, Math.round(t.secDuration * 1e3)), F("mvhd", t.init.mvhd);
    }
    let e = new Uint8Array(100);
    return (
      h.WriteInt8(e, 0, 0),
      h.WriteInt24(e, 1, 0),
      h.WriteInt32(e, 4, 0),
      h.WriteInt32(e, 8, 0),
      h.WriteInt32(e, 12, 1e3),
      h.WriteInt32(e, 16, t.getTotalDuration()),
      h.WriteInt32(e, 20, 65536),
      h.WriteInt16(e, 24, 256),
      Ih(e, 36),
      h.WriteInt32(e, 72, 0),
      h.WriteInt32(e, 76, 0),
      h.WriteInt32(e, 80, 0),
      h.WriteInt32(e, 84, 0),
      h.WriteInt32(e, 88, 0),
      h.WriteInt32(e, 92, 0),
      h.WriteInt32(e, 96, t.getNextTrackId()),
      F("mvhd", e)
    );
  }
  function Fb(t, e) {
    if (t.init && t.init.dinf && t.init.dinf[e.trackId]) return F("dinf", t.init.dinf[e.trackId]);
    let r = Mb(t, e);
    return F("dinf", r);
  }
  function Nb(t) {
    if (t.init && t.init.iods && t.init.iods) return F("iods", t.init.iods);
    let e = new Uint8Array(16);
    return (
      h.WriteInt32(e, 0, 0),
      h.WriteInt8(e, 4, 16),
      h.WriteInt32(e, 5, 2155905031),
      h.WriteInt16(e, 9, 79),
      h.WriteInt16(e, 11, 65535),
      h.WriteInt16(e, 13, 65278),
      h.WriteInt8(e, 15, 255),
      F("iods", e)
    );
  }
  function kh(t) {
    if (Array.isArray(t)) {
      let n = function (i) {
          if (Array.isArray(i)) for (let a = 0, o = i.length; a < o; a++) n(i[a]);
          else e.set(i, r), (r += i.length);
        },
        e = new Uint8Array(lr(t)),
        r = 0;
      return n(t), e;
    } else return t;
  }
  function qh(t) {
    return Array.isArray(t) ? (t.length == 0 ? null : qh(t[0])) : t;
  }
  function Ss(t, e, r) {
    (e = kh(e)),
      t.write(e).then(
        function () {
          r(null);
        },
        function (n) {
          r(n);
        }
      );
  }
  function Jr(t, e, r, n) {
    let i = 3;
    for (h.WriteInt8(t, e++, r); i > 0; i--) h.WriteInt8(t, e++, ((n >>> (7 * i)) | 128) >>> 0);
    h.WriteInt8(t, e++, n & 127);
  }
  function Eh(t, e) {
    e = e || t.length;
    let r = 0,
      n = [];
    for (;;) {
      if (e == 0) return n;
      if (e < 8) return null;
      let i = h.ReadInt32(t, r),
        a = 8;
      if ((i == 1 && ((i = h.ReadInt64(t, r + 8)), (a = 16)), i > e || i < 8)) return null;
      let o = String.fromCharCode(h.ReadInt8(t, r + 4), h.ReadInt8(t, r + 5), h.ReadInt8(t, r + 6), h.ReadInt8(t, r + 7));
      n.push({ name: o, offset: r, length: i, dataOffset: r + a, dataLength: i - a, data: t.subarray(r + a, r + i) }), (r += i), (e -= i);
    }
  }
  function Oh(t, e, r) {
    let n = [],
      i = Eh(e, r);
    if (!i) return n;
    for (let a = 0, o = i.length; a < o; a++) {
      let s = i[a];
      s.name == t && n.push(s);
    }
    return n;
  }
  function jb(t, e) {
    if (t.init && t.init.tkhd && t.init.tkhd[e.trackId]) {
      let n = t.init.tkhd[e.trackId],
        i = Math.round(e.secDuration * e.timeScale);
      return h.WriteInt32(n, 20, i), F("tkhd", t.init.tkhd[e.trackId]);
    }
    let r = new Uint8Array(84);
    return (
      h.WriteInt24(r, 1, 3),
      h.WriteInt32(r, 4, 0),
      h.WriteInt32(r, 8, 0),
      h.WriteInt32(r, 12, e.trackId),
      h.WriteInt32(r, 20, t.getTrackDuration(e)),
      h.WriteInt16(r, 32, 0),
      h.WriteInt16(r, 34, 0),
      e.streamType == "audio" && h.WriteInt16(r, 36, 256),
      h.WriteInt16(r, 38, 0),
      Ih(r, 40),
      e.streamType == "video" && (h.WriteInt16(r, 76, e.width), h.WriteInt16(r, 80, e.height)),
      F("tkhd", r)
    );
  }
  function Wb(t, e) {
    if (t.init && t.init.mdhd && t.init.mdhd[e.trackId]) {
      let n = t.init.mdhd[e.trackId];
      return h.WriteInt32(n, 12, e.timeScale), h.WriteInt32(n, 16, Math.round(e.secDuration * e.timeScale)), F("mdhd", n);
    }
    let r = new Uint8Array(24);
    if ((h.WriteInt32(r, 0, 0), h.WriteInt32(r, 4, 0), h.WriteInt32(r, 8, 0), e.streamType == "video")) {
      h.WriteInt32(r, 12, 9e4);
      let n = t.getTrackDuration(e) * 90;
      h.WriteInt32(r, 16, n);
    } else {
      h.WriteInt32(r, 12, e.declaredSampleRate);
      let n = e.sampleCount * 1024;
      h.WriteInt32(r, 16, n);
    }
    return h.WriteInt16(r, 20, 21956), h.WriteInt16(r, 22, 0), F("mdhd", r);
  }
  function Ub(t, e) {
    if (t.init && t.init.vmhd && t.init.vmhd[e.trackId]) return F("vmhd", t.init.vmhd[e.trackId]);
    let r = new Uint8Array(12);
    return h.WriteInt32(r, 0, 1), h.WriteInt16(r, 4, 0), h.WriteInt16(r, 6, 0), h.WriteInt16(r, 8, 0), h.WriteInt16(r, 10, 0), F("vmhd", r);
  }
  function Lb(t, e) {
    if (t.init && t.init.smhd && t.init.smhd[e.trackId]) return F("smhd", t.init.smhd[e.trackId]);
    let r = new Uint8Array(8);
    return h.WriteInt32(r, 0, 0), h.WriteInt16(r, 4, 0), h.WriteInt16(r, 6, 0), F("smhd", r);
  }
  function Bb(t, e) {
    let r = new Uint8Array(20);
    return (
      h.WriteInt32(r, 0, 0),
      h.WriteInt32(r, 4, 1),
      h.WriteInt32(r, 8, t.getTrackDuration(e)),
      h.WriteInt32(r, 12, e.shiftTs),
      h.WriteInt16(r, 16, 1),
      h.WriteInt16(r, 18, 0),
      F("elst", r)
    );
  }
  function Hb(t, e) {
    let r = t.init && t.init.edts && t.init.edts[e.trackId];
    if (r) {
      let i = Oh("elst", r);
      if (i.length > 0) {
        let a = h.ReadInt32(i[0].data, 12);
        h.WriteInt32(i[0].data, 8, Math.round(e.secDuration * 1e3) - a);
      }
      return F("edts", r);
    }
    if (!e.shiftTs) return [];
    let n = Bb(t, e);
    return F("edts", n);
  }
  function zb(t, e) {
    if (t.init && t.init.hdlr && t.init.hdlr[e.trackId]) return F("hdlr", t.init.hdlr[e.trackId]);
    let r = "VideoHandler",
      n = new Uint8Array(25 + r.length);
    return (
      h.WriteInt32(n, 0, 0),
      e.streamType == "audio" && Dt("mhlr", n, 4),
      e.streamType == "audio" ? Dt("soun", n, 8) : e.streamType == "video" && Dt("vide", n, 8),
      h.WriteInt32(n, 12, 0),
      h.WriteInt32(n, 16, 0),
      h.WriteInt32(n, 20, 0),
      Dt(r, n, 24),
      F("hdlr", n)
    );
  }
  function Vb(t, e) {
    if (e.sampleSizes) {
      let n = !0,
        i;
      if (Array.isArray(e.sampleSizes)) {
        i = e.sampleSizes[0];
        for (let o = 1; o < e.sampleSizes.length; o++)
          if (e.sampleSizes[o] != i) {
            n = !1;
            break;
          }
      } else {
        i = h.ReadInt32(e.sampleSizes.data, 0);
        for (let o = 1; o < e.sampleSizes.length; o++)
          if (h.ReadInt32(e.sampleSizes.data, o * 4) != i) {
            n = !1;
            break;
          }
      }
      let a;
      if (n) (a = new Uint8Array(12)), h.WriteInt32(a, 4, i);
      else if (((a = new Uint8Array(12 + 4 * e.sampleSizes.length)), Array.isArray(e.sampleSizes)))
        for (let o = 0; o < e.sampleSizes.length; o++) h.WriteInt32(a, 12 + o * 4, e.sampleSizes[o]);
      else a.set(e.sampleSizes.data.subarray(0, e.sampleSizes.length * 4), 12);
      return h.WriteInt32(a, 8, e.sampleSizes.length), F("stsz", a);
    }
    let r = new Uint8Array(e.dataSizes.length * 4 + 12);
    if ((h.WriteInt32(r, 4, 0), h.WriteInt32(r, 8, e.dataSizes.length), Array.isArray(e.dataSizes)))
      for (let n = 0; n < e.dataSizes.length; n++) h.WriteInt32(r, 12 + n * 4, e.dataSizes[n]);
    else r.set(e.dataSizes.data.subarray(0, e.dataSizes.length * 4), 12);
    return F("stsz", r);
  }
  function $b(t, e) {
    if (!e.sps || !e.pps) return [];
    let r = new Uint8Array(e.sps),
      n = new Uint8Array(e.pps),
      i = new Uint8Array(11 + r.length + n.length);
    h.WriteInt8(i, 0, 1),
      h.WriteInt8(i, 1, r[1]),
      h.WriteInt8(i, 2, r[2]),
      h.WriteInt8(i, 3, r[3]),
      h.WriteInt8(i, 4, 255),
      h.WriteInt8(i, 5, 225),
      h.WriteInt16(i, 6, r.length),
      i.set(r, 8);
    let a = 8 + r.length;
    return h.WriteInt8(i, a, 1), h.WriteInt16(i, a + 1, n.length), i.set(n, a + 3), F("avcC", i);
  }
  function Gb(t, e) {
    let r = new Uint8Array(78);
    h.WriteInt32(r, 0, 0),
      h.WriteInt16(r, 4, 0),
      h.WriteInt16(r, 6, 1),
      h.WriteInt16(r, 8, 0),
      h.WriteInt16(r, 10, 0),
      h.WriteInt32(r, 12, 0),
      h.WriteInt32(r, 16, 0),
      h.WriteInt32(r, 20, 0),
      h.WriteInt16(r, 24, e.width),
      h.WriteInt16(r, 26, e.height),
      h.WriteInt32(r, 28, 4718592),
      h.WriteInt32(r, 32, 4718592),
      h.WriteInt32(r, 36, 0),
      h.WriteInt16(r, 40, 1),
      h.WriteInt16(r, 74, 24),
      h.WriteInt16(r, 76, 65535);
    let n = $b(t, e);
    return F("avc1", [r, n]);
  }
  function Kb(t, e) {
    let r = null;
    if (typeof e.mp4aProfile < "u" && typeof e.mp4aRateIndex < "u" && typeof e.mp4aChannelCount < "u") {
      let o = 0;
      (o |= e.mp4aProfile << 11),
        (o |= e.mp4aRateIndex << 7),
        (o |= e.mp4aChannelCount << 3),
        (r = new Uint8Array(2)),
        h.WriteInt16(r, 0, o);
    }
    let n = new Uint8Array(36 + (r ? r.length + 5 : 0));
    h.WriteInt32(n, 0, 0),
      Jr(n, 4, 3, 27 + (r ? r.length + 5 : 0)),
      h.WriteInt16(n, 9, e.trackId),
      h.WriteInt8(n, 11, 0),
      Jr(n, 12, 4, 23),
      h.WriteInt8(n, 17, 64),
      h.WriteInt8(n, 18, 21),
      h.WriteInt24(n, 19, 0);
    let i = 0;
    if (e.sampleSizes)
      if (Array.isArray(e.sampleSizes)) for (let o = 0; o < e.sampleSizes.length; o++) i += e.sampleSizes[o];
      else for (let o = 0; o < e.sampleSizes.length; o++) i += h.ReadInt32(e.sampleSizes.data, o * 4);
    else if (Array.isArray(e.dataSizes)) for (let o = 0; o < e.dataSizes.length; o++) i += e.dataSizes[o];
    else for (let o = 12; o < e.dataSizes.length; o += 4) i += h.ReadInt32(e.dataSizes.data, o);
    let a = Math.round((i * 8) / e.durationSec);
    return (
      h.WriteInt32(n, 22, (e.maxBitrate && Math.round(e.maxBitrate)) || a * 2),
      h.WriteInt32(n, 26, a),
      r
        ? (Jr(n, 30, 5, r.length), n.set(r, 35), Jr(n, 35 + r.length, 6, 1), h.WriteInt8(n, 40 + r.length, 2))
        : (Jr(n, 30, 6, 1), h.WriteInt8(n, 35, 2)),
      F("esds", n)
    );
  }
  function Yb(t, e) {
    let r = new Uint8Array(28);
    h.WriteInt32(r, 0, 0),
      h.WriteInt32(r, 4, 1),
      h.WriteInt32(r, 8, 0),
      h.WriteInt32(r, 12, 0),
      h.WriteInt16(r, 16, 2),
      h.WriteInt16(r, 18, 16),
      h.WriteInt16(r, 20, 0),
      h.WriteInt16(r, 22, 0);
    let n = (t.mpd && t.mpd.sample_rate) || e.declaredSampleRate || e.sampleRate || 48e3;
    h.WriteInt16(r, 24, n), h.WriteInt16(r, 26, 0);
    let i = Kb(t, e);
    return F("mp4a", [r, i]);
  }
  function Jb(t, e) {
    if (e.stsc) {
      let n, i;
      if (typeof e.stsc[0] == "object") {
        (i = e.stsc.length), (n = new Uint8Array(8 + 12 * i)), h.WriteInt32(n, 0, 0), h.WriteInt32(n, 4, i);
        for (let a = 0; a < e.stsc.length; a++) {
          let o = e.stsc[a];
          h.WriteInt32(n, 8 + 12 * a, o.first_chunk + 1),
            h.WriteInt32(n, 8 + 12 * a + 4, o.samples_per_chunk),
            h.WriteInt32(n, 8 + 12 * a + 8, o.sample_description_index + 1);
        }
      } else {
        (i = e.stsc.length / 3), (n = new Uint8Array(8 + 12 * i)), h.WriteInt32(n, 0, 0), h.WriteInt32(n, 4, i);
        for (let a = 0; a < e.stsc.length; a++)
          h.WriteInt32(n, 8 + 12 * a, e.stsc[3 * a]),
            h.WriteInt32(n, 8 + 12 * a + 4, e.stsc[3 * a + 1]),
            h.WriteInt32(n, 8 + 12 * a + 8, e.stsc[3 * a + 2]);
      }
      return F("stsc", n);
    }
    let r = new Uint8Array(20);
    return (
      h.WriteInt32(r, 0, 0), h.WriteInt32(r, 4, 1), h.WriteInt32(r, 8, 1), h.WriteInt32(r, 12, 1), h.WriteInt32(r, 16, 1), F("stsc", r)
    );
  }
  function Xb(t, e) {
    if (t.init && t.init.stsd && t.init.stsd[e.trackId]) return F("stsd", t.init.stsd[e.trackId]);
    let r = new Uint8Array(8);
    h.WriteInt32(r, 0, 0), h.WriteInt32(r, 4, 1);
    let n = [];
    return (
      e.streamType == "audio"
        ? e.codec.strTag == "mp4a" && (n = Yb(t, e))
        : e.streamType == "video" && e.codec.strTag == "avc1" && (n = Gb(t, e)),
      F("stsd", [r, n])
    );
  }
  function Zb(t, e) {
    if (e.stts) {
      let a = new Uint8Array(8 + 8 * e.stts.length);
      h.WriteInt32(a, 0, 0), h.WriteInt32(a, 4, e.stts.length);
      for (let o = 0; o < e.stts.length; o++) {
        let s = e.stts[o];
        h.WriteInt32(a, 8 + 8 * o, s.c), h.WriteInt32(a, 8 + 8 * o + 4, s.d);
      }
      return F("stts", a);
    }
    let r = [],
      n = Array.isArray(e.dataTimestamps) ? e.dataTimestamps.length : e.dataTimestamps.length / 2;
    for (let a = 0; a < n; ) {
      let o = 0,
        s = 1;
      if (Array.isArray(e.dataTimestamps)) for (; a + s < n && e.dataTimestamps[a + s] <= e.dataTimestamps[a]; s++);
      else for (; a + s < n && h.ReadInt64(e.dataTimestamps.data, (a + s) * 8) <= h.ReadInt64(e.dataTimestamps.data, a * 8); s++);
      a + s < n &&
        (Array.isArray(e.dataTimestamps)
          ? (o = (e.dataTimestamps[a + s] - e.dataTimestamps[a]) / s)
          : (o = (h.ReadInt64(e.dataTimestamps.data, (a + s) * 8) - h.ReadInt64(e.dataTimestamps.data, a * 8)) / s),
        e.declaredSampleRate && (o = Math.round((o * e.declaredSampleRate) / 9e4))),
        (a += s),
        o && (r.length == 0 || r[r.length - 1].duration != o)
          ? r.push({ duration: o, count: s })
          : r.length > 0 && (r[r.length - 1].count += s);
    }
    let i = new Uint8Array(8 + 8 * r.length);
    h.WriteInt32(i, 0, 0), h.WriteInt32(i, 4, r.length);
    for (let a = 0; a < r.length; a++) h.WriteInt32(i, 8 + 8 * a, r[a].count), h.WriteInt32(i, 12 + 8 * a, r[a].duration);
    return F("stts", i);
  }
  function Qb(t, e) {
    let r = new Uint8Array(8 + 4 * e.keyFrames.length);
    if ((h.WriteInt32(r, 0, 0), h.WriteInt32(r, 4, e.keyFrames.length), Array.isArray(e.keyFrames)))
      for (let n = 0; n < e.keyFrames.length; n++) h.WriteInt32(r, 8 + 4 * n, e.keyFrames[n]);
    else r.set(e.keyFrames.data.subarray(0, e.keyFrames.length * 4), 8);
    return F("stss", r);
  }
  function ex(t, e) {
    let r = typeof e.dataOffsets[0] == "object" ? e.dataOffsets.length : e.dataOffsets.length / 2,
      n = new Uint8Array(8 + r * 4);
    h.WriteInt32(n, 0, 0), h.WriteInt32(n, 4, r);
    for (let i = 0; i < r; i++) {
      let a;
      typeof e.dataOffsets[i] == "object" ? (a = e.dataOffsets[i]) : (a = { b: e.dataOffsets[2 * i], o: e.dataOffsets[2 * i + 1] });
      let o = a.o + t.mdatOffsets[a.b];
      h.WriteInt32(n, 8 + i * 4, o);
    }
    return F("stco", n);
  }
  function tx(t, e) {
    let r = typeof e.dataOffsets[0] == "object" ? e.dataOffsets.length : e.dataOffsets.length / 2,
      n = new Uint8Array(8 + r * 8);
    h.WriteInt32(n, 0, 0), h.WriteInt32(n, 4, r);
    for (let i = 0; i < r; i++) {
      let a;
      typeof e.dataOffsets[i] == "object" ? (a = e.dataOffsets[i]) : (a = { b: e.dataOffsets[2 * i], o: e.dataOffsets[2 * i + 1] });
      let o = a.o + t.mdatOffsets[a.b];
      h.WriteInt32(n, 8 + i * 8, Math.floor(o / 4294967296)), h.WriteInt32(n, 12 + i * 8, o & 4294967295);
    }
    return F("co64", n);
  }
  function rx(t, e) {
    let r = Xb(t, e),
      n = Vb(t, e),
      i = Zb(t, e),
      a = e.streamType == "video" ? Qb(t, e) : [],
      o = Jb(t, e),
      s = t.multiMdat ? tx(t, e) : ex(t, e);
    return F("stbl", [r, i, a, o, n, s]);
  }
  function nx(t, e) {
    let r = e.streamType == "video" ? Ub(t, e) : [],
      n = e.streamType == "audio" ? Lb(t, e) : [],
      i = Fb(t, e),
      a = rx(t, e);
    return F("minf", [r, n, i, a]);
  }
  function ix(t, e) {
    let r = Wb(t, e),
      n = zb(t, e),
      i = nx(t, e);
    return F("mdia", [r, n, i]);
  }
  function Ph(t, e, r, n) {
    let i = { write: !0, append: !1 };
    sr.File.open(t.downloadTarget + ".part", i).then(
      function (a) {
        a.setPosition(e, sr.File.POS_START).then(
          function () {
            let o = new Uint8Array(4);
            h.WriteInt32(o, 0, r + 8),
              a.write(o).then(
                function () {
                  a.close()
                    .catch(() => {})
                    .then(() => {
                      n(null);
                    });
                },
                function (s) {
                  a.close()
                    .catch(() => {})
                    .then(() => {
                      n(s);
                    });
                }
              );
          },
          function (o) {
            a.close()
              .catch(() => {})
              .then(() => {
                n(o);
              });
          }
        );
      },
      function (a) {
        n(a);
      }
    );
  }
  function ux(t, e, r, n) {
    function i() {
      let a = [];
      (t.secDuration = 0),
        e.forEach(function (f) {
          (f.scaledDuration = 0),
            (f.secDuration = 0),
            (f.stts || []).forEach((c) => {
              f.scaledDuration += c.c * c.d;
            }),
            t.timeScale &&
              t.timeScale[f.trackId] &&
              ((f.timeScale = t.timeScale[f.trackId]), (f.secDuration = f.scaledDuration / f.timeScale)),
            (t.secDuration = Math.max(t.secDuration, f.secDuration));
        }),
        e.forEach(function (f) {
          let c = jb(t, f),
            d = ix(t, f),
            v = Hb(t, f),
            x = F("trak", [c, v, d]);
          a.push(x);
        });
      let o = Db(t),
        s = Nb(t),
        l = F("moov", [o, s, a]),
        u = { write: !0, append: !1 };
      sr.File.open(t.downloadTarget + ".part", u).then(
        function (f) {
          f.setPosition(0, sr.File.POS_END).then(
            function () {
              Ss(f, l, function (c) {
                f.close()
                  .catch(() => {})
                  .then(
                    () =>
                      new Promise((d, v) => {
                        setTimeout(d, 250);
                      })
                  )
                  .then(() => {
                    if (c) n(c);
                    else {
                      let d = () => n(null),
                        v = t.downloadTarget;
                      sr.File.move(v + ".part", v).then(d, n);
                    }
                  });
              });
            },
            function (c) {
              n(c);
            }
          );
        },
        function (f) {
          n(f);
        }
      );
    }
    t.rawAppendData
      ? n(null)
      : t.currentDataBlockSize > 0
      ? Ph(t, t.mdatLengthOffset, t.currentDataBlockSize, function (a) {
          if (a) return n(a);
          i();
        })
      : i();
  }
  function cx(t, e) {
    let r;
    if (t.init && t.init.ftyp) r = F("ftyp", t.init.ftyp);
    else {
      let a = new Uint8Array(4);
      h.WriteInt32(a, 0, 512), (r = F("ftyp", [Dt("isom"), a, Dt("isomiso2avc1mp41")]));
    }
    let n = F("free", []);
    t.fileSize = t.lastDataIndex = lr(r) + lr(n);
    let i = { write: !0, append: !1, truncate: !0 };
    sr.File.open(t.downloadTarget + ".part", i, { unixMode: 420 }).then(
      function (a) {
        Ss(a, [r, n], function (o) {
          a.close()
            .catch(() => {})
            .then(() => {
              e(o || null);
            });
        });
      },
      function (a) {
        e(a);
      }
    );
  }
  function px() {
    return F("mdat", []);
  }
  var sr,
    h,
    ax,
    ox,
    sx,
    lx,
    fx,
    dx,
    Zr = B(() => {
      (sr = (xs(), S(bs))), (h = (vi(), S(yi)));
      (ax = lr), (ox = kh), (sx = qh), (lx = Ss);
      (fx = Eh), (dx = Oh);
    });
  var ks = {};
  H(ks, { Chunkset: () => Is, Codecs: () => yx });
  var _s,
    Ft,
    hx,
    gx,
    Th,
    Qr,
    wi,
    mx,
    yx,
    Is,
    qs = B(() => {
      (_s = z()),
        (Ft = (Zr(), S(Xr))),
        (hx = (vt(), S(yt))),
        (gx = (Hr(), S(Br))),
        (Th = (oe(), S(ae))),
        (Qr = (xs(), S(bs))),
        (wi = (ge(), S(he))),
        (mx = (De(), S(Me))),
        (yx = {
          27: { id: 27, type: "video", name: "h264", strTag: "avc1", tag: 1635148593, captureRaw: !0 },
          15: { id: 15, type: "audio", name: "aac", strTag: "mp4a", tag: 1836069985, captureRaw: !0 }
        }),
        (Is = class {
          constructor(e) {
            let r = (e && e.url && Th.hashHex(e.url)) || "nohash";
            (this.id = "chunked:" + r),
              (this.chunks = []),
              (this.hash = r),
              (this.recording = !1),
              (this.lastDlingIndex = -1),
              (this.lastDledIndex = -1),
              (this.lastProcedIndex = -1),
              (this.downloadingCount = 0),
              (this.nextTrackId = 1),
              (this.lastProgress = -1),
              (this.processedChunksCount = 0),
              (this.dataWritten = 0),
              (this.currentDataBlockSize = -1),
              (this.fileSize = 0),
              (this.mdatOffsets = []),
              (this.multiMdat = !1),
              (this.rawAppendData = !1),
              (this.hit = Object.assign({}, e, { id: this.id, length: 0, url: (e && e.url) || null }));
          }
          updateHit(e) {
            (this.hit.length = (this.hit.length || 0) + (e.length || 0)),
              hx.newData(this.hit),
              this.chunks.push({ url: e.url, index: this.chunks.length });
          }
          handle() {
            let e = _s.unsafe_prefs;
            if (this.recording) {
              for (
                ;
                this.downloadingCount < e.chunksConcurrentDownloads &&
                this.lastDlingIndex + 1 < this.chunks.length &&
                this.lastDledIndex - this.lastProcedIndex < e.chunksPrefetchCount;

              )
                this.progressFn && this.lastProgress < 0 && ((this.lastProgress = 0), this.progressFn(0)),
                  this.downloadingCount++,
                  this.downloadChunk.call(this, this.chunks[++this.lastDlingIndex], function (r, n) {
                    if ((this.downloadingCount--, r)) {
                      if (!this.recording) return;
                      this.stopDownloadingOnChunkError
                        ? ((this.noMoreChunkToDownload = !0),
                          n.index < this.chunks.length &&
                            (this.chunks.splice(n.index),
                            n.index > 0
                              ? this.chunks[n.index - 1] === null && ((this.recording = !1), this.finalize(null))
                              : this.recording && ((this.recording = !1), this.finalize(new Error("No chunk received")))),
                          this.handle())
                        : ((this.recording = !1),
                          (this.lastDlingIndex = this.lastDledIndex),
                          this.doNotReportDownloadChunkErrors && this.lastDledIndex >= 0
                            ? this.finalize(null, function () {})
                            : (console.warn("Error downloading chunk:", r.message || r),
                              gx.error(r),
                              (this.aborted = !0),
                              this.finalize(r, function () {})));
                    } else
                      for (
                        n.downloading = !1, n.downloaded = !0;
                        this.lastDledIndex + 1 < this.chunks.length && this.chunks[this.lastDledIndex + 1].downloaded;

                      )
                        this.lastDledIndex++;
                    if (this.aborted) {
                      n.path && (Qr.File.remove(n.path), delete n.path);
                      return;
                    }
                    this.handle();
                  });
              this.recording &&
                this.lastProcedIndex < this.lastDledIndex &&
                this.lastProcedIndex < this.chunks.length - 1 &&
                !this.chunks[this.lastProcedIndex + 1].processing &&
                this.processChunk.call(this, this.chunks[this.lastProcedIndex + 1], function (r, n) {
                  r && console.warn("Error processing chunk: move to next chunk", r),
                    (n.processing = !1),
                    (this.lastProcedIndex = n.index),
                    n.path && Qr.File.remove(n.path),
                    this.handle(),
                    (this.chunks[n.index] = null);
                });
            }
          }
          downloadChunk(e, r) {
            if (e.downloaded) return r.call(this, null, e);
            e.downloading = !0;
            let n = this;
            async function i(o) {
              let s = await _s.prefs;
              s.chunkedCoappDataRequests
                ? mx
                    .requestBinary(e.url, { headers: n.hit.headers || [], proxy: (s.coappUseProxy && n.hit.proxy) || null })
                    .then((l) => {
                      (e.data = l), o.call(n, null, e);
                    })
                    .catch((l) => {
                      o.call(n, l, e);
                    })
                : Th.downloadToByteArray(e.url, n.hit.headers || null, n.hit.isPrivate)
                    .then((l) => {
                      (e.data = l), o.call(n, null, e);
                    })
                    .catch((l) => {
                      o.call(n, l, e);
                    });
            }
            e.downloadRetries = 0;
            async function a(o, s) {
              let l = await _s.prefs;
              o && s.downloadRetries++ <= l.downloadRetries
                ? setTimeout(function () {
                    n.recording && i(a);
                  }, l.downloadRetryDelay)
                : (delete s.downloadRetries, r.call(n, o, s));
            }
            i(a);
          }
          processChunkData(e, r) {
            r.call(this, null, e);
          }
          processChunk(e, r) {
            let n = this;
            e.processing = !0;
            function i(a) {
              function o() {
                n.processChunkData(a, function (s, l) {
                  s
                    ? r.call(n, s, e)
                    : n.appendDataToOutputFile(l, function (u) {
                        if ((u || (n.dataWritten += Ft.length(l)), n.processedSegmentsCount++, n.processedSegmentsCount >= n.segmentsCount))
                          n.outOfChunks();
                        else if (n.progressFn && !n.aborted) {
                          let f = Math.round((n.processedSegmentsCount * 100) / (n.segmentsCount || n.chunks.length || 1));
                          f != n.lastProgress && n.progressFn(f), (n.lastProgress = f);
                        }
                        r.call(n, u, e);
                      });
                });
              }
              n.endsOnSeenChunk
                ? crypto.subtle.digest({ name: "SHA-256" }, a).then(function (s) {
                    let l = [],
                      u = new DataView(s);
                    for (let c = 0; c < u.byteLength; c += 4) {
                      let v = u.getUint32(c).toString(16),
                        x = "00000000",
                        A = (x + v).slice(-x.length);
                      l.push(A);
                    }
                    let f = l.join("");
                    if (((n.seenChunks = n.seenChunks || {}), n.seenChunks[f])) {
                      (n.recording = !1), n.finalize(null);
                      return;
                    }
                    (n.seenChunks[f] = !0), o();
                  })
                : o();
            }
            e.data
              ? i(e.data)
              : Qr.File.read(e.path).then(
                  function (a) {
                    i(a);
                  },
                  function (a) {
                    r.call(n, a, e);
                  }
                );
          }
          outOfChunks() {
            (this.recording = !1), this.finalize(null);
          }
          download(e, r, n, i, a) {
            let o = this;
            (this.downloadTarget = r[0].fileName),
              (this.aborted = !1),
              (this.action = e),
              Ft.writeFileHeader(this, function (s) {
                s ? i(s) : ((o.recording = !0), o.handle());
              });
          }
          getNextTrackId() {
            return this.nextTrackId;
          }
          setNewId() {
            let e = 1;
            for (; wi.getHit(this.id + "-" + e); ) e++;
            (this.id = this.id + "-" + e),
              this.hit && (this.hit.id = this.id),
              this.action && this.action.hit && (this.action.hit.id = this.id);
          }
          finalize(e, r) {
            if (
              (this.cleanupChunkFiles(),
              this.progressFn && this.progressFn(100),
              e && this.errorFn ? this.errorFn(e) : !e && this.successFn && this.successFn(),
              !e)
            ) {
              let n = wi.getHit(this.id);
              if (n) {
                let i = Object.assign({}, n);
                (this.hit = i),
                  delete i.url,
                  wi.dispatch("hit.delete", this.id),
                  this.setNewId(),
                  (i.id = this.id),
                  wi.dispatch("hit.new", i);
              }
            }
            r && r(e);
          }
          appendDataToOutputFile(e, r) {
            let n = this,
              i = Ft.length(e);
            function a() {
              (n.currentDataBlockSize += i),
                n.appendToOutputFile(e, function (s) {
                  if (s) return r(s);
                  r(null);
                });
            }
            function o() {
              n.mdatOffsets.push(n.lastDataIndex + 8);
              let s = Ft.mdatBox();
              n.appendToOutputFile(s, function (l, u) {
                if (l) return r(l);
                (n.lastDataIndex = u + i), (n.mdatLengthOffset = u - 8), (n.currentDataBlockSize = 0), a();
              });
            }
            this.rawAppendData
              ? (this.mdatOffsets.push(this.lastDataIndex), a(), (this.lastDataIndex += i))
              : this.currentDataBlockSize < 0
              ? o()
              : this.currentDataBlockSize + i > 1e9
              ? ((this.multiMdat = !0),
                Ft.updateMdatLength(this, this.mdatLengthOffset, this.currentDataBlockSize, function (s) {
                  if (s) return r(s);
                  o();
                }))
              : (this.mdatOffsets.push(this.lastDataIndex), a(), (this.lastDataIndex += i));
          }
          appendToOutputFile(e, r) {
            let n = this;
            if (this.aborted) return r(null);
            function i() {
              if (n.aborted) {
                for (; n.pendingAppend.length > 0; ) n.pendingAppend.shift().callback(null);
                return;
              }
              n.appendFileTimer && clearTimeout(n.appendFileTimer),
                (n.appendFileTimer = setTimeout(function () {
                  n.file.close(), (n.file = null);
                }, 5e3));
              let a = 0;
              for (; n.pendingAppend.length > 0; ) {
                let o = n.pendingAppend.shift();
                a++,
                  (function (s) {
                    Ft.writeMulti(n.file, s.data, function (l) {
                      let u = Ft.length(e);
                      if (((n.fileSize += u), s.callback(l, n.fileSize), a--, a == 0 && n.waitingDataWritten))
                        for (; n.waitingDataWritten.length; ) n.waitingDataWritten.shift()();
                    });
                  })(o);
              }
            }
            if (((this.pendingAppend = this.pendingAppend || []), this.pendingAppend.push({ data: e, callback: r }), this.file)) i(e, r);
            else if (!this.openingAppendFile) {
              this.openingAppendFile = !0;
              let a = { write: !0, append: !0 },
                o = n.downloadTarget;
              this.rawAppendData || (o += ".part"),
                Qr.File.open(o, a).then(
                  function (s) {
                    (n.openingAppendFile = !1), (n.file = s), i();
                  },
                  function (s) {
                    for (n.openingAppendFile = !1; n.pendingAppend.length > 0; ) n.pendingAppend.shift().callback(s);
                  }
                );
            }
          }
          waitForWrittenData(e) {
            this.aborted
              ? e()
              : this.pendingAppend && this.pendingAppend.length
              ? ((this.waitingDataWritten = this.waitingDataWritten || []), this.waitingDataWritten.push(e))
              : e();
          }
          cleanupChunkFiles() {
            for (let e = Math.max(0, this.lastProcedIndex); e < Math.max(0, this.lastDledIndex); e++) {
              let r = this.chunks[e];
              r && r.path && (Qr.File.remove(r.path), (r = null));
            }
          }
          actionAbortFn() {
            (this.recording = !1), (this.aborted = !0);
          }
        });
    });
  var Rh = q(() => {
    var { browser: vx } = qt(),
      bi = new Map(),
      Ch = new BroadcastChannel("workerfactory-inner");
    Ch.addEventListener("message", (t) => {
      if (t.data.type == "spawn-worker") {
        let e = t.data.path;
        if (bi.has(e)) throw new Error(`Worker already running: ${e}`);
        let r = vx.runtime.getURL(`/content/${e}`),
          n = new Worker(r);
        bi.set(e, n);
      } else if (t.data.type == "kill-worker") {
        let e = t.data.path,
          r = bi.get(e);
        if (!r) throw new Error("Worker not running.");
        r.terminate(), bi.delete(e), Ch.postMessage({ type: "worker-killed", worker_path: e });
      }
    });
  });
  var Dh = {};
  H(Dh, { init: () => bx });
  async function wx(t, e) {
    Es ||
      (Ai ||
        (Ai = chrome.offscreen.createDocument({
          url: "content/workerfactory.html",
          reasons: [chrome.offscreen.Reason.WORKERS],
          justification: "Working around the lack of worker in Service Worker"
        })),
      await Ai);
    let r = new BroadcastChannel(t);
    await new Promise((c, d) => {
      let v = (x) => {
        x.data == "worker-ready" && (r.removeEventListener("message", v), c());
      };
      r.addEventListener("message", v), xi.postMessage({ type: "spawn-worker", path: t });
    });
    let i = (c, d) => {
        r.postMessage(d);
      },
      a = (c) => {
        c.data.type == "weh#rpc" && Mh.receive(c.data, i, t);
      };
    r.addEventListener("message", a);
    let o = () => {
        let c = (d) => {
          let v = d.data.type == "worker-killed",
            x = d.data.worker_path == t;
          !v ||
            !x ||
            (en.delete(t),
            r.close(),
            xi.removeEventListener("message", c),
            !Es && en.size == 0 && ((Ai = null), chrome.offscreen.closeDocument()));
        };
        xi.addEventListener("message", c), xi.postMessage({ type: "kill-worker", path: t });
      },
      s;
    function l() {
      s = setTimeout(o, e);
    }
    function u() {
      clearTimeout(s);
    }
    let f = 0;
    return (
      l(t),
      (...c) => {
        f++, u();
        try {
          return Mh.call(i, t, ...c);
        } finally {
          f--, f == 0 && l(t);
        }
      }
    );
  }
  function bx(t, e = 6e4) {
    return async (...r) => {
      if (en.has(t)) return en.get(t)(...r);
      {
        let n = await wx(t, e);
        return en.set(t, n), n(...r);
      }
    };
  }
  var Mh,
    Es,
    xi,
    en,
    Ai,
    Fh = B(() => {
      (Mh = Xe()),
        (Es = ot().buildOptions.browser == "firefox"),
        (xi = new BroadcastChannel("workerfactory-inner")),
        (en = new Map()),
        (Ai = null);
      Es && Rh();
    });
  var Wh = {};
  H(Wh, { MP2TChunkset: () => Os });
  var xx,
    Nh,
    Ax,
    jh,
    tn,
    Sx,
    _x,
    Os,
    Uh = B(() => {
      (xx = z()),
        (Nh = (Zr(), S(Xr))),
        (Ax = (vt(), S(yt))),
        (jh = (qs(), S(ks))),
        (tn = jh.Chunkset),
        (Sx = jh.Codecs),
        (_x = (Fh(), S(Dh)).init("mp2t-worker.js", 6e4)),
        (Os = class extends tn {
          constructor(e) {
            super(e);
            let r = xx.unsafe_prefs;
            (this.rawAppendData = r.hlsDownloadAsM2ts || e.mp3Direct),
              (this.codecs = Sx),
              (this.captureRaw = r.mpegtsSaveRaw),
              (this.captureRawStreams = r.mpegtsSaveRawStreams),
              (this.endsOnSeenChunk = r.mpegtsEndsOnSeenChunk),
              (this.pesTable = {}),
              (this.processQueue = []),
              (this.workerWorking = !1);
          }
          toUint8ArrayArray(e) {
            let r = [];
            function n(i) {
              if (Array.isArray(i)) for (let a = 0; a < i.length; a++) n(i[a]);
              else i.byteLength > 0 && r.push(new Uint8Array(i));
            }
            return n(e), r;
          }
          processChunkData(e, r) {
            if (this.rawAppendData) return r(null, e);
            let n = this;
            function i() {
              if (!n.workerWorking) {
                let a = n.processQueue.shift();
                if (a) {
                  n.workerWorking = !0;
                  let o = {
                    processedChunksCount: n.processedChunksCount,
                    codecs: n.codecs,
                    pidTable: n.pidTable,
                    pesTable: n.pesTable,
                    pmtTable: n.pmtTable,
                    dataOffset: n.dataOffset,
                    nextTrackId: n.nextTrackId
                  };
                  _x("processData", o, a.data).then(
                    function (s) {
                      Object.keys(o).forEach(function (l) {
                        n[l] = s.meta[l];
                      }),
                        s.data && a.callback(null, n.toUint8ArrayArray(s.data)),
                        (n.workerWorking = !1),
                        i();
                    },
                    function (s) {
                      a.callback(s), (n.workerWorking = !1), i();
                    }
                  );
                }
              }
            }
            this.processQueue.push({ data: e, callback: r }), i();
          }
          finalize(e, r) {
            this.aborted && (e = new Error("Aborted"));
            let n = this;
            if (e) tn.prototype.finalize.call(this, e, r);
            else if (this.rawAppendData)
              this.waitForWrittenData(function () {
                Nh.finalize(n, null, n.downloadTarget, function (i) {
                  tn.prototype.finalize.call(n, i, r);
                });
              });
            else {
              let i = 1 / 0,
                a = [];
              if (
                (this.walkThroughAvailPes(function (o) {
                  a.push(o), o.tsMin < i && (i = o.tsMin);
                }),
                a.length == 0)
              ) {
                tn.prototype.finalize.call(this, new Error("MP2T - No data received"), r);
                return;
              }
              a.forEach(function (o) {
                o.shiftTs = o.tsMin - i;
              }),
                this.action && this.action.hit && Ax.setHitOperation(this.action.hit.id, "finalizing"),
                this.waitForWrittenData(function () {
                  Nh.finalize(n, a, n.downloadTarget, function (o) {
                    tn.prototype.finalize.call(n, o, r);
                  });
                });
            }
          }
          getTrackDuration(e) {
            return e.durationSec
              ? Math.round(e.durationSec * 1e3)
              : e.declaredSampleRate
              ? Math.round((e.sampleCount * 1e3) / (1024 * e.declaredSampleRate))
              : e.sampleRate
              ? Math.round((e.sampleCount * 1e3) / e.sampleRate)
              : Math.round(e.tsMax - e.tsMin);
          }
          getTotalDuration() {
            let e = 0;
            return (
              this.walkThroughAvailPes(function (r) {
                let n = this.getTrackDuration(r);
                n > e && (e = n);
              }),
              e
            );
          }
          walkThroughAvailPes(e) {
            for (let r in this.pesTable) {
              let n = this.pesTable[r];
              n.state == "started" && e.call(this, n);
            }
          }
        });
    });
  var Rs = q((M9, Cs) => {
    var Ix = new RegExp("^#(EXT[^\\s:]+)(?::(.*))"),
      kx = new RegExp('^\\s*([^=\\s]+)\\s*=\\s*(?:"([^"]*?)"|([^,]*)),?s*(.*?)s*$'),
      qx = new RegExp('^\\s*"(.*)"\\s*$');
    function Ps() {}
    Ps.prototype = {
      init: function () {
        (this.tags = {}), (this.segments = []), (this.valid = !1);
      },
      parse: function (t, e) {
        let r = t.split(/[\r\n]+/);
        if (r.length == 0 || r[0].trim() != "#EXTM3U") return;
        this.master = !0;
        let n = [],
          i = {},
          a = [];
        for (let o = 1; o < r.length; o++) {
          let s = r[o].trim();
          if (s != "")
            if (s[0] == "#") {
              if (s.indexOf("#EXT") != 0) continue;
              let l = Ix.exec(s);
              if (!l) continue;
              if ((l[1] == "EXTINF" && (this.master = !1), (i[l[1]] = l[2]), l[1] == "EXT-X-MEDIA")) {
                let u = this.parseAttrs(l[2]);
                if (u.TYPE == "AUDIO" && u.URI) {
                  let f = new URL(u.URI, e).href;
                  a.push({ url: f, attrs: u });
                }
              }
            } else n.push({ url: new URL(s, e).href, tags: Object.assign({}, i) });
        }
        if (n.length != 0) {
          for (let o in n[0].tags) {
            let s = n[0].tags[o],
              l = !0;
            for (let u = 1; u < n.length; u++)
              if (n[u].tags[o] !== s) {
                l = !1;
                break;
              }
            l && (this.tags[o] = this.parseAttrs(s));
          }
          for (let o = 0; o < n.length; o++) {
            let s = n[o],
              l = { url: s.url, tags: {} };
            for (let u in s.tags) typeof this.tags[u] > "u" && (l.tags[u] = this.parseAttrs(s.tags[u]));
            this.segments.push(l);
          }
          (this.valid = !0), (this.audioManifests = a);
        }
      },
      parseAttrs: function (t) {
        let e = qx.exec(t);
        if (e) return e[1];
        if (t.indexOf("=") < 0) return t;
        let r = {},
          n = t;
        for (; n.length > 0; ) {
          let i = kx.exec(n);
          if (!i) break;
          let a = i[1],
            o = i[2] || i[3];
          (r[a] = o), (n = i[4]);
        }
        return r;
      },
      isMaster: function () {
        return this.valid && this.master;
      },
      isMedia: function () {
        return this.valid && !this.master;
      },
      walkThrough: function (t) {
        let e = this;
        this.segments.forEach(function (r, n) {
          t(r.url, Object.assign({}, e.tags, r.tags), n);
        });
      }
    };
    function Ts() {}
    Ts.prototype = new Ps();
    Ts.prototype.parse = function (t, e) {
      try {
        let r = e.indexOf("https") == 0,
          n = JSON.parse(t);
        n.hls_url && !r && this.segments.push({ url: n.hls_url, tags: {} }),
          n.https_hls_url && r && this.segments.push({ url: n.https_hls_url, tags: {} }),
          this.segments.length > 0 && ((this.valid = !0), (this.master = !0));
      } catch (r) {
        console.warn("PsJsonM3U8::parse failed", r);
      }
    };
    Cs.exports.get = function (t, e) {
      let r = new Ps();
      return (
        r.init(),
        r.parse(t, e),
        r.valid &&
          r.tags &&
          r.tags["EXT-X-KEY"] &&
          r.tags["EXT-X-KEY"].URI &&
          (r.tags["EXT-X-KEY"].URI = new URL(r.tags["EXT-X-KEY"].URI, e).href),
        (r.valid && r) || null
      );
    };
    Cs.exports.getPsJson = function (t, e) {
      let r = new Ts();
      return r.init(), r.parse(t, e), (r.valid && r) || null;
    };
  });
  var Ns = {};
  H(Ns, { canStop: () => Cx, getChunkSet: () => Fx, handleMaster: () => Dx, handleMedia: () => Ds, stopRecording: () => Rx });
  function Cx(t) {
    let e = me[t];
    return e ? e.recording : !1;
  }
  function Rx(t) {
    let e = me[t];
    e && e.endRecording();
  }
  function Bh(t, e, r, n, i) {
    let a = "hls:" + e,
      o = "mp4",
      s = !1;
    t.topUrl && Tx.test(t.topUrl) ? ((s = !0), (o = "mp3")) : wt.unsafe_prefs.hlsDownloadAsM2ts && (o = "m2ts");
    let l = Object.assign({}, t, { id: a, extension: o, hls: n, length: null, chunked: "hls", durationFloat: 0, mp3Direct: s });
    i ? ((l.adp = !0), (l.audioMediaManifest = i), (l.videoMediaManifest = r), delete l.url) : ((l.mediaManifest = r), delete l.url);
    let u = n["EXT-X-MEDIA"],
      f = n["EXT-X-STREAM-INF"];
    if (f) {
      let d = f.CODECS;
      d && d.startsWith("vp") && (l.extension = "webm"),
        (l.size = f.RESOLUTION || l.size),
        (l.bitrate = parseInt(f.BANDWIDTH) || l.bitrate);
    }
    return l.extension && (l.group += "-" + l.extension), rn.dispatch("hit.new", l), new Fs(l);
  }
  function Mx(t) {
    let e = new Map();
    for (let r of t) {
      let n = r.tags["EXT-X-STREAM-INF"]?.CODECS ?? "unknown",
        i = r.tags["EXT-X-STREAM-INF"]?.RESOLUTION ?? "unknown";
      e.set(n + i, r);
    }
    return [...e.values()];
  }
  function Dx(t, e) {
    let r = (t.audioManifests && t.audioManifests.length > 0 && t.audioManifests[0].url) || null;
    (t.segments = Mx(t.segments)),
      t.walkThrough(function (n, i) {
        let a = Nt.hashHex(n),
          o = "hls:" + a,
          s = me[o];
        s && (delete me[o], rn.dispatch("hit.delete", o)), (s = Bh(e, a, n, i, r)), (me[o] = s);
      });
  }
  function Ds(t, e, r) {
    let n = Nt.hashHex(r),
      i = me["hls:" + n];
    if (i) return;
    (i = Bh(e, n, r, {})), (me["hls:" + n] = i);
    let a = rn.getHit("hls:" + n);
    if (!a) return;
    let o = 0;
    (i.chunkDuration = 1e3),
      !i.recording && !wt.unsafe_prefs.hlsRememberPrevLiveChunks && ((i.chunks = []), (i.chunksMap = {}), (i.segmentsCount = 0)),
      t.walkThrough(function (s, l) {
        let u = l.EXTINF;
        if (u) {
          let v = Math.round(parseFloat(u) * 1e3);
          v > i.chunkDuration && (i.chunkDuration = v);
        }
        let f = Nt.hashHex(s);
        if (f in i.chunksMap) return;
        o++, (i.chunksMap[f] = 1);
        let c = { url: s, index: i.chunks.length },
          d = l["EXT-X-KEY"];
        d && d.METHOD != "NONE" && ((c.encrypt = d), (c.iv = parseInt(t.tags["EXT-X-MEDIA-SEQUENCE"] || "0") + c.index)),
          i.chunks.push(c),
          u && ((a.durationFloat += parseFloat(u)), (a.duration = Math.round(a.durationFloat)));
      }),
      Ex.update(a.id, { durationFloat: a.durationFloat, duration: a.duration }),
      o > 0 && ((i.segmentsCount += o), i.handle());
  }
  function Fx(t) {
    let e = t.mediaManifest || t.audioMediaManifest + "~" + t.videoMediaManifest || t.url,
      r = Nt.hashHex(e);
    return me[`hls:${r}`] || null;
  }
  var wt,
    rn,
    Ex,
    Nt,
    Ox,
    ur,
    Lh,
    Px,
    Ms,
    Tx,
    me,
    D9,
    Fs,
    js = B(() => {
      (wt = z()),
        (rn = (ge(), S(he))),
        (Ex = (vt(), S(yt))),
        (Nt = (oe(), S(ae))),
        (Ox = (Zr(), S(Xr))),
        (ur = (Uh(), S(Wh))),
        (Lh = Rs()),
        (Px = (vi(), S(yi))),
        (Ms = (De(), S(Me))),
        (Tx = new RegExp("^https://soundcloud.com/")),
        (me = {});
      D9 = setInterval(function () {
        let t = [];
        for (let e in me) rn.getHit(e) ? t.push(me[e].chunks.length) : delete me[e];
      }, 6e4);
      Fs = class extends ur.MP2TChunkset {
        constructor(e) {
          super(e);
          let r = e.mediaManifest || e.audioMediaManifest + "~" + e.videoMediaManifest || e.url,
            n = Nt.hashHex(r);
          (this.id = "hls:" + n),
            (this.hit = Object.assign({}, e, { chunked: "hls", descrPrefix: wt._("hls_streaming") })),
            (this.chunksMap = {}),
            (this.chunks = []),
            (this.segmentsCount = 0),
            (this.doNotReportDownloadChunkErrors = !0),
            (this.chunkDuration = 1e3),
            rn.dispatch("hit.new", this.hit);
        }
        download(e, r, n, i, a) {
          let o = this;
          (this.aborted = !1),
            (this.action = e),
            (this.specs = r),
            (this.successFn = function () {
              n.apply(o, arguments);
            }),
            (this.errorFn = function () {
              i.apply(o, arguments);
            }),
            (this.progressFn = a),
            (this.downloadTarget = r[0].fileName),
            (this.nextTrackId = 1),
            (this.processedSegmentsCount = 0),
            (this.recording = !0),
            this.segmentsCount || this.requestMediaManifest(),
            this.hit.mp3Direct || wt.unsafe_prefs.hlsDownloadAsM2ts
              ? ((o.recording = !0), o.handle())
              : Ox.writeFileHeader(this, function (s) {
                  s ? i(s) : ((o.recording = !0), o.handle());
                }),
            (e.hit.abortFn = function () {
              o.actionAbortFn(o.downloadTarget + ".part");
            });
        }
        downloadChunk(e, r) {
          e.encrypt ? this.downloadEncryptedChunk(e, r) : ur.MP2TChunkset.prototype.downloadChunk.call(this, e, r);
        }
        downloadEncryptedChunk(e, r) {
          let n = this;
          function i(s, l, u) {
            if (s) return r.call(n, s, e);
            ur.MP2TChunkset.prototype.downloadChunk.call(n, e, function (f) {
              if (f) return r.call(n, f, e);
              crypto.subtle
                .decrypt({ name: "AES-CBC", iv: u }, l, e.data)
                .then(function (c) {
                  (e.data = new Uint8Array(c)), r.call(n, null, e);
                })
                .catch(function (c) {
                  r.call(n, c, e);
                });
            });
          }
          if (e.encrypt.METHOD != "AES-128")
            return r.call(this, new Error("HLS encryption method " + e.encrypt.METHOD + " is not supported"), e);
          if (!e.encrypt.URI) return r.call(this, new Error("HLS encryption missing key URI"), e);
          let a = parseInt(e.encrypt.IV || e.iv),
            o = new Uint8Array(16);
          Px.WriteInt32(o, 12, a),
            this.keys || (this.keys = {}),
            Array.isArray(this.keys[e.encrypt.URI])
              ? this.keys[e.encrypt.URI].push(function (s, l) {
                  i.call(n, s, l, o);
                })
              : typeof this.keys[e.encrypt.URI] == "object"
              ? i(null, this.keys[e.encrypt.URI], o)
              : ((this.keys[e.encrypt.URI] = [
                  function (s, l) {
                    i.call(n, s, l, o);
                  }
                ]),
                wt.unsafe_prefs.chunkedCoappDataRequests
                  ? Ms.requestBinary(e.encrypt.URI, {
                      headers: n.hit.headers || [],
                      proxy: (wt.unsafe_prefs.coappUseProxy && n.hit.proxy) || null
                    })
                      .then((s) => {
                        crypto.subtle
                          .importKey("raw", s, "aes-cbc", !0, ["decrypt"])
                          .then(function (l) {
                            let u = n.keys[e.encrypt.URI];
                            (n.keys[e.encrypt.URI] = l),
                              u.forEach(function (f) {
                                f(null, l);
                              });
                          })
                          .catch(function (l) {
                            r.call(n, l, e);
                          });
                      })
                      .catch((s) => {
                        r.call(n, s, e);
                      })
                  : Nt.downloadToByteArray(e.encrypt.URI, n.hit.headers, !0)
                      .then((s) => {
                        crypto.subtle
                          .importKey("raw", s, "aes-cbc", !0, ["decrypt"])
                          .then(function (l) {
                            let u = n.keys[e.encrypt.URI];
                            (n.keys[e.encrypt.URI] = l),
                              u.forEach(function (f) {
                                f(null, l);
                              });
                          })
                          .catch(function (l) {
                            r.call(n, l, e);
                          });
                      })
                      .catch((s) => {
                        r.call(n, s, e);
                      }));
        }
        outOfChunks() {
          let e = this,
            r = Math.max(e.chunkDuration * 2, wt.unsafe_prefs.hlsEndTimeout * 1e3);
          e.requestMediaManifest(),
            setTimeout(function () {
              e.requestMediaManifest();
            }, r / 2),
            this.endTimer && clearTimeout(this.endTimer),
            (function (n) {
              e.endTimer = setTimeout(function () {
                e.recording && n == e.segmentsCount && ur.MP2TChunkset.prototype.outOfChunks.call(e);
              }, r);
            })(this.segmentsCount);
        }
        async requestMediaManifest() {
          if (!this.hit || !this.recording) return;
          let e = await wt.prefs;
          if (e.chunkedCoappManifestsRequests || Ms.isProbablyAvailable())
            try {
              let r = await Ms.request(this.hit.url, {
                  headers: this.hit.headers || [],
                  proxy: (e.coappUseProxy && this.hit.proxy) || null
                }),
                n = Lh.get(r, this.hit.url);
              n && n.isMedia() && Ds(n, this.hit, this.hit.url);
            } catch (r) {
              console.warn("media manifest request for", this.hit.url, "failed:", r.message), this.endRecording();
            }
          else {
            let r = await Nt.request({ headers: this.hit.headers, url: this.hit.url, isPrivate: this.hit.isPrivate });
            if (r.ok && this.hit.url) {
              let n = await r.text(),
                i = Lh.get(n, this.hit.url);
              i && i.isMedia() && Ds(i, this.hit, this.hit.url);
            }
          }
        }
        endRecording(e) {
          this.recording &&
            ((this.recording = !1),
            this.finalize(e || null, function (r) {
              r && console.warn("Uncaught endRecording error:", r, e);
            }));
        }
        finalize(e, r) {
          ur.MP2TChunkset.prototype.finalize.call(this, e, r), delete me[this.id];
        }
        mediaTimeoutTriggered() {
          this.endRecording();
        }
        setNewId() {
          delete me[this.id], ur.MP2TChunkset.prototype.setNewId.call(this), (me[this.id] = this), this.requestMediaManifest();
        }
      };
    });
  var zh = {};
  H(zh, { DashChunkset: () => Us });
  var Nx,
    Ws,
    jx,
    K,
    te,
    Hh,
    Wx,
    Us,
    Vh = B(() => {
      (Nx = z()),
        (Ws = (qs(), S(ks))),
        (jx = Ws.Chunkset),
        (K = (vi(), S(yi))),
        (te = (Zr(), S(Xr))),
        (Hh = (oe(), S(ae))),
        (Wx = !1),
        (Us = class extends jx {
          constructor(e) {
            super(e), (e.descrPrefix = Nx._("dash_streaming")), (this.endsWhenNoMoreSegment = !0);
          }
          processChunkData(e, r) {
            this.chunkIndex = (this.chunkIndex || 0) + 1;
            let n = 0,
              i = te.getTags("moof", e);
            if (i.length < 1) return r(new Error("No moof in fragment"));
            let a = i[0].offset,
              o = te.getTags("mfhd", i[0].data);
            if (o.length < 1) return r(new Error("No mfhd in fragment"));
            let s = K.ReadInt32(o[0].data, 4);
            if (Wx && this.seqNum && s <= this.seqNum)
              return r(new Error("Invalid sequence number in mfhd " + s + "<=" + this.seqNum + " at chunk index " + this.chunkIndex));
            this.seqNum = s;
            let l = 0;
            for (let c in this.esis) this.esis[c].sampleGroups = [];
            let u = te.getTags("traf", i[0].data);
            for (let c = 0, d = u.length; c < d; c++) {
              let v = u[c],
                x = te.getTags("tfhd", v.data);
              if (x.length < 1) return r(new Error("No tfhd in track fragment"));
              let A = x[0].data,
                g = K.ReadInt32(A, 4);
              g >= this.nextTrackId && (this.nextTrackId = g + 1);
              let p = (this.esis[g] = this.esis[g] || {
                trackId: g,
                dataOffsets: [],
                dataSizes: [],
                keyFrames: [],
                sampleGroups: [],
                sampleCount: 0,
                chunkNumber: 0,
                sampleSizes: [],
                duration: 0,
                streamType: this.init.streamTypes[g]
              });
              if (this.mpd.codecs) {
                let D = this.mpd.codecs.split(",");
                if (g <= D.length)
                  for (let X in Ws.Codecs) {
                    let W = Ws.Codecs[X];
                    D[g - 1].indexOf(W.strTag) == 0 && ((p.codecId = X), (p.codec = W), (p.streamType = W.type));
                  }
              }
              let w = K.ReadInt24(A, 1),
                k = (w & 1) >>> 0,
                m = ((w & 2) >>> 1) >>> 0,
                _ = ((w & 8) >>> 3) >>> 0,
                P = ((w & 16) >>> 4) >>> 0,
                T = ((w & 32) >>> 5) >>> 0;
              p.durationIsEmpty = ((w & 65536) >>> 16) >>> 0;
              let N = ((w & 131072) >>> 17) >>> 0,
                U = 8;
              k ? ((l = K.ReadInt64(A, U) - this.globalOffset), (U += 8)) : (N || l == 0) && (l = a),
                m && ((p.sampleDescriptionIndex = K.ReadInt32(A, U)), (U += 4)),
                _ && ((p.defaultSampleDuration = K.ReadInt32(A, U)), (U += 4)),
                P && ((p.defaultSampleSize = K.ReadInt32(A, U)), (U += 4)),
                T && ((p.defaultSampleFlags = K.ReadInt32(A, U)), (U += 4));
              let Y = te.getTags("trun", v.data);
              for (let D = 0, X = Y.length; D < X; D++) {
                let W = Y[D],
                  Z = { s: 0, o: 0, d: 0 };
                p.sampleGroups.push(Z);
                let re = W.data,
                  Q = K.ReadInt24(re, 1),
                  at = Q & 1,
                  xn = ((Q & 4) >>> 2) >>> 0,
                  y = ((Q & 256) >>> 8) >>> 0,
                  I = ((Q & 512) >>> 9) >>> 0,
                  b = ((Q & 1024) >>> 10) >>> 0,
                  O = ((Q & 2048) >>> 11) >>> 0,
                  C = K.ReadInt32(re, 4),
                  R = 8;
                if (at) {
                  let j = K.ReadInt32(re, R);
                  (R += 4), (Z.o = l + j);
                } else l == 0 && (Z.o = l);
                if (xn) {
                  let j = K.ReadInt32(re, R);
                  R += 4;
                }
                for (let j = 0; j < C; j++) {
                  let M = {};
                  y ? ((M.d = K.ReadInt32(re, R)), (R += 4)) : (M.d = p.defaultSampleDuration),
                    I ? ((M.s = K.ReadInt32(re, R)), (R += 4)) : (M.s = p.defaultSampleSize),
                    b ? ((M.f = K.ReadInt32(re, R)), (R += 4)) : (M.f = p.defaultSampleFlags),
                    M.f & 33554432 && p.keyFrames.push(p.sampleCount + j),
                    O && ((M.C = K.ReadInt32(re, R)), (R += 4)),
                    (Z.s += M.s),
                    (Z.d += M.d),
                    p.sampleSizes.push(M.s),
                    (p.duration += M.s),
                    (p.stts = p.stts || []),
                    p.stts.length == 0 || p.stts[p.stts.length - 1].d != M.d
                      ? p.stts.push({ c: 1, d: M.d })
                      : p.stts[p.stts.length - 1].c++;
                }
                (Z.c = C),
                  (l = Z.o + Z.s),
                  (p.sampleCount += C),
                  (p.stsc = p.stsc || []),
                  (p.stsc.length == 0 || p.stsc[p.stsc.length - 1].samples_per_chunk != C) &&
                    p.stsc.push({ first_chunk: p.chunkNumber, samples_per_chunk: C, sample_description_index: 0 }),
                  p.chunkNumber++;
              }
            }
            this.globalOffset += e.length;
            let f = [];
            for (let c in this.esis) {
              let d = this.esis[c];
              for (let v = 0; v < d.sampleGroups.length; v++) {
                let x = d.sampleGroups[v];
                f.push(e.subarray(x.o, x.o + x.s)),
                  d.dataOffsets.push({ b: this.chunkIndex - 1, o: n }),
                  d.dataSizes.push(x.s),
                  (this.dataOffset += x.s),
                  (n += x.s);
              }
            }
            r.call(this, null, f);
          }
          getTrackDuration(e) {
            return this.getTotalDuration();
          }
          getTotalDuration() {
            return Math.round(this.mpd.duration * 1e3);
          }
          finalize(e, r) {
            let n = [];
            for (let o in this.esis) {
              let s = this.esis[o];
              n.push(s);
            }
            let i = this,
              a = ((...o) => {
                super.finalize(...o);
              }).bind(this);
            this.waitForWrittenData(function () {
              te.finalize(i, n, i.downloadTarget, function (o) {
                a(o, r);
              });
            });
          }
          handleInitSegment(e) {
            if (((this.mpd = e), (this.init = {}), (this.segmentsCount = e.segments.length), !!e.init_segment))
              try {
                let r;
                typeof e.init_segment == "string" ? (r = Hh.toByteArray(e.init_segment)) : (r = e.init_segment),
                  (this.globalOffset = r.length);
                let n = te.getTags("ftyp", r);
                this.init.ftyp = n[0].data;
                let i = te.getTags("moov", r);
                (this.init.stsd = {}),
                  (this.init.tkhd = {}),
                  (this.init.vmhd = {}),
                  (this.init.smhd = {}),
                  (this.init.edts = {}),
                  (this.init.hdlr = {}),
                  (this.init.streamTypes = {}),
                  (this.init.mdhd = {}),
                  (this.init.dinf = {}),
                  (this.init.edts = {}),
                  (this.timeScale = {});
                let a = te.getTags("mvhd", i[0].data);
                (this.init.mvhd = a[0].data),
                  (this.init.timescale = K.ReadInt32(a[0].data, 12)),
                  (this.init.duration = K.ReadInt32(a[0].data, 16)),
                  this.init.duration == 0 &&
                    ((this.init.duration = Math.round((e.duration || 0) * this.init.timescale)),
                    K.WriteInt32(a[0].data, 16, this.init.duration));
                let o = te.getTags("iods", i[0].data);
                o.length > 0 && (this.init.iods = o[0].data);
                let s = te.getTags("trak", i[0].data);
                for (let l = 0; l < s.length; l++) {
                  let u = s[l],
                    f = te.getTags("tkhd", u.data),
                    c = K.ReadInt32(f[0].data, 12),
                    d = f[0].data;
                  this.init.tkhd[c] = d;
                  let v = K.ReadInt32(d, 20);
                  v == 0 && ((v = this.init.duration), K.WriteInt32(d, 20, v));
                  let x = te.getTags("edts", u.data);
                  x.length > 0 && (this.init.edts[c] = x[0].data);
                  let A = te.getTags("mdia", u.data),
                    g = te.getTags("hdlr", A[0].data);
                  this.init.hdlr[c] = g[0].data;
                  let p = K.ReadInt32(this.init.hdlr[c], 8);
                  p === 1936684398
                    ? (this.init.streamTypes[c] = "audio")
                    : p === 1986618469
                    ? (this.init.streamTypes[c] = "video")
                    : (this.init.streamTypes[c] = void 0);
                  let w = te.getTags("dinf", A[0].data);
                  w.length > 0 && (this.init.dinf[c] = w[0].data);
                  let k = te.getTags("minf", A[0].data),
                    _ = te.getTags("mdhd", A[0].data)[0].data;
                  this.init.mdhd[c] = _;
                  let P = K.ReadInt32(_, 16),
                    T = K.ReadInt32(_, 12);
                  (this.timeScale[c] = T),
                    P == 0 && ((P = Math.round((this.init.duration * T) / this.init.timescale)), K.WriteInt32(_, 16, P));
                  let N = te.getTags("vmhd", k[0].data);
                  N.length > 0 && (this.init.vmhd[c] = N[0].data);
                  let U = te.getTags("smhd", k[0].data);
                  U.length > 0 && (this.init.smhd[c] = U[0].data);
                  let Y = te.getTags("stbl", k[0].data),
                    D = te.getTags("stsd", Y[0].data);
                  this.init.stsd[c] = D[0].data;
                }
              } catch {
                console.warn("Error decoding DASH init segment");
              }
          }
          download(e, r, n, i, a) {
            let o = this;
            (this.action = e), (this.downloadTarget = r[0].fileName);
            let s = e.hit._mpd || e.hit.audioMpd,
              l = new URL(e.hit._mpdCommonBaseUrl, e.hit.url || e.hit.audioUrl).href;
            (l = new URL(s.base_url, l).href),
              o.downloadFile(this.downloadTarget, s, l, n, i, a),
              (e.abortChunked = function () {
                o.actionAbortFn();
              });
          }
          downloadFile(e, r, n, i, a, o) {
            let s = this;
            (this.aborted = !1),
              (this.successFn = i),
              (this.errorFn = a),
              (this.progressFn = o),
              (this.downloadTarget = e),
              (this.dataOffset = 0),
              (this.nextTrackId = 1),
              (this.chunks = []),
              (this.dataOffset = 0),
              (this.globalOffset = 0),
              (this.esis = {}),
              (this.seqNum = 0),
              (this.processedSegmentsCount = 0),
              typeof r.init_segment == "string" && (r.init_segment = Hh.toByteArray(r.init_segment)),
              this.handleInitSegment(r),
              this.mpd.segments.forEach(function (l) {
                let u = new URL(l.url, n).href;
                s.chunks.push({ url: u, index: s.chunks.length });
              }),
              te.writeFileHeader(this, function (l) {
                l ? a(l) : ((s.recording = !0), s.handle());
              });
          }
        });
    });
  var Ls = {};
  H(Ls, { getHitsFromVariants: () => Gx, setAdpVariantsList: () => Yh, setVariants: () => Vx });
  async function Si() {
    $h.storage.local.set(await bt);
  }
  async function Yh(t) {
    let e = await bt;
    (e.variants.adp_list = []),
      t.forEach(function (r) {
        e.variants.adp_list.push(r.id);
      });
  }
  async function Hx() {
    let t = await $e.prefs,
      e = await bt,
      r = [],
      n = t.adaptativeCount,
      i = 1;
    for (
      e.variants.full_list.forEach(function (a) {
        if (Gh.test(a)) {
          if (i > n) return;
          r.push({ id: "adp:" + i, label: $e._("adaptative", i) }), i++;
        } else {
          let o = e.variants.full[a];
          o && r.push({ id: a, label: o.label, enabled: o.enabled });
        }
      });
      i <= n;
      i++
    )
      r.push({ id: "adp:" + i, label: $e._("adaptative", i) });
    return r;
  }
  async function zx(t) {
    let e = await bt;
    (e.variants.full_list = []),
      t.forEach(function (r) {
        e.variants.full_list.push(r.id), Gh.test(r.id) || (e.variants.full[r.id].enabled = r.enabled);
      });
  }
  async function Vx(t) {
    ((await bt).variants = t), Si();
  }
  async function $x() {
    let t = await bt,
      e = [];
    return (
      t.variants.adp_list.forEach(function (r) {
        let n = Bx.exec(r);
        if (!r) return;
        let i = t.variants.adp_video[n[1]],
          a = t.variants.adp_audio[n[2]];
        if (!i && !a) return;
        let o = [];
        i && !a
          ? (o.push($e._("video_only")), o.push(i.extension.toUpperCase()))
          : !i && a
          ? (o.push($e._("audio_only")), o.push(a.extension.toUpperCase()))
          : o.push(i.extension.toUpperCase()),
          i && (i.size && o.push(i.size), i.fps && o.push(i.fps + " fps"), i.codec && o.push(i.codec)),
          a && a.codec && o.push(a.codec),
          e.push({ id: r, label: o.join(" - ") });
      }),
      e
    );
  }
  async function Gx(t, e, r) {
    let n = await $e.prefs;
    r = r || {};
    let i = {},
      a = {},
      o = n.ignoreProtectedVariants,
      s = !0,
      l = await bt;
    e.forEach(function (v) {
      if (!v.url || (o && !r.keepProtected && v.s && v.s.length > 0)) return;
      i[v.itag] = v;
      let x = t.from + ":" + v.itag,
        A = "audio/video",
        g = null,
        p = null,
        w = null,
        k = l.variants.full[x];
      if (k) {
        if (!k.enabled) return;
        k.audioCodec && ((g = k.audioCodec), (A = "audio")),
          k.videoCodec && ((p = k.videoCodec), (A = g ? "audio/video" : "video")),
          (w = k.extension);
      } else if (v.type !== void 0 || v.mimeType !== void 0) {
        let m = Ux.exec(v.type || v.mimeType);
        if (m)
          if (((w = m[2]), m[1] == "audio")) (A = "audio"), (g = m[3] || null), /vorbis|opus/i.test(g) && (w = "webm");
          else if (m[3]) {
            let _ = m[3].split(",");
            _.length == 1 ? ((A = "video"), (p = _[0]), /vp8|vp9/i.test(p) && (w = "webm")) : ((p = _[0]), (g = _[1]));
          } else m[1] == "video" && (A = "video");
      }
      if (((w = w || "mp4"), A === "audio/video")) {
        let m = { id: t.from + ":" + t.videoId + ":" + v.itag, url: v.url, extension: w };
        v.quality && (m.quality = v.quality),
          g && (m.audioCodec = g),
          p && (m.videoCodec = p),
          v.size && (m.size = v.size),
          v.fps && (m.fps = v.fps),
          v.s && (m._signature = v.s),
          (a[x] = m);
        let _ = l.variants.full[x];
        if (_ === void 0) {
          (l.variants.full[x] = { extension: w, quality: v.quality, audioCodec: g, videoCodec: p, enabled: !0 }), (s = !0);
          let P = [];
          if ((P.push("(" + x + ")"), v.quality)) {
            let T = "quality_" + v.quality,
              N = $e._(T);
            N == T && (N = v.quality.toUpperCase()), P.push(N);
          }
          v.size && P.push(v.size),
            P.push(w.toUpperCase()),
            p && P.push("V/" + p),
            g && P.push("A/" + g),
            (l.variants.full[x].label = P.join(" - ")),
            l.variants.full_list.push(x);
        } else !v.size && _.size && (m.size = _.size);
      } else {
        let m, _;
        if (
          (A == "audio" ? ((m = "adp_audio"), (_ = "adp_video")) : ((m = "adp_video"), (_ = "adp_audio")), l.variants[m][v.itag] === void 0)
        ) {
          let P = { extension: w };
          v.size ? (P.size = v.size) : v.width && v.height && (P.size = `${v.width}x${v.height}`),
            v.bitrate && (P.bitRate = v.bitrate),
            v.fps && (P.fps = v.fps),
            (s = !0),
            (l.variants[m][v.itag] = P);
          for (let T in l.variants[_])
            A == "audio" ? l.variants.adp_list.push(T + "/" + v.itag) : l.variants.adp_list.push(v.itag + "/" + T);
          A == "audio"
            ? ((l.variants[m][v.itag].codec = g), l.variants.adp_list.push("/" + v.itag))
            : ((l.variants[m][v.itag].codec = p), l.variants.adp_list.push(v.itag + "/"));
        }
      }
    });
    let u = t.maxVariants || n.qualitiesMaxVariants,
      f = 0,
      c = [],
      d = null;
    for (let v = 0; v < l.variants.full_list.length && (!u || f < u); v++) {
      let x = l.variants.full_list[v],
        A = /^adp:([0-9]+)$/.exec(x);
      if (A) {
        if (n.adpHide) continue;
        d ||
          ((d = []),
          l.variants.adp_list.forEach(function (p) {
            if (r.audioAndVideo && !/^\d+\/\d+$/.test(p)) return;
            let w = Lx.exec(p);
            if (
              (w[1].length > 0 && !i[w[1]]) ||
              (w[1].length > 0 &&
                l.variants.adp_video[w[1]] &&
                l.variants.adp_video[w[1]].codec == "vp9" &&
                l.converter &&
                !l.converter.vp9support) ||
              (w[2].length > 0 && !i[w[2]])
            )
              return;
            let k = i[w[1]],
              m = i[w[2]],
              _ = { id: t.from + ":" + t.videoId + ":" + p, _signature: [] },
              P = 0,
              T = null,
              N = null;
            k &&
              ((_.videoUrl = k.url),
              k.clen && (P += parseInt(k.clen)),
              m || (_.url = _.videoUrl),
              k.s && _._signature.push(k.s),
              (T = l.variants.adp_video[w[1]]),
              (_.extension = k.extension || (T ? T.extension : void 0)),
              k.size && (_.size = k.size),
              !_.size && T && T.size && (_.size = T.size),
              k.fps && (_.fps = k.fps),
              !_.fps && T && T.fps && (_.fps = T.fps)),
              m &&
                ((N = l.variants.adp_audio[w[2]]),
                (_.audioUrl = m.url),
                m.clen && (P += parseInt(m.clen)),
                k || ((_.url = _.audioUrl), (_.extension = m.extension)),
                m.s && _._signature.push(m.s)),
              N && T && N.extension != T.extension && (_.extension = "mkv"),
              P && (_.length = P),
              (_.group = t.group),
              d.push(_);
          }));
        let g = parseInt(A[1]) - 1;
        g < d.length && (c[f++] = Object.assign({ order: f, adp: !0 }, t, d[g]));
      } else a[x] && (c[f++] = Object.assign({ order: f }, t, a[x]));
    }
    return s && Si(), c;
  }
  var $e,
    $h,
    Ux,
    Lx,
    Bx,
    Gh,
    Kh,
    bt,
    Bs = B(() => {
      ($e = z()),
        ($h = $e.browser),
        (Ux = new RegExp('^(audio|video)/(?:x\\-)?([^;]+)(?:;(?:\\+| )codecs="(.+)")?$')),
        (Lx = new RegExp("^([0-9]*)/([0-9]*)$")),
        (Bx = new RegExp("^(.*)/(.*)$")),
        (Gh = new RegExp("^adp:[0-9]+$")),
        (Kh = {
          full: {
            "tbvws:22": {
              extension: "mp4",
              quality: "hd720",
              audioCodec: "+mp4a.40.2",
              videoCodec: "avc1.64001F",
              enabled: !0,
              label: "MP4 - 1280x720",
              size: "1280x720"
            },
            "tbvws:18": {
              extension: "mp4",
              quality: "medium",
              audioCodec: "+mp4a.40.2",
              videoCodec: "avc1.42001E",
              enabled: !0,
              label: "MP4 - 480x360",
              size: "480x360"
            },
            "tbvws:43": {
              extension: "webm",
              quality: "medium",
              audioCodec: "+vorbis",
              videoCodec: "vp8.0",
              enabled: !0,
              label: "WEBM - 480x360",
              size: "480x360"
            },
            "tbvws:5": {
              extension: "flv",
              quality: "small",
              audioCodec: null,
              videoCodec: null,
              enabled: !0,
              label: "FLV - 320x240",
              size: "320x240"
            },
            "tbvws:36": {
              extension: "3gpp",
              quality: "small",
              audioCodec: "+mp4a.40.2",
              videoCodec: "mp4v.20.3",
              enabled: !0,
              label: "3GPP - 320x240",
              size: "320x240"
            },
            "tbvws:17": {
              extension: "3gpp",
              quality: "small",
              audioCodec: "+mp4a.40.2",
              videoCodec: "mp4v.20.3",
              enabled: !0,
              label: "3GPP - 176x144",
              size: "176x144"
            },
            "tfvws:1080-0": {
              extension: "mp4",
              audioCodec: null,
              videoCodec: null,
              enabled: !0,
              size: "1920x1080",
              label: "H264_1920x1080 -MP4"
            },
            "tfvws:720-0": {
              extension: "mp4",
              audioCodec: null,
              videoCodec: null,
              enabled: !0,
              size: "1280x720",
              label: "H264_1280x720 -MP4"
            },
            "tfvws:480-0": {
              extension: "mp4",
              audioCodec: null,
              videoCodec: null,
              enabled: !0,
              size: "848x480",
              label: "H264_848x480 -MP4"
            },
            "tfvws:380-0": {
              extension: "mp4",
              audioCodec: null,
              videoCodec: null,
              enabled: !0,
              size: "512x384",
              label: "H264_512x384 -MP4"
            },
            "tfvws:240-0": {
              extension: "mp4",
              audioCodec: null,
              videoCodec: null,
              enabled: !0,
              size: "320x240",
              label: "H264_320x240 -MP4"
            }
          },
          full_list: [
            "tbvws:22",
            "tbvws:18",
            "adp:1",
            "adp:2",
            "adp:3",
            "adp:4",
            "adp:5",
            "adp:6",
            "adp:7",
            "adp:8",
            "adp:9",
            "adp:10",
            "adp:11",
            "adp:12",
            "tbvws:5",
            "tbvws:17",
            "tbvws:43",
            "tbvws:36",
            "tfvws:1080-0",
            "tfvws:720-0",
            "tfvws:480-0",
            "tfvws:380-0",
            "tfvws:240-0"
          ],
          adp_audio: {
            139: { extension: "mp4", bitRate: 50013, codec: "mp4a.40.5" },
            140: { extension: "mp4", bitRate: 130535, codec: "mp4a.40.2" },
            249: { extension: "webm", bitRate: 57181, codec: "opus" },
            250: { extension: "webm", bitRate: 75052, codec: "opus" },
            251: { extension: "webm", bitRate: 148416, codec: "opus" },
            599: { extension: "mp4", bitRate: 32122, codec: "mp4a.40.5" },
            600: { extension: "webm", bitRate: 40545, codec: "opus" }
          },
          adp_video: {
            133: { extension: "mp4", size: "426x240", bitRate: 245321, fps: 30, codec: "avc1.4d4015" },
            134: { extension: "mp4", size: "640x360", bitRate: 633553, fps: 30, codec: "avc1.4d401e" },
            135: { extension: "mp4", size: "854x480", bitRate: 1158055, fps: 30, codec: "avc1.4d401f" },
            136: { extension: "mp4", size: "1280x720", bitRate: 1692034, fps: 30, codec: "avc1.64001f" },
            137: { extension: "mp4", size: "1920x1080", bitRate: 2900516, fps: 30, codec: "avc1.640028" },
            160: { extension: "mp4", size: "256x144", bitRate: 111180, fps: 30, codec: "avc1.4d400c" },
            242: { extension: "webm", size: "426x240", bitRate: 198638, fps: 30, codec: "vp9" },
            243: { extension: "webm", size: "640x360", bitRate: 433020, fps: 30, codec: "vp9" },
            244: { extension: "webm", size: "854x480", bitRate: 856873, fps: 30, codec: "vp9" },
            247: { extension: "webm", size: "1280x720", bitRate: 820432, fps: 30, codec: "vp9" },
            248: { extension: "webm", size: "1920x1080", bitRate: 1590337, fps: 30, codec: "vp9" },
            271: { extension: "webm", size: "2560x1048", bitRate: 6369110, fps: 25, codec: "vp9" },
            278: { extension: "webm", size: "256x144", bitRate: 90329, fps: 30, codec: "vp9" },
            298: { extension: "mp4", size: "1280x720", bitRate: 3483484, fps: 60, codec: "avc1.4d4020" },
            299: { extension: "mp4", size: "1920x1080", bitRate: 5794998, fps: 60, codec: "avc1.64002a" },
            302: { extension: "webm", size: "1280x720", bitRate: 2669978, fps: 60, codec: "vp9" },
            303: { extension: "webm", size: "1920x1080", bitRate: 4620081, fps: 60, codec: "vp9" },
            308: { extension: "webm", size: "2560x1440", bitRate: 13327223, fps: 60, codec: "vp9" },
            313: { extension: "webm", size: "3840x1574", bitRate: 12855825, fps: 25, codec: "vp9" },
            315: { extension: "webm", size: "3840x2160", bitRate: 26650187, fps: 60, codec: "vp9" },
            330: { extension: "webm", size: "256x144", bitRate: 244830, fps: 60, codec: "vp9.2" },
            331: { extension: "webm", size: "426x240", bitRate: 500446, fps: 60, codec: "vp9.2" },
            332: { extension: "webm", size: "640x360", bitRate: 1060554, fps: 60, codec: "vp9.2" },
            333: { extension: "webm", size: "854x480", bitRate: 1989046, fps: 60, codec: "vp9.2" },
            334: { extension: "webm", size: "1280x720", bitRate: 4529350, fps: 60, codec: "vp9.2" },
            335: { extension: "webm", size: "1920x1080", bitRate: 6956417, fps: 60, codec: "vp9.2" },
            336: { extension: "webm", size: "2560x1440", bitRate: 16904531, fps: 60, codec: "vp9.2" },
            337: { extension: "webm", size: "3840x2160", bitRate: 30616762, fps: 60, codec: "vp9.2" },
            394: { extension: "mp4", size: "256x144", bitRate: 88099, fps: 30, codec: "av01.0.00M.10.0.110.09.16.09.0" },
            395: { extension: "mp4", size: "426x240", bitRate: 192111, fps: 30, codec: "av01.0.00M.10.0.110.09.16.09.0" },
            396: { extension: "mp4", size: "640x360", bitRate: 407864, fps: 30, codec: "av01.0.01M.10.0.110.09.16.09.0" },
            397: { extension: "mp4", size: "854x480", bitRate: 764544, fps: 30, codec: "av01.0.04M.10.0.110.09.16.09.0" },
            398: { extension: "mp4", size: "1280x720", bitRate: 2100280, fps: 60, codec: "av01.0.08M.10.0.110.09.16.09.0" },
            399: { extension: "mp4", size: "1920x1080", bitRate: 3817449, fps: 60, codec: "av01.0.09M.10.0.110.09.16.09.0" },
            400: { extension: "mp4", size: "2560x1440", bitRate: 8580436, fps: 60, codec: "av01.0.12M.10.0.110.09.16.09.0" },
            401: { extension: "mp4", size: "3840x2160", bitRate: 17186067, fps: 60, codec: "av01.0.13M.10.0.110.09.16.09.0" },
            597: { extension: "mp4", size: "256x144", bitRate: 38793, fps: 15, codec: "avc1.4d400b" },
            598: { extension: "webm", size: "256x144", bitRate: 34801, fps: 15, codec: "vp9" },
            694: { extension: "mp4", size: "256x144", bitRate: 188378, fps: 60, codec: "av01.0.00M.10.0.110.09.16.09.0" },
            695: { extension: "mp4", size: "426x240", bitRate: 397324, fps: 60, codec: "av01.0.01M.10.0.110.09.16.09.0" },
            696: { extension: "mp4", size: "640x360", bitRate: 837578, fps: 60, codec: "av01.0.04M.10.0.110.09.16.09.0" },
            697: { extension: "mp4", size: "854x480", bitRate: 1502575, fps: 60, codec: "av01.0.05M.10.0.110.09.16.09.0" },
            698: { extension: "mp4", size: "1280x720", bitRate: 3871764, fps: 60, codec: "av01.0.08M.10.0.110.09.16.09.0" },
            699: { extension: "mp4", size: "1920x1080", bitRate: 6531652, fps: 60, codec: "av01.0.09M.10.0.110.09.16.09.0" },
            700: { extension: "mp4", size: "2560x1440", bitRate: 18487828, fps: 60, codec: "av01.0.12M.10.0.110.09.16.09.0" },
            701: { extension: "mp4", size: "3840x2160", bitRate: 32652217, fps: 60, codec: "av01.0.13M.10.0.110.09.16.09.0" }
          },
          adp_list: [
            "401/140",
            "400/140",
            "399/140",
            "298/140",
            "135/140",
            "315/251",
            "336/251",
            "335/251",
            "334/251",
            "401/251",
            "313/251",
            "271/251",
            "266/140",
            "264/140",
            "137/140",
            "136/140",
            "266/171",
            "264/171",
            "137/171",
            "136/171",
            "248/140",
            "248/171",
            "299/171",
            "299/140",
            "303/140",
            "303/171",
            "247/140",
            "247/171",
            "298/171",
            "302/140",
            "302/171",
            "135/171",
            "244/140",
            "244/171",
            "134/140",
            "134/171",
            "133/140",
            "243/171",
            "242/140",
            "243/140",
            "242/171",
            "133/171",
            "278/140",
            "278/171",
            "160/140",
            "160/171",
            "264/",
            "133/",
            "242/",
            "243/",
            "160/",
            "/140",
            "/171",
            "136/",
            "247/",
            "135/",
            "244/",
            "134/",
            "137/",
            "248/",
            "278/",
            "299/",
            "303/",
            "298/",
            "302/",
            "266/",
            "313/140",
            "313/171",
            "313/",
            "271/140",
            "271/171",
            "271/",
            "133/251",
            "134/251",
            "135/251",
            "136/251",
            "137/251",
            "160/251",
            "242/251",
            "243/251",
            "244/251",
            "247/251",
            "248/251",
            "264/251",
            "266/251",
            "278/251",
            "298/251",
            "299/251",
            "302/251",
            "303/251",
            "/251",
            "397/139",
            "397/140",
            "397/171",
            "397/251",
            "397/",
            "395/139",
            "395/140",
            "395/171",
            "395/251",
            "395/",
            "133/250",
            "134/250",
            "135/250",
            "136/250",
            "137/250",
            "160/250",
            "242/250",
            "243/250",
            "244/250",
            "247/250",
            "248/250",
            "264/250",
            "266/250",
            "271/250",
            "278/250",
            "298/250",
            "299/250",
            "302/250",
            "303/250",
            "313/250",
            "395/250",
            "397/250",
            "/250",
            "396/139",
            "396/140",
            "396/171",
            "396/250",
            "396/251",
            "396/",
            "133/249",
            "134/249",
            "135/249",
            "136/249",
            "137/249",
            "160/249",
            "242/249",
            "243/249",
            "244/249",
            "247/249",
            "248/249",
            "264/249",
            "266/249",
            "271/249",
            "278/249",
            "298/249",
            "299/249",
            "302/249",
            "303/249",
            "313/249",
            "395/249",
            "396/249",
            "397/249",
            "/249",
            "315/140",
            "315/139",
            "315/171",
            "315/249",
            "315/250",
            "315/",
            "337/139",
            "337/140",
            "337/171",
            "337/249",
            "337/250",
            "337/251",
            "337/",
            "401/139",
            "401/171",
            "401/249",
            "401/250",
            "401/",
            "701/139",
            "701/140",
            "701/171",
            "701/249",
            "701/250",
            "701/251",
            "701/",
            "308/139",
            "308/140",
            "308/171",
            "308/249",
            "308/250",
            "308/251",
            "308/",
            "336/139",
            "336/140",
            "336/171",
            "336/249",
            "336/250",
            "336/",
            "400/139",
            "400/171",
            "400/249",
            "400/250",
            "400/251",
            "400/",
            "700/139",
            "700/140",
            "700/171",
            "700/249",
            "700/250",
            "700/251",
            "700/",
            "335/139",
            "335/140",
            "335/171",
            "335/249",
            "335/250",
            "335/",
            "399/139",
            "399/171",
            "399/249",
            "399/250",
            "399/251",
            "399/",
            "699/139",
            "699/140",
            "699/171",
            "699/249",
            "699/250",
            "699/251",
            "699/",
            "334/139",
            "334/140",
            "334/171",
            "334/249",
            "334/250",
            "334/",
            "398/139",
            "398/140",
            "398/171",
            "398/249",
            "398/250",
            "398/251",
            "398/",
            "698/139",
            "698/140",
            "698/171",
            "698/249",
            "698/250",
            "698/251",
            "698/",
            "333/139",
            "333/140",
            "333/171",
            "333/249",
            "333/250",
            "333/251",
            "333/",
            "697/139",
            "697/140",
            "697/171",
            "697/249",
            "697/250",
            "697/251",
            "697/",
            "332/139",
            "332/140",
            "332/171",
            "332/249",
            "332/250",
            "332/251",
            "332/",
            "696/139",
            "696/140",
            "696/171",
            "696/249",
            "696/250",
            "696/251",
            "696/",
            "331/139",
            "331/140",
            "331/171",
            "331/249",
            "331/250",
            "331/251",
            "331/",
            "695/139",
            "695/140",
            "695/171",
            "695/249",
            "695/250",
            "695/251",
            "695/",
            "330/139",
            "330/140",
            "330/171",
            "330/249",
            "330/250",
            "330/251",
            "330/",
            "394/139",
            "394/140",
            "394/171",
            "394/249",
            "394/250",
            "394/251",
            "394/",
            "597/139",
            "597/140",
            "597/171",
            "597/249",
            "597/250",
            "597/251",
            "597/",
            "598/139",
            "598/140",
            "598/171",
            "598/249",
            "598/250",
            "598/251",
            "598/",
            "694/139",
            "694/140",
            "694/171",
            "694/249",
            "694/250",
            "694/251",
            "694/",
            "133/599",
            "134/599",
            "135/599",
            "136/599",
            "137/599",
            "160/599",
            "242/599",
            "243/599",
            "244/599",
            "247/599",
            "248/599",
            "264/599",
            "266/599",
            "271/599",
            "278/599",
            "298/599",
            "299/599",
            "302/599",
            "303/599",
            "308/599",
            "313/599",
            "315/599",
            "330/599",
            "331/599",
            "332/599",
            "333/599",
            "334/599",
            "335/599",
            "336/599",
            "337/599",
            "394/599",
            "395/599",
            "396/599",
            "397/599",
            "398/599",
            "399/599",
            "400/599",
            "401/599",
            "597/599",
            "598/599",
            "694/599",
            "695/599",
            "696/599",
            "697/599",
            "698/599",
            "699/599",
            "700/599",
            "701/599",
            "/599",
            "133/600",
            "134/600",
            "135/600",
            "136/600",
            "137/600",
            "160/600",
            "242/600",
            "243/600",
            "244/600",
            "247/600",
            "248/600",
            "264/600",
            "266/600",
            "271/600",
            "278/600",
            "298/600",
            "299/600",
            "302/600",
            "303/600",
            "308/600",
            "313/600",
            "315/600",
            "330/600",
            "331/600",
            "332/600",
            "333/600",
            "334/600",
            "335/600",
            "336/600",
            "337/600",
            "394/600",
            "395/600",
            "396/600",
            "397/600",
            "398/600",
            "399/600",
            "400/600",
            "401/600",
            "597/600",
            "598/600",
            "694/600",
            "695/600",
            "696/600",
            "697/600",
            "698/600",
            "699/600",
            "700/600",
            "701/600",
            "/600",
            "315/",
            "337/",
            "401/",
            "701/",
            "308/",
            "336/",
            "400/",
            "700/",
            "299/",
            "303/",
            "335/",
            "399/",
            "699/",
            "298/",
            "302/",
            "334/",
            "398/",
            "698/",
            "135/",
            "244/",
            "333/",
            "397/",
            "697/",
            "134/",
            "243/",
            "332/",
            "396/",
            "696/",
            "133/",
            "242/",
            "331/",
            "395/",
            "695/",
            "160/",
            "278/",
            "330/",
            "394/",
            "597/",
            "598/",
            "694/",
            "133/139",
            "134/139",
            "135/139",
            "160/139",
            "242/139",
            "243/139",
            "244/139",
            "278/139",
            "298/139",
            "299/139",
            "302/139",
            "303/139",
            "308/139",
            "315/139",
            "330/139",
            "331/139",
            "332/139",
            "333/139",
            "334/139",
            "335/139",
            "336/139",
            "337/139",
            "394/139",
            "395/139",
            "396/139",
            "397/139",
            "398/139",
            "399/139",
            "400/139",
            "401/139",
            "597/139",
            "598/139",
            "694/139",
            "695/139",
            "696/139",
            "697/139",
            "698/139",
            "699/139",
            "700/139",
            "701/139",
            "/139",
            "133/140",
            "134/140",
            "135/140",
            "160/140",
            "242/140",
            "243/140",
            "244/140",
            "278/140",
            "298/140",
            "299/140",
            "302/140",
            "303/140",
            "308/140",
            "315/140",
            "330/140",
            "331/140",
            "332/140",
            "333/140",
            "334/140",
            "335/140",
            "336/140",
            "337/140",
            "394/140",
            "395/140",
            "396/140",
            "397/140",
            "398/140",
            "399/140",
            "400/140",
            "401/140",
            "597/140",
            "598/140",
            "694/140",
            "695/140",
            "696/140",
            "697/140",
            "698/140",
            "699/140",
            "700/140",
            "701/140",
            "/140",
            "133/249",
            "134/249",
            "135/249",
            "160/249",
            "242/249",
            "243/249",
            "244/249",
            "278/249",
            "298/249",
            "299/249",
            "302/249",
            "303/249",
            "308/249",
            "315/249",
            "330/249",
            "331/249",
            "332/249",
            "333/249",
            "334/249",
            "335/249",
            "336/249",
            "337/249",
            "394/249",
            "395/249",
            "396/249",
            "397/249",
            "398/249",
            "399/249",
            "400/249",
            "401/249",
            "597/249",
            "598/249",
            "694/249",
            "695/249",
            "696/249",
            "697/249",
            "698/249",
            "699/249",
            "700/249",
            "701/249",
            "/249",
            "133/250",
            "134/250",
            "135/250",
            "160/250",
            "242/250",
            "243/250",
            "244/250",
            "278/250",
            "298/250",
            "299/250",
            "302/250",
            "303/250",
            "308/250",
            "315/250",
            "330/250",
            "331/250",
            "332/250",
            "333/250",
            "334/250",
            "335/250",
            "336/250",
            "337/250",
            "394/250",
            "395/250",
            "396/250",
            "397/250",
            "398/250",
            "399/250",
            "400/250",
            "401/250",
            "597/250",
            "598/250",
            "694/250",
            "695/250",
            "696/250",
            "697/250",
            "698/250",
            "699/250",
            "700/250",
            "701/250",
            "/250",
            "133/251",
            "134/251",
            "135/251",
            "160/251",
            "242/251",
            "243/251",
            "244/251",
            "278/251",
            "298/251",
            "299/251",
            "302/251",
            "303/251",
            "308/251",
            "315/251",
            "330/251",
            "331/251",
            "332/251",
            "333/251",
            "334/251",
            "335/251",
            "336/251",
            "337/251",
            "394/251",
            "395/251",
            "396/251",
            "397/251",
            "398/251",
            "399/251",
            "400/251",
            "401/251",
            "597/251",
            "598/251",
            "694/251",
            "695/251",
            "696/251",
            "697/251",
            "698/251",
            "699/251",
            "700/251",
            "701/251",
            "/251",
            "133/599",
            "134/599",
            "135/599",
            "160/599",
            "242/599",
            "243/599",
            "244/599",
            "278/599",
            "298/599",
            "299/599",
            "302/599",
            "303/599",
            "308/599",
            "315/599",
            "330/599",
            "331/599",
            "332/599",
            "333/599",
            "334/599",
            "335/599",
            "336/599",
            "337/599",
            "394/599",
            "395/599",
            "396/599",
            "397/599",
            "398/599",
            "399/599",
            "400/599",
            "401/599",
            "597/599",
            "598/599",
            "694/599",
            "695/599",
            "696/599",
            "697/599",
            "698/599",
            "699/599",
            "700/599",
            "701/599",
            "/599",
            "133/600",
            "134/600",
            "135/600",
            "160/600",
            "242/600",
            "243/600",
            "244/600",
            "278/600",
            "298/600",
            "299/600",
            "302/600",
            "303/600",
            "308/600",
            "315/600",
            "330/600",
            "331/600",
            "332/600",
            "333/600",
            "334/600",
            "335/600",
            "336/600",
            "337/600",
            "394/600",
            "395/600",
            "396/600",
            "397/600",
            "398/600",
            "399/600",
            "400/600",
            "401/600",
            "597/600",
            "598/600",
            "694/600",
            "695/600",
            "696/600",
            "697/600",
            "698/600",
            "699/600",
            "700/600",
            "701/600",
            "/600",
            "137/139",
            "137/140",
            "137/249",
            "137/250",
            "137/251",
            "137/599",
            "137/600",
            "137/",
            "248/139",
            "248/140",
            "248/249",
            "248/250",
            "248/251",
            "248/599",
            "248/600",
            "248/",
            "136/139",
            "136/140",
            "136/249",
            "136/250",
            "136/251",
            "136/599",
            "136/600",
            "136/",
            "247/139",
            "247/140",
            "247/249",
            "247/250",
            "247/251",
            "247/599",
            "247/600",
            "247/",
            "313/139",
            "313/140",
            "313/249",
            "313/250",
            "313/251",
            "313/599",
            "313/600",
            "313/",
            "271/139",
            "271/140",
            "271/249",
            "271/250",
            "271/251",
            "271/599",
            "271/600",
            "271/"
          ]
        }),
        (bt = $h.storage.local.get({ variants: Kh }));
      $e.rpc.listen({
        editVariants: () => {
          $e.ui.open("variants-edit", { type: "tab", url: "content/variants-edit.html" });
        },
        getVariantsLists: async () => ({ full: await Hx(), adp: await $x() }),
        setVariantsLists: async (t) => {
          t.full && (await zx(t.full)), t.adp && (await Yh(t.adp)), Si();
        },
        resetVariants: async () => (((await bt).variants = Kh), Si())
      });
    });
  var cr = {};
  H(cr, { defineInPage: () => Jx, getFilenameFromTitle: () => Zx, getSpecs: () => Xx, set: () => Yx });
  async function _i() {
    let t = await jt;
    await Hs.storage.local.set({ smartname: t });
  }
  async function Yx(t) {
    (jt = Promise.resolve(t)), _i();
  }
  async function Jx() {
    let t = await Hs.tabs.query({ active: !0, currentWindow: !0 });
    if (t.length === 0) throw new Error("Can't find current tab");
    Kx.executeScriptWithGlobal({ tabId: t[0].id }, {}, "/injected/smartname.js");
  }
  async function Xx(t) {
    let e = await jt,
      r = new URL(t).hostname.split(".");
    for (let n = 0; n < r.length - 1; n++) {
      let i = e[r.slice(n).join(".")];
      if (i) return i;
    }
    return null;
  }
  async function Zx(t, e = null) {
    let r = { keep: " ", remove: "", hyphen: "-", underscore: "_" },
      n = await Fe.prefs;
    e && ((e = e.replace(Jh, "")), (e = e.replace(Xh, r[n.smartnamerFnameSpaces]))),
      (t = t.replace(Jh, "")),
      (t = t.replace(Xh, r[n.smartnamerFnameSpaces]));
    let i = n.smartnamerFnameMaxlen;
    return e
      ? (t.length + e.length + 1 > i && (t = t.substr(0, i - e.length - 1)), t + "." + e)
      : (t.length > i && (t = t.substr(0, i)), t);
  }
  var Fe,
    Kx,
    Hs,
    jt,
    Jh,
    Xh,
    F9,
    fr = B(() => {
      (Fe = z()), (Kx = (oe(), S(ae))), (Hs = Fe.browser), (jt = Hs.storage.local.get({ smartname: {} }).then((t) => t.smartname));
      (Jh = new RegExp('[/?<>\\:*|":]|[\0-\x80-\x9F]|\\\\', "g")), (Xh = new RegExp(" +", "g")), (F9 = new RegExp("\\.", "g"));
      Fe.rpc.listen({
        openSmartNameDefiner: async () => {
          let t = await Fe.ui.open("smartname-definer", { url: "content/smartname-define.html", type: "panel", width: 600, height: 400 });
          return await Fe.wait("smartname-definer"), t;
        },
        closeSmartNameDefiner: () => Fe.ui.close("smartname-definer"),
        closedSmartNameDefiner: (t) => Fe.rpc.call(t, "close"),
        setSmartNameData: (t) => Fe.rpc.call("smartname-definer", "setData", t),
        evaluateSmartName: (t, e) => Fe.rpc.call(t, "evaluate", e),
        addSmartNameRule: async (t) => {
          let e = await jt;
          (e[t.domain] = t), _i();
        },
        selectSmartNameXPath: (t, e) => Fe.rpc.call(t, "select", e),
        setSmartName: async (t) => {
          (jt = Promise.resolve({})), _i();
        },
        getSmartNameRules: async () => jt,
        editSmartName: () => {
          Fe.ui.open("smartname-edit", { type: "tab", url: "content/smartname-edit.html" });
        },
        removeFromSmartName: async (t) => {
          let e = await jt;
          delete e[t], _i();
        }
      });
    });
  var tg = {};
  H(tg, { handleBulkVideo: () => s2 });
  function n2(t, e) {
    let r = new Promise((i, a) => {
        (t.resolve = i), (t.reject = a);
      }),
      n = `https://www.${t2}.com/watch?v=${e}&vdh-bulk=${t.id}`;
    return an.tabs.create({ url: n, active: !1 }).then((i) => ((t.tabId = i.id), an.tabs.update(i.id, { muted: !0 }), r));
  }
  function i2(t, e) {
    return r2(() => n2(t, e)).catch((r) => {
      console.error("BulkDownload !!!", r.message);
    });
  }
  function a2(t) {
    t.ids.forEach((e) => {
      i2(t, e);
    });
  }
  function o2(t) {
    t.tabId &&
      setTimeout(() => {
        an.tabs.remove(t.tabId), (t.tabId = 0);
      }, 0);
    let e = t.resolve;
    if ((delete t.resolve, delete t.reject, t.count > 0)) {
      let r = Math.round((100 * (t.count - t.ids.length)) / t.count);
      Qh.updateProgress(t.id, r);
    }
    if (t.ids.length === 0 || t.aborted) {
      let r = t.actionResolve;
      r && (delete t.actionResolve, r());
    }
    e();
  }
  function s2(t) {
    let e = eg[t.bulk];
    if (!e) {
      console.error(`Bulk ${e.id} does not exist`);
      return;
    }
    let r = e.ids.indexOf(t.videoId);
    if (r < 0) {
      console.error(`Video ${t.videoId} is not part of bulk ${e.id}`);
      return;
    }
    return Object.assign(t, e.extra), e.ids.splice(r, 1), nn.dispatch("hit.new", t), Ii.execute("quickdownload", t), o2(e), !0;
  }
  var qe,
    an,
    nn,
    Ii,
    Qh,
    ki,
    Zh,
    Qx,
    e2,
    t2,
    r2,
    eg,
    rg = B(() => {
      (qe = z()),
        (an = qe.browser),
        (nn = (ge(), S(he))),
        (Ii = (sn(), S(on))),
        (Qh = (vt(), S(yt))),
        (ki = (oe(), S(ae))),
        (Zh = (Ei(), S(qi))),
        (Qx = (Yr(), S(Kr))),
        (e2 = ot().buildOptions.noyt || !1),
        (t2 = "youtube"),
        (r2 = ki.Concurrent()),
        (eg = {});
      qe.rpc.listen({
        tbvwsSelectedIds: (t) => {
          let e = [],
            r = nn.getHits();
          if (
            (Object.keys(r).forEach((n) => {
              let i = r[n];
              i.from == "tbvws-bulk" && i.topUrl == t.topUrl && !i.running && e.push(i.id);
            }),
            e.length > 0 && nn.dispatch("hit.delete", e),
            t.ids.length > 0)
          ) {
            let i = {
              id: "tbvws-bulk:" + Math.floor(Math.random() * 1e9),
              title: qe._("selected_media"),
              descrPrefix: qe._("bulk_n_videos", "" + t.ids.length),
              from: "tbvws-bulk",
              ids: t.ids,
              pageUrl: t.pageUrl,
              topUrl: t.topUrl,
              thumbnailUrl: an.runtime.getURL("/content/images/tbvws.png")
            };
            nn.dispatch("hit.new", i);
          }
        }
      });
      setTimeout(() => {
        class t extends Ii.DownloadAction {
          doJob() {
            let n = this;
            Qh.update(this.hit.id, { operation: "collecting", opStartDate: Date.now() });
            let i = {
              id: this.hit.id,
              aborted: !1,
              count: this.hit.ids.length,
              ids: [...this.hit.ids],
              tabId: null,
              resolve: null,
              reject: null,
              extra: n.bulkExtra || void 0
            };
            eg[this.hit.id] = i;
            let a = new Promise((o, s) => {
              (i.actionResolve = o),
                (i.actionReject = s),
                n.setAbort(() => {
                  (i.aborted = !0), s(new ki.VDHError("Aborted", { noReport: !0 }));
                });
            });
            return a2(i), a;
          }
          getReqs() {
            if (e2 && Zh.matchHit(this.hit)) return Zh.forbidden(), Promise.reject(new ki.VDHError("Forbidden", { noReport: !0 }));
            (this.reqs.coapp = !0), (this.reqs.coappMin = "1.6.2");
          }
          postJob() {}
          cleanup() {
            return this.clearAbort(), nn.dispatch("hit.delete", this.hit.id), super.cleanup();
          }
          static get name() {
            return "bulkdownload";
          }
          static get title() {
            return qe._("action_bulkdownload_title");
          }
          static get description() {
            return qe._("action_bulkdownload_description");
          }
          static get icon() {
            return "images/icon-action-quick-download2-64.png";
          }
          static get priority() {
            return 300;
          }
          static get catPriority() {
            return 2;
          }
          static canPerform(n) {
            return n.running > 0 ? !1 : n.from == "tbvws-bulk";
          }
        }
        Ii.register(t);
        class e extends t {
          async getReqs() {
            let n = this,
              i = await qe.prefs;
            return Promise.resolve()
              .then(() => {
                let a = "dlconv#" + this.hit.id;
                return qe.openedContents().indexOf("main") >= 0
                  ? qe.rpc
                      .call("main", "embed", an.runtime.getURL("content/dlconv-embed.html?nosaveas=1&panel=" + a))
                      .then(() => qe.wait(a))
                      .catch((o) => {
                        throw new ki.VDHError("Aborted", { noReport: !0 });
                      })
                  : Qx.getOutputConfigs().then((o) => {
                      let s = i.dlconvLastOutput || "05cb6b27-9167-4d83-833d-218a107d0376",
                        l = o[s];
                      if (!l) throw new Error("No such output configuration");
                      return { outputConfigId: s, outputConfig: l };
                    });
              })
              .then((a) => {
                i.dlconvLastOutput = a.outputConfigId;
                let o = a.outputConfig;
                n.bulkExtra = { convert: o };
                let s = o.ext || o.params.f;
                s && (n.bulkExtra.extension = s);
              })
              .then(() => super.getReqs());
          }
          static get name() {
            return "bulkdownloadconvert";
          }
          static get title() {
            return qe._("action_bulkdownloadconvert_title");
          }
          static get description() {
            return qe._("action_bulkdownloadconvert_description");
          }
          static get icon() {
            return "images/icon-action-download-convert-64.png";
          }
          static get priority() {
            return 80;
          }
          static canPerform(n) {
            return n.running > 0 ? !1 : n.from == "tbvws-bulk";
          }
          static get keepOpen() {
            return !0;
          }
        }
        Ii.register(e);
      }, 0);
    });
  var qi = {};
  H(qi, { fixStreamsUrl: () => S2, forbidden: () => A2, matchHit: () => x2 });
  function y2(t) {
    return {
      id: "tbvws:" + t.videoId,
      group: "tbvws:" + t.videoId,
      tabId: t.tabId,
      title: t.title,
      from: "tbvws",
      videoId: t.videoId,
      topUrl: t.topUrl,
      pageUrl: t.pageUrl,
      thumbnailUrl: t.videoDetails.thumbnail.thumbnails[0].url,
      duration: parseInt(t.videoDetails.lengthSeconds) || void 0,
      headers: [],
      proxy: null
    };
  }
  async function v2(t) {
    t.hlsManifestUrl && p2.handleHlsManifest(t);
    let e = await u2.getHitsFromVariants(Object.assign(y2(t), { baseJs: t.baseJs }), t.formats.concat(t.adaptiveFormats), {
      audioAndVideo: !0,
      keepProtected: !0
    });
    if (
      ((e = e.filter((r) => {
        if (typeof r.url > "u") return !0;
        let i = new RegExp("^\\d+x(\\d+)$").exec(r.size || "");
        if (i) {
          let a = parseInt(i[1]);
          return !isNaN(a && a <= 360);
        }
      })),
      t.bulk)
    ) {
      let r = e[0];
      (r.bulk = t.bulk), f2.handleBulkVideo(r);
    } else
      e.forEach((r) => {
        l2.dispatch("hit.new", r);
      });
  }
  function w2() {
    return Vs.isProbablyAvailable() && Vs.isAtLeastVersion("2.0.0");
  }
  function x2(t) {
    return ![t.url, t.audioUrl, t.videoUrl, t.pageUrl, t.topUrl].every((e) => !ig.test(e) && !m2.test(e));
  }
  async function A2() {
    let t = et._("chrome_noyt_text"),
      e = Oi.hash(t),
      r = et._("chrome_noyt_text3"),
      n = Oi.hash(r),
      i = r;
    n == -1960581238 && e != -1126813505 && (i = t);
    try {
      switch (
        (
          await d2.alert({
            title: et._("chrome_warning_yt"),
            text: [i, et._("chrome_noyt_text2")],
            height: 400,
            buttons: [
              { text: et._("chrome_install_firefox"), className: "btn-outline-secondary", close: !0, trigger: { what: "installFirefox" } },
              { text: et._("chrome_install_fx_vdh"), className: "btn-outline-primary", close: !0, trigger: { what: "vdhForFirefox" } }
            ]
          })
        ).what
      ) {
        case "installFirefox":
          return ng.gotoOrOpenTab("https://getfirefox.com/");
        case "vdhForFirefox":
          return ng.gotoOrOpenTab("https://addons.mozilla.org/firefox/addon/video-downloadhelper/");
      }
    } catch (a) {
      console.error("tbvws error", a);
    }
  }
  async function S2(t, e) {
    let r = null,
      n = null;
    async function i(o) {
      try {
        let s = `((a) => {${e}})('${o}')`;
        return await Vs.call("vm.run", s);
      } catch (s) {
        return console.error("VDH error resolving challenge", s), null;
      }
    }
    async function a(o) {
      let s = t[o];
      if (s) {
        let l = new URL(s.url),
          u = l.searchParams.get("n");
        u && (r != u && ((r = u), (n = await i(u))), n && l.searchParams.set("n", n), (t[o].url = l.href));
      }
    }
    await a("audio"), await a("video"), await a("full");
  }
  var et,
    zs,
    l2,
    u2,
    c2,
    f2,
    Oi,
    ng,
    d2,
    Vs,
    p2,
    h2,
    g2,
    m2,
    ig,
    b2,
    Ei = B(() => {
      (et = z()),
        (zs = et.browser),
        (l2 = (ge(), S(he))),
        (u2 = (Bs(), S(Ls))),
        (c2 = (fr(), S(cr))),
        (f2 = (rg(), S(tg))),
        (Oi = (oe(), S(ae))),
        (ng = (ht(), S(pt))),
        (d2 = (di(), S(fi))),
        (Vs = (De(), S(Me))),
        (p2 = (Ti(), S(Pi))),
        (h2 = "youtube"),
        (g2 = new RegExp("^https?://([^/]*\\.)?youtube(?:\\-nocookie)?(\\.co)?.([^./]+)/")),
        (m2 = new RegExp("^https?://([^/]*.)?googlevideo\\.")),
        (ig = new RegExp("^https?://([^/]*\\.)?youtube(\\.co)?.([^./]+)/.*"));
      b2 = { url: [{ hostContains: h2 }] };
      zs.webNavigation.onCompleted.addListener(async function (t) {
        let e = await et.prefs,
          r = { tabId: t.tabId, frameIds: [t.frameId] };
        if (g2.test(t.url))
          try {
            let n = await zs.tabs.get(t.tabId);
            Oi.executeScriptWithGlobal(
              r,
              {
                _$vdhData: r,
                _$vdhSmartNameSpecs: await c2.getSpecs(t.url),
                _$vdhTopUrl: n.url,
                _$vdhExtractMethod: e.tbvwsExtractionMethod,
                _$vdhSupportChallenge: w2()
              },
              "/injected/tbvws.js"
            );
          } catch (n) {
            console.error("Cannot find tab", n);
          }
        if (e.bulkEnabled && ig.test(t.url))
          try {
            let n = await zs.tabs.get(t.tabId);
            Oi.executeScriptWithGlobal(r, { _$vdhTopUrl: n.url }, "/injected/tbvws-bulk.js");
          } catch (n) {
            console.error("VDH error: could not inject bulk script", n);
          }
      }, b2);
      et.rpc.listen({
        tbvwsDetectedVideo: async (t) => {
          try {
            await v2(t);
          } catch (e) {
            console.error("VDH error: detectedVideo", e);
          }
        }
      });
    });
  var Pi = {};
  H(Pi, { download: () => C2, handleHlsManifest: () => D2, networkHook: () => R2 });
  function T2(t, e, r, n, i) {
    let a = t.hit,
      o = { audio: 0, video: 0 },
      s = { audio: !1, video: !1 },
      l = !1;
    function u(d) {
      l || ((l = !0), n(d));
    }
    let f = {},
      c = !1;
    e.forEach(function (d) {
      let v = d.type;
      function x() {
        (s[v] = !0), s.audio && s.video && r();
      }
      function A(g) {
        (o[v] = g), c || i(Math.round((o.audio + o.video) / 2));
      }
      try {
        let g,
          p = a[v + "Mpd"];
        async function w(k) {
          let m = await Wt.prefs,
            _ = a.url || a[v + "Url"];
          a._mpdCommonBaseUrl && (_ = new URL(a._mpdCommonBaseUrl, _).href),
            p.base_url && (_ = new URL(p.base_url, _).href),
            (g = new og.DashChunkset({ url: _, headers: t.hit.headers || [], proxy: (m.coappUseProxy && t.hit.proxy) || null })),
            (f[v] = { chunkset: g, target: d.fileName }),
            g.downloadFile(d.fileName, { init_segment: k, segments: p.segments }, _, x, u, A);
        }
        if (typeof p.init_segment == "string") w(Ut.toByteArray(p.init_segment));
        else if (typeof p.init_segment == "object") w(p.init_segment);
        else {
          let k = new URL(p.init_segment_url, a[v + "Url"]).href;
          Wt.unsafe_prefs.chunkedCoappDataRequests
            ? sg
                .requestBinary(k, { headers: a.headers || [], proxy: (Wt.unsafe_prefs.coappUseProxy && a.proxy) || null })
                .then((m) => {
                  w(m);
                })
                .catch((m) => {
                  u(m.message);
                })
            : Ut.downloadToByteArray(k, a.headers, a.isPrivate)
                .then((m) => {
                  w(m);
                })
                .catch((m) => {
                  u(m.message);
                });
        }
      } catch (g) {
        console.warn("Error", g), u(new Error("Dash ADP: " + g.message));
      }
    }),
      (t.abortChunked = function () {
        c = !0;
        for (let d in f) f[d].chunkset.actionAbortFn();
        n(new Ut.VDHError("User abort", { noReport: !0 }));
      });
  }
  function C2(t, e, r, n, i) {
    e.ignoreSpecs = !0;
    let a = null;
    switch (t.hit.chunked) {
      case "hls":
        a = $s.getChunkSet(t.hit);
        break;
      case "dash-adp":
        if (e.length > 1) {
          T2(t, e, r, n, i);
          return;
        }
      case "dash":
        a = new og.DashChunkset(t.hit);
        break;
    }
    if (!a) {
      k2.error("Requested download of chunked stream, but no chunkset found");
      return;
    }
    a.download(t, e, r, n, i);
  }
  async function R2(t, e) {
    let r = await Wt.prefs;
    if (!r.chunksEnabled) return null;
    let n = null;
    return (
      r.dashEnabled &&
        (q2.test(t.url)
          ? (n = new Ci(t.url, "json", e))
          : e.contentType && E2.test(e.contentType.toLowerCase()) && (n = new Ci(t.url, "xml", e))),
      r.hlsEnabled &&
        (O2.test(t.url)
          ? (n = new dr(t.url))
          : P2.test(t.url)
          ? (n = new dr(t.url, "json"))
          : e.contentType && e.contentType.toLowerCase().indexOf("mpegurl") >= 0 && (n = new dr(t.url))),
      n && !n.skipManifest
        ? new Promise((i, a) => {
            if (t.method != "GET") return a(new Error("Not a GET request getting chunks manifest"));
            r.chunkedCoappManifestsRequests
              ? sg
                  .request(t.url, { headers: e.headers, proxy: (r.coappUseProxy && e.proxy) || null })
                  .then((o) => {
                    n.handleManifest(o), n.checkReady(), i(n);
                  })
                  .catch(a)
              : Ut.request({ url: t.url, headers: e.headers })
                  .then((o) => {
                    o.ok
                      ? o.text().then((s) => {
                          n.handleManifest(s), n.checkReady(), i(n);
                        })
                      : (console.warn("Error retrieving manifest from", t.url), i(null));
                  })
                  .catch((o) => {
                    console.warn("Error retrieving manifest from", t.url), i(null);
                  });
          })
        : null
    );
  }
  function M2(t) {
    return { masterManifest: t.hlsManifestUrl, tabId: t.tabId, title: t.title, topUrl: t.topUrl, thumbnailUrl: t.thumbnailUrl };
  }
  async function D2(t) {
    let e = t.hlsManifestUrl,
      r = M2(t),
      n = new dr(e);
    Ut.request({ url: e })
      .then((i) => {
        i.ok
          ? i.text().then((a) => {
              n.handleManifest(a), n.handleHit(r);
            })
          : console.error("Error retrieving manifest from", e);
      })
      .catch((i) => {
        console.error("Error retrieving manifest from", e);
      });
  }
  var Wt,
    _2,
    $s,
    ag,
    og,
    I2,
    Ut,
    sg,
    k2,
    q2,
    E2,
    O2,
    P2,
    ln,
    Ci,
    dr,
    Ti = B(() => {
      (Wt = z()),
        (_2 = (ge(), S(he))),
        ($s = (js(), S(Ns))),
        (ag = Rs()),
        (og = (Vh(), S(zh))),
        (I2 = (Ei(), S(qi))),
        (Ut = (oe(), S(ae))),
        (sg = (De(), S(Me))),
        (k2 = (Hr(), S(Br))),
        (q2 = new RegExp("^https?://.*/master\\.json")),
        (E2 = new RegExp("dash.*mpd")),
        (O2 = new RegExp("^https?://.*\\.m3u8(?:\\?|$)")),
        (P2 = new RegExp("^https?://api\\.periscope\\.tv/api/v2/getAccessPublic")),
        (ln = class {
          constructor(e) {
            (this.type = e), (this.receivedChunks = []);
          }
          handleHit(e) {
            (this.hitData = e), this.checkReady();
          }
          checkReady() {}
          handleManifest() {}
          handle() {}
        }),
        (Ci = class extends ln {
          constructor(e, r, n) {
            super("dash"), (this.format = r), (this.manifestUrl = e), (this.meta = n);
          }
          handleManifest(e) {
            try {
              if (this.format == "json") {
                let r = JSON.parse(e);
                r &&
                  Array.isArray(r.video) &&
                  r.video.length > 0 &&
                  Array.isArray(r.video[0].segments) &&
                  r.video[0].segments.length > 0 &&
                  (this.mpd = r);
              } else this.format == "xml" && (this.handler = I2.dashManifest(this.manifestUrl, e, this.meta));
            } catch (r) {
              console.error("Error parsing DASH manifest", r.message || r);
            }
          }
          checkReady() {
            this.hitData && (this.mpd || this.handler) && this.handle();
          }
          pickAudioMpd() {
            let e = [
                { field: "codecs", pref: "mp4a.40.2" },
                { field: "format", pref: "mp42" },
                { field: "mime_type", pref: "audio/mp4" },
                { field: "channels", pref: "@max" },
                { field: "bitrate", pref: "@max" },
                { field: "sample_rate", pref: "@max" }
              ],
              r = [].concat(this.mpd.audio);
            return (
              r.sort(function (n, i) {
                for (let a = 0; a < e.length; a++) {
                  let o = e[a];
                  if (n[o.field] != i[o.field]) {
                    if (o.pref == "@max") return i[o.field] - n[o.field];
                    if (n[o.field] == o.pref) return -1;
                    if (i[o.field] == o.pref) return 1;
                  }
                }
                return 0;
              }),
              r[0]
            );
          }
          handle() {
            let e = Ut.hashHex(this.hitData.url),
              r = this;
            if (this.handler) this.handler(this.hitData);
            else if (this.mpd) {
              let n = r.mpd.audio && r.mpd.audio.length > 0 && Array.isArray(r.mpd.audio[0].segments) && r.mpd.audio[0].segments.length > 0,
                i = r.mpd.video && r.mpd.video.length > 0 && Array.isArray(r.mpd.video[0].segments) && r.mpd.video[0].segments.length > 0,
                a = this.mpd.video,
                o = this.mpd.audio;
              !i || (n && Wt.unsafe_prefs.dashOnAdp == "audio")
                ? ((a = this.mpd.audio), (o = null))
                : (!n || (i && Wt.unsafe_prefs.dashOnAdp == "video")) && (o = null),
                a.forEach(function (s, l) {
                  let u = {};
                  o
                    ? ((u.chunked = "dash-adp"),
                      (u.audioMpd = r.pickAudioMpd()),
                      (u.videoMpd = s),
                      (u.audioUrl = new URL("dash-audio.mp4", r.hitData.url).href),
                      (u.videoUrl = new URL("dash-video.mp4", r.hitData.url).href),
                      (u.url = void 0))
                    : (u._mpd = s);
                  let f = Object.assign(
                    {},
                    r.hitData,
                    {
                      id: "dash:" + e + "-" + l,
                      extension: "mp4",
                      bitrate: s.bitrate || s.avg_bitrate || null,
                      length: null,
                      chunked: "dash",
                      descrPrefix: Wt._("dash_streaming"),
                      group: "grp-" + e
                    },
                    u
                  );
                  (f._mpdCommonBaseUrl = r.mpd.base_url),
                    s.width && s.height && (f.size = s.width + "x" + s.height),
                    s.duration && (f.duration = Math.round(s.duration)),
                    _2.dispatch("hit.new", f);
                });
            }
          }
        }),
        (dr = class extends ln {
          constructor(e, r) {
            super("hls"), (this.masterFormat = r || "m3u8"), (this.mediaUrl = e);
          }
          handleHit(e) {
            let r = e.url;
            e.masterManifest
              ? (r = e.masterManifest)
              : e.audioMediaManifest && e.videoMediaManifest && (r = e.audioMediaManifest + "~" + e.videoMediaManifest),
              (e.group = "grp-" + Ut.hashHex(r)),
              ln.prototype.handleHit.call(this, e);
          }
          handleManifest(e) {
            let r = null;
            this.masterFormat == "m3u8"
              ? (r = ag.get(e, this.mediaUrl))
              : this.masterFormat == "json" && (r = ag.getPsJson(e, this.mediaUrl)),
              r && (r.isMaster() ? (this.master = r) : r.isMedia() && (this.media = r));
          }
          checkReady() {
            this.hitData && (this.master || this.media) && this.handle();
          }
          handle() {
            this.master
              ? $s.handleMaster(this.master, this.hitData)
              : this.media && $s.handleMedia(this.media, this.hitData, this.mediaUrl);
          }
        });
    });
  var ug = q((N9, lg) => {
    var un = z(),
      F2 = (Vr(), S(zr));
    async function N2(t) {
      let e = await un.prefs;
      Math.round(Date.now() / 1e3) < e.donateNotAgainExpire ||
        F2.checkLicense().then((r) => {
          (r && r.status == "accepted") || un.ui.open("funding", { type: e.alertDialogType, url: "content/funding.html", height: 550 });
        });
    }
    lg.exports.newDownload = async function () {
      let t = await un.prefs,
        e = t.downloadCount;
      e++, (t.downloadCount = e), e > 0 && e % 100 == 0 && N2(e);
    };
    un.rpc.listen({
      fundingLater: async () => {
        let t = await un.prefs;
        t.donateNotAgainExpire = Math.round(Date.now() / 1e3) + 60 * 60 * 24 * 30;
      }
    });
  });
  var Ri = {};
  H(Ri, { outputConfigForHit: () => W2, set: () => fg });
  async function fg(t) {
    (Ks = Promise.resolve(t)), await cg.storage.local.set({ convrules: t });
  }
  async function W2(t) {
    let e = await Ks,
      r = (t.url || t.videoUrl || t.audioUrl) && t.topUrl;
    if (!r) return null;
    let n = new URL(r).hostname,
      i = [],
      a = n.split(".");
    for (let l = 0; l < a.length - 1; l++) i.push(a.slice(l).join("."));
    let o = null;
    return e.every((l) => {
      let u = !0;
      return (
        l.extension && t.extension !== l.extension && (u = !1), u && l.domain && (u = !i.every((f) => f !== l.domain)), u && (o = l), !u
      );
    }) || !o.convert
      ? null
      : (await j2.getOutputConfigs())[o.format] || null;
  }
  var Gs,
    cg,
    j2,
    Ks,
    Mi = B(() => {
      (Gs = z()), (cg = Gs.browser), (j2 = (Yr(), S(Kr))), (Ks = cg.storage.local.get({ convrules: [] }).then((t) => t.convrules));
      Gs.rpc.listen({
        editConversionRules: () => {
          Gs.ui.open("convrules-edit", { type: "tab", url: "content/convrules-edit.html" });
        },
        getConversionRules: () => Ks,
        setConversionRules: (t) => fg(t)
      });
    });
  var Ys = {};
  H(Ys, { blacklistAdded: () => U2, downloadError: () => B2, downloadSuccess: () => L2 });
  function U2(t) {}
  function L2(t) {}
  function B2(t, e) {}
  var Js = B(() => {});
  var on = {};
  H(on, {
    Action: () => be,
    DownloadAction: () => tt,
    availableActions: () => J2,
    convertLocal: () => bg,
    describeAll: () => Y2,
    execute: () => X2,
    mergeLocal: () => wg,
    register: () => ce
  });
  function vg(t) {
    Object.keys(pr).forEach((e) => {
      let r = pr[e];
      t(r);
    });
  }
  function Y2() {
    let t = {};
    return (
      vg((e) => {
        t[e.name] = {
          name: e.name,
          title: e.title,
          description: e.description,
          icon: e.icon,
          icon18: e.icon.replace(/\-(\d+)\./, "-$1."),
          catPriority: e.catPriority || 0
        };
      }),
      t
    );
  }
  function ce(t) {
    pr[t.name] = t;
  }
  function J2(t) {
    let e = [];
    vg((n) => {
      n.canPerform(t) && e.push(n.name);
    });
    let r = [E.unsafe_prefs["default-action-0"], E.unsafe_prefs["default-action-1"], E.unsafe_prefs["default-action-2"]];
    return (
      e.sort(function (n, i) {
        let a = pr[n],
          o = pr[i],
          s = a.catPriority || 0,
          l = o.catPriority || 0;
        return l != s ? l - s : n == r[s] ? -1 : i == r[l] ? 1 : o.priority - a.priority;
      }),
      e
    );
  }
  function X2(t, e) {
    let r = pr[t];
    if (!r) throw new Error("No such action " + t);
    return new r(e).execute(), r.keepOpen;
  }
  function wg() {
    E.ui.close("main");
    let t = "local-merge:" + ++pn.idIndex;
    return new pn({ id: t }).execute();
  }
  async function bg() {
    let t, e, r, n, i;
    E.ui.close("main");
    let a = await E.prefs;
    return Ge.selectConvertFiles(a.lastDownloadDirectory || "dwhelper")
      .then((o) => {
        if (!o) throw new Error("No file selected");
        return (t = o.selected), (n = o.directory), (r = o.outputConfig), we.getOutputConfigs().then((s) => s[o.outputConfig]);
      })
      .then((o) => {
        if (!o) throw new Error("Unknown output config " + r);
        if (((e = o), (i = e.ext || e.params.f || "mp4"), e.audioonly))
          return xt.checkLicense().then((s) => {
            if (s.status != "accepted" && s.status != "unneeded")
              throw (xt.alertAudioNeedsReg(), new Error("License required for audio conversion"));
          });
      })
      .then(() => {
        if (t.length > 1) return Ge.selectDirectory(n, { titleText: E._("select_output_directory") });
        {
          let o = t[0],
            s = /^(.*)\.([^\.]{1,5})$/.exec(o);
          return s ? (o = s[1] + "." + i) : (o = o + ".mp4"), Ge.saveAs(o, n);
        }
      })
      .then((o) => {
        if (!o) return null;
        (a.dlconvLastOutput = r),
          t.forEach((s) => {
            let l = "local-convert:" + ++dn.idIndex;
            new dn(
              { id: l },
              { inDirectory: n, inFileName: s, outDirectory: o.directory, outFileName: o.fileName, outputConfig: e, extension: i }
            ).execute();
          });
      })
      .catch((o) => {
        console.warn("Error converting local", o);
      });
  }
  var E,
    Fi,
    cl,
    Lt,
    Xs,
    H2,
    $,
    Ge,
    ue,
    xt,
    dg,
    we,
    z2,
    yg,
    V2,
    Di,
    $2,
    cn,
    G2,
    pg,
    hg,
    gg,
    mg,
    Bt,
    Ht,
    K2,
    be,
    tt,
    fn,
    Zs,
    Qs,
    el,
    tl,
    rl,
    nl,
    il,
    al,
    ol,
    Ni,
    sl,
    ji,
    ll,
    ul,
    pr,
    dn,
    pn,
    sn = B(() => {
      (E = z()),
        (Fi = E.browser),
        (cl = Xe()),
        (Lt = (vt(), S(yt))),
        (Xs = (Hr(), S(Br))),
        (H2 = (ge(), S(he))),
        ($ = (oe(), S(ae))),
        (Ge = (di(), S(fi))),
        (ue = (De(), S(Me))),
        (xt = (Vr(), S(zr))),
        (dg = ph()),
        (we = (Yr(), S(Kr))),
        (z2 = (Ti(), S(Pi))),
        (yg = (js(), S(Ns))),
        (V2 = ug()),
        (Di = (fr(), S(cr))),
        ($2 = (Mi(), S(Ri))),
        (cn = (Ei(), S(qi))),
        (G2 = ot()),
        (pg = G2.buildOptions.noyt || !1),
        (hg = (Js(), S(Ys))),
        (gg = $.Concurrent(async () => (await E.prefs).downloadControlledMax || 1 / 0)),
        (mg = $.Concurrent(async () => (await E.prefs).convertControlledMax || 1 / 0)),
        (Bt = {}),
        (Ht = {}),
        (K2 = 0),
        (be = class {
          constructor(e) {
            (this.hit = Object.assign({}, e)),
              (this.reqs = {}),
              (this.actionId = ++K2),
              (this.cleanupData = { files: [] }),
              this.updateHit({ actionStartDate: new Date().getTime() });
          }
          execute() {
            let e = this;
            e.updateRunning(1),
              Promise.resolve(e.getReqs())
                .then(() => e.solveAllReqs())
                .then(() => Promise.resolve(e.doJob()))
                .then(() => Promise.resolve(e.postJob()))
                .catch((r) => {
                  console.warn("Action error:", r.message),
                    r.noReport ||
                      (!r.videoTitle && e.hit.title && (r.videoTitle = e.hit.title),
                      r.reportAsLog ? Xs.log(r) : (console.error(r.toString(), r), Xs.error(r)));
                })
                .then(() => Promise.resolve(e.cleanup()))
                .then(() => {
                  e.updateRunning(-1), e.setOperation(null);
                });
          }
          getReqs() {}
          solveReqs() {}
          solveAllReqs() {
            let e = this;
            return Promise.resolve(e.solveReqs()).then((r) => {
              if (r) return e.solveAllReqs();
            });
          }
          solveCoAppReqs() {
            let e = this;
            return new Promise((r, n) => {
              ue.check().then((i) => {
                if ((delete e.reqs.coapp, i.status)) {
                  e.hasCoapp = !0;
                  let a = i.info.version;
                  e.reqs.coappMin && !$.isMinimumVersion(i.info.version, e.reqs.coappMin)
                    ? ue
                        .call("quit")
                        .catch(() => {})
                        .then(async () => {
                          let o = (await E.prefs).coappRestartDelay;
                          return new Promise((s) => setTimeout(s, o));
                        })
                        .then(() => {
                          ue.check().then((o) => {
                            o.status && $.isMinimumVersion(o.info.version, e.reqs.coappMin)
                              ? (delete e.reqs.coappMin, r(!0))
                              : (Ge.alert({
                                  title: E._("coapp_outofdate"),
                                  text: E._("coapp_outofdate_text", [(o.info && o.info.version) || a, e.reqs.coappMin]),
                                  buttons: [{ text: E._("coapp_update"), className: "btn-success", rpcMethod: "installCoApp" }]
                                }),
                                delete e.reqs.coappMin,
                                n(new $.VDHError("Aborted", { noReport: !0 })));
                          });
                        })
                    : (delete e.reqs.coappMin, r(!0));
                } else
                  Ge.alert({
                    title: E._("coapp_required"),
                    text: E._("coapp_required_text"),
                    buttons: [{ text: E._("coapp_install"), className: "btn-success", rpcMethod: "installCoApp" }]
                  }),
                    n(new $.VDHError("Aborted", { noReport: !0 }));
              });
            });
          }
          doJob() {
            console.warn("Generic action doJob");
          }
          postJob() {}
          cleanup() {}
          start() {
            return console.warn("action.start() is obsolete, use action.execute()"), this.execute();
          }
          setOperation(e) {
            Lt.setHitOperation(this.hit.id, e);
          }
          setProgress(e) {
            Lt.updateProgress(this.hit.id, e);
          }
          clearProgress() {
            Lt.updateProgress(this.hit.id, null);
          }
          updateRunning(e) {
            Lt.updateRunning(this.hit.id, e);
          }
          updateHit(e) {
            Lt.update(this.hit.id, e);
          }
          setAbort(e) {
            let r = Bt[this.hit.id];
            r || (r = Bt[this.hit.id] = {}),
              r[this.actionId] && console.warn("Overwritting abortable task"),
              (r[this.actionId] = e.bind(this)),
              this.updateHit({});
          }
          clearAbort() {
            let e = Bt[this.hit.id];
            e && e[this.actionId] && (delete e[this.actionId], Object.keys(e).length == 0 && delete Bt[this.hit.id]);
          }
          setStop(e) {
            let r = Ht[this.hit.id];
            r || (r = Ht[this.hit.id] = {}),
              r[this.actionId] && console.warn("Overwritting stoppable task"),
              (r[this.actionId] = e.bind(this)),
              this.updateHit({});
          }
          clearStop() {
            let e = Ht[this.hit.id];
            e && e[this.actionId] && (delete e[this.actionId], Object.keys(e).length == 0 && delete Ht[this.hit.id]);
          }
          static get keepOpen() {
            return !1;
          }
        }),
        (tt = class t extends be {
          constructor(e) {
            super(e), (this.promptFilename = !0), (this.streams = {}), (this.hasCoapp = !1), (this.useSideDownload = !1);
          }
          doJob() {
            let e = this;
            return (
              this.getStreams(),
              e
                .solveAllStreamsName()
                .then(() => e.ensureOutputDirectory())
                .then(() => e.fixStreamsUrl())
                .then(() =>
                  e.useSideDownload
                    ? e
                        .grabInfo()
                        .then(() => e.handleWatermark())
                        .then(() => e.sideDownload())
                        .catch((r) => {
                          throw r;
                        })
                    : e
                        .downloadAllStreams()
                        .then(() => e.grabInfo())
                        .then(() => e.handleWatermark())
                        .then(() => {
                          if (e.reqs.aggregate) return e.aggregate();
                        })
                )
                .then(() => {
                  if (e.reqs.convert) return e.convert();
                })
                .then(() => V2.newDownload())
                .then(() => {
                  e.watermarked && e.explainQR();
                })
                .then(() => {
                  hg.downloadSuccess(e.hit);
                })
                .catch((r) => {
                  throw (hg.downloadError(e.hit, r.message), r);
                })
            );
          }
          async sideDownload() {
            let e = this,
              r = !1;
            e.setOperation("queued");
            let n = async () => {
              e.clearAbort(), e.updateHit({ operation: "downloading", opStartDate: Date.now() });
              let i = 0;
              e.setAbort(() => {
                i != 0 && ((r = !0), we.sideDownloadAbort(i));
              }),
                ((e.videoInfo && e.videoInfo.streams) || []).forEach((u) => {
                  u.codec_type == "video" &&
                    Object.assign(e.videoInfo, {
                      fps: parseFloat(u.avg_frame_rate),
                      height: parseFloat(u.height),
                      width: parseFloat(u.width),
                      videoCodec: u.codec_name
                    });
                });
              let a = new Date().getTime(),
                o = (u, f) => {
                  if (e.videoInfo.duration) {
                    let d = Math.round((100 * u) / e.videoInfo.duration);
                    this.setProgress(d);
                  }
                  let c = {};
                  if (typeof f.total_size < "u") {
                    let d,
                      v = parseInt(f.total_size) || 0;
                    if (((c.length = v), u > 0)) {
                      let x = new Date().getTime(),
                        A = (v * 1e3) / (x - a);
                      A < 1024
                        ? (d = A * 8 + " bps")
                        : A < 1024 * 1e3
                        ? (d = E._("KB", Math.round(A / 100) / 10) + "/s")
                        : A < 1024 * 1e3 * 1e3
                        ? (d = E._("MB", Math.round(A / 1e5) / 10) + "/s")
                        : (d = E._("GB", Math.round(A / 1e8) / 10) + "/s"),
                        (c.dlbitrate = d);
                    }
                  }
                  Object.keys(c).length > 0 && this.updateHit(c);
                },
                s = (u) => {
                  i = u;
                },
                l = e.intermediateFilePath || e.filePath;
              await we.sideDownload(e.hit.mediaManifest || [e.hit.audioMediaManifest, e.hit.videoMediaManifest], {
                filePath: l,
                wm: e.watermark,
                headers: e.hit.headers,
                on_progress: o,
                on_start: s
              });
            };
            try {
              await gg(n), e.clearAbort();
            } catch (i) {
              if ((e.clearAbort(), !r)) throw i;
            }
          }
          getCoappTmpName(e = {}) {
            return ue.call("tmp.tmpName", { prefix: e.prefix || "vdh-", postfix: e.postfix || ".tmp" });
          }
          async solveStreamName(e) {
            let r = this,
              n = await E.prefs;
            if (r.reqs.aggregate || r.reqs.convert)
              return r.getCoappTmpName().then((i) => {
                (e.fileName = i.fileName),
                  (e.directory = i.directory),
                  (e.filePath = i.filePath),
                  r.cleanupData.files.push(i.filePath),
                  r.cleanupData.files.push(i.filePath + ".part");
              });
            if (r.downloadWith == "coapp")
              if (r.hit.urls) {
                let i,
                  a = r.hit.type,
                  o = /([^/]*)\.([a-zA-Z0-9]+)(?:\?.*)?$/.exec(e.url);
                o ? ((i = o[2]), (a = o[1])) : (i = Object.keys(r.hit.extensions)[0]);
                let s = ("000000" + e.index).substr(-6);
                switch (n.galleryNaming) {
                  case "type-index":
                    e.fileName = await Di.getFilenameFromTitle(r.hit.type + "-" + s, i);
                    break;
                  case "url":
                    e.fileName = await Di.getFilenameFromTitle(a, i);
                    break;
                  case "index-url":
                    e.fileName = await Di.getFilenameFromTitle(s + "-" + a, i);
                    break;
                }
                e.directory = r.filePath;
                let l = await ue.call("path.homeJoin", e.directory, e.fileName);
                e.filePath = l;
              } else (e.fileName = r.fileName), (e.directory = r.directory), (e.filePath = r.filePath);
            else (e.fileName = await r.getFilename()), r.reqs.needFilename && (e.saveas = !0);
          }
          solveAllStreamsName() {
            let e = this;
            return Promise.all(Object.keys(this.streams).map((r) => e.solveStreamName(e.streams[r])));
          }
          fixStreamsUrl() {
            let e = this,
              n = this.hit.baseJs;
            if (n) return e.updateHit({ baseJs: null }), cn.fixStreamsUrl(e.streams, n);
          }
          downloadAllStreams() {
            let e = this;
            return (
              e.setOperation("queued"),
              gg(
                () => (
                  e.clearAbort(),
                  e.updateHit({ operation: "downloading", opStartDate: Date.now() }),
                  e.hit.chunked
                    ? e.downloadAllChunkedStreams()
                    : (e.setAbort(e.abortDownload),
                      (e.downloadStreamControl = $.Concurrent(async () => (await E.prefs).downloadStreamControlledMax || 1 / 0)),
                      Promise.all(Object.keys(this.streams).map((r) => e.downloadStream(e.streams[r]))))
                ),
                (r, n) => {
                  e.setAbort(() => {
                    n(new $.VDHError("Aborted", { noReport: !0 }));
                  });
                }
              )
                .then(() => {
                  e.clearAbort();
                })
                .catch((r) => {
                  throw (e.clearAbort(), r);
                })
            );
          }
          downloadStream(e) {
            let r = this;
            return r.downloadStreamControl(() => r.doDownloadStream(e));
          }
          async doDownloadStream(e) {
            let r = this,
              n = {
                coappDownload: r.downloadWith === "coapp",
                proxy: this.hit.proxy,
                source: { url: e.url, isPrivate: this.hit.isPrivate, headers: e.headers, referrer: e.referrer },
                target: { filename: e.fileName || (await this.getFilename()), directory: e.directory, saveAs: !!e.saveas }
              },
              i = await E.prefs;
            return new Promise((a, o) => {
              e.downloadId = dg.download(
                n,
                (s) => {
                  if (
                    (s && !r.filePath && (r.filePath = s),
                    s &&
                      i.contentRedirectEnabled &&
                      r.hit.possibleContentRedirect &&
                      (typeof e.contentRedirected > "u" && (e.contentRedirected = 3), e.contentRedirect > 0))
                  ) {
                    ue.call("fs.stat", s)
                      .then((l) => {
                        l.size < 2048
                          ? ue
                              .call("fs.readFile", s, "utf8")
                              .then((u) => {
                                Xs.log({ message: "Short content " + l.size, details: u });
                                let f = /^(https?:\/\/.*)/.exec(u) || /^(https?:\/\/.*)/.exec(u.substring(6)),
                                  c = f && f[1];
                                c
                                  ? (e.contentRedirect--,
                                    (e.url = c),
                                    r
                                      .downloadStream(e)
                                      .then((d) => {
                                        a(d);
                                      })
                                      .catch((d) => {
                                        o(d);
                                      }))
                                  : a();
                              })
                              .catch((u) => {
                                o(u);
                              })
                          : a();
                      })
                      .catch((l) => {
                        o(l);
                      });
                    return;
                  }
                  a();
                },
                (s) => {
                  o(s);
                },
                (s) => {
                  (e.progress = s),
                    (s = 0),
                    Object.keys(r.streams).forEach((l) => {
                      s += r.streams[l].progress || 0;
                    }),
                    (s = s / Object.keys(r.streams).length),
                    r.setProgress(s);
                },
                r.hit.headers
              );
            });
          }
          downloadAllChunkedStreams() {
            let e = this,
              r = [];
            Object.keys(e.streams).forEach((a) => {
              let o = e.streams[a];
              r.push({ fileName: o.filePath, type: a });
            });
            let n = e.hit.chunked == "hls";
            n && e.setStop(e.stopRecording);
            let i = e.hit.chunked == "dash-adp";
            return (
              i && e.setAbort(e.abortChunkedDownload),
              new Promise((a, o) => {
                z2.download(
                  e,
                  r,
                  () => {
                    n && e.clearStop(), i && e.clearAbort(), a();
                  },
                  (s) => {
                    n && e.clearStop(), i && e.clearAbort(), o(s);
                  },
                  (s) => {
                    e.setProgress(s);
                  }
                );
              })
            );
          }
          ensureOutputDirectory() {
            let e = this;
            if (e.directory)
              return ue.call("fs.stat", e.directory).then(
                (r) => {
                  if (!(r.mode & 16384)) throw new $.DetailsError(E._("error_not_directory", e.directory), "details");
                },
                (r) =>
                  new Promise((n, i) => {
                    ue.call("fs.mkdirp", e.directory).then(() => {
                      n();
                    });
                  })
              );
          }
          async grabInfo() {
            let e = this,
              r = e.streams.video || e.streams.full || e.streams.audio,
              i = e.hit.mediaManifest || e.hit.videoMediaManifest || e.hit.audioMediaManifest || (r && r.filePath);
            if (i)
              return we
                .info(i, !1, this.hit.headers)
                .then((a) => {
                  a.videoCodec == "av1" && (a.videoCodec = "h264"), (e.videoInfo = a);
                  let o = {};
                  a.width && a.height && (o.size = a.width + "x" + a.height),
                    a.duration && (o.duration = a.duration),
                    a.fps && (o.fps = a.fps),
                    Object.assign(e.hit, o),
                    e.updateHit(o);
                })
                .catch((a) => {
                  throw new Error("GrabInfo: Cannot get info from " + i + ":" + a.message);
                });
          }
          handleWatermark() {
            let e = this;
            if (e.videoInfo && e.license && e.license.status != "accepted" && e.license.status != "unneeded")
              return we.wmForHeight(e.videoInfo.height).then((r) => {
                (e.watermark = r), r && r.qr && (e.cleanupData.files.push(r.qr), (e.watermarked = !0));
              });
          }
          aggregate() {
            let e = this;
            return (
              e.setOperation("converter_queued"),
              e.setProgress(0),
              mg(
                () => e.doAggregate(),
                (r, n) => {
                  e.setAbort(() => {
                    n(new $.VDHError("Aborted", { noReport: !0 }));
                  });
                }
              )
                .then(() => {
                  e.clearAbort();
                })
                .catch((r) => {
                  throw (e.clearAbort(), r);
                })
            );
          }
          doAggregate() {
            let e = this;
            return (
              e.updateHit({ operation: "aggregating", opStartDate: Date.now() }),
              e.setAbort(() => {
                e.aborted = !0;
              }),
              new Promise((r, n) => {
                we.aggregate(
                  {
                    audio: e.streams.audio.filePath,
                    video: e.streams.video.filePath,
                    target: e.intermediateFilePath || e.filePath,
                    wm: e.watermark,
                    videoCodec: e.videoInfo && e.videoInfo.videoCodec,
                    fps: e.videoInfo && e.videoInfo.fps
                  },
                  (i) => {
                    if (e.aborted) throw new Error("Aborted");
                    let a = (e.videoInfo && e.videoInfo.duration) || e.hit.duration;
                    if (a) {
                      let o = Math.round((100 * i) / a);
                      e.setProgress(o);
                    }
                  }
                )
                  .then(r)
                  .catch((i) => {
                    n(new $.DetailsError(E._("failed_aggregating", e.hit.title), i.details || i.message || ""));
                  });
              })
                .then(() => {
                  e.clearAbort(), delete e.watermark;
                })
                .catch((r) => {
                  throw (e.clearAbort(), r);
                })
            );
          }
          convert() {
            let e = this;
            return (
              e.setOperation("converter_queued"),
              e.setProgress(0),
              mg(
                () => e.doConvert(),
                (r, n) => {
                  e.setAbort(() => {
                    n(new $.VDHError("Aborted", { noReport: !0 }));
                  });
                }
              )
                .then(() => {
                  e.clearAbort();
                })
                .catch((r) => {
                  throw (e.clearAbort(), r);
                })
            );
          }
          doConvert() {
            let e = this;
            return (
              e.updateHit({ operation: "converting", opStartDate: Date.now() }),
              e.setAbort(() => {
                e.aborted = !0;
              }),
              new Promise((r, n) => {
                let i =
                  e.intermediateFilePath ||
                  (e.reqs.convert.audioonly && e.streams.audio && e.streams.audio.filePath) ||
                  (e.streams.full && e.streams.full.filePath) ||
                  (e.streams.video && e.streams.video.filePath) ||
                  (e.streams.audio && e.streams.video.filePath);
                if (!i) return n(new Error("Could not determine conversion source"));
                we.convert({ source: i, target: e.filePath, config: e.reqs.convert, wm: e.watermark }, (a) => {
                  if (e.aborted) throw new Error("Aborted");
                  let o = (e.videoInfo && e.videoInfo.duration) || e.hit.duration;
                  if (o) {
                    let s = Math.round((100 * a) / o);
                    e.setProgress(s);
                  }
                })
                  .then(r)
                  .catch((a) => {
                    n(new $.DetailsError(E._("failed_converting", e.hit.title), a.details || a.message || ""));
                  });
              })
                .then(() => {
                  e.clearAbort();
                })
                .catch((r) => {
                  throw (e.clearAbort(), r);
                })
            );
          }
          getStreams() {
            let e = this;
            this.hit.mediaManifest
              ? (this.streams.full = { url: this.hit.mediaManifest })
              : this.hit.url
              ? (this.streams.full = { url: this.hit.url })
              : this.hit.urls
              ? this.hit.urls.forEach((r, n) => {
                  e.streams["doc" + n] = { url: new URL(r, e.hit.baseUrl).href, index: n };
                })
              : (this.hit.audioUrl && (this.streams.audio = { url: this.hit.audioUrl, contentRedirect: 2 }),
                this.hit.videoUrl &&
                  !(this.reqs.convert && this.reqs.convert.audioonly) &&
                  (this.streams.video = { url: this.hit.videoUrl, contentRedirect: 2 })),
              Object.keys(this.streams).forEach((r) => {
                let n = e.streams[r];
                (n.type = r), (n.headers = e.hit.headers), (n.referrer = e.hit.referrer);
              });
          }
          getReqs() {
            return this.convertFollows ? this._getConvertReqs() : this._getReqs();
          }
          _getReqs() {
            let e = this;
            return pg && cn.matchHit(this.hit)
              ? (cn.forbidden(), Promise.reject(new $.VDHError("Forbidden", { noReport: !0 })))
              : Promise.resolve(super.getReqs())
                  .then(() => {
                    if (!e.reqs.convert)
                      return $2.outputConfigForHit(e.hit).then((r) => {
                        r && (e.hit.extension = r.ext || r.params.f || e.hit.extension), (e.reqs.convert = r);
                      });
                  })
                  .then(async () => {
                    let r = await E.prefs;
                    e.promptFilename && (e.reqs.needFilename = !0),
                      e.hit.convert && (e.reqs.convert = e.hit.convert),
                      e.hit.urls || (e.hit.audioUrl && e.hit.videoUrl) || e.reqs.convert || e.hit.chunked || r.coappDownloads == "coapp"
                        ? ((e.reqs.coappMin = "1.2.1"), (e.downloadWith = "coapp"), (e.reqs.promptFilename = e.reqs.needFilename))
                        : r.coappDownloads == "ask" && (e.reqs.askDownloadMode = !0),
                      e.hit.audioUrl && e.hit.videoUrl && !(e.reqs.convert && e.reqs.convert.audioonly) && (e.reqs.aggregate = !0),
                      e.hit.chunked
                        ? ((e.reqs.coapp = !0),
                          e.reqs.needFilename && (e.reqs.promptFilename = !0),
                          r.dashOnAdp == "audio-video" && (r.dashOnAdp = "audio_video"),
                          r.dashOnAdp != "audio_video" && delete e.reqs.aggregate,
                          e.hit.chunked == "hls" &&
                            (t.hlsDownloadingCount++,
                            (e.hlsDownloadingCounted = !0),
                            xt.hlsDownloadLimit && (e.reqs.checkHlsDownloadLimit = !0)))
                        : (e.hit.urls || (e.hit.audioUrl && e.hit.videoUrl)) && (e.reqs.coapp = !0),
                      e.reqs.convert && e.reqs.convert.audioonly && (e.reqs.license = !0),
                      (e.reqs.coappMin || e.reqs.aggregate || e.reqs.convert || e.reqs.license) && (e.reqs.coapp = !0),
                      e.hit.urls && (delete e.reqs.convert, delete e.reqs.aggregate),
                      (e.reqs.aggregate || e.reqs.convert || e.reqs.license || (e.hit.audioMediaManifest && e.hit.videoMediaManifest)) &&
                        (e.reqs.checkLicense = !0),
                      (e.reqs.aggregate || e.useSideDownload) && e.reqs.convert && (e.reqs.intermediateFilePath = !0),
                      e.reqs.coappMin && (e.reqs.coappMin = "2.0.9"),
                      e.reqs.coappMin && r.forcedCoappVersion && (e.reqs.coappMin = r.forcedCoappVersion);
                  });
          }
          async _getConvertReqs() {
            let e = this,
              r = await E.prefs;
            if (pg && cn.matchHit(this.hit)) throw (cn.forbidden(), E.ui.close("main"), new $.VDHError("Forbidden", { noReport: !0 }));
            let n,
              i = "dlconv#" + this.hit.id;
            if (E.openedContents().indexOf("main") >= 0)
              try {
                await E.rpc.call("main", "embed", Fi.runtime.getURL("content/dlconv-embed.html?panel=" + i)), (n = await E.wait(i));
              } catch {
                throw new $.VDHError("Aborted", { noReport: !0 });
              }
            else {
              let o = await we.getOutputConfigs(),
                s = r.dlconvLastOutput || "05cb6b27-9167-4d83-833d-218a107d0376",
                l = o[s];
              if (!l) throw new Error("No such output configuration");
              n = { outputConfigId: s, outputConfig: l };
            }
            r.dlconvLastOutput = n.outputConfigId;
            let a = n.outputConfig;
            return (
              e.hit.extension && (e.hit.originalExt = e.hit.extension),
              (e.hit.extension = a.ext || a.params.f || e.hit.extension),
              (e.reqs.convert = n.outputConfig),
              (e.promptFilename = n.prompt),
              e._getReqs()
            );
          }
          async solveReqs() {
            let e = this,
              r = await E.prefs;
            if (e.reqs.askDownloadMode)
              return new Promise((n, i) => {
                Ge.alert({
                  title: E._("download_method"),
                  text: [E._("download_modes1"), E._("download_modes2")],
                  height: 350,
                  buttons: [
                    { text: E._("download_with_browser"), className: "btn-primary", close: !0, trigger: { mode: "browser" } },
                    { text: E._("download_with_coapp"), className: "btn-success", close: !0, trigger: { mode: "coapp" } }
                  ],
                  notAgain: E._("download_method_not_again")
                })
                  .then((a) => {
                    (e.downloadWith = a.mode),
                      a.notAgain && (r.coappDownloads = a.mode),
                      a.mode == "coapp" &&
                        ((e.reqs.coappMin = "1.2.1"), (e.reqs.coapp = !0), e.reqs.needFilename && (e.reqs.promptFilename = !0)),
                      delete e.reqs.askDownloadMode,
                      n(!0);
                  })
                  .catch(() => {
                    i(new $.VDHError("Aborted", { noReport: !0 }));
                  });
              });
            if (e.reqs.coapp) return e.solveCoAppReqs();
            if (e.reqs.checkLicense)
              return new Promise((n, i) => {
                xt.checkLicense().then((a) => {
                  delete e.reqs.checkLicense,
                    (e.license = a),
                    e.reqs.license && a.status != "accepted" && a.status != "unneeded"
                      ? (delete e.reqs.license, xt.alertAudioNeedsReg(), i(new $.VDHError("Aborted", { noReport: !0 })))
                      : n(!0);
                });
              });
            if (e.reqs.checkHlsDownloadLimit) {
              let i = (r.lastHlsDownload || 0) + xt.hlsDownloadLimit * 60 * 1e3;
              if (t.hlsDownloadingCount > 1 || Date.now() < i)
                return new Promise((a, o) => {
                  xt.checkLicense().then((s) => {
                    delete e.reqs.checkHlsDownloadLimit,
                      (e.license = s),
                      s.status != "accepted" && s.status != "unneeded"
                        ? (delete e.reqs.license, xt.alertHlsDownloadLimit(), o(new $.VDHError("Aborted", { noReport: !0 })))
                        : a(!0);
                  });
                });
            }
            if (e.reqs.promptFilename) {
              let n = await e.getFilename({ noExtension: !!e.hit.urls });
              return new Promise((i, a) => {
                delete e.reqs.promptFilename,
                  delete e.reqs.needFilename,
                  Ge.saveAs(n, r.lastDownloadDirectory || "dwhelper", { dirOnly: !!e.hit.urls })
                    .then((o) => {
                      o
                        ? (r.rememberLastDir && (r.lastDownloadDirectory = o.directory),
                          (e.filePath = o.filePath),
                          (e.directory = o.directory),
                          (e.fileName = o.fileName),
                          i(!0))
                        : a(new $.VDHError("Aborted", { noReport: !0 }));
                    })
                    .catch(a);
              });
            } else if (!e.fileName && e.downloadWith == "coapp") {
              let n = await e.getFilename({ noExtension: !!e.hit.urls });
              return new Promise((i, a) => {
                delete e.reqs.needFilename,
                  ue
                    .call("makeUniqueFileName", r.lastDownloadDirectory || "dwhelper", n)
                    .then((o) => {
                      (e.filePath = o.filePath), (e.directory = o.directory), (e.fileName = o.fileName), i(!0);
                    })
                    .catch(a);
              });
            }
            if (e.reqs.intermediateFilePath)
              return new Promise((n, i) => {
                delete e.reqs.intermediateFilePath,
                  e
                    .getCoappTmpName({ postfix: "." + (e.hit.originalExt || e.hit.extension) })
                    .then((a) => {
                      (e.intermediateFilePath = a.filePath), e.cleanupData.files.push(a.filePath), n(!0);
                    })
                    .catch(i);
              });
          }
          async postJob() {
            let e = this,
              r = await E.prefs;
            return Promise.resolve(super.postJob())
              .then(() => {
                r.autoPin && e.updateHit({ status: "pinned", pinned: !0 });
              })
              .then(() => {
                e.filePath && e.updateHit({ localFilePath: e.filePath, localDirectory: e.directory || void 0 });
              })
              .then(() => {
                r.notifyReady &&
                  ((e.hit.isPrivate && r.noPrivateNotification) ||
                    Fi.notifications.create(e.hit.id, {
                      type: "basic",
                      title: E._("vdh_notification"),
                      message: E._("file_ready", e.filePath || e.hit.title || E._("media")),
                      iconUrl: Fi.runtime.getURL("content/images/icon-36.png")
                    }));
              })
              .then(() => {
                e.hlsDownloadingCounted && (r.lastHlsDownload = Date.now());
              });
          }
          async getFilename(e) {
            e = e || {};
            let r = this.hit.title || "video",
              n = null;
            return e.noExtension || (n = this.hit.extension || "mp4"), await Di.getFilenameFromTitle(r, n);
          }
          getTmpFileName() {
            return "vdh-" + Math.round(Math.random() * 1e9) + ".tmp";
          }
          abortDownload() {
            let e = this;
            Object.keys(e.streams).forEach((r) => {
              let n = e.streams[r];
              n.downloadId && dg.abort(n.downloadId);
            });
          }
          abortChunkedDownload() {
            this.abortChunked ? this.abortChunked() : console.warn("trying to abort chunked download but not abort function");
          }
          stopRecording() {
            let e = this;
            e.hit.chunked == "hls" && yg.stopRecording(e.hit.id);
          }
          async cleanup() {
            let e = this;
            e.hlsDownloadingCounted && t.hlsDownloadingCount--;
            let r = await E.prefs;
            return Promise.resolve(super.cleanup()).then(
              () => (
                e.clearProgress(),
                e.hasCoapp &&
                  !r.converterKeepTmpFiles &&
                  e.cleanupData.files.forEach((n) => {
                    ue.call("fs.unlink", n).catch(() => {});
                  }),
                Promise.resolve()
              )
            );
          }
          async explainQR() {
            let e = await E.prefs;
            e.qrMessageNotAgain ||
              E.ui.open("explainqr#" + encodeURIComponent(this.hit.id), { type: e.alertDialogType, url: "content/explain-qr.html" });
          }
          static get name() {
            return "download";
          }
          static get title() {
            return E._("action_download_title");
          }
          static get description() {
            return E._("action_download_description");
          }
          static get icon() {
            return "images/icon-action-download-64.png";
          }
          static get priority() {
            return 100;
          }
          static canPerform(e) {
            return e.running > 0 ? !1 : typeof e.url < "u" || typeof e.audioUrl < "u" || typeof e.videoUrl < "u" || typeof e.urls < "u";
          }
        });
      tt.hlsDownloadingCount = 0;
      (fn = class extends tt {
        constructor(e) {
          super(e), (this.promptFilename = !1);
        }
        static get name() {
          return "quickdownload";
        }
        static get title() {
          return E._("action_quickdownload_title");
        }
        static get description() {
          return E._("action_quickdownload_description");
        }
        static get icon() {
          return "images/icon-action-quick-download2-64.png";
        }
        static get priority() {
          return 90;
        }
        static canPerform(e) {
          return e.running > 0 ? !1 : typeof e.url < "u" || typeof e.audioUrl < "u" || typeof e.videoUrl < "u" || typeof e.urls < "u";
        }
      }),
        (Zs = class extends be {
          doJob() {
            let e = Bt[this.hit.id] || {};
            Object.keys(e).forEach((r) => {
              e[r](), delete e[r];
            }),
              Object.keys(e).length == 0 && delete Bt[this.hit.id];
          }
          static get name() {
            return "abort";
          }
          static get title() {
            return E._("action_abort_title");
          }
          static get description() {
            return E._("action_abort_description");
          }
          static get icon() {
            return "images/icon-action-abort-64.png";
          }
          static get priority() {
            return 300;
          }
          static get catPriority() {
            return 2;
          }
          static canPerform(e) {
            return !!Bt[e.id];
          }
        }),
        (Qs = class extends be {
          doJob() {
            let e = Ht[this.hit.id] || {};
            Object.keys(e).forEach((r) => {
              e[r](), delete e[r];
            }),
              Object.keys(e).length == 0 && delete Ht[this.hit.id];
          }
          static get name() {
            return "stop";
          }
          static get title() {
            return E._("action_stop_title");
          }
          static get description() {
            return E._("action_stop_description");
          }
          static get icon() {
            return "images/icon-action-stoprecord-64.png";
          }
          static get priority() {
            return 300;
          }
          static get catPriority() {
            return 2;
          }
          static canPerform(e) {
            return Ht[e.id] ? !!(e.chunked == "hls" && yg.canStop(e.id)) : !1;
          }
        }),
        (el = class extends tt {
          constructor(e) {
            super(e), (this.convertFollows = !0);
          }
          static get name() {
            return "downloadconvert";
          }
          static get title() {
            return E._("action_downloadconvert_title");
          }
          static get description() {
            return E._("action_downloadconvert_description");
          }
          static get icon() {
            return "images/icon-action-download-convert-64.png";
          }
          static get priority() {
            return 80;
          }
          static canPerform(e) {
            return e.running > 0 ? !1 : typeof e.url < "u" || typeof e.audioUrl < "u" || typeof e.videoUrl < "u";
          }
          static get keepOpen() {
            return !0;
          }
        }),
        (tl = class extends be {
          doJob() {
            return E.ui.open("details#" + encodeURIComponent(this.hit.id), { type: "tab", url: "content/details.html" }), Promise.resolve();
          }
          static get name() {
            return "details";
          }
          static get title() {
            return E._("action_details_title");
          }
          static get description() {
            return E._("action_details_description");
          }
          static get icon() {
            return "images/icon-action-details-64.png";
          }
          static get priority() {
            return 0;
          }
          static canPerform(e) {
            return !0;
          }
        }),
        (rl = class extends be {
          doJob() {
            return cl.call("main", "copyToClipboard", this.hit.url);
          }
          static get name() {
            return "copyurl";
          }
          static get title() {
            return E._("action_copyurl_title");
          }
          static get description() {
            return E._("action_copyurl_description");
          }
          static get icon() {
            return "images/icon-action-copy-link-64.png";
          }
          static get priority() {
            return 30;
          }
          static canPerform(e) {
            return typeof e.url < "u";
          }
        }),
        (nl = class extends be {
          doJob() {
            return H2.dispatch("hit.delete", this.hit.id), Promise.resolve();
          }
          static get name() {
            return "deletehit";
          }
          static get title() {
            return E._("action_deletehit_title");
          }
          static get description() {
            return E._("action_deletehit_description");
          }
          static get icon() {
            return "images/icon-action-delete-64.png";
          }
          static get priority() {
            return 0;
          }
          static canPerform(e) {
            return !0;
          }
        }),
        (il = class extends be {
          doJob() {
            return this.updateHit({ pinned: !0 }), Promise.resolve();
          }
          static get name() {
            return "pin";
          }
          static get title() {
            return E._("action_pin_title");
          }
          static get description() {
            return E._("action_pin_description");
          }
          static get icon() {
            return "images/icon-action-pin-64.png";
          }
          static get priority() {
            return 0;
          }
          static canPerform(e) {
            return !e.pinned;
          }
        }),
        (al = class extends be {
          doJob() {
            return we.play(this.hit.localFilePath).catch((e) => {
              throw new $.DetailsError(E._("failed_playing_file"), e.message);
            });
          }
          async getReqs() {
            this.reqs.coapp = !0;
          }
          static get name() {
            return "cvplay";
          }
          static get title() {
            return E._("action_avplay_title");
          }
          static get description() {
            return E._("action_avplay_description");
          }
          static get icon() {
            return "images/icon-action-avplay-64.png";
          }
          static get priority() {
            return 180;
          }
          static get catPriority() {
            return 1;
          }
          static canPerform(e) {
            return ue.isDegradedVersion() ? !1 : !e.urls && e.running === 0 && E.unsafe_prefs.avplayEnabled && !!e.localFilePath;
          }
        }),
        (ol = class extends be {
          doJob() {
            return (
              cl.call(
                "main",
                "embed",
                Fi.runtime.getURL("content/blacklist-embed.html?panel=blacklist#" + encodeURIComponent(this.hit.id))
              ),
              Promise.resolve()
            );
          }
          static get keepOpen() {
            return !0;
          }
          static get name() {
            return "blacklist";
          }
          static get title() {
            return E._("action_blacklist_title");
          }
          static get description() {
            return E._("action_blacklist_description");
          }
          static get icon() {
            return "images/icon-action-blacklist-64.png";
          }
          static get priority() {
            return 20;
          }
          static canPerform(e) {
            return (
              typeof e.url < "u" || typeof e.audioUrl < "u" || typeof e.videoUrl < "u" || typeof e.topUrl < "u" || typeof e.pageUrl < "u"
            );
          }
        }),
        (Ni = class extends be {
          doJob() {
            return we.open(this.hit.localFilePath).catch((e) => {
              throw new $.DetailsError(E._("failed_playing_file"), e.message);
            });
          }
          async getReqs() {
            (this.reqs.coapp = !0), (this.reqs.coappMin = "1.2.4");
          }
          solveReqs() {
            let e = this;
            if (e.reqs.coapp) return e.solveCoAppReqs();
          }
          static get name() {
            return "openlocalfile";
          }
          static get title() {
            return E._("action_openlocalfile_title");
          }
          static get description() {
            return E._("action_openlocalfile_description");
          }
          static get icon() {
            return "images/icon-action-play-64.png";
          }
          static get priority() {
            return 200;
          }
          static get catPriority() {
            return 1;
          }
          static canPerform(e) {
            return ue.isDegradedVersion() ? !1 : !e.urls && e.running == 0 && !!e.localFilePath;
          }
        }),
        (sl = class extends Ni {
          doJob() {
            return we.open((this.hit.urls && this.hit.localFilePath) || this.hit.localDirectory).catch((e) => {
              throw new $.DetailsError(E._("failed_opening_directory"), e.message);
            });
          }
          async getReqs() {
            this.reqs.coapp = !0;
          }
          static get name() {
            return "openlocalcontainer";
          }
          static get title() {
            return E._("action_openlocalcontainer_title");
          }
          static get description() {
            return E._("action_openlocalcontainer_description");
          }
          static get icon() {
            return "images/icon-action-open-dir-64.png";
          }
          static get priority() {
            return 180;
          }
          static get catPriority() {
            return 1;
          }
          static canPerform(e) {
            return ue.isDegradedVersion() ? !1 : !!e.localDirectory || (e.urls && e.localFilePath);
          }
        }),
        (ji = class extends tt {
          constructor(e) {
            super(e), (this.useSideDownload = !0);
          }
          static get name() {
            return "sidedownload";
          }
          static get title() {
            return E._("action_sidedownload_title");
          }
          static get description() {
            return E._("action_sidedownload_description");
          }
          static get icon() {
            return "images/icon-action-side-download-64.png";
          }
          static get priority() {
            return 69;
          }
          static get catPriority() {
            return 0;
          }
          static canPerform(e) {
            return !e.running && (!!e.mediaManifest || (e.audioMediaManifest && e.videoMediaManifest));
          }
        }),
        (ll = class extends ji {
          constructor(e) {
            super(e), (this.promptFilename = !1);
          }
          static get name() {
            return "quicksidedownload";
          }
          static get title() {
            return E._("action_quicksidedownload_title");
          }
          static get description() {
            return E._("action_quicksidedownload_description");
          }
          static get icon() {
            return "images/icon-action-quick-side-download-64.png";
          }
          static get priority() {
            return 70;
          }
          static canPerform(e) {
            return !e.running && (!!e.mediaManifest || (e.audioMediaManifest && e.videoMediaManifest));
          }
        }),
        (ul = class extends tt {
          constructor(e) {
            super(e), (this.convertFollows = !0), (this.useSideDownload = !0);
          }
          static get name() {
            return "sidedownloadconvert";
          }
          static get title() {
            return E._("action_sidedownloadconvert_title");
          }
          static get description() {
            return E._("action_sidedownloadconvert_description");
          }
          static get icon() {
            return "images/icon-action-side-download-convert-64.png";
          }
          static get priority() {
            return 68;
          }
          static canPerform(e) {
            return !e.running && (!!e.mediaManifest || (e.audioMediaManifest && e.videoMediaManifest));
          }
          static get keepOpen() {
            return !0;
          }
        }),
        (pr = {});
      dn = class extends fn {
        constructor(e, r) {
          super(e), (this.details = r), Lt.create(Object.assign(e, { title: r.inFileName }));
        }
        getReqs() {
          let e = this;
          return (
            (e.reqs.convert = e.details.outputConfig),
            (e.reqs.coappMin = "1.2.3"),
            (e.downloadWith = "coapp"),
            (e.reqs.coapp = !0),
            (e.reqs.checkLicense = !0),
            Promise.resolve()
          );
        }
        getStreams() {
          this.streams.full = { type: "full" };
        }
        solveStreamName(e) {
          let r = this;
          return Promise.resolve()
            .then(() => {
              if (r.details.outFileName)
                return ue.call("path.homeJoin", r.details.outDirectory, r.details.outFileName).then((n) => {
                  (r.filePath = n), (r.directory = r.details.outDirectory), (r.fileName = r.details.outFileName);
                });
              {
                let n = r.details.inFileName,
                  i = /^(.*)\.([^\.]{1,5})$/.exec(n);
                return (
                  i ? (n = i[1] + "." + r.details.extension) : (n = n + ".mp4"),
                  ue.call("makeUniqueFileName", r.details.outDirectory, n).then((a) => {
                    (r.filePath = a.filePath), (r.directory = a.directory), (r.fileName = a.fileName);
                  })
                );
              }
            })
            .then(() =>
              ue.call("path.homeJoin", r.details.inDirectory, r.details.inFileName).then((n) => {
                e.filePath = n;
              })
            );
        }
        downloadAllStreams() {
          return Promise.resolve();
        }
      };
      dn.idIndex = 0;
      pn = class t extends fn {
        constructor(e, r) {
          super(e), (this.details = r), Lt.create(e);
        }
        getReqs() {
          let e = this;
          (e.reqs.coappMin = "1.5.0"), e.downloadWith == "coapp", (e.reqs.coapp = !0), (e.reqs.checkLicense = !0), (e.reqs.aggregate = !0);
        }
        getStreams() {
          (this.streams.audio = { type: "audio" }), (this.streams.video = { type: "video" });
        }
        solveStreamName(e) {
          (e.fileName = this.details[e.type + "FileName"]),
            (e.directory = this.details[e.type + "Directory"]),
            (e.filePath = this.details[e.type + "FilePath"]);
        }
        downloadAllStreams() {
          return Promise.resolve();
        }
        solveAllReqs() {
          let e = this;
          return Promise.resolve(super.solveReqs()).then((r) =>
            r
              ? super.solveAllReqs()
              : e.mergePrepare().then(() => ((e.reqs.promptFilename = !0), (e.reqs.needFilename = !0), Promise.resolve(super.solveReqs())))
          );
        }
        mergePrepare() {
          let e = this,
            r,
            n,
            i,
            a,
            o,
            s,
            l,
            u,
            f,
            c = "mkv",
            d,
            v;
          return Ge.selectMergeVideoFile(E.unsafe_prefs.lastDownloadDirectory || "dwhelper")
            .then((x) => {
              if (!x) throw new $.VDHError("No video file selected", { noReport: !0 });
              return (r = x.fileName), (n = x.directory), (i = x.filePath), we.info(i, !0);
            })
            .then((x) => {
              let A = x.streams.find((g) => g.codec_type == "video");
              if (!A) throw new $.VDHError(E._("no_video_in_file", [r]));
              return (d = A.codec_name), Ge.selectMergeAudioFile(n);
            })
            .then((x) => {
              if (!x) throw new $.VDHError("No audio file selected", { noReport: !0 });
              return (a = x.fileName), (o = x.directory), (s = x.filePath), we.info(s, !0);
            })
            .then((x) => {
              let A = { mpeg4: 1, h264: 1, aac: 1, mp3: 1 },
                g = x.streams.find((m) => m.codec_type == "audio");
              if (!g) throw new $.VDHError(E._("no_audio_in_file", [a]));
              (v = g.codec_name), A[d] && A[v] && (c = "mp4");
              let p = "local-merge:" + ++t.idIndex,
                w = r,
                k = /^(.*)\.([^\.]{1,5})$/.exec(r);
              k && (w = k[1]),
                (e.details = {
                  videoFileName: r,
                  videoDirectory: n,
                  videoFilePath: i,
                  audioFileName: a,
                  audioDirectory: o,
                  audioFilePath: s,
                  outFileName: l,
                  outDirectory: u,
                  outFilePath: f,
                  outExtension: c,
                  outputConfig: { format: "mkv" }
                }),
                (e.hit.title = w),
                (e.hit.extension = c);
            })
            .catch((x) => {
              throw (
                (console.warn("Error merging local", x),
                x.noReport || Ge.alert({ title: E._("merge_error"), text: x.message }),
                new $.VDHError("Aborted", { noReport: !0 }))
              );
            });
        }
      };
      pn.idIndex = 0;
      ce(tt);
      ce(fn);
      ce(Zs);
      ce(Qs);
      ce(el);
      ce(tl);
      ce(rl);
      ce(nl);
      ce(il);
      ce(al);
      ce(ol);
      ce(Ni);
      ce(sl);
      ce(ji);
      ce(ll);
      ce(ul);
      cl.listen({ convertLocal: bg, mergeLocal: wg });
    });
  var pl = {};
  H(pl, { checkHitBlacklisted: () => _g, set: () => Ig });
  async function dl() {
    try {
      await xg.storage.local.set({ blacklist: await gn });
    } catch {
      console.error("Cannot write blacklist storage");
    }
  }
  function hn(t) {
    let e = [],
      r = /^https?:\/\/([^\/:]+)/.exec(t);
    if (r)
      if (Q2.test(r[1])) e.push(r[1]);
      else {
        let n = r[1].split(".");
        for (; n.length > 1 && (n[0] != "co" || n.length > 2); ) e.push(n.join(".")), n.shift();
      }
    return e;
  }
  function Sg(t) {
    let e = [];
    t.url && (e = e.concat(hn(t.url))),
      t.audioUrl && (e = e.concat(hn(t.audioUrl))),
      t.videoUrl && (e = e.concat(hn(t.videoUrl))),
      t.topUrl && (e = e.concat(hn(t.topUrl))),
      t.pageUrl && (e = e.concat(hn(t.pageUrl)));
    let r = {};
    return (
      e.forEach(function (n) {
        r[n] = 1;
      }),
      r
    );
  }
  function e3(t) {
    let e = Object.keys(t);
    return (
      e.sort(function (r, n) {
        let i = r.split(".").reverse(),
          a = n.split(".").reverse();
        for (;;) {
          if (i.length && !a.length) return -1;
          if (!i.length && a.length) return 1;
          if (!i.length && !a.length) return 0;
          let o = i.shift(),
            s = a.shift();
          if (o != s) return o < s ? -1 : 1;
        }
      }),
      e
    );
  }
  function t3(t) {
    let e = Sg(t);
    return e3(e);
  }
  function _g(t) {
    if (!Wi.unsafe_prefs.blacklistEnabled) return !1;
    let e = Sg(t);
    for (let r in e) if (Ag[r]) return !0;
    return !1;
  }
  async function r3(t) {
    let e = await gn;
    t.forEach((i) => {
      (e[i] = !0), Z2.blacklistAdded(i);
    });
    let r = [],
      n = fl.getHits();
    Object.keys(n).forEach((i) => {
      let a = n[i];
      _g(a) && r.push(i);
    }),
      r.length > 0 && fl.dispatch("hit.delete", r),
      await dl();
  }
  async function n3(t) {
    let e = await gn;
    t.forEach((r) => {
      delete e[r];
    }),
      await dl();
  }
  async function Ig(t) {
    (gn = Promise.resolve(t || {})), await dl();
  }
  var Wi,
    xg,
    fl,
    Z2,
    Q2,
    Ag,
    gn,
    hl = B(() => {
      (Wi = z()),
        (xg = Wi.browser),
        (fl = (ge(), S(he))),
        (Z2 = (Js(), S(Ys))),
        (Q2 = new RegExp("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")),
        (gn = (async () => {
          try {
            let e = (await xg.storage.local.get({ blacklist: {} })).blacklist;
            return (Ag = e), e;
          } catch {
            console.error("Cannot read blacklist storage");
            return;
          }
        })());
      Wi.rpc.listen({
        domainsFromHitId: (t) => {
          let e = fl.getHit(t);
          return (e && t3(e)) || [];
        },
        addToBlacklist: r3,
        removeFromBlacklist: n3,
        setBlacklist: async (t) => {
          await Ig(t);
        },
        getBlacklist: async () => {
          let t = await gn;
          return Object.keys(t).filter((e) => !!t[e]);
        },
        editBlacklist: () => {
          Wi.ui.open("blacklist-edit", { type: "tab", url: "content/blacklist-edit.html" });
        }
      });
    });
  var yt = {};
  H(yt, {
    create: () => l3,
    deleteProps: () => c3,
    progressReducer: () => s3,
    reducer: () => h3,
    setHitOperation: () => p3,
    statusFromUrl: () => Og,
    update: () => Pg,
    updateOriginal: () => f3,
    updateProgress: () => d3,
    updateRunning: () => u3
  });
  function s3(t = {}, e) {
    let r;
    switch (e.type) {
      case "hit.progress":
        (r = t[e.payload.id]), r !== e.payload.progress && (t = Object.assign({}, t, { [e.payload.id]: e.payload.progress }));
        break;
      case "hit.clear-progress":
        (r = t[e.payload]), typeof r < "u" && ((t = Object.assign({}, t)), delete t[e.payload]);
        break;
    }
    return t;
  }
  function Og(t) {
    let e = t.status,
      { url: r, urls: n } = a3.current();
    return (
      t.status == "active" && t.topUrl != r
        ? t.topUrl in n
          ? (e = "inactive")
          : (e = "orphan")
        : t.status == "inactive" && !(t.topUrl in n)
        ? (e = "orphan")
        : (t.status == "inactive" || t.status == "orphan") && t.topUrl == r && (e = "active"),
      e == "orphan" && t.pinned && (e = "pinned"),
      e
    );
  }
  function l3(t) {
    Ee.dispatch("hit.new", t);
  }
  function Pg(t, e = {}) {
    Ee.dispatch("hit.update", { id: t, changes: e });
  }
  function u3(t, e) {
    Ee.dispatch("hit.updateRunning", { id: t, runningDelta: e });
  }
  function c3(t, e) {
    Ee.dispatch("hit.deleteProps", { id: t, propsToBeDeleted: e });
  }
  function f3(t, e = {}) {
    Ee.dispatch("hit.updateOriginal", { id: t, changes: e });
  }
  function d3(t, e) {
    e === null ? Ee.dispatch("hit.clear-progress", t) : Ee.dispatch("hit.progress", { id: t, progress: e });
  }
  function p3(t, e) {
    let r = Ee.getHit(t);
    r && r.operation !== e && Pg(t, { operation: e });
  }
  function h3(t = {}, e) {
    function r(i, a = {}) {
      let o = i;
      !i.referrer && a.pageUrl && (a = Object.assign({}, a, { referrer: a.pageUrl })),
        Object.keys(a).every((u) => qg.equals(i[u], a[u])) || (i = Object.assign({}, i, a));
      let s = Og(i);
      if (i.status != "running" && s != i.status) {
        let u = i.status;
        if ((i === o ? (i = Object.assign({}, i, { status: s })) : (i.status = s), s == "orphan" && u != "orphan")) {
          let f = Date.now(),
            c = kg.unsafe_prefs.orphanExpiration * 1e3;
          (i.orphanT0 = f),
            (i.orphanT = f + c),
            setTimeout(() => {
              Ee.dispatch("hit.orphanTimeout", i.id);
            }, c + 100);
        }
      }
      let l = Eg.availableActions(i);
      return qg.equals(l, i.actions) || (i === o ? (i = Object.assign({}, i, { actions: l })) : (i.actions = l)), i;
    }
    function n(i, a) {
      Array.isArray(i) || (i = [i]),
        i.forEach((o) => {
          let s = t[o];
          if (s) {
            let l = t,
              u = r(s, a);
            t === l && (t = Object.assign({}, t, { [o]: u }));
          }
        });
    }
    switch (e.type) {
      case "hit.new":
        {
          let i = Object.assign({ created: new Date().getTime() }, e.payload),
            a = o3.checkHitBlacklisted(i),
            o = typeof e.payload.length == "number" && i.length < kg.unsafe_prefs.mediaweightMinSize;
          if (!a && !o) {
            let s = i.id,
              l = t[s],
              u = r(l || { status: "active" }, i);
            u !== l && (t = Object.assign({}, t, { [s]: u }));
          }
        }
        break;
      case "hits.urlUpdated":
        {
          let i = t;
          Object.keys(t).forEach((a) => {
            let o = t[a],
              s = r(o);
            s !== o && (i === t && (t = Object.assign({}, t)), (t[a] = s));
          });
        }
        break;
      case "hit.update":
        {
          let { id: i, changes: a } = e.payload;
          n(i, a);
        }
        break;
      case "hit.updateRunning":
        {
          let { id: i, runningDelta: a } = e.payload,
            o = t[i];
          if (o) {
            let s = o.running || 0,
              l = { running: (s || 0) + a };
            s == 0 && (l.status = "running"), l.running === 0 && (l.status = "active"), (t = Object.assign({}, t)), (t[i] = r(o, l));
          }
        }
        break;
      case "hit.deleteProps":
        {
          let { id: i, propsToBeDeleted: a } = e.payload;
          Array.isArray(i) || (i = [i]), Array.isArray(a) || (a = [a]);
          let o = t;
          i.forEach((s) => {
            let l = t[s];
            if (l) {
              let u = l;
              a.forEach((f) => {
                typeof u[f] < "u" &&
                  (u === l && ((u = Object.assign({}, l)), t === o && (t = Object.assign({}, t)), (t[u.id] = u)), delete u[f]);
              });
            }
          });
        }
        break;
      case "hit.updateOriginal":
        {
          let { id: i, changes: a } = e.payload,
            o = [];
          Object.keys(t).forEach((s) => {
            let l = t[s];
            (s === i || i === l.originalId) && o.push(s);
          }),
            n(o, a);
        }
        break;
      case "hit.delete":
        {
          let i = t,
            a = e.payload;
          Array.isArray(a) || (a = [a]),
            a.forEach((o) => {
              t[o] && (t === i && (t = Object.assign({}, t)), delete t[o]);
            });
        }
        break;
      case "hit.orphanTimeout":
        {
          let i = e.payload,
            a = t[i];
          a && a.status == "orphan" && !isNaN(a.orphanT) && Date.now() > a.orphanT && ((t = Object.assign({}, t)), delete t[i]);
        }
        break;
    }
    return t;
  }
  var kg,
    i3,
    Eg,
    qg,
    Ee,
    a3,
    o3,
    vt = B(() => {
      (kg = z()), (i3 = Xe()), (Eg = (sn(), S(on))), (qg = (oe(), S(ae))), (Ee = (ge(), S(he))), (a3 = (ht(), S(pt))), (o3 = (hl(), S(pl)));
      i3.listen({
        actionCommand: (t, e) => {
          let r = Ee.getHit(e);
          return Eg.execute(t, r);
        },
        clearHits: (t) => {
          let e = [],
            r = Ee.getHits();
          for (let n in r) {
            let i = r[n];
            ((t == "all" && i.status != "running" && i.status != "pinned") ||
              (t == "pinned" && i.status == "pinned") ||
              (t == "inactive" && i.status == "inactive") ||
              (t == "orphans" && i.status == "orphan")) &&
              e.push(n);
          }
          Ee.dispatch("hit.delete", e);
        }
      });
    });
  var gl = {};
  H(gl, { getProxyHeaders: () => C3 });
  async function Dg() {
    let t = await Ke.prefs,
      e = {};
    return (
      t.mediaExtensions.split("|").forEach(function (r) {
        e[r] = 1;
      }),
      e
    );
  }
  async function Fg() {
    let t = (await Ke.prefs).networkFilterOut;
    if (t)
      try {
        return new RegExp(t, "i");
      } catch {
        console.warn("networkFilterOut preference is not a valid regex");
        return;
      }
  }
  function Cg() {
    nt.webRequest.onHeadersReceived.addListener(Wg, { urls: ["<all_urls>"] }, ["responseHeaders"]);
  }
  function P3() {
    nt.webRequest.onHeadersReceived.removeListener(Wg);
  }
  function Rg() {
    (rt = {}),
      nt.webRequest.onSendHeaders.addListener(Ug, { urls: ["<all_urls>"] }, Bg),
      nt.webRequest.onErrorOccurred.addListener(Lg, { urls: ["<all_urls>"] });
  }
  function T3() {
    nt.webRequest.onSendHeaders.removeListener(Ug), nt.webRequest.onErrorOccurred.removeListener(Lg), (rt = null);
  }
  function Hg(t) {
    let e = hr[t.url];
    if (e) {
      clearTimeout(e.timer), delete hr[t.url];
      let r = t.requestHeaders.filter((n) => typeof Mg[n.name.toLowerCase()] > "u");
      e.handlers.forEach((n) => {
        n.resolve({ proxy: t.proxyInfo, headers: r });
      });
    }
  }
  function C3(t) {
    function e() {
      let n = hr[t];
      n &&
        (n.handlers.forEach((i) => {
          i.reject(new Error("timeout monitoring proxyHeaders"));
        }),
        delete hr[t]);
    }
    let r = hr[t];
    return (
      r ? clearTimeout(r.timer) : (r = hr[t] = { handlers: [] }),
      new Promise((n, i) => {
        r.handlers.push({ resolve: n, reject: i }), (r.timer = setTimeout(e, 3e4)), fetch(t, { method: "HEAD", credentials: "include" });
      })
    );
  }
  var Ke,
    g3,
    m3,
    Tg,
    y3,
    v3,
    nt,
    w3,
    b3,
    x3,
    A3,
    S3,
    _3,
    I3,
    k3,
    q3,
    E3,
    Mg,
    Ng,
    jg,
    Wg,
    O3,
    rt,
    Ug,
    Lg,
    Bg,
    hr,
    ml = B(() => {
      (Ke = z()),
        (g3 = (ge(), S(he))),
        (m3 = (vt(), S(yt))),
        (Tg = (oe(), S(ae))),
        (y3 = (fr(), S(cr))),
        (v3 = (Ti(), S(Pi))),
        (nt = Ke.browser),
        (w3 = new RegExp("^bytes [0-9]+-[0-9]+/([0-9]+)$")),
        (b3 = new RegExp("^(audio|video)/(?:x-)?([^; ]+)")),
        (x3 = new RegExp('filename\\s*=\\s*"\\s*([^"]+?)\\s*"')),
        (A3 = new RegExp("/([^/]+?)(?:\\.([a-z0-9]{1,5}))?(?:\\?|#|$)", "i")),
        (S3 = new RegExp("\\.([a-z0-9]{1,5})(?:\\?|#|$)", "i")),
        (_3 = new RegExp("\\bsource=yt_otf\\b")),
        (I3 = new RegExp("/ptracking\\b")),
        (k3 = new RegExp("^https://www.gstatic.com/youtube/doodle\\b")),
        (q3 = new RegExp("^(https?)://v[^\\/]*\\.tumblr\\.com/(tumblr_[0-9a-zA-Z_]+)\\.(?:mp4|mov)")),
        (E3 = new RegExp("^https://soundcloud.com/")),
        (Mg = { host: !0, range: !0, "content-length": !0 });
      Ng = Dg();
      Ke.prefs.then((t) =>
        t.on("mediaExtensions", () => {
          Ng = Dg();
        })
      );
      jg = Fg();
      Ke.prefs.then((t) =>
        t.on("networkFilterOut", () => {
          jg = Fg();
        })
      );
      (Wg = async (t) => {
        let e = await Ke.prefs,
          r;
        if ((rt && ((r = rt[t.requestId]), r && delete rt[t.requestId]), t.tabId < 0)) return;
        let n = await jg;
        if (_3.test(t.url) || I3.test(t.url) || k3.test(t.url) || (n && n.test(t.url))) return;
        function i(x, A) {
          if (
            !A &&
            ((!s && isNaN(l) && !u) ||
              (!s && !u && (isNaN(l) || e.mediaweightThreshold === 0 || l < e.mediaweightThreshold)) ||
              (s && s[2].toLowerCase() == "ms-asf"))
          )
            return;
          let g = {
            id: "network-probe:" + Tg.hashHex(t.url),
            status: "active",
            url: t.url,
            tabId: t.tabId,
            frameId: t.frameId,
            fromCache: !0,
            referrer: d
          };
          isNaN(l) || (g.length = l), t.proxyInfo && t.proxyInfo.type.substr(0, 4) == "http" && (g.proxy = t.proxyInfo);
          let p = a["content-disposition"];
          if (p) {
            let m = x3.exec(p);
            m && m[1] && (g.headerFilename = m[1]);
          }
          let w = A3.exec(t.url);
          w && (g.urlFilename = w[1]), (g.title = g.headerFilename || g.urlFilename || Ke._("media"));
          let k = q3.exec(t.url);
          k && (g.thumbnailUrl = k[1] + "://media.tumblr.com/" + k[2] + "_frame1.jpg"),
            u ? ((g.type = "video"), (g.extension = u[1])) : s ? ((g.type = s[1]), (g.extension = s[2])) : (g.extension = f),
            (g.headers = (r && r.filter((m) => typeof Mg[m.name.toLowerCase()] > "u")) || []),
            nt.tabs.get(t.tabId).then(async (m) => {
              if (m) {
                (g.topUrl = m.url), (g.isPrivate = m.incognito), (g.title = g.headerFilename || m.title || g.urlFilename || Ke._("media"));
                let _ = await y3.getSpecs(m.url);
                _ && ((_.headerFilename = g.headerFilename), (_.urlFilename = g.urlFilename)),
                  Tg.executeScriptWithGlobal({ tabId: m.id }, { _$vdhHitId: g.id, _$vdhSmartNameSpecs: _ }, "/injected/pagedata.js").catch(
                    (P) => {
                      nt.webNavigation.getFrame({ tabId: m.id, frameId: g.frameId }).then((T) => {
                        T &&
                          (console.warn("pagedata execution error", P.message),
                          m3.updateOriginal(g.id, { title: m.title || g.title, pageUrl: T.url, topUrl: m.url }));
                      });
                    }
                  );
              }
              x ? ((g.originalId = g.id), x.handleHit(g)) : g3.dispatch("hit.new", g);
            });
        }
        let a = {};
        (t.responseHeaders || []).forEach((x) => {
          a[x.name.toLowerCase()] = x.value;
        });
        let o = a["content-type"],
          s = b3.exec(o),
          l = parseInt(a["content-length"]);
        if (isNaN(l)) {
          let x = a["content-range"];
          if (x) {
            let A = w3.exec(x);
            A && (l = parseInt(A[1]));
          }
        }
        let u = S3.exec(t.url),
          f = null,
          c = await Ng;
        if (u) {
          if (((f = u[1].toLowerCase()), (f == "m4s" && e.dashHideM4s) || (f == "ts" && e.mpegtsHideTs))) return;
          c[u[1]] || (u = null);
        }
        let d = t.originUrl || t.documentUrl || void 0;
        if (E3.test(d) && l < 1e6 && o == "audio/mpeg") return;
        let v = await v3.networkHook(t, { contentType: o, referrer: d, headers: r, proxy: t.proxyInfo });
        if (v)
          try {
            i(v, !0);
          } catch (x) {
            console.error("Uncaught PostHook error:", x);
          }
        else {
          let x = s && (s[1] == "audio" || s[1] == "video"),
            A = !isNaN(l) && e.mediaweightThreshold > 0 && l >= e.mediaweightThreshold;
          i(null, x || A);
        }
      }),
        (O3 = ["main_frame", "sub_frame", "xmlhttprequest", "object", "media"]);
      Ke.browserType == "firefox" && O3.push("object_subrequest");
      Ke.prefs.then((t) => {
        t.networkProbe && Cg(),
          t.monitorNetworkRequests && Rg(),
          t.on("networkProbe", (e, r) => {
            r ? Cg() : P3();
          }),
          t.on("monitorNetworkRequests", (e, r) => {
            r ? Rg() : T3();
          });
      });
      (rt = null),
        (Ug = (t) => {
          Hg(t), rt && (rt[t.requestId] = t.requestHeaders);
        }),
        (Lg = (t) => {
          Hg(t), rt && delete rt[t.requestId];
        }),
        (Bg = ["requestHeaders"]);
      nt.runtime.getManifest().manifest_version >= 3 && Bg.push("extraHeaders");
      hr = {};
    });
  var wl = {};
  H(wl, { analyzePage: () => vl });
  async function yl() {
    let t = await mn.tabs.query({ active: !0, currentWindow: !0 });
    if (t.length === 0) throw new Error("Can't find current tab");
    return { tabId: t[0].id };
  }
  async function vl(t) {
    let e;
    t ? (e = { tabId: t }) : (e = await yl()), await mn.scripting.insertCSS({ target: e, css: M3 });
    let r = await At.prefs;
    await $g.executeScriptWithGlobal(
      e,
      {
        _$vdhParams: {
          extensions: r.medialinkExtensions,
          maxHits: r.medialinkMaxHits,
          minFilesPerGroup: r.medialinkMinFilesPerGroup,
          minImgSize: r.medialinkMinImgSize,
          scanImages: r.medialinkScanImages,
          scanLinks: r.medialinkScanLinks
        }
      },
      "/injected/gallery.js"
    );
  }
  function Vg(t) {
    return ".vdh-mask." + t + " { display: block; }";
  }
  var At,
    mn,
    zg,
    $g,
    R3,
    M3,
    bl = B(() => {
      (At = z()),
        (mn = At.browser),
        (zg = (ge(), S(he))),
        ($g = (oe(), S(ae))),
        (R3 = (ml(), S(gl))),
        (M3 = ".vdh-mask { position: absolute; display: none; background-color: rgba(255,0,0,0.5); z-index: 2147483647; }");
      At.rpc.listen({
        analyzePage: () => {
          vl();
        },
        galleryGroups: (t) => {
          Object.keys(t.groups).forEach((e) => {
            let r = t.groups[e],
              n = "??",
              i = "??";
            try {
              i = new URL(r.baseUrl).hostname;
            } catch (s) {
              console.warn("Uncaught URL error", s);
            }
            switch (r.type) {
              case "image":
                n = At._("gallery_from_domain", i);
                break;
              case "link":
                n = At._("gallery_links_from_domain", i);
                break;
            }
            let a;
            if (r.extensions) {
              let s = Object.keys(r.extensions);
              s.sort((u, f) => r.extensions[u] - r.extensions[f]);
              let l = [];
              s.forEach((u) => {
                let f = At._("number_type", ["" + r.extensions[u], u.toUpperCase()]);
                l.push(f);
              }),
                (a = At._("gallery_files_types", (l.length > 0 && l.join(", ")) || "" + r.urls.length));
            }
            let o = "gallery:" + $g.hashHex(t.pageUrl) + ":" + e;
            zg.dispatch("hit.new", Object.assign({}, r, { id: o, topUrl: t.pageUrl, title: n, description: a, mouseTrack: !0 })),
              R3.getProxyHeaders(t.pageUrl).then((s) => {
                zg.dispatch("hit.update", { id: o, changes: s });
              });
          });
        },
        galleryHighlight: async (t) => {
          mn.scripting.insertCSS({ target: await yl(), css: Vg(t) });
        },
        galleryUnhighlight: async (t) => {
          mn.scripting.removeCSS({ target: await yl(), css: Vg(t) });
        }
      });
      mn.tabs.onUpdated.addListener(async (t, e, r) => {
        let n = await At.prefs;
        e.status === "complete" && n.medialinkAutoDetect && vl(t);
      });
    });
  var Jg = {};
  H(Jg, { ExecuteDefault: () => Yg, updateHits: () => zi });
  function L3(t, e) {
    if (t.bitrate && e.bitrate && t.bitrate != e.bitrate) return e.bitrate - t.bitrate;
    let r = Gg.exec(t.size);
    if (r) {
      let n = Gg.exec(e.size);
      if (n && (r[1] != n[1] || r[2] != n[2])) return parseInt(n[1]) * parseInt(n[2]) - parseInt(r[1]) * parseInt(r[2]);
    }
    return 0;
  }
  function B3(t) {
    let e = Math.floor(t / 3600),
      r = Math.floor((t % 3600) / 60),
      n = t % 60;
    return e > 0 ? e + ":" + ("00" + r).substr(-2) + ":" + ("00" + n).substr(-2) : r + ":" + ("00" + n).substr(-2);
  }
  function H3(t) {
    return t.length
      ? t.length > 1024 * 1024
        ? J._("MB", [Math.round((t.length * 10) / (1024 * 1024)) / 10])
        : t.length > 1024
        ? J._("KB", [Math.round((t.length * 10) / 1024) / 10])
        : J._("Bytes", [t.length])
      : null;
  }
  function z3(t) {
    if (t.description) return t.description;
    let e = [];
    if (
      (t.descrPrefix && e.push(t.descrPrefix),
      t.adp && e.push("ADP"),
      t.size && e.push(t.size),
      t.duration && e.push(B3(t.duration)),
      t.quality)
    ) {
      let n = J._("quality_" + t.quality);
      n == "" && (n = t.quality.toUpperCase()), e.push(n);
    }
    if (t.bitrate) {
      let n = t.bitrate,
        i = "bps";
      t.bitrate > 1e7
        ? ((i = "Mbps"), (n = Math.round(t.bitrate / 1e6)))
        : t.bitrate > 1e6
        ? ((i = "Mbps"), (n = Math.round(t.bitrate / 1e5) / 10))
        : t.bitrate > 1e4
        ? ((i = "Kbps"), (n = Math.round(t.bitrate / 1e3)))
        : t.bitrate > 1e3 && ((i = "Kbps"), (n = Math.round(t.bitrate / 100) / 10)),
        e.push(n + i);
    }
    let r = H3(t);
    return (
      r && e.push(r),
      t.mediaDomain && e.push(J._("from_domain", [t.mediaDomain])),
      t.type == "audio" && e.push(J._("audio_only")),
      t.extension &&
        (t.originalExt && t.originalExt != t.extension && e.push(t.originalExt.toUpperCase() + ">" + t.extension.toUpperCase()),
        e.push(t.extension.toUpperCase())),
      e.join(" - ")
    );
  }
  async function zi(t) {
    let e = await J.prefs;
    vn = null;
    let r = Object.keys(t)
        .map((u) => t[u])
        .filter((u) => u.status == "active"),
      n = {};
    r.forEach((u) => {
      let f = u.group || u.id;
      typeof n[f] > "u" && (n[f] = []), n[f].push(u);
    });
    let i = [],
      a = yn.describeAll(),
      o = (u, f) => {
        let c = n[u][0],
          d = n[f][0];
        return c.running && d.running && c.actionStartDate && d.actionStartDate
          ? c.actionStartDate - d.actionStartDate
          : c.urls && !d.urls
          ? -1
          : !c.urls && !d.urls
          ? 1
          : c.chunked && !d.chunked
          ? -1
          : !c.chunked && d.chunked
          ? 1
          : c.adp && !d.adp
          ? -1
          : !c.adp && d.adp
          ? 1
          : c.chunked && u.length != f.length
          ? f.length - u.length
          : (d.created || 0) - (c.created || 0);
      };
    if (
      (Object.keys(n)
        .sort(o)
        .every((u) => {
          let f = n[u];
          if (f[0].urls) {
            i.push({ id: u, title: f[0].title });
            return;
          }
          return (
            f.sort(L3),
            i.push({ id: "group-" + u, title: f[0].title, enabled: !1 }),
            f.forEach((c) => {
              vn || (vn = c.id), i.length < Kg && i.push({ id: c.id, title: z3(c), icons: { 18: "content/" + a[c.actions[0]].icon18 } });
            }),
            i.length < Kg - 1
          );
        }),
      i.length == 0 && i.push({ id: "vdh-no-media", title: J._("no_media_current_tab"), enabled: !1 }),
      i.push({ id: "separator", type: "separator" }),
      i.push({ id: "vdh-smartnaming", title: J._("smartnaming_rule") }),
      i.push({ id: "separator2", type: "separator" }),
      i.push({ id: "vdh-settings", title: J._("settings"), icons: { 64: "content/images/icon-settings-64.png" } }),
      i.push({ id: "vdh-about", title: J._("about"), icons: { 64: "content/images/icon-about-64.png" } }),
      F3.buildOptions.browser == "firefox" &&
        i.push({ id: "vdh-sites", title: J._("supported_sites"), icons: { 64: "content/images/icon-sites-list-64.png" } }),
      i.push({ id: "vdh-convert", title: J._("convert_local_files"), icons: { 64: "content/images/icon-action-convert-b-64.png" } }),
      i.push({ id: "vdh-merge", title: J._("merge_local_files"), icons: { 64: "content/images/icon-merger-64.png" } }),
      i.push({ id: "vdh-analyze", title: J._("analyze_page"), icons: { 64: "content/images/icon-photo-64.png" } }),
      !e.contextMenuEnabled && (!J.isBrowser("firefox") || !e.toolsMenuEnabled))
    ) {
      Ui.length && (Li.removeAll(), (Ui = []));
      return;
    }
    if (D3(i, Ui)) return;
    Ui = i;
    function l(u) {
      return new Promise((f, c) => {
        Li.create(u, () => {
          f();
        });
      });
    }
    V3(async () => {
      let u = await J.prefs;
      return Li.removeAll().then(() => {
        let f = [];
        return (
          u.contextMenuEnabled &&
            f.push(
              l({ id: "vdh-main", title: J._("title"), contexts: ["all"] }).then(() =>
                Promise.all(
                  i.map((c) => {
                    let d = Object.assign({ parentId: "vdh-main" }, c);
                    return (
                      Bi.menus ||
                        (delete d.icons, (d.contexts || []).indexOf("selection") < 0 && (d.contexts = (d.contexts || []).concat(["all"]))),
                      l(d)
                    );
                  })
                )
              )
            ),
          J.isBrowser("firefox") &&
            u.toolsMenuEnabled &&
            f.push(
              l({ id: "vdh-main-tools", title: J._("title"), contexts: ["tools_menu"] }).then(() =>
                Promise.all(i.map((c) => l(Object.assign({ parentId: "vdh-main-tools" }, c, { id: c.id + "-tools" }))))
              )
            ),
          Promise.all(f)
        );
      });
    });
  }
  function Yg() {
    if (vn) {
      let t = Hi.getHit(vn);
      t && yn.execute(t.actions[0], t);
    }
  }
  var D3,
    F3,
    J,
    Bi,
    yn,
    Hi,
    N3,
    j3,
    W3,
    U3,
    Gg,
    Kg,
    Li,
    Ui,
    vn,
    V3,
    Xg = B(() => {
      (D3 = Po()),
        (F3 = ot()),
        (J = z()),
        (Bi = J.browser),
        (yn = (sn(), S(on))),
        (Hi = (ge(), S(he))),
        (N3 = (oe(), S(ae))),
        (j3 = (bl(), S(wl))),
        (W3 = (fr(), S(cr))),
        (U3 = (ht(), S(pt))),
        (Gg = new RegExp("(\\d+)x(\\d+)")),
        (Kg = 12),
        (Li = Bi.menus || Bi.contextMenus);
      (Ui = []), (vn = null), (V3 = N3.Concurrent());
      zi({});
      J.unsafe_prefs.on("contextMenuEnabled", () => {
        zi(Hi.getHits());
      });
      J.unsafe_prefs.on("toolsMenuEnabled", () => {
        zi(Hi.getHits());
      });
      Li.onClicked.addListener(function (t, e) {
        switch (t.menuItemId) {
          case "vdh-settings":
          case "vdh-settings-tools":
            J.ui.open("settings", { type: "tab", url: "content/settings.html" });
            break;
          case "vdh-about":
          case "vdh-about-tools":
            J.ui.open("about", { type: "panel", url: "content/about.html" });
            break;
          case "vdh-sites":
          case "vdh-sites-tools":
            U3.gotoOrOpenTab("https://www.downloadhelper.net/sites");
            break;
          case "vdh-convert":
          case "vdh-convert-tools":
            yn.convertLocal();
            break;
          case "vdh-merge":
            yn.mergeLocal();
            break;
          case "vdh-analyze":
          case "vdh-analyze-tools":
            j3.analyzePage();
            break;
          case "vdh-smartnaming":
          case "vdh-smartnaming-tools":
            W3.defineInPage();
            break;
          default: {
            let r = /^(.*)\-tools$/.exec(t.menuItemId),
              n = Hi.getHit((r && r[1]) || t.menuItemId);
            n && yn.execute(n.actions[0], n);
          }
        }
      });
      Bi.commands.onCommand.addListener(function (t) {
        t == "default-action" && Yg();
      });
    });
  var he = {};
  H(he, { dispatch: () => lA, getHit: () => uA, getHits: () => cA, getLogs: () => fA });
  async function _l() {
    let t = ie.getState().hits,
      e = 0,
      r = 0,
      n = 0,
      i = 0;
    Object.keys(t).forEach((f) => {
      switch (t[f].status) {
        case "running":
          i++;
          break;
        case "active":
          e++, r++;
          break;
        case "inactive":
          r++;
          break;
        case "pinned":
          n++;
          break;
      }
    });
    let a = await St.prefs,
      o = !1;
    (r == 0 || (a.iconActivation == "currenttab" && e == 0)) && (o = !0),
      gr.action.setIcon({
        path: {
          32: "/content/images/icon-32" + (o ? "-off" : "") + ".png",
          40: "/content/images/icon-40" + (o ? "-off" : "") + ".png",
          48: "/content/images/icon-48" + (o ? "-off" : "") + ".png",
          128: "/content/images/icon-128" + (o ? "-off" : "") + ".png"
        }
      });
    let s = "",
      l = "#000";
    switch (a.iconBadge) {
      case "tasks":
        (l = "#00f"), (s = i || "");
        break;
      case "activetab":
        (l = "#080"), (s = e || "");
        break;
      case "anytab":
        (l = "#b59e32"), (s = r || "");
        break;
      case "pinned":
        (l = "#000"), (s = n || "");
        break;
      case "mixed":
        n > 0
          ? ((l = "#000"), (s = n))
          : i > 0
          ? ((l = "#00f"), (s = i))
          : e > 0
          ? ((l = "#080"), (s = e))
          : r > 0 && ((l = "#b59e32"), (s = r));
    }
    let u = ie.getState().logs.filter((f) => f.type === "error");
    u.length > 0 && ((s = u.length), (l = "#f44")),
      gr.action.setBadgeText({ text: "" + s }),
      gr.action.setBadgeBackgroundColor({ color: l });
  }
  function lA(t, e) {
    ie.dispatch({ type: t, payload: e });
  }
  function uA(t) {
    return ie.getState().hits[t];
  }
  function cA() {
    return ie.getState().hits;
  }
  function fA() {
    return ie.getState().logs;
  }
  async function dA() {
    let t = ["blacklist", "license", "variants", "convrules", "outputConfigs", "smartname"],
      e = await St.prefs;
    return gr.storage.local.get(t).then((r) => {
      let n = Object.assign({ blacklist: {}, license: null, conversionRules: [], outputConfigs: {} }, r, { "weh-prefs": e.getAll() }),
        i = JSON.stringify(n, null, 4),
        a;
      if (St.isBrowser("firefox")) {
        let o = new Blob([i], { type: "text/json;charset=utf-8" });
        a = URL.createObjectURL(o);
      } else a = "data:," + i;
      gr.downloads.download({ url: a, filename: "vdh-settings.json", saveAs: !0, conflictAction: "uniquify" });
    });
  }
  async function pA(t) {
    return (
      t.convrules && (await iA.set(t.convrules)),
      t.outputConfigs && Z3.setOutputConfigs(t.outputConfigs),
      t.license && Q3.setLicense(t.license),
      t.blacklist && (await tA.set(t.blacklist)),
      t.variants && (await rA.setVariants(t.variants)),
      t.smartname && (await nA.set(t.smartname)),
      t["weh-prefs"] || {}
    );
  }
  function hA() {
    gr.runtime.reload();
  }
  var $3,
    G3,
    K3,
    Y3,
    Sl,
    St,
    wn,
    Al,
    J3,
    X3,
    Z3,
    Q3,
    eA,
    tA,
    rA,
    nA,
    iA,
    Zg,
    gr,
    ie,
    aA,
    oA,
    sA,
    xl,
    ge = B(() => {
      ({ createStore: $3, combineReducers: G3, applyMiddleware: K3 } = $p()),
        ({ createLogger: Y3 } = Kp()),
        (Sl = Qp()),
        (St = z()),
        (wn = Xe()),
        (Al = (vt(), S(yt))),
        (J3 = (sn(), S(on))),
        (X3 = (Hr(), S(Br))),
        (Z3 = (Yr(), S(Kr))),
        (Q3 = (Vr(), S(zr))),
        (eA = (Xg(), S(Jg))),
        (tA = (hl(), S(pl))),
        (rA = (Bs(), S(Ls))),
        (nA = (fr(), S(cr))),
        (iA = (Mi(), S(Ri)));
      ht();
      Zg = [];
      St.prefs.then((t) => {
        t.backgroundReduxLogger && Zg.push(Y3({ collapsed: (e, r, n) => !0 }));
      });
      (gr = St.browser),
        (ie = $3(G3({ hits: Al.reducer, progress: Al.progressReducer, logs: X3.reducer }), K3(...Zg))),
        (aA = Sl(ie.getState, "hits")),
        (oA = Sl(ie.getState, "progress")),
        (sA = Sl(ie.getState, "logs"));
      xl = null;
      ie.subscribe(
        aA(async () => {
          if (xl) return;
          let t = (await St.prefs).hitUpdateFloodProtect;
          xl = setTimeout(() => {
            xl = null;
            let e = ie.getState().hits;
            try {
              wn.call("main", "hits", e);
            } catch {}
            try {
              eA.updateHits(e);
            } catch (r) {
              console.error(r);
            }
            try {
              _l();
            } catch (r) {
              console.error(r);
            }
          }, t);
        })
      );
      ie.subscribe(
        oA(() => {
          try {
            wn.call("main", "progress", ie.getState().progress);
          } catch {}
        })
      );
      ie.subscribe(
        sA(() => {
          try {
            wn.call("main", "logs", ie.getState().logs);
          } catch {}
          try {
            _l();
          } catch (t) {
            console.error(t);
          }
        })
      );
      wn.listen({
        getHits: () => ie.getState().hits,
        getHit: (t) => ie.getState().hits[t],
        getMainData: () => ({
          hits: ie.getState().hits,
          actions: J3.describeAll(),
          logs: ie.getState().logs,
          progress: ie.getState().progress
        }),
        hitPageData: (t) => {
          Al.updateOriginal(t.id, t.data);
        },
        closePopup: () => wn.call("main", "close"),
        closePanel: (t) => St.ui.close(t)
      });
      _l();
      St.rpc.listen({ exportSettings: dA, importSettings: pA, reloadAddon: hA });
    });
  var pt = {};
  H(pt, { current: () => wA, gotoOrOpenTab: () => _A, setTransientTab: () => Qg, update: () => yr });
  function wA() {
    return { url: Il, urls: $i };
  }
  function bA() {
    (Vi = null),
      vA().then((t) => {
        t &&
          ((Il = t.url),
          it.tabs.query({}).then((e) => {
            $i = {};
            for (let r in e) $i[e[r].url] = 1;
            mA.dispatch("hits.urlUpdated", { url: Il, urls: $i });
          }));
      });
  }
  function yr() {
    Vi && clearTimeout(Vi), (Vi = setTimeout(bA, 50));
  }
  function Qg(t, e) {
    (_t = t), (mr = e);
  }
  function xA(t) {
    _t === t && mr && it.tabs.update(mr, { active: !0 }), (_t = null), (mr = null), yr();
  }
  function AA({ tabId: t, _windowId: e }) {
    t !== _t && ((_t = null), (mr = null)), yr();
  }
  function SA(t) {
    _t === "<next-tab>" && (_t = t.id);
  }
  function _A(t) {
    return (_t = null), (mr = null), yA.gotoOrOpenTab(t, Qg);
  }
  var gA,
    it,
    mA,
    yA,
    Vi,
    vA,
    Il,
    $i,
    _t,
    mr,
    ht = B(() => {
      (gA = z()),
        (it = gA.browser),
        (mA = (ge(), S(he))),
        (yA = (oe(), S(ae))),
        (Vi = null),
        (vA = async () => {
          try {
            let t = await it.windows.getLastFocused({ populate: !0 });
            if (t.focused) {
              let e = t.tabs.filter((r) => r.active);
              return e.length ? e[0] : null;
            } else return null;
          } catch {
            return null;
          }
        }),
        (Il = "about:blank"),
        ($i = {});
      (_t = null), (mr = null);
      it.windows.onFocusChanged.addListener(yr);
      it.windows.onRemoved.addListener(yr);
      it.tabs.onActivated.addListener(AA);
      it.tabs.onRemoved.addListener(xA);
      it.tabs.onUpdated.addListener(yr);
      it.tabs.onCreated.addListener(SA);
    });
  var Me = {};
  H(Me, {
    call: () => rm,
    check: () => El,
    downloads: () => FA,
    gotoInstall: () => ql,
    isAtLeastVersion: () => DA,
    isDegradedVersion: () => MA,
    isProbablyAvailable: () => RA,
    listen: () => TA,
    request: () => NA,
    requestBinary: () => jA
  });
  function ql() {
    EA(async () => {
      let t = await Gi.prefs,
        e = "https://www.downloadhelper.net/install-coapp-v2?browser=" + (PA.browser || "");
      return t.forcedCoappVersion && (e += "&version=" + t.forcedCoappVersion), qA.gotoOrOpenTab(e);
    });
  }
  function rm(...t) {
    return Ne.call(...t);
  }
  function TA(...t) {
    return Ne.listen(...t);
  }
  function CA() {
    return new Promise((t, e) => {
      let r = !1;
      Ne.callCatchAppNotFound((n) => {
        (vr = !1), (r = !0), t({ status: !1, error: n.message });
      }, "info")
        .then((n) => {
          (vr = !0), (kl = n.version), (tm = n.target?.node == 10), t({ status: !0, info: n });
        })
        .catch((n) => {
          (vr = !1), r || t({ status: !1, error: n.message });
        });
    });
  }
  function El() {
    return OA(() => CA());
  }
  function RA() {
    return vr;
  }
  function MA() {
    return !!tm;
  }
  function DA(t) {
    if (kl) return kA(kl, t) >= 0;
    throw new Error("Coapp no available");
  }
  function NA(t, e) {
    return new Promise((r, n) => {
      let i = [];
      function a(o) {
        if ((i.push(o.data), !o.more)) return r(i.join(""));
        Ne.call("requestExtra", o.id)
          .then((s) => {
            a(s);
          })
          .catch(n);
      }
      Ne.call("request", t, e)
        .then((o) => ((vr = !0), o))
        .then(a)
        .catch(n);
    });
  }
  function jA(t, e) {
    return new Promise((r, n) => {
      let i = 0,
        a = [];
      function o(s) {
        if ((s.data && s.data.data && ((i += s.data.data.length), a.push(new Uint8Array(s.data.data))), !s.more)) {
          let l = new Uint8Array(i),
            u = 0;
          return (
            a.forEach((f) => {
              l.set(f, u), (u += f.length);
            }),
            r(l)
          );
        }
        Ne.call("requestExtra", s.id)
          .then((l) => {
            setTimeout(() => {
              o(l);
            });
          })
          .catch(n);
      }
      Ne.call("requestBinary", t, e)
        .then((s) => ((vr = !0), s))
        .then(o)
        .catch(n);
    });
  }
  var Gi,
    em,
    IA,
    kA,
    Ne,
    qA,
    EA,
    OA,
    PA,
    bn,
    vr,
    kl,
    tm,
    FA,
    De = B(() => {
      (Gi = z()),
        (em = (oe(), S(ae))),
        (IA = (Zd(), S(Xd))),
        ({ compareSemVer: kA } = (lp(), S(sp))),
        (Ne = cp()("net.downloadhelper.coapp")),
        (qA = (ht(), S(pt))),
        (EA = em.Concurrent()),
        (OA = em.Concurrent()),
        (PA = ot().buildOptions || {}),
        (bn = null);
      Ne.onAppNotFound.addListener(() => {
        ql();
      });
      Ne.onCallCount.addListener(async (t, e) => {
        let r = await Gi.prefs;
        bn && (clearTimeout(bn), (bn = null)),
          t === 0 &&
            e === 0 &&
            r.coappIdleExit &&
            (bn = setTimeout(() => {
              (bn = null), Ne.close();
            }, r.coappIdleExit));
      });
      FA = new IA.Downloads(Ne);
      Gi.prefs.then((t) => {
        t.checkCoappOnStartup && El();
      });
      Gi.rpc.listen({ coappProxy: rm, checkCoApp: El, installCoApp: ql });
    });
  var WA = (async () => {
    let t = z(),
      e = t.browser,
      r = ot(),
      n = r.buildOptions || {};
    r.prod || console.info("=========== VDH started", new Date().toLocaleTimeString(), "==========");
    let i = e.runtime.getManifest();
    Jl(), De(), Vr(), ml(), bl(), Mi();
    let a = (ht(), S(pt));
    return (
      t.rpc.listen({
        openSettings: () => {
          t.ui.open("settings", { type: "tab", url: "content/settings.html" }), t.ui.close("main");
        },
        openTranslation: () => {
          t.ui.open("translation", { type: "tab", url: "content/translation.html" }), t.ui.close("main");
        },
        openSites: () => a.gotoOrOpenTab("https://www.downloadhelper.net/sites"),
        openForum: () => a.gotoOrOpenTab("https://groups.google.com/forum/#!forum/video-downloadhelper-q-and-a"),
        openHomepage: () => a.gotoOrOpenTab("https://www.downloadhelper.net/"),
        openTranslationForum: () => a.gotoOrOpenTab("https://groups.google.com/forum/#!forum/video-downloadhelper-internationalization"),
        openWeh: () => a.gotoOrOpenTab("https://github.com/mi-g/weh"),
        openAbout: () => {
          t.ui.open("about", { type: "panel", url: "content/about.html" }), t.ui.close("main");
        },
        openCoapp: () => {
          t.ui.open("coappShell", { type: "tab", url: "content/coapp-shell.html" }), t.ui.close("main");
        },
        goto: (o) => a.gotoOrOpenTab(o),
        getBuild: () => r,
        updateLastFocusedWindowHeight: (o, s) => {
          e.windows.getLastFocused().then((l) => {
            if (l) {
              (o = Math.floor(o)), (s = Math.floor(s));
              let u = Math.floor(l.height) - s;
              e.windows.update(l.id, { height: o + u });
            }
          });
        }
      }),
      (o) => {
        o.reason == "install"
          ? a.gotoOrOpenTab("https://www.downloadhelper.net/welcome?browser=" + (n.browser || "") + "&version=" + i.version)
          : o.reason == "update" &&
            o.previousVersion != e.runtime.getManifest().version &&
            i.version != "7.2.1" &&
            i.version != "7.2.2" &&
            (i.version != "7.3.1" || o.previousVersion != "7.3.0") &&
            (i.version != "7.3.3.0" || o.previousVersion != "7.3.3.1") &&
            (i.version != "7.3.3.1" || o.previousVersion != "7.3.3.2") &&
            (i.version != "7.4.0.1" || o.previousVersion != "7.4.0.0") &&
            i.version != "7.5.0.0" &&
            i.version != "8.0.0.6" &&
            i.version != "8.0.0.7" &&
            !/^7\.3\.7(\.\d+)?$/.test(i.version) &&
            a.gotoOrOpenTab(
              "https://www.downloadhelper.net/update?browser=" + (n.browser || "") + "&from=" + o.previousVersion + "&to=" + i.version
            );
      }
    );
  })();
  (chrome || browser).runtime.onInstalled.addListener(async (e) => {
    (await WA)(e);
  });
})();
/*! Bundled license information:

semver-parser/index.js:
  (*!
   * SemVer Parser
   *
   * @license MIT
   * @copyright asamuzaK (Kazz)
   * @see {@link https://github.com/asamuzaK/semverParser/blob/master/LICENSE}
   * @see {@link https://semver.org/ Semantic Versioning 2.0.0}
   *)
*/
