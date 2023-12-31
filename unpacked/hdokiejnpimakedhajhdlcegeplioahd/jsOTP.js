!(function (t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : (("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).buffer =
        t());
})(function () {
  return (function n(o, i, u) {
    function f(e, t) {
      if (!i[e]) {
        if (!o[e]) {
          var r = "function" == typeof require && require;
          if (!t && r) return r(e, !0);
          if (s) return s(e, !0);
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        var r = (i[e] = { exports: {} });
        o[e][0].call(
          r.exports,
          function (t) {
            return f(o[e][1][t] || t);
          },
          r,
          r.exports,
          n,
          o,
          i,
          u
        );
      }
      return i[e].exports;
    }
    for (var s = "function" == typeof require && require, t = 0; t < u.length; t++) f(u[t]);
    return f;
  })(
    {
      1: [
        function (z, t, F) {
          !function (h) {
            "use strict";
            var n = z("base64-js"),
              i = z("ieee754"),
              t = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null,
              e =
                ((F.Buffer = h),
                (F.SlowBuffer = function (t) {
                  return h.alloc(+(t = +t != t ? 0 : t));
                }),
                (F.INSPECT_MAX_BYTES = 50),
                2147483647);
            function c(t) {
              if (e < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
              var t = new Uint8Array(t);
              return Object.setPrototypeOf(t, h.prototype), t;
            }
            function h(t, e, r) {
              if ("number" != typeof t) return o(t, e, r);
              if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
              return f(t);
            }
            function o(t, e, r) {
              if ("string" == typeof t) {
                var n = t,
                  o = e,
                  i,
                  u,
                  n;
                if (h.isEncoding((o = "string" == typeof o && "" !== o ? o : "utf8")))
                  return (n = (u = c((i = 0 | y(n, o)))).write(n, o)) !== i ? u.slice(0, n) : u;
                throw new TypeError("Unknown encoding: " + o);
              }
              if (ArrayBuffer.isView(t)) return l(t);
              if (null != t) {
                if (C(t, ArrayBuffer) || (t && C(t.buffer, ArrayBuffer))) {
                  var i = t;
                  var n = e;
                  var u = r;
                  if (n < 0 || i.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
                  if (i.byteLength < n + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
                  var i,
                    i = void 0 === n && void 0 === u ? new Uint8Array(i) : void 0 === u ? new Uint8Array(i, n) : new Uint8Array(i, n, u);
                  return Object.setPrototypeOf(i, h.prototype), i;
                  return;
                }
                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var o = t.valueOf && t.valueOf();
                if (null != o && o !== t) return h.from(o, e, r);
                var f = h.isBuffer((s = t))
                    ? (0 !== (a = c((f = 0 | p(s.length)))).length && s.copy(a, 0, 0, f), a)
                    : void 0 !== s.length
                    ? "number" != typeof s.length || R(s.length)
                      ? c(0)
                      : l(s)
                    : "Buffer" === s.type && Array.isArray(s.data)
                    ? l(s.data)
                    : void 0,
                  s,
                  f,
                  a;
                if (f) return f;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                  return h.from(t[Symbol.toPrimitive]("string"), e, r);
              }
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
              );
            }
            function u(t) {
              if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
              if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            }
            function f(t) {
              return u(t), c(t < 0 ? 0 : 0 | p(t));
            }
            function l(t) {
              for (var e = t.length < 0 ? 0 : 0 | p(t.length), r = c(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
              return r;
            }
            function p(t) {
              if (e <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e.toString(16) + " bytes");
              return 0 | t;
            }
            function y(t, e) {
              if (h.isBuffer(t)) return t.length;
              if (ArrayBuffer.isView(t) || C(t, ArrayBuffer)) return t.byteLength;
              if ("string" != typeof t)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
              var r = t.length,
                n = 2 < arguments.length && !0 === arguments[2];
              if (!n && 0 === r) return 0;
              for (var o = !1; ; )
                switch (e) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r;
                  case "utf8":
                  case "utf-8":
                    return P(t).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * r;
                  case "hex":
                    return r >>> 1;
                  case "base64":
                    return I(t).length;
                  default:
                    if (o) return n ? -1 : P(t).length;
                    (e = ("" + e).toLowerCase()), (o = !0);
                }
            }
            function r(t, e, r) {
              var n = t[e];
              (t[e] = t[r]), (t[r] = n);
            }
            function s(t, e, r, n, o) {
              if (0 === t.length) return -1;
              if (
                ("string" == typeof r ? ((n = r), (r = 0)) : 2147483647 < r ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
                (r = (r = R((r = +r)) ? (o ? 0 : t.length - 1) : r) < 0 ? t.length + r : r) >= t.length)
              ) {
                if (o) return -1;
                r = t.length - 1;
              } else if (r < 0) {
                if (!o) return -1;
                r = 0;
              }
              if (("string" == typeof e && (e = h.from(e, n)), h.isBuffer(e))) return 0 === e.length ? -1 : a(t, e, r, n, o);
              if ("number" == typeof e)
                return (
                  (e &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? (o ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(t, e, r)
                    : a(t, [e], r, n, o)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function a(t, e, r, n, o) {
              var i,
                u = 1,
                f = t.length,
                s = e.length;
              if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                (f /= u = 2), (s /= 2), (r /= 2);
              }
              function a(t, e) {
                return 1 === u ? t[e] : t.readUInt16BE(e * u);
              }
              if (o)
                for (var c = -1, i = r; i < f; i++)
                  if (a(t, i) === a(e, -1 === c ? 0 : i - c)) {
                    if (i - (c = -1 === c ? i : c) + 1 === s) return c * u;
                  } else -1 !== c && (i -= i - c), (c = -1);
              else
                for (i = r = f < r + s ? f - s : r; 0 <= i; i--) {
                  for (var h = !0, l = 0; l < s; l++)
                    if (a(t, i + l) !== a(e, l)) {
                      h = !1;
                      break;
                    }
                  if (h) return i;
                }
              return -1;
            }
            function g(t, e, r, n) {
              r = Number(r) || 0;
              var o = t.length - r,
                o = ((!n || (n = Number(n)) > o) && (n = o), e.length);
              o / 2 < n && (n = o / 2);
              for (var i = 0; i < n; ++i) {
                var u = parseInt(e.substr(2 * i, 2), 16);
                if (R(u)) return i;
                t[r + i] = u;
              }
              return i;
            }
            function w(t, e, r, n) {
              return T(P(e, t.length - r), t, r, n);
            }
            function d(t, e, r, n) {
              return T(
                (function (t) {
                  for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                  return e;
                })(e),
                t,
                r,
                n
              );
            }
            function b(t, e, r, n) {
              return d(t, e, r, n);
            }
            function v(t, e, r, n) {
              return T(I(e), t, r, n);
            }
            function m(t, e, r, n) {
              return T(
                (function (t, e) {
                  for (var r, n, o, i = [], u = 0; u < t.length && !((e -= 2) < 0); ++u)
                    (n = (r = t.charCodeAt(u)) >> 8), i.push((o = r % 256)), i.push(n);
                  return i;
                })(e, t.length - r),
                t,
                r,
                n
              );
            }
            function E(t, e, r) {
              return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
            }
            function O(t, e, r) {
              r = Math.min(t.length, r);
              for (var n = [], o = e; o < r; ) {
                var i,
                  u,
                  f,
                  s,
                  a = t[o],
                  c = null,
                  h = 239 < a ? 4 : 223 < a ? 3 : 191 < a ? 2 : 1;
                if (o + h <= r)
                  switch (h) {
                    case 1:
                      a < 128 && (c = a);
                      break;
                    case 2:
                      128 == (192 & (i = t[o + 1])) && 127 < (s = ((31 & a) << 6) | (63 & i)) && (c = s);
                      break;
                    case 3:
                      (i = t[o + 1]),
                        (u = t[o + 2]),
                        128 == (192 & i) &&
                          128 == (192 & u) &&
                          2047 < (s = ((15 & a) << 12) | ((63 & i) << 6) | (63 & u)) &&
                          (s < 55296 || 57343 < s) &&
                          (c = s);
                      break;
                    case 4:
                      (i = t[o + 1]),
                        (u = t[o + 2]),
                        (f = t[o + 3]),
                        128 == (192 & i) &&
                          128 == (192 & u) &&
                          128 == (192 & f) &&
                          65535 < (s = ((15 & a) << 18) | ((63 & i) << 12) | ((63 & u) << 6) | (63 & f)) &&
                          s < 1114112 &&
                          (c = s);
                  }
                null === c
                  ? ((c = 65533), (h = 1))
                  : 65535 < c && (n.push((((c -= 65536) >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))),
                  n.push(c),
                  (o += h);
              }
              var l = n,
                p = l.length;
              if (p <= B) return String.fromCharCode.apply(String, l);
              for (var y = "", g = 0; g < p; ) y += String.fromCharCode.apply(String, l.slice(g, (g += B)));
              return y;
            }
            (F.kMaxLength = e),
              (h.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var t = new Uint8Array(1),
                    e = {
                      foo: function () {
                        return 42;
                      }
                    };
                  return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
                } catch (t) {
                  return !1;
                }
              })()) ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error(
                  "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                ),
              Object.defineProperty(h.prototype, "parent", {
                enumerable: !0,
                get: function () {
                  if (h.isBuffer(this)) return this.buffer;
                }
              }),
              Object.defineProperty(h.prototype, "offset", {
                enumerable: !0,
                get: function () {
                  if (h.isBuffer(this)) return this.byteOffset;
                }
              }),
              "undefined" != typeof Symbol &&
                null != Symbol.species &&
                h[Symbol.species] === h &&
                Object.defineProperty(h, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }),
              (h.poolSize = 8192),
              (h.from = o),
              Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
              Object.setPrototypeOf(h, Uint8Array),
              (h.alloc = function (t, e, r) {
                return (
                  (e = e), (r = r), u((t = t)), !(t <= 0) && void 0 !== e ? ("string" == typeof r ? c(t).fill(e, r) : c(t).fill(e)) : c(t)
                );
                var t, e, r;
              }),
              (h.allocUnsafe = f),
              (h.allocUnsafeSlow = f),
              (h.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== h.prototype;
              }),
              (h.compare = function (t, e) {
                if (
                  (C(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
                  C(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
                  !h.isBuffer(t) || !h.isBuffer(e))
                )
                  throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
                  if (t[o] !== e[o]) {
                    (r = t[o]), (n = e[o]);
                    break;
                  }
                return r < n ? -1 : n < r ? 1 : 0;
              }),
              (h.isEncoding = function (t) {
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
              (h.concat = function (t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return h.alloc(0);
                var r;
                if (void 0 === e) for (r = e = 0; r < t.length; ++r) e += t[r].length;
                for (var n = h.allocUnsafe(e), o = 0, r = 0; r < t.length; ++r) {
                  var i = t[r];
                  if ((C(i, Uint8Array) && (i = h.from(i)), !h.isBuffer(i)))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  i.copy(n, o), (o += i.length);
                }
                return n;
              }),
              (h.byteLength = y),
              (h.prototype._isBuffer = !0),
              (h.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) r(this, e, e + 1);
                return this;
              }),
              (h.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) r(this, e, e + 3), r(this, e + 1, e + 2);
                return this;
              }),
              (h.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) r(this, e, e + 7), r(this, e + 1, e + 6), r(this, e + 2, e + 5), r(this, e + 3, e + 4);
                return this;
              }),
              (h.prototype.toLocaleString = h.prototype.toString =
                function () {
                  var t = this.length;
                  return 0 === t
                    ? ""
                    : 0 === arguments.length
                    ? O(this, 0, t)
                    : function (t, e, r) {
                        var n = !1;
                        if ((e = void 0 === e || e < 0 ? 0 : e) > this.length) return "";
                        if ((r = void 0 === r || r > this.length ? this.length : r) <= 0) return "";
                        if ((r >>>= 0) <= (e >>>= 0)) return "";
                        for (t = t || "utf8"; ; )
                          switch (t) {
                            case "hex":
                              return L(this, e, r);
                            case "utf8":
                            case "utf-8":
                              return O(this, e, r);
                            case "ascii":
                              return A(this, e, r);
                            case "latin1":
                            case "binary":
                              return S(this, e, r);
                            case "base64":
                              return E(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                              return H(this, e, r);
                            default:
                              if (n) throw new TypeError("Unknown encoding: " + t);
                              (t = (t + "").toLowerCase()), (n = !0);
                          }
                      }.apply(this, arguments);
                }),
              (h.prototype.equals = function (t) {
                if (h.isBuffer(t)) return this === t || 0 === h.compare(this, t);
                throw new TypeError("Argument must be a Buffer");
              }),
              (h.prototype.inspect = function () {
                var t = "",
                  e = F.INSPECT_MAX_BYTES,
                  t = this.toString("hex", 0, e)
                    .replace(/(.{2})/g, "$1 ")
                    .trim();
                return this.length > e && (t += " ... "), "<Buffer " + t + ">";
              }),
              t && (h.prototype[t] = h.prototype.inspect),
              (h.prototype.compare = function (t, e, r, n, o) {
                if ((C(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)))
                  throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (
                  (void 0 === r && (r = t ? t.length : 0),
                  void 0 === n && (n = 0),
                  void 0 === o && (o = this.length),
                  (e = void 0 === e ? 0 : e) < 0 || r > t.length || n < 0 || o > this.length)
                )
                  throw new RangeError("out of range index");
                if (o <= n && r <= e) return 0;
                if (o <= n) return -1;
                if (r <= e) return 1;
                if (this === t) return 0;
                for (
                  var i = (o >>>= 0) - (n >>>= 0),
                    u = (r >>>= 0) - (e >>>= 0),
                    f = Math.min(i, u),
                    s = this.slice(n, o),
                    a = t.slice(e, r),
                    c = 0;
                  c < f;
                  ++c
                )
                  if (s[c] !== a[c]) {
                    (i = s[c]), (u = a[c]);
                    break;
                  }
                return i < u ? -1 : u < i ? 1 : 0;
              }),
              (h.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r);
              }),
              (h.prototype.indexOf = function (t, e, r) {
                return s(this, t, e, r, !0);
              }),
              (h.prototype.lastIndexOf = function (t, e, r) {
                return s(this, t, e, r, !1);
              }),
              (h.prototype.write = function (t, e, r, n) {
                if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                else {
                  if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                }
                var o = this.length - e;
                if (((void 0 === r || o < r) && (r = o), (0 < t.length && (r < 0 || e < 0)) || e > this.length))
                  throw new RangeError("Attempt to write outside buffer bounds");
                n = n || "utf8";
                for (var i = !1; ; )
                  switch (n) {
                    case "hex":
                      return g(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                      return w(this, t, e, r);
                    case "ascii":
                      return d(this, t, e, r);
                    case "latin1":
                    case "binary":
                      return b(this, t, e, r);
                    case "base64":
                      return v(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return m(this, t, e, r);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + n);
                      (n = ("" + n).toLowerCase()), (i = !0);
                  }
              }),
              (h.prototype.toJSON = function () {
                return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
              });
            var B = 4096;
            function A(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);
              for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
              return n;
            }
            function S(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);
              for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
              return n;
            }
            function L(t, e, r) {
              var n = t.length;
              (!r || r < 0 || n < r) && (r = n);
              for (var o = "", i = (e = !e || e < 0 ? 0 : e); i < r; ++i) o += D[t[i]];
              return o;
            }
            function H(t, e, r) {
              for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
              return o;
            }
            function _(t, e, r) {
              if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
              if (r < t + e) throw new RangeError("Trying to access beyond buffer length");
            }
            function j(t, e, r, n, o, i) {
              if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (o < e || e < i) throw new RangeError('"value" argument is out of bounds');
              if (r + n > t.length) throw new RangeError("Index out of range");
            }
            function x(t, e, r, n, o, i) {
              if (r + n > t.length) throw new RangeError("Index out of range");
              if (r < 0) throw new RangeError("Index out of range");
            }
            function U(t, e, r, n, o) {
              return (e = +e), (r >>>= 0), o || x(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
            }
            function k(t, e, r, n, o) {
              return (e = +e), (r >>>= 0), o || x(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
            }
            (h.prototype.slice = function (t, e) {
              var r = this.length,
                r =
                  ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r),
                  (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
                  e < t && (e = t),
                  this.subarray(t, e));
              return Object.setPrototypeOf(r, h.prototype), r;
            }),
              (h.prototype.readUIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) n += this[t + i] * o;
                return n;
              }),
              (h.prototype.readUIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
                for (var n = this[t + --e], o = 1; 0 < e && (o *= 256); ) n += this[t + --e] * o;
                return n;
              }),
              (h.prototype.readUInt8 = function (t, e) {
                return (t >>>= 0), e || _(t, 1, this.length), this[t];
              }),
              (h.prototype.readUInt16LE = function (t, e) {
                return (t >>>= 0), e || _(t, 2, this.length), this[t] | (this[t + 1] << 8);
              }),
              (h.prototype.readUInt16BE = function (t, e) {
                return (t >>>= 0), e || _(t, 2, this.length), (this[t] << 8) | this[t + 1];
              }),
              (h.prototype.readUInt32LE = function (t, e) {
                return (t >>>= 0), e || _(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
              }),
              (h.prototype.readUInt32BE = function (t, e) {
                return (t >>>= 0), e || _(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
              }),
              (h.prototype.readIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) n += this[t + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
              }),
              (h.prototype.readIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
                for (var n = e, o = 1, i = this[t + --n]; 0 < n && (o *= 256); ) i += this[t + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
              }),
              (h.prototype.readInt8 = function (t, e) {
                return (t >>>= 0), e || _(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
              }),
              (h.prototype.readInt16LE = function (t, e) {
                (t >>>= 0), e || _(t, 2, this.length);
                var e = this[t] | (this[t + 1] << 8);
                return 32768 & e ? 4294901760 | e : e;
              }),
              (h.prototype.readInt16BE = function (t, e) {
                (t >>>= 0), e || _(t, 2, this.length);
                var e = this[t + 1] | (this[t] << 8);
                return 32768 & e ? 4294901760 | e : e;
              }),
              (h.prototype.readInt32LE = function (t, e) {
                return (t >>>= 0), e || _(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
              }),
              (h.prototype.readInt32BE = function (t, e) {
                return (t >>>= 0), e || _(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
              }),
              (h.prototype.readFloatLE = function (t, e) {
                return (t >>>= 0), e || _(t, 4, this.length), i.read(this, t, !0, 23, 4);
              }),
              (h.prototype.readFloatBE = function (t, e) {
                return (t >>>= 0), e || _(t, 4, this.length), i.read(this, t, !1, 23, 4);
              }),
              (h.prototype.readDoubleLE = function (t, e) {
                return (t >>>= 0), e || _(t, 8, this.length), i.read(this, t, !0, 52, 8);
              }),
              (h.prototype.readDoubleBE = function (t, e) {
                return (t >>>= 0), e || _(t, 8, this.length), i.read(this, t, !1, 52, 8);
              }),
              (h.prototype.writeUIntLE = function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                  i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256); ) this[e + i] = (t / o) & 255;
                return e + r;
              }),
              (h.prototype.writeUIntBE = function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                  i = 1;
                for (this[e + o] = 255 & t; 0 <= --o && (i *= 256); ) this[e + o] = (t / i) & 255;
                return e + r;
              }),
              (h.prototype.writeUInt8 = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || j(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
              }),
              (h.prototype.writeUInt16LE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || j(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
              }),
              (h.prototype.writeUInt16BE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || j(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
              }),
              (h.prototype.writeUInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || j(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
              (h.prototype.writeUInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || j(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (h.prototype.writeIntLE = function (t, e, r, n) {
                var n,
                  o = ((t = +t), (e >>>= 0), n || j(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n), 0),
                  i = 1,
                  u = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256); )
                  t < 0 && 0 === u && 0 !== this[e + o - 1] && (u = 1), (this[e + o] = (((t / i) >> 0) - u) & 255);
                return e + r;
              }),
              (h.prototype.writeIntBE = function (t, e, r, n) {
                var n,
                  o = ((t = +t), (e >>>= 0), n || j(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n), r - 1),
                  i = 1,
                  u = 0;
                for (this[e + o] = 255 & t; 0 <= --o && (i *= 256); )
                  t < 0 && 0 === u && 0 !== this[e + o + 1] && (u = 1), (this[e + o] = (((t / i) >> 0) - u) & 255);
                return e + r;
              }),
              (h.prototype.writeInt8 = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || j(this, t, e, 1, 127, -128), (this[e] = 255 & (t = t < 0 ? 255 + t + 1 : t)), e + 1;
              }),
              (h.prototype.writeInt16LE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || j(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
              }),
              (h.prototype.writeInt16BE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || j(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
              }),
              (h.prototype.writeInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || j(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                );
              }),
              (h.prototype.writeInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || j(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = (t = t < 0 ? 4294967295 + t + 1 : t) >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (h.prototype.writeFloatLE = function (t, e, r) {
                return U(this, t, e, !0, r);
              }),
              (h.prototype.writeFloatBE = function (t, e, r) {
                return U(this, t, e, !1, r);
              }),
              (h.prototype.writeDoubleLE = function (t, e, r) {
                return k(this, t, e, !0, r);
              }),
              (h.prototype.writeDoubleBE = function (t, e, r) {
                return k(this, t, e, !1, r);
              }),
              (h.prototype.copy = function (t, e, r, n) {
                if (!h.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (((r = r || 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), (n = 0 < n && n < r ? r : n) === r))
                  return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if ((e = e || 0) < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length);
                var o = (n = t.length - e < n - r ? t.length - e + r : n) - r;
                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                else if (this === t && r < e && e < n) for (var i = o - 1; 0 <= i; --i) t[i + e] = this[i + r];
                else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                return o;
              }),
              (h.prototype.fill = function (t, e, r, n) {
                if ("string" == typeof t) {
                  if (
                    ("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
                    void 0 !== n && "string" != typeof n)
                  )
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof n && !h.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                  var o;
                  1 === t.length && ((o = t.charCodeAt(0)), ("utf8" === n && o < 128) || "latin1" === n) && (t = o);
                } else "number" == typeof t ? (t &= 255) : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                var i;
                if (!(r <= e))
                  if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), "number" == typeof (t = t || 0)))
                    for (i = e; i < r; ++i) this[i] = t;
                  else {
                    var u = h.isBuffer(t) ? t : h.from(t, n),
                      f = u.length;
                    if (0 === f) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = u[i % f];
                  }
                return this;
              });
            var M = /[^+\/0-9A-Za-z-_]/g;
            function P(t, e) {
              var r;
              e = e || 1 / 0;
              for (var n = t.length, o = null, i = [], u = 0; u < n; ++u) {
                if (55295 < (r = t.charCodeAt(u)) && r < 57344) {
                  if (!o) {
                    if (56319 < r) {
                      -1 < (e -= 3) && i.push(239, 191, 189);
                      continue;
                    }
                    if (u + 1 === n) {
                      -1 < (e -= 3) && i.push(239, 191, 189);
                      continue;
                    }
                    o = r;
                    continue;
                  }
                  if (r < 56320) {
                    -1 < (e -= 3) && i.push(239, 191, 189), (o = r);
                    continue;
                  }
                  r = 65536 + (((o - 55296) << 10) | (r - 56320));
                } else o && -1 < (e -= 3) && i.push(239, 191, 189);
                if (((o = null), r < 128)) {
                  if (--e < 0) break;
                  i.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  i.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                } else {
                  if (!(r < 1114112)) throw new Error("Invalid code point");
                  if ((e -= 4) < 0) break;
                  i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                }
              }
              return i;
            }
            function I(t) {
              return n.toByteArray(
                (function (t) {
                  if ((t = (t = t.split("=")[0]).trim().replace(M, "")).length < 2) return "";
                  for (; t.length % 4 != 0; ) t += "=";
                  return t;
                })(t)
              );
            }
            function T(t, e, r, n) {
              for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
              return o;
            }
            function C(t, e) {
              return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
            }
            function R(t) {
              return t != t;
            }
            var D = (function () {
              for (var t = new Array(256), e = 0; e < 16; ++e)
                for (var r = 16 * e, n = 0; n < 16; ++n) t[r + n] = "0123456789abcdef"[e] + "0123456789abcdef"[n];
              return t;
            })();
          }.call(this, z("buffer").Buffer);
        },
        { "base64-js": 2, buffer: 5, ieee754: 3 }
      ],
      2: [
        function (t, e, r) {
          "use strict";
          (r.byteLength = function (t) {
            var t = p(t),
              e = t[0],
              t = t[1];
            return (3 * (e + t)) / 4 - t;
          }),
            (r.toByteArray = function (t) {
              for (
                var e,
                  r,
                  n = p(t),
                  o = n[0],
                  n = n[1],
                  i = new l(((s = 0), (3 * (o + n)) / 4 - n)),
                  u = 0,
                  f = 0 < n ? o - 4 : o,
                  s,
                  a,
                  c,
                  r = 0;
                r < f;
                r += 4
              )
                (e = (h[t.charCodeAt(r)] << 18) | (h[t.charCodeAt(r + 1)] << 12) | (h[t.charCodeAt(r + 2)] << 6) | h[t.charCodeAt(r + 3)]),
                  (i[u++] = (e >> 16) & 255),
                  (i[u++] = (e >> 8) & 255),
                  (i[u++] = 255 & e);
              return (
                2 === n && ((e = (h[t.charCodeAt(r)] << 2) | (h[t.charCodeAt(r + 1)] >> 4)), (i[u++] = 255 & e)),
                1 === n &&
                  ((e = (h[t.charCodeAt(r)] << 10) | (h[t.charCodeAt(r + 1)] << 4) | (h[t.charCodeAt(r + 2)] >> 2)),
                  (i[u++] = (e >> 8) & 255),
                  (i[u++] = 255 & e)),
                i
              );
            }),
            (r.fromByteArray = function (t) {
              for (var e, r = t.length, n = r % 3, o = [], i = 0, u = r - n; i < u; i += 16383)
                o.push(s(t, i, u < i + 16383 ? u : i + 16383));
              return (
                1 == n
                  ? ((e = t[r - 1]), o.push(f[e >> 2] + f[(e << 4) & 63] + "=="))
                  : 2 == n && ((e = (t[r - 2] << 8) + t[r - 1]), o.push(f[e >> 10] + f[(e >> 4) & 63] + f[(e << 2) & 63] + "=")),
                o.join("")
              );
            });
          for (
            var f = [],
              h = [],
              l = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              o = 0,
              i = n.length;
            o < i;
            ++o
          )
            (f[o] = n[o]), (h[n.charCodeAt(o)] = o);
          function p(t) {
            var e = t.length;
            if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            var t = t.indexOf("=");
            return [(t = -1 === t ? e : t), t === e ? 0 : 4 - (t % 4)];
          }
          function s(t, e, r) {
            for (var n, n, o = [], i = e; i < r; i += 3)
              (n = ((t[i] << 16) & 16711680) + ((t[i + 1] << 8) & 65280) + (255 & t[i + 2])),
                o.push(f[((n = n) >> 18) & 63] + f[(n >> 12) & 63] + f[(n >> 6) & 63] + f[63 & n]);
            return o.join("");
          }
          (h["-".charCodeAt(0)] = 62), (h["_".charCodeAt(0)] = 63);
        },
        {}
      ],
      3: [
        function (t, e, r) {
          (r.read = function (t, e, r, n, o) {
            var i,
              u,
              f = 8 * o - n - 1,
              s = (1 << f) - 1,
              a = s >> 1,
              c = -7,
              h = r ? o - 1 : 0,
              l = r ? -1 : 1,
              o = t[e + h];
            for (h += l, i = o & ((1 << -c) - 1), o >>= -c, c += f; 0 < c; i = 256 * i + t[e + h], h += l, c -= 8);
            for (u = i & ((1 << -c) - 1), i >>= -c, c += n; 0 < c; u = 256 * u + t[e + h], h += l, c -= 8);
            if (0 === i) i = 1 - a;
            else {
              if (i === s) return u ? NaN : (1 / 0) * (o ? -1 : 1);
              (u += Math.pow(2, n)), (i -= a);
            }
            return (o ? -1 : 1) * u * Math.pow(2, i - n);
          }),
            (r.write = function (t, e, r, n, o, i) {
              var u,
                f,
                n,
                s = 8 * i - o - 1,
                a = (1 << s) - 1,
                c = a >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = n ? 0 : i - 1,
                p = n ? 1 : -1,
                i = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((f = isNaN(e) ? 1 : 0), (u = a))
                    : ((u = Math.floor(Math.log(e) / Math.LN2)),
                      e * (n = Math.pow(2, -u)) < 1 && (u--, (n *= 2)),
                      2 <= (e += 1 <= u + c ? h / n : h * Math.pow(2, 1 - c)) * n && (u++, (n /= 2)),
                      a <= u + c
                        ? ((f = 0), (u = a))
                        : 1 <= u + c
                        ? ((f = (e * n - 1) * Math.pow(2, o)), (u += c))
                        : ((f = e * Math.pow(2, c - 1) * Math.pow(2, o)), (u = 0)));
                8 <= o;
                t[r + l] = 255 & f, l += p, f /= 256, o -= 8
              );
              for (u = (u << o) | f, s += o; 0 < s; t[r + l] = 255 & u, l += p, u /= 256, s -= 8);
              t[r + l - p] |= 128 * i;
            });
        },
        {}
      ],
      4: [
        function (t, e, r) {
          arguments[4][2][0].apply(r, arguments);
        },
        { dup: 2 }
      ],
      5: [
        function (t, e, z) {
          !function (h) {
            "use strict";
            var n = t("base64-js"),
              i = t("ieee754"),
              e =
                ((z.Buffer = h),
                (z.SlowBuffer = function (t) {
                  return h.alloc(+(t = +t != t ? 0 : t));
                }),
                (z.INSPECT_MAX_BYTES = 50),
                2147483647);
            function c(t) {
              if (e < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
              var t = new Uint8Array(t);
              return (t.__proto__ = h.prototype), t;
            }
            function h(t, e, r) {
              if ("number" != typeof t) return o(t, e, r);
              if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
              return f(t);
            }
            function o(t, e, r) {
              if ("string" == typeof t) {
                var n = t,
                  o = e,
                  i,
                  u,
                  n;
                if (h.isEncoding((o = "string" == typeof o && "" !== o ? o : "utf8")))
                  return (n = (u = c((i = 0 | y(n, o)))).write(n, o)) !== i ? u.slice(0, n) : u;
                throw new TypeError("Unknown encoding: " + o);
              }
              if (ArrayBuffer.isView(t)) return l(t);
              if (null == t)
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              if (R(t, ArrayBuffer) || (t && R(t.buffer, ArrayBuffer))) {
                var i = t,
                  n = e,
                  u = r,
                  i,
                  i;
                if (n < 0 || i.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
                if (i.byteLength < n + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
                return (
                  ((i =
                    void 0 === n && void 0 === u
                      ? new Uint8Array(i)
                      : void 0 === u
                      ? new Uint8Array(i, n)
                      : new Uint8Array(i, n, u)).__proto__ = h.prototype),
                  i
                );
              }
              if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
              var o = t.valueOf && t.valueOf();
              if (null != o && o !== t) return h.from(o, e, r);
              var f = h.isBuffer((s = t))
                  ? (0 !== (a = c((f = 0 | p(s.length)))).length && s.copy(a, 0, 0, f), a)
                  : void 0 !== s.length
                  ? "number" != typeof s.length || L(s.length)
                    ? c(0)
                    : l(s)
                  : "Buffer" === s.type && Array.isArray(s.data)
                  ? l(s.data)
                  : void 0,
                s,
                f,
                a;
              if (f) return f;
              if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                return h.from(t[Symbol.toPrimitive]("string"), e, r);
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
              );
            }
            function u(t) {
              if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
              if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            }
            function f(t) {
              return u(t), c(t < 0 ? 0 : 0 | p(t));
            }
            function l(t) {
              for (var e = t.length < 0 ? 0 : 0 | p(t.length), r = c(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
              return r;
            }
            function p(t) {
              if (e <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e.toString(16) + " bytes");
              return 0 | t;
            }
            function y(t, e) {
              if (h.isBuffer(t)) return t.length;
              if (ArrayBuffer.isView(t) || R(t, ArrayBuffer)) return t.byteLength;
              if ("string" != typeof t)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
              var r = t.length,
                n = 2 < arguments.length && !0 === arguments[2];
              if (!n && 0 === r) return 0;
              for (var o = !1; ; )
                switch (e) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return r;
                  case "utf8":
                  case "utf-8":
                    return I(t).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * r;
                  case "hex":
                    return r >>> 1;
                  case "base64":
                    return T(t).length;
                  default:
                    if (o) return n ? -1 : I(t).length;
                    (e = ("" + e).toLowerCase()), (o = !0);
                }
            }
            function r(t, e, r) {
              var n = t[e];
              (t[e] = t[r]), (t[r] = n);
            }
            function s(t, e, r, n, o) {
              if (0 === t.length) return -1;
              if (
                ("string" == typeof r ? ((n = r), (r = 0)) : 2147483647 < r ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
                (r = (r = L((r = +r)) ? (o ? 0 : t.length - 1) : r) < 0 ? t.length + r : r) >= t.length)
              ) {
                if (o) return -1;
                r = t.length - 1;
              } else if (r < 0) {
                if (!o) return -1;
                r = 0;
              }
              if (("string" == typeof e && (e = h.from(e, n)), h.isBuffer(e))) return 0 === e.length ? -1 : a(t, e, r, n, o);
              if ("number" == typeof e)
                return (
                  (e &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? (o ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(t, e, r)
                    : a(t, [e], r, n, o)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function a(t, e, r, n, o) {
              var i,
                u = 1,
                f = t.length,
                s = e.length;
              if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                (f /= u = 2), (s /= 2), (r /= 2);
              }
              function a(t, e) {
                return 1 === u ? t[e] : t.readUInt16BE(e * u);
              }
              if (o)
                for (var c = -1, i = r; i < f; i++)
                  if (a(t, i) === a(e, -1 === c ? 0 : i - c)) {
                    if (i - (c = -1 === c ? i : c) + 1 === s) return c * u;
                  } else -1 !== c && (i -= i - c), (c = -1);
              else
                for (i = r = f < r + s ? f - s : r; 0 <= i; i--) {
                  for (var h = !0, l = 0; l < s; l++)
                    if (a(t, i + l) !== a(e, l)) {
                      h = !1;
                      break;
                    }
                  if (h) return i;
                }
              return -1;
            }
            function g(t, e, r, n) {
              r = Number(r) || 0;
              var o = t.length - r,
                o = ((!n || (n = Number(n)) > o) && (n = o), e.length);
              o / 2 < n && (n = o / 2);
              for (var i = 0; i < n; ++i) {
                var u = parseInt(e.substr(2 * i, 2), 16);
                if (L(u)) return i;
                t[r + i] = u;
              }
              return i;
            }
            function w(t, e, r, n) {
              return C(I(e, t.length - r), t, r, n);
            }
            function d(t, e, r, n) {
              return C(
                (function (t) {
                  for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                  return e;
                })(e),
                t,
                r,
                n
              );
            }
            function b(t, e, r, n) {
              return d(t, e, r, n);
            }
            function v(t, e, r, n) {
              return C(T(e), t, r, n);
            }
            function m(t, e, r, n) {
              return C(
                (function (t, e) {
                  for (var r, n, o, i = [], u = 0; u < t.length && !((e -= 2) < 0); ++u)
                    (n = (r = t.charCodeAt(u)) >> 8), i.push((o = r % 256)), i.push(n);
                  return i;
                })(e, t.length - r),
                t,
                r,
                n
              );
            }
            function E(t, e, r) {
              return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
            }
            function O(t, e, r) {
              r = Math.min(t.length, r);
              for (var n = [], o = e; o < r; ) {
                var i,
                  u,
                  f,
                  s,
                  a = t[o],
                  c = null,
                  h = 239 < a ? 4 : 223 < a ? 3 : 191 < a ? 2 : 1;
                if (o + h <= r)
                  switch (h) {
                    case 1:
                      a < 128 && (c = a);
                      break;
                    case 2:
                      128 == (192 & (i = t[o + 1])) && 127 < (s = ((31 & a) << 6) | (63 & i)) && (c = s);
                      break;
                    case 3:
                      (i = t[o + 1]),
                        (u = t[o + 2]),
                        128 == (192 & i) &&
                          128 == (192 & u) &&
                          2047 < (s = ((15 & a) << 12) | ((63 & i) << 6) | (63 & u)) &&
                          (s < 55296 || 57343 < s) &&
                          (c = s);
                      break;
                    case 4:
                      (i = t[o + 1]),
                        (u = t[o + 2]),
                        (f = t[o + 3]),
                        128 == (192 & i) &&
                          128 == (192 & u) &&
                          128 == (192 & f) &&
                          65535 < (s = ((15 & a) << 18) | ((63 & i) << 12) | ((63 & u) << 6) | (63 & f)) &&
                          s < 1114112 &&
                          (c = s);
                  }
                null === c
                  ? ((c = 65533), (h = 1))
                  : 65535 < c && (n.push((((c -= 65536) >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))),
                  n.push(c),
                  (o += h);
              }
              var l = n,
                p = l.length;
              if (p <= B) return String.fromCharCode.apply(String, l);
              for (var y = "", g = 0; g < p; ) y += String.fromCharCode.apply(String, l.slice(g, (g += B)));
              return y;
            }
            (z.kMaxLength = e),
              (h.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      }
                    }),
                    42 === t.foo()
                  );
                } catch (t) {
                  return !1;
                }
              })()) ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error(
                  "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                ),
              Object.defineProperty(h.prototype, "parent", {
                enumerable: !0,
                get: function () {
                  if (h.isBuffer(this)) return this.buffer;
                }
              }),
              Object.defineProperty(h.prototype, "offset", {
                enumerable: !0,
                get: function () {
                  if (h.isBuffer(this)) return this.byteOffset;
                }
              }),
              "undefined" != typeof Symbol &&
                null != Symbol.species &&
                h[Symbol.species] === h &&
                Object.defineProperty(h, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }),
              (h.poolSize = 8192),
              (h.from = o),
              (h.prototype.__proto__ = Uint8Array.prototype),
              (h.__proto__ = Uint8Array),
              (h.alloc = function (t, e, r) {
                return (
                  (e = e), (r = r), u((t = t)), !(t <= 0) && void 0 !== e ? ("string" == typeof r ? c(t).fill(e, r) : c(t).fill(e)) : c(t)
                );
                var t, e, r;
              }),
              (h.allocUnsafe = f),
              (h.allocUnsafeSlow = f),
              (h.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== h.prototype;
              }),
              (h.compare = function (t, e) {
                if (
                  (R(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
                  R(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
                  !h.isBuffer(t) || !h.isBuffer(e))
                )
                  throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
                  if (t[o] !== e[o]) {
                    (r = t[o]), (n = e[o]);
                    break;
                  }
                return r < n ? -1 : n < r ? 1 : 0;
              }),
              (h.isEncoding = function (t) {
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
              (h.concat = function (t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return h.alloc(0);
                var r;
                if (void 0 === e) for (r = e = 0; r < t.length; ++r) e += t[r].length;
                for (var n = h.allocUnsafe(e), o = 0, r = 0; r < t.length; ++r) {
                  var i = t[r];
                  if ((R(i, Uint8Array) && (i = h.from(i)), !h.isBuffer(i)))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  i.copy(n, o), (o += i.length);
                }
                return n;
              }),
              (h.byteLength = y),
              (h.prototype._isBuffer = !0),
              (h.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) r(this, e, e + 1);
                return this;
              }),
              (h.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) r(this, e, e + 3), r(this, e + 1, e + 2);
                return this;
              }),
              (h.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) r(this, e, e + 7), r(this, e + 1, e + 6), r(this, e + 2, e + 5), r(this, e + 3, e + 4);
                return this;
              }),
              (h.prototype.toLocaleString = h.prototype.toString =
                function () {
                  var t = this.length;
                  return 0 === t
                    ? ""
                    : 0 === arguments.length
                    ? O(this, 0, t)
                    : function (t, e, r) {
                        var n = !1;
                        if ((e = void 0 === e || e < 0 ? 0 : e) > this.length) return "";
                        if ((r = void 0 === r || r > this.length ? this.length : r) <= 0) return "";
                        if ((r >>>= 0) <= (e >>>= 0)) return "";
                        for (t = t || "utf8"; ; )
                          switch (t) {
                            case "hex":
                              return _(this, e, r);
                            case "utf8":
                            case "utf-8":
                              return O(this, e, r);
                            case "ascii":
                              return A(this, e, r);
                            case "latin1":
                            case "binary":
                              return S(this, e, r);
                            case "base64":
                              return E(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                              return H(this, e, r);
                            default:
                              if (n) throw new TypeError("Unknown encoding: " + t);
                              (t = (t + "").toLowerCase()), (n = !0);
                          }
                      }.apply(this, arguments);
                }),
              (h.prototype.equals = function (t) {
                if (h.isBuffer(t)) return this === t || 0 === h.compare(this, t);
                throw new TypeError("Argument must be a Buffer");
              }),
              (h.prototype.inspect = function () {
                var t = "",
                  e = z.INSPECT_MAX_BYTES,
                  t = this.toString("hex", 0, e)
                    .replace(/(.{2})/g, "$1 ")
                    .trim();
                return this.length > e && (t += " ... "), "<Buffer " + t + ">";
              }),
              (h.prototype.compare = function (t, e, r, n, o) {
                if ((R(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)))
                  throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (
                  (void 0 === r && (r = t ? t.length : 0),
                  void 0 === n && (n = 0),
                  void 0 === o && (o = this.length),
                  (e = void 0 === e ? 0 : e) < 0 || r > t.length || n < 0 || o > this.length)
                )
                  throw new RangeError("out of range index");
                if (o <= n && r <= e) return 0;
                if (o <= n) return -1;
                if (r <= e) return 1;
                if (this === t) return 0;
                for (
                  var i = (o >>>= 0) - (n >>>= 0),
                    u = (r >>>= 0) - (e >>>= 0),
                    f = Math.min(i, u),
                    s = this.slice(n, o),
                    a = t.slice(e, r),
                    c = 0;
                  c < f;
                  ++c
                )
                  if (s[c] !== a[c]) {
                    (i = s[c]), (u = a[c]);
                    break;
                  }
                return i < u ? -1 : u < i ? 1 : 0;
              }),
              (h.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r);
              }),
              (h.prototype.indexOf = function (t, e, r) {
                return s(this, t, e, r, !0);
              }),
              (h.prototype.lastIndexOf = function (t, e, r) {
                return s(this, t, e, r, !1);
              }),
              (h.prototype.write = function (t, e, r, n) {
                if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                else {
                  if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                }
                var o = this.length - e;
                if (((void 0 === r || o < r) && (r = o), (0 < t.length && (r < 0 || e < 0)) || e > this.length))
                  throw new RangeError("Attempt to write outside buffer bounds");
                n = n || "utf8";
                for (var i = !1; ; )
                  switch (n) {
                    case "hex":
                      return g(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                      return w(this, t, e, r);
                    case "ascii":
                      return d(this, t, e, r);
                    case "latin1":
                    case "binary":
                      return b(this, t, e, r);
                    case "base64":
                      return v(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return m(this, t, e, r);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + n);
                      (n = ("" + n).toLowerCase()), (i = !0);
                  }
              }),
              (h.prototype.toJSON = function () {
                return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
              });
            var B = 4096;
            function A(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);
              for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
              return n;
            }
            function S(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);
              for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
              return n;
            }
            function _(t, e, r) {
              var n = t.length;
              (!r || r < 0 || n < r) && (r = n);
              for (var o = "", i = (e = !e || e < 0 ? 0 : e); i < r; ++i) o += D(t[i]);
              return o;
            }
            function H(t, e, r) {
              for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
              return o;
            }
            function j(t, e, r) {
              if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
              if (r < t + e) throw new RangeError("Trying to access beyond buffer length");
            }
            function x(t, e, r, n, o, i) {
              if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (o < e || e < i) throw new RangeError('"value" argument is out of bounds');
              if (r + n > t.length) throw new RangeError("Index out of range");
            }
            function U(t, e, r, n, o, i) {
              if (r + n > t.length) throw new RangeError("Index out of range");
              if (r < 0) throw new RangeError("Index out of range");
            }
            function k(t, e, r, n, o) {
              return (e = +e), (r >>>= 0), o || U(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
            }
            function P(t, e, r, n, o) {
              return (e = +e), (r >>>= 0), o || U(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
            }
            (h.prototype.slice = function (t, e) {
              var r = this.length,
                r =
                  ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r),
                  (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
                  e < t && (e = t),
                  this.subarray(t, e));
              return (r.__proto__ = h.prototype), r;
            }),
              (h.prototype.readUIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || j(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) n += this[t + i] * o;
                return n;
              }),
              (h.prototype.readUIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || j(t, e, this.length);
                for (var n = this[t + --e], o = 1; 0 < e && (o *= 256); ) n += this[t + --e] * o;
                return n;
              }),
              (h.prototype.readUInt8 = function (t, e) {
                return (t >>>= 0), e || j(t, 1, this.length), this[t];
              }),
              (h.prototype.readUInt16LE = function (t, e) {
                return (t >>>= 0), e || j(t, 2, this.length), this[t] | (this[t + 1] << 8);
              }),
              (h.prototype.readUInt16BE = function (t, e) {
                return (t >>>= 0), e || j(t, 2, this.length), (this[t] << 8) | this[t + 1];
              }),
              (h.prototype.readUInt32LE = function (t, e) {
                return (t >>>= 0), e || j(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
              }),
              (h.prototype.readUInt32BE = function (t, e) {
                return (t >>>= 0), e || j(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
              }),
              (h.prototype.readIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || j(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) n += this[t + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
              }),
              (h.prototype.readIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || j(t, e, this.length);
                for (var n = e, o = 1, i = this[t + --n]; 0 < n && (o *= 256); ) i += this[t + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
              }),
              (h.prototype.readInt8 = function (t, e) {
                return (t >>>= 0), e || j(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
              }),
              (h.prototype.readInt16LE = function (t, e) {
                (t >>>= 0), e || j(t, 2, this.length);
                var e = this[t] | (this[t + 1] << 8);
                return 32768 & e ? 4294901760 | e : e;
              }),
              (h.prototype.readInt16BE = function (t, e) {
                (t >>>= 0), e || j(t, 2, this.length);
                var e = this[t + 1] | (this[t] << 8);
                return 32768 & e ? 4294901760 | e : e;
              }),
              (h.prototype.readInt32LE = function (t, e) {
                return (t >>>= 0), e || j(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
              }),
              (h.prototype.readInt32BE = function (t, e) {
                return (t >>>= 0), e || j(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
              }),
              (h.prototype.readFloatLE = function (t, e) {
                return (t >>>= 0), e || j(t, 4, this.length), i.read(this, t, !0, 23, 4);
              }),
              (h.prototype.readFloatBE = function (t, e) {
                return (t >>>= 0), e || j(t, 4, this.length), i.read(this, t, !1, 23, 4);
              }),
              (h.prototype.readDoubleLE = function (t, e) {
                return (t >>>= 0), e || j(t, 8, this.length), i.read(this, t, !0, 52, 8);
              }),
              (h.prototype.readDoubleBE = function (t, e) {
                return (t >>>= 0), e || j(t, 8, this.length), i.read(this, t, !1, 52, 8);
              }),
              (h.prototype.writeUIntLE = function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                  i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256); ) this[e + i] = (t / o) & 255;
                return e + r;
              }),
              (h.prototype.writeUIntBE = function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                  i = 1;
                for (this[e + o] = 255 & t; 0 <= --o && (i *= 256); ) this[e + o] = (t / i) & 255;
                return e + r;
              }),
              (h.prototype.writeUInt8 = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || x(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
              }),
              (h.prototype.writeUInt16LE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || x(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
              }),
              (h.prototype.writeUInt16BE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || x(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
              }),
              (h.prototype.writeUInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
              (h.prototype.writeUInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (h.prototype.writeIntLE = function (t, e, r, n) {
                var n,
                  o = ((t = +t), (e >>>= 0), n || x(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n), 0),
                  i = 1,
                  u = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256); )
                  t < 0 && 0 === u && 0 !== this[e + o - 1] && (u = 1), (this[e + o] = (((t / i) >> 0) - u) & 255);
                return e + r;
              }),
              (h.prototype.writeIntBE = function (t, e, r, n) {
                var n,
                  o = ((t = +t), (e >>>= 0), n || x(this, t, e, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n), r - 1),
                  i = 1,
                  u = 0;
                for (this[e + o] = 255 & t; 0 <= --o && (i *= 256); )
                  t < 0 && 0 === u && 0 !== this[e + o + 1] && (u = 1), (this[e + o] = (((t / i) >> 0) - u) & 255);
                return e + r;
              }),
              (h.prototype.writeInt8 = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || x(this, t, e, 1, 127, -128), (this[e] = 255 & (t = t < 0 ? 255 + t + 1 : t)), e + 1;
              }),
              (h.prototype.writeInt16LE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || x(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
              }),
              (h.prototype.writeInt16BE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || x(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
              }),
              (h.prototype.writeInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                );
              }),
              (h.prototype.writeInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = (t = t < 0 ? 4294967295 + t + 1 : t) >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (h.prototype.writeFloatLE = function (t, e, r) {
                return k(this, t, e, !0, r);
              }),
              (h.prototype.writeFloatBE = function (t, e, r) {
                return k(this, t, e, !1, r);
              }),
              (h.prototype.writeDoubleLE = function (t, e, r) {
                return P(this, t, e, !0, r);
              }),
              (h.prototype.writeDoubleBE = function (t, e, r) {
                return P(this, t, e, !1, r);
              }),
              (h.prototype.copy = function (t, e, r, n) {
                if (!h.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (((r = r || 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), (n = 0 < n && n < r ? r : n) === r))
                  return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if ((e = e || 0) < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length);
                var o = (n = t.length - e < n - r ? t.length - e + r : n) - r;
                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                else if (this === t && r < e && e < n) for (var i = o - 1; 0 <= i; --i) t[i + e] = this[i + r];
                else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                return o;
              }),
              (h.prototype.fill = function (t, e, r, n) {
                if ("string" == typeof t) {
                  if (
                    ("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
                    void 0 !== n && "string" != typeof n)
                  )
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof n && !h.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                  var o;
                  1 === t.length && ((o = t.charCodeAt(0)), ("utf8" === n && o < 128) || "latin1" === n) && (t = o);
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                var i;
                if (!(r <= e))
                  if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), "number" == typeof (t = t || 0)))
                    for (i = e; i < r; ++i) this[i] = t;
                  else {
                    var u = h.isBuffer(t) ? t : h.from(t, n),
                      f = u.length;
                    if (0 === f) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = u[i % f];
                  }
                return this;
              });
            var M = /[^+\/0-9A-Za-z-_]/g;
            function D(t) {
              return t < 16 ? "0" + t.toString(16) : t.toString(16);
            }
            function I(t, e) {
              var r;
              e = e || 1 / 0;
              for (var n = t.length, o = null, i = [], u = 0; u < n; ++u) {
                if (55295 < (r = t.charCodeAt(u)) && r < 57344) {
                  if (!o) {
                    if (56319 < r) {
                      -1 < (e -= 3) && i.push(239, 191, 189);
                      continue;
                    }
                    if (u + 1 === n) {
                      -1 < (e -= 3) && i.push(239, 191, 189);
                      continue;
                    }
                    o = r;
                    continue;
                  }
                  if (r < 56320) {
                    -1 < (e -= 3) && i.push(239, 191, 189), (o = r);
                    continue;
                  }
                  r = 65536 + (((o - 55296) << 10) | (r - 56320));
                } else o && -1 < (e -= 3) && i.push(239, 191, 189);
                if (((o = null), r < 128)) {
                  if (--e < 0) break;
                  i.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  i.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                } else {
                  if (!(r < 1114112)) throw new Error("Invalid code point");
                  if ((e -= 4) < 0) break;
                  i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                }
              }
              return i;
            }
            function T(t) {
              return n.toByteArray(
                (function (t) {
                  if ((t = (t = t.split("=")[0]).trim().replace(M, "")).length < 2) return "";
                  for (; t.length % 4 != 0; ) t += "=";
                  return t;
                })(t)
              );
            }
            function C(t, e, r, n) {
              for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
              return o;
            }
            function R(t, e) {
              return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
            }
            function L(t) {
              return t != t;
            }
          }.call(this, t("buffer").Buffer);
        },
        { "base64-js": 4, buffer: 5, ieee754: 6 }
      ],
      6: [
        function (t, e, r) {
          arguments[4][3][0].apply(r, arguments);
        },
        { dup: 3 }
      ]
    },
    {},
    [1]
  )(1);
}),
  (function (t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.otplib = e())
      : (t.otplib = e());
  })(window, function () {
    return (
      (r = [
        function (t, e, r) {
          var n, a, o, i, t, u, f, c, s, h, l, p, y, g;
          function w() {}
          t.exports =
            ((a = Math),
            (i =
              Object.create ||
              function (t) {
                var t;
                return (w.prototype = t), (t = new w()), (w.prototype = null), t;
              }),
            (u = (t = {}).lib = {}),
            (f = u.Base =
              {
                extend: function (t) {
                  var e = i(this);
                  return (
                    t && e.mixIn(t),
                    (e.hasOwnProperty("init") && this.init !== e.init) ||
                      (e.init = function () {
                        e.$super.init.apply(this, arguments);
                      }),
                    ((e.init.prototype = e).$super = this),
                    e
                  );
                },
                create: function () {
                  var t = this.extend();
                  return t.init.apply(t, arguments), t;
                },
                init: function () {},
                mixIn: function (t) {
                  for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                  t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                }
              }),
            (c = u.WordArray =
              f.extend({
                init: function (t, e) {
                  (t = this.words = t || []), (this.sigBytes = null != e ? e : 4 * t.length);
                },
                toString: function (t) {
                  return (t || h).stringify(this);
                },
                concat: function (t) {
                  var e = this.words,
                    r = t.words,
                    n = this.sigBytes,
                    o = t.sigBytes;
                  if ((this.clamp(), n % 4))
                    for (var i = 0; i < o; i++) {
                      var u = (r[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      e[(n + i) >>> 2] |= u << (24 - ((n + i) % 4) * 8);
                    }
                  else for (i = 0; i < o; i += 4) e[(n + i) >>> 2] = r[i >>> 2];
                  return (this.sigBytes += o), this;
                },
                clamp: function () {
                  var t = this.words,
                    e = this.sigBytes;
                  (t[e >>> 2] &= 4294967295 << (32 - (e % 4) * 8)), (t.length = a.ceil(e / 4));
                },
                clone: function () {
                  var t = f.clone.call(this);
                  return (t.words = this.words.slice(0)), t;
                },
                random: function (t) {
                  for (
                    var e,
                      r = [],
                      n = function (e) {
                        var r = 987654321,
                          n = 4294967295;
                        return function () {
                          var t;
                          return (
                            (t =
                              (t = (((r = (36969 * (65535 & r) + (r >> 16)) & n) << 16) + (e = (18e3 * (65535 & e) + (e >> 16)) & n)) & n) /
                                4294967296 +
                              0.5) * (0.5 < a.random() ? 1 : -1)
                          );
                        };
                      },
                      o = 0;
                    o < t;
                    o += 4
                  ) {
                    var i = n(4294967296 * (e || a.random())),
                      e = 987654071 * i();
                    r.push((4294967296 * i()) | 0);
                  }
                  return new c.init(r, t);
                }
              })),
            (s = t.enc = {}),
            (h = s.Hex =
              {
                stringify: function (t) {
                  for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) {
                    var i = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
                  }
                  return n.join("");
                },
                parse: function (t) {
                  for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << (24 - (n % 8) * 4);
                  return new c.init(r, e / 2);
                }
              }),
            (l = s.Latin1 =
              {
                stringify: function (t) {
                  for (var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o++) {
                    var i = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    n.push(String.fromCharCode(i));
                  }
                  return n.join("");
                },
                parse: function (t) {
                  for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
                  return new c.init(r, e);
                }
              }),
            (p = s.Utf8 =
              {
                stringify: function (t) {
                  try {
                    return decodeURIComponent(escape(l.stringify(t)));
                  } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (t) {
                  return l.parse(unescape(encodeURIComponent(t)));
                }
              }),
            (y = u.BufferedBlockAlgorithm =
              f.extend({
                reset: function () {
                  (this._data = new c.init()), (this._nDataBytes = 0);
                },
                _append: function (t) {
                  "string" == typeof t && (t = p.parse(t)), this._data.concat(t), (this._nDataBytes += t.sigBytes);
                },
                _process: function (t) {
                  var e = this._data,
                    r = e.words,
                    n = e.sigBytes,
                    o = this.blockSize,
                    i = n / (4 * o),
                    u = (i = t ? a.ceil(i) : a.max((0 | i) - this._minBufferSize, 0)) * o,
                    t = a.min(4 * u, n);
                  if (u) {
                    for (var f = 0; f < u; f += o) this._doProcessBlock(r, f);
                    var s = r.splice(0, u);
                    e.sigBytes -= t;
                  }
                  return new c.init(s, t);
                },
                clone: function () {
                  var t = f.clone.call(this);
                  return (t._data = this._data.clone()), t;
                },
                _minBufferSize: 0
              })),
            (u.Hasher = y.extend({
              cfg: f.extend(),
              init: function (t) {
                (this.cfg = this.cfg.extend(t)), this.reset();
              },
              reset: function () {
                y.reset.call(this), this._doReset();
              },
              update: function (t) {
                return this._append(t), this._process(), this;
              },
              finalize: function (t) {
                return t && this._append(t), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (r) {
                return function (t, e) {
                  return new r.init(e).finalize(t);
                };
              },
              _createHmacHelper: function (r) {
                return function (t, e) {
                  return new g.HMAC.init(r, e).finalize(t);
                };
              }
            })),
            (g = t.algo = {}),
            (n = t));
        },
        function (t, e, r) {
          var t, n, r, f;
          t.exports =
            ((r = (t = r(0)).lib.Base),
            (f = t.enc.Utf8),
            void (t.algo.HMAC = r.extend({
              init: function (t, e) {
                (t = this._hasher = new t.init()), "string" == typeof e && (e = f.parse(e));
                var r = t.blockSize,
                  n = 4 * r;
                (e = e.sigBytes > n ? t.finalize(e) : e).clamp();
                for (var t = (this._oKey = e.clone()), e = (this._iKey = e.clone()), o = t.words, i = e.words, u = 0; u < r; u++)
                  (o[u] ^= 1549556828), (i[u] ^= 909522486);
                (t.sigBytes = e.sigBytes = n), this.reset();
              },
              reset: function () {
                var t = this._hasher;
                t.reset(), t.update(this._iKey);
              },
              update: function (t) {
                return this._hasher.update(t), this;
              },
              finalize: function (t) {
                var e = this._hasher,
                  t = e.finalize(t);
                return e.reset(), e.finalize(this._oKey.clone().concat(t));
              }
            })));
        },
        function (t, e, r) {
          var n;
          t.exports = (n = r(0)).enc.Hex;
        },
        function (t, e, r) {
          var n, r, o, i, r, t;
          t.exports =
            ((r = (t = r(0)).lib),
            (o = r.Base),
            (i = r.WordArray),
            ((r = t.x64 = {}).Word = o.extend({
              init: function (t, e) {
                (this.high = t), (this.low = e);
              }
            })),
            (r.WordArray = o.extend({
              init: function (t, e) {
                (t = this.words = t || []), (this.sigBytes = null != e ? e : 8 * t.length);
              },
              toX32: function () {
                for (var t = this.words, e = t.length, r = [], n = 0; n < e; n++) {
                  var o = t[n];
                  r.push(o.high), r.push(o.low);
                }
                return i.create(r, this.sigBytes);
              },
              clone: function () {
                for (var t = o.clone.call(this), e = (t.words = this.words.slice(0)), r = e.length, n = 0; n < r; n++) e[n] = e[n].clone();
                return t;
              }
            })),
            t);
        },
        function (t, e, r) {
          var t;
          t.exports = ((t = r(0)), r(9), r(1), t.HmacSHA1);
        },
        function (t, e, r) {
          var t;
          t.exports = ((t = r(0)), r(10), r(1), t.HmacSHA256);
        },
        function (t, e, r) {
          var t;
          t.exports = ((t = r(0)), r(3), r(11), r(1), t.HmacSHA512);
        },
        function (t, e) {
          function a(t, e) {
            var t = t.indexOf(e);
            if (-1 === t) throw new Error("Invalid character found: " + e);
            return t;
          }
          t.exports = function (t, e) {
            var r;
            switch (e) {
              case "RFC3548":
              case "RFC4648":
                (r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), (t = t.replace(/=+$/, ""));
                break;
              case "RFC4648-HEX":
                (r = "0123456789ABCDEFGHIJKLMNOPQRSTUV"), (t = t.replace(/=+$/, ""));
                break;
              case "Crockford":
                (r = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"), (t = t.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"));
                break;
              default:
                throw new Error("Unknown base32 variant: " + e);
            }
            for (var n = t.length, o = 0, i = 0, u = 0, f = new Uint8Array(((5 * n) / 8) | 0), s = 0; s < n; s++)
              (i = (i << 5) | a(r, t[s])), 8 <= (o += 5) && ((f[u++] = (i >>> (o - 8)) & 255), (o -= 8));
            return f.buffer;
          };
        },
        function (t, e) {
          t.exports = function (t, e, r) {
            var n, o;
            switch (((r = r || {}), e)) {
              case "RFC3548":
              case "RFC4648":
                (n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), (o = !0);
                break;
              case "RFC4648-HEX":
                (n = "0123456789ABCDEFGHIJKLMNOPQRSTUV"), (o = !0);
                break;
              case "Crockford":
                o = !(n = "0123456789ABCDEFGHJKMNPQRSTVWXYZ");
                break;
              default:
                throw new Error("Unknown base32 variant: " + e);
            }
            for (
              var r = void 0 !== r.padding ? r.padding : o, i = t.byteLength, u = new Uint8Array(t), f = 0, s = 0, a = "", c = 0;
              c < i;
              c++
            )
              for (s = (s << 8) | u[c], f += 8; 5 <= f; ) (a += n[(s >>> (f - 5)) & 31]), (f -= 5);
            if ((0 < f && (a += n[(s << (5 - f)) & 31]), r)) for (; a.length % 8 != 0; ) a += "=";
            return a;
          };
        },
        function (t, e, r) {
          var r, n, o, i, n, c, n, t;
          t.exports =
            ((n = (r = t = r(0)).lib),
            (o = n.WordArray),
            (i = n.Hasher),
            (n = r.algo),
            (c = []),
            (n = n.SHA1 =
              i.extend({
                _doReset: function () {
                  this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function (t, e) {
                  for (var r = this._hash.words, n = r[0], o = r[1], i = r[2], u = r[3], f = r[4], s = 0; s < 80; s++) {
                    var a,
                      a =
                        (s < 16
                          ? (c[s] = 0 | t[e + s])
                          : ((a = c[s - 3] ^ c[s - 8] ^ c[s - 14] ^ c[s - 16]), (c[s] = (a << 1) | (a >>> 31))),
                        ((n << 5) | (n >>> 27)) + f + c[s]);
                    (a +=
                      s < 20
                        ? 1518500249 + ((o & i) | (~o & u))
                        : s < 40
                        ? 1859775393 + (o ^ i ^ u)
                        : s < 60
                        ? ((o & i) | (o & u) | (i & u)) - 1894007588
                        : (o ^ i ^ u) - 899497514),
                      (f = u),
                      (u = i),
                      (i = (o << 30) | (o >>> 2)),
                      (o = n),
                      (n = a);
                  }
                  (r[0] = (r[0] + n) | 0),
                    (r[1] = (r[1] + o) | 0),
                    (r[2] = (r[2] + i) | 0),
                    (r[3] = (r[3] + u) | 0),
                    (r[4] = (r[4] + f) | 0);
                },
                _doFinalize: function () {
                  var t = this._data,
                    e = t.words,
                    r = 8 * this._nDataBytes,
                    n = 8 * t.sigBytes;
                  return (
                    (e[n >>> 5] |= 128 << (24 - (n % 32))),
                    (e[14 + (((64 + n) >>> 9) << 4)] = Math.floor(r / 4294967296)),
                    (e[15 + (((64 + n) >>> 9) << 4)] = r),
                    (t.sigBytes = 4 * e.length),
                    this._process(),
                    this._hash
                  );
                },
                clone: function () {
                  var t = i.clone.call(this);
                  return (t._hash = this._hash.clone()), t;
                }
              })),
            (r.SHA1 = i._createHelper(n)),
            (r.HmacSHA1 = i._createHmacHelper(n)),
            t.SHA1);
        },
        function (t, e, r) {
          var c;
          t.exports =
            ((c = r(0)),
            (function (o) {
              var t = c,
                e = t.lib,
                r = e.WordArray,
                n = e.Hasher,
                e = t.algo,
                i = [],
                d = [];
              function u(t) {
                for (var e = o.sqrt(t), r = 2; r <= e; r++) if (!(t % r)) return;
                return 1;
              }
              function f(t) {
                return (4294967296 * (t - (0 | t))) | 0;
              }
              for (var s = 2, a = 0; a < 64; ) u(s) && (a < 8 && (i[a] = f(o.pow(s, 0.5))), (d[a] = f(o.pow(s, 1 / 3))), a++), s++;
              var b = [],
                e = (e.SHA256 = n.extend({
                  _doReset: function () {
                    this._hash = new r.init(i.slice(0));
                  },
                  _doProcessBlock: function (t, e) {
                    for (
                      var r = this._hash.words, n = r[0], o = r[1], i = r[2], u = r[3], f = r[4], s = r[5], a = r[6], c = r[7], h = 0;
                      h < 64;
                      h++
                    )
                      var l,
                        p,
                        l,
                        y,
                        l =
                          ((b[h] =
                            h < 16
                              ? 0 | t[e + h]
                              : ((((l = b[h - 15]) << 25) | (l >>> 7)) ^ ((l << 14) | (l >>> 18)) ^ (l >>> 3)) +
                                b[h - 7] +
                                ((((l = b[h - 2]) << 15) | (l >>> 17)) ^ ((l << 13) | (l >>> 19)) ^ (l >>> 10)) +
                                b[h - 16]),
                          (n & o) ^ (n & i) ^ (o & i)),
                        g,
                        w =
                          c +
                          (((f << 26) | (f >>> 6)) ^ ((f << 21) | (f >>> 11)) ^ ((f << 7) | (f >>> 25))) +
                          ((f & s) ^ (~f & a)) +
                          d[h] +
                          b[h],
                        c = a,
                        a = s,
                        s = f,
                        f = (u + w) | 0,
                        u = i,
                        i = o,
                        o = n,
                        n = (w + ((((n << 30) | (n >>> 2)) ^ ((n << 19) | (n >>> 13)) ^ ((n << 10) | (n >>> 22))) + l)) | 0;
                    (r[0] = (r[0] + n) | 0),
                      (r[1] = (r[1] + o) | 0),
                      (r[2] = (r[2] + i) | 0),
                      (r[3] = (r[3] + u) | 0),
                      (r[4] = (r[4] + f) | 0),
                      (r[5] = (r[5] + s) | 0),
                      (r[6] = (r[6] + a) | 0),
                      (r[7] = (r[7] + c) | 0);
                  },
                  _doFinalize: function () {
                    var t = this._data,
                      e = t.words,
                      r = 8 * this._nDataBytes,
                      n = 8 * t.sigBytes;
                    return (
                      (e[n >>> 5] |= 128 << (24 - (n % 32))),
                      (e[14 + (((64 + n) >>> 9) << 4)] = o.floor(r / 4294967296)),
                      (e[15 + (((64 + n) >>> 9) << 4)] = r),
                      (t.sigBytes = 4 * e.length),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var t = n.clone.call(this);
                    return (t._hash = this._hash.clone()), t;
                  }
                }));
              (t.SHA256 = n._createHelper(e)), (t.HmacSHA256 = n._createHmacHelper(e));
            })(Math),
            c.SHA256);
        },
        function (t, e, r) {
          var f;
          t.exports =
            ((f = r(0)),
            r(3),
            (function () {
              var t = f,
                e = t.lib.Hasher,
                r = t.x64,
                n = r.Word,
                o = r.WordArray,
                r = t.algo;
              function i() {
                return n.create.apply(n, arguments);
              }
              for (
                var ct = [
                    i(1116352408, 3609767458),
                    i(1899447441, 602891725),
                    i(3049323471, 3964484399),
                    i(3921009573, 2173295548),
                    i(961987163, 4081628472),
                    i(1508970993, 3053834265),
                    i(2453635748, 2937671579),
                    i(2870763221, 3664609560),
                    i(3624381080, 2734883394),
                    i(310598401, 1164996542),
                    i(607225278, 1323610764),
                    i(1426881987, 3590304994),
                    i(1925078388, 4068182383),
                    i(2162078206, 991336113),
                    i(2614888103, 633803317),
                    i(3248222580, 3479774868),
                    i(3835390401, 2666613458),
                    i(4022224774, 944711139),
                    i(264347078, 2341262773),
                    i(604807628, 2007800933),
                    i(770255983, 1495990901),
                    i(1249150122, 1856431235),
                    i(1555081692, 3175218132),
                    i(1996064986, 2198950837),
                    i(2554220882, 3999719339),
                    i(2821834349, 766784016),
                    i(2952996808, 2566594879),
                    i(3210313671, 3203337956),
                    i(3336571891, 1034457026),
                    i(3584528711, 2466948901),
                    i(113926993, 3758326383),
                    i(338241895, 168717936),
                    i(666307205, 1188179964),
                    i(773529912, 1546045734),
                    i(1294757372, 1522805485),
                    i(1396182291, 2643833823),
                    i(1695183700, 2343527390),
                    i(1986661051, 1014477480),
                    i(2177026350, 1206759142),
                    i(2456956037, 344077627),
                    i(2730485921, 1290863460),
                    i(2820302411, 3158454273),
                    i(3259730800, 3505952657),
                    i(3345764771, 106217008),
                    i(3516065817, 3606008344),
                    i(3600352804, 1432725776),
                    i(4094571909, 1467031594),
                    i(275423344, 851169720),
                    i(430227734, 3100823752),
                    i(506948616, 1363258195),
                    i(659060556, 3750685593),
                    i(883997877, 3785050280),
                    i(958139571, 3318307427),
                    i(1322822218, 3812723403),
                    i(1537002063, 2003034995),
                    i(1747873779, 3602036899),
                    i(1955562222, 1575990012),
                    i(2024104815, 1125592928),
                    i(2227730452, 2716904306),
                    i(2361852424, 442776044),
                    i(2428436474, 593698344),
                    i(2756734187, 3733110249),
                    i(3204031479, 2999351573),
                    i(3329325298, 3815920427),
                    i(3391569614, 3928383900),
                    i(3515267271, 566280711),
                    i(3940187606, 3454069534),
                    i(4118630271, 4000239992),
                    i(116418474, 1914138554),
                    i(174292421, 2731055270),
                    i(289380356, 3203993006),
                    i(460393269, 320620315),
                    i(685471733, 587496836),
                    i(852142971, 1086792851),
                    i(1017036298, 365543100),
                    i(1126000580, 2618297676),
                    i(1288033470, 3409855158),
                    i(1501505948, 4234509866),
                    i(1607167915, 987167468),
                    i(1816402316, 1246189591)
                  ],
                  ht = [],
                  u = 0;
                u < 80;
                u++
              )
                ht[u] = i();
              var r = (r.SHA512 = e.extend({
                _doReset: function () {
                  this._hash = new o.init([
                    new n.init(1779033703, 4089235720),
                    new n.init(3144134277, 2227873595),
                    new n.init(1013904242, 4271175723),
                    new n.init(2773480762, 1595750129),
                    new n.init(1359893119, 2917565137),
                    new n.init(2600822924, 725511199),
                    new n.init(528734635, 4215389547),
                    new n.init(1541459225, 327033209)
                  ]);
                },
                _doProcessBlock: function (L, H) {
                  for (
                    var t = this._hash.words,
                      e = t[0],
                      r = t[1],
                      n = t[2],
                      o = t[3],
                      i = t[4],
                      u = t[5],
                      f = t[6],
                      t = t[7],
                      M = e.high,
                      s = e.low,
                      D = r.high,
                      a = r.low,
                      z = n.high,
                      c = n.low,
                      F = o.high,
                      h = o.low,
                      N = i.high,
                      l = i.low,
                      W = u.high,
                      p = u.low,
                      K = f.high,
                      y = f.low,
                      X = t.high,
                      g = t.low,
                      w = M,
                      d = s,
                      b = D,
                      v = a,
                      m = z,
                      E = c,
                      q = F,
                      O = h,
                      B = N,
                      A = l,
                      Y = W,
                      V = p,
                      J = K,
                      G = y,
                      Q = X,
                      Z = g,
                      S = 0;
                    S < 80;
                    S++
                  ) {
                    var _ = ht[S],
                      j,
                      x,
                      U,
                      k,
                      U,
                      $,
                      U,
                      P,
                      I,
                      P,
                      tt,
                      k,
                      T,
                      et,
                      rt,
                      T,
                      nt,
                      U,
                      j;
                    S < 16
                      ? ((j = _.high = 0 | L[H + 2 * S]), (x = _.low = 0 | L[H + 2 * S + 1]))
                      : ((k = (U = ht[S - 15]).high),
                        (U = U.low),
                        (I = (P = ht[S - 2]).high),
                        (P = P.low),
                        (j =
                          (j =
                            (j =
                              (((k >>> 1) | (U << 31)) ^ ((k >>> 8) | (U << 24)) ^ (k >>> 7)) +
                              (et = (T = ht[S - 7]).high) +
                              ((x = (U = ((U >>> 1) | (k << 31)) ^ ((U >>> 8) | (k << 24)) ^ ((U >>> 7) | (k << 25))) + (rt = T.low)) >>>
                                0 <
                              U >>> 0
                                ? 1
                                : 0)) +
                            (((I >>> 19) | (P << 13)) ^ ((I << 3) | (P >>> 29)) ^ (I >>> 6)) +
                            ((x += k = ((P >>> 19) | (I << 13)) ^ ((P << 3) | (I >>> 29)) ^ ((P >>> 6) | (I << 26))) >>> 0 < k >>> 0
                              ? 1
                              : 0)) +
                          (nt = (T = ht[S - 16]).high) +
                          ((x += U = T.low) >>> 0 < U >>> 0 ? 1 : 0)),
                        (_.high = j),
                        (_.low = x));
                    var C,
                      P = (B & Y) ^ (~B & J),
                      I = (A & V) ^ (~A & G),
                      k = (w & b) ^ (w & m) ^ (b & m),
                      ot,
                      it,
                      T = ((d >>> 28) | (w << 4)) ^ ((d << 30) | (w >>> 2)) ^ ((d << 25) | (w >>> 7)),
                      ut,
                      ft,
                      U = ct[S],
                      _ = U.high,
                      st = U.low,
                      R =
                        Q +
                        (((B >>> 14) | (A << 18)) ^ ((B >>> 18) | (A << 14)) ^ ((B << 23) | (A >>> 9))) +
                        ((C = Z + (((A >>> 14) | (B << 18)) ^ ((A >>> 18) | (B << 14)) ^ ((A << 23) | (B >>> 9)))) >>> 0 < Z >>> 0 ? 1 : 0),
                      at = T + ((d & v) ^ (d & E) ^ (v & E)),
                      Q = J,
                      Z = G,
                      J = Y,
                      G = V,
                      Y = B,
                      V = A,
                      B =
                        (q +
                          (R =
                            (R = (R = R + P + ((C += I) >>> 0 < I >>> 0 ? 1 : 0)) + _ + ((C += st) >>> 0 < st >>> 0 ? 1 : 0)) +
                            j +
                            ((C += x) >>> 0 < x >>> 0 ? 1 : 0)) +
                          ((A = (O + C) | 0) >>> 0 < O >>> 0 ? 1 : 0)) |
                        0,
                      q = m,
                      O = E,
                      m = b,
                      E = v,
                      b = w,
                      v = d,
                      w =
                        (R +
                          ((((w >>> 28) | (d << 4)) ^ ((w << 30) | (d >>> 2)) ^ ((w << 25) | (d >>> 7))) +
                            k +
                            (at >>> 0 < T >>> 0 ? 1 : 0)) +
                          ((d = (C + at) | 0) >>> 0 < C >>> 0 ? 1 : 0)) |
                        0;
                  }
                  (s = e.low = s + d),
                    (e.high = M + w + (s >>> 0 < d >>> 0 ? 1 : 0)),
                    (a = r.low = a + v),
                    (r.high = D + b + (a >>> 0 < v >>> 0 ? 1 : 0)),
                    (c = n.low = c + E),
                    (n.high = z + m + (c >>> 0 < E >>> 0 ? 1 : 0)),
                    (h = o.low = h + O),
                    (o.high = F + q + (h >>> 0 < O >>> 0 ? 1 : 0)),
                    (l = i.low = l + A),
                    (i.high = N + B + (l >>> 0 < A >>> 0 ? 1 : 0)),
                    (p = u.low = p + V),
                    (u.high = W + Y + (p >>> 0 < V >>> 0 ? 1 : 0)),
                    (y = f.low = y + G),
                    (f.high = K + J + (y >>> 0 < G >>> 0 ? 1 : 0)),
                    (g = t.low = g + Z),
                    (t.high = X + Q + (g >>> 0 < Z >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var t = this._data,
                    e = t.words,
                    r = 8 * this._nDataBytes,
                    n = 8 * t.sigBytes;
                  return (
                    (e[n >>> 5] |= 128 << (24 - (n % 32))),
                    (e[30 + (((128 + n) >>> 10) << 5)] = Math.floor(r / 4294967296)),
                    (e[31 + (((128 + n) >>> 10) << 5)] = r),
                    (t.sigBytes = 4 * e.length),
                    this._process(),
                    this._hash.toX32()
                  );
                },
                clone: function () {
                  var t = e.clone.call(this);
                  return (t._hash = this._hash.clone()), t;
                },
                blockSize: 32
              }));
              (t.SHA512 = e._createHelper(r)), (t.HmacSHA512 = e._createHmacHelper(r));
            })(),
            f.SHA512);
        },
        function (L, t, e) {
          "use strict";
          e.r(t);
          var n,
            r = e(0),
            r = e.n(r),
            o = e(4),
            H = e.n(o),
            o = e(5),
            M = e.n(o),
            o = e(6),
            D = e.n(o),
            o = e(2),
            i = e.n(o),
            o;
          function u(e, t) {
            var r = Object.keys(e),
              n;
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                r.push.apply(r, n)),
              r
            );
          }
          function f(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(r), !0).forEach(function (t) {
                    z(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : u(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
            }
            return e;
          }
          function z(t, e, r) {
            e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r);
          }
          function F(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function s(e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          }
          ((o = n = n || {}).SHA1 = "sha1"), (o.SHA256 = "sha256"), (o.SHA512 = "sha512");
          var a,
            c = s(n),
            o;
          ((o = a = a || {}).ASCII = "ascii"), (o.BASE64 = "base64"), (o.HEX = "hex"), (o.LATIN1 = "latin1"), (o.UTF8 = "utf8");
          var h,
            l = s(a),
            o,
            p = (((o = h = h || {}).HOTP = "hotp"), (o.TOTP = "totp"), s(h)),
            y = function () {
              throw new Error("Please provide an options.createDigest implementation.");
            };
          function g(t) {
            return /^(\d+)$/.test(t);
          }
          function w(t, e, r) {
            var r;
            return t.length >= e
              ? t
              : ((r = Array(e + 1).join(r)),
                ""
                  .concat(r)
                  .concat(t)
                  .slice(-1 * e));
          }
          function d(t) {
            var e = "otpauth://".concat(t.type, "/{labelPrefix}:{accountName}?secret={secret}{query}"),
              r = [];
            if (p.indexOf(t.type) < 0)
              throw new Error("Expecting options.type to be one of ".concat(p.join(", "), ". Received ").concat(t.type, "."));
            if ("hotp" === t.type) {
              if (null == t.counter || "number" != typeof t.counter)
                throw new Error('Expecting options.counter to be a number when options.type is "hotp".');
              r.push("&counter=".concat(t.counter));
            }
            return (
              "totp" === t.type && t.step && r.push("&period=".concat(t.step)),
              t.digits && r.push("&digits=".concat(t.digits)),
              t.algorithm && r.push("&algorithm=".concat(t.algorithm.toUpperCase())),
              t.issuer && r.push("&issuer=".concat(encodeURIComponent(t.issuer))),
              e
                .replace("{labelPrefix}", encodeURIComponent(t.issuer || t.accountName))
                .replace("{accountName}", encodeURIComponent(t.accountName))
                .replace("{secret}", t.secret)
                .replace("{query}", r.join(""))
            );
          }
          function b(t) {
            return (b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
          }
          function N(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function W(t, e) {
            if (!e || ("object" !== b(e) && "function" != typeof e)) {
              var t = t;
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            }
            return e;
          }
          function v(t) {
            return (v = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function m(t, e) {
            return (m =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function E(e, t) {
            var r = Object.keys(e),
              n;
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                r.push.apply(r, n)),
              r
            );
          }
          function K(t, e, r) {
            e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r);
          }
          function O(t) {
            if ("function" != typeof t.createDigest) throw new Error("Expecting options.createDigest to be a function.");
            if ("function" != typeof t.createHmacKey) throw new Error("Expecting options.createHmacKey to be a function.");
            if ("number" != typeof t.digits) throw new Error("Expecting options.digits to be a number.");
            if (!t.algorithm || c.indexOf(t.algorithm) < 0)
              throw new Error("Expecting options.algorithm to be one of ".concat(c.join(", "), ". Received ").concat(t.algorithm, "."));
            if (!t.encoding || l.indexOf(t.encoding) < 0)
              throw new Error("Expecting options.encoding to be one of ".concat(l.join(", "), ". Received ").concat(t.encoding, "."));
          }
          var X = function (t, e, r) {
            return Buffer.from(e, r).toString("hex");
          };
          function q(t) {
            var t = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? E(Object(r), !0).forEach(function (t) {
                      K(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : E(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
              }
              return e;
            })({}, { algorithm: n.SHA1, createHmacKey: X, createDigest: y, digits: 6, encoding: a.ASCII }, {}, t);
            return O(t), Object.freeze(t);
          }
          function Y(t, e, r) {
            var e = w(e.toString(16), 16, "0"),
              t = r.createHmacKey(r.algorithm, t, r.encoding),
              n;
            return r.createDigest(r.algorithm, t, e);
          }
          function B(t, e, r) {
            return (
              (t = r.digest || Y(t, e, r)),
              (e = r.digits),
              (t = Buffer.from(t, "hex")),
              (r = 15 & t[t.length - 1]),
              (t = (((127 & t[r]) << 24) | ((255 & t[1 + r]) << 16) | ((255 & t[2 + r]) << 8) | (255 & t[3 + r])) % Math.pow(10, e)),
              w(String(t), e, "0")
            );
            var t, e, r;
          }
          function V(t, e, r, n, o) {
            return d({ algorithm: o.algorithm, digits: o.digits, type: h.HOTP, accountName: t, counter: n, issuer: e, secret: r });
          }
          var o = (function (t) {
              function r() {
                var t = this,
                  e = r;
                if (t instanceof e) return W(this, v(r).apply(this, arguments));
                throw new TypeError("Cannot call a class as a function");
              }
              var e,
                n,
                o,
                i = r,
                t = t;
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              return (
                (i.prototype = Object.create(t && t.prototype, { constructor: { value: i, writable: !0, configurable: !0 } })),
                t && m(i, t),
                N(
                  (e = r).prototype,
                  (n = [
                    {
                      key: "create",
                      value: function () {
                        var t;
                        return new r(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
                      }
                    },
                    {
                      key: "allOptions",
                      value: function () {
                        return q(this.options);
                      }
                    },
                    {
                      key: "generate",
                      value: function (t, e) {
                        return B(t, e, this.allOptions());
                      }
                    },
                    {
                      key: "check",
                      value: function (t, e, r) {
                        return (t = t), (e = e), (r = r), (n = this.allOptions()), !!g(t) && t === B(e, r, n);
                        var t, e, r, n;
                      }
                    },
                    {
                      key: "verify",
                      value: function (t) {
                        if ("object" !== b(t)) throw new Error("Expecting argument 0 of verify to be an object");
                        return this.check(t.token, t.secret, t.counter);
                      }
                    },
                    {
                      key: "keyuri",
                      value: function (t, e, r, n) {
                        return V(t, e, r, n, this.allOptions());
                      }
                    }
                  ])
                ),
                r
              );
            })(
              (F((J = A).prototype, [
                {
                  key: "create",
                  value: function () {
                    var t;
                    return new A(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
                  }
                },
                {
                  key: "clone",
                  value: function () {
                    var t,
                      e = this.create(f({}, this._defaultOptions, {}, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}));
                    return (e.options = this._options), e;
                  }
                },
                {
                  key: "allOptions",
                  value: function () {
                    return this.options;
                  }
                },
                {
                  key: "resetOptions",
                  value: function () {
                    this._options = Object.freeze({});
                  }
                },
                {
                  key: "options",
                  get: function () {
                    return Object.freeze(f({}, this._defaultOptions, {}, this._options));
                  },
                  set: function (t) {
                    this._options = Object.freeze(f({}, this._options, {}, t));
                  }
                }
              ]),
              A)
            ),
            J,
            G,
            Q;
          function A() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
              e = this,
              r = A;
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
            (this._defaultOptions = Object.freeze(f({}, t))), (this._options = Object.freeze({}));
          }
          function S(t) {
            return (S =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
          }
          function Z(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function $(t, e) {
            if (!e || ("object" !== S(e) && "function" != typeof e)) {
              var t = t;
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            }
            return e;
          }
          function _(t) {
            return (_ = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function j(t, e) {
            return (j =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function x(e, t) {
            var r = Object.keys(e),
              n;
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                r.push.apply(r, n)),
              r
            );
          }
          function U(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? x(Object(r), !0).forEach(function (t) {
                    tt(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : x(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
            }
            return e;
          }
          function tt(t, e, r) {
            e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r);
          }
          function et(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
              (function (t, e) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                  var r = [],
                    n = !0,
                    o = !1,
                    i = void 0;
                  try {
                    for (var u, f = t[Symbol.iterator](); !(n = (u = f.next()).done) && (r.push(u.value), !e || r.length !== e); n = !0);
                  } catch (t) {
                    (o = !0), (i = t);
                  } finally {
                    try {
                      n || null == f.return || f.return();
                    } finally {
                      if (o) throw i;
                    }
                  }
                  return r;
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              })()
            );
          }
          function k(t) {
            if ("number" == typeof t) return [Math.abs(t), Math.abs(t)];
            if (Array.isArray(t)) {
              var t = et(t, 2),
                e = t[0],
                t = t[1];
              if ("number" == typeof e && "number" == typeof t) return [Math.abs(e), Math.abs(t)];
            }
            throw new Error("Expecting options.window to be an number or [number, number].");
          }
          function P(t) {
            if ((O(t), k(t.window), "number" != typeof t.epoch)) throw new Error("Expecting options.epoch to be a number.");
            if ("number" != typeof t.step) throw new Error("Expecting options.step to be a number.");
          }
          var I = function (t, e, r) {
              var n = t.length,
                t = Buffer.from(t, e).toString("hex"),
                e;
              return n < r ? ((e = new Array(r - n + 1).join(t)), Buffer.from(e, "hex").slice(0, r).toString("hex")) : t;
            },
            T = function (t, e, r) {
              switch (t) {
                case n.SHA1:
                  return I(e, r, 20);
                case n.SHA256:
                  return I(e, r, 32);
                case n.SHA512:
                  return I(e, r, 64);
                default:
                  throw new Error("Expecting algorithm to be one of ".concat(c.join(", "), ". Received ").concat(t, "."));
              }
            };
          function rt(t) {
            var t = U(
              {},
              {
                algorithm: n.SHA1,
                createDigest: y,
                createHmacKey: T,
                digits: 6,
                encoding: a.ASCII,
                epoch: Date.now(),
                step: 30,
                window: 0
              },
              {},
              t
            );
            return P(t), Object.freeze(t);
          }
          function C(t, e) {
            var t, r;
            return B(t, ((t = e.epoch), (r = e.step), Math.floor(t / r / 1e3)), e);
          }
          function nt(t, e, r, n) {
            var o = [];
            if (0 !== n)
              for (var i = 1, u; i <= n; i++) {
                o.push(t + e * i * r);
              }
            return o;
          }
          function ot(t, e, r) {
            return g(t) && t === C(e, r);
          }
          function it(t, r, n, o) {
            var i = null;
            return (
              t.some(function (t, e) {
                return !!ot(r, n, U({}, o, { epoch: t })) && ((i = e + 1), !0);
              }),
              i
            );
          }
          function ut(t, e, r) {
            var n, o, i, u, f, n, f;
            return ot(t, e, r)
              ? 0
              : null !==
                (f = it(
                  (n = {
                    current: (n = r.epoch),
                    past: nt(n, -1, (f = 1e3 * (o = r.step)), (u = k((i = r.window)))[0]),
                    future: nt(n, 1, f, u[1])
                  }).past,
                  t,
                  e,
                  r
                ))
              ? -1 * f
              : it(n.future, t, e, r);
          }
          function ft(t, e) {
            return Math.floor(t / 1e3) % e;
          }
          function st(t, e, r, n) {
            return d({ algorithm: n.algorithm, digits: n.digits, step: n.step, type: h.TOTP, accountName: t, issuer: e, secret: r });
          }
          var at = (function (t) {
            function r() {
              var t = this,
                e = r;
              if (t instanceof e) return $(this, _(r).apply(this, arguments));
              throw new TypeError("Cannot call a class as a function");
            }
            var e,
              n,
              o,
              i = r,
              t = t;
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            return (
              (i.prototype = Object.create(t && t.prototype, { constructor: { value: i, writable: !0, configurable: !0 } })),
              t && j(i, t),
              Z(
                (e = r).prototype,
                (n = [
                  {
                    key: "create",
                    value: function () {
                      var t;
                      return new r(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
                    }
                  },
                  {
                    key: "allOptions",
                    value: function () {
                      return rt(this.options);
                    }
                  },
                  {
                    key: "generate",
                    value: function (t) {
                      return C(t, this.allOptions());
                    }
                  },
                  {
                    key: "checkDelta",
                    value: function (t, e) {
                      return ut(t, e, this.allOptions());
                    }
                  },
                  {
                    key: "check",
                    value: function (t, e) {
                      return "number" == typeof this.checkDelta(t, e);
                    }
                  },
                  {
                    key: "verify",
                    value: function (t) {
                      if ("object" !== S(t)) throw new Error("Expecting argument 0 of verify to be an object");
                      return this.check(t.token, t.secret);
                    }
                  },
                  {
                    key: "timeRemaining",
                    value: function () {
                      var t,
                        e,
                        e = this.allOptions(),
                        t = e.epoch;
                      return (e = e.step) - ft(t, e);
                    }
                  },
                  {
                    key: "timeUsed",
                    value: function () {
                      var t = this.allOptions();
                      return ft(t.epoch, t.step);
                    }
                  },
                  {
                    key: "keyuri",
                    value: function (t, e, r) {
                      return st(t, e, r, this.allOptions());
                    }
                  }
                ])
              ),
              r
            );
          })(o);
          function ct(t) {
            return (ct =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
          }
          function ht(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          function lt(t, e) {
            if (!e || ("object" !== ct(e) && "function" != typeof e)) {
              var t = t;
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            }
            return e;
          }
          function pt(t) {
            return (pt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function yt(t, e) {
            return (yt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function gt(e, t) {
            var r = Object.keys(e),
              n;
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                r.push.apply(r, n)),
              r
            );
          }
          function wt(t, e, r) {
            e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r);
          }
          function dt(t) {
            var t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? gt(Object(r), !0).forEach(function (t) {
                        wt(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : gt(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
                }
                return e;
              })(
                {},
                {
                  algorithm: n.SHA1,
                  createDigest: y,
                  createHmacKey: T,
                  digits: 6,
                  encoding: a.HEX,
                  epoch: Date.now(),
                  step: 30,
                  window: 0
                },
                {},
                t
              ),
              e = t;
            if ((P(e), "function" != typeof e.keyDecoder)) throw new Error("Expecting options.keyDecoder to be a function.");
            if (e.keyEncoder && "function" != typeof e.keyEncoder) throw new Error("Expecting options.keyEncoder to be a function.");
            return Object.freeze(t);
          }
          function bt(t, e) {
            return e.keyEncoder(t, e.encoding);
          }
          function R(t, e) {
            return e.keyDecoder(t, e.encoding);
          }
          function vt(t, e) {
            return bt(e.createRandomBytes(t, e.encoding), e);
          }
          var mt = (function (t) {
              function r() {
                var t = this,
                  e = r;
                if (t instanceof e) return lt(this, pt(r).apply(this, arguments));
                throw new TypeError("Cannot call a class as a function");
              }
              var e,
                n,
                o,
                i = r,
                t = t;
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              return (
                (i.prototype = Object.create(t && t.prototype, { constructor: { value: i, writable: !0, configurable: !0 } })),
                t && yt(i, t),
                ht(
                  (e = r).prototype,
                  (n = [
                    {
                      key: "create",
                      value: function () {
                        var t;
                        return new r(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
                      }
                    },
                    {
                      key: "allOptions",
                      value: function () {
                        return dt(this.options);
                      }
                    },
                    {
                      key: "generate",
                      value: function (t) {
                        return (t = t), (e = this.allOptions()), C(R(t, e), e);
                        var t, e;
                      }
                    },
                    {
                      key: "checkDelta",
                      value: function (t, e) {
                        return (t = t), (e = e), (r = this.allOptions()), ut(t, R(e, r), r);
                        var t, e, r;
                      }
                    },
                    {
                      key: "encode",
                      value: function (t) {
                        return bt(t, this.allOptions());
                      }
                    },
                    {
                      key: "decode",
                      value: function (t) {
                        return R(t, this.allOptions());
                      }
                    },
                    {
                      key: "generateSecret",
                      value: function () {
                        var t;
                        return vt(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10, this.allOptions());
                      }
                    }
                  ])
                ),
                r
              );
            })(at),
            Et = r.a.lib.WordArray,
            r = function (t, e, r) {
              var t = (function (t) {
                  switch (t) {
                    case n.SHA1:
                      return H.a;
                    case n.SHA256:
                      return M.a;
                    case n.SHA512:
                      return D.a;
                    default:
                      throw new Error("Expecting argument 0 to be one of ".concat(c.join(", "), ". Received ").concat(t, "."));
                  }
                })(t),
                r = i.a.parse(r),
                e = i.a.parse(e);
              return String(t(r, e));
            },
            Ot = e(7),
            Bt = e.n(Ot),
            Ot = e(8),
            At = e.n(Ot);
          function St(t) {
            return (St =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  })(t);
          }
          e.d(t, "hotp", function () {
            return _t;
          }),
            e.d(t, "totp", function () {
              return jt;
            }),
            e.d(t, "authenticator", function () {
              return xt;
            }),
            "object" === ("undefined" == typeof window ? "undefined" : St(window)) &&
              void 0 === window.Buffer &&
              (window.Buffer = buffer.Buffer);
          var _t = new o({ createDigest: r }),
            jt = new at({ createDigest: r }),
            xt = new mt({
              createDigest: r,
              createRandomBytes: function (t, e) {
                var t = Et.random(t);
                return Buffer.from(t.toString(), "hex").toString(e);
              },
              keyDecoder: function (t, e) {
                var t = Bt()(t.toUpperCase(), "RFC4648");
                return Buffer.from(t).toString(e);
              },
              keyEncoder: function (t, e) {
                return At()(Buffer.from(t, e), "RFC4648", { padding: !1 });
              }
            });
        }
      ]),
      (n = {}),
      (o.m = r),
      (o.c = n),
      (o.d = function (t, e, r) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var n in e)
            o.d(
              r,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return r;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = ""),
      o((o.s = 12))
    );
    function o(t) {
      var e;
      return (n[t] || ((e = n[t] = { i: t, l: !1, exports: {} }), r[t].call(e.exports, e, e.exports, o), (e.l = !0), e)).exports;
    }
    var r, n;
  });
