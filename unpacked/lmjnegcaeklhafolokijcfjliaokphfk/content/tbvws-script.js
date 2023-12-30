(() => {
  var e = {
      2: function (e, r) {
        var t, n, s;
        (n = [e]),
          (t = function (e) {
            "use strict";
            if ("undefined" == typeof browser) {
              const r = () => {
                const e = {
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
                if (0 === Object.keys(e).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                class r extends WeakMap {
                  constructor(e, r = void 0) {
                    super(r), (this.createItem = e);
                  }
                  get(e) {
                    return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                  }
                }
                const t = (e) => e && "object" == typeof e && "function" == typeof e.then,
                  n =
                    (e) =>
                    (...r) => {
                      chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : 1 === r.length ? e.resolve(r[0]) : e.resolve(r);
                    },
                  s = (e, r) => {
                    const t = (e) => (1 == e ? "argument" : "arguments");
                    return function (s, ...o) {
                      if (o.length < r.minArgs)
                        throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${o.length}`);
                      if (o.length > r.maxArgs)
                        throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${o.length}`);
                      return new Promise((r, t) => {
                        s[e](...o, n({ resolve: r, reject: t }));
                      });
                    };
                  },
                  o = (e, r, t) => new Proxy(r, { apply: (r, n, s) => t.call(n, e, ...s) });
                let i = Function.call.bind(Object.prototype.hasOwnProperty);
                const a = (e, r = {}, t = {}) => {
                    let n = Object.create(null),
                      g = {
                        has: (e, r) => r in e || r in n,
                        get(e, g, m) {
                          if (g in n) return n[g];
                          if (!(g in e)) return;
                          let l = e[g];
                          if ("function" == typeof l)
                            if ("function" == typeof r[g]) l = o(e, e[g], r[g]);
                            else if (i(t, g)) {
                              let r = s(g, t[g]);
                              l = o(e, e[g], r);
                            } else l = l.bind(e);
                          else {
                            if ("object" != typeof l || null === l || (!i(r, g) && !i(t, g)))
                              return (
                                Object.defineProperty(n, g, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: () => e[g],
                                  set(r) {
                                    e[g] = r;
                                  }
                                }),
                                l
                              );
                            l = a(l, r[g], t[g]);
                          }
                          return (n[g] = l), l;
                        },
                        set: (e, r, t, s) => (r in n ? (n[r] = t) : (e[r] = t), !0),
                        defineProperty: (e, r, t) => Reflect.defineProperty(n, r, t),
                        deleteProperty: (e, r) => Reflect.deleteProperty(n, r)
                      };
                    return new Proxy(e, g);
                  },
                  g = {
                    runtime: {
                      onMessage:
                        ((m = new r((e) =>
                          "function" != typeof e
                            ? e
                            : function (r, n, s) {
                                let o = e(r, n);
                                if (t(o))
                                  return (
                                    o.then(s, (e) => {
                                      console.error(e), s(e);
                                    }),
                                    !0
                                  );
                                void 0 !== o && s(o);
                              }
                        )),
                        {
                          addListener(e, r, ...t) {
                            e.addListener(m.get(r), ...t);
                          },
                          hasListener: (e, r) => e.hasListener(m.get(r)),
                          removeListener(e, r) {
                            e.removeListener(m.get(r));
                          }
                        })
                    }
                  };
                var m;
                return a(chrome, g, e);
              };
              e.exports = r();
            } else e.exports = browser;
          }),
          void 0 === (s = "function" == typeof t ? t.apply(r, n) : t) || (e.exports = s);
      },
      30: (e, r, t) => {
        "use strict";
        e.exports = t(10);
      },
      188: (e, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.SmartNameEvaluate = function (e) {
            var r = e.xpath,
              n = null;
            function s() {
              if ((n = (n && n.trim()) || "") && e.regexp) {
                var r = new RegExp(e.regexp, "m").exec(n);
                n = r ? (void 0 !== r[1] ? r[1] || "" : r[0] || "") : "";
              }
            }
            switch (e.mode) {
              case "page-title":
                r = "/html/head/title/text()";
              case "page-content":
                n = document.evaluate(r, document, null, XPathResult.STRING_TYPE, null).stringValue || null;
                break;
              case "obfuscated":
                return new Promise(function (e, r) {
                  crypto.subtle
                    .digest("SHA-256", new TextEncoder("utf-8").encode(window.location.href))
                    .then(function (r) {
                      var t = Array.from(new Uint8Array(r));
                      (n = t
                        .slice(0, 16)
                        .map(function (e) {
                          return ("00" + e.toString(16)).slice(-2);
                        })
                        .join("")),
                        s(),
                        e(n);
                    })
                    .catch(r);
                });
              case "header-url":
                if (!(n = e.headerFilename || e.urlFilename)) {
                  var o = t.exec(window.location.href);
                  n = o ? o[1] : "";
                }
                break;
              default:
                n = "";
            }
            s(), n.length > 128 && (n = n.substr(0, 64));
            return n;
          });
        var t = new RegExp("^.*?:/?/?[^/]+/(?:[^/]*/)*([^#\\?/]+?)(?:\\.[a-zA-Z0-9]{1,5})?(?:$|#|\\?|/)");
      },
      10: (e, r, t) => {
        "use strict";
        var n = t(0),
          s = n.browser;
        n.rpc = t(1);
        var o = s.runtime.connect({ name: "weh:" + s.runtime.id + ":" + n.uiName });
        n.rpc.setPost(o.postMessage.bind(o)),
          o.onMessage.addListener(function (e) {
            n.rpc.receive(e, o.postMessage.bind(o));
          }),
          (e.exports = n);
      },
      1: (e) => {
        "use strict";
        var r = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (r, t, n) {
            return t && e(r.prototype, t), n && e(r, n), r;
          };
        })();
        function t(e) {
          if (Array.isArray(e)) {
            for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
            return t;
          }
          return Array.from(e);
        }
        function n(e) {
          return Array.isArray(e) ? e : Array.from(e);
        }
        var s = (function () {
          function e() {
            !(function (e, r) {
              if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.replyId = 0),
              (this.replies = {}),
              (this.listeners = {}),
              (this.hook = this.nullHook),
              (this.debugLevel = 0),
              (this.useTarget = !1),
              (this.logger = console),
              (this.posts = {});
          }
          return (
            r(e, [
              {
                key: "setPost",
                value: function (e, r) {
                  "string" == typeof e ? (this.posts[e] = r) : (this.post = e);
                }
              },
              {
                key: "setUseTarget",
                value: function (e) {
                  this.useTarget = e;
                }
              },
              {
                key: "setDebugLevel",
                value: function (e) {
                  this.debugLevel = e;
                }
              },
              {
                key: "setHook",
                value: function (e) {
                  var r = this,
                    t = Date.now();
                  this.hook = e
                    ? function (n) {
                        n.timestamp =
                          "undefined" != typeof window && void 0 !== window.performance ? window.performance.now() : Date.now() - t;
                        try {
                          e(n);
                        } catch (e) {
                          r.logger.warn("Hoor error", e);
                        }
                      }
                    : this.nullHook;
                }
              },
              { key: "nullHook", value: function () {} },
              {
                key: "call",
                value: function () {
                  var e,
                    r,
                    s,
                    o,
                    i = this,
                    a = Array.prototype.slice.call(arguments);
                  if (("function" == typeof a[0] && (e = a.shift()), i.useTarget)) {
                    var g = n(a);
                    (r = g[0]), (s = g[1]), (o = g.slice(2));
                  } else {
                    var m = n(a);
                    (s = m[0]), (o = m.slice(1));
                  }
                  return new Promise(function (n, a) {
                    var g = ++i.replyId;
                    i.debugLevel >= 2 && i.logger.info("rpc #" + g, "call =>", s, o),
                      i.hook({ type: "call", callee: r, rid: g, method: s, args: o }),
                      (i.replies[g] = { resolve: n, reject: a, peer: r });
                    var m = e || (i.useTarget && i.posts[r]) || i.post;
                    i.useTarget
                      ? m(r, { type: "weh#rpc", _request: g, _method: s, _args: [].concat(t(o)) })
                      : m({ type: "weh#rpc", _request: g, _method: s, _args: [].concat(t(o)) });
                  });
                }
              },
              {
                key: "receive",
                value: function (e, r, t) {
                  var n = this;
                  if (e._request)
                    Promise.resolve()
                      .then(function () {
                        var r = n.listeners[e._method];
                        if ("function" == typeof r)
                          return (
                            n.debugLevel >= 2 && n.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                            n.hook({ type: "call", caller: t, rid: e._request, method: e._method, args: e._args }),
                            Promise.resolve(r.apply(null, e._args))
                              .then(function (r) {
                                return n.hook({ type: "reply", caller: t, rid: e._request, result: r }), r;
                              })
                              .catch(function (r) {
                                throw (n.hook({ type: "reply", caller: t, rid: e._request, error: r.message }), r);
                              })
                          );
                        throw new Error("Method " + e._method + " is not a function");
                      })
                      .then(function (t) {
                        n.debugLevel >= 2 && n.logger.info("rpc #" + e._request, "serve => ", t),
                          r({ type: "weh#rpc", _reply: e._request, _result: t });
                      })
                      .catch(function (t) {
                        n.debugLevel >= 1 && n.logger.info("rpc #" + e._request, "serve => !", t.message),
                          r({ type: "weh#rpc", _reply: e._request, _error: t.message });
                      });
                  else if (e._reply) {
                    var s = n.replies[e._reply];
                    delete n.replies[e._reply],
                      s
                        ? e._error
                          ? (n.debugLevel >= 1 && n.logger.info("rpc #" + e._reply, "call <= !", e._error),
                            n.hook({ type: "reply", callee: s.peer, rid: e._reply, error: e._error }),
                            s.reject(new Error(e._error)))
                          : (n.debugLevel >= 2 && n.logger.info("rpc #" + e._reply, "call <= ", e._result),
                            n.hook({ type: "reply", callee: s.peer, rid: e._reply, result: e._result }),
                            s.resolve(e._result))
                        : n.logger.error("Missing reply handler");
                  }
                }
              },
              {
                key: "listen",
                value: function (e) {
                  Object.assign(this.listeners, e);
                }
              }
            ]),
            e
          );
        })();
        e.exports = new s();
      },
      0: (e, r, t) => {
        "use strict";
        var n;
        (r.browser = t(2)),
          (n =
            "undefined" == typeof browser && "undefined" != typeof chrome && chrome.runtime
              ? /\bOPR\//.test(navigator.userAgent)
                ? "opera"
                : "chrome"
              : /\bEdge\//.test(navigator.userAgent)
              ? "edge"
              : "firefox"),
          (r.browserType = n),
          void 0 === r.browser.action && (r.browser.action = r.browser.browserAction),
          (r.isBrowser = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            for (var s = 0; s < t.length; s++) if (t[s] == r.browserType) return !0;
            return !1;
          }),
          (r.error = function (e) {
            console.groupCollapsed(e.message), e.stack && console.error(e.stack), console.groupEnd();
          });
      }
    },
    r = {};
  function t(n) {
    var s = r[n];
    if (void 0 !== s) return s.exports;
    var o = (r[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, t), o.exports;
  }
  (() => {
    "use strict";
    var e = function (e, r) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e))
        return (function (e, r) {
          var t = [],
            n = !0,
            s = !1,
            o = void 0;
          try {
            for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done) && (t.push(i.value), !r || t.length !== r); n = !0);
          } catch (e) {
            (s = !0), (o = e);
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (s) throw o;
            }
          }
          return t;
        })(e, r);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
    var r = t(30),
      n = t(188).SmartNameEvaluate,
      s = new RegExp('"(?:apiKey|innertubeApiKey)"s*:s*"(.*?)["]'),
      o = "youtube",
      i = "YouTube",
      a = new URLSearchParams(window.location.search).get("vdh-bulk");
    function g() {
      var e = /watch.*v=([^&]+)/.exec(window.location.href);
      return e || (e = /(?:embed|shorts)\/([^&]+)/.exec(window.location.href)), e ? e[1] : null;
    }
    function m() {
      var e = null,
        r = document.getElementsByTagName("script");
      return (
        []
          .concat(
            (function (e) {
              if (Array.isArray(e)) {
                for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
                return t;
              }
              return Array.from(e);
            })(r)
          )
          .forEach(function (r) {
            if (r.getAttribute("nonce")) {
              var t = r.textContent,
                n = t.indexOf("{"),
                s = t.indexOf("};");
              if (n >= 0 && s >= 0) {
                var o = t.substring(n, s + 1);
                try {
                  var i = JSON.parse(o);
                  i.streamingData && (e && console.log("VDH initial multiple candidates"), (e = i));
                } catch (e) {}
              }
            }
          }),
        Promise.resolve(e)
      );
    }
    function l(t) {
      var s = /watch.*v=([^&]+)/.exec(window.location.href);
      s || (s = /(?:embed|shorts)\/([^&]+)/.exec(window.location.href));
      var l = g();
      if (s) {
        var c = void 0;
        (c =
          "page" == window._$vdhExtractMethod
            ? m()
            : (function (e, r) {
                var t = /^(https?:\/\/[^\/]+)/.exec(window.location.href)[1],
                  n = { Origin: t, "Content-Type": "application/json" };
                n["X-" + i + "-Client-Name"] = "3";
                var s = t + "/" + o + "i/v1/player?key=" + e + "&prettyPrint=false",
                  a = void 0;
                a =
                  "android" == window._$vdhExtractMethod
                    ? {
                        context: {
                          client: {
                            clientName: "ANDROID",
                            clientVersion: "17.31.35",
                            androidSdkVersion: 30,
                            userAgent: "com.google.android." + o + "/17.31.35 (Linux; U; Android 11) gzip",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0
                          }
                        },
                        videoId: r,
                        params: "8AEB",
                        playbackContext: { contentPlaybackContext: { html5Preference: "HTML5_PREF_WANTS" } },
                        contentCheckOk: !0,
                        racyCheckOk: !0
                      }
                    : "tvep" == window._$vdhExtractMethod
                    ? {
                        context: {
                          client: {
                            clientName: "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
                            clientVersion: "2.0",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0
                          },
                          thirdParty: { embedUrl: "https://www." + o + ".com/" }
                        },
                        videoId: r,
                        playbackContext: { contentPlaybackContext: { html5Preference: "HTML5_PREF_WANTS", signatureTimestamp: 19585 } },
                        contentCheckOk: !0,
                        racyCheckOk: !0
                      }
                    : {
                        context: {
                          client: {
                            clientName: "IOS",
                            clientVersion: "17.33.2",
                            deviceModel: "iPhone14,3",
                            userAgent: "com.google.ios." + o + "/17.33.2 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0
                          }
                        },
                        videoId: r,
                        playbackContext: { contentPlaybackContext: { html5Preference: "HTML5_PREF_WANTS" } },
                        contentCheckOk: !0,
                        racyCheckOk: !0
                      };
                return (
                  (n["User-Agent"] = a.context.client.userAgent),
                  (n["X-" + i + "-Client-Version"] = a.context.client.clientVersion),
                  fetch(s, { method: "POST", headers: n, body: JSON.stringify(a) }).then(function (e) {
                    return e.json();
                  })
                );
              })(t, l)),
          c
            .then(function (e) {
              return Promise.all([
                e,
                ((r = (e.videoDetails && e.videoDetails.title) || "No title"),
                Promise.resolve()
                  .then(function () {
                    return window._$vdhSmartNameSpecs
                      ? new Promise(function (e, r) {
                          setTimeout(function () {
                            e(n(window._$vdhSmartNameSpecs));
                          }, window._$vdhSmartNameSpecs.delay);
                        })
                      : null;
                  })
                  .then(function (e) {
                    return e || r;
                  }))
              ]);
              var r;
            })
            .then(function (t) {
              var n = e(t, 2),
                s = n[0],
                o = n[1];
              if (s.videoDetails) {
                var i = Object.assign({}, window._$vdhData, {
                  videoId: l,
                  pageUrl: window.location.href,
                  topUrl: window === window.top ? window.location.href : window._$vdhTopUrl,
                  title: o,
                  videoDetails: s.videoDetails,
                  formats: (s.streamingData && s.streamingData.formats) || [],
                  adaptiveFormats: (s.streamingData && s.streamingData.adaptiveFormats) || [],
                  headers: window._$vdhHeaders,
                  bulk: a
                });
                r.rpc.call("tbvwsDetectedVideo", i);
              }
            })
            .catch(function (e) {
              return console.error("VDH Error:", e);
            });
      }
    }
    function c() {
      return new Promise(function (e, r) {
        var t = 5;
        !(function r() {
          var n = (function () {
            for (var e = document.getElementsByTagName("script"), r = null, t = 0; t < e.length && !r; t++) {
              var n = e[t].textContent,
                o = s.exec(n);
              o && (r = o[1]);
            }
            return r;
          })();
          n ? e(n) : --t > 0 ? setTimeout(r, 1e3) : e(null);
        })();
      });
    }
    c().then(function (e) {
      e
        ? (l(e),
          (function (e) {
            var r = document.location.href,
              t = document.querySelector("body");
            new MutationObserver(function (t) {
              r != document.location.href && ((r = document.location.href), l(e));
            }).observe(t, { childList: !0, subtree: !0 });
          })(e))
        : g() && console.error("VDH Error: cannot find API key");
    });
  })();
})();
