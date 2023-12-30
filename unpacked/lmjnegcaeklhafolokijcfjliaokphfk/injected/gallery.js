(() => {
  var j = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
  var I = j((F, W) => {
    (function (r, e) {
      if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], e);
      else if (typeof F < "u") e(W);
      else {
        var o = { exports: {} };
        e(o), (r.browser = o.exports);
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F, function (r) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let e = "The message port closed before a response was received.",
          o = (l) => {
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
            class i extends WeakMap {
              constructor(t, a = void 0) {
                super(a), (this.createItem = t);
              }
              get(t) {
                return this.has(t) || this.set(t, this.createItem(t)), super.get(t);
              }
            }
            let A = (s) => s && typeof s == "object" && typeof s.then == "function",
              T =
                (s, t) =>
                (...a) => {
                  l.runtime.lastError
                    ? s.reject(new Error(l.runtime.lastError.message))
                    : t.singleCallbackArg || (a.length <= 1 && t.singleCallbackArg !== !1)
                    ? s.resolve(a[0])
                    : s.resolve(a);
                },
              v = (s) => (s == 1 ? "argument" : "arguments"),
              h = (s, t) =>
                function (m, ...u) {
                  if (u.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${v(t.minArgs)} for ${s}(), got ${u.length}`);
                  if (u.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${v(t.maxArgs)} for ${s}(), got ${u.length}`);
                  return new Promise((p, b) => {
                    if (t.fallbackToNoCallback)
                      try {
                        m[s](...u, T({ resolve: p, reject: b }, t));
                      } catch (g) {
                        console.warn(
                          `${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          g
                        ),
                          m[s](...u),
                          (t.fallbackToNoCallback = !1),
                          (t.noCallback = !0),
                          p();
                      }
                    else t.noCallback ? (m[s](...u), p()) : m[s](...u, T({ resolve: p, reject: b }, t));
                  });
                },
              x = (s, t, a) =>
                new Proxy(t, {
                  apply(m, u, p) {
                    return a.call(u, s, ...p);
                  }
                }),
              y = Function.call.bind(Object.prototype.hasOwnProperty),
              _ = (s, t = {}, a = {}) => {
                let m = Object.create(null),
                  u = {
                    has(b, g) {
                      return g in s || g in m;
                    },
                    get(b, g, w) {
                      if (g in m) return m[g];
                      if (!(g in s)) return;
                      let c = s[g];
                      if (typeof c == "function")
                        if (typeof t[g] == "function") c = x(s, s[g], t[g]);
                        else if (y(a, g)) {
                          let M = h(g, a[g]);
                          c = x(s, s[g], M);
                        } else c = c.bind(s);
                      else if (typeof c == "object" && c !== null && (y(t, g) || y(a, g))) c = _(c, t[g], a[g]);
                      else if (y(a, "*")) c = _(c, t[g], a["*"]);
                      else
                        return (
                          Object.defineProperty(m, g, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return s[g];
                            },
                            set(M) {
                              s[g] = M;
                            }
                          }),
                          c
                        );
                      return (m[g] = c), c;
                    },
                    set(b, g, w, c) {
                      return g in m ? (m[g] = w) : (s[g] = w), !0;
                    },
                    defineProperty(b, g, w) {
                      return Reflect.defineProperty(m, g, w);
                    },
                    deleteProperty(b, g) {
                      return Reflect.deleteProperty(m, g);
                    }
                  },
                  p = Object.create(s);
                return new Proxy(p, u);
              },
              d = (s) => ({
                addListener(t, a, ...m) {
                  t.addListener(s.get(a), ...m);
                },
                hasListener(t, a) {
                  return t.hasListener(s.get(a));
                },
                removeListener(t, a) {
                  t.removeListener(s.get(a));
                }
              }),
              N = new i((s) =>
                typeof s != "function"
                  ? s
                  : function (a) {
                      let m = _(a, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                      s(m);
                    }
              ),
              U = new i((s) =>
                typeof s != "function"
                  ? s
                  : function (a, m, u) {
                      let p = !1,
                        b,
                        g = new Promise((S) => {
                          b = function (k) {
                            (p = !0), S(k);
                          };
                        }),
                        w;
                      try {
                        w = s(a, m, b);
                      } catch (S) {
                        w = Promise.reject(S);
                      }
                      let c = w !== !0 && A(w);
                      if (w !== !0 && !c && !p) return !1;
                      let M = (S) => {
                        S.then(
                          (k) => {
                            u(k);
                          },
                          (k) => {
                            let R;
                            k && (k instanceof Error || typeof k.message == "string")
                              ? (R = k.message)
                              : (R = "An unexpected error occurred"),
                              u({ __mozWebExtensionPolyfillReject__: !0, message: R });
                          }
                        ).catch((k) => {
                          console.error("Failed to send onMessage rejected reply", k);
                        });
                      };
                      return M(c ? w : g), !0;
                    }
              ),
              ee = ({ reject: s, resolve: t }, a) => {
                l.runtime.lastError
                  ? l.runtime.lastError.message === e
                    ? t()
                    : s(new Error(l.runtime.lastError.message))
                  : a && a.__mozWebExtensionPolyfillReject__
                  ? s(new Error(a.message))
                  : t(a);
              },
              H = (s, t, a, ...m) => {
                if (m.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${v(t.minArgs)} for ${s}(), got ${m.length}`);
                if (m.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${v(t.maxArgs)} for ${s}(), got ${m.length}`);
                return new Promise((u, p) => {
                  let b = ee.bind(null, { resolve: u, reject: p });
                  m.push(b), a.sendMessage(...m);
                });
              },
              re = {
                devtools: { network: { onRequestFinished: d(N) } },
                runtime: { onMessage: d(U), onMessageExternal: d(U), sendMessage: H.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) },
                tabs: { sendMessage: H.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
              },
              $ = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
            return (n.privacy = { network: { "*": $ }, services: { "*": $ }, websites: { "*": $ } }), _(l, re, n);
          };
        r.exports = o(chrome);
      } else r.exports = globalThis.browser;
    });
  });
  var D = j((ge, C) => {
    C.exports.browser = I();
    var L;
    typeof browser > "u" && typeof chrome < "u" && chrome.runtime
      ? /\bOPR\//.test(navigator.userAgent)
        ? (L = "opera")
        : (L = "chrome")
      : /\bEdge\//.test(navigator.userAgent)
      ? (L = "edge")
      : (L = "firefox"),
      (C.exports.browserType = L),
      typeof C.exports.browser.action > "u" && (C.exports.browser.action = C.exports.browser.browserAction),
      (C.exports.isBrowser = (...r) => {
        for (let e = 0; e < r.length; e++) if (r[e] == C.exports.browserType) return !0;
        return !1;
      }),
      (C.exports.error = (r) => {
        console.groupCollapsed(r.message), r.stack && console.error(r.stack), console.groupEnd();
      });
  });
  var z = j((oe, G) => {
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
      setPost(e, o) {
        typeof e == "string" ? (this.posts[e] = o) : (this.post = e);
      }
      setUseTarget(e) {
        this.useTarget = e;
      }
      setDebugLevel(e) {
        this.debugLevel = e;
      }
      setHook(e) {
        let o = this,
          l = Date.now();
        function n() {
          return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - l;
        }
        e
          ? (this.hook = (i) => {
              i.timestamp = n();
              try {
                e(i);
              } catch (A) {
                o.logger.warn("Hoor error", A);
              }
            })
          : (this.hook = this.nullHook);
      }
      nullHook() {}
      call() {
        let e = this,
          o,
          l,
          n,
          i,
          A = Array.prototype.slice.call(arguments);
        return (
          typeof A[0] == "function" && (o = A.shift()),
          e.useTarget ? ([l, n, ...i] = A) : ([n, ...i] = A),
          new Promise(function (T, v) {
            let h = ++e.replyId;
            e.debugLevel >= 2 && e.logger.info("rpc #" + h, "call =>", n, i),
              e.hook({ type: "call", callee: l, rid: h, method: n, args: i }),
              (e.replies[h] = { resolve: T, reject: v, peer: l });
            let x = o || (e.useTarget && e.posts[l]) || e.post;
            e.useTarget
              ? x(l, { type: "weh#rpc", _request: h, _method: n, _args: [...i] })
              : x({ type: "weh#rpc", _request: h, _method: n, _args: [...i] });
          })
        );
      }
      receive(e, o, l) {
        let n = this;
        if (e._request)
          Promise.resolve()
            .then(() => {
              let i = n.listeners[e._method];
              if (typeof i == "function")
                return (
                  n.debugLevel >= 2 && n.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                  n.hook({ type: "call", caller: l, rid: e._request, method: e._method, args: e._args }),
                  Promise.resolve(i.apply(null, e._args))
                    .then((A) => (n.hook({ type: "reply", caller: l, rid: e._request, result: A }), A))
                    .catch((A) => {
                      throw (n.hook({ type: "reply", caller: l, rid: e._request, error: A.message }), A);
                    })
                );
              throw new Error("Method " + e._method + " is not a function");
            })
            .then((i) => {
              n.debugLevel >= 2 && n.logger.info("rpc #" + e._request, "serve => ", i),
                o({ type: "weh#rpc", _reply: e._request, _result: i });
            })
            .catch((i) => {
              n.debugLevel >= 1 && n.logger.info("rpc #" + e._request, "serve => !", i.message),
                o({ type: "weh#rpc", _reply: e._request, _error: i.message });
            });
        else if (e._reply) {
          let i = n.replies[e._reply];
          delete n.replies[e._reply],
            i
              ? e._error
                ? (n.debugLevel >= 1 && n.logger.info("rpc #" + e._reply, "call <= !", e._error),
                  n.hook({ type: "reply", callee: i.peer, rid: e._reply, error: e._error }),
                  i.reject(new Error(e._error)))
                : (n.debugLevel >= 2 && n.logger.info("rpc #" + e._reply, "call <= ", e._result),
                  n.hook({ type: "reply", callee: i.peer, rid: e._reply, result: e._result }),
                  i.resolve(e._result))
              : n.logger.error("Missing reply handler");
        }
      }
      listen(e) {
        Object.assign(this.listeners, e);
      }
    };
    G.exports = new O();
  });
  var K = j((ae, V) => {
    var f = D(),
      Z = f.browser;
    f.rpc = z();
    f.uiName = window._wehPanelName;
    f.uiName || (f.uiName = "injected-" + Math.round(Math.random() * 1e9));
    var se = "weh:" + Z.runtime.id + ":" + f.uiName,
      q = Z.runtime.connect({ name: se });
    f.rpc.setPost(q.postMessage.bind(q));
    q.onMessage.addListener((r) => {
      f.rpc.receive(r, q.postMessage.bind(q));
    });
    f.rpc.listen({ setPrefs: () => {}, close: () => {} });
    f.is_safe = (async () => {
      await f.rpc.call("appStarted", { uiName: f.uiName }), await f.rpc.call("appReady", { uiName: f.uiName });
    })();
    V.exports = f;
  });
  var te = K(),
    E = {};
  function J(r) {
    let e = 0,
      o,
      l,
      n;
    if (r.length == 0) return e;
    for (o = 0, n = r.length; o < n; o++) (l = r.charCodeAt(o)), (e = (e << 5) - e + l), (e |= 0);
    return "" + Math.abs(e);
  }
  function Q(r, e) {
    let o = 0,
      l = 0,
      n = r.offsetWidth,
      i = r.offsetHeight;
    for (; r; ) (o += r.offsetTop), (l += r.offsetLeft), (r = r.offsetParent);
    (r = document.createElement("div")),
      r.setAttribute("style", "width:" + n + "px;height:" + i + "px;top:" + o + "px;left:" + l + "px;"),
      r.setAttribute("class", "vdh-mask " + e),
      document.body.appendChild(r);
  }
  function ne(r) {
    let e = [];
    for (; r; ) {
      let o = r.nodeName.toLowerCase();
      if (
        (r.getAttribute && r.getAttribute("id") && (o += "#" + r.getAttribute("id")),
        document.querySelectorAll(e.concat([o]).join(" > ")).length == 1)
      ) {
        e.push(o);
        break;
      }
      let l = 1,
        n = r.prevSibling;
      for (; n; ) n.nodeName == r.nodeName && l++, (n = n.prevSibling);
      if (((o += ":nth-of-type(" + l + ")"), e.push(o), document.querySelectorAll(e.concat([o]).join(" > ")).length == 1)) break;
      r = r.parentNode;
    }
    return e.join(" > ");
  }
  function X(r, e, o) {
    let l = document.querySelectorAll(r);
    for (let n = 0; n < l.length && (o.maxHits == 0 || n < o.maxHits); n++) {
      let i = l.item(n),
        A = null,
        T = !1;
      switch (e) {
        case "link":
          (A = i.getAttribute("href").trim()), (T = !0);
          break;
        case "image":
          i.width &&
            i.height &&
            e == "image" &&
            Math.min(i.width, i.height) >= o.minImgSize &&
            ((A = i.getAttribute("src").trim()), (T = !0));
          break;
      }
      if (!T) continue;
      let v = [],
        h = i;
      for (; h && h != document; ) v.unshift(h.nodeName.toLowerCase()), (h = h.parentNode);
      if (A) {
        let x = null;
        if (A) {
          let N = /\.([^\.]{1,5})(?:\?.*)?$/.exec(A);
          N && (x = N[1].toLowerCase());
        }
        let y = J(window.location.href + "@" + v.join("/") + "@" + x),
          _ = "vdh-" + y,
          d = E[y];
        d || (d = E[y] = { urlsMap: {}, urls: [], baseUrl: window.location.href, extensions: {}, selectorAttr: _, type: e }),
          d.urlsMap[A] ||
            (i.firstChild && i.firstChild.nodeName.toLowerCase() == "img" && (i = i.firstChild),
            Q(i, d.selectorAttr),
            (d.urlsMap[A] = 1),
            d.urls.push(A),
            x && (d.extensions[x] ? d.extensions[x]++ : (d.extensions[x] = 1)));
      } else {
        let x = ne(i),
          y = J(window.location.href + "@" + x + "@scrap"),
          _ = "vdh-" + y;
        Q(i, _),
          (E[y] = { baseUrl: window.location.href, selectorAttr: _, selector: x, type: e, size: i.offsetWidth + "x" + i.offsetHeight });
      }
    }
  }
  document.querySelectorAll(".vdh-mask").forEach((r) => {
    r.remove();
  });
  var P = window._$vdhParams,
    B = [];
  P.extensions.split("|").forEach(function (r) {
    B.push("a[href$='" + r + "']"), B.push("a[href$='" + r.toUpperCase() + "']");
  });
  P.scanLinks && X(B.join(","), "link", P);
  P.scanImages && X("img[src]", "image", P);
  var Y = 0;
  for (let r in E) {
    let e = E[r];
    if (e.urls && e.urls.length < P.minFilesPerGroup) {
      delete E[r];
      continue;
    }
    Y++;
  }
  Y > 0 && te.rpc.call("galleryGroups", { pageUrl: window.location.href, groups: E });
})();
