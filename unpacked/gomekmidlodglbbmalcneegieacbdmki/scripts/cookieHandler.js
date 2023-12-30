/*! For license information please see cookieHandler.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      6698: (e, t, n) => {
        "use strict";
        var r = n(4836);
        t.default = void 0;
        var i = r(n(8698)),
          s = n(891),
          a = {
            name: "sprintf",
            type: "postProcessor",
            process: function (e, t, n) {
              return n.sprintf
                ? "[object Array]" === Object.prototype.toString.apply(n.sprintf)
                  ? (0, s.vsprintf)(e, n.sprintf)
                  : "object" === (0, i.default)(n.sprintf)
                  ? (0, s.sprintf)(e, n.sprintf)
                  : e
                : e;
            },
            overloadTranslationOptionHandler: function (e) {
              for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
              return { postProcess: "sprintf", sprintf: t };
            }
          };
        t.default = a;
      },
      891: (e, t, n) => {
        "use strict";
        var r = n(4836);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sprintf = a),
          (t.vsprintf = function (e, t) {
            return a.apply(null, [e].concat(t || []));
          });
        var i = r(n(8698)),
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
        function a(e) {
          var t = a.cache;
          return (t[e] && t.hasOwnProperty(e)) || (t[e] = a.parse(e)), a.format(a.parse(e), arguments);
        }
        (a.format = function (e, t) {
          var n,
            r,
            o,
            u,
            d,
            c,
            l,
            h,
            _,
            m = 1,
            p = e.length,
            f = "";
          for (r = 0; r < p; r++)
            if ("string" == typeof e[r]) f += e[r];
            else if ("object" === (0, i.default)(e[r])) {
              if ((u = e[r]).keys)
                for (n = t[m], o = 0; o < u.keys.length; o++) {
                  if (null == n)
                    throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', u.keys[o], u.keys[o - 1]));
                  n = n[u.keys[o]];
                }
              else n = u.param_no ? t[u.param_no] : t[m++];
              if (
                (s.not_type.test(u.type) && s.not_primitive.test(u.type) && n instanceof Function && (n = n()),
                s.numeric_arg.test(u.type) && "number" != typeof n && isNaN(n))
              )
                throw new TypeError(a("[sprintf] expecting number but found %T", n));
              switch ((s.number.test(u.type) && (h = n >= 0), u.type)) {
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
                  n = JSON.stringify(n, null, u.width ? parseInt(u.width) : 0);
                  break;
                case "e":
                  n = u.precision ? parseFloat(n).toExponential(u.precision) : parseFloat(n).toExponential();
                  break;
                case "f":
                  n = u.precision ? parseFloat(n).toFixed(u.precision) : parseFloat(n);
                  break;
                case "g":
                  n = u.precision ? String(Number(n.toPrecision(u.precision))) : parseFloat(n);
                  break;
                case "o":
                  n = (parseInt(n, 10) >>> 0).toString(8);
                  break;
                case "s":
                  (n = String(n)), (n = u.precision ? n.substring(0, u.precision) : n);
                  break;
                case "t":
                  (n = String(!!n)), (n = u.precision ? n.substring(0, u.precision) : n);
                  break;
                case "T":
                  (n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase()), (n = u.precision ? n.substring(0, u.precision) : n);
                  break;
                case "u":
                  n = parseInt(n, 10) >>> 0;
                  break;
                case "v":
                  (n = n.valueOf()), (n = u.precision ? n.substring(0, u.precision) : n);
                  break;
                case "x":
                  n = (parseInt(n, 10) >>> 0).toString(16);
                  break;
                case "X":
                  n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
              }
              s.json.test(u.type)
                ? (f += n)
                : (!s.number.test(u.type) || (h && !u.sign) ? (_ = "") : ((_ = h ? "+" : "-"), (n = n.toString().replace(s.sign, ""))),
                  (c = u.pad_char ? ("0" === u.pad_char ? "0" : u.pad_char.charAt(1)) : " "),
                  (l = u.width - (_ + n).length),
                  (d = u.width && l > 0 ? c.repeat(l) : ""),
                  (f += u.align ? _ + n + d : "0" === c ? _ + d + n : d + _ + n));
            }
          return f;
        }),
          (a.cache = {}),
          (a.parse = function (e) {
            if (a.cache[e]) return a.cache[e];
            for (var t, n = e, r = [], i = 0; n; ) {
              if (null !== (t = s.text.exec(n))) r.push(t[0]);
              else if (null !== (t = s.modulo.exec(n))) r.push("%");
              else {
                if (null === (t = s.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                if (t[2]) {
                  i |= 1;
                  var o = [],
                    u = t[2],
                    d = [];
                  if (null === (d = s.key.exec(u))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                  for (o.push(d[1]); "" !== (u = u.substring(d[0].length)); )
                    if (null !== (d = s.key_access.exec(u))) o.push(d[1]);
                    else {
                      if (null === (d = s.index_access.exec(u))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                      o.push(d[1]);
                    }
                  t[2] = o;
                } else i |= 2;
                if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                r.push({
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
            return (a.cache[e] = r);
          });
      },
      1076: (e, t, n) => {
        e.exports = n(6698).default;
      },
      6146: (e, t, n) => {
        "use strict";
        t.hd = void 0;
        var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                },
          s = h(n(4470)),
          a = h(n(381)),
          o = h(n(2353)),
          u = h(n(7794)),
          d = h(n(1076)),
          c = h(n(586)),
          l = h(n(8872));
        function h(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var _ = c.default,
          m = (c.default.localStorage, {}),
          p = {},
          f = {},
          y = {},
          g = null,
          M = null,
          L = void 0;
        function v(e) {
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
        function b(e, t) {
          return "string" == typeof e && "number" == typeof t && t > 3 && e.length >= t ? e.substr(0, t - 3) + "..." : e;
        }
        function k(e, t) {
          for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) r[s - 2] = arguments[s];
          if (!y[e] && !p.resources) return '<span class="__nls__ __nls__MISSINGSTRING">⚐&nbsp;' + e + "</span>";
          if (p.resources) {
            var a = {
                postProcess: "sprintf",
                sprintf: (r = r.map(function (e) {
                  return v(e + "");
                }))
              },
              o = u.default.t(e, a),
              d = void 0;
            return (
              "number" == typeof t
                ? ((a.count = t), (d = u.default.t(e, a)))
                : null !== t &&
                  "object" === (void 0 === t ? "undefined" : i(t)) &&
                  void 0 === t.length &&
                  (a.sprintf.length > 1 ? (a.sprintf.shift(), Object.assign(a, t)) : (a = t), (d = u.default.t(e, a))),
              w(d || o)
            );
          }
          var c = y[e],
            l = L.translate(c);
          return (
            (l = l.withContext(e)),
            "number" == typeof t && (l = l.ifPlural(t)),
            (r = r.map(function (e) {
              return v(e + "");
            })),
            w(l.fetch.apply(l, r))
          );
        }
        function Y(e, t, n) {
          return (
            (_.__TRANSLATE || _.__LOCALIZED) &&
              (t = (function (e, t) {
                return t;
              })(0, t)),
            n && n.ellipsis && (t = b(t, n.ellipsis)),
            t
          );
        }
        function w(e) {
          return e ? e.replace(/(?:\r|\n)/g, "<br />") : e;
        }
        var T = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.moment = a.default);
            }
            return (
              r(e, [
                {
                  key: "direction",
                  value: function () {
                    return p.resources ? u.default.dir(g) : l.default.indexOf(g) > -1 ? "rtl" : "ltr";
                  }
                },
                {
                  key: "register",
                  value: function (e, t) {
                    if (e.resources) return (0, s.default)(!0, f, e), this.register_lng(e, t);
                    for (var n in e) {
                      if (n.indexOf("_") > -1 && e[n].locale_data)
                        for (var r in e[n].locale_data.messages)
                          "" == e[n].locale_data.messages[r][0] && delete e[n].locale_data.messages[r];
                      e[n.toLowerCase()] = e[n];
                    }
                    (0, s.default)(!0, f, e), (m = e);
                  }
                },
                {
                  key: "register_lng",
                  value: function (e, t) {
                    (0, s.default)(!0, f, e), (p = e);
                  }
                },
                {
                  key: "nls",
                  value: function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = n && n[0];
                    try {
                      return Y(0, k.apply(null, [e, i].concat(n)), i);
                    } catch (e) {
                      throw e;
                    }
                  }
                },
                {
                  key: "nlsc",
                  value: function (e, t) {
                    try {
                      for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                      return Y(0, k.apply(null, [e, t].concat(r)), t);
                    } catch (e) {
                      throw e;
                    }
                  }
                },
                {
                  key: "nlsRaw",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
                    t = t.toLowerCase();
                    var n = e + "" + y[e],
                      r = t.split("_")[0];
                    if (f.resources) {
                      if (i(t, e)) return [f.resources[t].translation[e]];
                      if (i(r, e)) return [f.resources[r].translation[e]];
                    } else {
                      if (i(t, n)) return f[t].locale_data.messages[n];
                      if (i(r, n)) return f[r].locale_data.messages[n];
                    }
                    return null;
                    function i(e, t) {
                      return f.resources
                        ? f.resources &&
                            f.resources[e] &&
                            f.resources[e].translation &&
                            f.resources[e].translation[t] &&
                            "" !== f.resources[e].translation[t]
                        : !(!f[e] || !f[e].locale_data.messages[t]) &&
                            f[e].locale_data.messages[t].some(function (e) {
                              return null != e && "" !== e;
                            });
                    }
                  }
                },
                {
                  key: "escapeHtml",
                  value: function (e) {
                    return v(e + "");
                  }
                },
                {
                  key: "ellipsis",
                  value: function () {
                    return b.apply(null, arguments);
                  }
                },
                {
                  key: "TRANSLATE",
                  get: function () {
                    return _.debuggerTRANSLATE;
                  },
                  set: function (e) {
                    _.debuggerTRANSLATE = e;
                  }
                },
                {
                  key: "locale",
                  get: function () {
                    return g;
                  },
                  set: function (e) {
                    var t,
                      n,
                      r = e.replace("-", "_"),
                      i = r.split("_")[0],
                      c = r.split("_")[1],
                      l = i + (c ? "_" + c.toUpperCase() : ""),
                      h = void 0;
                    if ((M != r || g != i) && null != i) {
                      a.default.locale(e), (M = r), (g = i);
                      p.resources &&
                        ((e = (function (e) {
                          var t = e;
                          if (p.resources[e]) return e;
                          if ((/-/.test(e) ? (e = e.replace("-", "_")) : /_/.test(e) && (e = e.replace("_", "-")), p.resources[e]))
                            return e;
                          var n = e.split(/[-_]/);
                          return (
                            (e = [n[0], n[1].toUpperCase()].join("_")),
                            p.resources[e] ? e : ((e = e.replace("_", "-")), p.resources[e] ? e : ((e = n[0]), p.resources[e] ? e : t))
                          );
                        })(e)),
                        u.default.use(d.default).init({ resources: p.resources, lng: e, keySeparator: !1, fallbackLng: "en" })),
                        (n = {
                          domain: "messages",
                          locale_data: { messages: { "": { domain: "messages", plural_forms: void 0, lang: g } } }
                        }),
                        (m[l] = (0, s.default)(!0, {}, n, m.en, m[g], m[g + "_" + g.toUpperCase()], m[l])),
                        (t = m[l]),
                        m.en &&
                          m.en.locale_data &&
                          m.en.locale_data.messages &&
                          Object.keys(m.en.locale_data.messages).forEach(function (e) {
                            e && ((h = e.split("")), (y[h[0]] = h[1]));
                          }),
                        (L = new o.default({ domain: t.domain, missing_key_callback: function (e) {}, locale_data: t.locale_data }));
                    }
                  }
                }
              ]),
              e
            );
          })(),
          D = (_._NITRO_LOCALIZATION = _._NITRO_LOCALIZATION ? _._NITRO_LOCALIZATION : new T());
        t.ZP = D;
        (t.hd = D.nls), D.nlsc, D.escapeHtml, D.ellipsis;
      },
      4470: (e) => {
        "use strict";
        var t = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString,
          r = function (e) {
            return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e);
          },
          i = function (e) {
            if (!e || "[object Object]" !== n.call(e)) return !1;
            var r,
              i = t.call(e, "constructor"),
              s = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !i && !s) return !1;
            for (r in e);
            return void 0 === r || t.call(e, r);
          };
        e.exports = function e() {
          var t,
            n,
            s,
            a,
            o,
            u,
            d = arguments[0],
            c = 1,
            l = arguments.length,
            h = !1;
          for (
            "boolean" == typeof d
              ? ((h = d), (d = arguments[1] || {}), (c = 2))
              : (("object" != typeof d && "function" != typeof d) || null == d) && (d = {});
            c < l;
            ++c
          )
            if (null != (t = arguments[c]))
              for (n in t)
                (s = d[n]),
                  d !== (a = t[n]) &&
                    (h && a && (i(a) || (o = r(a)))
                      ? (o ? ((o = !1), (u = s && r(s) ? s : [])) : (u = s && i(s) ? s : {}), (d[n] = e(h, u, a)))
                      : void 0 !== a && (d[n] = a));
          return d;
        };
      },
      7794: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            changeLanguage: () => ue,
            cloneInstance: () => de,
            createInstance: () => ce,
            default: () => oe,
            dir: () => le,
            exists: () => he,
            getFixedT: () => _e,
            init: () => me,
            loadLanguages: () => pe,
            loadNamespaces: () => fe,
            loadResources: () => ye,
            off: () => ge,
            on: () => Me,
            setDefaultNamespace: () => Le,
            t: () => ve,
            use: () => be
          });
        var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
        function i(e, t) {
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
        const a = new ((function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            i(this, e), this.init(t, n);
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
            (e.prototype.forward = function (e, t, n, r) {
              return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "" + n + this.prefix + " " + e[0]), this.logger[t](e));
            }),
            (e.prototype.create = function (t) {
              return new e(this.logger, r({ prefix: this.prefix + ":" + t + ":" }, this.options));
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
                    var r = n.observers[e].indexOf(t);
                    r > -1 && n.observers[e].splice(r, 1);
                  } else delete n.observers[e];
                });
            }),
            (e.prototype.emit = function (e) {
              for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              if (this.observers[e]) {
                var i = [].concat(this.observers[e]);
                i.forEach(function (e) {
                  e.apply(void 0, n);
                });
              }
              if (this.observers["*"]) {
                var s = [].concat(this.observers["*"]);
                s.forEach(function (t) {
                  var r;
                  t.apply(t, (r = [e]).concat.apply(r, n));
                });
              }
            }),
            e
          );
        })();
        function u(e) {
          return null == e ? "" : "" + e;
        }
        function d(e, t, n) {
          e.forEach(function (e) {
            t[e] && (n[e] = t[e]);
          });
        }
        function c(e, t, n) {
          function r(e) {
            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
          }
          function i() {
            return !e || "string" == typeof e;
          }
          for (var s = "string" != typeof t ? [].concat(t) : t.split("."); s.length > 1; ) {
            if (i()) return {};
            var a = r(s.shift());
            !e[a] && n && (e[a] = new n()), (e = e[a]);
          }
          return i() ? {} : { obj: e, k: r(s.shift()) };
        }
        function l(e, t, n) {
          var r = c(e, t, Object);
          r.obj[r.k] = n;
        }
        function h(e, t) {
          var n = c(e, t),
            r = n.obj,
            i = n.k;
          if (r) return r[i];
        }
        function _(e, t, n) {
          for (var r in t)
            r in e
              ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof t[r] || t[r] instanceof String
                ? n && (e[r] = t[r])
                : _(e[r], t[r], n)
              : (e[r] = t[r]);
          return e;
        }
        function m(e) {
          return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var p = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
        function f(e) {
          return "string" == typeof e
            ? e.replace(/[&<>"'\/]/g, function (e) {
                return p[e];
              })
            : e;
        }
        var y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
        function g(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function M(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function L(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                      var i = n[r],
                        s = Object.getOwnPropertyDescriptor(t, i);
                      s && s.configurable && void 0 === e[i] && Object.defineProperty(e, i, s);
                    }
                  })(e, t));
        }
        const v = (function (e) {
            function t() {
              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
              g(this, t);
              var i = M(this, e.call(this));
              return (i.data = n), (i.options = r), i;
            }
            return (
              L(t, e),
              (t.prototype.addNamespaces = function (e) {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
              }),
              (t.prototype.removeNamespaces = function (e) {
                var t = this.options.ns.indexOf(e);
                t > -1 && this.options.ns.splice(t, 1);
              }),
              (t.prototype.getResource = function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                  i = r.keySeparator || this.options.keySeparator;
                void 0 === i && (i = ".");
                var s = [e, t];
                return (
                  n && "string" != typeof n && (s = s.concat(n)),
                  n && "string" == typeof n && (s = s.concat(i ? n.split(i) : n)),
                  e.indexOf(".") > -1 && (s = e.split(".")),
                  h(this.data, s)
                );
              }),
              (t.prototype.addResource = function (e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                  s = this.options.keySeparator;
                void 0 === s && (s = ".");
                var a = [e, t];
                n && (a = a.concat(s ? n.split(s) : n)),
                  e.indexOf(".") > -1 && ((r = t), (t = (a = e.split("."))[1])),
                  this.addNamespaces(t),
                  l(this.data, a, r),
                  i.silent || this.emit("added", e, t, n, r);
              }),
              (t.prototype.addResources = function (e, t, n) {
                for (var r in n) "string" == typeof n[r] && this.addResource(e, t, r, n[r], { silent: !0 });
                this.emit("added", e, t, n);
              }),
              (t.prototype.addResourceBundle = function (e, t, n, r, i) {
                var s = [e, t];
                e.indexOf(".") > -1 && ((r = n), (n = t), (t = (s = e.split("."))[1])), this.addNamespaces(t);
                var a = h(this.data, s) || {};
                r ? _(a, n, i) : (a = y({}, a, n)), l(this.data, s, a), this.emit("added", e, t, n);
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
                  "v1" === this.options.compatibilityAPI ? y({}, this.getResource(e, t)) : this.getResource(e, t)
                );
              }),
              (t.prototype.toJSON = function () {
                return this.data;
              }),
              t
            );
          })(o),
          b = {
            processors: {},
            addPostProcessor: function (e) {
              this.processors[e.name] = e;
            },
            handle: function (e, t, n, r, i) {
              var s = this;
              return (
                e.forEach(function (e) {
                  s.processors[e] && (t = s.processors[e].process(t, n, r, i));
                }),
                t
              );
            }
          };
        function k(e) {
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
        function Y(e) {
          return (
            (e.interpolationPrefix || e.interpolationSuffix || void 0 !== e.escapeInterpolation) && (e = k(e)),
            (e.nsSeparator = e.nsseparator),
            (e.keySeparator = e.keyseparator),
            (e.returnObjects = e.returnObjectTrees),
            e
          );
        }
        var w =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          T =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                };
        function D(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function S(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function x(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                      var i = n[r],
                        s = Object.getOwnPropertyDescriptor(t, i);
                      s && s.configurable && void 0 === e[i] && Object.defineProperty(e, i, s);
                    }
                  })(e, t));
        }
        const j = (function (e) {
          function t(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D(this, t);
            var i = S(this, e.call(this));
            return (
              d(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, i),
              (i.options = r),
              (i.logger = a.create("translator")),
              i
            );
          }
          return (
            x(t, e),
            (t.prototype.changeLanguage = function (e) {
              e && (this.language = e);
            }),
            (t.prototype.exists = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} };
              return "v1" === this.options.compatibilityAPI && (t = Y(t)), void 0 !== this.resolve(e, t);
            }),
            (t.prototype.extractFromKey = function (e, t) {
              var n = t.nsSeparator || this.options.nsSeparator;
              void 0 === n && (n = ":");
              var r = t.keySeparator || this.options.keySeparator || ".",
                i = t.ns || this.options.defaultNS;
              if (n && e.indexOf(n) > -1) {
                var s = e.split(n);
                (n !== r || (n === r && this.options.ns.indexOf(s[0]) > -1)) && (i = s.shift()), (e = s.join(r));
              }
              return "string" == typeof i && (i = [i]), { key: e, namespaces: i };
            }),
            (t.prototype.translate = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (
                ("object" !== (void 0 === t ? "undefined" : T(t))
                  ? (t = this.options.overloadTranslationOptionHandler(arguments))
                  : "v1" === this.options.compatibilityAPI && (t = Y(t)),
                null == e || "" === e)
              )
                return "";
              "number" == typeof e && (e = String(e)), "string" == typeof e && (e = [e]);
              var n = t.keySeparator || this.options.keySeparator || ".",
                r = this.extractFromKey(e[e.length - 1], t),
                i = r.key,
                s = r.namespaces,
                a = s[s.length - 1],
                o = t.lng || this.language,
                u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (o && "cimode" === o.toLowerCase()) {
                if (u) {
                  var d = t.nsSeparator || this.options.nsSeparator;
                  return a + d + i;
                }
                return i;
              }
              var c = this.resolve(e, t),
                l = Object.prototype.toString.apply(c),
                h = ["[object Number]", "[object Function]", "[object RegExp]"],
                _ = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays;
              if (c && "string" != typeof c && h.indexOf(l) < 0 && (!_ || "[object Array]" !== l)) {
                if (!t.returnObjects && !this.options.returnObjects)
                  return (
                    this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                    this.options.returnedObjectHandler
                      ? this.options.returnedObjectHandler(i, c, t)
                      : "key '" + i + " (" + this.language + ")' returned an object instead of string."
                  );
                if (t.keySeparator || this.options.keySeparator) {
                  var m = "[object Array]" === l ? [] : {};
                  for (var p in c)
                    Object.prototype.hasOwnProperty.call(c, p) &&
                      (m[p] = this.translate("" + i + n + p, w({}, t, { joinArrays: !1, ns: s })));
                  c = m;
                }
              } else if (_ && "[object Array]" === l) (c = c.join(_)) && (c = this.extendTranslation(c, i, t));
              else {
                var f = !1,
                  y = !1;
                if (
                  (this.isValidLookup(c) || void 0 === t.defaultValue || ((f = !0), (c = t.defaultValue)),
                  this.isValidLookup(c) || ((y = !0), (c = i)),
                  y || f)
                ) {
                  this.logger.log("missingKey", o, a, i, c);
                  var g = [],
                    M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                  if ("fallback" === this.options.saveMissingTo && M && M[0]) for (var L = 0; L < M.length; L++) g.push(M[L]);
                  else
                    "all" === this.options.saveMissingTo
                      ? (g = this.languageUtils.toResolveHierarchy(t.lng || this.language))
                      : g.push(t.lng || this.language);
                  this.options.saveMissing &&
                    (this.options.missingKeyHandler
                      ? this.options.missingKeyHandler(g, a, i, c)
                      : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(g, a, i, c)),
                    this.emit("missingKey", g, a, i, c);
                }
                (c = this.extendTranslation(c, i, t)),
                  y && c === i && this.options.appendNamespaceToMissingKey && (c = a + ":" + i),
                  y && this.options.parseMissingKeyHandler && (c = this.options.parseMissingKeyHandler(c));
              }
              return c;
            }),
            (t.prototype.extendTranslation = function (e, t, n) {
              var r = this;
              n.interpolation && this.interpolator.init(w({}, n, { interpolation: w({}, this.options.interpolation, n.interpolation) }));
              var i = n.replace && "string" != typeof n.replace ? n.replace : n;
              this.options.interpolation.defaultVariables && (i = w({}, this.options.interpolation.defaultVariables, i)),
                (e = this.interpolator.interpolate(e, i, n.lng || this.language)),
                !1 !== n.nest &&
                  (e = this.interpolator.nest(
                    e,
                    function () {
                      return r.translate.apply(r, arguments);
                    },
                    n
                  )),
                n.interpolation && this.interpolator.reset();
              var s = n.postProcess || this.options.postProcess,
                a = "string" == typeof s ? [s] : s;
              return void 0 !== e && a && a.length && !1 !== n.applyPostProcessor && (e = b.handle(a, e, t, n, this)), e;
            }),
            (t.prototype.resolve = function (e) {
              var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = void 0;
              return (
                "string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                  if (!t.isValidLookup(r)) {
                    var i = t.extractFromKey(e, n),
                      s = i.key,
                      a = i.namespaces;
                    t.options.fallbackNS && (a = a.concat(t.options.fallbackNS));
                    var o = void 0 !== n.count && "string" != typeof n.count,
                      u = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                      d = n.lngs ? n.lngs : t.languageUtils.toResolveHierarchy(n.lng || t.language);
                    a.forEach(function (e) {
                      t.isValidLookup(r) ||
                        d.forEach(function (i) {
                          if (!t.isValidLookup(r)) {
                            var a = s,
                              d = [a],
                              c = void 0;
                            o && (c = t.pluralResolver.getSuffix(i, n.count)),
                              o && u && d.push(a + c),
                              u && d.push((a += "" + t.options.contextSeparator + n.context)),
                              o && d.push((a += c));
                            for (var l = void 0; (l = d.pop()); ) t.isValidLookup(r) || (r = t.getResource(i, e, l, n));
                          }
                        });
                    });
                  }
                }),
                r
              );
            }),
            (t.prototype.isValidLookup = function (e) {
              return !(void 0 === e || (!this.options.returnNull && null === e) || (!this.options.returnEmptyString && "" === e));
            }),
            (t.prototype.getResource = function (e, t, n) {
              var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return this.resourceStore.getResource(e, t, n, r);
            }),
            t
          );
        })(o);
        function H(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        const E = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.options = t),
              (this.whitelist = this.options.whitelist || !1),
              (this.logger = a.create("languageUtils"));
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
                r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                i = [],
                s = function (e) {
                  e && (n.isWhitelisted(e) ? i.push(e) : n.logger.warn("rejecting non-whitelisted language code: " + e));
                };
              return (
                "string" == typeof e && e.indexOf("-") > -1
                  ? ("languageOnly" !== this.options.load && s(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && s(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && s(this.getLanguagePartFromCode(e)))
                  : "string" == typeof e && s(this.formatLanguageCode(e)),
                r.forEach(function (e) {
                  i.indexOf(e) < 0 && s(n.formatLanguageCode(e));
                }),
                i
              );
            }),
            e
          );
        })();
        function A(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var O = [
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
          P = {
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
        function N() {
          var e = {};
          return (
            O.forEach(function (t) {
              t.lngs.forEach(function (n) {
                e[n] = { numbers: t.nr, plurals: P[t.fc] };
              });
            }),
            e
          );
        }
        const C = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            A(this, e), (this.languageUtils = t), (this.options = n), (this.logger = a.create("pluralResolver")), (this.rules = N());
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
                r = this.getRule(e);
              if (r) {
                if (1 === r.numbers.length) return "";
                var i = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                  s = r.numbers[i];
                this.options.simplifyPluralSuffix &&
                  2 === r.numbers.length &&
                  1 === r.numbers[0] &&
                  (2 === s ? (s = "plural") : 1 === s && (s = ""));
                var a = function () {
                  return n.options.prepend && s.toString() ? n.options.prepend + s.toString() : s.toString();
                };
                return "v1" === this.options.compatibilityJSON
                  ? 1 === s
                    ? ""
                    : "number" == typeof s
                    ? "_plural_" + s.toString()
                    : a()
                  : "v2" === this.options.compatibilityJSON ||
                    (2 === r.numbers.length && 1 === r.numbers[0]) ||
                    (2 === r.numbers.length && 1 === r.numbers[0])
                  ? a()
                  : this.options.prepend && i.toString()
                  ? this.options.prepend + i.toString()
                  : i.toString();
              }
              return this.logger.warn("no plural rule found for: " + e), "";
            }),
            e
          );
        })();
        var R =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
        function W(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        const F = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            W(this, e), (this.logger = a.create("interpolator")), this.init(t, !0);
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
                (this.escape = (e.interpolation && e.interpolation.escape) || f)),
                e.interpolation || (e.interpolation = { escapeValue: !0 });
              var n = e.interpolation;
              (this.escapeValue = void 0 === n.escapeValue || n.escapeValue),
                (this.prefix = n.prefix ? m(n.prefix) : n.prefixEscaped || "{{"),
                (this.suffix = n.suffix ? m(n.suffix) : n.suffixEscaped || "}}"),
                (this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","),
                (this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-"),
                (this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || ""),
                (this.nestingPrefix = n.nestingPrefix ? m(n.nestingPrefix) : n.nestingPrefixEscaped || m("$t(")),
                (this.nestingSuffix = n.nestingSuffix ? m(n.nestingSuffix) : n.nestingSuffixEscaped || m(")")),
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
              var r = this,
                i = void 0,
                s = void 0;
              function a(e) {
                return e.replace(/\$/g, "$$$$");
              }
              var o = function (e) {
                if (e.indexOf(r.formatSeparator) < 0) return h(t, e);
                var i = e.split(r.formatSeparator),
                  s = i.shift().trim(),
                  a = i.join(r.formatSeparator).trim();
                return r.format(h(t, s), a, n);
              };
              for (this.resetRegExp(); (i = this.regexpUnescape.exec(e)); )
                (s = o(i[1].trim())), (e = e.replace(i[0], s)), (this.regexpUnescape.lastIndex = 0);
              for (; (i = this.regexp.exec(e)); )
                "string" != typeof (s = o(i[1].trim())) && (s = u(s)),
                  s || (this.logger.warn("missed to pass in variable " + i[1] + " for interpolating " + e), (s = "")),
                  (s = this.escapeValue ? a(this.escape(s)) : a(s)),
                  (e = e.replace(i[0], s)),
                  (this.regexp.lastIndex = 0);
              return e;
            }),
            (e.prototype.nest = function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = void 0,
                i = void 0,
                s = R({}, n);
              function a(e) {
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
              for (s.applyPostProcessor = !1; (r = this.nestingRegexp.exec(e)); ) {
                if ((i = t(a.call(this, r[1].trim()), s)) && r[0] === e && "string" != typeof i) return i;
                "string" != typeof i && (i = u(i)),
                  i || (this.logger.warn("missed to resolve " + r[1] + " for nesting " + e), (i = "")),
                  (e = e.replace(r[0], i)),
                  (this.regexp.lastIndex = 0);
              }
              return e;
            }),
            e
          );
        })();
        var I =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          z = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function (e, t) {
                var n = [],
                  r = !0,
                  i = !1,
                  s = void 0;
                try {
                  for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                  (i = !0), (s = e);
                } finally {
                  try {
                    !r && o.return && o.return();
                  } finally {
                    if (i) throw s;
                  }
                }
                return n;
              })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        function U(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function V(e, t) {
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
                    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                      var i = n[r],
                        s = Object.getOwnPropertyDescriptor(t, i);
                      s && s.configurable && void 0 === e[i] && Object.defineProperty(e, i, s);
                    }
                  })(e, t));
        }
        const B = (function (e) {
          function t(n, r, i) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            U(this, t);
            var o = V(this, e.call(this));
            return (
              (o.backend = n),
              (o.store = r),
              (o.services = i),
              (o.options = s),
              (o.logger = a.create("backendConnector")),
              (o.state = {}),
              (o.queue = []),
              o.backend && o.backend.init && o.backend.init(i, s.backend, s),
              o
            );
          }
          return (
            G(t, e),
            (t.prototype.queueLoad = function (e, t, n) {
              var r = this,
                i = [],
                s = [],
                a = [],
                o = [];
              return (
                e.forEach(function (e) {
                  var n = !0;
                  t.forEach(function (t) {
                    var a = e + "|" + t;
                    r.store.hasResourceBundle(e, t)
                      ? (r.state[a] = 2)
                      : r.state[a] < 0 ||
                        (1 === r.state[a]
                          ? s.indexOf(a) < 0 && s.push(a)
                          : ((r.state[a] = 1),
                            (n = !1),
                            s.indexOf(a) < 0 && s.push(a),
                            i.indexOf(a) < 0 && i.push(a),
                            o.indexOf(t) < 0 && o.push(t)));
                  }),
                    n || a.push(e);
                }),
                (i.length || s.length) && this.queue.push({ pending: s, loaded: {}, errors: [], callback: n }),
                { toLoad: i, pending: s, toLoadLanguages: a, toLoadNamespaces: o }
              );
            }),
            (t.prototype.loaded = function (e, t, n) {
              var r = this,
                i = e.split("|"),
                s = z(i, 2),
                a = s[0],
                o = s[1];
              t && this.emit("failedLoading", a, o, t),
                n && this.store.addResourceBundle(a, o, n),
                (this.state[e] = t ? -1 : 2),
                this.queue.forEach(function (n) {
                  var i, s, u, d, l, h;
                  (i = n.loaded),
                    (s = o),
                    (d = c(i, [a], Object)),
                    (l = d.obj),
                    (h = d.k),
                    (l[h] = l[h] || []),
                    u && (l[h] = l[h].concat(s)),
                    u || l[h].push(s),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; ) e.splice(n, 1), (n = e.indexOf(t));
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (r.emit("loaded", n.loaded), (n.done = !0), n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                (this.queue = this.queue.filter(function (e) {
                  return !e.done;
                }));
            }),
            (t.prototype.read = function (e, t, n) {
              var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                i = this,
                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                a = arguments[5];
              return e.length
                ? this.backend[n](e, t, function (o, u) {
                    o && u && r < 5
                      ? setTimeout(function () {
                          i.read.call(i, e, t, n, r + 1, 2 * s, a);
                        }, s)
                      : a(o, u);
                  })
                : a(null, {});
            }),
            (t.prototype.load = function (e, t, n) {
              var r = this;
              if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
              var i = I({}, this.backend.options, this.options.backend);
              "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
              var s = this.queueLoad(e, t, n);
              if (!s.toLoad.length) return s.pending.length || n(), null;
              i.allowMultiLoading && this.backend.readMulti
                ? this.read(s.toLoadLanguages, s.toLoadNamespaces, "readMulti", null, null, function (e, t) {
                    e &&
                      r.logger.warn(
                        "loading namespaces " +
                          s.toLoadNamespaces.join(", ") +
                          " for languages " +
                          s.toLoadLanguages.join(", ") +
                          " via multiloading failed",
                        e
                      ),
                      !e &&
                        t &&
                        r.logger.log(
                          "successfully loaded namespaces " +
                            s.toLoadNamespaces.join(", ") +
                            " for languages " +
                            s.toLoadLanguages.join(", ") +
                            " via multiloading",
                          t
                        ),
                      s.toLoad.forEach(function (n) {
                        var i = n.split("|"),
                          s = z(i, 2),
                          a = s[0],
                          o = s[1],
                          u = h(t, [a, o]);
                        if (u) r.loaded(n, e, u);
                        else {
                          var d = "loading namespace " + o + " for language " + a + " via multiloading failed";
                          r.loaded(n, d), r.logger.error(d);
                        }
                      });
                  })
                : s.toLoad.forEach(function (e) {
                    r.loadOne(e);
                  });
            }),
            (t.prototype.reload = function (e, t) {
              var n = this;
              this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
              var r = I({}, this.backend.options, this.options.backend);
              "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)),
                "string" == typeof t && (t = [t]),
                r.allowMultiLoading && this.backend.readMulti
                  ? this.read(e, t, "readMulti", null, null, function (r, i) {
                      r &&
                        n.logger.warn(
                          "reloading namespaces " + t.join(", ") + " for languages " + e.join(", ") + " via multiloading failed",
                          r
                        ),
                        !r &&
                          i &&
                          n.logger.log(
                            "successfully reloaded namespaces " + t.join(", ") + " for languages " + e.join(", ") + " via multiloading",
                            i
                          ),
                        e.forEach(function (e) {
                          t.forEach(function (t) {
                            var s = h(i, [e, t]);
                            if (s) n.loaded(e + "|" + t, r, s);
                            else {
                              var a = "reloading namespace " + t + " for language " + e + " via multiloading failed";
                              n.loaded(e + "|" + t, a), n.logger.error(a);
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
                r = e.split("|"),
                i = z(r, 2),
                s = i[0],
                a = i[1];
              this.read(s, a, "read", null, null, function (r, i) {
                r && t.logger.warn(n + "loading namespace " + a + " for language " + s + " failed", r),
                  !r && i && t.logger.log(n + "loaded namespace " + a + " for language " + s, i),
                  t.loaded(e, r, i);
              });
            }),
            (t.prototype.saveMissing = function (e, t, n, r) {
              this.backend && this.backend.create && this.backend.create(e, t, n, r), e && e[0] && this.store.addResource(e[0], t, n, r);
            }),
            t
          );
        })(o);
        var J =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
        function $(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function q(e, t) {
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
                    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                      var i = n[r],
                        s = Object.getOwnPropertyDescriptor(t, i);
                      s && s.configurable && void 0 === e[i] && Object.defineProperty(e, i, s);
                    }
                  })(e, t));
        }
        var X = (function (e) {
          function t(n, r, i) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            $(this, t);
            var o = q(this, e.call(this));
            return (
              (o.cache = n),
              (o.store = r),
              (o.services = i),
              (o.options = s),
              (o.logger = a.create("cacheConnector")),
              o.cache && o.cache.init && o.cache.init(i, s.cache, s),
              o
            );
          }
          return (
            K(t, e),
            (t.prototype.load = function (e, t, n) {
              var r = this;
              if (!this.cache) return n && n();
              var i = J({}, this.cache.options, this.options.cache),
                s = "string" == typeof e ? this.services.languageUtils.toResolveHierarchy(e) : e;
              i.enabled
                ? this.cache.load(s, function (e, t) {
                    if ((e && r.logger.error("loading languages " + s.join(", ") + " from cache failed", e), t))
                      for (var i in t)
                        if (Object.prototype.hasOwnProperty.call(t, i))
                          for (var a in t[i])
                            if (Object.prototype.hasOwnProperty.call(t[i], a) && "i18nStamp" !== a) {
                              var o = t[i][a];
                              o && r.store.addResourceBundle(i, a, o);
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
        const Z = X;
        function Q(e) {
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
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
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
        function re(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (function (e, t) {
                    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                      var i = n[r],
                        s = Object.getOwnPropertyDescriptor(t, i);
                      s && s.configurable && void 0 === e[i] && Object.defineProperty(e, i, s);
                    }
                  })(e, t));
        }
        function ie() {}
        var se = (function (e) {
          function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              r = arguments[1];
            te(this, t);
            var i = ne(this, e.call(this));
            if (
              ((i.options = Q(n)), (i.services = {}), (i.logger = a), (i.modules = { external: [] }), r && !i.isInitialized && !n.isClone)
            ) {
              var s;
              if (!i.options.initImmediate) return (s = i.init(n, r)), ne(i, s);
              setTimeout(function () {
                i.init(n, r);
              }, 0);
            }
            return i;
          }
          return (
            re(t, e),
            (t.prototype.init = function (e, t) {
              var n = this;
              function r(e) {
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
                      Q(
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
                            (e = k(e)).defaultVariables && (e.interpolation.defaultVariables = e.defaultVariables),
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
                      Q(
                        (function (e) {
                          return ((e = k(e)).joinArrays = "\n"), e;
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
                      Q(e)
                    )),
                (this.format = this.options.interpolation.format),
                t || (t = ie),
                !this.options.isClone)
              ) {
                this.modules.logger ? a.init(r(this.modules.logger), this.options) : a.init(null, this.options);
                var i = new E(this.options);
                this.store = new v(this.options.resources, this.options);
                var s = this.services;
                (s.logger = a),
                  (s.resourceStore = this.store),
                  s.resourceStore.on("added removed", function (e, t) {
                    s.cacheConnector.save();
                  }),
                  (s.languageUtils = i),
                  (s.pluralResolver = new C(i, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                  })),
                  (s.interpolator = new F(this.options)),
                  (s.backendConnector = new B(r(this.modules.backend), s.resourceStore, s, this.options)),
                  s.backendConnector.on("*", function (e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    n.emit.apply(n, [e].concat(r));
                  }),
                  s.backendConnector.on("loaded", function (e) {
                    s.cacheConnector.save();
                  }),
                  (s.cacheConnector = new Z(r(this.modules.cache), s.resourceStore, s, this.options)),
                  s.cacheConnector.on("*", function (e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    n.emit.apply(n, [e].concat(r));
                  }),
                  this.modules.languageDetector &&
                    ((s.languageDetector = r(this.modules.languageDetector)),
                    s.languageDetector.init(s, this.options.detection, this.options)),
                  (this.translator = new j(this.services, this.options)),
                  this.translator.on("*", function (e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    n.emit.apply(n, [e].concat(r));
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
                      a.deprecate(
                        "i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."
                      ),
                      o.services.languageUtils.toResolveHierarchy(o.language)[0]
                    );
                  }),
                  (o.preload = function (e, t) {
                    a.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), o.loadLanguages(e, t);
                  }),
                  (o.setLng = function (e, t, n) {
                    return (
                      a.deprecate(
                        "i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."
                      ),
                      "function" == typeof t && ((n = t), (t = {})),
                      t || (t = {}),
                      !0 === t.fixLng && n ? n(null, o.getFixedT(e)) : o.changeLanguage(e, n)
                    );
                  }),
                  (o.addPostProcessor = function (e, t) {
                    a.deprecate(
                      "i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"
                    ),
                      o.use({ type: "postProcessor", name: e, process: t });
                  }));
              var u = function () {
                n.changeLanguage(n.options.lng, function (e, r) {
                  (n.isInitialized = !0), n.logger.log("initialized", n.options), n.emit("initialized", n.options), t(e, r);
                });
              };
              return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), this;
            }),
            (t.prototype.loadResources = function () {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie;
              if (this.options.resources) t(null);
              else {
                if (this.language && "cimode" === this.language.toLowerCase()) return t();
                var n = [],
                  r = function (t) {
                    t &&
                      e.services.languageUtils.toResolveHierarchy(t).forEach(function (e) {
                        n.indexOf(e) < 0 && n.push(e);
                      });
                  };
                if (this.language) r(this.language);
                else {
                  var i = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                  i.forEach(function (e) {
                    return r(e);
                  });
                }
                this.options.preload &&
                  this.options.preload.forEach(function (e) {
                    return r(e);
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
                "postProcessor" === e.type && b.addPostProcessor(e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
              );
            }),
            (t.prototype.changeLanguage = function (e, t) {
              var n = this,
                r = function (e) {
                  e &&
                    ((n.language = e),
                    (n.languages = n.services.languageUtils.toResolveHierarchy(e)),
                    n.translator.changeLanguage(e),
                    n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)),
                    n.loadResources(function (r) {
                      !(function (e, r) {
                        r && (n.emit("languageChanged", r), n.logger.log("languageChanged", r)),
                          t &&
                            t(e, function () {
                              return n.t.apply(n, arguments);
                            });
                      })(r, e);
                    });
                };
              e || !this.services.languageDetector || this.services.languageDetector.async
                ? !e && this.services.languageDetector && this.services.languageDetector.async
                  ? this.services.languageDetector.detect(r)
                  : r(e)
                : r(this.services.languageDetector.detect());
            }),
            (t.prototype.getFixedT = function (e, t) {
              var n = this,
                r = function e(t) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = ee({}, r);
                  return (i.lng = i.lng || e.lng), (i.lngs = i.lngs || e.lngs), (i.ns = i.ns || e.ns), n.t(t, i);
                };
              return "string" == typeof e ? (r.lng = e) : (r.lngs = e), (r.ns = t), r;
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
                r = e.filter(function (e) {
                  return n.indexOf(e) < 0;
                });
              if (!r.length) return t();
              (this.options.preload = n.concat(r)), this.loadResources(t);
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
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie,
                i = ee({}, this.options, n, { isClone: !0 }),
                s = new t(i, r),
                a = ["store", "services", "language"];
              return (
                a.forEach(function (t) {
                  s[t] = e[t];
                }),
                (s.translator = new j(s.services, s.options)),
                s.translator.on("*", function (e) {
                  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                  s.emit.apply(s, [e].concat(n));
                }),
                s.init(i, r),
                s
              );
            }),
            t
          );
        })(o);
        const ae = new se(),
          oe = ae;
        var ue = ae.changeLanguage.bind(ae),
          de = ae.cloneInstance.bind(ae),
          ce = ae.createInstance.bind(ae),
          le = ae.dir.bind(ae),
          he = ae.exists.bind(ae),
          _e = ae.getFixedT.bind(ae),
          me = ae.init.bind(ae),
          pe = ae.loadLanguages.bind(ae),
          fe = ae.loadNamespaces.bind(ae),
          ye = ae.loadResources.bind(ae),
          ge = ae.off.bind(ae),
          Me = ae.on.bind(ae),
          Le = ae.setDefaultNamespace.bind(ae),
          ve = ae.t.bind(ae),
          be = ae.use.bind(ae);
      },
      2353: function (e, t) {
        !(function (n, r) {
          var i = Array.prototype,
            s = Object.prototype,
            a = i.slice,
            o = s.hasOwnProperty,
            u = i.forEach,
            d = {},
            c = {
              forEach: function (e, t, n) {
                var r, i, s;
                if (null !== e)
                  if (u && e.forEach === u) e.forEach(t, n);
                  else if (e.length === +e.length) {
                    for (r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r, e) === d) return;
                  } else for (s in e) if (o.call(e, s) && t.call(n, e[s], s, e) === d) return;
              },
              extend: function (e) {
                return (
                  this.forEach(a.call(arguments, 1), function (t) {
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
                (this.options = c.extend({}, this.defaults, e)),
                this.textdomain(this.options.domain),
                e.domain && !this.options.locale_data[this.options.domain])
              )
                throw new Error("Text domain set to non-existent domain: `" + e.domain + "`");
            };
          function h(e) {
            return l.PF.compile(e || "nplurals=2; plural=(n != 1);");
          }
          function _(e, t) {
            (this._key = e), (this._i18n = t);
          }
          (l.context_delimiter = String.fromCharCode(4)),
            c.extend(_.prototype, {
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
            c.extend(l.prototype, {
              translate: function (e) {
                return new _(e, this);
              },
              textdomain: function (e) {
                if (!e) return this._textdomain;
                this._textdomain = e;
              },
              gettext: function (e) {
                return this.dcnpgettext.call(this, r, r, e);
              },
              dgettext: function (e, t) {
                return this.dcnpgettext.call(this, e, r, t);
              },
              dcgettext: function (e, t) {
                return this.dcnpgettext.call(this, e, r, t);
              },
              ngettext: function (e, t, n) {
                return this.dcnpgettext.call(this, r, r, e, t, n);
              },
              dngettext: function (e, t, n, i) {
                return this.dcnpgettext.call(this, e, r, t, n, i);
              },
              dcngettext: function (e, t, n, i) {
                return this.dcnpgettext.call(this, e, r, t, n, i);
              },
              pgettext: function (e, t) {
                return this.dcnpgettext.call(this, r, e, t);
              },
              dpgettext: function (e, t, n) {
                return this.dcnpgettext.call(this, e, t, n);
              },
              dcpgettext: function (e, t, n) {
                return this.dcnpgettext.call(this, e, t, n);
              },
              npgettext: function (e, t, n, i) {
                return this.dcnpgettext.call(this, r, e, t, n, i);
              },
              dnpgettext: function (e, t, n, r, i) {
                return this.dcnpgettext.call(this, e, t, n, r, i);
              },
              dcnpgettext: function (e, t, n, r, i) {
                var s;
                if (((r = r || n), (e = e || this._textdomain), !this.options))
                  return (s = new l()).dcnpgettext.call(s, void 0, void 0, n, r, i);
                if (!this.options.locale_data) throw new Error("No locale data provided.");
                if (!this.options.locale_data[e]) throw new Error("Domain `" + e + "` was not found.");
                if (!this.options.locale_data[e][""]) throw new Error("No locale meta information provided.");
                if (!n) throw new Error("No translation key found.");
                var a,
                  o,
                  u,
                  d = t ? t + l.context_delimiter + n : n,
                  c = this.options.locale_data,
                  _ = c[e],
                  m = (c.messages || this.defaults.locale_data.messages)[""],
                  p =
                    _[""].plural_forms ||
                    _[""]["Plural-Forms"] ||
                    _[""]["plural-forms"] ||
                    m.plural_forms ||
                    m["Plural-Forms"] ||
                    m["plural-forms"];
                if (void 0 === i) u = 0;
                else {
                  if ("number" != typeof i && ((i = parseInt(i, 10)), isNaN(i)))
                    throw new Error("The number that was passed in is not a number.");
                  u = h(p)(i);
                }
                if (!_) throw new Error("No domain named `" + e + "` could be found.");
                return !(a = _[d]) || u > a.length
                  ? (this.options.missing_key_callback && this.options.missing_key_callback(d, e),
                    (o = [n, r]),
                    this.options.debug,
                    o[h()(i)])
                  : (o = a[u]) || (o = [n, r])[h()(i)];
              }
            });
          var m,
            p,
            f = (function () {
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
                (n.format = function (n, r) {
                  var i,
                    s,
                    a,
                    o,
                    u,
                    d,
                    c,
                    l = 1,
                    h = n.length,
                    _ = "",
                    m = [];
                  for (s = 0; s < h; s++)
                    if ("string" === (_ = e(n[s]))) m.push(n[s]);
                    else if ("array" === _) {
                      if ((o = n[s])[2])
                        for (i = r[l], a = 0; a < o[2].length; a++) {
                          if (!i.hasOwnProperty(o[2][a])) throw f('[sprintf] property "%s" does not exist', o[2][a]);
                          i = i[o[2][a]];
                        }
                      else i = o[1] ? r[o[1]] : r[l++];
                      if (/[^s]/.test(o[8]) && "number" != e(i)) throw f("[sprintf] expecting number but found %s", e(i));
                      switch ((null == i && (i = ""), o[8])) {
                        case "b":
                          i = i.toString(2);
                          break;
                        case "c":
                          i = String.fromCharCode(i);
                          break;
                        case "d":
                          i = parseInt(i, 10);
                          break;
                        case "e":
                          i = o[7] ? i.toExponential(o[7]) : i.toExponential();
                          break;
                        case "f":
                          i = o[7] ? parseFloat(i).toFixed(o[7]) : parseFloat(i);
                          break;
                        case "o":
                          i = i.toString(8);
                          break;
                        case "s":
                          i = (i = String(i)) && o[7] ? i.substring(0, o[7]) : i;
                          break;
                        case "u":
                          i = Math.abs(i);
                          break;
                        case "x":
                          i = i.toString(16);
                          break;
                        case "X":
                          i = i.toString(16).toUpperCase();
                      }
                      (i = /[def]/.test(o[8]) && o[3] && i >= 0 ? "+" + i : i),
                        (d = o[4] ? ("0" == o[4] ? "0" : o[4].charAt(1)) : " "),
                        (c = o[6] - String(i).length),
                        (u = o[6] ? t(d, c) : ""),
                        m.push(o[5] ? i + u : u + i);
                    }
                  return m.join("");
                }),
                (n.cache = {}),
                (n.parse = function (e) {
                  for (var t = e, n = [], r = [], i = 0; t; ) {
                    if (null !== (n = /^[^\x25]+/.exec(t))) r.push(n[0]);
                    else if (null !== (n = /^\x25{2}/.exec(t))) r.push("%");
                    else {
                      if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))
                        throw "[sprintf] huh?";
                      if (n[2]) {
                        i |= 1;
                        var s = [],
                          a = n[2],
                          o = [];
                        if (null === (o = /^([a-z_][a-z_\d]*)/i.exec(a))) throw "[sprintf] huh?";
                        for (s.push(o[1]); "" !== (a = a.substring(o[0].length)); )
                          if (null !== (o = /^\.([a-z_][a-z_\d]*)/i.exec(a))) s.push(o[1]);
                          else {
                            if (null === (o = /^\[(\d+)\]/.exec(a))) throw "[sprintf] huh?";
                            s.push(o[1]);
                          }
                        n[2] = s;
                      } else i |= 2;
                      if (3 === i) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                      r.push(n);
                    }
                    t = t.substring(n[0].length);
                  }
                  return r;
                }),
                n
              );
            })(),
            y = function (e, t) {
              return t.unshift(e), f.apply(null, t);
            };
          (l.parse_plural = function (e, t) {
            return (e = e.replace(/n/g, t)), l.parse_expression(e);
          }),
            (l.sprintf = function (e, t) {
              return "[object Array]" == {}.toString.call(t) ? y(e, [].slice.call(t)) : f.apply(this, [].slice.call(arguments));
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
                r = e.match(n);
              if (!(r.length > 1)) throw new Error("nplurals not found in plural_forms string: " + e);
              if ((r[1], !((t = (e = e.replace(n, "")).match(/plural\=(.*);/)) && t.length > 1)))
                throw new Error("`plural` expression not found: " + e);
              return t[1];
            }),
            (l.PF.parser =
              ((m = {
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
                performAction: function (e, t, n, r, i, s, a) {
                  var o = s.length - 1;
                  switch (i) {
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
                    r = [null],
                    i = [],
                    s = this.table,
                    a = "",
                    o = 0,
                    u = 0,
                    d = 0;
                  this.lexer.setInput(e),
                    (this.lexer.yy = this.yy),
                    (this.yy.lexer = this.lexer),
                    void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                  var c = this.lexer.yylloc;
                  function l() {
                    var e;
                    return "number" != typeof (e = t.lexer.lex() || 1) && (e = t.symbols_[e] || e), e;
                  }
                  i.push(c), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                  for (var h, _, m, p, f, y, g, M, L, v, b = {}; ; ) {
                    if (
                      ((m = n[n.length - 1]),
                      this.defaultActions[m] ? (p = this.defaultActions[m]) : (null == h && (h = l()), (p = s[m] && s[m][h])),
                      void 0 === p || !p.length || !p[0])
                    ) {
                      if (!d) {
                        for (y in ((L = []), s[m])) this.terminals_[y] && y > 2 && L.push("'" + this.terminals_[y] + "'");
                        var k = "";
                        (k = this.lexer.showPosition
                          ? "Parse error on line " +
                            (o + 1) +
                            ":\n" +
                            this.lexer.showPosition() +
                            "\nExpecting " +
                            L.join(", ") +
                            ", got '" +
                            this.terminals_[h] +
                            "'"
                          : "Parse error on line " +
                            (o + 1) +
                            ": Unexpected " +
                            (1 == h ? "end of input" : "'" + (this.terminals_[h] || h) + "'")),
                          this.parseError(k, {
                            text: this.lexer.match,
                            token: this.terminals_[h] || h,
                            line: this.lexer.yylineno,
                            loc: c,
                            expected: L
                          });
                      }
                      if (3 == d) {
                        if (1 == h) throw new Error(k || "Parsing halted.");
                        (u = this.lexer.yyleng), (a = this.lexer.yytext), (o = this.lexer.yylineno), (c = this.lexer.yylloc), (h = l());
                      }
                      for (; !((2).toString() in s[m]); ) {
                        if (0 == m) throw new Error(k || "Parsing halted.");
                        (v = 1), (n.length = n.length - 2 * v), (r.length = r.length - v), (i.length = i.length - v), (m = n[n.length - 1]);
                      }
                      (_ = h), (h = 2), (p = s[(m = n[n.length - 1])] && s[m][2]), (d = 3);
                    }
                    if (p[0] instanceof Array && p.length > 1)
                      throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + h);
                    switch (p[0]) {
                      case 1:
                        n.push(h),
                          r.push(this.lexer.yytext),
                          i.push(this.lexer.yylloc),
                          n.push(p[1]),
                          (h = null),
                          _
                            ? ((h = _), (_ = null))
                            : ((u = this.lexer.yyleng),
                              (a = this.lexer.yytext),
                              (o = this.lexer.yylineno),
                              (c = this.lexer.yylloc),
                              d > 0 && d--);
                        break;
                      case 2:
                        if (
                          ((g = this.productions_[p[1]][1]),
                          (b.$ = r[r.length - g]),
                          (b._$ = {
                            first_line: i[i.length - (g || 1)].first_line,
                            last_line: i[i.length - 1].last_line,
                            first_column: i[i.length - (g || 1)].first_column,
                            last_column: i[i.length - 1].last_column
                          }),
                          void 0 !== (f = this.performAction.call(b, a, u, o, this.yy, p[1], r, i)))
                        )
                          return f;
                        g && ((n = n.slice(0, -1 * g * 2)), (r = r.slice(0, -1 * g)), (i = i.slice(0, -1 * g))),
                          n.push(this.productions_[p[1]][0]),
                          r.push(b.$),
                          i.push(b._$),
                          (M = s[n[n.length - 2]][n[n.length - 1]]),
                          n.push(M);
                        break;
                      case 3:
                        return !0;
                    }
                  }
                  return !0;
                }
              }),
              (p = (function () {
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
                    for (var n = this._currentRules(), r = 0; r < n.length; r++)
                      if ((e = this._input.match(this.rules[n[r]])))
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
                          this.performAction.call(this, this.yy, this, n[r], this.conditionStack[this.conditionStack.length - 1]) || void 0
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
                  performAction: function (e, t, n, r) {
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
              (m.lexer = p),
              m)),
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
            r = function (e) {
              return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
            },
            i = {
              s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
              m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
              h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
              d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
              M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
              y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function (e) {
              return function (t, n, s, a) {
                var o = r(t),
                  u = i[e][r(t)];
                return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t);
              };
            },
            a = [
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
            months: a,
            monthsShort: a,
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
                r = (e % 100) - n,
                i = e >= 100 ? 100 : null;
              return e + (t[n] || t[r] || t[i]);
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
          function n(e, n, r) {
            return "m" === r
              ? n
                ? "хвіліна"
                : "хвіліну"
              : "h" === r
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
                  }[r],
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
            return e + " " + i({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e);
          }
          function n(e) {
            switch (r(e)) {
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
          function r(e) {
            return e > 9 ? r(e % 10) : e;
          }
          function i(e, t) {
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
            var r = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
              case "dd":
                return (r += 1 === e ? "dan" : "dana");
              case "MM":
                return (r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
              case "yy":
                return (r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
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
          function r(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10);
          }
          function i(e, t, n, i) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || i ? "pár sekund" : "pár sekundami";
              case "m":
                return t ? "minuta" : i ? "minutu" : "minutou";
              case "mm":
                return t || i ? s + (r(e) ? "minuty" : "minut") : s + "minutami";
              case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
              case "hh":
                return t || i ? s + (r(e) ? "hodiny" : "hodin") : s + "hodinami";
              case "d":
                return t || i ? "den" : "dnem";
              case "dd":
                return t || i ? s + (r(e) ? "dny" : "dní") : s + "dny";
              case "M":
                return t || i ? "měsíc" : "měsícem";
              case "MM":
                return t || i ? s + (r(e) ? "měsíce" : "měsíců") : s + "měsíci";
              case "y":
                return t || i ? "rok" : "rokem";
              case "yy":
                return t || i ? s + (r(e) ? "roky" : "let") : s + "lety";
            }
          }
          e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsParse: (function (e, t) {
              var n,
                r = [];
              for (n = 0; n < 12; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
              return r;
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
            relativeTime: { future: "za %s", past: "před %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i },
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
          function t(e, t, n, r) {
            var i = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[n][0] : i[n][1];
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
          function t(e, t, n, r) {
            var i = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[n][0] : i[n][1];
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
              var r = this._calendarEl[e],
                i = n && n.hours();
              return t(r) && (r = r.apply(n)), r.replace("{}", i % 12 == 1 ? "στη" : "στις");
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
            monthsShort: function (e, r) {
              return /-MMM-/.test(r) ? n[e.month()] : t[e.month()];
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
          function t(e, t, n, r) {
            var i = {
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
            return t ? (i[n][2] ? i[n][2] : i[n][1]) : r ? i[n][0] : i[n][1];
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
          function r(e, t, n, r) {
            var s = "";
            switch (n) {
              case "s":
                return r ? "muutaman sekunnin" : "muutama sekunti";
              case "m":
                return r ? "minuutin" : "minuutti";
              case "mm":
                s = r ? "minuutin" : "minuuttia";
                break;
              case "h":
                return r ? "tunnin" : "tunti";
              case "hh":
                s = r ? "tunnin" : "tuntia";
                break;
              case "d":
                return r ? "päivän" : "päivä";
              case "dd":
                s = r ? "päivän" : "päivää";
                break;
              case "M":
                return r ? "kuukauden" : "kuukausi";
              case "MM":
                s = r ? "kuukauden" : "kuukautta";
                break;
              case "y":
                return r ? "vuoden" : "vuosi";
              case "yy":
                s = r ? "vuoden" : "vuotta";
            }
            return (s = i(e, r) + " " + s);
          }
          function i(e, r) {
            return e < 10 ? (r ? n[e] : t[e]) : e;
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
            relativeTime: { future: "%s päästä", past: "%s sitten", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r },
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
            monthsShort: function (e, r) {
              return /-MMM-/.test(r) ? n[e.month()] : t[e.month()];
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
            r = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            i = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
          e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: r,
            weekdaysShort: i,
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
            var r = e + " ";
            switch (n) {
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
              case "dd":
                return (r += 1 === e ? "dan" : "dana");
              case "MM":
                return (r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
              case "yy":
                return (r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
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
          function n(e, t, n, r) {
            var i = e;
            switch (n) {
              case "s":
                return r || t ? "néhány másodperc" : "néhány másodperce";
              case "m":
                return "egy" + (r || t ? " perc" : " perce");
              case "mm":
                return i + (r || t ? " perc" : " perce");
              case "h":
                return "egy" + (r || t ? " óra" : " órája");
              case "hh":
                return i + (r || t ? " óra" : " órája");
              case "d":
                return "egy" + (r || t ? " nap" : " napja");
              case "dd":
                return i + (r || t ? " nap" : " napja");
              case "M":
                return "egy" + (r || t ? " hónap" : " hónapja");
              case "MM":
                return i + (r || t ? " hónap" : " hónapja");
              case "y":
                return "egy" + (r || t ? " év" : " éve");
              case "yy":
                return i + (r || t ? " év" : " éve");
            }
            return "";
          }
          function r(e) {
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
                return r.call(this, !0);
              },
              lastDay: "[tegnap] LT[-kor]",
              lastWeek: function () {
                return r.call(this, !1);
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
          function n(e, n, r, i) {
            var s = e + " ";
            switch (r) {
              case "s":
                return n || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
              case "m":
                return n ? "mínúta" : "mínútu";
              case "mm":
                return t(e) ? s + (n || i ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
              case "hh":
                return t(e) ? s + (n || i ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
              case "d":
                return n ? "dagur" : i ? "dag" : "degi";
              case "dd":
                return t(e) ? (n ? s + "dagar" : s + (i ? "daga" : "dögum")) : n ? s + "dagur" : s + (i ? "dag" : "degi");
              case "M":
                return n ? "mánuður" : i ? "mánuð" : "mánuði";
              case "MM":
                return t(e) ? (n ? s + "mánuðir" : s + (i ? "mánuði" : "mánuðum")) : n ? s + "mánuður" : s + (i ? "mánuð" : "mánuði");
              case "y":
                return n || i ? "ár" : "ári";
              case "yy":
                return t(e) ? s + (n || i ? "ár" : "árum") : s + (n || i ? "ár" : "ári");
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
                r = e >= 100 ? 100 : null;
              return e + (t[e] || t[n] || t[r]);
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
          function t(e, t, n, r) {
            var i = {
              m: ["eng Minutt", "enger Minutt"],
              h: ["eng Stonn", "enger Stonn"],
              d: ["een Dag", "engem Dag"],
              M: ["ee Mount", "engem Mount"],
              y: ["ee Joer", "engem Joer"]
            };
            return t ? i[n][0] : i[n][1];
          }
          function n(e) {
            return i(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
          }
          function r(e) {
            return i(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
          }
          function i(e) {
            if (((e = parseInt(e, 10)), isNaN(e))) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
              var t = e % 10;
              return i(0 === t ? e / 10 : t);
            }
            if (e < 1e4) {
              for (; e >= 10; ) e /= 10;
              return i(e);
            }
            return i((e /= 1e3));
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
              past: r,
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
          function n(e, t, n, r) {
            return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes";
          }
          function r(e, t, n, r) {
            return t ? s(n)[0] : r ? s(n)[1] : s(n)[2];
          }
          function i(e) {
            return e % 10 == 0 || (e > 10 && e < 20);
          }
          function s(e) {
            return t[e].split("_");
          }
          function a(e, t, n, a) {
            var o = e + " ";
            return 1 === e ? o + r(e, t, n[0], a) : t ? o + (i(e) ? s(n)[1] : s(n)[0]) : a ? o + s(n)[1] : o + (i(e) ? s(n)[1] : s(n)[2]);
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
            relativeTime: { future: "po %s", past: "prieš %s", s: n, m: r, mm: a, h: r, hh: a, d: r, dd: a, M: r, MM: a, y: r, yy: a },
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
          function r(e, r, i) {
            return e + " " + n(t[i], e, r);
          }
          function i(e, r, i) {
            return n(t[i], e, r);
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
            relativeTime: { future: "pēc %s", past: "pirms %s", s, m: i, mm: r, h: i, hh: r, d: i, dd: r, M: i, MM: r, y: i, yy: r },
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
            translate: function (e, n, r) {
              var i = t.words[r];
              return 1 === r.length ? (n ? i[0] : i[1]) : e + " " + t.correctGrammaticalCase(e, i);
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
          function r(e, t, n, r) {
            var i = "";
            if (t)
              switch (n) {
                case "s":
                  i = "काही सेकंद";
                  break;
                case "m":
                  i = "एक मिनिट";
                  break;
                case "mm":
                  i = "%d मिनिटे";
                  break;
                case "h":
                  i = "एक तास";
                  break;
                case "hh":
                  i = "%d तास";
                  break;
                case "d":
                  i = "एक दिवस";
                  break;
                case "dd":
                  i = "%d दिवस";
                  break;
                case "M":
                  i = "एक महिना";
                  break;
                case "MM":
                  i = "%d महिने";
                  break;
                case "y":
                  i = "एक वर्ष";
                  break;
                case "yy":
                  i = "%d वर्षे";
              }
            else
              switch (n) {
                case "s":
                  i = "काही सेकंदां";
                  break;
                case "m":
                  i = "एका मिनिटा";
                  break;
                case "mm":
                  i = "%d मिनिटां";
                  break;
                case "h":
                  i = "एका तासा";
                  break;
                case "hh":
                  i = "%d तासां";
                  break;
                case "d":
                  i = "एका दिवसा";
                  break;
                case "dd":
                  i = "%d दिवसां";
                  break;
                case "M":
                  i = "एका महिन्या";
                  break;
                case "MM":
                  i = "%d महिन्यां";
                  break;
                case "y":
                  i = "एका वर्षा";
                  break;
                case "yy":
                  i = "%d वर्षां";
              }
            return i.replace(/%d/i, e);
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
            relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r },
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
            monthsShort: function (e, r) {
              return /-MMM-/.test(r) ? n[e.month()] : t[e.month()];
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
          function r(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
          }
          function i(e, t, n) {
            var i = e + " ";
            switch (n) {
              case "m":
                return t ? "minuta" : "minutę";
              case "mm":
                return i + (r(e) ? "minuty" : "minut");
              case "h":
                return t ? "godzina" : "godzinę";
              case "hh":
                return i + (r(e) ? "godziny" : "godzin");
              case "MM":
                return i + (r(e) ? "miesiące" : "miesięcy");
              case "yy":
                return i + (r(e) ? "lata" : "lat");
            }
          }
          e.defineLocale("pl", {
            months: function (e, r) {
              return "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()];
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
              m: i,
              mm: i,
              h: i,
              hh: i,
              d: "1 dzień",
              dd: "%d dni",
              M: "miesiąc",
              MM: i,
              y: "rok",
              yy: i
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
            var r = " ";
            return (
              (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (r = " de "),
              e + r + { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[n]
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
          function n(e, n, r) {
            return "m" === r
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
                    }[r],
                    +e
                  );
          }
          var r = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
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
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
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
          function r(e) {
            return e > 1 && e < 5;
          }
          function i(e, t, n, i) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || i ? "pár sekúnd" : "pár sekundami";
              case "m":
                return t ? "minúta" : i ? "minútu" : "minútou";
              case "mm":
                return t || i ? s + (r(e) ? "minúty" : "minút") : s + "minútami";
              case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
              case "hh":
                return t || i ? s + (r(e) ? "hodiny" : "hodín") : s + "hodinami";
              case "d":
                return t || i ? "deň" : "dňom";
              case "dd":
                return t || i ? s + (r(e) ? "dni" : "dní") : s + "dňami";
              case "M":
                return t || i ? "mesiac" : "mesiacom";
              case "MM":
                return t || i ? s + (r(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
              case "y":
                return t || i ? "rok" : "rokom";
              case "yy":
                return t || i ? s + (r(e) ? "roky" : "rokov") : s + "rokmi";
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
            relativeTime: { future: "za %s", past: "pred %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
          });
        })(n(381));
      },
      4985: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = e + " ";
            switch (n) {
              case "s":
                return t || r ? "nekaj sekund" : "nekaj sekundami";
              case "m":
                return t ? "ena minuta" : "eno minuto";
              case "mm":
                return (i +=
                  1 === e
                    ? t
                      ? "minuta"
                      : "minuto"
                    : 2 === e
                    ? t || r
                      ? "minuti"
                      : "minutama"
                    : e < 5
                    ? t || r
                      ? "minute"
                      : "minutami"
                    : t || r
                    ? "minut"
                    : "minutami");
              case "h":
                return t ? "ena ura" : "eno uro";
              case "hh":
                return (i +=
                  1 === e
                    ? t
                      ? "ura"
                      : "uro"
                    : 2 === e
                    ? t || r
                      ? "uri"
                      : "urama"
                    : e < 5
                    ? t || r
                      ? "ure"
                      : "urami"
                    : t || r
                    ? "ur"
                    : "urami");
              case "d":
                return t || r ? "en dan" : "enim dnem";
              case "dd":
                return (i += 1 === e ? (t || r ? "dan" : "dnem") : 2 === e ? (t || r ? "dni" : "dnevoma") : t || r ? "dni" : "dnevi");
              case "M":
                return t || r ? "en mesec" : "enim mesecem";
              case "MM":
                return (i +=
                  1 === e
                    ? t || r
                      ? "mesec"
                      : "mesecem"
                    : 2 === e
                    ? t || r
                      ? "meseca"
                      : "mesecema"
                    : e < 5
                    ? t || r
                      ? "mesece"
                      : "meseci"
                    : t || r
                    ? "mesecev"
                    : "meseci");
              case "y":
                return t || r ? "eno leto" : "enim letom";
              case "yy":
                return (i +=
                  1 === e
                    ? t || r
                      ? "leto"
                      : "letom"
                    : 2 === e
                    ? t || r
                      ? "leti"
                      : "letoma"
                    : e < 5
                    ? t || r
                      ? "leta"
                      : "leti"
                    : t || r
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
            translate: function (e, n, r) {
              var i = t.words[r];
              return 1 === r.length ? (n ? i[0] : i[1]) : e + " " + t.correctGrammaticalCase(e, i);
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
            translate: function (e, n, r) {
              var i = t.words[r];
              return 1 === r.length ? (n ? i[0] : i[1]) : e + " " + t.correctGrammaticalCase(e, i);
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
          function r(e) {
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
          function i(e, t, n, r) {
            var i = s(e);
            switch (n) {
              case "mm":
                return i + " tup";
              case "hh":
                return i + " rep";
              case "dd":
                return i + " jaj";
              case "MM":
                return i + " jar";
              case "yy":
                return i + " DIS";
            }
          }
          function s(e) {
            var n = Math.floor((e % 1e3) / 100),
              r = Math.floor((e % 100) / 10),
              i = e % 10,
              s = "";
            return (
              n > 0 && (s += t[n] + "vatlh"),
              r > 0 && (s += ("" !== s ? " " : "") + t[r] + "maH"),
              i > 0 && (s += ("" !== s ? " " : "") + t[i]),
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
              past: r,
              s: "puS lup",
              m: "wa’ tup",
              mm: i,
              h: "wa’ rep",
              hh: i,
              d: "wa’ jaj",
              dd: i,
              M: "wa’ jar",
              MM: i,
              y: "wa’ DIS",
              yy: i
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
                r = (e % 100) - n,
                i = e >= 100 ? 100 : null;
              return e + (t[n] || t[r] || t[i]);
            },
            week: { dow: 1, doy: 7 }
          });
        })(n(381));
      },
      8254: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = {
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
            return r || t ? i[n][0] : i[n][1];
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
          function n(e, n, r) {
            return "m" === r
              ? n
                ? "хвилина"
                : "хвилину"
              : "h" === r
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
                  }[r],
                  +e
                );
          }
          function r(e, t) {
            return {
              nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
              accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
              genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][
              e.day()
            ];
          }
          function i(e) {
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
            weekdays: r,
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
              sameDay: i("[Сьогодні "),
              nextDay: i("[Завтра "),
              lastDay: i("[Вчора "),
              nextWeek: i("[У] dddd ["),
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return i("[Минулої] dddd [").call(this);
                  case 1:
                  case 2:
                  case 4:
                    return i("[Минулого] dddd [").call(this);
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
              var r = 100 * e + t;
              return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
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
              var r = 100 * e + t;
              return r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
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
        var r = {
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
        function i(e) {
          var t = s(e);
          return n(t);
        }
        function s(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (i.keys = function () {
          return Object.keys(r);
        }),
          (i.resolve = s),
          (e.exports = i),
          (i.id = 6700);
      },
      381: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          "use strict";
          var t;
          function r() {
            return t.apply(null, arguments);
          }
          function i(e) {
            t = e;
          }
          function s(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
          }
          function a(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
          }
          function o(e, t) {
            var n,
              r = [];
            for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
            return r;
          }
          function u(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function d(e, t) {
            for (var n in t) u(t, n) && (e[n] = t[n]);
            return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e;
          }
          function c(e, t, n, r) {
            return At(e, t, n, r, !0).utc();
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
          function h(e) {
            return null == e._pf && (e._pf = l()), e._pf;
          }
          function _(e) {
            if (null == e._isValid) {
              var t = h(e);
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
          function m(e) {
            var t = c(NaN);
            return null != e ? d(h(t), e) : (h(t).userInvalidated = !0), t;
          }
          function p(e) {
            return void 0 === e;
          }
          var f = (r.momentProperties = []);
          function y(e, t) {
            var n, r, i;
            if (
              (p(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
              p(t._i) || (e._i = t._i),
              p(t._f) || (e._f = t._f),
              p(t._l) || (e._l = t._l),
              p(t._strict) || (e._strict = t._strict),
              p(t._tzm) || (e._tzm = t._tzm),
              p(t._isUTC) || (e._isUTC = t._isUTC),
              p(t._offset) || (e._offset = t._offset),
              p(t._pf) || (e._pf = h(t)),
              p(t._locale) || (e._locale = t._locale),
              f.length > 0)
            )
              for (n in f) p((i = t[(r = f[n])])) || (e[r] = i);
            return e;
          }
          var g = !1;
          function M(e) {
            y(this, e), (this._d = new Date(null != e._d ? e._d.getTime() : NaN)), !1 === g && ((g = !0), r.updateOffset(this), (g = !1));
          }
          function L(e) {
            return e instanceof M || (null != e && null != e._isAMomentObject);
          }
          function v(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
          }
          function b(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = v(t)), n;
          }
          function k(e, t, n) {
            var r,
              i = Math.min(e.length, t.length),
              s = Math.abs(e.length - t.length),
              a = 0;
            for (r = 0; r < i; r++) ((n && e[r] !== t[r]) || (!n && b(e[r]) !== b(t[r]))) && a++;
            return a + s;
          }
          function Y(e) {
            !1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
          }
          function w(e, t) {
            var n = !0;
            return d(function () {
              return (
                n && (Y(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + new Error().stack), (n = !1)),
                t.apply(this, arguments)
              );
            }, t);
          }
          var T = {};
          function D(e, t) {
            T[e] || (Y(t), (T[e] = !0));
          }
          function S(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
          }
          function x(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          }
          function j(e) {
            var t, n;
            for (n in e) S((t = e[n])) ? (this[n] = t) : (this["_" + n] = t);
            (this._config = e), (this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source));
          }
          function H(e, t) {
            var n,
              r = d({}, e);
            for (n in t)
              u(t, n) && (x(e[n]) && x(t[n]) ? ((r[n] = {}), d(r[n], e[n]), d(r[n], t[n])) : null != t[n] ? (r[n] = t[n]) : delete r[n]);
            return r;
          }
          function E(e) {
            null != e && this.set(e);
          }
          r.suppressDeprecationWarnings = !1;
          var A,
            O = {};
          function P(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function N(e) {
            for (var t, n, r, i, s = 0; s < e.length; ) {
              for (t = (i = P(e[s]).split("-")).length, n = (n = P(e[s + 1])) ? n.split("-") : null; t > 0; ) {
                if ((r = C(i.slice(0, t).join("-")))) return r;
                if (n && n.length >= t && k(i, n, !0) >= t - 1) break;
                t--;
              }
              s++;
            }
            return null;
          }
          function C(t) {
            var r = null;
            if (!O[t] && e && e.exports)
              try {
                (r = A._abbr), n(6700)("./" + t), R(r);
              } catch (e) {}
            return O[t];
          }
          function R(e, t) {
            var n;
            return e && (n = p(t) ? I(e) : W(e, t)) && (A = n), A._abbr;
          }
          function W(e, t) {
            return null !== t
              ? ((t.abbr = e),
                null != O[e]
                  ? (D(
                      "defineLocaleOverride",
                      "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"
                    ),
                    (t = H(O[e]._config, t)))
                  : null != t.parentLocale &&
                    (null != O[t.parentLocale]
                      ? (t = H(O[t.parentLocale]._config, t))
                      : D("parentLocaleUndefined", "specified parentLocale is not defined yet")),
                (O[e] = new E(t)),
                R(e),
                O[e])
              : (delete O[e], null);
          }
          function F(e, t) {
            var n;
            return (
              null != t
                ? (null != O[e] && (t = H(O[e]._config, t)), ((n = new E(t)).parentLocale = O[e]), (O[e] = n), R(e))
                : null != O[e] && (null != O[e].parentLocale ? (O[e] = O[e].parentLocale) : null != O[e] && delete O[e]),
              O[e]
            );
          }
          function I(e) {
            var t;
            if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return A;
            if (!s(e)) {
              if ((t = C(e))) return t;
              e = [e];
            }
            return N(e);
          }
          function z() {
            return Object.keys(O);
          }
          var U = {};
          function V(e, t) {
            var n = e.toLowerCase();
            U[n] = U[n + "s"] = U[t] = e;
          }
          function G(e) {
            return "string" == typeof e ? U[e] || U[e.toLowerCase()] : void 0;
          }
          function B(e) {
            var t,
              n,
              r = {};
            for (n in e) u(e, n) && (t = G(n)) && (r[t] = e[n]);
            return r;
          }
          function J(e, t) {
            return function (n) {
              return null != n ? (q(this, e, n), r.updateOffset(this, t), this) : $(this, e);
            };
          }
          function $(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
          }
          function q(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
          }
          function K(e, t) {
            var n;
            if ("object" == typeof e) for (n in e) this.set(n, e[n]);
            else if (S(this[(e = G(e))])) return this[e](t);
            return this;
          }
          function X(e, t, n) {
            var r = "" + Math.abs(e),
              i = t - r.length;
            return (e >= 0 ? (n ? "+" : "") : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
          }
          var Z =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            ee = {},
            te = {};
          function ne(e, t, n, r) {
            var i = r;
            "string" == typeof r &&
              (i = function () {
                return this[r]();
              }),
              e && (te[e] = i),
              t &&
                (te[t[0]] = function () {
                  return X(i.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (te[n] = function () {
                  return this.localeData().ordinal(i.apply(this, arguments), e);
                });
          }
          function re(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
          }
          function ie(e) {
            var t,
              n,
              r = e.match(Z);
            for (t = 0, n = r.length; t < n; t++) te[r[t]] ? (r[t] = te[r[t]]) : (r[t] = re(r[t]));
            return function (i) {
              var s = "";
              for (t = 0; t < n; t++) s += r[t] instanceof Function ? r[t].call(i, e) : r[t];
              return s;
            };
          }
          function se(e, t) {
            return e.isValid() ? ((t = ae(t, e.localeData())), (ee[t] = ee[t] || ie(t)), ee[t](e)) : e.localeData().invalidDate();
          }
          function ae(e, t) {
            var n = 5;
            function r(e) {
              return t.longDateFormat(e) || e;
            }
            for (Q.lastIndex = 0; n >= 0 && Q.test(e); ) (e = e.replace(Q, r)), (Q.lastIndex = 0), (n -= 1);
            return e;
          }
          var oe = /\d/,
            ue = /\d\d/,
            de = /\d{3}/,
            ce = /\d{4}/,
            le = /[+-]?\d{6}/,
            he = /\d\d?/,
            _e = /\d\d\d\d?/,
            me = /\d\d\d\d\d\d?/,
            pe = /\d{1,3}/,
            fe = /\d{1,4}/,
            ye = /[+-]?\d{1,6}/,
            ge = /\d+/,
            Me = /[+-]?\d+/,
            Le = /Z|[+-]\d\d:?\d\d/gi,
            ve = /Z|[+-]\d\d(?::?\d\d)?/gi,
            be = /[+-]?\d+(\.\d{1,3})?/,
            ke = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Ye = {};
          function we(e, t, n) {
            Ye[e] = S(t)
              ? t
              : function (e, r) {
                  return e && n ? n : t;
                };
          }
          function Te(e, t) {
            return u(Ye, e) ? Ye[e](t._strict, t._locale) : new RegExp(De(e));
          }
          function De(e) {
            return Se(
              e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, i) {
                return t || n || r || i;
              })
            );
          }
          function Se(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          var xe = {};
          function je(e, t) {
            var n,
              r = t;
            for (
              "string" == typeof e && (e = [e]),
                "number" == typeof t &&
                  (r = function (e, n) {
                    n[t] = b(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              xe[e[n]] = r;
          }
          function He(e, t) {
            je(e, function (e, n, r, i) {
              (r._w = r._w || {}), t(e, r._w, r, i);
            });
          }
          function Ee(e, t, n) {
            null != t && u(xe, e) && xe[e](t, n._a, n, e);
          }
          var Ae = 0,
            Oe = 1,
            Pe = 2,
            Ne = 3,
            Ce = 4,
            Re = 5,
            We = 6,
            Fe = 7,
            Ie = 8;
          function ze(e, t) {
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
            V("month", "M"),
            we("M", he),
            we("MM", he, ue),
            we("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            we("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            je(["M", "MM"], function (e, t) {
              t[Oe] = b(e) - 1;
            }),
            je(["MMM", "MMMM"], function (e, t, n, r) {
              var i = n._locale.monthsParse(e, r, n._strict);
              null != i ? (t[Oe] = i) : (h(n).invalidMonth = e);
            });
          var Ue = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            Ve = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
          function Ge(e, t) {
            return s(this._months) ? this._months[e.month()] : this._months[Ue.test(t) ? "format" : "standalone"][e.month()];
          }
          var Be = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
          function Je(e, t) {
            return s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ue.test(t) ? "format" : "standalone"][e.month()];
          }
          function $e(e, t, n) {
            var r, i, s;
            for (
              this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), r = 0;
              r < 12;
              r++
            ) {
              if (
                ((i = c([2e3, r])),
                n &&
                  !this._longMonthsParse[r] &&
                  ((this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i")),
                  (this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i"))),
                n ||
                  this._monthsParse[r] ||
                  ((s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
                  (this._monthsParse[r] = new RegExp(s.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[r].test(e))
              )
                return r;
              if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
              if (!n && this._monthsParse[r].test(e)) return r;
            }
          }
          function qe(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
              if (/^\d+$/.test(t)) t = b(t);
              else if ("number" != typeof (t = e.localeData().monthsParse(t))) return e;
            return (n = Math.min(e.date(), ze(e.year(), t))), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
          }
          function Ke(e) {
            return null != e ? (qe(this, e), r.updateOffset(this, !0), this) : $(this, "Month");
          }
          function Xe() {
            return ze(this.year(), this.month());
          }
          var Ze = ke;
          function Qe(e) {
            return this._monthsParseExact
              ? (u(this, "_monthsRegex") || nt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex;
          }
          var et = ke;
          function tt(e) {
            return this._monthsParseExact
              ? (u(this, "_monthsRegex") || nt.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
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
              r = [],
              i = [],
              s = [];
            for (t = 0; t < 12; t++)
              (n = c([2e3, t])),
                r.push(this.monthsShort(n, "")),
                i.push(this.months(n, "")),
                s.push(this.months(n, "")),
                s.push(this.monthsShort(n, ""));
            for (r.sort(e), i.sort(e), s.sort(e), t = 0; t < 12; t++) (r[t] = Se(r[t])), (i[t] = Se(i[t])), (s[t] = Se(s[t]));
            (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")$", "i")),
              (this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")$", "i"));
          }
          function rt(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === h(e).overflow &&
                ((t =
                  n[Oe] < 0 || n[Oe] > 11
                    ? Oe
                    : n[Pe] < 1 || n[Pe] > ze(n[Ae], n[Oe])
                    ? Pe
                    : n[Ne] < 0 || n[Ne] > 24 || (24 === n[Ne] && (0 !== n[Ce] || 0 !== n[Re] || 0 !== n[We]))
                    ? Ne
                    : n[Ce] < 0 || n[Ce] > 59
                    ? Ce
                    : n[Re] < 0 || n[Re] > 59
                    ? Re
                    : n[We] < 0 || n[We] > 999
                    ? We
                    : -1),
                h(e)._overflowDayOfYear && (t < Ae || t > Pe) && (t = Pe),
                h(e)._overflowWeeks && -1 === t && (t = Fe),
                h(e)._overflowWeekday && -1 === t && (t = Ie),
                (h(e).overflow = t)),
              e
            );
          }
          var it =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            st =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            at = /Z|[+-]\d\d(?::?\d\d)?/,
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
            ut = [
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
            dt = /^\/?Date\((\-?\d+)/i;
          function ct(e) {
            var t,
              n,
              r,
              i,
              s,
              a,
              o = e._i,
              u = it.exec(o) || st.exec(o);
            if (u) {
              for (h(e).iso = !0, t = 0, n = ot.length; t < n; t++)
                if (ot[t][1].exec(u[1])) {
                  (i = ot[t][0]), (r = !1 !== ot[t][2]);
                  break;
                }
              if (null == i) return void (e._isValid = !1);
              if (u[3]) {
                for (t = 0, n = ut.length; t < n; t++)
                  if (ut[t][1].exec(u[3])) {
                    s = (u[2] || " ") + ut[t][0];
                    break;
                  }
                if (null == s) return void (e._isValid = !1);
              }
              if (!r && null != s) return void (e._isValid = !1);
              if (u[4]) {
                if (!at.exec(u[4])) return void (e._isValid = !1);
                a = "Z";
              }
              (e._f = i + (s || "") + (a || "")), Tt(e);
            } else e._isValid = !1;
          }
          function lt(e) {
            var t = dt.exec(e._i);
            null === t ? (ct(e), !1 === e._isValid && (delete e._isValid, r.createFromInputFallback(e))) : (e._d = new Date(+t[1]));
          }
          function ht(e, t, n, r, i, s, a) {
            var o = new Date(e, t, n, r, i, s, a);
            return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o;
          }
          function _t(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
          }
          function mt(e) {
            return pt(e) ? 366 : 365;
          }
          function pt(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          (r.createFromInputFallback = w(
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
            V("year", "y"),
            we("Y", Me),
            we("YY", he, ue),
            we("YYYY", fe, ce),
            we("YYYYY", ye, le),
            we("YYYYYY", ye, le),
            je(["YYYYY", "YYYYYY"], Ae),
            je("YYYY", function (e, t) {
              t[Ae] = 2 === e.length ? r.parseTwoDigitYear(e) : b(e);
            }),
            je("YY", function (e, t) {
              t[Ae] = r.parseTwoDigitYear(e);
            }),
            je("Y", function (e, t) {
              t[Ae] = parseInt(e, 10);
            }),
            (r.parseTwoDigitYear = function (e) {
              return b(e) + (b(e) > 68 ? 1900 : 2e3);
            });
          var ft = J("FullYear", !1);
          function yt() {
            return pt(this.year());
          }
          function gt(e, t, n) {
            var r = 7 + t - n;
            return (-(7 + _t(e, 0, r).getUTCDay() - t) % 7) + r - 1;
          }
          function Mt(e, t, n, r, i) {
            var s,
              a,
              o = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + gt(e, r, i);
            return (
              o <= 0 ? (a = mt((s = e - 1)) + o) : o > mt(e) ? ((s = e + 1), (a = o - mt(e))) : ((s = e), (a = o)),
              { year: s, dayOfYear: a }
            );
          }
          function Lt(e, t, n) {
            var r,
              i,
              s = gt(e.year(), t, n),
              a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return (
              a < 1
                ? (r = a + vt((i = e.year() - 1), t, n))
                : a > vt(e.year(), t, n)
                ? ((r = a - vt(e.year(), t, n)), (i = e.year() + 1))
                : ((i = e.year()), (r = a)),
              { week: r, year: i }
            );
          }
          function vt(e, t, n) {
            var r = gt(e, t, n),
              i = gt(e + 1, t, n);
            return (mt(e) - r + i) / 7;
          }
          function bt(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function kt(e) {
            var t = new Date(r.now());
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()];
          }
          function Yt(e) {
            var t,
              n,
              r,
              i,
              s = [];
            if (!e._d) {
              for (
                r = kt(e),
                  e._w && null == e._a[Pe] && null == e._a[Oe] && wt(e),
                  e._dayOfYear &&
                    ((i = bt(e._a[Ae], r[Ae])),
                    e._dayOfYear > mt(i) && (h(e)._overflowDayOfYear = !0),
                    (n = _t(i, 0, e._dayOfYear)),
                    (e._a[Oe] = n.getUTCMonth()),
                    (e._a[Pe] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = s[t] = r[t];
              for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[Ne] && 0 === e._a[Ce] && 0 === e._a[Re] && 0 === e._a[We] && ((e._nextDay = !0), (e._a[Ne] = 0)),
                (e._d = (e._useUTC ? _t : ht).apply(null, s)),
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[Ne] = 24);
            }
          }
          function wt(e) {
            var t, n, r, i, s, a, o, u;
            null != (t = e._w).GG || null != t.W || null != t.E
              ? ((s = 1),
                (a = 4),
                (n = bt(t.GG, e._a[Ae], Lt(Ot(), 1, 4).year)),
                (r = bt(t.W, 1)),
                ((i = bt(t.E, 1)) < 1 || i > 7) && (u = !0))
              : ((s = e._locale._week.dow),
                (a = e._locale._week.doy),
                (n = bt(t.gg, e._a[Ae], Lt(Ot(), s, a).year)),
                (r = bt(t.w, 1)),
                null != t.d
                  ? ((i = t.d) < 0 || i > 6) && (u = !0)
                  : null != t.e
                  ? ((i = t.e + s), (t.e < 0 || t.e > 6) && (u = !0))
                  : (i = s)),
              r < 1 || r > vt(n, s, a)
                ? (h(e)._overflowWeeks = !0)
                : null != u
                ? (h(e)._overflowWeekday = !0)
                : ((o = Mt(n, r, i, s, a)), (e._a[Ae] = o.year), (e._dayOfYear = o.dayOfYear));
          }
          function Tt(e) {
            if (e._f !== r.ISO_8601) {
              (e._a = []), (h(e).empty = !0);
              var t,
                n,
                i,
                s,
                a,
                o = "" + e._i,
                u = o.length,
                d = 0;
              for (i = ae(e._f, e._locale).match(Z) || [], t = 0; t < i.length; t++)
                (s = i[t]),
                  (n = (o.match(Te(s, e)) || [])[0]) &&
                    ((a = o.substr(0, o.indexOf(n))).length > 0 && h(e).unusedInput.push(a),
                    (o = o.slice(o.indexOf(n) + n.length)),
                    (d += n.length)),
                  te[s] ? (n ? (h(e).empty = !1) : h(e).unusedTokens.push(s), Ee(s, n, e)) : e._strict && !n && h(e).unusedTokens.push(s);
              (h(e).charsLeftOver = u - d),
                o.length > 0 && h(e).unusedInput.push(o),
                !0 === h(e).bigHour && e._a[Ne] <= 12 && e._a[Ne] > 0 && (h(e).bigHour = void 0),
                (e._a[Ne] = Dt(e._locale, e._a[Ne], e._meridiem)),
                Yt(e),
                rt(e);
            } else ct(e);
          }
          function Dt(e, t, n) {
            var r;
            return null == n
              ? t
              : null != e.meridiemHour
              ? e.meridiemHour(t, n)
              : null != e.isPM
              ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t)
              : t;
          }
          function St(e) {
            var t, n, r, i, s;
            if (0 === e._f.length) return (h(e).invalidFormat = !0), void (e._d = new Date(NaN));
            for (i = 0; i < e._f.length; i++)
              (s = 0),
                (t = y({}, e)),
                null != e._useUTC && (t._useUTC = e._useUTC),
                (t._f = e._f[i]),
                Tt(t),
                _(t) &&
                  ((s += h(t).charsLeftOver),
                  (s += 10 * h(t).unusedTokens.length),
                  (h(t).score = s),
                  (null == r || s < r) && ((r = s), (n = t)));
            d(e, n || t);
          }
          function xt(e) {
            if (!e._d) {
              var t = B(e._i);
              (e._a = o([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                return e && parseInt(e, 10);
              })),
                Yt(e);
            }
          }
          function jt(e) {
            var t = new M(rt(Ht(e)));
            return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
          }
          function Ht(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || I(e._l)),
              null === t || (void 0 === n && "" === t)
                ? m({ nullInput: !0 })
                : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                  L(t) ? new M(rt(t)) : (s(n) ? St(e) : n ? Tt(e) : a(t) ? (e._d = t) : Et(e), _(e) || (e._d = null), e))
            );
          }
          function Et(e) {
            var t = e._i;
            void 0 === t
              ? (e._d = new Date(r.now()))
              : a(t)
              ? (e._d = new Date(+t))
              : "string" == typeof t
              ? lt(e)
              : s(t)
              ? ((e._a = o(t.slice(0), function (e) {
                  return parseInt(e, 10);
                })),
                Yt(e))
              : "object" == typeof t
              ? xt(e)
              : "number" == typeof t
              ? (e._d = new Date(t))
              : r.createFromInputFallback(e);
          }
          function At(e, t, n, r, i) {
            var s = {};
            return (
              "boolean" == typeof n && ((r = n), (n = void 0)),
              (s._isAMomentObject = !0),
              (s._useUTC = s._isUTC = i),
              (s._l = n),
              (s._i = e),
              (s._f = t),
              (s._strict = r),
              jt(s)
            );
          }
          function Ot(e, t, n, r) {
            return At(e, t, n, r, !1);
          }
          r.ISO_8601 = function () {};
          var Pt = w("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
              var e = Ot.apply(null, arguments);
              return this.isValid() && e.isValid() ? (e < this ? this : e) : m();
            }),
            Nt = w("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
              var e = Ot.apply(null, arguments);
              return this.isValid() && e.isValid() ? (e > this ? this : e) : m();
            });
          function Ct(e, t) {
            var n, r;
            if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return Ot();
            for (n = t[0], r = 1; r < t.length; ++r) (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          }
          function Rt() {
            return Ct("isBefore", [].slice.call(arguments, 0));
          }
          function Wt() {
            return Ct("isAfter", [].slice.call(arguments, 0));
          }
          var Ft = function () {
            return Date.now ? Date.now() : +new Date();
          };
          function It(e) {
            var t = B(e),
              n = t.year || 0,
              r = t.quarter || 0,
              i = t.month || 0,
              s = t.week || 0,
              a = t.day || 0,
              o = t.hour || 0,
              u = t.minute || 0,
              d = t.second || 0,
              c = t.millisecond || 0;
            (this._milliseconds = +c + 1e3 * d + 6e4 * u + 36e5 * o),
              (this._days = +a + 7 * s),
              (this._months = +i + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = I()),
              this._bubble();
          }
          function zt(e) {
            return e instanceof It;
          }
          function Ut(e, t) {
            ne(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return e < 0 && ((e = -e), (n = "-")), n + X(~~(e / 60), 2) + t + X(~~e % 60, 2);
            });
          }
          Ut("Z", ":"),
            Ut("ZZ", ""),
            we("Z", ve),
            we("ZZ", ve),
            je(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = Gt(ve, e));
            });
          var Vt = /([\+\-]|\d\d)/gi;
          function Gt(e, t) {
            var n = (t || "").match(e) || [],
              r = ((n[n.length - 1] || []) + "").match(Vt) || ["-", 0, 0],
              i = 60 * r[1] + b(r[2]);
            return "+" === r[0] ? i : -i;
          }
          function Bt(e, t) {
            var n, i;
            return t._isUTC
              ? ((n = t.clone()), (i = (L(e) || a(e) ? +e : +Ot(e)) - +n), n._d.setTime(+n._d + i), r.updateOffset(n, !1), n)
              : Ot(e).local();
          }
          function Jt(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
          }
          function $t(e, t) {
            var n,
              i = this._offset || 0;
            return this.isValid()
              ? null != e
                ? ("string" == typeof e ? (e = Gt(ve, e)) : Math.abs(e) < 16 && (e *= 60),
                  !this._isUTC && t && (n = Jt(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != n && this.add(n, "m"),
                  i !== e &&
                    (!t || this._changeInProgress
                      ? mn(this, un(e - i, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0), r.updateOffset(this, !0), (this._changeInProgress = null))),
                  this)
                : this._isUTC
                ? i
                : Jt(this)
              : null != e
              ? this
              : NaN;
          }
          function qt(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
          }
          function Kt(e) {
            return this.utcOffset(0, e);
          }
          function Xt(e) {
            return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(Jt(this), "m")), this;
          }
          function Zt() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Gt(Le, this._i)), this;
          }
          function Qt(e) {
            return !!this.isValid() && ((e = e ? Ot(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
          }
          function en() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
          }
          function tn() {
            if (!p(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if ((y(e, this), (e = Ht(e))._a)) {
              var t = e._isUTC ? c(e._a) : Ot(e._a);
              this._isDSTShifted = this.isValid() && k(e._a, t.toArray()) > 0;
            } else this._isDSTShifted = !1;
            return this._isDSTShifted;
          }
          function nn() {
            return !!this.isValid() && !this._isUTC;
          }
          function rn() {
            return !!this.isValid() && this._isUTC;
          }
          function sn() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          r.updateOffset = function () {};
          var an = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
            on =
              /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
          function un(e, t) {
            var n,
              r,
              i,
              s = e,
              a = null;
            return (
              zt(e)
                ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
                : "number" == typeof e
                ? ((s = {}), t ? (s[t] = e) : (s.milliseconds = e))
                : (a = an.exec(e))
                ? ((n = "-" === a[1] ? -1 : 1),
                  (s = { y: 0, d: b(a[Pe]) * n, h: b(a[Ne]) * n, m: b(a[Ce]) * n, s: b(a[Re]) * n, ms: b(a[We]) * n }))
                : (a = on.exec(e))
                ? ((n = "-" === a[1] ? -1 : 1),
                  (s = { y: dn(a[2], n), M: dn(a[3], n), w: dn(a[4], n), d: dn(a[5], n), h: dn(a[6], n), m: dn(a[7], n), s: dn(a[8], n) }))
                : null == s
                ? (s = {})
                : "object" == typeof s &&
                  ("from" in s || "to" in s) &&
                  ((i = ln(Ot(s.from), Ot(s.to))), ((s = {}).ms = i.milliseconds), (s.M = i.months)),
              (r = new It(s)),
              zt(e) && u(e, "_locale") && (r._locale = e._locale),
              r
            );
          }
          function dn(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function cn(e, t) {
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
              ? ((t = Bt(t, e)),
                e.isBefore(t) ? (n = cn(e, t)) : (((n = cn(t, e)).milliseconds = -n.milliseconds), (n.months = -n.months)),
                n)
              : { milliseconds: 0, months: 0 };
          }
          function hn(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function _n(e, t) {
            return function (n, r) {
              var i;
              return (
                null === r ||
                  isNaN(+r) ||
                  (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."),
                  (i = n),
                  (n = r),
                  (r = i)),
                mn(this, un((n = "string" == typeof n ? +n : n), r), e),
                this
              );
            };
          }
          function mn(e, t, n, i) {
            var s = t._milliseconds,
              a = hn(t._days),
              o = hn(t._months);
            e.isValid() &&
              ((i = null == i || i),
              s && e._d.setTime(+e._d + s * n),
              a && q(e, "Date", $(e, "Date") + a * n),
              o && qe(e, $(e, "Month") + o * n),
              i && r.updateOffset(e, a || o));
          }
          un.fn = It.prototype;
          var pn = _n(1, "add"),
            fn = _n(-1, "subtract");
          function yn(e, t) {
            var n = e || Ot(),
              r = Bt(n, this).startOf("day"),
              i = this.diff(r, "days", !0),
              s =
                i < -6
                  ? "sameElse"
                  : i < -1
                  ? "lastWeek"
                  : i < 0
                  ? "lastDay"
                  : i < 1
                  ? "sameDay"
                  : i < 2
                  ? "nextDay"
                  : i < 7
                  ? "nextWeek"
                  : "sameElse",
              a = t && (S(t[s]) ? t[s]() : t[s]);
            return this.format(a || this.localeData().calendar(s, this, Ot(n)));
          }
          function gn() {
            return new M(this);
          }
          function Mn(e, t) {
            var n = L(e) ? e : Ot(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = G(p(t) ? "millisecond" : t)) ? +this > +n : +n < +this.clone().startOf(t))
            );
          }
          function Ln(e, t) {
            var n = L(e) ? e : Ot(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = G(p(t) ? "millisecond" : t)) ? +this < +n : +this.clone().endOf(t) < +n)
            );
          }
          function vn(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n);
          }
          function bn(e, t) {
            var n,
              r = L(e) ? e : Ot(e);
            return (
              !(!this.isValid() || !r.isValid()) &&
              ("millisecond" === (t = G(t || "millisecond"))
                ? +this == +r
                : ((n = +r), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t)))
            );
          }
          function kn(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }
          function Yn(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }
          function wn(e, t, n) {
            var r, i, s, a;
            return this.isValid() && (r = Bt(e, this)).isValid()
              ? ((i = 6e4 * (r.utcOffset() - this.utcOffset())),
                "year" === (t = G(t)) || "month" === t || "quarter" === t
                  ? ((a = Tn(this, r)), "quarter" === t ? (a /= 3) : "year" === t && (a /= 12))
                  : ((s = this - r),
                    (a =
                      "second" === t
                        ? s / 1e3
                        : "minute" === t
                        ? s / 6e4
                        : "hour" === t
                        ? s / 36e5
                        : "day" === t
                        ? (s - i) / 864e5
                        : "week" === t
                        ? (s - i) / 6048e5
                        : s)),
                n ? a : v(a))
              : NaN;
          }
          function Tn(e, t) {
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(n, "months");
            return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r)));
          }
          function Dn() {
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
          function xn(e) {
            var t = se(this, e || r.defaultFormat);
            return this.localeData().postformat(t);
          }
          function jn(e, t) {
            return this.isValid() && ((L(e) && e.isValid()) || Ot(e).isValid())
              ? un({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function Hn(e) {
            return this.from(Ot(), e);
          }
          function En(e, t) {
            return this.isValid() && ((L(e) && e.isValid()) || Ot(e).isValid())
              ? un({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }
          function An(e) {
            return this.to(Ot(), e);
          }
          function On(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (null != (t = I(e)) && (this._locale = t), this);
          }
          r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
          var Pn = w(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function Nn() {
            return this._locale;
          }
          function Cn(e) {
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
          function Rn(e) {
            return void 0 === (e = G(e)) || "millisecond" === e
              ? this
              : this.startOf(e)
                  .add(1, "isoWeek" === e ? "week" : e)
                  .subtract(1, "ms");
          }
          function Wn() {
            return +this._d - 6e4 * (this._offset || 0);
          }
          function Fn() {
            return Math.floor(+this / 1e3);
          }
          function In() {
            return this._offset ? new Date(+this) : this._d;
          }
          function zn() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
          }
          function Un() {
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
          function Vn() {
            return this.isValid() ? this.toISOString() : null;
          }
          function Gn() {
            return _(this);
          }
          function Bn() {
            return d({}, h(this));
          }
          function Jn() {
            return h(this).overflow;
          }
          function $n() {
            return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
          }
          function qn(e, t) {
            ne(0, [e, e.length], 0, t);
          }
          function Kn(e) {
            return er.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
          }
          function Xn(e) {
            return er.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function Zn() {
            return vt(this.year(), 1, 4);
          }
          function Qn() {
            var e = this.localeData()._week;
            return vt(this.year(), e.dow, e.doy);
          }
          function er(e, t, n, r, i) {
            var s;
            return null == e ? Lt(this, r, i).year : (t > (s = vt(e, r, i)) && (t = s), tr.call(this, e, t, n, r, i));
          }
          function tr(e, t, n, r, i) {
            var s = Mt(e, t, n, r, i),
              a = _t(s.year, 0, s.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
          }
          function nr(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
          }
          function rr(e) {
            return Lt(e, this._week.dow, this._week.doy).week;
          }
          ne(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
            ne(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            qn("gggg", "weekYear"),
            qn("ggggg", "weekYear"),
            qn("GGGG", "isoWeekYear"),
            qn("GGGGG", "isoWeekYear"),
            V("weekYear", "gg"),
            V("isoWeekYear", "GG"),
            we("G", Me),
            we("g", Me),
            we("GG", he, ue),
            we("gg", he, ue),
            we("GGGG", fe, ce),
            we("gggg", fe, ce),
            we("GGGGG", ye, le),
            we("ggggg", ye, le),
            He(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
              t[r.substr(0, 2)] = b(e);
            }),
            He(["gg", "GG"], function (e, t, n, i) {
              t[i] = r.parseTwoDigitYear(e);
            }),
            ne("Q", 0, "Qo", "quarter"),
            V("quarter", "Q"),
            we("Q", oe),
            je("Q", function (e, t) {
              t[Oe] = 3 * (b(e) - 1);
            }),
            ne("w", ["ww", 2], "wo", "week"),
            ne("W", ["WW", 2], "Wo", "isoWeek"),
            V("week", "w"),
            V("isoWeek", "W"),
            we("w", he),
            we("ww", he, ue),
            we("W", he),
            we("WW", he, ue),
            He(["w", "ww", "W", "WW"], function (e, t, n, r) {
              t[r.substr(0, 1)] = b(e);
            });
          var ir = { dow: 0, doy: 6 };
          function sr() {
            return this._week.dow;
          }
          function ar() {
            return this._week.doy;
          }
          function or(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          function ur(e) {
            var t = Lt(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d");
          }
          ne("D", ["DD", 2], "Do", "date"),
            V("date", "D"),
            we("D", he),
            we("DD", he, ue),
            we("Do", function (e, t) {
              return e ? t._ordinalParse : t._ordinalParseLenient;
            }),
            je(["D", "DD"], Pe),
            je("Do", function (e, t) {
              t[Pe] = b(e.match(he)[0], 10);
            });
          var dr = J("Date", !0);
          function cr(e, t) {
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
            V("day", "d"),
            V("weekday", "e"),
            V("isoWeekday", "E"),
            we("d", he),
            we("e", he),
            we("E", he),
            we("dd", ke),
            we("ddd", ke),
            we("dddd", ke),
            He(["dd", "ddd", "dddd"], function (e, t, n, r) {
              var i = n._locale.weekdaysParse(e, r, n._strict);
              null != i ? (t.d = i) : (h(n).invalidWeekday = e);
            }),
            He(["d", "e", "E"], function (e, t, n, r) {
              t[r] = b(e);
            });
          var lr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
          function hr(e, t) {
            return s(this._weekdays)
              ? this._weekdays[e.day()]
              : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()];
          }
          var _r = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
          function mr(e) {
            return this._weekdaysShort[e.day()];
          }
          var pr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
          function fr(e) {
            return this._weekdaysMin[e.day()];
          }
          function yr(e, t, n) {
            var r, i, s;
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                r = 0;
              r < 7;
              r++
            ) {
              if (
                ((i = Ot([2e3, 1]).day(r)),
                n &&
                  !this._fullWeekdaysParse[r] &&
                  ((this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i")),
                  (this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i")),
                  (this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i"))),
                this._weekdaysParse[r] ||
                  ((s = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, "")),
                  (this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i"))),
                n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
              )
                return r;
              if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
              if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
              if (!n && this._weekdaysParse[r].test(e)) return r;
            }
          }
          function gr(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? ((e = cr(e, this.localeData())), this.add(e - t, "d")) : t;
          }
          function Mr(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }
          function Lr(e) {
            return this.isValid() ? (null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)) : null != e ? this : NaN;
          }
          function vr(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d");
          }
          function br() {
            return this.hours() % 12 || 12;
          }
          function kr(e, t) {
            ne(e, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), t);
            });
          }
          function Yr(e, t) {
            return t._meridiemParse;
          }
          function wr(e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }
          ne("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            V("dayOfYear", "DDD"),
            we("DDD", pe),
            we("DDDD", de),
            je(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = b(e);
            }),
            ne("H", ["HH", 2], 0, "hour"),
            ne("h", ["hh", 2], 0, br),
            ne("hmm", 0, 0, function () {
              return "" + br.apply(this) + X(this.minutes(), 2);
            }),
            ne("hmmss", 0, 0, function () {
              return "" + br.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2);
            }),
            ne("Hmm", 0, 0, function () {
              return "" + this.hours() + X(this.minutes(), 2);
            }),
            ne("Hmmss", 0, 0, function () {
              return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2);
            }),
            kr("a", !0),
            kr("A", !1),
            V("hour", "h"),
            we("a", Yr),
            we("A", Yr),
            we("H", he),
            we("h", he),
            we("HH", he, ue),
            we("hh", he, ue),
            we("hmm", _e),
            we("hmmss", me),
            we("Hmm", _e),
            we("Hmmss", me),
            je(["H", "HH"], Ne),
            je(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            je(["h", "hh"], function (e, t, n) {
              (t[Ne] = b(e)), (h(n).bigHour = !0);
            }),
            je("hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[Ne] = b(e.substr(0, r))), (t[Ce] = b(e.substr(r))), (h(n).bigHour = !0);
            }),
            je("hmmss", function (e, t, n) {
              var r = e.length - 4,
                i = e.length - 2;
              (t[Ne] = b(e.substr(0, r))), (t[Ce] = b(e.substr(r, 2))), (t[Re] = b(e.substr(i))), (h(n).bigHour = !0);
            }),
            je("Hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[Ne] = b(e.substr(0, r))), (t[Ce] = b(e.substr(r)));
            }),
            je("Hmmss", function (e, t, n) {
              var r = e.length - 4,
                i = e.length - 2;
              (t[Ne] = b(e.substr(0, r))), (t[Ce] = b(e.substr(r, 2))), (t[Re] = b(e.substr(i)));
            });
          var Tr = /[ap]\.?m?\.?/i;
          function Dr(e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }
          var Sr = J("Hours", !0);
          ne("m", ["mm", 2], 0, "minute"), V("minute", "m"), we("m", he), we("mm", he, ue), je(["m", "mm"], Ce);
          var xr = J("Minutes", !1);
          ne("s", ["ss", 2], 0, "second"), V("second", "s"), we("s", he), we("ss", he, ue), je(["s", "ss"], Re);
          var jr,
            Hr = J("Seconds", !1);
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
              V("millisecond", "ms"),
              we("S", pe, oe),
              we("SS", pe, ue),
              we("SSS", pe, de),
              jr = "SSSS";
            jr.length <= 9;
            jr += "S"
          )
            we(jr, ge);
          function Er(e, t) {
            t[We] = b(1e3 * ("0." + e));
          }
          for (jr = "S"; jr.length <= 9; jr += "S") je(jr, Er);
          var Ar = J("Milliseconds", !1);
          function Or() {
            return this._isUTC ? "UTC" : "";
          }
          function Pr() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          ne("z", 0, 0, "zoneAbbr"), ne("zz", 0, 0, "zoneName");
          var Nr = M.prototype;
          (Nr.add = pn),
            (Nr.calendar = yn),
            (Nr.clone = gn),
            (Nr.diff = wn),
            (Nr.endOf = Rn),
            (Nr.format = xn),
            (Nr.from = jn),
            (Nr.fromNow = Hn),
            (Nr.to = En),
            (Nr.toNow = An),
            (Nr.get = K),
            (Nr.invalidAt = Jn),
            (Nr.isAfter = Mn),
            (Nr.isBefore = Ln),
            (Nr.isBetween = vn),
            (Nr.isSame = bn),
            (Nr.isSameOrAfter = kn),
            (Nr.isSameOrBefore = Yn),
            (Nr.isValid = Gn),
            (Nr.lang = Pn),
            (Nr.locale = On),
            (Nr.localeData = Nn),
            (Nr.max = Nt),
            (Nr.min = Pt),
            (Nr.parsingFlags = Bn),
            (Nr.set = K),
            (Nr.startOf = Cn),
            (Nr.subtract = fn),
            (Nr.toArray = zn),
            (Nr.toObject = Un),
            (Nr.toDate = In),
            (Nr.toISOString = Sn),
            (Nr.toJSON = Vn),
            (Nr.toString = Dn),
            (Nr.unix = Fn),
            (Nr.valueOf = Wn),
            (Nr.creationData = $n),
            (Nr.year = ft),
            (Nr.isLeapYear = yt),
            (Nr.weekYear = Kn),
            (Nr.isoWeekYear = Xn),
            (Nr.quarter = Nr.quarters = nr),
            (Nr.month = Ke),
            (Nr.daysInMonth = Xe),
            (Nr.week = Nr.weeks = or),
            (Nr.isoWeek = Nr.isoWeeks = ur),
            (Nr.weeksInYear = Qn),
            (Nr.isoWeeksInYear = Zn),
            (Nr.date = dr),
            (Nr.day = Nr.days = gr),
            (Nr.weekday = Mr),
            (Nr.isoWeekday = Lr),
            (Nr.dayOfYear = vr),
            (Nr.hour = Nr.hours = Sr),
            (Nr.minute = Nr.minutes = xr),
            (Nr.second = Nr.seconds = Hr),
            (Nr.millisecond = Nr.milliseconds = Ar),
            (Nr.utcOffset = $t),
            (Nr.utc = Kt),
            (Nr.local = Xt),
            (Nr.parseZone = Zt),
            (Nr.hasAlignedHourOffset = Qt),
            (Nr.isDST = en),
            (Nr.isDSTShifted = tn),
            (Nr.isLocal = nn),
            (Nr.isUtcOffset = rn),
            (Nr.isUtc = sn),
            (Nr.isUTC = sn),
            (Nr.zoneAbbr = Or),
            (Nr.zoneName = Pr),
            (Nr.dates = w("dates accessor is deprecated. Use date instead.", dr)),
            (Nr.months = w("months accessor is deprecated. Use month instead", Ke)),
            (Nr.years = w("years accessor is deprecated. Use year instead", ft)),
            (Nr.zone = w("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", qt));
          var Cr = Nr;
          function Rr(e) {
            return Ot(1e3 * e);
          }
          function Wr() {
            return Ot.apply(null, arguments).parseZone();
          }
          var Fr = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          };
          function Ir(e, t, n) {
            var r = this._calendar[e];
            return S(r) ? r.call(t, n) : r;
          }
          var zr = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          };
          function Ur(e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                  return e.slice(1);
                })),
                this._longDateFormat[e]);
          }
          var Vr = "Invalid date";
          function Gr() {
            return this._invalidDate;
          }
          var Br = "%d",
            Jr = /\d{1,2}/;
          function $r(e) {
            return this._ordinal.replace("%d", e);
          }
          function qr(e) {
            return e;
          }
          var Kr = {
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
          function Xr(e, t, n, r) {
            var i = this._relativeTime[n];
            return S(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
          }
          function Zr(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return S(n) ? n(t) : n.replace(/%s/i, t);
          }
          var Qr = E.prototype;
          function ei(e, t, n, r) {
            var i = I(),
              s = c().set(r, t);
            return i[n](s, e);
          }
          function ti(e, t, n, r, i) {
            if (("number" == typeof e && ((t = e), (e = void 0)), (e = e || ""), null != t)) return ei(e, t, n, i);
            var s,
              a = [];
            for (s = 0; s < r; s++) a[s] = ei(e, s, n, i);
            return a;
          }
          function ni(e, t) {
            return ti(e, t, "months", 12, "month");
          }
          function ri(e, t) {
            return ti(e, t, "monthsShort", 12, "month");
          }
          function ii(e, t) {
            return ti(e, t, "weekdays", 7, "day");
          }
          function si(e, t) {
            return ti(e, t, "weekdaysShort", 7, "day");
          }
          function ai(e, t) {
            return ti(e, t, "weekdaysMin", 7, "day");
          }
          (Qr._calendar = Fr),
            (Qr.calendar = Ir),
            (Qr._longDateFormat = zr),
            (Qr.longDateFormat = Ur),
            (Qr._invalidDate = Vr),
            (Qr.invalidDate = Gr),
            (Qr._ordinal = Br),
            (Qr.ordinal = $r),
            (Qr._ordinalParse = Jr),
            (Qr.preparse = qr),
            (Qr.postformat = qr),
            (Qr._relativeTime = Kr),
            (Qr.relativeTime = Xr),
            (Qr.pastFuture = Zr),
            (Qr.set = j),
            (Qr.months = Ge),
            (Qr._months = Ve),
            (Qr.monthsShort = Je),
            (Qr._monthsShort = Be),
            (Qr.monthsParse = $e),
            (Qr._monthsRegex = et),
            (Qr.monthsRegex = tt),
            (Qr._monthsShortRegex = Ze),
            (Qr.monthsShortRegex = Qe),
            (Qr.week = rr),
            (Qr._week = ir),
            (Qr.firstDayOfYear = ar),
            (Qr.firstDayOfWeek = sr),
            (Qr.weekdays = hr),
            (Qr._weekdays = lr),
            (Qr.weekdaysMin = fr),
            (Qr._weekdaysMin = pr),
            (Qr.weekdaysShort = mr),
            (Qr._weekdaysShort = _r),
            (Qr.weekdaysParse = yr),
            (Qr.isPM = wr),
            (Qr._meridiemParse = Tr),
            (Qr.meridiem = Dr),
            R("en", {
              ordinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return e + (1 === b((e % 100) / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
              }
            }),
            (r.lang = w("moment.lang is deprecated. Use moment.locale instead.", R)),
            (r.langData = w("moment.langData is deprecated. Use moment.localeData instead.", I));
          var oi = Math.abs;
          function ui() {
            var e = this._data;
            return (
              (this._milliseconds = oi(this._milliseconds)),
              (this._days = oi(this._days)),
              (this._months = oi(this._months)),
              (e.milliseconds = oi(e.milliseconds)),
              (e.seconds = oi(e.seconds)),
              (e.minutes = oi(e.minutes)),
              (e.hours = oi(e.hours)),
              (e.months = oi(e.months)),
              (e.years = oi(e.years)),
              this
            );
          }
          function di(e, t, n, r) {
            var i = un(t, n);
            return (e._milliseconds += r * i._milliseconds), (e._days += r * i._days), (e._months += r * i._months), e._bubble();
          }
          function ci(e, t) {
            return di(this, e, t, 1);
          }
          function li(e, t) {
            return di(this, e, t, -1);
          }
          function hi(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function _i() {
            var e,
              t,
              n,
              r,
              i,
              s = this._milliseconds,
              a = this._days,
              o = this._months,
              u = this._data;
            return (
              (s >= 0 && a >= 0 && o >= 0) || (s <= 0 && a <= 0 && o <= 0) || ((s += 864e5 * hi(pi(o) + a)), (a = 0), (o = 0)),
              (u.milliseconds = s % 1e3),
              (e = v(s / 1e3)),
              (u.seconds = e % 60),
              (t = v(e / 60)),
              (u.minutes = t % 60),
              (n = v(t / 60)),
              (u.hours = n % 24),
              (a += v(n / 24)),
              (o += i = v(mi(a))),
              (a -= hi(pi(i))),
              (r = v(o / 12)),
              (o %= 12),
              (u.days = a),
              (u.months = o),
              (u.years = r),
              this
            );
          }
          function mi(e) {
            return (4800 * e) / 146097;
          }
          function pi(e) {
            return (146097 * e) / 4800;
          }
          function fi(e) {
            var t,
              n,
              r = this._milliseconds;
            if ("month" === (e = G(e)) || "year" === e)
              return (t = this._days + r / 864e5), (n = this._months + mi(t)), "month" === e ? n : n / 12;
            switch (((t = this._days + Math.round(pi(this._months))), e)) {
              case "week":
                return t / 7 + r / 6048e5;
              case "day":
                return t + r / 864e5;
              case "hour":
                return 24 * t + r / 36e5;
              case "minute":
                return 1440 * t + r / 6e4;
              case "second":
                return 86400 * t + r / 1e3;
              case "millisecond":
                return Math.floor(864e5 * t) + r;
              default:
                throw new Error("Unknown unit " + e);
            }
          }
          function yi() {
            return this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * b(this._months / 12);
          }
          function gi(e) {
            return function () {
              return this.as(e);
            };
          }
          var Mi = gi("ms"),
            Li = gi("s"),
            vi = gi("m"),
            bi = gi("h"),
            ki = gi("d"),
            Yi = gi("w"),
            wi = gi("M"),
            Ti = gi("y");
          function Di(e) {
            return this[(e = G(e)) + "s"]();
          }
          function Si(e) {
            return function () {
              return this._data[e];
            };
          }
          var xi = Si("milliseconds"),
            ji = Si("seconds"),
            Hi = Si("minutes"),
            Ei = Si("hours"),
            Ai = Si("days"),
            Oi = Si("months"),
            Pi = Si("years");
          function Ni() {
            return v(this.days() / 7);
          }
          var Ci = Math.round,
            Ri = { s: 45, m: 45, h: 22, d: 26, M: 11 };
          function Wi(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r);
          }
          function Fi(e, t, n) {
            var r = un(e).abs(),
              i = Ci(r.as("s")),
              s = Ci(r.as("m")),
              a = Ci(r.as("h")),
              o = Ci(r.as("d")),
              u = Ci(r.as("M")),
              d = Ci(r.as("y")),
              c = (i < Ri.s && ["s", i]) ||
                (s <= 1 && ["m"]) ||
                (s < Ri.m && ["mm", s]) ||
                (a <= 1 && ["h"]) ||
                (a < Ri.h && ["hh", a]) ||
                (o <= 1 && ["d"]) ||
                (o < Ri.d && ["dd", o]) ||
                (u <= 1 && ["M"]) ||
                (u < Ri.M && ["MM", u]) ||
                (d <= 1 && ["y"]) || ["yy", d];
            return (c[2] = t), (c[3] = +e > 0), (c[4] = n), Wi.apply(null, c);
          }
          function Ii(e, t) {
            return void 0 !== Ri[e] && (void 0 === t ? Ri[e] : ((Ri[e] = t), !0));
          }
          function zi(e) {
            var t = this.localeData(),
              n = Fi(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n);
          }
          var Ui = Math.abs;
          function Vi() {
            var e,
              t,
              n = Ui(this._milliseconds) / 1e3,
              r = Ui(this._days),
              i = Ui(this._months);
            (e = v(n / 60)), (t = v(e / 60)), (n %= 60), (e %= 60);
            var s = v(i / 12),
              a = (i %= 12),
              o = r,
              u = t,
              d = e,
              c = n,
              l = this.asSeconds();
            return l
              ? (l < 0 ? "-" : "") +
                  "P" +
                  (s ? s + "Y" : "") +
                  (a ? a + "M" : "") +
                  (o ? o + "D" : "") +
                  (u || d || c ? "T" : "") +
                  (u ? u + "H" : "") +
                  (d ? d + "M" : "") +
                  (c ? c + "S" : "")
              : "P0D";
          }
          var Gi = It.prototype;
          return (
            (Gi.abs = ui),
            (Gi.add = ci),
            (Gi.subtract = li),
            (Gi.as = fi),
            (Gi.asMilliseconds = Mi),
            (Gi.asSeconds = Li),
            (Gi.asMinutes = vi),
            (Gi.asHours = bi),
            (Gi.asDays = ki),
            (Gi.asWeeks = Yi),
            (Gi.asMonths = wi),
            (Gi.asYears = Ti),
            (Gi.valueOf = yi),
            (Gi._bubble = _i),
            (Gi.get = Di),
            (Gi.milliseconds = xi),
            (Gi.seconds = ji),
            (Gi.minutes = Hi),
            (Gi.hours = Ei),
            (Gi.days = Ai),
            (Gi.weeks = Ni),
            (Gi.months = Oi),
            (Gi.years = Pi),
            (Gi.humanize = zi),
            (Gi.toISOString = Vi),
            (Gi.toString = Vi),
            (Gi.toJSON = Vi),
            (Gi.locale = On),
            (Gi.localeData = Nn),
            (Gi.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vi)),
            (Gi.lang = Pn),
            ne("X", 0, 0, "unix"),
            ne("x", 0, 0, "valueOf"),
            we("x", Me),
            we("X", be),
            je("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e, 10));
            }),
            je("x", function (e, t, n) {
              n._d = new Date(b(e));
            }),
            (r.version = "2.12.0"),
            i(Ot),
            (r.fn = Cr),
            (r.min = Rt),
            (r.max = Wt),
            (r.now = Ft),
            (r.utc = c),
            (r.unix = Rr),
            (r.months = ni),
            (r.isDate = a),
            (r.locale = R),
            (r.invalid = m),
            (r.duration = un),
            (r.isMoment = L),
            (r.weekdays = ii),
            (r.parseZone = Wr),
            (r.localeData = I),
            (r.isDuration = zt),
            (r.monthsShort = ri),
            (r.weekdaysMin = ai),
            (r.defineLocale = W),
            (r.updateLocale = F),
            (r.locales = z),
            (r.weekdaysShort = si),
            (r.normalizeUnits = G),
            (r.relativeTimeThreshold = Ii),
            (r.prototype = Cr),
            r
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
    r = {};
  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var s = (r[e] = { id: e, loaded: !1, exports: {} });
    return n[e].call(s.exports, s, s.exports, i), (s.loaded = !0), s.exports;
  }
  (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (i.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var s = Object.create(null);
      i.r(s);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & r && n; "object" == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach((e) => (a[e] = () => n[e]));
      return (a.default = () => n), i.d(s, a), s;
    }),
    (i.d = (e, t) => {
      for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e, t, n, r, s, a;
      !(function (e) {
        (e.ENABLED = "enabled"), (e.DISABLED = "disabled");
      })(e || (e = {})),
        (function (e) {
          (e.ACCEPT_ALL = "acceptAll"), (e.REJECT_ALL = "rejectAll");
        })(t || (t = {})),
        (function (e) {
          (e.GET_DATA = "cookieManager.getData"),
            (e.GET_COOKIE_STYLES = "cookieManager.getCookieStyles"),
            (e.GET_SCENARIO = "cookieManager.getScenario"),
            (e.GET_DETECTION_RULES = "cookieManager.getDetectionRules"),
            (e.GET_NOTIFICATION = "cookieManager.getNotification"),
            (e.GET_PROMOTED_PRODUCT = "cookieManager.getPromotedProduct"),
            (e.SET_STATE = "cookieManager.setState"),
            (e.SET_PREFERENCES = "cookieManager.setPreferences"),
            (e.ADD_ALLOWED_WEBSITE = "cookieManager.addAllowedWebsite"),
            (e.REMOVE_ALLOWED_WEBSITE = "cookieManager.removeAllowedWebsite"),
            (e.COOKIE_BANNER_RESOLVED = "cookieManager.bannerResolved"),
            (e.INJECT_SCRIPT = "cookieManager.injectClientScript"),
            (e.RUN_FRAME_SCENARIO = "cookieManager.runFrameScenario"),
            (e.FRAME_SCENARIO_FINISHED = "cookieManager.frameScenarioFinished"),
            (e.SCENARIO_STARTED = "cookieManager.trackScenarioStarted"),
            (e.SCENARIO_FAILED = "cookieManager.trackScenarioFailed"),
            (e.TRACK = "track.cookieManager"),
            (e.USER_REPORT = "cookieManager.userReport"),
            (e.DISMISS_COOKIE_NOTIFICATION = "cookieManager.dismissCookieNotification"),
            (e.NOTIFICATION_DISPLAYED = "cookieManager.notificationDisplayed");
        })(n || (n = {})),
        (function (e) {
          (e.RESOLVED = "resolved"), (e.UNKNOWN = "unknown"), (e.PENDING = "pending");
        })(r || (r = {})),
        (function (e) {
          (e.PREFERENCES = "preferences"),
            (e.CATEGORY = "cookies"),
            (e.STARTED = "started"),
            (e.SUCCESSFUL = "successful"),
            (e.ERROR = "error");
        })(s || (s = {})),
        (function (e) {
          (e.SHOW = "show"), (e.DISMISSED = "dismissed"), (e.DO_NOT_SHOW = "doNotShow");
        })(a || (a = {}));
      class o {
        constructor(e) {
          this.resolvedCookies = e;
        }
        isResolved() {
          return this.cookies.some((e) => this.checkCookieInList(e));
        }
        get cookies() {
          return document.cookie.split(";");
        }
        checkCookieInList(e) {
          return this.resolvedCookies.some(
            (t) =>
              !(t.urls && !this.isValidUrl(t.urls)) &&
              -1 !== e.indexOf(t.name) &&
              (t.ignoreValue ? this.checkIgnoreParam(e, t.ignoreValue) : !t.setValue || this.checkSetValue(e, t.setValue))
          );
        }
        isValidUrl(e) {
          return (null == e ? void 0 : e.length) > 0 && e.some((e) => window.location.hostname.includes(e));
        }
        getCookieValue(e) {
          return e.split("=")[1];
        }
        checkIgnoreParam(e, t) {
          return this.getCookieValue(e) != t;
        }
        checkSetValue(e, t) {
          return this.getCookieValue(e).indexOf(t) > -1;
        }
      }
      class u {
        constructor(e, t = 5e3) {
          (this.detectionRules = e),
            (this.config = { childList: !0, subtree: !0 }),
            (this.promiseResolve = () => {}),
            (this.promiseReject = () => {}),
            (this.timer = setTimeout(this.onTimeout.bind(this), t));
        }
        observe() {
          return new Promise((e, t) => {
            (this.promiseResolve = e),
              (this.promiseReject = t),
              this.onDomChange(),
              (this.observer = new MutationObserver(() => this.onDomChange())),
              this.observer.observe(document, this.config);
          });
        }
        onDomChange() {
          const e = this.getCookieData();
          e && (this.dispose(), this.promiseResolve(e));
        }
        getCookieData() {
          for (let e = 0; e < this.detectionRules.length; e++) {
            const t = this.processDetectors(this.detectionRules[e].detectors);
            if (t) return { scenario: this.detectionRules[e].type, variant: t };
          }
        }
        processDetectors(e) {
          if (e && e.length)
            for (let t = 0; t < e.length; t++) {
              if (this.checkSelectors(e[t].selectors)) return e[t].variant;
            }
        }
        checkSelectors(e) {
          if (e)
            for (let t = 0; t < e.length; t++) {
              const n = this.getElement(e[t]);
              if (n) return n;
            }
        }
        getElement(e) {
          switch (e.charAt(0)) {
            case "#":
              return document.getElementById(e.slice(1, e.length));
            case ".":
              return document.getElementsByClassName(e.slice(1, e.length))[0];
            default:
              return document.querySelector(e);
          }
        }
        dispose() {
          this.disposeObserver(), this.clearTimer();
        }
        clearTimer() {
          this.timer && clearTimeout(this.timer), (this.timer = void 0);
        }
        onTimeout() {
          this.dispose(), this.promiseReject();
        }
        disposeObserver() {
          this.observer && (this.observer.disconnect(), (this.observer = void 0));
        }
      }
      class d {
        constructor(e) {
          (this.params = e), (this.cookieDetector = new o(e.cookieParams));
        }
        async getBannerType() {
          return this.cookieDetector.isResolved() ? this.getCookieScenario(r.RESOLVED) : this.detectBannerType();
        }
        async detectBannerType() {
          try {
            const e = this.params.detectionRules.filter(this.hasCurrentHostname),
              t = new u((null == e ? void 0 : e.length) ? e : this.params.detectionRules),
              n = await t.observe();
            return n ? this.getCookieScenario(r.PENDING, n) : this.getCookieScenario(r.UNKNOWN);
          } catch (e) {
            return Promise.resolve(this.getCookieScenario(r.UNKNOWN));
          }
        }
        hasCurrentHostname(e) {
          var t;
          return null === (t = e.urls) || void 0 === t ? void 0 : t.some((e) => window.location.hostname.includes(e));
        }
        getCookieScenario(e, t) {
          return { state: e, data: t };
        }
      }
      var c = function (e, t) {
        return (
          (c =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          c(e, t)
        );
      };
      function l(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
          this.constructor = e;
        }
        c(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var h,
        _,
        m = function () {
          return (
            (m =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            m.apply(this, arguments)
          );
        };
      function p(e, t, n, r) {
        return new (n || (n = Promise))(function (i, s) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, o);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function f(e, t) {
        var n,
          r,
          i,
          s,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: []
          };
        return (
          (s = { next: o(0), throw: o(1), return: o(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function o(s) {
          return function (o) {
            return (function (s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((i = a.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (e) {
                  (s = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, o]);
          };
        }
      }
      function y(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            }
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function g(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, s = t.length; i < s; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function M(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = y(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, i) {
                (function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, i, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      !(function (e) {
        (e.name = "name"), (e.pages = "pages");
      })(h || (h = {})),
        (function (e) {
          (e.target = "target"), (e.actions = "actions"), (e.groupedActions = "groupedActions"), (e.hooks = "hooks");
        })(_ || (_ = {}));
      var L,
        v,
        b = (function (e) {
          function t() {
            var t = this.constructor,
              n = e.call(this) || this;
            return (n.name = t.name), (n.message = "Unexpected error occurred."), Object.setPrototypeOf(n, t.prototype), n;
          }
          return l(t, e), Object.defineProperty(t.prototype, "errorDetails", { get: function () {}, enumerable: !1, configurable: !0 }), t;
        })(Error),
        k = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.message = 'Unable to parse the page - "actions" or "groupedActions" field is either missing or the value is not valid.'), t
            );
          }
          return l(t, e), t;
        })(b),
        Y = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.invalidActions = t), (n.message = 'Unable to parse following page actions: "'.concat(t.join(", "), '".')), n;
          }
          return l(t, e), t;
        })(b),
        w = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.invalidHooks = t), (n.message = 'Unable to parse following page actions: "'.concat(t.join(", "), '".')), n;
          }
          return l(t, e), t;
        })(b),
        T = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (t.message = 'Unable to parse the page - "target" field is either missing or the value is not valid.'), t;
          }
          return l(t, e), t;
        })(b);
      !(function (e) {
        (e.onSuccess = "onSuccess"), (e.onStop = "onStop"), (e.onDisposed = "onDisposed"), (e.onFailed = "onFailed");
      })(L || (L = {})),
        (function (e) {
          (e.bulkClick = "bulkClick"),
            (e.clickOneOf = "clickOneOf"),
            (e.click = "click"),
            (e.clickWhenVisible = "clickWhenVisible"),
            (e.executeScript = "executeScript"),
            (e.injectStyles = "injectStyles"),
            (e.notification = "notification"),
            (e.scroll = "scroll"),
            (e.stopScenario = "stopScenario"),
            (e.tooltip = "tooltip"),
            (e.unknown = "unknown"),
            (e.verifyOk = "verifyOk"),
            (e.waitUntilVisible = "waitUntilVisible"),
            (e.waitUntilOneVisible = "waitUntilOneVisible"),
            (e.delay = "delay");
        })(v || (v = {}));
      var D,
        S = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.event = t), (r.failReason = n), (r.message = 'Action "'.concat(r.event, '" execution failed.')), r;
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                return [{ key: this.event, description: this.failReason.message, failReason: this.failReason }];
              },
              enumerable: !1,
              configurable: !0
            }),
            t
          );
        })(b),
        x = function (e, t) {
          (this.resolution = e), (this.nextGroup = t);
        },
        j = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.scenarioName = t),
              (r.invalidValues = n),
              (r.message = "Parsing the ".concat(t, ' failed - "').concat(r.getInvalidKeysString(), '" entries are invalid.')),
              r
            );
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                return this.invalidValues;
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getInvalidKeysString = function () {
              return this.invalidValues
                .map(function (e) {
                  return e.key;
                })
                .join(", ");
            }),
            t
          );
        })(b),
        H = (function () {
          function e(e, t, n, r) {
            (this.scenarioName = e), (this.resolution = t), (this.stack = n), (this.error = r);
          }
          return (
            (e.buildFailedResult = function (t, n, r) {
              return new e(this.resolveScenarioName(t, n), D.failed, r, this.getScenarioError(n));
            }),
            (e.resolveScenarioName = function (e, t) {
              return t instanceof j ? t.scenarioName : (null == e ? void 0 : e.name) ? e.name : "Unknown";
            }),
            (e.getScenarioError = function (e) {
              return { name: e.name, message: e.message, details: e.errorDetails };
            }),
            e
          );
        })();
      !(function (e) {
        (e.failed = "failed"), (e.succeeded = "succeeded"), (e.stopped = "stopped"), (e.terminated = "terminated");
      })(D || (D = {}));
      var E,
        A,
        O,
        P = (function () {
          function e() {}
          return (
            (e.prototype.dispose = function () {
              for (var e in this) this.hasOwnProperty(e) && delete this[e];
            }),
            (e.prototype.getEvent = function () {
              return this.constructor.event;
            }),
            (e.prototype.handleSuccess = function (e, t) {
              return void 0 === e && (e = D.succeeded), Promise.resolve(new x(e, t));
            }),
            (e.prototype.handleFail = function (e, t) {
              return Promise.reject(new S(e, t));
            }),
            e
          );
        })(),
        N = (function (e) {
          function t(t, n) {
            void 0 === n && (n = document);
            var r = e.call(this) || this;
            return (r.message = "Couldn't find \"".concat(t, '" element in "').concat(n.nodeName, '" parent.')), r;
          }
          return l(t, e), t;
        })(b),
        C = (function (e) {
          function t(t, n) {
            void 0 === n && (n = document);
            var r = e.call(this) || this;
            return (r.message = "Multiple elements matches ".concat(t, " selector in ").concat(n.nodeName, " parent.")), r;
          }
          return l(t, e), t;
        })(b),
        R = (function () {
          function e() {}
          return (
            (e.getSingleElementByXPath = function (t, n) {
              var r = e.getAllElementsByXpath(t, n);
              if (r.length > 1) throw new C(t, n);
              return r.shift();
            }),
            (e.getAllElementsByXpath = function (t, n) {
              for (
                var r = [],
                  i = e.getNodeDocument(n),
                  s = i.evaluate(t, i, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null),
                  a = s.iterateNext();
                a;

              )
                r.push(a), (a = s.iterateNext());
              if (0 === r.length) throw new N(t, i);
              return r;
            }),
            (e.isIFrame = function (e) {
              return e instanceof HTMLIFrameElement;
            }),
            (e.getNodeDocument = function (e) {
              return e && this.isIFrame(e) ? e.contentWindow.document : document;
            }),
            e
          );
        })(),
        W = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.xpath = t), (r.parent = n), r;
          }
          return (
            l(t, e),
            (t.prototype.getNode = function (e, t) {
              var n = t ? this.getNode(t) : void 0;
              return R.getSingleElementByXPath(e, n);
            }),
            t
          );
        })(P),
        F = (function (e) {
          function t(t, n) {
            return e.call(this, t, n) || this;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return f(this, function (n) {
                  try {
                    return (e = this.getNode(this.xpath, this.parent)), this.invokeClick(e), [2, this.handleSuccess()];
                  } catch (e) {
                    return [2, this.handleFail(t.event, e)];
                  }
                  return [2];
                });
              });
            }),
            (t.prototype.invokeClick = function (e) {
              e.click();
            }),
            (t.event = v.click),
            t
          );
        })(W),
        I = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.message = "Couldn't find \"".concat(t, '" element within ').concat(n, "ms.")), r;
          }
          return l(t, e), t;
        })(b),
        z = (function () {
          function e(e, t, n) {
            void 0 === n && (n = 500), (this.timeout = e), (this.parent = t), (this.interval = n);
          }
          return (
            Object.defineProperty(e.prototype, "isTimedOut", {
              get: function () {
                return !this.timeoutTime || Date.now() > this.timeoutTime;
              },
              enumerable: !1,
              configurable: !0
            }),
            (e.prototype.onElementVisible = function () {
              return p(this, void 0, void 0, function () {
                var e,
                  t = this;
                return f(this, function (n) {
                  return (
                    (e = new Promise(function (e, n) {
                      (t.promiseResolve = e), (t.promiseReject = n);
                    })),
                    (this.timeoutTime = Date.now() + this.timeout),
                    this.createTimeout(),
                    [2, e]
                  );
                });
              });
            }),
            (e.prototype.dispose = function () {
              var e = this;
              clearTimeout(this.timeoutInstance),
                Object.keys(this).forEach(function (t) {
                  return delete e[t];
                });
            }),
            (e.prototype.createTimeout = function () {
              var e = this;
              this.timeoutInstance = window.setTimeout(function () {
                return e.onTimeout();
              }, this.interval);
            }),
            (e.prototype.onTimeout = function () {
              var e, t, n;
              try {
                return null === (e = this.promiseResolve) || void 0 === e ? void 0 : e.call(this, this.getTargetElement());
              } catch (e) {
                if (!(e instanceof N)) return null === (t = this.promiseReject) || void 0 === t ? void 0 : t.call(this, e);
                if (this.isTimedOut)
                  return null === (n = this.promiseReject) || void 0 === n ? void 0 : n.call(this, this.getActionTimeoutError());
              }
              this.createTimeout();
            }),
            (e.prototype.getNode = function (e, t) {
              return e ? R.getSingleElementByXPath(e, t) : void 0;
            }),
            e
          );
        })(),
        U = (function (e) {
          function t(t, n, r, i) {
            void 0 === i && (i = 500);
            var s = e.call(this, n, r, i) || this;
            return (s.xpath = t), (s.parent = r), (s.interval = i), s;
          }
          return (
            l(t, e),
            (t.prototype.getTargetElement = function () {
              var e = this.getNode(this.parent);
              return this.getNode(this.xpath, e);
            }),
            (t.prototype.getActionTimeoutError = function () {
              return new I(this.xpath, this.timeout);
            }),
            t
          );
        })(z),
        V = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, r) || this;
            return (i.timeout = n), i;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e, t;
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        (this.domObserver = new U(this.xpath, this.timeout, this.parent)),
                        [4, this.domObserver.onElementVisible()]
                      );
                    case 1:
                      return (e = n.sent()), this.invokeClick(e), [2, this.handleSuccess()];
                    case 2:
                      return (t = n.sent()), [2, this.handleFail(v.clickWhenVisible, t)];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.dispose = function () {
              var t;
              null === (t = this.domObserver) || void 0 === t || t.dispose(), e.prototype.dispose.call(this);
            }),
            (t.event = v.clickWhenVisible),
            t
          );
        })(F),
        G = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.event = t), (n.message = 'Unable to parse the "'.concat(t, '" action.')), n;
          }
          return l(t, e), t;
        })(b),
        B = (function () {
          function e() {}
          return (
            (e.isObjectWithKeys = function (e) {
              return !!e && !this.isNumber(e) && !this.isString(e) && !this.isArray(e) && this.notEmptyObjectKeys(e);
            }),
            (e.isNumber = function (e) {
              return "number" == typeof e;
            }),
            (e.nonEmptyString = function (e) {
              return this.isString(e) && e.length > 0;
            }),
            (e.isString = function (e) {
              return "string" == typeof e;
            }),
            (e.isEmptyArray = function (e) {
              return this.isArray(e) && 0 === e.length;
            }),
            (e.nonEmptyArray = function (e) {
              return this.isArray(e) && !!e.length;
            }),
            (e.isArray = function (e) {
              return Array.isArray(e);
            }),
            (e.isQueryString = function (e) {
              if (!this.nonEmptyString(e)) return !1;
              var t = e.split("=");
              if (2 !== t.length) return !1;
              for (var n = 0, r = t; n < r.length; n++) {
                var i = r[n];
                if (!this.nonEmptyString(i)) return !1;
              }
              return !0;
            }),
            (e.isValidUrl = function (e) {
              try {
                return new URL(e), !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.isRegex = function (e) {
              return this.nonEmptyString(e) && "/" === e[0];
            }),
            (e.isEnumValue = function (e, t) {
              return !!(null == t ? void 0 : t[e]);
            }),
            (e.notEmptyObjectKeys = function (e) {
              return Object.keys(e).length > 0;
            }),
            (e.isBoolean = function (e) {
              return "boolean" == typeof e;
            }),
            e
          );
        })(),
        J = (function () {
          function e() {}
          return (
            (e.prototype.validateXpath = function (e) {
              return B.nonEmptyString(e);
            }),
            (e.prototype.validateTimeout = function (e) {
              return B.isNumber(e);
            }),
            (e.prototype.validateUrl = function (e) {
              return B.isValidUrl(e);
            }),
            (e.prototype.validateClassName = function (e) {
              return B.nonEmptyString(e);
            }),
            (e.prototype.validatePosition = function (e) {
              return B.nonEmptyString(e);
            }),
            (e.prototype.throwParseError = function (e) {
              throw new G(e);
            }),
            e
          );
        })(),
        $ = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return (
                (this.validateXpath(e.xpath) && this.validateTimeout(e.timeout)) || this.throwParseError(V.event),
                new V(e.xpath, e.timeout, e.parent)
              );
            }),
            t
          );
        })(J),
        q = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.timeout = t), (n.timer = void 0), n;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e = this;
                return f(this, function (t) {
                  return [
                    2,
                    new Promise(function (t) {
                      e.timer = window.setTimeout(function () {
                        return t(e.handleSuccess(D.succeeded));
                      }, e.timeout);
                    })
                  ];
                });
              });
            }),
            (t.prototype.disposeTimer = function () {
              this.timer && (clearTimeout(this.timer), (this.timer = void 0));
            }),
            (t.prototype.dispose = function () {
              this.disposeTimer(), e.prototype.dispose.call(this);
            }),
            (t.event = v.delay),
            t
          );
        })(P),
        K = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateTimeout(e.timeout) || this.throwParseError(q.event), new q(e.timeout);
            }),
            t
          );
        })(J),
        X = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.executionMethod = t), n;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                return f(this, function (e) {
                  try {
                    return this.executionMethod(), [2, this.handleSuccess()];
                  } catch (e) {
                    return [2, this.handleFail(v.executeScript, e)];
                  }
                  return [2];
                });
              });
            }),
            (t.event = v.executeScript),
            t
          );
        })(P),
        Z = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              try {
                var t = this.parseExecutionMethod(e.script);
                return new X(t);
              } catch (e) {
                this.throwParseError(X.event);
              }
            }),
            (t.prototype.parseExecutionMethod = function (e) {
              if (!this.validateScript(e)) throw new Error();
              return Function(e);
            }),
            (t.prototype.validateScript = function (e) {
              return B.nonEmptyString(e);
            }),
            t
          );
        })(J),
        Q = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.stylesheetUrl = t), n;
          }
          return (
            l(t, e),
            (t.prototype.dispose = function () {
              for (var e in this) this.hasOwnProperty(e) && delete this[e];
            }),
            (t.prototype.execute = function () {
              try {
                return this.injectStyles(), this.handleSuccess();
              } catch (e) {
                return this.handleFail(t.event, e);
              }
            }),
            (t.prototype.injectStyles = function () {
              var e = document.createElement("link");
              (e.href = this.stylesheetUrl),
                (e.type = "text/css"),
                (e.rel = "stylesheet"),
                document.getElementsByTagName("head")[0].appendChild(e);
            }),
            (t.event = v.injectStyles),
            t
          );
        })(P),
        ee = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateUrl(e.stylesheetUrl) || this.throwParseError(Q.event), new Q(e.stylesheetUrl);
            }),
            t
          );
        })(J),
        te = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parseResolveConditions = function (e) {
              var t = this;
              return e.map(function (e) {
                var n = { elements: t.parseElements(e.elements) };
                return t.parseGroupId(e) && (n.groupId = e.groupId), n;
              });
            }),
            (t.prototype.parseElements = function (e) {
              var t = this;
              return e.map(function (e) {
                return "string" == typeof e ? t.parseStringNodeComponent(e) : t.parseObjectNodeComponent(e);
              });
            }),
            (t.prototype.parseStringNodeComponent = function (e) {
              if (!B.nonEmptyString(e)) throw new Error();
              return { xpath: e, multipleMatch: !1 };
            }),
            (t.prototype.parseObjectNodeComponent = function (e) {
              var t = !!e.hasOwnProperty("multipleMatch") && e.multipleMatch;
              if (!this.validateElementWithParent(e) || !this.validateMultipleMatchFlag(t)) throw new Error();
              return m(m({}, e), { multipleMatch: t });
            }),
            (t.prototype.validateElementWithParent = function (e) {
              return B.nonEmptyString(e.xpath) && (!e.hasOwnProperty("parent") || B.nonEmptyString(e.parent));
            }),
            (t.prototype.validateMultipleMatchFlag = function (e) {
              return B.isBoolean(e);
            }),
            (t.prototype.parseGroupId = function (e) {
              if (e.hasOwnProperty("groupId")) {
                if (!B.nonEmptyString(e.groupId)) throw Error();
                return e.groupId;
              }
            }),
            (t.prototype.validateHtmlContent = function (e) {
              return B.nonEmptyString(e);
            }),
            t
          );
        })(J),
        ne = new ((function () {
          function e() {
            this.events = {};
          }
          return (
            (e.prototype.addListener = function (e, t) {
              var n = this;
              return (
                this.events[e] || (this.events[e] = []),
                this.events[e].push(t),
                function () {
                  return n.removeListener(e, t);
                }
              );
            }),
            (e.prototype.removeListener = function (e, t) {
              if (this.events[e]) {
                var n = this.events[e].indexOf(t);
                n > -1 && this.events[e].splice(n, 1);
              }
            }),
            (e.prototype.removeAllListeners = function () {
              var e = this;
              Object.keys(this.events).forEach(function (t) {
                return (e.events[t] = []);
              });
            }),
            (e.prototype.emit = function (e) {
              for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
              this.events[e] &&
                g([], this.events[e], !0).forEach(function (e) {
                  return e.apply(t, n);
                });
            }),
            (e.prototype.once = function (e, t) {
              var n = this,
                r = this.addListener(e, function () {
                  for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                  r(), t.apply(n, e);
                });
              return r;
            }),
            e
          );
        })())();
      !(function (e) {
        (e.onBeforeLastAction = "scenario.onBeforeLastAction"), (e.onError = "scenario.onError");
      })(E || (E = {})),
        (function (e) {
          (e.TooltipResolved = "track.tooltipResolved"),
            (e.TooltipClosed = "track.tooltipClosed"),
            (e.NotificationResolved = "track.notificationResolved"),
            (e.NotificationClosed = "track.notificationClosed");
        })(A || (A = {})),
        (function (e) {
          (e.ScenarioClosed = "scenario-closed"), (e.ScenarioRevoked = "scenario-revoked");
        })(O || (O = {}));
      var re,
        ie = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.element = t), (r.failReason = n), (r.message = "Resolve Condition Failed: ".concat(r.failReason.message)), r;
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                var e;
                return [
                  {
                    key: "".concat(this.element.xpath, " ").concat(null !== (e = this.element.parent) && void 0 !== e ? e : ""),
                    description: this.failReason.message,
                    failReason: this.failReason
                  }
                ];
              },
              enumerable: !1,
              configurable: !0
            }),
            t
          );
        })(b),
        se = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.uniqueId = t), (n.message = "Element is not unique: ".concat(n.uniqueId, " id already exists in DOM.")), n;
          }
          return l(t, e), t;
        })(b),
        ae = (function () {
          function e() {}
          return (
            (e.generate = function () {
              return Math.random().toString(36).substr(2, 9);
            }),
            e
          );
        })(),
        oe = (function () {
          function e(e) {
            (this.content = e), (this.domListeners = []), (this.uniqueId = ae.generate());
          }
          return (
            (e.prototype.renderComponent = function (e, t, n) {
              try {
                (this.onResolve = t), this.render(), this.registerConditionListeners(e);
              } catch (e) {
                n(e);
              }
            }),
            (e.prototype.dispose = function () {
              var e;
              for (var t in (this.removeDomListeners(), null === (e = this.element) || void 0 === e || e.remove(), this))
                this.hasOwnProperty(t) && delete this[t];
            }),
            (e.prototype.render = function () {
              if (document.getElementById(this.uniqueId)) throw new se(this.uniqueId);
              (this.element = this.buildElement()), this.appendComponentElement();
            }),
            (e.prototype.appendComponentElement = function () {
              document.body.appendChild(this.element);
            }),
            (e.prototype.registerConditionListeners = function (e) {
              var t = this;
              e.forEach(function (e) {
                t.getConditionElements(e.elements).forEach(function (n) {
                  return t.addDomListener(n, "click", function () {
                    return t.onResolve(e);
                  });
                });
              });
            }),
            (e.prototype.getConditionElements = function (e) {
              var t = this,
                n = [];
              return (
                e.forEach(function (e) {
                  try {
                    n = n.concat(t.getElement(e));
                  } catch (t) {
                    throw new ie(e, t);
                  }
                }),
                n
              );
            }),
            (e.prototype.getElement = function (e) {
              return (e.multipleMatch ? R.getAllElementsByXpath : R.getSingleElementByXPath)(e.xpath, this.getParentNode(e.parent));
            }),
            (e.prototype.getParentNode = function (e) {
              return e ? R.getSingleElementByXPath(e) : void 0;
            }),
            (e.prototype.addDomListener = function (e, t, n) {
              this.domListeners.push({ target: e, type: t, callback: n }), e.addEventListener(t, n);
            }),
            (e.prototype.removeDomListeners = function () {
              this.domListeners.forEach(function (e) {
                return e.target.removeEventListener(e.type, e.callback);
              });
            }),
            e
          );
        })(),
        ue = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.content = t), (r.className = n), r;
          }
          return (
            l(t, e),
            (t.prototype.buildElement = function () {
              var e = document.createElement("div");
              return (e.id = this.uniqueId), (e.className = this.className), (e.innerHTML = this.content), e;
            }),
            t
          );
        })(oe),
        de = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.resolveConditions = []), (t.resolve = function () {}), (t.reject = function () {}), t;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              var e = this;
              return new Promise(function (t, n) {
                (e.resolve = t), (e.reject = n), e.setComponent();
              });
            }),
            (t.prototype.dispose = function () {
              this.disposeComponent(), e.prototype.dispose.call(this);
            }),
            (t.prototype.getResolveConditionsGroupIds = function () {
              return this.resolveConditions.map(function (e) {
                return e.groupId;
              });
            }),
            (t.prototype.disposeComponent = function () {
              var e;
              null === (e = this.component) || void 0 === e || e.dispose(), (this.component = void 0);
            }),
            (t.prototype.setComponent = function () {
              var e = this;
              (this.component = this.buildComponent()),
                this.component.renderComponent(
                  this.resolveConditions,
                  function (t) {
                    return e.onResolve(t);
                  },
                  function (t) {
                    return e.reject(t);
                  }
                );
            }),
            (t.prototype.onResolve = function (e) {
              this.disposeComponent(), this.resolve(new x(D.succeeded, e.groupId));
            }),
            t
          );
        })(W),
        ce = (function (e) {
          function t(t, n, r, i) {
            var s = e.call(this, "", n) || this;
            return (s.content = t), (s.className = n), (s.resolveConditions = r), (s.trackableContent = i), s;
          }
          return (
            l(t, e),
            (t.prototype.onResolve = function (t) {
              ne.emit(this.getTrackEventFromCondition(t), { content: this.trackableContent }), e.prototype.onResolve.call(this, t);
            }),
            (t.prototype.getTrackEventFromCondition = function (e) {
              return e.groupId === O.ScenarioClosed ? A.NotificationClosed : A.NotificationResolved;
            }),
            (t.prototype.buildComponent = function () {
              return new ue(this.content, this.className);
            }),
            (t.event = v.notification),
            t
          );
        })(de),
        le = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateNotificationData(e) || this.throwParseError(e.event), this.getParsedNotificationAction(e);
            }),
            (t.prototype.validateNotificationData = function (e) {
              return this.validateHtmlContent(e.htmlContent) && this.validateActionClassName(e);
            }),
            (t.prototype.getParsedNotificationAction = function (e) {
              try {
                var t = e.htmlContent,
                  n = e.className,
                  r = e.resolveConditions,
                  i = this.parseResolveConditions(r);
                return new ce(t, null != n ? n : "", i);
              } catch (t) {
                this.throwParseError(e.event);
              }
            }),
            (t.prototype.validateActionClassName = function (e) {
              return !e.hasOwnProperty("className") || this.validateClassName(e.className);
            }),
            t
          );
        })(te),
        he = (function (e) {
          function t(t, n, r, i) {
            var s = e.call(this, t, i) || this;
            return (s.timeout = n), (s.scrollToOptions = r), (s.domObserver = new U(t, n, i)), s;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e, t, n;
                return f(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        r.trys.push([0, 2, , 3]),
                        (this.domObserver = new U(this.xpath, this.timeout, this.parent)),
                        [4, this.domObserver.onElementVisible()]
                      );
                    case 1:
                      return (
                        (e = r.sent()),
                        (t = this.scrollToOptions ? this.scrollToOptions : { left: e.scrollWidth, top: e.scrollHeight }),
                        e.scrollBy(t),
                        [2, this.handleSuccess()]
                      );
                    case 2:
                      return (n = r.sent()), [2, this.handleFail(v.scroll, n)];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.event = v.scroll),
            t
          );
        })(W),
        _e = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return (
                (this.validateXpath(e.xpath) && this.validateTimeout(e.timeout) && this.validateScrollToOptionsGrouped(e)) ||
                  this.throwParseError(he.event),
                new he(e.xpath, e.timeout, e.scrollToOptions, e.parent)
              );
            }),
            (t.prototype.validateScrollToOptionsGrouped = function (e) {
              return !e.hasOwnProperty("scrollToOptions") || this.validateScrollToOptions(e.scrollToOptions);
            }),
            (t.prototype.validateScrollToOptions = function (e) {
              var t = e;
              return B.isObjectWithKeys(e) && B.isNumber(t.left) && B.isNumber(t.top);
            }),
            t
          );
        })(J);
      !(function (e) {
        (e.topLeft = "topLeft"),
          (e.topRight = "topRight"),
          (e.bottomLeft = "bottomLeft"),
          (e.bottomRight = "bottomRight"),
          (e.leftTop = "leftTop"),
          (e.leftBottom = "leftBottom"),
          (e.rightTop = "rightTop"),
          (e.rightBottom = "rightBottom");
      })(re || (re = {}));
      var me = { x: 0, y: 0 },
        pe = (function (e) {
          function t(t, n, r, i) {
            var s,
              a,
              o,
              u,
              d = e.call(this, r) || this;
            return (
              (d.targetNode = t),
              (d.targetParent = n),
              (d.content = r),
              (d.options = i),
              (d.debouncedSetPosition =
                ((s = d.setPosition.bind(d)),
                (a = 100),
                (u = function () {
                  for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  clearTimeout(o),
                    (o = setTimeout(function () {
                      return s.apply(e, t);
                    }, a));
                }),
                (u.cancel = function () {
                  clearTimeout(o);
                }),
                u)),
              d
            );
          }
          return (
            l(t, e),
            (t.prototype.render = function () {
              e.prototype.render.call(this), this.registerPositionListeners(), this.setPosition();
            }),
            (t.prototype.dispose = function () {
              var t;
              null === (t = this.debouncedSetPosition) || void 0 === t || t.cancel(), e.prototype.dispose.call(this);
            }),
            (t.prototype.buildElement = function () {
              var e = document.createElement("div");
              return (
                (e.id = this.uniqueId),
                (e.className = "".concat(this.options.className, " position-").concat(this.options.position)),
                (e.innerHTML = this.content),
                e
              );
            }),
            (t.prototype.registerPositionListeners = function () {
              var e = this;
              this.addDomListener(window, "resize", function () {
                return e.debouncedSetPosition();
              }),
                this.addDomListener(this.resolveScrollElement(), "scroll", function () {
                  return e.setPosition();
                });
            }),
            Object.defineProperty(t.prototype, "isParentIFrame", {
              get: function () {
                return R.isIFrame(this.targetParent);
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.resolveScrollElement = function () {
              var e;
              return this.isParentIFrame ? this.targetNode.ownerDocument : null !== (e = this.targetParent) && void 0 !== e ? e : document;
            }),
            (t.prototype.getParentsBoundingRect = function () {
              return this.isParentIFrame ? this.targetParent.getBoundingClientRect() : me;
            }),
            (t.prototype.setPosition = function () {
              if (this.targetNode) {
                var e = this.targetNode.getBoundingClientRect(),
                  t = this.getParentsBoundingRect(),
                  n = this.options.spaceBetween;
                switch (this.options.position) {
                  case re.topLeft:
                    this.alignHorizontally(t.x + e.right - this.element.offsetWidth - e.width / 2),
                      this.alignVertically(t.y + e.top - this.element.offsetHeight - n);
                    break;
                  case re.topRight:
                    this.alignHorizontally(t.x + e.right - e.width / 2), this.alignVertically(t.y + e.top - this.element.offsetHeight - n);
                    break;
                  case re.bottomLeft:
                    this.alignHorizontally(t.x + e.right - this.element.offsetWidth - e.width / 2),
                      this.alignVertically(t.y + e.bottom + n);
                    break;
                  case re.bottomRight:
                    this.alignHorizontally(t.x + e.right - e.width / 2), this.alignVertically(t.y + e.bottom + n);
                    break;
                  case re.leftTop:
                    this.alignHorizontally(t.x + e.left - this.element.offsetWidth - n),
                      this.alignVertically(t.y + e.bottom - this.element.offsetHeight - e.height / 2);
                    break;
                  case re.leftBottom:
                    this.alignHorizontally(t.x + e.left - this.element.offsetWidth - n),
                      this.alignVertically(t.y + e.bottom - e.height / 2);
                    break;
                  case re.rightTop:
                    this.alignHorizontally(t.x + e.right + n),
                      this.alignVertically(t.y + e.bottom - this.element.offsetHeight - e.height / 2);
                    break;
                  case re.rightBottom:
                    this.alignHorizontally(t.x + e.right + n), this.alignVertically(t.y + e.bottom - e.height / 2);
                }
              }
            }),
            (t.prototype.alignHorizontally = function (e) {
              this.element.style.left = "".concat(e, "px");
            }),
            (t.prototype.alignVertically = function (e) {
              this.element.style.top = "".concat(e, "px");
            }),
            t
          );
        })(oe),
        fe = (function (e) {
          function t(t, n, r, i, s, a) {
            var o = e.call(this, t, s) || this;
            return (o.xpath = t), (o.htmlContent = n), (o.options = r), (o.resolveConditions = i), (o.trackableContent = a), o;
          }
          return (
            l(t, e),
            (t.prototype.onResolve = function (t) {
              ne.emit(this.getTrackEventFromCondition(t), { content: this.trackableContent }), e.prototype.onResolve.call(this, t);
            }),
            (t.prototype.getTrackEventFromCondition = function (e) {
              return e.groupId === O.ScenarioClosed ? A.TooltipClosed : A.TooltipResolved;
            }),
            (t.prototype.buildComponent = function () {
              return new pe(
                this.getNode(this.xpath, this.parent),
                this.parent ? this.getNode(this.parent) : void 0,
                this.htmlContent,
                this.options
              );
            }),
            (t.event = v.tooltip),
            t
          );
        })(de),
        ye = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.DEFAULT_ARROW_HEIGHT = 12), t;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateTooltipActionData(e) || this.throwParseError(e.event), this.getParsedTooltipAction(e);
            }),
            (t.prototype.validateTooltipActionData = function (e) {
              return this.validateXpath(e.xpath) && this.validateHtmlContent(e.htmlContent) && this.validateParent(e);
            }),
            (t.prototype.getParsedTooltipAction = function (e) {
              try {
                var t = e.xpath,
                  n = e.parent,
                  r = e.htmlContent,
                  i = this.parseOptions(e.options),
                  s = this.parseResolveConditions(e.resolveConditions);
                return new fe(t, r, i, s, n);
              } catch (t) {
                this.throwParseError(e.event);
              }
            }),
            (t.prototype.validateParent = function (e) {
              return !e.hasOwnProperty("parent") || this.validateXpath(e.parent);
            }),
            (t.prototype.parseOptions = function (e) {
              var t;
              return (
                this.validateTooltipOptions(e) || this.throwParseError(fe.event),
                { position: e.position, className: null !== (t = e.className) && void 0 !== t ? t : "", spaceBetween: e.spaceBetween }
              );
            }),
            (t.prototype.validateTooltipOptions = function (e) {
              var t = e.position;
              return (
                B.isObjectWithKeys(e) &&
                this.validatePosition(t) &&
                B.isEnumValue(t, re) &&
                this.validateTooltipClassName(e) &&
                this.validateSpaceBetween(e)
              );
            }),
            (t.prototype.validateTooltipClassName = function (e) {
              return !e.hasOwnProperty("className") || B.isString(e.className);
            }),
            (t.prototype.validateSpaceBetween = function (e) {
              return e.hasOwnProperty("spaceBetween") || (e.spaceBetween = this.DEFAULT_ARROW_HEIGHT), B.isNumber(e.spaceBetween);
            }),
            t
          );
        })(te),
        ge = (function (e) {
          function t(t, n, r, i) {
            void 0 === i && (i = 500);
            var s = e.call(this, n, r, i) || this;
            return (s.xpaths = t), (s.parent = r), (s.interval = i), s;
          }
          return (
            l(t, e),
            (t.prototype.getTargetElement = function () {
              for (var e = this.getNode(this.parent), t = 0, n = this.xpaths; t < n.length; t++) {
                var r = n[t],
                  i = this.getNode(r, e);
                if (i) return i;
              }
              throw new N(this.xpaths.join());
            }),
            (t.prototype.getNode = function (t, n) {
              try {
                return e.prototype.getNode.call(this, t, n);
              } catch (e) {
                return;
              }
            }),
            (t.prototype.getActionTimeoutError = function () {
              return new I(this.xpaths.join(), this.timeout);
            }),
            t
          );
        })(z),
        Me = (function (e) {
          function t(t, n, r) {
            var i = e.call(this) || this;
            return (i.xpaths = t), (i.timeout = n), (i.parent = r), i;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return f(this, function (t) {
                  switch (t.label) {
                    case 0:
                      this.setObserver(), (t.label = 1);
                    case 1:
                      return t.trys.push([1, 3, , 4]), [4, this.domObserver.onElementVisible()];
                    case 2:
                      return t.sent(), [2, this.handleSuccess()];
                    case 3:
                      return (e = t.sent()), [2, Promise.reject(e)];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.setObserver = function () {
              this.disposeObserver(), (this.domObserver = new ge(this.xpaths, this.timeout, this.parent));
            }),
            (t.prototype.disposeObserver = function () {
              var e;
              null === (e = this.domObserver) || void 0 === e || e.dispose();
            }),
            (t.prototype.dispose = function () {
              this.disposeObserver(), e.prototype.dispose.call(this);
            }),
            (t.event = v.waitUntilOneVisible),
            t
          );
        })(P),
        Le = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return (
                (B.isArray(e.xpaths) && this.validateXpaths(e.xpaths) && this.validateTimeout(e.timeout)) || this.throwParseError(Me.event),
                new Me(e.xpaths, e.timeout, e.parent)
              );
            }),
            (t.prototype.validateXpaths = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t];
                if (!this.validateXpath(r)) return !1;
              }
              return !0;
            }),
            t
          );
        })(J),
        ve = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, t, r) || this;
            return (i.timeout = n), i;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return f(this, function (t) {
                  switch (t.label) {
                    case 0:
                      this.setObserver(), (t.label = 1);
                    case 1:
                      return t.trys.push([1, 3, , 4]), [4, this.domObserver.onElementVisible()];
                    case 2:
                      return t.sent(), [2, this.handleSuccess()];
                    case 3:
                      return (e = t.sent()), [2, Promise.reject(e)];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.setObserver = function () {
              this.disposeObserver(), (this.domObserver = new U(this.xpath, this.timeout, this.parent));
            }),
            (t.prototype.disposeObserver = function () {
              var e;
              null === (e = this.domObserver) || void 0 === e || e.dispose();
            }),
            (t.prototype.dispose = function () {
              this.disposeObserver(), e.prototype.dispose.call(this);
            }),
            (t.event = v.waitUntilVisible),
            t
          );
        })(W),
        be = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return (
                (this.validateXpath(e.xpath) && this.validateTimeout(e.timeout)) || this.throwParseError(ve.event),
                new ve(e.xpath, e.timeout, e.parent)
              );
            }),
            t
          );
        })(J),
        ke = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.CLICK_DELAY = 50), r;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              var e, n;
              return p(this, void 0, void 0, function () {
                var r, i, s, a, o, u;
                return f(this, function (d) {
                  switch (d.label) {
                    case 0:
                      d.trys.push([0, 14, , 15]), (r = this.getNodes(this.xpath, this.parent)), (d.label = 1);
                    case 1:
                      d.trys.push([1, 7, 8, 13]), (i = M(r)), (d.label = 2);
                    case 2:
                      return [4, i.next()];
                    case 3:
                      return (s = d.sent()).done ? [3, 6] : ((a = s.value), [4, this.delayedBatchClick(a)]);
                    case 4:
                      d.sent(), (d.label = 5);
                    case 5:
                      return [3, 2];
                    case 6:
                      return [3, 13];
                    case 7:
                      return (o = d.sent()), (e = { error: o }), [3, 13];
                    case 8:
                      return d.trys.push([8, , 11, 12]), s && !s.done && (n = i.return) ? [4, n.call(i)] : [3, 10];
                    case 9:
                      d.sent(), (d.label = 10);
                    case 10:
                      return [3, 12];
                    case 11:
                      if (e) throw e.error;
                      return [7];
                    case 12:
                      return [7];
                    case 13:
                      return [2, this.handleSuccess()];
                    case 14:
                      return (u = d.sent()), [2, this.handleFail(t.event, u)];
                    case 15:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.dispose = function () {
              clearTimeout(this.delayTimeout), (this.delayTimeout = void 0), e.prototype.dispose.call(this);
            }),
            (t.prototype.delayedBatchClick = function (e) {
              return p(this, void 0, void 0, function () {
                var t = this;
                return f(this, function (n) {
                  return [
                    2,
                    new Promise(function (n) {
                      t.invokeClick(e), (t.delayTimeout = window.setTimeout(n, t.CLICK_DELAY));
                    })
                  ];
                });
              });
            }),
            (t.prototype.getNodes = function (e, t) {
              var n = t ? this.getNode(t) : void 0;
              return R.getAllElementsByXpath(e, n);
            }),
            (t.event = v.bulkClick),
            t
          );
        })(F),
        Ye = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateXpath(e.xpath) || this.throwParseError(ke.event), new ke(e.xpath, e.parent);
            }),
            t
          );
        })(J),
        we = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateXpath(e.xpath) || this.throwParseError(F.event), new F(e.xpath, e.parent);
            }),
            t
          );
        })(J),
        Te = (function (e) {
          function t(t, n, r) {
            void 0 === n && (n = 0);
            var i = e.call(this) || this;
            return (i.xpaths = t), (i.timeout = n), (i.parent = r), i;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!this.timeout) return [2, this.click()];
                      n.label = 1;
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, new Me(this.xpaths, this.timeout, this.parent).execute()];
                    case 2:
                      return n.sent(), [2, this.click()];
                    case 3:
                      return (e = n.sent()), [2, this.handleFail(t.event, e)];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.click = function () {
              return p(this, void 0, void 0, function () {
                var e, n;
                return f(this, function (r) {
                  try {
                    return (
                      (e = this.parent ? this.getNode(this.parent) : void 0),
                      (n = this.findFirstNode(e))
                        ? (n.click(), [2, this.handleSuccess()])
                        : [2, this.handleFail(t.event, new N(this.xpaths.join(), e))]
                    );
                  } catch (e) {
                    return [2, this.handleFail(t.event, e)];
                  }
                  return [2];
                });
              });
            }),
            (t.prototype.findFirstNode = function (e) {
              for (var t = 0, n = this.xpaths; t < n.length; t++) {
                var r = n[t],
                  i = this.getNode(r, e);
                if (i) return i;
              }
              return null;
            }),
            (t.prototype.getNode = function (e, t) {
              try {
                return R.getSingleElementByXPath(e, t);
              } catch (e) {
                return;
              }
            }),
            (t.event = v.clickOneOf),
            t
          );
        })(P),
        De = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              B.nonEmptyArray(e.xpaths) || this.throwParseError(Te.event);
              for (var t = 0, n = e.xpaths; t < n.length; t++) {
                var r = n[t];
                this.validateXpath(r) || this.throwParseError(Te.event);
              }
              return new Te(e.xpaths, e.timeout, e.parent);
            }),
            t
          );
        })(J),
        Se = (function (e) {
          function t() {
            return e.call(this) || this;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                return f(this, function (e) {
                  return [2, this.handleSuccess(D.stopped)];
                });
              });
            }),
            (t.event = v.stopScenario),
            t
          );
        })(P),
        xe = (function (e) {
          function t(t, n) {
            return e.call(this, t, n) || this;
          }
          return (
            l(t, e),
            (t.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                return f(this, function (e) {
                  try {
                    return this.getNode(this.xpath, this.parent), [2, this.handleSuccess()];
                  } catch (e) {
                    return [2, this.handleFail(v.verifyOk, e)];
                  }
                  return [2];
                });
              });
            }),
            (t.event = v.verifyOk),
            t
          );
        })(W),
        je = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              return this.validateXpath(e.xpath) || this.throwParseError(xe.event), new xe(e.xpath, e.parent);
            }),
            t
          );
        })(J),
        He = (function () {
          function e() {
            this.invalidActions = [];
          }
          return (
            (e.prototype.parse = function (e) {
              var t = this;
              if (((this.invalidActions = []), !B.nonEmptyArray(e))) throw new k();
              var n = [];
              if (
                (e.forEach(function (e) {
                  try {
                    var r = t.parseAction(e);
                    n.push(r);
                  } catch (e) {
                    t.handleActionError(e);
                  }
                }),
                this.invalidActions.length)
              )
                throw new Y(this.invalidActions);
              return n;
            }),
            (e.prototype.parseAction = function (e) {
              switch ((e.event || this.throwActionError("unspecified"), e.event)) {
                case F.event:
                  return new we().parse(e);
                case Te.event:
                  return new De().parse(e);
                case ke.event:
                  return new Ye().parse(e);
                case V.event:
                  return new $().parse(e);
                case q.event:
                  return new K().parse(e);
                case X.event:
                  return new Z().parse(e);
                case Q.event:
                  return new ee().parse(e);
                case ce.event:
                  return new le().parse(e);
                case he.event:
                  return new _e().parse(e);
                case Se.event:
                  return new Se();
                case fe.event:
                  return new ye().parse(e);
                case xe.event:
                  return new je().parse(e);
                case ve.event:
                  return new be().parse(e);
                case Me.event:
                  return new Le().parse(e);
                default:
                  this.throwActionError(e.event);
              }
            }),
            (e.prototype.handleActionError = function (e) {
              e instanceof G && this.invalidActions.push(e.event);
            }),
            (e.prototype.throwActionError = function (e) {
              throw new G(e);
            }),
            e
          );
        })(),
        Ee = (function () {
          function e() {
            var e = this;
            (this.invalidHooks = []),
              (this.parseHooks = function (t, n) {
                var r,
                  i = n,
                  s = null === (r = e.hooks) || void 0 === r ? void 0 : r[i];
                return (
                  s && !s.actions && e.invalidHooks.push(i), s && !e.invalidHooks.length && (t[i] = { actions: e.parseHookActions(s) }), t
                );
              });
          }
          return (
            (e.prototype.parse = function (e) {
              this.hooks = e;
              var t = Object.keys(L).reduce(this.parseHooks, {});
              if (this.invalidHooks.length) throw new w(this.invalidHooks);
              return t;
            }),
            (e.prototype.parseHookActions = function (e) {
              return new He().parse(null == e ? void 0 : e.actions);
            }),
            e
          );
        })(),
        Ae = new ((function () {
          function e() {
            this.stack = [];
          }
          return (
            (e.prototype.getStack = function () {
              return this.stack;
            }),
            (e.prototype.addActionStack = function (e) {
              this.stack.push(e);
            }),
            (e.prototype.addPageStack = function (e) {
              this.stack.push(e);
            }),
            (e.prototype.clearStack = function () {
              this.stack = [];
            }),
            e
          );
        })())(),
        Oe = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.groupId = t), (n.message = 'Page group actions could not be executed due to missing "'.concat(n.groupId, '" group.')), n
            );
          }
          return l(t, e), t;
        })(b),
        Pe = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.target = t), (n.message = "Page actions could not be executed due to preconditions are not met."), n;
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                return [{ key: "Preconditions", description: this.getDetailsDescription() }];
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getDetailsDescription = function () {
              return this.target.query
                ? "Current url and queries doesn't match target \""
                    .concat(this.target.url, '" and [')
                    .concat(this.target.query.join(", "), "] queries.")
                : "Current url doesn't match target \"".concat(this.target.url, '"');
            }),
            t
          );
        })(b),
        Ne = function (e) {
          this.resolution = e;
        },
        Ce = (function () {
          function e(e, t, n) {
            void 0 === n && (n = !1), (this.target = e), (this.actions = t), (this.optional = n);
          }
          return (
            (e.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                return f(this, function (e) {
                  return this.verifyPreconditions()
                    ? (Ae.addPageStack({ target: this.target }), [2, this.executeActions()])
                    : [2, this.optional ? this.handleSuccess() : this.handleError(new Pe(this.target))];
                });
              });
            }),
            (e.prototype.verifyPreconditions = function () {
              return this.pathnameMatches() && this.queryMatches();
            }),
            (e.prototype.dispose = function () {
              for (var e in (this.disposeActions(), this)) this.hasOwnProperty(e) && delete this[e];
            }),
            (e.prototype.pathnameMatches = function () {
              var e = window.location.origin + window.location.pathname,
                t = this.target.url;
              return B.isRegex(t) ? new RegExp(t.slice(1)).test(e) : "*" === t || t === e;
            }),
            (e.prototype.queryMatches = function () {
              if (void 0 === this.target.query || B.isEmptyArray(this.target.query)) return !0;
              for (var e = 0, t = this.target.query; e < t.length; e++) {
                var n = t[e];
                if (window.location.search.indexOf(n) >= 0) return !0;
              }
              return !1;
            }),
            (e.prototype.handleSuccess = function (e) {
              return void 0 === e && (e = D.succeeded), Promise.resolve(new Ne(e));
            }),
            (e.prototype.handleError = function (e) {
              return Promise.reject(e);
            }),
            e
          );
        })(),
        Re = (function () {
          function e() {}
          return (
            (e.getActionStack = function (e, t) {
              var n = { event: t.getEvent(), nextGroup: e.nextGroup, resolution: e.resolution };
              return t instanceof W ? m(m({}, n), { xpath: t.xpath }) : n;
            }),
            (e.getGroupedActionStack = function (e, t, n) {
              var r = this.getActionStack(e, t);
              return m(m({}, r), { groupId: n });
            }),
            e
          );
        })(),
        We = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.executeActions = function () {
              return p(this, void 0, void 0, function () {
                var e, t;
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, this.executeGroupActions("initial")];
                    case 1:
                      return (e = n.sent()), [3, 3];
                    case 2:
                      return (t = n.sent()), [2, this.handleError(t)];
                    case 3:
                      return [2, this.handleSuccess(e.resolution)];
                  }
                });
              });
            }),
            (t.prototype.disposeActions = function () {
              var e = this;
              this.actions.forEach(function (t) {
                return e.disposeGroupAction(t);
              });
            }),
            (t.prototype.executeGroupActions = function (e) {
              var t, n;
              return p(this, void 0, void 0, function () {
                var r, i, s, a, o, u, d, c;
                return f(this, function (l) {
                  switch (l.label) {
                    case 0:
                      if (!(r = this.getGroupById(e))) throw new Oe(e);
                      l.label = 1;
                    case 1:
                      l.trys.push([1, 7, 8, 13]), (s = M(r.actions.entries())), (l.label = 2);
                    case 2:
                      return [4, s.next()];
                    case 3:
                      return (a = l.sent()).done
                        ? [3, 6]
                        : ((o = a.value),
                          (u = o[0]),
                          (d = o[1]),
                          this.isLastAction(d, u, r) && ne.emit(E.onBeforeLastAction, d.getEvent()),
                          [4, this.executeAction(d, e)]);
                    case 4:
                      if ((i = l.sent()).nextGroup) return [2, this.executeGroupActions(i.nextGroup)];
                      if (i.resolution !== D.succeeded) return [3, 6];
                      l.label = 5;
                    case 5:
                      return [3, 2];
                    case 6:
                      return [3, 13];
                    case 7:
                      return (c = l.sent()), (t = { error: c }), [3, 13];
                    case 8:
                      return l.trys.push([8, , 11, 12]), a && !a.done && (n = s.return) ? [4, n.call(s)] : [3, 10];
                    case 9:
                      l.sent(), (l.label = 10);
                    case 10:
                      return [3, 12];
                    case 11:
                      if (t) throw t.error;
                      return [7];
                    case 12:
                      return [7];
                    case 13:
                      return [2, i];
                  }
                });
              });
            }),
            (t.prototype.getGroupById = function (e) {
              return this.actions.filter(function (t) {
                return t.id === e;
              })[0];
            }),
            (t.prototype.isLastAction = function (e, t, n) {
              var r = e.action instanceof de ? e.action.getResolveConditionsGroupIds() : null,
                i =
                  null == r
                    ? void 0
                    : r.find(function (e) {
                        return e && e != O.ScenarioClosed && e != O.ScenarioRevoked;
                      });
              return void 0 === e.resolveGroup && t === n.actions.length - 1 && e.getEvent() != v.stopScenario && !i;
            }),
            (t.prototype.disposeGroupAction = function (e) {
              e.actions.forEach(function (e) {
                return e.dispose();
              });
            }),
            (t.prototype.executeAction = function (e, t) {
              return p(this, void 0, void 0, function () {
                var n;
                return f(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, e.execute()];
                    case 1:
                      return (n = r.sent()), Ae.addActionStack(Re.getGroupedActionStack(n, e, t)), [2, n];
                  }
                });
              });
            }),
            t
          );
        })(Ce),
        Fe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            l(t, e),
            (t.prototype.executeActions = function () {
              var e, t, n;
              return p(this, void 0, void 0, function () {
                var r, i, s, a, o, u, d, c;
                return f(this, function (l) {
                  switch (l.label) {
                    case 0:
                      if (0 === this.actions.length) return [2, this.handleSuccess(D.succeeded)];
                      l.label = 1;
                    case 1:
                      l.trys.push([1, 10, 11, 16]), (i = M(this.actions.entries())), (l.label = 2);
                    case 2:
                      return [4, i.next()];
                    case 3:
                      if ((s = l.sent()).done) return [3, 9];
                      (a = s.value),
                        (o = a[0]),
                        (u = a[1]),
                        this.isLastAction(o) && ne.emit(E.onBeforeLastAction, u.getEvent()),
                        (l.label = 4);
                    case 4:
                      return l.trys.push([4, 6, , 7]), [4, this.executeAction(u)];
                    case 5:
                      return (r = l.sent()), [3, 7];
                    case 6:
                      return (d = l.sent()), [2, this.handleError(d)];
                    case 7:
                      if (r.resolution !== D.succeeded) return [3, 9];
                      l.label = 8;
                    case 8:
                      return [3, 2];
                    case 9:
                      return [3, 16];
                    case 10:
                      return (c = l.sent()), (e = { error: c }), [3, 16];
                    case 11:
                      return l.trys.push([11, , 14, 15]), s && !s.done && (t = i.return) ? [4, t.call(i)] : [3, 13];
                    case 12:
                      l.sent(), (l.label = 13);
                    case 13:
                      return [3, 15];
                    case 14:
                      if (e) throw e.error;
                      return [7];
                    case 15:
                      return [7];
                    case 16:
                      return [2, this.handleSuccess(null !== (n = r.resolution) && void 0 !== n ? n : D.succeeded)];
                  }
                });
              });
            }),
            (t.prototype.disposeActions = function () {
              this.actions.forEach(function (e) {
                return e.dispose();
              });
            }),
            (t.prototype.executeAction = function (e) {
              return p(this, void 0, void 0, function () {
                var t;
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, e.execute()];
                    case 1:
                      return (t = n.sent()), Ae.addActionStack(Re.getActionStack(t, e)), [2, t];
                  }
                });
              });
            }),
            (t.prototype.isLastAction = function (e) {
              return e === this.actions.length - 1;
            }),
            t
          );
        })(Ce),
        Ie = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.message =
                'Unable to parse the page - either define "actions" or "groupedActions" both of them are not supported in single page.'),
              t
            );
          }
          return l(t, e), t;
        })(b),
        ze = (function () {
          function e(e, t, n) {
            (this.action = e), (this.resolveGroup = t), (this.rejectGroup = n);
          }
          return (
            (e.prototype.getEvent = function () {
              return this.action.getEvent();
            }),
            (e.prototype.execute = function () {
              return p(this, void 0, void 0, function () {
                var e, t, n;
                return f(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return r.trys.push([0, 2, , 3]), [4, this.action.execute()];
                    case 1:
                      return (e = r.sent()), (t = e.nextGroup ? e : new x(e.resolution, this.resolveGroup)), [2, this.handleSuccess(t)];
                    case 2:
                      return (
                        (n = r.sent()),
                        this.rejectGroup ? [2, this.handleSuccess(new x(D.succeeded, this.rejectGroup))] : [2, this.handleError(n)]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.dispose = function () {
              var e;
              for (var t in (null === (e = this.action) || void 0 === e || e.dispose(), this)) this.hasOwnProperty(t) && delete this[t];
            }),
            (e.prototype.handleSuccess = function (e) {
              return Promise.resolve(e);
            }),
            (e.prototype.handleError = function (e) {
              return Promise.reject(new S(this.getEvent(), e));
            }),
            e
          );
        })(),
        Ue = (function (e) {
          function t(t) {
            void 0 === t && (t = new He());
            var n = e.call(this) || this;
            return (n.actionParser = t), n;
          }
          return (
            l(t, e),
            (t.prototype.parse = function (e) {
              if (!B.nonEmptyArray(e)) throw new k();
              return this.parseGroupedActions(e);
            }),
            (t.prototype.parseGroupedActions = function (e) {
              var t = this;
              return e.map(function (e) {
                var n = t.actionParser.parse(e.actions),
                  r = t.decorateGroupActions(n, e.actions);
                return { id: e.id, actions: r };
              });
            }),
            (t.prototype.decorateGroupActions = function (e, t) {
              return e.map(function (e, n) {
                var r = t[n],
                  i = r.resolveGroup,
                  s = r.rejectGroup;
                return new ze(e, i, s);
              });
            }),
            t
          );
        })(J),
        Ve = (function () {
          function e(e) {
            void 0 === e && (e = new He()), (this.actionParser = e);
          }
          return (
            (e.prototype.parse = function (e) {
              var t = this.getParsedPageTarget(e.target);
              if (!this.validateIsOptional(e)) throw new T();
              var n = e.hasOwnProperty("actions"),
                r = e.hasOwnProperty("groupedActions");
              if (n && r) throw new Ie();
              return n
                ? new Fe(t, this.parseActions(e.actions), e.optional)
                : new We(t, this.parseGroupedActions(e.groupedActions), e.optional);
            }),
            (e.prototype.getParsedPageTarget = function (e) {
              if (this.isValidUrlOrRegex(e)) return { url: e };
              if (this.isValidPageTarget(e)) return e;
              throw new T();
            }),
            (e.prototype.isValidPageTarget = function (e) {
              return B.isObjectWithKeys(e) && this.isValidUrlOrRegex(e.url) && this.validatePageTargetQueries(e);
            }),
            (e.prototype.isValidUrlOrRegex = function (e) {
              return "*" === e || B.isValidUrl(e) || B.isRegex(e);
            }),
            (e.prototype.validatePageTargetQueries = function (e) {
              if (void 0 === e.query) return !0;
              if (!B.isArray(e.query)) return !1;
              for (var t = 0, n = e.query; t < n.length; t++) {
                var r = n[t];
                if (!B.isQueryString(r)) return !1;
              }
              return !0;
            }),
            (e.prototype.validateIsOptional = function (e) {
              return !e.hasOwnProperty("optional") || B.isBoolean(e.optional);
            }),
            (e.prototype.parseActions = function (e) {
              return this.actionParser.parse(e);
            }),
            (e.prototype.parseGroupedActions = function (e) {
              return new Ue(this.actionParser).parse(e);
            }),
            e
          );
        })(),
        Ge = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.resolution = t), (n.message = "Hook type is unknown."), n;
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                return [{ key: "Hook", description: "Hook type for '".concat(this.resolution, "' resolution is unknown.") }];
              },
              enumerable: !1,
              configurable: !0
            }),
            t
          );
        })(b),
        Be = (function () {
          function e(e, t, n) {
            (this.name = e), (this.scenarioPages = t), (this.hooks = n);
          }
          return (
            (e.prototype.run = function () {
              return p(this, void 0, void 0, function () {
                return f(this, function (e) {
                  return [2, this.executePages()];
                });
              });
            }),
            (e.prototype.getHookType = function (e) {
              switch (e.resolution) {
                case D.succeeded:
                  return L.onSuccess;
                case D.stopped:
                case D.terminated:
                  return L.onStop;
                default:
                  throw new Ge(e.resolution);
              }
            }),
            (e.prototype.executeHook = function (e) {
              var t;
              return p(this, void 0, void 0, function () {
                var n, r, i;
                return f(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (!(n = null === (t = this.hooks) || void 0 === t ? void 0 : t[e])) return [2];
                      (r = 0), (i = n.actions), (s.label = 1);
                    case 1:
                      return r < i.length ? [4, i[r].execute()] : [3, 4];
                    case 2:
                      s.sent(), (s.label = 3);
                    case 3:
                      return r++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.disposeActions = function () {
              this.scenarioPages.forEach(function (e) {
                return e.disposeActions();
              });
            }),
            (e.prototype.disposeHookActions = function (e) {
              e.actions.forEach(function (e) {
                return e.dispose();
              });
            }),
            (e.prototype.dispose = function () {
              for (var e in (this.scenarioPages.forEach(function (e) {
                return e.dispose();
              }),
              this.hooks && Object.values(this.hooks).forEach(this.disposeHookActions),
              this))
                this.hasOwnProperty(e) && delete this[e];
            }),
            (e.prototype.executePages = function () {
              return p(this, void 0, void 0, function () {
                var e, t, n, r, i;
                return f(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (0 === this.scenarioPages.length) return [2, this.handleSuccess(new H(this.name, D.succeeded, Ae.getStack()))];
                      (t = 0), (n = this.scenarioPages), (s.label = 1);
                    case 1:
                      if (!(t < n.length)) return [3, 7];
                      (r = n[t]), (s.label = 2);
                    case 2:
                      return s.trys.push([2, 4, , 5]), [4, r.execute()];
                    case 3:
                      return (e = s.sent()), [3, 5];
                    case 4:
                      return (i = s.sent()), [2, this.handleError(i)];
                    case 5:
                      if (e.resolution !== D.succeeded) return [3, 7];
                      s.label = 6;
                    case 6:
                      return t++, [3, 1];
                    case 7:
                      return [2, this.handleSuccess(new H(this.name, e.resolution, Ae.getStack()))];
                  }
                });
              });
            }),
            (e.prototype.handleSuccess = function (e) {
              return Promise.resolve(e);
            }),
            (e.prototype.handleError = function (e) {
              return Promise.reject(e);
            }),
            e
          );
        })(),
        Je = (function (e) {
          function t(t, n) {
            void 0 === t && (t = new Ve()), void 0 === n && (n = new Ee());
            var r = e.call(this) || this;
            return (r.pageParser = t), (r.hooksParser = n), r;
          }
          return (
            l(t, e),
            (t.prototype.parseScenario = function (e) {
              var t = e.name,
                n = e.pages,
                r = e.hooks;
              this.validateScenarioName(t);
              var i = this.getParsedPages(n),
                s = this.hooksParser.parse(r);
              return this.invalidKeys.length && this.throwHandledError(t), new Be(t, i, s);
            }),
            (t.prototype.validateScenarioName = function (e) {
              B.nonEmptyString(e) || this.pushInvalidKey(h.name, "The Scenario name was either not provided or the value is valid.");
            }),
            (t.prototype.getParsedPages = function (e) {
              var t = this;
              if (!B.nonEmptyArray(e))
                return this.pushInvalidKey(h.pages, "The Scenario pages are either not provided or the value is valid."), [];
              var n = [];
              return (
                e.forEach(function (e) {
                  try {
                    n.push(t.pageParser.parse(e));
                  } catch (e) {
                    t.handleParsePageError(e);
                  }
                }),
                n
              );
            }),
            (t.prototype.handleParsePageError = function (e) {
              return e instanceof T
                ? this.pushInvalidKey(_.target, e.message)
                : e instanceof k || e instanceof Y
                ? this.pushInvalidKey(_.actions, e.message)
                : e instanceof w
                ? this.pushInvalidKey(_.hooks, e.message)
                : void this.pushInvalidKey(h.pages, e.message);
            }),
            t
          );
        })(
          (function () {
            function e() {
              this.invalidKeys = [];
            }
            return (
              (e.prototype.parse = function (e) {
                return (
                  (this.invalidKeys = []),
                  (this.sourceData = this.parseSourceData(e)),
                  B.isObjectWithKeys(this.sourceData) || this.throwInvalidSourceData(),
                  this.parseScenario(this.sourceData)
                );
              }),
              (e.prototype.parseSourceData = function (e) {
                try {
                  return B.isString(e) ? JSON.parse(e) : e;
                } catch (e) {
                  this.throwInvalidSourceData();
                }
              }),
              (e.prototype.pushInvalidKey = function (e, t) {
                this.invalidKeys.push({ key: e, description: t });
              }),
              (e.prototype.throwInvalidSourceData = function () {
                this.pushInvalidKey("source-data", "The Scenario is not valid JSON or an Object."), this.throwHandledError();
              }),
              (e.prototype.throwHandledError = function (e) {
                throw (void 0 === e && (e = "Unknown"), (this.sourceData = void 0), new j(e, this.invalidKeys));
              }),
              e
            );
          })()
        ),
        $e = (function (e) {
          function t(t, n) {
            void 0 === t && (t = "unknown"), void 0 === n && (n = "unknown");
            var r = e.call(this) || this;
            return (r.caller = t), (r.methodName = n), (r.message = "Scenario has not been initiated or it has been already disposed."), r;
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                return [
                  { key: this.caller, description: 'Method "'.concat(this.methodName, "\" couldn't be executed without the scenario") }
                ];
              },
              enumerable: !1,
              configurable: !0
            }),
            t
          );
        })(b),
        qe = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.failReason = t), (n.message = "An unhandled exception occurred."), n;
          }
          return (
            l(t, e),
            Object.defineProperty(t.prototype, "errorDetails", {
              get: function () {
                return [{ key: this.failReason.name, description: this.failReason.message, failReason: this.failReason }];
              },
              enumerable: !1,
              configurable: !0
            }),
            t
          );
        })(b),
        Ke = (function () {
          function e(e) {
            (this.parser = e), (this.eventEmitter = ne);
          }
          return (
            (e.prototype.initiateScenario = function (e) {
              return p(this, void 0, void 0, function () {
                var t;
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 4]), [4, this.disposeScenario()];
                    case 1:
                      return n.sent(), (this.scenario = this.getParsedScenario(e)), [3, 4];
                    case 2:
                      return (t = n.sent()), [4, this.handleError(t)];
                    case 3:
                      return n.sent(), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.start = function () {
              return p(this, void 0, void 0, function () {
                var e, t;
                return f(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!this.scenario) return [2, this.handleError(new $e(this.constructor.name, "start"))];
                      n.label = 1;
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, this.scenario.run()];
                    case 2:
                      return (e = n.sent()), [2, this.handleSuccess(e)];
                    case 3:
                      return (t = n.sent()), [2, this.handleError(t)];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.stop = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return f(this, function (t) {
                  return this.scenario
                    ? (this.scenario.disposeActions(),
                      (e = new H(this.scenario.name, D.terminated, Ae.getStack())),
                      [2, this.handleSuccess(e)])
                    : [2, this.handleError(new $e(this.constructor.name, "stop"))];
                });
              });
            }),
            (e.prototype.handleSuccess = function (e) {
              var t, n;
              return p(this, void 0, void 0, function () {
                var r;
                return f(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, 4, 6]),
                        [4, null === (t = this.scenario) || void 0 === t ? void 0 : t.executeHook(this.scenario.getHookType(e))]
                      );
                    case 1:
                    case 3:
                      return i.sent(), [3, 6];
                    case 2:
                      return (r = i.sent()), [4, this.handleError(r)];
                    case 4:
                      return [4, null === (n = this.scenario) || void 0 === n ? void 0 : n.executeHook(L.onDisposed)];
                    case 5:
                      return i.sent(), [7];
                    case 6:
                      return [4, this.disposeScenario()];
                    case 7:
                      return i.sent(), [2, Promise.resolve(e)];
                  }
                });
              });
            }),
            (e.prototype.handleError = function (e) {
              var t;
              return p(this, void 0, void 0, function () {
                var n, r;
                return f(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = e instanceof b ? e : new qe(e)),
                        (r = H.buildFailedResult(this.scenario, n, Ae.getStack())),
                        this.eventEmitter.emit(E.onError, r),
                        [4, null === (t = this.scenario) || void 0 === t ? void 0 : t.executeHook(L.onFailed)]
                      );
                    case 1:
                      return i.sent(), [2, Promise.reject(r)];
                  }
                });
              });
            }),
            (e.prototype.disposeScenario = function () {
              return p(this, void 0, void 0, function () {
                return f(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.scenario ? [4, this.scenario.dispose()] : [2];
                    case 1:
                      return e.sent(), (this.scenario = void 0), Ae.clearStack(), [2];
                  }
                });
              });
            }),
            (e.prototype.getParsedScenario = function (e) {
              return this.parser.parse(e);
            }),
            e
          );
        })();
      !(function () {
        function e() {}
        (e.logResult = function (e) {
          if (e.resolution === D.failed) return this.logFailedResult(e);
        }),
          (e.logFailedResult = function (e) {
            var t = e.error,
              n = e.scenarioName;
            ""
              .concat(n, " - ")
              .concat(null == t ? void 0 : t.name, ": ")
              .concat(null == t ? void 0 : t.message);
            (null == t ? void 0 : t.details) && this.logErrorDetails(t.details);
          }),
          (e.logErrorDetails = function (e) {
            var t = this;
            e.forEach(function (e) {
              return e.failReason ? t.logErrorFailReason(e) : t.logErrorMessage(e.key, e.description);
            });
          }),
          (e.logErrorFailReason = function (e) {}),
          (e.logErrorMessage = function (e, t) {}),
          (e.errorLabelStyle = "background: #d5322a; color: #fff; padding: 2px; font-weight: bold"),
          (e.errorBodyStyle = "background: #fff0f0; color: #d5322a; padding: 2px;");
      })();
      class Xe {
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
      class Ze {
        constructor(e) {
          this.execute = e;
        }
        getURL() {
          return this.execute("extension", "getURL", ...arguments);
        }
      }
      class Qe {
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
      class et {
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
      class tt {
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
      class nt {
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
      class rt {
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
      class it {
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
      class st {
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
      const at = Array.isArray;
      const ot = "object" == typeof global && global && global.Object === Object && global;
      var ut = "object" == typeof self && self && self.Object === Object && self;
      const dt = ot || ut || Function("return this")();
      const ct = dt.Symbol;
      var lt = Object.prototype,
        ht = lt.hasOwnProperty,
        _t = lt.toString,
        mt = ct ? ct.toStringTag : void 0;
      const pt = function (e) {
        var t = ht.call(e, mt),
          n = e[mt];
        try {
          e[mt] = void 0;
          var r = !0;
        } catch (e) {}
        var i = _t.call(e);
        return r && (t ? (e[mt] = n) : delete e[mt]), i;
      };
      var ft = Object.prototype.toString;
      const yt = function (e) {
        return ft.call(e);
      };
      var gt = ct ? ct.toStringTag : void 0;
      const Mt = function (e) {
        return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : gt && gt in Object(e) ? pt(e) : yt(e);
      };
      const Lt = function (e) {
        return null != e && "object" == typeof e;
      };
      const vt = function (e) {
        return "symbol" == typeof e || (Lt(e) && "[object Symbol]" == Mt(e));
      };
      var bt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        kt = /^\w*$/;
      const Yt = function (e, t) {
        if (at(e)) return !1;
        var n = typeof e;
        return (
          !("number" != n && "symbol" != n && "boolean" != n && null != e && !vt(e)) ||
          kt.test(e) ||
          !bt.test(e) ||
          (null != t && e in Object(t))
        );
      };
      const wt = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
      const Tt = function (e) {
        if (!wt(e)) return !1;
        var t = Mt(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
      };
      const Dt = dt["__core-js_shared__"];
      var St,
        xt = (St = /[^.]+$/.exec((Dt && Dt.keys && Dt.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + St : "";
      const jt = function (e) {
        return !!xt && xt in e;
      };
      var Ht = Function.prototype.toString;
      const Et = function (e) {
        if (null != e) {
          try {
            return Ht.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
      var At = /^\[object .+?Constructor\]$/,
        Ot = Function.prototype,
        Pt = Object.prototype,
        Nt = Ot.toString,
        Ct = Pt.hasOwnProperty,
        Rt = RegExp(
          "^" +
            Nt.call(Ct)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$"
        );
      const Wt = function (e) {
        return !(!wt(e) || jt(e)) && (Tt(e) ? Rt : At).test(Et(e));
      };
      const Ft = function (e, t) {
        return null == e ? void 0 : e[t];
      };
      const It = function (e, t) {
        var n = Ft(e, t);
        return Wt(n) ? n : void 0;
      };
      const zt = It(Object, "create");
      const Ut = function () {
        (this.__data__ = zt ? zt(null) : {}), (this.size = 0);
      };
      const Vt = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
      var Gt = Object.prototype.hasOwnProperty;
      const Bt = function (e) {
        var t = this.__data__;
        if (zt) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return Gt.call(t, e) ? t[e] : void 0;
      };
      var Jt = Object.prototype.hasOwnProperty;
      const $t = function (e) {
        var t = this.__data__;
        return zt ? void 0 !== t[e] : Jt.call(t, e);
      };
      const qt = function (e, t) {
        var n = this.__data__;
        return (this.size += this.has(e) ? 0 : 1), (n[e] = zt && void 0 === t ? "__lodash_hash_undefined__" : t), this;
      };
      function Kt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Kt.prototype.clear = Ut), (Kt.prototype.delete = Vt), (Kt.prototype.get = Bt), (Kt.prototype.has = $t), (Kt.prototype.set = qt);
      const Xt = Kt;
      const Zt = function () {
        (this.__data__ = []), (this.size = 0);
      };
      const Qt = function (e, t) {
        return e === t || (e != e && t != t);
      };
      const en = function (e, t) {
        for (var n = e.length; n--; ) if (Qt(e[n][0], t)) return n;
        return -1;
      };
      var tn = Array.prototype.splice;
      const nn = function (e) {
        var t = this.__data__,
          n = en(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : tn.call(t, n, 1), --this.size, !0);
      };
      const rn = function (e) {
        var t = this.__data__,
          n = en(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
      const sn = function (e) {
        return en(this.__data__, e) > -1;
      };
      const an = function (e, t) {
        var n = this.__data__,
          r = en(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      };
      function on(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (on.prototype.clear = Zt), (on.prototype.delete = nn), (on.prototype.get = rn), (on.prototype.has = sn), (on.prototype.set = an);
      const un = on;
      const dn = It(dt, "Map");
      const cn = function () {
        (this.size = 0), (this.__data__ = { hash: new Xt(), map: new (dn || un)(), string: new Xt() });
      };
      const ln = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
      };
      const hn = function (e, t) {
        var n = e.__data__;
        return ln(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
      const _n = function (e) {
        var t = hn(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      const mn = function (e) {
        return hn(this, e).get(e);
      };
      const pn = function (e) {
        return hn(this, e).has(e);
      };
      const fn = function (e, t) {
        var n = hn(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      };
      function yn(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (yn.prototype.clear = cn), (yn.prototype.delete = _n), (yn.prototype.get = mn), (yn.prototype.has = pn), (yn.prototype.set = fn);
      const gn = yn;
      function Mn(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            s = n.cache;
          if (s.has(i)) return s.get(i);
          var a = e.apply(this, r);
          return (n.cache = s.set(i, a) || s), a;
        };
        return (n.cache = new (Mn.Cache || gn)()), n;
      }
      Mn.Cache = gn;
      const Ln = Mn;
      var vn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        bn = /\\(\\)?/g;
      const kn = (function (e) {
        var t = Ln(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      })(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(vn, function (e, n, r, i) {
            t.push(r ? i.replace(bn, "$1") : n || e);
          }),
          t
        );
      });
      const Yn = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
        return i;
      };
      var wn = ct ? ct.prototype : void 0,
        Tn = wn ? wn.toString : void 0;
      const Dn = function e(t) {
        if ("string" == typeof t) return t;
        if (at(t)) return Yn(t, e) + "";
        if (vt(t)) return Tn ? Tn.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
      const Sn = function (e) {
        return null == e ? "" : Dn(e);
      };
      const xn = function (e, t) {
        return at(e) ? e : Yt(e, t) ? [e] : kn(Sn(e));
      };
      const jn = function (e) {
        if ("string" == typeof e || vt(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
      const Hn = function (e, t) {
        for (var n = 0, r = (t = xn(t, e)).length; null != e && n < r; ) e = e[jn(t[n++])];
        return n && n == r ? e : void 0;
      };
      const En = function (e, t, n) {
        var r = null == e ? void 0 : Hn(e, t);
        return void 0 === r ? n : r;
      };
      class An {
        constructor(e) {
          this.browser = e;
          const t = function (...t) {
            const n = En(e, t.shift()) || {},
              r = n[t.shift()];
            return "function" == typeof r ? r.apply(n, t) : r;
          };
          (this.browserAction = new Xe(t)),
            (this.extension = new Ze(t)),
            (this.i18n = new et(t)),
            (this.runtime = new Qe(t)),
            (this.storage = new tt(t, this.browser)),
            (this.tabs = new nt(t)),
            (this.windows = new rt(t)),
            (this.webNavigation = new it(t)),
            (this.webRequest = new st(t));
        }
      }
      class On extends P {
        constructor(e) {
          super(), (this.data = e), (this.Api = new An(chrome));
        }
        get cookieScenarioParams() {
          const { type: e, variant: t } = this.data;
          return { scenario: e, variant: t };
        }
        execute() {
          return new Promise((e, t) => {
            this.sendMessage(), this.addMessageListener(e), this.createTimeout(t);
          });
        }
        disposeTimer() {
          this.timer && clearTimeout(this.timer), (this.timer = null);
        }
        dispose() {
          this.disposeTimer(), super.dispose();
        }
        createTimeout(e) {
          this.timer = setTimeout(
            () => e(new Error(`CookieFrameAction didn't get response within ${this.data.timeout}ms`)),
            this.data.timeout
          );
        }
        sendMessage() {
          const e = { detectionRules: this.data["detection-rules"], params: this.cookieScenarioParams };
          this.Api.runtime.sendMessage({ message: n.RUN_FRAME_SCENARIO, cookieFrameData: e });
        }
        addMessageListener(e) {
          this.Api.runtime.onMessage.addListener((t) => {
            if (t.message === n.FRAME_SCENARIO_FINISHED) return e(new x(t.resolution));
          });
        }
      }
      On.event = "cookie-iframe-message";
      class Pn extends J {
        parse(e) {
          if (this.validateType(e.type) && this.validateVariant(e.variant) && this.validateDetectionRules(e["detection-rules"]))
            return new On(e);
          this.throwParseError(On.event);
        }
        validateDetectionRules(e) {
          return B.nonEmptyArray(e) && e.every((e) => this.validateDetectionRule(e));
        }
        validateDetectionRule(e) {
          return this.validateType(e.type) && this.validateDetectors(e.detectors);
        }
        validateDetectors(e) {
          return B.nonEmptyArray(e) && e.every((e) => this.validateDetector(e));
        }
        validateDetector(e) {
          return B.nonEmptyString(e.variant) && this.validateSelectors(e.selectors);
        }
        validateSelectors(e) {
          return B.nonEmptyArray(e) && e.every((e) => B.nonEmptyString(e));
        }
        validateType(e) {
          return B.nonEmptyString(e);
        }
        validateVariant(e) {
          return B.nonEmptyString(e);
        }
      }
      class Nn extends P {
        constructor(e) {
          super(), (this.data = e);
        }
        get cookies() {
          return document.cookie.split(";");
        }
        execute() {
          const e = this.cookies.some((e) => e.indexOf(this.data.cookie) >= 0);
          return this.handleSuccess(e ? D.succeeded : D.failed);
        }
      }
      Nn.event = "validate-cookie-action";
      class Cn extends ke {
        constructor(e) {
          super(e);
        }
        getNodes(e, t) {
          return document.querySelectorAll(e);
        }
      }
      class Rn extends J {
        parse(e) {
          if (!e.querySelector) return new Ye().parse(e);
          if (!B.nonEmptyString(e.querySelector)) throw this.throwParseError(ke.event);
          return new Cn(e.querySelector);
        }
      }
      class Wn extends J {
        parse(e) {
          return B.nonEmptyString(e.cookie) || this.throwParseError(Nn.event), new Nn(e);
        }
      }
      var Fn = i(6146);
      class In extends ce {
        buildComponent() {
          return new zn(this.content, this.className);
        }
      }
      In.event = "aos-notification";
      class zn extends ue {
        render() {
          super.render(),
            [...document.querySelectorAll("[data-aos-action]")].forEach((e) => {
              this.addDomListener(e, "click", () => this.onClick(e.dataset.aosAction));
            });
        }
        onClick(e) {
          ne.emit(e);
        }
      }
      const Un = JSON.parse(
        '{"aos":"Avast Online Security & Privacy","onboarding.firefox.permission":"we need your permission","onboarding.firefox.button3":"Close","onboarding.firefox.button2":"Close extension","onboarding.firefox.button1":"Allow","onboarding.firefox.text":"Allow our extension to protect you from online trackers and unsafe sites as you browse the web. For more info, see our <a href=\\"https://addons.mozilla.org/firefox/addon/avast-online-security/privacy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Privacy Policy</a>","onboarding.firefox.header":"Let us protect you online?","onboarding.cookies.promo.button":"Go premium","onboarding.cookies.promo.text":"With Avast One Premium save hundreds of clicks by automatically accepting necessary cookies on the websites you visit.","onboarding.cookies.confirmed.text":"You’re now saving yourself hundreds of clicks!","onboarding.cookies.confirmed.header":"Cookie pop-ups <b>hidden</b>","onboarding.cookies.text":"Save hundreds of clicks by automatically accepting necessary cookies on the websites you visit. You can customize this later.","onboarding.cookies.header":"Hide cookie pop-ups on websites?","onboarding.guides.text":"We’ve chosen this step-by-step guide to help you hide your online tracks from %s in just a few minutes. Simply start or <a id=\\"action-link\\" class=\\"a\\">choose a different guide</a>","onboarding.guides.header":"One last thing! Let’s improve your privacy on %s","onboarding.advertisers.error.text":"We weren’t able to leave these advertisers’ database. Maybe another try?","onboarding.advertisers.error.header":"Let’s try again?","onboarding.advertisers.success.text":"This means less targeted ads and more peace of mind while browsing the web.","onboarding.advertisers.success.header":"You’re <b>free</b> from these advertisers","onboarding.advertisers.optingOut":"Limiting advertisers from collecting your info. Feel free to move on to the next step.","onboarding.advertisers.listing.finished":"We’ve opted you out from these advertisers:","onboarding.advertisers.listing.initial":"We will opt you out from the selected advertisers:","onboarding.advertisers.text":"We don’t block ads but we can limit these advertisers who try to target you after collecting your personal browsing data.","onboarding.advertisers.header":"Opt out from being targeted by ads","onboarding.tracking.confirmed.text":"Enjoy browsing the web freely without trackers!","onboarding.tracking.confirmed.header":"Anti-tracking is <b>turned on</b>","onboarding.tracking.text":"Be shielded against trackers who want to collect<br/>your data as you browse the web.","onboarding.tracking.header":"Turn on anti-tracking?","onboarding.tabs.guides":"Use a privacy guide","onboarding.tabs.advertisers":"Opt out from advertisers","onboarding.tabs.step":"Step %s","onboarding.tabs.tracking":"Limit tracking","onboarding.text":"Tell us your preferences in just a few simple steps.","onboarding.header":"Let\'s design your privacy","onboarding.greeting":"Got a minute?","postUpdate.button":"set up now","postUpdate.text5":"Quickly set up your privacy preferences now?","postUpdate.text4":"<b>Global Privacy Control</b> communicates your privacy preferences to the websites you visit, so you don’t need to mess around with your privacy settings.","postUpdate.text3":"<b>Privacy Advisor</b> helps you optimize your privacy settings in seconds, across your favorite platforms.","postUpdate.text2":"Welcome to a brand-new look for Avast, and a beautifully smooth user experience. We believe everyone has a right to live freely online, so we’ve added new privacy features that we think you’re going to like.","postUpdate.text1":"So what\'s new?","postUpdate.header":"You\'ve just updated to the <b>latest version</b>","home.banner.getAvastOne.text":"Download Free Avast One","home.banner.getAvastOne.header":"Take one more step to powerful protection","home.notSafe.text":"Careful, we just found some bad code here that may try to steal your sensitive info (like passwords and credit cards) when you enter the site.","home.notSafe.header":"This website <b>is not safe</b>","home.tracking.text":"We’re constantly scanning the web and found a website that is allowing trackers to identify you online.","home.tracking.header":"This website <b>can track</b> you online","home.good.text":"We’re constantly scanning the web and haven’t found anything bad here that’s trying to get your info.","home.good.header":"Everything <b>looks good!</b>","tracking.tooltip.detected":"Tracker detected","tracking.tooltip.allowed":"Allowed tracker","tracking.tooltip.blocked":"Blocked tracker","tracking.allowed":"%s allowed","tracking.detected":"%s detected","tracking.blocked":"%s blocked","tracking.other":"Other","tracking.webAnalytics":"Web analytics","tracking.adTracking":"Ad tracking","tracking.socialNetworks":"Social networks","tracking.number.detected":"%s trackers detected on %s","tracking.notFound":"No trackers found","tracking.found":"%s trackers found on %s","tracking.banner.button.getAntiTrack":"Get AntiTrack","tracking.statistics.button.antiTrack":"View in AntiTrack","tracking.text.getAntiTrack":"Get Avast AntiTrack to turn on tracking prevention and automatically block trackers as you browse the web.","tracking.banner.button.getAvastOne":"Get Avast One","tracking.banner.button.goPremium":"Go premium","tracking.banner.text":"Stop being followed by data collection companies and prevent invasive personalized advertising.","tracking.banner.header":"Be more private online","tracking.text.getAvastOne":"Get Avast One Premium to turn on tracking prevention and automatically block trackers as you browse the web.","tracking.statistics.button.avastOne":"View in Avast One","tracking.statistics.text":"total trackers blocked so far","tracking.text":"Keep this on to automatically block trackers as you browse the web.","tracking.header":"Prevent tracking on all websites","tracking":"Anti-tracking","advertisers.footer.tryAgain":"Try again","advertisers.footer.button":"Opt out","advertisers.footer.error":"Sorry, we weren’t able to opt you out from these advertisers this time.","advertisers.footer.optingOut":"Opting out is in progress.","advertisers.new.text":"Turn us back on to automatically opt you out.","advertisers.new.header":"%s new advertiser ready for opt out","advertisers.new.header_plural":"%s new advertisers ready for opt out","advertisers.kept.text":"You’ll still receive personalized offers from them.","advertisers.kept.header":"You’ve kept %s advertising company","advertisers.kept.header_plural":"You’ve kept %s advertising companies","advertisers.success.text":"You’ll no longer receive personalized offers from these companies.","advertisers.success.header":"Successfully opted out from %s advertiser","advertisers.success.header_plural":"Successfully opted out from %s advertisers","advertisers.text.off":"Turn this back on anytime to automatically opt out and stop new advertisers from using your data.","advertisers.text.on":"Keep this on to automatically opt out from new advertisers and protect your online privacy.","advertisers.header":"Opt out from all new advertisers","advertisers.optingOut":"Opting you out... Go on and we’ll let you know when it’s done!","advertisers.time":"This may take a minute.","advertisers":"Ads opt out","guides.badge.minutes":"%s min","guides.tooltip":"Click to open in a new browser tab.","guides.tabs.completed":"Completed guides","guides.tabs.explore":"Guides to explore","guides.text":"Quickly improve your privacy across your online accounts with our interactive step-by-step guides. Click on any of the guides below to begin in a new browser tab.","guides":"Privacy Advisor","support.text":"Take a look at our support page to find the answers you’re looking for.","support.header":"Need some help?","support":"Support","settings.notifications":"Change notification preferences","settings.improve.text":"Contribute to improving our products and creating a better experience for Avast users like you. We’ll never send this data to third-party analytic tools. See our <a href=\\"https://www.avast.com/products-policy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Product Policy</a>","settings.improve.header":"Help us improve by sharing your usage data with us","settings.gpc.text":"Join over 40 million users worldwide with this extension that helps you automatically make sites you visit aware of unwanted tracking so they can respect it. <a href=\\"https://globalprivacycontrol.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Learn more about GPC</a>","settings.gpc.header":"Enable Global Privacy Control (GPC)","settings.guides.text":"Show a message when you visit a website we have a specific privacy guide for.","settings.guides.header":"Offer contextual privacy guides","settings.tracker.text":"Add a badge to your browser to display the number of trackers on any website.","settings.tracker.header":"Show tracker count on extension icon","settings.search.text":"Get warning labels to see which search results are safe to click on.","settings.search.header":"Scan my search results","settings":"Settings","common.header.button.getAvastOne":"Get Avast One","common.header.button.upgrade":"Upgrade","common.toaster.getAvastOne.secondaryButton":"Not now","common.toaster.getAvastOne.primaryButton":"Download Free Avast One","common.toaster.getAvastOne.text":"Avast One is the all-in-one service that delivers comprehensive protection with an award-winning antivirus, VPN, data breach monitoring, and device cleanup tools.","common.toaster.getAvastOne.heading":"Take one more step to powerful protection with Avast One","error.cantFix.text":"Sorry about this, we’ll need some time to figure this out. Try again in a bit?","error.cantFix.header":"There’s an error on our side","error.inline.text":"We\'ve run into a few issues but don\'t worry, just reload your extension to keep being safe online.","error.inline.header":"Try reloading your extension","error.button":"Reload extension","error.text":"We’ve run into a few issues but don’t worry, just reload to continue being safe online. If the issue persists, try restarting your browser or computer.","error.header":"Try reloading extension","fullscreen.malware.text":"We\'ve found <b>malicious code</b> on this website that could harm your computer or steal your private data.  We recommend avoiding the site completely.","fullscreen.phishing.text":"This is a <b>phishing site</b> – a fake site that tries to steal your sensitive info (passwords, credit card numbers, and more).  We recommend avoiding the site completely.","fullscreen.malicious.header":"Hold on, this <b>website isn’t safe</b>","banner.avastone.guides":"Get 30+ desktop and mobile privacy guides with Avast One","banner.breachGuard.guides":"Get 30+ desktop and mobile privacy guides with Avast BreachGuard","banner.breachGuard.advertisers":"Crank it up a notch and opt out from <b>%s data brokers</b> with Avast BreachGuard","banner.antiTrack":"Go beyond regular tracking protection with Avast AntiTrack","banner.feedback.text":"Take a 1-minute survey","banner.feedback.header":"Help us improve this product for you","banner.checkOutGuides":"Check out our Privacy Advisor.","tooltip.searching.notSafe":"This website is not safe","tooltip.searching.safe":"This website is safe","tooltip.settings":"Customize your experience with Avast Online Security & Privacy.","tooltip.support":"Visit our Support Center.","tooltip.cookies":"Get rid of cookie pop-ups on all websites you visit.","tooltip.guides":"Use interactive guides to improve your online privacy.","tooltip.advertisers":"Send requests to advertisers to stop using your data.","tooltip.tracking":"Prevent tracking on websites you visit with this browser.","button.hideAutomatically":"Hide automatically","button.turnOn":"Turn on","button.setUp":"Set up","button.useDefault":"Use default settings","button.continueAnyway":"Continue anyway","button.avoidSite":"Avoid site","button.support":"Visit our Support Center","button.learnMore":"Learn more","button.leaveWebsite":"Leave website","button.viewAllowedTrackers":"View allowed trackers","button.viewBlockedTrackers":"View blocked trackers","button.startGuide":"Start guide","button.notNow":"Not now","button.tryAgain":"Try again now","button.next":"Next","button.nextStep":"Next step","button.maybeLater":"Maybe later","button.optOut":"Opt out","button.noThanks":"No thanks","button.limitTrackers":"Yes, limit all trackers","button.skip":"Skip it","button.ready":"I\'m ready","cookies.toaster.promo.primaryButton":"Go premium","cookies.toaster.promo.avastPremium.text":"With Avast Premium Security save hundreds of clicks by automatically accepting necessary cookies on the websites you visit.","cookies.toaster.promo.avastOne.text":"With Avast One Premium save hundreds of clicks by automatically accepting necessary cookies on the websites you visit.","cookies.toaster.secondaryButton.2":"Don’t show this anymore","cookies.toaster.secondaryButton":"Not now","cookies.toaster.primaryButton":"Hide cookie pop-ups","cookies.toaster.text":"Save hundreds of clicks by automatically accepting necessary cookies on the websites you visit.","cookies.toaster.title":"Hide cookie pop-ups on all websites","cookie.banner.avastPremium.text":"Get Avast Premium Security to automatically hide cookie pop-ups on the websites you visit.","cookie.banner.avastOne.text":"Get Avast One Premium to automatically hide cookie pop-ups on the websites you visit.","cookie.banner.button":"Go premium","cookie.banner.title":"Get rid of annoying cookie pop-ups","cookies.preferences.fieldset.nothing":"Do nothing","cookies.preferences.fieldset.decline":"Choose “Decline” when possible","cookies.preferences.fieldset.accept":"Choose “Accept” when possible","cookies.preferences.description":"Simple pop-ups are taken care of by default. Choose what to do with pop-ups that have more than one option:","cookies.websites.btn.add":"Add website","cookies.websites.description":"Add trusted websites to store cookies and remember your login info, passwords, cart items, etc.","cookies.reportSent.description":"Thank you for helping our support team investigate and fix these issues.","cookies.reportSent.title":"Your report was sent!","cookies.report.select.option.6":"Site isn\'t accessible due to a rejected policy","cookies.report.select.option.5":"Content doesn\'t load (e.g. videos, Twitter boxes, logging in)","cookies.report.select.option.4":"Broken website","cookies.report.select.option.3":"Overlay remained visible","cookies.report.select.option.2":"Scrolling was disabled","cookies.report.select.option.1":"Policy can\'t be accepted","cookies.report.select.option.0":"Cookie pop-up wasn\'t removed","cookies.report.select.placeholder":"What kind of issue is it?","cookies.report.cta.cancel":"Cancel","cookies.report.cta.sendReport":"Send report","cookies.report.screenshot":"Attach a web screenshot to help us fix this bug.","cookies.report.issueDescription.placeholder":"Click here to enter more details","cookies.report.issueDescription.label":"Let us know what went wrong (optional):","cookies.report.label.website":"Problematic website","cookies.report.description":"Let us know if you\'re still seeing cookie pop-ups on certain websites or experiencing any issues with our extension and we\'ll look into it.","cookies.report.title":"Found some issues?","cookies.summary.dismissedPopups":"cookie pop-ups were dismissed so far","cookies.summary.timeSaved":"minutes saved from clicking on pop-ups","cookies.tabs.popups":"Unique pop-ups","cookies.tabs.allowedWebsites":"Allowed websites","cookies.tabs.summary":"Summary","cookies.dashboard.btn.report":"Report a problem","cookies.dashboard.btn.feedback":"Send feedback","cookies.description":"Automatically hide cookie pop-ups on the sites you visit. <a href=\\"\\">How it works?</a>","cookies.title":"Hide cookie pop-ups","cookies":"Hide cookie pop-ups","promo.one.text":"Avast One is the free all-in-one service that combines an award-winning antivirus with VPN, speed-up, and security tools to help you stay private and safe.","promo.one":"Get essential protection with Avast One","promo.antiTrack.text":"Disguise your online profile so snoops can’t track you or collect and share your data with 3rd parties.","promo.antiTrack":"AntiTrack","promo.breachGuard.text":"Get 24/7 protection against data breaches and leaks of your personal information.","promo.breachGuard":"BreachGuard","promo.vpn.text":"Connect safely to any network, even unsecured public Wi-Fi, and access your favorite content from anywhere.","promo.vpn":"SecureLine VPN","promo.button":"Learn more","promo.header":"A small step for you, a giant leap for your privacy","empty.button":"Send feedback","empty.text":"If you’d like to share your experience with us, please click on the feedback button below.","empty.header":"Hello!","reload.button":"Reload now","reload.text":"Don’t forget to save any unfinished data you might have on the page.","reload.header":"Please reload the current page to open the extension","welcome.extension.header.edge":"Find your extension up here","welcome.extension.text.firefox":"Just click the <span id=\\"avast-icon\\"></span> on any website to start using Avast Online Security & Privacy.","welcome.extension.header.firefox":"Find your add-on up here","welcome.extension.text":"Just click the <span id=\\"extension-icon\\"></span> above and use the <span id=\\"pin-icon\\"></span> to keep it visible in your browser for easy access.","welcome.extension.header":"Keep your extension visible","welcome.button2":"Open STARTER Guide","welcome.button1":"set up now","welcome.text4":"Need help getting started?","welcome.text3":"Set up your privacy in a few clicks?","welcome.text2":"Start browsing the web with total confidence, privacy, and security. Not sure how to use our extension? Take a look at our starter guide below.","welcome.text1":"Congrats! Don’t forget to set up your privacy and begin using Avast Online Security & Privacy as you browse the web.","welcome.header":"Installed <b>successfully</b>"}'
      );
      const Vn = class {
        static retry(e, t) {
          const { delay: n = 0, numberOfRetries: r } = t;
          return new Promise((t, i) =>
            e()
              .then(t)
              .catch((s) =>
                void 0 !== r && r <= 0
                  ? i()
                  : this.timeout(n)
                      .then(() => this.retry(e, { delay: n, numberOfRetries: r - 1 }))
                      .then(t)
                      .catch(i)
              )
          );
        }
        static parallelRetry(e, t) {
          const { delay: n = 0, numberOfRetries: r, onParallelSuccess: i } = t;
          return new Promise((t) =>
            e()
              .then(t)
              .catch(() => {
                this.retry(e, { delay: n, numberOfRetries: r }).then(i), t(void 0);
              })
          );
        }
        static timeout(e) {
          return new Promise((t) => window.setTimeout(t, e));
        }
      };
      class Gn {
        constructor(e, t = null) {
          (this.context = e),
            (this.translations = t),
            (this.CDN_TRANSLATIONS_URL = "https://s-install.avcdn.net/aos/assets/prod/translations"),
            (this.api = e.Api),
            this.api.runtime.onMessage.addListener(this.onMessage.bind(this));
        }
        static async create(e, t = null) {
          const n = new Gn(e, t);
          return await n.init(), n;
        }
        static getTrackingTranslation(e) {
          const t = Fn.ZP.nlsRaw(e, "en");
          return t && Array.isArray(t) ? t[0] : t;
        }
        async init() {
          (this.locale = await this.getDefaultLocale()),
            this.translations || (this.translations = await this.getTranslations()),
            await this.registerI18nLocales();
        }
        translate(e, t = []) {
          return Fn.ZP.nls(e, ...t);
        }
        getLanguage() {
          const e = this.api.i18n.getUILanguage(),
            t = e.substring(0, 2);
          return { locale: e, code: t };
        }
        getLocale() {
          return this.locale;
        }
        onMessage(e, t, n) {
          if (e === Bn.GET_TRANSLATIONS) n(this.translations);
        }
        async getTranslations() {
          const [e, t, n] = await Promise.all([
            this.safelyFetchTranslation(`${this.CDN_TRANSLATIONS_URL}/Locale-en.json`),
            this.fetchTranslationFromLocal(),
            this.safelyFetchTranslation(`${this.CDN_TRANSLATIONS_URL}/Locale-${this.locale}.json`)
          ]);
          return {
            resources: {
              en: { translation: Object.assign(Object.assign({}, Un), e) },
              [this.locale]: { translation: Object.assign(Object.assign({}, t), n) }
            }
          };
        }
        updateTranslation(e, t) {
          var n, r, i, s;
          const a = null !== (r = null === (n = this.translations) || void 0 === n ? void 0 : n.resources) && void 0 !== r ? r : {},
            o = null !== (s = null === (i = null == a ? void 0 : a[e]) || void 0 === i ? void 0 : i.translation) && void 0 !== s ? s : {};
          (this.translations = {
            resources: Object.assign(Object.assign({}, a), { [e]: { translation: Object.assign(Object.assign({}, o), t) } })
          }),
            this.registerI18nLocales();
        }
        fetchTranslationFromLocal() {
          return this.fetchTranslation(this.api.runtime.getURL(`./locales/Locale-${this.locale}.json`)).catch(() => {});
        }
        async safelyFetchTranslation(e) {
          const t = () => Vn.retry(() => this.fetchTranslation(e), { numberOfRetries: 2 });
          try {
            const e = await Vn.parallelRetry(t, {
              delay: 5e3,
              onParallelSuccess: (e) => {
                e && this.updateTranslation("en", e);
              }
            });
            return null != e ? e : {};
          } catch (e) {
            return {};
          }
        }
        async fetchTranslation(e) {
          const t = await fetch(e);
          if (404 !== t.status) return await t.json();
        }
        async registerI18nLocales() {
          await Fn.ZP.register(this.translations), (Fn.ZP.locale = this.locale);
        }
        async getDefaultLocale() {
          const e = await this.context.storage.getValue("test.locale"),
            { locale: t } = this.getLanguage();
          return e || t || "en";
        }
      }
      var Bn, Jn, $n;
      !(function (e) {
        e.GET_TRANSLATIONS = "localization.getTranslations";
      })(Bn || (Bn = {}));
      class qn extends le {
        parse(e) {
          return this.validateNotificationData(e) || this.throwParseError(e.event), this.getParsedNotificationAction(e);
        }
        parseHtmlContent(e) {
          if (!this.validateHtmlContent(e.componentData)) throw new Error();
          const {
            label: t,
            heading: n,
            minutes: r,
            body: i,
            button: s,
            secondaryButton: a,
            badge: o,
            actionLink: u,
            illustration: d
          } = e.componentData;
          return `\n\t\t\t${this.renderOverlay(e)}\n\n\t\t\t<aside class='aos-notification'>\n\t\t\t\t<header>\n\t\t\t\t\t<h2>${(0, Fn.hd)(
            t
          )}</h2>\n\t\t\t\t\t<button class='close-icon'></button>\n\t\t\t\t</header>\n\n\t\t\t\t<div class='illustration ${d}'></div>\n\n\t\t\t\t<div class='component-body'>\n\t\t\t\t\t${this.renderBadge(
            o,
            e.className,
            r
          )}\n\t\t\t\t\t${this.renderHeading(n)}\n\t\t\t\t\t<p>${(0, Fn.hd)(i)}</p>\n\t\t\t\t\t${this.renderButtonWrap(
            s
          )}\n\t\t\t\t\t${this.renderSecondaryButtonWrap(a)}\n\t\t\t\t\t${this.renderActionLink(
            u,
            e.className
          )}\n\t\t\t\t</div>\n\t\t\t</aside>\n\t\t`;
        }
        renderOverlay(e) {
          return !e.hasOwnProperty("showOverlay") || e.showOverlay ? '<div class="aos-overlay"></div>' : "";
        }
        renderHeading(e) {
          return e ? `<h3>${(0, Fn.hd)(e)}</h3>` : "";
        }
        renderButtonWrap(e) {
          if (!e) return "";
          const t = e.isClose ? "close-button" : "",
            n = e.className ? e.className : "";
          return `\n\t\t\t<div class='button-wrap'>\n\t\t\t\t<a \n\t\t\t\t\t${e.href && `href=${e.href}`}\n\t\t\t\t\t${
            e.action && `data-aos-action=${e.action}`
          }\n\t\t\t\t\tclass="${t} ${n}">${(0, Fn.hd)(e.text)}</a>\n\t\t\t</div>\n\t\t`;
        }
        renderSecondaryButtonWrap(e) {
          if (!e) return "";
          return `\n\t\t\t<div class='button-wrap'>\n\t\t\t\t<a class='aos-secondary-button ${
            e.className ? e.className : ""
          }' \n\t\t\t\t\t${e.href && `href=${e.href}`}\n\t\t\t\t\t${e.action && `data-aos-action=${e.action}`}\n\t\t\t\t\t>${(0, Fn.hd)(
            e.text
          )}</a>\n\t\t\t</div>\n\t\t`;
        }
        renderBadge(e, t, n) {
          return e && t.includes("trigger-notification")
            ? `\n\t\t\t<span class='badge'>${(0, Fn.hd)("guides.notification.minutes", n)}</span>\n\t\t`
            : "";
        }
        renderActionLink(e, t) {
          return e && t.includes("trigger-notification")
            ? `\n\t\t\t<a class='a' data-aos-action='${e.action}'>${(0, Fn.hd)(e.text)}</a>\n\t\t`
            : "";
        }
        validateNotificationData(e) {
          return this.validateActionClassName(e);
        }
        getParsedNotificationAction(e) {
          try {
            const t = `aos-component aos-notification-component ${e.className || ""}`,
              n = this.parseResolveConditions(e.resolveConditions).concat(this.getCustomCloseConditions(e)),
              r = this.getTrackableContent(e.componentData);
            return new In(this.parseHtmlContent(e), t, n, r);
          } catch (t) {
            this.throwParseError(e.event);
          }
        }
        getTrackableContent(e) {
          const { body: t, heading: n } = e;
          return `[${Gn.getTrackingTranslation(n)}] ${Gn.getTrackingTranslation(t)}`;
        }
        getCustomCloseConditions(e) {
          const t = e.componentData.button && e.componentData.button.isClose;
          return (!e.hasOwnProperty("showOverlay") || e.showOverlay ? ["close-icon", "aos-overlay"] : ["close-icon"]).map((e) => {
            const n = [{ xpath: `//div[contains(@class, "aos-component")]//*[@class="${e}"]`, multipleMatch: !0 }];
            return (
              "close-icon" === e &&
                t &&
                n.push({ xpath: '//div[contains(@class, "aos-component")]//*[contains(@class, "close-button")]', multipleMatch: !0 }),
              { elements: n, groupId: "scenario-closed" }
            );
          });
        }
        validateHtmlContent(e) {
          return (
            !!(
              [e.label, e.body].every((e) => B.isString(e)) &&
              this.validateButton(e) &&
              this.validateSecondaryButton(e) &&
              this.validateHeading(e) &&
              this.validateBadge(e) &&
              this.validateActionLink(e) &&
              this.validateIllustration(e)
            ) && this.validateButton(e)
          );
        }
        validateButton(e) {
          if (!e.hasOwnProperty("button")) return !0;
          const t = e.button;
          return (
            B.isString(t.text) ||
            (t.hasOwnProperty("href") && B.isString(t.href)) ||
            (t.hasOwnProperty("action") && B.isString(t.action)) ||
            (t.hasOwnProperty("classname") && B.isString(t.classname)) ||
            (t.hasOwnProperty("isClose") && B.isBoolean(t.isClose))
          );
        }
        validateSecondaryButton(e) {
          if (!e.hasOwnProperty("secondaryButton")) return !0;
          const t = e.secondaryButton;
          return (
            B.isString(t.text) || (t.hasOwnProperty("href") && B.isString(t.href)) || (t.hasOwnProperty("action") && B.isString(t.action))
          );
        }
        validateHeading(e) {
          return !e.hasOwnProperty("heading") || B.isString(e.heading);
        }
        validateBadge(e) {
          return !e.hasOwnProperty("badge") || B.isBoolean(e.badge);
        }
        validateActionLink(e) {
          if (!e.hasOwnProperty("actionLink")) return !0;
          const t = e.actionLink;
          return B.isString(t.text) || B.isString(t.action);
        }
        validateIllustration(e) {
          return !e.hasOwnProperty("illustration") || B.isString(e.illustration);
        }
      }
      class Kn extends He {
        parseAction(e) {
          switch (e.event) {
            case On.event:
              return new Pn().parse(e);
            case Nn.event:
              return new Wn().parse(e);
            case ke.event:
              return new Rn().parse(e);
            case In.event:
              return new qn().parse(e);
            default:
              return super.parseAction(e);
          }
        }
      }
      !(function (e) {
        (e.ENABLE_COOKIE_MANAGER = "cookie.enable-cookie-manager"),
          (e.HIDE_FOREVER = "cookie.hide-forever"),
          (e.DISMISS = "cookie.dismiss-cookie-notification"),
          (e.OPEN_PROMOTED_LINK = "cookie.openPromotedLink");
      })(Jn || (Jn = {}));
      class Xn {
        constructor(e) {
          (this.scenarioData = e), (this.api = new An(chrome)), (this.runner = new Ke(this.getScenarioParser()));
        }
        getScenarioParser() {
          const e = new Kn(),
            t = new Ve(e);
          return new Je(t);
        }
        async start() {
          this.registerBackgroundListeners(), await this.runner.initiateScenario(this.scenarioData);
          const e = await this.runner.start();
          return Promise.resolve(e);
        }
        registerBackgroundListeners() {
          [...Object.values(Jn)].forEach((e) => {
            this.runner.eventEmitter.addListener(e, (...t) => {
              const n = JSON.parse(JSON.stringify(t));
              this.api.runtime.sendMessage({ message: e, data: { eventArgs: n } });
            });
          });
        }
      }
      !(function (e) {
        (e.AVAST_ONE_FREE = "avast-one-free"),
          (e.AVAST_ONE_PREMIUM = "avast-one-premium"),
          (e.AVAST_FREE = "avast-free"),
          (e.AVAST_PREMIUM_SECURITY = "avast-premium-security"),
          (e.NONE = "none");
      })($n || ($n = {}));
      class Zn {
        static isEnabled(t, n) {
          return t && n === e.ENABLED;
        }
        static getScenarioSection(e, t) {
          var n, r;
          const { scenario: i, variant: s, operation: a } = t;
          return null === (r = null === (n = null == e ? void 0 : e[i]) || void 0 === n ? void 0 : n[s]) || void 0 === r ? void 0 : r[a];
        }
        static isAllowedWebsite(e, t, n) {
          if (n || 0 === t.length) return !1;
          const r = e.match(this.CLEAR_WEBSITE_PATTERN)[1];
          return t.some((e) => e === r);
        }
        static hideCookieBanners(e) {
          this.injectCssTextStyle(e), this.setCookieHiddenAttribute();
        }
        static showCookieBanners() {
          document.body && document.body.setAttribute("aosp-cookie", "visible");
        }
        static setCookieHiddenAttribute() {
          document.body
            ? document.body.setAttribute("aosp-cookie", "hidden")
            : window.addEventListener("DOMContentLoaded", (e) => {
                document.body.setAttribute("aosp-cookie", "hidden");
              });
        }
        static injectCssTextStyle(e) {
          const t = document.createElement("style");
          (t.innerText = e), document.head.append(t);
        }
      }
      Zn.CLEAR_WEBSITE_PATTERN = "^(?:https?://)?(?:[^@/\n]+@)?(?:www.)?([^:/?\n]+)";
      class Qn {
        constructor() {
          (this.browser = ""),
            (this.version = ""),
            (this.OS = ""),
            (this.OSVersion = ""),
            (this.dataBrowser = [
              { string: navigator.userAgent, subString: "Edge", identity: "MS_EDGE" },
              { string: navigator.userAgent, subString: "Edg/", identity: "CHROMIUMEDGE" },
              { string: navigator.userAgent, subString: "OPR", identity: "OPERA" },
              { string: navigator.userAgent, subString: "Avast", identity: "AVAST" },
              { string: navigator.userAgent, subString: "Chrome", identity: "CHROME" },
              { string: navigator.userAgent, subString: "Firefox", identity: "FIREFOX" }
            ]),
            (this.dataOS = [
              { string: navigator.platform, subString: "Win", identity: "Windows" },
              { string: navigator.platform, subString: "Mac", identity: "Mac" },
              { string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod" },
              { string: navigator.platform, subString: "Linux", identity: "Linux" }
            ]),
            (this.dataOSVersion = [
              { string: navigator.userAgent, subString: "Windows 10.0", identity: "10.0 (Windows 10.0)" },
              { string: navigator.userAgent, subString: "Windows NT 10.0", identity: "10.0 (Windows NT 10.0)" },
              { string: navigator.userAgent, subString: "Windows 8.1", identity: "6.3 (Windows 8.1)" },
              { string: navigator.userAgent, subString: "Windows NT 6.3", identity: "6.3 (Windows NT 6.3)" },
              { string: navigator.userAgent, subString: "Windows 8", identity: "6.2 (Windows 8)" },
              { string: navigator.userAgent, subString: "Windows NT 6.2", identity: "6.2 (Windows NT 6.2)" },
              { string: navigator.userAgent, subString: "Windows 7", identity: "6.1 (Windows 7)" },
              { string: navigator.userAgent, subString: "Windows NT 6.1", identity: "6.1 (Windows NT 6.1)" },
              { string: navigator.userAgent, subString: "Windows NT 6.0", identity: "6.0 (Windows NT 6.0)" },
              { string: navigator.userAgent, subString: "Windows NT 5.2", identity: "5.2 (Windows NT 5.2)" },
              { string: navigator.userAgent, subString: "Windows NT 5.1", identity: "5.1 (Windows NT 5.1)" },
              { string: navigator.userAgent, subString: "Windows XP", identity: "5.1 (Windows XP)" },
              { string: navigator.userAgent, subString: "Windows NT 5.0", identity: "5.0 (Windows NT 5.0)" },
              { string: navigator.userAgent, subString: "Windows 2000", identity: "5.0 (Windows 2000)" },
              { string: navigator.userAgent, subString: "Win 9x 4.90", identity: "4.90 (Win 9x 4.90)" },
              { string: navigator.userAgent, subString: "Windows ME", identity: "4.90 (Windows ME)" },
              { string: navigator.userAgent, subString: "Windows 98", identity: "4.10 (Windows 98)" },
              { string: navigator.userAgent, subString: "Win98", identity: "4.10 (Win98)" },
              { string: navigator.userAgent, subString: "Windows 95", identity: "4.03 (Windows 95)" },
              { string: navigator.userAgent, subString: "Win95", identity: "4.03 (Win95)" },
              { string: navigator.userAgent, subString: "Windows_95", identity: "4.03 (Windows_95)" },
              { string: navigator.userAgent, subString: "Windows NT 4.0", identity: "4.0 (Windows NT 4.0)" },
              { string: navigator.userAgent, subString: "WinNT4.0", identity: "4.0 (WinNT4.0)" },
              { string: navigator.userAgent, subString: "WinNT", identity: "4.0 (WinNT)" },
              { string: navigator.userAgent, subString: "Windows NT", identity: "4.0 (Windows NT)" },
              { string: navigator.userAgent, subString: "Win16", identity: "3.11 (Win16)" },
              { string: navigator.userAgent, subString: "Intel Mac OS X 10_13", identity: "10.13 (macOS High Sierra)" },
              { string: navigator.userAgent, subString: "Intel Mac OS X 10_12", identity: "10.12 (macOS Sierra)" },
              { string: navigator.userAgent, subString: "Intel Mac OS X 10_11", identity: "10.11 (macOS El Capitan)" },
              { string: navigator.userAgent, subString: "Intel Mac OS X 10_10", identity: "10.10 (macOS Yosemite)" },
              { string: navigator.userAgent, subString: "Intel Mac OS X 10_9", identity: "10.9 (macOS Mavericks)" }
            ]);
        }
        get(e) {
          if ("browser" === e)
            return "" === this.browser && (this.browser = this.searchString(this.dataBrowser) || "An unknown browser"), this.browser;
          if ("version" === e)
            return "" === this.version && (this.version = this.searchVersion(this.dataBrowser) || "an unknown version"), this.version;
          if ("OS" === e) return "" === this.OS && (this.OS = this.searchString(this.dataOS) || "an unknown OS"), this.OS;
          if ("OSVersion" === e)
            return (
              "" === this.OSVersion && (this.OSVersion = this.searchString(this.dataOSVersion) || "0.0 an unknown OS Version"),
              this.OSVersion
            );
          if ("OSType" === e) {
            switch (this.get("OS")) {
              case "Windows":
                return "WIN";
              case "Mac":
                return "MAC";
              case "iPhone/iPad":
                return "IOS";
              case "Linux":
                return -1 === navigator.userAgent.indexOf("Android") ? "LINUX" : "ANDROID";
              default:
                return "";
            }
          } else if ("OSBuild" === e) {
            const e = this.get("OSVersion").match(/^[0-9.]+/);
            return e ? `${e[0]}.0` : "";
          }
          return "not found";
        }
        searchString(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t].string;
            if (n && -1 !== n.indexOf(e[t].subString)) return e[t].identity;
          }
        }
        searchVersion(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t].string,
              r = new RegExp(`(${e[t].subString})/?\\s*([\\d\\.]+)`, "i"),
              i = n.match(r) || [];
            if (3 === i.length) return i[2];
          }
          return !1;
        }
      }
      const er = JSON.parse(
        '{"cs":"cs-cz","da":"da-dk","de":"de-de","en-US":"en-us","es-ES":"es-es","es":"es-es","fi":"fi-fi","fr":"fr-fr","hu":"hu-hu","it":"it-it","ja":"ja-jp","ko":"ko-kr","nb-No":"no-no","nb":"no-no","nl":"nl-nl","pl":"pl-pl","pt-BR":"pt-br","pt-pt":"pt-pt","ru":"ru-ru","sk":"cs-sk","sv-SE":"sv-se","sv":"sv-se","tr":"tr-tr","zh-CN":"zh-cn","zh-TW":"zh-tw"}'
      );
      var tr,
        nr,
        rr,
        ir = i.t(er, 2);
      !(function (e) {
        (e.SET_VERSIONS = "local.versions"), (e.SET_UID = "local.paired");
      })(tr || (tr = {})),
        (function (e) {
          (e.ONE_FREE = "one_free"),
            (e.ONE_PRO = "one_pro"),
            (e.AV_FREE = "free_av"),
            (e.AV_LEGACY = "av_legacy"),
            (e.AV_PRO = "pro_av"),
            (e.AVG_FREE = "avg_free"),
            (e.AVG_PAID = "avg_paid"),
            (e.AVG_BUSINESS = "avg_business"),
            (e.UNAVAILABLE = "unavailable");
        })(nr || (nr = {}));
      class sr {
        static get browserName() {
          return new Qn().get("browser");
        }
        static getPromotedProduct(e, t) {
          const { product: n, a1GeoAvailable: r } = e;
          return "Mac" === t
            ? $n.NONE
            : n === nr.AV_FREE
            ? $n.AVAST_PREMIUM_SECURITY
            : n === nr.ONE_FREE
            ? $n.AVAST_ONE_PREMIUM
            : r && n === nr.UNAVAILABLE
            ? $n.AVAST_ONE_FREE
            : n === nr.UNAVAILABLE
            ? $n.AVAST_PREMIUM_SECURITY
            : $n.NONE;
        }
        static getPromotedButtonLabel(e) {
          switch (e) {
            case $n.AVAST_PREMIUM_SECURITY:
            case $n.AVAST_ONE_PREMIUM:
              return "tracking.banner.button.goPremium";
            case $n.AVAST_ONE_FREE:
              return "tracking.banner.button.getAvastOne";
            case $n.NONE:
              return null;
          }
        }
        static getTitleBarPromotedButtonLabel(e) {
          switch (e) {
            case $n.AVAST_PREMIUM_SECURITY:
            case $n.AVAST_ONE_PREMIUM:
              return "common.header.button.upgrade";
            case $n.AVAST_ONE_FREE:
              return "common.header.button.getAvastOne";
            case $n.NONE:
              return null;
          }
        }
        static getPromotionLinkFromPromotedProduct(e) {
          switch (e) {
            case $n.AVAST_PREMIUM_SECURITY:
              return rr.AVAST_PREMIUM_SECURITY;
            case $n.AVAST_ONE_PREMIUM:
            case $n.AVAST_ONE_FREE:
              return rr.AVAST_ONE;
            case $n.NONE:
              return null;
          }
        }
        static getLocaleLink(e, t) {
          return e !== rr.AVAST_ONE ? (t ? `${t}/` : "") : this.AVAST_ONE_LANGUAGES.indexOf(t) > -1 ? `${t}/` : "en-ww/";
        }
        static getPromotionLink(e, t) {
          const n = class {
            static mapLocale(e) {
              var t;
              return null !== (t = ir[e]) && void 0 !== t ? t : "";
            }
          }.mapLocale(t);
          return `https://www.avast.com/${this.getLocaleLink(e, n)}${e}?utm_campaign=${e}-promo&utm_source=AOSP-${
            this.browserName
          }&utm_medium=extension-banner`;
        }
      }
      (sr.AVAST_ONE_LANGUAGES = ["en-us", "en-gb", "en-ca", "en-au", "de-ch", "de-de", "fr-fr", "fr-ca", "fr-ch", "pt-br", "pt-pt"]),
        (function (e) {
          (e.BREACH_GUARD = "breachguard"),
            (e.ANTI_TRACK = "antitrack"),
            (e.SECURELINE_VPN = "secureline-vpn"),
            (e.AVAST_ONE = "avast-one"),
            (e.AVAST_PREMIUM_SECURITY = "premium-security");
        })(rr || (rr = {}));
      class ar {
        constructor(e) {
          this.notification = e;
        }
        serialize() {
          return JSON.stringify({
            name: "AOSP Cookie Manager Notification",
            pages: [
              {
                target: "*",
                groupedActions: [
                  {
                    id: "initial",
                    actions: [
                      {
                        event: "aos-notification",
                        componentData: {
                          label: "aos",
                          heading: "cookies.toaster.title",
                          body: this.getBody(),
                          button: this.getPrimaryButton(),
                          secondaryButton: this.getSecondaryButton(),
                          illustration: "i-213"
                        },
                        className: "bottom-notification",
                        resolveConditions: [
                          { elements: ['//aside[@class="aos-notification"]//a[contains(@class, "cookie-primary-btn")]'] },
                          {
                            elements: [{ xpath: '//aside[@class="aos-notification"]//a[contains(@class, "close-button")]' }],
                            groupId: "scenario-closed"
                          }
                        ]
                      }
                    ]
                  },
                  { id: "scenario-closed", actions: [{ event: "stopScenario" }] }
                ]
              }
            ]
          });
        }
        getBody() {
          switch (this.notification.promotedProduct) {
            case $n.NONE:
              return "cookies.toaster.text";
            case $n.AVAST_ONE_FREE:
            case $n.AVAST_ONE_PREMIUM:
              return "cookies.toaster.promo.avastOne.text";
            case $n.AVAST_FREE:
            case $n.AVAST_PREMIUM_SECURITY:
              return "cookies.toaster.promo.avastPremium.text";
          }
        }
        getPrimaryButton() {
          const { promotedProduct: e, locale: t } = this.notification;
          switch (e) {
            case $n.NONE:
              return { className: "cookie-primary-btn", text: "cookies.toaster.primaryButton", action: Jn.ENABLE_COOKIE_MANAGER };
            case $n.AVAST_ONE_FREE:
            case $n.AVAST_ONE_PREMIUM:
            case $n.AVAST_FREE:
            case $n.AVAST_PREMIUM_SECURITY:
              return {
                className: "cookie-primary-btn btn-gold",
                text: "cookies.toaster.promo.primaryButton",
                action: Jn.OPEN_PROMOTED_LINK
              };
          }
        }
        getSecondaryButton() {
          const { state: e } = this.notification;
          return e === a.DISMISSED
            ? { text: "cookies.toaster.secondaryButton.2", className: "close-button" }
            : { text: "cookies.toaster.secondaryButton", className: "close-button" };
        }
      }
      class or {
        constructor(e, t) {
          (this.api = e), (this.notification = t);
        }
        get shouldShow() {
          return (
            !this.notification.alreadyDisplayed &&
            this.notification.managerState === e.DISABLED &&
            this.notification.state !== a.DO_NOT_SHOW &&
            !this.isNotificationAlreadyDisplayed() &&
            !this.isOnPromoLink()
          );
        }
        show() {
          return this.runScenario(new ar(this.notification).serialize());
        }
        async runScenario(e) {
          return await new Xn(e).start();
        }
        isOnPromoLink() {
          const e = sr.getPromotionLinkFromPromotedProduct(this.notification.promotedProduct),
            t = sr.getPromotionLink(e, this.notification.locale);
          return window.location.href.indexOf(t) > -1;
        }
        isNotificationAlreadyDisplayed() {
          return document.getElementsByClassName("aos-notification").length > 0;
        }
      }
      new (class extends class {
        constructor() {
          this.Api = new An(chrome);
        }
        getScenario(e) {
          return new Promise((t) => {
            this.Api.runtime.sendMessage({ message: n.GET_SCENARIO, scenarioParams: e }, (e) => t(e));
          });
        }
      } {
        constructor() {
          super(), (this.MIN_RESOLVE_TIME = 5e3), (this.MAX_RESOLVE_TIME = 6e4), (this.RESOLVE_TIME_MULTIPLIER = 3), this.run();
        }
        async run() {
          const { cookieParams: t, detectionRules: n, enabled: i, state: s } = await this.getCookieManagerData(),
            a = await new d({ cookieParams: t, detectionRules: n }).getBannerType(),
            o = await this.getCookieBannerStyles(),
            u = await this.getPromotedProduct();
          if (!i || a.state !== r.PENDING) return;
          const c = await this.handleNotification();
          return (
            (null == c ? void 0 : c.resolution) === D.stopped && this.onNotificationDismissed(),
            s === e.ENABLED || (u === $n.NONE && (null == c ? void 0 : c.resolution) === D.succeeded)
              ? (Zn.hideCookieBanners(o), this.handleCookie(a.data))
              : void 0
          );
        }
        async handleCookie(e) {
          const t = await this.getScenario(e);
          if (t) {
            (this.startTime = Date.now()),
              this.Api.runtime.sendMessage({ message: n.SCENARIO_STARTED, resolveTime: this.getResolveTime(), scenarioParams: e });
            try {
              if ((await new Xn(t).start()).resolution === D.succeeded)
                return this.Api.runtime.sendMessage({
                  message: n.COOKIE_BANNER_RESOLVED,
                  resolveTime: this.getResolveTime(),
                  scenarioParams: e
                });
            } catch (t) {
              if ((Zn.showCookieBanners(), t.error))
                return this.Api.runtime.sendMessage({ message: n.SCENARIO_FAILED, scenarioParams: e, error: t.error });
              this.Api.runtime.sendMessage({ message: n.SCENARIO_FAILED, scenarioParams: e, error: t });
            }
          }
        }
        async handleNotification() {
          const e = await this.getNotification();
          if (e.shouldShow) return this.Api.runtime.sendMessage({ message: n.NOTIFICATION_DISPLAYED }), await e.show();
        }
        getCookieManagerData() {
          return new Promise((e) => {
            this.Api.runtime.sendMessage({ message: n.GET_DATA }, (t) => e(t));
          });
        }
        getCookieBannerStyles() {
          return new Promise((e) => {
            this.Api.runtime.sendMessage({ message: n.GET_COOKIE_STYLES }, (t) => {
              const n = t[window.location.hostname];
              e(null != n ? n : t.default);
            });
          });
        }
        getResolveTime() {
          const e = Date.now() - this.startTime;
          return Math.min(Math.max(e * this.RESOLVE_TIME_MULTIPLIER, this.MIN_RESOLVE_TIME), this.MAX_RESOLVE_TIME);
        }
        async getNotification() {
          return new Promise((e) => {
            this.Api.runtime.sendMessage({ message: n.GET_NOTIFICATION }, (t) => e(new or(this.Api, t)));
          });
        }
        async getPromotedProduct() {
          return new Promise((e) => {
            this.Api.runtime.sendMessage({ message: n.GET_PROMOTED_PRODUCT }, (t) => e(t));
          });
        }
        onNotificationDismissed() {
          this.Api.runtime.sendMessage({ message: n.DISMISS_COOKIE_NOTIFICATION });
        }
      })();
    })();
})();
