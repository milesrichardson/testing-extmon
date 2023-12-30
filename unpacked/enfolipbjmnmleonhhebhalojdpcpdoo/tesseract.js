!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Tesseract = e())
    : (t.Tesseract = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if ((r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
          for (var n in t)
            r.d(
              i,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return i;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 5))
    );
  })([
    function (t, e, r) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var i = r(15),
          n = r(16),
          s = r(17);
        function o() {
          return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (o() < e) throw new RangeError("Invalid typed array length");
          return (
            f.TYPED_ARRAY_SUPPORT ? ((t = new Uint8Array(e)).__proto__ = f.prototype) : (null === t && (t = new f(e)), (t.length = e)), t
          );
        }
        function f(t, e, r) {
          if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, e, r);
          if ("number" == typeof t) {
            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
            return c(this, t);
          }
          return h(this, t, e, r);
        }
        function h(t, e, r, i) {
          if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, r, i) {
                if ((e.byteLength, r < 0 || e.byteLength < r)) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (i || 0)) throw new RangeError("'length' is out of bounds");
                e = void 0 === r && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, r) : new Uint8Array(e, r, i);
                f.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = f.prototype) : (t = l(t, e));
                return t;
              })(t, e, r, i)
            : "string" == typeof e
            ? (function (t, e, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!f.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | d(e, r),
                  n = (t = a(t, i)).write(e, r);
                n !== i && (t = t.slice(0, n));
                return t;
              })(t, e, r)
            : (function (t, e) {
                if (f.isBuffer(e)) {
                  var r = 0 | p(e.length);
                  return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
                }
                if (e) {
                  if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e)
                    return "number" != typeof e.length || (i = e.length) != i ? a(t, 0) : l(t, e);
                  if ("Buffer" === e.type && s(e.data)) return l(t, e.data);
                }
                var i;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              })(t, e);
        }
        function u(t) {
          if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
          if (t < 0) throw new RangeError('"size" argument must not be negative');
        }
        function c(t, e) {
          if ((u(e), (t = a(t, e < 0 ? 0 : 0 | p(e))), !f.TYPED_ARRAY_SUPPORT)) for (var r = 0; r < e; ++r) t[r] = 0;
          return t;
        }
        function l(t, e) {
          var r = e.length < 0 ? 0 : 0 | p(e.length);
          t = a(t, r);
          for (var i = 0; i < r; i += 1) t[i] = 255 & e[i];
          return t;
        }
        function p(t) {
          if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
          return 0 | t;
        }
        function d(t, e) {
          if (f.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var r = t.length;
          if (0 === r) return 0;
          for (var i = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
              case void 0:
                return N(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return D(t).length;
              default:
                if (i) return N(t).length;
                (e = ("" + e).toLowerCase()), (i = !0);
            }
        }
        function m(t, e, r) {
          var i = t[e];
          (t[e] = t[r]), (t[r] = i);
        }
        function g(t, e, r, i, n) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r ? ((i = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = n ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          ) {
            if (n) return -1;
            r = t.length - 1;
          } else if (r < 0) {
            if (!n) return -1;
            r = 0;
          }
          if (("string" == typeof e && (e = f.from(e, i)), f.isBuffer(e))) return 0 === e.length ? -1 : y(t, e, r, i, n);
          if ("number" == typeof e)
            return (
              (e &= 255),
              f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
                ? n
                  ? Uint8Array.prototype.indexOf.call(t, e, r)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                : y(t, [e], r, i, n)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function y(t, e, r, i, n) {
          var s,
            o = 1,
            a = t.length,
            f = e.length;
          if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
            if (t.length < 2 || e.length < 2) return -1;
            (o = 2), (a /= 2), (f /= 2), (r /= 2);
          }
          function h(t, e) {
            return 1 === o ? t[e] : t.readUInt16BE(e * o);
          }
          if (n) {
            var u = -1;
            for (s = r; s < a; s++)
              if (h(t, s) === h(e, -1 === u ? 0 : s - u)) {
                if ((-1 === u && (u = s), s - u + 1 === f)) return u * o;
              } else -1 !== u && (s -= s - u), (u = -1);
          } else
            for (r + f > a && (r = a - f), s = r; s >= 0; s--) {
              for (var c = !0, l = 0; l < f; l++)
                if (h(t, s + l) !== h(e, l)) {
                  c = !1;
                  break;
                }
              if (c) return s;
            }
          return -1;
        }
        function b(t, e, r, i) {
          r = Number(r) || 0;
          var n = t.length - r;
          i ? (i = Number(i)) > n && (i = n) : (i = n);
          var s = e.length;
          if (s % 2 != 0) throw new TypeError("Invalid hex string");
          i > s / 2 && (i = s / 2);
          for (var o = 0; o < i; ++o) {
            var a = parseInt(e.substr(2 * o, 2), 16);
            if (isNaN(a)) return o;
            t[r + o] = a;
          }
          return o;
        }
        function w(t, e, r, i) {
          return q(N(e, t.length - r), t, r, i);
        }
        function v(t, e, r, i) {
          return q(
            (function (t) {
              for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
              return e;
            })(e),
            t,
            r,
            i
          );
        }
        function x(t, e, r, i) {
          return v(t, e, r, i);
        }
        function A(t, e, r, i) {
          return q(D(e), t, r, i);
        }
        function E(t, e, r, i) {
          return q(
            (function (t, e) {
              for (var r, i, n, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
                (r = t.charCodeAt(o)), (i = r >> 8), (n = r % 256), s.push(n), s.push(i);
              return s;
            })(e, t.length - r),
            t,
            r,
            i
          );
        }
        function k(t, e, r) {
          return 0 === e && r === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, r));
        }
        function U(t, e, r) {
          r = Math.min(t.length, r);
          for (var i = [], n = e; n < r; ) {
            var s,
              o,
              a,
              f,
              h = t[n],
              u = null,
              c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
            if (n + c <= r)
              switch (c) {
                case 1:
                  h < 128 && (u = h);
                  break;
                case 2:
                  128 == (192 & (s = t[n + 1])) && (f = ((31 & h) << 6) | (63 & s)) > 127 && (u = f);
                  break;
                case 3:
                  (s = t[n + 1]),
                    (o = t[n + 2]),
                    128 == (192 & s) &&
                      128 == (192 & o) &&
                      (f = ((15 & h) << 12) | ((63 & s) << 6) | (63 & o)) > 2047 &&
                      (f < 55296 || f > 57343) &&
                      (u = f);
                  break;
                case 4:
                  (s = t[n + 1]),
                    (o = t[n + 2]),
                    (a = t[n + 3]),
                    128 == (192 & s) &&
                      128 == (192 & o) &&
                      128 == (192 & a) &&
                      (f = ((15 & h) << 18) | ((63 & s) << 12) | ((63 & o) << 6) | (63 & a)) > 65535 &&
                      f < 1114112 &&
                      (u = f);
              }
            null === u
              ? ((u = 65533), (c = 1))
              : u > 65535 && ((u -= 65536), i.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (1023 & u))),
              i.push(u),
              (n += c);
          }
          return (function (t) {
            var e = t.length;
            if (e <= _) return String.fromCharCode.apply(String, t);
            var r = "",
              i = 0;
            for (; i < e; ) r += String.fromCharCode.apply(String, t.slice(i, (i += _)));
            return r;
          })(i);
        }
        (e.Buffer = f),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return f.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (f.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        }
                      }),
                      42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = o()),
          (f.poolSize = 8192),
          (f._augment = function (t) {
            return (t.__proto__ = f.prototype), t;
          }),
          (f.from = function (t, e, r) {
            return h(null, t, e, r);
          }),
          f.TYPED_ARRAY_SUPPORT &&
            ((f.prototype.__proto__ = Uint8Array.prototype),
            (f.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              f[Symbol.species] === f &&
              Object.defineProperty(f, Symbol.species, { value: null, configurable: !0 })),
          (f.alloc = function (t, e, r) {
            return (function (t, e, r, i) {
              return u(e), e <= 0 ? a(t, e) : void 0 !== r ? ("string" == typeof i ? a(t, e).fill(r, i) : a(t, e).fill(r)) : a(t, e);
            })(null, t, e, r);
          }),
          (f.allocUnsafe = function (t) {
            return c(null, t);
          }),
          (f.allocUnsafeSlow = function (t) {
            return c(null, t);
          }),
          (f.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (f.compare = function (t, e) {
            if (!f.isBuffer(t) || !f.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var r = t.length, i = e.length, n = 0, s = Math.min(r, i); n < s; ++n)
              if (t[n] !== e[n]) {
                (r = t[n]), (i = e[n]);
                break;
              }
            return r < i ? -1 : i < r ? 1 : 0;
          }),
          (f.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
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
          (f.concat = function (t, e) {
            if (!s(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return f.alloc(0);
            var r;
            if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var i = f.allocUnsafe(e),
              n = 0;
            for (r = 0; r < t.length; ++r) {
              var o = t[r];
              if (!f.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
              o.copy(i, n), (n += o.length);
            }
            return i;
          }),
          (f.byteLength = d),
          (f.prototype._isBuffer = !0),
          (f.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this;
          }),
          (f.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
            return this;
          }),
          (f.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
            return this;
          }),
          (f.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? U(this, 0, t)
              : function (t, e, r) {
                  var i = !1;
                  if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
                  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                  if ((r >>>= 0) <= (e >>>= 0)) return "";
                  for (t || (t = "utf8"); ; )
                    switch (t) {
                      case "hex":
                        return P(this, e, r);
                      case "utf8":
                      case "utf-8":
                        return U(this, e, r);
                      case "ascii":
                        return I(this, e, r);
                      case "latin1":
                      case "binary":
                        return T(this, e, r);
                      case "base64":
                        return k(this, e, r);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return S(this, e, r);
                      default:
                        if (i) throw new TypeError("Unknown encoding: " + t);
                        (t = (t + "").toLowerCase()), (i = !0);
                    }
                }.apply(this, arguments);
          }),
          (f.prototype.equals = function (t) {
            if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === f.compare(this, t);
          }),
          (f.prototype.inspect = function () {
            var t = "",
              r = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 && ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")), this.length > r && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (f.prototype.compare = function (t, e, r, i, n) {
            if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === i && (i = 0),
              void 0 === n && (n = this.length),
              e < 0 || r > t.length || i < 0 || n > this.length)
            )
              throw new RangeError("out of range index");
            if (i >= n && e >= r) return 0;
            if (i >= n) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            for (
              var s = (n >>>= 0) - (i >>>= 0),
                o = (r >>>= 0) - (e >>>= 0),
                a = Math.min(s, o),
                h = this.slice(i, n),
                u = t.slice(e, r),
                c = 0;
              c < a;
              ++c
            )
              if (h[c] !== u[c]) {
                (s = h[c]), (o = u[c]);
                break;
              }
            return s < o ? -1 : o < s ? 1 : 0;
          }),
          (f.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r);
          }),
          (f.prototype.indexOf = function (t, e, r) {
            return g(this, t, e, r, !0);
          }),
          (f.prototype.lastIndexOf = function (t, e, r) {
            return g(this, t, e, r, !1);
          }),
          (f.prototype.write = function (t, e, r, i) {
            if (void 0 === e) (i = "utf8"), (r = this.length), (e = 0);
            else if (void 0 === r && "string" == typeof e) (i = e), (r = this.length), (e = 0);
            else {
              if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              (e |= 0), isFinite(r) ? ((r |= 0), void 0 === i && (i = "utf8")) : ((i = r), (r = void 0));
            }
            var n = this.length - e;
            if (((void 0 === r || r > n) && (r = n), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
              throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var s = !1; ; )
              switch (i) {
                case "hex":
                  return b(this, t, e, r);
                case "utf8":
                case "utf-8":
                  return w(this, t, e, r);
                case "ascii":
                  return v(this, t, e, r);
                case "latin1":
                case "binary":
                  return x(this, t, e, r);
                case "base64":
                  return A(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, t, e, r);
                default:
                  if (s) throw new TypeError("Unknown encoding: " + i);
                  (i = ("" + i).toLowerCase()), (s = !0);
              }
          }),
          (f.prototype.toJSON = function () {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        var _ = 4096;
        function I(t, e, r) {
          var i = "";
          r = Math.min(t.length, r);
          for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
          return i;
        }
        function T(t, e, r) {
          var i = "";
          r = Math.min(t.length, r);
          for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
          return i;
        }
        function P(t, e, r) {
          var i = t.length;
          (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
          for (var n = "", s = e; s < r; ++s) n += Y(t[s]);
          return n;
        }
        function S(t, e, r) {
          for (var i = t.slice(e, r), n = "", s = 0; s < i.length; s += 2) n += String.fromCharCode(i[s] + 256 * i[s + 1]);
          return n;
        }
        function B(t, e, r) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
        }
        function R(t, e, r, i, n, s) {
          if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > n || e < s) throw new RangeError('"value" argument is out of bounds');
          if (r + i > t.length) throw new RangeError("Index out of range");
        }
        function j(t, e, r, i) {
          e < 0 && (e = 65535 + e + 1);
          for (var n = 0, s = Math.min(t.length - r, 2); n < s; ++n)
            t[r + n] = (e & (255 << (8 * (i ? n : 1 - n)))) >>> (8 * (i ? n : 1 - n));
        }
        function L(t, e, r, i) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var n = 0, s = Math.min(t.length - r, 4); n < s; ++n) t[r + n] = (e >>> (8 * (i ? n : 3 - n))) & 255;
        }
        function O(t, e, r, i, n, s) {
          if (r + i > t.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function C(t, e, r, i, s) {
          return s || O(t, 0, r, 4), n.write(t, e, r, i, 23, 4), r + 4;
        }
        function M(t, e, r, i, s) {
          return s || O(t, 0, r, 8), n.write(t, e, r, i, 52, 8), r + 8;
        }
        (f.prototype.slice = function (t, e) {
          var r,
            i = this.length;
          if (
            ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
            (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
            e < t && (e = t),
            f.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(t, e)).__proto__ = f.prototype;
          else {
            var n = e - t;
            r = new f(n, void 0);
            for (var s = 0; s < n; ++s) r[s] = this[s + t];
          }
          return r;
        }),
          (f.prototype.readUIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || B(t, e, this.length);
            for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256); ) i += this[t + s] * n;
            return i;
          }),
          (f.prototype.readUIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || B(t, e, this.length);
            for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); ) i += this[t + --e] * n;
            return i;
          }),
          (f.prototype.readUInt8 = function (t, e) {
            return e || B(t, 1, this.length), this[t];
          }),
          (f.prototype.readUInt16LE = function (t, e) {
            return e || B(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (f.prototype.readUInt16BE = function (t, e) {
            return e || B(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (f.prototype.readUInt32LE = function (t, e) {
            return e || B(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
          }),
          (f.prototype.readUInt32BE = function (t, e) {
            return e || B(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
          }),
          (f.prototype.readIntLE = function (t, e, r) {
            (t |= 0), (e |= 0), r || B(t, e, this.length);
            for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256); ) i += this[t + s] * n;
            return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }),
          (f.prototype.readIntBE = function (t, e, r) {
            (t |= 0), (e |= 0), r || B(t, e, this.length);
            for (var i = e, n = 1, s = this[t + --i]; i > 0 && (n *= 256); ) s += this[t + --i] * n;
            return s >= (n *= 128) && (s -= Math.pow(2, 8 * e)), s;
          }),
          (f.prototype.readInt8 = function (t, e) {
            return e || B(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
          }),
          (f.prototype.readInt16LE = function (t, e) {
            e || B(t, 2, this.length);
            var r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt16BE = function (t, e) {
            e || B(t, 2, this.length);
            var r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt32LE = function (t, e) {
            return e || B(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
          }),
          (f.prototype.readInt32BE = function (t, e) {
            return e || B(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
          }),
          (f.prototype.readFloatLE = function (t, e) {
            return e || B(t, 4, this.length), n.read(this, t, !0, 23, 4);
          }),
          (f.prototype.readFloatBE = function (t, e) {
            return e || B(t, 4, this.length), n.read(this, t, !1, 23, 4);
          }),
          (f.prototype.readDoubleLE = function (t, e) {
            return e || B(t, 8, this.length), n.read(this, t, !0, 52, 8);
          }),
          (f.prototype.readDoubleBE = function (t, e) {
            return e || B(t, 8, this.length), n.read(this, t, !1, 52, 8);
          }),
          (f.prototype.writeUIntLE = function (t, e, r, i) {
            ((t = +t), (e |= 0), (r |= 0), i) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var n = 1,
              s = 0;
            for (this[e] = 255 & t; ++s < r && (n *= 256); ) this[e + s] = (t / n) & 255;
            return e + r;
          }),
          (f.prototype.writeUIntBE = function (t, e, r, i) {
            ((t = +t), (e |= 0), (r |= 0), i) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var n = r - 1,
              s = 1;
            for (this[e + n] = 255 & t; --n >= 0 && (s *= 256); ) this[e + n] = (t / s) & 255;
            return e + r;
          }),
          (f.prototype.writeUInt8 = function (t, e, r) {
            return (
              (t = +t), (e |= 0), r || R(this, t, e, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), (this[e] = 255 & t), e + 1
            );
          }),
          (f.prototype.writeUInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 2, 65535, 0),
              f.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : j(this, t, e, !0),
              e + 2
            );
          }),
          (f.prototype.writeUInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 2, 65535, 0),
              f.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : j(this, t, e, !1),
              e + 2
            );
          }),
          (f.prototype.writeUInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 4, 4294967295, 0),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (f.prototype.writeUInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 4, 4294967295, 0),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (f.prototype.writeIntLE = function (t, e, r, i) {
            if (((t = +t), (e |= 0), !i)) {
              var n = Math.pow(2, 8 * r - 1);
              R(this, t, e, r, n - 1, -n);
            }
            var s = 0,
              o = 1,
              a = 0;
            for (this[e] = 255 & t; ++s < r && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), (this[e + s] = (((t / o) >> 0) - a) & 255);
            return e + r;
          }),
          (f.prototype.writeIntBE = function (t, e, r, i) {
            if (((t = +t), (e |= 0), !i)) {
              var n = Math.pow(2, 8 * r - 1);
              R(this, t, e, r, n - 1, -n);
            }
            var s = r - 1,
              o = 1,
              a = 0;
            for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), (this[e + s] = (((t / o) >> 0) - a) & 255);
            return e + r;
          }),
          (f.prototype.writeInt8 = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 1, 127, -128),
              f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (f.prototype.writeInt16LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 2, 32767, -32768),
              f.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : j(this, t, e, !0),
              e + 2
            );
          }),
          (f.prototype.writeInt16BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 2, 32767, -32768),
              f.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : j(this, t, e, !1),
              e + 2
            );
          }),
          (f.prototype.writeInt32LE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 4, 2147483647, -2147483648),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (f.prototype.writeInt32BE = function (t, e, r) {
            return (
              (t = +t),
              (e |= 0),
              r || R(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              f.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (f.prototype.writeFloatLE = function (t, e, r) {
            return C(this, t, e, !0, r);
          }),
          (f.prototype.writeFloatBE = function (t, e, r) {
            return C(this, t, e, !1, r);
          }),
          (f.prototype.writeDoubleLE = function (t, e, r) {
            return M(this, t, e, !0, r);
          }),
          (f.prototype.writeDoubleBE = function (t, e, r) {
            return M(this, t, e, !1, r);
          }),
          (f.prototype.copy = function (t, e, r, i) {
            if (
              (r || (r = 0),
              i || 0 === i || (i = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              i > 0 && i < r && (i = r),
              i === r)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
            var n,
              s = i - r;
            if (this === t && r < e && e < i) for (n = s - 1; n >= 0; --n) t[n + e] = this[n + r];
            else if (s < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (n = 0; n < s; ++n) t[n + e] = this[n + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
            return s;
          }),
          (f.prototype.fill = function (t, e, r, i) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e ? ((i = e), (e = 0), (r = this.length)) : "string" == typeof r && ((i = r), (r = this.length)),
                1 === t.length)
              ) {
                var n = t.charCodeAt(0);
                n < 256 && (t = n);
              }
              if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
              if ("string" == typeof i && !f.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
            if (r <= e) return this;
            var s;
            if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t))
              for (s = e; s < r; ++s) this[s] = t;
            else {
              var o = f.isBuffer(t) ? t : N(new f(t, i).toString()),
                a = o.length;
              for (s = 0; s < r - e; ++s) this[s + e] = o[s % a];
            }
            return this;
          });
        var z = /[^+\/0-9A-Za-z-_]/g;
        function Y(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function N(t, e) {
          var r;
          e = e || 1 / 0;
          for (var i = t.length, n = null, s = [], o = 0; o < i; ++o) {
            if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
              if (!n) {
                if (r > 56319) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                if (o + 1 === i) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                n = r;
                continue;
              }
              if (r < 56320) {
                (e -= 3) > -1 && s.push(239, 191, 189), (n = r);
                continue;
              }
              r = 65536 + (((n - 55296) << 10) | (r - 56320));
            } else n && (e -= 3) > -1 && s.push(239, 191, 189);
            if (((n = null), r < 128)) {
              if ((e -= 1) < 0) break;
              s.push(r);
            } else if (r < 2048) {
              if ((e -= 2) < 0) break;
              s.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((e -= 3) < 0) break;
              s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
            }
          }
          return s;
        }
        function D(t) {
          return i.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(z, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function q(t, e, r, i) {
          for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n) e[n + r] = t[n];
          return n;
        }
      }).call(this, r(14));
    },
    function (t, e) {
      var r,
        i,
        n = (t.exports = {});
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === s || !r) && setTimeout) return (r = setTimeout), setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
          r = s;
        }
        try {
          i = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          i = o;
        }
      })();
      var f,
        h = [],
        u = !1,
        c = -1;
      function l() {
        u && f && ((u = !1), f.length ? (h = f.concat(h)) : (c = -1), h.length && p());
      }
      function p() {
        if (!u) {
          var t = a(l);
          u = !0;
          for (var e = h.length; e; ) {
            for (f = h, h = []; ++c < e; ) f && f[c].run();
            (c = -1), (e = h.length);
          }
          (f = null),
            (u = !1),
            (function (t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === o || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(t);
              try {
                i(t);
              } catch (e) {
                try {
                  return i.call(null, t);
                } catch (e) {
                  return i.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function m() {}
      (n.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        h.push(new d(t, e)), 1 !== h.length || u || a(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = m),
        (n.addListener = m),
        (n.once = m),
        (n.off = m),
        (n.removeListener = m),
        (n.removeAllListeners = m),
        (n.emit = m),
        (n.prependListener = m),
        (n.prependOnceListener = m),
        (n.listeners = function (t) {
          return [];
        }),
        (n.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
    function (t, e, r) {
      var i, n;
      void 0 ===
        (n =
          "function" ==
          typeof (i = function () {
            return function () {
              var t = arguments.length;
              if (0 === t) throw new Error("resolveUrl requires at least one argument; got none.");
              var e = document.createElement("base");
              if (((e.href = arguments[0]), 1 === t)) return e.href;
              var r = document.getElementsByTagName("head")[0];
              r.insertBefore(e, r.firstChild);
              for (var i, n = document.createElement("a"), s = 1; s < t; s++) (n.href = arguments[s]), (i = n.href), (e.href = i);
              return r.removeChild(e), i;
            };
          })
            ? i.call(e, r, e, t)
            : i) || (t.exports = n);
    },
    function (t, e, r) {
      var i;
      !(function (n) {
        "use strict";
        var s, o, a, f, h, u, c, l, p, d, m, g, y;
        function b(t) {
          return null != t;
        }
        function w(t) {
          return "number" == typeof t && t > d && t < m;
        }
        function v(t) {
          return "number" == typeof t && t % 1 == 0;
        }
        function x(t, e) {
          return w(t) && t > e;
        }
        function A(t, e) {
          return w(t) && t < e;
        }
        function E(t, e) {
          return w(t) && t >= e;
        }
        function k(t, e) {
          return w(t) && t <= e;
        }
        function U(t) {
          return "string" == typeof t;
        }
        function _(t) {
          return U(t) && "" !== t;
        }
        function I(t) {
          return "[object Object]" === Object.prototype.toString.call(t);
        }
        function T(t, e) {
          try {
            return t instanceof e;
          } catch (t) {
            return !1;
          }
        }
        function P(t, e) {
          var r;
          for (r in e)
            if (e.hasOwnProperty(r)) {
              if (!1 === t.hasOwnProperty(r) || typeof t[r] != typeof e[r]) return !1;
              if (I(t[r]) && !1 === P(t[r], e[r])) return !1;
            }
          return !0;
        }
        function S(t) {
          return g(t);
        }
        function B(t) {
          return b(t) && E(t.length, 0);
        }
        function R(t) {
          return "function" == typeof t;
        }
        function j(t, e) {
          var r;
          for (r = 0; r < t.length; r += 1) if (t[r] === e) return e;
          return !e;
        }
        function L(t, e) {
          var r, i;
          for (r in t)
            if (t.hasOwnProperty(r)) {
              if (I((i = t[r])) && L(i, e) === e) return e;
              if (i === e) return e;
            }
          return !e;
        }
        function O(t, e) {
          return (
            Object.keys(e).forEach(function (r) {
              t[r] = e[r];
            }),
            t
          );
        }
        function C(t, e) {
          return function () {
            return (function (t, e, r) {
              var i = t.l || t.length,
                n = e[i],
                s = e[i + 1];
              return M(t.apply(null, e), _(n) ? n : r, R(s) ? s : TypeError), e[0];
            })(t, arguments, e);
          };
        }
        function M(t, e, r) {
          if (t) return t;
          throw new (r || Error)(e || "Assertion failed");
        }
        function z(t) {
          var e = function () {
            return Y(t.apply(null, arguments));
          };
          return (e.l = t.length), e;
        }
        function Y(t) {
          return !t;
        }
        function N(t, e, r) {
          var i = function () {
            var i, n;
            if (((i = arguments[0]), "maybe" === t && u.assigned(i))) return !0;
            if (!e(i)) return !1;
            (i = (function (t, e) {
              switch (t) {
                case B:
                  return p.call(e);
                case I:
                  return Object.keys(e).map(function (t) {
                    return e[t];
                  });
                default:
                  return e;
              }
            })(e, i)),
              (n = p.call(arguments, 1));
            try {
              i.forEach(function (e) {
                if (("maybe" !== t || b(e)) && !r.apply(null, [e].concat(n))) throw 0;
              });
            } catch (t) {
              return !1;
            }
            return !0;
          };
          return (i.l = r.length), i;
        }
        function D(t, e) {
          return q([t, a, e]);
        }
        function q(t) {
          var e, r, i, n;
          return (
            (e = t.shift()),
            (r = t.pop()),
            (i = t.pop()),
            (n = r || {}),
            Object.keys(i).forEach(function (r) {
              Object.defineProperty(n, r, { configurable: !1, enumerable: !0, writable: !1, value: e.apply(null, t.concat(i[r], o[r])) });
            }),
            n
          );
        }
        function F(t, e) {
          return q([t, e, null]);
        }
        function $(t, e) {
          l.forEach(function (r) {
            t[r].of = F(e, a[r].of);
          });
        }
        (s = {
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
          (o = {}),
          (a = {}),
          [
            {
              n: "equal",
              f: function (t, e) {
                return t === e;
              },
              s: "v"
            },
            {
              n: "undefined",
              f: function (t) {
                return void 0 === t;
              },
              s: "v"
            },
            {
              n: "null",
              f: function (t) {
                return null === t;
              },
              s: "v"
            },
            { n: "assigned", f: b, s: "v" },
            {
              n: "primitive",
              f: function (t) {
                var e;
                switch (t) {
                  case null:
                  case void 0:
                  case !1:
                  case !0:
                    return !0;
                }
                return "string" == (e = typeof t) || "number" === e || (y && "symbol" === e);
              },
              s: "v"
            },
            {
              n: "includes",
              f: function (t, e) {
                var r, i, n, s, o;
                if (!b(t)) return !1;
                if (y && t[Symbol.iterator] && R(t.values)) {
                  r = t.values();
                  do {
                    if ((i = r.next()).value === e) return !0;
                  } while (!i.done);
                  return !1;
                }
                for (n = Object.keys(t), s = n.length, o = 0; o < s; ++o) if (t[n[o]] === e) return !0;
                return !1;
              },
              s: "v"
            },
            {
              n: "zero",
              f: function (t) {
                return 0 === t;
              }
            },
            {
              n: "infinity",
              f: function (t) {
                return t === d || t === m;
              }
            },
            { n: "number", f: w },
            { n: "integer", f: v },
            {
              n: "even",
              f: function (t) {
                return "number" == typeof t && t % 2 == 0;
              }
            },
            {
              n: "odd",
              f: function (t) {
                return v(t) && t % 2 != 0;
              }
            },
            { n: "greater", f: x },
            { n: "less", f: A },
            {
              n: "between",
              f: function (t, e, r) {
                if (e < r) return x(t, e) && t < r;
                return A(t, e) && t > r;
              }
            },
            { n: "greaterOrEqual", f: E },
            { n: "lessOrEqual", f: k },
            {
              n: "inRange",
              f: function (t, e, r) {
                if (e < r) return E(t, e) && t <= r;
                return k(t, e) && t >= r;
              }
            },
            {
              n: "positive",
              f: function (t) {
                return x(t, 0);
              }
            },
            {
              n: "negative",
              f: function (t) {
                return A(t, 0);
              }
            },
            { n: "string", f: U, s: "s" },
            {
              n: "emptyString",
              f: function (t) {
                return "" === t;
              },
              s: "s"
            },
            { n: "nonEmptyString", f: _, s: "s" },
            {
              n: "contains",
              f: function (t, e) {
                return U(t) && -1 !== t.indexOf(e);
              },
              s: "s"
            },
            {
              n: "match",
              f: function (t, e) {
                return U(t) && !!t.match(e);
              },
              s: "s"
            },
            {
              n: "boolean",
              f: function (t) {
                return !1 === t || !0 === t;
              },
              s: "b"
            },
            { n: "object", f: I, s: "o" },
            {
              n: "emptyObject",
              f: function (t) {
                return I(t) && 0 === Object.keys(t).length;
              },
              s: "o"
            },
            {
              n: "nonEmptyObject",
              f: function (t) {
                return I(t) && Object.keys(t).length > 0;
              },
              s: "o"
            },
            { n: "instanceStrict", f: T, s: "t" },
            {
              n: "instance",
              f: function (t, e) {
                try {
                  return T(t, e) || t.constructor.name === e.name || Object.prototype.toString.call(t) === "[object " + e.name + "]";
                } catch (t) {
                  return !1;
                }
              },
              s: "t"
            },
            { n: "like", f: P, s: "t" },
            { n: "array", f: S, s: "a" },
            {
              n: "emptyArray",
              f: function (t) {
                return S(t) && 0 === t.length;
              },
              s: "a"
            },
            {
              n: "nonEmptyArray",
              f: function (t) {
                return S(t) && x(t.length, 0);
              },
              s: "a"
            },
            { n: "arrayLike", f: B, s: "al" },
            {
              n: "iterable",
              f: function (t) {
                if (!y) return B(t);
                return b(t) && R(t[Symbol.iterator]);
              },
              s: "i"
            },
            {
              n: "date",
              f: function (t) {
                return T(t, Date) && v(t.getTime());
              },
              s: "d"
            },
            { n: "function", f: R, s: "f" },
            {
              n: "hasLength",
              f: function (t, e) {
                return b(t) && t.length === e;
              },
              s: "l"
            }
          ].map(function (t) {
            var e = t.n;
            (o[e] = "Invalid " + s[t.s || "n"]), (a[e] = t.f);
          }),
          (f = {
            apply: function (t, e) {
              if ((h.array(t), R(e)))
                return t.map(function (t) {
                  return e(t);
                });
              return (
                h.array(e),
                h.hasLength(t, e.length),
                t.map(function (t, r) {
                  return e[r](t);
                })
              );
            },
            map: function (t, e) {
              if ((h.object(t), R(e)))
                return (function (t, e) {
                  var r = {};
                  return (
                    Object.keys(t).forEach(function (i) {
                      r[i] = e(t[i]);
                    }),
                    r
                  );
                })(t, e);
              return (
                h.object(e),
                (function t(e, r) {
                  var i = {};
                  return (
                    Object.keys(r).forEach(function (n) {
                      var s = r[n];
                      R(s) ? (u.assigned(e) ? (i[n] = !!s.m) : (i[n] = s(e[n]))) : I(s) && (i[n] = t(e[n], s));
                    }),
                    i
                  );
                })(t, e)
              );
            },
            all: function (t) {
              if (S(t)) return j(t, !1);
              return h.object(t), L(t, !1);
            },
            any: function (t) {
              if (S(t)) return j(t, !0);
              return h.object(t), L(t, !0);
            }
          }),
          (l = ["array", "arrayLike", "iterable", "object"]),
          (p = Array.prototype.slice),
          (d = Number.NEGATIVE_INFINITY),
          (m = Number.POSITIVE_INFINITY),
          (g = Array.isArray),
          (y = "function" == typeof Symbol),
          (f = O(f, a)),
          (h = D(C, M)),
          (u = D(z, Y)),
          (c = D(
            function (t) {
              var e = function () {
                return !!u.assigned(arguments[0]) || t.apply(null, arguments);
              };
              return (e.l = t.length), (e.m = !0), e;
            },
            function (t) {
              if (!1 === b(t)) return !0;
              return t;
            }
          )),
          (h.not = F(C, u)),
          (h.maybe = F(C, c)),
          l.forEach(function (t) {
            a[t].of = q([N.bind(null, null), a[t], a, null]);
          }),
          $(h, C),
          $(u, z),
          l.forEach(function (t) {
            (c[t].of = q([N.bind(null, "maybe"), a[t], a, null])), (h.maybe[t].of = F(C, c[t].of)), (h.not[t].of = F(C, u[t].of));
          }),
          (function (n) {
            void 0 ===
              (i = function () {
                return n;
              }.call(e, r, e, t)) || (t.exports = i);
          })(O(f, { assert: h, not: u, maybe: c }));
      })();
    },
    function (t, e, r) {
      (function (t) {
        const i = r(3),
          n = r(2),
          { defaultOptions: s } = r(24),
          { version: o } = r(25),
          a = (t, e) => {
            const r = new FileReader();
            (r.onload = () => {
              e(r.result);
            }),
              r.readAsArrayBuffer(t);
          },
          f = (t) => {
            if (i.string(t)) return fetch(n(t)).then((t) => t.arrayBuffer());
            if (i.instance(t, HTMLElement)) {
              if ("IMG" === t.tagName) return f(t.src);
              if ("VIDEO" === t.tagName) return f(t.poster);
              if ("CANVAS" === t.tagName)
                return new Promise((e) => {
                  t.toBlob((t) => {
                    a(t, e);
                  });
                });
            }
            return i.instance(t, File)
              ? new Promise((e) => {
                  a(t, e);
                })
              : Promise.reject();
          };
        (e.defaultOptions = {
          ...s,
          workerPath:
            "development" === t.env.TESS_ENV
              ? n(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`)
              : `https://unpkg.com/tesseract.js@v${o}/dist/worker.min.js`,
          corePath: `https://unpkg.com/tesseract.js-core@v2.0.0-beta.8/tesseract-core.${"object" == typeof WebAssembly ? "wasm" : "asm"}.js`
        }),
          (e.spawnWorker = (t, { workerPath: e }) => {
            let r;
            if (Blob && URL) {
              const t = new Blob([`importScripts("${e}");`], { type: "application/javascript" });
              r = new Worker(URL.createObjectURL(t));
            } else r = new Worker(e);
            return (
              (r.onmessage = ({ data: e }) => {
                t.recv(e);
              }),
              r
            );
          }),
          (e.terminateWorker = (t) => {
            t.worker.terminate();
          }),
          (e.sendPacket = (t, e) => {
            const r = { ...e };
            f(r.payload.image)
              .then((t) => new Uint8Array(t))
              .then((e) => {
                (r.payload.image = Array.from(e)), t.worker.postMessage(r);
              });
          });
      }).call(this, r(1));
    },
    function (t, e, r) {
      const i = r(6),
        n = r(23),
        { OEM: s } = r(28);
      t.exports = { TesseractWorker: n, utils: i, OEM: s };
    },
    function (t, e, r) {
      const i = r(7);
      t.exports = { loadLang: r(9)({ fetch: r(11), gunzip: r(12), resolveURL: r(2), ...i }), readImage: r(18), cache: i };
    },
    function (t, e, r) {
      const { set: i, get: n, del: s } = r(8);
      t.exports = { readCache: n, writeCache: i, deleteCache: s, checkCache: (t) => n(t).then((t) => void 0 !== t) };
    },
    function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "Store", function () {
          return i;
        }),
        r.d(e, "get", function () {
          return o;
        }),
        r.d(e, "set", function () {
          return a;
        }),
        r.d(e, "del", function () {
          return f;
        }),
        r.d(e, "clear", function () {
          return h;
        }),
        r.d(e, "keys", function () {
          return u;
        });
      class i {
        constructor(t = "keyval-store", e = "keyval") {
          (this.storeName = e),
            (this._dbp = new Promise((r, i) => {
              const n = indexedDB.open(t, 1);
              (n.onerror = () => i(n.error)),
                (n.onsuccess = () => r(n.result)),
                (n.onupgradeneeded = () => {
                  n.result.createObjectStore(e);
                });
            }));
        }
        _withIDBStore(t, e) {
          return this._dbp.then(
            (r) =>
              new Promise((i, n) => {
                const s = r.transaction(this.storeName, t);
                (s.oncomplete = () => i()), (s.onabort = s.onerror = () => n(s.error)), e(s.objectStore(this.storeName));
              })
          );
        }
      }
      let n;
      function s() {
        return n || (n = new i()), n;
      }
      function o(t, e = s()) {
        let r;
        return e
          ._withIDBStore("readonly", (e) => {
            r = e.get(t);
          })
          .then(() => r.result);
      }
      function a(t, e, r = s()) {
        return r._withIDBStore("readwrite", (r) => {
          r.put(e, t);
        });
      }
      function f(t, e = s()) {
        return e._withIDBStore("readwrite", (e) => {
          e.delete(t);
        });
      }
      function h(t = s()) {
        return t._withIDBStore("readwrite", (t) => {
          t.clear();
        });
      }
      function u(t = s()) {
        const e = [];
        return t
          ._withIDBStore("readonly", (t) => {
            (t.openKeyCursor || t.openCursor).call(t).onsuccess = function () {
              this.result && (e.push(this.result.key), this.result.continue());
            };
          })
          .then(() => e);
      }
    },
    function (t, e, r) {
      (function (e) {
        const i = r(10),
          n =
            (t) =>
            ({ TessModule: e, dataPath: r, cachePath: i, cacheMethod: n, lang: s }) =>
            (o) => {
              if (e) {
                if (r)
                  try {
                    e.FS.mkdir(r);
                  } catch (t) {}
                e.FS.writeFile(`${r || "."}/${s}.traineddata`, o);
              }
              return ["write", "refresh", void 0].includes(n) ? t.writeCache(`${i || "."}/${s}.traineddata`, o).then(() => o) : o;
            };
        t.exports =
          (t) =>
          ({ lang: r, ...s }) =>
            Promise.all(
              r.split("+").map(
                (
                  (t) =>
                  ({ langPath: r, cachePath: s, cacheMethod: o, ...a }) =>
                  (f) => {
                    let { readCache: h } = t;
                    return (
                      ["refresh", "none"].includes(o) && (h = () => Promise.resolve()),
                      h(`${s || "."}/${f}.traineddata`)
                        .then((e) => (void 0 === e ? Promise.reject() : n(t)({ cachePath: s, cacheMethod: o, lang: f, ...a })(e)))
                        .catch(() => {
                          const h = (e) =>
                            t
                              .fetch(`${e}/${f}.traineddata.gz`)
                              .then((t) => t.arrayBuffer())
                              .then((e) => t.gunzip(new Uint8Array(e)))
                              .then(n(t)({ cachePath: s, cacheMethod: o, lang: f, ...a }));
                          return i(r)
                            ? h(r)
                            : e.browser
                            ? h(t.resolveURL(r))
                            : t
                                .readCache(`${r}/${f}.traineddata.gz`)
                                .then((e) => t.gunzip(new Uint8Array(e)))
                                .then(n(t)({ cachePath: s, cacheMethod: o, lang: f, ...a }));
                        })
                    );
                  }
                )(t)(s)
              )
            );
      }).call(this, r(1));
    },
    function (t, e) {
      t.exports = function (t) {
        if ("string" != typeof t) return !1;
        var e = t.match(r);
        if (!e) return !1;
        var s = e[1];
        if (!s) return !1;
        if (i.test(s) || n.test(s)) return !0;
        return !1;
      };
      var r = /^(?:\w+:)?\/\/(\S+)$/,
        i = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,
        n = /^[^\s\.]+\.\S{2,}$/;
    },
    function (t, e) {
      t.exports = fetch.bind();
    },
    function (t, e, r) {
      t.exports = r(13).gunzipSync;
    },
    function (t, e, r) {
      (function (t, r) {
        /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */ (function () {
          "use strict";
          function i(t) {
            throw t;
          }
          var n = void 0,
            s = !0,
            o =
              "undefined" != typeof Uint8Array &&
              "undefined" != typeof Uint16Array &&
              "undefined" != typeof Uint32Array &&
              "undefined" != typeof DataView;
          function a(t, e) {
            (this.index = "number" == typeof e ? e : 0),
              (this.m = 0),
              (this.buffer = t instanceof (o ? Uint8Array : Array) ? t : new (o ? Uint8Array : Array)(32768)),
              2 * this.buffer.length <= this.index && i(Error("invalid index")),
              this.buffer.length <= this.index && this.f();
          }
          (a.prototype.f = function () {
            var t,
              e = this.buffer,
              r = e.length,
              i = new (o ? Uint8Array : Array)(r << 1);
            if (o) i.set(e);
            else for (t = 0; t < r; ++t) i[t] = e[t];
            return (this.buffer = i);
          }),
            (a.prototype.d = function (t, e, r) {
              var i,
                n = this.buffer,
                s = this.index,
                o = this.m,
                a = n[s];
              if (
                (r &&
                  1 < e &&
                  (t =
                    8 < e
                      ? ((p[255 & t] << 24) | (p[(t >>> 8) & 255] << 16) | (p[(t >>> 16) & 255] << 8) | p[(t >>> 24) & 255]) >> (32 - e)
                      : p[t] >> (8 - e)),
                8 > e + o)
              )
                (a = (a << e) | t), (o += e);
              else
                for (i = 0; i < e; ++i)
                  (a = (a << 1) | ((t >> (e - i - 1)) & 1)),
                    8 == ++o && ((o = 0), (n[s++] = p[a]), (a = 0), s === n.length && (n = this.f()));
              (n[s] = a), (this.buffer = n), (this.m = o), (this.index = s);
            }),
            (a.prototype.finish = function () {
              var t,
                e = this.buffer,
                r = this.index;
              return (
                0 < this.m && ((e[r] <<= 8 - this.m), (e[r] = p[e[r]]), r++), o ? (t = e.subarray(0, r)) : ((e.length = r), (t = e)), t
              );
            });
          var f,
            h = new (o ? Uint8Array : Array)(256);
          for (f = 0; 256 > f; ++f) {
            for (var u = (l = f), c = 7, l = l >>> 1; l; l >>>= 1) (u <<= 1), (u |= 1 & l), --c;
            h[f] = ((u << c) & 255) >>> 0;
          }
          var p = h;
          function d(t, e, r) {
            var i,
              n = "number" == typeof e ? e : (e = 0),
              s = "number" == typeof r ? r : t.length;
            for (i = -1, n = 7 & s; n--; ++e) i = (i >>> 8) ^ g[255 & (i ^ t[e])];
            for (n = s >> 3; n--; e += 8)
              i =
                ((i =
                  ((i =
                    ((i =
                      ((i =
                        ((i =
                          ((i = ((i = (i >>> 8) ^ g[255 & (i ^ t[e])]) >>> 8) ^ g[255 & (i ^ t[e + 1])]) >>> 8) ^
                          g[255 & (i ^ t[e + 2])]) >>>
                          8) ^
                        g[255 & (i ^ t[e + 3])]) >>>
                        8) ^
                      g[255 & (i ^ t[e + 4])]) >>>
                      8) ^
                    g[255 & (i ^ t[e + 5])]) >>>
                    8) ^
                  g[255 & (i ^ t[e + 6])]) >>>
                  8) ^
                g[255 & (i ^ t[e + 7])];
            return (4294967295 ^ i) >>> 0;
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
            g = o ? new Uint32Array(m) : m;
          function y() {}
          function b(t) {
            (this.buffer = new (o ? Uint16Array : Array)(2 * t)), (this.length = 0);
          }
          function w(t) {
            var e,
              r,
              i,
              n,
              s,
              a,
              f,
              h,
              u,
              c,
              l = t.length,
              p = 0,
              d = Number.POSITIVE_INFINITY;
            for (h = 0; h < l; ++h) t[h] > p && (p = t[h]), t[h] < d && (d = t[h]);
            for (e = 1 << p, r = new (o ? Uint32Array : Array)(e), i = 1, n = 0, s = 2; i <= p; ) {
              for (h = 0; h < l; ++h)
                if (t[h] === i) {
                  for (a = 0, f = n, u = 0; u < i; ++u) (a = (a << 1) | (1 & f)), (f >>= 1);
                  for (c = (i << 16) | h, u = a; u < e; u += s) r[u] = c;
                  ++n;
                }
              ++i, (n <<= 1), (s <<= 1);
            }
            return [r, p, d];
          }
          function v(t, e) {
            (this.k = A),
              (this.F = 0),
              (this.input = o && t instanceof Array ? new Uint8Array(t) : t),
              (this.b = 0),
              e &&
                (e.lazy && (this.F = e.lazy),
                "number" == typeof e.compressionType && (this.k = e.compressionType),
                e.outputBuffer && (this.a = o && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer),
                "number" == typeof e.outputIndex && (this.b = e.outputIndex)),
              this.a || (this.a = new (o ? Uint8Array : Array)(32768));
          }
          (b.prototype.getParent = function (t) {
            return 2 * (((t - 2) / 4) | 0);
          }),
            (b.prototype.push = function (t, e) {
              var r,
                i,
                n,
                s = this.buffer;
              for (r = this.length, s[this.length++] = e, s[this.length++] = t; 0 < r && ((i = this.getParent(r)), s[r] > s[i]); )
                (n = s[r]), (s[r] = s[i]), (s[i] = n), (n = s[r + 1]), (s[r + 1] = s[i + 1]), (s[i + 1] = n), (r = i);
              return this.length;
            }),
            (b.prototype.pop = function () {
              var t,
                e,
                r,
                i,
                n,
                s = this.buffer;
              for (
                e = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], n = 0;
                !((i = 2 * n + 2) >= this.length) && (i + 2 < this.length && s[i + 2] > s[i] && (i += 2), s[i] > s[n]);

              )
                (r = s[n]), (s[n] = s[i]), (s[i] = r), (r = s[n + 1]), (s[n + 1] = s[i + 1]), (s[i + 1] = r), (n = i);
              return { index: t, value: e, length: this.length };
            });
          var x,
            A = 2,
            E = { NONE: 0, L: 1, t: A, X: 3 },
            k = [];
          for (x = 0; 288 > x; x++)
            switch (s) {
              case 143 >= x:
                k.push([x + 48, 8]);
                break;
              case 255 >= x:
                k.push([x - 144 + 400, 9]);
                break;
              case 279 >= x:
                k.push([x - 256 + 0, 7]);
                break;
              case 287 >= x:
                k.push([x - 280 + 192, 8]);
                break;
              default:
                i("invalid literal: " + x);
            }
          function U(t, e) {
            (this.length = t), (this.N = e);
          }
          v.prototype.h = function () {
            var t,
              e,
              r,
              f,
              h = this.input;
            switch (this.k) {
              case 0:
                for (r = 0, f = h.length; r < f; ) {
                  var u,
                    c,
                    l,
                    p = (e = o ? h.subarray(r, r + 65535) : h.slice(r, r + 65535)),
                    d = (r += e.length) === f,
                    m = n,
                    g = n,
                    y = this.a,
                    b = this.b;
                  if (o) {
                    for (y = new Uint8Array(this.a.buffer); y.length <= b + p.length + 5; ) y = new Uint8Array(y.length << 1);
                    y.set(this.a);
                  }
                  if (
                    ((u = d ? 1 : 0),
                    (y[b++] = 0 | u),
                    (l = (65536 + ~(c = p.length)) & 65535),
                    (y[b++] = 255 & c),
                    (y[b++] = (c >>> 8) & 255),
                    (y[b++] = 255 & l),
                    (y[b++] = (l >>> 8) & 255),
                    o)
                  )
                    y.set(p, b), (b += p.length), (y = y.subarray(0, b));
                  else {
                    for (m = 0, g = p.length; m < g; ++m) y[b++] = p[m];
                    y.length = b;
                  }
                  (this.b = b), (this.a = y);
                }
                break;
              case 1:
                var w = new a(o ? new Uint8Array(this.a.buffer) : this.a, this.b);
                w.d(1, 1, s), w.d(1, 2, s);
                var v,
                  x,
                  E,
                  U = T(this, h);
                for (v = 0, x = U.length; v < x; v++)
                  if (((E = U[v]), a.prototype.d.apply(w, k[E]), 256 < E)) w.d(U[++v], U[++v], s), w.d(U[++v], 5), w.d(U[++v], U[++v], s);
                  else if (256 === E) break;
                (this.a = w.finish()), (this.b = this.a.length);
                break;
              case A:
                var _,
                  I,
                  P,
                  R,
                  j,
                  L,
                  O,
                  C,
                  M,
                  z,
                  Y,
                  N,
                  D,
                  q,
                  F,
                  $ = new a(o ? new Uint8Array(this.a.buffer) : this.a, this.b),
                  J = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                  V = Array(19);
                for (
                  _ = A, $.d(1, 1, s), $.d(_, 2, s), I = T(this, h), O = B((L = S(this.U, 15))), M = B((C = S(this.T, 7))), P = 286;
                  257 < P && 0 === L[P - 1];
                  P--
                );
                for (R = 30; 1 < R && 0 === C[R - 1]; R--);
                var G,
                  W,
                  H,
                  Z,
                  K,
                  X,
                  Q = P,
                  tt = R,
                  et = new (o ? Uint32Array : Array)(Q + tt),
                  rt = new (o ? Uint32Array : Array)(316),
                  it = new (o ? Uint8Array : Array)(19);
                for (G = W = 0; G < Q; G++) et[W++] = L[G];
                for (G = 0; G < tt; G++) et[W++] = C[G];
                if (!o) for (G = 0, Z = it.length; G < Z; ++G) it[G] = 0;
                for (G = K = 0, Z = et.length; G < Z; G += W) {
                  for (W = 1; G + W < Z && et[G + W] === et[G]; ++W);
                  if (((H = W), 0 === et[G]))
                    if (3 > H) for (; 0 < H--; ) (rt[K++] = 0), it[0]++;
                    else
                      for (; 0 < H; )
                        (X = 138 > H ? H : 138) > H - 3 && X < H && (X = H - 3),
                          10 >= X ? ((rt[K++] = 17), (rt[K++] = X - 3), it[17]++) : ((rt[K++] = 18), (rt[K++] = X - 11), it[18]++),
                          (H -= X);
                  else if (((rt[K++] = et[G]), it[et[G]]++, 3 > --H)) for (; 0 < H--; ) (rt[K++] = et[G]), it[et[G]]++;
                  else
                    for (; 0 < H; )
                      (X = 6 > H ? H : 6) > H - 3 && X < H && (X = H - 3), (rt[K++] = 16), (rt[K++] = X - 3), it[16]++, (H -= X);
                }
                for (t = o ? rt.subarray(0, K) : rt.slice(0, K), z = S(it, 7), q = 0; 19 > q; q++) V[q] = z[J[q]];
                for (j = 19; 4 < j && 0 === V[j - 1]; j--);
                for (Y = B(z), $.d(P - 257, 5, s), $.d(R - 1, 5, s), $.d(j - 4, 4, s), q = 0; q < j; q++) $.d(V[q], 3, s);
                for (q = 0, F = t.length; q < F; q++)
                  if (((N = t[q]), $.d(Y[N], z[N], s), 16 <= N)) {
                    switch ((q++, N)) {
                      case 16:
                        D = 2;
                        break;
                      case 17:
                        D = 3;
                        break;
                      case 18:
                        D = 7;
                        break;
                      default:
                        i("invalid code: " + N);
                    }
                    $.d(t[q], D, s);
                  }
                var nt,
                  st,
                  ot,
                  at,
                  ft,
                  ht,
                  ut,
                  ct,
                  lt = [O, L],
                  pt = [M, C];
                for (ft = lt[0], ht = lt[1], ut = pt[0], ct = pt[1], nt = 0, st = I.length; nt < st; ++nt)
                  if (((ot = I[nt]), $.d(ft[ot], ht[ot], s), 256 < ot))
                    $.d(I[++nt], I[++nt], s), (at = I[++nt]), $.d(ut[at], ct[at], s), $.d(I[++nt], I[++nt], s);
                  else if (256 === ot) break;
                (this.a = $.finish()), (this.b = this.a.length);
                break;
              default:
                i("invalid compression type");
            }
            return this.a;
          };
          var _ = (function () {
              function t(t) {
                switch (s) {
                  case 3 === t:
                    return [257, t - 3, 0];
                  case 4 === t:
                    return [258, t - 4, 0];
                  case 5 === t:
                    return [259, t - 5, 0];
                  case 6 === t:
                    return [260, t - 6, 0];
                  case 7 === t:
                    return [261, t - 7, 0];
                  case 8 === t:
                    return [262, t - 8, 0];
                  case 9 === t:
                    return [263, t - 9, 0];
                  case 10 === t:
                    return [264, t - 10, 0];
                  case 12 >= t:
                    return [265, t - 11, 1];
                  case 14 >= t:
                    return [266, t - 13, 1];
                  case 16 >= t:
                    return [267, t - 15, 1];
                  case 18 >= t:
                    return [268, t - 17, 1];
                  case 22 >= t:
                    return [269, t - 19, 2];
                  case 26 >= t:
                    return [270, t - 23, 2];
                  case 30 >= t:
                    return [271, t - 27, 2];
                  case 34 >= t:
                    return [272, t - 31, 2];
                  case 42 >= t:
                    return [273, t - 35, 3];
                  case 50 >= t:
                    return [274, t - 43, 3];
                  case 58 >= t:
                    return [275, t - 51, 3];
                  case 66 >= t:
                    return [276, t - 59, 3];
                  case 82 >= t:
                    return [277, t - 67, 4];
                  case 98 >= t:
                    return [278, t - 83, 4];
                  case 114 >= t:
                    return [279, t - 99, 4];
                  case 130 >= t:
                    return [280, t - 115, 4];
                  case 162 >= t:
                    return [281, t - 131, 5];
                  case 194 >= t:
                    return [282, t - 163, 5];
                  case 226 >= t:
                    return [283, t - 195, 5];
                  case 257 >= t:
                    return [284, t - 227, 5];
                  case 258 === t:
                    return [285, t - 258, 0];
                  default:
                    i("invalid length: " + t);
                }
              }
              var e,
                r,
                n = [];
              for (e = 3; 258 >= e; e++) (r = t(e)), (n[e] = (r[2] << 24) | (r[1] << 16) | r[0]);
              return n;
            })(),
            I = o ? new Uint32Array(_) : _;
          function T(t, e) {
            function r(t, e) {
              var r,
                n,
                o,
                a,
                f = t.N,
                h = [],
                u = 0;
              switch (((r = I[t.length]), (h[u++] = 65535 & r), (h[u++] = (r >> 16) & 255), (h[u++] = r >> 24), s)) {
                case 1 === f:
                  n = [0, f - 1, 0];
                  break;
                case 2 === f:
                  n = [1, f - 2, 0];
                  break;
                case 3 === f:
                  n = [2, f - 3, 0];
                  break;
                case 4 === f:
                  n = [3, f - 4, 0];
                  break;
                case 6 >= f:
                  n = [4, f - 5, 1];
                  break;
                case 8 >= f:
                  n = [5, f - 7, 1];
                  break;
                case 12 >= f:
                  n = [6, f - 9, 2];
                  break;
                case 16 >= f:
                  n = [7, f - 13, 2];
                  break;
                case 24 >= f:
                  n = [8, f - 17, 3];
                  break;
                case 32 >= f:
                  n = [9, f - 25, 3];
                  break;
                case 48 >= f:
                  n = [10, f - 33, 4];
                  break;
                case 64 >= f:
                  n = [11, f - 49, 4];
                  break;
                case 96 >= f:
                  n = [12, f - 65, 5];
                  break;
                case 128 >= f:
                  n = [13, f - 97, 5];
                  break;
                case 192 >= f:
                  n = [14, f - 129, 6];
                  break;
                case 256 >= f:
                  n = [15, f - 193, 6];
                  break;
                case 384 >= f:
                  n = [16, f - 257, 7];
                  break;
                case 512 >= f:
                  n = [17, f - 385, 7];
                  break;
                case 768 >= f:
                  n = [18, f - 513, 8];
                  break;
                case 1024 >= f:
                  n = [19, f - 769, 8];
                  break;
                case 1536 >= f:
                  n = [20, f - 1025, 9];
                  break;
                case 2048 >= f:
                  n = [21, f - 1537, 9];
                  break;
                case 3072 >= f:
                  n = [22, f - 2049, 10];
                  break;
                case 4096 >= f:
                  n = [23, f - 3073, 10];
                  break;
                case 6144 >= f:
                  n = [24, f - 4097, 11];
                  break;
                case 8192 >= f:
                  n = [25, f - 6145, 11];
                  break;
                case 12288 >= f:
                  n = [26, f - 8193, 12];
                  break;
                case 16384 >= f:
                  n = [27, f - 12289, 12];
                  break;
                case 24576 >= f:
                  n = [28, f - 16385, 13];
                  break;
                case 32768 >= f:
                  n = [29, f - 24577, 13];
                  break;
                default:
                  i("invalid distance");
              }
              for (r = n, h[u++] = r[0], h[u++] = r[1], h[u++] = r[2], o = 0, a = h.length; o < a; ++o) y[b++] = h[o];
              v[h[0]]++, x[h[3]]++, (w = t.length + e - 1), (d = null);
            }
            var a,
              f,
              h,
              u,
              c,
              l,
              p,
              d,
              m,
              g = {},
              y = o ? new Uint16Array(2 * e.length) : [],
              b = 0,
              w = 0,
              v = new (o ? Uint32Array : Array)(286),
              x = new (o ? Uint32Array : Array)(30),
              A = t.F;
            if (!o) {
              for (h = 0; 285 >= h; ) v[h++] = 0;
              for (h = 0; 29 >= h; ) x[h++] = 0;
            }
            for (v[256] = 1, a = 0, f = e.length; a < f; ++a) {
              for (h = c = 0, u = 3; h < u && a + h !== f; ++h) c = (c << 8) | e[a + h];
              if ((g[c] === n && (g[c] = []), (l = g[c]), !(0 < w--))) {
                for (; 0 < l.length && 32768 < a - l[0]; ) l.shift();
                if (a + 3 >= f) {
                  for (d && r(d, -1), h = 0, u = f - a; h < u; ++h) (m = e[a + h]), (y[b++] = m), ++v[m];
                  break;
                }
                0 < l.length
                  ? ((p = P(e, a, l)),
                    d
                      ? d.length < p.length
                        ? ((m = e[a - 1]), (y[b++] = m), ++v[m], r(p, 0))
                        : r(d, -1)
                      : p.length < A
                      ? (d = p)
                      : r(p, 0))
                  : d
                  ? r(d, -1)
                  : ((m = e[a]), (y[b++] = m), ++v[m]);
              }
              l.push(a);
            }
            return (y[b++] = 256), v[256]++, (t.U = v), (t.T = x), o ? y.subarray(0, b) : y;
          }
          function P(t, e, r) {
            var i,
              n,
              s,
              o,
              a,
              f,
              h = 0,
              u = t.length;
            (o = 0), (f = r.length);
            t: for (; o < f; o++) {
              if (((i = r[f - o - 1]), (s = 3), 3 < h)) {
                for (a = h; 3 < a; a--) if (t[i + a - 1] !== t[e + a - 1]) continue t;
                s = h;
              }
              for (; 258 > s && e + s < u && t[i + s] === t[e + s]; ) ++s;
              if ((s > h && ((n = i), (h = s)), 258 === s)) break;
            }
            return new U(h, e - n);
          }
          function S(t, e) {
            var r,
              i,
              n,
              s,
              a,
              f = t.length,
              h = new b(572),
              u = new (o ? Uint8Array : Array)(f);
            if (!o) for (s = 0; s < f; s++) u[s] = 0;
            for (s = 0; s < f; ++s) 0 < t[s] && h.push(s, t[s]);
            if (((r = Array(h.length / 2)), (i = new (o ? Uint32Array : Array)(h.length / 2)), 1 === r.length))
              return (u[h.pop().index] = 1), u;
            for (s = 0, a = h.length / 2; s < a; ++s) (r[s] = h.pop()), (i[s] = r[s].value);
            for (
              n = (function (t, e, r) {
                function i(t) {
                  var r = d[t][m[t]];
                  r === e ? (i(t + 1), i(t + 1)) : --l[r], ++m[t];
                }
                var n,
                  s,
                  a,
                  f,
                  h,
                  u = new (o ? Uint16Array : Array)(r),
                  c = new (o ? Uint8Array : Array)(r),
                  l = new (o ? Uint8Array : Array)(e),
                  p = Array(r),
                  d = Array(r),
                  m = Array(r),
                  g = (1 << r) - e,
                  y = 1 << (r - 1);
                for (u[r - 1] = e, s = 0; s < r; ++s)
                  g < y ? (c[s] = 0) : ((c[s] = 1), (g -= y)), (g <<= 1), (u[r - 2 - s] = ((u[r - 1 - s] / 2) | 0) + e);
                for (u[0] = c[0], p[0] = Array(u[0]), d[0] = Array(u[0]), s = 1; s < r; ++s)
                  u[s] > 2 * u[s - 1] + c[s] && (u[s] = 2 * u[s - 1] + c[s]), (p[s] = Array(u[s])), (d[s] = Array(u[s]));
                for (n = 0; n < e; ++n) l[n] = r;
                for (a = 0; a < u[r - 1]; ++a) (p[r - 1][a] = t[a]), (d[r - 1][a] = a);
                for (n = 0; n < r; ++n) m[n] = 0;
                for (1 === c[r - 1] && (--l[0], ++m[r - 1]), s = r - 2; 0 <= s; --s) {
                  for (f = n = 0, h = m[s + 1], a = 0; a < u[s]; a++)
                    (f = p[s + 1][h] + p[s + 1][h + 1]) > t[n]
                      ? ((p[s][a] = f), (d[s][a] = e), (h += 2))
                      : ((p[s][a] = t[n]), (d[s][a] = n), ++n);
                  (m[s] = 0), 1 === c[s] && i(s);
                }
                return l;
              })(i, i.length, e),
                s = 0,
                a = r.length;
              s < a;
              ++s
            )
              u[r[s].index] = n[s];
            return u;
          }
          function B(t) {
            var e,
              r,
              i,
              n,
              s = new (o ? Uint16Array : Array)(t.length),
              a = [],
              f = [],
              h = 0;
            for (e = 0, r = t.length; e < r; e++) a[t[e]] = 1 + (0 | a[t[e]]);
            for (e = 1, r = 16; e <= r; e++) (f[e] = h), (h += 0 | a[e]), (h <<= 1);
            for (e = 0, r = t.length; e < r; e++)
              for (h = f[t[e]], f[t[e]] += 1, i = s[e] = 0, n = t[e]; i < n; i++) (s[e] = (s[e] << 1) | (1 & h)), (h >>>= 1);
            return s;
          }
          function R(t, e) {
            (this.input = t),
              (this.b = this.c = 0),
              (this.g = {}),
              e &&
                (e.flags && (this.g = e.flags),
                "string" == typeof e.filename && (this.filename = e.filename),
                "string" == typeof e.comment && (this.w = e.comment),
                e.deflateOptions && (this.l = e.deflateOptions)),
              this.l || (this.l = {});
          }
          R.prototype.h = function () {
            var t,
              e,
              r,
              i,
              s,
              a,
              f,
              h,
              u = new (o ? Uint8Array : Array)(32768),
              c = 0,
              l = this.input,
              p = this.c,
              m = this.filename,
              g = this.w;
            if (
              ((u[c++] = 31),
              (u[c++] = 139),
              (u[c++] = 8),
              (t = 0),
              this.g.fname && (t |= O),
              this.g.fcomment && (t |= C),
              this.g.fhcrc && (t |= L),
              (u[c++] = t),
              (e = ((Date.now ? Date.now() : +new Date()) / 1e3) | 0),
              (u[c++] = 255 & e),
              (u[c++] = (e >>> 8) & 255),
              (u[c++] = (e >>> 16) & 255),
              (u[c++] = (e >>> 24) & 255),
              (u[c++] = 0),
              (u[c++] = j),
              this.g.fname !== n)
            ) {
              for (f = 0, h = m.length; f < h; ++f) 255 < (a = m.charCodeAt(f)) && (u[c++] = (a >>> 8) & 255), (u[c++] = 255 & a);
              u[c++] = 0;
            }
            if (this.g.comment) {
              for (f = 0, h = g.length; f < h; ++f) 255 < (a = g.charCodeAt(f)) && (u[c++] = (a >>> 8) & 255), (u[c++] = 255 & a);
              u[c++] = 0;
            }
            return (
              this.g.fhcrc && ((r = 65535 & d(u, 0, c)), (u[c++] = 255 & r), (u[c++] = (r >>> 8) & 255)),
              (this.l.outputBuffer = u),
              (this.l.outputIndex = c),
              (u = (s = new v(l, this.l)).h()),
              (c = s.b),
              o &&
                (c + 8 > u.buffer.byteLength
                  ? ((this.a = new Uint8Array(c + 8)), this.a.set(new Uint8Array(u.buffer)), (u = this.a))
                  : (u = new Uint8Array(u.buffer))),
              (i = d(l, n, n)),
              (u[c++] = 255 & i),
              (u[c++] = (i >>> 8) & 255),
              (u[c++] = (i >>> 16) & 255),
              (u[c++] = (i >>> 24) & 255),
              (h = l.length),
              (u[c++] = 255 & h),
              (u[c++] = (h >>> 8) & 255),
              (u[c++] = (h >>> 16) & 255),
              (u[c++] = (h >>> 24) & 255),
              (this.c = p),
              o && c < u.length && (this.a = u = u.subarray(0, c)),
              u
            );
          };
          var j = 255,
            L = 2,
            O = 8,
            C = 16;
          function M(t, e) {
            switch (
              ((this.o = []),
              (this.p = 32768),
              (this.e = this.j = this.c = this.s = 0),
              (this.input = o ? new Uint8Array(t) : t),
              (this.u = !1),
              (this.q = Y),
              (this.K = !1),
              (!e && (e = {})) ||
                (e.index && (this.c = e.index),
                e.bufferSize && (this.p = e.bufferSize),
                e.bufferType && (this.q = e.bufferType),
                e.resize && (this.K = e.resize)),
              this.q)
            ) {
              case z:
                (this.b = 32768), (this.a = new (o ? Uint8Array : Array)(32768 + this.p + 258));
                break;
              case Y:
                (this.b = 0), (this.a = new (o ? Uint8Array : Array)(this.p)), (this.f = this.S), (this.z = this.O), (this.r = this.Q);
                break;
              default:
                i(Error("invalid inflate mode"));
            }
          }
          var z = 0,
            Y = 1;
          M.prototype.i = function () {
            for (; !this.u; ) {
              var t = nt(this, 3);
              switch ((1 & t && (this.u = s), (t >>>= 1))) {
                case 0:
                  var e = this.input,
                    r = this.c,
                    a = this.a,
                    f = this.b,
                    h = e.length,
                    u = n,
                    c = a.length,
                    l = n;
                  switch (
                    ((this.e = this.j = 0),
                    r + 1 >= h && i(Error("invalid uncompressed block header: LEN")),
                    (u = e[r++] | (e[r++] << 8)),
                    r + 1 >= h && i(Error("invalid uncompressed block header: NLEN")),
                    u === ~(e[r++] | (e[r++] << 8)) && i(Error("invalid uncompressed block header: length verify")),
                    r + u > e.length && i(Error("input buffer is broken")),
                    this.q)
                  ) {
                    case z:
                      for (; f + u > a.length; ) {
                        if (((u -= l = c - f), o)) a.set(e.subarray(r, r + l), f), (f += l), (r += l);
                        else for (; l--; ) a[f++] = e[r++];
                        (this.b = f), (a = this.f()), (f = this.b);
                      }
                      break;
                    case Y:
                      for (; f + u > a.length; ) a = this.f({ B: 2 });
                      break;
                    default:
                      i(Error("invalid inflate mode"));
                  }
                  if (o) a.set(e.subarray(r, r + u), f), (f += u), (r += u);
                  else for (; u--; ) a[f++] = e[r++];
                  (this.c = r), (this.b = f), (this.a = a);
                  break;
                case 1:
                  this.r(et, it);
                  break;
                case 2:
                  var p,
                    d,
                    m,
                    g,
                    y = nt(this, 5) + 257,
                    b = nt(this, 5) + 1,
                    v = nt(this, 4) + 4,
                    x = new (o ? Uint8Array : Array)(F.length),
                    A = n,
                    E = n,
                    k = n,
                    U = n,
                    _ = n;
                  for (_ = 0; _ < v; ++_) x[F[_]] = nt(this, 3);
                  if (!o) for (_ = v, v = x.length; _ < v; ++_) x[F[_]] = 0;
                  for (p = w(x), A = new (o ? Uint8Array : Array)(y + b), _ = 0, g = y + b; _ < g; )
                    switch (((E = st(this, p)), E)) {
                      case 16:
                        for (U = 3 + nt(this, 2); U--; ) A[_++] = k;
                        break;
                      case 17:
                        for (U = 3 + nt(this, 3); U--; ) A[_++] = 0;
                        k = 0;
                        break;
                      case 18:
                        for (U = 11 + nt(this, 7); U--; ) A[_++] = 0;
                        k = 0;
                        break;
                      default:
                        k = A[_++] = E;
                    }
                  (d = w(o ? A.subarray(0, y) : A.slice(0, y))), (m = w(o ? A.subarray(y) : A.slice(y))), this.r(d, m);
                  break;
                default:
                  i(Error("unknown BTYPE: " + t));
              }
            }
            return this.z();
          };
          var N,
            D,
            q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            F = o ? new Uint16Array(q) : q,
            $ = [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258
            ],
            J = o ? new Uint16Array($) : $,
            V = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
            G = o ? new Uint8Array(V) : V,
            W = [
              1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
              12289, 16385, 24577
            ],
            H = o ? new Uint16Array(W) : W,
            Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            K = o ? new Uint8Array(Z) : Z,
            X = new (o ? Uint8Array : Array)(288);
          for (N = 0, D = X.length; N < D; ++N) X[N] = 143 >= N ? 8 : 255 >= N ? 9 : 279 >= N ? 7 : 8;
          var Q,
            tt,
            et = w(X),
            rt = new (o ? Uint8Array : Array)(30);
          for (Q = 0, tt = rt.length; Q < tt; ++Q) rt[Q] = 5;
          var it = w(rt);
          function nt(t, e) {
            for (var r, n = t.j, s = t.e, o = t.input, a = t.c, f = o.length; s < e; )
              a >= f && i(Error("input buffer is broken")), (n |= o[a++] << s), (s += 8);
            return (r = n & ((1 << e) - 1)), (t.j = n >>> e), (t.e = s - e), (t.c = a), r;
          }
          function st(t, e) {
            for (var r, n, s = t.j, o = t.e, a = t.input, f = t.c, h = a.length, u = e[0], c = e[1]; o < c && !(f >= h); )
              (s |= a[f++] << o), (o += 8);
            return (
              (n = (r = u[s & ((1 << c) - 1)]) >>> 16) > o && i(Error("invalid code length: " + n)),
              (t.j = s >> n),
              (t.e = o - n),
              (t.c = f),
              65535 & r
            );
          }
          function ot(t) {
            (this.input = t), (this.c = 0), (this.G = []), (this.R = !1);
          }
          function at(t) {
            if ("string" == typeof t) {
              var e,
                r,
                i = t.split("");
              for (e = 0, r = i.length; e < r; e++) i[e] = (255 & i[e].charCodeAt(0)) >>> 0;
              t = i;
            }
            for (var n, s = 1, o = 0, a = t.length, f = 0; 0 < a; ) {
              a -= n = 1024 < a ? 1024 : a;
              do {
                o += s += t[f++];
              } while (--n);
              (s %= 65521), (o %= 65521);
            }
            return ((o << 16) | s) >>> 0;
          }
          function ft(t, e) {
            var r, n;
            switch (
              ((this.input = t),
              (this.c = 0),
              (!e && (e = {})) || (e.index && (this.c = e.index), e.verify && (this.V = e.verify)),
              (r = t[this.c++]),
              (n = t[this.c++]),
              15 & r)
            ) {
              case ht:
                this.method = ht;
                break;
              default:
                i(Error("unsupported compression method"));
            }
            0 != ((r << 8) + n) % 31 && i(Error("invalid fcheck flag:" + (((r << 8) + n) % 31))),
              32 & n && i(Error("fdict flag is not supported")),
              (this.J = new M(t, { index: this.c, bufferSize: e.bufferSize, bufferType: e.bufferType, resize: e.resize }));
          }
          (M.prototype.r = function (t, e) {
            var r = this.a,
              i = this.b;
            this.A = t;
            for (var n, s, o, a, f = r.length - 258; 256 !== (n = st(this, t)); )
              if (256 > n) i >= f && ((this.b = i), (r = this.f()), (i = this.b)), (r[i++] = n);
              else
                for (
                  a = J[(s = n - 257)],
                    0 < G[s] && (a += nt(this, G[s])),
                    n = st(this, e),
                    o = H[n],
                    0 < K[n] && (o += nt(this, K[n])),
                    i >= f && ((this.b = i), (r = this.f()), (i = this.b));
                  a--;

                )
                  r[i] = r[i++ - o];
            for (; 8 <= this.e; ) (this.e -= 8), this.c--;
            this.b = i;
          }),
            (M.prototype.Q = function (t, e) {
              var r = this.a,
                i = this.b;
              this.A = t;
              for (var n, s, o, a, f = r.length; 256 !== (n = st(this, t)); )
                if (256 > n) i >= f && (f = (r = this.f()).length), (r[i++] = n);
                else
                  for (
                    a = J[(s = n - 257)],
                      0 < G[s] && (a += nt(this, G[s])),
                      n = st(this, e),
                      o = H[n],
                      0 < K[n] && (o += nt(this, K[n])),
                      i + a > f && (f = (r = this.f()).length);
                    a--;

                  )
                    r[i] = r[i++ - o];
              for (; 8 <= this.e; ) (this.e -= 8), this.c--;
              this.b = i;
            }),
            (M.prototype.f = function () {
              var t,
                e,
                r = new (o ? Uint8Array : Array)(this.b - 32768),
                i = this.b - 32768,
                n = this.a;
              if (o) r.set(n.subarray(32768, r.length));
              else for (t = 0, e = r.length; t < e; ++t) r[t] = n[t + 32768];
              if ((this.o.push(r), (this.s += r.length), o)) n.set(n.subarray(i, i + 32768));
              else for (t = 0; 32768 > t; ++t) n[t] = n[i + t];
              return (this.b = 32768), n;
            }),
            (M.prototype.S = function (t) {
              var e,
                r,
                i,
                n = (this.input.length / this.c + 1) | 0,
                s = this.input,
                a = this.a;
              return (
                t && ("number" == typeof t.B && (n = t.B), "number" == typeof t.M && (n += t.M)),
                2 > n
                  ? (r = (i = (((s.length - this.c) / this.A[2] / 2) * 258) | 0) < a.length ? a.length + i : a.length << 1)
                  : (r = a.length * n),
                o ? (e = new Uint8Array(r)).set(a) : (e = a),
                (this.a = e)
              );
            }),
            (M.prototype.z = function () {
              var t,
                e,
                r,
                i,
                n,
                s = 0,
                a = this.a,
                f = this.o,
                h = new (o ? Uint8Array : Array)(this.s + (this.b - 32768));
              if (0 === f.length) return o ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
              for (e = 0, r = f.length; e < r; ++e) for (i = 0, n = (t = f[e]).length; i < n; ++i) h[s++] = t[i];
              for (e = 32768, r = this.b; e < r; ++e) h[s++] = a[e];
              return (this.o = []), (this.buffer = h);
            }),
            (M.prototype.O = function () {
              var t,
                e = this.b;
              return (
                o
                  ? this.K
                    ? (t = new Uint8Array(e)).set(this.a.subarray(0, e))
                    : (t = this.a.subarray(0, e))
                  : (this.a.length > e && (this.a.length = e), (t = this.a)),
                (this.buffer = t)
              );
            }),
            (ot.prototype.i = function () {
              for (var t = this.input.length; this.c < t; ) {
                var e,
                  r,
                  a = new y(),
                  f = n,
                  h = n,
                  u = n,
                  c = n,
                  l = n,
                  p = n,
                  m = n,
                  g = this.input,
                  b = this.c;
                switch (
                  ((a.C = g[b++]),
                  (a.D = g[b++]),
                  (31 !== a.C || 139 !== a.D) && i(Error("invalid file signature:" + a.C + "," + a.D)),
                  (a.v = g[b++]),
                  a.v)
                ) {
                  case 8:
                    break;
                  default:
                    i(Error("unknown compression method: " + a.v));
                }
                if (
                  ((a.n = g[b++]),
                  (r = g[b++] | (g[b++] << 8) | (g[b++] << 16) | (g[b++] << 24)),
                  (a.$ = new Date(1e3 * r)),
                  (a.ba = g[b++]),
                  (a.aa = g[b++]),
                  0 < (4 & a.n) && ((a.W = g[b++] | (g[b++] << 8)), (b += a.W)),
                  0 < (a.n & O))
                ) {
                  for (p = [], l = 0; 0 < (c = g[b++]); ) p[l++] = String.fromCharCode(c);
                  a.name = p.join("");
                }
                if (0 < (a.n & C)) {
                  for (p = [], l = 0; 0 < (c = g[b++]); ) p[l++] = String.fromCharCode(c);
                  a.w = p.join("");
                }
                0 < (a.n & L) && ((a.P = 65535 & d(g, 0, b)), a.P !== (g[b++] | (g[b++] << 8)) && i(Error("invalid header crc16"))),
                  (f = g[g.length - 4] | (g[g.length - 3] << 8) | (g[g.length - 2] << 16) | (g[g.length - 1] << 24)),
                  g.length - b - 4 - 4 < 512 * f && (u = f),
                  (h = new M(g, { index: b, bufferSize: u })),
                  (a.data = e = h.i()),
                  (b = h.c),
                  (a.Y = m = (g[b++] | (g[b++] << 8) | (g[b++] << 16) | (g[b++] << 24)) >>> 0),
                  d(e, n, n) !== m && i(Error("invalid CRC-32 checksum: 0x" + d(e, n, n).toString(16) + " / 0x" + m.toString(16))),
                  (a.Z = f = (g[b++] | (g[b++] << 8) | (g[b++] << 16) | (g[b++] << 24)) >>> 0),
                  (4294967295 & e.length) !== f && i(Error("invalid input size: " + (4294967295 & e.length) + " / " + f)),
                  this.G.push(a),
                  (this.c = b);
              }
              this.R = s;
              var w,
                v,
                x,
                A = this.G,
                E = 0,
                k = 0;
              for (w = 0, v = A.length; w < v; ++w) k += A[w].data.length;
              if (o) for (x = new Uint8Array(k), w = 0; w < v; ++w) x.set(A[w].data, E), (E += A[w].data.length);
              else {
                for (x = [], w = 0; w < v; ++w) x[w] = A[w].data;
                x = Array.prototype.concat.apply([], x);
              }
              return x;
            }),
            (ft.prototype.i = function () {
              var t,
                e = this.input;
              return (
                (t = this.J.i()),
                (this.c = this.J.c),
                this.V &&
                  ((e[this.c++] << 24) | (e[this.c++] << 16) | (e[this.c++] << 8) | e[this.c++]) >>> 0 !== at(t) &&
                  i(Error("invalid adler-32 checksum")),
                t
              );
            });
          var ht = 8;
          function ut(t, e) {
            (this.input = t), (this.a = new (o ? Uint8Array : Array)(32768)), (this.k = ct.t);
            var r,
              i = {};
            for (r in ((!e && (e = {})) || "number" != typeof e.compressionType || (this.k = e.compressionType), e)) i[r] = e[r];
            (i.outputBuffer = this.a), (this.I = new v(this.input, i));
          }
          var ct = E;
          function lt(t, e) {
            var r;
            return (r = new ut(t).h()), e || (e = {}), e.H ? r : gt(r);
          }
          function pt(t, e) {
            var r;
            return (t.subarray = t.slice), (r = new ft(t).i()), e || (e = {}), e.noBuffer ? r : gt(r);
          }
          function dt(t, e) {
            var r;
            return (t.subarray = t.slice), (r = new R(t).h()), e || (e = {}), e.H ? r : gt(r);
          }
          function mt(t, e) {
            var r;
            return (t.subarray = t.slice), (r = new ot(t).i()), e || (e = {}), e.H ? r : gt(r);
          }
          function gt(t) {
            var e,
              i,
              n = new r(t.length);
            for (e = 0, i = t.length; e < i; ++e) n[e] = t[e];
            return n;
          }
          (ut.prototype.h = function () {
            var t,
              e,
              r,
              n,
              s,
              a,
              f,
              h = 0;
            switch (((f = this.a), (t = ht))) {
              case ht:
                e = Math.LOG2E * Math.log(32768) - 8;
                break;
              default:
                i(Error("invalid compression method"));
            }
            switch (((r = (e << 4) | t), (f[h++] = r), t)) {
              case ht:
                switch (this.k) {
                  case ct.NONE:
                    s = 0;
                    break;
                  case ct.L:
                    s = 1;
                    break;
                  case ct.t:
                    s = 2;
                    break;
                  default:
                    i(Error("unsupported compression type"));
                }
                break;
              default:
                i(Error("invalid compression method"));
            }
            return (
              (n = (s << 6) | 0),
              (f[h++] = n | (31 - ((256 * r + n) % 31))),
              (a = at(this.input)),
              (this.I.b = h),
              (h = (f = this.I.h()).length),
              o &&
                ((f = new Uint8Array(f.buffer)).length <= h + 4 && ((this.a = new Uint8Array(f.length + 4)), this.a.set(f), (f = this.a)),
                (f = f.subarray(0, h + 4))),
              (f[h++] = (a >> 24) & 255),
              (f[h++] = (a >> 16) & 255),
              (f[h++] = (a >> 8) & 255),
              (f[h++] = 255 & a),
              f
            );
          }),
            (e.deflate = function (e, r, i) {
              t.nextTick(function () {
                var t, n;
                try {
                  n = lt(e, i);
                } catch (e) {
                  t = e;
                }
                r(t, n);
              });
            }),
            (e.deflateSync = lt),
            (e.inflate = function (e, r, i) {
              t.nextTick(function () {
                var t, n;
                try {
                  n = pt(e, i);
                } catch (e) {
                  t = e;
                }
                r(t, n);
              });
            }),
            (e.inflateSync = pt),
            (e.gzip = function (e, r, i) {
              t.nextTick(function () {
                var t, n;
                try {
                  n = dt(e, i);
                } catch (e) {
                  t = e;
                }
                r(t, n);
              });
            }),
            (e.gzipSync = dt),
            (e.gunzip = function (e, r, i) {
              t.nextTick(function () {
                var t, n;
                try {
                  n = mt(e, i);
                } catch (e) {
                  t = e;
                }
                r(t, n);
              });
            }),
            (e.gunzipSync = mt);
        }).call(this);
      }).call(this, r(1), r(0).Buffer);
    },
    function (t, e) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (r = window);
      }
      t.exports = r;
    },
    function (t, e, r) {
      "use strict";
      (e.byteLength = function (t) {
        return (3 * t.length) / 4 - h(t);
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            i,
            o,
            a,
            f = t.length;
          (o = h(t)), (a = new s((3 * f) / 4 - o)), (r = o > 0 ? f - 4 : f);
          var u = 0;
          for (e = 0; e < r; e += 4)
            (i = (n[t.charCodeAt(e)] << 18) | (n[t.charCodeAt(e + 1)] << 12) | (n[t.charCodeAt(e + 2)] << 6) | n[t.charCodeAt(e + 3)]),
              (a[u++] = (i >> 16) & 255),
              (a[u++] = (i >> 8) & 255),
              (a[u++] = 255 & i);
          2 === o
            ? ((i = (n[t.charCodeAt(e)] << 2) | (n[t.charCodeAt(e + 1)] >> 4)), (a[u++] = 255 & i))
            : 1 === o &&
              ((i = (n[t.charCodeAt(e)] << 10) | (n[t.charCodeAt(e + 1)] << 4) | (n[t.charCodeAt(e + 2)] >> 2)),
              (a[u++] = (i >> 8) & 255),
              (a[u++] = 255 & i));
          return a;
        }),
        (e.fromByteArray = function (t) {
          for (var e, r = t.length, n = r % 3, s = "", o = [], a = 0, f = r - n; a < f; a += 16383)
            o.push(u(t, a, a + 16383 > f ? f : a + 16383));
          1 === n
            ? ((e = t[r - 1]), (s += i[e >> 2]), (s += i[(e << 4) & 63]), (s += "=="))
            : 2 === n &&
              ((e = (t[r - 2] << 8) + t[r - 1]), (s += i[e >> 10]), (s += i[(e >> 4) & 63]), (s += i[(e << 2) & 63]), (s += "="));
          return o.push(s), o.join("");
        });
      for (
        var i = [],
          n = [],
          s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          f = o.length;
        a < f;
        ++a
      )
        (i[a] = o[a]), (n[o.charCodeAt(a)] = a);
      function h(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
      }
      function u(t, e, r) {
        for (var n, s, o = [], a = e; a < r; a += 3)
          (n = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2]),
            o.push(i[((s = n) >> 18) & 63] + i[(s >> 12) & 63] + i[(s >> 6) & 63] + i[63 & s]);
        return o.join("");
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      (e.read = function (t, e, r, i, n) {
        var s,
          o,
          a = 8 * n - i - 1,
          f = (1 << a) - 1,
          h = f >> 1,
          u = -7,
          c = r ? n - 1 : 0,
          l = r ? -1 : 1,
          p = t[e + c];
        for (c += l, s = p & ((1 << -u) - 1), p >>= -u, u += a; u > 0; s = 256 * s + t[e + c], c += l, u -= 8);
        for (o = s & ((1 << -u) - 1), s >>= -u, u += i; u > 0; o = 256 * o + t[e + c], c += l, u -= 8);
        if (0 === s) s = 1 - h;
        else {
          if (s === f) return o ? NaN : (1 / 0) * (p ? -1 : 1);
          (o += Math.pow(2, i)), (s -= h);
        }
        return (p ? -1 : 1) * o * Math.pow(2, s - i);
      }),
        (e.write = function (t, e, r, i, n, s) {
          var o,
            a,
            f,
            h = 8 * s - n - 1,
            u = (1 << h) - 1,
            c = u >> 1,
            l = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : s - 1,
            d = i ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (o = u))
                : ((o = Math.floor(Math.log(e) / Math.LN2)),
                  e * (f = Math.pow(2, -o)) < 1 && (o--, (f *= 2)),
                  (e += o + c >= 1 ? l / f : l * Math.pow(2, 1 - c)) * f >= 2 && (o++, (f /= 2)),
                  o + c >= u
                    ? ((a = 0), (o = u))
                    : o + c >= 1
                    ? ((a = (e * f - 1) * Math.pow(2, n)), (o += c))
                    : ((a = e * Math.pow(2, c - 1) * Math.pow(2, n)), (o = 0)));
            n >= 8;
            t[r + p] = 255 & a, p += d, a /= 256, n -= 8
          );
          for (o = (o << n) | a, h += n; h > 0; t[r + p] = 255 & o, p += d, o /= 256, h -= 8);
          t[r + p - d] |= 128 * m;
        });
    },
    function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    function (t, e, r) {
      (function (e) {
        const i = r(19),
          n = r(22);
        t.exports = (t, r, s = 70) => {
          const o = e.from(r),
            a = n(o);
          let f = 0,
            h = null,
            u = null,
            c = 0,
            l = 0;
          if (a && "image/bmp" === a.mime) {
            const e = i.decode(o);
            (h = t._malloc(e.data.length * Uint8Array.BYTES_PER_ELEMENT)), t.HEAPU8.set(e.data, h), (c = e.width), (l = e.height), (f = 4);
          } else {
            const e = t._malloc(o.length * Uint8Array.BYTES_PER_ELEMENT);
            t.HEAPU8.set(o, e),
              (u = t._pixReadMem(e, o.length)),
              0 === t.getValue(u + 28, "i32") && t.setValue(u + 28, s, "i32"),
              ([c, l] = Array(2)
                .fill(0)
                .map((e, r) => t.getValue(u + 4 * r, "i32")));
          }
          return { w: c, h: l, bytesPerPixel: f, data: h, pix: u };
        };
      }).call(this, r(0).Buffer);
    },
    function (t, e, r) {
      var i = r(20),
        n = r(21);
      t.exports = { encode: i, decode: n };
    },
    function (t, e, r) {
      (function (e) {
        function r(t) {
          (this.buffer = t.data),
            (this.width = t.width),
            (this.height = t.height),
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
          var t = new e(this.offset + this.rgbSize);
          (this.pos = 0),
            t.write(this.flag, this.pos, 2),
            (this.pos += 2),
            t.writeUInt32LE(this.fileSize, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.reserved, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.offset, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.headerInfoSize, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.width, this.pos),
            (this.pos += 4),
            t.writeInt32LE(-this.height, this.pos),
            (this.pos += 4),
            t.writeUInt16LE(this.planes, this.pos),
            (this.pos += 2),
            t.writeUInt16LE(this.bitPP, this.pos),
            (this.pos += 2),
            t.writeUInt32LE(this.compress, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.rgbSize, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.hr, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.vr, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.colors, this.pos),
            (this.pos += 4),
            t.writeUInt32LE(this.importantColors, this.pos),
            (this.pos += 4);
          for (var r = 0, i = 3 * this.width + this.extraBytes, n = 0; n < this.height; n++) {
            for (var s = 0; s < this.width; s++) {
              var o = this.pos + n * i + 3 * s;
              r++, (t[o] = this.buffer[r++]), (t[o + 1] = this.buffer[r++]), (t[o + 2] = this.buffer[r++]);
            }
            if (this.extraBytes > 0) {
              var a = this.pos + n * i + 3 * this.width;
              t.fill(0, a, a + this.extraBytes);
            }
          }
          return t;
        }),
          (t.exports = function (t, e) {
            return void 0 === e && (e = 100), { data: new r(t).encode(), width: t.width, height: t.height };
          });
      }).call(this, r(0).Buffer);
    },
    function (t, e, r) {
      (function (e) {
        function r(t, e) {
          if (
            ((this.pos = 0),
            (this.buffer = t),
            (this.is_with_alpha = !!e),
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
            var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
            this.palette = new Array(t);
            for (var e = 0; e < t; e++) {
              var r = this.buffer.readUInt8(this.pos++),
                i = this.buffer.readUInt8(this.pos++),
                n = this.buffer.readUInt8(this.pos++),
                s = this.buffer.readUInt8(this.pos++);
              this.palette[e] = { red: n, green: i, blue: r, quad: s };
            }
          }
          this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
        }),
          (r.prototype.parseRGBA = function () {
            var t = "bit" + this.bitPP,
              r = this.width * this.height * 4;
            (this.data = new e(r)), this[t]();
          }),
          (r.prototype.bit1 = function () {
            var t = Math.ceil(this.width / 8),
              e = t % 4,
              r = this.height >= 0 ? this.height - 1 : -this.height;
            for (r = this.height - 1; r >= 0; r--) {
              for (var i = this.bottom_up ? r : this.height - 1 - r, n = 0; n < t; n++)
                for (
                  var s = this.buffer.readUInt8(this.pos++), o = i * this.width * 4 + 8 * n * 4, a = 0;
                  a < 8 && 8 * n + a < this.width;
                  a++
                ) {
                  var f = this.palette[(s >> (7 - a)) & 1];
                  (this.data[o + 4 * a] = 0),
                    (this.data[o + 4 * a + 1] = f.blue),
                    (this.data[o + 4 * a + 2] = f.green),
                    (this.data[o + 4 * a + 3] = f.red);
                }
              0 != e && (this.pos += 4 - e);
            }
          }),
          (r.prototype.bit4 = function () {
            if (2 == this.compress) {
              this.data.fill(255);
              for (var t = 0, e = this.bottom_up ? this.height - 1 : 0, r = !1; t < this.data.length; ) {
                var i = this.buffer.readUInt8(this.pos++),
                  n = this.buffer.readUInt8(this.pos++);
                if (0 == i) {
                  if (0 == n) {
                    this.bottom_up ? e-- : e++, (t = e * this.width * 4), (r = !1);
                    continue;
                  }
                  if (1 == n) break;
                  if (2 == n) {
                    var s = this.buffer.readUInt8(this.pos++),
                      o = this.buffer.readUInt8(this.pos++);
                    this.bottom_up ? (e -= o) : (e += o), (t += o * this.width * 4 + 4 * s);
                  } else {
                    for (var a = this.buffer.readUInt8(this.pos++), f = 0; f < n; f++)
                      r ? h.call(this, 15 & a) : h.call(this, (240 & a) >> 4),
                        1 & f && f + 1 < n && (a = this.buffer.readUInt8(this.pos++)),
                        (r = !r);
                    1 == (((n + 1) >> 1) & 1) && this.pos++;
                  }
                } else for (f = 0; f < i; f++) r ? h.call(this, 15 & n) : h.call(this, (240 & n) >> 4), (r = !r);
              }
              function h(e) {
                var r = this.palette[e];
                (this.data[t] = 0), (this.data[t + 1] = r.blue), (this.data[t + 2] = r.green), (this.data[t + 3] = r.red), (t += 4);
              }
            } else {
              var u = Math.ceil(this.width / 2),
                c = u % 4;
              for (o = this.height - 1; o >= 0; o--) {
                var l = this.bottom_up ? o : this.height - 1 - o;
                for (s = 0; s < u; s++) {
                  (n = this.buffer.readUInt8(this.pos++)), (t = l * this.width * 4 + 2 * s * 4);
                  var p = n >> 4,
                    d = 15 & n,
                    m = this.palette[p];
                  if (
                    ((this.data[t] = 0),
                    (this.data[t + 1] = m.blue),
                    (this.data[t + 2] = m.green),
                    (this.data[t + 3] = m.red),
                    2 * s + 1 >= this.width)
                  )
                    break;
                  (m = this.palette[d]),
                    (this.data[t + 4] = 0),
                    (this.data[t + 4 + 1] = m.blue),
                    (this.data[t + 4 + 2] = m.green),
                    (this.data[t + 4 + 3] = m.red);
                }
                0 != c && (this.pos += 4 - c);
              }
            }
          }),
          (r.prototype.bit8 = function () {
            if (1 == this.compress) {
              this.data.fill(255);
              for (var t = 0, e = this.bottom_up ? this.height - 1 : 0; t < this.data.length; ) {
                var r = this.buffer.readUInt8(this.pos++),
                  i = this.buffer.readUInt8(this.pos++);
                if (0 == r) {
                  if (0 == i) {
                    this.bottom_up ? e-- : e++, (t = e * this.width * 4);
                    continue;
                  }
                  if (1 == i) break;
                  if (2 == i) {
                    var n = this.buffer.readUInt8(this.pos++),
                      s = this.buffer.readUInt8(this.pos++);
                    this.bottom_up ? (e -= s) : (e += s), (t += s * this.width * 4 + 4 * n);
                  } else {
                    for (var o = 0; o < i; o++) {
                      var a = this.buffer.readUInt8(this.pos++);
                      f.call(this, a);
                    }
                    !0 & i && this.pos++;
                  }
                } else for (o = 0; o < r; o++) f.call(this, i);
              }
              function f(e) {
                var r = this.palette[e];
                (this.data[t] = 0), (this.data[t + 1] = r.blue), (this.data[t + 2] = r.green), (this.data[t + 3] = r.red), (t += 4);
              }
            } else {
              var h = this.width % 4;
              for (s = this.height - 1; s >= 0; s--) {
                var u = this.bottom_up ? s : this.height - 1 - s;
                for (n = 0; n < this.width; n++) {
                  (i = this.buffer.readUInt8(this.pos++)), (t = u * this.width * 4 + 4 * n);
                  if (i < this.palette.length) {
                    var c = this.palette[i];
                    (this.data[t] = 0), (this.data[t + 1] = c.blue), (this.data[t + 2] = c.green), (this.data[t + 3] = c.red);
                  } else (this.data[t] = 0), (this.data[t + 1] = 255), (this.data[t + 2] = 255), (this.data[t + 3] = 255);
                }
                0 != h && (this.pos += 4 - h);
              }
            }
          }),
          (r.prototype.bit15 = function () {
            for (var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
              for (var i = this.bottom_up ? r : this.height - 1 - r, n = 0; n < this.width; n++) {
                var s = this.buffer.readUInt16LE(this.pos);
                this.pos += 2;
                var o = (((s & e) / e) * 255) | 0,
                  a = ((((s >> 5) & e) / e) * 255) | 0,
                  f = ((((s >> 10) & e) / e) * 255) | 0,
                  h = s >> 15 ? 255 : 0,
                  u = i * this.width * 4 + 4 * n;
                (this.data[u] = h), (this.data[u + 1] = o), (this.data[u + 2] = a), (this.data[u + 3] = f);
              }
              this.pos += t;
            }
          }),
          (r.prototype.bit16 = function () {
            var t = (this.width % 2) * 2;
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
            for (var e = [0, 0, 0], r = 0; r < 16; r++)
              (this.maskRed >> r) & 1 && e[0]++, (this.maskGreen >> r) & 1 && e[1]++, (this.maskBlue >> r) & 1 && e[2]++;
            (e[1] += e[0]), (e[2] += e[1]), (e[0] = 8 - e[0]), (e[1] -= 8), (e[2] -= 8);
            for (var i = this.height - 1; i >= 0; i--) {
              for (var n = this.bottom_up ? i : this.height - 1 - i, s = 0; s < this.width; s++) {
                var o = this.buffer.readUInt16LE(this.pos);
                this.pos += 2;
                var a = (o & this.maskBlue) << e[0],
                  f = (o & this.maskGreen) >> e[1],
                  h = (o & this.maskRed) >> e[2],
                  u = n * this.width * 4 + 4 * s;
                (this.data[u] = 0), (this.data[u + 1] = a), (this.data[u + 2] = f), (this.data[u + 3] = h);
              }
              this.pos += t;
            }
          }),
          (r.prototype.bit24 = function () {
            for (var t = this.height - 1; t >= 0; t--) {
              for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                var i = this.buffer.readUInt8(this.pos++),
                  n = this.buffer.readUInt8(this.pos++),
                  s = this.buffer.readUInt8(this.pos++),
                  o = e * this.width * 4 + 4 * r;
                (this.data[o] = 0), (this.data[o + 1] = i), (this.data[o + 2] = n), (this.data[o + 3] = s);
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
              for (var t = this.height - 1; t >= 0; t--)
                for (var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                  var i = this.buffer.readUInt8(this.pos++),
                    n = this.buffer.readUInt8(this.pos++),
                    s = this.buffer.readUInt8(this.pos++),
                    o = this.buffer.readUInt8(this.pos++),
                    a = e * this.width * 4 + 4 * r;
                  (this.data[a] = i), (this.data[a + 1] = n), (this.data[a + 2] = s), (this.data[a + 3] = o);
                }
            } else
              for (t = this.height - 1; t >= 0; t--)
                for (e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
                  (n = this.buffer.readUInt8(this.pos++)),
                    (s = this.buffer.readUInt8(this.pos++)),
                    (o = this.buffer.readUInt8(this.pos++)),
                    (i = this.buffer.readUInt8(this.pos++)),
                    (a = e * this.width * 4 + 4 * r);
                  (this.data[a] = i), (this.data[a + 1] = n), (this.data[a + 2] = s), (this.data[a + 3] = o);
                }
          }),
          (r.prototype.getData = function () {
            return this.data;
          }),
          (t.exports = function (t) {
            return new r(t);
          });
      }).call(this, r(0).Buffer);
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      (function (Buffer) {
        const toBytes = (t) => [...t].map((t) => t.charCodeAt(0)),
          xpiZipFilename = toBytes("META-INF/mozilla.rsa"),
          oxmlContentTypes = toBytes("[Content_Types].xml"),
          oxmlRels = toBytes("_rels/.rels");
        function readUInt64LE(t, e = 0) {
          let r = t[e],
            i = 1,
            n = 0;
          for (; ++n < 8; ) (i *= 256), (r += t[e + n] * i);
          return r;
        }
        const fileType = (t) => {
          if (!(t instanceof Uint8Array || t instanceof ArrayBuffer || Buffer.isBuffer(t)))
            throw new TypeError(
              `Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof t}\``
            );
          const e = t instanceof Uint8Array ? t : new Uint8Array(t);
          if (!(e && e.length > 1)) return null;
          const r = (t, r) => {
              r = Object.assign({ offset: 0 }, r);
              for (let i = 0; i < t.length; i++)
                if (r.mask) {
                  if (t[i] !== (r.mask[i] & e[i + r.offset])) return !1;
                } else if (t[i] !== e[i + r.offset]) return !1;
              return !0;
            },
            i = (t, e) => r(toBytes(t), e);
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
            if (i("mimetypeapplication/vnd.oasis.opendocument.text", { offset: 30 }))
              return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
            if (i("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", { offset: 30 }))
              return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
            if (i("mimetypeapplication/vnd.oasis.opendocument.presentation", { offset: 30 }))
              return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
            const t = (t, e = 0) => t.findIndex((t, r, i) => r >= e && 80 === i[r] && 75 === i[r + 1] && 3 === i[r + 2] && 4 === i[r + 3]);
            let n = 0,
              s = !1,
              o = null;
            do {
              const a = n + 30;
              if (
                (s || (s = r(oxmlContentTypes, { offset: a }) || r(oxmlRels, { offset: a })),
                o ||
                  (i("word/", { offset: a })
                    ? (o = { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })
                    : i("ppt/", { offset: a })
                    ? (o = { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" })
                    : i("xl/", { offset: a }) &&
                      (o = { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })),
                s && o)
              )
                return o;
              n = t(e, a);
            } while (n >= 0);
            if (o) return o;
          }
          if (r([80, 75]) && (3 === e[2] || 5 === e[2] || 7 === e[2]) && (4 === e[3] || 6 === e[3] || 8 === e[3]))
            return { ext: "zip", mime: "application/zip" };
          if (r([117, 115, 116, 97, 114], { offset: 257 })) return { ext: "tar", mime: "application/x-tar" };
          if (r([82, 97, 114, 33, 26, 7]) && (0 === e[6] || 1 === e[6])) return { ext: "rar", mime: "application/x-rar-compressed" };
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
            const t = e.subarray(4, 4100),
              r = t.findIndex((t, e, r) => 66 === r[e] && 130 === r[e + 1]);
            if (-1 !== r) {
              const e = r + 3,
                i = (r) => [...r].every((r, i) => t[e + i] === r.charCodeAt(0));
              if (i("matroska")) return { ext: "mkv", mime: "video/x-matroska" };
              if (i("webm")) return { ext: "webm", mime: "video/webm" };
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
            let t = 30;
            do {
              const i = readUInt64LE(e, t + 16);
              if (r([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], { offset: t })) {
                if (r([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], { offset: t + 24 }))
                  return { ext: "wma", mime: "audio/x-ms-wma" };
                if (r([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], { offset: t + 24 }))
                  return { ext: "wmv", mime: "video/x-ms-asf" };
                break;
              }
              t += i;
            } while (t + 24 <= e.length);
            return { ext: "asf", mime: "application/vnd.ms-asf" };
          }
          if (r([0, 0, 1, 186]) || r([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
          if (r([102, 116, 121, 112, 51, 103], { offset: 4 })) return { ext: "3gp", mime: "video/3gpp" };
          for (let t = 0; t < 2 && t < e.length - 16; t++) {
            if (r([73, 68, 51], { offset: t }) || r([255, 226], { offset: t, mask: [255, 226] })) return { ext: "mp3", mime: "audio/mpeg" };
            if (r([255, 228], { offset: t, mask: [255, 228] })) return { ext: "mp2", mime: "audio/mpeg" };
            if (r([255, 248], { offset: t, mask: [255, 252] })) return { ext: "mp2", mime: "audio/mpeg" };
            if (r([255, 240], { offset: t, mask: [255, 252] })) return { ext: "mp4", mime: "audio/mpeg" };
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
          if ((67 === e[0] || 70 === e[0]) && r([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
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
          if (i("<?xml ")) return { ext: "xml", mime: "application/xml" };
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
                const t = new stream.PassThrough(),
                  e = readableStream.read(module.exports.minimumBytes) || readableStream.read();
                try {
                  t.fileType = fileType(e);
                } catch (t) {
                  reject(t);
                }
                readableStream.unshift(e),
                  stream.pipeline ? resolve(stream.pipeline(readableStream, t, () => {})) : resolve(readableStream.pipe(t));
              });
            }));
      }).call(this, __webpack_require__(0).Buffer);
    },
    function (t, e, r) {
      (function (e) {
        const i = r(3),
          n = e.browser ? r(2) : (t) => t,
          s = r(4),
          o = r(26),
          a = r(27);
        t.exports = class {
          constructor(t = {}) {
            (this.worker = null),
              (this.options = { ...s.defaultOptions, ...t }),
              ["corePath", "workerPath", "langPath"].forEach((e) => {
                i.not.undefined(t[e]) && (this.options = { ...this.options, [e]: n(t[e]) });
              }),
              (this._currentJob = null),
              (this._queue = []);
          }
          recognize(t, e = "eng", r = {}) {
            return this._sendJob("recognize", t, e, r);
          }
          detect(t, e = {}) {
            return this._sendJob("detect", t, "osd", e);
          }
          recv(t) {
            this._currentJob.id === t.jobId
              ? this._currentJob.handle({ ...t, data: "resolve" === t.status && "recognize" === t.action ? o(t.data) : t.data })
              : console.warn(`Job ID ${t.jobId} not known.`);
          }
          dequeue() {
            (this._currentJob = null), this._queue.length && this._queue[0]();
          }
          terminate() {
            this.worker && s.terminateWorker(this), (this.worker = null), (this._currentJob = null), (this._queue = []);
          }
          _sendJob(t, e, r, i) {
            return this._delay((n) => {
              n.send(t, { image: e, lang: r, params: i, options: this.options });
            });
          }
          _delay(t) {
            i.null(this.worker) && (this.worker = s.spawnWorker(this, this.options));
            const e = new a(this);
            return (
              this._queue.push(() => {
                this._queue.shift(), (this._currentJob = e), t(e);
              }),
              i.null(this._currentJob) && this.dequeue(),
              e
            );
          }
        };
      }).call(this, r(1));
    },
    function (t, e) {
      t.exports = { defaultOptions: { langPath: "https://tessdata.projectnaptha.com/4.0.0" } };
    },
    function (t) {
      t.exports = {
        name: "tesseract.js",
        version: "2.0.0-alpha.4",
        description: "Pure Javascript Multilingual OCR",
        main: "src/index.js",
        scripts: {
          start: "node scripts/server.js",
          build: "webpack --config scripts/webpack.config.prod.js",
          prepublishOnly: "npm run build",
          wait: "wait-on http://localhost:3000/package.json",
          test: "npm-run-all -p -r start test:all",
          "test:all": "npm-run-all wait test:browser:* test:node",
          "test:node": "nyc mocha --exit --bail --require ./scripts/test-helper.js ./tests/*.test.js",
          "test:browser-tpl": "mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -t 300000",
          "test:browser:detect": "npm run test:browser-tpl -- -f ./tests/browser/detect.test.html",
          "test:browser:recognize": "npm run test:browser-tpl -- -f ./tests/browser/recognize.test.html",
          lint: "eslint src"
        },
        browser: { "./src/node/index.js": "./src/browser/index.js" },
        author: "",
        contributors: ["jeromewu"],
        license: "Apache-2.0",
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
        dependencies: {
          "check-types": "^7.4.0",
          "is-url": "1.2.2",
          "node-fetch": "^2.3.0",
          "resolve-url": "^0.2.1",
          "tesseract.js-core": "^2.0.0-beta.8",
          "tesseract.js-utils": "^1.0.0-beta.5"
        },
        repository: { type: "git", url: "https://github.com/naptha/tesseract.js.git" },
        bugs: { url: "https://github.com/naptha/tesseract.js/issues" },
        homepage: "https://github.com/naptha/tesseract.js"
      };
    },
    function (t, e) {
      t.exports = (t) => {
        const e = { ...t, paragraphs: [], lines: [], words: [], symbols: [] };
        return (
          e.blocks.forEach((t) => {
            const r = { ...t, page: e, lines: [], words: [], symbols: [] };
            r.paragraphs.forEach((t) => {
              const i = { ...t, block: r, page: e, words: [], symbols: [] };
              i.lines.forEach((t) => {
                const n = { ...t, paragraph: i, block: r, page: e, symbols: [] };
                n.words.forEach((t) => {
                  const s = { ...t, line: n, paragraph: i, block: r, page: e };
                  s.symbols.forEach((t) => {
                    const o = { ...t, word: s, line: n, paragraph: i, block: r, page: e };
                    o.line.symbols.push(o), o.paragraph.symbols.push(o), o.block.symbols.push(o), o.page.symbols.push(o);
                  }),
                    s.paragraph.words.push(s),
                    s.block.words.push(s),
                    s.page.words.push(s);
                }),
                  n.block.lines.push(n),
                  n.page.lines.push(n);
              }),
                i.page.paragraphs.push(i);
            });
          }),
          e
        );
      };
    },
    function (t, e, r) {
      const i = r(4);
      let n = 0;
      t.exports = class {
        constructor(t) {
          (n += 1),
            (this.id = `Job-${n}-${Math.random().toString(16).slice(3, 8)}`),
            (this._worker = t),
            (this._resolve = []),
            (this._reject = []),
            (this._progress = []),
            (this._finally = []);
        }
        then(t, e) {
          return this._resolve.push ? this._resolve.push(t) : t(this._resolve), e && this.catch(e), this;
        }
        catch(t) {
          return this._reject.push ? this._reject.push(t) : t(this._reject), this;
        }
        progress(t) {
          return this._progress.push(t), this;
        }
        finally(t) {
          return this._finally.push(t), this;
        }
        send(t, e) {
          i.sendPacket(this._worker, { jobId: this.id, action: t, payload: e });
        }
        handle(t) {
          const { data: e } = t;
          let r = !1;
          "resolve" === t.status
            ? (0 === this._resolve.length && console.log(e),
              this._resolve.forEach((t) => {
                const r = t(e);
                r &&
                  "function" == typeof r.then &&
                  console.warn(
                    "TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve."
                  );
              }),
              (this._resolve = e),
              this._worker.dequeue(),
              (r = !0))
            : "reject" === t.status
            ? (0 === this._reject.length && console.error(e),
              this._reject.forEach((t) => t(e)),
              (this._reject = e),
              this._worker.dequeue(),
              (r = !0))
            : "progress" === t.status
            ? this._progress.forEach((t) => t(e))
            : console.warn("Message type unknown", t.status),
            r && this._finally.forEach((t) => t(e));
        }
      };
    },
    function (t, e) {
      t.exports = { OEM: { TESSERACT_ONLY: 0, LSTM_ONLY: 1, TESSERACT_LSTM_COMBINED: 2, DEFAULT: 3, COUNT: 4 } };
    }
  ]);
});
//# sourceMappingURL=tesseract.min.js.map
