!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ScreenShotReader = t())
    : (e.ScreenShotReader = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 37))
    );
  })([
    function (e, t) {
      var r,
        n,
        i = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          r = o;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
      })();
      var c,
        u = [],
        l = !1,
        h = -1;
      function f() {
        l && c && ((l = !1), c.length ? (u = c.concat(u)) : (h = -1), u.length && p());
      }
      function p() {
        if (!l) {
          var e = a(f);
          l = !0;
          for (var t = u.length; t; ) {
            for (c = u, u = []; ++h < t; ) c && c[h].run();
            (h = -1), (t = u.length);
          }
          (c = null),
            (l = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === s || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function d(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new d(e, t)), 1 !== u.length || l || a(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = m),
        (i.addListener = m),
        (i.once = m),
        (i.off = m),
        (i.removeListener = m),
        (i.removeAllListeners = m),
        (i.emit = m),
        (i.prependListener = m),
        (i.prependOnceListener = m),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var n = r(17),
          i = r(18),
          o = r(19);
        function s() {
          return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(e, t) {
          if (s() < t) throw new RangeError("Invalid typed array length");
          return (
            c.TYPED_ARRAY_SUPPORT ? ((e = new Uint8Array(t)).__proto__ = c.prototype) : (null === e && (e = new c(t)), (e.length = t)), e
          );
        }
        function c(e, t, r) {
          if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, r);
          if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return h(this, e);
          }
          return u(this, e, t, r);
        }
        function u(e, t, r, n) {
          if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, r, n) {
                if ((t.byteLength, r < 0 || t.byteLength < r)) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                c.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = c.prototype) : (e = f(e, t));
                return e;
              })(e, t, r, n)
            : "string" == typeof t
            ? (function (e, t, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | d(t, r),
                  i = (e = a(e, n)).write(t, r);
                i !== n && (e = e.slice(0, i));
                return e;
              })(e, t, r)
            : (function (e, t) {
                if (c.isBuffer(t)) {
                  var r = 0 | p(t.length);
                  return 0 === (e = a(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
                }
                if (t) {
                  if (("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || "length" in t)
                    return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : f(e, t);
                  if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              })(e, t);
        }
        function l(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative');
        }
        function h(e, t) {
          if ((l(t), (e = a(e, t < 0 ? 0 : 0 | p(t))), !c.TYPED_ARRAY_SUPPORT)) for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
        function f(e, t) {
          var r = t.length < 0 ? 0 : 0 | p(t.length);
          e = a(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function p(e) {
          if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
          return 0 | e;
        }
        function d(e, t) {
          if (c.isBuffer(e)) return e.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return V(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return H(e).length;
              default:
                if (n) return V(e).length;
                (t = ("" + t).toLowerCase()), (n = !0);
            }
        }
        function m(e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function g(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof t && (t = c.from(t, n)), c.isBuffer(t))) return 0 === t.length ? -1 : y(e, t, r, n, i);
          if ("number" == typeof t)
            return (
              (t &= 255),
              c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : y(e, [t], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function y(e, t, r, n, i) {
          var o,
            s = 1,
            a = e.length,
            c = t.length;
          if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (a /= 2), (c /= 2), (r /= 2);
          }
          function u(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (i) {
            var l = -1;
            for (o = r; o < a; o++)
              if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === c)) return l * s;
              } else -1 !== l && (o -= o - l), (l = -1);
          } else
            for (r + c > a && (r = a - c), o = r; o >= 0; o--) {
              for (var h = !0, f = 0; f < c; f++)
                if (u(e, o + f) !== u(t, f)) {
                  h = !1;
                  break;
                }
              if (h) return o;
            }
          return -1;
        }
        function v(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          var o = t.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          n > o / 2 && (n = o / 2);
          for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[r + s] = a;
          }
          return s;
        }
        function b(e, t, r, n) {
          return q(V(t, e.length - r), e, r, n);
        }
        function w(e, t, r, n) {
          return q(
            (function (e) {
              for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
              return t;
            })(t),
            e,
            r,
            n
          );
        }
        function S(e, t, r, n) {
          return w(e, t, r, n);
        }
        function x(e, t, r, n) {
          return q(H(t), e, r, n);
        }
        function E(e, t, r, n) {
          return q(
            (function (e, t) {
              for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
              return o;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function k(e, t, r) {
          return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
        }
        function A(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], i = t; i < r; ) {
            var o,
              s,
              a,
              c,
              u = e[i],
              l = null,
              h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + h <= r)
              switch (h) {
                case 1:
                  u < 128 && (l = u);
                  break;
                case 2:
                  128 == (192 & (o = e[i + 1])) && (c = ((31 & u) << 6) | (63 & o)) > 127 && (l = c);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 &&
                      (c < 55296 || c > 57343) &&
                      (l = c);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (s = e[i + 2]),
                    (a = e[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & s) &&
                      128 == (192 & a) &&
                      (c = ((15 & u) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
                      c < 1114112 &&
                      (l = c);
              }
            null === l
              ? ((l = 65533), (h = 1))
              : l > 65535 && ((l -= 65536), n.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
              n.push(l),
              (i += h);
          }
          return (function (e) {
            var t = e.length;
            if (t <= P) return String.fromCharCode.apply(String, e);
            var r = "",
              n = 0;
            for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += P)));
            return r;
          })(n);
        }
        (t.Buffer = c),
          (t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return c.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (c.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        }
                      }),
                      42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = s()),
          (c.poolSize = 8192),
          (c._augment = function (e) {
            return (e.__proto__ = c.prototype), e;
          }),
          (c.from = function (e, t, r) {
            return u(null, e, t, r);
          }),
          c.TYPED_ARRAY_SUPPORT &&
            ((c.prototype.__proto__ = Uint8Array.prototype),
            (c.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              c[Symbol.species] === c &&
              Object.defineProperty(c, Symbol.species, { value: null, configurable: !0 })),
          (c.alloc = function (e, t, r) {
            return (function (e, t, r, n) {
              return l(t), t <= 0 ? a(e, t) : void 0 !== r ? ("string" == typeof n ? a(e, t).fill(r, n) : a(e, t).fill(r)) : a(e, t);
            })(null, e, t, r);
          }),
          (c.allocUnsafe = function (e) {
            return h(null, e);
          }),
          (c.allocUnsafeSlow = function (e) {
            return h(null, e);
          }),
          (c.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (c.compare = function (e, t) {
            if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
              if (e[i] !== t[i]) {
                (r = e[i]), (n = t[i]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (c.isEncoding = function (e) {
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
          (c.concat = function (e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return c.alloc(0);
            var r;
            if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = c.allocUnsafe(t),
              i = 0;
            for (r = 0; r < e.length; ++r) {
              var s = e[r];
              if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
              s.copy(n, i), (i += s.length);
            }
            return n;
          }),
          (c.byteLength = d),
          (c.prototype._isBuffer = !0),
          (c.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) m(this, t, t + 1);
            return this;
          }),
          (c.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
            return this;
          }),
          (c.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
            return this;
          }),
          (c.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? A(this, 0, e)
              : function (e, t, r) {
                  var n = !1;
                  if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
                  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                  if ((r >>>= 0) <= (t >>>= 0)) return "";
                  for (e || (e = "utf8"); ; )
                    switch (e) {
                      case "hex":
                        return R(this, t, r);
                      case "utf8":
                      case "utf-8":
                        return A(this, t, r);
                      case "ascii":
                        return C(this, t, r);
                      case "latin1":
                      case "binary":
                        return T(this, t, r);
                      case "base64":
                        return k(this, t, r);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return _(this, t, r);
                      default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        (e = (e + "").toLowerCase()), (n = !0);
                    }
                }.apply(this, arguments);
          }),
          (c.prototype.equals = function (e) {
            if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === c.compare(this, e);
          }),
          (c.prototype.inspect = function () {
            var e = "",
              r = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 && ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")), this.length > r && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (c.prototype.compare = function (e, t, r, n, i) {
            if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (n >>>= 0),
                s = (r >>>= 0) - (t >>>= 0),
                a = Math.min(o, s),
                u = this.slice(n, i),
                l = e.slice(t, r),
                h = 0;
              h < a;
              ++h
            )
              if (u[h] !== l[h]) {
                (o = u[h]), (s = l[h]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }),
          (c.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }),
          (c.prototype.indexOf = function (e, t, r) {
            return g(this, e, t, r, !0);
          }),
          (c.prototype.lastIndexOf = function (e, t, r) {
            return g(this, e, t, r, !1);
          }),
          (c.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
            else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0);
            else {
              if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              (t |= 0), isFinite(r) ? ((r |= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
            }
            var i = this.length - t;
            if (((void 0 === r || r > i) && (r = i), (e.length > 0 && (r < 0 || t < 0)) || t > this.length))
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
              switch (n) {
                case "hex":
                  return v(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return b(this, e, t, r);
                case "ascii":
                  return w(this, e, t, r);
                case "latin1":
                case "binary":
                  return S(this, e, t, r);
                case "base64":
                  return x(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, e, t, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (c.prototype.toJSON = function () {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        var P = 4096;
        function C(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function T(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function R(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", o = t; o < r; ++o) i += j(e[o]);
          return i;
        }
        function _(e, t, r) {
          for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function M(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
        }
        function I(e, t, r, n, i, o) {
          if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function B(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
            e[r + i] = (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function L(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function U(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function O(e, t, r, n, o) {
          return o || U(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
        }
        function z(e, t, r, n, o) {
          return o || U(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
        }
        (c.prototype.slice = function (e, t) {
          var r,
            n = this.length;
          if (
            ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            t < e && (t = e),
            c.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = c.prototype;
          else {
            var i = t - e;
            r = new c(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + e];
          }
          return r;
        }),
          (c.prototype.readUIntLE = function (e, t, r) {
            (e |= 0), (t |= 0), r || M(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i;
            return n;
          }),
          (c.prototype.readUIntBE = function (e, t, r) {
            (e |= 0), (t |= 0), r || M(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); ) n += this[e + --t] * i;
            return n;
          }),
          (c.prototype.readUInt8 = function (e, t) {
            return t || M(e, 1, this.length), this[e];
          }),
          (c.prototype.readUInt16LE = function (e, t) {
            return t || M(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (c.prototype.readUInt16BE = function (e, t) {
            return t || M(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (c.prototype.readUInt32LE = function (e, t) {
            return t || M(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
          }),
          (c.prototype.readUInt32BE = function (e, t) {
            return t || M(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
          }),
          (c.prototype.readIntLE = function (e, t, r) {
            (e |= 0), (t |= 0), r || M(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
          }),
          (c.prototype.readIntBE = function (e, t, r) {
            (e |= 0), (t |= 0), r || M(e, t, this.length);
            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); ) o += this[e + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (c.prototype.readInt8 = function (e, t) {
            return t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
          }),
          (c.prototype.readInt16LE = function (e, t) {
            t || M(e, 2, this.length);
            var r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (c.prototype.readInt16BE = function (e, t) {
            t || M(e, 2, this.length);
            var r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (c.prototype.readInt32LE = function (e, t) {
            return t || M(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
          }),
          (c.prototype.readInt32BE = function (e, t) {
            return t || M(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
          }),
          (c.prototype.readFloatLE = function (e, t) {
            return t || M(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (c.prototype.readFloatBE = function (e, t) {
            return t || M(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (c.prototype.readDoubleLE = function (e, t) {
            return t || M(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (c.prototype.readDoubleBE = function (e, t) {
            return t || M(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (c.prototype.writeUIntLE = function (e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) || I(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); ) this[t + o] = (e / i) & 255;
            return t + r;
          }),
          (c.prototype.writeUIntBE = function (e, t, r, n) {
            ((e = +e), (t |= 0), (r |= 0), n) || I(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = (e / o) & 255;
            return t + r;
          }),
          (c.prototype.writeUInt8 = function (e, t, r) {
            return (
              (e = +e), (t |= 0), r || I(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), (this[t] = 255 & e), t + 1
            );
          }),
          (c.prototype.writeUInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : B(this, e, t, !0),
              t + 2
            );
          }),
          (c.prototype.writeUInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : B(this, e, t, !1),
              t + 2
            );
          }),
          (c.prototype.writeUInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e))
                : L(this, e, t, !0),
              t + 4
            );
          }),
          (c.prototype.writeUInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
                : L(this, e, t, !1),
              t + 4
            );
          }),
          (c.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              I(this, e, t, r, i - 1, -i);
            }
            var o = 0,
              s = 1,
              a = 0;
            for (this[t] = 255 & e; ++o < r && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + r;
          }),
          (c.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              I(this, e, t, r, i - 1, -i);
            }
            var o = r - 1,
              s = 1,
              a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
              e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), (this[t + o] = (((e / s) >> 0) - a) & 255);
            return t + r;
          }),
          (c.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 1, 127, -128),
              c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (c.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : B(this, e, t, !0),
              t + 2
            );
          }),
          (c.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : B(this, e, t, !1),
              t + 2
            );
          }),
          (c.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 4, 2147483647, -2147483648),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24))
                : L(this, e, t, !0),
              t + 4
            );
          }),
          (c.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || I(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
                : L(this, e, t, !1),
              t + 4
            );
          }),
          (c.prototype.writeFloatLE = function (e, t, r) {
            return O(this, e, t, !0, r);
          }),
          (c.prototype.writeFloatBE = function (e, t, r) {
            return O(this, e, t, !1, r);
          }),
          (c.prototype.writeDoubleLE = function (e, t, r) {
            return z(this, e, t, !0, r);
          }),
          (c.prototype.writeDoubleBE = function (e, t, r) {
            return z(this, e, t, !1, r);
          }),
          (c.prototype.copy = function (e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            var i,
              o = n - r;
            if (this === e && r < t && t < n) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
            return o;
          }),
          (c.prototype.fill = function (e, t, r, n) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t ? ((n = t), (t = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var o;
            if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), e || (e = 0), "number" == typeof e))
              for (o = t; o < r; ++o) this[o] = e;
            else {
              var s = c.isBuffer(e) ? e : V(new c(e, n).toString()),
                a = s.length;
              for (o = 0; o < r - t; ++o) this[o + t] = s[o % a];
            }
            return this;
          });
        var D = /[^+\/0-9A-Za-z-_]/g;
        function j(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function V(e, t) {
          var r;
          t = t || 1 / 0;
          for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
            }
          }
          return o;
        }
        function H(e) {
          return n.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(D, "")).length < 2
              )
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function q(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
          return i;
        }
      }).call(this, r(3));
    },
    function (e, t, r) {
      var n, i;
      void 0 ===
        (i =
          "function" ==
          typeof (n = function () {
            return function () {
              var e = arguments.length;
              if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
              var t = document.createElement("base");
              if (((t.href = arguments[0]), 1 === e)) return t.href;
              var r = document.getElementsByTagName("head")[0];
              r.insertBefore(t, r.firstChild);
              for (var n, i = document.createElement("a"), o = 1; o < e; o++) (i.href = arguments[o]), (n = i.href), (t.href = n);
              return r.removeChild(t), n;
            };
          })
            ? n.call(t, r, t, e)
            : n) || (e.exports = i);
    },
    function (e, t) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (r = window);
      }
      e.exports = r;
    },
    function (e, t, r) {
      var n;
      !(function (i) {
        "use strict";
        var o, s, a, c, u, l, h, f, p, d, m, g, y;
        function v(e) {
          return null != e;
        }
        function b(e) {
          return "number" == typeof e && e > d && e < m;
        }
        function w(e) {
          return "number" == typeof e && e % 1 == 0;
        }
        function S(e, t) {
          return b(e) && e > t;
        }
        function x(e, t) {
          return b(e) && e < t;
        }
        function E(e, t) {
          return b(e) && e >= t;
        }
        function k(e, t) {
          return b(e) && e <= t;
        }
        function A(e) {
          return "string" == typeof e;
        }
        function P(e) {
          return A(e) && "" !== e;
        }
        function C(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        function T(e, t) {
          try {
            return e instanceof t;
          } catch (e) {
            return !1;
          }
        }
        function R(e, t) {
          var r;
          for (r in t)
            if (t.hasOwnProperty(r)) {
              if (!1 === e.hasOwnProperty(r) || typeof e[r] != typeof t[r]) return !1;
              if (C(e[r]) && !1 === R(e[r], t[r])) return !1;
            }
          return !0;
        }
        function _(e) {
          return g(e);
        }
        function M(e) {
          return v(e) && E(e.length, 0);
        }
        function I(e) {
          return "function" == typeof e;
        }
        function B(e, t) {
          var r;
          for (r = 0; r < e.length; r += 1) if (e[r] === t) return t;
          return !t;
        }
        function L(e, t) {
          var r, n;
          for (r in e)
            if (e.hasOwnProperty(r)) {
              if (C((n = e[r])) && L(n, t) === t) return t;
              if (n === t) return t;
            }
          return !t;
        }
        function U(e, t) {
          return (
            Object.keys(t).forEach(function (r) {
              e[r] = t[r];
            }),
            e
          );
        }
        function O(e, t) {
          return function () {
            return (function (e, t, r) {
              var n = e.l || e.length,
                i = t[n],
                o = t[n + 1];
              return z(e.apply(null, t), P(i) ? i : r, I(o) ? o : TypeError), t[0];
            })(e, arguments, t);
          };
        }
        function z(e, t, r) {
          if (e) return e;
          throw new (r || Error)(t || "Assertion failed");
        }
        function D(e) {
          var t = function () {
            return j(e.apply(null, arguments));
          };
          return (t.l = e.length), t;
        }
        function j(e) {
          return !e;
        }
        function V(e, t, r) {
          var n = function () {
            var n, i;
            if (((n = arguments[0]), "maybe" === e && l.assigned(n))) return !0;
            if (!t(n)) return !1;
            (n = (function (e, t) {
              switch (e) {
                case M:
                  return p.call(t);
                case C:
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                default:
                  return t;
              }
            })(t, n)),
              (i = p.call(arguments, 1));
            try {
              n.forEach(function (t) {
                if (("maybe" !== e || v(t)) && !r.apply(null, [t].concat(i))) throw 0;
              });
            } catch (e) {
              return !1;
            }
            return !0;
          };
          return (n.l = r.length), n;
        }
        function H(e, t) {
          return q([e, a, t]);
        }
        function q(e) {
          var t, r, n, i;
          return (
            (t = e.shift()),
            (r = e.pop()),
            (n = e.pop()),
            (i = r || {}),
            Object.keys(n).forEach(function (r) {
              Object.defineProperty(i, r, { configurable: !1, enumerable: !0, writable: !1, value: t.apply(null, e.concat(n[r], s[r])) });
            }),
            i
          );
        }
        function N(e, t) {
          return q([e, t, null]);
        }
        function F(e, t) {
          f.forEach(function (r) {
            e[r].of = N(t, a[r].of);
          });
        }
        (o = {
          v: "value",
          n: "number",
          s: "string",
          b: "boolean",
          o: "object",
          t: "type",
          a: "array",
          al: "array-like",
          i: "iterable",
          d: "date",
          f: "function",
          l: "length"
        }),
          (s = {}),
          (a = {}),
          [
            {
              n: "equal",
              f: function (e, t) {
                return e === t;
              },
              s: "v"
            },
            {
              n: "undefined",
              f: function (e) {
                return void 0 === e;
              },
              s: "v"
            },
            {
              n: "null",
              f: function (e) {
                return null === e;
              },
              s: "v"
            },
            { n: "assigned", f: v, s: "v" },
            {
              n: "primitive",
              f: function (e) {
                var t;
                switch (e) {
                  case null:
                  case void 0:
                  case !1:
                  case !0:
                    return !0;
                }
                return "string" == (t = typeof e) || "number" === t || (y && "symbol" === t);
              },
              s: "v"
            },
            {
              n: "includes",
              f: function (e, t) {
                var r, n, i, o, s;
                if (!v(e)) return !1;
                if (y && e[Symbol.iterator] && I(e.values)) {
                  r = e.values();
                  do {
                    if ((n = r.next()).value === t) return !0;
                  } while (!n.done);
                  return !1;
                }
                for (i = Object.keys(e), o = i.length, s = 0; s < o; ++s) if (e[i[s]] === t) return !0;
                return !1;
              },
              s: "v"
            },
            {
              n: "zero",
              f: function (e) {
                return 0 === e;
              }
            },
            {
              n: "infinity",
              f: function (e) {
                return e === d || e === m;
              }
            },
            { n: "number", f: b },
            { n: "integer", f: w },
            {
              n: "even",
              f: function (e) {
                return "number" == typeof e && e % 2 == 0;
              }
            },
            {
              n: "odd",
              f: function (e) {
                return w(e) && e % 2 != 0;
              }
            },
            { n: "greater", f: S },
            { n: "less", f: x },
            {
              n: "between",
              f: function (e, t, r) {
                if (t < r) return S(e, t) && e < r;
                return x(e, t) && e > r;
              }
            },
            { n: "greaterOrEqual", f: E },
            { n: "lessOrEqual", f: k },
            {
              n: "inRange",
              f: function (e, t, r) {
                if (t < r) return E(e, t) && e <= r;
                return k(e, t) && e >= r;
              }
            },
            {
              n: "positive",
              f: function (e) {
                return S(e, 0);
              }
            },
            {
              n: "negative",
              f: function (e) {
                return x(e, 0);
              }
            },
            { n: "string", f: A, s: "s" },
            {
              n: "emptyString",
              f: function (e) {
                return "" === e;
              },
              s: "s"
            },
            { n: "nonEmptyString", f: P, s: "s" },
            {
              n: "contains",
              f: function (e, t) {
                return A(e) && -1 !== e.indexOf(t);
              },
              s: "s"
            },
            {
              n: "match",
              f: function (e, t) {
                return A(e) && !!e.match(t);
              },
              s: "s"
            },
            {
              n: "boolean",
              f: function (e) {
                return !1 === e || !0 === e;
              },
              s: "b"
            },
            { n: "object", f: C, s: "o" },
            {
              n: "emptyObject",
              f: function (e) {
                return C(e) && 0 === Object.keys(e).length;
              },
              s: "o"
            },
            {
              n: "nonEmptyObject",
              f: function (e) {
                return C(e) && Object.keys(e).length > 0;
              },
              s: "o"
            },
            { n: "instanceStrict", f: T, s: "t" },
            {
              n: "instance",
              f: function (e, t) {
                try {
                  return T(e, t) || e.constructor.name === t.name || Object.prototype.toString.call(e) === "[object " + t.name + "]";
                } catch (e) {
                  return !1;
                }
              },
              s: "t"
            },
            { n: "like", f: R, s: "t" },
            { n: "array", f: _, s: "a" },
            {
              n: "emptyArray",
              f: function (e) {
                return _(e) && 0 === e.length;
              },
              s: "a"
            },
            {
              n: "nonEmptyArray",
              f: function (e) {
                return _(e) && S(e.length, 0);
              },
              s: "a"
            },
            { n: "arrayLike", f: M, s: "al" },
            {
              n: "iterable",
              f: function (e) {
                if (!y) return M(e);
                return v(e) && I(e[Symbol.iterator]);
              },
              s: "i"
            },
            {
              n: "date",
              f: function (e) {
                return T(e, Date) && w(e.getTime());
              },
              s: "d"
            },
            { n: "function", f: I, s: "f" },
            {
              n: "hasLength",
              f: function (e, t) {
                return v(e) && e.length === t;
              },
              s: "l"
            }
          ].map(function (e) {
            var t = e.n;
            (s[t] = "Invalid " + o[e.s || "n"]), (a[t] = e.f);
          }),
          (c = {
            apply: function (e, t) {
              if ((u.array(e), I(t)))
                return e.map(function (e) {
                  return t(e);
                });
              return (
                u.array(t),
                u.hasLength(e, t.length),
                e.map(function (e, r) {
                  return t[r](e);
                })
              );
            },
            map: function (e, t) {
              if ((u.object(e), I(t)))
                return (function (e, t) {
                  var r = {};
                  return (
                    Object.keys(e).forEach(function (n) {
                      r[n] = t(e[n]);
                    }),
                    r
                  );
                })(e, t);
              return (
                u.object(t),
                (function e(t, r) {
                  var n = {};
                  Object.keys(r).forEach(function (i) {
                    var o = r[i];
                    I(o) ? (l.assigned(t) ? (n[i] = !!o.m) : (n[i] = o(t[i]))) : C(o) && (n[i] = e(t[i], o));
                  });
                  return n;
                })(e, t)
              );
            },
            all: function (e) {
              if (_(e)) return B(e, !1);
              return u.object(e), L(e, !1);
            },
            any: function (e) {
              if (_(e)) return B(e, !0);
              return u.object(e), L(e, !0);
            }
          }),
          (f = ["array", "arrayLike", "iterable", "object"]),
          (p = Array.prototype.slice),
          (d = Number.NEGATIVE_INFINITY),
          (m = Number.POSITIVE_INFINITY),
          (g = Array.isArray),
          (y = "function" == typeof Symbol),
          (c = U(c, a)),
          (u = H(O, z)),
          (l = H(D, j)),
          (h = H(
            function (e) {
              var t = function () {
                return !!l.assigned(arguments[0]) || e.apply(null, arguments);
              };
              return (t.l = e.length), (t.m = !0), t;
            },
            function (e) {
              if (!1 === v(e)) return !0;
              return e;
            }
          )),
          (u.not = N(O, l)),
          (u.maybe = N(O, h)),
          f.forEach(function (e) {
            a[e].of = q([V.bind(null, null), a[e], a, null]);
          }),
          F(u, O),
          F(l, D),
          f.forEach(function (e) {
            (h[e].of = q([V.bind(null, "maybe"), a[e], a, null])), (u.maybe[e].of = N(O, h[e].of)), (u.not[e].of = N(O, l[e].of));
          }),
          (function (i) {
            void 0 ===
              (n = function () {
                return i;
              }.call(t, r, t, e)) || (e.exports = n);
          })(U(c, { assert: u, not: l, maybe: h }));
      })();
    },
    function (e, t, r) {
      (function (e) {
        const n = r(4),
          i = r(2),
          { defaultOptions: o } = r(26),
          { version: s } = r(27),
          a = (e, t) => {
            const r = new FileReader();
            (r.onload = () => {
              t(r.result);
            }),
              r.readAsArrayBuffer(e);
          },
          c = (e) => {
            if (n.string(e)) return fetch(i(e)).then((e) => e.arrayBuffer());
            if (n.instance(e, HTMLElement)) {
              if ("IMG" === e.tagName) return c(e.src);
              if ("VIDEO" === e.tagName) return c(e.poster);
              if ("CANVAS" === e.tagName)
                return new Promise((t) => {
                  e.toBlob((e) => {
                    a(e, t);
                  });
                });
            }
            return n.instance(e, File)
              ? new Promise((t) => {
                  a(e, t);
                })
              : Promise.reject();
          };
        (t.defaultOptions = {
          ...o,
          workerPath:
            "development" === e.env.TESS_ENV
              ? i(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`)
              : `https://unpkg.com/tesseract.js@v${s}/dist/worker.min.js`,
          corePath: `https://unpkg.com/tesseract.js-core@v2.0.0-beta.8/tesseract-core.${"object" == typeof WebAssembly ? "wasm" : "asm"}.js`
        }),
          (t.spawnWorker = (e, { workerPath: t }) => {
            let r;
            if (Blob && URL) {
              const e = new Blob([`importScripts("${t}");`], { type: "application/javascript" });
              r = new Worker(URL.createObjectURL(e));
            } else r = new Worker(t);
            return (
              (r.onmessage = ({ data: t }) => {
                e.recv(t);
              }),
              r
            );
          }),
          (t.terminateWorker = (e) => {
            e.worker.terminate();
          }),
          (t.sendPacket = (e, t) => {
            const r = { ...t };
            c(r.payload.image)
              .then((e) => new Uint8Array(e))
              .then((t) => {
                (r.payload.image = Array.from(t)), e.worker.postMessage(r);
              });
          });
      }).call(this, r(0));
    },
    function (e, t) {
      e.exports = () => {
        const e = new Set();
        return Object.freeze({ pub: (t, r) => e.forEach((e) => e(t, r)), sub: (t) => (e.add(t), () => e.delete(t)) });
      };
    },
    function (e, t, r) {
      window,
        (e.exports = (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                  r.d(
                    n,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 1))
          );
        })([
          function (e) {
            e.exports = {};
          },
          function (e, t, r) {
            "use strict";
            r.r(t);
            class n {
              constructor() {}
              initialise() {}
              play(e) {}
              stop() {}
              pause() {}
              getVoices() {}
              onWordSpoken(e) {}
            }
            class i extends n {
              constructor(e, t) {
                super(),
                  (this._voices = []),
                  (this.configuration = t),
                  (this.speechSettings = e),
                  (this.charMap = this.configuration.getConfiguration().charMap),
                  (this.eventBus = null),
                  (this.m_stop = !1),
                  (this.m_paused = !1);
              }
              initialise(e) {
                null != e && (this.eventBus = e), this.getVoicesList();
              }
              play(e) {
                try {
                  (this.m_stop = !0), (this.m_paused = !1);
                  var t = this,
                    r = null;
                  null == r && (r = !0);
                  for (var n = "", i = [], o = 0, s = e.words, a = 0; a < s.length; a++) {
                    var c = s[a];
                    (o = o + c.length + 1), i.push(o), (n += " " === c || "" === c ? " " : r ? s[a] + " " : s[a]);
                  }
                  chrome.tts.speak(n, {
                    voiceName: e.voice,
                    requiredEventTypes: ["word"],
                    rate: 1,
                    onEvent: function (r) {
                      if ("start" == r.type) {
                        e.onLine = !1;
                        var n = { method: "onSpeechStarted", type: "SP_M_1342_BK" };
                        return (n.tabid = e.tabid), (n.request = e), (n.origin = e.origin), void t.eventBus.pub("onthAPISpeechStart", n);
                      }
                      if ("end" == r.type) {
                        var o = { method: "onStop", type: "SP_M_1342_BK" };
                        (o.request = e), (o.origin = e.origin), (o.word = -1), t.eventBus.pub("onthAPIWordonthAPIStop", o);
                      }
                      if ("word" == r.type) {
                        var s;
                        s = -1 != e.voice.indexOf("Chrome") ? t.getChromeWordIndex(r.charIndex, i) : t.getWordIndex(r.charIndex, i);
                        var a = { method: "onWord", type: "SP_M_1342_BK" };
                        (a.word = s), (a.tabid = e.tabid), (a.request = e), (a.origin = e.origin), t.eventBus.pub("onthAPIWord", a);
                      }
                      r.type, "error" == r.type && console.log("Error: " + r.errorMessage);
                    }
                  });
                } catch (e) {
                  console.log("SpeechBrowser - play: ", e);
                }
              }
              stop() {
                (this.m_stop = !0), (this.m_paused = !1);
                try {
                  return void chrome.tts.stop();
                } catch (e) {
                  textHelp.webreaderapi.HelpersSingleton.getInstance().logError(e);
                }
              }
              pause() {
                if (this.m_paused) return chrome.tts.resume(), void (this.m_paused = !1);
                chrome.tts.pause(), (this.m_paused = !0);
              }
              resume() {
                chrome.tts.resume();
              }
              getVoices() {
                try {
                  return this._voices;
                } catch (e) {
                  console.log("error");
                }
              }
              getVoicesList() {
                try {
                  chrome.tts.getVoices(this.setVoices.bind(this));
                } catch (e) {
                  console.log("error");
                }
              }
              setVoices(e) {
                try {
                  for (var t = e, r = 0; r < t.length; r++) this._voices[t[r].voiceName] = t[r].voiceName + " - Offline";
                } catch (e) {
                  console.log("error");
                }
              }
              onWordSpoken(e) {}
              getWordIndex(e, t) {
                for (var r = 0; r < t.length; ++r) if (e < t[r]) return r;
                return 0;
              }
              getChromeWordIndex(e, t) {
                for (var r = 0; r < t.length; ++r) if (e <= t[r]) return r;
                return 0;
              }
            }
            r(0);
            class o extends n {
              constructor(e, t) {
                super();
                try {
                  (this.currentVoices = []),
                    (this.speechServer = null),
                    (this.speechServerUser = null),
                    (this.rootLocation = null),
                    (this.audioElem = null),
                    (this.audioPlaybackTimerID = null),
                    (this.currentHighlightWord = -1),
                    (this.playbackTimeArray = null),
                    (this.session = 0),
                    (this.boundAudioPlayBackTimer = null),
                    (this.speechStop = !1),
                    (this.paused = !1),
                    (this.gotVoices = !1),
                    (this.configuration = t),
                    (this.speechSettings = e),
                    (this.voicePromise = null),
                    (this.voicesAvailable = null),
                    (this.eventBus = null),
                    (this.charMap = this.configuration.getConfiguration().charMap),
                    (this.timeout = null),
                    (this.m_voices = new Array());
                } catch (e) {
                  console.log("Request failed: SpeechServer - constructor: ", e);
                }
              }
              initialise(e) {
                try {
                  (this.speechServer = this.configuration.getSpeechServer()),
                    (this.speechServerUser = this.configuration.getUser()),
                    null != e && (this.eventBus = e);
                } catch (e) {
                  console.log("Request failed: SpeechServer - initialise: ", e), Promise.reject(e);
                }
              }
              refreshVoices() {
                return this.getVoices();
              }
              status(e) {
                return e.status >= 200 && e.status < 300 ? Promise.resolve(e) : Promise.reject(new Error(e.statusText));
              }
              json(e) {
                return e.json();
              }
              text(e) {
                return e.text();
              }
              blob(e) {
                return e.blob();
              }
              buffer(e) {
                return e.arrayBuffer();
              }
              getVoices() {
                var e = JSON.parse(
                  '\n            [  \n                {  \n                    "voice":"Allison?",\n                    "oldVoice":"US Allison - Vocalizer",\n                    "description":"US English Allison"\n                },\n                {  \n                    "voice":"Ava?",\n                    "oldVoice":"Vocalizer Expressive Ava Premium High 22kHz",\n                    "description":"US English Ava"\n                },\n                {  \n                    "voice":"Samantha?",\n                    "oldVoice":"Vocalizer Expressive Samantha Premium High 22kHz",\n                    "description":"US English Samantha"\n                },\n                {  \n                    "voice":"Tom?",\n                    "oldVoice":"Vocalizer Expressive Tom Premium High 22kHz",\n                    "description":"US English Tom"\n                },\n                {  \n                    "voice":"Karen?",\n                    "oldVoice":"Vocalizer Expressive Karen Premium High 22kHz",\n                    "description":"Australian English Karen"\n                },\n                {  \n                    "voice":"Lee?",\n                    "oldVoice":"Vocalizer Expressive Lee Premium High 22kHz",\n                    "description":"Australian English Lee"\n                },\n                {  \n                    "voice":"Tessa?",\n                    "oldVoice":"South African English Tessa - Vocalizer",\n                    "description":"South African English Tessa"\n                },\n                {  \n                    "voice":"Veena?",\n                    "oldVoice":"Vocalizer Expressive Veena Premium High 22kHz",\n                    "description":"Indian English Veena"\n                },\n                {  \n                    "voice":"Moira?",\n                    "oldVoice":"Irish English Moira - Vocalizer",\n                    "description":"Irish English Moira"\n                },\n                {  \n                    "voice":"Fiona?",\n                    "oldVoice":"Vocalizer Expressive Fiona Premium High 22kHz",\n                    "description":"Scottish English Fiona"\n                },\n                {  \n                    "voice":"Daniel?",\n                    "oldVoice":"Vocalizer Expressive Daniel Premium High 22kHz",\n                    "description":"UK English Daniel"\n                },\n                {  \n                    "voice":"Serena?",\n                    "oldVoice":"Vocalizer Expressive Serena Premium High 22kHz",\n                    "description":"UK English Serena"\n                },\n                {  \n                    "voice":"Miren?",\n                    "oldVoice":"Vocalizer Expressive Miren Premium High 22kHz",\n                    "description":"Basque Miren"\n                },\n                {  \n                    "voice":"Montserrat?",\n                    "oldVoice":"Vocalizer Expressive Montserrat Premium High 22kHz",\n                    "description":"Catalan Montserrat"\n                },\n                {  \n                    "voice":"Carlos?",\n                    "oldVoice":"Vocalizer Expressive Carlos Premium High 22kHz",\n                    "description":"Colombian Spanish Carlos"\n                },\n                {  \n                    "voice":"Soledad?",\n                    "oldVoice":"Colombian Spanish Soledad - Vocalizer",\n                    "description":"Colombian Spanish Soledad"\n                },\n                {  \n                    "voice":"Juan?",\n                    "oldVoice":"Mexican Spanish Juan - Vocalizer",\n                    "description":"Mexican Spanish Juan"\n                },\n                {  \n                    "voice":"Paulina?",\n                    "oldVoice":"Vocalizer Expressive Paulina Premium High 22kHz",\n                    "description":"Mexican Spanish Paulina"\n                },\n                {  \n                    "voice":"Jorge?",\n                    "oldVoice":"Spanish Jorge - Vocalizer",\n                    "description":"Spanish Jorge"\n                },\n                {  \n                    "voice":"Monica?",\n                    "oldVoice":"Vocalizer Expressive Monica Premium High 22kHz",\n                    "description":"Spanish Monica"\n                },\n                {  \n                    "voice":"Amelie?",\n                    "oldVoice":"Vocalizer Expressive Amelie Premium High 22kHz",\n                    "description":"French Canadian Amelie"\n                },\n                {  \n                    "voice":"Thomas?",\n                    "oldVoice":"French Canadian Thomas - Vocalizer",\n                    "description":"French Thomas"\n                },\n                {  \n                    "voice":"Audrey?",\n                    "oldVoice":"Vocalizer Expressive Audrey Premium High 22kHz",\n                    "description":"French Audrey"\n                },\n                {  \n                    "voice":"Magnus?",\n                    "oldVoice":"Danish Magnus - Vocalizer",\n                    "description":"Danish Magnus"\n                },\n                {  \n                    "voice":"Sara?",\n                    "oldVoice":"Danish Sara - Vocalizer",\n                    "description":"Danish Sara"\n                },\n                {  \n                    "voice":"Satu?",\n                    "oldVoice":"Vocalizer Expressive Satu Premium High 22kHz",\n                    "description":"Finnish Satu"\n                },\n                {  \n                    "voice":"Henrik?",\n                    "oldVoice":"Vocalizer Expressive Henrik Premium High 22kHz",\n                    "description":"Norwegian Henrik"\n                },\n                {  \n                    "voice":"Nora?",\n                    "oldVoice":"Vocalizer Expressive Nora Premium High 22kHz",\n                    "description":"Norwegian Nora"\n                },\n                {  \n                    "voice":"Alva?",\n                    "oldVoice":"Vocalizer Expressive Alva Premium High 22kHz",\n                    "description":"Swedish Alva"\n                },\n                {  \n                    "voice":"Oskar?",\n                    "oldVoice":"Swedish Oskar - Vocalizer",\n                    "description":"Swedish Oskar"\n                },\n                {  \n                    "voice":"Tarik?",\n                    "oldVoice":"Vocalizer Expressive Tarik Premium High 22kHz",\n                    "description":"Arabic Tarik"\n                },\n                {  \n                    "voice":"Felipe?",\n                    "oldVoice":"Vocalizer Expressive Felipe Premium High 22kHz",\n                    "description":"Brazilian Felipe"\n                },\n                {  \n                    "voice":"Luciana?",\n                    "oldVoice":"Vocalizer Expressive Luciana Premium High 22kHz",\n                    "description":"Brazilian Luciana"\n                },\n                {  \n                    "voice":"Zuzana?",\n                    "oldVoice":"Czech Zuzana - Vocalizer",\n                    "description":"Czech Zuzana"\n                },\n                {  \n                    "voice":"Claire?",\n                    "oldVoice":"Vocalizer Expressive Claire Premium High 22kHz",\n                    "description":"Dutch Claire"\n                },\n                {  \n                    "voice":"Xander?",\n                    "oldVoice":"Dutch Xander - Vocalizer",\n                    "description":"Dutch Xander"\n                },\n                {  \n                    "voice":"Ellen?",\n                    "oldVoice":"Vocalizer Expressive Ellen Premium High 22kHz",\n                    "description":"Flemish Ellen"\n                },\n                {  \n                    "voice":"Carmela?",\n                    "oldVoice":"Galician Carmela - Vocalizer",\n                    "description":"Galician Carmela"\n                },\n                {  \n                    "voice":"Anna?",\n                    "oldVoice":"German Anna - Vocalizer",\n                    "description":"German Anna"\n                },\n                {  \n                    "voice":"Petra?",\n                    "oldVoice":"Vocalizer Expressive Petra Premium High 22kHz",\n                    "description":"German Petra"\n                },\n                {  \n                    "voice":"Yannick?",\n                    "oldVoice":"German Yannick - Vocalizer",\n                    "description":"German Yannick"\n                },\n                {  \n                    "voice":"Melina?",\n                    "oldVoice":"Greek Melina - Vocalizer",\n                    "description":"Greek Melina"\n                },\n                {  \n                    "voice":"Nikos?",\n                    "oldVoice":"Greek Nikos - Vocalizer",\n                    "description":"Greek Nikos"\n                },\n                {  \n                    "voice":"Lekha?",\n                    "oldVoice":"Hindi Lekha - Vocalizer",\n                    "description":"Hindi Lekha"\n                },\n                {  \n                    "voice":"Mariska?",\n                    "oldVoice":"Hungarian Mariska - Vocalizer",\n                    "description":"Hungarian Mariska"\n                },\n                {  \n                    "voice":"Damayanti?",\n                    "oldVoice":"Vocalizer Expressive Damayanti Premium High 22kHz",\n                    "description":"Indonesian Damayanti"\n                },\n                {  \n                    "voice":"Alice?",\n                    "oldVoice":"Vocalizer Expressive Alice Premium High 22kHz",\n                    "description":"Italian Alice"\n                },\n                {  \n                    "voice":"Federica?",\n                    "oldVoice":"Italian Federica - Vocalizer",\n                    "description":"Italian Federica"\n                },\n                {  \n                    "voice":"Luca?",\n                    "oldVoice":"Italian Luca - Vocalizer",\n                    "description":"Italian Luca"\n                },\n                {  \n                    "voice":"Paola?",\n                    "oldVoice":"Italian Paola - Vocalizer",\n                    "description":"Italian Paola"\n                },\n                {  \n                    "voice":"Sora?",\n                    "oldVoice":"Korean Sora - Vocalizer",\n                    "description":"Korean Sora"\n                },\n                {  \n                    "voice":"Tagalog?",\n                    "oldVoice":"Tagalog",\n                    "description":"Tagalog Amelia"\n                },\n                {  \n                    "voice":"Tian-Tian?",\n                    "oldVoice":"Vocalizer Expressive Tian-Tian Premium High 22kHz",\n                    "description":"Mandarin China Tian-Tian"\n                },\n                {  \n                    "voice":"Mei-Jia?",\n                    "oldVoice":"Mandarin Taiwan Mei-Jia - Vocalizer",\n                    "description":"Mandarin Taiwan Mei-Jia"\n                },\n                {  \n                    "voice":"Ewa?",\n                    "oldVoice":"Vocalizer Expressive Ewa Premium High 22kHz",\n                    "description":"Polish Ewa"\n                },\n                {  \n                    "voice":"Zosia?",\n                    "oldVoice":"Polish Zosia - Vocalizer",\n                    "description":"Polish Zosia"\n                },\n                {  \n                    "voice":"Catarina?",\n                    "oldVoice":"Portuguese Catarina - Vocalizer",\n                    "description":"Portuguese Catarina"\n                },\n                {  \n                    "voice":"Joana?",\n                    "oldVoice":"Portuguese Joana - Vocalizer",\n                    "description":"Portuguese Joana"\n                },\n                {  \n                    "voice":"Ioana?",\n                    "oldVoice":"Romanian Ioana - Vocalizer",\n                    "description":"Romanian Ioana"\n                },\n                {  \n                    "voice":"Milena?",\n                    "oldVoice":"Vocalizer Expressive Milena Premium High 22kHz",\n                    "description":"Russian Milena"\n                },\n                {  \n                    "voice":"Yuri?",\n                    "oldVoice":"Vocalizer Expressive Yuri Premium High 22kHz",\n                    "description":"Russian Yuri"\n                },\n                {  \n                    "voice":"Laura?",\n                    "oldVoice":"Slovak Laura - Vocalizer",\n                    "description":"Slovak Laura"\n                },\n                {  \n                    "voice":"Kanya?",\n                    "oldVoice":"Thai Kanya - Vocalizer",\n                    "description":"Thai Kanya"\n                },\n                {  \n                    "voice":"Cem?",\n                    "oldVoice":"Turkish Cem - Vocalizer",\n                    "description":"Turkish Cem"\n                },\n                {  \n                    "voice":"Yelda?",\n                    "oldVoice":"Turkish Yelda - Vocalizer",\n                    "description":"Turkish Yelda"\n                },\n                {  \n                    "voice":"Ceitidh?",\n                    "description":"Gaelic (Scottish) Ceitidh"\n                },\n                {  \n                    "voice":"Peig?",\n                    "description":"Gaeilge (Irish) Peig"\n                },\n                {  \n                    "voice":"Geraint?",\n                    "oldVoice":"Welsh English male voice",\n                    "description":"Welsh Geraint"\n                },\n                {  \n                    "voice":"Gwyneth?",\n                    "oldVoice":"Welsh female voice",\n                    "description":"Welsh Gwyneth"\n                }\n            ]\n        '
                );
                e.sort(function (e, t) {
                  return e.description.localeCompare(t.description);
                });
                for (var t = 0; t < e.length; t++) this.m_voices[e[t].voice] = e[t].description;
                return this.m_voices;
              }
              play(e) {
                try {
                  var t = null,
                    r = e.speed,
                    n = e.voice,
                    i = e.words;
                  null == t && (t = !0),
                    (this.speechStop = !1),
                    (this.paused = !1),
                    null === this.audioElem && ((this.audioElem = new Audio()), (this.audioElem.type = "audio/mpeg")),
                    (this.currentHighlightWord = 0);
                  for (var o = "https://" + this.speechServer + "/Generator/voice/" + n, s = "", a = 0; a < i.length; a++) {
                    var c = i[a];
                    s +=
                      " " === c || "" === c
                        ? " "
                        : t
                        ? "<bookmark mark='" + a + "'/>" + this.encodeChars(i[a].trim())
                        : this.encodeChars(i[a].trim());
                  }
                  s += "<bookmark mark='" + a + "'/>";
                  var u =
                      "text=" +
                      encodeURIComponent(s) +
                      "&username=" +
                      encodeURIComponent(this.speechServerUser) +
                      "&speed=" +
                      encodeURIComponent(r),
                    l = this,
                    h = { numWords: i.length, responseTime: 0, voice: n, speed: r, onLine: !0, startTime: new Date().getTime() },
                    f = new XMLHttpRequest();
                  (f.onreadystatechange = function () {
                    if (4 == this.readyState && 200 == this.status) {
                      var t = f.getResponseHeader("TH-TIME"),
                        r = this.response.slice(0, t),
                        n = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(r))),
                        i = new Blob([new Uint8Array(this.response.slice(t))]);
                      (e.analyticsParams = h), l.onResponse(n, i, e);
                    } else
                      4 == this.readyState &&
                        400 == this.status &&
                        (n = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(this.response))));
                  }),
                    f.open("POST", o),
                    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF8"),
                    (f.responseType = "arraybuffer"),
                    f.send(u);
                } catch (e) {
                  console.log("SpeechSever - play: ", e);
                }
              }
              stop(e) {
                try {
                  if ((clearTimeout(this.timeout), null === this.audioElem || null === this.playbackTimeArray)) return;
                  (this.speechStop = !0), (this.paused = !1), (this.playbackTimeArray.length = 0);
                  try {
                    this.audioElem.pause(), (this.audioElem.currentTime = 0), (this.audioElem.src = "");
                  } catch (e) {
                    return;
                  }
                } catch (e) {
                  console.log("Request failed: SpeechServer - stop: ", e);
                }
              }
              pause(e) {
                try {
                  if (null === this.audioElem) return;
                  if (0 === this.audioElem.currentTime) return;
                  if (this.paused) return this.audioElem.play(), void (this.paused = !1);
                  this.audioElem.pause(), (this.paused = !0);
                } catch (e) {
                  console.log("Request failed: SpeechServer - pause: ", e);
                }
              }
              onWordSpoken(e) {}
              audioPlaybackTimer(e) {
                try {
                  if (null === this.playbackTimeArray) return;
                  if (this.audioElem.ended)
                    return (
                      this.audioElem.pause(),
                      (this.audioElem.currentTime = 0),
                      (this.audioElem.src = ""),
                      (this.length = 0),
                      void this.onStop(!0, e)
                    );
                  if (this.playbackTimeArray.length > 0) {
                    if (this.playbackTimeArray[this.currentHighlightWord] < this.audioElem.currentTime) {
                      var t = { method: "onWord", type: "SP_M_1342_BK" };
                      (t.word = this.currentHighlightWord),
                        (t.tabid = e.tabid),
                        (t.request = e),
                        (t.origin = e.origin),
                        this.eventBus.pub("onthAPIWord", t),
                        this.currentHighlightWord++;
                    }
                    if (this.audioElem.currentTime > this.playbackTimeArray[this.playbackTimeArray.length - 1]) {
                      clearTimeout(this.timeout), this.onStop(!0, e);
                      try {
                        this.audioElem.pause();
                      } catch (e) {
                        console.log("Error! " + e);
                      }
                      return;
                    }
                  }
                  this.timeout = setTimeout((t) => {
                    this.audioPlaybackTimer(e);
                  }, 50);
                } catch (e) {
                  console.log("Request failed: SpeechServer - audioPlaybackTimer: ", e);
                }
              }
              onResponse(e, t, r) {
                (r.responseTime = new Date().getTime() - r.analyticsParams.startTime), (r.onLine = !0);
                var n = { method: "onSpeechStarted", type: "SP_M_1342_BK" };
                (n.tabid = r.tabid),
                  (n.request = r),
                  (n.origin = r.origin),
                  this.eventBus.pub("onthAPISpeechStart", n),
                  (this.playbackTimeArray = []);
                for (var i = 0, o = 0; o < e.bookmarks.length; o++)
                  (this.playbackTimeArray[i] = e.bookmarks[o].time / 1e3),
                    i > 0 &&
                      this.playbackTimeArray[i] <= this.playbackTimeArray[i - 1] &&
                      (this.playbackTimeArray[i] = this.playbackTimeArray[i - 1] + 0.01),
                    (i += 1);
                this.playbackTimeArray[this.playbackTimeArray.length - 1] < 0.1 && (this.playbackTimeArray.length = 0),
                  this.speechStop ||
                    ((this.timeout = window.setTimeout((e) => {
                      this.audioPlaybackTimer(r);
                    }, 50)),
                    (this.audioElem.src = window.URL.createObjectURL(t)),
                    this.audioElem.play());
              }
              encodeChars(e) {
                try {
                  for (var t = "", r = "", n = 0; n < e.length; n++)
                    (r = e.charCodeAt(n).toString()), void 0 === this.charMap[r] ? (t += e.charAt(n)) : (t += this.charMap[r]);
                  return t;
                } catch (e) {
                  console.log("Request failed: SpeechServer - encodeChars: ", e);
                }
              }
              onStop() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  r = { method: "onStop", type: "SP_M_1342_BK" };
                void 0 !== t.origin && (r.origin = t.origin),
                  (r.request = t),
                  (r.word = -1),
                  e || (r.word = -2),
                  this.eventBus.pub("onthAPIWordonthAPIStop", r);
              }
            }
            class s {
              constructor(e, t, r) {
                (this.speechserver = t),
                  (this.user = e),
                  (this.language = r || {
                    "en-AU": "Karen?",
                    en: "Ava?",
                    "en-GB": "Serena?",
                    "en-US": "Ava?",
                    fr: "Audrey?",
                    "fr-CA": "Amelie?",
                    pt: "Luciana?",
                    "pt-BR": "Luciana?",
                    "pt-PT": "Luciana?",
                    es: "Monica?",
                    "es-419": "Paulina?",
                    nl: "Claire?",
                    tl: "Tagalog?",
                    ms: "Tagalog?"
                  }),
                  (this.config = {
                    locale: "en-US",
                    charMap: { 8217: "'", 96: "'", 8482: " ", 8212: " " },
                    sentences: {
                      wordEnds: ["[.?!]$"],
                      sentenceEndExclusions: [
                        "Dr.",
                        "Mr.",
                        "Mrs.",
                        "i.e.",
                        "e.g.",
                        "St.",
                        "N.B.",
                        "NB.",
                        "Ltd.",
                        "plc.",
                        "U.S.",
                        "a.m.",
                        "p.m.",
                        "ext.",
                        "vs.",
                        "Jan.",
                        "Feb.",
                        "Mar.",
                        "Apr.",
                        "Jun.",
                        "Jul.",
                        "Aug.",
                        "Sep.",
                        "Oct.",
                        "Nov.",
                        "Dec.",
                        "N.E.",
                        "S.E.",
                        "S.W.",
                        "N.W."
                      ]
                    }
                  });
              }
              setVoiceForLanguage(e, t) {
                this.language[e] = t;
              }
              getVoiceForLanguage(e) {
                return this.language[e];
              }
              getUser() {
                return this.user;
              }
              getSpeechServer() {
                return this.speechserver;
              }
              getVoiceListServer() {
                return this.voiceListServer;
              }
              getConfiguration() {
                return this.config;
              }
            }
            class a {
              constructor() {
                (this.currentVoice = "Ava?"),
                  (this.configuration = new s()),
                  (this.userSettings = {
                    speechoptions: { voice: this.currentVoice, continousreading: !0, speed: 50 },
                    language: { language: "en_US", services: "en_US" }
                  });
              }
              get_Voice() {
                try {
                  return this.currentVoice;
                } catch (e) {
                  console.log("SpeechSettings - get_Voice: ", e);
                }
              }
              set_Voice(e) {
                try {
                  (this.currentVoice = e), (this.userSettings.speechoptions.voice = e);
                } catch (e) {
                  console.log("SpeechSettings - set_Voice: ", e);
                }
              }
              set_Speed(e) {
                try {
                  this.userSettings.speechoptions.speed = e;
                } catch (e) {
                  console.log("SpeechSettings - set_Speed: ", e);
                }
              }
              getVoices() {
                try {
                  return "";
                } catch (e) {
                  console.log("SpeechSettings - getVoices: ", e);
                }
              }
              getLocale() {
                try {
                  var e = "en-US";
                  null == e && (e = "en-US");
                  var t = this.configuration.getConfiguration();
                  return void 0 !== t[e] && (t.locale = e), t.locale;
                } catch (e) {
                  console.log("SpeechSettings - getLocale: ", e);
                }
              }
              getUserSettings() {
                return this.userSettings;
              }
            }
            var c = {
              voices: { Ava: "en-US" },
              lang: {
                all: { EquatIO: "eqwayshio", Equatio: "eqwayshio", equatio: "eqwayshio", WriQ: "Wry Q", wriq: "Wry Q", Wriq: "Wry Q" },
                "en-US": { EquatIO: "eqwayshio", Equatio: "eqwayshio", equatio: "eqwayshio", WriQ: "Wry Q", wriq: "Wry Q", Wriq: "Wry Q" }
              }
            };
            class u {
              constructor() {
                (this.prons = { voices: {}, lang: {} }), void 0 !== c && null != c && (this.prons = c);
              }
              loadPronFile(e) {}
              setPronunciationsForVoice(e, t) {
                let r = this.prons.voices[e];
                this.setPronunciationsForLang(r, t);
              }
              setPronunciationsForLang(e, t) {
                let r = this.prons.lang[e],
                  n = this.prons.lang.all,
                  i = Object.assign({}, n, r);
                if (null != i && void 0 !== i) for (let e in i) for (let r = 0; r < t.length; r++) t[r] = t[r].replace(e, i[e]);
              }
            }
            r.d(t, "default", function () {
              return l;
            });
            class l {
              constructor() {
                (this._speechEngines = {}),
                  (this._voices = []),
                  (this.m_voices = new Array()),
                  (this._commms = null),
                  (this.eventBus = null),
                  (this._unsub = null),
                  (this.m_controller = null),
                  (this.m_voiceToEngineMap = new Array()),
                  (this.configuration = null),
                  (this.voiceToEngineMap = []),
                  (this.speechSettings = new a()),
                  (this.prons = new u());
              }
              initialise(e) {
                (this.configuration = new s("rwforgdocs4", "texthelpspeech.speechstream.net")),
                  (this._speechEngines.SpeechEngineServer = new o(this.speechSettings, this.configuration)),
                  this._speechEngines.SpeechEngineServer.initialise(e),
                  (this._speechEngines.SpeechEngineBrowser = new i(this.speechSettings, this.configuration)),
                  this._speechEngines.SpeechEngineBrowser.initialise(e),
                  null != e && ((this.eventBus = e), (this._unsub = this.eventBus.sub(this._onPubSubEvent.bind(this))));
              }
              _onPubSubEvent(e, t) {
                try {
                  void 0 !== this[e] && this[e](t);
                } catch (e) {
                  console.log(e);
                }
              }
              play(e) {
                if ((this.prons.setPronunciationsForVoice(e.voice, e.words), escape(e.words.join(" ")).includes("%uDB40%uDC2E"))) {
                  var t = { method: "onForceStop", type: "SP_M_1342_BK" };
                  return (
                    (t.tabid = e.tabid),
                    void 0 !== e.origin && (t.origin = e.origin),
                    (t.request = e),
                    void this.eventBus.pub("onthAPIWordonthAPIStop", t)
                  );
                }
                var r = this.speechSettings.get_Voice();
                try {
                  0 == Object.keys(this._voices).length && this.getVoices();
                  var n = this.voiceToEngineMap[e.voice];
                  if (void 0 !== n)
                    return e.voice !== r && this.speechSettings.set_Voice(e.voice), void (n = this.voiceToEngineMap[e.voice]).play(e);
                  n = this.voiceToEngineMap[r];
                  var i = r;
                  null == i && (i = r), this.speechSettings.set_Voice(i), (e.voice = i), n.play(e);
                } catch (e) {
                  console.log("SpeechManager - speakSelection: ", e);
                }
              }
              stop(e) {
                try {
                  if (0 == Object.keys(this.voiceToEngineMap).length) return;
                  var t = this.voiceToEngineMap[this.speechSettings.get_Voice()];
                  if (void 0 === t) {
                    var r = this.speechSettings.getLocale(),
                      n = this.configuration.getConfiguration();
                    this.speechSettings.set_Voice(n[r].speechoptions.voice), (t = this.voiceToEngineMap[this.speechSettings.get_Voice()]);
                  }
                  null !== t && t.stop(e);
                } catch (e) {
                  console.log("SpeechManager - stop: ", e);
                }
              }
              pause(e) {
                try {
                  if (0 == Object.keys(this.voiceToEngineMap).length) return;
                  var t = this.voiceToEngineMap[this.speechSettings.get_Voice()];
                  if (void 0 === t) {
                    var r = this.speechSettings.getLocale(),
                      n = this.configuration.getConfiguration();
                    this.speechSettings.set_Voice(n[r].voice), (t = this.voiceToEngineMap[this.speechSettings.get_Voice()]);
                  }
                  null !== t && t.pause();
                } catch (e) {
                  console.log("SpeechManager - pause: ", e);
                }
              }
              getVoices(e) {
                for (var t in ((this._voices = new Array()),
                (this.voiceToEngineMap = new Array()),
                (this._voicesArray = []),
                this._speechEngines))
                  if (this._speechEngines.hasOwnProperty(t)) {
                    var r = this._speechEngines[t].getVoices();
                    for (var n in r)
                      if (r.hasOwnProperty(n)) {
                        this._voices[n] = r[n];
                        var i = { voice: n, description: r[n] };
                        this._voicesArray.push(i), (this.voiceToEngineMap[n] = this._speechEngines[t]);
                      }
                  }
                var o = { method: "onVoicesResponse", type: "SP_M_1342_BK", request: { origin: "ca753d9d-f8c8-47dd-bd00-8033cd620939" } };
                return (
                  (o.data = { voicelist: this._voicesArray }),
                  void 0 !== e.tabid && (o.tabid = e.tabid),
                  this.eventBus.pub("SpeechManagerBG", o),
                  this._voices
                );
              }
              onWordSpoken(e) {}
            }
          }
        ]));
    },
    function (e, t, r) {
      const n = r(9),
        i = r(25),
        { OEM: o } = r(30);
      e.exports = { TesseractWorker: i, utils: n, OEM: o };
    },
    function (e, t, r) {
      const n = r(10);
      e.exports = { loadLang: r(12)({ fetch: r(14), gunzip: r(15), resolveURL: r(2), ...n }), readImage: r(20), cache: n };
    },
    function (e, t, r) {
      const { set: n, get: i, del: o } = r(11);
      e.exports = { readCache: i, writeCache: n, deleteCache: o, checkCache: (e) => i(e).then((e) => void 0 !== e) };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "Store", function () {
          return n;
        }),
        r.d(t, "get", function () {
          return s;
        }),
        r.d(t, "set", function () {
          return a;
        }),
        r.d(t, "del", function () {
          return c;
        }),
        r.d(t, "clear", function () {
          return u;
        }),
        r.d(t, "keys", function () {
          return l;
        });
      class n {
        constructor(e = "keyval-store", t = "keyval") {
          (this.storeName = t),
            (this._dbp = new Promise((r, n) => {
              const i = indexedDB.open(e, 1);
              (i.onerror = () => n(i.error)),
                (i.onsuccess = () => r(i.result)),
                (i.onupgradeneeded = () => {
                  i.result.createObjectStore(t);
                });
            }));
        }
        _withIDBStore(e, t) {
          return this._dbp.then(
            (r) =>
              new Promise((n, i) => {
                const o = r.transaction(this.storeName, e);
                (o.oncomplete = () => n()), (o.onabort = o.onerror = () => i(o.error)), t(o.objectStore(this.storeName));
              })
          );
        }
      }
      let i;
      function o() {
        return i || (i = new n()), i;
      }
      function s(e, t = o()) {
        let r;
        return t
          ._withIDBStore("readonly", (t) => {
            r = t.get(e);
          })
          .then(() => r.result);
      }
      function a(e, t, r = o()) {
        return r._withIDBStore("readwrite", (r) => {
          r.put(t, e);
        });
      }
      function c(e, t = o()) {
        return t._withIDBStore("readwrite", (t) => {
          t.delete(e);
        });
      }
      function u(e = o()) {
        return e._withIDBStore("readwrite", (e) => {
          e.clear();
        });
      }
      function l(e = o()) {
        const t = [];
        return e
          ._withIDBStore("readonly", (e) => {
            (e.openKeyCursor || e.openCursor).call(e).onsuccess = function () {
              this.result && (t.push(this.result.key), this.result.continue());
            };
          })
          .then(() => t);
      }
    },
    function (e, t, r) {
      (function (t) {
        const n = r(13),
          i =
            (e) =>
            ({ TessModule: t, dataPath: r, cachePath: n, cacheMethod: i, lang: o }) =>
            (s) => {
              if (t) {
                if (r)
                  try {
                    t.FS.mkdir(r);
                  } catch (e) {}
                t.FS.writeFile(`${r || "."}/${o}.traineddata`, s);
              }
              return ["write", "refresh", void 0].includes(i) ? e.writeCache(`${n || "."}/${o}.traineddata`, s).then(() => s) : s;
            };
        e.exports =
          (e) =>
          ({ lang: r, ...o }) =>
            Promise.all(
              r.split("+").map(
                (
                  (e) =>
                  ({ langPath: r, cachePath: o, cacheMethod: s, ...a }) =>
                  (c) => {
                    let { readCache: u } = e;
                    return (
                      ["refresh", "none"].includes(s) && (u = () => Promise.resolve()),
                      u(`${o || "."}/${c}.traineddata`)
                        .then((t) => (void 0 === t ? Promise.reject() : i(e)({ cachePath: o, cacheMethod: s, lang: c, ...a })(t)))
                        .catch(() => {
                          const u = (t) =>
                            e
                              .fetch(`${t}/${c}.traineddata.gz`)
                              .then((e) => e.arrayBuffer())
                              .then((t) => e.gunzip(new Uint8Array(t)))
                              .then(i(e)({ cachePath: o, cacheMethod: s, lang: c, ...a }));
                          return n(r)
                            ? u(r)
                            : t.browser
                            ? u(e.resolveURL(r))
                            : e
                                .readCache(`${r}/${c}.traineddata.gz`)
                                .then((t) => e.gunzip(new Uint8Array(t)))
                                .then(i(e)({ cachePath: o, cacheMethod: s, lang: c, ...a }));
                        })
                    );
                  }
                )(e)(o)
              )
            );
      }).call(this, r(0));
    },
    function (e, t) {
      e.exports = function (e) {
        if ("string" != typeof e) return !1;
        var t = e.match(r);
        if (!t) return !1;
        var o = t[1];
        if (!o) return !1;
        if (n.test(o) || i.test(o)) return !0;
        return !1;
      };
      var r = /^(?:\w+:)?\/\/(\S+)$/,
        n = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,
        i = /^[^\s\.]+\.\S{2,}$/;
    },
    function (e, t) {
      e.exports = fetch.bind();
    },
    function (e, t, r) {
      e.exports = r(16).gunzipSync;
    },
    function (e, t, r) {
      (function (e, r) {
        /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
        (function () {
          "use strict";
          function n(e) {
            throw e;
          }
          var i = void 0,
            o = !0,
            s =
              "undefined" != typeof Uint8Array &&
              "undefined" != typeof Uint16Array &&
              "undefined" != typeof Uint32Array &&
              "undefined" != typeof DataView;
          function a(e, t) {
            (this.index = "number" == typeof t ? t : 0),
              (this.m = 0),
              (this.buffer = e instanceof (s ? Uint8Array : Array) ? e : new (s ? Uint8Array : Array)(32768)),
              2 * this.buffer.length <= this.index && n(Error("invalid index")),
              this.buffer.length <= this.index && this.f();
          }
          (a.prototype.f = function () {
            var e,
              t = this.buffer,
              r = t.length,
              n = new (s ? Uint8Array : Array)(r << 1);
            if (s) n.set(t);
            else for (e = 0; e < r; ++e) n[e] = t[e];
            return (this.buffer = n);
          }),
            (a.prototype.d = function (e, t, r) {
              var n,
                i = this.buffer,
                o = this.index,
                s = this.m,
                a = i[o];
              if (
                (r &&
                  1 < t &&
                  (e =
                    8 < t
                      ? ((p[255 & e] << 24) | (p[(e >>> 8) & 255] << 16) | (p[(e >>> 16) & 255] << 8) | p[(e >>> 24) & 255]) >> (32 - t)
                      : p[e] >> (8 - t)),
                8 > t + s)
              )
                (a = (a << t) | e), (s += t);
              else
                for (n = 0; n < t; ++n)
                  (a = (a << 1) | ((e >> (t - n - 1)) & 1)),
                    8 == ++s && ((s = 0), (i[o++] = p[a]), (a = 0), o === i.length && (i = this.f()));
              (i[o] = a), (this.buffer = i), (this.m = s), (this.index = o);
            }),
            (a.prototype.finish = function () {
              var e,
                t = this.buffer,
                r = this.index;
              return (
                0 < this.m && ((t[r] <<= 8 - this.m), (t[r] = p[t[r]]), r++), s ? (e = t.subarray(0, r)) : ((t.length = r), (e = t)), e
              );
            });
          var c,
            u = new (s ? Uint8Array : Array)(256);
          for (c = 0; 256 > c; ++c) {
            for (var l = (f = c), h = 7, f = f >>> 1; f; f >>>= 1) (l <<= 1), (l |= 1 & f), --h;
            u[c] = ((l << h) & 255) >>> 0;
          }
          var p = u;
          function d(e, t, r) {
            var n,
              i = "number" == typeof t ? t : (t = 0),
              o = "number" == typeof r ? r : e.length;
            for (n = -1, i = 7 & o; i--; ++t) n = (n >>> 8) ^ g[255 & (n ^ e[t])];
            for (i = o >> 3; i--; t += 8)
              n =
                ((n =
                  ((n =
                    ((n =
                      ((n =
                        ((n =
                          ((n = ((n = (n >>> 8) ^ g[255 & (n ^ e[t])]) >>> 8) ^ g[255 & (n ^ e[t + 1])]) >>> 8) ^
                          g[255 & (n ^ e[t + 2])]) >>>
                          8) ^
                        g[255 & (n ^ e[t + 3])]) >>>
                        8) ^
                      g[255 & (n ^ e[t + 4])]) >>>
                      8) ^
                    g[255 & (n ^ e[t + 5])]) >>>
                    8) ^
                  g[255 & (n ^ e[t + 6])]) >>>
                  8) ^
                g[255 & (n ^ e[t + 7])];
            return (4294967295 ^ n) >>> 0;
          }
          var m = [
              0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230,
              2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861,
              1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755,
              2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722,
              1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304,
              3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527,
              1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253,
              3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444,
              476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
              4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817,
              1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631,
              3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
              702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068,
              1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
              2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225,
              1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888,
              2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462,
              1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
              3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403,
              1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634,
              3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
              534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727,
              4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301,
              1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
              3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746,
              711928724, 3020668471, 3272380065, 1510334235, 755167117
            ],
            g = s ? new Uint32Array(m) : m;
          function y() {}
          function v(e) {
            (this.buffer = new (s ? Uint16Array : Array)(2 * e)), (this.length = 0);
          }
          function b(e) {
            var t,
              r,
              n,
              i,
              o,
              a,
              c,
              u,
              l,
              h,
              f = e.length,
              p = 0,
              d = Number.POSITIVE_INFINITY;
            for (u = 0; u < f; ++u) e[u] > p && (p = e[u]), e[u] < d && (d = e[u]);
            for (t = 1 << p, r = new (s ? Uint32Array : Array)(t), n = 1, i = 0, o = 2; n <= p; ) {
              for (u = 0; u < f; ++u)
                if (e[u] === n) {
                  for (a = 0, c = i, l = 0; l < n; ++l) (a = (a << 1) | (1 & c)), (c >>= 1);
                  for (h = (n << 16) | u, l = a; l < t; l += o) r[l] = h;
                  ++i;
                }
              ++n, (i <<= 1), (o <<= 1);
            }
            return [r, p, d];
          }
          function w(e, t) {
            (this.k = x),
              (this.F = 0),
              (this.input = s && e instanceof Array ? new Uint8Array(e) : e),
              (this.b = 0),
              t &&
                (t.lazy && (this.F = t.lazy),
                "number" == typeof t.compressionType && (this.k = t.compressionType),
                t.outputBuffer && (this.a = s && t.outputBuffer instanceof Array ? new Uint8Array(t.outputBuffer) : t.outputBuffer),
                "number" == typeof t.outputIndex && (this.b = t.outputIndex)),
              this.a || (this.a = new (s ? Uint8Array : Array)(32768));
          }
          (v.prototype.getParent = function (e) {
            return 2 * (((e - 2) / 4) | 0);
          }),
            (v.prototype.push = function (e, t) {
              var r,
                n,
                i,
                o = this.buffer;
              for (r = this.length, o[this.length++] = t, o[this.length++] = e; 0 < r && ((n = this.getParent(r)), o[r] > o[n]); )
                (i = o[r]), (o[r] = o[n]), (o[n] = i), (i = o[r + 1]), (o[r + 1] = o[n + 1]), (o[n + 1] = i), (r = n);
              return this.length;
            }),
            (v.prototype.pop = function () {
              var e,
                t,
                r,
                n,
                i,
                o = this.buffer;
              for (
                t = o[0], e = o[1], this.length -= 2, o[0] = o[this.length], o[1] = o[this.length + 1], i = 0;
                !((n = 2 * i + 2) >= this.length) && (n + 2 < this.length && o[n + 2] > o[n] && (n += 2), o[n] > o[i]);

              )
                (r = o[i]), (o[i] = o[n]), (o[n] = r), (r = o[i + 1]), (o[i + 1] = o[n + 1]), (o[n + 1] = r), (i = n);
              return { index: e, value: t, length: this.length };
            });
          var S,
            x = 2,
            E = { NONE: 0, L: 1, t: x, X: 3 },
            k = [];
          for (S = 0; 288 > S; S++)
            switch (o) {
              case 143 >= S:
                k.push([S + 48, 8]);
                break;
              case 255 >= S:
                k.push([S - 144 + 400, 9]);
                break;
              case 279 >= S:
                k.push([S - 256 + 0, 7]);
                break;
              case 287 >= S:
                k.push([S - 280 + 192, 8]);
                break;
              default:
                n("invalid literal: " + S);
            }
          function A(e, t) {
            (this.length = e), (this.N = t);
          }
          w.prototype.h = function () {
            var e,
              t,
              r,
              c,
              u = this.input;
            switch (this.k) {
              case 0:
                for (r = 0, c = u.length; r < c; ) {
                  var l,
                    h,
                    f,
                    p = (t = s ? u.subarray(r, r + 65535) : u.slice(r, r + 65535)),
                    d = (r += t.length) === c,
                    m = i,
                    g = i,
                    y = this.a,
                    v = this.b;
                  if (s) {
                    for (y = new Uint8Array(this.a.buffer); y.length <= v + p.length + 5; ) y = new Uint8Array(y.length << 1);
                    y.set(this.a);
                  }
                  if (
                    ((l = d ? 1 : 0),
                    (y[v++] = 0 | l),
                    (f = (65536 + ~(h = p.length)) & 65535),
                    (y[v++] = 255 & h),
                    (y[v++] = (h >>> 8) & 255),
                    (y[v++] = 255 & f),
                    (y[v++] = (f >>> 8) & 255),
                    s)
                  )
                    y.set(p, v), (v += p.length), (y = y.subarray(0, v));
                  else {
                    for (m = 0, g = p.length; m < g; ++m) y[v++] = p[m];
                    y.length = v;
                  }
                  (this.b = v), (this.a = y);
                }
                break;
              case 1:
                var b = new a(s ? new Uint8Array(this.a.buffer) : this.a, this.b);
                b.d(1, 1, o), b.d(1, 2, o);
                var w,
                  S,
                  E,
                  A = T(this, u);
                for (w = 0, S = A.length; w < S; w++)
                  if (((E = A[w]), a.prototype.d.apply(b, k[E]), 256 < E)) b.d(A[++w], A[++w], o), b.d(A[++w], 5), b.d(A[++w], A[++w], o);
                  else if (256 === E) break;
                (this.a = b.finish()), (this.b = this.a.length);
                break;
              case x:
                var P,
                  C,
                  R,
                  I,
                  B,
                  L,
                  U,
                  O,
                  z,
                  D,
                  j,
                  V,
                  H,
                  q,
                  N,
                  F = new a(s ? new Uint8Array(this.a.buffer) : this.a, this.b),
                  G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                  W = Array(19);
                for (
                  P = x, F.d(1, 1, o), F.d(P, 2, o), C = T(this, u), U = M((L = _(this.U, 15))), z = M((O = _(this.T, 7))), R = 286;
                  257 < R && 0 === L[R - 1];
                  R--
                );
                for (I = 30; 1 < I && 0 === O[I - 1]; I--);
                var Y,
                  J,
                  K,
                  Z,
                  X,
                  $,
                  Q = R,
                  ee = I,
                  te = new (s ? Uint32Array : Array)(Q + ee),
                  re = new (s ? Uint32Array : Array)(316),
                  ne = new (s ? Uint8Array : Array)(19);
                for (Y = J = 0; Y < Q; Y++) te[J++] = L[Y];
                for (Y = 0; Y < ee; Y++) te[J++] = O[Y];
                if (!s) for (Y = 0, Z = ne.length; Y < Z; ++Y) ne[Y] = 0;
                for (Y = X = 0, Z = te.length; Y < Z; Y += J) {
                  for (J = 1; Y + J < Z && te[Y + J] === te[Y]; ++J);
                  if (((K = J), 0 === te[Y]))
                    if (3 > K) for (; 0 < K--; ) (re[X++] = 0), ne[0]++;
                    else
                      for (; 0 < K; )
                        ($ = 138 > K ? K : 138) > K - 3 && $ < K && ($ = K - 3),
                          10 >= $ ? ((re[X++] = 17), (re[X++] = $ - 3), ne[17]++) : ((re[X++] = 18), (re[X++] = $ - 11), ne[18]++),
                          (K -= $);
                  else if (((re[X++] = te[Y]), ne[te[Y]]++, 3 > --K)) for (; 0 < K--; ) (re[X++] = te[Y]), ne[te[Y]]++;
                  else
                    for (; 0 < K; )
                      ($ = 6 > K ? K : 6) > K - 3 && $ < K && ($ = K - 3), (re[X++] = 16), (re[X++] = $ - 3), ne[16]++, (K -= $);
                }
                for (e = s ? re.subarray(0, X) : re.slice(0, X), D = _(ne, 7), q = 0; 19 > q; q++) W[q] = D[G[q]];
                for (B = 19; 4 < B && 0 === W[B - 1]; B--);
                for (j = M(D), F.d(R - 257, 5, o), F.d(I - 1, 5, o), F.d(B - 4, 4, o), q = 0; q < B; q++) F.d(W[q], 3, o);
                for (q = 0, N = e.length; q < N; q++)
                  if (((V = e[q]), F.d(j[V], D[V], o), 16 <= V)) {
                    switch ((q++, V)) {
                      case 16:
                        H = 2;
                        break;
                      case 17:
                        H = 3;
                        break;
                      case 18:
                        H = 7;
                        break;
                      default:
                        n("invalid code: " + V);
                    }
                    F.d(e[q], H, o);
                  }
                var ie,
                  oe,
                  se,
                  ae,
                  ce,
                  ue,
                  le,
                  he,
                  fe = [U, L],
                  pe = [z, O];
                for (ce = fe[0], ue = fe[1], le = pe[0], he = pe[1], ie = 0, oe = C.length; ie < oe; ++ie)
                  if (((se = C[ie]), F.d(ce[se], ue[se], o), 256 < se))
                    F.d(C[++ie], C[++ie], o), (ae = C[++ie]), F.d(le[ae], he[ae], o), F.d(C[++ie], C[++ie], o);
                  else if (256 === se) break;
                (this.a = F.finish()), (this.b = this.a.length);
                break;
              default:
                n("invalid compression type");
            }
            return this.a;
          };
          var P = (function () {
              function e(e) {
                switch (o) {
                  case 3 === e:
                    return [257, e - 3, 0];
                  case 4 === e:
                    return [258, e - 4, 0];
                  case 5 === e:
                    return [259, e - 5, 0];
                  case 6 === e:
                    return [260, e - 6, 0];
                  case 7 === e:
                    return [261, e - 7, 0];
                  case 8 === e:
                    return [262, e - 8, 0];
                  case 9 === e:
                    return [263, e - 9, 0];
                  case 10 === e:
                    return [264, e - 10, 0];
                  case 12 >= e:
                    return [265, e - 11, 1];
                  case 14 >= e:
                    return [266, e - 13, 1];
                  case 16 >= e:
                    return [267, e - 15, 1];
                  case 18 >= e:
                    return [268, e - 17, 1];
                  case 22 >= e:
                    return [269, e - 19, 2];
                  case 26 >= e:
                    return [270, e - 23, 2];
                  case 30 >= e:
                    return [271, e - 27, 2];
                  case 34 >= e:
                    return [272, e - 31, 2];
                  case 42 >= e:
                    return [273, e - 35, 3];
                  case 50 >= e:
                    return [274, e - 43, 3];
                  case 58 >= e:
                    return [275, e - 51, 3];
                  case 66 >= e:
                    return [276, e - 59, 3];
                  case 82 >= e:
                    return [277, e - 67, 4];
                  case 98 >= e:
                    return [278, e - 83, 4];
                  case 114 >= e:
                    return [279, e - 99, 4];
                  case 130 >= e:
                    return [280, e - 115, 4];
                  case 162 >= e:
                    return [281, e - 131, 5];
                  case 194 >= e:
                    return [282, e - 163, 5];
                  case 226 >= e:
                    return [283, e - 195, 5];
                  case 257 >= e:
                    return [284, e - 227, 5];
                  case 258 === e:
                    return [285, e - 258, 0];
                  default:
                    n("invalid length: " + e);
                }
              }
              var t,
                r,
                i = [];
              for (t = 3; 258 >= t; t++) (r = e(t)), (i[t] = (r[2] << 24) | (r[1] << 16) | r[0]);
              return i;
            })(),
            C = s ? new Uint32Array(P) : P;
          function T(e, t) {
            function r(e, t) {
              var r,
                i,
                s,
                a,
                c = e.N,
                u = [],
                l = 0;
              switch (((r = C[e.length]), (u[l++] = 65535 & r), (u[l++] = (r >> 16) & 255), (u[l++] = r >> 24), o)) {
                case 1 === c:
                  i = [0, c - 1, 0];
                  break;
                case 2 === c:
                  i = [1, c - 2, 0];
                  break;
                case 3 === c:
                  i = [2, c - 3, 0];
                  break;
                case 4 === c:
                  i = [3, c - 4, 0];
                  break;
                case 6 >= c:
                  i = [4, c - 5, 1];
                  break;
                case 8 >= c:
                  i = [5, c - 7, 1];
                  break;
                case 12 >= c:
                  i = [6, c - 9, 2];
                  break;
                case 16 >= c:
                  i = [7, c - 13, 2];
                  break;
                case 24 >= c:
                  i = [8, c - 17, 3];
                  break;
                case 32 >= c:
                  i = [9, c - 25, 3];
                  break;
                case 48 >= c:
                  i = [10, c - 33, 4];
                  break;
                case 64 >= c:
                  i = [11, c - 49, 4];
                  break;
                case 96 >= c:
                  i = [12, c - 65, 5];
                  break;
                case 128 >= c:
                  i = [13, c - 97, 5];
                  break;
                case 192 >= c:
                  i = [14, c - 129, 6];
                  break;
                case 256 >= c:
                  i = [15, c - 193, 6];
                  break;
                case 384 >= c:
                  i = [16, c - 257, 7];
                  break;
                case 512 >= c:
                  i = [17, c - 385, 7];
                  break;
                case 768 >= c:
                  i = [18, c - 513, 8];
                  break;
                case 1024 >= c:
                  i = [19, c - 769, 8];
                  break;
                case 1536 >= c:
                  i = [20, c - 1025, 9];
                  break;
                case 2048 >= c:
                  i = [21, c - 1537, 9];
                  break;
                case 3072 >= c:
                  i = [22, c - 2049, 10];
                  break;
                case 4096 >= c:
                  i = [23, c - 3073, 10];
                  break;
                case 6144 >= c:
                  i = [24, c - 4097, 11];
                  break;
                case 8192 >= c:
                  i = [25, c - 6145, 11];
                  break;
                case 12288 >= c:
                  i = [26, c - 8193, 12];
                  break;
                case 16384 >= c:
                  i = [27, c - 12289, 12];
                  break;
                case 24576 >= c:
                  i = [28, c - 16385, 13];
                  break;
                case 32768 >= c:
                  i = [29, c - 24577, 13];
                  break;
                default:
                  n("invalid distance");
              }
              for (r = i, u[l++] = r[0], u[l++] = r[1], u[l++] = r[2], s = 0, a = u.length; s < a; ++s) y[v++] = u[s];
              w[u[0]]++, S[u[3]]++, (b = e.length + t - 1), (d = null);
            }
            var a,
              c,
              u,
              l,
              h,
              f,
              p,
              d,
              m,
              g = {},
              y = s ? new Uint16Array(2 * t.length) : [],
              v = 0,
              b = 0,
              w = new (s ? Uint32Array : Array)(286),
              S = new (s ? Uint32Array : Array)(30),
              x = e.F;
            if (!s) {
              for (u = 0; 285 >= u; ) w[u++] = 0;
              for (u = 0; 29 >= u; ) S[u++] = 0;
            }
            for (w[256] = 1, a = 0, c = t.length; a < c; ++a) {
              for (u = h = 0, l = 3; u < l && a + u !== c; ++u) h = (h << 8) | t[a + u];
              if ((g[h] === i && (g[h] = []), (f = g[h]), !(0 < b--))) {
                for (; 0 < f.length && 32768 < a - f[0]; ) f.shift();
                if (a + 3 >= c) {
                  for (d && r(d, -1), u = 0, l = c - a; u < l; ++u) (m = t[a + u]), (y[v++] = m), ++w[m];
                  break;
                }
                0 < f.length
                  ? ((p = R(t, a, f)),
                    d
                      ? d.length < p.length
                        ? ((m = t[a - 1]), (y[v++] = m), ++w[m], r(p, 0))
                        : r(d, -1)
                      : p.length < x
                      ? (d = p)
                      : r(p, 0))
                  : d
                  ? r(d, -1)
                  : ((m = t[a]), (y[v++] = m), ++w[m]);
              }
              f.push(a);
            }
            return (y[v++] = 256), w[256]++, (e.U = w), (e.T = S), s ? y.subarray(0, v) : y;
          }
          function R(e, t, r) {
            var n,
              i,
              o,
              s,
              a,
              c,
              u = 0,
              l = e.length;
            (s = 0), (c = r.length);
            e: for (; s < c; s++) {
              if (((n = r[c - s - 1]), (o = 3), 3 < u)) {
                for (a = u; 3 < a; a--) if (e[n + a - 1] !== e[t + a - 1]) continue e;
                o = u;
              }
              for (; 258 > o && t + o < l && e[n + o] === e[t + o]; ) ++o;
              if ((o > u && ((i = n), (u = o)), 258 === o)) break;
            }
            return new A(u, t - i);
          }
          function _(e, t) {
            var r,
              n,
              i,
              o,
              a,
              c = e.length,
              u = new v(572),
              l = new (s ? Uint8Array : Array)(c);
            if (!s) for (o = 0; o < c; o++) l[o] = 0;
            for (o = 0; o < c; ++o) 0 < e[o] && u.push(o, e[o]);
            if (((r = Array(u.length / 2)), (n = new (s ? Uint32Array : Array)(u.length / 2)), 1 === r.length))
              return (l[u.pop().index] = 1), l;
            for (o = 0, a = u.length / 2; o < a; ++o) (r[o] = u.pop()), (n[o] = r[o].value);
            for (
              i = (function (e, t, r) {
                function n(e) {
                  var r = d[e][m[e]];
                  r === t ? (n(e + 1), n(e + 1)) : --f[r], ++m[e];
                }
                var i,
                  o,
                  a,
                  c,
                  u,
                  l = new (s ? Uint16Array : Array)(r),
                  h = new (s ? Uint8Array : Array)(r),
                  f = new (s ? Uint8Array : Array)(t),
                  p = Array(r),
                  d = Array(r),
                  m = Array(r),
                  g = (1 << r) - t,
                  y = 1 << (r - 1);
                for (l[r - 1] = t, o = 0; o < r; ++o)
                  g < y ? (h[o] = 0) : ((h[o] = 1), (g -= y)), (g <<= 1), (l[r - 2 - o] = ((l[r - 1 - o] / 2) | 0) + t);
                for (l[0] = h[0], p[0] = Array(l[0]), d[0] = Array(l[0]), o = 1; o < r; ++o)
                  l[o] > 2 * l[o - 1] + h[o] && (l[o] = 2 * l[o - 1] + h[o]), (p[o] = Array(l[o])), (d[o] = Array(l[o]));
                for (i = 0; i < t; ++i) f[i] = r;
                for (a = 0; a < l[r - 1]; ++a) (p[r - 1][a] = e[a]), (d[r - 1][a] = a);
                for (i = 0; i < r; ++i) m[i] = 0;
                for (1 === h[r - 1] && (--f[0], ++m[r - 1]), o = r - 2; 0 <= o; --o) {
                  for (c = i = 0, u = m[o + 1], a = 0; a < l[o]; a++)
                    (c = p[o + 1][u] + p[o + 1][u + 1]) > e[i]
                      ? ((p[o][a] = c), (d[o][a] = t), (u += 2))
                      : ((p[o][a] = e[i]), (d[o][a] = i), ++i);
                  (m[o] = 0), 1 === h[o] && n(o);
                }
                return f;
              })(n, n.length, t),
                o = 0,
                a = r.length;
              o < a;
              ++o
            )
              l[r[o].index] = i[o];
            return l;
          }
          function M(e) {
            var t,
              r,
              n,
              i,
              o = new (s ? Uint16Array : Array)(e.length),
              a = [],
              c = [],
              u = 0;
            for (t = 0, r = e.length; t < r; t++) a[e[t]] = 1 + (0 | a[e[t]]);
            for (t = 1, r = 16; t <= r; t++) (c[t] = u), (u += 0 | a[t]), (u <<= 1);
            for (t = 0, r = e.length; t < r; t++)
              for (u = c[e[t]], c[e[t]] += 1, n = o[t] = 0, i = e[t]; n < i; n++) (o[t] = (o[t] << 1) | (1 & u)), (u >>>= 1);
            return o;
          }
          function I(e, t) {
            (this.input = e),
              (this.b = this.c = 0),
              (this.g = {}),
              t &&
                (t.flags && (this.g = t.flags),
                "string" == typeof t.filename && (this.filename = t.filename),
                "string" == typeof t.comment && (this.w = t.comment),
                t.deflateOptions && (this.l = t.deflateOptions)),
              this.l || (this.l = {});
          }
          I.prototype.h = function () {
            var e,
              t,
              r,
              n,
              o,
              a,
              c,
              u,
              l = new (s ? Uint8Array : Array)(32768),
              h = 0,
              f = this.input,
              p = this.c,
              m = this.filename,
              g = this.w;
            if (
              ((l[h++] = 31),
              (l[h++] = 139),
              (l[h++] = 8),
              (e = 0),
              this.g.fname && (e |= U),
              this.g.fcomment && (e |= O),
              this.g.fhcrc && (e |= L),
              (l[h++] = e),
              (t = ((Date.now ? Date.now() : +new Date()) / 1e3) | 0),
              (l[h++] = 255 & t),
              (l[h++] = (t >>> 8) & 255),
              (l[h++] = (t >>> 16) & 255),
              (l[h++] = (t >>> 24) & 255),
              (l[h++] = 0),
              (l[h++] = B),
              this.g.fname !== i)
            ) {
              for (c = 0, u = m.length; c < u; ++c) 255 < (a = m.charCodeAt(c)) && (l[h++] = (a >>> 8) & 255), (l[h++] = 255 & a);
              l[h++] = 0;
            }
            if (this.g.comment) {
              for (c = 0, u = g.length; c < u; ++c) 255 < (a = g.charCodeAt(c)) && (l[h++] = (a >>> 8) & 255), (l[h++] = 255 & a);
              l[h++] = 0;
            }
            return (
              this.g.fhcrc && ((r = 65535 & d(l, 0, h)), (l[h++] = 255 & r), (l[h++] = (r >>> 8) & 255)),
              (this.l.outputBuffer = l),
              (this.l.outputIndex = h),
              (l = (o = new w(f, this.l)).h()),
              (h = o.b),
              s &&
                (h + 8 > l.buffer.byteLength
                  ? ((this.a = new Uint8Array(h + 8)), this.a.set(new Uint8Array(l.buffer)), (l = this.a))
                  : (l = new Uint8Array(l.buffer))),
              (n = d(f, i, i)),
              (l[h++] = 255 & n),
              (l[h++] = (n >>> 8) & 255),
              (l[h++] = (n >>> 16) & 255),
              (l[h++] = (n >>> 24) & 255),
              (u = f.length),
              (l[h++] = 255 & u),
              (l[h++] = (u >>> 8) & 255),
              (l[h++] = (u >>> 16) & 255),
              (l[h++] = (u >>> 24) & 255),
              (this.c = p),
              s && h < l.length && (this.a = l = l.subarray(0, h)),
              l
            );
          };
          var B = 255,
            L = 2,
            U = 8,
            O = 16;
          function z(e, t) {
            switch (
              ((this.o = []),
              (this.p = 32768),
              (this.e = this.j = this.c = this.s = 0),
              (this.input = s ? new Uint8Array(e) : e),
              (this.u = !1),
              (this.q = j),
              (this.K = !1),
              (!t && (t = {})) ||
                (t.index && (this.c = t.index),
                t.bufferSize && (this.p = t.bufferSize),
                t.bufferType && (this.q = t.bufferType),
                t.resize && (this.K = t.resize)),
              this.q)
            ) {
              case D:
                (this.b = 32768), (this.a = new (s ? Uint8Array : Array)(32768 + this.p + 258));
                break;
              case j:
                (this.b = 0), (this.a = new (s ? Uint8Array : Array)(this.p)), (this.f = this.S), (this.z = this.O), (this.r = this.Q);
                break;
              default:
                n(Error("invalid inflate mode"));
            }
          }
          var D = 0,
            j = 1;
          z.prototype.i = function () {
            for (; !this.u; ) {
              var e = ie(this, 3);
              switch ((1 & e && (this.u = o), (e >>>= 1))) {
                case 0:
                  var t = this.input,
                    r = this.c,
                    a = this.a,
                    c = this.b,
                    u = t.length,
                    l = i,
                    h = a.length,
                    f = i;
                  switch (
                    ((this.e = this.j = 0),
                    r + 1 >= u && n(Error("invalid uncompressed block header: LEN")),
                    (l = t[r++] | (t[r++] << 8)),
                    r + 1 >= u && n(Error("invalid uncompressed block header: NLEN")),
                    l === ~(t[r++] | (t[r++] << 8)) && n(Error("invalid uncompressed block header: length verify")),
                    r + l > t.length && n(Error("input buffer is broken")),
                    this.q)
                  ) {
                    case D:
                      for (; c + l > a.length; ) {
                        if (((l -= f = h - c), s)) a.set(t.subarray(r, r + f), c), (c += f), (r += f);
                        else for (; f--; ) a[c++] = t[r++];
                        (this.b = c), (a = this.f()), (c = this.b);
                      }
                      break;
                    case j:
                      for (; c + l > a.length; ) a = this.f({ B: 2 });
                      break;
                    default:
                      n(Error("invalid inflate mode"));
                  }
                  if (s) a.set(t.subarray(r, r + l), c), (c += l), (r += l);
                  else for (; l--; ) a[c++] = t[r++];
                  (this.c = r), (this.b = c), (this.a = a);
                  break;
                case 1:
                  this.r(te, ne);
                  break;
                case 2:
                  var p,
                    d,
                    m,
                    g,
                    y = ie(this, 5) + 257,
                    v = ie(this, 5) + 1,
                    w = ie(this, 4) + 4,
                    S = new (s ? Uint8Array : Array)(N.length),
                    x = i,
                    E = i,
                    k = i,
                    A = i,
                    P = i;
                  for (P = 0; P < w; ++P) S[N[P]] = ie(this, 3);
                  if (!s) for (P = w, w = S.length; P < w; ++P) S[N[P]] = 0;
                  for (p = b(S), x = new (s ? Uint8Array : Array)(y + v), P = 0, g = y + v; P < g; )
                    switch (((E = oe(this, p)), E)) {
                      case 16:
                        for (A = 3 + ie(this, 2); A--; ) x[P++] = k;
                        break;
                      case 17:
                        for (A = 3 + ie(this, 3); A--; ) x[P++] = 0;
                        k = 0;
                        break;
                      case 18:
                        for (A = 11 + ie(this, 7); A--; ) x[P++] = 0;
                        k = 0;
                        break;
                      default:
                        k = x[P++] = E;
                    }
                  (d = b(s ? x.subarray(0, y) : x.slice(0, y))), (m = b(s ? x.subarray(y) : x.slice(y))), this.r(d, m);
                  break;
                default:
                  n(Error("unknown BTYPE: " + e));
              }
            }
            return this.z();
          };
          var V,
            H,
            q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            N = s ? new Uint16Array(q) : q,
            F = [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258
            ],
            G = s ? new Uint16Array(F) : F,
            W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
            Y = s ? new Uint8Array(W) : W,
            J = [
              1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
              12289, 16385, 24577
            ],
            K = s ? new Uint16Array(J) : J,
            Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            X = s ? new Uint8Array(Z) : Z,
            $ = new (s ? Uint8Array : Array)(288);
          for (V = 0, H = $.length; V < H; ++V) $[V] = 143 >= V ? 8 : 255 >= V ? 9 : 279 >= V ? 7 : 8;
          var Q,
            ee,
            te = b($),
            re = new (s ? Uint8Array : Array)(30);
          for (Q = 0, ee = re.length; Q < ee; ++Q) re[Q] = 5;
          var ne = b(re);
          function ie(e, t) {
            for (var r, i = e.j, o = e.e, s = e.input, a = e.c, c = s.length; o < t; )
              a >= c && n(Error("input buffer is broken")), (i |= s[a++] << o), (o += 8);
            return (r = i & ((1 << t) - 1)), (e.j = i >>> t), (e.e = o - t), (e.c = a), r;
          }
          function oe(e, t) {
            for (var r, i, o = e.j, s = e.e, a = e.input, c = e.c, u = a.length, l = t[0], h = t[1]; s < h && !(c >= u); )
              (o |= a[c++] << s), (s += 8);
            return (
              (i = (r = l[o & ((1 << h) - 1)]) >>> 16) > s && n(Error("invalid code length: " + i)),
              (e.j = o >> i),
              (e.e = s - i),
              (e.c = c),
              65535 & r
            );
          }
          function se(e) {
            (this.input = e), (this.c = 0), (this.G = []), (this.R = !1);
          }
          function ae(e) {
            if ("string" == typeof e) {
              var t,
                r,
                n = e.split("");
              for (t = 0, r = n.length; t < r; t++) n[t] = (255 & n[t].charCodeAt(0)) >>> 0;
              e = n;
            }
            for (var i, o = 1, s = 0, a = e.length, c = 0; 0 < a; ) {
              a -= i = 1024 < a ? 1024 : a;
              do {
                s += o += e[c++];
              } while (--i);
              (o %= 65521), (s %= 65521);
            }
            return ((s << 16) | o) >>> 0;
          }
          function ce(e, t) {
            var r, i;
            switch (
              ((this.input = e),
              (this.c = 0),
              (!t && (t = {})) || (t.index && (this.c = t.index), t.verify && (this.V = t.verify)),
              (r = e[this.c++]),
              (i = e[this.c++]),
              15 & r)
            ) {
              case ue:
                this.method = ue;
                break;
              default:
                n(Error("unsupported compression method"));
            }
            0 != ((r << 8) + i) % 31 && n(Error("invalid fcheck flag:" + (((r << 8) + i) % 31))),
              32 & i && n(Error("fdict flag is not supported")),
              (this.J = new z(e, { index: this.c, bufferSize: t.bufferSize, bufferType: t.bufferType, resize: t.resize }));
          }
          (z.prototype.r = function (e, t) {
            var r = this.a,
              n = this.b;
            this.A = e;
            for (var i, o, s, a, c = r.length - 258; 256 !== (i = oe(this, e)); )
              if (256 > i) n >= c && ((this.b = n), (r = this.f()), (n = this.b)), (r[n++] = i);
              else
                for (
                  a = G[(o = i - 257)],
                    0 < Y[o] && (a += ie(this, Y[o])),
                    i = oe(this, t),
                    s = K[i],
                    0 < X[i] && (s += ie(this, X[i])),
                    n >= c && ((this.b = n), (r = this.f()), (n = this.b));
                  a--;

                )
                  r[n] = r[n++ - s];
            for (; 8 <= this.e; ) (this.e -= 8), this.c--;
            this.b = n;
          }),
            (z.prototype.Q = function (e, t) {
              var r = this.a,
                n = this.b;
              this.A = e;
              for (var i, o, s, a, c = r.length; 256 !== (i = oe(this, e)); )
                if (256 > i) n >= c && (c = (r = this.f()).length), (r[n++] = i);
                else
                  for (
                    a = G[(o = i - 257)],
                      0 < Y[o] && (a += ie(this, Y[o])),
                      i = oe(this, t),
                      s = K[i],
                      0 < X[i] && (s += ie(this, X[i])),
                      n + a > c && (c = (r = this.f()).length);
                    a--;

                  )
                    r[n] = r[n++ - s];
              for (; 8 <= this.e; ) (this.e -= 8), this.c--;
              this.b = n;
            }),
            (z.prototype.f = function () {
              var e,
                t,
                r = new (s ? Uint8Array : Array)(this.b - 32768),
                n = this.b - 32768,
                i = this.a;
              if (s) r.set(i.subarray(32768, r.length));
              else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];
              if ((this.o.push(r), (this.s += r.length), s)) i.set(i.subarray(n, n + 32768));
              else for (e = 0; 32768 > e; ++e) i[e] = i[n + e];
              return (this.b = 32768), i;
            }),
            (z.prototype.S = function (e) {
              var t,
                r,
                n,
                i = (this.input.length / this.c + 1) | 0,
                o = this.input,
                a = this.a;
              return (
                e && ("number" == typeof e.B && (i = e.B), "number" == typeof e.M && (i += e.M)),
                2 > i
                  ? (r = (n = (((o.length - this.c) / this.A[2] / 2) * 258) | 0) < a.length ? a.length + n : a.length << 1)
                  : (r = a.length * i),
                s ? (t = new Uint8Array(r)).set(a) : (t = a),
                (this.a = t)
              );
            }),
            (z.prototype.z = function () {
              var e,
                t,
                r,
                n,
                i,
                o = 0,
                a = this.a,
                c = this.o,
                u = new (s ? Uint8Array : Array)(this.s + (this.b - 32768));
              if (0 === c.length) return s ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
              for (t = 0, r = c.length; t < r; ++t) for (n = 0, i = (e = c[t]).length; n < i; ++n) u[o++] = e[n];
              for (t = 32768, r = this.b; t < r; ++t) u[o++] = a[t];
              return (this.o = []), (this.buffer = u);
            }),
            (z.prototype.O = function () {
              var e,
                t = this.b;
              return (
                s
                  ? this.K
                    ? (e = new Uint8Array(t)).set(this.a.subarray(0, t))
                    : (e = this.a.subarray(0, t))
                  : (this.a.length > t && (this.a.length = t), (e = this.a)),
                (this.buffer = e)
              );
            }),
            (se.prototype.i = function () {
              for (var e = this.input.length; this.c < e; ) {
                var t,
                  r,
                  a = new y(),
                  c = i,
                  u = i,
                  l = i,
                  h = i,
                  f = i,
                  p = i,
                  m = i,
                  g = this.input,
                  v = this.c;
                switch (
                  ((a.C = g[v++]),
                  (a.D = g[v++]),
                  (31 !== a.C || 139 !== a.D) && n(Error("invalid file signature:" + a.C + "," + a.D)),
                  (a.v = g[v++]),
                  a.v)
                ) {
                  case 8:
                    break;
                  default:
                    n(Error("unknown compression method: " + a.v));
                }
                if (
                  ((a.n = g[v++]),
                  (r = g[v++] | (g[v++] << 8) | (g[v++] << 16) | (g[v++] << 24)),
                  (a.$ = new Date(1e3 * r)),
                  (a.ba = g[v++]),
                  (a.aa = g[v++]),
                  0 < (4 & a.n) && ((a.W = g[v++] | (g[v++] << 8)), (v += a.W)),
                  0 < (a.n & U))
                ) {
                  for (p = [], f = 0; 0 < (h = g[v++]); ) p[f++] = String.fromCharCode(h);
                  a.name = p.join("");
                }
                if (0 < (a.n & O)) {
                  for (p = [], f = 0; 0 < (h = g[v++]); ) p[f++] = String.fromCharCode(h);
                  a.w = p.join("");
                }
                0 < (a.n & L) && ((a.P = 65535 & d(g, 0, v)), a.P !== (g[v++] | (g[v++] << 8)) && n(Error("invalid header crc16"))),
                  (c = g[g.length - 4] | (g[g.length - 3] << 8) | (g[g.length - 2] << 16) | (g[g.length - 1] << 24)),
                  g.length - v - 4 - 4 < 512 * c && (l = c),
                  (u = new z(g, { index: v, bufferSize: l })),
                  (a.data = t = u.i()),
                  (v = u.c),
                  (a.Y = m = (g[v++] | (g[v++] << 8) | (g[v++] << 16) | (g[v++] << 24)) >>> 0),
                  d(t, i, i) !== m && n(Error("invalid CRC-32 checksum: 0x" + d(t, i, i).toString(16) + " / 0x" + m.toString(16))),
                  (a.Z = c = (g[v++] | (g[v++] << 8) | (g[v++] << 16) | (g[v++] << 24)) >>> 0),
                  (4294967295 & t.length) !== c && n(Error("invalid input size: " + (4294967295 & t.length) + " / " + c)),
                  this.G.push(a),
                  (this.c = v);
              }
              this.R = o;
              var b,
                w,
                S,
                x = this.G,
                E = 0,
                k = 0;
              for (b = 0, w = x.length; b < w; ++b) k += x[b].data.length;
              if (s) for (S = new Uint8Array(k), b = 0; b < w; ++b) S.set(x[b].data, E), (E += x[b].data.length);
              else {
                for (S = [], b = 0; b < w; ++b) S[b] = x[b].data;
                S = Array.prototype.concat.apply([], S);
              }
              return S;
            }),
            (ce.prototype.i = function () {
              var e,
                t = this.input;
              return (
                (e = this.J.i()),
                (this.c = this.J.c),
                this.V &&
                  ((t[this.c++] << 24) | (t[this.c++] << 16) | (t[this.c++] << 8) | t[this.c++]) >>> 0 !== ae(e) &&
                  n(Error("invalid adler-32 checksum")),
                e
              );
            });
          var ue = 8;
          function le(e, t) {
            (this.input = e), (this.a = new (s ? Uint8Array : Array)(32768)), (this.k = he.t);
            var r,
              n = {};
            for (r in ((!t && (t = {})) || "number" != typeof t.compressionType || (this.k = t.compressionType), t)) n[r] = t[r];
            (n.outputBuffer = this.a), (this.I = new w(this.input, n));
          }
          var he = E;
          function fe(e, t) {
            var r;
            return (r = new le(e).h()), t || (t = {}), t.H ? r : ge(r);
          }
          function pe(e, t) {
            var r;
            return (e.subarray = e.slice), (r = new ce(e).i()), t || (t = {}), t.noBuffer ? r : ge(r);
          }
          function de(e, t) {
            var r;
            return (e.subarray = e.slice), (r = new I(e).h()), t || (t = {}), t.H ? r : ge(r);
          }
          function me(e, t) {
            var r;
            return (e.subarray = e.slice), (r = new se(e).i()), t || (t = {}), t.H ? r : ge(r);
          }
          function ge(e) {
            var t,
              n,
              i = new r(e.length);
            for (t = 0, n = e.length; t < n; ++t) i[t] = e[t];
            return i;
          }
          (le.prototype.h = function () {
            var e,
              t,
              r,
              i,
              o,
              a,
              c,
              u = 0;
            switch (((c = this.a), (e = ue))) {
              case ue:
                t = Math.LOG2E * Math.log(32768) - 8;
                break;
              default:
                n(Error("invalid compression method"));
            }
            switch (((r = (t << 4) | e), (c[u++] = r), e)) {
              case ue:
                switch (this.k) {
                  case he.NONE:
                    o = 0;
                    break;
                  case he.L:
                    o = 1;
                    break;
                  case he.t:
                    o = 2;
                    break;
                  default:
                    n(Error("unsupported compression type"));
                }
                break;
              default:
                n(Error("invalid compression method"));
            }
            return (
              (i = (o << 6) | 0),
              (c[u++] = i | (31 - ((256 * r + i) % 31))),
              (a = ae(this.input)),
              (this.I.b = u),
              (u = (c = this.I.h()).length),
              s &&
                ((c = new Uint8Array(c.buffer)).length <= u + 4 && ((this.a = new Uint8Array(c.length + 4)), this.a.set(c), (c = this.a)),
                (c = c.subarray(0, u + 4))),
              (c[u++] = (a >> 24) & 255),
              (c[u++] = (a >> 16) & 255),
              (c[u++] = (a >> 8) & 255),
              (c[u++] = 255 & a),
              c
            );
          }),
            (t.deflate = function (t, r, n) {
              e.nextTick(function () {
                var e, i;
                try {
                  i = fe(t, n);
                } catch (t) {
                  e = t;
                }
                r(e, i);
              });
            }),
            (t.deflateSync = fe),
            (t.inflate = function (t, r, n) {
              e.nextTick(function () {
                var e, i;
                try {
                  i = pe(t, n);
                } catch (t) {
                  e = t;
                }
                r(e, i);
              });
            }),
            (t.inflateSync = pe),
            (t.gzip = function (t, r, n) {
              e.nextTick(function () {
                var e, i;
                try {
                  i = de(t, n);
                } catch (t) {
                  e = t;
                }
                r(e, i);
              });
            }),
            (t.gzipSync = de),
            (t.gunzip = function (t, r, n) {
              e.nextTick(function () {
                var e, i;
                try {
                  i = me(t, n);
                } catch (t) {
                  e = t;
                }
                r(e, i);
              });
            }),
            (t.gunzipSync = me);
        }).call(this);
      }).call(this, r(0), r(1).Buffer);
    },
    function (e, t, r) {
      "use strict";
      (t.byteLength = function (e) {
        var t = u(e),
          r = t[0],
          n = t[1];
        return (3 * (r + n)) / 4 - n;
      }),
        (t.toByteArray = function (e) {
          for (
            var t,
              r = u(e),
              n = r[0],
              s = r[1],
              a = new o(
                (function (e, t, r) {
                  return (3 * (t + r)) / 4 - r;
                })(0, n, s)
              ),
              c = 0,
              l = s > 0 ? n - 4 : n,
              h = 0;
            h < l;
            h += 4
          )
            (t = (i[e.charCodeAt(h)] << 18) | (i[e.charCodeAt(h + 1)] << 12) | (i[e.charCodeAt(h + 2)] << 6) | i[e.charCodeAt(h + 3)]),
              (a[c++] = (t >> 16) & 255),
              (a[c++] = (t >> 8) & 255),
              (a[c++] = 255 & t);
          2 === s && ((t = (i[e.charCodeAt(h)] << 2) | (i[e.charCodeAt(h + 1)] >> 4)), (a[c++] = 255 & t));
          1 === s &&
            ((t = (i[e.charCodeAt(h)] << 10) | (i[e.charCodeAt(h + 1)] << 4) | (i[e.charCodeAt(h + 2)] >> 2)),
            (a[c++] = (t >> 8) & 255),
            (a[c++] = 255 & t));
          return a;
        }),
        (t.fromByteArray = function (e) {
          for (var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(l(e, s, s + 16383 > a ? a : s + 16383));
          1 === i
            ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
            : 2 === i && ((t = (e[r - 2] << 8) + e[r - 1]), o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var n = [],
          i = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          c = s.length;
        a < c;
        ++a
      )
        (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
      function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function l(e, t, r) {
        for (var i, o, s = [], a = t; a < r; a += 3)
          (i = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
            s.push(n[((o = i) >> 18) & 63] + n[(o >> 12) & 63] + n[(o >> 6) & 63] + n[63 & o]);
        return s.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (e, t) {
      (t.read = function (e, t, r, n, i) {
        var o,
          s,
          a = 8 * i - n - 1,
          c = (1 << a) - 1,
          u = c >> 1,
          l = -7,
          h = r ? i - 1 : 0,
          f = r ? -1 : 1,
          p = e[t + h];
        for (h += f, o = p & ((1 << -l) - 1), p >>= -l, l += a; l > 0; o = 256 * o + e[t + h], h += f, l -= 8);
        for (s = o & ((1 << -l) - 1), o >>= -l, l += n; l > 0; s = 256 * s + e[t + h], h += f, l -= 8);
        if (0 === o) o = 1 - u;
        else {
          if (o === c) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, n)), (o -= u);
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - n);
      }),
        (t.write = function (e, t, r, n, i, o) {
          var s,
            a,
            c,
            u = 8 * o - i - 1,
            l = (1 << u) - 1,
            h = l >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : o - 1,
            d = n ? 1 : -1,
            m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
                  (t += s + h >= 1 ? f / c : f * Math.pow(2, 1 - h)) * c >= 2 && (s++, (c /= 2)),
                  s + h >= l
                    ? ((a = 0), (s = l))
                    : s + h >= 1
                    ? ((a = (t * c - 1) * Math.pow(2, i)), (s += h))
                    : ((a = t * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            e[r + p] = 255 & a, p += d, a /= 256, i -= 8
          );
          for (s = (s << i) | a, u += i; u > 0; e[r + p] = 255 & s, p += d, s /= 256, u -= 8);
          e[r + p - d] |= 128 * m;
        });
    },
    function (e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == r.call(e);
        };
    },
    function (e, t, r) {
      (function (t) {
        const n = r(21),
          i = r(24);
        e.exports = (e, r, o = 70) => {
          const s = t.from(r),
            a = i(s);
          let c = 0,
            u = null,
            l = null,
            h = 0,
            f = 0;
          if (a && "image/bmp" === a.mime) {
            const t = n.decode(s);
            (u = e._malloc(t.data.length * Uint8Array.BYTES_PER_ELEMENT)), e.HEAPU8.set(t.data, u), (h = t.width), (f = t.height), (c = 4);
          } else {
            const t = e._malloc(s.length * Uint8Array.BYTES_PER_ELEMENT);
            e.HEAPU8.set(s, t),
              (l = e._pixReadMem(t, s.length)),
              0 === e.getValue(l + 28, "i32") && e.setValue(l + 28, o, "i32"),
              ([h, f] = Array(2)
                .fill(0)
                .map((t, r) => e.getValue(l + 4 * r, "i32")));
          }
          return { w: h, h: f, bytesPerPixel: c, data: u, pix: l };
        };
      }).call(this, r(1).Buffer);
    },
    function (e, t, r) {
      var n = r(22),
        i = r(23);
      e.exports = { encode: n, decode: i };
    },
    function (e, t, r) {
      (function (t) {
        function r(e) {
          (this.buffer = e.data),
            (this.width = e.width),
            (this.height = e.height),
            (this.extraBytes = this.width % 4),
            (this.rgbSize = this.height * (3 * this.width + this.extraBytes)),
            (this.headerInfoSize = 40),
            (this.data = []),
            (this.flag = "BM"),
            (this.reserved = 0),
            (this.offset = 54),
            (this.fileSize = this.rgbSize + this.offset),
            (this.planes = 1),
            (this.bitPP = 24),
            (this.compress = 0),
            (this.hr = 0),
            (this.vr = 0),
            (this.colors = 0),
            (this.importantColors = 0);
        }
        (r.prototype.encode = function () {
          var e = new t(this.offset + this.rgbSize);
          (this.pos = 0),
            e.write(this.flag, this.pos, 2),
            (this.pos += 2),
            e.writeUInt32LE(this.fileSize, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.reserved, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.offset, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.headerInfoSize, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.width, this.pos),
            (this.pos += 4),
            e.writeInt32LE(-this.height, this.pos),
            (this.pos += 4),
            e.writeUInt16LE(this.planes, this.pos),
            (this.pos += 2),
            e.writeUInt16LE(this.bitPP, this.pos),
            (this.pos += 2),
            e.writeUInt32LE(this.compress, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.rgbSize, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.hr, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.vr, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.colors, this.pos),
            (this.pos += 4),
            e.writeUInt32LE(this.importantColors, this.pos),
            (this.pos += 4);
          for (var r = 0, n = 3 * this.width + this.extraBytes, i = 0; i < this.height; i++) {
            for (var o = 0; o < this.width; o++) {
              var s = this.pos + i * n + 3 * o;
              r++, (e[s] = this.buffer[r++]), (e[s + 1] = this.buffer[r++]), (e[s + 2] = this.buffer[r++]);
            }
            if (this.extraBytes > 0) {
              var a = this.pos + i * n + 3 * this.width;
              e.fill(0, a, a + this.extraBytes);
            }
          }
          return e;
        }),
          (e.exports = function (e, t) {
            return void 0 === t && (t = 100), { data: new r(e).encode(), width: e.width, height: e.height };
          });
      }).call(this, r(1).Buffer);
    },
    function (e, t, r) {
      (function (t) {
        function r(e, t) {
          if (
            ((this.pos = 0),
            (this.buffer = e),
            (this.is_with_alpha = !!t),
            (this.bottom_up = !0),
            (this.flag = this.buffer.toString("utf-8", 0, (this.pos += 2))),
            "BM" != this.flag)
          )
            throw new Error("Invalid BMP File");
          this.parseHeader(), this.parseRGBA();
        }
        (r.prototype.parseHeader = function () {
          if (
            ((this.fileSize = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.reserved = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.offset = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.headerSize = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.width = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.height = this.buffer.readInt32LE(this.pos)),
            (this.pos += 4),
            (this.planes = this.buffer.readUInt16LE(this.pos)),
            (this.pos += 2),
            (this.bitPP = this.buffer.readUInt16LE(this.pos)),
            (this.pos += 2),
            (this.compress = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.rawSize = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.hr = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.vr = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.colors = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            (this.importantColors = this.buffer.readUInt32LE(this.pos)),
            (this.pos += 4),
            16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
            this.bitPP < 15)
          ) {
            var e = 0 === this.colors ? 1 << this.bitPP : this.colors;
            this.palette = new Array(e);
            for (var t = 0; t < e; t++) {
              var r = this.buffer.readUInt8(this.pos++),
                n = this.buffer.readUInt8(this.pos++),
                i = this.buffer.readUInt8(this.pos++),
                o = this.buffer.readUInt8(this.pos++);
              this.palette[t] = { red: i, green: n, blue: r, quad: o };
            }
          }
          this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
        }),
          (r.prototype.parseRGBA = function () {
            var e = "bit" + this.bitPP,
              r = this.width * this.height * 4;
            (this.data = new t(r)), this[e]();
          }),
          (r.prototype.bit1 = function () {
            var e = Math.ceil(this.width / 8),
              t = e % 4,
              r = this.height >= 0 ? this.height - 1 : -this.height;
            for (r = this.height - 1; r >= 0; r--) {
              for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < e; i++)
                for (
                  var o = this.buffer.readUInt8(this.pos++), s = n * this.width * 4 + 8 * i * 4, a = 0;
                  a < 8 && 8 * i + a < this.width;
                  a++
                ) {
                  var c = this.palette[(o >> (7 - a)) & 1];
                  (this.data[s + 4 * a] = 0),
                    (this.data[s + 4 * a + 1] = c.blue),
                    (this.data[s + 4 * a + 2] = c.green),
                    (this.data[s + 4 * a + 3] = c.red);
                }
              0 != t && (this.pos += 4 - t);
            }
          }),
          (r.prototype.bit4 = function () {
            if (2 == this.compress) {
              this.data.fill(255);
              for (var e = 0, t = this.bottom_up ? this.height - 1 : 0, r = !1; e < this.data.length; ) {
                var n = this.buffer.readUInt8(this.pos++),
                  i = this.buffer.readUInt8(this.pos++);
                if (0 == n) {
                  if (0 == i) {
                    this.bottom_up ? t-- : t++, (e = t * this.width * 4), (r = !1);
                    continue;
                  }
                  if (1 == i) break;
                  if (2 == i) {
                    var o = this.buffer.readUInt8(this.pos++),
                      s = this.buffer.readUInt8(this.pos++);
                    this.bottom_up ? (t -= s) : (t += s), (e += s * this.width * 4 + 4 * o);
                  } else {
                    for (var a = this.buffer.readUInt8(this.pos++), c = 0; c < i; c++)
                      r ? u.call(this, 15 & a) : u.call(this, (240 & a) >> 4),
                        1 & c && c + 1 < i && (a = this.buffer.readUInt8(this.pos++)),
                        (r = !r);
                    1 == (((i + 1) >> 1) & 1) && this.pos++;
                  }
                } else for (c = 0; c < n; c++) r ? u.call(this, 15 & i) : u.call(this, (240 & i) >> 4), (r = !r);
              }
              function u(t) {
                var r = this.palette[t];
                (this.data[e] = 0), (this.data[e + 1] = r.blue), (this.data[e + 2] = r.green), (this.data[e + 3] = r.red), (e += 4);
              }
            } else {
              var l = Math.ceil(this.width / 2),
                h = l % 4;
              for (s = this.height - 1; s >= 0; s--) {
                var f = this.bottom_up ? s : this.height - 1 - s;
                for (o = 0; o < l; o++) {
                  (i = this.buffer.readUInt8(this.pos++)), (e = f * this.width * 4 + 2 * o * 4);
                  var p = i >> 4,
                    d = 15 & i,
                    m = this.palette[p];
                  if (
                    ((this.data[e] = 0),
                    (this.data[e + 1] = m.blue),
                    (this.data[e + 2] = m.green),
                    (this.data[e + 3] = m.red),
                    2 * o + 1 >= this.width)
                  )
                    break;
                  (m = this.palette[d]),
                    (this.data[e + 4] = 0),
                    (this.data[e + 4 + 1] = m.blue),
                    (this.data[e + 4 + 2] = m.green),
                    (this.data[e + 4 + 3] = m.red);
                }
                0 != h && (this.pos += 4 - h);
              }
            }
          }),
          (r.prototype.bit8 = function () {
            if (1 == this.compress) {
              this.data.fill(255);
              for (var e = 0, t = this.bottom_up ? this.height - 1 : 0; e < this.data.length; ) {
                var r = this.buffer.readUInt8(this.pos++),
                  n = this.buffer.readUInt8(this.pos++);
                if (0 == r) {
                  if (0 == n) {
                    this.bottom_up ? t-- : t++, (e = t * this.width * 4);
                    continue;
                  }
                  if (1 == n) break;
                  if (2 == n) {
                    var i = this.buffer.readUInt8(this.pos++),
                      o = this.buffer.readUInt8(this.pos++);
                    this.bottom_up ? (t -= o) : (t += o), (e += o * this.width * 4 + 4 * i);
                  } else {
                    for (var s = 0; s < n; s++) {
                      var a = this.buffer.readUInt8(this.pos++);
                      c.call(this, a);
                    }
                    !0 & n && this.pos++;
                  }
                } else for (s = 0; s < r; s++) c.call(this, n);
              }
              function c(t) {
                var r = this.palette[t];
                (this.data[e] = 0), (this.data[e + 1] = r.blue), (this.data[e + 2] = r.green), (this.data[e + 3] = r.red), (e += 4);
              }
            } else {
              var u = this.width % 4;
              for (o = this.height - 1; o >= 0; o--) {
                var l = this.bottom_up ? o : this.height - 1 - o;
                for (i = 0; i < this.width; i++) {
                  (n = this.buffer.readUInt8(this.pos++)), (e = l * this.width * 4 + 4 * i);
                  if (n < this.palette.length) {
                    var h = this.palette[n];
                    (this.data[e] = 0), (this.data[e + 1] = h.blue), (this.data[e + 2] = h.green), (this.data[e + 3] = h.red);
                  } else (this.data[e] = 0), (this.data[e + 1] = 255), (this.data[e + 2] = 255), (this.data[e + 3] = 255);
                }
                0 != u && (this.pos += 4 - u);
              }
            }
          }),
          (r.prototype.bit15 = function () {
            for (var e = this.width % 3, t = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
              for (var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++) {
                var o = this.buffer.readUInt16LE(this.pos);
                this.pos += 2;
                var s = (((o & t) / t) * 255) | 0,
                  a = ((((o >> 5) & t) / t) * 255) | 0,
                  c = ((((o >> 10) & t) / t) * 255) | 0,
                  u = o >> 15 ? 255 : 0,
                  l = n * this.width * 4 + 4 * i;
                (this.data[l] = u), (this.data[l + 1] = s), (this.data[l + 2] = a), (this.data[l + 3] = c);
              }
              this.pos += e;
            }
          }),
          (r.prototype.bit16 = function () {
            var e = (this.width % 2) * 2;
            (this.maskRed = 31744),
              (this.maskGreen = 992),
              (this.maskBlue = 31),
              (this.mask0 = 0),
              3 == this.compress &&
                ((this.maskRed = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4),
                (this.maskGreen = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4),
                (this.maskBlue = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4),
                (this.mask0 = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4));
            for (var t = [0, 0, 0], r = 0; r < 16; r++)
              (this.maskRed >> r) & 1 && t[0]++, (this.maskGreen >> r) & 1 && t[1]++, (this.maskBlue >> r) & 1 && t[2]++;
            (t[1] += t[0]), (t[2] += t[1]), (t[0] = 8 - t[0]), (t[1] -= 8), (t[2] -= 8);
            for (var n = this.height - 1; n >= 0; n--) {
              for (var i = this.bottom_up ? n : this.height - 1 - n, o = 0; o < this.width; o++) {
                var s = this.buffer.readUInt16LE(this.pos);
                this.pos += 2;
                var a = (s & this.maskBlue) << t[0],
                  c = (s & this.maskGreen) >> t[1],
                  u = (s & this.maskRed) >> t[2],
                  l = i * this.width * 4 + 4 * o;
                (this.data[l] = 0), (this.data[l + 1] = a), (this.data[l + 2] = c), (this.data[l + 3] = u);
              }
              this.pos += e;
            }
          }),
          (r.prototype.bit24 = function () {
            for (var e = this.height - 1; e >= 0; e--) {
              for (var t = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
                var n = this.buffer.readUInt8(this.pos++),
                  i = this.buffer.readUInt8(this.pos++),
                  o = this.buffer.readUInt8(this.pos++),
                  s = t * this.width * 4 + 4 * r;
                (this.data[s] = 0), (this.data[s + 1] = n), (this.data[s + 2] = i), (this.data[s + 3] = o);
              }
              this.pos += this.width % 4;
            }
          }),
          (r.prototype.bit32 = function () {
            if (3 == this.compress) {
              (this.maskRed = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4),
                (this.maskGreen = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4),
                (this.maskBlue = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4),
                (this.mask0 = this.buffer.readUInt32LE(this.pos)),
                (this.pos += 4);
              for (var e = this.height - 1; e >= 0; e--)
                for (var t = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
                  var n = this.buffer.readUInt8(this.pos++),
                    i = this.buffer.readUInt8(this.pos++),
                    o = this.buffer.readUInt8(this.pos++),
                    s = this.buffer.readUInt8(this.pos++),
                    a = t * this.width * 4 + 4 * r;
                  (this.data[a] = n), (this.data[a + 1] = i), (this.data[a + 2] = o), (this.data[a + 3] = s);
                }
            } else
              for (e = this.height - 1; e >= 0; e--)
                for (t = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
                  (i = this.buffer.readUInt8(this.pos++)),
                    (o = this.buffer.readUInt8(this.pos++)),
                    (s = this.buffer.readUInt8(this.pos++)),
                    (n = this.buffer.readUInt8(this.pos++)),
                    (a = t * this.width * 4 + 4 * r);
                  (this.data[a] = n), (this.data[a + 1] = i), (this.data[a + 2] = o), (this.data[a + 3] = s);
                }
          }),
          (r.prototype.getData = function () {
            return this.data;
          }),
          (e.exports = function (e) {
            return new r(e);
          });
      }).call(this, r(1).Buffer);
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      (function (Buffer) {
        const toBytes = (e) => [...e].map((e) => e.charCodeAt(0)),
          xpiZipFilename = toBytes("META-INF/mozilla.rsa"),
          oxmlContentTypes = toBytes("[Content_Types].xml"),
          oxmlRels = toBytes("_rels/.rels");
        function readUInt64LE(e, t = 0) {
          let r = e[t],
            n = 1,
            i = 0;
          for (; ++i < 8; ) (n *= 256), (r += e[t + i] * n);
          return r;
        }
        const fileType = (e) => {
          if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e)))
            throw new TypeError(
              `Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``
            );
          const t = e instanceof Uint8Array ? e : new Uint8Array(e);
          if (!(t && t.length > 1)) return null;
          const r = (e, r) => {
              r = Object.assign({ offset: 0 }, r);
              for (let n = 0; n < e.length; n++)
                if (r.mask) {
                  if (e[n] !== (r.mask[n] & t[n + r.offset])) return !1;
                } else if (e[n] !== t[n + r.offset]) return !1;
              return !0;
            },
            n = (e, t) => r(toBytes(e), t);
          if (r([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" };
          if (r([137, 80, 78, 71, 13, 10, 26, 10])) return { ext: "png", mime: "image/png" };
          if (r([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
          if (r([87, 69, 66, 80], { offset: 8 })) return { ext: "webp", mime: "image/webp" };
          if (r([70, 76, 73, 70])) return { ext: "flif", mime: "image/flif" };
          if ((r([73, 73, 42, 0]) || r([77, 77, 0, 42])) && r([67, 82], { offset: 8 })) return { ext: "cr2", mime: "image/x-canon-cr2" };
          if (r([73, 73, 42, 0]) || r([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" };
          if (r([66, 77])) return { ext: "bmp", mime: "image/bmp" };
          if (r([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
          if (r([56, 66, 80, 83])) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
          if (r([80, 75, 3, 4])) {
            if (
              r(
                [
                  109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43,
                  122, 105, 112
                ],
                { offset: 30 }
              )
            )
              return { ext: "epub", mime: "application/epub+zip" };
            if (r(xpiZipFilename, { offset: 30 })) return { ext: "xpi", mime: "application/x-xpinstall" };
            if (n("mimetypeapplication/vnd.oasis.opendocument.text", { offset: 30 }))
              return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
            if (n("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", { offset: 30 }))
              return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
            if (n("mimetypeapplication/vnd.oasis.opendocument.presentation", { offset: 30 }))
              return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
            const e = (e, t = 0) => e.findIndex((e, r, n) => r >= t && 80 === n[r] && 75 === n[r + 1] && 3 === n[r + 2] && 4 === n[r + 3]);
            let i = 0,
              o = !1,
              s = null;
            do {
              const a = i + 30;
              if (
                (o || (o = r(oxmlContentTypes, { offset: a }) || r(oxmlRels, { offset: a })),
                s ||
                  (n("word/", { offset: a })
                    ? (s = { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })
                    : n("ppt/", { offset: a })
                    ? (s = { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" })
                    : n("xl/", { offset: a }) &&
                      (s = { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })),
                o && s)
              )
                return s;
              i = e(t, a);
            } while (i >= 0);
            if (s) return s;
          }
          if (r([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3]))
            return { ext: "zip", mime: "application/zip" };
          if (r([117, 115, 116, 97, 114], { offset: 257 })) return { ext: "tar", mime: "application/x-tar" };
          if (r([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return { ext: "rar", mime: "application/x-rar-compressed" };
          if (r([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
          if (r([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
          if (r([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
          if (r([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
          if (
            r([51, 103, 112, 53]) ||
            (r([0, 0, 0]) &&
              r([102, 116, 121, 112], { offset: 4 }) &&
              (r([109, 112, 52, 49], { offset: 8 }) ||
                r([109, 112, 52, 50], { offset: 8 }) ||
                r([105, 115, 111, 109], { offset: 8 }) ||
                r([105, 115, 111, 50], { offset: 8 }) ||
                r([109, 109, 112, 52], { offset: 8 }) ||
                r([77, 52, 86], { offset: 8 }) ||
                r([100, 97, 115, 104], { offset: 8 })))
          )
            return { ext: "mp4", mime: "video/mp4" };
          if (r([77, 84, 104, 100])) return { ext: "mid", mime: "audio/midi" };
          if (r([26, 69, 223, 163])) {
            const e = t.subarray(4, 4100),
              r = e.findIndex((e, t, r) => 66 === r[t] && 130 === r[t + 1]);
            if (-1 !== r) {
              const t = r + 3,
                n = (r) => [...r].every((r, n) => e[t + n] === r.charCodeAt(0));
              if (n("matroska")) return { ext: "mkv", mime: "video/x-matroska" };
              if (n("webm")) return { ext: "webm", mime: "video/webm" };
            }
          }
          if (
            r([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) ||
            r([102, 114, 101, 101], { offset: 4 }) ||
            r([102, 116, 121, 112, 113, 116, 32, 32], { offset: 4 }) ||
            r([109, 100, 97, 116], { offset: 4 }) ||
            r([109, 111, 111, 118], { offset: 4 }) ||
            r([119, 105, 100, 101], { offset: 4 })
          )
            return { ext: "mov", mime: "video/quicktime" };
          if (r([82, 73, 70, 70])) {
            if (r([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
            if (r([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/vnd.wave" };
            if (r([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
          }
          if (r([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
            let e = 30;
            do {
              const n = readUInt64LE(t, e + 16);
              if (r([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], { offset: e })) {
                if (r([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], { offset: e + 24 }))
                  return { ext: "wma", mime: "audio/x-ms-wma" };
                if (r([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], { offset: e + 24 }))
                  return { ext: "wmv", mime: "video/x-ms-asf" };
                break;
              }
              e += n;
            } while (e + 24 <= t.length);
            return { ext: "asf", mime: "application/vnd.ms-asf" };
          }
          if (r([0, 0, 1, 186]) || r([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
          if (r([102, 116, 121, 112, 51, 103], { offset: 4 })) return { ext: "3gp", mime: "video/3gpp" };
          for (let e = 0; e < 2 && e < t.length - 16; e++) {
            if (r([73, 68, 51], { offset: e }) || r([255, 226], { offset: e, mask: [255, 226] })) return { ext: "mp3", mime: "audio/mpeg" };
            if (r([255, 228], { offset: e, mask: [255, 228] })) return { ext: "mp2", mime: "audio/mpeg" };
            if (r([255, 248], { offset: e, mask: [255, 252] })) return { ext: "mp2", mime: "audio/mpeg" };
            if (r([255, 240], { offset: e, mask: [255, 252] })) return { ext: "mp4", mime: "audio/mpeg" };
          }
          if (r([102, 116, 121, 112, 77, 52, 65], { offset: 4 })) return { ext: "m4a", mime: "audio/mp4" };
          if (r([79, 112, 117, 115, 72, 101, 97, 100], { offset: 28 })) return { ext: "opus", mime: "audio/opus" };
          if (r([79, 103, 103, 83]))
            return r([128, 116, 104, 101, 111, 114, 97], { offset: 28 })
              ? { ext: "ogv", mime: "video/ogg" }
              : r([1, 118, 105, 100, 101, 111, 0], { offset: 28 })
              ? { ext: "ogm", mime: "video/ogg" }
              : r([127, 70, 76, 65, 67], { offset: 28 })
              ? { ext: "oga", mime: "audio/ogg" }
              : r([83, 112, 101, 101, 120, 32, 32], { offset: 28 })
              ? { ext: "spx", mime: "audio/ogg" }
              : r([1, 118, 111, 114, 98, 105, 115], { offset: 28 })
              ? { ext: "ogg", mime: "audio/ogg" }
              : { ext: "ogx", mime: "application/ogg" };
          if (r([102, 76, 97, 67])) return { ext: "flac", mime: "audio/x-flac" };
          if (r([77, 65, 67, 32])) return { ext: "ape", mime: "audio/ape" };
          if (r([119, 118, 112, 107])) return { ext: "wv", mime: "audio/wavpack" };
          if (r([35, 33, 65, 77, 82, 10])) return { ext: "amr", mime: "audio/amr" };
          if (r([37, 80, 68, 70])) return { ext: "pdf", mime: "application/pdf" };
          if (r([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
          if ((67 === t[0] || 70 === t[0]) && r([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
          if (r([123, 92, 114, 116, 102])) return { ext: "rtf", mime: "application/rtf" };
          if (r([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
          if (r([119, 79, 70, 70]) && (r([0, 1, 0, 0], { offset: 4 }) || r([79, 84, 84, 79], { offset: 4 })))
            return { ext: "woff", mime: "font/woff" };
          if (r([119, 79, 70, 50]) && (r([0, 1, 0, 0], { offset: 4 }) || r([79, 84, 84, 79], { offset: 4 })))
            return { ext: "woff2", mime: "font/woff2" };
          if (r([76, 80], { offset: 34 }) && (r([0, 0, 1], { offset: 8 }) || r([1, 0, 2], { offset: 8 }) || r([2, 0, 2], { offset: 8 })))
            return { ext: "eot", mime: "application/vnd.ms-fontobject" };
          if (r([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
          if (r([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
          if (r([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
          if (r([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
          if (r([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
          if (r([37, 33])) return { ext: "ps", mime: "application/postscript" };
          if (r([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
          if (r([83, 81, 76, 105])) return { ext: "sqlite", mime: "application/x-sqlite3" };
          if (r([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
          if (r([67, 114, 50, 52])) return { ext: "crx", mime: "application/x-google-chrome-extension" };
          if (r([77, 83, 67, 70]) || r([73, 83, 99, 40])) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
          if (r([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121]))
            return { ext: "deb", mime: "application/x-deb" };
          if (r([33, 60, 97, 114, 99, 104, 62])) return { ext: "ar", mime: "application/x-unix-archive" };
          if (r([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
          if (r([31, 160]) || r([31, 157])) return { ext: "Z", mime: "application/x-compress" };
          if (r([76, 90, 73, 80])) return { ext: "lz", mime: "application/x-lzip" };
          if (r([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "msi", mime: "application/x-msi" };
          if (r([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
          if (r([71], { offset: 4 }) && (r([71], { offset: 192 }) || r([71], { offset: 196 }))) return { ext: "mts", mime: "video/mp2t" };
          if (r([66, 76, 69, 78, 68, 69, 82])) return { ext: "blend", mime: "application/x-blender" };
          if (r([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
          if (r([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
            if (r([106, 112, 50, 32], { offset: 20 })) return { ext: "jp2", mime: "image/jp2" };
            if (r([106, 112, 120, 32], { offset: 20 })) return { ext: "jpx", mime: "image/jpx" };
            if (r([106, 112, 109, 32], { offset: 20 })) return { ext: "jpm", mime: "image/jpm" };
            if (r([109, 106, 112, 50], { offset: 20 })) return { ext: "mj2", mime: "image/mj2" };
          }
          if (r([70, 79, 82, 77])) return { ext: "aif", mime: "audio/aiff" };
          if (n("<?xml ")) return { ext: "xml", mime: "application/xml" };
          if (r([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
          if (r([102, 116, 121, 112], { offset: 4 })) {
            if (r([109, 105, 102, 49], { offset: 8 })) return { ext: "heic", mime: "image/heif" };
            if (r([109, 115, 102, 49], { offset: 8 })) return { ext: "heic", mime: "image/heif-sequence" };
            if (r([104, 101, 105, 99], { offset: 8 }) || r([104, 101, 105, 120], { offset: 8 })) return { ext: "heic", mime: "image/heic" };
            if (r([104, 101, 118, 99], { offset: 8 }) || r([104, 101, 118, 120], { offset: 8 }))
              return { ext: "heic", mime: "image/heic-sequence" };
          }
          return r([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])
            ? { ext: "ktx", mime: "image/ktx" }
            : r([68, 73, 67, 77], { offset: 128 })
            ? { ext: "dcm", mime: "application/dicom" }
            : r([77, 80, 43])
            ? { ext: "mpc", mime: "audio/x-musepack" }
            : r([77, 80, 67, 75])
            ? { ext: "mpc", mime: "audio/x-musepack" }
            : r([66, 69, 71, 73, 78, 58])
            ? { ext: "ics", mime: "text/calendar" }
            : r([103, 108, 84, 70, 2, 0, 0, 0])
            ? { ext: "glb", mime: "model/gltf-binary" }
            : r([212, 195, 178, 161]) || r([161, 178, 195, 212])
            ? { ext: "pcap", mime: "application/vnd.tcpdump.pcap" }
            : null;
        };
        (module.exports = fileType),
          (module.exports.default = fileType),
          Object.defineProperty(fileType, "minimumBytes", { value: 4100 }),
          (module.exports.stream = (readableStream) =>
            new Promise((resolve, reject) => {
              const stream = eval("require")("stream");
              readableStream.once("readable", () => {
                const e = new stream.PassThrough(),
                  t = readableStream.read(module.exports.minimumBytes) || readableStream.read();
                try {
                  e.fileType = fileType(t);
                } catch (e) {
                  reject(e);
                }
                readableStream.unshift(t),
                  stream.pipeline ? resolve(stream.pipeline(readableStream, e, () => {})) : resolve(readableStream.pipe(e));
              });
            }));
      }).call(this, __webpack_require__(1).Buffer);
    },
    function (e, t, r) {
      (function (t) {
        const n = r(4),
          i = t.browser ? r(2) : (e) => e,
          o = r(5),
          s = r(28),
          a = r(29);
        e.exports = class {
          constructor(e = {}) {
            (this.worker = null),
              (this.options = { ...o.defaultOptions, ...e }),
              ["corePath", "workerPath", "langPath"].forEach((t) => {
                n.not.undefined(e[t]) && (this.options = { ...this.options, [t]: i(e[t]) });
              }),
              (this._currentJob = null),
              (this._queue = []);
          }
          recognize(e, t = "eng", r = {}) {
            return this._sendJob("recognize", e, t, r);
          }
          detect(e, t = {}) {
            return this._sendJob("detect", e, "osd", t);
          }
          recv(e) {
            this._currentJob.id === e.jobId
              ? this._currentJob.handle({ ...e, data: "resolve" === e.status && "recognize" === e.action ? s(e.data) : e.data })
              : console.warn(`Job ID ${e.jobId} not known.`);
          }
          dequeue() {
            (this._currentJob = null), this._queue.length && this._queue[0]();
          }
          terminate() {
            this.worker && o.terminateWorker(this), (this.worker = null), (this._currentJob = null), (this._queue = []);
          }
          _sendJob(e, t, r, n) {
            return this._delay((i) => {
              i.send(e, { image: t, lang: r, params: n, options: this.options });
            });
          }
          _delay(e) {
            n.null(this.worker) && (this.worker = o.spawnWorker(this, this.options));
            const t = new a(this);
            return (
              this._queue.push(() => {
                this._queue.shift(), (this._currentJob = t), e(t);
              }),
              n.null(this._currentJob) && this.dequeue(),
              t
            );
          }
        };
      }).call(this, r(0));
    },
    function (e, t) {
      e.exports = { defaultOptions: { langPath: "https://tessdata.projectnaptha.com/4.0.0" } };
    },
    function (e) {
      e.exports = {
        _args: [
          [
            "tesseract.js@2.0.0-alpha.4",
            "C:\\SourceControl\\InDevelopment\\GIT\\RW4GC_SSR_PWA\\Read%20And%20Write%20For%20Google%20V2\\Screen Shot Reader\\Screen Shot Reader"
          ]
        ],
        _from: "tesseract.js@2.0.0-alpha.4",
        _id: "tesseract.js@2.0.0-alpha.4",
        _inBundle: !1,
        _integrity: "sha512-3FQyeOLjIiSr6nwsRDcky569duz5TCXOwAiH2x2mFWveeiSk7WRhETxAryKayoUwEJ/CZdydNhI1Dpviz7QLxw==",
        _location: "/tesseract.js",
        _phantomChildren: {},
        _requested: {
          type: "version",
          registry: !0,
          raw: "tesseract.js@2.0.0-alpha.4",
          name: "tesseract.js",
          escapedName: "tesseract.js",
          rawSpec: "2.0.0-alpha.4",
          saveSpec: null,
          fetchSpec: "2.0.0-alpha.4"
        },
        _requiredBy: ["/"],
        _resolved: "https://npm.texthelp.com/tesseract.js/-/tesseract.js-2.0.0-alpha.4.tgz",
        _spec: "2.0.0-alpha.4",
        _where:
          "C:\\SourceControl\\InDevelopment\\GIT\\RW4GC_SSR_PWA\\Read%20And%20Write%20For%20Google%20V2\\Screen Shot Reader\\Screen Shot Reader",
        author: "",
        browser: { "./src/node/index.js": "./src/browser/index.js" },
        bugs: { url: "https://github.com/naptha/tesseract.js/issues" },
        contributors: [{ name: "jeromewu" }],
        dependencies: {
          "check-types": "^7.4.0",
          "is-url": "1.2.2",
          "node-fetch": "^2.3.0",
          "resolve-url": "^0.2.1",
          "tesseract.js-core": "^2.0.0-beta.8",
          "tesseract.js-utils": "^1.0.0-beta.5"
        },
        description: "Pure Javascript Multilingual OCR",
        devDependencies: {
          cors: "^2.8.5",
          eslint: "^5.9.0",
          "eslint-config-airbnb": "^17.1.0",
          "eslint-plugin-import": "^2.14.0",
          "eslint-plugin-jsx-a11y": "^6.1.2",
          "eslint-plugin-react": "^7.11.1",
          "expect.js": "^0.3.1",
          express: "^4.16.4",
          mocha: "^5.2.0",
          "mocha-headless-chrome": "^2.0.2",
          "npm-run-all": "^4.1.5",
          nyc: "^13.1.0",
          "wait-on": "^3.2.0",
          webpack: "^4.26.0",
          "webpack-cli": "^3.1.2",
          "webpack-dev-middleware": "^3.4.0"
        },
        homepage: "https://github.com/naptha/tesseract.js",
        license: "Apache-2.0",
        main: "src/index.js",
        name: "tesseract.js",
        repository: { type: "git", url: "git+https://github.com/naptha/tesseract.js.git" },
        scripts: {
          build: "webpack --config scripts/webpack.config.prod.js",
          lint: "eslint src",
          prepublishOnly: "npm run build",
          start: "node scripts/server.js",
          test: "npm-run-all -p -r start test:all",
          "test:all": "npm-run-all wait test:browser:* test:node",
          "test:browser-tpl": "mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -t 300000",
          "test:browser:detect": "npm run test:browser-tpl -- -f ./tests/browser/detect.test.html",
          "test:browser:recognize": "npm run test:browser-tpl -- -f ./tests/browser/recognize.test.html",
          "test:node": "nyc mocha --exit --bail --require ./scripts/test-helper.js ./tests/*.test.js",
          wait: "wait-on http://localhost:3000/package.json"
        },
        version: "2.0.0-alpha.4"
      };
    },
    function (e, t) {
      e.exports = (e) => {
        const t = { ...e, paragraphs: [], lines: [], words: [], symbols: [] };
        return (
          t.blocks.forEach((e) => {
            const r = { ...e, page: t, lines: [], words: [], symbols: [] };
            r.paragraphs.forEach((e) => {
              const n = { ...e, block: r, page: t, words: [], symbols: [] };
              n.lines.forEach((e) => {
                const i = { ...e, paragraph: n, block: r, page: t, symbols: [] };
                i.words.forEach((e) => {
                  const o = { ...e, line: i, paragraph: n, block: r, page: t };
                  o.symbols.forEach((e) => {
                    const s = { ...e, word: o, line: i, paragraph: n, block: r, page: t };
                    s.line.symbols.push(s), s.paragraph.symbols.push(s), s.block.symbols.push(s), s.page.symbols.push(s);
                  }),
                    o.paragraph.words.push(o),
                    o.block.words.push(o),
                    o.page.words.push(o);
                }),
                  i.block.lines.push(i),
                  i.page.lines.push(i);
              }),
                n.page.paragraphs.push(n);
            });
          }),
          t
        );
      };
    },
    function (e, t, r) {
      const n = r(5);
      let i = 0;
      e.exports = class {
        constructor(e) {
          (i += 1),
            (this.id = `Job-${i}-${Math.random().toString(16).slice(3, 8)}`),
            (this._worker = e),
            (this._resolve = []),
            (this._reject = []),
            (this._progress = []),
            (this._finally = []);
        }
        then(e, t) {
          return this._resolve.push ? this._resolve.push(e) : e(this._resolve), t && this.catch(t), this;
        }
        catch(e) {
          return this._reject.push ? this._reject.push(e) : e(this._reject), this;
        }
        progress(e) {
          return this._progress.push(e), this;
        }
        finally(e) {
          return this._finally.push(e), this;
        }
        send(e, t) {
          n.sendPacket(this._worker, { jobId: this.id, action: e, payload: t });
        }
        handle(e) {
          const { data: t } = e;
          let r = !1;
          "resolve" === e.status
            ? (0 === this._resolve.length && console.log(t),
              this._resolve.forEach((e) => {
                const r = e(t);
                r &&
                  "function" == typeof r.then &&
                  console.warn(
                    "TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve."
                  );
              }),
              (this._resolve = t),
              this._worker.dequeue(),
              (r = !0))
            : "reject" === e.status
            ? (0 === this._reject.length && console.error(t),
              this._reject.forEach((e) => e(t)),
              (this._reject = t),
              this._worker.dequeue(),
              (r = !0))
            : "progress" === e.status
            ? this._progress.forEach((e) => e(t))
            : console.warn("Message type unknown", e.status),
            r && this._finally.forEach((e) => e(t));
        }
      };
    },
    function (e, t) {
      e.exports = { OEM: { TESSERACT_ONLY: 0, LSTM_ONLY: 1, TESSERACT_LSTM_COMBINED: 2, DEFAULT: 3, COUNT: 4 } };
    },
    function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(32);
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */ function i(e, t) {
          if (e === t) return 0;
          for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }
        function o(e) {
          return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer);
        }
        var s = r(33),
          a = Object.prototype.hasOwnProperty,
          c = Array.prototype.slice,
          u = "foo" === function () {}.name;
        function l(e) {
          return Object.prototype.toString.call(e);
        }
        function h(e) {
          return (
            !o(e) &&
            "function" == typeof t.ArrayBuffer &&
            ("function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)))
          );
        }
        var f = (e.exports = v),
          p = /\s*function\s+([^\(\s]*)\s*/;
        function d(e) {
          if (s.isFunction(e)) {
            if (u) return e.name;
            var t = e.toString().match(p);
            return t && t[1];
          }
        }
        function m(e, t) {
          return "string" == typeof e ? (e.length < t ? e : e.slice(0, t)) : e;
        }
        function g(e) {
          if (u || !s.isFunction(e)) return s.inspect(e);
          var t = d(e);
          return "[Function" + (t ? ": " + t : "") + "]";
        }
        function y(e, t, r, n, i) {
          throw new f.AssertionError({ message: r, actual: e, expected: t, operator: n, stackStartFunction: i });
        }
        function v(e, t) {
          e || y(e, !0, t, "==", f.ok);
        }
        function b(e, t, r, n) {
          if (e === t) return !0;
          if (o(e) && o(t)) return 0 === i(e, t);
          if (s.isDate(e) && s.isDate(t)) return e.getTime() === t.getTime();
          if (s.isRegExp(e) && s.isRegExp(t))
            return (
              e.source === t.source &&
              e.global === t.global &&
              e.multiline === t.multiline &&
              e.lastIndex === t.lastIndex &&
              e.ignoreCase === t.ignoreCase
            );
          if ((null !== e && "object" == typeof e) || (null !== t && "object" == typeof t)) {
            if (h(e) && h(t) && l(e) === l(t) && !(e instanceof Float32Array || e instanceof Float64Array))
              return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
            if (o(e) !== o(t)) return !1;
            var a = (n = n || { actual: [], expected: [] }).actual.indexOf(e);
            return (
              (-1 !== a && a === n.expected.indexOf(t)) ||
              (n.actual.push(e),
              n.expected.push(t),
              (function (e, t, r, n) {
                if (null == e || null == t) return !1;
                if (s.isPrimitive(e) || s.isPrimitive(t)) return e === t;
                if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                var i = w(e),
                  o = w(t);
                if ((i && !o) || (!i && o)) return !1;
                if (i) return (e = c.call(e)), (t = c.call(t)), b(e, t, r);
                var a,
                  u,
                  l = E(e),
                  h = E(t);
                if (l.length !== h.length) return !1;
                for (l.sort(), h.sort(), u = l.length - 1; u >= 0; u--) if (l[u] !== h[u]) return !1;
                for (u = l.length - 1; u >= 0; u--) if (((a = l[u]), !b(e[a], t[a], r, n))) return !1;
                return !0;
              })(e, t, r, n))
            );
          }
          return r ? e === t : e == t;
        }
        function w(e) {
          return "[object Arguments]" == Object.prototype.toString.call(e);
        }
        function S(e, t) {
          if (!e || !t) return !1;
          if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
          try {
            if (e instanceof t) return !0;
          } catch (e) {}
          return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
        }
        function x(e, t, r, n) {
          var i;
          if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
          "string" == typeof r && ((n = r), (r = null)),
            (i = (function (e) {
              var t;
              try {
                e();
              } catch (e) {
                t = e;
              }
              return t;
            })(t)),
            (n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : ".")),
            e && !i && y(i, r, "Missing expected exception" + n);
          var o = "string" == typeof n,
            a = !e && i && !r;
          if (
            (((!e && s.isError(i) && o && S(i, r)) || a) && y(i, r, "Got unwanted exception" + n), (e && i && r && !S(i, r)) || (!e && i))
          )
            throw i;
        }
        (f.AssertionError = function (e) {
          var t;
          (this.name = "AssertionError"),
            (this.actual = e.actual),
            (this.expected = e.expected),
            (this.operator = e.operator),
            e.message
              ? ((this.message = e.message), (this.generatedMessage = !1))
              : ((this.message = m(g((t = this).actual), 128) + " " + t.operator + " " + m(g(t.expected), 128)),
                (this.generatedMessage = !0));
          var r = e.stackStartFunction || y;
          if (Error.captureStackTrace) Error.captureStackTrace(this, r);
          else {
            var n = new Error();
            if (n.stack) {
              var i = n.stack,
                o = d(r),
                s = i.indexOf("\n" + o);
              if (s >= 0) {
                var a = i.indexOf("\n", s + 1);
                i = i.substring(a + 1);
              }
              this.stack = i;
            }
          }
        }),
          s.inherits(f.AssertionError, Error),
          (f.fail = y),
          (f.ok = v),
          (f.equal = function (e, t, r) {
            e != t && y(e, t, r, "==", f.equal);
          }),
          (f.notEqual = function (e, t, r) {
            e == t && y(e, t, r, "!=", f.notEqual);
          }),
          (f.deepEqual = function (e, t, r) {
            b(e, t, !1) || y(e, t, r, "deepEqual", f.deepEqual);
          }),
          (f.deepStrictEqual = function (e, t, r) {
            b(e, t, !0) || y(e, t, r, "deepStrictEqual", f.deepStrictEqual);
          }),
          (f.notDeepEqual = function (e, t, r) {
            b(e, t, !1) && y(e, t, r, "notDeepEqual", f.notDeepEqual);
          }),
          (f.notDeepStrictEqual = function e(t, r, n) {
            b(t, r, !0) && y(t, r, n, "notDeepStrictEqual", e);
          }),
          (f.strictEqual = function (e, t, r) {
            e !== t && y(e, t, r, "===", f.strictEqual);
          }),
          (f.notStrictEqual = function (e, t, r) {
            e === t && y(e, t, r, "!==", f.notStrictEqual);
          }),
          (f.throws = function (e, t, r) {
            x(!0, e, t, r);
          }),
          (f.doesNotThrow = function (e, t, r) {
            x(!1, e, t, r);
          }),
          (f.ifError = function (e) {
            if (e) throw e;
          }),
          (f.strict = n(
            function e(t, r) {
              t || y(t, !0, r, "==", e);
            },
            f,
            { equal: f.strictEqual, deepEqual: f.deepStrictEqual, notEqual: f.notStrictEqual, notDeepEqual: f.notDeepStrictEqual }
          )),
          (f.strict.strict = f.strict);
        var E =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) a.call(e, r) && t.push(r);
            return t;
          };
      }).call(this, r(3));
    },
    function (e, t, r) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
          for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var n = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              n[e] = e;
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (
              var r,
                s,
                a = (function (e) {
                  if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                  return Object(e);
                })(e),
                c = 1;
              c < arguments.length;
              c++
            ) {
              for (var u in (r = Object(arguments[c]))) i.call(r, u) && (a[u] = r[u]);
              if (n) {
                s = n(r);
                for (var l = 0; l < s.length; l++) o.call(r, s[l]) && (a[s[l]] = r[s[l]]);
              }
            }
            return a;
          };
    },
    function (e, t, r) {
      (function (e) {
        var n =
            Object.getOwnPropertyDescriptors ||
            function (e) {
              for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
              return r;
            },
          i = /%[sdj%]/g;
        (t.format = function (e) {
          if (!y(e)) {
            for (var t = [], r = 0; r < arguments.length; r++) t.push(a(arguments[r]));
            return t.join(" ");
          }
          r = 1;
          for (
            var n = arguments,
              o = n.length,
              s = String(e).replace(i, function (e) {
                if ("%%" === e) return "%";
                if (r >= o) return e;
                switch (e) {
                  case "%s":
                    return String(n[r++]);
                  case "%d":
                    return Number(n[r++]);
                  case "%j":
                    try {
                      return JSON.stringify(n[r++]);
                    } catch (e) {
                      return "[Circular]";
                    }
                  default:
                    return e;
                }
              }),
              c = n[r];
            r < o;
            c = n[++r]
          )
            m(c) || !w(c) ? (s += " " + c) : (s += " " + a(c));
          return s;
        }),
          (t.deprecate = function (r, n) {
            if (void 0 !== e && !0 === e.noDeprecation) return r;
            if (void 0 === e)
              return function () {
                return t.deprecate(r, n).apply(this, arguments);
              };
            var i = !1;
            return function () {
              if (!i) {
                if (e.throwDeprecation) throw new Error(n);
                e.traceDeprecation ? console.trace(n) : console.error(n), (i = !0);
              }
              return r.apply(this, arguments);
            };
          });
        var o,
          s = {};
        function a(e, r) {
          var n = { seen: [], stylize: u };
          return (
            arguments.length >= 3 && (n.depth = arguments[2]),
            arguments.length >= 4 && (n.colors = arguments[3]),
            d(r) ? (n.showHidden = r) : r && t._extend(n, r),
            v(n.showHidden) && (n.showHidden = !1),
            v(n.depth) && (n.depth = 2),
            v(n.colors) && (n.colors = !1),
            v(n.customInspect) && (n.customInspect = !0),
            n.colors && (n.stylize = c),
            l(n, e, n.depth)
          );
        }
        function c(e, t) {
          var r = a.styles[t];
          return r ? "[" + a.colors[r][0] + "m" + e + "[" + a.colors[r][1] + "m" : e;
        }
        function u(e, t) {
          return e;
        }
        function l(e, r, n) {
          if (e.customInspect && r && E(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
            var i = r.inspect(n, e);
            return y(i) || (i = l(e, i, n)), i;
          }
          var o = (function (e, t) {
            if (v(t)) return e.stylize("undefined", "undefined");
            if (y(t)) {
              var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return e.stylize(r, "string");
            }
            if (g(t)) return e.stylize("" + t, "number");
            if (d(t)) return e.stylize("" + t, "boolean");
            if (m(t)) return e.stylize("null", "null");
          })(e, r);
          if (o) return o;
          var s = Object.keys(r),
            a = (function (e) {
              var t = {};
              return (
                e.forEach(function (e, r) {
                  t[e] = !0;
                }),
                t
              );
            })(s);
          if ((e.showHidden && (s = Object.getOwnPropertyNames(r)), x(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)))
            return h(r);
          if (0 === s.length) {
            if (E(r)) {
              var c = r.name ? ": " + r.name : "";
              return e.stylize("[Function" + c + "]", "special");
            }
            if (b(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
            if (S(r)) return e.stylize(Date.prototype.toString.call(r), "date");
            if (x(r)) return h(r);
          }
          var u,
            w = "",
            k = !1,
            A = ["{", "}"];
          (p(r) && ((k = !0), (A = ["[", "]"])), E(r)) && (w = " [Function" + (r.name ? ": " + r.name : "") + "]");
          return (
            b(r) && (w = " " + RegExp.prototype.toString.call(r)),
            S(r) && (w = " " + Date.prototype.toUTCString.call(r)),
            x(r) && (w = " " + h(r)),
            0 !== s.length || (k && 0 != r.length)
              ? n < 0
                ? b(r)
                  ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
                  : e.stylize("[Object]", "special")
                : (e.seen.push(r),
                  (u = k
                    ? (function (e, t, r, n, i) {
                        for (var o = [], s = 0, a = t.length; s < a; ++s)
                          C(t, String(s)) ? o.push(f(e, t, r, n, String(s), !0)) : o.push("");
                        return (
                          i.forEach(function (i) {
                            i.match(/^\d+$/) || o.push(f(e, t, r, n, i, !0));
                          }),
                          o
                        );
                      })(e, r, n, a, s)
                    : s.map(function (t) {
                        return f(e, r, n, a, t, k);
                      })),
                  e.seen.pop(),
                  (function (e, t, r) {
                    if (
                      e.reduce(function (e, t) {
                        return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                      }, 0) > 60
                    )
                      return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                    return r[0] + t + " " + e.join(", ") + " " + r[1];
                  })(u, w, A))
              : A[0] + w + A[1]
          );
        }
        function h(e) {
          return "[" + Error.prototype.toString.call(e) + "]";
        }
        function f(e, t, r, n, i, o) {
          var s, a, c;
          if (
            ((c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
              ? (a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special"))
              : c.set && (a = e.stylize("[Setter]", "special")),
            C(n, i) || (s = "[" + i + "]"),
            a ||
              (e.seen.indexOf(c.value) < 0
                ? (a = m(r) ? l(e, c.value, null) : l(e, c.value, r - 1)).indexOf("\n") > -1 &&
                  (a = o
                    ? a
                        .split("\n")
                        .map(function (e) {
                          return "  " + e;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      a
                        .split("\n")
                        .map(function (e) {
                          return "   " + e;
                        })
                        .join("\n"))
                : (a = e.stylize("[Circular]", "special"))),
            v(s))
          ) {
            if (o && i.match(/^\d+$/)) return a;
            (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((s = s.substr(1, s.length - 2)), (s = e.stylize(s, "name")))
              : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (s = e.stylize(s, "string")));
          }
          return s + ": " + a;
        }
        function p(e) {
          return Array.isArray(e);
        }
        function d(e) {
          return "boolean" == typeof e;
        }
        function m(e) {
          return null === e;
        }
        function g(e) {
          return "number" == typeof e;
        }
        function y(e) {
          return "string" == typeof e;
        }
        function v(e) {
          return void 0 === e;
        }
        function b(e) {
          return w(e) && "[object RegExp]" === k(e);
        }
        function w(e) {
          return "object" == typeof e && null !== e;
        }
        function S(e) {
          return w(e) && "[object Date]" === k(e);
        }
        function x(e) {
          return w(e) && ("[object Error]" === k(e) || e instanceof Error);
        }
        function E(e) {
          return "function" == typeof e;
        }
        function k(e) {
          return Object.prototype.toString.call(e);
        }
        function A(e) {
          return e < 10 ? "0" + e.toString(10) : e.toString(10);
        }
        (t.debuglog = function (r) {
          if ((v(o) && (o = e.env.NODE_DEBUG || ""), (r = r.toUpperCase()), !s[r]))
            if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
              var n = e.pid;
              s[r] = function () {
                var e = t.format.apply(t, arguments);
                console.error("%s %d: %s", r, n, e);
              };
            } else s[r] = function () {};
          return s[r];
        }),
          (t.inspect = a),
          (a.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
          }),
          (a.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
          }),
          (t.isArray = p),
          (t.isBoolean = d),
          (t.isNull = m),
          (t.isNullOrUndefined = function (e) {
            return null == e;
          }),
          (t.isNumber = g),
          (t.isString = y),
          (t.isSymbol = function (e) {
            return "symbol" == typeof e;
          }),
          (t.isUndefined = v),
          (t.isRegExp = b),
          (t.isObject = w),
          (t.isDate = S),
          (t.isError = x),
          (t.isFunction = E),
          (t.isPrimitive = function (e) {
            return (
              null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            );
          }),
          (t.isBuffer = r(34));
        var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function C(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        (t.log = function () {
          var e, r;
          console.log(
            "%s - %s",
            ((e = new Date()),
            (r = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":")),
            [e.getDate(), P[e.getMonth()], r].join(" ")),
            t.format.apply(t, arguments)
          );
        }),
          (t.inherits = r(35)),
          (t._extend = function (e, t) {
            if (!t || !w(t)) return e;
            for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
            return e;
          });
        var T = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        function R(e, t) {
          if (!e) {
            var r = new Error("Promise was rejected with a falsy value");
            (r.reason = e), (e = r);
          }
          return t(e);
        }
        (t.promisify = function (e) {
          if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
          if (T && e[T]) {
            var t;
            if ("function" != typeof (t = e[T])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(t, T, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
          }
          function t() {
            for (
              var t,
                r,
                n = new Promise(function (e, n) {
                  (t = e), (r = n);
                }),
                i = [],
                o = 0;
              o < arguments.length;
              o++
            )
              i.push(arguments[o]);
            i.push(function (e, n) {
              e ? r(e) : t(n);
            });
            try {
              e.apply(this, i);
            } catch (e) {
              r(e);
            }
            return n;
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            T && Object.defineProperty(t, T, { value: t, enumerable: !1, writable: !1, configurable: !0 }),
            Object.defineProperties(t, n(e))
          );
        }),
          (t.promisify.custom = T),
          (t.callbackify = function (t) {
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
            function r() {
              for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
              var i = r.pop();
              if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
              var o = this,
                s = function () {
                  return i.apply(o, arguments);
                };
              t.apply(this, r).then(
                function (t) {
                  e.nextTick(s, null, t);
                },
                function (t) {
                  e.nextTick(R, t, s);
                }
              );
            }
            return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, n(t)), r;
          });
      }).call(this, r(0));
    },
    function (e, t) {
      e.exports = function (e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
      };
    },
    function (e, t) {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }));
          })
        : (e.exports = function (e, t) {
            e.super_ = t;
            var r = function () {};
            (r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e);
          });
    },
    ,
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(6),
        i = r.n(n),
        o = r(7),
        s = r.n(o);
      const a = new (r(8).TesseractWorker)({
        corePath: chrome.extension.getURL("tesseract-core.js"),
        workerPath: chrome.extension.getURL("worker.js")
      });
      class c {
        constructor(e) {}
        initialise() {}
        async ocrImage(e) {
          return new Promise((t, r) => {
            a.recognize(e.imageToOCR)
              .progress(function (e) {})
              .then(function (r) {
                (e.ocr = r), t(e), console.log(e);
              });
          });
        }
      }
      new c();
      function u(e) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var l = function () {
        return (l =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function h(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            e.done
              ? i(e.value)
              : new r(function (t) {
                  t(e.value);
                }).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function f(e, t) {
        var r,
          n,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: []
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = t.call(e, s);
                } catch (e) {
                  (o = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      var p = function (e, t, r) {
          return new Promise(function (n, i) {
            if (((r = Object.assign({ concurrency: 1 / 0 }, r)), "function" != typeof t))
              throw new TypeError("Mapper function is required");
            var o = r.concurrency;
            if (!("number" == typeof o && o >= 1))
              throw new TypeError("Expected `concurrency` to be a number from 1 and up, got `".concat(o, "` (").concat(u(o), ")"));
            for (
              var s = [],
                a = e[Symbol.iterator](),
                c = !1,
                l = !1,
                h = 0,
                f = 0,
                p = function e() {
                  if (!c) {
                    var r = a.next(),
                      o = f;
                    if ((f++, r.done)) return (l = !0), void (0 === h && n(s));
                    h++,
                      Promise.resolve(r.value)
                        .then(function (e) {
                          return t(e, o);
                        })
                        .then(
                          function (t) {
                            (s[o] = t), h--, e();
                          },
                          function (e) {
                            (c = !0), i(e);
                          }
                        );
                  }
                },
                d = 0;
              d < o && (p(), !l);
              d++
            );
          });
        },
        d = p,
        m = p;
      function g(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }
      function y(e) {
        for (var t = !1, r = [0], n = 0; n < e.length; n++) {
          var i = e[n];
          i.match(/[\s]/im) && !t && r.push(n), "'" === i && (t = !t);
        }
        return (
          r.push(e.length),
          r
            .map(function (t, n) {
              return e.substring(0 === n ? 0 : r[n - 1], r[n]).trim();
            })
            .filter(function (e) {
              return !!e;
            })
            .map(function (e) {
              return e.startsWith("'") ? e.substring(1, e.length) : e;
            })
            .map(function (e) {
              return e.endsWith("'") ? e.substring(0, e.length - 1) : e;
            })
            .map(function (e) {
              return "\\(" === e ? "(" : "\\)" === e ? ")" : e;
            })
        );
      }
      function v(e) {
        return "string" == typeof e
          ? v([e])
          : e[0]
          ? "string" == typeof e[0]
            ? e
                .map(function (e) {
                  return (function (e) {
                    for (
                      var t = e
                          .split("\n")
                          .map(function (e) {
                            return e.trim();
                          })
                          .map(y)
                          .filter(function (e) {
                            return e && e.length;
                          }),
                        r = [],
                        n = [],
                        i = 0;
                      i < t.length;
                      i++
                    ) {
                      var o = t[i];
                      "\\" !== o[o.length - 1] ? ((n = n.concat(o)), r.push(n), (n = [])) : (n = n.concat(o.slice(0, o.length - 1)));
                    }
                    return r;
                  })(e);
                })
                .reduce(function (e, t) {
                  return e.concat(t);
                })
            : e
          : [];
      }
      function b(e) {
        return new Promise(function (t) {
          var r = new FileReader();
          r.addEventListener("loadend", function (e) {
            var r = e.srcElement.result;
            t(r);
          }),
            r.readAsText(e);
        });
      }
      function w(e) {
        return !!e.content;
      }
      function S(e) {
        return !!e.blob;
      }
      function x(e, t) {
        return (
          void 0 === t && (t = P(e)),
          h(this, void 0, void 0, function () {
            var r, n;
            return f(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, fetch(e)];
                case 1:
                  return [4, i.sent().arrayBuffer()];
                case 2:
                  return (r = i.sent()), (n = new Uint8Array(r)), [2, { name: t, content: n }];
              }
            });
          })
        );
      }
      function E(e, t) {
        return (
          void 0 === t && (t = e.name),
          h(this, void 0, void 0, function () {
            var r;
            return f(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (r = { name: t }),
                    [
                      4,
                      ((i = e.blob),
                      new Promise(function (e) {
                        var t = new FileReader();
                        (t.onload = function (t) {
                          var r = t.target.result;
                          e(new Uint8Array(r));
                        }),
                          t.readAsArrayBuffer(i);
                      }))
                    ]
                  );
                case 1:
                  return [2, ((r.content = n.sent()), r)];
              }
              var i;
            });
          })
        );
      }
      function k(e, t) {
        return (
          void 0 === t && (t = e.name),
          h(this, void 0, void 0, function () {
            var r;
            return f(this, function (n) {
              switch (n.label) {
                case 0:
                  return S(e) ? [4, E(e)] : [3, 2];
                case 1:
                  return (r = n.sent()), [3, 3];
                case 2:
                  (r = e), (n.label = 3);
                case 3:
                  return (r.name = t), [2, r];
              }
            });
          })
        );
      }
      function A(e, t) {
        return (
          void 0 === t && (t = e.name),
          h(this, void 0, void 0, function () {
            var r;
            return f(this, function (n) {
              return (
                ((r = w(e)
                  ? (function (e, t) {
                      return void 0 === t && (t = e.name), { name: t, blob: ((r = e.content), new Blob([r])) };
                      var r;
                    })(e)
                  : e).name = t),
                [2, r]
              );
            });
          })
        );
      }
      function P(e) {
        try {
          return decodeURIComponent(new URL(e).pathname.split("/").pop());
        } catch (r) {
          var t = "http://foo.com/" + e;
          try {
            return decodeURIComponent(new URL(t).pathname.split("/").pop());
          } catch (t) {
            return e;
          }
        }
      }
      function C(e, t) {
        return (
          void 0 === t && (t = !1),
          h(this, void 0, void 0, function () {
            var r, n, i, o, s, a;
            return f(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (r = e),
                    (u = e.name),
                    (l = P(u)),
                    !(n = l.substring(l.lastIndexOf(".") + 1, l.length)) || (t && -1 === R.indexOf(n))
                      ? ((o = O), (s = {}), [4, k(e)])
                      : [3, 3]
                  );
                case 1:
                  return [4, o.apply(void 0, [((s.inputFiles = [c.sent()]), (s.commands = "convert " + e.name + " output.png"), s)])];
                case 2:
                  ((i = c.sent().outputFiles)[0].name = e.name), (r = i[0]), (c.label = 3);
                case 3:
                  return [4, A(r)];
                case 4:
                  return (a = c.sent()), [2, URL.createObjectURL(a.blob)];
              }
              var u, l;
            });
          })
        );
      }
      d.default = m;
      var T,
        R = ["gif", "png", "jpg", "webp"];
      var _ = ["rose:", "logo:", "wizard:", "granite:", "netscape:"];
      function M() {
        return h(this, void 0, void 0, function () {
          var e = this;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return T
                  ? [3, 2]
                  : [
                      4,
                      d(_, function (t) {
                        return h(e, void 0, void 0, function () {
                          var e, r;
                          return f(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, I(t)];
                              case 1:
                                return (e = n.sent()), [4, O({ commands: "convert " + t + " output1." + e[0].image.format.toLowerCase() })];
                              case 2:
                                return ((r = n.sent().outputFiles)[0].name = t), [4, k(r[0])];
                              case 3:
                                return [2, n.sent()];
                            }
                          });
                        });
                      })
                    ];
              case 1:
                (T = t.sent()), (t.label = 2);
              case 2:
                return [2, T];
            }
          });
        });
      }
      function I(e) {
        return h(this, void 0, void 0, function () {
          var t, r, n, i, o;
          return f(this, function (s) {
            switch (s.label) {
              case 0:
                return "string" == typeof e ? [3, 2] : [4, k(e)];
              case 1:
                return (r = [s.sent()]), (t = r[0].name), [3, 3];
              case 2:
                (t = e), (r = []), (s.label = 3);
              case 3:
                return [4, D(r, ["convert", t, "info.json"])];
              case 4:
                (n = s.sent()), (s.label = 5);
              case 5:
                return s.trys.push([5, 7, , 8]), (o = (i = JSON).parse), [4, b(n[0].blob)];
              case 6:
                return [2, o.apply(i, [s.sent()])];
              case 7:
                return [2, [{ error: s.sent() }]];
              case 8:
                return [2];
            }
          });
        });
      }
      function B(e) {
        return h(this, void 0, void 0, function () {
          var t, r, n, i, o;
          return f(this, function (s) {
            switch (s.label) {
              case 0:
                (t = L(e)), (r = { stderr: [], stdout: [], outputFiles: [], exitCode: 1 }), (s.label = 1);
              case 1:
                return (
                  s.trys.push([1, 3, , 4]),
                  (t.inputFiles = t.inputFiles || []),
                  (n = v(t.commands)[0]),
                  (i = performance.now()),
                  U.forEach(function (e) {
                    return e.beforeExecute({ command: n, took: performance.now() - i, id: i });
                  }),
                  [
                    4,
                    j(
                      t.inputFiles,
                      n.map(function (e) {
                        return e + "";
                      })
                    )
                  ]
                );
              case 2:
                return (
                  (r = s.sent()),
                  U.forEach(function (e) {
                    return e.afterExecute({ command: n, took: performance.now() - i, id: i });
                  }),
                  r.exitCode
                    ? [2, l({}, r, { errors: ["exit code: " + r.exitCode + " stderr: " + r.stderr.join("\n")] })]
                    : [2, l({}, r, { errors: [void 0] })]
                );
              case 3:
                return (o = s.sent()), [2, l({}, r, { errors: [o + ", exit code: " + r.exitCode + ", stderr: " + r.stderr.join("\n")] })];
              case 4:
                return [2];
            }
          });
        });
      }
      function L(e) {
        return (function (e) {
          return !!e.commands;
        })(e)
          ? e
          : { inputFiles: [], commands: e };
      }
      var U = [];
      function O(e) {
        return h(this, void 0, void 0, function () {
          function t(e) {
            return h(this, void 0, void 0, function () {
              var t,
                r = this;
              return f(this, function (u) {
                switch (u.label) {
                  case 0:
                    return [4, B({ inputFiles: g(i), commands: [e] })];
                  case 1:
                    return (
                      (t = u.sent()),
                      s.push(t),
                      (o = o.concat(t.errors || [])),
                      (a = a.concat(t.stdout || [])),
                      (c = c.concat(t.stderr || [])),
                      [
                        4,
                        d(t.outputFiles, function (e) {
                          return h(r, void 0, void 0, function () {
                            var t;
                            return f(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return (n[e.name] = e), [4, k(e)];
                                case 1:
                                  return (t = r.sent()), (i[t.name] = t), [2];
                              }
                            });
                          });
                        })
                      ]
                    );
                  case 2:
                    return u.sent(), [2];
                }
              });
            });
          }
          var r, n, i, o, s, a, c, u, l;
          return f(this, function (h) {
            switch (h.label) {
              case 0:
                return (
                  ((r = L(e)).inputFiles = r.inputFiles || []),
                  (n = {}),
                  (i = {}),
                  r.inputFiles.forEach(function (e) {
                    i[e.name] = e;
                  }),
                  (o = []),
                  (s = []),
                  (a = []),
                  (c = []),
                  (u = v(r.commands)),
                  [4, d(u, t, { concurrency: 1 })]
                );
              case 1:
                return (
                  h.sent(),
                  (l = s.find(function (e) {
                    return 0 !== e.exitCode;
                  })),
                  [2, { outputFiles: g(n), errors: o, results: s, stdout: a, stderr: c, exitCode: l ? l.exitCode : 0 }]
                );
            }
          });
        });
      }
      var z = (function () {
        function e() {
          (this.images = {}), (this.builtInImagesAdded = !1);
        }
        return (
          (e.prototype.get = function (e) {
            return this.images[e];
          }),
          (e.prototype.remove = function (e) {
            var t = this,
              r = [];
            return (
              Object.keys(this.images).forEach(function (n) {
                -1 !== e.indexOf(n) && (r.push(t.images[n]), delete t.images[n]);
              }),
              r
            );
          }),
          (e.prototype.getAll = function () {
            return h(this, void 0, void 0, function () {
              return f(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, Promise.all(g(this.images))];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.register = function (e, t) {
            void 0 === t && (t = e.name);
            var r = k(e);
            return (
              (this.images[t] = r),
              this.images[t].then(function () {
                r.resolved = !0;
              }),
              r
            );
          }),
          (e.prototype.isRegistered = function (e, t) {
            return void 0 === t && (t = !0), this.images[e] && t && this.images[e].resolved;
          }),
          (e.prototype.addBuiltInImages = function () {
            return h(this, void 0, void 0, function () {
              var e,
                t = this;
              return f(this, function (r) {
                switch (r.label) {
                  case 0:
                    return this.builtInImagesAdded ? [3, 3] : ((e = d), [4, M()]);
                  case 1:
                    return [
                      4,
                      e.apply(void 0, [
                        r.sent(),
                        function (e) {
                          return t.register(e);
                        }
                      ])
                    ];
                  case 2:
                    r.sent(), (this.builtInImagesAdded = !0), (r.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          e
        );
      })();
      !(function () {
        function e(e) {
          void 0 === e && (e = new z()), (this.imageHome = e);
        }
        (e.prototype.execute = function (e) {
          return h(this, void 0, void 0, function () {
            var t,
              r,
              n,
              i = this;
            return f(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = L(e)).inputFiles.forEach(function (e) {
                      i.imageHome.register(e);
                    }),
                    [4, this.imageHome.getAll()]
                  );
                case 1:
                  return (r = o.sent()), [4, O(l({}, t, { inputFiles: r }))];
                case 2:
                  return (
                    (n = o.sent()).outputFiles.forEach(function (e) {
                      i.imageHome.register(e);
                    }),
                    [2, n]
                  );
              }
            });
          });
        }),
          (e.prototype.addFiles = function (e) {
            var t = this;
            e.forEach(function (e) {
              return t.imageHome.register(e);
            });
          }),
          (e.prototype.getAllFiles = function () {
            return h(this, void 0, void 0, function () {
              return f(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.imageHome.getAll()];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (e.prototype.getFile = function (e) {
            return h(this, void 0, void 0, function () {
              return f(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.imageHome.get(e)];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.addBuiltInImages = function () {
            return h(this, void 0, void 0, function () {
              return f(this, function (e) {
                return [2, this.imageHome.addBuiltInImages()];
              });
            });
          }),
          (e.prototype.removeFiles = function (e) {
            return this.imageHome.remove(e);
          }),
          (e.create = function (t) {
            if (t && !t.imageHome) throw new Error("Dont know how to inherit from other ExecutionContext implementation than this one");
            return new e(t && t.imageHome);
          });
      })();
      function D(e, t) {
        return h(this, void 0, void 0, function () {
          return f(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, j(e, t)];
              case 1:
                return [2, r.sent().outputFiles];
            }
          });
        });
      }
      function j(e, t) {
        var r,
          n,
          i,
          o = { files: e, args: t, requestNumber: et },
          s =
            (((i = new Promise(function (e, t) {
              (r = e), (n = t);
            })).resolve = r),
            (i.reject = n),
            i);
        return (Qe[et] = s), $e.postMessage(o), et++, s;
      }
      var V,
        H,
        q,
        N,
        F,
        G,
        W,
        Y,
        J,
        K,
        Z,
        X,
        $,
        Q,
        ee,
        te,
        re,
        ne,
        ie,
        oe,
        se,
        ae,
        ce,
        ue,
        le,
        he,
        fe,
        pe,
        de,
        me,
        ge,
        ye,
        ve,
        be,
        we,
        Se,
        xe,
        Ee,
        ke,
        Ae,
        Pe,
        Ce,
        Te,
        Re,
        _e,
        Me,
        Ie,
        Be,
        Le,
        Ue,
        Oe,
        ze,
        De,
        je,
        Ve,
        He,
        qe,
        Ne,
        Fe,
        Ge,
        We,
        Ye,
        Je,
        Ke,
        Ze,
        Xe,
        $e = new Worker("magick.js"),
        Qe = {},
        et = 1;
      ($e.onmessage = function (e) {
        var t = e.data,
          r = Qe[t.requestNumber];
        delete Qe[t.requestNumber];
        var n = { outputFiles: t.outputFiles, stdout: t.stdout, stderr: t.stderr, exitCode: t.exitCode || 0 };
        r.resolve(n);
      }),
        (function (e) {
          (e.Center = "Center"), (e.End = "End"), (e.Left = "Left"), (e.Middle = "Middle"), (e.Right = "Right"), (e.Start = "Start");
        })(V || (V = {})),
        (function (e) {
          (e.Activate = "Activate"),
            (e.Associate = "Associate"),
            (e.Background = "Background"),
            (e.Copy = "Copy"),
            (e.Deactivate = "Deactivate"),
            (e.Discrete = "Discrete"),
            (e.Disassociate = "Disassociate"),
            (e.Extract = "Extract"),
            (e.Off = "Off"),
            (e.On = "On"),
            (e.Opaque = "Opaque"),
            (e.Remove = "Remove"),
            (e.Set = "Set"),
            (e.Shape = "Shape"),
            (e.Transparent = "Transparent");
        })(H || (H = {})),
        (function (e) {
          (e.Kapur = "Kapur"), (e.OTSU = "OTSU"), (e.Triangle = "Triangle");
        })(q || (q = {})),
        (function (e) {
          (e.False = "False"), (e.True = "True"), (e["0_"] = "0"), (e["1_"] = "1");
        })(N || (N = {})),
        (function (e) {
          (e.Disk = "Disk"), (e.Distributed = "Distributed"), (e.Map = "Map"), (e.Memory = "Memory"), (e.Ping = "Ping");
        })(F || (F = {})),
        (function (e) {
          (e.All = "All"),
            (e.Sync = "Sync"),
            (e.Default = "Default"),
            (e.A = "A"),
            (e.Alpha = "Alpha"),
            (e.Black = "Black"),
            (e.B = "B"),
            (e.Blue = "Blue"),
            (e.C = "C"),
            (e.Chroma = "Chroma"),
            (e.Cyan = "Cyan"),
            (e.Gray = "Gray"),
            (e.G = "G"),
            (e.Green = "Green"),
            (e.H = "H"),
            (e.Hue = "Hue"),
            (e.K = "K"),
            (e.L = "L"),
            (e.Lightness = "Lightness"),
            (e.Luminance = "Luminance"),
            (e.M = "M"),
            (e.Magenta = "Magenta"),
            (e.Meta = "Meta"),
            (e.R = "R"),
            (e.Red = "Red"),
            (e.S = "S"),
            (e.Saturation = "Saturation"),
            (e.Y = "Y"),
            (e.Yellow = "Yellow"),
            (e["0_"] = "0"),
            (e["1_"] = "1"),
            (e["2_"] = "2"),
            (e["3_"] = "3"),
            (e["4_"] = "4"),
            (e["5_"] = "5"),
            (e["6_"] = "6"),
            (e["7_"] = "7"),
            (e["8_"] = "8"),
            (e["9_"] = "9"),
            (e["10_"] = "10"),
            (e["11_"] = "11"),
            (e["12_"] = "12"),
            (e["13_"] = "13"),
            (e["14_"] = "14"),
            (e["15_"] = "15"),
            (e["16_"] = "16"),
            (e["17_"] = "17"),
            (e["18_"] = "18"),
            (e["19_"] = "19"),
            (e["20_"] = "20"),
            (e["21_"] = "21"),
            (e["22_"] = "22"),
            (e["23_"] = "23"),
            (e["24_"] = "24"),
            (e["25_"] = "25"),
            (e["26_"] = "26"),
            (e["27_"] = "27"),
            (e["28_"] = "28"),
            (e["29_"] = "29"),
            (e["30_"] = "30"),
            (e["31_"] = "31");
        })(G || (G = {})),
        (function (e) {
          (e.DirectClass = "DirectClass"), (e.PseudoClass = "PseudoClass");
        })(W || (W = {})),
        (function (e) {
          (e.ObjectBoundingBox = "ObjectBoundingBox"), (e.UserSpace = "UserSpace"), (e.UserSpaceOnUse = "UserSpaceOnUse");
        })(Y || (Y = {})),
        (function (e) {
          (e.CIELab = "CIELab"),
            (e.CMY = "CMY"),
            (e.CMYK = "CMYK"),
            (e.Gray = "Gray"),
            (e.HCL = "HCL"),
            (e.HCLp = "HCLp"),
            (e.HSB = "HSB"),
            (e.HSI = "HSI"),
            (e.HSL = "HSL"),
            (e.HSV = "HSV"),
            (e.HWB = "HWB"),
            (e.Lab = "Lab"),
            (e.LCH = "LCH"),
            (e.LCHab = "LCHab"),
            (e.LCHuv = "LCHuv"),
            (e.LinearGray = "LinearGray"),
            (e.LMS = "LMS"),
            (e.Log = "Log"),
            (e.Luv = "Luv"),
            (e.OHTA = "OHTA"),
            (e.Rec601YCbCr = "Rec601YCbCr"),
            (e.Rec709YCbCr = "Rec709YCbCr"),
            (e.RGB = "RGB"),
            (e.scRGB = "scRGB"),
            (e.sRGB = "sRGB"),
            (e.Transparent = "Transparent"),
            (e.xyY = "xyY"),
            (e.XYZ = "XYZ"),
            (e.YCbCr = "YCbCr"),
            (e.YDbDr = "YDbDr"),
            (e.YCC = "YCC"),
            (e.YIQ = "YIQ"),
            (e.YPbPr = "YPbPr"),
            (e.YUV = "YUV");
        })(J || (J = {})),
        (function (e) {
          (e["-alpha"] = "-alpha"),
            (e["+background"] = "+background"),
            (e["-background"] = "-background"),
            (e["+format"] = "+format"),
            (e["-format"] = "-format"),
            (e["-quiet"] = "-quiet"),
            (e["+quiet"] = "+quiet"),
            (e["-regard-warnings"] = "-regard-warnings"),
            (e["+regard-warnings"] = "+regard-warnings"),
            (e["+repage"] = "+repage"),
            (e["-repage"] = "-repage"),
            (e["+size"] = "+size"),
            (e["-size"] = "-size"),
            (e["+virtual-pixel"] = "+virtual-pixel"),
            (e["-virtual-pixel"] = "-virtual-pixel"),
            (e["-blur"] = "-blur"),
            (e["-resize"] = "-resize"),
            (e["-adaptive-blur"] = "-adaptive-blur"),
            (e["-adaptive-resize"] = "-adaptive-resize"),
            (e["-adaptive-sharpen"] = "-adaptive-sharpen"),
            (e["-adjoin"] = "-adjoin"),
            (e["+adjoin"] = "+adjoin"),
            (e["+mattecolor"] = "+mattecolor"),
            (e["-mattecolor"] = "-mattecolor"),
            (e["-annotate"] = "-annotate"),
            (e["-antialias"] = "-antialias"),
            (e["+antialias"] = "+antialias"),
            (e["-append"] = "-append"),
            (e["+append"] = "+append"),
            (e["+attenuate"] = "+attenuate"),
            (e["-attenuate"] = "-attenuate"),
            (e["+authenticate"] = "+authenticate"),
            (e["-authenticate"] = "-authenticate"),
            (e["-auto-gamma"] = "-auto-gamma"),
            (e["-auto-level"] = "-auto-level"),
            (e["-auto-orient"] = "-auto-orient"),
            (e["-auto-threshold"] = "-auto-threshold"),
            (e["+backdrop"] = "+backdrop"),
            (e["-backdrop"] = "-backdrop"),
            (e["-bench"] = "-bench"),
            (e["+bias"] = "+bias"),
            (e["-bias"] = "-bias"),
            (e["-black-point-compensation"] = "-black-point-compensation"),
            (e["+black-point-compensation"] = "+black-point-compensation"),
            (e["-black-threshold"] = "-black-threshold"),
            (e["+blend"] = "+blend"),
            (e["-blend"] = "-blend"),
            (e["+blue-primary"] = "+blue-primary"),
            (e["-blue-primary"] = "-blue-primary"),
            (e["-blue-shift"] = "-blue-shift"),
            (e["+blue-shift"] = "+blue-shift"),
            (e["-border"] = "-border"),
            (e["+bordercolor"] = "+bordercolor"),
            (e["-bordercolor"] = "-bordercolor"),
            (e["+borderwidth"] = "+borderwidth"),
            (e["-borderwidth"] = "-borderwidth"),
            (e["-brightness-contrast"] = "-brightness-contrast"),
            (e["+cache"] = "+cache"),
            (e["-cache"] = "-cache"),
            (e["+caption"] = "+caption"),
            (e["-caption"] = "-caption"),
            (e["-cdl"] = "-cdl"),
            (e["+channel"] = "+channel"),
            (e["-channel"] = "-channel"),
            (e["-channel-fx"] = "-channel-fx"),
            (e["-charcoal"] = "-charcoal"),
            (e["-chop"] = "-chop"),
            (e["-clamp"] = "-clamp"),
            (e["-clip"] = "-clip"),
            (e["+clip"] = "+clip"),
            (e["+clip-mask"] = "+clip-mask"),
            (e["-clip-mask"] = "-clip-mask"),
            (e["-clip-path"] = "-clip-path"),
            (e["+clip-path"] = "+clip-path"),
            (e["+clone"] = "+clone"),
            (e["-clone"] = "-clone"),
            (e["-clut"] = "-clut"),
            (e["-coalesce"] = "-coalesce"),
            (e["-colorize"] = "-colorize"),
            (e["+colormap"] = "+colormap"),
            (e["-colormap"] = "-colormap"),
            (e["-color-matrix"] = "-color-matrix"),
            (e["-colors"] = "-colors"),
            (e["+colorspace"] = "+colorspace"),
            (e["-colorspace"] = "-colorspace"),
            (e["-combine"] = "-combine"),
            (e["+combine"] = "+combine"),
            (e["+comment"] = "+comment"),
            (e["-comment"] = "-comment"),
            (e["-compare"] = "-compare"),
            (e["-complex"] = "-complex"),
            (e["+compose"] = "+compose"),
            (e["-compose"] = "-compose"),
            (e["-composite"] = "-composite"),
            (e["+compress"] = "+compress"),
            (e["-compress"] = "-compress"),
            (e["-concurrent"] = "-concurrent"),
            (e["-connected-components"] = "-connected-components"),
            (e["-contrast-stretch"] = "-contrast-stretch"),
            (e["-convolve"] = "-convolve"),
            (e["-copy"] = "-copy"),
            (e["-crop"] = "-crop"),
            (e["-cycle"] = "-cycle"),
            (e["+debug"] = "+debug"),
            (e["-debug"] = "-debug"),
            (e["-decipher"] = "-decipher"),
            (e["-define"] = "-define"),
            (e["+define"] = "+define"),
            (e["+delay"] = "+delay"),
            (e["-delay"] = "-delay"),
            (e["+delete"] = "+delete"),
            (e["-delete"] = "-delete"),
            (e["+density"] = "+density"),
            (e["-density"] = "-density"),
            (e["+depth"] = "+depth"),
            (e["-depth"] = "-depth"),
            (e["+descend"] = "+descend"),
            (e["-descend"] = "-descend"),
            (e["+deskew"] = "+deskew"),
            (e["-deskew"] = "-deskew"),
            (e["-despeckle"] = "-despeckle"),
            (e["+direction"] = "+direction"),
            (e["-direction"] = "-direction"),
            (e["+displace"] = "+displace"),
            (e["-displace"] = "-displace"),
            (e["-display"] = "-display"),
            (e["+display"] = "+display"),
            (e["+dispose"] = "+dispose"),
            (e["-dispose"] = "-dispose"),
            (e["+dissimilarity-threshold"] = "+dissimilarity-threshold"),
            (e["-dissimilarity-threshold"] = "-dissimilarity-threshold"),
            (e["+dissolve"] = "+dissolve"),
            (e["-dissolve"] = "-dissolve"),
            (e["-distort"] = "-distort"),
            (e["+distort"] = "+distort"),
            (e["+dither"] = "+dither"),
            (e["-dither"] = "-dither"),
            (e["-draw"] = "-draw"),
            (e["+duplicate"] = "+duplicate"),
            (e["-duplicate"] = "-duplicate"),
            (e["-duration"] = "-duration"),
            (e["+duration"] = "+duration"),
            (e["-edge"] = "-edge"),
            (e["-emboss"] = "-emboss"),
            (e["-encipher"] = "-encipher"),
            (e["+encoding"] = "+encoding"),
            (e["-encoding"] = "-encoding"),
            (e["+endian"] = "+endian"),
            (e["-endian"] = "-endian"),
            (e["-enhance"] = "-enhance"),
            (e["-equalize"] = "-equalize"),
            (e["-evaluate"] = "-evaluate"),
            (e["-evaluate-sequence"] = "-evaluate-sequence"),
            (e["-exit"] = "-exit"),
            (e["-extent"] = "-extent"),
            (e["+extract"] = "+extract"),
            (e["-extract"] = "-extract"),
            (e["-family"] = "-family"),
            (e["+features"] = "+features"),
            (e["-features"] = "-features"),
            (e["-fft"] = "-fft"),
            (e["+fft"] = "+fft"),
            (e["+fill"] = "+fill"),
            (e["-fill"] = "-fill"),
            (e["+filter"] = "+filter"),
            (e["-filter"] = "-filter"),
            (e["-flatten"] = "-flatten"),
            (e["-flip"] = "-flip"),
            (e["-floodfill"] = "-floodfill"),
            (e["+floodfill"] = "+floodfill"),
            (e["-flop"] = "-flop"),
            (e["+font"] = "+font"),
            (e["-font"] = "-font"),
            (e["+foreground"] = "+foreground"),
            (e["-foreground"] = "-foreground"),
            (e["-frame"] = "-frame"),
            (e["-function"] = "-function"),
            (e["+fuzz"] = "+fuzz"),
            (e["-fuzz"] = "-fuzz"),
            (e["-fx"] = "-fx"),
            (e["-gamma"] = "-gamma"),
            (e["+gamma"] = "+gamma"),
            (e["-gaussian-blur"] = "-gaussian-blur"),
            (e["+geometry"] = "+geometry"),
            (e["-geometry"] = "-geometry"),
            (e["+gravity"] = "+gravity"),
            (e["-gravity"] = "-gravity"),
            (e["-grayscale"] = "-grayscale"),
            (e["+green-primary"] = "+green-primary"),
            (e["-green-primary"] = "-green-primary"),
            (e["-hald-clut"] = "-hald-clut"),
            (e["+highlight-color"] = "+highlight-color"),
            (e["-highlight-color"] = "-highlight-color"),
            (e["+iconGeometry"] = "+iconGeometry"),
            (e["-iconGeometry"] = "-iconGeometry"),
            (e["-iconic"] = "-iconic"),
            (e["+iconic"] = "+iconic"),
            (e["-identify"] = "-identify"),
            (e["-ift"] = "-ift"),
            (e["+ift"] = "+ift"),
            (e["-immutable"] = "-immutable"),
            (e["+immutable"] = "+immutable"),
            (e["-implode"] = "-implode"),
            (e["+insert"] = "+insert"),
            (e["-insert"] = "-insert"),
            (e["+intensity"] = "+intensity"),
            (e["-intensity"] = "-intensity"),
            (e["+intent"] = "+intent"),
            (e["-intent"] = "-intent"),
            (e["+interlace"] = "+interlace"),
            (e["-interlace"] = "-interlace"),
            (e["+interline-spacing"] = "+interline-spacing"),
            (e["-interline-spacing"] = "-interline-spacing"),
            (e["+interpolate"] = "+interpolate"),
            (e["-interpolate"] = "-interpolate"),
            (e["-interpolative-resize"] = "-interpolative-resize"),
            (e["+interword-spacing"] = "+interword-spacing"),
            (e["-interword-spacing"] = "-interword-spacing"),
            (e["+kerning"] = "+kerning"),
            (e["-kerning"] = "-kerning"),
            (e["-kuwahara"] = "-kuwahara"),
            (e["+label"] = "+label"),
            (e["-label"] = "-label"),
            (e["-lat"] = "-lat"),
            (e["-layers"] = "-layers"),
            (e["-level"] = "-level"),
            (e["+level"] = "+level"),
            (e["-level-colors"] = "-level-colors"),
            (e["+level-colors"] = "+level-colors"),
            (e["-limit"] = "-limit"),
            (e["-linear-stretch"] = "-linear-stretch"),
            (e["-liquid-rescale"] = "-liquid-rescale"),
            (e["-list"] = "-list"),
            (e["-local-contrast"] = "-local-contrast"),
            (e["+log"] = "+log"),
            (e["-log"] = "-log"),
            (e["+loop"] = "+loop"),
            (e["-loop"] = "-loop"),
            (e["+lowlight-color"] = "+lowlight-color"),
            (e["-lowlight-color"] = "-lowlight-color"),
            (e["-magnify"] = "-magnify"),
            (e["+mask"] = "+mask"),
            (e["-mask"] = "-mask"),
            (e["+metric"] = "+metric"),
            (e["-metric"] = "-metric"),
            (e["+mode"] = "+mode"),
            (e["-modulate"] = "-modulate"),
            (e["-moments"] = "-moments"),
            (e["+moments"] = "+moments"),
            (e["-monitor"] = "-monitor"),
            (e["+monitor"] = "+monitor"),
            (e["+monochrome"] = "+monochrome"),
            (e["-monochrome"] = "-monochrome"),
            (e["-morph"] = "-morph"),
            (e["-morphology"] = "-morphology"),
            (e["-mosaic"] = "-mosaic"),
            (e["-motion-blur"] = "-motion-blur"),
            (e["+name"] = "+name"),
            (e["-name"] = "-name"),
            (e["+negate"] = "+negate"),
            (e["-negate"] = "-negate"),
            (e["-noise"] = "-noise"),
            (e["+noise"] = "+noise"),
            (e["-noop"] = "-noop"),
            (e["-normalize"] = "-normalize"),
            (e["-opaque"] = "-opaque"),
            (e["+opaque"] = "+opaque"),
            (e["-ordered-dither"] = "-ordered-dither"),
            (e["+orient"] = "+orient"),
            (e["-orient"] = "-orient"),
            (e["+page"] = "+page"),
            (e["-page"] = "-page"),
            (e["-paint"] = "-paint"),
            (e["+path"] = "+path"),
            (e["-path"] = "-path"),
            (e["+pause"] = "+pause"),
            (e["-pause"] = "-pause"),
            (e["-ping"] = "-ping"),
            (e["+ping"] = "+ping"),
            (e["+pointsize"] = "+pointsize"),
            (e["-pointsize"] = "-pointsize"),
            (e["+polaroid"] = "+polaroid"),
            (e["-polaroid"] = "-polaroid"),
            (e["-poly"] = "-poly"),
            (e["-posterize"] = "-posterize"),
            (e["+precision"] = "+precision"),
            (e["-precision"] = "-precision"),
            (e["-preview"] = "-preview"),
            (e["-print"] = "-print"),
            (e["-process"] = "-process"),
            (e["+profile"] = "+profile"),
            (e["-profile"] = "-profile"),
            (e["+quality"] = "+quality"),
            (e["-quality"] = "-quality"),
            (e["+quantize"] = "+quantize"),
            (e["-quantize"] = "-quantize"),
            (e["-raise"] = "-raise"),
            (e["+raise"] = "+raise"),
            (e["-random-threshold"] = "-random-threshold"),
            (e["-range-threshold"] = "-range-threshold"),
            (e["-read"] = "-read"),
            (e["+read-mask"] = "+read-mask"),
            (e["-read-mask"] = "-read-mask"),
            (e["+red-primary"] = "+red-primary"),
            (e["-red-primary"] = "-red-primary"),
            (e["+region"] = "+region"),
            (e["-region"] = "-region"),
            (e["+remap"] = "+remap"),
            (e["-remap"] = "-remap"),
            (e["+remote"] = "+remote"),
            (e["-remote"] = "-remote"),
            (e["-render"] = "-render"),
            (e["+render"] = "+render"),
            (e["-resample"] = "-resample"),
            (e["-respect-parenthesis"] = "-respect-parenthesis"),
            (e["+respect-parenthesis"] = "+respect-parenthesis"),
            (e["-reverse"] = "-reverse"),
            (e["-roll"] = "-roll"),
            (e["-rotate"] = "-rotate"),
            (e["-rotational-blur"] = "-rotational-blur"),
            (e["-sample"] = "-sample"),
            (e["+sampling-factor"] = "+sampling-factor"),
            (e["-sampling-factor"] = "-sampling-factor"),
            (e["-scale"] = "-scale"),
            (e["+scene"] = "+scene"),
            (e["-scene"] = "-scene"),
            (e["+scenes"] = "+scenes"),
            (e["-scenes"] = "-scenes"),
            (e["+screen"] = "+screen"),
            (e["-screen"] = "-screen"),
            (e["-script"] = "-script"),
            (e["+seed"] = "+seed"),
            (e["-seed"] = "-seed"),
            (e["-segment"] = "-segment"),
            (e["-selective-blur"] = "-selective-blur"),
            (e["-separate"] = "-separate"),
            (e["-sepia-tone"] = "-sepia-tone"),
            (e["+set"] = "+set"),
            (e["-set"] = "-set"),
            (e["-shade"] = "-shade"),
            (e["-shadow"] = "-shadow"),
            (e["+shared-memory"] = "+shared-memory"),
            (e["-shared-memory"] = "-shared-memory"),
            (e["-sharpen"] = "-sharpen"),
            (e["-shave"] = "-shave"),
            (e["-shear"] = "-shear"),
            (e["-sigmoidal-contrast"] = "-sigmoidal-contrast"),
            (e["+sigmoidal-contrast"] = "+sigmoidal-contrast"),
            (e["+silent"] = "+silent"),
            (e["-silent"] = "-silent"),
            (e["+similarity-threshold"] = "+similarity-threshold"),
            (e["-similarity-threshold"] = "-similarity-threshold"),
            (e["-sketch"] = "-sketch"),
            (e["-smush"] = "-smush"),
            (e["+smush"] = "+smush"),
            (e["+snaps"] = "+snaps"),
            (e["-snaps"] = "-snaps"),
            (e["-solarize"] = "-solarize"),
            (e["-sparse-color"] = "-sparse-color"),
            (e["-splice"] = "-splice"),
            (e["-spread"] = "-spread"),
            (e["-statistic"] = "-statistic"),
            (e["+stegano"] = "+stegano"),
            (e["-stegano"] = "-stegano"),
            (e["-stereo"] = "-stereo"),
            (e["-stretch"] = "-stretch"),
            (e["-strip"] = "-strip"),
            (e["+stroke"] = "+stroke"),
            (e["-stroke"] = "-stroke"),
            (e["-strokewidth"] = "-strokewidth"),
            (e["+strokewidth"] = "+strokewidth"),
            (e["+style"] = "+style"),
            (e["-style"] = "-style"),
            (e["-subimage"] = "-subimage"),
            (e["-subimage-search"] = "-subimage-search"),
            (e["+subimage-search"] = "+subimage-search"),
            (e["+swap"] = "+swap"),
            (e["-swap"] = "-swap"),
            (e["-swirl"] = "-swirl"),
            (e["-synchronize"] = "-synchronize"),
            (e["+synchronize"] = "+synchronize"),
            (e["-taint"] = "-taint"),
            (e["+taint"] = "+taint"),
            (e["+text-font"] = "+text-font"),
            (e["-text-font"] = "-text-font"),
            (e["+texture"] = "+texture"),
            (e["-texture"] = "-texture"),
            (e["+threshold"] = "+threshold"),
            (e["-threshold"] = "-threshold"),
            (e["-thumbnail"] = "-thumbnail"),
            (e["+tile"] = "+tile"),
            (e["-tile"] = "-tile"),
            (e["+tile-offset"] = "+tile-offset"),
            (e["-tile-offset"] = "-tile-offset"),
            (e["-tint"] = "-tint"),
            (e["+tint"] = "+tint"),
            (e["+title"] = "+title"),
            (e["-title"] = "-title"),
            (e["-transparent"] = "-transparent"),
            (e["+transparent"] = "+transparent"),
            (e["+transparent-color"] = "+transparent-color"),
            (e["-transparent-color"] = "-transparent-color"),
            (e["-transpose"] = "-transpose"),
            (e["-transverse"] = "-transverse"),
            (e["-treedepth"] = "-treedepth"),
            (e["-trim"] = "-trim"),
            (e["+type"] = "+type"),
            (e["-type"] = "-type"),
            (e["+undercolor"] = "+undercolor"),
            (e["-undercolor"] = "-undercolor"),
            (e["-unique"] = "-unique"),
            (e["+unique"] = "+unique"),
            (e["-unique-colors"] = "-unique-colors"),
            (e["+units"] = "+units"),
            (e["-units"] = "-units"),
            (e["-unsharp"] = "-unsharp"),
            (e["+update"] = "+update"),
            (e["-update"] = "-update"),
            (e["+use-pixmap"] = "+use-pixmap"),
            (e["-use-pixmap"] = "-use-pixmap"),
            (e["-verbose"] = "-verbose"),
            (e["+verbose"] = "+verbose"),
            (e["-version"] = "-version"),
            (e["+view"] = "+view"),
            (e["-view"] = "-view"),
            (e["-vignette"] = "-vignette"),
            (e["+visual"] = "+visual"),
            (e["-visual"] = "-visual"),
            (e["+watermark"] = "+watermark"),
            (e["-watermark"] = "-watermark"),
            (e["-wave"] = "-wave"),
            (e["-wavelet-denoise"] = "-wavelet-denoise"),
            (e["-weight"] = "-weight"),
            (e["+white-point"] = "+white-point"),
            (e["-white-point"] = "-white-point"),
            (e["-white-threshold"] = "-white-threshold"),
            (e["+window"] = "+window"),
            (e["-window"] = "-window"),
            (e["+window-group"] = "+window-group"),
            (e["-window-group"] = "-window-group"),
            (e["-write"] = "-write"),
            (e["+write"] = "+write"),
            (e["+write-mask"] = "+write-mask"),
            (e["-write-mask"] = "-write-mask");
        })(K || (K = {})),
        (function (e) {
          (e.CSS = "CSS"), (e.MVG = "MVG"), (e.No = "No"), (e.SVG = "SVG"), (e.X11 = "X11"), (e.XPM = "XPM");
        })(Z || (Z = {})),
        (function (e) {
          (e.Add = "Add"),
            (e.Conjugate = "Conjugate"),
            (e.Divide = "Divide"),
            (e.MagnitudePhase = "MagnitudePhase"),
            (e.Multiply = "Multiply"),
            (e.RealImaginary = "RealImaginary"),
            (e.Subtract = "Subtract");
        })(X || (X = {})),
        (function (e) {
          (e.Atop = "Atop"),
            (e.Blend = "Blend"),
            (e.Blur = "Blur"),
            (e.Bumpmap = "Bumpmap"),
            (e.ChangeMask = "ChangeMask"),
            (e.Clear = "Clear"),
            (e.ColorBurn = "ColorBurn"),
            (e.ColorDodge = "ColorDodge"),
            (e.Colorize = "Colorize"),
            (e.CopyAlpha = "CopyAlpha"),
            (e.CopyBlack = "CopyBlack"),
            (e.CopyBlue = "CopyBlue"),
            (e.CopyCyan = "CopyCyan"),
            (e.CopyGreen = "CopyGreen"),
            (e.Copy = "Copy"),
            (e.CopyMagenta = "CopyMagenta"),
            (e.CopyRed = "CopyRed"),
            (e.CopyYellow = "CopyYellow"),
            (e.Darken = "Darken"),
            (e.DarkenIntensity = "DarkenIntensity"),
            (e.DivideDst = "DivideDst"),
            (e.DivideSrc = "DivideSrc"),
            (e.Dst = "Dst"),
            (e.Difference = "Difference"),
            (e.Displace = "Displace"),
            (e.Dissolve = "Dissolve"),
            (e.Distort = "Distort"),
            (e.DstAtop = "DstAtop"),
            (e.DstIn = "DstIn"),
            (e.DstOut = "DstOut"),
            (e.DstOver = "DstOver"),
            (e.Exclusion = "Exclusion"),
            (e.HardLight = "HardLight"),
            (e.HardMix = "HardMix"),
            (e.Hue = "Hue"),
            (e.In = "In"),
            (e.Intensity = "Intensity"),
            (e.Lighten = "Lighten"),
            (e.LightenIntensity = "LightenIntensity"),
            (e.LinearBurn = "LinearBurn"),
            (e.LinearDodge = "LinearDodge"),
            (e.LinearLight = "LinearLight"),
            (e.Luminize = "Luminize"),
            (e.Mathematics = "Mathematics"),
            (e.MinusDst = "MinusDst"),
            (e.MinusSrc = "MinusSrc"),
            (e.Modulate = "Modulate"),
            (e.ModulusAdd = "ModulusAdd"),
            (e.ModulusSubtract = "ModulusSubtract"),
            (e.Multiply = "Multiply"),
            (e.None = "None"),
            (e.Out = "Out"),
            (e.Overlay = "Overlay"),
            (e.Over = "Over"),
            (e.PegtopLight = "PegtopLight"),
            (e.PinLight = "PinLight"),
            (e.Plus = "Plus"),
            (e.Replace = "Replace"),
            (e.Saturate = "Saturate"),
            (e.Screen = "Screen"),
            (e.SoftLight = "SoftLight"),
            (e.Src = "Src"),
            (e.SrcAtop = "SrcAtop"),
            (e.SrcIn = "SrcIn"),
            (e.SrcOut = "SrcOut"),
            (e.SrcOver = "SrcOver"),
            (e.Stereo = "Stereo"),
            (e.VividLight = "VividLight"),
            (e.Xor = "Xor");
        })($ || ($ = {})),
        (function (e) {
          (e.B44A = "B44A"),
            (e.B44 = "B44"),
            (e.BZip = "BZip"),
            (e.DXT1 = "DXT1"),
            (e.DXT3 = "DXT3"),
            (e.DXT5 = "DXT5"),
            (e.Fax = "Fax"),
            (e.Group4 = "Group4"),
            (e.JBIG1 = "JBIG1"),
            (e.JBIG2 = "JBIG2"),
            (e.JPEG2000 = "JPEG2000"),
            (e.JPEG = "JPEG"),
            (e.LosslessJPEG = "LosslessJPEG"),
            (e.Lossless = "Lossless"),
            (e.LZMA = "LZMA"),
            (e.LZW = "LZW"),
            (e.None = "None"),
            (e.Piz = "Piz"),
            (e.Pxr24 = "Pxr24"),
            (e.RLE = "RLE"),
            (e.RunlengthEncoded = "RunlengthEncoded"),
            (e.WebP = "WebP"),
            (e.ZipS = "ZipS"),
            (e.Zip = "Zip"),
            (e.Zstd = "Zstd");
        })(Q || (Q = {})),
        (function (e) {
          (e.Byte = "Byte"), (e.Long = "Long"), (e.Short = "Short"), (e.String = "String");
        })(ee || (ee = {})),
        (function (e) {
          (e.All = "All"),
            (e.Accelerate = "Accelerate"),
            (e.Annotate = "Annotate"),
            (e.Blob = "Blob"),
            (e.Cache = "Cache"),
            (e.Coder = "Coder"),
            (e.Command = "Command"),
            (e.Configure = "Configure"),
            (e.Deprecate = "Deprecate"),
            (e.Draw = "Draw"),
            (e.Exception = "Exception"),
            (e.Locale = "Locale"),
            (e.Module = "Module"),
            (e.None = "None"),
            (e.Pixel = "Pixel"),
            (e.Policy = "Policy"),
            (e.Resource = "Resource"),
            (e.Trace = "Trace"),
            (e.Transform = "Transform"),
            (e.User = "User"),
            (e.Wand = "Wand"),
            (e.X11 = "X11");
        })(te || (te = {})),
        (function (e) {
          (e.LineThrough = "LineThrough"), (e.None = "None"), (e.Overline = "Overline"), (e.Underline = "Underline");
        })(re || (re = {})),
        (function (e) {
          (e["right-to-left"] = "right-to-left"), (e["left-to-right"] = "left-to-right");
        })(ne || (ne = {})),
        (function (e) {
          (e.Undefined = "Undefined"),
            (e.Background = "Background"),
            (e.None = "None"),
            (e.Previous = "Previous"),
            (e["0_"] = "0"),
            (e["1_"] = "1"),
            (e["2_"] = "2"),
            (e["3_"] = "3");
        })(ie || (ie = {})),
        (function (e) {
          (e.Affine = "Affine"),
            (e.AffineProjection = "AffineProjection"),
            (e.ScaleRotateTranslate = "ScaleRotateTranslate"),
            (e.SRT = "SRT"),
            (e.Perspective = "Perspective"),
            (e.PerspectiveProjection = "PerspectiveProjection"),
            (e.BilinearForward = "BilinearForward"),
            (e.BilinearReverse = "BilinearReverse"),
            (e.Polynomial = "Polynomial"),
            (e.Arc = "Arc"),
            (e.Polar = "Polar"),
            (e.DePolar = "DePolar"),
            (e.Barrel = "Barrel"),
            (e.BarrelInverse = "BarrelInverse"),
            (e.Shepards = "Shepards"),
            (e.Resize = "Resize");
        })(oe || (oe = {})),
        (function (e) {
          (e.None = "None"), (e.FloydSteinberg = "FloydSteinberg"), (e.Riemersma = "Riemersma");
        })(se || (se = {})),
        (function (e) {
          (e.LSB = "LSB"), (e.MSB = "MSB");
        })(ae || (ae = {})),
        (function (e) {
          (e.Abs = "Abs"),
            (e.Add = "Add"),
            (e.AddModulus = "AddModulus"),
            (e.And = "And"),
            (e.Cos = "Cos"),
            (e.Cosine = "Cosine"),
            (e.Divide = "Divide"),
            (e.Exp = "Exp"),
            (e.Exponential = "Exponential"),
            (e.GaussianNoise = "GaussianNoise"),
            (e.ImpulseNoise = "ImpulseNoise"),
            (e.LaplacianNoise = "LaplacianNoise"),
            (e.LeftShift = "LeftShift"),
            (e.Log = "Log"),
            (e.Max = "Max"),
            (e.Mean = "Mean"),
            (e.Median = "Median"),
            (e.Min = "Min"),
            (e.MultiplicativeNoise = "MultiplicativeNoise"),
            (e.Multiply = "Multiply"),
            (e.Or = "Or"),
            (e.PoissonNoise = "PoissonNoise"),
            (e.Pow = "Pow"),
            (e.RightShift = "RightShift"),
            (e.RMS = "RMS"),
            (e.RootMeanSquare = "RootMeanSquare"),
            (e.Set = "Set"),
            (e.Sin = "Sin"),
            (e.Sine = "Sine"),
            (e.Subtract = "Subtract"),
            (e.Sum = "Sum"),
            (e.Threshold = "Threshold"),
            (e.ThresholdBlack = "ThresholdBlack"),
            (e.ThresholdWhite = "ThresholdWhite"),
            (e.UniformNoise = "UniformNoise"),
            (e.Xor = "Xor");
        })(ce || (ce = {})),
        (function (e) {
          (e.Evenodd = "Evenodd"), (e.NonZero = "NonZero");
        })(ue || (ue = {})),
        (function (e) {
          (e.Bartlett = "Bartlett"),
            (e.Blackman = "Blackman"),
            (e.Bohman = "Bohman"),
            (e.Box = "Box"),
            (e.Catrom = "Catrom"),
            (e.Cosine = "Cosine"),
            (e.Cubic = "Cubic"),
            (e.Gaussian = "Gaussian"),
            (e.Hamming = "Hamming"),
            (e.Hann = "Hann"),
            (e.Hermite = "Hermite"),
            (e.Jinc = "Jinc"),
            (e.Kaiser = "Kaiser"),
            (e.Lagrange = "Lagrange"),
            (e.Lanczos = "Lanczos"),
            (e.Lanczos2 = "Lanczos2"),
            (e.Lanczos2Sharp = "Lanczos2Sharp"),
            (e.LanczosRadius = "LanczosRadius"),
            (e.LanczosSharp = "LanczosSharp"),
            (e.Mitchell = "Mitchell"),
            (e.Parzen = "Parzen"),
            (e.Point = "Point"),
            (e.Quadratic = "Quadratic"),
            (e.Robidoux = "Robidoux"),
            (e.RobidouxSharp = "RobidouxSharp"),
            (e.Sinc = "Sinc"),
            (e.SincFast = "SincFast"),
            (e.Spline = "Spline"),
            (e.CubicSpline = "CubicSpline"),
            (e.Triangle = "Triangle"),
            (e.Welch = "Welch");
        })(le || (le = {})),
        (function (e) {
          (e.Polynomial = "Polynomial"), (e.Sinusoid = "Sinusoid"), (e.ArcSin = "ArcSin"), (e.ArcTan = "ArcTan");
        })(he || (he = {})),
        (function (e) {
          (e.Linear = "Linear"), (e.Radial = "Radial");
        })(fe || (fe = {})),
        (function (e) {
          (e.None = "None"),
            (e.Center = "Center"),
            (e.East = "East"),
            (e.Forget = "Forget"),
            (e.NorthEast = "NorthEast"),
            (e.North = "North"),
            (e.NorthWest = "NorthWest"),
            (e.SouthEast = "SouthEast"),
            (e.South = "South"),
            (e.SouthWest = "SouthWest"),
            (e.West = "West");
        })(pe || (pe = {})),
        (function (e) {
          (e.Average = "Average"),
            (e.Brightness = "Brightness"),
            (e.Lightness = "Lightness"),
            (e.Mean = "Mean"),
            (e.MS = "MS"),
            (e.Rec601Luma = "Rec601Luma"),
            (e.Rec601Luminance = "Rec601Luminance"),
            (e.Rec709Luma = "Rec709Luma"),
            (e.Rec709Luminance = "Rec709Luminance"),
            (e.RMS = "RMS");
        })(de || (de = {})),
        (function (e) {
          (e.Absolute = "Absolute"), (e.Perceptual = "Perceptual"), (e.Relative = "Relative"), (e.Saturation = "Saturation");
        })(me || (me = {})),
        (function (e) {
          (e.Line = "Line"),
            (e.None = "None"),
            (e.Plane = "Plane"),
            (e.Partition = "Partition"),
            (e.GIF = "GIF"),
            (e.JPEG = "JPEG"),
            (e.PNG = "PNG");
        })(ge || (ge = {})),
        (function (e) {
          (e.Average = "Average"),
            (e.Average4 = "Average4"),
            (e.Average9 = "Average9"),
            (e.Average16 = "Average16"),
            (e.Background = "Background"),
            (e.Bilinear = "Bilinear"),
            (e.Blend = "Blend"),
            (e.Catrom = "Catrom"),
            (e.Integer = "Integer"),
            (e.Mesh = "Mesh"),
            (e.Nearest = "Nearest"),
            (e.Spline = "Spline");
        })(ye || (ye = {})),
        (function (e) {
          (e.Unity = "Unity"),
            (e.Gaussian = "Gaussian"),
            (e.DoG = "DoG"),
            (e.LoG = "LoG"),
            (e.Blur = "Blur"),
            (e.Comet = "Comet"),
            (e.Binomial = "Binomial"),
            (e.Laplacian = "Laplacian"),
            (e.Sobel = "Sobel"),
            (e.FreiChen = "FreiChen"),
            (e.Roberts = "Roberts"),
            (e.Prewitt = "Prewitt"),
            (e.Compass = "Compass"),
            (e.Kirsch = "Kirsch"),
            (e.Diamond = "Diamond"),
            (e.Square = "Square"),
            (e.Rectangle = "Rectangle"),
            (e.Disk = "Disk"),
            (e.Octagon = "Octagon"),
            (e.Plus = "Plus"),
            (e.Cross = "Cross"),
            (e.Ring = "Ring"),
            (e.Peaks = "Peaks"),
            (e.Edges = "Edges"),
            (e.Corners = "Corners"),
            (e.Diagonals = "Diagonals"),
            (e.LineEnds = "LineEnds"),
            (e.LineJunctions = "LineJunctions"),
            (e.Ridges = "Ridges"),
            (e.ConvexHull = "ConvexHull"),
            (e.ThinSe = "ThinSe"),
            (e.Skeleton = "Skeleton"),
            (e.Chebyshev = "Chebyshev"),
            (e.Manhattan = "Manhattan"),
            (e.Octagonal = "Octagonal"),
            (e.Euclidean = "Euclidean");
        })(ve || (ve = {})),
        (function (e) {
          (e.Coalesce = "Coalesce"),
            (e.CompareAny = "CompareAny"),
            (e.CompareClear = "CompareClear"),
            (e.CompareOverlay = "CompareOverlay"),
            (e.Dispose = "Dispose"),
            (e.Optimize = "Optimize"),
            (e.OptimizeFrame = "OptimizeFrame"),
            (e.OptimizePlus = "OptimizePlus"),
            (e.OptimizeTransparency = "OptimizeTransparency"),
            (e.RemoveDups = "RemoveDups"),
            (e.RemoveZero = "RemoveZero"),
            (e.Composite = "Composite"),
            (e.Merge = "Merge"),
            (e.Flatten = "Flatten"),
            (e.Mosaic = "Mosaic"),
            (e.TrimBounds = "TrimBounds");
        })(be || (be = {})),
        (function (e) {
          (e.Butt = "Butt"), (e.Round = "Round"), (e.Square = "Square");
        })(we || (we = {})),
        (function (e) {
          (e.Bevel = "Bevel"), (e.Miter = "Miter"), (e.Round = "Round");
        })(Se || (Se = {})),
        (function (e) {
          (e.Align = "Align"),
            (e.Alpha = "Alpha"),
            (e.AutoThreshold = "AutoThreshold"),
            (e.Boolean = "Boolean"),
            (e.Cache = "Cache"),
            (e.Channel = "Channel"),
            (e.Class = "Class"),
            (e.CLI = "CLI"),
            (e.ClipPath = "ClipPath"),
            (e.Coder = "Coder"),
            (e.Color = "Color"),
            (e.Colorspace = "Colorspace"),
            (e.Command = "Command"),
            (e.Compliance = "Compliance"),
            (e.Complex = "Complex"),
            (e.Compose = "Compose"),
            (e.Compress = "Compress"),
            (e.Configure = "Configure"),
            (e.DataType = "DataType"),
            (e.Debug = "Debug"),
            (e.Decoration = "Decoration"),
            (e.Delegate = "Delegate"),
            (e.Direction = "Direction"),
            (e.Dispose = "Dispose"),
            (e.Distort = "Distort"),
            (e.Dither = "Dither"),
            (e.Endian = "Endian"),
            (e.Evaluate = "Evaluate"),
            (e.FillRule = "FillRule"),
            (e.Filter = "Filter"),
            (e.Font = "Font"),
            (e.Format = "Format"),
            (e.Function = "Function"),
            (e.Gradient = "Gradient"),
            (e.Gravity = "Gravity"),
            (e.Intensity = "Intensity"),
            (e.Intent = "Intent"),
            (e.Interlace = "Interlace"),
            (e.Interpolate = "Interpolate"),
            (e.Kernel = "Kernel"),
            (e.Layers = "Layers"),
            (e.LineCap = "LineCap"),
            (e.LineJoin = "LineJoin"),
            (e.List = "List"),
            (e.Locale = "Locale"),
            (e.LogEvent = "LogEvent"),
            (e.Log = "Log"),
            (e.Magic = "Magic"),
            (e.Method = "Method"),
            (e.Metric = "Metric"),
            (e.Mime = "Mime"),
            (e.Mode = "Mode"),
            (e.Morphology = "Morphology"),
            (e.Module = "Module"),
            (e.Noise = "Noise"),
            (e.Orientation = "Orientation"),
            (e.PixelChannel = "PixelChannel"),
            (e.PixelIntensity = "PixelIntensity"),
            (e.PixelMask = "PixelMask"),
            (e.PixelTrait = "PixelTrait"),
            (e.Policy = "Policy"),
            (e.PolicyDomain = "PolicyDomain"),
            (e.PolicyRights = "PolicyRights"),
            (e.Preview = "Preview"),
            (e.Primitive = "Primitive"),
            (e.QuantumFormat = "QuantumFormat"),
            (e.Resource = "Resource"),
            (e.SparseColor = "SparseColor"),
            (e.Statistic = "Statistic"),
            (e.Storage = "Storage"),
            (e.Stretch = "Stretch"),
            (e.Style = "Style"),
            (e.Threshold = "Threshold"),
            (e.Tool = "Tool"),
            (e.Type = "Type"),
            (e.Units = "Units"),
            (e.Validate = "Validate"),
            (e.VirtualPixel = "VirtualPixel"),
            (e.Weight = "Weight");
        })(xe || (xe = {})),
        (function (e) {
          (e.All = "All"),
            (e.Accelerate = "Accelerate"),
            (e.Annotate = "Annotate"),
            (e.Blob = "Blob"),
            (e.Cache = "Cache"),
            (e.Coder = "Coder"),
            (e.Command = "Command"),
            (e.Configure = "Configure"),
            (e.Deprecate = "Deprecate"),
            (e.Draw = "Draw"),
            (e.Exception = "Exception"),
            (e.Locale = "Locale"),
            (e.Module = "Module"),
            (e.None = "None"),
            (e.Pixel = "Pixel"),
            (e.Policy = "Policy"),
            (e.Resource = "Resource"),
            (e.Trace = "Trace"),
            (e.Transform = "Transform"),
            (e.User = "User"),
            (e.Wand = "Wand"),
            (e.X11 = "X11");
        })(Ee || (Ee = {})),
        (function (e) {
          (e["Path: /etc/ImageMagick-7/log.xml"] = "Path: /etc/ImageMagick-7/log.xml"),
            (e["Console        Generations     Limit  Format"] = "Console        Generations     Limit  Format"),
            (e["-------------------------------------------------------------------------------"] =
              "-------------------------------------------------------------------------------"),
            (e["Magick-%g.log            3      2000   %t %r %u %v %d %c[%p]: %m/%f/%l/%d\n  %e"] =
              "Magick-%g.log            3      2000   %t %r %u %v %d %c[%p]: %m/%f/%l/%d\n  %e"),
            (e["Path: [built-in]"] = "Path: [built-in]"),
            (e["Magick-%g.log            0         0   %t %r %u %v %d %c[%p]: %m/%f/%l/%d\n  %e"] =
              "Magick-%g.log            0         0   %t %r %u %v %d %c[%p]: %m/%f/%l/%d\n  %e");
        })(ke || (ke = {})),
        (function (e) {
          (e.FillToBorder = "FillToBorder"), (e.Floodfill = "Floodfill"), (e.Point = "Point"), (e.Replace = "Replace"), (e.Reset = "Reset");
        })(Ae || (Ae = {})),
        (function (e) {
          (e.AE = "AE"),
            (e.DSSIM = "DSSIM"),
            (e.Fuzz = "Fuzz"),
            (e.MAE = "MAE"),
            (e.MEPP = "MEPP"),
            (e.MSE = "MSE"),
            (e.NCC = "NCC"),
            (e.PAE = "PAE"),
            (e.PHASH = "PHASH"),
            (e.PSNR = "PSNR"),
            (e.RMSE = "RMSE"),
            (e.SSIM = "SSIM");
        })(Pe || (Pe = {})),
        (function (e) {
          (e.Concatenate = "Concatenate"), (e.Frame = "Frame"), (e.Unframe = "Unframe");
        })(Ce || (Ce = {})),
        (function (e) {
          (e.Correlate = "Correlate"),
            (e.Convolve = "Convolve"),
            (e.Dilate = "Dilate"),
            (e.Erode = "Erode"),
            (e.Close = "Close"),
            (e.Open = "Open"),
            (e.DilateIntensity = "DilateIntensity"),
            (e.ErodeIntensity = "ErodeIntensity"),
            (e.CloseIntensity = "CloseIntensity"),
            (e.OpenIntensity = "OpenIntensity"),
            (e.DilateI = "DilateI"),
            (e.ErodeI = "ErodeI"),
            (e.CloseI = "CloseI"),
            (e.OpenI = "OpenI"),
            (e.Smooth = "Smooth"),
            (e.EdgeOut = "EdgeOut"),
            (e.EdgeIn = "EdgeIn"),
            (e.Edge = "Edge"),
            (e.TopHat = "TopHat"),
            (e.BottomHat = "BottomHat"),
            (e.Hmt = "Hmt"),
            (e.HitNMiss = "HitNMiss"),
            (e.HitAndMiss = "HitAndMiss"),
            (e.Thinning = "Thinning"),
            (e.Thicken = "Thicken"),
            (e.Distance = "Distance"),
            (e.IterativeDistance = "IterativeDistance");
        })(Te || (Te = {})),
        (function (e) {
          (e["Path: /usr/lib/ImageMagick-7.0.8/modules-Q16HDRI/coders"] = "Path: /usr/lib/ImageMagick-7.0.8/modules-Q16HDRI/coders"),
            (e["Image Coder"] = "Image Coder"),
            (e["-------------------------------------------------------------------------------"] =
              "-------------------------------------------------------------------------------"),
            (e.aai = "aai"),
            (e.art = "art"),
            (e.avs = "avs"),
            (e.bgr = "bgr"),
            (e.bmp = "bmp"),
            (e.braille = "braille"),
            (e.cals = "cals"),
            (e.caption = "caption"),
            (e.cin = "cin"),
            (e.cip = "cip"),
            (e.clip = "clip"),
            (e.cmyk = "cmyk"),
            (e.cut = "cut"),
            (e.dcm = "dcm"),
            (e.dds = "dds"),
            (e.debug = "debug"),
            (e.dib = "dib"),
            (e.dng = "dng"),
            (e.dot = "dot"),
            (e.dpx = "dpx"),
            (e.ept = "ept"),
            (e.exr = "exr"),
            (e.fax = "fax"),
            (e.fits = "fits"),
            (e.gif = "gif"),
            (e.gradient = "gradient"),
            (e.gray = "gray"),
            (e.hald = "hald"),
            (e.hdr = "hdr"),
            (e.heic = "heic"),
            (e.histogram = "histogram"),
            (e.hrz = "hrz"),
            (e.html = "html"),
            (e.icon = "icon"),
            (e.info = "info"),
            (e.inline = "inline"),
            (e.ipl = "ipl"),
            (e.jbig = "jbig"),
            (e.jnx = "jnx"),
            (e.jp2 = "jp2"),
            (e.jpeg = "jpeg"),
            (e.json = "json"),
            (e.label = "label"),
            (e.mac = "mac"),
            (e.magick = "magick"),
            (e.map = "map"),
            (e.mask = "mask"),
            (e.mat = "mat"),
            (e.matte = "matte"),
            (e.meta = "meta"),
            (e.miff = "miff"),
            (e.mono = "mono"),
            (e.mpc = "mpc"),
            (e.mpeg = "mpeg"),
            (e.mpr = "mpr"),
            (e.msl = "msl"),
            (e.mtv = "mtv"),
            (e.mvg = "mvg"),
            (e.null = "null"),
            (e.otb = "otb"),
            (e.palm = "palm"),
            (e.pango = "pango"),
            (e.pattern = "pattern"),
            (e.pcd = "pcd"),
            (e.pcl = "pcl"),
            (e.pcx = "pcx"),
            (e.pdb = "pdb"),
            (e.pdf = "pdf"),
            (e.pes = "pes"),
            (e.pgx = "pgx"),
            (e.pict = "pict"),
            (e.pix = "pix"),
            (e.plasma = "plasma"),
            (e.png = "png"),
            (e.pnm = "pnm"),
            (e.ps = "ps"),
            (e.ps2 = "ps2"),
            (e.ps3 = "ps3"),
            (e.psd = "psd"),
            (e.pwp = "pwp"),
            (e.raw = "raw"),
            (e.rgb = "rgb"),
            (e.rgf = "rgf"),
            (e.rla = "rla"),
            (e.rle = "rle"),
            (e.scr = "scr"),
            (e.sct = "sct"),
            (e.sfw = "sfw"),
            (e.sgi = "sgi"),
            (e.sixel = "sixel"),
            (e.stegano = "stegano"),
            (e.sun = "sun"),
            (e.svg = "svg"),
            (e.tga = "tga"),
            (e.thumbnail = "thumbnail"),
            (e.tiff = "tiff"),
            (e.tile = "tile"),
            (e.tim = "tim"),
            (e.ttf = "ttf"),
            (e.txt = "txt"),
            (e.uil = "uil"),
            (e.url = "url"),
            (e.uyvy = "uyvy"),
            (e.vicar = "vicar"),
            (e.vid = "vid"),
            (e.viff = "viff"),
            (e.vips = "vips"),
            (e.wbmp = "wbmp"),
            (e.webp = "webp"),
            (e.wmf = "wmf"),
            (e.wpg = "wpg"),
            (e.x = "x"),
            (e.xbm = "xbm"),
            (e.xc = "xc"),
            (e.xcf = "xcf"),
            (e.xpm = "xpm"),
            (e.xps = "xps"),
            (e.xtrn = "xtrn"),
            (e.xwd = "xwd"),
            (e.ycbcr = "ycbcr"),
            (e.yuv = "yuv"),
            (e["Path: /usr/lib/ImageMagick-7.0.8/modules-Q16HDRI/filters"] = "Path: /usr/lib/ImageMagick-7.0.8/modules-Q16HDRI/filters"),
            (e["Image Filter"] = "Image Filter"),
            (e.analyze = "analyze");
        })(Re || (Re = {})),
        (function (e) {
          (e.Gaussian = "Gaussian"),
            (e.Impulse = "Impulse"),
            (e.Laplacian = "Laplacian"),
            (e.Multiplicative = "Multiplicative"),
            (e.Poisson = "Poisson"),
            (e.Random = "Random"),
            (e.Uniform = "Uniform");
        })(_e || (_e = {})),
        (function (e) {
          (e.TopLeft = "TopLeft"),
            (e.TopRight = "TopRight"),
            (e.BottomRight = "BottomRight"),
            (e.BottomLeft = "BottomLeft"),
            (e.LeftTop = "LeftTop"),
            (e.RightTop = "RightTop"),
            (e.RightBottom = "RightBottom"),
            (e.LeftBottom = "LeftBottom");
        })(Me || (Me = {})),
        (function (e) {
          (e.Undefined = "Undefined"),
            (e.A = "A"),
            (e.Alpha = "Alpha"),
            (e.B = "B"),
            (e.Bk = "Bk"),
            (e.Black = "Black"),
            (e.Blue = "Blue"),
            (e.Cb = "Cb"),
            (e.Composite = "Composite"),
            (e.CompositeMask = "CompositeMask"),
            (e.C = "C"),
            (e.Cr = "Cr"),
            (e.Cyan = "Cyan"),
            (e.Gray = "Gray"),
            (e.G = "G"),
            (e.Green = "Green"),
            (e.Index = "Index"),
            (e.Intensity = "Intensity"),
            (e.K = "K"),
            (e.M = "M"),
            (e.Magenta = "Magenta"),
            (e.Meta = "Meta"),
            (e.O = "O"),
            (e.R = "R"),
            (e.ReadMask = "ReadMask"),
            (e.Red = "Red"),
            (e.Sync = "Sync"),
            (e.WriteMask = "WriteMask"),
            (e.Y = "Y"),
            (e.Yellow = "Yellow");
        })(Ie || (Ie = {})),
        (function (e) {
          (e.Average = "Average"),
            (e.Brightness = "Brightness"),
            (e.Lightness = "Lightness"),
            (e.Mean = "Mean"),
            (e.MS = "MS"),
            (e.Rec601Luma = "Rec601Luma"),
            (e.Rec601Luminance = "Rec601Luminance"),
            (e.Rec709Luma = "Rec709Luma"),
            (e.Rec709Luminance = "Rec709Luminance"),
            (e.RMS = "RMS");
        })(Be || (Be = {})),
        (function (e) {
          (e.R = "R"), (e.Read = "Read"), (e.W = "W"), (e.Write = "Write");
        })(Le || (Le = {})),
        (function (e) {
          (e.Blend = "Blend"), (e.Copy = "Copy"), (e.Update = "Update");
        })(Ue || (Ue = {})),
        (function (e) {
          (e.Cache = "Cache"),
            (e.Coder = "Coder"),
            (e.Delegate = "Delegate"),
            (e.Filter = "Filter"),
            (e.Module = "Module"),
            (e.Path = "Path"),
            (e.Resource = "Resource"),
            (e.System = "System");
        })(Oe || (Oe = {})),
        (function (e) {
          (e.All = "All"), (e.Execute = "Execute"), (e.None = "None"), (e.Read = "Read"), (e.Write = "Write");
        })(ze || (ze = {})),
        (function (e) {
          (e.AddNoise = "AddNoise"),
            (e.Blur = "Blur"),
            (e.Brightness = "Brightness"),
            (e.Charcoal = "Charcoal"),
            (e.Despeckle = "Despeckle"),
            (e.Dull = "Dull"),
            (e.EdgeDetect = "EdgeDetect"),
            (e.Gamma = "Gamma"),
            (e.Grayscale = "Grayscale"),
            (e.Hue = "Hue"),
            (e.Implode = "Implode"),
            (e.JPEG = "JPEG"),
            (e.OilPaint = "OilPaint"),
            (e.Quantize = "Quantize"),
            (e.Raise = "Raise"),
            (e.ReduceNoise = "ReduceNoise"),
            (e.Roll = "Roll"),
            (e.Rotate = "Rotate"),
            (e.Saturation = "Saturation"),
            (e.Segment = "Segment"),
            (e.Shade = "Shade"),
            (e.Sharpen = "Sharpen"),
            (e.Shear = "Shear"),
            (e.Solarize = "Solarize"),
            (e.Spiff = "Spiff"),
            (e.Spread = "Spread"),
            (e.Swirl = "Swirl"),
            (e.Threshold = "Threshold"),
            (e.Wave = "Wave");
        })(De || (De = {})),
        (function (e) {
          (e.Alpha = "Alpha"),
            (e.Arc = "Arc"),
            (e.Bezier = "Bezier"),
            (e.Circle = "Circle"),
            (e.Color = "Color"),
            (e.Ellipse = "Ellipse"),
            (e.Image = "Image"),
            (e.Line = "Line"),
            (e.Matte = "Matte"),
            (e.Path = "Path"),
            (e.Point = "Point"),
            (e.Polygon = "Polygon"),
            (e.Polyline = "Polyline"),
            (e.Rectangle = "Rectangle"),
            (e.RoundRectangle = "RoundRectangle"),
            (e.Text = "Text");
        })(je || (je = {})),
        (function (e) {
          (e.FloatingPoint = "FloatingPoint"), (e.Signed = "Signed"), (e.Unsigned = "Unsigned");
        })(Ve || (Ve = {})),
        (function (e) {
          (e.Barycentric = "Barycentric"),
            (e.Bilinear = "Bilinear"),
            (e.Inverse = "Inverse"),
            (e.Shepards = "Shepards"),
            (e.Voronoi = "Voronoi"),
            (e.Manhattan = "Manhattan");
        })(He || (He = {})),
        (function (e) {
          (e.Gradient = "Gradient"),
            (e.Maximum = "Maximum"),
            (e.Mean = "Mean"),
            (e.Median = "Median"),
            (e.Minimum = "Minimum"),
            (e.Mode = "Mode"),
            (e.NonPeak = "NonPeak"),
            (e.RootMeanSquare = "RootMeanSquare"),
            (e.RMS = "RMS"),
            (e.StandardDeviation = "StandardDeviation");
        })(qe || (qe = {})),
        (function (e) {
          (e.Char = "Char"),
            (e.Double = "Double"),
            (e.Float = "Float"),
            (e.Long = "Long"),
            (e.LongLong = "LongLong"),
            (e.Quantum = "Quantum"),
            (e.Short = "Short");
        })(Ne || (Ne = {})),
        (function (e) {
          (e.Any = "Any"),
            (e.Condensed = "Condensed"),
            (e.Expanded = "Expanded"),
            (e.ExtraCondensed = "ExtraCondensed"),
            (e.ExtraExpanded = "ExtraExpanded"),
            (e.Normal = "Normal"),
            (e.SemiCondensed = "SemiCondensed"),
            (e.SemiExpanded = "SemiExpanded"),
            (e.UltraCondensed = "UltraCondensed"),
            (e.UltraExpanded = "UltraExpanded");
        })(Fe || (Fe = {})),
        (function (e) {
          (e.Any = "Any"), (e.Bold = "Bold"), (e.Italic = "Italic"), (e.Normal = "Normal"), (e.Oblique = "Oblique");
        })(Ge || (Ge = {})),
        (function (e) {
          (e.animate = "animate"),
            (e.compare = "compare"),
            (e.composite = "composite"),
            (e.conjure = "conjure"),
            (e.convert = "convert"),
            (e.display = "display"),
            (e.identify = "identify"),
            (e.import = "import"),
            (e.mogrify = "mogrify"),
            (e.montage = "montage"),
            (e.stream = "stream");
        })(We || (We = {})),
        (function (e) {
          (e.Bilevel = "Bilevel"),
            (e.ColorSeparation = "ColorSeparation"),
            (e.ColorSeparationAlpha = "ColorSeparationAlpha"),
            (e.ColorSeparationMatte = "ColorSeparationMatte"),
            (e.Grayscale = "Grayscale"),
            (e.GrayscaleAlpha = "GrayscaleAlpha"),
            (e.GrayscaleMatte = "GrayscaleMatte"),
            (e.Optimize = "Optimize"),
            (e.Palette = "Palette"),
            (e.PaletteBilevelAlpha = "PaletteBilevelAlpha"),
            (e.PaletteBilevelMatte = "PaletteBilevelMatte"),
            (e.PaletteAlpha = "PaletteAlpha"),
            (e.PaletteMatte = "PaletteMatte"),
            (e.TrueColorAlpha = "TrueColorAlpha"),
            (e.TrueColorMatte = "TrueColorMatte"),
            (e.TrueColor = "TrueColor");
        })(Ye || (Ye = {})),
        (function (e) {
          (e.PixelsPerInch = "PixelsPerInch"),
            (e.PixelsPerCentimeter = "PixelsPerCentimeter"),
            (e["1_"] = "1"),
            (e["2_"] = "2"),
            (e["3_"] = "3");
        })(Je || (Je = {})),
        (function (e) {
          (e.All = "All"),
            (e.Colorspace = "Colorspace"),
            (e.Compare = "Compare"),
            (e.Composite = "Composite"),
            (e.Convert = "Convert"),
            (e.FormatsDisk = "FormatsDisk"),
            (e.FormatsMap = "FormatsMap"),
            (e.FormatsMemory = "FormatsMemory"),
            (e.Identify = "Identify"),
            (e.ImportExport = "ImportExport"),
            (e.Montage = "Montage"),
            (e.Stream = "Stream"),
            (e.None = "None");
        })(Ke || (Ke = {})),
        (function (e) {
          (e.Background = "Background"),
            (e.Black = "Black"),
            (e.CheckerTile = "CheckerTile"),
            (e.Dither = "Dither"),
            (e.Edge = "Edge"),
            (e.Gray = "Gray"),
            (e.HorizontalTile = "HorizontalTile"),
            (e.HorizontalTileEdge = "HorizontalTileEdge"),
            (e.Mirror = "Mirror"),
            (e.None = "None"),
            (e.Random = "Random"),
            (e.Tile = "Tile"),
            (e.Transparent = "Transparent"),
            (e.VerticalTile = "VerticalTile"),
            (e.VerticalTileEdge = "VerticalTileEdge"),
            (e.White = "White");
        })(Ze || (Ze = {})),
        (function (e) {
          (e.Thin = "Thin"),
            (e.ExtraLight = "ExtraLight"),
            (e.UltraLight = "UltraLight"),
            (e.Normal = "Normal"),
            (e.Regular = "Regular"),
            (e.Medium = "Medium"),
            (e.DemiBold = "DemiBold"),
            (e.SemiBold = "SemiBold"),
            (e.Bold = "Bold"),
            (e.ExtraBold = "ExtraBold"),
            (e.UltraBold = "UltraBold"),
            (e.Heavy = "Heavy"),
            (e.Black = "Black");
        })(Xe || (Xe = {}));
      r(31);
      class tt {
        constructor(e) {}
        initialise() {}
        async captureAreaAsimage(e, t) {
          return new Promise((t, r) => {
            chrome.tabs.captureVisibleTab(
              null,
              { format: "png", quality: 100 },
              async function (r) {
                let n = await this.improveImage(e, r);
                t(n);
              }.bind(this)
            );
          });
        }
        async blobToDataURL(e) {
          return new Promise((t, r) => {
            var n = new FileReader();
            n.readAsDataURL(e),
              (n.onloadend = function () {
                var e = "data:image/png;base64," + n.result.replace(/^data:.+;base64,/, "");
                t(e);
              });
          });
        }
        async improveImage(e, t) {
          let r = e.ratio,
            n = (e.y - e.pageYOffset) * r,
            i = (e.x - e.pageXOffset) * r,
            o = e.width * r + "x" + e.height * r + "+" + i + "+" + n;
          const { outputFiles: s, exitCode: a } = await O({
            inputFiles: [await x(t, "image1.png")],
            commands: [
              "convert -crop " + o + " image1.png image2.png",
              "convert image2.png -adaptive-resize 100% -colorspace Lab -units PixelsPerInch -density 300  image3.png",
              "convert image3.png -unsharp 0.5x0.5+0.5+0.008 image4.png",
              "convert -units PixelsPerInch -density 300 -resize 200% -colorspace gray -type grayscale -contrast-stretch 0 -filter spline -unsharp 0x1 image2.png image3.png",
              "convert image4.png -write MPR:source -morphology close rectangle:1x2 -morphology erode square MPR:source -compose Lighten -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite -morphology erode square MPR:source -composite image5.png"
            ]
          });
          return (
            0 !== a &&
              (await (function (e, t, r) {
                return (
                  void 0 === r && (r = !1),
                  h(this, void 0, void 0, function () {
                    var n;
                    return f(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (n = t), [4, C(e, r)];
                        case 1:
                          return (n.src = i.sent()), [2];
                      }
                    });
                  })
                );
              })(s[0], document.getElementById("outputImage"))),
            {
              imageToOCR: await this.blobToDataURL(s[s.length - 1].blob),
              imageToDisplay: await this.blobToDataURL(s[0].blob),
              imageFullScreen: t
            }
          );
        }
      }
      new tt().initialise();
      new (class {
        constructor(e) {}
        initialise() {
          chrome.runtime.onMessage.addListener(this.onMessage.bind(this)),
            chrome.runtime.onMessageExternal.addListener(this.onMessage.bind(this)),
            chrome.browserAction.onClicked.addListener(this.onBrowserAction.bind(this)),
            (this._imageProcessor = new tt()),
            (this._ocrProcessor = new c()),
            (this.speechEvents = i()()),
            (this._speechManager = null),
            (this._speechManager = new s.a()),
            this._speechManager.initialise(this.speechEvents),
            this.speechEvents.sub(this._onPubSubEvent.bind(this)),
            (this.ssrData = null),
            (this.ocrRequest = null),
            (this.regionIndex = 0),
            (this.sentenceIndex = 0),
            this.getVoices();
        }
        onBrowserAction(e) {
          var t = { command: "TH_SSR_Start_Capture", voice: "Ava?", speed: "50" };
          chrome.tabs.getSelected(null, (e) => {
            chrome.tabs.sendRequest(e.id, t, function () {});
          });
        }
        getVoices() {
          setTimeout(() => {
            var e = { method: "getVoices", type: "SP_M_1342_CK" };
            this.speechEvents.pub("getVoices", e);
          }, 1e3);
        }
        async onMessage(e, t, r) {
          switch (e.command) {
            case "TH_rectToOCR_SSR":
              let i = { request: e, sender: t, sendResponse: r };
              this.onCaptureRequest(i);
              break;
            case "TH_start_SSR":
            case "startScreenShotReader":
              chrome.tabs.getSelected(null, function (t) {
                chrome.tabs.sendRequest(t.id, e, function (e) {});
              });
              break;
            case "TH_externalOCR_SSR":
            case "externalOCR":
              var n = t.id;
              this.doOCR(e, n, r);
              break;
            case "TH_Stop_SSR":
            case "stop":
              this.stop();
              break;
            case "pause":
              this.pause();
              break;
            case "TH_Play_Again_SSR":
              this.playAgain();
          }
        }
        async doOCR(e, t, r) {
          let n = { imageToOCR: e.image };
          var i = (n = await this._ocrProcessor.ocrImage(n)).ocr.blocks[0].paragraphs,
            o = { command: "onocr", data: this.convertOCRparagraphresult(i) };
          null == t ? r(o) : chrome.runtime.sendMessage(t.toString(), o);
        }
        async onCaptureRequest(e) {
          let t = {};
          (t = await this._imageProcessor.captureAreaAsimage(e.request.rectToOCR, t)),
            (t = await this._ocrProcessor.ocrImage(t)).ocr.words,
            t.ocr.blocks[0].paragraphs[0].words;
          var r,
            n = t.ocr.blocks[0].paragraphs;
          r = this.convertOCRparagraphresult(n);
          var i = { command: "TH_onOCR_SSR", text: t.ocr.text, data: r, image: t.imageToDisplay, points: e.request.rectToOCR, orgin: e };
          chrome.tabs.sendRequest(e.sender.tab.id, i, function () {}),
            (this.regionIndex = 0),
            (this.sentenceIndex = 0),
            (this.ssrData = JSON.parse(r)),
            (this.ocrRequest = e),
            this.play(this.ssrData[0][0].words, e.request.rectToOCR.speechSettings.voice, e.request.rectToOCR.speechSettings.speed);
        }
        onWord(e) {
          var t = { command: "TH_onWord_SSR", data: { word: e.word, regionIndex: this.regionIndex, sentenceIndex: this.sentenceIndex } };
          chrome.tabs.getSelected(null, function (e) {
            chrome.tabs.sendRequest(e.id, t, function () {});
          });
        }
        onStop(e) {
          var t = { command: "TH_onStop_SSR", data: {} };
          chrome.tabs.getSelected(null, function (e) {
            chrome.tabs.sendRequest(e.id, t, function () {});
          });
        }
        play(e, t, r) {
          var n = 0,
            i = [];
          for (n = 0; n < e.length; n++) i.push(e[n].text);
          var o = { method: "play", type: "SP_M_1342_CK" };
          (o.words = i),
            (o.origin = "ca753d9d-f8c8-47dd-bd00-8033cd620939"),
            (o.voice = t),
            (o.speed = r),
            this.speechEvents.pub("play", o);
        }
        stop() {
          var e = { method: "stop", type: "SP_M_1342_CK", origin: "ca753d9d-f8c8-47dd-bd00-8033cd620939" };
          this.speechEvents.pub("stop", e);
        }
        pause() {
          var e = { method: "stop", type: "SP_M_1342_CK", origin: "ca753d9d-f8c8-47dd-bd00-8033cd620939" };
          this.speechEvents.pub("pause", e);
        }
        playAgain() {
          (this.regionIndex = 0),
            (this.sentenceIndex = 0),
            this.play(
              this.ssrData[this.regionIndex][this.sentenceIndex].words,
              this.ocrRequest.request.rectToOCR.speechSettings.voice,
              this.ocrRequest.request.rectToOCR.speechSettings.speed
            );
        }
        arrayContains(e, t) {
          for (var r = e.length; r--; ) if (e[r] === t) return !0;
          return !1;
        }
        encodeChars(e) {
          try {
            for (var t = { 8217: "'", 96: "'", 8482: " ", 8212: " " }, r = "", n = "", i = 0; i < e.length; i++)
              r += void 0 === t[(n = e.charCodeAt(i).toString())] ? e.charAt(i) : t[n];
            return r;
          } catch (e) {
            console.log(e);
          }
        }
        checkIfEndOfSentence(e) {
          try {
            return (
              !this.arrayContains(
                [
                  "Dr.",
                  "Mr.",
                  "Mrs.",
                  "i.e.",
                  "e.g.",
                  "St.",
                  "N.B.",
                  "NB.",
                  "Ltd.",
                  "plc.",
                  "U.S.",
                  "a.m.",
                  "p.m.",
                  "ext.",
                  "vs.",
                  "Jan.",
                  "Feb.",
                  "Mar.",
                  "Apr.",
                  "Jun.",
                  "Jul.",
                  "Aug.",
                  "Sep.",
                  "Oct.",
                  "Nov.",
                  "Dec.",
                  "N.E.",
                  "S.E.",
                  "S.W.",
                  "N.W."
                ],
                e.trim()
              ) && -1 != e.trim().search("[.?!]$")
            );
          } catch (e) {
            console.log(e);
          }
        }
        _onPubSubEvent(e, t) {
          try {
            if (void 0 !== e && ("onthAPIWord" == e && this.onWord(t), "onthAPIWordonthAPIStop" == e)) {
              if (this.sentenceIndex < this.ssrData[this.regionIndex].length - 1)
                return (
                  this.sentenceIndex++,
                  void this.play(
                    this.ssrData[this.regionIndex][this.sentenceIndex].words,
                    this.ocrRequest.request.rectToOCR.speechSettings.voice,
                    this.ocrRequest.request.rectToOCR.speechSettings.speed
                  )
                );
              if (this.regionIndex < this.ssrData.length - 1) return (this.sentenceIndex = 0), void this.regionIndex++;
              this.onStop(t);
            }
          } catch (e) {
            console.log(e);
          }
        }
        convertOCRparagraphresult(e) {
          var t = 0,
            r = 0,
            n = 0,
            i = 0,
            o = null,
            s = { words: [], bookmarkedText: "" },
            a = 0,
            c = [];
          for (c.push(new Object()), c[0] = [], t = 0; t < e.length; t++) {
            var u;
            e[t];
            var l = [];
            for (u = 0; u < e[t].lines.length; ++u) l.push(e[t].lines[u].words);
            for (
              l = l.reduce(function (e, t) {
                return e.concat(t);
              }, []),
                r = 0;
              r < l.length;
              r++
            ) {
              (o = new Object()), (n = l[r].bbox.y0), (i = l[r].bbox.x0);
              var h = new Object();
              (h.bottom = i),
                (h.top = n),
                (h.left = l[r].bbox.x1 - l[r].bbox.x0),
                (h.right = l[r].bbox.y1 - l[r].bbox.y0),
                (o.text = l[r].text),
                (o.rects = []),
                o.rects.push(h),
                s.words.push(o),
                0 == r && s.length,
                o.text,
                (s.bookmarkedText += "<bookmark mark='" + a + "'/>" + this.encodeChars(o.text)),
                a++,
                r == l.length - 1 &&
                  ((s.bookmarkedText += "<bookmark mark='" + a + "'/>"),
                  c[0].push(s),
                  ((s = {}).words = []),
                  (s.bookmarkedText = ""),
                  (a = 0)),
                this.checkIfEndOfSentence(o.text) &&
                  ((s.bookmarkedText += "<bookmark mark='" + a + "'/>"),
                  c[0].push(s),
                  ((s = {}).words = []),
                  (s.bookmarkedText = ""),
                  (a = 0));
            }
          }
          return (
            s.words.length > 0 &&
              ((s.bookmarkedText += "<bookmark mark='" + a + "'/>"), c[0].push(s), ((s = {}).words = []), (s.bookmarkedText = ""), (a = 0)),
            JSON.stringify(c)
          );
        }
      })().initialise();
    }
  ]);
});
