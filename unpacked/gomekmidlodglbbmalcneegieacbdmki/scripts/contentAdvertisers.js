/*! For license information please see contentAdvertisers.js.LICENSE.txt */
(() => {
  var e = {
      6698: (e, t, n) => {
        "use strict";
        var a = n(4836);
        t.default = void 0;
        var r = a(n(8698)),
          s = n(891),
          i = {
            name: "sprintf",
            type: "postProcessor",
            process: function (e, t, n) {
              return n.sprintf
                ? "[object Array]" === Object.prototype.toString.apply(n.sprintf)
                  ? (0, s.vsprintf)(e, n.sprintf)
                  : "object" === (0, r.default)(n.sprintf)
                  ? (0, s.sprintf)(e, n.sprintf)
                  : e
                : e;
            },
            overloadTranslationOptionHandler: function (e) {
              for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
              return { postProcess: "sprintf", sprintf: t };
            }
          };
        t.default = i;
      },
      891: (e, t, n) => {
        "use strict";
        var a = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sprintf = i),
          (t.vsprintf = function (e, t) {
            return i.apply(null, [e].concat(t || []));
          });
        var r = a(n(8698)),
          s = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/
          };
        function i(e) {
          var t = i.cache;
          return (t[e] && t.hasOwnProperty(e)) || (t[e] = i.parse(e)), i.format(i.parse(e), arguments);
        }
        (i.format = function (e, t) {
          var n,
            a,
            o,
            d,
            u,
            _,
            l,
            c,
            m,
            h = 1,
            f = e.length,
            p = "";
          for (a = 0; a < f; a++)
            if ("string" == typeof e[a]) p += e[a];
            else if ("object" === (0, r.default)(e[a])) {
              if ((d = e[a]).keys)
                for (n = t[h], o = 0; o < d.keys.length; o++) {
                  if (null == n)
                    throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', d.keys[o], d.keys[o - 1]));
                  n = n[d.keys[o]];
                }
              else n = d.param_no ? t[d.param_no] : t[h++];
              if (
                (s.not_type.test(d.type) && s.not_primitive.test(d.type) && n instanceof Function && (n = n()),
                s.numeric_arg.test(d.type) && "number" != typeof n && isNaN(n))
              )
                throw new TypeError(i("[sprintf] expecting number but found %T", n));
              switch ((s.number.test(d.type) && (c = n >= 0), d.type)) {
                case "b":
                  n = parseInt(n, 10).toString(2);
                  break;
                case "c":
                  n = String.fromCharCode(parseInt(n, 10));
                  break;
                case "d":
                case "i":
                  n = parseInt(n, 10);
                  break;
                case "j":
                  n = JSON.stringify(n, null, d.width ? parseInt(d.width) : 0);
                  break;
                case "e":
                  n = d.precision ? parseFloat(n).toExponential(d.precision) : parseFloat(n).toExponential();
                  break;
                case "f":
                  n = d.precision ? parseFloat(n).toFixed(d.precision) : parseFloat(n);
                  break;
                case "g":
                  n = d.precision ? String(Number(n.toPrecision(d.precision))) : parseFloat(n);
                  break;
                case "o":
                  n = (parseInt(n, 10) >>> 0).toString(8);
                  break;
                case "s":
                  (n = String(n)), (n = d.precision ? n.substring(0, d.precision) : n);
                  break;
                case "t":
                  (n = String(!!n)), (n = d.precision ? n.substring(0, d.precision) : n);
                  break;
                case "T":
                  (n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase()), (n = d.precision ? n.substring(0, d.precision) : n);
                  break;
                case "u":
                  n = parseInt(n, 10) >>> 0;
                  break;
                case "v":
                  (n = n.valueOf()), (n = d.precision ? n.substring(0, d.precision) : n);
                  break;
                case "x":
                  n = (parseInt(n, 10) >>> 0).toString(16);
                  break;
                case "X":
                  n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
              }
              s.json.test(d.type)
                ? (p += n)
                : (!s.number.test(d.type) || (c && !d.sign) ? (m = "") : ((m = c ? "+" : "-"), (n = n.toString().replace(s.sign, ""))),
                  (_ = d.pad_char ? ("0" === d.pad_char ? "0" : d.pad_char.charAt(1)) : " "),
                  (l = d.width - (m + n).length),
                  (u = d.width && l > 0 ? _.repeat(l) : ""),
                  (p += d.align ? m + n + u : "0" === _ ? m + u + n : u + m + n));
            }
          return p;
        }),
          (i.cache = {}),
          (i.parse = function (e) {
            if (i.cache[e]) return i.cache[e];
            for (var t, n = e, a = [], r = 0; n; ) {
              if (null !== (t = s.text.exec(n))) a.push(t[0]);
              else if (null !== (t = s.modulo.exec(n))) a.push("%");
              else {
                if (null === (t = s.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                if (t[2]) {
                  r |= 1;
                  var o = [],
                    d = t[2],
                    u = [];
                  if (null === (u = s.key.exec(d))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                  for (o.push(u[1]); "" !== (d = d.substring(u[0].length)); )
                    if (null !== (u = s.key_access.exec(d))) o.push(u[1]);
                    else {
                      if (null === (u = s.index_access.exec(d))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                      o.push(u[1]);
                    }
                  t[2] = o;
                } else r |= 2;
                if (3 === r) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                a.push({
                  placeholder: t[0],
                  param_no: t[1],
                  keys: t[2],
                  sign: t[3],
                  pad_char: t[4],
                  align: t[5],
                  width: t[6],
                  precision: t[7],
                  type: t[8]
                });
              }
              n = n.substring(t[0].length);
            }
            return (i.cache[e] = a);
          });
      },
      1076: (e, t, n) => {
        e.exports = n(6698).default;
      },
      6146: (e, t, n) => {
        "use strict";
        t.hd = void 0;
        var a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(e, a.key, a);
              }
            }
            return function (t, n, a) {
              return n && e(t.prototype, n), a && e(t, a), t;
            };
          })(),
          r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                },
          s = c(n(4470)),
          i = c(n(381)),
          o = c(n(2353)),
          d = c(n(7794)),
          u = c(n(1076)),
          _ = c(n(586)),
          l = c(n(8872));
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var m = _.default,
          h = (_.default.localStorage, {}),
          f = {},
          p = {},
          M = {},
          y = null,
          L = null,
          g = void 0;
        function Y(e) {
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
        function k(e, t) {
          return "string" == typeof e && "number" == typeof t && t > 3 && e.length >= t ? e.substr(0, t - 3) + "..." : e;
        }
        function v(e, t) {
          for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) a[s - 2] = arguments[s];
          if (!M[e] && !f.resources) return '<span class="__nls__ __nls__MISSINGSTRING">⚐&nbsp;' + e + "</span>";
          if (f.resources) {
            var i = {
                postProcess: "sprintf",
                sprintf: (a = a.map(function (e) {
                  return Y(e + "");
                }))
              },
              o = d.default.t(e, i),
              u = void 0;
            return (
              "number" == typeof t
                ? ((i.count = t), (u = d.default.t(e, i)))
                : null !== t &&
                  "object" === (void 0 === t ? "undefined" : r(t)) &&
                  void 0 === t.length &&
                  (i.sprintf.length > 1 ? (i.sprintf.shift(), Object.assign(i, t)) : (i = t), (u = d.default.t(e, i))),
              b(u || o)
            );
          }
          var _ = M[e],
            l = g.translate(_);
          return (
            (l = l.withContext(e)),
            "number" == typeof t && (l = l.ifPlural(t)),
            (a = a.map(function (e) {
              return Y(e + "");
            })),
            b(l.fetch.apply(l, a))
          );
        }
        function D(e, t, n) {
          return (
            (m.__TRANSLATE || m.__LOCALIZED) &&
              (t = (function (e, t) {
                return t;
              })(0, t)),
            n && n.ellipsis && (t = k(t, n.ellipsis)),
            t
          );
        }
        function b(e) {
          return e ? e.replace(/(?:\r|\n)/g, "<br />") : e;
        }
        var w = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.moment = i.default);
            }
            return (
              a(e, [
                {
                  key: "direction",
                  value: function () {
                    return f.resources ? d.default.dir(y) : l.default.indexOf(y) > -1 ? "rtl" : "ltr";
                  }
                },
                {
                  key: "register",
                  value: function (e, t) {
                    if (e.resources) return (0, s.default)(!0, p, e), this.register_lng(e, t);
                    for (var n in e) {
                      if (n.indexOf("_") > -1 && e[n].locale_data)
                        for (var a in e[n].locale_data.messages)
                          "" == e[n].locale_data.messages[a][0] && delete e[n].locale_data.messages[a];
                      e[n.toLowerCase()] = e[n];
                    }
                    (0, s.default)(!0, p, e), (h = e);
                  }
                },
                {
                  key: "register_lng",
                  value: function (e, t) {
                    (0, s.default)(!0, p, e), (f = e);
                  }
                },
                {
                  key: "nls",
                  value: function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                    var r = n && n[0];
                    try {
                      return D(0, v.apply(null, [e, r].concat(n)), r);
                    } catch (e) {
                      throw e;
                    }
                  }
                },
                {
                  key: "nlsc",
                  value: function (e, t) {
                    try {
                      for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
                      return D(0, v.apply(null, [e, t].concat(a)), t);
                    } catch (e) {
                      throw e;
                    }
                  }
                },
                {
                  key: "nlsRaw",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
                    t = t.toLowerCase();
                    var n = e + "" + M[e],
                      a = t.split("_")[0];
                    if (p.resources) {
                      if (r(t, e)) return [p.resources[t].translation[e]];
                      if (r(a, e)) return [p.resources[a].translation[e]];
                    } else {
                      if (r(t, n)) return p[t].locale_data.messages[n];
                      if (r(a, n)) return p[a].locale_data.messages[n];
                    }
                    return null;
                    function r(e, t) {
                      return p.resources
                        ? p.resources &&
                            p.resources[e] &&
                            p.resources[e].translation &&
                            p.resources[e].translation[t] &&
                            "" !== p.resources[e].translation[t]
                        : !(!p[e] || !p[e].locale_data.messages[t]) &&
                            p[e].locale_data.messages[t].some(function (e) {
                              return null != e && "" !== e;
                            });
                    }
                  }
                },
                {
                  key: "escapeHtml",
                  value: function (e) {
                    return Y(e + "");
                  }
                },
                {
                  key: "ellipsis",
                  value: function () {
                    return k.apply(null, arguments);
                  }
                },
                {
                  key: "TRANSLATE",
                  get: function () {
                    return m.debuggerTRANSLATE;
                  },
                  set: function (e) {
                    m.debuggerTRANSLATE = e;
                  }
                },
                {
                  key: "locale",
                  get: function () {
                    return y;
                  },
                  set: function (e) {
                    var t,
                      n,
                      a = e.replace("-", "_"),
                      r = a.split("_")[0],
                      _ = a.split("_")[1],
                      l = r + (_ ? "_" + _.toUpperCase() : ""),
                      c = void 0;
                    if ((L != a || y != r) && null != r) {
                      i.default.locale(e), (L = a), (y = r);
                      f.resources &&
                        ((e = (function (e) {
                          var t = e;
                          if (f.resources[e]) return e;
                          if ((/-/.test(e) ? (e = e.replace("-", "_")) : /_/.test(e) && (e = e.replace("_", "-")), f.resources[e]))
                            return e;
                          var n = e.split(/[-_]/);
                          return (
                            (e = [n[0], n[1].toUpperCase()].join("_")),
                            f.resources[e] ? e : ((e = e.replace("_", "-")), f.resources[e] ? e : ((e = n[0]), f.resources[e] ? e : t))
                          );
                        })(e)),
                        d.default.use(u.default).init({ resources: f.resources, lng: e, keySeparator: !1, fallbackLng: "en" })),
                        (n = {
                          domain: "messages",
                          locale_data: { messages: { "": { domain: "messages", plural_forms: void 0, lang: y } } }
                        }),
                        (h[l] = (0, s.default)(!0, {}, n, h.en, h[y], h[y + "_" + y.toUpperCase()], h[l])),
                        (t = h[l]),
                        h.en &&
                          h.en.locale_data &&
                          h.en.locale_data.messages &&
                          Object.keys(h.en.locale_data.messages).forEach(function (e) {
                            e && ((c = e.split("")), (M[c[0]] = c[1]));
                          }),
                        (g = new o.default({ domain: t.domain, missing_key_callback: function (e) {}, locale_data: t.locale_data }));
                    }
                  }
                }
              ]),
              e
            );
          })(),
          T = (m._NITRO_LOCALIZATION = m._NITRO_LOCALIZATION ? m._NITRO_LOCALIZATION : new w());
        (t.hd = T.nls), T.nlsc, T.escapeHtml, T.ellipsis;
      },
      4470: (e) => {
        "use strict";
        var t = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString,
          a = function (e) {
            return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e);
          },
          r = function (e) {
            if (!e || "[object Object]" !== n.call(e)) return !1;
            var a,
              r = t.call(e, "constructor"),
              s = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !r && !s) return !1;
            for (a in e);
            return void 0 === a || t.call(e, a);
          };
        e.exports = function e() {
          var t,
            n,
            s,
            i,
            o,
            d,
            u = arguments[0],
            _ = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof u
              ? ((c = u), (u = arguments[1] || {}), (_ = 2))
              : (("object" != typeof u && "function" != typeof u) || null == u) && (u = {});
            _ < l;
            ++_
          )
            if (null != (t = arguments[_]))
              for (n in t)
                (s = u[n]),
                  u !== (i = t[n]) &&
                    (c && i && (r(i) || (o = a(i)))
                      ? (o ? ((o = !1), (d = s && a(s) ? s : [])) : (d = s && r(s) ? s : {}), (u[n] = e(c, d, i)))
                      : void 0 !== i && (u[n] = i));
          return u;
        };
      },
      7794: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            changeLanguage: () => de,
            cloneInstance: () => ue,
            createInstance: () => _e,
            default: () => oe,
            dir: () => le,
            exists: () => ce,
            getFixedT: () => me,
            init: () => he,
            loadLanguages: () => fe,
            loadNamespaces: () => pe,
            loadResources: () => Me,
            off: () => ye,
            on: () => Le,
            setDefaultNamespace: () => ge,
            t: () => Ye,
            use: () => ke
          });
        var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          };
        function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var s = {
          type: "logger",
          log: function (e) {
            this.output("log", e);
          },
          warn: function (e) {
            this.output("warn", e);
          },
          error: function (e) {
            this.output("error", e);
          },
          output: function (e, t) {
            var n;
            console &&
              console[e] &&
              (n = console)[e].apply(
                n,
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                  }
                  return Array.from(e);
                })(t)
              );
          }
        };
        const i = new ((function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            r(this, e), this.init(t, n);
          }
          return (
            (e.prototype.init = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (this.prefix = t.prefix || "i18next:"), (this.logger = e || s), (this.options = t), (this.debug = t.debug);
            }),
            (e.prototype.setDebug = function (e) {
              this.debug = e;
            }),
            (e.prototype.log = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return this.forward(t, "log", "", !0);
            }),
            (e.prototype.warn = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return this.forward(t, "warn", "", !0);
            }),
            (e.prototype.error = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return this.forward(t, "error", "");
            }),
            (e.prototype.deprecate = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
            }),
            (e.prototype.forward = function (e, t, n, a) {
              return a && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "" + n + this.prefix + " " + e[0]), this.logger[t](e));
            }),
            (e.prototype.create = function (t) {
              return new e(this.logger, a({ prefix: this.prefix + ":" + t + ":" }, this.options));
            }),
            e
          );
        })())();
        const o = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.observers = {});
          }
          return (
            (e.prototype.on = function (e, t) {
              var n = this;
              e.split(" ").forEach(function (e) {
                (n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
              });
            }),
            (e.prototype.off = function (e, t) {
              var n = this;
              this.observers[e] &&
                this.observers[e].forEach(function () {
                  if (t) {
                    var a = n.observers[e].indexOf(t);
                    a > -1 && n.observers[e].splice(a, 1);
                  } else delete n.observers[e];
                });
            }),
            (e.prototype.emit = function (e) {
              for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
              if (this.observers[e]) {
                var r = [].concat(this.observers[e]);
                r.forEach(function (e) {
                  e.apply(void 0, n);
                });
              }
              if (this.observers["*"]) {
                var s = [].concat(this.observers["*"]);
                s.forEach(function (t) {
                  var a;
                  t.apply(t, (a = [e]).concat.apply(a, n));
                });
              }
            }),
            e
          );
        })();
        function d(e) {
          return null == e ? "" : "" + e;
        }
        function u(e, t, n) {
          e.forEach(function (e) {
            t[e] && (n[e] = t[e]);
          });
        }
        function _(e, t, n) {
          function a(e) {
            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
          }
          function r() {
            return !e || "string" == typeof e;
          }
          for (var s = "string" != typeof t ? [].concat(t) : t.split("."); s.length > 1; ) {
            if (r()) return {};
            var i = a(s.shift());
            !e[i] && n && (e[i] = new n()), (e = e[i]);
          }
          return r() ? {} : { obj: e, k: a(s.shift()) };
        }
        function l(e, t, n) {
          var a = _(e, t, Object);
          a.obj[a.k] = n;
        }
        function c(e, t) {
          var n = _(e, t),
            a = n.obj,
            r = n.k;
          if (a) return a[r];
        }
        function m(e, t, n) {
          for (var a in t)
            a in e
              ? "string" == typeof e[a] || e[a] instanceof String || "string" == typeof t[a] || t[a] instanceof String
                ? n && (e[a] = t[a])
                : m(e[a], t[a], n)
              : (e[a] = t[a]);
          return e;
        }
        function h(e) {
          return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
        function p(e) {
          return "string" == typeof e
            ? e.replace(/[&<>"'\/]/g, function (e) {
                return f[e];
              })
            : e;
        }
        var M =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          };
        function y(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function L(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function g(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) {
                      var r = n[a],
                        s = Object.getOwnPropertyDescriptor(t, r);
                      s && s.configurable && void 0 === e[r] && Object.defineProperty(e, r, s);
                    }
                  })(e, t));
        }
        const Y = (function (e) {
            function t() {
              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
              y(this, t);
              var r = L(this, e.call(this));
              return (r.data = n), (r.options = a), r;
            }
            return (
              g(t, e),
              (t.prototype.addNamespaces = function (e) {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
              }),
              (t.prototype.removeNamespaces = function (e) {
                var t = this.options.ns.indexOf(e);
                t > -1 && this.options.ns.splice(t, 1);
              }),
              (t.prototype.getResource = function (e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                  r = a.keySeparator || this.options.keySeparator;
                void 0 === r && (r = ".");
                var s = [e, t];
                return (
                  n && "string" != typeof n && (s = s.concat(n)),
                  n && "string" == typeof n && (s = s.concat(r ? n.split(r) : n)),
                  e.indexOf(".") > -1 && (s = e.split(".")),
                  c(this.data, s)
                );
              }),
              (t.prototype.addResource = function (e, t, n, a) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                  s = this.options.keySeparator;
                void 0 === s && (s = ".");
                var i = [e, t];
                n && (i = i.concat(s ? n.split(s) : n)),
                  e.indexOf(".") > -1 && ((a = t), (t = (i = e.split("."))[1])),
                  this.addNamespaces(t),
                  l(this.data, i, a),
                  r.silent || this.emit("added", e, t, n, a);
              }),
              (t.prototype.addResources = function (e, t, n) {
                for (var a in n) "string" == typeof n[a] && this.addResource(e, t, a, n[a], { silent: !0 });
                this.emit("added", e, t, n);
              }),
              (t.prototype.addResourceBundle = function (e, t, n, a, r) {
                var s = [e, t];
                e.indexOf(".") > -1 && ((a = n), (n = t), (t = (s = e.split("."))[1])), this.addNamespaces(t);
                var i = c(this.data, s) || {};
                a ? m(i, n, r) : (i = M({}, i, n)), l(this.data, s, i), this.emit("added", e, t, n);
              }),
              (t.prototype.removeResourceBundle = function (e, t) {
                this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
              }),
              (t.prototype.hasResourceBundle = function (e, t) {
                return void 0 !== this.getResource(e, t);
              }),
              (t.prototype.getResourceBundle = function (e, t) {
                return (
                  t || (t = this.options.defaultNS),
                  "v1" === this.options.compatibilityAPI ? M({}, this.getResource(e, t)) : this.getResource(e, t)
                );
              }),
              (t.prototype.toJSON = function () {
                return this.data;
              }),
              t
            );
          })(o),
          k = {
            processors: {},
            addPostProcessor: function (e) {
              this.processors[e.name] = e;
            },
            handle: function (e, t, n, a, r) {
              var s = this;
              return (
                e.forEach(function (e) {
                  s.processors[e] && (t = s.processors[e].process(t, n, a, r));
                }),
                t
              );
            }
          };
        function v(e) {
          return (
            (e.interpolation = { unescapeSuffix: "HTML" }),
            (e.interpolation.prefix = e.interpolationPrefix || "__"),
            (e.interpolation.suffix = e.interpolationSuffix || "__"),
            (e.interpolation.escapeValue = e.escapeInterpolation || !1),
            (e.interpolation.nestingPrefix = e.reusePrefix || "$t("),
            (e.interpolation.nestingSuffix = e.reuseSuffix || ")"),
            e
          );
        }
        function D(e) {
          return (
            (e.interpolationPrefix || e.interpolationSuffix || void 0 !== e.escapeInterpolation) && (e = v(e)),
            (e.nsSeparator = e.nsseparator),
            (e.keySeparator = e.keyseparator),
            (e.returnObjects = e.returnObjectTrees),
            e
          );
        }
        var b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            },
          w =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
        function T(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function S(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function j(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) {
                      var r = n[a],
                        s = Object.getOwnPropertyDescriptor(t, r);
                      s && s.configurable && void 0 === e[r] && Object.defineProperty(e, r, s);
                    }
                  })(e, t));
        }
        const x = (function (e) {
          function t(n) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            T(this, t);
            var r = S(this, e.call(this));
            return (
              u(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, r),
              (r.options = a),
              (r.logger = i.create("translator")),
              r
            );
          }
          return (
            j(t, e),
            (t.prototype.changeLanguage = function (e) {
              e && (this.language = e);
            }),
            (t.prototype.exists = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} };
              return "v1" === this.options.compatibilityAPI && (t = D(t)), void 0 !== this.resolve(e, t);
            }),
            (t.prototype.extractFromKey = function (e, t) {
              var n = t.nsSeparator || this.options.nsSeparator;
              void 0 === n && (n = ":");
              var a = t.keySeparator || this.options.keySeparator || ".",
                r = t.ns || this.options.defaultNS;
              if (n && e.indexOf(n) > -1) {
                var s = e.split(n);
                (n !== a || (n === a && this.options.ns.indexOf(s[0]) > -1)) && (r = s.shift()), (e = s.join(a));
              }
              return "string" == typeof r && (r = [r]), { key: e, namespaces: r };
            }),
            (t.prototype.translate = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (
                ("object" !== (void 0 === t ? "undefined" : w(t))
                  ? (t = this.options.overloadTranslationOptionHandler(arguments))
                  : "v1" === this.options.compatibilityAPI && (t = D(t)),
                null == e || "" === e)
              )
                return "";
              "number" == typeof e && (e = String(e)), "string" == typeof e && (e = [e]);
              var n = t.keySeparator || this.options.keySeparator || ".",
                a = this.extractFromKey(e[e.length - 1], t),
                r = a.key,
                s = a.namespaces,
                i = s[s.length - 1],
                o = t.lng || this.language,
                d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (o && "cimode" === o.toLowerCase()) {
                if (d) {
                  var u = t.nsSeparator || this.options.nsSeparator;
                  return i + u + r;
                }
                return r;
              }
              var _ = this.resolve(e, t),
                l = Object.prototype.toString.apply(_),
                c = ["[object Number]", "[object Function]", "[object RegExp]"],
                m = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays;
              if (_ && "string" != typeof _ && c.indexOf(l) < 0 && (!m || "[object Array]" !== l)) {
                if (!t.returnObjects && !this.options.returnObjects)
                  return (
                    this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                    this.options.returnedObjectHandler
                      ? this.options.returnedObjectHandler(r, _, t)
                      : "key '" + r + " (" + this.language + ")' returned an object instead of string."
                  );
                if (t.keySeparator || this.options.keySeparator) {
                  var h = "[object Array]" === l ? [] : {};
                  for (var f in _)
                    Object.prototype.hasOwnProperty.call(_, f) &&
                      (h[f] = this.translate("" + r + n + f, b({}, t, { joinArrays: !1, ns: s })));
                  _ = h;
                }
              } else if (m && "[object Array]" === l) (_ = _.join(m)) && (_ = this.extendTranslation(_, r, t));
              else {
                var p = !1,
                  M = !1;
                if (
                  (this.isValidLookup(_) || void 0 === t.defaultValue || ((p = !0), (_ = t.defaultValue)),
                  this.isValidLookup(_) || ((M = !0), (_ = r)),
                  M || p)
                ) {
                  this.logger.log("missingKey", o, i, r, _);
                  var y = [],
                    L = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                  if ("fallback" === this.options.saveMissingTo && L && L[0]) for (var g = 0; g < L.length; g++) y.push(L[g]);
                  else
                    "all" === this.options.saveMissingTo
                      ? (y = this.languageUtils.toResolveHierarchy(t.lng || this.language))
                      : y.push(t.lng || this.language);
                  this.options.saveMissing &&
                    (this.options.missingKeyHandler
                      ? this.options.missingKeyHandler(y, i, r, _)
                      : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(y, i, r, _)),
                    this.emit("missingKey", y, i, r, _);
                }
                (_ = this.extendTranslation(_, r, t)),
                  M && _ === r && this.options.appendNamespaceToMissingKey && (_ = i + ":" + r),
                  M && this.options.parseMissingKeyHandler && (_ = this.options.parseMissingKeyHandler(_));
              }
              return _;
            }),
            (t.prototype.extendTranslation = function (e, t, n) {
              var a = this;
              n.interpolation && this.interpolator.init(b({}, n, { interpolation: b({}, this.options.interpolation, n.interpolation) }));
              var r = n.replace && "string" != typeof n.replace ? n.replace : n;
              this.options.interpolation.defaultVariables && (r = b({}, this.options.interpolation.defaultVariables, r)),
                (e = this.interpolator.interpolate(e, r, n.lng || this.language)),
                !1 !== n.nest &&
                  (e = this.interpolator.nest(
                    e,
                    function () {
                      return a.translate.apply(a, arguments);
                    },
                    n
                  )),
                n.interpolation && this.interpolator.reset();
              var s = n.postProcess || this.options.postProcess,
                i = "string" == typeof s ? [s] : s;
              return void 0 !== e && i && i.length && !1 !== n.applyPostProcessor && (e = k.handle(i, e, t, n, this)), e;
            }),
            (t.prototype.resolve = function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = void 0;
              return (
                "string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                  if (!t.isValidLookup(a)) {
                    var r = t.extractFromKey(e, n),
                      s = r.key,
                      i = r.namespaces;
                    t.options.fallbackNS && (i = i.concat(t.options.fallbackNS));
                    var o = void 0 !== n.count && "string" != typeof n.count,
                      d = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                      u = n.lngs ? n.lngs : t.languageUtils.toResolveHierarchy(n.lng || t.language);
                    i.forEach(function (e) {
                      t.isValidLookup(a) ||
                        u.forEach(function (r) {
                          if (!t.isValidLookup(a)) {
                            var i = s,
                              u = [i],
                              _ = void 0;
                            o && (_ = t.pluralResolver.getSuffix(r, n.count)),
                              o && d && u.push(i + _),
                              d && u.push((i += "" + t.options.contextSeparator + n.context)),
                              o && u.push((i += _));
                            for (var l = void 0; (l = u.pop()); ) t.isValidLookup(a) || (a = t.getResource(r, e, l, n));
                          }
                        });
                    });
                  }
                }),
                a
              );
            }),
            (t.prototype.isValidLookup = function (e) {
              return !(void 0 === e || (!this.options.returnNull && null === e) || (!this.options.returnEmptyString && "" === e));
            }),
            (t.prototype.getResource = function (e, t, n) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return this.resourceStore.getResource(e, t, n, a);
            }),
            t
          );
        })(o);
        function H(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        const P = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.options = t),
              (this.whitelist = this.options.whitelist || !1),
              (this.logger = i.create("languageUtils"));
          }
          return (
            (e.prototype.getScriptPartFromCode = function (e) {
              if (!e || e.indexOf("-") < 0) return null;
              var t = e.split("-");
              return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-")));
            }),
            (e.prototype.getLanguagePartFromCode = function (e) {
              if (!e || e.indexOf("-") < 0) return e;
              var t = e.split("-");
              return this.formatLanguageCode(t[0]);
            }),
            (e.prototype.formatLanguageCode = function (e) {
              if ("string" == typeof e && e.indexOf("-") > -1) {
                var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                  n = e.split("-");
                return (
                  this.options.lowerCaseLng
                    ? (n = n.map(function (e) {
                        return e.toLowerCase();
                      }))
                    : 2 === n.length
                    ? ((n[0] = n[0].toLowerCase()),
                      (n[1] = n[1].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = H(n[1].toLowerCase())))
                    : 3 === n.length &&
                      ((n[0] = n[0].toLowerCase()),
                      2 === n[1].length && (n[1] = n[1].toUpperCase()),
                      "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = H(n[1].toLowerCase())),
                      t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = H(n[2].toLowerCase()))),
                  n.join("-")
                );
              }
              return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
            }),
            (e.prototype.isWhitelisted = function (e) {
              return (
                ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)),
                !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
              );
            }),
            (e.prototype.getFallbackCodes = function (e, t) {
              if (!e) return [];
              if (("string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e))) return e;
              if (!t) return e.default || [];
              var n = e[t];
              return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e.default), n || [];
            }),
            (e.prototype.toResolveHierarchy = function (e, t) {
              var n = this,
                a = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                r = [],
                s = function (e) {
                  e && (n.isWhitelisted(e) ? r.push(e) : n.logger.warn("rejecting non-whitelisted language code: " + e));
                };
              return (
                "string" == typeof e && e.indexOf("-") > -1
                  ? ("languageOnly" !== this.options.load && s(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && s(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && s(this.getLanguagePartFromCode(e)))
                  : "string" == typeof e && s(this.formatLanguageCode(e)),
                a.forEach(function (e) {
                  r.indexOf(e) < 0 && s(n.formatLanguageCode(e));
                }),
                r
              );
            }),
            e
          );
        })();
        function O(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var A = [
            {
              lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"],
              nr: [1, 2],
              fc: 1
            },
            {
              lngs: [
                "af",
                "an",
                "ast",
                "az",
                "bg",
                "bn",
                "ca",
                "da",
                "de",
                "dev",
                "el",
                "en",
                "eo",
                "es",
                "es_ar",
                "et",
                "eu",
                "fi",
                "fo",
                "fur",
                "fy",
                "gl",
                "gu",
                "ha",
                "he",
                "hi",
                "hu",
                "hy",
                "ia",
                "it",
                "kn",
                "ku",
                "lb",
                "mai",
                "ml",
                "mn",
                "mr",
                "nah",
                "nap",
                "nb",
                "ne",
                "nl",
                "nn",
                "no",
                "nso",
                "pa",
                "pap",
                "pms",
                "ps",
                "pt",
                "pt_br",
                "rm",
                "sco",
                "se",
                "si",
                "so",
                "son",
                "sq",
                "sv",
                "sw",
                "ta",
                "te",
                "tk",
                "ur",
                "yo"
              ],
              nr: [1, 2],
              fc: 2
            },
            {
              lngs: [
                "ay",
                "bo",
                "cgg",
                "fa",
                "id",
                "ja",
                "jbo",
                "ka",
                "kk",
                "km",
                "ko",
                "ky",
                "lo",
                "ms",
                "sah",
                "su",
                "th",
                "tt",
                "ug",
                "vi",
                "wo",
                "zh"
              ],
              nr: [1],
              fc: 3
            },
            { lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 },
            { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
            { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
            { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
            { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
            { lngs: ["fr"], nr: [1, 2], fc: 9 },
            { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
            { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
            { lngs: ["is"], nr: [1, 2], fc: 12 },
            { lngs: ["jv"], nr: [0, 1], fc: 13 },
            { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
            { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
            { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
            { lngs: ["mk"], nr: [1, 2], fc: 17 },
            { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
            { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
            { lngs: ["or"], nr: [2, 1], fc: 2 },
            { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
            { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }
          ],
          E = {
            1: function (e) {
              return Number(e > 1);
            },
            2: function (e) {
              return Number(1 != e);
            },
            3: function (e) {
              return 0;
            },
            4: function (e) {
              return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
            },
            5: function (e) {
              return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
            },
            6: function (e) {
              return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
            },
            7: function (e) {
              return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
            },
            8: function (e) {
              return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
            },
            9: function (e) {
              return Number(e >= 2);
            },
            10: function (e) {
              return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
            },
            11: function (e) {
              return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
            },
            12: function (e) {
              return Number(e % 10 != 1 || e % 100 == 11);
            },
            13: function (e) {
              return Number(0 !== e);
            },
            14: function (e) {
              return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
            },
            15: function (e) {
              return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
            },
            16: function (e) {
              return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
            },
            17: function (e) {
              return Number(1 == e || e % 10 == 1 ? 0 : 1);
            },
            18: function (e) {
              return Number(0 == e ? 0 : 1 == e ? 1 : 2);
            },
            19: function (e) {
              return Number(1 == e ? 0 : 0 === e || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
            },
            20: function (e) {
              return Number(1 == e ? 0 : 0 === e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
            },
            21: function (e) {
              return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
            }
          };
        function F() {
          var e = {};
          return (
            A.forEach(function (t) {
              t.lngs.forEach(function (n) {
                e[n] = { numbers: t.nr, plurals: E[t.fc] };
              });
            }),
            e
          );
        }
        const W = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            O(this, e), (this.languageUtils = t), (this.options = n), (this.logger = i.create("pluralResolver")), (this.rules = F());
          }
          return (
            (e.prototype.addRule = function (e, t) {
              this.rules[e] = t;
            }),
            (e.prototype.getRule = function (e) {
              return this.rules[this.languageUtils.getLanguagePartFromCode(e)];
            }),
            (e.prototype.needsPlural = function (e) {
              var t = this.getRule(e);
              return t && t.numbers.length > 1;
            }),
            (e.prototype.getSuffix = function (e, t) {
              var n = this,
                a = this.getRule(e);
              if (a) {
                if (1 === a.numbers.length) return "";
                var r = a.noAbs ? a.plurals(t) : a.plurals(Math.abs(t)),
                  s = a.numbers[r];
                this.options.simplifyPluralSuffix &&
                  2 === a.numbers.length &&
                  1 === a.numbers[0] &&
                  (2 === s ? (s = "plural") : 1 === s && (s = ""));
                var i = function () {
                  return n.options.prepend && s.toString() ? n.options.prepend + s.toString() : s.toString();
                };
                return "v1" === this.options.compatibilityJSON
                  ? 1 === s
                    ? ""
                    : "number" == typeof s
                    ? "_plural_" + s.toString()
                    : i()
                  : "v2" === this.options.compatibilityJSON ||
                    (2 === a.numbers.length && 1 === a.numbers[0]) ||
                    (2 === a.numbers.length && 1 === a.numbers[0])
                  ? i()
                  : this.options.prepend && r.toString()
                  ? this.options.prepend + r.toString()
                  : r.toString();
              }
              return this.logger.warn("no plural rule found for: " + e), "";
            }),
            e
          );
        })();
        var N =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          };
        function C(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        const z = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            C(this, e), (this.logger = i.create("interpolator")), this.init(t, !0);
          }
          return (
            (e.prototype.init = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
              t &&
                ((this.options = e),
                (this.format =
                  (e.interpolation && e.interpolation.format) ||
                  function (e) {
                    return e;
                  }),
                (this.escape = (e.interpolation && e.interpolation.escape) || p)),
                e.interpolation || (e.interpolation = { escapeValue: !0 });
              var n = e.interpolation;
              (this.escapeValue = void 0 === n.escapeValue || n.escapeValue),
                (this.prefix = n.prefix ? h(n.prefix) : n.prefixEscaped || "{{"),
                (this.suffix = n.suffix ? h(n.suffix) : n.suffixEscaped || "}}"),
                (this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","),
                (this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-"),
                (this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || ""),
                (this.nestingPrefix = n.nestingPrefix ? h(n.nestingPrefix) : n.nestingPrefixEscaped || h("$t(")),
                (this.nestingSuffix = n.nestingSuffix ? h(n.nestingSuffix) : n.nestingSuffixEscaped || h(")")),
                this.resetRegExp();
            }),
            (e.prototype.reset = function () {
              this.options && this.init(this.options);
            }),
            (e.prototype.resetRegExp = function () {
              var e = this.prefix + "(.+?)" + this.suffix;
              this.regexp = new RegExp(e, "g");
              var t = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
              this.regexpUnescape = new RegExp(t, "g");
              var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
              this.nestingRegexp = new RegExp(n, "g");
            }),
            (e.prototype.interpolate = function (e, t, n) {
              var a = this,
                r = void 0,
                s = void 0;
              function i(e) {
                return e.replace(/\$/g, "$$$$");
              }
              var o = function (e) {
                if (e.indexOf(a.formatSeparator) < 0) return c(t, e);
                var r = e.split(a.formatSeparator),
                  s = r.shift().trim(),
                  i = r.join(a.formatSeparator).trim();
                return a.format(c(t, s), i, n);
              };
              for (this.resetRegExp(); (r = this.regexpUnescape.exec(e)); )
                (s = o(r[1].trim())), (e = e.replace(r[0], s)), (this.regexpUnescape.lastIndex = 0);
              for (; (r = this.regexp.exec(e)); )
                "string" != typeof (s = o(r[1].trim())) && (s = d(s)),
                  s || (this.logger.warn("missed to pass in variable " + r[1] + " for interpolating " + e), (s = "")),
                  (s = this.escapeValue ? i(this.escape(s)) : i(s)),
                  (e = e.replace(r[0], s)),
                  (this.regexp.lastIndex = 0);
              return e;
            }),
            (e.prototype.nest = function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = void 0,
                r = void 0,
                s = N({}, n);
              function i(e) {
                if (e.indexOf(",") < 0) return e;
                var t = e.split(",");
                e = t.shift();
                var n = t.join(",");
                n = (n = this.interpolate(n, s)).replace(/'/g, '"');
                try {
                  s = JSON.parse(n);
                } catch (t) {
                  this.logger.error("failed parsing options string in nesting for key " + e, t);
                }
                return e;
              }
              for (s.applyPostProcessor = !1; (a = this.nestingRegexp.exec(e)); ) {
                if ((r = t(i.call(this, a[1].trim()), s)) && a[0] === e && "string" != typeof r) return r;
                "string" != typeof r && (r = d(r)),
                  r || (this.logger.warn("missed to resolve " + a[1] + " for nesting " + e), (r = "")),
                  (e = e.replace(a[0], r)),
                  (this.regexp.lastIndex = 0);
              }
              return e;
            }),
            e
          );
        })();
        var R =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            },
          J = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function (e, t) {
                var n = [],
                  a = !0,
                  r = !1,
                  s = void 0;
                try {
                  for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                } catch (e) {
                  (r = !0), (s = e);
                } finally {
                  try {
                    !a && o.return && o.return();
                  } finally {
                    if (r) throw s;
                  }
                }
                return n;
              })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        function I(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function U(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function G(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) {
                      var r = n[a],
                        s = Object.getOwnPropertyDescriptor(t, r);
                      s && s.configurable && void 0 === e[r] && Object.defineProperty(e, r, s);
                    }
                  })(e, t));
        }
        const V = (function (e) {
          function t(n, a, r) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            I(this, t);
            var o = U(this, e.call(this));
            return (
              (o.backend = n),
              (o.store = a),
              (o.services = r),
              (o.options = s),
              (o.logger = i.create("backendConnector")),
              (o.state = {}),
              (o.queue = []),
              o.backend && o.backend.init && o.backend.init(r, s.backend, s),
              o
            );
          }
          return (
            G(t, e),
            (t.prototype.queueLoad = function (e, t, n) {
              var a = this,
                r = [],
                s = [],
                i = [],
                o = [];
              return (
                e.forEach(function (e) {
                  var n = !0;
                  t.forEach(function (t) {
                    var i = e + "|" + t;
                    a.store.hasResourceBundle(e, t)
                      ? (a.state[i] = 2)
                      : a.state[i] < 0 ||
                        (1 === a.state[i]
                          ? s.indexOf(i) < 0 && s.push(i)
                          : ((a.state[i] = 1),
                            (n = !1),
                            s.indexOf(i) < 0 && s.push(i),
                            r.indexOf(i) < 0 && r.push(i),
                            o.indexOf(t) < 0 && o.push(t)));
                  }),
                    n || i.push(e);
                }),
                (r.length || s.length) && this.queue.push({ pending: s, loaded: {}, errors: [], callback: n }),
                { toLoad: r, pending: s, toLoadLanguages: i, toLoadNamespaces: o }
              );
            }),
            (t.prototype.loaded = function (e, t, n) {
              var a = this,
                r = e.split("|"),
                s = J(r, 2),
                i = s[0],
                o = s[1];
              t && this.emit("failedLoading", i, o, t),
                n && this.store.addResourceBundle(i, o, n),
                (this.state[e] = t ? -1 : 2),
                this.queue.forEach(function (n) {
                  var r, s, d, u, l, c;
                  (r = n.loaded),
                    (s = o),
                    (u = _(r, [i], Object)),
                    (l = u.obj),
                    (c = u.k),
                    (l[c] = l[c] || []),
                    d && (l[c] = l[c].concat(s)),
                    d || l[c].push(s),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; ) e.splice(n, 1), (n = e.indexOf(t));
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (a.emit("loaded", n.loaded), (n.done = !0), n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                (this.queue = this.queue.filter(function (e) {
                  return !e.done;
                }));
            }),
            (t.prototype.read = function (e, t, n) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                r = this,
                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                i = arguments[5];
              return e.length
                ? this.backend[n](e, t, function (o, d) {
                    o && d && a < 5
                      ? setTimeout(function () {
                          r.read.call(r, e, t, n, a + 1, 2 * s, i);
                        }, s)
                      : i(o, d);
                  })
                : i(null, {});
            }),
            (t.prototype.load = function (e, t, n) {
              var a = this;
              if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
              var r = R({}, this.backend.options, this.options.backend);
              "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
              var s = this.queueLoad(e, t, n);
              if (!s.toLoad.length) return s.pending.length || n(), null;
              r.allowMultiLoading && this.backend.readMulti
                ? this.read(s.toLoadLanguages, s.toLoadNamespaces, "readMulti", null, null, function (e, t) {
                    e &&
                      a.logger.warn(
                        "loading namespaces " +
                          s.toLoadNamespaces.join(", ") +
                          " for languages " +
                          s.toLoadLanguages.join(", ") +
                          " via multiloading failed",
                        e
                      ),
                      !e &&
                        t &&
                        a.logger.log(
                          "successfully loaded namespaces " +
                            s.toLoadNamespaces.join(", ") +
                            " for languages " +
                            s.toLoadLanguages.join(", ") +
                            " via multiloading",
                          t
                        ),
                      s.toLoad.forEach(function (n) {
                        var r = n.split("|"),
                          s = J(r, 2),
                          i = s[0],
                          o = s[1],
                          d = c(t, [i, o]);
                        if (d) a.loaded(n, e, d);
                        else {
                          var u = "loading namespace " + o + " for language " + i + " via multiloading failed";
                          a.loaded(n, u), a.logger.error(u);
                        }
                      });
                  })
                : s.toLoad.forEach(function (e) {
                    a.loadOne(e);
                  });
            }),
            (t.prototype.reload = function (e, t) {
              var n = this;
              this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
              var a = R({}, this.backend.options, this.options.backend);
              "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)),
                "string" == typeof t && (t = [t]),
                a.allowMultiLoading && this.backend.readMulti
                  ? this.read(e, t, "readMulti", null, null, function (a, r) {
                      a &&
                        n.logger.warn(
                          "reloading namespaces " + t.join(", ") + " for languages " + e.join(", ") + " via multiloading failed",
                          a
                        ),
                        !a &&
                          r &&
                          n.logger.log(
                            "successfully reloaded namespaces " + t.join(", ") + " for languages " + e.join(", ") + " via multiloading",
                            r
                          ),
                        e.forEach(function (e) {
                          t.forEach(function (t) {
                            var s = c(r, [e, t]);
                            if (s) n.loaded(e + "|" + t, a, s);
                            else {
                              var i = "reloading namespace " + t + " for language " + e + " via multiloading failed";
                              n.loaded(e + "|" + t, i), n.logger.error(i);
                            }
                          });
                        });
                    })
                  : e.forEach(function (e) {
                      t.forEach(function (t) {
                        n.loadOne(e + "|" + t, "re");
                      });
                    });
            }),
            (t.prototype.loadOne = function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = e.split("|"),
                r = J(a, 2),
                s = r[0],
                i = r[1];
              this.read(s, i, "read", null, null, function (a, r) {
                a && t.logger.warn(n + "loading namespace " + i + " for language " + s + " failed", a),
                  !a && r && t.logger.log(n + "loaded namespace " + i + " for language " + s, r),
                  t.loaded(e, a, r);
              });
            }),
            (t.prototype.saveMissing = function (e, t, n, a) {
              this.backend && this.backend.create && this.backend.create(e, t, n, a), e && e[0] && this.store.addResource(e[0], t, n, a);
            }),
            t
          );
        })(o);
        var $ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          };
        function q(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function B(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function K(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) {
                      var r = n[a],
                        s = Object.getOwnPropertyDescriptor(t, r);
                      s && s.configurable && void 0 === e[r] && Object.defineProperty(e, r, s);
                    }
                  })(e, t));
        }
        var Z = (function (e) {
          function t(n, a, r) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            q(this, t);
            var o = B(this, e.call(this));
            return (
              (o.cache = n),
              (o.store = a),
              (o.services = r),
              (o.options = s),
              (o.logger = i.create("cacheConnector")),
              o.cache && o.cache.init && o.cache.init(r, s.cache, s),
              o
            );
          }
          return (
            K(t, e),
            (t.prototype.load = function (e, t, n) {
              var a = this;
              if (!this.cache) return n && n();
              var r = $({}, this.cache.options, this.options.cache),
                s = "string" == typeof e ? this.services.languageUtils.toResolveHierarchy(e) : e;
              r.enabled
                ? this.cache.load(s, function (e, t) {
                    if ((e && a.logger.error("loading languages " + s.join(", ") + " from cache failed", e), t))
                      for (var r in t)
                        if (Object.prototype.hasOwnProperty.call(t, r))
                          for (var i in t[r])
                            if (Object.prototype.hasOwnProperty.call(t[r], i) && "i18nStamp" !== i) {
                              var o = t[r][i];
                              o && a.store.addResourceBundle(r, i, o);
                            }
                    n && n();
                  })
                : n && n();
            }),
            (t.prototype.save = function () {
              this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data);
            }),
            t
          );
        })(o);
        const Q = Z;
        function X(e) {
          return (
            "string" == typeof e.ns && (e.ns = [e.ns]),
            "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.whitelist && e.whitelist.indexOf("cimode") < 0 && e.whitelist.push("cimode"),
            e
          );
        }
        var ee =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          };
        function te(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function ne(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function ae(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), a = 0; a < n.length; a++) {
                      var r = n[a],
                        s = Object.getOwnPropertyDescriptor(t, r);
                      s && s.configurable && void 0 === e[r] && Object.defineProperty(e, r, s);
                    }
                  })(e, t));
        }
        function re() {}
        var se = (function (e) {
          function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              a = arguments[1];
            te(this, t);
            var r = ne(this, e.call(this));
            if (
              ((r.options = X(n)), (r.services = {}), (r.logger = i), (r.modules = { external: [] }), a && !r.isInitialized && !n.isClone)
            ) {
              var s;
              if (!r.options.initImmediate) return (s = r.init(n, a)), ne(r, s);
              setTimeout(function () {
                r.init(n, a);
              }, 0);
            }
            return r;
          }
          return (
            ae(t, e),
            (t.prototype.init = function (e, t) {
              var n = this;
              function a(e) {
                return e ? ("function" == typeof e ? new e() : e) : null;
              }
              if (
                ("function" == typeof e && ((t = e), (e = {})),
                e || (e = {}),
                "v1" === e.compatibilityAPI
                  ? (this.options = ee(
                      {},
                      {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        saveMissing: !1,
                        saveMissingTo: "fallback",
                        missingKeyHandler: !1,
                        postProcess: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: function () {},
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function (e) {
                          return { defaultValue: e[1] };
                        },
                        interpolation: {
                          escapeValue: !0,
                          format: function (e, t, n) {
                            return e;
                          },
                          prefix: "{{",
                          suffix: "}}",
                          formatSeparator: ",",
                          unescapePrefix: "-",
                          nestingPrefix: "$t(",
                          nestingSuffix: ")",
                          defaultVariables: void 0
                        }
                      },
                      X(
                        (function (e) {
                          return (
                            e.resStore && (e.resources = e.resStore),
                            e.ns && e.ns.defaultNs
                              ? ((e.defaultNS = e.ns.defaultNs), (e.ns = e.ns.namespaces))
                              : (e.defaultNS = e.ns || "translation"),
                            e.fallbackToDefaultNS && e.defaultNS && (e.fallbackNS = e.defaultNS),
                            (e.saveMissing = e.sendMissing),
                            (e.saveMissingTo = e.sendMissingTo || "current"),
                            (e.returnNull = !e.fallbackOnNull),
                            (e.returnEmptyString = !e.fallbackOnEmpty),
                            (e.returnObjects = e.returnObjectTrees),
                            (e.joinArrays = "\n"),
                            (e.returnedObjectHandler = e.objectTreeKeyHandler),
                            (e.parseMissingKeyHandler = e.parseMissingKey),
                            (e.appendNamespaceToMissingKey = !0),
                            (e.nsSeparator = e.nsseparator || ":"),
                            (e.keySeparator = e.keyseparator || "."),
                            "sprintf" === e.shortcutFunction &&
                              (e.overloadTranslationOptionHandler = function (e) {
                                for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
                                return { postProcess: "sprintf", sprintf: t };
                              }),
                            (e.whitelist = e.lngWhitelist),
                            (e.preload = e.preload),
                            "current" === e.load && (e.load = "currentOnly"),
                            "unspecific" === e.load && (e.load = "languageOnly"),
                            (e.backend = e.backend || {}),
                            (e.backend.loadPath = e.resGetPath || "locales/__lng__/__ns__.json"),
                            (e.backend.addPath = e.resPostPath || "locales/add/__lng__/__ns__"),
                            (e.backend.allowMultiLoading = e.dynamicLoad),
                            (e.cache = e.cache || {}),
                            (e.cache.prefix = "res_"),
                            (e.cache.expirationTime = 6048e5),
                            (e.cache.enabled = e.useLocalStorage),
                            (e = v(e)).defaultVariables && (e.interpolation.defaultVariables = e.defaultVariables),
                            e
                          );
                        })(e)
                      ),
                      {}
                    ))
                  : "v1" === e.compatibilityJSON
                  ? (this.options = ee(
                      {},
                      {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        saveMissing: !1,
                        saveMissingTo: "fallback",
                        missingKeyHandler: !1,
                        postProcess: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: function () {},
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function (e) {
                          return { defaultValue: e[1] };
                        },
                        interpolation: {
                          escapeValue: !0,
                          format: function (e, t, n) {
                            return e;
                          },
                          prefix: "{{",
                          suffix: "}}",
                          formatSeparator: ",",
                          unescapePrefix: "-",
                          nestingPrefix: "$t(",
                          nestingSuffix: ")",
                          defaultVariables: void 0
                        }
                      },
                      X(
                        (function (e) {
                          return ((e = v(e)).joinArrays = "\n"), e;
                        })(e)
                      ),
                      {}
                    ))
                  : (this.options = ee(
                      {},
                      {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        whitelist: !1,
                        nonExplicitWhitelist: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        saveMissing: !1,
                        saveMissingTo: "fallback",
                        missingKeyHandler: !1,
                        postProcess: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: function () {},
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function (e) {
                          return { defaultValue: e[1] };
                        },
                        interpolation: {
                          escapeValue: !0,
                          format: function (e, t, n) {
                            return e;
                          },
                          prefix: "{{",
                          suffix: "}}",
                          formatSeparator: ",",
                          unescapePrefix: "-",
                          nestingPrefix: "$t(",
                          nestingSuffix: ")",
                          defaultVariables: void 0
                        }
                      },
                      this.options,
                      X(e)
                    )),
                (this.format = this.options.interpolation.format),
                t || (t = re),
                !this.options.isClone)
              ) {
                this.modules.logger ? i.init(a(this.modules.logger), this.options) : i.init(null, this.options);
                var r = new P(this.options);
                this.store = new Y(this.options.resources, this.options);
                var s = this.services;
                (s.logger = i),
                  (s.resourceStore = this.store),
                  s.resourceStore.on("added removed", function (e, t) {
                    s.cacheConnector.save();
                  }),
                  (s.languageUtils = r),
                  (s.pluralResolver = new W(r, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                  })),
                  (s.interpolator = new z(this.options)),
                  (s.backendConnector = new V(a(this.modules.backend), s.resourceStore, s, this.options)),
                  s.backendConnector.on("*", function (e) {
                    for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    n.emit.apply(n, [e].concat(a));
                  }),
                  s.backendConnector.on("loaded", function (e) {
                    s.cacheConnector.save();
                  }),
                  (s.cacheConnector = new Q(a(this.modules.cache), s.resourceStore, s, this.options)),
                  s.cacheConnector.on("*", function (e) {
                    for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    n.emit.apply(n, [e].concat(a));
                  }),
                  this.modules.languageDetector &&
                    ((s.languageDetector = a(this.modules.languageDetector)),
                    s.languageDetector.init(s, this.options.detection, this.options)),
                  (this.translator = new x(this.services, this.options)),
                  this.translator.on("*", function (e) {
                    for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) a[r - 1] = arguments[r];
                    n.emit.apply(n, [e].concat(a));
                  }),
                  this.modules.external.forEach(function (e) {
                    e.init && e.init(n);
                  });
              }
              var o;
              [
                "getResource",
                "addResource",
                "addResources",
                "addResourceBundle",
                "removeResourceBundle",
                "hasResourceBundle",
                "getResourceBundle"
              ].forEach(function (e) {
                n[e] = function () {
                  var t;
                  return (t = n.store)[e].apply(t, arguments);
                };
              }),
                "v1" === this.options.compatibilityAPI &&
                  (((o = this).lng = function () {
                    return (
                      i.deprecate(
                        "i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."
                      ),
                      o.services.languageUtils.toResolveHierarchy(o.language)[0]
                    );
                  }),
                  (o.preload = function (e, t) {
                    i.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), o.loadLanguages(e, t);
                  }),
                  (o.setLng = function (e, t, n) {
                    return (
                      i.deprecate(
                        "i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."
                      ),
                      "function" == typeof t && ((n = t), (t = {})),
                      t || (t = {}),
                      !0 === t.fixLng && n ? n(null, o.getFixedT(e)) : o.changeLanguage(e, n)
                    );
                  }),
                  (o.addPostProcessor = function (e, t) {
                    i.deprecate(
                      "i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"
                    ),
                      o.use({ type: "postProcessor", name: e, process: t });
                  }));
              var d = function () {
                n.changeLanguage(n.options.lng, function (e, a) {
                  (n.isInitialized = !0), n.logger.log("initialized", n.options), n.emit("initialized", n.options), t(e, a);
                });
              };
              return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0), this;
            }),
            (t.prototype.loadResources = function () {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re;
              if (this.options.resources) t(null);
              else {
                if (this.language && "cimode" === this.language.toLowerCase()) return t();
                var n = [],
                  a = function (t) {
                    t &&
                      e.services.languageUtils.toResolveHierarchy(t).forEach(function (e) {
                        n.indexOf(e) < 0 && n.push(e);
                      });
                  };
                if (this.language) a(this.language);
                else {
                  var r = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                  r.forEach(function (e) {
                    return a(e);
                  });
                }
                this.options.preload &&
                  this.options.preload.forEach(function (e) {
                    return a(e);
                  }),
                  this.services.cacheConnector.load(n, this.options.ns, function () {
                    e.services.backendConnector.load(n, e.options.ns, t);
                  });
              }
            }),
            (t.prototype.reloadResources = function (e, t) {
              e || (e = this.languages), t || (t = this.options.ns), this.services.backendConnector.reload(e, t);
            }),
            (t.prototype.use = function (e) {
              return (
                "backend" === e.type && (this.modules.backend = e),
                "cache" === e.type && (this.modules.cache = e),
                ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                "languageDetector" === e.type && (this.modules.languageDetector = e),
                "postProcessor" === e.type && k.addPostProcessor(e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
              );
            }),
            (t.prototype.changeLanguage = function (e, t) {
              var n = this,
                a = function (e) {
                  e &&
                    ((n.language = e),
                    (n.languages = n.services.languageUtils.toResolveHierarchy(e)),
                    n.translator.changeLanguage(e),
                    n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)),
                    n.loadResources(function (a) {
                      !(function (e, a) {
                        a && (n.emit("languageChanged", a), n.logger.log("languageChanged", a)),
                          t &&
                            t(e, function () {
                              return n.t.apply(n, arguments);
                            });
                      })(a, e);
                    });
                };
              e || !this.services.languageDetector || this.services.languageDetector.async
                ? !e && this.services.languageDetector && this.services.languageDetector.async
                  ? this.services.languageDetector.detect(a)
                  : a(e)
                : a(this.services.languageDetector.detect());
            }),
            (t.prototype.getFixedT = function (e, t) {
              var n = this,
                a = function e(t) {
                  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ee({}, a);
                  return (r.lng = r.lng || e.lng), (r.lngs = r.lngs || e.lngs), (r.ns = r.ns || e.ns), n.t(t, r);
                };
              return "string" == typeof e ? (a.lng = e) : (a.lngs = e), (a.ns = t), a;
            }),
            (t.prototype.t = function () {
              var e;
              return this.translator && (e = this.translator).translate.apply(e, arguments);
            }),
            (t.prototype.exists = function () {
              var e;
              return this.translator && (e = this.translator).exists.apply(e, arguments);
            }),
            (t.prototype.setDefaultNamespace = function (e) {
              this.options.defaultNS = e;
            }),
            (t.prototype.loadNamespaces = function (e, t) {
              var n = this;
              if (!this.options.ns) return t && t();
              "string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                  n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                }),
                this.loadResources(t);
            }),
            (t.prototype.loadLanguages = function (e, t) {
              "string" == typeof e && (e = [e]);
              var n = this.options.preload || [],
                a = e.filter(function (e) {
                  return n.indexOf(e) < 0;
                });
              if (!a.length) return t();
              (this.options.preload = n.concat(a)), this.loadResources(t);
            }),
            (t.prototype.dir = function (e) {
              if ((e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e)) return "rtl";
              return [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam"
              ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0
                ? "rtl"
                : "ltr";
            }),
            (t.prototype.createInstance = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1];
              return new t(e, n);
            }),
            (t.prototype.cloneInstance = function () {
              var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re,
                r = ee({}, this.options, n, { isClone: !0 }),
                s = new t(r, a),
                i = ["store", "services", "language"];
              return (
                i.forEach(function (t) {
                  s[t] = e[t];
                }),
                (s.translator = new x(s.services, s.options)),
                s.translator.on("*", function (e) {
                  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                  s.emit.apply(s, [e].concat(n));
                }),
                s.init(r, a),
                s
              );
            }),
            t
          );
        })(o);
        const ie = new se(),
          oe = ie;
        var de = ie.changeLanguage.bind(ie),
          ue = ie.cloneInstance.bind(ie),
          _e = ie.createInstance.bind(ie),
          le = ie.dir.bind(ie),
          ce = ie.exists.bind(ie),
          me = ie.getFixedT.bind(ie),
          he = ie.init.bind(ie),
          fe = ie.loadLanguages.bind(ie),
          pe = ie.loadNamespaces.bind(ie),
          Me = ie.loadResources.bind(ie),
          ye = ie.off.bind(ie),
          Le = ie.on.bind(ie),
          ge = ie.setDefaultNamespace.bind(ie),
          Ye = ie.t.bind(ie),
          ke = ie.use.bind(ie);
      },
      2353: function (e, t) {
        !(function (n, a) {
          var r = Array.prototype,
            s = Object.prototype,
            i = r.slice,
            o = s.hasOwnProperty,
            d = r.forEach,
            u = {},
            _ = {
              forEach: function (e, t, n) {
                var a, r, s;
                if (null !== e)
                  if (d && e.forEach === d) e.forEach(t, n);
                  else if (e.length === +e.length) {
                    for (a = 0, r = e.length; a < r; a++) if (a in e && t.call(n, e[a], a, e) === u) return;
                  } else for (s in e) if (o.call(e, s) && t.call(n, e[s], s, e) === u) return;
              },
              extend: function (e) {
                return (
                  this.forEach(i.call(arguments, 1), function (t) {
                    for (var n in t) e[n] = t[n];
                  }),
                  e
                );
              }
            },
            l = function (e) {
              if (
                ((this.defaults = {
                  locale_data: { messages: { "": { domain: "messages", lang: "en", plural_forms: "nplurals=2; plural=(n != 1);" } } },
                  domain: "messages",
                  debug: !1
                }),
                (this.options = _.extend({}, this.defaults, e)),
                this.textdomain(this.options.domain),
                e.domain && !this.options.locale_data[this.options.domain])
              )
                throw new Error("Text domain set to non-existent domain: `" + e.domain + "`");
            };
          function c(e) {
            return l.PF.compile(e || "nplurals=2; plural=(n != 1);");
          }
          function m(e, t) {
            (this._key = e), (this._i18n = t);
          }
          (l.context_delimiter = String.fromCharCode(4)),
            _.extend(m.prototype, {
              onDomain: function (e) {
                return (this._domain = e), this;
              },
              withContext: function (e) {
                return (this._context = e), this;
              },
              ifPlural: function (e, t) {
                return (this._val = e), (this._pkey = t), this;
              },
              fetch: function (e) {
                return (
                  "[object Array]" != {}.toString.call(e) && (e = [].slice.call(arguments, 0)),
                  (e && e.length
                    ? l.sprintf
                    : function (e) {
                        return e;
                      })(this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val), e)
                );
              }
            }),
            _.extend(l.prototype, {
              translate: function (e) {
                return new m(e, this);
              },
              textdomain: function (e) {
                if (!e) return this._textdomain;
                this._textdomain = e;
              },
              gettext: function (e) {
                return this.dcnpgettext.call(this, a, a, e);
              },
              dgettext: function (e, t) {
                return this.dcnpgettext.call(this, e, a, t);
              },
              dcgettext: function (e, t) {
                return this.dcnpgettext.call(this, e, a, t);
              },
              ngettext: function (e, t, n) {
                return this.dcnpgettext.call(this, a, a, e, t, n);
              },
              dngettext: function (e, t, n, r) {
                return this.dcnpgettext.call(this, e, a, t, n, r);
              },
              dcngettext: function (e, t, n, r) {
                return this.dcnpgettext.call(this, e, a, t, n, r);
              },
              pgettext: function (e, t) {
                return this.dcnpgettext.call(this, a, e, t);
              },
              dpgettext: function (e, t, n) {
                return this.dcnpgettext.call(this, e, t, n);
              },
              dcpgettext: function (e, t, n) {
                return this.dcnpgettext.call(this, e, t, n);
              },
              npgettext: function (e, t, n, r) {
                return this.dcnpgettext.call(this, a, e, t, n, r);
              },
              dnpgettext: function (e, t, n, a, r) {
                return this.dcnpgettext.call(this, e, t, n, a, r);
              },
              dcnpgettext: function (e, t, n, a, r) {
                var s;
                if (((a = a || n), (e = e || this._textdomain), !this.options))
                  return (s = new l()).dcnpgettext.call(s, void 0, void 0, n, a, r);
                if (!this.options.locale_data) throw new Error("No locale data provided.");
                if (!this.options.locale_data[e]) throw new Error("Domain `" + e + "` was not found.");
                if (!this.options.locale_data[e][""]) throw new Error("No locale meta information provided.");
                if (!n) throw new Error("No translation key found.");
                var i,
                  o,
                  d,
                  u = t ? t + l.context_delimiter + n : n,
                  _ = this.options.locale_data,
                  m = _[e],
                  h = (_.messages || this.defaults.locale_data.messages)[""],
                  f =
                    m[""].plural_forms ||
                    m[""]["Plural-Forms"] ||
                    m[""]["plural-forms"] ||
                    h.plural_forms ||
                    h["Plural-Forms"] ||
                    h["plural-forms"];
                if (void 0 === r) d = 0;
                else {
                  if ("number" != typeof r && ((r = parseInt(r, 10)), isNaN(r)))
                    throw new Error("The number that was passed in is not a number.");
                  d = c(f)(r);
                }
                if (!m) throw new Error("No domain named `" + e + "` could be found.");
                return !(i = m[u]) || d > i.length
                  ? (this.options.missing_key_callback && this.options.missing_key_callback(u, e),
                    (o = [n, a]),
                    this.options.debug,
                    o[c()(r)])
                  : (o = i[d]) || (o = [n, a])[c()(r)];
              }
            });
          var h,
            f,
            p = (function () {
              function e(e) {
                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
              }
              function t(e, t) {
                for (var n = []; t > 0; n[--t] = e);
                return n.join("");
              }
              var n = function () {
                return (
                  n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])),
                  n.format.call(null, n.cache[arguments[0]], arguments)
                );
              };
              return (
                (n.format = function (n, a) {
                  var r,
                    s,
                    i,
                    o,
                    d,
                    u,
                    _,
                    l = 1,
                    c = n.length,
                    m = "",
                    h = [];
                  for (s = 0; s < c; s++)
                    if ("string" === (m = e(n[s]))) h.push(n[s]);
                    else if ("array" === m) {
                      if ((o = n[s])[2])
                        for (r = a[l], i = 0; i < o[2].length; i++) {
                          if (!r.hasOwnProperty(o[2][i])) throw p('[sprintf] property "%s" does not exist', o[2][i]);
                          r = r[o[2][i]];
                        }
                      else r = o[1] ? a[o[1]] : a[l++];
                      if (/[^s]/.test(o[8]) && "number" != e(r)) throw p("[sprintf] expecting number but found %s", e(r));
                      switch ((null == r && (r = ""), o[8])) {
                        case "b":
                          r = r.toString(2);
                          break;
                        case "c":
                          r = String.fromCharCode(r);
                          break;
                        case "d":
                          r = parseInt(r, 10);
                          break;
                        case "e":
                          r = o[7] ? r.toExponential(o[7]) : r.toExponential();
                          break;
                        case "f":
                          r = o[7] ? parseFloat(r).toFixed(o[7]) : parseFloat(r);
                          break;
                        case "o":
                          r = r.toString(8);
                          break;
                        case "s":
                          r = (r = String(r)) && o[7] ? r.substring(0, o[7]) : r;
                          break;
                        case "u":
                          r = Math.abs(r);
                          break;
                        case "x":
                          r = r.toString(16);
                          break;
                        case "X":
                          r = r.toString(16).toUpperCase();
                      }
                      (r = /[def]/.test(o[8]) && o[3] && r >= 0 ? "+" + r : r),
                        (u = o[4] ? ("0" == o[4] ? "0" : o[4].charAt(1)) : " "),
                        (_ = o[6] - String(r).length),
                        (d = o[6] ? t(u, _) : ""),
                        h.push(o[5] ? r + d : d + r);
                    }
                  return h.join("");
                }),
                (n.cache = {}),
                (n.parse = function (e) {
                  for (var t = e, n = [], a = [], r = 0; t; ) {
                    if (null !== (n = /^[^\x25]+/.exec(t))) a.push(n[0]);
                    else if (null !== (n = /^\x25{2}/.exec(t))) a.push("%");
                    else {
                      if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))
                        throw "[sprintf] huh?";
                      if (n[2]) {
                        r |= 1;
                        var s = [],
                          i = n[2],
                          o = [];
                        if (null === (o = /^([a-z_][a-z_\d]*)/i.exec(i))) throw "[sprintf] huh?";
                        for (s.push(o[1]); "" !== (i = i.substring(o[0].length)); )
                          if (null !== (o = /^\.([a-z_][a-z_\d]*)/i.exec(i))) s.push(o[1]);
                          else {
                            if (null === (o = /^\[(\d+)\]/.exec(i))) throw "[sprintf] huh?";
                            s.push(o[1]);
                          }
                        n[2] = s;
                      } else r |= 2;
                      if (3 === r) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                      a.push(n);
                    }
                    t = t.substring(n[0].length);
                  }
                  return a;
                }),
                n
              );
            })(),
            M = function (e, t) {
              return t.unshift(e), p.apply(null, t);
            };
          (l.parse_plural = function (e, t) {
            return (e = e.replace(/n/g, t)), l.parse_expression(e);
          }),
            (l.sprintf = function (e, t) {
              return "[object Array]" == {}.toString.call(t) ? M(e, [].slice.call(t)) : p.apply(this, [].slice.call(arguments));
            }),
            (l.prototype.sprintf = function () {
              return l.sprintf.apply(this, arguments);
            }),
            ((l.PF = {}).parse = function (e) {
              var t = l.PF.extractPluralExpr(e);
              return l.PF.parser.parse.call(l.PF.parser, t);
            }),
            (l.PF.compile = function (e) {
              var t = l.PF.parse(e);
              return function (e) {
                return !0 === (n = l.PF.interpreter(t)(e)) ? 1 : n || 0;
                var n;
              };
            }),
            (l.PF.interpreter = function (e) {
              return function (t) {
                switch (e.type) {
                  case "GROUP":
                    return l.PF.interpreter(e.expr)(t);
                  case "TERNARY":
                    return l.PF.interpreter(e.expr)(t) ? l.PF.interpreter(e.truthy)(t) : l.PF.interpreter(e.falsey)(t);
                  case "OR":
                    return l.PF.interpreter(e.left)(t) || l.PF.interpreter(e.right)(t);
                  case "AND":
                    return l.PF.interpreter(e.left)(t) && l.PF.interpreter(e.right)(t);
                  case "LT":
                    return l.PF.interpreter(e.left)(t) < l.PF.interpreter(e.right)(t);
                  case "GT":
                    return l.PF.interpreter(e.left)(t) > l.PF.interpreter(e.right)(t);
                  case "LTE":
                    return l.PF.interpreter(e.left)(t) <= l.PF.interpreter(e.right)(t);
                  case "GTE":
                    return l.PF.interpreter(e.left)(t) >= l.PF.interpreter(e.right)(t);
                  case "EQ":
                    return l.PF.interpreter(e.left)(t) == l.PF.interpreter(e.right)(t);
                  case "NEQ":
                    return l.PF.interpreter(e.left)(t) != l.PF.interpreter(e.right)(t);
                  case "MOD":
                    return l.PF.interpreter(e.left)(t) % l.PF.interpreter(e.right)(t);
                  case "VAR":
                    return t;
                  case "NUM":
                    return e.val;
                  default:
                    throw new Error("Invalid Token found.");
                }
              };
            }),
            (l.PF.extractPluralExpr = function (e) {
              (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")), /;\s*$/.test(e) || (e = e.concat(";"));
              var t,
                n = /nplurals\=(\d+);/,
                a = e.match(n);
              if (!(a.length > 1)) throw new Error("nplurals not found in plural_forms string: " + e);
              if ((a[1], !((t = (e = e.replace(n, "")).match(/plural\=(.*);/)) && t.length > 1)))
                throw new Error("`plural` expression not found: " + e);
              return t[1];
            }),
            (l.PF.parser =
              ((h = {
                trace: function () {},
                yy: {},
                symbols_: {
                  error: 2,
                  expressions: 3,
                  e: 4,
                  EOF: 5,
                  "?": 6,
                  ":": 7,
                  "||": 8,
                  "&&": 9,
                  "<": 10,
                  "<=": 11,
                  ">": 12,
                  ">=": 13,
                  "!=": 14,
                  "==": 15,
                  "%": 16,
                  "(": 17,
                  ")": 18,
                  n: 19,
                  NUMBER: 20,
                  $accept: 0,
                  $end: 1
                },
                terminals_: {
                  2: "error",
                  5: "EOF",
                  6: "?",
                  7: ":",
                  8: "||",
                  9: "&&",
                  10: "<",
                  11: "<=",
                  12: ">",
                  13: ">=",
                  14: "!=",
                  15: "==",
                  16: "%",
                  17: "(",
                  18: ")",
                  19: "n",
                  20: "NUMBER"
                },
                productions_: [
                  0,
                  [3, 2],
                  [4, 5],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 3],
                  [4, 1],
                  [4, 1]
                ],
                performAction: function (e, t, n, a, r, s, i) {
                  var o = s.length - 1;
                  switch (r) {
                    case 1:
                      return { type: "GROUP", expr: s[o - 1] };
                    case 2:
                      this.$ = { type: "TERNARY", expr: s[o - 4], truthy: s[o - 2], falsey: s[o] };
                      break;
                    case 3:
                      this.$ = { type: "OR", left: s[o - 2], right: s[o] };
                      break;
                    case 4:
                      this.$ = { type: "AND", left: s[o - 2], right: s[o] };
                      break;
                    case 5:
                      this.$ = { type: "LT", left: s[o - 2], right: s[o] };
                      break;
                    case 6:
                      this.$ = { type: "LTE", left: s[o - 2], right: s[o] };
                      break;
                    case 7:
                      this.$ = { type: "GT", left: s[o - 2], right: s[o] };
                      break;
                    case 8:
                      this.$ = { type: "GTE", left: s[o - 2], right: s[o] };
                      break;
                    case 9:
                      this.$ = { type: "NEQ", left: s[o - 2], right: s[o] };
                      break;
                    case 10:
                      this.$ = { type: "EQ", left: s[o - 2], right: s[o] };
                      break;
                    case 11:
                      this.$ = { type: "MOD", left: s[o - 2], right: s[o] };
                      break;
                    case 12:
                      this.$ = { type: "GROUP", expr: s[o - 1] };
                      break;
                    case 13:
                      this.$ = { type: "VAR" };
                      break;
                    case 14:
                      this.$ = { type: "NUM", val: Number(e) };
                  }
                },
                table: [
                  { 3: 1, 4: 2, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 1: [3] },
                  {
                    5: [1, 6],
                    6: [1, 7],
                    8: [1, 8],
                    9: [1, 9],
                    10: [1, 10],
                    11: [1, 11],
                    12: [1, 12],
                    13: [1, 13],
                    14: [1, 14],
                    15: [1, 15],
                    16: [1, 16]
                  },
                  { 4: 17, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  {
                    5: [2, 13],
                    6: [2, 13],
                    7: [2, 13],
                    8: [2, 13],
                    9: [2, 13],
                    10: [2, 13],
                    11: [2, 13],
                    12: [2, 13],
                    13: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    16: [2, 13],
                    18: [2, 13]
                  },
                  {
                    5: [2, 14],
                    6: [2, 14],
                    7: [2, 14],
                    8: [2, 14],
                    9: [2, 14],
                    10: [2, 14],
                    11: [2, 14],
                    12: [2, 14],
                    13: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    16: [2, 14],
                    18: [2, 14]
                  },
                  { 1: [2, 1] },
                  { 4: 18, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 19, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 20, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 21, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 22, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 23, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 24, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 25, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 26, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  { 4: 27, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  {
                    6: [1, 7],
                    8: [1, 8],
                    9: [1, 9],
                    10: [1, 10],
                    11: [1, 11],
                    12: [1, 12],
                    13: [1, 13],
                    14: [1, 14],
                    15: [1, 15],
                    16: [1, 16],
                    18: [1, 28]
                  },
                  {
                    6: [1, 7],
                    7: [1, 29],
                    8: [1, 8],
                    9: [1, 9],
                    10: [1, 10],
                    11: [1, 11],
                    12: [1, 12],
                    13: [1, 13],
                    14: [1, 14],
                    15: [1, 15],
                    16: [1, 16]
                  },
                  {
                    5: [2, 3],
                    6: [2, 3],
                    7: [2, 3],
                    8: [2, 3],
                    9: [1, 9],
                    10: [1, 10],
                    11: [1, 11],
                    12: [1, 12],
                    13: [1, 13],
                    14: [1, 14],
                    15: [1, 15],
                    16: [1, 16],
                    18: [2, 3]
                  },
                  {
                    5: [2, 4],
                    6: [2, 4],
                    7: [2, 4],
                    8: [2, 4],
                    9: [2, 4],
                    10: [1, 10],
                    11: [1, 11],
                    12: [1, 12],
                    13: [1, 13],
                    14: [1, 14],
                    15: [1, 15],
                    16: [1, 16],
                    18: [2, 4]
                  },
                  {
                    5: [2, 5],
                    6: [2, 5],
                    7: [2, 5],
                    8: [2, 5],
                    9: [2, 5],
                    10: [2, 5],
                    11: [2, 5],
                    12: [2, 5],
                    13: [2, 5],
                    14: [2, 5],
                    15: [2, 5],
                    16: [1, 16],
                    18: [2, 5]
                  },
                  {
                    5: [2, 6],
                    6: [2, 6],
                    7: [2, 6],
                    8: [2, 6],
                    9: [2, 6],
                    10: [2, 6],
                    11: [2, 6],
                    12: [2, 6],
                    13: [2, 6],
                    14: [2, 6],
                    15: [2, 6],
                    16: [1, 16],
                    18: [2, 6]
                  },
                  {
                    5: [2, 7],
                    6: [2, 7],
                    7: [2, 7],
                    8: [2, 7],
                    9: [2, 7],
                    10: [2, 7],
                    11: [2, 7],
                    12: [2, 7],
                    13: [2, 7],
                    14: [2, 7],
                    15: [2, 7],
                    16: [1, 16],
                    18: [2, 7]
                  },
                  {
                    5: [2, 8],
                    6: [2, 8],
                    7: [2, 8],
                    8: [2, 8],
                    9: [2, 8],
                    10: [2, 8],
                    11: [2, 8],
                    12: [2, 8],
                    13: [2, 8],
                    14: [2, 8],
                    15: [2, 8],
                    16: [1, 16],
                    18: [2, 8]
                  },
                  {
                    5: [2, 9],
                    6: [2, 9],
                    7: [2, 9],
                    8: [2, 9],
                    9: [2, 9],
                    10: [2, 9],
                    11: [2, 9],
                    12: [2, 9],
                    13: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    16: [1, 16],
                    18: [2, 9]
                  },
                  {
                    5: [2, 10],
                    6: [2, 10],
                    7: [2, 10],
                    8: [2, 10],
                    9: [2, 10],
                    10: [2, 10],
                    11: [2, 10],
                    12: [2, 10],
                    13: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    16: [1, 16],
                    18: [2, 10]
                  },
                  {
                    5: [2, 11],
                    6: [2, 11],
                    7: [2, 11],
                    8: [2, 11],
                    9: [2, 11],
                    10: [2, 11],
                    11: [2, 11],
                    12: [2, 11],
                    13: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    16: [2, 11],
                    18: [2, 11]
                  },
                  {
                    5: [2, 12],
                    6: [2, 12],
                    7: [2, 12],
                    8: [2, 12],
                    9: [2, 12],
                    10: [2, 12],
                    11: [2, 12],
                    12: [2, 12],
                    13: [2, 12],
                    14: [2, 12],
                    15: [2, 12],
                    16: [2, 12],
                    18: [2, 12]
                  },
                  { 4: 30, 17: [1, 3], 19: [1, 4], 20: [1, 5] },
                  {
                    5: [2, 2],
                    6: [1, 7],
                    7: [2, 2],
                    8: [1, 8],
                    9: [1, 9],
                    10: [1, 10],
                    11: [1, 11],
                    12: [1, 12],
                    13: [1, 13],
                    14: [1, 14],
                    15: [1, 15],
                    16: [1, 16],
                    18: [2, 2]
                  }
                ],
                defaultActions: { 6: [2, 1] },
                parseError: function (e, t) {
                  throw new Error(e);
                },
                parse: function (e) {
                  var t = this,
                    n = [0],
                    a = [null],
                    r = [],
                    s = this.table,
                    i = "",
                    o = 0,
                    d = 0,
                    u = 0;
                  this.lexer.setInput(e),
                    (this.lexer.yy = this.yy),
                    (this.yy.lexer = this.lexer),
                    void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                  var _ = this.lexer.yylloc;
                  function l() {
                    var e;
                    return "number" != typeof (e = t.lexer.lex() || 1) && (e = t.symbols_[e] || e), e;
                  }
                  r.push(_), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                  for (var c, m, h, f, p, M, y, L, g, Y, k = {}; ; ) {
                    if (
                      ((h = n[n.length - 1]),
                      this.defaultActions[h] ? (f = this.defaultActions[h]) : (null == c && (c = l()), (f = s[h] && s[h][c])),
                      void 0 === f || !f.length || !f[0])
                    ) {
                      if (!u) {
                        for (M in ((g = []), s[h])) this.terminals_[M] && M > 2 && g.push("'" + this.terminals_[M] + "'");
                        var v = "";
                        (v = this.lexer.showPosition
                          ? "Parse error on line " +
                            (o + 1) +
                            ":\n" +
                            this.lexer.showPosition() +
                            "\nExpecting " +
                            g.join(", ") +
                            ", got '" +
                            this.terminals_[c] +
                            "'"
                          : "Parse error on line " +
                            (o + 1) +
                            ": Unexpected " +
                            (1 == c ? "end of input" : "'" + (this.terminals_[c] || c) + "'")),
                          this.parseError(v, {
                            text: this.lexer.match,
                            token: this.terminals_[c] || c,
                            line: this.lexer.yylineno,
                            loc: _,
                            expected: g
                          });
                      }
                      if (3 == u) {
                        if (1 == c) throw new Error(v || "Parsing halted.");
                        (d = this.lexer.yyleng), (i = this.lexer.yytext), (o = this.lexer.yylineno), (_ = this.lexer.yylloc), (c = l());
                      }
                      for (; !((2).toString() in s[h]); ) {
                        if (0 == h) throw new Error(v || "Parsing halted.");
                        (Y = 1), (n.length = n.length - 2 * Y), (a.length = a.length - Y), (r.length = r.length - Y), (h = n[n.length - 1]);
                      }
                      (m = c), (c = 2), (f = s[(h = n[n.length - 1])] && s[h][2]), (u = 3);
                    }
                    if (f[0] instanceof Array && f.length > 1)
                      throw new Error("Parse Error: multiple actions possible at state: " + h + ", token: " + c);
                    switch (f[0]) {
                      case 1:
                        n.push(c),
                          a.push(this.lexer.yytext),
                          r.push(this.lexer.yylloc),
                          n.push(f[1]),
                          (c = null),
                          m
                            ? ((c = m), (m = null))
                            : ((d = this.lexer.yyleng),
                              (i = this.lexer.yytext),
                              (o = this.lexer.yylineno),
                              (_ = this.lexer.yylloc),
                              u > 0 && u--);
                        break;
                      case 2:
                        if (
                          ((y = this.productions_[f[1]][1]),
                          (k.$ = a[a.length - y]),
                          (k._$ = {
                            first_line: r[r.length - (y || 1)].first_line,
                            last_line: r[r.length - 1].last_line,
                            first_column: r[r.length - (y || 1)].first_column,
                            last_column: r[r.length - 1].last_column
                          }),
                          void 0 !== (p = this.performAction.call(k, i, d, o, this.yy, f[1], a, r)))
                        )
                          return p;
                        y && ((n = n.slice(0, -1 * y * 2)), (a = a.slice(0, -1 * y)), (r = r.slice(0, -1 * y))),
                          n.push(this.productions_[f[1]][0]),
                          a.push(k.$),
                          r.push(k._$),
                          (L = s[n[n.length - 2]][n[n.length - 1]]),
                          n.push(L);
                        break;
                      case 3:
                        return !0;
                    }
                  }
                  return !0;
                }
              }),
              (f = (function () {
                var e = {
                  EOF: 1,
                  parseError: function (e, t) {
                    if (!this.yy.parseError) throw new Error(e);
                    this.yy.parseError(e, t);
                  },
                  setInput: function (e) {
                    return (
                      (this._input = e),
                      (this._more = this._less = this.done = !1),
                      (this.yylineno = this.yyleng = 0),
                      (this.yytext = this.matched = this.match = ""),
                      (this.conditionStack = ["INITIAL"]),
                      (this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }),
                      this
                    );
                  },
                  input: function () {
                    var e = this._input[0];
                    return (
                      (this.yytext += e),
                      this.yyleng++,
                      (this.match += e),
                      (this.matched += e),
                      e.match(/\n/) && this.yylineno++,
                      (this._input = this._input.slice(1)),
                      e
                    );
                  },
                  unput: function (e) {
                    return (this._input = e + this._input), this;
                  },
                  more: function () {
                    return (this._more = !0), this;
                  },
                  pastInput: function () {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
                  },
                  upcomingInput: function () {
                    var e = this.match;
                    return (
                      e.length < 20 && (e += this._input.substr(0, 20 - e.length)),
                      (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                    );
                  },
                  showPosition: function () {
                    var e = this.pastInput(),
                      t = new Array(e.length + 1).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^";
                  },
                  next: function () {
                    if (this.done) return this.EOF;
                    var e, t;
                    this._input || (this.done = !0), this._more || ((this.yytext = ""), (this.match = ""));
                    for (var n = this._currentRules(), a = 0; a < n.length; a++)
                      if ((e = this._input.match(this.rules[n[a]])))
                        return (
                          (t = e[0].match(/\n.*/g)) && (this.yylineno += t.length),
                          (this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: t ? t[t.length - 1].length - 1 : this.yylloc.last_column + e[0].length
                          }),
                          (this.yytext += e[0]),
                          (this.match += e[0]),
                          (this.matches = e),
                          (this.yyleng = this.yytext.length),
                          (this._more = !1),
                          (this._input = this._input.slice(e[0].length)),
                          (this.matched += e[0]),
                          this.performAction.call(this, this.yy, this, n[a], this.conditionStack[this.conditionStack.length - 1]) || void 0
                        );
                    if ("" === this._input) return this.EOF;
                    this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                      text: "",
                      token: null,
                      line: this.yylineno
                    });
                  },
                  lex: function () {
                    var e = this.next();
                    return void 0 !== e ? e : this.lex();
                  },
                  begin: function (e) {
                    this.conditionStack.push(e);
                  },
                  popState: function () {
                    return this.conditionStack.pop();
                  },
                  _currentRules: function () {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                  },
                  topState: function () {
                    return this.conditionStack[this.conditionStack.length - 2];
                  },
                  pushState: function (e) {
                    this.begin(e);
                  },
                  performAction: function (e, t, n, a) {
                    switch (n) {
                      case 0:
                        break;
                      case 1:
                        return 20;
                      case 2:
                        return 19;
                      case 3:
                        return 8;
                      case 4:
                        return 9;
                      case 5:
                        return 6;
                      case 6:
                        return 7;
                      case 7:
                        return 11;
                      case 8:
                        return 13;
                      case 9:
                        return 10;
                      case 10:
                        return 12;
                      case 11:
                        return 14;
                      case 12:
                        return 15;
                      case 13:
                        return 16;
                      case 14:
                        return 17;
                      case 15:
                        return 18;
                      case 16:
                        return 5;
                      case 17:
                        return "INVALID";
                    }
                  },
                  rules: [
                    /^\s+/,
                    /^[0-9]+(\.[0-9]+)?\b/,
                    /^n\b/,
                    /^\|\|/,
                    /^&&/,
                    /^\?/,
                    /^:/,
                    /^<=/,
                    /^>=/,
                    /^</,
                    /^>/,
                    /^!=/,
                    /^==/,
                    /^%/,
                    /^\(/,
                    /^\)/,
                    /^$/,
                    /^./
                  ],
                  conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], inclusive: !0 } }
                };
                return e;
              })()),
              (h.lexer = f),
              h)),
            e.exports && (t = e.exports = l),
            (t.Jed = l);
        })();
      },
      2786: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
              return /^nm$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Vandag om] LT",
              nextDay: "[Môre om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[Gister om] LT",
              lastWeek: "[Laas] dddd [om] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "oor %s",
              past: "%s gelede",
              s: "'n paar sekondes",
              m: "'n minuut",
              mm: "%d minute",
              h: "'n uur",
              hh: "%d ure",
              d: "'n dag",
              dd: "%d dae",
              M: "'n maand",
              MM: "%d maande",
              y: "'n jaar",
              yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      7702: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
            },
            week: { dow: 6, doy: 12 }
          });
        })(n(381));
      },
      6040: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
            n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };
          e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 }
          });
        })(n(381));
      },
      7100: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات"
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      867: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
            n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
            a = function (e) {
              return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
            },
            r = {
              s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
              m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
              h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
              d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
              M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
              y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function (e) {
              return function (t, n, s, i) {
                var o = a(t),
                  d = r[e][a(t)];
                return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
              };
            },
            i = [
              "كانون الثاني يناير",
              "شباط فبراير",
              "آذار مارس",
              "نيسان أبريل",
              "أيار مايو",
              "حزيران يونيو",
              "تموز يوليو",
              "آب أغسطس",
              "أيلول سبتمبر",
              "تشرين الأول أكتوبر",
              "تشرين الثاني نوفمبر",
              "كانون الأول ديسمبر"
            ];
          e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: s("s"),
              m: s("m"),
              mm: s("m"),
              h: s("h"),
              hh: s("h"),
              d: s("d"),
              dd: s("d"),
              M: s("M"),
              MM: s("M"),
              y: s("y"),
              yy: s("y")
            },
            preparse: function (e) {
              return e
                .replace(/\u200f/g, "")
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 }
          });
        })(n(381));
      },
      1083: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
          };
          e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[sabah saat] LT",
              nextWeek: "[gələn həftə] dddd [saat] LT",
              lastDay: "[dünən] LT",
              lastWeek: "[keçən həftə] dddd [saat] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s əvvəl",
              s: "birneçə saniyyə",
              m: "bir dəqiqə",
              mm: "%d dəqiqə",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir il",
              yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
              return /^(gündüz|axşam)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam";
            },
            ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
              if (0 === e) return e + "-ıncı";
              var n = e % 10,
                a = (e % 100) - n,
                r = e >= 100 ? 100 : null;
              return e + (t[n] || t[a] || t[r]);
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      9808: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
          }
          function n(e, n, a) {
            return "m" === a
              ? n
                ? "хвіліна"
                : "хвіліну"
              : "h" === a
              ? n
                ? "гадзіна"
                : "гадзіну"
              : e +
                " " +
                t(
                  {
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                  }[a],
                  +e
                );
          }
          e.defineLocale("be", {
            months: {
              format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
              standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
              format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
              standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
              isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., HH:mm",
              LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
              sameDay: "[Сёння ў] LT",
              nextDay: "[Заўтра ў] LT",
              lastDay: "[Учора ў] LT",
              nextWeek: function () {
                return "[У] dddd [ў] LT";
              },
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "[У мінулую] dddd [ў] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[У мінулы] dddd [ў] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "праз %s",
              past: "%s таму",
              s: "некалькі секунд",
              m: n,
              mm: n,
              h: n,
              hh: n,
              d: "дзень",
              dd: n,
              M: "месяц",
              MM: n,
              y: "год",
              yy: n
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
              return /^(дня|вечара)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
            },
            ordinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return (e % 10 != 2 && e % 10 != 3) || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                case "D":
                  return e + "-га";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      8338: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[Днес в] LT",
              nextDay: "[Утре в] LT",
              nextWeek: "dddd [в] LT",
              lastDay: "[Вчера в] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[В изминалата] dddd [в] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[В изминалия] dddd [в] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "след %s",
              past: "преди %s",
              s: "няколко секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дни",
              M: "месец",
              MM: "%d месеца",
              y: "година",
              yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      8905: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
            n = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };
          e.defineLocale("bn", {
            months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
            weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
            longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর"
            },
            preparse: function (e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), ("রাত" === t && e >= 4) || ("দুপুর" === t && e < 5) || "বিকাল" === t ? e + 12 : e;
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত";
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      1560: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
            n = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };
          e.defineLocale("bo", {
            months:
              "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
                "_"
              ),
            monthsShort:
              "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
                "_"
              ),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
              sameDay: "[དི་རིང] LT",
              nextDay: "[སང་ཉིན] LT",
              nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
              lastDay: "[ཁ་སང] LT",
              lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ལ་",
              past: "%s སྔན་ལ",
              s: "ལམ་སང",
              m: "སྐར་མ་གཅིག",
              mm: "%d སྐར་མ",
              h: "ཆུ་ཚོད་གཅིག",
              hh: "%d ཆུ་ཚོད",
              d: "ཉིན་གཅིག",
              dd: "%d ཉིན་",
              M: "ཟླ་བ་གཅིག",
              MM: "%d ཟླ་བ",
              y: "ལོ་གཅིག",
              yy: "%d ལོ"
            },
            preparse: function (e) {
              return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), ("མཚན་མོ" === t && e >= 4) || ("ཉིན་གུང" === t && e < 5) || "དགོང་དག" === t ? e + 12 : e;
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ";
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      1278: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            return e + " " + r({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e);
          }
          function n(e) {
            switch (a(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz";
            }
          }
          function a(e) {
            return e > 9 ? a(e % 10) : e;
          }
          function r(e, t) {
            return 2 === t ? s(e) : e;
          }
          function s(e) {
            var t = { m: "v", b: "v", d: "z" };
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
          }
          e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            longDateFormat: {
              LT: "h[e]mm A",
              LTS: "h[e]mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D [a viz] MMMM YYYY",
              LLL: "D [a viz] MMMM YYYY h[e]mm A",
              LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
              sameDay: "[Hiziv da] LT",
              nextDay: "[Warc'hoazh da] LT",
              nextWeek: "dddd [da] LT",
              lastDay: "[Dec'h da] LT",
              lastWeek: "dddd [paset da] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "a-benn %s",
              past: "%s 'zo",
              s: "un nebeud segondennoù",
              m: "ur vunutenn",
              mm: t,
              h: "un eur",
              hh: "%d eur",
              d: "un devezh",
              dd: t,
              M: "ur miz",
              MM: t,
              y: "ur bloaz",
              yy: n
            },
            ordinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
              return e + (1 === e ? "añ" : "vet");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      622: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
              case "dd":
                return (a += 1 === e ? "dan" : "dana");
              case "MM":
                return (a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
              case "yy":
                return (a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
            }
          }
          e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      2468: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: function () {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
              },
              nextDay: function () {
                return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
              },
              nextWeek: function () {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
              },
              lastDay: function () {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
              },
              lastWeek: function () {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "en %s",
              past: "fa %s",
              s: "uns segons",
              m: "un minut",
              mm: "%d minuts",
              h: "una hora",
              hh: "%d hores",
              d: "un dia",
              dd: "%d dies",
              M: "un mes",
              MM: "%d mesos",
              y: "un any",
              yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
              var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
              return ("w" !== t && "W" !== t) || (n = "a"), e + n;
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5822: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
          function a(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10);
          }
          function r(e, t, n, r) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || r ? "pár sekund" : "pár sekundami";
              case "m":
                return t ? "minuta" : r ? "minutu" : "minutou";
              case "mm":
                return t || r ? s + (a(e) ? "minuty" : "minut") : s + "minutami";
              case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
              case "hh":
                return t || r ? s + (a(e) ? "hodiny" : "hodin") : s + "hodinami";
              case "d":
                return t || r ? "den" : "dnem";
              case "dd":
                return t || r ? s + (a(e) ? "dny" : "dní") : s + "dny";
              case "M":
                return t || r ? "měsíc" : "měsícem";
              case "MM":
                return t || r ? s + (a(e) ? "měsíce" : "měsíců") : s + "měsíci";
              case "y":
                return t || r ? "rok" : "rokem";
              case "yy":
                return t || r ? s + (a(e) ? "roky" : "let") : s + "lety";
            }
          }
          e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsParse: (function (e, t) {
              var n,
                a = [];
              for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
              return a;
            })(t, n),
            shortMonthsParse: (function (e) {
              var t,
                n = [];
              for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
              return n;
            })(n),
            longMonthsParse: (function (e) {
              var t,
                n = [];
              for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
              return n;
            })(t),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[dnes v] LT",
              nextDay: "[zítra v] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v neděli v] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [v] LT";
                  case 3:
                    return "[ve středu v] LT";
                  case 4:
                    return "[ve čtvrtek v] LT";
                  case 5:
                    return "[v pátek v] LT";
                  case 6:
                    return "[v sobotu v] LT";
                }
              },
              lastDay: "[včera v] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulou neděli v] LT";
                  case 1:
                  case 2:
                    return "[minulé] dddd [v] LT";
                  case 3:
                    return "[minulou středu v] LT";
                  case 4:
                  case 5:
                    return "[minulý] dddd [v] LT";
                  case 6:
                    return "[minulou sobotu v] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "před %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      877: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
              LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
              LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
              sameDay: "[Паян] LT [сехетре]",
              nextDay: "[Ыран] LT [сехетре]",
              lastDay: "[Ӗнер] LT [сехетре]",
              nextWeek: "[Ҫитес] dddd LT [сехетре]",
              lastWeek: "[Иртнӗ] dddd LT [сехетре]",
              sameElse: "L"
            },
            relativeTime: {
              future: function (e) {
                return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран");
              },
              past: "%s каялла",
              s: "пӗр-ик ҫеккунт",
              m: "пӗр минут",
              mm: "%d минут",
              h: "пӗр сехет",
              hh: "%d сехет",
              d: "пӗр кун",
              dd: "%d кун",
              M: "пӗр уйӑх",
              MM: "%d уйӑх",
              y: "пӗр ҫул",
              yy: "%d ҫул"
            },
            ordinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      7373: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Heddiw am] LT",
              nextDay: "[Yfory am] LT",
              nextWeek: "dddd [am] LT",
              lastDay: "[Ddoe am] LT",
              lastWeek: "dddd [diwethaf am] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "mewn %s",
              past: "%s yn ôl",
              s: "ychydig eiliadau",
              m: "munud",
              mm: "%d munud",
              h: "awr",
              hh: "%d awr",
              d: "diwrnod",
              dd: "%d diwrnod",
              M: "mis",
              MM: "%d mis",
              y: "blwyddyn",
              yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
              var t = "";
              return (
                e > 20
                  ? (t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain")
                  : e > 0 &&
                    (t = [
                      "",
                      "af",
                      "il",
                      "ydd",
                      "ydd",
                      "ed",
                      "ed",
                      "ed",
                      "fed",
                      "fed",
                      "fed",
                      "eg",
                      "fed",
                      "eg",
                      "eg",
                      "fed",
                      "eg",
                      "eg",
                      "fed",
                      "eg",
                      "fed"
                    ][e]),
                e + t
              );
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      4780: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[I dag kl.] LT",
              nextDay: "[I morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[I går kl.] LT",
              lastWeek: "[sidste] dddd [kl] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "få sekunder",
              m: "et minut",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dage",
              M: "en måned",
              MM: "%d måneder",
              y: "et år",
              yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      217: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var r = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1];
          }
          e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      9740: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var r = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? r[n][0] : r[n][1];
          }
          e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5300: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "ޖެނުއަރީ",
              "ފެބްރުއަރީ",
              "މާރިޗު",
              "އޭޕްރީލު",
              "މޭ",
              "ޖޫން",
              "ޖުލައި",
              "އޯގަސްޓު",
              "ސެޕްޓެމްބަރު",
              "އޮކްޓޯބަރު",
              "ނޮވެމްބަރު",
              "ޑިސެމްބަރު"
            ],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
          e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/M/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
              return "މފ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "މކ" : "މފ";
            },
            calendar: {
              sameDay: "[މިއަދު] LT",
              nextDay: "[މާދަމާ] LT",
              nextWeek: "dddd LT",
              lastDay: "[އިއްޔެ] LT",
              lastWeek: "[ފާއިތުވި] dddd LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "ތެރޭގައި %s",
              past: "ކުރިން %s",
              s: "ސިކުންތުކޮޅެއް",
              m: "މިނިޓެއް",
              mm: "މިނިޓު %d",
              h: "ގަޑިއިރެއް",
              hh: "ގަޑިއިރު %d",
              d: "ދުވަހެއް",
              dd: "ދުވަސް %d",
              M: "މަހެއް",
              MM: "މަސް %d",
              y: "އަހަރެއް",
              yy: "އަހަރު %d"
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 7, doy: 12 }
          });
        })(n(381));
      },
      837: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
          }
          e.defineLocale("el", {
            monthsNominativeEl:
              "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
                "_"
              ),
            monthsGenitiveEl:
              "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
                "_"
              ),
            months: function (e, t) {
              return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()];
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ";
            },
            isPM: function (e) {
              return "μ" === (e + "").toLowerCase()[0];
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
              sameDay: "[Σήμερα {}] LT",
              nextDay: "[Αύριο {}] LT",
              nextWeek: "dddd [{}] LT",
              lastDay: "[Χθες {}] LT",
              lastWeek: function () {
                return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT";
              },
              sameElse: "L"
            },
            calendar: function (e, n) {
              var a = this._calendarEl[e],
                r = n && n.hours();
              return t(a) && (a = a.apply(n)), a.replace("{}", r % 12 == 1 ? "στη" : "στις");
            },
            relativeTime: {
              future: "σε %s",
              past: "%s πριν",
              s: "λίγα δευτερόλεπτα",
              m: "ένα λεπτό",
              mm: "%d λεπτά",
              h: "μία ώρα",
              hh: "%d ώρες",
              d: "μία μέρα",
              dd: "%d μέρες",
              M: "ένας μήνας",
              MM: "%d μήνες",
              y: "ένας χρόνος",
              yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      8348: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 == ~~((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      7925: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "YYYY-MM-DD",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 == ~~((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            }
          });
        })(n(381));
      },
      2243: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 == ~~((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      6436: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 == ~~((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      6319: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 == ~~((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      2915: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D[-an de] MMMM, YYYY",
              LLL: "D[-an de] MMMM, YYYY HH:mm",
              LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
              return "p" === e.charAt(0).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "p.t.m." : "P.T.M.") : n ? "a.t.m." : "A.T.M.";
            },
            calendar: {
              sameDay: "[Hodiaŭ je] LT",
              nextDay: "[Morgaŭ je] LT",
              nextWeek: "dddd [je] LT",
              lastDay: "[Hieraŭ je] LT",
              lastWeek: "[pasinta] dddd [je] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "je %s",
              past: "antaŭ %s",
              s: "sekundoj",
              m: "minuto",
              mm: "%d minutoj",
              h: "horo",
              hh: "%d horoj",
              d: "tago",
              dd: "%d tagoj",
              M: "monato",
              MM: "%d monatoj",
              y: "jaro",
              yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      5655: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
          e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, a) {
              return /-MMM-/.test(a) ? n[e.month()] : t[e.month()];
            },
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5603: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var r = {
              s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
              m: ["ühe minuti", "üks minut"],
              mm: [e + " minuti", e + " minutit"],
              h: ["ühe tunni", "tund aega", "üks tund"],
              hh: [e + " tunni", e + " tundi"],
              d: ["ühe päeva", "üks päev"],
              M: ["kuu aja", "kuu aega", "üks kuu"],
              MM: [e + " kuu", e + " kuud"],
              y: ["ühe aasta", "aasta", "üks aasta"],
              yy: [e + " aasta", e + " aastat"]
            };
            return t ? (r[n][2] ? r[n][2] : r[n][1]) : a ? r[n][0] : r[n][1];
          }
          e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[Täna,] LT",
              nextDay: "[Homme,] LT",
              nextWeek: "[Järgmine] dddd LT",
              lastDay: "[Eile,] LT",
              lastWeek: "[Eelmine] dddd LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s pärast",
              past: "%s tagasi",
              s: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: "%d päeva",
              M: t,
              MM: t,
              y: t,
              yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      7763: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY[ko] MMMM[ren] D[a]",
              LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
              LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
              l: "YYYY-M-D",
              ll: "YYYY[ko] MMM D[a]",
              lll: "YYYY[ko] MMM D[a] HH:mm",
              llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
              sameDay: "[gaur] LT[etan]",
              nextDay: "[bihar] LT[etan]",
              nextWeek: "dddd LT[etan]",
              lastDay: "[atzo] LT[etan]",
              lastWeek: "[aurreko] dddd LT[etan]",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s barru",
              past: "duela %s",
              s: "segundo batzuk",
              m: "minutu bat",
              mm: "%d minutu",
              h: "ordu bat",
              hh: "%d ordu",
              d: "egun bat",
              dd: "%d egun",
              M: "hilabete bat",
              MM: "%d hilabete",
              y: "urte bat",
              yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      6959: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
            n = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };
          e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
              return /بعد از ظهر/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
            },
            calendar: {
              sameDay: "[امروز ساعت] LT",
              nextDay: "[فردا ساعت] LT",
              nextWeek: "dddd [ساعت] LT",
              lastDay: "[دیروز ساعت] LT",
              lastWeek: "dddd [پیش] [ساعت] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چندین ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال"
            },
            preparse: function (e) {
              return e
                .replace(/[۰-۹]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            ordinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: { dow: 6, doy: 12 }
          });
        })(n(381));
      },
      1897: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
          function a(e, t, n, a) {
            var s = "";
            switch (n) {
              case "s":
                return a ? "muutaman sekunnin" : "muutama sekunti";
              case "m":
                return a ? "minuutin" : "minuutti";
              case "mm":
                s = a ? "minuutin" : "minuuttia";
                break;
              case "h":
                return a ? "tunnin" : "tunti";
              case "hh":
                s = a ? "tunnin" : "tuntia";
                break;
              case "d":
                return a ? "päivän" : "päivä";
              case "dd":
                s = a ? "päivän" : "päivää";
                break;
              case "M":
                return a ? "kuukauden" : "kuukausi";
              case "MM":
                s = a ? "kuukauden" : "kuukautta";
                break;
              case "y":
                return a ? "vuoden" : "vuosi";
              case "yy":
                s = a ? "vuoden" : "vuotta";
            }
            return (s = r(e, a) + " " + s);
          }
          function r(e, a) {
            return e < 10 ? (a ? n[e] : t[e]) : e;
          }
          e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM[ta] YYYY",
              LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
              LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
              l: "D.M.YYYY",
              ll: "Do MMM YYYY",
              lll: "Do MMM YYYY, [klo] HH.mm",
              llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
              sameDay: "[tänään] [klo] LT",
              nextDay: "[huomenna] [klo] LT",
              nextWeek: "dddd [klo] LT",
              lastDay: "[eilen] [klo] LT",
              lastWeek: "[viime] dddd[na] [klo] LT",
              sameElse: "L"
            },
            relativeTime: { future: "%s päästä", past: "%s sitten", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      4694: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Í dag kl.] LT",
              nextDay: "[Í morgin kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[Í gjár kl.] LT",
              lastWeek: "[síðstu] dddd [kl] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "um %s",
              past: "%s síðani",
              s: "fá sekund",
              m: "ein minutt",
              mm: "%d minuttir",
              h: "ein tími",
              hh: "%d tímar",
              d: "ein dagur",
              dd: "%d dagar",
              M: "ein mánaði",
              MM: "%d mánaðir",
              y: "eitt ár",
              yy: "%d ár"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      3049: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Aujourd'hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e) {
              return e + (1 === e ? "er" : "e");
            }
          });
        })(n(381));
      },
      2330: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Aujourd'hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e) {
              return e + (1 === e ? "er" : "e");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5596: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Aujourd'hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function (e) {
              return e + (1 === e ? "er" : "");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5044: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
          e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, a) {
              return /-MMM-/.test(a) ? n[e.month()] : t[e.month()];
            },
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[hjoed om] LT",
              nextDay: "[moarn om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[juster om] LT",
              lastWeek: "[ôfrûne] dddd [om] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      2101: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "Am Faoilleach",
              "An Gearran",
              "Am Màrt",
              "An Giblean",
              "An Cèitean",
              "An t-Ògmhios",
              "An t-Iuchar",
              "An Lùnastal",
              "An t-Sultain",
              "An Dàmhair",
              "An t-Samhain",
              "An Dùbhlachd"
            ],
            n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
          e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: a,
            weekdaysShort: r,
            weekdaysMin: s,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[An-diugh aig] LT",
              nextDay: "[A-màireach aig] LT",
              nextWeek: "dddd [aig] LT",
              lastDay: "[An-dè aig] LT",
              lastWeek: "dddd [seo chaidh] [aig] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "ann an %s",
              past: "bho chionn %s",
              s: "beagan diogan",
              m: "mionaid",
              mm: "%d mionaidean",
              h: "uair",
              hh: "%d uairean",
              d: "latha",
              dd: "%d latha",
              M: "mìos",
              MM: "%d mìosan",
              y: "bliadhna",
              yy: "%d bliadhna"
            },
            ordinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      8794: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: function () {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextDay: function () {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextWeek: function () {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
              },
              lastDay: function () {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
              },
              lastWeek: function () {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: function (e) {
                return "uns segundos" === e ? "nuns segundos" : "en " + e;
              },
              past: "hai %s",
              s: "uns segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "unha hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un ano",
              yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      4206: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [ב]MMMM YYYY",
              LLL: "D [ב]MMMM YYYY HH:mm",
              LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
              l: "D/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[היום ב־]LT",
              nextDay: "[מחר ב־]LT",
              nextWeek: "dddd [בשעה] LT",
              lastDay: "[אתמול ב־]LT",
              lastWeek: "[ביום] dddd [האחרון בשעה] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "בעוד %s",
              past: "לפני %s",
              s: "מספר שניות",
              m: "דקה",
              mm: "%d דקות",
              h: "שעה",
              hh: function (e) {
                return 2 === e ? "שעתיים" : e + " שעות";
              },
              d: "יום",
              dd: function (e) {
                return 2 === e ? "יומיים" : e + " ימים";
              },
              M: "חודש",
              MM: function (e) {
                return 2 === e ? "חודשיים" : e + " חודשים";
              },
              y: "שנה",
              yy: function (e) {
                return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים";
              }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
              return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 5
                ? "לפנות בוקר"
                : e < 10
                ? "בבוקר"
                : e < 12
                ? n
                  ? 'לפנה"צ'
                  : "לפני הצהריים"
                : e < 18
                ? n
                  ? 'אחה"צ'
                  : "אחרי הצהריים"
                : "בערב";
            }
          });
        })(n(381));
      },
      94: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
            n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
          e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[कल] LT",
              nextWeek: "dddd, LT",
              lastDay: "[कल] LT",
              lastWeek: "[पिछले] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष"
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "रात" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सुबह" === t
                  ? e
                  : "दोपहर" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "शाम" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात";
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      316: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
              case "dd":
                return (a += 1 === e ? "dan" : "dana");
              case "MM":
                return (a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
              case "yy":
                return (a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
            }
          }
          e.defineLocale("hr", {
            months: {
              format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
              standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      2138: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
          function n(e, t, n, a) {
            var r = e;
            switch (n) {
              case "s":
                return a || t ? "néhány másodperc" : "néhány másodperce";
              case "m":
                return "egy" + (a || t ? " perc" : " perce");
              case "mm":
                return r + (a || t ? " perc" : " perce");
              case "h":
                return "egy" + (a || t ? " óra" : " órája");
              case "hh":
                return r + (a || t ? " óra" : " órája");
              case "d":
                return "egy" + (a || t ? " nap" : " napja");
              case "dd":
                return r + (a || t ? " nap" : " napja");
              case "M":
                return "egy" + (a || t ? " hónap" : " hónapja");
              case "MM":
                return r + (a || t ? " hónap" : " hónapja");
              case "y":
                return "egy" + (a || t ? " év" : " éve");
              case "yy":
                return r + (a || t ? " év" : " éve");
            }
            return "";
          }
          function a(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
          }
          e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY. MMMM D.",
              LLL: "YYYY. MMMM D. H:mm",
              LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
              return "u" === e.charAt(1).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
            },
            calendar: {
              sameDay: "[ma] LT[-kor]",
              nextDay: "[holnap] LT[-kor]",
              nextWeek: function () {
                return a.call(this, !0);
              },
              lastDay: "[tegnap] LT[-kor]",
              lastWeek: function () {
                return a.call(this, !1);
              },
              sameElse: "L"
            },
            relativeTime: { future: "%s múlva", past: "%s", s: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      1423: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("hy-am", {
            months: {
              format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                "_"
              ),
              standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY թ.",
              LLL: "D MMMM YYYY թ., HH:mm",
              LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
              sameDay: "[այսօր] LT",
              nextDay: "[վաղը] LT",
              lastDay: "[երեկ] LT",
              nextWeek: function () {
                return "dddd [օրը ժամը] LT";
              },
              lastWeek: function () {
                return "[անցած] dddd [օրը ժամը] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "%s հետո",
              past: "%s առաջ",
              s: "մի քանի վայրկյան",
              m: "րոպե",
              mm: "%d րոպե",
              h: "ժամ",
              hh: "%d ժամ",
              d: "օր",
              dd: "%d օր",
              M: "ամիս",
              MM: "%d ամիս",
              y: "տարի",
              yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
              return /^(ցերեկվա|երեկոյան)$/.test(e);
            },
            meridiem: function (e) {
              return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան";
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
              switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                  return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      9218: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t ? e : "siang" === t ? (e >= 11 ? e : e + 12) : "sore" === t || "malam" === t ? e + 12 : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Besok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kemarin pukul] LT",
              lastWeek: "dddd [lalu pukul] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lalu",
              s: "beberapa detik",
              m: "semenit",
              mm: "%d menit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun"
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      135: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e) {
            return e % 100 == 11 || e % 10 != 1;
          }
          function n(e, n, a, r) {
            var s = e + " ";
            switch (a) {
              case "s":
                return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
              case "m":
                return n ? "mínúta" : "mínútu";
              case "mm":
                return t(e) ? s + (n || r ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
              case "hh":
                return t(e) ? s + (n || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
              case "d":
                return n ? "dagur" : r ? "dag" : "degi";
              case "dd":
                return t(e) ? (n ? s + "dagar" : s + (r ? "daga" : "dögum")) : n ? s + "dagur" : s + (r ? "dag" : "degi");
              case "M":
                return n ? "mánuður" : r ? "mánuð" : "mánuði";
              case "MM":
                return t(e) ? (n ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum")) : n ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
              case "y":
                return n || r ? "ár" : "ári";
              case "yy":
                return t(e) ? s + (n || r ? "ár" : "árum") : s + (n || r ? "ár" : "ári");
            }
          }
          e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
              sameDay: "[í dag kl.] LT",
              nextDay: "[á morgun kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[í gær kl.] LT",
              lastWeek: "[síðasta] dddd [kl.] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "eftir %s",
              past: "fyrir %s síðan",
              s: n,
              m: n,
              mm: n,
              h: "klukkustund",
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      626: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Oggi alle] LT",
              nextDay: "[Domani alle] LT",
              nextWeek: "dddd [alle] LT",
              lastDay: "[Ieri alle] LT",
              lastWeek: function () {
                return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: function (e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
              },
              past: "%s fa",
              s: "alcuni secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      9183: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
              LT: "Ah時m分",
              LTS: "Ah時m分s秒",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah時m分",
              LLLL: "YYYY年M月D日Ah時m分 dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
              return "午後" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "午前" : "午後";
            },
            calendar: {
              sameDay: "[今日] LT",
              nextDay: "[明日] LT",
              nextWeek: "[来週]dddd LT",
              lastDay: "[昨日] LT",
              lastWeek: "[前週]dddd LT",
              sameElse: "L"
            },
            ordinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "数秒",
              m: "1分",
              mm: "%d分",
              h: "1時間",
              hh: "%d時間",
              d: "1日",
              dd: "%d日",
              M: "1ヶ月",
              MM: "%dヶ月",
              y: "1年",
              yy: "%d年"
            }
          });
        })(n(381));
      },
      4286: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "enjing" === t ? e : "siyang" === t ? (e >= 11 ? e : e + 12) : "sonten" === t || "ndalu" === t ? e + 12 : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
            },
            calendar: {
              sameDay: "[Dinten puniko pukul] LT",
              nextDay: "[Mbenjang pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kala wingi pukul] LT",
              lastWeek: "dddd [kepengker pukul] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "wonten ing %s",
              past: "%s ingkang kepengker",
              s: "sawetawis detik",
              m: "setunggal menit",
              mm: "%d menit",
              h: "setunggal jam",
              hh: "%d jam",
              d: "sedinten",
              dd: "%d dinten",
              M: "sewulan",
              MM: "%d wulan",
              y: "setaun",
              yy: "%d taun"
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      2105: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ka", {
            months: {
              standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
              format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
              standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
              format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
              isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
              sameDay: "[დღეს] LT[-ზე]",
              nextDay: "[ხვალ] LT[-ზე]",
              lastDay: "[გუშინ] LT[-ზე]",
              nextWeek: "[შემდეგ] dddd LT[-ზე]",
              lastWeek: "[წინა] dddd LT-ზე",
              sameElse: "L"
            },
            relativeTime: {
              future: function (e) {
                return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში";
              },
              past: function (e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                  ? e.replace(/(ი|ე)$/, "ის წინ")
                  : /წელი/.test(e)
                  ? e.replace(/წელი$/, "წლის წინ")
                  : void 0;
              },
              s: "რამდენიმე წამი",
              m: "წუთი",
              mm: "%d წუთი",
              h: "საათი",
              hh: "%d საათი",
              d: "დღე",
              dd: "%d დღე",
              M: "თვე",
              MM: "%d თვე",
              y: "წელი",
              yy: "%d წელი"
            },
            ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
              return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0 ? "მე-" + e : e + "-ე";
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      7772: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
          };
          e.defineLocale("kk", {
            months: "Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан".split("_"),
            monthsShort: "Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел".split("_"),
            weekdays: "Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі".split("_"),
            weekdaysShort: "Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен".split("_"),
            weekdaysMin: "Жк_Дй_Сй_Ср_Бй_Жм_Сн".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Бүгін сағат] LT",
              nextDay: "[Ертең сағат] LT",
              nextWeek: "dddd [сағат] LT",
              lastDay: "[Кеше сағат] LT",
              lastWeek: "[Өткен аптаның] dddd [сағат] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ішінде",
              past: "%s бұрын",
              s: "бірнеше секунд",
              m: "бір минут",
              mm: "%d минут",
              h: "бір сағат",
              hh: "%d сағат",
              d: "бір күн",
              dd: "%d күн",
              M: "бір ай",
              MM: "%d ай",
              y: "бір жыл",
              yy: "%d жыл"
            },
            ordinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
              var n = e % 10,
                a = e >= 100 ? 100 : null;
              return e + (t[e] || t[n] || t[a]);
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      8758: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
              nextDay: "[ស្អែក ម៉ោង] LT",
              nextWeek: "dddd [ម៉ោង] LT",
              lastDay: "[ម្សិលមិញ ម៉ោង] LT",
              lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ"
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      3730: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
              LT: "A h시 m분",
              LTS: "A h시 m분 s초",
              L: "YYYY.MM.DD",
              LL: "YYYY년 MMMM D일",
              LLL: "YYYY년 MMMM D일 A h시 m분",
              LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
            },
            calendar: {
              sameDay: "오늘 LT",
              nextDay: "내일 LT",
              nextWeek: "dddd LT",
              lastDay: "어제 LT",
              lastWeek: "지난주 dddd LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s 후",
              past: "%s 전",
              s: "몇초",
              ss: "%d초",
              m: "일분",
              mm: "%d분",
              h: "한시간",
              hh: "%d시간",
              d: "하루",
              dd: "%d일",
              M: "한달",
              MM: "%d달",
              y: "일년",
              yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function (e) {
              return "오후" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "오전" : "오후";
            }
          });
        })(n(381));
      },
      6841: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var r = {
              m: ["eng Minutt", "enger Minutt"],
              h: ["eng Stonn", "enger Stonn"],
              d: ["een Dag", "engem Dag"],
              M: ["ee Mount", "engem Mount"],
              y: ["ee Joer", "engem Joer"]
            };
            return t ? r[n][0] : r[n][1];
          }
          function n(e) {
            return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
          }
          function a(e) {
            return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
          }
          function r(e) {
            if (((e = parseInt(e, 10)), isNaN(e))) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
              var t = e % 10;
              return r(0 === t ? e / 10 : t);
            }
            if (e < 1e4) {
              for (; e >= 10; ) e /= 10;
              return r(e);
            }
            return r((e /= 1e3));
          }
          e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "H:mm [Auer]",
              LTS: "H:mm:ss [Auer]",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm [Auer]",
              LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
              sameDay: "[Haut um] LT",
              sameElse: "L",
              nextDay: "[Muer um] LT",
              nextWeek: "dddd [um] LT",
              lastDay: "[Gëschter um] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 2:
                  case 4:
                    return "[Leschten] dddd [um] LT";
                  default:
                    return "[Leschte] dddd [um] LT";
                }
              }
            },
            relativeTime: {
              future: n,
              past: a,
              s: "e puer Sekonnen",
              m: t,
              mm: "%d Minutten",
              h: t,
              hh: "%d Stonnen",
              d: t,
              dd: "%d Deeg",
              M: t,
              MM: "%d Méint",
              y: t,
              yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5466: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
              return "ຕອນແລງ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
            },
            calendar: {
              sameDay: "[ມື້ນີ້ເວລາ] LT",
              nextDay: "[ມື້ອື່ນເວລາ] LT",
              nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
              lastDay: "[ມື້ວານນີ້ເວລາ] LT",
              lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "ອີກ %s",
              past: "%sຜ່ານມາ",
              s: "ບໍ່ເທົ່າໃດວິນາທີ",
              m: "1 ນາທີ",
              mm: "%d ນາທີ",
              h: "1 ຊົ່ວໂມງ",
              hh: "%d ຊົ່ວໂມງ",
              d: "1 ມື້",
              dd: "%d ມື້",
              M: "1 ເດືອນ",
              MM: "%d ເດືອນ",
              y: "1 ປີ",
              yy: "%d ປີ"
            },
            ordinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
              return "ທີ່" + e;
            }
          });
        })(n(381));
      },
      7010: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
          };
          function n(e, t, n, a) {
            return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes";
          }
          function a(e, t, n, a) {
            return t ? s(n)[0] : a ? s(n)[1] : s(n)[2];
          }
          function r(e) {
            return e % 10 == 0 || (e > 10 && e < 20);
          }
          function s(e) {
            return t[e].split("_");
          }
          function i(e, t, n, i) {
            var o = e + " ";
            return 1 === e ? o + a(e, t, n[0], i) : t ? o + (r(e) ? s(n)[1] : s(n)[0]) : i ? o + s(n)[1] : o + (r(e) ? s(n)[1] : s(n)[2]);
          }
          e.defineLocale("lt", {
            months: {
              format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
              standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
              format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
              standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
              isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY [m.] MMMM D [d.]",
              LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
              l: "YYYY-MM-DD",
              ll: "YYYY [m.] MMMM D [d.]",
              lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
              sameDay: "[Šiandien] LT",
              nextDay: "[Rytoj] LT",
              nextWeek: "dddd LT",
              lastDay: "[Vakar] LT",
              lastWeek: "[Praėjusį] dddd LT",
              sameElse: "L"
            },
            relativeTime: { future: "po %s", past: "prieš %s", s: n, m: a, mm: i, h: a, hh: i, d: a, dd: i, M: a, MM: i, y: a, yy: i },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
              return e + "-oji";
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      7595: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
          };
          function n(e, t, n) {
            return n ? (t % 10 == 1 && 11 !== t ? e[2] : e[3]) : t % 10 == 1 && 11 !== t ? e[0] : e[1];
          }
          function a(e, a, r) {
            return e + " " + n(t[r], e, a);
          }
          function r(e, a, r) {
            return n(t[r], e, a);
          }
          function s(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm";
          }
          e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY.",
              LL: "YYYY. [gada] D. MMMM",
              LLL: "YYYY. [gada] D. MMMM, HH:mm",
              LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
              sameDay: "[Šodien pulksten] LT",
              nextDay: "[Rīt pulksten] LT",
              nextWeek: "dddd [pulksten] LT",
              lastDay: "[Vakar pulksten] LT",
              lastWeek: "[Pagājušā] dddd [pulksten] LT",
              sameElse: "L"
            },
            relativeTime: { future: "pēc %s", past: "pirms %s", s, m: r, mm: a, h: r, hh: a, d: r, dd: a, M: r, MM: a, y: r, yy: a },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      9861: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              m: ["jedan minut", "jednog minuta"],
              mm: ["minut", "minuta", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mjesec", "mjeseca", "mjeseci"],
              yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var r = t.words[a];
              return 1 === a.length ? (n ? r[0] : r[1]) : e + " " + t.correctGrammaticalCase(e, r);
            }
          };
          e.defineLocale("me", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sjutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedjelje] [u] LT",
                  "[prošlog] [ponedjeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srijede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT"
                ][this.day()];
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "nekoliko sekundi",
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mjesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      5966: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[Денес во] LT",
              nextDay: "[Утре во] LT",
              nextWeek: "[Во] dddd [во] LT",
              lastDay: "[Вчера во] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Изминатата] dddd [во] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Изминатиот] dddd [во] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "после %s",
              past: "пред %s",
              s: "неколку секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дена",
              M: "месец",
              MM: "%d месеци",
              y: "година",
              yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      7341: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
              LT: "A h:mm -നു",
              LTS: "A h:mm:ss -നു",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm -നു",
              LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
              sameDay: "[ഇന്ന്] LT",
              nextDay: "[നാളെ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ഇന്നലെ] LT",
              lastWeek: "[കഴിഞ്ഞ] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s കഴിഞ്ഞ്",
              past: "%s മുൻപ്",
              s: "അൽപ നിമിഷങ്ങൾ",
              m: "ഒരു മിനിറ്റ്",
              mm: "%d മിനിറ്റ്",
              h: "ഒരു മണിക്കൂർ",
              hh: "%d മണിക്കൂർ",
              d: "ഒരു ദിവസം",
              dd: "%d ദിവസം",
              M: "ഒരു മാസം",
              MM: "%d മാസം",
              y: "ഒരു വർഷം",
              yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
              return 12 === e && (e = 0), ("രാത്രി" === t && e >= 4) || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e;
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി";
            }
          });
        })(n(381));
      },
      370: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
            n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
          function a(e, t, n, a) {
            var r = "";
            if (t)
              switch (n) {
                case "s":
                  r = "काही सेकंद";
                  break;
                case "m":
                  r = "एक मिनिट";
                  break;
                case "mm":
                  r = "%d मिनिटे";
                  break;
                case "h":
                  r = "एक तास";
                  break;
                case "hh":
                  r = "%d तास";
                  break;
                case "d":
                  r = "एक दिवस";
                  break;
                case "dd":
                  r = "%d दिवस";
                  break;
                case "M":
                  r = "एक महिना";
                  break;
                case "MM":
                  r = "%d महिने";
                  break;
                case "y":
                  r = "एक वर्ष";
                  break;
                case "yy":
                  r = "%d वर्षे";
              }
            else
              switch (n) {
                case "s":
                  r = "काही सेकंदां";
                  break;
                case "m":
                  r = "एका मिनिटा";
                  break;
                case "mm":
                  r = "%d मिनिटां";
                  break;
                case "h":
                  r = "एका तासा";
                  break;
                case "hh":
                  r = "%d तासां";
                  break;
                case "d":
                  r = "एका दिवसा";
                  break;
                case "dd":
                  r = "%d दिवसां";
                  break;
                case "M":
                  r = "एका महिन्या";
                  break;
                case "MM":
                  r = "%d महिन्यां";
                  break;
                case "y":
                  r = "एका वर्षा";
                  break;
                case "yy":
                  r = "%d वर्षां";
              }
            return r.replace(/%d/i, e);
          }
          e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm वाजता",
              LTS: "A h:mm:ss वाजता",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm वाजता",
              LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[उद्या] LT",
              nextWeek: "dddd, LT",
              lastDay: "[काल] LT",
              lastWeek: "[मागील] dddd, LT",
              sameElse: "L"
            },
            relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "रात्री" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सकाळी" === t
                  ? e
                  : "दुपारी" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "सायंकाळी" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री";
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      1237: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? (e >= 11 ? e : e + 12) : "petang" === t || "malam" === t ? e + 12 : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun"
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      9847: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? (e >= 11 ? e : e + 12) : "petang" === t || "malam" === t ? e + 12 : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun"
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      6165: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
            n = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };
          e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[ယနေ.] LT [မှာ]",
              nextDay: "[မနက်ဖြန်] LT [မှာ]",
              nextWeek: "dddd LT [မှာ]",
              lastDay: "[မနေ.က] LT [မှာ]",
              lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
              sameElse: "L"
            },
            relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်"
            },
            preparse: function (e) {
              return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      4924: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[forrige] dddd [kl.] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "om %s",
              past: "for %s siden",
              s: "noen sekunder",
              m: "ett minutt",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dager",
              M: "en måned",
              MM: "%d måneder",
              y: "ett år",
              yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      6744: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
            n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
          e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            longDateFormat: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, Aको h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राति" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "बिहान" === t
                  ? e
                  : "दिउँसो" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "साँझ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति";
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[भोलि] LT",
              nextWeek: "[आउँदो] dddd[,] LT",
              lastDay: "[हिजो] LT",
              lastWeek: "[गएको] dddd[,] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%sमा",
              past: "%s अगाडि",
              s: "केही क्षण",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "एक घण्टा",
              hh: "%d घण्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक बर्ष",
              yy: "%d बर्ष"
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      3901: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
          e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, a) {
              return /-MMM-/.test(a) ? n[e.month()] : t[e.month()];
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      3877: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
              sameDay: "[I dag klokka] LT",
              nextDay: "[I morgon klokka] LT",
              nextWeek: "dddd [klokka] LT",
              lastDay: "[I går klokka] LT",
              lastWeek: "[Føregåande] dddd [klokka] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "om %s",
              past: "for %s sidan",
              s: "nokre sekund",
              m: "eit minutt",
              mm: "%d minutt",
              h: "ein time",
              hh: "%d timar",
              d: "ein dag",
              dd: "%d dagar",
              M: "ein månad",
              MM: "%d månader",
              y: "eit år",
              yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      5858: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
            n = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };
          e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
              LT: "A h:mm ਵਜੇ",
              LTS: "A h:mm:ss ਵਜੇ",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
              LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
              sameDay: "[ਅਜ] LT",
              nextDay: "[ਕਲ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ਕਲ] LT",
              lastWeek: "[ਪਿਛਲੇ] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s ਵਿੱਚ",
              past: "%s ਪਿਛਲੇ",
              s: "ਕੁਝ ਸਕਿੰਟ",
              m: "ਇਕ ਮਿੰਟ",
              mm: "%d ਮਿੰਟ",
              h: "ਇੱਕ ਘੰਟਾ",
              hh: "%d ਘੰਟੇ",
              d: "ਇੱਕ ਦਿਨ",
              dd: "%d ਦਿਨ",
              M: "ਇੱਕ ਮਹੀਨਾ",
              MM: "%d ਮਹੀਨੇ",
              y: "ਇੱਕ ਸਾਲ",
              yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
              return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ਰਾਤ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ਸਵੇਰ" === t
                  ? e
                  : "ਦੁਪਹਿਰ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ਸ਼ਾਮ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      4495: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
          function a(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
          }
          function r(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "m":
                return t ? "minuta" : "minutę";
              case "mm":
                return r + (a(e) ? "minuty" : "minut");
              case "h":
                return t ? "godzina" : "godzinę";
              case "hh":
                return r + (a(e) ? "godziny" : "godzin");
              case "MM":
                return r + (a(e) ? "miesiące" : "miesięcy");
              case "yy":
                return r + (a(e) ? "lata" : "lat");
            }
          }
          e.defineLocale("pl", {
            months: function (e, a) {
              return "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()];
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Dziś o] LT",
              nextDay: "[Jutro o] LT",
              nextWeek: "[W] dddd [o] LT",
              lastDay: "[Wczoraj o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W zeszłą niedzielę o] LT";
                  case 3:
                    return "[W zeszłą środę o] LT";
                  case 6:
                    return "[W zeszłą sobotę o] LT";
                  default:
                    return "[W zeszły] dddd [o] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "%s temu",
              s: "kilka sekund",
              m: r,
              mm: r,
              h: r,
              hh: r,
              d: "1 dzień",
              dd: "%d dni",
              M: "miesiąc",
              MM: r,
              y: "rok",
              yy: r
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      7971: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "em %s",
              past: "%s atrás",
              s: "poucos segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
          });
        })(n(381));
      },
      9520: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      6459: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = " ";
            return (
              (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = " de "),
              e + a + { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[n]
            );
          }
          e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[azi la] LT",
              nextDay: "[mâine la] LT",
              nextWeek: "dddd [la] LT",
              lastDay: "[ieri la] LT",
              lastWeek: "[fosta] dddd [la] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "peste %s",
              past: "%s în urmă",
              s: "câteva secunde",
              m: "un minut",
              mm: t,
              h: "o oră",
              hh: t,
              d: "o zi",
              dd: t,
              M: "o lună",
              MM: t,
              y: "un an",
              yy: t
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      1793: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
          }
          function n(e, n, a) {
            return "m" === a
              ? n
                ? "минута"
                : "минуту"
              : e +
                  " " +
                  t(
                    {
                      mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                      hh: "час_часа_часов",
                      dd: "день_дня_дней",
                      MM: "месяц_месяца_месяцев",
                      yy: "год_года_лет"
                    }[a],
                    +e
                  );
          }
          var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
          e.defineLocale("ru", {
            months: {
              format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
              standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
              format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"),
              standalone: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_")
            },
            weekdays: {
              standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
              format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
              isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., HH:mm",
              LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
              sameDay: "[Сегодня в] LT",
              nextDay: "[Завтра в] LT",
              lastDay: "[Вчера в] LT",
              nextWeek: function (e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd [в] LT";
                }
              },
              lastWeek: function (e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd [в] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "через %s",
              past: "%s назад",
              s: "несколько секунд",
              m: n,
              mm: n,
              h: "час",
              hh: n,
              d: "день",
              dd: n,
              M: "месяц",
              MM: n,
              y: "год",
              yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
              return /^(дня|вечера)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
            },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                  return e + "-й";
                case "D":
                  return e + "-го";
                case "w":
                case "W":
                  return e + "-я";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      490: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("se", {
            months:
              "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
                "_"
              ),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "MMMM D. [b.] YYYY",
              LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
              LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
              sameDay: "[otne ti] LT",
              nextDay: "[ihttin ti] LT",
              nextWeek: "dddd [ti] LT",
              lastDay: "[ikte ti] LT",
              lastWeek: "[ovddit] dddd [ti] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s geažes",
              past: "maŋit %s",
              s: "moadde sekunddat",
              m: "okta minuhta",
              mm: "%d minuhtat",
              h: "okta diimmu",
              hh: "%d diimmut",
              d: "okta beaivi",
              dd: "%d beaivvit",
              M: "okta mánnu",
              MM: "%d mánut",
              y: "okta jahki",
              yy: "%d jagit"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      124: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            longDateFormat: {
              LT: "a h:mm",
              LTS: "a h:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY MMMM D",
              LLL: "YYYY MMMM D, a h:mm",
              LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
              sameDay: "[අද] LT[ට]",
              nextDay: "[හෙට] LT[ට]",
              nextWeek: "dddd LT[ට]",
              lastDay: "[ඊයේ] LT[ට]",
              lastWeek: "[පසුගිය] dddd LT[ට]",
              sameElse: "L"
            },
            relativeTime: {
              future: "%sකින්",
              past: "%sකට පෙර",
              s: "තත්පර කිහිපය",
              m: "මිනිත්තුව",
              mm: "මිනිත්තු %d",
              h: "පැය",
              hh: "පැය %d",
              d: "දිනය",
              dd: "දින %d",
              M: "මාසය",
              MM: "මාස %d",
              y: "වසර",
              yy: "වසර %d"
            },
            ordinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
              return e + " වැනි";
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
              return "ප.ව." === e || "පස් වරු" === e;
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "ප.ව." : "පස් වරු") : n ? "පෙ.ව." : "පෙර වරු";
            }
          });
        })(n(381));
      },
      4249: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
          function a(e) {
            return e > 1 && e < 5;
          }
          function r(e, t, n, r) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || r ? "pár sekúnd" : "pár sekundami";
              case "m":
                return t ? "minúta" : r ? "minútu" : "minútou";
              case "mm":
                return t || r ? s + (a(e) ? "minúty" : "minút") : s + "minútami";
              case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
              case "hh":
                return t || r ? s + (a(e) ? "hodiny" : "hodín") : s + "hodinami";
              case "d":
                return t || r ? "deň" : "dňom";
              case "dd":
                return t || r ? s + (a(e) ? "dni" : "dní") : s + "dňami";
              case "M":
                return t || r ? "mesiac" : "mesiacom";
              case "MM":
                return t || r ? s + (a(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
              case "y":
                return t || r ? "rok" : "rokom";
              case "yy":
                return t || r ? s + (a(e) ? "roky" : "rokov") : s + "rokmi";
            }
          }
          e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[dnes o] LT",
              nextDay: "[zajtra o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v nedeľu o] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [o] LT";
                  case 3:
                    return "[v stredu o] LT";
                  case 4:
                    return "[vo štvrtok o] LT";
                  case 5:
                    return "[v piatok o] LT";
                  case 6:
                    return "[v sobotu o] LT";
                }
              },
              lastDay: "[včera o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulú nedeľu o] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[minulý] dddd [o] LT";
                  case 3:
                    return "[minulú stredu o] LT";
                  case 6:
                    return "[minulú sobotu o] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "pred %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      4985: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var r = e + " ";
            switch (n) {
              case "s":
                return t || a ? "nekaj sekund" : "nekaj sekundami";
              case "m":
                return t ? "ena minuta" : "eno minuto";
              case "mm":
                return (r +=
                  1 === e
                    ? t
                      ? "minuta"
                      : "minuto"
                    : 2 === e
                    ? t || a
                      ? "minuti"
                      : "minutama"
                    : e < 5
                    ? t || a
                      ? "minute"
                      : "minutami"
                    : t || a
                    ? "minut"
                    : "minutami");
              case "h":
                return t ? "ena ura" : "eno uro";
              case "hh":
                return (r +=
                  1 === e
                    ? t
                      ? "ura"
                      : "uro"
                    : 2 === e
                    ? t || a
                      ? "uri"
                      : "urama"
                    : e < 5
                    ? t || a
                      ? "ure"
                      : "urami"
                    : t || a
                    ? "ur"
                    : "urami");
              case "d":
                return t || a ? "en dan" : "enim dnem";
              case "dd":
                return (r += 1 === e ? (t || a ? "dan" : "dnem") : 2 === e ? (t || a ? "dni" : "dnevoma") : t || a ? "dni" : "dnevi");
              case "M":
                return t || a ? "en mesec" : "enim mesecem";
              case "MM":
                return (r +=
                  1 === e
                    ? t || a
                      ? "mesec"
                      : "mesecem"
                    : 2 === e
                    ? t || a
                      ? "meseca"
                      : "mesecema"
                    : e < 5
                    ? t || a
                      ? "mesece"
                      : "meseci"
                    : t || a
                    ? "mesecev"
                    : "meseci");
              case "y":
                return t || a ? "eno leto" : "enim letom";
              case "yy":
                return (r +=
                  1 === e
                    ? t || a
                      ? "leto"
                      : "letom"
                    : 2 === e
                    ? t || a
                      ? "leti"
                      : "letoma"
                    : e < 5
                    ? t || a
                      ? "leta"
                      : "leti"
                    : t || a
                    ? "let"
                    : "leti");
            }
          }
          e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danes ob] LT",
              nextDay: "[jutri ob] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v] [nedeljo] [ob] LT";
                  case 3:
                    return "[v] [sredo] [ob] LT";
                  case 6:
                    return "[v] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[v] dddd [ob] LT";
                }
              },
              lastDay: "[včeraj ob] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";
                  case 3:
                    return "[prejšnjo] [sredo] [ob] LT";
                  case 6:
                    return "[prejšnjo] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prejšnji] dddd [ob] LT";
                }
              },
              sameElse: "L"
            },
            relativeTime: { future: "čez %s", past: "pred %s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      1104: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            meridiemParse: /PD|MD/,
            isPM: function (e) {
              return "M" === e.charAt(0);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "PD" : "MD";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Sot në] LT",
              nextDay: "[Nesër në] LT",
              nextWeek: "dddd [në] LT",
              lastDay: "[Dje në] LT",
              lastWeek: "dddd [e kaluar në] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "në %s",
              past: "%s më parë",
              s: "disa sekonda",
              m: "një minutë",
              mm: "%d minuta",
              h: "një orë",
              hh: "%d orë",
              d: "një ditë",
              dd: "%d ditë",
              M: "një muaj",
              MM: "%d muaj",
              y: "një vit",
              yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      9915: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              m: ["један минут", "једне минуте"],
              mm: ["минут", "минуте", "минута"],
              h: ["један сат", "једног сата"],
              hh: ["сат", "сата", "сати"],
              dd: ["дан", "дана", "дана"],
              MM: ["месец", "месеца", "месеци"],
              yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var r = t.words[a];
              return 1 === a.length ? (n ? r[0] : r[1]) : e + " " + t.correctGrammaticalCase(e, r);
            }
          };
          e.defineLocale("sr-cyrl", {
            months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
            monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
            weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
            weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
            weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[данас у] LT",
              nextDay: "[сутра у] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";
                  case 3:
                    return "[у] [среду] [у] LT";
                  case 6:
                    return "[у] [суботу] [у] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT";
                }
              },
              lastDay: "[јуче у] LT",
              lastWeek: function () {
                return [
                  "[прошле] [недеље] [у] LT",
                  "[прошлог] [понедељка] [у] LT",
                  "[прошлог] [уторка] [у] LT",
                  "[прошле] [среде] [у] LT",
                  "[прошлог] [четвртка] [у] LT",
                  "[прошлог] [петка] [у] LT",
                  "[прошле] [суботе] [у] LT"
                ][this.day()];
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "дан",
              dd: t.translate,
              M: "месец",
              MM: t.translate,
              y: "годину",
              yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      9131: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              m: ["jedan minut", "jedne minute"],
              mm: ["minut", "minute", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mesec", "meseca", "meseci"],
              yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var r = t.words[a];
              return 1 === a.length ? (n ? r[0] : r[1]) : e + " " + t.correctGrammaticalCase(e, r);
            }
          };
          e.defineLocale("sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";
                  case 3:
                    return "[u] [sredu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedelje] [u] LT",
                  "[prošlog] [ponedeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT"
                ][this.day()];
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      8760: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Idag] LT",
              nextDay: "[Imorgon] LT",
              lastDay: "[Igår] LT",
              nextWeek: "[På] dddd LT",
              lastWeek: "[I] dddd[s] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
              var t = e % 10;
              return e + (1 == ~~((e % 100) / 10) ? "e" : 1 === t || 2 === t ? "a" : "e");
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      1172: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[leo saa] LT",
              nextDay: "[kesho saa] LT",
              nextWeek: "[wiki ijayo] dddd [saat] LT",
              lastDay: "[jana] LT",
              lastWeek: "[wiki iliyopita] dddd [saat] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s baadaye",
              past: "tokea %s",
              s: "hivi punde",
              m: "dakika moja",
              mm: "dakika %d",
              h: "saa limoja",
              hh: "masaa %d",
              d: "siku moja",
              dd: "masiku %d",
              M: "mwezi mmoja",
              MM: "miezi %d",
              y: "mwaka mmoja",
              yy: "miaka %d"
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      7333: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
            n = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };
          e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, HH:mm",
              LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
              sameDay: "[இன்று] LT",
              nextDay: "[நாளை] LT",
              nextWeek: "dddd, LT",
              lastDay: "[நேற்று] LT",
              lastWeek: "[கடந்த வாரம்] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்"
            },
            ordinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
              return e + "வது";
            },
            preparse: function (e) {
              return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
              return e < 2
                ? " யாமம்"
                : e < 6
                ? " வைகறை"
                : e < 10
                ? " காலை"
                : e < 14
                ? " நண்பகல்"
                : e < 18
                ? " எற்பாடு"
                : e < 22
                ? " மாலை"
                : " யாமம்";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "யாமம்" === t ? (e < 2 ? e : e + 12) : "வைகறை" === t || "காலை" === t || ("நண்பகல்" === t && e >= 10) ? e : e + 12
              );
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      3110: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
              sameDay: "[నేడు] LT",
              nextDay: "[రేపు] LT",
              nextWeek: "dddd, LT",
              lastDay: "[నిన్న] LT",
              lastWeek: "[గత] dddd, LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s లో",
              past: "%s క్రితం",
              s: "కొన్ని క్షణాలు",
              m: "ఒక నిమిషం",
              mm: "%d నిమిషాలు",
              h: "ఒక గంట",
              hh: "%d గంటలు",
              d: "ఒక రోజు",
              dd: "%d రోజులు",
              M: "ఒక నెల",
              MM: "%d నెలలు",
              y: "ఒక సంవత్సరం",
              yy: "%d సంవత్సరాలు"
            },
            ordinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "రాత్రి" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ఉదయం" === t
                  ? e
                  : "మధ్యాహ్నం" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "సాయంత్రం" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి";
            },
            week: { dow: 0, doy: 6 }
          });
        })(n(381));
      },
      9041: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            longDateFormat: {
              LT: "H นาฬิกา m นาที",
              LTS: "H นาฬิกา m นาที s วินาที",
              L: "YYYY/MM/DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
              LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
              return "หลังเที่ยง" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
            },
            calendar: {
              sameDay: "[วันนี้ เวลา] LT",
              nextDay: "[พรุ่งนี้ เวลา] LT",
              nextWeek: "dddd[หน้า เวลา] LT",
              lastDay: "[เมื่อวานนี้ เวลา] LT",
              lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "อีก %s",
              past: "%sที่แล้ว",
              s: "ไม่กี่วินาที",
              m: "1 นาที",
              mm: "%d นาที",
              h: "1 ชั่วโมง",
              hh: "%d ชั่วโมง",
              d: "1 วัน",
              dd: "%d วัน",
              M: "1 เดือน",
              MM: "%d เดือน",
              y: "1 ปี",
              yy: "%d ปี"
            }
          });
        })(n(381));
      },
      5768: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Ngayon sa] LT",
              nextDay: "[Bukas sa] LT",
              nextWeek: "dddd [sa] LT",
              lastDay: "[Kahapon sa] LT",
              lastWeek: "dddd [huling linggo] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      9444: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
          function n(e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "leS"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "waQ"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "nem"
                : t + " pIq");
          }
          function a(e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "Hu’"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "wen"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "ben"
                : t + " ret");
          }
          function r(e, t, n, a) {
            var r = s(e);
            switch (n) {
              case "mm":
                return r + " tup";
              case "hh":
                return r + " rep";
              case "dd":
                return r + " jaj";
              case "MM":
                return r + " jar";
              case "yy":
                return r + " DIS";
            }
          }
          function s(e) {
            var n = Math.floor((e % 1e3) / 100),
              a = Math.floor((e % 100) / 10),
              r = e % 10,
              s = "";
            return (
              n > 0 && (s += t[n] + "vatlh"),
              a > 0 && (s += ("" !== s ? " " : "") + t[a] + "maH"),
              r > 0 && (s += ("" !== s ? " " : "") + t[r]),
              "" === s ? "pagh" : s
            );
          }
          e.defineLocale("tlh", {
            months:
              "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
                "_"
              ),
            monthsShort:
              "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
                "_"
              ),
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[DaHjaj] LT",
              nextDay: "[wa’leS] LT",
              nextWeek: "LLL",
              lastDay: "[wa’Hu’] LT",
              lastWeek: "LLL",
              sameElse: "L"
            },
            relativeTime: {
              future: n,
              past: a,
              s: "puS lup",
              m: "wa’ tup",
              mm: r,
              h: "wa’ rep",
              hh: r,
              d: "wa’ jaj",
              dd: r,
              M: "wa’ jar",
              MM: r,
              y: "wa’ DIS",
              yy: r
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      2397: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
          };
          e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[yarın saat] LT",
              nextWeek: "[haftaya] dddd [saat] LT",
              lastDay: "[dün] LT",
              lastWeek: "[geçen hafta] dddd [saat] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl"
            },
            ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function (e) {
              if (0 === e) return e + "'ıncı";
              var n = e % 10,
                a = (e % 100) - n,
                r = e >= 100 ? 100 : null;
              return e + (t[n] || t[a] || t[r]);
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      8254: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var r = {
              s: ["viensas secunds", "'iensas secunds"],
              m: ["'n míut", "'iens míut"],
              mm: [e + " míuts", e + " míuts"],
              h: ["'n þora", "'iensa þora"],
              hh: [e + " þoras", e + " þoras"],
              d: ["'n ziua", "'iensa ziua"],
              dd: [e + " ziuas", e + " ziuas"],
              M: ["'n mes", "'iens mes"],
              MM: [e + " mesen", e + " mesen"],
              y: ["'n ar", "'iens ar"],
              yy: [e + " ars", e + " ars"]
            };
            return a || t ? r[n][0] : r[n][1];
          }
          e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM [dallas] YYYY",
              LLL: "D. MMMM [dallas] YYYY HH.mm",
              LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
              return "d'o" === e.toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
            },
            calendar: {
              sameDay: "[oxhi à] LT",
              nextDay: "[demà à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[ieiri à] LT",
              lastWeek: "[sür el] dddd [lasteu à] LT",
              sameElse: "L"
            },
            relativeTime: { future: "osprei %s", past: "ja%s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      699: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[asdkh g] LT",
              nextDay: "[aska g] LT",
              nextWeek: "dddd [g] LT",
              lastDay: "[assant g] LT",
              lastWeek: "dddd [g] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "dadkh s yan %s",
              past: "yan %s",
              s: "imik",
              m: "minuḍ",
              mm: "%d minuḍ",
              h: "saɛa",
              hh: "%d tassaɛin",
              d: "ass",
              dd: "%d ossan",
              M: "ayowr",
              MM: "%d iyyirn",
              y: "asgas",
              yy: "%d isgasn"
            },
            week: { dow: 6, doy: 12 }
          });
        })(n(381));
      },
      1106: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
              nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
              nextWeek: "dddd [ⴴ] LT",
              lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
              lastWeek: "dddd [ⴴ] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
              past: "ⵢⴰⵏ %s",
              s: "ⵉⵎⵉⴽ",
              m: "ⵎⵉⵏⵓⴺ",
              mm: "%d ⵎⵉⵏⵓⴺ",
              h: "ⵙⴰⵄⴰ",
              hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
              d: "ⴰⵙⵙ",
              dd: "%d oⵙⵙⴰⵏ",
              M: "ⴰⵢoⵓⵔ",
              MM: "%d ⵉⵢⵢⵉⵔⵏ",
              y: "ⴰⵙⴳⴰⵙ",
              yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: { dow: 6, doy: 12 }
          });
        })(n(381));
      },
      7691: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
          }
          function n(e, n, a) {
            return "m" === a
              ? n
                ? "хвилина"
                : "хвилину"
              : "h" === a
              ? n
                ? "година"
                : "годину"
              : e +
                " " +
                t(
                  {
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                  }[a],
                  +e
                );
          }
          function a(e, t) {
            return {
              nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
              accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
              genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][
              e.day()
            ];
          }
          function r(e) {
            return function () {
              return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
            };
          }
          e.defineLocale("uk", {
            months: {
              format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
              standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: a,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY р.",
              LLL: "D MMMM YYYY р., HH:mm",
              LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
              sameDay: r("[Сьогодні "),
              nextDay: r("[Завтра "),
              lastDay: r("[Вчора "),
              nextWeek: r("[У] dddd ["),
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return r("[Минулої] dddd [").call(this);
                  case 1:
                  case 2:
                  case 4:
                    return r("[Минулого] dddd [").call(this);
                }
              },
              sameElse: "L"
            },
            relativeTime: {
              future: "за %s",
              past: "%s тому",
              s: "декілька секунд",
              m: n,
              mm: n,
              h: "годину",
              hh: n,
              d: "день",
              dd: n,
              M: "місяць",
              MM: n,
              y: "рік",
              yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
              return /^(дня|вечора)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return e + "-й";
                case "D":
                  return e + "-го";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      6791: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
              sameDay: "[Бугун соат] LT [да]",
              nextDay: "[Эртага] LT [да]",
              nextWeek: "dddd [куни соат] LT [да]",
              lastDay: "[Кеча соат] LT [да]",
              lastWeek: "[Утган] dddd [куни соат] LT [да]",
              sameElse: "L"
            },
            relativeTime: {
              future: "Якин %s ичида",
              past: "Бир неча %s олдин",
              s: "фурсат",
              m: "бир дакика",
              mm: "%d дакика",
              h: "бир соат",
              hh: "%d соат",
              d: "бир кун",
              dd: "%d кун",
              M: "бир ой",
              MM: "%d ой",
              y: "бир йил",
              yy: "%d йил"
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      5666: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
              return /^ch$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [năm] YYYY",
              LLL: "D MMMM [năm] YYYY HH:mm",
              LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
              l: "DD/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
              sameDay: "[Hôm nay lúc] LT",
              nextDay: "[Ngày mai lúc] LT",
              nextWeek: "dddd [tuần tới lúc] LT",
              lastDay: "[Hôm qua lúc] LT",
              lastWeek: "dddd [tuần rồi lúc] LT",
              sameElse: "L"
            },
            relativeTime: {
              future: "%s tới",
              past: "%s trước",
              s: "vài giây",
              m: "một phút",
              mm: "%d phút",
              h: "một giờ",
              hh: "%d giờ",
              d: "một ngày",
              dd: "%d ngày",
              M: "một tháng",
              MM: "%d tháng",
              y: "một năm",
              yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      3839: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "Ah点mm分",
              LTS: "Ah点m分s秒",
              L: "YYYY-MM-DD",
              LL: "YYYY年MMMD日",
              LLL: "YYYY年MMMD日Ah点mm分",
              LLLL: "YYYY年MMMD日ddddAh点mm分",
              l: "YYYY-MM-DD",
              ll: "YYYY年MMMD日",
              lll: "YYYY年MMMD日Ah点mm分",
              llll: "YYYY年MMMD日ddddAh点mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
            },
            calendar: {
              sameDay: function () {
                return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT";
              },
              nextDay: function () {
                return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT";
              },
              lastDay: function () {
                return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT";
              },
              nextWeek: function () {
                var t, n;
                return (
                  (t = e().startOf("week")),
                  (n = this.unix() - t.unix() >= 604800 ? "[下]" : "[本]"),
                  0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                );
              },
              lastWeek: function () {
                var t, n;
                return (
                  (t = e().startOf("week")),
                  (n = this.unix() < t.unix() ? "[上]" : "[本]"),
                  0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                );
              },
              sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "周";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s内",
              past: "%s前",
              s: "几秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年"
            },
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      4152: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "Ah點mm分",
              LTS: "Ah點m分s秒",
              L: "YYYY年MMMD日",
              LL: "YYYY年MMMD日",
              LLL: "YYYY年MMMD日Ah點mm分",
              LLLL: "YYYY年MMMD日ddddAh點mm分",
              l: "YYYY年MMMD日",
              ll: "YYYY年MMMD日",
              lll: "YYYY年MMMD日Ah點mm分",
              llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "早上" === t || "上午" === t ? e : "中午" === t ? (e >= 11 ? e : e + 12) : "下午" === t || "晚上" === t ? e + 12 : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: "[下]ddddLT",
              lastDay: "[昨天]LT",
              lastWeek: "[上]ddddLT",
              sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              m: "一分鐘",
              mm: "%d分鐘",
              h: "一小時",
              hh: "%d小時",
              d: "一天",
              dd: "%d天",
              M: "一個月",
              MM: "%d個月",
              y: "一年",
              yy: "%d年"
            }
          });
        })(n(381));
      },
      6700: (e, t, n) => {
        var a = {
          "./af": 2786,
          "./af.js": 2786,
          "./ar": 867,
          "./ar-ma": 7702,
          "./ar-ma.js": 7702,
          "./ar-sa": 6040,
          "./ar-sa.js": 6040,
          "./ar-tn": 7100,
          "./ar-tn.js": 7100,
          "./ar.js": 867,
          "./az": 1083,
          "./az.js": 1083,
          "./be": 9808,
          "./be.js": 9808,
          "./bg": 8338,
          "./bg.js": 8338,
          "./bn": 8905,
          "./bn.js": 8905,
          "./bo": 1560,
          "./bo.js": 1560,
          "./br": 1278,
          "./br.js": 1278,
          "./bs": 622,
          "./bs.js": 622,
          "./ca": 2468,
          "./ca.js": 2468,
          "./cs": 5822,
          "./cs.js": 5822,
          "./cv": 877,
          "./cv.js": 877,
          "./cy": 7373,
          "./cy.js": 7373,
          "./da": 4780,
          "./da.js": 4780,
          "./de": 9740,
          "./de-at": 217,
          "./de-at.js": 217,
          "./de.js": 9740,
          "./dv": 5300,
          "./dv.js": 5300,
          "./el": 837,
          "./el.js": 837,
          "./en-au": 8348,
          "./en-au.js": 8348,
          "./en-ca": 7925,
          "./en-ca.js": 7925,
          "./en-gb": 2243,
          "./en-gb.js": 2243,
          "./en-ie": 6436,
          "./en-ie.js": 6436,
          "./en-nz": 6319,
          "./en-nz.js": 6319,
          "./eo": 2915,
          "./eo.js": 2915,
          "./es": 5655,
          "./es.js": 5655,
          "./et": 5603,
          "./et.js": 5603,
          "./eu": 7763,
          "./eu.js": 7763,
          "./fa": 6959,
          "./fa.js": 6959,
          "./fi": 1897,
          "./fi.js": 1897,
          "./fo": 4694,
          "./fo.js": 4694,
          "./fr": 5596,
          "./fr-ca": 3049,
          "./fr-ca.js": 3049,
          "./fr-ch": 2330,
          "./fr-ch.js": 2330,
          "./fr.js": 5596,
          "./fy": 5044,
          "./fy.js": 5044,
          "./gd": 2101,
          "./gd.js": 2101,
          "./gl": 8794,
          "./gl.js": 8794,
          "./he": 4206,
          "./he.js": 4206,
          "./hi": 94,
          "./hi.js": 94,
          "./hr": 316,
          "./hr.js": 316,
          "./hu": 2138,
          "./hu.js": 2138,
          "./hy-am": 1423,
          "./hy-am.js": 1423,
          "./id": 9218,
          "./id.js": 9218,
          "./is": 135,
          "./is.js": 135,
          "./it": 626,
          "./it.js": 626,
          "./ja": 9183,
          "./ja.js": 9183,
          "./jv": 4286,
          "./jv.js": 4286,
          "./ka": 2105,
          "./ka.js": 2105,
          "./kk": 7772,
          "./kk.js": 7772,
          "./km": 8758,
          "./km.js": 8758,
          "./ko": 3730,
          "./ko.js": 3730,
          "./lb": 6841,
          "./lb.js": 6841,
          "./lo": 5466,
          "./lo.js": 5466,
          "./lt": 7010,
          "./lt.js": 7010,
          "./lv": 7595,
          "./lv.js": 7595,
          "./me": 9861,
          "./me.js": 9861,
          "./mk": 5966,
          "./mk.js": 5966,
          "./ml": 7341,
          "./ml.js": 7341,
          "./mr": 370,
          "./mr.js": 370,
          "./ms": 9847,
          "./ms-my": 1237,
          "./ms-my.js": 1237,
          "./ms.js": 9847,
          "./my": 6165,
          "./my.js": 6165,
          "./nb": 4924,
          "./nb.js": 4924,
          "./ne": 6744,
          "./ne.js": 6744,
          "./nl": 3901,
          "./nl.js": 3901,
          "./nn": 3877,
          "./nn.js": 3877,
          "./pa-in": 5858,
          "./pa-in.js": 5858,
          "./pl": 4495,
          "./pl.js": 4495,
          "./pt": 9520,
          "./pt-br": 7971,
          "./pt-br.js": 7971,
          "./pt.js": 9520,
          "./ro": 6459,
          "./ro.js": 6459,
          "./ru": 1793,
          "./ru.js": 1793,
          "./se": 490,
          "./se.js": 490,
          "./si": 124,
          "./si.js": 124,
          "./sk": 4249,
          "./sk.js": 4249,
          "./sl": 4985,
          "./sl.js": 4985,
          "./sq": 1104,
          "./sq.js": 1104,
          "./sr": 9131,
          "./sr-cyrl": 9915,
          "./sr-cyrl.js": 9915,
          "./sr.js": 9131,
          "./sv": 8760,
          "./sv.js": 8760,
          "./sw": 1172,
          "./sw.js": 1172,
          "./ta": 7333,
          "./ta.js": 7333,
          "./te": 3110,
          "./te.js": 3110,
          "./th": 9041,
          "./th.js": 9041,
          "./tl-ph": 5768,
          "./tl-ph.js": 5768,
          "./tlh": 9444,
          "./tlh.js": 9444,
          "./tr": 2397,
          "./tr.js": 2397,
          "./tzl": 8254,
          "./tzl.js": 8254,
          "./tzm": 1106,
          "./tzm-latn": 699,
          "./tzm-latn.js": 699,
          "./tzm.js": 1106,
          "./uk": 7691,
          "./uk.js": 7691,
          "./uz": 6791,
          "./uz.js": 6791,
          "./vi": 5666,
          "./vi.js": 5666,
          "./zh-cn": 3839,
          "./zh-cn.js": 3839,
          "./zh-tw": 4152,
          "./zh-tw.js": 4152
        };
        function r(e) {
          var t = s(e);
          return n(t);
        }
        function s(e) {
          if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return a[e];
        }
        (r.keys = function () {
          return Object.keys(a);
        }),
          (r.resolve = s),
          (e.exports = r),
          (r.id = 6700);
      },
      381: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          "use strict";
          var t;
          function a() {
            return t.apply(null, arguments);
          }
          function r(e) {
            t = e;
          }
          function s(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
          }
          function i(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
          }
          function o(e, t) {
            var n,
              a = [];
            for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
            return a;
          }
          function d(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function u(e, t) {
            for (var n in t) d(t, n) && (e[n] = t[n]);
            return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e;
          }
          function _(e, t, n, a) {
            return Ot(e, t, n, a, !0).utc();
          }
          function l() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1
            };
          }
          function c(e) {
            return null == e._pf && (e._pf = l()), e._pf;
          }
          function m(e) {
            if (null == e._isValid) {
              var t = c(e);
              (e._isValid = !(
                isNaN(e._d.getTime()) ||
                !(t.overflow < 0) ||
                t.empty ||
                t.invalidMonth ||
                t.invalidWeekday ||
                t.nullInput ||
                t.invalidFormat ||
                t.userInvalidated
              )),
                e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour);
            }
            return e._isValid;
          }
          function h(e) {
            var t = _(NaN);
            return null != e ? u(c(t), e) : (c(t).userInvalidated = !0), t;
          }
          function f(e) {
            return void 0 === e;
          }
          var p = (a.momentProperties = []);
          function M(e, t) {
            var n, a, r;
            if (
              (f(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
              f(t._i) || (e._i = t._i),
              f(t._f) || (e._f = t._f),
              f(t._l) || (e._l = t._l),
              f(t._strict) || (e._strict = t._strict),
              f(t._tzm) || (e._tzm = t._tzm),
              f(t._isUTC) || (e._isUTC = t._isUTC),
              f(t._offset) || (e._offset = t._offset),
              f(t._pf) || (e._pf = c(t)),
              f(t._locale) || (e._locale = t._locale),
              p.length > 0)
            )
              for (n in p) f((r = t[(a = p[n])])) || (e[a] = r);
            return e;
          }
          var y = !1;
          function L(e) {
            M(this, e), (this._d = new Date(null != e._d ? e._d.getTime() : NaN)), !1 === y && ((y = !0), a.updateOffset(this), (y = !1));
          }
          function g(e) {
            return e instanceof L || (null != e && null != e._isAMomentObject);
          }
          function Y(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
          }
          function k(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = Y(t)), n;
          }
          function v(e, t, n) {
            var a,
              r = Math.min(e.length, t.length),
              s = Math.abs(e.length - t.length),
              i = 0;
            for (a = 0; a < r; a++) ((n && e[a] !== t[a]) || (!n && k(e[a]) !== k(t[a]))) && i++;
            return i + s;
          }
          function D(e) {
            !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
          }
          function b(e, t) {
            var n = !0;
            return u(function () {
              return (
                n && (D(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + new Error().stack), (n = !1)),
                t.apply(this, arguments)
              );
            }, t);
          }
          var w = {};
          function T(e, t) {
            w[e] || (D(t), (w[e] = !0));
          }
          function S(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
          }
          function j(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          }
          function x(e) {
            var t, n;
            for (n in e) S((t = e[n])) ? (this[n] = t) : (this["_" + n] = t);
            (this._config = e), (this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source));
          }
          function H(e, t) {
            var n,
              a = u({}, e);
            for (n in t)
              d(t, n) && (j(e[n]) && j(t[n]) ? ((a[n] = {}), u(a[n], e[n]), u(a[n], t[n])) : null != t[n] ? (a[n] = t[n]) : delete a[n]);
            return a;
          }
          function P(e) {
            null != e && this.set(e);
          }
          a.suppressDeprecationWarnings = !1;
          var O,
            A = {};
          function E(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function F(e) {
            for (var t, n, a, r, s = 0; s < e.length; ) {
              for (t = (r = E(e[s]).split("-")).length, n = (n = E(e[s + 1])) ? n.split("-") : null; t > 0; ) {
                if ((a = W(r.slice(0, t).join("-")))) return a;
                if (n && n.length >= t && v(r, n, !0) >= t - 1) break;
                t--;
              }
              s++;
            }
            return null;
          }
          function W(t) {
            var a = null;
            if (!A[t] && e && e.exports)
              try {
                (a = O._abbr), n(6700)("./" + t), N(a);
              } catch (e) {}
            return A[t];
          }
          function N(e, t) {
            var n;
            return e && (n = f(t) ? R(e) : C(e, t)) && (O = n), O._abbr;
          }
          function C(e, t) {
            return null !== t
              ? ((t.abbr = e),
                null != A[e]
                  ? (T(
                      "defineLocaleOverride",
                      "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"
                    ),
                    (t = H(A[e]._config, t)))
                  : null != t.parentLocale &&
                    (null != A[t.parentLocale]
                      ? (t = H(A[t.parentLocale]._config, t))
                      : T("parentLocaleUndefined", "specified parentLocale is not defined yet")),
                (A[e] = new P(t)),
                N(e),
                A[e])
              : (delete A[e], null);
          }
          function z(e, t) {
            var n;
            return (
              null != t
                ? (null != A[e] && (t = H(A[e]._config, t)), ((n = new P(t)).parentLocale = A[e]), (A[e] = n), N(e))
                : null != A[e] && (null != A[e].parentLocale ? (A[e] = A[e].parentLocale) : null != A[e] && delete A[e]),
              A[e]
            );
          }
          function R(e) {
            var t;
            if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return O;
            if (!s(e)) {
              if ((t = W(e))) return t;
              e = [e];
            }
            return F(e);
          }
          function J() {
            return Object.keys(A);
          }
          var I = {};
          function U(e, t) {
            var n = e.toLowerCase();
            I[n] = I[n + "s"] = I[t] = e;
          }
          function G(e) {
            return "string" == typeof e ? I[e] || I[e.toLowerCase()] : void 0;
          }
          function V(e) {
            var t,
              n,
              a = {};
            for (n in e) d(e, n) && (t = G(n)) && (a[t] = e[n]);
            return a;
          }
          function $(e, t) {
            return function (n) {
              return null != n ? (B(this, e, n), a.updateOffset(this, t), this) : q(this, e);
            };
          }
          function q(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
          }
          function B(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
          }
          function K(e, t) {
            var n;
            if ("object" == typeof e) for (n in e) this.set(n, e[n]);
            else if (S(this[(e = G(e))])) return this[e](t);
            return this;
          }
          function Z(e, t, n) {
            var a = "" + Math.abs(e),
              r = t - a.length;
            return (e >= 0 ? (n ? "+" : "") : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
          }
          var Q =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            X = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            ee = {},
            te = {};
          function ne(e, t, n, a) {
            var r = a;
            "string" == typeof a &&
              (r = function () {
                return this[a]();
              }),
              e && (te[e] = r),
              t &&
                (te[t[0]] = function () {
                  return Z(r.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (te[n] = function () {
                  return this.localeData().ordinal(r.apply(this, arguments), e);
                });
          }
          function ae(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
          }
          function re(e) {
            var t,
              n,
              a = e.match(Q);
            for (t = 0, n = a.length; t < n; t++) te[a[t]] ? (a[t] = te[a[t]]) : (a[t] = ae(a[t]));
            return function (r) {
              var s = "";
              for (t = 0; t < n; t++) s += a[t] instanceof Function ? a[t].call(r, e) : a[t];
              return s;
            };
          }
          function se(e, t) {
            return e.isValid() ? ((t = ie(t, e.localeData())), (ee[t] = ee[t] || re(t)), ee[t](e)) : e.localeData().invalidDate();
          }
          function ie(e, t) {
            var n = 5;
            function a(e) {
              return t.longDateFormat(e) || e;
            }
            for (X.lastIndex = 0; n >= 0 && X.test(e); ) (e = e.replace(X, a)), (X.lastIndex = 0), (n -= 1);
            return e;
          }
          var oe = /\d/,
            de = /\d\d/,
            ue = /\d{3}/,
            _e = /\d{4}/,
            le = /[+-]?\d{6}/,
            ce = /\d\d?/,
            me = /\d\d\d\d?/,
            he = /\d\d\d\d\d\d?/,
            fe = /\d{1,3}/,
            pe = /\d{1,4}/,
            Me = /[+-]?\d{1,6}/,
            ye = /\d+/,
            Le = /[+-]?\d+/,
            ge = /Z|[+-]\d\d:?\d\d/gi,
            Ye = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ke = /[+-]?\d+(\.\d{1,3})?/,
            ve = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            De = {};
          function be(e, t, n) {
            De[e] = S(t)
              ? t
              : function (e, a) {
                  return e && n ? n : t;
                };
          }
          function we(e, t) {
            return d(De, e) ? De[e](t._strict, t._locale) : new RegExp(Te(e));
          }
          function Te(e) {
            return Se(
              e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, r) {
                return t || n || a || r;
              })
            );
          }
          function Se(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          var je = {};
          function xe(e, t) {
            var n,
              a = t;
            for (
              "string" == typeof e && (e = [e]),
                "number" == typeof t &&
                  (a = function (e, n) {
                    n[t] = k(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              je[e[n]] = a;
          }
          function He(e, t) {
            xe(e, function (e, n, a, r) {
              (a._w = a._w || {}), t(e, a._w, a, r);
            });
          }
          function Pe(e, t, n) {
            null != t && d(je, e) && je[e](t, n._a, n, e);
          }
          var Oe = 0,
            Ae = 1,
            Ee = 2,
            Fe = 3,
            We = 4,
            Ne = 5,
            Ce = 6,
            ze = 7,
            Re = 8;
          function Je(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
          }
          ne("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
            ne("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            ne("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            U("month", "M"),
            be("M", ce),
            be("MM", ce, de),
            be("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            be("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            xe(["M", "MM"], function (e, t) {
              t[Ae] = k(e) - 1;
            }),
            xe(["MMM", "MMMM"], function (e, t, n, a) {
              var r = n._locale.monthsParse(e, a, n._strict);
              null != r ? (t[Ae] = r) : (c(n).invalidMonth = e);
            });
          var Ie = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            Ue = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
          function Ge(e, t) {
            return s(this._months) ? this._months[e.month()] : this._months[Ie.test(t) ? "format" : "standalone"][e.month()];
          }
          var Ve = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
          function $e(e, t) {
            return s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ie.test(t) ? "format" : "standalone"][e.month()];
          }
          function qe(e, t, n) {
            var a, r, s;
            for (
              this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), a = 0;
              a < 12;
              a++
            ) {
              if (
                ((r = _([2e3, a])),
                n &&
                  !this._longMonthsParse[a] &&
                  ((this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i")),
                  (this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i"))),
                n ||
                  this._monthsParse[a] ||
                  ((s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
                  (this._monthsParse[a] = new RegExp(s.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[a].test(e))
              )
                return a;
              if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
              if (!n && this._monthsParse[a].test(e)) return a;
            }
          }
          function Be(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
              if (/^\d+$/.test(t)) t = k(t);
              else if ("number" != typeof (t = e.localeData().monthsParse(t))) return e;
            return (n = Math.min(e.date(), Je(e.year(), t))), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
          }
          function Ke(e) {
            return null != e ? (Be(this, e), a.updateOffset(this, !0), this) : q(this, "Month");
          }
          function Ze() {
            return Je(this.year(), this.month());
          }
          var Qe = ve;
          function Xe(e) {
            return this._monthsParseExact
              ? (d(this, "_monthsRegex") || nt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex;
          }
          var et = ve;
          function tt(e) {
            return this._monthsParseExact
              ? (d(this, "_monthsRegex") || nt.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
              : this._monthsStrictRegex && e
              ? this._monthsStrictRegex
              : this._monthsRegex;
          }
          function nt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a = [],
              r = [],
              s = [];
            for (t = 0; t < 12; t++)
              (n = _([2e3, t])),
                a.push(this.monthsShort(n, "")),
                r.push(this.months(n, "")),
                s.push(this.months(n, "")),
                s.push(this.monthsShort(n, ""));
            for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) (a[t] = Se(a[t])), (r[t] = Se(r[t])), (s[t] = Se(s[t]));
            (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")$", "i")),
              (this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")$", "i"));
          }
          function at(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === c(e).overflow &&
                ((t =
                  n[Ae] < 0 || n[Ae] > 11
                    ? Ae
                    : n[Ee] < 1 || n[Ee] > Je(n[Oe], n[Ae])
                    ? Ee
                    : n[Fe] < 0 || n[Fe] > 24 || (24 === n[Fe] && (0 !== n[We] || 0 !== n[Ne] || 0 !== n[Ce]))
                    ? Fe
                    : n[We] < 0 || n[We] > 59
                    ? We
                    : n[Ne] < 0 || n[Ne] > 59
                    ? Ne
                    : n[Ce] < 0 || n[Ce] > 999
                    ? Ce
                    : -1),
                c(e)._overflowDayOfYear && (t < Oe || t > Ee) && (t = Ee),
                c(e)._overflowWeeks && -1 === t && (t = ze),
                c(e)._overflowWeekday && -1 === t && (t = Re),
                (c(e).overflow = t)),
              e
            );
          }
          var rt =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            st =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            it = /Z|[+-]\d\d(?::?\d\d)?/,
            ot = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/]
            ],
            dt = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/]
            ],
            ut = /^\/?Date\((\-?\d+)/i;
          function _t(e) {
            var t,
              n,
              a,
              r,
              s,
              i,
              o = e._i,
              d = rt.exec(o) || st.exec(o);
            if (d) {
              for (c(e).iso = !0, t = 0, n = ot.length; t < n; t++)
                if (ot[t][1].exec(d[1])) {
                  (r = ot[t][0]), (a = !1 !== ot[t][2]);
                  break;
                }
              if (null == r) return void (e._isValid = !1);
              if (d[3]) {
                for (t = 0, n = dt.length; t < n; t++)
                  if (dt[t][1].exec(d[3])) {
                    s = (d[2] || " ") + dt[t][0];
                    break;
                  }
                if (null == s) return void (e._isValid = !1);
              }
              if (!a && null != s) return void (e._isValid = !1);
              if (d[4]) {
                if (!it.exec(d[4])) return void (e._isValid = !1);
                i = "Z";
              }
              (e._f = r + (s || "") + (i || "")), wt(e);
            } else e._isValid = !1;
          }
          function lt(e) {
            var t = ut.exec(e._i);
            null === t ? (_t(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e))) : (e._d = new Date(+t[1]));
          }
          function ct(e, t, n, a, r, s, i) {
            var o = new Date(e, t, n, a, r, s, i);
            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o;
          }
          function mt(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
          }
          function ht(e) {
            return ft(e) ? 366 : 365;
          }
          function ft(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          (a.createFromInputFallback = b(
            "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            ne("Y", 0, 0, function () {
              var e = this.year();
              return e <= 9999 ? "" + e : "+" + e;
            }),
            ne(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            ne(0, ["YYYY", 4], 0, "year"),
            ne(0, ["YYYYY", 5], 0, "year"),
            ne(0, ["YYYYYY", 6, !0], 0, "year"),
            U("year", "y"),
            be("Y", Le),
            be("YY", ce, de),
            be("YYYY", pe, _e),
            be("YYYYY", Me, le),
            be("YYYYYY", Me, le),
            xe(["YYYYY", "YYYYYY"], Oe),
            xe("YYYY", function (e, t) {
              t[Oe] = 2 === e.length ? a.parseTwoDigitYear(e) : k(e);
            }),
            xe("YY", function (e, t) {
              t[Oe] = a.parseTwoDigitYear(e);
            }),
            xe("Y", function (e, t) {
              t[Oe] = parseInt(e, 10);
            }),
            (a.parseTwoDigitYear = function (e) {
              return k(e) + (k(e) > 68 ? 1900 : 2e3);
            });
          var pt = $("FullYear", !1);
          function Mt() {
            return ft(this.year());
          }
          function yt(e, t, n) {
            var a = 7 + t - n;
            return (-(7 + mt(e, 0, a).getUTCDay() - t) % 7) + a - 1;
          }
          function Lt(e, t, n, a, r) {
            var s,
              i,
              o = 1 + 7 * (t - 1) + ((7 + n - a) % 7) + yt(e, a, r);
            return (
              o <= 0 ? (i = ht((s = e - 1)) + o) : o > ht(e) ? ((s = e + 1), (i = o - ht(e))) : ((s = e), (i = o)),
              { year: s, dayOfYear: i }
            );
          }
          function gt(e, t, n) {
            var a,
              r,
              s = yt(e.year(), t, n),
              i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return (
              i < 1
                ? (a = i + Yt((r = e.year() - 1), t, n))
                : i > Yt(e.year(), t, n)
                ? ((a = i - Yt(e.year(), t, n)), (r = e.year() + 1))
                : ((r = e.year()), (a = i)),
              { week: a, year: r }
            );
          }
          function Yt(e, t, n) {
            var a = yt(e, t, n),
              r = yt(e + 1, t, n);
            return (ht(e) - a + r) / 7;
          }
          function kt(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function vt(e) {
            var t = new Date(a.now());
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()];
          }
          function Dt(e) {
            var t,
              n,
              a,
              r,
              s = [];
            if (!e._d) {
              for (
                a = vt(e),
                  e._w && null == e._a[Ee] && null == e._a[Ae] && bt(e),
                  e._dayOfYear &&
                    ((r = kt(e._a[Oe], a[Oe])),
                    e._dayOfYear > ht(r) && (c(e)._overflowDayOfYear = !0),
                    (n = mt(r, 0, e._dayOfYear)),
                    (e._a[Ae] = n.getUTCMonth()),
                    (e._a[Ee] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = s[t] = a[t];
              for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Fe] && 0 === e._a[We] && 0 === e._a[Ne] && 0 === e._a[Ce] && ((e._nextDay = !0), (e._a[Fe] = 0)),
                (e._d = (e._useUTC ? mt : ct).apply(null, s)),
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Fe] = 24);
            }
          }
          function bt(e) {
            var t, n, a, r, s, i, o, d;
            null != (t = e._w).GG || null != t.W || null != t.E
              ? ((s = 1),
                (i = 4),
                (n = kt(t.GG, e._a[Oe], gt(At(), 1, 4).year)),
                (a = kt(t.W, 1)),
                ((r = kt(t.E, 1)) < 1 || r > 7) && (d = !0))
              : ((s = e._locale._week.dow),
                (i = e._locale._week.doy),
                (n = kt(t.gg, e._a[Oe], gt(At(), s, i).year)),
                (a = kt(t.w, 1)),
                null != t.d
                  ? ((r = t.d) < 0 || r > 6) && (d = !0)
                  : null != t.e
                  ? ((r = t.e + s), (t.e < 0 || t.e > 6) && (d = !0))
                  : (r = s)),
              a < 1 || a > Yt(n, s, i)
                ? (c(e)._overflowWeeks = !0)
                : null != d
                ? (c(e)._overflowWeekday = !0)
                : ((o = Lt(n, a, r, s, i)), (e._a[Oe] = o.year), (e._dayOfYear = o.dayOfYear));
          }
          function wt(e) {
            if (e._f !== a.ISO_8601) {
              (e._a = []), (c(e).empty = !0);
              var t,
                n,
                r,
                s,
                i,
                o = "" + e._i,
                d = o.length,
                u = 0;
              for (r = ie(e._f, e._locale).match(Q) || [], t = 0; t < r.length; t++)
                (s = r[t]),
                  (n = (o.match(we(s, e)) || [])[0]) &&
                    ((i = o.substr(0, o.indexOf(n))).length > 0 && c(e).unusedInput.push(i),
                    (o = o.slice(o.indexOf(n) + n.length)),
                    (u += n.length)),
                  te[s] ? (n ? (c(e).empty = !1) : c(e).unusedTokens.push(s), Pe(s, n, e)) : e._strict && !n && c(e).unusedTokens.push(s);
              (c(e).charsLeftOver = d - u),
                o.length > 0 && c(e).unusedInput.push(o),
                !0 === c(e).bigHour && e._a[Fe] <= 12 && e._a[Fe] > 0 && (c(e).bigHour = void 0),
                (e._a[Fe] = Tt(e._locale, e._a[Fe], e._meridiem)),
                Dt(e),
                at(e);
            } else _t(e);
          }
          function Tt(e, t, n) {
            var a;
            return null == n
              ? t
              : null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : null != e.isPM
              ? ((a = e.isPM(n)) && t < 12 && (t += 12), a || 12 !== t || (t = 0), t)
              : t;
          }
          function St(e) {
            var t, n, a, r, s;
            if (0 === e._f.length) return (c(e).invalidFormat = !0), void (e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++)
              (s = 0),
                (t = M({}, e)),
                null != e._useUTC && (t._useUTC = e._useUTC),
                (t._f = e._f[r]),
                wt(t),
                m(t) &&
                  ((s += c(t).charsLeftOver),
                  (s += 10 * c(t).unusedTokens.length),
                  (c(t).score = s),
                  (null == a || s < a) && ((a = s), (n = t)));
            u(e, n || t);
          }
          function jt(e) {
            if (!e._d) {
              var t = V(e._i);
              (e._a = o([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                return e && parseInt(e, 10);
              })),
                Dt(e);
            }
          }
          function xt(e) {
            var t = new L(at(Ht(e)));
            return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
          }
          function Ht(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || R(e._l)),
              null === t || (void 0 === n && "" === t)
                ? h({ nullInput: !0 })
                : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                  g(t) ? new L(at(t)) : (s(n) ? St(e) : n ? wt(e) : i(t) ? (e._d = t) : Pt(e), m(e) || (e._d = null), e))
            );
          }
          function Pt(e) {
            var t = e._i;
            void 0 === t
              ? (e._d = new Date(a.now()))
              : i(t)
              ? (e._d = new Date(+t))
              : "string" == typeof t
              ? lt(e)
              : s(t)
              ? ((e._a = o(t.slice(0), function (e) {
                  return parseInt(e, 10);
                })),
                Dt(e))
              : "object" == typeof t
              ? jt(e)
              : "number" == typeof t
              ? (e._d = new Date(t))
              : a.createFromInputFallback(e);
          }
          function Ot(e, t, n, a, r) {
            var s = {};
            return (
              "boolean" == typeof n && ((a = n), (n = void 0)),
              (s._isAMomentObject = !0),
              (s._useUTC = s._isUTC = r),
              (s._l = n),
              (s._i = e),
              (s._f = t),
              (s._strict = a),
              xt(s)
            );
          }
          function At(e, t, n, a) {
            return Ot(e, t, n, a, !1);
          }
          a.ISO_8601 = function () {};
          var Et = b("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
              var e = At.apply(null, arguments);
              return this.isValid() && e.isValid() ? (e < this ? this : e) : h();
            }),
            Ft = b("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
              var e = At.apply(null, arguments);
              return this.isValid() && e.isValid() ? (e > this ? this : e) : h();
            });
          function Wt(e, t) {
            var n, a;
            if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return At();
            for (n = t[0], a = 1; a < t.length; ++a) (t[a].isValid() && !t[a][e](n)) || (n = t[a]);
            return n;
          }
          function Nt() {
            return Wt("isBefore", [].slice.call(arguments, 0));
          }
          function Ct() {
            return Wt("isAfter", [].slice.call(arguments, 0));
          }
          var zt = function () {
            return Date.now ? Date.now() : +new Date();
          };
          function Rt(e) {
            var t = V(e),
              n = t.year || 0,
              a = t.quarter || 0,
              r = t.month || 0,
              s = t.week || 0,
              i = t.day || 0,
              o = t.hour || 0,
              d = t.minute || 0,
              u = t.second || 0,
              _ = t.millisecond || 0;
            (this._milliseconds = +_ + 1e3 * u + 6e4 * d + 36e5 * o),
              (this._days = +i + 7 * s),
              (this._months = +r + 3 * a + 12 * n),
              (this._data = {}),
              (this._locale = R()),
              this._bubble();
          }
          function Jt(e) {
            return e instanceof Rt;
          }
          function It(e, t) {
            ne(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return e < 0 && ((e = -e), (n = "-")), n + Z(~~(e / 60), 2) + t + Z(~~e % 60, 2);
            });
          }
          It("Z", ":"),
            It("ZZ", ""),
            be("Z", Ye),
            be("ZZ", Ye),
            xe(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = Gt(Ye, e));
            });
          var Ut = /([\+\-]|\d\d)/gi;
          function Gt(e, t) {
            var n = (t || "").match(e) || [],
              a = ((n[n.length - 1] || []) + "").match(Ut) || ["-", 0, 0],
              r = 60 * a[1] + k(a[2]);
            return "+" === a[0] ? r : -r;
          }
          function Vt(e, t) {
            var n, r;
            return t._isUTC
              ? ((n = t.clone()), (r = (g(e) || i(e) ? +e : +At(e)) - +n), n._d.setTime(+n._d + r), a.updateOffset(n, !1), n)
              : At(e).local();
          }
          function $t(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
          }
          function qt(e, t) {
            var n,
              r = this._offset || 0;
            return this.isValid()
              ? null != e
                ? ("string" == typeof e ? (e = Gt(Ye, e)) : Math.abs(e) < 16 && (e *= 60),
                  !this._isUTC && t && (n = $t(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != n && this.add(n, "m"),
                  r !== e &&
                    (!t || this._changeInProgress
                      ? hn(this, dn(e - r, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0), a.updateOffset(this, !0), (this._changeInProgress = null))),
                  this)
                : this._isUTC
                ? r
                : $t(this)
              : null != e
              ? this
              : NaN;
          }
          function Bt(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
          }
          function Kt(e) {
            return this.utcOffset(0, e);
          }
          function Zt(e) {
            return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract($t(this), "m")), this;
          }
          function Qt() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Gt(ge, this._i)), this;
          }
          function Xt(e) {
            return !!this.isValid() && ((e = e ? At(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
          }
          function en() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
          }
          function tn() {
            if (!f(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if ((M(e, this), (e = Ht(e))._a)) {
              var t = e._isUTC ? _(e._a) : At(e._a);
              this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0;
            } else this._isDSTShifted = !1;
            return this._isDSTShifted;
          }
          function nn() {
            return !!this.isValid() && !this._isUTC;
          }
          function an() {
            return !!this.isValid() && this._isUTC;
          }
          function rn() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          a.updateOffset = function () {};
          var sn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
            on =
              /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
          function dn(e, t) {
            var n,
              a,
              r,
              s = e,
              i = null;
            return (
              Jt(e)
                ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
                : "number" == typeof e
                ? ((s = {}), t ? (s[t] = e) : (s.milliseconds = e))
                : (i = sn.exec(e))
                ? ((n = "-" === i[1] ? -1 : 1),
                  (s = { y: 0, d: k(i[Ee]) * n, h: k(i[Fe]) * n, m: k(i[We]) * n, s: k(i[Ne]) * n, ms: k(i[Ce]) * n }))
                : (i = on.exec(e))
                ? ((n = "-" === i[1] ? -1 : 1),
                  (s = { y: un(i[2], n), M: un(i[3], n), w: un(i[4], n), d: un(i[5], n), h: un(i[6], n), m: un(i[7], n), s: un(i[8], n) }))
                : null == s
                ? (s = {})
                : "object" == typeof s &&
                  ("from" in s || "to" in s) &&
                  ((r = ln(At(s.from), At(s.to))), ((s = {}).ms = r.milliseconds), (s.M = r.months)),
              (a = new Rt(s)),
              Jt(e) && d(e, "_locale") && (a._locale = e._locale),
              a
            );
          }
          function un(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function _n(e, t) {
            var n = { milliseconds: 0, months: 0 };
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function ln(e, t) {
            var n;
            return e.isValid() && t.isValid()
              ? ((t = Vt(t, e)),
                e.isBefore(t) ? (n = _n(e, t)) : (((n = _n(t, e)).milliseconds = -n.milliseconds), (n.months = -n.months)),
                n)
              : { milliseconds: 0, months: 0 };
          }
          function cn(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function mn(e, t) {
            return function (n, a) {
              var r;
              return (
                null === a ||
                  isNaN(+a) ||
                  (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."),
                  (r = n),
                  (n = a),
                  (a = r)),
                hn(this, dn((n = "string" == typeof n ? +n : n), a), e),
                this
              );
            };
          }
          function hn(e, t, n, r) {
            var s = t._milliseconds,
              i = cn(t._days),
              o = cn(t._months);
            e.isValid() &&
              ((r = null == r || r),
              s && e._d.setTime(+e._d + s * n),
              i && B(e, "Date", q(e, "Date") + i * n),
              o && Be(e, q(e, "Month") + o * n),
              r && a.updateOffset(e, i || o));
          }
          dn.fn = Rt.prototype;
          var fn = mn(1, "add"),
            pn = mn(-1, "subtract");
          function Mn(e, t) {
            var n = e || At(),
              a = Vt(n, this).startOf("day"),
              r = this.diff(a, "days", !0),
              s =
                r < -6
                  ? "sameElse"
                  : r < -1
                  ? "lastWeek"
                  : r < 0
                  ? "lastDay"
                  : r < 1
                  ? "sameDay"
                  : r < 2
                  ? "nextDay"
                  : r < 7
                  ? "nextWeek"
                  : "sameElse",
              i = t && (S(t[s]) ? t[s]() : t[s]);
            return this.format(i || this.localeData().calendar(s, this, At(n)));
          }
          function yn() {
            return new L(this);
          }
          function Ln(e, t) {
            var n = g(e) ? e : At(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = G(f(t) ? "millisecond" : t)) ? +this > +n : +n < +this.clone().startOf(t))
            );
          }
          function gn(e, t) {
            var n = g(e) ? e : At(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = G(f(t) ? "millisecond" : t)) ? +this < +n : +this.clone().endOf(t) < +n)
            );
          }
          function Yn(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n);
          }
          function kn(e, t) {
            var n,
              a = g(e) ? e : At(e);
            return (
              !(!this.isValid() || !a.isValid()) &&
              ("millisecond" === (t = G(t || "millisecond"))
                ? +this == +a
                : ((n = +a), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t)))
            );
          }
          function vn(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }
          function Dn(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }
          function bn(e, t, n) {
            var a, r, s, i;
            return this.isValid() && (a = Vt(e, this)).isValid()
              ? ((r = 6e4 * (a.utcOffset() - this.utcOffset())),
                "year" === (t = G(t)) || "month" === t || "quarter" === t
                  ? ((i = wn(this, a)), "quarter" === t ? (i /= 3) : "year" === t && (i /= 12))
                  : ((s = this - a),
                    (i =
                      "second" === t
                        ? s / 1e3
                        : "minute" === t
                        ? s / 6e4
                        : "hour" === t
                        ? s / 36e5
                        : "day" === t
                        ? (s - r) / 864e5
                        : "week" === t
                        ? (s - r) / 6048e5
                        : s)),
                n ? i : Y(i))
              : NaN;
          }
          function wn(e, t) {
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              a = e.clone().add(n, "months");
            return -(n + (t - a < 0 ? (t - a) / (a - e.clone().add(n - 1, "months")) : (t - a) / (e.clone().add(n + 1, "months") - a)));
          }
          function Tn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }
          function Sn() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999
              ? S(Date.prototype.toISOString)
                ? this.toDate().toISOString()
                : se(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
              : se(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
          }
          function jn(e) {
            var t = se(this, e || a.defaultFormat);
            return this.localeData().postformat(t);
          }
          function xn(e, t) {
            return this.isValid() && ((g(e) && e.isValid()) || At(e).isValid())
              ? dn({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function Hn(e) {
            return this.from(At(), e);
          }
          function Pn(e, t) {
            return this.isValid() && ((g(e) && e.isValid()) || At(e).isValid())
              ? dn({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function On(e) {
            return this.to(At(), e);
          }
          function An(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (null != (t = R(e)) && (this._locale = t), this);
          }
          a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
          var En = b(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function Fn() {
            return this._locale;
          }
          function Wn(e) {
            switch ((e = G(e))) {
              case "year":
                this.month(0);
              case "quarter":
              case "month":
                this.date(1);
              case "week":
              case "isoWeek":
              case "day":
                this.hours(0);
              case "hour":
                this.minutes(0);
              case "minute":
                this.seconds(0);
              case "second":
                this.milliseconds(0);
            }
            return (
              "week" === e && this.weekday(0),
              "isoWeek" === e && this.isoWeekday(1),
              "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
              this
            );
          }
          function Nn(e) {
            return void 0 === (e = G(e)) || "millisecond" === e
              ? this
              : this.startOf(e)
                  .add(1, "isoWeek" === e ? "week" : e)
                  .subtract(1, "ms");
          }
          function Cn() {
            return +this._d - 6e4 * (this._offset || 0);
          }
          function zn() {
            return Math.floor(+this / 1e3);
          }
          function Rn() {
            return this._offset ? new Date(+this) : this._d;
          }
          function Jn() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
          }
          function In() {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds()
            };
          }
          function Un() {
            return this.isValid() ? this.toISOString() : null;
          }
          function Gn() {
            return m(this);
          }
          function Vn() {
            return u({}, c(this));
          }
          function $n() {
            return c(this).overflow;
          }
          function qn() {
            return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
          }
          function Bn(e, t) {
            ne(0, [e, e.length], 0, t);
          }
          function Kn(e) {
            return ea.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
          }
          function Zn(e) {
            return ea.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function Qn() {
            return Yt(this.year(), 1, 4);
          }
          function Xn() {
            var e = this.localeData()._week;
            return Yt(this.year(), e.dow, e.doy);
          }
          function ea(e, t, n, a, r) {
            var s;
            return null == e ? gt(this, a, r).year : (t > (s = Yt(e, a, r)) && (t = s), ta.call(this, e, t, n, a, r));
          }
          function ta(e, t, n, a, r) {
            var s = Lt(e, t, n, a, r),
              i = mt(s.year, 0, s.dayOfYear);
            return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
          }
          function na(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
          }
          function aa(e) {
            return gt(e, this._week.dow, this._week.doy).week;
          }
          ne(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
            ne(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            Bn("gggg", "weekYear"),
            Bn("ggggg", "weekYear"),
            Bn("GGGG", "isoWeekYear"),
            Bn("GGGGG", "isoWeekYear"),
            U("weekYear", "gg"),
            U("isoWeekYear", "GG"),
            be("G", Le),
            be("g", Le),
            be("GG", ce, de),
            be("gg", ce, de),
            be("GGGG", pe, _e),
            be("gggg", pe, _e),
            be("GGGGG", Me, le),
            be("ggggg", Me, le),
            He(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
              t[a.substr(0, 2)] = k(e);
            }),
            He(["gg", "GG"], function (e, t, n, r) {
              t[r] = a.parseTwoDigitYear(e);
            }),
            ne("Q", 0, "Qo", "quarter"),
            U("quarter", "Q"),
            be("Q", oe),
            xe("Q", function (e, t) {
              t[Ae] = 3 * (k(e) - 1);
            }),
            ne("w", ["ww", 2], "wo", "week"),
            ne("W", ["WW", 2], "Wo", "isoWeek"),
            U("week", "w"),
            U("isoWeek", "W"),
            be("w", ce),
            be("ww", ce, de),
            be("W", ce),
            be("WW", ce, de),
            He(["w", "ww", "W", "WW"], function (e, t, n, a) {
              t[a.substr(0, 1)] = k(e);
            });
          var ra = { dow: 0, doy: 6 };
          function sa() {
            return this._week.dow;
          }
          function ia() {
            return this._week.doy;
          }
          function oa(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function da(e) {
            var t = gt(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          ne("D", ["DD", 2], "Do", "date"),
            U("date", "D"),
            be("D", ce),
            be("DD", ce, de),
            be("Do", function (e, t) {
              return e ? t._ordinalParse : t._ordinalParseLenient;
            }),
            xe(["D", "DD"], Ee),
            xe("Do", function (e, t) {
              t[Ee] = k(e.match(ce)[0], 10);
            });
          var ua = $("Date", !0);
          function _a(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? ("number" == typeof (e = t.weekdaysParse(e)) ? e : null) : parseInt(e, 10);
          }
          ne("d", 0, "do", "day"),
            ne("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            ne("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            ne("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            ne("e", 0, 0, "weekday"),
            ne("E", 0, 0, "isoWeekday"),
            U("day", "d"),
            U("weekday", "e"),
            U("isoWeekday", "E"),
            be("d", ce),
            be("e", ce),
            be("E", ce),
            be("dd", ve),
            be("ddd", ve),
            be("dddd", ve),
            He(["dd", "ddd", "dddd"], function (e, t, n, a) {
              var r = n._locale.weekdaysParse(e, a, n._strict);
              null != r ? (t.d = r) : (c(n).invalidWeekday = e);
            }),
            He(["d", "e", "E"], function (e, t, n, a) {
              t[a] = k(e);
            });
          var la = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
          function ca(e, t) {
            return s(this._weekdays)
              ? this._weekdays[e.day()]
              : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()];
          }
          var ma = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
          function ha(e) {
            return this._weekdaysShort[e.day()];
          }
          var fa = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
          function pa(e) {
            return this._weekdaysMin[e.day()];
          }
          function Ma(e, t, n) {
            var a, r, s;
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                a = 0;
              a < 7;
              a++
            ) {
              if (
                ((r = At([2e3, 1]).day(a)),
                n &&
                  !this._fullWeekdaysParse[a] &&
                  ((this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i")),
                  (this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i")),
                  (this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i"))),
                this._weekdaysParse[a] ||
                  ((s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, "")),
                  (this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i"))),
                n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
              )
                return a;
              if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
              if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
              if (!n && this._weekdaysParse[a].test(e)) return a;
            }
          }
          function ya(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? ((e = _a(e, this.localeData())), this.add(e - t, "d")) : t;
          }
          function La(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }
          function ga(e) {
            return this.isValid() ? (null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)) : null != e ? this : NaN;
          }
          function Ya(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d");
          }
          function ka() {
            return this.hours() % 12 || 12;
          }
          function va(e, t) {
            ne(e, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), t);
            });
          }
          function Da(e, t) {
            return t._meridiemParse;
          }
          function ba(e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }
          ne("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            U("dayOfYear", "DDD"),
            be("DDD", fe),
            be("DDDD", ue),
            xe(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = k(e);
            }),
            ne("H", ["HH", 2], 0, "hour"),
            ne("h", ["hh", 2], 0, ka),
            ne("hmm", 0, 0, function () {
              return "" + ka.apply(this) + Z(this.minutes(), 2);
            }),
            ne("hmmss", 0, 0, function () {
              return "" + ka.apply(this) + Z(this.minutes(), 2) + Z(this.seconds(), 2);
            }),
            ne("Hmm", 0, 0, function () {
              return "" + this.hours() + Z(this.minutes(), 2);
            }),
            ne("Hmmss", 0, 0, function () {
              return "" + this.hours() + Z(this.minutes(), 2) + Z(this.seconds(), 2);
            }),
            va("a", !0),
            va("A", !1),
            U("hour", "h"),
            be("a", Da),
            be("A", Da),
            be("H", ce),
            be("h", ce),
            be("HH", ce, de),
            be("hh", ce, de),
            be("hmm", me),
            be("hmmss", he),
            be("Hmm", me),
            be("Hmmss", he),
            xe(["H", "HH"], Fe),
            xe(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            xe(["h", "hh"], function (e, t, n) {
              (t[Fe] = k(e)), (c(n).bigHour = !0);
            }),
            xe("hmm", function (e, t, n) {
              var a = e.length - 2;
              (t[Fe] = k(e.substr(0, a))), (t[We] = k(e.substr(a))), (c(n).bigHour = !0);
            }),
            xe("hmmss", function (e, t, n) {
              var a = e.length - 4,
                r = e.length - 2;
              (t[Fe] = k(e.substr(0, a))), (t[We] = k(e.substr(a, 2))), (t[Ne] = k(e.substr(r))), (c(n).bigHour = !0);
            }),
            xe("Hmm", function (e, t, n) {
              var a = e.length - 2;
              (t[Fe] = k(e.substr(0, a))), (t[We] = k(e.substr(a)));
            }),
            xe("Hmmss", function (e, t, n) {
              var a = e.length - 4,
                r = e.length - 2;
              (t[Fe] = k(e.substr(0, a))), (t[We] = k(e.substr(a, 2))), (t[Ne] = k(e.substr(r)));
            });
          var wa = /[ap]\.?m?\.?/i;
          function Ta(e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }
          var Sa = $("Hours", !0);
          ne("m", ["mm", 2], 0, "minute"), U("minute", "m"), be("m", ce), be("mm", ce, de), xe(["m", "mm"], We);
          var ja = $("Minutes", !1);
          ne("s", ["ss", 2], 0, "second"), U("second", "s"), be("s", ce), be("ss", ce, de), xe(["s", "ss"], Ne);
          var xa,
            Ha = $("Seconds", !1);
          for (
            ne("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              ne(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              ne(0, ["SSS", 3], 0, "millisecond"),
              ne(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              ne(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              ne(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              ne(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              ne(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              ne(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              U("millisecond", "ms"),
              be("S", fe, oe),
              be("SS", fe, de),
              be("SSS", fe, ue),
              xa = "SSSS";
            xa.length <= 9;
            xa += "S"
          )
            be(xa, ye);
          function Pa(e, t) {
            t[Ce] = k(1e3 * ("0." + e));
          }
          for (xa = "S"; xa.length <= 9; xa += "S") xe(xa, Pa);
          var Oa = $("Milliseconds", !1);
          function Aa() {
            return this._isUTC ? "UTC" : "";
          }
          function Ea() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          ne("z", 0, 0, "zoneAbbr"), ne("zz", 0, 0, "zoneName");
          var Fa = L.prototype;
          (Fa.add = fn),
            (Fa.calendar = Mn),
            (Fa.clone = yn),
            (Fa.diff = bn),
            (Fa.endOf = Nn),
            (Fa.format = jn),
            (Fa.from = xn),
            (Fa.fromNow = Hn),
            (Fa.to = Pn),
            (Fa.toNow = On),
            (Fa.get = K),
            (Fa.invalidAt = $n),
            (Fa.isAfter = Ln),
            (Fa.isBefore = gn),
            (Fa.isBetween = Yn),
            (Fa.isSame = kn),
            (Fa.isSameOrAfter = vn),
            (Fa.isSameOrBefore = Dn),
            (Fa.isValid = Gn),
            (Fa.lang = En),
            (Fa.locale = An),
            (Fa.localeData = Fn),
            (Fa.max = Ft),
            (Fa.min = Et),
            (Fa.parsingFlags = Vn),
            (Fa.set = K),
            (Fa.startOf = Wn),
            (Fa.subtract = pn),
            (Fa.toArray = Jn),
            (Fa.toObject = In),
            (Fa.toDate = Rn),
            (Fa.toISOString = Sn),
            (Fa.toJSON = Un),
            (Fa.toString = Tn),
            (Fa.unix = zn),
            (Fa.valueOf = Cn),
            (Fa.creationData = qn),
            (Fa.year = pt),
            (Fa.isLeapYear = Mt),
            (Fa.weekYear = Kn),
            (Fa.isoWeekYear = Zn),
            (Fa.quarter = Fa.quarters = na),
            (Fa.month = Ke),
            (Fa.daysInMonth = Ze),
            (Fa.week = Fa.weeks = oa),
            (Fa.isoWeek = Fa.isoWeeks = da),
            (Fa.weeksInYear = Xn),
            (Fa.isoWeeksInYear = Qn),
            (Fa.date = ua),
            (Fa.day = Fa.days = ya),
            (Fa.weekday = La),
            (Fa.isoWeekday = ga),
            (Fa.dayOfYear = Ya),
            (Fa.hour = Fa.hours = Sa),
            (Fa.minute = Fa.minutes = ja),
            (Fa.second = Fa.seconds = Ha),
            (Fa.millisecond = Fa.milliseconds = Oa),
            (Fa.utcOffset = qt),
            (Fa.utc = Kt),
            (Fa.local = Zt),
            (Fa.parseZone = Qt),
            (Fa.hasAlignedHourOffset = Xt),
            (Fa.isDST = en),
            (Fa.isDSTShifted = tn),
            (Fa.isLocal = nn),
            (Fa.isUtcOffset = an),
            (Fa.isUtc = rn),
            (Fa.isUTC = rn),
            (Fa.zoneAbbr = Aa),
            (Fa.zoneName = Ea),
            (Fa.dates = b("dates accessor is deprecated. Use date instead.", ua)),
            (Fa.months = b("months accessor is deprecated. Use month instead", Ke)),
            (Fa.years = b("years accessor is deprecated. Use year instead", pt)),
            (Fa.zone = b("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Bt));
          var Wa = Fa;
          function Na(e) {
            return At(1e3 * e);
          }
          function Ca() {
            return At.apply(null, arguments).parseZone();
          }
          var za = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          };
          function Ra(e, t, n) {
            var a = this._calendar[e];
            return S(a) ? a.call(t, n) : a;
          }
          var Ja = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          };
          function Ia(e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                  return e.slice(1);
                })),
                this._longDateFormat[e]);
          }
          var Ua = "Invalid date";
          function Ga() {
            return this._invalidDate;
          }
          var Va = "%d",
            $a = /\d{1,2}/;
          function qa(e) {
            return this._ordinal.replace("%d", e);
          }
          function Ba(e) {
            return e;
          }
          var Ka = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          };
          function Za(e, t, n, a) {
            var r = this._relativeTime[n];
            return S(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
          }
          function Qa(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return S(n) ? n(t) : n.replace(/%s/i, t);
          }
          var Xa = P.prototype;
          function er(e, t, n, a) {
            var r = R(),
              s = _().set(a, t);
            return r[n](s, e);
          }
          function tr(e, t, n, a, r) {
            if (("number" == typeof e && ((t = e), (e = void 0)), (e = e || ""), null != t)) return er(e, t, n, r);
            var s,
              i = [];
            for (s = 0; s < a; s++) i[s] = er(e, s, n, r);
            return i;
          }
          function nr(e, t) {
            return tr(e, t, "months", 12, "month");
          }
          function ar(e, t) {
            return tr(e, t, "monthsShort", 12, "month");
          }
          function rr(e, t) {
            return tr(e, t, "weekdays", 7, "day");
          }
          function sr(e, t) {
            return tr(e, t, "weekdaysShort", 7, "day");
          }
          function ir(e, t) {
            return tr(e, t, "weekdaysMin", 7, "day");
          }
          (Xa._calendar = za),
            (Xa.calendar = Ra),
            (Xa._longDateFormat = Ja),
            (Xa.longDateFormat = Ia),
            (Xa._invalidDate = Ua),
            (Xa.invalidDate = Ga),
            (Xa._ordinal = Va),
            (Xa.ordinal = qa),
            (Xa._ordinalParse = $a),
            (Xa.preparse = Ba),
            (Xa.postformat = Ba),
            (Xa._relativeTime = Ka),
            (Xa.relativeTime = Za),
            (Xa.pastFuture = Qa),
            (Xa.set = x),
            (Xa.months = Ge),
            (Xa._months = Ue),
            (Xa.monthsShort = $e),
            (Xa._monthsShort = Ve),
            (Xa.monthsParse = qe),
            (Xa._monthsRegex = et),
            (Xa.monthsRegex = tt),
            (Xa._monthsShortRegex = Qe),
            (Xa.monthsShortRegex = Xe),
            (Xa.week = aa),
            (Xa._week = ra),
            (Xa.firstDayOfYear = ia),
            (Xa.firstDayOfWeek = sa),
            (Xa.weekdays = ca),
            (Xa._weekdays = la),
            (Xa.weekdaysMin = pa),
            (Xa._weekdaysMin = fa),
            (Xa.weekdaysShort = ha),
            (Xa._weekdaysShort = ma),
            (Xa.weekdaysParse = Ma),
            (Xa.isPM = ba),
            (Xa._meridiemParse = wa),
            (Xa.meridiem = Ta),
            N("en", {
              ordinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return e + (1 === k((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
              }
            }),
            (a.lang = b("moment.lang is deprecated. Use moment.locale instead.", N)),
            (a.langData = b("moment.langData is deprecated. Use moment.localeData instead.", R));
          var or = Math.abs;
          function dr() {
            var e = this._data;
            return (
              (this._milliseconds = or(this._milliseconds)),
              (this._days = or(this._days)),
              (this._months = or(this._months)),
              (e.milliseconds = or(e.milliseconds)),
              (e.seconds = or(e.seconds)),
              (e.minutes = or(e.minutes)),
              (e.hours = or(e.hours)),
              (e.months = or(e.months)),
              (e.years = or(e.years)),
              this
            );
          }
          function ur(e, t, n, a) {
            var r = dn(t, n);
            return (e._milliseconds += a * r._milliseconds), (e._days += a * r._days), (e._months += a * r._months), e._bubble();
          }
          function _r(e, t) {
            return ur(this, e, t, 1);
          }
          function lr(e, t) {
            return ur(this, e, t, -1);
          }
          function cr(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function mr() {
            var e,
              t,
              n,
              a,
              r,
              s = this._milliseconds,
              i = this._days,
              o = this._months,
              d = this._data;
            return (
              (s >= 0 && i >= 0 && o >= 0) || (s <= 0 && i <= 0 && o <= 0) || ((s += 864e5 * cr(fr(o) + i)), (i = 0), (o = 0)),
              (d.milliseconds = s % 1e3),
              (e = Y(s / 1e3)),
              (d.seconds = e % 60),
              (t = Y(e / 60)),
              (d.minutes = t % 60),
              (n = Y(t / 60)),
              (d.hours = n % 24),
              (i += Y(n / 24)),
              (o += r = Y(hr(i))),
              (i -= cr(fr(r))),
              (a = Y(o / 12)),
              (o %= 12),
              (d.days = i),
              (d.months = o),
              (d.years = a),
              this
            );
          }
          function hr(e) {
            return (4800 * e) / 146097;
          }
          function fr(e) {
            return (146097 * e) / 4800;
          }
          function pr(e) {
            var t,
              n,
              a = this._milliseconds;
            if ("month" === (e = G(e)) || "year" === e)
              return (t = this._days + a / 864e5), (n = this._months + hr(t)), "month" === e ? n : n / 12;
            switch (((t = this._days + Math.round(fr(this._months))), e)) {
              case "week":
                return t / 7 + a / 6048e5;
              case "day":
                return t + a / 864e5;
              case "hour":
                return 24 * t + a / 36e5;
              case "minute":
                return 1440 * t + a / 6e4;
              case "second":
                return 86400 * t + a / 1e3;
              case "millisecond":
                return Math.floor(864e5 * t) + a;
              default:
                throw new Error("Unknown unit " + e);
            }
          }
          function Mr() {
            return this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * k(this._months / 12);
          }
          function yr(e) {
            return function () {
              return this.as(e);
            };
          }
          var Lr = yr("ms"),
            gr = yr("s"),
            Yr = yr("m"),
            kr = yr("h"),
            vr = yr("d"),
            Dr = yr("w"),
            br = yr("M"),
            wr = yr("y");
          function Tr(e) {
            return this[(e = G(e)) + "s"]();
          }
          function Sr(e) {
            return function () {
              return this._data[e];
            };
          }
          var jr = Sr("milliseconds"),
            xr = Sr("seconds"),
            Hr = Sr("minutes"),
            Pr = Sr("hours"),
            Or = Sr("days"),
            Ar = Sr("months"),
            Er = Sr("years");
          function Fr() {
            return Y(this.days() / 7);
          }
          var Wr = Math.round,
            Nr = { s: 45, m: 45, h: 22, d: 26, M: 11 };
          function Cr(e, t, n, a, r) {
            return r.relativeTime(t || 1, !!n, e, a);
          }
          function zr(e, t, n) {
            var a = dn(e).abs(),
              r = Wr(a.as("s")),
              s = Wr(a.as("m")),
              i = Wr(a.as("h")),
              o = Wr(a.as("d")),
              d = Wr(a.as("M")),
              u = Wr(a.as("y")),
              _ = (r < Nr.s && ["s", r]) ||
                (s <= 1 && ["m"]) ||
                (s < Nr.m && ["mm", s]) ||
                (i <= 1 && ["h"]) ||
                (i < Nr.h && ["hh", i]) ||
                (o <= 1 && ["d"]) ||
                (o < Nr.d && ["dd", o]) ||
                (d <= 1 && ["M"]) ||
                (d < Nr.M && ["MM", d]) ||
                (u <= 1 && ["y"]) || ["yy", u];
            return (_[2] = t), (_[3] = +e > 0), (_[4] = n), Cr.apply(null, _);
          }
          function Rr(e, t) {
            return void 0 !== Nr[e] && (void 0 === t ? Nr[e] : ((Nr[e] = t), !0));
          }
          function Jr(e) {
            var t = this.localeData(),
              n = zr(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n);
          }
          var Ir = Math.abs;
          function Ur() {
            var e,
              t,
              n = Ir(this._milliseconds) / 1e3,
              a = Ir(this._days),
              r = Ir(this._months);
            (e = Y(n / 60)), (t = Y(e / 60)), (n %= 60), (e %= 60);
            var s = Y(r / 12),
              i = (r %= 12),
              o = a,
              d = t,
              u = e,
              _ = n,
              l = this.asSeconds();
            return l
              ? (l < 0 ? "-" : "") +
                  "P" +
                  (s ? s + "Y" : "") +
                  (i ? i + "M" : "") +
                  (o ? o + "D" : "") +
                  (d || u || _ ? "T" : "") +
                  (d ? d + "H" : "") +
                  (u ? u + "M" : "") +
                  (_ ? _ + "S" : "")
              : "P0D";
          }
          var Gr = Rt.prototype;
          return (
            (Gr.abs = dr),
            (Gr.add = _r),
            (Gr.subtract = lr),
            (Gr.as = pr),
            (Gr.asMilliseconds = Lr),
            (Gr.asSeconds = gr),
            (Gr.asMinutes = Yr),
            (Gr.asHours = kr),
            (Gr.asDays = vr),
            (Gr.asWeeks = Dr),
            (Gr.asMonths = br),
            (Gr.asYears = wr),
            (Gr.valueOf = Mr),
            (Gr._bubble = mr),
            (Gr.get = Tr),
            (Gr.milliseconds = jr),
            (Gr.seconds = xr),
            (Gr.minutes = Hr),
            (Gr.hours = Pr),
            (Gr.days = Or),
            (Gr.weeks = Fr),
            (Gr.months = Ar),
            (Gr.years = Er),
            (Gr.humanize = Jr),
            (Gr.toISOString = Ur),
            (Gr.toString = Ur),
            (Gr.toJSON = Ur),
            (Gr.locale = An),
            (Gr.localeData = Fn),
            (Gr.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ur)),
            (Gr.lang = En),
            ne("X", 0, 0, "unix"),
            ne("x", 0, 0, "valueOf"),
            be("x", Le),
            be("X", ke),
            xe("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e, 10));
            }),
            xe("x", function (e, t, n) {
              n._d = new Date(k(e));
            }),
            (a.version = "2.12.0"),
            r(At),
            (a.fn = Wa),
            (a.min = Nt),
            (a.max = Ct),
            (a.now = zt),
            (a.utc = _),
            (a.unix = Na),
            (a.months = nr),
            (a.isDate = i),
            (a.locale = N),
            (a.invalid = h),
            (a.duration = dn),
            (a.isMoment = g),
            (a.weekdays = rr),
            (a.parseZone = Ca),
            (a.localeData = R),
            (a.isDuration = Jt),
            (a.monthsShort = ar),
            (a.weekdaysMin = ir),
            (a.defineLocale = C),
            (a.updateLocale = z),
            (a.locales = J),
            (a.weekdaysShort = sr),
            (a.normalizeUnits = G),
            (a.relativeTimeThreshold = Rr),
            (a.prototype = Wa),
            a
          );
        })();
      },
      586: function (e) {
        "use strict";
        e.exports =
          ("object" == typeof self && self.self === self && self) ||
          ("object" == typeof global && global.global === global && global) ||
          this;
      },
      4836: (e) => {
        (e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8698: (e) => {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      },
      8872: (e) => {
        "use strict";
        e.exports = JSON.parse('["ar","arc","dv","fa","ha","he","khw","ks","ku","ps","ur","yi"]');
      }
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var s = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a].call(s.exports, s, s.exports, n), (s.loaded = !0), s.exports;
  }
  (n.d = (e, t) => {
    for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = n(6146);
      class t {
        constructor(e) {
          this.execute = e;
        }
        enable() {
          return this.execute("browserAction", "enable", ...arguments);
        }
        disable() {
          return this.execute("browserAction", "disable", ...arguments);
        }
        setTitle() {
          return this.execute("browserAction", "setTitle", ...arguments);
        }
        setIcon() {
          return this.execute("browserAction", "setIcon", ...arguments);
        }
        setBadgeText() {
          return this.execute("browserAction", "setBadgeText", ...arguments);
        }
        setBadgeTextColor() {
          return this.execute("browserAction", "setBadgeTextColor", ...arguments);
        }
        setBadgeBackgroundColor() {
          return this.execute("browserAction", "setBadgeBackgroundColor", ...arguments);
        }
        get onClicked() {
          return {
            addListener: this.execute.bind(this, "browserAction.onClicked", "addListener"),
            hasListener: this.execute.bind(this, "browserAction.onClicked", "hasListener"),
            removeListener: this.execute.bind(this, "browserAction.onClicked", "removeListener")
          };
        }
      }
      class a {
        constructor(e) {
          this.execute = e;
        }
        getURL() {
          return this.execute("extension", "getURL", ...arguments);
        }
      }
      class r {
        constructor(e) {
          this.execute = e;
        }
        get lastError() {
          return this.execute("runtime", "lastError");
        }
        get onInstalled() {
          return {
            addListener: this.execute.bind(this, "runtime.onInstalled", "addListener"),
            hasListener: this.execute.bind(this, "runtime.onInstalled", "hasListener"),
            removeListener: this.execute.bind(this, "runtime.onInstalled", "removeListener")
          };
        }
        get onMessage() {
          return {
            addListener: this.execute.bind(this, "runtime.onMessage", "addListener"),
            hasListener: this.execute.bind(this, "runtime.onMessage", "hasListener"),
            removeListener: this.execute.bind(this, "runtime.onMessage", "removeListener")
          };
        }
        sendMessage() {
          return this.execute("runtime", "sendMessage", ...arguments);
        }
        setUninstallURL() {
          return this.execute("runtime", "setUninstallURL", ...arguments);
        }
        getManifest() {
          return this.execute("runtime", "getManifest", ...arguments);
        }
        getURL() {
          return this.execute("runtime", "getURL", ...arguments);
        }
        reload() {
          return this.execute("runtime", "reload");
        }
      }
      class s {
        constructor(e) {
          this.execute = e;
        }
        getUILanguage() {
          return this.execute("i18n", "getUILanguage");
        }
        getMessage() {
          return this.execute("i18n", "getMessage", ...arguments);
        }
      }
      class i {
        constructor(e, t) {
          (this.execute = e), (this.browser = t);
        }
        get onChanged() {
          return this.browser.storage.onChanged;
        }
        get local() {
          return {
            get: this.execute.bind(this, "storage.local", "get"),
            set: this.execute.bind(this, "storage.local", "set"),
            remove: this.execute.bind(this, "storage.local", "remove"),
            clear: this.execute.bind(this, "storage.local", "clear"),
            getBytesInUse: this.execute.bind(this, "storage.local", "getBytesInUse")
          };
        }
        get sync() {
          return {
            get: this.execute.bind(this, "storage.sync", "get"),
            set: this.execute.bind(this, "storage.sync", "set"),
            remove: this.execute.bind(this, "storage.sync", "remove"),
            clear: this.execute.bind(this, "storage.sync", "clear")
          };
        }
      }
      class o {
        constructor(e) {
          this.execute = e;
        }
        sendMessage() {
          return this.execute("tabs", "sendMessage", ...arguments);
        }
        create() {
          return this.execute("tabs", "create", ...arguments);
        }
        get() {
          return this.execute("tabs", "get", ...arguments);
        }
        query() {
          return this.execute("tabs", "query", ...arguments);
        }
        remove() {
          return this.execute("tabs", "remove", ...arguments);
        }
        update() {
          return this.execute("tabs", "update", ...arguments);
        }
        executeScript() {
          return this.execute("tabs", "executeScript", ...arguments);
        }
        insertCSS() {
          return this.execute("tabs", "insertCSS", ...arguments);
        }
        get onActivated() {
          return {
            addListener: this.execute.bind(this, "tabs.onActivated", "addListener"),
            hasListener: this.execute.bind(this, "tabs.onActivated", "hasListener"),
            removeListener: this.execute.bind(this, "tabs.onActivated", "removeListener")
          };
        }
        get onUpdated() {
          return {
            addListener: this.execute.bind(this, "tabs.onUpdated", "addListener"),
            hasListener: this.execute.bind(this, "tabs.onUpdated", "hasListener"),
            removeListener: this.execute.bind(this, "tabs.onUpdated", "removeListener")
          };
        }
        get onCreated() {
          return {
            addListener: this.execute.bind(this, "tabs.onCreated", "addListener"),
            hasListener: this.execute.bind(this, "tabs.onCreated", "hasListener"),
            removeListener: this.execute.bind(this, "tabs.onCreated", "removeListener")
          };
        }
        get onRemoved() {
          return {
            addListener: this.execute.bind(this, "tabs.onRemoved", "addListener"),
            hasListener: this.execute.bind(this, "tabs.onRemoved", "hasListener"),
            removeListener: this.execute.bind(this, "tabs.onRemoved", "removeListener")
          };
        }
      }
      class d {
        constructor(e) {
          this.execute = e;
        }
        create() {
          return this.execute("windows", "create", ...arguments);
        }
        update() {
          return this.execute("windows", "update", ...arguments);
        }
        remove() {
          return this.execute("windows", "remove", ...arguments);
        }
        get() {
          return this.execute("windows", "get", ...arguments);
        }
        get onFocusChanged() {
          return {
            addListener: this.execute.bind(this, "windows.onFocusChanged", "addListener"),
            hasListener: this.execute.bind(this, "windows.onFocusChanged", "hasListener"),
            removeListener: this.execute.bind(this, "windows.onFocusChanged", "removeListener")
          };
        }
      }
      class u {
        constructor(e) {
          this.execute = e;
        }
        get onCommitted() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onCommitted", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onCommitted", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onCommitted", "removeListener")
          };
        }
        get onHistoryStateUpdated() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "removeListener")
          };
        }
        get onReferenceFragmentUpdated() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "removeListener")
          };
        }
        get onBeforeNavigate() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "removeListener")
          };
        }
        get onDOMContentLoaded() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "removeListener")
          };
        }
        get onCompleted() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onCompleted", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onCompleted", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onCompleted", "removeListener")
          };
        }
        get onErrorOccurred() {
          return {
            addListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "addListener"),
            hasListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "hasListener"),
            removeListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "removeListener")
          };
        }
      }
      class _ {
        constructor(e) {
          this.execute = e;
        }
        get onBeforeRequest() {
          return {
            addListener: this.execute.bind(this, "webRequest.onBeforeRequest", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onBeforeRequest", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onBeforeRequest", "removeListener")
          };
        }
        get onBeforeRedirect() {
          return {
            addListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "removeListener")
          };
        }
        get onSendHeaders() {
          return {
            addListener: this.execute.bind(this, "webRequest.onSendHeaders", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onSendHeaders", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onSendHeaders", "removeListener")
          };
        }
        get onHeadersReceived() {
          return {
            addListener: this.execute.bind(this, "webRequest.onHeadersReceived", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onHeadersReceived", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onHeadersReceived", "removeListener")
          };
        }
        get onBeforeSendHeaders() {
          return {
            addListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "removeListener")
          };
        }
        get onResponseStarted() {
          return {
            addListener: this.execute.bind(this, "webRequest.onResponseStarted", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onResponseStarted", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onResponseStarted", "removeListener")
          };
        }
        get onCompleted() {
          return {
            addListener: this.execute.bind(this, "webRequest.onCompleted", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onCompleted", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onCompleted", "removeListener")
          };
        }
        get onErrorOccurred() {
          return {
            addListener: this.execute.bind(this, "webRequest.onErrorOccurred", "addListener"),
            hasListener: this.execute.bind(this, "webRequest.onErrorOccurred", "hasListener"),
            removeListener: this.execute.bind(this, "webRequest.onErrorOccurred", "removeListener")
          };
        }
      }
      const l = Array.isArray;
      const c = "object" == typeof global && global && global.Object === Object && global;
      var m = "object" == typeof self && self && self.Object === Object && self;
      const h = c || m || Function("return this")();
      const f = h.Symbol;
      var p = Object.prototype,
        M = p.hasOwnProperty,
        y = p.toString,
        L = f ? f.toStringTag : void 0;
      const g = function (e) {
        var t = M.call(e, L),
          n = e[L];
        try {
          e[L] = void 0;
          var a = !0;
        } catch (e) {}
        var r = y.call(e);
        return a && (t ? (e[L] = n) : delete e[L]), r;
      };
      var Y = Object.prototype.toString;
      const k = function (e) {
        return Y.call(e);
      };
      var v = f ? f.toStringTag : void 0;
      const D = function (e) {
        return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : v && v in Object(e) ? g(e) : k(e);
      };
      const b = function (e) {
        return null != e && "object" == typeof e;
      };
      const w = function (e) {
        return "symbol" == typeof e || (b(e) && "[object Symbol]" == D(e));
      };
      var T = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        S = /^\w*$/;
      const j = function (e, t) {
        if (l(e)) return !1;
        var n = typeof e;
        return (
          !("number" != n && "symbol" != n && "boolean" != n && null != e && !w(e)) ||
          S.test(e) ||
          !T.test(e) ||
          (null != t && e in Object(t))
        );
      };
      const x = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
      const H = function (e) {
        if (!x(e)) return !1;
        var t = D(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
      };
      const P = h["__core-js_shared__"];
      var O,
        A = (O = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + O : "";
      const E = function (e) {
        return !!A && A in e;
      };
      var F = Function.prototype.toString;
      const W = function (e) {
        if (null != e) {
          try {
            return F.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
      var N = /^\[object .+?Constructor\]$/,
        C = Function.prototype,
        z = Object.prototype,
        R = C.toString,
        J = z.hasOwnProperty,
        I = RegExp(
          "^" +
            R.call(J)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$"
        );
      const U = function (e) {
        return !(!x(e) || E(e)) && (H(e) ? I : N).test(W(e));
      };
      const G = function (e, t) {
        return null == e ? void 0 : e[t];
      };
      const V = function (e, t) {
        var n = G(e, t);
        return U(n) ? n : void 0;
      };
      const $ = V(Object, "create");
      const q = function () {
        (this.__data__ = $ ? $(null) : {}), (this.size = 0);
      };
      const B = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
      var K = Object.prototype.hasOwnProperty;
      const Z = function (e) {
        var t = this.__data__;
        if ($) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return K.call(t, e) ? t[e] : void 0;
      };
      var Q = Object.prototype.hasOwnProperty;
      const X = function (e) {
        var t = this.__data__;
        return $ ? void 0 !== t[e] : Q.call(t, e);
      };
      const ee = function (e, t) {
        var n = this.__data__;
        return (this.size += this.has(e) ? 0 : 1), (n[e] = $ && void 0 === t ? "__lodash_hash_undefined__" : t), this;
      };
      function te(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      (te.prototype.clear = q), (te.prototype.delete = B), (te.prototype.get = Z), (te.prototype.has = X), (te.prototype.set = ee);
      const ne = te;
      const ae = function () {
        (this.__data__ = []), (this.size = 0);
      };
      const re = function (e, t) {
        return e === t || (e != e && t != t);
      };
      const se = function (e, t) {
        for (var n = e.length; n--; ) if (re(e[n][0], t)) return n;
        return -1;
      };
      var ie = Array.prototype.splice;
      const oe = function (e) {
        var t = this.__data__,
          n = se(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : ie.call(t, n, 1), --this.size, !0);
      };
      const de = function (e) {
        var t = this.__data__,
          n = se(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
      const ue = function (e) {
        return se(this.__data__, e) > -1;
      };
      const _e = function (e, t) {
        var n = this.__data__,
          a = se(n, e);
        return a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t), this;
      };
      function le(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      (le.prototype.clear = ae), (le.prototype.delete = oe), (le.prototype.get = de), (le.prototype.has = ue), (le.prototype.set = _e);
      const ce = le;
      const me = V(h, "Map");
      const he = function () {
        (this.size = 0), (this.__data__ = { hash: new ne(), map: new (me || ce)(), string: new ne() });
      };
      const fe = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
      };
      const pe = function (e, t) {
        var n = e.__data__;
        return fe(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
      const Me = function (e) {
        var t = pe(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      const ye = function (e) {
        return pe(this, e).get(e);
      };
      const Le = function (e) {
        return pe(this, e).has(e);
      };
      const ge = function (e, t) {
        var n = pe(this, e),
          a = n.size;
        return n.set(e, t), (this.size += n.size == a ? 0 : 1), this;
      };
      function Ye(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      (Ye.prototype.clear = he), (Ye.prototype.delete = Me), (Ye.prototype.get = ye), (Ye.prototype.has = Le), (Ye.prototype.set = ge);
      const ke = Ye;
      function ve(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError("Expected a function");
        var n = function () {
          var a = arguments,
            r = t ? t.apply(this, a) : a[0],
            s = n.cache;
          if (s.has(r)) return s.get(r);
          var i = e.apply(this, a);
          return (n.cache = s.set(r, i) || s), i;
        };
        return (n.cache = new (ve.Cache || ke)()), n;
      }
      ve.Cache = ke;
      const De = ve;
      var be = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        we = /\\(\\)?/g;
      const Te = (function (e) {
        var t = De(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      })(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(be, function (e, n, a, r) {
            t.push(a ? r.replace(we, "$1") : n || e);
          }),
          t
        );
      });
      const Se = function (e, t) {
        for (var n = -1, a = null == e ? 0 : e.length, r = Array(a); ++n < a; ) r[n] = t(e[n], n, e);
        return r;
      };
      var je = f ? f.prototype : void 0,
        xe = je ? je.toString : void 0;
      const He = function e(t) {
        if ("string" == typeof t) return t;
        if (l(t)) return Se(t, e) + "";
        if (w(t)) return xe ? xe.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
      const Pe = function (e) {
        return null == e ? "" : He(e);
      };
      const Oe = function (e, t) {
        return l(e) ? e : j(e, t) ? [e] : Te(Pe(e));
      };
      const Ae = function (e) {
        if ("string" == typeof e || w(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
      const Ee = function (e, t) {
        for (var n = 0, a = (t = Oe(t, e)).length; null != e && n < a; ) e = e[Ae(t[n++])];
        return n && n == a ? e : void 0;
      };
      const Fe = function (e, t, n) {
        var a = null == e ? void 0 : Ee(e, t);
        return void 0 === a ? n : a;
      };
      const We = new (class {
          constructor(e) {
            this.browser = e;
            const n = function (...t) {
              const n = Fe(e, t.shift()) || {},
                a = n[t.shift()];
              return "function" == typeof a ? a.apply(n, t) : a;
            };
            (this.browserAction = new t(n)),
              (this.extension = new a(n)),
              (this.i18n = new s(n)),
              (this.runtime = new r(n)),
              (this.storage = new i(n, this.browser)),
              (this.tabs = new o(n)),
              (this.windows = new d(n)),
              (this.webNavigation = new u(n)),
              (this.webRequest = new _(n));
          }
        })(chrome),
        Ne = (e) => {
          const t = document.createElement("link"),
            n = We.runtime.getURL(e);
          t.setAttribute("href", n), t.setAttribute("rel", "stylesheet"), document.head.appendChild(t);
        },
        Ce = (e, t, n = null) => {
          const a = document.createElement("div");
          return (a.className = t), n && (a.innerHTML = n), a;
        },
        ze = (e) => {
          document.title = e;
        },
        Re = () => {
          const e = document.querySelector("link[rel*='icon']") || document.createElement("link");
          (e.type = "image/x-icon"),
            (e.rel = "shortcut icon"),
            (e.href = We.runtime.getURL("common/ui/icons/icon-avast32.png")),
            document.getElementsByTagName("head")[0].appendChild(e);
        },
        Je = async (e, t) => {
          const n = Ce(0, "avs aos-component opting-out-overlay"),
            a = Ce(0, "h1 -margins", t),
            r = Ce(0, "p secondary -margins", e),
            s = Ce(0, "spinner-icon");
          n.appendChild(a), n.appendChild(r), n.appendChild(s), document.body.appendChild(n);
        },
        Ie = () => {
          Ne("common/ui/css/spawn.css"), Ne("common/ui/css/opting-out-overlay.css");
        };
      (() => {
        if (!location.href.includes("?breachGuardStartScraping=true")) return;
        const t = (0, e.hd)("aos");
        ze(t), Ie(), Re(), Je((0, e.hd)("advertisers.footer.optingOut"), t);
      })();
    })();
})();
