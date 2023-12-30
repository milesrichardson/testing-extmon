/*! For license information please see web-client-content-script.js.LICENSE.txt */
var webClient;
!(function () {
  var e = {
      822: function (e, t, n) {
        "use strict";
        n.d(t, {
          Cf: function () {
            return l;
          },
          DM: function () {
            return a;
          },
          Db: function () {
            return c;
          },
          EG: function () {
            return f;
          },
          JY: function () {
            return h;
          },
          Rf: function () {
            return i;
          },
          en: function () {
            return s;
          },
          jH: function () {
            return u;
          },
          l4: function () {
            return d;
          }
        });
        var r = n(110),
          o = {};
        function i() {
          return (0, r.KV)() ? n.g : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : o;
        }
        function a() {
          var e = i(),
            t = e.crypto || e.msCrypto;
          if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n), (n[3] = (4095 & n[3]) | 16384), (n[4] = (16383 & n[4]) | 32768);
            var r = function (e) {
              for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
              return t;
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
          }
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          });
        }
        function s(e) {
          if (!e) return {};
          var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
          if (!t) return {};
          var n = t[6] || "",
            r = t[8] || "";
          return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
        }
        function u(e) {
          if (e.message) return e.message;
          if (e.exception && e.exception.values && e.exception.values[0]) {
            var t = e.exception.values[0];
            return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>";
          }
          return e.event_id || "<unknown>";
        }
        function l(e) {
          var t = i();
          if (!("console" in t)) return e();
          var n = t.console,
            r = {};
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
            e in t.console && n[e].__sentry_original__ && ((r[e] = n[e]), (n[e] = n[e].__sentry_original__));
          });
          var o = e();
          return (
            Object.keys(r).forEach(function (e) {
              n[e] = r[e];
            }),
            o
          );
        }
        function c(e, t, n) {
          (e.exception = e.exception || {}),
            (e.exception.values = e.exception.values || []),
            (e.exception.values[0] = e.exception.values[0] || {}),
            (e.exception.values[0].value = e.exception.values[0].value || t || ""),
            (e.exception.values[0].type = e.exception.values[0].type || n || "Error");
        }
        function f(e, t) {
          void 0 === t && (t = {});
          try {
            (e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}),
              Object.keys(t).forEach(function (n) {
                e.exception.values[0].mechanism[n] = t[n];
              });
          } catch (n) {}
        }
        function d() {
          try {
            return document.location.href;
          } catch (e) {
            return "";
          }
        }
        var p = 6e4;
        function h(e, t) {
          if (!t) return p;
          var n = parseInt("" + t, 10);
          if (!isNaN(n)) return 1e3 * n;
          var r = Date.parse("" + t);
          return isNaN(r) ? p : r - e;
        }
      },
      110: function (e, t, n) {
        "use strict";
        function r() {
          return "[object process]" === Object.prototype.toString.call("undefined" !== typeof process ? process : 0);
        }
        function o(e, t) {
          return e.require(t);
        }
        n.d(t, {
          KV: function () {
            return r;
          },
          l$: function () {
            return o;
          }
        }),
          (e = n.hmd(e));
      },
      963: function (e, t, n) {
        "use strict";
        n.d(t, {
          yW: function () {
            return u;
          }
        });
        var r = n(822),
          o = n(110);
        e = n.hmd(e);
        var i = {
          nowSeconds: function () {
            return Date.now() / 1e3;
          }
        };
        var a = (0, o.KV)()
            ? (function () {
                try {
                  return (0, o.l$)(e, "perf_hooks").performance;
                } catch (t) {
                  return;
                }
              })()
            : (function () {
                var e = (0, r.Rf)().performance;
                if (e && e.now)
                  return {
                    now: function () {
                      return e.now();
                    },
                    timeOrigin: Date.now() - e.now()
                  };
              })(),
          s =
            void 0 === a
              ? i
              : {
                  nowSeconds: function () {
                    return (a.timeOrigin + a.now()) / 1e3;
                  }
                },
          u = i.nowSeconds.bind(i);
        s.nowSeconds.bind(s),
          (function () {
            var e = (0, r.Rf)().performance;
            if (e) e.timeOrigin ? e.timeOrigin : (e.timing && e.timing.navigationStart) || Date.now();
          })();
      },
      593: function (e, t) {
        "use strict";
        (t.byteLength = function (e) {
          var t = s(e),
            n = t[0],
            r = t[1];
          return (3 * (n + r)) / 4 - r;
        }),
          (t.toByteArray = function (e) {
            var t,
              n,
              i = s(e),
              a = i[0],
              u = i[1],
              l = new o(
                (function (e, t, n) {
                  return (3 * (t + n)) / 4 - n;
                })(0, a, u)
              ),
              c = 0,
              f = u > 0 ? a - 4 : a;
            for (n = 0; n < f; n += 4)
              (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]),
                (l[c++] = (t >> 16) & 255),
                (l[c++] = (t >> 8) & 255),
                (l[c++] = 255 & t);
            2 === u && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (l[c++] = 255 & t));
            1 === u &&
              ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
              (l[c++] = (t >> 8) & 255),
              (l[c++] = 255 & t));
            return l;
          }),
          (t.fromByteArray = function (e) {
            for (var t, r = e.length, o = r % 3, i = [], a = 16383, s = 0, l = r - o; s < l; s += a) i.push(u(e, s, s + a > l ? l : s + a));
            1 === o
              ? ((t = e[r - 1]), i.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
              : 2 === o && ((t = (e[r - 2] << 8) + e[r - 1]), i.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
            return i.join("");
          });
        for (
          var n = [],
            r = [],
            o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = 0;
          a < 64;
          ++a
        )
          (n[a] = i[a]), (r[i.charCodeAt(a)] = a);
        function s(e) {
          var t = e.length;
          if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var n = e.indexOf("=");
          return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
        }
        function u(e, t, r) {
          for (var o, i, a = [], s = t; s < r; s += 3)
            (o = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])),
              a.push(n[((i = o) >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
          return a.join("");
        }
        (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
      },
      754: function (e, t, n) {
        "use strict";
        var r = n(638).default,
          o = n(23).default,
          i = n(121).default,
          a = n(126).default,
          s = n(77).default,
          u = n(593),
          l = n(549),
          c = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        (t.lW = p), (t.h2 = 50);
        var f = 2147483647;
        function d(e) {
          if (e > f) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          var t = new Uint8Array(e);
          return Object.setPrototypeOf(t, p.prototype), t;
        }
        function p(e, t, n) {
          if ("number" === typeof e) {
            if ("string" === typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return v(e);
          }
          return h(e, t, n);
        }
        function h(e, t, n) {
          if ("string" === typeof e)
            return (function (e, t) {
              ("string" === typeof t && "" !== t) || (t = "utf8");
              if (!p.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
              var n = 0 | E(e, t),
                r = d(n),
                o = r.write(e, t);
              o !== n && (r = r.slice(0, o));
              return r;
            })(e, t);
          if (ArrayBuffer.isView(e))
            return (function (e) {
              if (ee(e, Uint8Array)) {
                var t = new Uint8Array(e);
                return g(t.buffer, t.byteOffset, t.byteLength);
              }
              return y(e);
            })(e);
          if (null == e)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
            );
          if (ee(e, ArrayBuffer) || (e && ee(e.buffer, ArrayBuffer))) return g(e, t, n);
          if ("undefined" !== typeof SharedArrayBuffer && (ee(e, SharedArrayBuffer) || (e && ee(e.buffer, SharedArrayBuffer))))
            return g(e, t, n);
          if ("number" === typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
          var r = e.valueOf && e.valueOf();
          if (null != r && r !== e) return p.from(r, t, n);
          var o = (function (e) {
            if (p.isBuffer(e)) {
              var t = 0 | _(e.length),
                n = d(t);
              return 0 === n.length || e.copy(n, 0, 0, t), n;
            }
            if (void 0 !== e.length) return "number" !== typeof e.length || te(e.length) ? d(0) : y(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return y(e.data);
          })(e);
          if (o) return o;
          if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive])
            return p.from(e[Symbol.toPrimitive]("string"), t, n);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
          );
        }
        function m(e) {
          if ("number" !== typeof e) throw new TypeError('"size" argument must be of type number');
          if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        }
        function v(e) {
          return m(e), d(e < 0 ? 0 : 0 | _(e));
        }
        function y(e) {
          for (var t = e.length < 0 ? 0 : 0 | _(e.length), n = d(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
          return n;
        }
        function g(e, t, n) {
          if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
          if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
          var r;
          return (
            (r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)),
            Object.setPrototypeOf(r, p.prototype),
            r
          );
        }
        function _(e) {
          if (e >= f) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
          return 0 | e;
        }
        function E(e, t) {
          if (p.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || ee(e, ArrayBuffer)) return e.byteLength;
          if ("string" !== typeof e)
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
          var n = e.length,
            r = arguments.length > 2 && !0 === arguments[2];
          if (!r && 0 === n) return 0;
          for (var o = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
                return Q(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return Z(e).length;
              default:
                if (o) return r ? -1 : Q(e).length;
                (t = ("" + t).toLowerCase()), (o = !0);
            }
        }
        function b(e, t, n) {
          var r = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
          if ((n >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return D(this, t, n);
              case "utf8":
              case "utf-8":
                return P(this, t, n);
              case "ascii":
                return k(this, t, n);
              case "latin1":
              case "binary":
                return L(this, t, n);
              case "base64":
                return O(this, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return M(this, t, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (r = !0);
            }
        }
        function S(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function w(e, t, n, r, o) {
          if (0 === e.length) return -1;
          if (
            ("string" === typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
            te((n = +n)) && (n = o ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (o) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!o) return -1;
            n = 0;
          }
          if (("string" === typeof t && (t = p.from(t, r)), p.isBuffer(t))) return 0 === t.length ? -1 : A(e, t, n, r, o);
          if ("number" === typeof t)
            return (
              (t &= 255),
              "function" === typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : A(e, [t], n, r, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function A(e, t, n, r, o) {
          var i,
            a = 1,
            s = e.length,
            u = t.length;
          if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            (a = 2), (s /= 2), (u /= 2), (n /= 2);
          }
          function l(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }
          if (o) {
            var c = -1;
            for (i = n; i < s; i++)
              if (l(e, i) === l(t, -1 === c ? 0 : i - c)) {
                if ((-1 === c && (c = i), i - c + 1 === u)) return c * a;
              } else -1 !== c && (i -= i - c), (c = -1);
          } else
            for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
              for (var f = !0, d = 0; d < u; d++)
                if (l(e, i + d) !== l(t, d)) {
                  f = !1;
                  break;
                }
              if (f) return i;
            }
          return -1;
        }
        function T(e, t, n, r) {
          n = Number(n) || 0;
          var o = e.length - n;
          r ? (r = Number(r)) > o && (r = o) : (r = o);
          var i,
            a = t.length;
          for (r > a / 2 && (r = a / 2), i = 0; i < r; ++i) {
            var s = parseInt(t.substr(2 * i, 2), 16);
            if (te(s)) return i;
            e[n + i] = s;
          }
          return i;
        }
        function x(e, t, n, r) {
          return J(Q(t, e.length - n), e, n, r);
        }
        function I(e, t, n, r) {
          return J(
            (function (e) {
              for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function C(e, t, n, r) {
          return J(Z(t), e, n, r);
        }
        function N(e, t, n, r) {
          return J(
            (function (e, t) {
              for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                (r = (n = e.charCodeAt(a)) >> 8), (o = n % 256), i.push(o), i.push(r);
              return i;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function O(e, t, n) {
          return 0 === t && n === e.length ? u.fromByteArray(e) : u.fromByteArray(e.slice(t, n));
        }
        function P(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], o = t; o < n; ) {
            var i = e[o],
              a = null,
              s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
            if (o + s <= n) {
              var u = void 0,
                l = void 0,
                c = void 0,
                f = void 0;
              switch (s) {
                case 1:
                  i < 128 && (a = i);
                  break;
                case 2:
                  128 === (192 & (u = e[o + 1])) && (f = ((31 & i) << 6) | (63 & u)) > 127 && (a = f);
                  break;
                case 3:
                  (u = e[o + 1]),
                    (l = e[o + 2]),
                    128 === (192 & u) &&
                      128 === (192 & l) &&
                      (f = ((15 & i) << 12) | ((63 & u) << 6) | (63 & l)) > 2047 &&
                      (f < 55296 || f > 57343) &&
                      (a = f);
                  break;
                case 4:
                  (u = e[o + 1]),
                    (l = e[o + 2]),
                    (c = e[o + 3]),
                    128 === (192 & u) &&
                      128 === (192 & l) &&
                      128 === (192 & c) &&
                      (f = ((15 & i) << 18) | ((63 & u) << 12) | ((63 & l) << 6) | (63 & c)) > 65535 &&
                      f < 1114112 &&
                      (a = f);
              }
            }
            null === a
              ? ((a = 65533), (s = 1))
              : a > 65535 && ((a -= 65536), r.push(((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))),
              r.push(a),
              (o += s);
          }
          return (function (e) {
            var t = e.length;
            if (t <= R) return String.fromCharCode.apply(String, e);
            var n = "",
              r = 0;
            for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += R)));
            return n;
          })(r);
        }
        (p.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42;
                }
              };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
          } catch (n) {
            return !1;
          }
        })()),
          p.TYPED_ARRAY_SUPPORT ||
            "undefined" === typeof console ||
            "function" !== typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(p.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (p.isBuffer(this)) return this.buffer;
            }
          }),
          Object.defineProperty(p.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (p.isBuffer(this)) return this.byteOffset;
            }
          }),
          (p.poolSize = 8192),
          (p.from = function (e, t, n) {
            return h(e, t, n);
          }),
          Object.setPrototypeOf(p.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(p, Uint8Array),
          (p.alloc = function (e, t, n) {
            return (function (e, t, n) {
              return m(e), e <= 0 ? d(e) : void 0 !== t ? ("string" === typeof n ? d(e).fill(t, n) : d(e).fill(t)) : d(e);
            })(e, t, n);
          }),
          (p.allocUnsafe = function (e) {
            return v(e);
          }),
          (p.allocUnsafeSlow = function (e) {
            return v(e);
          }),
          (p.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== p.prototype;
          }),
          (p.compare = function (e, t) {
            if (
              (ee(e, Uint8Array) && (e = p.from(e, e.offset, e.byteLength)),
              ee(t, Uint8Array) && (t = p.from(t, t.offset, t.byteLength)),
              !p.isBuffer(e) || !p.isBuffer(t))
            )
              throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
              if (e[o] !== t[o]) {
                (n = e[o]), (r = t[o]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (p.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (p.concat = function (e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return p.alloc(0);
            var n;
            if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = p.allocUnsafe(t),
              o = 0;
            for (n = 0; n < e.length; ++n) {
              var i = e[n];
              if (ee(i, Uint8Array))
                o + i.length > r.length ? (p.isBuffer(i) || (i = p.from(i)), i.copy(r, o)) : Uint8Array.prototype.set.call(r, i, o);
              else {
                if (!p.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                i.copy(r, o);
              }
              o += i.length;
            }
            return r;
          }),
          (p.byteLength = E),
          (p.prototype._isBuffer = !0),
          (p.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) S(this, t, t + 1);
            return this;
          }),
          (p.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) S(this, t, t + 3), S(this, t + 1, t + 2);
            return this;
          }),
          (p.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) S(this, t, t + 7), S(this, t + 1, t + 6), S(this, t + 2, t + 5), S(this, t + 3, t + 4);
            return this;
          }),
          (p.prototype.toString = function () {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? P(this, 0, e) : b.apply(this, arguments);
          }),
          (p.prototype.toLocaleString = p.prototype.toString),
          (p.prototype.equals = function (e) {
            if (!p.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === p.compare(this, e);
          }),
          (p.prototype.inspect = function () {
            var e = "",
              n = t.h2;
            return (
              (e = this.toString("hex", 0, n)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > n && (e += " ... "),
              "<Buffer " + e + ">"
            );
          }),
          c && (p.prototype[c] = p.prototype.inspect),
          (p.prototype.compare = function (e, t, n, r, o) {
            if ((ee(e, Uint8Array) && (e = p.from(e, e.offset, e.byteLength)), !p.isBuffer(e)))
              throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === o && (o = this.length),
              t < 0 || n > e.length || r < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= o && t >= n) return 0;
            if (r >= o) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (
              var i = (o >>>= 0) - (r >>>= 0),
                a = (n >>>= 0) - (t >>>= 0),
                s = Math.min(i, a),
                u = this.slice(r, o),
                l = e.slice(t, n),
                c = 0;
              c < s;
              ++c
            )
              if (u[c] !== l[c]) {
                (i = u[c]), (a = l[c]);
                break;
              }
            return i < a ? -1 : a < i ? 1 : 0;
          }),
          (p.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (p.prototype.indexOf = function (e, t, n) {
            return w(this, e, t, n, !0);
          }),
          (p.prototype.lastIndexOf = function (e, t, n) {
            return w(this, e, t, n, !1);
          }),
          (p.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" === typeof t) (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
            }
            var o = this.length - t;
            if (((void 0 === n || n > o) && (n = o), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1; ; )
              switch (r) {
                case "hex":
                  return T(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return x(this, e, t, n);
                case "ascii":
                case "latin1":
                case "binary":
                  return I(this, e, t, n);
                case "base64":
                  return C(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return N(this, e, t, n);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (i = !0);
              }
          }),
          (p.prototype.toJSON = function () {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        var R = 4096;
        function k(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
          return r;
        }
        function L(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
          return r;
        }
        function D(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          for (var o = "", i = t; i < n; ++i) o += ne[e[i]];
          return o;
        }
        function M(e, t, n) {
          for (var r = e.slice(t, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
          return o;
        }
        function F(e, t, n) {
          if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
        }
        function B(e, t, n, r, o, i) {
          if (!p.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function U(e, t, n, r, o) {
          q(t, r, o, e, n, 7);
          var i = Number(t & BigInt(4294967295));
          (e[n++] = i), (i >>= 8), (e[n++] = i), (i >>= 8), (e[n++] = i), (i >>= 8), (e[n++] = i);
          var a = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (e[n++] = a), (a >>= 8), (e[n++] = a), (a >>= 8), (e[n++] = a), (a >>= 8), (e[n++] = a), n;
        }
        function j(e, t, n, r, o) {
          q(t, r, o, e, n, 7);
          var i = Number(t & BigInt(4294967295));
          (e[n + 7] = i), (i >>= 8), (e[n + 6] = i), (i >>= 8), (e[n + 5] = i), (i >>= 8), (e[n + 4] = i);
          var a = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (e[n + 3] = a), (a >>= 8), (e[n + 2] = a), (a >>= 8), (e[n + 1] = a), (a >>= 8), (e[n] = a), n + 8;
        }
        function G(e, t, n, r, o, i) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function V(e, t, n, r, o) {
          return (t = +t), (n >>>= 0), o || G(e, 0, n, 4), l.write(e, t, n, r, 23, 4), n + 4;
        }
        function H(e, t, n, r, o) {
          return (t = +t), (n >>>= 0), o || G(e, 0, n, 8), l.write(e, t, n, r, 52, 8), n + 8;
        }
        (p.prototype.slice = function (e, t) {
          var n = this.length;
          (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e);
          var r = this.subarray(e, t);
          return Object.setPrototypeOf(r, p.prototype), r;
        }),
          (p.prototype.readUintLE = p.prototype.readUIntLE =
            function (e, t, n) {
              (e >>>= 0), (t >>>= 0), n || F(e, t, this.length);
              for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
              return r;
            }),
          (p.prototype.readUintBE = p.prototype.readUIntBE =
            function (e, t, n) {
              (e >>>= 0), (t >>>= 0), n || F(e, t, this.length);
              for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); ) r += this[e + --t] * o;
              return r;
            }),
          (p.prototype.readUint8 = p.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || F(e, 1, this.length), this[e];
            }),
          (p.prototype.readUint16LE = p.prototype.readUInt16LE =
            function (e, t) {
              return (e >>>= 0), t || F(e, 2, this.length), this[e] | (this[e + 1] << 8);
            }),
          (p.prototype.readUint16BE = p.prototype.readUInt16BE =
            function (e, t) {
              return (e >>>= 0), t || F(e, 2, this.length), (this[e] << 8) | this[e + 1];
            }),
          (p.prototype.readUint32LE = p.prototype.readUInt32LE =
            function (e, t) {
              return (e >>>= 0), t || F(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
            }),
          (p.prototype.readUint32BE = p.prototype.readUInt32BE =
            function (e, t) {
              return (e >>>= 0), t || F(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
            }),
          (p.prototype.readBigUInt64LE = re(function (e) {
            K((e >>>= 0), "offset");
            var t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || $(e, this.length - 8);
            var r = t + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 24),
              o = this[++e] + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + n * Math.pow(2, 24);
            return BigInt(r) + (BigInt(o) << BigInt(32));
          })),
          (p.prototype.readBigUInt64BE = re(function (e) {
            K((e >>>= 0), "offset");
            var t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || $(e, this.length - 8);
            var r = t * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + this[++e],
              o = this[++e] * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + n;
            return (BigInt(r) << BigInt(32)) + BigInt(o);
          })),
          (p.prototype.readIntLE = function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || F(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) r += this[e + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (p.prototype.readIntBE = function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || F(e, t, this.length);
            for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); ) i += this[e + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
          }),
          (p.prototype.readInt8 = function (e, t) {
            return (e >>>= 0), t || F(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
          }),
          (p.prototype.readInt16LE = function (e, t) {
            (e >>>= 0), t || F(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (p.prototype.readInt16BE = function (e, t) {
            (e >>>= 0), t || F(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (p.prototype.readInt32LE = function (e, t) {
            return (e >>>= 0), t || F(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
          }),
          (p.prototype.readInt32BE = function (e, t) {
            return (e >>>= 0), t || F(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
          }),
          (p.prototype.readBigInt64LE = re(function (e) {
            K((e >>>= 0), "offset");
            var t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || $(e, this.length - 8);
            var r = this[e + 4] + this[e + 5] * Math.pow(2, 8) + this[e + 6] * Math.pow(2, 16) + (n << 24);
            return (
              (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 24))
            );
          })),
          (p.prototype.readBigInt64BE = re(function (e) {
            K((e >>>= 0), "offset");
            var t = this[e],
              n = this[e + 7];
            (void 0 !== t && void 0 !== n) || $(e, this.length - 8);
            var r = (t << 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + this[++e];
            return (
              (BigInt(r) << BigInt(32)) + BigInt(this[++e] * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + n)
            );
          })),
          (p.prototype.readFloatLE = function (e, t) {
            return (e >>>= 0), t || F(e, 4, this.length), l.read(this, e, !0, 23, 4);
          }),
          (p.prototype.readFloatBE = function (e, t) {
            return (e >>>= 0), t || F(e, 4, this.length), l.read(this, e, !1, 23, 4);
          }),
          (p.prototype.readDoubleLE = function (e, t) {
            return (e >>>= 0), t || F(e, 8, this.length), l.read(this, e, !0, 52, 8);
          }),
          (p.prototype.readDoubleBE = function (e, t) {
            return (e >>>= 0), t || F(e, 8, this.length), l.read(this, e, !1, 52, 8);
          }),
          (p.prototype.writeUintLE = p.prototype.writeUIntLE =
            function (e, t, n, r) {
              ((e = +e), (t >>>= 0), (n >>>= 0), r) || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
              var o = 1,
                i = 0;
              for (this[t] = 255 & e; ++i < n && (o *= 256); ) this[t + i] = (e / o) & 255;
              return t + n;
            }),
          (p.prototype.writeUintBE = p.prototype.writeUIntBE =
            function (e, t, n, r) {
              ((e = +e), (t >>>= 0), (n >>>= 0), r) || B(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
              var o = n - 1,
                i = 1;
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = (e / i) & 255;
              return t + n;
            }),
          (p.prototype.writeUint8 = p.prototype.writeUInt8 =
            function (e, t, n) {
              return (e = +e), (t >>>= 0), n || B(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
            }),
          (p.prototype.writeUint16LE = p.prototype.writeUInt16LE =
            function (e, t, n) {
              return (e = +e), (t >>>= 0), n || B(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
            }),
          (p.prototype.writeUint16BE = p.prototype.writeUInt16BE =
            function (e, t, n) {
              return (e = +e), (t >>>= 0), n || B(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
            }),
          (p.prototype.writeUint32LE = p.prototype.writeUInt32LE =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || B(this, e, t, 4, 4294967295, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              );
            }),
          (p.prototype.writeUint32BE = p.prototype.writeUInt32BE =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || B(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
          (p.prototype.writeBigUInt64LE = re(function (e) {
            return U(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (p.prototype.writeBigUInt64BE = re(function (e) {
            return j(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (p.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              var o = Math.pow(2, 8 * n - 1);
              B(this, e, t, n, o - 1, -o);
            }
            var i = 0,
              a = 1,
              s = 0;
            for (this[t] = 255 & e; ++i < n && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), (this[t + i] = (((e / a) >> 0) - s) & 255);
            return t + n;
          }),
          (p.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              var o = Math.pow(2, 8 * n - 1);
              B(this, e, t, n, o - 1, -o);
            }
            var i = n - 1,
              a = 1,
              s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), (this[t + i] = (((e / a) >> 0) - s) & 255);
            return t + n;
          }),
          (p.prototype.writeInt8 = function (e, t, n) {
            return (e = +e), (t >>>= 0), n || B(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
          }),
          (p.prototype.writeInt16LE = function (e, t, n) {
            return (e = +e), (t >>>= 0), n || B(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
          }),
          (p.prototype.writeInt16BE = function (e, t, n) {
            return (e = +e), (t >>>= 0), n || B(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
          }),
          (p.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24),
              t + 4
            );
          }),
          (p.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || B(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
          (p.prototype.writeBigInt64LE = re(function (e) {
            return U(
              this,
              e,
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (p.prototype.writeBigInt64BE = re(function (e) {
            return j(
              this,
              e,
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (p.prototype.writeFloatLE = function (e, t, n) {
            return V(this, e, t, !0, n);
          }),
          (p.prototype.writeFloatBE = function (e, t, n) {
            return V(this, e, t, !1, n);
          }),
          (p.prototype.writeDoubleLE = function (e, t, n) {
            return H(this, e, t, !0, n);
          }),
          (p.prototype.writeDoubleBE = function (e, t, n) {
            return H(this, e, t, !1, n);
          }),
          (p.prototype.copy = function (e, t, n, r) {
            if (!p.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var o = r - n;
            return (
              this === e && "function" === typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, n, r)
                : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
              o
            );
          }),
          (p.prototype.fill = function (e, t, n, r) {
            if ("string" === typeof e) {
              if (
                ("string" === typeof t ? ((r = t), (t = 0), (n = this.length)) : "string" === typeof n && ((r = n), (n = this.length)),
                void 0 !== r && "string" !== typeof r)
              )
                throw new TypeError("encoding must be a string");
              if ("string" === typeof r && !p.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
              if (1 === e.length) {
                var o = e.charCodeAt(0);
                (("utf8" === r && o < 128) || "latin1" === r) && (e = o);
              }
            } else "number" === typeof e ? (e &= 255) : "boolean" === typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var i;
            if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" === typeof e))
              for (i = t; i < n; ++i) this[i] = e;
            else {
              var a = p.isBuffer(e) ? e : p.from(e, r),
                s = a.length;
              if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
              for (i = 0; i < n - t; ++i) this[i + t] = a[i % s];
            }
            return this;
          });
        var W = {};
        function z(e, t, n) {
          W[e] = (function (n) {
            a(l, n);
            var u = s(l);
            function l() {
              var n;
              return (
                r(this, l),
                (n = u.call(this)),
                Object.defineProperty(i(n), "message", { value: t.apply(i(n), arguments), writable: !0, configurable: !0 }),
                (n.name = "".concat(n.name, " [").concat(e, "]")),
                n.stack,
                delete n.name,
                n
              );
            }
            return (
              o(l, [
                {
                  key: "code",
                  get: function () {
                    return e;
                  },
                  set: function (e) {
                    Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: e, writable: !0 });
                  }
                },
                {
                  key: "toString",
                  value: function () {
                    return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
                  }
                }
              ]),
              l
            );
          })(n);
        }
        function Y(e) {
          for (var t = "", n = e.length, r = "-" === e[0] ? 1 : 0; n >= r + 4; n -= 3) t = "_".concat(e.slice(n - 3, n)).concat(t);
          return "".concat(e.slice(0, n)).concat(t);
        }
        function q(e, t, n, r, o, i) {
          if (e > n || e < t) {
            var a,
              s = "bigint" === typeof t ? "n" : "";
            throw (
              ((a =
                i > 3
                  ? 0 === t || t === BigInt(0)
                    ? ">= 0"
                        .concat(s, " and < 2")
                        .concat(s, " ** ")
                        .concat(8 * (i + 1))
                        .concat(s)
                    : ">= -(2"
                        .concat(s, " ** ")
                        .concat(8 * (i + 1) - 1)
                        .concat(s, ") and < 2 ** ") + "".concat(8 * (i + 1) - 1).concat(s)
                  : ">= ".concat(t).concat(s, " and <= ").concat(n).concat(s)),
              new W.ERR_OUT_OF_RANGE("value", a, e))
            );
          }
          !(function (e, t, n) {
            K(t, "offset"), (void 0 !== e[t] && void 0 !== e[t + n]) || $(t, e.length - (n + 1));
          })(r, o, i);
        }
        function K(e, t) {
          if ("number" !== typeof e) throw new W.ERR_INVALID_ARG_TYPE(t, "number", e);
        }
        function $(e, t, n) {
          if (Math.floor(e) !== e) throw (K(e, n), new W.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
          if (t < 0) throw new W.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new W.ERR_OUT_OF_RANGE(n || "offset", ">= ".concat(n ? 1 : 0, " and <= ").concat(t), e);
        }
        z(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (e) {
            return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          z(
            "ERR_INVALID_ARG_TYPE",
            function (e, t) {
              return 'The "'.concat(e, '" argument must be of type number. Received type ').concat(typeof t);
            },
            TypeError
          ),
          z(
            "ERR_OUT_OF_RANGE",
            function (e, t, n) {
              var r = 'The value of "'.concat(e, '" is out of range.'),
                o = n;
              return (
                Number.isInteger(n) && Math.abs(n) > Math.pow(2, 32)
                  ? (o = Y(String(n)))
                  : "bigint" === typeof n &&
                    ((o = String(n)),
                    (n > Math.pow(BigInt(2), BigInt(32)) || n < -Math.pow(BigInt(2), BigInt(32))) && (o = Y(o)),
                    (o += "n")),
                (r += " It must be ".concat(t, ". Received ").concat(o))
              );
            },
            RangeError
          );
        var X = /[^+/0-9A-Za-z-_]/g;
        function Q(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
              if (!o) {
                if (n > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), (o = n);
                continue;
              }
              n = 65536 + (((o - 55296) << 10) | (n - 56320));
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), n < 128)) {
              if ((t -= 1) < 0) break;
              i.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              i.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              i.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
            }
          }
          return i;
        }
        function Z(e) {
          return u.toByteArray(
            (function (e) {
              if ((e = (e = e.split("=")[0]).trim().replace(X, "")).length < 2) return "";
              for (; e.length % 4 !== 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function J(e, t, n, r) {
          var o;
          for (o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
          return o;
        }
        function ee(e, t) {
          return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
        }
        function te(e) {
          return e !== e;
        }
        var ne = (function () {
          for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n)
            for (var r = 16 * n, o = 0; o < 16; ++o) t[r + o] = e[n] + e[o];
          return t;
        })();
        function re(e) {
          return "undefined" === typeof BigInt ? oe : e;
        }
        function oe() {
          throw new Error("BigInt not supported");
        }
      },
      642: function (e, t, n) {
        "use strict";
        var r = n(107),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
          },
          i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
          a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
          s = {};
        function u(e) {
          return r.isMemo(e) ? a : s[e.$$typeof] || o;
        }
        (s[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (s[r.Memo] = a);
        var l = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var a = c(n);
            f && (a = a.concat(f(n)));
            for (var s = u(t), m = u(n), v = 0; v < a.length; ++v) {
              var y = a[v];
              if (!i[y] && (!r || !r[y]) && (!m || !m[y]) && (!s || !s[y])) {
                var g = d(n, y);
                try {
                  l(t, y, g);
                } catch (_) {}
              }
            }
          }
          return t;
        };
      },
      549: function (e, t) {
        (t.read = function (e, t, n, r, o) {
          var i,
            a,
            s = 8 * o - r - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            c = -7,
            f = n ? o - 1 : 0,
            d = n ? -1 : 1,
            p = e[t + f];
          for (f += d, i = p & ((1 << -c) - 1), p >>= -c, c += s; c > 0; i = 256 * i + e[t + f], f += d, c -= 8);
          for (a = i & ((1 << -c) - 1), i >>= -c, c += r; c > 0; a = 256 * a + e[t + f], f += d, c -= 8);
          if (0 === i) i = 1 - l;
          else {
            if (i === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
            (a += Math.pow(2, r)), (i -= l);
          }
          return (p ? -1 : 1) * a * Math.pow(2, i - r);
        }),
          (t.write = function (e, t, n, r, o, i) {
            var a,
              s,
              u,
              l = 8 * i - o - 1,
              c = (1 << l) - 1,
              f = c >> 1,
              d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = r ? 0 : i - 1,
              h = r ? 1 : -1,
              m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((s = isNaN(t) ? 1 : 0), (a = c))
                  : ((a = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                    (t += a + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (a++, (u /= 2)),
                    a + f >= c
                      ? ((s = 0), (a = c))
                      : a + f >= 1
                      ? ((s = (t * u - 1) * Math.pow(2, o)), (a += f))
                      : ((s = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
              o >= 8;
              e[n + p] = 255 & s, p += h, s /= 256, o -= 8
            );
            for (a = (a << o) | s, l += o; l > 0; e[n + p] = 255 & a, p += h, a /= 256, l -= 8);
            e[n + p - h] |= 128 * m;
          });
      },
      15: function (e) {
        "use strict";
        e.exports = function (e, t, n, r, o, i, a, s) {
          if (!e) {
            var u;
            if (void 0 === t)
              u = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var l = [n, r, o, i, a, s],
                c = 0;
              (u = new Error(
                t.replace(/%s/g, function () {
                  return l[c++];
                })
              )).name = "Invariant Violation";
            }
            throw ((u.framesToPop = 1), u);
          }
        };
      },
      446: function (e) {
        !(function (e) {
          var t, n, r, o;
          function i(e) {
            Error.call(this, e), (this.message = e);
          }
          function a(e) {
            Error.call(this, e), (this.message = e);
          }
          function s(e) {
            var t, n;
            if (o(e)) return e.slice();
            if (null === e) return e;
            if ("object" === typeof e) {
              for (n in ((t = {}), e)) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }
            return e;
          }
          function u(e, t) {
            var n;
            if (e === t) return !0;
            if (typeof e !== typeof t) return !1;
            if ("object" !== typeof e) return !1;
            var r = o(e);
            if (r !== o(t)) return !1;
            if (!r) {
              for (n in e) if (Object.hasOwnProperty(e, n) && (!Object.hasOwnProperty(t, n) || !u(e[n], t[n]))) return !1;
              for (n in t) if (Object.hasOwnProperty(t, n) && !Object.hasOwnProperty(e, n)) return !1;
              return !0;
            }
            if (e.length != t.length) return !1;
            for (var i = 0; i < e.length; i++) return u(e[i], t[i]);
          }
          function l(e) {
            var t, n;
            if (!e.op) throw new i("Operation missing!");
            if (!r.hasOwnProperty(e.op)) throw new i("Invalid operation!");
            if (!("path" in e)) throw new i("Path missing!");
            for (n = r[e.op], t = 0; t < n.length; t++) if (!(n[t] in e)) throw new i(e.op + " must have key " + n[t]);
          }
          function c(e, t) {
            l(e);
            var r = e.op,
              o = new n(e.path),
              s = e.value,
              c = e.from ? new n(e.from) : null;
            switch (r) {
              case "add":
                return function (e) {
                  return o.add(e, s, t);
                };
              case "remove":
                return function (e) {
                  return o.remove(e, t);
                };
              case "replace":
                return function (e) {
                  return o.replace(e, s, t);
                };
              case "move":
                if (o.subsetOf(c)) throw new i("destination must not be a child of source");
                return function (e) {
                  var n = c.get(e),
                    r = c.remove(e, t);
                  return o.add(r, n, t);
                };
              case "copy":
                return function (e) {
                  var n = c.get(e);
                  return o.add(e, n, t);
                };
              case "test":
                return function (e) {
                  if (!u(o.get(e), s)) throw new a("Test operation failed. Value did not match.");
                  return e;
                };
            }
          }
          (o =
            Array.isArray ||
            function (e) {
              return "[object Array]" == Object.prototype.toString.call(e);
            }),
            (e.apply_patch = function (e, n) {
              return new t(n).apply(e);
            }),
            (e.InvalidPatch = i),
            (i.prototype = new Error()),
            (e.PatchApplyError = a),
            (a.prototype = new Error()),
            (e.JSONPointer = n =
              function (e) {
                var t,
                  n,
                  r = [];
                if ("" !== (n = e.split("/"))[0]) throw new i("JSONPointer must start with a slash (or be an empty string)!");
                for (t = 1; t < n.length; t++) r[t - 1] = n[t].replace(/~1/g, "/").replace(/~0/g, "~");
                (this.path = r), (this.length = r.length);
              }),
            (n.prototype._get_segment = function (e, t) {
              var n = this.path[e];
              if (o(t))
                if ("-" === n) n = t.length;
                else {
                  if (!n.match(/^[0-9]*$/)) throw new a("Expected a number to segment an array");
                  n = parseInt(n, 10);
                }
              return n;
            }),
            (n.prototype._action = function (e, t, n) {
              var r = this;
              function i(e, u) {
                var l, c;
                if ((n || (e = s(e)), (l = r._get_segment(u, e)), u == r.path.length - 1)) e = t(e, l);
                else {
                  if (o(e)) {
                    if (e.length <= l) throw new a("Path not found in document");
                  } else {
                    if ("object" !== typeof e) throw new a("Path not found in document");
                    if (!Object.hasOwnProperty.call(e, l)) throw new a("Path not found in document");
                  }
                  (c = i(e[l], u + 1)), n || (e[l] = c);
                }
                return e;
              }
              return i(e, 0);
            }),
            (n.prototype.add = function (e, t, n) {
              return 0 === this.length
                ? t
                : this._action(
                    e,
                    function (e, n) {
                      if (o(e)) {
                        if (n > e.length) throw new a("Add operation must not attempt to create a sparse array!");
                        e.splice(n, 0, t);
                      } else e[n] = t;
                      return e;
                    },
                    n
                  );
            }),
            (n.prototype.remove = function (e, t) {
              if (0 !== this.length)
                return this._action(
                  e,
                  function (e, t) {
                    if (!Object.hasOwnProperty.call(e, t)) throw new a("Remove operation must point to an existing value!");
                    return o(e) ? e.splice(t, 1) : delete e[t], e;
                  },
                  t
                );
            }),
            (n.prototype.replace = function (e, t, n) {
              return 0 === this.length
                ? t
                : this._action(
                    e,
                    function (e, n) {
                      if (!Object.hasOwnProperty.call(e, n)) throw new a("Replace operation must point to an existing value!");
                      return o(e) ? e.splice(n, 1, t) : (e[n] = t), e;
                    },
                    n
                  );
            }),
            (n.prototype.get = function (e) {
              var t;
              return 0 === this.length
                ? e
                : (this._action(
                    e,
                    function (e, n) {
                      if (!Object.hasOwnProperty.call(e, n)) throw new a("Path not found in document");
                      return (t = e[n]), e;
                    },
                    !0
                  ),
                  t);
            }),
            (n.prototype.subsetOf = function (e) {
              if (this.length <= e.length) return !1;
              for (var t = 0; t < e.length; t++) if (e.path[t] !== this.path[t]) return !1;
              return !0;
            }),
            (r = { add: ["value"], replace: ["value"], test: ["value"], remove: [], move: ["from"], copy: ["from"] }),
            (e.JSONPatch = t =
              function (e, t) {
                this._compile(e, t);
              }),
            (t.prototype._compile = function (e, t) {
              var n,
                r = this;
              if (((this.compiledOps = []), "string" === typeof e && (e = JSON.parse(e)), !o(e)))
                throw new i("Patch must be an array of operations");
              for (n = 0; n < e.length; n++) {
                var a = c(e[n], t);
                r.compiledOps.push(a);
              }
            }),
            (e.JSONPatch.prototype.apply = function (e) {
              var t;
              for (t = 0; t < this.compiledOps.length; t++) e = this.compiledOps[t](e);
              return e;
            });
        })(e.exports);
      },
      209: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            );
          } catch (o) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (
                var i,
                  a,
                  s = (function (e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e);
                  })(e),
                  u = 1;
                u < arguments.length;
                u++
              ) {
                for (var l in (i = Object(arguments[u]))) n.call(i, l) && (s[l] = i[l]);
                if (t) {
                  a = t(i);
                  for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (s[a[c]] = i[a[c]]);
                }
              }
              return s;
            };
      },
      101: function (e, t, n) {
        "use strict";
        var r = n(272);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, i, a) {
              if (a !== r) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: o
            };
            return (n.PropTypes = n), n;
          });
      },
      775: function (e, t, n) {
        e.exports = n(101)();
      },
      272: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      995: function (e, t, n) {
        "use strict";
        var r = n(381),
          o = n(209),
          i = n(499);
        function a(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(a(227));
        function s(e, t, n, r, o, i, a, s, u) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var u = !1,
          l = null,
          c = !1,
          f = null,
          d = {
            onError: function (e) {
              (u = !0), (l = e);
            }
          };
        function p(e, t, n, r, o, i, a, c, f) {
          (u = !1), (l = null), s.apply(d, arguments);
        }
        var h = null,
          m = null,
          v = null;
        function y(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = v(n)),
            (function (e, t, n, r, o, i, s, d, h) {
              if ((p.apply(this, arguments), u)) {
                if (!u) throw Error(a(198));
                var m = l;
                (u = !1), (l = null), c || ((c = !0), (f = m));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        var g = null,
          _ = {};
        function E() {
          if (g)
            for (var e in _) {
              var t = _[e],
                n = g.indexOf(e);
              if (!(-1 < n)) throw Error(a(96, e));
              if (!S[n]) {
                if (!t.extractEvents) throw Error(a(97, e));
                for (var r in ((S[n] = t), (n = t.eventTypes))) {
                  var o = void 0,
                    i = n[r],
                    s = t,
                    u = r;
                  if (w.hasOwnProperty(u)) throw Error(a(99, u));
                  w[u] = i;
                  var l = i.phasedRegistrationNames;
                  if (l) {
                    for (o in l) l.hasOwnProperty(o) && b(l[o], s, u);
                    o = !0;
                  } else i.registrationName ? (b(i.registrationName, s, u), (o = !0)) : (o = !1);
                  if (!o) throw Error(a(98, r, e));
                }
              }
            }
        }
        function b(e, t, n) {
          if (A[e]) throw Error(a(100, e));
          (A[e] = t), (T[e] = t.eventTypes[n].dependencies);
        }
        var S = [],
          w = {},
          A = {},
          T = {};
        function x(e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              if (!_.hasOwnProperty(t) || _[t] !== r) {
                if (_[t]) throw Error(a(102, t));
                (_[t] = r), (n = !0);
              }
            }
          n && E();
        }
        var I = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          C = null,
          N = null,
          O = null;
        function P(e) {
          if ((e = m(e))) {
            if ("function" !== typeof C) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = h(t)), C(e.stateNode, e.type, t));
          }
        }
        function R(e) {
          N ? (O ? O.push(e) : (O = [e])) : (N = e);
        }
        function k() {
          if (N) {
            var e = N,
              t = O;
            if (((O = N = null), P(e), t)) for (e = 0; e < t.length; e++) P(t[e]);
          }
        }
        function L(e, t) {
          return e(t);
        }
        function D(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function M() {}
        var F = L,
          B = !1,
          U = !1;
        function j() {
          (null === N && null === O) || (M(), k());
        }
        function G(e, t, n) {
          if (U) return e(t, n);
          U = !0;
          try {
            return F(e, t, n);
          } finally {
            (U = !1), j();
          }
        }
        var V =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          H = Object.prototype.hasOwnProperty,
          W = {},
          z = {};
        function Y(e, t, n, r, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i);
        }
        var q = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            q[e] = new Y(e, 0, !1, e, null, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
          ].forEach(function (e) {
            var t = e[0];
            q[t] = new Y(t, 1, !1, e[1], null, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            q[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            q[e] = new Y(e, 2, !1, e, null, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              q[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            q[e] = new Y(e, 3, !0, e, null, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            q[e] = new Y(e, 4, !1, e, null, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            q[e] = new Y(e, 6, !1, e, null, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            q[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1);
          });
        var K = /[\-:]([a-z])/g;
        function $(e) {
          return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(K, $);
            q[t] = new Y(t, 1, !1, e, null, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var t = e.replace(K, $);
            q[t] = new Y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
          }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(K, $);
            q[t] = new Y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            q[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1);
          }),
          (q.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0)),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            q[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0);
          });
        var X = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function Q(e, t, n, r) {
          var o = q.hasOwnProperty(t) ? q[t] : null;
          (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return !!H.call(z, e) || (!H.call(W, e) && (V.test(e) ? (z[e] = !0) : ((W[e] = !0), !1)));
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        X.hasOwnProperty("ReactCurrentDispatcher") || (X.ReactCurrentDispatcher = { current: null }),
          X.hasOwnProperty("ReactCurrentBatchConfig") || (X.ReactCurrentBatchConfig = { suspense: null });
        var Z = /^(.*)[\\\/]/,
          J = "function" === typeof Symbol && Symbol.for,
          ee = J ? Symbol.for("react.element") : 60103,
          te = J ? Symbol.for("react.portal") : 60106,
          ne = J ? Symbol.for("react.fragment") : 60107,
          re = J ? Symbol.for("react.strict_mode") : 60108,
          oe = J ? Symbol.for("react.profiler") : 60114,
          ie = J ? Symbol.for("react.provider") : 60109,
          ae = J ? Symbol.for("react.context") : 60110,
          se = J ? Symbol.for("react.concurrent_mode") : 60111,
          ue = J ? Symbol.for("react.forward_ref") : 60112,
          le = J ? Symbol.for("react.suspense") : 60113,
          ce = J ? Symbol.for("react.suspense_list") : 60120,
          fe = J ? Symbol.for("react.memo") : 60115,
          de = J ? Symbol.for("react.lazy") : 60116,
          pe = J ? Symbol.for("react.block") : 60121,
          he = "function" === typeof Symbol && Symbol.iterator;
        function me(e) {
          return null === e || "object" !== typeof e ? null : "function" === typeof (e = (he && e[he]) || e["@@iterator"]) ? e : null;
        }
        function ve(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case ne:
              return "Fragment";
            case te:
              return "Portal";
            case oe:
              return "Profiler";
            case re:
              return "StrictMode";
            case le:
              return "Suspense";
            case ce:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case ae:
                return "Context.Consumer";
              case ie:
                return "Context.Provider";
              case ue:
                var t = e.render;
                return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
              case fe:
                return ve(e.type);
              case pe:
                return ve(e.render);
              case de:
                if ((e = 1 === e._status ? e._result : null)) return ve(e);
            }
          return null;
        }
        function ye(e) {
          var t = "";
          do {
            e: switch (e.tag) {
              case 3:
              case 4:
              case 6:
              case 7:
              case 10:
              case 9:
                var n = "";
                break e;
              default:
                var r = e._debugOwner,
                  o = e._debugSource,
                  i = ve(e.type);
                (n = null),
                  r && (n = ve(r.type)),
                  (r = i),
                  (i = ""),
                  o ? (i = " (at " + o.fileName.replace(Z, "") + ":" + o.lineNumber + ")") : n && (i = " (created by " + n + ")"),
                  (n = "\n    in " + (r || "Unknown") + i);
            }
            (t += n), (e = e.return);
          } while (e);
          return t;
        }
        function ge(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function _e(e) {
          var t = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function Ee(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = _e(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    }
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    }
                  }
                );
              }
            })(e));
        }
        function be(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return e && (r = _e(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        function Se(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
          });
        }
        function we(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = ge(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            });
        }
        function Ae(e, t) {
          null != (t = t.checked) && Q(e, "checked", t, !1);
        }
        function Te(e, t) {
          Ae(e, t);
          var n = ge(t.value),
            r = t.type;
          if (null != n)
            "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value") ? Ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ie(e, t.type, ge(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function xe(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
            (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
        }
        function Ie(e, t, n) {
          ("number" === t && e.ownerDocument.activeElement === e) ||
            (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function Ce(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function Ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ge(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function Oe(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return o({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function Pe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: ge(n) };
        }
        function Re(e, t) {
          var n = ge(t.value),
            r = ge(t.defaultValue);
          null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ke(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
        }
        var Le = "http://www.w3.org/1999/xhtml",
          De = "http://www.w3.org/2000/svg";
        function Me(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function Fe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? Me(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var Be,
          Ue,
          je =
            ((Ue = function (e, t) {
              if (e.namespaceURI !== De || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (Be = Be || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Be.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return Ue(e, t);
                  });
                }
              : Ue);
        function Ge(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        function Ve(e, t) {
          var n = {};
          return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
        }
        var He = {
            animationend: Ve("Animation", "AnimationEnd"),
            animationiteration: Ve("Animation", "AnimationIteration"),
            animationstart: Ve("Animation", "AnimationStart"),
            transitionend: Ve("Transition", "TransitionEnd")
          },
          We = {},
          ze = {};
        function Ye(e) {
          if (We[e]) return We[e];
          if (!He[e]) return e;
          var t,
            n = He[e];
          for (t in n) if (n.hasOwnProperty(t) && t in ze) return (We[e] = n[t]);
          return e;
        }
        I &&
          ((ze = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete He.animationend.animation, delete He.animationiteration.animation, delete He.animationstart.animation),
          "TransitionEvent" in window || delete He.transitionend.transition);
        var qe = Ye("animationend"),
          Ke = Ye("animationiteration"),
          $e = Ye("animationstart"),
          Xe = Ye("transitionend"),
          Qe =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ze = new ("function" === typeof WeakMap ? WeakMap : Map)();
        function Je(e) {
          var t = Ze.get(e);
          return void 0 === t && ((t = new Map()), Ze.set(e, t)), t;
        }
        function et(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function tt(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function nt(e) {
          if (et(e) !== e) throw Error(a(188));
        }
        function rt(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = et(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return nt(o), e;
                    if (i === r) return nt(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var s = !1, u = o.child; u; ) {
                    if (u === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                      }
                      if (u === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function ot(e, t) {
          if (null == t) throw Error(a(30));
          return null == e
            ? t
            : Array.isArray(e)
            ? Array.isArray(t)
              ? (e.push.apply(e, t), e)
              : (e.push(t), e)
            : Array.isArray(t)
            ? [e].concat(t)
            : [e, t];
        }
        function it(e, t, n) {
          Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
        }
        var at = null;
        function st(e) {
          if (e) {
            var t = e._dispatchListeners,
              n = e._dispatchInstances;
            if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) y(e, t[r], n[r]);
            else t && y(e, t, n);
            (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
          }
        }
        function ut(e) {
          if ((null !== e && (at = ot(at, e)), (e = at), (at = null), e)) {
            if ((it(e, st), at)) throw Error(a(95));
            if (c) throw ((e = f), (c = !1), (f = null), e);
          }
        }
        function lt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        function ct(e) {
          if (!I) return !1;
          var t = (e = "on" + e) in document;
          return t || ((t = document.createElement("div")).setAttribute(e, "return;"), (t = "function" === typeof t[e])), t;
        }
        var ft = [];
        function dt(e) {
          (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > ft.length && ft.push(e);
        }
        function pt(e, t, n, r) {
          if (ft.length) {
            var o = ft.pop();
            return (o.topLevelType = e), (o.eventSystemFlags = r), (o.nativeEvent = t), (o.targetInst = n), o;
          }
          return { topLevelType: e, eventSystemFlags: r, nativeEvent: t, targetInst: n, ancestors: [] };
        }
        function ht(e) {
          var t = e.targetInst,
            n = t;
          do {
            if (!n) {
              e.ancestors.push(n);
              break;
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
              for (; r.return; ) r = r.return;
              r = 3 !== r.tag ? null : r.stateNode.containerInfo;
            }
            if (!r) break;
            (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = kn(r));
          } while (n);
          for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var o = lt(e.nativeEvent);
            r = e.topLevelType;
            var i = e.nativeEvent,
              a = e.eventSystemFlags;
            0 === n && (a |= 64);
            for (var s = null, u = 0; u < S.length; u++) {
              var l = S[u];
              l && (l = l.extractEvents(r, t, i, o, a)) && (s = ot(s, l));
            }
            ut(s);
          }
        }
        function mt(e, t, n) {
          if (!n.has(e)) {
            switch (e) {
              case "scroll":
                $t(t, "scroll", !0);
                break;
              case "focus":
              case "blur":
                $t(t, "focus", !0), $t(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                break;
              case "cancel":
              case "close":
                ct(e) && $t(t, e, !0);
                break;
              case "invalid":
              case "submit":
              case "reset":
                break;
              default:
                -1 === Qe.indexOf(e) && Kt(e, t);
            }
            n.set(e, null);
          }
        }
        var vt,
          yt,
          gt,
          _t = !1,
          Et = [],
          bt = null,
          St = null,
          wt = null,
          At = new Map(),
          Tt = new Map(),
          xt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
              " "
            ),
          Ct = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
        function Nt(e, t, n, r, o) {
          return { blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: o, container: r };
        }
        function Ot(e, t) {
          switch (e) {
            case "focus":
            case "blur":
              bt = null;
              break;
            case "dragenter":
            case "dragleave":
              St = null;
              break;
            case "mouseover":
            case "mouseout":
              wt = null;
              break;
            case "pointerover":
            case "pointerout":
              At.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function Pt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = Nt(t, n, r, o, i)), null !== t && null !== (t = Ln(t)) && yt(t), e)
            : ((e.eventSystemFlags |= r), e);
        }
        function Rt(e) {
          var t = kn(e.target);
          if (null !== t) {
            var n = et(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = tt(n)))
                  return (
                    (e.blockedOn = t),
                    void i.unstable_runWithPriority(e.priority, function () {
                      gt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function kt(e) {
          if (null !== e.blockedOn) return !1;
          var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
          if (null !== t) {
            var n = Ln(t);
            return null !== n && yt(n), (e.blockedOn = t), !1;
          }
          return !0;
        }
        function Lt(e, t, n) {
          kt(e) && n.delete(t);
        }
        function Dt() {
          for (_t = !1; 0 < Et.length; ) {
            var e = Et[0];
            if (null !== e.blockedOn) {
              null !== (e = Ln(e.blockedOn)) && vt(e);
              break;
            }
            var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            null !== t ? (e.blockedOn = t) : Et.shift();
          }
          null !== bt && kt(bt) && (bt = null),
            null !== St && kt(St) && (St = null),
            null !== wt && kt(wt) && (wt = null),
            At.forEach(Lt),
            Tt.forEach(Lt);
        }
        function Mt(e, t) {
          e.blockedOn === t && ((e.blockedOn = null), _t || ((_t = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Dt)));
        }
        function Ft(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Et.length) {
            Mt(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var r = Et[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== bt && Mt(bt, e), null !== St && Mt(St, e), null !== wt && Mt(wt, e), At.forEach(t), Tt.forEach(t), n = 0;
            n < xt.length;
            n++
          )
            (r = xt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < xt.length && null === (n = xt[0]).blockedOn; ) Rt(n), null === n.blockedOn && xt.shift();
        }
        var Bt = {},
          Ut = new Map(),
          jt = new Map(),
          Gt = [
            "abort",
            "abort",
            qe,
            "animationEnd",
            Ke,
            "animationIteration",
            $e,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Xe,
            "transitionEnd",
            "waiting",
            "waiting"
          ];
        function Vt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1],
              i = "on" + (o[0].toUpperCase() + o.slice(1));
            (i = { phasedRegistrationNames: { bubbled: i, captured: i + "Capture" }, dependencies: [r], eventPriority: t }),
              jt.set(r, t),
              Ut.set(r, i),
              (Bt[o] = i);
          }
        }
        Vt(
          "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Vt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Vt(Gt, 2);
        for (
          var Ht = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Wt = 0;
          Wt < Ht.length;
          Wt++
        )
          jt.set(Ht[Wt], 0);
        var zt = i.unstable_UserBlockingPriority,
          Yt = i.unstable_runWithPriority,
          qt = !0;
        function Kt(e, t) {
          $t(t, e, !1);
        }
        function $t(e, t, n) {
          var r = jt.get(t);
          switch (void 0 === r ? 2 : r) {
            case 0:
              r = Xt.bind(null, t, 1, e);
              break;
            case 1:
              r = Qt.bind(null, t, 1, e);
              break;
            default:
              r = Zt.bind(null, t, 1, e);
          }
          n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
        }
        function Xt(e, t, n, r) {
          B || M();
          var o = Zt,
            i = B;
          B = !0;
          try {
            D(o, e, t, n, r);
          } finally {
            (B = i) || j();
          }
        }
        function Qt(e, t, n, r) {
          Yt(zt, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          if (qt)
            if (0 < Et.length && -1 < It.indexOf(e)) (e = Nt(null, e, t, n, r)), Et.push(e);
            else {
              var o = Jt(e, t, n, r);
              if (null === o) Ot(e, r);
              else if (-1 < It.indexOf(e)) (e = Nt(o, e, t, n, r)), Et.push(e);
              else if (
                !(function (e, t, n, r, o) {
                  switch (t) {
                    case "focus":
                      return (bt = Pt(bt, e, t, n, r, o)), !0;
                    case "dragenter":
                      return (St = Pt(St, e, t, n, r, o)), !0;
                    case "mouseover":
                      return (wt = Pt(wt, e, t, n, r, o)), !0;
                    case "pointerover":
                      var i = o.pointerId;
                      return At.set(i, Pt(At.get(i) || null, e, t, n, r, o)), !0;
                    case "gotpointercapture":
                      return (i = o.pointerId), Tt.set(i, Pt(Tt.get(i) || null, e, t, n, r, o)), !0;
                  }
                  return !1;
                })(o, e, t, n, r)
              ) {
                Ot(e, r), (e = pt(e, r, null, t));
                try {
                  G(ht, e);
                } finally {
                  dt(e);
                }
              }
            }
        }
        function Jt(e, t, n, r) {
          if (null !== (n = kn((n = lt(r))))) {
            var o = et(n);
            if (null === o) n = null;
            else {
              var i = o.tag;
              if (13 === i) {
                if (null !== (n = tt(o))) return n;
                n = null;
              } else if (3 === i) {
                if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                n = null;
              } else o !== n && (n = null);
            }
          }
          e = pt(e, r, n, t);
          try {
            G(ht, e);
          } finally {
            dt(e);
          }
          return null;
        }
        var en = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
          },
          tn = ["Webkit", "ms", "Moz", "O"];
        function nn(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n || "number" !== typeof t || 0 === t || (en.hasOwnProperty(e) && en[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function rn(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = nn(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(en).forEach(function (e) {
          tn.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (en[t] = en[e]);
          });
        });
        var on = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
          }
        );
        function an(e, t) {
          if (t) {
            if (on[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style) throw Error(a(62, ""));
          }
        }
        function sn(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var un = Le;
        function ln(e, t) {
          var n = Je((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
          t = T[t];
          for (var r = 0; r < t.length; r++) mt(t[r], e, n);
        }
        function cn() {}
        function fn(e) {
          if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function dn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function pn(e, t) {
          var n,
            r = dn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = dn(r);
          }
        }
        function hn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? hn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mn() {
          for (var e = window, t = fn(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = fn((e = t.contentWindow).document);
          }
          return t;
        }
        function vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yn = "$",
          gn = "/$",
          _n = "$?",
          En = "$!",
          bn = null,
          Sn = null;
        function wn(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function An(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Tn = "function" === typeof setTimeout ? setTimeout : void 0,
          xn = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function In(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Cn(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (n === yn || n === En || n === _n) {
                if (0 === t) return e;
                t--;
              } else n === gn && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Nn = Math.random().toString(36).slice(2),
          On = "__reactInternalInstance$" + Nn,
          Pn = "__reactEventHandlers$" + Nn,
          Rn = "__reactContainere$" + Nn;
        function kn(e) {
          var t = e[On];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Rn] || n[On])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Cn(e); null !== e; ) {
                  if ((n = e[On])) return n;
                  e = Cn(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ln(e) {
          return !(e = e[On] || e[Rn]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
        }
        function Dn(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function Mn(e) {
          return e[Pn] || null;
        }
        function Fn(e) {
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Bn(e, t) {
          var n = e.stateNode;
          if (!n) return null;
          var r = h(n);
          if (!r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        function Un(e, t, n) {
          (t = Bn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
            ((n._dispatchListeners = ot(n._dispatchListeners, t)), (n._dispatchInstances = ot(n._dispatchInstances, e)));
        }
        function jn(e) {
          if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Fn(t));
            for (t = n.length; 0 < t--; ) Un(n[t], "captured", e);
            for (t = 0; t < n.length; t++) Un(n[t], "bubbled", e);
          }
        }
        function Gn(e, t, n) {
          e &&
            n &&
            n.dispatchConfig.registrationName &&
            (t = Bn(e, n.dispatchConfig.registrationName)) &&
            ((n._dispatchListeners = ot(n._dispatchListeners, t)), (n._dispatchInstances = ot(n._dispatchInstances, e)));
        }
        function Vn(e) {
          e && e.dispatchConfig.registrationName && Gn(e._targetInst, null, e);
        }
        function Hn(e) {
          it(e, jn);
        }
        var Wn = null,
          zn = null,
          Yn = null;
        function qn() {
          if (Yn) return Yn;
          var e,
            t,
            n = zn,
            r = n.length,
            o = "value" in Wn ? Wn.value : Wn.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (Yn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Kn() {
          return !0;
        }
        function $n() {
          return !1;
        }
        function Xn(e, t, n, r) {
          for (var o in ((this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n), (e = this.constructor.Interface)))
            e.hasOwnProperty(o) && ((t = e[o]) ? (this[o] = t(n)) : "target" === o ? (this.target = r) : (this[o] = n[o]));
          return (
            (this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Kn : $n),
            (this.isPropagationStopped = $n),
            this
          );
        }
        function Qn(e, t, n, r) {
          if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, n, r), o;
          }
          return new this(e, t, n, r);
        }
        function Zn(e) {
          if (!(e instanceof this)) throw Error(a(279));
          e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function Jn(e) {
          (e.eventPool = []), (e.getPooled = Qn), (e.release = Zn);
        }
        o(Xn.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = Kn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = Kn));
          },
          persist: function () {
            this.isPersistent = Kn;
          },
          isPersistent: $n,
          destructor: function () {
            var e,
              t = this.constructor.Interface;
            for (e in t) this[e] = null;
            (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
              (this.isPropagationStopped = this.isDefaultPrevented = $n),
              (this._dispatchInstances = this._dispatchListeners = null);
          }
        }),
          (Xn.Interface = {
            type: null,
            target: null,
            currentTarget: function () {
              return null;
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: null,
            isTrusted: null
          }),
          (Xn.extend = function (e) {
            function t() {}
            function n() {
              return r.apply(this, arguments);
            }
            var r = this;
            t.prototype = r.prototype;
            var i = new t();
            return (
              o(i, n.prototype),
              (n.prototype = i),
              (n.prototype.constructor = n),
              (n.Interface = o({}, r.Interface, e)),
              (n.extend = r.extend),
              Jn(n),
              n
            );
          }),
          Jn(Xn);
        var er = Xn.extend({ data: null }),
          tr = Xn.extend({ data: null }),
          nr = [9, 13, 27, 32],
          rr = I && "CompositionEvent" in window,
          or = null;
        I && "documentMode" in document && (or = document.documentMode);
        var ir = I && "TextEvent" in window && !or,
          ar = I && (!rr || (or && 8 < or && 11 >= or)),
          sr = String.fromCharCode(32),
          ur = {
            beforeInput: {
              phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" },
              dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
              phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" },
              dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
              phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" },
              dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
              phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" },
              dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
          },
          lr = !1;
        function cr(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== nr.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
              return !0;
            default:
              return !1;
          }
        }
        function fr(e) {
          return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var dr = !1;
        var pr = {
            eventTypes: ur,
            extractEvents: function (e, t, n, r) {
              var o;
              if (rr)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var i = ur.compositionStart;
                      break e;
                    case "compositionend":
                      i = ur.compositionEnd;
                      break e;
                    case "compositionupdate":
                      i = ur.compositionUpdate;
                      break e;
                  }
                  i = void 0;
                }
              else dr ? cr(e, n) && (i = ur.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = ur.compositionStart);
              return (
                i
                  ? (ar &&
                      "ko" !== n.locale &&
                      (dr || i !== ur.compositionStart
                        ? i === ur.compositionEnd && dr && (o = qn())
                        : ((zn = "value" in (Wn = r) ? Wn.value : Wn.textContent), (dr = !0))),
                    (i = er.getPooled(i, t, n, r)),
                    o ? (i.data = o) : null !== (o = fr(n)) && (i.data = o),
                    Hn(i),
                    (o = i))
                  : (o = null),
                (e = ir
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return fr(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((lr = !0), sr);
                        case "textInput":
                          return (e = t.data) === sr && lr ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (dr) return "compositionend" === e || (!rr && cr(e, t)) ? ((e = qn()), (Yn = zn = Wn = null), (dr = !1), e) : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return ar && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n))
                  ? (((t = tr.getPooled(ur.beforeInput, t, n, r)).data = e), Hn(t))
                  : (t = null),
                null === o ? t : null === t ? o : [o, t]
              );
            }
          },
          hr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
          };
        function mr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!hr[e.type] : "textarea" === t;
        }
        var vr = {
          change: {
            phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
          }
        };
        function yr(e, t, n) {
          return ((e = Xn.getPooled(vr.change, e, t, n)).type = "change"), R(n), Hn(e), e;
        }
        var gr = null,
          _r = null;
        function Er(e) {
          ut(e);
        }
        function br(e) {
          if (be(Dn(e))) return e;
        }
        function Sr(e, t) {
          if ("change" === e) return t;
        }
        var wr = !1;
        function Ar() {
          gr && (gr.detachEvent("onpropertychange", Tr), (_r = gr = null));
        }
        function Tr(e) {
          if ("value" === e.propertyName && br(_r))
            if (((e = yr(_r, e, lt(e))), B)) ut(e);
            else {
              B = !0;
              try {
                L(Er, e);
              } finally {
                (B = !1), j();
              }
            }
        }
        function xr(e, t, n) {
          "focus" === e ? (Ar(), (_r = n), (gr = t).attachEvent("onpropertychange", Tr)) : "blur" === e && Ar();
        }
        function Ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return br(_r);
        }
        function Cr(e, t) {
          if ("click" === e) return br(t);
        }
        function Nr(e, t) {
          if ("input" === e || "change" === e) return br(t);
        }
        I && (wr = ct("input") && (!document.documentMode || 9 < document.documentMode));
        var Or = {
            eventTypes: vr,
            _isInputEventSupported: wr,
            extractEvents: function (e, t, n, r) {
              var o = t ? Dn(t) : window,
                i = o.nodeName && o.nodeName.toLowerCase();
              if ("select" === i || ("input" === i && "file" === o.type)) var a = Sr;
              else if (mr(o))
                if (wr) a = Nr;
                else {
                  a = Ir;
                  var s = xr;
                }
              else (i = o.nodeName) && "input" === i.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (a = Cr);
              if (a && (a = a(e, t))) return yr(a, n, r);
              s && s(e, o, t), "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && Ie(o, "number", o.value);
            }
          },
          Pr = Xn.extend({ view: null, detail: null }),
          Rr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function kr(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = Rr[e]) && !!t[e];
        }
        function Lr() {
          return kr;
        }
        var Dr = 0,
          Mr = 0,
          Fr = !1,
          Br = !1,
          Ur = Pr.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Lr,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
              return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
            },
            movementX: function (e) {
              if ("movementX" in e) return e.movementX;
              var t = Dr;
              return (Dr = e.screenX), Fr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Fr = !0), 0);
            },
            movementY: function (e) {
              if ("movementY" in e) return e.movementY;
              var t = Mr;
              return (Mr = e.screenY), Br ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Br = !0), 0);
            }
          }),
          jr = Ur.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
          }),
          Gr = {
            mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
            mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] },
            pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] },
            pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] }
          },
          Vr = {
            eventTypes: Gr,
            extractEvents: function (e, t, n, r, o) {
              var i = "mouseover" === e || "pointerover" === e,
                a = "mouseout" === e || "pointerout" === e;
              if ((i && 0 === (32 & o) && (n.relatedTarget || n.fromElement)) || (!a && !i)) return null;
              ((i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window), a)
                ? ((a = t),
                  null !== (t = (t = n.relatedTarget || n.toElement) ? kn(t) : null) &&
                    (t !== et(t) || (5 !== t.tag && 6 !== t.tag)) &&
                    (t = null))
                : (a = null);
              if (a === t) return null;
              if ("mouseout" === e || "mouseover" === e)
                var s = Ur,
                  u = Gr.mouseLeave,
                  l = Gr.mouseEnter,
                  c = "mouse";
              else ("pointerout" !== e && "pointerover" !== e) || ((s = jr), (u = Gr.pointerLeave), (l = Gr.pointerEnter), (c = "pointer"));
              if (
                ((e = null == a ? i : Dn(a)),
                (i = null == t ? i : Dn(t)),
                ((u = s.getPooled(u, a, n, r)).type = c + "leave"),
                (u.target = e),
                (u.relatedTarget = i),
                ((n = s.getPooled(l, t, n, r)).type = c + "enter"),
                (n.target = i),
                (n.relatedTarget = e),
                (c = t),
                (r = a) && c)
              )
                e: {
                  for (l = c, a = 0, e = s = r; e; e = Fn(e)) a++;
                  for (e = 0, t = l; t; t = Fn(t)) e++;
                  for (; 0 < a - e; ) (s = Fn(s)), a--;
                  for (; 0 < e - a; ) (l = Fn(l)), e--;
                  for (; a--; ) {
                    if (s === l || s === l.alternate) break e;
                    (s = Fn(s)), (l = Fn(l));
                  }
                  s = null;
                }
              else s = null;
              for (l = s, s = []; r && r !== l && (null === (a = r.alternate) || a !== l); ) s.push(r), (r = Fn(r));
              for (r = []; c && c !== l && (null === (a = c.alternate) || a !== l); ) r.push(c), (c = Fn(c));
              for (c = 0; c < s.length; c++) Gn(s[c], "bubbled", u);
              for (c = r.length; 0 < c--; ) Gn(r[c], "captured", n);
              return 0 === (64 & o) ? [u] : [u, n];
            }
          };
        var Hr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
                },
          Wr = Object.prototype.hasOwnProperty;
        function zr(e, t) {
          if (Hr(e, t)) return !0;
          if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) if (!Wr.call(t, n[r]) || !Hr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        var Yr = I && "documentMode" in document && 11 >= document.documentMode,
          qr = {
            select: {
              phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" },
              dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
          },
          Kr = null,
          $r = null,
          Xr = null,
          Qr = !1;
        function Zr(e, t) {
          var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
          return Qr || null == Kr || Kr !== fn(n)
            ? null
            : ("selectionStart" in (n = Kr) && vn(n)
                ? (n = { start: n.selectionStart, end: n.selectionEnd })
                : (n = {
                    anchorNode: (n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset
                  }),
              Xr && zr(Xr, n) ? null : ((Xr = n), ((e = Xn.getPooled(qr.select, $r, e, t)).type = "select"), (e.target = Kr), Hn(e), e));
        }
        var Jr = {
            eventTypes: qr,
            extractEvents: function (e, t, n, r, o, i) {
              if (!(i = !(o = i || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                e: {
                  (o = Je(o)), (i = T.onSelect);
                  for (var a = 0; a < i.length; a++)
                    if (!o.has(i[a])) {
                      o = !1;
                      break e;
                    }
                  o = !0;
                }
                i = !o;
              }
              if (i) return null;
              switch (((o = t ? Dn(t) : window), e)) {
                case "focus":
                  (mr(o) || "true" === o.contentEditable) && ((Kr = o), ($r = t), (Xr = null));
                  break;
                case "blur":
                  Xr = $r = Kr = null;
                  break;
                case "mousedown":
                  Qr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  return (Qr = !1), Zr(n, r);
                case "selectionchange":
                  if (Yr) break;
                case "keydown":
                case "keyup":
                  return Zr(n, r);
              }
              return null;
            }
          },
          eo = Xn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
          to = Xn.extend({
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
          }),
          no = Pr.extend({ relatedTarget: null });
        function ro(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
          );
        }
        var oo = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
          },
          io = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
          },
          ao = Pr.extend({
            key: function (e) {
              if (e.key) {
                var t = oo[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = ro(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? io[e.keyCode] || "Unidentified"
                : "";
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Lr,
            charCode: function (e) {
              return "keypress" === e.type ? ro(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type ? ro(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            }
          }),
          so = Ur.extend({ dataTransfer: null }),
          uo = Pr.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Lr
          }),
          lo = Xn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
          co = Ur.extend({
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: null,
            deltaMode: null
          }),
          fo = {
            eventTypes: Bt,
            extractEvents: function (e, t, n, r) {
              var o = Ut.get(e);
              if (!o) return null;
              switch (e) {
                case "keypress":
                  if (0 === ro(n)) return null;
                case "keydown":
                case "keyup":
                  e = ao;
                  break;
                case "blur":
                case "focus":
                  e = no;
                  break;
                case "click":
                  if (2 === n.button) return null;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  e = Ur;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  e = so;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  e = uo;
                  break;
                case qe:
                case Ke:
                case $e:
                  e = eo;
                  break;
                case Xe:
                  e = lo;
                  break;
                case "scroll":
                  e = Pr;
                  break;
                case "wheel":
                  e = co;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  e = to;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  e = jr;
                  break;
                default:
                  e = Xn;
              }
              return Hn((t = e.getPooled(o, t, n, r))), t;
            }
          };
        if (g) throw Error(a(101));
        (g = Array.prototype.slice.call(
          "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
            " "
          )
        )),
          E(),
          (h = Mn),
          (m = Ln),
          (v = Dn),
          x({ SimpleEventPlugin: fo, EnterLeaveEventPlugin: Vr, ChangeEventPlugin: Or, SelectEventPlugin: Jr, BeforeInputEventPlugin: pr });
        var po = [],
          ho = -1;
        function mo(e) {
          0 > ho || ((e.current = po[ho]), (po[ho] = null), ho--);
        }
        function vo(e, t) {
          ho++, (po[ho] = e.current), (e.current = t);
        }
        var yo = {},
          go = { current: yo },
          _o = { current: !1 },
          Eo = yo;
        function bo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return yo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
          );
        }
        function So(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function wo() {
          mo(_o), mo(go);
        }
        function Ao(e, t, n) {
          if (go.current !== yo) throw Error(a(168));
          vo(go, t), vo(_o, n);
        }
        function To(e, t, n) {
          var r = e.stateNode;
          if (((e = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
          for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(a(108, ve(t) || "Unknown", i));
          return o({}, n, {}, r);
        }
        function xo(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yo),
            (Eo = go.current),
            vo(go, e),
            vo(_o, _o.current),
            !0
          );
        }
        function Io(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n ? ((e = To(e, t, Eo)), (r.__reactInternalMemoizedMergedChildContext = e), mo(_o), mo(go), vo(go, e)) : mo(_o), vo(_o, n);
        }
        var Co = i.unstable_runWithPriority,
          No = i.unstable_scheduleCallback,
          Oo = i.unstable_cancelCallback,
          Po = i.unstable_requestPaint,
          Ro = i.unstable_now,
          ko = i.unstable_getCurrentPriorityLevel,
          Lo = i.unstable_ImmediatePriority,
          Do = i.unstable_UserBlockingPriority,
          Mo = i.unstable_NormalPriority,
          Fo = i.unstable_LowPriority,
          Bo = i.unstable_IdlePriority,
          Uo = {},
          jo = i.unstable_shouldYield,
          Go = void 0 !== Po ? Po : function () {},
          Vo = null,
          Ho = null,
          Wo = !1,
          zo = Ro(),
          Yo =
            1e4 > zo
              ? Ro
              : function () {
                  return Ro() - zo;
                };
        function qo() {
          switch (ko()) {
            case Lo:
              return 99;
            case Do:
              return 98;
            case Mo:
              return 97;
            case Fo:
              return 96;
            case Bo:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function Ko(e) {
          switch (e) {
            case 99:
              return Lo;
            case 98:
              return Do;
            case 97:
              return Mo;
            case 96:
              return Fo;
            case 95:
              return Bo;
            default:
              throw Error(a(332));
          }
        }
        function $o(e, t) {
          return (e = Ko(e)), Co(e, t);
        }
        function Xo(e, t, n) {
          return (e = Ko(e)), No(e, t, n);
        }
        function Qo(e) {
          return null === Vo ? ((Vo = [e]), (Ho = No(Lo, Jo))) : Vo.push(e), Uo;
        }
        function Zo() {
          if (null !== Ho) {
            var e = Ho;
            (Ho = null), Oo(e);
          }
          Jo();
        }
        function Jo() {
          if (!Wo && null !== Vo) {
            Wo = !0;
            var e = 0;
            try {
              var t = Vo;
              $o(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Vo = null);
            } catch (n) {
              throw (null !== Vo && (Vo = Vo.slice(e + 1)), No(Lo, Zo), n);
            } finally {
              Wo = !1;
            }
          }
        }
        function ei(e, t, n) {
          return 1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n;
        }
        function ti(e, t) {
          if (e && e.defaultProps) for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        var ni = { current: null },
          ri = null,
          oi = null,
          ii = null;
        function ai() {
          ii = oi = ri = null;
        }
        function si(e) {
          var t = ni.current;
          mo(ni), (e.type._context._currentValue = t);
        }
        function ui(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (e.childExpirationTime < t)
              (e.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
            else {
              if (!(null !== n && n.childExpirationTime < t)) break;
              n.childExpirationTime = t;
            }
            e = e.return;
          }
        }
        function li(e, t) {
          (ri = e),
            (ii = oi = null),
            null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ma = !0), (e.firstContext = null));
        }
        function ci(e, t) {
          if (ii !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) || ((ii = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === oi)
            ) {
              if (null === ri) throw Error(a(308));
              (oi = t), (ri.dependencies = { expirationTime: 0, firstContext: t, responders: null });
            } else oi = oi.next = t;
          return e._currentValue;
        }
        var fi = !1;
        function di(e) {
          e.updateQueue = { baseState: e.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
        }
        function pi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = { baseState: e.baseState, baseQueue: e.baseQueue, shared: e.shared, effects: e.effects });
        }
        function hi(e, t) {
          return ((e = { expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null }).next = e);
        }
        function mi(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
          }
        }
        function vi(e, t) {
          var n = e.alternate;
          null !== n && pi(n, e),
            null === (n = (e = e.updateQueue).baseQueue) ? ((e.baseQueue = t.next = t), (t.next = t)) : ((t.next = n.next), (n.next = t));
        }
        function yi(e, t, n, r) {
          var i = e.updateQueue;
          fi = !1;
          var a = i.baseQueue,
            s = i.shared.pending;
          if (null !== s) {
            if (null !== a) {
              var u = a.next;
              (a.next = s.next), (s.next = u);
            }
            (a = s), (i.shared.pending = null), null !== (u = e.alternate) && null !== (u = u.updateQueue) && (u.baseQueue = s);
          }
          if (null !== a) {
            u = a.next;
            var l = i.baseState,
              c = 0,
              f = null,
              d = null,
              p = null;
            if (null !== u)
              for (var h = u; ; ) {
                if ((s = h.expirationTime) < r) {
                  var m = {
                    expirationTime: h.expirationTime,
                    suspenseConfig: h.suspenseConfig,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                  };
                  null === p ? ((d = p = m), (f = l)) : (p = p.next = m), s > c && (c = s);
                } else {
                  null !== p &&
                    (p = p.next =
                      {
                        expirationTime: 1073741823,
                        suspenseConfig: h.suspenseConfig,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                      }),
                    Su(s, h.suspenseConfig);
                  e: {
                    var v = e,
                      y = h;
                    switch (((s = t), (m = n), y.tag)) {
                      case 1:
                        if ("function" === typeof (v = y.payload)) {
                          l = v.call(m, l, s);
                          break e;
                        }
                        l = v;
                        break e;
                      case 3:
                        v.effectTag = (-4097 & v.effectTag) | 64;
                      case 0:
                        if (null === (s = "function" === typeof (v = y.payload) ? v.call(m, l, s) : v) || void 0 === s) break e;
                        l = o({}, l, s);
                        break e;
                      case 2:
                        fi = !0;
                    }
                  }
                  null !== h.callback && ((e.effectTag |= 32), null === (s = i.effects) ? (i.effects = [h]) : s.push(h));
                }
                if (null === (h = h.next) || h === u) {
                  if (null === (s = i.shared.pending)) break;
                  (h = a.next = s.next), (s.next = u), (i.baseQueue = a = s), (i.shared.pending = null);
                }
              }
            null === p ? (f = l) : (p.next = d), (i.baseState = f), (i.baseQueue = p), wu(c), (e.expirationTime = c), (e.memoizedState = l);
          }
        }
        function gi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = o), (o = n), "function" !== typeof r)) throw Error(a(191, r));
                r.call(o);
              }
            }
        }
        var _i = X.ReactCurrentBatchConfig,
          Ei = new r.Component().refs;
        function bi(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.expirationTime && (e.updateQueue.baseState = n);
        }
        var Si = {
          isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && et(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = lu(),
              o = _i.suspense;
            ((o = hi((r = cu(r, e, o)), o)).payload = t), void 0 !== n && null !== n && (o.callback = n), mi(e, o), fu(e, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternalFiber;
            var r = lu(),
              o = _i.suspense;
            ((o = hi((r = cu(r, e, o)), o)).tag = 1), (o.payload = t), void 0 !== n && null !== n && (o.callback = n), mi(e, o), fu(e, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var n = lu(),
              r = _i.suspense;
            ((r = hi((n = cu(n, e, r)), r)).tag = 2), void 0 !== t && null !== t && (r.callback = t), mi(e, r), fu(e, n);
          }
        };
        function wi(e, t, n, r, o, i, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype || !t.prototype.isPureReactComponent || !zr(n, r) || !zr(o, i);
        }
        function Ai(e, t, n) {
          var r = !1,
            o = yo,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = ci(i))
              : ((o = So(t) ? Eo : go.current), (i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? bo(e, o) : yo)),
            (t = new t(n, i)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Si),
            (e.stateNode = t),
            (t._reactInternalFiber = e),
            r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Ti(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Si.enqueueReplaceState(t, t.state, null);
        }
        function xi(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Ei), di(e);
          var i = t.contextType;
          "object" === typeof i && null !== i ? (o.context = ci(i)) : ((i = So(t) ? Eo : go.current), (o.context = bo(e, i))),
            yi(e, n, o, r),
            (o.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) && (bi(e, t, i, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount && o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && Si.enqueueReplaceState(o, o.state, null),
              yi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.effectTag |= 4);
        }
        var Ii = Array.isArray;
        function Ci(e, t, n) {
          if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = "" + e;
              return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === Ei && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ni(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(
                31,
                "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t,
                ""
              )
            );
        }
        function Oi(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.effectTag = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Hu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.effectTag = 2), n) : r) : ((t.effectTag = 2), n)) : n
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.effectTag = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? (((t = Yu(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = Ci(e, t, n)), (r.return = e), r)
              : (((r = Wu(n.type, n.key, n.props, null, e.mode, r)).ref = Ci(e, t, n)), (r.return = e), r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = qu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag ? (((t = zu(n, e.mode, r, i)).return = e), t) : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" === typeof t || "number" === typeof t) return ((t = Yu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case ee:
                  return ((n = Wu(t.type, t.key, t.props, null, e.mode, n)).ref = Ci(e, null, t)), (n.return = e), n;
                case te:
                  return ((t = qu(t, e.mode, n)).return = e), t;
              }
              if (Ii(t) || me(t)) return ((t = zu(t, e.mode, n, null)).return = e), t;
              Ni(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n) return null !== o ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case ee:
                  return n.key === o ? (n.type === ne ? f(e, t, n.props.children, r, o) : l(e, t, n, r)) : null;
                case te:
                  return n.key === o ? c(e, t, n, r) : null;
              }
              if (Ii(n) || me(n)) return null !== o ? null : f(e, t, n, r, null);
              Ni(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if ("string" === typeof r || "number" === typeof r) return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case ee:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null), r.type === ne ? f(t, e, r.props.children, o, r.key) : l(t, e, r, o)
                  );
                case te:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
              }
              if (Ii(r) || me(r)) return f(t, (e = e.get(n) || null), r, o, null);
              Ni(t, r);
            }
            return null;
          }
          function m(o, a, s, u) {
            for (var l = null, c = null, f = a, m = (a = 0), v = null; null !== f && m < s.length; m++) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var y = p(o, f, s[m], u);
              if (null === y) {
                null === f && (f = v);
                break;
              }
              e && f && null === y.alternate && t(o, f), (a = i(y, a, m)), null === c ? (l = y) : (c.sibling = y), (c = y), (f = v);
            }
            if (m === s.length) return n(o, f), l;
            if (null === f) {
              for (; m < s.length; m++) null !== (f = d(o, s[m], u)) && ((a = i(f, a, m)), null === c ? (l = f) : (c.sibling = f), (c = f));
              return l;
            }
            for (f = r(o, f); m < s.length; m++)
              null !== (v = h(f, o, m, s[m], u)) &&
                (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
                (a = i(v, a, m)),
                null === c ? (l = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              l
            );
          }
          function v(o, s, u, l) {
            var c = me(u);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (var f = (c = null), m = s, v = (s = 0), y = null, g = u.next(); null !== m && !g.done; v++, g = u.next()) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var _ = p(o, m, g.value, l);
              if (null === _) {
                null === m && (m = y);
                break;
              }
              e && m && null === _.alternate && t(o, m), (s = i(_, s, v)), null === f ? (c = _) : (f.sibling = _), (f = _), (m = y);
            }
            if (g.done) return n(o, m), c;
            if (null === m) {
              for (; !g.done; v++, g = u.next())
                null !== (g = d(o, g.value, l)) && ((s = i(g, s, v)), null === f ? (c = g) : (f.sibling = g), (f = g));
              return c;
            }
            for (m = r(o, m); !g.done; v++, g = u.next())
              null !== (g = h(m, o, v, g.value, l)) &&
                (e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
                (s = i(g, s, v)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          return function (e, r, i, u) {
            var l = "object" === typeof i && null !== i && i.type === ne && null === i.key;
            l && (i = i.props.children);
            var c = "object" === typeof i && null !== i;
            if (c)
              switch (i.$$typeof) {
                case ee:
                  e: {
                    for (c = i.key, l = r; null !== l; ) {
                      if (l.key === c) {
                        if (7 === l.tag) {
                          if (i.type === ne) {
                            n(e, l.sibling), ((r = o(l, i.props.children)).return = e), (e = r);
                            break e;
                          }
                        } else if (l.elementType === i.type) {
                          n(e, l.sibling), ((r = o(l, i.props)).ref = Ci(e, l, i)), (r.return = e), (e = r);
                          break e;
                        }
                        n(e, l);
                        break;
                      }
                      t(e, l), (l = l.sibling);
                    }
                    i.type === ne
                      ? (((r = zu(i.props.children, e.mode, u, i.key)).return = e), (e = r))
                      : (((u = Wu(i.type, i.key, i.props, null, e.mode, u)).ref = Ci(e, r, i)), (u.return = e), (e = u));
                  }
                  return s(e);
                case te:
                  e: {
                    for (l = i.key; null !== r; ) {
                      if (r.key === l) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling), ((r = o(r, i.children || [])).return = e), (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = qu(i, e.mode, u)).return = e), (e = r);
                  }
                  return s(e);
              }
            if ("string" === typeof i || "number" === typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = Yu(i, e.mode, u)).return = e), (e = r)),
                s(e)
              );
            if (Ii(i)) return m(e, r, i, u);
            if (me(i)) return v(e, r, i, u);
            if ((c && Ni(e, i), "undefined" === typeof i && !l))
              switch (e.tag) {
                case 1:
                case 0:
                  throw ((e = e.type), Error(a(152, e.displayName || e.name || "Component")));
              }
            return n(e, r);
          };
        }
        var Pi = Oi(!0),
          Ri = Oi(!1),
          ki = {},
          Li = { current: ki },
          Di = { current: ki },
          Mi = { current: ki };
        function Fi(e) {
          if (e === ki) throw Error(a(174));
          return e;
        }
        function Bi(e, t) {
          switch ((vo(Mi, t), vo(Di, e), vo(Li, ki), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : Fe(null, "");
              break;
            default:
              t = Fe((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          mo(Li), vo(Li, t);
        }
        function Ui() {
          mo(Li), mo(Di), mo(Mi);
        }
        function ji(e) {
          Fi(Mi.current);
          var t = Fi(Li.current),
            n = Fe(t, e.type);
          t !== n && (vo(Di, e), vo(Li, n));
        }
        function Gi(e) {
          Di.current === e && (mo(Li), mo(Di));
        }
        var Vi = { current: 0 };
        function Hi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || n.data === _n || n.data === En)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.effectTag)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        function Wi(e, t) {
          return { responder: e, props: t };
        }
        var zi = X.ReactCurrentDispatcher,
          Yi = X.ReactCurrentBatchConfig,
          qi = 0,
          Ki = null,
          $i = null,
          Xi = null,
          Qi = !1;
        function Zi() {
          throw Error(a(321));
        }
        function Ji(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!Hr(e[n], t[n])) return !1;
          return !0;
        }
        function ea(e, t, n, r, o, i) {
          if (
            ((qi = i),
            (Ki = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.expirationTime = 0),
            (zi.current = null === e || null === e.memoizedState ? wa : Aa),
            (e = n(r, o)),
            t.expirationTime === qi)
          ) {
            i = 0;
            do {
              if (((t.expirationTime = 0), !(25 > i))) throw Error(a(301));
              (i += 1), (Xi = $i = null), (t.updateQueue = null), (zi.current = Ta), (e = n(r, o));
            } while (t.expirationTime === qi);
          }
          if (((zi.current = Sa), (t = null !== $i && null !== $i.next), (qi = 0), (Xi = $i = Ki = null), (Qi = !1), t))
            throw Error(a(300));
          return e;
        }
        function ta() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === Xi ? (Ki.memoizedState = Xi = e) : (Xi = Xi.next = e), Xi;
        }
        function na() {
          if (null === $i) {
            var e = Ki.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = $i.next;
          var t = null === Xi ? Ki.memoizedState : Xi.next;
          if (null !== t) (Xi = t), ($i = e);
          else {
            if (null === e) throw Error(a(310));
            (e = { memoizedState: ($i = e).memoizedState, baseState: $i.baseState, baseQueue: $i.baseQueue, queue: $i.queue, next: null }),
              null === Xi ? (Ki.memoizedState = Xi = e) : (Xi = Xi.next = e);
          }
          return Xi;
        }
        function ra(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function oa(e) {
          var t = na(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = $i,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var u = (s = i = null),
              l = o;
            do {
              var c = l.expirationTime;
              if (c < qi) {
                var f = {
                  expirationTime: l.expirationTime,
                  suspenseConfig: l.suspenseConfig,
                  action: l.action,
                  eagerReducer: l.eagerReducer,
                  eagerState: l.eagerState,
                  next: null
                };
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f), c > Ki.expirationTime && ((Ki.expirationTime = c), wu(c));
              } else
                null !== u &&
                  (u = u.next =
                    {
                      expirationTime: 1073741823,
                      suspenseConfig: l.suspenseConfig,
                      action: l.action,
                      eagerReducer: l.eagerReducer,
                      eagerState: l.eagerState,
                      next: null
                    }),
                  Su(c, l.suspenseConfig),
                  (r = l.eagerReducer === e ? l.eagerState : e(r, l.action));
              l = l.next;
            } while (null !== l && l !== o);
            null === u ? (i = r) : (u.next = s),
              Hr(r, t.memoizedState) || (Ma = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function ia(e) {
          var t = na(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            Hr(i, t.memoizedState) || (Ma = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function aa(e) {
          var t = ta();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: ra, lastRenderedState: e }).dispatch =
              ba.bind(null, Ki, e)),
            [t.memoizedState, e]
          );
        }
        function sa(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Ki.updateQueue)
              ? ((t = { lastEffect: null }), (Ki.updateQueue = t), (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ua() {
          return na().memoizedState;
        }
        function la(e, t, n, r) {
          var o = ta();
          (Ki.effectTag |= e), (o.memoizedState = sa(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function ca(e, t, n, r) {
          var o = na();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== $i) {
            var a = $i.memoizedState;
            if (((i = a.destroy), null !== r && Ji(r, a.deps))) return void sa(t, n, i, r);
          }
          (Ki.effectTag |= e), (o.memoizedState = sa(1 | t, n, i, r));
        }
        function fa(e, t) {
          return la(516, 4, e, t);
        }
        function da(e, t) {
          return ca(516, 4, e, t);
        }
        function pa(e, t) {
          return ca(4, 2, e, t);
        }
        function ha(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ma(e, t, n) {
          return (n = null !== n && void 0 !== n ? n.concat([e]) : null), ca(4, 2, ha.bind(null, t, e), n);
        }
        function va() {}
        function ya(e, t) {
          return (ta().memoizedState = [e, void 0 === t ? null : t]), e;
        }
        function ga(e, t) {
          var n = na();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ji(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function _a(e, t) {
          var n = na();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ji(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ea(e, t, n) {
          var r = qo();
          $o(98 > r ? 98 : r, function () {
            e(!0);
          }),
            $o(97 < r ? 97 : r, function () {
              var r = Yi.suspense;
              Yi.suspense = void 0 === t ? null : t;
              try {
                e(!1), n();
              } finally {
                Yi.suspense = r;
              }
            });
        }
        function ba(e, t, n) {
          var r = lu(),
            o = _i.suspense;
          o = { expirationTime: (r = cu(r, e, o)), suspenseConfig: o, action: n, eagerReducer: null, eagerState: null, next: null };
          var i = t.pending;
          if (
            (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
            (t.pending = o),
            (i = e.alternate),
            e === Ki || (null !== i && i === Ki))
          )
            (Qi = !0), (o.expirationTime = qi), (Ki.expirationTime = qi);
          else {
            if (0 === e.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = t.lastRenderedReducer))
              try {
                var a = t.lastRenderedState,
                  s = i(a, n);
                if (((o.eagerReducer = i), (o.eagerState = s), Hr(s, a))) return;
              } catch (u) {}
            fu(e, r);
          }
        }
        var Sa = {
            readContext: ci,
            useCallback: Zi,
            useContext: Zi,
            useEffect: Zi,
            useImperativeHandle: Zi,
            useLayoutEffect: Zi,
            useMemo: Zi,
            useReducer: Zi,
            useRef: Zi,
            useState: Zi,
            useDebugValue: Zi,
            useResponder: Zi,
            useDeferredValue: Zi,
            useTransition: Zi
          },
          wa = {
            readContext: ci,
            useCallback: ya,
            useContext: ci,
            useEffect: fa,
            useImperativeHandle: function (e, t, n) {
              return (n = null !== n && void 0 !== n ? n.concat([e]) : null), la(4, 2, ha.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return la(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ta();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = ta();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
                  ba.bind(null, Ki, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (ta().memoizedState = e);
            },
            useState: aa,
            useDebugValue: va,
            useResponder: Wi,
            useDeferredValue: function (e, t) {
              var n = aa(e),
                r = n[0],
                o = n[1];
              return (
                fa(
                  function () {
                    var n = Yi.suspense;
                    Yi.suspense = void 0 === t ? null : t;
                    try {
                      o(e);
                    } finally {
                      Yi.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = aa(!1),
                n = t[0];
              return (t = t[1]), [ya(Ea.bind(null, t, e), [t, e]), n];
            }
          },
          Aa = {
            readContext: ci,
            useCallback: ga,
            useContext: ci,
            useEffect: da,
            useImperativeHandle: ma,
            useLayoutEffect: pa,
            useMemo: _a,
            useReducer: oa,
            useRef: ua,
            useState: function () {
              return oa(ra);
            },
            useDebugValue: va,
            useResponder: Wi,
            useDeferredValue: function (e, t) {
              var n = oa(ra),
                r = n[0],
                o = n[1];
              return (
                da(
                  function () {
                    var n = Yi.suspense;
                    Yi.suspense = void 0 === t ? null : t;
                    try {
                      o(e);
                    } finally {
                      Yi.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = oa(ra),
                n = t[0];
              return (t = t[1]), [ga(Ea.bind(null, t, e), [t, e]), n];
            }
          },
          Ta = {
            readContext: ci,
            useCallback: ga,
            useContext: ci,
            useEffect: da,
            useImperativeHandle: ma,
            useLayoutEffect: pa,
            useMemo: _a,
            useReducer: ia,
            useRef: ua,
            useState: function () {
              return ia(ra);
            },
            useDebugValue: va,
            useResponder: Wi,
            useDeferredValue: function (e, t) {
              var n = ia(ra),
                r = n[0],
                o = n[1];
              return (
                da(
                  function () {
                    var n = Yi.suspense;
                    Yi.suspense = void 0 === t ? null : t;
                    try {
                      o(e);
                    } finally {
                      Yi.suspense = n;
                    }
                  },
                  [e, t]
                ),
                r
              );
            },
            useTransition: function (e) {
              var t = ia(ra),
                n = t[0];
              return (t = t[1]), [ga(Ea.bind(null, t, e), [t, e]), n];
            }
          },
          xa = null,
          Ia = null,
          Ca = !1;
        function Na(e, t) {
          var n = Gu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.effectTag = 8),
            null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
        }
        function Oa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
            case 6:
              return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
            default:
              return !1;
          }
        }
        function Pa(e) {
          if (Ca) {
            var t = Ia;
            if (t) {
              var n = t;
              if (!Oa(e, t)) {
                if (!(t = In(n.nextSibling)) || !Oa(e, t)) return (e.effectTag = (-1025 & e.effectTag) | 2), (Ca = !1), void (xa = e);
                Na(xa, n);
              }
              (xa = e), (Ia = In(t.firstChild));
            } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ca = !1), (xa = e);
          }
        }
        function Ra(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          xa = e;
        }
        function ka(e) {
          if (e !== xa) return !1;
          if (!Ca) return Ra(e), (Ca = !0), !1;
          var t = e.type;
          if (5 !== e.tag || ("head" !== t && "body" !== t && !An(t, e.memoizedProps))) for (t = Ia; t; ) Na(e, t), (t = In(t.nextSibling));
          if ((Ra(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if (n === gn) {
                    if (0 === t) {
                      Ia = In(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else (n !== yn && n !== En && n !== _n) || t++;
                }
                e = e.nextSibling;
              }
              Ia = null;
            }
          } else Ia = xa ? In(e.stateNode.nextSibling) : null;
          return !0;
        }
        function La() {
          (Ia = xa = null), (Ca = !1);
        }
        var Da = X.ReactCurrentOwner,
          Ma = !1;
        function Fa(e, t, n, r) {
          t.child = null === e ? Ri(t, null, n, r) : Pi(t, e.child, n, r);
        }
        function Ba(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            li(t, o),
            (r = ea(e, t, n, r, i, o)),
            null === e || Ma
              ? ((t.effectTag |= 1), Fa(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= o && (e.expirationTime = 0), ts(e, t, o))
          );
        }
        function Ua(e, t, n, r, o, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a || Vu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps
              ? (((e = Wu(n.type, null, r, null, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = a), ja(e, t, a, r, o, i));
          }
          return (
            (a = e.child),
            o < i && ((o = a.memoizedProps), (n = null !== (n = n.compare) ? n : zr)(o, r) && e.ref === t.ref)
              ? ts(e, t, i)
              : ((t.effectTag |= 1), ((e = Hu(a, r)).ref = t.ref), (e.return = t), (t.child = e))
          );
        }
        function ja(e, t, n, r, o, i) {
          return null !== e && zr(e.memoizedProps, r) && e.ref === t.ref && ((Ma = !1), o < i)
            ? ((t.expirationTime = e.expirationTime), ts(e, t, i))
            : Va(e, t, n, r, i);
        }
        function Ga(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
        }
        function Va(e, t, n, r, o) {
          var i = So(n) ? Eo : go.current;
          return (
            (i = bo(t, i)),
            li(t, o),
            (n = ea(e, t, n, r, i, o)),
            null === e || Ma
              ? ((t.effectTag |= 1), Fa(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= o && (e.expirationTime = 0), ts(e, t, o))
          );
        }
        function Ha(e, t, n, r, o) {
          if (So(n)) {
            var i = !0;
            xo(t);
          } else i = !1;
          if ((li(t, o), null === t.stateNode))
            null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), Ai(t, n, r), xi(t, n, r, o), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              s = t.memoizedProps;
            a.props = s;
            var u = a.context,
              l = n.contextType;
            "object" === typeof l && null !== l ? (l = ci(l)) : (l = bo(t, (l = So(n) ? Eo : go.current)));
            var c = n.getDerivedStateFromProps,
              f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== r || u !== l) && Ti(t, a, r, l)),
              (fi = !1);
            var d = t.memoizedState;
            (a.state = d),
              yi(t, r, a, o),
              (u = t.memoizedState),
              s !== r || d !== u || _o.current || fi
                ? ("function" === typeof c && (bi(t, n, c, r), (u = t.memoizedState)),
                  (s = fi || wi(t, n, s, r, d, u, l))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount && a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount && (t.effectTag |= 4))
                    : ("function" === typeof a.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = r), (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = l),
                  (r = s))
                : ("function" === typeof a.componentDidMount && (t.effectTag |= 4), (r = !1));
          } else
            (a = t.stateNode),
              pi(e, t),
              (s = t.memoizedProps),
              (a.props = t.type === t.elementType ? s : ti(t.type, s)),
              (u = a.context),
              "object" === typeof (l = n.contextType) && null !== l ? (l = ci(l)) : (l = bo(t, (l = So(n) ? Eo : go.current))),
              (f = "function" === typeof (c = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps) ||
                ((s !== r || u !== l) && Ti(t, a, r, l)),
              (fi = !1),
              (u = t.memoizedState),
              (a.state = u),
              yi(t, r, a, o),
              (d = t.memoizedState),
              s !== r || u !== d || _o.current || fi
                ? ("function" === typeof c && (bi(t, n, c, r), (d = t.memoizedState)),
                  (c = fi || wi(t, n, s, r, u, d, l))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate) ||
                        ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, d, l),
                        "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, l)),
                      "function" === typeof a.componentDidUpdate && (t.effectTag |= 4),
                      "function" === typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                    : ("function" !== typeof a.componentDidUpdate || (s === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                      "function" !== typeof a.getSnapshotBeforeUpdate ||
                        (s === e.memoizedProps && u === e.memoizedState) ||
                        (t.effectTag |= 256),
                      (t.memoizedProps = r),
                      (t.memoizedState = d)),
                  (a.props = r),
                  (a.state = d),
                  (a.context = l),
                  (r = c))
                : ("function" !== typeof a.componentDidUpdate || (s === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4),
                  "function" !== typeof a.getSnapshotBeforeUpdate ||
                    (s === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (r = !1));
          return Wa(e, t, n, r, i, o);
        }
        function Wa(e, t, n, r, o, i) {
          Ga(e, t);
          var a = 0 !== (64 & t.effectTag);
          if (!r && !a) return o && Io(t, n, !1), ts(e, t, i);
          (r = t.stateNode), (Da.current = t);
          var s = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.effectTag |= 1),
            null !== e && a ? ((t.child = Pi(t, e.child, null, i)), (t.child = Pi(t, null, s, i))) : Fa(e, t, s, i),
            (t.memoizedState = r.state),
            o && Io(t, n, !0),
            t.child
          );
        }
        function za(e) {
          var t = e.stateNode;
          t.pendingContext ? Ao(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ao(0, t.context, !1),
            Bi(e, t.containerInfo);
        }
        var Ya,
          qa,
          Ka,
          $a,
          Xa = { dehydrated: null, retryTime: 0 };
        function Qa(e, t, n) {
          var r,
            o = t.mode,
            i = t.pendingProps,
            a = Vi.current,
            s = !1;
          if (
            ((r = 0 !== (64 & t.effectTag)) || (r = 0 !== (2 & a) && (null === e || null !== e.memoizedState)),
            r
              ? ((s = !0), (t.effectTag &= -65))
              : (null !== e && null === e.memoizedState) || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (a |= 1),
            vo(Vi, 1 & a),
            null === e)
          ) {
            if ((void 0 !== i.fallback && Pa(t), s)) {
              if (((s = i.fallback), ((i = zu(null, o, 0, null)).return = t), 0 === (2 & t.mode)))
                for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e; ) (e.return = i), (e = e.sibling);
              return ((n = zu(s, o, n, null)).return = t), (i.sibling = n), (t.memoizedState = Xa), (t.child = i), n;
            }
            return (o = i.children), (t.memoizedState = null), (t.child = Ri(t, null, o, n));
          }
          if (null !== e.memoizedState) {
            if (((o = (e = e.child).sibling), s)) {
              if (
                ((i = i.fallback),
                ((n = Hu(e, e.pendingProps)).return = t),
                0 === (2 & t.mode) && (s = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
              )
                for (n.child = s; null !== s; ) (s.return = n), (s = s.sibling);
              return ((o = Hu(o, i)).return = t), (n.sibling = o), (n.childExpirationTime = 0), (t.memoizedState = Xa), (t.child = n), o;
            }
            return (n = Pi(t, e.child, i.children, n)), (t.memoizedState = null), (t.child = n);
          }
          if (((e = e.child), s)) {
            if (
              ((s = i.fallback), ((i = zu(null, o, 0, null)).return = t), (i.child = e), null !== e && (e.return = i), 0 === (2 & t.mode))
            )
              for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e; ) (e.return = i), (e = e.sibling);
            return (
              ((n = zu(s, o, n, null)).return = t),
              (i.sibling = n),
              (n.effectTag |= 2),
              (i.childExpirationTime = 0),
              (t.memoizedState = Xa),
              (t.child = i),
              n
            );
          }
          return (t.memoizedState = null), (t.child = Pi(t, e, i.children, n));
        }
        function Za(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t), ui(e.return, t);
        }
        function Ja(e, t, n, r, o, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailExpiration: 0,
                tailMode: o,
                lastEffect: i
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailExpiration = 0),
              (a.tailMode = o),
              (a.lastEffect = i));
        }
        function es(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Fa(e, t, r.children, n), 0 !== (2 & (r = Vi.current)))) (r = (1 & r) | 2), (t.effectTag |= 64);
          else {
            if (null !== e && 0 !== (64 & e.effectTag))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Za(e, n);
                else if (19 === e.tag) Za(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((vo(Vi, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; ) null !== (e = n.alternate) && null === Hi(e) && (o = n), (n = n.sibling);
                null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                  Ja(t, !1, o, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Hi(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ja(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                Ja(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ts(e, t, n) {
          null !== e && (t.dependencies = e.dependencies);
          var r = t.expirationTime;
          if ((0 !== r && wu(r), t.childExpirationTime < n)) return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (n = Hu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
              (e = e.sibling), ((n = n.sibling = Hu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ns(e, t) {
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
              null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
          }
        }
        function rs(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return So(t.type) && wo(), null;
            case 3:
              return (
                Ui(),
                mo(_o),
                mo(go),
                (n = t.stateNode).pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) || !ka(t) || (t.effectTag |= 4),
                qa(t),
                null
              );
            case 5:
              Gi(t), (n = Fi(Mi.current));
              var i = t.type;
              if (null !== e && null != t.stateNode) Ka(e, t, i, r, n), e.ref !== t.ref && (t.effectTag |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return null;
                }
                if (((e = Fi(Li.current)), ka(t))) {
                  (r = t.stateNode), (i = t.type);
                  var s = t.memoizedProps;
                  switch (((r[On] = t), (r[Pn] = s), i)) {
                    case "iframe":
                    case "object":
                    case "embed":
                      Kt("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Qe.length; e++) Kt(Qe[e], r);
                      break;
                    case "source":
                      Kt("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Kt("error", r), Kt("load", r);
                      break;
                    case "form":
                      Kt("reset", r), Kt("submit", r);
                      break;
                    case "details":
                      Kt("toggle", r);
                      break;
                    case "input":
                      we(r, s), Kt("invalid", r), ln(n, "onChange");
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!s.multiple }), Kt("invalid", r), ln(n, "onChange");
                      break;
                    case "textarea":
                      Pe(r, s), Kt("invalid", r), ln(n, "onChange");
                  }
                  for (var u in (an(i, s), (e = null), s))
                    if (s.hasOwnProperty(u)) {
                      var l = s[u];
                      "children" === u
                        ? "string" === typeof l
                          ? r.textContent !== l && (e = ["children", l])
                          : "number" === typeof l && r.textContent !== "" + l && (e = ["children", "" + l])
                        : A.hasOwnProperty(u) && null != l && ln(n, u);
                    }
                  switch (i) {
                    case "input":
                      Ee(r), xe(r, s, !0);
                      break;
                    case "textarea":
                      Ee(r), ke(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof s.onClick && (r.onclick = cn);
                  }
                  (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
                } else {
                  switch (
                    ((u = 9 === n.nodeType ? n : n.ownerDocument),
                    e === un && (e = Me(i)),
                    e === un
                      ? "script" === i
                        ? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(i, { is: r.is }))
                        : ((e = u.createElement(i)),
                          "select" === i && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, i)),
                    (e[On] = t),
                    (e[Pn] = r),
                    Ya(e, t, !1, !1),
                    (t.stateNode = e),
                    (u = sn(i, r)),
                    i)
                  ) {
                    case "iframe":
                    case "object":
                    case "embed":
                      Kt("load", e), (l = r);
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < Qe.length; l++) Kt(Qe[l], e);
                      l = r;
                      break;
                    case "source":
                      Kt("error", e), (l = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Kt("error", e), Kt("load", e), (l = r);
                      break;
                    case "form":
                      Kt("reset", e), Kt("submit", e), (l = r);
                      break;
                    case "details":
                      Kt("toggle", e), (l = r);
                      break;
                    case "input":
                      we(e, r), (l = Se(e, r)), Kt("invalid", e), ln(n, "onChange");
                      break;
                    case "option":
                      l = Ce(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (l = o({}, r, { value: void 0 })),
                        Kt("invalid", e),
                        ln(n, "onChange");
                      break;
                    case "textarea":
                      Pe(e, r), (l = Oe(e, r)), Kt("invalid", e), ln(n, "onChange");
                      break;
                    default:
                      l = r;
                  }
                  an(i, l);
                  var c = l;
                  for (s in c)
                    if (c.hasOwnProperty(s)) {
                      var f = c[s];
                      "style" === s
                        ? rn(e, f)
                        : "dangerouslySetInnerHTML" === s
                        ? null != (f = f ? f.__html : void 0) && je(e, f)
                        : "children" === s
                        ? "string" === typeof f
                          ? ("textarea" !== i || "" !== f) && Ge(e, f)
                          : "number" === typeof f && Ge(e, "" + f)
                        : "suppressContentEditableWarning" !== s &&
                          "suppressHydrationWarning" !== s &&
                          "autoFocus" !== s &&
                          (A.hasOwnProperty(s) ? null != f && ln(n, s) : null != f && Q(e, s, f, u));
                    }
                  switch (i) {
                    case "input":
                      Ee(e), xe(e, r, !1);
                      break;
                    case "textarea":
                      Ee(e), ke(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + ge(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (n = r.value)
                          ? Ne(e, !!r.multiple, n, !1)
                          : null != r.defaultValue && Ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof l.onClick && (e.onclick = cn);
                  }
                  wn(i, r) && (t.effectTag |= 4);
                }
                null !== t.ref && (t.effectTag |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) $a(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode) throw Error(a(166));
                (n = Fi(Mi.current)),
                  Fi(Li.current),
                  ka(t)
                    ? ((n = t.stateNode), (r = t.memoizedProps), (n[On] = t), n.nodeValue !== r && (t.effectTag |= 4))
                    : (((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[On] = t), (t.stateNode = n));
              }
              return null;
            case 13:
              return (
                mo(Vi),
                (r = t.memoizedState),
                0 !== (64 & t.effectTag)
                  ? ((t.expirationTime = n), t)
                  : ((n = null !== r),
                    (r = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && ka(t)
                      : ((r = null !== (i = e.memoizedState)),
                        n ||
                          null === i ||
                          (null !== (i = e.child.sibling) &&
                            (null !== (s = t.firstEffect)
                              ? ((t.firstEffect = i), (i.nextEffect = s))
                              : ((t.firstEffect = t.lastEffect = i), (i.nextEffect = null)),
                            (i.effectTag = 8)))),
                    n &&
                      !r &&
                      0 !== (2 & t.mode) &&
                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & Vi.current)
                        ? Hs === ks && (Hs = Ms)
                        : ((Hs !== ks && Hs !== Ms) || (Hs = Fs), 0 !== Ks && null !== js && (Xu(js, Vs), Qu(js, Ks)))),
                    (n || r) && (t.effectTag |= 4),
                    null)
              );
            case 4:
              return Ui(), qa(t), null;
            case 10:
              return si(t), null;
            case 19:
              if ((mo(Vi), null === (r = t.memoizedState))) return null;
              if (((i = 0 !== (64 & t.effectTag)), null === (s = r.rendering))) {
                if (i) ns(r, !1);
                else if (Hs !== ks || (null !== e && 0 !== (64 & e.effectTag)))
                  for (s = t.child; null !== s; ) {
                    if (null !== (e = Hi(s))) {
                      for (
                        t.effectTag |= 64,
                          ns(r, !1),
                          null !== (i = e.updateQueue) && ((t.updateQueue = i), (t.effectTag |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = t.child;
                        null !== r;

                      )
                        (s = n),
                          ((i = r).effectTag &= 2),
                          (i.nextEffect = null),
                          (i.firstEffect = null),
                          (i.lastEffect = null),
                          null === (e = i.alternate)
                            ? ((i.childExpirationTime = 0),
                              (i.expirationTime = s),
                              (i.child = null),
                              (i.memoizedProps = null),
                              (i.memoizedState = null),
                              (i.updateQueue = null),
                              (i.dependencies = null))
                            : ((i.childExpirationTime = e.childExpirationTime),
                              (i.expirationTime = e.expirationTime),
                              (i.child = e.child),
                              (i.memoizedProps = e.memoizedProps),
                              (i.memoizedState = e.memoizedState),
                              (i.updateQueue = e.updateQueue),
                              (s = e.dependencies),
                              (i.dependencies =
                                null === s
                                  ? null
                                  : { expirationTime: s.expirationTime, firstContext: s.firstContext, responders: s.responders })),
                          (r = r.sibling);
                      return vo(Vi, (1 & Vi.current) | 2), t.child;
                    }
                    s = s.sibling;
                  }
              } else {
                if (!i)
                  if (null !== (e = Hi(s))) {
                    if (
                      ((t.effectTag |= 64),
                      (i = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.effectTag |= 4)),
                      ns(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !s.alternate)
                    )
                      return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                  } else
                    2 * Yo() - r.renderingStartTime > r.tailExpiration &&
                      1 < n &&
                      ((t.effectTag |= 64), (i = !0), ns(r, !1), (t.expirationTime = t.childExpirationTime = n - 1));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s), (r.last = s));
              }
              return null !== r.tail
                ? (0 === r.tailExpiration && (r.tailExpiration = Yo() + 500),
                  (n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Yo()),
                  (n.sibling = null),
                  (t = Vi.current),
                  vo(Vi, i ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
          }
          throw Error(a(156, t.tag));
        }
        function os(e) {
          switch (e.tag) {
            case 1:
              So(e.type) && wo();
              var t = e.effectTag;
              return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ui(), mo(_o), mo(go), 0 !== (64 & (t = e.effectTag)))) throw Error(a(285));
              return (e.effectTag = (-4097 & t) | 64), e;
            case 5:
              return Gi(e), null;
            case 13:
              return mo(Vi), 4096 & (t = e.effectTag) ? ((e.effectTag = (-4097 & t) | 64), e) : null;
            case 19:
              return mo(Vi), null;
            case 4:
              return Ui(), null;
            case 10:
              return si(e), null;
            default:
              return null;
          }
        }
        function is(e, t) {
          return { value: e, source: t, stack: ye(t) };
        }
        (Ya = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (qa = function () {}),
          (Ka = function (e, t, n, r, i) {
            var a = e.memoizedProps;
            if (a !== r) {
              var s,
                u,
                l = t.stateNode;
              switch ((Fi(Li.current), (e = null), n)) {
                case "input":
                  (a = Se(l, a)), (r = Se(l, r)), (e = []);
                  break;
                case "option":
                  (a = Ce(l, a)), (r = Ce(l, r)), (e = []);
                  break;
                case "select":
                  (a = o({}, a, { value: void 0 })), (r = o({}, r, { value: void 0 })), (e = []);
                  break;
                case "textarea":
                  (a = Oe(l, a)), (r = Oe(l, r)), (e = []);
                  break;
                default:
                  "function" !== typeof a.onClick && "function" === typeof r.onClick && (l.onclick = cn);
              }
              for (s in (an(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) for (u in (l = a[s])) l.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
                  else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (A.hasOwnProperty(s) ? e || (e = []) : (e = e || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (((l = null != a ? a[s] : void 0), r.hasOwnProperty(s) && c !== l && (null != c || null != l)))
                  if ("style" === s)
                    if (l) {
                      for (u in l) !l.hasOwnProperty(u) || (c && c.hasOwnProperty(u)) || (n || (n = {}), (n[u] = ""));
                      for (u in c) c.hasOwnProperty(u) && l[u] !== c[u] && (n || (n = {}), (n[u] = c[u]));
                    } else n || (e || (e = []), e.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0), (l = l ? l.__html : void 0), null != c && l !== c && (e = e || []).push(s, c))
                      : "children" === s
                      ? l === c || ("string" !== typeof c && "number" !== typeof c) || (e = e || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (A.hasOwnProperty(s) ? (null != c && ln(i, s), e || l === c || (e = [])) : (e = e || []).push(s, c));
              }
              n && (e = e || []).push("style", n), (i = e), (t.updateQueue = i) && (t.effectTag |= 4);
            }
          }),
          ($a = function (e, t, n, r) {
            n !== r && (t.effectTag |= 4);
          });
        var as = "function" === typeof WeakSet ? WeakSet : Set;
        function ss(e, t) {
          var n = t.source,
            r = t.stack;
          null === r && null !== n && (r = ye(n)), null !== n && ve(n.type), (t = t.value), null !== e && 1 === e.tag && ve(e.type);
          try {
            console.error(t);
          } catch (o) {
            setTimeout(function () {
              throw o;
            });
          }
        }
        function us(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Du(e, n);
              }
            else t.current = null;
        }
        function ls(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.effectTag && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ti(t.type, n), r)),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
          }
          throw Error(a(163));
        }
        function cs(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.destroy;
                (n.destroy = void 0), void 0 !== r && r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function fs(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ds(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              return void fs(3, n);
            case 1:
              if (((e = n.stateNode), 4 & n.effectTag))
                if (null === t) e.componentDidMount();
                else {
                  var r = n.elementType === n.type ? t.memoizedProps : ti(n.type, t.memoizedProps);
                  e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
                }
              return void (null !== (t = n.updateQueue) && gi(n, t, e));
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                gi(n, t, e);
              }
              return;
            case 5:
              return (e = n.stateNode), void (null === t && 4 & n.effectTag && wn(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate), null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && Ft(n))))
              );
          }
          throw Error(a(163));
        }
        function ps(e, t, n) {
          switch (("function" === typeof Uu && Uu(t), t.tag)) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = e.next;
                $o(97 < n ? 97 : n, function () {
                  var e = r;
                  do {
                    var n = e.destroy;
                    if (void 0 !== n) {
                      var o = t;
                      try {
                        n();
                      } catch (i) {
                        Du(o, i);
                      }
                    }
                    e = e.next;
                  } while (e !== r);
                });
              }
              break;
            case 1:
              us(t),
                "function" === typeof (n = t.stateNode).componentWillUnmount &&
                  (function (e, t) {
                    try {
                      (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                    } catch (n) {
                      Du(e, n);
                    }
                  })(t, n);
              break;
            case 5:
              us(t);
              break;
            case 4:
              _s(e, t, n);
          }
        }
        function hs(e) {
          var t = e.alternate;
          (e.return = null),
            (e.child = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.alternate = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.pendingProps = null),
            (e.memoizedProps = null),
            (e.stateNode = null),
            null !== t && hs(t);
        }
        function ms(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function vs(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (ms(t)) {
                var n = t;
                break e;
              }
              t = t.return;
            }
            throw Error(a(160));
          }
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & n.effectTag && (Ge(t, ""), (n.effectTag &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || ms(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
              if (2 & n.effectTag) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.effectTag)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? ys(e, n, t) : gs(e, n, t);
        }
        function ys(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = cn));
          else if (4 !== r && null !== (e = e.child)) for (ys(e, t, n), e = e.sibling; null !== e; ) ys(e, t, n), (e = e.sibling);
        }
        function gs(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o) (e = o ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child)) for (gs(e, t, n), e = e.sibling; null !== e; ) gs(e, t, n), (e = e.sibling);
        }
        function _s(e, t, n) {
          for (var r, o, i = t, s = !1; ; ) {
            if (!s) {
              s = i.return;
              e: for (;;) {
                if (null === s) throw Error(a(160));
                switch (((r = s.stateNode), s.tag)) {
                  case 5:
                    o = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (o = !0);
                    break e;
                }
                s = s.return;
              }
              s = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var u = e, l = i, c = n, f = l; ; )
                if ((ps(u, f, c), null !== f.child && 4 !== f.tag)) (f.child.return = f), (f = f.child);
                else {
                  if (f === l) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === l) break e;
                    f = f.return;
                  }
                  (f.sibling.return = f.return), (f = f.sibling);
                }
              o
                ? ((u = r), (l = i.stateNode), 8 === u.nodeType ? u.parentNode.removeChild(l) : u.removeChild(l))
                : r.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (r = i.stateNode.containerInfo), (o = !0), (i.child.return = i), (i = i.child);
                continue;
              }
            } else if ((ps(e, i, n), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (s = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Es(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              return void cs(3, t);
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              var n = t.stateNode;
              if (null != n) {
                var r = t.memoizedProps,
                  o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    n[Pn] = r, "input" === e && "radio" === r.type && null != r.name && Ae(n, r), sn(e, o), t = sn(e, r), o = 0;
                    o < i.length;
                    o += 2
                  ) {
                    var s = i[o],
                      u = i[o + 1];
                    "style" === s ? rn(n, u) : "dangerouslySetInnerHTML" === s ? je(n, u) : "children" === s ? Ge(n, u) : Q(n, s, u, t);
                  }
                  switch (e) {
                    case "input":
                      Te(n, r);
                      break;
                    case "textarea":
                      Re(n, r);
                      break;
                    case "select":
                      (t = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (e = r.value)
                          ? Ne(n, !!r.multiple, e, !1)
                          : t !== !!r.multiple &&
                            (null != r.defaultValue
                              ? Ne(n, !!r.multiple, r.defaultValue, !0)
                              : Ne(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void ((t = t.stateNode).hydrate && ((t.hydrate = !1), Ft(t.containerInfo)));
            case 13:
              if (((n = t), null === t.memoizedState ? (r = !1) : ((r = !0), (n = t.child), (Xs = Yo())), null !== n))
                e: for (e = n; ; ) {
                  if (5 === e.tag)
                    (i = e.stateNode),
                      r
                        ? "function" === typeof (i = i.style).setProperty
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none")
                        : ((i = e.stateNode),
                          (o = void 0 !== (o = e.memoizedProps.style) && null !== o && o.hasOwnProperty("display") ? o.display : null),
                          (i.style.display = nn("display", o)));
                  else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                  else {
                    if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                      ((i = e.child.sibling).return = e), (e = i);
                      continue;
                    }
                    if (null !== e.child) {
                      (e.child.return = e), (e = e.child);
                      continue;
                    }
                  }
                  if (e === n) break;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === n) break e;
                    e = e.return;
                  }
                  (e.sibling.return = e.return), (e = e.sibling);
                }
              return void bs(t);
            case 19:
              return void bs(t);
          }
          throw Error(a(163));
        }
        function bs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new as()),
              t.forEach(function (t) {
                var r = Fu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        var Ss = "function" === typeof WeakMap ? WeakMap : Map;
        function ws(e, t, n) {
          ((n = hi(n, null)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Js || ((Js = !0), (eu = r)), ss(e, t);
            }),
            n
          );
        }
        function As(e, t, n) {
          (n = hi(n, null)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            n.payload = function () {
              return ss(e, t), r(o);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r && (null === tu ? (tu = new Set([this])) : tu.add(this), ss(e, t));
                var n = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== n ? n : "" });
              }),
            n
          );
        }
        var Ts,
          xs = Math.ceil,
          Is = X.ReactCurrentDispatcher,
          Cs = X.ReactCurrentOwner,
          Ns = 0,
          Os = 8,
          Ps = 16,
          Rs = 32,
          ks = 0,
          Ls = 1,
          Ds = 2,
          Ms = 3,
          Fs = 4,
          Bs = 5,
          Us = Ns,
          js = null,
          Gs = null,
          Vs = 0,
          Hs = ks,
          Ws = null,
          zs = 1073741823,
          Ys = 1073741823,
          qs = null,
          Ks = 0,
          $s = !1,
          Xs = 0,
          Qs = 500,
          Zs = null,
          Js = !1,
          eu = null,
          tu = null,
          nu = !1,
          ru = null,
          ou = 90,
          iu = null,
          au = 0,
          su = null,
          uu = 0;
        function lu() {
          return (Us & (Ps | Rs)) !== Ns ? 1073741821 - ((Yo() / 10) | 0) : 0 !== uu ? uu : (uu = 1073741821 - ((Yo() / 10) | 0));
        }
        function cu(e, t, n) {
          if (0 === (2 & (t = t.mode))) return 1073741823;
          var r = qo();
          if (0 === (4 & t)) return 99 === r ? 1073741823 : 1073741822;
          if ((Us & Ps) !== Ns) return Vs;
          if (null !== n) e = ei(e, 0 | n.timeoutMs || 5e3, 250);
          else
            switch (r) {
              case 99:
                e = 1073741823;
                break;
              case 98:
                e = ei(e, 150, 100);
                break;
              case 97:
              case 96:
                e = ei(e, 5e3, 250);
                break;
              case 95:
                e = 2;
                break;
              default:
                throw Error(a(326));
            }
          return null !== js && e === Vs && --e, e;
        }
        function fu(e, t) {
          if (50 < au) throw ((au = 0), (su = null), Error(a(185)));
          if (null !== (e = du(e, t))) {
            var n = qo();
            1073741823 === t ? ((Us & Os) !== Ns && (Us & (Ps | Rs)) === Ns ? vu(e) : (hu(e), Us === Ns && Zo())) : hu(e),
              (4 & Us) === Ns ||
                (98 !== n && 99 !== n) ||
                (null === iu ? (iu = new Map([[e, t]])) : (void 0 === (n = iu.get(e)) || n > t) && iu.set(e, t));
          }
        }
        function du(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var n = e.alternate;
          null !== n && n.expirationTime < t && (n.expirationTime = t);
          var r = e.return,
            o = null;
          if (null === r && 3 === e.tag) o = e.stateNode;
          else
            for (; null !== r; ) {
              if (
                ((n = r.alternate),
                r.childExpirationTime < t && (r.childExpirationTime = t),
                null !== n && n.childExpirationTime < t && (n.childExpirationTime = t),
                null === r.return && 3 === r.tag)
              ) {
                o = r.stateNode;
                break;
              }
              r = r.return;
            }
          return null !== o && (js === o && (wu(t), Hs === Fs && Xu(o, Vs)), Qu(o, t)), o;
        }
        function pu(e) {
          var t = e.lastExpiredTime;
          if (0 !== t) return t;
          if (!$u(e, (t = e.firstPendingTime))) return t;
          var n = e.lastPingedTime;
          return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e;
        }
        function hu(e) {
          if (0 !== e.lastExpiredTime)
            (e.callbackExpirationTime = 1073741823), (e.callbackPriority = 99), (e.callbackNode = Qo(vu.bind(null, e)));
          else {
            var t = pu(e),
              n = e.callbackNode;
            if (0 === t) null !== n && ((e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90));
            else {
              var r = lu();
              if (
                (1073741823 === t
                  ? (r = 99)
                  : 1 === t || 2 === t
                  ? (r = 95)
                  : (r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95),
                null !== n)
              ) {
                var o = e.callbackPriority;
                if (e.callbackExpirationTime === t && o >= r) return;
                n !== Uo && Oo(n);
              }
              (e.callbackExpirationTime = t),
                (e.callbackPriority = r),
                (t = 1073741823 === t ? Qo(vu.bind(null, e)) : Xo(r, mu.bind(null, e), { timeout: 10 * (1073741821 - t) - Yo() })),
                (e.callbackNode = t);
            }
          }
        }
        function mu(e, t) {
          if (((uu = 0), t)) return Zu(e, (t = lu())), hu(e), null;
          var n = pu(e);
          if (0 !== n) {
            if (((t = e.callbackNode), (Us & (Ps | Rs)) !== Ns)) throw Error(a(327));
            if ((Ru(), (e === js && n === Vs) || _u(e, n), null !== Gs)) {
              var r = Us;
              Us |= Ps;
              for (var o = bu(); ; )
                try {
                  Tu();
                  break;
                } catch (u) {
                  Eu(e, u);
                }
              if ((ai(), (Us = r), (Is.current = o), Hs === Ls)) throw ((t = Ws), _u(e, n), Xu(e, n), hu(e), t);
              if (null === Gs)
                switch (((o = e.finishedWork = e.current.alternate), (e.finishedExpirationTime = n), (r = Hs), (js = null), r)) {
                  case ks:
                  case Ls:
                    throw Error(a(345));
                  case Ds:
                    Zu(e, 2 < n ? 2 : n);
                    break;
                  case Ms:
                    if (
                      (Xu(e, n),
                      n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Cu(o)),
                      1073741823 === zs && 10 < (o = Xs + Qs - Yo()))
                    ) {
                      if ($s) {
                        var i = e.lastPingedTime;
                        if (0 === i || i >= n) {
                          (e.lastPingedTime = n), _u(e, n);
                          break;
                        }
                      }
                      if (0 !== (i = pu(e)) && i !== n) break;
                      if (0 !== r && r !== n) {
                        e.lastPingedTime = r;
                        break;
                      }
                      e.timeoutHandle = Tn(Nu.bind(null, e), o);
                      break;
                    }
                    Nu(e);
                    break;
                  case Fs:
                    if (
                      (Xu(e, n),
                      n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Cu(o)),
                      $s && (0 === (o = e.lastPingedTime) || o >= n))
                    ) {
                      (e.lastPingedTime = n), _u(e, n);
                      break;
                    }
                    if (0 !== (o = pu(e)) && o !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    if (
                      (1073741823 !== Ys
                        ? (r = 10 * (1073741821 - Ys) - Yo())
                        : 1073741823 === zs
                        ? (r = 0)
                        : ((r = 10 * (1073741821 - zs) - 5e3),
                          0 > (r = (o = Yo()) - r) && (r = 0),
                          (n = 10 * (1073741821 - n) - o) <
                            (r =
                              (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * xs(r / 1960)) - r) && (r = n)),
                      10 < r)
                    ) {
                      e.timeoutHandle = Tn(Nu.bind(null, e), r);
                      break;
                    }
                    Nu(e);
                    break;
                  case Bs:
                    if (1073741823 !== zs && null !== qs) {
                      i = zs;
                      var s = qs;
                      if (
                        (0 >= (r = 0 | s.busyMinDurationMs)
                          ? (r = 0)
                          : ((o = 0 | s.busyDelayMs),
                            (r = (i = Yo() - (10 * (1073741821 - i) - (0 | s.timeoutMs || 5e3))) <= o ? 0 : o + r - i)),
                        10 < r)
                      ) {
                        Xu(e, n), (e.timeoutHandle = Tn(Nu.bind(null, e), r));
                        break;
                      }
                    }
                    Nu(e);
                    break;
                  default:
                    throw Error(a(329));
                }
              if ((hu(e), e.callbackNode === t)) return mu.bind(null, e);
            }
          }
          return null;
        }
        function vu(e) {
          var t = e.lastExpiredTime;
          if (((t = 0 !== t ? t : 1073741823), (Us & (Ps | Rs)) !== Ns)) throw Error(a(327));
          if ((Ru(), (e === js && t === Vs) || _u(e, t), null !== Gs)) {
            var n = Us;
            Us |= Ps;
            for (var r = bu(); ; )
              try {
                Au();
                break;
              } catch (o) {
                Eu(e, o);
              }
            if ((ai(), (Us = n), (Is.current = r), Hs === Ls)) throw ((n = Ws), _u(e, t), Xu(e, t), hu(e), n);
            if (null !== Gs) throw Error(a(261));
            (e.finishedWork = e.current.alternate), (e.finishedExpirationTime = t), (js = null), Nu(e), hu(e);
          }
          return null;
        }
        function yu(e, t) {
          var n = Us;
          Us |= 1;
          try {
            return e(t);
          } finally {
            (Us = n) === Ns && Zo();
          }
        }
        function gu(e, t) {
          var n = Us;
          (Us &= -2), (Us |= Os);
          try {
            return e(t);
          } finally {
            (Us = n) === Ns && Zo();
          }
        }
        function _u(e, t) {
          (e.finishedWork = null), (e.finishedExpirationTime = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), xn(n)), null !== Gs))
            for (n = Gs.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && wo();
                  break;
                case 3:
                  Ui(), mo(_o), mo(go);
                  break;
                case 5:
                  Gi(r);
                  break;
                case 4:
                  Ui();
                  break;
                case 13:
                case 19:
                  mo(Vi);
                  break;
                case 10:
                  si(r);
              }
              n = n.return;
            }
          (js = e), (Gs = Hu(e.current, null)), (Vs = t), (Hs = ks), (Ws = null), (Ys = zs = 1073741823), (qs = null), (Ks = 0), ($s = !1);
        }
        function Eu(e, t) {
          for (;;) {
            try {
              if ((ai(), (zi.current = Sa), Qi))
                for (var n = Ki.memoizedState; null !== n; ) {
                  var r = n.queue;
                  null !== r && (r.pending = null), (n = n.next);
                }
              if (((qi = 0), (Xi = $i = Ki = null), (Qi = !1), null === Gs || null === Gs.return)) return (Hs = Ls), (Ws = t), (Gs = null);
              e: {
                var o = e,
                  i = Gs.return,
                  a = Gs,
                  s = t;
                if (
                  ((t = Vs),
                  (a.effectTag |= 2048),
                  (a.firstEffect = a.lastEffect = null),
                  null !== s && "object" === typeof s && "function" === typeof s.then)
                ) {
                  var u = s;
                  if (0 === (2 & a.mode)) {
                    var l = a.alternate;
                    l
                      ? ((a.updateQueue = l.updateQueue), (a.memoizedState = l.memoizedState), (a.expirationTime = l.expirationTime))
                      : ((a.updateQueue = null), (a.memoizedState = null));
                  }
                  var c = 0 !== (1 & Vi.current),
                    f = i;
                  do {
                    var d;
                    if ((d = 13 === f.tag)) {
                      var p = f.memoizedState;
                      if (null !== p) d = null !== p.dehydrated;
                      else {
                        var h = f.memoizedProps;
                        d = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !c);
                      }
                    }
                    if (d) {
                      var m = f.updateQueue;
                      if (null === m) {
                        var v = new Set();
                        v.add(u), (f.updateQueue = v);
                      } else m.add(u);
                      if (0 === (2 & f.mode)) {
                        if (((f.effectTag |= 64), (a.effectTag &= -2981), 1 === a.tag))
                          if (null === a.alternate) a.tag = 17;
                          else {
                            var y = hi(1073741823, null);
                            (y.tag = 2), mi(a, y);
                          }
                        a.expirationTime = 1073741823;
                        break e;
                      }
                      (s = void 0), (a = t);
                      var g = o.pingCache;
                      if (
                        (null === g
                          ? ((g = o.pingCache = new Ss()), (s = new Set()), g.set(u, s))
                          : void 0 === (s = g.get(u)) && ((s = new Set()), g.set(u, s)),
                        !s.has(a))
                      ) {
                        s.add(a);
                        var _ = Mu.bind(null, o, u, a);
                        u.then(_, _);
                      }
                      (f.effectTag |= 4096), (f.expirationTime = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  s = Error(
                    (ve(a.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                      ye(a)
                  );
                }
                Hs !== Bs && (Hs = Ds), (s = is(s, a)), (f = i);
                do {
                  switch (f.tag) {
                    case 3:
                      (u = s), (f.effectTag |= 4096), (f.expirationTime = t), vi(f, ws(f, u, t));
                      break e;
                    case 1:
                      u = s;
                      var E = f.type,
                        b = f.stateNode;
                      if (
                        0 === (64 & f.effectTag) &&
                        ("function" === typeof E.getDerivedStateFromError ||
                          (null !== b && "function" === typeof b.componentDidCatch && (null === tu || !tu.has(b))))
                      ) {
                        (f.effectTag |= 4096), (f.expirationTime = t), vi(f, As(f, u, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              Gs = Iu(Gs);
            } catch (S) {
              t = S;
              continue;
            }
            break;
          }
        }
        function bu() {
          var e = Is.current;
          return (Is.current = Sa), null === e ? Sa : e;
        }
        function Su(e, t) {
          e < zs && 2 < e && (zs = e), null !== t && e < Ys && 2 < e && ((Ys = e), (qs = t));
        }
        function wu(e) {
          e > Ks && (Ks = e);
        }
        function Au() {
          for (; null !== Gs; ) Gs = xu(Gs);
        }
        function Tu() {
          for (; null !== Gs && !jo(); ) Gs = xu(Gs);
        }
        function xu(e) {
          var t = Ts(e.alternate, e, Vs);
          return (e.memoizedProps = e.pendingProps), null === t && (t = Iu(e)), (Cs.current = null), t;
        }
        function Iu(e) {
          Gs = e;
          do {
            var t = Gs.alternate;
            if (((e = Gs.return), 0 === (2048 & Gs.effectTag))) {
              if (((t = rs(t, Gs, Vs)), 1 === Vs || 1 !== Gs.childExpirationTime)) {
                for (var n = 0, r = Gs.child; null !== r; ) {
                  var o = r.expirationTime,
                    i = r.childExpirationTime;
                  o > n && (n = o), i > n && (n = i), (r = r.sibling);
                }
                Gs.childExpirationTime = n;
              }
              if (null !== t) return t;
              null !== e &&
                0 === (2048 & e.effectTag) &&
                (null === e.firstEffect && (e.firstEffect = Gs.firstEffect),
                null !== Gs.lastEffect &&
                  (null !== e.lastEffect && (e.lastEffect.nextEffect = Gs.firstEffect), (e.lastEffect = Gs.lastEffect)),
                1 < Gs.effectTag && (null !== e.lastEffect ? (e.lastEffect.nextEffect = Gs) : (e.firstEffect = Gs), (e.lastEffect = Gs)));
            } else {
              if (null !== (t = os(Gs))) return (t.effectTag &= 2047), t;
              null !== e && ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
            }
            if (null !== (t = Gs.sibling)) return t;
            Gs = e;
          } while (null !== Gs);
          return Hs === ks && (Hs = Bs), null;
        }
        function Cu(e) {
          var t = e.expirationTime;
          return t > (e = e.childExpirationTime) ? t : e;
        }
        function Nu(e) {
          var t = qo();
          return $o(99, Ou.bind(null, e, t)), null;
        }
        function Ou(e, t) {
          do {
            Ru();
          } while (null !== ru);
          if ((Us & (Ps | Rs)) !== Ns) throw Error(a(327));
          var n = e.finishedWork,
            r = e.finishedExpirationTime;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedExpirationTime = 0), n === e.current)) throw Error(a(177));
          (e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90), (e.nextKnownPendingLevel = 0);
          var o = Cu(n);
          if (
            ((e.firstPendingTime = o),
            r <= e.lastSuspendedTime
              ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
              : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
            r <= e.lastPingedTime && (e.lastPingedTime = 0),
            r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
            e === js && ((Gs = js = null), (Vs = 0)),
            1 < n.effectTag
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (o = n.firstEffect))
                : (o = n)
              : (o = n.firstEffect),
            null !== o)
          ) {
            var i = Us;
            (Us |= Rs), (Cs.current = null), (bn = qt);
            var s = mn();
            if (vn(s)) {
              if ("selectionStart" in s) var u = { start: s.selectionStart, end: s.selectionEnd };
              else
                e: {
                  var l = (u = ((u = s.ownerDocument) && u.defaultView) || window).getSelection && u.getSelection();
                  if (l && 0 !== l.rangeCount) {
                    u = l.anchorNode;
                    var c = l.anchorOffset,
                      f = l.focusNode;
                    l = l.focusOffset;
                    try {
                      u.nodeType, f.nodeType;
                    } catch (x) {
                      u = null;
                      break e;
                    }
                    var d = 0,
                      p = -1,
                      h = -1,
                      m = 0,
                      v = 0,
                      y = s,
                      g = null;
                    t: for (;;) {
                      for (
                        var _;
                        y !== u || (0 !== c && 3 !== y.nodeType) || (p = d + c),
                          y !== f || (0 !== l && 3 !== y.nodeType) || (h = d + l),
                          3 === y.nodeType && (d += y.nodeValue.length),
                          null !== (_ = y.firstChild);

                      )
                        (g = y), (y = _);
                      for (;;) {
                        if (y === s) break t;
                        if ((g === u && ++m === c && (p = d), g === f && ++v === l && (h = d), null !== (_ = y.nextSibling))) break;
                        g = (y = g).parentNode;
                      }
                      y = _;
                    }
                    u = -1 === p || -1 === h ? null : { start: p, end: h };
                  } else u = null;
                }
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Sn = { activeElementDetached: null, focusedElem: s, selectionRange: u }), (qt = !1), (Zs = o);
            do {
              try {
                Pu();
              } catch (x) {
                if (null === Zs) throw Error(a(330));
                Du(Zs, x), (Zs = Zs.nextEffect);
              }
            } while (null !== Zs);
            Zs = o;
            do {
              try {
                for (s = e, u = t; null !== Zs; ) {
                  var E = Zs.effectTag;
                  if ((16 & E && Ge(Zs.stateNode, ""), 128 & E)) {
                    var b = Zs.alternate;
                    if (null !== b) {
                      var S = b.ref;
                      null !== S && ("function" === typeof S ? S(null) : (S.current = null));
                    }
                  }
                  switch (1038 & E) {
                    case 2:
                      vs(Zs), (Zs.effectTag &= -3);
                      break;
                    case 6:
                      vs(Zs), (Zs.effectTag &= -3), Es(Zs.alternate, Zs);
                      break;
                    case 1024:
                      Zs.effectTag &= -1025;
                      break;
                    case 1028:
                      (Zs.effectTag &= -1025), Es(Zs.alternate, Zs);
                      break;
                    case 4:
                      Es(Zs.alternate, Zs);
                      break;
                    case 8:
                      _s(s, (c = Zs), u), hs(c);
                  }
                  Zs = Zs.nextEffect;
                }
              } catch (x) {
                if (null === Zs) throw Error(a(330));
                Du(Zs, x), (Zs = Zs.nextEffect);
              }
            } while (null !== Zs);
            if (
              ((S = Sn),
              (b = mn()),
              (E = S.focusedElem),
              (u = S.selectionRange),
              b !== E && E && E.ownerDocument && hn(E.ownerDocument.documentElement, E))
            ) {
              null !== u &&
                vn(E) &&
                ((b = u.start),
                void 0 === (S = u.end) && (S = b),
                "selectionStart" in E
                  ? ((E.selectionStart = b), (E.selectionEnd = Math.min(S, E.value.length)))
                  : (S = ((b = E.ownerDocument || document) && b.defaultView) || window).getSelection &&
                    ((S = S.getSelection()),
                    (c = E.textContent.length),
                    (s = Math.min(u.start, c)),
                    (u = void 0 === u.end ? s : Math.min(u.end, c)),
                    !S.extend && s > u && ((c = u), (u = s), (s = c)),
                    (c = pn(E, s)),
                    (f = pn(E, u)),
                    c &&
                      f &&
                      (1 !== S.rangeCount ||
                        S.anchorNode !== c.node ||
                        S.anchorOffset !== c.offset ||
                        S.focusNode !== f.node ||
                        S.focusOffset !== f.offset) &&
                      ((b = b.createRange()).setStart(c.node, c.offset),
                      S.removeAllRanges(),
                      s > u ? (S.addRange(b), S.extend(f.node, f.offset)) : (b.setEnd(f.node, f.offset), S.addRange(b))))),
                (b = []);
              for (S = E; (S = S.parentNode); ) 1 === S.nodeType && b.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
              for ("function" === typeof E.focus && E.focus(), E = 0; E < b.length; E++)
                ((S = b[E]).element.scrollLeft = S.left), (S.element.scrollTop = S.top);
            }
            (qt = !!bn), (Sn = bn = null), (e.current = n), (Zs = o);
            do {
              try {
                for (E = e; null !== Zs; ) {
                  var w = Zs.effectTag;
                  if ((36 & w && ds(E, Zs.alternate, Zs), 128 & w)) {
                    b = void 0;
                    var A = Zs.ref;
                    if (null !== A) {
                      var T = Zs.stateNode;
                      Zs.tag, (b = T), "function" === typeof A ? A(b) : (A.current = b);
                    }
                  }
                  Zs = Zs.nextEffect;
                }
              } catch (x) {
                if (null === Zs) throw Error(a(330));
                Du(Zs, x), (Zs = Zs.nextEffect);
              }
            } while (null !== Zs);
            (Zs = null), Go(), (Us = i);
          } else e.current = n;
          if (nu) (nu = !1), (ru = e), (ou = t);
          else for (Zs = o; null !== Zs; ) (t = Zs.nextEffect), (Zs.nextEffect = null), (Zs = t);
          if (
            (0 === (t = e.firstPendingTime) && (tu = null),
            1073741823 === t ? (e === su ? au++ : ((au = 0), (su = e))) : (au = 0),
            "function" === typeof Bu && Bu(n.stateNode, r),
            hu(e),
            Js)
          )
            throw ((Js = !1), (e = eu), (eu = null), e);
          return (Us & Os) !== Ns || Zo(), null;
        }
        function Pu() {
          for (; null !== Zs; ) {
            var e = Zs.effectTag;
            0 !== (256 & e) && ls(Zs.alternate, Zs),
              0 === (512 & e) ||
                nu ||
                ((nu = !0),
                Xo(97, function () {
                  return Ru(), null;
                })),
              (Zs = Zs.nextEffect);
          }
        }
        function Ru() {
          if (90 !== ou) {
            var e = 97 < ou ? 97 : ou;
            return (ou = 90), $o(e, ku);
          }
        }
        function ku() {
          if (null === ru) return !1;
          var e = ru;
          if (((ru = null), (Us & (Ps | Rs)) !== Ns)) throw Error(a(331));
          var t = Us;
          for (Us |= Rs, e = e.current.firstEffect; null !== e; ) {
            try {
              var n = e;
              if (0 !== (512 & n.effectTag))
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                  case 22:
                    cs(5, n), fs(5, n);
                }
            } catch (r) {
              if (null === e) throw Error(a(330));
              Du(e, r);
            }
            (n = e.nextEffect), (e.nextEffect = null), (e = n);
          }
          return (Us = t), Zo(), !0;
        }
        function Lu(e, t, n) {
          mi(e, (t = ws(e, (t = is(n, t)), 1073741823))), null !== (e = du(e, 1073741823)) && hu(e);
        }
        function Du(e, t) {
          if (3 === e.tag) Lu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Lu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch && (null === tu || !tu.has(r)))
                ) {
                  mi(n, (e = As(n, (e = is(t, e)), 1073741823))), null !== (n = du(n, 1073741823)) && hu(n);
                  break;
                }
              }
              n = n.return;
            }
        }
        function Mu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            js === e && Vs === n
              ? Hs === Fs || (Hs === Ms && 1073741823 === zs && Yo() - Xs < Qs)
                ? _u(e, Vs)
                : ($s = !0)
              : $u(e, n) && ((0 !== (t = e.lastPingedTime) && t < n) || ((e.lastPingedTime = n), hu(e)));
        }
        function Fu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t), 0 === (t = 0) && (t = cu((t = lu()), e, null)), null !== (e = du(e, t)) && hu(e);
        }
        Ts = function (e, t, n) {
          var r = t.expirationTime;
          if (null !== e) {
            var o = t.pendingProps;
            if (e.memoizedProps !== o || _o.current) Ma = !0;
            else {
              if (r < n) {
                switch (((Ma = !1), t.tag)) {
                  case 3:
                    za(t), La();
                    break;
                  case 5:
                    if ((ji(t), 4 & t.mode && 1 !== n && o.hidden)) return (t.expirationTime = t.childExpirationTime = 1), null;
                    break;
                  case 1:
                    So(t.type) && xo(t);
                    break;
                  case 4:
                    Bi(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    (r = t.memoizedProps.value), (o = t.type._context), vo(ni, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (r = t.child.childExpirationTime) && r >= n
                        ? Qa(e, t, n)
                        : (vo(Vi, 1 & Vi.current), null !== (t = ts(e, t, n)) ? t.sibling : null);
                    vo(Vi, 1 & Vi.current);
                    break;
                  case 19:
                    if (((r = t.childExpirationTime >= n), 0 !== (64 & e.effectTag))) {
                      if (r) return es(e, t, n);
                      t.effectTag |= 64;
                    }
                    if ((null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null)), vo(Vi, Vi.current), !r)) return null;
                }
                return ts(e, t, n);
              }
              Ma = !1;
            }
          } else Ma = !1;
          switch (((t.expirationTime = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                (e = t.pendingProps),
                (o = bo(t, go.current)),
                li(t, n),
                (o = ea(null, t, r, e, o, n)),
                (t.effectTag |= 1),
                "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof)
              ) {
                if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), So(r))) {
                  var i = !0;
                  xo(t);
                } else i = !1;
                (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), di(t);
                var s = r.getDerivedStateFromProps;
                "function" === typeof s && bi(t, r, s, e),
                  (o.updater = Si),
                  (t.stateNode = o),
                  (o._reactInternalFiber = t),
                  xi(t, r, e, n),
                  (t = Wa(null, t, r, !0, i, n));
              } else (t.tag = 0), Fa(null, t, o, n), (t = t.child);
              return t;
            case 16:
              e: {
                if (
                  ((o = t.elementType),
                  null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                  (e = t.pendingProps),
                  (function (e) {
                    if (-1 === e._status) {
                      e._status = 0;
                      var t = e._ctor;
                      (t = t()),
                        (e._result = t),
                        t.then(
                          function (t) {
                            0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                          },
                          function (t) {
                            0 === e._status && ((e._status = 2), (e._result = t));
                          }
                        );
                    }
                  })(o),
                  1 !== o._status)
                )
                  throw o._result;
                switch (
                  ((o = o._result),
                  (t.type = o),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Vu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === ue) return 11;
                        if (e === fe) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = ti(o, e)),
                  i)
                ) {
                  case 0:
                    t = Va(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Ha(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Ba(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Ua(null, t, o, ti(o.type, e), r, n);
                    break e;
                }
                throw Error(a(306, o, ""));
              }
              return t;
            case 0:
              return (r = t.type), (o = t.pendingProps), Va(e, t, r, (o = t.elementType === r ? o : ti(r, o)), n);
            case 1:
              return (r = t.type), (o = t.pendingProps), Ha(e, t, r, (o = t.elementType === r ? o : ti(r, o)), n);
            case 3:
              if ((za(t), (r = t.updateQueue), null === e || null === r)) throw Error(a(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                pi(e, t),
                yi(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                La(), (t = ts(e, t, n));
              else {
                if (((o = t.stateNode.hydrate) && ((Ia = In(t.stateNode.containerInfo.firstChild)), (xa = t), (o = Ca = !0)), o))
                  for (n = Ri(t, null, r, n), t.child = n; n; ) (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
                else Fa(e, t, r, n), La();
                t = t.child;
              }
              return t;
            case 5:
              return (
                ji(t),
                null === e && Pa(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                An(r, o) ? (s = null) : null !== i && An(r, i) && (t.effectTag |= 16),
                Ga(e, t),
                4 & t.mode && 1 !== n && o.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                  : (Fa(e, t, s, n), (t = t.child)),
                t
              );
            case 6:
              return null === e && Pa(t), null;
            case 13:
              return Qa(e, t, n);
            case 4:
              return (
                Bi(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = Pi(t, null, r, n)) : Fa(e, t, r, n), t.child
              );
            case 11:
              return (r = t.type), (o = t.pendingProps), Ba(e, t, r, (o = t.elementType === r ? o : ti(r, o)), n);
            case 7:
              return Fa(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Fa(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context), (o = t.pendingProps), (s = t.memoizedProps), (i = o.value);
                var u = t.type._context;
                if ((vo(ni, u._currentValue), (u._currentValue = i), null !== s))
                  if (
                    ((u = s.value),
                    0 ===
                      (i = Hr(u, i) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823)))
                  ) {
                    if (s.children === o.children && !_o.current) {
                      t = ts(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                      var l = u.dependencies;
                      if (null !== l) {
                        s = u.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & i)) {
                            1 === u.tag && (((c = hi(n, null)).tag = 2), mi(u, c)),
                              u.expirationTime < n && (u.expirationTime = n),
                              null !== (c = u.alternate) && c.expirationTime < n && (c.expirationTime = n),
                              ui(u.return, n),
                              l.expirationTime < n && (l.expirationTime = n);
                            break;
                          }
                          c = c.next;
                        }
                      } else s = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== s) s.return = u;
                      else
                        for (s = u; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (u = s.sibling)) {
                            (u.return = s.return), (s = u);
                            break;
                          }
                          s = s.return;
                        }
                      u = s;
                    }
                Fa(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (i = t.pendingProps).children),
                li(t, n),
                (r = r((o = ci(o, i.unstable_observedBits)))),
                (t.effectTag |= 1),
                Fa(e, t, r, n),
                t.child
              );
            case 14:
              return (i = ti((o = t.type), t.pendingProps)), Ua(e, t, o, (i = ti(o.type, i)), r, n);
            case 15:
              return ja(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ti(r, o)),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                (t.tag = 1),
                So(r) ? ((e = !0), xo(t)) : (e = !1),
                li(t, n),
                Ai(t, r, o),
                xi(t, r, o, n),
                Wa(null, t, r, !0, e, n)
              );
            case 19:
              return es(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Bu = null,
          Uu = null;
        function ju(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.effectTag = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childExpirationTime = this.expirationTime = 0),
            (this.alternate = null);
        }
        function Gu(e, t, n, r) {
          return new ju(e, t, n, r);
        }
        function Vu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Hu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Gu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t), (n.effectTag = 0), (n.nextEffect = null), (n.firstEffect = null), (n.lastEffect = null)),
            (n.childExpirationTime = e.childExpirationTime),
            (n.expirationTime = e.expirationTime),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t ? null : { expirationTime: t.expirationTime, firstContext: t.firstContext, responders: t.responders }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Wu(e, t, n, r, o, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Vu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case ne:
                return zu(n.children, o, i, t);
              case se:
                (s = 8), (o |= 7);
                break;
              case re:
                (s = 8), (o |= 1);
                break;
              case oe:
                return ((e = Gu(12, n, t, 8 | o)).elementType = oe), (e.type = oe), (e.expirationTime = i), e;
              case le:
                return ((e = Gu(13, n, t, o)).type = le), (e.elementType = le), (e.expirationTime = i), e;
              case ce:
                return ((e = Gu(19, n, t, o)).elementType = ce), (e.expirationTime = i), e;
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case ie:
                      s = 10;
                      break e;
                    case ae:
                      s = 9;
                      break e;
                    case ue:
                      s = 11;
                      break e;
                    case fe:
                      s = 14;
                      break e;
                    case de:
                      (s = 16), (r = null);
                      break e;
                    case pe:
                      s = 22;
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return ((t = Gu(s, n, t, o)).elementType = e), (t.type = r), (t.expirationTime = i), t;
        }
        function zu(e, t, n, r) {
          return ((e = Gu(7, e, r, t)).expirationTime = n), e;
        }
        function Yu(e, t, n) {
          return ((e = Gu(6, e, null, t)).expirationTime = n), e;
        }
        function qu(e, t, n) {
          return (
            ((t = Gu(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
          );
        }
        function Ku(e, t, n) {
          (this.tag = t),
            (this.current = null),
            (this.containerInfo = e),
            (this.pingCache = this.pendingChildren = null),
            (this.finishedExpirationTime = 0),
            (this.finishedWork = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 90),
            (this.lastExpiredTime =
              this.lastPingedTime =
              this.nextKnownPendingLevel =
              this.lastSuspendedTime =
              this.firstSuspendedTime =
              this.firstPendingTime =
                0);
        }
        function $u(e, t) {
          var n = e.firstSuspendedTime;
          return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
        }
        function Xu(e, t) {
          var n = e.firstSuspendedTime,
            r = e.lastSuspendedTime;
          n < t && (e.firstSuspendedTime = t),
            (r > t || 0 === n) && (e.lastSuspendedTime = t),
            t <= e.lastPingedTime && (e.lastPingedTime = 0),
            t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
        }
        function Qu(e, t) {
          t > e.firstPendingTime && (e.firstPendingTime = t);
          var n = e.firstSuspendedTime;
          0 !== n &&
            (t >= n
              ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
              : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
            t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
        }
        function Zu(e, t) {
          var n = e.lastExpiredTime;
          (0 === n || n > t) && (e.lastExpiredTime = t);
        }
        function Ju(e, t, n, r) {
          var o = t.current,
            i = lu(),
            s = _i.suspense;
          i = cu(i, o, s);
          e: if (n) {
            t: {
              if (et((n = n._reactInternalFiber)) !== n || 1 !== n.tag) throw Error(a(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (So(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(a(171));
            }
            if (1 === n.tag) {
              var l = n.type;
              if (So(l)) {
                n = To(n, l, u);
                break e;
              }
            }
            n = u;
          } else n = yo;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = hi(i, s)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            mi(o, t),
            fu(o, i),
            i
          );
        }
        function el(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function tl(e, t) {
          null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
        }
        function nl(e, t) {
          tl(e, t), (e = e.alternate) && tl(e, t);
        }
        function rl(e, t, n) {
          var r = new Ku(e, t, (n = null != n && !0 === n.hydrate)),
            o = Gu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
          (r.current = o),
            (o.stateNode = r),
            di(o),
            (e[Rn] = r.current),
            n &&
              0 !== t &&
              (function (e, t) {
                var n = Je(t);
                It.forEach(function (e) {
                  mt(e, t, n);
                }),
                  Ct.forEach(function (e) {
                    mt(e, t, n);
                  });
              })(0, 9 === e.nodeType ? e : e.ownerDocument),
            (this._internalRoot = r);
        }
        function ol(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function il(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i._internalRoot;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = el(a);
                s.call(e);
              };
            }
            Ju(t, a, e, o);
          } else {
            if (
              ((i = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new rl(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (a = i._internalRoot),
              "function" === typeof o)
            ) {
              var u = o;
              o = function () {
                var e = el(a);
                u.call(e);
              };
            }
            gu(function () {
              Ju(t, a, e, o);
            });
          }
          return el(a);
        }
        function al(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!ol(t)) throw Error(a(200));
          return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: te, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
          })(e, t, null, n);
        }
        (rl.prototype.render = function (e) {
          Ju(e, this._internalRoot, null, null);
        }),
          (rl.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Ju(null, e, null, function () {
              t[Rn] = null;
            });
          }),
          (vt = function (e) {
            if (13 === e.tag) {
              var t = ei(lu(), 150, 100);
              fu(e, t), nl(e, t);
            }
          }),
          (yt = function (e) {
            13 === e.tag && (fu(e, 3), nl(e, 3));
          }),
          (gt = function (e) {
            if (13 === e.tag) {
              var t = lu();
              fu(e, (t = cu(t, e, null))), nl(e, t);
            }
          }),
          (C = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Te(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = Mn(r);
                      if (!o) throw Error(a(90));
                      be(r), Te(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                Re(e, n);
                break;
              case "select":
                null != (t = n.value) && Ne(e, !!n.multiple, t, !1);
            }
          }),
          (L = yu),
          (D = function (e, t, n, r, o) {
            var i = Us;
            Us |= 4;
            try {
              return $o(98, e.bind(null, t, n, r, o));
            } finally {
              (Us = i) === Ns && Zo();
            }
          }),
          (M = function () {
            (Us & (1 | Ps | Rs)) === Ns &&
              ((function () {
                if (null !== iu) {
                  var e = iu;
                  (iu = null),
                    e.forEach(function (e, t) {
                      Zu(t, e), hu(t);
                    }),
                    Zo();
                }
              })(),
              Ru());
          }),
          (F = function (e, t) {
            var n = Us;
            Us |= 2;
            try {
              return e(t);
            } finally {
              (Us = n) === Ns && Zo();
            }
          });
        var sl = {
          Events: [
            Ln,
            Dn,
            Mn,
            x,
            w,
            Hn,
            function (e) {
              it(e, Vn);
            },
            R,
            k,
            Zt,
            ut,
            Ru,
            { current: !1 }
          ]
        };
        !(function (e) {
          var t = e.findFiberByHostInstance;
          (function (e) {
            if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
              var n = t.inject(e);
              (Bu = function (e) {
                try {
                  t.onCommitFiberRoot(n, e, void 0, 64 === (64 & e.current.effectTag));
                } catch (r) {}
              }),
                (Uu = function (e) {
                  try {
                    t.onCommitFiberUnmount(n, e);
                  } catch (r) {}
                });
            } catch (r) {}
          })(
            o({}, e, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: X.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null === (e = rt(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null
            })
          );
        })({ findFiberByHostInstance: kn, bundleType: 0, version: "16.14.0", rendererPackageName: "react-dom" }),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl),
          (t.createPortal = al),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return (e = null === (e = rt(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            if ((Us & (Ps | Rs)) !== Ns) throw Error(a(187));
            var n = Us;
            Us |= 1;
            try {
              return $o(99, e.bind(null, t));
            } finally {
              (Us = n), Zo();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!ol(t)) throw Error(a(200));
            return il(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!ol(t)) throw Error(a(200));
            return il(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!ol(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (gu(function () {
                il(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Rn] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = yu),
          (t.unstable_createPortal = function (e, t) {
            return al(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!ol(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
            return il(e, t, n, !1, r);
          }),
          (t.version = "16.14.0");
      },
      306: function (e, t, n) {
        "use strict";
        !(function e() {
          if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(995));
      },
      87: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          i = n ? Symbol.for("react.fragment") : 60107,
          a = n ? Symbol.for("react.strict_mode") : 60108,
          s = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          l = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          g = n ? Symbol.for("react.fundamental") : 60117,
          _ = n ? Symbol.for("react.responder") : 60118,
          E = n ? Symbol.for("react.scope") : 60119;
        function b(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case i:
                  case s:
                  case a:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case d:
                      case v:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function S(e) {
          return b(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = l),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = i),
          (t.Lazy = v),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = s),
          (t.StrictMode = a),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return S(e) || b(e) === c;
          }),
          (t.isConcurrentMode = S),
          (t.isContextConsumer = function (e) {
            return b(e) === l;
          }),
          (t.isContextProvider = function (e) {
            return b(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return b(e) === d;
          }),
          (t.isFragment = function (e) {
            return b(e) === i;
          }),
          (t.isLazy = function (e) {
            return b(e) === v;
          }),
          (t.isMemo = function (e) {
            return b(e) === m;
          }),
          (t.isPortal = function (e) {
            return b(e) === o;
          }),
          (t.isProfiler = function (e) {
            return b(e) === s;
          }),
          (t.isStrictMode = function (e) {
            return b(e) === a;
          }),
          (t.isSuspense = function (e) {
            return b(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === i ||
              e === f ||
              e === s ||
              e === a ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === m ||
                  e.$$typeof === u ||
                  e.$$typeof === l ||
                  e.$$typeof === d ||
                  e.$$typeof === g ||
                  e.$$typeof === _ ||
                  e.$$typeof === E ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = b);
      },
      107: function (e, t, n) {
        "use strict";
        e.exports = n(87);
      },
      527: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
        var r = a(n(381)),
          o = a(n(306)),
          i = a(n(775));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(e) {
          return (
            (s =
              "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            s(e)
          );
        }
        function u(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function l(e) {
          return function () {
            var t,
              n = f(e);
            if (
              (function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                  return !1;
                }
              })()
            ) {
              var r = f(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return (function (e, t) {
              if (t && ("object" === s(t) || "function" === typeof t)) return t;
              return c(e);
            })(this, t);
          };
        }
        function c(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function f(e) {
          return (
            (f = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            f(e)
          );
        }
        function d(e, t) {
          return (
            (d =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            d(e, t)
          );
        }
        function p(e, t, n) {
          return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        var h =
            window &&
            window.ShadowRoot &&
            window.ShadowRoot.prototype.hasOwnProperty("adoptedStyleSheets") &&
            window.CSSStyleSheet &&
            window.CSSStyleSheet.prototype.hasOwnProperty("replace"),
          m = window && window.Element && window.Element.prototype.hasOwnProperty("attachShadow"),
          v = (function (e) {
            !(function (e, t) {
              if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && d(e, t);
            })(s, e);
            var t,
              n,
              i,
              a = l(s);
            function s() {
              var e;
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, s),
                p(c((e = a.call(this))), "state", { initialized: !1 }),
                (e.placeholder = r.default.createRef()),
                e
              );
            }
            return (
              (t = s),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props,
                      t = e.delegatesFocus,
                      n = e.mode,
                      r = e.stylesheets;
                    (this.shadowRoot = this.placeholder.current.parentNode.attachShadow({ delegatesFocus: t, mode: n })),
                      r && (this.shadowRoot.adoptedStyleSheets = r),
                      this.setState({ initialized: !0 });
                  }
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.initialized
                      ? o.default.createPortal(this.props.children, this.shadowRoot)
                      : r.default.createElement("span", { ref: this.placeholder });
                  }
                }
              ]) && u(t.prototype, n),
              i && u(t, i),
              s
            );
          })(r.default.PureComponent);
        (t.default = v),
          p(v, "constructableStylesheetsSupported", h),
          p(v, "constructibleStylesheetsSupported", h),
          p(v, "defaultProps", { delegatesFocus: !1, mode: "open" }),
          p(v, "displayName", "ReactShadowRoot"),
          p(v, "propTypes", {
            delegatesFocus: i.default.bool,
            mode: i.default.oneOf(["open", "closed"]),
            stylesheets: i.default.arrayOf(function (e, t, n, r, o) {
              if (!(e[t] instanceof window.CSSStyleSheet))
                return new Error("Invalid prop `".concat(o, "` supplied to `").concat(n, "`. Expected an instance of `CSSStyleSheet`."));
            })
          }),
          p(v, "shadowRootSupported", m);
      },
      748: function (e, t, n) {
        "use strict";
        var r;
        t.Z = void 0;
        var o = ((r = n(527)) && r.__esModule ? r : { default: r }).default;
        t.Z = o;
      },
      304: function (e, t, n) {
        "use strict";
        var r = n(381),
          o = 60103;
        if (((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
          var i = Symbol.for;
          (o = i("react.element")), (t.Fragment = i("react.fragment"));
        }
        var a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = Object.prototype.hasOwnProperty,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            i = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t))
            s.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return { $$typeof: o, type: e, key: l, ref: c, props: i, _owner: a.current };
        }
        (t.jsx = l), (t.jsxs = l);
      },
      372: function (e, t, n) {
        "use strict";
        var r = n(209),
          o = "function" === typeof Symbol && Symbol.for,
          i = o ? Symbol.for("react.element") : 60103,
          a = o ? Symbol.for("react.portal") : 60106,
          s = o ? Symbol.for("react.fragment") : 60107,
          u = o ? Symbol.for("react.strict_mode") : 60108,
          l = o ? Symbol.for("react.profiler") : 60114,
          c = o ? Symbol.for("react.provider") : 60109,
          f = o ? Symbol.for("react.context") : 60110,
          d = o ? Symbol.for("react.forward_ref") : 60112,
          p = o ? Symbol.for("react.suspense") : 60113,
          h = o ? Symbol.for("react.memo") : 60115,
          m = o ? Symbol.for("react.lazy") : 60116,
          v = "function" === typeof Symbol && Symbol.iterator;
        function y(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var g = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          _ = {};
        function E(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = _), (this.updater = n || g);
        }
        function b() {}
        function S(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = _), (this.updater = n || g);
        }
        (E.prototype.isReactComponent = {}),
          (E.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(y(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (E.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = E.prototype);
        var w = (S.prototype = new b());
        (w.constructor = S), r(w, E.prototype), (w.isPureReactComponent = !0);
        var A = { current: null },
          T = Object.prototype.hasOwnProperty,
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function I(e, t, n) {
          var r,
            o = {},
            a = null,
            s = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t))
              T.call(t, r) && !x.hasOwnProperty(r) && (o[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) o.children = n;
          else if (1 < u) {
            for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
            o.children = l;
          }
          if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
          return { $$typeof: i, type: e, key: a, ref: s, props: o, _owner: A.current };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === i;
        }
        var N = /\/+/g,
          O = [];
        function P(e, t, n, r) {
          if (O.length) {
            var o = O.pop();
            return (o.result = e), (o.keyPrefix = t), (o.func = n), (o.context = r), (o.count = 0), o;
          }
          return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function R(e) {
          (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > O.length && O.push(e);
        }
        function k(e, t, n, r) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case a:
                    s = !0;
                }
            }
          if (s) return n(r, e, "" === t ? "." + D(e, 0) : t), 1;
          if (((s = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var l = t + D((o = e[u]), u);
              s += k(o, l, n, r);
            }
          else if (
            (null === e || "object" !== typeof e ? (l = null) : (l = "function" === typeof (l = (v && e[v]) || e["@@iterator"]) ? l : null),
            "function" === typeof l)
          )
            for (e = l.call(e), u = 0; !(o = e.next()).done; ) s += k((o = o.value), (l = t + D(o, u++)), n, r);
          else if ("object" === o)
            throw ((n = "" + e), Error(y(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "")));
          return s;
        }
        function L(e, t, n) {
          return null == e ? 0 : k(e, "", t, n);
        }
        function D(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })(e.key)
            : t.toString(36);
        }
        function M(e, t) {
          e.func.call(e.context, t, e.count++);
        }
        function F(e, t, n) {
          var r = e.result,
            o = e.keyPrefix;
          (e = e.func.call(e.context, t, e.count++)),
            Array.isArray(e)
              ? B(e, r, n, function (e) {
                  return e;
                })
              : null != e &&
                (C(e) &&
                  (e = (function (e, t) {
                    return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                  })(e, o + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(N, "$&/") + "/") + n)),
                r.push(e));
        }
        function B(e, t, n, r, o) {
          var i = "";
          null != n && (i = ("" + n).replace(N, "$&/") + "/"), L(e, F, (t = P(t, i, r, o))), R(t);
        }
        var U = { current: null };
        function j() {
          var e = U.current;
          if (null === e) throw Error(y(321));
          return e;
        }
        var G = {
          ReactCurrentDispatcher: U,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: A,
          IsSomeRendererActing: { current: !1 },
          assign: r
        };
        (t.Children = {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return B(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            L(e, M, (t = P(null, null, t, n))), R(t);
          },
          count: function (e) {
            return L(
              e,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (e) {
            var t = [];
            return (
              B(e, t, null, function (e) {
                return e;
              }),
              t
            );
          },
          only: function (e) {
            if (!C(e)) throw Error(y(143));
            return e;
          }
        }),
          (t.Component = E),
          (t.Fragment = s),
          (t.Profiler = l),
          (t.PureComponent = S),
          (t.StrictMode = u),
          (t.Suspense = p),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(y(267, e));
            var o = r({}, e.props),
              a = e.key,
              s = e.ref,
              u = e._owner;
            if (null != t) {
              if ((void 0 !== t.ref && ((s = t.ref), (u = A.current)), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps))
                var l = e.type.defaultProps;
              for (c in t) T.call(t, c) && !x.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = n;
            else if (1 < c) {
              l = Array(c);
              for (var f = 0; f < c; f++) l[f] = arguments[f + 2];
              o.children = l;
            }
            return { $$typeof: i, type: e.type, key: a, ref: s, props: o, _owner: u };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = I),
          (t.createFactory = function (e) {
            var t = I.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: d, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return { $$typeof: m, _ctor: e, _status: -1, _result: null };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return j().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return j().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return j().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return j().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return j().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return j().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return j().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return j().useRef(e);
          }),
          (t.useState = function (e) {
            return j().useState(e);
          }),
          (t.version = "16.14.0");
      },
      381: function (e, t, n) {
        "use strict";
        e.exports = n(372);
      },
      30: function (e, t, n) {
        "use strict";
        e.exports = n(304);
      },
      183: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
          }
          function r(e, t) {
            Object.defineProperty(this, "kind", { value: e, enumerable: !0 }),
              t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 });
          }
          function o(e, t, n) {
            o.super_.call(this, "E", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }),
              Object.defineProperty(this, "rhs", { value: n, enumerable: !0 });
          }
          function i(e, t) {
            i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
          }
          function a(e, t) {
            a.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
          }
          function s(e, t, n) {
            s.super_.call(this, "A", e),
              Object.defineProperty(this, "index", { value: t, enumerable: !0 }),
              Object.defineProperty(this, "item", { value: n, enumerable: !0 });
          }
          function u(e, t, n) {
            var r = e.slice((n || t) + 1 || e.length);
            return (e.length = t < 0 ? e.length + t : t), e.push.apply(e, r), e;
          }
          function l(e) {
            var t = "undefined" == typeof e ? "undefined" : O(e);
            return "object" !== t
              ? t
              : e === Math
              ? "math"
              : null === e
              ? "null"
              : Array.isArray(e)
              ? "array"
              : "[object Date]" === Object.prototype.toString.call(e)
              ? "date"
              : "function" == typeof e.toString && /^\/.*\//.test(e.toString())
              ? "regexp"
              : "object";
          }
          function c(e, t, n, r, f, d, p) {
            p = p || [];
            var h = (f = f || []).slice(0);
            if ("undefined" != typeof d) {
              if (r) {
                if ("function" == typeof r && r(h, d)) return;
                if ("object" === ("undefined" == typeof r ? "undefined" : O(r))) {
                  if (r.prefilter && r.prefilter(h, d)) return;
                  if (r.normalize) {
                    var m = r.normalize(h, d, e, t);
                    m && ((e = m[0]), (t = m[1]));
                  }
                }
              }
              h.push(d);
            }
            "regexp" === l(e) && "regexp" === l(t) && ((e = e.toString()), (t = t.toString()));
            var v = "undefined" == typeof e ? "undefined" : O(e),
              y = "undefined" == typeof t ? "undefined" : O(t),
              g = "undefined" !== v || (p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d)),
              _ = "undefined" !== y || (p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d));
            if (!g && _) n(new i(h, t));
            else if (!_ && g) n(new a(h, e));
            else if (l(e) !== l(t)) n(new o(h, e, t));
            else if ("date" === l(e) && e - t !== 0) n(new o(h, e, t));
            else if ("object" === v && null !== e && null !== t)
              if (
                p.filter(function (t) {
                  return t.lhs === e;
                }).length
              )
                e !== t && n(new o(h, e, t));
              else {
                if ((p.push({ lhs: e, rhs: t }), Array.isArray(e))) {
                  var E;
                  for (e.length, E = 0; E < e.length; E++)
                    E >= t.length ? n(new s(h, E, new a(void 0, e[E]))) : c(e[E], t[E], n, r, h, E, p);
                  for (; E < t.length; ) n(new s(h, E, new i(void 0, t[E++])));
                } else {
                  var b = Object.keys(e),
                    S = Object.keys(t);
                  b.forEach(function (o, i) {
                    var a = S.indexOf(o);
                    a >= 0 ? (c(e[o], t[o], n, r, h, o, p), (S = u(S, a))) : c(e[o], void 0, n, r, h, o, p);
                  }),
                    S.forEach(function (e) {
                      c(void 0, t[e], n, r, h, e, p);
                    });
                }
                p.length = p.length - 1;
              }
            else e !== t && (("number" === v && isNaN(e) && isNaN(t)) || n(new o(h, e, t)));
          }
          function f(e, t, n, r) {
            return (
              (r = r || []),
              c(
                e,
                t,
                function (e) {
                  e && r.push(e);
                },
                n
              ),
              r.length ? r : void 0
            );
          }
          function d(e, t, n) {
            if (n.path && n.path.length) {
              var r,
                o = e[t],
                i = n.path.length - 1;
              for (r = 0; r < i; r++) o = o[n.path[r]];
              switch (n.kind) {
                case "A":
                  d(o[n.path[r]], n.index, n.item);
                  break;
                case "D":
                  delete o[n.path[r]];
                  break;
                case "E":
                case "N":
                  o[n.path[r]] = n.rhs;
              }
            } else
              switch (n.kind) {
                case "A":
                  d(e[t], n.index, n.item);
                  break;
                case "D":
                  e = u(e, t);
                  break;
                case "E":
                case "N":
                  e[t] = n.rhs;
              }
            return e;
          }
          function p(e, t, n) {
            if (e && t && n && n.kind) {
              for (var r = e, o = -1, i = n.path ? n.path.length - 1 : 0; ++o < i; )
                "undefined" == typeof r[n.path[o]] && (r[n.path[o]] = "number" == typeof n.path[o] ? [] : {}), (r = r[n.path[o]]);
              switch (n.kind) {
                case "A":
                  d(n.path ? r[n.path[o]] : r, n.index, n.item);
                  break;
                case "D":
                  delete r[n.path[o]];
                  break;
                case "E":
                case "N":
                  r[n.path[o]] = n.rhs;
              }
            }
          }
          function h(e, t, n) {
            if (n.path && n.path.length) {
              var r,
                o = e[t],
                i = n.path.length - 1;
              for (r = 0; r < i; r++) o = o[n.path[r]];
              switch (n.kind) {
                case "A":
                  h(o[n.path[r]], n.index, n.item);
                  break;
                case "D":
                case "E":
                  o[n.path[r]] = n.lhs;
                  break;
                case "N":
                  delete o[n.path[r]];
              }
            } else
              switch (n.kind) {
                case "A":
                  h(e[t], n.index, n.item);
                  break;
                case "D":
                case "E":
                  e[t] = n.lhs;
                  break;
                case "N":
                  e = u(e, t);
              }
            return e;
          }
          function m(e, t, n) {
            if (e && t && n && n.kind) {
              var r,
                o,
                i = e;
              for (o = n.path.length - 1, r = 0; r < o; r++) "undefined" == typeof i[n.path[r]] && (i[n.path[r]] = {}), (i = i[n.path[r]]);
              switch (n.kind) {
                case "A":
                  h(i[n.path[r]], n.index, n.item);
                  break;
                case "D":
                case "E":
                  i[n.path[r]] = n.lhs;
                  break;
                case "N":
                  delete i[n.path[r]];
              }
            }
          }
          function v(e, t, n) {
            e &&
              t &&
              c(e, t, function (r) {
                (n && !n(e, t, r)) || p(e, t, r);
              });
          }
          function y(e) {
            return "color: " + k[e].color + "; font-weight: bold";
          }
          function g(e) {
            var t = e.kind,
              n = e.path,
              r = e.lhs,
              o = e.rhs,
              i = e.index,
              a = e.item;
            switch (t) {
              case "E":
                return [n.join("."), r, "\u2192", o];
              case "N":
                return [n.join("."), o];
              case "D":
                return [n.join(".")];
              case "A":
                return [n.join(".") + "[" + i + "]", a];
              default:
                return [];
            }
          }
          function _(e, t, n, r) {
            var o = f(e, t);
            try {
              r ? n.groupCollapsed("diff") : n.group("diff");
            } catch (e) {
              n.log("diff");
            }
            o
              ? o.forEach(function (e) {
                  var t = e.kind,
                    r = g(e);
                  n.log.apply(n, ["%c " + k[t].text, y(t)].concat(P(r)));
                })
              : n.log("\u2014\u2014 no diff \u2014\u2014");
            try {
              n.groupEnd();
            } catch (e) {
              n.log("\u2014\u2014 diff end \u2014\u2014 ");
            }
          }
          function E(e, t, n, r) {
            switch ("undefined" == typeof e ? "undefined" : O(e)) {
              case "object":
                return "function" == typeof e[r] ? e[r].apply(e, P(n)) : e[r];
              case "function":
                return e(t);
              default:
                return e;
            }
          }
          function b(e) {
            var t = e.timestamp,
              n = e.duration;
            return function (e, r, o) {
              var i = ["action"];
              return i.push("%c" + String(e.type)), t && i.push("%c@ " + r), n && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
            };
          }
          function S(e, t) {
            var n = t.logger,
              r = t.actionTransformer,
              o = t.titleFormatter,
              i = void 0 === o ? b(t) : o,
              a = t.collapsed,
              s = t.colors,
              u = t.level,
              l = t.diff,
              c = "undefined" == typeof t.titleFormatter;
            e.forEach(function (o, f) {
              var d = o.started,
                p = o.startedTime,
                h = o.action,
                m = o.prevState,
                v = o.error,
                y = o.took,
                g = o.nextState,
                b = e[f + 1];
              b && ((g = b.prevState), (y = b.started - d));
              var S = r(h),
                w =
                  "function" == typeof a
                    ? a(
                        function () {
                          return g;
                        },
                        h,
                        o
                      )
                    : a,
                A = C(p),
                T = s.title ? "color: " + s.title(S) + ";" : "",
                x = ["color: gray; font-weight: lighter;"];
              x.push(T),
                t.timestamp && x.push("color: gray; font-weight: lighter;"),
                t.duration && x.push("color: gray; font-weight: lighter;");
              var I = i(S, A, y);
              try {
                w
                  ? s.title && c
                    ? n.groupCollapsed.apply(n, ["%c " + I].concat(x))
                    : n.groupCollapsed(I)
                  : s.title && c
                  ? n.group.apply(n, ["%c " + I].concat(x))
                  : n.group(I);
              } catch (e) {
                n.log(I);
              }
              var N = E(u, S, [m], "prevState"),
                O = E(u, S, [S], "action"),
                P = E(u, S, [v, m], "error"),
                R = E(u, S, [g], "nextState");
              if (N)
                if (s.prevState) {
                  var k = "color: " + s.prevState(m) + "; font-weight: bold";
                  n[N]("%c prev state", k, m);
                } else n[N]("prev state", m);
              if (O)
                if (s.action) {
                  var L = "color: " + s.action(S) + "; font-weight: bold";
                  n[O]("%c action    ", L, S);
                } else n[O]("action    ", S);
              if (v && P)
                if (s.error) {
                  var D = "color: " + s.error(v, m) + "; font-weight: bold;";
                  n[P]("%c error     ", D, v);
                } else n[P]("error     ", v);
              if (R)
                if (s.nextState) {
                  var M = "color: " + s.nextState(g) + "; font-weight: bold";
                  n[R]("%c next state", M, g);
                } else n[R]("next state", g);
              l && _(m, g, n, w);
              try {
                n.groupEnd();
              } catch (e) {
                n.log("\u2014\u2014 log end \u2014\u2014");
              }
            });
          }
          function w() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = Object.assign({}, L, e),
              n = t.logger,
              r = t.stateTransformer,
              o = t.errorTransformer,
              i = t.predicate,
              a = t.logErrors,
              s = t.diffPredicate;
            if ("undefined" == typeof n)
              return function () {
                return function (e) {
                  return function (t) {
                    return e(t);
                  };
                };
              };
            if (e.getState && e.dispatch)
              return (
                console.error(
                  "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
                ),
                function () {
                  return function (e) {
                    return function (t) {
                      return e(t);
                    };
                  };
                }
              );
            var u = [];
            return function (e) {
              var n = e.getState;
              return function (e) {
                return function (l) {
                  if ("function" == typeof i && !i(n, l)) return e(l);
                  var c = {};
                  u.push(c), (c.started = N.now()), (c.startedTime = new Date()), (c.prevState = r(n())), (c.action = l);
                  var f = void 0;
                  if (a)
                    try {
                      f = e(l);
                    } catch (e) {
                      c.error = o(e);
                    }
                  else f = e(l);
                  (c.took = N.now() - c.started), (c.nextState = r(n()));
                  var d = t.diff && "function" == typeof s ? s(n, l) : t.diff;
                  if ((S(u, Object.assign({}, t, { diff: d })), (u.length = 0), c.error)) throw c.error;
                  return f;
                };
              };
            };
          }
          var A,
            T,
            x = function (e, t) {
              return new Array(t + 1).join(e);
            },
            I = function (e, t) {
              return x("0", t - e.toString().length) + e;
            },
            C = function (e) {
              return I(e.getHours(), 2) + ":" + I(e.getMinutes(), 2) + ":" + I(e.getSeconds(), 2) + "." + I(e.getMilliseconds(), 3);
            },
            N = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
            O =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  },
            P = function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
              }
              return Array.from(e);
            },
            R = [];
          (A = "object" === ("undefined" == typeof n.g ? "undefined" : O(n.g)) && n.g ? n.g : "undefined" != typeof window ? window : {}),
            (T = A.DeepDiff) &&
              R.push(function () {
                "undefined" != typeof T && A.DeepDiff === f && ((A.DeepDiff = T), (T = void 0));
              }),
            t(o, r),
            t(i, r),
            t(a, r),
            t(s, r),
            Object.defineProperties(f, {
              diff: { value: f, enumerable: !0 },
              observableDiff: { value: c, enumerable: !0 },
              applyDiff: { value: v, enumerable: !0 },
              applyChange: { value: p, enumerable: !0 },
              revertChange: { value: m, enumerable: !0 },
              isConflict: {
                value: function () {
                  return "undefined" != typeof T;
                },
                enumerable: !0
              },
              noConflict: {
                value: function () {
                  return (
                    R &&
                      (R.forEach(function (e) {
                        e();
                      }),
                      (R = null)),
                    f
                  );
                },
                enumerable: !0
              }
            });
          var k = {
              E: { color: "#2196F3", text: "CHANGED:" },
              N: { color: "#4CAF50", text: "ADDED:" },
              D: { color: "#F44336", text: "DELETED:" },
              A: { color: "#2196F3", text: "ARRAY:" }
            },
            L = {
              level: "log",
              logger: console,
              logErrors: !0,
              collapsed: void 0,
              predicate: void 0,
              duration: !1,
              timestamp: !0,
              stateTransformer: function (e) {
                return e;
              },
              actionTransformer: function (e) {
                return e;
              },
              errorTransformer: function (e) {
                return e;
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
            D = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.dispatch,
                n = e.getState;
              return "function" == typeof t || "function" == typeof n
                ? w()({ dispatch: t, getState: n })
                : void console.error(
                    "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
                  );
            };
          (e.defaults = L), (e.createLogger = w), (e.logger = D), (e.default = D), Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
      288: function (e, t) {
        "use strict";
        var n, r, o, i, a;
        if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
          var s = null,
            u = null,
            l = function e() {
              if (null !== s)
                try {
                  var n = t.unstable_now();
                  s(!0, n), (s = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            },
            c = Date.now();
          (t.unstable_now = function () {
            return Date.now() - c;
          }),
            (n = function (e) {
              null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(l, 0));
            }),
            (r = function (e, t) {
              u = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(u);
            }),
            (i = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.performance,
            d = window.Date,
            p = window.setTimeout,
            h = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var m = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
              "function" !== typeof m &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                );
          }
          if ("object" === typeof f && "function" === typeof f.now)
            t.unstable_now = function () {
              return f.now();
            };
          else {
            var v = d.now();
            t.unstable_now = function () {
              return d.now() - v;
            };
          }
          var y = !1,
            g = null,
            _ = -1,
            E = 5,
            b = 0;
          (i = function () {
            return t.unstable_now() >= b;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                  )
                : (E = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var S = new MessageChannel(),
            w = S.port2;
          (S.port1.onmessage = function () {
            if (null !== g) {
              var e = t.unstable_now();
              b = e + E;
              try {
                g(!0, e) ? w.postMessage(null) : ((y = !1), (g = null));
              } catch (n) {
                throw (w.postMessage(null), n);
              }
            } else y = !1;
          }),
            (n = function (e) {
              (g = e), y || ((y = !0), w.postMessage(null));
            }),
            (r = function (e, n) {
              _ = p(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              h(_), (_ = -1);
            });
        }
        function A(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < I(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function T(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function x(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var i = 2 * (r + 1) - 1,
                  a = e[i],
                  s = i + 1,
                  u = e[s];
                if (void 0 !== a && 0 > I(a, n))
                  void 0 !== u && 0 > I(u, a) ? ((e[r] = u), (e[s] = n), (r = s)) : ((e[r] = a), (e[i] = n), (r = i));
                else {
                  if (!(void 0 !== u && 0 > I(u, n))) break e;
                  (e[r] = u), (e[s] = n), (r = s);
                }
              }
            }
            return t;
          }
          return null;
        }
        function I(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var C = [],
          N = [],
          O = 1,
          P = null,
          R = 3,
          k = !1,
          L = !1,
          D = !1;
        function M(e) {
          for (var t = T(N); null !== t; ) {
            if (null === t.callback) x(N);
            else {
              if (!(t.startTime <= e)) break;
              x(N), (t.sortIndex = t.expirationTime), A(C, t);
            }
            t = T(N);
          }
        }
        function F(e) {
          if (((D = !1), M(e), !L))
            if (null !== T(C)) (L = !0), n(B);
            else {
              var t = T(N);
              null !== t && r(F, t.startTime - e);
            }
        }
        function B(e, n) {
          (L = !1), D && ((D = !1), o()), (k = !0);
          var a = R;
          try {
            for (M(n), P = T(C); null !== P && (!(P.expirationTime > n) || (e && !i())); ) {
              var s = P.callback;
              if (null !== s) {
                (P.callback = null), (R = P.priorityLevel);
                var u = s(P.expirationTime <= n);
                (n = t.unstable_now()), "function" === typeof u ? (P.callback = u) : P === T(C) && x(C), M(n);
              } else x(C);
              P = T(C);
            }
            if (null !== P) var l = !0;
            else {
              var c = T(N);
              null !== c && r(F, c.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (P = null), (R = a), (k = !1);
          }
        }
        function U(e) {
          switch (e) {
            case 1:
              return -1;
            case 2:
              return 250;
            case 5:
              return 1073741823;
            case 4:
              return 1e4;
            default:
              return 5e3;
          }
        }
        var j = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            L || k || ((L = !0), n(B));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return T(C);
          }),
          (t.unstable_next = function (e) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = R;
            }
            var n = R;
            R = t;
            try {
              return e();
            } finally {
              R = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = j),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = R;
            R = e;
            try {
              return t();
            } finally {
              R = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var s = t.unstable_now();
            if ("object" === typeof a && null !== a) {
              var u = a.delay;
              (u = "number" === typeof u && 0 < u ? s + u : s), (a = "number" === typeof a.timeout ? a.timeout : U(e));
            } else (a = U(e)), (u = s);
            return (
              (e = { id: O++, callback: i, priorityLevel: e, startTime: u, expirationTime: (a = u + a), sortIndex: -1 }),
              u > s
                ? ((e.sortIndex = u), A(N, e), null === T(C) && e === T(N) && (D ? o() : (D = !0), r(F, u - s)))
                : ((e.sortIndex = a), A(C, e), L || k || ((L = !0), n(B))),
              e
            );
          }),
          (t.unstable_shouldYield = function () {
            var e = t.unstable_now();
            M(e);
            var n = T(C);
            return (
              (n !== P && null !== P && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < P.expirationTime) || i()
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = R;
            return function () {
              var n = R;
              R = t;
              try {
                return e.apply(this, arguments);
              } finally {
                R = n;
              }
            };
          });
      },
      499: function (e, t, n) {
        "use strict";
        e.exports = n(288);
      },
      49: function (e, t, n) {
        var r = n(375),
          o = n(652),
          i = o;
        (i.v1 = r), (i.v4 = o), (e.exports = i);
      },
      616: function (e) {
        for (var t = [], n = 0; n < 256; ++n) t[n] = (n + 256).toString(16).substr(1);
        e.exports = function (e, n) {
          var r = n || 0,
            o = t;
          return [
            o[e[r++]],
            o[e[r++]],
            o[e[r++]],
            o[e[r++]],
            "-",
            o[e[r++]],
            o[e[r++]],
            "-",
            o[e[r++]],
            o[e[r++]],
            "-",
            o[e[r++]],
            o[e[r++]],
            "-",
            o[e[r++]],
            o[e[r++]],
            o[e[r++]],
            o[e[r++]],
            o[e[r++]],
            o[e[r++]]
          ].join("");
        };
      },
      712: function (e) {
        var t =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
        if (t) {
          var n = new Uint8Array(16);
          e.exports = function () {
            return t(n), n;
          };
        } else {
          var r = new Array(16);
          e.exports = function () {
            for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), (r[t] = (e >>> ((3 & t) << 3)) & 255);
            return r;
          };
        }
      },
      375: function (e, t, n) {
        var r,
          o,
          i = n(712),
          a = n(616),
          s = 0,
          u = 0;
        e.exports = function (e, t, n) {
          var l = (t && n) || 0,
            c = t || [],
            f = (e = e || {}).node || r,
            d = void 0 !== e.clockseq ? e.clockseq : o;
          if (null == f || null == d) {
            var p = i();
            null == f && (f = r = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == d && (d = o = 16383 & ((p[6] << 8) | p[7]));
          }
          var h = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
            m = void 0 !== e.nsecs ? e.nsecs : u + 1,
            v = h - s + (m - u) / 1e4;
          if ((v < 0 && void 0 === e.clockseq && (d = (d + 1) & 16383), (v < 0 || h > s) && void 0 === e.nsecs && (m = 0), m >= 1e4))
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (s = h), (u = m), (o = d);
          var y = (1e4 * (268435455 & (h += 122192928e5)) + m) % 4294967296;
          (c[l++] = (y >>> 24) & 255), (c[l++] = (y >>> 16) & 255), (c[l++] = (y >>> 8) & 255), (c[l++] = 255 & y);
          var g = ((h / 4294967296) * 1e4) & 268435455;
          (c[l++] = (g >>> 8) & 255),
            (c[l++] = 255 & g),
            (c[l++] = ((g >>> 24) & 15) | 16),
            (c[l++] = (g >>> 16) & 255),
            (c[l++] = (d >>> 8) | 128),
            (c[l++] = 255 & d);
          for (var _ = 0; _ < 6; ++_) c[l + _] = f[_];
          return t || a(c);
        };
      },
      652: function (e, t, n) {
        var r = n(712),
          o = n(616);
        e.exports = function (e, t, n) {
          var i = (t && n) || 0;
          "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
          var a = (e = e || {}).random || (e.rng || r)();
          if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) for (var s = 0; s < 16; ++s) t[i + s] = a[s];
          return t || o(a);
        };
      },
      121: function (e) {
        (e.exports = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      638: function (e) {
        (e.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      23: function (e, t, n) {
        var r = n(174);
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, r(o.key), o);
          }
        }
        (e.exports = function (e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      77: function (e, t, n) {
        var r = n(692),
          o = n(543),
          i = n(310);
        (e.exports = function (e) {
          var t = o();
          return function () {
            var n,
              o = r(e);
            if (t) {
              var a = r(this).constructor;
              n = Reflect.construct(o, arguments, a);
            } else n = o.apply(this, arguments);
            return i(this, n);
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      692: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      },
      126: function (e, t, n) {
        var r = n(494);
        (e.exports = function (e, t) {
          if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && r(e, t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      543: function (e) {
        (e.exports = function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      310: function (e, t, n) {
        var r = n(114).default,
          o = n(121);
        (e.exports = function (e, t) {
          if (t && ("object" === r(t) || "function" === typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return o(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      494: function (e) {
        function t(n, r) {
          return (
            (e.exports = t =
              Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n, r)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      },
      662: function (e, t, n) {
        var r = n(114).default;
        (e.exports = function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      174: function (e, t, n) {
        var r = n(114).default,
          o = n(662);
        (e.exports = function (e) {
          var t = o(e, "string");
          return "symbol" === r(t) ? t : String(t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      114: function (e) {
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
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
          }
        }),
        e
      );
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "");
  var r = {};
  !(function () {
    "use strict";
    n.r(r);
    var e = {};
    n.r(e),
      n.d(e, {
        FunctionToString: function () {
          return Ua;
        },
        InboundFilters: function () {
          return Ks;
        }
      });
    var t = {};
    function o(e) {
      return (
        (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }),
        o(e)
      );
    }
    function i(e) {
      var t = (function (e, t) {
        if ("object" !== o(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== o(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === o(t) ? t : String(t);
    }
    function a(e, t, n) {
      return (t = i(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    function s(e, t) {
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
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    n.r(t),
      n.d(t, {
        Breadcrumbs: function () {
          return qu;
        },
        GlobalHandlers: function () {
          return Wu;
        },
        LinkedErrors: function () {
          return Ku;
        },
        TryCatch: function () {
          return Yu;
        },
        UserAgent: function () {
          return Xu;
        }
      });
    var l = n(49);
    var c = "[state-sync] set connected";
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function d(e, t) {
      if (e) {
        if ("string" === typeof e) return f(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? f(e, t)
            : void 0
        );
      }
    }
    function p(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              s = [],
              u = !0,
              l = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                u = !1;
              } else for (; !(u = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); u = !0);
            } catch (c) {
              (l = !0), (o = c);
            } finally {
              try {
                if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
              } finally {
                if (l) throw o;
              }
            }
            return s;
          }
        })(e, t) ||
        d(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function h(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    }
    function m(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = h(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    var v = ["id"];
    function y(e) {
      if (!e) return null;
      var t = e.id,
        n = m(e, v);
      return u({ id: "".concat(t) }, n);
    }
    var g = {
        activateTab: function (e) {
          var t = parseInt(e);
          return new Promise(function (e) {
            chrome.tabs.get(t, function (n) {
              chrome.windows.update(n.windowId, { focused: !0 }, function () {
                chrome.tabs.update(t, { active: !0 }, function () {
                  return e();
                });
              });
            });
          });
        },
        executeScript: function (e, t) {
          return new Promise(function (n) {
            chrome.tabs.executeScript(parseInt(e, 10), { code: t }, function (e) {
              e && e.length ? n(e[0]) : n(null);
            });
          });
        },
        executeScriptFile: function (e, t) {
          return (
            chrome.scripting
              ? chrome.scripting.executeScript({ target: { tabId: parseInt(e), allFrames: !0 }, files: [t] })
              : chrome.tabs.executeScript(parseInt(e), { file: t, allFrames: !0 }),
            Promise.resolve()
          );
        },
        findTabs: function (e) {
          return (
            (e = e.map(function (e) {
              return e + "/*";
            })),
            new Promise(function (t) {
              chrome.tabs.query({ url: e }, function (e) {
                return t(
                  e
                    ? e.map(function (e) {
                        return y(e);
                      })
                    : null
                );
              });
            })
          );
        },
        findAllTabs: function () {
          return new Promise(function (e) {
            chrome.tabs.query({}, function (t) {
              e(t);
            });
          });
        },
        getCurrentTab: function () {
          return new Promise(function (e, t) {
            chrome.tabs.query({ active: !0, currentWindow: !0 }, function (n) {
              var r = p(n, 1)[0];
              r && r.id && e({ id: r.id.toString(), url: r.url }), t();
            });
          });
        },
        createTab: function (e) {
          return new Promise(function (t) {
            chrome.tabs.create({ url: e }, function (e) {
              return t(y(e));
            });
          });
        },
        updateTab: function (e, t) {
          var n = parseInt(e, 10);
          return new Promise(function (e) {
            chrome.tabs.update(n, { url: t }, function () {
              var t,
                r = setTimeout(function () {
                  chrome.tabs.onUpdated.removeListener(t), e(y(null));
                }, 5e3);
              (t = function (o, i, a) {
                o === n && "complete" === i.status && (chrome.tabs.onUpdated.removeListener(t), clearTimeout(r), e(y(a)));
              }),
                chrome.tabs.onUpdated.addListener(t);
            });
          });
        },
        onTabClose: function (e) {
          var t = function (t) {
            e({ id: "".concat(t) });
          };
          return (
            chrome.tabs.onRemoved.addListener(t),
            function () {
              return chrome.tabs.onRemoved.removeListener(t);
            }
          );
        },
        removeTab: function (e) {
          return new Promise(function (t) {
            chrome.tabs.remove(e.map(parseInt), t);
          });
        },
        onActivated: function (e) {
          var t = function (t) {
            e(t.tabId.toString());
          };
          chrome.tabs.onActivated.addListener(t);
          var n = function (t) {
            chrome.tabs.query({ active: !0, windowId: t }, function (t) {
              var n = t[0];
              n && n.id && e(n.id.toString());
            });
          };
          return (
            chrome.windows.onFocusChanged.addListener(n),
            function () {
              chrome.tabs.onActivated.removeListener(t), chrome.windows.onFocusChanged.removeListener(n);
            }
          );
        },
        onNavigate: function (e) {
          var t = function (t) {
            e({
              tabId: t.tabId.toString(),
              frameId: t.frameId.toString(),
              userInitiated:
                t.transitionQualifiers.includes("forward_back") ||
                t.transitionQualifiers.includes("from_address_bar") ||
                ["typed", "auto_bookmark", "generated", "auto_toplevel", "start_page", "reload", "keyword", "keyword_generated"].includes(
                  t.transitionType
                )
            });
          };
          return (
            chrome.webNavigation.onCommitted.addListener(t),
            function () {
              chrome.webNavigation.onCommitted.removeListener(t);
            }
          );
        }
      },
      _ = function () {
        return chrome.browserAction || chrome.action;
      },
      E = {
        setBadgeText: function (e) {
          _().setBadgeBackgroundColor({ color: "#555" }), _().setBadgeText({ text: e });
        },
        setIcon: function (e) {
          _().setIcon({ path: e });
        }
      },
      b = {
        onAuthRequired: function (e) {
          var t = function (t, n) {
            n &&
              e({ tabId: t.tabId.toString(), frameId: t.frameId.toString(), url: t.url, basicAuthentication: !0 }, t.requestId).then(
                function (e) {
                  n({ authCredentials: e });
                }
              );
          };
          return (
            chrome.webRequest.onAuthRequired.addListener(t, { urls: ["<all_urls>"] }, ["asyncBlocking"]),
            function () {
              chrome.webRequest.onAuthRequired.removeListener(t);
            }
          );
        }
      };
    function S() {
      S = function () {
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
        a = i.iterator || "@@iterator",
        s = i.asyncIterator || "@@asyncIterator",
        u = i.toStringTag || "@@toStringTag";
      function l(e, t, n) {
        return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
      }
      try {
        l({}, "");
      } catch (O) {
        l = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, o) {
        var i = t && t.prototype instanceof p ? t : p,
          a = Object.create(i.prototype),
          s = new I(o || []);
        return r(a, "_invoke", { value: w(e, n, s) }), a;
      }
      function f(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (O) {
          return { type: "throw", arg: O };
        }
      }
      e.wrap = c;
      var d = {};
      function p() {}
      function h() {}
      function m() {}
      var v = {};
      l(v, a, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        g = y && y(y(C([])));
      g && g !== t && n.call(g, a) && (v = g);
      var _ = (m.prototype = p.prototype = Object.create(v));
      function E(e) {
        ["next", "throw", "return"].forEach(function (t) {
          l(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function b(e, t) {
        function i(r, a, s, u) {
          var l = f(e[r], e, a);
          if ("throw" !== l.type) {
            var c = l.arg,
              d = c.value;
            return d && "object" == o(d) && n.call(d, "__await")
              ? t.resolve(d.__await).then(
                  function (e) {
                    i("next", e, s, u);
                  },
                  function (e) {
                    i("throw", e, s, u);
                  }
                )
              : t.resolve(d).then(
                  function (e) {
                    (c.value = e), s(c);
                  },
                  function (e) {
                    return i("throw", e, s, u);
                  }
                );
          }
          u(l.arg);
        }
        var a;
        r(this, "_invoke", {
          value: function (e, n) {
            function r() {
              return new t(function (t, r) {
                i(e, n, t, r);
              });
            }
            return (a = a ? a.then(r, r) : r());
          }
        });
      }
      function w(e, t, n) {
        var r = "suspendedStart";
        return function (o, i) {
          if ("executing" === r) throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === o) throw i;
            return N();
          }
          for (n.method = o, n.arg = i; ; ) {
            var a = n.delegate;
            if (a) {
              var s = A(a, n);
              if (s) {
                if (s === d) continue;
                return s;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var u = f(e, t, n);
            if ("normal" === u.type) {
              if (((r = n.done ? "completed" : "suspendedYield"), u.arg === d)) continue;
              return { value: u.arg, done: n.done };
            }
            "throw" === u.type && ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
          }
        };
      }
      function A(e, t) {
        var n = t.method,
          r = e.iterator[n];
        if (void 0 === r)
          return (
            (t.delegate = null),
            ("throw" === n && e.iterator.return && ((t.method = "return"), (t.arg = void 0), A(e, t), "throw" === t.method)) ||
              ("return" !== n && ((t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
            d
          );
        var o = f(r, e.iterator, t.arg);
        if ("throw" === o.type) return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), d;
        var i = o.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              d)
            : i
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), d);
      }
      function T(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function x(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function I(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(T, this), this.reset(!0);
      }
      function C(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = m),
        r(_, "constructor", { value: m, configurable: !0 }),
        r(m, "constructor", { value: h, configurable: !0 }),
        (h.displayName = l(m, u, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : ((e.__proto__ = m), l(e, u, "GeneratorFunction")),
            (e.prototype = Object.create(_)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        E(b.prototype),
        l(b.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(c(t, n, r, o), i);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        E(_),
        l(_, u, "Generator"),
        l(_, a, function () {
          return this;
        }),
        l(_, "toString", function () {
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
        (e.values = C),
        (I.prototype = {
          constructor: I,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(x),
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
              return (a.type = "throw"), (a.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var s = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (s && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), d) : this.complete(a);
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              d
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), d;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  x(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }), "next" === this.method && (this.arg = void 0), d;
          }
        }),
        e
      );
    }
    function w(e, t, n, r, o, i, a) {
      try {
        var s = e[i](a),
          u = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(u) : Promise.resolve(u).then(r, o);
    }
    function A(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, o) {
          var i = e.apply(t, n);
          function a(e) {
            w(i, r, o, a, s, "next", e);
          }
          function s(e) {
            w(i, r, o, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var T = {
        getUrl: function (e) {
          return chrome.runtime.getURL(e);
        },
        permissions: {
          request: function (e) {
            return new Promise(function (t) {
              chrome.permissions.request({ permissions: e }, function (e) {
                t(e);
              });
            });
          }
        },
        disableBrowserPasswordSaving: (function () {
          var e = A(
            S().mark(function e() {
              return S().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        new Promise(function (e, t) {
                          chrome.privacy.services.passwordSavingEnabled.get({}, function (n) {
                            if (!1 === n.value) return e();
                            "controllable_by_this_extension" === n.levelOfControl
                              ? chrome.privacy.services.passwordSavingEnabled.set({ value: !1 }, function () {
                                  if (void 0 === chrome.runtime.lastError) return e();
                                  t(new Error("Oops, we couldn't update your setting, please do so manually"));
                                })
                              : t(new Error("Oops, we couldn't update your setting, please do so manually"));
                          });
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()
      },
      x = { tabs: g, browserAction: E, webRequest: b, general: T };
    function I(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return f(e);
        })(e) ||
        (function (e) {
          if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
        })(e) ||
        d(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var C = n(381),
      N = n(306);
    function O(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function P(e, t) {
      return (
        (P = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        P(e, t)
      );
    }
    var R = n(775),
      k = n.n(R),
      L = C.createContext(null);
    var D = function (e) {
        e();
      },
      M = function () {
        return D;
      },
      F = null,
      B = { notify: function () {} };
    var U = (function () {
        function e(e, t) {
          (this.store = e),
            (this.parentSub = t),
            (this.unsubscribe = null),
            (this.listeners = B),
            (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
        }
        var t = e.prototype;
        return (
          (t.addNestedSub = function (e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
          }),
          (t.notifyNestedSubs = function () {
            this.listeners.notify();
          }),
          (t.handleChangeWrapper = function () {
            this.onStateChange && this.onStateChange();
          }),
          (t.isSubscribed = function () {
            return Boolean(this.unsubscribe);
          }),
          (t.trySubscribe = function () {
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                : this.store.subscribe(this.handleChangeWrapper)),
              (this.listeners = (function () {
                var e = M(),
                  t = [],
                  n = [];
                return {
                  clear: function () {
                    (n = F), (t = F);
                  },
                  notify: function () {
                    var r = (t = n);
                    e(function () {
                      for (var e = 0; e < r.length; e++) r[e]();
                    });
                  },
                  get: function () {
                    return n;
                  },
                  subscribe: function (e) {
                    var r = !0;
                    return (
                      n === t && (n = t.slice()),
                      n.push(e),
                      function () {
                        r && t !== F && ((r = !1), n === t && (n = t.slice()), n.splice(n.indexOf(e), 1));
                      }
                    );
                  }
                };
              })()));
          }),
          (t.tryUnsubscribe = function () {
            this.unsubscribe && (this.unsubscribe(), (this.unsubscribe = null), this.listeners.clear(), (this.listeners = B));
          }),
          e
        );
      })(),
      j = (function (e) {
        var t, n;
        function r(t) {
          var n;
          n = e.call(this, t) || this;
          var r = t.store;
          n.notifySubscribers = n.notifySubscribers.bind(O(n));
          var o = new U(r);
          return (o.onStateChange = n.notifySubscribers), (n.state = { store: r, subscription: o }), (n.previousState = r.getState()), n;
        }
        (n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), P(t, n);
        var o = r.prototype;
        return (
          (o.componentDidMount = function () {
            (this._isMounted = !0),
              this.state.subscription.trySubscribe(),
              this.previousState !== this.props.store.getState() && this.state.subscription.notifyNestedSubs();
          }),
          (o.componentWillUnmount = function () {
            this.unsubscribe && this.unsubscribe(), this.state.subscription.tryUnsubscribe(), (this._isMounted = !1);
          }),
          (o.componentDidUpdate = function (e) {
            if (this.props.store !== e.store) {
              this.state.subscription.tryUnsubscribe();
              var t = new U(this.props.store);
              (t.onStateChange = this.notifySubscribers), this.setState({ store: this.props.store, subscription: t });
            }
          }),
          (o.notifySubscribers = function () {
            this.state.subscription.notifyNestedSubs();
          }),
          (o.render = function () {
            var e = this.props.context || L;
            return C.createElement(e.Provider, { value: this.state }, this.props.children);
          }),
          r
        );
      })(C.Component);
    j.propTypes = {
      store: k().shape({ subscribe: k().func.isRequired, dispatch: k().func.isRequired, getState: k().func.isRequired }),
      context: k().object,
      children: k().any
    };
    var G = j;
    function V() {
      return (
        (V = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        V.apply(this, arguments)
      );
    }
    var H = n(642),
      W = n.n(H),
      z = n(15),
      Y = n.n(z),
      q = n(107),
      K = [],
      $ = [null, null];
    function X(e, t) {
      var n = e[1];
      return [t.payload, n + 1];
    }
    var Q = function () {
        return [null, 0];
      },
      Z =
        "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement
          ? C.useLayoutEffect
          : C.useEffect;
    function J(e, t) {
      void 0 === t && (t = {});
      var n = t,
        r = n.getDisplayName,
        o =
          void 0 === r
            ? function (e) {
                return "ConnectAdvanced(" + e + ")";
              }
            : r,
        i = n.methodName,
        a = void 0 === i ? "connectAdvanced" : i,
        s = n.renderCountProp,
        u = void 0 === s ? void 0 : s,
        l = n.shouldHandleStateChanges,
        c = void 0 === l || l,
        f = n.storeKey,
        d = void 0 === f ? "store" : f,
        p = n.withRef,
        m = void 0 !== p && p,
        v = n.forwardRef,
        y = void 0 !== v && v,
        g = n.context,
        _ = void 0 === g ? L : g,
        E = h(n, [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context"
        ]);
      Y()(void 0 === u, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),
        Y()(!m, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
      Y()(
        "store" === d,
        "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect"
      );
      var b = _;
      return function (t) {
        var n = t.displayName || t.name || "Component",
          r = o(n),
          i = V({}, E, {
            getDisplayName: o,
            methodName: a,
            renderCountProp: u,
            shouldHandleStateChanges: c,
            storeKey: d,
            displayName: r,
            wrappedComponentName: n,
            WrappedComponent: t
          }),
          s = E.pure;
        var l = s
          ? C.useMemo
          : function (e) {
              return e();
            };
        function f(n) {
          var o = (0, C.useMemo)(
              function () {
                var e = n.forwardedRef,
                  t = h(n, ["forwardedRef"]);
                return [n.context, e, t];
              },
              [n]
            ),
            a = o[0],
            s = o[1],
            u = o[2],
            f = (0, C.useMemo)(
              function () {
                return a && a.Consumer && (0, q.isContextConsumer)(C.createElement(a.Consumer, null)) ? a : b;
              },
              [a, b]
            ),
            d = (0, C.useContext)(f),
            p = Boolean(n.store),
            m = Boolean(d) && Boolean(d.store);
          Y()(
            p || m,
            'Could not find "store" in the context of "' +
              r +
              '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' +
              r +
              " in connect options."
          );
          var v = n.store || d.store,
            y = (0, C.useMemo)(
              function () {
                return (function (t) {
                  return e(t.dispatch, i);
                })(v);
              },
              [v]
            ),
            g = (0, C.useMemo)(
              function () {
                if (!c) return $;
                var e = new U(v, p ? null : d.subscription),
                  t = e.notifyNestedSubs.bind(e);
                return [e, t];
              },
              [v, p, d]
            ),
            _ = g[0],
            E = g[1],
            S = (0, C.useMemo)(
              function () {
                return p ? d : V({}, d, { subscription: _ });
              },
              [p, d, _]
            ),
            w = (0, C.useReducer)(X, K, Q),
            A = w[0][0],
            T = w[1];
          if (A && A.error) throw A.error;
          var x = (0, C.useRef)(),
            I = (0, C.useRef)(u),
            N = (0, C.useRef)(),
            O = (0, C.useRef)(!1),
            P = l(
              function () {
                return N.current && u === I.current ? N.current : y(v.getState(), u);
              },
              [v, A, u]
            );
          Z(function () {
            (I.current = u), (x.current = P), (O.current = !1), N.current && ((N.current = null), E());
          }),
            Z(
              function () {
                if (c) {
                  var e = !1,
                    t = null,
                    n = function () {
                      if (!e) {
                        var n,
                          r,
                          o = v.getState();
                        try {
                          n = y(o, I.current);
                        } catch (i) {
                          (r = i), (t = i);
                        }
                        r || (t = null),
                          n === x.current
                            ? O.current || E()
                            : ((x.current = n),
                              (N.current = n),
                              (O.current = !0),
                              T({ type: "STORE_UPDATED", payload: { latestStoreState: o, error: r } }));
                      }
                    };
                  (_.onStateChange = n), _.trySubscribe(), n();
                  return function () {
                    if (((e = !0), _.tryUnsubscribe(), t)) throw t;
                  };
                }
              },
              [v, _, y]
            );
          var R = (0, C.useMemo)(
            function () {
              return C.createElement(t, V({}, P, { ref: s }));
            },
            [s, t, P]
          );
          return (0, C.useMemo)(
            function () {
              return c ? C.createElement(f.Provider, { value: S }, R) : R;
            },
            [f, R, S]
          );
        }
        var p = s ? C.memo(f) : f;
        if (((p.WrappedComponent = t), (p.displayName = r), y)) {
          var m = C.forwardRef(function (e, t) {
            return C.createElement(p, V({}, e, { forwardedRef: t }));
          });
          return (m.displayName = r), (m.WrappedComponent = t), W()(m, t);
        }
        return W()(p, t);
      };
    }
    var ee = Object.prototype.hasOwnProperty;
    function te(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t;
    }
    function ne(e, t) {
      if (te(e, t)) return !0;
      if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++) if (!ee.call(t, n[o]) || !te(e[n[o]], t[n[o]])) return !1;
      return !0;
    }
    function re(e) {
      return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
      );
    }
    var oe = ("function" === typeof Symbol && Symbol.observable) || "@@observable",
      ie = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
      },
      ae = {
        INIT: "@@redux/INIT" + ie(),
        REPLACE: "@@redux/REPLACE" + ie(),
        PROBE_UNKNOWN_ACTION: function () {
          return "@@redux/PROBE_UNKNOWN_ACTION" + ie();
        }
      };
    function se(e) {
      if ("object" !== typeof e || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    function ue(e, t, n) {
      var r;
      if (("function" === typeof t && "function" === typeof n) || ("function" === typeof n && "function" === typeof arguments[3]))
        throw new Error(re(0));
      if (("function" === typeof t && "undefined" === typeof n && ((n = t), (t = void 0)), "undefined" !== typeof n)) {
        if ("function" !== typeof n) throw new Error(re(1));
        return n(ue)(e, t);
      }
      if ("function" !== typeof e) throw new Error(re(2));
      var o = e,
        i = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function c() {
        if (u) throw new Error(re(3));
        return i;
      }
      function f(e) {
        if ("function" !== typeof e) throw new Error(re(4));
        if (u) throw new Error(re(5));
        var t = !0;
        return (
          l(),
          s.push(e),
          function () {
            if (t) {
              if (u) throw new Error(re(6));
              (t = !1), l();
              var n = s.indexOf(e);
              s.splice(n, 1), (a = null);
            }
          }
        );
      }
      function d(e) {
        if (!se(e)) throw new Error(re(7));
        if ("undefined" === typeof e.type) throw new Error(re(8));
        if (u) throw new Error(re(9));
        try {
          (u = !0), (i = o(i, e));
        } finally {
          u = !1;
        }
        for (var t = (a = s), n = 0; n < t.length; n++) {
          (0, t[n])();
        }
        return e;
      }
      return (
        d({ type: ae.INIT }),
        ((r = {
          dispatch: d,
          subscribe: f,
          getState: c,
          replaceReducer: function (e) {
            if ("function" !== typeof e) throw new Error(re(10));
            (o = e), d({ type: ae.REPLACE });
          }
        })[oe] = function () {
          var e,
            t = f;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e) throw new Error(re(11));
                function n() {
                  e.next && e.next(c());
                }
                return n(), { unsubscribe: t(n) };
              }
            })[oe] = function () {
              return this;
            }),
            e
          );
        }),
        r
      );
    }
    function le(e, t) {
      return function () {
        return t(e.apply(this, arguments));
      };
    }
    function ce(e, t) {
      if ("function" === typeof e) return le(e, t);
      if ("object" !== typeof e || null === e) throw new Error(re(16));
      var n = {};
      for (var r in e) {
        var o = e[r];
        "function" === typeof o && (n[r] = le(o, t));
      }
      return n;
    }
    function fe() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return 0 === t.length
        ? function (e) {
            return e;
          }
        : 1 === t.length
        ? t[0]
        : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
    }
    function de() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return function (e) {
        return function () {
          var n = e.apply(void 0, arguments),
            r = function () {
              throw new Error(re(15));
            },
            o = {
              getState: n.getState,
              dispatch: function () {
                return r.apply(void 0, arguments);
              }
            },
            i = t.map(function (e) {
              return e(o);
            });
          return (r = fe.apply(void 0, i)(n.dispatch)), u(u({}, n), {}, { dispatch: r });
        };
      };
    }
    function pe(e) {
      return function (t, n) {
        var r = e(t, n);
        function o() {
          return r;
        }
        return (o.dependsOnOwnProps = !1), o;
      };
    }
    function he(e) {
      return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
    }
    function me(e, t) {
      return function (t, n) {
        n.displayName;
        var r = function (e, t) {
          return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
        };
        return (
          (r.dependsOnOwnProps = !0),
          (r.mapToProps = function (t, n) {
            (r.mapToProps = e), (r.dependsOnOwnProps = he(e));
            var o = r(t, n);
            return "function" === typeof o && ((r.mapToProps = o), (r.dependsOnOwnProps = he(o)), (o = r(t, n))), o;
          }),
          r
        );
      };
    }
    var ve = [
      function (e) {
        return "function" === typeof e ? me(e) : void 0;
      },
      function (e) {
        return e
          ? void 0
          : pe(function (e) {
              return { dispatch: e };
            });
      },
      function (e) {
        return e && "object" === typeof e
          ? pe(function (t) {
              return ce(e, t);
            })
          : void 0;
      }
    ];
    var ye = [
      function (e) {
        return "function" === typeof e ? me(e) : void 0;
      },
      function (e) {
        return e
          ? void 0
          : pe(function () {
              return {};
            });
      }
    ];
    function ge(e, t, n) {
      return V({}, n, e, t);
    }
    var _e = [
      function (e) {
        return "function" === typeof e
          ? (function (e) {
              return function (t, n) {
                n.displayName;
                var r,
                  o = n.pure,
                  i = n.areMergedPropsEqual,
                  a = !1;
                return function (t, n, s) {
                  var u = e(t, n, s);
                  return a ? (o && i(u, r)) || (r = u) : ((a = !0), (r = u)), r;
                };
              };
            })(e)
          : void 0;
      },
      function (e) {
        return e
          ? void 0
          : function () {
              return ge;
            };
      }
    ];
    function Ee(e, t, n, r) {
      return function (o, i) {
        return n(e(o, i), t(r, i), i);
      };
    }
    function be(e, t, n, r, o) {
      var i,
        a,
        s,
        u,
        l,
        c = o.areStatesEqual,
        f = o.areOwnPropsEqual,
        d = o.areStatePropsEqual,
        p = !1;
      function h(o, p) {
        var h = !f(p, a),
          m = !c(o, i);
        return (
          (i = o),
          (a = p),
          h && m
            ? ((s = e(i, a)), t.dependsOnOwnProps && (u = t(r, a)), (l = n(s, u, a)))
            : h
            ? (e.dependsOnOwnProps && (s = e(i, a)), t.dependsOnOwnProps && (u = t(r, a)), (l = n(s, u, a)))
            : m
            ? (function () {
                var t = e(i, a),
                  r = !d(t, s);
                return (s = t), r && (l = n(s, u, a)), l;
              })()
            : l
        );
      }
      return function (o, c) {
        return p ? h(o, c) : ((s = e((i = o), (a = c))), (u = t(r, a)), (l = n(s, u, a)), (p = !0), l);
      };
    }
    function Se(e, t) {
      var n = t.initMapStateToProps,
        r = t.initMapDispatchToProps,
        o = t.initMergeProps,
        i = h(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
        a = n(e, i),
        s = r(e, i),
        u = o(e, i);
      return (i.pure ? be : Ee)(a, s, u, e, i);
    }
    function we(e, t, n) {
      for (var r = t.length - 1; r >= 0; r--) {
        var o = t[r](e);
        if (o) return o;
      }
      return function (t, r) {
        throw new Error(
          "Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + "."
        );
      };
    }
    function Ae(e, t) {
      return e === t;
    }
    !(function (e) {
      var t = void 0 === e ? {} : e,
        n = t.connectHOC,
        r = void 0 === n ? J : n,
        o = t.mapStateToPropsFactories,
        i = void 0 === o ? ye : o,
        a = t.mapDispatchToPropsFactories,
        s = void 0 === a ? ve : a,
        u = t.mergePropsFactories,
        l = void 0 === u ? _e : u,
        c = t.selectorFactory,
        f = void 0 === c ? Se : c;
    })();
    function Te() {
      var e = (0, C.useContext)(L);
      return Y()(e, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"), e;
    }
    function xe() {
      return Te().store.dispatch;
    }
    var Ie,
      Ce = "undefined" !== typeof window ? C.useLayoutEffect : C.useEffect,
      Ne = function (e, t) {
        return e === t;
      };
    function Oe(e, t) {
      void 0 === t && (t = Ne), Y()(e, "You must pass a selector to useSelectors");
      var n,
        r = Te(),
        o = r.store,
        i = r.subscription,
        a = (0, C.useReducer)(function (e) {
          return e + 1;
        }, 0)[1],
        s = (0, C.useMemo)(
          function () {
            return new U(o, i);
          },
          [o, i]
        ),
        u = (0, C.useRef)(),
        l = (0, C.useRef)(),
        c = (0, C.useRef)();
      try {
        n = e !== l.current || u.current ? e(o.getState()) : c.current;
      } catch (d) {
        var f = "An error occured while selecting the store state: " + d.message + ".";
        throw (
          (u.current && (f += "\nThe error may be correlated with this previous error:\n" + u.current.stack + "\n\nOriginal stack trace:"),
          new Error(f))
        );
      }
      return (
        Ce(function () {
          (l.current = e), (c.current = n), (u.current = void 0);
        }),
        Ce(
          function () {
            function e() {
              try {
                var e = l.current(o.getState());
                if (t(e, c.current)) return;
                c.current = e;
              } catch (d) {
                u.current = d;
              }
              a({});
            }
            return (
              (s.onStateChange = e),
              s.trySubscribe(),
              e(),
              function () {
                return s.tryUnsubscribe();
              }
            );
          },
          [o, s]
        ),
        n
      );
    }
    (Ie = N.unstable_batchedUpdates), (D = Ie);
    var Pe = "[state-sync]";
    function Re(e) {
      return function (t) {
        return function (n) {
          return function (r) {
            r.type !== Pe && e(r, t), n(r);
          };
        };
      };
    }
    var ke = n(446);
    function Le(e, t) {
      return function (n, r) {
        if (!n) {
          var o = t(n, r);
          return u(u({}, e), o);
        }
        if (r.type === Pe) return (0, ke.apply_patch)(n, r.payload);
        var i = t(n, r);
        return (function (e, t) {
          for (var n in t) if (e[n] !== t[n]) return !0;
          return !1;
        })(n, i)
          ? u(u({}, n), i)
          : n;
      };
    }
    n(183);
    var De = (function (e) {
        return (
          (e.ContentScript = "content-script-filter"),
          (e.Popup = "popup-filter"),
          (e.Preferences = "preferences"),
          (e.Vault = "vault"),
          (e.TabPrompt = "tab-prompt"),
          (e.Infield = "infield"),
          (e.ExtensionToolbar = "extension-toolbar"),
          (e.PasswordReprompt = "password-reprompt"),
          (e.Login = "login"),
          (e.Edit = "edit"),
          (e.FillConfirmation = "fill-confirmation"),
          e
        );
      })({}),
      Me = new Map();
    function Fe(e) {
      return Me.get(e);
    }
    function Be(e, t) {
      return void 0 === t ? { type: e } : { type: e, payload: t };
    }
    function Ue(e, t) {
      return void 0 === t ? { type: e } : { type: e, payload: t };
    }
    var je = function (e) {
        return Array.isArray(e) ? e : [e];
      },
      Ge = "[tracking] segment event",
      Ve = function (e) {
        return { type: Ge, payload: e };
      };
    var He,
      We = (function (e) {
        return (e.REPORT_ERROR = "[error handling] report"), (e.REPORT_ERROR_EVENT = "[error handling] report error event"), e;
      })({}),
      ze = {
        reportError: function (e) {
          return Be(We.REPORT_ERROR, e);
        },
        reportErrorEvent: function (e) {
          return Be(We.REPORT_ERROR_EVENT, e);
        }
      },
      Ye = ["events", "metadata"],
      qe = (function (e) {
        return (e.LEGACY_SEGMENT = "legacySegment"), (e.SEGMENT = "segment"), (e.GOOGLE_ANALYTICS = "google"), e;
      })(qe || {});
    function Ke(e, t) {
      return u(u({}, e), {}, { events: t });
    }
    function $e(e, t, n) {
      var r = t.event,
        o = t.properties;
      e && e(r, o, n);
    }
    function Xe(e, t) {
      var n = function (e, n, r) {
        je(e).forEach(function (e) {
          !(function (e) {
            return "function" === typeof e;
          })(e)
            ? r(e)
            : t(
                (function (e, t, n) {
                  return function (r) {
                    var o = e(r, t);
                    switch (typeof o) {
                      case "boolean":
                        return o;
                      case "undefined":
                        return !0;
                      default:
                        return o && (Array.isArray(o) ? o.forEach(n) : n(o)), !1;
                    }
                  };
                })(e, n, r)
              );
        });
      };
      return function (t, r, o, i, a) {
        switch (o) {
          case qe.LEGACY_SEGMENT:
          case qe.SEGMENT:
            n(r[o], i, function (n) {
              t && $e(e[o], n, a);
            });
            break;
          case qe.GOOGLE_ANALYTICS:
            t &&
              n(r[o], i, function (t) {
                !(function (e, t) {
                  var n = t.hitType,
                    r = t.event;
                  e && e(n, r);
                })(e[o], t);
              });
        }
      };
    }
    function Qe() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.passThrough,
        r = t.enabledSelector,
        o = t.shouldPassEventToBackground,
        i = {},
        a = [],
        s = function (t) {
          return function (s) {
            return function (u) {
              var l = u.events,
                c = u.metadata,
                f = m(u, Ye),
                d = t.getState(),
                p = !r || r(d);
              if (!p) return s(f);
              if (o && o(f.type)) return s(u);
              if (
                (function (e) {
                  return e.type === Ge;
                })(f)
              )
                n ? s(f) : f.payload.isLegacy ? $e(i[qe.LEGACY_SEGMENT], f.payload) : $e(i[qe.SEGMENT], f.payload);
              else {
                if (l && e) for (var h in l) e(p, l, h, d, c);
                s(f),
                  (a = a.filter(function (e) {
                    try {
                      return e(t.getState());
                    } catch (n) {
                      return t.dispatch(ze.reportError(n)), !1;
                    }
                  }));
              }
            };
          };
        };
      return (
        (s.initialize = function (t) {
          e = Xe((i = t), function (e) {
            a.push(e);
          });
        }),
        s
      );
    }
    function Ze(e, t) {
      return { event: e, properties: t };
    }
    function Je(e) {
      return Ze(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0);
    }
    var et = new Uint8Array(16);
    function tt() {
      if (
        !He &&
        !(He =
          ("undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return He(et);
    }
    var nt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (
      var rt = function (e) {
          return "string" === typeof e && nt.test(e);
        },
        ot = [],
        it = 0;
      it < 256;
      ++it
    )
      ot.push((it + 256).toString(16).substr(1));
    var at = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (
          ot[e[t + 0]] +
          ot[e[t + 1]] +
          ot[e[t + 2]] +
          ot[e[t + 3]] +
          "-" +
          ot[e[t + 4]] +
          ot[e[t + 5]] +
          "-" +
          ot[e[t + 6]] +
          ot[e[t + 7]] +
          "-" +
          ot[e[t + 8]] +
          ot[e[t + 9]] +
          "-" +
          ot[e[t + 10]] +
          ot[e[t + 11]] +
          ot[e[t + 12]] +
          ot[e[t + 13]] +
          ot[e[t + 14]] +
          ot[e[t + 15]]
        ).toLowerCase();
      if (!rt(n)) throw TypeError("Stringified UUID is invalid");
      return n;
    };
    var st = function (e, t, n) {
      var r = (e = e || {}).random || (e.rng || tt)();
      if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
        n = n || 0;
        for (var o = 0; o < 16; ++o) t[n + o] = r[o];
        return t;
      }
      return at(r);
    };
    function ut() {
      return st();
    }
    var lt = (function (e) {
        return (e[(e.Launch = 1)] = "Launch"), (e[(e.AutoLogin = 2)] = "AutoLogin"), e;
      })({}),
      ct = (function (e) {
        return (
          (e.Note = "Generic"),
          (e.Password = "Password"),
          (e.PaymentCard = "Credit Card"),
          (e.Address = "Address"),
          (e.BankAccount = "Bank Account"),
          (e.Database = "Database"),
          (e.DriversLicense = "Driver's License"),
          (e.Email = "Email Account"),
          (e.HealthInsurance = "Health Insurance"),
          (e.InstantMessenger = "Instant Messenger"),
          (e.Insurance = "Insurance"),
          (e.Membership = "Membership"),
          (e.Passport = "Passport"),
          (e.Server = "Server"),
          (e.SocialSecurity = "Social Security"),
          (e.SoftwareLicense = "Software License"),
          (e.SshKey = "SSH Key"),
          (e.WiFi = "Wi-Fi Password"),
          (e.Custom = "Custom"),
          (e.Application = "Application"),
          (e.CloudApp = "CloudApp"),
          (e.Passkey = "Passkey"),
          e
        );
      })({});
    function ft(e) {
      switch (e) {
        case ct.Address:
          return "Address";
        case ct.PaymentCard:
          return "Credit Card";
        case ct.Password:
        default:
          return "Password";
      }
    }
    var dt = (function (e) {
      return (
        (e.SiteUsername = "SiteUsername"),
        (e.SitePassword = "SitePassword"),
        (e.SiteNewPassword = "SiteNewPassword"),
        (e.SiteOneTimeCode = "SiteOneTimeCode"),
        (e.SiteCustom = "SiteCustom"),
        (e.CardNameOnCard = "CardNameOnCard"),
        (e.CardType = "CardType"),
        (e.CardNumber = "CardNumber"),
        (e.CardSecurityCode = "CardSecurityCode"),
        (e.CardStartDate = "CardStartDate"),
        (e.CardExpirationDate = "CardExpirationDate"),
        (e.CardGivenName = "CardGivenName"),
        (e.CardAdditionalName = "CardAdditionalName"),
        (e.CardFamilyName = "CardFamilyName"),
        (e.CardStartYear = "CardStartYear"),
        (e.CardStartMonth = "CardStartMonth"),
        (e.CardExpirationYear = "CardExpirationYear"),
        (e.CardExpirationMonth = "CardExpirationMonth"),
        (e.AddressTitle = "AddressTitle"),
        (e.AddressFirstName = "AddressFirstName"),
        (e.AddressMiddleName = "AddressMiddleName"),
        (e.AddressLastName = "AddressLastName"),
        (e.AddressGender = "AddressGender"),
        (e.AddressBirthdayDay = "AddressBirthdayDay"),
        (e.AddressBirthdayMonth = "AddressBirthdayMonth"),
        (e.AddressBirthdayYear = "AddressBirthdayYear"),
        (e.AddressCompany = "AddressCompany"),
        (e.AddressLine1 = "AddressLine1"),
        (e.AddressLine2 = "AddressLine2"),
        (e.AddressLine3 = "AddressLine3"),
        (e.AddressCity = "AddressCity"),
        (e.AddressCounty = "AddressCounty"),
        (e.AddressState = "AddressState"),
        (e.AddressPostalCode = "AddressPostalCode"),
        (e.AddressCountryName = "AddressCountryName"),
        (e.AddressTimezone = "AddressTimezone"),
        (e.AddressPhoneCountry = "AddressPhoneCountry"),
        (e.AddressPhoneCountryCode = "AddressPhoneCountryCode"),
        (e.AddressPhoneNational = "AddressPhoneNational"),
        (e.AddressPhoneAreaCode = "AddressPhoneAreaCode"),
        (e.AddressPhoneLocalPrefix = "AddressPhoneLocalPrefix"),
        (e.AddressPhoneLocalSuffix = "AddressPhoneLocalSuffix"),
        (e.AddressPhoneExtension = "AddressPhoneExtension"),
        (e.AddressEveningPhoneCountry = "AddressEveningPhoneCountry"),
        (e.AddressEveningPhoneCountryCode = "AddressEveningPhoneCountryCode"),
        (e.AddressEveningPhoneNational = "AddressEveningPhoneNational"),
        (e.AddressEveningPhoneAreaCode = "AddressEveningPhoneAreaCode"),
        (e.AddressEveningPhoneLocalPrefix = "AddressEveningPhoneLocalPrefix"),
        (e.AddressEveningPhoneLocalSuffix = "AddressEveningPhoneLocalSuffix"),
        (e.AddressEveningPhoneExtension = "AddressEveningPhoneExtension"),
        (e.AddressMobilePhoneCountry = "AddressMobilePhoneCountry"),
        (e.AddressMobilePhoneCountryCode = "AddressMobilePhoneCountryCode"),
        (e.AddressMobilePhoneNational = "AddressMobilePhoneNational"),
        (e.AddressMobilePhoneAreaCode = "AddressMobilePhoneAreaCode"),
        (e.AddressMobilePhoneLocalPrefix = "AddressMobilePhoneLocalPrefix"),
        (e.AddressMobilePhoneLocalSuffix = "AddressMobilePhoneLocalSuffix"),
        (e.AddressMobilePhoneExtension = "AddressMobilePhoneExtension"),
        (e.AddressFaxCountry = "AddressFaxCountry"),
        (e.AddressFaxCountryCode = "AddressFaxCountryCode"),
        (e.AddressFaxNational = "AddressFaxNational"),
        (e.AddressFaxAreaCode = "AddressFaxAreaCode"),
        (e.AddressFaxLocalPrefix = "AddressFaxLocalPrefix"),
        (e.AddressFaxLocalSuffix = "AddressFaxLocalSuffix"),
        (e.AddressFaxExtension = "AddressFaxExtension"),
        (e.AddressEmailAddress = "AddressEmailAddress"),
        (e.AddressUserName = "AddressUserName"),
        (e.AddressName = "AddressName"),
        (e.AddressHonorificSuffix = "AddressHonorificSuffix"),
        (e.AddressNickname = "AddressNickname"),
        (e.AddressStreetAddress = "AddressStreetAddress"),
        (e.AddressLevel4 = "AddressLevel4"),
        (e.AddressLevel3 = "AddressLevel3"),
        (e.AddressLevel2 = "AddressLevel2"),
        (e.AddressLevel1 = "AddressLevel1"),
        (e.AddressCountryCode = "AddressCountryCode"),
        (e.AddressBirthday = "AddressBirthday"),
        (e.AddressTel = "AddressTel"),
        (e.AddressEveningTel = "AddressEveningTel"),
        (e.AddressMobileTel = "AddressMobileTel"),
        (e.AddressFax = "AddressFax"),
        (e.AddressTelLocal = "AddressTelLocal"),
        (e.BankAccountBankName = "BankAccountBankName"),
        (e.BankAccountAccountType = "BankAccountAccountType"),
        (e.BankAccountRoutingNumber = "BankAccountRoutingNumber"),
        (e.BankAccountAccountNumber = "BankAccountAccountNumber"),
        (e.BankAccountSWIFTCode = "BankAccountSWIFTCode"),
        (e.BankAccountIBANNumber = "BankAccountIBANNumber"),
        (e.BankAccountPIN = "BankAccountPIN"),
        (e.BankAccountBranchAddress = "BankAccountBranchAddress"),
        (e.BankAccountBranchPhone = "BankAccountBranchPhone"),
        e
      );
    })({});
    function pt(e, t) {
      var n = t.fillSessions[e.id];
      return u(
        u(u({}, e), n),
        {},
        {
          fields: e.fields.map(function (n) {
            return u(
              u({}, n),
              (function (e, t, n) {
                var r = e[t];
                if (r) {
                  var o = r[n];
                  if (o) return o;
                }
                return { id: n, value: "" };
              })(t.sectionValues, e.id, n.id)
            );
          })
        }
      );
    }
    var ht = (function (e) {
      return (e.SavePrompt = "savePrompt"), (e.DisableBrowserPrompt = "disableBrowserPrompt"), (e.FeedbackPrompt = "feedbackPrompt"), e;
    })({});
    function mt(e, t, n) {
      return { "Fill Session Id": e, Source: n, "Item Type": t };
    }
    function vt(e, t, n) {
      return function (r, o) {
        var i = o.sections.find(function (t) {
          return t.id === e;
        });
        if (i) {
          var a = pt(i, o),
            s = a.type,
            l = a.sessionId,
            c = a.source,
            f = a.fields.find(function (e) {
              return e.id === t;
            });
          if (l && c && f && f.fill)
            return Je(
              "LastPass Fill Modified",
              u(
                u({}, mt(l, f.type === dt.SiteNewPassword ? "Generated Password" : ft(s), c)),
                {},
                { "Field Type": f ? f.type : "", Language: n }
              )
            );
        }
      };
    }
    function yt(e, t, n, r, o) {
      return Je(
        "LastPass Fill Initiated",
        u(u({}, mt(e, t, n)), {}, { Language: r, "Is Launch": o === lt.Launch, "Is Auto Login": o === lt.AutoLogin })
      );
    }
    function gt(e) {
      return e.sections
        .map(function (e) {
          return (
            !(!e.sessionId || !e.source) &&
            Je("LastPass Fill Submitted", {
              "Fill Session Id": e.sessionId,
              "Item Type": e.fields.some(function (e) {
                return e.type === dt.SiteNewPassword;
              })
                ? "Generated Password"
                : ft(e.type),
              Source: e.source,
              "Is Launch": e.submissionType === lt.Launch,
              "Is Auto Login": e.submissionType === lt.AutoLogin
            })
          );
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function _t(e, t) {
      return Je("Save Prompt Viewed", {
        Source: t,
        "Save Address": e.some(function (e) {
          return e.item.recordType === ct.Address;
        }),
        "Save Password": e.some(function (e) {
          return e.item.recordType === ct.Password;
        }),
        "Save Payment Card": e.some(function (e) {
          return e.item.recordType === ct.PaymentCard;
        })
      });
    }
    function Et(e) {
      return function (t) {
        var n = t.tabPrompt[ht.SavePrompt];
        if (n)
          return Je("Save Prompt Clicked", {
            Action: e,
            Source: n.manual ? "Infield Icon" : "Form Submission",
            "Save Address": n.entities.some(function (e) {
              return e.item.recordType === ct.Address;
            }),
            "Save Password": n.entities.some(function (e) {
              return e.item.recordType === ct.Password;
            }),
            "Save Payment Card": n.entities.some(function (e) {
              return e.item.recordType === ct.PaymentCard;
            })
          });
      };
    }
    var bt = (function (e) {
        return (e.Use = "password_use"), (e.View = "password_view"), (e.Copy = "password_copy"), e;
      })({}),
      St = (function (e) {
        return (e.FOLDER = "Folder"), (e.INDIVIDUAL = "Individual"), (e.NONE = "None"), e;
      })(St || {});
    function wt(e) {
      return e.record.sharedFolderId ? St.FOLDER : e.record.individualShareSource ? St.INDIVIDUAL : St.NONE;
    }
    var At = (function (e) {
        return (
          (e.RESET = "[fill] reset"),
          (e.INITIATE_LOGOUT = "[fill] initiate logout"),
          (e.UPDATE_TOTP = "[fill] update totp"),
          (e.SET_MOBILE_SCREEN = "[fill] set mobile screen"),
          (e.CHECK_FOR_USERNAME = "[fill] check for username"),
          (e.SET_USERNAME_FILLED_ID = "[fill] set username filled id"),
          (e.STATE_CHANGE = "[fill] state change"),
          (e.CONFIRM_CROSS_DOMAIN_FILL = "[fill] confirm cross domain fill"),
          (e.CROSS_DOMAIN_FILL_CONFIRM_RESULT = "[fill] cross domain fill confirm result"),
          (e.MANUAL_FILL = "[fill] manual fill"),
          (e.MANUAL_ADD = "[fill] manual add"),
          (e.FILL_GENERATED_PASSWORD = "[fill] generated password"),
          (e.FILL = "[fill] fill"),
          (e.RESET_TAB_STATE = "[fill] reset tab state"),
          (e.FILL_VALUES = "[fill] fill values"),
          (e.SET_PASSWORD_FILLED = "[fill] set password filled"),
          (e.SYNC_INPUT_VALUE = "[fill] sync input value"),
          (e.USER_CHANGED_INPUT = "[fill] user changed input"),
          (e.MANUAL_PASSWORD_ENTRY = "[fill] manual password entry"),
          (e.SECTION_FILLED = "[fill] section filled"),
          (e.SET_SECTIONS = "[fill] set sections"),
          (e.RESET_SECTION = "[fill] reset sections"),
          (e.POLL_VAULT_VERSION = "[fill] poll vault version"),
          (e.MANUAL_SAVE = "[save] manual save"),
          (e.INITIATE_MANUAL_SAVE = "[save] initiate manual save"),
          (e.SAVE_ALL_ENTERED_DATA = "[save] save all entered data"),
          (e.SHOW_SAVE_ALL_ENTERED_DATA = "[save] show save all entered data"),
          (e.CHECK_USERNAME_FORM_CHANGE = "[save] check username form change"),
          (e.ITEMS_TO_SAVE_DETECTED = "[save] items to save detected"),
          (e.UPDATE_ITEMS_TO_SAVE = "[save] update items to save"),
          (e.HIDE_INFIELD = "[fill] hide infield"),
          (e.HANDLE_BLUR = "[fill] handle blur"),
          (e.SET_ICON_POSITION = "[fill] set icon position"),
          (e.OPEN_INFIELD = "[fill] open infield"),
          (e.REPOSITION_INFIELD_CONTAINER = "[fill] reposition infield container"),
          (e.RESIZE_INFIELD_CONTAINER = "[fill] resize infield container"),
          (e.LAUNCH = "[fill] launch"),
          (e.EXTERNAL_LAUNCH = "[fill] external launch"),
          (e.VAULT_STATE_SYNC_LAUNCH = "[fill] vault state sync launch"),
          (e.OFFLINE_LAUNCH = "[fill] offline launch"),
          (e.SET_ACTIVE_PAGE_ICONS = "[fill] set active page icons"),
          (e.SET_USERNAME = "[fill] set username"),
          (e.RESET_LAUNCHED_ID = "[fill] reset launched id"),
          (e.SET_LAUNCHED_ID = "[fill] set launched id"),
          (e.CLEAR_ACTIVE_PAGE = "[fill] clear active page"),
          (e.SET_ACTIVE_TAB_ID = "[fill] set active tab id"),
          (e.SET_ACTIVE_WINDOW_ID = "[fill] set active window id"),
          (e.GET_PARENT_FRAME_OFFSETS = "[fill] get parent frame offsets"),
          (e.SET_PARENT_FRAME_OFFSET = "[fill] set parent frame offset"),
          (e.SUBMIT_DETECTED = "[save] submit detected"),
          (e.USER_INTERACTED = "[fill] user interacted"),
          (e.LOGOUT_RESET = "[fill] logout reset"),
          (e.SET_DECRYPTED_RECORDS = "[fill] set decrypted records"),
          (e.USER_SCROLLED = "[fill] user scrolled"),
          (e.MOVING_FOCUS = "[fill] moving focus"),
          (e.SET_PARTIAL_PAYMENT_SECTION_FOCUS = "[fill] set iframe payment section focus"),
          (e.SET_SCREEN_OVERRIDE = "[fill] set screen override"),
          (e.ENTERED_USER_DATA = "[fill] entered user data"),
          (e.SET_RECORD_INFIELD_FOCUS = "[fill] set record infield focus"),
          (e.HOT_KEY_ACTION = "[fill] hot key action"),
          (e.SET_DISABLED_FIELDS = "[fill] set disabled fields"),
          (e.UPDATE_PARTIAL_PAYMENT_SECTION_GROUPS = "[fill] update partial payment section groups"),
          (e.LOG_SITE_LOGIN = "[fill] log site login"),
          (e.SET_RECORD_SEARCH_FILL_COUNT = "[fill] set record search fill count"),
          (e.SET_ACTIVE_FILTERING = "[fill] set filtering"),
          (e.SET_IN_CONTEXT_ONBOARDING = "[secondary onboarding] set in context onboarding"),
          (e.GET_AUTH_APP_TOTP = "[fill] get totp from lp authenticator"),
          (e.SET_EXT_REG_REDIRECT_STATE = "[fill] set extension registration ab test redirection state"),
          (e.SHOW_FILL_CONFIRMATION_DIALOG = "[fill] show fill confirmation dialog"),
          (e.FILL_CONFIRMATION_CONFIRMED = "[fill] user confirmed fill confirmation dialog"),
          e
        );
      })({}),
      Tt = {
        reset: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
          return Ue(At.RESET, { pageState: e, existingPageState: t, pageLanguage: n, windowId: r, hierarchy: o });
        },
        initiateLogout: function () {
          return Be(At.INITIATE_LOGOUT);
        },
        updateTOTP: function (e, t, n, r) {
          return Be(At.UPDATE_TOTP, { totp: e, page: t, sectionId: n, fieldId: r });
        },
        setDisabledFields: function (e) {
          return Be(At.SET_DISABLED_FIELDS, { fields: e });
        },
        updatePartialPaymentSections: function (e, t) {
          return Be(At.UPDATE_PARTIAL_PAYMENT_SECTION_GROUPS, { tabId: e, sectionGroups: t });
        },
        checkForUsername: function (e, t) {
          return Ue(At.CHECK_FOR_USERNAME, { sectionId: e, text: t });
        },
        setUsernameFillPasswordId: function (e, t) {
          return Be(At.SET_USERNAME_FILLED_ID, { page: e, id: t });
        },
        setMobileScreen: function (e) {
          return Ue(At.SET_MOBILE_SCREEN, { mobileScreen: e });
        },
        hotkeyAction: function (e) {
          return Ue(At.HOT_KEY_ACTION, { action: e });
        },
        logSiteLogin: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bt.Use;
          return Be(At.LOG_SITE_LOGIN, { id: e, page: t, action: n });
        },
        setActivePageIcons: function (e) {
          return Be(At.SET_ACTIVE_PAGE_ICONS, { icons: e });
        },
        stateChange: function (e) {
          return Ue(At.STATE_CHANGE, { state: e });
        },
        getParentFrameOffsets: function (e, t) {
          return Be(At.GET_PARENT_FRAME_OFFSETS, { page: e, hierarchy: t });
        },
        setParentFrameOffset: function (e, t) {
          return Ue(At.SET_PARENT_FRAME_OFFSET, { offset: e, parent: t });
        },
        setRecordInfieldFocus: function (e) {
          return Ue(At.SET_RECORD_INFIELD_FOCUS, { focus: e });
        },
        setDecryptedRecords: function (e) {
          return Be(At.SET_DECRYPTED_RECORDS, { records: e });
        },
        userScrolled: function () {
          return Ue(At.USER_SCROLLED);
        },
        confirmCrossDomainFill: function (e, t) {
          return Be(At.CONFIRM_CROSS_DOMAIN_FILL, { tabId: t, message: e });
        },
        crossDomainFillConfirmResult: function (e) {
          return Ue(At.CROSS_DOMAIN_FILL_CONFIRM_RESULT, { confirmed: e });
        },
        logoutReset: function (e) {
          return Be(At.LOGOUT_RESET, { preferences: e });
        },
        manualAdd: function (e, t) {
          return Be(At.MANUAL_ADD, { page: t, type: e });
        },
        manualFill: function (e, t, n, r, o, i) {
          return Be(At.MANUAL_FILL, { page: e, vaultRecordId: t, source: n, sectionId: r, skipReprompt: o, showFillConfirmation: i });
        },
        fillGeneratedPassword: function (e, t, n, r) {
          return Be(At.FILL_GENERATED_PASSWORD, { page: e, password: t, source: n, sectionId: r });
        },
        fill: function (e, t, n, r, o) {
          var i,
            a,
            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          return (
            (i = At.FILL),
            void 0 === (a = { sectionId: r, vaultRecordId: e, language: n, source: t, submissionType: o, strict: s })
              ? { type: i }
              : { type: i, payload: a }
          );
        },
        clearActivePage: function () {
          return Be(At.CLEAR_ACTIVE_PAGE);
        },
        setActiveTabId: function (e) {
          return Be(At.SET_ACTIVE_TAB_ID, { tabId: e });
        },
        setActiveWindowId: function (e) {
          return Be(At.SET_ACTIVE_WINDOW_ID, { windowId: e });
        },
        setUsername: function (e, t) {
          return Be(At.SET_USERNAME, { page: e, username: t });
        },
        launch: function (e) {
          return Be(At.LAUNCH, { vaultRecord: e });
        },
        externalLaunch: function (e) {
          return Ue(At.EXTERNAL_LAUNCH, { hash: e });
        },
        vaultStateSyncLaunch: function (e) {
          return Ue(At.VAULT_STATE_SYNC_LAUNCH, { id: e });
        },
        offlineLaunch: function (e, t) {
          return Ue(At.OFFLINE_LAUNCH, { record: e, version: t });
        },
        resetLaunchedId: function () {
          return Ue(At.RESET_LAUNCHED_ID);
        },
        pollVaultVersion: function () {
          return Be(At.POLL_VAULT_VERSION);
        },
        setLaunchedId: function (e, t) {
          return Be(At.SET_LAUNCHED_ID, { tabId: e, id: t });
        },
        resetTabState: function (e) {
          return Be(At.RESET_TAB_STATE, { tabId: e });
        },
        fillValues: function (e, t, n, r, o, i, a, s, u) {
          var l = ut();
          return Ke(
            Be(At.FILL_VALUES, {
              page: e,
              values: t,
              sessionId: l,
              sectionId: n,
              recordId: r,
              resetUnfilled: a,
              source: i,
              submissionType: u,
              fillItemType: o
            }),
            {
              segment: [
                yt(l, o, i, s, u),
                function (e) {
                  if (r && "Generated Password" !== o && i) {
                    var t = e.vaultData.passwords[r];
                    return t
                      ? Je("Logged in to Site", { Source: i, Autologin: u === lt.AutoLogin, "Copied Password": !1, "Share Type": wt(t) })
                      : Je("Used Form Fill", { Type: o, Source: i });
                  }
                }
              ]
            }
          );
        },
        setPasswordFilled: function (e, t) {
          return Be(At.SET_PASSWORD_FILLED, { page: e, id: t });
        },
        syncInputValue: function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return Ue(At.SYNC_INPUT_VALUE, { sectionId: e, id: t, value: n, isInitialValue: r });
        },
        userChangedInput: function (e, t, n) {
          return Ke(Ue(At.USER_CHANGED_INPUT, { sectionId: e, id: t }), { segment: vt(e, t, n) });
        },
        manualPasswordEntry: function (e) {
          return Ke(Be(At.MANUAL_PASSWORD_ENTRY, { type: e }), { segment: Je("LastPass Fill Manually Entered", { "Entry Type": e }) });
        },
        setSections: function (e, t, n) {
          return Ue(At.SET_SECTIONS, { sections: e, sectionValues: t, language: n });
        },
        resetSection: function (e) {
          return Ue(At.RESET_SECTION, { sectionId: e });
        },
        sectionFilled: function (e) {
          return Ue(At.SECTION_FILLED, { fillSession: e });
        },
        checkUsernameFormChange: function (e, t) {
          return Ue(At.CHECK_USERNAME_FORM_CHANGE, { index: e, form: t });
        },
        initiateManualSave: function (e, t) {
          return Be(At.INITIATE_MANUAL_SAVE, { record: e, page: t });
        },
        manualSave: function (e, t, n) {
          return Ke(Be(At.MANUAL_SAVE, { record: e, page: t, checkedDecryptedRecords: n }), { segment: _t([e], "Infield Icon") });
        },
        saveAllEnteredData: function (e) {
          return Be(At.SAVE_ALL_ENTERED_DATA, { page: e });
        },
        showSaveAllEnteredData: function (e, t) {
          return Be(At.SHOW_SAVE_ALL_ENTERED_DATA, { page: e, record: t });
        },
        updateItemsToSave: function (e, t) {
          return Be(At.UPDATE_ITEMS_TO_SAVE, { itemsToSave: t, tabId: e });
        },
        itemsToSaveDetected: function (e, t, n, r) {
          return Ke(
            Ue(At.ITEMS_TO_SAVE_DETECTED, { itemsToSave: e, displayReassuringMessage: t, submittedPages: n, checkedDecryptedRecords: r }),
            { segment: _t(e, "Form Submission") }
          );
        },
        userInteracted: function () {
          return Ue(At.USER_INTERACTED);
        },
        submitDetected: function (e) {
          return Ke(Be(At.SUBMIT_DETECTED, { submittedData: e }), { segment: gt(e) });
        },
        setScreenOverride: function (e) {
          return Ue(At.SET_SCREEN_OVERRIDE, { screen: e });
        },
        enteredUserData: function (e) {
          return Ue(At.ENTERED_USER_DATA, e);
        },
        resizeInfieldContainer: function (e, t) {
          return Ue(At.RESIZE_INFIELD_CONTAINER, { width: e, height: t });
        },
        movingFocus: function () {
          return Ue(At.MOVING_FOCUS);
        },
        hideInfield: function () {
          return Ue(At.HIDE_INFIELD);
        },
        handleBlur: function (e, t) {
          return Ue(At.HANDLE_BLUR, { sectionId: e, elementId: t });
        },
        setIconPosition: function (e) {
          return Ue(At.SET_ICON_POSITION, { iconPosition: e });
        },
        openInfield: function (e, t, n, r, o, i, a) {
          return Ue(At.OPEN_INFIELD, {
            sectionId: e,
            elementId: t,
            inputRect: n,
            frameHierarchy: r,
            iconPosition: o,
            segmentSource: i,
            isInContextOnboardingenabled: a
          });
        },
        repositionInfield: function (e, t, n) {
          return Be(At.REPOSITION_INFIELD_CONTAINER, { tabId: e, inputLocation: t, iconPosition: n });
        },
        setActiveFiltering: function (e) {
          return Ue(At.SET_ACTIVE_FILTERING, { setActiveFilter: e });
        },
        setPartialPaymentSectionFocus: function (e, t) {
          return Ue(At.SET_PARTIAL_PAYMENT_SECTION_FOCUS, { id: e, fieldId: t });
        },
        setInContextOnboarding: function (e) {
          return Be(At.SET_IN_CONTEXT_ONBOARDING, { site: e });
        },
        setRecordSearchFillCount: function (e) {
          return Ue(At.SET_RECORD_SEARCH_FILL_COUNT, { count: e });
        },
        getAuthAppTotp: function (e) {
          return Be(At.GET_AUTH_APP_TOTP, { pageTotpData: e });
        },
        setExtRegRedirectState: function (e) {
          return Be(At.SET_EXT_REG_REDIRECT_STATE, e);
        },
        showFillConfirmationDialog: function (e, t) {
          return Be(At.SHOW_FILL_CONFIRMATION_DIALOG, { recordType: e, hostname: t });
        },
        confirmFillConfirmationDialog: function (e, t, n) {
          var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          return Ke(Ue(At.FILL_CONFIRMATION_CONFIRMED, { isChecked: r, hostname: t }), {
            segment: Je("Fill Confirmation Clicked", { Action: e, "Item Type": n, "Do Not Reprompt": r })
          });
        }
      },
      xt = (function (e) {
        return (
          (e.SET_FULL_HEIGHT = "[save prompt] set full height"),
          (e.SAVE_PROMPT_COMPLETE = "[save prompt] save prompt complete"),
          (e.ANIMATION_DONE = "[save prompt] animationDone"),
          (e.CLOSE_SAVE_PROMPT = "[save prompt] close"),
          (e.CANCEL = "[save prompt] cancel"),
          (e.SAVE = "[save prompt] save"),
          (e.RESIZE = "[save prompt] resize"),
          (e.SET_ACTIVE_SCREEN = "[save prompt] set active screen"),
          (e.TRY_AGAIN = "[save prompt] try again"),
          (e.SET_ICON_DATA = "[save prompt] set icon data"),
          (e.SHOW_DISABLE_PROMPT = "[save prompt] show disable prompt"),
          (e.DISABLE_PROMPT_SHOWED = "[save prompt] disable prompt showed"),
          (e.DISABLE_BROWSER_PASSWORD_MANAGER = "[tab prompt] disable browser password manager"),
          (e.DISMISS_DISABLE_PROMPT = "[tab prompt] dismiss disable browser prompt"),
          (e.DISABLE_BROWSER_PASSWORD_MANAGER_SUCCESS = "[tab prompt] disable browser password manager success"),
          (e.DISABLE_BROWSER_PASSWORD_MANAGER_ERROR = "[tab prompt] disable browser password manager error"),
          (e.DONT_SHOW_AGAIN = "[tab prompt] dont show again"),
          (e.SHOW_FEEDBACK_PROMPT_FOR_URL = "[tab prompt] show feedback prompt for url"),
          (e.DISMISS_FEEDBACK_PROMPT = "[tab prompt] dismiss feedback prompt"),
          (e.GIVE_FEEDBACK_CLICKED = "[tab prompt] give feedback clicked"),
          (e.DONT_SHOW_FEEDBACK_PROMPT_AGAIN = "[tab prompt] dont show feedback prompt again"),
          (e.REQUEST_DISABLE_BROWSER_PASSWORD_MANAGER = "[tab prompt] request disable browser password manager"),
          (e.SET_BROWSER_PASSWORD_SAVING = "[tab prompt] get browser password saving"),
          (e.BROWSER_FILL_DETECTED = "[tab prompt] browser fill detected"),
          e
        );
      })({}),
      It = {
        setFullHeight: function (e) {
          return Ue(xt.SET_FULL_HEIGHT, { fullHeight: e });
        },
        closeSavePrompt: function () {
          return Ue(xt.CLOSE_SAVE_PROMPT);
        },
        cancel: function () {
          return Ke(Ue(xt.CANCEL), { segment: Et("Not Now") });
        },
        animationDone: function (e) {
          return Ue(xt.ANIMATION_DONE, { type: e });
        },
        save: function (e, t) {
          return Ke(Ue(xt.SAVE, { records: e, manual: t }), { segment: Et("Save") });
        },
        resize: function (e, t) {
          return Ue(xt.RESIZE, { width: e, height: t });
        },
        tryAgain: function () {
          return Ue(xt.TRY_AGAIN);
        },
        setIconData: function (e) {
          return Ue(xt.SET_ICON_DATA, { data: e });
        },
        setActiveScreen: function (e, t, n, r, o) {
          return Be(xt.SET_ACTIVE_SCREEN, { tabId: e, frameId: t, url: n, screen: r, serverError: o });
        },
        savePromptComplete: function () {
          return Ue(xt.SAVE_PROMPT_COMPLETE);
        },
        showDisablePrompt: function (e) {
          return Be(xt.SHOW_DISABLE_PROMPT, { tabId: e });
        },
        disablePromptShowed: function (e) {
          return Ke(Be(xt.DISABLE_PROMPT_SHOWED), {
            segment: Je("Disable Browser Fill Prompt Shown", { "Prompt Type": e ? "Automatic" : "Manual" })
          });
        },
        closeSuccessPrompt: function () {
          return Ue(xt.DISMISS_DISABLE_PROMPT);
        },
        dismissDisablePrompt: function (e) {
          return Ke(Ue(xt.DISMISS_DISABLE_PROMPT), {
            segment: Je("Disable Browser Fill Dismiss Clicked", { "Prompt Type": e ? "Automatic" : "Manual" })
          });
        },
        disableBrowserPasswordSaving: function () {
          return Ke(Ue(xt.DISABLE_BROWSER_PASSWORD_MANAGER), { segment: Je("Disable Browser Fill Started") });
        },
        requestDisableBrowserPasswordSaving: function () {
          return Ke(Ue(xt.REQUEST_DISABLE_BROWSER_PASSWORD_MANAGER), { segment: Je("Disable Browser Fill Started") });
        },
        disableBrowserPasswordSavingSuccess: function () {
          return Ke(Ue(xt.DISABLE_BROWSER_PASSWORD_MANAGER_SUCCESS), { segment: Je("Disable Browser Fill Succeeded") });
        },
        disableBrowserPasswordSavingError: function () {
          return Ke(Ue(xt.DISABLE_BROWSER_PASSWORD_MANAGER_ERROR), { segment: Je("Disable Browser Fill Failed") });
        },
        dontShowAgain: function (e) {
          return Ke(Ue(xt.DONT_SHOW_AGAIN), {
            segment: Je("Disable Browser Fill Do Not Show Again Clicked", { "Prompt Type": e ? "Automatic" : "Manual" })
          });
        },
        browserFillDetected: function () {
          return Ue(xt.BROWSER_FILL_DETECTED);
        },
        showFeedbackPromptForUrl: function (e) {
          return Ke(Ue(xt.SHOW_FEEDBACK_PROMPT_FOR_URL, e), {
            segment: Je("Fill Feedback Prompt Shown", { "Feedback Type": e.feedbackType, "Form Type": ft(e.type) })
          });
        },
        giveFeedbackClicked: function (e) {
          return Ke(Ue(xt.GIVE_FEEDBACK_CLICKED, e), {
            segment: Je("Fill Feedback Prompt Give Clicked", { "Feedback Type": e.feedbackType, "Form Type": ft(e.type) })
          });
        },
        dontShowFeedbackPromptAgain: function (e) {
          return Ke(Ue(xt.DONT_SHOW_FEEDBACK_PROMPT_AGAIN, e), {
            segment: Je("Fill Feedback Prompt Do Not Show Again Clicked", { "Feedback Type": e.feedbackType, "Form Type": ft(e.type) })
          });
        },
        dismissFeedbackPrompt: function (e) {
          return Ke(Ue(xt.DISMISS_FEEDBACK_PROMPT, e), {
            segment: Je("Fill Feedback Prompt Dismiss Clicked", { "Feedback Type": e.feedbackType, "Form Type": ft(e.type) })
          });
        },
        setBrowserPasswordSaving: function (e) {
          return Be(xt.SET_BROWSER_PASSWORD_SAVING, { browserPasswordSavingEnabled: e });
        }
      },
      Ct = (function (e) {
        return (e.COPY_STRING_TO_CLIPBOARD = "[clipboard] copy string to clipboard"), e;
      })({}),
      Nt = function (e) {
        return Be(Ct.COPY_STRING_TO_CLIPBOARD, { value: e });
      };
    function Ot() {
      var e = xe();
      return (0, C.useMemo)(
        function () {
          return ce(Tt, e);
        },
        [e]
      );
    }
    function Pt() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function Rt(e) {
      try {
        return e.matches(":autofill");
      } catch (t) {
        try {
          return e.matches(":-webkit-autofill");
        } catch (n) {
          return !1;
        }
      }
    }
    function kt(e) {
      return Lt.apply(this, arguments);
    }
    function Lt() {
      return (Lt = A(
        S().mark(function e(t) {
          return S().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!Rt(t)) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 2:
                  return (e.next = 4), Pt();
                case 4:
                  return e.abrupt("return", Rt(t));
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var Dt = function (e) {
        return Oe(e);
      },
      Mt = (function (e) {
        return (
          (e.CANARY_TESTING = "canary_testing"),
          (e.BASIC_AUTH = "basic_auth"),
          (e.NO_AUTO_FOLDER = "no_auto_folder"),
          (e.OMAR_IA = "omar_ia"),
          (e.OMAR_FOR_WEB = "omar_for_web"),
          (e.OMAR_NON_CHROME = "omar_non_chrome"),
          (e.OMAR_PASSWORD_GENERATOR = "omar_password_generator"),
          (e.OMAR_UI_DRAWER_ENABLED = "omar_ui_drawer_enabled"),
          (e.ZIGGY = "ziggy"),
          (e.FORMFILL_MIGRATION = "formfill_migration"),
          (e.FAMILY_SHARED_FOLDERS = "family_shared_folders"),
          (e.FAMILY_LEGACY_SHARED_FOLDERS = "family_legacy_shared_folders"),
          (e.OMAR_INFIELD_B = "omar_infield_b"),
          (e.OMAR_INFIELD_C = "omar_infield_c"),
          (e.TRY_FAMILIES = "try_families"),
          (e.ONE_TO_ONE_SHARING_RESTRICTED = "one_to_one_sharing_restricted"),
          (e.PREMIUM_SHARING_RESTRICTED = "premium_sharing_restricted"),
          (e.SAFARI_LEGACY_MESSAGING = "safari_legacy_messaging"),
          (e.PREDATES_FAMILIES = "predates_families"),
          (e.PROMPT_EMAIL_VERIFY_ON_SHARE_ACCEPT = "prompt_email_verify_on_share_accept"),
          (e.PBKDF2_ITERATIONS_MIGRATION = "pbkdf2_iterations_migration"),
          (e.USER_AND_COMPANY_MIGRATION = "user_and_company_migration"),
          (e.GETGO_ADDRESS_VALIDATION_SERVICE = "getgo_address_validation_service"),
          (e.PERSONAL_BILLING_ADDRESS = "personal_billing_address"),
          (e.PASSWORD_SUBMITTED_EVENT = "password_submitted_event"),
          (e.EMAIL_VERIFICATION_REQUIRED = "email_verification_required"),
          (e.DOWNLOAD_EXTENSION_WEB_PROMPT = "download_extension_web_prompt"),
          (e.LICENSE_EXPIRATION = "license_expiration"),
          (e.SHOW_TRIAL_EXPIRATION = "show_trial_expiration"),
          (e.LANGUAGE_USER_TEST = "language_user_test"),
          (e.MIGRATION_OPT_IN = "migration_opt_in"),
          (e.OMAR_MIGRATION_OPT_IN = "omar_migration_opt_in"),
          (e.SAVE_A_SITE_WEB_REQUEST_2 = "save_a_site_web_request_2"),
          (e.EXCLUDE_PASSWORD = "exclude_password"),
          (e.REACT_LOGIN_EXT = "react_login_ext"),
          (e.REDUX_VAULT_DATA = "redux_vault_data"),
          (e.UNIVERSAL_ADMIN_CONSOLE = "universal_admin_console"),
          (e.UAC_EXISTING_ADMIN_LAUNCH_LIGHTBOX = "uac_existing_admin_launch_lightbox"),
          (e.UNIVERSAL_PROFILER = "universal_profiler"),
          (e.SHARED_FOLDER_SKIP_LOG = "shared_folder_skip_log"),
          (e.CSP_REPORTING_ENABLED = "csp_reporting_enabled"),
          (e.KILL_LEGACY_SSO = "kill_legacy_sso"),
          (e.LOGIN_VERIFICATION_EMAIL_SENT_REPORT_LOG = "login_verification_email_sent_report_log"),
          (e.IDENTITY_WEB_TRIAL_PURCHASE = "identity_web_trial_purchase"),
          (e.BOSS_CONNECTION_ENABLED = "boss_connection_enabled"),
          (e.BOSS_INSTANT_RENEW_FOR_PERSONAL_ACCOUNTS = "boss_instant_renew_for_personal_accounts"),
          (e.BOSS_INSTANT_RENEW_FOR_BUSINESS_ACCOUNTS = "boss_instant_renew_for_business_accounts"),
          (e.DARK_WEB_MONITORING_POLICY = "dark_web_monitoring_policy"),
          (e.VIEW_OLDUI_ON_INSTALL_PAGE = "view_oldui_on_install_page"),
          (e.FAMILIES_PROVISIONING_UPDATE = "families_provisioning_update"),
          (e.FILL_MULTI_STEP_LOGIN = "fill_multi_step_login"),
          (e.ICON_EXPANDED_LOOKS_LIKE_USERNAME = "icon_expanded_looks_like_username"),
          (e.SITE_FEEDBACK = "site_feedback"),
          (e.SITE_FEEDBACK_NEW_BADGE = "site_feedback_new_badge"),
          (e.FIELD_OVERRIDE_GLOBAL = "field_override_global"),
          (e.FIELD_OVERRIDE_ADMIN = "field_override_admin"),
          (e.DECLINE_ENTERPRISE_INVITATION = "decline_enterprise_invitation"),
          (e.GIFT_MENU_ITEM_BUTTON = "gift_menu_item_button"),
          (e.SECURE_NOTE_HISTORY_INCREASED_TO_100 = "secure_note_history_increased_to_100"),
          (e.DEVICE_LIMIT_NOTIFICATION = "device_limit_notification"),
          (e.OMAR_VAULT_MIGRATION_PHASE_1 = "omar_vault_migration_phase_1"),
          (e.OMAR_VAULT_MIGRATION_PHASE_2 = "omar_vault_migration_phase_2"),
          (e.OMAR_VAULT_MIGRATION_PHASE_3 = "omar_vault_migration_phase_3"),
          (e.VAULT_PREMIUM_FEATURE_INDICATOR = "vault_premium_feature_indicator"),
          (e.VAULT_PREMIUM_POPUPS_ENABLED = "vault_premium_popups_enabled"),
          (e.NEW_NATIVE_EXTENSION_ADS_ENABLED = "new_native_extension_ads_enabled"),
          (e.ACCOUNT_VERSION_TRACKING = "account_version_tracking"),
          (e.FAMILY_BOSS_CONNECTION_ENABLED = "family_boss_connection_enabled"),
          (e.REPORT_INAPP_TO_BOSS = "report_inapp_to_boss"),
          (e.DISPLAY_UPGRADE_ADFS_WARNING = "display_upgrade_adfs_warning"),
          (e.ALLOW_PING_FEDERATE = "allow_ping_federate"),
          (e.SSO_SHOW_IN_IFRAME = "sso_show_in_iframe"),
          (e.PREMIUM_BOSS_CONNECTION_ENABLED = "premium_boss_connection_enabled"),
          (e.SECURITY_DASHBOARD = "security_dashboard"),
          (e.CALCULATE_SECURITY_SCORE_ON_THE_BE = "calculate_security_score_on_the_be"),
          (e.OVERRIDE_POLL_INTERVAL_POLICY = "override_poll_interval_policy"),
          (e.PREMIUM_TRIAL_UPGRADE_TEST_SHARING = "premium_trial_upgrade_test_sharing"),
          (e.PREMIUM_TRIAL_UPGRADE_TEST_EMERGENCY_ACCESS = "premium_trial_upgrade_test_emergency_access"),
          (e.PREMIUM_TRIAL_TO_FAMILIES_TEST_GENERIC = "premium_trial_to_families_test_generic"),
          (e.FREE_TO_PREMIUM_AD_TEST_GENERIC = "free_to_premium_ad_test_generic"),
          (e.BOSS_ACCOUNT_CREATION_FROM_FREE_ENABLED = "boss_account_creation_from_free_enabled"),
          (e.ON_THE_FLY_PREMIUM_BOSS_MIGRATION_UPON_PREMIUM_IN_RENEWAL_PERIOD =
            "on_the_fly_premium_boss_migration_upon_premium_in_renewal_period"),
          (e.ON_THE_FLY_PREMIUM_BOSS_MIGRATION_UPON_FAMILIES_PAYMENT_INTENT =
            "on_the_fly_premium_boss_migration_upon_families_payment_intent"),
          (e.ON_THE_FLY_FAMILIES_BOSS_MIGRATION_UPON_FAMILIES_IN_RENEWAL_PERIOD =
            "on_the_fly_families_boss_migration_upon_families_in_renewal_period"),
          (e.ON_THE_FLY_BUSINESS_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION = "on_the_fly_business_boss_migration_upon_free_user_conversion"),
          (e.SHOW_INCLUDE_LOGGING = "show_include_logging"),
          (e.LOG_EXPANDABLEDATA_STATS_IN_SPLUNK = "log_expandabledata_stats_in_splunk"),
          (e.MANAGED_SERVICE_PROVIDER_FUNCTIONALITY = "managed_service_provider_functionality"),
          (e.MSP_AGGREGATOR_FUNCTIONALITY = "msp_aggregator_functionality"),
          (e.MSP_SHAREDFOLDER_SUPERADMIN = "msp_sharedfolder_superadmin"),
          (e.MSP_PAYMENT_INFO_POP_UP_PRIVACY_POLICY_ENABLED = "msp_payment_info_pop_up_privacy_policy_enabled"),
          (e.DISABLE_SF_FOR_EXPIRED_COMPANIES = "disable_sf_for_expired_companies"),
          (e.WEB_CLIENT_TOOLBAR = "web_client_toolbar"),
          (e.WEB_CLIENT_FILL = "web_client_fill"),
          (e.WEB_CLIENT_FILL_TRACKING = "web_client_fill_tracking"),
          (e.WEB_CLIENT_SAVE = "web_client_save"),
          (e.WEB_CLIENT_INFIELD = "web_client_infield"),
          (e.HIDE_PAYMENT_FLOWS = "hide_payment_flows"),
          (e.WEB_CLIENT_TOOLBAR_BLOG_POST = "web_client_toolbar_blog_post"),
          (e.BOSS_ACCOUNT_CREATION_FOR_EXPIRED_BUSINESS = "boss_account_creation_for_expired_business"),
          (e.DO_SF_REPAIR = "do_sf_repair"),
          (e.PENDO_IAM = "pendo_iam"),
          (e.PENDO_IN_EXTENSION = "pendo_in_extension"),
          (e.FAST_USER_DELETE_BY_DEACTIVATED3 = "fast_user_delete_by_deactivated3"),
          (e.ENABLE_MFA_SERVICE = "enable_mfa_service"),
          (e.HIDE_TWO_FACTOR_CODE_IN_VAULT = "hide_two_factor_code_in_vault"),
          (e.PREMIUM_BILLING_ADDRESS_COLLECTION = "premium_billing_address_collection"),
          (e.FAMILIES_ADMINS_BILLING_ADDRESS_COLLECTION = "families_admins_billing_address_collection"),
          (e.TEAMS_ADMINS_BILLING_ADDRESS_COLLECTION = "teams_admins_billing_address_collection"),
          (e.ENTERPRISE_ADMINS_BILLING_ADDRESS_COLLECTION = "enterprise_admins_billing_address_collection"),
          (e.BLOB_LOCK = "blob_lock"),
          (e.ALLOW_TRANSAKT_MFA = "allow_transakt_mfa"),
          (e.MULTI_DEVICE_PAYWALL = "multi_device_paywall"),
          (e.PROMOTION_VAULT_SEARCH = "promotion_vault_search"),
          (e.PROMOTION_EXTENSION_SEARCH = "promotion_extension_search"),
          (e.PROMOTION_VAULT_SIDEBAR_G2A = "promotion_vault_sidebar_g2a"),
          (e.PROMOTION_VAULT_SIDEBAR_G2W = "promotion_vault_sidebar_g2w"),
          (e.PROMOTION_VAULT_SIDEBAR_G2M_VARIANT_A = "promotion_vault_sidebar_g2m_variant_a"),
          (e.PROMOTION_VAULT_SIDEBAR_G2M_VARIANT_B = "promotion_vault_sidebar_g2m_variant_b"),
          (e.PROMOTION_EXTENSION_MENU_ITEM_G2A = "promotion_extension_menu_item_g2a"),
          (e.PROMOTION_EXTENSION_MENU_ITEM_G2W = "promotion_extension_menu_item_g2w"),
          (e.PROMOTION_EXTENSION_MENU_ITEM_G2M = "promotion_extension_menu_item_g2m"),
          (e.PROMOTION_EXTENSION_DIALOG_G2A = "promotion_extension_dialog_g2a"),
          (e.PROMOTION_EXTENSION_DIALOG_G2W = "promotion_extension_dialog_g2w"),
          (e.PROMOTION_PROMPT_EMAIL_VERIFY = "promotion_prompt_email_verify"),
          (e.SKIP_BACKUP_BEFORE_COMPANY_USER_DELETION = "skip_backup_before_company_user_deletion"),
          (e.USE_CORRECT_SERVER_FOR_EXPANDABLE_USER_DATA_OPERATIONS = "use_correct_server_for_expandable_user_data_operations"),
          (e.REPORTING_EVENT_MIGRATION = "reporting_event_migration"),
          (e.ENABLE_SSO_SITES_IN_VAULT = "enable_sso_sites_in_vault"),
          (e.INFIELD_MULTIDEVICE_PAYWALL_TRACKING = "infield_multidevice_paywall_tracking"),
          (e.MULTI_DEVICE_PAYWALL_FOR_EXPIRED_FAMILIES = "multi_device_paywall_for_expired_families"),
          (e.DEVICE_OTP_BINDING_CHECK = "device_otp_binding_check"),
          (e.START_BUSINESS_TRIAL = "start_business_trial"),
          (e.RESTRICT_OFFERING_BASED_TRIAL_START_TO_IDENTITY = "restrict_offering_based_trial_start_to_identity"),
          (e.PERMISSION_ENGINE_SEND_OUTBOX_EVENT = "permission_engine_send_outbox_event"),
          (e.OPENIDCONNECTPKCE = "openidconnectpkce"),
          (e.ENABLE_MULTI_LEVEL_ADMINISTRATION = "enable_multi_level_administration"),
          (e.ENABLE_ITERATIONS_FOR_CREATE_USER_AND_ADD_TO_COMPANY = "enable_iterations_for_create_user_and_add_to_company"),
          (e.FORWARD_GOOGLE_PAYMENT_TO_BOSS = "forward_google_payment_to_boss"),
          (e.FORWARD_APPLE_PAYMENT_TO_BOSS = "forward_apple_payment_to_boss"),
          (e.LASTPASS_AUTHENTICATOR_ADDITIONAL_SECURITY_POLICIES = "mfa_extended_security_policies"),
          (e.LOCATION_VERIFICATION_EMAIL_RATELIMITER = "location_verification_email_ratelimiter"),
          (e.HIDE_LICENSE_INFORMATION = "hide_license_information"),
          (e.FORCE_EMAIL_VERIFICATION_FOR_BOTS = "force_email_verification_for_bots"),
          (e.DISABLE_ACCOUNT_CHECK_AVAILABILITY_FOR_BOTS = "disable_account_check_availability_for_bots"),
          (e.UAC_AS_DEFAULT = "uac_as_default"),
          (e.UAC_SSO_APPS_REDIRECT = "uac_sso_apps_redirect"),
          (e.SECONDARY_ONBOARDING = "secondary_onboarding"),
          (e.IMPROVED_LP_MFA_ENROLLMENT = "improved_lp_mfa_enrollment"),
          (e.IMPROVED_LP_MFA_ENROLLMENT_VAULT = "improved_lp_mfa_enrollment_vault"),
          (e.CHECK_PRODUCT_AVAILABILITY_FOR_INAPP = "check_product_availability_for_inapp"),
          (e.GET_MFA_USAGE = "get_mfa_usage"),
          (e.FORCE_MASTER_PASSWORD_RESET = "force_master_password_reset"),
          (e.SHOW_MFA_ADDON_USAGE_ON_ADMIN_CONSOLE = "show_mfa_addon_usage_on_admin_console"),
          (e.SAVE_FILL_URL_PROXY = "save_fill_url_proxy"),
          (e.USE_AZURE_MDM_FLOW = "use_azure_mdm_flow"),
          (e.DISABLE_BROWSER_FILL_PROMPT = "disable_browser_fill_prompt"),
          (e.USE_AZURE_MDM_FLOW_FROM_DATABASE = "use_azure_mdm_flow_from_database"),
          (e.FAMILIES_INVITE_SHARING = "families_invite_sharing"),
          (e.PREMIUM_RETRIAL = "premium_retrial"),
          (e.IMPORT_PASSWORDS_IN_VAULT = "import_passwords_in_vault"),
          (e.LASTPASS_AUTH_OVERRIDE_METHODS = "lastpass_auth_override_methods"),
          (e.FILL_FEEDBACK_PROMPT = "fill_feedback_prompt"),
          (e.REACT_SAVE_SITE_DIALOG = "react_save_site_dialog"),
          (e.SHOW_PINGONE_SETTINGS_ON_ADMIN_CONSOLE = "show_pingone_settings_on_admin_console"),
          (e.FORCE_OLD_TFA_AUTHENTICATE_USER = "force_old_tfa_authenticate_user"),
          (e.ENABLE_RESTRICTMFABYTIMERANGE_POLICY = "enable_restrictmfabytimerange_policy"),
          (e.NEW_INFIELD_DESIGN_FOR_ONBOARDING = "new_infield_design_for_onboarding"),
          (e.EXTENSION_TOOLBAR_TRACKING = "extension_toolbar_tracking"),
          (e.SEND_SECURITY_SCORE = "send_security_score"),
          (e.ENABLE_PASSWORD_DAY_PROMOTION = "enable_password_day_promotion"),
          (e.SECURITY_DASHBOARD_2_0 = "security_dashboard_2_0"),
          (e.VAULT_SINGLE_PAGE_APPLICATION = "vault_single_page_application"),
          (e.SECURITY_DASHBOARD_FOR_FREE_USERS = "security_dashboard_for_free_users"),
          (e.WELCOME_EXPERIMENT = "welcome_experiment"),
          (e.ENABLE_FIDO2 = "enable_fido2"),
          (e.DISABLE_AUTO_FIDO2_TRIGGER_ON_REDIRECT = "disable_auto_fido2_trigger_on_redirect"),
          (e.CLOUD_APPS_FILTER_IN_VAULT = "cloud_apps_filter_in_vault"),
          (e.CREDENTIAL_MONITORING_POLLING_DISABLED = "credential_monitoring_polling_disabled"),
          (e.PASSWORD_STRENGTH_HARDENING = "password_strength_hardening"),
          (e.ENFORCE_SHORT_MP_RESET = "enforce_short_mp_reset"),
          (e.URL_ENCRYPTION = "url_encryption"),
          (e.REQUIRE_FILL_CONFIRMATION = "require_fill_confirmation"),
          (e.ENABLE_MV3_BACKGROUND = "enable_mv3_background"),
          (e.MV3_BACKGROUND_LOADED = "mv3_background_loaded"),
          e
        );
      })({}),
      Ft = (function (e) {
        return (
          (e.SYNC_FIELD = "[cs local] [form value] sync field"),
          (e.REMOVE_FIELD = "[cs local] [form value] remove field"),
          (e.REMOVE_SECTION = "[cs local] [form value] remove section"),
          e
        );
      })({}),
      Bt = function (e) {
        return Be(Ft.REMOVE_SECTION, { sectionId: e });
      },
      Ut = function (e, t) {
        return Be(Ft.REMOVE_FIELD, { sectionId: e, id: t });
      },
      jt = function (e, t) {
        return Be(Ft.SYNC_FIELD, { sectionId: e, field: t });
      },
      Gt = function (e) {
        (0, C.useEffect)(function () {
          return e;
        }, []);
      },
      Vt = function (e) {
        (0, C.useEffect)(e, []);
      };
    function Ht(e, t) {
      if (t)
        for (var n in t) {
          if (t[n] === e.value) return n;
        }
      return e.value;
    }
    var Wt = function (e) {
      var t = e.element,
        n = e.id,
        r = e.sectionId,
        o = e.syncValue,
        i = e.userModifed,
        a = e.fillSessionId,
        s = e.mapping,
        u = xe(),
        l = Dt(function (e) {
          return e.settings.features[Mt.WEB_CLIENT_SAVE];
        });
      return (
        (0, C.useEffect)(
          function () {
            var e = (function () {
              var r = A(
                S().mark(function r(o) {
                  return S().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (!o.target) {
                            r.next = 5;
                            break;
                          }
                          return (r.next = 3), kt(o.target);
                        case 3:
                          r.sent ? t.removeEventListener("input", e) : o.isTrusted && (i(n), t.removeEventListener("input", e));
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })();
            return (
              t.addEventListener("input", e),
              function () {
                t.removeEventListener("input", e);
              }
            );
          },
          [n, t, i, a]
        ),
        (0, C.useEffect)(
          function () {
            var e = function (e) {
                e.isTrusted && e.target && o(n, Ht(e.target, s));
              },
              r = l ? "input" : "change";
            return (
              t.addEventListener(r, e),
              function () {
                t.removeEventListener(r, e);
              }
            );
          },
          [n, t, o, s, l]
        ),
        Vt(function () {
          t.value && Rt(t) && o(n, Ht(t, s), !0);
        }),
        Gt(function () {
          u(Ut(r, n));
        }),
        null
      );
    };
    function zt(e, t, n, r) {
      var o = document.activeElement;
      e.focus({ preventScroll: !0 }),
        "undefined" !== typeof ClipboardEvent && e.dispatchEvent(new ClipboardEvent("paste", { bubbles: !0 }));
      var i = n && n[t] ? n[t] : t;
      (e.value = i),
        r && r(i),
        "undefined" !== typeof InputEvent && e.dispatchEvent(new InputEvent("input", { bubbles: !0, inputType: "insertFromPaste" })),
        e.dispatchEvent(new Event("change", { bubbles: !0 })),
        o && o.focus();
    }
    var Yt = function (e) {
      var t = e.element,
        n = e.id,
        r = e.value,
        o = e.onFill,
        i = e.resumedCount,
        a = e.mapping,
        s = e.sectionId,
        u = xe(),
        l = (0, C.useCallback)(
          function (e) {
            u(jt(s, { id: n, value: e, fill: !0 }));
          },
          [u, n, s]
        );
      return (
        (0, C.useEffect)(
          function () {
            zt(t, r, a, l), o({ id: n, value: r });
          },
          [t, n, r, o, a, l]
        ),
        (0, C.useEffect)(
          function () {
            i && i > 0 && zt(t, r, a, l);
          },
          [i, t, r, a, l]
        ),
        null
      );
    };
    function qt(e) {
      return (
        "off" === (e.getAttribute("autocomplete") || "").toLocaleLowerCase() ||
        !!e.getAttribute("data-lpignore") ||
        !!e.getAttribute("data-lp-ignore") ||
        !!e.getAttribute("lpignore")
      );
    }
    function Kt(e, t, n) {
      return e.filter(function (e) {
        if (e.fill) {
          var r = Fe(e.id);
          if (r)
            return !(function (e, t, n) {
              return !(!t || !qt(e)) || !(!n || !e.value);
            })(r, t, n);
        }
        return !1;
      });
    }
    function $t(e, t) {
      var n = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = d(e)) || (t && e && "number" === typeof e.length)) {
          n && (e = n);
          var r = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var i,
        a = !0,
        s = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (a = e.done), e;
        },
        e: function (e) {
          (s = !0), (i = e);
        },
        f: function () {
          try {
            a || null == n.return || n.return();
          } finally {
            if (s) throw i;
          }
        }
      };
    }
    var Xt = ["inline", "inline-block"];
    function Qt(e) {
      return "innerText" in e ? e.innerText.trim() : "";
    }
    function Zt(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      try {
        if (e && e !== t) {
          var r = Qt(e);
          if (r) {
            var o = getComputedStyle(e);
            if (o.opacity && parseFloat(o.opacity) < 0.1) return "";
            if (n && !Xt.includes(o.display)) {
              if ("static" === o.position) throw new Error("Not inline");
              return "";
            }
            return (
              e.children.length > 0 &&
                Array.from(e.childNodes).forEach(function (e) {
                  if (e.nodeType === Node.ELEMENT_NODE) {
                    var o = Qt(e);
                    if (r.includes(o) || r.includes(o.toUpperCase())) {
                      var i = Zt(e, t, n);
                      i && (n = !0), (r = r.replace(o, i));
                    }
                  }
                }),
              r
            );
          }
        }
      } catch (i) {
        return "";
      }
      return "";
    }
    function Jt(e) {
      return Zt(e) || ("value" in e ? e.value : "");
    }
    function en(e) {
      return (
        "inline" !== e.display &&
        ("rgba(0, 0, 0, 0)" !== e.backgroundColor ||
          ("0px" !== e.borderTopWidth && "0px" !== e.borderRightWidth && "0px" !== e.borderBottomWidth && "0px" !== e.borderLeftWidth) ||
          "none" !== e.boxShadow)
      );
    }
    function tn(e, t) {
      if (en(getComputedStyle(e))) return !0;
      if (en(getComputedStyle(e, ":before"))) return !0;
      if (en(getComputedStyle(e, ":after"))) return !0;
      for (var n = 0, r = Array.from(e.children); n < r.length; n++) {
        var o = r[n];
        if (o.nodeType === Node.ELEMENT_NODE) if (Jt(o) === t && tn(o, t)) return !0;
      }
      return !1;
    }
    function nn(e) {
      if (
        (function (e) {
          var t = (e.getAttribute("type") || "").toLocaleLowerCase();
          return (
            ("BUTTON" === e.tagName && "reset" !== t) ||
            ("INPUT" === e.tagName && ("submit" === t || "button" === t)) ||
            "button" === e.getAttribute("role") ||
            "A" === e.tagName
          );
        })(e)
      ) {
        var t = Jt(e);
        if (t) {
          var n = (e.getAttribute("type") || "").toLocaleLowerCase();
          return (("INPUT" === e.tagName || "BUTTON" === e.tagName) && "submit" === n) || tn(e, t);
        }
      }
      return !1;
    }
    var rn = (function (e) {
      return (e.EN = "en"), (e.DE = "de"), (e.ES = "es"), (e.FR = "fr"), (e.IT = "it"), (e.NL = "nl"), (e.PT = "pt"), e;
    })({});
    function on(e, t, n) {
      var r = n.get(t);
      return !!r && e.match(r);
    }
    function an(e, t, n) {
      return n && t.has(n) ? on(e, n, t) : on(e, rn.EN, t);
    }
    var sn,
      un,
      ln,
      cn = (function (e) {
        return (
          (e[(e.Login = 1)] = "Login"),
          (e[(e.CreateAccount = 2)] = "CreateAccount"),
          (e[(e.ChangePassword = 3)] = "ChangePassword"),
          (e[(e.NextStep = 4)] = "NextStep"),
          e
        );
      })({}),
      fn =
        (a((sn = {}), rn.EN, [/((?:confirm)|(?:verify)|(?:repeat)|(?:re[-]?enter)|(?:re[-]?type)).?password/i, /password.?confirm/i]),
        a(sn, rn.DE, [/((?:confirm)|(?:verify)|(?:repeat)|(?:reenter)|(?:retype))\spassword/i]),
        a(sn, rn.ES, [/((?:confirm)|(?:verify)|(?:repeat)|(?:reenter)|(?:retype))\spassword/i]),
        a(sn, rn.FR, [/((?:confirm)|(?:verify)|(?:repeat)|(?:reenter)|(?:retype))\spassword/i]),
        a(sn, rn.IT, [/((?:confirm)|(?:verify)|(?:repeat)|(?:reenter)|(?:retype))\spassword/i]),
        a(sn, rn.NL, [/((?:confirm)|(?:verify)|(?:repeat)|(?:reenter)|(?:retype))\spassword/i]),
        a(sn, rn.PT, [/((?:confirm)|(?:verify)|(?:repeat)|(?:reenter)|(?:retype))\spassword/i]),
        sn),
      dn =
        (a((un = {}), rn.EN, [/new.?password/i].concat(I(fn[rn.EN]))),
        a(un, rn.DE, [/(?:neues passwort)/i].concat(I(fn[rn.DE]))),
        a(un, rn.ES, [/(?:contrase[n\xf1]a nueva)/i].concat(I(fn[rn.ES]))),
        a(un, rn.FR, [/(?:nouveau mots? de passe)/i].concat(I(fn[rn.FR]))),
        a(un, rn.IT, [/(?:nuova password)/i].concat(I(fn[rn.IT]))),
        a(un, rn.NL, [/(?:nieuw hoofdwachtwoord)/i].concat(I(fn[rn.NL]))),
        a(un, rn.PT, [/(?:nova senha)/i].concat(I(fn[rn.PT]))),
        un),
      pn =
        (a(
          (ln = {}),
          rn.EN,
          new Map()
            .set(dt.SiteOneTimeCode, [/(?:token)|(?:otp)|(?:otc)|(?:multi|two).*code|(?:one( |-)time)|(?:(6|six)( |-)digit)/i])
            .set(dt.SiteUsername, [/(?:apple id)|(?:user[-. ]?name)/i])
            .set(dt.SiteNewPassword, dn[rn.EN])
            .set(dt.SitePassword, { match: [/(?:password)/i], exclude: dn[rn.EN] })
            .set(dt.BankAccountAccountNumber, [/(?:account|acct).*num/i])
            .set(dt.CardNameOnCard, [/(?:name.*on.*card)|(?:card.*holder)|(?:(?:card|cc).*name)|(?:embossed.*name)|(?:accountHolderName)/i])
            .set(dt.CardNumber, [/(?:card|cc)(?!(?:.*ident|ess|ount)).*(?:num|no)|card.*account/i])
            .set(dt.CardSecurityCode, [
              /(?:cvv)|(?:csc)|(?:card.*(?:ver|code|cid))|(?:security.*code)|(?:cid$)|(?:cvc$)|(?:cvc2?$)|(?:ccvnc$)|(?:cv2)|(?:cvnum)|(?:cvn)|(?:card.*security.*number)|(?:credit.*card.*id)|(?:^verificationnumber2$)|(?:^verificationcode$)/i
            ])
            .set(dt.CardStartMonth, [/(?:start).*mon/i])
            .set(dt.CardStartYear, [/(?:start).*(?:year|yr)/i])
            .set(dt.CardExpirationMonth, [/(?:exp|card|cc).*(?:mon|mth)/i])
            .set(dt.CardExpirationYear, [/(?:exp|card|cc).*(?:year|yr)/i])
            .set(dt.CardType, [/(?:(?:card|cc|pay).*(?:type|method|brand|issuer))|(?:credit.?card(?:$|.[^e]))|(?:bill.*method)/i])
            .set(dt.AddressEmailAddress, [/(?:e.?mail)|(?:confirm.*address)|^(?:receipt_address)/i])
            .set(dt.AddressTitle, { match: [/title|prefix|salutation/i], exclude: [/job/i] })
            .set(dt.AddressFirstName, { match: [/first.*name/i], exclude: [/last/i] })
            .set(dt.AddressMiddleName, [/middle.*name/i])
            .set(dt.AddressLastName, { match: [/(?:last.*name)|(?:surname)/i], exclude: [/first/i] })
            .set(dt.AddressName, [/^(?:(?:full)|(?:first and last)) name/i, /(?:^your name$)|(?:^name$)/i])
            .set(dt.AddressGender, [/gender|sex/i])
            .set(dt.AddressBirthdayDay, [/(?:birth.*day)|(?:dob.*day)|(?:bday)/i])
            .set(dt.AddressBirthdayMonth, [/(?:birth.*mon)|(?:dob.*mon)|(?:bmon|^mob$)|(?:mon.*birth)/i])
            .set(dt.AddressBirthdayYear, [/(?:birth.*(?:year|yr))|(?:dob.*(?:year|yr))|(?:byear|yob)|(?:year.*birth)/i])
            .set(dt.AddressLine1, [/(?:first.*(?:street|addr))|(?:(?:street|addr).*1)|(?:cannot ship to PO boxes)/i])
            .set(dt.AddressLine2, [/(?:second.*(?:street|addr))|(?:(?:street|addr).*2)|(?:suite)/i])
            .set(dt.AddressLine3, [/(?:third.*(?:street|addr))|(?:(?:street|addr).*3)/i])
            .set(dt.AddressCompany, { match: [/company|(?:business.*name)|organization/i], exclude: [/address/] })
            .set(dt.AddressCity, [/city|town/i])
            .set(dt.AddressCounty, [/county|(?:fourth.*(?:street|addr))|(?:(?:street|addr).*4)/i])
            .set(dt.AddressCountryName, [/country/i])
            .set(dt.AddressState, [/state|region|prov/i])
            .set(dt.AddressPostalCode, [/(?:zip)|(?:post.*code)/i])
            .set(dt.AddressTimezone, [/time.*zone/i])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/(?:name.*first)|(?:first.*name)|^first$/i])
            .set(dt.CardAdditionalName, [/(?:name.*middle)|(?:middle.*name)|^middle$/i])
            .set(dt.CardFamilyName, [/(?:name.*last)|surname|(?:last.*name)|^last$/i])
            .set(dt.CardStartDate, [/(?:(?:card|cc).*start)|(?:start.*date)/i])
            .set(dt.CardExpirationDate, [/(?:(?:card|cc).*exp|expiration|expires)|(?:exp.*date)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.BankAccountBranchAddress, [/bankaddress/i])
            .set(dt.AddressStreetAddress, [/(?:address)|(?:street)/i])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/(?:birth.*date)|(?:date.*birth)|(?:birth|dob)/i])
            .set(dt.AddressEveningTel, [/(?:evening.*tel)|(?:evening.*phone)|(?:evening.*voice)/i])
            .set(dt.AddressMobileTel, [/(?:mobile)/i])
            .set(dt.BankAccountBranchPhone, [/bankphone/i])
            .set(dt.AddressFax, [/(?:fax)/i])
            .set(dt.AddressTelLocal, [/(?:^tel|phone|voice).*(?:23|last7|xxxxxxx|ext)/i])
            .set(dt.AddressTel, [/(?:^tel(?!l))|(?:phone)|(?:voice)/i])
            .set(dt.BankAccountBankName, [/(?:issuing.*bank)|(?:bank.*name)|(?:institution)/i])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [/routing.*num|bic/i])
            .set(dt.BankAccountSWIFTCode, [/swift/i])
            .set(dt.BankAccountIBANNumber, [/iban/i])
            .set(dt.BankAccountPIN, [])
        ),
        a(
          ln,
          rn.DE,
          new Map()
            .set(dt.SiteUsername, [/(?:benutzername)|(?:.*nick)|(?:.*loginname)|(?:pseudonym)/i])
            .set(dt.SiteNewPassword, dn[rn.DE])
            .set(dt.SitePassword, { match: [/(?:passwort)|(?:pswt)|(?:passwt)/i], exclude: dn[rn.DE] })
            .set(dt.CardNameOnCard, [])
            .set(dt.CardNumber, [])
            .set(dt.CardSecurityCode, [])
            .set(dt.CardStartMonth, [])
            .set(dt.CardStartYear, [])
            .set(dt.CardExpirationMonth, [])
            .set(dt.CardExpirationYear, [])
            .set(dt.CardType, [])
            .set(dt.AddressTitle, [])
            .set(dt.AddressFirstName, [/(?:name.*vor)|(?:vor.*name)|^vorname$/i])
            .set(dt.AddressMiddleName, [/(?:mittel.*name)|zwischenname/i])
            .set(dt.AddressLastName, [/(?:nach)/i])
            .set(dt.AddressGender, [])
            .set(dt.AddressBirthdayDay, [/(?:tag)/i])
            .set(dt.AddressBirthdayMonth, [/(?:monat)/i])
            .set(dt.AddressBirthdayYear, [/(?:jahr)/i])
            .set(dt.AddressCompany, [/(?:organization.*name)|(?:firma)/i])
            .set(dt.AddressStreetAddress, [/(?:Stra\xdfe.*Hausnummer)|(?:Strasse.*Hausnummer)|(?:adresszusatz)|(?:adresse)/i])
            .set(dt.AddressLine1, [/(?:Stra\xdfe)|(?:Strasse)/i])
            .set(dt.AddressLine2, [/housenumber|(?:Hausnummer)|(?:hausnr)|(?:nummer)/i])
            .set(dt.AddressLine3, [])
            .set(dt.AddressCity, [/(?:wohnort)|(?:^ort)|(?:stadt)/i])
            .set(dt.AddressCounty, [])
            .set(dt.AddressState, [/(?:bundesland)|(?:staat)/i])
            .set(dt.AddressPostalCode, [/(?:plz)|(?:vorwahl)/i])
            .set(dt.AddressCountryName, [/Land/i])
            .set(dt.AddressTimezone, [])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/(?:name.*vor)|(?:vor.*name)|^vorname$/i])
            .set(dt.CardAdditionalName, [/(?:mittel.*name)|zwischenname/i])
            .set(dt.CardFamilyName, [/(?:nach)/i])
            .set(dt.CardStartDate, [])
            .set(dt.CardExpirationDate, [])
            .set(dt.AddressName, [/(?:Vollst\xe4ndiger Name)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/(?:geburtsdatum)/i])
            .set(dt.AddressTel, [])
            .set(dt.AddressTelLocal, [])
            .set(dt.BankAccountBankName, [])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [])
            .set(dt.BankAccountAccountNumber, [])
            .set(dt.BankAccountSWIFTCode, [])
            .set(dt.BankAccountIBANNumber, [])
            .set(dt.BankAccountPIN, [])
            .set(dt.BankAccountBranchAddress, [])
            .set(dt.BankAccountBranchPhone, [])
        ),
        a(
          ln,
          rn.ES,
          new Map()
            .set(dt.SiteUsername, [/(?:nick)|(?:alias)|(?:usuario)/i])
            .set(dt.SiteNewPassword, dn[rn.ES])
            .set(dt.SitePassword, { match: [/(?:contrase[n\xf1]a)/i], exclude: dn[rn.ES] })
            .set(dt.CardNameOnCard, [/(?:titular.*cuenta)/i])
            .set(dt.CardNumber, [])
            .set(dt.CardSecurityCode, [])
            .set(dt.CardStartMonth, [])
            .set(dt.CardStartYear, [])
            .set(dt.CardExpirationMonth, [])
            .set(dt.CardExpirationYear, [])
            .set(dt.CardType, [])
            .set(dt.AddressTitle, [/(?:titulo)|(?:t\xedtulo)/i])
            .set(dt.AddressFirstName, [/(?:nombre)|(?:nom_usu)|(?:nom)/i])
            .set(dt.AddressMiddleName, [])
            .set(dt.AddressLastName, [/(?:apellido)|(?:ape*)|(?:paterno)/i])
            .set(dt.AddressGender, [/(?:sexo)|(?:genero)|(?:g\xe9nero)/i])
            .set(dt.AddressBirthdayDay, [/(?:dia)|(?:fechaDia)/i])
            .set(dt.AddressBirthdayMonth, [/(?:fechaMes)/i])
            .set(dt.AddressBirthdayYear, [/(?:fechaAnno)|(?:agno)|(?:anyo)|(?:anio)/i])
            .set(dt.AddressCompany, [/(?:empresa)/i])
            .set(dt.AddressLine2, [/(?:numero)|(?:numdom)|(?:numvia)/i])
            .set(dt.AddressLine1, [/(?:calle)|(?:domicilio)|(?:via)/i])
            .set(dt.AddressLine3, [/(?:complemento)|(?:dpto)/i])
            .set(dt.AddressCity, [/(?:ciudad)|(?:poblacion)|(?:localidad)|(?:Poblaci\xf3n)/i])
            .set(dt.AddressCounty, [])
            .set(dt.AddressState, [/(?:localizacion)|(?:provincia)|(?:comuna)/i])
            .set(dt.AddressPostalCode, [/(?:cp)|(?:C\xf3digoPostal)|(?:CodigoPostal)|(?:escalera)|(?:ct*codPostal)|(?:postal$)/i])
            .set(dt.AddressCountryName, [/pa\xeds|(?:pais)|(?:codpais)/i])
            .set(dt.AddressTimezone, [])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/(?:nombre)|(?:nom_usu)|(?:nom)/i])
            .set(dt.CardAdditionalName, [])
            .set(dt.CardFamilyName, [/(?:apellido)|(?:ape*)|(?:paterno)/i])
            .set(dt.CardStartDate, [])
            .set(dt.CardExpirationDate, [])
            .set(dt.AddressName, [/(?:nombre completo)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.AddressStreetAddress, [/(?:direccion)|(?:via)|(?:Direcci\xf3n)/i])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/(?:F.*Nacimiento)/i])
            .set(dt.AddressTel, [/fono|(?:telefono)|(?:tel\xe9fono)/i])
            .set(dt.AddressTelLocal, [])
            .set(dt.BankAccountBankName, [])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [])
            .set(dt.BankAccountAccountNumber, [])
            .set(dt.BankAccountSWIFTCode, [])
            .set(dt.BankAccountIBANNumber, [])
            .set(dt.BankAccountPIN, [])
            .set(dt.BankAccountBranchAddress, [])
            .set(dt.BankAccountBranchPhone, [])
        ),
        a(
          ln,
          rn.FR,
          new Map()
            .set(dt.SiteUsername, [/(?:.*pseudo)|(?:.*nickname)|(?:.*Nom.*utilisateur)|(?:identifiant)|(?:.*Code.*utilisateur)/i])
            .set(dt.SiteNewPassword, dn[rn.FR])
            .set(dt.SitePassword, { match: [/(?:mot? de passe)/i], exclude: dn[rn.FR] })
            .set(dt.CardNameOnCard, [/(?:titulaire.*carte)|(?:card.*alias)/i])
            .set(dt.CardNumber, [/(?:Num?[\xe9e]ro.*carte)|(?:numcard)/i])
            .set(dt.CardSecurityCode, [/(?:crypto)|(?:.*cvx)/i])
            .set(dt.CardStartMonth, [])
            .set(dt.CardStartYear, [])
            .set(dt.CardExpirationMonth, [])
            .set(dt.CardExpirationYear, [])
            .set(dt.CardType, [])
            .set(dt.AddressEmailAddress, [/(?:.*emailconfirm)|(?:.*adresse.*courriel)|(?:Adresse.*?[\xe9e]lectronique)/i])
            .set(dt.AddressTitle, [/titre|pr\xe9fixe|salutation/i])
            .set(dt.AddressCompany, [/(?:.*raisonsociale)|(?:Nom.*soci\xe9t\xe9)|(?:etablissement)/i])
            .set(dt.AddressFirstName, [/(?:.*prenom)|(?:.*pr\xe9nom)|(?:.*fname)/i])
            .set(dt.AddressMiddleName, [])
            .set(dt.AddressLastName, [/nom/i])
            .set(dt.AddressGender, [/sexe/i])
            .set(dt.AddressBirthdayDay, [/(?:jour.*naissance)|(?:birthday.*day)/i])
            .set(dt.AddressBirthdayMonth, [/(?:mois.*naissance)/i])
            .set(dt.AddressBirthdayYear, [/(?:annee.*naissance)/i])
            .set(dt.AddressLine2, [/(?:.*cpl)|(?:.*Compl\xe9ment.*adresse)|(?:.*building)|(?:.*address.*complement)/i])
            .set(dt.AddressLine1, [/(?:.*voie)|(?:.*rue.*voie)|(?:adresse)/i])
            .set(dt.AddressLine3, [/(?:address3)/i])
            .set(dt.AddressCity, [/Ville|(?:Localit\xe9)/i])
            .set(dt.AddressCounty, [])
            .set(dt.AddressState, [])
            .set(dt.AddressPostalCode, [/(?:c.*postal)/i])
            .set(dt.AddressCountryName, [/pays/i])
            .set(dt.AddressTimezone, [])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/(?:.*prenom)|(?:.*pr\xe9nom)|(?:.*fname)/i])
            .set(dt.CardAdditionalName, [])
            .set(dt.CardFamilyName, [/nom(?!.*banque)/i])
            .set(dt.CardStartDate, [])
            .set(dt.CardExpirationDate, [])
            .set(dt.AddressName, [/(?:nom complet)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.AddressStreetAddress, [/(?:adresse)/i])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/(?:date.*naissance)|(?:naissance)/i])
            .set(dt.AddressTel, [/t\xe9l|(?:numtel)/i])
            .set(dt.AddressTelLocal, [])
            .set(dt.BankAccountBankName, [])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [])
            .set(dt.BankAccountAccountNumber, [])
            .set(dt.BankAccountSWIFTCode, [])
            .set(dt.BankAccountIBANNumber, [])
            .set(dt.BankAccountPIN, [])
            .set(dt.BankAccountBranchAddress, [])
            .set(dt.BankAccountBranchPhone, [])
        ),
        a(
          ln,
          rn.IT,
          new Map()
            .set(dt.SiteUsername, [/(?:nome.*utente)|(?:nick)/i])
            .set(dt.SiteNewPassword, dn[rn.IT])
            .set(dt.CardNameOnCard, [])
            .set(dt.CardNumber, [])
            .set(dt.CardSecurityCode, [])
            .set(dt.CardStartMonth, [])
            .set(dt.CardStartYear, [])
            .set(dt.CardExpirationMonth, [])
            .set(dt.CardExpirationYear, [])
            .set(dt.CardType, [])
            .set(dt.AddressTitle, [])
            .set(dt.AddressLastName, [/(?:cognome)/i])
            .set(dt.AddressFirstName, [/(?:nome)/i])
            .set(dt.AddressMiddleName, [])
            .set(dt.AddressGender, [/sesso/i])
            .set(dt.AddressBirthdayDay, [/(?:giorno)/i])
            .set(dt.AddressBirthdayMonth, [/(?:mess?e)/i])
            .set(dt.AddressBirthdayYear, [/(?:anno)/i])
            .set(dt.AddressCompany, [])
            .set(dt.AddressLine1, [])
            .set(dt.AddressLine2, [/(?:Numero.*civico)/i])
            .set(dt.AddressLine3, [/suite/i])
            .set(dt.AddressCity, [/(?:Citt.*)/i])
            .set(dt.AddressCounty, [])
            .set(dt.AddressState, [/(?:provincia)|(?:comune)/i])
            .set(dt.AddressPostalCode, [/(?:cap)/i])
            .set(dt.AddressCountryName, [])
            .set(dt.AddressTimezone, [])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/(?:nome)/i])
            .set(dt.CardAdditionalName, [])
            .set(dt.CardFamilyName, [/(?:cognome)/i])
            .set(dt.CardStartDate, [])
            .set(dt.CardExpirationDate, [])
            .set(dt.AddressName, [/(?:nome completo)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.AddressStreetAddress, [/(?:indirizzo$)|(?:via)/i])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/(?:data.*nascita)/i])
            .set(dt.AddressTel, [])
            .set(dt.AddressTelLocal, [])
            .set(dt.BankAccountBankName, [])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [])
            .set(dt.BankAccountAccountNumber, [])
            .set(dt.BankAccountSWIFTCode, [])
            .set(dt.BankAccountIBANNumber, [])
            .set(dt.BankAccountPIN, [])
            .set(dt.BankAccountBranchAddress, [])
            .set(dt.BankAccountBranchPhone, [])
        ),
        a(
          ln,
          rn.NL,
          new Map()
            .set(dt.SiteUsername, [/(?:gebruikersnaam)/i])
            .set(dt.SiteNewPassword, dn[rn.NL])
            .set(dt.SitePassword, { match: [/(?:wachtwoord)/i], exclude: dn[rn.NL] })
            .set(dt.CardNameOnCard, [/(?:naam.*op.*kaart)/i])
            .set(dt.CardNumber, [/(?:kaart)(?!(?:.*ident|ess|ount)).*(?:num|no)|(?:kaart).*account/i])
            .set(dt.CardSecurityCode, [/(?:kaart.*(?:ver|code|cid))/i])
            .set(dt.CardStartMonth, [])
            .set(dt.CardStartYear, [])
            .set(dt.CardExpirationMonth, [/(?:kaart).*mon/i])
            .set(dt.CardExpirationYear, [/(?:kaart).*(?:year|yr)/i])
            .set(dt.CardType, [/(?:kaart.*(?:type|method|brand|issuer))|(?:credit.?(?:kaart))/i])
            .set(dt.AddressEmailAddress, [/(?:bevestigen.*adres)/i])
            .set(dt.AddressTitle, [])
            .set(dt.AddressFirstName, [/voornaam/i])
            .set(dt.AddressMiddleName, [/tussenvoegsel/i])
            .set(dt.AddressLastName, [/(?:achternaam)/i])
            .set(dt.AddressGender, [/sexe|geslacht/i])
            .set(dt.AddressBirthdayDay, [/(?:geboorte.*dag)/i])
            .set(dt.AddressBirthdayMonth, [/(?:geboorte.*maand)/i])
            .set(dt.AddressBirthdayYear, [/(?:geboorte.*jaar)/i])
            .set(dt.AddressCompany, [])
            .set(dt.AddressLine1, [/straat|adres/i])
            .set(dt.AddressLine2, [])
            .set(dt.AddressLine3, [])
            .set(dt.AddressCity, [/stad|gemeente|plaats/i])
            .set(dt.AddressCounty, [/provincie/i])
            .set(dt.AddressState, [/Staat|Regio|prov/i])
            .set(dt.AddressPostalCode, [])
            .set(dt.AddressCountryName, [/land/i])
            .set(dt.AddressTimezone, [/tijd.*zone.*/i])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/voornaam/i])
            .set(dt.CardAdditionalName, [/tussenvoegsel/i])
            .set(dt.CardFamilyName, [])
            .set(dt.CardStartDate, [/(?:kaart).*start/i])
            .set(dt.CardExpirationDate, [/(?:kaart.*exp)/i])
            .set(dt.AddressName, [/(?:Volledige naam)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.AddressStreetAddress, [/(?:straat)/i])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/geboorte/i])
            .set(dt.AddressTel, [/Telefoon|stem/i])
            .set(dt.AddressTelLocal, [])
            .set(dt.BankAccountBankName, [])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [])
            .set(dt.BankAccountAccountNumber, [])
            .set(dt.BankAccountSWIFTCode, [])
            .set(dt.BankAccountIBANNumber, [])
            .set(dt.BankAccountPIN, [])
            .set(dt.BankAccountBranchAddress, [])
            .set(dt.BankAccountBranchPhone, [])
        ),
        a(
          ln,
          rn.PT,
          new Map()
            .set(dt.SiteUsername, [/(?:apelido)/i])
            .set(dt.SiteNewPassword, dn[rn.PT])
            .set(dt.SitePassword, { match: [/(?:senha)/i], exclude: dn[rn.PT] })
            .set(dt.CardNameOnCard, [])
            .set(dt.CardNumber, [])
            .set(dt.CardSecurityCode, [])
            .set(dt.CardStartMonth, [])
            .set(dt.CardStartYear, [])
            .set(dt.CardExpirationMonth, [])
            .set(dt.CardExpirationYear, [])
            .set(dt.CardType, [])
            .set(dt.AddressTitle, [])
            .set(dt.AddressLastName, [/(?:sobrenome)/i])
            .set(dt.AddressFirstName, [/(?:nome)/i])
            .set(dt.AddressMiddleName, [])
            .set(dt.AddressGender, [/sexo/i])
            .set(dt.AddressBirthdayDay, [/(?:nascimento.*dia)|(?:nasc.dia)/i])
            .set(dt.AddressBirthdayMonth, [/(?:nascimento.*mes)|(?:nasc.mes)/i])
            .set(dt.AddressBirthdayYear, [/(?:nascimento.*(?:ano))|(?:nasc.ano)/i])
            .set(dt.AddressCompany, [])
            .set(dt.AddressLine1, [])
            .set(dt.AddressLine2, [])
            .set(dt.AddressLine3, [])
            .set(dt.AddressCity, [/(?:cidade)/i])
            .set(dt.AddressCounty, [])
            .set(dt.AddressState, [/(?:estado)/i])
            .set(dt.AddressPostalCode, [/(?:cep)/i])
            .set(dt.AddressCountryName, [/(?:pais)/i])
            .set(dt.AddressTimezone, [])
            .set(dt.AddressPhoneCountry, [])
            .set(dt.AddressPhoneCountryCode, [])
            .set(dt.AddressPhoneNational, [])
            .set(dt.CardGivenName, [/(?:nome)/i])
            .set(dt.CardAdditionalName, [])
            .set(dt.CardFamilyName, [/(?:sobrenome)/i])
            .set(dt.CardStartDate, [])
            .set(dt.CardExpirationDate, [])
            .set(dt.AddressName, [/(?:nome completo)/i])
            .set(dt.AddressHonorificSuffix, [])
            .set(dt.AddressNickname, [])
            .set(dt.AddressStreetAddress, [/(?:endere.o)/i])
            .set(dt.AddressLevel4, [])
            .set(dt.AddressLevel3, [])
            .set(dt.AddressLevel2, [])
            .set(dt.AddressLevel1, [])
            .set(dt.AddressCountryCode, [])
            .set(dt.AddressBirthday, [/(?:nascimento)|(?:data ?di ?nascimento)/i])
            .set(dt.AddressTel, [])
            .set(dt.AddressTelLocal, [])
            .set(dt.BankAccountBankName, [])
            .set(dt.BankAccountAccountType, [])
            .set(dt.BankAccountRoutingNumber, [])
            .set(dt.BankAccountAccountNumber, [])
            .set(dt.BankAccountSWIFTCode, [])
            .set(dt.BankAccountIBANNumber, [])
            .set(dt.BankAccountPIN, [])
            .set(dt.BankAccountBranchAddress, [])
            .set(dt.BankAccountBranchPhone, [])
        ),
        ln),
      hn = new Map([
        [rn.EN, /(?:log.?[io]n)|(?:sign.?[io]n)/i],
        [rn.DE, /sign\s?[oi]n|login||zugriff|anmelden/i],
        [rn.ES, /(?:iniciar.*sesion)/i],
        [rn.FR, /(?:ouverture.*session)|(?:connexion)|connecter/i],
        [rn.NL, /(?:inloggen)/i]
      ]),
      mn = new Map([
        [rn.EN, /(?:sign.?up)|(?:Join)|(?:Create)|(?:register)|(?:verification)/i],
        [rn.DE, /(?:eintragen)/i]
      ]),
      vn = new Map([[rn.EN, /(?:next)/i]]),
      yn = new Map([
        [rn.EN, /((?:Save)|(?:Change)|(?:Update))\s?password/i],
        [rn.DE, /(?:Speichern)|(?:\xe4ndern)|(?:Aktualisieren)/i],
        [rn.ES, /(?:Guardar)|(?:cambio)|(?:Actualizar)/i],
        [rn.FR, /(?:Enregistrer)|(?:Changer)|(?:Mettre \xe0 jour)/i],
        [rn.IT, /(?:Salva)|(?:Modifica)|(?:Aggiorna)/i],
        [rn.NL, /(?:Opslaan)|(?:wijzigen)|(?:Bijwerken)/i],
        [rn.PT, /(?:Salvar)|(?:Alterar)|(?:Atualizar)/i]
      ]),
      gn = new Map([[rn.EN, /(?:Remember)|(?:Keep me signed in)|(?:Keep me logged in)|(?:Stay signed in)/i]]);
    function _n(e, t) {
      return an(e, mn, t)
        ? cn.CreateAccount
        : an(e, yn, t)
        ? cn.ChangePassword
        : an(e, hn, t)
        ? cn.Login
        : an(e, vn, t)
        ? cn.NextStep
        : void 0;
    }
    function En(e, t) {
      if (e) {
        var n = _n(Jt(e), t);
        return n !== cn.NextStep && n ? n : _n(e.id, t) || n;
      }
    }
    function bn(e, t) {
      if (Object.values(e).includes(t)) return t;
    }
    function Sn(e, t) {
      var n = e.getBoundingClientRect(),
        r = t.getBoundingClientRect();
      return n.top === r.top || n.left === r.left;
    }
    function wn(e, t) {
      var n = En(e, t);
      return !!n && bn(cn, n);
    }
    function An(e, t, n) {
      var r,
        o = (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
            n = e[0],
            r = Array.from(
              t.querySelectorAll('input:not([type="file"]):not([type="hidden"]):not([type="image"]),select,button,a,[role="button"]')
            ),
            o = r.indexOf(n);
          return o > -1 ? r.slice(o) : [];
        })(e, n),
        i = [],
        a = [],
        s = $t(o);
      try {
        for (s.s(); !(r = s.n()).done; ) {
          var u = r.value;
          if (0 === a.length && e.includes(u)) i.push(u);
          else if (u.offsetParent && nn(u)) {
            if (t && !wn(u, t)) continue;
            var l = i[i.length - 1];
            if (
              l.offsetParent !== u.offsetParent ||
              u.offsetTop >= l.offsetTop + l.offsetHeight ||
              u.offsetLeft >= l.offsetLeft + l.offsetWidth
            ) {
              if (0 !== a.length && !Sn(u, a[0])) break;
              a.push(u);
            }
          }
        }
      } catch (c) {
        s.e(c);
      } finally {
        s.f();
      }
      return { inputs: i, buttons: a };
    }
    function Tn(e, t) {
      return An([e], t).buttons;
    }
    function xn(e, t) {
      var n = e
        .filter(function (e) {
          return e.fill;
        })
        .pop();
      if (n) {
        var r = Fe(n.id);
        if (r) {
          var o = Tn(r, t),
            i =
              (function () {
                if (r.form) {
                  var e = r.form.querySelectorAll("input[type=submit],button[type=submit]");
                  if (1 === e.length) return e[0];
                }
              })() ||
              o.find(function (e) {
                var n = En(e, t);
                return n === cn.Login || n === cn.NextStep;
              }) ||
              o[0];
          i
            ? i.click()
            : r.form &&
              (!(function (e) {
                if (e.action && "post" === e.method.toLowerCase())
                  try {
                    return "https:" === new URL(e.action).protocol;
                  } catch (t) {}
                return !1;
              })(r.form)
                ? r.form.dispatchEvent(new CustomEvent("submit"))
                : r.form.submit());
        }
      }
    }
    function In(e) {
      var t = e.trim().substring(0, 2).toLowerCase();
      return bn(rn, t);
    }
    function Cn() {
      var e = Dt(function (e) {
          return e.defaultLanguage;
        }),
        t = p(
          (0, C.useState)(function () {
            var e = document.documentElement.lang;
            if (e) return e;
            var t = document.querySelector("[lang]");
            return null === t || void 0 === t ? void 0 : t.lang;
          }),
          2
        ),
        n = t[0],
        r = t[1];
      return (
        (0, C.useEffect)(function () {
          var e = new MutationObserver(function () {
            r(document.documentElement.lang);
          });
          return (
            e.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }),
            function () {
              e.disconnect();
            }
          );
        }, []),
        n ? In(n) : e || rn.EN
      );
    }
    function Nn(e) {
      var t = Dt(function (t) {
          return e ? t.sectionValues[e.id] : void 0;
        }),
        n = Dt(function (t) {
          return e ? t.fillSessions[e.id] : void 0;
        });
      if (e) return pt(e, { sectionValues: a({}, e.id, t), fillSessions: a({}, e.id, n) });
    }
    var On = n(30),
      Pn = function (e) {
        var t = e.section,
          n = Ot(),
          r = Dt(function (e) {
            return e.settings.extensionPreferences.dontfillautocompleteoff;
          }),
          o = Dt(function (e) {
            return e.settings.extensionPreferences.donotoverwritefilledfields;
          }),
          i = (function (e) {
            var t = Dt(function (e) {
                return e.autofillPassword;
              }),
              n = Dt(function (e) {
                return e.autoLoggedIn;
              });
            return (
              !(!t || !t.submissionType) &&
              (t.submissionType === lt.Launch ||
                !n ||
                e.some(function (e) {
                  return !n.includes(e.type);
                }))
            );
          })(t.fields),
          a = Cn(),
          s = Dt(function (e) {
            return e.resumedCount;
          }),
          l = Nn(t),
          c = Dt(function (e) {
            return e.authPushtotpData;
          }),
          f = (0, C.useMemo)(
            function () {
              return Kt(l.fields, r, o);
            },
            [r, o, l.fields]
          ),
          d = p((0, C.useState)({}), 2),
          h = d[0],
          m = d[1],
          v = (0, C.useCallback)(
            (function (e) {
              var t = [],
                n = !1;
              return function (r) {
                n ||
                  ((n = !0),
                  setTimeout(function () {
                    e(t), (t = []), (n = !1);
                  })),
                  t.push(r);
              };
            })(function (e) {
              m(function (t) {
                var n = u({}, t);
                return (
                  e.forEach(function (e) {
                    n[e.id] = e.value;
                  }),
                  n
                );
              });
            }),
            []
          ),
          y = (0, C.useRef)(new Set()),
          g = (0, C.useMemo)(
            function () {
              var e, t;
              if (l.sessionId && f.length > 0 && !y.current.has(l.sessionId))
                return (
                  0 ===
                  ((e = f),
                  (t = h),
                  e.filter(function (e) {
                    return e.fill && e.value !== t[e.id];
                  })).length
                );
              return !1;
            },
            [f, h, l.sessionId]
          );
        (0, C.useEffect)(function () {
          l.sessionId &&
            g &&
            (y.current.add(l.sessionId),
            n.sectionFilled(l),
            i &&
              (xn(l.fields, a),
              l.fields.some(function (e) {
                return e.type === dt.SitePassword && e.fill;
              }) && n.resetLaunchedId()));
        });
        var _ = (0, C.useMemo)(
          function () {
            return (
              t.type === ct.Address &&
              t.fields.some(function (e) {
                return t.fields.some(function (t) {
                  return e !== t && e.type === t.type;
                });
              })
            );
          },
          [t]
        );
        (0, C.useEffect)(
          function () {
            l.recordId && _ && f.length > 0 && n.fill(l.recordId, "Autofill", a, l.id);
          },
          [_]
        );
        var E = l.fields.find(function (e) {
          return e.type === dt.SiteNewPassword && "" !== e.value && e.fill;
        });
        (0, C.useEffect)(
          function () {
            "undefined" !== typeof Topics && E && Topics.get(Topics.FILLED_GENERATED_PW).publish({ element: Fe(E.id), password: E.value });
          },
          [E && E.value]
        ),
          (0, C.useEffect)(
            function () {
              c &&
                l.fields.some(function (e) {
                  return e.type === dt.SiteOneTimeCode && e.fill;
                }) &&
                (n.hideInfield(), xn(l.fields, a));
            },
            [c, n, a, l.fields]
          );
        var b = f.map(function (e) {
          var n = Fe(e.id);
          return n
            ? (0, On.jsx)(
                Yt,
                { mapping: e.mapping, id: e.id, element: n, value: e.value, onFill: v, sectionId: t.id, resumedCount: s },
                e.id
              )
            : null;
        });
        return (0, On.jsx)(On.Fragment, { children: b });
      };
    function Rn(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function kn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, i(r.key), r);
      }
    }
    function Ln(e, t, n) {
      return t && kn(e.prototype, t), n && kn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function Dn(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && P(e, t);
    }
    function Mn(e) {
      return (
        (Mn = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Mn(e)
      );
    }
    function Fn() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }
    function Bn(e, t) {
      if (t && ("object" === o(t) || "function" === typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return O(e);
    }
    function Un(e) {
      var t = Fn();
      return function () {
        var n,
          r = Mn(e);
        if (t) {
          var o = Mn(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return Bn(this, n);
      };
    }
    var jn = (function (e) {
      Dn(n, e);
      var t = Un(n);
      function n() {
        return Rn(this, n), t.apply(this, arguments);
      }
      return (
        Ln(n, [
          {
            key: "componentDidCatch",
            value: function (e) {
              this.context.store.dispatch(ze.reportError(e));
            }
          },
          {
            key: "render",
            value: function () {
              return this.props.children;
            }
          }
        ]),
        n
      );
    })(C.Component);
    jn.contextType = L;
    var Gn = (function (e) {
        return (
          (e[(e.NeverShowAddSitePrompt = 0)] = "NeverShowAddSitePrompt"),
          (e[(e.NeverShowGeneratePasswordPrompt = 1)] = "NeverShowGeneratePasswordPrompt"),
          (e[(e.NeverShowFillFormsPrompt = 2)] = "NeverShowFillFormsPrompt"),
          (e[(e.NeverAutoFill = 3)] = "NeverAutoFill"),
          (e[(e.NeverShowInfieldIcons = 6)] = "NeverShowInfieldIcons"),
          (e[(e.NeverDoAnything = 8)] = "NeverDoAnything"),
          (e[(e.NeverShowMasterPasswrdReuseNotification = 9)] = "NeverShowMasterPasswrdReuseNotification"),
          e
        );
      })({}),
      Vn = function (e) {
        if (e) {
          var t = getComputedStyle(e).borderBottomWidth;
          if (t) {
            var n = t.split("px")[0];
            return Number(n);
          }
        }
        return 0;
      };
    function Hn(e) {
      var t = e.getBoundingClientRect();
      return { width: t.width, height: t.height, top: t.top + window.scrollY, left: t.left + window.scrollX };
    }
    var Wn = function (e) {
      var t =
        window.top != window.self
          ? (function (e) {
              var t = e.getBoundingClientRect();
              return { width: t.width, height: t.height, top: t.top, left: t.left };
            })(e)
          : Hn(e);
      return u(u({}, t), {}, { top: t.top - Vn(e) });
    };
    function zn(e) {
      for (var t = e.parent.frames, n = 0; n < t.length; ++n) if (t[n] === e) return n;
      throw new Error("Orphaned iframed");
    }
    function Yn() {
      for (var e = window, t = []; e !== top; ) t.unshift(zn(e)), (e = e.parent);
      return t.join(":");
    }
    function qn(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = (0, C.useRef)(t);
      (0, C.useEffect)(
        function () {
          o.current = t;
        },
        [t]
      ),
        (0, C.useEffect)(
          function () {
            var t = "current" in n ? n.current : n;
            if (t) {
              var i = function (e) {
                return o.current(e);
              };
              return (
                t.addEventListener(e, i, r),
                function () {
                  t.removeEventListener(e, i, r);
                }
              );
            }
          },
          [e, n, r]
        );
    }
    var Kn,
      $n,
      Xn,
      Qn,
      Zn,
      Jn = 0,
      er = new WeakMap();
    function tr(e) {
      return er.has(e) ? er.get(e) : ((Jn += 1), er.set(e, Jn), Jn);
    }
    var nr = ["title", "titleId"];
    function rr() {
      return (
        (rr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        rr.apply(this, arguments)
      );
    }
    function or(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    function ir(e, t) {
      var n = e.title,
        r = e.titleId,
        o = or(e, nr);
      return C.createElement(
        "svg",
        rr(
          { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, "aria-labelledby": r },
          o
        ),
        n ? C.createElement("title", { id: r }, n) : null,
        Kn || (Kn = C.createElement("rect", { x: 0.680176, y: 0.763062, width: 22.6392, height: 22.4737, rx: 4, fill: "currentColor" })),
        $n ||
          ($n = C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.7935 7.9516C19.7935 7.64414 20.0427 7.3949 20.3502 7.3949C20.6576 7.3949 20.9069 7.64414 20.9069 7.9516V16.0487C20.9069 16.3562 20.6576 16.6054 20.3502 16.6054C20.0427 16.6054 19.7935 16.3562 19.7935 16.0487V7.9516Z",
            fill: "white"
          })),
        Xn ||
          (Xn = C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.76288 13.6577C5.68525 13.6577 6.43298 12.9154 6.43298 11.9998C6.43298 11.0842 5.68525 10.3419 4.76288 10.3419C3.8405 10.3419 3.09277 11.0842 3.09277 11.9998C3.09277 12.9154 3.8405 13.6577 4.76288 13.6577Z",
            fill: "white"
          })),
        Qn ||
          (Qn = C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.3298 13.6577C11.2521 13.6577 11.9999 12.9154 11.9999 11.9998C11.9999 11.0842 11.2521 10.3419 10.3298 10.3419C9.4074 10.3419 8.65967 11.0842 8.65967 11.9998C8.65967 12.9154 9.4074 13.6577 10.3298 13.6577Z",
            fill: "white"
          })),
        Zn ||
          (Zn = C.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.8964 13.6577C16.8188 13.6577 17.5665 12.9154 17.5665 11.9998C17.5665 11.0842 16.8188 10.3419 15.8964 10.3419C14.974 10.3419 14.2263 11.0842 14.2263 11.9998C14.2263 12.9154 14.974 13.6577 15.8964 13.6577Z",
            fill: "white"
          }))
      );
    }
    var ar = C.forwardRef(ir),
      sr =
        (n.p,
        (function (e) {
          return (e.FieldFocus = "Field Focus"), (e.InfieldIcon = "Infield Icon"), (e.UserInput = "User Input"), e;
        })({}));
    function ur() {
      var e = Dt(function (e) {
          return e.isInfieldOpen;
        }),
        t = Dt(function (e) {
          return e.infieldSectionId;
        }),
        n = Dt(function (e) {
          return e.infieldElementId;
        });
      return function (r, o) {
        return e && r === n && o === t;
      };
    }
    ut();
    var lr = (function (e) {
        return (
          (e.RESET = "[extension toolbar] reset"),
          (e.SET_SEARCH_RESULTS = "[extension toolbar] set search results"),
          (e.SEARCH = "[extension toolbar] search"),
          (e.INITIATE_FEDERATED_COPY = "[extension toolbar] initiate federated copy"),
          (e.INITIATE_FEDERATED_LAUNCH = "[extension toolbar] initiate federated launch"),
          (e.INITIATE_FEDERATED_FILL = "[extension toolbar] initiate federated fill"),
          (e.INITIATE_FEDERATED_DELETE = "[extension toolbar] initiate federated delete"),
          (e.INITIATE_EDIT = "[extension toolbar] initiate edit"),
          (e.INITIATE_FEDERATED_LOGIN = "[extension toolbar] initiate federated login"),
          (e.CLOSE_LOGIN = "[extension toolbar] close login"),
          (e.INITIATE_WEBAUTHN_LOGIN = "[extension toolbar] initiate webauthn login"),
          (e.PREPARE_COPY = "[extension toolbar] prepare copy"),
          (e.SET_COPY_RECORD = "[extension toolbar] set copy record"),
          (e.CLEAR_COPY_RECORD = "[extension toolbar] clear copy record"),
          (e.CLEAR_BROWSER_DATA = "[extension toolbar] clear browser data"),
          (e.REFRESH_VAULT = "[extension toolbar] refresh vault"),
          (e.OPEN_VAULT = "[extension toolbar] open vault"),
          (e.OPEN_LOGIN = "[extension toolbar] open login"),
          (e.EDIT_RECORD = "[extension toolbar] edit record"),
          (e.SHARE_RECORD = "[extension toolbar] share record"),
          (e.SET_FAVOURTIE = "[extension toolbar] set favourite"),
          (e.RECENTLY_FAVORITED = "[extension toolbar] recently favorited"),
          (e.DELETE_RECORD = "[extension toolbar] delete vault record"),
          (e.TOAST_NOTIFICATION_STATUS = "[extension toolbar] toast notfication set"),
          (e.SET_PREFFERED_TAB = "[extension toolbar] set preferred tab"),
          (e.SET_EXPORT_RESULTS = "[extension toolbar] set export results"),
          (e.SET_SELECTED_FOLDER = "[extension toolbar] set selected folder"),
          (e.UPGRADE_BANNER_TRACK = "[extension toolbar] upgrade banner track"),
          (e.EXTENSION_REGISTRATION_TRACK = "[extension toolbar] extension registration tracking"),
          (e.REDIRECT_TO_VAULT = "[extension toolbar] redirect to vault"),
          (e.OFFLINE_CONFIRM = "[extension toolbar] offline confirm"),
          (e.FEDERATED_EXPORT = "[extension toolbar] federated export"),
          e
        );
      })({}),
      cr = function (e) {
        return Be(lr.INITIATE_WEBAUTHN_LOGIN, { webauthnData: e });
      },
      fr = function () {
        return Be(lr.OPEN_LOGIN);
      },
      dr = function () {
        return Ue(lr.REDIRECT_TO_VAULT);
      },
      pr = function (e) {
        var t = e.sectionId,
          n = e.position,
          r = e.element,
          o = e.infieldAutoshow,
          i = (0, C.useRef)(null),
          a = Ot(),
          s = xe(),
          l = tr(r),
          c = Oe(function (e) {
            return e.isLoggedIn;
          }),
          f = ur(),
          d = Dt(function (e) {
            return e.isInfieldVisible;
          }),
          p = Dt(function (e) {
            return e.settings.extensionPreferences.showFillOptions;
          }),
          h = u(u({}, n.icon), {}, { top: n.offset.top + n.icon.top, left: n.offset.left + n.icon.left }),
          m = function (e) {
            a.openInfield(t, l, Wn(r), Yn(), h, e);
          };
        return (
          (0, C.useEffect)(
            function () {
              p && o && m(sr.FieldFocus);
            },
            [o]
          ),
          qn(
            "mousedown",
            function (e) {
              e.isTrusted && p && !f(l, t) && m(sr.FieldFocus);
            },
            r
          ),
          (0, C.useEffect)(function () {
            r === document.activeElement && a.setIconPosition(h);
          }),
          qn(
            "mousedown",
            function (e) {
              e.isTrusted && e.preventDefault();
            },
            i
          ),
          qn(
            "input",
            function (e) {
              e.isTrusted && p && !f(l, t) && m(sr.UserInput);
            },
            r
          ),
          qn(
            "click",
            function (e) {
              e.isTrusted && (c ? (d && f(l, t) ? a.hideInfield() : (r.focus(), m(sr.InfieldIcon))) : s(fr()));
            },
            i
          ),
          (0, On.jsx)(ar, {
            "data-lastpass-icon": !0,
            ref: i,
            style: {
              position: "absolute",
              cursor: "pointer",
              height: n.icon.height,
              maxHeight: n.icon.height,
              width: n.icon.width,
              maxWidth: n.icon.width,
              top: n.icon.top,
              left: n.icon.left,
              zIndex: n.icon.zIndex,
              color: c ? "#d7403a" : "#BAC0CA"
            }
          })
        );
      },
      hr = (function (e) {
        return (e.Password = "sites"), (e.GeneratePassword = "generate"), (e.FormFill = "formfills"), e;
      })({}),
      mr = document.createElement("div");
    function vr(e) {
      return e && e.endsWith("px") ? parseFloat(e.substring(0, e.length - 2)) : 0;
    }
    mr.style.setProperty("position", "absolute", "important"),
      mr.style.setProperty("top", "0px", "important"),
      mr.style.setProperty("left", "0px", "important"),
      mr.style.setProperty("height", "0px", "important"),
      mr.style.setProperty("width", "0px", "important"),
      mr.setAttribute("data-lastpass-root", "");
    var yr = 5;
    var gr;
    function _r(e, t, n, r) {
      var o = p((0, C.useState)(), 2),
        i = o[0],
        a = o[1],
        s = Dt(function (e) {
          return e.settings.features[Mt.WEB_CLIENT_SAVE];
        }),
        l = (0, C.useCallback)(
          function () {
            var o = t.current;
            if (o) {
              var i = (function (e, t, n, r, o) {
                var i,
                  a = e.getBoundingClientRect(),
                  s = t.getBoundingClientRect(),
                  l = window.getComputedStyle(e),
                  c = vr(l.borderTopWidth),
                  f = vr(l.borderBottomWidth),
                  d = vr(l.paddingRight),
                  p = a.top - s.top,
                  h = a.left - s.left,
                  m = { height: (i = o ? (a.height > 26 ? 22 : a.height - 4) : r === hr.Password && n > 0 ? 18 : 16), width: o ? 22 : 16 },
                  v = { top: p + c + (a.height - c - f - m.height) / 2, left: h + a.width - d - m.width - yr };
                function y(e, n, r) {
                  var o = document.elementsFromPoint(n, r),
                    i = o.indexOf(e),
                    a = o[i - 1];
                  if (a && a !== t.firstElementChild && !mr.contains(a)) return a;
                }
                var g = (function () {
                  var t = s.left + v.left,
                    n = s.top + v.top + i / 2,
                    r = y(e, t - 1, n);
                  if (r && r !== e) return r;
                  var o = y(e, t + m.width + 1, n);
                  return o && o !== e ? o : void 0;
                })();
                if (g) {
                  var _ = g.getBoundingClientRect(),
                    E = s.left + v.left + m.width;
                  v.left = v.left - (E - _.left + yr);
                }
                return {
                  icon: u(u(u({}, m), v), {}, { zIndex: (l.zIndex && parseInt(l.zIndex)) || "auto" }),
                  offset: { top: s.top - a.top, left: s.left - a.left }
                };
              })(e, o, n, r, s);
              i && a(i);
            }
          },
          [n, r, e, t, s]
        );
      return (
        (0, C.useEffect)(l, [l]),
        (function (e, t) {
          var n = (0, C.useRef)({ height: 0, width: 0 });
          (0, C.useEffect)(
            function () {
              if (e) {
                var r = function () {
                  var r = e.clientHeight,
                    o = e.clientWidth;
                  (r === n.current.height && o === n.current.width) || ((n.current = { height: r, width: o }), t(o, r));
                };
                if ((r(), "undefined" !== typeof ResizeObserver)) {
                  var o = new ResizeObserver(r);
                  return (
                    o.observe(e),
                    function () {
                      o.disconnect();
                    }
                  );
                }
                if ("undefined" !== typeof MutationObserver) {
                  var i = new MutationObserver(r);
                  return (
                    i.observe(e, { childList: !0, subtree: !0, attributes: !0 }),
                    function () {
                      i.disconnect();
                    }
                  );
                }
              }
            },
            [e, t]
          );
        })(e, l),
        (0, C.useEffect)(
          function () {
            var n = t.current;
            if (e.parentElement && n) {
              var r = new MutationObserver(function (e) {
                e.filter(function (e) {
                  return e.target !== n && e.target !== n.firstElementChild;
                }).length > 0 && l();
              });
              return (
                r.observe(e.parentElement, { subtree: !0, childList: !0, attributes: !0 }),
                function () {
                  r.disconnect();
                }
              );
            }
          },
          [e, l, t]
        ),
        i
      );
    }
    var Er =
      (a((gr = {}), dt.SiteUsername, ct.Password),
      a(gr, dt.SitePassword, ct.Password),
      a(gr, dt.SiteNewPassword, ct.Password),
      a(gr, dt.SiteOneTimeCode, ct.Password),
      a(gr, dt.SiteCustom, ct.Password),
      a(gr, dt.CardNameOnCard, ct.PaymentCard),
      a(gr, dt.CardType, ct.PaymentCard),
      a(gr, dt.CardNumber, ct.PaymentCard),
      a(gr, dt.CardSecurityCode, ct.PaymentCard),
      a(gr, dt.CardStartDate, ct.PaymentCard),
      a(gr, dt.CardExpirationDate, ct.PaymentCard),
      a(gr, dt.CardGivenName, ct.PaymentCard),
      a(gr, dt.CardAdditionalName, ct.PaymentCard),
      a(gr, dt.CardFamilyName, ct.PaymentCard),
      a(gr, dt.CardStartMonth, ct.PaymentCard),
      a(gr, dt.CardExpirationYear, ct.PaymentCard),
      a(gr, dt.CardExpirationMonth, ct.PaymentCard),
      a(gr, dt.CardGivenName, ct.PaymentCard),
      a(gr, dt.CardAdditionalName, ct.PaymentCard),
      a(gr, dt.CardFamilyName, ct.PaymentCard),
      a(gr, dt.CardStartYear, ct.PaymentCard),
      a(gr, dt.AddressTitle, ct.Address),
      a(gr, dt.AddressFirstName, ct.Address),
      a(gr, dt.AddressMiddleName, ct.Address),
      a(gr, dt.AddressLastName, ct.Address),
      a(gr, dt.AddressGender, ct.Address),
      a(gr, dt.AddressBirthdayDay, ct.Address),
      a(gr, dt.AddressBirthdayMonth, ct.Address),
      a(gr, dt.AddressBirthdayYear, ct.Address),
      a(gr, dt.AddressCompany, ct.Address),
      a(gr, dt.AddressLine1, ct.Address),
      a(gr, dt.AddressLine2, ct.Address),
      a(gr, dt.AddressLine3, ct.Address),
      a(gr, dt.AddressCity, ct.Address),
      a(gr, dt.AddressCounty, ct.Address),
      a(gr, dt.AddressState, ct.Address),
      a(gr, dt.AddressPostalCode, ct.Address),
      a(gr, dt.AddressCountryName, ct.Address),
      a(gr, dt.AddressTimezone, ct.Address),
      a(gr, dt.AddressPhoneCountry, ct.Address),
      a(gr, dt.AddressPhoneCountryCode, ct.Address),
      a(gr, dt.AddressPhoneNational, ct.Address),
      a(gr, dt.AddressPhoneAreaCode, ct.Address),
      a(gr, dt.AddressPhoneLocalPrefix, ct.Address),
      a(gr, dt.AddressPhoneLocalSuffix, ct.Address),
      a(gr, dt.AddressPhoneExtension, ct.Address),
      a(gr, dt.AddressEveningPhoneCountry, ct.Address),
      a(gr, dt.AddressEveningPhoneCountryCode, ct.Address),
      a(gr, dt.AddressEveningPhoneNational, ct.Address),
      a(gr, dt.AddressEveningPhoneAreaCode, ct.Address),
      a(gr, dt.AddressEveningPhoneLocalPrefix, ct.Address),
      a(gr, dt.AddressEveningPhoneLocalSuffix, ct.Address),
      a(gr, dt.AddressEveningPhoneExtension, ct.Address),
      a(gr, dt.AddressMobilePhoneCountry, ct.Address),
      a(gr, dt.AddressMobilePhoneCountryCode, ct.Address),
      a(gr, dt.AddressMobilePhoneNational, ct.Address),
      a(gr, dt.AddressMobilePhoneAreaCode, ct.Address),
      a(gr, dt.AddressMobilePhoneLocalPrefix, ct.Address),
      a(gr, dt.AddressMobilePhoneLocalSuffix, ct.Address),
      a(gr, dt.AddressMobilePhoneExtension, ct.Address),
      a(gr, dt.AddressFaxCountry, ct.Address),
      a(gr, dt.AddressFaxCountryCode, ct.Address),
      a(gr, dt.AddressFaxNational, ct.Address),
      a(gr, dt.AddressFaxAreaCode, ct.Address),
      a(gr, dt.AddressFaxLocalPrefix, ct.Address),
      a(gr, dt.AddressFaxLocalSuffix, ct.Address),
      a(gr, dt.AddressFaxExtension, ct.Address),
      a(gr, dt.AddressEmailAddress, ct.Address),
      a(gr, dt.AddressUserName, ct.Address),
      a(gr, dt.AddressName, ct.Address),
      a(gr, dt.AddressHonorificSuffix, ct.Address),
      a(gr, dt.AddressNickname, ct.Address),
      a(gr, dt.AddressStreetAddress, ct.Address),
      a(gr, dt.AddressLevel4, ct.Address),
      a(gr, dt.AddressLevel3, ct.Address),
      a(gr, dt.AddressLevel2, ct.Address),
      a(gr, dt.AddressLevel1, ct.Address),
      a(gr, dt.AddressCountryCode, ct.Address),
      a(gr, dt.AddressBirthday, ct.Address),
      a(gr, dt.AddressTel, ct.Address),
      a(gr, dt.AddressEveningTel, ct.Address),
      a(gr, dt.AddressMobileTel, ct.Address),
      a(gr, dt.AddressFax, ct.Address),
      a(gr, dt.AddressTelLocal, ct.Address),
      a(gr, dt.AddressName, ct.Address),
      a(gr, dt.AddressHonorificSuffix, ct.Address),
      a(gr, dt.AddressNickname, ct.Address),
      a(gr, dt.AddressStreetAddress, ct.Address),
      a(gr, dt.AddressLevel4, ct.Address),
      a(gr, dt.AddressLevel3, ct.Address),
      a(gr, dt.AddressLevel2, ct.Address),
      a(gr, dt.AddressLevel1, ct.Address),
      a(gr, dt.AddressCountryCode, ct.Address),
      a(gr, dt.AddressBirthday, ct.Address),
      a(gr, dt.AddressTel, ct.Address),
      a(gr, dt.AddressEveningTel, ct.Address),
      a(gr, dt.AddressMobileTel, ct.Address),
      a(gr, dt.AddressFax, ct.Address),
      a(gr, dt.AddressTelLocal, ct.Address),
      a(gr, dt.BankAccountBankName, ct.BankAccount),
      a(gr, dt.BankAccountAccountType, ct.BankAccount),
      a(gr, dt.BankAccountRoutingNumber, ct.BankAccount),
      a(gr, dt.BankAccountAccountNumber, ct.BankAccount),
      a(gr, dt.BankAccountSWIFTCode, ct.BankAccount),
      a(gr, dt.BankAccountIBANNumber, ct.BankAccount),
      a(gr, dt.BankAccountPIN, ct.BankAccount),
      a(gr, dt.BankAccountBranchAddress, ct.BankAccount),
      a(gr, dt.BankAccountBranchPhone, ct.BankAccount),
      gr);
    function br(e) {
      if (e) return Er[e];
    }
    var Sr = n(748);
    function wr(e) {
      (0, C.useLayoutEffect)(function () {
        var t = e.current;
        if (t)
          for (var n = 0, r = Array.from(t.style); n < r.length; n++) {
            var o = r[n];
            t.style.setProperty(o, t.style.getPropertyValue(o), "important");
          }
      });
    }
    function Ar(e, t, n) {
      (0, C.useLayoutEffect)(
        function () {
          t && t.parentElement !== e && (n ? e.insertBefore(t, n) : e.appendChild(t));
        },
        [e, t, n]
      );
    }
    var Tr = function (e) {
        var t = e.children,
          n = e.pageContainer;
        return Ar(n, e.reactRef.current), N.createPortal(t, n);
      },
      xr = { position: "relative", height: 0, width: 0, float: "left" },
      Ir = function (e) {
        var t = e.sectionId,
          n = e.element,
          r = e.count,
          o = e.fieldType,
          i = e.infieldAutoshow,
          a = (function (e) {
            return e === dt.SiteNewPassword ? hr.GeneratePassword : br(e) === ct.Password ? hr.Password : hr.FormFill;
          })(o),
          s = (0, C.useRef)(null),
          u = _r(n, s, r, a),
          l = Dt(function (e) {
            return e.settings.extensionPreferences.dontfillautocompleteoff;
          });
        return (
          (0, C.useLayoutEffect)(
            function () {
              ("16px 18px" !== n.style.backgroundSize && "contain" !== n.style.backgroundSize) || n.removeAttribute("style");
            },
            [n]
          ),
          wr(s),
          l && qt(n)
            ? null
            : n.parentElement
            ? (0, On.jsx)(Tr, {
                pageContainer: n.parentElement,
                reactRef: s,
                children: (0, On.jsx)("div", {
                  "data-lastpass-icon-root": !0,
                  ref: s,
                  style: xr,
                  children: (0, On.jsx)(Sr.Z, {
                    children: u && (0, On.jsx)(pr, { sectionId: t, element: n, position: u, infieldAutoshow: i })
                  })
                })
              })
            : null
        );
      };
    function Cr() {
      return document.hasFocus() && !(document.activeElement && "IFRAME" === document.activeElement.nodeName);
    }
    var Nr = function (e) {
      var t = e.element,
        n = e.onFocus,
        r = e.onMousedown,
        o = e.onBlur,
        i = e.onEscape,
        a = e.onArrowDown,
        s = e.onInput;
      return (
        qn(
          "mousedown",
          function (e) {
            e.isTrusted && r();
          },
          t
        ),
        qn(
          "focus",
          function (e) {
            e.isTrusted && n();
          },
          t
        ),
        qn(
          "blur",
          function (e) {
            e.isTrusted && o();
          },
          t
        ),
        qn(
          "keydown",
          function (e) {
            e.isTrusted && "Escape" === e.key && i();
          },
          t
        ),
        qn(
          "keydown",
          function (e) {
            e.isTrusted && "ArrowDown" === e.key && a();
          },
          t
        ),
        qn(
          "input",
          function (e) {
            e.isTrusted && s();
          },
          t
        ),
        null
      );
    };
    function Or(e) {
      var t = Fe(e.id);
      if (t && "INPUT" === t.tagName) {
        var n = t.type.toLowerCase();
        return "checkbox" !== n && "radio" !== n;
      }
      return !1;
    }
    function Pr(e, t) {
      var n = e.findIndex(function (e) {
        return e.id === t;
      });
      return n >= 0 ? e.slice(n, n + 1) : [];
    }
    var Rr,
      kr = function (e) {
        var t,
          n = e.section,
          r = p(
            (0, C.useState)(
              ((t = n.fields),
              (0, C.useMemo)(function () {
                var e = t.find(function (e) {
                  return Fe(e.id) === document.activeElement;
                });
                return e ? e.id : 0;
              }, []))
            ),
            2
          ),
          o = r[0],
          i = r[1],
          a = (0, C.useRef)(0),
          s = ur(),
          u = xe(),
          l = Dt(function (e) {
            return e.authPushtotpData;
          }),
          c = Dt(function (e) {
            return (
              e.settings.features[Mt.WEB_CLIENT_FILL] &&
              e.settings.extensionPreferences.usepopupfill &&
              !e.neverUrls[Gn.NeverShowInfieldIcons]
            );
          }),
          f = Dt(function (e) {
            return e.numberManualFillPasswords;
          }),
          d = Dt(function (e) {
            return e.settings.features[Mt.WEB_CLIENT_SAVE];
          }),
          h = n.fields.filter(Or);
        Dt(function (e) {
          return e.neverUrls[Gn.NeverShowGeneratePasswordPrompt];
        }) &&
          (h = h.filter(function (e) {
            return e.type !== dt.SiteNewPassword;
          }));
        var m = Dt(function (e) {
            var t;
            if (
              null === (t = e.partialPaymentSectionGroup) || void 0 === t
                ? void 0
                : t.partialSections.some(function (e) {
                    return e.id === n.id;
                  })
            )
              return e.partialPaymentSectionGroup;
          }),
          v = (function (e, t, n, r) {
            return e.type === ct.Password
              ? t
              : r
              ? r.iconSectionId === e.id
                ? Pr(t, r.iconFieldId)
                : []
              : 0 === n
              ? t.slice(0, 1)
              : Pr(t, n);
          })(n, h, o, m),
          y = h.map(function (e) {
            var t = Fe(e.id);
            return t
              ? (0, On.jsx)(
                  Nr,
                  {
                    element: t,
                    onFocus: function () {
                      m ? u(Tt.setPartialPaymentSectionFocus(n.id, e.id)) : i(e.id);
                    },
                    onMousedown: function () {
                      s(e.id, n.id) && !Cr() && u(Tt.movingFocus()), (a.current = e.id);
                    },
                    onBlur: function () {
                      a.current === e.id && (a.current = 0), u(Tt.handleBlur(n.id, e.id));
                    },
                    onEscape: function () {
                      u(Tt.hideInfield());
                    },
                    onArrowDown: function () {
                      s(e.id, n.id) && Cr() && u(Tt.setRecordInfieldFocus(!0));
                    },
                    onInput: function () {
                      u(Tt.setActiveFiltering(!0));
                    }
                  },
                  e.id
                )
              : null;
          }),
          g =
            c &&
            v.map(function (e) {
              var t = Fe(e.id),
                r = !!l && e.type === dt.SiteOneTimeCode && document.activeElement === t;
              return t
                ? (0, On.jsx)(
                    jn,
                    {
                      children: (0, On.jsx)(Ir, {
                        sectionId: n.id,
                        element: t,
                        fieldType: e.type,
                        count: f[n.id] || 0,
                        infieldAutoshow: e.id === a.current || r
                      })
                    },
                    e.id
                  )
                : null;
            });
        return (0, On.jsxs)(On.Fragment, { children: [g, d ? y : null] });
      },
      Lr = function (e) {
        var t = e.sectionId,
          n = xe(),
          r = Dt(function (e) {
            return e.localSectionValues[t] || {};
          }),
          o = (0, C.useRef)(!1);
        return (
          (0, C.useEffect)(
            function () {
              var e = Object.values(r).filter(function (e) {
                return !!e;
              });
              if (0 !== e.length) {
                var i = setInterval(function () {
                  var r = e.every(function (e) {
                      var t = Fe(e.id);
                      return t && "" === t.value;
                    }),
                    i = e.filter(function (e) {
                      var t = Fe(e.id);
                      return t && e.value !== t.value;
                    });
                  r ||
                    o.current ||
                    i.forEach(function (e) {
                      var t = Fe(e.id);
                      t && e.fill && "" === t.value && (zt(t, e.value), (o.current = !0));
                    }),
                    r && i.length > 0 && n(Tt.resetSection(t));
                }, 500);
                return function () {
                  clearInterval(i);
                };
              }
            },
            [n, r, t]
          ),
          null
        );
      },
      Dr = function (e) {
        var t = e.section,
          n = Ot(),
          r = Cn(),
          o = xe(),
          i = Dt(function (e) {
            return e.fillSessions[t.id];
          }),
          a = (0, C.useCallback)(
            function (e, r) {
              var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              o(jt(t.id, { id: e, value: r, fill: !1 })), n.syncInputValue(t.id, e, r, i);
            },
            [n, t.id, o]
          ),
          s = (0, C.useCallback)(
            function (e) {
              n.userChangedInput(t.id, e, r);
            },
            [n, r, t.id]
          );
        Gt(function () {
          o(Bt(t.id));
        });
        var u = t.fields.map(function (e) {
          var n = Fe(e.id);
          return n
            ? (0, On.jsx)(
                Wt,
                {
                  mapping: e.mapping,
                  id: e.id,
                  sectionId: t.id,
                  element: n,
                  syncValue: a,
                  userModifed: s,
                  fillSessionId: i && i.sessionId
                },
                e.id
              )
            : null;
        });
        return (0, On.jsxs)(On.Fragment, {
          children: [
            (0, On.jsx)(jn, { children: (0, On.jsx)(kr, { section: t }) }),
            u,
            (0, On.jsx)(Lr, { sectionId: t.id }),
            (0, On.jsx)(Pn, { section: t })
          ]
        });
      };
    function Mr(e, t) {
      return e.some(function (e) {
        return t[e] > 0;
      });
    }
    var Fr =
      (a((Rr = {}), ct.Address, function (e, t) {
        if (t.fields.length > 1)
          return Mr(
            [
              dt.AddressPostalCode,
              dt.AddressStreetAddress,
              dt.AddressLine1,
              dt.AddressTel,
              dt.AddressEmailAddress,
              dt.AddressUserName,
              dt.AddressFirstName,
              dt.AddressLastName,
              dt.AddressName
            ],
            e
          );
        if (1 === t.fields.length) {
          if (t.fields[0].type === dt.AddressPostalCode) return !0;
          if (t.formType === cn.Login || t.formType === cn.CreateAccount)
            return Mr([dt.AddressEmailAddress, dt.AddressUserName, dt.AddressTel], e);
        }
        return !1;
      }),
      a(Rr, ct.PaymentCard, function (e) {
        return e[dt.CardNumber] > 0;
      }),
      a(Rr, ct.BankAccount, function (e) {
        return Mr([dt.BankAccountAccountNumber, dt.BankAccountRoutingNumber], e);
      }),
      Rr);
    var Br = function (e) {
        var t = e.section,
          n = Dt(function (e) {
            return e.partialPaymentSectionGroup;
          }),
          r = (0, C.useMemo)(
            function () {
              return (
                !!(function (e) {
                  var t = Fr[e.type],
                    n = (function (e) {
                      var t = {};
                      return (
                        e.fields.forEach(function (e) {
                          var n = t[e.type] || 0;
                          t[e.type] = n + 1;
                        }),
                        t
                      );
                    })(e);
                  return !t || t(n, e);
                })(t) ||
                !!t.fields.some(function (e) {
                  return !!e.matchingSelectors && e.matchingSelectors.length > 0;
                }) ||
                (!!n &&
                  n.partialSections.some(function (e) {
                    return e.id === t.id;
                  }))
              );
            },
            [t, n]
          );
        return r ? (0, On.jsx)(Dr, { section: t }) : null;
      },
      Ur = function () {
        var e = Dt(function (e) {
          return e.sections;
        });
        return (0, On.jsx)(jn, {
          children: e.map(function (e) {
            return (0, On.jsx)(Br, { section: e }, e.id);
          })
        });
      };
    function jr(e) {
      return e.fields.some(function (e) {
        var t = Fe(e.id);
        if (t) {
          var n = t.getBoundingClientRect();
          return document.elementFromPoint(n.left + n.width / 2, n.top + n.height / 2) === t;
        }
        return !1;
      });
    }
    var Gr = function () {
        var e = Ot(),
          t = Dt(function (e) {
            return e.autofillPassword;
          }),
          n = Dt(function (e) {
            return !e.isLoggedIn;
          }),
          r = Dt(function (e) {
            return e.sections;
          }),
          o = Cn(),
          i = (0, C.useMemo)(
            function () {
              if (t) {
                var e = (function (e) {
                  return I(e)
                    .sort(function (e, t) {
                      if (e.fields.length !== t.fields.length) return e.fields.length > t.fields.length ? -1 : 1;
                      var n = jr(e);
                      return n !== jr(t) ? (n ? -1 : 1) : 0;
                    })
                    .shift();
                })(
                  r.filter(function (e) {
                    return t.possibleSections.includes(e.id);
                  })
                );
                return e && e.id;
              }
            },
            [t, r]
          ),
          a = Nn(
            r.find(function (e) {
              return e.id === i;
            })
          ),
          s = (0, C.useMemo)(
            function () {
              return (
                !!a &&
                a.fields.some(function (e) {
                  return !e.value && void 0 === e.fill;
                })
              );
            },
            [a]
          );
        return (
          (0, C.useEffect)(
            function () {
              i && t && s && !n && e.fill(t.id, "Autofill", o, i, t.submissionType, !0);
            },
            [i, t, e, s, o, n]
          ),
          null
        );
      },
      Vr =
        "select,input" +
        ["button", "color", "file", "hidden", "image", "reset", "submit", "time", "url", "week"]
          .map(function (e) {
            return ':not([type="'.concat(e, '"])');
          })
          .join(""),
      Hr = function (e) {
        return Array.from(document.querySelectorAll(Vr))
          .filter(function (t) {
            return !e.some(function (e) {
              return t.matches(e);
            });
          })
          .map(function (e) {
            return { dom: e, id: tr(e) };
          });
      };
    function Wr(e) {
      return !!Array.from(e).find(function (e) {
        if (
          (function (e) {
            return "function" === typeof e.querySelector;
          })(e)
        )
          return e.matches(Vr) || e.querySelector(Vr);
      });
    }
    function zr() {
      var e = p((0, C.useState)(), 2),
        t = e[0],
        n = e[1],
        r = Dt(function (e) {
          return e.disabledFields;
        });
      return (
        (0, C.useEffect)(
          function () {
            n(Hr(r));
            var e = new MutationObserver(function (e) {
              (function (e) {
                return !!e.find(function (e) {
                  return Wr(e.addedNodes) || Wr(e.removedNodes);
                });
              })(e) && n(Hr(r));
            });
            return (
              e.observe(document, { childList: !0, subtree: !0 }),
              function () {
                e.disconnect();
              }
            );
          },
          [r]
        ),
        t
      );
    }
    function Yr(e) {
      if ("true" === e.getAttribute("aria-hidden")) return !0;
      if (e.clientWidth < 5 || 0 === e.clientHeight) return !0;
      if (-1 === e.tabIndex) return !0;
      var t = window.getComputedStyle(e);
      return "0" === t.opacity || "none" === t.display || "hidden" === t.visibility;
    }
    function qr(e, t) {
      return e.getAttribute(t) || "";
    }
    function Kr(e, t) {
      return e.typeAttr && e.typeAttr.toLowerCase() === t;
    }
    function $r(e) {
      return {
        idAttr: qr(e, "id"),
        classAttr: qr(e, "class"),
        nameAttr: qr(e, "name"),
        placeholderAttr: qr(e, "placeholder"),
        typeAttr: qr(e, "type"),
        titleAttr: qr(e, "title"),
        autocompleteAttr: qr(e, "autocomplete")
      };
    }
    function Xr(e) {
      if (e) {
        var t = e.textContent;
        if (t) return t.trim();
      }
      return "";
    }
    function Qr(e) {
      var t = e.getAttribute("aria-label"),
        n = e.getAttribute("aria-labelledby"),
        r = [];
      if ((t && r.push(t), n)) {
        var o,
          i = $t(n.split(" "));
        try {
          for (i.s(); !(o = i.n()).done; ) {
            var a = o.value,
              s = Xr(document.getElementById(a));
            s && r.push(s);
          }
        } catch (u) {
          i.e(u);
        } finally {
          i.f();
        }
      }
      return r.join(" ");
    }
    var Zr = function (e) {
      var t = e.id,
        n = e.element,
        r = e.updateInfo;
      return (
        (0, C.useEffect)(
          function () {
            var e = new MutationObserver(function (e) {
              var o = {};
              e.forEach(function (e) {
                o = u(
                  u({}, o),
                  (function (e, t) {
                    switch (t) {
                      case "aria-label":
                      case "aria-labelledby":
                        return { ariaLabel: Qr(e) };
                      default:
                        return $r(e);
                    }
                  })(n, e.attributeName)
                );
              }),
                (o.visible = !Yr(n)),
                r(t, o);
            });
            return (
              e.observe(n, { attributes: !0 }),
              function () {
                e.disconnect();
              }
            );
          },
          [n, r, t]
        ),
        (0, C.useEffect)(
          function () {
            var e = new ResizeObserver(function () {
              r(t, { visible: !Yr(n) });
            });
            return (
              e.observe(n),
              function () {
                e.disconnect();
              }
            );
          },
          [n, r, t]
        ),
        (0, C.useEffect)(
          function () {
            return (
              (function (e, t) {
                Me.set(e, t);
              })(t, n),
              function () {
                !(function (e) {
                  Me.delete(e);
                })(t);
              }
            );
          },
          [n, t, r]
        ),
        null
      );
    };
    function Jr(e, t) {
      if (!e) return t;
      var n = t.map(function (n) {
        var r = (function (e, t) {
          return t.find(function (t) {
            if (t.fields.length === e.fields.length) {
              for (var n = 0; n < t.fields.length; ++n) {
                var r = t.fields[n],
                  o = e.fields[n];
                if (r.id !== o.id || r.type !== o.type) return !1;
              }
              return !0;
            }
            return !1;
          });
        })(n, e);
        if (r) return r;
        var o = (function (e, t, n) {
          return t.find(function (t) {
            var r = t.fields.filter(function (t) {
              return e.fields.find(function (e) {
                return t.id === e.id;
              });
            });
            if (r.length === t.fields.length) return t;
            if (r.length > 0) {
              var o = n
                .filter(function (t) {
                  return e.id !== t.id;
                })
                .flatMap(function (e) {
                  return e.fields;
                });
              if (
                0 ===
                t.fields.filter(function (e) {
                  return o.find(function (t) {
                    return e.id === t.id;
                  });
                }).length
              )
                return t;
            }
          });
        })(n, e, t);
        return o && o.type === n.type ? u(u({}, n), {}, { id: o.id }) : n;
      });
      if (
        n.length === e.length &&
        !n.some(function (t, n) {
          return e[n] !== t;
        })
      )
        return e;
      return n;
    }
    function eo(e) {
      var t = e.querySelectorAll(Vr);
      return (
        1 === t.length ||
        1 ===
          Array.from(t).filter(function (e) {
            return !Yr(e);
          }).length
      );
    }
    function to(e) {
      var t = Xr(
        e.closest("label") ||
          (function (e) {
            if (!e) return null;
            try {
              return document.querySelector('label[for="'.concat(e, '"],label[htmlFor="').concat(e, '"]'));
            } catch (t) {
              return null;
            }
          })(e.id)
      );
      return (
        t ||
        (function (e) {
          for (var t, n = e.parentElement; n && eo(n); ) {
            var r = Array.from(n.querySelectorAll("label"))
              .map(function (e) {
                return Zt(e);
              })
              .filter(function (e) {
                return e && e.length > 0;
              });
            if (1 === r.length) return r[0];
            if (r.length > 1) return "";
            var o = Zt(n, t);
            if (o) return o;
            (t = n), (n = n.parentElement);
          }
          if (n) {
            var i = Array.from(n.querySelectorAll(Vr + ",label")),
              a = i.filter(function (e) {
                return "LABEL" === e.nodeName;
              });
            if (i.length / a.length === 2) {
              var s = "LABEL" === i[0].nodeName,
                u = i.indexOf(e);
              return Xr(s ? i[u - 1] : i[u + 1]);
            }
          }
          return "";
        })(e)
      );
    }
    function no(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      return (0, C.useCallback)(
        (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = null;
          return function () {
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            n && clearTimeout(n),
              (n = setTimeout(function () {
                (n = null), e.apply(null, o);
              }, t));
          };
        })(e, n),
        t
      );
    }
    var ro = [dt.CardExpirationDate, dt.CardExpirationYear, dt.CardExpirationMonth, dt.AddressState];
    function oo(e) {
      return ro.includes(e.finalIdentification) || e.visible;
    }
    function io(e, t) {
      for (
        var n = [],
          r = function () {
            var r = (function (e, t) {
                var n = e.map(function (e) {
                    return e.element;
                  }),
                  r = An(n, t, n[0].form || document);
                return u(
                  u({}, r),
                  {},
                  {
                    inputs: e.filter(function (e) {
                      return r.inputs.includes(e.element);
                    })
                  }
                );
              })(e, t),
              o = r.inputs,
              i = o.length ? o : e;
            n.push(i),
              (e = e.filter(function (e) {
                return !i.includes(e);
              }));
          };
        e.length;

      )
        r();
      return n;
    }
    function ao(e) {
      return !Kr(e, "checkbox") && !Kr(e, "radio");
    }
    var so,
      uo = (function (e) {
        return (
          (e[(e.Numeric = 0)] = "Numeric"),
          (e[(e.YYYY = 1)] = "YYYY"),
          (e[(e.YY = 2)] = "YY"),
          (e[(e.MM = 3)] = "MM"),
          (e[(e.MMYY = 4)] = "MMYY"),
          (e[(e.MMYYYY = 5)] = "MMYYYY"),
          e
        );
      })({}),
      lo = /MM\s?\/\s?YYYY/i,
      co = /MM\s?\/\s?YY/i,
      fo = /MM/i,
      po = /YY/i,
      ho = /YYYY/i;
    function mo(e, t) {
      return !(!e.placeholderAttr || !e.placeholderAttr.match(t)) || !(!e.label || !e.label.match(t));
    }
    function vo(e, t, n) {
      e.autocompleteIdentification || e.finalIdentification === t || (e.finalIdentification = t), (e.format = n);
    }
    function yo(e) {
      e.forEach(function (e) {
        "SELECT" !== e.element.tagName &&
          ((e.finalIdentification !== dt.CardExpirationDate &&
            e.finalIdentification !== dt.CardExpirationMonth &&
            e.finalIdentification !== dt.CardExpirationYear) ||
            (function (e) {
              mo(e, lo)
                ? vo(e, dt.CardExpirationDate, uo.MMYYYY)
                : mo(e, co)
                ? vo(e, dt.CardExpirationDate, uo.MMYY)
                : mo(e, fo)
                ? vo(e, dt.CardExpirationMonth, uo.MM)
                : mo(e, ho)
                ? vo(e, dt.CardExpirationYear, uo.YYYY)
                : mo(e, po) && vo(e, dt.CardExpirationYear, uo.YY);
            })(e));
      });
    }
    function go(e, t) {
      return ("match" in t ? t.match : t).some(function (t) {
        return t.test(e);
      });
    }
    function _o(e, t) {
      return (
        "match" in t &&
        e.some(function (e) {
          return t.exclude.some(function (t) {
            return t.test(e);
          });
        })
      );
    }
    function Eo(e, t) {
      var n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set(),
        o = e.filter(function (e) {
          return !!e;
        }),
        i = $t(o);
      try {
        for (i.s(); !(n = i.n()).done; )
          for (var a = n.value, s = 0, u = Array.from(t.entries()); s < u.length; s++) {
            var l = p(u[s], 2),
              c = l[0],
              f = l[1];
            if (!r.has(c) && go(a, f)) {
              if (!_o(o, f)) return c;
              r.add(c);
            }
          }
      } catch (d) {
        i.e(d);
      } finally {
        i.f();
      }
    }
    function bo(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pn;
      if (ao(e)) {
        var r = new Set();
        if (t) {
          var o = Eo([e.label, e.placeholderAttr], n[t], r);
          if (o) return o;
          var i = Eo([e.titleAttr, e.ariaLabel], n[t], r);
          if (i) return i;
        }
        return Eo([e.nameAttr, e.idAttr], n[rn.EN], r);
      }
    }
    var So =
      (a((so = {}), rn.EN, new Map().set(dt.SiteNewPassword, fn[rn.EN])),
      a(so, rn.DE, new Map().set(dt.SiteNewPassword, fn[rn.DE])),
      a(so, rn.ES, new Map().set(dt.SiteNewPassword, fn[rn.ES])),
      a(so, rn.FR, new Map().set(dt.SiteNewPassword, fn[rn.FR])),
      a(so, rn.IT, new Map().set(dt.SiteNewPassword, fn[rn.IT])),
      a(so, rn.NL, new Map().set(dt.SiteNewPassword, fn[rn.NL])),
      a(so, rn.PT, new Map().set(dt.SiteNewPassword, fn[rn.PT])),
      so);
    function wo(e) {
      return e.finalIdentification === dt.SitePassword || e.finalIdentification === dt.SiteNewPassword;
    }
    function Ao(e) {
      return e.filter(function (e) {
        return wo(e);
      });
    }
    var To = [dt.SiteUsername, dt.AddressEmailAddress, dt.AddressTel];
    function xo(e) {
      if (
        !e.some(function (e) {
          return e.finalIdentification === dt.SiteNewPassword;
        })
      ) {
        var t = e.filter(function (e) {
          return Kr(e, "password");
        });
        1 === t.length &&
          t[0].finalIdentification !== dt.SiteOneTimeCode &&
          t[0].finalIdentification !== dt.CardSecurityCode &&
          (t[0].finalIdentification = dt.SitePassword);
        var n = e.find(function (e) {
          return e.finalIdentification === dt.SitePassword;
        });
        if (n) {
          var r = e[e.indexOf(n) - 1];
          r && (r.finalIdentification = dt.SiteUsername);
        } else 1 === e.length && To.includes(e[0].finalIdentification) && (e[0].finalIdentification = dt.SiteUsername);
      }
    }
    function Io(e) {
      (function (e) {
        return e.some(function (e) {
          return e.finalIdentification === dt.SiteNewPassword;
        });
      })(e) ||
        (function (e) {
          return 2 === e.length && e[0].finalIdentification === dt.SiteUsername && e[1].finalIdentification === dt.SitePassword;
        })(e) ||
        (xo(e),
        e.forEach(function (e) {
          ((e.finalIdentification === dt.SiteUsername && e.autocompleteIdentification !== dt.SiteUsername) ||
            (e.finalIdentification === dt.SitePassword && e.autocompleteIdentification !== dt.SitePassword)) &&
            (e.allowAutofill = !1);
        }));
    }
    function Co(e) {
      return /(?:sign.?[io]n)|(?:log.?[io]n)|(?:auth)/i.test(e);
    }
    function No(e) {
      var t = Zt(e);
      if (t)
        for (var n = 0, r = Array.from(e.querySelectorAll("a")); n < r.length; n++) {
          var o = Zt(r[n]);
          o && (t = t.replace(o, ""));
        }
      return t;
    }
    function Oo(e) {
      switch (e.tagName) {
        case "H1":
          return 1;
        case "H2":
          return 2;
        case "H3":
          return 3;
        case "STRONG":
          return 4;
        default:
          return e.ariaLevel ? parseInt(e.ariaLevel) : 5;
      }
    }
    function Po(e, t, n) {
      var r = e.filter(function (e) {
          return e.finalIdentification;
        }),
        o = r.length > 0 ? r[r.length - 1] : e[e.length - 1],
        i = Tn(o.element, t).map(function (e) {
          return En(e, t);
        }),
        a = i.some(function (e) {
          return e === cn.NextStep;
        }),
        s = i.some(function (e) {
          return e === cn.CreateAccount && !a;
        }),
        u = i.some(function (e) {
          return e === cn.Login && !a;
        });
      if (s && u && n) return cn.Login;
      if (s) return cn.CreateAccount;
      if (
        i.some(function (e) {
          return e === cn.ChangePassword;
        })
      )
        return cn.ChangePassword;
      if (u) return cn.Login;
      if (o.finalIdentification) {
        var l = (function (e, t, n) {
          if (e) {
            var r = an(e, mn, t),
              o = an(e, hn, t);
            if (r && o && n) return cn.Login;
            if (r) return cn.CreateAccount;
            if (an(e, yn, t)) return cn.ChangePassword;
            if (o) return cn.Login;
          }
        })(
          (function (e) {
            for (var t = e.form || e.parentElement; t; ) {
              var n = Array.from(t.querySelectorAll('h1,h2,h3,strong,[role="heading"]'));
              if (n.length > 0)
                for (
                  var r = function (e) {
                      var t = n.filter(function (t) {
                        return Oo(t) === e;
                      });
                      return 1 === t.length ? { v: No(t[0]) } : t.length > 1 ? { v: void 0 } : void 0;
                    },
                    o = 1;
                  o <= 5;
                  o++
                ) {
                  var i = r(o);
                  if ("object" === typeof i) return i.v;
                }
              t = t.parentElement;
            }
          })(o.element),
          t,
          n
        );
        if (l) return l;
      }
      var c = (function (e) {
        if (e) {
          var t = e.querySelector('input[type="checkbox"]');
          if (t) return to(t);
        }
      })(o.element.form);
      return c && an(c, gn, t) ? cn.Login : void 0;
    }
    function Ro(e) {
      var t = (function (e) {
          return /(newaccount|start|enroll|sign[-_]?up|join(?!e)|register|\/reg\/|registration|create|buy)/i.test(e);
        })(e),
        n = (function (e) {
          return /(change|reset|setting|preferences|forgot|security)/i.test(e) && !Co(e);
        })(e),
        r = Co(e);
      if (
        1 ===
        [t, n, r].filter(function (e) {
          return !0 === e;
        }).length
      ) {
        if (t) return cn.CreateAccount;
        if (n) return cn.ChangePassword;
        if (r) return cn.Login;
      }
    }
    function ko(e, t) {
      switch (
        (t.forEach(function (t) {
          t.formType = e;
        }),
        e)
      ) {
        case cn.CreateAccount:
          !(function (e) {
            var t = Ao(e);
            t.length <= 2 &&
              t.forEach(function (e) {
                e.finalIdentification = dt.SiteNewPassword;
              }),
              e.forEach(function (e) {
                Kr(e, "email")
                  ? (e.finalIdentification = dt.AddressEmailAddress)
                  : e.finalIdentification === dt.SiteUsername && (e.finalIdentification = dt.AddressUserName);
              });
          })(t);
          break;
        case cn.Login:
          xo(t);
          break;
        case cn.ChangePassword:
          !(function (e) {
            var t = Ao(e);
            1 === t.length && (t[0].finalIdentification = dt.SiteNewPassword);
          })(t);
      }
    }
    var Lo = new Set([
      dt.CardExpirationDate,
      dt.CardExpirationMonth,
      dt.CardExpirationYear,
      dt.CardStartDate,
      dt.CardStartMonth,
      dt.CardStartYear,
      dt.AddressState,
      dt.AddressCountryCode,
      dt.AddressCountryName,
      dt.AddressFaxCountry,
      dt.AddressFaxCountryCode,
      dt.AddressPhoneCountry,
      dt.AddressPhoneCountryCode,
      dt.AddressMobilePhoneCountry,
      dt.AddressMobilePhoneCountryCode,
      dt.AddressEveningPhoneCountry,
      dt.AddressEveningPhoneCountryCode
    ]);
    var Do = (function (e) {
        return (
          (e.January = "01"),
          (e.February = "02"),
          (e.March = "03"),
          (e.April = "04"),
          (e.May = "05"),
          (e.June = "06"),
          (e.July = "07"),
          (e.August = "08"),
          (e.September = "09"),
          (e.October = "10"),
          (e.November = "11"),
          (e.December = "12"),
          e
        );
      })({}),
      Mo = new Map([
        [Do.December, /dec|(^12$)/i],
        [Do.November, /nov|(^11$)/i],
        [Do.October, /oct|(^10$)/i],
        [Do.September, /sept|(^0?9$)/i],
        [Do.August, /aug|(^0?8$)/i],
        [Do.July, /jul|(^0?7$)/i],
        [Do.June, /jun|(^0?6$)/i],
        [Do.May, /may|(^0?5$)/i],
        [Do.April, /apr|(^0?4$)/i],
        [Do.March, /mar|(^0?3$)/i],
        [Do.February, /feb|(^0?2$)/i],
        [Do.January, /jan|(^0?1$)/i]
      ]);
    var Fo = /^(\d{2}|\d{4})$/i;
    var Bo = (function (e) {
        return (e[(e.Month = 1)] = "Month"), (e[(e.Year = 2)] = "Year"), e;
      })(Bo || {}),
      Uo = new Map([
        [
          Bo.Month,
          function (e) {
            for (var t = 0, n = Array.from(Mo); t < n.length; t++) {
              var r = p(n[t], 2),
                o = r[0],
                i = r[1];
              if (e.match(i)) return o;
            }
          }
        ],
        [
          Bo.Year,
          function (e) {
            if (e.match(Fo)) return e.slice(-2);
          }
        ]
      ]);
    function jo(e) {
      e.forEach(function (e) {
        if (
          "SELECT" === e.element.tagName &&
          (e.finalIdentification === dt.CardExpirationMonth ||
            e.finalIdentification === dt.CardExpirationDate ||
            e.finalIdentification === dt.CardExpirationYear)
        ) {
          var t = (function (e) {
            for (var t = 0, n = Array.from(e.querySelectorAll("option")); t < n.length; t++)
              for (var r = n[t], o = 0, i = Array.from(Uo); o < i.length; o++) {
                var a = p(i[o], 2),
                  s = a[0];
                if ((0, a[1])(Xr(r))) return s;
              }
          })(e.element);
          if (t) {
            t === Bo.Month && (e.finalIdentification = dt.CardExpirationMonth),
              t === Bo.Year && (e.finalIdentification = dt.CardExpirationYear);
            var n = Uo.get(t);
            n &&
              (e.mapping = (function (e, t) {
                var n = Array.from(e.querySelectorAll("option")),
                  r = {};
                return (
                  n.forEach(function (e) {
                    var n = t(Xr(e));
                    n && (r[n] = e.value);
                  }),
                  r
                );
              })(e.element, n));
          }
        }
      });
    }
    function Go(e, t, n, r, o, i, a) {
      var s = e.filter(ao),
        u = (function (e) {
          return (
            !!e.every(function (t, n) {
              if (!t.element.form) return !1;
              var r = e[n - 1];
              return !r || r.element.form === t.element.form;
            }) ||
            e.every(function (e) {
              return "SELECT" === e.element.tagName || !!e.finalIdentification;
            })
          );
        })(s);
      io(s, t).forEach(function (e) {
        yo(e),
          (function (e, t) {
            var n = e.find(function (e) {
              return e.finalIdentification === dt.SiteNewPassword;
            });
            if (n && bo(n, t, So)) {
              var r = e.indexOf(n),
                o = e[r - 1];
              o && Kr(o, "password") ? (o.finalIdentification = dt.SiteNewPassword) : (n.finalIdentification = dt.SitePassword);
            }
          })(e, t),
          (function (e) {
            e.forEach(function (e) {
              e.finalIdentification && "SELECT" === e.element.nodeName && !Lo.has(e.finalIdentification) && delete e.finalIdentification;
            });
          })(e),
          (function (e, t, n, r, o) {
            var i = Po(e, t, r);
            if (i) ko(i, e);
            else {
              if (o) {
                var a = Ro(n);
                if (a) return void ko(a, e);
              }
              Io(e);
            }
          })(e, t, n, r, u),
          (function (e) {
            e.forEach(function (e) {
              wo(e) && !Kr(e, "password") && (e.finalIdentification = void 0);
            });
          })(e),
          jo(e),
          (function (e, t, n, r) {
            var o = e.filter(function (e) {
              return e.finalIdentification === dt.SiteOneTimeCode;
            });
            o.length > 0 &&
              ((n &&
                (t ||
                  e.some(function (e) {
                    return e.finalIdentification === dt.SitePassword;
                  }))) ||
                r ||
                o.forEach(function (e) {
                  return (e.finalIdentification = void 0);
                }));
          })(e, o, i, a),
          (function (e) {
            if (window !== top) {
              var t = window.innerHeight,
                n = e.find(function (e) {
                  return e.element.clientHeight / t > 0.5;
                });
              n &&
                e.forEach(function (e) {
                  e !== n && (e.finalIdentification = void 0);
                });
            }
          })(e);
      });
    }
    var Vo = [dt.SiteCustom, dt.SiteNewPassword],
      Ho = [dt.AddressEmailAddress, dt.AddressUserName, dt.AddressTel];
    function Wo(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = br(e.finalIdentification);
          if (n) {
            var r = t.get(n);
            r || ((r = []), t.set(n, r)), r.push(e);
          }
        }),
        Array.from(t.values())
      );
    }
    function zo(e) {
      if (br(e[0].finalIdentification) === ct.PaymentCard) return [e];
      var t = [[]];
      return (
        e.forEach(function (e) {
          var n = t[t.length - 1];
          if (
            (function (e, t) {
              return (
                0 === t.length ||
                !(
                  !e.element.form ||
                  t[t.length - 1].finalIdentification !== e.finalIdentification ||
                  !Ho.includes(e.finalIdentification)
                ) ||
                !t.some(function (t) {
                  return t.finalIdentification === e.finalIdentification;
                }) ||
                Vo.includes(e.finalIdentification)
              );
            })(e, n)
          )
            n.push(e);
          else {
            var r = [e];
            t.push(r);
          }
        }),
        t
      );
    }
    function Yo(e) {
      var t = br(e[0].finalIdentification);
      if (!t) throw new Error("Record type not identified");
      return {
        id: ut(),
        type: t,
        formType: e[0].formType,
        allowAutofill: e[0].allowAutofill,
        fields: e.map(function (e) {
          var t = e.id,
            n = e.finalIdentification,
            r = e.format,
            o = e.matchingSelectors,
            i = e.mapping,
            a = e.typeAttr,
            s = e.nameAttr,
            u = e.idAttr;
          if (!n) throw new Error("Unidentified field ended up in a section!");
          return { id: t, type: n, format: r, mapping: i, matchingSelectors: o || [], typeAttr: a, nameAttr: s, idAttr: u };
        })
      };
    }
    function qo(e) {
      var t = [],
        n = [];
      e.forEach(function (e) {
        !1 === e.allowAutofill ? n.push(e) : t.push(e);
      });
      var r = [];
      return t.length > 0 && r.push(t), n.length > 0 && r.push(n), r;
    }
    var Ko = new Set([ct.Password, ct.Address, ct.PaymentCard]);
    function $o(e, t, n, r, o, i, a, s, u) {
      e.forEach(function (e) {
        ao(e) &&
          (e.visible
            ? (e.finalIdentification = e.regexIdentification || e.autocompleteIdentification)
            : (e.finalIdentification = e.autocompleteIdentification || e.regexIdentification));
      });
      var l = e.filter(oo);
      Go(l, n, r, o, a, s, u),
        (function (e, t) {
          e.forEach(function (e) {
            if (e.finalIdentification !== dt.SiteNewPassword && e.finalIdentification !== dt.SiteOneTimeCode) {
              var n = t.filter(function (t) {
                return e.element.matches(t.css);
              });
              n.length > 0 &&
                (e.finalIdentification || (e.finalIdentification = n[0].type),
                (e.allowAutofill = !0),
                (e.matchingSelectors = n.map(function (e) {
                  return e.css;
                })));
            }
          });
        })(l, t);
      var c = (function (e, t) {
        return io(
          e.filter(function (e) {
            return !!e.finalIdentification;
          }),
          t
        )
          .flatMap(Wo)
          .flatMap(zo)
          .flatMap(qo)
          .map(Yo);
      })(l, n);
      return c.filter(function (e) {
        return (function (e, t) {
          return Ko.has(e) && !t.includes(e);
        })(e.type, i);
      });
    }
    var Xo,
      Qo = (function (e) {
        return (
          (e.on = "on"),
          (e.off = "off"),
          (e.name = "name"),
          (e.honorificPrefix = "honorific-prefix"),
          (e.givenName = "given-name"),
          (e.additionalName = "additional-name"),
          (e.familyName = "family-name"),
          (e.honorificSuffix = "honorific-suffix"),
          (e.nickname = "nickname"),
          (e.username = "username"),
          (e.newPassword = "new-password"),
          (e.currentPassword = "current-password"),
          (e.oneTimeCode = "one-time-code"),
          (e.organizationTitle = "organization-title"),
          (e.organization = "organization"),
          (e.streetAddress = "street-address"),
          (e.addressLine1 = "address-line1"),
          (e.addressLine2 = "address-line2"),
          (e.addressLine3 = "address-line3"),
          (e.addressLevel4 = "address-level4"),
          (e.addressLevel3 = "address-level3"),
          (e.addressLevel2 = "address-level2"),
          (e.addressLevel1 = "address-level1"),
          (e.country = "country"),
          (e.countryName = "country-name"),
          (e.postalCode = "postal-code"),
          (e.ccName = "cc-name"),
          (e.ccGivenName = "cc-given-name"),
          (e.ccAdditionalName = "cc-additional-name"),
          (e.ccFamilyName = "cc-family-name"),
          (e.ccNumber = "cc-number"),
          (e.ccExp = "cc-exp"),
          (e.ccExpMonth = "cc-exp-month"),
          (e.ccExpYear = "cc-exp-year"),
          (e.ccCsc = "cc-csc"),
          (e.ccType = "cc-type"),
          (e.transactionCurrency = "transaction-currency"),
          (e.transactionAmount = "transaction-amount"),
          (e.language = "language"),
          (e.bday = "bday"),
          (e.bdayDay = "bday-day"),
          (e.bdayMonth = "bday-month"),
          (e.bdayYear = "bday-year"),
          (e.sex = "sex"),
          (e.url = "url"),
          (e.photo = "photo"),
          (e.tel = "tel"),
          (e.telCountryCode = "tel-country-code"),
          (e.telNational = "tel-national"),
          (e.telAreaCode = "tel-area-code"),
          (e.telLocal = "tel-local"),
          (e.telLocalPrefix = "tel-local-prefix"),
          (e.telLocalSuffix = "tel-local-suffix"),
          (e.telExtension = "tel-extension"),
          (e.email = "email"),
          (e.impp = "impp"),
          e
        );
      })({}),
      Zo = (function (e) {
        return (
          (e[(e.Off = 0)] = "Off"),
          (e[(e.Automatic = 1)] = "Automatic"),
          (e[(e.Normal = 2)] = "Normal"),
          (e[(e.Contact = 3)] = "Contact"),
          e
        );
      })({}),
      Jo =
        (a((Xo = {}), Qo.on, { maxTokens: 1, category: Zo.Automatic }),
        a(Xo, Qo.off, { maxTokens: 1, category: Zo.Off }),
        a(Xo, Qo.name, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.honorificPrefix, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.givenName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.additionalName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.familyName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.honorificSuffix, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.nickname, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.username, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.newPassword, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.oneTimeCode, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.currentPassword, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.organizationTitle, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.organization, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.streetAddress, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLine1, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLine2, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLine3, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLevel4, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLevel3, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLevel2, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.addressLevel1, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.country, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.countryName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.postalCode, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccGivenName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccAdditionalName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccFamilyName, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccNumber, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccExp, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccExpMonth, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccExpYear, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccCsc, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.ccType, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.transactionCurrency, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.transactionAmount, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.language, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.bday, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.bdayDay, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.bdayMonth, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.bdayYear, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.sex, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.url, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.photo, { maxTokens: 3, category: Zo.Normal }),
        a(Xo, Qo.tel, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telCountryCode, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telNational, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telAreaCode, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telLocal, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telLocalPrefix, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telLocalSuffix, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.telExtension, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.email, { maxTokens: 4, category: Zo.Contact }),
        a(Xo, Qo.impp, { maxTokens: 4, category: Zo.Contact }),
        Xo),
      ei = (function (e) {
        return (e.home = "home"), (e.work = "work"), (e.mobile = "mobile"), (e.fax = "fax"), (e.pager = "pager"), e;
      })({}),
      ti = (function (e) {
        return (e.shipping = "shipping"), (e.billing = "billing"), e;
      })({});
    function ni(e, t) {
      return Object.keys(e).some(function (e) {
        return e === t;
      });
    }
    var ri,
      oi = function () {
        return { type: Qo.on, hintSet: [], scope: [], idlExposedValue: "" };
      };
    function ii(e, t) {
      var n = e[t],
        r = Jo[n].category;
      if (r === Zo.Off) return { type: Qo.off, hintSet: [], scope: [], idlExposedValue: "off" };
      if (r === Zo.Automatic) return { type: Qo.on, hintSet: [], scope: [], idlExposedValue: "on" };
      var o = { type: n, hintSet: [], scope: [], idlExposedValue: n };
      return (
        e.length > 1 &&
          ((o = (function (e, t, n, r) {
            if (t === Zo.Contact && ni(ei, n[r])) {
              var o = n[r];
              e.scope.unshift(o), e.hintSet.push(o), (e.idlExposedValue = "".concat(o, " ").concat(e.idlExposedValue));
            }
            return e;
          })(o, r, e, --t)),
          0 !== t && t--,
          (o = (function (e, t, n) {
            if (ni(ti, t[n])) {
              var r = t[n];
              e.scope.unshift(r), e.hintSet.push(r), (e.idlExposedValue = "".concat(r, " ").concat(e.idlExposedValue));
            }
            return e;
          })(o, e, t)),
          0 !== t && t--,
          (o = (function (e, t, n) {
            if (0 === t[n].indexOf("section-")) {
              var r = t[n];
              e.scope.unshift(r), (e.idlExposedValue = "".concat(r, " ").concat(e.idlExposedValue));
            }
            return e;
          })(o, e, t))),
        o
      );
    }
    function ai(e, t) {
      if (e) {
        var n = (function (e) {
          var t = e.toLowerCase().split(" ");
          if (t.length > 0) {
            var n = t.length - 1;
            if (Jo[t[n]] && t.length <= Jo[t[n]].maxTokens) {
              var r = ii(t, n);
              if (r) return r;
            }
          }
        })(e);
        if (n) return n;
      }
      return t && t.type === Qo.off ? { type: Qo.off, hintSet: [], scope: [], idlExposedValue: "" } : oi();
    }
    var si =
      (a((ri = {}), Qo.name, dt.AddressName),
      a(ri, Qo.honorificPrefix, dt.AddressTitle),
      a(ri, Qo.givenName, dt.AddressFirstName),
      a(ri, Qo.additionalName, dt.AddressMiddleName),
      a(ri, Qo.familyName, dt.AddressLastName),
      a(ri, Qo.honorificSuffix, dt.AddressHonorificSuffix),
      a(ri, Qo.nickname, dt.AddressNickname),
      a(ri, Qo.username, dt.SiteUsername),
      a(ri, Qo.newPassword, dt.SiteNewPassword),
      a(ri, Qo.oneTimeCode, dt.SiteOneTimeCode),
      a(ri, Qo.currentPassword, dt.SitePassword),
      a(ri, Qo.streetAddress, dt.AddressStreetAddress),
      a(ri, Qo.addressLine1, dt.AddressLine1),
      a(ri, Qo.addressLine2, dt.AddressLine2),
      a(ri, Qo.addressLine3, dt.AddressLine3),
      a(ri, Qo.addressLevel4, dt.AddressLevel4),
      a(ri, Qo.addressLevel3, dt.AddressLevel3),
      a(ri, Qo.addressLevel2, dt.AddressLevel2),
      a(ri, Qo.addressLevel1, dt.AddressLevel1),
      a(ri, Qo.country, dt.AddressCountryCode),
      a(ri, Qo.countryName, dt.AddressCountryName),
      a(ri, Qo.postalCode, dt.AddressPostalCode),
      a(ri, Qo.ccName, dt.CardNameOnCard),
      a(ri, Qo.ccGivenName, dt.CardGivenName),
      a(ri, Qo.ccAdditionalName, dt.CardAdditionalName),
      a(ri, Qo.ccFamilyName, dt.CardFamilyName),
      a(ri, Qo.ccNumber, dt.CardNumber),
      a(ri, Qo.ccExp, dt.CardExpirationDate),
      a(ri, Qo.ccExpMonth, dt.CardExpirationMonth),
      a(ri, Qo.ccExpYear, dt.CardExpirationYear),
      a(ri, Qo.ccCsc, dt.CardSecurityCode),
      a(ri, Qo.ccType, dt.CardType),
      a(ri, Qo.bday, dt.AddressBirthday),
      a(ri, Qo.bdayDay, dt.AddressBirthdayDay),
      a(ri, Qo.bdayMonth, dt.AddressBirthdayMonth),
      a(ri, Qo.bdayYear, dt.AddressBirthdayYear),
      a(ri, Qo.sex, dt.AddressGender),
      a(ri, Qo.tel, dt.AddressTel),
      a(ri, Qo.telCountryCode, dt.AddressPhoneCountryCode),
      a(ri, Qo.telNational, dt.AddressPhoneNational),
      a(ri, Qo.telAreaCode, dt.AddressPhoneAreaCode),
      a(ri, Qo.telLocal, dt.AddressTelLocal),
      a(ri, Qo.telLocalPrefix, dt.AddressPhoneLocalPrefix),
      a(ri, Qo.telLocalSuffix, dt.AddressPhoneLocalSuffix),
      a(ri, Qo.telExtension, dt.AddressPhoneExtension),
      a(ri, Qo.email, dt.SiteUsername),
      ri);
    function ui(e, t) {
      (e.autocompleteIdentification = (function (e) {
        if (e.autocompleteAttr) {
          var t = ai(e.autocompleteAttr);
          return si[t.type];
        }
      })(e)),
        (e.regexIdentification = bo(e, t));
    }
    var li,
      ci = 0,
      fi = new Set();
    function di() {
      ci = 0;
    }
    function pi() {
      ++ci, clearTimeout(li), (li = setTimeout(di, 1e3));
    }
    function hi() {
      --ci,
        fi.forEach(function (e) {
          return e();
        });
    }
    function mi() {
      return vi.apply(this, arguments);
    }
    function vi() {
      return (vi = A(
        S().mark(function e() {
          var t, n;
          return S().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = 0),
                    e.abrupt(
                      "return",
                      new Promise(function (e) {
                        function r() {
                          clearTimeout(n), 0 == ci ? (++t > 5 ? (fi.delete(r), e()) : (n = setTimeout(r, 10))) : (t = 0);
                        }
                        fi.add(r),
                          r(),
                          setTimeout(function () {
                            clearTimeout(n), fi.delete(r), e();
                          }, 1e3);
                      })
                    )
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function yi(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          var n = {};
          e.fields.forEach(function (e) {
            var t = Fe(e.id);
            if (t && Rt(t)) {
              var r = t.value;
              r && (n[e.id] = { id: e.id, value: r });
            }
          }),
            (t[e.id] = n);
        }),
        t
      );
    }
    function gi(e) {
      return e.map(function (e) {
        var t = jr(e);
        return u(u({}, e), {}, { clickable: t });
      });
    }
    document.addEventListener("transitionstart", pi, !0),
      document.addEventListener("animationstart", pi, !0),
      document.addEventListener("transitionend", hi, !0),
      document.addEventListener("animationend", hi, !0),
      document.addEventListener("transitioncancel", hi, !0),
      document.addEventListener("animationcancel", hi, !0);
    var _i = function (e) {
        var t = e.pathname,
          n = Ot(),
          r = zr(),
          o = Cn(),
          i = Dt(function (e) {
            return e.multiStepLogin;
          }),
          a = Dt(function (e) {
            return e.customLoginSelectors;
          }),
          s = Dt(function (e) {
            return e.hasMatchingPassword;
          }),
          l = Dt(function (e) {
            return e.disabledVaultRecordTypes;
          }),
          c = (0, C.useRef)(new Map()),
          f = Dt(function (e) {
            return e.hasTotpRecord;
          }),
          d = Dt(function (e) {
            return e.authPushtotpData;
          }),
          p = (0, C.useRef)(),
          h = no(
            A(
              S().mark(function e() {
                var h, m, v;
                return S().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), mi();
                      case 2:
                        r &&
                          ((h = r.map(function (e) {
                            var t = c.current.get(e.id);
                            if (!t) throw new Error("Could not find identifiable element");
                            return u({}, t);
                          })),
                          (m = $o(h, a, o, t, s, l, i, f, d)),
                          (v = Jr(p.current, m)) !== p.current && (n.setSections(gi(v), yi(v), o), (p.current = v)));
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [r, o, a]
          );
        (0, C.useEffect)(
          function () {
            c.current.clear();
          },
          [o]
        ),
          (0, C.useEffect)(
            function () {
              r &&
                (r.forEach(function (e) {
                  if (!c.current.has(e.id)) {
                    var t = (function (e, t) {
                      return u({ id: e, element: t, visible: !Yr(t), label: to(t), ariaLabel: Qr(t) }, $r(t));
                    })(e.id, e.dom);
                    ui(t, o), c.current.set(e.id, t);
                  }
                }),
                h());
            },
            [r, o, h]
          );
        var m = (0, C.useCallback)(
          function (e, t) {
            var n = c.current.get(e);
            if (
              n &&
              (function (e, t) {
                return Object.keys(t).some(function (n) {
                  return e[n] !== t[n];
                });
              })(n, t)
            ) {
              Kr(n, "password") && delete t.typeAttr;
              var r = u(u({}, n), t);
              ui(r, o), c.current.set(r.id, r), h();
            }
          },
          [o, h]
        );
        return (
          (0, C.useEffect)(
            function () {
              if (r) {
                var e = setInterval(function () {
                  c.current.forEach(function (e) {
                    m(e.id, { visible: !Yr(e.element) });
                  });
                }, 1e3);
                return function () {
                  clearInterval(e);
                };
              }
            },
            [r, m]
          ),
          (0, On.jsx)(On.Fragment, {
            children:
              r &&
              r.map(function (e) {
                return (0, On.jsx)(Zr, { id: e.id, element: e.dom, updateInfo: m }, e.id);
              })
          })
        );
      },
      Ei = function () {
        var e = Ot(),
          t = Dt(function (e) {
            return e.crossDomainFillConfirmationMessage;
          });
        return (
          (0, C.useEffect)(
            function () {
              if (t) {
                var n = confirm(t);
                e.crossDomainFillConfirmResult(n);
              }
            },
            [t, e]
          ),
          null
        );
      };
    function bi(e) {
      if (e) {
        var t = Yn();
        if (0 === e.indexOf(t)) {
          var n = (function (e, t) {
            var n = e.split(":");
            return parseInt(n[t.length > 0 ? t.split(":").length : 0]);
          })(e, t);
          return (
            (r = frames[n]),
            Array.from(document.querySelectorAll("iframe")).find(function (e) {
              return e.contentWindow === r;
            })
          );
        }
      }
      var r;
    }
    var Si = function () {
        var e = bi(
            Dt(function (e) {
              var t;
              return null === (t = e.infieldIframeCalculateOffset) || void 0 === t ? void 0 : t.split("-")[0];
            })
          ),
          t = Ot();
        return (
          (0, C.useEffect)(
            function () {
              e && t.setParentFrameOffset(Hn(e), Yn());
            },
            [e, t]
          ),
          null
        );
      },
      wi = function () {
        var e = xe(),
          t = zr();
        return (
          qn(
            "change",
            (function () {
              var t = A(
                S().mark(function t(n) {
                  return S().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!n.target) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 3), kt(n.target);
                        case 3:
                          if (!t.sent) {
                            t.next = 5;
                            break;
                          }
                          e(It.browserFillDetected());
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            document,
            !0
          ),
          (0, C.useEffect)(
            function () {
              function n() {
                return (n = A(
                  S().mark(function n() {
                    var r, o, i;
                    return S().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (!t) {
                                n.next = 21;
                                break;
                              }
                              (r = $t(t)), (n.prev = 2), r.s();
                            case 4:
                              if ((o = r.n()).done) {
                                n.next = 13;
                                break;
                              }
                              return (i = o.value), (n.next = 8), kt(i.dom);
                            case 8:
                              if (!n.sent) {
                                n.next = 11;
                                break;
                              }
                              return e(It.browserFillDetected()), n.abrupt("break", 13);
                            case 11:
                              n.next = 4;
                              break;
                            case 13:
                              n.next = 18;
                              break;
                            case 15:
                              (n.prev = 15), (n.t0 = n.catch(2)), r.e(n.t0);
                            case 18:
                              return (n.prev = 18), r.f(), n.finish(18);
                            case 21:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 15, 18, 21]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                n.apply(this, arguments);
              })();
            },
            [e, t]
          ),
          null
        );
      },
      Ai = function () {
        var e = xe();
        return (
          (0, C.useEffect)(
            function () {
              if (window === top) {
                var t = matchMedia("(max-width: 420px)"),
                  n = function (t) {
                    e(Tt.setMobileScreen(t.matches));
                  };
                return (
                  t.addEventListener("change", n),
                  e(Tt.setMobileScreen(t.matches)),
                  function () {
                    t.removeEventListener("change", n);
                  }
                );
              }
            },
            [e]
          ),
          null
        );
      },
      Ti = ["checkbox", "radio"],
      xi = function () {
        var e = xe();
        return (
          qn(
            "change",
            function (t) {
              if (t.isTrusted) {
                var n = t.target,
                  r = n && (n.name || n.id),
                  o = n.type;
                n &&
                  !Ti.includes(o) &&
                  e(
                    Tt.enteredUserData({
                      name: r,
                      type: o,
                      value: n.value,
                      checked: !1,
                      formName: "",
                      url: "",
                      urid: "",
                      otherField: !1,
                      otherLogin: !1
                    })
                  );
              }
            },
            document,
            !0
          ),
          null
        );
      };
    var Ii = function (e) {
      var t = e.activeElementId,
        n = Dt(function (e) {
          return e.infieldContainer;
        }),
        r = Fe(t),
        o = function () {
          var e, t;
          n &&
            ((e = n.position.top), (t = n.height), window.scrollY + window.innerHeight < e + t) &&
            window.scrollTo({ behavior: "smooth", top: n.position.top + n.height - window.innerHeight });
        };
      return (
        qn(
          "keyup",
          function () {
            return o();
          },
          r
        ),
        qn(
          "mouseup",
          function () {
            return o();
          },
          r
        ),
        null
      );
    };
    var Ci = function () {
      var e = (function () {
          var e = Dt(function (e) {
              return e.sections;
            }),
            t = Dt(function (e) {
              return e.autofillPassword;
            }),
            n = Dt(function (e) {
              return e.numberManualFillPasswords;
            });
          if (!t && 1 === e.length) {
            var r = e[0];
            if (n[r.id] > 1 && 1 === r.fields.length && r.fields[0].type === dt.SitePassword) return r.id;
          }
        })(),
        t = xe(),
        n = (0, C.useRef)();
      return (
        (0, C.useEffect)(
          function () {
            e && n.current !== e && ((n.current = e), t(Tt.checkForUsername(e, document.body.innerText.substring(0, 1e3))));
          },
          [t, e]
        ),
        null
      );
    };
    var Ni = function () {
        var e = Ot(),
          t = Dt(function (e) {
            return e.onboardingField;
          }),
          n = Dt(function (e) {
            return e.inContextOnboarding;
          });
        return (
          Vt(function () {}),
          (0, C.useEffect)(
            function () {
              if (n && t) {
                var r = Fe(t.id);
                if (r) {
                  var o = tr(r);
                  e.openInfield(t.sectionId, o, Wn(r), Yn(), { top: 0, left: 0, width: 0, height: 0 }, sr.FieldFocus, !!n);
                }
              }
            },
            [n, t, e]
          ),
          null
        );
      },
      Oi = (function (e) {
        return (
          (e[(e.GeneratePassword = 0)] = "GeneratePassword"),
          (e[(e.FillNext = 1)] = "FillNext"),
          (e[(e.FillPrevious = 2)] = "FillPrevious"),
          (e[(e.OpenVault = 3)] = "OpenVault"),
          (e[(e.SaveAllEnteredData = 4)] = "SaveAllEnteredData"),
          (e[(e.Logout = 5)] = "Logout"),
          e
        );
      })({}),
      Pi = 4294967296;
    function Ri(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.min(Math.floor(t), Pi)),
        Math.floor(
          (function () {
            var e = new Uint32Array(1);
            return crypto.getRandomValues(e)[0] / (Pi + 1);
          })() *
            (t - e + 1) +
            e
        )
      );
    }
    var ki = (function (e) {
        return (
          (e.SET_CONFIGURATION = "[generate password] set configuration"),
          (e.SAVE_GENERATED_PASSWORD_HISTORY = "[generate password] save generated password history"),
          (e.RESET_GENERATED_PASSWORD_HISTORY = "[generated password] reset generated password history"),
          (e.TRACK = "[generated password] track segment event"),
          (e.SET_SHOW_SECURITY_TIP = "[extension toolbar] set show security tip"),
          e
        );
      })({}),
      Li = {
        setConfiguration: function (e, t) {
          return Be(ki.SET_CONFIGURATION, { configurationType: e, value: t });
        },
        saveGeneratedPasswordHistory: function (e) {
          return Be(ki.SAVE_GENERATED_PASSWORD_HISTORY, e);
        },
        resetPasswordHistory: function () {
          return Be(ki.RESET_GENERATED_PASSWORD_HISTORY);
        },
        setShowSecurityTip: function (e) {
          return Be(ki.SET_SHOW_SECURITY_TIP, { show: e });
        },
        trackEvent: function (e, t) {
          return Ue(ki.TRACK, { action: e, source: t });
        }
      };
    var Di = function (e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          i = xe(),
          a = Li,
          s = p((0, C.useState)(""), 2),
          u = s[0],
          l = s[1],
          c = Oe(function (e) {
            return Math.max(e.generatePassword.passwordLength, o);
          }),
          f = Oe(function (e) {
            return e.generatePassword.useUppercase;
          }),
          d = Oe(function (e) {
            return e.generatePassword.useLowercase;
          }),
          h = Oe(function (e) {
            return e.generatePassword.useNumbers;
          }),
          m = Oe(function (e) {
            return e.generatePassword.useSymbols;
          }),
          v = Oe(function (e) {
            return e.generatePassword.generatedPasswordHistory;
          }),
          y = Oe(function (e) {
            return e.settings.features[Mt.PASSWORD_STRENGTH_HARDENING];
          }),
          g = (0, C.useCallback)(
            function (e, t) {
              var r = n
                ? (function (e) {
                    try {
                      return new URL(e).hostname;
                    } catch (t) {
                      return "";
                    }
                  })(n)
                : "";
              i(a.saveGeneratedPasswordHistory({ hostname: r, generatedPassword: e, generatedAction: t }));
            },
            [a, i, n]
          ),
          _ = (0, C.useCallback)(
            function () {
              if (c >= o) {
                var e = (function (e) {
                  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : r ? 1 : 0,
                    a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                  e > 256 && (e = 256), i > 256 && (i = 256);
                  var s = 0,
                    u = 0,
                    l = 0;
                  (!(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7]) && (s = u = l = 1);
                  var c = [];
                  if (n && s > 0) for (var f = 0; f < s; f++) c[c.length] = "L";
                  if (t && u > 0) for (var d = 0; d < u; d++) c[c.length] = "U";
                  if (r && i > 0) for (var p = 0; p < i; p++) c[c.length] = "D";
                  if (o && l > 0) for (var h = 0; h < l; h++) c[c.length] = "S";
                  for (; c.length < e; ) c[c.length] = "A";
                  c.sort(function () {
                    return 2 * Ri(0, 1) - 1;
                  });
                  var m = "",
                    v = "abcdefghjkmnpqrstuvwxyz";
                  a || (v += "ilo"), n && (m += v);
                  var y = "ABCDEFGHJKMNPQRSTUVWXYZ";
                  a || (y += "ILO"), t && (m += y);
                  var g = "23456789";
                  a || (g += "10"), r && (m += g);
                  var _ = "!@#$%^&*";
                  o && (m += _);
                  for (var E = "", b = 0; b < e; b++) {
                    var S = void 0;
                    switch (c[b]) {
                      case "L":
                        S = v;
                        break;
                      case "U":
                        S = y;
                        break;
                      case "D":
                        S = g;
                        break;
                      case "S":
                        S = _;
                        break;
                      case "A":
                        S = m;
                    }
                    var w = Ri(0, S.length - 1);
                    E += S.charAt(w);
                  }
                  return E;
                })(c, f, d, h, m);
                return l(e), e;
              }
              return u;
            },
            [c, f, d, h, m, l]
          );
        (0, C.useEffect)(
          function () {
            _();
          },
          [_]
        );
        var E = (0, C.useCallback)(
          (function () {
            var t = A(
              S().mark(function t(n) {
                return S().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        i(Nt(n)), i(Li.trackEvent("Copy", e));
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          [e, i]
        );
        return {
          generatedPassword: u,
          passwordLength: c,
          useUppercase: f,
          useLowercase: d,
          useNumbers: h,
          useSymbols: m,
          copyGeneratedPasswordToClipboard: E,
          refreshGeneratedPassword: _,
          passwordHistory: v,
          saveGeneratedPasswordToHistory: g,
          fillGeneratedPassword: function () {
            t && (i(Tt.fillGeneratedPassword(t, u, e, r)), i(Li.trackEvent("Fill", e)));
          },
          passwordStrengthHardeningEnabled: y
        };
      },
      Mi = (function (e) {
        return (e.COPIED = "COPIED"), (e.FILLED = "FILLED"), e;
      })({}),
      Fi = function () {
        var e = xe(),
          t = Dt(function (e) {
            return e.settings.extensionPreferences;
          }),
          n = Dt(function (e) {
            return e.topPage;
          }),
          r = Dt(function (e) {
            return e.topPageUnproxiedUrl;
          }),
          o = Dt(function (e) {
            return e.minimumTabPasswordLength;
          }),
          i = Di("Hotkey", n, r, void 0, o),
          a = i.generatedPassword,
          s = i.refreshGeneratedPassword,
          u = i.saveGeneratedPasswordToHistory,
          l = i.copyGeneratedPasswordToClipboard,
          c = [
            { action: Oi.GeneratePassword, keyCode: t.generateHkKeyCode, modifiers: t.generateHkMods.split(" ") },
            { action: Oi.FillNext, keyCode: t.nextHkKeyCode, modifiers: t.nextHkMods.split(" ") },
            { action: Oi.FillPrevious, keyCode: t.prevHkKeyCode, modifiers: t.prevHkMods.split(" ") },
            { action: Oi.OpenVault, keyCode: t.homeHkKeyCode, modifiers: t.homeHkMods.split(" ") },
            { action: Oi.SaveAllEnteredData, keyCode: t.saveallHkKeyCode, modifiers: t.saveallHkMods.split(" ") },
            { action: Oi.Logout, keyCode: t.logoffHkKeyCode, modifiers: t.logoffHkMods.split(" ") }
          ];
        return (
          qn("keydown", function (t) {
            if (!1 !== t.isTrusted) {
              var n = 0 != t.keyCode ? t.keyCode : t.charCode;
              if (!(n < 32)) {
                var r = [];
                if (
                  (t.ctrlKey && r.push("control"),
                  t.metaKey && r.push("meta"),
                  t.altKey && r.push("alt"),
                  t.shiftKey && r.push("shift"),
                  0 !== r.length)
                ) {
                  var o = c.find(function (e) {
                    return (
                      e.keyCode === n &&
                      e.modifiers.every(function (e) {
                        return r.includes(e);
                      })
                    );
                  });
                  o &&
                    (t.preventDefault(),
                    o.action === Oi.GeneratePassword
                      ? (l(a), u(a, Mi.COPIED), s())
                      : o.action === Oi.Logout
                      ? e(Tt.initiateLogout())
                      : e(Tt.hotkeyAction(o.action)));
                }
              }
            }
          }),
          null
        );
      };
    var Bi = function (e) {
      var t = e.pageUrl,
        n = xe(),
        r = new URL(t),
        o = r.hostname,
        i = r.pathname,
        a = (function (e) {
          if ("string" === typeof e) {
            var t = parseInt(e);
            return isNaN(t) ? 0 : t;
          }
          return "number" === typeof e ? e : 0;
        })(r.searchParams.get("created")),
        s = new URL("https://lastpass.com/").hostname,
        u = o.replace("www.", "");
      return (
        (0, C.useEffect)(
          function () {
            s === u && "/create-account/success" === i && a && n(dr());
          },
          [n, s, u, i, a]
        ),
        null
      );
    };
    function Ui(e, t) {
      var n = new URL(t);
      return n.origin === e && n.searchParams.has("ac");
    }
    var ji = "/vault/vault.html",
      Gi = (function (e) {
        return (
          (e.LEGACY_LOGIN = "[user] legacy login"),
          (e.LOGIN = "[user] login"),
          (e.CHANGE_USERT_TYPE = "[user] change user type"),
          (e.EXTENSION_PREFERENCES_MIGRATED = "[user] extension preferences migrated"),
          (e.SET_SHOW_ICON_IN_VAULT = "[user] set show icon in vault flag"),
          (e.SET_USER_STATE = "[user] set user state"),
          (e.UPDATE_ACCOUNTS_VERSION = "[user] update accounts version"),
          (e.SET_LOCKED = "[user] set locked"),
          (e.UPDATE_LOGIN_CHECK = "[user] update login check"),
          (e.UPDATE_POLL_SERVER_CHECK = "[user] update poll server check"),
          (e.CALL_POLL_SERVER = "[user] call poll server"),
          (e.SET_VALID_SESSION = "[user] set valid session"),
          (e.SET_DEBUG_MODE = "[user] set debug mode"),
          (e.SET_DISABLE_PASSWORD_ALERTS = "[user] set disable password alerts"),
          (e.ENFORCE_MP_RESET = "[user] enforce MP reset"),
          e
        );
      })({}),
      Vi = function (e) {
        return Be(Gi.LOGIN, { user: e });
      };
    function Hi(e, t) {
      var n = (0, C.useCallback)(
        function (t) {
          return window.postMessage(t, e);
        },
        [e]
      );
      return (
        qn(
          "message",
          (function () {
            var r = A(
              S().mark(function r(o) {
                var i;
                return S().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (o.origin !== e || !o.data) {
                          r.next = 5;
                          break;
                        }
                        return (r.next = 3), t(o.data);
                      case 3:
                        (i = r.sent) && n(i);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })()
        ),
        n
      );
    }
    var Wi = (function (e) {
        return (
          (e.INITIALIZE = "[secondary onboarding] initialize"),
          (e.CLAIM_REWARD = "[secondary onboarding] claim reward"),
          (e.TOGGLE = "[secondary onboarding] toggle"),
          (e.SHOW_EXPANDED_SKILL = "[secondary onboarding] show expanded skill"),
          (e.TOGGLE_SKILL_VISIBILITY = "[secondary onboarding] toggle skill visibility"),
          (e.TOGGLE_SHOW_ALL_SKILLS = "[secondary onboarding] toggle show all skills"),
          (e.OPEN_SHOW_ALL_SKILLS = "[secondary onboarding] open show all skills"),
          (e.CLOSE_SHOW_ALL_SKILLS = "[secondary onboarding] close show all skills"),
          (e.SHOW_SKILL_DETAILS_DIALOG = "[secondary onboarding] show skill details dialog"),
          (e.HIDE_EXPANDED_SKILL = "[secondary onboarding] hide expanded skill"),
          (e.HIDE_SKILL_DETAILS_DIALOG = "[secondary onboarding] hide skill details dialog"),
          (e.MARK_AS_COMPLETED = "[secondary onboarding] mark skill as completed in state"),
          (e.CHECK_STAY_CONNECTED_SKILL = "[secondary onboarding] check stay connected skill completion (API)"),
          (e.COMPLETE = "[secondary onboarding] complete skill (API)"),
          (e.SEEN = "[secondary onboarding] seen skill (API)"),
          (e.DRAWER_VISIBLE = "[secondary onboarding] drawer visible"),
          (e.TRIGGER_REWARD_DIALOG = "[secondary onboarding] trigger reward dialog"),
          (e.CLOSE_REWARD_DIALOG = "[secondary onboarding] close reward dialog"),
          (e.TRY_FAMILIES = "[secondary onboarding] family trial"),
          (e.SHOW_HOW_TO_DIALOG = "[secondary onboarding] show how to dialog"),
          (e.CLOSE_HOW_TO_DIALOG = "[secondary onboarding] close how to dialog"),
          (e.OPEN_CREATE_FOLDER_DIALOG = "[secondary onboarding] open create folder dialog"),
          (e.OPEN_ADD_PAYMENT_DIALOG = "[secondary onboarding] open add payment dialog"),
          (e.OPEN_PAYMENT_CARD_VIEW = "[secondary onboarding] open payment card view"),
          (e.OPEN_VAULT_TOUR = "[secondary onboarding] open vault tour"),
          (e.OPEN_IMPORT_PASSWORDS = "[secondary onboarding] open import passwords"),
          (e.OPEN_SETUP_EMERGENCY_ACCESS_DIALOG = "[secondary onboarding] open set up emergency access dialog"),
          (e.OPEN_CREATE_NOTES_DIALOG = "[secondary onboarding] open create note dialog"),
          (e.OPEN_CREATE_ADDRESS_DIALOG = "[secondary onboarding] open create address dialog"),
          (e.OPEN_ADDRESS_VIEW = "[secondary onboarding] open address view"),
          (e.OPEN_SECURITY_DASHBOARD = "[secondary onboarding] open security dashboard"),
          (e.REQUEST_IN_PROGRESS = "[secondary onboarding] HTTP Request in progress"),
          (e.SET_SKILL_ERROR = "[secondary onboarding] HTTP Request error setter"),
          (e.OPEN_ICOB = "[secondary onboarding] open in-context on-boarding"),
          (e.SEND_IN_CONTEXT_ONBOARDING_MESSAGE = "[secondary onboarding] send in context onboarding message"),
          (e.OPEN_ADD_ITEM_DIALOG = "[secondary onboarding] open open add item dialog"),
          (e.OPEN_ALL_ITEMS_VIEW = "[secondary onboarding] open all items menu view"),
          (e.SET_SECONDARY_ONBOARDING_VISIBLE = "[secondary onboarding] set enabled / disabled Secondary Onboarding"),
          (e.MINIMIZE_SECONDARY_ONBOARDING = "[secondary onboarding] minimize Secondary Onboarding"),
          (e.SET_SECONDARY_ONBOARDING_HIDE_NOTIFICATION = "[secondary onboarding] set hide notification for Secondary Onboarding"),
          (e.SET_REWARD_CLAIMED_VIEW = "[secondary onboarding] open reward claimed view"),
          (e.POLL_REWARD_CLAIMED = "[secondary onboarding] polling reward claimed"),
          (e.REFRESH_EXTENSION_VAULT = "[secondary onboarding] refresh extension vault"),
          (e.OPEN_SKILL_FROM_URL = "[secondary onboarding] open skill from url"),
          (e.SET_EXTENSION_INSTALLED_ON_SIGNUP = "[secondary onboarding] set extension installed on signup"),
          (e.SET_AVAILABLE_SKILLS = "[secondary onboarding] set available skills"),
          e
        );
      })({}),
      zi = function (e) {
        return Be(Wi.OPEN_ICOB, { site: e });
      },
      Yi = (function (e) {
        return (
          (e.LANGUAGE = "[settings] language"),
          (e.FEATURES = "[settings] features"),
          (e.RESTRICTED = "[settings] restricted"),
          (e.SET_EXTENSION_PREFERENCES = "[settings] set extension preferences"),
          (e.PRIMARY_DEVICE_SWITCH = "[settings] switch primary device"),
          (e.SET_MULTI_DEVICE_PAYWALL_DISMISSED = "[settings] switch multi device paywall dismiss"),
          (e.PRIMARY_DEVICE_CHANGE_SUCCEEDED = "[settings] primary device change completed"),
          (e.PRIMARY_DEVICE_CHANGE_LOADING = "[settings] primary device change loading"),
          (e.PRIMARY_DEVICE_CHANGE_SET_DEVICE_SWITCH_LEFT = "[setings] primary device change set device switch left"),
          (e.SEND_TRACKING = "[settings] send tracking"),
          (e.TRACK_MULTI_DEVICE_PAYWALL = "[settings] track multi device paywall"),
          (e.SET_RETRIAL_MESSAGE_VISIBILITY = "[settings] set re-trial message visibility"),
          (e.PREMIUM_TRIAL_EXPIRATION_DAYS = "[settings] set premium trial expiration days left"),
          (e.SET_FAMILY_EXPIRED_FLOW = "[settings] set family expired flow type"),
          (e.SET_EXPIRED_FAMILIES_PURCHASE_FLOW = "[settings] set family expired flow feature switch"),
          (e.SET_SHOULD_MIGRATE_SHARED_FOLDERS = "[settings] set should migrate shared folder"),
          (e.SET_ALERT_MESSAGE_TEXT = "[settings] set alert message text"),
          (e.SET_SUCCESS_MESSAGE_TEXT = "[settings] set success message text"),
          (e.SET_SETTINGS_STATE = "[settings] set settings state"),
          (e.SET_NEW_SAVE_FILL_EXPERIENCE = "[settings] set new save and fill experience"),
          (e.UPDATE_SETTINGS = "[settings] update settings"),
          e
        );
      })({}),
      qi = function (e) {
        return Be(Yi.SET_EXTENSION_PREFERENCES, { extensionPreferences: e });
      },
      Ki = function (e) {
        var t = e.user,
          n = e.sendVaultMessage,
          r = Dt(function (e) {
            return e.vaultVersion;
          });
        return (
          Vt(function () {
            return (
              n({ type: $i.LOGIN, payload: t }),
              function () {
                n({ type: $i.LOGOUT });
              }
            );
          }),
          (0, C.useEffect)(
            function () {
              n({ type: $i.VAULT_VERSION, payload: { version: r } });
            },
            [r]
          ),
          null
        );
      },
      $i = (function (e) {
        return (
          (e.LOGIN = "[web-ext-api] login"),
          (e.LOGOUT = "[web-ext-api] logout"),
          (e.VAULT_VERSION = "[web-ext-api] vault version"),
          (e.INITIALIZED = "[web-ext-api] initialized"),
          (e.LAUNCH = "[web-ext-api] launch"),
          (e.OPEN_ICOB = "[web-ext-api] onboarding"),
          (e.IDENTITY = "[web-ext-api] identity"),
          e
        );
      })({}),
      Xi = function () {
        var e = Dt(function (e) {
            return e.user;
          }),
          t = p((0, C.useState)(!1), 2),
          n = t[0],
          r = t[1],
          o = xe(),
          i = Hi(
            location.origin,
            (function () {
              var e = A(
                S().mark(function e(t) {
                  return S().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("extension" === t.origin) {
                            e.next = 17;
                            break;
                          }
                          (e.t0 = t.type),
                            (e.next =
                              e.t0 === $i.LOGIN
                                ? 4
                                : e.t0 === $i.LOGOUT
                                ? 6
                                : e.t0 === $i.VAULT_VERSION
                                ? 8
                                : e.t0 === $i.LAUNCH
                                ? 10
                                : e.t0 === $i.INITIALIZED
                                ? 12
                                : e.t0 === $i.OPEN_ICOB
                                ? 14
                                : e.t0 === $i.IDENTITY
                                ? 16
                                : 17);
                          break;
                        case 4:
                          return o(Vi(t.payload)), e.abrupt("break", 17);
                        case 6:
                          return o(Tt.initiateLogout()), e.abrupt("break", 17);
                        case 8:
                          return o(Tt.pollVaultVersion()), e.abrupt("break", 17);
                        case 10:
                          return (
                            t.payload.record
                              ? o(Tt.offlineLaunch(t.payload.record, t.payload.version))
                              : o(Tt.vaultStateSyncLaunch(t.payload.id)),
                            e.abrupt("break", 17)
                          );
                        case 12:
                          return n || (r(!0), a({ type: $i.INITIALIZED })), e.abrupt("break", 17);
                        case 14:
                          return o(zi(t.payload.site)), e.abrupt("break", 17);
                        case 16:
                          o(qi({ identity: t.payload.id }));
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          ),
          a = function (e) {
            i(u(u({}, e), {}, { origin: "extension" }));
          };
        return (
          (0, C.useEffect)(function () {
            a({ type: $i.INITIALIZED });
          }, []),
          e && n ? (0, On.jsx)(Ki, { user: e, sendVaultMessage: a }) : null
        );
      };
    function Qi(e) {
      return "undefined" !== typeof chrome
        ? new Promise(function (t, n) {
            chrome.runtime.sendMessage(e, function (e) {
              t(e);
            });
          })
        : browser.runtime.sendMessage(e);
    }
    var Zi = (function (e) {
        return (
          (e.INITIALIZE = "initialize"),
          (e.INITIALIZATION = "initialization"),
          (e.BACKGROUND_REQUEST = "backgroundRequest"),
          (e.BACKGROUND_RESPONSE = "backgroundResponse"),
          (e.FEDERATED_MESSAGE = "federatedMessage"),
          e
        );
      })({}),
      Ji = function (e) {
        var t = e.origin,
          n = Dt(function (e) {
            return e.baseUrl;
          }),
          r = xe(),
          o = Dt(function (e) {
            return e.webauthnData;
          }),
          i = Dt(function (e) {
            return e.isFederated;
          }),
          a = Hi(
            t || n,
            (function () {
              var e = A(
                S().mark(function e(t) {
                  var n, r, o, a;
                  return S().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (e.t0 = t.type), (e.next = e.t0 === Zi.INITIALIZE ? 3 : e.t0 === Zi.BACKGROUND_REQUEST ? 4 : 20);
                          break;
                        case 3:
                          return e.abrupt("return", {
                            data: {
                              frameID: 1,
                              request: {
                                childFrameCount: t.data.childFrameCount,
                                initializationID: t.data.initializationID,
                                url: t.data.url
                              },
                              tabID: 2090005804,
                              topFrameID: 14
                            },
                            frameID: 1,
                            fromExtension: !0,
                            type: Zi.INITIALIZATION
                          });
                        case 4:
                          if ("FederatedLogin" !== t.data.cmd[0]) {
                            e.next = 20;
                            break;
                          }
                          (n = t.data.cmd[1]), (e.t1 = n), (e.next = "getPassword" === e.t1 ? 9 : "isFederated" === e.t1 ? 19 : 20);
                          break;
                        case 9:
                          return (e.next = 11), Qi({ username: t.data.args[0], type: Zi.FEDERATED_MESSAGE });
                        case 11:
                          if (((r = e.sent), (o = r.success), (a = r.error), !o)) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return", {
                            data: {
                              args: [
                                o.federatedPassword,
                                o.federatedLoginDetails.authSessionId,
                                o.federatedLoginDetails.fragmentIdFromAlp,
                                o.federatedLoginDetails.calculatedFragmentId
                              ],
                              responseRequestID: t.data.requestID,
                              callbackPath: ["1"]
                            },
                            frameID: 1,
                            type: Zi.BACKGROUND_RESPONSE,
                            fromExtension: !0
                          });
                        case 18:
                          return e.abrupt("return", {
                            data: { args: [a], responseRequestID: t.data.requestID, callbackPath: ["2"] },
                            frameID: 1,
                            type: Zi.BACKGROUND_RESPONSE,
                            fromExtension: !0
                          });
                        case 19:
                          return e.abrupt("return", {
                            data: { args: [i], responseRequestID: t.data.requestID, callbackPath: ["1"] },
                            frameID: 1,
                            type: Zi.BACKGROUND_RESPONSE,
                            fromExtension: !0
                          });
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          );
        return (
          (0, C.useEffect)(
            function () {
              o &&
                (Pt(1e3).then(function () {
                  a(o);
                }),
                r(cr(void 0)));
            },
            [a, o, r]
          ),
          qn("submit", function (e) {
            var t = e.target;
            if (t && t === document.getElementById("lpwebsiteeventform") && "login" === t.eventtype.value) {
              var n = t.eventdata1.value,
                o = t.eventdata2.value,
                i = t.eventdata5.value;
              r(Vi({ key: o, username: n, session: i, iterations: 0 }));
            }
          }),
          null
        );
      };
    var ea = "https://backoffice.lastpass.com",
      ta = function () {
        var e = Dt(function (e) {
            return e.baseUrl;
          }),
          t = Dt(function (e) {
            return e.settings.features[Mt.VAULT_SINGLE_PAGE_APPLICATION];
          }),
          n = Dt(function (e) {
            return e.isLoggedIn;
          }),
          r = Dt(function (e) {
            return e.isFederated;
          });
        if (
          (function (e, t) {
            var n = new URL(t);
            return n.origin === e && "/acctsiframe.php" === n.pathname;
          })(e, location.href) &&
          r
        )
          return (0, On.jsx)(Ji, {});
        if (Ui(ea, location.href)) return (0, On.jsx)(Ji, { origin: ea });
        if (Ui(e, location.href)) {
          if (!n) return (0, On.jsx)(Ji, {});
          t && (location.href = "".concat(e).concat(ji));
        }
        return (function (e, t) {
          var n = new URL(t);
          return n.origin === e && n.pathname === ji;
        })(e, location.href)
          ? (0, On.jsxs)(On.Fragment, { children: [(0, On.jsx)(Xi, {}), r && (0, On.jsx)(Ji, {})] })
          : null;
      },
      na = function (e) {
        var t = e.pathname,
          n = void 0 === t ? location.pathname : t,
          r = e.href,
          o = void 0 === r ? location.href : r,
          i = Ot(),
          a = (function (e, t) {
            var n = new URL(e),
              r = n.origin,
              o = n.pathname,
              i = n.hash;
            return r === new URL("https://lastpass.com/").origin && o === t && i ? i.substring(1) : null;
          })(o, "/extension-api/launch");
        a && i.externalLaunch(a);
        var s = Dt(function (e) {
            return e.isInfieldOpen;
          }),
          u = Dt(function (e) {
            return e.infieldContainer && e.infieldContainer.state && e.infieldContainer.state.elementId;
          }),
          l = Dt(function (e) {
            return e.hasUserInteraction;
          }),
          c = function (e) {
            e.isTrusted && !l && i.userInteracted();
          },
          f = Dt(function (e) {
            return e.shouldDetectBrowserFill;
          }),
          d = Dt(function (e) {
            return e.settings.features[Mt.WEB_CLIENT_SAVE];
          }),
          p = Dt(function (e) {
            return e.isRedirectedRegistrationFromExt;
          }),
          h = Dt(function (e) {
            return e.settings.features[Mt.ENABLE_MV3_BACKGROUND];
          }),
          m = Dt(function (e) {
            return e.baseUrl;
          }),
          v = location.href.startsWith(m);
        return (
          qn(
            "click",
            function (e) {
              c(e);
            },
            document,
            !0
          ),
          qn("keydown", c, document, !0),
          qn(
            "scroll",
            function (e) {
              e.isTrusted && window.top != window.self && s && i.hideInfield();
            },
            window.self
          ),
          (0, On.jsxs)(On.Fragment, {
            children: [
              (0, On.jsx)(Ai, {}),
              (0, On.jsx)(Fi, {}),
              (0, On.jsx)(Si, {}),
              !v && (0, On.jsx)(_i, { pathname: n }),
              (0, On.jsx)(Ur, {}),
              (0, On.jsx)(xi, {}),
              (0, On.jsx)(Gr, {}),
              (0, On.jsx)(Ei, {}),
              (0, On.jsx)(Ci, {}),
              f && (0, On.jsx)(wi, {}),
              d && u ? (0, On.jsx)(Ii, { activeElementId: u }) : null,
              (0, On.jsx)(Ni, { href: o }),
              h ? (0, On.jsx)(ta, {}) : null,
              p && (0, On.jsx)(Bi, { pageUrl: o })
            ]
          })
        );
      };
    var ra = function (e) {
        return Oe(function (t) {
          var n;
          if (null === (n = t.tabPrompt) || void 0 === n || !n.savePrompt) throw new Error("TabPromptState required");
          return e(t.tabPrompt.savePrompt);
        });
      },
      oa = n(754).lW;
    function ia(e) {
      return aa.apply(this, arguments);
    }
    function aa() {
      return (
        (aa = A(
          S().mark(function e(t) {
            var n, r;
            return S().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        ((n = document.createElement("canvas")).height = t.clientHeight),
                        (n.width = t.clientWidth),
                        (r = n.getContext("2d")) && r.drawImage(t, 0, 0),
                        e.abrupt(
                          "return",
                          new Promise(function (e) {
                            try {
                              n.toBlob(
                                (function () {
                                  var t = A(
                                    S().mark(function t(n) {
                                      var r;
                                      return S().wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (!n) {
                                                t.next = 5;
                                                break;
                                              }
                                              return (t.next = 3), n.arrayBuffer();
                                            case 3:
                                              (r = t.sent), e(new oa(r).toString("base64"));
                                            case 5:
                                              e("");
                                            case 6:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              );
                            } catch (t) {
                              e("");
                            }
                          })
                        )
                      );
                    case 9:
                      return (e.prev = 9), (e.t0 = e.catch(0)), e.abrupt("return", "");
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]]
            );
          })
        )),
        aa.apply(this, arguments)
      );
    }
    function sa(e) {
      return new Promise(function (t, n) {
        var r = document.createElement("img");
        r.addEventListener(
          "load",
          A(
            S().mark(function e() {
              var o;
              return S().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), ia(r);
                    case 2:
                      (o = e.sent), document.body.removeChild(r), o ? t(o) : n();
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
          r.addEventListener("error", function () {
            document.body.removeChild(r), n();
          }),
          (r.src = e),
          (r.style.visibility = "hidden"),
          document.body.appendChild(r);
      });
    }
    function ua(e) {
      try {
        var t = new URL(e.loginUrl);
        if (t.origin !== document.location.origin) return document.location.origin + "/" + t.origin;
      } catch (n) {}
      return document.location.origin;
    }
    var la = (function () {
        var e = A(
          S().mark(function e(t) {
            var n, r, o, i, a, s, u, l, c, f, d, p, h, m;
            return S().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (n = [], r = document.querySelectorAll('meta[property="og:image"]'), o = 0; o < r.length; o++)
                        (i = r[o].getAttribute("content") || ""), n.push(i);
                      for (a = document.querySelectorAll('link[rel*="icon"]'), s = [], u = 0; u < a.length; ++u)
                        (l = a[u].getAttribute("href")) &&
                          "svg" !== l.substring(l.length - 3) &&
                          ((c = a[u].getAttribute("sizes") || void 0), s.push({ href: l, size: c }));
                      (f = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" })),
                        (n = n.concat(
                          s
                            .sort(function (e, t) {
                              return f.compare(e.size || "", t.size || "");
                            })
                            .reverse()
                            .map(function (e) {
                              return e.href;
                            })
                        )).push(ua(t) + "/favicon.ico"),
                        (d = $t(n)),
                        (e.prev = 10),
                        d.s();
                    case 12:
                      if ((p = d.n()).done) {
                        e.next = 26;
                        break;
                      }
                      return (h = p.value), (e.prev = 14), (e.next = 17), sa(h);
                    case 17:
                      if (!(m = e.sent)) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return", m);
                    case 20:
                      e.next = 24;
                      break;
                    case 22:
                      (e.prev = 22), (e.t0 = e.catch(14));
                    case 24:
                      e.next = 12;
                      break;
                    case 26:
                      e.next = 31;
                      break;
                    case 28:
                      (e.prev = 28), (e.t1 = e.catch(10)), d.e(e.t1);
                    case 31:
                      return (e.prev = 31), d.f(), e.finish(31);
                    case 34:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [10, 28, 31, 34],
                [14, 22]
              ]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      ca = function () {
        var e = ra(function (e) {
            return e.iconData;
          }),
          t = ra(function (e) {
            return e.entities;
          }),
          n = (function () {
            var e = xe();
            return (0, C.useMemo)(
              function () {
                return ce(It, e);
              },
              [e]
            );
          })();
        return (
          (0, C.useEffect)(
            function () {
              var r = t.find(function (e) {
                return e.item.recordType === ct.Password;
              });
              r &&
                !e &&
                la(r.item).then(function (e) {
                  n.setIconData(e);
                });
            },
            [e, n, t]
          ),
          null
        );
      },
      fa = {
        getUrl: function (e) {
          return e;
        }
      },
      da = C.createContext(fa),
      pa = da.Provider,
      ha = function () {
        return (0, C.useContext)(da);
      },
      ma = function (e) {
        var t = e.children;
        return Ar(document.body, mr), N.createPortal(t, mr);
      };
    var va = (function (e) {
        return (
          (e[(e.Loading = 0)] = "Loading"),
          (e[(e.AlreadyLoggedIn = 1)] = "AlreadyLoggedIn"),
          (e[(e.SiteLanding = 2)] = "SiteLanding"),
          (e[(e.SaveSite = 3)] = "SaveSite"),
          (e[(e.Finished = 4)] = "Finished"),
          e
        );
      })({}),
      ya = { position: "fixed", width: "100%", height: "100%", zIndex: 999, backdropFilter: "blur(4px)" },
      ga = function () {
        var e = ha(),
          t = Dt(function (e) {
            return e.tabPrompt;
          }),
          n = Dt(function (e) {
            return e.mobileScreen;
          }),
          r = (function () {
            var e = p((0, C.useState)("undefined" !== typeof visualViewport ? visualViewport.height : "100%"), 2),
              t = e[0],
              n = e[1];
            return (
              qn(
                "resize",
                function () {
                  "undefined" !== typeof visualViewport && n(visualViewport.height);
                },
                "undefined" !== typeof visualViewport ? visualViewport : void 0
              ),
              t
            );
          })(),
          o = Dt(function (e) {
            return e.onboardingStep;
          }),
          i = Dt(function (e) {
            return e.inContextOnboarding;
          }),
          a = i && i.show && (o === va.SaveSite || o === va.Finished),
          s = (0, C.useMemo)(
            function () {
              return n ? { height: r } : t ? { maxHeight: t.fullHeight ? "none" : t.height, maxWidth: t.width } : {};
            },
            [t, n, r]
          );
        return t && t.savePrompt
          ? (0, On.jsxs)(ma, {
              children: [
                (0, On.jsx)(ca, {}),
                a && (0, On.jsx)("div", { style: ya }),
                (0, On.jsx)("div", {
                  "data-lastpass-save": !0,
                  children: (0, On.jsx)(Sr.Z, {
                    children: (0, On.jsx)("iframe", {
                      "data-lastpass-iframe": !0,
                      src: e.getUrl("webclient-tab-prompt.html"),
                      style: u(
                        { position: "fixed", top: 0, right: 0, zIndex: 2147483647, border: "none", height: "100vh", width: "100vw" },
                        s
                      )
                    })
                  })
                })
              ]
            })
          : null;
      };
    function _a(e) {
      var t = e.children,
        n = e.disableOnDisconnect,
        r = void 0 === n || n,
        o = Dt(function (e) {
          return e.neverUrls[Gn.NeverDoAnything];
        }),
        i = Dt(function (e) {
          return e.settings.isRestricted;
        }),
        a = Dt(function (e) {
          return !e.messaging.connected;
        }),
        s = Dt(function (e) {
          return e.settings.features[Mt.WEB_CLIENT_FILL];
        }),
        u = Dt(function (e) {
          return e.settings.features[Mt.WEB_CLIENT_SAVE];
        }),
        l = Dt(function (e) {
          return e.exportComplianceSanctioned;
        });
      return o || i || (r && a) || (!s && !u) || l ? null : (0, On.jsx)(On.Fragment, { children: t });
    }
    var Ea = (function (e) {
      return (e.ACTIVE = "active"), (e.PASSIVE = "passive"), (e.HIDDEN = "hidden"), (e.FROZEN = "frozen"), (e.TERMINATED = "terminated"), e;
    })({});
    function ba() {
      return "visible" !== document.visibilityState ? Ea.HIDDEN : Cr() ? Ea.ACTIVE : Ea.PASSIVE;
    }
    var Sa = ba(),
      wa = [];
    function Aa(e) {
      wa.push(e);
    }
    function Ta(e) {
      wa.splice(wa.indexOf(e), 1);
    }
    function xa(e) {
      if (e !== Sa) {
        var t = Sa;
        (Sa = e),
          wa.forEach(function (n) {
            return n(e, t);
          });
      }
    }
    function Ia(e) {
      var t = (function (e) {
        switch (e.type) {
          case "pageshow":
          case "resume":
          case "visibilitychange":
            return ba();
          case "focus":
            return Ea.ACTIVE;
          case "blur":
            if (Sa === Ea.ACTIVE) return ba();
            break;
          case "pagehide":
            return e.persisted ? Ea.FROZEN : Ea.TERMINATED;
          case "freeze":
            return Ea.FROZEN;
        }
        return Sa;
      })(e);
      Sa === Ea.FROZEN && t !== Ea.TERMINATED
        ? setTimeout(function () {
            xa(t);
          })
        : xa(t);
    }
    function Ca(e) {
      switch (e) {
        case Ea.ACTIVE:
        case Ea.PASSIVE:
          return !0;
        default:
          return !1;
      }
    }
    ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "pagehide"].forEach(function (e) {
      return window.addEventListener(e, Ia, !0);
    });
    var Na = { connected: !0 };
    var Oa,
      Pa = (function (e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var o = t[r];
          0, "function" === typeof e[o] && (n[o] = e[o]);
        }
        var i,
          a = Object.keys(n);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if ("undefined" === typeof n(void 0, { type: ae.INIT })) throw new Error(re(12));
              if ("undefined" === typeof n(void 0, { type: ae.PROBE_UNKNOWN_ACTION() })) throw new Error(re(13));
            });
          })(n);
        } catch (s) {
          i = s;
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), i)) throw i;
          for (var r = !1, o = {}, s = 0; s < a.length; s++) {
            var u = a[s],
              l = n[u],
              c = e[u],
              f = l(c, t);
            if ("undefined" === typeof f) {
              t && t.type;
              throw new Error(re(14));
            }
            (o[u] = f), (r = r || f !== c);
          }
          return (r = r || a.length !== Object.keys(e).length) ? o : e;
        };
      })({
        messaging: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Na,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === c ? u(u({}, e), {}, { connected: t.payload }) : e;
        },
        localSectionValues: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload && t.payload.sectionId;
          switch (t.type) {
            case Ft.SYNC_FIELD:
              var r = t.payload.field;
              return u(u({}, e), {}, a({}, n, u(u({}, e[n]), {}, a({}, r.id, r))));
            case Ft.REMOVE_FIELD:
              var o = e[n];
              return o ? u(u({}, e), {}, a({}, n, u(u({}, o), {}, a({}, t.payload.id, void 0)))) : e;
            case Ft.REMOVE_SECTION:
              var i = u({}, e);
              return delete i[n], i;
          }
          return e;
        }
      });
    !(function (e) {
      (e.Unknown = "unknown"),
        (e.Skipped = "skipped"),
        (e.Success = "success"),
        (e.RateLimit = "rate_limit"),
        (e.Invalid = "invalid"),
        (e.Failed = "failed");
    })(Oa || (Oa = {})),
      (function (e) {
        e.fromHttpCode = function (t) {
          return t >= 200 && t < 300
            ? e.Success
            : 429 === t
            ? e.RateLimit
            : t >= 400 && t < 500
            ? e.Invalid
            : t >= 500
            ? e.Failed
            : e.Unknown;
        };
      })(Oa || (Oa = {}));
    var Ra = function (e, t) {
      return (
        (Ra =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          }),
        Ra(e, t)
      );
    };
    function ka(e, t) {
      function n() {
        this.constructor = e;
      }
      Ra(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var La,
      Da = function () {
        return (
          (Da =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          Da.apply(this, arguments)
        );
      };
    function Ma(e) {
      var t = "function" === typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" === typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          }
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function Fa(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
      } catch (s) {
        o = { error: s };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function Ba() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Fa(arguments[t]));
      return e;
    }
    var Ua = (function () {
      function e() {
        this.name = e.id;
      }
      return (
        (e.prototype.setupOnce = function () {
          (La = Function.prototype.toString),
            (Function.prototype.toString = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              var n = this.__sentry_original__ || this;
              return La.apply(n, e);
            });
        }),
        (e.id = "FunctionToString"),
        e
      );
    })();
    var ja = function () {
      return (
        (ja =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        ja.apply(this, arguments)
      );
    };
    function Ga(e) {
      var t = "function" === typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" === typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          }
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function Va(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
      } catch (s) {
        o = { error: s };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function Ha() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Va(arguments[t]));
      return e;
    }
    var Wa = function () {
      return (
        (Wa =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        Wa.apply(this, arguments)
      );
    };
    function za(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
      } catch (s) {
        o = { error: s };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function Ya() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(za(arguments[t]));
      return e;
    }
    function qa(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return ns(e, Error);
      }
    }
    function Ka(e) {
      return "[object ErrorEvent]" === Object.prototype.toString.call(e);
    }
    function $a(e) {
      return "[object DOMError]" === Object.prototype.toString.call(e);
    }
    function Xa(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    function Qa(e) {
      return null === e || ("object" !== typeof e && "function" !== typeof e);
    }
    function Za(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function Ja(e) {
      return "undefined" !== typeof Event && ns(e, Event);
    }
    function es(e) {
      return "undefined" !== typeof Element && ns(e, Element);
    }
    function ts(e) {
      return Boolean(e && e.then && "function" === typeof e.then);
    }
    function ns(e, t) {
      try {
        return e instanceof t;
      } catch (n) {
        return !1;
      }
    }
    var rs,
      os = n(963);
    !(function (e) {
      (e.PENDING = "PENDING"), (e.RESOLVED = "RESOLVED"), (e.REJECTED = "REJECTED");
    })(rs || (rs = {}));
    var is = (function () {
        function e(e) {
          var t = this;
          (this._state = rs.PENDING),
            (this._handlers = []),
            (this._resolve = function (e) {
              t._setResult(rs.RESOLVED, e);
            }),
            (this._reject = function (e) {
              t._setResult(rs.REJECTED, e);
            }),
            (this._setResult = function (e, n) {
              t._state === rs.PENDING && (ts(n) ? n.then(t._resolve, t._reject) : ((t._state = e), (t._value = n), t._executeHandlers()));
            }),
            (this._attachHandler = function (e) {
              (t._handlers = t._handlers.concat(e)), t._executeHandlers();
            }),
            (this._executeHandlers = function () {
              if (t._state !== rs.PENDING) {
                var e = t._handlers.slice();
                (t._handlers = []),
                  e.forEach(function (e) {
                    e.done ||
                      (t._state === rs.RESOLVED && e.onfulfilled && e.onfulfilled(t._value),
                      t._state === rs.REJECTED && e.onrejected && e.onrejected(t._value),
                      (e.done = !0));
                  });
              }
            });
          try {
            e(this._resolve, this._reject);
          } catch (n) {
            this._reject(n);
          }
        }
        return (
          (e.resolve = function (t) {
            return new e(function (e) {
              e(t);
            });
          }),
          (e.reject = function (t) {
            return new e(function (e, n) {
              n(t);
            });
          }),
          (e.all = function (t) {
            return new e(function (n, r) {
              if (Array.isArray(t))
                if (0 !== t.length) {
                  var o = t.length,
                    i = [];
                  t.forEach(function (t, a) {
                    e.resolve(t)
                      .then(function (e) {
                        (i[a] = e), 0 === (o -= 1) && n(i);
                      })
                      .then(null, r);
                  });
                } else n([]);
              else r(new TypeError("Promise.all requires an array as input."));
            });
          }),
          (e.prototype.then = function (t, n) {
            var r = this;
            return new e(function (e, o) {
              r._attachHandler({
                done: !1,
                onfulfilled: function (n) {
                  if (t)
                    try {
                      return void e(t(n));
                    } catch (r) {
                      return void o(r);
                    }
                  else e(n);
                },
                onrejected: function (t) {
                  if (n)
                    try {
                      return void e(n(t));
                    } catch (r) {
                      return void o(r);
                    }
                  else o(t);
                }
              });
            });
          }),
          (e.prototype.catch = function (e) {
            return this.then(function (e) {
              return e;
            }, e);
          }),
          (e.prototype.finally = function (t) {
            var n = this;
            return new e(function (e, r) {
              var o, i;
              return n
                .then(
                  function (e) {
                    (i = !1), (o = e), t && t();
                  },
                  function (e) {
                    (i = !0), (o = e), t && t();
                  }
                )
                .then(function () {
                  i ? r(o) : e(o);
                });
            });
          }),
          (e.prototype.toString = function () {
            return "[object SyncPromise]";
          }),
          e
        );
      })(),
      as = n(822),
      ss = (function () {
        function e() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {});
        }
        return (
          (e.clone = function (t) {
            var n = new e();
            return (
              t &&
                ((n._breadcrumbs = Ya(t._breadcrumbs)),
                (n._tags = Wa({}, t._tags)),
                (n._extra = Wa({}, t._extra)),
                (n._contexts = Wa({}, t._contexts)),
                (n._user = t._user),
                (n._level = t._level),
                (n._span = t._span),
                (n._session = t._session),
                (n._transactionName = t._transactionName),
                (n._fingerprint = t._fingerprint),
                (n._eventProcessors = Ya(t._eventProcessors))),
              n
            );
          }),
          (e.prototype.addScopeListener = function (e) {
            this._scopeListeners.push(e);
          }),
          (e.prototype.addEventProcessor = function (e) {
            return this._eventProcessors.push(e), this;
          }),
          (e.prototype.setUser = function (e) {
            return (this._user = e || {}), this._session && this._session.update({ user: e }), this._notifyScopeListeners(), this;
          }),
          (e.prototype.getUser = function () {
            return this._user;
          }),
          (e.prototype.setTags = function (e) {
            return (this._tags = Wa(Wa({}, this._tags), e)), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTag = function (e, t) {
            var n;
            return (this._tags = Wa(Wa({}, this._tags), (((n = {})[e] = t), n))), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setExtras = function (e) {
            return (this._extra = Wa(Wa({}, this._extra), e)), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setExtra = function (e, t) {
            var n;
            return (this._extra = Wa(Wa({}, this._extra), (((n = {})[e] = t), n))), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setFingerprint = function (e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setLevel = function (e) {
            return (this._level = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTransactionName = function (e) {
            return (this._transactionName = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTransaction = function (e) {
            return this.setTransactionName(e);
          }),
          (e.prototype.setContext = function (e, t) {
            var n;
            return (
              null === t ? delete this._contexts[e] : (this._contexts = Wa(Wa({}, this._contexts), (((n = {})[e] = t), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setSpan = function (e) {
            return (this._span = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.getSpan = function () {
            return this._span;
          }),
          (e.prototype.getTransaction = function () {
            var e,
              t,
              n,
              r,
              o = this.getSpan();
            return (null === (e = o) || void 0 === e ? void 0 : e.transaction)
              ? null === (t = o) || void 0 === t
                ? void 0
                : t.transaction
              : (null === (r = null === (n = o) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0])
              ? o.spanRecorder.spans[0]
              : void 0;
          }),
          (e.prototype.setSession = function (e) {
            return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
          }),
          (e.prototype.getSession = function () {
            return this._session;
          }),
          (e.prototype.update = function (t) {
            if (!t) return this;
            if ("function" === typeof t) {
              var n = t(this);
              return n instanceof e ? n : this;
            }
            return (
              t instanceof e
                ? ((this._tags = Wa(Wa({}, this._tags), t._tags)),
                  (this._extra = Wa(Wa({}, this._extra), t._extra)),
                  (this._contexts = Wa(Wa({}, this._contexts), t._contexts)),
                  t._user && Object.keys(t._user).length && (this._user = t._user),
                  t._level && (this._level = t._level),
                  t._fingerprint && (this._fingerprint = t._fingerprint))
                : Za(t) &&
                  ((this._tags = Wa(Wa({}, this._tags), t.tags)),
                  (this._extra = Wa(Wa({}, this._extra), t.extra)),
                  (this._contexts = Wa(Wa({}, this._contexts), t.contexts)),
                  t.user && (this._user = t.user),
                  t.level && (this._level = t.level),
                  t.fingerprint && (this._fingerprint = t.fingerprint)),
              this
            );
          }),
          (e.prototype.clear = function () {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._span = void 0),
              (this._session = void 0),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.addBreadcrumb = function (e, t) {
            var n = Wa({ timestamp: (0, os.yW)() }, e);
            return (
              (this._breadcrumbs = void 0 !== t && t >= 0 ? Ya(this._breadcrumbs, [n]).slice(-t) : Ya(this._breadcrumbs, [n])),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.clearBreadcrumbs = function () {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }),
          (e.prototype.applyToEvent = function (e, t) {
            var n;
            if (
              (this._extra && Object.keys(this._extra).length && (e.extra = Wa(Wa({}, this._extra), e.extra)),
              this._tags && Object.keys(this._tags).length && (e.tags = Wa(Wa({}, this._tags), e.tags)),
              this._user && Object.keys(this._user).length && (e.user = Wa(Wa({}, this._user), e.user)),
              this._contexts && Object.keys(this._contexts).length && (e.contexts = Wa(Wa({}, this._contexts), e.contexts)),
              this._level && (e.level = this._level),
              this._transactionName && (e.transaction = this._transactionName),
              this._span)
            ) {
              e.contexts = Wa({ trace: this._span.getTraceContext() }, e.contexts);
              var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
              r && (e.tags = Wa({ transaction: r }, e.tags));
            }
            return (
              this._applyFingerprint(e),
              (e.breadcrumbs = Ya(e.breadcrumbs || [], this._breadcrumbs)),
              (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
              this._notifyEventProcessors(Ya(us(), this._eventProcessors), e, t)
            );
          }),
          (e.prototype._notifyEventProcessors = function (e, t, n, r) {
            var o = this;
            return (
              void 0 === r && (r = 0),
              new is(function (i, a) {
                var s = e[r];
                if (null === t || "function" !== typeof s) i(t);
                else {
                  var u = s(Wa({}, t), n);
                  ts(u)
                    ? u
                        .then(function (t) {
                          return o._notifyEventProcessors(e, t, n, r + 1).then(i);
                        })
                        .then(null, a)
                    : o
                        ._notifyEventProcessors(e, u, n, r + 1)
                        .then(i)
                        .then(null, a);
                }
              })
            );
          }),
          (e.prototype._notifyScopeListeners = function () {
            var e = this;
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              this._scopeListeners.forEach(function (t) {
                t(e);
              }),
              (this._notifyingListeners = !1));
          }),
          (e.prototype._applyFingerprint = function (e) {
            (e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
              this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
              e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
          }),
          e
        );
      })();
    function us() {
      var e = (0, as.Rf)();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || {}),
        (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []),
        e.__SENTRY__.globalEventProcessors
      );
    }
    function ls(e) {
      us().push(e);
    }
    var cs = (0, as.Rf)(),
      fs = "Sentry Logger ",
      ds = (function () {
        function e() {
          this._enabled = !1;
        }
        return (
          (e.prototype.disable = function () {
            this._enabled = !1;
          }),
          (e.prototype.enable = function () {
            this._enabled = !0;
          }),
          (e.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._enabled &&
              (0, as.Cf)(function () {
                cs.console.log(fs + "[Log]: " + e.join(" "));
              });
          }),
          (e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._enabled &&
              (0, as.Cf)(function () {
                cs.console.warn(fs + "[Warn]: " + e.join(" "));
              });
          }),
          (e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._enabled &&
              (0, as.Cf)(function () {
                cs.console.error(fs + "[Error]: " + e.join(" "));
              });
          }),
          e
        );
      })();
    cs.__SENTRY__ = cs.__SENTRY__ || {};
    var ps,
      hs = cs.__SENTRY__.logger || (cs.__SENTRY__.logger = new ds()),
      ms = n(110);
    !(function (e) {
      (e.Ok = "ok"), (e.Exited = "exited"), (e.Crashed = "crashed"), (e.Abnormal = "abnormal");
    })(ps || (ps = {}));
    var vs = function (e, t) {
      return (
        (vs =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          }),
        vs(e, t)
      );
    };
    var ys = function () {
      return (
        (ys =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }),
        ys.apply(this, arguments)
      );
    };
    function gs(e) {
      var t = "function" === typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" === typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          }
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function _s(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
      } catch (s) {
        o = { error: s };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function Es(e) {
      try {
        for (
          var t = e, n = [], r = 0, o = 0, i = void 0;
          t && r++ < 5 && !("html" === (i = bs(t)) || (r > 1 && o + 3 * n.length + i.length >= 80));

        )
          n.push(i), (o += i.length), (t = t.parentNode);
        return n.reverse().join(" > ");
      } catch (a) {
        return "<unknown>";
      }
    }
    function bs(e) {
      var t,
        n,
        r,
        o,
        i,
        a = e,
        s = [];
      if (!a || !a.tagName) return "";
      if ((s.push(a.tagName.toLowerCase()), a.id && s.push("#" + a.id), (t = a.className) && Xa(t)))
        for (n = t.split(/\s+/), i = 0; i < n.length; i++) s.push("." + n[i]);
      var u = ["type", "name", "title", "alt"];
      for (i = 0; i < u.length; i++) (r = u[i]), (o = a.getAttribute(r)) && s.push("[" + r + '="' + o + '"]');
      return s.join("");
    }
    var Ss = (function () {
        function e() {
          (this._hasWeakSet = "function" === typeof WeakSet), (this._inner = this._hasWeakSet ? new WeakSet() : []);
        }
        return (
          (e.prototype.memoize = function (e) {
            if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
            for (var t = 0; t < this._inner.length; t++) {
              if (this._inner[t] === e) return !0;
            }
            return this._inner.push(e), !1;
          }),
          (e.prototype.unmemoize = function (e) {
            if (this._hasWeakSet) this._inner.delete(e);
            else
              for (var t = 0; t < this._inner.length; t++)
                if (this._inner[t] === e) {
                  this._inner.splice(t, 1);
                  break;
                }
          }),
          e
        );
      })(),
      ws = "<anonymous>";
    function As(e) {
      try {
        return (e && "function" === typeof e && e.name) || ws;
      } catch (t) {
        return ws;
      }
    }
    function Ts(e, t) {
      return void 0 === t && (t = 0), "string" !== typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "...";
    }
    function xs(e, t) {
      if (!Array.isArray(e)) return "";
      for (var n = [], r = 0; r < e.length; r++) {
        var o = e[r];
        try {
          n.push(String(o));
        } catch (i) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(t);
    }
    function Is(e, t) {
      return (
        !!Xa(e) &&
        ((n = t), "[object RegExp]" === Object.prototype.toString.call(n) ? t.test(e) : "string" === typeof t && -1 !== e.indexOf(t))
      );
      var n;
    }
    function Cs(e, t, n) {
      if (t in e) {
        var r = e[t],
          o = n(r);
        if ("function" === typeof o)
          try {
            (o.prototype = o.prototype || {}), Object.defineProperties(o, { __sentry_original__: { enumerable: !1, value: r } });
          } catch (i) {}
        e[t] = o;
      }
    }
    function Ns(e) {
      if (qa(e)) {
        var t = e,
          n = { message: t.message, name: t.name, stack: t.stack };
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
      }
      if (Ja(e)) {
        var o = e,
          i = {};
        i.type = o.type;
        try {
          i.target = es(o.target) ? Es(o.target) : Object.prototype.toString.call(o.target);
        } catch (a) {
          i.target = "<unknown>";
        }
        try {
          i.currentTarget = es(o.currentTarget) ? Es(o.currentTarget) : Object.prototype.toString.call(o.currentTarget);
        } catch (a) {
          i.currentTarget = "<unknown>";
        }
        for (var r in ("undefined" !== typeof CustomEvent && ns(e, CustomEvent) && (i.detail = o.detail), o))
          Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o);
        return i;
      }
      return e;
    }
    function Os(e) {
      return (function (e) {
        return ~-encodeURI(e).split(/%..|./).length;
      })(JSON.stringify(e));
    }
    function Ps(e, t, n) {
      void 0 === t && (t = 3), void 0 === n && (n = 102400);
      var r = Ls(e, t);
      return Os(r) > n ? Ps(e, t - 1, n) : r;
    }
    function Rs(e, t) {
      return "domain" === t && e && "object" === typeof e && e._events
        ? "[Domain]"
        : "domainEmitter" === t
        ? "[DomainEmitter]"
        : "undefined" !== typeof n.g && e === n.g
        ? "[Global]"
        : "undefined" !== typeof window && e === window
        ? "[Window]"
        : "undefined" !== typeof document && e === document
        ? "[Document]"
        : Za((r = e)) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r
        ? "[SyntheticEvent]"
        : "number" === typeof e && e !== e
        ? "[NaN]"
        : void 0 === e
        ? "[undefined]"
        : "function" === typeof e
        ? "[Function: " + As(e) + "]"
        : "symbol" === typeof e
        ? "[" + String(e) + "]"
        : "bigint" === typeof e
        ? "[BigInt: " + String(e) + "]"
        : e;
      var r;
    }
    function ks(e, t, n, r) {
      if ((void 0 === n && (n = 1 / 0), void 0 === r && (r = new Ss()), 0 === n))
        return (function (e) {
          var t = Object.prototype.toString.call(e);
          if ("string" === typeof e) return e;
          if ("[object Object]" === t) return "[Object]";
          if ("[object Array]" === t) return "[Array]";
          var n = Rs(e);
          return Qa(n) ? n : t;
        })(t);
      if (null !== t && void 0 !== t && "function" === typeof t.toJSON) return t.toJSON();
      var o = Rs(t, e);
      if (Qa(o)) return o;
      var i = Ns(t),
        a = Array.isArray(t) ? [] : {};
      if (r.memoize(t)) return "[Circular ~]";
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (a[s] = ks(s, i[s], n - 1, r));
      return r.unmemoize(t), a;
    }
    function Ls(e, t) {
      try {
        return JSON.parse(
          JSON.stringify(e, function (e, n) {
            return ks(e, n, t);
          })
        );
      } catch (n) {
        return "**non-serializable**";
      }
    }
    function Ds(e, t) {
      void 0 === t && (t = 40);
      var n = Object.keys(Ns(e));
      if ((n.sort(), !n.length)) return "[object has no keys]";
      if (n[0].length >= t) return Ts(n[0], t);
      for (var r = n.length; r > 0; r--) {
        var o = n.slice(0, r).join(", ");
        if (!(o.length > t)) return r === n.length ? o : Ts(o, t);
      }
      return "";
    }
    function Ms(e) {
      var t, n;
      if (Za(e)) {
        var r = e,
          o = {};
        try {
          for (var i = gs(Object.keys(r)), a = i.next(); !a.done; a = i.next()) {
            var s = a.value;
            "undefined" !== typeof r[s] && (o[s] = Ms(r[s]));
          }
        } catch (u) {
          t = { error: u };
        } finally {
          try {
            a && !a.done && (n = i.return) && n.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }
      return Array.isArray(e) ? e.map(Ms) : e;
    }
    var Fs = (function () {
        function e(e) {
          (this.errors = 0),
            (this.sid = (0, as.DM)()),
            (this.timestamp = Date.now()),
            (this.started = Date.now()),
            (this.duration = 0),
            (this.status = ps.Ok),
            e && this.update(e);
        }
        return (
          (e.prototype.update = function (e) {
            void 0 === e && (e = {}),
              e.user &&
                (e.user.ip_address && (this.ipAddress = e.user.ip_address),
                e.did || (this.did = e.user.id || e.user.email || e.user.username)),
              (this.timestamp = e.timestamp || Date.now()),
              e.sid && (this.sid = 32 === e.sid.length ? e.sid : (0, as.DM)()),
              e.did && (this.did = "" + e.did),
              "number" === typeof e.started && (this.started = e.started),
              "number" === typeof e.duration ? (this.duration = e.duration) : (this.duration = this.timestamp - this.started),
              e.release && (this.release = e.release),
              e.environment && (this.environment = e.environment),
              e.ipAddress && (this.ipAddress = e.ipAddress),
              e.userAgent && (this.userAgent = e.userAgent),
              "number" === typeof e.errors && (this.errors = e.errors),
              e.status && (this.status = e.status);
          }),
          (e.prototype.close = function (e) {
            e ? this.update({ status: e }) : this.status === ps.Ok ? this.update({ status: ps.Exited }) : this.update();
          }),
          (e.prototype.toJSON = function () {
            return Ms({
              sid: "" + this.sid,
              init: !0,
              started: new Date(this.started).toISOString(),
              timestamp: new Date(this.timestamp).toISOString(),
              status: this.status,
              errors: this.errors,
              did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : void 0,
              duration: this.duration,
              attrs: Ms({ release: this.release, environment: this.environment, ip_address: this.ipAddress, user_agent: this.userAgent })
            });
          }),
          e
        );
      })(),
      Bs = 3,
      Us = (function () {
        function e(e, t, n) {
          void 0 === t && (t = new ss()),
            void 0 === n && (n = Bs),
            (this._version = n),
            (this._stack = [{}]),
            (this.getStackTop().scope = t),
            this.bindClient(e);
        }
        return (
          (e.prototype.isOlderThan = function (e) {
            return this._version < e;
          }),
          (e.prototype.bindClient = function (e) {
            (this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations();
          }),
          (e.prototype.pushScope = function () {
            var e = ss.clone(this.getScope());
            return this.getStack().push({ client: this.getClient(), scope: e }), e;
          }),
          (e.prototype.popScope = function () {
            return !(this.getStack().length <= 1) && !!this.getStack().pop();
          }),
          (e.prototype.withScope = function (e) {
            var t = this.pushScope();
            try {
              e(t);
            } finally {
              this.popScope();
            }
          }),
          (e.prototype.getClient = function () {
            return this.getStackTop().client;
          }),
          (e.prototype.getScope = function () {
            return this.getStackTop().scope;
          }),
          (e.prototype.getStack = function () {
            return this._stack;
          }),
          (e.prototype.getStackTop = function () {
            return this._stack[this._stack.length - 1];
          }),
          (e.prototype.captureException = function (e, t) {
            var n = (this._lastEventId = (0, as.DM)()),
              r = t;
            if (!t) {
              var o = void 0;
              try {
                throw new Error("Sentry syntheticException");
              } catch (e) {
                o = e;
              }
              r = { originalException: e, syntheticException: o };
            }
            return this._invokeClient("captureException", e, Wa(Wa({}, r), { event_id: n })), n;
          }),
          (e.prototype.captureMessage = function (e, t, n) {
            var r = (this._lastEventId = (0, as.DM)()),
              o = n;
            if (!n) {
              var i = void 0;
              try {
                throw new Error(e);
              } catch (a) {
                i = a;
              }
              o = { originalException: e, syntheticException: i };
            }
            return this._invokeClient("captureMessage", e, t, Wa(Wa({}, o), { event_id: r })), r;
          }),
          (e.prototype.captureEvent = function (e, t) {
            var n = (this._lastEventId = (0, as.DM)());
            return this._invokeClient("captureEvent", e, Wa(Wa({}, t), { event_id: n })), n;
          }),
          (e.prototype.lastEventId = function () {
            return this._lastEventId;
          }),
          (e.prototype.addBreadcrumb = function (e, t) {
            var n = this.getStackTop(),
              r = n.scope,
              o = n.client;
            if (r && o) {
              var i = (o.getOptions && o.getOptions()) || {},
                a = i.beforeBreadcrumb,
                s = void 0 === a ? null : a,
                u = i.maxBreadcrumbs,
                l = void 0 === u ? 100 : u;
              if (!(l <= 0)) {
                var c = (0, os.yW)(),
                  f = Wa({ timestamp: c }, e),
                  d = s
                    ? (0, as.Cf)(function () {
                        return s(f, t);
                      })
                    : f;
                null !== d && r.addBreadcrumb(d, Math.min(l, 100));
              }
            }
          }),
          (e.prototype.setUser = function (e) {
            var t = this.getScope();
            t && t.setUser(e);
          }),
          (e.prototype.setTags = function (e) {
            var t = this.getScope();
            t && t.setTags(e);
          }),
          (e.prototype.setExtras = function (e) {
            var t = this.getScope();
            t && t.setExtras(e);
          }),
          (e.prototype.setTag = function (e, t) {
            var n = this.getScope();
            n && n.setTag(e, t);
          }),
          (e.prototype.setExtra = function (e, t) {
            var n = this.getScope();
            n && n.setExtra(e, t);
          }),
          (e.prototype.setContext = function (e, t) {
            var n = this.getScope();
            n && n.setContext(e, t);
          }),
          (e.prototype.configureScope = function (e) {
            var t = this.getStackTop(),
              n = t.scope,
              r = t.client;
            n && r && e(n);
          }),
          (e.prototype.run = function (e) {
            var t = Gs(this);
            try {
              e(this);
            } finally {
              Gs(t);
            }
          }),
          (e.prototype.getIntegration = function (e) {
            var t = this.getClient();
            if (!t) return null;
            try {
              return t.getIntegration(e);
            } catch (n) {
              return hs.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null;
            }
          }),
          (e.prototype.startSpan = function (e) {
            return this._callExtensionMethod("startSpan", e);
          }),
          (e.prototype.startTransaction = function (e, t) {
            return this._callExtensionMethod("startTransaction", e, t);
          }),
          (e.prototype.traceHeaders = function () {
            return this._callExtensionMethod("traceHeaders");
          }),
          (e.prototype.startSession = function (e) {
            this.endSession();
            var t = this.getStackTop(),
              n = t.scope,
              r = t.client,
              o = (r && r.getOptions()) || {},
              i = o.release,
              a = o.environment,
              s = new Fs(Wa(Wa({ release: i, environment: a }, n && { user: n.getUser() }), e));
            return n && n.setSession(s), s;
          }),
          (e.prototype.endSession = function () {
            var e = this.getStackTop(),
              t = e.scope,
              n = e.client;
            if (t) {
              var r = t.getSession && t.getSession();
              r && (r.close(), n && n.captureSession && n.captureSession(r), t.setSession());
            }
          }),
          (e.prototype._invokeClient = function (e) {
            for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var o = this.getStackTop(),
              i = o.scope,
              a = o.client;
            a && a[e] && (t = a)[e].apply(t, Ya(n, [i]));
          }),
          (e.prototype._callExtensionMethod = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = js().__SENTRY__;
            if (r && r.extensions && "function" === typeof r.extensions[e]) return r.extensions[e].apply(this, t);
            hs.warn("Extension method " + e + " couldn't be found, doing nothing.");
          }),
          e
        );
      })();
    function js() {
      var e = (0, as.Rf)();
      return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e;
    }
    function Gs(e) {
      var t = js(),
        n = Ws(t);
      return zs(t, e), n;
    }
    function Vs() {
      var e = js();
      return (
        (Hs(e) && !Ws(e).isOlderThan(Bs)) || zs(e, new Us()),
        (0, ms.KV)()
          ? (function (e) {
              try {
                var t = (function () {
                  var e = js().__SENTRY__;
                  return e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                })();
                if (!t) return Ws(e);
                if (!Hs(t) || Ws(t).isOlderThan(Bs)) {
                  var n = Ws(e).getStackTop();
                  zs(t, new Us(n.client, ss.clone(n.scope)));
                }
                return Ws(t);
              } catch (r) {
                return Ws(e);
              }
            })(e)
          : Ws(e)
      );
    }
    function Hs(e) {
      return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
    }
    function Ws(e) {
      return (
        (e && e.__SENTRY__ && e.__SENTRY__.hub) || ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new Us())), e.__SENTRY__.hub
      );
    }
    function zs(e, t) {
      return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0);
    }
    var Ys,
      qs = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
      Ks = (function () {
        function e(t) {
          void 0 === t && (t = {}), (this._options = t), (this.name = e.id);
        }
        return (
          (e.prototype.setupOnce = function () {
            ls(function (t) {
              var n = Vs();
              if (!n) return t;
              var r = n.getIntegration(e);
              if (r) {
                var o = n.getClient(),
                  i = o ? o.getOptions() : {},
                  a = r._mergeOptions(i);
                if (r._shouldDropEvent(t, a)) return null;
              }
              return t;
            });
          }),
          (e.prototype._shouldDropEvent = function (e, t) {
            return this._isSentryError(e, t)
              ? (hs.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0, as.jH)(e)), !0)
              : this._isIgnoredError(e, t)
              ? (hs.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0, as.jH)(e)), !0)
              : this._isDeniedUrl(e, t)
              ? (hs.warn(
                  "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                    (0, as.jH)(e) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(e)
                ),
                !0)
              : !this._isAllowedUrl(e, t) &&
                (hs.warn(
                  "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                    (0, as.jH)(e) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(e)
                ),
                !0);
          }),
          (e.prototype._isSentryError = function (e, t) {
            if (!t.ignoreInternal) return !1;
            try {
              return (
                (e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type) || !1
              );
            } catch (n) {
              return !1;
            }
          }),
          (e.prototype._isIgnoredError = function (e, t) {
            return (
              !(!t.ignoreErrors || !t.ignoreErrors.length) &&
              this._getPossibleEventMessages(e).some(function (e) {
                return t.ignoreErrors.some(function (t) {
                  return Is(e, t);
                });
              })
            );
          }),
          (e.prototype._isDeniedUrl = function (e, t) {
            if (!t.denyUrls || !t.denyUrls.length) return !1;
            var n = this._getEventFilterUrl(e);
            return (
              !!n &&
              t.denyUrls.some(function (e) {
                return Is(n, e);
              })
            );
          }),
          (e.prototype._isAllowedUrl = function (e, t) {
            if (!t.allowUrls || !t.allowUrls.length) return !0;
            var n = this._getEventFilterUrl(e);
            return (
              !n ||
              t.allowUrls.some(function (e) {
                return Is(n, e);
              })
            );
          }),
          (e.prototype._mergeOptions = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                allowUrls: Ha(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                denyUrls: Ha(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                ignoreErrors: Ha(this._options.ignoreErrors || [], e.ignoreErrors || [], qs),
                ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
              }
            );
          }),
          (e.prototype._getPossibleEventMessages = function (e) {
            if (e.message) return [e.message];
            if (e.exception)
              try {
                var t = (e.exception.values && e.exception.values[0]) || {},
                  n = t.type,
                  r = void 0 === n ? "" : n,
                  o = t.value,
                  i = void 0 === o ? "" : o;
                return ["" + i, r + ": " + i];
              } catch (a) {
                return hs.error("Cannot extract message for event " + (0, as.jH)(e)), [];
              }
            return [];
          }),
          (e.prototype._getEventFilterUrl = function (e) {
            try {
              if (e.stacktrace) {
                var t = e.stacktrace.frames;
                return (t && t[t.length - 1].filename) || null;
              }
              if (e.exception) {
                var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                return (n && n[n.length - 1].filename) || null;
              }
              return null;
            } catch (r) {
              return hs.error("Cannot extract url for event " + (0, as.jH)(e)), null;
            }
          }),
          (e.id = "InboundFilters"),
          e
        );
      })();
    function $s() {
      if (!("fetch" in (0, as.Rf)())) return !1;
      try {
        return new Headers(), new Request(""), new Response(), !0;
      } catch (e) {
        return !1;
      }
    }
    function Xs(e) {
      return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
    }
    function Qs() {
      if (!$s()) return !1;
      try {
        return new Request("_", { referrerPolicy: "origin" }), !0;
      } catch (e) {
        return !1;
      }
    }
    !(function (e) {
      (e.Fatal = "fatal"),
        (e.Error = "error"),
        (e.Warning = "warning"),
        (e.Log = "log"),
        (e.Info = "info"),
        (e.Debug = "debug"),
        (e.Critical = "critical");
    })(Ys || (Ys = {})),
      (function (e) {
        e.fromString = function (t) {
          switch (t) {
            case "debug":
              return e.Debug;
            case "info":
              return e.Info;
            case "warn":
            case "warning":
              return e.Warning;
            case "error":
              return e.Error;
            case "fatal":
              return e.Fatal;
            case "critical":
              return e.Critical;
            default:
              return e.Log;
          }
        };
      })(Ys || (Ys = {}));
    var Zs,
      Js = (0, as.Rf)(),
      eu = {},
      tu = {};
    function nu(e) {
      if (!tu[e])
        switch (((tu[e] = !0), e)) {
          case "console":
            !(function () {
              if (!("console" in Js)) return;
              ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
                e in Js.console &&
                  Cs(Js.console, e, function (t) {
                    return function () {
                      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                      ou("console", { args: n, level: e }), t && Function.prototype.apply.call(t, Js.console, n);
                    };
                  });
              });
            })();
            break;
          case "dom":
            !(function () {
              if (!("document" in Js)) return;
              Js.document.addEventListener("click", fu("click", ou.bind(null, "dom")), !1),
                Js.document.addEventListener("keypress", du(ou.bind(null, "dom")), !1),
                ["EventTarget", "Node"].forEach(function (e) {
                  var t = Js[e] && Js[e].prototype;
                  t &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty("addEventListener") &&
                    (Cs(t, "addEventListener", function (e) {
                      return function (t, n, r) {
                        return (
                          n && n.handleEvent
                            ? ("click" === t &&
                                Cs(n, "handleEvent", function (e) {
                                  return function (t) {
                                    return fu("click", ou.bind(null, "dom"))(t), e.call(this, t);
                                  };
                                }),
                              "keypress" === t &&
                                Cs(n, "handleEvent", function (e) {
                                  return function (t) {
                                    return du(ou.bind(null, "dom"))(t), e.call(this, t);
                                  };
                                }))
                            : ("click" === t && fu("click", ou.bind(null, "dom"), !0)(this),
                              "keypress" === t && du(ou.bind(null, "dom"))(this)),
                          e.call(this, t, n, r)
                        );
                      };
                    }),
                    Cs(t, "removeEventListener", function (e) {
                      return function (t, n, r) {
                        try {
                          e.call(this, t, n.__sentry_wrapped__, r);
                        } catch (o) {}
                        return e.call(this, t, n, r);
                      };
                    }));
                });
            })();
            break;
          case "xhr":
            !(function () {
              if (!("XMLHttpRequest" in Js)) return;
              var e = [],
                t = [],
                n = XMLHttpRequest.prototype;
              Cs(n, "open", function (n) {
                return function () {
                  for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                  var i = this,
                    a = r[1];
                  (i.__sentry_xhr__ = { method: Xa(r[0]) ? r[0].toUpperCase() : r[0], url: r[1] }),
                    Xa(a) && "POST" === i.__sentry_xhr__.method && a.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
                  var s = function () {
                    if (4 === i.readyState) {
                      try {
                        i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status);
                      } catch (a) {}
                      try {
                        var n = e.indexOf(i);
                        if (-1 !== n) {
                          e.splice(n);
                          var o = t.splice(n)[0];
                          i.__sentry_xhr__ && void 0 !== o[0] && (i.__sentry_xhr__.body = o[0]);
                        }
                      } catch (a) {}
                      ou("xhr", { args: r, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: i });
                    }
                  };
                  return (
                    "onreadystatechange" in i && "function" === typeof i.onreadystatechange
                      ? Cs(i, "onreadystatechange", function (e) {
                          return function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return s(), e.apply(i, t);
                          };
                        })
                      : i.addEventListener("readystatechange", s),
                    n.apply(i, r)
                  );
                };
              }),
                Cs(n, "send", function (n) {
                  return function () {
                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                    return e.push(this), t.push(r), ou("xhr", { args: r, startTimestamp: Date.now(), xhr: this }), n.apply(this, r);
                  };
                });
            })();
            break;
          case "fetch":
            !(function () {
              if (
                !(function () {
                  if (!$s()) return !1;
                  var e = (0, as.Rf)();
                  if (Xs(e.fetch)) return !0;
                  var t = !1,
                    n = e.document;
                  if (n && "function" === typeof n.createElement)
                    try {
                      var r = n.createElement("iframe");
                      (r.hidden = !0),
                        n.head.appendChild(r),
                        r.contentWindow && r.contentWindow.fetch && (t = Xs(r.contentWindow.fetch)),
                        n.head.removeChild(r);
                    } catch (o) {
                      hs.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", o);
                    }
                  return t;
                })()
              )
                return;
              Cs(Js, "fetch", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var r = { args: t, fetchData: { method: iu(t), url: au(t) }, startTimestamp: Date.now() };
                  return (
                    ou("fetch", ys({}, r)),
                    e.apply(Js, t).then(
                      function (e) {
                        return ou("fetch", ys(ys({}, r), { endTimestamp: Date.now(), response: e })), e;
                      },
                      function (e) {
                        throw (ou("fetch", ys(ys({}, r), { endTimestamp: Date.now(), error: e })), e);
                      }
                    )
                  );
                };
              });
            })();
            break;
          case "history":
            !(function () {
              if (
                !(function () {
                  var e = (0, as.Rf)(),
                    t = e.chrome,
                    n = t && t.app && t.app.runtime,
                    r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                  return !n && r;
                })()
              )
                return;
              var e = Js.onpopstate;
              function t(e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var r = t.length > 2 ? t[2] : void 0;
                  if (r) {
                    var o = Zs,
                      i = String(r);
                    (Zs = i), ou("history", { from: o, to: i });
                  }
                  return e.apply(this, t);
                };
              }
              (Js.onpopstate = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = Js.location.href,
                  o = Zs;
                if (((Zs = r), ou("history", { from: o, to: r }), e)) return e.apply(this, t);
              }),
                Cs(Js.history, "pushState", t),
                Cs(Js.history, "replaceState", t);
            })();
            break;
          case "error":
            (pu = Js.onerror),
              (Js.onerror = function (e, t, n, r, o) {
                return ou("error", { column: r, error: o, line: n, msg: e, url: t }), !!pu && pu.apply(this, arguments);
              });
            break;
          case "unhandledrejection":
            (hu = Js.onunhandledrejection),
              (Js.onunhandledrejection = function (e) {
                return ou("unhandledrejection", e), !hu || hu.apply(this, arguments);
              });
            break;
          default:
            hs.warn("unknown instrumentation type:", e);
        }
    }
    function ru(e) {
      e &&
        "string" === typeof e.type &&
        "function" === typeof e.callback &&
        ((eu[e.type] = eu[e.type] || []), eu[e.type].push(e.callback), nu(e.type));
    }
    function ou(e, t) {
      var n, r;
      if (e && eu[e])
        try {
          for (var o = gs(eu[e] || []), i = o.next(); !i.done; i = o.next()) {
            var a = i.value;
            try {
              a(t);
            } catch (s) {
              hs.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + As(a) + "\nError: " + s);
            }
          }
        } catch (u) {
          n = { error: u };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    function iu(e) {
      return (
        void 0 === e && (e = []),
        "Request" in Js && ns(e[0], Request) && e[0].method
          ? String(e[0].method).toUpperCase()
          : e[1] && e[1].method
          ? String(e[1].method).toUpperCase()
          : "GET"
      );
    }
    function au(e) {
      return void 0 === e && (e = []), "string" === typeof e[0] ? e[0] : "Request" in Js && ns(e[0], Request) ? e[0].url : String(e[0]);
    }
    var su,
      uu,
      lu = 1e3,
      cu = 0;
    function fu(e, t, n) {
      return (
        void 0 === n && (n = !1),
        function (r) {
          (su = void 0),
            r &&
              uu !== r &&
              ((uu = r),
              cu && clearTimeout(cu),
              n
                ? (cu = setTimeout(function () {
                    t({ event: r, name: e });
                  }))
                : t({ event: r, name: e }));
        }
      );
    }
    function du(e) {
      return function (t) {
        var n;
        try {
          n = t.target;
        } catch (o) {
          return;
        }
        var r = n && n.tagName;
        r &&
          ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) &&
          (su || fu("input", e)(t),
          clearTimeout(su),
          (su = setTimeout(function () {
            su = void 0;
          }, lu)));
      };
    }
    var pu = null;
    var hu = null;
    var mu = "?",
      vu =
        /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      yu =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      gu = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      _u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Eu = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      bu = /Minified React error #\d+;/i;
    function Su(e) {
      var t = null,
        n = 0;
      e && ("number" === typeof e.framesToPop ? (n = e.framesToPop) : bu.test(e.message) && (n = 1));
      try {
        if (
          ((t = (function (e) {
            if (!e || !e.stacktrace) return null;
            for (
              var t,
                n = e.stacktrace,
                r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
                i = n.split("\n"),
                a = [],
                s = 0;
              s < i.length;
              s += 2
            ) {
              var u = null;
              (t = r.exec(i[s]))
                ? (u = { url: t[2], func: t[3], args: [], line: +t[1], column: null })
                : (t = o.exec(i[s])) &&
                  (u = { url: t[6], func: t[3] || t[4], args: t[5] ? t[5].split(",") : [], line: +t[1], column: +t[2] }),
                u && (!u.func && u.line && (u.func = mu), a.push(u));
            }
            if (!a.length) return null;
            return { message: Au(e), name: e.name, stack: a };
          })(e)),
          t)
        )
          return wu(t, n);
      } catch (r) {}
      try {
        if (
          ((t = (function (e) {
            if (!e || !e.stack) return null;
            for (var t, n, r, o = [], i = e.stack.split("\n"), a = 0; a < i.length; ++a) {
              if ((n = vu.exec(i[a]))) {
                var s = n[2] && 0 === n[2].indexOf("native");
                n[2] && 0 === n[2].indexOf("eval") && (t = Eu.exec(n[2])) && ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3])),
                  (r = {
                    url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr(11) : n[2],
                    func: n[1] || mu,
                    args: s ? [n[2]] : [],
                    line: n[3] ? +n[3] : null,
                    column: n[4] ? +n[4] : null
                  });
              } else if ((n = gu.exec(i[a]))) r = { url: n[2], func: n[1] || mu, args: [], line: +n[3], column: n[4] ? +n[4] : null };
              else {
                if (!(n = yu.exec(i[a]))) continue;
                n[3] && n[3].indexOf(" > eval") > -1 && (t = _u.exec(n[3]))
                  ? ((n[1] = n[1] || "eval"), (n[3] = t[1]), (n[4] = t[2]), (n[5] = ""))
                  : 0 !== a || n[5] || void 0 === e.columnNumber || (o[0].column = e.columnNumber + 1),
                  (r = {
                    url: n[3],
                    func: n[1] || mu,
                    args: n[2] ? n[2].split(",") : [],
                    line: n[4] ? +n[4] : null,
                    column: n[5] ? +n[5] : null
                  });
              }
              !r.func && r.line && (r.func = mu), o.push(r);
            }
            if (!o.length) return null;
            return { message: Au(e), name: e.name, stack: o };
          })(e)),
          t)
        )
          return wu(t, n);
      } catch (r) {}
      return { message: Au(e), name: e && e.name, stack: [], failed: !0 };
    }
    function wu(e, t) {
      try {
        return Da(Da({}, e), { stack: e.stack.slice(t) });
      } catch (n) {
        return e;
      }
    }
    function Au(e) {
      var t = e && e.message;
      return t ? (t.error && "string" === typeof t.error.message ? t.error.message : t) : "No error message";
    }
    var Tu = 50;
    function xu(e) {
      var t = Cu(e.stack),
        n = { type: e.name, value: e.message };
      return (
        t && t.length && (n.stacktrace = { frames: t }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
      );
    }
    function Iu(e) {
      return { exception: { values: [xu(e)] } };
    }
    function Cu(e) {
      if (!e || !e.length) return [];
      var t = e,
        n = t[0].func || "",
        r = t[t.length - 1].func || "";
      return (
        (-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException")) || (t = t.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t
          .slice(0, Tu)
          .map(function (e) {
            return {
              colno: null === e.column ? void 0 : e.column,
              filename: e.url || t[0].url,
              function: e.func || "?",
              in_app: !0,
              lineno: null === e.line ? void 0 : e.line
            };
          })
          .reverse()
      );
    }
    function Nu(e, t, n) {
      var r, o;
      if ((void 0 === n && (n = {}), Ka(e) && e.error)) return (r = Iu(Su((e = e.error))));
      if ($a(e) || ((o = e), "[object DOMException]" === Object.prototype.toString.call(o))) {
        var i = e,
          a = i.name || ($a(i) ? "DOMError" : "DOMException"),
          s = i.message ? a + ": " + i.message : a;
        return (r = Ou(s, t, n)), (0, as.Db)(r, s), "code" in i && (r.tags = Da(Da({}, r.tags), { "DOMException.code": "" + i.code })), r;
      }
      return qa(e)
        ? (r = Iu(Su(e)))
        : Za(e) || Ja(e)
        ? ((r = (function (e, t, n) {
            var r = {
              exception: {
                values: [
                  {
                    type: Ja(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Ds(e)
                  }
                ]
              },
              extra: { __serialized__: Ps(e) }
            };
            if (t) {
              var o = Cu(Su(t).stack);
              r.stacktrace = { frames: o };
            }
            return r;
          })(e, t, n.rejection)),
          (0, as.EG)(r, { synthetic: !0 }),
          r)
        : ((r = Ou(e, t, n)), (0, as.Db)(r, "" + e, void 0), (0, as.EG)(r, { synthetic: !0 }), r);
    }
    function Ou(e, t, n) {
      void 0 === n && (n = {});
      var r = { message: e };
      if (n.attachStacktrace && t) {
        var o = Cu(Su(t).stack);
        r.stacktrace = { frames: o };
      }
      return r;
    }
    function Pu(e, t) {
      var n = "function" === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        a = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
      } catch (s) {
        o = { error: s };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    }
    function Ru(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Vs();
      if (r && r[e])
        return r[e].apply(
          r,
          (function () {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Pu(arguments[t]));
            return e;
          })(t)
        );
      throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
    }
    function ku(e, t) {
      var n;
      try {
        throw new Error("Sentry syntheticException");
      } catch (e) {
        n = e;
      }
      return Ru("captureException", e, { captureContext: t, originalException: e, syntheticException: n });
    }
    var Lu =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array
        ? function (e, t) {
            return (e.__proto__ = t), e;
          }
        : function (e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e;
          });
    var Du = (function (e) {
        function t(t) {
          var n = this.constructor,
            r = e.call(this, t) || this;
          return (r.message = t), (r.name = n.prototype.constructor.name), Lu(r, n.prototype), r;
        }
        return (
          (function (e, t) {
            function n() {
              this.constructor = e;
            }
            vs(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          })(t, e),
          t
        );
      })(Error),
      Mu = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
      Fu = "Invalid Dsn",
      Bu = (function () {
        function e(e) {
          "string" === typeof e ? this._fromString(e) : this._fromComponents(e), this._validate();
        }
        return (
          (e.prototype.toString = function (e) {
            void 0 === e && (e = !1);
            var t = this,
              n = t.host,
              r = t.path,
              o = t.pass,
              i = t.port,
              a = t.projectId;
            return t.protocol + "://" + t.user + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a;
          }),
          (e.prototype._fromString = function (e) {
            var t = Mu.exec(e);
            if (!t) throw new Du(Fu);
            var n = _s(t.slice(1), 6),
              r = n[0],
              o = n[1],
              i = n[2],
              a = void 0 === i ? "" : i,
              s = n[3],
              u = n[4],
              l = void 0 === u ? "" : u,
              c = "",
              f = n[5],
              d = f.split("/");
            if ((d.length > 1 && ((c = d.slice(0, -1).join("/")), (f = d.pop())), f)) {
              var p = f.match(/^\d+/);
              p && (f = p[0]);
            }
            this._fromComponents({ host: s, pass: a, path: c, projectId: f, port: l, protocol: r, user: o });
          }),
          (e.prototype._fromComponents = function (e) {
            (this.protocol = e.protocol),
              (this.user = e.user),
              (this.pass = e.pass || ""),
              (this.host = e.host),
              (this.port = e.port || ""),
              (this.path = e.path || ""),
              (this.projectId = e.projectId);
          }),
          (e.prototype._validate = function () {
            var e = this;
            if (
              (["protocol", "user", "host", "projectId"].forEach(function (t) {
                if (!e[t]) throw new Du(Fu + ": " + t + " missing");
              }),
              !this.projectId.match(/^\d+$/))
            )
              throw new Du(Fu + ": Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol) throw new Du(Fu + ": Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10))) throw new Du(Fu + ": Invalid port " + this.port);
          }),
          e
        );
      })(),
      Uu = (function () {
        function e(e) {
          (this.dsn = e), (this._dsnObject = new Bu(e));
        }
        return (
          (e.prototype.getDsn = function () {
            return this._dsnObject;
          }),
          (e.prototype.getBaseApiEndpoint = function () {
            var e = this._dsnObject,
              t = e.protocol ? e.protocol + ":" : "",
              n = e.port ? ":" + e.port : "";
            return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/";
          }),
          (e.prototype.getStoreEndpoint = function () {
            return this._getIngestEndpoint("store");
          }),
          (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            return this.getStoreEndpoint() + "?" + this._encodedAuth();
          }),
          (e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
            return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
          }),
          (e.prototype.getStoreEndpointPath = function () {
            var e = this._dsnObject;
            return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
          }),
          (e.prototype.getRequestHeaders = function (e, t) {
            var n = this._dsnObject,
              r = ["Sentry sentry_version=7"];
            return (
              r.push("sentry_client=" + e + "/" + t),
              r.push("sentry_key=" + n.user),
              n.pass && r.push("sentry_secret=" + n.pass),
              { "Content-Type": "application/json", "X-Sentry-Auth": r.join(", ") }
            );
          }),
          (e.prototype.getReportDialogEndpoint = function (e) {
            void 0 === e && (e = {});
            var t = this._dsnObject,
              n = this.getBaseApiEndpoint() + "embed/error-page/",
              r = [];
            for (var o in (r.push("dsn=" + t.toString()), e))
              if ("dsn" !== o)
                if ("user" === o) {
                  if (!e.user) continue;
                  e.user.name && r.push("name=" + encodeURIComponent(e.user.name)),
                    e.user.email && r.push("email=" + encodeURIComponent(e.user.email));
                } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
            return r.length ? n + "?" + r.join("&") : n;
          }),
          (e.prototype._getEnvelopeEndpoint = function () {
            return this._getIngestEndpoint("envelope");
          }),
          (e.prototype._getIngestEndpoint = function (e) {
            return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + e + "/";
          }),
          (e.prototype._encodedAuth = function () {
            var e,
              t = { sentry_key: this._dsnObject.user, sentry_version: "7" };
            return (
              (e = t),
              Object.keys(e)
                .map(function (t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                })
                .join("&")
            );
          }),
          e
        );
      })(),
      ju = 0;
    function Gu() {
      return ju > 0;
    }
    function Vu(e, t, n) {
      if ((void 0 === t && (t = {}), "function" !== typeof e)) return e;
      try {
        if (e.__sentry__) return e;
        if (e.__sentry_wrapped__) return e.__sentry_wrapped__;
      } catch (i) {
        return e;
      }
      var r = function () {
        var r = Array.prototype.slice.call(arguments);
        try {
          n && "function" === typeof n && n.apply(this, arguments);
          var o = r.map(function (e) {
            return Vu(e, t);
          });
          return e.handleEvent ? e.handleEvent.apply(this, o) : e.apply(this, o);
        } catch (i) {
          throw (
            ((ju += 1),
            setTimeout(function () {
              ju -= 1;
            }),
            Ru("withScope", function (e) {
              e.addEventProcessor(function (e) {
                var n = Da({}, e);
                return (
                  t.mechanism && ((0, as.Db)(n, void 0, void 0), (0, as.EG)(n, t.mechanism)),
                  (n.extra = Da(Da({}, n.extra), { arguments: r })),
                  n
                );
              }),
                ku(i);
            }),
            i)
          );
        }
      };
      try {
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
      } catch (a) {}
      (e.prototype = e.prototype || {}),
        (r.prototype = e.prototype),
        Object.defineProperty(e, "__sentry_wrapped__", { enumerable: !1, value: r }),
        Object.defineProperties(r, { __sentry__: { enumerable: !1, value: !0 }, __sentry_original__: { enumerable: !1, value: e } });
      try {
        Object.getOwnPropertyDescriptor(r, "name").configurable &&
          Object.defineProperty(r, "name", {
            get: function () {
              return e.name;
            }
          });
      } catch (a) {}
      return r;
    }
    function Hu(e) {
      if ((void 0 === e && (e = {}), e.eventId))
        if (e.dsn) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.src = new Uu(e.dsn).getReportDialogEndpoint(e)),
            e.onLoad && (t.onload = e.onLoad),
            (document.head || document.body).appendChild(t);
        } else hs.error("Missing dsn option in showReportDialog call");
      else hs.error("Missing eventId option in showReportDialog call");
    }
    var Wu = (function () {
        function e(t) {
          (this.name = e.id),
            (this._onErrorHandlerInstalled = !1),
            (this._onUnhandledRejectionHandlerInstalled = !1),
            (this._options = Da({ onerror: !0, onunhandledrejection: !0 }, t));
        }
        return (
          (e.prototype.setupOnce = function () {
            (Error.stackTraceLimit = 50),
              this._options.onerror && (hs.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()),
              this._options.onunhandledrejection &&
                (hs.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler());
          }),
          (e.prototype._installGlobalOnErrorHandler = function () {
            var t = this;
            this._onErrorHandlerInstalled ||
              (ru({
                callback: function (n) {
                  var r = n.error,
                    o = Vs(),
                    i = o.getIntegration(e),
                    a = r && !0 === r.__sentry_own_request__;
                  if (i && !Gu() && !a) {
                    var s = o.getClient(),
                      u = Qa(r)
                        ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column)
                        : t._enhanceEventWithInitialFrame(
                            Nu(r, void 0, { attachStacktrace: s && s.getOptions().attachStacktrace, rejection: !1 }),
                            n.url,
                            n.line,
                            n.column
                          );
                    (0, as.EG)(u, { handled: !1, type: "onerror" }), o.captureEvent(u, { originalException: r });
                  }
                },
                type: "error"
              }),
              (this._onErrorHandlerInstalled = !0));
          }),
          (e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
            var t = this;
            this._onUnhandledRejectionHandlerInstalled ||
              (ru({
                callback: function (n) {
                  var r = n;
                  try {
                    "reason" in n ? (r = n.reason) : "detail" in n && "reason" in n.detail && (r = n.detail.reason);
                  } catch (l) {}
                  var o = Vs(),
                    i = o.getIntegration(e),
                    a = r && !0 === r.__sentry_own_request__;
                  if (!i || Gu() || a) return !0;
                  var s = o.getClient(),
                    u = Qa(r)
                      ? t._eventFromRejectionWithPrimitive(r)
                      : Nu(r, void 0, { attachStacktrace: s && s.getOptions().attachStacktrace, rejection: !0 });
                  (u.level = Ys.Error),
                    (0, as.EG)(u, { handled: !1, type: "onunhandledrejection" }),
                    o.captureEvent(u, { originalException: r });
                },
                type: "unhandledrejection"
              }),
              (this._onUnhandledRejectionHandlerInstalled = !0));
          }),
          (e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
            var o,
              i = Ka(e) ? e.message : e;
            if (Xa(i)) {
              var a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
              a && ((o = a[1]), (i = a[2]));
            }
            var s = { exception: { values: [{ type: o || "Error", value: i }] } };
            return this._enhanceEventWithInitialFrame(s, t, n, r);
          }),
          (e.prototype._eventFromRejectionWithPrimitive = function (e) {
            return {
              exception: {
                values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(e) }]
              }
            };
          }),
          (e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
            (e.exception = e.exception || {}),
              (e.exception.values = e.exception.values || []),
              (e.exception.values[0] = e.exception.values[0] || {}),
              (e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}),
              (e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || []);
            var o = isNaN(parseInt(r, 10)) ? void 0 : r,
              i = isNaN(parseInt(n, 10)) ? void 0 : n,
              a = Xa(t) && t.length > 0 ? t : (0, as.l4)();
            return (
              0 === e.exception.values[0].stacktrace.frames.length &&
                e.exception.values[0].stacktrace.frames.push({ colno: o, filename: a, function: "?", in_app: !0, lineno: i }),
              e
            );
          }),
          (e.id = "GlobalHandlers"),
          e
        );
      })(),
      zu = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload"
      ],
      Yu = (function () {
        function e(t) {
          (this.name = e.id),
            (this._options = Da({ XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0 }, t));
        }
        return (
          (e.prototype.setupOnce = function () {
            var e = (0, as.Rf)();
            (this._options.setTimeout && Cs(e, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval && Cs(e, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame && Cs(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest && "XMLHttpRequest" in e && Cs(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            this._options.eventTarget) &&
              (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : zu).forEach(this._wrapEventTarget.bind(this));
          }),
          (e.prototype._wrapTimeFunction = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              var r = t[0];
              return (t[0] = Vu(r, { mechanism: { data: { function: As(e) }, handled: !0, type: "instrument" } })), e.apply(this, t);
            };
          }),
          (e.prototype._wrapRAF = function (e) {
            return function (t) {
              return e.call(
                this,
                Vu(t, { mechanism: { data: { function: "requestAnimationFrame", handler: As(e) }, handled: !0, type: "instrument" } })
              );
            };
          }),
          (e.prototype._wrapEventTarget = function (e) {
            var t = (0, as.Rf)(),
              n = t[e] && t[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              (Cs(n, "addEventListener", function (t) {
                return function (n, r, o) {
                  try {
                    "function" === typeof r.handleEvent &&
                      (r.handleEvent = Vu(r.handleEvent.bind(r), {
                        mechanism: { data: { function: "handleEvent", handler: As(r), target: e }, handled: !0, type: "instrument" }
                      }));
                  } catch (i) {}
                  return t.call(
                    this,
                    n,
                    Vu(r, {
                      mechanism: { data: { function: "addEventListener", handler: As(r), target: e }, handled: !0, type: "instrument" }
                    }),
                    o
                  );
                };
              }),
              Cs(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                  var o,
                    i = n;
                  try {
                    var a = null === (o = i) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                    a && e.call(this, t, a, r);
                  } catch (s) {}
                  return e.call(this, t, i, r);
                };
              }));
          }),
          (e.prototype._wrapXHR = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              var r = this;
              return (
                ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function (e) {
                  e in r &&
                    "function" === typeof r[e] &&
                    Cs(r, e, function (t) {
                      var n = { mechanism: { data: { function: e, handler: As(t) }, handled: !0, type: "instrument" } };
                      return t.__sentry_original__ && (n.mechanism.data.handler = As(t.__sentry_original__)), Vu(t, n);
                    });
                }),
                e.apply(this, t)
              );
            };
          }),
          (e.id = "TryCatch"),
          e
        );
      })(),
      qu = (function () {
        function e(t) {
          (this.name = e.id), (this._options = Da({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t));
        }
        return (
          (e.prototype.addSentryBreadcrumb = function (e) {
            this._options.sentry &&
              Vs().addBreadcrumb(
                {
                  category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                  event_id: e.event_id,
                  level: e.level,
                  message: (0, as.jH)(e)
                },
                { event: e }
              );
          }),
          (e.prototype.setupOnce = function () {
            var e = this;
            this._options.console &&
              ru({
                callback: function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  e._consoleBreadcrumb.apply(e, Ba(t));
                },
                type: "console"
              }),
              this._options.dom &&
                ru({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    e._domBreadcrumb.apply(e, Ba(t));
                  },
                  type: "dom"
                }),
              this._options.xhr &&
                ru({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    e._xhrBreadcrumb.apply(e, Ba(t));
                  },
                  type: "xhr"
                }),
              this._options.fetch &&
                ru({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    e._fetchBreadcrumb.apply(e, Ba(t));
                  },
                  type: "fetch"
                }),
              this._options.history &&
                ru({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    e._historyBreadcrumb.apply(e, Ba(t));
                  },
                  type: "history"
                });
          }),
          (e.prototype._consoleBreadcrumb = function (e) {
            var t = {
              category: "console",
              data: { arguments: e.args, logger: "console" },
              level: Ys.fromString(e.level),
              message: xs(e.args, " ")
            };
            if ("assert" === e.level) {
              if (!1 !== e.args[0]) return;
              (t.message = "Assertion failed: " + (xs(e.args.slice(1), " ") || "console.assert")), (t.data.arguments = e.args.slice(1));
            }
            Vs().addBreadcrumb(t, { input: e.args, level: e.level });
          }),
          (e.prototype._domBreadcrumb = function (e) {
            var t;
            try {
              t = e.event.target ? Es(e.event.target) : Es(e.event);
            } catch (n) {
              t = "<unknown>";
            }
            0 !== t.length && Vs().addBreadcrumb({ category: "ui." + e.name, message: t }, { event: e.event, name: e.name });
          }),
          (e.prototype._xhrBreadcrumb = function (e) {
            if (e.endTimestamp) {
              if (e.xhr.__sentry_own_request__) return;
              var t = e.xhr.__sentry_xhr__ || {},
                n = t.method,
                r = t.url,
                o = t.status_code,
                i = t.body;
              Vs().addBreadcrumb({ category: "xhr", data: { method: n, url: r, status_code: o }, type: "http" }, { xhr: e.xhr, input: i });
            } else;
          }),
          (e.prototype._fetchBreadcrumb = function (e) {
            e.endTimestamp &&
              ((e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method) ||
                (e.error
                  ? Vs().addBreadcrumb(
                      { category: "fetch", data: e.fetchData, level: Ys.Error, type: "http" },
                      { data: e.error, input: e.args }
                    )
                  : Vs().addBreadcrumb(
                      { category: "fetch", data: Da(Da({}, e.fetchData), { status_code: e.response.status }), type: "http" },
                      { input: e.args, response: e.response }
                    )));
          }),
          (e.prototype._historyBreadcrumb = function (e) {
            var t = (0, as.Rf)(),
              n = e.from,
              r = e.to,
              o = (0, as.en)(t.location.href),
              i = (0, as.en)(n),
              a = (0, as.en)(r);
            i.path || (i = o),
              o.protocol === a.protocol && o.host === a.host && (r = a.relative),
              o.protocol === i.protocol && o.host === i.host && (n = i.relative),
              Vs().addBreadcrumb({ category: "navigation", data: { from: n, to: r } });
          }),
          (e.id = "Breadcrumbs"),
          e
        );
      })(),
      Ku = (function () {
        function e(t) {
          void 0 === t && (t = {}), (this.name = e.id), (this._key = t.key || "cause"), (this._limit = t.limit || 5);
        }
        return (
          (e.prototype.setupOnce = function () {
            ls(function (t, n) {
              var r = Vs().getIntegration(e);
              return r ? r._handler(t, n) : t;
            });
          }),
          (e.prototype._handler = function (e, t) {
            if (!e.exception || !e.exception.values || !t || !ns(t.originalException, Error)) return e;
            var n = this._walkErrorTree(t.originalException, this._key);
            return (e.exception.values = Ba(n, e.exception.values)), e;
          }),
          (e.prototype._walkErrorTree = function (e, t, n) {
            if ((void 0 === n && (n = []), !ns(e[t], Error) || n.length + 1 >= this._limit)) return n;
            var r = xu(Su(e[t]));
            return this._walkErrorTree(e[t], t, Ba([r], n));
          }),
          (e.id = "LinkedErrors"),
          e
        );
      })(),
      $u = (0, as.Rf)(),
      Xu = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            ls(function (t) {
              var n, r, o;
              if (Vs().getIntegration(e)) {
                if (!$u.navigator && !$u.location && !$u.document) return t;
                var i =
                    (null === (n = t.request) || void 0 === n ? void 0 : n.url) ||
                    (null === (r = $u.location) || void 0 === r ? void 0 : r.href),
                  a = ($u.document || {}).referrer,
                  s = ($u.navigator || {}).userAgent,
                  u = Da(
                    Da(Da({}, null === (o = t.request) || void 0 === o ? void 0 : o.headers), a && { Referer: a }),
                    s && { "User-Agent": s }
                  ),
                  l = Da(Da({}, i && { url: i }), { headers: u });
                return Da(Da({}, t), { request: l });
              }
              return t;
            });
          }),
          (e.id = "UserAgent"),
          e
        );
      })(),
      Qu = {},
      Zu = (0, as.Rf)();
    Zu.Sentry && Zu.Sentry.Integrations && (Qu = Zu.Sentry.Integrations);
    var Ju = Da(Da(Da({}, Qu), e), t);
    var el = [];
    function tl(e) {
      var t = {};
      return (
        (function (e) {
          var t = (e.defaultIntegrations && Ha(e.defaultIntegrations)) || [],
            n = e.integrations,
            r = [];
          if (Array.isArray(n)) {
            var o = n.map(function (e) {
                return e.name;
              }),
              i = [];
            t.forEach(function (e) {
              -1 === o.indexOf(e.name) && -1 === i.indexOf(e.name) && (r.push(e), i.push(e.name));
            }),
              n.forEach(function (e) {
                -1 === i.indexOf(e.name) && (r.push(e), i.push(e.name));
              });
          } else "function" === typeof n ? ((r = n(t)), (r = Array.isArray(r) ? r : [r])) : (r = Ha(t));
          var a = r.map(function (e) {
              return e.name;
            }),
            s = "Debug";
          return -1 !== a.indexOf(s) && r.push.apply(r, Ha(r.splice(a.indexOf(s), 1))), r;
        })(e).forEach(function (e) {
          (t[e.name] = e),
            (function (e) {
              -1 === el.indexOf(e.name) && (e.setupOnce(ls, Vs), el.push(e.name), hs.log("Integration installed: " + e.name));
            })(e);
        }),
        t
      );
    }
    var nl = (function () {
        function e(e, t) {
          (this._integrations = {}),
            (this._processing = 0),
            (this._backend = new e(t)),
            (this._options = t),
            t.dsn && (this._dsn = new Bu(t.dsn));
        }
        return (
          (e.prototype.captureException = function (e, t, n) {
            var r = this,
              o = t && t.event_id;
            return (
              this._process(
                this._getBackend()
                  .eventFromException(e, t)
                  .then(function (e) {
                    return r._captureEvent(e, t, n);
                  })
                  .then(function (e) {
                    o = e;
                  })
              ),
              o
            );
          }),
          (e.prototype.captureMessage = function (e, t, n, r) {
            var o = this,
              i = n && n.event_id,
              a = Qa(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
            return (
              this._process(
                a
                  .then(function (e) {
                    return o._captureEvent(e, n, r);
                  })
                  .then(function (e) {
                    i = e;
                  })
              ),
              i
            );
          }),
          (e.prototype.captureEvent = function (e, t, n) {
            var r = t && t.event_id;
            return (
              this._process(
                this._captureEvent(e, t, n).then(function (e) {
                  r = e;
                })
              ),
              r
            );
          }),
          (e.prototype.captureSession = function (e) {
            e.release ? this._sendSession(e) : hs.warn("Discarded session because of missing release");
          }),
          (e.prototype.getDsn = function () {
            return this._dsn;
          }),
          (e.prototype.getOptions = function () {
            return this._options;
          }),
          (e.prototype.flush = function (e) {
            var t = this;
            return this._isClientProcessing(e).then(function (n) {
              return t
                ._getBackend()
                .getTransport()
                .close(e)
                .then(function (e) {
                  return n && e;
                });
            });
          }),
          (e.prototype.close = function (e) {
            var t = this;
            return this.flush(e).then(function (e) {
              return (t.getOptions().enabled = !1), e;
            });
          }),
          (e.prototype.setupIntegrations = function () {
            this._isEnabled() && (this._integrations = tl(this._options));
          }),
          (e.prototype.getIntegration = function (e) {
            try {
              return this._integrations[e.id] || null;
            } catch (t) {
              return hs.warn("Cannot retrieve integration " + e.id + " from the current Client"), null;
            }
          }),
          (e.prototype._updateSessionFromEvent = function (e, t) {
            var n,
              r,
              o,
              i = !1,
              a = !1,
              s = t.exception && t.exception.values;
            if (s) {
              a = !0;
              try {
                for (var u = Ga(s), l = u.next(); !l.done; l = u.next()) {
                  var c = l.value.mechanism;
                  if (c && !1 === c.handled) {
                    i = !0;
                    break;
                  }
                }
              } catch (h) {
                n = { error: h };
              } finally {
                try {
                  l && !l.done && (r = u.return) && r.call(u);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            var f = t.user;
            if (!e.userAgent) {
              var d = t.request ? t.request.headers : {};
              for (var p in d)
                if ("user-agent" === p.toLowerCase()) {
                  o = d[p];
                  break;
                }
            }
            e.update(ja(ja({}, i && { status: ps.Crashed }), { user: f, userAgent: o, errors: e.errors + Number(a || i) }));
          }),
          (e.prototype._sendSession = function (e) {
            this._getBackend().sendSession(e);
          }),
          (e.prototype._isClientProcessing = function (e) {
            var t = this;
            return new is(function (n) {
              var r = 0,
                o = setInterval(function () {
                  0 == t._processing ? (clearInterval(o), n(!0)) : ((r += 1), e && r >= e && (clearInterval(o), n(!1)));
                }, 1);
            });
          }),
          (e.prototype._getBackend = function () {
            return this._backend;
          }),
          (e.prototype._isEnabled = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
          }),
          (e.prototype._prepareEvent = function (e, t, n) {
            var r = this,
              o = this.getOptions().normalizeDepth,
              i = void 0 === o ? 3 : o,
              a = ja(ja({}, e), {
                event_id: e.event_id || (n && n.event_id ? n.event_id : (0, as.DM)()),
                timestamp: e.timestamp || (0, os.yW)()
              });
            this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
            var s = t;
            n && n.captureContext && (s = ss.clone(s).update(n.captureContext));
            var u = is.resolve(a);
            return (
              s && (u = s.applyToEvent(a, n)),
              u.then(function (e) {
                return "number" === typeof i && i > 0 ? r._normalizeEvent(e, i) : e;
              })
            );
          }),
          (e.prototype._normalizeEvent = function (e, t) {
            if (!e) return null;
            var n = ja(
              ja(
                ja(
                  ja(
                    ja({}, e),
                    e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map(function (e) {
                        return ja(ja({}, e), e.data && { data: Ls(e.data, t) });
                      })
                    }
                  ),
                  e.user && { user: Ls(e.user, t) }
                ),
                e.contexts && { contexts: Ls(e.contexts, t) }
              ),
              e.extra && { extra: Ls(e.extra, t) }
            );
            return e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace), n;
          }),
          (e.prototype._applyClientOptions = function (e) {
            var t = this.getOptions(),
              n = t.environment,
              r = t.release,
              o = t.dist,
              i = t.maxValueLength,
              a = void 0 === i ? 250 : i;
            "environment" in e || (e.environment = "environment" in t ? n : "production"),
              void 0 === e.release && void 0 !== r && (e.release = r),
              void 0 === e.dist && void 0 !== o && (e.dist = o),
              e.message && (e.message = Ts(e.message, a));
            var s = e.exception && e.exception.values && e.exception.values[0];
            s && s.value && (s.value = Ts(s.value, a));
            var u = e.request;
            u && u.url && (u.url = Ts(u.url, a));
          }),
          (e.prototype._applyIntegrationsMetadata = function (e) {
            var t = e.sdk,
              n = Object.keys(this._integrations);
            t && n.length > 0 && (t.integrations = n);
          }),
          (e.prototype._sendEvent = function (e) {
            this._getBackend().sendEvent(e);
          }),
          (e.prototype._captureEvent = function (e, t, n) {
            return this._processEvent(e, t, n).then(
              function (e) {
                return e.event_id;
              },
              function (e) {
                hs.error(e);
              }
            );
          }),
          (e.prototype._processEvent = function (e, t, n) {
            var r = this,
              o = this.getOptions(),
              i = o.beforeSend,
              a = o.sampleRate;
            if (!this._isEnabled()) return is.reject(new Du("SDK not enabled, will not send event."));
            var s = "transaction" === e.type;
            return !s && "number" === typeof a && Math.random() > a
              ? is.reject(new Du("Discarding event because it's not included in the random sample (sampling rate = " + a + ")"))
              : this._prepareEvent(e, n, t)
                  .then(function (e) {
                    if (null === e) throw new Du("An event processor returned null, will not send event.");
                    if ((t && t.data && !0 === t.data.__sentry__) || s || !i) return e;
                    var n = i(e, t);
                    if ("undefined" === typeof n) throw new Du("`beforeSend` method has to return `null` or a valid event.");
                    return ts(n)
                      ? n.then(
                          function (e) {
                            return e;
                          },
                          function (e) {
                            throw new Du("beforeSend rejected with " + e);
                          }
                        )
                      : n;
                  })
                  .then(function (e) {
                    if (null === e) throw new Du("`beforeSend` returned `null`, will not send event.");
                    var t = n && n.getSession && n.getSession();
                    return !s && t && r._updateSessionFromEvent(t, e), r._sendEvent(e), e;
                  })
                  .then(null, function (e) {
                    if (e instanceof Du) throw e;
                    throw (
                      (r.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
                      new Du(
                        "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                          e
                      ))
                    );
                  });
          }),
          (e.prototype._process = function (e) {
            var t = this;
            (this._processing += 1),
              e.then(
                function (e) {
                  return (t._processing -= 1), e;
                },
                function (e) {
                  return (t._processing -= 1), e;
                }
              );
          }),
          e
        );
      })(),
      rl = (function () {
        function e() {}
        return (
          (e.prototype.sendEvent = function (e) {
            return is.resolve({ reason: "NoopTransport: Event has been skipped because no Dsn is configured.", status: Oa.Skipped });
          }),
          (e.prototype.close = function (e) {
            return is.resolve(!0);
          }),
          e
        );
      })(),
      ol = (function () {
        function e(e) {
          (this._options = e),
            this._options.dsn || hs.warn("No DSN provided, backend will not do anything."),
            (this._transport = this._setupTransport());
        }
        return (
          (e.prototype.eventFromException = function (e, t) {
            throw new Du("Backend has to implement `eventFromException` method");
          }),
          (e.prototype.eventFromMessage = function (e, t, n) {
            throw new Du("Backend has to implement `eventFromMessage` method");
          }),
          (e.prototype.sendEvent = function (e) {
            this._transport.sendEvent(e).then(null, function (e) {
              hs.error("Error while sending event: " + e);
            });
          }),
          (e.prototype.sendSession = function (e) {
            this._transport.sendSession
              ? this._transport.sendSession(e).then(null, function (e) {
                  hs.error("Error while sending session: " + e);
                })
              : hs.warn("Dropping session because custom transport doesn't implement sendSession");
          }),
          (e.prototype.getTransport = function () {
            return this._transport;
          }),
          (e.prototype._setupTransport = function () {
            return new rl();
          }),
          e
        );
      })();
    function il(e, t) {
      return {
        body: JSON.stringify({ sent_at: new Date().toISOString() }) + "\n" + JSON.stringify({ type: "session" }) + "\n" + JSON.stringify(e),
        type: "session",
        url: t.getEnvelopeEndpointWithUrlEncodedAuth()
      };
    }
    function al(e, t) {
      var n = e.tags || {},
        r = n.__sentry_samplingMethod,
        o = n.__sentry_sampleRate,
        i = (function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          }
          return n;
        })(n, ["__sentry_samplingMethod", "__sentry_sampleRate"]);
      e.tags = i;
      var a = "transaction" === e.type,
        s = {
          body: JSON.stringify(e),
          type: e.type || "event",
          url: a ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
        };
      if (a) {
        var u =
          JSON.stringify({ event_id: e.event_id, sent_at: new Date().toISOString() }) +
          "\n" +
          JSON.stringify({ type: e.type, sample_rates: [{ id: r, rate: o }] }) +
          "\n" +
          s.body;
        s.body = u;
      }
      return s;
    }
    var sl = (function () {
        function e(e) {
          (this._limit = e), (this._buffer = []);
        }
        return (
          (e.prototype.isReady = function () {
            return void 0 === this._limit || this.length() < this._limit;
          }),
          (e.prototype.add = function (e) {
            var t = this;
            return this.isReady()
              ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
                e
                  .then(function () {
                    return t.remove(e);
                  })
                  .then(null, function () {
                    return t.remove(e).then(null, function () {});
                  }),
                e)
              : is.reject(new Du("Not adding Promise due to buffer limit reached."));
          }),
          (e.prototype.remove = function (e) {
            return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
          }),
          (e.prototype.length = function () {
            return this._buffer.length;
          }),
          (e.prototype.drain = function (e) {
            var t = this;
            return new is(function (n) {
              var r = setTimeout(function () {
                e && e > 0 && n(!1);
              }, e);
              is.all(t._buffer)
                .then(function () {
                  clearTimeout(r), n(!0);
                })
                .then(null, function () {
                  n(!0);
                });
            });
          }),
          e
        );
      })(),
      ul = (function () {
        function e(e) {
          (this.options = e),
            (this._buffer = new sl(30)),
            (this._rateLimits = {}),
            (this._api = new Uu(this.options.dsn)),
            (this.url = this._api.getStoreEndpointWithUrlEncodedAuth());
        }
        return (
          (e.prototype.sendEvent = function (e) {
            throw new Du("Transport Class has to implement `sendEvent` method");
          }),
          (e.prototype.close = function (e) {
            return this._buffer.drain(e);
          }),
          (e.prototype._handleResponse = function (e) {
            var t = e.requestType,
              n = e.response,
              r = e.headers,
              o = e.resolve,
              i = e.reject,
              a = Oa.fromHttpCode(n.status);
            this._handleRateLimit(r) && hs.warn("Too many requests, backing off until: " + this._disabledUntil(t)),
              a !== Oa.Success ? i(n) : o({ status: a });
          }),
          (e.prototype._disabledUntil = function (e) {
            return this._rateLimits[e] || this._rateLimits.all;
          }),
          (e.prototype._isRateLimited = function (e) {
            return this._disabledUntil(e) > new Date(Date.now());
          }),
          (e.prototype._handleRateLimit = function (e) {
            var t,
              n,
              r,
              o,
              i = Date.now(),
              a = e["x-sentry-rate-limits"],
              s = e["retry-after"];
            if (a) {
              try {
                for (var u = Ma(a.trim().split(",")), l = u.next(); !l.done; l = u.next()) {
                  var c = l.value.split(":", 2),
                    f = parseInt(c[0], 10),
                    d = 1e3 * (isNaN(f) ? 60 : f);
                  try {
                    for (var p = ((r = void 0), Ma(c[1].split(";"))), h = p.next(); !h.done; h = p.next()) {
                      var m = h.value;
                      this._rateLimits[m || "all"] = new Date(i + d);
                    }
                  } catch (v) {
                    r = { error: v };
                  } finally {
                    try {
                      h && !h.done && (o = p.return) && o.call(p);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              } catch (y) {
                t = { error: y };
              } finally {
                try {
                  l && !l.done && (n = u.return) && n.call(u);
                } finally {
                  if (t) throw t.error;
                }
              }
              return !0;
            }
            return !!s && ((this._rateLimits.all = new Date(i + (0, as.JY)(i, s))), !0);
          }),
          e
        );
      })(),
      ll = (0, as.Rf)(),
      cl = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ka(t, e),
          (t.prototype.sendEvent = function (e) {
            return this._sendRequest(al(e, this._api), e);
          }),
          (t.prototype.sendSession = function (e) {
            return this._sendRequest(il(e, this._api), e);
          }),
          (t.prototype._sendRequest = function (e, t) {
            var n = this;
            if (this._isRateLimited(e.type))
              return Promise.reject({
                event: t,
                type: e.type,
                reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                status: 429
              });
            var r = { body: e.body, method: "POST", referrerPolicy: Qs() ? "origin" : "" };
            return (
              void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
              void 0 !== this.options.headers && (r.headers = this.options.headers),
              this._buffer.add(
                new is(function (t, o) {
                  ll.fetch(e.url, r)
                    .then(function (r) {
                      var i = {
                        "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": r.headers.get("Retry-After")
                      };
                      n._handleResponse({ requestType: e.type, response: r, headers: i, resolve: t, reject: o });
                    })
                    .catch(o);
                })
              )
            );
          }),
          t
        );
      })(ul),
      fl = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ka(t, e),
          (t.prototype.sendEvent = function (e) {
            return this._sendRequest(al(e, this._api), e);
          }),
          (t.prototype.sendSession = function (e) {
            return this._sendRequest(il(e, this._api), e);
          }),
          (t.prototype._sendRequest = function (e, t) {
            var n = this;
            return this._isRateLimited(e.type)
              ? Promise.reject({
                  event: t,
                  type: e.type,
                  reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                  status: 429
                })
              : this._buffer.add(
                  new is(function (t, r) {
                    var o = new XMLHttpRequest();
                    for (var i in ((o.onreadystatechange = function () {
                      if (4 === o.readyState) {
                        var i = {
                          "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                          "retry-after": o.getResponseHeader("Retry-After")
                        };
                        n._handleResponse({ requestType: e.type, response: o, headers: i, resolve: t, reject: r });
                      }
                    }),
                    o.open("POST", e.url),
                    n.options.headers))
                      n.options.headers.hasOwnProperty(i) && o.setRequestHeader(i, n.options.headers[i]);
                    o.send(e.body);
                  })
                );
          }),
          t
        );
      })(ul),
      dl = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          ka(t, e),
          (t.prototype.eventFromException = function (e, t) {
            return (function (e, t, n) {
              var r = Nu(t, (n && n.syntheticException) || void 0, { attachStacktrace: e.attachStacktrace });
              return (
                (0, as.EG)(r, { handled: !0, type: "generic" }),
                (r.level = Ys.Error),
                n && n.event_id && (r.event_id = n.event_id),
                is.resolve(r)
              );
            })(this._options, e, t);
          }),
          (t.prototype.eventFromMessage = function (e, t, n) {
            return (
              void 0 === t && (t = Ys.Info),
              (function (e, t, n, r) {
                void 0 === n && (n = Ys.Info);
                var o = Ou(t, (r && r.syntheticException) || void 0, { attachStacktrace: e.attachStacktrace });
                return (o.level = n), r && r.event_id && (o.event_id = r.event_id), is.resolve(o);
              })(this._options, e, t, n)
            );
          }),
          (t.prototype._setupTransport = function () {
            if (!this._options.dsn) return e.prototype._setupTransport.call(this);
            var t = Da(Da({}, this._options.transportOptions), { dsn: this._options.dsn });
            return this._options.transport ? new this._options.transport(t) : $s() ? new cl(t) : new fl(t);
          }),
          t
        );
      })(ol),
      pl = "5.30.0",
      hl = (function (e) {
        function t(t) {
          return void 0 === t && (t = {}), e.call(this, dl, t) || this;
        }
        return (
          ka(t, e),
          (t.prototype.showReportDialog = function (e) {
            void 0 === e && (e = {}),
              (0, as.Rf)().document &&
                (this._isEnabled()
                  ? Hu(Da(Da({}, e), { dsn: e.dsn || this.getDsn() }))
                  : hs.error("Trying to call showReportDialog with Sentry Client disabled"));
          }),
          (t.prototype._prepareEvent = function (t, n, r) {
            return (
              (t.platform = t.platform || "javascript"),
              (t.sdk = Da(Da({}, t.sdk), {
                name: "sentry.javascript.browser",
                packages: Ba((t.sdk && t.sdk.packages) || [], [{ name: "npm:@sentry/browser", version: pl }]),
                version: pl
              })),
              e.prototype._prepareEvent.call(this, t, n, r)
            );
          }),
          (t.prototype._sendEvent = function (t) {
            var n = this.getIntegration(qu);
            n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t);
          }),
          t
        );
      })(nl),
      ml = [new Ks(), new Ua(), new Yu(), new qu(), new Wu(), new Ku(), new Xu()];
    function vl(e) {
      if ((void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = ml), void 0 === e.release)) {
        var t = (0, as.Rf)();
        t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id);
      }
      void 0 === e.autoSessionTracking && (e.autoSessionTracking = !1),
        (function (e, t) {
          !0 === t.debug && hs.enable();
          var n = Vs(),
            r = new e(t);
          n.bindClient(r);
        })(hl, e),
        e.autoSessionTracking &&
          (function () {
            var e = (0, as.Rf)(),
              t = Vs(),
              n = "complete" === document.readyState,
              r = !1,
              o = function () {
                r && n && t.endSession();
              },
              i = function t() {
                (n = !0), o(), e.removeEventListener("load", t);
              };
            t.startSession(), n || e.addEventListener("load", i);
            try {
              var a = new PerformanceObserver(function (e, t) {
                  e.getEntries().forEach(function (e) {
                    "first-contentful-paint" === e.name && e.startTime < s && (t.disconnect(), (r = !0), o());
                  });
                }),
                s = "hidden" === document.visibilityState ? 0 : 1 / 0;
              document.addEventListener(
                "visibilitychange",
                function (e) {
                  s = Math.min(s, e.timeStamp);
                },
                { once: !0 }
              ),
                a.observe({ type: "paint", buffered: !0 });
            } catch (u) {
              (r = !0), o();
            }
          })();
    }
    function yl(e, t, n) {
      return (
        (yl = Fn()
          ? Reflect.construct.bind()
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var o = new (Function.bind.apply(e, r))();
              return n && P(o, n.prototype), o;
            }),
        yl.apply(null, arguments)
      );
    }
    function gl(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (
        (gl = function (e) {
          if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
          var n;
          if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return yl(e, arguments, Mn(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })),
            P(r, e)
          );
        }),
        gl(e)
      );
    }
    var _l = (function (e) {
        Dn(n, e);
        var t = Un(n);
        function n() {
          return Rn(this, n), t.apply(this, arguments);
        }
        return (
          Ln(n, [
            {
              key: "toString",
              value: function () {
                return this.message;
              }
            }
          ]),
          n
        );
      })(gl(Error)),
      El = (function (e) {
        Dn(n, e);
        var t = Un(n);
        function n(e) {
          var r;
          return Rn(this, n), ((r = t.call(this, e.id)).messgeDesc = void 0), (r.messgeDesc = e), r;
        }
        return (
          Ln(n, [
            {
              key: "getMessageDescriptor",
              value: function () {
                return this.messgeDesc;
              }
            }
          ]),
          n
        );
      })(gl(Error)),
      bl = (function (e) {
        Dn(n, e);
        var t = Un(n);
        function n() {
          return Rn(this, n), Bn(t.call(this), new Error("401 Unauthorized"));
        }
        return Ln(n);
      })(gl(Error)),
      Sl = (function (e) {
        Dn(n, e);
        var t = Un(n);
        function n() {
          return Rn(this, n), Bn(t.call(this), new Error("403 Forbidden"));
        }
        return Ln(n);
      })(gl(Error)),
      wl = (function (e) {
        Dn(n, e);
        var t = Un(n);
        function n() {
          return Rn(this, n), t.apply(this, arguments);
        }
        return Ln(n);
      })(gl(Error)),
      Al = (function () {
        function e(t) {
          Rn(this, e), (this.captureUrl = !1), (this.name = e.id), (this.captureUrl = t);
        }
        return (
          Ln(e, [
            {
              key: "setupOnce",
              value: function (t, n) {
                var r = this;
                t(function (t) {
                  if (n().getIntegration(e) && !t.request) {
                    var o = { headers: { "User-Agent": navigator.userAgent } };
                    return r.captureUrl && (o.url = location.protocol + location.host + location.pathname), u(u({}, t), {}, { request: o });
                  }
                  return t;
                });
              }
            }
          ]),
          e
        );
      })();
    Al.id = "CaptureLocation";
    var Tl = "https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@dummy.com/1";
    function xl(e) {
      return (function () {
        function t() {
          Rn(this, t);
        }
        return (
          Ln(t, [
            {
              key: "sendEvent",
              value: function (t) {
                return e.dispatch(ze.reportErrorEvent(t)), Promise.resolve({ status: Oa.Success });
              }
            },
            {
              key: "close",
              value: function () {
                return Promise.resolve(!0);
              }
            }
          ]),
          t
        );
      })();
    }
    function Il(e, t) {
      var n = [new Al(t)];
      return e && n.push(new Ju.Breadcrumbs({ console: !1, history: !1, fetch: !1, xhr: !1, sentry: !1, dom: !0 })), n;
    }
    function Cl(e) {
      var t;
      (t = e) instanceof _l || t instanceof wl || t instanceof El || t instanceof bl || t instanceof Sl || ku(e);
    }
    function Nl(e, t, n, r) {
      var o = function () {
        return !r || r(e.getState());
      };
      return {
        reportError: function (e) {
          o() && Cl(e.payload);
        },
        reportErrorEvent: (function (e) {
          function t(t) {
            return e.apply(this, arguments);
          }
          return (
            (t.toString = function () {
              return e.toString();
            }),
            t
          );
        })(function (e) {
          if (n) return t(e);
          o() && Ru("captureEvent", e.payload);
        }),
        handleAction: function (e) {
          try {
            return t(e);
          } catch (n) {
            o() && Cl(n);
          }
        }
      };
    }
    function Ol(e) {
      var t = e.dsn,
        n = e.debug,
        r = e.release,
        o = e.enabledSelector,
        i = e.allowBreadcrumbs,
        a = void 0 !== i && i,
        s = e.captureUrl,
        u = void 0 !== s && s;
      return function (e) {
        return function (i) {
          var s = !t;
          vl({
            dsn: s ? Tl : t,
            debug: n,
            release: r,
            maxBreadcrumbs: 10,
            transport: s ? xl(e) : cl,
            defaultIntegrations: !1,
            integrations: Il(a, u)
          });
          var l = Nl(e, i, s, o);
          return function (e) {
            switch (e.type) {
              case We.REPORT_ERROR:
                return l.reportError(e);
              case We.REPORT_ERROR_EVENT:
                return l.reportErrorEvent(e);
              default:
                return Ru("addBreadcrumb", { category: "redux", message: e.type }), l.handleAction(e);
            }
          };
        };
      };
    }
    var Pl = { position: "absolute", height: "100vh", width: "100vw", zIndex: 2147483647, borderRadius: 4 },
      Rl = { position: "absolute", top: 0, left: 0 };
    function kl(e, t) {
      if (e.show && e && e.height > 0) {
        var n = e.icon.left + 8;
        return u(
          u({}, Pl),
          {},
          {
            background: t ? "radial-gradient(circle at ".concat(n, "px 0%, #fbebeb 1.47%, #f9fafb 20.77%)") : void 0,
            border: "1px solid #d5d9de",
            boxShadow: "0 2px 4px rgba(29, 48, 73, 0.08), 0 2px 4px rgba(29, 48, 73, 0.08), 0 4px 8px rgba(29, 48, 73, 0.04)"
          }
        );
      }
      return Pl;
    }
    function Ll(e) {
      return e.show && e.height > 0 && e.icon.left > 0;
    }
    function Dl(e) {
      return e.icon.left + 20 > 280 ? Math.max(e.icon.left + 20, e.width) : Math.max(280, e.width);
    }
    var Ml = function () {
        var e = ha(),
          t = Dt(function (e) {
            return e.infieldContainer;
          }),
          n = Dt(function (e) {
            return e.isLoggedIn;
          }),
          r = Dt(function (e) {
            return e.hasSectionOnTab;
          }),
          o = Dt(function (e) {
            return e.authPushtotpData;
          }),
          i = (0, C.useRef)(null);
        wr(i);
        var a = "webclient-infield.html",
          s = e.getUrl(a);
        return a === s
          ? null
          : r && t
          ? (0, On.jsx)(ma, {
              children: (0, On.jsx)("div", {
                "data-lastpass-infield": !0,
                ref: i,
                style: Rl,
                children: (0, On.jsx)(Sr.Z, {
                  children: (0, On.jsxs)("div", {
                    style: u(
                      u({}, kl(t, n)),
                      {},
                      {
                        top: t.position.top,
                        left: t.position.left,
                        maxHeight: t.show ? t.height : 0,
                        maxWidth: Dl(t),
                        minWidth: o ? 315 : "auto",
                        marginTop: 10 - (t.position.height - t.icon.height) / 2
                      }
                    ),
                    children: [
                      (0, On.jsx)("div", {
                        style: {
                          left: t.icon.left - 1,
                          display: Ll(t) ? "block" : "none",
                          position: "absolute",
                          overflow: "hidden",
                          bottom: "100%",
                          width: 20,
                          height: 10
                        },
                        children: (0, On.jsx)("div", {
                          "data-lastpass-infield-caret": !0,
                          style: {
                            position: "absolute",
                            width: "16px",
                            height: "16px",
                            borderRadius: "2px",
                            borderColor: "#d5d9de",
                            borderStyle: "solid",
                            borderWidth: "1px 0 0 1px",
                            boxSizing: "border-box",
                            top: "4px",
                            left: "2px",
                            background: n ? "linear-gradient(0deg, #ffdbdb 10.47%, #fbebeb 6.47%)" : "#f7f9fc",
                            transform: "rotate(45deg)"
                          }
                        })
                      }),
                      (0, On.jsx)("iframe", {
                        "data-lastpass-iframe": !0,
                        allow: "clipboard-write",
                        src: s,
                        style: { border: "none", height: "100%", width: "100%" }
                      })
                    ]
                  })
                })
              })
            })
          : null;
      },
      Fl = 400,
      Bl = { position: "absolute", height: "100vh", width: "100vw", zIndex: 2147483647, borderRadius: 4 },
      Ul = { position: "absolute", top: 0, left: 0 },
      jl = { position: "fixed", width: "100%", height: "100%", zIndex: 999, backdropFilter: "blur(4px)", opacity: 1 };
    function Gl(e) {
      return e === va.AlreadyLoggedIn ? { position: "relative", height: "100vh", width: "100vw" } : Ul;
    }
    function Vl(e, t) {
      return t === va.AlreadyLoggedIn
        ? u(u({}, Bl), {}, { maxWidth: Math.max(Fl, e.width), maxHeight: 200, top: 0, left: 0, right: 0, bottom: 0, margin: "auto" })
        : u(
            u({}, Bl),
            {},
            {
              top: e.position.top + e.icon.top,
              left: e.position.left + e.position.width / 2 - 200,
              maxHeight: "fit-content",
              maxWidth: Math.max(Fl, e.width)
            }
          );
    }
    var Hl = function () {
        var e = ha(),
          t = (0, C.useRef)(null),
          n = Dt(function (e) {
            return e.infieldContainer;
          }),
          r = Dt(function (e) {
            return e.onboardingStep;
          }),
          o = (function () {
            var e = p((0, C.useState)(!1), 2),
              t = e[0],
              n = e[1],
              r = Dt(function (e) {
                return e.onboardingStep;
              });
            return (
              (0, C.useEffect)(
                function () {
                  if (r !== va.AlreadyLoggedIn) {
                    var e = setTimeout(function () {
                      n(!0);
                    }, 1500);
                    return function () {
                      return clearTimeout(e);
                    };
                  }
                },
                [r]
              ),
              !t
            );
          })();
        return (
          wr(t),
          (0, On.jsxs)(ma, {
            children: [
              (0, On.jsx)("div", {
                style: u(u({}, jl), !o && { transition: "visibility 0s 1.5s, opacity 1s linear", opacity: 0, visibility: "hidden" })
              }),
              (0, On.jsx)("div", {
                "data-lastpass-infield": !0,
                ref: t,
                style: Gl(r),
                children: (0, On.jsx)(Sr.Z, {
                  children: (0, On.jsx)("div", {
                    style: n ? Vl(n, r) : void 0,
                    children: (0, On.jsx)("iframe", {
                      "data-lastpass-iframe": !0,
                      allow: "clipboard-write",
                      src: e.getUrl("webclient-infield.html"),
                      style: { border: "none", height: "100%", width: "100%" }
                    })
                  })
                })
              })
            ]
          })
        );
      },
      Wl = function () {
        var e = Dt(function (e) {
            return e.onboardingStep;
          }),
          t = Dt(function (e) {
            return e.inContextOnboarding;
          });
        return t && t.show && (e === va.AlreadyLoggedIn || e === va.SiteLanding) ? (0, On.jsx)(Hl, {}) : (0, On.jsx)(Ml, {});
      },
      zl = ["allowSavePrompt", "disableOnDisconnect", "infieldContainer"];
    function Yl() {
      return ql.apply(this, arguments);
    }
    function ql() {
      return (ql = A(
        S().mark(function e() {
          return S().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!Ca(Sa)) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", Promise.resolve(Sa));
                case 4:
                  return e.abrupt(
                    "return",
                    new Promise(function (e) {
                      Aa(function t(n) {
                        Ca(n) && (e(n), Ta(t));
                      });
                    })
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Kl() {
      return $l.apply(this, arguments);
    }
    function $l() {
      return ($l = A(
        S().mark(function e() {
          return S().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!document.body) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", Promise.resolve());
                case 4:
                  return e.abrupt(
                    "return",
                    new Promise(function (e) {
                      window.addEventListener("DOMContentLoaded", e);
                    })
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Xl() {
      return !!document.querySelector("input") || (!!document.querySelector("iframe") && window.innerHeight > 0 && window.innerWidth > 0);
    }
    function Ql() {
      return Zl.apply(this, arguments);
    }
    function Zl() {
      return (Zl = A(
        S().mark(function e() {
          return S().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (window !== top && !Xl()) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", Promise.resolve());
                case 4:
                  return e.abrupt(
                    "return",
                    new Promise(function (e) {
                      var t = new MutationObserver(function () {
                        Xl() && (e(), t.disconnect());
                      });
                      t.observe(document, { childList: !0, subtree: !0 });
                    })
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Jl(e, t) {
      t !== Ea.FROZEN && (window === top || t === Ea.ACTIVE) && e.dispatch(Tt.stateChange(t));
    }
    function ec() {
      return (
        (ec = A(
          S().mark(function e(t) {
            var n,
              r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p,
              h,
              v,
              y,
              g,
              _ = arguments;
            return S().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((g = function () {
                        return (0, On.jsx)(pa, {
                          value: u.extensionApi.general,
                          children: (0, On.jsx)(G, {
                            store: v,
                            children: (0, On.jsx)(jn, {
                              children: (0, On.jsxs)(_a, {
                                disableOnDisconnect: i,
                                children: [(0, On.jsx)(na, { pathname: u.pathname, href: u.href }), (0, On.jsx)(y, {})]
                              })
                            })
                          })
                        });
                      }),
                      (y = function () {
                        return Dt(function (e) {
                          return e.messaging.connected;
                        })
                          ? (0, On.jsxs)(On.Fragment, { children: [r && (0, On.jsx)(ga, {}), s] })
                          : null;
                      }),
                      (n = t.allowSavePrompt),
                      (r = void 0 === n || n),
                      (o = t.disableOnDisconnect),
                      (i = void 0 === o || o),
                      (a = t.infieldContainer),
                      (s = void 0 === a ? C.createElement(Wl) : a),
                      (u = m(t, zl)),
                      (l = _.length > 1 && void 0 !== _[1] ? _[1] : []),
                      !window.initialized)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    return (window.initialized = !0), (e.next = 9), Yl();
                  case 9:
                    return (c = e.sent), (e.next = 12), Ql();
                  case 12:
                    return (
                      (e.next = 14),
                      u.stateSync(function () {
                        return {
                          filterType: De.ContentScript,
                          pageState: Sa,
                          hierarchy: Yn(),
                          pageLanguage: In(document.documentElement.lang)
                        };
                      })
                    );
                  case 14:
                    return (
                      (f = e.sent),
                      (d = Ol({ release: "4.125.0", debug: !1 })),
                      (p = Qe({
                        passThrough: !0,
                        enabledSelector: function (e) {
                          return e.repromptSettings.improve;
                        }
                      })),
                      (h = [d, p, Re(f.background.dispatch)].concat(I(l))),
                      (v = ue(Le(f.background.initialState, Pa), de.apply(void 0, I(h)))),
                      f.initialize(v.dispatch, v.getState),
                      p.initialize({
                        segment: function (e, t) {
                          v.dispatch(Ve({ event: e, properties: t }));
                        }
                      }),
                      (Ca(Sa) === Ca(c) && Sa !== Ea.ACTIVE) || Jl(v, Sa),
                      Aa(function (e, t) {
                        (Ca(e) === Ca(t) && e !== Ea.ACTIVE) || Jl(v, e);
                      }),
                      (e.next = 26),
                      Kl()
                    );
                  case 26:
                    return N.render((0, On.jsx)(g, {}), document.createElement("div")), e.abrupt("return", { store: v });
                  case 28:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ec.apply(this, arguments)
      );
    }
    !(function (e) {
      ec.apply(this, arguments);
    })({
      stateSync: function (e) {
        var t = (function (e) {
          return "function" === typeof e ? e() : e;
        })(e);
        return new Promise(function (e) {
          var n;
          "undefined" !== typeof browser && (n = window === top ? "0" : (0, l.v4)());
          var r = chrome.runtime.connect({ name: "sync" });
          r.onMessage.addListener(function t(n) {
            r.onMessage.removeListener(t),
              e({
                background: {
                  dispatch: function (e) {
                    try {
                      r.postMessage(e);
                    } catch (t) {}
                  },
                  initialState: n
                },
                initialize: function (e) {
                  r.onDisconnect.addListener(function () {
                    e({ type: c, payload: !1 });
                  }),
                    r.onMessage.addListener(e);
                }
              });
          }),
            r.postMessage(u(u({}, t), {}, { initialize: !0, frameId: n }));
        });
      },
      extensionApi: x
    });
  })(),
    (webClient = r);
})();
