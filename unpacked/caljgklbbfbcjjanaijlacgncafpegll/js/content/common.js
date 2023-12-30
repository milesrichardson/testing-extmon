require = (function () {
  return function e(t, n, i) {
    function r(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var u = "function" == typeof require && require;
          if (!a && u) return u(s, !0);
          if (o) return o(s, !0);
          var l = new Error("Cannot find module '" + s + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        var c = (n[s] = { exports: {} });
        t[s][0].call(
          c.exports,
          function (e) {
            return r(t[s][1][e] || e);
          },
          c,
          c.exports,
          e,
          t,
          n,
          i
        );
      }
      return n[s].exports;
    }
    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
    return r;
  };
})()(
  {
    1: [
      function (e, t, n) {
        var i, r;
        (i = this),
          (r = function (e, t) {
            "use strict";
            (e = "default" in e ? e.default : e), (t = "default" in t ? t.default : t);
            var n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
                    },
              i = t.Radio,
              r = (t.Radio = {});
            (r.VERSION = "2.0.0"),
              (r.noConflict = function () {
                return (t.Radio = i), this;
              }),
              (r.DEBUG = !1),
              (r._debugText = function (e, t, n) {
                return e + (n ? " on the " + n + " channel" : "") + ': "' + t + '"';
              }),
              (r.debugLog = function (e, t, n) {
                r.DEBUG && console && console.warn && console.warn(r._debugText(e, t, n));
              });
            var o = /\s+/;
            function s(e, t, n, i) {
              var r = e[t];
              if (!((n && n !== r.callback && n !== r.callback._callback) || (i && i !== r.context))) return delete e[t], !0;
            }
            (r._eventsApi = function (t, i, r, s) {
              if (!r) return !1;
              var a = {};
              if ("object" === (void 0 === r ? "undefined" : n(r))) {
                for (var u in r) {
                  var l = t[i].apply(t, [u, r[u]].concat(s));
                  o.test(u) ? e.extend(a, l) : (a[u] = l);
                }
                return a;
              }
              if (o.test(r)) {
                for (var c = r.split(o), h = 0, d = c.length; h < d; h++) a[c[h]] = t[i].apply(t, [c[h]].concat(s));
                return a;
              }
              return !1;
            }),
              (r._callHandler = function (e, t, n) {
                var i = n[0],
                  r = n[1],
                  o = n[2];
                switch (n.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, i);
                  case 2:
                    return e.call(t, i, r);
                  case 3:
                    return e.call(t, i, r, o);
                  default:
                    return e.apply(t, n);
                }
              });
            var a,
              u,
              l = {};
            function c(t) {
              return l[t] || (l[t] = e.bind(r.log, r, t));
            }
            function h(t) {
              return e.isFunction(t)
                ? t
                : function () {
                    return t;
                  };
            }
            e.extend(r, {
              log: function (t, n) {
                if ("undefined" != typeof console) {
                  var i = e.toArray(arguments).slice(2);
                  console.log("[" + t + '] "' + n + '"', i);
                }
              },
              tuneIn: function (e) {
                var t = r.channel(e);
                return (t._tunedIn = !0), t.on("all", c(e)), this;
              },
              tuneOut: function (e) {
                var t = r.channel(e);
                return (t._tunedIn = !1), t.off("all", c(e)), delete l[e], this;
              }
            }),
              (r.Requests = {
                request: function (t) {
                  var n = e.toArray(arguments).slice(1),
                    i = r._eventsApi(this, "request", t, n);
                  if (i) return i;
                  var o = this.channelName,
                    s = this._requests;
                  if ((o && this._tunedIn && r.log.apply(this, [o, t].concat(n)), s && (s[t] || s.default))) {
                    var a = s[t] || s.default;
                    return (n = s[t] ? n : arguments), r._callHandler(a.callback, a.context, n);
                  }
                  r.debugLog("An unhandled request was fired", t, o);
                },
                reply: function (e, t, n) {
                  return r._eventsApi(this, "reply", e, [t, n])
                    ? this
                    : (this._requests || (this._requests = {}),
                      this._requests[e] && r.debugLog("A request was overwritten", e, this.channelName),
                      (this._requests[e] = { callback: h(t), context: n || this }),
                      this);
                },
                replyOnce: function (t, n, i) {
                  if (r._eventsApi(this, "replyOnce", t, [n, i])) return this;
                  var o = this,
                    s = e.once(function () {
                      return o.stopReplying(t), h(n).apply(this, arguments);
                    });
                  return this.reply(t, s, i);
                },
                stopReplying: function (t, n, i) {
                  return r._eventsApi(this, "stopReplying", t)
                    ? this
                    : (t || n || i
                        ? (function (t, n, i, r) {
                            t || (t = {});
                            for (var o = n ? [n] : e.keys(t), a = !1, u = 0, l = o.length; u < l; u++)
                              t[(n = o[u])] && s(t, n, i, r) && (a = !0);
                            return a;
                          })(this._requests, t, n, i) || r.debugLog("Attempted to remove the unregistered request", t, this.channelName)
                        : delete this._requests,
                      this);
                }
              }),
              (r._channels = {}),
              (r.channel = function (e) {
                if (!e) throw new Error("You must provide a name for the channel.");
                return r._channels[e] ? r._channels[e] : (r._channels[e] = new r.Channel(e));
              }),
              (r.Channel = function (e) {
                this.channelName = e;
              }),
              e.extend(r.Channel.prototype, t.Events, r.Requests, {
                reset: function () {
                  return this.off(), this.stopListening(), this.stopReplying(), this;
                }
              });
            var d = [t.Events, r.Requests];
            return (
              e.each(d, function (t) {
                e.each(t, function (t, n) {
                  r[n] = function (t) {
                    return (u = e.toArray(arguments).slice(1)), (a = this.channel(t))[n].apply(a, u);
                  };
                });
              }),
              (r.reset = function (t) {
                var n = t ? [this._channels[t]] : this._channels;
                e.each(n, function (e) {
                  e.reset();
                });
              }),
              r
            );
          }),
          "object" == typeof n && void 0 !== t
            ? (t.exports = r(e("underscore"), e("backbone")))
            : "function" == typeof define && define.amd
            ? define(["underscore", "backbone"], r)
            : ((i.Backbone = i.Backbone || {}), (i.Backbone.Radio = r(i._, i.Backbone)));
      },
      { backbone: "backbone", underscore: "underscore" }
    ],
    2: [
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        n.__esModule = !0;
        var o = r(e("./handlebars/base")),
          s = i(e("./handlebars/safe-string")),
          a = i(e("./handlebars/exception")),
          u = r(e("./handlebars/utils")),
          l = r(e("./handlebars/runtime")),
          c = i(e("./handlebars/no-conflict"));
        function h() {
          var e = new o.HandlebarsEnvironment();
          return (
            u.extend(e, o),
            (e.SafeString = s.default),
            (e.Exception = a.default),
            (e.Utils = u),
            (e.escapeExpression = u.escapeExpression),
            (e.VM = l),
            (e.template = function (t) {
              return l.template(t, e);
            }),
            e
          );
        }
        var d = h();
        (d.create = h), c.default(d), (d.default = d), (n.default = d), (t.exports = n.default);
      },
      {
        "./handlebars/base": 3,
        "./handlebars/exception": 6,
        "./handlebars/no-conflict": 19,
        "./handlebars/runtime": 20,
        "./handlebars/safe-string": 21,
        "./handlebars/utils": 22
      }
    ],
    3: [
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (n.__esModule = !0), (n.HandlebarsEnvironment = c);
        var r = e("./utils"),
          o = i(e("./exception")),
          s = e("./helpers"),
          a = e("./decorators"),
          u = i(e("./logger")),
          l = e("./internal/proto-access");
        n.VERSION = "4.7.7";
        n.COMPILER_REVISION = 8;
        n.LAST_COMPATIBLE_COMPILER_REVISION = 7;
        n.REVISION_CHANGES = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
          7: ">= 4.0.0 <4.3.0",
          8: ">= 4.3.0"
        };
        function c(e, t, n) {
          (this.helpers = e || {}),
            (this.partials = t || {}),
            (this.decorators = n || {}),
            s.registerDefaultHelpers(this),
            a.registerDefaultDecorators(this);
        }
        c.prototype = {
          constructor: c,
          logger: u.default,
          log: u.default.log,
          registerHelper: function (e, t) {
            if ("[object Object]" === r.toString.call(e)) {
              if (t) throw new o.default("Arg not supported with multiple helpers");
              r.extend(this.helpers, e);
            } else this.helpers[e] = t;
          },
          unregisterHelper: function (e) {
            delete this.helpers[e];
          },
          registerPartial: function (e, t) {
            if ("[object Object]" === r.toString.call(e)) r.extend(this.partials, e);
            else {
              if (void 0 === t) throw new o.default('Attempting to register a partial called "' + e + '" as undefined');
              this.partials[e] = t;
            }
          },
          unregisterPartial: function (e) {
            delete this.partials[e];
          },
          registerDecorator: function (e, t) {
            if ("[object Object]" === r.toString.call(e)) {
              if (t) throw new o.default("Arg not supported with multiple decorators");
              r.extend(this.decorators, e);
            } else this.decorators[e] = t;
          },
          unregisterDecorator: function (e) {
            delete this.decorators[e];
          },
          resetLoggedPropertyAccesses: function () {
            l.resetLoggedProperties();
          }
        };
        var h = u.default.log;
        (n.log = h), (n.createFrame = r.createFrame), (n.logger = u.default);
      },
      { "./decorators": 4, "./exception": 6, "./helpers": 7, "./internal/proto-access": 16, "./logger": 18, "./utils": 22 }
    ],
    4: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.registerDefaultDecorators = function (e) {
            o.default(e);
          });
        var i,
          r = e("./decorators/inline"),
          o = (i = r) && i.__esModule ? i : { default: i };
      },
      { "./decorators/inline": 5 }
    ],
    5: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i = e("../utils");
        (n.default = function (e) {
          e.registerDecorator("inline", function (e, t, n, r) {
            var o = e;
            return (
              t.partials ||
                ((t.partials = {}),
                (o = function (r, o) {
                  var s = n.partials;
                  n.partials = i.extend({}, s, t.partials);
                  var a = e(r, o);
                  return (n.partials = s), a;
                })),
              (t.partials[r.args[0]] = r.fn),
              o
            );
          });
        }),
          (t.exports = n.default);
      },
      { "../utils": 22 }
    ],
    6: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
        function r(e, t) {
          var n = t && t.loc,
            o = void 0,
            s = void 0,
            a = void 0,
            u = void 0;
          n && ((o = n.start.line), (s = n.end.line), (a = n.start.column), (u = n.end.column), (e += " - " + o + ":" + a));
          for (var l = Error.prototype.constructor.call(this, e), c = 0; c < i.length; c++) this[i[c]] = l[i[c]];
          Error.captureStackTrace && Error.captureStackTrace(this, r);
          try {
            n &&
              ((this.lineNumber = o),
              (this.endLineNumber = s),
              Object.defineProperty
                ? (Object.defineProperty(this, "column", { value: a, enumerable: !0 }),
                  Object.defineProperty(this, "endColumn", { value: u, enumerable: !0 }))
                : ((this.column = a), (this.endColumn = u)));
          } catch (e) {}
        }
        (r.prototype = new Error()), (n.default = r), (t.exports = n.default);
      },
      {}
    ],
    7: [
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (n.__esModule = !0),
          (n.registerDefaultHelpers = function (e) {
            r.default(e), o.default(e), s.default(e), a.default(e), u.default(e), l.default(e), c.default(e);
          }),
          (n.moveHelperToHooks = function (e, t, n) {
            e.helpers[t] && ((e.hooks[t] = e.helpers[t]), n || delete e.helpers[t]);
          });
        var r = i(e("./helpers/block-helper-missing")),
          o = i(e("./helpers/each")),
          s = i(e("./helpers/helper-missing")),
          a = i(e("./helpers/if")),
          u = i(e("./helpers/log")),
          l = i(e("./helpers/lookup")),
          c = i(e("./helpers/with"));
      },
      {
        "./helpers/block-helper-missing": 8,
        "./helpers/each": 9,
        "./helpers/helper-missing": 10,
        "./helpers/if": 11,
        "./helpers/log": 12,
        "./helpers/lookup": 13,
        "./helpers/with": 14
      }
    ],
    8: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i = e("../utils");
        (n.default = function (e) {
          e.registerHelper("blockHelperMissing", function (t, n) {
            var r = n.inverse,
              o = n.fn;
            if (!0 === t) return o(this);
            if (!1 === t || null == t) return r(this);
            if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this);
            if (n.data && n.ids) {
              var s = i.createFrame(n.data);
              (s.contextPath = i.appendContextPath(n.data.contextPath, n.name)), (n = { data: s });
            }
            return o(t, n);
          });
        }),
          (t.exports = n.default);
      },
      { "../utils": 22 }
    ],
    9: [
      function (e, t, n) {
        (function (i) {
          (function () {
            "use strict";
            n.__esModule = !0;
            var r,
              o = e("../utils"),
              s = e("../exception"),
              a = (r = s) && r.__esModule ? r : { default: r };
            (n.default = function (e) {
              e.registerHelper("each", function (e, t) {
                if (!t) throw new a.default("Must pass iterator to #each");
                var n,
                  r = t.fn,
                  s = t.inverse,
                  u = 0,
                  l = "",
                  c = void 0,
                  h = void 0;
                function d(t, n, i) {
                  c && ((c.key = t), (c.index = n), (c.first = 0 === n), (c.last = !!i), h && (c.contextPath = h + t)),
                    (l += r(e[t], { data: c, blockParams: o.blockParams([e[t], t], [h + t, null]) }));
                }
                if (
                  (t.data && t.ids && (h = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
                  o.isFunction(e) && (e = e.call(this)),
                  t.data && (c = o.createFrame(t.data)),
                  e && "object" == typeof e)
                )
                  if (o.isArray(e)) for (var f = e.length; u < f; u++) u in e && d(u, u, u === e.length - 1);
                  else if (i.Symbol && e[i.Symbol.iterator]) {
                    for (var p = [], g = e[i.Symbol.iterator](), v = g.next(); !v.done; v = g.next()) p.push(v.value);
                    for (f = (e = p).length; u < f; u++) d(u, u, u === e.length - 1);
                  } else
                    (n = void 0),
                      Object.keys(e).forEach(function (e) {
                        void 0 !== n && d(n, u - 1), (n = e), u++;
                      }),
                      void 0 !== n && d(n, u - 1, !0);
                return 0 === u && (l = s(this)), l;
              });
            }),
              (t.exports = n.default);
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { "../exception": 6, "../utils": 22 }
    ],
    10: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i,
          r = e("../exception"),
          o = (i = r) && i.__esModule ? i : { default: i };
        (n.default = function (e) {
          e.registerHelper("helperMissing", function () {
            if (1 !== arguments.length) throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          });
        }),
          (t.exports = n.default);
      },
      { "../exception": 6 }
    ],
    11: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i,
          r = e("../utils"),
          o = e("../exception"),
          s = (i = o) && i.__esModule ? i : { default: i };
        (n.default = function (e) {
          e.registerHelper("if", function (e, t) {
            if (2 != arguments.length) throw new s.default("#if requires exactly one argument");
            return r.isFunction(e) && (e = e.call(this)), (!t.hash.includeZero && !e) || r.isEmpty(e) ? t.inverse(this) : t.fn(this);
          }),
            e.registerHelper("unless", function (t, n) {
              if (2 != arguments.length) throw new s.default("#unless requires exactly one argument");
              return e.helpers.if.call(this, t, { fn: n.inverse, inverse: n.fn, hash: n.hash });
            });
        }),
          (t.exports = n.default);
      },
      { "../exception": 6, "../utils": 22 }
    ],
    12: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.default = function (e) {
            e.registerHelper("log", function () {
              for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
              var r = 1;
              null != n.hash.level ? (r = n.hash.level) : n.data && null != n.data.level && (r = n.data.level),
                (t[0] = r),
                e.log.apply(e, t);
            });
          }),
          (t.exports = n.default);
      },
      {}
    ],
    13: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.default = function (e) {
            e.registerHelper("lookup", function (e, t, n) {
              return e ? n.lookupProperty(e, t) : e;
            });
          }),
          (t.exports = n.default);
      },
      {}
    ],
    14: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i,
          r = e("../utils"),
          o = e("../exception"),
          s = (i = o) && i.__esModule ? i : { default: i };
        (n.default = function (e) {
          e.registerHelper("with", function (e, t) {
            if (2 != arguments.length) throw new s.default("#with requires exactly one argument");
            r.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (r.isEmpty(e)) return t.inverse(this);
            var i = t.data;
            return (
              t.data && t.ids && ((i = r.createFrame(t.data)).contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])),
              n(e, { data: i, blockParams: r.blockParams([e], [i && i.contextPath]) })
            );
          });
        }),
          (t.exports = n.default);
      },
      { "../exception": 6, "../utils": 22 }
    ],
    15: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.createNewLookupObject = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return i.extend.apply(void 0, [Object.create(null)].concat(t));
          });
        var i = e("../utils");
      },
      { "../utils": 22 }
    ],
    16: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.createProtoAccessControl = function (e) {
            var t = Object.create(null);
            (t.constructor = !1), (t.__defineGetter__ = !1), (t.__defineSetter__ = !1), (t.__lookupGetter__ = !1);
            var n = Object.create(null);
            return (
              (n.__proto__ = !1),
              {
                properties: {
                  whitelist: i.createNewLookupObject(n, e.allowedProtoProperties),
                  defaultValue: e.allowProtoPropertiesByDefault
                },
                methods: { whitelist: i.createNewLookupObject(t, e.allowedProtoMethods), defaultValue: e.allowProtoMethodsByDefault }
              }
            );
          }),
          (n.resultIsAllowed = function (e, t, n) {
            return s("function" == typeof e ? t.methods : t.properties, n);
          }),
          (n.resetLoggedProperties = function () {
            Object.keys(o).forEach(function (e) {
              delete o[e];
            });
          });
        var i = e("./create-new-lookup-object"),
          r = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(e("../logger")),
          o = Object.create(null);
        function s(e, t) {
          return void 0 !== e.whitelist[t]
            ? !0 === e.whitelist[t]
            : void 0 !== e.defaultValue
            ? e.defaultValue
            : ((function (e) {
                !0 !== o[e] &&
                  ((o[e] = !0),
                  r.log(
                    "error",
                    'Handlebars: Access has been denied to resolve the property "' +
                      e +
                      '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'
                  ));
              })(t),
              !1);
        }
      },
      { "../logger": 18, "./create-new-lookup-object": 15 }
    ],
    17: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.wrapHelper = function (e, t) {
            if ("function" != typeof e) return e;
            return function () {
              var n = arguments[arguments.length - 1];
              return (arguments[arguments.length - 1] = t(n)), e.apply(this, arguments);
            };
          });
      },
      {}
    ],
    18: [
      function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var i = e("./utils"),
          r = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function (e) {
              if ("string" == typeof e) {
                var t = i.indexOf(r.methodMap, e.toLowerCase());
                e = t >= 0 ? t : parseInt(e, 10);
              }
              return e;
            },
            log: function (e) {
              if (((e = r.lookupLevel(e)), "undefined" != typeof console && r.lookupLevel(r.level) <= e)) {
                var t = r.methodMap[e];
                console[t] || (t = "log");
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                console[t].apply(console, i);
              }
            }
          };
        (n.default = r), (t.exports = n.default);
      },
      { "./utils": 22 }
    ],
    19: [
      function (e, t, n) {
        (function (e) {
          (function () {
            "use strict";
            (n.__esModule = !0),
              (n.default = function (t) {
                var n = void 0 !== e ? e : window,
                  i = n.Handlebars;
                t.noConflict = function () {
                  return n.Handlebars === t && (n.Handlebars = i), t;
                };
              }),
              (t.exports = n.default);
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    20: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.checkRevision = function (e) {
            var t = (e && e[0]) || 1,
              n = a.COMPILER_REVISION;
            if (t >= a.LAST_COMPATIBLE_COMPILER_REVISION && t <= a.COMPILER_REVISION) return;
            if (t < a.LAST_COMPATIBLE_COMPILER_REVISION) {
              var i = a.REVISION_CHANGES[n],
                r = a.REVISION_CHANGES[t];
              throw new s.default(
                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                  i +
                  ") or downgrade your runtime to an older version (" +
                  r +
                  ")."
              );
            }
            throw new s.default(
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                e[1] +
                ")."
            );
          }),
          (n.template = function (e, t) {
            if (!t) throw new s.default("No environment passed to template");
            if (!e || !e.main) throw new s.default("Unknown template object: " + typeof e);
            (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
            var n = e.compiler && 7 === e.compiler[0];
            var i = {
              strict: function (e, t, n) {
                if (!(e && t in e)) throw new s.default('"' + t + '" not defined in ' + e, { loc: n });
                return i.lookupProperty(e, t);
              },
              lookupProperty: function (e, t) {
                var n = e[t];
                return null == n
                  ? n
                  : Object.prototype.hasOwnProperty.call(e, t)
                  ? n
                  : c.resultIsAllowed(n, i.protoAccessControl, t)
                  ? n
                  : void 0;
              },
              lookup: function (e, t) {
                for (var n = e.length, r = 0; r < n; r++) {
                  var o = e[r] && i.lookupProperty(e[r], t);
                  if (null != o) return e[r][t];
                }
              },
              lambda: function (e, t) {
                return "function" == typeof e ? e.call(t) : e;
              },
              escapeExpression: r.escapeExpression,
              invokePartial: function (n, i, o) {
                o.hash && ((i = r.extend({}, i, o.hash)), o.ids && (o.ids[0] = !0));
                n = t.VM.resolvePartial.call(this, n, i, o);
                var a = r.extend({}, o, { hooks: this.hooks, protoAccessControl: this.protoAccessControl }),
                  u = t.VM.invokePartial.call(this, n, i, a);
                null == u && t.compile && ((o.partials[o.name] = t.compile(n, e.compilerOptions, t)), (u = o.partials[o.name](i, a)));
                if (null != u) {
                  if (o.indent) {
                    for (var l = u.split("\n"), c = 0, h = l.length; c < h && (l[c] || c + 1 !== h); c++) l[c] = o.indent + l[c];
                    u = l.join("\n");
                  }
                  return u;
                }
                throw new s.default("The partial " + o.name + " could not be compiled when running in runtime-only mode");
              },
              fn: function (t) {
                var n = e[t];
                return (n.decorator = e[t + "_d"]), n;
              },
              programs: [],
              program: function (e, t, n, i, r) {
                var o = this.programs[e],
                  s = this.fn(e);
                return t || r || i || n ? (o = h(this, e, s, t, n, i, r)) : o || (o = this.programs[e] = h(this, e, s)), o;
              },
              data: function (e, t) {
                for (; e && t--; ) e = e._parent;
                return e;
              },
              mergeIfNeeded: function (e, t) {
                var n = e || t;
                return e && t && e !== t && (n = r.extend({}, t, e)), n;
              },
              nullContext: Object.seal({}),
              noop: t.VM.noop,
              compilerInfo: e.compiler
            };
            function o(t) {
              var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                r = n.data;
              o._setup(n),
                !n.partial &&
                  e.useData &&
                  (r = (function (e, t) {
                    (t && "root" in t) || ((t = t ? a.createFrame(t) : {}).root = e);
                    return t;
                  })(t, r));
              var s = void 0,
                u = e.useBlockParams ? [] : void 0;
              function l(t) {
                return "" + e.main(i, t, i.helpers, i.partials, r, u, s);
              }
              return (
                e.useDepths && (s = n.depths ? (t != n.depths[0] ? [t].concat(n.depths) : n.depths) : [t]),
                (l = f(e.main, l, i, n.depths || [], r, u))(t, n)
              );
            }
            return (
              (o.isTop = !0),
              (o._setup = function (o) {
                if (o.partial)
                  (i.protoAccessControl = o.protoAccessControl),
                    (i.helpers = o.helpers),
                    (i.partials = o.partials),
                    (i.decorators = o.decorators),
                    (i.hooks = o.hooks);
                else {
                  var s = r.extend({}, t.helpers, o.helpers);
                  !(function (e, t) {
                    Object.keys(e).forEach(function (n) {
                      var i = e[n];
                      e[n] = (function (e, t) {
                        var n = t.lookupProperty;
                        return l.wrapHelper(e, function (e) {
                          return r.extend({ lookupProperty: n }, e);
                        });
                      })(i, t);
                    });
                  })(s, i),
                    (i.helpers = s),
                    e.usePartial && (i.partials = i.mergeIfNeeded(o.partials, t.partials)),
                    (e.usePartial || e.useDecorators) && (i.decorators = r.extend({}, t.decorators, o.decorators)),
                    (i.hooks = {}),
                    (i.protoAccessControl = c.createProtoAccessControl(o));
                  var a = o.allowCallsToHelperMissing || n;
                  u.moveHelperToHooks(i, "helperMissing", a), u.moveHelperToHooks(i, "blockHelperMissing", a);
                }
              }),
              (o._child = function (t, n, r, o) {
                if (e.useBlockParams && !r) throw new s.default("must pass block params");
                if (e.useDepths && !o) throw new s.default("must pass parent depths");
                return h(i, t, e[t], n, 0, r, o);
              }),
              o
            );
          }),
          (n.wrapProgram = h),
          (n.resolvePartial = function (e, t, n) {
            e
              ? e.call || n.name || ((n.name = e), (e = n.partials[e]))
              : (e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name]);
            return e;
          }),
          (n.invokePartial = function (e, t, n) {
            var i = n.data && n.data["partial-block"];
            (n.partial = !0), n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var o = void 0;
            n.fn &&
              n.fn !== d &&
              (function () {
                n.data = a.createFrame(n.data);
                var e = n.fn;
                (o = n.data["partial-block"] =
                  function (t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return (n.data = a.createFrame(n.data)), (n.data["partial-block"] = i), e(t, n);
                  }),
                  e.partials && (n.partials = r.extend({}, n.partials, e.partials));
              })();
            void 0 === e && o && (e = o);
            if (void 0 === e) throw new s.default("The partial " + n.name + " could not be found");
            if (e instanceof Function) return e(t, n);
          }),
          (n.noop = d);
        var i,
          r = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(e("./utils")),
          o = e("./exception"),
          s = (i = o) && i.__esModule ? i : { default: i },
          a = e("./base"),
          u = e("./helpers"),
          l = e("./internal/wrapHelper"),
          c = e("./internal/proto-access");
        function h(e, t, n, i, r, o, s) {
          function a(t) {
            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
              a = s;
            return (
              !s || t == s[0] || (t === e.nullContext && null === s[0]) || (a = [t].concat(s)),
              n(e, t, e.helpers, e.partials, r.data || i, o && [r.blockParams].concat(o), a)
            );
          }
          return ((a = f(n, a, e, s, i, o)).program = t), (a.depth = s ? s.length : 0), (a.blockParams = r || 0), a;
        }
        function d() {
          return "";
        }
        function f(e, t, n, i, o, s) {
          if (e.decorator) {
            var a = {};
            (t = e.decorator(t, a, n, i && i[0], o, s, i)), r.extend(t, a);
          }
          return t;
        }
      },
      { "./base": 3, "./exception": 6, "./helpers": 7, "./internal/proto-access": 16, "./internal/wrapHelper": 17, "./utils": 22 }
    ],
    21: [
      function (e, t, n) {
        "use strict";
        function i(e) {
          this.string = e;
        }
        (n.__esModule = !0),
          (i.prototype.toString = i.prototype.toHTML =
            function () {
              return "" + this.string;
            }),
          (n.default = i),
          (t.exports = n.default);
      },
      {}
    ],
    22: [
      function (e, t, n) {
        "use strict";
        (n.__esModule = !0),
          (n.extend = a),
          (n.indexOf = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          }),
          (n.escapeExpression = function (e) {
            if ("string" != typeof e) {
              if (e && e.toHTML) return e.toHTML();
              if (null == e) return "";
              if (!e) return e + "";
              e = "" + e;
            }
            if (!o.test(e)) return e;
            return e.replace(r, s);
          }),
          (n.isEmpty = function (e) {
            return (!e && 0 !== e) || !(!c(e) || 0 !== e.length);
          }),
          (n.createFrame = function (e) {
            var t = a({}, e);
            return (t._parent = e), t;
          }),
          (n.blockParams = function (e, t) {
            return (e.path = t), e;
          }),
          (n.appendContextPath = function (e, t) {
            return (e ? e + "." : "") + t;
          });
        var i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" },
          r = /[&<>"'`=]/g,
          o = /[&<>"'`=]/;
        function s(e) {
          return i[e];
        }
        function a(e) {
          for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
          return e;
        }
        var u = Object.prototype.toString;
        n.toString = u;
        var l = function (e) {
          return "function" == typeof e;
        };
        l(/x/) &&
          (n.isFunction = l =
            function (e) {
              return "function" == typeof e && "[object Function]" === u.call(e);
            }),
          (n.isFunction = l);
        var c =
          Array.isArray ||
          function (e) {
            return !(!e || "object" != typeof e) && "[object Array]" === u.call(e);
          };
        n.isArray = c;
      },
      {}
    ],
    "backbone.marionette": [
      function (e, t, n) {
        /**
         * @license
         * MarionetteJS (Backbone.Marionette)
         * ----------------------------------
         * v3.5.1
         *
         * Copyright (c)2017 Derick Bailey, Muted Solutions, LLC.
         * Distributed under MIT license
         *
         * http://marionettejs.com
         */ var i, r;
        (i = this),
          (r = function (e, t, n) {
            "use strict";
            (e = e && e.hasOwnProperty("default") ? e.default : e),
              (t = t && t.hasOwnProperty("default") ? t.default : t),
              (n = n && n.hasOwnProperty("default") ? n.default : n);
            var i = function (e) {
                return function (t) {
                  for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                  return e.apply(t, i);
                };
              },
              r = e.Model.extend,
              o = function e(n, i) {
                t.isObject(n) &&
                  (n =
                    n.prev + " is going to be removed in the future. Please use " + n.next + " instead." + (n.url ? " See: " + n.url : "")),
                  je.DEV_MODE && ((void 0 !== i && i) || e._cache[n] || (e._warn("Deprecation warning: " + n), (e._cache[n] = !0)));
              };
            (o._console = "undefined" != typeof console ? console : {}),
              (o._warn = function () {
                return (o._console.warn || o._console.log || t.noop).apply(o._console, arguments);
              }),
              (o._cache = {});
            var s = function (e) {
                return document.documentElement.contains(e && e.parentNode);
              },
              a = function (e, n) {
                var i = this;
                e &&
                  t.each(n, function (t) {
                    var n = e[t];
                    void 0 !== n && (i[t] = n);
                  });
              },
              u = function (e) {
                if (e) return this.options && void 0 !== this.options[e] ? this.options[e] : this[e];
              },
              l = function (e) {
                var n = this;
                return t.reduce(
                  e,
                  function (e, i, r) {
                    return t.isFunction(i) || (i = n[i]), i && (e[r] = i), e;
                  },
                  {}
                );
              },
              c = /(^|:)(\w)/gi;
            function h(e, t, n) {
              return n.toUpperCase();
            }
            var d = t.memoize(function (e) {
              return "on" + e.replace(c, h);
            });
            function f(e) {
              for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
              var o = d(e),
                s = u.call(this, o),
                a = void 0;
              return t.isFunction(s) && (a = s.apply(this, i)), this.trigger.apply(this, arguments), a;
            }
            function p(e) {
              for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
              return t.isFunction(e.triggerMethod) ? e.triggerMethod.apply(e, i) : f.apply(e, i);
            }
            function g(e, n, i) {
              e._getImmediateChildren &&
                t.each(e._getImmediateChildren(), function (e) {
                  i(e) && p(e, n, e);
                });
            }
            function v(e) {
              return !e._isAttached;
            }
            function m(e) {
              return !!v(e) && ((e._isAttached = !0), !0);
            }
            function y(e) {
              return e._isAttached;
            }
            function _(e) {
              return !!y(e) && ((e._isAttached = !1), !0);
            }
            function w(e) {
              e._isAttached && e._isRendered && p(e, "dom:refresh", e);
            }
            function b(e) {
              e._isAttached && e._isRendered && p(e, "dom:remove", e);
            }
            function x() {
              g(this, "before:attach", v);
            }
            function C() {
              g(this, "attach", m), w(this);
            }
            function E() {
              g(this, "before:detach", y), b(this);
            }
            function T() {
              g(this, "detach", _);
            }
            function A() {
              b(this);
            }
            function V() {
              w(this);
            }
            function k(e) {
              e._areViewEventsMonitored ||
                !1 === e.monitorViewEvents ||
                ((e._areViewEventsMonitored = !0),
                e.on({ "before:attach": x, attach: C, "before:detach": E, detach: T, "before:render": A, render: V }));
            }
            var M = ["description", "fileName", "lineNumber", "name", "message", "number"],
              S = r.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v3.5.1/",
                constructor: function (e, n) {
                  t.isObject(e) ? (e = (n = e).message) : n || (n = {});
                  var i = Error.call(this, e);
                  t.extend(this, t.pick(i, M), t.pick(n, M)), this.captureStackTrace(), n.url && (this.url = this.urlRoot + n.url);
                },
                captureStackTrace: function () {
                  Error.captureStackTrace && Error.captureStackTrace(this, S);
                },
                toString: function () {
                  return this.name + ": " + this.message + (this.url ? " See: " + this.url : "");
                }
              });
            function D(e, n, i, r) {
              if (!t.isObject(i))
                throw new S({ message: "Bindings must be an object.", url: "marionette.functions.html#marionettebindevents" });
              t.each(i, function (i, s) {
                t.isString(i)
                  ? (function (e, n, i, r, s) {
                      var a = r.split(/\s+/);
                      a.length > 1 &&
                        o("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."),
                        t.each(a, function (t) {
                          var r = e[t];
                          if (!r) throw new S('Method "' + t + '" was configured as an event handler, but does not exist.');
                          e[s](n, i, r);
                        });
                    })(e, n, s, i, r)
                  : e[r](n, s, i);
              });
            }
            function j(e, t) {
              return e && t ? (D(this, e, t, "listenTo"), this) : this;
            }
            function R(e, t) {
              return e ? (t ? (D(this, e, t, "stopListening"), this) : (this.stopListening(e), this)) : this;
            }
            function O(e, n, i, r) {
              if (!t.isObject(i))
                throw new S({ message: "Bindings must be an object.", url: "marionette.functions.html#marionettebindrequests" });
              var o = l.call(e, i);
              n[r](o, e);
            }
            function N(e, t) {
              return e && t ? (O(this, e, t, "reply"), this) : this;
            }
            function I(e, t) {
              return e ? (t ? (O(this, e, t, "stopReplying"), this) : (e.stopReplying(null, null, this), this)) : this;
            }
            S.extend = r;
            var B = {
                normalizeMethods: l,
                _setOptions: function (e) {
                  this.options = t.extend({}, t.result(this, "options"), e);
                },
                mergeOptions: a,
                getOption: u,
                bindEvents: j,
                unbindEvents: R
              },
              P = {
                _initRadio: function () {
                  var e = t.result(this, "channelName");
                  if (e) {
                    if (!n) throw new S({ name: "BackboneRadioMissing", message: 'The dependency "backbone.radio" is missing.' });
                    var i = (this._channel = n.channel(e)),
                      r = t.result(this, "radioEvents");
                    this.bindEvents(i, r);
                    var o = t.result(this, "radioRequests");
                    this.bindRequests(i, o), this.on("destroy", this._destroyRadio);
                  }
                },
                _destroyRadio: function () {
                  this._channel.stopReplying(null, null, this);
                },
                getChannel: function () {
                  return this._channel;
                },
                bindEvents: j,
                unbindEvents: R,
                bindRequests: N,
                unbindRequests: I
              },
              L = ["channelName", "radioEvents", "radioRequests"],
              H = function (e) {
                this.hasOwnProperty("options") || this._setOptions(e),
                  this.mergeOptions(e, L),
                  this._setCid(),
                  this._initRadio(),
                  this.initialize.apply(this, arguments);
              };
            (H.extend = r),
              t.extend(H.prototype, e.Events, B, P, {
                cidPrefix: "mno",
                _isDestroyed: !1,
                isDestroyed: function () {
                  return this._isDestroyed;
                },
                initialize: function () {},
                _setCid: function () {
                  this.cid || (this.cid = t.uniqueId(this.cidPrefix));
                },
                destroy: function () {
                  if (this._isDestroyed) return this;
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  return (
                    this.triggerMethod.apply(this, ["before:destroy", this].concat(t)),
                    (this._isDestroyed = !0),
                    this.triggerMethod.apply(this, ["destroy", this].concat(t)),
                    this.stopListening(),
                    this
                  );
                },
                triggerMethod: f
              });
            var q = function (e) {
              this.templateId = e;
            };
            t.extend(q, {
              templateCaches: {},
              get: function (e, t) {
                var n = this.templateCaches[e];
                return n || ((n = new q(e)), (this.templateCaches[e] = n)), n.load(t);
              },
              clear: function () {
                for (var e = void 0, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                var r = n.length;
                if (r > 0) for (e = 0; e < r; e++) delete this.templateCaches[n[e]];
                else this.templateCaches = {};
              }
            }),
              t.extend(q.prototype, {
                load: function (e) {
                  if (this.compiledTemplate) return this.compiledTemplate;
                  var t = this.loadTemplate(this.templateId, e);
                  return (this.compiledTemplate = this.compileTemplate(t, e)), this.compiledTemplate;
                },
                loadTemplate: function (t, n) {
                  var i = e.$(t);
                  if (!i.length) throw new S({ name: "NoTemplateError", message: 'Could not find template: "' + t + '"' });
                  return i.html();
                },
                compileTemplate: function (e, n) {
                  return t.template(e, n);
                }
              });
            var $ = t.invokeMap || t.invoke;
            function F(e, n) {
              return t
                .chain(n)
                .map(function (n, i) {
                  var r = (function (e, n) {
                      return e.behaviorClass
                        ? e.behaviorClass
                        : t.isFunction(e)
                        ? e
                        : t.isFunction(je.Behaviors.behaviorsLookup)
                        ? je.Behaviors.behaviorsLookup(e, n)[n]
                        : je.Behaviors.behaviorsLookup[n];
                    })(n, i),
                    o = new r(n === r ? {} : n, e),
                    s = F(e, t.result(o, "behaviors"));
                  return [o].concat(s);
                })
                .flatten()
                .value();
            }
            var U = {
                _initBehaviors: function () {
                  this._behaviors = this._getBehaviors();
                },
                _getBehaviors: function () {
                  var e = t.result(this, "behaviors");
                  return t.isObject(e) ? F(this, e) : {};
                },
                _getBehaviorTriggers: function () {
                  var e = $(this._behaviors, "getTriggers");
                  return t.reduce(
                    e,
                    function (e, n) {
                      return t.extend(e, n);
                    },
                    {}
                  );
                },
                _getBehaviorEvents: function () {
                  var e = $(this._behaviors, "getEvents");
                  return t.reduce(
                    e,
                    function (e, n) {
                      return t.extend(e, n);
                    },
                    {}
                  );
                },
                _proxyBehaviorViewProperties: function () {
                  $(this._behaviors, "proxyViewProperties");
                },
                _delegateBehaviorEntityEvents: function () {
                  $(this._behaviors, "delegateEntityEvents");
                },
                _undelegateBehaviorEntityEvents: function () {
                  $(this._behaviors, "undelegateEntityEvents");
                },
                _destroyBehaviors: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                  $.apply(void 0, [this._behaviors, "destroy"].concat(t));
                },
                _removeBehavior: function (e) {
                  this._isDestroyed || (this.undelegate(".trig" + e.cid + " ." + e.cid), (this._behaviors = t.without(this._behaviors, e)));
                },
                _bindBehaviorUIElements: function () {
                  $(this._behaviors, "bindUIElements");
                },
                _unbindBehaviorUIElements: function () {
                  $(this._behaviors, "unbindUIElements");
                },
                _triggerEventOnBehaviors: function () {
                  for (var e = this._behaviors, t = 0, n = e && e.length; t < n; t++) f.apply(e[t], arguments);
                }
              },
              z = {
                _delegateEntityEvents: function (e, n) {
                  var i = t.result(this, "modelEvents");
                  i && (R.call(this, e, i), j.call(this, e, i));
                  var r = t.result(this, "collectionEvents");
                  r && (R.call(this, n, r), j.call(this, n, r));
                },
                _undelegateEntityEvents: function (e, n) {
                  var i = t.result(this, "modelEvents");
                  R.call(this, e, i);
                  var r = t.result(this, "collectionEvents");
                  R.call(this, n, r);
                }
              },
              W = /^(\S+)\s*(.*)$/,
              X = function (e, t) {
                var n = e.match(W);
                return n[1] + "." + t + " " + n[2];
              },
              G = { childViewEventPrefix: !0, triggersStopPropagation: !0, triggersPreventDefault: !0 };
            function J(e) {
              return !!G[e];
            }
            var Y = {
                _getViewTriggers: function (e, n) {
                  var i = this;
                  return t.reduce(
                    n,
                    function (n, r, o) {
                      return (
                        (n[(o = X(o, "trig" + i.cid))] = (function (e, n) {
                          t.isString(n) && (n = { event: n });
                          var i = n.event,
                            r = !!n.preventDefault;
                          J("triggersPreventDefault") && (r = !1 !== n.preventDefault);
                          var o = !!n.stopPropagation;
                          return (
                            J("triggersStopPropagation") && (o = !1 !== n.stopPropagation),
                            function (t) {
                              r && t.preventDefault(), o && t.stopPropagation(), e.triggerMethod(i, e, t);
                            }
                          );
                        })(e, r)),
                        n
                      );
                    },
                    {}
                  );
                }
              },
              K = function (e, t) {
                return e.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function (e) {
                  return t[e.slice(4)];
                });
              },
              Q = {
                normalizeUIKeys: function (e) {
                  return (function (e, n) {
                    return t.reduce(
                      e,
                      function (e, t, i) {
                        return (e[K(i, n)] = t), e;
                      },
                      {}
                    );
                  })(e, this._getUIBindings());
                },
                normalizeUIString: function (e) {
                  var t = this._getUIBindings();
                  return K(e, t);
                },
                normalizeUIValues: function (e, n) {
                  return (function e(n, i, r) {
                    return (
                      t.each(n, function (o, s) {
                        t.isString(o)
                          ? (n[s] = K(o, i))
                          : t.isObject(o) &&
                            t.isArray(r) &&
                            (t.extend(o, e(t.pick(o, r), i)),
                            t.each(r, function (e) {
                              var n = o[e];
                              t.isString(n) && (o[e] = K(n, i));
                            }));
                      }),
                      n
                    );
                  })(e, this._getUIBindings(), n);
                },
                _getUIBindings: function () {
                  var e = t.result(this, "_uiBindings"),
                    n = t.result(this, "ui");
                  return e || n;
                },
                _bindUIElements: function () {
                  var e = this;
                  if (this.ui) {
                    this._uiBindings || (this._uiBindings = this.ui);
                    var n = t.result(this, "_uiBindings");
                    (this._ui = {}),
                      t.each(n, function (t, n) {
                        e._ui[n] = e.$(t);
                      }),
                      (this.ui = this._ui);
                  }
                },
                _unbindUIElements: function () {
                  var e = this;
                  this.ui &&
                    this._uiBindings &&
                    (t.each(this.ui, function (t, n) {
                      delete e.ui[n];
                    }),
                    (this.ui = this._uiBindings),
                    delete this._uiBindings,
                    delete this._ui);
                },
                _getUI: function (e) {
                  return this._ui[e];
                }
              };
            function Z(t) {
              return t instanceof e.$ ? t : e.$(t);
            }
            function ee(e) {
              return (this.prototype.Dom = t.extend({}, this.prototype.Dom, e)), this;
            }
            var te = {
                createBuffer: function () {
                  return document.createDocumentFragment();
                },
                getEl: function (e) {
                  return Z(e);
                },
                findEl: function (e, t) {
                  return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z(e)).find(t);
                },
                hasEl: function (e, t) {
                  return e.contains(t && t.parentNode);
                },
                detachEl: function (e) {
                  (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z(e)).detach();
                },
                replaceEl: function (e, t) {
                  if (e !== t) {
                    var n = t.parentNode;
                    n && n.replaceChild(e, t);
                  }
                },
                swapEl: function (e, t) {
                  if (e !== t) {
                    var n = e.parentNode,
                      i = t.parentNode;
                    if (n && i) {
                      var r = e.nextSibling,
                        o = t.nextSibling;
                      n.insertBefore(t, r), i.insertBefore(e, o);
                    }
                  }
                },
                setContents: function (e, t) {
                  (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z(e)).html(t);
                },
                appendContents: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n._$el,
                    r = void 0 === i ? Z(e) : i,
                    o = n._$contents,
                    s = void 0 === o ? Z(t) : o;
                  r.append(s);
                },
                hasContents: function (e) {
                  return !!e && e.hasChildNodes();
                },
                detachContents: function (e) {
                  (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z(e)).contents().detach();
                }
              },
              ne = {
                Dom: te,
                supportsRenderLifecycle: !0,
                supportsDestroyLifecycle: !0,
                _isDestroyed: !1,
                isDestroyed: function () {
                  return !!this._isDestroyed;
                },
                _isRendered: !1,
                isRendered: function () {
                  return !!this._isRendered;
                },
                _isAttached: !1,
                isAttached: function () {
                  return !!this._isAttached;
                },
                delegateEvents: function (n) {
                  this._proxyBehaviorViewProperties(), this._buildEventProxies();
                  var i = this._getEvents(n);
                  void 0 === n && (this.events = i);
                  var r = t.extend({}, this._getBehaviorEvents(), i, this._getBehaviorTriggers(), this.getTriggers());
                  return e.View.prototype.delegateEvents.call(this, r), this;
                },
                _getEvents: function (e) {
                  var n = e || this.events;
                  return t.isFunction(n) ? this.normalizeUIKeys(n.call(this)) : this.normalizeUIKeys(n);
                },
                getTriggers: function () {
                  if (this.triggers) {
                    var e = this.normalizeUIKeys(t.result(this, "triggers"));
                    return this._getViewTriggers(this, e);
                  }
                },
                delegateEntityEvents: function () {
                  return this._delegateEntityEvents(this.model, this.collection), this._delegateBehaviorEntityEvents(), this;
                },
                undelegateEntityEvents: function () {
                  return this._undelegateEntityEvents(this.model, this.collection), this._undelegateBehaviorEntityEvents(), this;
                },
                destroy: function () {
                  if (this._isDestroyed) return this;
                  for (var e = this._isAttached && !this._shouldDisableEvents, t = arguments.length, n = Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                  return (
                    this.triggerMethod.apply(this, ["before:destroy", this].concat(n)),
                    e && this.triggerMethod("before:detach", this),
                    this.unbindUIElements(),
                    this._removeElement(),
                    e && ((this._isAttached = !1), this.triggerMethod("detach", this)),
                    this._removeChildren(),
                    (this._isDestroyed = !0),
                    (this._isRendered = !1),
                    this._destroyBehaviors.apply(this, n),
                    this.triggerMethod.apply(this, ["destroy", this].concat(n)),
                    this.stopListening(),
                    this
                  );
                },
                _removeElement: function () {
                  this.$el.off().removeData(), this.Dom.detachEl(this.el, this.$el);
                },
                bindUIElements: function () {
                  return this._bindUIElements(), this._bindBehaviorUIElements(), this;
                },
                unbindUIElements: function () {
                  return this._unbindUIElements(), this._unbindBehaviorUIElements(), this;
                },
                getUI: function (e) {
                  return this._getUI(e);
                },
                childViewEventPrefix: function () {
                  return !!J("childViewEventPrefix") && "childview";
                },
                triggerMethod: function () {
                  var e = f.apply(this, arguments);
                  return this._triggerEventOnBehaviors.apply(this, arguments), e;
                },
                _buildEventProxies: function () {
                  (this._childViewEvents = t.result(this, "childViewEvents")),
                    (this._childViewTriggers = t.result(this, "childViewTriggers"));
                },
                _proxyChildViewEvents: function (e) {
                  this.listenTo(e, "all", this._childViewEventHandler);
                },
                _childViewEventHandler: function (e) {
                  for (
                    var n = this.normalizeMethods(this._childViewEvents), i = arguments.length, r = Array(i > 1 ? i - 1 : 0), o = 1;
                    o < i;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  void 0 !== n && t.isFunction(n[e]) && n[e].apply(this, r);
                  var s = this._childViewTriggers;
                  s && t.isString(s[e]) && this.triggerMethod.apply(this, [s[e]].concat(r));
                  var a = t.result(this, "childViewEventPrefix");
                  if (!1 !== a) {
                    var u = a + ":" + e;
                    this.triggerMethod.apply(this, [u].concat(r));
                  }
                }
              };
            function ie(e) {
              e._isRendered ||
                (e.supportsRenderLifecycle || p(e, "before:render", e),
                e.render(),
                e.supportsRenderLifecycle || ((e._isRendered = !0), p(e, "render", e)));
            }
            function re(e) {
              if (e.destroy) e.destroy();
              else {
                e.supportsDestroyLifecycle || p(e, "before:destroy", e);
                var t = e._isAttached && !e._shouldDisableEvents;
                t && p(e, "before:detach", e),
                  e.remove(),
                  t && ((e._isAttached = !1), p(e, "detach", e)),
                  (e._isDestroyed = !0),
                  e.supportsDestroyLifecycle || p(e, "destroy", e);
              }
            }
            t.extend(ne, U, B, z, Y, Q);
            var oe = ["allowMissingEl", "parentEl", "replaceElement"],
              se = H.extend(
                {
                  Dom: te,
                  cidPrefix: "mnr",
                  replaceElement: !1,
                  _isReplaced: !1,
                  _isSwappingView: !1,
                  constructor: function (t) {
                    if (
                      (this._setOptions(t),
                      this.mergeOptions(t, oe),
                      (this._initEl = this.el = this.getOption("el")),
                      (this.el = this.el instanceof e.$ ? this.el[0] : this.el),
                      !this.el)
                    )
                      throw new S({ name: "NoElError", message: 'An "el" must be specified for a region.' });
                    (this.$el = this.getEl(this.el)), H.call(this, t);
                  },
                  show: function (e, t) {
                    if (this._ensureElement(t))
                      return (e = this._getView(e, t)) === this.currentView
                        ? this
                        : ((this._isSwappingView = !!this.currentView),
                          this.triggerMethod("before:show", this, e, t),
                          e._isAttached || this.empty(t),
                          this._setupChildView(e),
                          (this.currentView = e),
                          ie(e),
                          this._attachView(e, t),
                          this.triggerMethod("show", this, e, t),
                          (this._isSwappingView = !1),
                          this);
                  },
                  _setupChildView: function (e) {
                    k(e), this._proxyChildViewEvents(e), e.on("destroy", this._empty, this);
                  },
                  _proxyChildViewEvents: function (e) {
                    var t = this._parentView;
                    t && t._proxyChildViewEvents(e);
                  },
                  _shouldDisableMonitoring: function () {
                    return this._parentView && !1 === this._parentView.monitorViewEvents;
                  },
                  _attachView: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      i = !e._isAttached && s(this.el) && !this._shouldDisableMonitoring(),
                      r = void 0 === n.replaceElement ? !!t.result(this, "replaceElement") : !!n.replaceElement;
                    i && p(e, "before:attach", e),
                      r ? this._replaceEl(e) : this.attachHtml(e),
                      i && ((e._isAttached = !0), p(e, "attach", e));
                  },
                  _ensureElement: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (
                      (t.isObject(this.el) ||
                        ((this.$el = this.getEl(this.el)), (this.el = this.$el[0]), (this.$el = this.Dom.getEl(this.el))),
                      !this.$el || 0 === this.$el.length)
                    ) {
                      if (void 0 === e.allowMissingEl ? !!t.result(this, "allowMissingEl") : !!e.allowMissingEl) return !1;
                      throw new S('An "el" must exist in DOM for this region ' + this.cid);
                    }
                    return !0;
                  },
                  _getView: function (t) {
                    if (!t)
                      throw new S({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                      });
                    if (t._isDestroyed)
                      throw new S({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + t.cid + '") has already been destroyed and cannot be used.'
                      });
                    if (t instanceof e.View) return t;
                    var n = this._getViewOptions(t);
                    return new de(n);
                  },
                  _getViewOptions: function (e) {
                    if (t.isFunction(e)) return { template: e };
                    if (t.isObject(e)) return e;
                    return {
                      template: function () {
                        return e;
                      }
                    };
                  },
                  getEl: function (e) {
                    var n = t.result(this, "parentEl");
                    return n && t.isString(e) ? this.Dom.findEl(n, e) : this.Dom.getEl(e);
                  },
                  _replaceEl: function (e) {
                    this._restoreEl(),
                      e.on("before:destroy", this._restoreEl, this),
                      this.Dom.replaceEl(e.el, this.el),
                      (this._isReplaced = !0);
                  },
                  _restoreEl: function () {
                    if (this._isReplaced) {
                      var e = this.currentView;
                      e && (this._detachView(e), (this._isReplaced = !1));
                    }
                  },
                  isReplaced: function () {
                    return !!this._isReplaced;
                  },
                  isSwappingView: function () {
                    return !!this._isSwappingView;
                  },
                  attachHtml: function (e) {
                    this.Dom.appendContents(this.el, e.el, { _$el: this.$el, _$contents: e.$el });
                  },
                  empty: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowMissingEl: !0 },
                      t = this.currentView;
                    if (!t) return this._ensureElement(e) && this.detachHtml(), this;
                    var n = !e.preventDestroy;
                    return n || o("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(t, n), this;
                  },
                  _empty: function (e, t) {
                    e.off("destroy", this._empty, this),
                      this.triggerMethod("before:empty", this, e),
                      this._restoreEl(),
                      delete this.currentView,
                      e._isDestroyed || (t ? this.removeView(e) : this._detachView(e), this._stopChildViewEvents(e)),
                      this.triggerMethod("empty", this, e);
                  },
                  _stopChildViewEvents: function (e) {
                    this._parentView && this._parentView.stopListening(e);
                  },
                  destroyView: function (e) {
                    return e._isDestroyed ? e : ((e._shouldDisableEvents = this._shouldDisableMonitoring()), re(e), e);
                  },
                  removeView: function (e) {
                    this.destroyView(e);
                  },
                  detachView: function () {
                    var e = this.currentView;
                    if (e) return this._empty(e), e;
                  },
                  _detachView: function (e) {
                    var t = e._isAttached && !this._shouldDisableMonitoring(),
                      n = this._isReplaced;
                    t && p(e, "before:detach", e),
                      n ? this.Dom.replaceEl(this.el, e.el) : this.detachHtml(),
                      t && ((e._isAttached = !1), p(e, "detach", e));
                  },
                  detachHtml: function () {
                    this.Dom.detachContents(this.el, this.$el);
                  },
                  hasView: function () {
                    return !!this.currentView;
                  },
                  reset: function (e) {
                    return this.empty(e), this.$el && (this.el = this._initEl), delete this.$el, this;
                  },
                  destroy: function (e) {
                    return this._isDestroyed
                      ? this
                      : (this.reset(e),
                        this._name && this._parentView._removeReferences(this._name),
                        delete this._parentView,
                        delete this._name,
                        H.prototype.destroy.apply(this, arguments));
                  }
                },
                { setDomApi: ee }
              ),
              ae = function (e, n) {
                return e instanceof se
                  ? e
                  : (function (e, n) {
                      var i = t.extend({}, n);
                      if (t.isString(e)) return t.extend(i, { el: e }), ue(i);
                      if (t.isFunction(e)) return t.extend(i, { regionClass: e }), ue(i);
                      if (t.isObject(e))
                        return (
                          e.selector &&
                            o("The selector option on a Region definition object is deprecated. Use el to pass a selector string"),
                          t.extend(i, { el: e.selector }, e),
                          ue(i)
                        );
                      throw new S({
                        message: "Improper region configuration type.",
                        url: "marionette.region.html#region-configuration-types"
                      });
                    })(e, n);
              };
            function ue(e) {
              return new (0, e.regionClass)(t.omit(e, "regionClass"));
            }
            var le = {
                regionClass: se,
                _initRegions: function () {
                  (this.regions = this.regions || {}), (this._regions = {}), this.addRegions(t.result(this, "regions"));
                },
                _reInitRegions: function () {
                  $(this._regions, "reset");
                },
                addRegion: function (e, t) {
                  var n = {};
                  return (n[e] = t), this.addRegions(n)[e];
                },
                addRegions: function (e) {
                  if (!t.isEmpty(e))
                    return (
                      (e = this.normalizeUIValues(e, ["selector", "el"])),
                      (this.regions = t.extend({}, this.regions, e)),
                      this._addRegions(e)
                    );
                },
                _addRegions: function (e) {
                  var n = this,
                    i = { regionClass: this.regionClass, parentEl: t.partial(t.result, this, "el") };
                  return t.reduce(
                    e,
                    function (e, t, r) {
                      return (e[r] = ae(t, i)), n._addRegion(e[r], r), e;
                    },
                    {}
                  );
                },
                _addRegion: function (e, t) {
                  this.triggerMethod("before:add:region", this, t, e),
                    (e._parentView = this),
                    (e._name = t),
                    (this._regions[t] = e),
                    this.triggerMethod("add:region", this, t, e);
                },
                removeRegion: function (e) {
                  var t = this._regions[e];
                  return this._removeRegion(t, e), t;
                },
                removeRegions: function () {
                  var e = this._getRegions();
                  return t.each(this._regions, t.bind(this._removeRegion, this)), e;
                },
                _removeRegion: function (e, t) {
                  this.triggerMethod("before:remove:region", this, t, e), e.destroy(), this.triggerMethod("remove:region", this, t, e);
                },
                _removeReferences: function (e) {
                  delete this.regions[e], delete this._regions[e];
                },
                emptyRegions: function () {
                  var e = this.getRegions();
                  return $(e, "empty"), e;
                },
                hasRegion: function (e) {
                  return !!this.getRegion(e);
                },
                getRegion: function (e) {
                  return this._isRendered || this.render(), this._regions[e];
                },
                _getRegions: function () {
                  return t.clone(this._regions);
                },
                getRegions: function () {
                  return this._isRendered || this.render(), this._getRegions();
                },
                showChildView: function (e, t) {
                  for (var n = this.getRegion(e), i = arguments.length, r = Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
                    r[o - 2] = arguments[o];
                  return n.show.apply(n, [t].concat(r));
                },
                detachChildView: function (e) {
                  return this.getRegion(e).detachView();
                },
                getChildView: function (e) {
                  return this.getRegion(e).currentView;
                }
              },
              ce = {
                render: function (e, n) {
                  if (!e)
                    throw new S({
                      name: "TemplateNotFoundError",
                      message: "Cannot render the template since its false, null or undefined."
                    });
                  return (t.isFunction(e) ? e : q.get(e))(n);
                }
              },
              he = [
                "behaviors",
                "childViewEventPrefix",
                "childViewEvents",
                "childViewTriggers",
                "collectionEvents",
                "events",
                "modelEvents",
                "regionClass",
                "regions",
                "template",
                "templateContext",
                "triggers",
                "ui"
              ],
              de = e.View.extend(
                {
                  constructor: function (n) {
                    (this.render = t.bind(this.render, this)),
                      this._setOptions(n),
                      this.mergeOptions(n, he),
                      k(this),
                      this._initBehaviors(),
                      this._initRegions();
                    var i = Array.prototype.slice.call(arguments);
                    (i[0] = this.options),
                      e.View.prototype.constructor.apply(this, i),
                      this.delegateEntityEvents(),
                      this._triggerEventOnBehaviors("initialize", this);
                  },
                  serializeData: function () {
                    return this.model || this.collection
                      ? this.model
                        ? this.serializeModel()
                        : { items: this.serializeCollection() }
                      : {};
                  },
                  serializeModel: function () {
                    return this.model ? t.clone(this.model.attributes) : {};
                  },
                  serializeCollection: function () {
                    return this.collection
                      ? this.collection.map(function (e) {
                          return t.clone(e.attributes);
                        })
                      : {};
                  },
                  setElement: function () {
                    return (
                      e.View.prototype.setElement.apply(this, arguments),
                      (this._isRendered = this.Dom.hasContents(this.el)),
                      (this._isAttached = s(this.el)),
                      this._isRendered && this.bindUIElements(),
                      this
                    );
                  },
                  render: function () {
                    return this._isDestroyed
                      ? this
                      : (this.triggerMethod("before:render", this),
                        this._isRendered && this._reInitRegions(),
                        this._renderTemplate(),
                        this.bindUIElements(),
                        (this._isRendered = !0),
                        this.triggerMethod("render", this),
                        this);
                  },
                  _renderTemplate: function () {
                    var e = this.getTemplate();
                    if (!1 !== e) {
                      var t = this.mixinTemplateContext(this.serializeData()),
                        n = this._renderHtml(e, t);
                      this.attachElContent(n);
                    } else o("template:false is deprecated.  Use _.noop.");
                  },
                  _renderHtml: function (e, t) {
                    return ce.render(e, t, this);
                  },
                  getTemplate: function () {
                    return this.template;
                  },
                  mixinTemplateContext: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      n = t.result(this, "templateContext");
                    return t.extend(e, n);
                  },
                  attachElContent: function (e) {
                    return this.Dom.setContents(this.el, e, this.$el), this;
                  },
                  _removeChildren: function () {
                    this.removeRegions();
                  },
                  _getImmediateChildren: function () {
                    return t.chain(this._getRegions()).map("currentView").compact().value();
                  }
                },
                {
                  setRenderer: function (e) {
                    return (this.prototype._renderHtml = e), this;
                  },
                  setDomApi: ee
                }
              );
            t.extend(de.prototype, ne, le);
            var fe = [
                "forEach",
                "each",
                "map",
                "find",
                "detect",
                "filter",
                "select",
                "reject",
                "every",
                "all",
                "some",
                "any",
                "include",
                "contains",
                "invoke",
                "toArray",
                "first",
                "initial",
                "rest",
                "last",
                "without",
                "isEmpty",
                "pluck",
                "reduce",
                "partition"
              ],
              pe = function (e, n) {
                t.each(fe, function (i) {
                  e[i] = function () {
                    var e = t.result(this, n),
                      r = Array.prototype.slice.call(arguments);
                    return t[i].apply(t, [e].concat(r));
                  };
                });
              },
              ge = function (e) {
                (this._views = {}),
                  (this._indexByModel = {}),
                  (this._indexByCustom = {}),
                  this._updateLength(),
                  t.each(e, t.bind(this.add, this));
              };
            pe(ge.prototype, "_getViews"),
              t.extend(ge.prototype, {
                _getViews: function () {
                  return t.values(this._views);
                },
                add: function (e, t) {
                  return this._add(e, t)._updateLength();
                },
                _add: function (e, t) {
                  var n = e.cid;
                  return (this._views[n] = e), e.model && (this._indexByModel[e.model.cid] = n), t && (this._indexByCustom[t] = n), this;
                },
                findByModel: function (e) {
                  return this.findByModelCid(e.cid);
                },
                findByModelCid: function (e) {
                  var t = this._indexByModel[e];
                  return this.findByCid(t);
                },
                findByCustom: function (e) {
                  var t = this._indexByCustom[e];
                  return this.findByCid(t);
                },
                findByIndex: function (e) {
                  return t.values(this._views)[e];
                },
                findByCid: function (e) {
                  return this._views[e];
                },
                remove: function (e) {
                  return this._remove(e)._updateLength();
                },
                _remove: function (e) {
                  var n = e.cid;
                  return (
                    e.model && delete this._indexByModel[e.model.cid],
                    t.some(
                      this._indexByCustom,
                      t.bind(function (e, t) {
                        if (e === n) return delete this._indexByCustom[t], !0;
                      }, this)
                    ),
                    delete this._views[n],
                    this
                  );
                },
                _updateLength: function () {
                  return (this.length = t.size(this._views)), this;
                }
              });
            var ve = [
                "behaviors",
                "childView",
                "childViewEventPrefix",
                "childViewEvents",
                "childViewOptions",
                "childViewTriggers",
                "collectionEvents",
                "events",
                "filter",
                "emptyView",
                "emptyViewOptions",
                "modelEvents",
                "reorderOnSort",
                "sort",
                "triggers",
                "ui",
                "viewComparator"
              ],
              me = e.View.extend(
                {
                  sort: !0,
                  constructor: function (n) {
                    (this.render = t.bind(this.render, this)),
                      this._setOptions(n),
                      this.mergeOptions(n, ve),
                      k(this),
                      this._initBehaviors(),
                      this.once("render", this._initialEvents),
                      this._initChildViewStorage(),
                      (this._bufferedChildren = []);
                    var i = Array.prototype.slice.call(arguments);
                    (i[0] = this.options),
                      e.View.prototype.constructor.apply(this, i),
                      this.delegateEntityEvents(),
                      this._triggerEventOnBehaviors("initialize", this);
                  },
                  _startBuffering: function () {
                    this._isBuffering = !0;
                  },
                  _endBuffering: function () {
                    var e = this._isAttached && !1 !== this.monitorViewEvents ? this._getImmediateChildren() : [];
                    (this._isBuffering = !1),
                      t.each(e, function (e) {
                        p(e, "before:attach", e);
                      }),
                      this.attachBuffer(this, this._createBuffer()),
                      t.each(e, function (e) {
                        (e._isAttached = !0), p(e, "attach", e);
                      }),
                      (this._bufferedChildren = []);
                  },
                  _getImmediateChildren: function () {
                    return t.values(this.children._views);
                  },
                  _initialEvents: function () {
                    this.collection &&
                      (this.listenTo(this.collection, "add", this._onCollectionAdd),
                      this.listenTo(this.collection, "update", this._onCollectionUpdate),
                      this.listenTo(this.collection, "reset", this.render),
                      this.sort && this.listenTo(this.collection, "sort", this._sortViews));
                  },
                  _onCollectionAdd: function (e, n, i) {
                    var r = void 0 !== i.at && (i.index || n.indexOf(e));
                    (this.filter || !1 === r) && (r = t.indexOf(this._filteredSortedModels(r), e)),
                      this._shouldAddChild(e, r) && (this._destroyEmptyView(), this._addChild(e, r));
                  },
                  _onCollectionUpdate: function (e, t) {
                    var n = t.changes;
                    this._removeChildModels(n.removed);
                  },
                  _removeChildModels: function (e) {
                    var t = this._getRemovedViews(e);
                    t.length && (this.children._updateLength(), this._updateIndices(t, !1), this.isEmpty() && this._showEmptyView());
                  },
                  _getRemovedViews: function (e) {
                    var n = this;
                    return t.reduce(
                      e,
                      function (e, t) {
                        var i = t && n.children.findByModel(t);
                        return !i || i._isDestroyed ? e : (n._removeChildView(i), e.push(i), e);
                      },
                      []
                    );
                  },
                  _removeChildView: function (e) {
                    this.triggerMethod("before:remove:child", this, e),
                      this.children._remove(e),
                      (e._shouldDisableEvents = !1 === this.monitorViewEvents),
                      re(e),
                      this.stopListening(e),
                      this.triggerMethod("remove:child", this, e);
                  },
                  setElement: function () {
                    return e.View.prototype.setElement.apply(this, arguments), (this._isAttached = s(this.el)), this;
                  },
                  render: function () {
                    return this._isDestroyed
                      ? this
                      : (this.triggerMethod("before:render", this),
                        this._renderChildren(),
                        (this._isRendered = !0),
                        this.triggerMethod("render", this),
                        this);
                  },
                  setFilter: function (e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).preventRender,
                      n = this._isRendered && !this._isDestroyed,
                      i = this.filter !== e;
                    if (n && i && !t) {
                      var r = this._filteredSortedModels();
                      this.filter = e;
                      var o = this._filteredSortedModels();
                      this._applyModelDeltas(o, r);
                    } else this.filter = e;
                    return this;
                  },
                  removeFilter: function (e) {
                    return this.setFilter(null, e);
                  },
                  _applyModelDeltas: function (e, n) {
                    var i = this,
                      r = {};
                    t.each(e, function (e, t) {
                      !i.children.findByModel(e) && i._onCollectionAdd(e, i.collection, { at: t }), (r[e.cid] = !0);
                    });
                    var o = t.filter(n, function (e) {
                      return !r[e.cid] && i.children.findByModel(e);
                    });
                    this._removeChildModels(o);
                  },
                  reorder: function () {
                    var e = this,
                      n = this.children,
                      i = this._filteredSortedModels();
                    if (!i.length && this._showingEmptyView) return this;
                    if (
                      t.some(i, function (e) {
                        return !n.findByModel(e);
                      })
                    )
                      this.render();
                    else {
                      var r = [],
                        o = t.reduce(
                          this.children._views,
                          function (e, n) {
                            var o = t.indexOf(i, n.model);
                            return -1 === o ? (r.push(n.model), e) : ((n._index = o), (e[o] = n.el), e);
                          },
                          new Array(i.length)
                        );
                      this.triggerMethod("before:reorder", this);
                      var s = this.Dom.createBuffer();
                      t.each(o, function (t) {
                        e.Dom.appendContents(s, t);
                      }),
                        this._appendReorderedChildren(s),
                        this._removeChildModels(r),
                        this.triggerMethod("reorder", this);
                    }
                    return this;
                  },
                  resortView: function () {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this;
                  },
                  _sortViews: function () {
                    var e = this,
                      n = this._filteredSortedModels();
                    t.find(n, function (t, n) {
                      var i = e.children.findByModel(t);
                      return !i || i._index !== n;
                    }) && this.resortView();
                  },
                  _emptyViewIndex: -1,
                  _appendReorderedChildren: function (e) {
                    this.Dom.appendContents(this.el, e, { _$el: this.$el });
                  },
                  _renderChildren: function () {
                    this._isRendered && (this._destroyEmptyView(), this._destroyChildren());
                    var e = this._filteredSortedModels();
                    this.isEmpty({ processedModels: e })
                      ? this._showEmptyView()
                      : (this.triggerMethod("before:render:children", this),
                        this._startBuffering(),
                        this._showCollection(e),
                        this._endBuffering(),
                        this.triggerMethod("render:children", this));
                  },
                  _createView: function (e, t) {
                    var n = this._getChildView(e),
                      i = this._getChildViewOptions(e, t);
                    return this.buildChildView(e, n, i);
                  },
                  _setupChildView: function (e, t) {
                    k(e), this._proxyChildViewEvents(e), this.sort && (e._index = t);
                  },
                  _showCollection: function (e) {
                    t.each(e, t.bind(this._addChild, this)), this.children._updateLength();
                  },
                  _filteredSortedModels: function (e) {
                    if (!this.collection || !this.collection.length) return [];
                    var t = this.getViewComparator(),
                      n = this.collection.models;
                    if (((e = Math.min(Math.max(e, 0), n.length - 1)), t)) {
                      var i = void 0;
                      e && ((i = n[e]), (n = n.slice(0, e).concat(n.slice(e + 1)))), (n = this._sortModelsBy(n, t)), i && n.splice(e, 0, i);
                    }
                    return (n = this._filterModels(n));
                  },
                  getViewComparator: function () {
                    return this.viewComparator;
                  },
                  _filterModels: function (e) {
                    var n = this;
                    return (
                      this.filter &&
                        (e = t.filter(e, function (e, t) {
                          return n._shouldAddChild(e, t);
                        })),
                      e
                    );
                  },
                  _sortModelsBy: function (e, n) {
                    return "string" == typeof n
                      ? t.sortBy(e, function (e) {
                          return e.get(n);
                        })
                      : 1 === n.length
                      ? t.sortBy(e, t.bind(n, this))
                      : t.clone(e).sort(t.bind(n, this));
                  },
                  _showEmptyView: function () {
                    var n = this._getEmptyView();
                    if (n && !this._showingEmptyView) {
                      this._showingEmptyView = !0;
                      var i = new e.Model(),
                        r = this.emptyViewOptions || this.childViewOptions;
                      t.isFunction(r) && (r = r.call(this, i, this._emptyViewIndex));
                      var o = this.buildChildView(i, n, r);
                      this.triggerMethod("before:render:empty", this, o),
                        this.addChildView(o, 0),
                        this.triggerMethod("render:empty", this, o);
                    }
                  },
                  _destroyEmptyView: function () {
                    this._showingEmptyView &&
                      (this.triggerMethod("before:remove:empty", this),
                      this._destroyChildren(),
                      delete this._showingEmptyView,
                      this.triggerMethod("remove:empty", this));
                  },
                  _getEmptyView: function () {
                    var e = this.emptyView;
                    if (e) return this._getView(e);
                  },
                  _getChildView: function (e) {
                    var t = this.childView;
                    if (!t) throw new S({ name: "NoChildViewError", message: 'A "childView" must be specified' });
                    if (!(t = this._getView(t, e)))
                      throw new S({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                      });
                    return t;
                  },
                  _getView: function (n, i) {
                    return n.prototype instanceof e.View || n === e.View ? n : t.isFunction(n) ? n.call(this, i) : void 0;
                  },
                  _addChild: function (e, t) {
                    var n = this._createView(e, t);
                    return this.addChildView(n, t), n;
                  },
                  _getChildViewOptions: function (e, n) {
                    return t.isFunction(this.childViewOptions) ? this.childViewOptions(e, n) : this.childViewOptions;
                  },
                  addChildView: function (e, t) {
                    return (
                      this.triggerMethod("before:add:child", this, e),
                      this._setupChildView(e, t),
                      this._isBuffering ? this.children._add(e) : (this._updateIndices(e, !0), this.children.add(e)),
                      ie(e),
                      this._attachView(e, t),
                      this.triggerMethod("add:child", this, e),
                      e
                    );
                  },
                  _updateIndices: function (e, n) {
                    if (this.sort)
                      if (n) {
                        var i = t.isArray(e) ? t.max(e, "_index") : e;
                        t.isObject(i) &&
                          t.each(this.children._views, function (e) {
                            e._index >= i._index && (e._index += 1);
                          });
                      } else
                        t.each(t.sortBy(this.children._views, "_index"), function (e, t) {
                          e._index = t;
                        });
                  },
                  _attachView: function (e, t) {
                    var n = !e._isAttached && !this._isBuffering && this._isAttached && !1 !== this.monitorViewEvents;
                    n && p(e, "before:attach", e), this.attachHtml(this, e, t), n && ((e._isAttached = !0), p(e, "attach", e));
                  },
                  buildChildView: function (e, n, i) {
                    return new n(t.extend({ model: e }, i));
                  },
                  removeChildView: function (e) {
                    return !e || e._isDestroyed
                      ? e
                      : (this._removeChildView(e), this.children._updateLength(), this._updateIndices(e, !1), e);
                  },
                  isEmpty: function (e) {
                    var n = void 0;
                    return (
                      t.result(e, "processedModels")
                        ? (n = e.processedModels)
                        : ((n = this.collection ? this.collection.models : []), (n = this._filterModels(n))),
                      0 === n.length
                    );
                  },
                  attachBuffer: function (e, t) {
                    this.Dom.appendContents(e.el, t, { _$el: e.$el });
                  },
                  _createBuffer: function () {
                    var e = this,
                      n = this.Dom.createBuffer();
                    return (
                      t.each(this._bufferedChildren, function (t) {
                        e.Dom.appendContents(n, t.el, { _$contents: t.$el });
                      }),
                      n
                    );
                  },
                  attachHtml: function (e, t, n) {
                    e._isBuffering ? e._bufferedChildren.splice(n, 0, t) : e._insertBefore(t, n) || e._insertAfter(t);
                  },
                  _insertBefore: function (e, n) {
                    var i = void 0;
                    return (
                      this.sort &&
                        n < this.children.length - 1 &&
                        (i = t.find(this.children._views, function (e) {
                          return e._index === n + 1;
                        })),
                      !!i && (this.beforeEl(i.el, e.el), !0)
                    );
                  },
                  beforeEl: function (e, t) {
                    this.$(e).before(t);
                  },
                  _insertAfter: function (e) {
                    this.Dom.appendContents(this.el, e.el, { _$el: this.$el, _$contents: e.$el });
                  },
                  _initChildViewStorage: function () {
                    this.children = new ge();
                  },
                  _removeChildren: function () {
                    this._destroyChildren();
                  },
                  _destroyChildren: function (e) {
                    this.children.length &&
                      (this.triggerMethod("before:destroy:children", this),
                      t.each(this.children._views, t.bind(this._removeChildView, this)),
                      this.children._updateLength(),
                      this.triggerMethod("destroy:children", this));
                  },
                  _shouldAddChild: function (e, n) {
                    var i = this.filter;
                    return !t.isFunction(i) || i.call(this, e, n, this.collection);
                  }
                },
                { setDomApi: ee }
              );
            t.extend(me.prototype, ne);
            var ye = function () {
              this._init();
            };
            function _e(e, t) {
              return t.model && t.model.get(e);
            }
            pe(ye.prototype, "_views"),
              t.extend(ye.prototype, {
                _init: function () {
                  (this._views = []), (this._viewsByCid = {}), (this._indexByModel = {}), this._updateLength();
                },
                _add: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._views.length,
                    n = e.cid;
                  (this._viewsByCid[n] = e),
                    e.model && (this._indexByModel[e.model.cid] = n),
                    this._views.splice(t, 0, e),
                    this._updateLength();
                },
                _sort: function (e, n) {
                  return "string" == typeof e
                    ? ((e = t.partial(_e, e)), this._sortBy(e))
                    : 1 === e.length
                    ? this._sortBy(t.bind(e, n))
                    : this._views.sort(t.bind(e, n));
                },
                _sortBy: function (e) {
                  var n = t.sortBy(this._views, e);
                  return this._set(n), n;
                },
                _set: function (e) {
                  (this._views.length = 0), this._views.push.apply(this._views, e.slice(0)), this._updateLength();
                },
                _swap: function (e, t) {
                  var n = this.findIndexByView(e),
                    i = this.findIndexByView(t);
                  if (-1 !== n && -1 !== i) {
                    var r = this._views[n];
                    (this._views[n] = this._views[i]), (this._views[i] = r);
                  }
                },
                findByModel: function (e) {
                  return this.findByModelCid(e.cid);
                },
                findByModelCid: function (e) {
                  var t = this._indexByModel[e];
                  return this.findByCid(t);
                },
                findByIndex: function (e) {
                  return this._views[e];
                },
                findIndexByView: function (e) {
                  return this._views.indexOf(e);
                },
                findByCid: function (e) {
                  return this._viewsByCid[e];
                },
                hasView: function (e) {
                  return !!this.findByCid(e.cid);
                },
                _remove: function (e) {
                  if (this._viewsByCid[e.cid]) {
                    e.model && delete this._indexByModel[e.model.cid], delete this._viewsByCid[e.cid];
                    var t = this.findIndexByView(e);
                    this._views.splice(t, 1), this._updateLength();
                  }
                },
                _updateLength: function () {
                  this.length = this._views.length;
                }
              });
            var we = [
                "behaviors",
                "childView",
                "childViewEventPrefix",
                "childViewEvents",
                "childViewOptions",
                "childViewTriggers",
                "collectionEvents",
                "emptyView",
                "emptyViewOptions",
                "events",
                "modelEvents",
                "sortWithCollection",
                "triggers",
                "ui",
                "viewComparator",
                "viewFilter"
              ],
              be = e.View.extend(
                {
                  sortWithCollection: !0,
                  constructor: function (t) {
                    this._setOptions(t),
                      this.mergeOptions(t, we),
                      k(this),
                      this.once("render", this._initialEvents),
                      this._initChildViewStorage(),
                      this._initBehaviors();
                    var n = Array.prototype.slice.call(arguments);
                    (n[0] = this.options),
                      e.View.prototype.constructor.apply(this, n),
                      this.getEmptyRegion(),
                      this.delegateEntityEvents(),
                      this._triggerEventOnBehaviors("initialize", this);
                  },
                  _initChildViewStorage: function () {
                    this.children = new ye();
                  },
                  getEmptyRegion: function () {
                    return this._emptyRegion && !this._emptyRegion.isDestroyed()
                      ? this._emptyRegion
                      : ((this._emptyRegion = new se({ el: this.el, replaceElement: !1 })),
                        (this._emptyRegion._parentView = this),
                        this._emptyRegion);
                  },
                  _initialEvents: function () {
                    this.listenTo(this.collection, {
                      sort: this._onCollectionSort,
                      reset: this._onCollectionReset,
                      update: this._onCollectionUpdate
                    });
                  },
                  _onCollectionSort: function (e, t) {
                    var n = t.add,
                      i = t.merge,
                      r = t.remove;
                    this.sortWithCollection && !1 !== this.viewComparator && (n || r || i || this.sort());
                  },
                  _onCollectionReset: function () {
                    this.render();
                  },
                  _onCollectionUpdate: function (e, t) {
                    var n = t.changes,
                      i = n.removed.length && this._removeChildModels(n.removed);
                    (this._addedViews = n.added.length && this._addChildModels(n.added)),
                      this._detachChildren(i),
                      this._showChildren(),
                      this._removeChildViews(i);
                  },
                  _removeChildModels: function (e) {
                    var n = this;
                    return t.reduce(
                      e,
                      function (e, t) {
                        var i = n._removeChildModel(t);
                        return i && e.push(i), e;
                      },
                      []
                    );
                  },
                  _removeChildModel: function (e) {
                    var t = this.children.findByModel(e);
                    return t && this._removeChild(t), t;
                  },
                  _removeChild: function (e) {
                    this.triggerMethod("before:remove:child", this, e),
                      this.children._remove(e),
                      this.triggerMethod("remove:child", this, e);
                  },
                  _addChildModels: function (e) {
                    return t.map(e, t.bind(this._addChildModel, this));
                  },
                  _addChildModel: function (e) {
                    var t = this._createChildView(e);
                    return this._addChild(t), t;
                  },
                  _createChildView: function (e) {
                    var t = this._getChildView(e),
                      n = this._getChildViewOptions(e);
                    return this.buildChildView(e, t, n);
                  },
                  _addChild: function (e, t) {
                    this.triggerMethod("before:add:child", this, e),
                      this._setupChildView(e),
                      this.children._add(e, t),
                      this.triggerMethod("add:child", this, e);
                  },
                  _getChildView: function (e) {
                    var t = this.childView;
                    if (!t) throw new S({ name: "NoChildViewError", message: 'A "childView" must be specified' });
                    if (!(t = this._getView(t, e)))
                      throw new S({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                      });
                    return t;
                  },
                  _getView: function (n, i) {
                    return n.prototype instanceof e.View || n === e.View ? n : t.isFunction(n) ? n.call(this, i) : void 0;
                  },
                  _getChildViewOptions: function (e) {
                    return t.isFunction(this.childViewOptions) ? this.childViewOptions(e) : this.childViewOptions;
                  },
                  buildChildView: function (e, n, i) {
                    return new n(t.extend({ model: e }, i));
                  },
                  _setupChildView: function (e) {
                    k(e), e.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(e);
                  },
                  _getImmediateChildren: function () {
                    return this.children._views;
                  },
                  setElement: function () {
                    return e.View.prototype.setElement.apply(this, arguments), (this._isAttached = s(this.el)), this;
                  },
                  render: function () {
                    return this._isDestroyed
                      ? this
                      : (this.triggerMethod("before:render", this),
                        this._destroyChildren(),
                        this.children._init(),
                        this.collection && this._addChildModels(this.collection.models),
                        this._showChildren(),
                        (this._isRendered = !0),
                        this.triggerMethod("render", this),
                        this);
                  },
                  sort: function () {
                    return this._isDestroyed ? this : this.children.length ? (this._showChildren(), this) : this;
                  },
                  _showChildren: function () {
                    this.isEmpty() ? this._showEmptyView() : (this._sortChildren(), this.filter());
                  },
                  isEmpty: function (e) {
                    return e || !this.children.length;
                  },
                  _showEmptyView: function () {
                    var e = this._getEmptyView();
                    if (e) {
                      var t = this._getEmptyViewOptions();
                      this.getEmptyRegion().show(new e(t));
                    }
                  },
                  _getEmptyView: function () {
                    var e = this.emptyView;
                    if (e) return this._getView(e);
                  },
                  _destroyEmptyView: function () {
                    var e = this.getEmptyRegion();
                    e.hasView() && e.empty();
                  },
                  _getEmptyViewOptions: function () {
                    var e = this.emptyViewOptions || this.childViewOptions;
                    return t.isFunction(e) ? e.call(this) : e;
                  },
                  _sortChildren: function () {
                    var e = this.getComparator();
                    e &&
                      (delete this._addedViews,
                      this.triggerMethod("before:sort", this),
                      this.children._sort(e, this),
                      this.triggerMethod("sort", this));
                  },
                  setComparator: function (e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).preventRender,
                      n = this.viewComparator !== e && !t;
                    return (this.viewComparator = e), n && this.sort(), this;
                  },
                  removeComparator: function (e) {
                    return this.setComparator(null, e);
                  },
                  getComparator: function () {
                    return this.viewComparator
                      ? this.viewComparator
                      : !(!this.sortWithCollection || !1 === this.viewComparator || !this.collection) && this._viewComparator;
                  },
                  _viewComparator: function (e) {
                    return this.collection.indexOf(e.model);
                  },
                  filter: function () {
                    if (this._isDestroyed) return this;
                    if (!this.children.length) return this;
                    var e = this._filterChildren();
                    return this._renderChildren(e), this;
                  },
                  _filterChildren: function () {
                    var e = this,
                      n = this._getFilter(),
                      i = this._addedViews;
                    if ((delete this._addedViews, !n)) return i || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var r = [],
                      o = [];
                    return (
                      t.each(this.children._views, function (t, i, s) {
                        (n.call(e, t, i, s) ? r : o).push(t);
                      }),
                      this._detachChildren(o),
                      this.triggerMethod("filter", this, r, o),
                      r
                    );
                  },
                  _getFilter: function () {
                    var e = this.getFilter();
                    if (!e) return !1;
                    if (t.isFunction(e)) return e;
                    if (t.isObject(e)) {
                      var n = t.matches(e);
                      return function (e) {
                        return n(e.model && e.model.attributes);
                      };
                    }
                    if (t.isString(e))
                      return function (t) {
                        return t.model && t.model.get(e);
                      };
                    throw new S({
                      name: "InvalidViewFilterError",
                      message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    });
                  },
                  getFilter: function () {
                    return this.viewFilter;
                  },
                  setFilter: function (e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).preventRender,
                      n = this.viewFilter !== e && !t;
                    return (this.viewFilter = e), n && this.filter(), this;
                  },
                  removeFilter: function (e) {
                    return this.setFilter(null, e);
                  },
                  _detachChildren: function (e) {
                    t.each(e, t.bind(this._detachChildView, this));
                  },
                  _detachChildView: function (e) {
                    var t = e._isAttached && !1 !== this.monitorViewEvents;
                    t && p(e, "before:detach", e), this.detachHtml(e), t && ((e._isAttached = !1), p(e, "detach", e));
                  },
                  detachHtml: function (e) {
                    this.Dom.detachEl(e.el, e.$el);
                  },
                  _renderChildren: function (e) {
                    if (this.isEmpty(!e.length)) this._showEmptyView();
                    else {
                      this._destroyEmptyView(), this.triggerMethod("before:render:children", this, e);
                      var t = this._getBuffer(e);
                      this._attachChildren(t, e), this.triggerMethod("render:children", this, e);
                    }
                  },
                  _attachChildren: function (e, n) {
                    (n = this._isAttached && !1 !== this.monitorViewEvents ? n : []),
                      t.each(n, function (e) {
                        e._isAttached || p(e, "before:attach", e);
                      }),
                      this.attachHtml(e),
                      t.each(n, function (e) {
                        e._isAttached || ((e._isAttached = !0), p(e, "attach", e));
                      });
                  },
                  _getBuffer: function (e) {
                    var n = this,
                      i = this.Dom.createBuffer();
                    return (
                      t.each(e, function (e) {
                        ie(e), n.Dom.appendContents(i, e.el, { _$contents: e.$el });
                      }),
                      i
                    );
                  },
                  attachHtml: function (e) {
                    this.Dom.appendContents(this.el, e, { _$el: this.$el });
                  },
                  swapChildViews: function (e, t) {
                    if (!this.children.hasView(e) || !this.children.hasView(t))
                      throw new S({ name: "ChildSwapError", message: "Both views must be children of the collection view" });
                    return (
                      this.children._swap(e, t),
                      this.Dom.swapEl(e.el, t.el),
                      this.Dom.hasEl(this.el, e.el) !== this.Dom.hasEl(this.el, t.el) && this.filter(),
                      this
                    );
                  },
                  addChildView: function (e, t) {
                    return !e || e._isDestroyed
                      ? e
                      : ((!t || t >= this.children.length) && (this._addedViews = [e]), this._addChild(e, t), this._showChildren(), e);
                  },
                  detachChildView: function (e) {
                    return this.removeChildView(e, { shouldDetach: !0 }), e;
                  },
                  removeChildView: function (e, t) {
                    return e ? (this._removeChildView(e, t), this._removeChild(e), this.isEmpty() && this._showEmptyView(), e) : e;
                  },
                  _removeChildViews: function (e) {
                    t.each(e, t.bind(this._removeChildView, this));
                  },
                  _removeChildView: function (e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).shouldDetach;
                    e.off("destroy", this.removeChildView, this),
                      t ? this._detachChildView(e) : this._destroyChildView(e),
                      this.stopListening(e);
                  },
                  _destroyChildView: function (e) {
                    e._isDestroyed || ((e._shouldDisableEvents = !1 === this.monitorViewEvents), re(e));
                  },
                  _removeChildren: function () {
                    this._destroyChildren(), this.getEmptyRegion().destroy(), delete this._addedViews;
                  },
                  _destroyChildren: function () {
                    this.children &&
                      this.children.length &&
                      (this.triggerMethod("before:destroy:children", this),
                      !1 === this.monitorViewEvents && this.Dom.detachContents(this.el, this.$el),
                      t.each(this.children._views, t.bind(this._removeChildView, this)),
                      this.triggerMethod("destroy:children", this));
                  }
                },
                { setDomApi: ee }
              );
            t.extend(be.prototype, ne);
            var xe = ["childViewContainer", "template", "templateContext"],
              Ce = me.extend({
                constructor: function (e) {
                  o("CompositeView is deprecated. Convert to View at your earliest convenience"),
                    this.mergeOptions(e, xe),
                    me.prototype.constructor.apply(this, arguments);
                },
                _initialEvents: function () {
                  this.collection &&
                    (this.listenTo(this.collection, "add", this._onCollectionAdd),
                    this.listenTo(this.collection, "update", this._onCollectionUpdate),
                    this.listenTo(this.collection, "reset", this.renderChildren),
                    this.sort && this.listenTo(this.collection, "sort", this._sortViews));
                },
                _getChildView: function (e) {
                  var t = this.childView;
                  if (!t) return this.constructor;
                  if (!(t = this._getView(t, e)))
                    throw new S({
                      name: "InvalidChildViewError",
                      message: '"childView" must be a view class or a function that returns a view class'
                    });
                  return t;
                },
                serializeData: function () {
                  return this.serializeModel();
                },
                render: function () {
                  return this._isDestroyed
                    ? this
                    : ((this._isRendering = !0),
                      this.resetChildViewContainer(),
                      this.triggerMethod("before:render", this),
                      this._renderTemplate(),
                      this.bindUIElements(),
                      this.renderChildren(),
                      (this._isRendering = !1),
                      (this._isRendered = !0),
                      this.triggerMethod("render", this),
                      this);
                },
                renderChildren: function () {
                  (this._isRendered || this._isRendering) && me.prototype._renderChildren.call(this);
                },
                attachBuffer: function (e, t) {
                  var n = this.getChildViewContainer(e);
                  this.Dom.appendContents(n[0], t, { _$el: n });
                },
                _insertAfter: function (e) {
                  var t = this.getChildViewContainer(this, e);
                  this.Dom.appendContents(t[0], e.el, { _$el: t, _$contents: e.$el });
                },
                _appendReorderedChildren: function (e) {
                  var t = this.getChildViewContainer(this);
                  this.Dom.appendContents(t[0], e, { _$el: t });
                },
                getChildViewContainer: function (e, n) {
                  if (e.$childViewContainer) return e.$childViewContainer;
                  var i = void 0;
                  if (e.childViewContainer) {
                    var r = t.result(e, "childViewContainer");
                    if ((i = "@" === r.charAt(0) && e.ui ? e.ui[r.substr(4)] : this.$(r)).length <= 0)
                      throw new S({
                        name: "ChildViewContainerMissingError",
                        message: 'The specified "childViewContainer" was not found: ' + e.childViewContainer
                      });
                  } else i = e.$el;
                  return (e.$childViewContainer = i), i;
                },
                resetChildViewContainer: function () {
                  this.$childViewContainer && (this.$childViewContainer = void 0);
                }
              }),
              Ee = t.pick(
                de.prototype,
                "serializeModel",
                "getTemplate",
                "_renderTemplate",
                "_renderHtml",
                "mixinTemplateContext",
                "attachElContent"
              );
            t.extend(Ce.prototype, Ee);
            var Te = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
              Ae = H.extend({
                cidPrefix: "mnb",
                constructor: function (e, n) {
                  (this.view = n),
                    this.defaults && o("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."),
                    (this.defaults = t.clone(t.result(this, "defaults", {}))),
                    this._setOptions(t.extend({}, this.defaults, e)),
                    this.mergeOptions(this.options, Te),
                    (this.ui = t.extend({}, t.result(this, "ui"), t.result(n, "ui"))),
                    H.apply(this, arguments);
                },
                $: function () {
                  return this.view.$.apply(this.view, arguments);
                },
                destroy: function () {
                  return this.stopListening(), this.view._removeBehavior(this), this;
                },
                proxyViewProperties: function () {
                  return (this.$el = this.view.$el), (this.el = this.view.el), this;
                },
                bindUIElements: function () {
                  return this._bindUIElements(), this;
                },
                unbindUIElements: function () {
                  return this._unbindUIElements(), this;
                },
                getUI: function (e) {
                  return this._getUI(e);
                },
                delegateEntityEvents: function () {
                  return this._delegateEntityEvents(this.view.model, this.view.collection), this;
                },
                undelegateEntityEvents: function () {
                  return this._undelegateEntityEvents(this.view.model, this.view.collection), this;
                },
                getEvents: function () {
                  var e = this,
                    n = this.normalizeUIKeys(t.result(this, "events"));
                  return t.reduce(
                    n,
                    function (n, i, r) {
                      return t.isFunction(i) || (i = e[i]), i ? ((n[(r = X(r, e.cid))] = t.bind(i, e)), n) : n;
                    },
                    {}
                  );
                },
                getTriggers: function () {
                  if (this.triggers) {
                    var e = this.normalizeUIKeys(t.result(this, "triggers"));
                    return this._getViewTriggers(this.view, e);
                  }
                }
              });
            t.extend(Ae.prototype, z, Y, Q);
            var Ve = ["region", "regionClass"],
              ke = H.extend({
                cidPrefix: "mna",
                constructor: function (e) {
                  this._setOptions(e), this.mergeOptions(e, Ve), this._initRegion(), H.prototype.constructor.apply(this, arguments);
                },
                regionClass: se,
                _initRegion: function () {
                  var e = this.region;
                  if (e) {
                    var t = { regionClass: this.regionClass };
                    this._region = ae(e, t);
                  }
                },
                getRegion: function () {
                  return this._region;
                },
                showView: function (e) {
                  for (var t = this.getRegion(), n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    i[r - 1] = arguments[r];
                  return t.show.apply(t, [e].concat(i));
                },
                getView: function () {
                  return this.getRegion().currentView;
                },
                start: function (e) {
                  return this.triggerMethod("before:start", this, e), this.triggerMethod("start", this, e), this;
                }
              }),
              Me = ["appRoutes", "controller"],
              Se = e.Router.extend({
                constructor: function (t) {
                  this._setOptions(t), this.mergeOptions(t, Me), e.Router.apply(this, arguments);
                  var n = this.appRoutes,
                    i = this._getController();
                  this.processAppRoutes(i, n), this.on("route", this._processOnRoute, this);
                },
                appRoute: function (e, t) {
                  var n = this._getController();
                  return this._addAppRoute(n, e, t), this;
                },
                _processOnRoute: function (e, n) {
                  if (t.isFunction(this.onRoute)) {
                    var i = t.invert(this.appRoutes)[e];
                    this.onRoute(e, i, n);
                  }
                },
                processAppRoutes: function (e, n) {
                  var i = this;
                  if (!n) return this;
                  var r = t.keys(n).reverse();
                  return (
                    t.each(r, function (t) {
                      i._addAppRoute(e, t, n[t]);
                    }),
                    this
                  );
                },
                _getController: function () {
                  return this.controller;
                },
                _addAppRoute: function (e, n, i) {
                  var r = e[i];
                  if (!r) throw new S('Method "' + i + '" was not found on the controller');
                  this.route(n, i, t.bind(r, e));
                },
                triggerMethod: f
              });
            t.extend(Se.prototype, B);
            var De = e.Marionette,
              je = (e.Marionette = {});
            return (
              (je.noConflict = function () {
                return (e.Marionette = De), this;
              }),
              (je.bindEvents = i(j)),
              (je.unbindEvents = i(R)),
              (je.bindRequests = i(N)),
              (je.unbindRequests = i(I)),
              (je.mergeOptions = i(a)),
              (je.getOption = i(u)),
              (je.normalizeMethods = i(l)),
              (je.extend = r),
              (je.isNodeAttached = s),
              (je.deprecate = o),
              (je.triggerMethod = i(f)),
              (je.triggerMethodOn = p),
              (je.isEnabled = J),
              (je.setEnabled = function (e, t) {
                return (G[e] = t);
              }),
              (je.monitorViewEvents = k),
              (je.Behaviors = {}),
              (je.Behaviors.behaviorsLookup = function () {
                throw new S({
                  message: "You must define where your behaviors are stored.",
                  url: "marionette.behaviors.md#behaviorslookup"
                });
              }),
              (je.Application = ke),
              (je.AppRouter = Se),
              (je.Renderer = ce),
              (je.TemplateCache = q),
              (je.View = de),
              (je.CollectionView = me),
              (je.NextCollectionView = be),
              (je.CompositeView = Ce),
              (je.Behavior = Ae),
              (je.Region = se),
              (je.Error = S),
              (je.Object = H),
              (je.DEV_MODE = !1),
              (je.FEATURES = G),
              (je.VERSION = "3.5.1"),
              (je.DomApi = te),
              (je.setDomApi = function (e) {
                me.setDomApi(e), Ce.setDomApi(e), be.setDomApi(e), se.setDomApi(e), de.setDomApi(e);
              }),
              je
            );
          }),
          "object" == typeof n && void 0 !== t
            ? (t.exports = r(e("backbone"), e("underscore"), e("backbone.radio")))
            : "function" == typeof define && define.amd
            ? define(["backbone", "underscore", "backbone.radio"], r)
            : (i.Marionette = r(i.Backbone, i._, i.Backbone.Radio)),
          this && this.Marionette && (this.Mn = this.Marionette);
      },
      { backbone: "backbone", "backbone.radio": 1, underscore: "underscore" }
    ],
    backbone: [
      function (e, t, n) {
        (function (t) {
          (function () {
            //     (c) 2010-2022 Jeremy Ashkenas and DocumentCloud
            !(function (i) {
              var r = ("object" == typeof self && self.self === self && self) || ("object" == typeof t && t.global === t && t);
              if ("function" == typeof define && define.amd)
                define(["underscore", "jquery", "exports"], function (e, t, n) {
                  r.Backbone = i(r, n, e, t);
                });
              else if (void 0 !== n) {
                var o,
                  s = e("underscore");
                try {
                  o = e("jquery");
                } catch (e) {}
                i(r, n, s, o);
              } else r.Backbone = i(r, {}, r._, r.jQuery || r.Zepto || r.ender || r.$);
            })(function (e, t, n, i) {
              var r = e.Backbone,
                o = Array.prototype.slice;
              (t.VERSION = "1.4.1"),
                (t.$ = i),
                (t.noConflict = function () {
                  return (e.Backbone = r), this;
                }),
                (t.emulateHTTP = !1),
                (t.emulateJSON = !1);
              var s,
                a = (t.Events = {}),
                u = /\s+/,
                l = function (e, t, i, r, o) {
                  var s,
                    a = 0;
                  if (i && "object" == typeof i) {
                    void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
                    for (s = n.keys(i); a < s.length; a++) t = l(e, t, s[a], i[s[a]], o);
                  } else if (i && u.test(i)) for (s = i.split(u); a < s.length; a++) t = e(t, s[a], r, o);
                  else t = e(t, i, r, o);
                  return t;
                };
              (a.on = function (e, t, n) {
                ((this._events = l(c, this._events || {}, e, t, { context: n, ctx: this, listening: s })), s) &&
                  (((this._listeners || (this._listeners = {}))[s.id] = s), (s.interop = !1));
                return this;
              }),
                (a.listenTo = function (e, t, i) {
                  if (!e) return this;
                  var r = e._listenId || (e._listenId = n.uniqueId("l")),
                    o = this._listeningTo || (this._listeningTo = {}),
                    a = (s = o[r]);
                  a || (this._listenId || (this._listenId = n.uniqueId("l")), (a = s = o[r] = new v(this, e)));
                  var u = h(e, t, i, this);
                  if (((s = void 0), u)) throw u;
                  return a.interop && a.on(t, i), this;
                });
              var c = function (e, t, n, i) {
                  if (n) {
                    var r = e[t] || (e[t] = []),
                      o = i.context,
                      s = i.ctx,
                      a = i.listening;
                    a && a.count++, r.push({ callback: n, context: o, ctx: o || s, listening: a });
                  }
                  return e;
                },
                h = function (e, t, n, i) {
                  try {
                    e.on(t, n, i);
                  } catch (e) {
                    return e;
                  }
                };
              (a.off = function (e, t, n) {
                return this._events ? ((this._events = l(d, this._events, e, t, { context: n, listeners: this._listeners })), this) : this;
              }),
                (a.stopListening = function (e, t, i) {
                  var r = this._listeningTo;
                  if (!r) return this;
                  for (var o = e ? [e._listenId] : n.keys(r), s = 0; s < o.length; s++) {
                    var a = r[o[s]];
                    if (!a) break;
                    a.obj.off(t, i, this), a.interop && a.off(t, i);
                  }
                  return n.isEmpty(r) && (this._listeningTo = void 0), this;
                });
              var d = function (e, t, i, r) {
                if (e) {
                  var o,
                    s = r.context,
                    a = r.listeners,
                    u = 0;
                  if (t || s || i) {
                    for (o = t ? [t] : n.keys(e); u < o.length; u++) {
                      var l = e[(t = o[u])];
                      if (!l) break;
                      for (var c = [], h = 0; h < l.length; h++) {
                        var d = l[h];
                        if ((i && i !== d.callback && i !== d.callback._callback) || (s && s !== d.context)) c.push(d);
                        else {
                          var f = d.listening;
                          f && f.off(t, i);
                        }
                      }
                      c.length ? (e[t] = c) : delete e[t];
                    }
                    return e;
                  }
                  for (o = n.keys(a); u < o.length; u++) a[o[u]].cleanup();
                }
              };
              (a.once = function (e, t, n) {
                var i = l(f, {}, e, t, this.off.bind(this));
                return "string" == typeof e && null == n && (t = void 0), this.on(i, t, n);
              }),
                (a.listenToOnce = function (e, t, n) {
                  var i = l(f, {}, t, n, this.stopListening.bind(this, e));
                  return this.listenTo(e, i);
                });
              var f = function (e, t, i, r) {
                if (i) {
                  var o = (e[t] = n.once(function () {
                    r(t, o), i.apply(this, arguments);
                  }));
                  o._callback = i;
                }
                return e;
              };
              a.trigger = function (e) {
                if (!this._events) return this;
                for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++) n[i] = arguments[i + 1];
                return l(p, this._events, e, void 0, n), this;
              };
              var p = function (e, t, n, i) {
                  if (e) {
                    var r = e[t],
                      o = e.all;
                    r && o && (o = o.slice()), r && g(r, i), o && g(o, [t].concat(i));
                  }
                  return e;
                },
                g = function (e, t) {
                  var n,
                    i = -1,
                    r = e.length,
                    o = t[0],
                    s = t[1],
                    a = t[2];
                  switch (t.length) {
                    case 0:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx);
                      return;
                    case 1:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx, o);
                      return;
                    case 2:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx, o, s);
                      return;
                    case 3:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx, o, s, a);
                      return;
                    default:
                      for (; ++i < r; ) (n = e[i]).callback.apply(n.ctx, t);
                      return;
                  }
                },
                v = function (e, t) {
                  (this.id = e._listenId),
                    (this.listener = e),
                    (this.obj = t),
                    (this.interop = !0),
                    (this.count = 0),
                    (this._events = void 0);
                };
              (v.prototype.on = a.on),
                (v.prototype.off = function (e, t) {
                  var n;
                  this.interop
                    ? ((this._events = l(d, this._events, e, t, { context: void 0, listeners: void 0 })), (n = !this._events))
                    : (this.count--, (n = 0 === this.count)),
                    n && this.cleanup();
                }),
                (v.prototype.cleanup = function () {
                  delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
                }),
                (a.bind = a.on),
                (a.unbind = a.off),
                n.extend(t, a);
              var m = (t.Model = function (e, t) {
                var i = e || {};
                t || (t = {}),
                  this.preinitialize.apply(this, arguments),
                  (this.cid = n.uniqueId(this.cidPrefix)),
                  (this.attributes = {}),
                  t.collection && (this.collection = t.collection),
                  t.parse && (i = this.parse(i, t) || {});
                var r = n.result(this, "defaults");
                (i = n.defaults(n.extend({}, r, i), r)), this.set(i, t), (this.changed = {}), this.initialize.apply(this, arguments);
              });
              n.extend(m.prototype, a, {
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
                set: function (e, t, i) {
                  if (null == e) return this;
                  var r;
                  if (("object" == typeof e ? ((r = e), (i = t)) : ((r = {})[e] = t), i || (i = {}), !this._validate(r, i))) return !1;
                  var o = i.unset,
                    s = i.silent,
                    a = [],
                    u = this._changing;
                  (this._changing = !0), u || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                  var l = this.attributes,
                    c = this.changed,
                    h = this._previousAttributes;
                  for (var d in r)
                    (t = r[d]),
                      n.isEqual(l[d], t) || a.push(d),
                      n.isEqual(h[d], t) ? delete c[d] : (c[d] = t),
                      o ? delete l[d] : (l[d] = t);
                  if (this.idAttribute in r) {
                    var f = this.id;
                    (this.id = this.get(this.idAttribute)), this.trigger("changeId", this, f, i);
                  }
                  if (!s) {
                    a.length && (this._pending = i);
                    for (var p = 0; p < a.length; p++) this.trigger("change:" + a[p], this, l[a[p]], i);
                  }
                  if (u) return this;
                  if (!s) for (; this._pending; ) (i = this._pending), (this._pending = !1), this.trigger("change", this, i);
                  return (this._pending = !1), (this._changing = !1), this;
                },
                unset: function (e, t) {
                  return this.set(e, void 0, n.extend({}, t, { unset: !0 }));
                },
                clear: function (e) {
                  var t = {};
                  for (var i in this.attributes) t[i] = void 0;
                  return this.set(t, n.extend({}, e, { unset: !0 }));
                },
                hasChanged: function (e) {
                  return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e);
                },
                changedAttributes: function (e) {
                  if (!e) return !!this.hasChanged() && n.clone(this.changed);
                  var t,
                    i = this._changing ? this._previousAttributes : this.attributes,
                    r = {};
                  for (var o in e) {
                    var s = e[o];
                    n.isEqual(i[o], s) || ((r[o] = s), (t = !0));
                  }
                  return !!t && r;
                },
                previous: function (e) {
                  return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
                },
                previousAttributes: function () {
                  return n.clone(this._previousAttributes);
                },
                fetch: function (e) {
                  var t = this,
                    i = (e = n.extend({ parse: !0 }, e)).success;
                  return (
                    (e.success = function (n) {
                      var r = e.parse ? t.parse(n, e) : n;
                      if (!t.set(r, e)) return !1;
                      i && i.call(e.context, t, n, e), t.trigger("sync", t, n, e);
                    }),
                    U(this, e),
                    this.sync("read", this, e)
                  );
                },
                save: function (e, t, i) {
                  var r;
                  null == e || "object" == typeof e ? ((r = e), (i = t)) : ((r = {})[e] = t);
                  var o = (i = n.extend({ validate: !0, parse: !0 }, i)).wait;
                  if (r && !o) {
                    if (!this.set(r, i)) return !1;
                  } else if (!this._validate(r, i)) return !1;
                  var s = this,
                    a = i.success,
                    u = this.attributes;
                  (i.success = function (e) {
                    s.attributes = u;
                    var t = i.parse ? s.parse(e, i) : e;
                    if ((o && (t = n.extend({}, r, t)), t && !s.set(t, i))) return !1;
                    a && a.call(i.context, s, e, i), s.trigger("sync", s, e, i);
                  }),
                    U(this, i),
                    r && o && (this.attributes = n.extend({}, u, r));
                  var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
                  "patch" !== l || i.attrs || (i.attrs = r);
                  var c = this.sync(l, this, i);
                  return (this.attributes = u), c;
                },
                destroy: function (e) {
                  var t = this,
                    i = (e = e ? n.clone(e) : {}).success,
                    r = e.wait,
                    o = function () {
                      t.stopListening(), t.trigger("destroy", t, t.collection, e);
                    };
                  e.success = function (n) {
                    r && o(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e);
                  };
                  var s = !1;
                  return this.isNew() ? n.defer(e.success) : (U(this, e), (s = this.sync("delete", this, e))), r || o(), s;
                },
                url: function () {
                  var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
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
                  var i = (this.validationError = this.validate(e, t) || null);
                  return !i || (this.trigger("invalid", this, i, n.extend(t, { validationError: i })), !1);
                }
              });
              var y = (t.Collection = function (e, t) {
                  t || (t = {}),
                    this.preinitialize.apply(this, arguments),
                    t.model && (this.model = t.model),
                    void 0 !== t.comparator && (this.comparator = t.comparator),
                    this._reset(),
                    this.initialize.apply(this, arguments),
                    e && this.reset(e, n.extend({ silent: !0 }, t));
                }),
                _ = { add: !0, remove: !0, merge: !0 },
                w = { add: !0, remove: !1 },
                b = function (e, t, n) {
                  n = Math.min(Math.max(n, 0), e.length);
                  var i,
                    r = Array(e.length - n),
                    o = t.length;
                  for (i = 0; i < r.length; i++) r[i] = e[i + n];
                  for (i = 0; i < o; i++) e[i + n] = t[i];
                  for (i = 0; i < r.length; i++) e[i + o + n] = r[i];
                };
              n.extend(y.prototype, a, {
                model: m,
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
                  var i = !n.isArray(e);
                  e = i ? [e] : e.slice();
                  var r = this._removeModels(e, t);
                  return (
                    !t.silent && r.length && ((t.changes = { added: [], merged: [], removed: r }), this.trigger("update", this, t)),
                    i ? r[0] : r
                  );
                },
                set: function (e, t) {
                  if (null != e) {
                    (t = n.extend({}, _, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                    var i = !n.isArray(e);
                    e = i ? [e] : e.slice();
                    var r = t.at;
                    null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                    var o,
                      s,
                      a = [],
                      u = [],
                      l = [],
                      c = [],
                      h = {},
                      d = t.add,
                      f = t.merge,
                      p = t.remove,
                      g = !1,
                      v = this.comparator && null == r && !1 !== t.sort,
                      m = n.isString(this.comparator) ? this.comparator : null;
                    for (s = 0; s < e.length; s++) {
                      o = e[s];
                      var y = this.get(o);
                      if (y) {
                        if (f && o !== y) {
                          var w = this._isModel(o) ? o.attributes : o;
                          t.parse && (w = y.parse(w, t)), y.set(w, t), l.push(y), v && !g && (g = y.hasChanged(m));
                        }
                        h[y.cid] || ((h[y.cid] = !0), a.push(y)), (e[s] = y);
                      } else
                        d && (o = e[s] = this._prepareModel(o, t)) && (u.push(o), this._addReference(o, t), (h[o.cid] = !0), a.push(o));
                    }
                    if (p) {
                      for (s = 0; s < this.length; s++) h[(o = this.models[s]).cid] || c.push(o);
                      c.length && this._removeModels(c, t);
                    }
                    var x = !1,
                      C = !v && d && p;
                    if (
                      (a.length && C
                        ? ((x =
                            this.length !== a.length ||
                            n.some(this.models, function (e, t) {
                              return e !== a[t];
                            })),
                          (this.models.length = 0),
                          b(this.models, a, 0),
                          (this.length = this.models.length))
                        : u.length && (v && (g = !0), b(this.models, u, null == r ? this.length : r), (this.length = this.models.length)),
                      g && this.sort({ silent: !0 }),
                      !t.silent)
                    ) {
                      for (s = 0; s < u.length; s++) null != r && (t.index = r + s), (o = u[s]).trigger("add", o, this, t);
                      (g || x) && this.trigger("sort", this, t),
                        (u.length || c.length || l.length) &&
                          ((t.changes = { added: u, removed: c, merged: l }), this.trigger("update", this, t));
                    }
                    return i ? e[0] : e;
                  }
                },
                reset: function (e, t) {
                  t = t ? n.clone(t) : {};
                  for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], t);
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
                  return o.apply(this.models, arguments);
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
                  var i = t.length;
                  return (
                    n.isFunction(t) && (t = t.bind(this)),
                    1 === i || n.isString(t) ? (this.models = this.sortBy(t)) : this.models.sort(t),
                    e.silent || this.trigger("sort", this, e),
                    this
                  );
                },
                pluck: function (e) {
                  return this.map(e + "");
                },
                fetch: function (e) {
                  var t = (e = n.extend({ parse: !0 }, e)).success,
                    i = this;
                  return (
                    (e.success = function (n) {
                      var r = e.reset ? "reset" : "set";
                      i[r](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e);
                    }),
                    U(this, e),
                    this.sync("read", this, e)
                  );
                },
                create: function (e, t) {
                  var i = (t = t ? n.clone(t) : {}).wait;
                  if (!(e = this._prepareModel(e, t))) return !1;
                  i || this.add(e, t);
                  var r = this,
                    o = t.success;
                  return (
                    (t.success = function (e, t, n) {
                      i && r.add(e, n), o && o.call(n.context, e, t, n);
                    }),
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
                  return new C(this, E);
                },
                keys: function () {
                  return new C(this, T);
                },
                entries: function () {
                  return new C(this, A);
                },
                _reset: function () {
                  (this.length = 0), (this.models = []), (this._byId = {});
                },
                _prepareModel: function (e, t) {
                  return this._isModel(e)
                    ? (e.collection || (e.collection = this), e)
                    : (((t = t ? n.clone(t) : {}).collection = this),
                      (i = this.model.prototype ? new this.model(e, t) : this.model(e, t)).validationError
                        ? (this.trigger("invalid", this, i.validationError, t), !1)
                        : i);
                  var i;
                },
                _removeModels: function (e, t) {
                  for (var n = [], i = 0; i < e.length; i++) {
                    var r = this.get(e[i]);
                    if (r) {
                      var o = this.indexOf(r);
                      this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                      var s = this.modelId(r.attributes, r.idAttribute);
                      null != s && delete this._byId[s],
                        t.silent || ((t.index = o), r.trigger("remove", r, this, t)),
                        n.push(r),
                        this._removeReference(r, t);
                    }
                  }
                  return n;
                },
                _isModel: function (e) {
                  return e instanceof m;
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
                _onModelEvent: function (e, t, n, i) {
                  if (t) {
                    if (("add" === e || "remove" === e) && n !== this) return;
                    if (("destroy" === e && this.remove(t, i), "changeId" === e)) {
                      var r = this.modelId(t.previousAttributes(), t.idAttribute),
                        o = this.modelId(t.attributes, t.idAttribute);
                      null != r && delete this._byId[r], null != o && (this._byId[o] = t);
                    }
                  }
                  this.trigger.apply(this, arguments);
                }
              });
              var x = "function" == typeof Symbol && Symbol.iterator;
              x && (y.prototype[x] = y.prototype.values);
              var C = function (e, t) {
                  (this._collection = e), (this._kind = t), (this._index = 0);
                },
                E = 1,
                T = 2,
                A = 3;
              x &&
                (C.prototype[x] = function () {
                  return this;
                }),
                (C.prototype.next = function () {
                  if (this._collection) {
                    if (this._index < this._collection.length) {
                      var e,
                        t = this._collection.at(this._index);
                      if ((this._index++, this._kind === E)) e = t;
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
              var V = (t.View = function (e) {
                  (this.cid = n.uniqueId("view")),
                    this.preinitialize.apply(this, arguments),
                    n.extend(this, n.pick(e, M)),
                    this._ensureElement(),
                    this.initialize.apply(this, arguments);
                }),
                k = /^(\S+)\s*(.*)$/,
                M = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
              n.extend(V.prototype, a, {
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
                    var i = e[t];
                    if ((n.isFunction(i) || (i = this[i]), i)) {
                      var r = t.match(k);
                      this.delegate(r[1], r[2], i.bind(this));
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
              var S = function (e, t, i, r) {
                  n.each(i, function (n, i) {
                    t[i] &&
                      (e.prototype[i] = (function (e, t, n, i) {
                        switch (t) {
                          case 1:
                            return function () {
                              return e[n](this[i]);
                            };
                          case 2:
                            return function (t) {
                              return e[n](this[i], t);
                            };
                          case 3:
                            return function (t, r) {
                              return e[n](this[i], D(t, this), r);
                            };
                          case 4:
                            return function (t, r, o) {
                              return e[n](this[i], D(t, this), r, o);
                            };
                          default:
                            return function () {
                              var t = o.call(arguments);
                              return t.unshift(this[i]), e[n].apply(e, t);
                            };
                        }
                      })(t, n, i, r));
                  });
                },
                D = function (e, t) {
                  return n.isFunction(e)
                    ? e
                    : n.isObject(e) && !t._isModel(e)
                    ? j(e)
                    : n.isString(e)
                    ? function (t) {
                        return t.get(e);
                      }
                    : e;
                },
                j = function (e) {
                  var t = n.matches(e);
                  return function (e) {
                    return t(e.attributes);
                  };
                };
              n.each(
                [
                  [
                    y,
                    {
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
                    "models"
                  ],
                  [m, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes"]
                ],
                function (e) {
                  var t = e[0],
                    i = e[1],
                    r = e[2];
                  (t.mixin = function (e) {
                    var i = n.reduce(
                      n.functions(e),
                      function (e, t) {
                        return (e[t] = 0), e;
                      },
                      {}
                    );
                    S(t, e, i, r);
                  }),
                    S(t, n, i, r);
                }
              ),
                (t.sync = function (e, i, r) {
                  var o = R[e];
                  n.defaults(r || (r = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
                  var s = { type: o, dataType: "json" };
                  if (
                    (r.url || (s.url = n.result(i, "url") || F()),
                    null != r.data ||
                      !i ||
                      ("create" !== e && "update" !== e && "patch" !== e) ||
                      ((s.contentType = "application/json"), (s.data = JSON.stringify(r.attrs || i.toJSON(r)))),
                    r.emulateJSON && ((s.contentType = "application/x-www-form-urlencoded"), (s.data = s.data ? { model: s.data } : {})),
                    r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o))
                  ) {
                    (s.type = "POST"), r.emulateJSON && (s.data._method = o);
                    var a = r.beforeSend;
                    r.beforeSend = function (e) {
                      if ((e.setRequestHeader("X-HTTP-Method-Override", o), a)) return a.apply(this, arguments);
                    };
                  }
                  "GET" === s.type || r.emulateJSON || (s.processData = !1);
                  var u = r.error;
                  r.error = function (e, t, n) {
                    (r.textStatus = t), (r.errorThrown = n), u && u.call(r.context, e, t, n);
                  };
                  var l = (r.xhr = t.ajax(n.extend(s, r)));
                  return i.trigger("request", i, l, r), l;
                });
              var R = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
              t.ajax = function () {
                return t.$.ajax.apply(t.$, arguments);
              };
              var O = (t.Router = function (e) {
                  e || (e = {}),
                    this.preinitialize.apply(this, arguments),
                    e.routes && (this.routes = e.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments);
                }),
                N = /\((.*?)\)/g,
                I = /(\(\?)?:\w+/g,
                B = /\*\w+/g,
                P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              n.extend(O.prototype, a, {
                preinitialize: function () {},
                initialize: function () {},
                route: function (e, i, r) {
                  n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && ((r = i), (i = "")), r || (r = this[i]);
                  var o = this;
                  return (
                    t.history.route(e, function (n) {
                      var s = o._extractParameters(e, n);
                      !1 !== o.execute(r, s, i) &&
                        (o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s));
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
                      .replace(P, "\\$&")
                      .replace(N, "(?:$1)?")
                      .replace(I, function (e, t) {
                        return t ? e : "([^/?]+)";
                      })
                      .replace(B, "([^?]*?)")),
                    new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                  );
                },
                _extractParameters: function (e, t) {
                  var i = e.exec(t).slice(1);
                  return n.map(i, function (e, t) {
                    return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
                  });
                }
              });
              var L = (t.History = function () {
                  (this.handlers = []),
                    (this.checkUrl = this.checkUrl.bind(this)),
                    "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                }),
                H = /^[#\/]|\s+$/g,
                q = /^\/+|\/+$/g,
                $ = /#.*$/;
              (L.started = !1),
                n.extend(L.prototype, a, {
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
                    if (L.started) throw new Error("Backbone.history has already been started");
                    if (
                      ((L.started = !0),
                      (this.options = n.extend({ root: "/" }, this.options, e)),
                      (this.root = this.options.root),
                      (this._wantsHashChange = !1 !== this.options.hashChange),
                      (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                      (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                      (this._wantsPushState = !!this.options.pushState),
                      (this._hasPushState = !(!this.history || !this.history.pushState)),
                      (this._usePushState = this._wantsPushState && this._hasPushState),
                      (this.fragment = this.getFragment()),
                      (this.root = ("/" + this.root + "/").replace(q, "/")),
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
                      var i = document.body,
                        r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                      r.document.open(), r.document.close(), (r.location.hash = "#" + this.fragment);
                    }
                    var o =
                      window.addEventListener ||
                      function (e, t) {
                        return attachEvent("on" + e, t);
                      };
                    if (
                      (this._usePushState
                        ? o("popstate", this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? o("hashchange", this.checkUrl, !1)
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
                      (L.started = !1);
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
                    if (!L.started) return !1;
                    (t && !0 !== t) || (t = { trigger: !!t }), (e = this.getFragment(e || ""));
                    var n = this.root;
                    ("" !== e && "?" !== e.charAt(0)) || (n = n.slice(0, -1) || "/");
                    var i = n + e;
                    e = e.replace($, "");
                    var r = this.decodeFragment(e);
                    if (this.fragment !== r) {
                      if (((this.fragment = r), this._usePushState))
                        this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                      else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        if ((this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow))) {
                          var o = this.iframe.contentWindow;
                          t.replace || (o.document.open(), o.document.close()), this._updateHash(o.location, e, t.replace);
                        }
                      }
                      return t.trigger ? this.loadUrl(e) : void 0;
                    }
                  },
                  _updateHash: function (e, t, n) {
                    if (n) {
                      var i = e.href.replace(/(javascript:|#).*$/, "");
                      e.replace(i + "#" + t);
                    } else e.hash = "#" + t;
                  }
                }),
                (t.history = new L());
              m.extend =
                y.extend =
                O.extend =
                V.extend =
                L.extend =
                  function (e, t) {
                    var i,
                      r = this;
                    return (
                      (i =
                        e && n.has(e, "constructor")
                          ? e.constructor
                          : function () {
                              return r.apply(this, arguments);
                            }),
                      n.extend(i, r, t),
                      (i.prototype = n.create(r.prototype, e)),
                      (i.prototype.constructor = i),
                      (i.__super__ = r.prototype),
                      i
                    );
                  };
              var F = function () {
                  throw new Error('A "url" property or function must be specified');
                },
                U = function (e, t) {
                  var n = t.error;
                  t.error = function (i) {
                    n && n.call(t.context, e, i, t), e.trigger("error", e, i, t);
                  };
                };
              return t;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { jquery: "jquery", underscore: "underscore" }
    ],
    "hbsfy/runtime": [
      function (e, t, n) {
        t.exports = e("handlebars/runtime").default;
      },
      { "handlebars/runtime": 2 }
    ],
    jquery: [
      function (e, t, n) {
        /*!
         * jQuery JavaScript Library v3.6.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2022-08-26T17:52Z
         */
        !(function (e, n) {
          "use strict";
          "object" == typeof t && "object" == typeof t.exports
            ? (t.exports = e.document
                ? n(e, !0)
                : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e);
                  })
            : n(e);
        })("undefined" != typeof window ? window : this, function (e, t) {
          "use strict";
          var n = [],
            i = Object.getPrototypeOf,
            r = n.slice,
            o = n.flat
              ? function (e) {
                  return n.flat.call(e);
                }
              : function (e) {
                  return n.concat.apply([], e);
                },
            s = n.push,
            a = n.indexOf,
            u = {},
            l = u.toString,
            c = u.hasOwnProperty,
            h = c.toString,
            d = h.call(Object),
            f = {},
            p = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
            },
            g = function (e) {
              return null != e && e === e.window;
            },
            v = e.document,
            m = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function y(e, t, n) {
            var i,
              r,
              o = (n = n || v).createElement("script");
            if (((o.text = e), t)) for (i in m) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function _(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e;
          }
          var w = function (e, t) {
            return new w.fn.init(e, t);
          };
          function b(e) {
            var t = !!e && "length" in e && e.length,
              n = _(e);
            return !p(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
          }
          (w.fn = w.prototype =
            {
              jquery: "3.6.1",
              constructor: w,
              length: 0,
              toArray: function () {
                return r.call(this);
              },
              get: function (e) {
                return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack: function (e) {
                var t = w.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return w.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  w.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(r.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  w.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  w.grep(this, function (e, t) {
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
              push: s,
              sort: n.sort,
              splice: n.splice
            }),
            (w.extend = w.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || p(s) || (s = {}),
                    a === u && ((s = this), a--);
                  a < u;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (l && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = s[t]),
                              (o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}),
                              (r = !1),
                              (s[t] = w.extend(l, o, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            w.extend({
              expando: "jQuery" + ("3.6.1" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== l.call(e)) &&
                  (!(t = i(e)) || ("function" == typeof (n = c.call(t, "constructor") && t.constructor) && h.call(n) === d))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                y(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (b(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return null != e && (b(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : a.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  s = 0,
                  a = [];
                if (b(e)) for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
                else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
                return o(a);
              },
              guid: 1,
              support: f
            }),
            "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
            w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
              u["[object " + t + "]"] = t.toLowerCase();
            });
          var x =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            (function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a,
                u,
                l,
                c,
                h,
                d,
                f,
                p,
                g,
                v,
                m,
                y,
                _,
                w = "sizzle" + 1 * new Date(),
                b = e.document,
                x = 0,
                C = 0,
                E = ue(),
                T = ue(),
                A = ue(),
                V = ue(),
                k = function (e, t) {
                  return e === t && (h = !0), 0;
                },
                M = {}.hasOwnProperty,
                S = [],
                D = S.pop,
                j = S.push,
                R = S.push,
                O = S.slice,
                N = function (e, t) {
                  for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                  return -1;
                },
                I =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                B = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                L =
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
                H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
                q = new RegExp(B + "+", "g"),
                $ = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                F = new RegExp("^" + B + "*," + B + "*"),
                U = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                z = new RegExp(B + "|>"),
                W = new RegExp(H),
                X = new RegExp("^" + P + "$"),
                G = {
                  ID: new RegExp("^#(" + P + ")"),
                  CLASS: new RegExp("^\\.(" + P + ")"),
                  TAG: new RegExp("^(" + P + "|[*])"),
                  ATTR: new RegExp("^" + L),
                  PSEUDO: new RegExp("^" + H),
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
                  bool: new RegExp("^(?:" + I + ")$", "i"),
                  needsContext: new RegExp(
                    "^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)",
                    "i"
                  )
                },
                J = /HTML$/i,
                Y = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"),
                ne = function (e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                },
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                re = function (e, t) {
                  return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                },
                oe = function () {
                  d();
                },
                se = we(
                  function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                R.apply((S = O.call(b.childNodes)), b.childNodes), S[b.childNodes.length].nodeType;
              } catch (e) {
                R = {
                  apply: S.length
                    ? function (e, t) {
                        j.apply(e, O.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                        e.length = n - 1;
                      }
                };
              }
              function ae(e, t, i, r) {
                var o,
                  a,
                  l,
                  c,
                  h,
                  p,
                  m,
                  y = t && t.ownerDocument,
                  b = t ? t.nodeType : 9;
                if (((i = i || []), "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))) return i;
                if (!r && (d(t), (t = t || f), g)) {
                  if (11 !== b && (h = Z.exec(e)))
                    if ((o = h[1])) {
                      if (9 === b) {
                        if (!(l = t.getElementById(o))) return i;
                        if (l.id === o) return i.push(l), i;
                      } else if (y && (l = y.getElementById(o)) && _(t, l) && l.id === o) return i.push(l), i;
                    } else {
                      if (h[2]) return R.apply(i, t.getElementsByTagName(e)), i;
                      if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName)
                        return R.apply(i, t.getElementsByClassName(o)), i;
                    }
                  if (n.qsa && !V[e + " "] && (!v || !v.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
                    if (((m = e), (y = t), 1 === b && (z.test(e) || U.test(e)))) {
                      for (
                        ((y = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) ||
                          ((c = t.getAttribute("id")) ? (c = c.replace(ie, re)) : t.setAttribute("id", (c = w))),
                          a = (p = s(e)).length;
                        a--;

                      )
                        p[a] = (c ? "#" + c : ":scope") + " " + _e(p[a]);
                      m = p.join(",");
                    }
                    try {
                      return R.apply(i, y.querySelectorAll(m)), i;
                    } catch (t) {
                      V(e, !0);
                    } finally {
                      c === w && t.removeAttribute("id");
                    }
                  }
                }
                return u(e.replace($, "$1"), t, i, r);
              }
              function ue() {
                var e = [];
                return function t(n, r) {
                  return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                };
              }
              function le(e) {
                return (e[w] = !0), e;
              }
              function ce(e) {
                var t = f.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function he(e, t) {
                for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
              }
              function de(e, t) {
                var n = t && e,
                  i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function fe(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function pe(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function ge(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function ve(e) {
                return le(function (t) {
                  return (
                    (t = +t),
                    le(function (n, i) {
                      for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                    })
                  );
                });
              }
              function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ae.support = {}),
              (o = ae.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !J.test(t || (n && n.nodeName) || "HTML");
                }),
              (d = ae.setDocument =
                function (e) {
                  var t,
                    r,
                    s = e ? e.ownerDocument || e : b;
                  return s != f && 9 === s.nodeType && s.documentElement
                    ? ((p = (f = s).documentElement),
                      (g = !o(f)),
                      b != f &&
                        (r = f.defaultView) &&
                        r.top !== r &&
                        (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
                      (n.scope = ce(function (e) {
                        return (
                          p.appendChild(e).appendChild(f.createElement("div")),
                          void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (n.attributes = ce(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ce(function (e) {
                        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
                      (n.getById = ce(function (e) {
                        return (p.appendChild(e).id = w), !f.getElementsByName || !f.getElementsByName(w).length;
                      })),
                      n.getById
                        ? ((i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((i.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          }),
                          (i.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n,
                                i,
                                r,
                                o = t.getElementById(e);
                              if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                              }
                              return [];
                            }
                          })),
                      (i.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                            var n,
                              i = [],
                              r = 0,
                              o = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                              return i;
                            }
                            return o;
                          }),
                      (i.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                        }),
                      (m = []),
                      (v = []),
                      (n.qsa = Q.test(f.querySelectorAll)) &&
                        (ce(function (e) {
                          var t;
                          (p.appendChild(e).innerHTML =
                            "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + I + ")"),
                            e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
                            (t = f.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || v.push("\\[" + B + "*name" + B + "*=" + B + "*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            v.push("[\\r\\n\\f]");
                        }),
                        ce(function (e) {
                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = f.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && v.push("name" + B + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                            (p.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            v.push(",.*:");
                        })),
                      (n.matchesSelector = Q.test(
                        (y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)
                      )) &&
                        ce(function (e) {
                          (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", H);
                        }),
                      (v = v.length && new RegExp(v.join("|"))),
                      (m = m.length && new RegExp(m.join("|"))),
                      (t = Q.test(p.compareDocumentPosition)),
                      (_ =
                        t || Q.test(p.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                              return (
                                e === i ||
                                !(
                                  !i ||
                                  1 !== i.nodeType ||
                                  !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                              return !1;
                            }),
                      (k = t
                        ? function (e, t) {
                            if (e === t) return (h = !0), 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                              i ||
                              (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                              (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                ? e == f || (e.ownerDocument == b && _(b, e))
                                  ? -1
                                  : t == f || (t.ownerDocument == b && _(b, t))
                                  ? 1
                                  : c
                                  ? N(c, e) - N(c, t)
                                  : 0
                                : 4 & i
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (h = !0), 0;
                            var n,
                              i = 0,
                              r = e.parentNode,
                              o = t.parentNode,
                              s = [e],
                              a = [t];
                            if (!r || !o) return e == f ? -1 : t == f ? 1 : r ? -1 : o ? 1 : c ? N(c, e) - N(c, t) : 0;
                            if (r === o) return de(e, t);
                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; s[i] === a[i]; ) i++;
                            return i ? de(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0;
                          }),
                      f)
                    : f;
                }),
              (ae.matches = function (e, t) {
                return ae(e, null, null, t);
              }),
              (ae.matchesSelector = function (e, t) {
                if ((d(e), n.matchesSelector && g && !V[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
                  try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                  } catch (e) {
                    V(t, !0);
                  }
                return ae(t, f, null, [e]).length > 0;
              }),
              (ae.contains = function (e, t) {
                return (e.ownerDocument || e) != f && d(e), _(e, t);
              }),
              (ae.attr = function (e, t) {
                (e.ownerDocument || e) != f && d(e);
                var r = i.attrHandle[t.toLowerCase()],
                  o = r && M.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !g
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (ae.escape = function (e) {
                return (e + "").replace(ie, re);
              }),
              (ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ae.uniqueSort = function (e) {
                var t,
                  i = [],
                  r = 0,
                  o = 0;
                if (((h = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(k), h)) {
                  for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                  for (; r--; ) e.splice(i[r], 1);
                }
                return (c = null), e;
              }),
              (r = ae.getText =
                function (e) {
                  var t,
                    n = "",
                    i = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[i++]); ) n += r(t);
                  return n;
                }),
              ((i = ae.selectors =
                {
                  cacheLength: 50,
                  createPseudo: le,
                  match: G,
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
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ae.error(e[0]),
                            (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ae.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return G.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              W.test(n) &&
                              (t = s(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    }
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = E[e + " "];
                      return (
                        t ||
                        ((t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) &&
                          E(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (i) {
                        var r = ae.attr(i, e);
                        return null == r
                          ? "!=" === t
                          : !t ||
                              ((r += ""),
                              "=" === t
                                ? r === n
                                : "!=" === t
                                ? r !== n
                                : "^=" === t
                                ? n && 0 === r.indexOf(n)
                                : "*=" === t
                                ? n && r.indexOf(n) > -1
                                : "$=" === t
                                ? n && r.slice(-n.length) === n
                                : "~=" === t
                                ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1
                                : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, i, r) {
                      var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                      return 1 === i && 0 === r
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, u) {
                            var l,
                              c,
                              h,
                              d,
                              f,
                              p,
                              g = o !== s ? "nextSibling" : "previousSibling",
                              v = t.parentNode,
                              m = a && t.nodeName.toLowerCase(),
                              y = !u && !a,
                              _ = !1;
                            if (v) {
                              if (o) {
                                for (; g; ) {
                                  for (d = t; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                  p = g = "only" === e && !p && "nextSibling";
                                }
                                return !0;
                              }
                              if (((p = [s ? v.firstChild : v.lastChild]), s && y)) {
                                for (
                                  _ =
                                    (f =
                                      (l = (c = (h = (d = v)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x &&
                                      l[1]) && l[2],
                                    d = f && v.childNodes[f];
                                  (d = (++f && d && d[g]) || (_ = f = 0) || p.pop());

                                )
                                  if (1 === d.nodeType && ++_ && d === t) {
                                    c[e] = [x, f, _];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (_ = f =
                                    (l = (c = (h = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === x &&
                                    l[1]),
                                !1 === _)
                              )
                                for (
                                  ;
                                  (d = (++f && d && d[g]) || (_ = f = 0) || p.pop()) &&
                                  ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) ||
                                    !++_ ||
                                    (y && ((c = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [x, _]), d !== t));

                                );
                              return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                      return r[w]
                        ? r(t)
                        : r.length > 1
                        ? ((n = [e, e, "", t]),
                          i.setFilters.hasOwnProperty(e.toLowerCase())
                            ? le(function (e, n) {
                                for (var i, o = r(e, t), s = o.length; s--; ) e[(i = N(e, o[s]))] = !(n[i] = o[s]);
                              })
                            : function (e) {
                                return r(e, 0, n);
                              })
                        : r;
                    }
                  },
                  pseudos: {
                    not: le(function (e) {
                      var t = [],
                        n = [],
                        i = a(e.replace($, "$1"));
                      return i[w]
                        ? le(function (e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, r, o) {
                            return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                          };
                    }),
                    has: le(function (e) {
                      return function (t) {
                        return ae(e, t).length > 0;
                      };
                    }),
                    contains: le(function (e) {
                      return (
                        (e = e.replace(te, ne)),
                        function (t) {
                          return (t.textContent || r(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: le(function (e) {
                      return (
                        X.test(e || "") || ae.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === p;
                    },
                    focus: function (e) {
                      return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !i.pseudos.empty(e);
                    },
                    header: function (e) {
                      return K.test(e.nodeName);
                    },
                    input: function (e) {
                      return Y.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                      );
                    },
                    first: ve(function () {
                      return [0];
                    }),
                    last: ve(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ve(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: ve(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: ve(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: ve(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                      return e;
                    }),
                    gt: ve(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                      return e;
                    })
                  }
                }).pseudos.nth = i.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                i.pseudos[t] = fe(t);
              for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
              function ye() {}
              function _e(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i;
              }
              function we(e, t, n) {
                var i = t.dir,
                  r = t.next,
                  o = r || i,
                  s = n && "parentNode" === o,
                  a = C++;
                return t.first
                  ? function (t, n, r) {
                      for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
                      return !1;
                    }
                  : function (t, n, u) {
                      var l,
                        c,
                        h,
                        d = [x, a];
                      if (u) {
                        for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                      } else
                        for (; (t = t[i]); )
                          if (1 === t.nodeType || s)
                            if (((c = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase()))
                              t = t[i] || t;
                            else {
                              if ((l = c[o]) && l[0] === x && l[1] === a) return (d[2] = l[2]);
                              if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                            }
                      return !1;
                    };
              }
              function be(e) {
                return e.length > 1
                  ? function (t, n, i) {
                      for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function xe(e, t, n, i, r) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                  (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), l && t.push(a)));
                return s;
              }
              function Ce(e, t, n, i, r, o) {
                return (
                  i && !i[w] && (i = Ce(i)),
                  r && !r[w] && (r = Ce(r, o)),
                  le(function (o, s, a, u) {
                    var l,
                      c,
                      h,
                      d = [],
                      f = [],
                      p = s.length,
                      g =
                        o ||
                        (function (e, t, n) {
                          for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      v = !e || (!o && t) ? g : xe(g, d, e, a, u),
                      m = n ? (r || (o ? e : p || i) ? [] : s) : v;
                    if ((n && n(v, m, a, u), i))
                      for (l = xe(m, f), i(l, [], a, u), c = l.length; c--; ) (h = l[c]) && (m[f[c]] = !(v[f[c]] = h));
                    if (o) {
                      if (r || e) {
                        if (r) {
                          for (l = [], c = m.length; c--; ) (h = m[c]) && l.push((v[c] = h));
                          r(null, (m = []), l, u);
                        }
                        for (c = m.length; c--; ) (h = m[c]) && (l = r ? N(o, h) : d[c]) > -1 && (o[l] = !(s[l] = h));
                      }
                    } else (m = xe(m === s ? m.splice(p, m.length) : m)), r ? r(null, s, m, u) : R.apply(s, m);
                  })
                );
              }
              function Ee(e) {
                for (
                  var t,
                    n,
                    r,
                    o = e.length,
                    s = i.relative[e[0].type],
                    a = s || i.relative[" "],
                    u = s ? 1 : 0,
                    c = we(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0
                    ),
                    h = we(
                      function (e) {
                        return N(t, e) > -1;
                      },
                      a,
                      !0
                    ),
                    d = [
                      function (e, n, i) {
                        var r = (!s && (i || n !== l)) || ((t = n).nodeType ? c(e, n, i) : h(e, n, i));
                        return (t = null), r;
                      }
                    ];
                  u < o;
                  u++
                )
                  if ((n = i.relative[e[u].type])) d = [we(be(d), n)];
                  else {
                    if ((n = i.filter[e[u].type].apply(null, e[u].matches))[w]) {
                      for (r = ++u; r < o && !i.relative[e[r].type]; r++);
                      return Ce(
                        u > 1 && be(d),
                        u > 1 && _e(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace($, "$1"),
                        n,
                        u < r && Ee(e.slice(u, r)),
                        r < o && Ee((e = e.slice(r))),
                        r < o && _e(e)
                      );
                    }
                    d.push(n);
                  }
                return be(d);
              }
              return (
                (ye.prototype = i.filters = i.pseudos),
                (i.setFilters = new ye()),
                (s = ae.tokenize =
                  function (e, t) {
                    var n,
                      r,
                      o,
                      s,
                      a,
                      u,
                      l,
                      c = T[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, u = [], l = i.preFilter; a; ) {
                      for (s in ((n && !(r = F.exec(a))) || (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                      (n = !1),
                      (r = U.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace($, " ") }), (a = a.slice(n.length))),
                      i.filter))
                        !(r = G[s].exec(a)) ||
                          (l[s] && !(r = l[s](r))) ||
                          ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : T(e, u).slice(0);
                  }),
                (a = ae.compile =
                  function (e, t) {
                    var n,
                      r = [],
                      o = [],
                      a = A[e + " "];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; ) (a = Ee(t[n]))[w] ? r.push(a) : o.push(a);
                      (a = A(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            r = e.length > 0,
                            o = function (o, s, a, u, c) {
                              var h,
                                p,
                                v,
                                m = 0,
                                y = "0",
                                _ = o && [],
                                w = [],
                                b = l,
                                C = o || (r && i.find.TAG("*", c)),
                                E = (x += null == b ? 1 : Math.random() || 0.1),
                                T = C.length;
                              for (c && (l = s == f || s || c); y !== T && null != (h = C[y]); y++) {
                                if (r && h) {
                                  for (p = 0, s || h.ownerDocument == f || (d(h), (a = !g)); (v = e[p++]); )
                                    if (v(h, s || f, a)) {
                                      u.push(h);
                                      break;
                                    }
                                  c && (x = E);
                                }
                                n && ((h = !v && h) && m--, o && _.push(h));
                              }
                              if (((m += y), n && y !== m)) {
                                for (p = 0; (v = t[p++]); ) v(_, w, s, a);
                                if (o) {
                                  if (m > 0) for (; y--; ) _[y] || w[y] || (w[y] = D.call(u));
                                  w = xe(w);
                                }
                                R.apply(u, w), c && !o && w.length > 0 && m + t.length > 1 && ae.uniqueSort(u);
                              }
                              return c && ((x = E), (l = b)), _;
                            };
                          return n ? le(o) : o;
                        })(o, r)
                      )).selector = e;
                    }
                    return a;
                  }),
                (u = ae.select =
                  function (e, t, n, r) {
                    var o,
                      u,
                      l,
                      c,
                      h,
                      d = "function" == typeof e && e,
                      f = !r && s((e = d.selector || e));
                    if (((n = n || []), 1 === f.length)) {
                      if (
                        (u = f[0] = f[0].slice(0)).length > 2 &&
                        "ID" === (l = u[0]).type &&
                        9 === t.nodeType &&
                        g &&
                        i.relative[u[1].type]
                      ) {
                        if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                        d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                      }
                      for (o = G.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !i.relative[(c = l.type)]); )
                        if ((h = i.find[c]) && (r = h(l.matches[0].replace(te, ne), (ee.test(u[0].type) && me(t.parentNode)) || t))) {
                          if ((u.splice(o, 1), !(e = r.length && _e(u)))) return R.apply(n, r), n;
                          break;
                        }
                    }
                    return (d || a(e, f))(r, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
                  }),
                (n.sortStable = w.split("").sort(k).join("") === w),
                (n.detectDuplicates = !!h),
                d(),
                (n.sortDetached = ce(function (e) {
                  return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
                })),
                ce(function (e) {
                  return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                }) ||
                  he("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                  }),
                (n.attributes &&
                  ce(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                  })) ||
                  he("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                  }),
                ce(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  he(I, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                  }),
                ae
              );
            })(e);
          (w.find = x),
            (w.expr = x.selectors),
            (w.expr[":"] = w.expr.pseudos),
            (w.uniqueSort = w.unique = x.uniqueSort),
            (w.text = x.getText),
            (w.isXMLDoc = x.isXML),
            (w.contains = x.contains),
            (w.escapeSelector = x.escape);
          var C = function (e, t, n) {
              for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                  if (r && w(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            E = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            T = w.expr.match.needsContext;
          function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var V = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function k(e, t, n) {
            return p(t)
              ? w.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? w.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? w.grep(e, function (e) {
                  return a.call(t, e) > -1 !== n;
                })
              : w.filter(t, e, n);
          }
          (w.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? w.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : w.find.matches(
                    e,
                    w.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            w.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    w(e).filter(function () {
                      for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
                return i > 1 ? w.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(k(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(k(this, e || [], !0));
              },
              is: function (e) {
                return !!k(this, "string" == typeof e && T.test(e) ? w(e) : e || [], !1).length;
              }
            });
          var M,
            S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((w.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || M), "string" == typeof e)) {
              if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : S.exec(e)) || (!i[1] && t))
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof w ? t[0] : t),
                  w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                  V.test(i[1]) && w.isPlainObject(t))
                )
                  for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (r = v.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : p(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(w)
              : w.makeArray(e, this);
          }).prototype = w.fn),
            (M = w(v));
          var D = /^(?:parents|prev(?:Until|All))/,
            j = { children: !0, contents: !0, next: !0, prev: !0 };
          function R(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          w.fn.extend({
            has: function (e) {
              var t = w(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && w(e);
              if (!T.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? a.call(w(e), this[0])
                  : a.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }
          }),
            w.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return C(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return C(e, "parentNode", n);
                },
                next: function (e) {
                  return R(e, "nextSibling");
                },
                prev: function (e) {
                  return R(e, "previousSibling");
                },
                nextAll: function (e) {
                  return C(e, "nextSibling");
                },
                prevAll: function (e) {
                  return C(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return C(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return C(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return E(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && i(e.contentDocument)
                    ? e.contentDocument
                    : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                }
              },
              function (e, t) {
                w.fn[e] = function (n, i) {
                  var r = w.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = w.filter(i, r)),
                    this.length > 1 && (j[e] || w.uniqueSort(r), D.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var O = /[^\x20\t\r\n\f]+/g;
          function N(e) {
            return e;
          }
          function I(e) {
            throw e;
          }
          function B(e, t, n, i) {
            var r;
            try {
              e && p((r = e.promise)) ? r.call(e).done(t).fail(n) : e && p((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (w.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      w.each(e.match(O) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : w.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              u = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        w.each(n, function (n, i) {
                          p(i) ? (e.unique && l.has(i)) || o.push(i) : i && i.length && "string" !== _(i) && t(i);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    w.each(arguments, function (e, t) {
                      for (var n; (n = w.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || u()), this;
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                }
              };
            return l;
          }),
            w.extend({
              Deferred: function (t) {
                var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                  ],
                  i = "pending",
                  r = {
                    state: function () {
                      return i;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return w
                        .Deferred(function (t) {
                          w.each(n, function (n, i) {
                            var r = p(e[i[4]]) && e[i[4]];
                            o[i[1]](function () {
                              var e = r && r.apply(this, arguments);
                              e && p(e.promise)
                                ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject)
                                : t[i[0] + "With"](this, r ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (t, i, r) {
                      var o = 0;
                      function s(t, n, i, r) {
                        return function () {
                          var a = this,
                            u = arguments,
                            l = function () {
                              var e, l;
                              if (!(t < o)) {
                                if ((e = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                  p(l)
                                    ? r
                                      ? l.call(e, s(o, n, N, r), s(o, n, I, r))
                                      : (o++, l.call(e, s(o, n, N, r), s(o, n, I, r), s(o, n, N, n.notifyWith)))
                                    : (i !== N && ((a = void 0), (u = [e])), (r || n.resolveWith)(a, u));
                              }
                            },
                            c = r
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                      t + 1 >= o && (i !== I && ((a = void 0), (u = [e])), n.rejectWith(a, u));
                                  }
                                };
                          t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                        };
                      }
                      return w
                        .Deferred(function (e) {
                          n[0][3].add(s(0, e, p(r) ? r : N, e.notifyWith)),
                            n[1][3].add(s(0, e, p(t) ? t : N)),
                            n[2][3].add(s(0, e, p(i) ? i : I));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? w.extend(e, r) : r;
                    }
                  },
                  o = {};
                return (
                  w.each(n, function (e, t) {
                    var s = t[2],
                      a = t[5];
                    (r[t[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            i = a;
                          },
                          n[3 - e][2].disable,
                          n[3 - e][3].disable,
                          n[0][2].lock,
                          n[0][3].lock
                        ),
                      s.add(t[3].fire),
                      (o[t[0]] = function () {
                        return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                      }),
                      (o[t[0] + "With"] = s.fireWith);
                  }),
                  r.promise(o),
                  t && t.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  o = r.call(arguments),
                  s = w.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (i[e] = this), (o[e] = arguments.length > 1 ? r.call(arguments) : n), --t || s.resolveWith(i, o);
                    };
                  };
                if (t <= 1 && (B(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();
                for (; n--; ) B(o[n], a(n), s.reject);
                return s.promise();
              }
            });
          var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (w.Deferred.exceptionHook = function (t, n) {
            e.console && e.console.warn && t && P.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
          }),
            (w.readyException = function (t) {
              e.setTimeout(function () {
                throw t;
              });
            });
          var L = w.Deferred();
          function H() {
            v.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), w.ready();
          }
          (w.fn.ready = function (e) {
            return (
              L.then(e).catch(function (e) {
                w.readyException(e);
              }),
              this
            );
          }),
            w.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || L.resolveWith(v, [w]));
              }
            }),
            (w.ready.then = L.then),
            "complete" === v.readyState || ("loading" !== v.readyState && !v.documentElement.doScroll)
              ? e.setTimeout(w.ready)
              : (v.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
          var q = function (e, t, n, i, r, o, s) {
              var a = 0,
                u = e.length,
                l = null == n;
              if ("object" === _(n)) for (a in ((r = !0), n)) q(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== i &&
                ((r = !0),
                p(i) || (s = !0),
                l &&
                  (s
                    ? (t.call(e, i), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(w(e), n);
                      }))),
                t)
              )
                for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            $ = /^-ms-/,
            F = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function z(e) {
            return e.replace($, "ms-").replace(F, U);
          }
          var W = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function X() {
            this.expando = w.expando + X.uid++;
          }
          (X.uid = 1),
            (X.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    W(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[z(t)] = n;
                else for (i in t) r[z(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)];
              },
              access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(O) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
              }
            });
          var G = new X(),
            J = new X(),
            Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            K = /[A-Z]/g;
          function Q(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (((i = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                  n = (function (e) {
                    return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Y.test(e) ? JSON.parse(e) : e));
                  })(n);
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          w.extend({
            hasData: function (e) {
              return J.hasData(e) || G.hasData(e);
            },
            data: function (e, t, n) {
              return J.access(e, t, n);
            },
            removeData: function (e, t) {
              J.remove(e, t);
            },
            _data: function (e, t, n) {
              return G.access(e, t, n);
            },
            _removeData: function (e, t) {
              G.remove(e, t);
            }
          }),
            w.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (this.length && ((r = J.get(o)), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = z(i.slice(5))), Q(o, i, r[i]));
                    G.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      J.set(this, e);
                    })
                  : q(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = Q(o, e)) ? n : void 0;
                        this.each(function () {
                          J.set(this, e, t);
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
                  J.remove(this, e);
                });
              }
            }),
            w.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = G.get(e, t)),
                    n && (!i || Array.isArray(n) ? (i = G.access(e, t, w.makeArray(n))) : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = w._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        w.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  G.get(e, n) ||
                  G.access(e, n, {
                    empty: w.Callbacks("once memory").add(function () {
                      G.remove(e, [t + "queue", n]);
                    })
                  })
                );
              }
            }),
            w.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? w.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  w.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = w.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; )
                  (n = G.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t);
              }
            });
          var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ne = v.documentElement,
            ie = function (e) {
              return w.contains(e.ownerDocument, e);
            },
            re = { composed: !0 };
          ne.getRootNode &&
            (ie = function (e) {
              return w.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument;
            });
          var oe = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === w.css(e, "display"));
          };
          function se(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return w.css(e, t, "");
                  },
              u = a(),
              l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
              c = e.nodeType && (w.cssNumber[t] || ("px" !== l && +u)) && ee.exec(w.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; s--; )
                w.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0), (c /= o);
              (c *= 2), w.style(e, t, c + l), (n = n || []);
            }
            return (
              n && ((c = +c || +u || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = l), (i.start = c), (i.end = r))), r
            );
          }
          var ae = {};
          function ue(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = ae[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = w.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (ae[i] = r),
              r)
            );
          }
          function le(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n && ((r[o] = G.get(i, "display") || null), r[o] || (i.style.display = "")),
                    "" === i.style.display && oe(i) && (r[o] = ue(i)))
                  : "none" !== n && ((r[o] = "none"), G.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          w.fn.extend({
            show: function () {
              return le(this, !0);
            },
            hide: function () {
              return le(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    oe(this) ? w(this).show() : w(this).hide();
                  });
            }
          });
          var ce,
            he,
            de = /^(?:checkbox|radio)$/i,
            fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            pe = /^$|^module$|\/(?:java|ecma)script/i;
          (ce = v.createDocumentFragment().appendChild(v.createElement("div"))),
            (he = v.createElement("input")).setAttribute("type", "radio"),
            he.setAttribute("checked", "checked"),
            he.setAttribute("name", "t"),
            ce.appendChild(he),
            (f.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ce.innerHTML = "<textarea>x</textarea>"),
            (f.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
            (ce.innerHTML = "<option></option>"),
            (f.option = !!ce.lastChild);
          var ge = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
          function ve(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
            );
          }
          function me(e, t) {
            for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
          }
          (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
            (ge.th = ge.td),
            f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
          var ye = /<|&#?\w+;/;
          function _e(e, t, n, i, r) {
            for (var o, s, a, u, l, c, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
              if ((o = e[f]) || 0 === o)
                if ("object" === _(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
                  for (
                    s = s || h.appendChild(t.createElement("div")),
                      a = (fe.exec(o) || ["", ""])[1].toLowerCase(),
                      u = ge[a] || ge._default,
                      s.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    s = s.lastChild;
                  w.merge(d, s.childNodes), ((s = h.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
            for (h.textContent = "", f = 0; (o = d[f++]); )
              if (i && w.inArray(o, i) > -1) r && r.push(o);
              else if (((l = ie(o)), (s = ve(h.appendChild(o), "script")), l && me(s), n))
                for (c = 0; (o = s[c++]); ) pe.test(o.type || "") && n.push(o);
            return h;
          }
          var we = /^([^.]*)(?:\.(.+)|)/;
          function be() {
            return !0;
          }
          function xe() {
            return !1;
          }
          function Ce(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return v.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ee(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ee(e, a, n, i, t[a], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = xe;
            else if (!r) return e;
            return (
              1 === o &&
                ((s = r),
                ((r = function (e) {
                  return w().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = w.guid++))),
              e.each(function () {
                w.event.add(this, t, r, i, n);
              })
            );
          }
          function Te(e, t, n) {
            n
              ? (G.set(e, t, !1),
                w.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      o,
                      s = G.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
                      else if (
                        ((s = r.call(arguments)),
                        G.set(this, t, s),
                        (i = n(this, t)),
                        this[t](),
                        s !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : (o = {}),
                        s !== o)
                      )
                        return e.stopImmediatePropagation(), e.preventDefault(), o && o.value;
                    } else
                      s.length &&
                        (G.set(this, t, { value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this) }),
                        e.stopImmediatePropagation());
                  }
                }))
              : void 0 === G.get(e, t) && w.event.add(e, t, be);
          }
          (w.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                s,
                a,
                u,
                l,
                c,
                h,
                d,
                f,
                p,
                g,
                v = G.get(e);
              if (W(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && w.find.matchesSelector(ne, r),
                    n.guid || (n.guid = w.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (s = v.handle) ||
                      (s = v.handle =
                        function (t) {
                          return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    l = (t = (t || "").match(O) || [""]).length;
                  l--;

                )
                  (f = g = (a = we.exec(t[l]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    f &&
                      ((h = w.event.special[f] || {}),
                      (f = (r ? h.delegateType : h.bindType) || f),
                      (h = w.event.special[f] || {}),
                      (c = w.extend(
                        {
                          type: f,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && w.expr.match.needsContext.test(r),
                          namespace: p.join(".")
                        },
                        o
                      )),
                      (d = u[f]) ||
                        (((d = u[f] = []).delegateCount = 0),
                        (h.setup && !1 !== h.setup.call(e, i, p, s)) || (e.addEventListener && e.addEventListener(f, s))),
                      h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                      r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (w.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                s,
                a,
                u,
                l,
                c,
                h,
                d,
                f,
                p,
                g,
                v = G.hasData(e) && G.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--; )
                  if (((f = g = (a = we.exec(t[l]) || [])[1]), (p = (a[2] || "").split(".").sort()), f)) {
                    for (
                      h = w.event.special[f] || {},
                        d = u[(f = (i ? h.delegateType : h.bindType) || f)] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = d.length;
                      o--;

                    )
                      (c = d[o]),
                        (!r && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                          (d.splice(o, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(e, c));
                    s &&
                      !d.length &&
                      ((h.teardown && !1 !== h.teardown.call(e, p, v.handle)) || w.removeEvent(e, f, v.handle), delete u[f]);
                  } else for (f in u) w.event.remove(e, f + t[l], n, i, !0);
                w.isEmptyObject(u) && G.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = new Array(arguments.length),
                u = w.event.fix(e),
                l = (G.get(this, "events") || Object.create(null))[u.type] || [],
                c = w.event.special[u.type] || {};
              for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
              if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                for (s = w.event.handlers.call(this, u, l), t = 0; (r = s[t++]) && !u.isPropagationStopped(); )
                  for (u.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                    (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) &&
                        !1 === (u.result = i) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], s = {}, n = 0; n < u; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext ? w(r, this).index(l) > -1 : w.find(r, this, null, [l]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: l, handlers: o });
                  }
              return (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
            },
            addProp: function (e, t) {
              Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t)
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
              return e[w.expando] ? e : new w.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return de.test(t.type) && t.click && A(t, "input") && Te(t, "click", be), !1;
                },
                trigger: function (e) {
                  var t = this || e;
                  return de.test(t.type) && t.click && A(t, "input") && Te(t, "click"), !0;
                },
                _default: function (e) {
                  var t = e.target;
                  return (de.test(t.type) && t.click && A(t, "input") && G.get(t, "click")) || A(t, "a");
                }
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
              }
            }
          }),
            (w.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (w.Event = function (e, t) {
              if (!(this instanceof w.Event)) return new w.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? be : xe),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
            }),
            (w.Event.prototype = {
              constructor: w.Event,
              isDefaultPrevented: xe,
              isPropagationStopped: xe,
              isImmediatePropagationStopped: xe,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = be), e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = be), e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = be), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
              }
            }),
            w.each(
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
              w.event.addProp
            ),
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              w.event.special[e] = {
                setup: function () {
                  return Te(this, e, Ce), !1;
                },
                trigger: function () {
                  return Te(this, e), !0;
                },
                _default: function (t) {
                  return G.get(t.target, e);
                },
                delegateType: t
              };
            }),
            w.each(
              { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
              function (e, t) {
                w.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || w.contains(this, i))) ||
                        ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)),
                      n
                    );
                  }
                };
              }
            ),
            w.fn.extend({
              on: function (e, t, n, i) {
                return Ee(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Ee(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = xe),
                  this.each(function () {
                    w.event.remove(this, e, n, t);
                  })
                );
              }
            });
          var Ae = /<script|<style|<link/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ke = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Me(e, t) {
            return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
          }
          function Se(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function De(e) {
            return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
          }
          function je(e, t) {
            var n, i, r, o, s, a;
            if (1 === t.nodeType) {
              if (G.hasData(e) && (a = G.get(e).events))
                for (r in (G.remove(t, "handle events"), a)) for (n = 0, i = a[r].length; n < i; n++) w.event.add(t, r, a[r][n]);
              J.hasData(e) && ((o = J.access(e)), (s = w.extend({}, o)), J.set(t, s));
            }
          }
          function Re(e, t, n, i) {
            t = o(t);
            var r,
              s,
              a,
              u,
              l,
              c,
              h = 0,
              d = e.length,
              g = d - 1,
              v = t[0],
              m = p(v);
            if (m || (d > 1 && "string" == typeof v && !f.checkClone && Ve.test(v)))
              return e.each(function (r) {
                var o = e.eq(r);
                m && (t[0] = v.call(this, r, o.html())), Re(o, t, n, i);
              });
            if (d && ((s = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = s), s || i)) {
              for (u = (a = w.map(ve(r, "script"), Se)).length; h < d; h++)
                (l = r), h !== g && ((l = w.clone(l, !0, !0)), u && w.merge(a, ve(l, "script"))), n.call(e[h], l, h);
              if (u)
                for (c = a[a.length - 1].ownerDocument, w.map(a, De), h = 0; h < u; h++)
                  (l = a[h]),
                    pe.test(l.type || "") &&
                      !G.access(l, "globalEval") &&
                      w.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? w._evalUrl && !l.noModule && w._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c)
                        : y(l.textContent.replace(ke, ""), l, c));
            }
            return e;
          }
          function Oe(e, t, n) {
            for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
              n || 1 !== i.nodeType || w.cleanData(ve(i)), i.parentNode && (n && ie(i) && me(ve(i, "script")), i.parentNode.removeChild(i));
            return e;
          }
          w.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                s,
                a,
                u,
                l,
                c = e.cloneNode(!0),
                h = ie(e);
              if (!(f.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                for (s = ve(c), i = 0, r = (o = ve(e)).length; i < r; i++)
                  (a = o[i]),
                    (u = s[i]),
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && de.test(a.type)
                      ? (u.checked = a.checked)
                      : ("input" !== l && "textarea" !== l) || (u.defaultValue = a.defaultValue);
              if (t)
                if (n) for (o = o || ve(e), s = s || ve(c), i = 0, r = o.length; i < r; i++) je(o[i], s[i]);
                else je(e, c);
              return (s = ve(c, "script")).length > 0 && me(s, !h && ve(e, "script")), c;
            },
            cleanData: function (e) {
              for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (W(n)) {
                  if ((t = n[G.expando])) {
                    if (t.events) for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                    n[G.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            }
          }),
            w.fn.extend({
              detach: function (e) {
                return Oe(this, e, !0);
              },
              remove: function (e) {
                return Oe(this, e);
              },
              text: function (e) {
                return q(
                  this,
                  function (e) {
                    return void 0 === e
                      ? w.text(this)
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
                return Re(this, arguments, function (e) {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Me(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Re(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Re(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Re(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return w.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return q(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ae.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                      e = w.htmlPrefilter(e);
                      try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)), (t.innerHTML = e));
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
                return Re(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    w.inArray(this, e) < 0 && (w.cleanData(ve(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              }
            }),
            w.each(
              { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
              function (e, t) {
                w.fn[e] = function (e) {
                  for (var n, i = [], r = w(e), o = r.length - 1, a = 0; a <= o; a++)
                    (n = a === o ? this : this.clone(!0)), w(r[a])[t](n), s.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Ne = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            Ie = /^--/,
            Be = function (t) {
              var n = t.ownerDocument.defaultView;
              return (n && n.opener) || (n = e), n.getComputedStyle(t);
            },
            Pe = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            Le = new RegExp(te.join("|"), "i"),
            He = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");
          function qe(e, t, n) {
            var i,
              r,
              o,
              s,
              a = Ie.test(t),
              u = e.style;
            return (
              (n = n || Be(e)) &&
                ((s = n.getPropertyValue(t) || n[t]),
                a && (s = s.replace(He, "$1")),
                "" !== s || ie(e) || (s = w.style(e, t)),
                !f.pixelBoxStyles() &&
                  Ne.test(s) &&
                  Le.test(t) &&
                  ((i = u.width),
                  (r = u.minWidth),
                  (o = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = s),
                  (s = n.width),
                  (u.width = i),
                  (u.minWidth = r),
                  (u.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function $e(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              }
            };
          }
          !(function () {
            function t() {
              if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ne.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                  (u = 12 === n(t.marginLeft)),
                  (c.style.right = "60%"),
                  (s = 36 === n(t.right)),
                  (r = 36 === n(t.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === n(c.offsetWidth / 3)),
                  ne.removeChild(l),
                  (c = null);
              }
            }
            function n(e) {
              return Math.round(parseFloat(e));
            }
            var i,
              r,
              o,
              s,
              a,
              u,
              l = v.createElement("div"),
              c = v.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (f.clearCloneStyle = "content-box" === c.style.backgroundClip),
              w.extend(f, {
                boxSizingReliable: function () {
                  return t(), r;
                },
                pixelBoxStyles: function () {
                  return t(), s;
                },
                pixelPosition: function () {
                  return t(), i;
                },
                reliableMarginLeft: function () {
                  return t(), u;
                },
                scrollboxSize: function () {
                  return t(), o;
                },
                reliableTrDimensions: function () {
                  var t, n, i, r;
                  return (
                    null == a &&
                      ((t = v.createElement("table")),
                      (n = v.createElement("tr")),
                      (i = v.createElement("div")),
                      (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                      (n.style.cssText = "border:1px solid"),
                      (n.style.height = "1px"),
                      (i.style.height = "9px"),
                      (i.style.display = "block"),
                      ne.appendChild(t).appendChild(n).appendChild(i),
                      (r = e.getComputedStyle(n)),
                      (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight),
                      ne.removeChild(t)),
                    a
                  );
                }
              }));
          })();
          var Fe = ["Webkit", "Moz", "ms"],
            Ue = v.createElement("div").style,
            ze = {};
          function We(e) {
            var t = w.cssProps[e] || ze[e];
            return (
              t ||
              (e in Ue
                ? e
                : (ze[e] =
                    (function (e) {
                      for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--; ) if ((e = Fe[n] + t) in Ue) return e;
                    })(e) || e))
            );
          }
          var Xe = /^(none|table(?!-c[ea]).+)/,
            Ge = { position: "absolute", visibility: "hidden", display: "block" },
            Je = { letterSpacing: "0", fontWeight: "400" };
          function Ye(e, t, n) {
            var i = ee.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function Ke(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              u = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (u += w.css(e, n + te[s], !0, r)),
                i
                  ? ("content" === n && (u -= w.css(e, "padding" + te[s], !0, r)),
                    "margin" !== n && (u -= w.css(e, "border" + te[s] + "Width", !0, r)))
                  : ((u += w.css(e, "padding" + te[s], !0, r)),
                    "padding" !== n
                      ? (u += w.css(e, "border" + te[s] + "Width", !0, r))
                      : (a += w.css(e, "border" + te[s] + "Width", !0, r)));
            return !i && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5)) || 0), u;
          }
          function Qe(e, t, n) {
            var i = Be(e),
              r = (!f.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
              o = r,
              s = qe(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ne.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!f.boxSizingReliable() && r) ||
                (!f.reliableTrDimensions() && A(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === w.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === w.css(e, "boxSizing", !1, i)), (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) + Ke(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
            );
          }
          function Ze(e, t, n, i, r) {
            return new Ze.prototype.init(e, t, n, i, r);
          }
          w.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = qe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                }
              }
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
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
              widows: !0,
              zIndex: !0,
              zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  s,
                  a = z(t),
                  u = Ie.test(t),
                  l = e.style;
                if ((u || (t = We(a)), (s = w.cssHooks[t] || w.cssHooks[a]), void 0 === n))
                  return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                "string" === (o = typeof n) && (r = ee.exec(n)) && r[1] && ((n = se(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o || u || (n += (r && r[3]) || (w.cssNumber[a] ? "" : "px")),
                    f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                s,
                a = z(t);
              return (
                Ie.test(t) || (t = We(a)),
                (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)),
                void 0 === r && (r = qe(e, t, i)),
                "normal" === r && t in Je && (r = Je[t]),
                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
              );
            }
          }),
            w.each(["height", "width"], function (e, t) {
              w.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Xe.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? Qe(e, t, i)
                      : Pe(e, Ge, function () {
                          return Qe(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Be(e),
                    s = !f.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                    u = i ? Ke(e, t, i, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - 0.5)),
                    u && (r = ee.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                    Ye(0, n, u)
                  );
                }
              };
            }),
            (w.cssHooks.marginLeft = $e(f.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(qe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Pe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
              (w.cssHooks[e + t] = {
                expand: function (n) {
                  for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + te[i] + t] = o[i] || o[i - 2] || o[0];
                  return r;
                }
              }),
                "margin" !== e && (w.cssHooks[e + t].set = Ye);
            }),
            w.fn.extend({
              css: function (e, t) {
                return q(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Be(e), r = t.length; s < r; s++) o[t[s]] = w.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              }
            }),
            (w.Tween = Ze),
            (Ze.prototype = {
              constructor: Ze,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || w.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (w.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = Ze.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ze.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = Ze.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
                  this
                );
              }
            }),
            (Ze.prototype.init.prototype = Ze.prototype),
            (Ze.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  w.fx.step[e.prop]
                    ? w.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[We(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : w.style(e.elem, e.prop, e.now + e.unit);
                }
              }
            }),
            (Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
              }),
            (w.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing"
            }),
            (w.fx = Ze.prototype.init),
            (w.fx.step = {});
          var et,
            tt,
            nt = /^(?:toggle|show|hide)$/,
            it = /queueHooks$/;
          function rt() {
            tt && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, w.fx.interval), w.fx.tick());
          }
          function ot() {
            return (
              e.setTimeout(function () {
                et = void 0;
              }),
              (et = Date.now())
            );
          }
          function st(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = te[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function at(e, t, n) {
            for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, s = r.length; o < s; o++)
              if ((i = r[o].call(n, t, e))) return i;
          }
          function ut(e, t, n) {
            var i,
              r,
              o = 0,
              s = ut.prefilters.length,
              a = w.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (r) return !1;
                for (
                  var t = et || ot(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    i = 1 - (n / l.duration || 0),
                    o = 0,
                    s = l.tweens.length;
                  o < s;
                  o++
                )
                  l.tweens[o].run(i);
                return a.notifyWith(e, [l, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
              },
              l = a.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: et || ot(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? l.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) l.tweens[n].run(1);
                  return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
                }
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = z(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = w.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(c, l.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = ut.prefilters[o].call(l, e, c, l.opts)))
                return p(i.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
            return (
              w.map(c, at, l),
              p(l.opts.start) && l.opts.start.call(e, l),
              l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
              w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
              l
            );
          }
          (w.Animation = w.extend(ut, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return se(n.elem, e, ee.exec(t), n), n;
                }
              ]
            },
            tweener: function (e, t) {
              p(e) ? ((t = e), (e = ["*"])) : (e = e.match(O));
              for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (ut.tweeners[n] = ut.tweeners[n] || []), ut.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h = "width" in t || "height" in t,
                  d = this,
                  f = {},
                  p = e.style,
                  g = e.nodeType && oe(e),
                  v = G.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = w._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), nt.test(r))) {
                    if ((delete t[i], (o = o || "toggle" === r), r === (g ? "hide" : "show"))) {
                      if ("show" !== r || !v || void 0 === v[i]) continue;
                      g = !0;
                    }
                    f[i] = (v && v[i]) || w.style(e, i);
                  }
                if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
                  for (i in (h &&
                    1 === e.nodeType &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    null == (l = v && v.display) && (l = G.get(e, "display")),
                    "none" === (c = w.css(e, "display")) &&
                      (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), le([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === w.css(e, "float") &&
                      (u ||
                        (d.done(function () {
                          p.display = l;
                        }),
                        null == l && ((c = p.display), (l = "none" === c ? "" : c))),
                      (p.display = "inline-block"))),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    d.always(function () {
                      (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  f))
                    u ||
                      (v ? "hidden" in v && (g = v.hidden) : (v = G.access(e, "fxshow", { display: l })),
                      o && (v.hidden = !g),
                      g && le([e], !0),
                      d.done(function () {
                        for (i in (g || le([e]), G.remove(e, "fxshow"), f)) w.style(e, i, f[i]);
                      })),
                      (u = at(g ? v[i] : 0, i, d)),
                      i in v || ((v[i] = u.start), g && ((u.end = u.start), (u.start = 0)));
              }
            ],
            prefilter: function (e, t) {
              t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
            }
          })),
            (w.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? w.extend({}, e)
                  : { complete: n || (!n && t) || (p(e) && e), duration: e, easing: (n && t) || (t && !p(t) && t) };
              return (
                w.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                }),
                i
              );
            }),
            w.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(oe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = w.isEmptyObject(e),
                  o = w.speed(t, n, i),
                  s = function () {
                    var t = ut(this, w.extend({}, e), o);
                    (r || G.get(this, "finish")) && t.stop(!0);
                  };
                return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = w.timers,
                      s = G.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else for (r in s) s[r] && s[r].stop && it.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || w.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = G.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = w.timers,
                      s = i ? i.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; )
                      o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              }
            }),
            w.each(["toggle", "show", "hide"], function (e, t) {
              var n = w.fn[t];
              w.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, r);
              };
            }),
            w.each(
              {
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
              },
              function (e, t) {
                w.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (w.timers = []),
            (w.fx.tick = function () {
              var e,
                t = 0,
                n = w.timers;
              for (et = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || w.fx.stop(), (et = void 0);
            }),
            (w.fx.timer = function (e) {
              w.timers.push(e), w.fx.start();
            }),
            (w.fx.interval = 13),
            (w.fx.start = function () {
              tt || ((tt = !0), rt());
            }),
            (w.fx.stop = function () {
              tt = null;
            }),
            (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (w.fn.delay = function (t, n) {
              return (
                (t = (w.fx && w.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                  var r = e.setTimeout(n, t);
                  i.stop = function () {
                    e.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = v.createElement("input"),
                t = v.createElement("select").appendChild(v.createElement("option"));
              (e.type = "checkbox"),
                (f.checkOn = "" !== e.value),
                (f.optSelected = t.selected),
                ((e = v.createElement("input")).value = "t"),
                (e.type = "radio"),
                (f.radioValue = "t" === e.value);
            })();
          var lt,
            ct = w.expr.attrHandle;
          w.fn.extend({
            attr: function (e, t) {
              return q(this, w.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                w.removeAttr(this, e);
              });
            }
          }),
            w.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? w.prop(e, t, n)
                    : ((1 === o && w.isXMLDoc(e)) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void w.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = w.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!f.radioValue && "radio" === t && A(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  }
                }
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(O);
                if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
              }
            }),
            (lt = {
              set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
              }
            }),
            w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ct[t] || w.find.attr;
              ct[t] = function (e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return i || ((o = ct[s]), (ct[s] = r), (r = null != n(e, t, i) ? s : null), (ct[s] = o)), r;
              };
            });
          var ht = /^(?:input|select|textarea|button)$/i,
            dt = /^(?:a|area)$/i;
          function ft(e) {
            return (e.match(O) || []).join(" ");
          }
          function pt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function gt(e) {
            return Array.isArray(e) ? e : ("string" == typeof e && e.match(O)) || [];
          }
          w.fn.extend({
            prop: function (e, t) {
              return q(this, w.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[w.propFix[e] || e];
              });
            }
          }),
            w.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (r = w.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || (dt.test(e.nodeName) && e.href) ? 0 : -1;
                  }
                }
              },
              propFix: { for: "htmlFor", class: "className" }
            }),
            f.optSelected ||
              (w.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
              }),
            w.each(
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
                w.propFix[this.toLowerCase()] = this;
              }
            ),
            w.fn.extend({
              addClass: function (e) {
                var t, n, i, r, o, s;
                return p(e)
                  ? this.each(function (t) {
                      w(this).addClass(e.call(this, t, pt(this)));
                    })
                  : (t = gt(e)).length
                  ? this.each(function () {
                      if (((i = pt(this)), (n = 1 === this.nodeType && " " + ft(i) + " "))) {
                        for (o = 0; o < t.length; o++) (r = t[o]), n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        (s = ft(n)), i !== s && this.setAttribute("class", s);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, i, r, o, s;
                return p(e)
                  ? this.each(function (t) {
                      w(this).removeClass(e.call(this, t, pt(this)));
                    })
                  : arguments.length
                  ? (t = gt(e)).length
                    ? this.each(function () {
                        if (((i = pt(this)), (n = 1 === this.nodeType && " " + ft(i) + " "))) {
                          for (o = 0; o < t.length; o++) for (r = t[o]; n.indexOf(" " + r + " ") > -1; ) n = n.replace(" " + r + " ", " ");
                          (s = ft(n)), i !== s && this.setAttribute("class", s);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  i,
                  r,
                  o,
                  s = typeof e,
                  a = "string" === s || Array.isArray(e);
                return p(e)
                  ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, pt(this), t), t);
                    })
                  : "boolean" == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = gt(e)),
                    this.each(function () {
                      if (a) for (o = w(this), r = 0; r < n.length; r++) (i = n[r]), o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                      else
                        (void 0 !== e && "boolean" !== s) ||
                          ((i = pt(this)) && G.set(this, "__className__", i),
                          this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : G.get(this, "__className__") || ""));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + ft(pt(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
              }
            });
          var vt = /\r/g;
          w.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = p(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, w(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = w.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(vt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            }
          }),
            w.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : ft(w.text(e));
                  }
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      u = s ? o + 1 : r.length;
                    for (i = o < 0 ? u : s ? o : 0; i < u; i++)
                      if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (((t = w(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--; )
                      ((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  }
                }
              }
            }),
            w.each(["radio", "checkbox"], function () {
              (w.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                }
              }),
                f.checkOn ||
                  (w.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (f.focusin = "onfocusin" in e);
          var mt = /^(?:focusinfocus|focusoutblur)$/,
            yt = function (e) {
              e.stopPropagation();
            };
          w.extend(w.event, {
            trigger: function (t, n, i, r) {
              var o,
                s,
                a,
                u,
                l,
                h,
                d,
                f,
                m = [i || v],
                y = c.call(t, "type") ? t.type : t,
                _ = c.call(t, "namespace") ? t.namespace.split(".") : [];
              if (
                ((s = f = a = i = i || v),
                3 !== i.nodeType &&
                  8 !== i.nodeType &&
                  !mt.test(y + w.event.triggered) &&
                  (y.indexOf(".") > -1 && ((y = (_ = y.split(".")).shift()), _.sort()),
                  (l = y.indexOf(":") < 0 && "on" + y),
                  ((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                  (t.namespace = _.join(".")),
                  (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (t.result = void 0),
                  t.target || (t.target = i),
                  (n = null == n ? [t] : w.makeArray(n, [t])),
                  (d = w.event.special[y] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(i, n)))
              ) {
                if (!r && !d.noBubble && !g(i)) {
                  for (u = d.delegateType || y, mt.test(u + y) || (s = s.parentNode); s; s = s.parentNode) m.push(s), (a = s);
                  a === (i.ownerDocument || v) && m.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = m[o++]) && !t.isPropagationStopped(); )
                  (f = s),
                    (t.type = o > 1 ? u : d.bindType || y),
                    (h = (G.get(s, "events") || Object.create(null))[t.type] && G.get(s, "handle")) && h.apply(s, n),
                    (h = l && s[l]) && h.apply && W(s) && ((t.result = h.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                  (t.type = y),
                  r ||
                    t.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(m.pop(), n)) ||
                    !W(i) ||
                    (l &&
                      p(i[y]) &&
                      !g(i) &&
                      ((a = i[l]) && (i[l] = null),
                      (w.event.triggered = y),
                      t.isPropagationStopped() && f.addEventListener(y, yt),
                      i[y](),
                      t.isPropagationStopped() && f.removeEventListener(y, yt),
                      (w.event.triggered = void 0),
                      a && (i[l] = a))),
                  t.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
              w.event.trigger(i, null, t);
            }
          }),
            w.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  w.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
              }
            }),
            f.focusin ||
              w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = G.access(i, t);
                    r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = G.access(i, t) - 1;
                    r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t));
                  }
                };
              });
          var _t = e.location,
            wt = { guid: Date.now() },
            bt = /\?/;
          w.parseXML = function (t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
              n = new e.DOMParser().parseFromString(t, "text/xml");
            } catch (e) {}
            return (
              (i = n && n.getElementsByTagName("parsererror")[0]),
              (n && !i) ||
                w.error(
                  "Invalid XML: " +
                    (i
                      ? w
                          .map(i.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : t)
                ),
              n
            );
          };
          var xt = /\[\]$/,
            Ct = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;
          function At(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              w.each(t, function (t, r) {
                n || xt.test(e) ? i(e, r) : At(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
              });
            else if (n || "object" !== _(t)) i(e, t);
            else for (r in t) At(e + "[" + r + "]", t[r], n, i);
          }
          (w.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = p(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
              w.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) At(n, e[n], t, r);
            return i.join("&");
          }),
            w.fn.extend({
              serialize: function () {
                return w.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = w.prop(this, "elements");
                  return e ? w.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return this.name && !w(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !de.test(e));
                  })
                  .map(function (e, t) {
                    var n = w(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? w.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ct, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Ct, "\r\n") };
                  })
                  .get();
              }
            });
          var Vt = /%20/g,
            kt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Dt = /^(?:GET|HEAD)$/,
            jt = /^\/\//,
            Rt = {},
            Ot = {},
            Nt = "*/".concat("*"),
            It = v.createElement("a");
          function Bt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(O) || [];
              if (p(n))
                for (; (i = o[r++]); )
                  "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
            };
          }
          function Pt(e, t, n, i) {
            var r = {},
              o = e === Ot;
            function s(a) {
              var u;
              return (
                (r[a] = !0),
                w.each(e[a] || [], function (e, a) {
                  var l = a(t, n, i);
                  return "string" != typeof l || o || r[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), s(l), !1);
                }),
                u
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Lt(e, t) {
            var n,
              i,
              r = w.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && w.extend(!0, e, i), e;
          }
          (It.href = _t.href),
            w.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Nt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 }
              },
              ajaxSetup: function (e, t) {
                return t ? Lt(Lt(e, w.ajaxSettings), t) : Lt(w.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(Rt),
              ajaxTransport: Bt(Ot),
              ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  h,
                  d,
                  f = w.ajaxSetup({}, n),
                  p = f.context || f,
                  g = f.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                  m = w.Deferred(),
                  y = w.Callbacks("once memory"),
                  _ = f.statusCode || {},
                  b = {},
                  x = {},
                  C = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!s)
                          for (s = {}; (t = St.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return null == l && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                      return null == l && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) E.always(e[E.status]);
                        else for (t in e) _[t] = [_[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || C;
                      return i && i.abort(t), T(0, t), this;
                    }
                  };
                if (
                  (m.promise(E),
                  (f.url = ((t || f.url || _t.href) + "").replace(jt, _t.protocol + "//")),
                  (f.type = n.method || n.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""]),
                  null == f.crossDomain)
                ) {
                  u = v.createElement("a");
                  try {
                    (u.href = f.url), (u.href = u.href), (f.crossDomain = It.protocol + "//" + It.host != u.protocol + "//" + u.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), Pt(Rt, f, n, E), l))
                  return E;
                for (h in ((c = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Dt.test(f.type)),
                (r = f.url.replace(kt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                    (f.data = f.data.replace(Vt, "+"))
                  : ((d = f.url.slice(r.length)),
                    f.data && (f.processData || "string" == typeof f.data) && ((r += (bt.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache && ((r = r.replace(Mt, "$1")), (d = (bt.test(r) ? "&" : "?") + "_=" + wt.guid++ + d)),
                    (f.url = r + d)),
                f.ifModified &&
                  (w.lastModified[r] && E.setRequestHeader("If-Modified-Since", w.lastModified[r]),
                  w.etag[r] && E.setRequestHeader("If-None-Match", w.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && E.setRequestHeader("Content-Type", f.contentType),
                E.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  E.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, E, f) || l)) return E.abort();
                if (((C = "abort"), y.add(f.complete), E.done(f.success), E.fail(f.error), (i = Pt(Ot, f, n, E)))) {
                  if (((E.readyState = 1), c && g.trigger("ajaxSend", [E, f]), l)) return E;
                  f.async &&
                    f.timeout > 0 &&
                    (a = e.setTimeout(function () {
                      E.abort("timeout");
                    }, f.timeout));
                  try {
                    (l = !1), i.send(b, T);
                  } catch (e) {
                    if (l) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(t, n, s, u) {
                  var h,
                    d,
                    v,
                    b,
                    x,
                    C = n;
                  l ||
                    ((l = !0),
                    a && e.clearTimeout(a),
                    (i = void 0),
                    (o = u || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (h = (t >= 200 && t < 300) || 304 === t),
                    s &&
                      (b = (function (e, t, n) {
                        for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                          u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              u.unshift(r);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (r in n) {
                            if (!u[0] || e.converters[r + " " + u[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(f, E, s)),
                    !h &&
                      w.inArray("script", f.dataTypes) > -1 &&
                      w.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (b = (function (e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(s = l[u + " " + o] || l["* " + o]))
                              for (r in l)
                                if ((a = r.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                  !0 === s ? (s = l[r]) : !0 !== l[r] && ((o = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, b, E, h)),
                    h
                      ? (f.ifModified &&
                          ((x = E.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x),
                          (x = E.getResponseHeader("etag")) && (w.etag[r] = x)),
                        204 === t || "HEAD" === f.type
                          ? (C = "nocontent")
                          : 304 === t
                          ? (C = "notmodified")
                          : ((C = b.state), (d = b.data), (h = !(v = b.error))))
                      : ((v = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    h ? m.resolveWith(p, [d, C, E]) : m.rejectWith(p, [E, C, v]),
                    E.statusCode(_),
                    (_ = void 0),
                    c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [E, f, h ? d : v]),
                    y.fireWith(p, [E, C]),
                    c && (g.trigger("ajaxComplete", [E, f]), --w.active || w.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
              }
            }),
            w.each(["get", "post"], function (e, t) {
              w[t] = function (e, n, i, r) {
                return (
                  p(n) && ((r = r || i), (i = n), (n = void 0)),
                  w.ajax(w.extend({ url: e, type: t, dataType: r, data: n, success: i }, w.isPlainObject(e) && e))
                );
              };
            }),
            w.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            }),
            (w._evalUrl = function (e, t, n) {
              return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  w.globalEval(e, t, n);
                }
              });
            }),
            w.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (p(e) && (e = e.call(this[0])),
                    (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                return p(e)
                  ? this.each(function (t) {
                      w(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = w(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = p(e);
                return this.each(function (n) {
                  w(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      w(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              }
            }),
            (w.expr.pseudos.hidden = function (e) {
              return !w.expr.pseudos.visible(e);
            }),
            (w.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (w.ajaxSettings.xhr = function () {
              try {
                return new e.XMLHttpRequest();
              } catch (e) {}
            });
          var Ht = { 0: 200, 1223: 204 },
            qt = w.ajaxSettings.xhr();
          (f.cors = !!qt && "withCredentials" in qt),
            (f.ajax = qt = !!qt),
            w.ajaxTransport(function (t) {
              var n, i;
              if (f.cors || (qt && !t.crossDomain))
                return {
                  send: function (r, o) {
                    var s,
                      a = t.xhr();
                    if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(s, r[s]);
                    (n = function (e) {
                      return function () {
                        n &&
                          ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Ht[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") || "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = n()),
                      (i = a.onerror = a.ontimeout = n("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = i)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              e.setTimeout(function () {
                                n && i();
                              });
                          }),
                      (n = n("abort"));
                    try {
                      a.send((t.hasContent && t.data) || null);
                    } catch (e) {
                      if (n) throw e;
                    }
                  },
                  abort: function () {
                    n && n();
                  }
                };
            }),
            w.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            w.ajaxSetup({
              accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return w.globalEval(e), e;
                }
              }
            }),
            w.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            w.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = w("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      v.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  }
                };
            });
          var $t,
            Ft = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Ft.pop() || w.expando + "_" + wt.guid++;
              return (this[e] = !0), e;
            }
          }),
            w.ajaxPrefilter("json jsonp", function (t, n, i) {
              var r,
                o,
                s,
                a =
                  !1 !== t.jsonp &&
                  (Ut.test(t.url)
                    ? "url"
                    : "string" == typeof t.data &&
                      0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                      Ut.test(t.data) &&
                      "data");
              if (a || "jsonp" === t.dataTypes[0])
                return (
                  (r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  a ? (t[a] = t[a].replace(Ut, "$1" + r)) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                  (t.converters["script json"] = function () {
                    return s || w.error(r + " was not called"), s[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (o = e[r]),
                  (e[r] = function () {
                    s = arguments;
                  }),
                  i.always(function () {
                    void 0 === o ? w(e).removeProp(r) : (e[r] = o),
                      t[r] && ((t.jsonpCallback = n.jsonpCallback), Ft.push(r)),
                      s && p(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (f.createHTMLDocument =
              ((($t = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === $t.childNodes.length)),
            (w.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (f.createHTMLDocument
                      ? (((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href),
                        t.head.appendChild(i))
                      : (t = v)),
                  (r = V.exec(e)),
                  (o = !n && []),
                  r ? [t.createElement(r[1])] : ((r = _e([e], t, o)), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
              var i, r, o;
            }),
            (w.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = ft(e.slice(a))), (e = e.slice(0, a))),
                p(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                s.length > 0 &&
                  w
                    .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                    .done(function (e) {
                      (o = arguments), s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (w.expr.pseudos.animated = function (e) {
              return w.grep(w.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (w.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  u,
                  l = w.css(e, "position"),
                  c = w(e),
                  h = {};
                "static" === l && (e.style.position = "relative"),
                  (a = c.offset()),
                  (o = w.css(e, "top")),
                  (u = w.css(e, "left")),
                  ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1
                    ? ((s = (i = c.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(u) || 0)),
                  p(t) && (t = t.call(e, n, w.extend({}, a))),
                  null != t.top && (h.top = t.top - a.top + s),
                  null != t.left && (h.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, h) : c.css(h);
              }
            }),
            w.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        w.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement;
                      e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (r.left += w.css(e, "borderLeftWidth", !0)));
                  }
                  return { top: t.top - r.top - w.css(i, "marginTop", !0), left: t.left - r.left - w.css(i, "marginLeft", !0) };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                  return e || ne;
                });
              }
            }),
            w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
              var n = "pageYOffset" === t;
              w.fn[e] = function (i) {
                return q(
                  this,
                  function (e, i, r) {
                    var o;
                    if ((g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                  },
                  e,
                  i,
                  arguments.length
                );
              };
            }),
            w.each(["top", "left"], function (e, t) {
              w.cssHooks[t] = $e(f.pixelPosition, function (e, n) {
                if (n) return (n = qe(e, t)), Ne.test(n) ? w(e).position()[t] + "px" : n;
              });
            }),
            w.each({ Height: "height", Width: "width" }, function (e, t) {
              w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                w.fn[i] = function (r, o) {
                  var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                  return q(
                    this,
                    function (t, n, r) {
                      var o;
                      return g(t)
                        ? 0 === i.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                        : void 0 === r
                        ? w.css(t, n, a)
                        : w.style(t, n, r, a);
                    },
                    t,
                    s ? r : void 0,
                    s
                  );
                };
              });
            }),
            w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
              w.fn[t] = function (e) {
                return this.on(t, e);
              };
            }),
            w.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              }
            }),
            w.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                w.fn[t] = function (e, n) {
                  return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
              }
            );
          var zt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (w.proxy = function (e, t) {
            var n, i, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
              return (
                (i = r.call(arguments, 2)),
                ((o = function () {
                  return e.apply(t || this, i.concat(r.call(arguments)));
                }).guid = e.guid =
                  e.guid || w.guid++),
                o
              );
          }),
            (w.holdReady = function (e) {
              e ? w.readyWait++ : w.ready(!0);
            }),
            (w.isArray = Array.isArray),
            (w.parseJSON = JSON.parse),
            (w.nodeName = A),
            (w.isFunction = p),
            (w.isWindow = g),
            (w.camelCase = z),
            (w.type = _),
            (w.now = Date.now),
            (w.isNumeric = function (e) {
              var t = w.type(e);
              return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (w.trim = function (e) {
              return null == e ? "" : (e + "").replace(zt, "$1");
            }),
            "function" == typeof define &&
              define.amd &&
              define("jquery", [], function () {
                return w;
              });
          var Wt = e.jQuery,
            Xt = e.$;
          return (
            (w.noConflict = function (t) {
              return e.$ === w && (e.$ = Xt), t && e.jQuery === w && (e.jQuery = Wt), w;
            }),
            void 0 === t && (e.jQuery = e.$ = w),
            w
          );
        });
      },
      {}
    ],
    underscore: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (e, i) {
              "object" == typeof n && void 0 !== t
                ? (t.exports = i())
                : "function" == typeof define && define.amd
                ? define("underscore", i)
                : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                  (function () {
                    var t = e._,
                      n = (e._ = i());
                    n.noConflict = function () {
                      return (e._ = t), n;
                    };
                  })());
            })(this, function () {
              //     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
              var t =
                  ("object" == typeof self && self.self === self && self) ||
                  ("object" == typeof e && e.global === e && e) ||
                  Function("return this")() ||
                  {},
                n = Array.prototype,
                i = Object.prototype,
                r = "undefined" != typeof Symbol ? Symbol.prototype : null,
                o = n.push,
                s = n.slice,
                a = i.toString,
                u = i.hasOwnProperty,
                l = "undefined" != typeof ArrayBuffer,
                c = "undefined" != typeof DataView,
                h = Array.isArray,
                d = Object.keys,
                f = Object.create,
                p = l && ArrayBuffer.isView,
                g = isNaN,
                v = isFinite,
                m = !{ toString: null }.propertyIsEnumerable("toString"),
                y = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                _ = Math.pow(2, 53) - 1;
              function w(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var n = Math.max(arguments.length - t, 0), i = Array(n), r = 0; r < n; r++) i[r] = arguments[r + t];
                    switch (t) {
                      case 0:
                        return e.call(this, i);
                      case 1:
                        return e.call(this, arguments[0], i);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], i);
                    }
                    var o = Array(t + 1);
                    for (r = 0; r < t; r++) o[r] = arguments[r];
                    return (o[t] = i), e.apply(this, o);
                  }
                );
              }
              function b(e) {
                var t = typeof e;
                return "function" === t || ("object" === t && !!e);
              }
              function x(e) {
                return void 0 === e;
              }
              function C(e) {
                return !0 === e || !1 === e || "[object Boolean]" === a.call(e);
              }
              function E(e) {
                var t = "[object " + e + "]";
                return function (e) {
                  return a.call(e) === t;
                };
              }
              var T = E("String"),
                A = E("Number"),
                V = E("Date"),
                k = E("RegExp"),
                M = E("Error"),
                S = E("Symbol"),
                D = E("ArrayBuffer"),
                j = E("Function"),
                R = t.document && t.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof R &&
                (j = function (e) {
                  return "function" == typeof e || !1;
                });
              var O = j,
                N = E("Object"),
                I = c && N(new DataView(new ArrayBuffer(8))),
                B = "undefined" != typeof Map && N(new Map()),
                P = E("DataView");
              var L = I
                  ? function (e) {
                      return null != e && O(e.getInt8) && D(e.buffer);
                    }
                  : P,
                H = h || E("Array");
              function q(e, t) {
                return null != e && u.call(e, t);
              }
              var $ = E("Arguments");
              !(function () {
                $(arguments) ||
                  ($ = function (e) {
                    return q(e, "callee");
                  });
              })();
              var F = $;
              function U(e) {
                return A(e) && g(e);
              }
              function z(e) {
                return function () {
                  return e;
                };
              }
              function W(e) {
                return function (t) {
                  var n = e(t);
                  return "number" == typeof n && n >= 0 && n <= _;
                };
              }
              function X(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var G = X("byteLength"),
                J = W(G),
                Y = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var K = l
                  ? function (e) {
                      return p ? p(e) && !L(e) : J(e) && Y.test(a.call(e));
                    }
                  : z(!1),
                Q = X("length");
              function Z(e, t) {
                t = (function (e) {
                  for (var t = {}, n = e.length, i = 0; i < n; ++i) t[e[i]] = !0;
                  return {
                    contains: function (e) {
                      return !0 === t[e];
                    },
                    push: function (n) {
                      return (t[n] = !0), e.push(n);
                    }
                  };
                })(t);
                var n = y.length,
                  r = e.constructor,
                  o = (O(r) && r.prototype) || i,
                  s = "constructor";
                for (q(e, s) && !t.contains(s) && t.push(s); n--; ) (s = y[n]) in e && e[s] !== o[s] && !t.contains(s) && t.push(s);
              }
              function ee(e) {
                if (!b(e)) return [];
                if (d) return d(e);
                var t = [];
                for (var n in e) q(e, n) && t.push(n);
                return m && Z(e, t), t;
              }
              function te(e, t) {
                var n = ee(t),
                  i = n.length;
                if (null == e) return !i;
                for (var r = Object(e), o = 0; o < i; o++) {
                  var s = n[o];
                  if (t[s] !== r[s] || !(s in r)) return !1;
                }
                return !0;
              }
              function ne(e) {
                return e instanceof ne ? e : this instanceof ne ? void (this._wrapped = e) : new ne(e);
              }
              function ie(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, G(e));
              }
              (ne.VERSION = "1.13.6"),
                (ne.prototype.value = function () {
                  return this._wrapped;
                }),
                (ne.prototype.valueOf = ne.prototype.toJSON = ne.prototype.value),
                (ne.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var re = "[object DataView]";
              function oe(e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var o = typeof e;
                return (
                  ("function" === o || "object" === o || "object" == typeof t) &&
                  (function e(t, n, i, o) {
                    t instanceof ne && (t = t._wrapped);
                    n instanceof ne && (n = n._wrapped);
                    var s = a.call(t);
                    if (s !== a.call(n)) return !1;
                    if (I && "[object Object]" == s && L(t)) {
                      if (!L(n)) return !1;
                      s = re;
                    }
                    switch (s) {
                      case "[object RegExp]":
                      case "[object String]":
                        return "" + t == "" + n;
                      case "[object Number]":
                        return +t != +t ? +n != +n : 0 == +t ? 1 / +t == 1 / n : +t == +n;
                      case "[object Date]":
                      case "[object Boolean]":
                        return +t == +n;
                      case "[object Symbol]":
                        return r.valueOf.call(t) === r.valueOf.call(n);
                      case "[object ArrayBuffer]":
                      case re:
                        return e(ie(t), ie(n), i, o);
                    }
                    var u = "[object Array]" === s;
                    if (!u && K(t)) {
                      var l = G(t);
                      if (l !== G(n)) return !1;
                      if (t.buffer === n.buffer && t.byteOffset === n.byteOffset) return !0;
                      u = !0;
                    }
                    if (!u) {
                      if ("object" != typeof t || "object" != typeof n) return !1;
                      var c = t.constructor,
                        h = n.constructor;
                      if (c !== h && !(O(c) && c instanceof c && O(h) && h instanceof h) && "constructor" in t && "constructor" in n)
                        return !1;
                    }
                    i = i || [];
                    o = o || [];
                    var d = i.length;
                    for (; d--; ) if (i[d] === t) return o[d] === n;
                    i.push(t);
                    o.push(n);
                    if (u) {
                      if ((d = t.length) !== n.length) return !1;
                      for (; d--; ) if (!oe(t[d], n[d], i, o)) return !1;
                    } else {
                      var f,
                        p = ee(t);
                      if (((d = p.length), ee(n).length !== d)) return !1;
                      for (; d--; ) if (((f = p[d]), !q(n, f) || !oe(t[f], n[f], i, o))) return !1;
                    }
                    i.pop();
                    o.pop();
                    return !0;
                  })(e, t, n, i)
                );
              }
              function se(e) {
                if (!b(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return m && Z(e, t), t;
              }
              function ae(e) {
                var t = Q(e);
                return function (n) {
                  if (null == n) return !1;
                  var i = se(n);
                  if (Q(i)) return !1;
                  for (var r = 0; r < t; r++) if (!O(n[e[r]])) return !1;
                  return e !== de || !O(n[ue]);
                };
              }
              var ue = "forEach",
                le = ["clear", "delete"],
                ce = ["get", "has", "set"],
                he = le.concat(ue, ce),
                de = le.concat(ce),
                fe = ["add"].concat(le, ue, "has"),
                pe = B ? ae(he) : E("Map"),
                ge = B ? ae(de) : E("WeakMap"),
                ve = B ? ae(fe) : E("Set"),
                me = E("WeakSet");
              function ye(e) {
                for (var t = ee(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
                return i;
              }
              function _e(e) {
                for (var t = {}, n = ee(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
                return t;
              }
              function we(e) {
                var t = [];
                for (var n in e) O(e[n]) && t.push(n);
                return t.sort();
              }
              function be(e, t) {
                return function (n) {
                  var i = arguments.length;
                  if ((t && (n = Object(n)), i < 2 || null == n)) return n;
                  for (var r = 1; r < i; r++)
                    for (var o = arguments[r], s = e(o), a = s.length, u = 0; u < a; u++) {
                      var l = s[u];
                      (t && void 0 !== n[l]) || (n[l] = o[l]);
                    }
                  return n;
                };
              }
              var xe = be(se),
                Ce = be(ee),
                Ee = be(se, !0);
              function Te(e) {
                if (!b(e)) return {};
                if (f) return f(e);
                var t = function () {};
                t.prototype = e;
                var n = new t();
                return (t.prototype = null), n;
              }
              function Ae(e) {
                return H(e) ? e : [e];
              }
              function Ve(e) {
                return ne.toPath(e);
              }
              function ke(e, t) {
                for (var n = t.length, i = 0; i < n; i++) {
                  if (null == e) return;
                  e = e[t[i]];
                }
                return n ? e : void 0;
              }
              function Me(e, t, n) {
                var i = ke(e, Ve(t));
                return x(i) ? n : i;
              }
              function Se(e) {
                return e;
              }
              function De(e) {
                return (
                  (e = Ce({}, e)),
                  function (t) {
                    return te(t, e);
                  }
                );
              }
              function je(e) {
                return (
                  (e = Ve(e)),
                  function (t) {
                    return ke(t, e);
                  }
                );
              }
              function Re(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 3:
                    return function (n, i, r) {
                      return e.call(t, n, i, r);
                    };
                  case 4:
                    return function (n, i, r, o) {
                      return e.call(t, n, i, r, o);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function Oe(e, t, n) {
                return null == e ? Se : O(e) ? Re(e, t, n) : b(e) && !H(e) ? De(e) : je(e);
              }
              function Ne(e, t) {
                return Oe(e, t, 1 / 0);
              }
              function Ie(e, t, n) {
                return ne.iteratee !== Ne ? ne.iteratee(e, t) : Oe(e, t, n);
              }
              function Be() {}
              function Pe(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (ne.toPath = Ae), (ne.iteratee = Ne);
              var Le =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function He(e) {
                var t = function (t) {
                    return e[t];
                  },
                  n = "(?:" + ee(e).join("|") + ")",
                  i = RegExp(n),
                  r = RegExp(n, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(r, t) : e;
                };
              }
              var qe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                $e = He(qe),
                Fe = He(_e(qe)),
                Ue = (ne.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                ze = /(.)^/,
                We = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Xe = /\\|'|\r|\n|\u2028|\u2029/g;
              function Ge(e) {
                return "\\" + We[e];
              }
              var Je = /^\s*(\w|\$)+\s*$/;
              var Ye = 0;
              function Ke(e, t, n, i, r) {
                if (!(i instanceof t)) return e.apply(n, r);
                var o = Te(e.prototype),
                  s = e.apply(o, r);
                return b(s) ? s : o;
              }
              var Qe = w(function (e, t) {
                var n = Qe.placeholder,
                  i = function () {
                    for (var r = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === n ? arguments[r++] : t[a];
                    for (; r < arguments.length; ) s.push(arguments[r++]);
                    return Ke(e, i, this, this, s);
                  };
                return i;
              });
              Qe.placeholder = ne;
              var Ze = w(function (e, t, n) {
                  if (!O(e)) throw new TypeError("Bind must be called on a function");
                  var i = w(function (r) {
                    return Ke(e, i, t, this, n.concat(r));
                  });
                  return i;
                }),
                et = W(Q);
              function tt(e, t, n, i) {
                if (((i = i || []), t || 0 === t)) {
                  if (t <= 0) return i.concat(e);
                } else t = 1 / 0;
                for (var r = i.length, o = 0, s = Q(e); o < s; o++) {
                  var a = e[o];
                  if (et(a) && (H(a) || F(a)))
                    if (t > 1) tt(a, t - 1, n, i), (r = i.length);
                    else for (var u = 0, l = a.length; u < l; ) i[r++] = a[u++];
                  else n || (i[r++] = a);
                }
                return i;
              }
              var nt = w(function (e, t) {
                var n = (t = tt(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var i = t[n];
                  e[i] = Ze(e[i], e);
                }
                return e;
              });
              var it = w(function (e, t, n) {
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                rt = Qe(it, ne, 1);
              function ot(e) {
                return function () {
                  return !e.apply(this, arguments);
                };
              }
              function st(e, t) {
                var n;
                return function () {
                  return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
              }
              var at = Qe(st, 2);
              function ut(e, t, n) {
                t = Ie(t, n);
                for (var i, r = ee(e), o = 0, s = r.length; o < s; o++) if (t(e[(i = r[o])], i, e)) return i;
              }
              function lt(e) {
                return function (t, n, i) {
                  n = Ie(n, i);
                  for (var r = Q(t), o = e > 0 ? 0 : r - 1; o >= 0 && o < r; o += e) if (n(t[o], o, t)) return o;
                  return -1;
                };
              }
              var ct = lt(1),
                ht = lt(-1);
              function dt(e, t, n, i) {
                for (var r = (n = Ie(n, i, 1))(t), o = 0, s = Q(e); o < s; ) {
                  var a = Math.floor((o + s) / 2);
                  n(e[a]) < r ? (o = a + 1) : (s = a);
                }
                return o;
              }
              function ft(e, t, n) {
                return function (i, r, o) {
                  var a = 0,
                    u = Q(i);
                  if ("number" == typeof o) e > 0 ? (a = o >= 0 ? o : Math.max(o + u, a)) : (u = o >= 0 ? Math.min(o + 1, u) : o + u + 1);
                  else if (n && o && u) return i[(o = n(i, r))] === r ? o : -1;
                  if (r != r) return (o = t(s.call(i, a, u), U)) >= 0 ? o + a : -1;
                  for (o = e > 0 ? a : u - 1; o >= 0 && o < u; o += e) if (i[o] === r) return o;
                  return -1;
                };
              }
              var pt = ft(1, ct, dt),
                gt = ft(-1, ht);
              function vt(e, t, n) {
                var i = (et(e) ? ct : ut)(e, t, n);
                if (void 0 !== i && -1 !== i) return e[i];
              }
              function mt(e, t, n) {
                var i, r;
                if (((t = Re(t, n)), et(e))) for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
                else {
                  var o = ee(e);
                  for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e);
                }
                return e;
              }
              function yt(e, t, n) {
                t = Ie(t, n);
                for (var i = !et(e) && ee(e), r = (i || e).length, o = Array(r), s = 0; s < r; s++) {
                  var a = i ? i[s] : s;
                  o[s] = t(e[a], a, e);
                }
                return o;
              }
              function _t(e) {
                return function (t, n, i, r) {
                  var o = arguments.length >= 3;
                  return (function (t, n, i, r) {
                    var o = !et(t) && ee(t),
                      s = (o || t).length,
                      a = e > 0 ? 0 : s - 1;
                    for (r || ((i = t[o ? o[a] : a]), (a += e)); a >= 0 && a < s; a += e) {
                      var u = o ? o[a] : a;
                      i = n(i, t[u], u, t);
                    }
                    return i;
                  })(t, Re(n, r, 4), i, o);
                };
              }
              var wt = _t(1),
                bt = _t(-1);
              function xt(e, t, n) {
                var i = [];
                return (
                  (t = Ie(t, n)),
                  mt(e, function (e, n, r) {
                    t(e, n, r) && i.push(e);
                  }),
                  i
                );
              }
              function Ct(e, t, n) {
                t = Ie(t, n);
                for (var i = !et(e) && ee(e), r = (i || e).length, o = 0; o < r; o++) {
                  var s = i ? i[o] : o;
                  if (!t(e[s], s, e)) return !1;
                }
                return !0;
              }
              function Et(e, t, n) {
                t = Ie(t, n);
                for (var i = !et(e) && ee(e), r = (i || e).length, o = 0; o < r; o++) {
                  var s = i ? i[o] : o;
                  if (t(e[s], s, e)) return !0;
                }
                return !1;
              }
              function Tt(e, t, n, i) {
                return et(e) || (e = ye(e)), ("number" != typeof n || i) && (n = 0), pt(e, t, n) >= 0;
              }
              var At = w(function (e, t, n) {
                var i, r;
                return (
                  O(t) ? (r = t) : ((t = Ve(t)), (i = t.slice(0, -1)), (t = t[t.length - 1])),
                  yt(e, function (e) {
                    var o = r;
                    if (!o) {
                      if ((i && i.length && (e = ke(e, i)), null == e)) return;
                      o = e[t];
                    }
                    return null == o ? o : o.apply(e, n);
                  })
                );
              });
              function Vt(e, t) {
                return yt(e, je(t));
              }
              function kt(e, t, n) {
                var i,
                  r,
                  o = -1 / 0,
                  s = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var a = 0, u = (e = et(e) ? e : ye(e)).length; a < u; a++) null != (i = e[a]) && i > o && (o = i);
                else
                  (t = Ie(t, n)),
                    mt(e, function (e, n, i) {
                      ((r = t(e, n, i)) > s || (r === -1 / 0 && o === -1 / 0)) && ((o = e), (s = r));
                    });
                return o;
              }
              var Mt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function St(e) {
                return e ? (H(e) ? s.call(e) : T(e) ? e.match(Mt) : et(e) ? yt(e, Se) : ye(e)) : [];
              }
              function Dt(e, t, n) {
                if (null == t || n) return et(e) || (e = ye(e)), e[Pe(e.length - 1)];
                var i = St(e),
                  r = Q(i);
                t = Math.max(Math.min(t, r), 0);
                for (var o = r - 1, s = 0; s < t; s++) {
                  var a = Pe(s, o),
                    u = i[s];
                  (i[s] = i[a]), (i[a] = u);
                }
                return i.slice(0, t);
              }
              function jt(e, t) {
                return function (n, i, r) {
                  var o = t ? [[], []] : {};
                  return (
                    (i = Ie(i, r)),
                    mt(n, function (t, r) {
                      var s = i(t, r, n);
                      e(o, t, s);
                    }),
                    o
                  );
                };
              }
              var Rt = jt(function (e, t, n) {
                  q(e, n) ? e[n].push(t) : (e[n] = [t]);
                }),
                Ot = jt(function (e, t, n) {
                  e[n] = t;
                }),
                Nt = jt(function (e, t, n) {
                  q(e, n) ? e[n]++ : (e[n] = 1);
                }),
                It = jt(function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                }, !0);
              function Bt(e, t, n) {
                return t in n;
              }
              var Pt = w(function (e, t) {
                  var n = {},
                    i = t[0];
                  if (null == e) return n;
                  O(i) ? (t.length > 1 && (i = Re(i, t[1])), (t = se(e))) : ((i = Bt), (t = tt(t, !1, !1)), (e = Object(e)));
                  for (var r = 0, o = t.length; r < o; r++) {
                    var s = t[r],
                      a = e[s];
                    i(a, s, e) && (n[s] = a);
                  }
                  return n;
                }),
                Lt = w(function (e, t) {
                  var n,
                    i = t[0];
                  return (
                    O(i)
                      ? ((i = ot(i)), t.length > 1 && (n = t[1]))
                      : ((t = yt(tt(t, !1, !1), String)),
                        (i = function (e, n) {
                          return !Tt(t, n);
                        })),
                    Pt(e, i, n)
                  );
                });
              function Ht(e, t, n) {
                return s.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
              }
              function qt(e, t, n) {
                return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : Ht(e, e.length - t);
              }
              function $t(e, t, n) {
                return s.call(e, null == t || n ? 1 : t);
              }
              var Ft = w(function (e, t) {
                  return (
                    (t = tt(t, !0, !0)),
                    xt(e, function (e) {
                      return !Tt(t, e);
                    })
                  );
                }),
                Ut = w(function (e, t) {
                  return Ft(e, t);
                });
              function zt(e, t, n, i) {
                C(t) || ((i = n), (n = t), (t = !1)), null != n && (n = Ie(n, i));
                for (var r = [], o = [], s = 0, a = Q(e); s < a; s++) {
                  var u = e[s],
                    l = n ? n(u, s, e) : u;
                  t && !n ? ((s && o === l) || r.push(u), (o = l)) : n ? Tt(o, l) || (o.push(l), r.push(u)) : Tt(r, u) || r.push(u);
                }
                return r;
              }
              var Wt = w(function (e) {
                return zt(tt(e, !0, !0));
              });
              function Xt(e) {
                for (var t = (e && kt(e, Q).length) || 0, n = Array(t), i = 0; i < t; i++) n[i] = Vt(e, i);
                return n;
              }
              var Gt = w(Xt);
              function Jt(e, t) {
                return e._chain ? ne(t).chain() : t;
              }
              function Yt(e) {
                return (
                  mt(we(e), function (t) {
                    var n = (ne[t] = e[t]);
                    ne.prototype[t] = function () {
                      var e = [this._wrapped];
                      return o.apply(e, arguments), Jt(this, n.apply(ne, e));
                    };
                  }),
                  ne
                );
              }
              mt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = n[e];
                ne.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Jt(this, n)
                  );
                };
              }),
                mt(["concat", "join", "slice"], function (e) {
                  var t = n[e];
                  ne.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Jt(this, e);
                  };
                });
              var Kt = Yt({
                __proto__: null,
                VERSION: "1.13.6",
                restArguments: w,
                isObject: b,
                isNull: function (e) {
                  return null === e;
                },
                isUndefined: x,
                isBoolean: C,
                isElement: function (e) {
                  return !(!e || 1 !== e.nodeType);
                },
                isString: T,
                isNumber: A,
                isDate: V,
                isRegExp: k,
                isError: M,
                isSymbol: S,
                isArrayBuffer: D,
                isDataView: L,
                isArray: H,
                isFunction: O,
                isArguments: F,
                isFinite: function (e) {
                  return !S(e) && v(e) && !isNaN(parseFloat(e));
                },
                isNaN: U,
                isTypedArray: K,
                isEmpty: function (e) {
                  if (null == e) return !0;
                  var t = Q(e);
                  return "number" == typeof t && (H(e) || T(e) || F(e)) ? 0 === t : 0 === Q(ee(e));
                },
                isMatch: te,
                isEqual: function (e, t) {
                  return oe(e, t);
                },
                isMap: pe,
                isWeakMap: ge,
                isSet: ve,
                isWeakSet: me,
                keys: ee,
                allKeys: se,
                values: ye,
                pairs: function (e) {
                  for (var t = ee(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
                  return i;
                },
                invert: _e,
                functions: we,
                methods: we,
                extend: xe,
                extendOwn: Ce,
                assign: Ce,
                defaults: Ee,
                create: function (e, t) {
                  var n = Te(e);
                  return t && Ce(n, t), n;
                },
                clone: function (e) {
                  return b(e) ? (H(e) ? e.slice() : xe({}, e)) : e;
                },
                tap: function (e, t) {
                  return t(e), e;
                },
                get: Me,
                has: function (e, t) {
                  for (var n = (t = Ve(t)).length, i = 0; i < n; i++) {
                    var r = t[i];
                    if (!q(e, r)) return !1;
                    e = e[r];
                  }
                  return !!n;
                },
                mapObject: function (e, t, n) {
                  t = Ie(t, n);
                  for (var i = ee(e), r = i.length, o = {}, s = 0; s < r; s++) {
                    var a = i[s];
                    o[a] = t(e[a], a, e);
                  }
                  return o;
                },
                identity: Se,
                constant: z,
                noop: Be,
                toPath: Ae,
                property: je,
                propertyOf: function (e) {
                  return null == e
                    ? Be
                    : function (t) {
                        return Me(e, t);
                      };
                },
                matcher: De,
                matches: De,
                times: function (e, t, n) {
                  var i = Array(Math.max(0, e));
                  t = Re(t, n, 1);
                  for (var r = 0; r < e; r++) i[r] = t(r);
                  return i;
                },
                random: Pe,
                now: Le,
                escape: $e,
                unescape: Fe,
                templateSettings: Ue,
                template: function (e, t, n) {
                  !t && n && (t = n), (t = Ee({}, t, ne.templateSettings));
                  var i = RegExp([(t.escape || ze).source, (t.interpolate || ze).source, (t.evaluate || ze).source].join("|") + "|$", "g"),
                    r = 0,
                    o = "__p+='";
                  e.replace(i, function (t, n, i, s, a) {
                    return (
                      (o += e.slice(r, a).replace(Xe, Ge)),
                      (r = a + t.length),
                      n
                        ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                        : i
                        ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                        : s && (o += "';\n" + s + "\n__p+='"),
                      t
                    );
                  }),
                    (o += "';\n");
                  var s,
                    a = t.variable;
                  if (a) {
                    if (!Je.test(a)) throw new Error("variable is not a bare identifier: " + a);
                  } else (o = "with(obj||{}){\n" + o + "}\n"), (a = "obj");
                  o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                  try {
                    s = new Function(a, "_", o);
                  } catch (e) {
                    throw ((e.source = o), e);
                  }
                  var u = function (e) {
                    return s.call(this, e, ne);
                  };
                  return (u.source = "function(" + a + "){\n" + o + "}"), u;
                },
                result: function (e, t, n) {
                  var i = (t = Ve(t)).length;
                  if (!i) return O(n) ? n.call(e) : n;
                  for (var r = 0; r < i; r++) {
                    var o = null == e ? void 0 : e[t[r]];
                    void 0 === o && ((o = n), (r = i)), (e = O(o) ? o.call(e) : o);
                  }
                  return e;
                },
                uniqueId: function (e) {
                  var t = ++Ye + "";
                  return e ? e + t : t;
                },
                chain: function (e) {
                  var t = ne(e);
                  return (t._chain = !0), t;
                },
                iteratee: Ne,
                partial: Qe,
                bind: Ze,
                bindAll: nt,
                memoize: function (e, t) {
                  var n = function (i) {
                    var r = n.cache,
                      o = "" + (t ? t.apply(this, arguments) : i);
                    return q(r, o) || (r[o] = e.apply(this, arguments)), r[o];
                  };
                  return (n.cache = {}), n;
                },
                delay: it,
                defer: rt,
                throttle: function (e, t, n) {
                  var i,
                    r,
                    o,
                    s,
                    a = 0;
                  n || (n = {});
                  var u = function () {
                      (a = !1 === n.leading ? 0 : Le()), (i = null), (s = e.apply(r, o)), i || (r = o = null);
                    },
                    l = function () {
                      var l = Le();
                      a || !1 !== n.leading || (a = l);
                      var c = t - (l - a);
                      return (
                        (r = this),
                        (o = arguments),
                        c <= 0 || c > t
                          ? (i && (clearTimeout(i), (i = null)), (a = l), (s = e.apply(r, o)), i || (r = o = null))
                          : i || !1 === n.trailing || (i = setTimeout(u, c)),
                        s
                      );
                    };
                  return (
                    (l.cancel = function () {
                      clearTimeout(i), (a = 0), (i = r = o = null);
                    }),
                    l
                  );
                },
                debounce: function (e, t, n) {
                  var i,
                    r,
                    o,
                    s,
                    a,
                    u = function () {
                      var l = Le() - r;
                      t > l ? (i = setTimeout(u, t - l)) : ((i = null), n || (s = e.apply(a, o)), i || (o = a = null));
                    },
                    l = w(function (l) {
                      return (a = this), (o = l), (r = Le()), i || ((i = setTimeout(u, t)), n && (s = e.apply(a, o))), s;
                    });
                  return (
                    (l.cancel = function () {
                      clearTimeout(i), (i = o = a = null);
                    }),
                    l
                  );
                },
                wrap: function (e, t) {
                  return Qe(t, e);
                },
                negate: ot,
                compose: function () {
                  var e = arguments,
                    t = e.length - 1;
                  return function () {
                    for (var n = t, i = e[t].apply(this, arguments); n--; ) i = e[n].call(this, i);
                    return i;
                  };
                },
                after: function (e, t) {
                  return function () {
                    if (--e < 1) return t.apply(this, arguments);
                  };
                },
                before: st,
                once: at,
                findKey: ut,
                findIndex: ct,
                findLastIndex: ht,
                sortedIndex: dt,
                indexOf: pt,
                lastIndexOf: gt,
                find: vt,
                detect: vt,
                findWhere: function (e, t) {
                  return vt(e, De(t));
                },
                each: mt,
                forEach: mt,
                map: yt,
                collect: yt,
                reduce: wt,
                foldl: wt,
                inject: wt,
                reduceRight: bt,
                foldr: bt,
                filter: xt,
                select: xt,
                reject: function (e, t, n) {
                  return xt(e, ot(Ie(t)), n);
                },
                every: Ct,
                all: Ct,
                some: Et,
                any: Et,
                contains: Tt,
                includes: Tt,
                include: Tt,
                invoke: At,
                pluck: Vt,
                where: function (e, t) {
                  return xt(e, De(t));
                },
                max: kt,
                min: function (e, t, n) {
                  var i,
                    r,
                    o = 1 / 0,
                    s = 1 / 0;
                  if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                    for (var a = 0, u = (e = et(e) ? e : ye(e)).length; a < u; a++) null != (i = e[a]) && i < o && (o = i);
                  else
                    (t = Ie(t, n)),
                      mt(e, function (e, n, i) {
                        ((r = t(e, n, i)) < s || (r === 1 / 0 && o === 1 / 0)) && ((o = e), (s = r));
                      });
                  return o;
                },
                shuffle: function (e) {
                  return Dt(e, 1 / 0);
                },
                sample: Dt,
                sortBy: function (e, t, n) {
                  var i = 0;
                  return (
                    (t = Ie(t, n)),
                    Vt(
                      yt(e, function (e, n, r) {
                        return { value: e, index: i++, criteria: t(e, n, r) };
                      }).sort(function (e, t) {
                        var n = e.criteria,
                          i = t.criteria;
                        if (n !== i) {
                          if (n > i || void 0 === n) return 1;
                          if (n < i || void 0 === i) return -1;
                        }
                        return e.index - t.index;
                      }),
                      "value"
                    )
                  );
                },
                groupBy: Rt,
                indexBy: Ot,
                countBy: Nt,
                partition: It,
                toArray: St,
                size: function (e) {
                  return null == e ? 0 : et(e) ? e.length : ee(e).length;
                },
                pick: Pt,
                omit: Lt,
                first: qt,
                head: qt,
                take: qt,
                initial: Ht,
                last: function (e, t, n) {
                  return null == e || e.length < 1
                    ? null == t || n
                      ? void 0
                      : []
                    : null == t || n
                    ? e[e.length - 1]
                    : $t(e, Math.max(0, e.length - t));
                },
                rest: $t,
                tail: $t,
                drop: $t,
                compact: function (e) {
                  return xt(e, Boolean);
                },
                flatten: function (e, t) {
                  return tt(e, t, !1);
                },
                without: Ut,
                uniq: zt,
                unique: zt,
                union: Wt,
                intersection: function (e) {
                  for (var t = [], n = arguments.length, i = 0, r = Q(e); i < r; i++) {
                    var o = e[i];
                    if (!Tt(t, o)) {
                      var s;
                      for (s = 1; s < n && Tt(arguments[s], o); s++);
                      s === n && t.push(o);
                    }
                  }
                  return t;
                },
                difference: Ft,
                unzip: Xt,
                transpose: Xt,
                zip: Gt,
                object: function (e, t) {
                  for (var n = {}, i = 0, r = Q(e); i < r; i++) t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
                  return n;
                },
                range: function (e, t, n) {
                  null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                  for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; o < i; o++, e += n) r[o] = e;
                  return r;
                },
                chunk: function (e, t) {
                  if (null == t || t < 1) return [];
                  for (var n = [], i = 0, r = e.length; i < r; ) n.push(s.call(e, i, (i += t)));
                  return n;
                },
                mixin: Yt,
                default: ne
              });
              return (Kt._ = Kt), Kt;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ]
  },
  {},
  []
);
null;
