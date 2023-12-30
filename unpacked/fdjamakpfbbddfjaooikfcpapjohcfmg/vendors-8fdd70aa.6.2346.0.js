/*! For license information please see vendors-8fdd70aa.6.2346.0.js.LICENSE.txt */
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
        for (var n, a = o.alloc(0), u = 0; a.length < t; ) (n = i(u++)), (a = o.concat([a, r("sha1").update(e).update(n).digest()]));
        return a.slice(0, t);
      };
    },
    260220: (e, t, n) => {
      var r = n(508742),
        o = n(870439),
        i = n(535115),
        a = n(528891),
        u = n(657364),
        c = n(920160),
        s = n(734546),
        l = n(421607).Buffer;
      e.exports = function (e, t, n) {
        var d;
        d = e.padding ? e.padding : n ? 1 : 4;
        var f,
          p = r(e),
          h = p.modulus.byteLength();
        if (t.length > h || new a(t).cmp(p.modulus) >= 0) throw new Error("decryption error");
        f = n ? s(new a(t), p) : u(t, p);
        var v = l.alloc(h - f.length);
        if (((f = l.concat([v, f], h)), 4 === d))
          return (function (e, t) {
            var n = e.modulus.byteLength(),
              r = c("sha1").update(l.alloc(0)).digest(),
              a = r.length;
            if (0 !== t[0]) throw new Error("decryption error");
            var u = t.slice(1, a + 1),
              s = t.slice(a + 1),
              d = i(u, o(s, a)),
              f = i(s, o(d, n - a - 1));
            if (
              (function (e, t) {
                (e = l.from(e)), (t = l.from(t));
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
        u = n(535115),
        c = n(528891),
        s = n(734546),
        l = n(657364),
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
              s = i("sha1").update(d.alloc(0)).digest(),
              l = s.length,
              f = 2 * l;
            if (r > n - f - 2) throw new Error("message too long");
            var p = d.alloc(n - r - f - 2),
              h = n - l - 1,
              v = o(l),
              g = u(d.concat([s, p, d.alloc(1, 1), t], h), a(v, h)),
              m = u(v, a(g, l));
            return new c(d.concat([d.alloc(1), m, g], n));
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
              new c(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], a))
            );
          })(h, t, n);
        else {
          if (3 !== f) throw new Error("unknown padding");
          if ((p = new c(t)).cmp(h.modulus) >= 0) throw new Error("data too long for modulus");
        }
        return n ? l(p, h) : s(p, h);
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
            u = 2147483647,
            c = 36,
            s = 1,
            l = 26,
            d = 38,
            f = 700,
            p = 72,
            h = 128,
            v = "-",
            g = /^xn--/,
            m = /[^\x20-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            w = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input"
            },
            b = c - s,
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
          function O(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
          }
          function A(e, t, n) {
            var r = 0;
            for (e = n ? E(e / f) : e >> 1, e += E(e / t); e > (b * l) >> 1; r += c) e = E(e / b);
            return E(r + ((b + 1) * e) / (e + d));
          }
          function D(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              d,
              f,
              g,
              m,
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
                i = C, a = 1, d = c;
                o >= b && x("invalid-input"),
                  ((f = (y = e.charCodeAt(o++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : c) >= c ||
                    f > E((u - C) / a)) &&
                    x("overflow"),
                  (C += f * a),
                  !(f < (g = d <= T ? s : d >= T + l ? l : d - T));
                d += c
              )
                a > E(u / (m = c - g)) && x("overflow"), (a *= m);
              (T = A(C - i, (t = w.length + 1), 0 == i)), E(C / t) > u - M && x("overflow"), (M += E(C / t)), (C %= t), w.splice(C++, 0, M);
            }
            return _(w);
          }
          function L(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              d,
              f,
              g,
              m,
              y,
              w,
              b,
              M,
              T,
              _ = [];
            for (w = (e = P(e)).length, t = h, n = 0, i = p, a = 0; a < w; ++a) (y = e[a]) < 128 && _.push(C(y));
            for (r = o = _.length, o && _.push(v); r < w; ) {
              for (d = u, a = 0; a < w; ++a) (y = e[a]) >= t && y < d && (d = y);
              for (d - t > E((u - n) / (b = r + 1)) && x("overflow"), n += (d - t) * b, t = d, a = 0; a < w; ++a)
                if (((y = e[a]) < t && ++n > u && x("overflow"), y == t)) {
                  for (f = n, g = c; !(f < (m = g <= i ? s : g >= i + l ? l : g - i)); g += c)
                    (T = f - m), (M = c - m), _.push(C(O(m + (T % M), 0))), (f = E(T / M));
                  _.push(C(O(f, 0))), (i = A(n, b, r == o)), (n = 0), ++r;
                }
              ++n, ++t;
            }
            return _.join("");
          }
          (a = {
            version: "1.3.2",
            ucs2: { decode: P, encode: _ },
            decode: D,
            encode: L,
            toASCII: function (e) {
              return T(e, function (e) {
                return m.test(e) ? "xn--" + L(e) : e;
              });
            },
            toUnicode: function (e) {
              return T(e, function (e) {
                return g.test(e) ? D(e.slice(4).toLowerCase()) : e;
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
      n.d(t, { H9: () => g, xX: () => v });
      const r = 2147483647,
        o = 36,
        i = /^xn--/,
        a = /[^\0-\x7E]/,
        u = /[\x2E\u3002\uFF0E\uFF61]/g,
        c = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        s = Math.floor,
        l = String.fromCharCode;
      function d(e) {
        throw new RangeError(c[e]);
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
        })((e = e.replace(u, ".")).split("."), t).join(".");
        return r + o;
      }
      const p = function (e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        },
        h = function (e, t, n) {
          let r = 0;
          for (e = n ? s(e / 700) : e >> 1, e += s(e / t); e > 455; r += o) e = s(e / 35);
          return s(r + (36 * e) / (e + 38));
        },
        v = function (e) {
          return f(e, function (e) {
            return i.test(e)
              ? (function (e) {
                  const t = [],
                    n = e.length;
                  let i = 0,
                    a = 128,
                    u = 72,
                    c = e.lastIndexOf("-");
                  c < 0 && (c = 0);
                  for (let n = 0; n < c; ++n) e.charCodeAt(n) >= 128 && d("not-basic"), t.push(e.charCodeAt(n));
                  for (let f = c > 0 ? c + 1 : 0; f < n; ) {
                    let c = i;
                    for (let t = 1, a = o; ; a += o) {
                      f >= n && d("invalid-input");
                      const c = (l = e.charCodeAt(f++)) - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : o;
                      (c >= o || c > s((r - i) / t)) && d("overflow"), (i += c * t);
                      const p = a <= u ? 1 : a >= u + 26 ? 26 : a - u;
                      if (c < p) break;
                      const h = o - p;
                      t > s(r / h) && d("overflow"), (t *= h);
                    }
                    const p = t.length + 1;
                    (u = h(i - c, p, 0 == c)), s(i / p) > r - a && d("overflow"), (a += s(i / p)), (i %= p), t.splice(i++, 0, a);
                  }
                  var l;
                  return String.fromCodePoint(...t);
                })(e.slice(4).toLowerCase())
              : e;
          });
        },
        g = function (e) {
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
                      u = 72;
                    for (const n of e) n < 128 && t.push(l(n));
                    let c = t.length,
                      f = c;
                    for (c && t.push("-"); f < n; ) {
                      let n = r;
                      for (const t of e) t >= i && t < n && (n = t);
                      const v = f + 1;
                      n - i > s((r - a) / v) && d("overflow"), (a += (n - i) * v), (i = n);
                      for (const n of e)
                        if ((n < i && ++a > r && d("overflow"), n == i)) {
                          let e = a;
                          for (let n = o; ; n += o) {
                            const r = n <= u ? 1 : n >= u + 26 ? 26 : n - u;
                            if (e < r) break;
                            const i = e - r,
                              a = o - r;
                            t.push(l(p(r + (i % a), 0))), (e = s(i / a));
                          }
                          t.push(l(p(e, 0))), (u = h(a, v, f == c)), (a = 0), ++f;
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
        u = n(154761);
      function c(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var s = c.prototype;
      (s.addData = function (e) {
        var t = new r(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (s.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
          return this.modules[e][t];
        }),
        (s.getModuleCount = function () {
          return this.moduleCount;
        }),
        (s.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (var t = o.getRSBlocks(e, this.errorCorrectLevel), n = new i(), r = 0, u = 0; u < t.length; u++) r += t[u].dataCount;
              for (u = 0; u < this.dataList.length; u++) {
                var c = this.dataList[u];
                n.put(c.mode, 4), n.put(c.getLength(), a.getLengthInBits(c.mode, e)), c.write(n);
              }
              if (n.getLengthInBits() <= 8 * r) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (s.makeImpl = function (e, t) {
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
            null == this.dataCache && (this.dataCache = c.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, t);
        }),
        (s.setupPositionProbePattern = function (e, t) {
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
        (s.getBestMaskPattern = function () {
          for (var e = 0, t = 0, n = 0; n < 8; n++) {
            this.makeImpl(!0, n);
            var r = a.getLostPoint(this);
            (0 == n || e > r) && ((e = r), (t = n));
          }
          return t;
        }),
        (s.createMovieClip = function (e, t, n) {
          var r = e.createEmptyMovieClip(t, n);
          this.make();
          for (var o = 0; o < this.modules.length; o++)
            for (var i = 1 * o, a = 0; a < this.modules[o].length; a++) {
              var u = 1 * a;
              this.modules[o][a] &&
                (r.beginFill(0, 100), r.moveTo(u, i), r.lineTo(u + 1, i), r.lineTo(u + 1, i + 1), r.lineTo(u, i + 1), r.endFill());
            }
          return r;
        }),
        (s.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (s.setupPositionAdjustPattern = function () {
          for (var e = a.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
            for (var n = 0; n < e.length; n++) {
              var r = e[t],
                o = e[n];
              if (null == this.modules[r][o])
                for (var i = -2; i <= 2; i++)
                  for (var u = -2; u <= 2; u++) this.modules[r + i][o + u] = -2 == i || 2 == i || -2 == u || 2 == u || (0 == i && 0 == u);
            }
        }),
        (s.setupTypeNumber = function (e) {
          for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
            var r = !e && 1 == ((t >> n) & 1);
            this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] = r;
          }
          for (n = 0; n < 18; n++)
            (r = !e && 1 == ((t >> n) & 1)), (this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r);
        }),
        (s.setupTypeInfo = function (e, t) {
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
        (s.mapData = function (e, t) {
          for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, u = this.moduleCount - 1; u > 0; u -= 2)
            for (6 == u && u--; ; ) {
              for (var c = 0; c < 2; c++)
                if (null == this.modules[r][u - c]) {
                  var s = !1;
                  i < e.length && (s = 1 == ((e[i] >>> o) & 1)),
                    a.getMask(t, r, u - c) && (s = !s),
                    (this.modules[r][u - c] = s),
                    -1 == --o && (i++, (o = 7));
                }
              if ((r += n) < 0 || this.moduleCount <= r) {
                (r -= n), (n = -n);
                break;
              }
            }
        }),
        (c.PAD0 = 236),
        (c.PAD1 = 17),
        (c.createData = function (e, t, n) {
          for (var r = o.getRSBlocks(e, t), u = new i(), s = 0; s < n.length; s++) {
            var l = n[s];
            u.put(l.mode, 4), u.put(l.getLength(), a.getLengthInBits(l.mode, e)), l.write(u);
          }
          var d = 0;
          for (s = 0; s < r.length; s++) d += r[s].dataCount;
          if (u.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * d + ")");
          for (u.getLengthInBits() + 4 <= 8 * d && u.put(0, 4); u.getLengthInBits() % 8 != 0; ) u.putBit(!1);
          for (; !(u.getLengthInBits() >= 8 * d || (u.put(c.PAD0, 8), u.getLengthInBits() >= 8 * d)); ) u.put(c.PAD1, 8);
          return c.createBytes(u, r);
        }),
        (c.createBytes = function (e, t) {
          for (var n = 0, r = 0, o = 0, i = new Array(t.length), c = new Array(t.length), s = 0; s < t.length; s++) {
            var l = t[s].dataCount,
              d = t[s].totalCount - l;
            (r = Math.max(r, l)), (o = Math.max(o, d)), (i[s] = new Array(l));
            for (var f = 0; f < i[s].length; f++) i[s][f] = 255 & e.buffer[f + n];
            n += l;
            var p = a.getErrorCorrectPolynomial(d),
              h = new u(i[s], p.getLength() - 1).mod(p);
            for (c[s] = new Array(p.getLength() - 1), f = 0; f < c[s].length; f++) {
              var v = f + h.getLength() - c[s].length;
              c[s][f] = v >= 0 ? h.get(v) : 0;
            }
          }
          var g = 0;
          for (f = 0; f < t.length; f++) g += t[f].totalCount;
          var m = new Array(g),
            y = 0;
          for (f = 0; f < r; f++) for (s = 0; s < t.length; s++) f < i[s].length && (m[y++] = i[s][f]);
          for (f = 0; f < o; f++) for (s = 0; s < t.length; s++) f < c[s].length && (m[y++] = c[s][f]);
          return m;
        }),
        (e.exports = c);
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
            for (var u = n[3 * a + 0], c = n[3 * a + 1], s = n[3 * a + 2], l = 0; l < u; l++) i.push(new o(c, s));
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
                for (var i = 0, a = e.isDark(r, o), u = -1; u <= 1; u++)
                  if (!(r + u < 0 || t <= r + u))
                    for (var c = -1; c <= 1; c++) o + c < 0 || t <= o + c || (0 == u && 0 == c) || (a == e.isDark(r + u, o + c) && i++);
                i > 5 && (n += 3 + i - 5);
              }
            for (r = 0; r < t - 1; r++)
              for (o = 0; o < t - 1; o++) {
                var s = 0;
                e.isDark(r, o) && s++,
                  e.isDark(r + 1, o) && s++,
                  e.isDark(r, o + 1) && s++,
                  e.isDark(r + 1, o + 1) && s++,
                  (0 != s && 4 != s) || (n += 3);
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
            var l = 0;
            for (o = 0; o < t; o++) for (r = 0; r < t; r++) e.isDark(r, o) && l++;
            return n + (Math.abs((100 * l) / t / t - 50) / 5) * 10;
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
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function u(e, t) {
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
      function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
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
      function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var m = n(696832),
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
          u = Math.floor(r * x),
          c = a / r,
          s = (n.width || u) * c,
          l = (n.height || u) * c,
          d = null == n.x ? t.length / 2 - s / 2 : n.x * c,
          f = null == n.y ? t.length / 2 - l / 2 : n.y * c,
          p = null;
        if (n.excavate) {
          var h = Math.floor(d),
            v = Math.floor(f);
          p = { x: h, y: v, w: Math.ceil(s + d - h), h: Math.ceil(l + f - v) };
        }
        return { x: d, y: f, h: l, w: s, excavation: p };
      }
      var _ = (function () {
          try {
            new Path2D().addPath(new Path2D());
          } catch (e) {
            return !1;
          }
          return !0;
        })(),
        O = (function (e) {
          function t() {
            var e, n;
            c(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              g(p((n = d(this, (e = f(t)).call.apply(e, [this].concat(o))))), "_canvas", void 0),
              g(p(n), "_image", void 0),
              g(p(n), "state", { imgLoaded: !1 }),
              g(p(n), "handleImageLoad", function () {
                n.setState({ imgLoaded: !0 });
              }),
              n
            );
          }
          return (
            h(t, e),
            l(t, [
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
                    u = e.imageSettings,
                    c = new y(-1, w[r]);
                  if ((c.addData(b(t)), c.make(), null != this._canvas)) {
                    var s = this._canvas,
                      l = s.getContext("2d");
                    if (!l) return;
                    var d = c.modules;
                    if (null === d) return;
                    var f = a ? C : 0,
                      p = d.length + 2 * f,
                      h = P(this.props, d);
                    null != u && null != h && null != h.excavation && (d = T(d, h.excavation));
                    var v = window.devicePixelRatio || 1;
                    s.height = s.width = n * v;
                    var g = (n / p) * v;
                    l.scale(g, g),
                      (l.fillStyle = o),
                      l.fillRect(0, 0, p, p),
                      (l.fillStyle = i),
                      _
                        ? l.fill(new Path2D(M(d, f)))
                        : d.forEach(function (e, t) {
                            e.forEach(function (e, n) {
                              e && l.fillRect(n + f, t + f, 1, 1);
                            });
                          }),
                      this.state.imgLoaded && this._image && null != h && l.drawImage(this._image, h.x + f, h.y + f, h.w, h.h);
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
                    c = u(t, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]),
                    s = a({ height: n, width: n }, r),
                    l = null,
                    d = i && i.src;
                  return (
                    null != i &&
                      null != d &&
                      (l = m.createElement("img", {
                        src: d,
                        style: { display: "none" },
                        onLoad: this.handleImageLoad,
                        ref: function (t) {
                          return (e._image = t);
                        }
                      })),
                    m.createElement(
                      m.Fragment,
                      null,
                      m.createElement(
                        "canvas",
                        o(
                          {
                            style: s,
                            height: n,
                            width: n,
                            ref: function (t) {
                              return (e._canvas = t);
                            }
                          },
                          c
                        )
                      ),
                      l
                    )
                  );
                }
              }
            ]),
            t
          );
        })(m.PureComponent);
      g(O, "defaultProps", E);
      var A = (function (e) {
        function t() {
          return c(this, t), d(this, f(t).apply(this, arguments));
        }
        return (
          h(t, e),
          l(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.size,
                  r = e.level,
                  i = e.bgColor,
                  a = e.fgColor,
                  c = e.includeMargin,
                  s = e.imageSettings,
                  l = u(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]),
                  d = new y(-1, w[r]);
                d.addData(b(t)), d.make();
                var f = d.modules;
                if (null === f) return null;
                var p = c ? C : 0,
                  h = f.length + 2 * p,
                  v = P(this.props, f),
                  g = null;
                null != s &&
                  null != v &&
                  (null != v.excavation && (f = T(f, v.excavation)),
                  (g = m.createElement("image", {
                    xlinkHref: s.src,
                    height: v.h,
                    width: v.w,
                    x: v.x + p,
                    y: v.y + p,
                    preserveAspectRatio: "none"
                  })));
                var E = M(f, p);
                return m.createElement(
                  "svg",
                  o({ shapeRendering: "crispEdges", height: n, width: n, viewBox: "0 0 ".concat(h, " ").concat(h) }, l),
                  m.createElement("path", { fill: i, d: "M0,0 h".concat(h, "v").concat(h, "H0z") }),
                  m.createElement("path", { fill: a, d: E }),
                  g
                );
              }
            }
          ]),
          t
        );
      })(m.PureComponent);
      g(A, "defaultProps", E);
      var D = function (e) {
        var t = e.renderAs,
          n = u(e, ["renderAs"]),
          r = "svg" === t ? A : O;
        return m.createElement(r, n);
      };
      (D.defaultProps = a({ renderAs: "canvas" }, E)), (e.exports = D);
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
      function u(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? u(Object.keys(e))
              .sort(function (e, t) {
                return Number(e) - Number(t);
              })
              .map(function (t) {
                return e[t];
              })
          : e;
      }
      function c(e) {
        var t = e.indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function s(e, t) {
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
                return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? (e[t] = u(n)) : (e[t] = n), e;
              }, Object.create(null)))
          : r;
      }
      (t.extract = c),
        (t.parse = s),
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
          return { url: e.split("?")[0] || "", query: s(c(e), t) };
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
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var c = e.length;
        u > 0 && c > u && (c = u);
        for (var s = 0; s < c; ++s) {
          var l,
            d,
            f,
            p,
            h = e[s].replace(a, "%20"),
            v = h.indexOf(r);
          v >= 0 ? ((l = h.substr(0, v)), (d = h.substr(v + 1))) : ((l = h), (d = "")),
            (f = decodeURIComponent(l)),
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
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var c = e.length;
        u > 0 && c > u && (c = u);
        for (var s = 0; s < c; ++s) {
          var l,
            d,
            f,
            p,
            h = e[s].replace(a, "%20"),
            v = h.indexOf(r);
          v >= 0 ? ((l = h.substr(0, v)), (d = h.substr(v + 1))) : ((l = h), (d = "")),
            (f = decodeURIComponent(l)),
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
    383661: (e, t, n) => {
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
    607660: (e, t, n) => {
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
              function u(t) {
                const { scope: n, children: o, ...u } = t,
                  c = (null == n ? void 0 : n[e][a]) || i,
                  s = (0, r.useMemo)(() => u, Object.values(u));
                return (0, r.createElement)(c.Provider, { value: s }, o);
              }
              return (
                (n = [...n, o]),
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, u) {
                    const c = (null == u ? void 0 : u[e][a]) || i,
                      s = (0, r.useContext)(c);
                    if (s) return s;
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
    588345: (e, t, n) => {
      "use strict";
      n.d(t, { XB: () => f });
      var r = n(983124),
        o = n(696832),
        i = n(612527),
        a = n(245054),
        u = n(383661),
        c = n(859109);
      const s = "dismissableLayer.update";
      let l;
      const d = (0, o.createContext)({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
        f = (0, o.forwardRef)((e, t) => {
          var n;
          const {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: g,
              onFocusOutside: m,
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
            P = (0, u.e)(t, (e) => x(e)),
            _ = Array.from(E.layers),
            [O] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            A = _.indexOf(O),
            D = C ? _.indexOf(C) : -1,
            L = E.layersWithOutsidePointerEventsDisabled.size > 0,
            R = D >= A,
            I = (function (e, t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) {
              const n = (0, c.W)(e),
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
              R && !n && (null == g || g(e), null == y || y(e), e.defaultPrevented || null == w || w());
            }, M),
            k = (function (e, t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) {
              const n = (0, c.W)(e),
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
              [...E.branches].some((e) => e.contains(t)) || (null == m || m(e), null == y || y(e), e.defaultPrevented || null == w || w());
            }, M);
          return (
            (function (e, t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) {
              const n = (0, c.W)(e);
              (0, o.useEffect)(() => {
                const e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e);
              }, [n, t]);
            })((e) => {
              D === E.layers.size - 1 && (null == v || v(e), !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, M),
            (0, o.useEffect)(() => {
              if (C)
                return (
                  f &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((l = M.body.style.pointerEvents), (M.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(C)),
                  E.layers.add(C),
                  p(),
                  () => {
                    f && 1 === E.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = l);
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
              return document.addEventListener(s, e), () => document.removeEventListener(s, e);
            }, []),
            (0, o.createElement)(
              a.WV.div,
              (0, r.Z)({}, b, {
                ref: P,
                style: { pointerEvents: L ? (R ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: (0, i.M)(e.onFocusCapture, k.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, k.onBlurCapture),
                onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, I.onPointerDownCapture)
              })
            )
          );
        });
      function p() {
        const e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function h(e, t, n, { discrete: r }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }), r ? (0, a.jH)(o, i) : o.dispatchEvent(i);
      }
    },
    102555: (e, t, n) => {
      "use strict";
      n.d(t, { ck: () => tt, Uv: () => et, fC: () => Qe, Tr: () => nt, tu: () => ot, fF: () => rt });
      var r = n(983124),
        o = n(696832),
        i = n(612527),
        a = n(383661),
        u = n(607660),
        c = n(885390),
        s = n(245054),
        l = n(267863);
      function d(e) {
        const t = e + "CollectionProvider",
          [n, r] = (0, u.b)(t),
          [i, c] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
          s = e + "CollectionSlot",
          d = o.forwardRef((e, t) => {
            const { scope: n, children: r } = e,
              i = c(s, n),
              u = (0, a.e)(t, i.collectionRef);
            return o.createElement(l.g7, { ref: u }, r);
          }),
          f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          h = o.forwardRef((e, t) => {
            const { scope: n, children: r, ...i } = e,
              u = o.useRef(null),
              s = (0, a.e)(t, u),
              d = c(f, n);
            return (
              o.useEffect(
                () => (
                  d.itemMap.set(u, { ref: u, ...i }),
                  () => {
                    d.itemMap.delete(u);
                  }
                )
              ),
              o.createElement(l.g7, { [p]: "", ref: s }, r)
            );
          });
        return [
          {
            Provider: (e) => {
              const { scope: t, children: n } = e,
                r = o.useRef(null),
                a = o.useRef(new Map()).current;
              return o.createElement(i, { scope: t, itemMap: a, collectionRef: r }, n);
            },
            Slot: d,
            ItemSlot: h
          },
          function (t) {
            const n = c(e + "CollectionConsumer", t);
            return o.useCallback(() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
            }, [n.collectionRef, n.itemMap]);
          },
          r
        ];
      }
      const f = (0, o.createContext)(void 0);
      function p(e) {
        const t = (0, o.useContext)(f);
        return e || t || "ltr";
      }
      var h = n(588345);
      let v = 0;
      function g() {
        (0, o.useEffect)(() => {
          var e, t;
          const n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : m()),
            document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : m()),
            v++,
            () => {
              1 === v && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), v--;
            }
          );
        }, []);
      }
      function m() {
        const e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var y = n(859109);
      const w = "focusScope.autoFocusOnMount",
        b = "focusScope.autoFocusOnUnmount",
        E = { bubbles: !1, cancelable: !0 },
        C = (0, o.forwardRef)((e, t) => {
          const { loop: n = !1, trapped: i = !1, onMountAutoFocus: u, onUnmountAutoFocus: c, ...l } = e,
            [d, f] = (0, o.useState)(null),
            p = (0, y.W)(u),
            h = (0, y.W)(c),
            v = (0, o.useRef)(null),
            g = (0, a.e)(t, (e) => f(e)),
            m = (0, o.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              }
            }).current;
          (0, o.useEffect)(() => {
            if (i) {
              function e(e) {
                if (m.paused || !d) return;
                const t = e.target;
                d.contains(t) ? (v.current = t) : P(v.current, { select: !0 });
              }
              function t(e) {
                if (m.paused || !d) return;
                const t = e.relatedTarget;
                null !== t && (d.contains(t) || P(v.current, { select: !0 }));
              }
              function n(e) {
                if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && P(d);
              }
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return (
                d && r.observe(d, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                }
              );
            }
          }, [i, d, m.paused]),
            (0, o.useEffect)(() => {
              if (d) {
                _.add(m);
                const e = document.activeElement;
                if (!d.contains(e)) {
                  const t = new CustomEvent(w, E);
                  d.addEventListener(w, p),
                    d.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        const n = document.activeElement;
                        for (const r of e) if ((P(r, { select: t }), document.activeElement !== n)) return;
                      })(
                        x(d).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && P(d));
                }
                return () => {
                  d.removeEventListener(w, p),
                    setTimeout(() => {
                      const t = new CustomEvent(b, E);
                      d.addEventListener(b, h),
                        d.dispatchEvent(t),
                        t.defaultPrevented || P(null != e ? e : document.body, { select: !0 }),
                        d.removeEventListener(b, h),
                        _.remove(m);
                    }, 0);
                };
              }
            }, [d, p, h, m]);
          const C = (0, o.useCallback)(
            (e) => {
              if (!n && !i) return;
              if (m.paused) return;
              const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                const t = e.currentTarget,
                  [o, i] = (function (e) {
                    const t = x(e);
                    return [M(t, e), M(t.reverse(), e)];
                  })(t);
                o && i
                  ? e.shiftKey || r !== i
                    ? e.shiftKey && r === o && (e.preventDefault(), n && P(i, { select: !0 }))
                    : (e.preventDefault(), n && P(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, i, m.paused]
          );
          return (0, o.createElement)(s.WV.div, (0, r.Z)({ tabIndex: -1 }, l, { ref: g, onKeyDown: C }));
        });
      function x(e) {
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
      function M(e, t) {
        for (const n of e) if (!T(n, { upTo: t })) return n;
      }
      function T(e, { upTo: t }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e; ) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement;
        }
        return !1;
      }
      function P(e, { select: t = !1 } = {}) {
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
      const _ = (function () {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && (null == n || n.pause()), (e = O(e, t)), e.unshift(t);
          },
          remove(t) {
            var n;
            (e = O(e, t)), null === (n = e[0]) || void 0 === n || n.resume();
          }
        };
      })();
      function O(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var A = n(351043),
        D = n(695e3),
        L = n(484763),
        R = n(334888);
      const I = "rovingFocusGroup.onEntryFocus",
        k = { bubbles: !1, cancelable: !0 },
        S = "RovingFocusGroup",
        [B, F, N] = d(S),
        [j, U] = (0, u.b)(S, [N]),
        [H, K] = j(S),
        W = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            B.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, o.createElement)(B.Slot, { scope: e.__scopeRovingFocusGroup }, (0, o.createElement)(Z, (0, r.Z)({}, e, { ref: t })))
          )
        ),
        Z = (0, o.forwardRef)((e, t) => {
          const {
              __scopeRovingFocusGroup: n,
              orientation: u,
              loop: l = !1,
              dir: d,
              currentTabStopId: f,
              defaultCurrentTabStopId: h,
              onCurrentTabStopIdChange: v,
              onEntryFocus: g,
              ...m
            } = e,
            w = (0, o.useRef)(null),
            b = (0, a.e)(t, w),
            E = p(d),
            [C = null, x] = (0, c.T)({ prop: f, defaultProp: h, onChange: v }),
            [M, T] = (0, o.useState)(!1),
            P = (0, y.W)(g),
            _ = F(n),
            O = (0, o.useRef)(!1),
            [A, D] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              const e = w.current;
              if (e) return e.addEventListener(I, P), () => e.removeEventListener(I, P);
            }, [P]),
            (0, o.createElement)(
              H,
              {
                scope: n,
                orientation: u,
                dir: E,
                loop: l,
                currentTabStopId: C,
                onItemFocus: (0, o.useCallback)((e) => x(e), [x]),
                onItemShiftTab: (0, o.useCallback)(() => T(!0), []),
                onFocusableItemAdd: (0, o.useCallback)(() => D((e) => e + 1), []),
                onFocusableItemRemove: (0, o.useCallback)(() => D((e) => e - 1), [])
              },
              (0, o.createElement)(
                s.WV.div,
                (0, r.Z)({ tabIndex: M || 0 === A ? -1 : 0, "data-orientation": u }, m, {
                  ref: b,
                  style: { outline: "none", ...e.style },
                  onMouseDown: (0, i.M)(e.onMouseDown, () => {
                    O.current = !0;
                  }),
                  onFocus: (0, i.M)(e.onFocus, (e) => {
                    const t = !O.current;
                    if (e.target === e.currentTarget && t && !M) {
                      const t = new CustomEvent(I, k);
                      if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                        const e = _().filter((e) => e.focusable);
                        V([e.find((e) => e.active), e.find((e) => e.id === C), ...e].filter(Boolean).map((e) => e.ref.current));
                      }
                    }
                    O.current = !1;
                  }),
                  onBlur: (0, i.M)(e.onBlur, () => T(!1))
                })
              )
            )
          );
        }),
        z = (0, o.forwardRef)((e, t) => {
          const { __scopeRovingFocusGroup: n, focusable: a = !0, active: u = !1, tabStopId: c, ...l } = e,
            d = (0, A.M)(),
            f = c || d,
            p = K("RovingFocusGroupItem", n),
            h = p.currentTabStopId === f,
            v = F(n),
            { onFocusableItemAdd: g, onFocusableItemRemove: m } = p;
          return (
            (0, o.useEffect)(() => {
              if (a) return g(), () => m();
            }, [a, g, m]),
            (0, o.createElement)(
              B.ItemSlot,
              { scope: n, id: f, focusable: a, active: u },
              (0, o.createElement)(
                s.WV.span,
                (0, r.Z)({ tabIndex: h ? 0 : -1, "data-orientation": p.orientation }, l, {
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
                        : G[r];
                    })(e, p.orientation, p.dir);
                    if (void 0 !== t) {
                      e.preventDefault();
                      let o = v()
                        .filter((e) => e.focusable)
                        .map((e) => e.ref.current);
                      if ("last" === t) o.reverse();
                      else if ("prev" === t || "next" === t) {
                        "prev" === t && o.reverse();
                        const i = o.indexOf(e.currentTarget);
                        o = p.loop ? ((r = i + 1), (n = o).map((e, t) => n[(r + t) % n.length])) : o.slice(i + 1);
                      }
                      setTimeout(() => V(o));
                    }
                    var n, r;
                  })
                })
              )
            )
          );
        }),
        G = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };
      function V(e) {
        const t = document.activeElement;
        for (const n of e) {
          if (n === t) return;
          if ((n.focus(), document.activeElement !== t)) return;
        }
      }
      const $ = W,
        X = z;
      n(340627);
      var Y = n(163830);
      const q = ["Enter", " "],
        J = ["ArrowUp", "PageDown", "End"],
        Q = ["ArrowDown", "PageUp", "Home", ...J],
        ee = { ltr: [...q, "ArrowRight"], rtl: [...q, "ArrowLeft"] },
        te = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        ne = "Menu",
        [re, oe, ie] = d(ne),
        [ae, ue] = (0, u.b)(ne, [ie, D.D7, U]),
        ce = (0, D.D7)(),
        se = U(),
        [le, de] = ae(ne),
        [fe, pe] = ae(ne),
        he = (0, o.forwardRef)((e, t) => {
          const { __scopeMenu: n, ...i } = e,
            a = ce(n);
          return (0, o.createElement)(D.ee, (0, r.Z)({}, a, i, { ref: t }));
        }),
        ve = "MenuPortal",
        [ge, me] = ae(ve, { forceMount: void 0 }),
        ye = "MenuContent",
        [we, be] = ae(ye),
        Ee = (0, o.forwardRef)((e, t) => {
          const {
              __scopeMenu: n,
              loop: u = !1,
              trapFocus: c,
              onOpenAutoFocus: s,
              onCloseAutoFocus: d,
              disableOutsidePointerEvents: f,
              onEntryFocus: p,
              onEscapeKeyDown: v,
              onPointerDownOutside: m,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: b,
              disableOutsideScroll: E,
              ...x
            } = e,
            M = de(ye, n),
            T = pe(ye, n),
            P = ce(n),
            _ = se(n),
            O = oe(n),
            [A, L] = (0, o.useState)(null),
            R = (0, o.useRef)(null),
            I = (0, a.e)(t, R, M.onContentChange),
            k = (0, o.useRef)(0),
            S = (0, o.useRef)(""),
            B = (0, o.useRef)(0),
            F = (0, o.useRef)(null),
            N = (0, o.useRef)("right"),
            j = (0, o.useRef)(0),
            U = E ? Y.Z : o.Fragment,
            H = E ? { as: l.g7, allowPinchZoom: !0 } : void 0;
          (0, o.useEffect)(() => () => window.clearTimeout(k.current), []), g();
          const K = (0, o.useCallback)((e) => {
            var t, n;
            return (
              N.current === (null === (t = F.current) || void 0 === t ? void 0 : t.side) &&
              (function (e, t) {
                if (!t) return !1;
                return (function (e, t) {
                  const { x: n, y: r } = e;
                  let o = !1;
                  for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                    const a = t[e].x,
                      u = t[e].y,
                      c = t[i].x,
                      s = t[i].y;
                    u > r != s > r && n < ((c - a) * (r - u)) / (s - u) + a && (o = !o);
                  }
                  return o;
                })({ x: e.clientX, y: e.clientY }, t);
              })(e, null === (n = F.current) || void 0 === n ? void 0 : n.area)
            );
          }, []);
          return (0, o.createElement)(
            we,
            {
              scope: n,
              searchRef: S,
              onItemEnter: (0, o.useCallback)(
                (e) => {
                  K(e) && e.preventDefault();
                },
                [K]
              ),
              onItemLeave: (0, o.useCallback)(
                (e) => {
                  var t;
                  K(e) || (null === (t = R.current) || void 0 === t || t.focus(), L(null));
                },
                [K]
              ),
              onTriggerLeave: (0, o.useCallback)(
                (e) => {
                  K(e) && e.preventDefault();
                },
                [K]
              ),
              pointerGraceTimerRef: B,
              onPointerGraceIntentChange: (0, o.useCallback)((e) => {
                F.current = e;
              }, [])
            },
            (0, o.createElement)(
              U,
              H,
              (0, o.createElement)(
                C,
                {
                  asChild: !0,
                  trapped: c,
                  onMountAutoFocus: (0, i.M)(s, (e) => {
                    var t;
                    e.preventDefault(), null === (t = R.current) || void 0 === t || t.focus();
                  }),
                  onUnmountAutoFocus: d
                },
                (0, o.createElement)(
                  h.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: f,
                    onEscapeKeyDown: v,
                    onPointerDownOutside: m,
                    onFocusOutside: y,
                    onInteractOutside: w,
                    onDismiss: b
                  },
                  (0, o.createElement)(
                    $,
                    (0, r.Z)({ asChild: !0 }, _, {
                      dir: T.dir,
                      orientation: "vertical",
                      loop: u,
                      currentTabStopId: A,
                      onCurrentTabStopIdChange: L,
                      onEntryFocus: (0, i.M)(p, (e) => {
                        T.isUsingKeyboardRef.current || e.preventDefault();
                      })
                    }),
                    (0, o.createElement)(
                      D.VY,
                      (0, r.Z)(
                        {
                          role: "menu",
                          "aria-orientation": "vertical",
                          "data-state": Be(M.open),
                          "data-radix-menu-content": "",
                          dir: T.dir
                        },
                        P,
                        x,
                        {
                          ref: I,
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
                                  const r = S.current + e,
                                    o = O().filter((e) => !e.disabled),
                                    i = document.activeElement,
                                    a = null === (t = o.find((e) => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue,
                                    u = (function (e, t, n) {
                                      const r = t.length > 1 && Array.from(t).every((e) => e === t[0]),
                                        o = r ? t[0] : t,
                                        i = n ? e.indexOf(n) : -1;
                                      let a = ((u = e), (c = Math.max(i, 0)), u.map((e, t) => u[(c + t) % u.length]));
                                      var u, c;
                                      1 === o.length && (a = a.filter((e) => e !== n));
                                      const s = a.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                                      return s !== n ? s : void 0;
                                    })(
                                      o.map((e) => e.textValue),
                                      r,
                                      a
                                    ),
                                    c = null === (n = o.find((e) => e.textValue === u)) || void 0 === n ? void 0 : n.ref.current;
                                  !(function e(t) {
                                    (S.current = t),
                                      window.clearTimeout(k.current),
                                      "" !== t && (k.current = window.setTimeout(() => e(""), 1e3));
                                  })(r),
                                    c && setTimeout(() => c.focus());
                                })(e.key));
                            const o = R.current;
                            if (e.target !== o) return;
                            if (!Q.includes(e.key)) return;
                            e.preventDefault();
                            const i = O()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            J.includes(e.key) && i.reverse(),
                              (function (e) {
                                const t = document.activeElement;
                                for (const n of e) {
                                  if (n === t) return;
                                  if ((n.focus(), document.activeElement !== t)) return;
                                }
                              })(i);
                          }),
                          onBlur: (0, i.M)(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(k.current), (S.current = ""));
                          }),
                          onPointerMove: (0, i.M)(
                            e.onPointerMove,
                            Fe((e) => {
                              const t = e.target,
                                n = j.current !== e.clientX;
                              if (e.currentTarget.contains(t) && n) {
                                const t = e.clientX > j.current ? "right" : "left";
                                (N.current = t), (j.current = e.clientX);
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
        Ce = "MenuItem",
        xe = "menu.itemSelect",
        Me = (0, o.forwardRef)((e, t) => {
          const { disabled: n = !1, onSelect: u, ...c } = e,
            l = (0, o.useRef)(null),
            d = pe(Ce, e.__scopeMenu),
            f = be(Ce, e.__scopeMenu),
            p = (0, a.e)(t, l),
            h = (0, o.useRef)(!1);
          return (0, o.createElement)(
            Te,
            (0, r.Z)({}, c, {
              ref: p,
              disabled: n,
              onClick: (0, i.M)(e.onClick, () => {
                const e = l.current;
                if (!n && e) {
                  const t = new CustomEvent(xe, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(xe, (e) => (null == u ? void 0 : u(e)), { once: !0 }),
                    (0, s.jH)(e, t),
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
                n || (t && " " === e.key) || (q.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
              })
            })
          );
        }),
        Te = (0, o.forwardRef)((e, t) => {
          const { __scopeMenu: n, disabled: u = !1, textValue: c, ...l } = e,
            d = be(Ce, n),
            f = se(n),
            p = (0, o.useRef)(null),
            h = (0, a.e)(t, p),
            [v, g] = (0, o.useState)(!1),
            [m, y] = (0, o.useState)("");
          return (
            (0, o.useEffect)(() => {
              const e = p.current;
              var t;
              e && y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
            }, [l.children]),
            (0, o.createElement)(
              re.ItemSlot,
              { scope: n, disabled: u, textValue: null != c ? c : m },
              (0, o.createElement)(
                X,
                (0, r.Z)({ asChild: !0 }, f, { focusable: !u }),
                (0, o.createElement)(
                  s.WV.div,
                  (0, r.Z)(
                    {
                      role: "menuitem",
                      "data-highlighted": v ? "" : void 0,
                      "aria-disabled": u || void 0,
                      "data-disabled": u ? "" : void 0
                    },
                    l,
                    {
                      ref: h,
                      onPointerMove: (0, i.M)(
                        e.onPointerMove,
                        Fe((e) => {
                          u ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus());
                        })
                      ),
                      onPointerLeave: (0, i.M)(
                        e.onPointerLeave,
                        Fe((e) => d.onItemLeave(e))
                      ),
                      onFocus: (0, i.M)(e.onFocus, () => g(!0)),
                      onBlur: (0, i.M)(e.onBlur, () => g(!1))
                    }
                  )
                )
              )
            )
          );
        }),
        [Pe, _e] = ae("MenuRadioGroup", { value: void 0, onValueChange: () => {} }),
        [Oe, Ae] = ae("MenuItemIndicator", { checked: !1 }),
        De = "MenuSub",
        [Le, Re] = ae(De),
        Ie = "MenuSubTrigger",
        ke = (0, o.forwardRef)((e, t) => {
          const n = de(Ie, e.__scopeMenu),
            u = pe(Ie, e.__scopeMenu),
            c = Re(Ie, e.__scopeMenu),
            s = be(Ie, e.__scopeMenu),
            l = (0, o.useRef)(null),
            { pointerGraceTimerRef: d, onPointerGraceIntentChange: f } = s,
            p = { __scopeMenu: e.__scopeMenu },
            h = (0, o.useCallback)(() => {
              l.current && window.clearTimeout(l.current), (l.current = null);
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
              he,
              (0, r.Z)({ asChild: !0 }, p),
              (0, o.createElement)(
                Te,
                (0, r.Z)(
                  {
                    id: c.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": c.contentId,
                    "data-state": Be(n.open)
                  },
                  e,
                  {
                    ref: (0, a.F)(t, c.onTriggerChange),
                    onClick: (t) => {
                      var r;
                      null === (r = e.onClick) || void 0 === r || r.call(e, t),
                        e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                    },
                    onPointerMove: (0, i.M)(
                      e.onPointerMove,
                      Fe((t) => {
                        s.onItemEnter(t),
                          t.defaultPrevented ||
                            e.disabled ||
                            n.open ||
                            l.current ||
                            (s.onPointerGraceIntentChange(null),
                            (l.current = window.setTimeout(() => {
                              n.onOpenChange(!0), h();
                            }, 100)));
                      })
                    ),
                    onPointerLeave: (0, i.M)(
                      e.onPointerLeave,
                      Fe((e) => {
                        var t;
                        h();
                        const r = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (r) {
                          var o;
                          const t = null === (o = n.content) || void 0 === o ? void 0 : o.dataset.side,
                            i = "right" === t,
                            a = i ? -5 : 5,
                            u = r[i ? "left" : "right"],
                            c = r[i ? "right" : "left"];
                          s.onPointerGraceIntentChange({
                            area: [
                              { x: e.clientX + a, y: e.clientY },
                              { x: u, y: r.top },
                              { x: c, y: r.top },
                              { x: c, y: r.bottom },
                              { x: u, y: r.bottom }
                            ],
                            side: t
                          }),
                            window.clearTimeout(d.current),
                            (d.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300));
                        } else {
                          if ((s.onTriggerLeave(e), e.defaultPrevented)) return;
                          s.onPointerGraceIntentChange(null);
                        }
                      })
                    ),
                    onKeyDown: (0, i.M)(e.onKeyDown, (t) => {
                      const r = "" !== s.searchRef.current;
                      var o;
                      e.disabled ||
                        (r && " " === t.key) ||
                        (ee[u.dir].includes(t.key) &&
                          (n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), t.preventDefault()));
                    })
                  }
                )
              )
            )
          );
        }),
        Se = (0, o.forwardRef)((e, t) => {
          const n = me(ye, e.__scopeMenu),
            { forceMount: u = n.forceMount, ...c } = e,
            s = de(ye, e.__scopeMenu),
            l = pe(ye, e.__scopeMenu),
            d = Re("MenuSubContent", e.__scopeMenu),
            f = (0, o.useRef)(null),
            p = (0, a.e)(t, f);
          return (0, o.createElement)(
            re.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              R.z,
              { present: u || s.open },
              (0, o.createElement)(
                re.Slot,
                { scope: e.__scopeMenu },
                (0, o.createElement)(
                  Ee,
                  (0, r.Z)({ id: d.contentId, "aria-labelledby": d.triggerId }, c, {
                    ref: p,
                    align: "start",
                    side: "rtl" === l.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      var t;
                      l.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()), e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => e.preventDefault(),
                    onFocusOutside: (0, i.M)(e.onFocusOutside, (e) => {
                      e.target !== d.trigger && s.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, (e) => {
                      l.onClose(), e.preventDefault();
                    }),
                    onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                      const t = e.currentTarget.contains(e.target),
                        n = te[l.dir].includes(e.key);
                      var r;
                      t && n && (s.onOpenChange(!1), null === (r = d.trigger) || void 0 === r || r.focus(), e.preventDefault());
                    })
                  })
                )
              )
            )
          );
        });
      function Be(e) {
        return e ? "open" : "closed";
      }
      function Fe(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      const Ne = (e) => {
          const { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: u = !0 } = e,
            c = ce(t),
            [s, l] = (0, o.useState)(null),
            d = (0, o.useRef)(!1),
            f = (0, y.W)(a),
            h = p(i);
          return (
            (0, o.useEffect)(() => {
              const e = () => {
                  (d.current = !0),
                    document.addEventListener("pointerdown", t, { capture: !0, once: !0 }),
                    document.addEventListener("pointermove", t, { capture: !0, once: !0 });
                },
                t = () => (d.current = !1);
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
              D.fC,
              c,
              (0, o.createElement)(
                le,
                { scope: t, open: n, onOpenChange: f, content: s, onContentChange: l },
                (0, o.createElement)(
                  fe,
                  { scope: t, onClose: (0, o.useCallback)(() => f(!1), [f]), isUsingKeyboardRef: d, dir: h, modal: u },
                  r
                )
              )
            )
          );
        },
        je = (e) => {
          const { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
            a = de(ve, t);
          return (0, o.createElement)(
            ge,
            { scope: t, forceMount: n },
            (0, o.createElement)(R.z, { present: n || a.open }, (0, o.createElement)(L.h, { asChild: !0, container: i }, r))
          );
        },
        Ue = Me,
        He = (e) => {
          const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e,
            a = de(De, t),
            u = ce(t),
            [c, s] = (0, o.useState)(null),
            [l, d] = (0, o.useState)(null),
            f = (0, y.W)(i);
          return (
            (0, o.useEffect)(() => (!1 === a.open && f(!1), () => f(!1)), [a.open, f]),
            (0, o.createElement)(
              D.fC,
              u,
              (0, o.createElement)(
                le,
                { scope: t, open: r, onOpenChange: f, content: l, onContentChange: d },
                (0, o.createElement)(Le, { scope: t, contentId: (0, A.M)(), triggerId: (0, A.M)(), trigger: c, onTriggerChange: s }, n)
              )
            )
          );
        },
        Ke = ke,
        We = Se,
        Ze = "DropdownMenu",
        [ze, Ge] = (0, u.b)(Ze, [ue]),
        Ve = ue(),
        [$e, Xe] = ze(Ze),
        Ye = (0, o.forwardRef)((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = Ve(n);
          return (0, o.createElement)(Ue, (0, r.Z)({}, a, i, { ref: t }));
        }),
        qe = (0, o.forwardRef)((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = Ve(n);
          return (0, o.createElement)(Ke, (0, r.Z)({}, a, i, { ref: t }));
        }),
        Je = (0, o.forwardRef)((e, t) => {
          const { __scopeDropdownMenu: n, ...i } = e,
            a = Ve(n);
          return (0, o.createElement)(
            We,
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
        Qe = (e) => {
          const { __scopeDropdownMenu: t, children: n, dir: i, open: a, defaultOpen: u, onOpenChange: s, modal: l = !0 } = e,
            d = Ve(t),
            f = (0, o.useRef)(null),
            [p = !1, h] = (0, c.T)({ prop: a, defaultProp: u, onChange: s });
          return (0, o.createElement)(
            $e,
            {
              scope: t,
              triggerId: (0, A.M)(),
              triggerRef: f,
              contentId: (0, A.M)(),
              open: p,
              onOpenChange: h,
              onOpenToggle: (0, o.useCallback)(() => h((e) => !e), [h]),
              modal: l
            },
            (0, o.createElement)(Ne, (0, r.Z)({}, d, { open: p, onOpenChange: h, dir: i, modal: l }), n)
          );
        },
        et = (e) => {
          const { __scopeDropdownMenu: t, ...n } = e,
            i = Ve(t);
          return (0, o.createElement)(je, (0, r.Z)({}, i, n));
        },
        tt = Ye,
        nt = (e) => {
          const { __scopeDropdownMenu: t, children: n, open: i, onOpenChange: a, defaultOpen: u } = e,
            s = Ve(t),
            [l = !1, d] = (0, c.T)({ prop: i, defaultProp: u, onChange: a });
          return (0, o.createElement)(He, (0, r.Z)({}, s, { open: l, onOpenChange: d }), n);
        },
        rt = qe,
        ot = Je;
    },
    351043: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, { M: () => c });
      var o = n(696832);
      if (8630 == n.j) var i = n(690573);
      const a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {});
      let u = 0;
      function c(e) {
        const [t, n] = o.useState(a());
        return (
          (0, i.b)(() => {
            e || n((e) => (null != e ? e : String(u++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    695e3: (e, t, n) => {
      "use strict";
      n.d(t, { ee: () => L, Eh: () => I, VY: () => R, fC: () => D, D7: () => m });
      var r = n(983124),
        o = n(696832),
        i = n(75697),
        a = n(337441),
        u = n(524562),
        c = n(245054);
      const s = (0, o.forwardRef)((e, t) => {
          const { children: n, width: i = 10, height: a = 5, ...u } = e;
          return (0, o.createElement)(
            c.WV.svg,
            (0, r.Z)({}, u, { ref: t, width: i, height: a, viewBox: "0 0 30 10", preserveAspectRatio: "none" }),
            e.asChild ? n : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
          );
        }),
        l = s;
      var d = n(383661),
        f = n(607660),
        p = n(859109),
        h = n(690573);
      const v = "Popper",
        [g, m] = (0, f.b)(v),
        [y, w] = g(v),
        b = (0, o.forwardRef)((e, t) => {
          const { __scopePopper: n, virtualRef: i, ...a } = e,
            u = w("PopperAnchor", n),
            s = (0, o.useRef)(null),
            l = (0, d.e)(t, s);
          return (
            (0, o.useEffect)(() => {
              u.onAnchorChange((null == i ? void 0 : i.current) || s.current);
            }),
            i ? null : (0, o.createElement)(c.WV.div, (0, r.Z)({}, a, { ref: l }))
          );
        }),
        E = "PopperContent",
        [C, x] = g(E),
        M = (0, o.forwardRef)((e, t) => {
          var n, s, l, f, v, g, m, y;
          const {
              __scopePopper: b,
              side: x = "bottom",
              sideOffset: M = 0,
              align: T = "center",
              alignOffset: P = 0,
              arrowPadding: D = 0,
              avoidCollisions: L = !0,
              collisionBoundary: R = [],
              collisionPadding: I = 0,
              sticky: k = "partial",
              hideWhenDetached: S = !1,
              updatePositionStrategy: B = "optimized",
              onPlaced: F,
              ...N
            } = e,
            j = w(E, b),
            [U, H] = (0, o.useState)(null),
            K = (0, d.e)(t, (e) => H(e)),
            [W, Z] = (0, o.useState)(null),
            z = (function (e) {
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
            })(W),
            G = null !== (n = null == z ? void 0 : z.width) && void 0 !== n ? n : 0,
            V = null !== (s = null == z ? void 0 : z.height) && void 0 !== s ? s : 0,
            $ = x + ("center" !== T ? "-" + T : ""),
            X = "number" == typeof I ? I : { top: 0, right: 0, bottom: 0, left: 0, ...I },
            Y = Array.isArray(R) ? R : [R],
            q = Y.length > 0,
            J = { padding: X, boundary: Y.filter(_), altBoundary: q },
            {
              refs: Q,
              floatingStyles: ee,
              placement: te,
              isPositioned: ne,
              middlewareData: re
            } = (0, i.YF)({
              strategy: "fixed",
              placement: $,
              whileElementsMounted: (...e) => (0, a.Me)(...e, { animationFrame: "always" === B }),
              elements: { reference: j.anchor },
              middleware: [
                (0, u.cv)({ mainAxis: M + V, alignmentAxis: P }),
                L && (0, u.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === k ? (0, u.dr)() : void 0, ...J }),
                L && (0, u.RR)({ ...J }),
                (0, u.dp)({
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
                W && (0, i.x7)({ element: W, padding: D }),
                O({ arrowWidth: G, arrowHeight: V }),
                S && (0, u.Cp)({ strategy: "referenceHidden", ...J })
              ]
            }),
            [oe, ie] = A(te),
            ae = (0, p.W)(F);
          (0, h.b)(() => {
            ne && (null == ae || ae());
          }, [ne, ae]);
          const ue = null === (l = re.arrow) || void 0 === l ? void 0 : l.x,
            ce = null === (f = re.arrow) || void 0 === f ? void 0 : f.y,
            se = 0 !== (null === (v = re.arrow) || void 0 === v ? void 0 : v.centerOffset),
            [le, de] = (0, o.useState)();
          return (
            (0, h.b)(() => {
              U && de(window.getComputedStyle(U).zIndex);
            }, [U]),
            (0, o.createElement)(
              "div",
              {
                ref: Q.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...ee,
                  transform: ne ? ee.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: le,
                  "--radix-popper-transform-origin": [
                    null === (g = re.transformOrigin) || void 0 === g ? void 0 : g.x,
                    null === (m = re.transformOrigin) || void 0 === m ? void 0 : m.y
                  ].join(" ")
                },
                dir: e.dir
              },
              (0, o.createElement)(
                C,
                { scope: b, placedSide: oe, onArrowChange: Z, arrowX: ue, arrowY: ce, shouldHideArrow: se },
                (0, o.createElement)(
                  c.WV.div,
                  (0, r.Z)({ "data-side": oe, "data-align": ie }, N, {
                    ref: K,
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
            u = T[a.placedSide];
          return (0, o.createElement)(
            "span",
            {
              ref: a.onArrowChange,
              style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [u]: 0,
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
            (0, o.createElement)(l, (0, r.Z)({}, i, { ref: t, style: { ...i.style, display: "block" } }))
          );
        });
      function _(e) {
        return null !== e;
      }
      const O = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          const { placement: u, rects: c, middlewareData: s } = t,
            l = 0 !== (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset),
            d = l ? 0 : e.arrowWidth,
            f = l ? 0 : e.arrowHeight,
            [p, h] = A(u),
            v = { start: "0%", center: "50%", end: "100%" }[h],
            g = (null !== (r = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2,
            m = (null !== (i = null === (a = s.arrow) || void 0 === a ? void 0 : a.y) && void 0 !== i ? i : 0) + f / 2;
          let y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = l ? v : `${g}px`), (w = -f + "px"))
              : "top" === p
              ? ((y = l ? v : `${g}px`), (w = `${c.floating.height + f}px`))
              : "right" === p
              ? ((y = -f + "px"), (w = l ? v : `${m}px`))
              : "left" === p && ((y = `${c.floating.width + f}px`), (w = l ? v : `${m}px`)),
            { data: { x: y, y: w } }
          );
        }
      });
      function A(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n];
      }
      const D = (e) => {
          const { __scopePopper: t, children: n } = e,
            [r, i] = (0, o.useState)(null);
          return (0, o.createElement)(y, { scope: t, anchor: r, onAnchorChange: i }, n);
        },
        L = b,
        R = M,
        I = P;
    },
    484763: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => u });
      var r = n(983124),
        o = n(696832),
        i = n(851285),
        a = n(245054);
      const u = (0, o.forwardRef)((e, t) => {
        var n;
        const {
          container: u = null === globalThis || void 0 === globalThis || null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...c
        } = e;
        return u ? i.createPortal((0, o.createElement)(a.WV.div, (0, r.Z)({}, c, { ref: t })), u) : null;
      });
    },
    334888: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => u });
      var r = n(696832),
        o = n(851285),
        i = n(383661),
        a = n(690573);
      const u = (e) => {
        const { present: t, children: n } = e,
          u = (function (e) {
            const [t, n] = (0, r.useState)(),
              i = (0, r.useRef)({}),
              u = (0, r.useRef)(e),
              s = (0, r.useRef)("none"),
              l = e ? "mounted" : "unmounted",
              [d, f] = (function (e, t) {
                return (0, r.useReducer)((e, n) => {
                  const r = t[e][n];
                  return null != r ? r : e;
                }, e);
              })(l, {
                mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                unmounted: { MOUNT: "mounted" }
              });
            return (
              (0, r.useEffect)(() => {
                const e = c(i.current);
                s.current = "mounted" === d ? e : "none";
              }, [d]),
              (0, a.b)(() => {
                const t = i.current,
                  n = u.current;
                if (n !== e) {
                  const r = s.current,
                    o = c(t);
                  e
                    ? f("MOUNT")
                    : "none" === o || "none" === (null == t ? void 0 : t.display)
                    ? f("UNMOUNT")
                    : f(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"),
                    (u.current = e);
                }
              }, [e, f]),
              (0, a.b)(() => {
                if (t) {
                  const e = (e) => {
                      const n = c(i.current).includes(e.animationName);
                      e.target === t && n && (0, o.flushSync)(() => f("ANIMATION_END"));
                    },
                    n = (e) => {
                      e.target === t && (s.current = c(i.current));
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
          s = "function" == typeof n ? n({ present: u.isPresent }) : r.Children.only(n),
          l = (0, i.e)(u.ref, s.ref);
        return "function" == typeof n || u.isPresent ? (0, r.cloneElement)(s, { ref: l }) : null;
      };
      function c(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      u.displayName = "Presence";
    },
    245054: (e, t, n) => {
      "use strict";
      n.d(t, { WV: () => u, jH: () => c });
      var r = n(983124),
        o = n(696832),
        i = n(851285),
        a = n(267863);
      const u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(
        (e, t) => {
          const n = (0, o.forwardRef)((e, n) => {
            const { asChild: i, ...u } = e,
              c = i ? a.g7 : t;
            return (
              (0, o.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, o.createElement)(c, (0, r.Z)({}, u, { ref: n }))
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        },
        {}
      );
      function c(e, t) {
        e && (0, i.flushSync)(() => e.dispatchEvent(t));
      }
    },
    267863: (e, t, n) => {
      "use strict";
      n.d(t, { A4: () => c, g7: () => a });
      var r = n(983124),
        o = n(696832),
        i = n(383661);
      const a = (0, o.forwardRef)((e, t) => {
        const { children: n, ...i } = e,
          a = o.Children.toArray(n),
          c = a.find(s);
        if (c) {
          const e = c.props.children,
            n = a.map((t) =>
              t === c ? (o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null) : t
            );
          return (0, o.createElement)(u, (0, r.Z)({}, i, { ref: t }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null);
        }
        return (0, o.createElement)(u, (0, r.Z)({}, i, { ref: t }), n);
      });
      a.displayName = "Slot";
      const u = (0, o.forwardRef)((e, t) => {
        const { children: n, ...r } = e;
        return (0, o.isValidElement)(n)
          ? (0, o.cloneElement)(n, { ...l(r, n.props), ref: t ? (0, i.F)(t, n.ref) : n.ref })
          : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
      });
      u.displayName = "SlotClone";
      const c = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function s(e) {
        return (0, o.isValidElement)(e) && e.type === c;
      }
      function l(e, t) {
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
    212021: (e, t, n) => {
      "use strict";
      n.d(t, { Eh: () => z, VY: () => Z, h_: () => W, zt: () => U, fC: () => H, xz: () => K });
      var r = n(983124),
        o = n(696832),
        i = n(612527),
        a = n(383661),
        u = n(607660),
        c = n(588345),
        s = n(351043),
        l = n(695e3),
        d = n(484763),
        f = n(334888),
        p = n(245054),
        h = n(267863),
        v = n(885390);
      const g = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            p.WV.span,
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
        m = g,
        [y, w] = (0, u.b)("Tooltip", [l.D7]),
        b = (0, l.D7)(),
        E = 700,
        C = "tooltip.open",
        [x, M] = y("TooltipProvider"),
        T = "Tooltip",
        [P, _] = y(T),
        O = "TooltipTrigger",
        A = (0, o.forwardRef)((e, t) => {
          const { __scopeTooltip: n, ...u } = e,
            c = _(O, n),
            s = M(O, n),
            d = b(n),
            f = (0, o.useRef)(null),
            h = (0, a.e)(t, f, c.onTriggerChange),
            v = (0, o.useRef)(!1),
            g = (0, o.useRef)(!1),
            m = (0, o.useCallback)(() => (v.current = !1), []);
          return (
            (0, o.useEffect)(() => () => document.removeEventListener("pointerup", m), [m]),
            (0, o.createElement)(
              l.ee,
              (0, r.Z)({ asChild: !0 }, d),
              (0, o.createElement)(
                p.WV.button,
                (0, r.Z)({ "aria-describedby": c.open ? c.contentId : void 0, "data-state": c.stateAttribute }, u, {
                  ref: h,
                  onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType && (g.current || s.isPointerInTransitRef.current || (c.onTriggerEnter(), (g.current = !0)));
                  }),
                  onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                    c.onTriggerLeave(), (g.current = !1);
                  }),
                  onPointerDown: (0, i.M)(e.onPointerDown, () => {
                    (v.current = !0), document.addEventListener("pointerup", m, { once: !0 });
                  }),
                  onFocus: (0, i.M)(e.onFocus, () => {
                    v.current || c.onOpen();
                  }),
                  onBlur: (0, i.M)(e.onBlur, c.onClose),
                  onClick: (0, i.M)(e.onClick, c.onClose)
                })
              )
            )
          );
        }),
        D = "TooltipPortal",
        [L, R] = y(D, { forceMount: void 0 }),
        I = "TooltipContent",
        k = (0, o.forwardRef)((e, t) => {
          const n = R(I, e.__scopeTooltip),
            { forceMount: i = n.forceMount, side: a = "top", ...u } = e,
            c = _(I, e.__scopeTooltip);
          return (0, o.createElement)(
            f.z,
            { present: i || c.open },
            c.disableHoverableContent
              ? (0, o.createElement)(N, (0, r.Z)({ side: a }, u, { ref: t }))
              : (0, o.createElement)(S, (0, r.Z)({ side: a }, u, { ref: t }))
          );
        }),
        S = (0, o.forwardRef)((e, t) => {
          const n = _(I, e.__scopeTooltip),
            i = M(I, e.__scopeTooltip),
            u = (0, o.useRef)(null),
            c = (0, a.e)(t, u),
            [s, l] = (0, o.useState)(null),
            { trigger: d, onClose: f } = n,
            p = u.current,
            { onPointerInTransitChange: h } = i,
            v = (0, o.useCallback)(() => {
              l(null), h(!1);
            }, [h]),
            g = (0, o.useCallback)(
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
                l(i), h(!0);
              },
              [h]
            );
          return (
            (0, o.useEffect)(() => () => v(), [v]),
            (0, o.useEffect)(() => {
              if (d && p) {
                const e = (e) => g(e, p),
                  t = (e) => g(e, d);
                return (
                  d.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    d.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [d, p, g, v]),
            (0, o.useEffect)(() => {
              if (s) {
                const e = (e) => {
                  const t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      const { x: n, y: r } = e;
                      let o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        const a = t[e].x,
                          u = t[e].y,
                          c = t[i].x,
                          s = t[i].y;
                        u > r != s > r && n < ((c - a) * (r - u)) / (s - u) + a && (o = !o);
                      }
                      return o;
                    })(n, s);
                  r ? v() : o && (v(), f());
                };
                return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
              }
            }, [d, p, s, f, v]),
            (0, o.createElement)(N, (0, r.Z)({}, e, { ref: c }))
          );
        }),
        [B, F] = y(T, { isInside: !1 }),
        N = (0, o.forwardRef)((e, t) => {
          const { __scopeTooltip: n, children: i, "aria-label": a, onEscapeKeyDown: u, onPointerDownOutside: s, ...d } = e,
            f = _(I, n),
            p = b(n),
            { onClose: v } = f;
          return (
            (0, o.useEffect)(() => (document.addEventListener(C, v), () => document.removeEventListener(C, v)), [v]),
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
              c.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: u,
                onPointerDownOutside: s,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: v
              },
              (0, o.createElement)(
                l.VY,
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
                (0, o.createElement)(B, { scope: n, isInside: !0 }, (0, o.createElement)(m, { id: f.contentId, role: "tooltip" }, a || i))
              )
            )
          );
        }),
        j = (0, o.forwardRef)((e, t) => {
          const { __scopeTooltip: n, ...i } = e,
            a = b(n);
          return F("TooltipArrow", n).isInside ? null : (0, o.createElement)(l.Eh, (0, r.Z)({}, a, i, { ref: t }));
        }),
        U = (e) => {
          const { __scopeTooltip: t, delayDuration: n = E, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e,
            [u, c] = (0, o.useState)(!0),
            s = (0, o.useRef)(!1),
            l = (0, o.useRef)(0);
          return (
            (0, o.useEffect)(() => {
              const e = l.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, o.createElement)(
              x,
              {
                scope: t,
                isOpenDelayed: u,
                delayDuration: n,
                onOpen: (0, o.useCallback)(() => {
                  window.clearTimeout(l.current), c(!1);
                }, []),
                onClose: (0, o.useCallback)(() => {
                  window.clearTimeout(l.current), (l.current = window.setTimeout(() => c(!0), r));
                }, [r]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: (0, o.useCallback)((e) => {
                  s.current = e;
                }, []),
                disableHoverableContent: i
              },
              a
            )
          );
        },
        H = (e) => {
          const {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: a,
              disableHoverableContent: u,
              delayDuration: c
            } = e,
            d = M(T, e.__scopeTooltip),
            f = b(t),
            [p, h] = (0, o.useState)(null),
            g = (0, s.M)(),
            m = (0, o.useRef)(0),
            y = null != u ? u : d.disableHoverableContent,
            w = null != c ? c : d.delayDuration,
            E = (0, o.useRef)(!1),
            [x = !1, _] = (0, v.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(C))) : d.onClose(), null == a || a(e);
              }
            }),
            O = (0, o.useMemo)(() => (x ? (E.current ? "delayed-open" : "instant-open") : "closed"), [x]),
            A = (0, o.useCallback)(() => {
              window.clearTimeout(m.current), (E.current = !1), _(!0);
            }, [_]),
            D = (0, o.useCallback)(() => {
              window.clearTimeout(m.current), _(!1);
            }, [_]),
            L = (0, o.useCallback)(() => {
              window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => {
                  (E.current = !0), _(!0);
                }, w));
            }, [w, _]);
          return (
            (0, o.useEffect)(() => () => window.clearTimeout(m.current), []),
            (0, o.createElement)(
              l.fC,
              f,
              (0, o.createElement)(
                P,
                {
                  scope: t,
                  contentId: g,
                  open: x,
                  stateAttribute: O,
                  trigger: p,
                  onTriggerChange: h,
                  onTriggerEnter: (0, o.useCallback)(() => {
                    d.isOpenDelayed ? L() : A();
                  }, [d.isOpenDelayed, L, A]),
                  onTriggerLeave: (0, o.useCallback)(() => {
                    y ? D() : window.clearTimeout(m.current);
                  }, [D, y]),
                  onOpen: A,
                  onClose: D,
                  disableHoverableContent: y
                },
                n
              )
            )
          );
        },
        K = A,
        W = (e) => {
          const { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
            a = _(D, t);
          return (0, o.createElement)(
            L,
            { scope: t, forceMount: n },
            (0, o.createElement)(f.z, { present: n || a.open }, (0, o.createElement)(d.h, { asChild: !0, container: i }, r))
          );
        },
        Z = k,
        z = j;
    },
    859109: (e, t, n) => {
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
    885390: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => i });
      var r = n(696832);
      if (8630 == n.j) var o = n(859109);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        const [i, a] = (function ({ defaultProp: e, onChange: t }) {
            const n = (0, r.useState)(e),
              [i] = n,
              a = (0, r.useRef)(i),
              u = (0, o.W)(t);
            return (
              (0, r.useEffect)(() => {
                a.current !== i && (u(i), (a.current = i));
              }, [i, a, u]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          c = u ? e : i,
          s = (0, o.W)(n);
        return [
          c,
          (0, r.useCallback)(
            (t) => {
              if (u) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else a(t);
            },
            [u, e, a, s]
          )
        ];
      }
    },
    690573: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => o });
      var r = n(696832);
      const o = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {};
    }
  }
]);
