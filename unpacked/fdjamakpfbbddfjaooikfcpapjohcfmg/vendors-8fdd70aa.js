/*! For license information please see vendors-8fdd70aa.js.LICENSE.txt */
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8114],
  {
    165938: (e, t, n) => {
      (t.publicEncrypt = n(468741)),
        (t.privateDecrypt = n(260220)),
        (t.privateEncrypt = function (e, n) {
          return t.publicEncrypt(e, n, !0);
        }),
        (t.publicDecrypt = function (e, n) {
          return t.privateDecrypt(e, n, !0);
        });
    },
    870439: (e, t, n) => {
      var r = n(920160),
        o = n(421607).Buffer;
      function i(e) {
        var t = o.allocUnsafe(4);
        return t.writeUInt32BE(e, 0), t;
      }
      e.exports = function (e, t) {
        for (var n, a = o.alloc(0), l = 0; a.length < t; ) (n = i(l++)), (a = o.concat([a, r("sha1").update(e).update(n).digest()]));
        return a.slice(0, t);
      };
    },
    260220: (e, t, n) => {
      var r = n(508742),
        o = n(870439),
        i = n(535115),
        a = n(528891),
        l = n(657364),
        u = n(920160),
        c = n(734546),
        s = n(421607).Buffer;
      e.exports = function (e, t, n) {
        var d;
        d = e.padding ? e.padding : n ? 1 : 4;
        var f,
          p = r(e),
          h = p.modulus.byteLength();
        if (t.length > h || new a(t).cmp(p.modulus) >= 0) throw new Error("decryption error");
        f = n ? c(new a(t), p) : l(t, p);
        var v = s.alloc(h - f.length);
        if (((f = s.concat([v, f], h)), 4 === d))
          return (function (e, t) {
            var n = e.modulus.byteLength(),
              r = u("sha1").update(s.alloc(0)).digest(),
              a = r.length;
            if (0 !== t[0]) throw new Error("decryption error");
            var l = t.slice(1, a + 1),
              c = t.slice(a + 1),
              d = i(l, o(c, a)),
              f = i(c, o(d, n - a - 1));
            if (
              (function (e, t) {
                (e = s.from(e)), (t = s.from(t));
                var n = 0,
                  r = e.length;
                e.length !== t.length && (n++, (r = Math.min(e.length, t.length)));
                for (var o = -1; ++o < r; ) n += e[o] ^ t[o];
                return n;
              })(r, f.slice(0, a))
            )
              throw new Error("decryption error");
            for (var p = a; 0 === f[p]; ) p++;
            if (1 !== f[p++]) throw new Error("decryption error");
            return f.slice(p);
          })(p, f);
        if (1 === d)
          return (function (e, t, n) {
            for (var r = t.slice(0, 2), o = 2, i = 0; 0 !== t[o++]; )
              if (o >= t.length) {
                i++;
                break;
              }
            var a = t.slice(2, o - 1);
            if (((("0002" !== r.toString("hex") && !n) || ("0001" !== r.toString("hex") && n)) && i++, a.length < 8 && i++, i))
              throw new Error("decryption error");
            return t.slice(o);
          })(0, f, n);
        if (3 === d) return f;
        throw new Error("unknown padding");
      };
    },
    468741: (e, t, n) => {
      var r = n(508742),
        o = n(898773),
        i = n(920160),
        a = n(870439),
        l = n(535115),
        u = n(528891),
        c = n(734546),
        s = n(657364),
        d = n(421607).Buffer;
      e.exports = function (e, t, n) {
        var f;
        f = e.padding ? e.padding : n ? 1 : 4;
        var p,
          h = r(e);
        if (4 === f)
          p = (function (e, t) {
            var n = e.modulus.byteLength(),
              r = t.length,
              c = i("sha1").update(d.alloc(0)).digest(),
              s = c.length,
              f = 2 * s;
            if (r > n - f - 2) throw new Error("message too long");
            var p = d.alloc(n - r - f - 2),
              h = n - s - 1,
              v = o(s),
              m = l(d.concat([c, p, d.alloc(1, 1), t], h), a(v, h)),
              g = l(v, a(m, s));
            return new u(d.concat([d.alloc(1), g, m], n));
          })(h, t);
        else if (1 === f)
          p = (function (e, t, n) {
            var r,
              i = t.length,
              a = e.modulus.byteLength();
            if (i > a - 11) throw new Error("message too long");
            return (
              (r = n
                ? d.alloc(a - i - 3, 255)
                : (function (e) {
                    for (var t, n = d.allocUnsafe(e), r = 0, i = o(2 * e), a = 0; r < e; )
                      a === i.length && ((i = o(2 * e)), (a = 0)), (t = i[a++]) && (n[r++] = t);
                    return n;
                  })(a - i - 3)),
              new u(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], a))
            );
          })(h, t, n);
        else {
          if (3 !== f) throw new Error("unknown padding");
          if ((p = new u(t)).cmp(h.modulus) >= 0) throw new Error("data too long for modulus");
        }
        return n ? s(p, h) : c(p, h);
      };
    },
    734546: (e, t, n) => {
      var r = n(528891),
        o = n(421607).Buffer;
      e.exports = function (e, t) {
        return o.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray());
      };
    },
    535115: (e) => {
      e.exports = function (e, t) {
        for (var n = e.length, r = -1; ++r < n; ) e[r] ^= t[r];
        return e;
      };
    },
    227377: function (e, t, n) {
      var r;
      (e = n.nmd(e)),
        (function (o) {
          t && t.nodeType, e && e.nodeType;
          var i = "object" == typeof n.g && n.g;
          i.global !== i && i.window !== i && i.self;
          var a,
            l = 2147483647,
            u = 36,
            c = 1,
            s = 26,
            d = 38,
            f = 700,
            p = 72,
            h = 128,
            v = "-",
            m = /^xn--/,
            g = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            w = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input"
            },
            b = u - c,
            E = Math.floor,
            C = String.fromCharCode;
          function x(e) {
            throw RangeError(w[e]);
          }
          function M(e, t) {
            for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
            return r;
          }
          function T(e, t) {
            var n = e.split("@"),
              r = "";
            return n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + M((e = e.replace(y, ".")).split("."), t).join(".");
          }
          function P(e) {
            for (var t, n, r = [], o = 0, i = e.length; o < i; )
              (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
                ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                  ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                  : (r.push(t), o--)
                : r.push(t);
            return r;
          }
          function _(e) {
            return M(e, function (e) {
              var t = "";
              return e > 65535 && ((t += C((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), t + C(e);
            }).join("");
          }
          function D(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
          }
          function O(e, t, n) {
            var r = 0;
            for (e = n ? E(e / f) : e >> 1, e += E(e / t); e > (b * s) >> 1; r += u) e = E(e / b);
            return E(r + ((b + 1) * e) / (e + d));
          }
          function S(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              d,
              f,
              m,
              g,
              y,
              w = [],
              b = e.length,
              C = 0,
              M = h,
              T = p;
            for ((n = e.lastIndexOf(v)) < 0 && (n = 0), r = 0; r < n; ++r)
              e.charCodeAt(r) >= 128 && x("not-basic"), w.push(e.charCodeAt(r));
            for (o = n > 0 ? n + 1 : 0; o < b; ) {
              for (
                i = C, a = 1, d = u;
                o >= b && x("invalid-input"),
                  ((f = (y = e.charCodeAt(o++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : u) >= u ||
                    f > E((l - C) / a)) &&
                    x("overflow"),
                  (C += f * a),
                  !(f < (m = d <= T ? c : d >= T + s ? s : d - T));
                d += u
              )
                a > E(l / (g = u - m)) && x("overflow"), (a *= g);
              (T = O(C - i, (t = w.length + 1), 0 == i)), E(C / t) > l - M && x("overflow"), (M += E(C / t)), (C %= t), w.splice(C++, 0, M);
            }
            return _(w);
          }
          function R(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              d,
              f,
              m,
              g,
              y,
              w,
              b,
              M,
              T,
              _ = [];
            for (w = (e = P(e)).length, t = h, n = 0, i = p, a = 0; a < w; ++a) (y = e[a]) < 128 && _.push(C(y));
            for (r = o = _.length, o && _.push(v); r < w; ) {
              for (d = l, a = 0; a < w; ++a) (y = e[a]) >= t && y < d && (d = y);
              for (d - t > E((l - n) / (b = r + 1)) && x("overflow"), n += (d - t) * b, t = d, a = 0; a < w; ++a)
                if (((y = e[a]) < t && ++n > l && x("overflow"), y == t)) {
                  for (f = n, m = u; !(f < (g = m <= i ? c : m >= i + s ? s : m - i)); m += u)
                    (T = f - g), (M = u - g), _.push(C(D(g + (T % M), 0))), (f = E(T / M));
                  _.push(C(D(f, 0))), (i = O(n, b, r == o)), (n = 0), ++r;
                }
              ++n, ++t;
            }
            return _.join("");
          }
          (a = {
            version: "1.3.2",
            ucs2: { decode: P, encode: _ },
            decode: S,
            encode: R,
            toASCII: function (e) {
              return T(e, function (e) {
                return g.test(e) ? "xn--" + R(e) : e;
              });
            },
            toUnicode: function (e) {
              return T(e, function (e) {
                return m.test(e) ? S(e.slice(4).toLowerCase()) : e;
              });
            }
          }),
            void 0 ===
              (r = function () {
                return a;
              }.call(t, n, t, e)) || (e.exports = r);
        })();
    },
    911590: (e, t, n) => {
      "use strict";
      n.d(t, { H9: () => m, xX: () => v });
      const r = 2147483647,
        o = 36,
        i = /^xn--/,
        a = /[^\0-\x7E]/,
        l = /[\x2E\u3002\uFF0E\uFF61]/g,
        u = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        c = Math.floor,
        s = String.fromCharCode;
      function d(e) {
        throw new RangeError(u[e]);
      }
      function f(e, t) {
        const n = e.split("@");
        let r = "";
        n.length > 1 && ((r = n[0] + "@"), (e = n[1]));
        const o = (function (e, t) {
          const n = [];
          let r = e.length;
          for (; r--; ) n[r] = t(e[r]);
          return n;
        })((e = e.replace(l, ".")).split("."), t).join(".");
        return r + o;
      }
      const p = function (e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        },
        h = function (e, t, n) {
          let r = 0;
          for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > 455; r += o) e = c(e / 35);
          return c(r + (36 * e) / (e + 38));
        },
        v = function (e) {
          return f(e, function (e) {
            return i.test(e)
              ? (function (e) {
                  const t = [],
                    n = e.length;
                  let i = 0,
                    a = 128,
                    l = 72,
                    u = e.lastIndexOf("-");
                  u < 0 && (u = 0);
                  for (let n = 0; n < u; ++n) e.charCodeAt(n) >= 128 && d("not-basic"), t.push(e.charCodeAt(n));
                  for (let f = u > 0 ? u + 1 : 0; f < n; ) {
                    let u = i;
                    for (let t = 1, a = o; ; a += o) {
                      f >= n && d("invalid-input");
                      const u = (s = e.charCodeAt(f++)) - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : o;
                      (u >= o || u > c((r - i) / t)) && d("overflow"), (i += u * t);
                      const p = a <= l ? 1 : a >= l + 26 ? 26 : a - l;
                      if (u < p) break;
                      const h = o - p;
                      t > c(r / h) && d("overflow"), (t *= h);
                    }
                    const p = t.length + 1;
                    (l = h(i - u, p, 0 == u)), c(i / p) > r - a && d("overflow"), (a += c(i / p)), (i %= p), t.splice(i++, 0, a);
                  }
                  var s;
                  return String.fromCodePoint(...t);
                })(e.slice(4).toLowerCase())
              : e;
          });
        },
        m = function (e) {
          return f(e, function (e) {
            return a.test(e)
              ? "xn--" +
                  (function (e) {
                    const t = [];
                    let n = (e = (function (e) {
                        const t = [];
                        let n = 0;
                        const r = e.length;
                        for (; n < r; ) {
                          const o = e.charCodeAt(n++);
                          if (o >= 55296 && o <= 56319 && n < r) {
                            const r = e.charCodeAt(n++);
                            56320 == (64512 & r) ? t.push(((1023 & o) << 10) + (1023 & r) + 65536) : (t.push(o), n--);
                          } else t.push(o);
                        }
                        return t;
                      })(e)).length,
                      i = 128,
                      a = 0,
                      l = 72;
                    for (const n of e) n < 128 && t.push(s(n));
                    let u = t.length,
                      f = u;
                    for (u && t.push("-"); f < n; ) {
                      let n = r;
                      for (const t of e) t >= i && t < n && (n = t);
                      const v = f + 1;
                      n - i > c((r - a) / v) && d("overflow"), (a += (n - i) * v), (i = n);
                      for (const n of e)
                        if ((n < i && ++a > r && d("overflow"), n == i)) {
                          let e = a;
                          for (let n = o; ; n += o) {
                            const r = n <= l ? 1 : n >= l + 26 ? 26 : n - l;
                            if (e < r) break;
                            const i = e - r,
                              a = o - r;
                            t.push(s(p(r + (i % a), 0))), (e = c(i / a));
                          }
                          t.push(s(p(e, 0))), (l = h(a, v, f == u)), (a = 0), ++f;
                        }
                      ++a, ++i;
                    }
                    return t.join("");
                  })(e)
              : e;
          });
        };
    },
    191054: (e, t, n) => {
      var r = n(167868);
      function o(e) {
        (this.mode = r.MODE_8BIT_BYTE), (this.data = e);
      }
      (o.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8);
        }
      }),
        (e.exports = o);
    },
    434897: (e) => {
      function t() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var n = 0; n < t; n++) this.putBit(1 == ((e >>> (t - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
        }
      }),
        (e.exports = t);
    },
    374799: (e) => {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    154761: (e, t, n) => {
      var r = n(120142);
      function o(e, t) {
        if (null == e.length) throw new Error(e.length + "/" + t);
        for (var n = 0; n < e.length && 0 == e[n]; ) n++;
        this.num = new Array(e.length - n + t);
        for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
      }
      (o.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
            for (var i = 0; i < e.getLength(); i++) t[n + i] ^= r.gexp(r.glog(this.get(n)) + r.glog(e.get(i)));
          return new o(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (var t = r.glog(this.get(0)) - r.glog(e.get(0)), n = new Array(this.getLength()), i = 0; i < this.getLength(); i++)
            n[i] = this.get(i);
          for (i = 0; i < e.getLength(); i++) n[i] ^= r.gexp(r.glog(e.get(i)) + t);
          return new o(n, 0).mod(e);
        }
      }),
        (e.exports = o);
    },
    333101: (e, t, n) => {
      var r = n(191054),
        o = n(715046),
        i = n(434897),
        a = n(725502),
        l = n(154761);
      function u(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var c = u.prototype;
      (c.addData = function (e) {
        var t = new r(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (c.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
          return this.modules[e][t];
        }),
        (c.getModuleCount = function () {
          return this.moduleCount;
        }),
        (c.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (var t = o.getRSBlocks(e, this.errorCorrectLevel), n = new i(), r = 0, l = 0; l < t.length; l++) r += t[l].dataCount;
              for (l = 0; l < this.dataList.length; l++) {
                var u = this.dataList[l];
                n.put(u.mode, 4), n.put(u.getLength(), a.getLengthInBits(u.mode, e)), u.write(n);
              }
              if (n.getLengthInBits() <= 8 * r) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (c.makeImpl = function (e, t) {
          (this.moduleCount = 4 * this.typeNumber + 17), (this.modules = new Array(this.moduleCount));
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[n] = new Array(this.moduleCount);
            for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache && (this.dataCache = u.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, t);
        }),
        (c.setupPositionProbePattern = function (e, t) {
          for (var n = -1; n <= 7; n++)
            if (!(e + n <= -1 || this.moduleCount <= e + n))
              for (var r = -1; r <= 7; r++)
                t + r <= -1 ||
                  this.moduleCount <= t + r ||
                  (this.modules[e + n][t + r] =
                    (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                    (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                    (2 <= n && n <= 4 && 2 <= r && r <= 4));
        }),
        (c.getBestMaskPattern = function () {
          for (var e = 0, t = 0, n = 0; n < 8; n++) {
            this.makeImpl(!0, n);
            var r = a.getLostPoint(this);
            (0 == n || e > r) && ((e = r), (t = n));
          }
          return t;
        }),
        (c.createMovieClip = function (e, t, n) {
          var r = e.createEmptyMovieClip(t, n);
          this.make();
          for (var o = 0; o < this.modules.length; o++)
            for (var i = 1 * o, a = 0; a < this.modules[o].length; a++) {
              var l = 1 * a;
              this.modules[o][a] &&
                (r.beginFill(0, 100), r.moveTo(l, i), r.lineTo(l + 1, i), r.lineTo(l + 1, i + 1), r.lineTo(l, i + 1), r.endFill());
            }
          return r;
        }),
        (c.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (c.setupPositionAdjustPattern = function () {
          for (var e = a.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
            for (var n = 0; n < e.length; n++) {
              var r = e[t],
                o = e[n];
              if (null == this.modules[r][o])
                for (var i = -2; i <= 2; i++)
                  for (var l = -2; l <= 2; l++) this.modules[r + i][o + l] = -2 == i || 2 == i || -2 == l || 2 == l || (0 == i && 0 == l);
            }
        }),
        (c.setupTypeNumber = function (e) {
          for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
            var r = !e && 1 == ((t >> n) & 1);
            this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] = r;
          }
          for (n = 0; n < 18; n++)
            (r = !e && 1 == ((t >> n) & 1)), (this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r);
        }),
        (c.setupTypeInfo = function (e, t) {
          for (var n = (this.errorCorrectLevel << 3) | t, r = a.getBCHTypeInfo(n), o = 0; o < 15; o++) {
            var i = !e && 1 == ((r >> o) & 1);
            o < 6 ? (this.modules[o][8] = i) : o < 8 ? (this.modules[o + 1][8] = i) : (this.modules[this.moduleCount - 15 + o][8] = i);
          }
          for (o = 0; o < 15; o++)
            (i = !e && 1 == ((r >> o) & 1)),
              o < 8
                ? (this.modules[8][this.moduleCount - o - 1] = i)
                : o < 9
                ? (this.modules[8][15 - o - 1 + 1] = i)
                : (this.modules[8][15 - o - 1] = i);
          this.modules[this.moduleCount - 8][8] = !e;
        }),
        (c.mapData = function (e, t) {
          for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, l = this.moduleCount - 1; l > 0; l -= 2)
            for (6 == l && l--; ; ) {
              for (var u = 0; u < 2; u++)
                if (null == this.modules[r][l - u]) {
                  var c = !1;
                  i < e.length && (c = 1 == ((e[i] >>> o) & 1)),
                    a.getMask(t, r, l - u) && (c = !c),
                    (this.modules[r][l - u] = c),
                    -1 == --o && (i++, (o = 7));
                }
              if ((r += n) < 0 || this.moduleCount <= r) {
                (r -= n), (n = -n);
                break;
              }
            }
        }),
        (u.PAD0 = 236),
        (u.PAD1 = 17),
        (u.createData = function (e, t, n) {
          for (var r = o.getRSBlocks(e, t), l = new i(), c = 0; c < n.length; c++) {
            var s = n[c];
            l.put(s.mode, 4), l.put(s.getLength(), a.getLengthInBits(s.mode, e)), s.write(l);
          }
          var d = 0;
          for (c = 0; c < r.length; c++) d += r[c].dataCount;
          if (l.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + l.getLengthInBits() + ">" + 8 * d + ")");
          for (l.getLengthInBits() + 4 <= 8 * d && l.put(0, 4); l.getLengthInBits() % 8 != 0; ) l.putBit(!1);
          for (; !(l.getLengthInBits() >= 8 * d || (l.put(u.PAD0, 8), l.getLengthInBits() >= 8 * d)); ) l.put(u.PAD1, 8);
          return u.createBytes(l, r);
        }),
        (u.createBytes = function (e, t) {
          for (var n = 0, r = 0, o = 0, i = new Array(t.length), u = new Array(t.length), c = 0; c < t.length; c++) {
            var s = t[c].dataCount,
              d = t[c].totalCount - s;
            (r = Math.max(r, s)), (o = Math.max(o, d)), (i[c] = new Array(s));
            for (var f = 0; f < i[c].length; f++) i[c][f] = 255 & e.buffer[f + n];
            n += s;
            var p = a.getErrorCorrectPolynomial(d),
              h = new l(i[c], p.getLength() - 1).mod(p);
            for (u[c] = new Array(p.getLength() - 1), f = 0; f < u[c].length; f++) {
              var v = f + h.getLength() - u[c].length;
              u[c][f] = v >= 0 ? h.get(v) : 0;
            }
          }
          var m = 0;
          for (f = 0; f < t.length; f++) m += t[f].totalCount;
          var g = new Array(m),
            y = 0;
          for (f = 0; f < r; f++) for (c = 0; c < t.length; c++) f < i[c].length && (g[y++] = i[c][f]);
          for (f = 0; f < o; f++) for (c = 0; c < t.length; c++) f < u[c].length && (g[y++] = u[c][f]);
          return g;
        }),
        (e.exports = u);
    },
    715046: (e, t, n) => {
      var r = n(374799);
      function o(e, t) {
        (this.totalCount = e), (this.dataCount = t);
      }
      (o.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ]),
        (o.getRSBlocks = function (e, t) {
          var n = o.getRsBlockTable(e, t);
          if (null == n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
          for (var r = n.length / 3, i = new Array(), a = 0; a < r; a++)
            for (var l = n[3 * a + 0], u = n[3 * a + 1], c = n[3 * a + 2], s = 0; s < l; s++) i.push(new o(u, c));
          return i;
        }),
        (o.getRsBlockTable = function (e, t) {
          switch (t) {
            case r.L:
              return o.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case r.M:
              return o.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case r.Q:
              return o.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case r.H:
              return o.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (e.exports = o);
    },
    120142: (e) => {
      for (
        var t = {
            glog: function (e) {
              if (e < 1) throw new Error("glog(" + e + ")");
              return t.LOG_TABLE[e];
            },
            gexp: function (e) {
              for (; e < 0; ) e += 255;
              for (; e >= 256; ) e -= 255;
              return t.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
          },
          n = 0;
        n < 8;
        n++
      )
        t.EXP_TABLE[n] = 1 << n;
      for (n = 8; n < 256; n++) t.EXP_TABLE[n] = t.EXP_TABLE[n - 4] ^ t.EXP_TABLE[n - 5] ^ t.EXP_TABLE[n - 6] ^ t.EXP_TABLE[n - 8];
      for (n = 0; n < 255; n++) t.LOG_TABLE[t.EXP_TABLE[n]] = n;
      e.exports = t;
    },
    167868: (e) => {
      e.exports = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 };
    },
    725502: (e, t, n) => {
      var r = n(167868),
        o = n(154761),
        i = n(120142),
        a = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (e) {
            for (var t = e << 10; a.getBCHDigit(t) - a.getBCHDigit(a.G15) >= 0; ) t ^= a.G15 << (a.getBCHDigit(t) - a.getBCHDigit(a.G15));
            return ((e << 10) | t) ^ a.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            for (var t = e << 12; a.getBCHDigit(t) - a.getBCHDigit(a.G18) >= 0; ) t ^= a.G18 << (a.getBCHDigit(t) - a.getBCHDigit(a.G18));
            return (e << 12) | t;
          },
          getBCHDigit: function (e) {
            for (var t = 0; 0 != e; ) t++, (e >>>= 1);
            return t;
          },
          getPatternPosition: function (e) {
            return a.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, t, n) {
            switch (e) {
              case 0:
                return (t + n) % 2 == 0;
              case 1:
                return t % 2 == 0;
              case 2:
                return n % 3 == 0;
              case 3:
                return (t + n) % 3 == 0;
              case 4:
                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
              case 5:
                return ((t * n) % 2) + ((t * n) % 3) == 0;
              case 6:
                return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
              case 7:
                return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var t = new o([1], 0), n = 0; n < e; n++) t = t.multiply(new o([1, i.gexp(n)], 0));
            return t;
          },
          getLengthInBits: function (e, t) {
            if (1 <= t && t < 10)
              switch (e) {
                case r.MODE_NUMBER:
                  return 10;
                case r.MODE_ALPHA_NUM:
                  return 9;
                case r.MODE_8BIT_BYTE:
                case r.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + e);
              }
            else if (t < 27)
              switch (e) {
                case r.MODE_NUMBER:
                  return 12;
                case r.MODE_ALPHA_NUM:
                  return 11;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + e);
              }
            else {
              if (!(t < 41)) throw new Error("type:" + t);
              switch (e) {
                case r.MODE_NUMBER:
                  return 14;
                case r.MODE_ALPHA_NUM:
                  return 13;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + e);
              }
            }
          },
          getLostPoint: function (e) {
            for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
              for (var o = 0; o < t; o++) {
                for (var i = 0, a = e.isDark(r, o), l = -1; l <= 1; l++)
                  if (!(r + l < 0 || t <= r + l))
                    for (var u = -1; u <= 1; u++) o + u < 0 || t <= o + u || (0 == l && 0 == u) || (a == e.isDark(r + l, o + u) && i++);
                i > 5 && (n += 3 + i - 5);
              }
            for (r = 0; r < t - 1; r++)
              for (o = 0; o < t - 1; o++) {
                var c = 0;
                e.isDark(r, o) && c++,
                  e.isDark(r + 1, o) && c++,
                  e.isDark(r, o + 1) && c++,
                  e.isDark(r + 1, o + 1) && c++,
                  (0 != c && 4 != c) || (n += 3);
              }
            for (r = 0; r < t; r++)
              for (o = 0; o < t - 6; o++)
                e.isDark(r, o) &&
                  !e.isDark(r, o + 1) &&
                  e.isDark(r, o + 2) &&
                  e.isDark(r, o + 3) &&
                  e.isDark(r, o + 4) &&
                  !e.isDark(r, o + 5) &&
                  e.isDark(r, o + 6) &&
                  (n += 40);
            for (o = 0; o < t; o++)
              for (r = 0; r < t - 6; r++)
                e.isDark(r, o) &&
                  !e.isDark(r + 1, o) &&
                  e.isDark(r + 2, o) &&
                  e.isDark(r + 3, o) &&
                  e.isDark(r + 4, o) &&
                  !e.isDark(r + 5, o) &&
                  e.isDark(r + 6, o) &&
                  (n += 40);
            var s = 0;
            for (o = 0; o < t; o++) for (r = 0; r < t; r++) e.isDark(r, o) && s++;
            return n + (Math.abs((100 * s) / t / t - 50) / 5) * 10;
          }
        };
      e.exports = a;
    },
    701056: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          r(e)
        );
      }
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function i(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(n, !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
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
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), e;
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? p(e) : t;
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
      function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function h(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && v(e, t);
      }
      function v(e, t) {
        return (
          (v =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          v(e, t)
        );
      }
      function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var g = n(696832),
        y = (n(869480), n(333101)),
        w = n(374799);
      function b(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += String.fromCharCode(r))
            : r < 2048
            ? ((t += String.fromCharCode(192 | (r >> 6))), (t += String.fromCharCode(128 | (63 & r))))
            : r < 55296 || r >= 57344
            ? ((t += String.fromCharCode(224 | (r >> 12))),
              (t += String.fromCharCode(128 | ((r >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & r))))
            : (n++,
              (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(n)))),
              (t += String.fromCharCode(240 | (r >> 18))),
              (t += String.fromCharCode(128 | ((r >> 12) & 63))),
              (t += String.fromCharCode(128 | ((r >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & r))));
        }
        return t;
      }
      var E = { size: 128, level: "L", bgColor: "#FFFFFF", fgColor: "#000000", includeMargin: !1 },
        C = 4,
        x = 0.1;
      function M(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = [];
        return (
          e.forEach(function (e, r) {
            var o = null;
            e.forEach(function (i, a) {
              if (!i && null !== o)
                return (
                  n.push(
                    "M"
                      .concat(o + t, " ")
                      .concat(r + t, "h")
                      .concat(a - o, "v1H")
                      .concat(o + t, "z")
                  ),
                  void (o = null)
                );
              if (a !== e.length - 1) i && null === o && (o = a);
              else {
                if (!i) return;
                null === o
                  ? n.push(
                      "M"
                        .concat(a + t, ",")
                        .concat(r + t, " h1v1H")
                        .concat(a + t, "z")
                    )
                  : n.push(
                      "M"
                        .concat(o + t, ",")
                        .concat(r + t, " h")
                        .concat(a + 1 - o, "v1H")
                        .concat(o + t, "z")
                    );
              }
            });
          }),
          n.join("")
        );
      }
      function T(e, t) {
        return e.slice().map(function (e, n) {
          return n < t.y || n >= t.y + t.h
            ? e
            : e.map(function (e, n) {
                return (n < t.x || n >= t.x + t.w) && e;
              });
        });
      }
      function P(e, t) {
        var n = e.imageSettings,
          r = e.size,
          o = e.includeMargin;
        if (null == n) return null;
        var i = o ? C : 0,
          a = t.length + 2 * i,
          l = Math.floor(r * x),
          u = a / r,
          c = (n.width || l) * u,
          s = (n.height || l) * u,
          d = null == n.x ? t.length / 2 - c / 2 : n.x * u,
          f = null == n.y ? t.length / 2 - s / 2 : n.y * u,
          p = null;
        if (n.excavate) {
          var h = Math.floor(d),
            v = Math.floor(f);
          p = { x: h, y: v, w: Math.ceil(c + d - h), h: Math.ceil(s + f - v) };
        }
        return { x: d, y: f, h: s, w: c, excavation: p };
      }
      var _ = (function () {
          try {
            new Path2D().addPath(new Path2D());
          } catch (e) {
            return !1;
          }
          return !0;
        })(),
        D = (function (e) {
          function t() {
            var e, n;
            u(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              m(p((n = d(this, (e = f(t)).call.apply(e, [this].concat(o))))), "_canvas", void 0),
              m(p(n), "_image", void 0),
              m(p(n), "state", { imgLoaded: !1 }),
              m(p(n), "handleImageLoad", function () {
                n.setState({ imgLoaded: !0 });
              }),
              n
            );
          }
          return (
            h(t, e),
            s(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this._image && this._image.complete && this.handleImageLoad(), this.update();
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  var t, n;
                  (null === (t = this.props.imageSettings) || void 0 === t ? void 0 : t.src) !==
                    (null === (n = e.imageSettings) || void 0 === n ? void 0 : n.src) && this.setState({ imgLoaded: !1 });
                }
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.update();
                }
              },
              {
                key: "update",
                value: function () {
                  var e = this.props,
                    t = e.value,
                    n = e.size,
                    r = e.level,
                    o = e.bgColor,
                    i = e.fgColor,
                    a = e.includeMargin,
                    l = e.imageSettings,
                    u = new y(-1, w[r]);
                  if ((u.addData(b(t)), u.make(), null != this._canvas)) {
                    var c = this._canvas,
                      s = c.getContext("2d");
                    if (!s) return;
                    var d = u.modules;
                    if (null === d) return;
                    var f = a ? C : 0,
                      p = d.length + 2 * f,
                      h = P(this.props, d);
                    null != l && null != h && null != h.excavation && (d = T(d, h.excavation));
                    var v = window.devicePixelRatio || 1;
                    c.height = c.width = n * v;
                    var m = (n / p) * v;
                    s.scale(m, m),
                      (s.fillStyle = o),
                      s.fillRect(0, 0, p, p),
                      (s.fillStyle = i),
                      _
                        ? s.fill(new Path2D(M(d, f)))
                        : d.forEach(function (e, t) {
                            e.forEach(function (e, n) {
                              e && s.fillRect(n + f, t + f, 1, 1);
                            });
                          }),
                      this.state.imgLoaded && this._image && null != h && s.drawImage(this._image, h.x + f, h.y + f, h.w, h.h);
                  }
                }
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.value, t.size),
                    r = (t.level, t.bgColor, t.fgColor, t.style),
                    i = (t.includeMargin, t.imageSettings),
                    u = l(t, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]),
                    c = a({ height: n, width: n }, r),
                    s = null,
                    d = i && i.src;
                  return (
                    null != i &&
                      null != d &&
                      (s = g.createElement("img", {
                        src: d,
                        style: { display: "none" },
                        onLoad: this.handleImageLoad,
                        ref: function (t) {
                          return (e._image = t);
                        }
                      })),
                    g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(
                        "canvas",
                        o(
                          {
                            style: c,
                            height: n,
                            width: n,
                            ref: function (t) {
                              return (e._canvas = t);
                            }
                          },
                          u
                        )
                      ),
                      s
                    )
                  );
                }
              }
            ]),
            t
          );
        })(g.PureComponent);
      m(D, "defaultProps", E);
      var O = (function (e) {
        function t() {
          return u(this, t), d(this, f(t).apply(this, arguments));
        }
        return (
          h(t, e),
          s(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.size,
                  r = e.level,
                  i = e.bgColor,
                  a = e.fgColor,
                  u = e.includeMargin,
                  c = e.imageSettings,
                  s = l(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]),
                  d = new y(-1, w[r]);
                d.addData(b(t)), d.make();
                var f = d.modules;
                if (null === f) return null;
                var p = u ? C : 0,
                  h = f.length + 2 * p,
                  v = P(this.props, f),
                  m = null;
                null != c &&
                  null != v &&
                  (null != v.excavation && (f = T(f, v.excavation)),
                  (m = g.createElement("image", {
                    xlinkHref: c.src,
                    height: v.h,
                    width: v.w,
                    x: v.x + p,
                    y: v.y + p,
                    preserveAspectRatio: "none"
                  })));
                var E = M(f, p);
                return g.createElement(
                  "svg",
                  o({ shapeRendering: "crispEdges", height: n, width: n, viewBox: "0 0 ".concat(h, " ").concat(h) }, s),
                  g.createElement("path", { fill: i, d: "M0,0 h".concat(h, "v").concat(h, "H0z") }),
                  g.createElement("path", { fill: a, d: E }),
                  m
                );
              }
            }
          ]),
          t
        );
      })(g.PureComponent);
      m(O, "defaultProps", E);
      var S = function (e) {
        var t = e.renderAs,
          n = l(e, ["renderAs"]),
          r = "svg" === t ? O : D;
        return g.createElement(r, n);
      };
      (S.defaultProps = a({ renderAs: "canvas" }, E)), (e.exports = S);
    },
    342868: (e, t, n) => {
      "use strict";
      var r = n(79112),
        o = n(652458);
      function i(e, t) {
        return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
      }
      function a(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? a(Object.keys(e))
              .sort(function (e, t) {
                return Number(e) - Number(t);
              })
              .map(function (t) {
                return e[t];
              })
          : e;
      }
      (t.extract = function (e) {
        return e.split("?")[1] || "";
      }),
        (t.parse = function (e, t) {
          var n = (function (e) {
              var t;
              switch (e.arrayFormat) {
                case "index":
                  return function (e, n, r) {
                    (t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, "")),
                      t ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n)) : (r[e] = n);
                  };
                case "bracket":
                  return function (e, n, r) {
                    (t = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, "")),
                      t ? (void 0 !== r[e] ? (r[e] = [].concat(r[e], n)) : (r[e] = [n])) : (r[e] = n);
                  };
                default:
                  return function (e, t, n) {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                  };
              }
            })((t = o({ arrayFormat: "none" }, t))),
            r = Object.create(null);
          return "string" != typeof e
            ? r
            : (e = e.trim().replace(/^(\?|#|&)/, ""))
            ? (e.split("&").forEach(function (e) {
                var t = e.replace(/\+/g, " ").split("="),
                  o = t.shift(),
                  i = t.length > 0 ? t.join("=") : void 0;
                (i = void 0 === i ? null : decodeURIComponent(i)), n(decodeURIComponent(o), i, r);
              }),
              Object.keys(r)
                .sort()
                .reduce(function (e, t) {
                  var n = r[t];
                  return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? (e[t] = a(n)) : (e[t] = n), e;
                }, Object.create(null)))
            : r;
        }),
        (t.stringify = function (e, t) {
          var n = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return function (t, n, r) {
                  return null === n ? [i(t, e), "[", r, "]"].join("") : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("");
                };
              case "bracket":
                return function (t, n) {
                  return null === n ? i(t, e) : [i(t, e), "[]=", i(n, e)].join("");
                };
              default:
                return function (t, n) {
                  return null === n ? i(t, e) : [i(t, e), "=", i(n, e)].join("");
                };
            }
          })((t = o({ encode: !0, strict: !0, arrayFormat: "none" }, t)));
          return e
            ? Object.keys(e)
                .sort()
                .map(function (r) {
                  var o = e[r];
                  if (void 0 === o) return "";
                  if (null === o) return i(r, t);
                  if (Array.isArray(o)) {
                    var a = [];
                    return (
                      o.slice().forEach(function (e) {
                        void 0 !== e && a.push(n(r, e, a.length));
                      }),
                      a.join("&")
                    );
                  }
                  return i(r, t) + "=" + i(o, t);
                })
                .filter(function (e) {
                  return e.length > 0;
                })
                .join("&")
            : "";
        });
    },
    366319: (e, t, n) => {
      "use strict";
      var r = n(79112),
        o = n(652458),
        i = n(865140);
      function a(e, t) {
        return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
      }
      function l(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? l(Object.keys(e))
              .sort(function (e, t) {
                return Number(e) - Number(t);
              })
              .map(function (t) {
                return e[t];
              })
          : e;
      }
      function u(e) {
        var t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function c(e, t) {
        var n = (function (e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function (e, n, r) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n)) : (r[e] = n);
                };
              case "bracket":
                return function (e, n, r) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t ? (void 0 !== r[e] ? (r[e] = [].concat(r[e], n)) : (r[e] = [n])) : (r[e] = n);
                };
              default:
                return function (e, t, n) {
                  void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                };
            }
          })((t = o({ arrayFormat: "none" }, t))),
          r = Object.create(null);
        return "string" != typeof e
          ? r
          : (e = e.trim().replace(/^[?#&]/, ""))
          ? (e.split("&").forEach(function (e) {
              var t = e.replace(/\+/g, " ").split("="),
                o = t.shift(),
                a = t.length > 0 ? t.join("=") : void 0;
              (a = void 0 === a ? null : i(a)), n(i(o), a, r);
            }),
            Object.keys(r)
              .sort()
              .reduce(function (e, t) {
                var n = r[t];
                return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? (e[t] = l(n)) : (e[t] = n), e;
              }, Object.create(null)))
          : r;
      }
      (t.extract = u),
        (t.parse = c),
        (t.stringify = function (e, t) {
          !1 === (t = o({ encode: !0, strict: !0, arrayFormat: "none" }, t)).sort && (t.sort = function () {});
          var n = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return function (t, n, r) {
                  return null === n ? [a(t, e), "[", r, "]"].join("") : [a(t, e), "[", a(r, e), "]=", a(n, e)].join("");
                };
              case "bracket":
                return function (t, n) {
                  return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("");
                };
              default:
                return function (t, n) {
                  return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("");
                };
            }
          })(t);
          return e
            ? Object.keys(e)
                .sort(t.sort)
                .map(function (r) {
                  var o = e[r];
                  if (void 0 === o) return "";
                  if (null === o) return a(r, t);
                  if (Array.isArray(o)) {
                    var i = [];
                    return (
                      o.slice().forEach(function (e) {
                        void 0 !== e && i.push(n(r, e, i.length));
                      }),
                      i.join("&")
                    );
                  }
                  return a(r, t) + "=" + a(o, t);
                })
                .filter(function (e) {
                  return e.length > 0;
                })
                .join("&")
            : "";
        }),
        (t.parseUrl = function (e, t) {
          return { url: e.split("?")[0] || "", query: c(u(e), t) };
        });
    },
    124400: (e) => {
      "use strict";
      function t(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e, n, r, o) {
        (n = n || "&"), (r = r || "=");
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var a = /\+/g;
        e = e.split(n);
        var l = 1e3;
        o && "number" == typeof o.maxKeys && (l = o.maxKeys);
        var u = e.length;
        l > 0 && u > l && (u = l);
        for (var c = 0; c < u; ++c) {
          var s,
            d,
            f,
            p,
            h = e[c].replace(a, "%20"),
            v = h.indexOf(r);
          v >= 0 ? ((s = h.substr(0, v)), (d = h.substr(v + 1))) : ((s = h), (d = "")),
            (f = decodeURIComponent(s)),
            (p = decodeURIComponent(d)),
            t(i, f) ? (Array.isArray(i[f]) ? i[f].push(p) : (i[f] = [i[f], p])) : (i[f] = p);
        }
        return i;
      };
    },
    607433: (e) => {
      "use strict";
      var t = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function (e, n, r, o) {
        return (
          (n = n || "&"),
          (r = r || "="),
          null === e && (e = void 0),
          "object" == typeof e
            ? Object.keys(e)
                .map(function (o) {
                  var i = encodeURIComponent(t(o)) + r;
                  return Array.isArray(e[o])
                    ? e[o]
                        .map(function (e) {
                          return i + encodeURIComponent(t(e));
                        })
                        .join(n)
                    : i + encodeURIComponent(t(e[o]));
                })
                .join(n)
            : o
            ? encodeURIComponent(t(o)) + r + encodeURIComponent(t(e))
            : ""
        );
      };
    },
    3048: (e, t, n) => {
      "use strict";
      (t.decode = t.parse = n(124400)), (t.encode = t.stringify = n(607433));
    },
    127781: (e) => {
      "use strict";
      function t(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e, n, r, o) {
        (n = n || "&"), (r = r || "=");
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var a = /\+/g;
        e = e.split(n);
        var l = 1e3;
        o && "number" == typeof o.maxKeys && (l = o.maxKeys);
        var u = e.length;
        l > 0 && u > l && (u = l);
        for (var c = 0; c < u; ++c) {
          var s,
            d,
            f,
            p,
            h = e[c].replace(a, "%20"),
            v = h.indexOf(r);
          v >= 0 ? ((s = h.substr(0, v)), (d = h.substr(v + 1))) : ((s = h), (d = "")),
            (f = decodeURIComponent(s)),
            (p = decodeURIComponent(d)),
            t(i, f) ? (Array.isArray(i[f]) ? i[f].push(p) : (i[f] = [i[f], p])) : (i[f] = p);
        }
        return i;
      };
    },
    408379: (e) => {
      "use strict";
      var t = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function (e, n, r, o) {
        return (
          (n = n || "&"),
          (r = r || "="),
          null === e && (e = void 0),
          "object" == typeof e
            ? Object.keys(e)
                .map(function (o) {
                  var i = encodeURIComponent(t(o)) + r;
                  return Array.isArray(e[o])
                    ? e[o]
                        .map(function (e) {
                          return i + encodeURIComponent(t(e));
                        })
                        .join(n)
                    : i + encodeURIComponent(t(e[o]));
                })
                .filter(Boolean)
                .join(n)
            : o
            ? encodeURIComponent(t(o)) + r + encodeURIComponent(t(e))
            : ""
        );
      };
    },
    813254: (e, t, n) => {
      "use strict";
      (t.decode = t.parse = n(127781)), (t.encode = t.stringify = n(408379));
    },
    612527: (e, t, n) => {
      "use strict";
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented)) return null == t ? void 0 : t(r);
        };
      }
      n.d(t, { M: () => r });
    },
    271601: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => l });
      var r = n(696832);
      if (8630 == n.j) var o = n(581710);
      if (8630 == n.j) var i = n(339188);
      if (8630 == n.j) var a = n(932218);
      function l(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, o.b)(t),
          [u, c] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
          s = e + "CollectionSlot",
          d = r.forwardRef((e, t) => {
            const { scope: n, children: o } = e,
              l = c(s, n),
              u = (0, i.e)(t, l.collectionRef);
            return r.createElement(a.g7, { ref: u }, o);
          }),
          f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          h = r.forwardRef((e, t) => {
            const { scope: n, children: o, ...l } = e,
              u = r.useRef(null),
              s = (0, i.e)(t, u),
              d = c(f, n);
            return (
              r.useEffect(
                () => (
                  d.itemMap.set(u, { ref: u, ...l }),
                  () => {
                    d.itemMap.delete(u);
                  }
                )
              ),
              r.createElement(a.g7, { [p]: "", ref: s }, o)
            );
          });
        return [
          {
            Provider: (e) => {
              const { scope: t, children: n } = e,
                o = r.useRef(null),
                i = r.useRef(new Map()).current;
              return r.createElement(u, { scope: t, itemMap: i, collectionRef: o }, n);
            },
            Slot: d,
            ItemSlot: h
          },
          function (t) {
            const n = c(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
            }, [n.collectionRef, n.itemMap]);
          },
          l
        ];
      }
    },
    339188: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => o, e: () => i });
      var r = n(696832);
      function o(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            })(e, t)
          );
      }
      function i(...e) {
        return (0, r.useCallback)(o(...e), e);
      }
    },
    581710: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => o });
      var r = n(696832);
      function o(e, t = []) {
        let n = [];
        const o = () => {
          const t = n.map((e) => (0, r.createContext)(e));
          return function (n) {
            const o = (null == n ? void 0 : n[e]) || t;
            return (0, r.useMemo)(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
          };
        };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              const i = (0, r.createContext)(o),
                a = n.length;
              function l(t) {
                const { scope: n, children: o, ...l } = t,
                  u = (null == n ? void 0 : n[e][a]) || i,
                  c = (0, r.useMemo)(() => l, Object.values(l));
                return (0, r.createElement)(u.Provider, { value: c }, o);
              }
              return (
                (n = [...n, o]),
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (n, l) {
                    const u = (null == l ? void 0 : l[e][a]) || i,
                      c = (0, r.useContext)(u);
                    if (c) return c;
                    if (void 0 !== o) return o;
                    throw new Error(`\`${n}\` must be used within \`${t}\``);
                  }
                ]
              );
            },
            i(o, ...t)
          ]
        );
      }
      function i(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            const o = n.reduce((t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }), {});
            return (0, r.useMemo)(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
          };
        };
        return (n.scopeName = t.scopeName), n;
      }
    },
    113806: (e, t, n) => {
      "use strict";
      n.d(t, { gm: () => i });
      var r = n(696832);
      const o = 8630 == n.j ? (0, r.createContext)(void 0) : null;
      function i(e) {
        const t = (0, r.useContext)(o);
        return e || t || "ltr";
      }
    },
    781472: (e, t, n) => {
      "use strict";
      n.d(t, { XB: () => f });
      var r = n(983124),
        o = n(696832),
        i = n(612527),
        a = n(924949),
        l = n(339188),
        u = n(818863);
      const c = "dismissableLayer.update";
      let s;
      const d = (0, o.createContext)({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
        f = (0, o.forwardRef)((e, t) => {
          var n;
          const {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: m,
              onFocusOutside: g,
              onInteractOutside: y,
              onDismiss: w,
              ...b
            } = e,
            E = (0, o.useContext)(d),
            [C, x] = (0, o.useState)(null),
            M =
              null !== (n = null == C ? void 0 : C.ownerDocument) && void 0 !== n
                ? n
                : null === globalThis || void 0 === globalThis
                ? void 0
                : globalThis.document,
            [, T] = (0, o.useState)({}),
            P = (0, l.e)(t, (e) => x(e)),
            _ = Array.from(E.layers),
            [D] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = _.indexOf(D),
            S = C ? _.indexOf(C) : -1,
            R = E.layersWithOutsidePointerEventsDisabled.size > 0,
            A = S >= O,
            k = (function (e, t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) {
              const n = (0, u.W)(e),
                r = (0, o.useRef)(!1),
                i = (0, o.useRef)(() => {});
              return (
                (0, o.useEffect)(() => {
                  const e = (e) => {
                      if (e.target && !r.current) {
                        const o = { originalEvent: e };
                        function a() {
                          h("dismissableLayer.pointerDownOutside", n, o, { discrete: !0 });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", i.current),
                            (i.current = a),
                            t.addEventListener("click", i.current, { once: !0 }))
                          : a();
                      } else t.removeEventListener("click", i.current);
                      r.current = !1;
                    },
                    o = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              const t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              A && !n && (null == m || m(e), null == y || y(e), e.defaultPrevented || null == w || w());
            }, M),
            L = (function (e, t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) {
              const n = (0, u.W)(e),
                r = (0, o.useRef)(!1);
              return (
                (0, o.useEffect)(() => {
                  const e = (e) => {
                    e.target && !r.current && h("dismissableLayer.focusOutside", n, { originalEvent: e }, { discrete: !1 });
                  };
                  return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                }, [t, n]),
                { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
              );
            })((e) => {
              const t = e.target;
              [...E.branches].some((e) => e.contains(t)) || (null == g || g(e), null == y || y(e), e.defaultPrevented || null == w || w());
            }, M);
          return (
            (function (e, t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) {
              const n = (0, u.W)(e);
              (0, o.useEffect)(() => {
                const e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e);
              }, [n, t]);
            })((e) => {
              S === E.layers.size - 1 && (null == v || v(e), !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, M),
            (0, o.useEffect)(() => {
              if (C)
                return (
                  f &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((s = M.body.style.pointerEvents), (M.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(C)),
                  E.layers.add(C),
                  p(),
                  () => {
                    f && 1 === E.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = s);
                  }
                );
            }, [C, M, f, E]),
            (0, o.useEffect)(
              () => () => {
                C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), p());
              },
              [C, E]
            ),
            (0, o.useEffect)(() => {
              const e = () => T({});
              return document.addEventListener(c, e), () => document.removeEventListener(c, e);
            }, []),
            (0, o.createElement)(
              a.WV.div,
              (0, r.Z)({}, b, {
                ref: P,
                style: { pointerEvents: R ? (A ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: (0, i.M)(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, k.onPointerDownCapture)
              })
            )
          );
        });
      function p() {
        const e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function h(e, t, n, { discrete: r }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }), r ? (0, a.jH)(o, i) : o.dispatchEvent(i);
      }
    },
    284418: (e, t, n) => {
      "use strict";
      n.d(t, { ck: () => Ke, Uv: () => Ue, fC: () => He, Tr: () => Ze, tu: () => ze, fF: () => Ve });
      var r = n(983124),
        o = n(696832),
        i = n(612527),
        a = n(339188),
        l = n(581710),
        u = n(700536),
        c = n(924949),
        s = n(271601),
        d = n(113806),
        f = n(781472),
        p = n(844079),
        h = n(470261),
        v = n(384008),
        m = n(700062),
        g = n(438007),
        y = n(124652),
        w = n(818863);
      const b = "rovingFocusGroup.onEntryFocus",
        E = { bubbles: !1, cancelable: !0 },
        C = "RovingFocusGroup",
        [x, M, T] = (0, s.B)(C),
        [P, _] = (0, l.b)(C, [T]),
        [D, O] = P(C),
        S = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            x.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, o.createElement)(x.Slot, { scope: e.__scopeRovingFocusGroup }, (0, o.createElement)(R, (0, r.Z)({}, e, { ref: t })))
          )
        ),
        R = (0, o.forwardRef)((e, t) => {
          const {
              __scopeRovingFocusGroup: n,
              orientation: l,
              loop: s = !1,
              dir: f,
              currentTabStopId: p,
              defaultCurrentTabStopId: h,
              onCurrentTabStopIdChange: v,
              onEntryFocus: m,
              ...g
            } = e,
            y = (0, o.useRef)(null),
            C = (0, a.e)(t, y),
            x = (0, d.gm)(f),
            [T = null, P] = (0, u.T)({ prop: p, defaultProp: h, onChange: v }),
            [_, O] = (0, o.useState)(!1),
            S = (0, w.W)(m),
            R = M(n),
            A = (0, o.useRef)(!1),
            [k, I] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              const e = y.current;
              if (e) return e.addEventListener(b, S), () => e.removeEventListener(b, S);
            }, [S]),
            (0, o.createElement)(
              D,
              {
                scope: n,
                orientation: l,
                dir: x,
                loop: s,
                currentTabStopId: T,
                onItemFocus: (0, o.useCallback)((e) => P(e), [P]),
                onItemShiftTab: (0, o.useCallback)(() => O(!0), []),
                onFocusableItemAdd: (0, o.useCallback)(() => I((e) => e + 1), []),
                onFocusableItemRemove: (0, o.useCallback)(() => I((e) => e - 1), [])
              },
              (0, o.createElement)(
                c.WV.div,
                (0, r.Z)({ tabIndex: _ || 0 === k ? -1 : 0, "data-orientation": l }, g, {
                  ref: C,
                  style: { outline: "none", ...e.style },
                  onMouseDown: (0, i.M)(e.onMouseDown, () => {
                    A.current = !0;
                  }),
                  onFocus: (0, i.M)(e.onFocus, (e) => {
                    const t = !A.current;
                    if (e.target === e.currentTarget && t && !_) {
                      const t = new CustomEvent(b, E);
                      if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                        const e = R().filter((e) => e.focusable);
                        L([e.find((e) => e.active), e.find((e) => e.id === T), ...e].filter(Boolean).map((e) => e.ref.current));
                      }
                    }
                    A.current = !1;
                  }),
                  onBlur: (0, i.M)(e.onBlur, () => O(!1))
                })
              )
            )
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          const { __scopeRovingFocusGroup: n, focusable: a = !0, active: l = !1, tabStopId: u, ...s } = e,
            d = (0, v.M)(),
            f = u || d,
            p = O("RovingFocusGroupItem", n),
            h = p.currentTabStopId === f,
            m = M(n),
            { onFocusableItemAdd: g, onFocusableItemRemove: y } = p;
          return (
            (0, o.useEffect)(() => {
              if (a) return g(), () => y();
            }, [a, g, y]),
            (0, o.createElement)(
              x.ItemSlot,
              { scope: n, id: f, focusable: a, active: l },
              (0, o.createElement)(
                c.WV.span,
                (0, r.Z)({ tabIndex: h ? 0 : -1, "data-orientation": p.orientation }, s, {
                  ref: t,
                  onMouseDown: (0, i.M)(e.onMouseDown, (e) => {
                    a ? p.onItemFocus(f) : e.preventDefault();
                  }),
                  onFocus: (0, i.M)(e.onFocus, () => p.onItemFocus(f)),
                  onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                    if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                    if (e.target !== e.currentTarget) return;
                    const t = (function (e, t, n) {
                      const r = (function (e, t) {
                        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
                      })(e.key, n);
                      return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) ||
                        ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r))
                        ? void 0
                        : k[r];
                    })(e, p.orientation, p.dir);
                    if (void 0 !== t) {
                      e.preventDefault();
                      let o = m()
                        .filter((e) => e.focusable)
                        .map((e) => e.ref.current);
                      if ("last" === t) o.reverse();
                      else if ("prev" === t || "next" === t) {
                        "prev" === t && o.reverse();
                        const i = o.indexOf(e.currentTarget);
                        o = p.loop ? ((r = i + 1), (n = o).map((e, t) => n[(r + t) % n.length])) : o.slice(i + 1);
                      }
                      setTimeout(() => L(o));
                    }
                    var n, r;
                  })
                })
              )
            )
          );
        }),
        k = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };
      function L(e) {
        const t = document.activeElement;
        for (const n of e) {
          if (n === t) return;
          if ((n.focus(), document.activeElement !== t)) return;
        }
      }
      const I = S,
        B = A;
      var F = n(932218),
        N = (n(340627), n(802116));
      const j = ["Enter", " "],
        W = ["ArrowUp", "PageDown", "End"],
        H = ["ArrowDown", "PageUp", "Home", ...W],
        U = { ltr: [...j, "ArrowRight"], rtl: [...j, "ArrowLeft"] },
        K = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        Z = "Menu",
        [V, z, G] = (0, s.B)(Z),
        [X, $] = (0, l.b)(Z, [G, m.D7, _]),
        Y = (0, m.D7)(),
        q = _(),
        [J, Q] = X(Z),
        [ee, te] = X(Z),
        ne = (0, o.forwardRef)((e, t) => {
          const { __scopeMenu: n, ...i } = e,
            a = Y(n);
          return (0, o.createElement)(m.ee, (0, r.Z)({}, a, i, { ref: t }));
        }),
        re = "MenuPortal",
        [oe, ie] = X(re, { forceMount: void 0 }),
        ae = "MenuContent",
        [le, ue] = X(ae),
        ce = (0, o.forwardRef)((e, t) => {
          const {
              __scopeMenu: n,
              loop: l = !1,
              trapFocus: u,
              onOpenAutoFocus: c,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: d,
              onEntryFocus: v,
              onEscapeKeyDown: g,
              onPointerDownOutside: y,
              onFocusOutside: w,
              onInteractOutside: b,
              onDismiss: E,
              disableOutsideScroll: C,
              ...x
            } = e,
            M = Q(ae, n),
            T = te(ae, n),
            P = Y(n),
            _ = q(n),
            D = z(n),
            [O, S] = (0, o.useState)(null),
            R = (0, o.useRef)(null),
            A = (0, a.e)(t, R, M.onContentChange),
            k = (0, o.useRef)(0),
            L = (0, o.useRef)(""),
            B = (0, o.useRef)(0),
            j = (0, o.useRef)(null),
            U = (0, o.useRef)("right"),
            K = (0, o.useRef)(0),
            Z = C ? N.Z : o.Fragment,
            V = C ? { as: F.g7, allowPinchZoom: !0 } : void 0;
          (0, o.useEffect)(() => () => window.clearTimeout(k.current), []), (0, p.EW)();
          const G = (0, o.useCallback)((e) => {
            var t, n;
            return (
              U.current === (null === (t = j.current) || void 0 === t ? void 0 : t.side) &&
              (function (e, t) {
                if (!t) return !1;
                return (function (e, t) {
                  const { x: n, y: r } = e;
                  let o = !1;
                  for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                    const a = t[e].x,
                      l = t[e].y,
                      u = t[i].x,
                      c = t[i].y;
                    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
                  }
                  return o;
                })({ x: e.clientX, y: e.clientY }, t);
              })(e, null === (n = j.current) || void 0 === n ? void 0 : n.area)
            );
          }, []);
          return (0, o.createElement)(
            le,
            {
              scope: n,
              searchRef: L,
              onItemEnter: (0, o.useCallback)(
                (e) => {
                  G(e) && e.preventDefault();
                },
                [G]
              ),
              onItemLeave: (0, o.useCallback)(
                (e) => {
                  var t;
                  G(e) || (null === (t = R.current) || void 0 === t || t.focus(), S(null));
                },
                [G]
              ),
              onTriggerLeave: (0, o.useCallback)(
                (e) => {
                  G(e) && e.preventDefault();
                },
                [G]
              ),
              pointerGraceTimerRef: B,
              onPointerGraceIntentChange: (0, o.useCallback)((e) => {
                j.current = e;
              }, [])
            },
            (0, o.createElement)(
              Z,
              V,
              (0, o.createElement)(
                h.M,
                {
                  asChild: !0,
                  trapped: u,
                  onMountAutoFocus: (0, i.M)(c, (e) => {
                    var t;
                    e.preventDefault(), null === (t = R.current) || void 0 === t || t.focus();
                  }),
                  onUnmountAutoFocus: s
                },
                (0, o.createElement)(
                  f.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: d,
                    onEscapeKeyDown: g,
                    onPointerDownOutside: y,
                    onFocusOutside: w,
                    onInteractOutside: b,
                    onDismiss: E
                  },
                  (0, o.createElement)(
                    I,
                    (0, r.Z)({ asChild: !0 }, _, {
                      dir: T.dir,
                      orientation: "vertical",
                      loop: l,
                      currentTabStopId: O,
                      onCurrentTabStopIdChange: S,
                      onEntryFocus: (0, i.M)(v, (e) => {
                        T.isUsingKeyboardRef.current || e.preventDefault();
                      })
                    }),
                    (0, o.createElement)(
                      m.VY,
                      (0, r.Z)(
                        {
                          role: "menu",
                          "aria-orientation": "vertical",
                          "data-state": Me(M.open),
                          "data-radix-menu-content": "",
                          dir: T.dir
                        },
                        P,
                        x,
                        {
                          ref: A,
                          style: { outline: "none", ...x.style },
                          onKeyDown: (0, i.M)(x.onKeyDown, (e) => {
                            const t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                              n = e.ctrlKey || e.altKey || e.metaKey,
                              r = 1 === e.key.length;
                            t &&
                              ("Tab" === e.key && e.preventDefault(),
                              !n &&
                                r &&
                                ((e) => {
                                  var t, n;
                                  const r = L.current + e,
                                    o = D().filter((e) => !e.disabled),
                                    i = document.activeElement,
                                    a = null === (t = o.find((e) => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue,
                                    l = (function (e, t, n) {
                                      const r = t.length > 1 && Array.from(t).every((e) => e === t[0]),
                                        o = r ? t[0] : t,
                                        i = n ? e.indexOf(n) : -1;
                                      let a = ((l = e), (u = Math.max(i, 0)), l.map((e, t) => l[(u + t) % l.length]));
                                      var l, u;
                                      1 === o.length && (a = a.filter((e) => e !== n));
                                      const c = a.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                                      return c !== n ? c : void 0;
                                    })(
                                      o.map((e) => e.textValue),
                                      r,
                                      a
                                    ),
                                    u = null === (n = o.find((e) => e.textValue === l)) || void 0 === n ? void 0 : n.ref.current;
                                  !(function e(t) {
                                    (L.current = t),
                                      window.clearTimeout(k.current),
                                      "" !== t && (k.current = window.setTimeout(() => e(""), 1e3));
                                  })(r),
                                    u && setTimeout(() => u.focus());
                                })(e.key));
                            const o = R.current;
                            if (e.target !== o) return;
                            if (!H.includes(e.key)) return;
                            e.preventDefault();
                            const i = D()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            W.includes(e.key) && i.reverse(),
                              (function (e) {
                                const t = document.activeElement;
                                for (const n of e) {
                                  if (n === t) return;
                                  if ((n.focus(), document.activeElement !== t)) return;
                                }
                              })(i);
                          }),
                          onBlur: (0, i.M)(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(k.current), (L.current = ""));
                          }),
                          onPointerMove: (0, i.M)(
                            e.onPointerMove,
                            Te((e) => {
                              const t = e.target,
                                n = K.current !== e.clientX;
                              if (e.currentTarget.contains(t) && n) {
                                const t = e.clientX > K.current ? "right" : "left";
                                (U.current = t), (K.current = e.clientX);
                              }
                            })
                          )
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        se = "MenuItem",
        de = "menu.itemSelect",
        fe = (0, o.forwardRef)((e, t) => {
          const { disabled: n = !1, onSelect: l, ...u } = e,
            s = (0, o.useRef)(null),
            d = te(se, e.__scopeMenu),
            f = ue(se, e.__scopeMenu),
            p = (0, a.e)(t, s),
            h = (0, o.useRef)(!1);
          return (0, o.createElement)(
            pe,
            (0, r.Z)({}, u, {
              ref: p,
              disabled: n,
              onClick: (0, i.M)(e.onClick, () => {
                const e = s.current;
                if (!n && e) {
                  const t = new CustomEvent(de, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(de, (e) => (null == l ? void 0 : l(e)), { once: !0 }),
                    (0, c.jH)(e, t),
                    t.defaultPrevented ? (h.current = !1) : d.onClose();
                }
              }),
              onPointerDown: (t) => {
                var n;
                null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), (h.current = !0);
              },
              onPointerUp: (0, i.M)(e.onPointerUp, (e) => {
                var t;
                h.current || null === (t = e.currentTarget) || void 0 === t || t.click();
              }),
              onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                const t = "" !== f.searchRef.current;
                n || (t && " " === e.key) || (j.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
              })
            })
          );
        }),
        pe = (0, o.forwardRef)((e, t) => {
          const { __scopeMenu: n, disabled: l = !1, textValue: u, ...s } = e,
            d = ue(se, n),
            f = q(n),
            p = (0, o.useRef)(null),
            h = (0, a.e)(t, p),
            [v, m] = (0, o.useState)(!1),
            [g, y] = (0, o.useState)("");
          return (
            (0, o.useEffect)(() => {
              const e = p.current;
              var t;
              e && y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
            }, [s.children]),
            (0, o.createElement)(
              V.ItemSlot,
              { scope: n, disabled: l, textValue: null != u ? u : g },
              (0, o.createElement)(
                B,
                (0, r.Z)({ asChild: !0 }, f, { focusable: !l }),
                (0, o.createElement)(
                  c.WV.div,
                  (0, r.Z)(
                    {
                      role: "menuitem",
                      "data-highlighted": v ? "" : void 0,
                      "aria-disabled": l || void 0,
                      "data-disabled": l ? "" : void 0
                    },
                    s,
                    {
                      ref: h,
                      onPointerMove: (0, i.M)(
                        e.onPointerMove,
                        Te((e) => {
                          l ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus());
                        })
                      ),
                      onPointerLeave: (0, i.M)(
                        e.onPointerLeave,
                        Te((e) => d.onItemLeave(e))
                      ),
                      onFocus: (0, i.M)(e.onFocus, () => m(!0)),
                      onBlur: (0, i.M)(e.onBlur, () => m(!1))
                    }
                  )
                )
              )
            )
          );
        }),
        [he, ve] = X("MenuRadioGroup", { value: void 0, onValueChange: () => {} }),
        [me, ge] = X("MenuItemIndicator", { checked: !1 }),
        ye = "MenuSub",
        [we, be] = X(ye),
        Ee = "MenuSubTrigger",
        Ce = (0, o.forwardRef)((e, t) => {
          const n = Q(Ee, e.__scopeMenu),
            l = te(Ee, e.__scopeMenu),
            u = be(Ee, e.__scopeMenu),
            c = ue(Ee, e.__scopeMenu),
            s = (0, o.useRef)(null),
            { pointerGraceTimerRef: d, onPointerGraceIntentChange: f } = c,
            p = { __scopeMenu: e.__scopeMenu },
            h = (0, o.useCallback)(() => {
              s.current && window.clearTimeout(s.current), (s.current = null);
            }, []);
          return (
            (0, o.useEffect)(() => h, [h]),
            (0, o.useEffect)(() => {
              const e = d.current;
              return () => {
                window.clearTimeout(e), f(null);
              };
            }, [d, f]),
            (0, o.createElement)(
              ne,
              (0, r.Z)({ asChild: !0 }, p),
              (0, o.createElement)(
                pe,
                (0, r.Z)(
                  {
                    id: u.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": u.contentId,
                    "data-state": Me(n.open)
                  },
                  e,
                  {
                    ref: (0, a.F)(t, u.onTriggerChange),
                    onClick: (t) => {
                      var r;
                      null === (r = e.onClick) || void 0 === r || r.call(e, t),
                        e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                    },
                    onPointerMove: (0, i.M)(
                      e.onPointerMove,
                      Te((t) => {
                        c.onItemEnter(t),
                          t.defaultPrevented ||
                            e.disabled ||
                            n.open ||
                            s.current ||
                            (c.onPointerGraceIntentChange(null),
                            (s.current = window.setTimeout(() => {
                              n.onOpenChange(!0), h();
                            }, 100)));
                      })
                    ),
                    onPointerLeave: (0, i.M)(
                      e.onPointerLeave,
                      Te((e) => {
                        var t;
                        h();
                        const r = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (r) {
                          var o;
                          const t = null === (o = n.content) || void 0 === o ? void 0 : o.dataset.side,
                            i = "right" === t,
                            a = i ? -5 : 5,
                            l = r[i ? "left" : "right"],
                            u = r[i ? "right" : "left"];
                          c.onPointerGraceIntentChange({
                            area: [
                              { x: e.clientX + a, y: e.clientY },
                              { x: l, y: r.top },
                              { x: u, y: r.top },
                              { x: u, y: r.bottom },
                              { x: l, y: r.bottom }
                            ],
                            side: t
                          }),
                            window.clearTimeout(d.current),
                            (d.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300));
                        } else {
                          if ((c.onTriggerLeave(e), e.defaultPrevented)) return;
                          c.onPointerGraceIntentChange(null);
                        }
                      })
                    ),
                    onKeyDown: (0, i.M)(e.onKeyDown, (t) => {
                      const r = "" !== c.searchRef.current;
                      var o;
                      e.disabled ||
                        (r && " " === t.key) ||
                        (U[l.dir].includes(t.key) &&
                          (n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), t.preventDefault()));
                    })
                  }
                )
              )
            )
          );
        }),
        xe = (0, o.forwardRef)((e, t) => {
          const n = ie(ae, e.__scopeMenu),
            { forceMount: l = n.forceMount, ...u } = e,
            c = Q(ae, e.__scopeMenu),
            s = te(ae, e.__scopeMenu),
            d = be("MenuSubContent", e.__scopeMenu),
            f = (0, o.useRef)(null),
            p = (0, a.e)(t, f);
          return (0, o.createElement)(
            V.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              y.z,
              { present: l || c.open },
              (0, o.createElement)(
                V.Slot,
                { scope: e.__scopeMenu },
                (0, o.createElement)(
                  ce,
                  (0, r.Z)({ id: d.contentId, "aria-labelledby": d.triggerId }, u, {
                    ref: p,
                    align: "start",
                    side: "rtl" === s.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      var t;
                      s.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()), e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => e.preventDefault(),
                    onFocusOutside: (0, i.M)(e.onFocusOutside, (e) => {
                      e.target !== d.trigger && c.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, (e) => {
                      s.onClose(), e.preventDefault();
                    }),
                    onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                      const t = e.currentTarget.contains(e.target),
                        n = K[s.dir].includes(e.key);
                      var r;
                      t && n && (c.onOpenChange(!1), null === (r = d.trigger) || void 0 === r || r.focus(), e.preventDefault());
                    })
                  })
                )
              )
            )
          );
        });
      function Me(e) {
        return e ? "open" : "closed";
      }
      function Te(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      const Pe = (e) => {
          const { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: l = !0 } = e,
            u = Y(t),
            [c, s] = (0, o.useState)(null),
            f = (0, o.useRef)(!1),
            p = (0, w.W)(a),
            h = (0, d.gm)(i);
          return (
            (0, o.useEffect)(() => {
              const e = () => {
                  (f.current = !0),
                    document.addEventListener("pointerdown", t, { capture: !0, once: !0 }),
                    document.addEventListener("pointermove", t, { capture: !0, once: !0 });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, { capture: !0 }),
                    document.removeEventListener("pointermove", t, { capture: !0 });
                }
              );
            }, []),
            (0, o.createElement)(
              m.fC,
              u,
              (0, o.createElement)(
                J,
                { scope: t, open: n, onOpenChange: p, content: c, onContentChange: s },
                (0, o.createElement)(
                  ee,
                  { scope: t, onClose: (0, o.useCallback)(() => p(!1), [p]), isUsingKeyboardRef: f, dir: h, modal: l },
                  r
                )
              )
            )
          );
        },
        _e = (e) => {
          const { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
            a = Q(re, t);
          return (0, o.createElement)(
            oe,
            { scope: t, forceMount: n },
            (0, o.createElement)(y.z, { present: n || a.open }, (0, o.createElement)(g.h, { asChild: !0, container: i }, r))
          );
        },
        De = fe,
        Oe = (e) => {
          const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e,
            a = Q(ye, t),
            l = Y(t),
            [u, c] = (0, o.useState)(null),
            [s, d] = (0, o.useState)(null),
            f = (0, w.W)(i);
          return (
            (0, o.useEffect)(() => (!1 === a.open && f(!1), () => f(!1)), [a.open, f]),
            (0, o.createElement)(
              m.fC,
              l,
              (0, o.createElement)(
                J,
                { scope: t, open: r, onOpenChange: f, content: s, onContentChange: d },
                (0, o.createElement)(we, { scope: t, contentId: (0, v.M)(), triggerId: (0, v.M)(), trigger: u, onTriggerChange: c }, n)
              )
            )
          );
        },
        Se = Ce,
        Re = xe,
        Ae = "DropdownMenu",
        [ke, Le] = (0, l.b)(Ae, [$]),
        Ie = $(),
        [Be, Fe] = ke(Ae),
        Ne = (0, o.forwardRef)((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = Ie(n);
          return (0, o.createElement)(De, (0, r.Z)({}, a, i, { ref: t }));
        }),
        je = (0, o.forwardRef)((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = Ie(n);
          return (0, o.createElement)(Se, (0, r.Z)({}, a, i, { ref: t }));
        }),
        We = (0, o.forwardRef)((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = Ie(n);
          return (0, o.createElement)(
            Re,
            (0, r.Z)({}, a, i, {
              ref: t,
              style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
              }
            })
          );
        }),
        He = (e) => {
          const { __scopeDropdownMenu: t, children: n, dir: i, open: a, defaultOpen: l, onOpenChange: c, modal: s = !0 } = e,
            d = Ie(t),
            f = (0, o.useRef)(null),
            [p = !1, h] = (0, u.T)({ prop: a, defaultProp: l, onChange: c });
          return (0, o.createElement)(
            Be,
            {
              scope: t,
              triggerId: (0, v.M)(),
              triggerRef: f,
              contentId: (0, v.M)(),
              open: p,
              onOpenChange: h,
              onOpenToggle: (0, o.useCallback)(() => h((e) => !e), [h]),
              modal: s
            },
            (0, o.createElement)(Pe, (0, r.Z)({}, d, { open: p, onOpenChange: h, dir: i, modal: s }), n)
          );
        },
        Ue = (e) => {
          const { __scopeDropdownMenu: t, ...n } = e,
            i = Ie(t);
          return (0, o.createElement)(_e, (0, r.Z)({}, i, n));
        },
        Ke = Ne,
        Ze = (e) => {
          const { __scopeDropdownMenu: t, children: n, open: i, onOpenChange: a, defaultOpen: l } = e,
            c = Ie(t),
            [s = !1, d] = (0, u.T)({ prop: i, defaultProp: l, onChange: a });
          return (0, o.createElement)(Oe, (0, r.Z)({}, c, { open: s, onOpenChange: d }), n);
        },
        Ve = je,
        ze = We;
    },
    844079: (e, t, n) => {
      "use strict";
      n.d(t, { EW: () => i });
      var r = n(696832);
      let o = 0;
      function i() {
        (0, r.useEffect)(() => {
          var e, t;
          const n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : a()),
            document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : a()),
            o++,
            () => {
              1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
            }
          );
        }, []);
      }
      function a() {
        const e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    470261: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => d });
      var r = n(983124),
        o = n(696832),
        i = n(339188),
        a = n(924949),
        l = n(818863);
      const u = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        s = { bubbles: !1, cancelable: !0 },
        d = (0, o.forwardRef)((e, t) => {
          const { loop: n = !1, trapped: d = !1, onMountAutoFocus: h, onUnmountAutoFocus: g, ...y } = e,
            [w, b] = (0, o.useState)(null),
            E = (0, l.W)(h),
            C = (0, l.W)(g),
            x = (0, o.useRef)(null),
            M = (0, i.e)(t, (e) => b(e)),
            T = (0, o.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              }
            }).current;
          (0, o.useEffect)(() => {
            if (d) {
              function e(e) {
                if (T.paused || !w) return;
                const t = e.target;
                w.contains(t) ? (x.current = t) : v(x.current, { select: !0 });
              }
              function t(e) {
                if (T.paused || !w) return;
                const t = e.relatedTarget;
                null !== t && (w.contains(t) || v(x.current, { select: !0 }));
              }
              function n(e) {
                if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && v(w);
              }
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return (
                w && r.observe(w, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                }
              );
            }
          }, [d, w, T.paused]),
            (0, o.useEffect)(() => {
              if (w) {
                m.add(T);
                const e = document.activeElement;
                if (!w.contains(e)) {
                  const t = new CustomEvent(u, s);
                  w.addEventListener(u, E),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        const n = document.activeElement;
                        for (const r of e) if ((v(r, { select: t }), document.activeElement !== n)) return;
                      })(
                        f(w).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && v(w));
                }
                return () => {
                  w.removeEventListener(u, E),
                    setTimeout(() => {
                      const t = new CustomEvent(c, s);
                      w.addEventListener(c, C),
                        w.dispatchEvent(t),
                        t.defaultPrevented || v(null != e ? e : document.body, { select: !0 }),
                        w.removeEventListener(c, C),
                        m.remove(T);
                    }, 0);
                };
              }
            }, [w, E, C, T]);
          const P = (0, o.useCallback)(
            (e) => {
              if (!n && !d) return;
              if (T.paused) return;
              const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                const t = e.currentTarget,
                  [o, i] = (function (e) {
                    const t = f(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && i
                  ? e.shiftKey || r !== i
                    ? e.shiftKey && r === o && (e.preventDefault(), n && v(i, { select: !0 }))
                    : (e.preventDefault(), n && v(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, d, T.paused]
          );
          return (0, o.createElement)(a.WV.div, (0, r.Z)({ tabIndex: -1 }, y, { ref: M, onKeyDown: P }));
        });
      function f(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            }
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (const n of e) if (!h(n, { upTo: t })) return n;
      }
      function h(e, { upTo: t }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e; ) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement;
        }
        return !1;
      }
      function v(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (function (e) {
                return e instanceof HTMLInputElement && "select" in e;
              })(e) &&
              t &&
              e.select();
        }
      }
      const m = (function () {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && (null == n || n.pause()), (e = g(e, t)), e.unshift(t);
          },
          remove(t) {
            var n;
            (e = g(e, t)), null === (n = e[0]) || void 0 === n || n.resume();
          }
        };
      })();
      function g(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    384008: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, { M: () => u });
      var o = n(696832);
      if (8630 == n.j) var i = n(427934);
      const a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {});
      let l = 0;
      function u(e) {
        const [t, n] = o.useState(a());
        return (
          (0, i.b)(() => {
            e || n((e) => (null != e ? e : String(l++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    700062: (e, t, n) => {
      "use strict";
      n.d(t, { ee: () => R, Eh: () => k, VY: () => A, fC: () => S, D7: () => g });
      var r = n(983124),
        o = n(696832),
        i = n(260116),
        a = n(337441),
        l = n(524562),
        u = n(924949);
      const c = (0, o.forwardRef)((e, t) => {
          const { children: n, width: i = 10, height: a = 5, ...l } = e;
          return (0, o.createElement)(
            u.WV.svg,
            (0, r.Z)({}, l, { ref: t, width: i, height: a, viewBox: "0 0 30 10", preserveAspectRatio: "none" }),
            e.asChild ? n : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        s = c;
      var d = n(339188),
        f = n(581710),
        p = n(818863),
        h = n(427934);
      const v = "Popper",
        [m, g] = (0, f.b)(v),
        [y, w] = m(v),
        b = (0, o.forwardRef)((e, t) => {
          const { __scopePopper: n, virtualRef: i, ...a } = e,
            l = w("PopperAnchor", n),
            c = (0, o.useRef)(null),
            s = (0, d.e)(t, c);
          return (
            (0, o.useEffect)(() => {
              l.onAnchorChange((null == i ? void 0 : i.current) || c.current);
            }),
            i ? null : (0, o.createElement)(u.WV.div, (0, r.Z)({}, a, { ref: s }))
          );
        }),
        E = "PopperContent",
        [C, x] = m(E),
        M = (0, o.forwardRef)((e, t) => {
          var n, c, s, f, v, m, g, y;
          const {
              __scopePopper: b,
              side: x = "bottom",
              sideOffset: M = 0,
              align: T = "center",
              alignOffset: P = 0,
              arrowPadding: S = 0,
              avoidCollisions: R = !0,
              collisionBoundary: A = [],
              collisionPadding: k = 0,
              sticky: L = "partial",
              hideWhenDetached: I = !1,
              updatePositionStrategy: B = "optimized",
              onPlaced: F,
              ...N
            } = e,
            j = w(E, b),
            [W, H] = (0, o.useState)(null),
            U = (0, d.e)(t, (e) => H(e)),
            [K, Z] = (0, o.useState)(null),
            V = (function (e) {
              const [t, n] = (0, o.useState)(void 0);
              return (
                (0, h.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    const t = new ResizeObserver((t) => {
                      if (!Array.isArray(t)) return;
                      if (!t.length) return;
                      const r = t[0];
                      let o, i;
                      if ("borderBoxSize" in r) {
                        const e = r.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (o = t.inlineSize), (i = t.blockSize);
                      } else (o = e.offsetWidth), (i = e.offsetHeight);
                      n({ width: o, height: i });
                    });
                    return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(K),
            z = null !== (n = null == V ? void 0 : V.width) && void 0 !== n ? n : 0,
            G = null !== (c = null == V ? void 0 : V.height) && void 0 !== c ? c : 0,
            X = x + ("center" !== T ? "-" + T : ""),
            $ = "number" == typeof k ? k : { top: 0, right: 0, bottom: 0, left: 0, ...k },
            Y = Array.isArray(A) ? A : [A],
            q = Y.length > 0,
            J = { padding: $, boundary: Y.filter(_), altBoundary: q },
            {
              refs: Q,
              floatingStyles: ee,
              placement: te,
              isPositioned: ne,
              middlewareData: re
            } = (0, i.YF)({
              strategy: "fixed",
              placement: X,
              whileElementsMounted: (...e) => (0, a.Me)(...e, { animationFrame: "always" === B }),
              elements: { reference: j.anchor },
              middleware: [
                (0, l.cv)({ mainAxis: M + G, alignmentAxis: P }),
                R && (0, l.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === L ? (0, l.dr)() : void 0, ...J }),
                R && (0, l.RR)({ ...J }),
                (0, l.dp)({
                  ...J,
                  apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                    const { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${n}px`),
                      a.setProperty("--radix-popper-available-height", `${r}px`),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  }
                }),
                K && (0, i.x7)({ element: K, padding: S }),
                D({ arrowWidth: z, arrowHeight: G }),
                I && (0, l.Cp)({ strategy: "referenceHidden", ...J })
              ]
            }),
            [oe, ie] = O(te),
            ae = (0, p.W)(F);
          (0, h.b)(() => {
            ne && (null == ae || ae());
          }, [ne, ae]);
          const le = null === (s = re.arrow) || void 0 === s ? void 0 : s.x,
            ue = null === (f = re.arrow) || void 0 === f ? void 0 : f.y,
            ce = 0 !== (null === (v = re.arrow) || void 0 === v ? void 0 : v.centerOffset),
            [se, de] = (0, o.useState)();
          return (
            (0, h.b)(() => {
              W && de(window.getComputedStyle(W).zIndex);
            }, [W]),
            (0, o.createElement)(
              "div",
              {
                ref: Q.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...ee,
                  transform: ne ? ee.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: se,
                  "--radix-popper-transform-origin": [
                    null === (m = re.transformOrigin) || void 0 === m ? void 0 : m.x,
                    null === (g = re.transformOrigin) || void 0 === g ? void 0 : g.y
                  ].join(" ")
                },
                dir: e.dir
              },
              (0, o.createElement)(
                C,
                { scope: b, placedSide: oe, onArrowChange: Z, arrowX: le, arrowY: ue, shouldHideArrow: ce },
                (0, o.createElement)(
                  u.WV.div,
                  (0, r.Z)({ "data-side": oe, "data-align": ie }, N, {
                    ref: U,
                    style: {
                      ...N.style,
                      animation: ne ? void 0 : "none",
                      opacity: null !== (y = re.hide) && void 0 !== y && y.referenceHidden ? 0 : void 0
                    }
                  })
                )
              )
            )
          );
        }),
        T = { top: "bottom", right: "left", bottom: "top", left: "right" },
        P = (0, o.forwardRef)(function (e, t) {
          const { __scopePopper: n, ...i } = e,
            a = x("PopperArrow", n),
            l = T[a.placedSide];
          return (0, o.createElement)(
            "span",
            {
              ref: a.onArrowChange,
              style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [l]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a.placedSide],
                transform: {
                  top: "translateY(100%)",
                  right: "translateY(50%) rotate(90deg) translateX(-50%)",
                  bottom: "rotate(180deg)",
                  left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0
              }
            },
            (0, o.createElement)(s, (0, r.Z)({}, i, { ref: t, style: { ...i.style, display: "block" } }))
          );
        });
      function _(e) {
        return null !== e;
      }
      const D = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          const { placement: l, rects: u, middlewareData: c } = t,
            s = 0 !== (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset),
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, h] = O(l),
            v = { start: "0%", center: "50%", end: "100%" }[h],
            m = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2,
            g = (null !== (i = null === (a = c.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + f / 2;
          let y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = s ? v : `${m}px`), (w = -f + "px"))
              : "top" === p
              ? ((y = s ? v : `${m}px`), (w = `${u.floating.height + f}px`))
              : "right" === p
              ? ((y = -f + "px"), (w = s ? v : `${g}px`))
              : "left" === p && ((y = `${u.floating.width + f}px`), (w = s ? v : `${g}px`)),
            { data: { x: y, y: w } }
          );
        }
      });
      function O(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n];
      }
      const S = (e) => {
          const { __scopePopper: t, children: n } = e,
            [r, i] = (0, o.useState)(null);
          return (0, o.createElement)(y, { scope: t, anchor: r, onAnchorChange: i }, n);
        },
        R = b,
        A = M,
        k = P;
    },
    438007: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => l });
      var r = n(983124),
        o = n(696832),
        i = n(851285),
        a = n(924949);
      const l = (0, o.forwardRef)((e, t) => {
        var n;
        const {
          container: l = null === globalThis || void 0 === globalThis || null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...u
        } = e;
        return l ? i.createPortal((0, o.createElement)(a.WV.div, (0, r.Z)({}, u, { ref: t })), l) : null;
      });
    },
    124652: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => l });
      var r = n(696832),
        o = n(851285),
        i = n(339188),
        a = n(427934);
      const l = (e) => {
        const { present: t, children: n } = e,
          l = (function (e) {
            const [t, n] = (0, r.useState)(),
              i = (0, r.useRef)({}),
              l = (0, r.useRef)(e),
              c = (0, r.useRef)("none"),
              s = e ? "mounted" : "unmounted",
              [d, f] = (function (e, t) {
                return (0, r.useReducer)((e, n) => {
                  const r = t[e][n];
                  return null != r ? r : e;
                }, e);
              })(s, {
                mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                unmounted: { MOUNT: "mounted" }
              });
            return (
              (0, r.useEffect)(() => {
                const e = u(i.current);
                c.current = "mounted" === d ? e : "none";
              }, [d]),
              (0, a.b)(() => {
                const t = i.current,
                  n = l.current;
                if (n !== e) {
                  const r = c.current,
                    o = u(t);
                  e
                    ? f("MOUNT")
                    : "none" === o || "none" === (null == t ? void 0 : t.display)
                    ? f("UNMOUNT")
                    : f(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"),
                    (l.current = e);
                }
              }, [e, f]),
              (0, a.b)(() => {
                if (t) {
                  const e = (e) => {
                      const n = u(i.current).includes(e.animationName);
                      e.target === t && n && (0, o.flushSync)(() => f("ANIMATION_END"));
                    },
                    n = (e) => {
                      e.target === t && (c.current = u(i.current));
                    };
                  return (
                    t.addEventListener("animationstart", n),
                    t.addEventListener("animationcancel", e),
                    t.addEventListener("animationend", e),
                    () => {
                      t.removeEventListener("animationstart", n),
                        t.removeEventListener("animationcancel", e),
                        t.removeEventListener("animationend", e);
                    }
                  );
                }
                f("ANIMATION_END");
              }, [t, f]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(d),
                ref: (0, r.useCallback)((e) => {
                  e && (i.current = getComputedStyle(e)), n(e);
                }, [])
              }
            );
          })(t),
          c = "function" == typeof n ? n({ present: l.isPresent }) : r.Children.only(n),
          s = (0, i.e)(l.ref, c.ref);
        return "function" == typeof n || l.isPresent ? (0, r.cloneElement)(c, { ref: s }) : null;
      };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    924949: (e, t, n) => {
      "use strict";
      n.d(t, { WV: () => l, jH: () => u });
      var r = n(983124),
        o = n(696832),
        i = n(851285),
        a = n(932218);
      const l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(
        (e, t) => {
          const n = (0, o.forwardRef)((e, n) => {
            const { asChild: i, ...l } = e,
              u = i ? a.g7 : t;
            return (
              (0, o.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, o.createElement)(u, (0, r.Z)({}, l, { ref: n }))
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        },
        {}
      );
      function u(e, t) {
        e && (0, i.flushSync)(() => e.dispatchEvent(t));
      }
    },
    869148: (e, t, n) => {
      "use strict";
      n.d(t, {
        VY: () => me,
        ck: () => ye,
        wU: () => be,
        eT: () => we,
        h_: () => ve,
        fC: () => fe,
        xz: () => pe,
        B4: () => he,
        l_: () => ge
      });
      var r = n(983124),
        o = n(696832),
        i = n(851285);
      function a(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var l = n(612527),
        u = n(271601),
        c = n(339188),
        s = n(581710),
        d = n(113806),
        f = n(781472),
        p = n(844079),
        h = n(470261),
        v = n(384008),
        m = n(700062),
        g = n(438007),
        y = n(924949),
        w = n(932218),
        b = n(818863),
        E = n(700536),
        C = n(427934),
        x = n(769662),
        M = n(340627),
        T = n(802116);
      const P = [" ", "Enter", "ArrowUp", "ArrowDown"],
        _ = [" ", "Enter"],
        D = "Select",
        [O, S, R] = (0, u.B)(D),
        [A, k] = (0, s.b)(D, [R, m.D7]),
        L = (0, m.D7)(),
        [I, B] = A(D),
        [F, N] = A(D),
        j = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, disabled: i = !1, ...a } = e,
            u = L(n),
            s = B("SelectTrigger", n),
            d = s.disabled || i,
            f = (0, c.e)(t, s.onTriggerChange),
            p = S(n),
            [h, v, g] = se((e) => {
              const t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === s.value),
                r = de(t, e, n);
              void 0 !== r && s.onValueChange(r.value);
            }),
            w = () => {
              d || (s.onOpenChange(!0), g());
            };
          return (0, o.createElement)(
            m.ee,
            (0, r.Z)({ asChild: !0 }, u),
            (0, o.createElement)(
              y.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": s.contentId,
                  "aria-expanded": s.open,
                  "aria-required": s.required,
                  "aria-autocomplete": "none",
                  dir: s.dir,
                  "data-state": s.open ? "open" : "closed",
                  disabled: d,
                  "data-disabled": d ? "" : void 0,
                  "data-placeholder": ue(s.value) ? "" : void 0
                },
                a,
                {
                  ref: f,
                  onClick: (0, l.M)(a.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: (0, l.M)(a.onPointerDown, (e) => {
                    const t = e.target;
                    t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (w(),
                        (s.triggerPointerDownPosRef.current = { x: Math.round(e.pageX), y: Math.round(e.pageY) }),
                        e.preventDefault());
                  }),
                  onKeyDown: (0, l.M)(a.onKeyDown, (e) => {
                    const t = "" !== h.current;
                    e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key),
                      (t && " " === e.key) || (P.includes(e.key) && (w(), e.preventDefault()));
                  })
                }
              )
            )
          );
        }),
        W = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, className: i, style: a, children: l, placeholder: u = "", ...s } = e,
            d = B("SelectValue", n),
            { onValueNodeHasChildrenChange: f } = d,
            p = void 0 !== l,
            h = (0, c.e)(t, d.onValueNodeChange);
          return (
            (0, C.b)(() => {
              f(p);
            }, [f, p]),
            (0, o.createElement)(
              y.WV.span,
              (0, r.Z)({}, s, { ref: h, style: { pointerEvents: "none" } }),
              ue(d.value) ? (0, o.createElement)(o.Fragment, null, u) : l
            )
          );
        }),
        H = "SelectContent",
        U = (0, o.forwardRef)((e, t) => {
          const n = B(H, e.__scopeSelect),
            [a, l] = (0, o.useState)();
          if (
            ((0, C.b)(() => {
              l(new DocumentFragment());
            }, []),
            !n.open)
          ) {
            const t = a;
            return t
              ? (0, i.createPortal)(
                  (0, o.createElement)(
                    Z,
                    { scope: e.__scopeSelect },
                    (0, o.createElement)(O.Slot, { scope: e.__scopeSelect }, (0, o.createElement)("div", null, e.children))
                  ),
                  t
                )
              : null;
          }
          return (0, o.createElement)(z, (0, r.Z)({}, e, { ref: t }));
        }),
        K = 10,
        [Z, V] = A(H),
        z = (0, o.forwardRef)((e, t) => {
          const {
              __scopeSelect: n,
              position: i = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: u,
              onPointerDownOutside: s,
              side: d,
              sideOffset: v,
              align: m,
              alignOffset: g,
              arrowPadding: y,
              collisionBoundary: b,
              collisionPadding: E,
              sticky: C,
              hideWhenDetached: x,
              avoidCollisions: P,
              ..._
            } = e,
            D = B(H, n),
            [O, R] = (0, o.useState)(null),
            [A, k] = (0, o.useState)(null),
            L = (0, c.e)(t, (e) => R(e)),
            [I, F] = (0, o.useState)(null),
            [N, j] = (0, o.useState)(null),
            W = S(n),
            [U, K] = (0, o.useState)(!1),
            V = (0, o.useRef)(!1);
          (0, o.useEffect)(() => {
            if (O) return (0, M.Ry)(O);
          }, [O]),
            (0, p.EW)();
          const z = (0, o.useCallback)(
              (e) => {
                const [t, ...n] = W().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (const n of e) {
                  if (n === o) return;
                  if (
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && A && (A.scrollTop = 0),
                    n === r && A && (A.scrollTop = A.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
                }
              },
              [W, A]
            ),
            $ = (0, o.useCallback)(() => z([I, O]), [z, I, O]);
          (0, o.useEffect)(() => {
            U && $();
          }, [U, $]);
          const { onOpenChange: Y, triggerPointerDownPosRef: q } = D;
          (0, o.useEffect)(() => {
            if (O) {
              let e = { x: 0, y: 0 };
              const t = (t) => {
                  var n, r, o, i;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) - (null !== (n = null === (r = q.current) || void 0 === r ? void 0 : r.x) && void 0 !== n ? n : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) - (null !== (o = null === (i = q.current) || void 0 === i ? void 0 : i.y) && void 0 !== o ? o : 0)
                    )
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : O.contains(n.target) || Y(!1),
                    document.removeEventListener("pointermove", t),
                    (q.current = null);
                };
              return (
                null !== q.current &&
                  (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, { capture: !0, once: !0 })),
                () => {
                  document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
                }
              );
            }
          }, [O, Y, q]),
            (0, o.useEffect)(() => {
              const e = () => Y(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e), window.removeEventListener("resize", e);
                }
              );
            }, [Y]);
          const [J, Q] = se((e) => {
              const t = W().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = de(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            ee = (0, o.useCallback)(
              (e, t, n) => {
                const r = !V.current && !n;
                ((void 0 !== D.value && D.value === t) || r) && (F(e), r && (V.current = !0));
              },
              [D.value]
            ),
            te = (0, o.useCallback)(() => (null == O ? void 0 : O.focus()), [O]),
            ne = (0, o.useCallback)(
              (e, t, n) => {
                const r = !V.current && !n;
                ((void 0 !== D.value && D.value === t) || r) && j(e);
              },
              [D.value]
            ),
            re = "popper" === i ? X : G,
            oe =
              re === X
                ? {
                    side: d,
                    sideOffset: v,
                    align: m,
                    alignOffset: g,
                    arrowPadding: y,
                    collisionBoundary: b,
                    collisionPadding: E,
                    sticky: C,
                    hideWhenDetached: x,
                    avoidCollisions: P
                  }
                : {};
          return (0, o.createElement)(
            Z,
            {
              scope: n,
              content: O,
              viewport: A,
              onViewportChange: k,
              itemRefCallback: ee,
              selectedItem: I,
              onItemLeave: te,
              itemTextRefCallback: ne,
              focusSelectedItem: $,
              selectedItemText: N,
              position: i,
              isPositioned: U,
              searchRef: J
            },
            (0, o.createElement)(
              T.Z,
              { as: w.g7, allowPinchZoom: !0 },
              (0, o.createElement)(
                h.M,
                {
                  asChild: !0,
                  trapped: D.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: (0, l.M)(a, (e) => {
                    var t;
                    null === (t = D.trigger) || void 0 === t || t.focus({ preventScroll: !0 }), e.preventDefault();
                  })
                },
                (0, o.createElement)(
                  f.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: u,
                    onPointerDownOutside: s,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => D.onOpenChange(!1)
                  },
                  (0, o.createElement)(
                    re,
                    (0, r.Z)(
                      {
                        role: "listbox",
                        id: D.contentId,
                        "data-state": D.open ? "open" : "closed",
                        dir: D.dir,
                        onContextMenu: (e) => e.preventDefault()
                      },
                      _,
                      oe,
                      {
                        onPlaced: () => K(!0),
                        ref: L,
                        style: { display: "flex", flexDirection: "column", outline: "none", ..._.style },
                        onKeyDown: (0, l.M)(_.onKeyDown, (e) => {
                          const t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || Q(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                          ) {
                            let t = W()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              const n = e.target,
                                r = t.indexOf(n);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => z(t)), e.preventDefault();
                          }
                        })
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        G = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, onPlaced: i, ...l } = e,
            u = B(H, n),
            s = V(H, n),
            [d, f] = (0, o.useState)(null),
            [p, h] = (0, o.useState)(null),
            v = (0, c.e)(t, (e) => h(e)),
            m = S(n),
            g = (0, o.useRef)(!1),
            w = (0, o.useRef)(!0),
            { viewport: b, selectedItem: E, selectedItemText: x, focusSelectedItem: M } = s,
            T = (0, o.useCallback)(() => {
              if (u.trigger && u.valueNode && d && p && b && E && x) {
                const e = u.trigger.getBoundingClientRect(),
                  t = p.getBoundingClientRect(),
                  n = u.valueNode.getBoundingClientRect(),
                  r = x.getBoundingClientRect();
                if ("rtl" !== u.dir) {
                  const o = r.left - t.left,
                    i = n.left - o,
                    l = e.left - i,
                    u = e.width + l,
                    c = Math.max(u, t.width),
                    s = window.innerWidth - K,
                    f = a(i, [K, s - c]);
                  (d.style.minWidth = u + "px"), (d.style.left = f + "px");
                } else {
                  const o = t.right - r.right,
                    i = window.innerWidth - n.right - o,
                    l = window.innerWidth - e.right - i,
                    u = e.width + l,
                    c = Math.max(u, t.width),
                    s = window.innerWidth - K,
                    f = a(i, [K, s - c]);
                  (d.style.minWidth = u + "px"), (d.style.right = f + "px");
                }
                const o = m(),
                  l = window.innerHeight - 2 * K,
                  c = b.scrollHeight,
                  s = window.getComputedStyle(p),
                  f = parseInt(s.borderTopWidth, 10),
                  h = parseInt(s.paddingTop, 10),
                  v = parseInt(s.borderBottomWidth, 10),
                  y = f + h + c + parseInt(s.paddingBottom, 10) + v,
                  w = Math.min(5 * E.offsetHeight, y),
                  C = window.getComputedStyle(b),
                  M = parseInt(C.paddingTop, 10),
                  T = parseInt(C.paddingBottom, 10),
                  P = e.top + e.height / 2 - K,
                  _ = l - P,
                  D = E.offsetHeight / 2,
                  O = f + h + (E.offsetTop + D),
                  S = y - O;
                if (O <= P) {
                  const e = E === o[o.length - 1].ref.current;
                  d.style.bottom = "0px";
                  const t = p.clientHeight - b.offsetTop - b.offsetHeight,
                    n = O + Math.max(_, D + (e ? T : 0) + t + v);
                  d.style.height = n + "px";
                } else {
                  const e = E === o[0].ref.current;
                  d.style.top = "0px";
                  const t = Math.max(P, f + b.offsetTop + (e ? M : 0) + D) + S;
                  (d.style.height = t + "px"), (b.scrollTop = O - P + b.offsetTop);
                }
                (d.style.margin = `${K}px 0`),
                  (d.style.minHeight = w + "px"),
                  (d.style.maxHeight = l + "px"),
                  null == i || i(),
                  requestAnimationFrame(() => (g.current = !0));
              }
            }, [m, u.trigger, u.valueNode, d, p, b, E, x, u.dir, i]);
          (0, C.b)(() => T(), [T]);
          const [P, _] = (0, o.useState)();
          (0, C.b)(() => {
            p && _(window.getComputedStyle(p).zIndex);
          }, [p]);
          const D = (0, o.useCallback)(
            (e) => {
              e && !0 === w.current && (T(), null == M || M(), (w.current = !1));
            },
            [T, M]
          );
          return (0, o.createElement)(
            $,
            { scope: n, contentWrapper: d, shouldExpandOnScrollRef: g, onScrollButtonChange: D },
            (0, o.createElement)(
              "div",
              { ref: f, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: P } },
              (0, o.createElement)(y.WV.div, (0, r.Z)({}, l, { ref: v, style: { boxSizing: "border-box", maxHeight: "100%", ...l.style } }))
            )
          );
        }),
        X = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, align: i = "start", collisionPadding: a = K, ...l } = e,
            u = L(n);
          return (0, o.createElement)(
            m.VY,
            (0, r.Z)({}, u, l, {
              ref: t,
              align: i,
              collisionPadding: a,
              style: {
                boxSizing: "border-box",
                ...l.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
              }
            })
          );
        }),
        [$, Y] = A(H, {}),
        q = "SelectViewport",
        J = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, ...i } = e,
            a = V(q, n),
            u = Y(q, n),
            s = (0, c.e)(t, a.onViewportChange),
            d = (0, o.useRef)(0);
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              }
            }),
            (0, o.createElement)(
              O.Slot,
              { scope: n },
              (0, o.createElement)(
                y.WV.div,
                (0, r.Z)({ "data-radix-select-viewport": "", role: "presentation" }, i, {
                  ref: s,
                  style: { position: "relative", flex: 1, overflow: "auto", ...i.style },
                  onScroll: (0, l.M)(i.onScroll, (e) => {
                    const t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
                    if (null != r && r.current && n) {
                      const e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        const r = window.innerHeight - 2 * K,
                          o = parseFloat(n.style.minHeight),
                          i = parseFloat(n.style.height),
                          a = Math.max(o, i);
                        if (a < r) {
                          const o = a + e,
                            i = Math.min(r, o),
                            l = o - i;
                          (n.style.height = i + "px"),
                            "0px" === n.style.bottom && ((t.scrollTop = l > 0 ? l : 0), (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    d.current = t.scrollTop;
                  })
                })
              )
            )
          );
        }),
        [Q, ee] = A("SelectGroup"),
        te = "SelectItem",
        [ne, re] = A(te),
        oe = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, value: i, disabled: a = !1, textValue: u, ...s } = e,
            d = B(te, n),
            f = V(te, n),
            p = d.value === i,
            [h, m] = (0, o.useState)(null != u ? u : ""),
            [g, w] = (0, o.useState)(!1),
            b = (0, c.e)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t ? void 0 : t.call(f, e, i, a);
            }),
            E = (0, v.M)(),
            C = () => {
              a || (d.onValueChange(i), d.onOpenChange(!1));
            };
          if ("" === i)
            throw new Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, o.createElement)(
            ne,
            {
              scope: n,
              value: i,
              disabled: a,
              textId: E,
              isSelected: p,
              onItemTextChange: (0, o.useCallback)((e) => {
                m((t) => {
                  var n;
                  return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim();
                });
              }, [])
            },
            (0, o.createElement)(
              O.ItemSlot,
              { scope: n, value: i, disabled: a, textValue: h },
              (0, o.createElement)(
                y.WV.div,
                (0, r.Z)(
                  {
                    role: "option",
                    "aria-labelledby": E,
                    "data-highlighted": g ? "" : void 0,
                    "aria-selected": p && g,
                    "data-state": p ? "checked" : "unchecked",
                    "aria-disabled": a || void 0,
                    "data-disabled": a ? "" : void 0,
                    tabIndex: a ? void 0 : -1
                  },
                  s,
                  {
                    ref: b,
                    onFocus: (0, l.M)(s.onFocus, () => w(!0)),
                    onBlur: (0, l.M)(s.onBlur, () => w(!1)),
                    onPointerUp: (0, l.M)(s.onPointerUp, C),
                    onPointerMove: (0, l.M)(s.onPointerMove, (e) => {
                      var t;
                      a ? null === (t = f.onItemLeave) || void 0 === t || t.call(f) : e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: (0, l.M)(s.onPointerLeave, (e) => {
                      var t;
                      e.currentTarget === document.activeElement && (null === (t = f.onItemLeave) || void 0 === t || t.call(f));
                    }),
                    onKeyDown: (0, l.M)(s.onKeyDown, (e) => {
                      var t;
                      ("" !== (null === (t = f.searchRef) || void 0 === t ? void 0 : t.current) && " " === e.key) ||
                        (_.includes(e.key) && C(), " " === e.key && e.preventDefault());
                    })
                  }
                )
              )
            )
          );
        }),
        ie = "SelectItemText",
        ae = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, className: a, style: l, ...u } = e,
            s = B(ie, n),
            d = V(ie, n),
            f = re(ie, n),
            p = N(ie, n),
            [h, v] = (0, o.useState)(null),
            m = (0, c.e)(
              t,
              (e) => v(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t ? void 0 : t.call(d, e, f.value, f.disabled);
              }
            ),
            g = null == h ? void 0 : h.textContent,
            w = (0, o.useMemo)(
              () => (0, o.createElement)("option", { key: f.value, value: f.value, disabled: f.disabled }, g),
              [f.disabled, f.value, g]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: E } = p;
          return (
            (0, C.b)(() => (b(w), () => E(w)), [b, E, w]),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(y.WV.span, (0, r.Z)({ id: f.textId }, u, { ref: m })),
              f.isSelected && s.valueNode && !s.valueNodeHasChildren ? (0, i.createPortal)(u.children, s.valueNode) : null
            )
          );
        }),
        le = (0, o.forwardRef)((e, t) => {
          const { __scopeSelect: n, ...i } = e;
          return re("SelectItemIndicator", n).isSelected
            ? (0, o.createElement)(y.WV.span, (0, r.Z)({ "aria-hidden": !0 }, i, { ref: t }))
            : null;
        });
      function ue(e) {
        return "" === e || void 0 === e;
      }
      const ce = (0, o.forwardRef)((e, t) => {
        const { value: n, ...i } = e,
          a = (0, o.useRef)(null),
          l = (0, c.e)(t, a),
          u = (function (e) {
            const t = (0, o.useRef)({ value: e, previous: e });
            return (0, o.useMemo)(
              () => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous),
              [e]
            );
          })(n);
        return (
          (0, o.useEffect)(() => {
            const e = a.current,
              t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (u !== n && r) {
              const t = new Event("change", { bubbles: !0 });
              r.call(e, n), e.dispatchEvent(t);
            }
          }, [u, n]),
          (0, o.createElement)(x.T, { asChild: !0 }, (0, o.createElement)("select", (0, r.Z)({}, i, { ref: l, defaultValue: n })))
        );
      });
      function se(e) {
        const t = (0, b.W)(e),
          n = (0, o.useRef)(""),
          r = (0, o.useRef)(0),
          i = (0, o.useCallback)(
            (e) => {
              const o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t), window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          a = (0, o.useCallback)(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (0, o.useEffect)(() => () => window.clearTimeout(r.current), []), [n, i, a];
      }
      function de(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = ((a = e), (l = Math.max(o, 0)), a.map((e, t) => a[(l + t) % a.length]));
        var a, l;
        1 === r.length && (i = i.filter((e) => e !== n));
        const u = i.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return u !== n ? u : void 0;
      }
      ce.displayName = "BubbleSelect";
      const fe = (e) => {
          const {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: a,
              value: l,
              defaultValue: u,
              onValueChange: c,
              dir: s,
              name: f,
              autoComplete: p,
              disabled: h,
              required: g
            } = e,
            y = L(t),
            [w, b] = (0, o.useState)(null),
            [C, x] = (0, o.useState)(null),
            [M, T] = (0, o.useState)(!1),
            P = (0, d.gm)(s),
            [_ = !1, D] = (0, E.T)({ prop: r, defaultProp: i, onChange: a }),
            [S, R] = (0, E.T)({ prop: l, defaultProp: u, onChange: c }),
            A = (0, o.useRef)(null),
            k = !w || Boolean(w.closest("form")),
            [B, N] = (0, o.useState)(new Set()),
            j = Array.from(B)
              .map((e) => e.props.value)
              .join(";");
          return (0, o.createElement)(
            m.fC,
            y,
            (0, o.createElement)(
              I,
              {
                required: g,
                scope: t,
                trigger: w,
                onTriggerChange: b,
                valueNode: C,
                onValueNodeChange: x,
                valueNodeHasChildren: M,
                onValueNodeHasChildrenChange: T,
                contentId: (0, v.M)(),
                value: S,
                onValueChange: R,
                open: _,
                onOpenChange: D,
                dir: P,
                triggerPointerDownPosRef: A,
                disabled: h
              },
              (0, o.createElement)(
                O.Provider,
                { scope: t },
                (0, o.createElement)(
                  F,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, o.useCallback)((e) => {
                      N((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, o.useCallback)((e) => {
                      N((t) => {
                        const n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, [])
                  },
                  n
                )
              ),
              k
                ? (0, o.createElement)(
                    ce,
                    {
                      key: j,
                      "aria-hidden": !0,
                      required: g,
                      tabIndex: -1,
                      name: f,
                      autoComplete: p,
                      value: S,
                      onChange: (e) => R(e.target.value),
                      disabled: h
                    },
                    void 0 === S ? (0, o.createElement)("option", { value: "" }) : null,
                    Array.from(B)
                  )
                : null
            )
          );
        },
        pe = j,
        he = W,
        ve = (e) => (0, o.createElement)(g.h, (0, r.Z)({ asChild: !0 }, e)),
        me = U,
        ge = J,
        ye = oe,
        we = ae,
        be = le;
    },
    932218: (e, t, n) => {
      "use strict";
      n.d(t, { A4: () => u, g7: () => a });
      var r = n(983124),
        o = n(696832),
        i = n(339188);
      const a = (0, o.forwardRef)((e, t) => {
        const { children: n, ...i } = e,
          a = o.Children.toArray(n),
          u = a.find(c);
        if (u) {
          const e = u.props.children,
            n = a.map((t) =>
              t === u ? (o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null) : t
            );
          return (0, o.createElement)(l, (0, r.Z)({}, i, { ref: t }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null);
        }
        return (0, o.createElement)(l, (0, r.Z)({}, i, { ref: t }), n);
      });
      a.displayName = "Slot";
      const l = (0, o.forwardRef)((e, t) => {
        const { children: n, ...r } = e;
        return (0, o.isValidElement)(n)
          ? (0, o.cloneElement)(n, { ...s(r, n.props), ref: t ? (0, i.F)(t, n.ref) : n.ref })
          : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
      });
      l.displayName = "SlotClone";
      const u = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function c(e) {
        return (0, o.isValidElement)(e) && e.type === u;
      }
      function s(e, t) {
        const n = { ...t };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r)
            ? o && i
              ? (n[r] = (...e) => {
                  i(...e), o(...e);
                })
              : o && (n[r] = o)
            : "style" === r
            ? (n[r] = { ...o, ...i })
            : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
        }
        return { ...e, ...n };
      }
    },
    798603: (e, t, n) => {
      "use strict";
      n.d(t, { Eh: () => Z, VY: () => K, fC: () => W, h_: () => U, xz: () => H, zt: () => j });
      var r = n(983124),
        o = n(696832),
        i = n(612527),
        a = n(339188),
        l = n(581710),
        u = n(781472),
        c = n(384008),
        s = n(700062),
        d = n(438007),
        f = n(124652),
        p = n(924949),
        h = n(932218),
        v = n(700536),
        m = n(769662);
      const [g, y] = (0, l.b)("Tooltip", [s.D7]),
        w = (0, s.D7)(),
        b = 700,
        E = "tooltip.open",
        [C, x] = g("TooltipProvider"),
        M = "Tooltip",
        [T, P] = g(M),
        _ = "TooltipTrigger",
        D = (0, o.forwardRef)((e, t) => {
          const { __scopeTooltip: n, ...l } = e,
            u = P(_, n),
            c = x(_, n),
            d = w(n),
            f = (0, o.useRef)(null),
            h = (0, a.e)(t, f, u.onTriggerChange),
            v = (0, o.useRef)(!1),
            m = (0, o.useRef)(!1),
            g = (0, o.useCallback)(() => (v.current = !1), []);
          return (
            (0, o.useEffect)(() => () => document.removeEventListener("pointerup", g), [g]),
            (0, o.createElement)(
              s.ee,
              (0, r.Z)({ asChild: !0 }, d),
              (0, o.createElement)(
                p.WV.button,
                (0, r.Z)({ "aria-describedby": u.open ? u.contentId : void 0, "data-state": u.stateAttribute }, l, {
                  ref: h,
                  onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType && (m.current || c.isPointerInTransitRef.current || (u.onTriggerEnter(), (m.current = !0)));
                  }),
                  onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                    u.onTriggerLeave(), (m.current = !1);
                  }),
                  onPointerDown: (0, i.M)(e.onPointerDown, () => {
                    (v.current = !0), document.addEventListener("pointerup", g, { once: !0 });
                  }),
                  onFocus: (0, i.M)(e.onFocus, () => {
                    v.current || u.onOpen();
                  }),
                  onBlur: (0, i.M)(e.onBlur, u.onClose),
                  onClick: (0, i.M)(e.onClick, u.onClose)
                })
              )
            )
          );
        }),
        O = "TooltipPortal",
        [S, R] = g(O, { forceMount: void 0 }),
        A = "TooltipContent",
        k = (0, o.forwardRef)((e, t) => {
          const n = R(A, e.__scopeTooltip),
            { forceMount: i = n.forceMount, side: a = "top", ...l } = e,
            u = P(A, e.__scopeTooltip);
          return (0, o.createElement)(
            f.z,
            { present: i || u.open },
            u.disableHoverableContent
              ? (0, o.createElement)(F, (0, r.Z)({ side: a }, l, { ref: t }))
              : (0, o.createElement)(L, (0, r.Z)({ side: a }, l, { ref: t }))
          );
        }),
        L = (0, o.forwardRef)((e, t) => {
          const n = P(A, e.__scopeTooltip),
            i = x(A, e.__scopeTooltip),
            l = (0, o.useRef)(null),
            u = (0, a.e)(t, l),
            [c, s] = (0, o.useState)(null),
            { trigger: d, onClose: f } = n,
            p = l.current,
            { onPointerInTransitChange: h } = i,
            v = (0, o.useCallback)(() => {
              s(null), h(!1);
            }, [h]),
            m = (0, o.useCallback)(
              (e, t) => {
                const n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t, n = 5) {
                    const r = [];
                    switch (t) {
                      case "top":
                        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                        break;
                      case "bottom":
                        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                        break;
                      case "left":
                        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                        break;
                      case "right":
                        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                    }
                    return r;
                  })(
                    r,
                    (function (e, t) {
                      const n = Math.abs(t.top - e.y),
                        r = Math.abs(t.bottom - e.y),
                        o = Math.abs(t.right - e.x),
                        i = Math.abs(t.left - e.x);
                      switch (Math.min(n, r, o, i)) {
                        case i:
                          return "left";
                        case o:
                          return "right";
                        case n:
                          return "top";
                        case r:
                          return "bottom";
                        default:
                          throw new Error("unreachable");
                      }
                    })(r, n.getBoundingClientRect())
                  ),
                  i = (function (e) {
                    const t = e.slice();
                    return (
                      t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        const t = [];
                        for (let n = 0; n < e.length; n++) {
                          const r = e[n];
                          for (; t.length >= 2; ) {
                            const e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                            t.pop();
                          }
                          t.push(r);
                        }
                        t.pop();
                        const n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          const r = e[t];
                          for (; n.length >= 2; ) {
                            const e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                            n.pop();
                          }
                          n.push(r);
                        }
                        return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
                      })(t)
                    );
                  })([
                    ...o,
                    ...(function (e) {
                      const { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r }
                      ];
                    })(t.getBoundingClientRect())
                  ]);
                s(i), h(!0);
              },
              [h]
            );
          return (
            (0, o.useEffect)(() => () => v(), [v]),
            (0, o.useEffect)(() => {
              if (d && p) {
                const e = (e) => m(e, p),
                  t = (e) => m(e, d);
                return (
                  d.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    d.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [d, p, m, v]),
            (0, o.useEffect)(() => {
              if (c) {
                const e = (e) => {
                  const t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      const { x: n, y: r } = e;
                      let o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        const a = t[e].x,
                          l = t[e].y,
                          u = t[i].x,
                          c = t[i].y;
                        l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
                      }
                      return o;
                    })(n, c);
                  r ? v() : o && (v(), f());
                };
                return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
              }
            }, [d, p, c, f, v]),
            (0, o.createElement)(F, (0, r.Z)({}, e, { ref: u }))
          );
        }),
        [I, B] = g(M, { isInside: !1 }),
        F = (0, o.forwardRef)((e, t) => {
          const { __scopeTooltip: n, children: i, "aria-label": a, onEscapeKeyDown: l, onPointerDownOutside: c, ...d } = e,
            f = P(A, n),
            p = w(n),
            { onClose: v } = f;
          return (
            (0, o.useEffect)(() => (document.addEventListener(E, v), () => document.removeEventListener(E, v)), [v]),
            (0, o.useEffect)(() => {
              if (f.trigger) {
                const e = (e) => {
                  const t = e.target;
                  null != t && t.contains(f.trigger) && v();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [f.trigger, v]),
            (0, o.createElement)(
              u.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: c,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: v
              },
              (0, o.createElement)(
                s.VY,
                (0, r.Z)({ "data-state": f.stateAttribute }, p, d, {
                  ref: t,
                  style: {
                    ...d.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }),
                (0, o.createElement)(h.A4, null, i),
                (0, o.createElement)(I, { scope: n, isInside: !0 }, (0, o.createElement)(m.f, { id: f.contentId, role: "tooltip" }, a || i))
              )
            )
          );
        }),
        N = (0, o.forwardRef)((e, t) => {
          const { __scopeTooltip: n, ...i } = e,
            a = w(n);
          return B("TooltipArrow", n).isInside ? null : (0, o.createElement)(s.Eh, (0, r.Z)({}, a, i, { ref: t }));
        }),
        j =
          8630 == n.j
            ? (e) => {
                const {
                    __scopeTooltip: t,
                    delayDuration: n = b,
                    skipDelayDuration: r = 300,
                    disableHoverableContent: i = !1,
                    children: a
                  } = e,
                  [l, u] = (0, o.useState)(!0),
                  c = (0, o.useRef)(!1),
                  s = (0, o.useRef)(0);
                return (
                  (0, o.useEffect)(() => {
                    const e = s.current;
                    return () => window.clearTimeout(e);
                  }, []),
                  (0, o.createElement)(
                    C,
                    {
                      scope: t,
                      isOpenDelayed: l,
                      delayDuration: n,
                      onOpen: (0, o.useCallback)(() => {
                        window.clearTimeout(s.current), u(!1);
                      }, []),
                      onClose: (0, o.useCallback)(() => {
                        window.clearTimeout(s.current), (s.current = window.setTimeout(() => u(!0), r));
                      }, [r]),
                      isPointerInTransitRef: c,
                      onPointerInTransitChange: (0, o.useCallback)((e) => {
                        c.current = e;
                      }, []),
                      disableHoverableContent: i
                    },
                    a
                  )
                );
              }
            : null,
        W =
          8630 == n.j
            ? (e) => {
                const {
                    __scopeTooltip: t,
                    children: n,
                    open: r,
                    defaultOpen: i = !1,
                    onOpenChange: a,
                    disableHoverableContent: l,
                    delayDuration: u
                  } = e,
                  d = x(M, e.__scopeTooltip),
                  f = w(t),
                  [p, h] = (0, o.useState)(null),
                  m = (0, c.M)(),
                  g = (0, o.useRef)(0),
                  y = null != l ? l : d.disableHoverableContent,
                  b = null != u ? u : d.delayDuration,
                  C = (0, o.useRef)(!1),
                  [P = !1, _] = (0, v.T)({
                    prop: r,
                    defaultProp: i,
                    onChange: (e) => {
                      e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(E))) : d.onClose(), null == a || a(e);
                    }
                  }),
                  D = (0, o.useMemo)(() => (P ? (C.current ? "delayed-open" : "instant-open") : "closed"), [P]),
                  O = (0, o.useCallback)(() => {
                    window.clearTimeout(g.current), (C.current = !1), _(!0);
                  }, [_]),
                  S = (0, o.useCallback)(() => {
                    window.clearTimeout(g.current), _(!1);
                  }, [_]),
                  R = (0, o.useCallback)(() => {
                    window.clearTimeout(g.current),
                      (g.current = window.setTimeout(() => {
                        (C.current = !0), _(!0);
                      }, b));
                  }, [b, _]);
                return (
                  (0, o.useEffect)(() => () => window.clearTimeout(g.current), []),
                  (0, o.createElement)(
                    s.fC,
                    f,
                    (0, o.createElement)(
                      T,
                      {
                        scope: t,
                        contentId: m,
                        open: P,
                        stateAttribute: D,
                        trigger: p,
                        onTriggerChange: h,
                        onTriggerEnter: (0, o.useCallback)(() => {
                          d.isOpenDelayed ? R() : O();
                        }, [d.isOpenDelayed, R, O]),
                        onTriggerLeave: (0, o.useCallback)(() => {
                          y ? S() : window.clearTimeout(g.current);
                        }, [S, y]),
                        onOpen: O,
                        onClose: S,
                        disableHoverableContent: y
                      },
                      n
                    )
                  )
                );
              }
            : null,
        H = 8630 == n.j ? D : null,
        U =
          8630 == n.j
            ? (e) => {
                const { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
                  a = P(O, t);
                return (0, o.createElement)(
                  S,
                  { scope: t, forceMount: n },
                  (0, o.createElement)(f.z, { present: n || a.open }, (0, o.createElement)(d.h, { asChild: !0, container: i }, r))
                );
              }
            : null,
        K = 8630 == n.j ? k : null,
        Z = 8630 == n.j ? N : null;
    },
    818863: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => o });
      var r = n(696832);
      function o(e) {
        const t = (0, r.useRef)(e);
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          (0, r.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e);
              },
            []
          )
        );
      }
    },
    700536: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => i });
      var r = n(696832);
      if (8630 == n.j) var o = n(818863);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        const [i, a] = (function ({ defaultProp: e, onChange: t }) {
            const n = (0, r.useState)(e),
              [i] = n,
              a = (0, r.useRef)(i),
              l = (0, o.W)(t);
            return (
              (0, r.useEffect)(() => {
                a.current !== i && (l(i), (a.current = i));
              }, [i, a, l]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          u = l ? e : i,
          c = (0, o.W)(n);
        return [
          u,
          (0, r.useCallback)(
            (t) => {
              if (l) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && c(n);
              } else a(t);
            },
            [l, e, a, c]
          )
        ];
      }
    },
    427934: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => o });
      var r = n(696832);
      const o = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {};
    },
    769662: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => a, f: () => l });
      var r = n(983124),
        o = n(696832),
        i = n(924949);
      const a = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            i.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
              }
            })
          )
        ),
        l = 8630 == n.j ? a : null;
    }
  }
]);
