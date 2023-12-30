(() => {
  var e = {
      2: function (e, r) {
        var s, t, n;
        (t = [e]),
          (s = function (e) {
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
                const s = (e) => e && "object" == typeof e && "function" == typeof e.then,
                  t =
                    (e) =>
                    (...r) => {
                      chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : 1 === r.length ? e.resolve(r[0]) : e.resolve(r);
                    },
                  n = (e, r) => {
                    const s = (e) => (1 == e ? "argument" : "arguments");
                    return function (n, ...i) {
                      if (i.length < r.minArgs)
                        throw new Error(`Expected at least ${r.minArgs} ${s(r.minArgs)} for ${e}(), got ${i.length}`);
                      if (i.length > r.maxArgs)
                        throw new Error(`Expected at most ${r.maxArgs} ${s(r.maxArgs)} for ${e}(), got ${i.length}`);
                      return new Promise((r, s) => {
                        n[e](...i, t({ resolve: r, reject: s }));
                      });
                    };
                  },
                  i = (e, r, s) => new Proxy(r, { apply: (r, t, n) => s.call(t, e, ...n) });
                let o = Function.call.bind(Object.prototype.hasOwnProperty);
                const g = (e, r = {}, s = {}) => {
                    let t = Object.create(null),
                      a = {
                        has: (e, r) => r in e || r in t,
                        get(e, a, m) {
                          if (a in t) return t[a];
                          if (!(a in e)) return;
                          let l = e[a];
                          if ("function" == typeof l)
                            if ("function" == typeof r[a]) l = i(e, e[a], r[a]);
                            else if (o(s, a)) {
                              let r = n(a, s[a]);
                              l = i(e, e[a], r);
                            } else l = l.bind(e);
                          else {
                            if ("object" != typeof l || null === l || (!o(r, a) && !o(s, a)))
                              return (
                                Object.defineProperty(t, a, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: () => e[a],
                                  set(r) {
                                    e[a] = r;
                                  }
                                }),
                                l
                              );
                            l = g(l, r[a], s[a]);
                          }
                          return (t[a] = l), l;
                        },
                        set: (e, r, s, n) => (r in t ? (t[r] = s) : (e[r] = s), !0),
                        defineProperty: (e, r, s) => Reflect.defineProperty(t, r, s),
                        deleteProperty: (e, r) => Reflect.deleteProperty(t, r)
                      };
                    return new Proxy(e, a);
                  },
                  a = {
                    runtime: {
                      onMessage:
                        ((m = new r((e) =>
                          "function" != typeof e
                            ? e
                            : function (r, t, n) {
                                let i = e(r, t);
                                if (s(i))
                                  return (
                                    i.then(n, (e) => {
                                      console.error(e), n(e);
                                    }),
                                    !0
                                  );
                                void 0 !== i && n(i);
                              }
                        )),
                        {
                          addListener(e, r, ...s) {
                            e.addListener(m.get(r), ...s);
                          },
                          hasListener: (e, r) => e.hasListener(m.get(r)),
                          removeListener(e, r) {
                            e.removeListener(m.get(r));
                          }
                        })
                    }
                  };
                var m;
                return g(chrome, a, e);
              };
              e.exports = r();
            } else e.exports = browser;
          }),
          void 0 === (n = "function" == typeof s ? s.apply(r, t) : s) || (e.exports = n);
      },
      30: (e, r, s) => {
        "use strict";
        e.exports = s(10);
      },
      10: (e, r, s) => {
        "use strict";
        var t = s(0),
          n = t.browser;
        t.rpc = s(1);
        var i = n.runtime.connect({ name: "weh:" + n.runtime.id + ":" + t.uiName });
        t.rpc.setPost(i.postMessage.bind(i)),
          i.onMessage.addListener(function (e) {
            t.rpc.receive(e, i.postMessage.bind(i));
          }),
          (e.exports = t);
      },
      1: (e) => {
        "use strict";
        var r = (function () {
          function e(e, r) {
            for (var s = 0; s < r.length; s++) {
              var t = r[s];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t);
            }
          }
          return function (r, s, t) {
            return s && e(r.prototype, s), t && e(r, t), r;
          };
        })();
        function s(e) {
          if (Array.isArray(e)) {
            for (var r = 0, s = Array(e.length); r < e.length; r++) s[r] = e[r];
            return s;
          }
          return Array.from(e);
        }
        function t(e) {
          return Array.isArray(e) ? e : Array.from(e);
        }
        var n = (function () {
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
                    s = Date.now();
                  this.hook = e
                    ? function (t) {
                        t.timestamp =
                          "undefined" != typeof window && void 0 !== window.performance ? window.performance.now() : Date.now() - s;
                        try {
                          e(t);
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
                    n,
                    i,
                    o = this,
                    g = Array.prototype.slice.call(arguments);
                  if (("function" == typeof g[0] && (e = g.shift()), o.useTarget)) {
                    var a = t(g);
                    (r = a[0]), (n = a[1]), (i = a.slice(2));
                  } else {
                    var m = t(g);
                    (n = m[0]), (i = m.slice(1));
                  }
                  return new Promise(function (t, g) {
                    var a = ++o.replyId;
                    o.debugLevel >= 2 && o.logger.info("rpc #" + a, "call =>", n, i),
                      o.hook({ type: "call", callee: r, rid: a, method: n, args: i }),
                      (o.replies[a] = { resolve: t, reject: g, peer: r });
                    var m = e || (o.useTarget && o.posts[r]) || o.post;
                    o.useTarget
                      ? m(r, { type: "weh#rpc", _request: a, _method: n, _args: [].concat(s(i)) })
                      : m({ type: "weh#rpc", _request: a, _method: n, _args: [].concat(s(i)) });
                  });
                }
              },
              {
                key: "receive",
                value: function (e, r, s) {
                  var t = this;
                  if (e._request)
                    Promise.resolve()
                      .then(function () {
                        var r = t.listeners[e._method];
                        if ("function" == typeof r)
                          return (
                            t.debugLevel >= 2 && t.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                            t.hook({ type: "call", caller: s, rid: e._request, method: e._method, args: e._args }),
                            Promise.resolve(r.apply(null, e._args))
                              .then(function (r) {
                                return t.hook({ type: "reply", caller: s, rid: e._request, result: r }), r;
                              })
                              .catch(function (r) {
                                throw (t.hook({ type: "reply", caller: s, rid: e._request, error: r.message }), r);
                              })
                          );
                        throw new Error("Method " + e._method + " is not a function");
                      })
                      .then(function (s) {
                        t.debugLevel >= 2 && t.logger.info("rpc #" + e._request, "serve => ", s),
                          r({ type: "weh#rpc", _reply: e._request, _result: s });
                      })
                      .catch(function (s) {
                        t.debugLevel >= 1 && t.logger.info("rpc #" + e._request, "serve => !", s.message),
                          r({ type: "weh#rpc", _reply: e._request, _error: s.message });
                      });
                  else if (e._reply) {
                    var n = t.replies[e._reply];
                    delete t.replies[e._reply],
                      n
                        ? e._error
                          ? (t.debugLevel >= 1 && t.logger.info("rpc #" + e._reply, "call <= !", e._error),
                            t.hook({ type: "reply", callee: n.peer, rid: e._reply, error: e._error }),
                            n.reject(new Error(e._error)))
                          : (t.debugLevel >= 2 && t.logger.info("rpc #" + e._reply, "call <= ", e._result),
                            t.hook({ type: "reply", callee: n.peer, rid: e._reply, result: e._result }),
                            n.resolve(e._result))
                        : t.logger.error("Missing reply handler");
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
        e.exports = new n();
      },
      0: (e, r, s) => {
        "use strict";
        var t;
        (r.browser = s(2)),
          (t =
            "undefined" == typeof browser && "undefined" != typeof chrome && chrome.runtime
              ? /\bOPR\//.test(navigator.userAgent)
                ? "opera"
                : "chrome"
              : /\bEdge\//.test(navigator.userAgent)
              ? "edge"
              : "firefox"),
          (r.browserType = t),
          void 0 === r.browser.action && (r.browser.action = r.browser.browserAction),
          (r.isBrowser = function () {
            for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t];
            for (var n = 0; n < s.length; n++) if (s[n] == r.browserType) return !0;
            return !1;
          }),
          (r.error = function (e) {
            console.groupCollapsed(e.message), e.stack && console.error(e.stack), console.groupEnd();
          });
      }
    },
    r = {};
  function s(t) {
    var n = r[t];
    if (void 0 !== n) return n.exports;
    var i = (r[t] = { exports: {} });
    return e[t].call(i.exports, i, i.exports, s), i.exports;
  }
  (() => {
    "use strict";
    var e = s(30),
      r = {};
    function t(e, s, t) {
      for (var g = document.querySelectorAll(e), a = 0; a < g.length && (0 == t.maxHits || a < t.maxHits); a++) {
        var m = g.item(a),
          l = null,
          A = !1;
        switch (s) {
          case "link":
            (l = m.getAttribute("href").trim()), (A = !0);
            break;
          case "image":
            m.width &&
              m.height &&
              "image" == s &&
              Math.min(m.width, m.height) >= t.minImgSize &&
              ((l = m.getAttribute("src").trim()), (A = !0));
        }
        if (A) {
          for (var c = [], u = m; u && u != document; ) c.unshift(u.nodeName.toLowerCase()), (u = u.parentNode);
          if (l) {
            var p = null;
            if (l) {
              var f = /\.([^\.]{1,5})(?:\?.*)?$/.exec(l);
              f && (p = f[1].toLowerCase());
            }
            var x = o(window.location.href + "@" + c.join("/") + "@" + p),
              d = "vdh-" + x,
              h = r[x];
            if (
              (h || (h = r[x] = { urlsMap: {}, urls: [], baseUrl: window.location.href, extensions: {}, selectorAttr: d, type: s }),
              !h.urlsMap[l])
            )
              if (
                (m.firstChild && "img" == m.firstChild.nodeName.toLowerCase() && (m = m.firstChild),
                i(m, h.selectorAttr),
                (h.urlsMap[l] = 1),
                h.urls.push(l),
                p)
              )
                h.extensions[p] ? h.extensions[p]++ : (h.extensions[p] = 1);
          } else {
            var v = n(m),
              y = o(window.location.href + "@" + v + "@scrap"),
              w = "vdh-" + y;
            i(m, w),
              (r[y] = { baseUrl: window.location.href, selectorAttr: w, selector: v, type: s, size: m.offsetWidth + "x" + m.offsetHeight });
          }
        }
      }
    }
    function n(e) {
      for (var r = []; e; ) {
        var s = e.nodeName.toLowerCase();
        if (
          (e.getAttribute && e.getAttribute("id") && (s += "#" + e.getAttribute("id")),
          1 == document.querySelectorAll(r.concat([s]).join(" > ")).length)
        ) {
          r.push(s);
          break;
        }
        for (var t = 1, n = e.prevSibling; n; ) n.nodeName == e.nodeName && t++, (n = n.prevSibling);
        if (((s += ":nth-of-type(" + t + ")"), r.push(s), 1 == document.querySelectorAll(r.concat([s]).join(" > ")).length)) break;
        e = e.parentNode;
      }
      return r.join(" > ");
    }
    function i(e, r) {
      for (var s = 0, t = 0, n = e.offsetWidth, i = e.offsetHeight; e; ) (s += e.offsetTop), (t += e.offsetLeft), (e = e.offsetParent);
      (e = document.createElement("div")).setAttribute("style", "width:" + n + "px;height:" + i + "px;top:" + s + "px;left:" + t + "px;"),
        e.setAttribute("class", "vdh-mask " + r),
        document.body.appendChild(e);
    }
    function o(e) {
      var r,
        s = 0,
        t = void 0;
      if (0 == e.length) return s;
      for (t = 0, r = e.length; t < r; t++) (s = (s << 5) - s + e.charCodeAt(t)), (s |= 0);
      return "" + Math.abs(s);
    }
    document.querySelectorAll(".vdh-mask").forEach(function (e) {
      e.remove();
    });
    var g = window._$vdhParams,
      a = [];
    g.extensions.split("|").forEach(function (e) {
      a.push("a[href$='" + e + "']"), a.push("a[href$='" + e.toUpperCase() + "']");
    }),
      g.scanLinks && t(a.join(","), "link", g),
      g.scanImages && t("img[src]", "image", g);
    var m = 0;
    for (var l in r) {
      var A = r[l];
      A.urls && A.urls.length < g.minFilesPerGroup ? delete r[l] : m++;
    }
    m > 0 && e.rpc.call("galleryGroups", { pageUrl: window.location.href, groups: r });
  })();
})();
