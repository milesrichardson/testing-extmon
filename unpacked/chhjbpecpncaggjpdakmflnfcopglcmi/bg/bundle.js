/*! For license information please see bundle.js.LICENSE.txt */
var source;
(() => {
  var e,
    t,
    n,
    r,
    i = {
      3473: (e, t) => {
        (() => {
          var e = {
              "./src/MessagingSDK.ts": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { AppType: () => w, INSTALLATION_ID_LOCAL_STORAGE_KEY: () => E, MessagingSDK: () => x });
                var r = n("./node_modules/uuid/dist/esm-browser/v4.js"),
                  i = n("./node_modules/throttle-debounce/esm/index.js"),
                  s = n("./node_modules/ua-parser-js/src/ua-parser.js"),
                  o = n("./src/utils.ts"),
                  a = n("./src/Store.ts"),
                  c = n("./node_modules/detectincognitojs/dist/detectIncognito.js"),
                  u = ["server_session_id"];
                function l(e) {
                  return (
                    (l =
                      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          }),
                    l(e)
                  );
                }
                function d(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                      (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                      })),
                      n.push.apply(n, r);
                  }
                  return n;
                }
                function h(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? d(Object(n), !0).forEach(function (t) {
                          b(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : d(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                  }
                  return e;
                }
                function f(e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    i = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                      for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                      return i;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                      (n = s[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                  }
                  return i;
                }
                function p() {
                  p = function () {
                    return e;
                  };
                  var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    i = "function" == typeof Symbol ? Symbol : {},
                    s = i.iterator || "@@iterator",
                    o = i.asyncIterator || "@@asyncIterator",
                    a = i.toStringTag || "@@toStringTag";
                  function c(e, t, n) {
                    return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
                  }
                  try {
                    c({}, "");
                  } catch (e) {
                    c = function (e, t, n) {
                      return (e[t] = n);
                    };
                  }
                  function u(e, t, n, i) {
                    var s = t && t.prototype instanceof f ? t : f,
                      o = Object.create(s.prototype),
                      a = new k(i || []);
                    return r(o, "_invoke", { value: A(e, n, a) }), o;
                  }
                  function d(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  e.wrap = u;
                  var h = {};
                  function f() {}
                  function g() {}
                  function m() {}
                  var v = {};
                  c(v, s, function () {
                    return this;
                  });
                  var b = Object.getPrototypeOf,
                    y = b && b(b(I([])));
                  y && y !== t && n.call(y, s) && (v = y);
                  var w = (m.prototype = f.prototype = Object.create(v));
                  function E(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      c(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function x(e, t) {
                    function i(r, s, o, a) {
                      var c = d(e[r], e, s);
                      if ("throw" !== c.type) {
                        var u = c.arg,
                          h = u.value;
                        return h && "object" == l(h) && n.call(h, "__await")
                          ? t.resolve(h.__await).then(
                              function (e) {
                                i("next", e, o, a);
                              },
                              function (e) {
                                i("throw", e, o, a);
                              }
                            )
                          : t.resolve(h).then(
                              function (e) {
                                (u.value = e), o(u);
                              },
                              function (e) {
                                return i("throw", e, o, a);
                              }
                            );
                      }
                      a(c.arg);
                    }
                    var s;
                    r(this, "_invoke", {
                      value: function (e, n) {
                        function r() {
                          return new t(function (t, r) {
                            i(e, n, t, r);
                          });
                        }
                        return (s = s ? s.then(r, r) : r());
                      }
                    });
                  }
                  function A(e, t, n) {
                    var r = "suspendedStart";
                    return function (i, s) {
                      if ("executing" === r) throw new Error("Generator is already running");
                      if ("completed" === r) {
                        if ("throw" === i) throw s;
                        return C();
                      }
                      for (n.method = i, n.arg = s; ; ) {
                        var o = n.delegate;
                        if (o) {
                          var a = S(o, n);
                          if (a) {
                            if (a === h) continue;
                            return a;
                          }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                          if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                          n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = d(e, t, n);
                        if ("normal" === c.type) {
                          if (((r = n.done ? "completed" : "suspendedYield"), c.arg === h)) continue;
                          return { value: c.arg, done: n.done };
                        }
                        "throw" === c.type && ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
                      }
                    };
                  }
                  function S(e, t) {
                    var n = t.method,
                      r = e.iterator[n];
                    if (void 0 === r)
                      return (
                        (t.delegate = null),
                        ("throw" === n && e.iterator.return && ((t.method = "return"), (t.arg = void 0), S(e, t), "throw" === t.method)) ||
                          ("return" !== n &&
                            ((t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                        h
                      );
                    var i = d(r, e.iterator, t.arg);
                    if ("throw" === i.type) return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), h;
                    var s = i.arg;
                    return s
                      ? s.done
                        ? ((t[e.resultName] = s.value),
                          (t.next = e.nextLoc),
                          "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
                          (t.delegate = null),
                          h)
                        : s
                      : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), h);
                  }
                  function T(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                  }
                  function _(e) {
                    var t = e.completion || {};
                    (t.type = "normal"), delete t.arg, (e.completion = t);
                  }
                  function k(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(T, this), this.reset(!0);
                  }
                  function I(e) {
                    if (e) {
                      var t = e[s];
                      if (t) return t.call(e);
                      if ("function" == typeof e.next) return e;
                      if (!isNaN(e.length)) {
                        var r = -1,
                          i = function t() {
                            for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                            return (t.value = void 0), (t.done = !0), t;
                          };
                        return (i.next = i);
                      }
                    }
                    return { next: C };
                  }
                  function C() {
                    return { value: void 0, done: !0 };
                  }
                  return (
                    (g.prototype = m),
                    r(w, "constructor", { value: m, configurable: !0 }),
                    r(m, "constructor", { value: g, configurable: !0 }),
                    (g.displayName = c(m, a, "GeneratorFunction")),
                    (e.isGeneratorFunction = function (e) {
                      var t = "function" == typeof e && e.constructor;
                      return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name));
                    }),
                    (e.mark = function (e) {
                      return (
                        Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : ((e.__proto__ = m), c(e, a, "GeneratorFunction")),
                        (e.prototype = Object.create(w)),
                        e
                      );
                    }),
                    (e.awrap = function (e) {
                      return { __await: e };
                    }),
                    E(x.prototype),
                    c(x.prototype, o, function () {
                      return this;
                    }),
                    (e.AsyncIterator = x),
                    (e.async = function (t, n, r, i, s) {
                      void 0 === s && (s = Promise);
                      var o = new x(u(t, n, r, i), s);
                      return e.isGeneratorFunction(n)
                        ? o
                        : o.next().then(function (e) {
                            return e.done ? e.value : o.next();
                          });
                    }),
                    E(w),
                    c(w, a, "Generator"),
                    c(w, s, function () {
                      return this;
                    }),
                    c(w, "toString", function () {
                      return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                          }
                          return (e.done = !0), e;
                        }
                      );
                    }),
                    (e.values = I),
                    (k.prototype = {
                      constructor: k,
                      reset: function (e) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = void 0),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = void 0),
                          this.tryEntries.forEach(_),
                          !e)
                        )
                          for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(n, r) {
                          return (o.type = "throw"), (o.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                          var s = this.tryEntries[i],
                            o = s.completion;
                          if ("root" === s.tryLoc) return r("end");
                          if (s.tryLoc <= this.prev) {
                            var a = n.call(s, "catchLoc"),
                              c = n.call(s, "finallyLoc");
                            if (a && c) {
                              if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                              if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                            } else if (a) {
                              if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                            } else {
                              if (!c) throw new Error("try statement without catch or finally");
                              if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                          var i = this.tryEntries[r];
                          if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var s = i;
                            break;
                          }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var o = s ? s.completion : {};
                        return (o.type = e), (o.arg = t), s ? ((this.method = "next"), (this.next = s.finallyLoc), h) : this.complete(o);
                      },
                      complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                          "break" === e.type || "continue" === e.type
                            ? (this.next = e.arg)
                            : "return" === e.type
                            ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                            : "normal" === e.type && t && (this.next = t),
                          h
                        );
                      },
                      finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), h;
                        }
                      },
                      catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                              var i = r.arg;
                              _(n);
                            }
                            return i;
                          }
                        }
                        throw new Error("illegal catch attempt");
                      },
                      delegateYield: function (e, t, n) {
                        return (
                          (this.delegate = { iterator: I(e), resultName: t, nextLoc: n }), "next" === this.method && (this.arg = void 0), h
                        );
                      }
                    }),
                    e
                  );
                }
                function g(e, t, n, r, i, s, o) {
                  try {
                    var a = e[s](o),
                      c = a.value;
                  } catch (e) {
                    return void n(e);
                  }
                  a.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                function m(e) {
                  return function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, i) {
                      var s = e.apply(t, n);
                      function o(e) {
                        g(s, r, i, o, a, "next", e);
                      }
                      function a(e) {
                        g(s, r, i, o, a, "throw", e);
                      }
                      o(void 0);
                    });
                  };
                }
                function v(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, y(r.key), r);
                  }
                }
                function b(e, t, n) {
                  return (
                    (t = y(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n),
                    e
                  );
                }
                function y(e) {
                  var t = (function (e, t) {
                    if ("object" !== l(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, t || "default");
                      if ("object" !== l(r)) return r;
                      throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" === l(t) ? t : String(t);
                }
                var w = (function (e) {
                    return (e.Web = "WEB"), (e.Extension = "BROWSER_EXTENSION"), (e.Lib = "LIB"), e;
                  })({}),
                  E = "RAKUTEN_INSTALLATION_ID",
                  x = (function () {
                    function e() {
                      !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                      })(this, e),
                        b(this, "config", void 0),
                        b(this, "member", void 0),
                        b(this, "messagesCounter", 0),
                        b(this, "timer", void 0),
                        b(this, "uaParser", void 0),
                        b(this, "isFlushInProgress", void 0),
                        b(this, "throttleFlush", void 0),
                        b(this, "started", !1),
                        b(this, "window", void 0),
                        b(this, "serverSessionId", void 0),
                        b(this, "store", void 0),
                        b(this, "tempMessageStore", []),
                        b(this, "clientAgent", void 0),
                        b(this, "isPrivateBrowserSession", void 0),
                        (this.store = new a.default("rakuten", "messaging-sdk")),
                        (this.sendMessagesToMessageGateway = this.sendMessagesToMessageGateway.bind(this)),
                        (this.flush = this.flush.bind(this)),
                        (this.throttleFlush = (0, i.throttle)(1e3, this.flush));
                    }
                    var t, n, l, d, g, y, x;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "init",
                          value:
                            ((x = m(
                              p().mark(function e(t) {
                                var n, r;
                                return p().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            this.setConfig(t),
                                            (this.clientAgent = ""
                                              .concat(this.config.hostApp.name, "/")
                                              .concat(this.config.hostApp.version, " (")
                                              .concat(w.Web, ") ")
                                              .concat("messaging-sdk-js", "/")
                                              .concat("1.2.1", " (")
                                              .concat(w.Lib, ")")),
                                            (this.window = (0, o.getWindow)()),
                                            (this.uaParser = new s.UAParser(
                                              null === (n = this.window) || void 0 === n || null === (r = n.navigator) || void 0 === r
                                                ? void 0
                                                : r.userAgent
                                            )),
                                            (e.next = 6),
                                            (0, c.detectIncognito)().then(function (e) {
                                              return e.isPrivate;
                                            })
                                          );
                                        case 6:
                                          (this.isPrivateBrowserSession = e.sent),
                                            (this.started = !0),
                                            this.flushTempStore(),
                                            this.throttleFlush(),
                                            this.restartTimer();
                                        case 11:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this
                                );
                              })
                            )),
                            function (e) {
                              return x.apply(this, arguments);
                            })
                        },
                        {
                          key: "setRegion",
                          value: function (e) {
                            this.config && (this.config.regionId = e);
                          }
                        },
                        {
                          key: "setMember",
                          value: function (e) {
                            if (e) {
                              var t = e.server_session_id,
                                n = f(e, u);
                              (this.member = h({}, n)), (this.serverSessionId = t);
                            }
                          }
                        },
                        {
                          key: "send",
                          value: function (e) {
                            var t = this,
                              n = this.createMessage(e);
                            this.started
                              ? this.store
                                  .set(n.id, n)
                                  .then(function () {
                                    t.messagesCounter++,
                                      t.config && t.messagesCounter >= t.regionNetworkConfig.batchSize && t.started && t.throttleFlush();
                                  })
                                  .catch(function () {
                                    t.sendMessagesToMessageGateway([n]);
                                  })
                              : this.tempMessageStore.push(n);
                          }
                        },
                        {
                          key: "setConfig",
                          value: function (e) {
                            if (!e)
                              throw new Error(
                                "Config missing when initializing MessagingSdk. Please `messagingSdkInstance.init(config)` with a valid Config"
                              );
                            if (!e.invalidMessagesHandler)
                              throw new Error(
                                "invalidMessagesHandler callback for rendering message failures must be supplied in the Config when `messagingSdkInstance.init(config)`"
                              );
                            this.config = e;
                          }
                        },
                        {
                          key: "getDefaultPageProperties",
                          value: function () {
                            var e,
                              t,
                              n,
                              r = new URL(
                                null !== (e = null === (t = this.window) || void 0 === t ? void 0 : t.location.href) && void 0 !== e
                                  ? e
                                  : ""
                              ),
                              i = (0, o.getParentPath)(r.pathname),
                              s = (0, o.getSearchParams)(),
                              a = Object.fromEntries(s);
                            return {
                              url: r.href,
                              host: r.host,
                              path: r.pathname,
                              title: null === (n = document) || void 0 === n ? void 0 : n.title,
                              parent_path: i,
                              query_params: a
                            };
                          }
                        },
                        {
                          key: "createMessage",
                          value: function (e) {
                            var t,
                              n = (0, r.default)(),
                              i = (0, o.getVisitID)(),
                              s = this.member,
                              a = e.serverContext,
                              c = this.started ? this.getClientContext(e) : null,
                              u = e.schema_id,
                              l = e.type,
                              d = e.data,
                              f = e.parentMessageId,
                              p = Intl.DateTimeFormat().resolvedOptions().timeZone,
                              g = new Date().getTime();
                            return h(
                              {
                                id: n,
                                visit_id: i,
                                member: s,
                                server_context: a,
                                client_context: c,
                                schema_id: u,
                                type: l,
                                data: d,
                                parentMessageId: f,
                                source_time_zone: p,
                                source_created_at_millis: g,
                                source_timestamp_millis:
                                  null !== (t = null == e ? void 0 : e.sourceTimestampMillis) && void 0 !== t ? t : g,
                                issuer: this.started ? this.config.hostApp : void 0,
                                region_id: this.started ? this.config.regionId : void 0
                              },
                              !this.started && { partialMessage: e }
                            );
                          }
                        },
                        {
                          key: "getClientContext",
                          value: function (e) {
                            var t, n;
                            return {
                              device: this.getDevice(),
                              experiments: null == e ? void 0 : e.experiments,
                              locale:
                                null === (t = this.window) || void 0 === t || null === (n = t.navigator) || void 0 === n
                                  ? void 0
                                  : n.language,
                              server_session_id: null == this ? void 0 : this.serverSessionId,
                              origin: this.getOrigin(e),
                              referrer: document.referrer,
                              installation_id: this.installationId
                            };
                          }
                        },
                        {
                          key: "getOrigin",
                          value: function (e) {
                            var t, n, r;
                            return {
                              app: this.config.hostApp,
                              os: (0, o.getOS)(this.uaParser),
                              user_agent:
                                null === (t = this.window) || void 0 === t || null === (n = t.navigator) || void 0 === n
                                  ? void 0
                                  : n.userAgent,
                              page: h(
                                h(
                                  h({}, null !== (r = null == e ? void 0 : e.page) && void 0 !== r ? r : {}),
                                  this.getDefaultPageProperties()
                                ),
                                {},
                                { type: this.config.page_type }
                              ),
                              screen: null == e ? void 0 : e.screen,
                              component: null == e ? void 0 : e.component,
                              is_private_browsing_enabled: this.isPrivateBrowserSession
                            };
                          }
                        },
                        {
                          key: "getDevice",
                          value: function () {
                            var e = this.uaParser.getDevice();
                            return { model: e.model, manufacturer: e.vendor, form_factor: (0, o.getDeviceType)(e.type) };
                          }
                        },
                        {
                          key: "sendMessagesToMessageGateway",
                          value:
                            ((y = m(
                              p().mark(function e(t) {
                                var n,
                                  r,
                                  i,
                                  s,
                                  a,
                                  c,
                                  u,
                                  l,
                                  d,
                                  h,
                                  f,
                                  g = this,
                                  m = arguments;
                                return p().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (n = m.length > 1 && void 0 !== m[1] ? m[1] : 0),
                                            (e.prev = 1),
                                            this.stopTimer(),
                                            (i = this.config.networkConfig[this.config.regionId].messageGatewayBaseURL),
                                            (e.next = 6),
                                            (0, o.postData)(
                                              "".concat(i, "/message/v1/regions/").concat(this.config.regionId, "/messages/batch"),
                                              { messages: t },
                                              this.clientAgent
                                            )
                                          );
                                        case 6:
                                          if (
                                            ((s = e.sent),
                                            (a =
                                              null === (r = s.headers.get("content-type")) || void 0 === r
                                                ? void 0
                                                : r.includes("application/json")),
                                            !s.ok)
                                          ) {
                                            e.next = 22;
                                            break;
                                          }
                                          if (!a) {
                                            e.next = 20;
                                            break;
                                          }
                                          if (!a) {
                                            e.next = 16;
                                            break;
                                          }
                                          return (e.next = 13), s.json();
                                        case 13:
                                          (e.t0 = e.sent), (e.next = 17);
                                          break;
                                        case 16:
                                          e.t0 = null;
                                        case 17:
                                          (u = e.t0),
                                            (l =
                                              null === (c = u.data) || void 0 === c
                                                ? void 0
                                                : c.map(function (e) {
                                                    var n,
                                                      r,
                                                      i = t.find(function (t) {
                                                        return t.id === (null == e ? void 0 : e.message_id);
                                                      });
                                                    return (
                                                      g.config.invalidMessagesHandler ||
                                                        null === (n = (r = g.config).invalidMessageHandler) ||
                                                        void 0 === n ||
                                                        n.call(r, i, e),
                                                      { message: i, messageValidationError: e }
                                                    );
                                                  })),
                                            this.config.invalidMessagesHandler(l);
                                        case 20:
                                          e.next = 27;
                                          break;
                                        case 22:
                                          (d = null == s ? void 0 : s.status),
                                            (h = s.headers.get("retry-after")),
                                            (429 === d || (d >= 500 && d < 600)) &&
                                              n < 10 &&
                                              (this.stopTimer(),
                                              (f = h ? parseInt(h, 10) : 5),
                                              setTimeout(
                                                function () {
                                                  g.sendMessagesToMessageGateway(t, n + 1), g.restartTimer();
                                                },
                                                Math.pow(2, n) * f * 1e3
                                              ));
                                        case 27:
                                          return e.abrupt("return", s);
                                        case 30:
                                          return (e.prev = 30), (e.t1 = e.catch(1)), e.abrupt("return", void 0);
                                        case 34:
                                          return (e.prev = 34), this.restartTimer(), e.finish(34);
                                        case 37:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                  [[1, 30, 34, 37]]
                                );
                              })
                            )),
                            function (e) {
                              return y.apply(this, arguments);
                            })
                        },
                        {
                          key: "restartTimer",
                          value: function () {
                            var e = this;
                            this.stopTimer(),
                              (this.timer = setInterval(function () {
                                e.throttleFlush();
                              }, this.regionNetworkConfig.lingerDuration));
                          }
                        },
                        {
                          key: "stopTimer",
                          value: function () {
                            this.timer && clearInterval(this.timer);
                          }
                        },
                        {
                          key: "flush",
                          value:
                            ((g = m(
                              p().mark(function e() {
                                var t, n;
                                return p().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (((e.prev = 0), !this.started)) {
                                            e.next = 14;
                                            break;
                                          }
                                          if (this.isFlushInProgress) {
                                            e.next = 13;
                                            break;
                                          }
                                          return (this.isFlushInProgress = !0), (e.next = 6), this.store.values();
                                        case 6:
                                          if (!((t = e.sent).length > 0)) {
                                            e.next = 13;
                                            break;
                                          }
                                          return (e.next = 10), this.sendMessagesToMessageGateway(t);
                                        case 10:
                                          (n = e.sent), this.restartTimer(), null != n && n.ok && this.removeMessagesFromStorage(t);
                                        case 13:
                                          this.isFlushInProgress = !1;
                                        case 14:
                                          e.next = 19;
                                          break;
                                        case 16:
                                          (e.prev = 16), (e.t0 = e.catch(0));
                                        case 19:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this,
                                  [[0, 16]]
                                );
                              })
                            )),
                            function () {
                              return g.apply(this, arguments);
                            })
                        },
                        {
                          key: "flushTempStore",
                          value:
                            ((d = m(
                              p().mark(function e() {
                                var t;
                                return p().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!(this.tempMessageStore.length > 0)) {
                                            e.next = 5;
                                            break;
                                          }
                                          return (
                                            (t = this.updateMessages(this.tempMessageStore)),
                                            (e.next = 4),
                                            this.sendMessagesToMessageGateway(t)
                                          );
                                        case 4:
                                          this.tempMessageStore = [];
                                        case 5:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this
                                );
                              })
                            )),
                            function () {
                              return d.apply(this, arguments);
                            })
                        },
                        {
                          key: "updateMessages",
                          value: function (e) {
                            var t = this,
                              n = [];
                            return (
                              e.forEach(function (e) {
                                var r = h(h({}, e), {}, { issuer: t.config.hostApp, member: t.member, region_id: t.config.regionId });
                                if (!r.client_context) {
                                  var i = t.getClientContext(e.partialMessage);
                                  delete r.partialMessage, (r.client_context = i);
                                }
                                n.push(r);
                              }),
                              n
                            );
                          }
                        },
                        {
                          key: "removeMessagesFromStorage",
                          value: function (e) {
                            this.messagesCounter = 0;
                            var t = e.map(function (e) {
                              return e.id;
                            });
                            this.store.delMany(t);
                          }
                        },
                        {
                          key: "regionNetworkConfig",
                          get: function () {
                            return this.config.networkConfig[this.config.regionId];
                          }
                        },
                        {
                          key: "installationId",
                          get: function () {
                            try {
                              var e = localStorage.getItem(E);
                              if (e) return e;
                              var t = (0, r.default)();
                              return (this.installationId = t), t;
                            } catch (e) {
                              return null;
                            }
                          },
                          set: function (e) {
                            try {
                              localStorage.setItem(E, e || "");
                            } catch (e) {}
                          }
                        }
                      ]),
                      n && v(t.prototype, n),
                      l && v(t, l),
                      Object.defineProperty(t, "prototype", { writable: !1 }),
                      e
                    );
                  })();
              },
              "./src/Store.ts": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => c });
                var r = n("./node_modules/idb-keyval/dist/index.js"),
                  i = n("./src/utils.ts");
                function s(e) {
                  return (
                    (s =
                      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          }),
                    s(e)
                  );
                }
                function o(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, a(r.key), r);
                  }
                }
                function a(e) {
                  var t = (function (e, t) {
                    if ("object" !== s(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, t || "default");
                      if ("object" !== s(r)) return r;
                      throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" === s(t) ? t : String(t);
                }
                var c = (function () {
                  function e(t, n) {
                    var s, o, c;
                    !(function (e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                      (s = this),
                      (c = void 0),
                      (o = a((o = "idbStore"))) in s
                        ? Object.defineProperty(s, o, { value: c, enumerable: !0, configurable: !0, writable: !0 })
                        : (s[o] = c);
                    var u = (0, i.getWindow)();
                    u && "indexedDB" in u && (this.idbStore = r.createStore(t, n));
                  }
                  var t, n, s;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "set",
                        value: function (e, t) {
                          return r.set(e, t, this.idbStore);
                        }
                      },
                      {
                        key: "values",
                        value: function () {
                          return r.values(this.idbStore);
                        }
                      },
                      {
                        key: "delMany",
                        value: function (e) {
                          return r.delMany(e, this.idbStore);
                        }
                      }
                    ]) && o(t.prototype, n),
                    s && o(t, s),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                  );
                })();
              },
              "./src/utils.ts": (e, t, n) => {
                "use strict";
                function r(e) {
                  return (
                    (r =
                      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                          }),
                    r(e)
                  );
                }
                function i() {
                  i = function () {
                    return e;
                  };
                  var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    s =
                      Object.defineProperty ||
                      function (e, t, n) {
                        e[t] = n.value;
                      },
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    c = o.asyncIterator || "@@asyncIterator",
                    u = o.toStringTag || "@@toStringTag";
                  function l(e, t, n) {
                    return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
                  }
                  try {
                    l({}, "");
                  } catch (e) {
                    l = function (e, t, n) {
                      return (e[t] = n);
                    };
                  }
                  function d(e, t, n, r) {
                    var i = t && t.prototype instanceof p ? t : p,
                      o = Object.create(i.prototype),
                      a = new k(r || []);
                    return s(o, "_invoke", { value: A(e, n, a) }), o;
                  }
                  function h(e, t, n) {
                    try {
                      return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                      return { type: "throw", arg: e };
                    }
                  }
                  e.wrap = d;
                  var f = {};
                  function p() {}
                  function g() {}
                  function m() {}
                  var v = {};
                  l(v, a, function () {
                    return this;
                  });
                  var b = Object.getPrototypeOf,
                    y = b && b(b(I([])));
                  y && y !== t && n.call(y, a) && (v = y);
                  var w = (m.prototype = p.prototype = Object.create(v));
                  function E(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                      l(e, t, function (e) {
                        return this._invoke(t, e);
                      });
                    });
                  }
                  function x(e, t) {
                    function i(s, o, a, c) {
                      var u = h(e[s], e, o);
                      if ("throw" !== u.type) {
                        var l = u.arg,
                          d = l.value;
                        return d && "object" == r(d) && n.call(d, "__await")
                          ? t.resolve(d.__await).then(
                              function (e) {
                                i("next", e, a, c);
                              },
                              function (e) {
                                i("throw", e, a, c);
                              }
                            )
                          : t.resolve(d).then(
                              function (e) {
                                (l.value = e), a(l);
                              },
                              function (e) {
                                return i("throw", e, a, c);
                              }
                            );
                      }
                      c(u.arg);
                    }
                    var o;
                    s(this, "_invoke", {
                      value: function (e, n) {
                        function r() {
                          return new t(function (t, r) {
                            i(e, n, t, r);
                          });
                        }
                        return (o = o ? o.then(r, r) : r());
                      }
                    });
                  }
                  function A(e, t, n) {
                    var r = "suspendedStart";
                    return function (i, s) {
                      if ("executing" === r) throw new Error("Generator is already running");
                      if ("completed" === r) {
                        if ("throw" === i) throw s;
                        return C();
                      }
                      for (n.method = i, n.arg = s; ; ) {
                        var o = n.delegate;
                        if (o) {
                          var a = S(o, n);
                          if (a) {
                            if (a === f) continue;
                            return a;
                          }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                          if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                          n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = h(e, t, n);
                        if ("normal" === c.type) {
                          if (((r = n.done ? "completed" : "suspendedYield"), c.arg === f)) continue;
                          return { value: c.arg, done: n.done };
                        }
                        "throw" === c.type && ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
                      }
                    };
                  }
                  function S(e, t) {
                    var n = t.method,
                      r = e.iterator[n];
                    if (void 0 === r)
                      return (
                        (t.delegate = null),
                        ("throw" === n && e.iterator.return && ((t.method = "return"), (t.arg = void 0), S(e, t), "throw" === t.method)) ||
                          ("return" !== n &&
                            ((t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
                        f
                      );
                    var i = h(r, e.iterator, t.arg);
                    if ("throw" === i.type) return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), f;
                    var s = i.arg;
                    return s
                      ? s.done
                        ? ((t[e.resultName] = s.value),
                          (t.next = e.nextLoc),
                          "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
                          (t.delegate = null),
                          f)
                        : s
                      : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), f);
                  }
                  function T(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                  }
                  function _(e) {
                    var t = e.completion || {};
                    (t.type = "normal"), delete t.arg, (e.completion = t);
                  }
                  function k(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(T, this), this.reset(!0);
                  }
                  function I(e) {
                    if (e) {
                      var t = e[a];
                      if (t) return t.call(e);
                      if ("function" == typeof e.next) return e;
                      if (!isNaN(e.length)) {
                        var r = -1,
                          i = function t() {
                            for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                            return (t.value = void 0), (t.done = !0), t;
                          };
                        return (i.next = i);
                      }
                    }
                    return { next: C };
                  }
                  function C() {
                    return { value: void 0, done: !0 };
                  }
                  return (
                    (g.prototype = m),
                    s(w, "constructor", { value: m, configurable: !0 }),
                    s(m, "constructor", { value: g, configurable: !0 }),
                    (g.displayName = l(m, u, "GeneratorFunction")),
                    (e.isGeneratorFunction = function (e) {
                      var t = "function" == typeof e && e.constructor;
                      return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name));
                    }),
                    (e.mark = function (e) {
                      return (
                        Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : ((e.__proto__ = m), l(e, u, "GeneratorFunction")),
                        (e.prototype = Object.create(w)),
                        e
                      );
                    }),
                    (e.awrap = function (e) {
                      return { __await: e };
                    }),
                    E(x.prototype),
                    l(x.prototype, c, function () {
                      return this;
                    }),
                    (e.AsyncIterator = x),
                    (e.async = function (t, n, r, i, s) {
                      void 0 === s && (s = Promise);
                      var o = new x(d(t, n, r, i), s);
                      return e.isGeneratorFunction(n)
                        ? o
                        : o.next().then(function (e) {
                            return e.done ? e.value : o.next();
                          });
                    }),
                    E(w),
                    l(w, u, "Generator"),
                    l(w, a, function () {
                      return this;
                    }),
                    l(w, "toString", function () {
                      return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                      var t = Object(e),
                        n = [];
                      for (var r in t) n.push(r);
                      return (
                        n.reverse(),
                        function e() {
                          for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                          }
                          return (e.done = !0), e;
                        }
                      );
                    }),
                    (e.values = I),
                    (k.prototype = {
                      constructor: k,
                      reset: function (e) {
                        if (
                          ((this.prev = 0),
                          (this.next = 0),
                          (this.sent = this._sent = void 0),
                          (this.done = !1),
                          (this.delegate = null),
                          (this.method = "next"),
                          (this.arg = void 0),
                          this.tryEntries.forEach(_),
                          !e)
                        )
                          for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                      },
                      stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                      },
                      dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(n, r) {
                          return (o.type = "throw"), (o.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                          var s = this.tryEntries[i],
                            o = s.completion;
                          if ("root" === s.tryLoc) return r("end");
                          if (s.tryLoc <= this.prev) {
                            var a = n.call(s, "catchLoc"),
                              c = n.call(s, "finallyLoc");
                            if (a && c) {
                              if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                              if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                            } else if (a) {
                              if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                            } else {
                              if (!c) throw new Error("try statement without catch or finally");
                              if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                            }
                          }
                        }
                      },
                      abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                          var i = this.tryEntries[r];
                          if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var s = i;
                            break;
                          }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var o = s ? s.completion : {};
                        return (o.type = e), (o.arg = t), s ? ((this.method = "next"), (this.next = s.finallyLoc), f) : this.complete(o);
                      },
                      complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                          "break" === e.type || "continue" === e.type
                            ? (this.next = e.arg)
                            : "return" === e.type
                            ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                            : "normal" === e.type && t && (this.next = t),
                          f
                        );
                      },
                      finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), f;
                        }
                      },
                      catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var n = this.tryEntries[t];
                          if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                              var i = r.arg;
                              _(n);
                            }
                            return i;
                          }
                        }
                        throw new Error("illegal catch attempt");
                      },
                      delegateYield: function (e, t, n) {
                        return (
                          (this.delegate = { iterator: I(e), resultName: t, nextLoc: n }), "next" === this.method && (this.arg = void 0), f
                        );
                      }
                    }),
                    e
                  );
                }
                function s(e, t, n, r, i, s, o) {
                  try {
                    var a = e[s](o),
                      c = a.value;
                  } catch (e) {
                    return void n(e);
                  }
                  a.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                function o(e, t) {
                  return (
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                      var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                      if (null != n) {
                        var r,
                          i,
                          s,
                          o,
                          a = [],
                          c = !0,
                          u = !1;
                        try {
                          if (((s = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            c = !1;
                          } else for (; !(c = (r = s.call(n)).done) && (a.push(r.value), a.length !== t); c = !0);
                        } catch (e) {
                          (u = !0), (i = e);
                        } finally {
                          try {
                            if (!c && null != n.return && ((o = n.return()), Object(o) !== o)) return;
                          } finally {
                            if (u) throw i;
                          }
                        }
                        return a;
                      }
                    })(e, t) ||
                    (function (e, t) {
                      if (!e) return;
                      if ("string" == typeof e) return a(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      "Object" === n && e.constructor && (n = e.constructor.name);
                      if ("Map" === n || "Set" === n) return Array.from(e);
                      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                    })(e, t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                  );
                }
                function a(e, t) {
                  (null == t || t > e.length) && (t = e.length);
                  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                  return r;
                }
                n.r(t),
                  n.d(t, {
                    DeviceType: () => c,
                    getDeviceType: () => b,
                    getOS: () => y,
                    getParentPath: () => d,
                    getSearchParams: () => m,
                    getVisitID: () => h,
                    getWindow: () => v,
                    isBrowser: () => l,
                    postData: () => p
                  });
                var c = (function (e) {
                    return (e.Mobile = "mobile"), (e.Desktop = "desktop"), (e.Tablet = "tablet"), e;
                  })({}),
                  u = "RAKUTEN_VISIT_ID";
                function l() {
                  return "undefined" != typeof window;
                }
                function d(e) {
                  var t = (function (e) {
                      return e.replace(/\/+$/, "").substring(0, e.lastIndexOf("/"));
                    })(e),
                    n = o(t.split("/"), 2)[1];
                  return n ? "/".concat(n, "/") : void 0;
                }
                function h() {
                  return l() ? localStorage.getItem(u) : null;
                }
                function f(e) {
                  throw new Error("Parameter ".concat(e, " is required"));
                }
                function p() {
                  return g.apply(this, arguments);
                }
                function g() {
                  var e;
                  return (
                    (e = i().mark(function e() {
                      var t,
                        n,
                        r,
                        s,
                        o,
                        a,
                        c,
                        u,
                        l,
                        d = arguments;
                      return i().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              for (t = d.length, n = new Array(t), r = 0; r < t; r++) n[r] = d[r];
                              return (
                                (s = n[0]),
                                (o = void 0 === s ? f("url") : s),
                                (a = n[1]),
                                (c = void 0 === a ? f("data") : a),
                                (u = n[2]),
                                (l = void 0 === u ? f("clientAgent") : u),
                                e.abrupt(
                                  "return",
                                  fetch(o, {
                                    method: "POST",
                                    mode: "cors",
                                    referrerPolicy: "no-referrer",
                                    headers: {
                                      "Content-Type": "application/json",
                                      "client-ts": new Date().getTime().toString(),
                                      "client-agent": l
                                    },
                                    body: JSON.stringify(c)
                                  })
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                    (g = function () {
                      var t = this,
                        n = arguments;
                      return new Promise(function (r, i) {
                        var o = e.apply(t, n);
                        function a(e) {
                          s(o, r, i, a, c, "next", e);
                        }
                        function c(e) {
                          s(o, r, i, a, c, "throw", e);
                        }
                        a(void 0);
                      });
                    }),
                    g.apply(this, arguments)
                  );
                }
                function m() {
                  var e = new URL(decodeURIComponent(window.location.href));
                  return new URLSearchParams(e.search);
                }
                function v() {
                  return l() ? window : void 0;
                }
                function b(e) {
                  return e === c.Mobile || e === c.Tablet ? e : c.Desktop;
                }
                function y(e) {
                  var t = e.getOS();
                  return null == t || !t.name || (null != t && t.version)
                    ? t.name && t.version
                      ? { name: t.name, version: t.version }
                      : void 0
                    : { name: t.name, version: "UNKNOWN" };
                }
              },
              "./node_modules/detectincognitojs/dist/detectIncognito.js": (e, t) => {
                "use strict";
                (t.__esModule = !0), (t.detectIncognito = void 0);
                t.detectIncognito = function () {
                  return new Promise(function (e, t) {
                    var n,
                      r,
                      i = "Unknown";
                    function s(t) {
                      e({ isPrivate: t, browserName: i });
                    }
                    function o(e) {
                      return e === eval.toString().length;
                    }
                    function a() {
                      void 0 !== navigator.maxTouchPoints
                        ? (function () {
                            var e = String(Math.random());
                            try {
                              window.indexedDB.open(e, 1).onupgradeneeded = function (t) {
                                var n,
                                  r,
                                  i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                try {
                                  i.createObjectStore("test", { autoIncrement: !0 }).put(new Blob()), s(!1);
                                } catch (e) {
                                  var o = e;
                                  return (
                                    e instanceof Error && (o = null !== (r = e.message) && void 0 !== r ? r : e),
                                    s("string" == typeof o && /BlobURLs are not yet supported/.test(o))
                                  );
                                } finally {
                                  i.close(), window.indexedDB.deleteDatabase(e);
                                }
                              };
                            } catch (e) {
                              return s(!1);
                            }
                          })()
                        : (function () {
                            var e = window.openDatabase,
                              t = window.localStorage;
                            try {
                              e(null, null, null, null);
                            } catch (e) {
                              return s(!0);
                            }
                            try {
                              t.setItem("test", "1"), t.removeItem("test");
                            } catch (e) {
                              return s(!0);
                            }
                            s(!1);
                          })();
                    }
                    function c() {
                      navigator.webkitTemporaryStorage.queryUsageAndQuota(
                        function (e, t) {
                          var n;
                          s(
                            Math.round(t / 1048576) <
                              2 *
                                Math.round(
                                  (void 0 !== (n = window).performance &&
                                  void 0 !== n.performance.memory &&
                                  void 0 !== n.performance.memory.jsHeapSizeLimit
                                    ? performance.memory.jsHeapSizeLimit
                                    : 1073741824) / 1048576
                                )
                          );
                        },
                        function (e) {
                          t(new Error("detectIncognito somehow failed to query storage quota: " + e.message));
                        }
                      );
                    }
                    function u() {
                      void 0 !== self.Promise && void 0 !== self.Promise.allSettled
                        ? c()
                        : (0, window.webkitRequestFileSystem)(
                            0,
                            1,
                            function () {
                              s(!1);
                            },
                            function () {
                              s(!0);
                            }
                          );
                    }
                    void 0 !== (r = navigator.vendor) && 0 === r.indexOf("Apple") && o(37)
                      ? ((i = "Safari"), a())
                      : (function () {
                          var e = navigator.vendor;
                          return void 0 !== e && 0 === e.indexOf("Google") && o(33);
                        })()
                      ? ((n = navigator.userAgent),
                        (i = n.match(/Chrome/)
                          ? void 0 !== navigator.brave
                            ? "Brave"
                            : n.match(/Edg/)
                            ? "Edge"
                            : n.match(/OPR/)
                            ? "Opera"
                            : "Chrome"
                          : "Chromium"),
                        u())
                      : void 0 !== document.documentElement && void 0 !== document.documentElement.style.MozAppearance && o(37)
                      ? ((i = "Firefox"), s(void 0 === navigator.serviceWorker))
                      : void 0 !== navigator.msSaveBlob && o(39)
                      ? ((i = "Internet Explorer"), s(void 0 === window.indexedDB))
                      : t(new Error("detectIncognito cannot determine the browser"));
                  });
                };
              },
              "./node_modules/ua-parser-js/src/ua-parser.js": function (e, t, n) {
                var r;
                !(function (i, s) {
                  "use strict";
                  var o = "function",
                    a = "undefined",
                    c = "object",
                    u = "string",
                    l = "major",
                    d = "model",
                    h = "name",
                    f = "type",
                    p = "vendor",
                    g = "version",
                    m = "architecture",
                    v = "console",
                    b = "mobile",
                    y = "tablet",
                    w = "smarttv",
                    E = "wearable",
                    x = "embedded",
                    A = "Amazon",
                    S = "Apple",
                    T = "ASUS",
                    _ = "BlackBerry",
                    k = "Browser",
                    I = "Chrome",
                    C = "Firefox",
                    O = "Google",
                    B = "Huawei",
                    N = "LG",
                    P = "Microsoft",
                    D = "Motorola",
                    R = "Opera",
                    M = "Samsung",
                    L = "Sharp",
                    j = "Sony",
                    U = "Xiaomi",
                    $ = "Zebra",
                    F = "Facebook",
                    q = "Chromium OS",
                    H = "Mac OS",
                    W = function (e) {
                      for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                      return t;
                    },
                    z = function (e, t) {
                      return typeof e === u && -1 !== G(t).indexOf(G(e));
                    },
                    G = function (e) {
                      return e.toLowerCase();
                    },
                    V = function (e, t) {
                      if (typeof e === u) return (e = e.replace(/^\s\s*/, "")), typeof t === a ? e : e.substring(0, 350);
                    },
                    J = function (e, t) {
                      for (var n, r, i, a, u, l, d = 0; d < t.length && !u; ) {
                        var h = t[d],
                          f = t[d + 1];
                        for (n = r = 0; n < h.length && !u && h[n]; )
                          if ((u = h[n++].exec(e)))
                            for (i = 0; i < f.length; i++)
                              (l = u[++r]),
                                typeof (a = f[i]) === c && a.length > 0
                                  ? 2 === a.length
                                    ? typeof a[1] == o
                                      ? (this[a[0]] = a[1].call(this, l))
                                      : (this[a[0]] = a[1])
                                    : 3 === a.length
                                    ? typeof a[1] !== o || (a[1].exec && a[1].test)
                                      ? (this[a[0]] = l ? l.replace(a[1], a[2]) : s)
                                      : (this[a[0]] = l ? a[1].call(this, l, a[2]) : s)
                                    : 4 === a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : s)
                                  : (this[a] = l || s);
                        d += 2;
                      }
                    },
                    K = function (e, t) {
                      for (var n in t)
                        if (typeof t[n] === c && t[n].length > 0) {
                          for (var r = 0; r < t[n].length; r++) if (z(t[n][r], e)) return "?" === n ? s : n;
                        } else if (z(t[n], e)) return "?" === n ? s : n;
                      return e;
                    },
                    Y = {
                      ME: "4.90",
                      "NT 3.11": "NT3.51",
                      "NT 4.0": "NT4.0",
                      2e3: "NT 5.0",
                      XP: ["NT 5.1", "NT 5.2"],
                      Vista: "NT 6.0",
                      7: "NT 6.1",
                      8: "NT 6.2",
                      8.1: "NT 6.3",
                      10: ["NT 6.4", "NT 10.0"],
                      RT: "ARM"
                    },
                    X = {
                      browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [g, [h, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [g, [h, "Edge"]],
                        [
                          /(opera mini)\/([-\w\.]+)/i,
                          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [h, g],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [g, [h, R + " Mini"]],
                        [/\bopr\/([\w\.]+)/i],
                        [g, [h, R]],
                        [
                          /(kindle)\/([\w\.]+)/i,
                          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                          /(?:ms|\()(ie) ([\w\.]+)/i,
                          /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                          /(heytap|ovi)browser\/([\d\.]+)/i,
                          /(weibo)__([\d\.]+)/i
                        ],
                        [h, g],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [g, [h, "UC" + k]],
                        [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                        [g, [h, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [g, [h, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [g, [h, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [g, [h, "IE"]],
                        [/ya(?:search)?browser\/([\w\.]+)/i],
                        [g, [h, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [[h, /(.+)/, "$1 Secure " + k], g],
                        [/\bfocus\/([\w\.]+)/i],
                        [g, [h, C + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [g, [h, R + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [g, [h, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [g, [h, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [g, [h, R + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [g, [h, "MIUI " + k]],
                        [/fxios\/([-\w\.]+)/i],
                        [g, [h, C]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [[h, "360 " + k]],
                        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                        [[h, /(.+)/, "$1 " + k], g],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [[h, /_/g, " "], g],
                        [
                          /(electron)\/([\w\.]+) safari/i,
                          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [h, g],
                        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                        [h],
                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                        [[h, F], g],
                        [
                          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                          /safari (line)\/([\w\.]+)/i,
                          /\b(line)\/([\w\.]+)\/iab/i,
                          /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [h, g],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [g, [h, "GSA"]],
                        [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                        [g, [h, "TikTok"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [g, [h, I + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [[h, I + " WebView"], g],
                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                        [g, [h, "Android " + k]],
                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                        [h, g],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [g, [h, "Mobile Safari"]],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [g, h],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [
                          h,
                          [
                            g,
                            K,
                            {
                              "1.0": "/8",
                              1.2: "/1",
                              1.3: "/3",
                              "2.0": "/412",
                              "2.0.2": "/416",
                              "2.0.3": "/417",
                              "2.0.4": "/419",
                              "?": "/"
                            }
                          ]
                        ],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [h, g],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [[h, "Netscape"], g],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [g, [h, C + " Reality"]],
                        [
                          /ekiohf.+(flow)\/([\w\.]+)/i,
                          /(swiftfox)/i,
                          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                          /(firefox)\/([\w\.]+)/i,
                          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                          /(links) \(([\w\.]+)/i,
                          /panasonic;(viera)/i
                        ],
                        [h, g],
                        [/(cobalt)\/([\w\.]+)/i],
                        [h, [g, /master.|lts./, ""]]
                      ],
                      cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [[m, "amd64"]],
                        [/(ia32(?=;))/i],
                        [[m, G]],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [[m, "ia32"]],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [[m, "arm64"]],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [[m, "armhf"]],
                        [/windows (ce|mobile); ppc;/i],
                        [[m, "arm"]],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [[m, /ower/, "", G]],
                        [/(sun4\w)[;\)]/i],
                        [[m, "sparc"]],
                        [
                          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [[m, G]]
                      ],
                      device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                        [d, [p, M], [f, y]],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                        [d, [p, M], [f, b]],
                        [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                        [d, [p, S], [f, b]],
                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [d, [p, S], [f, y]],
                        [/(macintosh);/i],
                        [d, [p, S]],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [d, [p, L], [f, b]],
                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                        [d, [p, B], [f, y]],
                        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                        [d, [p, B], [f, b]],
                        [
                          /\b(poco[\w ]+)(?: bui|\))/i,
                          /\b; (\w+) build\/hm\1/i,
                          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                          [d, /_/g, " "],
                          [p, U],
                          [f, b]
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                          [d, /_/g, " "],
                          [p, U],
                          [f, y]
                        ],
                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                        [d, [p, "OPPO"], [f, b]],
                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                        [d, [p, "Vivo"], [f, b]],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [d, [p, "Realme"], [f, b]],
                        [
                          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                          /\bmot(?:orola)?[- ](\w*)/i,
                          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [d, [p, D], [f, b]],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [d, [p, D], [f, y]],
                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                        [d, [p, N], [f, y]],
                        [
                          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                          /\blg-?([\d\w]+) bui/i
                        ],
                        [d, [p, N], [f, b]],
                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                        [d, [p, "Lenovo"], [f, y]],
                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                        [
                          [d, /_/g, " "],
                          [p, "Nokia"],
                          [f, b]
                        ],
                        [/(pixel c)\b/i],
                        [d, [p, O], [f, y]],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [d, [p, O], [f, b]],
                        [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [d, [p, j], [f, b]],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                          [d, "Xperia Tablet"],
                          [p, j],
                          [f, y]
                        ],
                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                        [d, [p, "OnePlus"], [f, b]],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                        [d, [p, A], [f, y]],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                          [d, /(.+)/g, "Fire Phone $1"],
                          [p, A],
                          [f, b]
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [d, p, [f, y]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [d, [p, _], [f, b]],
                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                        [d, [p, T], [f, y]],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [d, [p, T], [f, b]],
                        [/(nexus 9)/i],
                        [d, [p, "HTC"], [f, y]],
                        [
                          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [p, [d, /_/g, " "], [f, b]],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [d, [p, "Acer"], [f, y]],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [d, [p, "Meizu"], [f, b]],
                        [
                          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                          /(hp) ([\w ]+\w)/i,
                          /(asus)-?(\w+)/i,
                          /(microsoft); (lumia[\w ]+)/i,
                          /(lenovo)[-_ ]?([-\w]+)/i,
                          /(jolla)/i,
                          /(oppo) ?([\w ]+) bui/i
                        ],
                        [p, d, [f, b]],
                        [
                          /(kobo)\s(ereader|touch)/i,
                          /(archos) (gamepad2?)/i,
                          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                          /(kindle)\/([\w\.]+)/i,
                          /(nook)[\w ]+build\/(\w+)/i,
                          /(dell) (strea[kpr\d ]*[\dko])/i,
                          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                          /(trinity)[- ]*(t\d{3}) bui/i,
                          /(gigaset)[- ]+(q\w{1,9}) bui/i,
                          /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [p, d, [f, y]],
                        [/(surface duo)/i],
                        [d, [p, P], [f, y]],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [d, [p, "Fairphone"], [f, b]],
                        [/(u304aa)/i],
                        [d, [p, "AT&T"], [f, b]],
                        [/\bsie-(\w*)/i],
                        [d, [p, "Siemens"], [f, b]],
                        [/\b(rct\w+) b/i],
                        [d, [p, "RCA"], [f, y]],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [d, [p, "Dell"], [f, y]],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [d, [p, "Verizon"], [f, y]],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [d, [p, "Barnes & Noble"], [f, y]],
                        [/\b(tm\d{3}\w+) b/i],
                        [d, [p, "NuVision"], [f, y]],
                        [/\b(k88) b/i],
                        [d, [p, "ZTE"], [f, y]],
                        [/\b(nx\d{3}j) b/i],
                        [d, [p, "ZTE"], [f, b]],
                        [/\b(gen\d{3}) b.+49h/i],
                        [d, [p, "Swiss"], [f, b]],
                        [/\b(zur\d{3}) b/i],
                        [d, [p, "Swiss"], [f, y]],
                        [/\b((zeki)?tb.*\b) b/i],
                        [d, [p, "Zeki"], [f, y]],
                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                        [[p, "Dragon Touch"], d, [f, y]],
                        [/\b(ns-?\w{0,9}) b/i],
                        [d, [p, "Insignia"], [f, y]],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [d, [p, "NextBook"], [f, y]],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [[p, "Voice"], d, [f, b]],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [[p, "LvTel"], d, [f, b]],
                        [/\b(ph-1) /i],
                        [d, [p, "Essential"], [f, b]],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [d, [p, "Envizen"], [f, y]],
                        [/\b(trio[-\w\. ]+) b/i],
                        [d, [p, "MachSpeed"], [f, y]],
                        [/\btu_(1491) b/i],
                        [d, [p, "Rotor"], [f, y]],
                        [/(shield[\w ]+) b/i],
                        [d, [p, "Nvidia"], [f, y]],
                        [/(sprint) (\w+)/i],
                        [p, d, [f, b]],
                        [/(kin\.[onetw]{3})/i],
                        [
                          [d, /\./g, " "],
                          [p, P],
                          [f, b]
                        ],
                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [d, [p, $], [f, y]],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [d, [p, $], [f, b]],
                        [/smart-tv.+(samsung)/i],
                        [p, [f, w]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                          [d, /^/, "SmartTV"],
                          [p, M],
                          [f, w]
                        ],
                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                        [
                          [p, N],
                          [f, w]
                        ],
                        [/(apple) ?tv/i],
                        [p, [d, S + " TV"], [f, w]],
                        [/crkey/i],
                        [
                          [d, I + "cast"],
                          [p, O],
                          [f, w]
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [d, [p, A], [f, w]],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [d, [p, L], [f, w]],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [d, [p, j], [f, w]],
                        [/(mitv-\w{5}) bui/i],
                        [d, [p, U], [f, w]],
                        [/Hbbtv.*(technisat) (.*);/i],
                        [p, d, [f, w]],
                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                        [
                          [p, V],
                          [d, V],
                          [f, w]
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [[f, w]],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [p, d, [f, v]],
                        [/droid.+; (shield) bui/i],
                        [d, [p, "Nvidia"], [f, v]],
                        [/(playstation [345portablevi]+)/i],
                        [d, [p, j], [f, v]],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [d, [p, P], [f, v]],
                        [/((pebble))app/i],
                        [p, d, [f, E]],
                        [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                        [d, [p, S], [f, E]],
                        [/droid.+; (glass) \d/i],
                        [d, [p, O], [f, E]],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [d, [p, $], [f, E]],
                        [/(quest( 2| pro)?)/i],
                        [d, [p, F], [f, E]],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [p, [f, x]],
                        [/(aeobc)\b/i],
                        [d, [p, A], [f, x]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                        [d, [f, b]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                        [d, [f, y]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [[f, y]],
                        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                        [[f, b]],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [d, [p, "Generic"]]
                      ],
                      engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [g, [h, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [g, [h, "Blink"]],
                        [
                          /(presto)\/([\w\.]+)/i,
                          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                          /ekioh(flow)\/([\w\.]+)/i,
                          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                          /(icab)[\/ ]([23]\.[\d\.]+)/i,
                          /\b(libweb)/i
                        ],
                        [h, g],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [g, h]
                      ],
                      os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [h, g],
                        [
                          /(windows) nt 6\.2; (arm)/i,
                          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [h, [g, K, Y]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                          [h, "Windows"],
                          [g, K, Y]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                        [
                          [g, /_/g, "."],
                          [h, "iOS"]
                        ],
                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                        [
                          [h, H],
                          [g, /_/g, "."]
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [g, h],
                        [
                          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                          /(blackberry)\w*\/([\w\.]*)/i,
                          /(tizen|kaios)[\/ ]([\w\.]+)/i,
                          /\((series40);/i
                        ],
                        [h, g],
                        [/\(bb(10);/i],
                        [g, [h, _]],
                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                        [g, [h, "Symbian"]],
                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                        [g, [h, C + " OS"]],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [g, [h, "webOS"]],
                        [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                        [g, [h, "watchOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [g, [h, I + "cast"]],
                        [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                        [[h, q], g],
                        [
                          /panasonic;(viera)/i,
                          /(netrange)mmh/i,
                          /(nettv)\/(\d+\.[\w\.]+)/i,
                          /(nintendo|playstation) ([wids345portablevuch]+)/i,
                          /(xbox); +xbox ([^\);]+)/i,
                          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                          /(mint)[\/\(\) ]?(\w*)/i,
                          /(mageia|vectorlinux)[; ]/i,
                          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                          /(hurd|linux) ?([\w\.]*)/i,
                          /(gnu) ?([\w\.]*)/i,
                          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                          /(haiku) (\w+)/i
                        ],
                        [h, g],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [[h, "Solaris"], g],
                        [
                          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                          /(unix) ?([\w\.]*)/i
                        ],
                        [h, g]
                      ]
                    },
                    Z = function (e, t) {
                      if ((typeof e === c && ((t = e), (e = s)), !(this instanceof Z))) return new Z(e, t).getResult();
                      var n = typeof i !== a && i.navigator ? i.navigator : s,
                        r = e || (n && n.userAgent ? n.userAgent : ""),
                        v = n && n.userAgentData ? n.userAgentData : s,
                        w = t
                          ? (function (e, t) {
                              var n = {};
                              for (var r in e) t[r] && t[r].length % 2 == 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                              return n;
                            })(X, t)
                          : X,
                        E = n && n.userAgent == r;
                      return (
                        (this.getBrowser = function () {
                          var e,
                            t = {};
                          return (
                            (t[h] = s),
                            (t[g] = s),
                            J.call(t, r, w.browser),
                            (t[l] = typeof (e = t[g]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : s),
                            E && n && n.brave && typeof n.brave.isBrave == o && (t[h] = "Brave"),
                            t
                          );
                        }),
                        (this.getCPU = function () {
                          var e = {};
                          return (e[m] = s), J.call(e, r, w.cpu), e;
                        }),
                        (this.getDevice = function () {
                          var e = {};
                          return (
                            (e[p] = s),
                            (e[d] = s),
                            (e[f] = s),
                            J.call(e, r, w.device),
                            E && !e[f] && v && v.mobile && (e[f] = b),
                            E &&
                              "Macintosh" == e[d] &&
                              n &&
                              typeof n.standalone !== a &&
                              n.maxTouchPoints &&
                              n.maxTouchPoints > 2 &&
                              ((e[d] = "iPad"), (e[f] = y)),
                            e
                          );
                        }),
                        (this.getEngine = function () {
                          var e = {};
                          return (e[h] = s), (e[g] = s), J.call(e, r, w.engine), e;
                        }),
                        (this.getOS = function () {
                          var e = {};
                          return (
                            (e[h] = s),
                            (e[g] = s),
                            J.call(e, r, w.os),
                            E && !e[h] && v && "Unknown" != v.platform && (e[h] = v.platform.replace(/chrome os/i, q).replace(/macos/i, H)),
                            e
                          );
                        }),
                        (this.getResult = function () {
                          return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                          };
                        }),
                        (this.getUA = function () {
                          return r;
                        }),
                        (this.setUA = function (e) {
                          return (r = typeof e === u && e.length > 350 ? V(e, 350) : e), this;
                        }),
                        this.setUA(r),
                        this
                      );
                    };
                  (Z.VERSION = "1.0.35"),
                    (Z.BROWSER = W([h, g, l])),
                    (Z.CPU = W([m])),
                    (Z.DEVICE = W([d, p, f, v, b, w, y, E, x])),
                    (Z.ENGINE = Z.OS = W([h, g])),
                    typeof t !== a
                      ? (e.exports && (t = e.exports = Z), (t.UAParser = Z))
                      : n.amdO
                      ? (r = function () {
                          return Z;
                        }.call(t, n, t, e)) === s || (e.exports = r)
                      : typeof i !== a && (i.UAParser = Z);
                  var Q = typeof i !== a && (i.jQuery || i.Zepto);
                  if (Q && !Q.ua) {
                    var ee = new Z();
                    (Q.ua = ee.getResult()),
                      (Q.ua.get = function () {
                        return ee.getUA();
                      }),
                      (Q.ua.set = function (e) {
                        ee.setUA(e);
                        var t = ee.getResult();
                        for (var n in t) Q.ua[n] = t[n];
                      });
                  }
                })("object" == typeof window ? window : this);
              },
              "./node_modules/uuid/dist/esm-browser/native.js": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => r });
                const r = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
              },
              "./node_modules/uuid/dist/esm-browser/regex.js": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => r });
                const r =
                  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
              },
              "./node_modules/uuid/dist/esm-browser/rng.js": (e, t, n) => {
                "use strict";
                let r;
                n.r(t), n.d(t, { default: () => s });
                const i = new Uint8Array(16);
                function s() {
                  if (!r && ((r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !r))
                    throw new Error(
                      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                    );
                  return r(i);
                }
              },
              "./node_modules/uuid/dist/esm-browser/stringify.js": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => o, unsafeStringify: () => s });
                var r = n("./node_modules/uuid/dist/esm-browser/validate.js");
                const i = [];
                for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
                function s(e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return (
                    i[e[t + 0]] +
                    i[e[t + 1]] +
                    i[e[t + 2]] +
                    i[e[t + 3]] +
                    "-" +
                    i[e[t + 4]] +
                    i[e[t + 5]] +
                    "-" +
                    i[e[t + 6]] +
                    i[e[t + 7]] +
                    "-" +
                    i[e[t + 8]] +
                    i[e[t + 9]] +
                    "-" +
                    i[e[t + 10]] +
                    i[e[t + 11]] +
                    i[e[t + 12]] +
                    i[e[t + 13]] +
                    i[e[t + 14]] +
                    i[e[t + 15]]
                  ).toLowerCase();
                }
                const o = function (e) {
                  const t = s(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
                  if (!(0, r.default)(t)) throw TypeError("Stringified UUID is invalid");
                  return t;
                };
              },
              "./node_modules/uuid/dist/esm-browser/v4.js": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => o });
                var r = n("./node_modules/uuid/dist/esm-browser/native.js"),
                  i = n("./node_modules/uuid/dist/esm-browser/rng.js"),
                  s = n("./node_modules/uuid/dist/esm-browser/stringify.js");
                const o = function (e, t, n) {
                  if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
                  const o = (e = e || {}).random || (e.rng || i.default)();
                  if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                    return t;
                  }
                  return (0, s.unsafeStringify)(o);
                };
              },
              "./node_modules/uuid/dist/esm-browser/validate.js": (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, { default: () => i });
                var r = n("./node_modules/uuid/dist/esm-browser/regex.js");
                const i = function (e) {
                  return "string" == typeof e && r.default.test(e);
                };
              },
              "./node_modules/idb-keyval/dist/index.js": (e, t, n) => {
                "use strict";
                function r(e) {
                  return new Promise((t, n) => {
                    (e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => n(e.error));
                  });
                }
                function i(e, t) {
                  const n = indexedDB.open(e);
                  n.onupgradeneeded = () => n.result.createObjectStore(t);
                  const i = r(n);
                  return (e, n) => i.then((r) => n(r.transaction(t, e).objectStore(t)));
                }
                let s;
                function o() {
                  return s || (s = i("keyval-store", "keyval")), s;
                }
                function a(e) {
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o())("readonly", (t) => r(t.get(e)));
                }
                function c(e, t) {
                  return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o())(
                    "readwrite",
                    (n) => (n.put(t, e), r(n.transaction))
                  );
                }
                function u(e) {
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o())(
                    "readwrite",
                    (t) => (e.forEach((e) => t.put(e[1], e[0])), r(t.transaction))
                  );
                }
                function l(e) {
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o())("readonly", (t) =>
                    Promise.all(e.map((e) => r(t.get(e))))
                  );
                }
                function d(e, t) {
                  return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o())(
                    "readwrite",
                    (n) =>
                      new Promise((i, s) => {
                        n.get(e).onsuccess = function () {
                          try {
                            n.put(t(this.result), e), i(r(n.transaction));
                          } catch (e) {
                            s(e);
                          }
                        };
                      })
                  );
                }
                function h(e) {
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o())(
                    "readwrite",
                    (t) => (t.delete(e), r(t.transaction))
                  );
                }
                function f(e) {
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o())(
                    "readwrite",
                    (t) => (e.forEach((e) => t.delete(e)), r(t.transaction))
                  );
                }
                function p() {
                  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o())(
                    "readwrite",
                    (e) => (e.clear(), r(e.transaction))
                  );
                }
                function g(e, t) {
                  return (
                    (e.openCursor().onsuccess = function () {
                      this.result && (t(this.result), this.result.continue());
                    }),
                    r(e.transaction)
                  );
                }
                function m() {
                  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o())("readonly", (e) => {
                    if (e.getAllKeys) return r(e.getAllKeys());
                    const t = [];
                    return g(e, (e) => t.push(e.key)).then(() => t);
                  });
                }
                function v() {
                  return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o())("readonly", (e) => {
                    if (e.getAll) return r(e.getAll());
                    const t = [];
                    return g(e, (e) => t.push(e.value)).then(() => t);
                  });
                }
                function b() {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o();
                  return e("readonly", (t) => {
                    if (t.getAll && t.getAllKeys)
                      return Promise.all([r(t.getAllKeys()), r(t.getAll())]).then((e) => {
                        let [t, n] = e;
                        return t.map((e, t) => [e, n[t]]);
                      });
                    const n = [];
                    return e("readonly", (e) => g(e, (e) => n.push([e.key, e.value])).then(() => n));
                  });
                }
                n.r(t),
                  n.d(t, {
                    clear: () => p,
                    createStore: () => i,
                    del: () => h,
                    delMany: () => f,
                    entries: () => b,
                    get: () => a,
                    getMany: () => l,
                    keys: () => m,
                    promisifyRequest: () => r,
                    set: () => c,
                    setMany: () => u,
                    update: () => d,
                    values: () => v
                  });
              },
              "./node_modules/throttle-debounce/esm/index.js": (e, t, n) => {
                "use strict";
                function r(e, t, n) {
                  var r,
                    i = n || {},
                    s = i.noTrailing,
                    o = void 0 !== s && s,
                    a = i.noLeading,
                    c = void 0 !== a && a,
                    u = i.debounceMode,
                    l = void 0 === u ? void 0 : u,
                    d = !1,
                    h = 0;
                  function f() {
                    r && clearTimeout(r);
                  }
                  function p() {
                    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                    var a = this,
                      u = Date.now() - h;
                    function p() {
                      (h = Date.now()), t.apply(a, i);
                    }
                    function g() {
                      r = void 0;
                    }
                    d ||
                      (c || !l || r || p(),
                      f(),
                      void 0 === l && u > e
                        ? c
                          ? ((h = Date.now()), o || (r = setTimeout(l ? g : p, e)))
                          : p()
                        : !0 !== o && (r = setTimeout(l ? g : p, void 0 === l ? e - u : e)));
                  }
                  return (
                    (p.cancel = function (e) {
                      var t = (e || {}).upcomingOnly,
                        n = void 0 !== t && t;
                      f(), (d = !n);
                    }),
                    p
                  );
                }
                function i(e, t, n) {
                  var i = (n || {}).atBegin;
                  return r(e, t, { debounceMode: !1 !== (void 0 !== i && i) });
                }
                n.r(t), n.d(t, { debounce: () => i, throttle: () => r });
              }
            },
            n = {};
          function r(t) {
            var i = n[t];
            if (void 0 !== i) return i.exports;
            var s = (n[t] = { exports: {} });
            return e[t].call(s.exports, s, s.exports, r), s.exports;
          }
          (r.amdO = {}),
            (r.n = (e) => {
              var t = e && e.__esModule ? () => e.default : () => e;
              return r.d(t, { a: t }), t;
            }),
            (r.d = (e, t) => {
              for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (r.r = (e) => {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var i = {};
          (() => {
            "use strict";
            r.r(i),
              r.d(i, {
                AppType: () => e.AppType,
                INSTALLATION_ID_LOCAL_STORAGE_KEY: () => e.INSTALLATION_ID_LOCAL_STORAGE_KEY,
                MessagingSDK: () => e.MessagingSDK
              });
            var e = r("./src/MessagingSDK.ts");
          })();
          var s = t;
          for (var o in i) s[o] = i[o];
          i.__esModule && Object.defineProperty(s, "__esModule", { value: !0 });
        })();
      },
      3564: function (e, t) {
        !(function (n, r) {
          var i = {
              version: "0.4.1",
              settings: {
                currency: { symbol: "$", format: "%s%v", decimal: ".", thousand: ",", precision: 2, grouping: 3 },
                number: { precision: 0, grouping: 3, thousand: ",", decimal: "." }
              }
            },
            s = Array.prototype.map,
            o = Array.isArray,
            a = Object.prototype.toString;
          function c(e) {
            return !!("" === e || (e && e.charCodeAt && e.substr));
          }
          function u(e) {
            return o ? o(e) : "[object Array]" === a.call(e);
          }
          function l(e) {
            return e && "[object Object]" === a.call(e);
          }
          function d(e, t) {
            var n;
            for (n in ((e = e || {}), (t = t || {}))) t.hasOwnProperty(n) && null == e[n] && (e[n] = t[n]);
            return e;
          }
          function h(e, t, n) {
            var r,
              i,
              o = [];
            if (!e) return o;
            if (s && e.map === s) return e.map(t, n);
            for (r = 0, i = e.length; r < i; r++) o[r] = t.call(n, e[r], r, e);
            return o;
          }
          function f(e, t) {
            return (e = Math.round(Math.abs(e))), isNaN(e) ? t : e;
          }
          function p(e) {
            var t = i.settings.currency.format;
            return (
              "function" == typeof e && (e = e()),
              c(e) && e.match("%v")
                ? { pos: e, neg: e.replace("-", "").replace("%v", "-%v"), zero: e }
                : e && e.pos && e.pos.match("%v")
                ? e
                : c(t)
                ? (i.settings.currency.format = { pos: t, neg: t.replace("%v", "-%v"), zero: t })
                : t
            );
          }
          var g =
              (i.unformat =
              i.parse =
                function (e, t) {
                  if (u(e))
                    return h(e, function (e) {
                      return g(e, t);
                    });
                  if ("number" == typeof (e = e || 0)) return e;
                  t = t || i.settings.number.decimal;
                  var n = new RegExp("[^0-9-" + t + "]", ["g"]),
                    r = parseFloat(
                      ("" + e)
                        .replace(/\((.*)\)/, "-$1")
                        .replace(n, "")
                        .replace(t, ".")
                    );
                  return isNaN(r) ? 0 : r;
                }),
            m = (i.toFixed = function (e, t) {
              t = f(t, i.settings.number.precision);
              var n = Math.pow(10, t);
              return (Math.round(i.unformat(e) * n) / n).toFixed(t);
            }),
            v =
              (i.formatNumber =
              i.format =
                function (e, t, n, r) {
                  if (u(e))
                    return h(e, function (e) {
                      return v(e, t, n, r);
                    });
                  e = g(e);
                  var s = d(l(t) ? t : { precision: t, thousand: n, decimal: r }, i.settings.number),
                    o = f(s.precision),
                    a = e < 0 ? "-" : "",
                    c = parseInt(m(Math.abs(e || 0), o), 10) + "",
                    p = c.length > 3 ? c.length % 3 : 0;
                  return (
                    a +
                    (p ? c.substr(0, p) + s.thousand : "") +
                    c.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + s.thousand) +
                    (o ? s.decimal + m(Math.abs(e), o).split(".")[1] : "")
                  );
                }),
            b = (i.formatMoney = function (e, t, n, r, s, o) {
              if (u(e))
                return h(e, function (e) {
                  return b(e, t, n, r, s, o);
                });
              e = g(e);
              var a = d(l(t) ? t : { symbol: t, precision: n, thousand: r, decimal: s, format: o }, i.settings.currency),
                c = p(a.format);
              return (e > 0 ? c.pos : e < 0 ? c.neg : c.zero)
                .replace("%s", a.symbol)
                .replace("%v", v(Math.abs(e), f(a.precision), a.thousand, a.decimal));
            });
          (i.formatColumn = function (e, t, n, r, s, o) {
            if (!e) return [];
            var a = d(l(t) ? t : { symbol: t, precision: n, thousand: r, decimal: s, format: o }, i.settings.currency),
              m = p(a.format),
              b = m.pos.indexOf("%s") < m.pos.indexOf("%v"),
              y = 0,
              w = h(e, function (e, t) {
                if (u(e)) return i.formatColumn(e, a);
                var n = ((e = g(e)) > 0 ? m.pos : e < 0 ? m.neg : m.zero)
                  .replace("%s", a.symbol)
                  .replace("%v", v(Math.abs(e), f(a.precision), a.thousand, a.decimal));
                return n.length > y && (y = n.length), n;
              });
            return h(w, function (e, t) {
              return c(e) && e.length < y
                ? b
                  ? e.replace(a.symbol, a.symbol + new Array(y - e.length + 1).join(" "))
                  : new Array(y - e.length + 1).join(" ") + e
                : e;
            });
          }),
            e.exports && (t = e.exports = i),
            (t.accounting = i);
        })();
      },
      281: (e, t, n) => {
        var r, i, s;
        (s = ("object" == typeof self && self.self === self && self) || ("object" == typeof n.g && n.g.global === n.g && n.g)),
          (r = [n(4835), n(1271), t]),
          (i = function (e, t, n) {
            s.Backbone = (function (e, t, n, r) {
              var i = e.Backbone,
                s = Array.prototype.slice;
              (t.VERSION = "1.5.0"),
                (t.$ = r),
                (t.noConflict = function () {
                  return (e.Backbone = i), this;
                }),
                (t.emulateHTTP = !1),
                (t.emulateJSON = !1);
              var o,
                a = (t.Events = {}),
                c = /\s+/,
                u = function (e, t, r, i, s) {
                  var o,
                    a = 0;
                  if (r && "object" == typeof r) {
                    void 0 !== i && "context" in s && void 0 === s.context && (s.context = i);
                    for (o = n.keys(r); a < o.length; a++) t = u(e, t, o[a], r[o[a]], s);
                  } else if (r && c.test(r)) for (o = r.split(c); a < o.length; a++) t = e(t, o[a], i, s);
                  else t = e(t, r, i, s);
                  return t;
                };
              (a.on = function (e, t, n) {
                return (
                  (this._events = u(l, this._events || {}, e, t, { context: n, ctx: this, listening: o })),
                  o && (((this._listeners || (this._listeners = {}))[o.id] = o), (o.interop = !1)),
                  this
                );
              }),
                (a.listenTo = function (e, t, r) {
                  if (!e) return this;
                  var i = e._listenId || (e._listenId = n.uniqueId("l")),
                    s = this._listeningTo || (this._listeningTo = {}),
                    a = (o = s[i]);
                  a || (this._listenId || (this._listenId = n.uniqueId("l")), (a = o = s[i] = new m(this, e)));
                  var c = d(e, t, r, this);
                  if (((o = void 0), c)) throw c;
                  return a.interop && a.on(t, r), this;
                });
              var l = function (e, t, n, r) {
                  if (n) {
                    var i = e[t] || (e[t] = []),
                      s = r.context,
                      o = r.ctx,
                      a = r.listening;
                    a && a.count++, i.push({ callback: n, context: s, ctx: s || o, listening: a });
                  }
                  return e;
                },
                d = function (e, t, n, r) {
                  try {
                    e.on(t, n, r);
                  } catch (e) {
                    return e;
                  }
                };
              (a.off = function (e, t, n) {
                return this._events ? ((this._events = u(h, this._events, e, t, { context: n, listeners: this._listeners })), this) : this;
              }),
                (a.stopListening = function (e, t, r) {
                  var i = this._listeningTo;
                  if (!i) return this;
                  for (var s = e ? [e._listenId] : n.keys(i), o = 0; o < s.length; o++) {
                    var a = i[s[o]];
                    if (!a) break;
                    a.obj.off(t, r, this), a.interop && a.off(t, r);
                  }
                  return n.isEmpty(i) && (this._listeningTo = void 0), this;
                });
              var h = function (e, t, r, i) {
                if (e) {
                  var s,
                    o = i.context,
                    a = i.listeners,
                    c = 0;
                  if (t || o || r) {
                    for (s = t ? [t] : n.keys(e); c < s.length; c++) {
                      var u = e[(t = s[c])];
                      if (!u) break;
                      for (var l = [], d = 0; d < u.length; d++) {
                        var h = u[d];
                        if ((r && r !== h.callback && r !== h.callback._callback) || (o && o !== h.context)) l.push(h);
                        else {
                          var f = h.listening;
                          f && f.off(t, r);
                        }
                      }
                      l.length ? (e[t] = l) : delete e[t];
                    }
                    return e;
                  }
                  for (s = n.keys(a); c < s.length; c++) a[s[c]].cleanup();
                }
              };
              (a.once = function (e, t, n) {
                var r = u(f, {}, e, t, this.off.bind(this));
                return "string" == typeof e && null == n && (t = void 0), this.on(r, t, n);
              }),
                (a.listenToOnce = function (e, t, n) {
                  var r = u(f, {}, t, n, this.stopListening.bind(this, e));
                  return this.listenTo(e, r);
                });
              var f = function (e, t, r, i) {
                if (r) {
                  var s = (e[t] = n.once(function () {
                    i(t, s), r.apply(this, arguments);
                  }));
                  s._callback = r;
                }
                return e;
              };
              a.trigger = function (e) {
                if (!this._events) return this;
                for (var t = Math.max(0, arguments.length - 1), n = Array(t), r = 0; r < t; r++) n[r] = arguments[r + 1];
                return u(p, this._events, e, void 0, n), this;
              };
              var p = function (e, t, n, r) {
                  if (e) {
                    var i = e[t],
                      s = e.all;
                    i && s && (s = s.slice()), i && g(i, r), s && g(s, [t].concat(r));
                  }
                  return e;
                },
                g = function (e, t) {
                  var n,
                    r = -1,
                    i = e.length,
                    s = t[0],
                    o = t[1],
                    a = t[2];
                  switch (t.length) {
                    case 0:
                      for (; ++r < i; ) (n = e[r]).callback.call(n.ctx);
                      return;
                    case 1:
                      for (; ++r < i; ) (n = e[r]).callback.call(n.ctx, s);
                      return;
                    case 2:
                      for (; ++r < i; ) (n = e[r]).callback.call(n.ctx, s, o);
                      return;
                    case 3:
                      for (; ++r < i; ) (n = e[r]).callback.call(n.ctx, s, o, a);
                      return;
                    default:
                      for (; ++r < i; ) (n = e[r]).callback.apply(n.ctx, t);
                      return;
                  }
                },
                m = function (e, t) {
                  (this.id = e._listenId),
                    (this.listener = e),
                    (this.obj = t),
                    (this.interop = !0),
                    (this.count = 0),
                    (this._events = void 0);
                };
              (m.prototype.on = a.on),
                (m.prototype.off = function (e, t) {
                  var n;
                  this.interop
                    ? ((this._events = u(h, this._events, e, t, { context: void 0, listeners: void 0 })), (n = !this._events))
                    : (this.count--, (n = 0 === this.count)),
                    n && this.cleanup();
                }),
                (m.prototype.cleanup = function () {
                  delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
                }),
                (a.bind = a.on),
                (a.unbind = a.off),
                n.extend(t, a);
              var v = (t.Model = function (e, t) {
                var r = e || {};
                t || (t = {}),
                  this.preinitialize.apply(this, arguments),
                  (this.cid = n.uniqueId(this.cidPrefix)),
                  (this.attributes = {}),
                  t.collection && (this.collection = t.collection),
                  t.parse && (r = this.parse(r, t) || {});
                var i = n.result(this, "defaults");
                (r = n.defaults(n.extend({}, i, r), i)), this.set(r, t), (this.changed = {}), this.initialize.apply(this, arguments);
              });
              n.extend(v.prototype, a, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                cidPrefix: "c",
                preinitialize: function () {},
                initialize: function () {},
                toJSON: function (e) {
                  return n.clone(this.attributes);
                },
                sync: function () {
                  return t.sync.apply(this, arguments);
                },
                get: function (e) {
                  return this.attributes[e];
                },
                escape: function (e) {
                  return n.escape(this.get(e));
                },
                has: function (e) {
                  return null != this.get(e);
                },
                matches: function (e) {
                  return !!n.iteratee(e, this)(this.attributes);
                },
                set: function (e, t, r) {
                  if (null == e) return this;
                  var i;
                  if (("object" == typeof e ? ((i = e), (r = t)) : ((i = {})[e] = t), r || (r = {}), !this._validate(i, r))) return !1;
                  var s = r.unset,
                    o = r.silent,
                    a = [],
                    c = this._changing;
                  (this._changing = !0), c || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                  var u = this.attributes,
                    l = this.changed,
                    d = this._previousAttributes;
                  for (var h in i)
                    (t = i[h]),
                      n.isEqual(u[h], t) || a.push(h),
                      n.isEqual(d[h], t) ? delete l[h] : (l[h] = t),
                      s ? delete u[h] : (u[h] = t);
                  if (this.idAttribute in i) {
                    var f = this.id;
                    (this.id = this.get(this.idAttribute)), this.trigger("changeId", this, f, r);
                  }
                  if (!o) {
                    a.length && (this._pending = r);
                    for (var p = 0; p < a.length; p++) this.trigger("change:" + a[p], this, u[a[p]], r);
                  }
                  if (c) return this;
                  if (!o) for (; this._pending; ) (r = this._pending), (this._pending = !1), this.trigger("change", this, r);
                  return (this._pending = !1), (this._changing = !1), this;
                },
                unset: function (e, t) {
                  return this.set(e, void 0, n.extend({}, t, { unset: !0 }));
                },
                clear: function (e) {
                  var t = {};
                  for (var r in this.attributes) t[r] = void 0;
                  return this.set(t, n.extend({}, e, { unset: !0 }));
                },
                hasChanged: function (e) {
                  return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e);
                },
                changedAttributes: function (e) {
                  if (!e) return !!this.hasChanged() && n.clone(this.changed);
                  var t,
                    r = this._changing ? this._previousAttributes : this.attributes,
                    i = {};
                  for (var s in e) {
                    var o = e[s];
                    n.isEqual(r[s], o) || ((i[s] = o), (t = !0));
                  }
                  return !!t && i;
                },
                previous: function (e) {
                  return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
                },
                previousAttributes: function () {
                  return n.clone(this._previousAttributes);
                },
                fetch: function (e) {
                  e = n.extend({ parse: !0 }, e);
                  var t = this,
                    r = e.success;
                  return (
                    (e.success = function (n) {
                      var i = e.parse ? t.parse(n, e) : n;
                      if (!t.set(i, e)) return !1;
                      r && r.call(e.context, t, n, e), t.trigger("sync", t, n, e);
                    }),
                    J(this, e),
                    this.sync("read", this, e)
                  );
                },
                save: function (e, t, r) {
                  var i;
                  null == e || "object" == typeof e ? ((i = e), (r = t)) : ((i = {})[e] = t);
                  var s = (r = n.extend({ validate: !0, parse: !0 }, r)).wait;
                  if (i && !s) {
                    if (!this.set(i, r)) return !1;
                  } else if (!this._validate(i, r)) return !1;
                  var o = this,
                    a = r.success,
                    c = this.attributes;
                  (r.success = function (e) {
                    o.attributes = c;
                    var t = r.parse ? o.parse(e, r) : e;
                    if ((s && (t = n.extend({}, i, t)), t && !o.set(t, r))) return !1;
                    a && a.call(r.context, o, e, r), o.trigger("sync", o, e, r);
                  }),
                    J(this, r),
                    i && s && (this.attributes = n.extend({}, c, i));
                  var u = this.isNew() ? "create" : r.patch ? "patch" : "update";
                  "patch" !== u || r.attrs || (r.attrs = i);
                  var l = this.sync(u, this, r);
                  return (this.attributes = c), l;
                },
                destroy: function (e) {
                  e = e ? n.clone(e) : {};
                  var t = this,
                    r = e.success,
                    i = e.wait,
                    s = function () {
                      t.stopListening(), t.trigger("destroy", t, t.collection, e);
                    };
                  e.success = function (n) {
                    i && s(), r && r.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e);
                  };
                  var o = !1;
                  return this.isNew() ? n.defer(e.success) : (J(this, e), (o = this.sync("delete", this, e))), i || s(), o;
                },
                url: function () {
                  var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || V();
                  if (this.isNew()) return e;
                  var t = this.get(this.idAttribute);
                  return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
                },
                parse: function (e, t) {
                  return e;
                },
                clone: function () {
                  return new this.constructor(this.attributes);
                },
                isNew: function () {
                  return !this.has(this.idAttribute);
                },
                isValid: function (e) {
                  return this._validate({}, n.extend({}, e, { validate: !0 }));
                },
                _validate: function (e, t) {
                  if (!t.validate || !this.validate) return !0;
                  e = n.extend({}, this.attributes, e);
                  var r = (this.validationError = this.validate(e, t) || null);
                  return !r || (this.trigger("invalid", this, r, n.extend(t, { validationError: r })), !1);
                }
              });
              var b = (t.Collection = function (e, t) {
                  t || (t = {}),
                    this.preinitialize.apply(this, arguments),
                    t.model && (this.model = t.model),
                    void 0 !== t.comparator && (this.comparator = t.comparator),
                    this._reset(),
                    this.initialize.apply(this, arguments),
                    e && this.reset(e, n.extend({ silent: !0 }, t));
                }),
                y = { add: !0, remove: !0, merge: !0 },
                w = { add: !0, remove: !1 },
                E = function (e, t, n) {
                  n = Math.min(Math.max(n, 0), e.length);
                  var r,
                    i = Array(e.length - n),
                    s = t.length;
                  for (r = 0; r < i.length; r++) i[r] = e[r + n];
                  for (r = 0; r < s; r++) e[r + n] = t[r];
                  for (r = 0; r < i.length; r++) e[r + s + n] = i[r];
                };
              n.extend(b.prototype, a, {
                model: v,
                preinitialize: function () {},
                initialize: function () {},
                toJSON: function (e) {
                  return this.map(function (t) {
                    return t.toJSON(e);
                  });
                },
                sync: function () {
                  return t.sync.apply(this, arguments);
                },
                add: function (e, t) {
                  return this.set(e, n.extend({ merge: !1 }, t, w));
                },
                remove: function (e, t) {
                  t = n.extend({}, t);
                  var r = !n.isArray(e);
                  e = r ? [e] : e.slice();
                  var i = this._removeModels(e, t);
                  return (
                    !t.silent && i.length && ((t.changes = { added: [], merged: [], removed: i }), this.trigger("update", this, t)),
                    r ? i[0] : i
                  );
                },
                set: function (e, t) {
                  if (null != e) {
                    (t = n.extend({}, y, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                    var r = !n.isArray(e);
                    e = r ? [e] : e.slice();
                    var i = t.at;
                    null != i && (i = +i), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);
                    var s,
                      o,
                      a = [],
                      c = [],
                      u = [],
                      l = [],
                      d = {},
                      h = t.add,
                      f = t.merge,
                      p = t.remove,
                      g = !1,
                      m = this.comparator && null == i && !1 !== t.sort,
                      v = n.isString(this.comparator) ? this.comparator : null;
                    for (o = 0; o < e.length; o++) {
                      s = e[o];
                      var b = this.get(s);
                      if (b) {
                        if (f && s !== b) {
                          var w = this._isModel(s) ? s.attributes : s;
                          t.parse && (w = b.parse(w, t)), b.set(w, t), u.push(b), m && !g && (g = b.hasChanged(v));
                        }
                        d[b.cid] || ((d[b.cid] = !0), a.push(b)), (e[o] = b);
                      } else
                        h && (s = e[o] = this._prepareModel(s, t)) && (c.push(s), this._addReference(s, t), (d[s.cid] = !0), a.push(s));
                    }
                    if (p) {
                      for (o = 0; o < this.length; o++) d[(s = this.models[o]).cid] || l.push(s);
                      l.length && this._removeModels(l, t);
                    }
                    var x = !1,
                      A = !m && h && p;
                    if (
                      (a.length && A
                        ? ((x =
                            this.length !== a.length ||
                            n.some(this.models, function (e, t) {
                              return e !== a[t];
                            })),
                          (this.models.length = 0),
                          E(this.models, a, 0),
                          (this.length = this.models.length))
                        : c.length && (m && (g = !0), E(this.models, c, null == i ? this.length : i), (this.length = this.models.length)),
                      g && this.sort({ silent: !0 }),
                      !t.silent)
                    ) {
                      for (o = 0; o < c.length; o++) null != i && (t.index = i + o), (s = c[o]).trigger("add", s, this, t);
                      (g || x) && this.trigger("sort", this, t),
                        (c.length || l.length || u.length) &&
                          ((t.changes = { added: c, removed: l, merged: u }), this.trigger("update", this, t));
                    }
                    return r ? e[0] : e;
                  }
                },
                reset: function (e, t) {
                  t = t ? n.clone(t) : {};
                  for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], t);
                  return (
                    (t.previousModels = this.models),
                    this._reset(),
                    (e = this.add(e, n.extend({ silent: !0 }, t))),
                    t.silent || this.trigger("reset", this, t),
                    e
                  );
                },
                push: function (e, t) {
                  return this.add(e, n.extend({ at: this.length }, t));
                },
                pop: function (e) {
                  var t = this.at(this.length - 1);
                  return this.remove(t, e);
                },
                unshift: function (e, t) {
                  return this.add(e, n.extend({ at: 0 }, t));
                },
                shift: function (e) {
                  var t = this.at(0);
                  return this.remove(t, e);
                },
                slice: function () {
                  return s.apply(this.models, arguments);
                },
                get: function (e) {
                  if (null != e)
                    return (
                      this._byId[e] ||
                      this._byId[this.modelId(this._isModel(e) ? e.attributes : e, e.idAttribute)] ||
                      (e.cid && this._byId[e.cid])
                    );
                },
                has: function (e) {
                  return null != this.get(e);
                },
                at: function (e) {
                  return e < 0 && (e += this.length), this.models[e];
                },
                where: function (e, t) {
                  return this[t ? "find" : "filter"](e);
                },
                findWhere: function (e) {
                  return this.where(e, !0);
                },
                sort: function (e) {
                  var t = this.comparator;
                  if (!t) throw new Error("Cannot sort a set without a comparator");
                  e || (e = {});
                  var r = t.length;
                  return (
                    n.isFunction(t) && (t = t.bind(this)),
                    1 === r || n.isString(t) ? (this.models = this.sortBy(t)) : this.models.sort(t),
                    e.silent || this.trigger("sort", this, e),
                    this
                  );
                },
                pluck: function (e) {
                  return this.map(e + "");
                },
                fetch: function (e) {
                  var t = (e = n.extend({ parse: !0 }, e)).success,
                    r = this;
                  return (
                    (e.success = function (n) {
                      var i = e.reset ? "reset" : "set";
                      r[i](n, e), t && t.call(e.context, r, n, e), r.trigger("sync", r, n, e);
                    }),
                    J(this, e),
                    this.sync("read", this, e)
                  );
                },
                create: function (e, t) {
                  var r = (t = t ? n.clone(t) : {}).wait;
                  if (!(e = this._prepareModel(e, t))) return !1;
                  r || this.add(e, t);
                  var i = this,
                    s = t.success;
                  return (
                    (t.success = function (e, t, n) {
                      r && (e.off("error", this._forwardPristineError, this), i.add(e, n)), s && s.call(n.context, e, t, n);
                    }),
                    r && e.once("error", this._forwardPristineError, this),
                    e.save(null, t),
                    e
                  );
                },
                parse: function (e, t) {
                  return e;
                },
                clone: function () {
                  return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
                },
                modelId: function (e, t) {
                  return e[t || this.model.prototype.idAttribute || "id"];
                },
                values: function () {
                  return new A(this, S);
                },
                keys: function () {
                  return new A(this, T);
                },
                entries: function () {
                  return new A(this, _);
                },
                _reset: function () {
                  (this.length = 0), (this.models = []), (this._byId = {});
                },
                _prepareModel: function (e, t) {
                  return this._isModel(e)
                    ? (e.collection || (e.collection = this), e)
                    : (((t = t ? n.clone(t) : {}).collection = this),
                      (r = this.model.prototype ? new this.model(e, t) : this.model(e, t)).validationError
                        ? (this.trigger("invalid", this, r.validationError, t), !1)
                        : r);
                  var r;
                },
                _removeModels: function (e, t) {
                  for (var n = [], r = 0; r < e.length; r++) {
                    var i = this.get(e[r]);
                    if (i) {
                      var s = this.indexOf(i);
                      this.models.splice(s, 1), this.length--, delete this._byId[i.cid];
                      var o = this.modelId(i.attributes, i.idAttribute);
                      null != o && delete this._byId[o],
                        t.silent || ((t.index = s), i.trigger("remove", i, this, t)),
                        n.push(i),
                        this._removeReference(i, t);
                    }
                  }
                  return e.length > 0 && !t.silent && delete t.index, n;
                },
                _isModel: function (e) {
                  return e instanceof v;
                },
                _addReference: function (e, t) {
                  this._byId[e.cid] = e;
                  var n = this.modelId(e.attributes, e.idAttribute);
                  null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this);
                },
                _removeReference: function (e, t) {
                  delete this._byId[e.cid];
                  var n = this.modelId(e.attributes, e.idAttribute);
                  null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
                },
                _onModelEvent: function (e, t, n, r) {
                  if (t) {
                    if (("add" === e || "remove" === e) && n !== this) return;
                    if (("destroy" === e && this.remove(t, r), "changeId" === e)) {
                      var i = this.modelId(t.previousAttributes(), t.idAttribute),
                        s = this.modelId(t.attributes, t.idAttribute);
                      null != i && delete this._byId[i], null != s && (this._byId[s] = t);
                    }
                  }
                  this.trigger.apply(this, arguments);
                },
                _forwardPristineError: function (e, t, n) {
                  this.has(e) || this._onModelEvent("error", e, t, n);
                }
              });
              var x = "function" == typeof Symbol && Symbol.iterator;
              x && (b.prototype[x] = b.prototype.values);
              var A = function (e, t) {
                  (this._collection = e), (this._kind = t), (this._index = 0);
                },
                S = 1,
                T = 2,
                _ = 3;
              x &&
                (A.prototype[x] = function () {
                  return this;
                }),
                (A.prototype.next = function () {
                  if (this._collection) {
                    if (this._index < this._collection.length) {
                      var e,
                        t = this._collection.at(this._index);
                      if ((this._index++, this._kind === S)) e = t;
                      else {
                        var n = this._collection.modelId(t.attributes, t.idAttribute);
                        e = this._kind === T ? n : [n, t];
                      }
                      return { value: e, done: !1 };
                    }
                    this._collection = void 0;
                  }
                  return { value: void 0, done: !0 };
                });
              var k = (t.View = function (e) {
                  (this.cid = n.uniqueId("view")),
                    this.preinitialize.apply(this, arguments),
                    n.extend(this, n.pick(e, C)),
                    this._ensureElement(),
                    this.initialize.apply(this, arguments);
                }),
                I = /^(\S+)\s*(.*)$/,
                C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
              n.extend(k.prototype, a, {
                tagName: "div",
                $: function (e) {
                  return this.$el.find(e);
                },
                preinitialize: function () {},
                initialize: function () {},
                render: function () {
                  return this;
                },
                remove: function () {
                  return this._removeElement(), this.stopListening(), this;
                },
                _removeElement: function () {
                  this.$el.remove();
                },
                setElement: function (e) {
                  return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this;
                },
                _setElement: function (e) {
                  (this.$el = e instanceof t.$ ? e : t.$(e)), (this.el = this.$el[0]);
                },
                delegateEvents: function (e) {
                  if ((e || (e = n.result(this, "events")), !e)) return this;
                  for (var t in (this.undelegateEvents(), e)) {
                    var r = e[t];
                    if ((n.isFunction(r) || (r = this[r]), r)) {
                      var i = t.match(I);
                      this.delegate(i[1], i[2], r.bind(this));
                    }
                  }
                  return this;
                },
                delegate: function (e, t, n) {
                  return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this;
                },
                undelegateEvents: function () {
                  return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
                },
                undelegate: function (e, t, n) {
                  return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this;
                },
                _createElement: function (e) {
                  return document.createElement(e);
                },
                _ensureElement: function () {
                  if (this.el) this.setElement(n.result(this, "el"));
                  else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")),
                      this.className && (e.class = n.result(this, "className")),
                      this.setElement(this._createElement(n.result(this, "tagName"))),
                      this._setAttributes(e);
                  }
                },
                _setAttributes: function (e) {
                  this.$el.attr(e);
                }
              });
              var O = function (e, t, n, r) {
                  switch (t) {
                    case 1:
                      return function () {
                        return e[n](this[r]);
                      };
                    case 2:
                      return function (t) {
                        return e[n](this[r], t);
                      };
                    case 3:
                      return function (t, i) {
                        return e[n](this[r], N(t, this), i);
                      };
                    case 4:
                      return function (t, i, s) {
                        return e[n](this[r], N(t, this), i, s);
                      };
                    default:
                      return function () {
                        var t = s.call(arguments);
                        return t.unshift(this[r]), e[n].apply(e, t);
                      };
                  }
                },
                B = function (e, t, r, i) {
                  n.each(r, function (n, r) {
                    t[r] && (e.prototype[r] = O(t, n, r, i));
                  });
                },
                N = function (e, t) {
                  return n.isFunction(e)
                    ? e
                    : n.isObject(e) && !t._isModel(e)
                    ? P(e)
                    : n.isString(e)
                    ? function (t) {
                        return t.get(e);
                      }
                    : e;
                },
                P = function (e) {
                  var t = n.matches(e);
                  return function (e) {
                    return t(e.attributes);
                  };
                },
                D = {
                  forEach: 3,
                  each: 3,
                  map: 3,
                  collect: 3,
                  reduce: 0,
                  foldl: 0,
                  inject: 0,
                  reduceRight: 0,
                  foldr: 0,
                  find: 3,
                  detect: 3,
                  filter: 3,
                  select: 3,
                  reject: 3,
                  every: 3,
                  all: 3,
                  some: 3,
                  any: 3,
                  include: 3,
                  includes: 3,
                  contains: 3,
                  invoke: 0,
                  max: 3,
                  min: 3,
                  toArray: 1,
                  size: 1,
                  first: 3,
                  head: 3,
                  take: 3,
                  initial: 3,
                  rest: 3,
                  tail: 3,
                  drop: 3,
                  last: 3,
                  without: 0,
                  difference: 0,
                  indexOf: 3,
                  shuffle: 1,
                  lastIndexOf: 3,
                  isEmpty: 1,
                  chain: 1,
                  sample: 3,
                  partition: 3,
                  groupBy: 3,
                  countBy: 3,
                  sortBy: 3,
                  indexBy: 3,
                  findIndex: 3,
                  findLastIndex: 3
                },
                R = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 };
              n.each(
                [
                  [b, D, "models"],
                  [v, R, "attributes"]
                ],
                function (e) {
                  var t = e[0],
                    r = e[1],
                    i = e[2];
                  (t.mixin = function (e) {
                    var r = n.reduce(
                      n.functions(e),
                      function (e, t) {
                        return (e[t] = 0), e;
                      },
                      {}
                    );
                    B(t, e, r, i);
                  }),
                    B(t, n, r, i);
                }
              ),
                (t.sync = function (e, r, i) {
                  var s = M[e];
                  n.defaults(i || (i = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
                  var o = { type: s, dataType: "json" };
                  if (
                    (i.url || (o.url = n.result(r, "url") || V()),
                    null != i.data ||
                      !r ||
                      ("create" !== e && "update" !== e && "patch" !== e) ||
                      ((o.contentType = "application/json"), (o.data = JSON.stringify(i.attrs || r.toJSON(i)))),
                    i.emulateJSON && ((o.contentType = "application/x-www-form-urlencoded"), (o.data = o.data ? { model: o.data } : {})),
                    i.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s))
                  ) {
                    (o.type = "POST"), i.emulateJSON && (o.data._method = s);
                    var a = i.beforeSend;
                    i.beforeSend = function (e) {
                      if ((e.setRequestHeader("X-HTTP-Method-Override", s), a)) return a.apply(this, arguments);
                    };
                  }
                  "GET" === o.type || i.emulateJSON || (o.processData = !1);
                  var c = i.error;
                  i.error = function (e, t, n) {
                    (i.textStatus = t), (i.errorThrown = n), c && c.call(i.context, e, t, n);
                  };
                  var u = (i.xhr = t.ajax(n.extend(o, i)));
                  return r.trigger("request", r, u, i), u;
                });
              var M = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
              t.ajax = function () {
                return t.$.ajax.apply(t.$, arguments);
              };
              var L = (t.Router = function (e) {
                  e || (e = {}),
                    this.preinitialize.apply(this, arguments),
                    e.routes && (this.routes = e.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments);
                }),
                j = /\((.*?)\)/g,
                U = /(\(\?)?:\w+/g,
                $ = /\*\w+/g,
                F = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              n.extend(L.prototype, a, {
                preinitialize: function () {},
                initialize: function () {},
                route: function (e, r, i) {
                  n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && ((i = r), (r = "")), i || (i = this[r]);
                  var s = this;
                  return (
                    t.history.route(e, function (n) {
                      var o = s._extractParameters(e, n);
                      !1 !== s.execute(i, o, r) &&
                        (s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), t.history.trigger("route", s, r, o));
                    }),
                    this
                  );
                },
                execute: function (e, t, n) {
                  e && e.apply(this, t);
                },
                navigate: function (e, n) {
                  return t.history.navigate(e, n), this;
                },
                _bindRoutes: function () {
                  if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
                  }
                },
                _routeToRegExp: function (e) {
                  return (
                    (e = e
                      .replace(F, "\\$&")
                      .replace(j, "(?:$1)?")
                      .replace(U, function (e, t) {
                        return t ? e : "([^/?]+)";
                      })
                      .replace($, "([^?]*?)")),
                    new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                  );
                },
                _extractParameters: function (e, t) {
                  var r = e.exec(t).slice(1);
                  return n.map(r, function (e, t) {
                    return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
                  });
                }
              });
              var q = (t.History = function () {
                  (this.handlers = []),
                    (this.checkUrl = this.checkUrl.bind(this)),
                    "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                }),
                H = /^[#\/]|\s+$/g,
                W = /^\/+|\/+$/g,
                z = /#.*$/;
              (q.started = !1),
                n.extend(q.prototype, a, {
                  interval: 50,
                  atRoot: function () {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
                  },
                  matchRoot: function () {
                    return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
                  },
                  decodeFragment: function (e) {
                    return decodeURI(e.replace(/%25/g, "%2525"));
                  },
                  getSearch: function () {
                    var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                    return e ? e[0] : "";
                  },
                  getHash: function (e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : "";
                  },
                  getPath: function () {
                    var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === e.charAt(0) ? e.slice(1) : e;
                  },
                  getFragment: function (e) {
                    return (
                      null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(H, "")
                    );
                  },
                  start: function (e) {
                    if (q.started) throw new Error("Backbone.history has already been started");
                    if (
                      ((q.started = !0),
                      (this.options = n.extend({ root: "/" }, this.options, e)),
                      (this.root = this.options.root),
                      (this._trailingSlash = this.options.trailingSlash),
                      (this._wantsHashChange = !1 !== this.options.hashChange),
                      (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                      (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                      (this._wantsPushState = !!this.options.pushState),
                      (this._hasPushState = !(!this.history || !this.history.pushState)),
                      (this._usePushState = this._wantsPushState && this._hasPushState),
                      (this.fragment = this.getFragment()),
                      (this.root = ("/" + this.root + "/").replace(W, "/")),
                      this._wantsHashChange && this._wantsPushState)
                    ) {
                      if (!this._hasPushState && !this.atRoot()) {
                        var t = this.root.slice(0, -1) || "/";
                        return this.location.replace(t + "#" + this.getPath()), !0;
                      }
                      this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                    }
                    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                      (this.iframe = document.createElement("iframe")),
                        (this.iframe.src = "javascript:0"),
                        (this.iframe.style.display = "none"),
                        (this.iframe.tabIndex = -1);
                      var r = document.body,
                        i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                      i.document.open(), i.document.close(), (i.location.hash = "#" + this.fragment);
                    }
                    var s =
                      window.addEventListener ||
                      function (e, t) {
                        return attachEvent("on" + e, t);
                      };
                    if (
                      (this._usePushState
                        ? s("popstate", this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? s("hashchange", this.checkUrl, !1)
                        : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                      !this.options.silent)
                    )
                      return this.loadUrl();
                  },
                  stop: function () {
                    var e =
                      window.removeEventListener ||
                      function (e, t) {
                        return detachEvent("on" + e, t);
                      };
                    this._usePushState
                      ? e("popstate", this.checkUrl, !1)
                      : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
                      this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                      this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                      (q.started = !1);
                  },
                  route: function (e, t) {
                    this.handlers.unshift({ route: e, callback: t });
                  },
                  checkUrl: function (e) {
                    var t = this.getFragment();
                    if ((t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment))
                      return !1;
                    this.iframe && this.navigate(t), this.loadUrl();
                  },
                  loadUrl: function (e) {
                    return (
                      !!this.matchRoot() &&
                      ((e = this.fragment = this.getFragment(e)),
                      n.some(this.handlers, function (t) {
                        if (t.route.test(e)) return t.callback(e), !0;
                      }))
                    );
                  },
                  navigate: function (e, t) {
                    if (!q.started) return !1;
                    (t && !0 !== t) || (t = { trigger: !!t }), (e = this.getFragment(e || ""));
                    var n = this.root;
                    this._trailingSlash || ("" !== e && "?" !== e.charAt(0)) || (n = n.slice(0, -1) || "/");
                    var r = n + e;
                    e = e.replace(z, "");
                    var i = this.decodeFragment(e);
                    if (this.fragment !== i) {
                      if (((this.fragment = i), this._usePushState))
                        this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);
                      else {
                        if (!this._wantsHashChange) return this.location.assign(r);
                        if ((this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow))) {
                          var s = this.iframe.contentWindow;
                          t.replace || (s.document.open(), s.document.close()), this._updateHash(s.location, e, t.replace);
                        }
                      }
                      return t.trigger ? this.loadUrl(e) : void 0;
                    }
                  },
                  _updateHash: function (e, t, n) {
                    if (n) {
                      var r = e.href.replace(/(javascript:|#).*$/, "");
                      e.replace(r + "#" + t);
                    } else e.hash = "#" + t;
                  }
                }),
                (t.history = new q());
              var G = function (e, t) {
                var r,
                  i = this;
                return (
                  (r =
                    e && n.has(e, "constructor")
                      ? e.constructor
                      : function () {
                          return i.apply(this, arguments);
                        }),
                  n.extend(r, i, t),
                  (r.prototype = n.create(i.prototype, e)),
                  (r.prototype.constructor = r),
                  (r.__super__ = i.prototype),
                  r
                );
              };
              v.extend = b.extend = L.extend = k.extend = q.extend = G;
              var V = function () {
                  throw new Error('A "url" property or function must be specified');
                },
                J = function (e, t) {
                  var n = t.error;
                  t.error = function (r) {
                    n && n.call(t.context, e, r, t), e.trigger("error", e, r, t);
                  };
                };
              return t;
            })(s, n, e, t);
          }.apply(t, r)),
          void 0 === i || (e.exports = i);
      },
      1615: (e) => {
        var t = {
          utf8: {
            stringToBytes: function (e) {
              return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
            },
            bytesToString: function (e) {
              return decodeURIComponent(escape(t.bin.bytesToString(e)));
            }
          },
          bin: {
            stringToBytes: function (e) {
              for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
              return t;
            },
            bytesToString: function (e) {
              for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
              return t.join("");
            }
          }
        };
        e.exports = t;
      },
      1041: (e) => {
        var t, n;
        (t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
          (n = {
            rotl: function (e, t) {
              return (e << t) | (e >>> (32 - t));
            },
            rotr: function (e, t) {
              return (e << (32 - t)) | (e >>> t);
            },
            endian: function (e) {
              if (e.constructor == Number) return (16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24));
              for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
              return e;
            },
            randomBytes: function (e) {
              for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
              return t;
            },
            bytesToWords: function (e) {
              for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << (24 - (r % 32));
              return t;
            },
            wordsToBytes: function (e) {
              for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
              return t;
            },
            bytesToHex: function (e) {
              for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
              return t.join("");
            },
            hexToBytes: function (e) {
              for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
              return t;
            },
            bytesToBase64: function (e) {
              for (var n = [], r = 0; r < e.length; r += 3)
                for (var i = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2], s = 0; s < 4; s++)
                  8 * r + 6 * s <= 8 * e.length ? n.push(t.charAt((i >>> (6 * (3 - s))) & 63)) : n.push("=");
              return n.join("");
            },
            base64ToBytes: function (e) {
              e = e.replace(/[^A-Z0-9+\/]/gi, "");
              for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4)
                0 != i &&
                  n.push(
                    ((t.indexOf(e.charAt(r - 1)) & (Math.pow(2, -2 * i + 8) - 1)) << (2 * i)) | (t.indexOf(e.charAt(r)) >>> (6 - 2 * i))
                  );
              return n;
            }
          }),
          (e.exports = n);
      },
      7322: function (e) {
        e.exports = (function () {
          "use strict";
          var e = 1e3,
            t = 6e4,
            n = 36e5,
            r = "millisecond",
            i = "second",
            s = "minute",
            o = "hour",
            a = "day",
            c = "week",
            u = "month",
            l = "quarter",
            d = "year",
            h = "date",
            f = "Invalid Date",
            p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            m = {
              name: "en",
              weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
              months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
              ordinal: function (e) {
                var t = ["th", "st", "nd", "rd"],
                  n = e % 100;
                return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
              }
            },
            v = function (e, t, n) {
              var r = String(e);
              return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e;
            },
            b = {
              s: v,
              z: function (e) {
                var t = -e.utcOffset(),
                  n = Math.abs(t),
                  r = Math.floor(n / 60),
                  i = n % 60;
                return (t <= 0 ? "+" : "-") + v(r, 2, "0") + ":" + v(i, 2, "0");
              },
              m: function e(t, n) {
                if (t.date() < n.date()) return -e(n, t);
                var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                  i = t.clone().add(r, u),
                  s = n - i < 0,
                  o = t.clone().add(r + (s ? -1 : 1), u);
                return +(-(r + (n - i) / (s ? i - o : o - i)) || 0);
              },
              a: function (e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
              },
              p: function (e) {
                return (
                  { M: u, y: d, w: c, d: a, D: h, h: o, m: s, s: i, ms: r, Q: l }[e] ||
                  String(e || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (e) {
                return void 0 === e;
              }
            },
            y = "en",
            w = {};
          w[y] = m;
          var E = "$isDayjsObject",
            x = function (e) {
              return e instanceof _ || !(!e || !e[E]);
            },
            A = function e(t, n, r) {
              var i;
              if (!t) return y;
              if ("string" == typeof t) {
                var s = t.toLowerCase();
                w[s] && (i = s), n && ((w[s] = n), (i = s));
                var o = t.split("-");
                if (!i && o.length > 1) return e(o[0]);
              } else {
                var a = t.name;
                (w[a] = t), (i = a);
              }
              return !r && i && (y = i), i || (!r && y);
            },
            S = function (e, t) {
              if (x(e)) return e.clone();
              var n = "object" == typeof t ? t : {};
              return (n.date = e), (n.args = arguments), new _(n);
            },
            T = b;
          (T.l = A),
            (T.i = x),
            (T.w = function (e, t) {
              return S(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
            });
          var _ = (function () {
              function m(e) {
                (this.$L = A(e.locale, null, !0)), this.parse(e), (this.$x = this.$x || e.x || {}), (this[E] = !0);
              }
              var v = m.prototype;
              return (
                (v.parse = function (e) {
                  (this.$d = (function (e) {
                    var t = e.date,
                      n = e.utc;
                    if (null === t) return new Date(NaN);
                    if (T.u(t)) return new Date();
                    if (t instanceof Date) return new Date(t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                      var r = t.match(p);
                      if (r) {
                        var i = r[2] - 1 || 0,
                          s = (r[7] || "0").substring(0, 3);
                        return n
                          ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s))
                          : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                      }
                    }
                    return new Date(t);
                  })(e)),
                    this.init();
                }),
                (v.init = function () {
                  var e = this.$d;
                  (this.$y = e.getFullYear()),
                    (this.$M = e.getMonth()),
                    (this.$D = e.getDate()),
                    (this.$W = e.getDay()),
                    (this.$H = e.getHours()),
                    (this.$m = e.getMinutes()),
                    (this.$s = e.getSeconds()),
                    (this.$ms = e.getMilliseconds());
                }),
                (v.$utils = function () {
                  return T;
                }),
                (v.isValid = function () {
                  return !(this.$d.toString() === f);
                }),
                (v.isSame = function (e, t) {
                  var n = S(e);
                  return this.startOf(t) <= n && n <= this.endOf(t);
                }),
                (v.isAfter = function (e, t) {
                  return S(e) < this.startOf(t);
                }),
                (v.isBefore = function (e, t) {
                  return this.endOf(t) < S(e);
                }),
                (v.$g = function (e, t, n) {
                  return T.u(e) ? this[t] : this.set(n, e);
                }),
                (v.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (v.valueOf = function () {
                  return this.$d.getTime();
                }),
                (v.startOf = function (e, t) {
                  var n = this,
                    r = !!T.u(t) || t,
                    l = T.p(e),
                    f = function (e, t) {
                      var i = T.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                      return r ? i : i.endOf(a);
                    },
                    p = function (e, t) {
                      return T.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
                    },
                    g = this.$W,
                    m = this.$M,
                    v = this.$D,
                    b = "set" + (this.$u ? "UTC" : "");
                  switch (l) {
                    case d:
                      return r ? f(1, 0) : f(31, 11);
                    case u:
                      return r ? f(1, m) : f(0, m + 1);
                    case c:
                      var y = this.$locale().weekStart || 0,
                        w = (g < y ? g + 7 : g) - y;
                      return f(r ? v - w : v + (6 - w), m);
                    case a:
                    case h:
                      return p(b + "Hours", 0);
                    case o:
                      return p(b + "Minutes", 1);
                    case s:
                      return p(b + "Seconds", 2);
                    case i:
                      return p(b + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (v.endOf = function (e) {
                  return this.startOf(e, !1);
                }),
                (v.$set = function (e, t) {
                  var n,
                    c = T.p(e),
                    l = "set" + (this.$u ? "UTC" : ""),
                    f = ((n = {}),
                    (n[a] = l + "Date"),
                    (n[h] = l + "Date"),
                    (n[u] = l + "Month"),
                    (n[d] = l + "FullYear"),
                    (n[o] = l + "Hours"),
                    (n[s] = l + "Minutes"),
                    (n[i] = l + "Seconds"),
                    (n[r] = l + "Milliseconds"),
                    n)[c],
                    p = c === a ? this.$D + (t - this.$W) : t;
                  if (c === u || c === d) {
                    var g = this.clone().set(h, 1);
                    g.$d[f](p), g.init(), (this.$d = g.set(h, Math.min(this.$D, g.daysInMonth())).$d);
                  } else f && this.$d[f](p);
                  return this.init(), this;
                }),
                (v.set = function (e, t) {
                  return this.clone().$set(e, t);
                }),
                (v.get = function (e) {
                  return this[T.p(e)]();
                }),
                (v.add = function (r, l) {
                  var h,
                    f = this;
                  r = Number(r);
                  var p = T.p(l),
                    g = function (e) {
                      var t = S(f);
                      return T.w(t.date(t.date() + Math.round(e * r)), f);
                    };
                  if (p === u) return this.set(u, this.$M + r);
                  if (p === d) return this.set(d, this.$y + r);
                  if (p === a) return g(1);
                  if (p === c) return g(7);
                  var m = ((h = {}), (h[s] = t), (h[o] = n), (h[i] = e), h)[p] || 1,
                    v = this.$d.getTime() + r * m;
                  return T.w(v, this);
                }),
                (v.subtract = function (e, t) {
                  return this.add(-1 * e, t);
                }),
                (v.format = function (e) {
                  var t = this,
                    n = this.$locale();
                  if (!this.isValid()) return n.invalidDate || f;
                  var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                    i = T.z(this),
                    s = this.$H,
                    o = this.$m,
                    a = this.$M,
                    c = n.weekdays,
                    u = n.months,
                    l = n.meridiem,
                    d = function (e, n, i, s) {
                      return (e && (e[n] || e(t, r))) || i[n].slice(0, s);
                    },
                    h = function (e) {
                      return T.s(s % 12 || 12, e, "0");
                    },
                    p =
                      l ||
                      function (e, t, n) {
                        var r = e < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r;
                      };
                  return r.replace(g, function (e, r) {
                    return (
                      r ||
                      (function (e) {
                        switch (e) {
                          case "YY":
                            return String(t.$y).slice(-2);
                          case "YYYY":
                            return T.s(t.$y, 4, "0");
                          case "M":
                            return a + 1;
                          case "MM":
                            return T.s(a + 1, 2, "0");
                          case "MMM":
                            return d(n.monthsShort, a, u, 3);
                          case "MMMM":
                            return d(u, a);
                          case "D":
                            return t.$D;
                          case "DD":
                            return T.s(t.$D, 2, "0");
                          case "d":
                            return String(t.$W);
                          case "dd":
                            return d(n.weekdaysMin, t.$W, c, 2);
                          case "ddd":
                            return d(n.weekdaysShort, t.$W, c, 3);
                          case "dddd":
                            return c[t.$W];
                          case "H":
                            return String(s);
                          case "HH":
                            return T.s(s, 2, "0");
                          case "h":
                            return h(1);
                          case "hh":
                            return h(2);
                          case "a":
                            return p(s, o, !0);
                          case "A":
                            return p(s, o, !1);
                          case "m":
                            return String(o);
                          case "mm":
                            return T.s(o, 2, "0");
                          case "s":
                            return String(t.$s);
                          case "ss":
                            return T.s(t.$s, 2, "0");
                          case "SSS":
                            return T.s(t.$ms, 3, "0");
                          case "Z":
                            return i;
                        }
                        return null;
                      })(e) ||
                      i.replace(":", "")
                    );
                  });
                }),
                (v.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (v.diff = function (r, h, f) {
                  var p,
                    g = this,
                    m = T.p(h),
                    v = S(r),
                    b = (v.utcOffset() - this.utcOffset()) * t,
                    y = this - v,
                    w = function () {
                      return T.m(g, v);
                    };
                  switch (m) {
                    case d:
                      p = w() / 12;
                      break;
                    case u:
                      p = w();
                      break;
                    case l:
                      p = w() / 3;
                      break;
                    case c:
                      p = (y - b) / 6048e5;
                      break;
                    case a:
                      p = (y - b) / 864e5;
                      break;
                    case o:
                      p = y / n;
                      break;
                    case s:
                      p = y / t;
                      break;
                    case i:
                      p = y / e;
                      break;
                    default:
                      p = y;
                  }
                  return f ? p : T.a(p);
                }),
                (v.daysInMonth = function () {
                  return this.endOf(u).$D;
                }),
                (v.$locale = function () {
                  return w[this.$L];
                }),
                (v.locale = function (e, t) {
                  if (!e) return this.$L;
                  var n = this.clone(),
                    r = A(e, t, !0);
                  return r && (n.$L = r), n;
                }),
                (v.clone = function () {
                  return T.w(this.$d, this);
                }),
                (v.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (v.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (v.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (v.toString = function () {
                  return this.$d.toUTCString();
                }),
                m
              );
            })(),
            k = _.prototype;
          return (
            (S.prototype = k),
            [
              ["$ms", r],
              ["$s", i],
              ["$m", s],
              ["$H", o],
              ["$W", a],
              ["$M", u],
              ["$y", d],
              ["$D", h]
            ].forEach(function (e) {
              k[e[1]] = function (t) {
                return this.$g(t, e[0], e[1]);
              };
            }),
            (S.extend = function (e, t) {
              return e.$i || (e(t, _, S), (e.$i = !0)), S;
            }),
            (S.locale = A),
            (S.isDayjs = x),
            (S.unix = function (e) {
              return S(1e3 * e);
            }),
            (S.en = w[y]),
            (S.Ls = w),
            (S.p = {}),
            S
          );
        })();
      },
      5939: (e) => {
        "use strict";
        var t,
          n = "object" == typeof Reflect ? Reflect : null,
          r =
            n && "function" == typeof n.apply
              ? n.apply
              : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
                };
        t =
          n && "function" == typeof n.ownKeys
            ? n.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
        var i =
          Number.isNaN ||
          function (e) {
            return e != e;
          };
        function s() {
          s.init.call(this);
        }
        (e.exports = s),
          (e.exports.once = function (e, t) {
            return new Promise(function (n, r) {
              function i(n) {
                e.removeListener(t, s), r(n);
              }
              function s() {
                "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments));
              }
              g(e, t, s, { once: !0 }),
                "error" !== t &&
                  (function (e, t, n) {
                    "function" == typeof e.on && g(e, "error", t, n);
                  })(e, i, { once: !0 });
            });
          }),
          (s.EventEmitter = s),
          (s.prototype._events = void 0),
          (s.prototype._eventsCount = 0),
          (s.prototype._maxListeners = void 0);
        var o = 10;
        function a(e) {
          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        }
        function c(e) {
          return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
        }
        function u(e, t, n, r) {
          var i, s, o;
          if (
            (a(n),
            void 0 === (s = e._events)
              ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (s = e._events)), (o = s[t])),
            void 0 === o)
          )
            (o = s[t] = n), ++e._eventsCount;
          else if (
            ("function" == typeof o ? (o = s[t] = r ? [n, o] : [o, n]) : r ? o.unshift(n) : o.push(n),
            (i = c(e)) > 0 && o.length > i && !o.warned)
          ) {
            o.warned = !0;
            var u = new Error(
              "Possible EventEmitter memory leak detected. " +
                o.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            (u.name = "MaxListenersExceededWarning"), (u.emitter = e), (u.type = t), (u.count = o.length), console && console.warn;
          }
          return e;
        }
        function l() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            );
        }
        function d(e, t, n) {
          var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
            i = l.bind(r);
          return (i.listener = n), (r.wrapFn = i), i;
        }
        function h(e, t, n) {
          var r = e._events;
          if (void 0 === r) return [];
          var i = r[t];
          return void 0 === i
            ? []
            : "function" == typeof i
            ? n
              ? [i.listener || i]
              : [i]
            : n
            ? (function (e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t;
              })(i)
            : p(i, i.length);
        }
        function f(e) {
          var t = this._events;
          if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
          }
          return 0;
        }
        function p(e, t) {
          for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
          return n;
        }
        function g(e, t, n, r) {
          if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
          else {
            if ("function" != typeof e.addEventListener)
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, function i(s) {
              r.once && e.removeEventListener(t, i), n(s);
            });
          }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return o;
          },
          set: function (e) {
            if ("number" != typeof e || e < 0 || i(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."
              );
            o = e;
          }
        }),
          (s.init = function () {
            (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (s.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || i(e))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return (this._maxListeners = e), this;
          }),
          (s.prototype.getMaxListeners = function () {
            return c(this);
          }),
          (s.prototype.emit = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var i = "error" === e,
              s = this._events;
            if (void 0 !== s) i = i && void 0 === s.error;
            else if (!i) return !1;
            if (i) {
              var o;
              if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
              var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
              throw ((a.context = o), a);
            }
            var c = s[e];
            if (void 0 === c) return !1;
            if ("function" == typeof c) r(c, this, t);
            else {
              var u = c.length,
                l = p(c, u);
              for (n = 0; n < u; ++n) r(l[n], this, t);
            }
            return !0;
          }),
          (s.prototype.addListener = function (e, t) {
            return u(this, e, t, !1);
          }),
          (s.prototype.on = s.prototype.addListener),
          (s.prototype.prependListener = function (e, t) {
            return u(this, e, t, !0);
          }),
          (s.prototype.once = function (e, t) {
            return a(t), this.on(e, d(this, e, t)), this;
          }),
          (s.prototype.prependOnceListener = function (e, t) {
            return a(t), this.prependListener(e, d(this, e, t)), this;
          }),
          (s.prototype.removeListener = function (e, t) {
            var n, r, i, s, o;
            if ((a(t), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
              for (i = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === t || n[s].listener === t) {
                  (o = n[s].listener), (i = s);
                  break;
                }
              if (i < 0) return this;
              0 === i
                ? n.shift()
                : (function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop();
                  })(n, i),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, o || t);
            }
            return this;
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.removeAllListeners = function (e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                  : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]),
                this
              );
            if (0 === arguments.length) {
              var i,
                s = Object.keys(n);
              for (r = 0; r < s.length; ++r) "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
              return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this;
          }),
          (s.prototype.listeners = function (e) {
            return h(this, e, !0);
          }),
          (s.prototype.rawListeners = function (e) {
            return h(this, e, !1);
          }),
          (s.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t);
          }),
          (s.prototype.listenerCount = f),
          (s.prototype.eventNames = function () {
            return this._eventsCount > 0 ? t(this._events) : [];
          });
      },
      1246: (e) => {
        function t(e) {
          return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }
        e.exports = function (e) {
          return (
            null != e &&
            (t(e) ||
              (function (e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0));
              })(e) ||
              !!e._isBuffer)
          );
        };
      },
      1271: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var s = [],
            o = Object.getPrototypeOf,
            a = s.slice,
            c = s.flat
              ? function (e) {
                  return s.flat.call(e);
                }
              : function (e) {
                  return s.concat.apply([], e);
                },
            u = s.push,
            l = s.indexOf,
            d = {},
            h = d.toString,
            f = d.hasOwnProperty,
            p = f.toString,
            g = p.call(Object),
            m = {},
            v = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
            },
            b = function (e) {
              return null != e && e === e.window;
            },
            y = r.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function E(e, t, n) {
            var r,
              i,
              s = (n = n || y).createElement("script");
            if (((s.text = e), t)) for (r in w) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && s.setAttribute(r, i);
            n.head.appendChild(s).parentNode.removeChild(s);
          }
          function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e;
          }
          var A = "3.7.1",
            S = /HTML$/i,
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function _(e) {
            var t = !!e && "length" in e && e.length,
              n = x(e);
            return !v(e) && !b(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
          }
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (T.fn = T.prototype =
            {
              jquery: A,
              constructor: T,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: s.sort,
              splice: s.splice
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  s,
                  o = arguments[0] || {},
                  a = 1,
                  c = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === c && ((o = this), a--);
                  a < c;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          o !== r &&
                          (u && r && (T.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = o[t]),
                              (s = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}),
                              (i = !1),
                              (o[t] = T.extend(u, s, r)))
                            : void 0 !== r && (o[t] = r));
                return o;
              }),
            T.extend({
              expando: "jQuery" + (A + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== h.call(e)) &&
                  (!(t = o(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                E(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (_(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  r = 0,
                  i = e.nodeType;
                if (!i) for (; (t = e[r++]); ) n += T.text(t);
                return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : l.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !S.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, s = e.length, o = !n; i < s; i++) !t(e[i], i) !== o && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  s = 0,
                  o = [];
                if (_(e)) for (r = e.length; s < r; s++) null != (i = t(e[s], s, n)) && o.push(i);
                else for (s in e) null != (i = t(e[s], s, n)) && o.push(i);
                return c(o);
              },
              guid: 1,
              support: m
            }),
            "function" == typeof Symbol && (T.fn[Symbol.iterator] = s[Symbol.iterator]),
            T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            });
          var I = s.pop,
            C = s.sort,
            O = s.splice,
            B = "[\\x20\\t\\r\\n\\f]",
            N = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g");
          T.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            );
          };
          var P = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function D(e, t) {
            return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
          }
          T.escapeSelector = function (e) {
            return (e + "").replace(P, D);
          };
          var R = y,
            M = u;
          !(function () {
            var e,
              t,
              n,
              i,
              o,
              c,
              u,
              d,
              h,
              p,
              g = M,
              v = T.expando,
              b = 0,
              y = 0,
              w = ee(),
              E = ee(),
              x = ee(),
              A = ee(),
              S = function (e, t) {
                return e === t && (o = !0), 0;
              },
              _ =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              P = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              D =
                "\\[" +
                B +
                "*(" +
                P +
                ")(?:" +
                B +
                "*([*^$|!~]?=)" +
                B +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                P +
                "))|)" +
                B +
                "*\\]",
              L = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)",
              j = new RegExp(B + "+", "g"),
              U = new RegExp("^" + B + "*," + B + "*"),
              $ = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
              F = new RegExp(B + "|>"),
              q = new RegExp(L),
              H = new RegExp("^" + P + "$"),
              W = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + D),
                PSEUDO: new RegExp("^" + L),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    B +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    B +
                    "*(?:([+-]|)" +
                    B +
                    "*(\\d+)|))" +
                    B +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + _ + ")$", "i"),
                needsContext: new RegExp(
                  "^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)",
                  "i"
                )
              },
              z = /^(?:input|select|textarea|button)$/i,
              G = /^h\d$/i,
              V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              J = /[+~]/,
              K = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
              Y = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
              },
              X = function () {
                ce();
              },
              Z = he(
                function (e) {
                  return !0 === e.disabled && k(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              g.apply((s = a.call(R.childNodes)), R.childNodes), s[R.childNodes.length].nodeType;
            } catch (e) {
              g = {
                apply: function (e, t) {
                  M.apply(e, a.call(t));
                },
                call: function (e) {
                  M.apply(e, a.call(arguments, 1));
                }
              };
            }
            function Q(e, t, n, r) {
              var i,
                s,
                o,
                a,
                u,
                l,
                f,
                p = t && t.ownerDocument,
                b = t ? t.nodeType : 9;
              if (((n = n || []), "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))) return n;
              if (!r && (ce(t), (t = t || c), d)) {
                if (11 !== b && (u = V.exec(e)))
                  if ((i = u[1])) {
                    if (9 === b) {
                      if (!(o = t.getElementById(i))) return n;
                      if (o.id === i) return g.call(n, o), n;
                    } else if (p && (o = p.getElementById(i)) && Q.contains(t, o) && o.id === i) return g.call(n, o), n;
                  } else {
                    if (u[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && t.getElementsByClassName) return g.apply(n, t.getElementsByClassName(i)), n;
                  }
                if (!(A[e + " "] || (h && h.test(e)))) {
                  if (((f = e), (p = t), 1 === b && (F.test(e) || $.test(e)))) {
                    for (
                      ((p = (J.test(e) && ae(t.parentNode)) || t) == t && m.scope) ||
                        ((a = t.getAttribute("id")) ? (a = T.escapeSelector(a)) : t.setAttribute("id", (a = v))),
                        s = (l = le(e)).length;
                      s--;

                    )
                      l[s] = (a ? "#" + a : ":scope") + " " + de(l[s]);
                    f = l.join(",");
                  }
                  try {
                    return g.apply(n, p.querySelectorAll(f)), n;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    a === v && t.removeAttribute("id");
                  }
                }
              }
              return be(e.replace(N, "$1"), t, n, r);
            }
            function ee() {
              var e = [];
              return function n(r, i) {
                return e.push(r + " ") > t.cacheLength && delete n[e.shift()], (n[r + " "] = i);
              };
            }
            function te(e) {
              return (e[v] = !0), e;
            }
            function ne(e) {
              var t = c.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function re(e) {
              return function (t) {
                return k(t, "input") && t.type === e;
              };
            }
            function ie(e) {
              return function (t) {
                return (k(t, "input") || k(t, "button")) && t.type === e;
              };
            }
            function se(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e || (t.isDisabled !== !e && Z(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function oe(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, r) {
                    for (var i, s = e([], n.length, t), o = s.length; o--; ) n[(i = s[o])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ae(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function ce(e) {
              var n,
                r = e ? e.ownerDocument || e : R;
              return r != c && 9 === r.nodeType && r.documentElement
                ? ((u = (c = r).documentElement),
                  (d = !T.isXMLDoc(c)),
                  (p = u.matches || u.webkitMatchesSelector || u.msMatchesSelector),
                  u.msMatchesSelector && R != c && (n = c.defaultView) && n.top !== n && n.addEventListener("unload", X),
                  (m.getById = ne(function (e) {
                    return (u.appendChild(e).id = T.expando), !c.getElementsByName || !c.getElementsByName(T.expando).length;
                  })),
                  (m.disconnectedMatch = ne(function (e) {
                    return p.call(e, "*");
                  })),
                  (m.scope = ne(function () {
                    return c.querySelectorAll(":scope");
                  })),
                  (m.cssHas = ne(function () {
                    try {
                      return c.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  m.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(K, Y);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(K, Y);
                        return function (e) {
                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n,
                            r,
                            i,
                            s = t.getElementById(e);
                          if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (i = t.getElementsByName(e), r = 0; (s = i[r++]); )
                              if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && d) return t.getElementsByClassName(e);
                  }),
                  (h = []),
                  ne(function (e) {
                    var t;
                    (u.appendChild(e).innerHTML =
                      "<a id='" +
                      v +
                      "' href='' disabled='disabled'></a><select id='" +
                      v +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length || h.push("\\[" + B + "*(?:value|" + _ + ")"),
                      e.querySelectorAll("[id~=" + v + "-]").length || h.push("~="),
                      e.querySelectorAll("a#" + v + "+*").length || h.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length || h.push(":checked"),
                      (t = c.createElement("input")).setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      (u.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"),
                      (t = c.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length || h.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")");
                  }),
                  m.cssHas || h.push(":has"),
                  (h = h.length && new RegExp(h.join("|"))),
                  (S = function (e, t) {
                    if (e === t) return (o = !0), 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                      (!m.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === c || (e.ownerDocument == R && Q.contains(R, e))
                          ? -1
                          : t === c || (t.ownerDocument == R && Q.contains(R, t))
                          ? 1
                          : i
                          ? l.call(i, e) - l.call(i, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }),
                  c)
                : c;
            }
            for (e in ((Q.matches = function (e, t) {
              return Q(e, null, null, t);
            }),
            (Q.matchesSelector = function (e, t) {
              if ((ce(e), d && !A[t + " "] && (!h || !h.test(t))))
                try {
                  var n = p.call(e, t);
                  if (n || m.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                  A(t, !0);
                }
              return Q(t, c, null, [e]).length > 0;
            }),
            (Q.contains = function (e, t) {
              return (e.ownerDocument || e) != c && ce(e), T.contains(e, t);
            }),
            (Q.attr = function (e, n) {
              (e.ownerDocument || e) != c && ce(e);
              var r = t.attrHandle[n.toLowerCase()],
                i = r && f.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !d) : void 0;
              return void 0 !== i ? i : e.getAttribute(n);
            }),
            (Q.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (T.uniqueSort = function (e) {
              var t,
                n = [],
                r = 0,
                s = 0;
              if (((o = !m.sortStable), (i = !m.sortStable && a.call(e, 0)), C.call(e, S), o)) {
                for (; (t = e[s++]); ) t === e[s] && (r = n.push(s));
                for (; r--; ) O.call(e, n[r], 1);
              }
              return (i = null), e;
            }),
            (T.fn.uniqueSort = function () {
              return this.pushStack(T.uniqueSort(a.apply(this)));
            }),
            (t = T.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" }
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(K, Y)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(K, Y)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || Q.error(e[0]),
                          (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && Q.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return W.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            q.test(n) &&
                            (t = le(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  }
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(K, Y).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return k(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = w[e + " "];
                    return (
                      t ||
                      ((t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) &&
                        w(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = Q.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(j, " ") + " ").indexOf(n) > -1
                              : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, c) {
                          var u,
                            l,
                            d,
                            h,
                            f,
                            p = s !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !c && !a,
                            w = !1;
                          if (g) {
                            if (s) {
                              for (; p; ) {
                                for (d = t; (d = d[p]); ) if (a ? k(d, m) : 1 === d.nodeType) return !1;
                                f = p = "only" === e && !f && "nextSibling";
                              }
                              return !0;
                            }
                            if (((f = [o ? g.firstChild : g.lastChild]), o && y)) {
                              for (
                                w = (h = (u = (l = g[v] || (g[v] = {}))[e] || [])[0] === b && u[1]) && u[2], d = h && g.childNodes[h];
                                (d = (++h && d && d[p]) || (w = h = 0) || f.pop());

                              )
                                if (1 === d.nodeType && ++w && d === t) {
                                  l[e] = [b, h, w];
                                  break;
                                }
                            } else if ((y && (w = h = (u = (l = t[v] || (t[v] = {}))[e] || [])[0] === b && u[1]), !1 === w))
                              for (
                                ;
                                (d = (++h && d && d[p]) || (w = h = 0) || f.pop()) &&
                                (!(a ? k(d, m) : 1 === d.nodeType) || !++w || (y && ((l = d[v] || (d[v] = {}))[e] = [b, w]), d !== t));

                              );
                            return (w -= i) === r || (w % r == 0 && w / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var r,
                      i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Q.error("unsupported pseudo: " + e);
                    return i[v]
                      ? i(n)
                      : i.length > 1
                      ? ((r = [e, e, "", n]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var r, s = i(e, n), o = s.length; o--; ) e[(r = l.call(e, s[o]))] = !(t[r] = s[o]);
                            })
                          : function (e) {
                              return i(e, 0, r);
                            })
                      : i;
                  }
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      r = ve(e.replace(N, "$1"));
                    return r[v]
                      ? te(function (e, t, n, i) {
                          for (var s, o = r(e, null, i, []), a = e.length; a--; ) (s = o[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, i, s) {
                          return (t[0] = e), r(t, null, s, n), (t[0] = null), !n.pop();
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return Q(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(K, Y)),
                      function (t) {
                        return (t.textContent || T.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      H.test(e || "") || Q.error("unsupported lang: " + e),
                      (e = e.replace(K, Y).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if ((n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                            return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = r.location && r.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === u;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return c.activeElement;
                          } catch (e) {}
                        })() &&
                      c.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: se(!1),
                  disabled: se(!0),
                  checked: function (e) {
                    return (k(e, "input") && !!e.checked) || (k(e, "option") && !!e.selected);
                  },
                  selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return G.test(e.nodeName);
                  },
                  input: function (e) {
                    return z.test(e.nodeName);
                  },
                  button: function (e) {
                    return (k(e, "input") && "button" === e.type) || k(e, "button");
                  },
                  text: function (e) {
                    var t;
                    return k(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                  },
                  first: oe(function () {
                    return [0];
                  }),
                  last: oe(function (e, t) {
                    return [t - 1];
                  }),
                  eq: oe(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: oe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: oe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: oe(function (e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                    return e;
                  }),
                  gt: oe(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  })
                }
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = re(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = ie(e);
            function ue() {}
            function le(e, n) {
              var r,
                i,
                s,
                o,
                a,
                c,
                u,
                l = E[e + " "];
              if (l) return n ? 0 : l.slice(0);
              for (a = e, c = [], u = t.preFilter; a; ) {
                for (o in ((r && !(i = U.exec(a))) || (i && (a = a.slice(i[0].length) || a), c.push((s = []))),
                (r = !1),
                (i = $.exec(a)) && ((r = i.shift()), s.push({ value: r, type: i[0].replace(N, " ") }), (a = a.slice(r.length))),
                t.filter))
                  !(i = W[o].exec(a)) ||
                    (u[o] && !(i = u[o](i))) ||
                    ((r = i.shift()), s.push({ value: r, type: o, matches: i }), (a = a.slice(r.length)));
                if (!r) break;
              }
              return n ? a.length : a ? Q.error(e) : E(e, c).slice(0);
            }
            function de(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function he(e, t, n) {
              var r = t.dir,
                i = t.next,
                s = i || r,
                o = n && "parentNode" === s,
                a = y++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); ) if (1 === t.nodeType || o) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, c) {
                    var u,
                      l,
                      d = [b, a];
                    if (c) {
                      for (; (t = t[r]); ) if ((1 === t.nodeType || o) && e(t, n, c)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || o)
                          if (((l = t[v] || (t[v] = {})), i && k(t, i))) t = t[r] || t;
                          else {
                            if ((u = l[s]) && u[0] === b && u[1] === a) return (d[2] = u[2]);
                            if (((l[s] = d), (d[2] = e(t, n, c)))) return !0;
                          }
                    return !1;
                  };
            }
            function fe(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function pe(e, t, n, r, i) {
              for (var s, o = [], a = 0, c = e.length, u = null != t; a < c; a++)
                (s = e[a]) && ((n && !n(s, r, i)) || (o.push(s), u && t.push(a)));
              return o;
            }
            function ge(e, t, n, r, i, s) {
              return (
                r && !r[v] && (r = ge(r)),
                i && !i[v] && (i = ge(i, s)),
                te(function (s, o, a, c) {
                  var u,
                    d,
                    h,
                    f,
                    p = [],
                    m = [],
                    v = o.length,
                    b =
                      s ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) Q(e, t[r], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || (!s && t) ? b : pe(b, p, e, a, c);
                  if ((n ? n(y, (f = i || (s ? e : v || r) ? [] : o), a, c) : (f = y), r))
                    for (u = pe(f, m), r(u, [], a, c), d = u.length; d--; ) (h = u[d]) && (f[m[d]] = !(y[m[d]] = h));
                  if (s) {
                    if (i || e) {
                      if (i) {
                        for (u = [], d = f.length; d--; ) (h = f[d]) && u.push((y[d] = h));
                        i(null, (f = []), u, c);
                      }
                      for (d = f.length; d--; ) (h = f[d]) && (u = i ? l.call(s, h) : p[d]) > -1 && (s[u] = !(o[u] = h));
                    }
                  } else (f = pe(f === o ? f.splice(v, f.length) : f)), i ? i(null, o, f, c) : g.apply(o, f);
                })
              );
            }
            function me(e) {
              for (
                var r,
                  i,
                  s,
                  o = e.length,
                  a = t.relative[e[0].type],
                  c = a || t.relative[" "],
                  u = a ? 1 : 0,
                  d = he(
                    function (e) {
                      return e === r;
                    },
                    c,
                    !0
                  ),
                  h = he(
                    function (e) {
                      return l.call(r, e) > -1;
                    },
                    c,
                    !0
                  ),
                  f = [
                    function (e, t, i) {
                      var s = (!a && (i || t != n)) || ((r = t).nodeType ? d(e, t, i) : h(e, t, i));
                      return (r = null), s;
                    }
                  ];
                u < o;
                u++
              )
                if ((i = t.relative[e[u].type])) f = [he(fe(f), i)];
                else {
                  if ((i = t.filter[e[u].type].apply(null, e[u].matches))[v]) {
                    for (s = ++u; s < o && !t.relative[e[s].type]; s++);
                    return ge(
                      u > 1 && fe(f),
                      u > 1 && de(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(N, "$1"),
                      i,
                      u < s && me(e.slice(u, s)),
                      s < o && me((e = e.slice(s))),
                      s < o && de(e)
                    );
                  }
                  f.push(i);
                }
              return fe(f);
            }
            function ve(e, r) {
              var i,
                s = [],
                o = [],
                a = x[e + " "];
              if (!a) {
                for (r || (r = le(e)), i = r.length; i--; ) (a = me(r[i]))[v] ? s.push(a) : o.push(a);
                (a = x(
                  e,
                  (function (e, r) {
                    var i = r.length > 0,
                      s = e.length > 0,
                      o = function (o, a, u, l, h) {
                        var f,
                          p,
                          m,
                          v = 0,
                          y = "0",
                          w = o && [],
                          E = [],
                          x = n,
                          A = o || (s && t.find.TAG("*", h)),
                          S = (b += null == x ? 1 : Math.random() || 0.1),
                          _ = A.length;
                        for (h && (n = a == c || a || h); y !== _ && null != (f = A[y]); y++) {
                          if (s && f) {
                            for (p = 0, a || f.ownerDocument == c || (ce(f), (u = !d)); (m = e[p++]); )
                              if (m(f, a || c, u)) {
                                g.call(l, f);
                                break;
                              }
                            h && (b = S);
                          }
                          i && ((f = !m && f) && v--, o && w.push(f));
                        }
                        if (((v += y), i && y !== v)) {
                          for (p = 0; (m = r[p++]); ) m(w, E, a, u);
                          if (o) {
                            if (v > 0) for (; y--; ) w[y] || E[y] || (E[y] = I.call(l));
                            E = pe(E);
                          }
                          g.apply(l, E), h && !o && E.length > 0 && v + r.length > 1 && T.uniqueSort(l);
                        }
                        return h && ((b = S), (n = x)), w;
                      };
                    return i ? te(o) : o;
                  })(o, s)
                )),
                  (a.selector = e);
              }
              return a;
            }
            function be(e, n, r, i) {
              var s,
                o,
                a,
                c,
                u,
                l = "function" == typeof e && e,
                h = !i && le((e = l.selector || e));
              if (((r = r || []), 1 === h.length)) {
                if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === n.nodeType && d && t.relative[o[1].type]) {
                  if (!(n = (t.find.ID(a.matches[0].replace(K, Y), n) || [])[0])) return r;
                  l && (n = n.parentNode), (e = e.slice(o.shift().value.length));
                }
                for (s = W.needsContext.test(e) ? 0 : o.length; s-- && ((a = o[s]), !t.relative[(c = a.type)]); )
                  if ((u = t.find[c]) && (i = u(a.matches[0].replace(K, Y), (J.test(o[0].type) && ae(n.parentNode)) || n))) {
                    if ((o.splice(s, 1), !(e = i.length && de(o)))) return g.apply(r, i), r;
                    break;
                  }
              }
              return (l || ve(e, h))(i, n, !d, r, !n || (J.test(e) && ae(n.parentNode)) || n), r;
            }
            (ue.prototype = t.filters = t.pseudos),
              (t.setFilters = new ue()),
              (m.sortStable = v.split("").sort(S).join("") === v),
              ce(),
              (m.sortDetached = ne(function (e) {
                return 1 & e.compareDocumentPosition(c.createElement("fieldset"));
              })),
              (T.find = Q),
              (T.expr[":"] = T.expr.pseudos),
              (T.unique = T.uniqueSort),
              (Q.compile = ve),
              (Q.select = be),
              (Q.setDocument = ce),
              (Q.tokenize = le),
              (Q.escape = T.escapeSelector),
              (Q.getText = T.text),
              (Q.isXML = T.isXMLDoc),
              (Q.selectors = T.expr),
              (Q.support = T.support),
              (Q.uniqueSort = T.uniqueSort);
          })();
          var L = function (e, t, n) {
              for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                  if (i && T(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            j = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            U = T.expr.match.needsContext,
            $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function F(e, t, n) {
            return v(t)
              ? T.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return l.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? T.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
                return r > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(F(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(F(this, e || [], !0));
              },
              is: function (e) {
                return !!F(this, "string" == typeof e && U.test(e) ? T(e) : e || [], !1).length;
              }
            });
          var q,
            H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || q), "string" == typeof e)) {
              if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || (!r[1] && t))
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)),
                  $.test(r[1]) && T.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (i = y.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (q = T(y));
          var W = /^(?:parents|prev(?:Until|All))/,
            z = { children: !0, contents: !0, next: !0, prev: !0 };
          function G(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                s = [],
                o = "string" != typeof e && T(e);
              if (!U.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                      s.push(n);
                      break;
                    }
              return this.pushStack(s.length > 1 ? T.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? l.call(T(e), this[0])
                  : l.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return L(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return L(e, "parentNode", n);
                },
                next: function (e) {
                  return G(e, "nextSibling");
                },
                prev: function (e) {
                  return G(e, "previousSibling");
                },
                nextAll: function (e) {
                  return L(e, "nextSibling");
                },
                prevAll: function (e) {
                  return L(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return L(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return L(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return j((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return j(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (k(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
                }
              },
              function (e, t) {
                T.fn[e] = function (n, r) {
                  var i = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = T.filter(r, i)),
                    this.length > 1 && (z[e] || T.uniqueSort(i), W.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var V = /[^\x20\t\r\n\f]+/g;
          function J(e) {
            return e;
          }
          function K(e) {
            throw e;
          }
          function Y(e, t, n, r) {
            var i;
            try {
              e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(V) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              r,
              i,
              s = [],
              o = [],
              a = -1,
              c = function () {
                for (i = i || e.once, r = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < s.length; ) !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (s = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    s &&
                      (n && !t && ((a = s.length - 1), o.push(n)),
                      (function t(n) {
                        T.each(n, function (n, r) {
                          v(r) ? (e.unique && u.has(r)) || s.push(r) : r && r.length && "string" !== x(r) && t(r);
                        });
                      })(arguments),
                      n && !t && c()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (i = o = []), (s = n = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (i = o = []), n || t || (s = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), o.push(n), t || c()), this;
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                }
              };
            return u;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, r) {
                          var i = v(e[r[4]]) && e[r[4]];
                          s[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && v(e.promise)
                              ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var s = 0;
                      function o(e, t, n, i) {
                        return function () {
                          var a = this,
                            c = arguments,
                            u = function () {
                              var r, u;
                              if (!(e < s)) {
                                if ((r = n.apply(a, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                (u = r && ("object" == typeof r || "function" == typeof r) && r.then),
                                  v(u)
                                    ? i
                                      ? u.call(r, o(s, t, J, i), o(s, t, K, i))
                                      : (s++, u.call(r, o(s, t, J, i), o(s, t, K, i), o(s, t, J, t.notifyWith)))
                                    : (n !== J && ((a = void 0), (c = [r])), (i || t.resolveWith)(a, c));
                              }
                            },
                            l = i
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (r) {
                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(r, l.error),
                                      e + 1 >= s && (n !== K && ((a = void 0), (c = [r])), t.rejectWith(a, c));
                                  }
                                };
                          e
                            ? l()
                            : (T.Deferred.getErrorHook
                                ? (l.error = T.Deferred.getErrorHook())
                                : T.Deferred.getStackHook && (l.error = T.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return T.Deferred(function (r) {
                        t[0][3].add(o(0, r, v(i) ? i : J, r.notifyWith)),
                          t[1][3].add(o(0, r, v(e) ? e : J)),
                          t[2][3].add(o(0, r, v(n) ? n : K));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, i) : i;
                    }
                  },
                  s = {};
                return (
                  T.each(t, function (e, r) {
                    var o = r[2],
                      a = r[5];
                    (i[r[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(r[3].fire),
                      (s[r[0]] = function () {
                        return s[r[0] + "With"](this === s ? void 0 : this, arguments), this;
                      }),
                      (s[r[0] + "With"] = o.fireWith);
                  }),
                  i.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = a.call(arguments),
                  s = T.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (r[e] = this), (i[e] = arguments.length > 1 ? a.call(arguments) : n), --t || s.resolveWith(r, i);
                    };
                  };
                if (t <= 1 && (Y(e, s.done(o(n)).resolve, s.reject, !t), "pending" === s.state() || v(i[n] && i[n].then))) return s.then();
                for (; n--; ) Y(i[n], o(n), s.reject);
                return s.promise();
              }
            });
          var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            r.console && r.console.warn && e && X.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }),
            (T.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var Z = T.Deferred();
          function Q() {
            y.removeEventListener("DOMContentLoaded", Q), r.removeEventListener("load", Q), T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              Z.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0), (!0 !== e && --T.readyWait > 0) || Z.resolveWith(y, [T]));
              }
            }),
            (T.ready.then = Z.then),
            "complete" === y.readyState || ("loading" !== y.readyState && !y.documentElement.doScroll)
              ? r.setTimeout(T.ready)
              : (y.addEventListener("DOMContentLoaded", Q), r.addEventListener("load", Q));
          var ee = function (e, t, n, r, i, s, o) {
              var a = 0,
                c = e.length,
                u = null == n;
              if ("object" === x(n)) for (a in ((i = !0), n)) ee(e, t, a, n[a], !0, s, o);
              else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (o = !0),
                u &&
                  (o
                    ? (t.call(e, r), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(T(e), n);
                      }))),
                t)
              )
                for (; a < c; a++) t(e[a], n, o ? r : r.call(e[a], a, t(e[a], n)));
              return i ? e : u ? t.call(e) : c ? t(e[0], n) : s;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function re(e, t) {
            return t.toUpperCase();
          }
          function ie(e) {
            return e.replace(te, "ms-").replace(ne, re);
          }
          var se = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function oe() {
            this.expando = T.expando + oe.uid++;
          }
          (oe.uid = 1),
            (oe.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    se(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[ie(t)] = n;
                else for (r in t) i[ie(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ie(t)];
              },
              access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(ie) : (t = ie(t)) in r ? [t] : t.match(V) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              }
            });
          var ae = new oe(),
            ce = new oe(),
            ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            le = /[A-Z]/g;
          function de(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (((r = "data-" + t.replace(le, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                  n = (function (e) {
                    return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ue.test(e) ? JSON.parse(e) : e));
                  })(n);
                } catch (e) {}
                ce.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return ce.hasData(e) || ae.hasData(e);
            },
            data: function (e, t, n) {
              return ce.access(e, t, n);
            },
            removeData: function (e, t) {
              ce.remove(e, t);
            },
            _data: function (e, t, n) {
              return ae.access(e, t, n);
            },
            _removeData: function (e, t) {
              ae.remove(e, t);
            }
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  s = this[0],
                  o = s && s.attributes;
                if (void 0 === e) {
                  if (this.length && ((i = ce.get(s)), 1 === s.nodeType && !ae.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--; ) o[n] && 0 === (r = o[n].name).indexOf("data-") && ((r = ie(r.slice(5))), de(s, r, i[r]));
                    ae.set(s, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      ce.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (s && void 0 === t) return void 0 !== (n = ce.get(s, e)) || void 0 !== (n = de(s, e)) ? n : void 0;
                        this.each(function () {
                          ce.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ce.remove(this, e);
                });
              }
            }),
            T.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = ae.get(e, t)),
                    n && (!r || Array.isArray(n) ? (r = ae.access(e, t, T.makeArray(n))) : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  s = T._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete s.stop,
                    i.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      s
                    )),
                  !r && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  ae.get(e, n) ||
                  ae.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      ae.remove(e, [t + "queue", n]);
                    })
                  })
                );
              }
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = T.Deferred(),
                  s = this,
                  o = this.length,
                  a = function () {
                    --r || i.resolveWith(s, [s]);
                  };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; )
                  (n = ae.get(s[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t);
              }
            });
          var he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            fe = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
            pe = ["Top", "Right", "Bottom", "Left"],
            ge = y.documentElement,
            me = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            ve = { composed: !0 };
          ge.getRootNode &&
            (me = function (e) {
              return T.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument;
            });
          var be = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && me(e) && "none" === T.css(e, "display"));
          };
          function ye(e, t, n, r) {
            var i,
              s,
              o = 20,
              a = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              c = a(),
              u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              l = e.nodeType && (T.cssNumber[t] || ("px" !== u && +c)) && fe.exec(T.css(e, t));
            if (l && l[3] !== u) {
              for (c /= 2, u = u || l[3], l = +c || 1; o--; )
                T.style(e, t, l + u), (1 - s) * (1 - (s = a() / c || 0.5)) <= 0 && (o = 0), (l /= s);
              (l *= 2), T.style(e, t, l + u), (n = n || []);
            }
            return (
              n && ((l = +l || +c || 0), (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = u), (r.start = l), (r.end = i))), i
            );
          }
          var we = {};
          function Ee(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = we[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (we[r] = i),
              i)
            );
          }
          function xe(e, t) {
            for (var n, r, i = [], s = 0, o = e.length; s < o; s++)
              (r = e[s]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n && ((i[s] = ae.get(r, "display") || null), i[s] || (r.style.display = "")),
                    "" === r.style.display && be(r) && (i[s] = Ee(r)))
                  : "none" !== n && ((i[s] = "none"), ae.set(r, "display", n)));
            for (s = 0; s < o; s++) null != i[s] && (e[s].style.display = i[s]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return xe(this, !0);
            },
            hide: function () {
              return xe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    be(this) ? T(this).show() : T(this).hide();
                  });
            }
          });
          var Ae,
            Se,
            Te = /^(?:checkbox|radio)$/i,
            _e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ke = /^$|^module$|\/(?:java|ecma)script/i;
          (Ae = y.createDocumentFragment().appendChild(y.createElement("div"))),
            (Se = y.createElement("input")).setAttribute("type", "radio"),
            Se.setAttribute("checked", "checked"),
            Se.setAttribute("name", "t"),
            Ae.appendChild(Se),
            (m.checkClone = Ae.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Ae.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!Ae.cloneNode(!0).lastChild.defaultValue),
            (Ae.innerHTML = "<option></option>"),
            (m.option = !!Ae.lastChild);
          var Ie = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
          function Ce(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && k(e, t)) ? T.merge([e], n) : n
            );
          }
          function Oe(e, t) {
            for (var n = 0, r = e.length; n < r; n++) ae.set(e[n], "globalEval", !t || ae.get(t[n], "globalEval"));
          }
          (Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead),
            (Ie.th = Ie.td),
            m.option || (Ie.optgroup = Ie.option = [1, "<select multiple='multiple'>", "</select>"]);
          var Be = /<|&#?\w+;/;
          function Ne(e, t, n, r, i) {
            for (var s, o, a, c, u, l, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
              if ((s = e[f]) || 0 === s)
                if ("object" === x(s)) T.merge(h, s.nodeType ? [s] : s);
                else if (Be.test(s)) {
                  for (
                    o = o || d.appendChild(t.createElement("div")),
                      a = (_e.exec(s) || ["", ""])[1].toLowerCase(),
                      c = Ie[a] || Ie._default,
                      o.innerHTML = c[1] + T.htmlPrefilter(s) + c[2],
                      l = c[0];
                    l--;

                  )
                    o = o.lastChild;
                  T.merge(h, o.childNodes), ((o = d.firstChild).textContent = "");
                } else h.push(t.createTextNode(s));
            for (d.textContent = "", f = 0; (s = h[f++]); )
              if (r && T.inArray(s, r) > -1) i && i.push(s);
              else if (((u = me(s)), (o = Ce(d.appendChild(s), "script")), u && Oe(o), n))
                for (l = 0; (s = o[l++]); ) ke.test(s.type || "") && n.push(s);
            return d;
          }
          var Pe = /^([^.]*)(?:\.(.+)|)/;
          function De() {
            return !0;
          }
          function Re() {
            return !1;
          }
          function Me(e, t, n, r, i, s) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Me(e, a, n, r, t[a], s);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Re;
            else if (!i) return e;
            return (
              1 === s &&
                ((o = i),
                (i = function (e) {
                  return T().off(e), o.apply(this, arguments);
                }),
                (i.guid = o.guid || (o.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, i, r, n);
              })
            );
          }
          function Le(e, t, n) {
            n
              ? (ae.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      r = ae.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (r) (T.event.special[t] || {}).delegateType && e.stopPropagation();
                      else if (
                        ((r = a.call(arguments)), ae.set(this, t, r), this[t](), (n = ae.get(this, t)), ae.set(this, t, !1), r !== n)
                      )
                        return e.stopImmediatePropagation(), e.preventDefault(), n;
                    } else
                      r &&
                        (ae.set(this, t, T.event.trigger(r[0], r.slice(1), this)),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = De));
                  }
                }))
              : void 0 === ae.get(e, t) && T.event.add(e, t, De);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var s,
                o,
                a,
                c,
                u,
                l,
                d,
                h,
                f,
                p,
                g,
                m = ae.get(e);
              if (se(e))
                for (
                  n.handler && ((n = (s = n).handler), (i = s.selector)),
                    i && T.find.matchesSelector(ge, i),
                    n.guid || (n.guid = T.guid++),
                    (c = m.events) || (c = m.events = Object.create(null)),
                    (o = m.handle) ||
                      (o = m.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    u = (t = (t || "").match(V) || [""]).length;
                  u--;

                )
                  (f = g = (a = Pe.exec(t[u]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    f &&
                      ((d = T.event.special[f] || {}),
                      (f = (i ? d.delegateType : d.bindType) || f),
                      (d = T.event.special[f] || {}),
                      (l = T.extend(
                        {
                          type: f,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && T.expr.match.needsContext.test(i),
                          namespace: p.join(".")
                        },
                        s
                      )),
                      (h = c[f]) ||
                        (((h = c[f] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, r, p, o)) || (e.addEventListener && e.addEventListener(f, o))),
                      d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
                      i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                      (T.event.global[f] = !0));
            },
            remove: function (e, t, n, r, i) {
              var s,
                o,
                a,
                c,
                u,
                l,
                d,
                h,
                f,
                p,
                g,
                m = ae.hasData(e) && ae.get(e);
              if (m && (c = m.events)) {
                for (u = (t = (t || "").match(V) || [""]).length; u--; )
                  if (((f = g = (a = Pe.exec(t[u]) || [])[1]), (p = (a[2] || "").split(".").sort()), f)) {
                    for (
                      d = T.event.special[f] || {},
                        h = c[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        o = s = h.length;
                      s--;

                    )
                      (l = h[s]),
                        (!i && g !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (a && !a.test(l.namespace)) ||
                          (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                          (h.splice(s, 1), l.selector && h.delegateCount--, d.remove && d.remove.call(e, l));
                    o &&
                      !h.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) || T.removeEvent(e, f, m.handle), delete c[f]);
                  } else for (f in c) T.event.remove(e, f + t[u], n, r, !0);
                T.isEmptyObject(c) && ae.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                s,
                o,
                a = new Array(arguments.length),
                c = T.event.fix(e),
                u = (ae.get(this, "events") || Object.create(null))[c.type] || [],
                l = T.event.special[c.type] || {};
              for (a[0] = c, t = 1; t < arguments.length; t++) a[t] = arguments[t];
              if (((c.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, c))) {
                for (o = T.event.handlers.call(this, c, u), t = 0; (i = o[t++]) && !c.isPropagationStopped(); )
                  for (c.currentTarget = i.elem, n = 0; (s = i.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                    (c.rnamespace && !1 !== s.namespace && !c.rnamespace.test(s.namespace)) ||
                      ((c.handleObj = s),
                      (c.data = s.data),
                      void 0 !== (r = ((T.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a)) &&
                        !1 === (c.result = r) &&
                        (c.preventDefault(), c.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, c), c.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                s,
                o,
                a = [],
                c = t.delegateCount,
                u = e.target;
              if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                    for (s = [], o = {}, n = 0; n < c; n++)
                      void 0 === o[(i = (r = t[n]).selector + " ")] &&
                        (o[i] = r.needsContext ? T(i, this).index(u) > -1 : T.find(i, this, null, [u]).length),
                        o[i] && s.push(r);
                    s.length && a.push({ elem: u, handlers: s });
                  }
              return (u = this), c < t.length && a.push({ elem: u, handlers: t.slice(c) }), a;
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                }
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return Te.test(t.type) && t.click && k(t, "input") && Le(t, "click", !0), !1;
                },
                trigger: function (e) {
                  var t = this || e;
                  return Te.test(t.type) && t.click && k(t, "input") && Le(t, "click"), !0;
                },
                _default: function (e) {
                  var t = e.target;
                  return (Te.test(t.type) && t.click && k(t, "input") && ae.get(t, "click")) || k(t, "a");
                }
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
              }
            }
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? De : Re),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Re,
              isPropagationStopped: Re,
              isImmediatePropagationStopped: Re,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = De), e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = De), e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = De), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
              }
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (y.documentMode) {
                  var n = ae.get(this, "handle"),
                    r = T.event.fix(e);
                  (r.type = "focusin" === e.type ? "focus" : "blur"), (r.isSimulated = !0), n(e), r.target === r.currentTarget && n(r);
                } else T.event.simulate(t, e.target, T.event.fix(e));
              }
              (T.event.special[e] = {
                setup: function () {
                  var r;
                  if ((Le(this, e, !0), !y.documentMode)) return !1;
                  (r = ae.get(this, t)) || this.addEventListener(t, n), ae.set(this, t, (r || 0) + 1);
                },
                trigger: function () {
                  return Le(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!y.documentMode) return !1;
                  (e = ae.get(this, t) - 1) ? ae.set(this, t, e) : (this.removeEventListener(t, n), ae.remove(this, t));
                },
                _default: function (t) {
                  return ae.get(t.target, e);
                },
                delegateType: t
              }),
                (T.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = y.documentMode ? this : r,
                      s = ae.get(i, t);
                    s || (y.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), ae.set(i, t, (s || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = y.documentMode ? this : r,
                      s = ae.get(i, t) - 1;
                    s
                      ? ae.set(i, t, s)
                      : (y.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), ae.remove(i, t));
                  }
                });
            }),
            T.each(
              { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || T.contains(this, r))) ||
                        ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                      n
                    );
                  }
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, r) {
                return Me(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Me(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = Re),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              }
            });
          var je = /<script|<style|<link/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $e = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Fe(e, t) {
            return (k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0]) || e;
          }
          function qe(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
          }
          function We(e, t) {
            var n, r, i, s, o, a;
            if (1 === t.nodeType) {
              if (ae.hasData(e) && (a = ae.get(e).events))
                for (i in (ae.remove(t, "handle events"), a)) for (n = 0, r = a[i].length; n < r; n++) T.event.add(t, i, a[i][n]);
              ce.hasData(e) && ((s = ce.access(e)), (o = T.extend({}, s)), ce.set(t, o));
            }
          }
          function ze(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Te.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
          }
          function Ge(e, t, n, r) {
            t = c(t);
            var i,
              s,
              o,
              a,
              u,
              l,
              d = 0,
              h = e.length,
              f = h - 1,
              p = t[0],
              g = v(p);
            if (g || (h > 1 && "string" == typeof p && !m.checkClone && Ue.test(p)))
              return e.each(function (i) {
                var s = e.eq(i);
                g && (t[0] = p.call(this, i, s.html())), Ge(s, t, n, r);
              });
            if (h && ((s = (i = Ne(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = s), s || r)) {
              for (a = (o = T.map(Ce(i, "script"), qe)).length; d < h; d++)
                (u = i), d !== f && ((u = T.clone(u, !0, !0)), a && T.merge(o, Ce(u, "script"))), n.call(e[d], u, d);
              if (a)
                for (l = o[o.length - 1].ownerDocument, T.map(o, He), d = 0; d < a; d++)
                  (u = o[d]),
                    ke.test(u.type || "") &&
                      !ae.access(u, "globalEval") &&
                      T.contains(l, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? T._evalUrl && !u.noModule && T._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l)
                        : E(u.textContent.replace($e, ""), u, l));
            }
            return e;
          }
          function Ve(e, t, n) {
            for (var r, i = t ? T.filter(t, e) : e, s = 0; null != (r = i[s]); s++)
              n || 1 !== r.nodeType || T.cleanData(Ce(r)), r.parentNode && (n && me(r) && Oe(Ce(r, "script")), r.parentNode.removeChild(r));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                s,
                o,
                a = e.cloneNode(!0),
                c = me(e);
              if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e)))
                for (o = Ce(a), r = 0, i = (s = Ce(e)).length; r < i; r++) ze(s[r], o[r]);
              if (t)
                if (n) for (s = s || Ce(e), o = o || Ce(a), r = 0, i = s.length; r < i; r++) We(s[r], o[r]);
                else We(e, a);
              return (o = Ce(a, "script")).length > 0 && Oe(o, !c && Ce(e, "script")), a;
            },
            cleanData: function (e) {
              for (var t, n, r, i = T.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (se(n)) {
                  if ((t = n[ae.expando])) {
                    if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                    n[ae.expando] = void 0;
                  }
                  n[ce.expando] && (n[ce.expando] = void 0);
                }
            }
          }),
            T.fn.extend({
              detach: function (e) {
                return Ve(this, e, !0);
              },
              remove: function (e) {
                return Ve(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ge(this, arguments, function (e) {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Fe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ge(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Fe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ge(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ge(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(Ce(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !Ie[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(Ce(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ge(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(Ce(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              }
            }),
            T.each(
              { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (var n, r = [], i = T(e), s = i.length - 1, o = 0; o <= s; o++)
                    (n = o === s ? this : this.clone(!0)), T(i[o])[t](n), u.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Je = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
            Ke = /^--/,
            Ye = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Xe = function (e, t, n) {
              var r,
                i,
                s = {};
              for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = s[i];
              return r;
            },
            Ze = new RegExp(pe.join("|"), "i");
          function Qe(e, t, n) {
            var r,
              i,
              s,
              o,
              a = Ke.test(t),
              c = e.style;
            return (
              (n = n || Ye(e)) &&
                ((o = n.getPropertyValue(t) || n[t]),
                a && o && (o = o.replace(N, "$1") || void 0),
                "" !== o || me(e) || (o = T.style(e, t)),
                !m.pixelBoxStyles() &&
                  Je.test(o) &&
                  Ze.test(t) &&
                  ((r = c.width),
                  (i = c.minWidth),
                  (s = c.maxWidth),
                  (c.minWidth = c.maxWidth = c.width = o),
                  (o = n.width),
                  (c.width = r),
                  (c.minWidth = i),
                  (c.maxWidth = s))),
              void 0 !== o ? o + "" : o
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              }
            };
          }
          !(function () {
            function e() {
              if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ge.appendChild(u).appendChild(l);
                var e = r.getComputedStyle(l);
                (n = "1%" !== e.top),
                  (c = 12 === t(e.marginLeft)),
                  (l.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (l.style.position = "absolute"),
                  (s = 12 === t(l.offsetWidth / 3)),
                  ge.removeChild(u),
                  (l = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              s,
              o,
              a,
              c,
              u = y.createElement("div"),
              l = y.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
              T.extend(m, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), c;
                },
                scrollboxSize: function () {
                  return e(), s;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == a &&
                      ((e = y.createElement("table")),
                      (t = y.createElement("tr")),
                      (n = y.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ge.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight),
                      ge.removeChild(e)),
                    a
                  );
                }
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = y.createElement("div").style,
            rt = {};
          function it(e) {
            var t = T.cssProps[e] || rt[e];
            return (
              t ||
              (e in nt
                ? e
                : (rt[e] =
                    (function (e) {
                      for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var st = /^(none|table(?!-c[ea]).+)/,
            ot = { position: "absolute", visibility: "hidden", display: "block" },
            at = { letterSpacing: "0", fontWeight: "400" };
          function ct(e, t, n) {
            var r = fe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function ut(e, t, n, r, i, s) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              c = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (u += T.css(e, n + pe[o], !0, i)),
                r
                  ? ("content" === n && (c -= T.css(e, "padding" + pe[o], !0, i)),
                    "margin" !== n && (c -= T.css(e, "border" + pe[o] + "Width", !0, i)))
                  : ((c += T.css(e, "padding" + pe[o], !0, i)),
                    "padding" !== n
                      ? (c += T.css(e, "border" + pe[o] + "Width", !0, i))
                      : (a += T.css(e, "border" + pe[o] + "Width", !0, i)));
            return (
              !r && s >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - c - a - 0.5)) || 0), c + u
            );
          }
          function lt(e, t, n) {
            var r = Ye(e),
              i = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
              s = i,
              o = Qe(e, t, r),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Je.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!m.boxSizingReliable() && i) ||
                (!m.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === T.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === T.css(e, "boxSizing", !1, r)), (s = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) + ut(e, t, n || (i ? "border" : "content"), s, r, o) + "px"
            );
          }
          function dt(e, t, n, r, i) {
            return new dt.prototype.init(e, t, n, r, i);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Qe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                }
              }
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  s,
                  o,
                  a = ie(t),
                  c = Ke.test(t),
                  u = e.style;
                if ((c || (t = it(a)), (o = T.cssHooks[t] || T.cssHooks[a]), void 0 === n))
                  return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : u[t];
                "string" === (s = typeof n) && (i = fe.exec(n)) && i[1] && ((n = ye(e, t, i)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== s || c || (n += (i && i[3]) || (T.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, r))) || (c ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                s,
                o,
                a = ie(t);
              return (
                Ke.test(t) || (t = it(a)),
                (o = T.cssHooks[t] || T.cssHooks[a]) && "get" in o && (i = o.get(e, !0, n)),
                void 0 === i && (i = Qe(e, t, r)),
                "normal" === i && t in at && (i = at[t]),
                "" === n || n ? ((s = parseFloat(i)), !0 === n || isFinite(s) ? s || 0 : i) : i
              );
            }
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !st.test(T.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? lt(e, t, r)
                      : Xe(e, ot, function () {
                          return lt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    s = Ye(e),
                    o = !m.scrollboxSize() && "absolute" === s.position,
                    a = (o || r) && "border-box" === T.css(e, "boxSizing", !1, s),
                    c = r ? ut(e, t, r, a, s) : 0;
                  return (
                    a &&
                      o &&
                      (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - ut(e, t, "border", !1, s) - 0.5)),
                    c && (i = fe.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = T.css(e, t))),
                    ct(0, n, c)
                  );
                }
              };
            }),
            (T.cssHooks.marginLeft = et(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Qe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Xe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
              (T.cssHooks[e + t] = {
                expand: function (n) {
                  for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + pe[r] + t] = s[r] || s[r - 2] || s[0];
                  return i;
                }
              }),
                "margin" !== e && (T.cssHooks[e + t].set = ct);
            }),
            T.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      s = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (r = Ye(e), i = t.length; o < i; o++) s[t[o]] = T.css(e, t[o], !1, r);
                      return s;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              }
            }),
            (T.Tween = dt),
            (dt.prototype = {
              constructor: dt,
              init: function (e, t, n, r, i, s) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = s || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = dt.propHooks[this.prop];
                return e && e.get ? e.get(this) : dt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = dt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : dt.propHooks._default.set(this),
                  this
                );
              }
            }),
            (dt.prototype.init.prototype = dt.prototype),
            (dt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType || (!T.cssHooks[e.prop] && null == e.elem.style[it(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                }
              }
            }),
            (dt.propHooks.scrollTop = dt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing"
            }),
            (T.fx = dt.prototype.init),
            (T.fx.step = {});
          var ht,
            ft,
            pt = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
          function mt() {
            ft && (!1 === y.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(mt) : r.setTimeout(mt, T.fx.interval), T.fx.tick());
          }
          function vt() {
            return (
              r.setTimeout(function () {
                ht = void 0;
              }),
              (ht = Date.now())
            );
          }
          function bt(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = pe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function yt(e, t, n) {
            for (var r, i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), s = 0, o = i.length; s < o; s++)
              if ((r = i[s].call(n, t, e))) return r;
          }
          function wt(e, t, n) {
            var r,
              i,
              s = 0,
              o = wt.prefilters.length,
              a = T.Deferred().always(function () {
                delete c.elem;
              }),
              c = function () {
                if (i) return !1;
                for (
                  var t = ht || vt(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = 1 - (n / u.duration || 0),
                    s = 0,
                    o = u.tweens.length;
                  s < o;
                  s++
                )
                  u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, n]), r < 1 && o ? n : (o || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
              },
              u = a.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || vt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                  return u.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? u.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) u.tweens[n].run(1);
                  return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
                }
              }),
              l = u.props;
            for (
              !(function (e, t) {
                var n, r, i, s, o;
                for (n in e)
                  if (
                    ((i = t[(r = ie(n))]),
                    (s = e[n]),
                    Array.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
                    n !== r && ((e[r] = s), delete e[n]),
                    (o = T.cssHooks[r]) && ("expand" in o))
                  )
                    for (n in ((s = o.expand(s)), delete e[r], s)) (n in e) || ((e[n] = s[n]), (t[n] = i));
                  else t[r] = i;
              })(l, u.opts.specialEasing);
              s < o;
              s++
            )
              if ((r = wt.prefilters[s].call(u, e, l, u.opts)))
                return v(r.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return (
              T.map(l, yt, u),
              v(u.opts.start) && u.opts.start.call(e, u),
              u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
              T.fx.timer(T.extend(c, { elem: e, anim: u, queue: u.opts.queue })),
              u
            );
          }
          (T.Animation = T.extend(wt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ye(n.elem, e, fe.exec(t), n), n;
                }
              ]
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(V));
              for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (wt.tweeners[n] = wt.tweeners[n] || []), wt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  s,
                  o,
                  a,
                  c,
                  u,
                  l,
                  d = "width" in t || "height" in t,
                  h = this,
                  f = {},
                  p = e.style,
                  g = e.nodeType && be(e),
                  m = ae.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (o = T._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  h.always(function () {
                    h.always(function () {
                      o.unqueued--, T.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), pt.test(i))) {
                    if ((delete t[r], (s = s || "toggle" === i), i === (g ? "hide" : "show"))) {
                      if ("show" !== i || !m || void 0 === m[r]) continue;
                      g = !0;
                    }
                    f[r] = (m && m[r]) || T.style(e, r);
                  }
                if ((c = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                  for (r in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    null == (u = m && m.display) && (u = ae.get(e, "display")),
                    "none" === (l = T.css(e, "display")) &&
                      (u ? (l = u) : (xe([e], !0), (u = e.style.display || u), (l = T.css(e, "display")), xe([e]))),
                    ("inline" === l || ("inline-block" === l && null != u)) &&
                      "none" === T.css(e, "float") &&
                      (c ||
                        (h.done(function () {
                          p.display = u;
                        }),
                        null == u && ((l = p.display), (u = "none" === l ? "" : l))),
                      (p.display = "inline-block"))),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    h.always(function () {
                      (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                    })),
                  (c = !1),
                  f))
                    c ||
                      (m ? "hidden" in m && (g = m.hidden) : (m = ae.access(e, "fxshow", { display: u })),
                      s && (m.hidden = !g),
                      g && xe([e], !0),
                      h.done(function () {
                        for (r in (g || xe([e]), ae.remove(e, "fxshow"), f)) T.style(e, r, f[r]);
                      })),
                      (c = yt(g ? m[r] : 0, r, h)),
                      r in m || ((m[r] = c.start), g && ((c.end = c.start), (c.start = 0)));
              }
            ],
            prefilter: function (e, t) {
              t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
            }
          })),
            (T.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
              return (
                T.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in T.fx.speeds ? (r.duration = T.fx.speeds[r.duration]) : (r.duration = T.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
                }),
                r
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(be).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = T.isEmptyObject(e),
                  s = T.speed(t, n, r),
                  o = function () {
                    var t = wt(this, T.extend({}, e), s);
                    (i || ae.get(this, "finish")) && t.stop(!0);
                  };
                return (o.finish = o), i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      s = T.timers,
                      o = ae.get(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else for (i in o) o[i] && o[i].stop && gt.test(i) && r(o[i]);
                    for (i = s.length; i--; )
                      s[i].elem !== this || (null != e && s[i].queue !== e) || (s[i].anim.stop(n), (t = !1), s.splice(i, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = ae.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      s = T.timers,
                      o = r ? r.length : 0;
                    for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--; )
                      s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              }
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(bt(t, !0), e, r, i);
              };
            }),
            T.each(
              {
                slideDown: bt("show"),
                slideUp: bt("hide"),
                slideToggle: bt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
              },
              function (e, t) {
                T.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (ht = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (ht = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ft || ((ft = !0), mt());
            }),
            (T.fx.stop = function () {
              ft = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = y.createElement("input"),
                t = y.createElement("select").appendChild(y.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = y.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var Et,
            xt = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return ee(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            }
          }),
            T.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === s && T.isXMLDoc(e)) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? Et : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = T.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  }
                }
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(V);
                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
              }
            }),
            (Et = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              }
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = xt[t] || T.find.attr;
              xt[t] = function (e, t, r) {
                var i,
                  s,
                  o = t.toLowerCase();
                return r || ((s = xt[o]), (xt[o] = i), (i = null != n(e, t, r) ? o : null), (xt[o] = s)), i;
              };
            });
          var At = /^(?:input|select|textarea|button)$/i,
            St = /^(?:a|area)$/i;
          function Tt(e) {
            return (e.match(V) || []).join(" ");
          }
          function _t(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function kt(e) {
            return Array.isArray(e) ? e : ("string" == typeof e && e.match(V)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return ee(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            }
          }),
            T.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return (
                    (1 === s && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : At.test(e.nodeName) || (St.test(e.nodeName) && e.href) ? 0 : -1;
                  }
                }
              },
              propFix: { for: "htmlFor", class: "className" }
            }),
            m.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable"
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t, n, r, i, s, o;
                return v(e)
                  ? this.each(function (t) {
                      T(this).addClass(e.call(this, t, _t(this)));
                    })
                  : (t = kt(e)).length
                  ? this.each(function () {
                      if (((r = _t(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))) {
                        for (s = 0; s < t.length; s++) (i = t[s]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        (o = Tt(n)), r !== o && this.setAttribute("class", o);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, i, s, o;
                return v(e)
                  ? this.each(function (t) {
                      T(this).removeClass(e.call(this, t, _t(this)));
                    })
                  : arguments.length
                  ? (t = kt(e)).length
                    ? this.each(function () {
                        if (((r = _t(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))) {
                          for (s = 0; s < t.length; s++) for (i = t[s]; n.indexOf(" " + i + " ") > -1; ) n = n.replace(" " + i + " ", " ");
                          (o = Tt(n)), r !== o && this.setAttribute("class", o);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  i,
                  s,
                  o = typeof e,
                  a = "string" === o || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, _t(this), t), t);
                    })
                  : "boolean" == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = kt(e)),
                    this.each(function () {
                      if (a) for (s = T(this), i = 0; i < n.length; i++) (r = n[i]), s.hasClass(r) ? s.removeClass(r) : s.addClass(r);
                      else
                        (void 0 !== e && "boolean" !== o) ||
                          ((r = _t(this)) && ae.set(this, "__className__", r),
                          this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ae.get(this, "__className__") || ""));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + Tt(_t(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
              }
            });
          var It = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, T(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = T.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(It, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            }
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : Tt(T.text(e));
                  }
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      s = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      c = o ? s + 1 : i.length;
                    for (r = s < 0 ? c : o ? s : 0; r < c; r++)
                      if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                        if (((t = T(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (var n, r, i = e.options, s = T.makeArray(t), o = i.length; o--; )
                      ((r = i[o]).selected = T.inArray(T.valHooks.option.get(r), s) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), s;
                  }
                }
              }
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t)) return (e.checked = T.inArray(T(e).val(), t) > -1);
                }
              }),
                m.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var Ct = r.location,
            Ot = { guid: Date.now() },
            Bt = /\?/;
          T.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                T.error(
                  "Invalid XML: " +
                    (n
                      ? T.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Nt = /^(?:focusinfocus|focusoutblur)$/,
            Pt = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, i) {
              var s,
                o,
                a,
                c,
                u,
                l,
                d,
                h,
                p = [n || y],
                g = f.call(e, "type") ? e.type : e,
                m = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = h = a = n = n || y),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Nt.test(g + T.event.triggered) &&
                  (g.indexOf(".") > -1 && ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (u = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (d = T.event.special[g] || {}),
                  i || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!i && !d.noBubble && !b(n)) {
                  for (c = d.delegateType || g, Nt.test(c + g) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
                  a === (n.ownerDocument || y) && p.push(a.defaultView || a.parentWindow || r);
                }
                for (s = 0; (o = p[s++]) && !e.isPropagationStopped(); )
                  (h = o),
                    (e.type = s > 1 ? c : d.bindType || g),
                    (l = (ae.get(o, "events") || Object.create(null))[e.type] && ae.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && se(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  i ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                    !se(n) ||
                    (u &&
                      v(n[g]) &&
                      !b(n) &&
                      ((a = n[u]) && (n[u] = null),
                      (T.event.triggered = g),
                      e.isPropagationStopped() && h.addEventListener(g, Pt),
                      n[g](),
                      e.isPropagationStopped() && h.removeEventListener(g, Pt),
                      (T.event.triggered = void 0),
                      a && (n[u] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(r, null, t);
            }
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              }
            });
          var Dt = /\[\]$/,
            Rt = /\r?\n/g,
            Mt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
          function jt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              T.each(t, function (t, i) {
                n || Dt.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
              });
            else if (n || "object" !== x(t)) r(e, t);
            else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
          }
          (T.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) jt(n, e[n], t, i);
            return r.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && Lt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Te.test(e));
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(Rt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Rt, "\r\n") };
                  })
                  .get();
              }
            });
          var Ut = /%20/g,
            $t = /#.*$/,
            Ft = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            Wt = /^\/\//,
            zt = {},
            Gt = {},
            Vt = "*/".concat("*"),
            Jt = y.createElement("a");
          function Kt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                s = t.toLowerCase().match(V) || [];
              if (v(n))
                for (; (r = s[i++]); )
                  "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
          }
          function Yt(e, t, n, r) {
            var i = {},
              s = e === Gt;
            function o(a) {
              var c;
              return (
                (i[a] = !0),
                T.each(e[a] || [], function (e, a) {
                  var u = a(t, n, r);
                  return "string" != typeof u || s || i[u] ? (s ? !(c = u) : void 0) : (t.dataTypes.unshift(u), o(u), !1);
                }),
                c
              );
            }
            return o(t.dataTypes[0]) || (!i["*"] && o("*"));
          }
          function Xt(e, t) {
            var n,
              r,
              i = T.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e;
          }
          (Jt.href = Ct.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Vt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML },
                flatOptions: { url: !0, context: !0 }
              },
              ajaxSetup: function (e, t) {
                return t ? Xt(Xt(e, T.ajaxSettings), t) : Xt(T.ajaxSettings, e);
              },
              ajaxPrefilter: Kt(zt),
              ajaxTransport: Kt(Gt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  s,
                  o,
                  a,
                  c,
                  u,
                  l,
                  d,
                  h,
                  f = T.ajaxSetup({}, t),
                  p = f.context || f,
                  g = f.context && (p.nodeType || p.jquery) ? T(p) : T.event,
                  m = T.Deferred(),
                  v = T.Callbacks("once memory"),
                  b = f.statusCode || {},
                  w = {},
                  E = {},
                  x = "canceled",
                  A = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!o)
                          for (o = {}; (t = qt.exec(s)); ) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return null == u && ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e), (w[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                      return null == u && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) A.always(e[A.status]);
                        else for (t in e) b[t] = [b[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || x;
                      return n && n.abort(t), S(0, t), this;
                    }
                  };
                if (
                  (m.promise(A),
                  (f.url = ((e || f.url || Ct.href) + "").replace(Wt, Ct.protocol + "//")),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(V) || [""]),
                  null == f.crossDomain)
                ) {
                  c = y.createElement("a");
                  try {
                    (c.href = f.url), (c.href = c.href), (f.crossDomain = Jt.protocol + "//" + Jt.host != c.protocol + "//" + c.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = T.param(f.data, f.traditional)), Yt(zt, f, t, A), u))
                  return A;
                for (d in ((l = T.event && f.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Ht.test(f.type)),
                (i = f.url.replace($t, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                    (f.data = f.data.replace(Ut, "+"))
                  : ((h = f.url.slice(i.length)),
                    f.data && (f.processData || "string" == typeof f.data) && ((i += (Bt.test(i) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache && ((i = i.replace(Ft, "$1")), (h = (Bt.test(i) ? "&" : "?") + "_=" + Ot.guid++ + h)),
                    (f.url = i + h)),
                f.ifModified &&
                  (T.lastModified[i] && A.setRequestHeader("If-Modified-Since", T.lastModified[i]),
                  T.etag[i] && A.setRequestHeader("If-None-Match", T.etag[i])),
                ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && A.setRequestHeader("Content-Type", f.contentType),
                A.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Vt + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  A.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, A, f) || u)) return A.abort();
                if (((x = "abort"), v.add(f.complete), A.done(f.success), A.fail(f.error), (n = Yt(Gt, f, t, A)))) {
                  if (((A.readyState = 1), l && g.trigger("ajaxSend", [A, f]), u)) return A;
                  f.async &&
                    f.timeout > 0 &&
                    (a = r.setTimeout(function () {
                      A.abort("timeout");
                    }, f.timeout));
                  try {
                    (u = !1), n.send(w, S);
                  } catch (e) {
                    if (u) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, o, c) {
                  var d,
                    h,
                    y,
                    w,
                    E,
                    x = t;
                  u ||
                    ((u = !0),
                    a && r.clearTimeout(a),
                    (n = void 0),
                    (s = c || ""),
                    (A.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (w = (function (e, t, n) {
                        for (var r, i, s, o, a = e.contents, c = e.dataTypes; "*" === c[0]; )
                          c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in a)
                            if (a[i] && a[i].test(r)) {
                              c.unshift(i);
                              break;
                            }
                        if (c[0] in n) s = c[0];
                        else {
                          for (i in n) {
                            if (!c[0] || e.converters[i + " " + c[0]]) {
                              s = i;
                              break;
                            }
                            o || (o = i);
                          }
                          s = s || o;
                        }
                        if (s) return s !== c[0] && c.unshift(s), n[s];
                      })(f, A, o)),
                    !d &&
                      T.inArray("script", f.dataTypes) > -1 &&
                      T.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (w = (function (e, t, n, r) {
                      var i,
                        s,
                        o,
                        a,
                        c,
                        u = {},
                        l = e.dataTypes.slice();
                      if (l[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                      for (s = l.shift(); s; )
                        if (
                          (e.responseFields[s] && (n[e.responseFields[s]] = t),
                          !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                          (c = s),
                          (s = l.shift()))
                        )
                          if ("*" === s) s = c;
                          else if ("*" !== c && c !== s) {
                            if (!(o = u[c + " " + s] || u["* " + s]))
                              for (i in u)
                                if ((a = i.split(" "))[1] === s && (o = u[c + " " + a[0]] || u["* " + a[0]])) {
                                  !0 === o ? (o = u[i]) : !0 !== u[i] && ((s = a[0]), l.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return { state: "parsererror", error: o ? e : "No conversion from " + c + " to " + s };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, w, A, d)),
                    d
                      ? (f.ifModified &&
                          ((E = A.getResponseHeader("Last-Modified")) && (T.lastModified[i] = E),
                          (E = A.getResponseHeader("etag")) && (T.etag[i] = E)),
                        204 === e || "HEAD" === f.type
                          ? (x = "nocontent")
                          : 304 === e
                          ? (x = "notmodified")
                          : ((x = w.state), (h = w.data), (d = !(y = w.error))))
                      : ((y = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                    (A.status = e),
                    (A.statusText = (t || x) + ""),
                    d ? m.resolveWith(p, [h, x, A]) : m.rejectWith(p, [A, x, y]),
                    A.statusCode(b),
                    (b = void 0),
                    l && g.trigger(d ? "ajaxSuccess" : "ajaxError", [A, f, d ? h : y]),
                    v.fireWith(p, [A, x]),
                    l && (g.trigger("ajaxComplete", [A, f]), --T.active || T.event.trigger("ajaxStop")));
                }
                return A;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              }
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, r, i) {
                return (
                  v(n) && ((i = i || r), (r = n), (n = void 0)),
                  T.ajax(T.extend({ url: e, type: t, dataType: i, data: n, success: r }, T.isPlainObject(e) && e))
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                }
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              }
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Zt = { 0: 200, 1223: 204 },
            Qt = T.ajaxSettings.xhr();
          (m.cors = !!Qt && "withCredentials" in Qt),
            (m.ajax = Qt = !!Qt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Qt && !e.crossDomain))
                return {
                  send: function (i, s) {
                    var o,
                      a = e.xhr();
                    if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      a.setRequestHeader(o, i[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? s(0, "error")
                              : s(a.status, a.statusText)
                            : s(
                                Zt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") || "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  }
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                }
              }
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      y.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  }
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || T.expando + "_" + Ot.guid++;
              return (this[e] = !0), e;
            }
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                s,
                o,
                a =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                      nn.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a ? (e[a] = e[a].replace(nn, "$1" + i)) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return o || T.error(i + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (s = r[i]),
                  (r[i] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === s ? T(r).removeProp(i) : (r[i] = s),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), tn.push(i)),
                      o && v(s) && s(o[0]),
                      (o = s = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((en = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === en.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href),
                        t.head.appendChild(r))
                      : (t = y)),
                  (s = !n && []),
                  (i = $.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Ne([e], t, s)), s && s.length && T(s).remove(), T.merge([], i.childNodes)));
              var r, i, s;
            }),
            (T.fn.load = function (e, t, n) {
              var r,
                i,
                s,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((r = Tt(e.slice(a))), (e = e.slice(0, a))),
                v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                o.length > 0 &&
                  T.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                    .done(function (e) {
                      (s = arguments), o.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  s,
                  o,
                  a,
                  c,
                  u = T.css(e, "position"),
                  l = T(e),
                  d = {};
                "static" === u && (e.style.position = "relative"),
                  (a = l.offset()),
                  (s = T.css(e, "top")),
                  (c = T.css(e, "left")),
                  ("absolute" === u || "fixed" === u) && (s + c).indexOf("auto") > -1
                    ? ((o = (r = l.position()).top), (i = r.left))
                    : ((o = parseFloat(s) || 0), (i = parseFloat(c) || 0)),
                  v(t) && (t = t.call(e, n, T.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + o),
                  null != t.left && (d.left = t.left - a.left + i),
                  "using" in t ? t.using.call(e, d) : l.css(d);
              }
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                      e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0)), (i.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return { top: t.top - i.top - T.css(r, "marginTop", !0), left: t.left - i.left - T.css(r, "marginLeft", !0) };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (var e = this.offsetParent; e && "static" === T.css(e, "position"); ) e = e.offsetParent;
                  return e || ge;
                });
              }
            }),
            T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
              var n = "pageYOffset" === t;
              T.fn[e] = function (r) {
                return ee(
                  this,
                  function (e, r, i) {
                    var s;
                    if ((b(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView), void 0 === i)) return s ? s[t] : e[r];
                    s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = et(m.pixelPosition, function (e, n) {
                if (n) return (n = Qe(e, t)), Je.test(n) ? T(e).position()[t] + "px" : n;
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                T.fn[r] = function (i, s) {
                  var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === s ? "margin" : "border");
                  return ee(
                    this,
                    function (t, n, i) {
                      var s;
                      return b(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((s = t.documentElement),
                          Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e]))
                        : void 0 === i
                        ? T.css(t, n, a)
                        : T.style(t, n, i, a);
                    },
                    t,
                    o ? i : void 0,
                    o
                  );
                };
              });
            }),
            T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
              T.fn[t] = function (e) {
                return this.on(t, e);
              };
            }),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              }
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
              }
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = a.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(a.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || T.guid++),
                i
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = k),
            (T.isFunction = v),
            (T.isWindow = b),
            (T.camelCase = ie),
            (T.type = x),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var sn = r.jQuery,
            on = r.$;
          return (
            (T.noConflict = function (e) {
              return r.$ === T && (r.$ = on), e && r.jQuery === T && (r.jQuery = sn), T;
            }),
            void 0 === i && (r.jQuery = r.$ = T),
            T
          );
        });
      },
      6022: (e) => {
        var t = Object.prototype.toString,
          n = Array.isArray;
        e.exports = function (e) {
          return (
            "string" == typeof e ||
            (!n(e) &&
              (function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
              "[object String]" == t.call(e))
          );
        };
      },
      9614: (e, t, n) => {
        var r, i, s, o, a;
        (r = n(1041)),
          (i = n(1615).utf8),
          (s = n(1246)),
          (o = n(1615).bin),
          ((a = function (e, t) {
            e.constructor == String
              ? (e = t && "binary" === t.encoding ? o.stringToBytes(e) : i.stringToBytes(e))
              : s(e)
              ? (e = Array.prototype.slice.call(e, 0))
              : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
            for (
              var n = r.bytesToWords(e), c = 8 * e.length, u = 1732584193, l = -271733879, d = -1732584194, h = 271733878, f = 0;
              f < n.length;
              f++
            )
              n[f] = (16711935 & ((n[f] << 8) | (n[f] >>> 24))) | (4278255360 & ((n[f] << 24) | (n[f] >>> 8)));
            (n[c >>> 5] |= 128 << c % 32), (n[14 + (((c + 64) >>> 9) << 4)] = c);
            var p = a._ff,
              g = a._gg,
              m = a._hh,
              v = a._ii;
            for (f = 0; f < n.length; f += 16) {
              var b = u,
                y = l,
                w = d,
                E = h;
              (u = p(u, l, d, h, n[f + 0], 7, -680876936)),
                (h = p(h, u, l, d, n[f + 1], 12, -389564586)),
                (d = p(d, h, u, l, n[f + 2], 17, 606105819)),
                (l = p(l, d, h, u, n[f + 3], 22, -1044525330)),
                (u = p(u, l, d, h, n[f + 4], 7, -176418897)),
                (h = p(h, u, l, d, n[f + 5], 12, 1200080426)),
                (d = p(d, h, u, l, n[f + 6], 17, -1473231341)),
                (l = p(l, d, h, u, n[f + 7], 22, -45705983)),
                (u = p(u, l, d, h, n[f + 8], 7, 1770035416)),
                (h = p(h, u, l, d, n[f + 9], 12, -1958414417)),
                (d = p(d, h, u, l, n[f + 10], 17, -42063)),
                (l = p(l, d, h, u, n[f + 11], 22, -1990404162)),
                (u = p(u, l, d, h, n[f + 12], 7, 1804603682)),
                (h = p(h, u, l, d, n[f + 13], 12, -40341101)),
                (d = p(d, h, u, l, n[f + 14], 17, -1502002290)),
                (u = g(u, (l = p(l, d, h, u, n[f + 15], 22, 1236535329)), d, h, n[f + 1], 5, -165796510)),
                (h = g(h, u, l, d, n[f + 6], 9, -1069501632)),
                (d = g(d, h, u, l, n[f + 11], 14, 643717713)),
                (l = g(l, d, h, u, n[f + 0], 20, -373897302)),
                (u = g(u, l, d, h, n[f + 5], 5, -701558691)),
                (h = g(h, u, l, d, n[f + 10], 9, 38016083)),
                (d = g(d, h, u, l, n[f + 15], 14, -660478335)),
                (l = g(l, d, h, u, n[f + 4], 20, -405537848)),
                (u = g(u, l, d, h, n[f + 9], 5, 568446438)),
                (h = g(h, u, l, d, n[f + 14], 9, -1019803690)),
                (d = g(d, h, u, l, n[f + 3], 14, -187363961)),
                (l = g(l, d, h, u, n[f + 8], 20, 1163531501)),
                (u = g(u, l, d, h, n[f + 13], 5, -1444681467)),
                (h = g(h, u, l, d, n[f + 2], 9, -51403784)),
                (d = g(d, h, u, l, n[f + 7], 14, 1735328473)),
                (u = m(u, (l = g(l, d, h, u, n[f + 12], 20, -1926607734)), d, h, n[f + 5], 4, -378558)),
                (h = m(h, u, l, d, n[f + 8], 11, -2022574463)),
                (d = m(d, h, u, l, n[f + 11], 16, 1839030562)),
                (l = m(l, d, h, u, n[f + 14], 23, -35309556)),
                (u = m(u, l, d, h, n[f + 1], 4, -1530992060)),
                (h = m(h, u, l, d, n[f + 4], 11, 1272893353)),
                (d = m(d, h, u, l, n[f + 7], 16, -155497632)),
                (l = m(l, d, h, u, n[f + 10], 23, -1094730640)),
                (u = m(u, l, d, h, n[f + 13], 4, 681279174)),
                (h = m(h, u, l, d, n[f + 0], 11, -358537222)),
                (d = m(d, h, u, l, n[f + 3], 16, -722521979)),
                (l = m(l, d, h, u, n[f + 6], 23, 76029189)),
                (u = m(u, l, d, h, n[f + 9], 4, -640364487)),
                (h = m(h, u, l, d, n[f + 12], 11, -421815835)),
                (d = m(d, h, u, l, n[f + 15], 16, 530742520)),
                (u = v(u, (l = m(l, d, h, u, n[f + 2], 23, -995338651)), d, h, n[f + 0], 6, -198630844)),
                (h = v(h, u, l, d, n[f + 7], 10, 1126891415)),
                (d = v(d, h, u, l, n[f + 14], 15, -1416354905)),
                (l = v(l, d, h, u, n[f + 5], 21, -57434055)),
                (u = v(u, l, d, h, n[f + 12], 6, 1700485571)),
                (h = v(h, u, l, d, n[f + 3], 10, -1894986606)),
                (d = v(d, h, u, l, n[f + 10], 15, -1051523)),
                (l = v(l, d, h, u, n[f + 1], 21, -2054922799)),
                (u = v(u, l, d, h, n[f + 8], 6, 1873313359)),
                (h = v(h, u, l, d, n[f + 15], 10, -30611744)),
                (d = v(d, h, u, l, n[f + 6], 15, -1560198380)),
                (l = v(l, d, h, u, n[f + 13], 21, 1309151649)),
                (u = v(u, l, d, h, n[f + 4], 6, -145523070)),
                (h = v(h, u, l, d, n[f + 11], 10, -1120210379)),
                (d = v(d, h, u, l, n[f + 2], 15, 718787259)),
                (l = v(l, d, h, u, n[f + 9], 21, -343485551)),
                (u = (u + b) >>> 0),
                (l = (l + y) >>> 0),
                (d = (d + w) >>> 0),
                (h = (h + E) >>> 0);
            }
            return r.endian([u, l, d, h]);
          })._ff = function (e, t, n, r, i, s, o) {
            var a = e + ((t & n) | (~t & r)) + (i >>> 0) + o;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._gg = function (e, t, n, r, i, s, o) {
            var a = e + ((t & r) | (n & ~r)) + (i >>> 0) + o;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._hh = function (e, t, n, r, i, s, o) {
            var a = e + (t ^ n ^ r) + (i >>> 0) + o;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._ii = function (e, t, n, r, i, s, o) {
            var a = e + (n ^ (t | ~r)) + (i >>> 0) + o;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._blocksize = 16),
          (a._digestsize = 16),
          (e.exports = function (e, t) {
            if (null == e) throw new Error("Illegal argument " + e);
            var n = r.wordsToBytes(a(e, t));
            return t && t.asBytes ? n : t && t.asString ? o.bytesToString(n) : r.bytesToHex(n);
          });
      },
      1935: function (e, t) {
        var n, r, i;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
          (r = [e]),
          (n = function (e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (void 0 === globalThis.browser || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
              const t = "The message port closed before a response was received.",
                n = (e) => {
                  const n = {
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
                  if (0 === Object.keys(n).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                  class r extends WeakMap {
                    constructor(e, t = undefined) {
                      super(t), (this.createItem = e);
                    }
                    get(e) {
                      return this.has(e) || this.set(e, this.createItem(e)), super.get(e);
                    }
                  }
                  const i = (e) => e && "object" == typeof e && "function" == typeof e.then,
                    s =
                      (t, n) =>
                      (...r) => {
                        e.runtime.lastError
                          ? t.reject(new Error(e.runtime.lastError.message))
                          : n.singleCallbackArg || (r.length <= 1 && !1 !== n.singleCallbackArg)
                          ? t.resolve(r[0])
                          : t.resolve(r);
                      },
                    o = (e) => (1 == e ? "argument" : "arguments"),
                    a = (e, t) =>
                      function (n, ...r) {
                        if (r.length < t.minArgs)
                          throw new Error(`Expected at least ${t.minArgs} ${o(t.minArgs)} for ${e}(), got ${r.length}`);
                        if (r.length > t.maxArgs)
                          throw new Error(`Expected at most ${t.maxArgs} ${o(t.maxArgs)} for ${e}(), got ${r.length}`);
                        return new Promise((i, o) => {
                          if (t.fallbackToNoCallback)
                            try {
                              n[e](...r, s({ resolve: i, reject: o }, t));
                            } catch (s) {
                              n[e](...r), (t.fallbackToNoCallback = !1), (t.noCallback = !0), i();
                            }
                          else t.noCallback ? (n[e](...r), i()) : n[e](...r, s({ resolve: i, reject: o }, t));
                        });
                      },
                    c = (e, t, n) => new Proxy(t, { apply: (t, r, i) => n.call(r, e, ...i) });
                  let u = Function.call.bind(Object.prototype.hasOwnProperty);
                  const l = (e, t = {}, n = {}) => {
                      let r = Object.create(null),
                        i = {
                          has: (t, n) => n in e || n in r,
                          get(i, s, o) {
                            if (s in r) return r[s];
                            if (!(s in e)) return;
                            let d = e[s];
                            if ("function" == typeof d)
                              if ("function" == typeof t[s]) d = c(e, e[s], t[s]);
                              else if (u(n, s)) {
                                let t = a(s, n[s]);
                                d = c(e, e[s], t);
                              } else d = d.bind(e);
                            else if ("object" == typeof d && null !== d && (u(t, s) || u(n, s))) d = l(d, t[s], n[s]);
                            else {
                              if (!u(n, "*"))
                                return (
                                  Object.defineProperty(r, s, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => e[s],
                                    set(t) {
                                      e[s] = t;
                                    }
                                  }),
                                  d
                                );
                              d = l(d, t[s], n["*"]);
                            }
                            return (r[s] = d), d;
                          },
                          set: (t, n, i, s) => (n in r ? (r[n] = i) : (e[n] = i), !0),
                          defineProperty: (e, t, n) => Reflect.defineProperty(r, t, n),
                          deleteProperty: (e, t) => Reflect.deleteProperty(r, t)
                        },
                        s = Object.create(e);
                      return new Proxy(s, i);
                    },
                    d = (e) => ({
                      addListener(t, n, ...r) {
                        t.addListener(e.get(n), ...r);
                      },
                      hasListener: (t, n) => t.hasListener(e.get(n)),
                      removeListener(t, n) {
                        t.removeListener(e.get(n));
                      }
                    }),
                    h = new r((e) =>
                      "function" != typeof e
                        ? e
                        : function (t) {
                            const n = l(t, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
                            e(n);
                          }
                    ),
                    f = new r((e) =>
                      "function" != typeof e
                        ? e
                        : function (t, n, r) {
                            let s,
                              o,
                              a = !1,
                              c = new Promise((e) => {
                                s = function (t) {
                                  (a = !0), e(t);
                                };
                              });
                            try {
                              o = e(t, n, s);
                            } catch (e) {
                              o = Promise.reject(e);
                            }
                            const u = !0 !== o && i(o);
                            if (!0 !== o && !u && !a) return !1;
                            const l = (e) => {
                              e.then(
                                (e) => {
                                  r(e);
                                },
                                (e) => {
                                  let t;
                                  (t =
                                    e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred"),
                                    r({ __mozWebExtensionPolyfillReject__: !0, message: t });
                                }
                              ).catch((e) => {});
                            };
                            return l(u ? o : c), !0;
                          }
                    ),
                    p = ({ reject: n, resolve: r }, i) => {
                      e.runtime.lastError
                        ? e.runtime.lastError.message === t
                          ? r()
                          : n(new Error(e.runtime.lastError.message))
                        : i && i.__mozWebExtensionPolyfillReject__
                        ? n(new Error(i.message))
                        : r(i);
                    },
                    g = (e, t, n, ...r) => {
                      if (r.length < t.minArgs)
                        throw new Error(`Expected at least ${t.minArgs} ${o(t.minArgs)} for ${e}(), got ${r.length}`);
                      if (r.length > t.maxArgs)
                        throw new Error(`Expected at most ${t.maxArgs} ${o(t.maxArgs)} for ${e}(), got ${r.length}`);
                      return new Promise((e, t) => {
                        const i = p.bind(null, { resolve: e, reject: t });
                        r.push(i), n.sendMessage(...r);
                      });
                    },
                    m = {
                      devtools: { network: { onRequestFinished: d(h) } },
                      runtime: {
                        onMessage: d(f),
                        onMessageExternal: d(f),
                        sendMessage: g.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
                      },
                      tabs: { sendMessage: g.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) }
                    },
                    v = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
                  return (n.privacy = { network: { "*": v }, services: { "*": v }, websites: { "*": v } }), l(e, m, n);
                };
              e.exports = n(chrome);
            } else e.exports = globalThis.browser;
          }),
          void 0 === (i = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = i);
      },
      4835: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            VERSION: () => i,
            after: () => Dt,
            all: () => en,
            allKeys: () => me,
            any: () => tn,
            assign: () => De,
            before: () => Rt,
            bind: () => xt,
            bindAll: () => Tt,
            chain: () => bt,
            chunk: () => jn,
            clone: () => je,
            collect: () => Jt,
            compact: () => kn,
            compose: () => Pt,
            constant: () => Z,
            contains: () => nn,
            countBy: () => vn,
            create: () => Le,
            debounce: () => Ot,
            default: () => Hn,
            defaults: () => Re,
            defer: () => It,
            delay: () => kt,
            detect: () => zt,
            difference: () => Cn,
            drop: () => Tn,
            each: () => Vt,
            escape: () => ot,
            every: () => en,
            extend: () => Pe,
            extendOwn: () => De,
            filter: () => Zt,
            find: () => zt,
            findIndex: () => Ut,
            findKey: () => Lt,
            findLastIndex: () => $t,
            findWhere: () => Gt,
            first: () => Sn,
            flatten: () => In,
            foldl: () => Yt,
            foldr: () => Xt,
            forEach: () => Vt,
            functions: () => Be,
            get: () => He,
            groupBy: () => gn,
            has: () => We,
            head: () => Sn,
            identity: () => ze,
            include: () => nn,
            includes: () => nn,
            indexBy: () => mn,
            indexOf: () => Ht,
            initial: () => An,
            inject: () => Yt,
            intersection: () => Pn,
            invert: () => Oe,
            invoke: () => rn,
            isArguments: () => K,
            isArray: () => G,
            isArrayBuffer: () => L,
            isBoolean: () => I,
            isDataView: () => z,
            isDate: () => P,
            isElement: () => C,
            isEmpty: () => ce,
            isEqual: () => ge,
            isError: () => R,
            isFinite: () => Y,
            isFunction: () => $,
            isMap: () => Se,
            isMatch: () => ue,
            isNaN: () => X,
            isNull: () => _,
            isNumber: () => N,
            isObject: () => T,
            isRegExp: () => D,
            isSet: () => _e,
            isString: () => B,
            isSymbol: () => M,
            isTypedArray: () => ie,
            isUndefined: () => k,
            isWeakMap: () => Te,
            isWeakSet: () => ke,
            iteratee: () => Ye,
            keys: () => ae,
            last: () => _n,
            lastIndexOf: () => Wt,
            map: () => Jt,
            mapObject: () => Ze,
            matcher: () => Ge,
            matches: () => Ge,
            max: () => an,
            memoize: () => _t,
            methods: () => Be,
            min: () => cn,
            mixin: () => $n,
            negate: () => Nt,
            noop: () => Qe,
            now: () => rt,
            object: () => Mn,
            omit: () => xn,
            once: () => Mt,
            pairs: () => Ce,
            partial: () => Et,
            partition: () => bn,
            pick: () => En,
            pluck: () => sn,
            property: () => Ve,
            propertyOf: () => et,
            random: () => nt,
            range: () => Ln,
            reduce: () => Yt,
            reduceRight: () => Xt,
            reject: () => Qt,
            rest: () => Tn,
            restArguments: () => S,
            result: () => gt,
            sample: () => dn,
            select: () => Zt,
            shuffle: () => hn,
            size: () => yn,
            some: () => tn,
            sortBy: () => fn,
            sortedIndex: () => Ft,
            tail: () => Tn,
            take: () => Sn,
            tap: () => Ue,
            template: () => pt,
            templateSettings: () => ct,
            throttle: () => Ct,
            times: () => tt,
            toArray: () => ln,
            toPath: () => $e,
            transpose: () => Dn,
            unescape: () => at,
            union: () => Nn,
            uniq: () => Bn,
            unique: () => Bn,
            uniqueId: () => vt,
            unzip: () => Dn,
            values: () => Ie,
            where: () => on,
            without: () => On,
            wrap: () => Bt,
            zip: () => Rn
          });
        var r = {};
        n.r(r),
          n.d(r, {
            VERSION: () => i,
            after: () => Dt,
            all: () => en,
            allKeys: () => me,
            any: () => tn,
            assign: () => De,
            before: () => Rt,
            bind: () => xt,
            bindAll: () => Tt,
            chain: () => bt,
            chunk: () => jn,
            clone: () => je,
            collect: () => Jt,
            compact: () => kn,
            compose: () => Pt,
            constant: () => Z,
            contains: () => nn,
            countBy: () => vn,
            create: () => Le,
            debounce: () => Ot,
            default: () => Fn,
            defaults: () => Re,
            defer: () => It,
            delay: () => kt,
            detect: () => zt,
            difference: () => Cn,
            drop: () => Tn,
            each: () => Vt,
            escape: () => ot,
            every: () => en,
            extend: () => Pe,
            extendOwn: () => De,
            filter: () => Zt,
            find: () => zt,
            findIndex: () => Ut,
            findKey: () => Lt,
            findLastIndex: () => $t,
            findWhere: () => Gt,
            first: () => Sn,
            flatten: () => In,
            foldl: () => Yt,
            foldr: () => Xt,
            forEach: () => Vt,
            functions: () => Be,
            get: () => He,
            groupBy: () => gn,
            has: () => We,
            head: () => Sn,
            identity: () => ze,
            include: () => nn,
            includes: () => nn,
            indexBy: () => mn,
            indexOf: () => Ht,
            initial: () => An,
            inject: () => Yt,
            intersection: () => Pn,
            invert: () => Oe,
            invoke: () => rn,
            isArguments: () => K,
            isArray: () => G,
            isArrayBuffer: () => L,
            isBoolean: () => I,
            isDataView: () => z,
            isDate: () => P,
            isElement: () => C,
            isEmpty: () => ce,
            isEqual: () => ge,
            isError: () => R,
            isFinite: () => Y,
            isFunction: () => $,
            isMap: () => Se,
            isMatch: () => ue,
            isNaN: () => X,
            isNull: () => _,
            isNumber: () => N,
            isObject: () => T,
            isRegExp: () => D,
            isSet: () => _e,
            isString: () => B,
            isSymbol: () => M,
            isTypedArray: () => ie,
            isUndefined: () => k,
            isWeakMap: () => Te,
            isWeakSet: () => ke,
            iteratee: () => Ye,
            keys: () => ae,
            last: () => _n,
            lastIndexOf: () => Wt,
            map: () => Jt,
            mapObject: () => Ze,
            matcher: () => Ge,
            matches: () => Ge,
            max: () => an,
            memoize: () => _t,
            methods: () => Be,
            min: () => cn,
            mixin: () => $n,
            negate: () => Nt,
            noop: () => Qe,
            now: () => rt,
            object: () => Mn,
            omit: () => xn,
            once: () => Mt,
            pairs: () => Ce,
            partial: () => Et,
            partition: () => bn,
            pick: () => En,
            pluck: () => sn,
            property: () => Ve,
            propertyOf: () => et,
            random: () => nt,
            range: () => Ln,
            reduce: () => Yt,
            reduceRight: () => Xt,
            reject: () => Qt,
            rest: () => Tn,
            restArguments: () => S,
            result: () => gt,
            sample: () => dn,
            select: () => Zt,
            shuffle: () => hn,
            size: () => yn,
            some: () => tn,
            sortBy: () => fn,
            sortedIndex: () => Ft,
            tail: () => Tn,
            take: () => Sn,
            tap: () => Ue,
            template: () => pt,
            templateSettings: () => ct,
            throttle: () => Ct,
            times: () => tt,
            toArray: () => ln,
            toPath: () => $e,
            transpose: () => Dn,
            unescape: () => at,
            union: () => Nn,
            uniq: () => Bn,
            unique: () => Bn,
            uniqueId: () => vt,
            unzip: () => Dn,
            values: () => Ie,
            where: () => on,
            without: () => On,
            wrap: () => Bt,
            zip: () => Rn
          });
        var i = "1.13.6",
          s =
            ("object" == typeof self && self.self === self && self) ||
            ("object" == typeof global && global.global === global && global) ||
            Function("return this")() ||
            {},
          o = Array.prototype,
          a = Object.prototype,
          c = "undefined" != typeof Symbol ? Symbol.prototype : null,
          u = o.push,
          l = o.slice,
          d = a.toString,
          h = a.hasOwnProperty,
          f = "undefined" != typeof ArrayBuffer,
          p = "undefined" != typeof DataView,
          g = Array.isArray,
          m = Object.keys,
          v = Object.create,
          b = f && ArrayBuffer.isView,
          y = isNaN,
          w = isFinite,
          E = !{ toString: null }.propertyIsEnumerable("toString"),
          x = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
          A = Math.pow(2, 53) - 1;
        function S(e, t) {
          return (
            (t = null == t ? e.length - 1 : +t),
            function () {
              for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
              switch (t) {
                case 0:
                  return e.call(this, r);
                case 1:
                  return e.call(this, arguments[0], r);
                case 2:
                  return e.call(this, arguments[0], arguments[1], r);
              }
              var s = Array(t + 1);
              for (i = 0; i < t; i++) s[i] = arguments[i];
              return (s[t] = r), e.apply(this, s);
            }
          );
        }
        function T(e) {
          var t = typeof e;
          return "function" === t || ("object" === t && !!e);
        }
        function _(e) {
          return null === e;
        }
        function k(e) {
          return void 0 === e;
        }
        function I(e) {
          return !0 === e || !1 === e || "[object Boolean]" === d.call(e);
        }
        function C(e) {
          return !(!e || 1 !== e.nodeType);
        }
        function O(e) {
          var t = "[object " + e + "]";
          return function (e) {
            return d.call(e) === t;
          };
        }
        const B = O("String"),
          N = O("Number"),
          P = O("Date"),
          D = O("RegExp"),
          R = O("Error"),
          M = O("Symbol"),
          L = O("ArrayBuffer");
        var j = O("Function"),
          U = s.document && s.document.childNodes;
        "object" != typeof Int8Array &&
          "function" != typeof U &&
          (j = function (e) {
            return "function" == typeof e || !1;
          });
        const $ = j,
          F = O("Object");
        var q = p && F(new DataView(new ArrayBuffer(8))),
          H = "undefined" != typeof Map && F(new Map()),
          W = O("DataView");
        const z = q
            ? function (e) {
                return null != e && $(e.getInt8) && L(e.buffer);
              }
            : W,
          G = g || O("Array");
        function V(e, t) {
          return null != e && h.call(e, t);
        }
        var J = O("Arguments");
        !(function () {
          J(arguments) ||
            (J = function (e) {
              return V(e, "callee");
            });
        })();
        const K = J;
        function Y(e) {
          return !M(e) && w(e) && !isNaN(parseFloat(e));
        }
        function X(e) {
          return N(e) && y(e);
        }
        function Z(e) {
          return function () {
            return e;
          };
        }
        function Q(e) {
          return function (t) {
            var n = e(t);
            return "number" == typeof n && n >= 0 && n <= A;
          };
        }
        function ee(e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        }
        const te = ee("byteLength"),
          ne = Q(te);
        var re = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
        const ie = f
            ? function (e) {
                return b ? b(e) && !z(e) : ne(e) && re.test(d.call(e));
              }
            : Z(!1),
          se = ee("length");
        function oe(e, t) {
          t = (function (e) {
            for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
            return {
              contains: function (e) {
                return !0 === t[e];
              },
              push: function (n) {
                return (t[n] = !0), e.push(n);
              }
            };
          })(t);
          var n = x.length,
            r = e.constructor,
            i = ($(r) && r.prototype) || a,
            s = "constructor";
          for (V(e, s) && !t.contains(s) && t.push(s); n--; ) (s = x[n]) in e && e[s] !== i[s] && !t.contains(s) && t.push(s);
        }
        function ae(e) {
          if (!T(e)) return [];
          if (m) return m(e);
          var t = [];
          for (var n in e) V(e, n) && t.push(n);
          return E && oe(e, t), t;
        }
        function ce(e) {
          if (null == e) return !0;
          var t = se(e);
          return "number" == typeof t && (G(e) || B(e) || K(e)) ? 0 === t : 0 === se(ae(e));
        }
        function ue(e, t) {
          var n = ae(t),
            r = n.length;
          if (null == e) return !r;
          for (var i = Object(e), s = 0; s < r; s++) {
            var o = n[s];
            if (t[o] !== i[o] || !(o in i)) return !1;
          }
          return !0;
        }
        function le(e) {
          return e instanceof le ? e : this instanceof le ? void (this._wrapped = e) : new le(e);
        }
        function de(e) {
          return new Uint8Array(e.buffer || e, e.byteOffset || 0, te(e));
        }
        (le.VERSION = i),
          (le.prototype.value = function () {
            return this._wrapped;
          }),
          (le.prototype.valueOf = le.prototype.toJSON = le.prototype.value),
          (le.prototype.toString = function () {
            return String(this._wrapped);
          });
        var he = "[object DataView]";
        function fe(e, t, n, r) {
          if (e === t) return 0 !== e || 1 / e == 1 / t;
          if (null == e || null == t) return !1;
          if (e != e) return t != t;
          var i = typeof e;
          return ("function" === i || "object" === i || "object" == typeof t) && pe(e, t, n, r);
        }
        function pe(e, t, n, r) {
          e instanceof le && (e = e._wrapped), t instanceof le && (t = t._wrapped);
          var i = d.call(e);
          if (i !== d.call(t)) return !1;
          if (q && "[object Object]" == i && z(e)) {
            if (!z(t)) return !1;
            i = he;
          }
          switch (i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + e == "" + t;
            case "[object Number]":
              return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
              return +e == +t;
            case "[object Symbol]":
              return c.valueOf.call(e) === c.valueOf.call(t);
            case "[object ArrayBuffer]":
            case he:
              return pe(de(e), de(t), n, r);
          }
          var s = "[object Array]" === i;
          if (!s && ie(e)) {
            if (te(e) !== te(t)) return !1;
            if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
            s = !0;
          }
          if (!s) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var o = e.constructor,
              a = t.constructor;
            if (o !== a && !($(o) && o instanceof o && $(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
          }
          r = r || [];
          for (var u = (n = n || []).length; u--; ) if (n[u] === e) return r[u] === t;
          if ((n.push(e), r.push(t), s)) {
            if ((u = e.length) !== t.length) return !1;
            for (; u--; ) if (!fe(e[u], t[u], n, r)) return !1;
          } else {
            var l,
              h = ae(e);
            if (((u = h.length), ae(t).length !== u)) return !1;
            for (; u--; ) if (!V(t, (l = h[u])) || !fe(e[l], t[l], n, r)) return !1;
          }
          return n.pop(), r.pop(), !0;
        }
        function ge(e, t) {
          return fe(e, t);
        }
        function me(e) {
          if (!T(e)) return [];
          var t = [];
          for (var n in e) t.push(n);
          return E && oe(e, t), t;
        }
        function ve(e) {
          var t = se(e);
          return function (n) {
            if (null == n) return !1;
            var r = me(n);
            if (se(r)) return !1;
            for (var i = 0; i < t; i++) if (!$(n[e[i]])) return !1;
            return e !== xe || !$(n[be]);
          };
        }
        var be = "forEach",
          ye = ["clear", "delete"],
          we = ["get", "has", "set"],
          Ee = ye.concat(be, we),
          xe = ye.concat(we),
          Ae = ["add"].concat(ye, be, "has");
        const Se = H ? ve(Ee) : O("Map"),
          Te = H ? ve(xe) : O("WeakMap"),
          _e = H ? ve(Ae) : O("Set"),
          ke = O("WeakSet");
        function Ie(e) {
          for (var t = ae(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
          return r;
        }
        function Ce(e) {
          for (var t = ae(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
          return r;
        }
        function Oe(e) {
          for (var t = {}, n = ae(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
          return t;
        }
        function Be(e) {
          var t = [];
          for (var n in e) $(e[n]) && t.push(n);
          return t.sort();
        }
        function Ne(e, t) {
          return function (n) {
            var r = arguments.length;
            if ((t && (n = Object(n)), r < 2 || null == n)) return n;
            for (var i = 1; i < r; i++)
              for (var s = arguments[i], o = e(s), a = o.length, c = 0; c < a; c++) {
                var u = o[c];
                (t && void 0 !== n[u]) || (n[u] = s[u]);
              }
            return n;
          };
        }
        const Pe = Ne(me),
          De = Ne(ae),
          Re = Ne(me, !0);
        function Me(e) {
          if (!T(e)) return {};
          if (v) return v(e);
          var t = function () {};
          t.prototype = e;
          var n = new t();
          return (t.prototype = null), n;
        }
        function Le(e, t) {
          var n = Me(e);
          return t && De(n, t), n;
        }
        function je(e) {
          return T(e) ? (G(e) ? e.slice() : Pe({}, e)) : e;
        }
        function Ue(e, t) {
          return t(e), e;
        }
        function $e(e) {
          return G(e) ? e : [e];
        }
        function Fe(e) {
          return le.toPath(e);
        }
        function qe(e, t) {
          for (var n = t.length, r = 0; r < n; r++) {
            if (null == e) return;
            e = e[t[r]];
          }
          return n ? e : void 0;
        }
        function He(e, t, n) {
          var r = qe(e, Fe(t));
          return k(r) ? n : r;
        }
        function We(e, t) {
          for (var n = (t = Fe(t)).length, r = 0; r < n; r++) {
            var i = t[r];
            if (!V(e, i)) return !1;
            e = e[i];
          }
          return !!n;
        }
        function ze(e) {
          return e;
        }
        function Ge(e) {
          return (
            (e = De({}, e)),
            function (t) {
              return ue(t, e);
            }
          );
        }
        function Ve(e) {
          return (
            (e = Fe(e)),
            function (t) {
              return qe(t, e);
            }
          );
        }
        function Je(e, t, n) {
          if (void 0 === t) return e;
          switch (null == n ? 3 : n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 3:
              return function (n, r, i) {
                return e.call(t, n, r, i);
              };
            case 4:
              return function (n, r, i, s) {
                return e.call(t, n, r, i, s);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        }
        function Ke(e, t, n) {
          return null == e ? ze : $(e) ? Je(e, t, n) : T(e) && !G(e) ? Ge(e) : Ve(e);
        }
        function Ye(e, t) {
          return Ke(e, t, 1 / 0);
        }
        function Xe(e, t, n) {
          return le.iteratee !== Ye ? le.iteratee(e, t) : Ke(e, t, n);
        }
        function Ze(e, t, n) {
          t = Xe(t, n);
          for (var r = ae(e), i = r.length, s = {}, o = 0; o < i; o++) {
            var a = r[o];
            s[a] = t(e[a], a, e);
          }
          return s;
        }
        function Qe() {}
        function et(e) {
          return null == e
            ? Qe
            : function (t) {
                return He(e, t);
              };
        }
        function tt(e, t, n) {
          var r = Array(Math.max(0, e));
          t = Je(t, n, 1);
          for (var i = 0; i < e; i++) r[i] = t(i);
          return r;
        }
        function nt(e, t) {
          return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
        }
        (le.toPath = $e), (le.iteratee = Ye);
        const rt =
          Date.now ||
          function () {
            return new Date().getTime();
          };
        function it(e) {
          var t = function (t) {
              return e[t];
            },
            n = "(?:" + ae(e).join("|") + ")",
            r = RegExp(n),
            i = RegExp(n, "g");
          return function (e) {
            return (e = null == e ? "" : "" + e), r.test(e) ? e.replace(i, t) : e;
          };
        }
        const st = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
          ot = it(st),
          at = it(Oe(st)),
          ct = (le.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
        var ut = /(.)^/,
          lt = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
          dt = /\\|'|\r|\n|\u2028|\u2029/g;
        function ht(e) {
          return "\\" + lt[e];
        }
        var ft = /^\s*(\w|\$)+\s*$/;
        function pt(e, t, n) {
          !t && n && (t = n), (t = Re({}, t, le.templateSettings));
          var r = RegExp([(t.escape || ut).source, (t.interpolate || ut).source, (t.evaluate || ut).source].join("|") + "|$", "g"),
            i = 0,
            s = "__p+='";
          e.replace(r, function (t, n, r, o, a) {
            return (
              (s += e.slice(i, a).replace(dt, ht)),
              (i = a + t.length),
              n
                ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : o && (s += "';\n" + o + "\n__p+='"),
              t
            );
          }),
            (s += "';\n");
          var o,
            a = t.variable;
          if (a) {
            if (!ft.test(a)) throw new Error("variable is not a bare identifier: " + a);
          } else (s = "with(obj||{}){\n" + s + "}\n"), (a = "obj");
          s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
          try {
            o = new Function(a, "_", s);
          } catch (e) {
            throw ((e.source = s), e);
          }
          var c = function (e) {
            return o.call(this, e, le);
          };
          return (c.source = "function(" + a + "){\n" + s + "}"), c;
        }
        function gt(e, t, n) {
          var r = (t = Fe(t)).length;
          if (!r) return $(n) ? n.call(e) : n;
          for (var i = 0; i < r; i++) {
            var s = null == e ? void 0 : e[t[i]];
            void 0 === s && ((s = n), (i = r)), (e = $(s) ? s.call(e) : s);
          }
          return e;
        }
        var mt = 0;
        function vt(e) {
          var t = ++mt + "";
          return e ? e + t : t;
        }
        function bt(e) {
          var t = le(e);
          return (t._chain = !0), t;
        }
        function yt(e, t, n, r, i) {
          if (!(r instanceof t)) return e.apply(n, i);
          var s = Me(e.prototype),
            o = e.apply(s, i);
          return T(o) ? o : s;
        }
        var wt = S(function (e, t) {
          var n = wt.placeholder,
            r = function () {
              for (var i = 0, s = t.length, o = Array(s), a = 0; a < s; a++) o[a] = t[a] === n ? arguments[i++] : t[a];
              for (; i < arguments.length; ) o.push(arguments[i++]);
              return yt(e, r, this, this, o);
            };
          return r;
        });
        wt.placeholder = le;
        const Et = wt,
          xt = S(function (e, t, n) {
            if (!$(e)) throw new TypeError("Bind must be called on a function");
            var r = S(function (i) {
              return yt(e, r, t, this, n.concat(i));
            });
            return r;
          }),
          At = Q(se);
        function St(e, t, n, r) {
          if (((r = r || []), t || 0 === t)) {
            if (t <= 0) return r.concat(e);
          } else t = 1 / 0;
          for (var i = r.length, s = 0, o = se(e); s < o; s++) {
            var a = e[s];
            if (At(a) && (G(a) || K(a)))
              if (t > 1) St(a, t - 1, n, r), (i = r.length);
              else for (var c = 0, u = a.length; c < u; ) r[i++] = a[c++];
            else n || (r[i++] = a);
          }
          return r;
        }
        const Tt = S(function (e, t) {
          var n = (t = St(t, !1, !1)).length;
          if (n < 1) throw new Error("bindAll must be passed function names");
          for (; n--; ) {
            var r = t[n];
            e[r] = xt(e[r], e);
          }
          return e;
        });
        function _t(e, t) {
          var n = function (r) {
            var i = n.cache,
              s = "" + (t ? t.apply(this, arguments) : r);
            return V(i, s) || (i[s] = e.apply(this, arguments)), i[s];
          };
          return (n.cache = {}), n;
        }
        const kt = S(function (e, t, n) {
            return setTimeout(function () {
              return e.apply(null, n);
            }, t);
          }),
          It = Et(kt, le, 1);
        function Ct(e, t, n) {
          var r,
            i,
            s,
            o,
            a = 0;
          n || (n = {});
          var c = function () {
              (a = !1 === n.leading ? 0 : rt()), (r = null), (o = e.apply(i, s)), r || (i = s = null);
            },
            u = function () {
              var u = rt();
              a || !1 !== n.leading || (a = u);
              var l = t - (u - a);
              return (
                (i = this),
                (s = arguments),
                l <= 0 || l > t
                  ? (r && (clearTimeout(r), (r = null)), (a = u), (o = e.apply(i, s)), r || (i = s = null))
                  : r || !1 === n.trailing || (r = setTimeout(c, l)),
                o
              );
            };
          return (
            (u.cancel = function () {
              clearTimeout(r), (a = 0), (r = i = s = null);
            }),
            u
          );
        }
        function Ot(e, t, n) {
          var r,
            i,
            s,
            o,
            a,
            c = function () {
              var u = rt() - i;
              t > u ? (r = setTimeout(c, t - u)) : ((r = null), n || (o = e.apply(a, s)), r || (s = a = null));
            },
            u = S(function (u) {
              return (a = this), (s = u), (i = rt()), r || ((r = setTimeout(c, t)), n && (o = e.apply(a, s))), o;
            });
          return (
            (u.cancel = function () {
              clearTimeout(r), (r = s = a = null);
            }),
            u
          );
        }
        function Bt(e, t) {
          return Et(t, e);
        }
        function Nt(e) {
          return function () {
            return !e.apply(this, arguments);
          };
        }
        function Pt() {
          var e = arguments,
            t = e.length - 1;
          return function () {
            for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
            return r;
          };
        }
        function Dt(e, t) {
          return function () {
            if (--e < 1) return t.apply(this, arguments);
          };
        }
        function Rt(e, t) {
          var n;
          return function () {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
          };
        }
        const Mt = Et(Rt, 2);
        function Lt(e, t, n) {
          t = Xe(t, n);
          for (var r, i = ae(e), s = 0, o = i.length; s < o; s++) if (t(e[(r = i[s])], r, e)) return r;
        }
        function jt(e) {
          return function (t, n, r) {
            n = Xe(n, r);
            for (var i = se(t), s = e > 0 ? 0 : i - 1; s >= 0 && s < i; s += e) if (n(t[s], s, t)) return s;
            return -1;
          };
        }
        const Ut = jt(1),
          $t = jt(-1);
        function Ft(e, t, n, r) {
          for (var i = (n = Xe(n, r, 1))(t), s = 0, o = se(e); s < o; ) {
            var a = Math.floor((s + o) / 2);
            n(e[a]) < i ? (s = a + 1) : (o = a);
          }
          return s;
        }
        function qt(e, t, n) {
          return function (r, i, s) {
            var o = 0,
              a = se(r);
            if ("number" == typeof s) e > 0 ? (o = s >= 0 ? s : Math.max(s + a, o)) : (a = s >= 0 ? Math.min(s + 1, a) : s + a + 1);
            else if (n && s && a) return r[(s = n(r, i))] === i ? s : -1;
            if (i != i) return (s = t(l.call(r, o, a), X)) >= 0 ? s + o : -1;
            for (s = e > 0 ? o : a - 1; s >= 0 && s < a; s += e) if (r[s] === i) return s;
            return -1;
          };
        }
        const Ht = qt(1, Ut, Ft),
          Wt = qt(-1, $t);
        function zt(e, t, n) {
          var r = (At(e) ? Ut : Lt)(e, t, n);
          if (void 0 !== r && -1 !== r) return e[r];
        }
        function Gt(e, t) {
          return zt(e, Ge(t));
        }
        function Vt(e, t, n) {
          var r, i;
          if (((t = Je(t, n)), At(e))) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
          else {
            var s = ae(e);
            for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e);
          }
          return e;
        }
        function Jt(e, t, n) {
          t = Xe(t, n);
          for (var r = !At(e) && ae(e), i = (r || e).length, s = Array(i), o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            s[o] = t(e[a], a, e);
          }
          return s;
        }
        function Kt(e) {
          return function (t, n, r, i) {
            var s = arguments.length >= 3;
            return (function (t, n, r, i) {
              var s = !At(t) && ae(t),
                o = (s || t).length,
                a = e > 0 ? 0 : o - 1;
              for (i || ((r = t[s ? s[a] : a]), (a += e)); a >= 0 && a < o; a += e) {
                var c = s ? s[a] : a;
                r = n(r, t[c], c, t);
              }
              return r;
            })(t, Je(n, i, 4), r, s);
          };
        }
        const Yt = Kt(1),
          Xt = Kt(-1);
        function Zt(e, t, n) {
          var r = [];
          return (
            (t = Xe(t, n)),
            Vt(e, function (e, n, i) {
              t(e, n, i) && r.push(e);
            }),
            r
          );
        }
        function Qt(e, t, n) {
          return Zt(e, Nt(Xe(t)), n);
        }
        function en(e, t, n) {
          t = Xe(t, n);
          for (var r = !At(e) && ae(e), i = (r || e).length, s = 0; s < i; s++) {
            var o = r ? r[s] : s;
            if (!t(e[o], o, e)) return !1;
          }
          return !0;
        }
        function tn(e, t, n) {
          t = Xe(t, n);
          for (var r = !At(e) && ae(e), i = (r || e).length, s = 0; s < i; s++) {
            var o = r ? r[s] : s;
            if (t(e[o], o, e)) return !0;
          }
          return !1;
        }
        function nn(e, t, n, r) {
          return At(e) || (e = Ie(e)), ("number" != typeof n || r) && (n = 0), Ht(e, t, n) >= 0;
        }
        const rn = S(function (e, t, n) {
          var r, i;
          return (
            $(t) ? (i = t) : ((t = Fe(t)), (r = t.slice(0, -1)), (t = t[t.length - 1])),
            Jt(e, function (e) {
              var s = i;
              if (!s) {
                if ((r && r.length && (e = qe(e, r)), null == e)) return;
                s = e[t];
              }
              return null == s ? s : s.apply(e, n);
            })
          );
        });
        function sn(e, t) {
          return Jt(e, Ve(t));
        }
        function on(e, t) {
          return Zt(e, Ge(t));
        }
        function an(e, t, n) {
          var r,
            i,
            s = -1 / 0,
            o = -1 / 0;
          if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
            for (var a = 0, c = (e = At(e) ? e : Ie(e)).length; a < c; a++) null != (r = e[a]) && r > s && (s = r);
          else
            (t = Xe(t, n)),
              Vt(e, function (e, n, r) {
                ((i = t(e, n, r)) > o || (i === -1 / 0 && s === -1 / 0)) && ((s = e), (o = i));
              });
          return s;
        }
        function cn(e, t, n) {
          var r,
            i,
            s = 1 / 0,
            o = 1 / 0;
          if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
            for (var a = 0, c = (e = At(e) ? e : Ie(e)).length; a < c; a++) null != (r = e[a]) && r < s && (s = r);
          else
            (t = Xe(t, n)),
              Vt(e, function (e, n, r) {
                ((i = t(e, n, r)) < o || (i === 1 / 0 && s === 1 / 0)) && ((s = e), (o = i));
              });
          return s;
        }
        var un = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        function ln(e) {
          return e ? (G(e) ? l.call(e) : B(e) ? e.match(un) : At(e) ? Jt(e, ze) : Ie(e)) : [];
        }
        function dn(e, t, n) {
          if (null == t || n) return At(e) || (e = Ie(e)), e[nt(e.length - 1)];
          var r = ln(e),
            i = se(r);
          t = Math.max(Math.min(t, i), 0);
          for (var s = i - 1, o = 0; o < t; o++) {
            var a = nt(o, s),
              c = r[o];
            (r[o] = r[a]), (r[a] = c);
          }
          return r.slice(0, t);
        }
        function hn(e) {
          return dn(e, 1 / 0);
        }
        function fn(e, t, n) {
          var r = 0;
          return (
            (t = Xe(t, n)),
            sn(
              Jt(e, function (e, n, i) {
                return { value: e, index: r++, criteria: t(e, n, i) };
              }).sort(function (e, t) {
                var n = e.criteria,
                  r = t.criteria;
                if (n !== r) {
                  if (n > r || void 0 === n) return 1;
                  if (n < r || void 0 === r) return -1;
                }
                return e.index - t.index;
              }),
              "value"
            )
          );
        }
        function pn(e, t) {
          return function (n, r, i) {
            var s = t ? [[], []] : {};
            return (
              (r = Xe(r, i)),
              Vt(n, function (t, i) {
                var o = r(t, i, n);
                e(s, t, o);
              }),
              s
            );
          };
        }
        const gn = pn(function (e, t, n) {
            V(e, n) ? e[n].push(t) : (e[n] = [t]);
          }),
          mn = pn(function (e, t, n) {
            e[n] = t;
          }),
          vn = pn(function (e, t, n) {
            V(e, n) ? e[n]++ : (e[n] = 1);
          }),
          bn = pn(function (e, t, n) {
            e[n ? 0 : 1].push(t);
          }, !0);
        function yn(e) {
          return null == e ? 0 : At(e) ? e.length : ae(e).length;
        }
        function wn(e, t, n) {
          return t in n;
        }
        const En = S(function (e, t) {
            var n = {},
              r = t[0];
            if (null == e) return n;
            $(r) ? (t.length > 1 && (r = Je(r, t[1])), (t = me(e))) : ((r = wn), (t = St(t, !1, !1)), (e = Object(e)));
            for (var i = 0, s = t.length; i < s; i++) {
              var o = t[i],
                a = e[o];
              r(a, o, e) && (n[o] = a);
            }
            return n;
          }),
          xn = S(function (e, t) {
            var n,
              r = t[0];
            return (
              $(r)
                ? ((r = Nt(r)), t.length > 1 && (n = t[1]))
                : ((t = Jt(St(t, !1, !1), String)),
                  (r = function (e, n) {
                    return !nn(t, n);
                  })),
              En(e, r, n)
            );
          });
        function An(e, t, n) {
          return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
        }
        function Sn(e, t, n) {
          return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : An(e, e.length - t);
        }
        function Tn(e, t, n) {
          return l.call(e, null == t || n ? 1 : t);
        }
        function _n(e, t, n) {
          return null == e || e.length < 1
            ? null == t || n
              ? void 0
              : []
            : null == t || n
            ? e[e.length - 1]
            : Tn(e, Math.max(0, e.length - t));
        }
        function kn(e) {
          return Zt(e, Boolean);
        }
        function In(e, t) {
          return St(e, t, !1);
        }
        const Cn = S(function (e, t) {
            return (
              (t = St(t, !0, !0)),
              Zt(e, function (e) {
                return !nn(t, e);
              })
            );
          }),
          On = S(function (e, t) {
            return Cn(e, t);
          });
        function Bn(e, t, n, r) {
          I(t) || ((r = n), (n = t), (t = !1)), null != n && (n = Xe(n, r));
          for (var i = [], s = [], o = 0, a = se(e); o < a; o++) {
            var c = e[o],
              u = n ? n(c, o, e) : c;
            t && !n ? ((o && s === u) || i.push(c), (s = u)) : n ? nn(s, u) || (s.push(u), i.push(c)) : nn(i, c) || i.push(c);
          }
          return i;
        }
        const Nn = S(function (e) {
          return Bn(St(e, !0, !0));
        });
        function Pn(e) {
          for (var t = [], n = arguments.length, r = 0, i = se(e); r < i; r++) {
            var s = e[r];
            if (!nn(t, s)) {
              var o;
              for (o = 1; o < n && nn(arguments[o], s); o++);
              o === n && t.push(s);
            }
          }
          return t;
        }
        function Dn(e) {
          for (var t = (e && an(e, se).length) || 0, n = Array(t), r = 0; r < t; r++) n[r] = sn(e, r);
          return n;
        }
        const Rn = S(Dn);
        function Mn(e, t) {
          for (var n = {}, r = 0, i = se(e); r < i; r++) t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
          return n;
        }
        function Ln(e, t, n) {
          null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
          for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; s < r; s++, e += n) i[s] = e;
          return i;
        }
        function jn(e, t) {
          if (null == t || t < 1) return [];
          for (var n = [], r = 0, i = e.length; r < i; ) n.push(l.call(e, r, (r += t)));
          return n;
        }
        function Un(e, t) {
          return e._chain ? le(t).chain() : t;
        }
        function $n(e) {
          return (
            Vt(Be(e), function (t) {
              var n = (le[t] = e[t]);
              le.prototype[t] = function () {
                var e = [this._wrapped];
                return u.apply(e, arguments), Un(this, n.apply(le, e));
              };
            }),
            le
          );
        }
        Vt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
          var t = o[e];
          le.prototype[e] = function () {
            var n = this._wrapped;
            return null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Un(this, n);
          };
        }),
          Vt(["concat", "join", "slice"], function (e) {
            var t = o[e];
            le.prototype[e] = function () {
              var e = this._wrapped;
              return null != e && (e = t.apply(e, arguments)), Un(this, e);
            };
          });
        const Fn = le;
        var qn = $n(r);
        qn._ = qn;
        const Hn = qn;
      }
    },
    s = {};
  function o(e) {
    var t = s[e];
    if (void 0 !== t) return t.exports;
    var n = (s[e] = { exports: {} });
    return i[e].call(n.exports, n, n.exports, o), n.exports;
  }
  (o.m = i),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (o.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var i = Object.create(null);
      o.r(i);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a))
        Object.getOwnPropertyNames(a).forEach((e) => (s[e] = () => n[e]));
      return (s.default = () => n), o.d(i, s), i;
    }),
    (o.d = (e, t) => {
      for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) => Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) => e + "/bundle.js"),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (r = "source:"),
    (o.l = (e, t, i, s) => {
      if (n[e]) n[e].push(t);
      else {
        var a, c;
        if (void 0 !== i)
          for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
            var d = u[l];
            if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + i) {
              a = d;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", r + i),
          (a.src = e)),
          (n[e] = [t]);
        var h = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(f);
            var i = n[e];
            if ((delete n[e], a.parentNode && a.parentNode.removeChild(a), i && i.forEach((e) => e(r)), t)) return t(r);
          },
          f = setTimeout(h.bind(null, void 0, { type: "timeout", target: a }), 12e4);
        (a.onerror = h.bind(null, a.onerror)), (a.onload = h.bind(null, a.onload)), c && document.head.appendChild(a);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = ""),
    (() => {
      var e = { 372: 0 };
      o.f.j = (t, n) => {
        var r = o.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var i = new Promise((n, i) => (r = e[t] = [n, i]));
            n.push((r[2] = i));
            var s = o.p + o.u(t),
              a = new Error();
            o.l(
              s,
              (n) => {
                if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = s),
                    r[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var r,
            i,
            [s, a, c] = n,
            u = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (r in a) o.o(a, r) && (o.m[r] = a[r]);
            if (c) c(o);
          }
          for (t && t(n); u < s.length; u++) (i = s[u]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.webpackChunksource = self.webpackChunksource || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var a = {};
  (() => {
    "use strict";
    o.r(a), o.d(a, { EbatesApp: () => wc });
    var e = {};
    o.r(e),
      o.d(e, {
        Groupon: () => Ga,
        HomeDomain: () => za,
        InStoreCashBack: () => Va,
        InstalledExtensions: () => ec,
        Merchant: () => Ja,
        PriceMagic: () => Ka,
        ProcessInterstitial: () => Ya,
        ProductPage: () => Xa,
        Serp: () => Za,
        TaxesPromo: () => Qa
      });
    var t = o(1935),
      n = o.n(t);
    const r = "unknown";
    var i, s;
    !(function (e) {
      (e[(e.DOCUMENTCOMPLETE = 0)] = "DOCUMENTCOMPLETE"),
        (e[(e.BEFORENAVIGATE = 1)] = "BEFORENAVIGATE"),
        (e[(e.TABCHANGED = 2)] = "TABCHANGED"),
        (e[(e.TABUPDATED = 3)] = "TABUPDATED"),
        (e[(e.NAVIGATIONCOMMITTED = 4)] = "NAVIGATIONCOMMITTED"),
        (e[(e.TABCLOSED = 5)] = "TABCLOSED");
    })(i || (i = {})),
      (function (e) {
        (e[(e.NEWTAB = -1)] = "NEWTAB"),
          (e[(e.CURRENTTAB = -2)] = "CURRENTTAB"),
          (e[(e.NEWWINDOW = -3)] = "NEWWINDOW"),
          (e[(e.ALLTABS = -4)] = "ALLTABS"),
          (e[(e.BACKGROUNDTAB = -6)] = "BACKGROUNDTAB");
      })(s || (s = {}));
    class c {
      name = "chromium";
      version = r;
      isLegacyEdge = !1;
      isWebkitEdge = !1;
      isChrome = !1;
      isFirefox = !1;
      isEdge = !1;
      isWebkit = !1;
      isLegacySafari = !1;
      isSafariApp = !1;
      isSafariWebext = !1;
      isSafari = !1;
      DOCUMENTCOMPLETE = i.DOCUMENTCOMPLETE;
      BEFORENAVIGATE = i.BEFORENAVIGATE;
      TABCHANGED = i.TABCHANGED;
      TABUPDATED = i.TABUPDATED;
      NAVIGATIONCOMMITTED = i.NAVIGATIONCOMMITTED;
      TABCLOSED = i.TABCLOSED;
      NEWTAB = s.NEWTAB;
      CURRENTTAB = s.CURRENTTAB;
      NEWWINDOW = s.NEWWINDOW;
      ALLTABS = s.ALLTABS;
      BACKGROUNDTAB = s.BACKGROUNDTAB;
      constructor() {
        this.parseUserAgent(),
          (this.isLegacyEdge = "Edge" === this.name),
          (this.isWebkitEdge = "WebkitEdge" === this.name),
          (this.isChrome = "Chrome" === this.name),
          (this.isFirefox = "Firefox" === this.name),
          (this.isEdge = this.isLegacyEdge || this.isWebkitEdge),
          (this.isWebkit = this.isChrome || this.isWebkitEdge || "Opera" === this.name || "Avast" === this.name),
          (this.isLegacySafari = !1),
          (this.isSafariApp = !1),
          (this.isSafari = this.isLegacySafari || this.isSafariApp || this.isSafariWebext);
      }
      parseUserAgentData(e) {
        const t = { "Google Chrome": "Chrome", "Microsoft Edge": "WebkitEdge", Opera: "Opera" };
        e.brands?.forEach((e) => {
          t[e.brand] && ((this.name = t[e.brand]), (this.version = e.version));
        });
      }
      parseUserAgent() {
        if (navigator.userAgentData) this.parseUserAgentData(navigator.userAgentData);
        else if (navigator.userAgent)
          if (/Safari\/.+/i.test(navigator.userAgent) && !/(Chrome|Chromium)\/.+/i.test(navigator.userAgent))
            (this.name = "Safari"), (this.isSafariWebext = !0), (this.version = navigator.userAgent.match(/ Version\/(.+) /i)?.[1] || r);
          else {
            const [, e, t] = navigator.userAgent?.match(/.*(opr|yabrowser|mrchrome|chrome|firefox|edge|edg|avast)\/?\s*([.\d]+)/i) || [];
            if ("object" == typeof chrome && "object" == typeof chrome.avast) this.name = "Avast";
            else
              switch (e?.toLowerCase()) {
                case "avast":
                  this.name = "Avast";
                  break;
                case "opr":
                  this.name = "Opera";
                  break;
                case "firefox":
                  this.name = "Firefox";
                  break;
                case "edge":
                  this.name = "Edge";
                  break;
                case "edg":
                  this.name = "WebkitEdge";
                  break;
                default:
                  this.name = "Chrome";
              }
            this.version = t || r;
          }
      }
    }
    class u extends c {
      tabManager = [];
      fnCallbacks = {};
      oPendingNavigates = {};
      constructor() {
        super(),
          n().tabs.onActivated.addListener(async (e) => {
            this.oPendingNavigates[e.tabId] && this.navigate(this.oPendingNavigates[e.tabId]);
            const t = await n().tabs.get(e.tabId);
            n().runtime.lastError || this.tabChanged(t);
          }),
          n().windows.onFocusChanged.addListener(async (e) => {
            if (e !== n().windows.WINDOW_ID_NONE) {
              const t = await n().tabs.query({ windowId: e, active: !0 });
              t && this.tabChanged(t.pop());
            }
          }),
          n().tabs.onRemoved.addListener((e) => {
            this.tabManager.splice(e, 1),
              this.fireEvent(i.TABCLOSED, {
                name: i.TABCLOSED,
                tabId: e,
                url: this.tabManager[e] && this.tabManager[e].url ? this.tabManager[e].url : ""
              });
          }),
          n().tabs.onUpdated.addListener((e, t) => {
            t.url && ((this.tabManager[e] = { url: t.url }), this.fireEvent(i.TABUPDATED, { name: i.TABUPDATED, tabId: e, url: t.url }));
          }),
          n().webNavigation &&
            (n().webNavigation.onCommitted.addListener((e) => this.fireWebNavigationEvent(i.NAVIGATIONCOMMITTED, e)),
            n().webNavigation.onDOMContentLoaded.addListener((e) => this.fireWebNavigationEvent(i.DOCUMENTCOMPLETE, e))),
          n().webRequest.onBeforeRequest.addListener((e) => this.onBeforeRequestHandler(e), {
            urls: ["<all_urls>"],
            types: ["main_frame"]
          }),
          n().runtime.onMessage.addListener((e) => this.onMessageHandler(e));
      }
      onBeforeRequestHandler(e) {
        (0 === e.frameId || (this.isSafariWebext && 0 === e.parentFrameId)) &&
          e.url &&
          this.fireEvent(i.BEFORENAVIGATE, { name: i.BEFORENAVIGATE, tabId: e.tabId, url: e.url });
      }
      async fireWebNavigationEvent(e, t) {
        if (0 !== t.frameId) return Promise.resolve();
        let r = t.tabId;
        if (this.isSafariWebext && 0 === r) {
          const e = await chrome.tabs.query({ active: !0, currentWindow: !0 });
          if (e.length > 0) {
            const t = e[0];
            t?.id && (r = t.id);
          }
        }
        try {
          const i = await n().tabs.get(r);
          !n().runtime.lastError && i && this.fireEvent(e, { name: e, tabId: r, url: t.url, active: i.active });
        } catch {}
      }
      onMessageHandler(e) {
        return new Promise((t) => {
          switch (e.action) {
            case "ci_browser_navigate":
              this.navigate(e).then(t);
              break;
            case "ci_browser_redirect":
              this.redirect(e).then(t);
          }
        });
      }
      navigate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
        const r = new Promise((t) => {
          let r;
          r = "string" == typeof e ? { url: e, tabId: s.NEWTAB } : e;
          const i = r.tabId || s.CURRENTTAB,
            o = { url: r.url };
          switch (i) {
            case s.NEWTAB:
              (o.active = !0),
                void 0 !== r.active && (o.active = r.active),
                void 0 !== r.pinned && (o.pinned = r.pinned),
                n().tabs.create(o).then(t);
              break;
            case s.BACKGROUNDTAB:
              (o.active = !1), void 0 !== r.pinned && (o.pinned = r.pinned), n().tabs.create(o).then(t);
              break;
            case s.CURRENTTAB:
              this.redirect(r.url).then(t);
              break;
            case s.NEWWINDOW:
              (o.focused = !0), n().windows.create(o).then(t);
              break;
            case s.ALLTABS:
              n()
                .windows.getAll({ populate: !0 })
                .then((e) => {
                  e.forEach((e) => {
                    e.tabs?.forEach(function (e) {
                      n().tabs.update(e.id, o);
                    });
                  }),
                    t(null);
                });
              break;
            default:
              n()
                .tabs.get(r.tabId)
                .then((e) => {
                  !n().runtime.lastError && e
                    ? (n().tabs.update(r.tabId, o).then(t), delete this.oPendingNavigates[r.tabId])
                    : (this.oPendingNavigates[r.tabId] = r);
                });
          }
        });
        return r.then(t), r;
      }
      redirect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
        const r = new Promise((t) => {
          const r = "object" == typeof e ? e.url : e;
          n()
            .tabs.query({ active: !0, currentWindow: !0 })
            .then((e) => {
              e.length > 0 && n().tabs.update(e[0].id, { url: r }), t(e[0]);
            });
        });
        return r.then(t), r;
      }
      attachEvent(e, t) {
        this.fnCallbacks[e] || (this.fnCallbacks[e] = []), this.fnCallbacks[e].push(t);
      }
      detachEvent(e, t) {
        if (this.fnCallbacks[e])
          for (let n = this.fnCallbacks[e].length - 1; n >= 0; n--)
            this.fnCallbacks[e][n] && t === this.fnCallbacks[e][n] && this.fnCallbacks[e].splice(n, 1);
      }
      fireEvent(e, t) {
        this.fnCallbacks[e]?.forEach((e) => {
          "function" == typeof e && e.call(this, t);
        });
      }
      tabChanged(e) {
        if (e) {
          const t = { action: "event", data: { name: i.TABCHANGED, tabId: e.id, url: e.url } };
          e.id &&
            0 !== e.url?.indexOf("chrome://") &&
            n()
              .tabs.sendMessage(e.id, t)
              .catch((e) => {}),
            this.fireEvent(i.TABCHANGED, t.data);
        }
      }
      removeTab(e) {
        n().tabs.remove("number" == typeof e ? e : e.id);
      }
    }
    const l = u;
    (u.prototype.closeTab = u.prototype.removeTab), (u.prototype.on = u.prototype.attachEvent), (u.prototype.emit = u.prototype.fireEvent);
    class d {
      fnCallbacks = {};
      fnListeners = {};
      constructor() {
        const e = n().runtime.getManifest();
        (this.settings = { name: e.name, version: e.version, optionsPage: e.options_ui }),
          n().runtime.onMessage.addListener((e, t) => this.onMessageHandler(e, t)),
          n().runtime.onMessageExternal?.addListener((e, t) => this.onMessageExternalHandler(e, t));
      }
      onMessageHandler(e, t) {
        return new Promise((r) => {
          let i, o;
          switch (e.action) {
            case "event":
              (o = e.name),
                (i = { name: o, url: t.tab ? t.tab.url : t.url }),
                t.tab && (i.tabId = t.tab.id),
                e.data && (i.data = e.data.data),
                e.data && e.data.tabId
                  ? ((i.action = "event"),
                    e.data.tabId === s.ALLTABS
                      ? this.broadcastEvent(i).then(r)
                      : ((i.tabId = e.data.tabId), n().tabs.sendMessage(e.data.tabId, i).then(r)))
                  : this.fnCallbacks[o]
                  ? this.fnCallbacks[o].forEach((e) => {
                      2 === e.length ? e.call(this, i, r) : r(e.call(this, i, () => {}));
                    })
                  : (this.fnListeners[o] || (this.fnListeners[o] = []), this.fnListeners[o].push({ listener: r, message: i }));
              break;
            case "ci_extension_getSettings":
              r({ name: this.name, version: this.version });
          }
        });
      }
      onMessageExternalHandler(e, t) {
        return new Promise((n) => {
          if ("event" === e.action && t.id && this.fnCallbacks[e.name]) {
            const r = e.name,
              i = { name: r, url: t.tab ? t.tab.url : t.url, extensionId: t.id };
            e.data && (i.data = e.data.data),
              t.tab && (i.tabId = t.tab.id),
              this.fnCallbacks[r].forEach((e) => {
                2 === e.length ? e.call(this, i, n) : n(e.call(this, i, () => {}));
              });
          } else n(null);
        });
      }
      attachEvent(e, t) {
        this.fnListeners[e] &&
          (this.fnListeners[e].forEach((e) => {
            let { listener: n, message: r } = e;
            t.call(this, r, n);
          }),
          delete this.fnListeners[e]),
          this.fnCallbacks[e] || (this.fnCallbacks[e] = []),
          this.fnCallbacks[e].push(t);
      }
      detachEvent(e, t) {
        const n = this.fnCallbacks[e];
        if (n) for (let e = n.length - 1; e >= 0; e--) n[e] && t === n[e] && n.splice(e, 1);
      }
      fireEvent(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
        const i = { action: "event", name: e, data: t };
        const o = new Promise((r) => {
          t.extensionId
            ? n().runtime.sendMessage(t.extensionId, i).then(r)
            : t.tabId === s.ALLTABS
            ? this.broadcastEvent(i).then(r)
            : t.tabId &&
              (function (e) {
                return !isNaN(parseInt(e, 10)) && isFinite(e);
              })(t.tabId) &&
              t.tabId >= 0
            ? ((i.tabId = t.tabId),
              n()
                .tabs.sendMessage(t.tabId, i)
                .then(r)
                .catch((e) => {}))
            : n()
                .tabs.query({ active: !0, currentWindow: !0 })
                .then((e) => {
                  const t = e?.[0];
                  t &&
                    t.id &&
                    t.url &&
                    -1 === t.url.indexOf("chrome://") &&
                    ((i.tabId = t.id),
                    n()
                      .tabs.sendMessage(t.id, i)
                      .then(r)
                      .catch((e) => {}));
                }),
            this.fnCallbacks[e] &&
              this.fnCallbacks[e].forEach((e) => {
                e.call(this, t, r);
              });
        });
        return o.then(r), o;
      }
      getItem(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
        const r = new Promise((t) => {
          "string" == typeof e || Array.isArray(e)
            ? n()
                .storage.local.get(e)
                .then((n) => {
                  t("string" == typeof e ? (n ? n[e] : null) : n);
                })
            : t(null);
        });
        return r.then(t), r;
      }
      setItem(e, t) {
        if ("string" == typeof e)
          if (void 0 === t) n().storage.local.remove(e);
          else {
            const r = {};
            (r[e] = t), n().storage.local.set(r);
          }
        else "object" == typeof e && n().storage.local.set(e);
      }
      getURL(e) {
        return n().runtime.getURL(e);
      }
      async broadcastEvent(e) {
        try {
          const t = await n().windows.getAll({ populate: !0 });
          return new Promise((r) => {
            t.forEach((t) => {
              t.tabs &&
                t.tabs.forEach((t) => {
                  t.id &&
                    t.url &&
                    -1 === t.url.indexOf("chrome://") &&
                    -1 === t.url.indexOf("about:") &&
                    ((e.tabId = t.id),
                    n()
                      .tabs.sendMessage(t.id, e)
                      .then(r)
                      .catch((e) => {}));
                });
            });
          });
        } catch {}
      }
      get name() {
        return this.settings.name;
      }
      get version() {
        return this.settings.version;
      }
      get optionsPage() {
        return this.settings.optionsPage;
      }
    }
    const h = d;
    (d.prototype.on = d.prototype.attachEvent), (d.prototype.emit = d.prototype.fireEvent);
    class f {
      advised = !1;
      listners = [];
      CLICK = "ButtonClick";
      constructor() {
        const e = n().runtime.getManifest();
        e.action ? (this.actionReference = n().action) : e.browser_action && (this.actionReference = n().browserAction);
      }
      onButtonClick(e) {
        for (const t of this.listners)
          try {
            t({ tabId: e.id, url: e.url, name: this.CLICK });
          } catch {}
      }
      attachEvent(e, t) {
        e === this.CLICK &&
          (this.advised ||
            (this.actionReference && this.actionReference.onClicked.addListener(this.onButtonClick.bind(this)), (this.advised = !0)),
          this.listners.push(t));
      }
      detachEvent(e, t) {
        if (e === this.CLICK) {
          for (let e = this.listners.length - 1; e >= 0; e--) this.listners[e] === t && this.listners.splice(e, 1);
          0 === this.listners.length &&
            ((this.advised = !1), this.actionReference && this.actionReference.onClicked.removeListener(this.onButtonClick.bind(this)));
        }
      }
      setIcon(e) {
        return !this.actionReference || (this.actionReference !== n().browserAction && this.actionReference !== n().action)
          ? Promise.resolve()
          : this.actionReference.setIcon({ path: e });
      }
      setPopup(e) {
        const t = e ? e.url : "";
        return !this.actionReference || (this.actionReference !== n().browserAction && this.actionReference !== n().action)
          ? Promise.resolve()
          : this.actionReference.setPopup({ popup: t });
      }
      setTitle(e) {
        return (this.actionReference && this.actionReference === n().browserAction) || this.actionReference === n().action
          ? this.actionReference.setTitle({ title: e })
          : Promise.resolve();
      }
      setBadgeText(e) {
        return this.actionReference && "setBadgeText" in this.actionReference
          ? this.actionReference.setBadgeText({ text: e.toString() })
          : Promise.resolve();
      }
      setBadgeBackgroundColor(e) {
        return this.actionReference && "setBadgeBackgroundColor" in this.actionReference
          ? this.actionReference.setBadgeBackgroundColor({
              color: (function (e) {
                const t = /rgb\((\d+), (\d+), (\d+)\)/.exec(e);
                if (t) return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), 255];
                {
                  const t = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16);
                  return [t >> 16, (65280 & t) >> 8, 255 & t, 255];
                }
              })(e)
            })
          : Promise.resolve();
      }
      setBadgeColor() {}
    }
    const p = f;
    f.prototype.on = f.prototype.attachEvent;
    const g = class {
        open() {
          return n().runtime.openOptionsPage();
        }
      },
      m = new (class {
        constructor() {
          (this.browser = new l()), (this.extension = new h()), (this.ui = { button: new p(), settings: new g() });
        }
      })(),
      v = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
    let b;
    const y = new Uint8Array(16);
    function w() {
      if (!b && ((b = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !b))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return b(y);
    }
    const E = [];
    for (let e = 0; e < 256; ++e) E.push((e + 256).toString(16).slice(1));
    function x(e, t = 0) {
      return (
        E[e[t + 0]] +
        E[e[t + 1]] +
        E[e[t + 2]] +
        E[e[t + 3]] +
        "-" +
        E[e[t + 4]] +
        E[e[t + 5]] +
        "-" +
        E[e[t + 6]] +
        E[e[t + 7]] +
        "-" +
        E[e[t + 8]] +
        E[e[t + 9]] +
        "-" +
        E[e[t + 10]] +
        E[e[t + 11]] +
        E[e[t + 12]] +
        E[e[t + 13]] +
        E[e[t + 14]] +
        E[e[t + 15]]
      );
    }
    const A = function (e, t, n) {
        if (v.randomUUID && !t && !e) return v.randomUUID();
        const r = (e = e || {}).random || (e.rng || w)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return x(r);
      },
      S = {
        CDN: "https://static.rakuten.com",
        member_api: "www.rakuten.com",
        domain: "www.rakuten.com",
        api: "apituner.ecbsn.com",
        search_api: "search.ecbsn.com",
        BASE: "https://%domain%",
        STORES: "https://%api%/apituner/button/domain/entity/list",
        STORE_REWARDS: "https://%api%/apituner/v1/store/reward/list?channel={channel}",
        STORE_DEALS_COUNT: "https://%api%/apituner/button/store/deal/count",
        DEALS: "https://%api%/apituner/button/store/deal/list",
        STORE_DEALS: "https://%api%/apituner/button/store/deal/list?storeId={storeId}",
        STORE_COUPONS: "https://api.rakuten.com/button-acs/stores/{storeId}/coupons",
        STORE_CONTENT: "https://%api%/apituner/button/store/content?id={storeId}",
        CAMPAIGNS: "https://%api%/apituner/button/campaign/list",
        EDS: "https://%api%/apituner/eds/member/profile",
        GIFT_CARD: "https://%domain%/api/gift-cards/catalog/product/%giftCardProductCode",
        ABANDONED_PRODUCTS: "https://cas.rrcbsn.com/cart_abandonment/v1/members/%uid%/products",
        MEMBER_DETAILS: "https://%member_api%/api/v3/button/member",
        MEMBER_ACTIVITY: "https://%member_api%/api/v3/button/member/activity",
        MEMBER_GEOGATING: "https://%member_api%/geogating/v1/checkStatus.do",
        MEMBER_FAVORITES: "https://%member_api%/api/v3/button/member/favorite/stores",
        MEMBER_VISITED: "https://%member_api%/api/v3/button/member/store/visited",
        MEMBER_PURCHASED: "https://%member_api%/api/v3/button/member/store/purchased",
        MEMBER_TICKETS: "https://%member_api%/api/v3/button/member/trackingticket/list",
        MEMBER_BONUSES: "https://%member_api%/api/v3/button/member/bonus/list",
        MEMBER_ACTIVATE_BONUS: "https://%member_api%/api/v3/button/member/bonus/activate",
        MEMBER_ONE_RECEIPTS: "https://%member_api%/api/v3/button/member/receipts/list",
        MEMBER_ISCB: "https://%member_api%/api/v3/button/member/instore/offers/available",
        MEMBER_ISCB_LINKED: "https://%member_api%/api/v3/button/member/instore/offers/linked",
        MEMBER_UDPATE_TCPP: "https://%member_api%/api/v3/button/member/tcpp/update",
        MEMBER_UDPATE_ATTRIBUTE: "https://%member_api%/api/v3/button/member/attributes/update",
        MEMBER_TAF: "https://%member_api%/api/v3/button/member/referral/program",
        PRICE_MAGIC: "https://search.ecbsn.com/search/price-magic/v1/similar-products?partnerId=1&sourceName=Toolbar",
        PRICE_MAGIC_BULK: "https://search.ecbsn.com/search/price-magic/v1/bulk-products?sourceName=Toolbar",
        SIMILAR_STORES: "https://%api%/apituner/similar-stores/v1_0",
        CAPTURE_ORDER: "https://capture.ecbsn.com/api/1.0/commercecapture",
        URL_SHORTENER: "https://%domain%/urlshortener/v1/urls",
        SETTINGS: "https://%member_api%/toolbar/config/settings.json",
        SETTINGS_PM: "https://%member_api%/toolbar/config/pm_stores.json",
        SETTINGS_COUPONS: "https://%member_api%/toolbar/config/coupons.json",
        SETTINGS_PRODUCTS: "https://%member_api%/toolbar/config/products.json",
        SETTINGS_MERCHANTS: "https://button.rrcbsn.com/settings/merchants.json",
        SETTINGS_SERP: "https://button.rrcbsn.com/settings/serp.json",
        SETTINGS_PROMOS: "https://button.rrcbsn.com/settings/promos.json",
        WEB_INSTALL: "https://%domain%/button/%browser/install/success?sourceName=toolbar&eeid=45426&toolbarId=%userid",
        WEB_LOGON_FORM: "https://%domain%/auth/getLogonForm.do?tb=yes&eeid=26118",
        WEB_LOGIN: "https://%domain%/button/user-auth.htm?tb=yes&auth_type=su&sourceName=toolbar",
        WEB_UNINSTALL: "https://%domain%/button/uninstall.htm?tb=yes&toolbarId=%userid&v=%version",
        WEB_MOBILE_EXTENSION: "rakuten://us/beo?url=https://%domain%/button/mobile/enable&autologin=true",
        WEB_SEARCH: "https://%domain%/search?term={terms}&tb=yes&ebtoken=%ebtoken",
        WEB_REWARDS: "https://%domain%/pending-cash-back.htm?tb=yes&ebtoken=%ebtoken&eeid=26117",
        WEB_CASHBACK: "https://%domain%/cash-back-history.htm?tb=yes&ebtoken=%ebtoken&eeid=26117",
        WEB_HOME: "https://%domain%/?tb=yes&ebtoken=%ebtoken&eeid=26117",
        WEB_REFERRAL: "https://%domain%/referral/default.do?tb=yes&ebtoken=%ebtoken",
        WEB_TC: "https://%domain%/referral/default.do?tb=yes&ebtoken=%ebtoken#taf-tc",
        WEB_HELP: "https://%domain%/help/section/rakuten-cash-back-button-360003084134?tb=yes",
        WEB_PRIVACY_PREFERENCES: "https://%domain%/privacy-preferences.htm?tb=yes&ebtoken=%ebtoken&eeid=46021",
        WEB_DESKTOP_ATTESTATION: "https://%domain%/?showAttestation=true&tb=yes&ebtoken=%ebtoken&eeid=46021",
        WEB_ADVERTISING_DISCLOSURE: "https://%domain%/help/article/advertising-disclosure-360001940028?tb=yes&ebtoken=%ebtoken&eeid=26117",
        WEB_REFERRAL_TERMS: "https://%domain%/help/article/referral-program-terms-360002101348?tb=yes&ebtoken=%ebtoken&eeid=61594",
        WEBSTORE_SAFARI: "https://itunes.apple.com/app/apple-store/id1451893560?pt=117880184&mt=12&ls=1",
        WEBSTORE_FIREFOX: "https://addons.mozilla.org/en-US/firefox/addon/ebates/reviews/add",
        WEBSTORE_EDGE: "https://microsoftedge.microsoft.com/addons/detail/gmmlpenookphoknnpfilofakghemolmg",
        WEBSTORE_CHROME: "https://chrome.google.com/webstore/detail/ebates-cash-back/chhjbpecpncaggjpdakmflnfcopglcmi/reviews",
        POPUP_SEARCH: "https://%search_api%/store/list/suggest?q={terms}&rows=25&start=0"
      },
      T = "https://api.engager.ecbsn.com",
      _ = `${T}/datagrid/rest/v1/data`,
      k = 4,
      I = "merchant",
      C = "groupon",
      O = "homeDomain",
      B = "inStoreCashBack",
      N = "priceMagic",
      P = "processInterstitial",
      D = "products",
      R = "SERP",
      M = "taxesPromo",
      L = "InstalledExtensions",
      j = { [k]: "BUTTON", 23: "BUTTON_PRICE_MAGIC" },
      U = "store/radiant-generic/button/store-deals",
      $ = "button/my-deals",
      F = "Post-Purchase notification",
      q = "PDP Product Share Widget";
    var H = o(4835);
    function W(e) {
      return (
        (t = { type: "gzip", data: e }),
        new Promise((e) => {
          const r = new Worker(n().runtime.getURL("workers/gzip/bundle.js"));
          (r.onmessage = async function (t) {
            r.terminate(), e(t.data);
          }),
            r.postMessage(t);
        })
      );
      var t;
    }
    function z(e, t, n) {
      return "string" == typeof e && e.startsWith("/") && ((n && n.search(/pattern/i) < 0) || !n)
        ? t
          ? V(t + e)
          : e.search(/\.(png|jpg|jpeg|gif|svg)$/) > 0
          ? V(S.CDN + e)
          : V(S.BASE + e)
        : "object" == typeof e && null !== e
        ? G(e, t)
        : e;
    }
    function G(e, t) {
      return (0, H.isArray)(e) ? (0, H.map)(e, (e, n) => z(e, t, n)) : (0, H.mapObject)(e, (e, n) => z(e, t, n));
    }
    function V(e) {
      const t = self.EBATES?.toolbarId || "",
        n = self.EBATES?.installVersion || "",
        r = self.EBATES?.ebToken || "";
      return z(e)
        .replace(/%domain%?/g, S.domain)
        .replace(/%api%?/g, S.api)
        .replace(/%member_api%?/g, S.member_api)
        .replace(/%search_api%?/g, S.search_api)
        .replace(/%CDN%?/g, S.CDN)
        .replace(/%version%?/g, m.extension.version)
        .replace(/%browser%?/g, m.browser.name.toLowerCase().replace("webkitedge", "edge"))
        .replace(/%installVersion%?/g, n)
        .replace(/%userid%?/g, t)
        .replace(/%toolbarId%?/g, t)
        .replace(/%targetSet%?/g, self.EBATES?.member?.get("targetSet") ?? "")
        .replace(/%uid%?/g, self.EBATES?.member?.id ?? "")
        .replace(/%ebtoken%?/g, r)
        .replace(/AutoLoginID=%autologinid%?/g, `ebtoken=${r}`)
        .replace(/%autologinid%?/g, "");
    }
    function J(e) {
      const t = (e.get("cache-control") ?? "").match(/max-age=(\d+)[\s;,]?/);
      return t && t.length > 1 ? 1e3 * parseInt(t[1], 10) : 0;
    }
    function K(e) {
      const t = e.match(/\.(.*)\./);
      try {
        if (t && t.length > 0) {
          const e = t.pop() || "";
          return JSON.parse(atob(e));
        }
      } catch (e) {}
      return null;
    }
    function Y(e) {
      let { url: t, width: r = 650, height: i = 400 } = e;
      if (m.browser.isSafari) m.browser.navigate(t);
      else {
        const e = Math.floor((screen.availWidth - r) / 2),
          s = Math.floor((screen.availHeight - i) / 2);
        n().windows.create({ type: "popup", height: i, width: r, top: e, left: s, url: t });
      }
    }
    const X = self.ServiceWorkerGlobalScope && self instanceof self.ServiceWorkerGlobalScope;
    function Z(e, t) {
      X || self.addEventListener(e, t);
    }
    async function Q(e, t) {
      if (n()?.cookies) {
        const r = await n().cookies.get({ url: `https://${e}`, name: t });
        return r ? r.value : "";
      }
      return "";
    }
    var ee = o(7322),
      te = o.n(ee);
    function ne() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "[&?](?:LinkshareID|wmlspartner|siteID|mkwid|pcrid|cmp|adid|sourceid|veh|tid|kwid|ap|gclid|cid|cjevent|cp|aid|sid|aff\\w*||\\w*email\\w*|ran\\w+)=[^&]*";
      const [n] = e.split("?", 1);
      return e
        .replace(new RegExp(t, "gi"), "")
        .replace(/([&=])[^&=]+(?:@|%40)[\w.-]+\.\w{2,}/g, "$1")
        .replace(`${n}&`, `${n}?`);
    }
    function re(e) {
      if ("object" == typeof e) {
        const t = { ...e };
        for (const e in t) (void 0 !== t[e] && "" !== t[e]) || delete t[e];
        return new URLSearchParams(t);
      }
      return new URLSearchParams(e);
    }
    function ie(e, t) {
      const n = re(t).toString();
      return n ? e + (e.includes("?") ? "&" : "?") + n : e;
    }
    function se(e, t) {
      const n = re(t);
      if ("" === n.toString()) return e.toString();
      const r = "string" == typeof e ? new URL(e) : e;
      return (
        n.forEach((e, t) => {
          r.searchParams.set(t, e);
        }),
        r.toString()
      );
    }
    function oe(e, t) {
      if (e.display !== t.display) return 0;
      const n = e.amount,
        r = t.amount;
      return n > r ? 1 : n === r ? 0 : -1;
    }
    function ae(e) {
      if (e && !e.startsWith("data:")) {
        const t = /(?:https?:\/\/)?(?:\w+:\/)?[^:?#/\s]*?([^.\s]+\.(?:[a-z]{2,}|co\.uk|org\.uk|ac\.uk|org\.au|com\.au))(?:[:?#/]|$)/gi.exec(
          e
        );
        return t ? t[1].toLowerCase() : null;
      }
      return null;
    }
    if (X) {
      const e = n().runtime.getURL("");
      (self.document = {
        readyState: "completed",
        getElementsByTagName: () => [],
        addEventListener: () => {},
        location: { referrer: e, hostname: "rakuten.com", href: e }
      }),
        (self.window = {
          addEventListener: () => {},
          TextEncoder: self.TextEncoder,
          fetch: self.fetch,
          location: { hostname: "rakuten.com", href: e }
        }),
        (performance.timing = { navigationStart: new Date() });
      class t {
        constructor() {
          (this.method = null), (this.url = null), (this.status = 500), (this.listeners = {});
        }
        open(e, t) {
          (this.method = e), (this.url = t);
        }
        addEventListener(e, t) {
          this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
        }
        removeEventListener(e, t) {
          const n = this.listeners[e];
          if (n) {
            const r = n.filter((e) => e !== t);
            r && r.length ? (this.listeners[e] = r) : delete this.listeners[e];
          }
        }
        send(e) {
          let t = e;
          "object" == typeof e && (t = JSON.stringify(e)),
            fetch(this.url, { method: this.method, body: t })
              .then((e) => {
                (this.status = e.status),
                  Object.keys(this.listeners).forEach((t) => {
                    this.listeners[t].forEach((t) => t(e));
                  });
              })
              .catch(() => {});
        }
      }
      self.XMLHttpRequest = t;
    }
    var ce = o(9614),
      ue = o.n(ce),
      le = o(6022),
      de = o.n(le);
    const he = "webextensionsAnalytics",
      fe = o.g.setImmediate,
      pe = () => {};
    class ge {
      anonymousId = "";
      userId = "";
      host = "https://api.segment.io";
      timeout = !1;
      flushAt = 20;
      flushInterval = 1e4;
      defaultContext = {};
      defaultProperties = {};
      storage = { sessionId: null, sessionTimestamp: null, queue: [] };
      flushed = !1;
      timer = null;
      constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) throw new Error("You must pass your Segment project's write key.");
        this.writeKey = e;
        (this.host = (t.host ?? this.host).replace(/\/+$/, "")),
          (this.timeout = t.timeout ?? this.timeout),
          (this.flushAt = Math.max(t.flushAt ?? this.flushAt, 1)),
          (this.flushInterval = t.flushInterval ?? this.flushInterval),
          (this.defaultContext = t.context ?? this.defaultContext),
          (this.defaultProperties = t.properties ?? this.defaultProperties),
          (this.enable = "boolean" != typeof t.enable || t.enable),
          Object.defineProperty(this, "enable", { configurable: !1, writable: !1, enumerable: !0 }),
          this.init();
      }
      async init() {
        await this.getStorage(),
          this.storage.sessionTimestamp && Date.now() > this.storage.sessionTimestamp + 18e5 && this.endSession(),
          n().alarms &&
            n().alarms.onAlarm.addListener((e) => {
              e.name === `${he}.sessionTimeout` && this.endSession();
            });
      }
      set(e) {
        Object.assign(this.defaultProperties, e);
      }
      async getStorage() {
        const e = await n().storage.local.get(he);
        if (e && e[he] && Object.keys(e[he]).length) {
          const { queue: t, ...n } = e[he];
          Object.assign(this.storage, n), Array.isArray(t) && (this.storage.queue = t);
        }
      }
      setStorage() {
        const e = { ...this.storage };
        (e.queue = e.queue.map((e) => {
          let { ...t } = e;
          return delete t.callback, t;
        })),
          n().storage.local.set({ [he]: { ...e } });
      }
      startSesssion(e) {
        (this.storage.sessionId = e), this.setStorage();
      }
      endSession() {
        this.storage.sessionId &&
          (n().alarms && n().alarms.clear(`${he}.sessionTimeout`),
          clearInterval(this.sessionTimeout),
          (this.storage.sessionTimestamp = null),
          (this.storage.sessionId = null),
          this.setStorage());
      }
      validateSession() {
        const e = new Date().getTime();
        if ((clearInterval(this.sessionTimeout), !this.storage.sessionId))
          try {
            this.startSesssion(e);
          } catch (e) {}
        this.storage.sessionId &&
          (n().alarms
            ? n().alarms.create(`${he}.sessionTimeout`, { delayInMinutes: 30 })
            : ((this.sessionTimeout = setInterval(() => this.endSession(), 18e5)), (this.storage.sessionTimestamp = e), this.setStorage()));
      }
      reset() {
        this.flush(),
          (this.userId = ""),
          (this.anonymousId = ""),
          (this.defaultProperties = {}),
          (this.storage.sessionId = null),
          (this.storage.sessionTimestamp = null),
          this.setStorage();
      }
      identify(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe;
        this.userId = e;
        const r = { type: "identify", userId: e, anonymousId: this.anonymousId, traits: t };
        return this.enqueue(r, n), this;
      }
      track(e, t, n) {
        t = Object.assign({}, t, this.defaultProperties);
        const r = { type: "track", userId: this.userId, anonymousId: this.anonymousId, event: e, properties: t };
        return this.enqueue(r, n), this;
      }
      enqueue(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe;
        return this.enable
          ? (((e = Object.assign({}, e)).context = Object.assign(
              { library: { name: "analytics-webextensions", version: "1.1.0" } },
              this.defaultContext,
              e.context
            )),
            e.timestamp || (e.timestamp = new Date()),
            e.messageId || (e.messageId = `node-${ue()(JSON.stringify(e))}-${A()}`),
            e.anonymousId && !de()(e.anonymousId) && (e.anonymousId = JSON.stringify(e.anonymousId)),
            e.userId && !de()(e.userId) && (e.userId = JSON.stringify(e.userId)),
            this.storage.sessionId &&
              ((e.integrations = { Amplitude: { session_id: this.storage.sessionId } }),
              e.properties && (e.properties.session_id = this.storage.sessionId)),
            this.storage.queue.push({ message: e, callback: t }),
            this.setStorage(),
            this.flushed
              ? (this.storage.queue.length >= this.flushAt && this.flush(),
                void (this.flushInterval && !this.timer && (this.timer = setTimeout(this.flush.bind(this), this.flushInterval))))
              : ((this.flushed = !0), void this.flush()))
          : fe(t);
      }
      flush() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe;
        if (!this.enable) return fe(e);
        if ((this.timer && (clearTimeout(this.timer), (this.timer = null)), !this.storage.queue.length)) return fe(e);
        const t = this.storage.queue.splice(0, this.flushAt),
          n = t.map((e) => e.callback),
          r = { batch: t.map((e) => e.message), timestamp: new Date(), sentAt: new Date() },
          i = (t) => (n.forEach((e) => "function" == typeof e && e(t)), e(t, r), r);
        var s;
        const o = {
          method: "POST",
          headers: {
            Authorization: `Basic ${((s = `${this.writeKey}:`), "function" == typeof btoa ? btoa(s) : Buffer.from(s).toString("base64"))}`,
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(r)
        };
        if (this.timeout && Number.isFinite(this.timeout)) {
          const e = new AbortController();
          (o.signal = e.signal), setTimeout(() => e.abort(), this.timeout);
        }
        return fetch(`${this.host}/v1/batch`, o)
          .then(() => i())
          .catch((e) => {
            if (e.response) {
              const t = new Error(e.response.statusText);
              return i(t);
            }
            return i(e);
          })
          .finally(() => this.setStorage());
      }
    }
    var me = { log: "log", debug: "debug", info: "info", warn: "warn", error: "error" },
      ve = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        Object.prototype.hasOwnProperty.call(me, e) || (e = me.log), ve[e].apply(ve, t);
      },
      be = console,
      ye = "Datadog Browser SDK:";
    function we(e, t) {
      return function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        try {
          return e.apply(void 0, n);
        } catch (e) {
          ve.error(t, e);
        }
      };
    }
    (ve.debug = be.debug.bind(be, ye)),
      (ve.log = be.log.bind(be, ye)),
      (ve.info = be.info.bind(be, ye)),
      (ve.warn = be.warn.bind(be, ye)),
      (ve.error = be.error.bind(be, ye));
    var Ee,
      xe = function (e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, s = t.length; i < s; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      Ae = !1;
    function Se(e) {
      Ae = e;
    }
    function Te(e, t, n) {
      var r = n.value;
      n.value = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return (Ee ? _e(r) : r).apply(this, e);
      };
    }
    function _e(e) {
      return function () {
        return ke(e, this, arguments);
      };
    }
    function ke(e, t, n) {
      try {
        return e.apply(t, n);
      } catch (e) {
        if ((Ie(me.error, e), Ee))
          try {
            Ee(e);
          } catch (e) {
            Ie(me.error, e);
          }
      }
    }
    function Ie(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      Ae && ve.apply(void 0, xe([e, "[MONITOR]"], t, !1));
    }
    function Ce(e, t) {
      return -1 !== e.indexOf(t);
    }
    function Oe(e) {
      if (Array.from) return Array.from(e);
      var t = [];
      if (e instanceof Set)
        e.forEach(function (e) {
          return t.push(e);
        });
      else for (var n = 0; n < e.length; n++) t.push(e[n]);
      return t;
    }
    function Be(e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    }
    function Ne(e, t) {
      return e.slice(0, t.length) === t;
    }
    function Pe(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      return (
        t.forEach(function (t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
        e
      );
    }
    function De() {
      if ("object" == typeof globalThis) return globalThis;
      Object.defineProperty(Object.prototype, "_dd_temp_", {
        get: function () {
          return this;
        },
        configurable: !0
      });
      var e = _dd_temp_;
      return (
        delete Object.prototype._dd_temp_,
        "object" != typeof e && (e = "object" == typeof self ? self : "object" == typeof window ? window : {}),
        e
      );
    }
    var Re = 1024,
      Me = 1024 * Re,
      Le = /[^\u0000-\u007F]/;
    function je(e) {
      return Le.test(e) ? (void 0 !== window.TextEncoder ? new TextEncoder().encode(e).length : new Blob([e]).size) : e.length;
    }
    function Ue(e, t) {
      var n,
        r = De();
      return r.Zone && "function" == typeof r.Zone.__symbol__ && (n = e[r.Zone.__symbol__(t)]), n || (n = e[t]), n;
    }
    function $e(e, t) {
      return Ue(De(), "setTimeout")(_e(e), t);
    }
    function Fe(e) {
      Ue(De(), "clearTimeout")(e);
    }
    function qe(e, t) {
      return Ue(De(), "setInterval")(_e(e), t);
    }
    function He(e) {
      Ue(De(), "clearInterval")(e);
    }
    function We(e, t, n) {
      var r,
        i,
        s = !n || void 0 === n.leading || n.leading,
        o = !n || void 0 === n.trailing || n.trailing,
        a = !1;
      return {
        throttled: function () {
          for (var n = [], c = 0; c < arguments.length; c++) n[c] = arguments[c];
          a
            ? (r = n)
            : (s ? e.apply(void 0, n) : (r = n),
              (a = !0),
              (i = $e(function () {
                o && r && e.apply(void 0, r), (a = !1), (r = void 0);
              }, t)));
        },
        cancel: function () {
          Fe(i), (a = !1), (r = void 0);
        }
      };
    }
    function ze() {}
    function Ge(e) {
      return null === e ? "null" : Array.isArray(e) ? "array" : typeof e;
    }
    function Ve(e, t, n) {
      if (
        (void 0 === n &&
          (n = (function () {
            if ("undefined" != typeof WeakSet) {
              var e = new WeakSet();
              return {
                hasAlreadyBeenSeen: function (t) {
                  var n = e.has(t);
                  return n || e.add(t), n;
                }
              };
            }
            var t = [];
            return {
              hasAlreadyBeenSeen: function (e) {
                var n = t.indexOf(e) >= 0;
                return n || t.push(e), n;
              }
            };
          })()),
        void 0 === t)
      )
        return e;
      if ("object" != typeof t || null === t) return t;
      if (t instanceof Date) return new Date(t.getTime());
      if (t instanceof RegExp) {
        var r =
          t.flags ||
          [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
        return new RegExp(t.source, r);
      }
      if (!n.hasAlreadyBeenSeen(t)) {
        if (Array.isArray(t)) {
          for (var i = Array.isArray(e) ? e : [], s = 0; s < t.length; ++s) i[s] = Ve(i[s], t[s], n);
          return i;
        }
        var o = "object" === Ge(e) ? e : {};
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (o[a] = Ve(o[a], t[a], n));
        return o;
      }
    }
    function Je(e) {
      return Ve(void 0, e);
    }
    function Ke() {
      for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      for (var r = 0, i = t; r < i.length; r++) {
        var s = i[r];
        null != s && (e = Ve(e, s));
      }
      return e;
    }
    function Ye(e, t, n) {
      if ("object" != typeof e || null === e) return JSON.stringify(e);
      var r = Xe(Object.prototype),
        i = Xe(Array.prototype),
        s = Xe(Object.getPrototypeOf(e)),
        o = Xe(e);
      try {
        return JSON.stringify(e, t, n);
      } catch (e) {
        return "<error: unable to serialize object>";
      } finally {
        r(), i(), s(), o();
      }
    }
    function Xe(e) {
      var t = e,
        n = t.toJSON;
      return n
        ? (delete t.toJSON,
          function () {
            t.toJSON = n;
          })
        : ze;
    }
    var Ze = 220 * Re,
      Qe = "$",
      et = 3;
    function tt(e, t) {
      var n;
      void 0 === t && (t = Ze);
      var r = Xe(Object.prototype),
        i = Xe(Array.prototype),
        s = [],
        o = new WeakMap(),
        a = nt(e, Qe, void 0, s, o),
        c = (null === (n = JSON.stringify(a)) || void 0 === n ? void 0 : n.length) || 0;
      if (!(c > t)) {
        for (; s.length > 0 && c < t; ) {
          var u = s.shift(),
            l = 0;
          if (Array.isArray(u.source))
            for (var d = 0; d < u.source.length; d++) {
              if (((c += void 0 !== (h = nt(u.source[d], u.path, d, s, o)) ? JSON.stringify(h).length : 4), (c += l), (l = 1), c > t)) {
                rt(t, "truncated", e);
                break;
              }
              u.target[d] = h;
            }
          else
            for (var d in u.source)
              if (Object.prototype.hasOwnProperty.call(u.source, d)) {
                var h;
                if (
                  (void 0 !== (h = nt(u.source[d], u.path, d, s, o)) && ((c += JSON.stringify(h).length + l + d.length + et), (l = 1)),
                  c > t)
                ) {
                  rt(t, "truncated", e);
                  break;
                }
                u.target[d] = h;
              }
        }
        return r(), i(), a;
      }
      rt(t, "discarded", e);
    }
    function nt(e, t, n, r, i) {
      var s = (function (e) {
        var t = e;
        if (t && "function" == typeof t.toJSON)
          try {
            return t.toJSON();
          } catch (e) {}
        return e;
      })(e);
      if (!s || "object" != typeof s)
        return (function (e) {
          if ("bigint" == typeof e) return "[BigInt] ".concat(e.toString());
          if ("function" == typeof e) return "[Function] ".concat(e.name || "unknown");
          if ("symbol" == typeof e) return "[Symbol] ".concat(e.description || e.toString());
          return e;
        })(s);
      var o = (function (e) {
        try {
          if (e instanceof Event) return { isTrusted: e.isTrusted };
          var t = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
          if (t && t[1]) return "[".concat(t[1], "]");
        } catch (e) {}
        return "[Unserializable]";
      })(s);
      if ("[Object]" !== o && "[Array]" !== o && "[Error]" !== o) return o;
      var a = e;
      if (i.has(a)) return "[Reference seen at ".concat(i.get(a), "]");
      var c = void 0 !== n ? "".concat(t, ".").concat(n) : t,
        u = Array.isArray(s) ? [] : {};
      return i.set(a, c), r.push({ source: s, target: u, path: c }), u;
    }
    function rt(e, t, n) {
      ve.warn("The data provided has been ".concat(t, " as it is over the limit of ").concat(e, " characters:"), n);
    }
    var it,
      st = (function () {
        function e(e) {
          (this.onFirstSubscribe = e), (this.observers = []);
        }
        return (
          (e.prototype.subscribe = function (e) {
            var t = this;
            return (
              !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0),
              this.observers.push(e),
              {
                unsubscribe: function () {
                  (t.observers = t.observers.filter(function (t) {
                    return e !== t;
                  })),
                    !t.observers.length && t.onLastUnsubscribe && t.onLastUnsubscribe();
                }
              }
            );
          }),
          (e.prototype.notify = function (e) {
            this.observers.forEach(function (t) {
              return t(e);
            });
          }),
          e
        );
      })();
    function ot() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = new st(function () {
        var t = e.map(function (e) {
          return e.subscribe(function (e) {
            return n.notify(e);
          });
        });
        return function () {
          return t.forEach(function (e) {
            return e.unsubscribe();
          });
        };
      });
      return n;
    }
    var at = 3 * Re,
      ct = (((it = {})[0] = "feature flag evaluation"), (it[1] = "user"), (it[2] = "global context"), (it[3] = "logger context"), it);
    var ut = 200;
    function lt(e, t) {
      void 0 === t && (t = je);
      var n,
        r = {},
        i = !1,
        s = new st(),
        o = We(function (r) {
          (n = t(Ye(r))),
            i ||
              (i = (function (e, t) {
                return (
                  e > at &&
                  (ve.warn(
                    "The "
                      .concat(ct[t], " data exceeds the recommended ")
                      .concat(
                        at / Re,
                        "KiB threshold. More details: https://docs.datadoghq.com/real_user_monitoring/browser/troubleshooting/#customer-data-exceeds-the-recommended-3kib-warning"
                      )
                  ),
                  !0)
                );
              })(n, e));
        }, ut).throttled,
        a = {
          getBytesCount: function () {
            return n;
          },
          get: function () {
            return r;
          },
          add: function (e, t) {
            (r[e] = t), o(r), s.notify();
          },
          remove: function (e) {
            delete r[e], o(r), s.notify();
          },
          set: function (e) {
            o((r = e)), s.notify();
          },
          getContext: function () {
            return Je(r);
          },
          setContext: function (e) {
            "object" === Ge(e) ? ((r = tt(e)), o(r)) : a.clearContext(), s.notify();
          },
          setContextProperty: function (e, t) {
            (r[e] = tt(t)), o(r), s.notify();
          },
          removeContextProperty: function (e) {
            delete r[e], o(r), s.notify();
          },
          clearContext: function () {
            (r = {}), (n = 0), s.notify();
          },
          changeObservable: s
        };
      return a;
    }
    var dt,
      ht = (function () {
        function e() {
          this.buffer = [];
        }
        return (
          (e.prototype.add = function (e) {
            this.buffer.push(e) > 500 && this.buffer.splice(0, 1);
          }),
          (e.prototype.drain = function () {
            this.buffer.forEach(function (e) {
              return e();
            }),
              (this.buffer.length = 0);
          }),
          e
        );
      })(),
      ft = 1e3,
      pt = 60 * ft,
      gt = 60 * pt;
    function mt() {
      return new Date().getTime();
    }
    function vt() {
      return mt();
    }
    function bt() {
      return performance.now();
    }
    function yt() {
      return { relative: bt(), timeStamp: vt() };
    }
    function wt(e, t) {
      return e + t;
    }
    function Et() {
      return void 0 === dt && (dt = performance.timing.navigationStart), dt;
    }
    function xt() {
      var e = De().DatadogEventBridge;
      if (e)
        return {
          getAllowedWebViewHosts: function () {
            return JSON.parse(e.getAllowedWebViewHosts());
          },
          send: function (t, n) {
            e.send(JSON.stringify({ eventType: t, event: n }));
          }
        };
    }
    function At(e) {
      var t;
      void 0 === e && (e = null === (t = De().location) || void 0 === t ? void 0 : t.hostname);
      var n = xt();
      return (
        !!n &&
        n.getAllowedWebViewHosts().some(function (t) {
          return e === t || ((n = e), (r = ".".concat(t)), n.slice(-r.length) === r);
          var n, r;
        })
      );
    }
    function St(e, t, n, r, i) {
      return Tt(e, t, [n], r, i);
    }
    function Tt(e, t, n, r, i) {
      var s = void 0 === i ? {} : i,
        o = s.once,
        a = s.capture,
        c = s.passive,
        u = _e(
          o
            ? function (e) {
                h(), r(e);
              }
            : r
        ),
        l = c ? { capture: a, passive: c } : a,
        d = Ue(t, "addEventListener");
      function h() {
        var e = Ue(t, "removeEventListener");
        n.forEach(function (n) {
          return e.call(t, n, u, l);
        });
      }
      return (
        n.forEach(function (e) {
          return d.call(t, e, u, l);
        }),
        { stop: h }
      );
    }
    var _t,
      kt = "_dd_c",
      It = [];
    function Ct(e, t, n, r) {
      void 0 === r && (r = je);
      var i = (function (e, t) {
          return "".concat(kt, "_").concat(e, "_").concat(t);
        })(t, n),
        s = lt(n, r);
      return (
        o(),
        It.push(
          St(e, window, "storage", function (e) {
            var t = e.key;
            i === t && o();
          })
        ),
        s.changeObservable.subscribe(function () {
          localStorage.setItem(i, JSON.stringify(s.getContext()));
        }),
        s
      );
      function o() {
        var e = localStorage.getItem(i),
          t = null !== e ? JSON.parse(e) : {};
        s.setContext(t);
      }
    }
    function Ot(e) {
      var t = Pe({}, e);
      return (
        ["id", "name", "email"].forEach(function (e) {
          e in t && (t[e] = String(t[e]));
        }),
        t
      );
    }
    !(function (e) {
      (e.PAGEHIDE = "pagehide"),
        (e.FEATURE_FLAGS = "feature_flags"),
        (e.RESOURCE_PAGE_STATES = "resource_page_states"),
        (e.PAGE_STATES = "page_states"),
        (e.COLLECT_FLUSH_REASON = "collect_flush_reason"),
        (e.NO_RESOURCE_DURATION_FROZEN_STATE = "no_resource_duration_frozen_state"),
        (e.SCROLLMAP = "scrollmap"),
        (e.INTERACTION_TO_NEXT_PAINT = "interaction_to_next_paint"),
        (e.WEB_VITALS_ATTRIBUTION = "web_vitals_attribution"),
        (e.DISABLE_REPLAY_INLINE_CSS = "disable_replay_inline_css");
    })(_t || (_t = {}));
    var Bt = new Set();
    function Nt(e) {
      return Bt.has(e);
    }
    function Pt() {
      return Bt;
    }
    function Dt(e) {
      return 0 !== e && 100 * Math.random() <= e;
    }
    function Rt(e) {
      return (
        (function (e) {
          return "number" == typeof e;
        })(e) &&
        e >= 0 &&
        e <= 100
      );
    }
    function Mt(e) {
      return 0 === Object.keys(e).length;
    }
    function Lt(e) {
      return e
        ? (parseInt(e, 10) ^ ((16 * Math.random()) >> (parseInt(e, 10) / 4))).toString(16)
        : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, Lt);
    }
    function jt(e, t, n) {
      void 0 === n && (n = "");
      var r = e.charCodeAt(t - 1),
        i = r >= 55296 && r <= 56319 ? t + 1 : t;
      return e.length <= i ? e : "".concat(e.slice(0, i)).concat(n);
    }
    var Ut,
      $t = 4 * gt,
      Ft = 15 * pt;
    function qt(e, t, n, r) {
      var i = new Date();
      i.setTime(i.getTime() + n);
      var s = "expires=".concat(i.toUTCString()),
        o = r && r.crossSite ? "none" : "strict",
        a = r && r.domain ? ";domain=".concat(r.domain) : "",
        c = r && r.secure ? ";secure" : "";
      document.cookie = "".concat(e, "=").concat(t, ";").concat(s, ";path=/;samesite=").concat(o).concat(a).concat(c);
    }
    function Ht(e) {
      return (function (e, t) {
        var n = new RegExp("(?:^|;)\\s*".concat(t, "\\s*=\\s*([^;]+)")).exec(e);
        return n ? n[1] : void 0;
      })(document.cookie, e);
    }
    function Wt(e, t) {
      qt(e, "", 0, t);
    }
    var zt = "_dd_s",
      Gt = /^([a-z]+)=([a-z0-9-]+)$/,
      Vt = "&";
    function Jt(e) {
      return Mt(e);
    }
    function Kt(e) {
      e.expire = String(mt() + Ft);
    }
    function Yt(e) {
      return ((t = e),
      Object.keys(t).map(function (e) {
        return [e, t[e]];
      }))
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return "".concat(t, "=").concat(n);
        })
        .join(Vt);
      var t;
    }
    function Xt(e) {
      var t = {};
      return (
        (function (e) {
          return !!e && (-1 !== e.indexOf(Vt) || Gt.test(e));
        })(e) &&
          e.split(Vt).forEach(function (e) {
            var n = Gt.exec(e);
            if (null !== n) {
              var r = n[1],
                i = n[2];
              t[r] = i;
            }
          }),
        t
      );
    }
    var Zt = "_dd",
      Qt = "_dd_r",
      en = "_dd_l",
      tn = "rum",
      nn = "logs";
    function rn(e) {
      var t = (function (e) {
        var t = {};
        (t.secure = !!e.useSecureSessionCookie || !!e.useCrossSiteSessionCookie),
          (t.crossSite = !!e.useCrossSiteSessionCookie),
          e.trackSessionAcrossSubdomains &&
            (t.domain = (function () {
              if (void 0 === Ut) {
                for (var e = "dd_site_test_".concat(Lt()), t = window.location.hostname.split("."), n = t.pop(); t.length && !Ht(e); )
                  (n = "".concat(t.pop(), ".").concat(n)), qt(e, "test", ft, { domain: n });
                Wt(e, { domain: n }), (Ut = n);
              }
              return Ut;
            })());
        return t;
      })(e);
      return (function (e) {
        if (void 0 === document.cookie || null === document.cookie) return !1;
        try {
          var t = "dd_cookie_test_".concat(Lt()),
            n = "test";
          qt(t, n, pt, e);
          var r = Ht(t) === n;
          return Wt(t, e), r;
        } catch (e) {
          return ve.error(e), !1;
        }
      })(t)
        ? { type: "Cookie", cookieOptions: t }
        : void 0;
    }
    function sn(e) {
      var t,
        n = {
          isLockEnabled: !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent),
          persistSession:
            ((t = e),
            function (e) {
              qt(zt, Yt(e), Ft, t);
            }),
          retrieveSession: on,
          clearSession: an(e)
        };
      return (
        (function (e) {
          if (!Ht(zt)) {
            var t = Ht(Zt),
              n = Ht(Qt),
              r = Ht(en),
              i = {};
            t && (i.id = t),
              r && /^[01]$/.test(r) && (i[nn] = r),
              n && /^[012]$/.test(n) && (i[tn] = n),
              Jt(i) || (Kt(i), e.persistSession(i));
          }
        })(n),
        n
      );
    }
    function on() {
      return Xt(Ht(zt));
    }
    function an(e) {
      return function () {
        Wt(zt, e);
      };
    }
    var cn = "_dd_test_";
    function un(e) {
      localStorage.setItem(zt, Yt(e));
    }
    function ln() {
      return Xt(localStorage.getItem(zt));
    }
    function dn() {
      localStorage.removeItem(zt);
    }
    var hn,
      fn = 10,
      pn = 100,
      gn = [];
    function mn(e, t, n) {
      var r;
      void 0 === n && (n = 0);
      var i = t.isLockEnabled,
        s = t.retrieveSession,
        o = t.persistSession,
        a = t.clearSession;
      if ((hn || (hn = e), e === hn))
        if (i && n >= pn) bn(t);
        else {
          var c,
            u = s();
          if (i) {
            if (u.lock) return void vn(e, t, n);
            if (((c = Lt()), (u.lock = c), o(u), (u = s()).lock !== c)) return void vn(e, t, n);
          }
          var l = e.process(u);
          if (i && (u = s()).lock !== c) vn(e, t, n);
          else {
            if ((l && (Jt(l) ? a() : (Kt(l), o(l))), i && (!l || !Jt(l)))) {
              if ((u = s()).lock !== c) return void vn(e, t, n);
              delete u.lock, o(u), (l = u);
            }
            null === (r = e.after) || void 0 === r || r.call(e, l || u), bn(t);
          }
        }
      else gn.push(e);
    }
    function vn(e, t, n) {
      $e(function () {
        mn(e, t, n + 1);
      }, fn);
    }
    function bn(e) {
      hn = void 0;
      var t = gn.shift();
      t && mn(t, e);
    }
    var yn = ft;
    function wn(e) {
      var t = rn(e);
      return (
        !t &&
          e.allowFallbackToLocalStorage &&
          (t = (function () {
            try {
              var e = Lt(),
                t = "".concat(cn).concat(e);
              localStorage.setItem(t, e);
              var n = localStorage.getItem(t);
              return localStorage.removeItem(t), e === n ? { type: "LocalStorage" } : void 0;
            } catch (e) {
              return;
            }
          })()),
        t
      );
    }
    function En(e, t, n) {
      var r = new st(),
        i = new st(),
        s = "Cookie" === e.type ? sn(e.cookieOptions) : { isLockEnabled: !1, persistSession: un, retrieveSession: ln, clearSession: dn },
        o = s.clearSession,
        a = s.retrieveSession,
        c = qe(function () {
          mn(
            {
              process: function (e) {
                return h(e) ? void 0 : {};
              },
              after: l
            },
            s
          );
        }, yn),
        u = (function () {
          var e = a();
          if (h(e)) return e;
          return {};
        })();
      function l(e) {
        return (
          h(e) || (e = {}),
          d() &&
            (!(function (e) {
              return u.id !== e.id || u[t] !== e[t];
            })(e)
              ? (u = e)
              : ((u = {}), i.notify())),
          e
        );
      }
      function d() {
        return void 0 !== u[t];
      }
      function h(e) {
        return (void 0 === e.created || mt() - Number(e.created) < $t) && (void 0 === e.expire || mt() < Number(e.expire));
      }
      return {
        expandOrRenewSession: We(function () {
          var e;
          mn(
            {
              process: function (r) {
                var i = l(r);
                return (
                  (e = (function (e) {
                    var r = n(e[t]),
                      i = r.trackingType,
                      s = r.isTracked;
                    (e[t] = i), s && !e.id && ((e.id = Lt()), (e.created = String(mt())));
                    return s;
                  })(i)),
                  i
                );
              },
              after: function (t) {
                e &&
                  !d() &&
                  (function (e) {
                    (u = e), r.notify();
                  })(t),
                  (u = t);
              }
            },
            s
          );
        }, yn).throttled,
        expandSession: function () {
          mn(
            {
              process: function (e) {
                return d() ? l(e) : void 0;
              }
            },
            s
          );
        },
        getSession: function () {
          return u;
        },
        renewObservable: r,
        expireObservable: i,
        expire: function () {
          o(), l({});
        },
        stop: function () {
          He(c);
        }
      };
    }
    function xn(e) {
      return An(e, _n(window.location)).href;
    }
    function An(e, t) {
      var n = (function () {
        if (void 0 === Sn)
          try {
            var e = new Tn("http://test/path");
            Sn = "http://test/path" === e.href;
          } catch (e) {
            Sn = !1;
          }
        return Sn ? Tn : void 0;
      })();
      if (n)
        try {
          return void 0 !== t ? new n(e, t) : new n(e);
        } catch (n) {
          throw new Error("Failed to construct URL: ".concat(String(n), " ").concat(Ye({ url: e, base: t })));
        }
      if (void 0 === t && !/:/.test(e)) throw new Error("Invalid URL: '".concat(e, "'"));
      var r = document,
        i = r.createElement("a");
      if (void 0 !== t) {
        var s = (r = document.implementation.createHTMLDocument("")).createElement("base");
        (s.href = t), r.head.appendChild(s), r.body.appendChild(i);
      }
      return (i.href = e), i;
    }
    var Sn,
      Tn = URL;
    function _n(e) {
      if (e.origin && "null" !== e.origin) return e.origin;
      var t = e.host.replace(/(:80|:443)$/, "");
      return "".concat(e.protocol, "//").concat(t);
    }
    var kn = "datad0g.com",
      In = "datadoghq.com",
      Cn = "ap1.datadoghq.com",
      On = { logs: "logs", rum: "rum", sessionReplay: "session-replay" },
      Bn = { logs: "logs", rum: "rum", sessionReplay: "replay" };
    function Nn(e, t, n) {
      var r = (function (e, t) {
        var n = "/api/v2/".concat(Bn[t]),
          r = e.proxy,
          i = e.proxyUrl;
        if (r) {
          var s = xn(r);
          return function (e) {
            return "".concat(s, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(e)));
          };
        }
        var o = (function (e, t) {
          var n = e.site,
            r = void 0 === n ? In : n,
            i = e.internalAnalyticsSubdomain;
          if (i && r === In) return "".concat(i, ".").concat(In);
          var s = r.split("."),
            o = s.pop(),
            a = r !== Cn ? "".concat(On[t], ".") : "";
          return "".concat(a, "browser-intake-").concat(s.join("-"), ".").concat(o);
        })(e, t);
        if (void 0 === r && i) {
          var a = xn(i);
          return function (e) {
            return "".concat(a, "?ddforward=").concat(encodeURIComponent("https://".concat(o).concat(n, "?").concat(e)));
          };
        }
        return function (e) {
          return "https://".concat(o).concat(n, "?").concat(e);
        };
      })(e, t);
      return {
        build: function (i, s) {
          var o = (function (e, t, n, r, i) {
            var s = e.clientToken,
              o = e.internalAnalyticsSubdomain,
              a = i.retry,
              c = i.flushReason,
              u = i.encoding,
              l = ["sdk_version:".concat("4.50.0"), "api:".concat(r)].concat(n);
            c && Nt(_t.COLLECT_FLUSH_REASON) && l.push("flush_reason:".concat(c));
            a && l.push("retry_count:".concat(a.count), "retry_after:".concat(a.lastFailureStatus));
            var d = [
              "ddsource=browser",
              "ddtags=".concat(encodeURIComponent(l.join(","))),
              "dd-api-key=".concat(s),
              "dd-evp-origin-version=".concat(encodeURIComponent("4.50.0")),
              "dd-evp-origin=browser",
              "dd-request-id=".concat(Lt())
            ];
            u && d.push("dd-evp-encoding=".concat(u));
            "rum" === t && d.push("batch_time=".concat(vt()));
            o && d.reverse();
            return d.join("&");
          })(e, t, n, i, s);
          return r(o);
        },
        urlPrefix: r(""),
        endpointType: t
      };
    }
    var Pn = 200;
    var Dn = /[^a-z0-9_:./-]/;
    function Rn(e, t) {
      var n = Pn - e.length - 1;
      (t.length > n || Dn.test(t)) && ve.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized"));
      var r = t.replace(/,/g, "_");
      return "".concat(e, ":").concat(r);
    }
    function Mn(e) {
      var t = (function (e) {
          var t = e.env,
            n = e.service,
            r = e.version,
            i = e.datacenter,
            s = [];
          return (
            t && s.push(Rn("env", t)), n && s.push(Rn("service", n)), r && s.push(Rn("version", r)), i && s.push(Rn("datacenter", i)), s
          );
        })(e),
        n = (function (e, t) {
          return {
            logsEndpointBuilder: Nn(e, "logs", t),
            rumEndpointBuilder: Nn(e, "rum", t),
            sessionReplayEndpointBuilder: Nn(e, "sessionReplay", t)
          };
        })(e, t),
        r = Be(n).map(function (e) {
          return e.urlPrefix;
        }),
        i = (function (e, t, n) {
          if (!e.replica) return;
          var r = Pe({}, e, { site: In, clientToken: e.replica.clientToken }),
            i = { logsEndpointBuilder: Nn(r, "logs", n), rumEndpointBuilder: Nn(r, "rum", n) };
          return (
            t.push.apply(
              t,
              Be(i).map(function (e) {
                return e.urlPrefix;
              })
            ),
            Pe({ applicationId: e.replica.applicationId }, i)
          );
        })(e, r, t);
      return Pe(
        {
          isIntakeUrl: function (e) {
            return r.some(function (t) {
              return 0 === e.indexOf(t);
            });
          },
          replica: i,
          site: e.site || In
        },
        n
      );
    }
    function Ln(e) {
      var t, n, r;
      if (e && e.clientToken) {
        var i = null !== (t = e.sessionSampleRate) && void 0 !== t ? t : e.sampleRate;
        if (void 0 === i || Rt(i))
          if (void 0 === e.telemetrySampleRate || Rt(e.telemetrySampleRate)) {
            if (void 0 === e.telemetryConfigurationSampleRate || Rt(e.telemetryConfigurationSampleRate))
              return (
                Array.isArray(e.enableExperimentalFeatures) &&
                  e.enableExperimentalFeatures
                    .filter(function (e) {
                      return (
                        (t = _t),
                        (n = e),
                        Object.keys(t).some(function (e) {
                          return t[e] === n;
                        })
                      );
                      var t, n;
                    })
                    .forEach(function (e) {
                      Bt.add(e);
                    }),
                Pe(
                  {
                    beforeSend: e.beforeSend && we(e.beforeSend, "beforeSend threw an error:"),
                    sessionStoreStrategyType: wn(e),
                    sessionSampleRate: null != i ? i : 100,
                    telemetrySampleRate: null !== (n = e.telemetrySampleRate) && void 0 !== n ? n : 20,
                    telemetryConfigurationSampleRate: null !== (r = e.telemetryConfigurationSampleRate) && void 0 !== r ? r : 5,
                    service: e.service,
                    silentMultipleInit: !!e.silentMultipleInit,
                    batchBytesLimit: 16 * Re,
                    eventRateLimiterThreshold: 3e3,
                    maxTelemetryEventsPerPage: 15,
                    flushTimeout: 30 * ft,
                    batchMessagesLimit: 50,
                    messageBytesLimit: 256 * Re
                  },
                  Mn(e)
                )
              );
            ve.error("Telemetry Configuration Sample Rate should be a number between 0 and 100");
          } else ve.error("Telemetry Sample Rate should be a number between 0 and 100");
        else ve.error("Session Sample Rate should be a number between 0 and 100");
      } else ve.error("Client Token is not configured, we will not send any data.");
    }
    var jn = "?";
    function Un(e) {
      var t = [],
        n = Jn(e, "stack"),
        r = String(e);
      return (
        n && Ne(n, r) && (n = n.slice(r.length)),
        n &&
          n.split("\n").forEach(function (e) {
            var n =
              (function (e) {
                var t = qn.exec(e);
                if (!t) return;
                var n = t[2] && 0 === t[2].indexOf("native"),
                  r = t[2] && 0 === t[2].indexOf("eval"),
                  i = Hn.exec(t[2]);
                r && i && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3]));
                return {
                  args: n ? [t[2]] : [],
                  column: t[4] ? +t[4] : void 0,
                  func: t[1] || jn,
                  line: t[3] ? +t[3] : void 0,
                  url: n ? void 0 : t[2]
                };
              })(e) ||
              (function (e) {
                var t = Wn.exec(e);
                if (!t) return;
                return { args: [], column: t[3] ? +t[3] : void 0, func: jn, line: t[2] ? +t[2] : void 0, url: t[1] };
              })(e) ||
              (function (e) {
                var t = zn.exec(e);
                if (!t) return;
                return { args: [], column: t[4] ? +t[4] : void 0, func: t[1] || jn, line: +t[3], url: t[2] };
              })(e) ||
              (function (e) {
                var t = Gn.exec(e);
                if (!t) return;
                var n = t[3] && t[3].indexOf(" > eval") > -1,
                  r = Vn.exec(t[3]);
                n && r && ((t[3] = r[1]), (t[4] = r[2]), (t[5] = void 0));
                return {
                  args: t[2] ? t[2].split(",") : [],
                  column: t[5] ? +t[5] : void 0,
                  func: t[1] || jn,
                  line: t[4] ? +t[4] : void 0,
                  url: t[3]
                };
              })(e);
            n && (!n.func && n.line && (n.func = jn), t.push(n));
          }),
        { message: Jn(e, "message"), name: Jn(e, "name"), stack: t }
      );
    }
    var $n = "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
      Fn = "(?::(\\d+))",
      qn = new RegExp("^\\s*at (.*?) ?\\(".concat($n).concat(Fn, "?").concat(Fn, "?\\)?\\s*$"), "i"),
      Hn = new RegExp("\\((\\S*)".concat(Fn).concat(Fn, "\\)"));
    var Wn = new RegExp("^\\s*at ?".concat($n).concat(Fn, "?").concat(Fn, "??\\s*$"), "i");
    var zn = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    var Gn =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
      Vn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Jn(e, t) {
      if ("object" == typeof e && e && t in e) {
        var n = e[t];
        return "string" == typeof n ? n : void 0;
      }
    }
    var Kn = "No stack, consider using an instance of Error";
    function Yn(e) {
      var t = e.stackTrace,
        n = e.originalError,
        r = e.handlingStack,
        i = e.startClocks,
        s = e.nonErrorPrefix,
        o = e.source,
        a = e.handling,
        c = n instanceof Error,
        u = (function (e, t, n, r) {
          return (null == e ? void 0 : e.message) && (null == e ? void 0 : e.name)
            ? e.message
            : t
            ? "Empty message"
            : "".concat(n, " ").concat(Ye(tt(r)));
        })(t, c, s, n),
        l = (function (e, t) {
          if (void 0 === t) return !1;
          if (e) return !0;
          return t.stack.length > 0 && (t.stack.length > 1 || void 0 !== t.stack[0].url);
        })(c, t)
          ? Zn(t)
          : Kn,
        d = c
          ? (function (e, t) {
              var n = e,
                r = [];
              for (; (null == n ? void 0 : n.cause) instanceof Error && r.length < 10; ) {
                var i = Un(n.cause);
                r.push({ message: n.cause.message, source: t, type: null == i ? void 0 : i.name, stack: i && Zn(i) }), (n = n.cause);
              }
              return r.length ? r : void 0;
            })(n, o)
          : void 0;
      return {
        startClocks: i,
        source: o,
        handling: a,
        handlingStack: r,
        originalError: n,
        type: null == t ? void 0 : t.name,
        message: u,
        stack: l,
        causes: d,
        fingerprint: Xn(n)
      };
    }
    function Xn(e) {
      return e instanceof Error && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0;
    }
    function Zn(e) {
      var t = Qn(e);
      return (
        e.stack.forEach(function (e) {
          var n = "?" === e.func ? "<anonymous>" : e.func,
            r = e.args && e.args.length > 0 ? "(".concat(e.args.join(", "), ")") : "",
            i = e.line ? ":".concat(e.line) : "",
            s = e.line && e.column ? ":".concat(e.column) : "";
          t += "\n  at ".concat(n).concat(r, " @ ").concat(e.url).concat(i).concat(s);
        }),
        t
      );
    }
    function Qn(e) {
      return "".concat(e.name || "Error", ": ").concat(e.message);
    }
    var er = { intervention: "intervention", deprecation: "deprecation", cspViolation: "csp_violation" };
    function tr(e, t) {
      var n = [];
      Ce(t, er.cspViolation) &&
        n.push(
          (function (e) {
            var t = new st(function () {
              return St(e, document, "securitypolicyviolation", function (e) {
                t.notify(
                  (function (e) {
                    var t = er.cspViolation,
                      n = "'".concat(e.blockedURI, "' blocked by '").concat(e.effectiveDirective, "' directive");
                    return {
                      type: er.cspViolation,
                      subtype: e.effectiveDirective,
                      message: "".concat(t, ": ").concat(n),
                      stack: nr(
                        e.effectiveDirective,
                        e.originalPolicy ? "".concat(n, ' of the policy "').concat(jt(e.originalPolicy, 100, "..."), '"') : "no policy",
                        e.sourceFile,
                        e.lineNumber,
                        e.columnNumber
                      )
                    };
                  })(e)
                );
              }).stop;
            });
            return t;
          })(e)
        );
      var r = t.filter(function (e) {
        return e !== er.cspViolation;
      });
      return (
        r.length &&
          n.push(
            (function (e) {
              var t = new st(function () {
                if (window.ReportingObserver) {
                  var n = _e(function (e, n) {
                      return e.forEach(function (e) {
                        t.notify(
                          (function (e) {
                            var t = e.type,
                              n = e.body;
                            return {
                              type: t,
                              subtype: n.id,
                              message: "".concat(t, ": ").concat(n.message),
                              stack: nr(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                            };
                          })(e)
                        );
                      });
                    }),
                    r = new window.ReportingObserver(n, { types: e, buffered: !0 });
                  return (
                    r.observe(),
                    function () {
                      r.disconnect();
                    }
                  );
                }
              });
              return t;
            })(r)
          ),
        ot.apply(void 0, n)
      );
    }
    function nr(e, t, n, r, i) {
      return n
        ? Zn({ name: e, message: t, stack: [{ func: "?", url: n, line: null != r ? r : void 0, column: null != i ? i : void 0 }] })
        : void 0;
    }
    var rr = 32 * Re;
    function ir(e, t, n) {
      return void 0 === e
        ? []
        : "all" === e ||
          (Array.isArray(e) &&
            e.every(function (e) {
              return Ce(t, e);
            }))
        ? "all" === e
          ? t
          : ((r = e),
            (i = new Set()),
            r.forEach(function (e) {
              return i.add(e);
            }),
            Oe(i))
        : void ve.error("".concat(n, ' should be "all" or an array with allowed values "').concat(t.join('", "'), '"'));
      var r, i;
    }
    var sr = {
        AGENT: "agent",
        CONSOLE: "console",
        CUSTOM: "custom",
        LOGGER: "logger",
        NETWORK: "network",
        SOURCE: "source",
        REPORT: "report"
      },
      or = function (e, t, n, r) {
        var i,
          s = arguments.length,
          o = s < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
        return s > 3 && o && Object.defineProperty(t, n, o), o;
      },
      ar = { debug: "debug", error: "error", info: "info", warn: "warn" },
      cr = { console: "console", http: "http", silent: "silent" },
      ur = Object.keys(ar),
      lr = (function () {
        function e(e, t, n, r, i) {
          void 0 === n && (n = cr.http),
            void 0 === r && (r = ar.debug),
            void 0 === i && (i = {}),
            (this.handleLogStrategy = e),
            (this.handlerType = n),
            (this.level = r),
            (this.contextManager = lt(3)),
            this.contextManager.set(Pe({}, i, t ? { logger: { name: t } } : void 0));
        }
        return (
          (e.prototype.log = function (e, t, n, r) {
            var i;
            if ((void 0 === n && (n = ar.info), n === ar.error && (i = { origin: sr.LOGGER }), null != r)) {
              var s = Yn({
                stackTrace: r instanceof Error ? Un(r) : void 0,
                originalError: r,
                nonErrorPrefix: "Provided",
                source: sr.LOGGER,
                handling: "handled",
                startClocks: yt()
              });
              i = { origin: sr.LOGGER, stack: s.stack, kind: s.type, message: s.message };
            }
            var o = tt(t),
              a = i ? Ke({ error: i }, o) : o;
            this.handleLogStrategy({ message: tt(e), context: a, status: n }, this);
          }),
          (e.prototype.debug = function (e, t, n) {
            this.log(e, t, ar.debug, n);
          }),
          (e.prototype.info = function (e, t, n) {
            this.log(e, t, ar.info, n);
          }),
          (e.prototype.warn = function (e, t, n) {
            this.log(e, t, ar.warn, n);
          }),
          (e.prototype.error = function (e, t, n) {
            this.log(e, t, ar.error, n);
          }),
          (e.prototype.setContext = function (e) {
            this.contextManager.set(e);
          }),
          (e.prototype.getContext = function () {
            return this.contextManager.get();
          }),
          (e.prototype.addContext = function (e, t) {
            this.contextManager.add(e, t);
          }),
          (e.prototype.removeContext = function (e) {
            this.contextManager.remove(e);
          }),
          (e.prototype.setHandler = function (e) {
            this.handlerType = e;
          }),
          (e.prototype.getHandler = function () {
            return this.handlerType;
          }),
          (e.prototype.setLevel = function (e) {
            this.level = e;
          }),
          (e.prototype.getLevel = function () {
            return this.level;
          }),
          or([Te], e.prototype, "log", null),
          e
        );
      })(),
      dr = "logs";
    function hr(e, t) {
      var n = window.__ddBrowserSdkExtensionCallback;
      n && n({ type: e, payload: t });
    }
    var fr,
      pr = { log: "log", configuration: "configuration" },
      gr = [
        "https://www.datadoghq-browser-agent.com",
        "https://www.datad0g-browser-agent.com",
        "https://d3uc069fcn7uxw.cloudfront.net",
        "https://d20xtzwzcl0ceb.cloudfront.net",
        "http://localhost",
        "<anonymous>"
      ],
      mr = ["ddog-gov.com"],
      vr = { maxEventsPerPage: 0, sentEventCount: 0, telemetryEnabled: !1, telemetryConfigurationEnabled: !1 };
    function br(e, t) {
      var n,
        r = new st();
      (vr.telemetryEnabled = !Ce(mr, t.site) && Dt(t.telemetrySampleRate)),
        (vr.telemetryConfigurationEnabled = vr.telemetryEnabled && Dt(t.telemetryConfigurationSampleRate));
      var i = { is_local_file: "file:" === window.location.protocol, is_worker: "WorkerGlobalScope" in self };
      return (
        (fr = function (t) {
          if (vr.telemetryEnabled) {
            var s = (function (e, t, r) {
              return Ke(
                {
                  type: "telemetry",
                  date: vt(),
                  service: e,
                  version: "4.50.0",
                  source: "browser",
                  _dd: { format_version: 2 },
                  telemetry: Ke(t, { runtime_env: r }),
                  experimental_features: Oe(Pt())
                },
                void 0 !== n ? n() : {}
              );
            })(e, t, i);
            r.notify(s), hr("telemetry", s);
          }
        }),
        (Ee = wr),
        Pe(vr, { maxEventsPerPage: t.maxTelemetryEventsPerPage, sentEventCount: 0 }),
        {
          setContextProvider: function (e) {
            n = e;
          },
          observable: r,
          enabled: vr.telemetryEnabled
        }
      );
    }
    function yr(e, t) {
      Ie(me.debug, e, t), Er(Pe({ type: pr.log, message: e, status: "debug" }, t));
    }
    function wr(e, t) {
      Er(
        Pe(
          { type: pr.log, status: "error" },
          (function (e) {
            if (e instanceof Error) {
              var t = Un(e);
              return { error: { kind: t.name, stack: Zn(xr(t)) }, message: t.message };
            }
            return { error: { stack: Kn }, message: "".concat("Uncaught", " ").concat(Ye(e)) };
          })(e),
          t
        )
      );
    }
    function Er(e) {
      fr && vr.sentEventCount < vr.maxEventsPerPage && ((vr.sentEventCount += 1), fr(e));
    }
    function xr(e) {
      return (
        (e.stack = e.stack.filter(function (e) {
          return (
            !e.url ||
            gr.some(function (t) {
              return Ne(e.url, t);
            })
          );
        })),
        e
      );
    }
    var Ar = { HIDDEN: "visibility_hidden", UNLOADING: "before_unload", PAGEHIDE: "page_hide", FROZEN: "page_frozen" };
    var Sr = "datadog-synthetics-public-id",
      Tr = "datadog-synthetics-result-id",
      _r = "datadog-synthetics-injects-rum";
    function kr() {
      return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || Ht(_r));
    }
    function Ir() {
      var e = window._DATADOG_SYNTHETICS_RESULT_ID || Ht(Tr);
      return "string" == typeof e ? e : void 0;
    }
    var Cr = (function () {
      function e(e, t, n) {
        var r = this;
        (this.request = e),
          (this.flushController = t),
          (this.messageBytesLimit = n),
          (this.pushOnlyBuffer = []),
          (this.upsertBuffer = {}),
          (this.flushSubscription = this.flushController.flushObservable.subscribe(function (e) {
            return r.flush(e);
          }));
      }
      return (
        (e.prototype.add = function (e) {
          this.addOrUpdate(e);
        }),
        (e.prototype.upsert = function (e, t) {
          this.addOrUpdate(e, t);
        }),
        (e.prototype.stop = function () {
          this.flushSubscription.unsubscribe();
        }),
        (e.prototype.flush = function (e) {
          var t = this.pushOnlyBuffer.concat(Be(this.upsertBuffer));
          (this.pushOnlyBuffer = []), (this.upsertBuffer = {});
          var n,
            r = { data: t.join("\n"), bytesCount: e.bytesCount, flushReason: e.reason };
          (n = e.reason), Ce(Be(Ar), n) ? this.request.sendOnExit(r) : this.request.send(r);
        }),
        (e.prototype.addOrUpdate = function (e, t) {
          var n = this.process(e),
            r = n.processedMessage,
            i = n.messageBytesCount;
          i >= this.messageBytesLimit
            ? ve.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB."))
            : (this.hasMessageFor(t) && this.remove(t), this.push(r, i, t));
        }),
        (e.prototype.process = function (e) {
          var t = Ye(e);
          return { processedMessage: t, messageBytesCount: je(t) };
        }),
        (e.prototype.push = function (e, t, n) {
          var r = this.flushController.messagesCount > 0 ? 1 : 0;
          this.flushController.notifyBeforeAddMessage(t + r),
            void 0 !== n ? (this.upsertBuffer[n] = e) : this.pushOnlyBuffer.push(e),
            this.flushController.notifyAfterAddMessage();
        }),
        (e.prototype.remove = function (e) {
          var t = this.upsertBuffer[e];
          delete this.upsertBuffer[e];
          var n = je(t),
            r = this.flushController.messagesCount > 1 ? 1 : 0;
          this.flushController.notifyAfterRemoveMessage(n + r);
        }),
        (e.prototype.hasMessageFor = function (e) {
          return void 0 !== e && void 0 !== this.upsertBuffer[e];
        }),
        e
      );
    })();
    function Or(e) {
      return e >= 500;
    }
    var Br = 80 * Re,
      Nr = 32,
      Pr = 3 * Me,
      Dr = pt,
      Rr = ft;
    function Mr(e, t, n, r, i) {
      0 === t.transportStatus && 0 === t.queuedPayloads.size() && t.bandwidthMonitor.canHandle(e)
        ? jr(e, t, n, {
            onSuccess: function () {
              return Ur(0, t, n, r, i);
            },
            onFailure: function () {
              t.queuedPayloads.enqueue(e), Lr(t, n, r, i);
            }
          })
        : t.queuedPayloads.enqueue(e);
    }
    function Lr(e, t, n, r) {
      2 === e.transportStatus &&
        $e(function () {
          jr(e.queuedPayloads.first(), e, t, {
            onSuccess: function () {
              e.queuedPayloads.dequeue(), (e.currentBackoffTime = Rr), Ur(1, e, t, n, r);
            },
            onFailure: function () {
              (e.currentBackoffTime = Math.min(Dr, 2 * e.currentBackoffTime)), Lr(e, t, n, r);
            }
          });
        }, e.currentBackoffTime);
    }
    function jr(e, t, n, r) {
      var i = r.onSuccess,
        s = r.onFailure;
      t.bandwidthMonitor.add(e),
        n(e, function (n) {
          t.bandwidthMonitor.remove(e),
            !(function (e) {
              return "opaque" !== e.type && ((0 === e.status && !navigator.onLine) || 408 === e.status || 429 === e.status || Or(e.status));
            })(n)
              ? ((t.transportStatus = 0), i())
              : ((t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2),
                (e.retry = { count: e.retry ? e.retry.count + 1 : 1, lastFailureStatus: n.status }),
                s());
        });
    }
    function Ur(e, t, n, r, i) {
      0 === e &&
        t.queuedPayloads.isFull() &&
        !t.queueFullReported &&
        (i({
          message: "Reached max ".concat(r, " events size queued for upload: ").concat(Pr / Me, "MiB"),
          source: sr.AGENT,
          startClocks: yt()
        }),
        (t.queueFullReported = !0));
      var s = t.queuedPayloads;
      for (t.queuedPayloads = $r(); s.size() > 0; ) Mr(s.dequeue(), t, n, r, i);
    }
    function $r() {
      var e = [];
      return {
        bytesCount: 0,
        enqueue: function (t) {
          this.isFull() || (e.push(t), (this.bytesCount += t.bytesCount));
        },
        first: function () {
          return e[0];
        },
        dequeue: function () {
          var t = e.shift();
          return t && (this.bytesCount -= t.bytesCount), t;
        },
        size: function () {
          return e.length;
        },
        isFull: function () {
          return this.bytesCount >= Pr;
        }
      };
    }
    function Fr(e, t, n, r) {
      var i = {
          transportStatus: 0,
          currentBackoffTime: Rr,
          bandwidthMonitor: {
            ongoingRequestCount: 0,
            ongoingByteCount: 0,
            canHandle: function (e) {
              return 0 === this.ongoingRequestCount || (this.ongoingByteCount + e.bytesCount <= Br && this.ongoingRequestCount < Nr);
            },
            add: function (e) {
              (this.ongoingRequestCount += 1), (this.ongoingByteCount += e.bytesCount);
            },
            remove: function (e) {
              (this.ongoingRequestCount -= 1), (this.ongoingByteCount -= e.bytesCount);
            }
          },
          queuedPayloads: $r(),
          queueFullReported: !1
        },
        s = function (r, i) {
          return (function (e, t, n, r, i) {
            var s =
              (function () {
                try {
                  return window.Request && "keepalive" in new Request("http://a");
                } catch (e) {
                  return !1;
                }
              })() && r.bytesCount < n;
            if (s) {
              var o = t.build("fetch", r);
              fetch(o, { method: "POST", body: r.data, keepalive: !0, mode: "cors" }).then(
                _e(function (e) {
                  return null == i ? void 0 : i({ status: e.status, type: e.type });
                }),
                _e(function () {
                  var n = t.build("xhr", r);
                  Hr(e, n, r.data, i);
                })
              );
            } else {
              var a = t.build("xhr", r);
              Hr(e, a, r.data, i);
            }
          })(e, t, n, r, i);
        };
      return {
        send: function (e) {
          Mr(e, i, s, t.endpointType, r);
        },
        sendOnExit: function (r) {
          !(function (e, t, n, r) {
            var i = !!navigator.sendBeacon && r.bytesCount < n;
            if (i)
              try {
                var s = t.build("beacon", r);
                if (navigator.sendBeacon(s, r.data)) return;
              } catch (e) {
                !(function (e) {
                  qr || ((qr = !0), wr(e));
                })(e);
              }
            var o = t.build("xhr", r);
            Hr(e, o, r.data);
          })(e, t, n, r);
        }
      };
    }
    var qr = !1;
    function Hr(e, t, n, r) {
      var i = new XMLHttpRequest();
      i.open("POST", t, !0),
        St(
          e,
          i,
          "loadend",
          function () {
            null == r || r({ status: i.status });
          },
          { once: !0 }
        ),
        i.send(n);
    }
    function Wr(e) {
      var t,
        n = e.messagesLimit,
        r = e.bytesLimit,
        i = e.durationLimit,
        s = e.pageExitObservable,
        o = e.sessionExpireObservable,
        a = s.subscribe(function (e) {
          return h(e.reason);
        }),
        c = o.subscribe(function () {
          return h("session_expire");
        }),
        u = new st(function () {
          return function () {
            a.unsubscribe(), c.unsubscribe();
          };
        }),
        l = 0,
        d = 0;
      function h(e) {
        if (0 !== d) {
          var t = d,
            n = l;
          (d = 0), (l = 0), f(), u.notify({ reason: e, messagesCount: t, bytesCount: n });
        }
      }
      function f() {
        Fe(t), (t = void 0);
      }
      return {
        flushObservable: u,
        get messagesCount() {
          return d;
        },
        notifyBeforeAddMessage: function (e) {
          l + e >= r && h("bytes_limit"),
            (d += 1),
            (l += e),
            void 0 === t &&
              (t = $e(function () {
                h("duration_limit");
              }, i));
        },
        notifyAfterAddMessage: function () {
          d >= n ? h("messages_limit") : l >= r && h("bytes_limit");
        },
        notifyAfterRemoveMessage: function (e) {
          (l -= e), 0 === (d -= 1) && f();
        }
      };
    }
    function zr(e, t, n, r, i, s) {
      var o = c(e, t.endpoint),
        a = n && c(e, n.endpoint);
      function c(e, t) {
        return new Cr(
          Fr(e, t, e.batchBytesLimit, r),
          Wr({
            messagesLimit: e.batchMessagesLimit,
            bytesLimit: e.batchBytesLimit,
            durationLimit: e.flushTimeout,
            pageExitObservable: i,
            sessionExpireObservable: s
          }),
          e.messageBytesLimit
        );
      }
      return {
        flushObservable: o.flushController.flushObservable,
        add: function (e, t) {
          void 0 === t && (t = !0), o.add(e), a && t && a.add(n.transformMessage ? n.transformMessage(e) : e);
        },
        upsert: function (e, t) {
          o.upsert(e, t), a && a.upsert(n.transformMessage ? n.transformMessage(e) : e, t);
        },
        stop: function () {
          o.stop(), null == a || a.stop();
        }
      };
    }
    var Gr = 1 / 0,
      Vr = pt,
      Jr = (function () {
        function e(e, t) {
          var n = this;
          (this.expireDelay = e),
            (this.maxEntries = t),
            (this.entries = []),
            (this.clearOldValuesInterval = qe(function () {
              return n.clearOldValues();
            }, Vr));
        }
        return (
          (e.prototype.add = function (e, t) {
            var n = this,
              r = {
                value: e,
                startTime: t,
                endTime: Gr,
                remove: function () {
                  var e = n.entries.indexOf(r);
                  e >= 0 && n.entries.splice(e, 1);
                },
                close: function (e) {
                  r.endTime = e;
                }
              };
            return this.maxEntries && this.entries.length >= this.maxEntries && this.entries.pop(), this.entries.unshift(r), r;
          }),
          (e.prototype.find = function (e) {
            void 0 === e && (e = Gr);
            for (var t = 0, n = this.entries; t < n.length; t++) {
              var r = n[t];
              if (r.startTime <= e) {
                if (e <= r.endTime) return r.value;
                break;
              }
            }
          }),
          (e.prototype.closeActive = function (e) {
            var t = this.entries[0];
            t && t.endTime === Gr && t.close(e);
          }),
          (e.prototype.findAll = function (e, t) {
            void 0 === e && (e = Gr), void 0 === t && (t = 0);
            var n = wt(e, t);
            return this.entries
              .filter(function (t) {
                return t.startTime <= n && e <= t.endTime;
              })
              .map(function (e) {
                return e.value;
              });
          }),
          (e.prototype.reset = function () {
            this.entries = [];
          }),
          (e.prototype.stop = function () {
            He(this.clearOldValuesInterval);
          }),
          (e.prototype.clearOldValues = function () {
            for (var e = bt() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < e; )
              this.entries.pop();
          }),
          e
        );
      })(),
      Kr = pt,
      Yr = $t,
      Xr = [];
    function Zr(e, t, n) {
      var r = En(e.sessionStoreStrategyType, t, n);
      Xr.push(function () {
        return r.stop();
      });
      var i,
        s = new Jr(Yr);
      function o() {
        return { id: r.getSession().id, trackingType: r.getSession()[t] };
      }
      return (
        Xr.push(function () {
          return s.stop();
        }),
        r.renewObservable.subscribe(function () {
          s.add(o(), bt());
        }),
        r.expireObservable.subscribe(function () {
          s.closeActive(bt());
        }),
        r.expandOrRenewSession(),
        s.add(o(), [0, Et()][0]),
        (i = Tt(
          0,
          window,
          ["click", "touchstart", "keydown", "scroll"],
          function () {
            return r.expandOrRenewSession();
          },
          { capture: !0, passive: !0 }
        ).stop),
        Xr.push(i),
        (function (e, t) {
          var n = function () {
              "visible" === document.visibilityState && t();
            },
            r = St(e, document, "visibilitychange", n).stop;
          Xr.push(r);
          var i = qe(n, Kr);
          Xr.push(function () {
            He(i);
          });
        })(e, function () {
          return r.expandSession();
        }),
        {
          findActiveSession: function (e) {
            return s.find(e);
          },
          renewObservable: r.renewObservable,
          expireObservable: r.expireObservable,
          expire: r.expire
        }
      );
    }
    var Qr,
      ei = "logs";
    function ti(e) {
      var t = Zr(e, ei, function (t) {
        return (function (e, t) {
          var n = (function (e) {
            return "0" === e || "1" === e;
          })(t)
            ? t
            : ni(e);
          return { trackingType: n, isTracked: "1" === n };
        })(e, t);
      });
      return {
        findTrackedSession: function (e) {
          var n = t.findActiveSession(e);
          return n && "1" === n.trackingType ? { id: n.id } : void 0;
        },
        expireObservable: t.expireObservable
      };
    }
    function ni(e) {
      return Dt(e.sessionSampleRate) ? "1" : "0";
    }
    var ri = (((Qr = {})[ar.debug] = 0), (Qr[ar.info] = 1), (Qr[ar.warn] = 2), (Qr[ar.error] = 3), Qr);
    function ii(e, t, n) {
      var r = n.getHandler(),
        i = Array.isArray(r) ? r : [r];
      return ri[e] >= ri[n.getLevel()] && Ce(i, t);
    }
    function si(e, t, n, r, i, s) {
      var o = ur.concat(["custom"]),
        a = {};
      o.forEach(function (e) {
        var n, r, i, o, c;
        a[e] =
          ((n = e),
          (r = t.eventRateLimiterThreshold),
          (i = s),
          (o = 0),
          (c = !1),
          {
            isLimitReached: function () {
              if (
                (0 === o &&
                  $e(function () {
                    o = 0;
                  }, pt),
                (o += 1) <= r || c)
              )
                return (c = !1), !1;
              if (o === r + 1) {
                c = !0;
                try {
                  i({ message: "Reached max number of ".concat(n, "s by minute: ").concat(r), source: sr.AGENT, startClocks: yt() });
                } finally {
                  c = !1;
                }
              }
              return !0;
            }
          });
      }),
        n.subscribe(0, function (s) {
          var o,
            c,
            u,
            l = s.rawLogsEvent,
            d = s.messageContext,
            h = void 0 === d ? void 0 : d,
            f = s.savedCommonContext,
            p = void 0 === f ? void 0 : f,
            g = s.logger,
            m = void 0 === g ? i : g,
            v = l.date - Et(),
            b = e.findTrackedSession(v);
          if (b) {
            var y = p || r(),
              w = Ke(
                { service: t.service, session_id: b.id, usr: Mt(y.user) ? void 0 : y.user, view: y.view },
                y.context,
                ai(v),
                l,
                m.getContext(),
                h
              );
            !ii(l.status, cr.http, m) ||
              !1 === (null === (o = t.beforeSend) || void 0 === o ? void 0 : o.call(t, w)) ||
              ((null === (c = w.error) || void 0 === c ? void 0 : c.origin) !== sr.AGENT &&
                (null !== (u = a[w.status]) && void 0 !== u ? u : a.custom).isLimitReached()) ||
              n.notify(1, w);
          }
        });
    }
    var oi = !1;
    function ai(e) {
      var t,
        n = window;
      if (kr()) {
        var r = i(n.DD_RUM_SYNTHETICS);
        return (
          r ||
            oi ||
            ((oi = !0),
            yr("Logs sent before RUM is injected by the synthetics worker", {
              testId: ((t = window._DATADOG_SYNTHETICS_PUBLIC_ID || Ht(Sr)), "string" == typeof t ? t : void 0),
              resultId: Ir()
            })),
          r
        );
      }
      return i(n.DD_RUM);
      function i(t) {
        if (t && t.getInternalContext) return t.getInternalContext(e);
      }
    }
    var ci,
      ui = {};
    function li(e) {
      var t = e.map(function (e) {
        return (
          ui[e] ||
            (ui[e] = (function (e) {
              var t = new st(function () {
                var n = be[e];
                return (
                  (be[e] = function () {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    n.apply(console, r);
                    var s = (function () {
                      var e,
                        t = new Error();
                      if (!t.stack)
                        try {
                          throw t;
                        } catch (e) {}
                      return (
                        ke(function () {
                          var n = Un(t);
                          (n.stack = n.stack.slice(2)), (e = Zn(n));
                        }),
                        e
                      );
                    })();
                    ke(function () {
                      t.notify(
                        (function (e, t, n) {
                          var r,
                            i,
                            s = e
                              .map(function (e) {
                                return (function (e) {
                                  if ("string" == typeof e) return tt(e);
                                  if (e instanceof Error) return Qn(Un(e));
                                  return Ye(tt(e), void 0, 2);
                                })(e);
                              })
                              .join(" ");
                          if (t === me.error) {
                            var o = (function (e, t) {
                              for (var n = 0; n < e.length; n += 1) {
                                var r = e[n];
                                if (t(r, n)) return r;
                              }
                            })(e, function (e) {
                              return e instanceof Error;
                            });
                            (r = o ? Zn(Un(o)) : void 0), (i = Xn(o)), (s = "console error: ".concat(s));
                          }
                          return { api: t, message: s, stack: r, handlingStack: n, fingerprint: i };
                        })(r, e, s)
                      );
                    });
                  }),
                  function () {
                    be[e] = n;
                  }
                );
              });
              return t;
            })(e)),
          ui[e]
        );
      });
      return ot.apply(void 0, t);
    }
    var di,
      hi =
        (((ci = {})[me.log] = ar.info),
        (ci[me.debug] = ar.debug),
        (ci[me.info] = ar.info),
        (ci[me.warn] = ar.warn),
        (ci[me.error] = ar.error),
        ci);
    var fi,
      pi = (((di = {})[er.cspViolation] = ar.error), (di[er.intervention] = ar.error), (di[er.deprecation] = ar.warn), di);
    function gi(e, t, n) {
      var r = e[t],
        i = n(r),
        s = function () {
          if ("function" == typeof i) return i.apply(this, arguments);
        };
      return (
        (e[t] = s),
        {
          stop: function () {
            e[t] === s ? (e[t] = r) : (i = r);
          }
        }
      );
    }
    function mi(e, t, n) {
      var r = n.before,
        i = n.after;
      return gi(e, t, function (e) {
        return function () {
          var t,
            n = arguments;
          return r && ke(r, this, n), "function" == typeof e && (t = e.apply(this, n)), i && ke(i, this, n), t;
        };
      });
    }
    var vi,
      bi = new WeakMap();
    function yi(e) {
      return (
        fi ||
          (fi = (function (e) {
            var t = new st(function () {
              var n = mi(XMLHttpRequest.prototype, "open", { before: wi }).stop,
                r = mi(XMLHttpRequest.prototype, "send", {
                  before: function () {
                    Ei.call(this, e, t);
                  }
                }).stop,
                i = mi(XMLHttpRequest.prototype, "abort", { before: xi }).stop;
              return function () {
                n(), r(), i();
              };
            });
            return t;
          })(e)),
        fi
      );
    }
    function wi(e, t) {
      bi.set(this, { state: "open", method: e, url: xn(String(t)) });
    }
    function Ei(e, t) {
      var n = this,
        r = bi.get(this);
      if (r) {
        var i = r;
        (i.state = "start"), (i.startTime = bt()), (i.startClocks = yt()), (i.isAborted = !1), (i.xhr = this);
        var s = !1,
          o = mi(this, "onreadystatechange", {
            before: function () {
              this.readyState === XMLHttpRequest.DONE && a();
            }
          }).stop,
          a = function () {
            if ((c(), o(), !s)) {
              s = !0;
              var e,
                a = r;
              (a.state = "complete"), (a.duration = ((e = i.startClocks.timeStamp), vt() - e)), (a.status = n.status), t.notify(Pe({}, a));
            }
          },
          c = St(e, this, "loadend", a).stop;
        t.notify(i);
      }
    }
    function xi() {
      var e = bi.get(this);
      e && (e.isAborted = !0);
    }
    function Ai() {
      var e;
      return (
        vi ||
          ((e = new st(function () {
            if (window.fetch)
              return gi(window, "fetch", function (t) {
                return function (n, r) {
                  var i,
                    s = ke(Si, null, [e, n, r]);
                  return s ? ((i = t.call(this, s.input, s.init)), ke(Ti, null, [e, i, s])) : (i = t.call(this, n, r)), i;
                };
              }).stop;
          })),
          (vi = e)),
        vi
      );
    }
    function Si(e, t, n) {
      var r = (n && n.method) || (t instanceof Request && t.method) || "GET",
        i = t instanceof Request ? t.url : xn(String(t)),
        s = { state: "start", init: n, input: t, method: r, startClocks: yt(), url: i };
      return e.notify(s), s;
    }
    function Ti(e, t, n) {
      var r = function (t) {
        var r = n;
        (r.state = "resolve"),
          "stack" in t || t instanceof Error
            ? ((r.status = 0), (r.isAborted = t instanceof DOMException && t.code === DOMException.ABORT_ERR), (r.error = t))
            : "status" in t && ((r.response = t), (r.responseType = t.type), (r.status = t.status), (r.isAborted = !1)),
          e.notify(r);
      };
      t.then(_e(r), _e(r));
    }
    function _i(e, t) {
      if (!e.forwardErrorsToLogs) return { stop: ze };
      var n = yi(e).subscribe(function (e) {
          "complete" === e.state && i("xhr", e);
        }),
        r = Ai().subscribe(function (e) {
          "resolve" === e.state && i("fetch", e);
        });
      function i(n, r) {
        function i(e) {
          t.notify(0, {
            rawLogsEvent: {
              message: "".concat(Ii(n), " error ").concat(r.method, " ").concat(r.url),
              date: r.startClocks.timeStamp,
              error: { origin: sr.NETWORK, stack: e || "Failed to load" },
              http: { method: r.method, status_code: r.status, url: r.url },
              status: ar.error,
              origin: sr.NETWORK
            }
          });
        }
        e.isIntakeUrl(r.url) ||
          (!(function (e) {
            return 0 === e.status && "opaque" !== e.responseType;
          })(r) &&
            !Or(r.status)) ||
          ("xhr" in r
            ? (function (e, t, n) {
                "string" == typeof e.response ? n(ki(e.response, t)) : n(e.response);
              })(r.xhr, e, i)
            : r.response
            ? (function (e, t, n) {
                var r = (function (e) {
                  try {
                    return e.clone();
                  } catch (e) {
                    return;
                  }
                })(e);
                r && r.body
                  ? window.TextDecoder
                    ? (function (e, t, n) {
                        !(function (e, t, n) {
                          var r = e.getReader(),
                            i = [],
                            s = 0;
                          function o() {
                            var e, o;
                            if ((r.cancel().catch(ze), n.collectStreamBody)) {
                              var a;
                              if (1 === i.length) a = i[0];
                              else {
                                a = new Uint8Array(s);
                                var c = 0;
                                i.forEach(function (e) {
                                  a.set(e, c), (c += e.length);
                                });
                              }
                              (e = a.slice(0, n.bytesLimit)), (o = a.length > n.bytesLimit);
                            }
                            t(void 0, e, o);
                          }
                          !(function e() {
                            r.read().then(
                              _e(function (t) {
                                t.done ? o() : (n.collectStreamBody && i.push(t.value), (s += t.value.length) > n.bytesLimit ? o() : e());
                              }),
                              _e(function (e) {
                                return t(e);
                              })
                            );
                          })();
                        })(
                          e,
                          function (e, t, r) {
                            if (e) n(e);
                            else {
                              var i = new TextDecoder().decode(t);
                              r && (i += "..."), n(void 0, i);
                            }
                          },
                          { bytesLimit: t, collectStreamBody: !0 }
                        );
                      })(r.body, t.requestErrorResponseLengthLimit, function (e, t) {
                        n(e ? "Unable to retrieve response: ".concat(e) : t);
                      })
                    : r.text().then(
                        _e(function (e) {
                          return n(ki(e, t));
                        }),
                        _e(function (e) {
                          return n("Unable to retrieve response: ".concat(e));
                        })
                      )
                  : n();
              })(r.response, e, i)
            : r.error &&
              (function (e, t, n) {
                n(ki(Zn(Un(e)), t));
              })(r.error, e, i));
      }
      return {
        stop: function () {
          n.unsubscribe(), r.unsubscribe();
        }
      };
    }
    function ki(e, t) {
      return e.length > t.requestErrorResponseLengthLimit ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...") : e;
    }
    function Ii(e) {
      return "xhr" === e ? "XHR" : "Fetch";
    }
    var Ci = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
    function Oi(e) {
      var t = (function (e) {
          return mi(window, "onerror", {
            before: function (t, n, r, i, s) {
              var o;
              if (s instanceof Error) o = Un(s);
              else {
                var a = [{ url: n, column: i, line: r }],
                  c = (function (e) {
                    var t, n, r;
                    "[object String]" === {}.toString.call(e) && ((n = (t = Ci.exec(e))[1]), (r = t[2]));
                    return { name: n, message: r };
                  })(t);
                o = { name: c.name, message: c.message, stack: a };
              }
              e(o, null != s ? s : t);
            }
          });
        })(e).stop,
        n = (function (e) {
          return mi(window, "onunhandledrejection", {
            before: function (t) {
              var n = t.reason || "Empty reason",
                r = Un(n);
              e(r, n);
            }
          });
        })(e).stop;
      return {
        stop: function () {
          t(), n();
        }
      };
    }
    function Bi(e, t) {
      if (!e.forwardErrorsToLogs) return { stop: ze };
      var n,
        r = new st(),
        i = ((n = r),
        Oi(function (e, t) {
          n.notify(
            Yn({ stackTrace: e, originalError: t, startClocks: yt(), nonErrorPrefix: "Uncaught", source: sr.SOURCE, handling: "unhandled" })
          );
        })).stop,
        s = r.subscribe(function (e) {
          t.notify(0, {
            rawLogsEvent: {
              message: e.message,
              date: e.startClocks.timeStamp,
              error: { kind: e.type, origin: sr.SOURCE, stack: e.stack },
              origin: sr.SOURCE,
              status: ar.error
            }
          });
        });
      return {
        stop: function () {
          i(), s.unsubscribe();
        }
      };
    }
    var Ni = (function () {
      function e() {
        this.callbacks = {};
      }
      return (
        (e.prototype.notify = function (e, t) {
          var n = this.callbacks[e];
          n &&
            n.forEach(function (e) {
              return e(t);
            });
        }),
        (e.prototype.subscribe = function (e, t) {
          var n = this;
          return (
            this.callbacks[e] || (this.callbacks[e] = []),
            this.callbacks[e].push(t),
            {
              unsubscribe: function () {
                n.callbacks[e] = n.callbacks[e].filter(function (e) {
                  return t !== e;
                });
              }
            }
          );
        }),
        e
      );
    })();
    var Pi = (function (e) {
      var t,
        n,
        r = !1,
        i = lt(2),
        s = lt(1),
        o = {},
        a = function () {},
        c = new ht(),
        u = function (e, t, n, r) {
          void 0 === n && (n = Je(h())),
            void 0 === r && (r = vt()),
            c.add(function () {
              return u(e, t, n, r);
            });
        },
        l = function () {},
        d = new lr(function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return u.apply(void 0, e);
        });
      function h() {
        return { view: { referrer: document.referrer, url: window.location.href }, context: i.getContext(), user: s.getContext() };
      }
      return (
        (t = {
          logger: d,
          init: _e(function (t) {
            var n;
            if (t) {
              if (
                ((l = function () {
                  return Je(t);
                }),
                At() &&
                  (t = (function (e) {
                    return Pe({}, e, { clientToken: "empty" });
                  })(t)),
                (function (e) {
                  return !r || (e.silentMultipleInit || ve.error("DD_LOGS is already initialized."), !1);
                })(t))
              ) {
                var o = (function (e) {
                  var t = Ln(e),
                    n = ir(e.forwardConsoleLogs, Be(me), "Forward Console Logs"),
                    r = ir(e.forwardReports, Be(er), "Forward Reports");
                  if (t && n && r)
                    return (
                      e.forwardErrorsToLogs && !Ce(n, me.error) && n.push(me.error),
                      Pe(
                        {
                          forwardErrorsToLogs: !1 !== e.forwardErrorsToLogs,
                          forwardConsoleLogs: n,
                          forwardReports: r,
                          requestErrorResponseLengthLimit: rr
                        },
                        t
                      )
                    );
                })(t);
                if (o) {
                  if (t.storeContextsAcrossPages) {
                    var f = i.getContext();
                    (i = Ct(o, dr, 2)).setContext(Ke(i.getContext(), f));
                    var p = s.getContext();
                    (s = Ct(o, dr, 1)).setContext(Ke(s.getContext(), p));
                  }
                  (n = e(t, o, h, d)), (u = n.handleLog), (a = n.getInternalContext), c.drain(), (r = !0);
                }
              }
            } else ve.error("Missing configuration");
          }),
          getLoggerGlobalContext: _e(function () {
            return i.get();
          }),
          getGlobalContext: _e(function () {
            return i.getContext();
          }),
          setLoggerGlobalContext: _e(function (e) {
            return i.set(e);
          }),
          setGlobalContext: _e(function (e) {
            return i.setContext(e);
          }),
          addLoggerGlobalContext: _e(function (e, t) {
            return i.add(e, t);
          }),
          setGlobalContextProperty: _e(function (e, t) {
            return i.setContextProperty(e, t);
          }),
          removeLoggerGlobalContext: _e(function (e) {
            return i.remove(e);
          }),
          removeGlobalContextProperty: _e(function (e) {
            return i.removeContextProperty(e);
          }),
          clearGlobalContext: _e(function () {
            return i.clearContext();
          }),
          createLogger: _e(function (e, t) {
            return (
              void 0 === t && (t = {}),
              (o[e] = new lr(
                function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  return u.apply(void 0, e);
                },
                tt(e),
                t.handler,
                t.level,
                tt(t.context)
              )),
              o[e]
            );
          }),
          getLogger: _e(function (e) {
            return o[e];
          }),
          getInitConfiguration: _e(function () {
            return l();
          }),
          getInternalContext: _e(function (e) {
            return a(e);
          }),
          setUser: _e(function (e) {
            (function (e) {
              var t = "object" === Ge(e);
              return t || ve.error("Unsupported user:", e), t;
            })(e) && s.setContext(Ot(e));
          }),
          getUser: _e(function () {
            return s.getContext();
          }),
          setUserProperty: _e(function (e, t) {
            var n,
              r = Ot(((n = {}), (n[e] = t), n))[e];
            s.setContextProperty(e, r);
          }),
          removeUserProperty: _e(function (e) {
            return s.removeContextProperty(e);
          }),
          clearUser: _e(function () {
            return s.clearContext();
          })
        }),
        (n = Pe(
          {
            version: "4.50.0",
            onReady: function (e) {
              e();
            }
          },
          t
        )),
        Object.defineProperty(n, "_setDebug", {
          get: function () {
            return Se;
          },
          enumerable: !1
        }),
        n
      );
    })(function (e, t, n, r) {
      var i = new Ni(),
        s = [];
      i.subscribe(1, function (e) {
        return hr("logs", e);
      });
      var o = function (e) {
          i.notify(0, {
            rawLogsEvent: {
              message: e.message,
              date: e.startClocks.timeStamp,
              error: { origin: sr.AGENT },
              origin: sr.AGENT,
              status: ar.error
            }
          }),
            yr("Error reported to customer", { "error.message": e.message });
        },
        a = (function (e) {
          var t = new st(function () {
            var n = Nt(_t.PAGEHIDE),
              r = Tt(
                0,
                window,
                ["visibilitychange", "freeze", "pagehide"],
                function (e) {
                  "pagehide" === e.type && n
                    ? t.notify({ reason: Ar.PAGEHIDE })
                    : "visibilitychange" === e.type && "hidden" === document.visibilityState
                    ? t.notify({ reason: Ar.HIDDEN })
                    : "freeze" === e.type && t.notify({ reason: Ar.FROZEN });
                },
                { capture: !0 }
              ).stop,
              i = ze;
            return (
              n ||
                (i = St(e, window, "beforeunload", function () {
                  t.notify({ reason: Ar.UNLOADING });
                }).stop),
              function () {
                r(), i();
              }
            );
          });
          return t;
        })(t),
        c =
          !t.sessionStoreStrategyType || At() || kr()
            ? (function (e) {
                var t = "1" === ni(e) ? {} : void 0;
                return {
                  findTrackedSession: function () {
                    return t;
                  },
                  expireObservable: new st()
                };
              })(t)
            : ti(t),
        u = (function (e, t, n, r) {
          var i = br("browser-logs-sdk", e),
            s = [];
          if (At()) {
            var o = xt(),
              a = i.observable.subscribe(function (e) {
                return o.send("internal_telemetry", e);
              });
            s.push(function () {
              return a.unsubscribe();
            });
          } else {
            var c = zr(e, { endpoint: e.rumEndpointBuilder }, e.replica && { endpoint: e.replica.rumEndpointBuilder }, t, n, r);
            s.push(function () {
              return c.stop();
            });
            var u = i.observable.subscribe(function (t) {
              return c.add(
                t,
                (function (e) {
                  return e.site === kn;
                })(e)
              );
            });
            s.push(function () {
              return u.unsubscribe();
            });
          }
          return {
            telemetry: i,
            stop: function () {
              s.forEach(function (e) {
                return e();
              });
            }
          };
        })(t, o, a, c.expireObservable),
        l = u.telemetry,
        d = u.stop;
      s.push(function () {
        return d();
      }),
        l.setContextProvider(function () {
          var e, t, n, r, i, s;
          return {
            application: { id: null === (e = ai()) || void 0 === e ? void 0 : e.application_id },
            session: { id: null === (t = c.findTrackedSession()) || void 0 === t ? void 0 : t.id },
            view: { id: null === (r = null === (n = ai()) || void 0 === n ? void 0 : n.view) || void 0 === r ? void 0 : r.id },
            action: { id: null === (s = null === (i = ai()) || void 0 === i ? void 0 : i.user_action) || void 0 === s ? void 0 : s.id }
          };
        }),
        _i(t, i),
        Bi(t, i),
        (function (e, t) {
          var n = li(e.forwardConsoleLogs).subscribe(function (e) {
            t.notify(0, {
              rawLogsEvent: {
                date: vt(),
                message: e.message,
                origin: sr.CONSOLE,
                error: e.api === me.error ? { origin: sr.CONSOLE, stack: e.stack, fingerprint: e.fingerprint } : void 0,
                status: hi[e.api]
              }
            });
          });
        })(t, i),
        (function (e, t) {
          var n = tr(e, e.forwardReports).subscribe(function (e) {
            var n,
              r = e.message,
              i = pi[e.type];
            i === ar.error
              ? (n = { kind: e.subtype, origin: sr.REPORT, stack: e.stack })
              : e.stack &&
                (r += " Found in ".concat(
                  (function (e) {
                    var t;
                    return null === (t = /@ (.+)/.exec(e)) || void 0 === t ? void 0 : t[1];
                  })(e.stack)
                )),
              t.notify(0, { rawLogsEvent: { date: vt(), message: r, origin: sr.REPORT, error: n, status: i } });
          });
        })(t, i);
      var h,
        f = (function (e) {
          return {
            handleLog: function (t, n, r, i) {
              var s = t.context;
              ii(t.status, cr.console, n) && ve(t.status, t.message, Ke(n.getContext(), s)),
                e.notify(0, {
                  rawLogsEvent: { date: i || vt(), message: t.message, status: t.status, origin: sr.LOGGER },
                  messageContext: s,
                  savedCommonContext: r,
                  logger: n
                });
            }
          };
        })(i).handleLog;
      if ((si(c, t, i, n, r, o), At()))
        !(function (e) {
          var t = xt();
          e.subscribe(1, function (e) {
            t.send("log", e);
          });
        })(i);
      else {
        var p = (function (e, t, n, r, i) {
          var s = zr(e, { endpoint: e.logsEndpointBuilder }, e.replica && { endpoint: e.replica.logsEndpointBuilder }, n, r, i);
          return (
            t.subscribe(1, function (e) {
              s.add(e);
            }),
            s
          );
        })(t, i, o, a, c.expireObservable).stop;
        s.push(function () {
          return p();
        });
      }
      return (
        (function (e) {
          vr.telemetryConfigurationEnabled && Er({ type: pr.configuration, configuration: e });
        })(
          (function (e) {
            var t = (function (e) {
              var t,
                n,
                r = null !== (t = e.proxy) && void 0 !== t ? t : e.proxyUrl;
              return {
                session_sample_rate: null !== (n = e.sessionSampleRate) && void 0 !== n ? n : e.sampleRate,
                telemetry_sample_rate: e.telemetrySampleRate,
                telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                use_before_send: !!e.beforeSend,
                use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                use_secure_session_cookie: e.useSecureSessionCookie,
                use_proxy: void 0 !== r ? !!r : void 0,
                silent_multiple_init: e.silentMultipleInit,
                track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                track_resources: e.trackResources,
                track_long_task: e.trackLongTasks,
                allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
                store_contexts_across_pages: !!e.storeContextsAcrossPages
              };
            })(e);
            return Pe(
              {
                forward_errors_to_logs: e.forwardErrorsToLogs,
                forward_console_logs: e.forwardConsoleLogs,
                forward_reports: e.forwardReports
              },
              t
            );
          })(e)
        ),
        {
          handleLog: f,
          getInternalContext: ((h = c),
          {
            get: function (e) {
              var t = h.findTrackedSession(e);
              if (t) return { session_id: t.id };
            }
          }).get,
          stop: function () {
            s.forEach(function (e) {
              return e();
            });
          }
        }
      );
    });
    !(function (e, t, n) {
      var r = e[t];
      (e[t] = n),
        r &&
          r.q &&
          r.q.forEach(function (e) {
            return we(e, "onReady callback threw an error:")();
          });
    })(De(), "DD_LOGS", Pi);
    let Di = (function (e) {
      return (e.SurfaceVisited = "SurfaceVisited"), e;
    })({});
    const Ri = { [Di.SurfaceVisited]: { type: "Surface Visited", schema_id: 311 } };
    var Mi = o(3473);
    Pi.init({ clientToken: "pub5c8940d1d60d49fa1ad47b86997d8ed9", datacenter: "us", forwardErrorsToLogs: !1, sampleRate: 100 }),
      Pi.addLoggerGlobalContext("service", "rr-button"),
      Z("error", (e) => {
        e.message?.startsWith("Uncaught EvalError") ||
          Pi.logger.error(e.message, { colno: e.colno, error: e.error, filename: e.filename, lineno: e.lineno });
      }),
      Z("unhandledrejection", (e) => {
        const t = e.reason;
        "Network error" !== t.message && t?.message && Pi.logger.warn(t.message, t);
      }),
      m.extension.attachEvent("datadogTrack", (e) => {
        let {
          data: { type: t, name: n, data: r }
        } = e;
        Pi.logger[t]?.(n, r);
      });
    const Li = new (class {
        disabled = !1;
        constructor() {
          (this.segmentAnalytics = new ge("RRkzrctEwtmgt8PgYWkF6SzN62oaAiID", {
            host: "https://events.engager.ecbsn.com",
            context: { library: { name: "Toolbar" } },
            properties: {
              browser: m.browser.name,
              browser_agent: navigator.userAgent,
              app_version: m.extension.version,
              application_type: "Toolbar",
              application_subtype: "Toolbar",
              client: "toolbar",
              tenant: "ebates.com",
              platform: "Toolbar"
            }
          })),
            m.extension.attachEvent("segment.track", (e) => {
              let { data: t } = e;
              this.track(t.event, t.parameters);
            }),
            m.extension.attachEvent("segment.anonymousId", () => this.segmentAnalytics.anonymousId);
        }
        async identify(e, t) {
          if (this.disabled) return;
          const n = JSON.stringify({ userId: e, ...t }),
            r = await (async function (e) {
              const t = new TextEncoder().encode(e),
                n = await crypto.subtle.digest("SHA-256", t),
                r = Array.from(new Uint8Array(n))
                  .map((e) => e.toString(16).padStart(2, "0"))
                  .join("");
              return r;
            })(n);
          r !== (await m.extension.getItem("segment-signature"))
            ? (m.extension.setItem("segment-signature", r), this.segmentAnalytics.identify(e, t))
            : (this.segmentAnalytics.userId = e);
        }
        track(e, t, n) {
          let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (!this.disabled || ["Install Application"].includes(e) || r.force)
            return (
              ["Install Application", "Update Application"].includes(e) || this.segmentAnalytics.validateSession(),
              this.segmentAnalytics.track(e, t, n)
            );
        }
      })(),
      ji = new (class {
        constructor() {
          m.extension.attachEvent("holistic.track", (e) => {
            let { data: t } = e;
            this.track(t.event, t.parameters);
          }),
            (this.messagingSDK = new Mi.MessagingSDK());
          let e = "chrome";
          m.browser.isFirefox ? (e = "firefox") : m.browser.isSafari ? (e = "safari") : m.browser.isEdge && (e = "edge"),
            this.messagingSDK.init({
              hostApp: { name: `rr-button-${e}`, version: m.extension.version, type: Mi.AppType.Extension },
              networkConfig: { usa: { messageGatewayBaseURL: "https://api.rakuten.com", batchSize: 10, lingerDuration: 1e4 } },
              regionId: "usa",
              invalidMessagesHandler: function () {}
            });
        }
        track(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!self.EBATES.settings.featureFlags.variation("holistic")) return;
          const n = Object.keys(Ri).find((t) => Ri[t].type === e);
          if (n === Di.SurfaceVisited) {
            const e = A();
            localStorage.setItem("RAKUTEN_VISIT_ID", e);
            const { referring_visit_id: r, campaign: i, legacy_campaign: s } = t,
              o = {
                ...(Object.keys(i).length && { campaign: i }),
                ...(Object.keys(s).length && { legacy_campaign: s }),
                ...(r && { referring_visit_id: r })
              };
            return this.messagingSDK.send({ type: Ri[n].type, schema_id: Ri[n].schema_id, data: o });
          }
        }
        setMember(e) {
          this.messagingSDK.setMember({ guid: e });
        }
      })();
    class Ui {
      constructor() {
        m.extension.attachEvent("postFillrCartScraped", (e) => {
          let { data: t } = e;
          Li.track("Cart Details", { ...t });
        }),
          m.extension.attachEvent("postFillrProductPageScraped", (e) => {
            let { data: t } = e;
            Li.track("Product Details", { ...t });
          });
      }
    }
    class $i {
      storage = new Map();
      constructor() {
        m.extension.attachEvent("updateBadge", () => {
          this.update();
        });
      }
      update(e, t) {
        self.EBATES.settings.userSettings.get("gatingStatusBadge")
          ? m.ui.button.setBadgeText("1")
          : self.EBATES.member.isExtensionDisabled()
          ? "not-certified" === self.EBATES.member.get("gdprCertificationStatus")
            ? m.ui.button.setBadgeText("1")
            : m.ui.button.setBadgeText("")
          : (e && this.storage.set(e, t ?? 0), this.display());
      }
      display() {
        let e = 0;
        this.storage.forEach((t) => (e += t)), this.set(e);
      }
      set(e) {
        m.ui.button.setBadgeText(e > 0 ? e : "");
      }
    }
    class Fi {
      optimizely = null;
      activatedTests = [];
      constructor() {
        m.extension.attachEvent("tests", async () => this.toJSON()),
          m.extension.attachEvent("tests.activate", (e) => {
            let { data: t } = e;
            return this.activate(t.id, t.props);
          }),
          m.browser.attachEvent(m.browser.BEFORENAVIGATE, (e) => {
            let { url: t } = e;
            if (t.includes("www.rakuten.com/button/setForcedVariation?")) {
              const e = new URLSearchParams(t.split("?").pop()),
                n = e.get("test"),
                r = e.get("variation");
              if (n && r) {
                const e = this.optimizely?.setForcedVariation(n, this.getId(), r);
                e
                  ? alert(`${n} has been successfully set to variation ${r}`)
                  : alert(`Error: Test ${n} could not be set to variation ${r}`);
              }
            }
          });
      }
      async init() {
        const { createInstance: e, setLogger: t } = await o.e(302).then(o.bind(o, 5302));
        return (
          t(null),
          (this.optimizely = e({
            logLevel: 0,
            sdkKey: "PPyVHL2msj5ovR7W7wP75R",
            datafileOptions: { autoUpdate: !0, updateInterval: 36e5 }
          })),
          await this.optimizely?.onReady({ timeout: 3e3 }),
          !0
        );
      }
      toJSON() {
        const e = this.optimizely?.getOptimizelyConfig();
        return e && e.experimentsMap
          ? Object.keys(e.experimentsMap).reduce((e, t) => {
              if (0 === t.toLowerCase().indexOf("btn")) {
                const n = this.get(t);
                n && (e[t] = n);
              }
              return e;
            }, {})
          : {};
      }
      get(e) {
        return self.EBATES.member.id
          ? (("number" == typeof e || /^\d+$/.test(e)) && (e = `BTN${e}`),
            this.optimizely?.getVariation(e, this.getId(), {
              platform: "Button",
              app_version: m.browser.version,
              application_subtype: m.browser.name
            }))
          : null;
      }
      getId() {
        return self.EBATES.member.id || self.EBATES.toolbarId?.toString();
      }
      activate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!self.EBATES.member.id || !this.optimizely) return null;
        ("number" == typeof e || /^\d+$/.test(e)) && (e = `BTN${e}`);
        const n = { platform: "Button", app_version: m.browser.version, application_subtype: m.browser.name },
          r = Li.disabled ? this.optimizely.getVariation(e, this.getId(), n) : this.optimizely.activate(e, this.getId(), n);
        return (
          r &&
            ((this.activatedTests[e] = r),
            self.EBATES.member.identify(),
            Li.track("View Experiment", {
              experiment_name: e,
              variation_name: `${e}${r}`,
              activation_id: this.getId(),
              activation_id_type: self.EBATES.member.id ? "guid" : "anonymous",
              ...t
            })),
          r
        );
      }
      getExperiments() {
        const e = this.activatedTests;
        return Object.keys(e).reduce((t, n) => ((t[`experiment_${n}`] = `${n}${e[n]}`), t), {});
      }
    }
    var qi = o(281),
      Hi = o.n(qi);
    function Wi(e) {
      return !!e && /\/\/(?!global\.)(?:[\w-]+\.)?rakuten\.(?:com|int)\//i.test(e);
    }
    const zi = "Network error";
    function Gi(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      e instanceof URL && (e = e.toString());
      const n = new Request(e, t);
      if ((n.headers.append("X-Button-Version", m.extension.version), n.url.includes(_))) {
        n.headers.append("Client-Agent", "button"),
          n.headers.append("Content-Type", "application/json"),
          n.headers.append("Authorization", `ebtoken ${self.EBATES?.ebToken || ""}`);
        const e = n.headers.get("If-None-Match");
        e && n.headers.append("RR-If-None-Match", e);
      }
      return (
        self.EBATES &&
          (n.url.search(/(?!button|mobile|eds)\/member/) > 0 || n.url.search(/\/geogating\/v1\/checkStatus\.do/) > 0) &&
          n.headers.append("ebToken", self.EBATES.ebToken || ""),
        n
      );
    }
    async function Vi(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      "object" != typeof e || e instanceof URL || ((t = e), (e = t.url)), t.beforeSend && t.beforeSend(t);
      const n = t.method || t.type || "GET",
        r = new Headers(t.headers || {});
      t.contentType && r.set("Content-Type", t.contentType),
        (function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (!e.get("Accept")) {
            const n = {
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            };
            e.set("Accept", Object.keys(n).includes(t) ? `${n[t]}, */*; q=0.01` : "*/*");
          }
        })(r, t.dataType),
        "GET" === n && "object" == typeof t.data && (e = ie(e.toString(), t.data));
      const i = { method: n, headers: r };
      "POST" === n && (i.body = t.data || t.body);
      const s = Gi(e, i);
      let o = null;
      try {
        o = await fetch(s);
      } catch {
        return void Ji(o, t);
      }
      return (async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (304 === e.status) t.success && t.success(void 0, e.status, e);
        else {
          if (e.ok && e.status >= 200 && e.status < 300) {
            const n = (() => e.headers.get("Content-Type")?.includes("application/json"))() ? await e.json() : await e.text();
            return t.success && t.success(n, e.status, e), n;
          }
          Ji(e, t);
        }
      })(o, t);
    }
    function Ji(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const n = new Error(zi);
      if (((e = e || { status: 0 }), !t.error)) throw n;
      t.error(e, e.status, n);
    }
    Hi().ajax = Vi;
    const Ki = Hi(),
      Yi = Ki.Model.extend({
        toJSON() {
          return G((0, H.clone)(this.attributes));
        }
      });
    let Xi = {
      pauseDocumentCompleteTrigerredUpdates: !0,
      timeout: null,
      errorAttempt: 0,
      dynamic: !0,
      MAX_ERROR_ATTEMPT: 4,
      DEFAULT_UPDATE_INTERVAL: 9e5,
      UPDATE_INTERVAL: null,
      initialize() {
        this.dynamic &&
          m.browser.attachEvent(
            m.browser.DOCUMENTCOMPLETE,
            (0, H.throttle)(async () => {
              !this.pauseDocumentCompleteTrigerredUpdates && (await this.ifCacheExpired()) && this.fetch().catch(() => {});
            }, 1e3)
          ),
          this.once("sync", () => (this._dataSynced = !0));
      },
      setNextUpdateTime(e) {
        this.key && m.extension.setItem(`${this.key}.nextUpdateTime`, e), (this._nextUpdateTime = e);
      },
      async getNextUpdateTime() {
        if (!Number.isFinite(this._nextUpdateTime)) {
          let e = this.key ? await m.extension.getItem(`${this.key}.nextUpdateTime`) : 0;
          this._nextUpdateTime = parseInt(e, 10) || 0;
        }
        return this._nextUpdateTime;
      },
      async ifCacheExpired() {
        return (await this.getNextUpdateTime()) < Date.now();
      },
      clearCache() {
        m.extension.setItem(this.key, 0), m.extension.setItem(`${this.key}.nextUpdateTime`, 0);
      },
      getCache() {
        return m.extension.getItem(this.key);
      },
      async setCache(e) {
        let { ...t } = e;
        m.extension.setItem(this.key, t);
      },
      async readCache(e) {
        if (e.reset || e.force) return !1;
        if ((await this.ifCacheExpired()) && !e.cache) return !1;
        if (this.key) {
          const e = await this.getCache();
          if (e && e.data) {
            this.etag = e.etag;
            try {
              this.length || this.set(this.parse(e.data));
            } catch (e) {
              return !1;
            }
            try {
              this.trigger("sync", this);
            } catch (e) {}
            return !0;
          }
        }
        return !1;
      },
      async sync(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("read" !== e) return Ki.Collection.prototype.sync.apply(t, arguments);
        if (((this.pauseDocumentCompleteTrigerredUpdates = !1), !(await this.readCache(n)))) {
          t.etag &&
            !n.reset &&
            (n.beforeSend = function (e) {
              e.headers = Object.assign({}, e.headers, { "If-None-Match": t.etag });
            });
          let r = n.success;
          return (
            (n.success = function (e, i, s) {
              try {
                t.errorAttempt = 0;
                let n = t.DEFAULT_UPDATE_INTERVAL;
                if (t.UPDATE_INTERVAL) n = t.UPDATE_INTERVAL;
                else {
                  let e = s.headers.get("Cache-Control");
                  if (e && e.indexOf("max-age=") >= 0) {
                    let e = J(s.headers);
                    e > 0 && (n = e);
                  }
                }
                (t.etag = s.headers.get("ETag")),
                  t.setNextUpdateTime(Date.now() + n),
                  t.key && e && t.setCache({ etag: t.etag, data: e }),
                  r && 200 === s.status ? r.apply(t, arguments) : t.trigger("sync", t);
              } catch (e) {
                n.error(s);
              }
            }),
            (n.error = function (e) {
              if ([401, 403].includes(e.status)) t.pauseDocumentCompleteTrigerredUpdates = !0;
              else {
                let e = t.ERROR_UPDATE_INTERVAL || 10 * Math.pow(3, Math.min(t.MAX_ERROR_ATTEMPT, ++t.errorAttempt)) * 1e3;
                t.setNextUpdateTime(Date.now() + e);
              }
              t.trigger("error", t, e, n);
            }),
            Ki.Collection.prototype.sync.call(t, e, t, n)
          );
        }
      },
      stop() {
        (this.pauseDocumentCompleteTrigerredUpdates = !0), (this.etag = null), m.extension.setItem(`${this.key}.nextUpdateTime`, 0);
      },
      ready() {
        return new Promise((e) => {
          this._dataSynced ? e(this) : this.once("sync", () => e(this));
        });
      }
    };
    const Zi = Ki.Collection.extend(Xi),
      Qi = Ki.Model.extend(Xi);
    function es(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("read" === e) {
        if (Date.now() < t.nextUpdateTime && !n.reset && !n.force)
          return new Promise(function (e) {
            t.trigger("sync", t, null, n), e();
          });
        if (t.loading)
          return new Promise(function (e) {
            t.once("sync", function () {
              t.trigger("sync", t, null, n), e();
            });
          });
        {
          m.browser.isSafari && (n.reset || n.force) && (n.data = (0, H.extend)({ _: Date.now() }, n.data)),
            t.ETag && (n.headers = Object.assign({}, n.headers, { "If-None-Match": t.ETag })),
            (n.reset || n.force) &&
              ((n.headers = Object.assign({}, n.headers, { "Cache-Control": "max-age=0, no-cache" })),
              (n.headers = Object.assign({}, n.headers, { Pragma: "no-cache" }))),
            (t.loading = !0);
          const e = n.success;
          n.success = function (r, i, s) {
            (t.loading = !1),
              (t.nextUpdateTime = Date.now() + t.timeout),
              (t.ETag = s.headers.get("ETag")),
              304 !== s.status ? e && ((n.headers = s.headers), e.apply(t, arguments)) : t.trigger("sync", t, r, n);
          };
          const r = n.error;
          n.error = function () {
            (t.loading = !1), (t.nextUpdateTime = Date.now() + t.errorTimeout), r && r.apply(t, arguments);
          };
        }
      }
      return Ki.sync.call(this, e, t, n);
    }
    const ts = Ki.Collection.extend({
        timeout: 6e5,
        nextUpdateTime: 0,
        initialize(e, t) {
          (0, H.extend)(this, t);
        },
        stop() {
          this.nextUpdateTime = 0;
        },
        sync: es
      }),
      ns = Yi.extend({ timeout: 18e5, errorTimeout: 3e4, loading: !1, nextUpdateTime: 0, sync: es }),
      rs = Ki.Collection.extend({
        sync: (e, t, n) =>
          new Promise((r) => {
            "read" === e &&
              m.extension.getItem(t.key, (e) => {
                n.success(e), r();
              });
          }),
        save() {
          m.extension.setItem(this.key, this.toJSON());
        }
      }),
      is = Ki.Model.extend({
        sync(e, t, n) {
          return new Promise((t) => {
            "read" === e
              ? m.extension.getItem(this.key, (e) => {
                  t(), n.success(e);
                })
              : ("update" !== e && "create" !== e) || (m.extension.setItem(this.key, (0, H.clone)(this.attributes)), t());
          });
        }
      });
    class ss extends Map {
      _currentTabId = 0;
      constructor() {
        super();
        const e = (e) => {
          let { tabId: t, url: n, name: r, active: i } = e;
          const s = Object.assign({}, this.get(t), { tabId: t, url: n });
          (r === m.browser.TABCHANGED || (r === m.browser.NAVIGATIONCOMMITTED && i)) && (this._currentTabId = t),
            r === m.browser.NAVIGATIONCOMMITTED && (s.scripts = []),
            this.set(t, s);
        };
        m.browser.attachEvent(m.browser.NAVIGATIONCOMMITTED, e),
          m.browser.attachEvent(m.browser.TABCHANGED, e),
          m.browser.attachEvent(m.browser.TABCLOSED, (e) => {
            this.delete(e.tabId);
          }),
          m.extension.attachEvent("currentTab", (e, t) => {
            t(this.active);
          });
      }
      get active() {
        return this.get(this._currentTabId) || { tabId: 0, url: "about:blank" };
      }
      async executeScript(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "document_idle";
        const i = this.get(e);
        if (i && !i.scripts?.includes(t)) {
          i.scripts = i.scripts || [];
          try {
            await n().tabs.executeScript(e, { file: t, runAt: r }), i.scripts.push(t);
          } catch (e) {}
        }
        return !0;
      }
    }
    const os = new ss(),
      as = (function () {
        function e() {}
        return (
          (e.prototype.then = function (t, n) {
            const r = new e(),
              i = this.s;
            if (i) {
              const e = 1 & i ? t : n;
              if (e) {
                try {
                  cs(r, 1, e(this.v));
                } catch (e) {
                  cs(r, 2, e);
                }
                return r;
              }
              return this;
            }
            return (
              (this.o = function (e) {
                try {
                  const i = e.v;
                  1 & e.s ? cs(r, 1, t ? t(i) : i) : n ? cs(r, 1, n(i)) : cs(r, 2, i);
                } catch (e) {
                  cs(r, 2, e);
                }
              }),
              r
            );
          }),
          e
        );
      })();
    function cs(e, t, n) {
      if (!e.s) {
        if (n instanceof as) {
          if (!n.s) return void (n.o = cs.bind(null, e, t));
          1 & t && (t = n.s), (n = n.v);
        }
        if (n && n.then) return void n.then(cs.bind(null, e, t), cs.bind(null, e, 2));
        (e.s = t), (e.v = n);
        const r = e.o;
        r && r(e);
      }
    }
    var us = 0,
      ls =
        "function" == typeof WeakMap
          ? WeakMap
          : function () {
              var e = "function" == typeof Symbol ? Symbol(0) : "__weak$" + ++us;
              (this.set = function (t, n) {
                t[e] = n;
              }),
                (this.get = function (t) {
                  return t[e];
                });
            };
    function ds(e, t) {
      return new Promise(function (n, r) {
        (e.onsuccess = function () {
          var r = e.result;
          t && (r = t(r)), n(r);
        }),
          (e.onerror = function () {
            r(e.error);
          });
      });
    }
    function hs(e, t) {
      return ds(e.openCursor(t), function (e) {
        return e ? [e.key, e.value] : [];
      });
    }
    function fs(e) {
      return new Promise(function (t, n) {
        (e.oncomplete = function () {
          t();
        }),
          (e.onabort = function () {
            n(e.error);
          }),
          (e.onerror = function () {
            n(e.error);
          });
      });
    }
    function ps(e) {
      if (
        !(function (e) {
          if ("number" == typeof e || "string" == typeof e) return !0;
          if ("object" == typeof e && e) {
            if (Array.isArray(e)) return !0;
            if ("setUTCFullYear" in e) return !0;
            if ("function" == typeof ArrayBuffer && ArrayBuffer.isView(e)) return !0;
            if ("byteLength" in e && "length" in e) return !0;
          }
          return !1;
        })(e)
      )
        throw Error("kv-storage: The given value is not allowed as a key");
    }
    var gs = {};
    function ms(e, t) {
      return hs(e, vs(t));
    }
    function vs(e) {
      return e === gs ? IDBKeyRange.lowerBound(-1 / 0) : IDBKeyRange.lowerBound(e, !0);
    }
    var bs = new ls(),
      ys = new ls(),
      ws = new ls(),
      Es = new ls(),
      xs = function () {};
    function As(e, t) {
      return t(function (t, n) {
        try {
          function c() {
            return ys.set(e, i), ws.set(e, void 0), { value: o, done: void 0 === i };
          }
          var r = ys.get(e);
          if (void 0 === r) return Promise.resolve({ value: void 0, done: !0 });
          var i,
            s,
            o,
            a = (function (e, t) {
              var n,
                r = -1;
              e: {
                for (var i = 0; i < t.length; i++) {
                  var s = t[i][0];
                  if (s) {
                    var o = s();
                    if (o && o.then) break e;
                    if (o === e) {
                      r = i;
                      break;
                    }
                  } else r = i;
                }
                if (-1 !== r) {
                  do {
                    for (var a = t[r][1]; !a; ) a = t[++r][1];
                    var c = a();
                    if (c && c.then) {
                      n = !0;
                      break e;
                    }
                    var u = t[r][2];
                    r++;
                  } while (u && !u());
                  return c;
                }
              }
              const l = new as(),
                d = cs.bind(null, l, 2);
              return (
                (n
                  ? c.then(h)
                  : o.then(function n(o) {
                      for (;;) {
                        if (o === e) {
                          r = i;
                          break;
                        }
                        if (++i === t.length) {
                          if (-1 !== r) break;
                          return void cs(l, 1, c);
                        }
                        if ((s = t[i][0])) {
                          if ((o = s()) && o.then) return void o.then(n).then(void 0, d);
                        } else r = i;
                      }
                      do {
                        for (var a = t[r][1]; !a; ) a = t[++r][1];
                        var c = a();
                        if (c && c.then) return void c.then(h).then(void 0, d);
                        var u = t[r][2];
                        r++;
                      } while (u && !u());
                      cs(l, 1, c);
                    })
                ).then(void 0, d),
                l
              );
              function h(e) {
                for (;;) {
                  var n = t[r][2];
                  if (!n || n()) break;
                  for (var i = t[++r][1]; !i; ) i = t[++r][1];
                  if ((e = i()) && e.then) return void e.then(h).then(void 0, d);
                }
                cs(l, 1, e);
              }
            })(Es.get(e), [
              [
                function () {
                  return "keys";
                },
                function () {
                  return Promise.resolve(
                    (function (e, t) {
                      return hs(e, vs(t)).then(function (e) {
                        return e[0];
                      });
                    })(n, r)
                  ).then(function (e) {
                    o = i = e;
                  });
                }
              ],
              [
                function () {
                  return "values";
                },
                function () {
                  return Promise.resolve(ms(n, r)).then(function (e) {
                    var t;
                    (i = (t = e)[0]), (o = s = t[1]);
                  });
                }
              ],
              [
                function () {
                  return "entries";
                },
                function () {
                  return Promise.resolve(ms(n, r)).then(function (e) {
                    var t;
                    (s = (t = e)[1]), (o = void 0 === (i = t[0]) ? void 0 : [i, s]);
                  });
                }
              ]
            ]);
          return Promise.resolve(a && a.then ? a.then(c) : c());
        } catch (u) {
          return Promise.reject(u);
        }
      });
    }
    function Ss(e, t) {
      var n = new xs();
      return Es.set(n, e), bs.set(n, t), ys.set(n, gs), ws.set(n, void 0), n;
    }
    (xs.prototype.return = function () {
      ys.set(this, void 0);
    }),
      (xs.prototype.next = function () {
        var e = this,
          t = bs.get(this);
        if (!t) return Promise.reject(new TypeError("Invalid this value"));
        var n,
          r = ws.get(this);
        return (
          (n =
            void 0 !== r
              ? r.then(function () {
                  return As(e, t);
                })
              : As(this, t)),
          ws.set(this, n),
          n
        );
      }),
      "function" == typeof Symbol &&
        Symbol.asyncIterator &&
        (xs.prototype[Symbol.asyncIterator] = function () {
          return this;
        });
    var Ts = function (e, t, n) {
        try {
          return (
            null === ks.get(e) &&
              (function (e) {
                var t = _s.get(e);
                ks.set(
                  e,
                  new Promise(function (n, r) {
                    var i = self.indexedDB.open(t, 1);
                    (i.onsuccess = function () {
                      var s = i.result;
                      (function (e, t, n) {
                        if (1 !== e.objectStoreNames.length) return n(Os(t)), !1;
                        if (e.objectStoreNames[0] !== Is) return n(Os(t)), !1;
                        var r = e.transaction(Is, "readonly").objectStore(Is);
                        return !(r.autoIncrement || r.keyPath || r.indexNames.length) || (n(Os(t)), !1);
                      })(s, t, r) &&
                        ((s.onclose = function () {
                          ks.set(e, null);
                        }),
                        (s.onversionchange = function () {
                          s.close(), ks.set(e, null);
                        }),
                        n(s));
                    }),
                      (i.onerror = function () {
                        return r(i.error);
                      }),
                      (i.onupgradeneeded = function () {
                        try {
                          i.result.createObjectStore(Is);
                        } catch (e) {
                          r(e);
                        }
                      });
                  })
                );
              })(e),
            Promise.resolve(ks.get(e)).then(function (e) {
              var r = e.transaction(Is, t),
                i = r.objectStore(Is);
              return n(r, i);
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      },
      _s = new ls(),
      ks = new ls(),
      Is = "store",
      Cs = function (e) {
        var t = "kv-storage:" + e;
        ks.set(this, null), _s.set(this, t), (this.backingStore = { database: t, store: Is, version: 1 });
      };
    function Os(e) {
      return new Error('kv-storage: database "' + e + '" corrupted');
    }
    (Cs.prototype.set = function (e, t) {
      try {
        return (
          ps(e),
          Ts(this, "readwrite", function (n, r) {
            return void 0 === t ? r.delete(e) : r.put(t, e), fs(n);
          })
        );
      } catch (e) {
        return Promise.reject(e);
      }
    }),
      (Cs.prototype.get = function (e) {
        try {
          return (
            ps(e),
            Ts(this, "readonly", function (t, n) {
              return ds(n.get(e));
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (Cs.prototype.delete = function (e) {
        try {
          return (
            ps(e),
            Ts(this, "readwrite", function (t, n) {
              return n.delete(e), fs(t);
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (Cs.prototype.clear = function () {
        try {
          var e = this;
          function i() {
            function n() {
              return ds(self.indexedDB.deleteDatabase(_s.get(e)));
            }
            var r = (function () {
              if (t) {
                try {
                  t.close();
                } catch (e) {}
                return Promise.resolve(new Promise(setTimeout)).then(function () {});
              }
            })();
            return r && r.then ? r.then(n) : n();
          }
          var t,
            n = ks.get(e),
            r = (function () {
              if (null !== n) {
                function i() {
                  ks.set(e, null);
                }
                var r = (function (e, r) {
                  try {
                    var i = Promise.resolve(n).then(function (e) {
                      t = e;
                    });
                  } catch (e) {
                    return;
                  }
                  return i && i.then ? i.then(void 0, function () {}) : i;
                })();
                return r && r.then ? r.then(i) : i();
              }
            })();
          return r && r.then ? r.then(i) : i();
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (Cs.prototype.keys = function () {
        var e = this;
        return Ss("keys", function (t) {
          return Ts(e, "readonly", t);
        });
      }),
      (Cs.prototype.values = function () {
        var e = this;
        return Ss("values", function (t) {
          return Ts(e, "readonly", t);
        });
      }),
      (Cs.prototype.entries = function () {
        var e = this;
        return Ss("entries", function (t) {
          return Ts(e, "readonly", t);
        });
      }),
      "function" == typeof Symbol && Symbol.asyncIterator && (Cs.prototype[Symbol.asyncIterator] = Cs.prototype.entries);
    const Bs = new Cs("default");
    const Ns = new (class {
      set(e, t) {
        try {
          return Bs.set(e, t);
        } catch (e) {
          Pi.logger.error("IndexedDB Error", e.message);
        }
        return Promise.resolve();
      }
      delete(e) {
        return Bs.delete(e);
      }
      get(e) {
        try {
          return Bs.get(e);
        } catch (e) {
          return Pi.logger.error("IndexedDB Error", e.message), Promise.resolve(null);
        }
      }
    })();
    var Ps = o(5939),
      Ds = o.n(Ps);
    const Rs = "Network error";
    class Ms extends Ds() {
      cache = null;
      errorAttempt = 0;
      MAX_ERROR_ATTEMPT = 4;
      _promise = null;
      UPDATE_INTERVAL = 0;
      DEFAULT_UPDATE_INTERVAL = 54e6;
      ERROR_UPDATE_INTERVAL = 0;
      constructor() {
        super();
      }
      get headers() {
        return {};
      }
      get _headers() {
        const e = { ...this.headers },
          t = this.cache?.meta?.headers?.etag;
        return t && !e["If-None-Match"] && (e["If-None-Match"] = t), e;
      }
      parse(e) {
        return e;
      }
      getData() {
        return this.cache?.data;
      }
      async _verifyInternalCache() {
        const { data: e, meta: t } = this.cache || (await Ns.get(this._id)) || {};
        if (t) {
          if (((this.cache = { data: e, meta: t }), t.nextUpdateTime && Date.now() < t.nextUpdateTime)) {
            if (e && !this.errorAttempt) return e;
            throw new Error(Rs);
          }
          throw new Error("Data expired");
        }
        throw new Error("Invalid cache");
      }
      async load() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { reset: t } = e;
        return (
          t && this.clearCache(),
          this._promise ||
            (this._promise = this._verifyInternalCache()
              .catch((t) => {
                if (t.message === Rs) throw new Error(Rs);
                return this.fetch(e);
              })
              .finally(() => ((this._promise = null), this.cache))),
          this._promise
        );
      }
      async save(e, t) {
        return (this.cache = { data: e, meta: t }), Ns.set(this._id, { data: e, meta: t });
      }
      async clearCache() {
        return (this.cache = null), Ns.delete(this._id);
      }
      async fetch() {
        let e,
          {
            reset: t = !1,
            url: n,
            method: r = "GET",
            data: i,
            headers: s = {}
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.emit("request", this), t && ((s["Cache-Control"] = "max-age=0, no-cache"), (s.Pragma = "no-cache"));
        const o = { nextUpdateTime: 0, headers: {} },
          a = { meta: o, data: null },
          c = (e) => {
            const t = this.ERROR_UPDATE_INTERVAL || 10 * Math.pow(3, Math.min(this.MAX_ERROR_ATTEMPT, ++this.errorAttempt)) * 1e3,
              { meta: n = o, data: r } = this.cache || a;
            return (n.nextUpdateTime = Date.now() + t), this.save(r, n), new Error(Rs);
          };
        try {
          e = await (function (e, t) {
            const n = Gi(e, t);
            return fetch(n);
          })(n ?? this.url, { method: r, mode: "cors", headers: { ...this._headers, ...s }, data: i });
        } catch (e) {
          throw c();
        }
        if (304 === e.status) {
          const { meta: t = o, data: n } = this.cache || a;
          return (
            (t.nextUpdateTime = this.getNextUpdateTime(e.headers)), (this.errorAttempt = 0), this.save(n, t), this.emit("sync", this), n
          );
        }
        if (e.ok) {
          const t = await e.json(),
            n = {
              nextUpdateTime: this.getNextUpdateTime(e.headers),
              headers: ["cache-control", "etag", "date"].reduce((t, n) => ((t[n] = e.headers.get(n)), t), {})
            };
          this.errorAttempt = 0;
          const r = this.parse(t);
          return this.save(r, n), this.emit("sync", this), r;
        }
        throw c();
      }
      getNextUpdateTime(e) {
        let t = this.DEFAULT_UPDATE_INTERVAL;
        if (this.UPDATE_INTERVAL) t = this.UPDATE_INTERVAL;
        else {
          const n = J(e);
          n > 0 && (t = n);
        }
        return Date.now() + t;
      }
    }
    class Ls extends Ms {
      _id = "settings-merchants";
      DEFAULT_UPDATE_INTERVAL = 216e5;
      constructor() {
        super();
      }
      get url() {
        return V(S.SETTINGS_MERCHANTS);
      }
      parse(e) {
        return e.merchants.map((e) => ((e.track_events = !0), e));
      }
    }
    var js = o(3564),
      Us = o.n(js);
    function $s(e) {
      const t = (e) => e.toString().replace(/\.0+$/, "");
      if (e)
        switch (e.display) {
          case "Percentage":
            return e.range && e.amount ? `Up to ${t(e.amount)}%` : `${t(e.amount)}%`;
          case "Fixed":
            return e.amount && e.range ? `Up to ${t(Us().formatMoney(e.amount))}` : t(Us().formatMoney(e.amount));
          case "Coupons":
            return "Offers Only";
          case "None":
            return "Not Available";
        }
      return "";
    }
    let Fs = Yi.extend({
      idAttribute: "storeId",
      defaults: { reward: null, cashBackDifference: 0, lastVisit: Date.now() },
      recalculateDifference() {
        let e = EBATES.merchants.get(this.id)?.getReward();
        if (e && this.get("reward")) {
          let t = parseFloat($s(e).replace(/[^\d.]/g, "")),
            n = parseFloat($s(this.get("reward")).replace(/[^\d.]/g, ""));
          t ? this.set({ cashBackDifference: t - n }) : this.collection.remove(this);
        }
      }
    });
    const qs = rs.extend({
        model: Fs,
        comparator: (e, t) =>
          e.get("cashBackDifference") === t.get("cashBackDifference")
            ? e.get("lastVisit") > t.get("lastVisit")
              ? -1
              : 1
            : e.get("cashBackDifference") > t.get("cashBackDifference")
            ? -1
            : 1,
        key: "recent",
        size: 500,
        initialize() {
          this.on({
            add: function () {
              this.sort(), this.length > this.size && this.pop(), this.save();
            }
          });
        },
        save() {
          m.extension.setItem(
            this.key,
            this.map((e) => e.attributes)
          );
        },
        visit(e) {
          const t = e.get("storeId"),
            n = e.getReward(),
            r = this.add({ storeId: t, lastVisit: Date.now() }, { merge: !0 });
          if (r.get("reward")) {
            let e = oe(n, r.get("reward"));
            e < 0
              ? (r.set({ reward: n }), r.recalculateDifference(), this.save())
              : e > 0 &&
                !r.updateTimeout &&
                (r.updateTimeout = setTimeout(() => {
                  let e = this.get(t);
                  e && (e.set({ reward: n }), (e.updateTimeout = null), e.recalculateDifference(), this.save());
                }, 9e5));
          }
        },
        async updateRecent() {
          for (let e = this.length - 1; e >= 0; e--) {
            let t = this.at(e);
            this.get(t.get("storeId")) ? t.recalculateDifference() : this.recent.remove(t);
          }
          this.sort(), this.save();
        }
      }),
      Hs = 3e5;
    class Ws extends Map {
      constructor() {
        super([
          [k, new Gs(k)],
          [23, new Gs(23)]
        ]),
          m.extension.attachEvent("updateRewards", async (e) => {
            let { data: t = {} } = e;
            const n = t?.channel || k,
              { storeIds: r = "all" } = t;
            return await this.get(n)?.fetch(r);
          });
      }
      get default() {
        return this.get(k);
      }
      add(e) {
        if (isNaN(e)) throw new Error("Channel must be defined");
        this.has(e) || this.set(e, new Gs(e));
      }
      reset() {
        this.forEach((e) => e.reset());
      }
    }
    class zs {
      amount = 0;
      display = "None";
      constructor(e) {
        let { storeId: t, reward: n, tiers: r, tiered: i = !1 } = e;
        if (
          ((this.storeId = t),
          (this.tiered = i),
          n &&
            ((this.amount = n.amount),
            (this.display = n.display),
            (this.range = n.range),
            (this.description = n.description),
            (this.previous = n.previous)),
          (r && r.length) || !this.range || !this.description)
        )
          this.tiers = r;
        else {
          const e = (function (e) {
            const t = [];
            return (
              e.split("\n").forEach((e) => {
                const n = e.match(/(.+ Cash Back) (.*)/);
                n && t.push({ cashBack: n[1], description: n[2] });
              }),
              t
            );
          })(this.description);
          e && e.length && ((this.tiers = e), (this.tiered = !0));
        }
      }
    }
    class Gs extends Ds() {
      stores = new Map();
      constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
        super(), (this.channel = e), this.initialize();
      }
      get platform() {
        return j[this.channel] || self.EBATES.settings.get("platforms")?.[this.channel];
      }
      get name() {
        return `rates-${this.platform}`;
      }
      async initialize() {
        this.channel === k && (await this.load(), 0 === this.stores.size && (await this.fetch("all")));
      }
      async load() {
        if (0 === this.stores.size) {
          const e = (await Ns.get(this.name)) || [];
          this.stores = new Map(e);
        }
      }
      async save() {
        await Ns.set(this.name, [...this.stores]);
      }
      get(e) {
        if (0 === this.stores.size) throw new Error("Missing Rewards");
        if (!this.stores.has(e)) throw new Error(`Missing Reward (${this.channel}): ${e}`);
        return this.stores.get(e)?.rate;
      }
      async reset() {
        this.stores.forEach((e, t, n) => {
          let { date: r, ...i } = e;
          n.set(t, i);
        }),
          this.save();
      }
      async fetch(e) {
        if ((await this.load(), "all" === e)) {
          try {
            await this.request([e]);
          } catch {}
          return;
        }
        const t = [].concat(e),
          n = Date.now() - Hs,
          r = t.find((e) => {
            const t = this.stores.get(e)?.date;
            return !t || t < n;
          });
        if (r)
          try {
            await this.request(t);
          } catch {}
        return Array.isArray(e) ? t.map((e) => this.stores.get(e)?.rate) : this.stores.get(e)?.rate;
      }
      async request(e) {
        const t = await Vi(_, {
            data: { name: "button_reward_v1", variables: JSON.stringify({ storeIds: e.map(String) }) },
            headers: { "X-Platform": this.platform }
          }),
          n = Date.now();
        return (
          t.data.stores.forEach((e) => {
            let { id: t, tiered: r, reward: i } = e;
            const s = new zs({ storeId: t, tiered: r, reward: i });
            this.stores.set(t, { date: n, rate: s });
          }),
          this.save(),
          this.stores
        );
      }
    }
    class Vs extends Ds() {
      name = "tiers";
      stores = new Map();
      constructor() {
        super();
      }
      async save() {
        await Ns.set(this.name, [...this.stores]);
      }
      async fetch(e) {
        0 === this.stores.size && (this.stores = new Map((await Ns.get(this.name)) || []));
        const t = Date.now() - Hs,
          n = this.stores.get(e);
        if (!n || n.date < t)
          try {
            await this.request(e);
          } catch {}
        return this.stores.get(e)?.tiers;
      }
      async request(e) {
        const t = await Vi(_, {
            data: { name: "button_tiers_v1", variables: JSON.stringify({ storeIds: [String(e)] }) },
            headers: { "X-Platform": j[k] }
          }),
          n = Date.now();
        return (
          t.data.stores.forEach((e) => {
            let { storeId: t, tiers: r, reward: i } = e;
            const s = new zs({ storeId: t, reward: i, tiers: r });
            this.stores.set(t, { date: n, tiers: s.tiers });
          }),
          this.save(),
          this.stores
        );
      }
    }
    class Js extends Ms {
      _id = "store_modified_times";
      UPDATE_INTERVAL = 9e5;
      constructor() {
        super();
      }
      get url() {
        const e = new URL(_);
        return (
          e.searchParams.append("name", "store_modified_times"), e.searchParams.append("variables", '{"storeIds": "ALL"}'), e.toString()
        );
      }
      parse(e) {
        return e?.data?.storeLastModifiedTime?.value ?? [];
      }
      async ifUpdateRequired() {
        try {
          return await this._verifyInternalCache(), !1;
        } catch (e) {
          return !0;
        }
      }
    }
    function Ks(e) {
      if (!e) return {};
      let t = "",
        n = 0,
        r = "";
      switch (e.display) {
        case "Percentage":
          t = "%";
          break;
        case "Fixed":
          t = "$";
      }
      return e.amount && ((n = e.amount), (r = e.range ? "tiered" : "flat")), { cash_back_type: t, cash_back: n, cash_back_structure: r };
    }
    const Ys = ts.extend({}),
      Xs = Ys.extend({
        initialize() {
          this.on({
            error: function (e, t) {
              [401, 403].includes(t.status) && EBATES.onTokenExpired();
            }
          });
        }
      });
    let Zs = Yi.extend({
      store: null,
      defaults: { storeId: 11095 },
      initialize() {
        this.get("code") && this.get("code").indexOf("&amp;") && this.set({ code: this.get("code").replace("&amp;", "&") });
      },
      toJSON() {
        const e = EBATES.merchants.findWhere({ storeId: this.get("storeId") });
        if (e && e.get("shoppingURL")) {
          let t = ie(e.get("shoppingURL").replace("&store_url=%deepLinkUrl%", ""), {
            special: this.id,
            tb: "yes",
            domainName: e.get("domainName"),
            sourceName: "toolbar",
            channel: k,
            toolbarFeatureId: "DDD",
            eeid: e.get("mpl") ? "40874" : "26141",
            mpl_id: e.get("mpl")
          });
          return (0, H.extend)(
            Yi.prototype.toJSON.apply(this, arguments),
            (0, H.pick)(e.toJSON(), "images", "storeName", "reward", "rewardsExpired"),
            { shoppingURL: t }
          );
        }
        return null;
      }
    });
    const Qs = Ys.extend({
      model: Zs,
      comparator: (e) => [
        e.has("code") ? 0 : 1,
        ["Store Wide", "Department", "Free Gift", "Free Shipping", "Product", null].indexOf(e.get("scope")),
        e.get("scores") ? e.get("scores").score1 : 0
      ],
      parse: (e) =>
        (0, H.chain)(e.storeDeals)
          .map(function (e) {
            return (0, H.map)(e.deals, function (t) {
              return (0, H.extend)({ storeId: e.storeId }, t);
            });
          })
          .flatten()
          .value(),
      search(e) {
        return (0, H.chain)(
          this.filter(function (t) {
            return t.get("description").toLowerCase().indexOf(e) >= 0;
          })
        )
          .invoke("toJSON")
          .value();
      }
    });
    class eo extends Ms {
      DEFAULT_UPDATE_INTERVAL = 108e5;
      ERROR_UPDATE_INTERVAL = 108e5;
      constructor(e) {
        let { storeId: t } = e;
        super(), (this.storeId = t), (this._id = `experimental-coupons-${t}`);
      }
      get url() {
        return V(S.STORE_COUPONS).replace("{storeId}", this.storeId);
      }
      parse(e) {
        return e?.map((e) => ((e.source = "ACS"), e));
      }
    }
    class to extends Ds() {
      constructor(e) {
        if ((super(), !e)) throw new Error("storageId required");
        this._storageId = e;
      }
      save(e) {
        X && Ns.set(this._storageId, e);
      }
      clearCache() {
        X && Ns.delete(this._storageId);
      }
      async load() {
        if (X) return Ns.get(this._storageId);
      }
    }
    class no extends to {
      constructor(e) {
        super(`shopping-trip-${e}`),
          (this.pending = {}),
          (this.attributes = {}),
          this.load().then((e) => {
            e && 0 !== Object.keys(e).length && Object.assign(this.attributes, e);
          });
      }
      get(e) {
        return this.attributes[e];
      }
      start() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!e.ttn) throw new Error("Missing ttn");
        (this.attributes = { ...e, ...this.pending }), (this.pending = {}), this.emit("start", this), this.save(this.attributes);
      }
      reset() {
        (this.attributes = {}), this.clearCache();
      }
      resetPendingAttributes() {
        this.pending = {};
      }
      addPendingAttribute(e, t) {
        "string" == typeof e ? (this.pending[e] = t) : Object.assign(this.pending, e);
      }
      getCurrentState() {
        return { ...this.pending, ...this.attributes };
      }
      toJSON() {
        return this.attributes;
      }
    }
    class ro extends to {
      constructor(e) {
        super(`merchant-session-${e}`),
          (this.shoppingTrip = new no(e)),
          this.reset(),
          this.load().then((e) => {
            e && 0 !== Object.keys(e).length && Object.assign(this.attributes, e);
          });
      }
      set(e, t) {
        "string" == typeof e && void 0 !== t ? (this.attributes[e] = t) : Object.assign(this.attributes, e), this.save(this.attributes);
      }
      get(e) {
        return this.attributes[e];
      }
      has(e) {
        return void 0 !== this.attributes[e];
      }
      start(e) {
        let { shoppingTrip: t, ...n } = e;
        (this.shoppingTrip.get("partner") !== t.partner || this.attributes.suppressed) && this.stop(),
          this.set(n),
          t && this.shoppingTrip.start(t),
          (this.attributes.notification = "background" !== this.shoppingTrip.get("type")),
          (this.attributes["notification-reminder"] = !1),
          (this.attributes.activated = !0),
          this.emit("start", this);
      }
      suppress() {
        this.stop(),
          this.shoppingTrip.resetPendingAttributes(),
          (this.attributes["notification-reminder"] = !1),
          (this.attributes.suppressed = !0),
          this.emit("start", this);
      }
      stop() {
        this.reset(), this.shoppingTrip.reset(), this.clearCache(), this.emit("stop", this);
      }
      reset() {
        this.attributes = {
          notification: !0,
          "notification-reminder": !0,
          "notification-checkout": !0,
          "notification-confirmation": !0,
          activated: !1,
          suppressed: !1
        };
      }
      checkSessionTimeout() {
        const e = this.attributes.sessionInterval || 18e5;
        this.attributes.visit &&
          (this.attributes.visit + e < Date.now() && (this.stop(), this.shoppingTrip.resetPendingAttributes()),
          this.attributes.visit + 36e5 < Date.now() && (this.attributes.notification = !0));
      }
      toJSON() {
        return { ...this.attributes, shoppingTrip: this.shoppingTrip.toJSON() };
      }
    }
    const io = Yi.extend({
      idAttribute: "storeId",
      deals: null,
      experimentalCoupons: null,
      session: null,
      defaults: { activationCode: 0 },
      isButtonMerchant() {
        return [3, 5].includes(this.get("activationCode"));
      },
      isActiveMerchant(e) {
        try {
          return (e = e || this.getReward()) && ["Percentage", "Fixed"].includes(e.display) && e.amount > 0;
        } catch (e) {}
        return !1;
      },
      isActiveButtonMerchant() {
        return this.isButtonMerchant() && this.isActiveMerchant();
      },
      isEligibleForIconAnimation() {
        return (
          !this.session.get("suppressed") &&
          (this.isActiveButtonMerchant() || (6 === this.get("activationCode") && this.session.get("activated")))
        );
      },
      processCode(e) {
        const t = this.get("activationCode"),
          n = this.isActiveMerchant(e),
          r = this.isButtonMerchant(),
          i = r && n;
        return {
          settings_notification: (3 === t && n) || 2 === t,
          settings_confirmation: i || 6 === t,
          settings_checkout: i,
          settings_serp: 3 === t && n && !0 !== this.get("serpDisabled"),
          settings_popup: i,
          settings_caa: r,
          settings_purchase: r,
          offers_cb: n
        };
      },
      initialize() {
        const e = this.get("storeId");
        return (
          (this.session = new ro(e)),
          this.has("storeId") &&
            ((this.deals = new Qs([], { url: V(S.STORE_DEALS).replace("{storeId}", e) })),
            (this.experimentalCoupons = new eo({ storeId: e }))),
          this.session.shoppingTrip.on("start", (e) => {
            e.get("source") &&
              Li.track("Start Shopping Trip", {
                version: "Remind me Later",
                store_name: this.get("storeName"),
                store_id: this.get("storeId"),
                tracking_ticket: e.get("ttn"),
                attribution_source_previous_click: e.get("source"),
                entity_name: e.get("entity_name"),
                rank: e.get("rank"),
                activation_type: e.get("type"),
                serp_rank: e.get("serp_rank"),
                type: e.get("featureType"),
                referring_domain: e.get("referring_domain"),
                search_term: e.get("search_term"),
                interstitial_type: e.get("interstitialType"),
                ...e.get("event_attributes"),
                ...Ks(this.getReward(k))
              });
          }),
          this.session.on("start", (e) => {
            this.session.checkSessionTimeout(),
              this.visit(),
              e.get("activated") && self.EBATES.immerseSessions.start(this),
              this.closeNotification(),
              m.extension.fireEvent("merchant.state:change");
          }),
          this.session.on("stop", () => {
            if (this.isActiveMerchant()) {
              const e = this.collection.recent.get(this.get("storeId"));
              e && e.set({ reward: this.getReward(), lastVisit: Date.now() }, { merge: !0 });
            }
            m.extension.fireEvent("merchant.state:change");
          }),
          Yi.prototype.initialize.call(this)
        );
      },
      async closeNotification() {
        const e = this.toJSON();
        m.extension.fireEvent("closeNotification", { tabId: m.browser.ALLTABS, data: { merchant: e } });
      },
      getBonuses() {
        return EBATES.member.bonuses
          .chain()
          .filter((e) => e.get("active") && e.get("storeIds")?.includes(this.get("storeId")))
          .invoke("toJSON")
          .value();
      },
      toJSON() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = this.getReward(e.channel);
        let n = { ...Yi.prototype.toJSON.apply(this, arguments), ...this.processCode(t), reward: t };
        if (!n.siteUrl) {
          const e = this.get("shoppingURL")?.match(/.*\/(.*?)_\d+/);
          n.siteUrl = e ? e[1] : this.get("domainName");
        }
        const r = this.getBonuses();
        if (!this.isActiveMerchant()) {
          let e = EBATES.settings.promos.findWhere({ type: "recommended", active: !0, storeId: this.id });
          e && (n.recommendedStores = e.toJSON());
        }
        n.hoverMessageTrheshold && n.reward && oe(n.reward, { amount: n.hoverMessageTrheshold }) >= 0 && delete n.hoverMessage;
        const i = this.storeContent ? this.storeContent.toJSON() : null,
          s = this.session.toJSON();
        let o = EBATES.merchants.recent.get(this.get("storeId"));
        return (
          o && (n.recent = o.toJSON()),
          s.shoppingTrip.sessionReward && (n.reward = { ...n.reward, ...s.shoppingTrip.sessionReward }),
          {
            ...n,
            ...s,
            storeContent: i,
            bonuses: r,
            rewardsExpired: this.collection.rates.default.expired,
            loggedIn: EBATES.loggedIn,
            travelStore: EBATES.settings.get("travelStores").includes(this.get("storeId"))
          }
        );
      },
      showTakeover(e) {
        if (e && this.isActiveMerchant() && EBATES.settings.get("features").takeover) {
          const t = this.toJSON();
          m.extension.fireEvent("takeover", { tabId: e, data: { merchant: t } });
        }
      },
      visit() {
        let e = Date.now();
        this.session.set("visit", e);
      },
      suppress() {
        const e = this.session.get("tabId");
        this.session.suppress(), this.showTakeover(e), this.session.checkSessionTimeout();
      },
      getReward() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
        return this.isButtonMerchant() ? this.collection.rates.get(e).get(this.id) : { amount: 0 };
      },
      getTiers() {
        return this.collection.tiers.fetch(this.id);
      },
      getCashBackAmount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
        return $s(this.getReward(e));
      },
      async activateInBackground(e) {
        const t = await fetch(`${e}&response=json`),
          r = (await t.json()).ticket[0];
        if (r && r.storeId) {
          const t = r.link[0]["@href"],
            i = r.trackingNumber.replace(/\D/g, ""),
            s = await m.browser.navigate({ tabId: m.browser.NEWTAB, active: !1, pinned: !0 });
          EBATES.settings.affiliates.match(e, s.id),
            EBATES.settings.affiliates.activations.addParameters(s.id, { trackingTicketNumber: i }),
            await m.browser.navigate({ tabId: s.id, url: t });
          const o = this.get("activationInterval") || EBATES.settings.get("activationInterval");
          let a = self.setTimeout(
              () => {
                m.browser.isSafari ? m.extension.fireEvent("closeWindow", { tabId: s.id }) : n().tabs.remove(s.id),
                  m.browser.detachEvent(m.browser.TABCHANGED, c);
              },
              Number.isInteger(o) ? o : 1e4
            ),
            c = (e) => {
              let { tabId: t } = e;
              t === s.id && (m.browser.detachEvent(m.browser.TABCHANGED, c), self.clearTimeout(a));
            };
          m.browser.attachEvent(m.browser.TABCHANGED, c);
        }
      },
      isEligibleForIgnoredStandDown() {
        const e = EBATES.settings.promos.get("standdown-config");
        return !!(e && e.get("active") && e.campaigns && e.campaigns.find((e) => e.stores.get(this.id)));
      },
      isEligibleForBackgroundActivation() {
        if (this.get("mpl")) return !0;
        const e = EBATES.settings.promos.get("background-activation");
        if (e && e.get("active") && e.campaigns) {
          const t = e.campaigns.find((e) => e.stores.get(this.id));
          if (t && t.get("test")) {
            return "A" === EBATES.tests.activate(t.get("test"), { store_id: this.id });
          }
        }
        return !1;
      },
      isEligibleForInstantBackgroundActivation() {
        if (this.get("mpl")) return !0;
        const e = EBATES.settings.promos.get("background-activation");
        return !(!e || !e.campaigns) && !!e.campaigns.find((e) => e.stores.get(this.id));
      },
      activate() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          sessionAttributes: t,
          forceBackgroundActivation: n,
          xfasParams: r,
          product_url: i,
          toolbarFeatureId: s,
          special: o,
          tabId: a,
          channel: c = k
        } = e;
        t && this.session.shoppingTrip.addPendingAttribute(t);
        let u = ne(e.store_url, EBATES.settings.get("sanitization"));
        8381 === this.id && (u = ne(u, "SourceCode=[^&]+&?"));
        let l = this.get("mpl") ? 40874 : e.eeid,
          d = this.toJSON();
        this.session.shoppingTrip.addPendingAttribute({ featureType: e.type });
        const h = ((e) => {
          let l = e;
          if (
            ((e = `${e.replace("&store_url=%deepLinkUrl%", "")}&channel=${c}&tb_v=${m.extension.version}`),
            this.get("mpl") && (e += `&mpl_id=${this.get("mpl")}`),
            o && (e += `&special=${o}`),
            s && (e += `&toolbarFeatureId=${s}`),
            a &&
              a !== m.browser.NEWTAB &&
              u &&
              ((!d.offers_cb && 2 !== this.get("activationCode")) ||
                (d.nonTrackingPattern && u.search(d.nonTrackingPattern) >= 0) ||
                this.isEligibleForBackgroundActivation() ||
                n))
          ) {
            if (n) {
              this.session.set("activated", !0);
              const e = this.getReward(c);
              this.session.shoppingTrip.addPendingAttribute({ sessionReward: e }), (this.session.shoppingTrip.attributes.sessionReward = e);
            }
            this.activateInBackground(e).then(() => {
              this.session.shoppingTrip.addPendingAttribute({ type: "background" }),
                "Coupons and Cash Back Available Notification - combo CTA" !== t.source
                  ? d.settings_notification &&
                    m.extension.fireEvent("showConfirmationHover", {
                      tabId: a,
                      data: { merchant: { ...d, shoppingTrip: this.session.shoppingTrip.getCurrentState() } }
                    })
                  : this.session.set("notification", !1);
            });
          } else {
            let t = "xfas",
              n = "";
            i
              ? ((e = `${e}&product_url=${encodeURIComponent(i)}`), (t = "product"))
              : e.indexOf("store_url") < 0 &&
                u &&
                this.get("affiliatizerEnabled") &&
                ((e = `${e}&store_url=${encodeURIComponent(u)}`), (t = "affiliatizer"), (n = u)),
              this.session.shoppingTrip.addPendingAttribute({ type: t, startURL: n }),
              r && (e = se(e, r)),
              e.length >= 2048 && (e = l),
              m.browser.navigate({ url: e, tabId: a });
          }
          return e;
        })(
          (() => {
            const e = { tb: "yes", sourceName: "toolbar", eeid: l || 23509 };
            switch (parseInt(this.get("activationCode"), 10)) {
              case 2:
                if (this.has("storeLandingURL")) return se(d.storeLandingURL, e);
              case 5:
                if (this.has("storeLandingURL")) return se(d.storeLandingURL, { tb: "yes" });
              default:
                return se(d.shoppingURL || V(S.BASE), { ...e, ebtoken: self.EBATES?.ebToken ?? "" });
            }
          })()
        );
        "Search" === t.source &&
          EBATES.tests.get("BTN155") &&
          Li.track("Search Form Enter", {
            url: os.active.url,
            entry_string: this.sessionAttributes.search_term,
            event_category: "PCS",
            created_ts_ms: Date.now(),
            created_ts: Math.floor(Date.now() / 1e3),
            device_type: "toolbar",
            us: EBATES.member.get("userStatus"),
            event_type: null,
            page_type: null,
            destination_url: h
          });
      },
      activateSession(e) {
        let { sessionReward: t, trackingTicketNumber: n, partner: r, interstitialType: i, sessionInterval: s, url: o } = e;
        if (/^\d+$/.test(n)) {
          n = `${"ebs"}${n}${"sbe"}`;
        }
        const a = {
          partner: r,
          interstitialType: i,
          ttn: n || this.session.shoppingTrip.get("ttn"),
          source: o?.includes("sourceName=toolbar") ? o.match(/[?&]special=([\w-]+)/)?.pop() : null
        };
        if (t && (t.amount || t.range)) {
          const e = this.getReward(),
            n = oe(e, t);
          e && 0 !== n && ((a.sessionReward = t), s && n > 0 && (s = null));
        }
        try {
          this.session.start({ sessionInterval: s, shoppingTrip: a });
        } catch (e) {
          const t = this.session.shoppingTrip.getCurrentState();
          let n = "";
          "string" == typeof e ? (n = e) : e instanceof Error && (n = e.message),
            Pi.logger.warn(n, {
              merchant_id: this.get("storeId"),
              activation_type: t.type,
              attribution_source_previous_click: t.source,
              tracking_ticket: t.ttn
            });
        }
      },
      getStoreContent() {
        return this.storeContent || (this.storeContent = new so({ id: this.id })), this.storeContent.fetch();
      },
      checkAffiliatizer(e) {
        if ("affiliatizer" === this.session.shoppingTrip.get("type")) {
          let t, n, r, i;
          try {
            (t = new URL(this.session.shoppingTrip.get("startURL"))),
              (n = new URL(e)),
              (r = t.hostname + t.pathname.replace(/\/+$/, "").toLowerCase()),
              (i = n.hostname + n.pathname.replace(/\/+$/, "").toLowerCase());
          } catch (e) {
            return;
          }
          if (t && n && r !== i) {
            const e = { reason: "url_mismatch", starting_url: r, final_url: i, merchant_id: this.get("storeId") };
            Pi.logger.warn("AffiliatizerStatus", e);
          }
        }
      },
      processDocumentComplete(e) {
        let { url: t, tabId: n } = e;
        const r = EBATES.session_competition?.domain,
          i = EBATES.settings.affiliates.state(n);
        if (i.activation || i.suppress) {
          if (i.activation) EBATES.loggedIn && (this.activateSession(i.activation), this.checkAffiliatizer(t));
          else if (i.suppress) {
            EBATES.session_competition &&
              (Li.track("Start Competitor Shopping Trip", { url: t, domain: r }), (EBATES.session_competition = null));
            const e = r && EBATES.settings.get("standDownDomains").includes(r);
            if (EBATES.settings.featureFlags.variation("standDownByMerchant", !1) && !e && this.isEligibleForIgnoredStandDown()) {
              const e = this.session.get("activated") ? this.session.get("tabId") : null;
              this.session.stop(), e && this.showTakeover(e);
            } else
              Li.track("Stand Down", {
                store_id: this.get("storeId"),
                tracking_ticket: this.session.shoppingTrip.get("ttn"),
                url: i.suppress.url,
                competitor: r,
                paidLink: i.suppress.paidLink
              }),
                this.session.set({ competitor: r }),
                this.suppress();
          }
          EBATES.settings.affiliates.clear(n);
        }
        this.session.get("activated") && n && this.session.set("tabId", n),
          r &&
            EBATES.settings.priceMagic.get("partnerDomains").includes(r) &&
            (this.session.set("pmDisabled", !0), (EBATES.session_competition = null)),
          this.visit(),
          self.EBATES.immerseSessions.visit(this, t);
      }
    });
    let so = ns.extend({
      timeout: 108e5,
      url() {
        return V(S.STORE_CONTENT).replace("{storeId}", this.id);
      },
      parse: (e) => (e && e.storeContent ? e.storeContent[0] : {})
    });
    function oo(e) {
      return "string" == typeof e ? { url: e } : { url: e?.url, bgColor: e?.backgroundColor };
    }
    let ao = Yi.extend({
        idAttribute: "matchPattern",
        initialize() {
          this.set({ topDomain: ae(this.get("domainName")) });
          const e = this.get("matchPattern");
          if (e && ".*.*" !== e)
            try {
              this.match = new RegExp(this.get("matchPattern"), "i");
            } catch ({ message: t }) {
              (this.match = null),
                Pi.logger.error("RegExpError", {
                  message: t,
                  domainName: this.get("domainName"),
                  matchPattern: e,
                  now: Date.now(),
                  source: "Domains.parse"
                });
            }
        }
      }),
      co = Hi().Collection.extend({ model: ao });
    const uo = Zi.extend({
        url: () => {
          if (!EBATES.settings.featureFlags.variation("feedGenMerchants", !1)) return V(S.STORES);
        },
        model: io,
        key: "merchants",
        initialize() {
          return (
            (this.rates = new Ws()),
            (this.tiers = new Vs()),
            (this.recent = new qs()),
            (this.customMerchants = new Ls()),
            (this.domains = new co()),
            (this.lastModifiedTimes = new Js()),
            this.on({
              remove(e) {
                this.recent.get(e.get("storeId")) && this.recent.remove(e.get("storeId"));
              },
              reset() {
                EBATES.member.recommended.prepare();
              },
              async sync() {
                if (EBATES.settings.featureFlags.variation("customMerchants", !1)) {
                  const e = await this.customMerchants.load();
                  this.add(e, { merge: !0 });
                  const t = e
                    .filter((e) => {
                      let { domainName: t, matchPattern: n } = e;
                      return t && n;
                    })
                    .map((e) => {
                      let { domainName: t, matchPattern: n, storeId: r } = e;
                      return { domainName: t, matchPattern: n, storeId: r };
                    });
                  this.domains.add(t, { merge: !0 });
                }
              }
            }),
            m.browser.isSafari && this.recent.fetch(),
            this.once("sync", async () => {
              await this.recent.fetch(), await EBATES.member.recommended.prepare();
            }),
            m.extension.attachEvent("getMerchant", async (e) => {
              let { url: t, tabId: n } = e;
              return await this.getMerchant({ url: t, tabId: n });
            }),
            m.extension.attachEvent("getStores", async (e) => {
              let { data: t } = e;
              const { storeIds: n, channel: r = k } = t,
                i = n.filter((e) => EBATES.merchants.get(e)?.get("activationCode"));
              return (
                EBATES.merchants.rates.add(r),
                await EBATES.merchants.rates.get(r).fetch(i),
                n.map((e) => EBATES?.merchants?.get(e)?.toJSON({ channel: r }))
              );
            }),
            m.extension.attachEvent("matchDomain", (e) => {
              let {
                data: { url: t }
              } = e;
              const n = this.match(t, os.active.tabId);
              return n ? { storeId: n.id } : null;
            }),
            m.extension.attachEvent("getStore", (e) => {
              let { data: t } = e;
              return this.getStore(t);
            }),
            m.extension.attachEvent("getStoresByName", (e) => {
              let { data: t } = e;
              return this.getStoresByName(t.name);
            }),
            m.extension.attachEvent("activate", (e) => {
              let { tabId: t, data: n } = e;
              const r = this.get(n.storeId);
              if (r) {
                try {
                  const e = new URL(os.active.url);
                  (n.sessionAttributes = n.sessionAttributes ?? {}),
                    (n.sessionAttributes.event_attributes = {
                      ...n.sessionAttributes.event_attributes,
                      attribution_source_previous_click_url: e.host + e.pathname,
                      attribution_source_previous_click_domain: e.host
                    });
                } catch {}
                if ((r.activate({ tabId: t || os.active.tabId, ...n }), !n.sessionAttributes?.source))
                  throw new Error("Missing Activation Source", n);
              }
            }),
            m.extension.attachEvent("updateMerchantSession", (e) => {
              let { data: t, tabId: n, url: r } = e;
              t && this.updateMerchantSession({ data: t, tabId: n, url: r });
            }),
            m.extension.attachEvent("getStoreContent", async (e) => {
              let { data: t } = e;
              const n = this.get(t.storeId);
              if (n?.isActiveButtonMerchant())
                try {
                  return await n.getStoreContent(), n.storeContent.toJSON();
                } catch {}
              return null;
            }),
            m.extension.attachEvent("getTiers", async (e) => {
              let { data: t } = e;
              const n = this.get(t.storeId);
              return await n?.getTiers();
            }),
            m.extension.attachEvent("getOffers", (e) => {
              let { data: t } = e;
              return this.getOffers(t.storeId);
            }),
            m.extension.attachEvent("getCoupons", (e) => {
              let { data: t } = e;
              return this.getCoupons(t.storeId);
            }),
            m.extension.attachEvent(
              "merchants.recent",
              () => (
                this.recent.updateRecent(),
                this.recent
                  .map((e) => {
                    let { id: t } = e;
                    return EBATES.merchants.get(t)?.toJSON();
                  })
                  .filter(Boolean)
              )
            ),
            m.extension.attachEvent("merchants.search", async (e) => {
              let { data: t } = e;
              const n = t.term.toLowerCase();
              if ("A" === EBATES.tests.get("BTN155")) {
                return await this.searchRemote(n);
              }
              return this.search(n);
            }),
            m.extension.attachEvent("isEligibleForBackgroundActivation", (e) => {
              let { data: t } = e;
              const { storeId: n } = t;
              return this.get(n)?.isEligibleForBackgroundActivation();
            }),
            m.extension.attachEvent("isEligibleForInstantBackgroundActivation", (e) => {
              let { data: t } = e;
              const { storeId: n } = t;
              return this.get(n)?.isEligibleForInstantBackgroundActivation();
            }),
            Zi.prototype.initialize.apply(this, arguments)
          );
        },
        async getStore(e) {
          let { storeId: t, fetch: n = !1 } = e,
            r = e.url || os.active.url;
          r = r.replace(/^chrome-extension:\/\/.*\/popup\/popup\.html#/, "");
          let i = null;
          if (n)
            try {
              await EBATES.merchants.fetch();
            } catch {}
          return (
            t ? (i = this.get(t)) : r && r.indexOf(S.domain) < 0 && (i = this.match(r, os.active.tabId)),
            i ? (n && (await EBATES.merchants.rates.default.fetch(i.id)), i.toJSON()) : null
          );
        },
        getStoresByName(e) {
          if (!e) return null;
          const t = this.filter((t) => {
            const n = t.get("storeName");
            if (n) return e.length > n.length ? -1 !== e.indexOf(n) : -1 !== n.indexOf(e);
          });
          return t && t.length ? t.map((e) => e.toJSON()) : null;
        },
        async getCoupons(e) {
          if (!e) return [];
          const t = EBATES.settings.featureFlags.variation("caaAdaptiveSources"),
            n = (await this.getOffers(e)).filter((e) => e.code).map((e) => ((e.source = "OC"), e));
          if (t && EBATES.tests.get("BTN181")) {
            const t = this.findWhere({ storeId: e });
            let r = [];
            try {
              r = await t.experimentalCoupons.load();
            } catch {}
            const i = [...new Set(n.map((e) => e.code.toUpperCase()).filter(Boolean))],
              s = r.filter((e) => -1 === i.indexOf(e.code.toUpperCase()));
            return [...n, ...s];
          }
          return n;
        },
        async getOffers(e) {
          if (e) {
            const t = this.findWhere({ storeId: e });
            if (t?.isButtonMerchant()) {
              try {
                await t.deals.fetch();
              } catch {}
              return t.deals.toJSON();
            }
          }
          return [];
        },
        processDocumentComplete(e) {
          let { url: t, tabId: n } = e;
          if (Wi(t) || !EBATES) return;
          const r = this.match(t, n);
          r && r.processDocumentComplete({ url: t, tabId: n });
        },
        fetch(e) {
          return Zi.prototype.fetch.call(this, { add: !0, merge: !0, remove: !0, headers: { "X-Platform": j[k] }, ...e });
        },
        merge(e) {
          this.set(e);
        },
        async getStoresToUpdate() {
          let e = 0;
          if (this.length) {
            if (await this.lastModifiedTimes.ifUpdateRequired()) {
              const t = await this.lastModifiedTimes.load(),
                n = t
                  .filter((t) => {
                    let { id: n, lastModifiedTime: r } = t;
                    r > e && (e = r);
                    let i = this.get(n);
                    return !i || i.get("lastModifiedTime") !== r;
                  })
                  .map((e) => {
                    let { id: t } = e;
                    return t;
                  });
              if (n.length > 100) return { storeIds: "all", maxLastModifiedTime: e };
              {
                const r = this.reduce(
                  (e, n) => (
                    t.find((e) => {
                      let { id: t } = e;
                      return t === n.id;
                    }) || e.push(n.id),
                    e
                  ),
                  []
                );
                return { storeIds: n.map((e) => String(e)), maxLastModifiedTime: e, deactivatedStoreIds: r };
              }
            }
            return {};
          }
          try {
            const t = await this.lastModifiedTimes.load();
            e = (0, H.max)(t, (e) => e.lastModifiedTime)?.lastModifiedTime;
          } catch (e) {}
          return { storeIds: "all", maxLastModifiedTime: e };
        },
        async sync(e) {
          if (!EBATES.settings.featureFlags.variation("feedGenMerchants", !1)) return Zi.prototype.sync.apply(this, arguments);
          if ("read" === e) {
            if (!this.length) {
              const e = await Ns.get(this.key);
              this.set(e);
              const t = await Ns.get(`${this.key}-domains`);
              this.domains.set(t), (this._dataSynced = !0), this.trigger("sync", this);
            }
            const { storeIds: e, deactivatedStoreIds: t, maxLastModifiedTime: n } = await this.getStoresToUpdate();
            if (
              (t?.length && (this.remove(t), this.domains.remove(this.domains.find((e) => t.includes(String(e.get("storeId")))))),
              e?.length)
            ) {
              const t = await Vi(_, {
                  data: { name: "button_domain_v1", variables: JSON.stringify({ storeIds: e }), ...(n && { _: n }) },
                  headers: { "X-Platform": j[k] }
                }),
                { stores: r, domains: i } = this.parse(t);
              "all" === e
                ? (this.set(r), this.domains.reset(i))
                : (this.set(r, { merge: !0, add: !0, remove: !1 }),
                  this.domains.remove(this.domains.find((t) => e.includes(String(t.get("storeId"))))),
                  this.domains.add(i));
              const s = this.parseSettingsMerchants();
              return (
                this.set(s, { merge: !0, add: !0, remove: !1 }),
                (this._dataSynced = !0),
                this.trigger("sync", this),
                await Ns.set(
                  `${this.key}-domains`,
                  this.domains.map((e) => {
                    let { attributes: t } = e;
                    return t;
                  })
                ),
                await Ns.set(
                  this.key,
                  this.map((e) => {
                    let { attributes: t } = e;
                    return t;
                  })
                ),
                this
              );
            }
          }
        },
        match(e, t) {
          let n = null;
          const r = ae(e);
          if (r) {
            const i = this.domains.where({ topDomain: r }).filter((t) => t.match && t.match.test(e));
            if (i.length) {
              if (t && os.get(t)?.storeId && i.length > 1) {
                let e = os.get(t).storeId,
                  r = i.find((t) => t.get("storeId") === e);
                r && (n = this.get(r.get("storeId")));
              }
              (n = n || this.get((0, H.max)(i, (e) => e.match.source.length).get("storeId"))),
                n && t && os.has(t) && (os.get(t).storeId = n.get("storeId"));
            } else if (t && EBATES.settings.has("sharedPages")) {
              let r = !1;
              try {
                r = EBATES.settings.get("sharedPages").find((t) => new RegExp(t).test(e));
              } catch ({ message: e }) {
                Pi.logger.error("RegExpError", {
                  message: e,
                  sharedPages: EBATES.settings.get("sharedPages").join(","),
                  now: Date.now(),
                  source: "settings.sharedPages"
                });
              }
              if (r) {
                const e = os.get(t),
                  r = e?.storeId;
                r && ((n = this.get(r)), n && (e.storeId = r));
              }
            } else os.has(t) && (os.get(t).storeId = null);
          }
          return n ? n.session.checkSessionTimeout() : os.has(t) && (os.get(t).storeId = null), n;
        },
        search(e) {
          return this.filter((t) => t.get("storeName")?.toLowerCase()?.startsWith(e) && t.isActiveButtonMerchant()).map((e) => e.toJSON());
        },
        async searchRemote(e) {
          this.removeSearchController?.abort(), (this.removeSearchController = new AbortController());
          const { signal: t } = this.removeSearchController;
          try {
            const n = await fetch(V(S.POPUP_SEARCH).replace("{terms}", encodeURIComponent(e.toLowerCase())), { signal: t });
            this.removeSearchController = null;
            const r = await n.json(),
              i = r.response?.docs
                ?.map((e) => {
                  let { storeId: t } = e;
                  const n = this.get(t);
                  if (n?.isActiveButtonMerchant()) return n.toJSON();
                })
                .filter(Boolean);
            return i || [];
          } catch (t) {
            return "AbortError" === t.name ? [] : this.search(e);
          }
        },
        parseFeedGenDomains: (e) =>
          e.reduce((e, t) => {
            let { storeId: n, domains: r = [] } = t;
            return e.concat(r.map((e) => ({ storeId: n, ...e })));
          }, []),
        parseSettingsMerchants() {
          if (!EBATES.settings.featureFlags.variation("customMerchants", !1) && EBATES.settings.domains)
            return EBATES.settings.domains.map((e) => {
              let { domainName: t, matchPattern: n, ...r } = e;
              return r;
            });
        },
        parseFeedGenAPI(e) {
          let t = e.data.stores;
          const n = this.parseFeedGenDomains(t),
            r = this.lastModifiedTimes.getData();
          return (
            (t = t.map((e) => {
              let {
                storeId: t,
                orderConfirmationURLRegex: n = null,
                orderConfirmationDOMRegex: i = null,
                domains: s = [],
                activationCode: o = 0,
                affiliatizerEnabled: a = !1,
                icbEnabled: c = !1,
                largeLogo: u,
                squareLogo: l,
                squareLogoInverse: d,
                images: h,
                ...f
              } = e;
              return {
                storeId: t,
                activationCode: o,
                affiliatizerEnabled: a,
                icbEnabled: c,
                domainName: s[0]?.domainName,
                orderConfirmationURLRegex: n,
                orderConfirmationDOMRegex: i,
                lastModifiedTime:
                  r?.find((e) => {
                    let { id: n } = e;
                    return n === t;
                  })?.lastModifiedTime || 0,
                images: { largeLogo: oo(u || h?.largeLogo), squareLogo: oo(l), squareLogoInverse: oo(d) },
                ...f
              };
            })),
            { stores: t, domains: n }
          );
        },
        parseApitunerAPI(e) {
          let t = e.domainEntities;
          return (
            !EBATES.settings.featureFlags.variation("customMerchants", !1) &&
              EBATES.settings.domains &&
              EBATES.settings.domains.forEach((e) => {
                let n = t.find((t) => {
                  let { storeId: n } = t;
                  return e.storeId === n;
                });
                n ? Object.assign(n, e) : t.push(e);
              }),
            (t = t.map((e) => {
              let { orderConfirmation: t, orderConfirmationURLRegex: n = null, orderConfirmationDOMRegex: r = null, images: i, ...s } = e;
              return { orderConfirmationURLRegex: n, orderConfirmationDOMRegex: r, ...s, images: { largeLogo: oo(i?.largeLogo) } };
            })),
            this.domains.set(
              t.map((e) => {
                let { storeId: t, matchPattern: n, domainName: r } = e;
                return { storeId: t, matchPattern: n, domainName: r };
              })
            ),
            t
          );
        },
        parse(e) {
          return EBATES.settings.featureFlags.variation("feedGenMerchants", !1) ? this.parseFeedGenAPI(e) : this.parseApitunerAPI(e);
        },
        updateMerchantSession(e) {
          let { data: t, tabId: n, url: r } = e;
          const { storeId: i, sessionAttributes: s, ...o } = t,
            a = i ? EBATES.merchants.get(i) : EBATES.merchants.match(r, n);
          a && (o && a.session.set(o), s && a.session.shoppingTrip.addPendingAttribute(s));
        },
        async getMerchant(e) {
          let { url: t, tabId: n } = e;
          if (Wi(t) || !EBATES) return null;
          const r = this.match(t, n);
          if (r) {
            try {
              [0, 2].includes(r.get("activationCode")) || r.session?.get("activated") || (await this.rates.default.fetch(r.id));
            } catch (e) {}
            if (this.rates.default.expired) {
              const e = await m.extension.getItem("rewardsExpire"),
                t = await m.extension.getItem("rewards.nextUpdateTime");
              Pi.logger.warn("RewardsExpired", { expired: e, next: t, now: Date.now(), source: "getMerchant" });
            }
            return (
              EBATES.ebToken && r.isActiveMerchant() && this.recent.visit(r),
              {
                ...r.toJSON(),
                blacklisted: EBATES.settings.userSettings.get("blacklistEnabled") && EBATES.settings.blacklist.contains(t, r.get("storeId"))
              }
            );
          }
          return null;
        }
      }),
      lo =
        /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
      ho = (e) => {
        if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
        const t = e.match(lo);
        if (!t) throw new Error(`Invalid argument not valid semver ('${e}' received)`);
        return t.shift(), t;
      },
      fo = (e) => "*" === e || "x" === e || "X" === e,
      po = (e) => {
        const t = parseInt(e, 10);
        return isNaN(t) ? e : t;
      },
      go = (e, t) => {
        if (fo(e) || fo(t)) return 0;
        const [n, r] = ((e, t) => (typeof e != typeof t ? [String(e), String(t)] : [e, t]))(po(e), po(t));
        return n > r ? 1 : n < r ? -1 : 0;
      },
      mo = (e, t) => {
        for (let n = 0; n < Math.max(e.length, t.length); n++) {
          const r = go(e[n] || "0", t[n] || "0");
          if (0 !== r) return r;
        }
        return 0;
      },
      vo = (e, t, n) => {
        wo(n);
        const r = ((e, t) => {
          const n = ho(e),
            r = ho(t),
            i = n.pop(),
            s = r.pop(),
            o = mo(n, r);
          return 0 !== o ? o : i && s ? mo(i.split("."), s.split(".")) : i || s ? (i ? -1 : 1) : 0;
        })(e, t);
        return bo[n].includes(r);
      },
      bo = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1], "!=": [-1, 1] },
      yo = Object.keys(bo),
      wo = (e) => {
        if ("string" != typeof e) throw new TypeError("Invalid operator type, expected string but got " + typeof e);
        if (-1 === yo.indexOf(e)) throw new Error(`Invalid operator, expected one of ${yo.join("|")}`);
      },
      Eo = (e, t) => {
        if ((t = t.replace(/([><=]+)\s+/g, "$1")).includes("||")) return t.split("||").some((t) => Eo(e, t));
        if (t.includes(" - ")) {
          const [n, r] = t.split(" - ", 2);
          return Eo(e, `>=${n} <=${r}`);
        }
        if (t.includes(" "))
          return t
            .trim()
            .replace(/\s{2,}/g, " ")
            .split(" ")
            .every((t) => Eo(e, t));
        const n = t.match(/^([<>=~^]+)/),
          r = n ? n[1] : "=";
        if ("^" !== r && "~" !== r) return vo(e, t, r);
        const [i, s, o, , a] = ho(e),
          [c, u, l, , d] = ho(t),
          h = [i, s, o],
          f = [c, null != u ? u : "x", null != l ? l : "x"];
        if (d) {
          if (!a) return !1;
          if (0 !== mo(h, f)) return !1;
          if (-1 === mo(a.split("."), d.split("."))) return !1;
        }
        const p = f.findIndex((e) => "0" !== e) + 1,
          g = "~" === r ? 2 : p > 1 ? p : 1;
        return 0 === mo(h.slice(0, g), f.slice(0, g)) && -1 !== mo(h.slice(g), f.slice(g));
      };
    const xo = Hi().Model.extend({
        idAttribute: "created",
        defaults: { created: null, removed: !1, shown: !1, text: "" },
        initialize() {
          this.get("created") || this.set("created", Date.now()),
            this.on("change:unread", () => {
              this.collection.trigger("change");
            });
        },
        toJSON() {
          let e = Hi().Model.prototype.toJSON.apply(this, arguments);
          if ("bonus" === this.get("type")) {
            let t = EBATES.member.bonuses.get(this.get("bonus_id"));
            if (
              t &&
              ((e.bonus = t.toJSON()),
              (e.bonus.description = e.bonus.description.replace(/\$[\d.,]+ Cash Bonus /, "")),
              e.bonus.storeIds && e.bonus.storeIds.length)
            ) {
              let t = EBATES.merchants.get(e.bonus.storeIds[0]);
              t && (e.bonus.store = t.toJSON());
            }
          } else if ("cashback" === this.get("type")) {
            let t = EBATES.merchants.get(this.get("storeId"));
            t && (e.store = t.toJSON());
          }
          return e;
        }
      }),
      Ao = rs.extend({
        key: "messages",
        model: xo,
        initialize() {
          this.fetch({ silent: !0 }),
            this.on({
              "add remove change reset": function () {
                let e = this.where({ shown: !1 }).length;
                EBATES.badge.update("message", e), this.save();
              },
              add: function (e) {
                m.browser.isWebkit &&
                  e.get("desktop") &&
                  this.checkPermission()
                    .then(() => {
                      new So({ model: e }).render();
                    })
                    .catch(() => {});
              }
            });
        },
        flush() {
          return (
            this.remove(
              this.filter((e) => {
                const t = e.has("created") && e.get("shown") && e.get("created") < new Date() - EBATES.settings.get("messageExpires");
                return e.get("removed") || t;
              })
            ),
            Promise.resolve()
          );
        },
        checkPermission: () =>
          new Promise((e, t) => {
            n()
              .permissions.contains({ permissions: ["notifications"] })
              .then((n) => {
                n ? e() : t();
              })
              .catch(() => {});
          })
      }),
      So = Hi().View.extend({
        eventsHandler: {},
        category: "Desktop Notification",
        getEventParams() {
          return { module_type: this.category, entity_name: this.model.get("entity"), store_name: this.getMerchantName() };
        },
        events: {
          onButtonClicked: function (e) {
            e === this.notificationId && (this.click(), this.track("Click Module", { cta_type: this.model.get("cta") }));
          },
          onClicked: function (e) {
            e === this.notificationId &&
              (this.model.has("url") && !this.model.has("cta") && this.click(), this.track("Click Module", { cta_type: "Message" }));
          },
          onClosed: function (e) {
            e === this.notificationId &&
              (this.track("Click Module", { cta_type: "Close" }),
              !this.model.get("popup") && this.model.get("desktop") && this.collection && this.model.collection.remove(this.model)),
              this.detachEvents();
          }
        },
        getMerchantName() {
          if (this.model.has("storeId") && EBATES.merchants.has(this.model.get("storeId")))
            return EBATES.merchants.get(this.model.get("storeId")).get("storeName");
        },
        track(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Li.track(e, { ...this.getEventParams(), ...t });
        },
        click() {
          const e = this.model.get("url");
          this.track("Visit Page", { preceding_screen_name: this.category, url: e }),
            m.browser.navigate({ url: e, tabId: m.browser.NEWTAB }),
            n().notifications.clear(this.notificationId),
            this.model.set({ shown: !0 });
        },
        initialize() {
          this.attachEvents();
        },
        attachEvents() {
          Object.keys(this.events).forEach((e) => {
            (this.eventsHandler[e] = this.events[e].bind(this)), n().notifications[e].addListener(this.eventsHandler[e]);
          });
        },
        detachEvents() {
          Object.keys(this.events).forEach((e) => {
            n().notifications[e].removeListener(this.eventsHandler[e]);
          });
        },
        render() {
          n()
            .notifications.create({
              type: "basic",
              title: this.model.get("title") || m.extension.name,
              iconUrl: this.model.get("image") || "/img/rakuten/icon-rakuten.svg",
              message: this.model.get("text"),
              buttons: this.model.has("url") && this.model.has("cta") ? [{ title: this.model.get("cta") }] : null
            })
            .then((e) => {
              this.notificationId = e;
              const t = { module_type: this.category, entity_name: this.model.get("entity") };
              this.model.has("storeId") && (t.store_name = EBATES.merchants.get(this.model.get("storeId")).get("storeName")),
                Li.track("View Module", this.getEventParams());
            })
            .catch((e) => {});
        }
      });
    let To = Yi.extend({
      defaults: { popup: !1, badge: !1, shown: !1, active: !1 },
      campaigns: null,
      initCampaigns() {
        this.has("campaigns") && (this.campaigns || (this.campaigns = new Oo(null, this)), this.campaigns.set(this.get("campaigns")));
      },
      isActive() {
        if (EBATES && EBATES.member.isExtensionDisabled()) return !1;
        if (this.has("expires") && this.has("starts")) {
          let e = Date.now(),
            t = new Date(this.get("starts")).getTime(),
            n = new Date(this.get("expires")).getTime();
          return this.set({ active: e >= t && e < n && this.isCampaignSupported() }), this.get("active");
        }
        {
          let e = this.isCampaignSupported();
          return e || this.set({ active: !1 }), e;
        }
      },
      initTimeouts() {
        if (this.has("expires") && this.has("starts")) {
          this.timeout && self.clearInterval(this.timeout);
          let e = Date.now(),
            t = new Date(this.get("starts")).getTime(),
            n = new Date(this.get("expires")).getTime();
          this.set({ active: e >= t && e < n && this.isCampaignSupported() });
          let r,
            i = (e) => (0, H.min)([new Date(e) - Date.now(), 6e5]);
          e < t ? (r = i(t)) : e < n && (r = i(n)),
            r &&
              (this.timeout = self.setInterval(() => {
                this.initTimeouts();
              }, r));
        }
      },
      isCampaignSupported() {
        let e = !0;
        return (
          this.get("browser") && (e = (0, H.contains)(this.get("browser").split(","), m.browser.name)),
          this.get("version") && (e = e && Eo(m.extension.version, this.get("version"))),
          e
        );
      },
      activate() {
        this.get("badge") &&
          !this.get("shown") &&
          (EBATES.badge.update("promo", 1),
          EBATES.member.overlays.where({ shown: !1 }).forEach((e) => e.set({ shown: !0 })),
          EBATES.member.overlays.save()),
          this.get("desktopTitle") &&
            this.get("desktopMessage") &&
            !this.get("desktopMessageShown") &&
            EBATES.member.messages
              .checkPermission()
              .then(() => {
                new So({
                  model: new Ki.Model({
                    type: this.id,
                    title: this.get("desktopTitle"),
                    text: this.get("desktopMessage"),
                    url: V(this.toJSON().url),
                    image: this.get("icon"),
                    entity: this.id
                  })
                }).render(),
                  this.set({ desktopMessageShown: !0 });
              })
              .catch(() => {}),
          this.get("overlay") &&
            this.get("overlay").template &&
            !EBATES.member.overlays.get(this.id) &&
            EBATES.member.overlays.add({
              id: this.id,
              view: "CustomOverlayView",
              persistent: this.get("overlay").persistent,
              template: this.get("overlay").template
            });
      },
      initialize() {
        this.isCampaignSupported()
          ? (this.on({
              "change:campaigns": function () {
                this.initCampaigns();
              },
              "change:starts change:expires": function () {
                this.initTimeouts();
              },
              "change:active": function (e, t) {
                t
                  ? this.activate()
                  : (EBATES.member.overlays.remove(this.id), EBATES.member.overlays.save(), EBATES.badge.update("promo", 0)),
                  "icons" === this.id && setTimeout(() => EBATES.icon.load(), 500);
              },
              "change:shown": function (e, t) {
                t && EBATES.badge.update("promo", 0);
              }
            }),
            this.get("active") && this.activate(),
            this.initCampaigns(),
            this.initTimeouts())
          : this.set({ active: !1 });
      },
      toJSON() {
        return { ...Yi.prototype.toJSON.apply(this, arguments), ...this.collection.savedAttributes.get(this.id) };
      }
    });
    const _o = Zi.extend({
      model: To,
      key: "promos",
      url: () => V(S.SETTINGS_PROMOS),
      UPDATE_INTERVAL: 108e5,
      parse(e) {
        return e.promos.map((e) => ({ ...e, ...this.savedAttributes.get(e.id) }));
      },
      fetch() {
        return !1 !== EBATES.settings.featureFlags.variation("customPromos", !1) && Zi.prototype.fetch.apply(this, arguments);
      },
      initialize() {
        var e = this;
        (this.savedAttributes = new Map()),
          Ns.get(`${this.key}-attributes`).then(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            e.savedAttributes = new Map(t);
          });
        const t = ["shown", "desktopMessageShown", "interruptShown", "serpClosed", "disabled", "data"];
        return (
          this.on("change", (e) => {
            (0, H.intersection)(Object.keys(e.changedAttributes()), t).length > 0 &&
              (this.savedAttributes.set(e.id, e.pick(t)), this.saveLocalAttributes());
          }),
          m.extension.attachEvent("updatePromo", (e) => {
            let { data: t = {} } = e;
            const { id: n, ...r } = t;
            this.get(n) &&
              (this.get(n).set(r), m.extension.fireEvent("promoUpdated", { tabId: m.browser.ALLTABS, data: this.get(n).toJSON() }));
          }),
          m.extension.attachEvent("getCampaignStores", async (e, t) => {
            let { data: n } = e;
            const { id: r, fetch: i = !1, rewards: s = !1 } = n,
              o = (0, H.flatten)(this.map((e) => e.campaigns && e.campaigns.models).filter(Boolean)).find((e) => e.id === r);
            if (o) {
              const e = o.get("channel") || k;
              if (i) {
                EBATES.merchants.rates.add(e);
                try {
                  await o.stores.fetch(), await EBATES.merchants.rates.get(e).fetch(o.stores.pluck("storeId"));
                } catch (e) {
                  t(null);
                }
              }
              t(s ? o.stores.toJSON() : o.stores.map((e) => ({ storeId: e.id })));
            } else t(null);
          }),
          Zi.prototype.initialize.apply(this, arguments)
        );
      },
      saveLocalAttributes() {
        for (const e of this.savedAttributes) this.get(e) || this.savedAttributes.delete(e);
        Ns.set(`${this.key}-attributes`, [...this.savedAttributes]);
      },
      getActive() {
        return this.find((e) => e.get("active") && Date.now() >= new Date(e.get("starts")) && Date.now() < new Date(e.get("expires")));
      }
    });
    let ko = Yi.extend({
        idAttribute: "storeId",
        toJSON() {
          const e = EBATES.merchants.get(this.get("storeId"));
          if (e && e.has("shoppingURL") && e.isButtonMerchant()) {
            const t = e.toJSON(),
              n = ie(t.shoppingURL.replace("&store_url=%deepLinkUrl%", ""), {
                merchantId: t.storeId,
                domainName: t.domainName,
                tb: "yes",
                toolbarId: EBATES.toolbarId,
                sourceName: "toolbar",
                channel: k,
                toolbarFeatureId: "TOPSTORES",
                tb_v: m.extension.version,
                eeid: t.mpl ? "40874" : "26142",
                mpl_id: t.mpl
              });
            return { ...Yi.prototype.toJSON.apply(this, arguments), ...t, shoppingURL: n };
          }
        }
      }),
      Io = Ys.extend({
        model: ko,
        url() {
          return `${V(S.CAMPAIGNS)}?id=${this.id}`;
        },
        initialize(e, t) {
          (this.id = t.id),
            (this.campaign = t),
            this.on("error", () => {
              let e = this.campaign.collection.promo;
              var t, n;
              Pi.logger.warn("NetworkException", {
                type: "campaign",
                url: this.url(),
                campaign: e ? e.toJSON() : this.id,
                localTime: ((t = "YYYY-MM-DD HH:mm"), te()(n).format(t))
              });
            });
        },
        parse(e) {
          let t = e.campaigns?.pop();
          if (t) return (this.details = (0, H.pick)(t, ["name", "start", "expires"])), t.stores;
        },
        fetch() {
          let e = this.campaign.collection.promo;
          return this.id && e && e.isActive() ? Ys.prototype.fetch.apply(this, arguments) : Promise.resolve();
        },
        toJSON() {
          return Ys.prototype.toJSON.apply(this, arguments).filter(Boolean);
        }
      }),
      Co = Ki.Model.extend({
        defaults: { popup: !1, hover: !1, update: 0 },
        lastUpdateTimestamp: 0,
        initialize() {
          (this.stores = new Io(null, this)),
            this.get("stores") && this.stores.set(this.get("stores")),
            this.on("change:update", () => this.setUpUpdate()),
            this.listenTo(this.stores, { request: () => this.setUpUpdate(), sync: () => (this.lastUpdateTimestamp = Date.now()) }),
            this.listenTo(this.collection.promo, "change:active", (e) => {
              e &&
                this.get("update") &&
                (this.get("popup") || this.get("tab") || this.get("hover")) &&
                (EBATES.merchants.rates.default && EBATES.merchants.rates.default.reset(), this.stores.fetch());
            }),
            this.collection.promo.get("active") && setTimeout(() => this.stores.fetch(), 3e3),
            this.collection.promo.set(this.pick((e) => !0 === e));
        },
        setUpUpdate() {
          if (this.get("update") > 0 && this.collection.promo.isActive()) {
            self.clearInterval(this.timeout);
            let e = () => {
              this.collection?.promo?.isActive()
                ? Date.now() > this.lastUpdateTimestamp + this.get("update") && this.stores.fetch()
                : self.clearInterval(this.timeout);
            };
            this.timeout = self.setInterval(e, 9e5);
          }
        }
      }),
      Oo = Ki.Collection.extend({
        model: Co,
        initialize(e, t) {
          this.promo = t;
        }
      });
    class Bo extends Ms {
      _id = "price-magic-domains";
      UPDATE_INTERVAL = 108e5;
      constructor() {
        super();
      }
      get url() {
        return V(S.SETTINGS_PM);
      }
      parse(e) {
        const t = e ? e.domains : [];
        return (
          t.forEach((e) => {
            e.enabled = e.enabled || !0;
          }),
          t
        );
      }
    }
    class No {
      key = "installedExtensions";
      extensions = [];
      constructor() {
        this.initialize();
      }
      set(e) {
        const t = [];
        for (const [n, r] of Object.entries(e)) t.push({ installed: !1, ...this.extensions.find((e) => e.id === n), id: n, url: r });
        Object.assign(this.extensions, t),
          (this.extensions = this.extensions.filter((t) => {
            let { id: n } = t;
            return e[n];
          })),
          self.EBATES.setUninstallURL();
      }
      initialize() {
        m.extension.attachEvent("installedExtensions", () => this.getInstalledExtensions()),
          m.extension.attachEvent("saveAndSendInstalledExtensions", (e) => {
            let { data: t } = e;
            const { extensions: n } = t;
            (this.extensions = n), m.extension.setItem("installed_extensions_check", Date.now()), this.save(), this.sendEvents();
          }),
          this.load();
      }
      save() {
        m.extension.setItem(this.key, this.extensions);
      }
      async load() {
        const e = await m.extension.getItem(this.key);
        e && Object.assign(this.extensions, e);
      }
      sendEvents() {
        const e = this.getInstalledExtensions();
        Li.track("Competitor Applications", { extensions: e.toString() });
      }
      getInstalledExtensions() {
        return this.extensions
          .filter((e) => {
            let { installed: t } = e;
            return t;
          })
          .map((e) => {
            let { id: t } = e;
            return t;
          });
      }
    }
    class Po {
      constructor(e, t) {
        (this.type = t), (this.matches = new Map()), (this.data = new Set(e));
      }
      findMatch(e) {
        return [...this.data].find((t) => ("string" == typeof t ? e.indexOf(t) > 0 : t.test(e)));
      }
      add(e) {
        e.forEach((e) => this.data.add(e));
      }
      set(e) {
        this.data = new Set(e);
      }
      match(e, t) {
        const n = this.findMatch(e);
        if (n) {
          const r = this.matches.get(t) || [];
          r.push({ url: e, timeStamp: Date.now(), paidLink: n }), this.matches.set(t, r);
        }
        return n;
      }
      clear(e) {
        this.matches.delete(e);
      }
      state(e) {
        const t = Date.now() - 6e4,
          n = (this.matches.get(e) || []).filter((e) => {
            let { timeStamp: n } = e;
            return n > t;
          });
        return n.length && this.matches.set(e, n), n[0];
      }
      addParameters(e, t) {
        const n = this.matches.get(e);
        n
          ? this.matches.set(
              e,
              n.map((e) => ({ ...e, ...t }))
            )
          : this.matches.set(e, [{ ...t, timeStamp: Date.now() }]);
      }
    }
    function Do(e, t) {
      let n = 0;
      if (!e) return n;
      switch (e.display) {
        case "Percentage":
          n = Math.round(t * e.amount) / 100;
          break;
        case "Fixed":
          n = e.amount;
      }
      return n;
    }
    function Ro(e, t) {
      function n(e, t, n) {
        return e.split(/ *&& */).reduce(
          (e, r) =>
            (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
              const [r, i, s, o] = /^([<>]=?)(\d+(?:\.\d+)?)(%?)$/.exec(e) || [];
              if (!r) throw new Error("Invalid input");
              const a = o ? (n * parseFloat(s)) / 100 : parseFloat(s);
              return ">" === i ? t > a : "<" === i ? t < a : ">=" === i ? t >= a : "<=" === i && t <= a;
            })(r, t, n) && e,
          !0
        );
      }
      return (function (e, t, r) {
        return e.split(/ *\|\| */).reduce((e, i) => n(i, t, r) || e, !1);
      })(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100);
    }
    let Mo;
    class Lo extends Ms {
      _id = "products";
      DEFAULT_UPDATE_INTERVAL = 864e5;
      get url() {
        return V(S.SETTINGS_PRODUCTS);
      }
      async getConfigs() {
        try {
          return await this.load();
        } catch (e) {
          return [];
        }
      }
      parse(e) {
        return e?.stores ?? [];
      }
    }
    class jo {
      api_call = "";
      storeName = "";
      module_type = "Price Magic";
      entity_name = "Price Magic Notification";
      constructor(e) {
        let { canonical_url: t, domainName: n, query: r = {}, storeName: i } = e;
        (this.requestId = A()), (this.canonical_url = t), (this.domainName = n), (this.query = r), (this.storeName = i);
      }
      get url() {
        return V(S.PRICE_MAGIC);
      }
      get bulkUrl() {
        return V(S.PRICE_MAGIC_BULK);
      }
      async fetch() {
        const e = ie(this.url, {
          ...this.query,
          ...(self.EBATES.tests.get("BTN180")
            ? { user_abSegment: "A" === self.EBATES.tests.activate("BTN180") ? "segment_a" : "segment_x" }
            : {}),
          postfilter: Mo.postfilter
        });
        this.api_call = e;
        const t = await Vi({
            url: e,
            error: (t, n, r) => {
              throw (this.trackRequestAPI({ url: e, status: n }), { response: t, status: n, error: r });
            }
          }),
          n = this.parse(t);
        await this.fetchRewards(n);
        let r = this.populateURLs(n);
        (r = this.processProducts(r, this.query)), (r = this.sortProducts(r));
        const i = this.checkProducts(r);
        return this.trackRequestAPI({ url: e, products: r, product: i }), i;
      }
      async fetchBulk(e) {
        let t = 0;
        let n = 0,
          r = [];
        const i = e
          .map((e) => {
            let { asin: t } = e;
            return t;
          })
          .join(",");
        if (!i) return [];
        this.entity_name = "Search result micro-activation button";
        let s = 0;
        do {
          const e = ie(this.bulkUrl, { asins: i, hits: 60, offset: n, postfilter: Mo.postfilter });
          this.api_call = e;
          const o = await Vi({
            url: e,
            error: (t, n, r) => {
              throw (this.trackBulkRequestAPI({ url: e, status: n }), { response: t, status: n, error: r });
            }
          });
          let a = this.parse(o);
          if (
            (await this.fetchRewards(a),
            (a = this.populateURLs(a)),
            this.trackBulkRequestAPI({ url: e, products: a }),
            (r = r.concat(a)),
            (n += 60),
            (t = o.hits.total),
            s++ >= 5)
          )
            break;
        } while (t > r.length);
        return e.map((e) => {
          let t = r.filter((t) => {
            let { asins: n } = t;
            return n.includes(e.asin);
          });
          (t = t.map((t) => this.processProduct({ ...t }, e))), (t = this.sortProducts(t));
          const n = this.checkProducts(t);
          return { ...e, pmProduct: n };
        });
      }
      parse(e) {
        return e.hits.hits.map((t) => ({
          ...t._source,
          algorithmMatched: t._source.algorithmMatched ?? e.algorithmMatched ?? "idenMatch"
        }));
      }
      fetchRewards(e) {
        if (e.length)
          try {
            const t = (0, H.unique)(e.map((e) => e.storeId));
            return self.EBATES.merchants.rates.get(23).fetch(t);
          } catch (e) {}
      }
      populateURLs(e) {
        const t = { channel: 23 };
        return e?.map((e) => {
          const n = self.EBATES.merchants.get(e.storeId);
          return { ...G({ ...e }, "https://product-image.ebates.com"), merchant: n ? n.toJSON(t) : null };
        });
      }
      processProducts(e, t) {
        return e.map((e) => this.processProduct(e, t));
      }
      processProduct(e, t) {
        const n = self.EBATES.settings.featureFlags,
          r = e.salePrice;
        let i = 0;
        if (e.eligibleForCashBack && e.merchant && e.merchant.reward) {
          let t = e.merchant.reward,
            s = null;
          t.range &&
            e.merchant.tiers &&
            n.variation("pmTieredCalc") &&
            ((s = e.merchant.tiers.find((t) => {
              let { id: n } = t;
              return parseInt(n, 10) === parseInt(e.categoryId, 10);
            })),
            (e.cb_type = "tiered")),
            s && (e.merchant.reward = t = s.reward),
            t.range || (i = Do(t, r)),
            Mo.affiliatizedLinks.find((t) => e.productUrl.indexOf(t) > 0)
              ? (e.cta_type = "aff_link")
              : e.merchant.affiliatizerEnabled
              ? (e.cta_type = "affiliatizer-yes")
              : (e.cta_type = "affiliatizer-no");
        } else e.cta_type = "no-cb";
        const s = t.salePrice;
        return (
          (e.originalPrice = s),
          (e.salePrice = r),
          (e.finalPrice = r - i),
          (e.cashBackAmount = i),
          (e.savingsAmount = s - r + i),
          (e.asin = t.asin),
          e.merchant && (e.merchant.storeContent = {}),
          e
        );
      }
      sortProducts = (e) => (self.EBATES.settings.featureFlags.variation("pmScoringEnabled") ? this.sortByScores(e) : this.sortByPrice(e));
      sortByPrice = (e) =>
        (e = (0, H.chain)(e)
          .sortBy((e) => -e.savingsAmount)
          .sortBy((e) => !e.merchant)
          .value());
      sortByScores = (e) => (
        this.setPoints(e),
        (e = (0, H.chain)(e)
          .sortBy(() => Math.random())
          .sortBy((e) => e.finalPrice)
          .sortBy((e) => e.merchant?.pmScore)
          .sortBy((e) => -(e.points ?? 0))
          .value())
      );
      setPoints = (e) => {
        e.forEach((e) => {
          let t = e.merchant?.pmScore || 0;
          e.savingsAmount < 0 ? (t = 0) : (t += Math.floor(e.savingsAmount)), (e.points = t);
        });
      };
      trackRequestAPI(e) {
        let { url: t, status: n, products: r = [], product: i } = e;
        const s = i,
          o = s?.merchant,
          a = r.filter((e) => e.merchant && e.merchant?.storeId !== o?.storeId),
          c = a.map((e) => e.merchant),
          u = r
            .map((e) => this.query.salePrice - e.salePrice)
            .map((e) => e.toFixed(2))
            .toString(),
          l = {
            entity_name: this.module_type,
            rec_stores_scores: r
              .map((e) => e.points)
              .filter(Number.isInteger)
              .toString(),
            rec_stores_savings: r.map((e) => e.savingsAmount.toFixed(2)).toString(),
            title: this.query.title,
            brandName: this.query.brandName,
            asin: this.query.asin,
            breadcrumb: this.query.breadcrumb,
            current_product_price: this.query.salePrice,
            rec_stores_priceDelta_savings: u,
            rec_stores_cashBack_savings: r.map((e) => e.cashBackAmount).toString(),
            winning_store_id: o?.storeId,
            winning_store_name: o?.storeName,
            suppressed_store_ids: c
              .map((e) => e?.storeId)
              .filter(Boolean)
              .toString(),
            suppressed_store_names: c
              .map((e) => e?.storeName)
              .filter(Boolean)
              .toString()
          };
        this.trackBulkRequestAPI({ url: t, status: n, products: r, data: l });
      }
      trackBulkRequestAPI(e) {
        let { url: t, status: n, products: r = [], data: i = {} } = e;
        const s = {
          module_type: this.module_type,
          entity_name: `${this.module_type} ${this.entity_name}`,
          domain: this.domainName,
          api_call: t,
          error: n ?? null,
          recs: r.length,
          algorithmMatched: r.length ? r[0].algorithmMatched : null,
          rec_stores: r.map((e) => e.store).toString(),
          rec_store_ids: r.map((e) => e.storeId).toString(),
          canonical_url: this.canonical_url,
          product_upc: r.map((e) => e.upcs).toString(),
          ...i
        };
        Li.track("Request API", s);
      }
      checkProducts(e) {
        if (!e.length) return;
        let t = "";
        const n = e.find((e) => {
          if (e?.savingsAmount > 0) {
            const n = Mo.exclusions.find((t) => t.storeId === e.merchant?.storeId);
            if (n) {
              if (!n.excludedCategories && !n.includedCategories)
                return this.excludedEvent("PriceMagic_excluded_rec", e, "exluded store"), !1;
              if (n.excludedCategories?.includes(e.categoryId) || !n.includedCategories?.includes(e.categoryId))
                return this.excludedEvent("PriceMagic_excluded_rec", e, "exluded category"), !1;
            }
            return self.EBATES.settings.userSettings.get("progressiveEducation").PriceMagic && e.savingsAmount < Mo.thresholdAmount
              ? ((t = "below first-time savings threshold"), !0)
              : e.merchant && 0 !== e.merchant.activationCode
              ? !(!this.checkThresholdTier(e) && 18397 !== e.merchant.storeId) ||
                (this.excludedEvent("PriceMagic_excluded_rec", e, "excluded range"), !1)
              : (this.excludedEvent("PriceMagic_excluded_rec", e, "exluded store"), !1);
          }
          return (t = e.salePrice > e.originalPrice ? "rec more expensive" : "excluded store"), !0;
        });
        if (!t || !n) return n;
        this.excludedEvent("PriceMagic_hid_bar", n, t);
      }
      checkThresholdTier = (e) => {
        if (!Mo.tiers) return !0;
        const t = Mo.tiers.find((t) => {
          const n = !t.algorithmMatched || t.algorithmMatched?.split(",").includes(e.algorithmMatched),
            r = !t.storeName || t.storeName === this.storeName,
            i = !t.recommendedStoreIds || t.recommendedStoreIds.includes(e.merchant?.storeId);
          return n && r && i;
        });
        if (t) {
          const n = t.ranges?.find(
            (t) =>
              (!t.savings || Ro(t.savings, e.savingsAmount, e.originalPrice)) && (!t.price || Ro(t.price, e.finalPrice, e.originalPrice))
          );
          return n;
        }
        return !1;
      };
      excludedEvent(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const r = {
          domain: this.domainName,
          rec_store_name: t.store,
          rec_store_id: t.storeId,
          api_call: this.api_call,
          algorithmMatched: t.algorithmMatched,
          current_product_price: t.originalPrice?.toFixed(2),
          savings_amount: t.savingsAmount?.toFixed(2),
          rec_product_price: t.salePrice?.toFixed(2),
          category: t.categoryName,
          reason: n
        };
        let i = "Exclude from Price Magic";
        return "PriceMagic_hid_bar" === e && (i = "Suppress Module"), this.track(i, r), i;
      }
      track(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Li.track(e, { module_type: this.module_type, entity_name: this.entity_name, requestId: this.requestId, ...t });
      }
    }
    m.extension.attachEvent("getSimilarMultipleProducts", async (e) => {
      let { data: t } = e;
      const { products: n, canonical_url: r, domainName: i, storeName: s } = t;
      Mo = self.EBATES.settings.priceMagic.toJSON();
      const o = new jo({ canonical_url: r, domainName: i, storeName: s });
      try {
        const e = await o.fetchBulk(n);
        return { url: o.bulkUrl, products: e, requestId: o.requestId };
      } catch (e) {
        const { response: t } = e;
        let n = "",
          r = null;
        try {
          (n = await t.text()), (r = JSON.parse(n));
        } catch (e) {}
        return {
          url: o.bulkUrl,
          ...(r?.apiHeader ? { message: "Request failed", details: r.apiHeader.message } : { message: "API error", xhr: n })
        };
      }
    }),
      m.extension.attachEvent("getSimilarProducts", async (e) => {
        let { data: t } = e;
        const { requestAllowed: n, query: r, canonical_url: i, domainName: s } = t,
          o = r.storeName;
        if (((Mo = self.EBATES.settings.priceMagic.toJSON()), r.term && !r.title && ((r.title = r.term), delete r.term), !1 === n)) return;
        const a = new jo({ canonical_url: i, domainName: s, query: r, storeName: o });
        try {
          const e = await a.fetch();
          return e
            ? { url: a.url, product: e, error: !1, requestId: a.requestId }
            : { url: a.url, error: !0, message: "0 results found", status: 0, details: t.term };
        } catch (e) {
          const { response: t } = e;
          let n = "",
            r = null;
          try {
            (n = await t.text()), (r = JSON.parse(n));
          } catch (e) {}
          return {
            url: a.url,
            ...(r?.apiHeader ? { message: "Request failed", details: r.apiHeader.message } : { message: "API error", xhr: n })
          };
        }
      }),
      m.extension.attachEvent("saveVisitedProduct", async (e) => {
        let { data: t } = e;
        if (self.EBATES.settings.featureFlags.variation("pmSaveProducts", !1)) {
          const e = (await Ns.get("visited-products")) || [];
          !(function (e) {
            const t = Date.now() - 7776e6;
            for (let n = e.length - 1; n >= 0; n--) e[n].ts <= t && e.splice(n, 1);
          })(e);
          const n = t.product,
            r = e.findIndex((e) => {
              let { product: t } = e;
              return n.sku && t.sku ? t.sku === n.sku : n.upc && t.upc ? t.upc === n.upc : t.title === n.title;
            });
          r > -1 && e.splice(r, 1), e.unshift(t), Ns.set("visited-products", e.slice(0, 1e3));
        }
      });
    class Uo extends Ds() {
      _variations = {};
      _attributes = {};
      constructor(e, t) {
        let { url: n, appId: r, apiKey: i, updateInterval: s } = e;
        super(), (this._url = n), (this._appId = r), (this._apiKey = i), (this._updateInterval = s), t && this.identify(t);
      }
      async sync() {
        const e = new URL(this._url);
        Object.keys(this._attributes).forEach((t) => e.searchParams.append(t, this._attributes[t]));
        try {
          const t = await Vi(e, { headers: { "APP-ID": this._appId, "API-KEY": this._apiKey } }),
            n = {};
          [...new Set([...Object.keys(this._variations), ...Object.keys(t)])].forEach((e) => {
            const r = t[e];
            this._variations[e] !== r && (n[e] = r);
          }),
            (this._variations = t),
            Object.entries(n).forEach((e) => {
              let [t, n] = e;
              this.emit(`change:${t}`, n);
            });
        } catch (e) {}
        return this;
      }
      async identify() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this._attributes = e;
      }
      async fetch() {
        return (
          this._updateInterval && (clearTimeout(this._timeout), (this._timeout = setInterval(() => this.fetch(), this._updateInterval))),
          await this.sync()
        );
      }
      variation(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = e.split(".");
        return (function e(n, r) {
          const i = r.shift();
          if (i) return Object.prototype.hasOwnProperty.call(n, i) ? (r.length ? e(n[i], r) : n[i]) : t;
        })(this._variations, n);
      }
      toJSON() {
        return JSON.parse(JSON.stringify(this._variations));
      }
    }
    let $o = Ki.Model.extend({
        constructor: function (e) {
          return Ki.Model.call(this, { data: e });
        },
        toJSON() {
          return this.get("data");
        }
      }),
      Fo = rs.extend({
        key: "blacklist",
        model: $o,
        initialize() {
          m.extension.attachEvent("blacklist-save", (e) => {
            let { data: t } = e;
            this.reset(t), this.save();
          }),
            m.extension.attachEvent("blacklist-update", (e) => {
              let { data: t } = e;
              const { storeId: n, domain: r, blacklisted: i } = t;
              r &&
                "boolean" == typeof i &&
                (i && !this.contains(r, n) ? this.add(r) : i || this.remove(this.where({ data: r })), this.save());
            });
        },
        contains(e, t) {
          return !!this.find(function (n) {
            const r = n.get("data");
            return isNaN(r) || isNaN(t) ? ae(e) === ae(r) : t === parseInt(r, 10);
          });
        }
      });
    class qo extends Ms {
      _id = "serp";
      DEFAULT_UPDATE_INTERVAL = 216e5;
      get url() {
        return V(S.SETTINGS_SERP);
      }
      constructor() {
        super();
      }
      parse(e) {
        return e.serp;
      }
    }
    let Ho = is.extend({ key: "cart_notifications", defaults: { activation: !0, caa: !0, ccch: !0, ccps: !1, bonus: !0 } }),
      Wo = is.extend({
        async requestPermission(e, t) {
          await EBATES.contentRunner.page?.injectContentScripts("document_start"),
            m.extension.fireEvent("permission-request-backdrop", { data: "show", tabId: m.browser.CURRENTTAB }),
            n()
              .permissions.request({ permissions: ["notifications"] })
              .then((e) => {
                m.extension.fireEvent("permission-request-backdrop", { data: "hide", tabId: m.browser.CURRENTTAB }),
                  e
                    ? (EBATES.settings.userSettings.save({ notificationsEnabled: "granted" }),
                      new So({
                        model: new xo({
                          type: "permission",
                          title: "Desktop notifications are now on!",
                          text: "We'll let you know whenever Cash Back is placed in your account.",
                          url: V("/pending-cash-back.htm?tb=yes&eeid=26117"),
                          cta: "See Cash Back Activity",
                          desktop: !0,
                          entity: "Opt-in"
                        })
                      }).render())
                    : EBATES.settings.userSettings.save({ notificationsSuspended: Date.now(), notificationsEnabled: "rejected" }),
                  t && t();
              })
              .catch((e) => {});
        }
      }),
      zo = is.extend({
        key: "settings",
        defaults: {
          abandonedProductsReminder: !0,
          postPurchaseMessage: !0,
          postPurchaseMessageAddressUpdated: !1,
          desktopNotifications: { cashBack: !0 },
          ccHover: 0,
          blacklistEnabled: !1,
          disabledTieredStores: [],
          reportingEnabled: !0,
          transitionMessage: !1,
          postInstallPopup: !1,
          progressiveEducation: {
            ReminderHover: !0,
            ConfirmHover: !0,
            UpToCB: !0,
            CouponMagic: !0,
            SERPinjections: !0,
            SERPinjectionsClickable: !0,
            SERPinjectionsGiftCard: !0,
            PriceMagic: !0,
            PriceMagicButton: !0,
            PriceMagicSearch: !0,
            RAB: !0,
            RafProductPagePopover: !0
          }
        },
        initialize() {
          this.on({
            sync: function () {
              const e = { ...this.defaults.progressiveEducation, ...this.get("progressiveEducation") };
              this.save({ progressiveEducation: e }),
                this.has("installedTimestamp") || this.save({ installedTimestamp: Date.now() }),
                this.set("transitionMessage", !0);
            },
            "change:isDoNotShareActive": () => {
              const e = A();
              m.extension.setItem("uiid", e), (Li.anonymousId = e);
            },
            "change:logging change:isDoNotShareActive change:anonymousLogging": () => this.toggleLogging()
          });
        },
        toggleLogging() {
          const e = EBATES.member.isExtensionDisabled(),
            t = EBATES.member.id ? !0 === EBATES.member.get("isDoNotShareActive") : this.get("isDoNotShareActive"),
            n = EBATES.settings.featureFlags.variation("dataDogLogging", !0),
            r = EBATES.settings.featureFlags.variation("segmentLogging", !0),
            i = "opt_out" === this.get("logging") || "pending" === this.get("logging") || e,
            s = "opt_out" === this.get("anonymousLogging") || "pending" === this.get("anonymousLogging") || e,
            o = i || t;
          (Li.disabled = o || !r),
            (self.EBATES.immerseSessions.disabled = o),
            EBATES.fillr && (EBATES.fillr.disabled = o),
            Pi.logger.setHandler(!n || s || t ? "silent" : "http");
        }
      });
    const Go = Qi.extend({
        url: () => V(S.SETTINGS),
        blacklist: new Fo(),
        coupons: new (class extends Ms {
          _id = "coupons";
          DEFAULT_UPDATE_INTERVAL = 864e5;
          get url() {
            return V(S.SETTINGS_COUPONS);
          }
          constructor() {
            super(),
              m.extension.attachEvent("getCouponsConfig", async (e, t) => {
                let { data: n } = e;
                if (n?.url) {
                  t(await this.match(n));
                } else if (n?.storeId) {
                  await this.getConfigs();
                  const e = !!EBATES.settings.coupons.config?.find((e) => {
                    if (e.storeId === n?.storeId) return this.validateConfig(e);
                  });
                  t(e);
                }
              });
          }
          validateConfig(e) {
            const t = e.controls;
            return (
              (0, H.isObject)(t) &&
              (((0, H.isObject)(e.apply) && (0, H.isString)(e.apply.submit)) ||
                ((0, H.isArray)(e.apply) && e.apply.every((e) => (0, H.isString)(e.submit)))) &&
              ((0, H.isString)(t.promo) || (0, H.isString)(t.promo?.selector)) &&
              ((0, H.isString)(t.total) || (0, H.isString)(t.total?.selector))
            );
          }
          async getConfigs() {
            try {
              this.config = await this.load();
            } catch (e) {
              this.config = [];
            }
          }
          async match(e) {
            let { url: t, storeId: n } = e;
            return (
              await this.getConfigs(),
              this.config.filter((e) => (!n || e.storeId === n) && [].concat(e.url).find((e) => new RegExp(e, "i").test(t)))
            );
          }
          parse(e) {
            return e?.coupons ?? [];
          }
        })(),
        checkoutNotifications: new Ho(),
        affiliates: new (class {
          suppresses = new Po([], "suppresses");
          activations = new Po(
            [
              /^[^?]*\.(?:ebates|rakuten)\.com\/.*(?:createShoppingSession|xfas|mall_ctrl\.do)/,
              /\.shopstyle(?:qa)?\.com\/\w+\/(?:loadRetailerProductPage|apiVisitRetailer)/,
              /\/\/shopping\.yahoo\.com\/rd\?.*?providerId=rkt/
            ],
            "activations"
          );
          constructor() {
            m.browser.attachEvent(m.browser.TABCLOSED, (e) => {
              let { tabId: t } = e;
              this.activations.clear(t), this.suppresses.clear(t);
            }),
              m.browser.attachEvent(m.browser.BEFORENAVIGATE, (e) => {
                let { url: t, tabId: n } = e;
                t && this.match(t, n);
              }),
              m.extension.attachEvent("interstitial", (e) => {
                let { tabId: t, data: n } = e;
                !n.partner || (n.trackingTicketNumber && n.sessionReward)
                  ? this.activations.addParameters(t, n)
                  : this.activations.clear(t);
              });
          }
          match(e, t) {
            this.activations.match(e, t) || this.suppresses.match(e, t);
          }
          state() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return { tabId: e, activation: this.activations.state(e), suppress: this.suppresses.state(e) };
          }
          clear() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.suppresses.clear(e), this.activations.clear(e);
          }
        })(),
        priceMagic: new (class {
          properties = {
            affiliatizedLinks: [".popshops.com/", "c.affil.walmart.com/"],
            thresholdAmount: 5,
            excludedDomains: [],
            partnerDomains: [],
            exclusions: [],
            requestThreshold: null,
            tiers: null,
            messages: [],
            giftCardDisplayDelay: 0
          };
          domains = new Bo();
          set(e) {
            Object.assign(this.properties, e);
          }
          get(e) {
            return e ? this.properties[e] : this.properties;
          }
          toJSON() {
            return this.properties;
          }
        })(),
        browserNotification: new Wo(),
        userSettings: new zo(),
        serp: [],
        iscb: [],
        UPDATE_INTERVAL: 108e5,
        ERROR_UPDATE_INTERVAL: 3e5,
        defaults: {
          activityUpdateInterval: 108e5,
          activationInterval: 1e4,
          serpEnabled: !0,
          competitorDomains: [
            "shopathome.com",
            "shopstyle.com",
            "dealmoon.com",
            "mrrebates.com",
            "retailmenot.com",
            "dealsplus.com",
            "jet.com"
          ],
          standDownDomains: [],
          contentBlackList: [],
          travelStores: [],
          interruptBlackList: [],
          sharedPages: [],
          features: {},
          groupon: {},
          CDN: S.CDN,
          deskNotificationReqFreq: 2592e6,
          messageExpires: 12096e5,
          reportingUpdateInterval: 108e5,
          rewardsExpire: 864e5,
          pendingDeletionTemplate:
            '<h2>Your Account Deletion is Pending</h2>\n\t\t<p>You requested an account deletion. You can check the status of your request by clicking below. You may also wish to remove Rakuten from your browser extensions.</p>\n\t\t<a href="#" data-href="https://www.rakuten.com/shell-page.htm?sourceName=toolbar" class="btn">Check Deletion Status</a>',
          confirmationTimeout: { default: 5e3, background: 7e3, deal: 1e4, threshold: 500 }
        },
        parseResponse(e) {
          if (e) {
            this.checkoutNotifications.set(e.checkoutNotifications),
              this.affiliates.suppresses.set(e.paidLinks),
              e.paidLinkPatterns && this.affiliates.suppresses.add((0, H.map)(e.paidLinkPatterns, (e) => new RegExp(e)));
            const t = e.betterChoices || e.priceMagic;
            t && this.priceMagic.set((0, H.omit)(t, "domains")),
              e.installed_extensions &&
                this.installedExtensions &&
                (this.installedExtensions.set(e.installed_extensions), this.installedExtensions.save()),
              (this.serp = e.serp),
              (this.iscb = e.iscb),
              (this.domains = (0, H.map)(e.domains, function (e) {
                return (e.track_events = !0), e;
              })),
              e.promos &&
                !1 === EBATES.settings.featureFlags.variation("customPromos", !1) &&
                this.promos.set(this.promos.parse({ promos: [...e.promos, ...e.campaigns] })),
              this.set(
                (0, H.omit)(
                  e,
                  "paidLinks",
                  "serp",
                  "domains",
                  "optout",
                  "promos",
                  "campaigns",
                  "betterChoices",
                  "priceMagic",
                  "checkoutNotifications",
                  "installed_extensions"
                )
              );
          }
        },
        parse(e) {
          this.parseResponse(e), this.trigger("sync-data", e);
        },
        initialize() {
          return (
            (this.promos = new _o()),
            (this.customSerp = new qo()),
            (this.productParsers = new Lo()),
            (this.interstitials = new Ki.Collection([
              {
                matchPattern: "\\.rakuten\\.com",
                reward: {
                  ttn: { selector: "meta[name='trackingTicketNumber']", attribute: "content" },
                  amount: { selector: "meta[name='rewardAmount']", attribute: "content" },
                  display: { selector: "meta[name='rewardType']", attribute: "content" },
                  range: { selector: "meta[name='rewardRange']", attribute: "content" },
                  interstitialType: { selector: "meta[name='interstitialType']", attribute: "content" }
                }
              },
              {
                matchPattern: "\\.shopstyle(?:qa)?\\.com\\/\\w+\\/(?:loadRetailerProductPage|apiVisitRetailer)",
                defaults: { display: "Percentage", partner: "ShopStyle", sessionInterval: 6048e5 },
                reward: {
                  ttn: { selector: "meta[name='trackingTicketNumber']", attribute: "content" },
                  amount: { selector: "meta[name='rewardAmount']", attribute: "content" },
                  display: { selector: "meta[name='rewardType']", attribute: "content" },
                  range: { selector: "meta[name='rewardRange']", attribute: "content" }
                }
              },
              {
                matchPattern: "\\/\\/shopping\\.yahoo\\.com\\/rd\\?.*?providerId=rkt",
                defaults: { display: "Percentage", partner: "Yahoo" },
                reward: {
                  ttn: { selector: 'div[class^="Cashback__TrackingInfo-"]', rx: "#(\\d+)" },
                  amount: { selector: 'div[class^="Cashback__CashbackInfo-"]', rx: "(.*?)%" }
                }
              }
            ])),
            (this.featureFlags = new Uo(
              {
                url: "https://ffconf.ecbsn.com/featureflags",
                appId: "1af2274e-266f-4228-8765-b498deb0cc46",
                apiKey: "c0469223-7cfc-49bc-b1d3-378b71d44817",
                updateInterval: 72e5
              },
              { browser: m.browser.name, version: m.extension.version }
            )),
            this.featureFlags.on("change:dataDogLogging", () => this.userSettings.toggleLogging()),
            this.featureFlags.on("change:segmentLogging", () => this.userSettings.toggleLogging()),
            this.featureFlags.on("change:customPromos", (e) => e && this.promos.fetch()),
            m.browser.isChrome && (this.installedExtensions = new No()),
            this.on({
              "change:activityUpdateInterval": function (e, t) {
                EBATES.member.activity.setUpUpdate(t);
              }
            }),
            m.extension.attachEvent("settings", (e, t) => {
              let { data: n } = e;
              n && this.userSettings.save(n),
                EBATES.merchants.ready().then(() => {
                  t(this.toJSON());
                });
            }),
            m.extension.attachEvent("getBrowserNotificationPermission", (e) => {
              let { data: t } = e;
              EBATES.settings.browserNotification.requestPermission(t);
            }),
            Qi.prototype.initialize.apply(this, arguments)
          );
        },
        load() {
          return Promise.all([this.featureFlags.fetch(), this.promos.fetch(), this.blacklist.fetch(), this.userSettings.fetch()]).catch(
            (e) => {}
          );
        },
        toJSON() {
          return (0, H.extend)(this.userSettings.toJSON(), is.prototype.toJSON.apply(this, arguments), {
            checkoutNotifications: this.checkoutNotifications.toJSON(),
            serp: this.serp,
            blacklist: this.blacklist.toJSON(),
            priceMagic: this.priceMagic.toJSON(),
            promos: this.promos.toJSON(),
            user_id: EBATES.member.id,
            ebToken: EBATES.ebToken,
            domain: S.domain,
            iscb: this.iscb,
            extensionDisabled: EBATES.member.isExtensionDisabled(),
            featureFlags: this.featureFlags.toJSON(),
            isOffline: 0 === EBATES.merchants.length,
            toolbarId: EBATES.toolbarId,
            isFillrEnabled: !EBATES.fillr.disabled,
            isFeedPreviewMode: !!EBATES.feed.previewToken
          });
        }
      }),
      Vo = {
        neutral: "Rakuten: Get Cash Back for Shopping",
        activated: "Rakuten: Cash Back Activated",
        available: "Rakuten: Activate to Earn Cash Back"
      };
    let Jo = null;
    const Ko = 32,
      Yo = 32,
      Xo = 3.3,
      Zo = 5,
      Qo = 11,
      ea = 8.75;
    class ta {
      cacheImagesloading = !1;
      cachedAnimation = new Map();
      Images = new Map();
      animationIndex = Zo;
      loopIndex = 0;
      constructor() {
        (this.context = this.getContext()),
          this.load(),
          self.setInterval(() => this.load(), 108e5),
          m.browser.attachEvent(m.browser.DOCUMENTCOMPLETE, this.handlePage.bind(this)),
          m.browser.attachEvent(m.browser.TABCHANGED, this.handlePage.bind(this)),
          m.extension.attachEvent("merchant.state:change", this.handlePage.bind(this));
      }
      getContext() {
        return "undefined" != typeof OffscreenCanvas
          ? new OffscreenCanvas(Ko, Yo).getContext("2d")
          : (function (e, t) {
              const n = document.createElement("canvas");
              return n.setAttribute("width", `${e}`), n.setAttribute("height", `${t}`), document.body.appendChild(n), n;
            })(Ko, Yo).getContext("2d");
      }
      async cachePromoImage(e) {
        if (self.EBATES) {
          const t = self.EBATES.settings.promos.get("icons");
          if (t && t.get("active") && t.get(e)) return this.fetchImage(t.get(e));
        }
        return Promise.reject();
      }
      async fetchImage(e) {
        const t = await fetch(e);
        if (!t.ok) throw new Error(t.statusText);
        const n = await t.blob();
        return new Promise((e) => {
          const t = new Image();
          (t.onload = () => e(t)), t.setAttribute("src", URL.createObjectURL(n));
        });
      }
      async cacheImage(e) {
        try {
          return await this.cachePromoImage(e);
        } catch {
          return this.fetchImage(e);
        }
      }
      reloadCachedImages() {
        return this.cacheImagesloading
          ? new Promise((e) => {
              self.setTimeout(() => this.reloadCachedImages().then(e), 100);
            })
          : ((this.cacheImagesloading = !0),
            Promise.all([
              this.cacheImage("/img/rakuten/icon-32.png"),
              this.cacheImage("/img/rakuten/icon-32-activated.png"),
              this.cacheImage("/img/rakuten/icon-32-notactivated.png")
            ])
              .then((e) => {
                let [t, n, r] = e;
                (this.cachedAnimation = new Map()),
                  this.Images.set("neutral", t),
                  this.Images.set("activated", n),
                  this.Images.set("available", r);
              })
              .catch(() => {
                self.setTimeout(() => {
                  this.reloadCachedImages();
                }, 6e4);
              })
              .then(() => {
                this.cacheImagesloading = !1;
              }));
      }
      animate(e, t) {
        if (!this.context) return;
        let n = this.cachedAnimation.get(e);
        if ((n || ((n = new Map()), this.cachedAnimation.set(e, n)), !n.get(t))) {
          this.context.clearRect(0, 0, Ko, Yo),
            "neutral" !== e &&
              (this.context.setLineDash([0]),
              "activated" === e
                ? ((this.context.lineWidth = 2), (this.context.strokeStyle = "#4990e2"), (this.context.fillStyle = "#FFF"))
                : "available" === e &&
                  ((this.context.lineWidth = 2), (this.context.fillStyle = "#ee5051"), (this.context.strokeStyle = "#ee5051")),
              this.context.roundRect(
                16 - (t * Xo) / 2,
                16 - (t * Xo) / 2,
                t * Xo,
                t * Xo,
                { upperLeft: 4, upperRight: 4, lowerLeft: 4, lowerRight: 4 },
                !0
              ));
          try {
            this.context.drawImage(this.Images.get(e), 0, 0, Ko, Yo), n.set(t, this.context.getImageData(0, 0, Ko, Yo));
          } catch (e) {}
        }
        return { imageData: { 32: n.get(t) } };
      }
      next(e) {
        let { type: t, count: n } = e;
        if (
          (++this.animationIndex >= Qo && ((this.animationIndex = Zo), this.loopIndex++),
          n && this.loopIndex > n && this.animationIndex >= ea)
        )
          return (this.loopIndex = 0), this.stop(t);
        na(this.animate(t, this.animationIndex)), ra(Vo[t]);
      }
      play(e) {
        let { type: t, count: n = 0 } = e;
        this.stop(), ra(Vo[t]), (Jo = self.setInterval(() => this.next({ type: t, count: n }), 100));
      }
      stop(e) {
        Jo && (self.clearInterval(Jo), (Jo = null)),
          (this.animationIndex = Zo),
          (this.loopIndex = 0),
          e && (na(this.animate(e, ea)), ra(Vo[e]));
      }
      async load() {
        return await this.reloadCachedImages(), this.stop("neutral");
      }
      handlePage(e) {
        if (!self.EBATES || self.EBATES.member.isExtensionDisabled()) return void this.stop("neutral");
        if (e.name === m.browser.DOCUMENTCOMPLETE && !e.active) return;
        const t = e.url || os.active.url,
          n = e.tabId || os.active.tabId;
        if (t && t.startsWith("http") && !Wi(t)) {
          const e = self.EBATES.merchants.match(t, n);
          if (e?.isEligibleForIconAnimation()) {
            if (e.session.get("activated"))
              return void (e.session.get("notification") ? this.play({ type: "activated", count: 2 }) : this.stop("activated"));
            if (!self.EBATES.settings.affiliates.state(n).suppress) return this.play({ type: "available", count: 4 });
          }
        }
        this.stop("neutral");
      }
    }
    async function na(e) {
      if (e)
        try {
          await n().browserAction.setIcon(e);
        } catch (e) {}
    }
    function ra(e) {
      return m.ui.button.setTitle(e);
    }
    (CanvasRenderingContext2D.prototype.roundRect = function (e, t, n, r, i, s, o) {
      const a = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 };
      void 0 === o && (o = !0),
        "object" == typeof i &&
          Object.keys(i).forEach((e) => {
            Object.prototype.hasOwnProperty.call(a, e) && (a[e] = i[e]);
          }),
        this.beginPath(),
        this.moveTo(e + a.upperLeft, t),
        this.lineTo(e + n - a.upperRight, t),
        this.quadraticCurveTo(e + n, t, e + n, t + a.upperRight),
        this.lineTo(e + n, t + r - a.lowerRight),
        this.quadraticCurveTo(e + n, t + r, e + n - a.lowerRight, t + r),
        this.lineTo(e + a.lowerLeft, t + r),
        this.quadraticCurveTo(e, t + r, e, t + r - a.lowerLeft),
        this.lineTo(e, t + a.upperLeft),
        this.quadraticCurveTo(e, t, e + a.upperLeft, t),
        this.closePath(),
        o && this.stroke(),
        s && this.fill();
    }),
      "undefined" != typeof OffscreenCanvasRenderingContext2D &&
        (OffscreenCanvasRenderingContext2D.prototype.roundRect = CanvasRenderingContext2D.prototype.roundRect);
    const ia = Ki.Model.extend({ idAttribute: "storeId" }),
      sa =
        (Ki.Collection.extend({ model: ia }),
        ts.extend({ dynamic: !1, timeout: 864e5, model: ia, parse: (e) => e && e.campaigns && e.campaigns[0] && e.campaigns[0].stores })),
      oa = Ki.Collection.extend({ model: ia }),
      aa = sa.extend({ url: () => `${V(S.CAMPAIGNS)}?id=${ca}` }),
      ca = 8987,
      ua = rs.extend({
        model: ia,
        key: "recommended-myStores",
        initialize() {
          m.extension.attachEvent("myStores", (e, t) => {
            let { data: n } = e;
            const { limit: r, storeIds: i } = n;
            t(
              this.first(r, (e) => i.includes(e)).map((e) => {
                let { id: t } = e;
                return self.EBATES.merchants.get(t)?.toJSON();
              })
            );
          });
        },
        first(e, t) {
          return t
            ? this.chain()
                .filter((e) => t(e.id))
                .first(e)
                .value()
            : rs.prototype.first.call(this, e);
        }
      });
    class la {
      constructor() {
        (this.myStores = new ua()),
          this.myStores.fetch(),
          (this.predefinedStores = new aa([
            { storeId: 8333 },
            { storeId: 3993 },
            { storeId: 2946 },
            { storeId: 7206 },
            { storeId: 10634 },
            { storeId: 5246 },
            { storeId: 69 },
            { storeId: 4548 },
            { storeId: 3726 },
            { storeId: 8378 },
            { storeId: 4767 },
            { storeId: 4207 },
            { storeId: 9528 },
            { storeId: 3930 },
            { storeId: 3466 }
          ])),
          self.setInterval(() => this.process(), 108e5),
          m.extension.attachEvent("recommendedStores", async (e, t) => {
            let { data: n } = e;
            const { limit: r, storeIds: i } = n;
            t(
              (await this.sample(r, (e) => i.includes(e))).map((e) => {
                const { storeId: t, refStoreId: n } = e.toJSON(),
                  r = self.EBATES.merchants.get(t);
                return Object.assign(r.toJSON(), { refStoreId: n, refStore: n ? self.EBATES.merchants.get(n).toJSON() : null });
              })
            );
          });
      }
      prepare() {
        return Vi(V(S.SIMILAR_STORES), { dataType: "json" })
          .then((e) => {
            self.EBATES.merchants.set(e.stores, { merge: !0, silent: !0, add: !1, remove: !1 }),
              self.EBATES.member.get("accessLevel") && this.process();
          })
          .catch(() => {});
      }
      checkRequired() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return new Promise((t, n) => {
          self.EBATES.member.get("accessLevel")
            ? e
              ? t()
              : m.extension.getItem("recommended_check", (e) => {
                  !e || e + 864e5 <= Date.now() ? t() : n();
                })
            : n();
        });
      }
      process() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this.checkRequired(e)
          .then(() =>
            Promise.all([
              self.EBATES.member.purchased.fetch({ force: e }).catch(() => {}),
              self.EBATES.member.visited.fetch({ force: e }).catch(() => {}),
              self.EBATES.member.favorites.fetch({ force: e }).catch(() => {})
            ])
          )
          .then(() => {
            m.extension.setItem("recommended_check", Date.now());
            const e = new oa();
            e.add(self.EBATES.member.visited.toJSON()),
              e.length < 6 && e.add(self.EBATES.member.purchased.toJSON()),
              e.length < 6 && e.add(self.EBATES.member.favorites.toJSON()),
              e.reset(
                e.filter((e) => {
                  let { id: t } = e;
                  return self.EBATES.merchants.get(t)?.isActiveMerchant();
                })
              ),
              this.myStores.reset(e.models),
              this.myStores.save();
          })
          .catch(() => {});
      }
      getSimilarStores() {
        const e = new oa();
        return (
          this.myStores.each((t) => {
            const n = self.EBATES.merchants.get(t.id);
            n && e.add(n.get("similarStores"));
          }),
          e
        );
      }
      sample(e, t) {
        const n = new oa();
        return (
          this.myStores.find((r) => {
            const i = self.EBATES.merchants.get(r.id);
            if (i) {
              const e = (0, H.shuffle)(i.get("similarStores")).find(
                (e) =>
                  e.rank < 5 &&
                  !n.get(e.storeId) &&
                  !this.myStores.get(e.storeId) &&
                  self.EBATES.merchants.get(e.storeId)?.isActiveMerchant() &&
                  (!t || t(e.storeId))
              );
              e && ((e.refStoreId = r.id), n.add(e));
            }
            return n.length >= e;
          }),
          n.length < e &&
            n.add(
              self.EBATES.merchants.filter(
                (e) => e.get("reward") && e.isActiveMerchant() && e.get("reward").targetSet && !this.myStores.get(e.id) && (!t || t(e.id))
              )
            ),
          n.length < e
            ? this.predefinedStores
                .fetch()
                .catch(() => {})
                .then(() =>
                  n.add(
                    this.predefinedStores.shuffle().filter((e) => {
                      const n = self.EBATES.merchants.get(e.id);
                      return !this.myStores.get(e.id) && n && n.isActiveMerchant() && (!t || t(e.id));
                    })
                  )
                )
                .then(() => n.first(e))
            : Promise.resolve(n.first(e))
        );
      }
    }
    let da = Ki.Model.extend({ defaults: { badgeColor: "#EF5A4E", shown: !1 } });
    const ha = rs.extend({
      key: "overlays",
      model: da,
      initialize() {
        this.fetch().then(() => {
          let e = this.get("smart-cards");
          e && e.set({ shown: !0 });
        }),
          this.on("add remove change:shown", () => {
            let e = this.where({ shown: !1 }).length;
            EBATES.badge.update("overlay", e);
          });
      }
    });
    let fa = Yi.extend({
      idAttribute: "id",
      initialize() {
        if (this.get("expiration")) {
          const e = Math.max(this.get("expiration") - Date.now(), 1e3);
          e < 2147483647 &&
            (this.expirationTimeout = self.setInterval(() => {
              this &&
                (self.clearInterval(this.expirationTimeout),
                this.clearLinkedMessage(this.id),
                this.collection && this.collection.remove(this));
            }, e));
        }
        this.on({
          remove: function () {
            this.clearLinkedMessage(this.id), self.clearInterval(this.expirationTimeout);
          },
          error: function (e, t) {
            [401, 403].includes(t.status) && EBATES.onTokenExpired();
          }
        });
      },
      clearLinkedMessage(e) {
        let t = EBATES.member.messages.findWhere({ type: "bonus", bonus_id: e });
        t && EBATES.member.messages.remove(t);
      },
      activate() {
        return Vi(V(S.MEMBER_ACTIVATE_BONUS), { method: "POST", processData: !1, data: JSON.stringify({ bonusId: this.id }) })
          .then(() => this.collection.fetch({ force: !0 }))
          .catch(() => {});
      }
    });
    const pa = Zi.extend({
      key: "bonuses",
      model: fa,
      DEFAULT_UPDATE_INTERVAL: 864e5,
      blacklistedBonusIds: [667, 668, 669, 670, 771, 718, 719, 720, 721, 722, 772],
      blacklistedStoreIds: [],
      url: () => V(S.MEMBER_BONUSES),
      initialize() {
        return (
          this.on({
            error: function (e, t) {
              [401, 403].includes(t.status) && EBATES.onTokenExpired();
            }
          }),
          Zi.prototype.initialize.apply(this, arguments)
        );
      },
      parse(e) {
        return (0, H.filter)(
          e.bonuses,
          (e) => !(0, H.includes)(this.blacklistedBonusIds, e.id) && 0 === (0, H.intersection)(e.storeIds, this.blacklistedStoreIds).length,
          this
        );
      }
    });
    let ga = Ki.Collection.extend({}),
      ma = Ki.Model.extend({
        idAttribute: "offerId",
        activate(e) {
          return new Promise((t, n) => {
            Vi(ie(V(S.MEMBER_ISCB_LINKED), { offerId: this.id, cardId: e, store_id: this.get("store") ? this.get("store").id : null }), {
              method: "POST"
            }).then(
              () => {
                this.set({ linkedCardIds: (0, H.union)(this.get("linkedCardIds"), [e]), cardIds: (0, H.without)(this.get("cardIds"), e) }),
                  t();
              },
              () => {
                n();
              }
            );
          });
        },
        toJSON() {
          let e = (e) => {
              let t = this.collection.cardDictionary.get(e);
              return t ? t.toJSON() : null;
            },
            t = this.get("store") ? this.get("store").id : null,
            n = t ? EBATES.merchants.get(t) : null;
          return (0, H.extend)(Ki.Model.prototype.toJSON.apply(this, arguments), {
            merchant: n ? n.toJSON() : null,
            cards: (0, H.map)(this.get("cardIds"), e),
            linkedCards: (0, H.map)(this.get("linkedCardIds"), e),
            description: this.get("description") ? this.get("description").replace(/^Earn Cash Back/, "") : ""
          });
        }
      });
    const va = ts.extend({
      model: ma,
      cardDictionary: new ga(),
      url: () => V(S.MEMBER_ISCB),
      initialize() {
        m.extension.attachEvent("ISC", async (e, t) => {
          t(await this.getOffers(e.data));
        }),
          m.extension.attachEvent("ISC-activate", async (e, t) => {
            t(await this.activateOffer(e.data));
          });
      },
      async getOffers(e) {
        let { name: t } = e;
        if (EBATES.member.get("accessLevel")) {
          await this.fetch();
          let e = this.find((e) => e.get("store").name.toLowerCase() === t.toLowerCase());
          return e?.toJSON();
        }
        return null;
      },
      async activateOffer(e) {
        let { offerId: t, cardId: n } = e;
        const r = this.get(t);
        if (r)
          try {
            return await r.activate(n), { offer: r.toJSON(), cardId: n };
          } catch (e) {
            return { error: "Oops. We weren't able to enable this card for In-Store Cash Back. Please try again later", cardId: n };
          }
      },
      parse(e) {
        return this.cardDictionary.reset(e.cardDictionary), (0, H.filter)(e.offers, (e) => !e.dateLinked);
      }
    });
    function ba(e) {
      return Number.isFinite(e) ? Math.round(100 * e) / 100 : 0;
    }
    class ya extends Ms {
      _id = "abandoned-products";
      UPDATE_INTERVAL = 18e5;
      latestApiCall = "";
      products = { filtered: [], suppressed: [] };
      reminder = new wa();
      get url() {
        const e = 24 * self.EBATES.settings.featureFlags.variation("cartAbandonmentInterval", 14) * 60 * 60 * 1e3,
          t = new Date(Date.now() - e).toISOString(),
          n = ie(V(S.ABANDONED_PRODUCTS), { from_timestamp: t, get_full_product: !0, remove_qualifications: !0 });
        return (this.latestApiCall = n), n;
      }
      constructor() {
        super(),
          this.on("sync", () => {
            self.EBATES.settings.featureFlags.variation("myCartTab") &&
              !self.EBATES.settings.userSettings.get("myCartTab") &&
              this.getData()?.length &&
              self.EBATES.settings.userSettings.save({ myCartTab: !0 });
          }),
          m.extension.attachEvent("hasAbandonedProducts", async () => {
            try {
              const e = await this.load();
              return e?.length > 0;
            } catch {
              return !1;
            }
          }),
          m.extension.attachEvent("getAllAbandonedProducts", async () => {
            try {
              const e = await this.load();
              return await this.updateMerchants(e), this.sortByTimestamp(e);
            } catch {
              return [];
            }
          });
      }
      sortByTimestamp() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).sort(
          (e, t) => t.abandonedTimestamp - e.abandonedTimestamp
        );
      }
      async updateMerchants(e) {
        if (e && Array.isArray(e)) {
          const t = (0, H.uniq)(e.map((e) => e.merchant.storeId));
          await self.EBATES.merchants.rates.default.fetch((0, H.uniq)(t)),
            e.forEach((e) => {
              const t = self.EBATES.merchants.get(Number(e.merchant.storeId))?.toJSON();
              e.merchant = (0, H.pick)(t, "storeId", "storeName", "reward", "affiliatizerEnabled", "offers_cb", "images");
            });
        }
      }
      async getCache() {
        return this.getData() || (await Ns.get(this._id)) || [];
      }
      parse(e) {
        const t = (e) => (0 === e?.search(/^https:\/\//) ? e : "");
        return e.data
          .map((e) => {
            const n = e.product_data;
            if (!n) return null;
            const r = e.product_data_at_abandonment.fillr_product_data,
              i = e.product_data_at_abandonment.rakuten_product_data,
              s = Number(e.store_id);
            let o = self.EBATES.merchants.get(s);
            if (!o || !o.isButtonMerchant()) return null;
            o = o.toJSON();
            const a = i?.cash_back_rate_during_abandonment ? i?.cash_back_rate_during_abandonment[0]?.reward : null,
              c = parseFloat(n.list_price),
              u = parseFloat(n.sale_price);
            return {
              id: e.product_id,
              title: n.title,
              brandName: n.brand_name,
              listPrice: c,
              salePrice: u,
              discount: ba(c - u),
              category_ids: i.category_ids,
              category_id: i.category_id,
              imageUrl: ((l = n.image_url), l?.replace(/(\.jpe?g)/, "-152x152$1") || t(i.image_url)),
              productUrl: r.product_url,
              abandonedTimestamp: new Date(e.assumed_abandoned_timestamp).getTime(),
              eligibleForCashBack: n.eligible_for_cash_back,
              previous_ca_tracking_ticket: e.shopping_trip_id,
              merchant: (0, H.pick)(o, "storeId", "storeName", "reward", "affiliatizerEnabled", "offers_cb", "images"),
              isSuppressed: !1,
              ...(a && { previousReward: { amount: a.display_amount, display: a.display_type } })
            };
            var l;
          })
          .filter(Boolean);
      }
    }
    class wa {
      _id = "abandoned-products-reminder";
      domains = [];
      eligibleDomains = [];
      cache = {};
      maxDailyShowingCount = 5;
      timeoutAfterDisplay = 1800;
      periodAfterAbandonment = 3600;
      constructor() {
        Ns.get(this._id).then((e) => {
          e && (this.cache = e), this.cleanUpDiscardedProducts();
        }),
          m.extension.attachEvent("getReminderProduct", async () => {
            if (!self.EBATES.settings.featureFlags.variation("cartAbandonment") || !self.EBATES.member.id) return {};
            const e = self.EBATES.settings.featureFlags;
            if (
              ((this.maxDailyShowingCount = e.variation("cartAbandonmentToastMaxDailyShowingCount", this.maxDailyShowingCount)),
              (this.timeoutAfterDisplay = e.variation("cartAbandonmentToastTimeoutAfterDisplay", this.timeoutAfterDisplay)),
              (this.periodAfterAbandonment = e.variation("cartAbandonmentToastPeriodAfterAbandonment", this.periodAfterAbandonment)),
              await this.isEligibleForShow())
            ) {
              const e = await this.getProducts(),
                { showingCounters: t } = this.cache || (await Ns.get(this._id)) || {};
              return { product: e[0], showingCounters: t };
            }
            return {};
          }),
          m.extension.attachEvent("getProductsPostPurchase", async () => {
            if (!self.EBATES.settings.featureFlags.variation("cartAbandonment") || !self.EBATES.member.id) return [];
            try {
              let e = await self.EBATES.member.abandonedProducts.load();
              return (
                await self.EBATES.member.abandonedProducts.updateMerchants(e),
                self.EBATES.member.abandonedProducts.sortByTimestamp(e),
                await this.cleanUpDiscardedProducts(),
                (e = await this.filterDiscardedProducts(e)),
                e
              );
            } catch {
              return [];
            }
          }),
          m.extension.attachEvent("discardProduct", async (e) => {
            let { data: t } = e,
              { discardedProducts: n } = this.cache || (await Ns.get(this._id)) || {};
            (n = n || {}), n[t.productId] || (n[t.productId] = { timestamp: Date.now() }), this.saveCache({ discardedProducts: n });
          }),
          m.extension.attachEvent("updateShowingInfo", async (e) => {
            let { data: t } = e,
              { showingCount: n, lastShowingTimestamp: r, showingCounters: i } = this.cache || (await Ns.get(this._id)) || {};
            (n = te()().format("DD/MM/YYYY") !== te()(r).format("DD/MM/YYYY") ? 1 : (n || 0) + 1), (i = i || {});
            const s = i[t.type] || 0;
            (i[t.type] = (s + 1) % 3), this.saveCache({ showingCount: n, showingCounters: i, lastShowingTimestamp: Date.now() });
          });
      }
      saveCache(e) {
        (this.cache = { ...this.cache, ...e }), Ns.set(this._id, this.cache);
      }
      async cleanUpDiscardedProducts() {
        const e = 24 * self.EBATES.settings.featureFlags.variation("cartAbandonmentInterval", 14) * 60 * 60 * 1e3;
        let { discardedProducts: t } = this.cache || (await Ns.get(this._id)) || {};
        t = t || {};
        let n = !1;
        for (const r in t) t[r].timestamp < Date.now() - e && (delete t[r], (n = !0));
        n && this.saveCache({ discardedProducts: t });
      }
      async getProducts() {
        const e = (await self.EBATES.member.abandonedProducts.getCache().catch(() => {})) || [],
          t = (0, H.uniq)(e, (e) => e.merchant.storeId).map((e) => e.merchant.storeId);
        await self.EBATES.merchants.rates.default.fetch(t);
        const n = (await self.EBATES.member.abandonedProducts.load().catch(() => {})) || [];
        if (Array.isArray(e) && Array.isArray(n)) {
          const t = this.getProductsWithSavings(e, n);
          await this.cleanUpDiscardedProducts();
          let r = t.filter((e) => {
            let { merchant: t, eligibleForCashBack: n } = e;
            return t.offers_cb && n;
          });
          return (
            (r = await this.filterDiscardedProducts(r)),
            (r = this.filterByPeriod(r, 1e3 * this.periodAfterAbandonment)),
            r.sort((e, t) => (e.savingsAmount > t.savingsAmount ? -1 : 1)),
            r
          );
        }
        return [];
      }
      calcSavingsAmount(e) {
        const t = e.merchant.reward,
          n = !t || (t.range && t.amount) ? 0 : Do(t, e.salePrice);
        e.cashBackAmount = ba(n);
        const r = t ? Do(t, e.salePrice) : 0;
        e.cashBackAmountTiered = ba(r);
        let i = 0;
        return (
          e.oldPrice && (i = parseFloat(e.oldPrice) - parseFloat(e.salePrice) || 0),
          (e.priceSavings = ba(i)),
          (e.savingsAmount = ba(e.cashBackAmount + e.priceSavings)),
          e
        );
      }
      async filterDiscardedProducts(e) {
        const { discardedProducts: t } = this.cache || (await Ns.get(this._id)) || {};
        return e.filter((e) => {
          let { id: n } = e;
          return !t?.[n];
        });
      }
      filterByPeriod(e, t) {
        const n = Date.now() - t;
        return e.filter((e) => {
          let { abandonedTimestamp: t } = e;
          return t < n;
        });
      }
      getProductsWithSavings(e, t) {
        return t
          .map((t) => {
            const n = { ...t };
            let r = !1;
            t.salePrice < t.listPrice && ((n.oldPrice = t.listPrice), (r = !0));
            const i = e.find((e) => {
              let { id: n } = e;
              return n === t.id;
            });
            if (i) {
              const e = self.EBATES.merchants.get(t.merchant.storeId)?.getReward();
              if ((e && n.previousReward && oe(e, n.previousReward) > 0 && (r = !0), (t.merchant.reward = e), t.salePrice < i.salePrice)) {
                i.salePrice - t.salePrice > t.listPrice - t.salePrice && ((n.oldPrice = i.salePrice), (r = !0));
              }
            }
            return r ? this.calcSavingsAmount(n) : null;
          })
          .filter(Boolean);
      }
      async isEligibleForShow() {
        const { showingCount: e = 0, lastShowingTimestamp: t = 0 } = this.cache || (await Ns.get(this._id)) || {};
        if (Date.now() - t < 1e3 * this.timeoutAfterDisplay) return !1;
        const n = te()().format("DD/MM/YYYY");
        return !(te()(t).format("DD/MM/YYYY") === n && e >= this.maxDailyShowingCount);
      }
      async isEligibleDomain(e) {
        const t = ae(e);
        if (!t) return !1;
        if (
          (this.domains.length || (this.domains = (await o.e(614).then(o.t.bind(o, 3856, 19))).default),
          this.domains.some((e) => ae(e) === t))
        ) {
          if (
            (await self.EBATES.settings.priceMagic.domains.load()).find((e) => {
              let { domainName: n } = e;
              return n === t;
            })
          )
            return !1;
          const e = self.EBATES.merchants.domains.findWhere({ topDomain: t });
          return !e || !self.EBATES.merchants.get(e.get("storeId"))?.isButtonMerchant();
        }
        return !1;
      }
    }
    function Ea(e, t) {
      return e.indexOf("[link]") >= 0 ? e.replace("[link]", t) : `${e} ${t}`;
    }
    const xa =
        "Have you signed up with Rakuten yet? It's the best site for earning Cash Back. Get a $10 bonus when you sign up with my invite link and spend $25. It's free! [link]",
      Aa = ns.extend({
        timeout: 108e5,
        defaults: {
          referBonusAmount: "$$$",
          referImageToolbar: "/toolbar/images/taf_toolbar.png",
          referImageToolbar2x: "/toolbar/images/taf_toolbar@2x.png",
          referSocialMessage: "",
          redeemThresholdAmount: "$30"
        },
        url: () => V(S.MEMBER_TAF),
        initialize() {
          m.extension.attachEvent("getTafSettings", async (e, t) => {
            let { data: n = {} } = e;
            const { force: r = !1 } = n;
            EbatesPromise.then(async () => {
              try {
                await this.fetch({ force: r });
              } finally {
                t(this.toJSON());
              }
            });
          });
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return ns.prototype.initialize.apply(this, t);
        },
        toJSON() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = ns.prototype.toJSON.apply(this, t);
          return (
            (r.referPageHeader = `Get ${r.referBonusAmount}`), self.devicePixelRatio > 1 && (r.referImageToolbar = r.referImageToolbar2x), r
          );
        },
        async getTwitterMessage(e, t, n, r) {
          const i = this.get("referBonusAmount").replace("+", ""),
            s = this.get("redeemThresholdAmount");
          if (t === F && self.EBATES.settings.featureFlags.variation("rafStoreShare", !0))
            return `I\u2019m saving money with Rakuten and didn\u2019t want you to miss out. You can get Cash Back at ${n.storeName} and over 3,700 other stores. Use my personal invite link to earn a ${i} bonus after you join and spend ${s}.*\n\n${e}`;
          if (t === q && self.EBATES.settings.featureFlags.variation("rafProductPage", !0) && r)
            return `Get ${$s(n.reward)} Cash Back on ${r} at ${
              n.storeName
            }! Join Rakuten with my invite link and you'll also get ${i} when you spend ${s}: ${e}`;
          await this.fetch();
          let o = xa;
          const a = this.get("referSocialMessage");
          return a && a.indexOf("|") >= 0 ? (o = a.split("|")[1]) : a && (o = a), Ea(o, e);
        },
        async getEmailMessage(e, t, n, r) {
          const i = this.get("referBonusAmount").replace("+", ""),
            s = this.get("redeemThresholdAmount");
          if (t === F && self.EBATES.settings.featureFlags.variation("rafStoreShare", !0)) {
            return {
              subject: `Get Cash Back at ${n.storeName} (thank me later!)`,
              message: `Hey there,\n\nI\u2019m saving money with Rakuten and didn\u2019t want you to miss out. You can get Cash Back at ${n.storeName} and over 3,700 other stores.\n\n\nUse my personal invite link to earn a ${i} bonus after you join and spend ${s}.* You can thank me later!\n\n\n${e}\n\n`
            };
          }
          if (t === q && self.EBATES.settings.featureFlags.variation("rafProductPage", !0) && r) {
            return {
              subject: `Check this out! Get ${$s(n.reward)} Cash Back on this item`,
              message: `Hey there,\n\nI saw the ${r} at ${n.storeName} and thought you\u2019d want to get it with ${$s(
                n.reward
              )} Cash Back.\n\t\t\t\nJoin Rakuten with my invite link and you\u2019ll also get ${i} when you spend ${s}:\n\n${e}\n\n`
            };
          }
          await this.fetch();
          let o = "Check this out: Get Cash Back for shopping!",
            a = xa;
          const c = this.get("referEmailMessage");
          if (c?.indexOf("|") >= 0) {
            const e = c.split("|");
            (o = e.shift()), (a = e.join("\n"));
          }
          return (a = Ea(a, e)), { subject: o, message: a };
        }
      });
    async function Sa(e) {
      try {
        const t = await Vi(V(S.URL_SHORTENER), {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json", "Client-Agent": "button" },
          body: JSON.stringify({ url: e })
        });
        return t?.data?.url_path ?? null;
      } catch {
        return null;
      }
    }
    const Ta = "BLOCKED";
    let _a = ts.extend({ key: "trackingtickets", url: () => V(S.MEMBER_TICKETS), parse: (e) => (0, H.flatten)(e.tickets) }),
      ka = Qs.extend({
        url: () => V(S.DEALS),
        comparator(e) {
          let t = EBATES.member.favorites.get(e.get("storeId"));
          return t
            ? (e.set({ section: "favorite" }), EBATES.member.favorites.indexOf(EBATES.member.favorites.get(e.get("storeId"))))
            : ((t = EBATES.member.purchased.get(e.get("storeId"))),
              t
                ? (e.set({ section: "purchased" }), EBATES.member.favorites.length + EBATES.member.purchased.indexOf(t))
                : ((t = EBATES.member.visited.get(e.get("storeId"))),
                  t
                    ? (e.set({ section: "visited" }),
                      EBATES.member.favorites.length + EBATES.member.purchased.length + EBATES.member.visited.indexOf(t))
                    : (e.unset("section"),
                      EBATES.member.favorites.length +
                        EBATES.member.purchased.length +
                        EBATES.member.visited.length +
                        e.collection.indexOf(e))));
        },
        fetch() {
          return Promise.all([
            EBATES.member.favorites.fetch(),
            EBATES.member.get("accessLevel") ? EBATES.member.purchased.fetch() : null,
            EBATES.member.visited.fetch()
          ])
            .catch(() => {})
            .then(() => Qs.prototype.fetch.apply(this, arguments));
        }
      }),
      Ia = Hi().Model.extend({ idAttribute: "storeId" }),
      Ca = Xs.extend({
        model: Ia,
        url: () => V(S.MEMBER_FAVORITES),
        parse: (e) =>
          (0, H.chain)(e.favorites)
            .map((e) => (e.id && !e.storeId && (e.storeId = e.id), delete e.id, e))
            .flatten()
            .value()
      }),
      Oa = Xs.extend({
        model: Ia,
        url: () => V(S.MEMBER_VISITED),
        parse: (e) =>
          (0, H.chain)(e.stores)
            .map((e) => (e.id && !e.storeId && (e.storeId = e.id), delete e.id, e))
            .flatten()
            .value()
      }),
      Ba = Xs.extend({ model: Ia, url: () => V(S.MEMBER_PURCHASED), parse: (e) => e.stores }),
      Na = is.extend({
        key: "account",
        initialize() {
          this.on({
            "change:pendingAmount change:paidAmount": function () {
              const e = this.get("pendingAmount"),
                t = this.get("paidAmount");
              Number.isFinite(e) && Number.isFinite(t) && this.set({ totalAmount: e + t });
            },
            "change:totalAmount": function (e) {
              const t = e.get("totalAmount"),
                n = e.previous("totalAmount");
              Number.isFinite(n) &&
                Number.isFinite(t) &&
                t > n &&
                EBATES.member.trackingtickets
                  .fetch()
                  .catch()
                  .then(() => {
                    const e = EBATES.member.trackingtickets.find(
                      (e) => e.has("memberReward") && e.get("memberReward").amount && parseFloat(e.get("memberReward").amount)
                    );
                    e &&
                      e.get("storeId") &&
                      !EBATES.member.messages.find(
                        (t) => t.get("memberReward") && t.get("memberReward").amount === e.get("memberReward").amount
                      ) &&
                      (EBATES.merchants && EBATES.merchants.length ? this.addMessage(e) : setTimeout(() => this.addMessage(e), 2e3));
                  });
            }
          }),
            this.trigger("change:pendingAmount");
        },
        addMessage(e) {
          const t = EBATES.merchants.get(e.get("storeId"));
          t &&
            t.get("storeName") &&
            EBATES.member.messages.add(
              (0, H.extend)(e.pick("memberReward", "storeId"), {
                desktop: !!EBATES.settings.userSettings.get("desktopNotifications").cashBack,
                popup: !0,
                title: `$${e.get("memberReward").amount} just added!`,
                text: `You just earned $${e.get("memberReward").amount} Cash Back from your purchase at ${t.get("storeName")}! `,
                type: "cashback",
                url: V("/pending-cash-back.htm?tb=yes&eeid=26117"),
                cta: "See Cash Back Activity",
                entity: "Cash Back Added"
              })
            );
        }
      }),
      Pa = Qi.extend({
        key: "geogating",
        dynamic: !1,
        UPDATE_INTERVAL: 108e5,
        defaults: { gatingStatus: "UNRESTRICTED" },
        url: () => V(S.MEMBER_GEOGATING),
        async initialize() {
          return (
            await this.readCache({ silent: !0, cache: !0 }),
            this.isBlocked() && this.switchToBlockedState(),
            this.on({
              "change:gatingStatus": async (e) => {
                const t = e.get("gatingStatus");
                e.previous("gatingStatus") === Ta && t !== Ta
                  ? (EBATES.settings.userSettings.toggleLogging(),
                    Li.track("Change Gating Status", { country_code: e.get("countryCode"), gating_status: e.get("gatingStatus") }),
                    EBATES.settings.userSettings.save({ gatingStatusBadge: !0 }),
                    await this.switchToNormalState())
                  : e.previous("gatingStatus") !== Ta &&
                    t === Ta &&
                    (Li.track("Change Gating Status", { country_code: e.get("countryCode"), gating_status: e.get("gatingStatus") }),
                    EBATES.settings.userSettings.save({ gatingStatusBadge: !0 })),
                  t === Ta && this.switchToBlockedState(),
                  EBATES.badge.update();
              }
            }),
            Qi.prototype.initialize.apply(this, arguments)
          );
        },
        switchToBlockedState() {
          m.ui.button.setPopup(),
            m.ui.button.attachEvent(m.ui.button.CLICK, this.openGatingWebpageUrl),
            EBATES.settings.userSettings.toggleLogging();
        },
        async switchToNormalState() {
          m.ui.button.detachEvent(m.ui.button.CLICK, this.openGatingWebpageUrl),
            (await EBATES.validateUserToken()) && m.ui.button.setPopup({ url: "./popup/popup.html" });
        },
        isBlocked() {
          return this.get("gatingStatus") === Ta;
        },
        isEnabled: () => EBATES.settings.featureFlags.variation("geogating", !1),
        parse: (e) => e.data,
        openGatingWebpageUrl() {
          const e = EBATES.member.geogating.get("gatingWebpageUrl") || V(S.BASE);
          EBATES.settings.userSettings.get("gatingStatusBadge") &&
            (EBATES.settings.userSettings.save({ gatingStatusBadge: !1 }), EBATES.badge.update()),
            Li.track("Visit Page", { preceding_screen_name: "Icon", url: e }, null, { force: !0 }),
            m.browser.navigate(e);
        }
      });
    const Da = ns.extend({ idAttribute: "member_guid", url: () => V(S.EDS), parse: (e) => e._source });
    let Ra = Qi.extend({
      key: "activity",
      ERROR_UPDATE_INTERVAL: 36e5,
      UPDATE_INTERVAL: 108e5,
      url: () => V(S.MEMBER_ACTIVITY),
      setUpUpdate(e) {
        (0, H.isNumber)(e) &&
          e >= 6e4 &&
          ((this.UPDATE_INTERVAL = e), EBATES.ebToken && (m.extension.setItem(`${this.key}.nextUpdateTime`, Date.now() + e), this.fetch()));
      },
      parse: (e) => e.member
    });
    const Ma = ns.extend({
      url: () => V(S.MEMBER_DETAILS),
      defaults: { rakutenMode: !0 },
      initialize() {
        (this.overlays = new ha()),
          (this.bonuses = new pa()),
          (this.trackingtickets = new _a()),
          (this.favorites = new Ca()),
          (this.visited = new Oa()),
          (this.purchased = new Ba()),
          (this.topDeals = new ka()),
          (this.accountSummary = new Na()),
          (this.geogating = new Pa()),
          (this.eds = new Da()),
          (this.messages = new Ao()),
          (this.activity = new Ra()),
          (this.iscb = new va()),
          (this.recommended = new la()),
          (this.tafSettings = new Aa()),
          (this.abandonedProducts = new ya()),
          this.accountSummary.fetch().catch(() => {}),
          this.on({
            change: function (e, t) {
              t.unset && (this.nextUpdateTime = 0), (this.hasChanged("id") || this.hasChanged("userStatus")) && this.identify();
            },
            "change:targetSet": function (e) {
              e.previous("targetSet") && this.activity.clearCache();
            },
            "change:accessLevel": function (e, t) {
              0 === t
                ? (this.bonuses.stop(), this.activity.stop())
                : (EBATES.merchants.ready().then(() => {
                    this.bonuses.fetch().catch(() => {});
                  }),
                  this.activity.fetch({ silent: !0 }));
            },
            "change:id": function () {
              this.id
                ? this.previous("id") &&
                  (Promise.all([
                    this.activity.fetch({ reset: !0, silent: !0 }),
                    this.bonuses.fetch({ reset: !0 }),
                    this.geogating.isEnabled() && this.geogating.fetch({ reset: !0 }),
                    this.eds.fetch({ reset: !0 })
                  ]).catch(() => {}),
                  this.iscb.stop(),
                  this.favorites.stop(),
                  this.visited.stop(),
                  this.purchased.stop(),
                  this.messages.reset(),
                  this.trackingtickets.reset(),
                  this.recommended.process({ force: !0 }),
                  EBATES.settings.userSettings.unset("tcppId"),
                  EBATES.settings.userSettings.save(),
                  EBATES.member.abandonedProducts.clearCache())
                : this.bonuses.stop();
            },
            error: function (e, t) {
              [401, 403].includes(t.status) && EBATES.onTokenExpired();
            },
            "change:gdprCertificationStatus change:isHardDeleteRequested": (e) => {
              if (EBATES)
                if ((EBATES.settings.userSettings.toggleLogging(), EBATES.badge.update(), EBATES.member.isExtensionDisabled()))
                  EBATES.merchants.stop(), EBATES.merchants.reset();
                else {
                  let t = Object.keys(e.previousAttributes());
                  (t.includes("gdprCertificationStatus") || t.includes("isHardDeleteRequested")) && EBATES.merchants.fetch();
                }
            },
            "change:shortUrl": (e, t) => {
              this.set({ refId: t.split("/")?.pop() });
            },
            "change:isDoNotShareActive": () => {
              EBATES && EBATES.settings.userSettings.toggleLogging();
            }
          }),
          this.listenTo(this.activity, {
            sync: (e) => {
              this.set(e.toJSON());
            },
            "change:lastOrderDate": async (e) => {
              e.previous("lastOrderDate") && ((this.nextUpdateTime = 0), this.fetch());
            }
          }),
          m.extension.attachEvent("account-eds", (e, t) => {
            Promise.all([this.fetch(), this.eds.fetch()])
              .then(() => t(this.toJSON()))
              .catch(() => {});
          }),
          m.extension.attachEvent("account", (e, t) => {
            let { data: n } = e;
            EbatesPromise.then(() => {
              self.EBATES?.ebToken ? (n ? (this.set(n), t(this.toJSON())) : this.getAccount().then((e) => t(e))) : t();
            });
          }),
          m.extension.attachEvent("member.updateEEAMode", async (e) => {
            await this.updateEEAMode(e.data);
          }),
          m.extension.attachEvent("member.updateTCPP", async (e) => {
            await this.updateTCPP(e.data);
          }),
          m.extension.attachEvent("urlShortener", async (e) => {
            let { data: t } = e;
            return (await Sa(t?.url)) ?? t?.url;
          }),
          m.extension.attachEvent("createReferralLink", (e) => {
            let { data: t } = e;
            return this.createReferralLink(t?.siteUrl);
          }),
          m.extension.attachEvent("createShareLink", (e) => {
            let { data: t } = e;
            return this.createShareLink(t?.merchant, t?.productTitle, t?.productUrl);
          }),
          m.extension.attachEvent("topDeals", async (e) => {
            let { data: t } = e;
            await this.topDeals.fetch();
            return this.topDeals
              .toJSON()
              .map((e, n) => {
                if (e) {
                  let r = EBATES.merchants.get(e.storeId).toJSON();
                  if (r && r.offers_cb && r.shoppingURL && r.activationCode > 0 && e.storeId !== t.storeId) return (e.coupon_rank = n), e;
                }
              })
              .filter(Boolean);
          }),
          m.extension.attachEvent("messages", async (e) => {
            let { data: t } = e;
            if (t && t.created) {
              const { created: e, ...n } = t,
                r = this.messages.find((t) => t.get("created") === e);
              r && r.set(n);
            } else await this.messages.flush();
            return this.messages.toJSON();
          }),
          m.extension.attachEvent("share", async (e) => {
            let {
              data: { method: t, source: n, merchant: r, productTitle: i, productUrl: s }
            } = e;
            return this.share(t, n, r, i, s);
          }),
          m.extension.attachEvent("updateAttestationState", (e) => {
            let { data: t } = e;
            this.updateAttestationState(t.state)
              .then(() => this.toJSON())
              .catch(() => null);
          }),
          m.extension.attachEvent("overlays", (e) => {
            let { data: t } = e;
            return t && t.id && (this.overlays.set(t), this.overlays.save()), this.overlays.toJSON();
          });
      },
      identify() {
        if (this.id) {
          const e = this.get("shortURLToken"),
            t = this.get("userStatus"),
            n = EBATES.tests.getExperiments(),
            r = EBATES.settings.installedExtensions?.getInstalledExtensions().toString() || "";
          return (
            (Li.userId = this.id),
            ji.setMember(this.id),
            Li.identify(this.id, { referral_token: e, user_status: t, installed_extensions: r, ...n })
          );
        }
      },
      async fetch(e) {
        if (!EBATES.ebToken) throw new Error("User is not logged in");
        await ns.prototype.fetch.apply(this, arguments),
          this.get("accessLevel") && (await Promise.all([this.geogating.isEnabled() ? this.geogating.fetch(e) : null]));
      },
      parse(e, t) {
        if (
          (this.accountSummary.save(
            (0, H.reduce)(e.accountSummary, (e, t, n) => ((e[n] = Number.isFinite(parseFloat(t)) ? parseFloat(t) : t), e), {})
          ),
          t && t.headers)
        ) {
          let n = t.headers.get("ResponseLevel");
          n && (e.accessLevel = parseInt(n, 10));
        }
        return (
          delete e.accountSummary, (0, H.defaults)(e, { gdprCertificationStatus: "", targetSet: "", personalizationSet: "", tcpp: null })
        );
      },
      toJSON() {
        return {
          ...ns.prototype.toJSON.apply(this, arguments),
          ebToken: EBATES.ebToken,
          accountSummary: this.accountSummary.toJSON(),
          tafSettings: this.tafSettings.toJSON(),
          geogating: this.geogating?.toJSON(),
          eds: this.eds.toJSON(),
          isAttestationEligible: this.isAttestationEligible(),
          isEEAMode: this.isEEAMode(),
          isPendingDeletion: this.isPendingDeletion(),
          isExtensionDisabled: this.isExtensionDisabled()
        };
      },
      updateEEAMode(e) {
        return Vi(V(S.MEMBER_UDPATE_ATTRIBUTE), {
          method: "POST",
          contentType: "application/json",
          processData: !1,
          dataType: "json",
          body: JSON.stringify({ updateType: "gdpr-certification", updateKey: "eeaResidentStatus", updateValue: e })
        }).then(() => {
          this.set({ gdprCertificationStatus: "true" === e ? "certified-yes" : "certified-no" });
        });
      },
      updateAttestationState(e) {
        return Vi(V(S.MEMBER_UDPATE_ATTRIBUTE), {
          method: "POST",
          contentType: "application/json",
          processData: !1,
          dataType: "json",
          timeout: 1e4,
          body: JSON.stringify({ updateType: "attestation", updateKey: "attestedState", updateValue: e })
        })
          .then(() => new Promise((e) => setTimeout(e, 1e3)))
          .then(() => this.fetch({ force: !0 }))
          .catch(() => {
            if ((this.errorAttempt || (this.errorAttempt = 0), this.errorAttempt > 0))
              throw ((this.errorAttempt = 0), new Error("Error Update Attestation State"));
            return this.errorAttempt++, this.updateAttestationState(e);
          });
      },
      isEEAMode() {
        return ["certified-yes", "not-certified"].includes(this.get("gdprCertificationStatus"));
      },
      isAttestationEligible() {
        return (
          "certified-yes" === this.get("attestationStatus") ||
          ("not-certified" === this.get("attestationStatus") && this.get("regulatedStateRes"))
        );
      },
      isPendingDeletion() {
        return !0 === this.get("isHardDeleteRequested");
      },
      isGatingStatusBlocked() {
        return this.geogating?.isBlocked() && this.geogating.isEnabled();
      },
      isExtensionDisabled() {
        return this.isEEAMode() || this.isPendingDeletion() || this.isGatingStatusBlocked();
      },
      updateTCPP(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        e &&
          (this.unset("tcpp"),
          EBATES.settings.userSettings.save({ tcppId: e.tcppId }),
          Vi(V(S.MEMBER_UDPATE_TCPP), {
            method: "POST",
            contentType: "application/json",
            body: JSON.stringify({ tcppId: e.tcppId, tcppTypeId: e.type_id, acceptedDate: new Date().toISOString(), deviceInfo: "button" })
          }).catch((n) => {
            400 !== n.status && t < 10 && setTimeout(() => this.updateTCPP(e, t + 1), 3e5);
          }));
      },
      getDomain: () => S.domain,
      createShareLink(e, t, n) {
        const { siteUrl: r, storeId: i } = e;
        return ie(V(`${S.BASE}/${r}_${i}-xfas`), { eeid: 61593, ref_id: this.get("refId"), product_title: t, product_url: n });
      },
      createReferralLink(e) {
        const t = this.get("shortUrl"),
          n = this.get("refId");
        return e && n && EBATES.settings.featureFlags.variation("rafStorePage", !0) ? V(`${S.BASE}/store/${e}?ref_id=${n}`) : t;
      },
      getCashBackDetails: (e) => ({ store_name: e.storeName, store_id: e.storeId, ...Ks(e.reward) }),
      async share(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const s = this.get("shortURLToken");
        let o = this.createReferralLink(n?.siteUrl),
          a = { Email: 45829, Copy: 45830, Facebook: 45831, Twitter: 45832 }[e];
        t === F ? (a = 57122) : t === q && (a = 61593);
        const c = ie(o, { eeid: a }),
          u = n ? this.getCashBackDetails(n) : null;
        if (
          (Li.track("Start Refer A Friend", {
            share_method: e,
            eeid: a,
            source: t,
            referral_token: s,
            type: (this.get("hasReferral") && this.accountSummary.get("paidAndApprovedReferralAmount") ? "has" : "never") + " referred",
            ...u
          }),
          "Facebook" === e)
        ) {
          Y({
            url: ie("https://www.facebook.com/dialog/share?", {
              display: m.browser.isSafari ? "page" : "popup",
              app_id: 0xc2ee9ccb8e0a,
              href: c,
              redirect_uri: V("/toolbar/taf/success.htm")
            }),
            width: 550,
            height: 650
          });
        } else if ("Twitter" === e) {
          let e = c;
          if (t === q) {
            const t = await this.createShareLink(n, r, i);
            e = (await Sa(t)) ?? c;
          }
          Y({
            url: ie("https://twitter.com/intent/tweet?", { text: await this.tafSettings.getTwitterMessage(e, t, n, r) }),
            width: 550,
            height: 400
          });
        } else if ("Email" === e) {
          let e = c;
          if (t === q) {
            const t = await this.createShareLink(n, r, i);
            e = (await Sa(t)) ?? t;
          }
          let { subject: s, message: o } = await this.tafSettings.getEmailMessage(e, t, n, r);
          const a = `mailto:?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(o)}`;
          m.browser.navigate(a);
        } else if ("Copy" !== e) throw new Error("Unknown share method");
      },
      async getAccount() {
        try {
          await this.fetch();
        } catch (e) {}
        return this.toJSON();
      }
    });
    async function La() {
      m.extension.attachEvent("SurfaceVisitedData", function e(t) {
        let { tabId: n, data: i } = t;
        n === r && (ji.track("Surface Visited", i), m.extension.detachEvent("SurfaceVisitedData", e));
      });
      const e = await Q(S.domain, "extension-install-source").catch(() => ""),
        { url: t, tabId: r } = await (async function (e) {
          let t;
          if (/(?:step2|EB-Test1\d{2,}A)/.test(e)) {
            t = V("https://%domain%?sourceName=toolbar&eeid=45426&toolbarId=%userid");
            return {
              url: t,
              tabId: (
                await m.browser.navigate({ url: t, tabId: m.browser.NEWTAB }, (e) => {
                  let { id: t } = e;
                  setTimeout(() => m.extension.fireEvent("welcome", { tabId: t }), 2500);
                })
              ).id
            };
          }
          return (t = V(S.WEB_INSTALL)), { url: t, tabId: (await m.browser.navigate(t)).id };
        })(e),
        i = await (async function () {
          try {
            const e = "JSESSIONID";
            return (
              (await Q(S.domain, e)) ||
              new Promise((t) => {
                function r(s) {
                  let { cookie: o } = s;
                  o.domain === S.domain &&
                    o.name === e &&
                    o.value &&
                    (clearTimeout(i), n().cookies.onChanged.removeListener(r), t(o.value));
                }
                n().cookies.onChanged.addListener(r);
                let i = setTimeout(() => {
                  n().cookies.onChanged.removeListener(r), t("");
                }, 8e3);
              })
            );
          } catch (e) {
            return "";
          }
        })(),
        s = await new Promise((e) => {
          chrome?.instanceID?.getID ? chrome.instanceID.getID(e) : e(null);
        });
      m.browser.isWebkit &&
        n()
          .windows.getAll({ populate: !0 })
          .then((e) => {
            e.forEach((e) => {
              e.tabs.forEach((e) => {
                let { id: t, url: r } = e;
                r.includes(V("%domain/button-landing/")) && n().tabs.update(t, { url: r });
              });
            });
          }),
        Li.track("Install Application", { attribution_source: e, desktop_session_id: i, url: t, instanceId: s });
    }
    class ja {
      constructor() {
        m.extension.attachEvent("GrouponDealsCollection", (e) => {
          let { data: t } = e;
          return this.search(t);
        });
      }
      async search(e) {
        let { query: t, location: n, limit: r } = e;
        try {
          if (!t || !n) return null;
          const e = {
              query: t,
              limit: r || 100,
              show: "id,dealUrl,announcementTitle,title,options,merchant,grid4ImageUrl",
              other_deals: !0,
              locale: "en_US",
              offset: 0,
              metadata: !1,
              client_id: "0c9926ce2479a25adec0c9b3c1e6327c73946fe7",
              tsToken: "US_AFF_0_200014_200067_0",
              secure_assets: !1,
              lng: n.lng,
              lat: n.lat
            },
            i = await fetch(`https://api.groupon.com/v2/deals/search?${new URLSearchParams(e)}`),
            s = await i.json();
          return this.parse(s);
        } catch (e) {
          return null;
        }
      }
      parse(e) {
        const t = self.EBATES.settings.get("groupon").exclusions || [],
          n = e.deals.filter((e) => e.title.indexOf("Cash Back") < 0);
        return (0, H.map)(n, (e) =>
          (0, H.extend)(
            {
              locations: (0, H.flatten)(
                (0, H.map)(e.options, (e) =>
                  (0, H.map)(e.redemptionLocations, (e) =>
                    t.includes(e.uuid) ? null : (0, H.pick)(e, "streetAddress1", "city", "state", "postalCode", "phoneNumber")
                  ).filter(Boolean)
                )
              )
            },
            (0, H.pick)(e, "id", "dealUrl", "announcementTitle", "title", "grid4ImageUrl", "options"),
            (0, H.pick)(e.merchant, "name", "websiteUrl")
          )
        );
      }
    }
    const Ua = new Map();
    function $a(e) {
      Li.track("CAA", e);
    }
    function Fa(e) {
      const t = Ua.get(e);
      t && (clearTimeout(t.timeoutId), Ua.delete(e), m.browser.detachEvent(m.browser.TABCLOSED, qa));
    }
    function qa(e) {
      let { tabId: t } = e;
      const n = Ua.get(t);
      n && ($a({ coupon_auto_apply_status: "Terminated", ...n.event }), Fa(t));
    }
    class Ha {
      constructor() {
        m.extension.attachEvent("log.caa", (e) => {
          let { data: t, tabId: n } = e;
          const { action: r, event: i } = t,
            { coupon_auto_apply_status: s, ...o } = i;
          if (($a(i), "start" === r)) {
            const e = o.available_coupons ? o.available_coupons.split(", ").length : 0;
            if (e > 0) {
              const t = setTimeout(
                () =>
                  (function (e) {
                    let { tabId: t } = e;
                    const n = Ua.get(t);
                    n && ($a({ coupon_auto_apply_status: "Timeout", ...n.event }), Fa(t));
                  })({ tabId: n }),
                30 * e * 1e3
              );
              Ua.set(n, { event: o, timeoutId: t }), m.browser.attachEvent(m.browser.TABCLOSED, qa);
            }
          } else ["success", "error", "cancel"].includes(r) && Fa(n);
        });
      }
    }
    class Wa {
      runAt = "document_idle";
      scripts = [];
      constructor(e) {
        let { settings: t, merchant: n, url: r, tabId: i } = e;
        (this.settings = t), (this.merchant = n), (this.url = r), (this.tabId = i);
      }
    }
    class za extends Wa {
      name = O;
      isActive() {
        return Wi(this.url);
      }
      async init() {}
      getParameters() {
        return {};
      }
    }
    class Ga extends Wa {
      name = C;
      grouponSettings = {};
      scripts = ["./content/groupon/bundle.js"];
      async init() {
        (this.grouponSettings = this.settings.groupon),
          (this.grouponViewKey = Object.keys(this.grouponSettings).find((e) => {
            const t = this.grouponSettings[e];
            return !!(t.enable && t.rx && new RegExp(t.rx).test(this.url));
          }));
      }
      isActive() {
        return this.grouponViewKey;
      }
      getParameters() {
        return { grouponViewKey: this.grouponViewKey, config: this.grouponSettings[this.grouponViewKey] };
      }
    }
    class Va extends Wa {
      name = B;
      config = null;
      async init() {
        const e = this.settings.iscb;
        if (e)
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) {
              const n = e[t];
              if (new RegExp(n.url).test(this.url))
                return (
                  n.category || ((n.category = `ISCB ${t.replace(/-/g, " ")}`), (n.entity_name = t.replace(/-/g, " "))),
                  void (this.config = n)
                );
            }
      }
      isActive() {
        return !!this.config;
      }
      getParameters() {
        return { config: this.config };
      }
    }
    class Ja extends Wa {
      name = I;
      async init() {
        this.merchant?.caaProgress && (this.runAt = "document_start");
      }
      isActive() {
        return !!this.merchant;
      }
      getParameters() {
        return { merchant: this.merchant };
      }
    }
    class Ka extends Wa {
      abandonedReminderActive = !1;
      name = N;
      scripts = ["./content/price-magic/bundle.js"];
      async init() {
        if (!self.EBATES.settings.featureFlags.variation("pmEnabled", !0)) return;
        const e = new URL(this.url).host;
        if (
          !(
            this.merchant &&
            (this.merchant.offers_cb ||
              this.merchant.pmDisabled ||
              (this.merchant.suppressed && this.merchant.competitor && this.settings.standDownDomains?.includes(this.merchant.competitor)))
          )
        ) {
          const t = this.settings.priceMagic,
            n = await self.EBATES.settings.priceMagic.domains.load();
          t.excludedDomains.find((t) => e.search(t) >= 0) ||
            (this.config = n.find((t) => {
              let { domainName: n } = t;
              return e.search(n) >= 0;
            })),
            self.EBATES.settings.featureFlags.variation("cartAbandonmentToast", !1) &&
              self.EBATES.settings.userSettings.get("abandonedProductsReminder") &&
              (await self.EBATES.member.abandonedProducts.reminder.isEligibleDomain(e)) &&
              (this.abandonedReminderActive = !0);
        }
      }
      isActive() {
        return !!this.config;
      }
      getParameters() {
        return { merchant: this.merchant, config: this.config, abandonedReminderActive: this.abandonedReminderActive };
      }
    }
    class Ya extends Wa {
      name = P;
      async init() {
        const e = self.EBATES.settings.interstitials.toJSON();
        this.interstitial = e.find((e) => {
          let { matchPattern: t } = e;
          return this.url.search(t) >= 0;
        });
      }
      isActive() {
        return !!this.interstitial;
      }
      getParameters() {
        return { interstitial: this.interstitial };
      }
    }
    class Xa extends Wa {
      name = D;
      config = null;
      async init() {
        const e = await self.EBATES.settings.productParsers.getConfigs();
        this.config = e.find((e) => e.url && new RegExp(e.url).test(this.url));
      }
      isActive() {
        return !!this.config;
      }
      getParameters() {
        return { merchant: this.merchant, config: this.config };
      }
    }
    class Za extends Wa {
      name = R;
      config = null;
      async init() {
        const e = self.EBATES.settings.featureFlags.variation("customSerp", !1)
            ? await self.EBATES.settings.customSerp.load()
            : this.settings.serp,
          t = new URL(this.url).host;
        this.config = e.find((e) => {
          let { domain: n } = e;
          return t.includes(n);
        });
      }
      isActive() {
        return !!this.settings.serpEnabled && !!this.config;
      }
      getParameters() {
        return { config: this.config };
      }
    }
    class Qa extends Wa {
      name = M;
      getPromo(e) {
        const t = this.settings;
        if (t.promos) {
          const n = (0, H.findWhere)(t.promos, { id: e, active: !0 });
          if (n) return n;
        }
      }
      async init() {
        this.promo = this.getPromo("taxes");
      }
      isActive() {
        return this.promo?.urls?.find((e) => this.url.search(e) >= 0);
      }
      getParameters() {
        return { taxes_promo: this.promo };
      }
    }
    class ec extends Wa {
      name = L;
      timestamp = null;
      isActive() {
        return Wi(this.url) && self.EBATES.settings.installedExtensions && (!this.timestamp || this.timestamp + 864e5 <= Date.now());
      }
      async init() {
        this.timestamp = await m.extension.getItem("installed_extensions_check");
      }
      getParameters() {
        return { extensions: self.EBATES.settings.installedExtensions.extensions };
      }
    }
    const tc = "Started",
      nc = "Finished",
      rc = "./commons/bundle.js";
    class ic extends Ds() {
      scriptsExecutionStatus = new Map();
      constructor(t) {
        let { settings: n, merchant: r, url: i, tabId: s } = t;
        super(),
          (this.settings = n),
          (this.merchant = r),
          (this.url = i),
          (this.tabId = s),
          (this.contentFeatures = Object.values(e).map((e) => new e(this)));
      }
      get isBlacklisted() {
        return (
          Array.isArray(this.settings.contentBlackList) &&
          this.settings.contentBlackList.some((e) => {
            const t = e && new RegExp(e);
            return t && t.test(this.url);
          })
        );
      }
      async injectContentScripts(e) {
        if (this.isBlacklisted) return !1;
        await os.executeScript(this.tabId, rc, e), await os.executeScript(this.tabId, "./content/bundle.js", e);
        const t = os.get(this.tabId)?.scripts;
        return !!t?.includes(rc);
      }
      async process() {
        await Promise.allSettled(this.contentFeatures.map((e) => e.init()));
        const e = this.contentFeatures.filter((e) => e.isActive());
        if (e.length) {
          const t = e.some((e) => "document_start" === e.runAt) ? "document_start" : "document_idle";
          if (!(await this.injectContentScripts(t))) return;
          await m.extension.fireEvent("contentSettings", { tabId: this.tabId, data: { settings: this.settings } });
          for (const t of e) this.execute(t);
        }
      }
      async execute(e) {
        await Promise.all(
          e.scripts.map(async (t) => {
            this.scriptsExecutionStatus.get(t)
              ? this.scriptsExecutionStatus.get(t) === tc && (await new Promise((e) => this.once(`${nc}:${t}`, e)))
              : (this.scriptsExecutionStatus.set(t, tc),
                await os.executeScript(this.tabId, t, e.runAt),
                this.scriptsExecutionStatus.set(t, nc),
                this.emit(`${nc}:${t}`));
          })
        ),
          m.extension.fireEvent("execute", { tabId: this.tabId, data: { ...e.getParameters(), method: e.name } });
      }
    }
    class sc {
      page = null;
      constructor() {
        m.extension.attachEvent("executeScript", async (e, t) => {
          let { tabId: n, data: r } = e;
          await os.executeScript(n, r, "document_idle"), t(null);
        });
      }
      invalidateMerchants = (0, H.throttle)(async function () {
        if (self.EBATES.settings.featureFlags.variation("feedGenMerchants", !1))
          try {
            await self.EBATES.merchants.fetch();
          } catch (e) {}
      }, 1e3);
      async processPage(e) {
        let { url: t, tabId: n } = e;
        if (self.EBATES.member.isExtensionDisabled() || !ae(t)) return;
        const r = self.EBATES.settings.toJSON();
        await this.invalidateMerchants();
        const i = await self.EBATES.merchants.getMerchant({ url: t, tabId: n });
        return (this.page = new ic({ settings: r, url: t, tabId: n, merchant: i })), this.page.process();
      }
    }
    const oc = "(gift card|e-?mail delivery)";
    class ac {
      _promise = null;
      constructor() {
        m.extension.attachEvent("getGiftCardStore", async (e) => {
          let { data: t } = e;
          const { product: n, link: r } = t;
          let i = null;
          return n ? (i = await this.getGiftCardStoreByProduct(n)) : r && (i = await this.getGiftCardStoreByDomain(r)), i;
        });
      }
      async save() {
        (this.date = Date.now()), await Ns.set("gift-cards", { date: this.date, stores: this.stores });
      }
      async get() {
        return (
          this._promise ||
            (this._promise = new Promise((e) => {
              this.getStores().then(() => {
                (this._promise = null), e(null);
              });
            })),
          this._promise
        );
      }
      async getStores() {
        if (!this.stores) {
          const { date: e, stores: t } = (await Ns.get("gift-cards")) || {};
          (this.stores = t), (this.date = e);
        }
        return (!this.stores || !this.date || this.date < Date.now() - 3e5) && (await this.fetch()), Promise.resolve();
      }
      async fetch() {
        const e = self.EBATES.merchants.get(18907);
        if (!e) return;
        const t = await Vi(_, {
            data: { name: "button_gcm_v1", variables: JSON.stringify({ storeIds: [String(18907)] }) },
            headers: { "X-Platform": j[k] }
          }),
          n = (e) =>
            e
              ?.trim()
              .toLowerCase()
              .replace(/['/]| and | & /g, ""),
          r = e?.get("patterns") || [];
        (this.stores = t.data.stores[0].tiers.map((e) => {
          const t = r.find((t) => {
            let { storeId: n } = t;
            return n === e.storeId;
          });
          return (
            t && ((e.pattern = n(t.pattern)), (e.domain = t.domain)),
            (e.name = n(e.name)),
            (e.reward.range = e.range ? { high: e.amount } : null),
            e
          );
        })),
          this.save();
      }
      async getGiftCardStoreByDomain(e) {
        let { domain: t, href: n } = e;
        await this.get();
        const r = this.stores?.filter((e) => {
          if (e.domain) return n.replace(/^https?:\/\/www\./, "").match(e.domain);
          const r = e.name
            .trim()
            .toLowerCase()
            .replace(/[-&.\s]/g, "");
          return t.match(`^${r}\\.`);
        });
        return r?.sort((e, t) => (e.domain?.length < t.domain?.length ? 1 : -1))[0];
      }
      async getGiftCardStoreByProduct(e) {
        await this.get();
        const t = this.stores?.find((t) => {
          const n = t.name;
          return !!(
            e.brandName.includes(n) ||
            new RegExp(`${n}.*${oc}`, "i").test(e.title) ||
            (t.pattern && (e.brandName.search(t.pattern) >= 0 || new RegExp(`${t.pattern}.*${oc}`, "i").test(e.title)))
          );
        });
        return t;
      }
    }
    const cc = 9e5;
    class uc {
      sessions = new Map();
      disabled = !1;
      constructor(e) {
        let { host: t, key: n } = e;
        (this.host = t),
          (this.key = n),
          m.extension.attachEvent("flushImmerseSession", (e) => {
            let {
              data: { storeId: t }
            } = e;
            self.EBATES && this.sessions.has(t) && this.flush(t);
          });
      }
      isStoreEligible(e) {
        if (self.EBATES.settings.featureFlags.variation("immerseAllStores", !0)) return !0;
        {
          const t = self.EBATES.settings.promos.get("immerse");
          if (t && t.get("active") && t.campaigns) {
            return !!t.campaigns.find((t) => {
              let { stores: n } = t;
              return n.get(e);
            });
          }
        }
        return !1;
      }
      isEnabled() {
        return !this.disabled && self.EBATES.settings.featureFlags.variation("immerse", !0);
      }
      sessionTimeout(e) {
        this.flush(e);
      }
      start(e) {
        if (!this.isEnabled()) return;
        const t = e.get("storeId");
        if (this.isStoreEligible(t) && !this.sessions.has(t)) {
          let n = null;
          (n = self.setTimeout(this.sessionTimeout.bind(this), cc, t)),
            this.sessions.set(t, {
              storeName: e.get("storeName"),
              ttn: e.session.shoppingTrip.get("ttn"),
              storeId: t,
              timeoutId: n,
              content: []
            });
        }
      }
      async stop(e) {
        const t = e.get("storeId"),
          n = this.sessions.get(t);
        n && (await this.send(n), this.sessions.delete(t), n.timeoutId && clearTimeout(n.timeoutId));
      }
      async visit(e, t) {
        if (!this.isEnabled()) return;
        const n = e.get("storeId"),
          r = this.sessions.get(n),
          i = e.session.get("activated") || e.session.get("suppressed");
        if (i || !r) {
          if (r && i) {
            const i = e.session.shoppingTrip.get("ttn");
            i !== r.ttn && (await this.flush(n), (r.ttn = i)),
              r.content.push({ timestamp: new Date().toISOString(), url: ne(t) }),
              r.content.length >= 10 && (await this.flush(n)),
              this.sessions.set(n, r);
          }
        } else this.stop(e);
      }
      async flush(e) {
        const t = this.sessions.get(e);
        if (t) {
          await this.send(t), (t.content.length = 0);
          let n = null;
          t.timeoutId && (clearTimeout(t.timeoutId), (n = self.setTimeout(this.sessionTimeout.bind(this), cc, e))), (t.timeoutId = n);
        }
      }
      async send(e) {
        if (!this.isEnabled() || 0 === e.content.length) return;
        const t = {
            content: e.content,
            store_name: e.storeName,
            store_id: e.storeId.toString(),
            user_agent: navigator.userAgent,
            source_name: "toolbar",
            shopping_trip_id: e.ttn,
            rr_member_guid: self.EBATES.member.id
          },
          n = await W(JSON.stringify(t));
        return Vi(V(this.host), {
          method: "POST",
          headers: { "Content-Type": "application/json", "Content-Encoding": "gzip", "X-Api-Key": this.key },
          body: n
        });
      }
    }
    function lc() {
      const e = {};
      m.extension.attachEvent("CaptureOrderPage", (t) => {
        let { url: n, tabId: r, data: i } = t;
        if (e[r] && e[r] === n) return;
        const s = self.EBATES.member.isExtensionDisabled(),
          { logging: o } = self.EBATES.settings.toJSON();
        if ("opt_out" === o || "pending" === o || s) return;
        e[r] = n;
        const { storeName: a, storeId: c, shoppingTrip: u } = i.merchant;
        (u?.ttn ||
          self.EBATES.settings.promos.get("commercecapture-incrementality")?.campaigns?.find((e) => {
            let { stores: t } = e;
            return t.get(c);
          })) &&
          (async function (e) {
            const t = await W(JSON.stringify(e));
            Vi(V(S.CAPTURE_ORDER), {
              method: "POST",
              headers: { "Content-Type": "application/json", "Content-Encoding": "gzip" },
              body: t
            });
          })({
            tenant_id: 1,
            source_name: "toolbar",
            store_name: a,
            store_id: c,
            shopping_trip_id: u.ttn,
            rr_member_id: self.EBATES.member.id,
            content_source: n,
            content_type: "order confirmation",
            content_format: "html",
            client_type: m.browser.name.toLowerCase(),
            client_version: m.extension.version,
            content: i.content,
            load_time: i.load_time,
            javascript_error: i.javascript_error
          });
      });
      const t = (t) => {
        let { url: n, tabId: r } = t;
        e[r] && n !== e[r] && delete e[r];
      };
      m.browser.attachEvent(m.browser.DOCUMENTCOMPLETE, t), m.browser.attachEvent(m.browser.TABCLOSED, t);
    }
    function dc() {
      const e = new Map(),
        t = (t) => {
          e.has(t) && (e.get(t).timeout && self.clearTimeout(e.get(t).timeout), e.delete(t));
        };
      function r(e) {
        let { tab: t, reason: n } = e;
        if (!t) return;
        const r = t.storeId,
          i = self.EBATES.merchants.get(r),
          s = i?.session.shoppingTrip.getCurrentState(),
          o = {
            store_id: r,
            redirect_chain: t.urls.toString(),
            reason: n,
            ...(s ? { activation_type: s.type, attribution_source_previous_click: s.source, tracking_ticket: s.ttn } : {})
          };
        Li.track("Interstitial Failure", o), Pi.logger.warn("InterstitialStatus", o);
      }
      function i(n, i) {
        r({ tab: e.get(n), reason: i }), t(n);
      }
      m.browser.attachEvent(m.browser.TABCLOSED, (e) => {
        let { tabId: t } = e;
        i(t, "closed tab");
      });
      m.browser.attachEvent(m.browser.NAVIGATIONCOMMITTED, (n) => {
        let { tabId: i, url: s } = n;
        const o = ((e) => {
          const t = /\/\/[-\w]*\.(?:ebates|rakuten)\.com\/.*?(\d+)-xfas(?:\?.*sourceName=([\w-]*))?/.exec(e);
          if (t && t[1] && self.EBATES) {
            const n = self.EBATES.merchants.get(parseInt(t[1], 10));
            if (n) return { storeId: n.id, location_flag: n.session.shoppingTrip.get("source") || t[2] || "", urls: [e] };
          }
          return null;
        })(s);
        if (o) {
          const t = self.setTimeout(() => {
            r({ tab: e.get(i), reason: "timed out" });
          }, 3e4);
          e.set(i, { ...o, timeout: t });
        } else if (e.has(i)) {
          const n = self.EBATES.merchants.match(s, i);
          if (n && n.id === e.get(i).storeId) t(i);
          else {
            e.get(i).urls.push(s);
          }
        }
      }),
        n().webNavigation.onCommitted.addListener((e) => {
          if ("reload" === e.transitionType) {
            const { tabId: t } = e;
            i(t, "reload tab");
          }
        });
    }
    function hc(e, t) {
      return !!t && (!e || (t.storesIn && t.storesIn.includes(e)) || (!t.storesIn?.length && t.storesNotIn && !t.storesNotIn.includes(e)));
    }
    const fc = 9e5;
    class pc extends Ms {
      constructor(e) {
        let { slugName: t, fieldSet: n = "events" } = e;
        super(),
          (this._id = t),
          (this.fieldSet = n),
          (this.duration = fc),
          self.EbatesPromise.then(() => {
            (this.duration = self.EBATES.settings.featureFlags.variation("feedTimelineUpdateInterval", fc)),
              self.EBATES.settings.featureFlags.on("change:feedTimelineUpdateInterval", (e) => {
                this.duration = e;
              });
          });
      }
      get url() {
        return ie(`${T}/feedapi/v3/timeline`, { slugName: this._id, duration: Math.floor(this.duration / 1e3), fieldSet: this.fieldSet });
      }
      get headers() {
        const e = self.EBATES?.feed?.previewToken;
        return {
          Authorization: `ebtoken ${self.EBATES?.ebToken}`,
          "Client-Agent": j[k].toLowerCase(),
          "X-Platform": j[k],
          "X-Anonymous-ID": self.EBATES?.toolbarId?.toString() ?? "",
          "X-Web-Host": "",
          ...(e && { "X-Preview-Token": e })
        };
      }
      set duration(e) {
        Number.isFinite(e) && e > 1e3 && (this.UPDATE_INTERVAL = e);
      }
      get duration() {
        return this.UPDATE_INTERVAL;
      }
      isDomainActive(e, t) {
        const { events: n } = this.getData(),
          r = Math.floor(Date.now() / 1e3),
          i = n
            .filter((n) => {
              let { event: r } = n;
              return r.domainId === e && hc(t, r);
            })
            .sort((e, t) => e.timestamp - t.timestamp);
        return i.reduce((e, t) => {
          let { event: n, timestamp: i } = t;
          return i <= r && (["running", "start"].includes(n.action) ? (e = !0) : "expire" === n.action && (e = !1)), e;
        }, !1);
      }
      async getUniqueDomainIds(e) {
        const { events: t } = await this.load();
        return [
          ...new Set(
            t
              .filter((t) => {
                let { event: n } = t;
                return hc(e, n);
              })
              .map((e) => {
                let { event: t } = e;
                return t.domainId;
              })
          )
        ];
      }
      async getActiveDomains(e) {
        try {
          return (await this.getUniqueDomainIds(e)).filter((t) => this.isDomainActive(t, e));
        } catch {
          return [];
        }
      }
      async hasActiveDomains(e) {
        try {
          return (await this.getUniqueDomainIds(e)).some((t) => this.isDomainActive(t, e));
        } catch {
          return !1;
        }
      }
      async visitDomains(e) {
        Ns.set(`${this._id}/visited`, e);
      }
      parse(e) {
        return e.data?.viewer?.timeline;
      }
    }
    const gc = { url: "https://preview-www.rakuten.com/", domain: "preview-www.rakuten.com", name: "previewToken" };
    class mc {
      #e = "button/feed/badge";
      timelines = new Map();
      constructor(e) {
        (this.timelines = e),
          m.extension.attachEvent("feed:visitDomains", async () => {
            const { url: e, tabId: n } = os.active,
              r = await this.getActiveDomains(e, n),
              i = (await Ns.get(this.#e)) || [];
            await Ns.set(this.#e, r.concat(i).splice(0, 1e3)), t(os.active);
          });
        const t = async (e) => {
          let { url: t, tabId: n } = e;
          if (self.EBATES && !self.EBATES.member.isExtensionDisabled() && self.EBATES.feed.enabled) {
            const e = await this.getActiveDomains(t, n);
            if (e?.length) {
              const t = (await Ns.get(this.#e)) || [],
                n = (0, H.without)(e, ...t);
              return void self.EBATES.badge.update("feed", n.length);
            }
          }
          self.EBATES.badge.update("feed", 0);
        };
        m.browser.attachEvent(m.browser.DOCUMENTCOMPLETE, t), m.browser.attachEvent(m.browser.TABCHANGED, t);
      }
      async getActiveDomains(e, t) {
        const n = self.EBATES.merchants.match(e, t);
        let r;
        return (
          (r =
            n && n.isActiveButtonMerchant()
              ? await this.timelines.get(U)?.getActiveDomains(n.id.toString())
              : await this.timelines.get($)?.getActiveDomains()),
          r
        );
      }
      reset() {
        Ns.delete(this.#e);
      }
    }
    class vc {
      previewToken = null;
      timelines = new Map([
        [$, new pc({ slugName: $ })],
        [U, new pc({ slugName: U })]
      ]);
      constructor() {
        (this.feedBadge = new mc(this.timelines)),
          m.extension.attachEvent("feed:fetch", async (e) => {
            let { data: t } = e;
            if (!this.enabled) return null;
            return await this.fetch(t);
          }),
          m.extension.attachEvent("feed:exitPreviewMode", async () => {
            await n().cookies.remove({ url: gc.url, name: gc.name }),
              m.extension.fireEvent("feed:closePreviewMode", { tabId: m.browser.ALLTABS });
          }),
          n().cookies.onChanged.addListener((e) => {
            let { cookie: t, removed: n } = e;
            t.domain === gc.domain && t.name === gc.name && (this.previewToken = n ? null : t.value);
          }),
          this.getPreviewToken().then((e) => (this.previewToken = e));
      }
      get enabled() {
        return self.EBATES?.settings.featureFlags.variation("feed", !0);
      }
      async getPreviewToken() {
        const e = await n().cookies.get({ url: gc.url, name: gc.name });
        return e?.value || null;
      }
      parse(e) {
        const t = e?.data?.viewer?.feed;
        return t?.topics?.edges?.length > 0 ? { pages: [t], pageParams: [null] } : null;
      }
      async fetch(e) {
        let { slugName: t, timelineSlugName: n, storeId: r } = e;
        const i = self.EBATES.settings.featureFlags,
          s = i.variation("feedPreview", !0);
        if (((s && !this.previewToken) || !s) && n && i.variation("feed", !0) && i.variation("feedTimeline", !0))
          if ((this.timelines.has(n) || this.timelines.set(n, new pc({ slugName: n })), r)) {
            if (!(await this.timelines.get(n)?.hasActiveDomains(r.toString()))) return null;
          } else {
            if (!(await this.timelines.get(n)?.hasActiveDomains())) return null;
          }
        const o = await Vi(`${T}/feedapi/v1/feed`, {
          data: { slugName: t, size: "", cursor: "" },
          headers: {
            Authorization: `ebtoken ${self.EBATES?.ebToken}`,
            "Client-Agent": j[k].toLowerCase(),
            "X-Platform": j[k],
            "X-Anonymous-ID": self.EBATES?.toolbarId,
            "X-Web-Host": "",
            ...(this.previewToken && { "X-Preview-Token": this.previewToken })
          }
        });
        return this.parse(o);
      }
    }
    let bc,
      yc = !1;
    m.browser.isChrome &&
      n().runtime.onInstalled.addListener((e) => {
        "install" === e.reason && (yc = !0);
      });
    class wc {
      toolbarId = null;
      ebToken = null;
      trackingTicketNumber = null;
      sessionReward = null;
      installVersion = null;
      session_competition = null;
      constructor(e) {
        (this.ebToken = e),
          (this.contentRunner = new sc()),
          dc(),
          lc(),
          (this.badge = new $i()),
          (this.fillr = new Ui()),
          (this.merchants = new uo());
        let t = null;
        if (e) {
          t = K(e).mId;
        }
        (this.member = new Ma({ id: t })),
          (this.settings = new Go()),
          (this.icon = new ta()),
          (this.grouponDealsCollection = new ja()),
          (this.logCoupons = new Ha()),
          (this.immerseSessions = new uc({
            host: "https://immerse.onereceipt.com/api/1.0/immerse",
            key: "92e14077-2d12-4429-b580-f658e0fc04bf"
          })),
          (this.feed = new vc()),
          m.extension.attachEvent("openOptionsPage", () => {
            m.ui.settings.open();
          }),
          n().alarms.onAlarm.addListener((e) => {
            "Ping" === e.name && bc.ping();
          }),
          n().alarms.create("Ping", { periodInMinutes: 60 }),
          m.extension.attachEvent("ebToken", (e) => {
            let { data: t } = e;
            return this.onTokenChanged(t);
          }),
          m.browser.attachEvent(m.browser.DOCUMENTCOMPLETE, (e) => {
            let { url: t } = e;
            return this.handleDocumentComplete(t);
          }),
          m.browser.attachEvent(m.browser.NAVIGATIONCOMMITTED, (e) => {
            this.merchants.processDocumentComplete(e), this.contentRunner.processPage(e);
          }),
          m.extension.attachEvent("xfas", (e) => this.handleXfas(e)),
          m.extension.attachEvent("browserInfo", (e) => {
            let { data: t } = e;
            m.extension.setItem("browser_info", t);
          }),
          this.checkUserTypingAddressBar();
      }
      get loggedIn() {
        return !!this.ebToken;
      }
      checkUserTypingAddressBar() {
        n().webNavigation &&
          n().webNavigation.onCommitted.addListener((e) => {
            const { tabId: t, url: n } = e;
            "typed" === e.transitionType && 0 !== n.search(/https?:\/\/\w+\.rakuten\.com\//) && this.settings.affiliates.clear(t);
          });
      }
      async initMembers() {
        (this.tests = new Fi()), (this.giftCard = new ac());
        try {
          await this.tests.init();
        } catch (e) {}
        return !0;
      }
      async validateUserToken() {
        let e = "";
        return (
          this.ebToken
            ? (e = this.ebToken)
            : ((e = await Q(S.domain, "euid")), e && ((this.ebToken = e), m.extension.setItem("ebToken", e))),
          e
        );
      }
      async init(e) {
        try {
          await this.settings.load(), await this.settings.fetch();
        } catch (e) {}
        if (await this.validateUserToken()) {
          this.member.isGatingStatusBlocked() ||
            (m.ui.button.detachEvent(m.ui.button.CLICK, Ec), m.ui.button.setPopup({ url: "./popup/popup.html" }));
          try {
            await this.member.fetch(e);
          } catch (e) {}
          this.member.isExtensionDisabled() || this.merchants.fetch().catch(() => {}), this.ping();
        } else this.merchants.fetch().catch(() => {}), m.ui.button.setPopup(), m.ui.button.attachEvent(m.ui.button.CLICK, Ec);
        this.settings.userSettings.toggleLogging(), this.setUninstallURL();
      }
      async handleXfas(e) {
        let { shoppingURL: t, storeURL: n, wid: r, sessionAttributes: i, campaignId: s, tabId: o, eeid: a, channel: c } = e.data;
        const u = se(t, {
          response: "json",
          store_url: n,
          sourceName: r || "toolbar",
          tracking_campaign_id: s,
          channel: c || k,
          eeid: a || 23509,
          tb_v: m.extension.version,
          ebtoken: this.ebToken ?? ""
        });
        if (o === m.browser.NEWTAB) {
          o = (await m.browser.navigate({ url: "about:blank", tabId: m.browser.NEWTAB })).id;
        } else o = e.tabId;
        this.settings.affiliates.match(u, o);
        const l = await fetch(u),
          d = (await l.json()).ticket[0];
        if (d && d.storeId) {
          const e = d.trackingNumber.replace(/\D/g, "");
          this.settings.affiliates.activations.addParameters(o, { trackingTicketNumber: e });
          this.merchants.get(d.storeId).session.shoppingTrip.addPendingAttribute({ type: "silent", ...i }),
            await m.browser.navigate({ tabId: o, url: d.link[0]["@href"].replace(/wid=.*?&/, `wid=${r}&`) });
        }
      }
      handleDocumentComplete(e) {
        e &&
          /^http.*(?:rakuten|ebates)\.(?:com|int)\//.test(e) &&
          n()
            .cookies.get({ url: e, name: "euid" })
            .then((e) => {
              e && this.onTokenChanged(e.value);
            });
        const t = ae(e) || "";
        this.settings.get("competitorDomains").includes(t) &&
          t !== this.session_competition?.domain &&
          ((this.session_competition = { url: e, domain: t }), Li.track("Visit Competitor Page", { url: e, domain: t }));
      }
      async ping() {
        const e = await m.extension.getItem("ga_usage"),
          t = new Date(parseInt(e || 0, 10)),
          n = new Date();
        if (n.toDateString() !== t.toDateString()) {
          m.extension.setItem("ga_usage", n.getTime().toString());
          const e = await m.extension.getItem("browser_info");
          Li.track("Heartbeat Application", e ? { browser_info: e } : {});
        }
      }
      onTokenExpired() {
        this.member.set({ accessLevel: 0 });
      }
      onTokenChanged(e) {
        if (e && e !== this.ebToken) {
          const t = K(e);
          if (t) {
            const n = this.ebToken && K(this.ebToken);
            if (n && n.llt && n.mId && !t.llt && t.mId === n.mId) return;
            (this.ebToken = e),
              m.extension.setItem("ebToken", this.ebToken),
              (this.member.nextUpdateTime = 0),
              t.mId !== n?.mId && (Pi.logger.info("login", t), this.init({ reset: !0 }));
          }
        }
      }
      setUninstallURL() {
        new Promise((e, t) => {
          n().management && n().management.getSelf
            ? n()
                .management.getSelf()
                .then((n) => {
                  "normal" === n.installType ? e() : t();
                })
            : e();
        })
          .then(() => {
            if (n().runtime.setUninstallURL) {
              const e = bc.settings.installedExtensions?.getInstalledExtensions().toString(),
                t = ie(V(S.WEB_UNINSTALL), { ext: e });
              n().runtime.setUninstallURL(t);
            }
          })
          .catch(() => {});
      }
      set(e, t) {
        m.extension.setItem(e, t);
      }
    }
    function Ec(e) {
      let { data: t = {}, name: n } = e,
        r = m.browser.NEWTAB,
        i = "";
      "getLogonForm" === t.name
        ? (i = V(S.WEB_LOGON_FORM))
        : ((i = V(S.WEB_LOGIN)),
          t.merchant && t.merchant.storeId && ((i += `&merchant_id=${t.merchant.storeId}`), (r = t.tabId ?? m.browser.CURRENTTAB))),
        Li.track("Visit Page", {
          preceding_screen_name: t.preceding_screen_name || "ButtonClick" === n ? "Icon" : "Hover",
          url: i,
          type: t.type
        }),
        m.browser.navigate({ url: i, tabId: r });
    }
    (self.EbatesPromise = new Promise((e) => {
      m.extension.getItem(["toolbarId", "domain", "api", "member_api", "installVersion", "currentVersion", "uiid"], function (t) {
        t.domain && (S.domain = t.domain),
          t.api && (S.api = t.api),
          t.member_api && (S.member_api = t.member_api),
          t.uiid || ((t.uiid = A()), m.extension.setItem("uiid", t.uiid)),
          (Li.segmentAnalytics.anonymousId = t.uiid);
        let r = 0,
          i = null;
        t.toolbarId
          ? ((r = t.toolbarId),
            Li.segmentAnalytics.set({ toolbarid: r }),
            (i = t.installVersion || "4.0.0.0"),
            t.currentVersion !== m.extension.version &&
              (Li.track("Update Application"), m.extension.setItem("currentVersion", m.extension.version)))
          : (m.browser.isChrome || (yc = !0),
            (r = Math.floor(1e9 * Math.random())),
            (i = m.extension.version),
            m.extension.setItem("toolbarId", r),
            m.extension.setItem("installVersion", m.extension.version),
            m.extension.setItem("currentVersion", m.extension.version),
            m.extension.setItem("notification-explanation", 0),
            Li.segmentAnalytics.set({ toolbarid: r })),
          Pi.addLoggerGlobalContext("button", { toolbarId: r, version: m.extension.version, installVersion: i }),
          m.extension
            .getItem("ebToken")
            .then((e) => e || Q(S.member_api, "euid"))
            .catch(() => null)
            .then((e) => {
              (bc = self.EBATES = new wc(e)), (bc.toolbarId = r), (bc.installVersion = i);
            })
            .then(() => bc.initMembers())
            .then(async () => {
              await bc.init();
            })
            .catch(() => {})
            .then(() => {
              e(bc), n().cookies.set({ domain: "rakuten.com", url: V(S.BASE), name: "toolbarId", value: r.toString() }), yc && La();
            });
      });
    })),
      m.extension.attachEvent("login", Ec),
      m.extension.attachEvent("encodeImageURI", async function (e) {
        let { data: t, url: n } = e;
        const r = self.EBATES?.settings.featureFlags.variation("encodeImageDomains")?.domains,
          i = ae(n) || "";
        if (r && r.includes(i)) {
          const e = (e) =>
            fetch(e)
              .then((e) => e.blob())
              .then(
                (e) =>
                  new Promise((t, n) => {
                    const r = new FileReader();
                    (r.onloadend = () => t(r.result)), (r.onerror = n), r.readAsDataURL(e);
                  })
              );
          try {
            const n = await e(t);
            return 0 !== n.indexOf("data:text/plain;base64") ? n : null;
          } catch {
            return null;
          }
        }
        return t;
      });
    const xc = new Map();
    m.extension.attachEvent("getContent", async (e) => {
      let { data: t } = e;
      if (xc.has(t.file)) return xc.get(t.file);
      {
        const e = await fetch(t.file);
        let n = await e.text();
        return (n = n.replace(/chrome-extension:/g, location.protocol)), xc.set(t.file, n), n;
      }
    }),
      m.extension.attachEvent("getSessionID", async () => {
        try {
          return await Q(S.domain, "JSESSIONID");
        } catch (e) {
          return "";
        }
      }),
      n().runtime.onConnect.addListener(() => {});
  })(),
    (source = a);
})();
