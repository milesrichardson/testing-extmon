LavaPack.loadBundle(
  [
    [
      3180,
      { _process: 4214 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (e) {
                  (function () {
                    /**
                     * [js-sha3]{@link https://github.com/emn178/js-sha3}
                     *
                     * @version 0.8.0
                     * @author Chen, Yi-Cyuan [emn178@gmail.com]
                     * @copyright Chen, Yi-Cyuan 2015-2018
                     * @license MIT
                     */
                    !(function () {
                      var r = "input is invalid type",
                        n = "object" == typeof window,
                        i = n ? window : {};
                      i.JS_SHA3_NO_WINDOW && (n = !1);
                      var o = !n && "object" == typeof self;
                      !i.JS_SHA3_NO_NODE_JS && "object" == typeof e && e.versions && e.versions.node ? (i = global) : o && (i = self);
                      var s = !i.JS_SHA3_NO_COMMON_JS && "object" == typeof t && t.exports,
                        a = "function" == typeof define && define.amd,
                        c = !i.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                        u = "0123456789abcdef".split(""),
                        l = [4, 1024, 262144, 67108864],
                        d = [0, 8, 16, 24],
                        f = [
                          1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777,
                          2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648,
                          32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648,
                          32896, 2147483648, 2147483649, 0, 2147516424, 2147483648
                        ],
                        h = [224, 256, 384, 512],
                        p = [128, 256],
                        m = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                        g = { 128: 168, 256: 136 };
                      (!i.JS_SHA3_NO_NODE_JS && Array.isArray) ||
                        (Array.isArray = function (e) {
                          return "[object Array]" === Object.prototype.toString.call(e);
                        }),
                        !c ||
                          (!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
                          (ArrayBuffer.isView = function (e) {
                            return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
                          });
                      for (
                        var y = function (e, t, r) {
                            return function (n) {
                              return new j(e, t, e).update(n)[r]();
                            };
                          },
                          b = function (e, t, r) {
                            return function (n, i) {
                              return new j(e, t, i).update(n)[r]();
                            };
                          },
                          v = function (e, t, r) {
                            return function (t, n, i, o) {
                              return x["cshake" + e].update(t, n, i, o)[r]();
                            };
                          },
                          w = function (e, t, r) {
                            return function (t, n, i, o) {
                              return x["kmac" + e].update(t, n, i, o)[r]();
                            };
                          },
                          k = function (e, t, r, n) {
                            for (var i = 0; i < m.length; ++i) {
                              var o = m[i];
                              e[o] = t(r, n, o);
                            }
                            return e;
                          },
                          E = function (e, t) {
                            var r = y(e, t, "hex");
                            return (
                              (r.create = function () {
                                return new j(e, t, e);
                              }),
                              (r.update = function (e) {
                                return r.create().update(e);
                              }),
                              k(r, y, e, t)
                            );
                          },
                          T = [
                            { name: "keccak", padding: [1, 256, 65536, 16777216], bits: h, createMethod: E },
                            { name: "sha3", padding: [6, 1536, 393216, 100663296], bits: h, createMethod: E },
                            {
                              name: "shake",
                              padding: [31, 7936, 2031616, 520093696],
                              bits: p,
                              createMethod: function (e, t) {
                                var r = b(e, t, "hex");
                                return (
                                  (r.create = function (r) {
                                    return new j(e, t, r);
                                  }),
                                  (r.update = function (e, t) {
                                    return r.create(t).update(e);
                                  }),
                                  k(r, b, e, t)
                                );
                              }
                            },
                            {
                              name: "cshake",
                              padding: l,
                              bits: p,
                              createMethod: function (e, t) {
                                var r = g[e],
                                  n = v(e, 0, "hex");
                                return (
                                  (n.create = function (n, i, o) {
                                    return i || o ? new j(e, t, n).bytepad([i, o], r) : x["shake" + e].create(n);
                                  }),
                                  (n.update = function (e, t, r, i) {
                                    return n.create(t, r, i).update(e);
                                  }),
                                  k(n, v, e, t)
                                );
                              }
                            },
                            {
                              name: "kmac",
                              padding: l,
                              bits: p,
                              createMethod: function (e, t) {
                                var r = g[e],
                                  n = w(e, 0, "hex");
                                return (
                                  (n.create = function (n, i, o) {
                                    return new L(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r);
                                  }),
                                  (n.update = function (e, t, r, i) {
                                    return n.create(e, r, i).update(t);
                                  }),
                                  k(n, w, e, t)
                                );
                              }
                            }
                          ],
                          x = {},
                          _ = [],
                          P = 0;
                        P < T.length;
                        ++P
                      )
                        for (var S = T[P], I = S.bits, A = 0; A < I.length; ++A) {
                          var B = S.name + "_" + I[A];
                          if ((_.push(B), (x[B] = S.createMethod(I[A], S.padding)), "sha3" !== S.name)) {
                            var C = S.name + I[A];
                            _.push(C), (x[C] = x[B]);
                          }
                        }
                      function j(e, t, r) {
                        (this.blocks = []),
                          (this.s = []),
                          (this.padding = t),
                          (this.outputBits = r),
                          (this.reset = !0),
                          (this.finalized = !1),
                          (this.block = 0),
                          (this.start = 0),
                          (this.blockCount = (1600 - (e << 1)) >> 5),
                          (this.byteCount = this.blockCount << 2),
                          (this.outputBlocks = r >> 5),
                          (this.extraBytes = (31 & r) >> 3);
                        for (var n = 0; n < 50; ++n) this.s[n] = 0;
                      }
                      function L(e, t, r) {
                        j.call(this, e, t, r);
                      }
                      (j.prototype.update = function (e) {
                        if (this.finalized) throw new Error("finalize already called");
                        var t,
                          n = typeof e;
                        if ("string" !== n) {
                          if ("object" !== n) throw new Error(r);
                          if (null === e) throw new Error(r);
                          if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                          else if (!(Array.isArray(e) || (c && ArrayBuffer.isView(e)))) throw new Error(r);
                          t = !0;
                        }
                        for (var i, o, s = this.blocks, a = this.byteCount, u = e.length, l = this.blockCount, f = 0, h = this.s; f < u; ) {
                          if (this.reset) for (this.reset = !1, s[0] = this.block, i = 1; i < l + 1; ++i) s[i] = 0;
                          if (t) for (i = this.start; f < u && i < a; ++f) s[i >> 2] |= e[f] << d[3 & i++];
                          else
                            for (i = this.start; f < u && i < a; ++f)
                              (o = e.charCodeAt(f)) < 128
                                ? (s[i >> 2] |= o << d[3 & i++])
                                : o < 2048
                                ? ((s[i >> 2] |= (192 | (o >> 6)) << d[3 & i++]), (s[i >> 2] |= (128 | (63 & o)) << d[3 & i++]))
                                : o < 55296 || o >= 57344
                                ? ((s[i >> 2] |= (224 | (o >> 12)) << d[3 & i++]),
                                  (s[i >> 2] |= (128 | ((o >> 6) & 63)) << d[3 & i++]),
                                  (s[i >> 2] |= (128 | (63 & o)) << d[3 & i++]))
                                : ((o = 65536 + (((1023 & o) << 10) | (1023 & e.charCodeAt(++f)))),
                                  (s[i >> 2] |= (240 | (o >> 18)) << d[3 & i++]),
                                  (s[i >> 2] |= (128 | ((o >> 12) & 63)) << d[3 & i++]),
                                  (s[i >> 2] |= (128 | ((o >> 6) & 63)) << d[3 & i++]),
                                  (s[i >> 2] |= (128 | (63 & o)) << d[3 & i++]));
                          if (((this.lastByteIndex = i), i >= a)) {
                            for (this.start = i - a, this.block = s[l], i = 0; i < l; ++i) h[i] ^= s[i];
                            O(h), (this.reset = !0);
                          } else this.start = i;
                        }
                        return this;
                      }),
                        (j.prototype.encode = function (e, t) {
                          var r = 255 & e,
                            n = 1,
                            i = [r];
                          for (r = 255 & (e >>= 8); r > 0; ) i.unshift(r), (r = 255 & (e >>= 8)), ++n;
                          return t ? i.push(n) : i.unshift(n), this.update(i), i.length;
                        }),
                        (j.prototype.encodeString = function (e) {
                          var t,
                            n = typeof e;
                          if ("string" !== n) {
                            if ("object" !== n) throw new Error(r);
                            if (null === e) throw new Error(r);
                            if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!(Array.isArray(e) || (c && ArrayBuffer.isView(e)))) throw new Error(r);
                            t = !0;
                          }
                          var i = 0,
                            o = e.length;
                          if (t) i = o;
                          else
                            for (var s = 0; s < e.length; ++s) {
                              var a = e.charCodeAt(s);
                              a < 128
                                ? (i += 1)
                                : a < 2048
                                ? (i += 2)
                                : a < 55296 || a >= 57344
                                ? (i += 3)
                                : ((a = 65536 + (((1023 & a) << 10) | (1023 & e.charCodeAt(++s)))), (i += 4));
                            }
                          return (i += this.encode(8 * i)), this.update(e), i;
                        }),
                        (j.prototype.bytepad = function (e, t) {
                          for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
                          var i = t - (r % t),
                            o = [];
                          return (o.length = i), this.update(o), this;
                        }),
                        (j.prototype.finalize = function () {
                          if (!this.finalized) {
                            this.finalized = !0;
                            var e = this.blocks,
                              t = this.lastByteIndex,
                              r = this.blockCount,
                              n = this.s;
                            if (((e[t >> 2] |= this.padding[3 & t]), this.lastByteIndex === this.byteCount))
                              for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                            for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                            O(n);
                          }
                        }),
                        (j.prototype.toString = j.prototype.hex =
                          function () {
                            this.finalize();
                            for (
                              var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = "";
                              s < n;

                            ) {
                              for (o = 0; o < t && s < n; ++o, ++s)
                                (e = r[o]),
                                  (a +=
                                    u[(e >> 4) & 15] +
                                    u[15 & e] +
                                    u[(e >> 12) & 15] +
                                    u[(e >> 8) & 15] +
                                    u[(e >> 20) & 15] +
                                    u[(e >> 16) & 15] +
                                    u[(e >> 28) & 15] +
                                    u[(e >> 24) & 15]);
                              s % t == 0 && (O(r), (o = 0));
                            }
                            return (
                              i &&
                                ((e = r[o]),
                                (a += u[(e >> 4) & 15] + u[15 & e]),
                                i > 1 && (a += u[(e >> 12) & 15] + u[(e >> 8) & 15]),
                                i > 2 && (a += u[(e >> 20) & 15] + u[(e >> 16) & 15])),
                              a
                            );
                          }),
                        (j.prototype.arrayBuffer = function () {
                          this.finalize();
                          var e,
                            t = this.blockCount,
                            r = this.s,
                            n = this.outputBlocks,
                            i = this.extraBytes,
                            o = 0,
                            s = 0,
                            a = this.outputBits >> 3;
                          e = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a);
                          for (var c = new Uint32Array(e); s < n; ) {
                            for (o = 0; o < t && s < n; ++o, ++s) c[s] = r[o];
                            s % t == 0 && O(r);
                          }
                          return i && ((c[o] = r[o]), (e = e.slice(0, a))), e;
                        }),
                        (j.prototype.buffer = j.prototype.arrayBuffer),
                        (j.prototype.digest = j.prototype.array =
                          function () {
                            this.finalize();
                            for (
                              var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, c = [];
                              a < i;

                            ) {
                              for (s = 0; s < r && a < i; ++s, ++a)
                                (e = a << 2),
                                  (t = n[s]),
                                  (c[e] = 255 & t),
                                  (c[e + 1] = (t >> 8) & 255),
                                  (c[e + 2] = (t >> 16) & 255),
                                  (c[e + 3] = (t >> 24) & 255);
                              a % r == 0 && O(n);
                            }
                            return (
                              o &&
                                ((e = a << 2),
                                (t = n[s]),
                                (c[e] = 255 & t),
                                o > 1 && (c[e + 1] = (t >> 8) & 255),
                                o > 2 && (c[e + 2] = (t >> 16) & 255)),
                              c
                            );
                          }),
                        (L.prototype = new j()),
                        (L.prototype.finalize = function () {
                          return this.encode(this.outputBits, !0), j.prototype.finalize.call(this);
                        });
                      var O = function (e) {
                        var t,
                          r,
                          n,
                          i,
                          o,
                          s,
                          a,
                          c,
                          u,
                          l,
                          d,
                          h,
                          p,
                          m,
                          g,
                          y,
                          b,
                          v,
                          w,
                          k,
                          E,
                          T,
                          x,
                          _,
                          P,
                          S,
                          I,
                          A,
                          B,
                          C,
                          j,
                          L,
                          O,
                          R,
                          D,
                          H,
                          N,
                          M,
                          F,
                          U,
                          G,
                          K,
                          z,
                          V,
                          q,
                          W,
                          $,
                          X,
                          J,
                          Y,
                          Z,
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
                          le;
                        for (n = 0; n < 48; n += 2)
                          (i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
                            (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
                            (s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
                            (a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
                            (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
                            (u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
                            (l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
                            (d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
                            (t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ ((s << 1) | (a >>> 31))),
                            (r = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ ((a << 1) | (s >>> 31))),
                            (e[0] ^= t),
                            (e[1] ^= r),
                            (e[10] ^= t),
                            (e[11] ^= r),
                            (e[20] ^= t),
                            (e[21] ^= r),
                            (e[30] ^= t),
                            (e[31] ^= r),
                            (e[40] ^= t),
                            (e[41] ^= r),
                            (t = i ^ ((c << 1) | (u >>> 31))),
                            (r = o ^ ((u << 1) | (c >>> 31))),
                            (e[2] ^= t),
                            (e[3] ^= r),
                            (e[12] ^= t),
                            (e[13] ^= r),
                            (e[22] ^= t),
                            (e[23] ^= r),
                            (e[32] ^= t),
                            (e[33] ^= r),
                            (e[42] ^= t),
                            (e[43] ^= r),
                            (t = s ^ ((l << 1) | (d >>> 31))),
                            (r = a ^ ((d << 1) | (l >>> 31))),
                            (e[4] ^= t),
                            (e[5] ^= r),
                            (e[14] ^= t),
                            (e[15] ^= r),
                            (e[24] ^= t),
                            (e[25] ^= r),
                            (e[34] ^= t),
                            (e[35] ^= r),
                            (e[44] ^= t),
                            (e[45] ^= r),
                            (t = c ^ ((h << 1) | (p >>> 31))),
                            (r = u ^ ((p << 1) | (h >>> 31))),
                            (e[6] ^= t),
                            (e[7] ^= r),
                            (e[16] ^= t),
                            (e[17] ^= r),
                            (e[26] ^= t),
                            (e[27] ^= r),
                            (e[36] ^= t),
                            (e[37] ^= r),
                            (e[46] ^= t),
                            (e[47] ^= r),
                            (t = l ^ ((i << 1) | (o >>> 31))),
                            (r = d ^ ((o << 1) | (i >>> 31))),
                            (e[8] ^= t),
                            (e[9] ^= r),
                            (e[18] ^= t),
                            (e[19] ^= r),
                            (e[28] ^= t),
                            (e[29] ^= r),
                            (e[38] ^= t),
                            (e[39] ^= r),
                            (e[48] ^= t),
                            (e[49] ^= r),
                            (m = e[0]),
                            (g = e[1]),
                            (W = (e[11] << 4) | (e[10] >>> 28)),
                            ($ = (e[10] << 4) | (e[11] >>> 28)),
                            (A = (e[20] << 3) | (e[21] >>> 29)),
                            (B = (e[21] << 3) | (e[20] >>> 29)),
                            (ae = (e[31] << 9) | (e[30] >>> 23)),
                            (ce = (e[30] << 9) | (e[31] >>> 23)),
                            (K = (e[40] << 18) | (e[41] >>> 14)),
                            (z = (e[41] << 18) | (e[40] >>> 14)),
                            (R = (e[2] << 1) | (e[3] >>> 31)),
                            (D = (e[3] << 1) | (e[2] >>> 31)),
                            (y = (e[13] << 12) | (e[12] >>> 20)),
                            (b = (e[12] << 12) | (e[13] >>> 20)),
                            (X = (e[22] << 10) | (e[23] >>> 22)),
                            (J = (e[23] << 10) | (e[22] >>> 22)),
                            (C = (e[33] << 13) | (e[32] >>> 19)),
                            (j = (e[32] << 13) | (e[33] >>> 19)),
                            (ue = (e[42] << 2) | (e[43] >>> 30)),
                            (le = (e[43] << 2) | (e[42] >>> 30)),
                            (te = (e[5] << 30) | (e[4] >>> 2)),
                            (re = (e[4] << 30) | (e[5] >>> 2)),
                            (H = (e[14] << 6) | (e[15] >>> 26)),
                            (N = (e[15] << 6) | (e[14] >>> 26)),
                            (v = (e[25] << 11) | (e[24] >>> 21)),
                            (w = (e[24] << 11) | (e[25] >>> 21)),
                            (Y = (e[34] << 15) | (e[35] >>> 17)),
                            (Z = (e[35] << 15) | (e[34] >>> 17)),
                            (L = (e[45] << 29) | (e[44] >>> 3)),
                            (O = (e[44] << 29) | (e[45] >>> 3)),
                            (_ = (e[6] << 28) | (e[7] >>> 4)),
                            (P = (e[7] << 28) | (e[6] >>> 4)),
                            (ne = (e[17] << 23) | (e[16] >>> 9)),
                            (ie = (e[16] << 23) | (e[17] >>> 9)),
                            (M = (e[26] << 25) | (e[27] >>> 7)),
                            (F = (e[27] << 25) | (e[26] >>> 7)),
                            (k = (e[36] << 21) | (e[37] >>> 11)),
                            (E = (e[37] << 21) | (e[36] >>> 11)),
                            (Q = (e[47] << 24) | (e[46] >>> 8)),
                            (ee = (e[46] << 24) | (e[47] >>> 8)),
                            (V = (e[8] << 27) | (e[9] >>> 5)),
                            (q = (e[9] << 27) | (e[8] >>> 5)),
                            (S = (e[18] << 20) | (e[19] >>> 12)),
                            (I = (e[19] << 20) | (e[18] >>> 12)),
                            (oe = (e[29] << 7) | (e[28] >>> 25)),
                            (se = (e[28] << 7) | (e[29] >>> 25)),
                            (U = (e[38] << 8) | (e[39] >>> 24)),
                            (G = (e[39] << 8) | (e[38] >>> 24)),
                            (T = (e[48] << 14) | (e[49] >>> 18)),
                            (x = (e[49] << 14) | (e[48] >>> 18)),
                            (e[0] = m ^ (~y & v)),
                            (e[1] = g ^ (~b & w)),
                            (e[10] = _ ^ (~S & A)),
                            (e[11] = P ^ (~I & B)),
                            (e[20] = R ^ (~H & M)),
                            (e[21] = D ^ (~N & F)),
                            (e[30] = V ^ (~W & X)),
                            (e[31] = q ^ (~$ & J)),
                            (e[40] = te ^ (~ne & oe)),
                            (e[41] = re ^ (~ie & se)),
                            (e[2] = y ^ (~v & k)),
                            (e[3] = b ^ (~w & E)),
                            (e[12] = S ^ (~A & C)),
                            (e[13] = I ^ (~B & j)),
                            (e[22] = H ^ (~M & U)),
                            (e[23] = N ^ (~F & G)),
                            (e[32] = W ^ (~X & Y)),
                            (e[33] = $ ^ (~J & Z)),
                            (e[42] = ne ^ (~oe & ae)),
                            (e[43] = ie ^ (~se & ce)),
                            (e[4] = v ^ (~k & T)),
                            (e[5] = w ^ (~E & x)),
                            (e[14] = A ^ (~C & L)),
                            (e[15] = B ^ (~j & O)),
                            (e[24] = M ^ (~U & K)),
                            (e[25] = F ^ (~G & z)),
                            (e[34] = X ^ (~Y & Q)),
                            (e[35] = J ^ (~Z & ee)),
                            (e[44] = oe ^ (~ae & ue)),
                            (e[45] = se ^ (~ce & le)),
                            (e[6] = k ^ (~T & m)),
                            (e[7] = E ^ (~x & g)),
                            (e[16] = C ^ (~L & _)),
                            (e[17] = j ^ (~O & P)),
                            (e[26] = U ^ (~K & R)),
                            (e[27] = G ^ (~z & D)),
                            (e[36] = Y ^ (~Q & V)),
                            (e[37] = Z ^ (~ee & q)),
                            (e[46] = ae ^ (~ue & te)),
                            (e[47] = ce ^ (~le & re)),
                            (e[8] = T ^ (~m & y)),
                            (e[9] = x ^ (~g & b)),
                            (e[18] = L ^ (~_ & S)),
                            (e[19] = O ^ (~P & I)),
                            (e[28] = K ^ (~R & H)),
                            (e[29] = z ^ (~D & N)),
                            (e[38] = Q ^ (~V & W)),
                            (e[39] = ee ^ (~q & $)),
                            (e[48] = ue ^ (~te & ne)),
                            (e[49] = le ^ (~re & ie)),
                            (e[0] ^= f[n]),
                            (e[1] ^= f[n + 1]);
                      };
                      if (s) t.exports = x;
                      else {
                        for (P = 0; P < _.length; ++P) i[_[P]] = x[_[P]];
                        a &&
                          define(function () {
                            return x;
                          });
                      }
                    })();
                  }).call(this);
                }).call(this, e("_process"));
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser>js-sha3",
        file: "node_modules/eth-eip712-util-browser/node_modules/js-sha3/src/sha3.js"
      }
    ],
    [
      3181,
      { "bn.js": 2851, "buffer/": 3179, "js-sha3": 3180 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("bn.js"),
                  i = e("buffer/").Buffer,
                  o = e("js-sha3").keccak256;
                function s(e) {
                  return i.allocUnsafe(e).fill(0);
                }
                function a(e, t, r) {
                  const n = s(t);
                  return (
                    (e = c(e)),
                    r ? (e.length < t ? (e.copy(n), n) : e.slice(0, t)) : e.length < t ? (e.copy(n, t - e.length), n) : e.slice(-t)
                  );
                }
                function c(e) {
                  if (!i.isBuffer(e))
                    if (Array.isArray(e)) e = i.from(e);
                    else if ("string" == typeof e) e = u(e) ? i.from((t = l(e)).length % 2 ? "0" + t : t, "hex") : i.from(e);
                    else if ("number" == typeof e) e = intToBuffer(e);
                    else if (null === e || e === undefined) e = i.allocUnsafe(0);
                    else if (n.isBN(e)) e = e.toArrayLike(i);
                    else {
                      if (!e.toArray) throw new Error("invalid type");
                      e = i.from(e.toArray());
                    }
                  var t;
                  return e;
                }
                function u(e) {
                  return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
                }
                function l(e) {
                  return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
                }
                t.exports = {
                  zeros: s,
                  setLength: a,
                  setLengthRight: function (e, t) {
                    return a(e, t, !0);
                  },
                  isHexString: u,
                  stripHexPrefix: l,
                  toBuffer: c,
                  bufferToHex: function (e) {
                    return "0x" + (e = c(e)).toString("hex");
                  },
                  keccak: function (e) {
                    return (e = c(e)), i.from(o(e), "hex");
                  }
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk>eth-eip712-util-browser", file: "node_modules/eth-eip712-util-browser/util.js" }
    ],
    [
      3184,
      { "./base-filter": 3185 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("./base-filter");
                t.exports = class extends n {
                  constructor() {
                    super(), (this.allResults = []);
                  }
                  async update() {
                    throw new Error("BaseFilterWithHistory - no update method specified");
                  }
                  addResults(e) {
                    (this.allResults = this.allResults.concat(e)), super.addResults(e);
                  }
                  addInitialResults(e) {
                    (this.allResults = this.allResults.concat(e)), super.addInitialResults(e);
                  }
                  getAllResults() {
                    return this.allResults;
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/base-filter-history.js" }
    ],
    [
      3185,
      { "@metamask/safe-event-emitter": 1777 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("@metamask/safe-event-emitter").default;
                t.exports = class extends n {
                  constructor() {
                    super(), (this.updates = []);
                  }
                  async initialize() {}
                  async update() {
                    throw new Error("BaseFilter - no update method specified");
                  }
                  addResults(e) {
                    (this.updates = this.updates.concat(e)), e.forEach((e) => this.emit("update", e));
                  }
                  addInitialResults(e) {}
                  getChangesAndClear() {
                    const e = this.updates;
                    return (this.updates = []), e;
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/base-filter.js" }
    ],
    [
      3186,
      { "./base-filter": 3185, "./getBlocksForRange": 3187, "./hexUtils": 3188 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("./base-filter"),
                  i = e("./getBlocksForRange"),
                  { incrementHexInt: o } = e("./hexUtils");
                t.exports = class extends n {
                  constructor({ provider: e, params: t }) {
                    super(), (this.type = "block"), (this.provider = e);
                  }
                  async update({ oldBlock: e, newBlock: t }) {
                    const r = t,
                      n = o(e),
                      s = (await i({ provider: this.provider, fromBlock: n, toBlock: r })).map((e) => e.hash);
                    this.addResults(s);
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/block-filter.js" }
    ],
    [
      3187,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e) {
                  return e === undefined || null === e ? e : Number.parseInt(e, 16);
                }
                function i(e) {
                  if (e === undefined || null === e) return e;
                  return "0x" + e.toString(16);
                }
                function o(e, t) {
                  return new Promise((r, n) => {
                    e.sendAsync(t, (e, t) => {
                      e ? n(e) : t.error ? n(t.error) : t.result ? r(t.result) : n(new Error("Result was empty"));
                    });
                  });
                }
                t.exports = async function ({ provider: e, fromBlock: t, toBlock: r }) {
                  t || (t = r);
                  const s = n(t),
                    a = n(r),
                    c = Array(a - s + 1)
                      .fill()
                      .map((e, t) => s + t)
                      .map(i);
                  let u = await Promise.all(
                    c.map((t) =>
                      (async function (e, t, r) {
                        for (let n = 0; n < 3; n++)
                          try {
                            return await o(e, { id: 1, jsonrpc: "2.0", method: t, params: r });
                          } catch (e) {
                            console.error(`provider.sendAsync failed: ${e.stack || e.message || e}`);
                          }
                        return null;
                      })(e, "eth_getBlockByNumber", [t, !1])
                    )
                  );
                  return (u = u.filter((e) => null !== e)), u;
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/getBlocksForRange.js" }
    ],
    [
      3188,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e) {
                  return e.sort((e, t) => ("latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : i(e) - i(t)));
                }
                function i(e) {
                  return e === undefined || null === e ? e : Number.parseInt(e, 16);
                }
                function o(e) {
                  if (e === undefined || null === e) return e;
                  let t = e.toString(16);
                  return t.length % 2 && (t = "0" + t), "0x" + t;
                }
                function s() {
                  return Math.floor(16 * Math.random()).toString(16);
                }
                t.exports = {
                  minBlockRef: function (...e) {
                    return n(e)[0];
                  },
                  maxBlockRef: function (...e) {
                    const t = n(e);
                    return t[t.length - 1];
                  },
                  sortBlockRefs: n,
                  bnToHex: function (e) {
                    return "0x" + e.toString(16);
                  },
                  blockRefIsNumber: function (e) {
                    return e && !["earliest", "latest", "pending"].includes(e);
                  },
                  hexToInt: i,
                  incrementHexInt: function (e) {
                    if (e === undefined || null === e) return e;
                    return o(i(e) + 1);
                  },
                  intToHex: o,
                  unsafeRandomBytes: function (e) {
                    let t = "0x";
                    for (let r = 0; r < e; r++) (t += s()), (t += s());
                    return t;
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/hexUtils.js" }
    ],
    [
      3189,
      {
        "./block-filter.js": 3186,
        "./hexUtils": 3188,
        "./log-filter.js": 3190,
        "./tx-filter.js": 3192,
        "async-mutex": 2782,
        "json-rpc-engine": 3868
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("async-mutex").Mutex,
                  { createAsyncMiddleware: i, createScaffoldMiddleware: o } = e("json-rpc-engine"),
                  s = e("./log-filter.js"),
                  a = e("./block-filter.js"),
                  c = e("./tx-filter.js"),
                  { intToHex: u, hexToInt: l } = e("./hexUtils");
                function d(e) {
                  return f(async (...t) => {
                    const r = await e(...t);
                    return u(r.id);
                  });
                }
                function f(e) {
                  return i(async (t, r) => {
                    const n = await e.apply(null, t.params);
                    r.result = n;
                  });
                }
                function h(e, t) {
                  const r = [];
                  for (let t in e) r.push(e[t]);
                  return r;
                }
                t.exports = function ({ blockTracker: e, provider: t }) {
                  let r = 0,
                    i = {};
                  const p = new n(),
                    m = (function ({ mutex: e }) {
                      return (t) => async (r, n, i, o) => {
                        (await e.acquire())(), t(r, n, i, o);
                      };
                    })({ mutex: p }),
                    g = o({
                      eth_newFilter: m(d(b)),
                      eth_newBlockFilter: m(d(v)),
                      eth_newPendingTransactionFilter: m(d(w)),
                      eth_uninstallFilter: m(f(T)),
                      eth_getFilterChanges: m(f(k)),
                      eth_getFilterLogs: m(f(E))
                    }),
                    y = async ({ oldBlock: e, newBlock: t }) => {
                      if (0 === i.length) return;
                      const r = await p.acquire();
                      try {
                        await Promise.all(
                          h(i).map(async (r) => {
                            try {
                              await r.update({ oldBlock: e, newBlock: t });
                            } catch (e) {
                              console.error(e);
                            }
                          })
                        );
                      } catch (e) {
                        console.error(e);
                      }
                      r();
                    };
                  return (
                    (g.newLogFilter = b),
                    (g.newBlockFilter = v),
                    (g.newPendingTransactionFilter = w),
                    (g.uninstallFilter = T),
                    (g.getFilterChanges = k),
                    (g.getFilterLogs = E),
                    (g.destroy = () => {
                      !(async function () {
                        const e = h(i).length;
                        (i = {}), _({ prevFilterCount: e, newFilterCount: 0 });
                      })();
                    }),
                    g
                  );
                  async function b(e) {
                    const r = new s({ provider: t, params: e });
                    await x(r);
                    return r;
                  }
                  async function v() {
                    const e = new a({ provider: t });
                    await x(e);
                    return e;
                  }
                  async function w() {
                    const e = new c({ provider: t });
                    await x(e);
                    return e;
                  }
                  async function k(e) {
                    const t = l(e),
                      r = i[t];
                    if (!r) throw new Error(`No filter for index "${t}"`);
                    return r.getChangesAndClear();
                  }
                  async function E(e) {
                    const t = l(e),
                      r = i[t];
                    if (!r) throw new Error(`No filter for index "${t}"`);
                    let n = [];
                    return "log" === r.type && (n = r.getAllResults()), n;
                  }
                  async function T(e) {
                    const t = l(e),
                      r = i[t],
                      n = Boolean(r);
                    return (
                      n &&
                        (await (async function (e) {
                          const t = h(i).length;
                          delete i[e];
                          const r = h(i).length;
                          _({ prevFilterCount: t, newFilterCount: r });
                        })(t)),
                      n
                    );
                  }
                  async function x(t) {
                    const n = h(i).length,
                      o = await e.getLatestBlock();
                    await t.initialize({ currentBlock: o }), r++, (i[r] = t), (t.id = r), (t.idHex = u(r));
                    return _({ prevFilterCount: n, newFilterCount: h(i).length }), r;
                  }
                  function _({ prevFilterCount: t, newFilterCount: r }) {
                    0 === t && r > 0 ? e.on("sync", y) : t > 0 && 0 === r && e.removeListener("sync", y);
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/index.js" }
    ],
    [
      319,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = (e) => (t) => ({
                  encode: (r) =>
                    ((e, t, r) => {
                      const n = "=" === t[t.length - 1],
                        i = (1 << r) - 1;
                      let o = "",
                        s = 0,
                        a = 0;
                      for (let n = 0; n < e.length; ++n) for (a = (a << 8) | e[n], s += 8; s > r; ) (s -= r), (o += t[i & (a >> s)]);
                      if ((s && (o += t[i & (a << (r - s))]), n)) for (; (o.length * r) & 7; ) o += "=";
                      return o;
                    })(r, t, e),
                  decode: (r) =>
                    ((e, t, r) => {
                      const n = {};
                      for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                      let i = e.length;
                      for (; "=" === e[i - 1]; ) --i;
                      const o = new Uint8Array(((i * r) / 8) | 0);
                      let s = 0,
                        a = 0,
                        c = 0;
                      for (let t = 0; t < i; ++t) {
                        const i = n[e[t]];
                        if (i === undefined) throw new SyntaxError("Invalid character " + e[t]);
                        (a = (a << r) | i), (s += r), s >= 8 && ((s -= 8), (o[c++] = 255 & (a >> s)));
                      }
                      if (s >= r || 255 & (a << (8 - s))) throw new SyntaxError("Unexpected end of data");
                      return o;
                    })(r, t, e)
                });
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multihashes>multibase",
        file: "node_modules/@ensdomains/content-hash/node_modules/multihashes/node_modules/multibase/src/rfc4648.js"
      }
    ],
    [
      3190,
      { "./base-filter-history": 3184, "./hexUtils": 3188, "eth-query": 3222, pify: 4211 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("eth-query"),
                  i = e("pify"),
                  o = e("./base-filter-history"),
                  { bnToHex: s, hexToInt: a, incrementHexInt: c, minBlockRef: u, blockRefIsNumber: l } = e("./hexUtils");
                t.exports = class extends o {
                  constructor({ provider: e, params: t }) {
                    super(),
                      (this.type = "log"),
                      (this.ethQuery = new n(e)),
                      (this.params = Object.assign({ fromBlock: "latest", toBlock: "latest", address: undefined, topics: [] }, t)),
                      this.params.address &&
                        (Array.isArray(this.params.address) || (this.params.address = [this.params.address]),
                        (this.params.address = this.params.address.map((e) => e.toLowerCase())));
                  }
                  async initialize({ currentBlock: e }) {
                    let t = this.params.fromBlock;
                    ["latest", "pending"].includes(t) && (t = e), "earliest" === t && (t = "0x0"), (this.params.fromBlock = t);
                    const r = u(this.params.toBlock, e),
                      n = Object.assign({}, this.params, { toBlock: r }),
                      i = await this._fetchLogs(n);
                    this.addInitialResults(i);
                  }
                  async update({ oldBlock: e, newBlock: t }) {
                    const r = t;
                    let n;
                    n = e ? c(e) : t;
                    const i = Object.assign({}, this.params, { fromBlock: n, toBlock: r }),
                      o = (await this._fetchLogs(i)).filter((e) => this.matchLog(e));
                    this.addResults(o);
                  }
                  async _fetchLogs(e) {
                    return await i((t) => this.ethQuery.getLogs(e, t))();
                  }
                  matchLog(e) {
                    if (a(this.params.fromBlock) >= a(e.blockNumber)) return !1;
                    if (l(this.params.toBlock) && a(this.params.toBlock) <= a(e.blockNumber)) return !1;
                    const t = e.address && e.address.toLowerCase();
                    if (this.params.address && t && !this.params.address.includes(t)) return !1;
                    return this.params.topics.every((t, r) => {
                      let n = e.topics[r];
                      if (!n) return !1;
                      n = n.toLowerCase();
                      let i = Array.isArray(t) ? t : [t];
                      if (i.includes(null)) return !0;
                      i = i.map((e) => e.toLowerCase());
                      return i.includes(n);
                    });
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/log-filter.js" }
    ],
    [
      3191,
      {
        "./getBlocksForRange.js": 3187,
        "./hexUtils.js": 3188,
        "./index.js": 3189,
        "@metamask/safe-event-emitter": 1777,
        "json-rpc-engine": 3868
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("@metamask/safe-event-emitter").default,
                  { createAsyncMiddleware: i, createScaffoldMiddleware: o } = e("json-rpc-engine"),
                  s = e("./index.js"),
                  { unsafeRandomBytes: a, incrementHexInt: c } = e("./hexUtils.js"),
                  u = e("./getBlocksForRange.js");
                function l(e) {
                  return null === e || e === undefined
                    ? null
                    : {
                        hash: e.hash,
                        parentHash: e.parentHash,
                        sha3Uncles: e.sha3Uncles,
                        miner: e.miner,
                        stateRoot: e.stateRoot,
                        transactionsRoot: e.transactionsRoot,
                        receiptsRoot: e.receiptsRoot,
                        logsBloom: e.logsBloom,
                        difficulty: e.difficulty,
                        number: e.number,
                        gasLimit: e.gasLimit,
                        gasUsed: e.gasUsed,
                        nonce: e.nonce,
                        mixHash: e.mixHash,
                        timestamp: e.timestamp,
                        extraData: e.extraData
                      };
                }
                t.exports = function ({ blockTracker: e, provider: t }) {
                  const r = {},
                    d = s({ blockTracker: e, provider: t });
                  let f = !1;
                  const h = new n(),
                    p = o({
                      eth_subscribe: i(async function (n, i) {
                        if (f) throw new Error("SubscriptionManager - attempting to use after destroying");
                        const o = n.params[0],
                          s = a(16);
                        let h;
                        switch (o) {
                          case "newHeads":
                            h = p({ subId: s });
                            break;
                          case "logs":
                            const e = n.params[1];
                            h = g({ subId: s, filter: await d.newLogFilter(e) });
                            break;
                          default:
                            throw new Error(`SubscriptionManager - unsupported subscription type "${o}"`);
                        }
                        return (r[s] = h), void (i.result = s);
                        function p({ subId: r }) {
                          const n = {
                            type: o,
                            destroy: async () => {
                              e.removeListener("sync", n.update);
                            },
                            update: async ({ oldBlock: e, newBlock: n }) => {
                              const i = n,
                                o = c(e);
                              (await u({ provider: t, fromBlock: o, toBlock: i }))
                                .map(l)
                                .filter((e) => null !== e)
                                .forEach((e) => {
                                  m(r, e);
                                });
                            }
                          };
                          return e.on("sync", n.update), n;
                        }
                        function g({ subId: e, filter: t }) {
                          t.on("update", (t) => m(e, t));
                          return { type: o, destroy: async () => await d.uninstallFilter(t.idHex) };
                        }
                      }),
                      eth_unsubscribe: i(async function (e, t) {
                        if (f) throw new Error("SubscriptionManager - attempting to use after destroying");
                        const n = e.params[0],
                          i = r[n];
                        if (!i) return void (t.result = !1);
                        delete r[n], await i.destroy(), (t.result = !0);
                      })
                    });
                  return (
                    (p.destroy = function () {
                      h.removeAllListeners();
                      for (const e in r) r[e].destroy(), delete r[e];
                      f = !0;
                    }),
                    { events: h, middleware: p }
                  );
                  function m(e, t) {
                    h.emit("notification", { jsonrpc: "2.0", method: "eth_subscription", params: { subscription: e, result: t } });
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/subscriptionManager.js" }
    ],
    [
      3192,
      { "./base-filter": 3185, "./getBlocksForRange": 3187, "./hexUtils": 3188 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("./base-filter"),
                  i = e("./getBlocksForRange"),
                  { incrementHexInt: o } = e("./hexUtils");
                t.exports = class extends n {
                  constructor({ provider: e }) {
                    super(), (this.type = "tx"), (this.provider = e);
                  }
                  async update({ oldBlock: e }) {
                    const t = e,
                      r = o(e),
                      n = await i({ provider: this.provider, fromBlock: r, toBlock: t }),
                      s = [];
                    for (const e of n) s.push(...e.transactions);
                    this.addResults(s);
                  }
                };
              };
            };
      },
      { package: "eth-json-rpc-filters", file: "node_modules/eth-json-rpc-filters/tx-filter.js" }
    ],
    [
      3193,
      {
        "@ethereumjs/tx": 3200,
        "@ethereumjs/util": 410,
        "bn.js": 2851,
        buffer: 2913,
        crypto: 3123,
        events: 3331,
        "gridplus-sdk": 3616,
        rlp: 3217
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (r) {
                  (function () {
                    const n = e("crypto"),
                      i = e("events").EventEmitter,
                      o = e("bn.js"),
                      s = e("gridplus-sdk"),
                      a = e("@ethereumjs/tx"),
                      { addHexPrefix: c } = e("@ethereumjs/util"),
                      u = e("rlp"),
                      l = "Lattice Hardware",
                      d = 12e4;
                    class f extends i {
                      constructor(e = {}) {
                        super(), (this.type = l), this._resetDefaults(), this.deserialize(e);
                      }
                      async deserialize(e = {}) {
                        e.hdPath && (this.hdPath = e.hdPath),
                          e.creds && (this.creds = e.creds),
                          e.accounts && (this.accounts = e.accounts),
                          e.accountIndices && (this.accountIndices = e.accountIndices),
                          e.accountOpts && (this.accountOpts = e.accountOpts),
                          e.walletUID && (this.walletUID = e.walletUID),
                          e.name && (this.appName = e.name),
                          e.appName && (this.appName = e.appName),
                          e.network && (this.network = e.network),
                          e.page && (this.page = e.page);
                      }
                      setHdPath(e) {
                        this.hdPath = e;
                      }
                      async serialize() {
                        return {
                          creds: this.creds,
                          accounts: this.accounts,
                          accountIndices: this.accountIndices,
                          accountOpts: this.accountOpts,
                          walletUID: this.walletUID,
                          appName: this.appName,
                          name: this.name,
                          network: this.network,
                          page: this.page,
                          hdPath: this.hdPath
                        };
                      }
                      isUnlocked() {
                        return !!this._getCurrentWalletUID() && !!this.sdkSession;
                      }
                      async unlock(e = !1) {
                        if (this.isUnlocked()) return "Unlocked";
                        const t = await this._getCreds();
                        t &&
                          ((this.creds.deviceID = t.deviceID),
                          (this.creds.password = t.password),
                          (this.creds.endpoint = t.endpoint || null));
                        return ((await this._initSession()) && e) || (await this._connect()), "Unlocked";
                      }
                      async addAccounts(e = 1) {
                        if (e <= 0) throw new Error("Number of accounts to add must be a positive number.");
                        await this.unlock();
                        const t = await this._fetchAddresses(e, this.unlockedAccount),
                          r = this._getCurrentWalletUID();
                        if (!r) throw (await this._connect(), new Error("No active wallet found in Lattice. Please retry."));
                        return (
                          t.forEach((e, t) => {
                            let n = !1;
                            for (let t = 0; t < this.accounts.length; t++)
                              this.accounts[t] === e &&
                                this.accountOpts[t].walletUID === r &&
                                this.accountOpts[t].hdPath === this.hdPath &&
                                (n = !0);
                            n ||
                              (this.accounts.push(e),
                              this.accountIndices.push(this.unlockedAccount + t),
                              this.accountOpts.push({ walletUID: r, hdPath: this.hdPath }));
                          }),
                          this.accounts
                        );
                      }
                      async getAccounts() {
                        return this.accounts ? [...this.accounts] : [];
                      }
                      async signTransaction(e, t) {
                        let r, n;
                        const i = t.toJSON();
                        i.type = t._type || null;
                        const l = await this._findSignerIdx(e),
                          d = (function (e) {
                            if (e && e.common && "function" == typeof e.common.chainIdBN) return e.common.chainIdBN();
                            if (e && e.chainId) return new o(e.chainId);
                            return new o(1);
                          })(t).toNumber(),
                          f = this.sdkSession.getFwVersion(),
                          h = this.accountIndices[l],
                          { hdPath: p } = this.accountOpts[l],
                          m = this._getHDPathIndices(p, h);
                        if (0 === f.major && f.minor <= 11) throw new Error("Please update Lattice firmware.");
                        if (f.major > 0 || f.minor >= 15) {
                          const e = {
                              payload: t._type ? t.getMessageToSign(!1) : u.encode(t.getMessageToSign(!1)),
                              curveType: s.Constants.SIGNING.CURVES.SECP256K1,
                              hashType: s.Constants.SIGNING.HASHES.KECCAK256,
                              encodingType: s.Constants.SIGNING.ENCODINGS.EVM,
                              signerPath: m
                            },
                            n = f.major > 0 || f.minor >= 16,
                            { def: i } = await s.Utils.fetchCalldataDecoder(t.data, t.to, d, n);
                          i && (e.decoder = i), (r = await this.sdkSession.sign({ data: e }));
                        } else {
                          const e = (function (e) {
                            let t;
                            try {
                              switch (
                                ((t = {
                                  nonce: `0x${e.nonce.toString("hex")}` || 0,
                                  gasLimit: `0x${e.gasLimit.toString("hex")}`,
                                  to: e.to ? e.to.toString("hex") : null,
                                  value: `0x${e.value.toString("hex")}`,
                                  data: 0 === e.data.length ? null : `0x${e.data.toString("hex")}`
                                }),
                                e._type)
                              ) {
                                case 2:
                                  if (
                                    null === e.maxPriorityFeePerGas ||
                                    null === e.maxFeePerGas ||
                                    e.maxPriorityFeePerGas === undefined ||
                                    e.maxFeePerGas === undefined
                                  )
                                    throw new Error("`maxPriorityFeePerGas` and `maxFeePerGas` must be included for EIP1559 transactions.");
                                  (t.maxPriorityFeePerGas = `0x${e.maxPriorityFeePerGas.toString("hex")}`),
                                    (t.maxFeePerGas = `0x${e.maxFeePerGas.toString("hex")}`),
                                    (t.accessList = e.accessList || []),
                                    (t.type = 2);
                                  break;
                                case 1:
                                  (t.accessList = e.accessList || []), (t.gasPrice = `0x${e.gasPrice.toString("hex")}`), (t.type = 1);
                                  break;
                                default:
                                  (t.gasPrice = `0x${e.gasPrice.toString("hex")}`), (t.type = null);
                              }
                            } catch (e) {
                              throw new Error("Failed to build transaction.");
                            }
                            return t;
                          })(t);
                          (e.chainId = d), (e.signerPath = m), (r = await this.sdkSession.sign({ currency: "ETH", data: e }));
                        }
                        if (!r.sig || !r.sig.r || !r.sig.s) throw new Error("No signature returned.");
                        (n = r.sig.v === undefined ? s.Utils.getV(t, r) : 0 === r.sig.v.length ? "0" : r.sig.v.toString("hex")),
                          (i.r = c(r.sig.r.toString("hex"))),
                          (i.s = c(r.sig.s.toString("hex"))),
                          (i.v = c(n));
                        if (null === (await this._accountIdxInCurrentWallet(e)))
                          throw new Error(
                            "Wrong account. Please change your Lattice wallet or " + "switch to an account on your current active wallet."
                          );
                        return a.TransactionFactory.fromTxData(i, { common: t.common, freeze: Object.isFrozen(t) });
                      }
                      async signPersonalMessage(e, t) {
                        return this.signMessage(e, { payload: t, protocol: "signPersonal" });
                      }
                      async signTypedData(e, t, r) {
                        if (r.version && "V4" !== r.version && "V3" !== r.version)
                          throw new Error(`Only signTypedData V3 and V4 messages (EIP712) are supported. Got version ${r.version}`);
                        return this.signMessage(e, { payload: t, protocol: "eip712" });
                      }
                      async signMessage(e, t) {
                        const r = await this._findSignerIdx(e);
                        let { payload: n, protocol: i } = t;
                        (n && i) || ((n = t), (i = "signPersonal"));
                        const o = this.accountIndices[r],
                          s = this.accountOpts[r].hdPath,
                          a = { currency: "ETH_MSG", data: { protocol: i, payload: n, signerPath: this._getHDPathIndices(s, o) } },
                          c = await this.sdkSession.sign(a);
                        if (!c.sig) throw new Error("No signature returned");
                        let u;
                        try {
                          (u = c.sig.v.toString("hex")), u.length < 2 && (u = `0${u}`);
                        } catch (e) {
                          throw new Error("Invalid signature format returned.");
                        }
                        if (null === (await this._accountIdxInCurrentWallet(e)))
                          throw new Error(
                            "Wrong account. Please change your Lattice wallet or " + "switch to an account on your current active wallet."
                          );
                        return `0x${c.sig.r}${c.sig.s}${u}`;
                      }
                      async exportAccount(e) {
                        throw new Error("exportAccount not supported by this device");
                      }
                      removeAccount(e) {
                        this.accounts.forEach((t, r) => {
                          if (t.toLowerCase() === e.toLowerCase())
                            return this.accounts.splice(r, 1), this.accountIndices.splice(r, 1), void this.accountOpts.splice(r, 1);
                        });
                      }
                      async getFirstPage() {
                        return (this.page = 0), this._getPage(0);
                      }
                      async getNextPage() {
                        return this._getPage(1);
                      }
                      async getPreviousPage() {
                        return this._getPage(-1);
                      }
                      setAccountToUnlock(e) {
                        this.unlockedAccount = parseInt(e, 10);
                      }
                      forgetDevice() {
                        this._resetDefaults();
                      }
                      async _findSignerIdx(e) {
                        const t = this.isUnlocked();
                        await this.unlock(!0);
                        let r = await this._accountIdxInCurrentWallet(e);
                        if (null !== r) return r;
                        if (t && (await this._connect(), (r = await this._accountIdxInCurrentWallet(e)), null !== r)) return r;
                        throw new Error("Account not found in active Lattice wallet. Please switch.");
                      }
                      async _accountIdxInCurrentWallet(e) {
                        const t = await this._findAccountByAddress(e),
                          { walletUID: r } = this.accountOpts[t],
                          n = this.sdkSession.getActiveWallet();
                        if (!n) throw (this._connect(), new Error("No active wallet in Lattice."));
                        const i = n.uid.toString("hex");
                        return r.toString("hex") === i ? t : null;
                      }
                      async _findAccountByAddress(e) {
                        const t = await this.getAccounts();
                        let r = -1;
                        if (
                          (t.forEach((t, n) => {
                            e.toLowerCase() === t.toLowerCase() && (r = n);
                          }),
                          r < 0)
                        )
                          throw new Error("Signer not present");
                        return r;
                      }
                      _getHDPathIndices(e, t = 0) {
                        const r = e.split("/").slice(1),
                          n = [];
                        let i = !1;
                        if (
                          (r.forEach((e) => {
                            const r = "'" === e[e.length - 1];
                            let o = r ? 2147483648 : 0;
                            e.indexOf("x") > -1 ? ((o += t), (i = !0)) : (o += Number(r ? e.slice(0, e.length - 1) : e)), n.push(o);
                          }),
                          !1 === i && n.push(t),
                          n.length > 5)
                        )
                          throw new Error("Only HD paths with up to 5 indices are allowed.");
                        return n;
                      }
                      _resetDefaults() {
                        (this.accounts = []),
                          (this.accountIndices = []),
                          (this.accountOpts = []),
                          (this.isLocked = !0),
                          (this.creds = { deviceID: null, password: null, endpoint: null }),
                          (this.walletUID = null),
                          (this.sdkSession = null),
                          (this.page = 0),
                          (this.unlockedAccount = 0),
                          (this.network = null),
                          (this.hdPath = "m/44'/60'/0'/0/x");
                      }
                      async _openConnectorTab(e) {
                        try {
                          const t = window.open(e);
                          if (t) return { chromium: t };
                          if (browser && browser.tabs && browser.tabs.create) {
                            return { firefox: await browser.tabs.create({ url: e }) };
                          }
                          throw new Error("Unknown browser context. Cannot open Lattice connector.");
                        } catch (e) {
                          throw new Error("Failed to open Lattice connector.");
                        }
                      }
                      async _findTabById(e) {
                        return (await browser.tabs.query({})).find((t) => t.id === e);
                      }
                      _getCreds() {
                        return new Promise((e, t) => {
                          if (this._hasCreds()) return e();
                          const n = this.appName ? this.appName : "Unknown",
                            i = "https://lattice.gridplus.io",
                            o = `${i}?keyring=${n}&forceLogin=true`;
                          let s;
                          function a(r) {
                            if (r.origin === i)
                              try {
                                clearInterval(s);
                                const n = JSON.parse(r.data);
                                return n.deviceID && n.password ? e(n) : t(new Error("Invalid credentials returned from Lattice."));
                              } catch (e) {
                                return t(e);
                              }
                          }
                          this._openConnectorTab(o).then((n) => {
                            if (n.chromium)
                              window.addEventListener("message", a, !1),
                                (s = setInterval(() => {
                                  if (n.chromium.closed) return clearInterval(s), t(new Error("Lattice connector closed."));
                                }, 500));
                            else if (n.firefox) {
                              const i = "&loginCache=";
                              s = setInterval(() => {
                                this._findTabById(n.firefox.id).then((n) => {
                                  if (!n || !n.url) return t(new Error("Lattice connector closed."));
                                  const o = n.url.indexOf(i);
                                  if (o < 0) return;
                                  const a = o + i.length;
                                  clearInterval(s);
                                  try {
                                    const i = r.from(n.url.slice(a), "base64").toString();
                                    browser.tabs.remove(n.id).then(() => {
                                      const r = JSON.parse(i);
                                      return r.deviceID && r.password ? e(r) : t(new Error("Invalid credentials returned from Lattice."));
                                    });
                                  } catch (e) {
                                    return t("Failed to get login data from Lattice. Please try again.");
                                  }
                                });
                              }, 500);
                            }
                          });
                        });
                      }
                      async _connect() {
                        try {
                          return (this.sdkSession.timeout = 2e4), this.sdkSession.connect(this.creds.deviceID);
                        } finally {
                          this.sdkSession.timeout = d;
                        }
                      }
                      async _initSession() {
                        if (this.isUnlocked()) return;
                        let e = "https://signing.gridpl.us";
                        this.creds.endpoint && (e = this.creds.endpoint);
                        let t = {
                          name: this.appName,
                          baseUrl: e,
                          timeout: d,
                          privKey: this._genSessionKey(),
                          network: this.network,
                          skipRetryOnWrongWallet: !0
                        };
                        return (this.sdkSession = new s.Client(t)), !!t.stateData;
                      }
                      async _fetchAddresses(e = 1, t = 0, r = []) {
                        if (!this.isUnlocked()) throw new Error("No connection to Lattice. Cannot fetch addresses.");
                        return this.__fetchAddresses(e, t);
                      }
                      async __fetchAddresses(e = 1, t = 0, r = []) {
                        if (0 === e) return r;
                        const n = this._hdPathHasInternalVarIdx(),
                          i = { currency: "ETH", startPath: this._getHDPathIndices(this.hdPath, t), n: n ? 1 : e },
                          o = await this.sdkSession.getAddresses(i);
                        if (o.length < 1) throw new Error("No addresses returned");
                        return n ? await this.__fetchAddresses(e - 1, t + 1, r.concat(o)) : o;
                      }
                      async _getPage(e = 0) {
                        try {
                          (this.page += e), this.page < 0 && (this.page = 0);
                          const t = 5 * this.page;
                          await this.unlock();
                          const r = await this._fetchAddresses(5, t);
                          return r.map((e, r) => ({ address: e, balance: null, index: t + r }));
                        } catch (e) {
                          try {
                            if (!(await this._connect())) throw new Error("NOT_PAIRED");
                            return await this._getPage(0);
                          } catch (e) {
                            throw (
                              (0 === this.accounts.length && this.forgetDevice(),
                              new Error(
                                "Failed to get accounts. Please forget the device and try again. " +
                                  "Make sure you do not have a locked SafeCard inserted."
                              ))
                            );
                          }
                        }
                      }
                      _hasCreds() {
                        return null !== this.creds.deviceID && null !== this.creds.password && this.appName;
                      }
                      _genSessionKey() {
                        if ((this.name && !this.appName && (this.appName = this.name), !this._hasCreds()))
                          throw new Error("No credentials -- cannot create session key!");
                        const e = r.concat([r.from(this.creds.password), r.from(this.creds.deviceID), r.from(this.appName)]);
                        return n.createHash("sha256").update(e).digest();
                      }
                      _hdPathHasInternalVarIdx() {
                        const e = this.hdPath.split("/").slice(1);
                        for (let t = 0; t < e.length - 1; t++) if (e[t].indexOf("x") > -1) return !0;
                        return !1;
                      }
                      _getCurrentWalletUID() {
                        if (!this.sdkSession) return null;
                        const e = this.sdkSession.getActiveWallet();
                        return e && e.uid ? e.uid.toString("hex") : null;
                      }
                    }
                    (f.type = l), (t.exports = f);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring", file: "node_modules/eth-lattice-keyring/index.js" }
    ],
    [
      3194,
      { "./types": 3204, "@ethereumjs/common": 390, "@ethereumjs/util": 410 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.BaseTransaction = void 0);
                const n = e("@ethereumjs/common"),
                  i = e("@ethereumjs/util"),
                  o = e("./types");
                r.BaseTransaction = class {
                  constructor(e, t) {
                    (this.cache = { hash: undefined, dataFee: undefined }),
                      (this.activeCapabilities = []),
                      (this.DEFAULT_CHAIN = n.Chain.Mainnet),
                      (this.DEFAULT_HARDFORK = n.Hardfork.Merge);
                    const { nonce: r, gasLimit: o, to: s, value: a, data: c, v: u, r: l, s: d, type: f } = e;
                    (this._type = Number((0, i.bufferToBigInt)((0, i.toBuffer)(f)))), (this.txOptions = t);
                    const h = (0, i.toBuffer)("" === s ? "0x" : s),
                      p = (0, i.toBuffer)("" === u ? "0x" : u),
                      m = (0, i.toBuffer)("" === l ? "0x" : l),
                      g = (0, i.toBuffer)("" === d ? "0x" : d);
                    (this.nonce = (0, i.bufferToBigInt)((0, i.toBuffer)("" === r ? "0x" : r))),
                      (this.gasLimit = (0, i.bufferToBigInt)((0, i.toBuffer)("" === o ? "0x" : o))),
                      (this.to = h.length > 0 ? new i.Address(h) : undefined),
                      (this.value = (0, i.bufferToBigInt)((0, i.toBuffer)("" === a ? "0x" : a))),
                      (this.data = (0, i.toBuffer)("" === c ? "0x" : c)),
                      (this.v = p.length > 0 ? (0, i.bufferToBigInt)(p) : undefined),
                      (this.r = m.length > 0 ? (0, i.bufferToBigInt)(m) : undefined),
                      (this.s = g.length > 0 ? (0, i.bufferToBigInt)(g) : undefined),
                      this._validateCannotExceedMaxInteger({ value: this.value, r: this.r, s: this.s }),
                      this._validateCannotExceedMaxInteger({ gasLimit: this.gasLimit }, 64),
                      this._validateCannotExceedMaxInteger({ nonce: this.nonce }, 64, !0);
                  }
                  get type() {
                    return this._type;
                  }
                  supports(e) {
                    return this.activeCapabilities.includes(e);
                  }
                  validate(e = !1) {
                    const t = [];
                    return (
                      this.getBaseFee() > this.gasLimit &&
                        t.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`),
                      this.isSigned() && !this.verifySignature() && t.push("Invalid Signature"),
                      e ? t : 0 === t.length
                    );
                  }
                  _validateYParity() {
                    const { v: e } = this;
                    if (e !== undefined && e !== BigInt(0) && e !== BigInt(1)) {
                      const e = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
                      throw new Error(e);
                    }
                  }
                  _validateHighS() {
                    const { s: e } = this;
                    if (this.common.gteHardfork("homestead") && e !== undefined && e > i.SECP256K1_ORDER_DIV_2) {
                      const e = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                      throw new Error(e);
                    }
                  }
                  getBaseFee() {
                    const e = this.common.param("gasPrices", "tx");
                    let t = this.getDataFee();
                    if ((e && (t += e), this.common.gteHardfork("homestead") && this.toCreationAddress())) {
                      const e = this.common.param("gasPrices", "txCreation");
                      e && (t += e);
                    }
                    return t;
                  }
                  getDataFee() {
                    const e = this.common.param("gasPrices", "txDataZero"),
                      t = this.common.param("gasPrices", "txDataNonZero");
                    let r = BigInt(0);
                    for (let n = 0; n < this.data.length; n++) 0 === this.data[n] ? (r += e) : (r += t);
                    if ((this.to === undefined || null === this.to) && this.common.isActivatedEIP(3860)) {
                      const e = BigInt(Math.ceil(this.data.length / 32));
                      r += this.common.param("gasPrices", "initCodeWordCost") * e;
                    }
                    return r;
                  }
                  toCreationAddress() {
                    return this.to === undefined || 0 === this.to.buf.length;
                  }
                  isSigned() {
                    const { v: e, r: t, s: r } = this;
                    return e !== undefined && t !== undefined && r !== undefined;
                  }
                  verifySignature() {
                    try {
                      const e = this.getSenderPublicKey();
                      return 0 !== (0, i.unpadBuffer)(e).length;
                    } catch (e) {
                      return !1;
                    }
                  }
                  getSenderAddress() {
                    return new i.Address((0, i.publicToAddress)(this.getSenderPublicKey()));
                  }
                  sign(e) {
                    if (32 !== e.length) {
                      const e = this._errorMsg("Private key must be 32 bytes in length.");
                      throw new Error(e);
                    }
                    let t = !1;
                    0 === this.type &&
                      this.common.gteHardfork("spuriousDragon") &&
                      !this.supports(o.Capability.EIP155ReplayProtection) &&
                      (this.activeCapabilities.push(o.Capability.EIP155ReplayProtection), (t = !0));
                    const r = this.getMessageToSign(!0),
                      { v: n, r: s, s: a } = (0, i.ecsign)(r, e),
                      c = this._processSignature(n, s, a);
                    if (t) {
                      const e = this.activeCapabilities.indexOf(o.Capability.EIP155ReplayProtection);
                      e > -1 && this.activeCapabilities.splice(e, 1);
                    }
                    return c;
                  }
                  _getCommon(e, t) {
                    if (t !== undefined) {
                      const r = (0, i.bufferToBigInt)((0, i.toBuffer)(t));
                      if (e) {
                        if (e.chainId() !== r) {
                          const e = this._errorMsg("The chain ID does not match the chain ID of Common");
                          throw new Error(e);
                        }
                        return e.copy();
                      }
                      return n.Common.isSupportedChainId(r)
                        ? new n.Common({ chain: r, hardfork: this.DEFAULT_HARDFORK })
                        : n.Common.custom(
                            { name: "custom-chain", networkId: r, chainId: r },
                            { baseChain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK }
                          );
                    }
                    return e?.copy() ?? new n.Common({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
                  }
                  _validateCannotExceedMaxInteger(e, t = 256, r = !1) {
                    for (const [n, o] of Object.entries(e))
                      switch (t) {
                        case 64:
                          if (r) {
                            if (o !== undefined && o >= i.MAX_UINT64) {
                              const e = this._errorMsg(`${n} cannot equal or exceed MAX_UINT64 (2^64-1), given ${o}`);
                              throw new Error(e);
                            }
                          } else if (o !== undefined && o > i.MAX_UINT64) {
                            const e = this._errorMsg(`${n} cannot exceed MAX_UINT64 (2^64-1), given ${o}`);
                            throw new Error(e);
                          }
                          break;
                        case 256:
                          if (r) {
                            if (o !== undefined && o >= i.MAX_INTEGER) {
                              const e = this._errorMsg(`${n} cannot equal or exceed MAX_INTEGER (2^256-1), given ${o}`);
                              throw new Error(e);
                            }
                          } else if (o !== undefined && o > i.MAX_INTEGER) {
                            const e = this._errorMsg(`${n} cannot exceed MAX_INTEGER (2^256-1), given ${o}`);
                            throw new Error(e);
                          }
                          break;
                        default: {
                          const e = this._errorMsg("unimplemented bits value");
                          throw new Error(e);
                        }
                      }
                  }
                  static _validateNotArray(e) {
                    const t = [
                      "nonce",
                      "gasPrice",
                      "gasLimit",
                      "to",
                      "value",
                      "data",
                      "v",
                      "r",
                      "s",
                      "type",
                      "baseFee",
                      "maxFeePerGas",
                      "chainId"
                    ];
                    for (const [r, n] of Object.entries(e))
                      if (t.includes(r) && Array.isArray(n)) throw new Error(`${r} cannot be an array`);
                  }
                  _getSharedErrorPostfix() {
                    let e = "";
                    try {
                      e = this.isSigned() ? (0, i.bufferToHex)(this.hash()) : "not available (unsigned)";
                    } catch (t) {
                      e = "error";
                    }
                    let t = "";
                    try {
                      t = this.isSigned().toString();
                    } catch (t) {
                      e = "error";
                    }
                    let r = "";
                    try {
                      r = this.common.hardfork();
                    } catch (e) {
                      r = "error";
                    }
                    let n = `tx type=${this.type} hash=${e} nonce=${this.nonce} value=${this.value} `;
                    return (n += `signed=${t} hf=${r}`), n;
                  }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/baseTransaction.js"
      }
    ],
    [
      3195,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.BYTES_PER_FIELD_ELEMENT =
                    r.FIELD_ELEMENTS_PER_BLOB =
                    r.MAX_TX_WRAP_KZG_COMMITMENTS =
                    r.LIMIT_BLOBS_PER_TX =
                    r.MAX_VERSIONED_HASHES_LIST_SIZE =
                    r.MAX_ACCESS_LIST_SIZE =
                    r.MAX_CALLDATA_SIZE =
                      void 0),
                  (r.MAX_CALLDATA_SIZE = 16777216),
                  (r.MAX_ACCESS_LIST_SIZE = 16777216),
                  (r.MAX_VERSIONED_HASHES_LIST_SIZE = 16777216),
                  (r.LIMIT_BLOBS_PER_TX = 16777216),
                  (r.MAX_TX_WRAP_KZG_COMMITMENTS = 16777216),
                  (r.FIELD_ELEMENTS_PER_BLOB = 4096),
                  (r.BYTES_PER_FIELD_ELEMENT = 32);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/constants.js"
      }
    ],
    [
      3196,
      {
        "./baseTransaction": 3194,
        "./util": 3205,
        "@ethereumjs/rlp": 393,
        "@ethereumjs/util": 410,
        buffer: 2913,
        "ethereum-cryptography/keccak": 3207
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.FeeMarketEIP1559Transaction = void 0);
                    const n = e("@ethereumjs/rlp"),
                      i = e("@ethereumjs/util"),
                      o = e("ethereum-cryptography/keccak"),
                      s = e("./baseTransaction"),
                      a = e("./util"),
                      c = t.from((2).toString(16).padStart(2, "0"), "hex");
                    class u extends s.BaseTransaction {
                      constructor(e, t = {}) {
                        super({ ...e, type: 2 }, t), (this.DEFAULT_HARDFORK = "london");
                        const { chainId: r, accessList: n, maxFeePerGas: o, maxPriorityFeePerGas: c } = e;
                        if (
                          ((this.common = this._getCommon(t.common, r)),
                          (this.chainId = this.common.chainId()),
                          !1 === this.common.isActivatedEIP(1559))
                        )
                          throw new Error("EIP-1559 not enabled on Common");
                        this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
                        const u = a.AccessLists.getAccessListData(n ?? []);
                        if (
                          ((this.accessList = u.accessList),
                          (this.AccessListJSON = u.AccessListJSON),
                          a.AccessLists.verifyAccessList(this.accessList),
                          (this.maxFeePerGas = (0, i.bufferToBigInt)((0, i.toBuffer)("" === o ? "0x" : o))),
                          (this.maxPriorityFeePerGas = (0, i.bufferToBigInt)((0, i.toBuffer)("" === c ? "0x" : c))),
                          this._validateCannotExceedMaxInteger({
                            maxFeePerGas: this.maxFeePerGas,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas
                          }),
                          s.BaseTransaction._validateNotArray(e),
                          this.gasLimit * this.maxFeePerGas > i.MAX_INTEGER)
                        ) {
                          const e = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
                          throw new Error(e);
                        }
                        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
                          const e = this._errorMsg(
                            "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)"
                          );
                          throw new Error(e);
                        }
                        this._validateYParity(),
                          this._validateHighS(),
                          this.common.isActivatedEIP(3860) && (0, a.checkMaxInitCodeSize)(this.common, this.data.length);
                        (t?.freeze ?? !0) && Object.freeze(this);
                      }
                      static fromTxData(e, t = {}) {
                        return new u(e, t);
                      }
                      static fromSerializedTx(e, t = {}) {
                        if (!e.slice(0, 1).equals(c))
                          throw new Error(
                            `Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: 2, received: ${e
                              .slice(0, 1)
                              .toString("hex")}`
                          );
                        const r = (0, i.arrToBufArr)(n.RLP.decode(e.slice(1)));
                        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
                        return u.fromValuesArray(r, t);
                      }
                      static fromValuesArray(e, t = {}) {
                        if (9 !== e.length && 12 !== e.length)
                          throw new Error(
                            "Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx)."
                          );
                        const [r, n, o, s, a, c, l, d, f, h, p, m] = e;
                        return (
                          this._validateNotArray({ chainId: r, v: h }),
                          (0, i.validateNoLeadingZeroes)({
                            nonce: n,
                            maxPriorityFeePerGas: o,
                            maxFeePerGas: s,
                            gasLimit: a,
                            value: l,
                            v: h,
                            r: p,
                            s: m
                          }),
                          new u(
                            {
                              chainId: (0, i.bufferToBigInt)(r),
                              nonce: n,
                              maxPriorityFeePerGas: o,
                              maxFeePerGas: s,
                              gasLimit: a,
                              to: c,
                              value: l,
                              data: d,
                              accessList: f ?? [],
                              v: h !== undefined ? (0, i.bufferToBigInt)(h) : undefined,
                              r: p,
                              s: m
                            },
                            t
                          )
                        );
                      }
                      getDataFee() {
                        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
                        let e = super.getDataFee();
                        return (
                          (e += BigInt(a.AccessLists.getDataFeeEIP2930(this.accessList, this.common))),
                          Object.isFrozen(this) && (this.cache.dataFee = { value: e, hardfork: this.common.hardfork() }),
                          e
                        );
                      }
                      getUpfrontCost(e = BigInt(0)) {
                        const t = this.maxPriorityFeePerGas,
                          r = this.maxFeePerGas - e,
                          n = (t < r ? t : r) + e;
                        return this.gasLimit * n + this.value;
                      }
                      raw() {
                        return [
                          (0, i.bigIntToUnpaddedBuffer)(this.chainId),
                          (0, i.bigIntToUnpaddedBuffer)(this.nonce),
                          (0, i.bigIntToUnpaddedBuffer)(this.maxPriorityFeePerGas),
                          (0, i.bigIntToUnpaddedBuffer)(this.maxFeePerGas),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasLimit),
                          this.to !== undefined ? this.to.buf : t.from([]),
                          (0, i.bigIntToUnpaddedBuffer)(this.value),
                          this.data,
                          this.accessList,
                          this.v !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.v) : t.from([]),
                          this.r !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.r) : t.from([]),
                          this.s !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.s) : t.from([])
                        ];
                      }
                      serialize() {
                        const e = this.raw();
                        return t.concat([c, t.from(n.RLP.encode((0, i.bufArrToArr)(e)))]);
                      }
                      getMessageToSign(e = !0) {
                        const r = this.raw().slice(0, 9),
                          s = t.concat([c, t.from(n.RLP.encode((0, i.bufArrToArr)(r)))]);
                        return e ? t.from((0, o.keccak256)(s)) : s;
                      }
                      hash() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("Cannot call hash method if transaction is not signed");
                          throw new Error(e);
                        }
                        return Object.isFrozen(this)
                          ? (this.cache.hash || (this.cache.hash = t.from((0, o.keccak256)(this.serialize()))), this.cache.hash)
                          : t.from((0, o.keccak256)(this.serialize()));
                      }
                      getMessageToVerifySignature() {
                        return this.getMessageToSign();
                      }
                      getSenderPublicKey() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("Cannot call this method if transaction is not signed");
                          throw new Error(e);
                        }
                        const e = this.getMessageToVerifySignature(),
                          { v: t, r: r, s: n } = this;
                        this._validateHighS();
                        try {
                          return (0, i.ecrecover)(e, t + BigInt(27), (0, i.bigIntToUnpaddedBuffer)(r), (0, i.bigIntToUnpaddedBuffer)(n));
                        } catch (e) {
                          const t = this._errorMsg("Invalid Signature");
                          throw new Error(t);
                        }
                      }
                      _processSignature(e, t, r) {
                        const n = { ...this.txOptions, common: this.common };
                        return u.fromTxData(
                          {
                            chainId: this.chainId,
                            nonce: this.nonce,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                            maxFeePerGas: this.maxFeePerGas,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            accessList: this.accessList,
                            v: e - BigInt(27),
                            r: (0, i.bufferToBigInt)(t),
                            s: (0, i.bufferToBigInt)(r)
                          },
                          n
                        );
                      }
                      toJSON() {
                        const e = a.AccessLists.getAccessListJSON(this.accessList);
                        return {
                          chainId: (0, i.bigIntToHex)(this.chainId),
                          nonce: (0, i.bigIntToHex)(this.nonce),
                          maxPriorityFeePerGas: (0, i.bigIntToHex)(this.maxPriorityFeePerGas),
                          maxFeePerGas: (0, i.bigIntToHex)(this.maxFeePerGas),
                          gasLimit: (0, i.bigIntToHex)(this.gasLimit),
                          to: this.to !== undefined ? this.to.toString() : undefined,
                          value: (0, i.bigIntToHex)(this.value),
                          data: "0x" + this.data.toString("hex"),
                          accessList: e,
                          v: this.v !== undefined ? (0, i.bigIntToHex)(this.v) : undefined,
                          r: this.r !== undefined ? (0, i.bigIntToHex)(this.r) : undefined,
                          s: this.s !== undefined ? (0, i.bigIntToHex)(this.s) : undefined
                        };
                      }
                      errorStr() {
                        let e = this._getSharedErrorPostfix();
                        return (e += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`), e;
                      }
                      _errorMsg(e) {
                        return `${e} (${this.errorStr()})`;
                      }
                    }
                    r.FeeMarketEIP1559Transaction = u;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/eip1559Transaction.js"
      }
    ],
    [
      3197,
      {
        "./baseTransaction": 3194,
        "./util": 3205,
        "@ethereumjs/rlp": 393,
        "@ethereumjs/util": 410,
        buffer: 2913,
        "ethereum-cryptography/keccak": 3207
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.AccessListEIP2930Transaction = void 0);
                    const n = e("@ethereumjs/rlp"),
                      i = e("@ethereumjs/util"),
                      o = e("ethereum-cryptography/keccak"),
                      s = e("./baseTransaction"),
                      a = e("./util"),
                      c = t.from((1).toString(16).padStart(2, "0"), "hex");
                    class u extends s.BaseTransaction {
                      constructor(e, t = {}) {
                        super({ ...e, type: 1 }, t), (this.DEFAULT_HARDFORK = "berlin");
                        const { chainId: r, accessList: n, gasPrice: o } = e;
                        if (
                          ((this.common = this._getCommon(t.common, r)),
                          (this.chainId = this.common.chainId()),
                          !this.common.isActivatedEIP(2930))
                        )
                          throw new Error("EIP-2930 not enabled on Common");
                        this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
                        const c = a.AccessLists.getAccessListData(n ?? []);
                        if (
                          ((this.accessList = c.accessList),
                          (this.AccessListJSON = c.AccessListJSON),
                          a.AccessLists.verifyAccessList(this.accessList),
                          (this.gasPrice = (0, i.bufferToBigInt)((0, i.toBuffer)("" === o ? "0x" : o))),
                          this._validateCannotExceedMaxInteger({ gasPrice: this.gasPrice }),
                          s.BaseTransaction._validateNotArray(e),
                          this.gasPrice * this.gasLimit > i.MAX_INTEGER)
                        ) {
                          const e = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
                          throw new Error(e);
                        }
                        this._validateYParity(),
                          this._validateHighS(),
                          this.common.isActivatedEIP(3860) && (0, a.checkMaxInitCodeSize)(this.common, this.data.length);
                        (t?.freeze ?? !0) && Object.freeze(this);
                      }
                      static fromTxData(e, t = {}) {
                        return new u(e, t);
                      }
                      static fromSerializedTx(e, t = {}) {
                        if (!e.slice(0, 1).equals(c))
                          throw new Error(
                            `Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: 1, received: ${e
                              .slice(0, 1)
                              .toString("hex")}`
                          );
                        const r = (0, i.arrToBufArr)(n.RLP.decode(Uint8Array.from(e.slice(1))));
                        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input: must be array");
                        return u.fromValuesArray(r, t);
                      }
                      static fromValuesArray(e, t = {}) {
                        if (8 !== e.length && 11 !== e.length)
                          throw new Error(
                            "Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx)."
                          );
                        const [r, n, o, s, a, c, l, d, f, h, p] = e;
                        this._validateNotArray({ chainId: r, v: f }),
                          (0, i.validateNoLeadingZeroes)({ nonce: n, gasPrice: o, gasLimit: s, value: c, v: f, r: h, s: p });
                        return new u(
                          {
                            chainId: (0, i.bufferToBigInt)(r),
                            nonce: n,
                            gasPrice: o,
                            gasLimit: s,
                            to: a,
                            value: c,
                            data: l,
                            accessList: d ?? [],
                            v: f !== undefined ? (0, i.bufferToBigInt)(f) : undefined,
                            r: h,
                            s: p
                          },
                          t
                        );
                      }
                      getDataFee() {
                        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
                        let e = super.getDataFee();
                        return (
                          (e += BigInt(a.AccessLists.getDataFeeEIP2930(this.accessList, this.common))),
                          Object.isFrozen(this) && (this.cache.dataFee = { value: e, hardfork: this.common.hardfork() }),
                          e
                        );
                      }
                      getUpfrontCost() {
                        return this.gasLimit * this.gasPrice + this.value;
                      }
                      raw() {
                        return [
                          (0, i.bigIntToUnpaddedBuffer)(this.chainId),
                          (0, i.bigIntToUnpaddedBuffer)(this.nonce),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasPrice),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasLimit),
                          this.to !== undefined ? this.to.buf : t.from([]),
                          (0, i.bigIntToUnpaddedBuffer)(this.value),
                          this.data,
                          this.accessList,
                          this.v !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.v) : t.from([]),
                          this.r !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.r) : t.from([]),
                          this.s !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.s) : t.from([])
                        ];
                      }
                      serialize() {
                        const e = this.raw();
                        return t.concat([c, t.from(n.RLP.encode((0, i.bufArrToArr)(e)))]);
                      }
                      getMessageToSign(e = !0) {
                        const r = this.raw().slice(0, 8),
                          s = t.concat([c, t.from(n.RLP.encode((0, i.bufArrToArr)(r)))]);
                        return e ? t.from((0, o.keccak256)(s)) : s;
                      }
                      hash() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("Cannot call hash method if transaction is not signed");
                          throw new Error(e);
                        }
                        return Object.isFrozen(this)
                          ? (this.cache.hash || (this.cache.hash = t.from((0, o.keccak256)(this.serialize()))), this.cache.hash)
                          : t.from((0, o.keccak256)(this.serialize()));
                      }
                      getMessageToVerifySignature() {
                        return this.getMessageToSign();
                      }
                      getSenderPublicKey() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("Cannot call this method if transaction is not signed");
                          throw new Error(e);
                        }
                        const e = this.getMessageToVerifySignature(),
                          { v: t, r: r, s: n } = this;
                        this._validateHighS();
                        try {
                          return (0, i.ecrecover)(e, t + BigInt(27), (0, i.bigIntToUnpaddedBuffer)(r), (0, i.bigIntToUnpaddedBuffer)(n));
                        } catch (e) {
                          const t = this._errorMsg("Invalid Signature");
                          throw new Error(t);
                        }
                      }
                      _processSignature(e, t, r) {
                        const n = { ...this.txOptions, common: this.common };
                        return u.fromTxData(
                          {
                            chainId: this.chainId,
                            nonce: this.nonce,
                            gasPrice: this.gasPrice,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            accessList: this.accessList,
                            v: e - BigInt(27),
                            r: (0, i.bufferToBigInt)(t),
                            s: (0, i.bufferToBigInt)(r)
                          },
                          n
                        );
                      }
                      toJSON() {
                        const e = a.AccessLists.getAccessListJSON(this.accessList);
                        return {
                          chainId: (0, i.bigIntToHex)(this.chainId),
                          nonce: (0, i.bigIntToHex)(this.nonce),
                          gasPrice: (0, i.bigIntToHex)(this.gasPrice),
                          gasLimit: (0, i.bigIntToHex)(this.gasLimit),
                          to: this.to !== undefined ? this.to.toString() : undefined,
                          value: (0, i.bigIntToHex)(this.value),
                          data: "0x" + this.data.toString("hex"),
                          accessList: e,
                          v: this.v !== undefined ? (0, i.bigIntToHex)(this.v) : undefined,
                          r: this.r !== undefined ? (0, i.bigIntToHex)(this.r) : undefined,
                          s: this.s !== undefined ? (0, i.bigIntToHex)(this.s) : undefined
                        };
                      }
                      errorStr() {
                        let e = this._getSharedErrorPostfix();
                        return (e += ` gasPrice=${this.gasPrice} accessListCount=${this.accessList?.length ?? 0}`), e;
                      }
                      _errorMsg(e) {
                        return `${e} (${this.errorStr()})`;
                      }
                    }
                    r.AccessListEIP2930Transaction = u;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/eip2930Transaction.js"
      }
    ],
    [
      3198,
      {
        "./baseTransaction": 3194,
        "./constants": 3195,
        "./kzg/kzg": 3201,
        "./types": 3204,
        "./util": 3205,
        "./utils/blobHelpers": 3206,
        "@chainsafe/ssz": 254,
        "@ethereumjs/util": 410,
        buffer: 2913,
        "ethereum-cryptography/keccak": 3207
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.BlobEIP4844Transaction = void 0);
                    const n = e("@chainsafe/ssz"),
                      i = e("@ethereumjs/util"),
                      o = e("ethereum-cryptography/keccak"),
                      s = e("./baseTransaction"),
                      a = e("./constants"),
                      c = e("./kzg/kzg"),
                      u = e("./types"),
                      l = e("./util"),
                      d = e("./utils/blobHelpers"),
                      f = t.from((5).toString(16).padStart(2, "0"), "hex");
                    class h extends s.BaseTransaction {
                      constructor(e, t = {}) {
                        super({ ...e, type: 5 }, t);
                        const { chainId: r, accessList: n, maxFeePerGas: o, maxPriorityFeePerGas: c, maxFeePerDataGas: u } = e;
                        if (
                          ((this.common = this._getCommon(t.common, r)),
                          (this.chainId = this.common.chainId()),
                          !1 === this.common.isActivatedEIP(1559))
                        )
                          throw new Error("EIP-1559 not enabled on Common");
                        if (!1 === this.common.isActivatedEIP(4844)) throw new Error("EIP-4844 not enabled on Common");
                        this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
                        const d = l.AccessLists.getAccessListData(n ?? []);
                        if (
                          ((this.accessList = d.accessList),
                          (this.AccessListJSON = d.AccessListJSON),
                          l.AccessLists.verifyAccessList(this.accessList),
                          (this.maxFeePerGas = (0, i.bufferToBigInt)((0, i.toBuffer)("" === o ? "0x" : o))),
                          (this.maxPriorityFeePerGas = (0, i.bufferToBigInt)((0, i.toBuffer)("" === c ? "0x" : c))),
                          this._validateCannotExceedMaxInteger({
                            maxFeePerGas: this.maxFeePerGas,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas
                          }),
                          s.BaseTransaction._validateNotArray(e),
                          this.gasLimit * this.maxFeePerGas > i.MAX_INTEGER)
                        ) {
                          const e = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
                          throw new Error(e);
                        }
                        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
                          const e = this._errorMsg(
                            "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)"
                          );
                          throw new Error(e);
                        }
                        (this.maxFeePerDataGas = (0, i.bufferToBigInt)((0, i.toBuffer)("" === (u ?? "") ? "0x" : u))),
                          (this.versionedHashes = (e.versionedHashes ?? []).map((e) => (0, i.toBuffer)(e))),
                          this._validateYParity(),
                          this._validateHighS(),
                          this.common.isActivatedEIP(3860) && (0, l.checkMaxInitCodeSize)(this.common, this.data.length);
                        for (const e of this.versionedHashes) {
                          if (32 !== e.length) {
                            const e = this._errorMsg("versioned hash is invalid length");
                            throw new Error(e);
                          }
                          if (BigInt(e[0]) !== this.common.paramByEIP("sharding", "blobCommitmentVersionKzg", 4844)) {
                            const e = this._errorMsg("versioned hash does not start with KZG commitment version");
                            throw new Error(e);
                          }
                        }
                        if (this.versionedHashes.length > a.LIMIT_BLOBS_PER_TX) {
                          const e = this._errorMsg(`tx can contain at most ${a.LIMIT_BLOBS_PER_TX} blobs`);
                          throw new Error(e);
                        }
                        (this.blobs = e.blobs?.map((e) => (0, i.toBuffer)(e))),
                          (this.kzgCommitments = e.kzgCommitments?.map((e) => (0, i.toBuffer)(e))),
                          (this.aggregateKzgProof = (0, i.toBuffer)(e.kzgProof));
                        (t?.freeze ?? !0) && Object.freeze(this);
                      }
                      static fromTxData(e, t) {
                        return new h(e, t);
                      }
                      static minimalFromNetworkWrapper(e, t) {
                        return h.fromTxData({ ...e, blobs: undefined, kzgCommitments: undefined, kzgProof: undefined }, t);
                      }
                      static fromSerializedBlobTxNetworkWrapper(e, r) {
                        if (!r || !r.common) throw new Error("common instance required to validate versioned hashes");
                        const o = u.BlobNetworkTransactionWrapper.deserialize(e.slice(1)),
                          s = o.tx.message,
                          a = Number(r.common.paramByEIP("sharding", "blobCommitmentVersionKzg", 4844));
                        ((e, t, r, i, o) => {
                          if (e.length !== t.length || t.length !== r.length)
                            throw new Error("Number of versionedHashes, blobs, and commitments not all equal");
                          try {
                            c.kzg.verifyAggregateKzgProof(t, r, i);
                          } catch (e) {
                            throw new Error("KZG proof cannot be verified from blobs/commitments");
                          }
                          for (let t = 0; t < e.length; t++) {
                            const i = (0, d.computeVersionedHash)(r[t], o);
                            if (!(0, n.byteArrayEquals)(i, e[t]))
                              throw new Error(`commitment for blob at index ${t} does not match versionedHash`);
                          }
                        })(s.blobVersionedHashes, o.blobs, o.blobKzgs, o.kzgAggregatedProof, a);
                        const l = [];
                        for (const e of s.accessList) {
                          const r = [t.from(e.address), e.storageKeys.map((e) => t.from(e))];
                          l.push(r);
                        }
                        const f = null === s.to.value ? undefined : i.Address.fromString((0, i.bufferToHex)(t.from(s.to.value))),
                          p = s.blobVersionedHashes.map((e) => t.from(e)),
                          m = o.blobKzgs.map((e) => t.from(e)),
                          g = o.blobs.map((e) => t.from(e)),
                          y = {
                            ...s,
                            versionedHashes: p,
                            accessList: l,
                            to: f,
                            blobs: g,
                            kzgCommitments: m,
                            kzgProof: t.from(o.kzgAggregatedProof),
                            r: o.tx.signature.r,
                            s: o.tx.signature.s,
                            v: BigInt(o.tx.signature.yParity),
                            gasLimit: s.gas,
                            maxFeePerGas: s.maxFeePerGas,
                            maxPriorityFeePerGas: s.maxPriorityFeePerGas
                          };
                        return new h(y, r);
                      }
                      static fromSerializedTx(e, r) {
                        const n = u.SignedBlobTransactionType.deserialize(e.slice(1)),
                          o = n.message,
                          s = [];
                        for (const e of o.accessList) {
                          const r = [t.from(e.address), e.storageKeys.map((e) => t.from(e))];
                          s.push(r);
                        }
                        const a = null === o.to.value ? undefined : i.Address.fromString((0, i.bufferToHex)(t.from(o.to.value))),
                          c = o.blobVersionedHashes.map((e) => t.from(e)),
                          l = {
                            ...o,
                            versionedHashes: c,
                            to: a,
                            accessList: s,
                            r: n.signature.r,
                            s: n.signature.s,
                            v: BigInt(n.signature.yParity),
                            gasLimit: n.message.gas
                          };
                        return new h(l, r);
                      }
                      getUpfrontCost(e = BigInt(0)) {
                        const t = this.maxPriorityFeePerGas,
                          r = this.maxFeePerGas - e,
                          n = (t < r ? t : r) + e;
                        return this.gasLimit * n + this.value;
                      }
                      raw() {
                        throw new Error("Method not implemented.");
                      }
                      toValue() {
                        const e = { selector: this.to !== undefined ? 1 : 0, value: this.to?.toBuffer() ?? null };
                        return {
                          message: {
                            chainId: this.common.chainId(),
                            nonce: this.nonce,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                            maxFeePerGas: this.maxFeePerGas,
                            gas: this.gasLimit,
                            to: e,
                            value: this.value,
                            data: this.data,
                            accessList: this.accessList.map((e) => ({ address: e[0], storageKeys: e[1] })),
                            blobVersionedHashes: this.versionedHashes,
                            maxFeePerDataGas: this.maxFeePerDataGas
                          },
                          signature: { r: this.r ?? BigInt(0), s: this.s ?? BigInt(0), yParity: this.v === BigInt(1) }
                        };
                      }
                      serialize() {
                        const e = u.SignedBlobTransactionType.serialize(this.toValue());
                        return t.concat([f, e]);
                      }
                      serializeNetworkWrapper() {
                        if (this.blobs === undefined || this.kzgCommitments === undefined || this.aggregateKzgProof === undefined)
                          throw new Error(
                            "cannot serialize network wrapper without blobs, KZG commitments and aggregate KZG proof provided"
                          );
                        const e = { selector: this.to !== undefined ? 1 : 0, value: this.to?.toBuffer() ?? null },
                          r = this.blobs?.map((e) => Uint8Array.from(e)) ?? [],
                          n = u.BlobNetworkTransactionWrapper.serialize({
                            blobs: r,
                            blobKzgs: this.kzgCommitments?.map((e) => Uint8Array.from(e)) ?? [],
                            tx: { ...(0, l.blobTxToNetworkWrapperDataFormat)(this), ...e },
                            kzgAggregatedProof: Uint8Array.from(this.aggregateKzgProof ?? [])
                          });
                        return t.concat([t.from([5]), n]);
                      }
                      getMessageToSign(e) {
                        return this.unsignedHash();
                      }
                      unsignedHash() {
                        const e = u.BlobTransactionType.serialize(this.toValue().message);
                        return t.from((0, o.keccak256)(t.concat([f, e])));
                      }
                      hash() {
                        return t.from((0, o.keccak256)(this.serialize()));
                      }
                      getMessageToVerifySignature() {
                        return this.getMessageToSign();
                      }
                      getSenderPublicKey() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("Cannot call this method if transaction is not signed");
                          throw new Error(e);
                        }
                        const e = this.getMessageToVerifySignature(),
                          { v: t, r: r, s: n } = this;
                        this._validateHighS();
                        try {
                          return (0, i.ecrecover)(e, t + BigInt(27), (0, i.bigIntToUnpaddedBuffer)(r), (0, i.bigIntToUnpaddedBuffer)(n));
                        } catch (e) {
                          const t = this._errorMsg("Invalid Signature");
                          throw new Error(t);
                        }
                      }
                      toJSON() {
                        const e = l.AccessLists.getAccessListJSON(this.accessList);
                        return {
                          chainId: (0, i.bigIntToHex)(this.chainId),
                          nonce: (0, i.bigIntToHex)(this.nonce),
                          maxPriorityFeePerGas: (0, i.bigIntToHex)(this.maxPriorityFeePerGas),
                          maxFeePerGas: (0, i.bigIntToHex)(this.maxFeePerGas),
                          gasLimit: (0, i.bigIntToHex)(this.gasLimit),
                          to: this.to !== undefined ? this.to.toString() : undefined,
                          value: (0, i.bigIntToHex)(this.value),
                          data: "0x" + this.data.toString("hex"),
                          accessList: e,
                          v: this.v !== undefined ? (0, i.bigIntToHex)(this.v) : undefined,
                          r: this.r !== undefined ? (0, i.bigIntToHex)(this.r) : undefined,
                          s: this.s !== undefined ? (0, i.bigIntToHex)(this.s) : undefined,
                          maxFeePerDataGas: (0, i.bigIntToHex)(this.maxFeePerDataGas),
                          versionedHashes: this.versionedHashes.map((e) => (0, i.bufferToHex)(e))
                        };
                      }
                      _processSignature(e, t, r) {
                        const n = { ...this.txOptions, common: this.common };
                        return h.fromTxData(
                          {
                            chainId: this.chainId,
                            nonce: this.nonce,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                            maxFeePerGas: this.maxFeePerGas,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            accessList: this.accessList,
                            v: e - BigInt(27),
                            r: (0, i.bufferToBigInt)(t),
                            s: (0, i.bufferToBigInt)(r),
                            maxFeePerDataGas: this.maxFeePerDataGas,
                            versionedHashes: this.versionedHashes,
                            blobs: this.blobs,
                            kzgCommitments: this.kzgCommitments,
                            kzgProof: this.aggregateKzgProof
                          },
                          n
                        );
                      }
                      errorStr() {
                        let e = this._getSharedErrorPostfix();
                        return (e += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`), e;
                      }
                      _errorMsg(e) {
                        return `${e} (${this.errorStr()})`;
                      }
                      numBlobs() {
                        return this.versionedHashes.length;
                      }
                    }
                    r.BlobEIP4844Transaction = h;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/eip4844Transaction.js"
      }
    ],
    [
      3199,
      { "@ethereumjs/util": 410 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.normalizeTxParams = void 0);
                const n = e("@ethereumjs/util");
                r.normalizeTxParams = (e) => {
                  const t = Object.assign({}, e);
                  return (
                    (t.gasLimit = (0, n.toType)(t.gasLimit ?? t.gas, n.TypeOutput.BigInt)),
                    (t.data = t.data === undefined ? t.input : t.data),
                    (t.gasPrice = t.gasPrice !== undefined ? BigInt(t.gasPrice) : undefined),
                    (t.value = t.value !== undefined ? BigInt(t.value) : undefined),
                    (t.to = null !== t.to && t.to !== undefined ? (0, n.setLengthLeft)((0, n.toBuffer)(t.to), 20) : null),
                    (t.v = (0, n.toType)(t.v, n.TypeOutput.BigInt)),
                    t
                  );
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/fromRpc.js"
      }
    ],
    [
      32,
      {
        "../../../../../shared/constants/transaction": 4770,
        "../../../../../shared/modules/hexstring-utils": 4788,
        "../../../../../shared/modules/transaction.utils": 4799,
        "../../../lib/util": 91,
        "@ethersproject/abi": 432,
        "eth-rpc-errors": 3226,
        "human-standard-token-abi": 3827
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.getFinalStates = function () {
                    return [
                      c.TransactionStatus.rejected,
                      c.TransactionStatus.confirmed,
                      c.TransactionStatus.failed,
                      c.TransactionStatus.dropped
                    ];
                  }),
                  (r.normalizeAndValidateTxParams = function (e, t = !0) {
                    const r = f(e, t);
                    return g(r), r;
                  }),
                  (r.normalizeTxParams = f),
                  (r.normalizeTxReceiptGasUsed = function (e) {
                    return "string" == typeof e ? e : e.toString(16);
                  }),
                  (r.validateConfirmedExternalTransaction = void 0),
                  (r.validateFrom = b),
                  (r.validateInputData = y),
                  (r.validateRecipient = v),
                  (r.validateTxParams = g);
                var n,
                  i = e("eth-rpc-errors"),
                  o = e("@ethersproject/abi"),
                  s = (n = e("human-standard-token-abi")) && n.__esModule ? n : { default: n },
                  a = e("../../../lib/util"),
                  c = e("../../../../../shared/constants/transaction"),
                  u = e("../../../../../shared/modules/transaction.utils"),
                  l = e("../../../../../shared/modules/hexstring-utils");
                const d = {
                  from: a.addHexPrefix,
                  to: (e, t) => (t ? (0, a.addHexPrefix)(e).toLowerCase() : (0, a.addHexPrefix)(e)),
                  nonce: a.addHexPrefix,
                  value: a.addHexPrefix,
                  data: a.addHexPrefix,
                  gas: a.addHexPrefix,
                  gasPrice: a.addHexPrefix,
                  maxFeePerGas: a.addHexPrefix,
                  maxPriorityFeePerGas: a.addHexPrefix,
                  type: a.addHexPrefix,
                  estimateSuggested: (e) => e,
                  estimateUsed: (e) => e
                };
                function f(e, t = !0) {
                  const r = {};
                  for (const n in d) e[n] && (r[n] = d[n](e[n], t));
                  return r;
                }
                function h(e, t, r) {
                  if (void 0 !== e[r])
                    throw i.ethErrors.rpc.invalidParams(
                      `Invalid transaction params: specified ${t} but also included ${r}, these cannot be mixed`
                    );
                }
                function p(e, t) {
                  if ("string" != typeof e[t])
                    throw i.ethErrors.rpc.invalidParams(`Invalid transaction params: ${t} is not a string. got: (${e[t]})`);
                }
                function m(e, t) {
                  switch (t) {
                    case "maxFeePerGas":
                    case "maxPriorityFeePerGas":
                      if (e.type && e.type !== c.TransactionEnvelopeType.feeMarket)
                        throw i.ethErrors.rpc.invalidParams(
                          `Invalid transaction envelope type: specified type "${e.type}" but including maxFeePerGas and maxPriorityFeePerGas requires type: "${c.TransactionEnvelopeType.feeMarket}"`
                        );
                      break;
                    default:
                      if (e.type && e.type === c.TransactionEnvelopeType.feeMarket)
                        throw i.ethErrors.rpc.invalidParams(
                          `Invalid transaction envelope type: specified type "${e.type}" but included a gasPrice instead of maxFeePerGas and maxPriorityFeePerGas`
                        );
                  }
                }
                function g(e, t = !0) {
                  if (!e || "object" != typeof e || Array.isArray(e))
                    throw i.ethErrors.rpc.invalidParams("Invalid transaction params: must be an object.");
                  if (!e.to && !e.data)
                    throw i.ethErrors.rpc.invalidParams(
                      'Invalid transaction params: must specify "data" for contract deployments, or "to" (and optionally "data") for all other types of transactions.'
                    );
                  if ((0, u.isEIP1559Transaction)({ txParams: e }) && !t)
                    throw i.ethErrors.rpc.invalidParams(
                      "Invalid transaction params: params specify an EIP-1559 transaction but the current network does not support EIP-1559"
                    );
                  Object.entries(e).forEach(([t, r]) => {
                    switch (t) {
                      case "from":
                        b(e);
                        break;
                      case "to":
                        v(e);
                        break;
                      case "gasPrice":
                        m(e, "gasPrice"), h(e, "gasPrice", "maxFeePerGas"), h(e, "gasPrice", "maxPriorityFeePerGas"), p(e, "gasPrice");
                        break;
                      case "maxFeePerGas":
                        m(e, "maxFeePerGas"), h(e, "maxFeePerGas", "gasPrice"), p(e, "maxFeePerGas");
                        break;
                      case "maxPriorityFeePerGas":
                        m(e, "maxPriorityFeePerGas"), h(e, "maxPriorityFeePerGas", "gasPrice"), p(e, "maxPriorityFeePerGas");
                        break;
                      case "value":
                        if ((p(e, "value"), r.toString().includes("-")))
                          throw i.ethErrors.rpc.invalidParams(`Invalid transaction value "${r}": not a positive number.`);
                        if (r.toString().includes("."))
                          throw i.ethErrors.rpc.invalidParams(`Invalid transaction value of "${r}": number must be in wei.`);
                        if (!r.match(/^0x[a-fA-F0-9]+$/u))
                          throw i.ethErrors.rpc.invalidParams(`Invalid transaction value of "${r}": not a valid hex string.`);
                        break;
                      case "chainId":
                        if ("number" != typeof r && "string" != typeof r)
                          throw i.ethErrors.rpc.invalidParams(
                            `Invalid transaction params: ${t} is not a Number or hex string. got: (${r})`
                          );
                        break;
                      case "data":
                        y(r), p(e, "data");
                        break;
                      default:
                        p(e, t);
                    }
                  });
                }
                function y(e) {
                  if (null !== e) {
                    const t = new o.Interface(s.default);
                    try {
                      t.parseTransaction({ data: e });
                    } catch (e) {
                      if (e.message.match(/BUFFER_OVERRUN/))
                        throw i.ethErrors.rpc.invalidParams("Invalid transaction params: data out-of-bounds, BUFFER_OVERRUN.");
                    }
                  }
                }
                function b(e) {
                  if ("string" != typeof e.from) throw i.ethErrors.rpc.invalidParams(`Invalid "from" address "${e.from}": not a string.`);
                  if (!(0, l.isValidHexAddress)(e.from, { allowNonPrefixed: !1 }))
                    throw i.ethErrors.rpc.invalidParams('Invalid "from" address.');
                }
                function v(e) {
                  if ("0x" === e.to || null === e.to) {
                    if (!e.data) throw i.ethErrors.rpc.invalidParams('Invalid "to" address.');
                    delete e.to;
                  } else if (e.to !== undefined && !(0, l.isValidHexAddress)(e.to, { allowNonPrefixed: !1 }))
                    throw i.ethErrors.rpc.invalidParams('Invalid "to" address.');
                  return e;
                }
                r.validateConfirmedExternalTransaction = ({ txMeta: e, pendingTransactions: t, confirmedTransactions: r } = {}) => {
                  if (!e || !e.txParams) throw i.ethErrors.rpc.invalidParams('"txMeta" or "txMeta.txParams" is missing');
                  if (e.status !== c.TransactionStatus.confirmed)
                    throw i.ethErrors.rpc.invalidParams('External transaction status should be "confirmed"');
                  const n = e.txParams.nonce;
                  if (t && t.length > 0) {
                    if (
                      t.find((e) => {
                        var t;
                        return (null === (t = e.txParams) || void 0 === t ? void 0 : t.nonce) === n;
                      })
                    )
                      throw i.ethErrors.rpc.invalidParams("External transaction nonce should not be in pending txs");
                  }
                  if (r && r.length > 0) {
                    if (
                      r.find((e) => {
                        var t;
                        return (null === (t = e.txParams) || void 0 === t ? void 0 : t.nonce) === n;
                      })
                    )
                      throw i.ethErrors.rpc.invalidParams("External transaction nonce should not be in confirmed txs");
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/transactions/lib/util.js" }
    ],
    [
      320,
      { buffer: 2913, "web-encoding": 4725 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const { Buffer: n } = e("buffer"),
                  { TextEncoder: i, TextDecoder: o } = e("web-encoding"),
                  s = new o(),
                  a = new i();
                t.exports = {
                  decodeText: (e) => s.decode(e),
                  encodeText: (e) => a.encode(e),
                  asBuffer: ({ buffer: e, byteLength: t, byteOffset: r }) => n.from(e, r, t)
                };
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multihashes>multibase",
        file: "node_modules/@ensdomains/content-hash/node_modules/multihashes/node_modules/multibase/src/util.js"
      }
    ],
    [
      3200,
      {
        "./eip1559Transaction": 3196,
        "./eip2930Transaction": 3197,
        "./eip4844Transaction": 3198,
        "./kzg/kzg": 3201,
        "./legacyTransaction": 3202,
        "./transactionFactory": 3203,
        "./types": 3204,
        "./utils/blobHelpers": 3206
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.computeVersionedHash =
                    r.TransactionFactory =
                    r.Transaction =
                    r.kzg =
                    r.initKZG =
                    r.BlobEIP4844Transaction =
                    r.AccessListEIP2930Transaction =
                    r.FeeMarketEIP1559Transaction =
                      void 0);
                var o = e("./eip1559Transaction");
                Object.defineProperty(r, "FeeMarketEIP1559Transaction", {
                  enumerable: !0,
                  get: function () {
                    return o.FeeMarketEIP1559Transaction;
                  }
                });
                var s = e("./eip2930Transaction");
                Object.defineProperty(r, "AccessListEIP2930Transaction", {
                  enumerable: !0,
                  get: function () {
                    return s.AccessListEIP2930Transaction;
                  }
                });
                var a = e("./eip4844Transaction");
                Object.defineProperty(r, "BlobEIP4844Transaction", {
                  enumerable: !0,
                  get: function () {
                    return a.BlobEIP4844Transaction;
                  }
                });
                var c = e("./kzg/kzg");
                Object.defineProperty(r, "initKZG", {
                  enumerable: !0,
                  get: function () {
                    return c.initKZG;
                  }
                }),
                  Object.defineProperty(r, "kzg", {
                    enumerable: !0,
                    get: function () {
                      return c.kzg;
                    }
                  });
                var u = e("./legacyTransaction");
                Object.defineProperty(r, "Transaction", {
                  enumerable: !0,
                  get: function () {
                    return u.Transaction;
                  }
                });
                var l = e("./transactionFactory");
                Object.defineProperty(r, "TransactionFactory", {
                  enumerable: !0,
                  get: function () {
                    return l.TransactionFactory;
                  }
                }),
                  i(e("./types"), r);
                var d = e("./utils/blobHelpers");
                Object.defineProperty(r, "computeVersionedHash", {
                  enumerable: !0,
                  get: function () {
                    return d.computeVersionedHash;
                  }
                });
              };
            };
      },
      { package: "eth-lattice-keyring>@ethereumjs/tx", file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/index.js" }
    ],
    [
      3201,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n() {
                  throw Error("kzg library not loaded");
                }
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.initKZG = r.kzg = void 0),
                  (r.kzg = {
                    freeTrustedSetup: n,
                    loadTrustedSetup: n,
                    blobToKzgCommitment: n,
                    computeAggregateKzgProof: n,
                    verifyKzgProof: n,
                    verifyAggregateKzgProof: n
                  }),
                  (r.initKZG = function (e, t) {
                    (r.kzg = e), r.kzg.loadTrustedSetup(t);
                  });
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/kzg/kzg.js"
      }
    ],
    [
      3202,
      {
        "./baseTransaction": 3194,
        "./types": 3204,
        "./util": 3205,
        "@ethereumjs/rlp": 393,
        "@ethereumjs/util": 410,
        buffer: 2913,
        "ethereum-cryptography/keccak": 3207
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.Transaction = void 0);
                    const n = e("@ethereumjs/rlp"),
                      i = e("@ethereumjs/util"),
                      o = e("ethereum-cryptography/keccak"),
                      s = e("./baseTransaction"),
                      a = e("./types"),
                      c = e("./util");
                    function u(e, t) {
                      const r = Number(e),
                        n = 2 * Number(t);
                      return r === n + 35 || r === n + 36;
                    }
                    class l extends s.BaseTransaction {
                      constructor(e, t = {}) {
                        if (
                          (super({ ...e, type: 0 }, t),
                          (this.common = this._validateTxV(this.v, t.common)),
                          (this.gasPrice = (0, i.bufferToBigInt)((0, i.toBuffer)("" === e.gasPrice ? "0x" : e.gasPrice))),
                          this.gasPrice * this.gasLimit > i.MAX_INTEGER)
                        ) {
                          const e = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
                          throw new Error(e);
                        }
                        this._validateCannotExceedMaxInteger({ gasPrice: this.gasPrice }),
                          s.BaseTransaction._validateNotArray(e),
                          this.common.gteHardfork("spuriousDragon") &&
                            (this.isSigned()
                              ? u(this.v, this.common.chainId()) && this.activeCapabilities.push(a.Capability.EIP155ReplayProtection)
                              : this.activeCapabilities.push(a.Capability.EIP155ReplayProtection)),
                          this.common.isActivatedEIP(3860) && (0, c.checkMaxInitCodeSize)(this.common, this.data.length);
                        (t?.freeze ?? !0) && Object.freeze(this);
                      }
                      static fromTxData(e, t = {}) {
                        return new l(e, t);
                      }
                      static fromSerializedTx(e, t = {}) {
                        const r = (0, i.arrToBufArr)(n.RLP.decode(Uint8Array.from(e)));
                        if (!Array.isArray(r)) throw new Error("Invalid serialized tx input. Must be array");
                        return this.fromValuesArray(r, t);
                      }
                      static fromValuesArray(e, t = {}) {
                        if (6 !== e.length && 9 !== e.length)
                          throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
                        const [r, n, o, s, a, c, u, d, f] = e;
                        return (
                          (0, i.validateNoLeadingZeroes)({ nonce: r, gasPrice: n, gasLimit: o, value: a, v: u, r: d, s: f }),
                          new l({ nonce: r, gasPrice: n, gasLimit: o, to: s, value: a, data: c, v: u, r: d, s: f }, t)
                        );
                      }
                      raw() {
                        return [
                          (0, i.bigIntToUnpaddedBuffer)(this.nonce),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasPrice),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasLimit),
                          this.to !== undefined ? this.to.buf : t.from([]),
                          (0, i.bigIntToUnpaddedBuffer)(this.value),
                          this.data,
                          this.v !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.v) : t.from([]),
                          this.r !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.r) : t.from([]),
                          this.s !== undefined ? (0, i.bigIntToUnpaddedBuffer)(this.s) : t.from([])
                        ];
                      }
                      serialize() {
                        return t.from(n.RLP.encode((0, i.bufArrToArr)(this.raw())));
                      }
                      _getMessageToSign() {
                        const e = [
                          (0, i.bigIntToUnpaddedBuffer)(this.nonce),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasPrice),
                          (0, i.bigIntToUnpaddedBuffer)(this.gasLimit),
                          this.to !== undefined ? this.to.buf : t.from([]),
                          (0, i.bigIntToUnpaddedBuffer)(this.value),
                          this.data
                        ];
                        return (
                          this.supports(a.Capability.EIP155ReplayProtection) &&
                            (e.push((0, i.toBuffer)(this.common.chainId())),
                            e.push((0, i.unpadBuffer)((0, i.toBuffer)(0))),
                            e.push((0, i.unpadBuffer)((0, i.toBuffer)(0)))),
                          e
                        );
                      }
                      getMessageToSign(e = !0) {
                        const r = this._getMessageToSign();
                        return e ? t.from((0, o.keccak256)(n.RLP.encode((0, i.bufArrToArr)(r)))) : r;
                      }
                      getDataFee() {
                        return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()
                          ? this.cache.dataFee.value
                          : (Object.isFrozen(this) &&
                              (this.cache.dataFee = { value: super.getDataFee(), hardfork: this.common.hardfork() }),
                            super.getDataFee());
                      }
                      getUpfrontCost() {
                        return this.gasLimit * this.gasPrice + this.value;
                      }
                      hash() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("Cannot call hash method if transaction is not signed");
                          throw new Error(e);
                        }
                        return Object.isFrozen(this)
                          ? (this.cache.hash || (this.cache.hash = t.from((0, o.keccak256)(n.RLP.encode((0, i.bufArrToArr)(this.raw()))))),
                            this.cache.hash)
                          : t.from((0, o.keccak256)(n.RLP.encode((0, i.bufArrToArr)(this.raw()))));
                      }
                      getMessageToVerifySignature() {
                        if (!this.isSigned()) {
                          const e = this._errorMsg("This transaction is not signed");
                          throw new Error(e);
                        }
                        const e = this._getMessageToSign();
                        return t.from((0, o.keccak256)(n.RLP.encode((0, i.bufArrToArr)(e))));
                      }
                      getSenderPublicKey() {
                        const e = this.getMessageToVerifySignature(),
                          { v: t, r: r, s: n } = this;
                        this._validateHighS();
                        try {
                          return (0, i.ecrecover)(
                            e,
                            t,
                            (0, i.bigIntToUnpaddedBuffer)(r),
                            (0, i.bigIntToUnpaddedBuffer)(n),
                            this.supports(a.Capability.EIP155ReplayProtection) ? this.common.chainId() : undefined
                          );
                        } catch (e) {
                          const t = this._errorMsg("Invalid Signature");
                          throw new Error(t);
                        }
                      }
                      _processSignature(e, t, r) {
                        this.supports(a.Capability.EIP155ReplayProtection) && (e += this.common.chainId() * BigInt(2) + BigInt(8));
                        const n = { ...this.txOptions, common: this.common };
                        return l.fromTxData(
                          {
                            nonce: this.nonce,
                            gasPrice: this.gasPrice,
                            gasLimit: this.gasLimit,
                            to: this.to,
                            value: this.value,
                            data: this.data,
                            v: e,
                            r: (0, i.bufferToBigInt)(t),
                            s: (0, i.bufferToBigInt)(r)
                          },
                          n
                        );
                      }
                      toJSON() {
                        return {
                          nonce: (0, i.bigIntToHex)(this.nonce),
                          gasPrice: (0, i.bigIntToHex)(this.gasPrice),
                          gasLimit: (0, i.bigIntToHex)(this.gasLimit),
                          to: this.to !== undefined ? this.to.toString() : undefined,
                          value: (0, i.bigIntToHex)(this.value),
                          data: "0x" + this.data.toString("hex"),
                          v: this.v !== undefined ? (0, i.bigIntToHex)(this.v) : undefined,
                          r: this.r !== undefined ? (0, i.bigIntToHex)(this.r) : undefined,
                          s: this.s !== undefined ? (0, i.bigIntToHex)(this.s) : undefined
                        };
                      }
                      _validateTxV(e, t) {
                        let r;
                        const n = e !== undefined ? Number(e) : undefined;
                        if (n !== undefined && n < 37 && 27 !== n && 28 !== n)
                          throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${n}`);
                        if (n !== undefined && 0 !== n && (!t || t.gteHardfork("spuriousDragon")) && 27 !== n && 28 !== n)
                          if (t) {
                            if (!u(BigInt(n), t.chainId()))
                              throw new Error(
                                `Incompatible EIP155-based V ${n} and chain id ${t.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`
                              );
                          } else {
                            let e;
                            (e = (n - 35) % 2 == 0 ? 35 : 36), (r = BigInt(n - e) / BigInt(2));
                          }
                        return this._getCommon(t, r);
                      }
                      errorStr() {
                        let e = this._getSharedErrorPostfix();
                        return (e += ` gasPrice=${this.gasPrice}`), e;
                      }
                      _errorMsg(e) {
                        return `${e} (${this.errorStr()})`;
                      }
                    }
                    r.Transaction = l;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/legacyTransaction.js"
      }
    ],
    [
      3203,
      {
        "../../../../../is-buffer/index.js": 3838,
        "./eip1559Transaction": 3196,
        "./eip2930Transaction": 3197,
        "./eip4844Transaction": 3198,
        "./fromRpc": 3199,
        "./legacyTransaction": 3202,
        "@ethereumjs/util": 410,
        "@ethersproject/providers": 494
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.TransactionFactory = void 0);
                    const n = e("@ethereumjs/util"),
                      i = e("@ethersproject/providers"),
                      o = e("./eip1559Transaction"),
                      s = e("./eip2930Transaction"),
                      a = e("./eip4844Transaction"),
                      c = e("./fromRpc"),
                      u = e("./legacyTransaction");
                    class l {
                      constructor() {}
                      static fromTxData(e, t = {}) {
                        if ("type" in e && e.type !== undefined) {
                          const r = Number((0, n.bufferToBigInt)((0, n.toBuffer)(e.type)));
                          if (0 === r) return u.Transaction.fromTxData(e, t);
                          if (1 === r) return s.AccessListEIP2930Transaction.fromTxData(e, t);
                          if (2 === r) return o.FeeMarketEIP1559Transaction.fromTxData(e, t);
                          if (5 === r) return a.BlobEIP4844Transaction.fromTxData(e, t);
                          throw new Error(`Tx instantiation with type ${r} not supported`);
                        }
                        return u.Transaction.fromTxData(e, t);
                      }
                      static fromSerializedData(e, t = {}) {
                        if (!(e[0] <= 127)) return u.Transaction.fromSerializedTx(e, t);
                        switch (e[0]) {
                          case 1:
                            return s.AccessListEIP2930Transaction.fromSerializedTx(e, t);
                          case 2:
                            return o.FeeMarketEIP1559Transaction.fromSerializedTx(e, t);
                          case 5:
                            return a.BlobEIP4844Transaction.fromSerializedTx(e, t);
                          default:
                            throw new Error(`TypedTransaction with ID ${e[0]} unknown`);
                        }
                      }
                      static fromBlockBodyData(e, r = {}) {
                        if (t.isBuffer(e)) return this.fromSerializedData(e, r);
                        if (Array.isArray(e)) return u.Transaction.fromValuesArray(e, r);
                        throw new Error("Cannot decode transaction: unknown type input");
                      }
                      static async fromEthersProvider(e, t, r) {
                        const n = "string" == typeof e ? new i.JsonRpcProvider(e) : e,
                          o = await n.send("eth_getTransactionByHash", [t]),
                          s = (0, c.normalizeTxParams)(o);
                        return l.fromTxData(s, r);
                      }
                    }
                    r.TransactionFactory = l;
                  }).call(this);
                }).call(this, { isBuffer: e("../../../../../is-buffer/index.js") });
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/transactionFactory.js"
      }
    ],
    [
      3204,
      { "./constants": 3195, "@chainsafe/ssz": 254 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.BlobNetworkTransactionWrapper =
                    r.KZGProofType =
                    r.KZGCommitmentType =
                    r.SignedBlobTransactionType =
                    r.ECDSASignatureType =
                    r.BlobTransactionType =
                    r.AccessTupleType =
                    r.AddressType =
                    r.isAccessList =
                    r.isAccessListBuffer =
                    r.Capability =
                      void 0);
                const n = e("@chainsafe/ssz"),
                  i = e("./constants"),
                  o = new n.ByteVectorType(20),
                  s = new n.ByteVectorType(32),
                  a = new n.ByteVectorType(48),
                  c = new n.UintBigintType(8),
                  u = new n.UintBigintType(32);
                function l(e) {
                  if (0 === e.length) return !0;
                  const t = e[0];
                  return !!Array.isArray(t);
                }
                !(function (e) {
                  (e[(e.EIP155ReplayProtection = 155)] = "EIP155ReplayProtection"),
                    (e[(e.EIP1559FeeMarket = 1559)] = "EIP1559FeeMarket"),
                    (e[(e.EIP2718TypedTransaction = 2718)] = "EIP2718TypedTransaction"),
                    (e[(e.EIP2930AccessLists = 2930)] = "EIP2930AccessLists");
                })(r.Capability || (r.Capability = {})),
                  (r.isAccessListBuffer = l),
                  (r.isAccessList = function (e) {
                    return !l(e);
                  }),
                  (r.AddressType = o),
                  (r.AccessTupleType = new n.ContainerType({
                    address: r.AddressType,
                    storageKeys: new n.ListCompositeType(s, i.MAX_VERSIONED_HASHES_LIST_SIZE)
                  })),
                  (r.BlobTransactionType = new n.ContainerType({
                    chainId: u,
                    nonce: c,
                    maxPriorityFeePerGas: u,
                    maxFeePerGas: u,
                    gas: c,
                    to: new n.UnionType([new n.NoneType(), r.AddressType]),
                    value: u,
                    data: new n.ByteListType(i.MAX_CALLDATA_SIZE),
                    accessList: new n.ListCompositeType(r.AccessTupleType, i.MAX_ACCESS_LIST_SIZE),
                    maxFeePerDataGas: u,
                    blobVersionedHashes: new n.ListCompositeType(s, i.MAX_VERSIONED_HASHES_LIST_SIZE)
                  })),
                  (r.ECDSASignatureType = new n.ContainerType({ yParity: new n.BooleanType(), r: u, s: u })),
                  (r.SignedBlobTransactionType = new n.ContainerType({ message: r.BlobTransactionType, signature: r.ECDSASignatureType })),
                  (r.KZGCommitmentType = a),
                  (r.KZGProofType = r.KZGCommitmentType),
                  (r.BlobNetworkTransactionWrapper = new n.ContainerType({
                    tx: r.SignedBlobTransactionType,
                    blobKzgs: new n.ListCompositeType(r.KZGCommitmentType, i.MAX_TX_WRAP_KZG_COMMITMENTS),
                    blobs: new n.ListCompositeType(
                      new n.ByteVectorType(i.FIELD_ELEMENTS_PER_BLOB * i.BYTES_PER_FIELD_ELEMENT),
                      i.LIMIT_BLOBS_PER_TX
                    ),
                    kzgAggregatedProof: r.KZGProofType
                  }));
              };
            };
      },
      { package: "eth-lattice-keyring>@ethereumjs/tx", file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/types.js" }
    ],
    [
      3205,
      { "./types": 3204, "@ethereumjs/util": 410 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.blobTxToNetworkWrapperDataFormat = r.AccessLists = r.checkMaxInitCodeSize = void 0);
                const n = e("@ethereumjs/util"),
                  i = e("./types");
                r.checkMaxInitCodeSize = function (e, t) {
                  const r = e.param("vm", "maxInitCodeSize");
                  if (r && BigInt(t) > r)
                    throw new Error(
                      `the initcode size of this transaction is too large: it is ${t} while the max is ${e.param("vm", "maxInitCodeSize")}`
                    );
                };
                r.AccessLists = class {
                  static getAccessListData(e) {
                    let t, r;
                    if ((0, i.isAccessList)(e)) {
                      t = e;
                      const i = [];
                      for (let t = 0; t < e.length; t++) {
                        const r = e[t],
                          o = (0, n.toBuffer)(r.address),
                          s = [];
                        for (let e = 0; e < r.storageKeys.length; e++) s.push((0, n.toBuffer)(r.storageKeys[e]));
                        i.push([o, s]);
                      }
                      r = i;
                    } else {
                      r = e ?? [];
                      const i = [];
                      for (let e = 0; e < r.length; e++) {
                        const t = r[e],
                          o = (0, n.bufferToHex)(t[0]),
                          s = [];
                        for (let e = 0; e < t[1].length; e++) s.push((0, n.bufferToHex)(t[1][e]));
                        const a = { address: o, storageKeys: s };
                        i.push(a);
                      }
                      t = i;
                    }
                    return { AccessListJSON: t, accessList: r };
                  }
                  static verifyAccessList(e) {
                    for (let t = 0; t < e.length; t++) {
                      const r = e[t],
                        n = r[0],
                        i = r[1];
                      if (r[2] !== undefined)
                        throw new Error(
                          "Access list item cannot have 3 elements. It can only have an address, and an array of storage slots."
                        );
                      if (20 !== n.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
                      for (let e = 0; e < i.length; e++)
                        if (32 !== i[e].length) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
                    }
                  }
                  static getAccessListJSON(e) {
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                      const i = e[r],
                        o = { address: "0x" + (0, n.setLengthLeft)(i[0], 20).toString("hex"), storageKeys: [] },
                        s = i[1];
                      for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        o.storageKeys.push("0x" + (0, n.setLengthLeft)(t, 32).toString("hex"));
                      }
                      t.push(o);
                    }
                    return t;
                  }
                  static getDataFeeEIP2930(e, t) {
                    const r = t.param("gasPrices", "accessListStorageKeyCost"),
                      n = t.param("gasPrices", "accessListAddressCost");
                    let i = 0;
                    for (let t = 0; t < e.length; t++) {
                      i += e[t][1].length;
                    }
                    return e.length * Number(n) + i * Number(r);
                  }
                };
                r.blobTxToNetworkWrapperDataFormat = (e) => {
                  const t = { selector: e.to !== undefined ? 1 : 0, value: e.to?.toBuffer() ?? null };
                  return {
                    message: {
                      chainId: e.common.chainId(),
                      nonce: e.nonce,
                      maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                      maxFeePerGas: e.maxFeePerGas,
                      gas: e.gasLimit,
                      to: t,
                      value: e.value,
                      data: e.data,
                      accessList: e.accessList.map((e) => ({ address: e[0], storageKeys: e[1] })),
                      blobVersionedHashes: e.versionedHashes,
                      maxFeePerDataGas: e.maxFeePerDataGas
                    },
                    signature: { r: e.r ?? BigInt(0), s: e.s ?? BigInt(0), yParity: e.v === BigInt(1) }
                  };
                };
              };
            };
      },
      { package: "eth-lattice-keyring>@ethereumjs/tx", file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/util.js" }
    ],
    [
      3206,
      { "../kzg/kzg": 3201, buffer: 2913, "ethereum-cryptography/sha256": 3215 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.commitmentsToVersionedHashes = r.computeVersionedHash = r.blobsToCommitments = r.getBlobs = void 0);
                    const n = e("ethereum-cryptography/sha256"),
                      i = e("../kzg/kzg"),
                      o = 4096,
                      s = 131072;
                    function a(e) {
                      const r = t.alloc(131072, "binary");
                      for (let n = 0; n < o; n++) {
                        const i = t.alloc(32, "binary");
                        i.fill(e.subarray(31 * n, 31 * (n + 1)), 0, 31), r.fill(i, 32 * n, 32 * (n + 1));
                      }
                      return r;
                    }
                    r.getBlobs = (e) => {
                      const r = t.from(e, "binary"),
                        n = t.byteLength(r);
                      if (0 === n) throw Error("invalid blob data");
                      if (n > 262143) throw Error("blob data is too large");
                      const i = Math.ceil(n / s),
                        o = (function (e, r) {
                          const n = t.alloc(r * s),
                            i = t.byteLength(e);
                          return n.fill(e, 0, i), (n[i] = 128), n;
                        })(r, i),
                        c = [];
                      for (let e = 0; e < i; e++) {
                        const t = a(o.subarray(e * s, (e + 1) * s));
                        c.push(t);
                      }
                      return c;
                    };
                    r.blobsToCommitments = (e) => {
                      const r = [];
                      for (const n of e) r.push(t.from(i.kzg.blobToKzgCommitment(n)));
                      return r;
                    };
                    r.computeVersionedHash = (e, t) => {
                      const r = new Uint8Array(32);
                      return r.set([t], 0), r.set((0, n.sha256)(e).slice(1), 1), r;
                    };
                    r.commitmentsToVersionedHashes = (e) => {
                      const n = [];
                      for (const i of e) n.push(t.from((0, r.computeVersionedHash)(i, 1)));
                      return n;
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx",
        file: "node_modules/eth-lattice-keyring/node_modules/@ethereumjs/tx/dist/utils/blobHelpers.js"
      }
    ],
    [
      3207,
      { "./utils": 3216, "@noble/hashes/sha3": 3213 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.keccak512 = r.keccak384 = r.keccak256 = r.keccak224 = void 0);
                const n = e("@noble/hashes/sha3"),
                  i = e("./utils");
                (r.keccak224 = (0, i.wrapHash)(n.keccak_224)),
                  (r.keccak256 = (() => {
                    const e = (0, i.wrapHash)(n.keccak_256);
                    return (e.create = n.keccak_256.create), e;
                  })()),
                  (r.keccak384 = (0, i.wrapHash)(n.keccak_384)),
                  (r.keccak512 = (0, i.wrapHash)(n.keccak_512));
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/keccak.js"
      }
    ],
    [
      3208,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e) {
                  if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`);
                }
                function i(e) {
                  if ("boolean" != typeof e) throw new Error(`Expected boolean, not ${e}`);
                }
                function o(e, ...t) {
                  if (!(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                  if (t.length > 0 && !t.includes(e.length))
                    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
                }
                function s(e) {
                  if ("function" != typeof e || "function" != typeof e.create)
                    throw new Error("Hash should be wrapped by utils.wrapConstructor");
                  n(e.outputLen), n(e.blockLen);
                }
                function a(e, t = !0) {
                  if (e.destroyed) throw new Error("Hash instance has been destroyed");
                  if (t && e.finished) throw new Error("Hash#digest() has already been called");
                }
                function c(e, t) {
                  o(e);
                  const r = t.outputLen;
                  if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
                }
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.output = r.exists = r.hash = r.bytes = r.bool = r.number = void 0),
                  (r.number = n),
                  (r.bool = i),
                  (r.bytes = o),
                  (r.hash = s),
                  (r.exists = a),
                  (r.output = c);
                const u = { number: n, bool: i, bytes: o, hash: s, exists: a, output: c };
                r.default = u;
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/_assert.js"
      }
    ],
    [
      3209,
      { "./_assert.js": 3208, "./utils.js": 3214 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.SHA2 = void 0);
                const n = e("./_assert.js"),
                  i = e("./utils.js");
                class o extends i.Hash {
                  constructor(e, t, r, n) {
                    super(),
                      (this.blockLen = e),
                      (this.outputLen = t),
                      (this.padOffset = r),
                      (this.isLE = n),
                      (this.finished = !1),
                      (this.length = 0),
                      (this.pos = 0),
                      (this.destroyed = !1),
                      (this.buffer = new Uint8Array(e)),
                      (this.view = (0, i.createView)(this.buffer));
                  }
                  update(e) {
                    n.default.exists(this);
                    const { view: t, buffer: r, blockLen: o } = this,
                      s = (e = (0, i.toBytes)(e)).length;
                    for (let n = 0; n < s; ) {
                      const a = Math.min(o - this.pos, s - n);
                      if (a !== o)
                        r.set(e.subarray(n, n + a), this.pos),
                          (this.pos += a),
                          (n += a),
                          this.pos === o && (this.process(t, 0), (this.pos = 0));
                      else {
                        const t = (0, i.createView)(e);
                        for (; o <= s - n; n += o) this.process(t, n);
                      }
                    }
                    return (this.length += e.length), this.roundClean(), this;
                  }
                  digestInto(e) {
                    n.default.exists(this), n.default.output(e, this), (this.finished = !0);
                    const { buffer: t, view: r, blockLen: o, isLE: s } = this;
                    let { pos: a } = this;
                    (t[a++] = 128), this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(r, 0), (a = 0));
                    for (let e = a; e < o; e++) t[e] = 0;
                    !(function (e, t, r, n) {
                      if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                      const i = BigInt(32),
                        o = BigInt(4294967295),
                        s = Number((r >> i) & o),
                        a = Number(r & o),
                        c = n ? 4 : 0,
                        u = n ? 0 : 4;
                      e.setUint32(t + c, s, n), e.setUint32(t + u, a, n);
                    })(r, o - 8, BigInt(8 * this.length), s),
                      this.process(r, 0);
                    const c = (0, i.createView)(e);
                    this.get().forEach((e, t) => c.setUint32(4 * t, e, s));
                  }
                  digest() {
                    const { buffer: e, outputLen: t } = this;
                    this.digestInto(e);
                    const r = e.slice(0, t);
                    return this.destroy(), r;
                  }
                  _cloneInto(e) {
                    e || (e = new this.constructor()), e.set(...this.get());
                    const { blockLen: t, buffer: r, length: n, finished: i, destroyed: o, pos: s } = this;
                    return (e.length = n), (e.pos = s), (e.finished = i), (e.destroyed = o), n % t && e.buffer.set(r), e;
                  }
                }
                r.SHA2 = o;
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/_sha2.js"
      }
    ],
    [
      321,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = Object.freeze({
                  identity: 0,
                  sha1: 17,
                  "sha2-256": 18,
                  "sha2-512": 19,
                  "sha3-512": 20,
                  "sha3-384": 21,
                  "sha3-256": 22,
                  "sha3-224": 23,
                  "shake-128": 24,
                  "shake-256": 25,
                  "keccak-224": 26,
                  "keccak-256": 27,
                  "keccak-384": 28,
                  "keccak-512": 29,
                  blake3: 30,
                  "murmur3-128": 34,
                  "murmur3-32": 35,
                  "dbl-sha2-256": 86,
                  md4: 212,
                  md5: 213,
                  bmt: 214,
                  "sha2-256-trunc254-padded": 4114,
                  "ripemd-128": 4178,
                  "ripemd-160": 4179,
                  "ripemd-256": 4180,
                  "ripemd-320": 4181,
                  x11: 4352,
                  "sm3-256": 21325,
                  "blake2b-8": 45569,
                  "blake2b-16": 45570,
                  "blake2b-24": 45571,
                  "blake2b-32": 45572,
                  "blake2b-40": 45573,
                  "blake2b-48": 45574,
                  "blake2b-56": 45575,
                  "blake2b-64": 45576,
                  "blake2b-72": 45577,
                  "blake2b-80": 45578,
                  "blake2b-88": 45579,
                  "blake2b-96": 45580,
                  "blake2b-104": 45581,
                  "blake2b-112": 45582,
                  "blake2b-120": 45583,
                  "blake2b-128": 45584,
                  "blake2b-136": 45585,
                  "blake2b-144": 45586,
                  "blake2b-152": 45587,
                  "blake2b-160": 45588,
                  "blake2b-168": 45589,
                  "blake2b-176": 45590,
                  "blake2b-184": 45591,
                  "blake2b-192": 45592,
                  "blake2b-200": 45593,
                  "blake2b-208": 45594,
                  "blake2b-216": 45595,
                  "blake2b-224": 45596,
                  "blake2b-232": 45597,
                  "blake2b-240": 45598,
                  "blake2b-248": 45599,
                  "blake2b-256": 45600,
                  "blake2b-264": 45601,
                  "blake2b-272": 45602,
                  "blake2b-280": 45603,
                  "blake2b-288": 45604,
                  "blake2b-296": 45605,
                  "blake2b-304": 45606,
                  "blake2b-312": 45607,
                  "blake2b-320": 45608,
                  "blake2b-328": 45609,
                  "blake2b-336": 45610,
                  "blake2b-344": 45611,
                  "blake2b-352": 45612,
                  "blake2b-360": 45613,
                  "blake2b-368": 45614,
                  "blake2b-376": 45615,
                  "blake2b-384": 45616,
                  "blake2b-392": 45617,
                  "blake2b-400": 45618,
                  "blake2b-408": 45619,
                  "blake2b-416": 45620,
                  "blake2b-424": 45621,
                  "blake2b-432": 45622,
                  "blake2b-440": 45623,
                  "blake2b-448": 45624,
                  "blake2b-456": 45625,
                  "blake2b-464": 45626,
                  "blake2b-472": 45627,
                  "blake2b-480": 45628,
                  "blake2b-488": 45629,
                  "blake2b-496": 45630,
                  "blake2b-504": 45631,
                  "blake2b-512": 45632,
                  "blake2s-8": 45633,
                  "blake2s-16": 45634,
                  "blake2s-24": 45635,
                  "blake2s-32": 45636,
                  "blake2s-40": 45637,
                  "blake2s-48": 45638,
                  "blake2s-56": 45639,
                  "blake2s-64": 45640,
                  "blake2s-72": 45641,
                  "blake2s-80": 45642,
                  "blake2s-88": 45643,
                  "blake2s-96": 45644,
                  "blake2s-104": 45645,
                  "blake2s-112": 45646,
                  "blake2s-120": 45647,
                  "blake2s-128": 45648,
                  "blake2s-136": 45649,
                  "blake2s-144": 45650,
                  "blake2s-152": 45651,
                  "blake2s-160": 45652,
                  "blake2s-168": 45653,
                  "blake2s-176": 45654,
                  "blake2s-184": 45655,
                  "blake2s-192": 45656,
                  "blake2s-200": 45657,
                  "blake2s-208": 45658,
                  "blake2s-216": 45659,
                  "blake2s-224": 45660,
                  "blake2s-232": 45661,
                  "blake2s-240": 45662,
                  "blake2s-248": 45663,
                  "blake2s-256": 45664,
                  "skein256-8": 45825,
                  "skein256-16": 45826,
                  "skein256-24": 45827,
                  "skein256-32": 45828,
                  "skein256-40": 45829,
                  "skein256-48": 45830,
                  "skein256-56": 45831,
                  "skein256-64": 45832,
                  "skein256-72": 45833,
                  "skein256-80": 45834,
                  "skein256-88": 45835,
                  "skein256-96": 45836,
                  "skein256-104": 45837,
                  "skein256-112": 45838,
                  "skein256-120": 45839,
                  "skein256-128": 45840,
                  "skein256-136": 45841,
                  "skein256-144": 45842,
                  "skein256-152": 45843,
                  "skein256-160": 45844,
                  "skein256-168": 45845,
                  "skein256-176": 45846,
                  "skein256-184": 45847,
                  "skein256-192": 45848,
                  "skein256-200": 45849,
                  "skein256-208": 45850,
                  "skein256-216": 45851,
                  "skein256-224": 45852,
                  "skein256-232": 45853,
                  "skein256-240": 45854,
                  "skein256-248": 45855,
                  "skein256-256": 45856,
                  "skein512-8": 45857,
                  "skein512-16": 45858,
                  "skein512-24": 45859,
                  "skein512-32": 45860,
                  "skein512-40": 45861,
                  "skein512-48": 45862,
                  "skein512-56": 45863,
                  "skein512-64": 45864,
                  "skein512-72": 45865,
                  "skein512-80": 45866,
                  "skein512-88": 45867,
                  "skein512-96": 45868,
                  "skein512-104": 45869,
                  "skein512-112": 45870,
                  "skein512-120": 45871,
                  "skein512-128": 45872,
                  "skein512-136": 45873,
                  "skein512-144": 45874,
                  "skein512-152": 45875,
                  "skein512-160": 45876,
                  "skein512-168": 45877,
                  "skein512-176": 45878,
                  "skein512-184": 45879,
                  "skein512-192": 45880,
                  "skein512-200": 45881,
                  "skein512-208": 45882,
                  "skein512-216": 45883,
                  "skein512-224": 45884,
                  "skein512-232": 45885,
                  "skein512-240": 45886,
                  "skein512-248": 45887,
                  "skein512-256": 45888,
                  "skein512-264": 45889,
                  "skein512-272": 45890,
                  "skein512-280": 45891,
                  "skein512-288": 45892,
                  "skein512-296": 45893,
                  "skein512-304": 45894,
                  "skein512-312": 45895,
                  "skein512-320": 45896,
                  "skein512-328": 45897,
                  "skein512-336": 45898,
                  "skein512-344": 45899,
                  "skein512-352": 45900,
                  "skein512-360": 45901,
                  "skein512-368": 45902,
                  "skein512-376": 45903,
                  "skein512-384": 45904,
                  "skein512-392": 45905,
                  "skein512-400": 45906,
                  "skein512-408": 45907,
                  "skein512-416": 45908,
                  "skein512-424": 45909,
                  "skein512-432": 45910,
                  "skein512-440": 45911,
                  "skein512-448": 45912,
                  "skein512-456": 45913,
                  "skein512-464": 45914,
                  "skein512-472": 45915,
                  "skein512-480": 45916,
                  "skein512-488": 45917,
                  "skein512-496": 45918,
                  "skein512-504": 45919,
                  "skein512-512": 45920,
                  "skein1024-8": 45921,
                  "skein1024-16": 45922,
                  "skein1024-24": 45923,
                  "skein1024-32": 45924,
                  "skein1024-40": 45925,
                  "skein1024-48": 45926,
                  "skein1024-56": 45927,
                  "skein1024-64": 45928,
                  "skein1024-72": 45929,
                  "skein1024-80": 45930,
                  "skein1024-88": 45931,
                  "skein1024-96": 45932,
                  "skein1024-104": 45933,
                  "skein1024-112": 45934,
                  "skein1024-120": 45935,
                  "skein1024-128": 45936,
                  "skein1024-136": 45937,
                  "skein1024-144": 45938,
                  "skein1024-152": 45939,
                  "skein1024-160": 45940,
                  "skein1024-168": 45941,
                  "skein1024-176": 45942,
                  "skein1024-184": 45943,
                  "skein1024-192": 45944,
                  "skein1024-200": 45945,
                  "skein1024-208": 45946,
                  "skein1024-216": 45947,
                  "skein1024-224": 45948,
                  "skein1024-232": 45949,
                  "skein1024-240": 45950,
                  "skein1024-248": 45951,
                  "skein1024-256": 45952,
                  "skein1024-264": 45953,
                  "skein1024-272": 45954,
                  "skein1024-280": 45955,
                  "skein1024-288": 45956,
                  "skein1024-296": 45957,
                  "skein1024-304": 45958,
                  "skein1024-312": 45959,
                  "skein1024-320": 45960,
                  "skein1024-328": 45961,
                  "skein1024-336": 45962,
                  "skein1024-344": 45963,
                  "skein1024-352": 45964,
                  "skein1024-360": 45965,
                  "skein1024-368": 45966,
                  "skein1024-376": 45967,
                  "skein1024-384": 45968,
                  "skein1024-392": 45969,
                  "skein1024-400": 45970,
                  "skein1024-408": 45971,
                  "skein1024-416": 45972,
                  "skein1024-424": 45973,
                  "skein1024-432": 45974,
                  "skein1024-440": 45975,
                  "skein1024-448": 45976,
                  "skein1024-456": 45977,
                  "skein1024-464": 45978,
                  "skein1024-472": 45979,
                  "skein1024-480": 45980,
                  "skein1024-488": 45981,
                  "skein1024-496": 45982,
                  "skein1024-504": 45983,
                  "skein1024-512": 45984,
                  "skein1024-520": 45985,
                  "skein1024-528": 45986,
                  "skein1024-536": 45987,
                  "skein1024-544": 45988,
                  "skein1024-552": 45989,
                  "skein1024-560": 45990,
                  "skein1024-568": 45991,
                  "skein1024-576": 45992,
                  "skein1024-584": 45993,
                  "skein1024-592": 45994,
                  "skein1024-600": 45995,
                  "skein1024-608": 45996,
                  "skein1024-616": 45997,
                  "skein1024-624": 45998,
                  "skein1024-632": 45999,
                  "skein1024-640": 46e3,
                  "skein1024-648": 46001,
                  "skein1024-656": 46002,
                  "skein1024-664": 46003,
                  "skein1024-672": 46004,
                  "skein1024-680": 46005,
                  "skein1024-688": 46006,
                  "skein1024-696": 46007,
                  "skein1024-704": 46008,
                  "skein1024-712": 46009,
                  "skein1024-720": 46010,
                  "skein1024-728": 46011,
                  "skein1024-736": 46012,
                  "skein1024-744": 46013,
                  "skein1024-752": 46014,
                  "skein1024-760": 46015,
                  "skein1024-768": 46016,
                  "skein1024-776": 46017,
                  "skein1024-784": 46018,
                  "skein1024-792": 46019,
                  "skein1024-800": 46020,
                  "skein1024-808": 46021,
                  "skein1024-816": 46022,
                  "skein1024-824": 46023,
                  "skein1024-832": 46024,
                  "skein1024-840": 46025,
                  "skein1024-848": 46026,
                  "skein1024-856": 46027,
                  "skein1024-864": 46028,
                  "skein1024-872": 46029,
                  "skein1024-880": 46030,
                  "skein1024-888": 46031,
                  "skein1024-896": 46032,
                  "skein1024-904": 46033,
                  "skein1024-912": 46034,
                  "skein1024-920": 46035,
                  "skein1024-928": 46036,
                  "skein1024-936": 46037,
                  "skein1024-944": 46038,
                  "skein1024-952": 46039,
                  "skein1024-960": 46040,
                  "skein1024-968": 46041,
                  "skein1024-976": 46042,
                  "skein1024-984": 46043,
                  "skein1024-992": 46044,
                  "skein1024-1000": 46045,
                  "skein1024-1008": 46046,
                  "skein1024-1016": 46047,
                  "skein1024-1024": 46048,
                  "poseidon-bls12_381-a2-fc1": 46081,
                  "poseidon-bls12_381-a2-fc1-sc": 46082
                });
                t.exports = { names: n };
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multihashes",
        file: "node_modules/@ensdomains/content-hash/node_modules/multihashes/src/constants.js"
      }
    ],
    [
      3210,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.add = r.toBig = r.split = r.fromBig = void 0);
                const n = BigInt(2 ** 32 - 1),
                  i = BigInt(32);
                function o(e, t = !1) {
                  return t ? { h: Number(e & n), l: Number((e >> i) & n) } : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) };
                }
                function s(e, t = !1) {
                  let r = new Uint32Array(e.length),
                    n = new Uint32Array(e.length);
                  for (let i = 0; i < e.length; i++) {
                    const { h: s, l: a } = o(e[i], t);
                    [r[i], n[i]] = [s, a];
                  }
                  return [r, n];
                }
                (r.fromBig = o), (r.split = s);
                r.toBig = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
                function a(e, t, r, n) {
                  const i = (t >>> 0) + (n >>> 0);
                  return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
                }
                r.add = a;
                const c = {
                  fromBig: o,
                  split: s,
                  toBig: r.toBig,
                  shrSH: (e, t, r) => e >>> r,
                  shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
                  rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
                  rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
                  rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
                  rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
                  rotr32H: (e, t) => t,
                  rotr32L: (e, t) => e,
                  rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
                  rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
                  rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
                  rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
                  add: a,
                  add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
                  add3H: (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
                  add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
                  add4H: (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0,
                  add5H: (e, t, r, n, i, o) => (t + r + n + i + o + ((e / 2 ** 32) | 0)) | 0,
                  add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
                };
                r.default = c;
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/_u64.js"
      }
    ],
    [
      3211,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.crypto = void 0),
                  (r.crypto = { node: undefined, web: "object" == typeof self && "crypto" in self ? self.crypto : undefined });
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/cryptoBrowser.js"
      }
    ],
    [
      3212,
      { "./_sha2.js": 3209, "./utils.js": 3214 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.sha256 = void 0);
                const n = e("./_sha2.js"),
                  i = e("./utils.js"),
                  o = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
                  s = new Uint32Array([
                    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                    607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628,
                    770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
                    659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                    2428436474, 2756734187, 3204031479, 3329325298
                  ]),
                  a = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                  c = new Uint32Array(64);
                class u extends n.SHA2 {
                  constructor() {
                    super(64, 32, 8, !1),
                      (this.A = 0 | a[0]),
                      (this.B = 0 | a[1]),
                      (this.C = 0 | a[2]),
                      (this.D = 0 | a[3]),
                      (this.E = 0 | a[4]),
                      (this.F = 0 | a[5]),
                      (this.G = 0 | a[6]),
                      (this.H = 0 | a[7]);
                  }
                  get() {
                    const { A: e, B: t, C: r, D: n, E: i, F: o, G: s, H: a } = this;
                    return [e, t, r, n, i, o, s, a];
                  }
                  set(e, t, r, n, i, o, s, a) {
                    (this.A = 0 | e),
                      (this.B = 0 | t),
                      (this.C = 0 | r),
                      (this.D = 0 | n),
                      (this.E = 0 | i),
                      (this.F = 0 | o),
                      (this.G = 0 | s),
                      (this.H = 0 | a);
                  }
                  process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) c[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                      const t = c[e - 15],
                        r = c[e - 2],
                        n = (0, i.rotr)(t, 7) ^ (0, i.rotr)(t, 18) ^ (t >>> 3),
                        o = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ (r >>> 10);
                      c[e] = (o + c[e - 7] + n + c[e - 16]) | 0;
                    }
                    let { A: r, B: n, C: a, D: u, E: l, F: d, G: f, H: h } = this;
                    for (let e = 0; e < 64; e++) {
                      const t =
                          (h + ((0, i.rotr)(l, 6) ^ (0, i.rotr)(l, 11) ^ (0, i.rotr)(l, 25)) + (((p = l) & d) ^ (~p & f)) + s[e] + c[e]) |
                          0,
                        m = (((0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22)) + o(r, n, a)) | 0;
                      (h = f), (f = d), (d = l), (l = (u + t) | 0), (u = a), (a = n), (n = r), (r = (t + m) | 0);
                    }
                    var p;
                    (r = (r + this.A) | 0),
                      (n = (n + this.B) | 0),
                      (a = (a + this.C) | 0),
                      (u = (u + this.D) | 0),
                      (l = (l + this.E) | 0),
                      (d = (d + this.F) | 0),
                      (f = (f + this.G) | 0),
                      (h = (h + this.H) | 0),
                      this.set(r, n, a, u, l, d, f, h);
                  }
                  roundClean() {
                    c.fill(0);
                  }
                  destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
                  }
                }
                r.sha256 = (0, i.wrapConstructor)(() => new u());
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/sha256.js"
      }
    ],
    [
      3213,
      { "./_assert.js": 3208, "./_u64.js": 3210, "./utils.js": 3214 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.shake256 =
                    r.shake128 =
                    r.keccak_512 =
                    r.keccak_384 =
                    r.keccak_256 =
                    r.keccak_224 =
                    r.sha3_512 =
                    r.sha3_384 =
                    r.sha3_256 =
                    r.sha3_224 =
                    r.Keccak =
                    r.keccakP =
                      void 0);
                const n = e("./_assert.js"),
                  i = e("./_u64.js"),
                  o = e("./utils.js"),
                  [s, a, c] = [[], [], []],
                  u = BigInt(0),
                  l = BigInt(1),
                  d = BigInt(2),
                  f = BigInt(7),
                  h = BigInt(256),
                  p = BigInt(113);
                for (let e = 0, t = l, r = 1, n = 0; e < 24; e++) {
                  ([r, n] = [n, (2 * r + 3 * n) % 5]), s.push(2 * (5 * n + r)), a.push((((e + 1) * (e + 2)) / 2) % 64);
                  let i = u;
                  for (let e = 0; e < 7; e++) (t = ((t << l) ^ ((t >> f) * p)) % h), t & d && (i ^= l << ((l << BigInt(e)) - l));
                  c.push(i);
                }
                const [m, g] = i.default.split(c, !0),
                  y = (e, t, r) => (r > 32 ? i.default.rotlBH(e, t, r) : i.default.rotlSH(e, t, r)),
                  b = (e, t, r) => (r > 32 ? i.default.rotlBL(e, t, r) : i.default.rotlSL(e, t, r));
                function v(e, t = 24) {
                  const r = new Uint32Array(10);
                  for (let n = 24 - t; n < 24; n++) {
                    for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                    for (let t = 0; t < 10; t += 2) {
                      const n = (t + 8) % 10,
                        i = (t + 2) % 10,
                        o = r[i],
                        s = r[i + 1],
                        a = y(o, s, 1) ^ r[n],
                        c = b(o, s, 1) ^ r[n + 1];
                      for (let r = 0; r < 50; r += 10) (e[t + r] ^= a), (e[t + r + 1] ^= c);
                    }
                    let t = e[2],
                      i = e[3];
                    for (let r = 0; r < 24; r++) {
                      const n = a[r],
                        o = y(t, i, n),
                        c = b(t, i, n),
                        u = s[r];
                      (t = e[u]), (i = e[u + 1]), (e[u] = o), (e[u + 1] = c);
                    }
                    for (let t = 0; t < 50; t += 10) {
                      for (let n = 0; n < 10; n++) r[n] = e[t + n];
                      for (let n = 0; n < 10; n++) e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                    }
                    (e[0] ^= m[n]), (e[1] ^= g[n]);
                  }
                  r.fill(0);
                }
                r.keccakP = v;
                class w extends o.Hash {
                  constructor(e, t, r, i = !1, s = 24) {
                    if (
                      (super(),
                      (this.blockLen = e),
                      (this.suffix = t),
                      (this.outputLen = r),
                      (this.enableXOF = i),
                      (this.rounds = s),
                      (this.pos = 0),
                      (this.posOut = 0),
                      (this.finished = !1),
                      (this.destroyed = !1),
                      n.default.number(r),
                      0 >= this.blockLen || this.blockLen >= 200)
                    )
                      throw new Error("Sha3 supports only keccak-f1600 function");
                    (this.state = new Uint8Array(200)), (this.state32 = (0, o.u32)(this.state));
                  }
                  keccak() {
                    v(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
                  }
                  update(e) {
                    n.default.exists(this);
                    const { blockLen: t, state: r } = this,
                      i = (e = (0, o.toBytes)(e)).length;
                    for (let n = 0; n < i; ) {
                      const o = Math.min(t - this.pos, i - n);
                      for (let t = 0; t < o; t++) r[this.pos++] ^= e[n++];
                      this.pos === t && this.keccak();
                    }
                    return this;
                  }
                  finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    const { state: e, suffix: t, pos: r, blockLen: n } = this;
                    (e[r] ^= t), 0 != (128 & t) && r === n - 1 && this.keccak(), (e[n - 1] ^= 128), this.keccak();
                  }
                  writeInto(e) {
                    n.default.exists(this, !1), n.default.bytes(e), this.finish();
                    const t = this.state,
                      { blockLen: r } = this;
                    for (let n = 0, i = e.length; n < i; ) {
                      this.posOut >= r && this.keccak();
                      const o = Math.min(r - this.posOut, i - n);
                      e.set(t.subarray(this.posOut, this.posOut + o), n), (this.posOut += o), (n += o);
                    }
                    return e;
                  }
                  xofInto(e) {
                    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
                    return this.writeInto(e);
                  }
                  xof(e) {
                    return n.default.number(e), this.xofInto(new Uint8Array(e));
                  }
                  digestInto(e) {
                    if ((n.default.output(e, this), this.finished)) throw new Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e;
                  }
                  digest() {
                    return this.digestInto(new Uint8Array(this.outputLen));
                  }
                  destroy() {
                    (this.destroyed = !0), this.state.fill(0);
                  }
                  _cloneInto(e) {
                    const { blockLen: t, suffix: r, outputLen: n, rounds: i, enableXOF: o } = this;
                    return (
                      e || (e = new w(t, r, n, o, i)),
                      e.state32.set(this.state32),
                      (e.pos = this.pos),
                      (e.posOut = this.posOut),
                      (e.finished = this.finished),
                      (e.rounds = i),
                      (e.suffix = r),
                      (e.outputLen = n),
                      (e.enableXOF = o),
                      (e.destroyed = this.destroyed),
                      e
                    );
                  }
                }
                r.Keccak = w;
                const k = (e, t, r) => (0, o.wrapConstructor)(() => new w(t, e, r));
                (r.sha3_224 = k(6, 144, 28)),
                  (r.sha3_256 = k(6, 136, 32)),
                  (r.sha3_384 = k(6, 104, 48)),
                  (r.sha3_512 = k(6, 72, 64)),
                  (r.keccak_224 = k(1, 144, 28)),
                  (r.keccak_256 = k(1, 136, 32)),
                  (r.keccak_384 = k(1, 104, 48)),
                  (r.keccak_512 = k(1, 72, 64));
                const E = (e, t, r) => (0, o.wrapConstructorWithOpts)((n = {}) => new w(t, e, n.dkLen === undefined ? r : n.dkLen, !0));
                (r.shake128 = E(31, 168, 16)), (r.shake256 = E(31, 136, 32));
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/sha3.js"
      }
    ],
    [
      3214,
      { "@noble/hashes/crypto": 3211 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.randomBytes =
                    r.wrapConstructorWithOpts =
                    r.wrapConstructor =
                    r.checkOpts =
                    r.Hash =
                    r.concatBytes =
                    r.toBytes =
                    r.utf8ToBytes =
                    r.asyncLoop =
                    r.nextTick =
                    r.hexToBytes =
                    r.bytesToHex =
                    r.isLE =
                    r.rotr =
                    r.createView =
                    r.u32 =
                    r.u8 =
                      void 0);
                const n = e("@noble/hashes/crypto");
                r.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                r.u32 = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
                r.createView = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
                if (
                  ((r.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
                  (r.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
                  !r.isLE)
                )
                  throw new Error("Non little-endian hardware is not supported");
                const i = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
                (r.bytesToHex = function (e) {
                  if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
                  let t = "";
                  for (let r = 0; r < e.length; r++) t += i[e[r]];
                  return t;
                }),
                  (r.hexToBytes = function (e) {
                    if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
                    if (e.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                    const t = new Uint8Array(e.length / 2);
                    for (let r = 0; r < t.length; r++) {
                      const n = 2 * r,
                        i = e.slice(n, n + 2),
                        o = Number.parseInt(i, 16);
                      if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
                      t[r] = o;
                    }
                    return t;
                  });
                function o(e) {
                  if ("string" != typeof e) throw new TypeError("utf8ToBytes expected string, got " + typeof e);
                  return new TextEncoder().encode(e);
                }
                function s(e) {
                  if (("string" == typeof e && (e = o(e)), !(e instanceof Uint8Array)))
                    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
                  return e;
                }
                (r.nextTick = async () => {}),
                  (r.asyncLoop = async function (e, t, n) {
                    let i = Date.now();
                    for (let o = 0; o < e; o++) {
                      n(o);
                      const e = Date.now() - i;
                      (e >= 0 && e < t) || (await (0, r.nextTick)(), (i += e));
                    }
                  }),
                  (r.utf8ToBytes = o),
                  (r.toBytes = s),
                  (r.concatBytes = function (...e) {
                    if (!e.every((e) => e instanceof Uint8Array)) throw new Error("Uint8Array list expected");
                    if (1 === e.length) return e[0];
                    const t = e.reduce((e, t) => e + t.length, 0),
                      r = new Uint8Array(t);
                    for (let t = 0, n = 0; t < e.length; t++) {
                      const i = e[t];
                      r.set(i, n), (n += i.length);
                    }
                    return r;
                  });
                r.Hash = class {
                  clone() {
                    return this._cloneInto();
                  }
                };
                (r.checkOpts = function (e, t) {
                  if (
                    t !== undefined &&
                    ("object" != typeof t || ((r = t), "[object Object]" !== Object.prototype.toString.call(r) || r.constructor !== Object))
                  )
                    throw new TypeError("Options should be object or undefined");
                  var r;
                  return Object.assign(e, t);
                }),
                  (r.wrapConstructor = function (e) {
                    const t = (t) => e().update(s(t)).digest(),
                      r = e();
                    return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = () => e()), t;
                  }),
                  (r.wrapConstructorWithOpts = function (e) {
                    const t = (t, r) => e(r).update(s(t)).digest(),
                      r = e({});
                    return (t.outputLen = r.outputLen), (t.blockLen = r.blockLen), (t.create = (t) => e(t)), t;
                  }),
                  (r.randomBytes = function (e = 32) {
                    if (n.crypto.web) return n.crypto.web.getRandomValues(new Uint8Array(e));
                    if (n.crypto.node) return new Uint8Array(n.crypto.node.randomBytes(e).buffer);
                    throw new Error("The environment doesn't have randomBytes function");
                  });
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography>@noble/hashes",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/node_modules/@noble/hashes/utils.js"
      }
    ],
    [
      3215,
      { "./utils": 3216, "@noble/hashes/sha256": 3212 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.sha256 = void 0);
                const n = e("@noble/hashes/sha256"),
                  i = e("./utils");
                r.sha256 = (0, i.wrapHash)(n.sha256);
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/sha256.js"
      }
    ],
    [
      3216,
      { "@noble/hashes/_assert": 3208, "@noble/hashes/utils": 3214 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.crypto =
                    r.wrapHash =
                    r.equalsBytes =
                    r.hexToBytes =
                    r.bytesToUtf8 =
                    r.utf8ToBytes =
                    r.createView =
                    r.concatBytes =
                    r.toHex =
                    r.bytesToHex =
                    r.assertBytes =
                    r.assertBool =
                      void 0);
                const i = n(e("@noble/hashes/_assert")),
                  o = e("@noble/hashes/utils"),
                  s = i.default.bool;
                r.assertBool = s;
                const a = i.default.bytes;
                r.assertBytes = a;
                var c = e("@noble/hashes/utils");
                Object.defineProperty(r, "bytesToHex", {
                  enumerable: !0,
                  get: function () {
                    return c.bytesToHex;
                  }
                }),
                  Object.defineProperty(r, "toHex", {
                    enumerable: !0,
                    get: function () {
                      return c.bytesToHex;
                    }
                  }),
                  Object.defineProperty(r, "concatBytes", {
                    enumerable: !0,
                    get: function () {
                      return c.concatBytes;
                    }
                  }),
                  Object.defineProperty(r, "createView", {
                    enumerable: !0,
                    get: function () {
                      return c.createView;
                    }
                  }),
                  Object.defineProperty(r, "utf8ToBytes", {
                    enumerable: !0,
                    get: function () {
                      return c.utf8ToBytes;
                    }
                  }),
                  (r.bytesToUtf8 = function (e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("bytesToUtf8 expected Uint8Array, got " + typeof e);
                    return new TextDecoder().decode(e);
                  }),
                  (r.hexToBytes = function (e) {
                    const t = e.startsWith("0x") ? e.substring(2) : e;
                    return (0, o.hexToBytes)(t);
                  }),
                  (r.equalsBytes = function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                    return !0;
                  }),
                  (r.wrapHash = function (e) {
                    return (t) => (i.default.bytes(t), e(t));
                  }),
                  (r.crypto = (() => {
                    const e = "object" == typeof self && "crypto" in self ? self.crypto : undefined,
                      r = void 0 !== t && "function" == typeof t.require && t.require.bind(t);
                    return { node: r && !e ? r("crypto") : undefined, web: e };
                  })());
              };
            };
      },
      {
        package: "eth-lattice-keyring>@ethereumjs/tx>ethereum-cryptography",
        file: "node_modules/eth-lattice-keyring/node_modules/ethereum-cryptography/utils.js"
      }
    ],
    [
      3217,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e) {
                  if (Array.isArray(e)) {
                    const t = [];
                    for (let r = 0; r < e.length; r++) t.push(n(e[r]));
                    const r = h(...t);
                    return h(s(r.length, 192), r);
                  }
                  const t = y(e);
                  return 1 === t.length && t[0] < 128 ? t : h(s(t.length, 128), t);
                }
                function i(e, t, r) {
                  if (r > e.length) throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
                  return e.slice(t, r);
                }
                function o(e) {
                  if (0 === e[0]) throw new Error("invalid RLP: extra zeros");
                  return d(l(e));
                }
                function s(e, t) {
                  if (e < 56) return Uint8Array.from([e + t]);
                  const r = m(e),
                    n = m(t + 55 + r.length / 2);
                  return Uint8Array.from(f(n + r));
                }
                function a(e, t = !1) {
                  if (!e || 0 === e.length) return Uint8Array.from([]);
                  const r = c(y(e));
                  if (t) return r;
                  if (0 !== r.remainder.length) throw new Error("invalid RLP: remainder must be zero");
                  return r.data;
                }
                function c(e) {
                  let t, r, n, s, a;
                  const u = [],
                    l = e[0];
                  if (l <= 127) return { data: e.slice(0, 1), remainder: e.slice(1) };
                  if (l <= 183) {
                    if (((t = l - 127), (n = 128 === l ? Uint8Array.from([]) : i(e, 1, t)), 2 === t && n[0] < 128))
                      throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
                    return { data: n, remainder: e.slice(t) };
                  }
                  if (l <= 191) {
                    if (((r = l - 182), e.length - 1 < r)) throw new Error("invalid RLP: not enough bytes for string length");
                    if (((t = o(i(e, 1, r))), t <= 55)) throw new Error("invalid RLP: expected string length to be greater than 55");
                    return (n = i(e, r, t + r)), { data: n, remainder: e.slice(t + r) };
                  }
                  if (l <= 247) {
                    for (t = l - 191, s = i(e, 1, t); s.length; ) (a = c(s)), u.push(a.data), (s = a.remainder);
                    return { data: u, remainder: e.slice(t) };
                  }
                  {
                    if (((r = l - 246), (t = o(i(e, 1, r))), t < 56)) throw new Error("invalid RLP: encoded list too short");
                    const n = r + t;
                    if (n > e.length) throw new Error("invalid RLP: total length is larger than the data");
                    for (s = i(e, r, n); s.length; ) (a = c(s)), u.push(a.data), (s = a.remainder);
                    return { data: u, remainder: e.slice(n) };
                  }
                }
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.utils = r.decode = r.encode = void 0),
                  (r.encode = n),
                  (r.decode = a);
                const u = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
                function l(e) {
                  let t = "";
                  for (let r = 0; r < e.length; r++) t += u[e[r]];
                  return t;
                }
                function d(e) {
                  const t = Number.parseInt(e, 16);
                  if (Number.isNaN(t)) throw new Error("Invalid byte sequence");
                  return t;
                }
                function f(e) {
                  if ("string" != typeof e) throw new TypeError("hexToBytes: expected string, got " + typeof e);
                  if (e.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
                  const t = new Uint8Array(e.length / 2);
                  for (let r = 0; r < t.length; r++) {
                    const n = 2 * r;
                    t[r] = d(e.slice(n, n + 2));
                  }
                  return t;
                }
                function h(...e) {
                  if (1 === e.length) return e[0];
                  const t = e.reduce((e, t) => e + t.length, 0),
                    r = new Uint8Array(t);
                  for (let t = 0, n = 0; t < e.length; t++) {
                    const i = e[t];
                    r.set(i, n), (n += i.length);
                  }
                  return r;
                }
                function p(e) {
                  return new TextEncoder().encode(e);
                }
                function m(e) {
                  if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                  const t = e.toString(16);
                  return t.length % 2 ? `0${t}` : t;
                }
                function g(e) {
                  return e.length >= 2 && "0" === e[0] && "x" === e[1];
                }
                function y(e) {
                  if (e instanceof Uint8Array) return e;
                  if ("string" == typeof e)
                    return g(e) ? f((t = "string" != typeof (r = e) ? r : g(r) ? r.slice(2) : r).length % 2 ? `0${t}` : t) : p(e);
                  var t, r;
                  if ("number" == typeof e || "bigint" == typeof e) return e ? f(m(e)) : Uint8Array.from([]);
                  if (null === e || e === undefined) return Uint8Array.from([]);
                  throw new Error("toBytes: received unsupported type " + typeof e);
                }
                r.utils = { bytesToHex: l, concatBytes: h, hexToBytes: f, utf8ToBytes: p };
                const b = { encode: n, decode: a };
                r.default = b;
              };
            };
      },
      { package: "eth-lattice-keyring>rlp", file: "node_modules/eth-lattice-keyring/node_modules/rlp/dist/index.js" }
    ],
    [
      322,
      { "./constants": 321, buffer: 2913, multibase: 318, varint: 4716, "web-encoding": 4725 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const { Buffer: n } = e("buffer"),
                  i = e("multibase"),
                  o = e("varint"),
                  { names: s } = e("./constants"),
                  { TextDecoder: a } = e("web-encoding"),
                  c = new a(),
                  u = {};
                for (const e in s) u[s[e]] = e;
                function l(e) {
                  r.decode(e);
                }
                (r.names = s),
                  (r.codes = Object.freeze(u)),
                  (r.toHexString = function (e) {
                    if (!(e instanceof Uint8Array)) throw new Error("must be passed a Uint8Array");
                    return (n.isBuffer(e) ? e : n.from(e.buffer, e.byteOffset, e.byteLength)).toString("hex");
                  }),
                  (r.fromHexString = function (e) {
                    return n.from(e, "hex");
                  }),
                  (r.toB58String = function (e) {
                    if (!(e instanceof Uint8Array)) throw new Error("must be passed a Uint8Array");
                    return c.decode(i.encode("base58btc", e)).slice(1);
                  }),
                  (r.fromB58String = function (e) {
                    const t = e instanceof Uint8Array ? c.decode(e) : e;
                    return i.decode("z" + t);
                  }),
                  (r.decode = function (e) {
                    if (!(e instanceof Uint8Array)) throw new Error("multihash must be a Uint8Array");
                    let t = n.isBuffer(e) ? e : n.from(e.buffer, e.byteOffset, e.byteLength);
                    if (t.length < 2) throw new Error("multihash too short. must be > 2 bytes.");
                    const i = o.decode(t);
                    if (!r.isValidCode(i)) throw new Error(`multihash unknown function code: 0x${i.toString(16)}`);
                    t = t.slice(o.decode.bytes);
                    const s = o.decode(t);
                    if (s < 0) throw new Error(`multihash invalid length: ${s}`);
                    if (((t = t.slice(o.decode.bytes)), t.length !== s))
                      throw new Error(`multihash length inconsistent: 0x${t.toString("hex")}`);
                    return { code: i, name: u[i], length: s, digest: t };
                  }),
                  (r.encode = function (e, t, i) {
                    if (!e || t === undefined) throw new Error("multihash encode requires at least two args: digest, code");
                    const s = r.coerceCode(t);
                    if (!(e instanceof Uint8Array)) throw new Error("digest should be a Uint8Array");
                    if ((null == i && (i = e.length), i && e.length !== i))
                      throw new Error("digest length should be equal to specified length.");
                    const a = o.encode(s),
                      c = o.encode(i),
                      u = n.alloc(a.length + c.length + e.length);
                    return u.set(a, 0), u.set(c, a.length), u.set(e, a.length + c.length), u;
                  }),
                  (r.coerceCode = function (e) {
                    let t = e;
                    if ("string" == typeof e) {
                      if (s[e] === undefined) throw new Error(`Unrecognized hash function named: ${e}`);
                      t = s[e];
                    }
                    if ("number" != typeof t) throw new Error(`Hash function code should be a number. Got: ${t}`);
                    if (u[t] === undefined && !r.isAppCode(t)) throw new Error(`Unrecognized function code: ${t}`);
                    return t;
                  }),
                  (r.isAppCode = function (e) {
                    return e > 0 && e < 16;
                  }),
                  (r.isValidCode = function (e) {
                    return !!r.isAppCode(e) || !!u[e];
                  }),
                  (r.validate = l),
                  (r.prefix = function (e) {
                    return l(e), n.from(e.buffer, e.byteOffset, 2);
                  });
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multihashes",
        file: "node_modules/@ensdomains/content-hash/node_modules/multihashes/src/index.js"
      }
    ],
    [
      3221,
      { "fast-levenshtein": 3541 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("fast-levenshtein");
                function i(e) {
                  return e.map(o);
                }
                function o(e) {
                  try {
                    return e.split(".").reverse();
                  } catch (t) {
                    throw new Error(JSON.stringify(e));
                  }
                }
                function s(e) {
                  return e.slice(1).reverse().join(".");
                }
                function a(e, t) {
                  return t.some((t) => !(t.length > e.length) && t.every((t, r) => e[r] === t));
                }
                t.exports = class {
                  constructor(e) {
                    Array.isArray(e)
                      ? ((this.configs = (function (e = []) {
                          return e.map(
                            (e) => (
                              (function (e) {
                                if (null === e || "object" != typeof e) throw new Error("Invalid config");
                                if (e.tolerance && !e.fuzzylist) throw new Error("Fuzzylist tolerance provided without fuzzylist");
                                if ("string" != typeof e.name || "" === e.name) throw new Error("Invalid config parameter: 'name'");
                                if (!["number", "string"].includes(typeof e.version) || "" === e.version)
                                  throw new Error("Invalid config parameter: 'version'");
                              })(e),
                              Object.assign({}, e, {
                                allowlist: i(e.allowlist || []),
                                blocklist: i(e.blocklist || []),
                                fuzzylist: i(e.fuzzylist || []),
                                tolerance: "tolerance" in e ? e.tolerance : 3
                              })
                            )
                          );
                        })(e)),
                        (this.legacyConfig = !1))
                      : ((this.configs = [
                          {
                            allowlist: i(e.whitelist || []),
                            blocklist: i(e.blacklist || []),
                            fuzzylist: i(e.fuzzylist || []),
                            tolerance: "tolerance" in e ? e.tolerance : 3
                          }
                        ]),
                        (this.legacyConfig = !0));
                  }
                  check(e) {
                    const t = this._check(e);
                    if (this.legacyConfig) {
                      let e = t.type;
                      return (
                        "allowlist" === e ? (e = "whitelist") : "blocklist" === e && (e = "blacklist"),
                        { match: t.match, result: t.result, type: e }
                      );
                    }
                    return t;
                  }
                  _check(e) {
                    const t = o("." === e.substring(e.length - 1) ? e.slice(0, -1) : e);
                    for (const { allowlist: e, name: r, version: n } of this.configs) {
                      if (a(t, e)) return { name: r, result: !1, type: "allowlist", version: n };
                    }
                    for (const { blocklist: e, fuzzylist: r, name: i, tolerance: o, version: c } of this.configs) {
                      if (a(t, e)) return { name: i, result: !0, type: "blocklist", version: c };
                      if (o > 0) {
                        let e = s(t);
                        e = e.replace("www.", "");
                        const a = r.find((t) => {
                          const r = s(t);
                          return n.get(e, r) <= o;
                        });
                        if (a) {
                          return { name: i, match: a.slice().reverse().join("."), result: !0, type: "fuzzy", version: c };
                        }
                      }
                    }
                    return { result: !1, type: "all" };
                  }
                };
              };
            };
      },
      { package: "@metamask/phishing-warning>eth-phishing-detect", file: "node_modules/eth-phishing-detect/src/detector.js" }
    ],
    [
      3228,
      { buffer: 2913, "ethereumjs-abi": 3249, "ethereumjs-util": 3233, tweetnacl: 4651, "tweetnacl-util": 4650 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__createBinding) ||
                        (Object.create
                          ? function (e, t, r, n) {
                              n === undefined && (n = r),
                                Object.defineProperty(e, n, {
                                  enumerable: !0,
                                  get: function () {
                                    return t[r];
                                  }
                                });
                            }
                          : function (e, t, r, n) {
                              n === undefined && (n = r), (e[n] = t[r]);
                            }),
                      i =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                          ? function (e, t) {
                              Object.defineProperty(e, "default", { enumerable: !0, value: t });
                            }
                          : function (e, t) {
                              e.default = t;
                            }),
                      o =
                        (this && this.__importStar) ||
                        function (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                          return i(t, e), t;
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.recoverTypedSignature_v4 =
                        r.recoverTypedSignature =
                        r.signTypedData_v4 =
                        r.signTypedData =
                        r.recoverTypedMessage =
                        r.signTypedMessage =
                        r.getEncryptionPublicKey =
                        r.decryptSafely =
                        r.decrypt =
                        r.encryptSafely =
                        r.encrypt =
                        r.recoverTypedSignatureLegacy =
                        r.signTypedDataLegacy =
                        r.typedSignatureHash =
                        r.extractPublicKey =
                        r.recoverPersonalSignature =
                        r.personalSign =
                        r.normalize =
                        r.concatSig =
                        r.TypedDataUtils =
                        r.TYPED_MESSAGE_SCHEMA =
                          void 0);
                    const s = o(e("ethereumjs-util")),
                      a = o(e("ethereumjs-abi")),
                      c = o(e("tweetnacl")),
                      u = o(e("tweetnacl-util")),
                      l = {
                        type: "object",
                        properties: {
                          types: {
                            type: "object",
                            additionalProperties: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: { name: { type: "string" }, type: { type: "string" } },
                                required: ["name", "type"]
                              }
                            }
                          },
                          primaryType: { type: "string" },
                          domain: { type: "object" },
                          message: { type: "object" }
                        },
                        required: ["types", "primaryType", "domain", "message"]
                      };
                    r.TYPED_MESSAGE_SCHEMA = l;
                    const d = {
                      encodeData(e, r, n, i = !0) {
                        const o = ["bytes32"],
                          c = [this.hashType(e, n)];
                        if (i) {
                          const u = (e, r, o) => {
                            if (n[r] !== undefined)
                              return [
                                "bytes32",
                                null == o
                                  ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                                  : s.keccak(this.encodeData(r, o, n, i))
                              ];
                            if (o === undefined) throw new Error(`missing value for field ${e} of type ${r}`);
                            if ("bytes" === r) return ["bytes32", s.keccak(o)];
                            if ("string" === r) return "string" == typeof o && (o = t.from(o, "utf8")), ["bytes32", s.keccak(o)];
                            if (r.lastIndexOf("]") === r.length - 1) {
                              const t = r.slice(0, r.lastIndexOf("[")),
                                n = o.map((r) => u(e, t, r));
                              return [
                                "bytes32",
                                s.keccak(
                                  a.rawEncode(
                                    n.map(([e]) => e),
                                    n.map(([, e]) => e)
                                  )
                                )
                              ];
                            }
                            return [r, o];
                          };
                          for (const t of n[e]) {
                            const [e, n] = u(t.name, t.type, r[t.name]);
                            o.push(e), c.push(n);
                          }
                        } else
                          for (const a of n[e]) {
                            let e = r[a.name];
                            if (e !== undefined)
                              if ("bytes" === a.type) o.push("bytes32"), (e = s.keccak(e)), c.push(e);
                              else if ("string" === a.type)
                                o.push("bytes32"), "string" == typeof e && (e = t.from(e, "utf8")), (e = s.keccak(e)), c.push(e);
                              else if (n[a.type] !== undefined)
                                o.push("bytes32"), (e = s.keccak(this.encodeData(a.type, e, n, i))), c.push(e);
                              else {
                                if (a.type.lastIndexOf("]") === a.type.length - 1)
                                  throw new Error("Arrays are unimplemented in encodeData; use V4 extension");
                                o.push(a.type), c.push(e);
                              }
                          }
                        return a.rawEncode(o, c);
                      },
                      encodeType(e, t) {
                        let r = "",
                          n = this.findTypeDependencies(e, t).filter((t) => t !== e);
                        n = [e].concat(n.sort());
                        for (const e of n) {
                          if (!t[e]) throw new Error(`No type definition specified: ${e}`);
                          r += `${e}(${t[e].map(({ name: e, type: t }) => `${t} ${e}`).join(",")})`;
                        }
                        return r;
                      },
                      findTypeDependencies(e, t, r = []) {
                        if ((([e] = e.match(/^\w*/u)), r.includes(e) || t[e] === undefined)) return r;
                        r.push(e);
                        for (const n of t[e]) for (const e of this.findTypeDependencies(n.type, t, r)) !r.includes(e) && r.push(e);
                        return r;
                      },
                      hashStruct(e, t, r, n = !0) {
                        return s.keccak(this.encodeData(e, t, r, n));
                      },
                      hashType(e, t) {
                        return s.keccak(this.encodeType(e, t));
                      },
                      sanitizeData(e) {
                        const t = {};
                        for (const r in l.properties) e[r] && (t[r] = e[r]);
                        return "types" in t && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t;
                      },
                      sign(e, r = !0) {
                        const n = this.sanitizeData(e),
                          i = [t.from("1901", "hex")];
                        return (
                          i.push(this.hashStruct("EIP712Domain", n.domain, n.types, r)),
                          "EIP712Domain" !== n.primaryType && i.push(this.hashStruct(n.primaryType, n.message, n.types, r)),
                          s.keccak(t.concat(i))
                        );
                      }
                    };
                    function f(e, t, r) {
                      const n = s.fromSigned(t),
                        i = s.fromSigned(r),
                        o = s.bufferToInt(e),
                        a = x(s.toUnsigned(n).toString("hex"), 64),
                        c = x(s.toUnsigned(i).toString("hex"), 64),
                        u = s.stripHexPrefix(s.intToHex(o));
                      return s.addHexPrefix(a.concat(c, u)).toString("hex");
                    }
                    function h(e, t) {
                      const r = k(t.data),
                        n = s.ecsign(r, e);
                      return s.bufferToHex(f(n.v, n.r, n.s));
                    }
                    function p(e) {
                      const t = E(k(e.data), e.sig),
                        r = s.publicToAddress(t);
                      return s.bufferToHex(r);
                    }
                    function m(e, t, r) {
                      if ("x25519-xsalsa20-poly1305" === r) {
                        if ("string" != typeof t.data)
                          throw new Error('Cannot detect secret message, message params should be of the form {data: "secret message"} ');
                        const r = c.box.keyPair();
                        let n;
                        try {
                          n = u.decodeBase64(e);
                        } catch (e) {
                          throw new Error("Bad public key");
                        }
                        const i = u.decodeUTF8(t.data),
                          o = c.randomBytes(c.box.nonceLength),
                          s = c.box(i, o, n, r.secretKey);
                        return {
                          version: "x25519-xsalsa20-poly1305",
                          nonce: u.encodeBase64(o),
                          ephemPublicKey: u.encodeBase64(r.publicKey),
                          ciphertext: u.encodeBase64(s)
                        };
                      }
                      throw new Error("Encryption type/version not supported");
                    }
                    function g(e, t) {
                      if ("x25519-xsalsa20-poly1305" === e.version) {
                        const r = _(t),
                          n = c.box.keyPair.fromSecretKey(r).secretKey,
                          i = u.decodeBase64(e.nonce),
                          o = u.decodeBase64(e.ciphertext),
                          s = u.decodeBase64(e.ephemPublicKey),
                          a = c.box.open(o, i, s, n);
                        let l;
                        try {
                          l = u.encodeUTF8(a);
                        } catch (e) {
                          throw new Error("Decryption failed.");
                        }
                        if (l) return l;
                        throw new Error("Decryption failed.");
                      }
                      throw new Error("Encryption type/version not supported.");
                    }
                    function y(e, t) {
                      const r = d.sign(t.data, !1),
                        n = s.ecsign(r, e);
                      return s.bufferToHex(f(n.v, n.r, n.s));
                    }
                    function b(e, t) {
                      const r = d.sign(t.data),
                        n = s.ecsign(r, e);
                      return s.bufferToHex(f(n.v, n.r, n.s));
                    }
                    function v(e) {
                      const t = E(d.sign(e.data, !1), e.sig),
                        r = s.publicToAddress(t);
                      return s.bufferToHex(r);
                    }
                    function w(e) {
                      const t = E(d.sign(e.data), e.sig),
                        r = s.publicToAddress(t);
                      return s.bufferToHex(r);
                    }
                    function k(e) {
                      const t = new Error("Expect argument to be non-empty array");
                      if ("object" != typeof e || !("length" in e) || !e.length) throw t;
                      const r = e.map(function (e) {
                          return "bytes" === e.type ? s.toBuffer(e.value) : e.value;
                        }),
                        n = e.map(function (e) {
                          return e.type;
                        }),
                        i = e.map(function (e) {
                          if (!e.name) throw t;
                          return `${e.type} ${e.name}`;
                        });
                      return a.soliditySHA3(
                        ["bytes32", "bytes32"],
                        [a.soliditySHA3(new Array(e.length).fill("string"), i), a.soliditySHA3(n, r)]
                      );
                    }
                    function E(e, t) {
                      const r = s.toBuffer(t),
                        n = s.fromRpcSig(r);
                      return s.ecrecover(e, n.v, n.r, n.s);
                    }
                    function T(e) {
                      const t = s.toBuffer(e.data);
                      return E(s.hashPersonalMessage(t), e.sig);
                    }
                    function x(e, t) {
                      let r = `${e}`;
                      for (; r.length < t; ) r = `0${r}`;
                      return r;
                    }
                    function _(e) {
                      const r = t.from(e, "hex").toString("base64");
                      return u.decodeBase64(r);
                    }
                    (r.TypedDataUtils = d),
                      (r.concatSig = f),
                      (r.normalize = function (e) {
                        if (!e) return undefined;
                        if ("number" == typeof e) {
                          const t = s.toBuffer(e);
                          e = s.bufferToHex(t);
                        }
                        if ("string" != typeof e) {
                          let t = "eth-sig-util.normalize() requires hex string or integer input.";
                          throw ((t += ` received ${typeof e}: ${e}`), new Error(t));
                        }
                        return s.addHexPrefix(e.toLowerCase());
                      }),
                      (r.personalSign = function (e, t) {
                        const r = s.toBuffer(t.data),
                          n = s.hashPersonalMessage(r),
                          i = s.ecsign(n, e);
                        return s.bufferToHex(f(i.v, i.r, i.s));
                      }),
                      (r.recoverPersonalSignature = function (e) {
                        const t = T(e),
                          r = s.publicToAddress(t);
                        return s.bufferToHex(r);
                      }),
                      (r.extractPublicKey = function (e) {
                        return `0x${T(e).toString("hex")}`;
                      }),
                      (r.typedSignatureHash = function (e) {
                        const t = k(e);
                        return s.bufferToHex(t);
                      }),
                      (r.signTypedDataLegacy = h),
                      (r.recoverTypedSignatureLegacy = p),
                      (r.encrypt = m),
                      (r.encryptSafely = function (e, r, n) {
                        const { data: i } = r;
                        if (!i) throw new Error("Cannot encrypt empty msg.data");
                        if ("object" == typeof i && "toJSON" in i)
                          throw new Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
                        const o = { data: i, padding: "" },
                          s = t.byteLength(JSON.stringify(o), "utf-8") % 2048;
                        let a = 0;
                        return s > 0 && (a = 2048 - s - 16), (o.padding = "0".repeat(a)), m(e, { data: JSON.stringify(o) }, n);
                      }),
                      (r.decrypt = g),
                      (r.decryptSafely = function (e, t) {
                        return JSON.parse(g(e, t)).data;
                      }),
                      (r.getEncryptionPublicKey = function (e) {
                        const t = _(e),
                          r = c.box.keyPair.fromSecretKey(t).publicKey;
                        return u.encodeBase64(r);
                      }),
                      (r.signTypedMessage = function (e, t, r = "V4") {
                        switch (r) {
                          case "V1":
                            return h(e, t);
                          case "V3":
                            return y(e, t);
                          default:
                            return b(e, t);
                        }
                      }),
                      (r.recoverTypedMessage = function (e, t = "V4") {
                        switch (t) {
                          case "V1":
                            return p(e);
                          case "V3":
                            return v(e);
                          default:
                            return w(e);
                        }
                      }),
                      (r.signTypedData = y),
                      (r.signTypedData_v4 = b),
                      (r.recoverTypedSignature = v),
                      (r.recoverTypedSignature_v4 = w);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-sig-util", file: "node_modules/eth-sig-util/dist/index.js" }
    ],
    [
      3229,
      { buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (e) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.createHashFunction = function (t) {
                        return function (r) {
                          var n = t();
                          return n.update(r), e.from(n.digest());
                        };
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-sig-util>ethereumjs-util>ethereum-cryptography",
        file: "node_modules/eth-sig-util/node_modules/ethereum-cryptography/hash-utils.js"
      }
    ],
    [
      323,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = function (e, t) {
                  t || (t = e.reduce((e, t) => e + t.length, 0));
                  const r = new Uint8Array(t);
                  let n = 0;
                  for (const t of e) r.set(t, n), (n += t.length);
                  return r;
                };
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multicodec>uint8arrays",
        file: "node_modules/@ensdomains/content-hash/node_modules/uint8arrays/concat.js"
      }
    ],
    [
      3230,
      { "./hash-utils": 3229, keccak: 3886 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("./hash-utils"),
                  i = e("keccak");
                (r.keccak224 = n.createHashFunction(function () {
                  return i("keccak224");
                })),
                  (r.keccak256 = n.createHashFunction(function () {
                    return i("keccak256");
                  })),
                  (r.keccak384 = n.createHashFunction(function () {
                    return i("keccak384");
                  })),
                  (r.keccak512 = n.createHashFunction(function () {
                    return i("keccak512");
                  }));
              };
            };
      },
      {
        package: "eth-sig-util>ethereumjs-util>ethereum-cryptography",
        file: "node_modules/eth-sig-util/node_modules/ethereum-cryptography/keccak.js"
      }
    ],
    [
      3231,
      { randombytes: 4312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("randombytes");
                (r.getRandomBytes = function (e) {
                  return new Promise(function (t, r) {
                    n(e, function (e, n) {
                      e ? r(e) : t(n);
                    });
                  });
                }),
                  (r.getRandomBytesSync = function (e) {
                    return n(e);
                  });
              };
            };
      },
      {
        package: "eth-sig-util>ethereumjs-util>ethereum-cryptography",
        file: "node_modules/eth-sig-util/node_modules/ethereum-cryptography/random.js"
      }
    ],
    [
      3232,
      { "./random": 3231, secp256k1: 4531 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  i =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 });
                var o = e("secp256k1"),
                  s = e("./random");
                (r.createPrivateKey = function () {
                  return n(this, void 0, void 0, function () {
                    var e;
                    return i(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, s.getRandomBytes(32)];
                        case 1:
                          return (e = t.sent()), o.privateKeyVerify(e) ? [2, e] : [3, 0];
                        case 2:
                          return [2];
                      }
                    });
                  });
                }),
                  (r.createPrivateKeySync = function () {
                    for (;;) {
                      var e = s.getRandomBytesSync(32);
                      if (o.privateKeyVerify(e)) return e;
                    }
                  }),
                  (function (e) {
                    for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
                  })(e("secp256k1"));
              };
            };
      },
      {
        package: "eth-sig-util>ethereumjs-util>ethereum-cryptography",
        file: "node_modules/eth-sig-util/node_modules/ethereum-cryptography/secp256k1.js"
      }
    ],
    [
      3233,
      {
        "./secp256k1-adapter": 3234,
        assert: 2907,
        "bn.js": 2851,
        "create-hash": 3114,
        "ethereum-cryptography/keccak": 3230,
        "ethjs-util": 3325,
        rlp: 4520,
        "safe-buffer": 4521
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        },
                  i = e("ethereum-cryptography/keccak"),
                  o = i.keccak224,
                  s = i.keccak384,
                  a = i.keccak256,
                  c = i.keccak512,
                  u = e("./secp256k1-adapter"),
                  l = e("assert"),
                  d = e("rlp"),
                  f = e("bn.js"),
                  h = e("create-hash"),
                  p = e("safe-buffer").Buffer;
                Object.assign(r, e("ethjs-util")),
                  (r.MAX_INTEGER = new f("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16)),
                  (r.TWO_POW256 = new f("10000000000000000000000000000000000000000000000000000000000000000", 16)),
                  (r.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
                  (r.SHA3_NULL_S = r.KECCAK256_NULL_S),
                  (r.KECCAK256_NULL = p.from(r.KECCAK256_NULL_S, "hex")),
                  (r.SHA3_NULL = r.KECCAK256_NULL),
                  (r.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
                  (r.SHA3_RLP_ARRAY_S = r.KECCAK256_RLP_ARRAY_S),
                  (r.KECCAK256_RLP_ARRAY = p.from(r.KECCAK256_RLP_ARRAY_S, "hex")),
                  (r.SHA3_RLP_ARRAY = r.KECCAK256_RLP_ARRAY),
                  (r.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
                  (r.SHA3_RLP_S = r.KECCAK256_RLP_S),
                  (r.KECCAK256_RLP = p.from(r.KECCAK256_RLP_S, "hex")),
                  (r.SHA3_RLP = r.KECCAK256_RLP),
                  (r.BN = f),
                  (r.rlp = d),
                  (r.secp256k1 = u),
                  (r.zeros = function (e) {
                    return p.allocUnsafe(e).fill(0);
                  }),
                  (r.zeroAddress = function () {
                    var e = r.zeros(20);
                    return r.bufferToHex(e);
                  }),
                  (r.setLengthLeft = r.setLength =
                    function (e, t, n) {
                      var i = r.zeros(t);
                      return (
                        (e = r.toBuffer(e)),
                        n ? (e.length < t ? (e.copy(i), i) : e.slice(0, t)) : e.length < t ? (e.copy(i, t - e.length), i) : e.slice(-t)
                      );
                    }),
                  (r.setLengthRight = function (e, t) {
                    return r.setLength(e, t, !0);
                  }),
                  (r.unpad = r.stripZeros =
                    function (e) {
                      for (var t = (e = r.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString(); ) t = (e = e.slice(1))[0];
                      return e;
                    }),
                  (r.toBuffer = function (e) {
                    if (!p.isBuffer(e))
                      if (Array.isArray(e)) e = p.from(e);
                      else if ("string" == typeof e) e = r.isHexString(e) ? p.from(r.padToEven(r.stripHexPrefix(e)), "hex") : p.from(e);
                      else if ("number" == typeof e) e = r.intToBuffer(e);
                      else if (null === e || e === undefined) e = p.allocUnsafe(0);
                      else if (f.isBN(e)) e = e.toArrayLike(p);
                      else {
                        if (!e.toArray) throw new Error("invalid type");
                        e = p.from(e.toArray());
                      }
                    return e;
                  }),
                  (r.bufferToInt = function (e) {
                    return new f(r.toBuffer(e)).toNumber();
                  }),
                  (r.bufferToHex = function (e) {
                    return "0x" + (e = r.toBuffer(e)).toString("hex");
                  }),
                  (r.fromSigned = function (e) {
                    return new f(e).fromTwos(256);
                  }),
                  (r.toUnsigned = function (e) {
                    return p.from(e.toTwos(256).toArray());
                  }),
                  (r.keccak = function (e, t) {
                    switch (((e = r.toBuffer(e)), t || (t = 256), t)) {
                      case 224:
                        return o(e);
                      case 256:
                        return a(e);
                      case 384:
                        return s(e);
                      case 512:
                        return c(e);
                      default:
                        throw new Error("Invald algorithm: keccak" + t);
                    }
                  }),
                  (r.keccak256 = function (e) {
                    return r.keccak(e);
                  }),
                  (r.sha3 = r.keccak),
                  (r.sha256 = function (e) {
                    return (e = r.toBuffer(e)), h("sha256").update(e).digest();
                  }),
                  (r.ripemd160 = function (e, t) {
                    e = r.toBuffer(e);
                    var n = h("rmd160").update(e).digest();
                    return !0 === t ? r.setLength(n, 32) : n;
                  }),
                  (r.rlphash = function (e) {
                    return r.keccak(d.encode(e));
                  }),
                  (r.isValidPrivate = function (e) {
                    return u.privateKeyVerify(e);
                  }),
                  (r.isValidPublic = function (e, t) {
                    return 64 === e.length ? u.publicKeyVerify(p.concat([p.from([4]), e])) : !!t && u.publicKeyVerify(e);
                  }),
                  (r.pubToAddress = r.publicToAddress =
                    function (e, t) {
                      return (
                        (e = r.toBuffer(e)),
                        t && 64 !== e.length && (e = u.publicKeyConvert(e, !1).slice(1)),
                        l(64 === e.length),
                        r.keccak(e).slice(-20)
                      );
                    });
                var m = (r.privateToPublic = function (e) {
                  return (e = r.toBuffer(e)), u.publicKeyCreate(e, !1).slice(1);
                });
                (r.importPublic = function (e) {
                  return 64 !== (e = r.toBuffer(e)).length && (e = u.publicKeyConvert(e, !1).slice(1)), e;
                }),
                  (r.ecsign = function (e, t) {
                    var r = u.sign(e, t),
                      n = {};
                    return (n.r = r.signature.slice(0, 32)), (n.s = r.signature.slice(32, 64)), (n.v = r.recovery + 27), n;
                  }),
                  (r.hashPersonalMessage = function (e) {
                    var t = r.toBuffer("Ethereum Signed Message:\n" + e.length.toString());
                    return r.keccak(p.concat([t, e]));
                  }),
                  (r.ecrecover = function (e, t, n, i) {
                    var o = p.concat([r.setLength(n, 32), r.setLength(i, 32)], 64),
                      s = t - 27;
                    if (0 !== s && 1 !== s) throw new Error("Invalid signature v value");
                    var a = u.recover(e, o, s);
                    return u.publicKeyConvert(a, !1).slice(1);
                  }),
                  (r.toRpcSig = function (e, t, n) {
                    if (27 !== e && 28 !== e) throw new Error("Invalid recovery id");
                    return r.bufferToHex(p.concat([r.setLengthLeft(t, 32), r.setLengthLeft(n, 32), r.toBuffer(e - 27)]));
                  }),
                  (r.fromRpcSig = function (e) {
                    if (65 !== (e = r.toBuffer(e)).length) throw new Error("Invalid signature length");
                    var t = e[64];
                    return t < 27 && (t += 27), { v: t, r: e.slice(0, 32), s: e.slice(32, 64) };
                  }),
                  (r.privateToAddress = function (e) {
                    return r.publicToAddress(m(e));
                  }),
                  (r.isValidAddress = function (e) {
                    return /^0x[0-9a-fA-F]{40}$/.test(e);
                  }),
                  (r.isZeroAddress = function (e) {
                    return r.zeroAddress() === r.addHexPrefix(e);
                  }),
                  (r.toChecksumAddress = function (e) {
                    e = r.stripHexPrefix(e).toLowerCase();
                    for (var t = r.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++)
                      parseInt(t[i], 16) >= 8 ? (n += e[i].toUpperCase()) : (n += e[i]);
                    return n;
                  }),
                  (r.isValidChecksumAddress = function (e) {
                    return r.isValidAddress(e) && r.toChecksumAddress(e) === e;
                  }),
                  (r.generateAddress = function (e, t) {
                    return (e = r.toBuffer(e)), (t = (t = new f(t)).isZero() ? null : p.from(t.toArray())), r.rlphash([e, t]).slice(-20);
                  }),
                  (r.isPrecompiled = function (e) {
                    var t = r.unpad(e);
                    return 1 === t.length && t[0] >= 1 && t[0] <= 8;
                  }),
                  (r.addHexPrefix = function (e) {
                    return "string" != typeof e || r.isHexPrefixed(e) ? e : "0x" + e;
                  }),
                  (r.isValidSignature = function (e, t, r, n) {
                    var i = new f("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                      o = new f("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                    return (
                      32 === t.length &&
                      32 === r.length &&
                      (27 === e || 28 === e) &&
                      ((t = new f(t)),
                      (r = new f(r)),
                      !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new f(r).cmp(i)))
                    );
                  }),
                  (r.baToJSON = function (e) {
                    if (p.isBuffer(e)) return "0x" + e.toString("hex");
                    if (e instanceof Array) {
                      for (var t = [], n = 0; n < e.length; n++) t.push(r.baToJSON(e[n]));
                      return t;
                    }
                  }),
                  (r.defineProperties = function (e, t, i) {
                    if (
                      ((e.raw = []),
                      (e._fields = []),
                      (e.toJSON = function (t) {
                        if (t) {
                          var n = {};
                          return (
                            e._fields.forEach(function (t) {
                              n[t] = "0x" + e[t].toString("hex");
                            }),
                            n
                          );
                        }
                        return r.baToJSON(this.raw);
                      }),
                      (e.serialize = function () {
                        return d.encode(e.raw);
                      }),
                      t.forEach(function (t, n) {
                        function i() {
                          return e.raw[n];
                        }
                        function o(i) {
                          "00" !== (i = r.toBuffer(i)).toString("hex") || t.allowZero || (i = p.allocUnsafe(0)),
                            t.allowLess && t.length
                              ? ((i = r.stripZeros(i)),
                                l(t.length >= i.length, "The field " + t.name + " must not have more " + t.length + " bytes"))
                              : (t.allowZero && 0 === i.length) ||
                                !t.length ||
                                l(t.length === i.length, "The field " + t.name + " must have byte length of " + t.length),
                            (e.raw[n] = i);
                        }
                        e._fields.push(t.name),
                          Object.defineProperty(e, t.name, { enumerable: !0, configurable: !0, get: i, set: o }),
                          t.default && (e[t.name] = t.default),
                          t.alias && Object.defineProperty(e, t.alias, { enumerable: !1, configurable: !0, set: o, get: i });
                      }),
                      i)
                    )
                      if (
                        ("string" == typeof i && (i = p.from(r.stripHexPrefix(i), "hex")),
                        p.isBuffer(i) && (i = d.decode(i)),
                        Array.isArray(i))
                      ) {
                        if (i.length > e._fields.length) throw new Error("wrong number of fields in data");
                        i.forEach(function (t, n) {
                          e[e._fields[n]] = r.toBuffer(t);
                        });
                      } else {
                        if ("object" !== (void 0 === i ? "undefined" : n(i))) throw new Error("invalid data");
                        var o = Object.keys(i);
                        t.forEach(function (t) {
                          -1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias]);
                        });
                      }
                  });
              };
            };
      },
      { package: "eth-sig-util>ethereumjs-util", file: "node_modules/eth-sig-util/node_modules/ethereumjs-util/dist/index.js" }
    ],
    [
      3234,
      { "./secp256k1-lib/der": 3235, "./secp256k1-lib/index": 3236, buffer: 2913, "ethereum-cryptography/secp256k1": 3232 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (r) {
                  (function () {
                    var n = e("ethereum-cryptography/secp256k1");
                    function i() {
                      return e("./secp256k1-lib/index");
                    }
                    var o = e("./secp256k1-lib/der"),
                      s = function (e) {
                        return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e));
                      };
                    t.exports = {
                      privateKeyVerify: s,
                      privateKeyExport: function (e, t) {
                        var r = i();
                        if (32 !== e.length) throw new RangeError("private key length is invalid");
                        var n = r.privateKeyExport(e, t);
                        return o.privateKeyExport(e, n, t);
                      },
                      privateKeyImport: function (e) {
                        if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && s(e)) return e;
                        throw new Error("couldn't import from DER format");
                      },
                      privateKeyNegate: function (e) {
                        return r.from(n.privateKeyNegate(Uint8Array.from(e)));
                      },
                      privateKeyModInverse: function (e) {
                        if (32 !== e.length) throw new Error("private key length is invalid");
                        var t = i();
                        return r.from(t.privateKeyModInverse(Uint8Array.from(e)));
                      },
                      privateKeyTweakAdd: function (e, t) {
                        return r.from(n.privateKeyTweakAdd(Uint8Array.from(e), t));
                      },
                      privateKeyTweakMul: function (e, t) {
                        return r.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(t)));
                      },
                      publicKeyCreate: function (e, t) {
                        return r.from(n.publicKeyCreate(Uint8Array.from(e), t));
                      },
                      publicKeyConvert: function (e, t) {
                        return r.from(n.publicKeyConvert(Uint8Array.from(e), t));
                      },
                      publicKeyVerify: function (e) {
                        return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e));
                      },
                      publicKeyTweakAdd: function (e, t, i) {
                        return r.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(t), i));
                      },
                      publicKeyTweakMul: function (e, t, i) {
                        return r.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(t), i));
                      },
                      publicKeyCombine: function (e, t) {
                        var i = [];
                        return (
                          e.forEach(function (e) {
                            i.push(Uint8Array.from(e));
                          }),
                          r.from(n.publicKeyCombine(i, t))
                        );
                      },
                      signatureNormalize: function (e) {
                        return r.from(n.signatureNormalize(Uint8Array.from(e)));
                      },
                      signatureExport: function (e) {
                        return r.from(n.signatureExport(Uint8Array.from(e)));
                      },
                      signatureImport: function (e) {
                        return r.from(n.signatureImport(Uint8Array.from(e)));
                      },
                      signatureImportLax: function (e) {
                        if (0 === e.length) throw new RangeError("signature length is invalid");
                        var t = i(),
                          r = o.signatureImportLax(e);
                        if (null === r) throw new Error("couldn't parse DER signature");
                        return t.signatureImport(r);
                      },
                      sign: function (e, t, i) {
                        if (null === i) throw new TypeError("options should be an Object");
                        var o = void 0;
                        if (i) {
                          if (((o = {}), null === i.data)) throw new TypeError("options.data should be a Buffer");
                          if (i.data) {
                            if (32 !== i.data.length) throw new RangeError("options.data length is invalid");
                            o.data = new Uint8Array(i.data);
                          }
                          if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
                          i.noncefn &&
                            (o.noncefn = function (e, t, n, o, s) {
                              var a = null != n ? r.from(n) : null,
                                c = null != o ? r.from(o) : null,
                                u = r.from("");
                              return i.noncefn && (u = i.noncefn(r.from(e), r.from(t), a, c, s)), Uint8Array.from(u);
                            });
                        }
                        var s = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(t), o);
                        return { signature: r.from(s.signature), recovery: s.recid };
                      },
                      verify: function (e, t, r) {
                        return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r);
                      },
                      recover: function (e, t, i, o) {
                        return r.from(n.ecdsaRecover(Uint8Array.from(t), i, Uint8Array.from(e), o));
                      },
                      ecdh: function (e, t) {
                        return r.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(t), {}));
                      },
                      ecdhUnsafe: function (e, t, n) {
                        if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
                        if (32 !== t.length) throw new RangeError("private key length is invalid");
                        var o = i();
                        return r.from(o.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(t), n));
                      }
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-sig-util>ethereumjs-util", file: "node_modules/eth-sig-util/node_modules/ethereumjs-util/dist/secp256k1-adapter.js" }
    ],
    [
      3235,
      { buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (e) {
                  (function () {
                    var t = e.from([
                        48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255,
                        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
                        255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98,
                        149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255,
                        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191,
                        210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                      ]),
                      n = e.from([
                        48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255,
                        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
                        255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98,
                        149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38,
                        163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16,
                        212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220,
                        230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                      ]);
                    (r.privateKeyExport = function (r, i, o) {
                      var s = e.from(o ? t : n);
                      return r.copy(s, o ? 8 : 9), i.copy(s, o ? 181 : 214), s;
                    }),
                      (r.privateKeyImport = function (e) {
                        var t = e.length,
                          r = 0;
                        if (t < r + 1 || 48 !== e[r]) return null;
                        if (t < (r += 1) + 1 || !(128 & e[r])) return null;
                        var n = 127 & e[r];
                        if (n < 1 || n > 2) return null;
                        if (t < (r += 1) + n) return null;
                        var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                        return t < (r += n) + i ||
                          t < r + 3 ||
                          2 !== e[r] ||
                          1 !== e[r + 1] ||
                          1 !== e[r + 2] ||
                          t < (r += 3) + 2 ||
                          4 !== e[r] ||
                          e[r + 1] > 32 ||
                          t < r + 2 + e[r + 1]
                          ? null
                          : e.slice(r + 2, r + 2 + e[r + 1]);
                      }),
                      (r.signatureImportLax = function (t) {
                        var r = e.alloc(32, 0),
                          n = e.alloc(32, 0),
                          i = t.length,
                          o = 0;
                        if (48 !== t[o++]) return null;
                        var s = t[o++];
                        if (128 & s && (o += s - 128) > i) return null;
                        if (2 !== t[o++]) return null;
                        var a = t[o++];
                        if (128 & a) {
                          if (o + (s = a - 128) > i) return null;
                          for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                          for (a = 0; s > 0; o += 1, s -= 1) a = (a << 8) + t[o];
                        }
                        if (a > i - o) return null;
                        var c = o;
                        if (((o += a), 2 !== t[o++])) return null;
                        var u = t[o++];
                        if (128 & u) {
                          if (o + (s = u - 128) > i) return null;
                          for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                          for (u = 0; s > 0; o += 1, s -= 1) u = (u << 8) + t[o];
                        }
                        if (u > i - o) return null;
                        var l = o;
                        for (o += u; a > 0 && 0 === t[c]; a -= 1, c += 1);
                        if (a > 32) return null;
                        var d = t.slice(c, c + a);
                        for (d.copy(r, 32 - d.length); u > 0 && 0 === t[l]; u -= 1, l += 1);
                        if (u > 32) return null;
                        var f = t.slice(l, l + u);
                        return f.copy(n, 32 - f.length), { r: r, s: n };
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-sig-util>ethereumjs-util", file: "node_modules/eth-sig-util/node_modules/ethereumjs-util/dist/secp256k1-lib/der.js" }
    ],
    [
      3236,
      { "bn.js": 2851, buffer: 2913, elliptic: 3153 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n = e("bn.js"),
                      i = new (0, e("elliptic").ec)("secp256k1"),
                      o = i.curve;
                    (r.privateKeyExport = function (e, t) {
                      var r = new n(e);
                      if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
                      var a = i.g.mul(r);
                      return s(a.getX(), a.getY(), t);
                    }),
                      (r.privateKeyModInverse = function (e) {
                        var r = new n(e);
                        if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
                        return r.invm(o.n).toArrayLike(t, "be", 32);
                      }),
                      (r.signatureImport = function (e) {
                        var r = new n(e.r);
                        r.ucmp(o.n) >= 0 && (r = new n(0));
                        var i = new n(e.s);
                        return i.ucmp(o.n) >= 0 && (i = new n(0)), t.concat([r.toArrayLike(t, "be", 32), i.toArrayLike(t, "be", 32)]);
                      }),
                      (r.ecdhUnsafe = function (e, t, r) {
                        var a = i.keyFromPublic(e),
                          c = new n(t);
                        if (c.ucmp(o.n) >= 0 || c.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                        var u = a.pub.mul(c);
                        return s(u.getX(), u.getY(), r);
                      });
                    var s = function (e, r, n) {
                      var i = void 0;
                      return (
                        n
                          ? (((i = t.alloc(33))[0] = r.isOdd() ? 3 : 2), e.toArrayLike(t, "be", 32).copy(i, 1))
                          : (((i = t.alloc(65))[0] = 4), e.toArrayLike(t, "be", 32).copy(i, 1), r.toArrayLike(t, "be", 32).copy(i, 33)),
                        i
                      );
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-sig-util>ethereumjs-util",
        file: "node_modules/eth-sig-util/node_modules/ethereumjs-util/dist/secp256k1-lib/index.js"
      }
    ],
    [
      324,
      { "multibase/src/constants": 302, "web-encoding": 4725 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const { names: n } = e("multibase/src/constants"),
                  { TextEncoder: i } = e("web-encoding"),
                  o = new i();
                t.exports = function (e, t = "utf8") {
                  if ("utf8" === t || "utf-8" === t) return o.encode(e);
                  if ("ascii" === t)
                    return (function (e) {
                      const t = new Uint8Array(e.length);
                      for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                      return t;
                    })(e);
                  const r = n[t];
                  if (!r) throw new Error("Unknown base");
                  return r.decode(e);
                };
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multicodec>uint8arrays",
        file: "node_modules/@ensdomains/content-hash/node_modules/uint8arrays/from-string.js"
      }
    ],
    [
      325,
      { "multibase/src/constants": 302, "web-encoding": 4725 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const { names: n } = e("multibase/src/constants"),
                  { TextDecoder: i } = e("web-encoding"),
                  o = new i("utf8");
                t.exports = function (e, t = "utf8") {
                  if ("utf8" === t || "utf-8" === t) return o.decode(e);
                  if ("ascii" === t)
                    return (function (e) {
                      let t = "";
                      for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                      return t;
                    })(e);
                  const r = n[t];
                  if (!r) throw new Error("Unknown base");
                  return r.encode(e);
                };
              };
            };
      },
      {
        package: "@ensdomains/content-hash>multicodec>uint8arrays",
        file: "node_modules/@ensdomains/content-hash/node_modules/uint8arrays/to-string.js"
      }
    ],
    [
      326,
      { cids: 2949 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("cids");
                r.cidForWeb = (e) => {
                  let t = new n(e);
                  0 === t.version && (t = t.toV1());
                  let r = t.toString("base32");
                  if (r.length > 63) {
                    const e = t.toString("base36");
                    if (e.length <= 63) return e;
                    throw new TypeError("CID is longer than DNS limit of 63 characters and is not compatible with public gateways");
                  }
                  return r;
                };
                r.cidV0ToV1Base32 = (e) => {
                  let t = new n(e);
                  return 0 === t.version && (t = t.toV1()), t.toString("base32");
                };
              };
            };
      },
      { package: "@ensdomains/content-hash", file: "node_modules/@ensdomains/content-hash/src/helpers.js" }
    ],
    [
      327,
      { "./helpers": 326, "./profiles": 328, multicodec: 311, multihashes: 322 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                const n = e("multicodec"),
                  i = e("multihashes"),
                  { hexStringToBuffer: o, profiles: s } = e("./profiles"),
                  { cidForWeb: a, cidV0ToV1Base32: c } = e("./helpers");
                t.exports = {
                  helpers: { cidForWeb: a, cidV0ToV1Base32: c },
                  decode: function (e) {
                    const t = o(e),
                      r = n.getCodec(t),
                      i = n.rmPrefix(t);
                    let a = s[r];
                    return a || (a = s.default), a.decode(i);
                  },
                  fromIpfs: function (e) {
                    return this.encode("ipfs-ns", e);
                  },
                  fromSkylink: function (e) {
                    return this.encode("skynet-ns", e);
                  },
                  fromSwarm: function (e) {
                    return this.encode("swarm-ns", e);
                  },
                  encode: function (e, t) {
                    let r = s[e];
                    r || (r = s.default);
                    const o = r.encode(t);
                    return i.toHexString(n.addPrefix(e, o));
                  },
                  getCodec: function (e) {
                    let t = o(e);
                    return n.getCodec(t);
                  }
                };
              };
            };
      },
      { package: "@ensdomains/content-hash", file: "node_modules/@ensdomains/content-hash/src/index.js" }
    ],
    [
      328,
      { buffer: 2913, cids: 2949, "js-base64": 3859, multihashes: 322 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    const n = e("cids"),
                      i = e("multihashes"),
                      o = e("js-base64"),
                      s = (e) => {
                        let t = e.slice(0, 2),
                          r = e.slice(2),
                          n = "";
                        return (n = "0x" === t ? r : e), i.fromHexString(n);
                      },
                      a = (e) => {
                        try {
                          const { multihash: t } = e;
                          if (t.length < 38) {
                            const e = i.decode(t);
                            if ("identity" === e.name && e.length < 36) return !1;
                          }
                          return !0;
                        } catch (e) {
                          return !1;
                        }
                        return !1;
                      },
                      c = {
                        skynet: (e) => o.toUint8Array(e),
                        swarm: (e) => {
                          const t = i.encode(s(e), "keccak-256");
                          return new n(1, "swarm-manifest", t).bytes;
                        },
                        ipfs: (e) => new n(e).toV1().bytes,
                        ipns: (e) => {
                          const t = new n(e);
                          if (!a(t))
                            throw Error("ipns-ns allows only valid cryptographic libp2p-key identifiers, try using ED25519 pubkey instead");
                          return new n(1, "libp2p-key", t.multihash).bytes;
                        },
                        utf8: (e) => t.from(e, "utf8")
                      },
                      u = {
                        hexMultiHash: (e) => {
                          const t = new n(e);
                          return i.decode(t.multihash).digest.toString("hex");
                        },
                        ipfs: (e) => {
                          const t = new n(e).toV1();
                          return t.toString("libp2p-key" === t.codec ? "base36" : "base32");
                        },
                        ipns: (e) => {
                          const t = new n(e).toV1();
                          return a(t)
                            ? t.toString("base36")
                            : (console.warn(
                                "[ensdomains/content-hash] use of non-cryptographic identifiers in ipns-ns is deprecated and will be removed, migrate to ED25519 libp2p-key"
                              ),
                              String(i.decode(new n(e).multihash).digest));
                        },
                        utf8: (e) => e.toString("utf8"),
                        base64: (e) => o.fromUint8Array(e, !0)
                      },
                      l = {
                        "skynet-ns": { encode: c.skynet, decode: u.base64 },
                        "swarm-ns": { encode: c.swarm, decode: u.hexMultiHash },
                        "ipfs-ns": { encode: c.ipfs, decode: u.ipfs },
                        "ipns-ns": { encode: c.ipns, decode: u.ipns },
                        default: { encode: c.utf8, decode: u.utf8 }
                      };
                    (r.hexStringToBuffer = s), (r.profiles = l);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "@ensdomains/content-hash", file: "node_modules/@ensdomains/content-hash/src/profiles.js" }
    ],
    [
      3281,
      { "./index": 3282, "ethereum-cryptography/hdkey": 3286 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(r, "__esModule", { value: !0 });
                var i = n(e("./index")),
                  o = e("ethereum-cryptography/hdkey"),
                  s = (function () {
                    function e(e) {
                      this._hdkey = e;
                    }
                    return (
                      (e.fromMasterSeed = function (t) {
                        return new e(o.HDKey.fromMasterSeed(t));
                      }),
                      (e.fromExtendedKey = function (t) {
                        return new e(o.HDKey.fromExtendedKey(t));
                      }),
                      (e.prototype.privateExtendedKey = function () {
                        if (!this._hdkey.privateExtendedKey) throw new Error("This is a public key only wallet");
                        return this._hdkey.privateExtendedKey;
                      }),
                      (e.prototype.publicExtendedKey = function () {
                        return this._hdkey.publicExtendedKey;
                      }),
                      (e.prototype.derivePath = function (t) {
                        return new e(this._hdkey.derive(t));
                      }),
                      (e.prototype.deriveChild = function (t) {
                        return new e(this._hdkey.deriveChild(t));
                      }),
                      (e.prototype.getWallet = function () {
                        return this._hdkey._privateKey
                          ? i.default.fromPrivateKey(this._hdkey._privateKey)
                          : i.default.fromPublicKey(this._hdkey._publicKey, !0);
                      }),
                      e
                    );
                  })();
                r.default = s;
              };
            };
      },
      { package: "@metamask/keyring-controller>ethereumjs-wallet", file: "node_modules/ethereumjs-wallet/dist.browser/hdkey.js" }
    ],
    [
      3282,
      {
        "./hdkey": 3281,
        "./thirdparty": 3283,
        bs58check: 2917,
        buffer: 2913,
        crypto: 3123,
        "ethereumjs-util": 3302,
        randombytes: 4312,
        "scrypt-js": 4530,
        uuid: 4695
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__assign) ||
                        function () {
                          return (
                            (n =
                              Object.assign ||
                              function (e) {
                                for (var t, r = 1, n = arguments.length; r < n; r++)
                                  for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                              }),
                            n.apply(this, arguments)
                          );
                        },
                      i =
                        (this && this.__createBinding) ||
                        (Object.create
                          ? function (e, t, r, n) {
                              n === undefined && (n = r),
                                Object.defineProperty(e, n, {
                                  enumerable: !0,
                                  get: function () {
                                    return t[r];
                                  }
                                });
                            }
                          : function (e, t, r, n) {
                              n === undefined && (n = r), (e[n] = t[r]);
                            }),
                      o =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                          ? function (e, t) {
                              Object.defineProperty(e, "default", { enumerable: !0, value: t });
                            }
                          : function (e, t) {
                              e.default = t;
                            }),
                      s =
                        (this && this.__importStar) ||
                        function (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && i(t, e, r);
                          return o(t, e), t;
                        },
                      a =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      c =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        },
                      u =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.thirdparty = r.hdkey = void 0);
                    var l = s(e("crypto")),
                      d = e("ethereumjs-util"),
                      f = e("scrypt-js"),
                      h = e("./hdkey");
                    Object.defineProperty(r, "hdkey", {
                      enumerable: !0,
                      get: function () {
                        return u(h).default;
                      }
                    });
                    var p = e("./thirdparty");
                    Object.defineProperty(r, "thirdparty", {
                      enumerable: !0,
                      get: function () {
                        return u(p).default;
                      }
                    });
                    var m = e("bs58check"),
                      g = e("randombytes"),
                      y = e("uuid").v4;
                    function b(e, t, r) {
                      if ((t.toLowerCase().startsWith("0x") && (t = t.slice(2)), !t && !r)) return t;
                      if (r % 2) throw new Error("Invalid length argument, must be an even number");
                      if ("number" == typeof r && t.length !== r)
                        throw new Error("Invalid " + e + ", string must be " + r + " hex characters");
                      if (!/^([0-9a-f]{2})+$/i.test(t))
                        throw new Error(
                          "Invalid " +
                            e +
                            ", string must be " +
                            ("number" == typeof r ? r : "empty or a non-zero even number of") +
                            " hex characters"
                        );
                      return t;
                    }
                    function v(e, r, n) {
                      if (!t.isBuffer(r))
                        throw new Error(
                          "Invalid " +
                            e +
                            ", must be a string (" +
                            ("number" == typeof n ? "" + 2 * n : "empty or a non-zero even number of") +
                            " hex characters) or buffer" +
                            ("number" == typeof n ? " (" + n + " bytes)" : "")
                        );
                      if ("number" == typeof n && r.length !== n) throw new Error("Invalid " + e + ", buffer must be " + n + " bytes");
                      return r;
                    }
                    var w = (function () {
                      function e(e, t) {
                        if ((void 0 === t && (t = undefined), (this.privateKey = e), (this.publicKey = t), e && t))
                          throw new Error("Cannot supply both a private and a public key to the constructor");
                        if (e && !(0, d.isValidPrivate)(e))
                          throw new Error("Private key does not satisfy the curve requirements (ie. it is invalid)");
                        if (t && !(0, d.isValidPublic)(t)) throw new Error("Invalid public key");
                      }
                      return (
                        (e.generate = function (t) {
                          if ((void 0 === t && (t = !1), !t)) return new e(g(32));
                          for (var r = new d.BN("088f924eeceeda7fe92e1f5b0fffffffffffffff", 16); ; ) {
                            var n = g(32);
                            if (new d.BN((0, d.privateToAddress)(n)).lte(r)) return new e(n);
                          }
                        }),
                        (e.generateVanityAddress = function (t) {
                          for (t instanceof RegExp || (t = new RegExp(t)); ; ) {
                            var r = g(32),
                              n = (0, d.privateToAddress)(r);
                            if (t.test(n.toString("hex"))) return new e(r);
                          }
                        }),
                        (e.fromPublicKey = function (t, r) {
                          return void 0 === r && (r = !1), r && (t = (0, d.importPublic)(t)), new e(undefined, t);
                        }),
                        (e.fromExtendedPublicKey = function (t) {
                          if ("xpub" !== t.slice(0, 4)) throw new Error("Not an extended public key");
                          var r = m.decode(t).slice(45);
                          return e.fromPublicKey(r, !0);
                        }),
                        (e.fromPrivateKey = function (t) {
                          return new e(t);
                        }),
                        (e.fromExtendedPrivateKey = function (t) {
                          if ("xprv" !== t.slice(0, 4)) throw new Error("Not an extended private key");
                          var r = m.decode(t);
                          if (0 !== r[45]) throw new Error("Invalid extended private key");
                          return e.fromPrivateKey(r.slice(46));
                        }),
                        (e.fromV1 = function (r, n) {
                          return a(this, void 0, void 0, function () {
                            var i, o, s, a, u;
                            return c(this, function (c) {
                              switch (c.label) {
                                case 0:
                                  if ("1" !== (i = "object" == typeof r ? r : JSON.parse(r)).Version) throw new Error("Not a V1 Wallet");
                                  if ("scrypt" !== i.Crypto.KeyHeader.Kdf) throw new Error("Unsupported key derivation scheme");
                                  return (
                                    (o = i.Crypto.KeyHeader.KdfParams),
                                    [4, (0, f.scrypt)(t.from(n), t.from(i.Crypto.Salt, "hex"), o.N, o.R, o.P, o.DkLen)]
                                  );
                                case 1:
                                  if (
                                    ((s = c.sent()),
                                    (a = t.from(i.Crypto.CipherText, "hex")),
                                    (0, d.keccak256)(t.concat([s.slice(16, 32), a])).toString("hex") !== i.Crypto.MAC)
                                  )
                                    throw new Error("Key derivation failed - possibly wrong passphrase");
                                  return (
                                    (u = l.createDecipheriv(
                                      "aes-128-cbc",
                                      (0, d.keccak256)(s.slice(0, 16)).slice(0, 16),
                                      t.from(i.Crypto.IV, "hex")
                                    )),
                                    [2, new e(k(u, a))]
                                  );
                              }
                            });
                          });
                        }),
                        (e.fromV3 = function (r, n, i) {
                          return (
                            void 0 === i && (i = !1),
                            a(this, void 0, void 0, function () {
                              var o, s, a, u, h;
                              return c(this, function (c) {
                                switch (c.label) {
                                  case 0:
                                    if (3 !== (o = "object" == typeof r ? r : JSON.parse(i ? r.toLowerCase() : r)).version)
                                      throw new Error("Not a V3 wallet");
                                    return "scrypt" !== o.crypto.kdf
                                      ? [3, 2]
                                      : ((a = o.crypto.kdfparams),
                                        [4, (0, f.scrypt)(t.from(n), t.from(a.salt, "hex"), a.n, a.r, a.p, a.dklen)]);
                                  case 1:
                                    return (s = c.sent()), [3, 3];
                                  case 2:
                                    if ("pbkdf2" !== o.crypto.kdf) throw new Error("Unsupported key derivation scheme");
                                    if ("hmac-sha256" !== (a = o.crypto.kdfparams).prf) throw new Error("Unsupported parameters to PBKDF2");
                                    (s = l.pbkdf2Sync(t.from(n), t.from(a.salt, "hex"), a.c, a.dklen, "sha256")), (c.label = 3);
                                  case 3:
                                    if (
                                      ((u = t.from(o.crypto.ciphertext, "hex")),
                                      (0, d.keccak256)(t.concat([t.from(s.slice(16, 32)), u])).toString("hex") !== o.crypto.mac)
                                    )
                                      throw new Error("Key derivation failed - possibly wrong passphrase");
                                    return (
                                      (h = l.createDecipheriv(o.crypto.cipher, s.slice(0, 16), t.from(o.crypto.cipherparams.iv, "hex"))),
                                      [2, new e(k(h, u))]
                                    );
                                }
                              });
                            })
                          );
                        }),
                        (e.fromEthSale = function (r, n) {
                          var i = "object" == typeof r ? r : JSON.parse(r),
                            o = t.from(i.encseed, "hex"),
                            s = l.pbkdf2Sync(n, n, 2e3, 32, "sha256").slice(0, 16),
                            a = k(l.createDecipheriv("aes-128-cbc", s, o.slice(0, 16)), o.slice(16)),
                            c = new e((0, d.keccak256)(a));
                          if (c.getAddress().toString("hex") !== i.ethaddr)
                            throw new Error("Decoded key mismatch - possibly wrong passphrase");
                          return c;
                        }),
                        Object.defineProperty(e.prototype, "pubKey", {
                          get: function () {
                            return E(this.publicKey) || (this.publicKey = (0, d.privateToPublic)(this.privateKey)), this.publicKey;
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "privKey", {
                          get: function () {
                            if (!E(this.privateKey)) throw new Error("This is a public key only wallet");
                            return this.privateKey;
                          },
                          enumerable: !1,
                          configurable: !0
                        }),
                        (e.prototype.getPrivateKey = function () {
                          return this.privKey;
                        }),
                        (e.prototype.getPrivateKeyString = function () {
                          return (0, d.bufferToHex)(this.privKey);
                        }),
                        (e.prototype.getPublicKey = function () {
                          return this.pubKey;
                        }),
                        (e.prototype.getPublicKeyString = function () {
                          return (0, d.bufferToHex)(this.getPublicKey());
                        }),
                        (e.prototype.getAddress = function () {
                          return (0, d.publicToAddress)(this.pubKey);
                        }),
                        (e.prototype.getAddressString = function () {
                          return (0, d.bufferToHex)(this.getAddress());
                        }),
                        (e.prototype.getChecksumAddressString = function () {
                          return (0, d.toChecksumAddress)(this.getAddressString());
                        }),
                        (e.prototype.toV3 = function (e, r) {
                          return a(this, void 0, void 0, function () {
                            var i, o, s, a, u, h;
                            return c(this, function (c) {
                              switch (c.label) {
                                case 0:
                                  if (!E(this.privateKey)) throw new Error("This is a public key only wallet");
                                  switch (
                                    ((p = r),
                                    (m = {
                                      cipher: "aes-128-ctr",
                                      kdf: "scrypt",
                                      salt: g(32),
                                      iv: g(16),
                                      uuid: g(16),
                                      dklen: 32,
                                      c: 262144,
                                      n: 262144,
                                      r: 8,
                                      p: 1
                                    }),
                                    (i = p
                                      ? ("string" == typeof p.salt && (p.salt = t.from(b("salt", p.salt), "hex")),
                                        "string" == typeof p.iv && (p.iv = t.from(b("iv", p.iv, 32), "hex")),
                                        "string" == typeof p.uuid && (p.uuid = t.from(b("uuid", p.uuid, 32), "hex")),
                                        p.salt && v("salt", p.salt),
                                        p.iv && v("iv", p.iv, 16),
                                        p.uuid && v("uuid", p.uuid, 16),
                                        n(n({}, m), p))
                                      : m),
                                    i.kdf)
                                  ) {
                                    case "pbkdf2":
                                      return [3, 1];
                                    case "scrypt":
                                      return [3, 2];
                                  }
                                  return [3, 4];
                                case 1:
                                  return (
                                    (o = (function (e) {
                                      return { dklen: e.dklen, salt: e.salt, c: e.c, prf: "hmac-sha256" };
                                    })(i)),
                                    (s = l.pbkdf2Sync(t.from(e), o.salt, o.c, o.dklen, "sha256")),
                                    [3, 5]
                                  );
                                case 2:
                                  return (
                                    (o = (function (e) {
                                      return { dklen: e.dklen, salt: e.salt, n: e.n, r: e.r, p: e.p };
                                    })(i)),
                                    [4, (0, f.scrypt)(t.from(e), o.salt, o.n, o.r, o.p, o.dklen)]
                                  );
                                case 3:
                                  return (s = c.sent()), [3, 5];
                                case 4:
                                  throw new Error("Unsupported kdf");
                                case 5:
                                  if (!(a = l.createCipheriv(i.cipher, s.slice(0, 16), i.iv))) throw new Error("Unsupported cipher");
                                  return (
                                    (u = k(a, this.privKey)),
                                    (h = (0, d.keccak256)(t.concat([t.from(s.slice(16, 32)), t.from(u)]))),
                                    [
                                      2,
                                      {
                                        version: 3,
                                        id: y({ random: i.uuid }),
                                        address: this.getAddress().toString("hex"),
                                        crypto: {
                                          ciphertext: u.toString("hex"),
                                          cipherparams: { iv: i.iv.toString("hex") },
                                          cipher: i.cipher,
                                          kdf: i.kdf,
                                          kdfparams: n(n({}, o), { salt: o.salt.toString("hex") }),
                                          mac: h.toString("hex")
                                        }
                                      }
                                    ]
                                  );
                              }
                              var p, m;
                            });
                          });
                        }),
                        (e.prototype.getV3Filename = function (e) {
                          return [
                            "UTC--",
                            (e ? new Date(e) : new Date()).toJSON().replace(/:/g, "-"),
                            "--",
                            this.getAddress().toString("hex")
                          ].join("");
                        }),
                        (e.prototype.toV3String = function (e, t) {
                          return a(this, void 0, void 0, function () {
                            var r, n;
                            return c(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return (n = (r = JSON).stringify), [4, this.toV3(e, t)];
                                case 1:
                                  return [2, n.apply(r, [i.sent()])];
                              }
                            });
                          });
                        }),
                        e
                      );
                    })();
                    function k(e, r) {
                      return t.concat([e.update(r), e.final()]);
                    }
                    function E(e) {
                      return e !== undefined && null !== e;
                    }
                    r.default = w;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "@metamask/keyring-controller>ethereumjs-wallet", file: "node_modules/ethereumjs-wallet/dist.browser/index.js" }
    ],
    [
      3283,
      { "./index": 3282, "aes-js": 2737, buffer: 2913, crypto: 3123, "ethereumjs-util": 3302, "scrypt-js": 4530, utf8: 4690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__createBinding) ||
                        (Object.create
                          ? function (e, t, r, n) {
                              n === undefined && (n = r),
                                Object.defineProperty(e, n, {
                                  enumerable: !0,
                                  get: function () {
                                    return t[r];
                                  }
                                });
                            }
                          : function (e, t, r, n) {
                              n === undefined && (n = r), (e[n] = t[r]);
                            }),
                      i =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                          ? function (e, t) {
                              Object.defineProperty(e, "default", { enumerable: !0, value: t });
                            }
                          : function (e, t) {
                              e.default = t;
                            }),
                      o =
                        (this && this.__importStar) ||
                        function (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                          return i(t, e), t;
                        },
                      s =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      a =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        },
                      c =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.fromQuorumWallet = r.fromKryptoKit = r.fromEtherCamp = r.fromEtherWallet = void 0);
                    var u = o(e("crypto")),
                      l = e("ethereumjs-util"),
                      d = e("scrypt-js"),
                      f = c(e("./index")),
                      h = e("utf8"),
                      p = e("aes-js");
                    var m = { count: 1, keysize: 16, ivsize: 16, digest: "md5" };
                    function g(e, r, n) {
                      var i = (function (e) {
                        return e
                          ? {
                              count: e.count || m.count,
                              keysize: e.keysize || m.keysize,
                              ivsize: e.ivsize || m.ivsize,
                              digest: e.digest || m.digest
                            }
                          : m;
                      })(n);
                      function o(t) {
                        var n = u.createHash(i.digest);
                        n.update(t), n.update(e), n.update(r), (t = n.digest());
                        for (var o = 1, s = i.count; o < s; o++) (n = u.createHash(i.digest)).update(t), (t = n.digest());
                        return t;
                      }
                      for (var s = [], a = 0; t.concat(s).length < i.keysize + i.ivsize; ) (s[a] = o(0 === a ? t.alloc(0) : s[a - 1])), a++;
                      var c = t.concat(s);
                      return { key: c.slice(0, i.keysize), iv: c.slice(i.keysize, i.keysize + i.ivsize) };
                    }
                    function y(e, r) {
                      var n,
                        i = "object" == typeof e ? e : JSON.parse(e);
                      if (i.locked) {
                        if ("string" != typeof r) throw new Error("Password required");
                        if (r.length < 7) throw new Error("Password must be at least 7 characters");
                        var o = (function (e) {
                          var r = t.from(e, "base64");
                          return "Salted__" === r.slice(0, 8).toString()
                            ? { salt: r.slice(8, 16), ciphertext: r.slice(16) }
                            : { ciphertext: r };
                        })(i.encrypted ? i.private.slice(0, 128) : i.private);
                        if (!o.salt) throw new Error("Unsupported EtherWallet key format");
                        var s = g(t.from(r), o.salt, { keysize: 32, ivsize: 16 });
                        (n = (function (e, r) {
                          return t.concat([e.update(r), e.final()]);
                        })(u.createDecipheriv("aes-256-cbc", s.key, s.iv), t.from(o.ciphertext))),
                          (n = t.from(h.decode(n.toString()), "hex"));
                      } else {
                        if (64 !== i.private.length) throw new Error("Invalid private key length");
                        n = t.from(i.private, "hex");
                      }
                      var a = new f.default(n);
                      if (a.getAddressString() !== i.address) throw new Error("Invalid private key or address");
                      return a;
                    }
                    function b(e) {
                      return new f.default((0, l.keccak256)(t.from(e)));
                    }
                    function v(e, r) {
                      return s(this, void 0, void 0, function () {
                        var n, i, o, s, c, u, h;
                        return a(this, function (a) {
                          switch (a.label) {
                            case 0:
                              return (
                                "#" === e[0] && (e = e.slice(1)),
                                (n = e[0]),
                                (e = e.slice(1)),
                                "d" !== n ? [3, 1] : ((i = (0, l.sha256)((0, l.toBuffer)(e))), [3, 4])
                              );
                            case 1:
                              if ("q" !== n) return [3, 3];
                              if ("string" != typeof r) throw new Error("Password required");
                              return (
                                (o = (0, l.sha256)(t.from(e.slice(0, 30)))),
                                (s = e.slice(30, 46)),
                                (c = (function (e) {
                                  function r(e) {
                                    try {
                                      return decodeURIComponent(e);
                                    } catch (e) {
                                      return String.fromCharCode(65533);
                                    }
                                  }
                                  for (var n = "", i = "", o = 0; o < e.length; o++)
                                    e[o] <= 127 ? ((n += r(i) + String.fromCharCode(e[o])), (i = "")) : (i += "%" + e[o].toString(16));
                                  return t.from(n + r(i));
                                })(o)),
                                [4, (0, d.scrypt)(t.from(r, "utf8"), c, 16384, 8, 1, 32)]
                              );
                            case 2:
                              if (
                                ((u = a.sent()),
                                (h = new p.ModeOfOperation.ecb(u)),
                                (i = t.concat([t.from(h.decrypt(o.slice(0, 16))), t.from(h.decrypt(o.slice(16, 32)))])),
                                s.length > 0 &&
                                  s !==
                                    (0, l.sha256)((0, l.sha256)(i))
                                      .slice(0, 8)
                                      .toString("hex"))
                              )
                                throw new Error("Failed to decrypt input - possibly invalid passphrase");
                              return [3, 4];
                            case 3:
                              throw new Error("Unsupported or invalid entropy type");
                            case 4:
                              return [2, new f.default(i)];
                          }
                        });
                      });
                    }
                    function w(e, t) {
                      if (e.length < 10) throw new Error("Passphrase must be at least 10 characters");
                      if (t.length < 10) throw new Error("User id must be at least 10 characters");
                      var r = e + t,
                        n = u.pbkdf2Sync(r, r, 2e3, 32, "sha256");
                      return new f.default(n);
                    }
                    (r.fromEtherWallet = y), (r.fromEtherCamp = b), (r.fromKryptoKit = v), (r.fromQuorumWallet = w);
                    var k = { fromEtherWallet: y, fromEtherCamp: b, fromKryptoKit: v, fromQuorumWallet: w };
                    r.default = k;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "@metamask/keyring-controller>ethereumjs-wallet", file: "node_modules/ethereumjs-wallet/dist.browser/thirdparty.js" }
    ],
    [
      3284,
      { buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (e) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.createHashFunction = function (t) {
                        return function (r) {
                          var n = t();
                          return n.update(r), e.from(n.digest());
                        };
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/hash-utils.js"
      }
    ],
    [
      3285,
      { "./hash-utils": 3284, keccak: 3886 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("./hash-utils"),
                  i = e("keccak");
                (r.keccak224 = n.createHashFunction(function () {
                  return i("keccak224");
                })),
                  (r.keccak256 = n.createHashFunction(function () {
                    return i("keccak256");
                  })),
                  (r.keccak384 = n.createHashFunction(function () {
                    return i("keccak384");
                  })),
                  (r.keccak512 = n.createHashFunction(function () {
                    return i("keccak512");
                  }));
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/keccak.js"
      }
    ],
    [
      3286,
      { "./vendor/hdkey-without-crypto": 3291 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("./vendor/hdkey-without-crypto");
                r.HDKey = n;
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/pure/hdkey.js"
      }
    ],
    [
      3287,
      { "../hash-utils": 3284, "hash.js/lib/hash/ripemd": 3813 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("hash.js/lib/hash/ripemd").ripemd160,
                  i = e("../hash-utils");
                r.ripemd160 = i.createHashFunction(function () {
                  return new n();
                });
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/pure/ripemd160.js"
      }
    ],
    [
      3288,
      { "../hash-utils": 3284, "hash.js/lib/hash/sha/256": 3817 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("hash.js/lib/hash/sha/256"),
                  i = e("../hash-utils");
                r.sha256 = i.createHashFunction(function () {
                  return new n();
                });
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/pure/sha256.js"
      }
    ],
    [
      3289,
      { "../ripemd160": 3287, "../sha256": 3288, buffer: 2913, "create-hmac": 3116, randombytes: 4312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var n = e("../ripemd160"),
                      i = e("../sha256");
                    (r.createHmac = e("create-hmac")), (r.randomBytes = e("randombytes"));
                    var o = (function () {
                      function e(e) {
                        (this.hashFunction = e), (this.buffers = []);
                      }
                      return (
                        (e.prototype.update = function (e) {
                          if (!t.isBuffer(e)) throw new Error("hdkey-crypto shim is outdated");
                          return this.buffers.push(e), this;
                        }),
                        (e.prototype.digest = function (e) {
                          if (e) throw new Error("hdkey-crypto shim is outdated");
                          return this.hashFunction(t.concat(this.buffers));
                        }),
                        e
                      );
                    })();
                    r.createHash = function (e) {
                      if ("ripemd160" === e) return new o(n.ripemd160);
                      if ("sha256" === e) return new o(i.sha256);
                      throw new Error("hdkey-crypto shim is outdated");
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/pure/shims/hdkey-crypto.js"
      }
    ],
    [
      3290,
      { "../../shims/hdkey-secp256k1v3": 3294 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (function (e) {
                    for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
                  })(e("../../shims/hdkey-secp256k1v3"));
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/pure/shims/hdkey-secp256k1v3.js"
      }
    ],
    [
      3291,
      { "../shims/hdkey-crypto": 3289, "../shims/hdkey-secp256k1v3": 3290, assert: 2907, bs58check: 2917, "safe-buffer": 4521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                function n(e) {
                  return e && "object" == typeof e && "default" in e ? e.default : e;
                }
                var i = n(e("assert")),
                  o = n(e("safe-buffer")),
                  s = n(e("bs58check")),
                  a = e("../shims/hdkey-crypto"),
                  c = e("../shims/hdkey-secp256k1v3"),
                  u = o.Buffer,
                  l = u.from("Bitcoin seed", "utf8"),
                  d = 2147483648,
                  f = { private: 76066276, public: 76067358 };
                function h(e) {
                  (this.versions = e || f),
                    (this.depth = 0),
                    (this.index = 0),
                    (this._privateKey = null),
                    (this._publicKey = null),
                    (this.chainCode = null),
                    (this._fingerprint = 0),
                    (this.parentFingerprint = 0);
                }
                function p(e, t, r) {
                  var n = u.allocUnsafe(78);
                  n.writeUInt32BE(t, 0), n.writeUInt8(e.depth, 4);
                  var i = e.depth ? e.parentFingerprint : 0;
                  return n.writeUInt32BE(i, 5), n.writeUInt32BE(e.index, 9), e.chainCode.copy(n, 13), r.copy(n, 45), n;
                }
                function m(e) {
                  var t = a.createHash("sha256").update(e).digest();
                  return a.createHash("ripemd160").update(t).digest();
                }
                Object.defineProperty(h.prototype, "fingerprint", {
                  get: function () {
                    return this._fingerprint;
                  }
                }),
                  Object.defineProperty(h.prototype, "identifier", {
                    get: function () {
                      return this._identifier;
                    }
                  }),
                  Object.defineProperty(h.prototype, "pubKeyHash", {
                    get: function () {
                      return this.identifier;
                    }
                  }),
                  Object.defineProperty(h.prototype, "privateKey", {
                    get: function () {
                      return this._privateKey;
                    },
                    set: function (e) {
                      i.equal(e.length, 32, "Private key must be 32 bytes."),
                        i(!0 === c.privateKeyVerify(e), "Invalid private key"),
                        (this._privateKey = e),
                        (this._publicKey = c.publicKeyCreate(e, !0)),
                        (this._identifier = m(this.publicKey)),
                        (this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0));
                    }
                  }),
                  Object.defineProperty(h.prototype, "publicKey", {
                    get: function () {
                      return this._publicKey;
                    },
                    set: function (e) {
                      i(33 === e.length || 65 === e.length, "Public key must be 33 or 65 bytes."),
                        i(!0 === c.publicKeyVerify(e), "Invalid public key"),
                        (this._publicKey = c.publicKeyConvert(e, !0)),
                        (this._identifier = m(this.publicKey)),
                        (this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)),
                        (this._privateKey = null);
                    }
                  }),
                  Object.defineProperty(h.prototype, "privateExtendedKey", {
                    get: function () {
                      return this._privateKey ? s.encode(p(this, this.versions.private, u.concat([u.alloc(1, 0), this.privateKey]))) : null;
                    }
                  }),
                  Object.defineProperty(h.prototype, "publicExtendedKey", {
                    get: function () {
                      return s.encode(p(this, this.versions.public, this.publicKey));
                    }
                  }),
                  (h.prototype.derive = function (e) {
                    if ("m" === e || "M" === e || "m'" === e || "M'" === e) return this;
                    var t = e.split("/"),
                      r = this;
                    return (
                      t.forEach(function (e, t) {
                        if (0 !== t) {
                          var n = e.length > 1 && "'" === e[e.length - 1],
                            o = parseInt(e, 10);
                          i(o < d, "Invalid index"), n && (o += d), (r = r.deriveChild(o));
                        } else i(/^[mM]{1}/.test(e), 'Path must start with "m" or "M"');
                      }),
                      r
                    );
                  }),
                  (h.prototype.deriveChild = function (e) {
                    var t,
                      r = e >= d,
                      n = u.allocUnsafe(4);
                    if ((n.writeUInt32BE(e, 0), r)) {
                      i(this.privateKey, "Could not derive hardened child key");
                      var o = this.privateKey,
                        s = u.alloc(1, 0);
                      (o = u.concat([s, o])), (t = u.concat([o, n]));
                    } else t = u.concat([this.publicKey, n]);
                    var l = a.createHmac("sha512", this.chainCode).update(t).digest(),
                      f = l.slice(0, 32),
                      p = l.slice(32),
                      m = new h(this.versions);
                    if (this.privateKey)
                      try {
                        m.privateKey = c.privateKeyTweakAdd(this.privateKey, f);
                      } catch (t) {
                        return this.deriveChild(e + 1);
                      }
                    else
                      try {
                        m.publicKey = c.publicKeyTweakAdd(this.publicKey, f, !0);
                      } catch (t) {
                        return this.deriveChild(e + 1);
                      }
                    return (m.chainCode = p), (m.depth = this.depth + 1), (m.parentFingerprint = this.fingerprint), (m.index = e), m;
                  }),
                  (h.prototype.sign = function (e) {
                    return c.sign(e, this.privateKey).signature;
                  }),
                  (h.prototype.verify = function (e, t) {
                    return c.verify(e, t, this.publicKey);
                  }),
                  (h.prototype.wipePrivateData = function () {
                    return (
                      this._privateKey && a.randomBytes(this._privateKey.length).copy(this._privateKey), (this._privateKey = null), this
                    );
                  }),
                  (h.prototype.toJSON = function () {
                    return { xpriv: this.privateExtendedKey, xpub: this.publicExtendedKey };
                  }),
                  (h.fromMasterSeed = function (e, t) {
                    var r = a.createHmac("sha512", l).update(e).digest(),
                      n = r.slice(0, 32),
                      i = r.slice(32),
                      o = new h(t);
                    return (o.chainCode = i), (o.privateKey = n), o;
                  }),
                  (h.fromExtendedKey = function (e, t) {
                    var r = new h((t = t || f)),
                      n = s.decode(e),
                      o = n.readUInt32BE(0);
                    i(o === t.private || o === t.public, "Version mismatch: does not match private or public"),
                      (r.depth = n.readUInt8(4)),
                      (r.parentFingerprint = n.readUInt32BE(5)),
                      (r.index = n.readUInt32BE(9)),
                      (r.chainCode = n.slice(13, 45));
                    var a = n.slice(45);
                    return (
                      0 === a.readUInt8(0)
                        ? (i(o === t.private, "Version mismatch: version does not match private"), (r.privateKey = a.slice(1)))
                        : (i(o === t.public, "Version mismatch: version does not match public"), (r.publicKey = a)),
                      r
                    );
                  }),
                  (h.fromJSON = function (e) {
                    return h.fromExtendedKey(e.xpriv);
                  }),
                  (h.HARDENED_OFFSET = d);
                var g = h;
                t.exports = g;
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/pure/vendor/hdkey-without-crypto.js"
      }
    ],
    [
      3292,
      { randombytes: 4312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("randombytes");
                (r.getRandomBytes = function (e) {
                  return new Promise(function (t, r) {
                    n(e, function (e, n) {
                      e ? r(e) : t(n);
                    });
                  });
                }),
                  (r.getRandomBytesSync = function (e) {
                    return n(e);
                  });
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/random.js"
      }
    ],
    [
      3293,
      { "./random": 3292, secp256k1: 4531 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  i =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 });
                var o = e("secp256k1"),
                  s = e("./random");
                (r.createPrivateKey = function () {
                  return n(this, void 0, void 0, function () {
                    var e;
                    return i(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, s.getRandomBytes(32)];
                        case 1:
                          return (e = t.sent()), o.privateKeyVerify(e) ? [2, e] : [3, 0];
                        case 2:
                          return [2];
                      }
                    });
                  });
                }),
                  (r.createPrivateKeySync = function () {
                    for (;;) {
                      var e = s.getRandomBytesSync(32);
                      if (o.privateKeyVerify(e)) return e;
                    }
                  }),
                  (function (e) {
                    for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
                  })(e("secp256k1"));
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/secp256k1.js"
      }
    ],
    [
      3294,
      { buffer: 2913, secp256k1: 4531 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                      (this && this.__importStar) ||
                      function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return (t.default = e), t;
                      };
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var i = n(e("secp256k1"));
                    (r.privateKeyVerify = function (e) {
                      return i.privateKeyVerify(e);
                    }),
                      (r.publicKeyCreate = function (e, r) {
                        return void 0 === r && (r = !0), t.from(i.publicKeyCreate(e, r));
                      }),
                      (r.publicKeyVerify = function (e) {
                        return i.publicKeyVerify(e);
                      }),
                      (r.publicKeyConvert = function (e, r) {
                        return void 0 === r && (r = !0), t.from(i.publicKeyConvert(e, r));
                      }),
                      (r.privateKeyTweakAdd = function (e, r) {
                        return t.from(i.privateKeyTweakAdd(t.from(e), r));
                      }),
                      (r.publicKeyTweakAdd = function (e, r, n) {
                        return void 0 === n && (n = !0), t.from(i.publicKeyTweakAdd(t.from(e), r, n));
                      }),
                      (r.sign = function (e, r) {
                        var n = i.ecdsaSign(e, r);
                        return { signature: t.from(n.signature), recovery: n.recid };
                      }),
                      (r.verify = function (e, t, r) {
                        return i.ecdsaVerify(t, e, r);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereum-cryptography",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/shims/hdkey-secp256k1v3.js"
      }
    ],
    [
      3295,
      {
        "./bytes": 3297,
        "./constants": 3298,
        "./externals": 3299,
        "./hash": 3300,
        "./helpers": 3301,
        "./internal": 3303,
        "./types": 3306,
        assert: 2907,
        buffer: 2913,
        "ethereum-cryptography/secp256k1": 3293
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__read) ||
                        function (e, t) {
                          var r = "function" == typeof Symbol && e[Symbol.iterator];
                          if (!r) return e;
                          var n,
                            i,
                            o = r.call(e),
                            s = [];
                          try {
                            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) s.push(n.value);
                          } catch (e) {
                            i = { error: e };
                          } finally {
                            try {
                              n && !n.done && (r = o.return) && r.call(o);
                            } finally {
                              if (i) throw i.error;
                            }
                          }
                          return s;
                        },
                      i =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.isZeroAddress =
                        r.zeroAddress =
                        r.importPublic =
                        r.privateToAddress =
                        r.privateToPublic =
                        r.publicToAddress =
                        r.pubToAddress =
                        r.isValidPublic =
                        r.isValidPrivate =
                        r.generateAddress2 =
                        r.generateAddress =
                        r.isValidChecksumAddress =
                        r.toChecksumAddress =
                        r.isValidAddress =
                        r.Account =
                          void 0);
                    var o = i(e("assert")),
                      s = e("./externals"),
                      a = e("ethereum-cryptography/secp256k1"),
                      c = e("./internal"),
                      u = e("./constants"),
                      l = e("./bytes"),
                      d = e("./hash"),
                      f = e("./helpers"),
                      h = e("./types"),
                      p = (function () {
                        function e(e, t, r, n) {
                          void 0 === e && (e = new s.BN(0)),
                            void 0 === t && (t = new s.BN(0)),
                            void 0 === r && (r = u.KECCAK256_RLP),
                            void 0 === n && (n = u.KECCAK256_NULL),
                            (this.nonce = e),
                            (this.balance = t),
                            (this.stateRoot = r),
                            (this.codeHash = n),
                            this._validate();
                        }
                        return (
                          (e.fromAccountData = function (t) {
                            var r = t.nonce,
                              n = t.balance,
                              i = t.stateRoot,
                              o = t.codeHash;
                            return new e(
                              r ? new s.BN((0, l.toBuffer)(r)) : undefined,
                              n ? new s.BN((0, l.toBuffer)(n)) : undefined,
                              i ? (0, l.toBuffer)(i) : undefined,
                              o ? (0, l.toBuffer)(o) : undefined
                            );
                          }),
                          (e.fromRlpSerializedAccount = function (e) {
                            var t = s.rlp.decode(e);
                            if (!Array.isArray(t)) throw new Error("Invalid serialized account input. Must be array");
                            return this.fromValuesArray(t);
                          }),
                          (e.fromValuesArray = function (t) {
                            var r = n(t, 4),
                              i = r[0],
                              o = r[1],
                              a = r[2],
                              c = r[3];
                            return new e(new s.BN(i), new s.BN(o), a, c);
                          }),
                          (e.prototype._validate = function () {
                            if (this.nonce.lt(new s.BN(0))) throw new Error("nonce must be greater than zero");
                            if (this.balance.lt(new s.BN(0))) throw new Error("balance must be greater than zero");
                            if (32 !== this.stateRoot.length) throw new Error("stateRoot must have a length of 32");
                            if (32 !== this.codeHash.length) throw new Error("codeHash must have a length of 32");
                          }),
                          (e.prototype.raw = function () {
                            return [
                              (0, h.bnToUnpaddedBuffer)(this.nonce),
                              (0, h.bnToUnpaddedBuffer)(this.balance),
                              this.stateRoot,
                              this.codeHash
                            ];
                          }),
                          (e.prototype.serialize = function () {
                            return s.rlp.encode(this.raw());
                          }),
                          (e.prototype.isContract = function () {
                            return !this.codeHash.equals(u.KECCAK256_NULL);
                          }),
                          (e.prototype.isEmpty = function () {
                            return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(u.KECCAK256_NULL);
                          }),
                          e
                        );
                      })();
                    r.Account = p;
                    r.isValidAddress = function (e) {
                      try {
                        (0, f.assertIsString)(e);
                      } catch (e) {
                        return !1;
                      }
                      return /^0x[0-9a-fA-F]{40}$/.test(e);
                    };
                    r.toChecksumAddress = function (e, t) {
                      (0, f.assertIsHexString)(e);
                      var r = (0, c.stripHexPrefix)(e).toLowerCase(),
                        n = "";
                      t && (n = (0, h.toType)(t, h.TypeOutput.BN).toString() + "0x");
                      for (var i = (0, d.keccakFromString)(n + r).toString("hex"), o = "0x", s = 0; s < r.length; s++)
                        parseInt(i[s], 16) >= 8 ? (o += r[s].toUpperCase()) : (o += r[s]);
                      return o;
                    };
                    r.isValidChecksumAddress = function (e, t) {
                      return (0, r.isValidAddress)(e) && (0, r.toChecksumAddress)(e, t) === e;
                    };
                    r.generateAddress = function (e, r) {
                      (0, f.assertIsBuffer)(e), (0, f.assertIsBuffer)(r);
                      var n = new s.BN(r);
                      return n.isZero() ? (0, d.rlphash)([e, null]).slice(-20) : (0, d.rlphash)([e, t.from(n.toArray())]).slice(-20);
                    };
                    r.generateAddress2 = function (e, r, n) {
                      return (
                        (0, f.assertIsBuffer)(e),
                        (0, f.assertIsBuffer)(r),
                        (0, f.assertIsBuffer)(n),
                        (0, o.default)(20 === e.length),
                        (0, o.default)(32 === r.length),
                        (0, d.keccak256)(t.concat([t.from("ff", "hex"), e, r, (0, d.keccak256)(n)])).slice(-20)
                      );
                    };
                    r.isValidPrivate = function (e) {
                      return (0, a.privateKeyVerify)(e);
                    };
                    r.isValidPublic = function (e, r) {
                      return (
                        void 0 === r && (r = !1),
                        (0, f.assertIsBuffer)(e),
                        64 === e.length ? (0, a.publicKeyVerify)(t.concat([t.from([4]), e])) : !!r && (0, a.publicKeyVerify)(e)
                      );
                    };
                    (r.pubToAddress = function (e, r) {
                      return (
                        void 0 === r && (r = !1),
                        (0, f.assertIsBuffer)(e),
                        r && 64 !== e.length && (e = t.from((0, a.publicKeyConvert)(e, !1).slice(1))),
                        (0, o.default)(64 === e.length),
                        (0, d.keccak)(e).slice(-20)
                      );
                    }),
                      (r.publicToAddress = r.pubToAddress);
                    r.privateToPublic = function (e) {
                      return (0, f.assertIsBuffer)(e), t.from((0, a.publicKeyCreate)(e, !1)).slice(1);
                    };
                    r.privateToAddress = function (e) {
                      return (0, r.publicToAddress)((0, r.privateToPublic)(e));
                    };
                    r.importPublic = function (e) {
                      return (0, f.assertIsBuffer)(e), 64 !== e.length && (e = t.from((0, a.publicKeyConvert)(e, !1).slice(1))), e;
                    };
                    r.zeroAddress = function () {
                      var e = (0, l.zeros)(20);
                      return (0, l.bufferToHex)(e);
                    };
                    r.isZeroAddress = function (e) {
                      try {
                        (0, f.assertIsString)(e);
                      } catch (e) {
                        return !1;
                      }
                      return (0, r.zeroAddress)() === e;
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/account.js"
      }
    ],
    [
      3296,
      { "./account": 3295, "./bytes": 3297, "./externals": 3299, assert: 2907, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                      (this && this.__importDefault) ||
                      function (e) {
                        return e && e.__esModule ? e : { default: e };
                      };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.Address = void 0);
                    var i = n(e("assert")),
                      o = e("./externals"),
                      s = e("./bytes"),
                      a = e("./account"),
                      c = (function () {
                        function e(e) {
                          (0, i.default)(20 === e.length, "Invalid address length"), (this.buf = e);
                        }
                        return (
                          (e.zero = function () {
                            return new e((0, s.zeros)(20));
                          }),
                          (e.fromString = function (t) {
                            return (0, i.default)((0, a.isValidAddress)(t), "Invalid address"), new e((0, s.toBuffer)(t));
                          }),
                          (e.fromPublicKey = function (r) {
                            return (0, i.default)(t.isBuffer(r), "Public key should be Buffer"), new e((0, a.pubToAddress)(r));
                          }),
                          (e.fromPrivateKey = function (r) {
                            return (0, i.default)(t.isBuffer(r), "Private key should be Buffer"), new e((0, a.privateToAddress)(r));
                          }),
                          (e.generate = function (r, n) {
                            return (0, i.default)(o.BN.isBN(n)), new e((0, a.generateAddress)(r.buf, n.toArrayLike(t)));
                          }),
                          (e.generate2 = function (r, n, o) {
                            return (
                              (0, i.default)(t.isBuffer(n)), (0, i.default)(t.isBuffer(o)), new e((0, a.generateAddress2)(r.buf, n, o))
                            );
                          }),
                          (e.prototype.equals = function (e) {
                            return this.buf.equals(e.buf);
                          }),
                          (e.prototype.isZero = function () {
                            return this.equals(e.zero());
                          }),
                          (e.prototype.isPrecompileOrSystemAddress = function () {
                            var e = new o.BN(this.buf),
                              t = new o.BN(0),
                              r = new o.BN("ffff", "hex");
                            return e.gte(t) && e.lte(r);
                          }),
                          (e.prototype.toString = function () {
                            return "0x" + this.buf.toString("hex");
                          }),
                          (e.prototype.toBuffer = function () {
                            return t.from(this.buf);
                          }),
                          e
                        );
                      })();
                    r.Address = c;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/address.js"
      }
    ],
    [
      3297,
      { "./externals": 3299, "./helpers": 3301, "./internal": 3303, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__values) ||
                        function (e) {
                          var t = "function" == typeof Symbol && Symbol.iterator,
                            r = t && e[t],
                            n = 0;
                          if (r) return r.call(e);
                          if (e && "number" == typeof e.length)
                            return {
                              next: function () {
                                return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                              }
                            };
                          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
                        },
                      i =
                        (this && this.__read) ||
                        function (e, t) {
                          var r = "function" == typeof Symbol && e[Symbol.iterator];
                          if (!r) return e;
                          var n,
                            i,
                            o = r.call(e),
                            s = [];
                          try {
                            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) s.push(n.value);
                          } catch (e) {
                            i = { error: e };
                          } finally {
                            try {
                              n && !n.done && (r = o.return) && r.call(o);
                            } finally {
                              if (i) throw i.error;
                            }
                          }
                          return s;
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.bufArrToArr =
                        r.arrToBufArr =
                        r.validateNoLeadingZeroes =
                        r.baToJSON =
                        r.toUtf8 =
                        r.addHexPrefix =
                        r.toUnsigned =
                        r.fromSigned =
                        r.bufferToHex =
                        r.bufferToInt =
                        r.toBuffer =
                        r.unpadHexString =
                        r.unpadArray =
                        r.unpadBuffer =
                        r.setLengthRight =
                        r.setLengthLeft =
                        r.zeros =
                        r.intToBuffer =
                        r.intToHex =
                          void 0);
                    var o = e("./externals"),
                      s = e("./internal"),
                      a = e("./helpers");
                    r.intToHex = function (e) {
                      if (!Number.isSafeInteger(e) || e < 0) throw new Error("Received an invalid integer type: ".concat(e));
                      return "0x".concat(e.toString(16));
                    };
                    r.intToBuffer = function (e) {
                      var n = (0, r.intToHex)(e);
                      return t.from((0, s.padToEven)(n.slice(2)), "hex");
                    };
                    r.zeros = function (e) {
                      return t.allocUnsafe(e).fill(0);
                    };
                    var c = function (e, t, n) {
                      var i = (0, r.zeros)(t);
                      return n
                        ? e.length < t
                          ? (e.copy(i), i)
                          : e.slice(0, t)
                        : e.length < t
                        ? (e.copy(i, t - e.length), i)
                        : e.slice(-t);
                    };
                    r.setLengthLeft = function (e, t) {
                      return (0, a.assertIsBuffer)(e), c(e, t, !1);
                    };
                    r.setLengthRight = function (e, t) {
                      return (0, a.assertIsBuffer)(e), c(e, t, !0);
                    };
                    var u = function (e) {
                      for (var t = e[0]; e.length > 0 && "0" === t.toString(); ) t = (e = e.slice(1))[0];
                      return e;
                    };
                    r.unpadBuffer = function (e) {
                      return (0, a.assertIsBuffer)(e), u(e);
                    };
                    r.unpadArray = function (e) {
                      return (0, a.assertIsArray)(e), u(e);
                    };
                    r.unpadHexString = function (e) {
                      return (0, a.assertIsHexString)(e), (e = (0, s.stripHexPrefix)(e)), u(e);
                    };
                    r.toBuffer = function (e) {
                      if (null === e || e === undefined) return t.allocUnsafe(0);
                      if (t.isBuffer(e)) return t.from(e);
                      if (Array.isArray(e) || e instanceof Uint8Array) return t.from(e);
                      if ("string" == typeof e) {
                        if (!(0, s.isHexString)(e))
                          throw new Error(
                            "Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(
                              e
                            )
                          );
                        return t.from((0, s.padToEven)((0, s.stripHexPrefix)(e)), "hex");
                      }
                      if ("number" == typeof e) return (0, r.intToBuffer)(e);
                      if (o.BN.isBN(e)) {
                        if (e.isNeg()) throw new Error("Cannot convert negative BN to buffer. Given: ".concat(e));
                        return e.toArrayLike(t);
                      }
                      if (e.toArray) return t.from(e.toArray());
                      if (e.toBuffer) return t.from(e.toBuffer());
                      throw new Error("invalid type");
                    };
                    r.bufferToInt = function (e) {
                      return new o.BN((0, r.toBuffer)(e)).toNumber();
                    };
                    r.bufferToHex = function (e) {
                      return "0x" + (e = (0, r.toBuffer)(e)).toString("hex");
                    };
                    r.fromSigned = function (e) {
                      return new o.BN(e).fromTwos(256);
                    };
                    r.toUnsigned = function (e) {
                      return t.from(e.toTwos(256).toArray());
                    };
                    r.addHexPrefix = function (e) {
                      return "string" != typeof e || (0, s.isHexPrefixed)(e) ? e : "0x" + e;
                    };
                    r.toUtf8 = function (e) {
                      if ((e = (0, s.stripHexPrefix)(e)).length % 2 != 0)
                        throw new Error("Invalid non-even hex string input for toUtf8() provided");
                      return t.from(e.replace(/^(00)+|(00)+$/g, ""), "hex").toString("utf8");
                    };
                    r.baToJSON = function (e) {
                      if (t.isBuffer(e)) return "0x".concat(e.toString("hex"));
                      if (e instanceof Array) {
                        for (var n = [], i = 0; i < e.length; i++) n.push((0, r.baToJSON)(e[i]));
                        return n;
                      }
                    };
                    (r.validateNoLeadingZeroes = function (e) {
                      var t, r;
                      try {
                        for (var o = n(Object.entries(e)), s = o.next(); !s.done; s = o.next()) {
                          var a = i(s.value, 2),
                            c = a[0],
                            u = a[1];
                          if (u !== undefined && u.length > 0 && 0 === u[0])
                            throw new Error("".concat(c, " cannot have leading zeroes, received: ").concat(u.toString("hex")));
                        }
                      } catch (e) {
                        t = { error: e };
                      } finally {
                        try {
                          s && !s.done && (r = o.return) && r.call(o);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    }),
                      (r.arrToBufArr = function e(r) {
                        return Array.isArray(r)
                          ? r.map(function (t) {
                              return e(t);
                            })
                          : t.from(r);
                      }),
                      (r.bufArrToArr = function e(t) {
                        return Array.isArray(t)
                          ? t.map(function (t) {
                              return e(t);
                            })
                          : Uint8Array.from(null != t ? t : []);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/bytes.js"
      }
    ],
    [
      3298,
      { "./externals": 3299, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.KECCAK256_RLP =
                    r.KECCAK256_RLP_S =
                    r.KECCAK256_RLP_ARRAY =
                    r.KECCAK256_RLP_ARRAY_S =
                    r.KECCAK256_NULL =
                    r.KECCAK256_NULL_S =
                    r.TWO_POW256 =
                    r.MAX_INTEGER =
                    r.MAX_UINT64 =
                      void 0);
                var n = e("buffer"),
                  i = e("./externals");
                (r.MAX_UINT64 = new i.BN("ffffffffffffffff", 16)),
                  (r.MAX_INTEGER = new i.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16)),
                  (r.TWO_POW256 = new i.BN("10000000000000000000000000000000000000000000000000000000000000000", 16)),
                  (r.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
                  (r.KECCAK256_NULL = n.Buffer.from(r.KECCAK256_NULL_S, "hex")),
                  (r.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
                  (r.KECCAK256_RLP_ARRAY = n.Buffer.from(r.KECCAK256_RLP_ARRAY_S, "hex")),
                  (r.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
                  (r.KECCAK256_RLP = n.Buffer.from(r.KECCAK256_RLP_S, "hex"));
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/constants.js"
      }
    ],
    [
      3299,
      { "bn.js": 2851, rlp: 4520 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                      ? function (e, t) {
                          Object.defineProperty(e, "default", { enumerable: !0, value: t });
                        }
                      : function (e, t) {
                          e.default = t;
                        }),
                  o =
                    (this && this.__importStar) ||
                    function (e) {
                      if (e && e.__esModule) return e;
                      var t = {};
                      if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                      return i(t, e), t;
                    },
                  s =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.rlp = r.BN = void 0);
                var a = s(e("bn.js"));
                r.BN = a.default;
                var c = o(e("rlp"));
                r.rlp = c;
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/externals.js"
      }
    ],
    [
      33,
      {
        "../../../../shared/constants/transaction": 4770,
        "./tx-state-manager": 35,
        "@metamask/ethjs-query": 1374,
        "@metamask/safe-event-emitter": 1777,
        loglevel: 4083
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = c(e("@metamask/safe-event-emitter")),
                  i = c(e("loglevel")),
                  o = c(e("@metamask/ethjs-query")),
                  s = e("../../../../shared/constants/transaction"),
                  a = e("./tx-state-manager");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e, t, r) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (r !== undefined) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = r),
                    e
                  );
                }
                class l extends n.default {
                  constructor(e) {
                    super(),
                      u(this, "DROPPED_BUFFER_COUNT", 3),
                      u(this, "droppedBlocksBufferByHash", new Map()),
                      (this.query = e.query || new o.default(e.provider)),
                      (this.nonceTracker = e.nonceTracker),
                      (this.getPendingTransactions = e.getPendingTransactions),
                      (this.getCompletedTransactions = e.getCompletedTransactions),
                      (this.publishTransaction = e.publishTransaction),
                      (this.approveTransaction = e.approveTransaction),
                      (this.confirmTransaction = e.confirmTransaction);
                  }
                  async updatePendingTxs() {
                    const e = await this.nonceTracker.getGlobalLock();
                    try {
                      const e = this.getPendingTransactions();
                      await Promise.all(e.map((e) => this._checkPendingTx(e)));
                    } catch (e) {
                      i.default.error("PendingTransactionTracker - Error updating pending transactions"), i.default.error(e);
                    }
                    e.releaseLock();
                  }
                  async resubmitPendingTxs(e) {
                    const t = this.getPendingTransactions();
                    if (t.length)
                      for (const n of t)
                        try {
                          await this._resubmitTx(n, e);
                        } catch (e) {
                          var r;
                          const t =
                            (null === (r = e.value) || void 0 === r || null === (r = r.message) || void 0 === r
                              ? void 0
                              : r.toLowerCase()) || e.message.toLowerCase();
                          if (
                            t.includes("replacement transaction underpriced") ||
                            t.includes("known transaction") ||
                            t.includes("gas price too low to replace") ||
                            t.includes("transaction with the same hash was already imported") ||
                            t.includes("gateway timeout") ||
                            t.includes("nonce too low")
                          )
                            return;
                          (n.warning = { error: t, message: a.ERROR_SUBMITTING }), this.emit("tx:warning", n, e);
                        }
                  }
                  async _resubmitTx(e, t) {
                    e.firstRetryBlockNumber || this.emit("tx:block-update", e, t);
                    const r = e.firstRetryBlockNumber || t,
                      n = Number.parseInt(t, 16) - Number.parseInt(r, 16),
                      i = e.retryCount || 0;
                    if (n < Math.min(50, Math.pow(2, i))) return undefined;
                    if (!("rawTx" in e)) return this.approveTransaction(e.id);
                    const { rawTx: o } = e,
                      s = await this.publishTransaction(o);
                    return this.emit("tx:retry", e), s;
                  }
                  async _checkPendingTx(e) {
                    const t = e.hash,
                      r = e.id;
                    if (e.status !== s.TransactionStatus.submitted || e.verifiedOnBlockchain) return;
                    if (!t) {
                      const e = new Error("We had an error while submitting this transaction, please try again.");
                      return (e.name = "NoTxHashError"), void this.emit("tx:failed", r, e);
                    }
                    if (await this._checkIfNonceIsTaken(e)) this.emit("tx:dropped", r);
                    else {
                      try {
                        const e = await this.query.getTransactionReceipt(t);
                        if (null != e && e.blockNumber) {
                          const { baseFeePerGas: t, timestamp: n } = await this.query.getBlockByHash(null == e ? void 0 : e.blockHash, !1);
                          return void this.emit("tx:confirmed", r, e, t, n);
                        }
                      } catch (t) {
                        return (
                          (e.warning = { error: t.message, message: "There was a problem loading this transaction." }),
                          void this.emit("tx:warning", e, t)
                        );
                      }
                      (await this._checkIfTxWasDropped(e)) && this.emit("tx:dropped", r);
                    }
                  }
                  async _checkIfTxWasDropped(e) {
                    const {
                        hash: t,
                        txParams: { nonce: r, from: n }
                      } = e,
                      i = await this.query.getTransactionCount(n);
                    if (parseInt(r, 16) >= i.toNumber()) return !1;
                    this.droppedBlocksBufferByHash.has(t) || this.droppedBlocksBufferByHash.set(t, 0);
                    const o = this.droppedBlocksBufferByHash.get(t);
                    return o < this.DROPPED_BUFFER_COUNT
                      ? (this.droppedBlocksBufferByHash.set(t, o + 1), !1)
                      : (this.droppedBlocksBufferByHash.delete(t), !0);
                  }
                  async _checkIfNonceIsTaken(e) {
                    const t = e.txParams.from;
                    return this.getCompletedTransactions(t).some((t) => !(t.id === e.id) && t.txParams.nonce === e.txParams.nonce);
                  }
                }
                r.default = l;
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/transactions/pending-tx-tracker.js" }
    ],
    [
      3300,
      { "./bytes": 3297, "./externals": 3299, "./helpers": 3301, buffer: 2913, "create-hash": 3114, "ethereum-cryptography/keccak": 3285 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.rlphash =
                        r.ripemd160FromArray =
                        r.ripemd160FromString =
                        r.ripemd160 =
                        r.sha256FromArray =
                        r.sha256FromString =
                        r.sha256 =
                        r.keccakFromArray =
                        r.keccakFromHexString =
                        r.keccakFromString =
                        r.keccak256 =
                        r.keccak =
                          void 0);
                    var n = e("ethereum-cryptography/keccak"),
                      i = e("create-hash"),
                      o = e("./externals"),
                      s = e("./bytes"),
                      a = e("./helpers");
                    r.keccak = function (e, t) {
                      switch ((void 0 === t && (t = 256), (0, a.assertIsBuffer)(e), t)) {
                        case 224:
                          return (0, n.keccak224)(e);
                        case 256:
                          return (0, n.keccak256)(e);
                        case 384:
                          return (0, n.keccak384)(e);
                        case 512:
                          return (0, n.keccak512)(e);
                        default:
                          throw new Error("Invald algorithm: keccak".concat(t));
                      }
                    };
                    r.keccak256 = function (e) {
                      return (0, r.keccak)(e);
                    };
                    r.keccakFromString = function (e, n) {
                      void 0 === n && (n = 256), (0, a.assertIsString)(e);
                      var i = t.from(e, "utf8");
                      return (0, r.keccak)(i, n);
                    };
                    r.keccakFromHexString = function (e, t) {
                      return void 0 === t && (t = 256), (0, a.assertIsHexString)(e), (0, r.keccak)((0, s.toBuffer)(e), t);
                    };
                    r.keccakFromArray = function (e, t) {
                      return void 0 === t && (t = 256), (0, a.assertIsArray)(e), (0, r.keccak)((0, s.toBuffer)(e), t);
                    };
                    var c = function (e) {
                      return (e = (0, s.toBuffer)(e)), i("sha256").update(e).digest();
                    };
                    r.sha256 = function (e) {
                      return (0, a.assertIsBuffer)(e), c(e);
                    };
                    r.sha256FromString = function (e) {
                      return (0, a.assertIsString)(e), c(e);
                    };
                    r.sha256FromArray = function (e) {
                      return (0, a.assertIsArray)(e), c(e);
                    };
                    var u = function (e, t) {
                      e = (0, s.toBuffer)(e);
                      var r = i("rmd160").update(e).digest();
                      return !0 === t ? (0, s.setLengthLeft)(r, 32) : r;
                    };
                    r.ripemd160 = function (e, t) {
                      return (0, a.assertIsBuffer)(e), u(e, t);
                    };
                    r.ripemd160FromString = function (e, t) {
                      return (0, a.assertIsString)(e), u(e, t);
                    };
                    r.ripemd160FromArray = function (e, t) {
                      return (0, a.assertIsArray)(e), u(e, t);
                    };
                    r.rlphash = function (e) {
                      return (0, r.keccak)(o.rlp.encode(e));
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/hash.js"
      }
    ],
    [
      3301,
      { "../../../../is-buffer/index.js": 3838, "./internal": 3303 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.assertIsString = r.assertIsArray = r.assertIsBuffer = r.assertIsHexString = void 0);
                    var n = e("./internal");
                    r.assertIsHexString = function (e) {
                      if (!(0, n.isHexString)(e)) {
                        var t = "This method only supports 0x-prefixed hex strings but input was: ".concat(e);
                        throw new Error(t);
                      }
                    };
                    r.assertIsBuffer = function (e) {
                      if (!t.isBuffer(e)) {
                        var r = "This method only supports Buffer but input was: ".concat(e);
                        throw new Error(r);
                      }
                    };
                    r.assertIsArray = function (e) {
                      if (!Array.isArray(e)) {
                        var t = "This method only supports number arrays but input was: ".concat(e);
                        throw new Error(t);
                      }
                    };
                    r.assertIsString = function (e) {
                      if ("string" != typeof e) {
                        var t = "This method only supports strings but input was: ".concat(e);
                        throw new Error(t);
                      }
                    };
                  }).call(this);
                }).call(this, { isBuffer: e("../../../../is-buffer/index.js") });
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/helpers.js"
      }
    ],
    [
      3302,
      {
        "./account": 3295,
        "./address": 3296,
        "./bytes": 3297,
        "./constants": 3298,
        "./externals": 3299,
        "./hash": 3300,
        "./internal": 3303,
        "./object": 3304,
        "./signature": 3305,
        "./types": 3306
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.isHexString =
                    r.getKeys =
                    r.fromAscii =
                    r.fromUtf8 =
                    r.toAscii =
                    r.arrayContainsArray =
                    r.getBinarySize =
                    r.padToEven =
                    r.stripHexPrefix =
                    r.isHexPrefixed =
                      void 0),
                  i(e("./constants"), r),
                  i(e("./account"), r),
                  i(e("./address"), r),
                  i(e("./hash"), r),
                  i(e("./signature"), r),
                  i(e("./bytes"), r),
                  i(e("./object"), r),
                  i(e("./externals"), r),
                  i(e("./types"), r);
                var o = e("./internal");
                Object.defineProperty(r, "isHexPrefixed", {
                  enumerable: !0,
                  get: function () {
                    return o.isHexPrefixed;
                  }
                }),
                  Object.defineProperty(r, "stripHexPrefix", {
                    enumerable: !0,
                    get: function () {
                      return o.stripHexPrefix;
                    }
                  }),
                  Object.defineProperty(r, "padToEven", {
                    enumerable: !0,
                    get: function () {
                      return o.padToEven;
                    }
                  }),
                  Object.defineProperty(r, "getBinarySize", {
                    enumerable: !0,
                    get: function () {
                      return o.getBinarySize;
                    }
                  }),
                  Object.defineProperty(r, "arrayContainsArray", {
                    enumerable: !0,
                    get: function () {
                      return o.arrayContainsArray;
                    }
                  }),
                  Object.defineProperty(r, "toAscii", {
                    enumerable: !0,
                    get: function () {
                      return o.toAscii;
                    }
                  }),
                  Object.defineProperty(r, "fromUtf8", {
                    enumerable: !0,
                    get: function () {
                      return o.fromUtf8;
                    }
                  }),
                  Object.defineProperty(r, "fromAscii", {
                    enumerable: !0,
                    get: function () {
                      return o.fromAscii;
                    }
                  }),
                  Object.defineProperty(r, "getKeys", {
                    enumerable: !0,
                    get: function () {
                      return o.getKeys;
                    }
                  }),
                  Object.defineProperty(r, "isHexString", {
                    enumerable: !0,
                    get: function () {
                      return o.isHexString;
                    }
                  });
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/index.js"
      }
    ],
    [
      3303,
      { buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (e) {
                  (function () {
                    function t(e) {
                      if ("string" != typeof e)
                        throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof e));
                      return "0" === e[0] && "x" === e[1];
                    }
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.isHexString =
                        r.getKeys =
                        r.fromAscii =
                        r.fromUtf8 =
                        r.toAscii =
                        r.arrayContainsArray =
                        r.getBinarySize =
                        r.padToEven =
                        r.stripHexPrefix =
                        r.isHexPrefixed =
                          void 0),
                      (r.isHexPrefixed = t);
                    function n(e) {
                      var t = e;
                      if ("string" != typeof t) throw new Error("[padToEven] value must be type 'string', received ".concat(typeof t));
                      return t.length % 2 && (t = "0".concat(t)), t;
                    }
                    (r.stripHexPrefix = function (e) {
                      if ("string" != typeof e) throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof e));
                      return t(e) ? e.slice(2) : e;
                    }),
                      (r.padToEven = n),
                      (r.getBinarySize = function (t) {
                        if ("string" != typeof t)
                          throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof t));
                        return e.byteLength(t, "utf8");
                      }),
                      (r.arrayContainsArray = function (e, t, r) {
                        if (!0 !== Array.isArray(e))
                          throw new Error(
                            "[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof e, "'")
                          );
                        if (!0 !== Array.isArray(t))
                          throw new Error(
                            "[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof t, "'")
                          );
                        return t[r ? "some" : "every"](function (t) {
                          return e.indexOf(t) >= 0;
                        });
                      }),
                      (r.toAscii = function (e) {
                        var t = "",
                          r = 0,
                          n = e.length;
                        for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
                          var i = parseInt(e.substr(r, 2), 16);
                          t += String.fromCharCode(i);
                        }
                        return t;
                      }),
                      (r.fromUtf8 = function (t) {
                        var r = e.from(t, "utf8");
                        return "0x".concat(n(r.toString("hex")).replace(/^0+|0+$/g, ""));
                      }),
                      (r.fromAscii = function (e) {
                        for (var t = "", r = 0; r < e.length; r++) {
                          var n = e.charCodeAt(r).toString(16);
                          t += n.length < 2 ? "0".concat(n) : n;
                        }
                        return "0x".concat(t);
                      }),
                      (r.getKeys = function (e, t, r) {
                        if (!Array.isArray(e))
                          throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof e));
                        if ("string" != typeof t)
                          throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof e));
                        for (var n = [], i = 0; i < e.length; i++) {
                          var o = e[i][t];
                          if (r && !o) o = "";
                          else if ("string" != typeof o)
                            throw new Error("invalid abi - expected type 'string', received ".concat(typeof o));
                          n.push(o);
                        }
                        return n;
                      }),
                      (r.isHexString = function (e, t) {
                        return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t);
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/internal.js"
      }
    ],
    [
      3304,
      { "./bytes": 3297, "./externals": 3299, "./internal": 3303, assert: 2907, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                      (this && this.__importDefault) ||
                      function (e) {
                        return e && e.__esModule ? e : { default: e };
                      };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.defineProperties = void 0);
                    var i = n(e("assert")),
                      o = e("./internal"),
                      s = e("./externals"),
                      a = e("./bytes");
                    r.defineProperties = function (e, r, n) {
                      if (
                        ((e.raw = []),
                        (e._fields = []),
                        (e.toJSON = function (t) {
                          if ((void 0 === t && (t = !1), t)) {
                            var r = {};
                            return (
                              e._fields.forEach(function (t) {
                                r[t] = "0x".concat(e[t].toString("hex"));
                              }),
                              r
                            );
                          }
                          return (0, a.baToJSON)(e.raw);
                        }),
                        (e.serialize = function () {
                          return s.rlp.encode(e.raw);
                        }),
                        r.forEach(function (r, n) {
                          function o() {
                            return e.raw[n];
                          }
                          function s(o) {
                            "00" !== (o = (0, a.toBuffer)(o)).toString("hex") || r.allowZero || (o = t.allocUnsafe(0)),
                              r.allowLess && r.length
                                ? ((o = (0, a.unpadBuffer)(o)),
                                  (0, i.default)(
                                    r.length >= o.length,
                                    "The field ".concat(r.name, " must not have more ").concat(r.length, " bytes")
                                  ))
                                : (r.allowZero && 0 === o.length) ||
                                  !r.length ||
                                  (0, i.default)(
                                    r.length === o.length,
                                    "The field ".concat(r.name, " must have byte length of ").concat(r.length)
                                  ),
                              (e.raw[n] = o);
                          }
                          e._fields.push(r.name),
                            Object.defineProperty(e, r.name, { enumerable: !0, configurable: !0, get: o, set: s }),
                            r.default && (e[r.name] = r.default),
                            r.alias && Object.defineProperty(e, r.alias, { enumerable: !1, configurable: !0, set: s, get: o });
                        }),
                        n)
                      )
                        if (
                          ("string" == typeof n && (n = t.from((0, o.stripHexPrefix)(n), "hex")),
                          t.isBuffer(n) && (n = s.rlp.decode(n)),
                          Array.isArray(n))
                        ) {
                          if (n.length > e._fields.length) throw new Error("wrong number of fields in data");
                          n.forEach(function (t, r) {
                            e[e._fields[r]] = (0, a.toBuffer)(t);
                          });
                        } else {
                          if ("object" != typeof n) throw new Error("invalid data");
                          var c = Object.keys(n);
                          r.forEach(function (t) {
                            -1 !== c.indexOf(t.name) && (e[t.name] = n[t.name]), -1 !== c.indexOf(t.alias) && (e[t.alias] = n[t.alias]);
                          });
                        }
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/object.js"
      }
    ],
    [
      3305,
      {
        "./bytes": 3297,
        "./externals": 3299,
        "./hash": 3300,
        "./helpers": 3301,
        "./types": 3306,
        buffer: 2913,
        "ethereum-cryptography/secp256k1": 3293
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.hashPersonalMessage =
                        r.isValidSignature =
                        r.fromRpcSig =
                        r.toCompactSig =
                        r.toRpcSig =
                        r.ecrecover =
                        r.ecsign =
                          void 0);
                    var n = e("ethereum-cryptography/secp256k1"),
                      i = e("./externals"),
                      o = e("./bytes"),
                      s = e("./hash"),
                      a = e("./helpers"),
                      c = e("./types");
                    function u(e, t) {
                      var r = (0, c.toType)(e, c.TypeOutput.BN);
                      if (r.eqn(0) || r.eqn(1)) return (0, c.toType)(e, c.TypeOutput.BN);
                      if (!t) return r.subn(27);
                      var n = (0, c.toType)(t, c.TypeOutput.BN);
                      return r.sub(n.muln(2).addn(35));
                    }
                    function l(e) {
                      var t = new i.BN(e);
                      return t.eqn(0) || t.eqn(1);
                    }
                    r.ecsign = function (e, r, i) {
                      var o = (0, n.ecdsaSign)(e, r),
                        s = o.signature,
                        a = o.recid,
                        u = t.from(s.slice(0, 32)),
                        l = t.from(s.slice(32, 64));
                      if (!i || "number" == typeof i) {
                        if (i && !Number.isSafeInteger(i))
                          throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                        return { r: u, s: l, v: i ? a + (2 * i + 35) : a + 27 };
                      }
                      return { r: u, s: l, v: (0, c.toType)(i, c.TypeOutput.BN).muln(2).addn(35).addn(a).toArrayLike(t) };
                    };
                    r.ecrecover = function (e, r, i, s, a) {
                      var c = t.concat([(0, o.setLengthLeft)(i, 32), (0, o.setLengthLeft)(s, 32)], 64),
                        d = u(r, a);
                      if (!l(d)) throw new Error("Invalid signature v value");
                      var f = (0, n.ecdsaRecover)(c, d.toNumber(), e);
                      return t.from((0, n.publicKeyConvert)(f, !1).slice(1));
                    };
                    r.toRpcSig = function (e, r, n, i) {
                      if (!l(u(e, i))) throw new Error("Invalid signature v value");
                      return (0, o.bufferToHex)(t.concat([(0, o.setLengthLeft)(r, 32), (0, o.setLengthLeft)(n, 32), (0, o.toBuffer)(e)]));
                    };
                    r.toCompactSig = function (e, r, n, i) {
                      if (!l(u(e, i))) throw new Error("Invalid signature v value");
                      var s = (0, c.toType)(e, c.TypeOutput.Number),
                        a = n;
                      return (
                        ((s > 28 && s % 2 == 1) || 1 === s || 28 === s) && ((a = t.from(n))[0] |= 128),
                        (0, o.bufferToHex)(t.concat([(0, o.setLengthLeft)(r, 32), (0, o.setLengthLeft)(a, 32)]))
                      );
                    };
                    r.fromRpcSig = function (e) {
                      var t,
                        r,
                        n,
                        i = (0, o.toBuffer)(e);
                      if (i.length >= 65) (t = i.slice(0, 32)), (r = i.slice(32, 64)), (n = (0, o.bufferToInt)(i.slice(64)));
                      else {
                        if (64 !== i.length) throw new Error("Invalid signature length");
                        (t = i.slice(0, 32)), (r = i.slice(32, 64)), (n = (0, o.bufferToInt)(i.slice(32, 33)) >> 7), (r[0] &= 127);
                      }
                      return n < 27 && (n += 27), { v: n, r: t, s: r };
                    };
                    r.isValidSignature = function (e, t, r, n, o) {
                      void 0 === n && (n = !0);
                      var s = new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                        a = new i.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                      if (32 !== t.length || 32 !== r.length) return !1;
                      if (!l(u(e, o))) return !1;
                      var c = new i.BN(t),
                        d = new i.BN(r);
                      return !(c.isZero() || c.gt(a) || d.isZero() || d.gt(a)) && (!n || 1 !== d.cmp(s));
                    };
                    r.hashPersonalMessage = function (e) {
                      (0, a.assertIsBuffer)(e);
                      var r = t.from("Ethereum Signed Message:\n".concat(e.length), "utf-8");
                      return (0, s.keccak)(t.concat([r, e]));
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/signature.js"
      }
    ],
    [
      3306,
      { "./bytes": 3297, "./externals": 3299, "./internal": 3303, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.toType = r.TypeOutput = r.bnToRlp = r.bnToUnpaddedBuffer = r.bnToHex = void 0);
                    var n,
                      i = e("./externals"),
                      o = e("./internal"),
                      s = e("./bytes");
                    function a(e) {
                      return (0, s.unpadBuffer)(e.toArrayLike(t));
                    }
                    (r.bnToHex = function (e) {
                      return "0x".concat(e.toString(16));
                    }),
                      (r.bnToUnpaddedBuffer = a),
                      (r.bnToRlp = function (e) {
                        return a(e);
                      }),
                      (function (e) {
                        (e[(e.Number = 0)] = "Number"),
                          (e[(e.BN = 1)] = "BN"),
                          (e[(e.Buffer = 2)] = "Buffer"),
                          (e[(e.PrefixedHexString = 3)] = "PrefixedHexString");
                      })((n = r.TypeOutput || (r.TypeOutput = {}))),
                      (r.toType = function (e, t) {
                        if (null === e) return null;
                        if (e === undefined) return undefined;
                        if ("string" == typeof e && !(0, o.isHexString)(e))
                          throw new Error("A string must be provided with a 0x-prefix, given: ".concat(e));
                        if ("number" == typeof e && !Number.isSafeInteger(e))
                          throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                        var r = (0, s.toBuffer)(e);
                        if (t === n.Buffer) return r;
                        if (t === n.BN) return new i.BN(r);
                        if (t === n.Number) {
                          var a = new i.BN(r),
                            c = new i.BN(Number.MAX_SAFE_INTEGER.toString());
                          if (a.gt(c))
                            throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
                          return a.toNumber();
                        }
                        return "0x".concat(r.toString("hex"));
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "@metamask/keyring-controller>ethereumjs-wallet>ethereumjs-util",
        file: "node_modules/ethereumjs-wallet/node_modules/ethereumjs-util/dist.browser/types.js"
      }
    ],
    [
      34,
      {
        "../../../../shared/modules/conversion.utils": 4784,
        "../../lib/util": 91,
        "@metamask/ethjs-query": 1374,
        "ethereumjs-util": 3272,
        lodash: 4071,
        loglevel: 4083
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = void 0);
                var n = u(e("@metamask/ethjs-query")),
                  i = u(e("loglevel")),
                  o = e("ethereumjs-util"),
                  s = e("lodash"),
                  a = e("../../lib/util"),
                  c = e("../../../../shared/modules/conversion.utils");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                r.default = class {
                  constructor(e) {
                    this.query = new n.default(e);
                  }
                  async analyzeGasUsage(e) {
                    const t = await this.query.getBlockByNumber("latest", !1),
                      r = (0, a.hexToBn)(t.gasLimit),
                      n = (0, a.BnMultiplyByFraction)(r, 19, 20);
                    let o,
                      s = (0, c.bnToHex)(n);
                    try {
                      s = await this.estimateTxGas(e);
                    } catch (e) {
                      i.default.warn(e),
                        (o = { reason: e.message, errorKey: e.errorKey, debug: { blockNumber: t.number, blockGasLimit: t.gasLimit } });
                    }
                    return { blockGasLimit: t.gasLimit, estimatedGasHex: s, simulationFails: o };
                  }
                  async estimateTxGas(e) {
                    const t = (0, s.cloneDeep)(e.txParams);
                    return delete t.gasPrice, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, await this.query.estimateGas(t);
                  }
                  addGasBuffer(e, t, r = 1.5) {
                    const n = (0, a.hexToBn)(e),
                      i = (0, a.hexToBn)(t).muln(0.9),
                      o = n.muln(r);
                    return n.gt(i) ? (0, c.bnToHex)(n) : o.lt(i) ? (0, c.bnToHex)(o) : (0, c.bnToHex)(i);
                  }
                  async getBufferedGasLimit(e, t) {
                    const { blockGasLimit: r, estimatedGasHex: n, simulationFails: i } = await this.analyzeGasUsage(e);
                    return { gasLimit: this.addGasBuffer((0, o.addHexPrefix)(n), r, t), simulationFails: i };
                  }
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/transactions/tx-gas-utils.js" }
    ],
    [
      35,
      {
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/network": 4759,
        "../../../../shared/constants/transaction": 4770,
        "../../metamask-controller": 92,
        "./lib/tx-state-history-helpers": 31,
        "./lib/util": 32,
        "@metamask/obs-store": 1659,
        "@metamask/safe-event-emitter": 1777,
        lodash: 4071,
        loglevel: 4083,
        uuid: 4695
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.default = r.ERROR_SUBMITTING = void 0);
                var n = p(e("@metamask/safe-event-emitter")),
                  i = e("@metamask/obs-store"),
                  o = p(e("loglevel")),
                  s = e("lodash"),
                  a = e("uuid"),
                  c = e("../../../../shared/constants/transaction"),
                  u = e("../../metamask-controller"),
                  l = e("../../../../shared/constants/app"),
                  d = e("../../../../shared/constants/network"),
                  f = e("./lib/tx-state-history-helpers"),
                  h = e("./lib/util");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const m = (r.ERROR_SUBMITTING = "There was an error when resubmitting this transaction.");
                class g extends n.default {
                  constructor({ initState: e, txHistoryLimit: t, getNetworkStatus: r, getCurrentChainId: n }) {
                    super(),
                      (this.store = new i.ObservableStore({ transactions: {}, ...e })),
                      (this.txHistoryLimit = t),
                      (this.getNetworkStatus = r),
                      (this.getCurrentChainId = n);
                  }
                  generateTxMeta(e = {}) {
                    var t;
                    const r = this.getNetworkStatus(),
                      n = this.getCurrentChainId();
                    if (r !== d.NetworkStatus.Available) throw new Error("MetaMask is having trouble connecting to the network");
                    let i = null;
                    return (
                      e.txParams &&
                        "string" == typeof e.origin &&
                        e.origin !== l.ORIGIN_METAMASK &&
                        (void 0 !== e.txParams.gasPrice
                          ? (i = { gasPrice: e.txParams.gasPrice })
                          : (void 0 === e.txParams.maxFeePerGas && void 0 === e.txParams.maxPriorityFeePerGas) ||
                            (i = { maxPriorityFeePerGas: e.txParams.maxPriorityFeePerGas, maxFeePerGas: e.txParams.maxFeePerGas }),
                        void 0 !== e.txParams.gas && (i = { ...i, gas: e.txParams.gas })),
                      {
                        id: (0, a.v1)(),
                        time: new Date().getTime(),
                        status: c.TransactionStatus.unapproved,
                        originalGasEstimate: null === (t = e.txParams) || void 0 === t ? void 0 : t.gas,
                        userEditedGasLimit: !1,
                        chainId: n,
                        loadingDefaults: !0,
                        dappSuggestedGasFees: i,
                        sendFlowHistory: [],
                        verifiedOnBlockchain: !1,
                        ...e
                      }
                    );
                  }
                  getUnapprovedTxList() {
                    const e = this.getCurrentChainId();
                    return (0, s.pickBy)(
                      this.store.getState().transactions,
                      (t) => t.status === c.TransactionStatus.unapproved && t.chainId === e
                    );
                  }
                  getApprovedTransactions(e) {
                    const t = { status: c.TransactionStatus.approved };
                    return e && (t.from = e), this.getTransactions({ searchCriteria: t });
                  }
                  getPendingTransactions(e) {
                    const t = { status: c.TransactionStatus.submitted };
                    return e && (t.from = e), this.getTransactions({ searchCriteria: t });
                  }
                  getConfirmedTransactions(e) {
                    const t = { status: c.TransactionStatus.confirmed };
                    return e && (t.from = e), this.getTransactions({ searchCriteria: t });
                  }
                  getTransactionWithActionId(e) {
                    return (0, s.values)((0, s.pickBy)(this.store.getState().transactions, (t) => t.actionId === e))[0];
                  }
                  addTransaction(e) {
                    e.txParams && (e.txParams = (0, h.normalizeAndValidateTxParams)(e.txParams, !1)),
                      this.once(`${e.id}:signed`, () => {
                        this.removeAllListeners(`${e.id}:rejected`);
                      }),
                      this.once(`${e.id}:rejected`, () => {
                        this.removeAllListeners(`${e.id}:signed`);
                      }),
                      (e.history = []);
                    const t = (0, f.snapshotFromTxMeta)(e);
                    e.history.push(t);
                    const r = this.getTransactions({ filterToCurrentNetwork: !1 }),
                      { txHistoryLimit: n } = this,
                      i = new Set(),
                      o = r
                        .reverse()
                        .filter((e) => {
                          const { chainId: t, status: r, txParams: o } = e,
                            s = `${o.nonce}-${t}-${o.from}`;
                          return !i.has(s) && (!(i.size < n - 1 || !1 === (0, h.getFinalStates)().includes(r)) || (i.add(s), !1));
                        })
                        .map((e) => e.id);
                    return this._deleteTransactions(o), this._addTransactionsToState([e]), e;
                  }
                  addExternalTransaction(e) {
                    var t;
                    const r = null == e || null === (t = e.txParams) || void 0 === t ? void 0 : t.from,
                      n = this.getConfirmedTransactions(r),
                      i = this.getPendingTransactions(r);
                    return (
                      (0, h.validateConfirmedExternalTransaction)({ txMeta: e, pendingTransactions: i, confirmedTransactions: n }),
                      this._addTransactionsToState([e]),
                      e
                    );
                  }
                  getTransaction(e) {
                    const { transactions: t } = this.store.getState();
                    return t[e];
                  }
                  updateTransaction(e, t) {
                    if (e.txParams)
                      try {
                        e.txParams = (0, h.normalizeAndValidateTxParams)(e.txParams, !1);
                      } catch (t) {
                        if (e.warning.message !== m) throw t;
                        return void this.setTxStatusFailed(e.id, t);
                      }
                    this._updateTransactionHistory(e, t);
                  }
                  _updateTransactionHistory(e, t) {
                    const r = (0, f.snapshotFromTxMeta)(e),
                      n = (0, f.replayHistory)(e.history),
                      i = (0, f.generateHistoryEntry)(n, r, t);
                    i.length && e.history.push(i);
                    const o = e.id;
                    this.store.updateState({ transactions: { ...this.store.getState().transactions, [o]: e } });
                  }
                  getTransactions({ searchCriteria: e = {}, initialList: t, filterToCurrentNetwork: r = !0, limit: n } = {}) {
                    const i = this.getCurrentChainId(),
                      o = (0, s.mapValues)(e, (e) => ("function" == typeof e ? e : (t) => t === e)),
                      a = t ? (0, s.keyBy)(t, "id") : this.store.getState().transactions,
                      c = (0, s.sortBy)(
                        (0, s.pickBy)(a, (e) => {
                          if (r && e.chainId !== i) return !1;
                          for (const [t, r] of Object.entries(o))
                            if (t in e.txParams) {
                              if (!1 === r(e.txParams[t])) return !1;
                            } else if (!1 === r(e[t])) return !1;
                          return !0;
                        }),
                        "time"
                      );
                    if (n !== undefined) {
                      const e = new Set(),
                        t = [];
                      for (let r = c.length - 1; r > -1; r--) {
                        const i = c[r],
                          { nonce: o } = i.txParams;
                        if (!e.has(o)) {
                          if (!(e.size < n)) continue;
                          e.add(o);
                        }
                        t.unshift(i);
                      }
                      return t;
                    }
                    return c;
                  }
                  setTxStatusRejected(e) {
                    this._setTransactionStatus(e, c.TransactionStatus.rejected), this._deleteTransaction(e);
                  }
                  setTxStatusUnapproved(e) {
                    this._setTransactionStatus(e, c.TransactionStatus.unapproved);
                  }
                  setTxStatusApproved(e) {
                    this._setTransactionStatus(e, c.TransactionStatus.approved);
                  }
                  setTxStatusSigned(e) {
                    this._setTransactionStatus(e, c.TransactionStatus.signed);
                  }
                  setTxStatusSubmitted(e) {
                    const t = this.getTransaction(e);
                    (t.submittedTime = new Date().getTime()),
                      this.updateTransaction(t, "txStateManager - add submitted time stamp"),
                      this._setTransactionStatus(e, c.TransactionStatus.submitted);
                  }
                  setTxStatusConfirmed(e) {
                    this._setTransactionStatus(e, c.TransactionStatus.confirmed);
                  }
                  setTxStatusDropped(e) {
                    this._setTransactionStatus(e, c.TransactionStatus.dropped);
                  }
                  setTxStatusFailed(e, t) {
                    var r;
                    const n = t || new Error("Internal metamask failure"),
                      i = this.getTransaction(e);
                    (i.error = {
                      message: (null === (r = n.message) || void 0 === r ? void 0 : r.toString()) || n.toString(),
                      rpc: n.value,
                      stack: n.stack
                    }),
                      this._updateTransactionHistory(i, "transactions:tx-state-manager#fail - add error"),
                      this._setTransactionStatus(e, c.TransactionStatus.failed);
                  }
                  wipeTransactions(e) {
                    const { transactions: t } = this.store.getState(),
                      r = this.getCurrentChainId();
                    this.store.updateState({ transactions: (0, s.omitBy)(t, (t) => t.txParams.from === e && t.chainId === r) });
                  }
                  clearUnapprovedTxs() {
                    this.store.updateState({
                      transactions: (0, s.omitBy)(this.store.getState().transactions, (e) => e.status === c.TransactionStatus.unapproved)
                    });
                  }
                  _setTransactionStatus(e, t) {
                    const r = this.getTransaction(e);
                    if (r) {
                      r.status = t;
                      try {
                        this._updateTransactionHistory(r, `txStateManager: setting status to ${t}`),
                          this.emit(`${r.id}:${t}`, e),
                          this.emit("tx:status-update", e, t),
                          [c.TransactionStatus.submitted, c.TransactionStatus.rejected, c.TransactionStatus.failed].includes(t) &&
                            this.emit(`${r.id}:finished`, r),
                          this.emit(u.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE);
                      } catch (e) {
                        o.default.error(e);
                      }
                    }
                  }
                  _addTransactionsToState(e) {
                    this.store.updateState({ transactions: e.reduce((e, t) => ((e[t.id] = t), e), this.store.getState().transactions) });
                  }
                  _deleteTransaction(e) {
                    const { transactions: t } = this.store.getState();
                    delete t[e], this.store.updateState({ transactions: t });
                  }
                  _deleteTransactions(e) {
                    const { transactions: t } = this.store.getState();
                    e.forEach((e) => {
                      delete t[e];
                    }),
                      this.store.updateState({ transactions: t });
                  }
                }
                r.default = g;
              };
            };
      },
      { package: "$root$", file: "app/scripts/controllers/transactions/tx-state-manager.js" }
    ],
    [
      3536,
      { "./helpers.js": 3538 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                var n = e("./helpers.js");
                (r.JsonPatchError = n.PatchError), (r.deepClone = n._deepClone);
                var i = {
                    add: function (e, t, r) {
                      return (e[t] = this.value), { newDocument: r };
                    },
                    remove: function (e, t, r) {
                      var n = e[t];
                      return delete e[t], { newDocument: r, removed: n };
                    },
                    replace: function (e, t, r) {
                      var n = e[t];
                      return (e[t] = this.value), { newDocument: r, removed: n };
                    },
                    move: function (e, t, r) {
                      var i = s(r, this.path);
                      i && (i = n._deepClone(i));
                      var o = a(r, { op: "remove", path: this.from }).removed;
                      return a(r, { op: "add", path: this.path, value: o }), { newDocument: r, removed: i };
                    },
                    copy: function (e, t, r) {
                      var i = s(r, this.from);
                      return a(r, { op: "add", path: this.path, value: n._deepClone(i) }), { newDocument: r };
                    },
                    test: function (e, t, r) {
                      return { newDocument: r, test: d(e[t], this.value) };
                    },
                    _get: function (e, t, r) {
                      return (this.value = e[t]), { newDocument: r };
                    }
                  },
                  o = {
                    add: function (e, t, r) {
                      return n.isInteger(t) ? e.splice(t, 0, this.value) : (e[t] = this.value), { newDocument: r, index: t };
                    },
                    remove: function (e, t, r) {
                      return { newDocument: r, removed: e.splice(t, 1)[0] };
                    },
                    replace: function (e, t, r) {
                      var n = e[t];
                      return (e[t] = this.value), { newDocument: r, removed: n };
                    },
                    move: i.move,
                    copy: i.copy,
                    test: i.test,
                    _get: i._get
                  };
                function s(e, t) {
                  if ("" == t) return e;
                  var r = { op: "_get", path: t };
                  return a(e, r), r.value;
                }
                function a(e, t, a, c, l, f) {
                  if (
                    (void 0 === a && (a = !1),
                    void 0 === c && (c = !0),
                    void 0 === l && (l = !0),
                    void 0 === f && (f = 0),
                    a && ("function" == typeof a ? a(t, 0, e, t.path) : u(t, 0)),
                    "" === t.path)
                  ) {
                    var h = { newDocument: e };
                    if ("add" === t.op) return (h.newDocument = t.value), h;
                    if ("replace" === t.op) return (h.newDocument = t.value), (h.removed = e), h;
                    if ("move" === t.op || "copy" === t.op) return (h.newDocument = s(e, t.from)), "move" === t.op && (h.removed = e), h;
                    if ("test" === t.op) {
                      if (((h.test = d(e, t.value)), !1 === h.test))
                        throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", f, t, e);
                      return (h.newDocument = e), h;
                    }
                    if ("remove" === t.op) return (h.removed = e), (h.newDocument = null), h;
                    if ("_get" === t.op) return (t.value = e), h;
                    if (a)
                      throw new r.JsonPatchError(
                        "Operation `op` property is not one of operations defined in RFC-6902",
                        "OPERATION_OP_INVALID",
                        f,
                        t,
                        e
                      );
                    return h;
                  }
                  c || (e = n._deepClone(e));
                  var p = (t.path || "").split("/"),
                    m = e,
                    g = 1,
                    y = p.length,
                    b = undefined,
                    v = void 0,
                    w = void 0;
                  for (w = "function" == typeof a ? a : u; ; ) {
                    if (
                      ((v = p[g]) && -1 != v.indexOf("~") && (v = n.unescapePathComponent(v)),
                      l && ("__proto__" == v || ("prototype" == v && g > 0 && "constructor" == p[g - 1])))
                    )
                      throw new TypeError(
                        "JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README"
                      );
                    if (
                      (a &&
                        b === undefined &&
                        (m[v] === undefined ? (b = p.slice(0, g).join("/")) : g == y - 1 && (b = t.path), b !== undefined && w(t, 0, e, b)),
                      g++,
                      Array.isArray(m))
                    ) {
                      if ("-" === v) v = m.length;
                      else {
                        if (a && !n.isInteger(v))
                          throw new r.JsonPatchError(
                            "Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index",
                            "OPERATION_PATH_ILLEGAL_ARRAY_INDEX",
                            f,
                            t,
                            e
                          );
                        n.isInteger(v) && (v = ~~v);
                      }
                      if (g >= y) {
                        if (a && "add" === t.op && v > m.length)
                          throw new r.JsonPatchError(
                            "The specified index MUST NOT be greater than the number of elements in the array",
                            "OPERATION_VALUE_OUT_OF_BOUNDS",
                            f,
                            t,
                            e
                          );
                        if (!1 === (h = o[t.op].call(t, m, v, e)).test)
                          throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", f, t, e);
                        return h;
                      }
                    } else if (g >= y) {
                      if (!1 === (h = i[t.op].call(t, m, v, e)).test)
                        throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", f, t, e);
                      return h;
                    }
                    if (((m = m[v]), a && g < y && (!m || "object" != typeof m)))
                      throw new r.JsonPatchError("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", f, t, e);
                  }
                }
                function c(e, t, i, o, s) {
                  if ((void 0 === o && (o = !0), void 0 === s && (s = !0), i && !Array.isArray(t)))
                    throw new r.JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
                  o || (e = n._deepClone(e));
                  for (var c = new Array(t.length), u = 0, l = t.length; u < l; u++)
                    (c[u] = a(e, t[u], i, !0, s, u)), (e = c[u].newDocument);
                  return (c.newDocument = e), c;
                }
                function u(e, t, o, s) {
                  if ("object" != typeof e || null === e || Array.isArray(e))
                    throw new r.JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, o);
                  if (!i[e.op])
                    throw new r.JsonPatchError(
                      "Operation `op` property is not one of operations defined in RFC-6902",
                      "OPERATION_OP_INVALID",
                      t,
                      e,
                      o
                    );
                  if ("string" != typeof e.path)
                    throw new r.JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, o);
                  if (0 !== e.path.indexOf("/") && e.path.length > 0)
                    throw new r.JsonPatchError('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, o);
                  if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from)
                    throw new r.JsonPatchError(
                      "Operation `from` property is not present (applicable in `move` and `copy` operations)",
                      "OPERATION_FROM_REQUIRED",
                      t,
                      e,
                      o
                    );
                  if (("add" === e.op || "replace" === e.op || "test" === e.op) && e.value === undefined)
                    throw new r.JsonPatchError(
                      "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
                      "OPERATION_VALUE_REQUIRED",
                      t,
                      e,
                      o
                    );
                  if (("add" === e.op || "replace" === e.op || "test" === e.op) && n.hasUndefined(e.value))
                    throw new r.JsonPatchError(
                      "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
                      "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",
                      t,
                      e,
                      o
                    );
                  if (o)
                    if ("add" == e.op) {
                      var a = e.path.split("/").length,
                        c = s.split("/").length;
                      if (a !== c + 1 && a !== c)
                        throw new r.JsonPatchError(
                          "Cannot perform an `add` operation at the desired path",
                          "OPERATION_PATH_CANNOT_ADD",
                          t,
                          e,
                          o
                        );
                    } else if ("replace" === e.op || "remove" === e.op || "_get" === e.op) {
                      if (e.path !== s)
                        throw new r.JsonPatchError(
                          "Cannot perform the operation at a path that does not exist",
                          "OPERATION_PATH_UNRESOLVABLE",
                          t,
                          e,
                          o
                        );
                    } else if ("move" === e.op || "copy" === e.op) {
                      var u = l([{ op: "_get", path: e.from, value: undefined }], o);
                      if (u && "OPERATION_PATH_UNRESOLVABLE" === u.name)
                        throw new r.JsonPatchError(
                          "Cannot perform the operation from a path that does not exist",
                          "OPERATION_FROM_UNRESOLVABLE",
                          t,
                          e,
                          o
                        );
                    }
                }
                function l(e, t, i) {
                  try {
                    if (!Array.isArray(e)) throw new r.JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
                    if (t) c(n._deepClone(t), n._deepClone(e), i || !0);
                    else {
                      i = i || u;
                      for (var o = 0; o < e.length; o++) i(e[o], o, t, undefined);
                    }
                  } catch (e) {
                    if (e instanceof r.JsonPatchError) return e;
                    throw e;
                  }
                }
                function d(e, t) {
                  if (e === t) return !0;
                  if (e && t && "object" == typeof e && "object" == typeof t) {
                    var r,
                      n,
                      i,
                      o = Array.isArray(e),
                      s = Array.isArray(t);
                    if (o && s) {
                      if ((n = e.length) != t.length) return !1;
                      for (r = n; 0 != r--; ) if (!d(e[r], t[r])) return !1;
                      return !0;
                    }
                    if (o != s) return !1;
                    var a = Object.keys(e);
                    if ((n = a.length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--; ) if (!t.hasOwnProperty(a[r])) return !1;
                    for (r = n; 0 != r--; ) if (!d(e[(i = a[r])], t[i])) return !1;
                    return !0;
                  }
                  return e != e && t != t;
                }
                (r.getValueByPointer = s),
                  (r.applyOperation = a),
                  (r.applyPatch = c),
                  (r.applyReducer = function (e, t, n) {
                    var i = a(e, t);
                    if (!1 === i.test) throw new r.JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", n, t, e);
                    return i.newDocument;
                  }),
                  (r.validator = u),
                  (r.validate = l),
                  (r._areEquals = d);
              };
            };
      },
      { package: "fast-json-patch", file: "node_modules/fast-json-patch/commonjs/core.js" }
    ],
    [
      3537,
      { "./core.js": 3536, "./helpers.js": 3538 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
                /*!
                 * https://github.com/Starcounter-Jack/JSON-Patch
                 * (c) 2017-2021 Joachim Wester
                 * MIT license
                 */
                var n = e("./helpers.js"),
                  i = e("./core.js"),
                  o = new WeakMap(),
                  s = function (e) {
                    (this.observers = new Map()), (this.obj = e);
                  },
                  a = function (e, t) {
                    (this.callback = e), (this.observer = t);
                  };
                function c(e, t) {
                  void 0 === t && (t = !1);
                  var r = o.get(e.object);
                  u(r.value, e.object, e.patches, "", t), e.patches.length && i.applyPatch(r.value, e.patches);
                  var n = e.patches;
                  return n.length > 0 && ((e.patches = []), e.callback && e.callback(n)), n;
                }
                function u(e, t, r, i, o) {
                  if (t !== e) {
                    "function" == typeof t.toJSON && (t = t.toJSON());
                    for (var s = n._objectKeys(t), a = n._objectKeys(e), c = !1, l = a.length - 1; l >= 0; l--) {
                      var d = e[(h = a[l])];
                      if (!n.hasOwnProperty(t, h) || (t[h] === undefined && d !== undefined && !1 === Array.isArray(t)))
                        Array.isArray(e) === Array.isArray(t)
                          ? (o && r.push({ op: "test", path: i + "/" + n.escapePathComponent(h), value: n._deepClone(d) }),
                            r.push({ op: "remove", path: i + "/" + n.escapePathComponent(h) }),
                            (c = !0))
                          : (o && r.push({ op: "test", path: i, value: e }), r.push({ op: "replace", path: i, value: t }), !0);
                      else {
                        var f = t[h];
                        "object" == typeof d && null != d && "object" == typeof f && null != f && Array.isArray(d) === Array.isArray(f)
                          ? u(d, f, r, i + "/" + n.escapePathComponent(h), o)
                          : d !== f &&
                            (!0,
                            o && r.push({ op: "test", path: i + "/" + n.escapePathComponent(h), value: n._deepClone(d) }),
                            r.push({ op: "replace", path: i + "/" + n.escapePathComponent(h), value: n._deepClone(f) }));
                      }
                    }
                    if (c || s.length != a.length)
                      for (l = 0; l < s.length; l++) {
                        var h = s[l];
                        n.hasOwnProperty(e, h) ||
                          t[h] === undefined ||
                          r.push({ op: "add", path: i + "/" + n.escapePathComponent(h), value: n._deepClone(t[h]) });
                      }
                  }
                }
                (r.unobserve = function (e, t) {
                  t.unobserve();
                }),
                  (r.observe = function (e, t) {
                    var r,
                      i = (function (e) {
                        return o.get(e);
                      })(e);
                    if (i) {
                      var u = (function (e, t) {
                        return e.observers.get(t);
                      })(i, t);
                      r = u && u.observer;
                    } else (i = new s(e)), o.set(e, i);
                    if (r) return r;
                    if (((r = {}), (i.value = n._deepClone(e)), t)) {
                      (r.callback = t), (r.next = null);
                      var l = function () {
                          c(r);
                        },
                        d = function () {
                          clearTimeout(r.next), (r.next = setTimeout(l));
                        };
                      "undefined" != typeof window &&
                        (window.addEventListener("mouseup", d),
                        window.addEventListener("keyup", d),
                        window.addEventListener("mousedown", d),
                        window.addEventListener("keydown", d),
                        window.addEventListener("change", d));
                    }
                    return (
                      (r.patches = []),
                      (r.object = e),
                      (r.unobserve = function () {
                        c(r),
                          clearTimeout(r.next),
                          (function (e, t) {
                            e.observers.delete(t.callback);
                          })(i, r),
                          "undefined" != typeof window &&
                            (window.removeEventListener("mouseup", d),
                            window.removeEventListener("keyup", d),
                            window.removeEventListener("mousedown", d),
                            window.removeEventListener("keydown", d),
                            window.removeEventListener("change", d));
                      }),
                      i.observers.set(t, new a(t, r)),
                      r
                    );
                  }),
                  (r.generate = c),
                  (r.compare = function (e, t, r) {
                    void 0 === r && (r = !1);
                    var n = [];
                    return u(e, t, n, "", r), n;
                  });
              };
            };
      },
      { package: "fast-json-patch", file: "node_modules/fast-json-patch/commonjs/duplex.js" }
    ],
    [
      3538,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                /*!
                 * https://github.com/Starcounter-Jack/JSON-Patch
                 * (c) 2017-2022 Joachim Wester
                 * MIT licensed
                 */
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 });
                var o = Object.prototype.hasOwnProperty;
                function s(e, t) {
                  return o.call(e, t);
                }
                function a(e) {
                  if (Array.isArray(e)) {
                    for (var t = new Array(e.length), r = 0; r < t.length; r++) t[r] = "" + r;
                    return t;
                  }
                  if (Object.keys) return Object.keys(e);
                  var n = [];
                  for (var i in e) s(e, i) && n.push(i);
                  return n;
                }
                function c(e) {
                  return -1 === e.indexOf("/") && -1 === e.indexOf("~") ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
                }
                function u(e, t) {
                  var r;
                  for (var n in e)
                    if (s(e, n)) {
                      if (e[n] === t) return c(n) + "/";
                      if ("object" == typeof e[n] && "" != (r = u(e[n], t))) return c(n) + "/" + r;
                    }
                  return "";
                }
                function l(e, t) {
                  var r = [e];
                  for (var n in t) {
                    var i = "object" == typeof t[n] ? JSON.stringify(t[n], null, 2) : t[n];
                    void 0 !== i && r.push(n + ": " + i);
                  }
                  return r.join("\n");
                }
                Object.defineProperty(r, "hasOwnProperty", { value: s }),
                  (r._objectKeys = a),
                  (r._deepClone = function (e) {
                    switch (typeof e) {
                      case "object":
                        return JSON.parse(JSON.stringify(e));
                      case "undefined":
                        return null;
                      default:
                        return e;
                    }
                  }),
                  (r.isInteger = function (e) {
                    for (var t, r = 0, n = e.length; r < n; ) {
                      if (!((t = e.charCodeAt(r)) >= 48 && t <= 57)) return !1;
                      r++;
                    }
                    return !0;
                  }),
                  (r.escapePathComponent = c),
                  (r.unescapePathComponent = function (e) {
                    return e.replace(/~1/g, "/").replace(/~0/g, "~");
                  }),
                  (r._getPathRecursive = u),
                  (r.getPath = function (e, t) {
                    if (e === t) return "/";
                    var r = u(e, t);
                    if ("" === r) throw new Error("Object not found in root");
                    return "/" + r;
                  }),
                  (r.hasUndefined = function e(t) {
                    if (t === undefined) return !0;
                    if (t)
                      if (Array.isArray(t)) {
                        for (var r = 0, n = t.length; r < n; r++) if (e(t[r])) return !0;
                      } else if ("object" == typeof t) for (var i = a(t), o = i.length, s = 0; s < o; s++) if (e(t[i[s]])) return !0;
                    return !1;
                  });
                var d = (function (e) {
                  function t(t, r, n, i, o) {
                    var s = this.constructor,
                      a = e.call(this, l(t, { name: r, index: n, operation: i, tree: o })) || this;
                    return (
                      (a.name = r),
                      (a.index = n),
                      (a.operation = i),
                      (a.tree = o),
                      Object.setPrototypeOf(a, s.prototype),
                      (a.message = l(t, { name: r, index: n, operation: i, tree: o })),
                      a
                    );
                  }
                  return i(t, e), t;
                })(Error);
                r.PatchError = d;
              };
            };
      },
      { package: "fast-json-patch", file: "node_modules/fast-json-patch/commonjs/helpers.js" }
    ],
    [
      3539,
      { "./commonjs/core.js": 3536, "./commonjs/duplex.js": 3537, "./commonjs/helpers.js": 3538 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n = e("./commonjs/core.js");
                Object.assign(r, n);
                var i = e("./commonjs/duplex.js");
                Object.assign(r, i);
                var o = e("./commonjs/helpers.js");
                (r.JsonPatchError = o.PatchError),
                  (r.deepClone = o._deepClone),
                  (r.escapePathComponent = o.escapePathComponent),
                  (r.unescapePathComponent = o.unescapePathComponent);
              };
            };
      },
      { package: "fast-json-patch", file: "node_modules/fast-json-patch/index.js" }
    ],
    [
      3541,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                !(function () {
                  var e;
                  try {
                    e = "undefined" != typeof Intl && void 0 !== Intl.Collator ? Intl.Collator("generic", { sensitivity: "base" }) : null;
                  } catch (e) {
                    console.log("Collator could not be initialized and wouldn't be used");
                  }
                  var n = [],
                    i = [],
                    o = {
                      get: function (t, r, o) {
                        var s,
                          a,
                          c,
                          u,
                          l,
                          d,
                          f = o && e && o.useCollator,
                          h = t.length,
                          p = r.length;
                        if (0 === h) return p;
                        if (0 === p) return h;
                        for (c = 0; c < p; ++c) (n[c] = c), (i[c] = r.charCodeAt(c));
                        if (((n[p] = p), f))
                          for (c = 0; c < h; ++c) {
                            for (a = c + 1, u = 0; u < p; ++u)
                              (s = a),
                                (d = 0 === e.compare(t.charAt(c), String.fromCharCode(i[u]))),
                                (a = n[u] + (d ? 0 : 1)) > (l = s + 1) && (a = l),
                                a > (l = n[u + 1] + 1) && (a = l),
                                (n[u] = s);
                            n[u] = a;
                          }
                        else
                          for (c = 0; c < h; ++c) {
                            for (a = c + 1, u = 0; u < p; ++u)
                              (s = a),
                                (d = t.charCodeAt(c) === i[u]),
                                (a = n[u] + (d ? 0 : 1)) > (l = s + 1) && (a = l),
                                a > (l = n[u + 1] + 1) && (a = l),
                                (n[u] = s);
                            n[u] = a;
                          }
                        return a;
                      }
                    };
                  "undefined" != typeof define && null !== define && define.amd
                    ? define(function () {
                        return o;
                      })
                    : null != t && void 0 !== r && t.exports === r
                    ? (t.exports = o)
                    : "undefined" != typeof self && "function" == typeof self.postMessage && "function" == typeof self.importScripts
                    ? (self.Levenshtein = o)
                    : "undefined" != typeof window && null !== window && (window.Levenshtein = o);
                })();
              };
            };
      },
      { package: "eslint>optionator>fast-levenshtein", file: "node_modules/fast-levenshtein/levenshtein.js" }
    ],
    [
      3593,
      { "../constants": 3603, "./utilities": 3598 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  i =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.removeAddressTags = r.fetchAddressTags = r.addAddressTags = void 0);
                var o = e("../constants"),
                  s = e("./utilities");
                r.addAddressTags = function (e) {
                  return n(void 0, void 0, void 0, function () {
                    var t;
                    return i(this, function (r) {
                      return (
                        (t = e.reduce(function (e, t) {
                          var r = Object.keys(t)[0];
                          return (e[r] = t[r]), e;
                        }, {})),
                        [
                          2,
                          (0, s.queue)(function (e) {
                            return e.addKvRecords({ records: t });
                          })
                        ]
                      );
                    });
                  });
                };
                r.fetchAddressTags = function (e) {
                  var t = void 0 === e ? { n: o.MAX_ADDR, start: 0 } : e,
                    r = t.n,
                    a = t.start;
                  return n(void 0, void 0, void 0, function () {
                    var e, t, c;
                    return i(this, function (u) {
                      switch (u.label) {
                        case 0:
                          (e = []), (t = r), (c = a), (u.label = 1);
                        case 1:
                          return t > 0
                            ? [
                                4,
                                (0, s.queue)(function (r) {
                                  return r.getKvRecords({ start: c, n: t > o.MAX_ADDR ? o.MAX_ADDR : t }).then(function (r) {
                                    return n(void 0, void 0, void 0, function () {
                                      return i(this, function (n) {
                                        return e.push.apply(e, r.records), (c = r.fetched + c), (t = r.total - c), [2];
                                      });
                                    });
                                  });
                                })
                              ]
                            : [3, 3];
                        case 2:
                          return u.sent(), [3, 1];
                        case 3:
                          return [2, e];
                      }
                    });
                  });
                };
                r.removeAddressTags = function (e) {
                  return n(void 0, void 0, void 0, function () {
                    var t;
                    return i(this, function (r) {
                      return (
                        (t = e.map(function (e) {
                          return "".concat(e.id);
                        })),
                        [
                          2,
                          (0, s.queue)(function (e) {
                            return e.removeKvRecords({ ids: t });
                          })
                        ]
                      );
                    });
                  });
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/api/addressTags.js" }
    ],
    [
      3594,
      { "../constants": 3603, "./utilities": 3598 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__assign) ||
                    function () {
                      return (
                        (n =
                          Object.assign ||
                          function (e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                              for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                          }),
                        n.apply(this, arguments)
                      );
                    },
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  o =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.fetchLedgerLegacyAddresses =
                    r.fetchLedgerLiveAddresses =
                    r.fetchSolanaAddresses =
                    r.fetchBtcWrappedSegwitAddresses =
                    r.fetchBtCSegwitAddresses =
                    r.fetchBtcLegacyAddresses =
                    r.fetchAddresses =
                      void 0);
                var s = e("../constants"),
                  a = e("./utilities");
                r.fetchAddresses = function (e) {
                  return i(void 0, void 0, void 0, function () {
                    return o(this, function (t) {
                      return [
                        2,
                        (0, a.queue)(function (t) {
                          return t.getAddresses(n({ startPath: s.DEFAULT_ETH_DERIVATION, n: s.MAX_ADDR }, e)).then(function (e) {
                            return e.map(function (e) {
                              return "".concat(e);
                            });
                          });
                        })
                      ];
                    });
                  });
                };
                r.fetchBtcLegacyAddresses = function (e, t) {
                  return (
                    void 0 === e && (e = s.MAX_ADDR),
                    i(void 0, void 0, void 0, function () {
                      return o(this, function (n) {
                        return [2, (0, r.fetchAddresses)({ startPath: (0, a.getStartPath)(s.BTC_LEGACY_DERIVATION, t), n: e })];
                      });
                    })
                  );
                };
                r.fetchBtCSegwitAddresses = function (e, t) {
                  return (
                    void 0 === e && (e = s.MAX_ADDR),
                    i(void 0, void 0, void 0, function () {
                      return o(this, function (n) {
                        return [2, (0, r.fetchAddresses)({ startPath: (0, a.getStartPath)(s.BTC_SEGWIT_DERIVATION, t), n: e })];
                      });
                    })
                  );
                };
                r.fetchBtcWrappedSegwitAddresses = function (e, t) {
                  return (
                    void 0 === e && (e = s.MAX_ADDR),
                    i(void 0, void 0, void 0, function () {
                      return o(this, function (n) {
                        return [2, (0, r.fetchAddresses)({ startPath: (0, a.getStartPath)(s.BTC_WRAPPED_SEGWIT_DERIVATION, t), n: e })];
                      });
                    })
                  );
                };
                r.fetchSolanaAddresses = function (e, t) {
                  return (
                    void 0 === e && (e = s.MAX_ADDR),
                    i(void 0, void 0, void 0, function () {
                      return o(this, function (n) {
                        return [2, (0, r.fetchAddresses)({ startPath: (0, a.getStartPath)(s.SOLANA_DERIVATION, t, 2), n: e })];
                      });
                    })
                  );
                };
                r.fetchLedgerLiveAddresses = function (e, t) {
                  return (
                    void 0 === e && (e = s.MAX_ADDR),
                    i(void 0, void 0, void 0, function () {
                      var r, n, i;
                      return o(this, function (o) {
                        for (
                          r = [],
                            n = function (e) {
                              r.push(
                                (0, a.queue)(function (r) {
                                  return r
                                    .getAddresses({ startPath: (0, a.getStartPath)(s.LEDGER_LIVE_DERIVATION, t + e, 2), n: 1 })
                                    .then(function (e) {
                                      return e.map(function (e) {
                                        return "".concat(e);
                                      });
                                    });
                                })
                              );
                            },
                            i = 0;
                          i < e;
                          i++
                        )
                          n(i);
                        return [2, Promise.all(r)];
                      });
                    })
                  );
                };
                r.fetchLedgerLegacyAddresses = function (e, t) {
                  return (
                    void 0 === e && (e = s.MAX_ADDR),
                    i(void 0, void 0, void 0, function () {
                      var r, n, i;
                      return o(this, function (o) {
                        for (
                          r = [],
                            n = function (e) {
                              r.push(
                                (0, a.queue)(function (r) {
                                  return r
                                    .getAddresses({ startPath: (0, a.getStartPath)(s.LEDGER_LEGACY_DERIVATION, t + e, 3), n: 1 })
                                    .then(function (e) {
                                      return e.map(function (e) {
                                        return "".concat(e);
                                      });
                                    });
                                })
                              );
                            },
                            i = 0;
                          i < e;
                          i++
                        )
                          n(i);
                        return [2, Promise.all(r)];
                      });
                    })
                  );
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/api/addresses.js" }
    ],
    [
      3595,
      { "./addressTags": 3593, "./addresses": 3594, "./signing": 3596, "./utilities": 3598 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    },
                  o =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  s =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.fetchActiveWallets = r.pair = r.connect = r.setup = r.getClient = void 0);
                var a = e("./utilities");
                Object.defineProperty(r, "getClient", {
                  enumerable: !0,
                  get: function () {
                    return a.getClient;
                  }
                }),
                  Object.defineProperty(r, "setup", {
                    enumerable: !0,
                    get: function () {
                      return a.setup;
                    }
                  });
                var c = e("./utilities");
                r.connect = function (e) {
                  return o(void 0, void 0, void 0, function () {
                    return s(this, function (t) {
                      return [
                        2,
                        (0, c.queue)(function (t) {
                          return t.connect(e);
                        })
                      ];
                    });
                  });
                };
                r.pair = function (e) {
                  return o(void 0, void 0, void 0, function () {
                    return s(this, function (t) {
                      return [
                        2,
                        (0, c.queue)(function (t) {
                          return t.pair(e);
                        })
                      ];
                    });
                  });
                };
                (r.fetchActiveWallets = function () {
                  return o(void 0, void 0, void 0, function () {
                    return s(this, function (e) {
                      return [
                        2,
                        (0, c.queue)(function (e) {
                          return e.fetchActiveWallet();
                        })
                      ];
                    });
                  });
                }),
                  i(e("./addresses"), r),
                  i(e("./addressTags"), r),
                  i(e("./signing"), r);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/api/index.js" }
    ],
    [
      3596,
      { "..": 3616, "../constants": 3603, "./utilities": 3598 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__assign) ||
                    function () {
                      return (
                        (n =
                          Object.assign ||
                          function (e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++)
                              for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                          }),
                        n.apply(this, arguments)
                      );
                    },
                  i =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  o =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.signSolanaTx = r.signBtcWrappedSegwitTx = r.signBtcSegwitTx = r.signBtcLegacyTx = r.signMessage = r.sign = void 0);
                var s = e(".."),
                  a = e("../constants"),
                  c = e("./utilities");
                r.sign = function (e, t) {
                  return i(void 0, void 0, void 0, function () {
                    var r;
                    return o(this, function (i) {
                      return (
                        (r = n(
                          {
                            data: {
                              signerPath: a.DEFAULT_ETH_DERIVATION,
                              curveType: s.Constants.SIGNING.CURVES.SECP256K1,
                              hashType: s.Constants.SIGNING.HASHES.KECCAK256,
                              encodingType: s.Constants.SIGNING.ENCODINGS.EVM,
                              payload: e
                            }
                          },
                          t
                        )),
                        [
                          2,
                          (0, c.queue)(function (e) {
                            return e.sign(r);
                          })
                        ]
                      );
                    });
                  });
                };
                r.signMessage = function (e, t) {
                  return i(void 0, void 0, void 0, function () {
                    var r;
                    return o(this, function (i) {
                      return (
                        (r = {
                          data: n(
                            {
                              signerPath: a.DEFAULT_ETH_DERIVATION,
                              curveType: s.Constants.SIGNING.CURVES.SECP256K1,
                              hashType: s.Constants.SIGNING.HASHES.KECCAK256,
                              protocol: "signPersonal",
                              payload: e
                            },
                            t
                          ),
                          currency: a.CURRENCIES.ETH_MSG
                        }),
                        (0, c.isEIP712Payload)(e) && (r.data.protocol = "eip712"),
                        [
                          2,
                          (0, c.queue)(function (e) {
                            return e.sign(r);
                          })
                        ]
                      );
                    });
                  });
                };
                r.signBtcLegacyTx = function (e) {
                  return i(void 0, void 0, void 0, function () {
                    var t;
                    return o(this, function (r) {
                      return (
                        (t = { data: n({ signerPath: a.BTC_LEGACY_DERIVATION }, e), currency: "BTC" }),
                        [
                          2,
                          (0, c.queue)(function (e) {
                            return e.sign(t);
                          })
                        ]
                      );
                    });
                  });
                };
                r.signBtcSegwitTx = function (e) {
                  return i(void 0, void 0, void 0, function () {
                    var t;
                    return o(this, function (r) {
                      return (
                        (t = { data: n({ signerPath: a.BTC_SEGWIT_DERIVATION }, e), currency: "BTC" }),
                        [
                          2,
                          (0, c.queue)(function (e) {
                            return e.sign(t);
                          })
                        ]
                      );
                    });
                  });
                };
                r.signBtcWrappedSegwitTx = function (e) {
                  return i(void 0, void 0, void 0, function () {
                    var t;
                    return o(this, function (r) {
                      return (
                        (t = { data: n({ signerPath: a.BTC_WRAPPED_SEGWIT_DERIVATION }, e), currency: "BTC" }),
                        [
                          2,
                          (0, c.queue)(function (e) {
                            return e.sign(t);
                          })
                        ]
                      );
                    });
                  });
                };
                r.signSolanaTx = function (e, t) {
                  return i(void 0, void 0, void 0, function () {
                    var r;
                    return o(this, function (i) {
                      return (
                        (r = {
                          data: n(
                            {
                              signerPath: a.SOLANA_DERIVATION,
                              curveType: s.Constants.SIGNING.CURVES.ED25519,
                              hashType: s.Constants.SIGNING.HASHES.NONE,
                              encodingType: s.Constants.SIGNING.ENCODINGS.SOLANA,
                              payload: e
                            },
                            t
                          )
                        }),
                        [
                          2,
                          (0, c.queue)(function (e) {
                            return e.sign(r);
                          })
                        ]
                      );
                    });
                  });
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/api/signing.js" }
    ],
    [
      3597,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.setFunctionQueue = r.getFunctionQueue = r.setLoadClient = r.loadClient = r.setSaveClient = r.saveClient = void 0);
                r.setSaveClient = function (e) {
                  r.saveClient = e;
                };
                var n;
                r.setLoadClient = function (e) {
                  r.loadClient = e;
                };
                r.getFunctionQueue = function () {
                  return n;
                };
                r.setFunctionQueue = function (e) {
                  n = e;
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/api/state.js" }
    ],
    [
      3598,
      { "..": 3616, "../client": 3602, "./state": 3597, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.isEIP712Payload = r.getStartPath = r.getClient = r.queue = r.setup = void 0);
                    var o = e(".."),
                      s = e("../client"),
                      a = e("./state");
                    r.setup = function (e) {
                      var t = e.deviceId,
                        r = e.password,
                        l = e.name,
                        d = e.getStoredClient,
                        f = e.setStoredClient;
                      return n(void 0, void 0, void 0, function () {
                        var e, n, h, p;
                        return i(this, function (i) {
                          if (!d) throw new Error("Client data getter required");
                          if (((0, a.setSaveClient)(c(f)), !f)) throw new Error("Client data setter required");
                          if (((0, a.setLoadClient)(u(d)), t && r && l))
                            return (
                              (e = o.Utils.generateAppSecret(t, r, l)),
                              [
                                2,
                                (n = new s.Client({ deviceId: t, privKey: e, name: l })).connect(t).then(function (e) {
                                  return (0, a.saveClient)(n.getStateData()), e;
                                })
                              ]
                            );
                          if (!(h = (0, a.loadClient)())) throw new Error("Client not initialized");
                          return (
                            (p = h.getDeviceId()),
                            !h.ephemeralPub && p ? [2, (0, o.connect)(p)] : ((0, a.saveClient)(h.getStateData()), [2, Promise.resolve(!0)])
                          );
                        });
                      });
                    };
                    r.queue = function (e) {
                      var t = (0, a.loadClient)();
                      if (!t) throw new Error("Client not initialized");
                      return (
                        (0, a.getFunctionQueue)() || (0, a.setFunctionQueue)(Promise.resolve()),
                        (0, a.setFunctionQueue)(
                          (0, a.getFunctionQueue)().then(function () {
                            return e(t)
                              .catch(function (e) {
                                throw ((0, a.setFunctionQueue)(Promise.resolve()), e);
                              })
                              .then(function (e) {
                                return (0, a.saveClient)(t.getStateData()), e;
                              });
                          })
                        ),
                        (0, a.getFunctionQueue)()
                      );
                    };
                    r.getClient = function () {
                      return a.loadClient ? (0, a.loadClient)() : null;
                    };
                    var c = function (e) {
                        return function (r) {
                          if (r) {
                            var n = (function (e) {
                              return t.from(e).toString("base64");
                            })(r);
                            e(n);
                          }
                        };
                      },
                      u = function (e) {
                        return function () {
                          var r = e();
                          if (!r) return undefined;
                          var n = (function (e) {
                            return t.from(e, "base64").toString();
                          })(r);
                          if (!n) return undefined;
                          var i = new s.Client({ stateData: n });
                          if (!i) throw new Error("Client not initialized");
                          return i;
                        };
                      };
                    r.getStartPath = function (e, t, r) {
                      void 0 === t && (t = 0), void 0 === r && (r = 4);
                      var n = e;
                      return t > 0 && (n[r] = e[r] + t), n;
                    };
                    r.isEIP712Payload = function (e) {
                      return "string" != typeof e && "types" in e && "domain" in e && "primaryType" in e && "message" in e;
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/api/utilities.js" }
    ],
    [
      3599,
      {
        "./constants": 3603,
        "./protocol": 3617,
        bech32: 3749,
        bs58check: 2917,
        buffer: 2913,
        "hash.js/lib/hash/ripemd": 3813,
        "hash.js/lib/hash/sha": 3814
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                      (this && this.__importDefault) ||
                      function (e) {
                        return e && e.__esModule ? e : { default: e };
                      };
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var i = e("bech32"),
                      o = n(e("bs58check")),
                      s = e("hash.js/lib/hash/ripemd"),
                      a = e("hash.js/lib/hash/sha"),
                      c = e("./constants"),
                      u = e("./protocol"),
                      l = t.from("01", "hex"),
                      d = c.BIP_CONSTANTS.PURPOSES,
                      f = c.BIP_CONSTANTS.COINS,
                      h = { ZERO: 0, HASH160: 169, DUP: 118, EQUAL: 135, EQUALVERIFY: 136, CHECKSIG: 172 },
                      p = "bc",
                      m = "tb",
                      g = 208,
                      y = 240;
                    function b(e, r) {
                      return t.concat([e, r]);
                    }
                    function v(e) {
                      var r = t.alloc(4);
                      return r.writeUInt32LE(e, 0), r;
                    }
                    function w(e) {
                      var r;
                      return (
                        e < 253
                          ? (r = t.alloc(1)).writeUInt8(e, 0)
                          : e <= 65535
                          ? ((r = t.alloc(3)).writeUInt8(253, 0), r.writeUInt16LE(e, 1))
                          : e < 4294967295
                          ? ((r = t.alloc(5)).writeUInt8(254, 0), r.writeUInt32LE(e, 1))
                          : ((r = t.alloc(9)).writeUInt8(255, 0), r.writeUInt32LE(e >>> 0, 1), r.writeUInt32LE((e / 4294967296) | 0, 5)),
                        r
                      );
                    }
                    function k(e, r, n) {
                      "number" == typeof e && (e = e.toString(16));
                      var i = t.alloc(8),
                        o = e.length % 2 == 0 ? e.toString(16) : "0".concat(e.toString(16));
                      return t.from(o, "hex").reverse().copy(i, 0), i.copy(r, n), i;
                    }
                    function E(e) {
                      var r, n;
                      try {
                        (r = o.default.decode(e)[0]), (n = o.default.decode(e).slice(1));
                      } catch (o) {
                        try {
                          var s = i.bech32.decode(e);
                          if (s.prefix === p) r = g;
                          else {
                            if (s.prefix !== m) throw new Error("Unsupported prefix: must be bc or tb.");
                            r = y;
                          }
                          if (0 !== s.words[0]) throw new Error("Unsupported segwit version: must be 0, got ".concat(s.words[0]));
                          if (33 !== s.words.length) {
                            var a = 53 === s.words.length;
                            throw new Error("Unsupported address".concat(a ? " (P2WSH not supported)" : "", ": ").concat(e));
                          }
                          n = t.from(i.bech32.fromWords(s.words.slice(1)));
                        } catch (t) {
                          throw new Error("Unable to decode address: ".concat(e, ": ").concat(t.message));
                        }
                      }
                      return { versionByte: r, pkh: n };
                    }
                    function T(e) {
                      if (e.length < 2) throw new Error("Path must be >1 index");
                      var t = e[0],
                        r = e[1];
                      if (t === d.BTC_SEGWIT && r === f.BTC) return g;
                      if (t === d.BTC_SEGWIT && r === f.BTC_TESTNET) return y;
                      if (t === d.BTC_WRAPPED_SEGWIT && r === f.BTC) return 5;
                      if (t === d.BTC_WRAPPED_SEGWIT && r === f.BTC_TESTNET) return 196;
                      if (t === d.BTC_LEGACY && r === f.BTC) return 0;
                      if (t === d.BTC_LEGACY && r === f.BTC_TESTNET) return 111;
                      throw new Error("Invalid Bitcoin path provided. Cannot determine address format.");
                    }
                    function x(e) {
                      switch (e.signerPath[0]) {
                        case d.BTC_LEGACY:
                          return 1;
                        case d.BTC_WRAPPED_SEGWIT:
                          return 3;
                        case d.BTC_SEGWIT:
                          return 4;
                        default:
                          throw new Error("Unsupported path purpose (".concat(e.signerPath[0], "): cannot determine BTC script type."));
                      }
                    }
                    r.default = {
                      buildBitcoinTxRequest: function (e) {
                        var r = e.prevOuts,
                          n = e.recipient,
                          i = e.value,
                          o = e.changePath,
                          s = e.fee;
                        if (!o) throw new Error("No changePath provided.");
                        if (5 !== o.length) throw new Error("Please provide a full change path.");
                        var a = t.alloc(59 + 69 * r.length),
                          c = 0,
                          l = T(o);
                        a.writeUInt8(l, 0), c++, a.writeUInt32LE(o.length, c), (c += 4);
                        for (var d = 0; d < o.length; d++) a.writeUInt32LE(o[d], c), (c += 4);
                        a.writeUInt32LE(s, c), (c += 4);
                        var f = E(n);
                        a.writeUInt8(f.versionByte, c),
                          c++,
                          f.pkh.copy(a, c),
                          (c += f.pkh.length),
                          k(i, a, c),
                          (c += 8),
                          a.writeUInt8(r.length, c),
                          c++;
                        var h = 0;
                        return (
                          r.forEach(function (e) {
                            if (!e.signerPath || 5 !== e.signerPath.length) throw new Error("Full recipient path not specified ");
                            a.writeUInt32LE(e.signerPath.length, c), (c += 4);
                            for (var r = 0; r < e.signerPath.length; r++) a.writeUInt32LE(e.signerPath[r], c), (c += 4);
                            a.writeUInt32LE(e.index, c), (c += 4), k(e.value, a, c), (c += 8), (h += e.value);
                            var n = x(e);
                            a.writeUInt8(n, c),
                              c++,
                              t.isBuffer(e.txHash) || (e.txHash = t.from(e.txHash, "hex")),
                              e.txHash.copy(a, c),
                              (c += e.txHash.length);
                          }),
                          { payload: a, schema: u.LatticeSignSchema.bitcoin, origData: e, changeData: { value: h - (i + s) } }
                        );
                      },
                      serializeTx: function (e) {
                        var r = e.inputs,
                          n = e.outputs,
                          i = e.lockTime,
                          o = void 0 === i ? 0 : i,
                          c = t.alloc(4),
                          u = 0,
                          f = (function (e) {
                            var t = !1;
                            return (
                              e.forEach(function (e) {
                                (e.signerPath[0] !== d.BTC_SEGWIT && e.signerPath[0] !== d.BTC_WRAPPED_SEGWIT) || (t = !0);
                              }),
                              t
                            );
                          })(r);
                        c.writeUInt32LE(2, u), (u += 4), f && ((c = b(c, t.from("00", "hex"))), (c = b(c, t.from("01", "hex"))));
                        var p = w(r.length);
                        (c = b(c, p)),
                          (u += p.length),
                          r.forEach(function (e) {
                            (c = b(c, e.hash.reverse())), (u += e.hash.length);
                            var r = v(e.index);
                            (c = b(c, r)), (u += r.length);
                            var n = x(e);
                            if (3 === n) {
                              var i = (function (e) {
                                  var r = t.alloc(22),
                                    n = t.from((0, a.sha256)().update(e).digest("hex"), "hex"),
                                    i = t.from((0, s.ripemd160)().update(n).digest("hex"), "hex");
                                  return r.writeUInt8(h.ZERO, 0), r.writeUInt8(i.length, 1), i.copy(r, 2), r;
                                })(e.pubkey),
                                o = w(i.length),
                                d = w((f = t.concat([o, i])).length);
                              (c = b(c, d)), (u += d.length), (c = b(c, f)), (u += f.length);
                            } else if (1 === n) {
                              var f = (function (e, r) {
                                var n = w((e = t.concat([e, l])).length),
                                  i = w(r.length),
                                  o = t.concat([n, e, i, r]),
                                  s = w(o.length);
                                return t.concat([s, o]);
                              })(e.sig, e.pubkey);
                              (c = b(c, f)), (u += f.length);
                            } else if (4 === n) {
                              var p = t.from("00", "hex");
                              (c = b(c, p)), (u += 1);
                            }
                            var m = v(4294967295);
                            (c = b(c, m)), (u += m.length);
                          });
                        var m = w(n.length);
                        if (
                          ((c = b(c, m)),
                          (u += m.length),
                          n.forEach(function (e) {
                            var r,
                              n,
                              i = ((r = e.value), (n = t.alloc(8)), k(r, n, 0), n);
                            (c = b(c, i)), (u += i.length);
                            var o = (function (e) {
                                var r = E(e);
                                switch (r.versionByte) {
                                  case g:
                                  case y:
                                    return (
                                      (n = r.pkh),
                                      (i = t.alloc(2 + n.length)).writeUInt8(h.ZERO, 0),
                                      i.writeUInt8(n.length, 1),
                                      n.copy(i, 2),
                                      i
                                    );
                                  case 5:
                                  case 196:
                                    return (function (e) {
                                      var r = t.alloc(3 + e.length),
                                        n = 0;
                                      return (
                                        r.writeUInt8(h.HASH160, n),
                                        n++,
                                        r.writeUInt8(e.length, n),
                                        n++,
                                        e.copy(r, n),
                                        (n += e.length),
                                        r.writeUInt8(h.EQUAL, n),
                                        n++,
                                        r
                                      );
                                    })(r.pkh);
                                  case 0:
                                  case 111:
                                    return (function (e) {
                                      var r = t.alloc(5 + e.length),
                                        n = 0;
                                      return (
                                        r.writeUInt8(h.DUP, n),
                                        n++,
                                        r.writeUInt8(h.HASH160, n),
                                        n++,
                                        r.writeUInt8(e.length, n),
                                        n++,
                                        e.copy(r, n),
                                        (n += e.length),
                                        r.writeUInt8(h.EQUALVERIFY, n),
                                        n++,
                                        r.writeUInt8(h.CHECKSIG, n),
                                        n++,
                                        r
                                      );
                                    })(r.pkh);
                                  default:
                                    throw new Error("Unknown version byte: ".concat(r.versionByte, ". Cannot build BTC transaction."));
                                }
                                var n, i;
                              })(e.recipient),
                              s = w(o.length);
                            (c = b(c, s)), (u += s.length), (c = b(c, o)), (u += o.length);
                          }),
                          f)
                        ) {
                          for (var T = [], _ = [], P = 0; P < r.length; P++) T.push(r[P].sig), _.push(r[P].pubkey);
                          var S = (function (e, r) {
                            var n = t.alloc(0),
                              i = t.alloc(1);
                            i.writeUInt8(2, 0);
                            for (var o = 0; o < e.length; o++) {
                              var s = t.concat([e[o], l]),
                                a = w(s.length),
                                c = r[o],
                                u = w(c.length);
                              n = t.concat([n, i, a, s, u, c]);
                            }
                            return n;
                          })(T, _);
                          (c = b(c, S)), (u += S.length);
                        }
                        return t.concat([c, v(o)]).toString("hex");
                      },
                      getBitcoinAddress: function (e, r) {
                        var n = null,
                          s = null;
                        if ((r === g ? ((n = p), (s = 0)) : r === y && ((n = m), (s = 0)), null !== n && null !== s)) {
                          var a = i.bech32.toWords(e);
                          return a.unshift(s), i.bech32.encode(n, a);
                        }
                        return o.default.encode(t.concat([t.from([r]), e]));
                      },
                      getAddressFormat: T
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/bitcoin.js" }
    ],
    [
      36,
      { "../../shared/constants/app": 4749, "./lib/util": 91, "webextension-polyfill": 4733 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.onMessageReceived = r.checkForMultipleVersionsRunning = void 0);
                var n,
                  i = (n = e("webextension-polyfill")) && n.__esModule ? n : { default: n },
                  o = e("../../shared/constants/app"),
                  s = e("./lib/util");
                const a = "isRunning";
                r.onMessageReceived = (e) => {
                  e === a && console.warn("Warning! You have multiple instances of MetaMask running!");
                };
                r.checkForMultipleVersionsRunning = async () => {
                  if ((0, s.getPlatform)() !== o.PLATFORM_CHROME && (0, s.getPlatform)() !== o.PLATFORM_FIREFOX) return;
                  const e = (0, s.getPlatform)() === o.PLATFORM_CHROME ? o.CHROME_BUILD_IDS : o.FIREFOX_BUILD_IDS,
                    t = i.default.runtime.id;
                  for (const r of e)
                    if (r !== t)
                      try {
                        await i.default.runtime.sendMessage(r, a);
                      } catch (e) {}
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/detect-multiple-instances.js" }
    ],
    [
      3600,
      { "@ethersproject/abi": 432, buffer: 2913, "js-sha3": 3761 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.replaceNestedDefs = r.getNestedCalldata = r.parseCanonicalName = r.parseSolidityJSONABI = void 0);
                    var n = e("js-sha3"),
                      i = e("@ethersproject/abi");
                    r.parseSolidityJSONABI = function (e, t) {
                      e = s(e);
                      var r = t
                        .filter(function (e) {
                          return "function" === e.type;
                        })
                        .find(function (t) {
                          return o(d(t).canonicalName) === e;
                        });
                      if (r) return { def: d(r).def };
                      throw new Error("Unable to find matching function in ABI");
                    };
                    r.parseCanonicalName = function (e, t) {
                      if ((e = s(e)) !== o(t)) throw new Error("Name does not match provided sig.");
                      var r = [],
                        n = t.indexOf("(");
                      if (n < 0) throw new Error(v);
                      r.push(t.slice(0, n)), (t = t.slice(n + 1));
                      for (var i = []; t.length > 1; ) {
                        var a = c(t);
                        (i = i.concat(u(a))), (t = t.slice(a.length + 1));
                      }
                      var l = f(i);
                      return r.concat(l);
                    };
                    r.getNestedCalldata = function (e, r) {
                      var n = [],
                        o = e.slice(1),
                        s = a(o);
                      function c(e) {
                        return (e.length - 4) % 32 == 0;
                      }
                      return (
                        new i.AbiCoder().decode(s, "0x" + r.slice(4).toString("hex")).forEach(function (e, r) {
                          if (g(o[r])) {
                            var i = !0;
                            if (b(o[r]))
                              e.forEach(function (e) {
                                c(t.from(e.slice(2), "hex")) || (i = !1);
                              });
                            else if (y(o[r])) {
                              var s = t.from(e.slice(2), "hex");
                              i = c(s);
                            } else i = !1;
                            n.push(i ? e : null);
                          } else n.push(null);
                        }),
                        n
                      );
                    };
                    function o(e) {
                      return "0x".concat((0, n.keccak256)(e).slice(0, 8));
                    }
                    function s(e) {
                      if ("string" != typeof e || (10 !== e.length && 8 !== e.length))
                        throw new Error("`sig` must be a hex string with 4 bytes of data.");
                      return 8 === e.length && (e = "0x".concat(e)), e;
                    }
                    function a(e) {
                      for (
                        var t = [],
                          r = function (r) {
                            var n = e[r],
                              i = w[n[1]];
                            if (
                              (n[2] && (i = "".concat(i).concat(8 * n[2])),
                              n[3].length > 0 &&
                                n[3].forEach(function (e) {
                                  i = 0 === n[3][e] ? "".concat(i, "[]") : "".concat(i, "[").concat(n[3][e], "]");
                                }),
                              n[4])
                            ) {
                              var o = a(n[4]);
                              i = "".concat(i, "(").concat(o.join(","), ")");
                            }
                            t.push(i);
                          },
                          n = 0;
                        n < e.length;
                        n++
                      )
                        r(n);
                      return t;
                    }
                    function c(e) {
                      if (m(e)) return p(e);
                      if (e.indexOf(",") > -1) return e.slice(0, e.indexOf(","));
                      if (e.indexOf(")") > -1) return e.slice(0, e.indexOf(")"));
                      throw new Error(v);
                    }
                    function u(e) {
                      if (!m(e)) return [l(e)];
                      var t = { szBytes: 0, typeIdx: w.indexOf("tuple"), arraySzs: [] },
                        r = p(e, !1),
                        n = e.slice(r.length);
                      (t.arraySzs = h(n)), (r = r.slice(1));
                      for (var i = []; r.length > 0; ) {
                        var o = c(r);
                        (r = r.slice(o.length + 1)), (i = i.concat(u(o)));
                      }
                      if (!i.length) throw new Error(v);
                      return [t, i];
                    }
                    function l(e) {
                      var t = { szBytes: 0, typeIdx: 0, arraySzs: [] },
                        r = !1;
                      if (
                        (w.forEach(function (n, i) {
                          if (e.indexOf(n) > -1 && !r) {
                            (t.typeIdx = i), (t.arraySzs = h(e));
                            var o = t.arraySzs.length > 0 ? e.indexOf("[") : e.length,
                              s = e.slice(n.length, o);
                            if (parseInt(s) && ((t.szBytes = parseInt(s) / 8), t.szBytes > 32)) throw new Error(v);
                            r = !0;
                          }
                        }),
                        !r)
                      )
                        throw new Error(v);
                      return t;
                    }
                    function d(e, t, r, n) {
                      if ((void 0 === t && (t = ""), void 0 === r && (r = []), void 0 === n && (n = !1), !n)) {
                        var i = e.name || "";
                        r.push(i), (t += i);
                      }
                      return (
                        e.inputs &&
                          ((t += "("),
                          e.inputs.forEach(function (e) {
                            var n = (function (e) {
                              if (!e.type) throw new Error("No type in input");
                              var t = [e.name],
                                r = (function (e) {
                                  var t,
                                    r = { szBytes: 0, typeIdx: 0, arraySzs: [] };
                                  w.forEach(function (n, i) {
                                    e.indexOf(n) > -1 && !t && ((t = n), (r.typeIdx = i));
                                  }),
                                    (r.arraySzs = h(e));
                                  var n = r.arraySzs.length > 0 ? e.indexOf("[") : e.length;
                                  if (["uint", "int", "bytes"].indexOf(t) > -1) {
                                    var i = parseInt(e.slice(t.length, n)) || 0;
                                    if (i > 256) throw new Error("Invalid param size");
                                    r.szBytes = i / 8;
                                  } else r.szBytes = 0;
                                  return r;
                                })(e.type),
                                n = r.typeIdx,
                                i = r.szBytes,
                                o = r.arraySzs;
                              return t.push(n), t.push(i), t.push(o), t;
                            })(e);
                            if (e.type.indexOf("tuple") > -1 && e.components) {
                              var i = d({ inputs: e.components }, t, [], !0);
                              (t = i.canonicalName), (t += "".concat(e.type.slice(5), ",")), n.push(i.def);
                            } else (t += e.type), (t += ",");
                            r.push(n);
                          }),
                          "," === t[t.length - 1] && (t = t.slice(0, t.length - 1)),
                          (t += ")")),
                        { def: r, canonicalName: t }
                      );
                    }
                    function f(e, t) {
                      void 0 === t && (t = "");
                      var r = [],
                        n = 0;
                      return (
                        e.forEach(function (e, i) {
                          Array.isArray(e)
                            ? r[r.length - 1].push(f(e, "".concat(i, "-")))
                            : r.push(["#".concat(t).concat(i + 1 - n), e.typeIdx, e.szBytes, e.arraySzs]),
                            e.typeIdx === w.indexOf("tuple") && (n += 1);
                        }),
                        r
                      );
                    }
                    function h(e) {
                      if ("string" != typeof e) throw new Error("Invalid type");
                      for (var t = [], r = e; r.length > 0; ) {
                        var n = r.indexOf("[");
                        if (n < 0) return t;
                        var i = r.slice(n),
                          o = i.indexOf("]");
                        if (o < 0) throw new Error("Bad param type");
                        var s = i.slice(1, o);
                        0 === s.length ? t.push(0) : t.push(parseInt(s)), (r = i.slice(o + 1));
                      }
                      return t;
                    }
                    function p(e, t) {
                      void 0 === t && (t = !0);
                      for (var r = 0, n = !1, i = 0; i < e.length; i++) {
                        "(" === e[i] ? ((r += 1), (n = !0)) : ")" === e[i] && (r -= 1);
                        var o = "," === e[i + 1] || ")" === e[i + 1] || i === e.length - 1;
                        if ((t || "[" !== e[i + 1] || (o = !0), !r && n && o)) return e.slice(0, i + 1);
                      }
                      throw new Error(v);
                    }
                    function m(e) {
                      return "(" === e[0];
                    }
                    function g(e) {
                      return "bytes" === w[e[1]];
                    }
                    function y(e) {
                      return g(e) && 0 === e[3].length;
                    }
                    function b(e) {
                      return g(e) && 1 === e[3].length && 0 === e[3][0];
                    }
                    r.replaceNestedDefs = function (e, t) {
                      for (var r = 0; r < t.length; r++) {
                        var n = b(e[1 + r]),
                          i = y(e[1 + r]);
                        if (null !== t[r] && (n || i)) {
                          e[1 + r][1] = w.indexOf("nestedDef");
                          var o = n ? t[r] : [t[r]];
                          e[1 + r] = e[1 + r].concat([o]);
                        }
                      }
                      return e;
                    };
                    var v = "Could not parse canonical function name.",
                      w = [null, "address", "bool", "uint", "int", "bytes", "string", "tuple", "nestedDef"];
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/calldata/evm.js" }
    ],
    [
      3601,
      { "./evm": 3600 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.CALLDATA = void 0);
                var n = e("./evm");
                r.CALLDATA = {
                  EVM: {
                    type: 1,
                    parsers: { parseSolidityJSONABI: n.parseSolidityJSONABI, parseCanonicalName: n.parseCanonicalName },
                    processors: { getNestedCalldata: n.getNestedCalldata, replaceNestedDefs: n.replaceNestedDefs }
                  }
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/calldata/index.js" }
    ],
    [
      3602,
      {
        "./constants": 3603,
        "./functions/index": 3611,
        "./shared/functions": 3621,
        "./shared/utilities": 3623,
        "./shared/validators": 3624,
        "./util": 3625,
        buffer: 2913
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.Client = void 0);
                    var o = e("./constants"),
                      s = e("./functions/index"),
                      a = e("./shared/functions"),
                      c = e("./shared/utilities"),
                      u = e("./shared/validators"),
                      l = e("./util"),
                      d = (function () {
                        function e(e) {
                          var t = e.baseUrl,
                            r = e.name,
                            n = e.privKey,
                            i = e.stateData,
                            s = e.timeout,
                            c = e.retryCount,
                            u = e.skipRetryOnWrongWallet,
                            d = e.deviceId;
                          (this.name = r || "Unknown"),
                            (this.baseUrl = t || o.BASE_URL),
                            (this.deviceId = d),
                            (this.isPaired = !1),
                            (this.activeWallets = o.DEFAULT_ACTIVE_WALLETS),
                            (this.timeout = s || 6e4),
                            (this.retryCount = c || 3),
                            (this.skipRetryOnWrongWallet = u || !1),
                            (this.privKey = n || (0, l.randomBytes)(32)),
                            (this.key = (0, l.getP256KeyPair)(this.privKey)),
                            (this.retryWrapper = (0, a.buildRetryWrapper)(this, this.retryCount)),
                            i && this.unpackAndApplyStateData(i);
                        }
                        return (
                          Object.defineProperty(e.prototype, "publicKey", {
                            get: function () {
                              return (0, c.getPubKeyBytes)(this.key);
                            },
                            enumerable: !1,
                            configurable: !0
                          }),
                          (e.prototype.getAppName = function () {
                            return this.name;
                          }),
                          (e.prototype.getDeviceId = function () {
                            return this.deviceId;
                          }),
                          Object.defineProperty(e.prototype, "sharedSecret", {
                            get: function () {
                              return t.from(this.key.derive(this.ephemeralPub.getPublic()).toArray("be", 32));
                            },
                            enumerable: !1,
                            configurable: !0
                          }),
                          Object.defineProperty(e.prototype, "ephemeralPub", {
                            get: function () {
                              return this._ephemeralPub;
                            },
                            set: function (e) {
                              (0, u.validateEphemeralPub)(e), (this._ephemeralPub = e);
                            },
                            enumerable: !1,
                            configurable: !0
                          }),
                          (e.prototype.connect = function (e) {
                            return n(this, void 0, void 0, function () {
                              return i(this, function (t) {
                                return [2, this.retryWrapper(s.connect, { id: e })];
                              });
                            });
                          }),
                          (e.prototype.pair = function (e) {
                            return n(this, void 0, void 0, function () {
                              return i(this, function (t) {
                                return [2, this.retryWrapper(s.pair, { pairingSecret: e })];
                              });
                            });
                          }),
                          (e.prototype.getAddresses = function (e) {
                            var t = e.startPath,
                              r = e.n,
                              o = void 0 === r ? 1 : r,
                              a = e.flag,
                              c = void 0 === a ? 0 : a;
                            return n(this, void 0, void 0, function () {
                              return i(this, function (e) {
                                return [2, this.retryWrapper(s.getAddresses, { startPath: t, n: o, flag: c })];
                              });
                            });
                          }),
                          (e.prototype.sign = function (e) {
                            var t = e.data,
                              r = e.currency,
                              o = e.cachedData,
                              a = e.nextCode;
                            return n(this, void 0, void 0, function () {
                              return i(this, function (e) {
                                return [2, this.retryWrapper(s.sign, { data: t, currency: r, cachedData: o, nextCode: a })];
                              });
                            });
                          }),
                          (e.prototype.fetchActiveWallet = function () {
                            return n(this, void 0, void 0, function () {
                              return i(this, function (e) {
                                return [2, this.retryWrapper(s.fetchActiveWallet)];
                              });
                            });
                          }),
                          (e.prototype.addKvRecords = function (e) {
                            var t = e.type,
                              r = void 0 === t ? 0 : t,
                              o = e.records,
                              a = e.caseSensitive,
                              c = void 0 !== a && a;
                            return n(this, void 0, void 0, function () {
                              return i(this, function (e) {
                                return [2, this.retryWrapper(s.addKvRecords, { type: r, records: o, caseSensitive: c })];
                              });
                            });
                          }),
                          (e.prototype.getKvRecords = function (e) {
                            var t = e.type,
                              r = void 0 === t ? 0 : t,
                              o = e.n,
                              a = void 0 === o ? 1 : o,
                              c = e.start,
                              u = void 0 === c ? 0 : c;
                            return n(this, void 0, void 0, function () {
                              return i(this, function (e) {
                                return [2, this.retryWrapper(s.getKvRecords, { type: r, n: a, start: u })];
                              });
                            });
                          }),
                          (e.prototype.removeKvRecords = function (e) {
                            var t = e.type,
                              r = void 0 === t ? 0 : t,
                              o = e.ids,
                              a = void 0 === o ? [] : o;
                            return n(this, void 0, void 0, function () {
                              return i(this, function (e) {
                                return [2, this.retryWrapper(s.removeKvRecords, { type: r, ids: a })];
                              });
                            });
                          }),
                          (e.prototype.fetchEncryptedData = function (e) {
                            return n(this, void 0, void 0, function () {
                              return i(this, function (t) {
                                return [2, this.retryWrapper(s.fetchEncData, e)];
                              });
                            });
                          }),
                          (e.prototype.getActiveWallet = function () {
                            return this.activeWallets.external.uid && !o.EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)
                              ? this.activeWallets.external
                              : this.activeWallets.internal.uid && !o.EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)
                              ? this.activeWallets.internal
                              : undefined;
                          }),
                          (e.prototype.hasActiveWallet = function () {
                            return !!this.getActiveWallet();
                          }),
                          (e.prototype.resetActiveWallets = function () {
                            this.activeWallets = o.DEFAULT_ACTIVE_WALLETS;
                          }),
                          (e.prototype.getStateData = function () {
                            return this.packStateData();
                          }),
                          (e.prototype.getFwConstants = function () {
                            var e;
                            return (0, o.getFwVersionConst)(null !== (e = this.fwVersion) && void 0 !== e ? e : t.alloc(0));
                          }),
                          (e.prototype.getFwVersion = function () {
                            return this.fwVersion && this.fwVersion.length >= 3
                              ? { fix: this.fwVersion[0], minor: this.fwVersion[1], major: this.fwVersion[2] }
                              : { fix: 0, minor: 0, major: 0 };
                          }),
                          (e.prototype.mutate = function (e) {
                            var t = e.deviceId,
                              r = e.ephemeralPub,
                              n = e.url,
                              i = e.isPaired,
                              o = e.fwVersion,
                              s = e.activeWallets;
                            t !== undefined && (this.deviceId = t),
                              r !== undefined && (this.ephemeralPub = r),
                              n !== undefined && (this.url = n),
                              i !== undefined && (this.isPaired = i),
                              o !== undefined && (this.fwVersion = o),
                              s !== undefined && (this.activeWallets = s);
                          }),
                          (e.prototype.packStateData = function () {
                            var e, t, r, n, i, o, s;
                            try {
                              var a = {
                                activeWallets: {
                                  internal: {
                                    uid: null === (e = this.activeWallets.internal.uid) || void 0 === e ? void 0 : e.toString("hex"),
                                    name: null === (t = this.activeWallets.internal.name) || void 0 === t ? void 0 : t.toString(),
                                    capabilities: this.activeWallets.internal.capabilities
                                  },
                                  external: {
                                    uid: null === (r = this.activeWallets.external.uid) || void 0 === r ? void 0 : r.toString("hex"),
                                    name: null === (n = this.activeWallets.external.name) || void 0 === n ? void 0 : n.toString(),
                                    capabilities: this.activeWallets.external.capabilities
                                  }
                                },
                                ephemeralPub:
                                  null === (o = null === (i = this.ephemeralPub) || void 0 === i ? void 0 : i.getPublic()) || void 0 === o
                                    ? void 0
                                    : o.encode("hex"),
                                fwVersion: null === (s = this.fwVersion) || void 0 === s ? void 0 : s.toString("hex"),
                                deviceId: this.deviceId,
                                name: this.name,
                                baseUrl: this.baseUrl,
                                privKey: this.privKey.toString("hex"),
                                retryCount: this.retryCount,
                                timeout: this.timeout
                              };
                              return JSON.stringify(a);
                            } catch (e) {
                              return console.warn("Could not pack state data."), null;
                            }
                          }),
                          (e.prototype.unpackAndApplyStateData = function (e) {
                            try {
                              var r = JSON.parse(e),
                                n = {
                                  uid: t.from(r.activeWallets.internal.uid, "hex"),
                                  name: r.activeWallets.internal.name ? t.from(r.activeWallets.internal.name) : null,
                                  capabilities: r.activeWallets.internal.capabilities,
                                  external: !1
                                },
                                i = {
                                  uid: t.from(r.activeWallets.external.uid, "hex"),
                                  name: r.activeWallets.external.name ? t.from(r.activeWallets.external.name) : null,
                                  capabilities: r.activeWallets.external.capabilities,
                                  external: !0
                                },
                                o = t.from(r.ephemeralPub, "hex"),
                                s = t.from(r.fwVersion, "hex"),
                                c = t.from(r.privKey, "hex");
                              (this.activeWallets.internal = n),
                                (this.activeWallets.external = i),
                                (this.ephemeralPub = (0, l.getP256KeyPairFromPub)(o)),
                                (this.fwVersion = s),
                                (this.deviceId = r.deviceId),
                                (this.name = r.name),
                                (this.baseUrl = r.baseUrl),
                                (this.url = "".concat(this.baseUrl, "/").concat(this.deviceId)),
                                (this.privKey = c),
                                (this.key = (0, l.getP256KeyPair)(this.privKey)),
                                (this.retryCount = r.retryCount),
                                (this.timeout = r.timeout),
                                (this.retryWrapper = (0, a.buildRetryWrapper)(this, this.retryCount));
                            } catch (e) {
                              console.warn("Could not apply state data.");
                            }
                          }),
                          e
                        );
                      })();
                    r.Client = d;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/client.js" }
    ],
    [
      3603,
      { "./protocol/latticeConstants": 3618, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                      (this && this.__assign) ||
                      function () {
                        return (
                          (n =
                            Object.assign ||
                            function (e) {
                              for (var t, r = 1, n = arguments.length; r < n; r++)
                                for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                              return e;
                            }),
                          n.apply(this, arguments)
                        );
                      };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.PUBLIC =
                        r.ETH_ABI_LATTICE_FW_TYPE_MAP =
                        r.MAX_CHAIN_ID_BYTES =
                        r.HANDLE_LARGER_CHAIN_ID =
                        r.HARDENED_OFFSET =
                        r.VERSION_BYTE =
                        r.REQUEST_TYPE_BYTE =
                        r.signingSchema =
                        r.ethMsgProtocol =
                        r.addressSizes =
                        r.EXTERNAL_NETWORKS_BY_CHAIN_ID_URL =
                        r.NETWORKS_BY_CHAIN_ID =
                        r.MAX_ADDR =
                        r.CURRENCIES =
                        r.BASE_URL =
                        r.BIP_CONSTANTS =
                        r.getFwVersionConst =
                        r.ASCII_REGEX =
                        r.LEDGER_LEGACY_DERIVATION =
                        r.LEDGER_LIVE_DERIVATION =
                        r.SOLANA_DERIVATION =
                        r.BTC_WRAPPED_SEGWIT_DERIVATION =
                        r.BTC_SEGWIT_DERIVATION =
                        r.BTC_LEGACY_DERIVATION =
                        r.DEFAULT_ETH_DERIVATION =
                        r.DEFAULT_ACTIVE_WALLETS =
                        r.EMPTY_WALLET_UID =
                        r.EXTERNAL =
                          void 0);
                    var i = e("./protocol/latticeConstants");
                    (r.EXTERNAL = {
                      GET_ADDR_FLAGS: {
                        SECP256K1_PUB: i.LatticeGetAddressesFlag.secp256k1Pubkey,
                        ED25519_PUB: i.LatticeGetAddressesFlag.ed25519Pubkey,
                        BLS12_381_G1_PUB: i.LatticeGetAddressesFlag.bls12_381Pubkey
                      },
                      SIGNING: {
                        HASHES: { NONE: i.LatticeSignHash.none, KECCAK256: i.LatticeSignHash.keccak256, SHA256: i.LatticeSignHash.sha256 },
                        CURVES: {
                          SECP256K1: i.LatticeSignCurve.secp256k1,
                          ED25519: i.LatticeSignCurve.ed25519,
                          BLS12_381_G2: i.LatticeSignCurve.bls12_381
                        },
                        ENCODINGS: {
                          NONE: i.LatticeSignEncoding.none,
                          SOLANA: i.LatticeSignEncoding.solana,
                          EVM: i.LatticeSignEncoding.evm,
                          ETH_DEPOSIT: i.LatticeSignEncoding.eth_deposit
                        },
                        BLS_DST: { BLS_DST_NUL: i.LatticeSignBlsDst.NUL, BLS_DST_POP: i.LatticeSignBlsDst.POP }
                      },
                      ENC_DATA: { SCHEMAS: { BLS_KEYSTORE_EIP2335_PBKDF_V4: i.LatticeEncDataSchema.eip2335 } },
                      ETH_CONSENSUS_SPEC: {
                        NETWORKS: { MAINNET_GENESIS: { networkName: "mainnet", forkVersion: t.alloc(4), validatorsRoot: t.alloc(32) } },
                        DOMAINS: { DEPOSIT: t.from("03000000", "hex"), VOLUNTARY_EXIT: t.from("04000000", "hex") }
                      }
                    }),
                      (r.PUBLIC = r.EXTERNAL);
                    r.addressSizes = { BTC: 20, ETH: 20 };
                    r.CURRENCIES = { ETH: "ETH", BTC: "BTC", ETH_MSG: "ETH_MSG" };
                    r.signingSchema = {
                      BTC_TRANSFER: 0,
                      ETH_TRANSFER: 1,
                      ERC20_TRANSFER: 2,
                      ETH_MSG: 3,
                      EXTRA_DATA: 4,
                      GENERAL_SIGNING: 5
                    };
                    var o = 2147483648;
                    r.HARDENED_OFFSET = o;
                    var s = {
                      PURPOSES: { ETH: 2147483692, BTC_LEGACY: 2147483692, BTC_WRAPPED_SEGWIT: 2147483697, BTC_SEGWIT: 2147483732 },
                      COINS: { ETH: 2147483708, BTC: o, BTC_TESTNET: 2147483649 }
                    };
                    r.BIP_CONSTANTS = s;
                    r.REQUEST_TYPE_BYTE = 2;
                    r.VERSION_BYTE = 1;
                    r.HANDLE_LARGER_CHAIN_ID = 255;
                    r.MAX_CHAIN_ID_BYTES = 8;
                    r.BASE_URL = "https://signing.gridpl.us";
                    var a = {
                        address: 1,
                        bool: 2,
                        uint8: 3,
                        uint16: 4,
                        uint24: 5,
                        uint32: 6,
                        uint40: 7,
                        uint48: 8,
                        uint56: 9,
                        uint64: 10,
                        uint72: 11,
                        uint80: 12,
                        uint88: 13,
                        uint96: 14,
                        uint104: 15,
                        uint112: 16,
                        uint120: 17,
                        uint128: 18,
                        uint136: 19,
                        uint144: 20,
                        uint152: 21,
                        uint160: 22,
                        uint168: 23,
                        uint176: 24,
                        uint184: 25,
                        uint192: 26,
                        uint200: 27,
                        uint208: 28,
                        uint216: 29,
                        uint224: 30,
                        uint232: 31,
                        uint240: 32,
                        uint248: 33,
                        uint256: 34,
                        int8: 35,
                        int16: 36,
                        int24: 37,
                        int32: 38,
                        int40: 39,
                        int48: 40,
                        int56: 41,
                        int64: 42,
                        int72: 43,
                        int80: 44,
                        int88: 45,
                        int96: 46,
                        int104: 47,
                        int112: 48,
                        int120: 49,
                        int128: 50,
                        int136: 51,
                        int144: 52,
                        int152: 53,
                        int160: 54,
                        int168: 55,
                        int176: 56,
                        int184: 57,
                        int192: 58,
                        int200: 59,
                        int208: 60,
                        int216: 61,
                        int224: 62,
                        int232: 63,
                        int240: 64,
                        int248: 65,
                        int256: 66,
                        uint: 67,
                        bytes1: 69,
                        bytes2: 70,
                        bytes3: 71,
                        bytes4: 72,
                        bytes5: 73,
                        bytes6: 74,
                        bytes7: 75,
                        bytes8: 76,
                        bytes9: 77,
                        bytes10: 78,
                        bytes11: 79,
                        bytes12: 80,
                        bytes13: 81,
                        bytes14: 82,
                        bytes15: 83,
                        bytes16: 84,
                        bytes17: 85,
                        bytes18: 86,
                        bytes19: 87,
                        bytes20: 88,
                        bytes21: 89,
                        bytes22: 90,
                        bytes23: 91,
                        bytes24: 92,
                        bytes25: 93,
                        bytes26: 94,
                        bytes27: 95,
                        bytes28: 96,
                        bytes29: 97,
                        bytes30: 98,
                        bytes31: 99,
                        bytes32: 100,
                        bytes: 101,
                        string: 102
                      },
                      c = n(n({}, a), {
                        tuple1: 103,
                        tuple2: 104,
                        tuple3: 105,
                        tuple4: 106,
                        tuple5: 107,
                        tuple6: 108,
                        tuple7: 109,
                        tuple8: 110,
                        tuple9: 111,
                        tuple10: 112,
                        tuple11: 113,
                        tuple12: 114,
                        tuple13: 115,
                        tuple14: 116,
                        tuple15: 117,
                        tuple16: 118,
                        tuple17: 119
                      });
                    r.ETH_ABI_LATTICE_FW_TYPE_MAP = c;
                    var u = {
                      SIGN_PERSONAL: { str: "signPersonal", enumIdx: 0 },
                      TYPED_DATA: { str: "typedData", enumIdx: 1, rawDataMaxLen: 1629, typeCodes: a }
                    };
                    (r.ethMsgProtocol = u),
                      (r.getFwVersionConst = function (e) {
                        var t = { extraDataFrameSz: 0, extraDataMaxFrames: 0, genericSigning: {} };
                        function n(e, t) {
                          return (
                            e[2] > t[0] ||
                            (e[2] === t[0] && e[1] > t[1]) ||
                            (e[2] === t[0] && e[1] === t[1] && e[0] > t[2]) ||
                            (e[2] === t[0] && e[1] === t[1] && e[0] === t[2])
                          );
                        }
                        var i = 0 === e.length;
                        return (
                          (!i && n(e, [0, 10, 4])) || (!i && n(e, [0, 10, 0]))
                            ? ((t.reqMaxDataSz = 1678), (t.ethMaxGasPrice = 2e13), (t.addrFlagsAllowed = !0))
                            : ((t.reqMaxDataSz = 1152), (t.ethMaxGasPrice = 5e11), (t.addrFlagsAllowed = !1)),
                          (t.ethMaxDataSz = t.reqMaxDataSz - 128),
                          (t.ethMaxMsgSz = t.ethMaxDataSz),
                          (t.eip712MaxTypeParams = 18),
                          !i && n(e, [0, 10, 4]) && ((t.extraDataFrameSz = 1500), (t.extraDataMaxFrames = 1)),
                          !i && n(e, [0, 10, 5]) && ((t.varAddrPathSzAllowed = !0), (t.eip712Supported = !0)),
                          !i && n(e, [0, 10, 8]) && (t.prehashAllowed = !0),
                          !i && n(e, [0, 10, 10]) && (t.ethMsgPreHashAllowed = !0),
                          !i &&
                            n(e, [0, 11, 0]) &&
                            ((t.allowedEthTxTypes = [1, 2]), (t.ethMaxDataSz -= 10), (t.ethMaxMsgSz = t.ethMaxDataSz)),
                          !i && n(e, [0, 11, 2]) && (t.personalSignHeaderSz = 72),
                          !i &&
                            n(e, [0, 12, 0]) &&
                            ((t.kvActionsAllowed = !0),
                            (t.kvKeyMaxStrSz = 63),
                            (t.kvValMaxStrSz = 63),
                            (t.kvActionMaxNum = 10),
                            (t.kvRemoveMaxNum = 100)),
                          !i &&
                            n(e, [0, 13, 0]) &&
                            ((t.allowBtcLegacyAndSegwitAddrs = !0), (t.contractDeployKey = "0x08002e0fec8e6acf00835f43c9764f7364fa3f42")),
                          !i &&
                            n(e, [0, 14, 0]) &&
                            ((t.abiCategorySz = 32),
                            (t.abiMaxRmv = 200),
                            (t.genericSigning.baseReqSz = 1552),
                            (t.genericSigning.baseDataSz = 1519),
                            (t.genericSigning.hashTypes = r.EXTERNAL.SIGNING.HASHES),
                            (t.genericSigning.curveTypes = r.EXTERNAL.SIGNING.CURVES),
                            (t.genericSigning.encodingTypes = {
                              NONE: r.EXTERNAL.SIGNING.ENCODINGS.NONE,
                              SOLANA: r.EXTERNAL.SIGNING.ENCODINGS.SOLANA
                            }),
                            (t.getAddressFlags = [r.EXTERNAL.GET_ADDR_FLAGS.ED25519_PUB, r.EXTERNAL.GET_ADDR_FLAGS.SECP256K1_PUB]),
                            (t.eip712MaxTypeParams = 36)),
                          !i &&
                            n(e, [0, 15, 0]) &&
                            ((t.genericSigning.encodingTypes.EVM = r.EXTERNAL.SIGNING.ENCODINGS.EVM),
                            (t.ethMaxDataSz = 1519),
                            (t.maxDecoderBufSz = 1600),
                            (t.genericSigning.calldataDecoding = { reserved: 2895728, maxSz: 1024 })),
                          !i &&
                            n(e, [0, 17, 0]) &&
                            (t.getAddressFlags.push(r.EXTERNAL.GET_ADDR_FLAGS.BLS12_381_G1_PUB),
                            (t.genericSigning.encodingTypes.ETH_DEPOSIT = r.EXTERNAL.SIGNING.ENCODINGS.ETH_DEPOSIT)),
                          t
                        );
                      });
                    r.ASCII_REGEX = /^[\x00-\x7F]+$/;
                    r.EXTERNAL_NETWORKS_BY_CHAIN_ID_URL = "https://gridplus.github.io/chains/chains.json";
                    r.MAX_ADDR = 10;
                    (r.NETWORKS_BY_CHAIN_ID = {
                      1: { name: "ethereum", baseUrl: "https://api.etherscan.io", apiRoute: "api?module=contract&action=getabi" },
                      137: { name: "polygon", baseUrl: "https://api.polygonscan.com", apiRoute: "api?module=contract&action=getabi" },
                      56: { name: "binance", baseUrl: "https://api.bscscan.com", apiRoute: "api?module=contract&action=getabi" },
                      42220: { name: "celo", baseUrl: "https://api.celoscan.io", apiRoute: "api?module=contract&action=getabi" },
                      43114: { name: "avalanche", baseUrl: "https://api.snowtrace.io", apiRoute: "api?module=contract&action=getabi" }
                    }),
                      (r.EMPTY_WALLET_UID = t.alloc(32)),
                      (r.DEFAULT_ACTIVE_WALLETS = {
                        internal: { uid: r.EMPTY_WALLET_UID, external: !1, name: t.alloc(0), capabilities: 0 },
                        external: { uid: r.EMPTY_WALLET_UID, external: !0, name: t.alloc(0), capabilities: 0 }
                      }),
                      (r.DEFAULT_ETH_DERIVATION = [2147483692, 2147483708, o, 0, 0]),
                      (r.BTC_LEGACY_DERIVATION = [2147483692, 2147483648, o, 0, 0]),
                      (r.BTC_SEGWIT_DERIVATION = [2147483732, o, o, 0, 0]),
                      (r.BTC_WRAPPED_SEGWIT_DERIVATION = [2147483697, o, o, 0, 0]),
                      (r.SOLANA_DERIVATION = [2147483692, 2147484149, o]),
                      (r.LEDGER_LIVE_DERIVATION = [2147483697, 2147483708, o, 0, 0]),
                      (r.LEDGER_LEGACY_DERIVATION = [2147483697, 2147483708, o, 0]);
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/constants.js" }
    ],
    [
      3604,
      {
        "./constants": 3603,
        "./protocol": 3617,
        "./util": 3625,
        "@ethereumjs/common": 3678,
        "@ethereumjs/tx": 3687,
        "bignumber.js": 3750,
        borc: 2858,
        buffer: 2913,
        "eth-eip712-util-browser": 3178,
        "js-sha3": 3761,
        rlp: 3762,
        secp256k1: 3763
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                      (this && this.__importDefault) ||
                      function (e) {
                        return e && e.__esModule ? e : { default: e };
                      };
                    Object.defineProperty(r, "__esModule", { value: !0 });
                    var i = e("@ethereumjs/common"),
                      o = e("@ethereumjs/tx"),
                      s = n(e("bignumber.js")),
                      a = n(e("borc")),
                      c = e("eth-eip712-util-browser"),
                      u = e("js-sha3"),
                      l = e("rlp"),
                      d = n(e("secp256k1")),
                      f = e("./constants"),
                      h = e("./protocol"),
                      p = e("./util");
                    function m(e) {
                      for (var t = e[0]; e.length > 0 && "0" === t.toString(); ) t = (e = e.slice(1))[0];
                      return e;
                    }
                    function g(e, r, n, i) {
                      void 0 === i && (i = {});
                      try {
                        var o = new Uint8Array(e),
                          s = 0,
                          a = (0, p.fixLen)(r.r, 32);
                        r.r = a;
                        var c = (0, p.fixLen)(r.s, 32);
                        r.s = c;
                        var u = new Uint8Array(t.concat([a, c])),
                          l = d.default.ecdsaRecover(u, s, o, !1).slice(1);
                        if (y(l) === n.toString("hex")) return (r.v = b(s, i)), r;
                        if (((s = 1), y((l = d.default.ecdsaRecover(u, s, o, !1).slice(1))) === n.toString("hex")))
                          return (r.v = b(s, i)), r;
                        throw new Error("Invalid Ethereum signature returned.");
                      } catch (e) {
                        throw new Error(e);
                      }
                    }
                    function y(e) {
                      return (0, u.keccak256)(e).slice(-40);
                    }
                    function b(e, r) {
                      void 0 === r && (r = {});
                      var n = r.chainId,
                        i = r.useEIP155,
                        o = r.type;
                      if (1 === o || 2 === o) return (0, p.ensureHexBuffer)(e, !0);
                      if (!1 === i || null === n) return t.from(new s.default(e).plus(27).toString(16), "hex");
                      var a = w(n),
                        c = new s.default(a.toString("hex"), 16);
                      return (0, p.ensureHexBuffer)("0x".concat(c.times(2).plus(35).plus(e).toString(16)));
                    }
                    var v = { mainnet: 1, roptsten: 3, rinkeby: 4, kovan: 42, goerli: 5 };
                    function w(e) {
                      var r, n;
                      if (
                        (r = !0 === k(e) ? (0, p.ensureHexBuffer)(e) : (0, p.ensureHexBuffer)("0x".concat(new s.default(e).toString(16))))
                          .length > 8
                      )
                        throw new Error("ChainID provided is too large.");
                      return r.length <= 2 || 4 === r.length || 8 === r.length
                        ? r
                        : (3 === r.length
                            ? (n = t.alloc(4)).writeUInt32BE(e)
                            : r.length <= 8 && ((n = t.alloc(8)), r.copy(n, 8 - r.length)),
                          n);
                    }
                    function k(e) {
                      if ("string" != typeof e) return !1;
                      if ("0x" !== e.slice(0, 2)) return !1;
                      try {
                        return !1 === new s.default(e, 16).isNaN();
                      } catch (e) {
                        return !1;
                      }
                    }
                    function E(e, r) {
                      var n = r.fwConstants,
                        i = n.ethMaxMsgSz,
                        o = n.extraDataFrameSz,
                        s = n.extraDataMaxFrames,
                        a = i,
                        c = o > 0 && s > 0,
                        u = [];
                      if (e.length > a) {
                        var l = a + s * o;
                        if (!c) throw new Error("Your message is ".concat(e.length, " bytes, but can only be a maximum of ").concat(a));
                        if (c && e.length > l)
                          throw new Error("Your message is ".concat(e.length, " bytes, but can only be a maximum of ").concat(l));
                        (0, p.splitFrames)(e.slice(a), o).forEach(function (e) {
                          var r = t.alloc(4);
                          r.writeUInt32LE(e.length, 0), u.push(t.concat([r, e]));
                        });
                      }
                      return u;
                    }
                    function T(e, t, r, n) {
                      return (
                        void 0 === n && (n = !1),
                        r[t].forEach(function (t) {
                          var i = t.type.indexOf("[") > -1,
                            o = i ? t.type.slice(0, t.type.indexOf("[")) : t.type,
                            s = Object.keys(r).indexOf(o) > -1;
                          if (s && Array.isArray(e)) for (var a = 0; a < e.length; a++) e[a][t.name] = T(e[a][t.name], o, r, n);
                          else if (s) e[t.name] = T(e[t.name], o, r, n);
                          else if (Array.isArray(e))
                            for (a = 0; a < e.length; a++)
                              if (i) for (var c = 0; c < e[a][t.name].length; c++) e[a][t.name][c] = x(e[a][t.name][c], o, n);
                              else e[a][t.name] = x(e[a][t.name], o, n);
                          else if (i) for (a = 0; a < e[t.name].length; a++) e[t.name][a] = x(e[t.name][a], o, n);
                          else e[t.name] = x(e[t.name], o, n);
                        }),
                        e
                      );
                    }
                    function x(e, r, n) {
                      if ((void 0 === n && (n = !1), "bytes" === r))
                        (e = (0, p.ensureHexBuffer)(e)), n && (e = "0x".concat(e.toString("hex")));
                      else if ("bytes" === r.slice(0, 5)) {
                        var i = parseInt(r.slice(5));
                        if ((e = (0, p.ensureHexBuffer)(e)).length !== i)
                          throw new Error("Expected ".concat(r, " type, but got ").concat(e.length, " bytes"));
                        n && (e = "0x".concat(e.toString("hex")));
                      } else if ("address" === r) {
                        if ((0 === (e = (0, p.ensureHexBuffer)(e)).length && (e = t.alloc(20)), 20 !== e.length))
                          throw new Error("Address type must be 20 bytes, but got ".concat(e.length, " bytes"));
                        n && (e = "0x".concat(e.toString("hex")));
                      } else if (f.ethMsgProtocol.TYPED_DATA.typeCodes[r] && (r.indexOf("uint") > -1 || r.indexOf("int") > -1)) {
                        var o = (0, p.ensureHexBuffer)(e);
                        0 === o.length && (o = t.from("00", "hex")),
                          (e = n ? "0x".concat(o.toString("hex")) : new a.default.Encoder().semanticTypes[1][0](o.toString("hex"), 16));
                      } else "bool" === r && (e = !0 === e ? 1 : 0);
                      return e;
                    }
                    function _(e) {
                      return t.from("Ethereum Signed Message:\n".concat(e.toString()), "utf-8");
                    }
                    function P(e, r) {
                      return r ? t.concat([t.from([r]), t.from((0, l.encode)(e))]) : t.from((0, l.encode)(e));
                    }
                    r.default = {
                      buildEthereumMsgRequest: function (e) {
                        if (!e.payload || !e.protocol || !e.signerPath)
                          throw new Error("You must provide `payload`, `signerPath`, and `protocol` arguments in the messsage request");
                        if (e.signerPath.length > 5 || e.signerPath.length < 2)
                          throw new Error("Please provide a signer path with 2-5 indices");
                        var r = { schema: h.LatticeSignSchema.ethereumMsg, payload: null, input: e, msg: null };
                        switch (e.protocol) {
                          case "signPersonal":
                            return (function (e, r) {
                              var n = r.fwConstants.ethMaxMsgSz,
                                i = r.fwConstants.varAddrPathSzAllowed,
                                o = 24 + n + 4,
                                s = 0;
                              (e.payload = t.alloc(o)), e.payload.writeUInt8(f.ethMsgProtocol.SIGN_PERSONAL, 0), (s += 1);
                              var a = (0, p.buildSignerPathBuf)(r.signerPath, i);
                              a.copy(e.payload, s), (s += a.length);
                              var c = r.payload,
                                l = !1;
                              if ("string" == typeof r.payload)
                                if ("0x" === r.payload.slice(0, 2))
                                  (c = (0, p.ensureHexBuffer)(r.payload)),
                                    (l = !1 === f.ASCII_REGEX.test(t.from(r.payload.slice(2), "hex").toString()));
                                else {
                                  if (!1 === (0, p.isAsciiStr)(r.payload))
                                    throw new Error("Currently, the Lattice can only display ASCII strings.");
                                  c = t.from(r.payload);
                                }
                              else if ("boolean" == typeof r.displayHex) l = r.displayHex;
                              else {
                                if (!r.payload.toString) throw new Error("Unsupported input data type");
                                l = !1 === f.ASCII_REGEX.test(r.payload.toString());
                              }
                              var d = r.fwConstants,
                                h = n + d.extraDataMaxFrames * d.extraDataFrameSz;
                              d.personalSignHeaderSz && (h -= d.personalSignHeaderSz);
                              if (d.ethMsgPreHashAllowed && c.length > h) {
                                e.payload.writeUInt8(l, s), (s += 1), e.payload.writeUInt16LE(c.length, s), (s += 2);
                                var m = t.from((0, u.keccak256)(t.concat([_(c.length), c])), "hex");
                                m.copy(e.payload, s), (e.prehash = m);
                              } else {
                                var g = E(c, r);
                                (e.extraDataPayloads = g),
                                  (e.msg = c),
                                  e.payload.writeUInt8(l, s),
                                  (s += 1),
                                  e.payload.writeUInt16LE(c.length, s),
                                  (s += 2),
                                  c.copy(e.payload, s);
                              }
                              return e;
                            })(r, e);
                          case "eip712":
                            if (!e.fwConstants.eip712Supported)
                              throw new Error("EIP712 is not supported by your Lattice firmware version. Please upgrade.");
                            return (function (e, r) {
                              var n = r.fwConstants,
                                i = n.ethMaxMsgSz,
                                o = n.varAddrPathSzAllowed,
                                s = n.eip712MaxTypeParams,
                                u = f.ethMsgProtocol.TYPED_DATA,
                                l = 24 + i + 4,
                                d = 0;
                              (e.payload = t.alloc(l)), e.payload.writeUInt8(u.enumIdx, 0), (d += 1);
                              var h = (0, p.buildSignerPathBuf)(r.signerPath, o);
                              h.copy(e.payload, d), (d += h.length);
                              var m = JSON.parse(JSON.stringify(r.payload));
                              if (!m.primaryType || !m.types[m.primaryType])
                                throw new Error("primaryType must be specified and the type must be included.");
                              if (!m.message || !m.domain) throw new Error("message and domain must be specified.");
                              if (0 > Object.keys(m.types).indexOf("EIP712Domain")) throw new Error("EIP712Domain type must be defined.");
                              (r.payload.message = T(
                                JSON.parse(JSON.stringify(m.message)),
                                JSON.parse(JSON.stringify(m.primaryType)),
                                JSON.parse(JSON.stringify(m.types)),
                                !0
                              )),
                                (r.payload.domain = T(
                                  JSON.parse(JSON.stringify(m.domain)),
                                  "EIP712Domain",
                                  JSON.parse(JSON.stringify(m.types)),
                                  !0
                                )),
                                (m.domain = T(m.domain, "EIP712Domain", m.types, !1)),
                                (m.message = T(m.message, m.primaryType, m.types, !1));
                              var g = t.from(a.default.encode(m)),
                                y = r.fwConstants,
                                b = i + y.extraDataMaxFrames * y.extraDataFrameSz,
                                v = g.length > b;
                              if (
                                (Object.keys(m.types).forEach(function (e) {
                                  m.types[e].length > s && (v = !0);
                                }),
                                y.ethMsgPreHashAllowed && v)
                              ) {
                                e.payload.writeUInt16LE(g.length, d), (d += 2);
                                var w = c.TypedDataUtils.hash(e.input.payload);
                                t.from(w).copy(e.payload, d), (e.prehash = w);
                              } else {
                                var k = E(g, r);
                                (e.extraDataPayloads = k),
                                  e.payload.writeUInt16LE(g.length, d),
                                  (d += 2),
                                  g.copy(e.payload, d),
                                  (d += g.length),
                                  (e.payload = e.payload.slice(0, d));
                              }
                              return e;
                            })(r, e);
                          default:
                            throw new Error("Unsupported protocol");
                        }
                      },
                      validateEthereumMsgResponse: function (e, r) {
                        var n = e.signer,
                          i = e.sig,
                          o = r.input,
                          s = r.msg,
                          a = r.prehash,
                          l = void 0 === a ? null : a;
                        if ("signPersonal" === o.protocol)
                          return g(l || t.from((0, u.keccak256)(t.concat([_(s.length), s])), "hex"), i, n, { chainId: 1, useEIP155: !1 });
                        if ("eip712" === o.protocol) {
                          var d = c.TypedDataUtils.hash(r.input.payload);
                          return g(l || d, i, n, { useEIP155: !1 });
                        }
                        throw new Error("Unsupported protocol");
                      },
                      buildEthereumTxRequest: function (e) {
                        try {
                          var r = e.chainId,
                            n = void 0 === r ? 1 : r,
                            i = e.signerPath,
                            o = e.eip155,
                            s = void 0 === o ? null : o,
                            a = e.fwConstants,
                            c = e.type,
                            l = void 0 === c ? null : c,
                            d = a.contractDeployKey,
                            m = a.extraDataFrameSz,
                            g = a.extraDataMaxFrames,
                            y = a.prehashAllowed,
                            b = m > 0 && g > 0,
                            E = a.ethMaxDataSz,
                            T = a.varAddrPathSzAllowed;
                          if (("number" != typeof n && !1 === k(n) && (n = v[n]), !n)) throw new Error("Unsupported chain ID or name");
                          if (!i) throw new Error("`signerPath` not provided");
                          if (null === e.to && !d)
                            throw new Error("Contract deployment not supported. Please update your Lattice firmware.");
                          var x = null === e.to && d,
                            _ = a.allowedEthTxTypes && a.allowedEthTxTypes.indexOf(2) > -1,
                            S = a.allowedEthTxTypes && a.allowedEthTxTypes.indexOf(1) > -1,
                            I = _ && (2 === l || "eip1559" === l),
                            A = S && (1 === l || "eip2930" === l);
                          if (null !== l && !I && !A) throw new Error("Unsupported Ethereum transaction type");
                          var B = (function (e) {
                            switch (e) {
                              case 3:
                              case 4:
                                return !1;
                              default:
                                return !0;
                            }
                          })(n);
                          null !== s && "boolean" == typeof s ? (B = s) : (I || A) && (B = !1), e.value || (e.value = 0);
                          var C = [],
                            j = (0, p.ensureHexBuffer)(n),
                            L = (0, p.ensureHexBuffer)(e.nonce),
                            O = void 0,
                            R = (0, p.ensureHexBuffer)(e.gasLimit),
                            D = void 0,
                            H = void 0;
                          x
                            ? ((D = t.alloc(0)), (H = (0, p.ensureHexBuffer)(d)))
                            : ((D = (0, p.ensureHexBuffer)(e.to)), (H = (0, p.ensureHexBuffer)(e.to)));
                          var N = (0, p.ensureHexBuffer)(e.value),
                            M = (0, p.ensureHexBuffer)(e.data);
                          (I || A) && C.push(j), C.push(L);
                          var F = void 0,
                            U = void 0;
                          if (I) {
                            if (!e.maxPriorityFeePerGas) throw new Error("EIP1559 transactions must include `maxPriorityFeePerGas`");
                            (F = (0, p.ensureHexBuffer)(e.maxPriorityFeePerGas)),
                              C.push(F),
                              (U = (0, p.ensureHexBuffer)(e.maxFeePerGas)),
                              C.push(U),
                              (O = U);
                          } else (O = (0, p.ensureHexBuffer)(e.gasPrice)), C.push(O);
                          C.push(R), C.push(D), C.push(N), C.push(M);
                          var G = !1;
                          if (I || A) {
                            var K = [];
                            Array.isArray(e.accessList) &&
                              e.accessList.forEach(function (e) {
                                var t = [];
                                e.storageKeys.forEach(function (e) {
                                  t.push((0, p.ensureHexBuffer)(e));
                                }),
                                  K.push([(0, p.ensureHexBuffer)(e.address), t]),
                                  (G = !0);
                              }),
                              C.push(K);
                          } else !0 === B && (C.push(j), C.push((0, p.ensureHexBuffer)(null)), C.push((0, p.ensureHexBuffer)(null)));
                          var z = t.alloc(E + 122),
                            V = 0;
                          z.writeUInt8(Number(B), V), V++;
                          var q = void 0,
                            W = 0;
                          if (!0 == (1 !== (ne = w(n)).length || 255 === ne.readUInt8(0))) {
                            if ((W = (q = w(n)).length) > f.MAX_CHAIN_ID_BYTES) throw new Error("ChainID provided is too large.");
                            z.writeUInt8(f.HANDLE_LARGER_CHAIN_ID, V), V++;
                          } else {
                            if (1 !== (q = (0, p.ensureHexBuffer)(n)).length) throw new Error("Error parsing chainID");
                            q.copy(z, V), (V += q.length);
                          }
                          var $ = (0, p.buildSignerPathBuf)(i, T);
                          if (($.copy(z, V), (V += $.length), L.length > 4)) throw new Error("Nonce too large");
                          if ((L.copy(z, V + (4 - L.length)), (V += 4), O.length > 8)) throw new Error("Gas price too large");
                          if ((O.copy(z, V + (8 - O.length)), (V += 8), R.length > 4)) throw new Error("Gas limit too large");
                          if ((R.copy(z, V + (4 - R.length)), (V += 4), 20 !== H.length)) throw new Error("Invalid `to` address");
                          if ((H.copy(z, V), (V += 20), N.length > 32)) throw new Error("Value too large");
                          N.copy(z, V + (32 - N.length)), (V += 32);
                          var X = !1;
                          if (a.allowedEthTxTypes)
                            if ((G && (X = !0), z.writeUInt8(X ? 1 : 0, V), (V += 1), I)) {
                              if ((z.writeUInt8(2, V), (V += 1), F.length > 8)) throw new Error("maxPriorityFeePerGasBytes too large");
                              F.copy(z, V + (8 - F.length)), (V += 8);
                            } else A ? (z.writeUInt8(1, V), (V += 1), (V += 8)) : (V += 9);
                          var J = [],
                            Y = null,
                            Z = M.length || 0,
                            Q = W > 0 ? W + 1 : 0,
                            ee = t.alloc(Z + Q);
                          if ((Q > 0 && (ee.writeUInt8(W, 0), q.copy(ee, 1)), M.copy(ee, Q), Z > E)) {
                            var te = Z + Q,
                              re = E + g * m;
                            if (y && te > re) Y = t.from((0, u.keccak256)(P(C, l)), "hex");
                            else {
                              if (!b || (b && te > re))
                                throw new Error("Data field too large (got ".concat(M.length, "; must be <=").concat(re - Q, " bytes)"));
                              (0, p.splitFrames)(ee.slice(E), m).forEach(function (e) {
                                var r = t.alloc(4);
                                r.writeUInt32LE(e.length, 0), J.push(t.concat([r, e]));
                              });
                            }
                          } else X && (Y = t.from((0, u.keccak256)(P(C, l)), "hex"));
                          return (
                            z.writeUInt16BE(M.length, V),
                            (V += 2),
                            W > 0 && (z.writeUInt8(W, V), V++, q.copy(z, V), (V += W)),
                            Y ? (Y.copy(z, V), (V += E)) : (M.slice(0, E).copy(z, V), (V += E)),
                            {
                              rawTx: C,
                              type: l,
                              payload: z.slice(0, V),
                              extraDataPayloads: J,
                              schema: h.LatticeSignSchema.ethereum,
                              chainId: n,
                              useEIP155: B,
                              signerPath: i
                            }
                          );
                        } catch (e) {
                          return { err: e.message };
                        }
                        var ne;
                      },
                      buildEthRawTx: function (e, r, n) {
                        var i = g(t.from((0, u.keccak256)(P(e.rawTx, e.type)), "hex"), r, n, e),
                          o = e.useEIP155 ? e.rawTx.slice(0, -3) : e.rawTx;
                        o.push(i.v), o.push(m(i.r)), o.push(m(i.s));
                        var s = t.from((0, l.encode)(o));
                        return e.type && (s = t.concat([t.from([e.type]), s])), { rawTx: s.toString("hex"), sigWithV: i };
                      },
                      hashTransaction: function (e) {
                        return (0, u.keccak256)(t.from(e, "hex"));
                      },
                      chainIds: v,
                      ensureHexBuffer: p.ensureHexBuffer,
                      ethConvertLegacyToGenericReq: function (e) {
                        var r;
                        r =
                          e.chainId && "01" !== (0, p.ensureHexBuffer)(e.chainId).toString("hex")
                            ? i.Common.custom({ chainId: Number(e.chainId) }, { hardfork: i.Hardfork.London, eips: [1559, 2930] })
                            : new i.Common({ chain: i.Chain.Mainnet, hardfork: i.Hardfork.London });
                        var n = o.TransactionFactory.fromTxData(e, { common: r });
                        return e.type ? n.getMessageToSign(!1) : t.from((0, l.encode)(n.getMessageToSign(!1)));
                      }
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/ethereum.js" }
    ],
    [
      3605,
      { "../protocol": 3617, "../shared/validators": 3624, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.encodeAddKvRecordsRequest = r.validateAddKvRequest = r.addKvRecords = void 0);
                    var o = e("../protocol"),
                      s = e("../shared/validators");
                    r.addKvRecords = function (e) {
                      var t = e.client,
                        a = e.records,
                        c = e.type,
                        u = e.caseSensitive;
                      return n(this, void 0, void 0, function () {
                        var e, n, l, d, f, h, p, m, g;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, s.validateConnectedClient)(t)),
                                (n = e.url),
                                (l = e.sharedSecret),
                                (d = e.ephemeralPub),
                                (f = e.fwConstants),
                                (0, r.validateAddKvRequest)({ records: a, fwConstants: f }),
                                (h = (0, r.encodeAddKvRecordsRequest)({ records: a, type: c, caseSensitive: u, fwConstants: f })),
                                [
                                  4,
                                  (0, o.encryptedSecureRequest)({
                                    data: h,
                                    requestType: o.LatticeSecureEncryptedRequestType.addKvRecords,
                                    sharedSecret: l,
                                    ephemeralPub: d,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (p = i.sent()), (m = p.decryptedData), (g = p.newEphemeralPub), t.mutate({ ephemeralPub: g }), [2, m];
                          }
                        });
                      });
                    };
                    r.validateAddKvRequest = function (e) {
                      var t = e.records,
                        r = e.fwConstants;
                      (0, s.validateKvRecords)(t, r);
                    };
                    r.encodeAddKvRecordsRequest = function (e) {
                      var r = e.records,
                        n = e.type,
                        i = e.caseSensitive,
                        o = e.fwConstants,
                        a = t.alloc(1 + 139 * o.kvActionMaxNum);
                      a.writeUInt8(Object.keys(r).length, 0);
                      var c = 1;
                      return (
                        Object.entries(r).forEach(function (e) {
                          var r = e[0],
                            u = e[1],
                            l = (0, s.validateKvRecord)({ key: r, val: u }, o),
                            d = l.key,
                            f = l.val;
                          a.writeUInt32LE(0, c),
                            (c += 4),
                            a.writeUInt32LE(n, c),
                            (c += 4),
                            a.writeUInt8(i ? 1 : 0, c),
                            (c += 1),
                            a.writeUInt8(String(d).length + 1, c),
                            (c += 1),
                            t.from(String(d)).copy(a, c),
                            (c += o.kvKeyMaxStrSz + 1),
                            a.writeUInt8(String(f).length + 1, c),
                            (c += 1),
                            t.from(String(f)).copy(a, c),
                            (c += o.kvValMaxStrSz + 1);
                        }),
                        a
                      );
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/addKvRecords.js" }
    ],
    [
      3606,
      { "../protocol": 3617, "../shared/predicates": 3622, "../shared/utilities": 3623, "../shared/validators": 3624, "../util": 3625 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__awaiter) ||
                    function (e, t, r, n) {
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
                          var t;
                          e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof r
                                ? t
                                : new r(function (e) {
                                    e(t);
                                  })).then(s, a);
                        }
                        c((n = n.apply(e, t || [])).next());
                      });
                    },
                  i =
                    (this && this.__generator) ||
                    function (e, t) {
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
                                    if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.decodeConnectResponse = r.validateConnectRequest = r.connect = void 0);
                var o = e("../protocol"),
                  s = e("../shared/predicates"),
                  a = e("../shared/utilities"),
                  c = e("../shared/validators"),
                  u = e("../util");
                r.connect = function (e) {
                  var t = e.client,
                    a = e.id;
                  return n(this, void 0, void 0, function () {
                    var e, n, c, u, l, d, f, h, p, m, g;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (e = (0, r.validateConnectRequest)({ deviceId: a, key: t.key, baseUrl: t.baseUrl })),
                            (n = e.deviceId),
                            (c = e.key),
                            (u = e.baseUrl),
                            (l = "".concat(u, "/").concat(n)),
                            [4, (0, o.connectSecureRequest)({ url: l, pubkey: t.publicKey })]
                          );
                        case 1:
                          return (d = i.sent()), [4, (0, r.decodeConnectResponse)(d, c)];
                        case 2:
                          return (
                            (f = i.sent()),
                            (h = f.isPaired),
                            (p = f.fwVersion),
                            (m = f.activeWallets),
                            (g = f.ephemeralPub),
                            t.mutate({ deviceId: n, ephemeralPub: g, url: l, isPaired: h, fwVersion: p, activeWallets: m }),
                            !h || (0, s.doesFetchWalletsOnLoad)(t.getFwVersion()) ? [3, 4] : [4, t.fetchActiveWallet()]
                          );
                        case 3:
                          i.sent(), (i.label = 4);
                        case 4:
                          return [2, h];
                      }
                    });
                  });
                };
                r.validateConnectRequest = function (e) {
                  var t = e.deviceId,
                    r = e.key,
                    n = e.baseUrl;
                  return { deviceId: (0, c.validateDeviceId)(t), key: (0, c.validateKey)(r), baseUrl: (0, c.validateBaseUrl)(n) };
                };
                r.decodeConnectResponse = function (e, t) {
                  var r = 0,
                    n = e.readUInt8(r) === o.ProtocolConstants.pairingStatus.paired;
                  r++;
                  var i = e.slice(r, r + 65).toString("hex");
                  r += 65;
                  var s = (0, u.getP256KeyPairFromPub)(i),
                    c = e.slice(r, r + 4);
                  if (((r += 4), n)) {
                    var l = e.slice(r, r + 160);
                    r += 160;
                    var d = (0, a.getSharedSecret)(t, s),
                      f = (0, u.aes256_decrypt)(l, d);
                    if (0 !== f[f.length - 2] || 0 !== f[f.length - 1]) throw new Error("Failed to connect to Lattice.");
                    return { isPaired: n, fwVersion: c, activeWallets: (0, a.parseWallets)(f), ephemeralPub: s };
                  }
                  return { isPaired: n, fwVersion: c, activeWallets: undefined, ephemeralPub: s };
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/connect.js" }
    ],
    [
      3607,
      { "../constants": 3603, "../protocol": 3617, "../shared/validators": 3624, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.decodeFetchActiveWalletResponse = r.fetchActiveWallet = void 0);
                    var o = e("../constants"),
                      s = e("../protocol"),
                      a = e("../shared/validators");
                    r.fetchActiveWallet = function (e) {
                      var o = e.client;
                      return n(this, void 0, void 0, function () {
                        var e, n, c, u, l, d, f, h, p;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, a.validateConnectedClient)(o)),
                                (n = e.url),
                                (c = e.sharedSecret),
                                (u = e.ephemeralPub),
                                [
                                  4,
                                  (0, s.encryptedSecureRequest)({
                                    data: t.alloc(0),
                                    requestType: s.LatticeSecureEncryptedRequestType.getWallets,
                                    sharedSecret: c,
                                    ephemeralPub: u,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (l = i.sent()),
                                (d = l.decryptedData),
                                (f = l.newEphemeralPub),
                                (h = (0, r.decodeFetchActiveWalletResponse)(d)),
                                (p = (0, a.validateActiveWallets)(h)),
                                o.mutate({ ephemeralPub: f, activeWallets: p }),
                                [2, p]
                              );
                          }
                        });
                      });
                    };
                    r.decodeFetchActiveWalletResponse = function (e) {
                      var r = {
                          internal: { uid: o.EMPTY_WALLET_UID, external: !1, name: t.alloc(0), capabilities: 0 },
                          external: { uid: o.EMPTY_WALLET_UID, external: !0, name: t.alloc(0), capabilities: 0 }
                        },
                        n = 0;
                      return (
                        (r.internal.uid = e.slice(n, n + 32)),
                        (r.internal.capabilities = e.readUInt32BE(n + 32)),
                        (r.internal.name = e.slice(n + 36, n + 71)),
                        (n += 71),
                        (r.external.uid = e.slice(n, n + 32)),
                        (r.external.capabilities = e.readUInt32BE(n + 32)),
                        (r.external.name = e.slice(n + 36, n + 71)),
                        r
                      );
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/fetchActiveWallet.js" }
    ],
    [
      3608,
      { "../constants": 3603, "../protocol": 3617, "../shared/utilities": 3623, "../shared/validators": 3624, buffer: 2913, uuid: 3766 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.decodeFetchEncData = r.encodeFetchEncDataRequest = r.validateFetchEncDataRequest = r.fetchEncData = void 0);
                    var o = e("uuid"),
                      s = e("../constants"),
                      a = e("../protocol"),
                      c = e("../shared/utilities"),
                      u = e("../shared/validators"),
                      l = s.EXTERNAL.ENC_DATA,
                      d = "Unknown encrypted data export type requested. Exiting.",
                      f = { CIPHERTEXT: 32, SALT: 32, CHECKSUM: 32, IV: 16, PUBKEY: 48 };
                    r.fetchEncData = function (e) {
                      var t = e.client,
                        o = e.schema,
                        s = e.params;
                      return n(this, void 0, void 0, function () {
                        var e, n, c, l, d, f, h, p, m, g;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, u.validateConnectedClient)(t)),
                                (n = e.url),
                                (c = e.sharedSecret),
                                (l = e.ephemeralPub),
                                (d = e.fwVersion),
                                (f = (0, u.validateWallet)(t.getActiveWallet())),
                                (0, r.validateFetchEncDataRequest)({ params: s }),
                                (h = (0, r.encodeFetchEncDataRequest)({ schema: o, params: s, fwVersion: d, activeWallet: f })),
                                [
                                  4,
                                  (0, a.encryptedSecureRequest)({
                                    data: h,
                                    requestType: a.LatticeSecureEncryptedRequestType.fetchEncryptedData,
                                    sharedSecret: c,
                                    ephemeralPub: l,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (p = i.sent()),
                                (m = p.decryptedData),
                                (g = p.newEphemeralPub),
                                t.mutate({ ephemeralPub: g }),
                                [2, (0, r.decodeFetchEncData)({ data: m, schema: o, params: s })]
                              );
                          }
                        });
                      });
                    };
                    r.validateFetchEncDataRequest = function (e) {
                      var t = e.params;
                      (0, u.validateStartPath)(t.path);
                    };
                    r.encodeFetchEncDataRequest = function (e) {
                      var r = e.schema,
                        n = e.params,
                        i = e.fwVersion,
                        o = e.activeWallet;
                      if (i.major < 1 && i.minor < 17) throw new Error("Firmware version >=v0.17.0 is required for encrypted data export.");
                      if (r !== l.SCHEMAS.BLS_KEYSTORE_EIP2335_PBKDF_V4) throw new Error(d);
                      n.walletUID = o.uid;
                      var s = t.alloc(1025),
                        a = 0;
                      if ((s.writeUInt8(r, a), (a += 1), r === l.SCHEMAS.BLS_KEYSTORE_EIP2335_PBKDF_V4)) {
                        n.walletUID.copy(s, a), (a += n.walletUID.length), s.writeUInt8(n.path.length, a), (a += 1);
                        for (var c = 0; c < 5; c++) c <= n.path.length && s.writeUInt32LE(n.path[c], a), (a += 4);
                        return n.c && s.writeUInt32LE(n.c, a), (a += 4), s;
                      }
                      throw new Error(d);
                    };
                    r.decodeFetchEncData = function (e) {
                      var t = e.data,
                        r = e.schema,
                        n = e.params,
                        i = 0;
                      if (r === l.SCHEMAS.BLS_KEYSTORE_EIP2335_PBKDF_V4) {
                        var o = {},
                          s = f,
                          a = s.CIPHERTEXT,
                          c = s.SALT,
                          u = s.CHECKSUM,
                          p = s.IV,
                          m = s.PUBKEY,
                          g = 4 + a + c + u + p + m,
                          y = t.readUInt32LE(i);
                        if (((i += 4), y !== g)) throw new Error("Invalid data returned from Lattice. Expected EIP2335 data.");
                        return (
                          (o.iterations = t.readUInt32LE(i)),
                          (i += 4),
                          (o.cipherText = t.slice(i, i + a)),
                          (i += a),
                          (o.salt = t.slice(i, i + c)),
                          (i += c),
                          (o.checksum = t.slice(i, i + u)),
                          (i += u),
                          (o.iv = t.slice(i, i + p)),
                          (i += p),
                          (o.pubkey = t.slice(i, i + m)),
                          (i += m),
                          h(o, n.path)
                        );
                      }
                      throw new Error(d);
                    };
                    var h = function (e, r) {
                      try {
                        var n = e.iterations,
                          i = e.salt,
                          s = e.checksum,
                          a = e.iv,
                          u = e.cipherText,
                          l = e.pubkey;
                        return t.from(
                          JSON.stringify({
                            version: 4,
                            uuid: (0, o.v4)(),
                            path: (0, c.getPathStr)(r),
                            pubkey: l.toString("hex"),
                            crypto: {
                              kdf: {
                                function: "pbkdf2",
                                params: { dklen: 32, c: n, prf: "hmac-sha256", salt: i.toString("hex") },
                                message: ""
                              },
                              checksum: { function: "sha256", params: {}, message: s.toString("hex") },
                              cipher: { function: "aes-128-ctr", params: { iv: a.toString("hex") }, message: u.toString("hex") }
                            }
                          })
                        );
                      } catch (e) {
                        throw Error("Failed to format EIP2335 return data: ".concat(e.toString()));
                      }
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/fetchEncData.js" }
    ],
    [
      3609,
      { "../protocol": 3617, "../shared/validators": 3624, "../util": 3625, bitwise: 2840, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        },
                      o =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.decodeGetAddressesResponse =
                        r.encodeGetAddressesRequest =
                        r.validateGetAddressesRequest =
                        r.getAddresses =
                          void 0);
                    var s = o(e("bitwise")),
                      a = e("../protocol"),
                      c = e("../shared/validators"),
                      u = e("../util");
                    r.getAddresses = function (e) {
                      var t = e.client,
                        o = e.startPath,
                        s = e.n,
                        u = e.flag;
                      return n(this, void 0, void 0, function () {
                        var e, n, l, d, f, h, p, m, g, y, b, v, w, k;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, c.validateConnectedClient)(t)),
                                (n = e.url),
                                (l = e.sharedSecret),
                                (d = e.ephemeralPub),
                                (f = e.fwConstants),
                                (h = (0, c.validateWallet)(t.getActiveWallet())),
                                (p = (0, r.validateGetAddressesRequest)({ startPath: o, n: s, flag: u })),
                                (m = p.startPath),
                                (g = p.n),
                                (y = p.flag),
                                (b = (0, r.encodeGetAddressesRequest)({ startPath: m, n: g, flag: y, fwConstants: f, wallet: h })),
                                [
                                  4,
                                  (0, a.encryptedSecureRequest)({
                                    data: b,
                                    requestType: a.LatticeSecureEncryptedRequestType.getAddresses,
                                    sharedSecret: l,
                                    ephemeralPub: d,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (v = i.sent()),
                                (w = v.decryptedData),
                                (k = v.newEphemeralPub),
                                t.mutate({ ephemeralPub: k }),
                                [2, (0, r.decodeGetAddressesResponse)(w, y)]
                              );
                          }
                        });
                      });
                    };
                    r.validateGetAddressesRequest = function (e) {
                      var t = e.startPath,
                        r = e.n,
                        n = e.flag;
                      return { startPath: (0, c.validateStartPath)(t), n: (0, c.validateNAddresses)(r), flag: (0, c.validateIsUInt4)(n) };
                    };
                    r.encodeGetAddressesRequest = function (e) {
                      var r,
                        n = e.startPath,
                        i = e.n,
                        o = e.flag,
                        c = e.fwConstants,
                        l = e.wallet;
                      if (
                        !(
                          (c.getAddressFlags || []).indexOf(o) > -1 &&
                          (o === a.LatticeGetAddressesFlag.ed25519Pubkey ||
                            o === a.LatticeGetAddressesFlag.secp256k1Pubkey ||
                            o === a.LatticeGetAddressesFlag.bls12_381Pubkey)
                        ) &&
                        !(0, u.isValidAssetPath)(n, c)
                      )
                        throw new Error("Derivation path or flag is not supported. Try updating Lattice firmware.");
                      var d = 53;
                      if (c.varAddrPathSzAllowed) d += 1;
                      else if (5 !== n.length)
                        throw new Error("Your Lattice firmware only supports derivation paths with 5 indices. Please upgrade.");
                      var f = t.alloc(d),
                        h = 0;
                      l.uid.copy(f, h), (h += 32), c.varAddrPathSzAllowed && (f.writeUInt8(n.length, h), (h += 1));
                      for (var p = 0; p < 5; p++) {
                        if (p <= n.length) {
                          var m = null !== (r = n[p]) && void 0 !== r ? r : 0;
                          f.writeUInt32BE(m, h);
                        }
                        h += 4;
                      }
                      var g,
                        y = 0;
                      if (c.addrFlagsAllowed) {
                        y = c.getAddressFlags && c.getAddressFlags.indexOf(o) > -1 ? o : 0;
                        var b = s.default.nibble.read(y),
                          v = s.default.nibble.read(i);
                        g = s.default.byte.write(b.concat(v));
                      } else g = i;
                      return f.writeUInt8(g, h), h++, f;
                    };
                    r.decodeGetAddressesResponse = function (e, t) {
                      var r = 0,
                        n = [],
                        i =
                          t === a.LatticeGetAddressesFlag.secp256k1Pubkey ||
                          t === a.LatticeGetAddressesFlag.ed25519Pubkey ||
                          t === a.LatticeGetAddressesFlag.bls12_381Pubkey;
                      i && (r += 1);
                      for (
                        var o =
                          a.ProtocolConstants.msgSizes.secure.data.response.encrypted[a.LatticeSecureEncryptedRequestType.getAddresses];
                        r < o;

                      )
                        if (i) {
                          var s = e.slice(r, r + 65),
                            c = s.every(function (e) {
                              return 0 === e;
                            });
                          c || t !== a.LatticeGetAddressesFlag.ed25519Pubkey
                            ? c || t !== a.LatticeGetAddressesFlag.bls12_381Pubkey
                              ? c || n.push(s)
                              : n.push(s.slice(0, 48))
                            : n.push(s.slice(0, 32)),
                            (r += 65);
                        } else {
                          var u = e.slice(r, r + a.ProtocolConstants.addrStrLen);
                          r += a.ProtocolConstants.addrStrLen;
                          var l = u.indexOf(0);
                          l > 0 && n.push(u.slice(0, l).toString());
                        }
                      return n;
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/getAddresses.js" }
    ],
    [
      3610,
      { "../protocol": 3617, "../shared/validators": 3624, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.decodeGetKvRecordsResponse = r.encodeGetKvRecordsRequest = r.validateGetKvRequest = r.getKvRecords = void 0);
                    var o = e("../protocol"),
                      s = e("../shared/validators");
                    r.getKvRecords = function (e) {
                      var t = e.client,
                        a = e.type,
                        c = e.n,
                        u = e.start;
                      return n(this, void 0, void 0, function () {
                        var e, n, l, d, f, h, p, m, g, y, b, v, w;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, s.validateConnectedClient)(t)),
                                (n = e.url),
                                (l = e.sharedSecret),
                                (d = e.ephemeralPub),
                                (f = e.fwConstants),
                                (h = (0, r.validateGetKvRequest)({ type: a, n: c, start: u, fwConstants: f })),
                                (p = h.type),
                                (m = h.n),
                                (g = h.start),
                                (y = (0, r.encodeGetKvRecordsRequest)({ type: p, n: m, start: g })),
                                [
                                  4,
                                  (0, o.encryptedSecureRequest)({
                                    data: y,
                                    requestType: o.LatticeSecureEncryptedRequestType.getKvRecords,
                                    sharedSecret: l,
                                    ephemeralPub: d,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (b = i.sent()),
                                (v = b.decryptedData),
                                (w = b.newEphemeralPub),
                                t.mutate({ ephemeralPub: w }),
                                [2, (0, r.decodeGetKvRecordsResponse)(v, f)]
                              );
                          }
                        });
                      });
                    };
                    r.validateGetKvRequest = function (e) {
                      var t = e.fwConstants,
                        r = e.n,
                        n = e.type,
                        i = e.start;
                      if (!t.kvActionsAllowed) throw new Error("Unsupported. Please update firmware.");
                      if (!r || r < 1) throw new Error("You must request at least one record.");
                      if (r > t.kvActionMaxNum)
                        throw new Error("You may only request up to ".concat(t.kvActionMaxNum, " records at once."));
                      if (0 !== n && !n) throw new Error("You must specify a type.");
                      if (0 !== i && !i) throw new Error("You must specify a type.");
                      return { fwConstants: t, n: r, type: n, start: i };
                    };
                    r.encodeGetKvRecordsRequest = function (e) {
                      var r = e.type,
                        n = e.n,
                        i = e.start,
                        o = t.alloc(9);
                      return o.writeUInt32LE(r, 0), o.writeUInt8(n, 4), o.writeUInt32LE(i, 5), o;
                    };
                    r.decodeGetKvRecordsResponse = function (e, t) {
                      var r = 0,
                        n = e.readUInt32BE(r);
                      r += 4;
                      var i = parseInt(e.slice(r, r + 1).toString("hex"), 16);
                      if (((r += 1), i > t.kvActionMaxNum)) throw new Error("Too many records fetched. Firmware error.");
                      for (var o = [], s = 0; s < i; s++) {
                        var a = {};
                        (a.id = e.readUInt32BE(r)),
                          (r += 4),
                          (a.type = e.readUInt32BE(r)),
                          (r += 4),
                          (a.caseSensitive = 1 === parseInt(e.slice(r, r + 1).toString("hex"), 16)),
                          (r += 1);
                        var c = parseInt(e.slice(r, r + 1).toString("hex"), 16);
                        (r += 1), (a.key = e.slice(r, r + c - 1).toString()), (r += t.kvKeyMaxStrSz + 1);
                        var u = parseInt(e.slice(r, r + 1).toString("hex"), 16);
                        (r += 1), (a.val = e.slice(r, r + u - 1).toString()), (r += t.kvValMaxStrSz + 1), o.push(a);
                      }
                      return { records: o, total: n, fetched: i };
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/getKvRecords.js" }
    ],
    [
      3611,
      {
        "./addKvRecords": 3605,
        "./connect": 3606,
        "./fetchActiveWallet": 3607,
        "./fetchEncData": 3608,
        "./getAddresses": 3609,
        "./getKvRecords": 3610,
        "./pair": 3612,
        "./removeKvRecords": 3613,
        "./sign": 3614
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  i(e("./addKvRecords"), r),
                  i(e("./connect"), r),
                  i(e("./fetchEncData"), r),
                  i(e("./fetchActiveWallet"), r),
                  i(e("./getAddresses"), r),
                  i(e("./getKvRecords"), r),
                  i(e("./pair"), r),
                  i(e("./removeKvRecords"), r),
                  i(e("./sign"), r);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/index.js" }
    ],
    [
      3612,
      { "../protocol": 3617, "../shared/utilities": 3623, "../shared/validators": 3624, "../util": 3625, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.encodePairRequest = r.pair = void 0);
                    var o = e("../protocol"),
                      s = e("../shared/utilities"),
                      a = e("../shared/validators"),
                      c = e("../util");
                    r.pair = function (e) {
                      var t = e.client,
                        s = e.pairingSecret;
                      return n(this, void 0, void 0, function () {
                        var e, n, c, u, l, d, f, h;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, a.validateConnectedClient)(t)),
                                (n = e.url),
                                (c = e.sharedSecret),
                                (u = e.ephemeralPub),
                                (l = e.appName),
                                (d = e.key),
                                (f = (0, r.encodePairRequest)({ pairingSecret: s, key: d, appName: l })),
                                [
                                  4,
                                  (0, o.encryptedSecureRequest)({
                                    data: f,
                                    requestType: o.LatticeSecureEncryptedRequestType.finalizePairing,
                                    sharedSecret: c,
                                    ephemeralPub: u,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (h = i.sent().newEphemeralPub), t.mutate({ ephemeralPub: h, isPaired: !0 }), [4, t.fetchActiveWallet()]
                              );
                            case 2:
                              return i.sent(), [2, t.hasActiveWallet()];
                          }
                        });
                      });
                    };
                    r.encodePairRequest = function (e) {
                      var r = e.key,
                        n = e.pairingSecret,
                        i = e.appName,
                        o = (0, s.getPubKeyBytes)(r),
                        a = t.alloc(25);
                      n.length > 0 && a.write(i);
                      var u = (0, c.generateAppSecret)(o, a, t.from(n)),
                        l = r.sign(u),
                        d = (0, c.toPaddedDER)(l);
                      return t.concat([a, d]);
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/pair.js" }
    ],
    [
      3613,
      { "../protocol": 3617, "../shared/validators": 3624, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.encodeRemoveKvRecordsRequest = r.validateRemoveKvRequest = r.removeKvRecords = void 0);
                    var o = e("../protocol"),
                      s = e("../shared/validators");
                    r.removeKvRecords = function (e) {
                      var t = e.client,
                        a = e.type,
                        c = e.ids;
                      return n(this, void 0, void 0, function () {
                        var e, n, u, l, d, f, h, p, m, g, y, b;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, s.validateConnectedClient)(t)),
                                (n = e.url),
                                (u = e.sharedSecret),
                                (l = e.ephemeralPub),
                                (d = e.fwConstants),
                                (f = (0, r.validateRemoveKvRequest)({ fwConstants: d, type: a, ids: c })),
                                (h = f.type),
                                (p = f.ids),
                                (m = (0, r.encodeRemoveKvRecordsRequest)({ type: h, ids: p, fwConstants: d })),
                                [
                                  4,
                                  (0, o.encryptedSecureRequest)({
                                    data: m,
                                    requestType: o.LatticeSecureEncryptedRequestType.removeKvRecords,
                                    sharedSecret: u,
                                    ephemeralPub: l,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (g = i.sent()), (y = g.decryptedData), (b = g.newEphemeralPub), t.mutate({ ephemeralPub: b }), [2, y];
                          }
                        });
                      });
                    };
                    r.validateRemoveKvRequest = function (e) {
                      var t = e.fwConstants,
                        r = e.type,
                        n = e.ids;
                      if (!t.kvActionsAllowed) throw new Error("Unsupported. Please update firmware.");
                      if (!Array.isArray(n) || n.length < 1) throw new Error("You must include one or more `ids` to removed.");
                      if (n.length > t.kvRemoveMaxNum)
                        throw new Error("Only up to ".concat(t.kvRemoveMaxNum, " records may be removed at once."));
                      if (0 !== r && !r) throw new Error("You must specify a type.");
                      return { type: r, ids: n };
                    };
                    r.encodeRemoveKvRecordsRequest = function (e) {
                      var r = e.fwConstants,
                        n = e.type,
                        i = e.ids,
                        o = t.alloc(5 + 4 * r.kvRemoveMaxNum);
                      o.writeUInt32LE(n, 0), o.writeUInt8(i.length, 4);
                      for (var s = 0; s < i.length; s++) {
                        var a = parseInt(i[s]);
                        o.writeUInt32LE(a, 5 + 4 * s);
                      }
                      return o;
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/removeKvRecords.js" }
    ],
    [
      3614,
      {
        "../bitcoin": 3599,
        "../constants": 3603,
        "../ethereum": 3604,
        "../genericSigning": 3615,
        "../protocol": 3617,
        "../shared/functions": 3621,
        "../shared/validators": 3624,
        "../util": 3625,
        buffer: 2913,
        "hash.js": 3810
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        },
                      o =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.decodeSignResponse = r.encodeSignRequest = r.sign = void 0);
                    var s = e("hash.js"),
                      a = o(e("../bitcoin")),
                      c = e("../constants"),
                      u = o(e("../ethereum")),
                      l = e("../genericSigning"),
                      d = e("../protocol"),
                      f = e("../shared/functions"),
                      h = e("../shared/validators"),
                      p = e("../util");
                    r.sign = function (e) {
                      var t = e.client,
                        o = e.data,
                        s = e.currency,
                        a = e.cachedData,
                        c = e.nextCode;
                      return n(this, void 0, void 0, function () {
                        var e, n, u, l, p, m, g, y, b, v, w, k, E, T, x;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (0, h.validateConnectedClient)(t)),
                                (n = e.url),
                                (u = e.sharedSecret),
                                (l = e.ephemeralPub),
                                (p = e.fwConstants),
                                (m = (0, h.validateWallet)(t.getActiveWallet())),
                                (g = (0, f.buildTransaction)({ data: o, currency: s, fwConstants: p })),
                                (y = g.requestData),
                                (b = g.isGeneric),
                                (v = (0, r.encodeSignRequest)({ fwConstants: p, wallet: m, requestData: y, cachedData: a, nextCode: c })),
                                (w = v.payload),
                                (k = v.hasExtraPayloads),
                                [
                                  4,
                                  (0, d.encryptedSecureRequest)({
                                    data: w,
                                    requestType: d.LatticeSecureEncryptedRequestType.sign,
                                    sharedSecret: u,
                                    ephemeralPub: l,
                                    url: n
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (E = i.sent()),
                                (T = E.decryptedData),
                                (x = E.newEphemeralPub),
                                t.mutate({ ephemeralPub: x }),
                                k
                                  ? [2, t.sign({ data: o, currency: s, cachedData: y, nextCode: T.slice(0, 8) })]
                                  : [2, (0, r.decodeSignResponse)({ data: T, request: y, isGeneric: b, currency: s })]
                              );
                          }
                        });
                      });
                    };
                    r.encodeSignRequest = function (e) {
                      var r,
                        n,
                        i,
                        o,
                        s,
                        a = e.fwConstants,
                        c = e.wallet,
                        u = e.requestData,
                        l = e.cachedData,
                        f = e.nextCode;
                      l && f
                        ? ((u = l), (o = t.concat([f, u.extraDataPayloads.shift()])), (s = d.LatticeSignSchema.extraData))
                        : ((o = u.payload), (s = u.schema));
                      var h = t.alloc(2 + a.reqMaxDataSz),
                        p = 0,
                        m = u.extraDataPayloads && Number(u.extraDataPayloads.length > 0);
                      return (
                        h.writeUInt8(m, p),
                        (p += 1),
                        h.writeUInt8(s, p),
                        (p += 1),
                        null === (r = c.uid) || void 0 === r || r.copy(h, p),
                        (p += null !== (i = null === (n = c.uid) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0),
                        o.copy(h, p),
                        { payload: h, hasExtraPayloads: m }
                      );
                    };
                    r.decodeSignResponse = function (e) {
                      var r,
                        n = e.data,
                        i = e.request,
                        o = e.isGeneric,
                        d = e.currency,
                        f = 0;
                      if (d === c.CURRENCIES.BTC) {
                        var h = i,
                          m = a.default.getAddressFormat(h.origData.changePath),
                          g = n.slice(f, f + 20);
                        f += 20;
                        for (var y = a.default.getBitcoinAddress(g, m), b = [], v = [], w = 0; f < n.length && 48 === n[f]; ) {
                          var k = f,
                            E = f + 2 + n[f + 1];
                          v.push(n.slice(k, E)), (f += 74);
                          var T = 33 * w + 740,
                            x = 33 * (w + 1) + 740;
                          b.push(n.slice(T, x)), (w += 1);
                        }
                        var _ = { inputs: [], outputs: [] };
                        _.outputs.push({ value: h.origData.value, recipient: h.origData.recipient }),
                          (null === (r = h.changeData) || void 0 === r ? void 0 : r.value) &&
                            h.changeData.value > 0 &&
                            _.outputs.push({ value: h.changeData.value, recipient: y });
                        for (var P = 0; P < v.length; P++)
                          _.inputs.push({
                            hash: h.origData.prevOuts[P].txHash,
                            index: h.origData.prevOuts[P].index,
                            sig: v[P],
                            pubkey: b[P],
                            signerPath: h.origData.prevOuts[P].signerPath
                          });
                        var S = a.default.serializeTx(_),
                          I = S,
                          A = t.from((0, s.sha256)().update(t.from(I, "hex")).digest("hex"), "hex");
                        return { tx: S, txHash: (0, s.sha256)().update(A).digest("hex"), changeRecipient: y, sigs: v };
                      }
                      if (d !== c.CURRENCIES.ETH || o) {
                        if (d === c.CURRENCIES.ETH_MSG) {
                          j = (0, p.parseDER)(n.slice(f, f + 2 + n[f + 1]));
                          f += 74;
                          var B = n.slice(f, f + 20),
                            C = u.default.validateEthereumMsgResponse({ signer: B, sig: j }, i);
                          return { sig: { v: C.v, r: C.r.toString("hex"), s: C.s.toString("hex") }, signer: B };
                        }
                        return (0, l.parseGenericSigningResponse)(n, f, i);
                      }
                      var j = (0, p.parseDER)(n.slice(f, f + 2 + n[f + 1]));
                      f += 74;
                      var L = n.slice(f, f + 20),
                        O = u.default.buildEthRawTx(i, j, L),
                        R = O.rawTx,
                        D = O.sigWithV;
                      return {
                        tx: "0x".concat(R),
                        txHash: "0x".concat(u.default.hashTransaction(R)),
                        sig: { v: D.v, r: D.r.toString("hex"), s: D.s.toString("hex") },
                        signer: L
                      };
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/functions/sign.js" }
    ],
    [
      3615,
      {
        "./constants": 3603,
        "./index": 3616,
        "./protocol": 3617,
        "./util": 3625,
        buffer: 2913,
        "hash.js/lib/hash/sha": 3814,
        "js-sha3": 3761
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.getEncodedPayload = r.parseGenericSigningResponse = r.buildGenericSigningMsgRequest = void 0);
                    var n = e("hash.js/lib/hash/sha"),
                      i = e("js-sha3"),
                      o = e("./constants"),
                      s = e("./index"),
                      a = e("./protocol"),
                      c = e("./util");
                    r.buildGenericSigningMsgRequest = function (e) {
                      var u = e.signerPath,
                        l = e.curveType,
                        d = e.hashType,
                        f = e.encodingType,
                        h = void 0 === f ? null : f,
                        p = e.decoder,
                        m = void 0 === p ? null : p,
                        g = e.omitPubkey,
                        y = void 0 !== g && g,
                        b = e.fwConstants,
                        v = e.blsDst,
                        w = void 0 === v ? s.Constants.SIGNING.BLS_DST.BLS_DST_NUL : v,
                        k = b.extraDataFrameSz,
                        E = b.extraDataMaxFrames,
                        T = b.prehashAllowed,
                        x = b.genericSigning,
                        _ = b.varAddrPathSzAllowed,
                        P = x.curveTypes,
                        S = x.encodingTypes,
                        I = x.hashTypes,
                        A = x.baseDataSz,
                        B = x.baseReqSz,
                        C = x.calldataDecoding,
                        j = (0, r.getEncodedPayload)(e.payload, h, S),
                        L = j.encoding,
                        O = j.payloadBuf,
                        R = O,
                        D = O.length,
                        H = A + E * k;
                      if (!D) throw new Error("Payload could not be handled.");
                      if (!(x && k && E && T)) throw new Error("Unsupported. Please update your Lattice firmware.");
                      if (!(0, c.existsIn)(l, P)) throw new Error("Unsupported curve type.");
                      if (!(0, c.existsIn)(d, I)) throw new Error("Unsupported hash type.");
                      var N = m && C && m.length <= C.maxSz,
                        M = N && O.length + m.length <= H;
                      if (N && M) {
                        var F = t.alloc(8 + m.length);
                        F.writeUInt32LE(C.reserved, 0), F.writeUInt32LE(m.length, 4), t.from(m).copy(F, 8), (O = t.concat([O, F]));
                      }
                      if (l === P.ED25519) {
                        if (d !== I.NONE) throw new Error("Signing on ed25519 requires unhashed message");
                        u.forEach(function (e) {
                          if (e < o.HARDENED_OFFSET) throw new Error("Signing on ed25519 requires all signer path indices be hardened.");
                        });
                      } else if (l === P.BLS12_381_G2) {
                        var U = t.alloc(4);
                        U.writeUInt32LE(w), (O = t.concat([U, O])), (D += U.length);
                      }
                      var G = t.alloc(B),
                        K = 0;
                      G.writeUInt32LE(L, K), (K += 4), G.writeUInt8(d, K), (K += 1), G.writeUInt8(l, K), (K += 1);
                      var z = (0, c.buildSignerPathBuf)(u, _);
                      z.copy(G, K), (K += z.length), G.writeUInt8(y ? 1 : 0, K), (K += 1);
                      var V = [],
                        q = null,
                        W = !1;
                      if (O.length > A)
                        if (T && O.length > H) {
                          G.writeUInt16LE(O.length, K), (K += 2), (W = !0);
                          var $ = O.slice(0, D);
                          if (d === I.NONE) throw new Error("Message too large to send and could not be prehashed (hashType=NONE).");
                          if (d === I.KECCAK256) q = t.from((0, i.keccak256)($), "hex");
                          else {
                            if (d !== I.SHA256) throw new Error("Unsupported hash type.");
                            q = t.from((0, n.sha256)().update($).digest("hex"), "hex");
                          }
                        } else {
                          (0, c.splitFrames)(O.slice(A), k).forEach(function (e) {
                            var r = t.alloc(4);
                            r.writeUInt32LE(e.length, 0), V.push(t.concat([r, e]));
                          });
                        }
                      return (
                        W || (G.writeUInt16LE(D, K), (K += 2)),
                        (q || O).copy(G, K),
                        {
                          payload: G,
                          extraDataPayloads: V,
                          schema: a.LatticeSignSchema.generic,
                          curveType: l,
                          encodingType: h,
                          hashType: d,
                          omitPubkey: y,
                          origPayloadBuf: R
                        }
                      );
                    };
                    r.parseGenericSigningResponse = function (e, r, n) {
                      var i = { pubkey: null, sig: null };
                      if (n.curveType === s.Constants.SIGNING.CURVES.SECP256K1) {
                        if (n.omitPubkey) r += 65;
                        else {
                          var o = e.readUInt8(r);
                          if (((r += 1), 2 === o || 3 === o))
                            (i.pubkey = t.alloc(33)), i.pubkey.writeUInt8(o, 0), e.slice(r, r + 32).copy(i.pubkey, 1);
                          else {
                            if (4 !== o) throw new Error("Bad compression byte in signing response.");
                            (i.pubkey = t.alloc(65)), i.pubkey.writeUInt8(o, 0), e.slice(r).copy(i.pubkey, 1);
                          }
                          r += 64;
                        }
                        if (
                          ((i.sig = (0, c.parseDER)(e.slice(r, r + 2 + e[r + 1]))),
                          (i.sig.r = (0, c.fixLen)(i.sig.r, 32)),
                          (i.sig.s = (0, c.fixLen)(i.sig.s, 32)),
                          n.encodingType === s.Constants.SIGNING.ENCODINGS.EVM)
                        ) {
                          var a = (0, c.getV)(n.origPayloadBuf, i);
                          i.sig.v = a.toArrayLike(t);
                        }
                      } else if (n.curveType === s.Constants.SIGNING.CURVES.ED25519)
                        n.omitPubkey || ((i.pubkey = t.alloc(32)), e.slice(r, r + 32).copy(i.pubkey)),
                          (r += 32),
                          (i.sig = { r: e.slice(r, r + 32), s: e.slice(r + 32, r + 64) });
                      else {
                        if (n.curveType !== s.Constants.SIGNING.CURVES.BLS12_381_G2) throw new Error("Unsupported curve.");
                        n.omitPubkey || ((i.pubkey = t.alloc(48)), e.slice(r, r + 48).copy(i.pubkey)),
                          (r += 48),
                          (i.sig = t.alloc(96)),
                          e.slice(r, r + 96).copy(i.sig);
                      }
                      return i;
                    };
                    r.getEncodedPayload = function (e, r, n) {
                      if ((r || (r = s.Constants.SIGNING.ENCODINGS.NONE), !(0, c.existsIn)(r, n)))
                        throw new Error("Encoding not supported by Lattice firmware. You may want to update.");
                      if (!e) throw new Error("No payload included");
                      return {
                        payloadBuf: "string" == typeof e && "0x" === e.slice(0, 2) ? t.from(e.slice(2), "hex") : t.from(e),
                        encoding: r
                      };
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/genericSigning.js" }
    ],
    [
      3616,
      { "./api": 3595, "./calldata/index": 3601, "./client": 3602, "./constants": 3603, "./util": 3625 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.Utils = r.Constants = r.Client = r.Calldata = void 0);
                var o = e("./calldata/index");
                Object.defineProperty(r, "Calldata", {
                  enumerable: !0,
                  get: function () {
                    return o.CALLDATA;
                  }
                });
                var s = e("./client");
                Object.defineProperty(r, "Client", {
                  enumerable: !0,
                  get: function () {
                    return s.Client;
                  }
                });
                var a = e("./constants");
                Object.defineProperty(r, "Constants", {
                  enumerable: !0,
                  get: function () {
                    return a.EXTERNAL;
                  }
                });
                var c = e("./util");
                Object.defineProperty(r, "Utils", {
                  enumerable: !0,
                  get: function () {
                    return c.EXTERNAL;
                  }
                }),
                  i(e("./api"), r);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/index.js" }
    ],
    [
      3617,
      { "./latticeConstants": 3618, "./secureMessages": 3619 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), i(e("./latticeConstants"), r), i(e("./secureMessages"), r);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/protocol/index.js" }
    ],
    [
      3618,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n, i, o, s, a;
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.ProtocolConstants =
                    r.LatticeEncDataSchema =
                    r.LatticeSignBlsDst =
                    r.LatticeSignEncoding =
                    r.LatticeSignCurve =
                    r.LatticeSignHash =
                    r.LatticeSignSchema =
                    r.LatticeGetAddressesFlag =
                    r.LatticeSecureEncryptedRequestType =
                    r.LatticeMsgType =
                    r.LatticeProtocolVersion =
                    r.LatticeSecureMsgType =
                    r.LatticeResponseCode =
                      void 0),
                  (function (e) {
                    (e[(e.success = 0)] = "success"),
                      (e[(e.invalidMsg = 128)] = "invalidMsg"),
                      (e[(e.unsupportedVersion = 129)] = "unsupportedVersion"),
                      (e[(e.deviceBusy = 130)] = "deviceBusy"),
                      (e[(e.userTimeout = 131)] = "userTimeout"),
                      (e[(e.userDeclined = 132)] = "userDeclined"),
                      (e[(e.pairFailed = 133)] = "pairFailed"),
                      (e[(e.pairDisabled = 134)] = "pairDisabled"),
                      (e[(e.permissionDisabled = 135)] = "permissionDisabled"),
                      (e[(e.internalError = 136)] = "internalError"),
                      (e[(e.gceTimeout = 137)] = "gceTimeout"),
                      (e[(e.wrongWallet = 138)] = "wrongWallet"),
                      (e[(e.deviceLocked = 139)] = "deviceLocked"),
                      (e[(e.disabled = 140)] = "disabled"),
                      (e[(e.already = 141)] = "already"),
                      (e[(e.invalidEphemId = 142)] = "invalidEphemId");
                  })((s = r.LatticeResponseCode || (r.LatticeResponseCode = {}))),
                  (function (e) {
                    (e[(e.connect = 1)] = "connect"), (e[(e.encrypted = 2)] = "encrypted");
                  })(r.LatticeSecureMsgType || (r.LatticeSecureMsgType = {})),
                  (function (e) {
                    e[(e.v1 = 1)] = "v1";
                  })(r.LatticeProtocolVersion || (r.LatticeProtocolVersion = {})),
                  (function (e) {
                    (e[(e.response = 0)] = "response"), (e[(e.secure = 2)] = "secure");
                  })(r.LatticeMsgType || (r.LatticeMsgType = {})),
                  (function (e) {
                    (e[(e.finalizePairing = 0)] = "finalizePairing"),
                      (e[(e.getAddresses = 1)] = "getAddresses"),
                      (e[(e.sign = 3)] = "sign"),
                      (e[(e.getWallets = 4)] = "getWallets"),
                      (e[(e.getKvRecords = 7)] = "getKvRecords"),
                      (e[(e.addKvRecords = 8)] = "addKvRecords"),
                      (e[(e.removeKvRecords = 9)] = "removeKvRecords"),
                      (e[(e.fetchEncryptedData = 12)] = "fetchEncryptedData"),
                      (e[(e.test = 13)] = "test");
                  })((a = r.LatticeSecureEncryptedRequestType || (r.LatticeSecureEncryptedRequestType = {}))),
                  (function (e) {
                    (e[(e.none = 0)] = "none"),
                      (e[(e.secp256k1Pubkey = 3)] = "secp256k1Pubkey"),
                      (e[(e.ed25519Pubkey = 4)] = "ed25519Pubkey"),
                      (e[(e.bls12_381Pubkey = 5)] = "bls12_381Pubkey");
                  })(r.LatticeGetAddressesFlag || (r.LatticeGetAddressesFlag = {})),
                  (function (e) {
                    (e[(e.bitcoin = 0)] = "bitcoin"),
                      (e[(e.ethereum = 1)] = "ethereum"),
                      (e[(e.ethereumMsg = 3)] = "ethereumMsg"),
                      (e[(e.extraData = 4)] = "extraData"),
                      (e[(e.generic = 5)] = "generic");
                  })(r.LatticeSignSchema || (r.LatticeSignSchema = {})),
                  (function (e) {
                    (e[(e.none = 0)] = "none"), (e[(e.keccak256 = 1)] = "keccak256"), (e[(e.sha256 = 2)] = "sha256");
                  })(r.LatticeSignHash || (r.LatticeSignHash = {})),
                  (function (e) {
                    (e[(e.secp256k1 = 0)] = "secp256k1"), (e[(e.ed25519 = 1)] = "ed25519"), (e[(e.bls12_381 = 2)] = "bls12_381");
                  })(r.LatticeSignCurve || (r.LatticeSignCurve = {})),
                  (function (e) {
                    (e[(e.none = 1)] = "none"),
                      (e[(e.solana = 2)] = "solana"),
                      (e[(e.evm = 4)] = "evm"),
                      (e[(e.eth_deposit = 5)] = "eth_deposit");
                  })(r.LatticeSignEncoding || (r.LatticeSignEncoding = {})),
                  (function (e) {
                    (e[(e.NUL = 1)] = "NUL"), (e[(e.POP = 2)] = "POP");
                  })(r.LatticeSignBlsDst || (r.LatticeSignBlsDst = {})),
                  (function (e) {
                    e[(e.eip2335 = 0)] = "eip2335";
                  })(r.LatticeEncDataSchema || (r.LatticeEncDataSchema = {})),
                  (r.ProtocolConstants = {
                    aesIv: [109, 121, 115, 101, 99, 114, 101, 116, 112, 97, 115, 115, 119, 111, 114, 100],
                    addrStrLen: 129,
                    pairingStatus: { notPaired: 0, paired: 1 },
                    responseMsg:
                      ((n = {}),
                      (n[s.success] = ""),
                      (n[s.invalidMsg] = "Invalid Request"),
                      (n[s.unsupportedVersion] = "Unsupported Version"),
                      (n[s.deviceBusy] = "Device Busy"),
                      (n[s.userTimeout] = "Timeout waiting for user"),
                      (n[s.userDeclined] = "Request declined by user"),
                      (n[s.pairFailed] = "Pairing failed"),
                      (n[s.pairDisabled] = "Pairing is currently disabled"),
                      (n[s.permissionDisabled] = "Automated signing is currently disabled"),
                      (n[s.internalError] = "Device Error"),
                      (n[s.gceTimeout] = "Device Timeout"),
                      (n[s.wrongWallet] = "Active wallet does not match request"),
                      (n[s.deviceLocked] = "Device Locked"),
                      (n[s.disabled] = "Feature Disabled"),
                      (n[s.already] = "Record already exists on device"),
                      (n[s.invalidEphemId] = "Request failed - needs resync"),
                      n),
                    msgSizes: {
                      header: 8,
                      checksum: 4,
                      secure: {
                        payload: { request: { connect: 66, encrypted: 1733 }, response: { connect: 215, encrypted: 3457 } },
                        data: {
                          request: {
                            connect: 65,
                            encrypted:
                              ((i = { encryptedData: 1728 }),
                              (i[a.finalizePairing] = 99),
                              (i[a.getAddresses] = 54),
                              (i[a.sign] = 1680),
                              (i[a.getWallets] = 0),
                              (i[a.getKvRecords] = 9),
                              (i[a.addKvRecords] = 1391),
                              (i[a.removeKvRecords] = 405),
                              (i[a.fetchEncryptedData] = 1025),
                              (i[a.test] = 506),
                              i)
                          },
                          response: {
                            encrypted:
                              ((o = { encryptedData: 1728 }),
                              (o[a.finalizePairing] = 0),
                              (o[a.getAddresses] = 1290),
                              (o[a.sign] = 1090),
                              (o[a.getWallets] = 142),
                              (o[a.getKvRecords] = 1395),
                              (o[a.addKvRecords] = 0),
                              (o[a.removeKvRecords] = 0),
                              (o[a.fetchEncryptedData] = 1608),
                              (o[a.test] = 1646),
                              o)
                          }
                        }
                      }
                    }
                  });
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/protocol/latticeConstants.js" }
    ],
    [
      3619,
      { "../shared/functions": 3621, "../shared/validators": 3624, "../util": 3625, "./latticeConstants": 3618, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      i =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.encryptedSecureRequest = r.connectSecureRequest = void 0);
                    var o = e("./latticeConstants"),
                      s = e("../util"),
                      a = e("../shared/functions"),
                      c = e("../shared/validators"),
                      u = o.ProtocolConstants.msgSizes,
                      l = u.secure;
                    function d(e, r, n) {
                      if (4 !== e.length) throw new Error("msgId must be four bytes");
                      if (r !== o.LatticeSecureMsgType.connect && r !== o.LatticeSecureMsgType.encrypted)
                        throw new Error("Invalid Lattice secure request type");
                      var i,
                        a = r === o.LatticeSecureMsgType.connect && n.length === l.payload.request.connect - 1,
                        c = r === o.LatticeSecureMsgType.encrypted && n.length === l.payload.request.encrypted - 1,
                        d = u.header + u.checksum,
                        f = { requestType: r, data: n };
                      if (a) i = l.payload.request.connect;
                      else {
                        if (!c) throw new Error("Invalid Lattice secure request payload size");
                        i = l.payload.request.encrypted;
                      }
                      d += i;
                      var h = {
                          header: { version: o.LatticeProtocolVersion.v1, type: o.LatticeMsgType.secure, id: e, len: i },
                          payload: f
                        },
                        p = t.alloc(d),
                        m = 0;
                      if (
                        (p.writeUInt8(h.header.version, m),
                        (m += 1),
                        p.writeUInt8(h.header.type, m),
                        (m += 1),
                        h.header.id.copy(p, m),
                        (m += h.header.id.length),
                        p.writeUInt16BE(h.header.len, m),
                        (m += 2),
                        p.writeUInt8(h.payload.requestType, m),
                        (m += 1),
                        h.payload.data.copy(p, m),
                        (m += h.payload.data.length),
                        p.writeUInt32BE((0, s.checksum)(p.slice(0, m)), m),
                        (m += 4) !== d)
                      )
                        throw new Error("Failed to build request message");
                      return p;
                    }
                    function f(e) {
                      var t = e.encPayloadData,
                        r = e.requestType,
                        n = e.sharedSecret,
                        i = (0, s.aes256_decrypt)(t, n),
                        o = 65 + l.data.response.encrypted[r],
                        a = { ephemeralPub: i.slice(0, 65), data: i.slice(65, o), checksum: i.readUInt32BE(o) },
                        c = (0, s.checksum)(i.slice(0, o));
                      if (a.checksum !== c) throw new Error("Checksum mismatch in decrypted Lattice data");
                      var u = l.data.response.encrypted[r];
                      if (a.data.length !== u) throw new Error("Incorrect response data returned from Lattice");
                      var d = (0, s.getP256KeyPairFromPub)(a.ephemeralPub);
                      return { decryptedData: a.data, newEphemeralPub: d };
                    }
                    (r.connectSecureRequest = function (e) {
                      var r = e.url,
                        c = e.pubkey;
                      return n(this, void 0, void 0, function () {
                        var e, n, u, f;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return (
                                (e = (function (e) {
                                  var r = t.alloc(l.data.request.connect);
                                  return e.pubkey.copy(r, 0), r;
                                })({ pubkey: c })),
                                (n = (0, s.randomBytes)(4)),
                                (u = d(n, o.LatticeSecureMsgType.connect, e)),
                                [4, (0, a.request)({ url: r, payload: u })]
                              );
                            case 1:
                              if ((f = i.sent()).length !== l.payload.response.connect - 1)
                                throw new Error("Wrong Lattice response message size.");
                              return [2, f];
                          }
                        });
                      });
                    }),
                      (r.encryptedSecureRequest = function (e) {
                        var r = e.data,
                          u = e.requestType,
                          h = e.sharedSecret,
                          p = e.ephemeralPub,
                          m = e.url;
                        return n(this, void 0, void 0, function () {
                          var e, n, g, y;
                          return i(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return (
                                  (e = (0, s.randomBytes)(4)),
                                  (n = (function (e) {
                                    var r = e.data,
                                      n = e.requestType,
                                      i = e.ephemeralPub,
                                      o = e.sharedSecret;
                                    if (r.length > l.data.request.encrypted.encryptedData)
                                      throw new Error("Encrypted request data too large");
                                    (0, c.validateEphemeralPub)(i);
                                    var u = l.data.request.encrypted[n];
                                    if (r.length !== u)
                                      throw new Error("Invalid request datasize (wanted ".concat(u, ", got ").concat(r.length, ")"));
                                    var d = t.alloc(1 + u);
                                    (d[0] = n), r.copy(d, 1);
                                    var f = (0, s.checksum)(d),
                                      h = t.alloc(l.data.request.encrypted.encryptedData);
                                    d.copy(h, 0), h.writeUInt32LE(f, d.length);
                                    var p = (0, s.aes256_encrypt)(h, o),
                                      m = (0, a.getEphemeralId)(o),
                                      g = t.alloc(l.payload.request.encrypted - 1);
                                    return g.writeUInt32LE(m), p.copy(g, 4), g;
                                  })({ data: r, requestType: u, ephemeralPub: p, sharedSecret: h })),
                                  (g = d(e, o.LatticeSecureMsgType.encrypted, n)),
                                  [4, (0, a.request)({ url: m, payload: g })]
                                );
                              case 1:
                                if ((y = i.sent()).length !== l.payload.response.encrypted - 1)
                                  throw new Error("Wrong Lattice response message size.");
                                return [
                                  2,
                                  f({
                                    encPayloadData: y.slice(0, l.data.response.encrypted.encryptedData),
                                    requestType: u,
                                    sharedSecret: h
                                  })
                                ];
                            }
                          });
                        });
                      });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/protocol/secureMessages.js" }
    ],
    [
      3620,
      { "../protocol": 3617 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.LatticeResponseError = void 0);
                var o = e("../protocol"),
                  s = (function (e) {
                    function t(t, r) {
                      var n = this,
                        i = (function (e) {
                          var t = e.responseCode,
                            r = e.errorMessage,
                            n = [];
                          return (
                            t && n.push("".concat(o.ProtocolConstants.responseMsg[t])),
                            r && (n.push("Error Message: "), n.push(r)),
                            n.join("\n")
                          );
                        })({ responseCode: t, errorMessage: r });
                      return (
                        ((n = e.call(this, i) || this).responseCode = t),
                        (n.errorMessage = r),
                        (n.name = "LatticeResponseError"),
                        (n.responseCode = t),
                        (n.errorMessage = r),
                        n
                      );
                    }
                    return i(t, e), t;
                  })(Error);
                r.LatticeResponseError = s;
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/shared/errors.js" }
    ],
    [
      3621,
      {
        "../bitcoin": 3599,
        "../constants": 3603,
        "../ethereum": 3604,
        "../genericSigning": 3615,
        "../util": 3625,
        "./errors": 3620,
        "./predicates": 3622,
        "./validators": 3624,
        buffer: 2913,
        "hash.js/lib/hash/sha": 3814
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__assign) ||
                        function () {
                          return (
                            (n =
                              Object.assign ||
                              function (e) {
                                for (var t, r = 1, n = arguments.length; r < n; r++)
                                  for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                              }),
                            n.apply(this, arguments)
                          );
                        },
                      i =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      o =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        },
                      s =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.getEphemeralId = r.retryWrapper = r.buildRetryWrapper = r.request = r.buildTransaction = void 0);
                    var a = e("hash.js/lib/hash/sha"),
                      c = s(e("../bitcoin")),
                      u = e("../constants"),
                      l = s(e("../ethereum")),
                      d = e("../genericSigning"),
                      f = e("../util"),
                      h = e("./errors"),
                      p = e("./predicates"),
                      m = e("./validators");
                    r.buildTransaction = function (e) {
                      var t = e.data,
                        r = e.currency,
                        i = e.fwConstants;
                      if ("ETH" === r && (0, p.shouldUseEVMLegacyConverter)(i)) {
                        console.log(
                          "Using the legacy ETH signing path. This will soon be deprecated. " + "Please switch to general signing request."
                        );
                        var o = void 0;
                        try {
                          o = l.default.ethConvertLegacyToGenericReq(t);
                        } catch (e) {
                          throw new Error(
                            "Could not convert legacy request. Please switch to a general signing " +
                              "request. See gridplus-sdk docs for more information."
                          );
                        }
                        return (
                          (t = {
                            fwConstants: i,
                            encodingType: u.EXTERNAL.SIGNING.ENCODINGS.EVM,
                            curveType: u.EXTERNAL.SIGNING.CURVES.SECP256K1,
                            hashType: u.EXTERNAL.SIGNING.HASHES.KECCAK256,
                            signerPath: t.signerPath,
                            payload: o
                          }),
                          { requestData: (0, d.buildGenericSigningMsgRequest)(n(n({}, t), { fwConstants: i })), isGeneric: !0 }
                        );
                      }
                      return "ETH" === r
                        ? { requestData: l.default.buildEthereumTxRequest(n(n({}, t), { fwConstants: i })), isGeneric: !1 }
                        : "ETH_MSG" === r
                        ? { requestData: l.default.buildEthereumMsgRequest(n(n({}, t), { fwConstants: i })), isGeneric: !1 }
                        : "BTC" === r
                        ? { requestData: c.default.buildBitcoinTxRequest(n(n({}, t), { fwConstants: i })), isGeneric: !1 }
                        : { requestData: (0, d.buildGenericSigningMsgRequest)(n(n({}, t), { fwConstants: i })), isGeneric: !0 };
                    };
                    r.request = function (e) {
                      var t = e.url,
                        r = e.payload,
                        n = e.timeout,
                        s = void 0 === n ? 6e4 : n;
                      return i(void 0, void 0, void 0, function () {
                        return o(this, function (e) {
                          return [
                            2,
                            (0, f.fetchWithTimeout)(t, {
                              method: "POST",
                              body: JSON.stringify({ data: r }),
                              headers: { "Content-Type": "application/json" },
                              timeout: s
                            })
                              .catch(m.validateRequestError)
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                if (!e || !e.message) throw new Error("Invalid response");
                                if (200 !== e.status) throw new Error("Error code ".concat(e.status, ": ").concat(e.message));
                                var t = (0, f.parseLattice1Response)(e.message),
                                  r = t.data,
                                  n = t.errorMessage,
                                  i = t.responseCode;
                                if (n || i) throw new h.LatticeResponseError(i, n);
                                return r;
                              })
                          ];
                        });
                      });
                    };
                    r.buildRetryWrapper = function (e, t) {
                      return function (i, o) {
                        return (0, r.retryWrapper)({ fn: i, params: n(n({}, o), { client: e }), retries: t, client: e });
                      };
                    };
                    r.retryWrapper = function (e) {
                      var t = e.fn,
                        s = e.params,
                        a = e.retries,
                        c = e.client;
                      return i(void 0, void 0, void 0, function () {
                        return o(this, function (e) {
                          return [
                            2,
                            t(n({}, s)).catch(function (e) {
                              return i(void 0, void 0, void 0, function () {
                                var n, i;
                                return o(this, function (o) {
                                  switch (o.label) {
                                    case 0:
                                      return (
                                        (n = e.errorMessage),
                                        (i = e.responseCode),
                                        (n || i) && a
                                          ? (0, p.isDeviceBusy)(i)
                                            ? [
                                                4,
                                                ((u = 3e3),
                                                new Promise(function (e) {
                                                  return setTimeout(e, u);
                                                }))
                                              ]
                                            : [3, 2]
                                          : [3, 8]
                                      );
                                    case 1:
                                    case 3:
                                    case 5:
                                      return o.sent(), [3, 7];
                                    case 2:
                                      return !(0, p.isWrongWallet)(i) || c.skipRetryOnWrongWallet ? [3, 4] : [4, c.fetchActiveWallet()];
                                    case 4:
                                      return (0, p.isInvalidEphemeralId)(i) ? [4, c.connect(c.deviceId)] : [3, 6];
                                    case 6:
                                    case 8:
                                      throw e;
                                    case 7:
                                      return [2, (0, r.retryWrapper)({ fn: t, params: s, retries: a - 1, client: c })];
                                  }
                                  var u;
                                });
                              });
                            })
                          ];
                        });
                      });
                    };
                    r.getEphemeralId = function (e) {
                      var r = t.from((0, a.sha256)().update(e).digest("hex"), "hex");
                      return parseInt(r.slice(0, 4).toString("hex"), 16);
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/shared/functions.js" }
    ],
    [
      3622,
      { "../protocol": 3617, "./utilities": 3623 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.shouldUseEVMLegacyConverter =
                    r.doesFetchWalletsOnLoad =
                    r.isInvalidEphemeralId =
                    r.isWrongWallet =
                    r.isDeviceBusy =
                      void 0);
                var n = e("../protocol"),
                  i = e("./utilities");
                r.isDeviceBusy = function (e) {
                  return e === n.LatticeResponseCode.deviceBusy || e === n.LatticeResponseCode.gceTimeout;
                };
                r.isWrongWallet = function (e) {
                  return e === n.LatticeResponseCode.wrongWallet;
                };
                r.isInvalidEphemeralId = function (e) {
                  return e === n.LatticeResponseCode.invalidEphemId;
                };
                r.doesFetchWalletsOnLoad = function (e) {
                  return (0, i.isFWSupported)(e, { major: 0, minor: 14, fix: 1 });
                };
                r.shouldUseEVMLegacyConverter = function (e) {
                  return e.genericSigning && e.genericSigning.encodingTypes && e.genericSigning.encodingTypes.EVM;
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/shared/predicates.js" }
    ],
    [
      3623,
      { "../constants": 3603, buffer: 2913 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.getPathStr = r.isFWSupported = r.parseWallets = r.getSharedSecret = r.getPubKeyBytes = void 0);
                    var n = e("../constants");
                    r.getPubKeyBytes = function (e, r) {
                      void 0 === r && (r = !1);
                      var n = e.getPublic().encode("hex"),
                        i = t.from(n, "hex");
                      if (!0 === r) {
                        var o = i.slice(1, 33).reverse(),
                          s = i.slice(33, 65).reverse();
                        return t.concat([i[0], o, s]);
                      }
                      return i;
                    };
                    r.getSharedSecret = function (e, r) {
                      return t.from(e.derive(r.getPublic()).toArray("be", 32));
                    };
                    r.parseWallets = function (e) {
                      var t = 0,
                        r = {
                          internal: { uid: undefined, capabilities: undefined, name: undefined, external: !1 },
                          external: { uid: undefined, capabilities: undefined, name: undefined, external: !0 }
                        };
                      return (r.internal.uid = e.slice(t, t + 32)), (t += 71), (r.external.uid = e.slice(t, t + 32)), r;
                    };
                    r.isFWSupported = function (e, t) {
                      var r = e.major,
                        n = e.minor,
                        i = e.fix,
                        o = t.major,
                        s = t.minor,
                        a = t.fix;
                      return r > o || (r >= o && n > s) || (r >= o && n >= s && i >= a);
                    };
                    r.getPathStr = function (e) {
                      var t = "m";
                      return (
                        e.forEach(function (e) {
                          e >= n.HARDENED_OFFSET ? (t += "/".concat(e - n.HARDENED_OFFSET, "'")) : (t += "/".concat(e));
                        }),
                        t
                      );
                    };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/shared/utilities.js" }
    ],
    [
      3624,
      { "../constants": 3603, "../util": 3625, "lodash/isEmpty": 4056 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.isValid4ByteResponse =
                    r.isValidBlockExplorerResponse =
                    r.validateKvRecord =
                    r.validateKvRecords =
                    r.validateActiveWallets =
                    r.validateKey =
                    r.validateSharedSecret =
                    r.validateEphemeralPub =
                    r.validateConnectedClient =
                    r.validateWallet =
                    r.validateRequestError =
                    r.validateFwVersion =
                    r.validateFwConstants =
                    r.validateBaseUrl =
                    r.validateUrl =
                    r.validateAppName =
                    r.validateDeviceId =
                    r.validateStartPath =
                    r.validateNAddresses =
                    r.validateIsUInt4 =
                      void 0);
                var i = e("../constants"),
                  o = e("../util"),
                  s = n(e("lodash/isEmpty"));
                r.validateIsUInt4 = function (e) {
                  if ("number" != typeof e || !(0, o.isUInt4)(e)) throw new Error("Must be an integer between 0 and 15 inclusive");
                  return e;
                };
                r.validateNAddresses = function (e) {
                  if (!e) throw new Error("The number of addresses is required.");
                  if (e > i.MAX_ADDR) throw new Error("You may only request ".concat(i.MAX_ADDR, " addresses at once."));
                  return e;
                };
                r.validateStartPath = function (e) {
                  if (!e) throw new Error("Start path is required");
                  if (e.length < 1 || e.length > 5) throw new Error("Path must include between 1 and 5 indices");
                  return e;
                };
                r.validateDeviceId = function (e) {
                  if (!e) throw new Error("No device ID has been stored. Please connect with your device ID first.");
                  return e;
                };
                r.validateAppName = function (e) {
                  if (!e) throw new Error("Name is required.");
                  if (e.length < 5 || e.length > 24) throw new Error("Invalid length for name provided. Must be 5-24 characters.");
                  return e;
                };
                r.validateUrl = function (e) {
                  if (!e) throw new Error("URL does not exist. Please reconnect.");
                  try {
                    new URL(e);
                  } catch (e) {
                    throw new Error("Invalid URL provided. Please use a valid URL.");
                  }
                  return e;
                };
                r.validateBaseUrl = function (e) {
                  if (!e) throw new Error("Base URL is required.");
                  try {
                    new URL(e);
                  } catch (e) {
                    throw new Error("Invalid Base URL provided. Please use a valid URL.");
                  }
                  return e;
                };
                r.validateFwConstants = function (e) {
                  if (!e) throw new Error("Firmware constants do not exist. Please reconnect.");
                  return e;
                };
                r.validateFwVersion = function (e) {
                  if (!e) throw new Error("Firmware version does not exist. Please reconnect.");
                  if ("number" != typeof e.fix || "number" != typeof e.minor || "number" != typeof e.major)
                    throw new Error("Firmware version improperly formatted. Please reconnect.");
                  return e;
                };
                r.validateRequestError = function (e) {
                  if ("ECONNABORTED" === e.code && "ETIME" === e.errno)
                    throw new Error("Timeout waiting for device. Please ensure it is connected to the internet and try again in a minute.");
                  throw new Error("Failed to make request to device:\n".concat(e.message));
                };
                r.validateWallet = function (e) {
                  if (!e || null === e) throw new Error("No active wallet.");
                  return e;
                };
                r.validateConnectedClient = function (e) {
                  return {
                    appName: (0, r.validateAppName)(e.getAppName()),
                    ephemeralPub: (0, r.validateEphemeralPub)(e.ephemeralPub),
                    sharedSecret: (0, r.validateSharedSecret)(e.sharedSecret),
                    url: (0, r.validateUrl)(e.url),
                    fwConstants: (0, r.validateFwConstants)(e.getFwConstants()),
                    fwVersion: (0, r.validateFwVersion)(e.getFwVersion()),
                    key: (0, r.validateKey)(e.key)
                  };
                };
                r.validateEphemeralPub = function (e) {
                  if (!e) throw new Error("`ephemeralPub` (ephemeral public key) is required. Please reconnect.");
                  return e;
                };
                r.validateSharedSecret = function (e) {
                  if (!e) throw new Error("Shared secret required. Please reconnect.");
                  return e;
                };
                r.validateKey = function (e) {
                  if (!e) throw new Error("Key is required. Please reconnect.");
                  return e;
                };
                r.validateActiveWallets = function (e) {
                  var t, r, n, o;
                  if (
                    !e ||
                    ((null === (r = null === (t = null == e ? void 0 : e.internal) || void 0 === t ? void 0 : t.uid) || void 0 === r
                      ? void 0
                      : r.equals(i.EMPTY_WALLET_UID)) &&
                      (null === (o = null === (n = null == e ? void 0 : e.external) || void 0 === n ? void 0 : n.uid) || void 0 === o
                        ? void 0
                        : o.equals(i.EMPTY_WALLET_UID)))
                  )
                    throw new Error("No active wallet.");
                  return e;
                };
                r.validateKvRecords = function (e, t) {
                  if (!t || !t.kvActionsAllowed) throw new Error("Unsupported. Please update firmware.");
                  if ("object" != typeof e || Object.keys(e).length < 1)
                    throw new Error("One or more key-value mapping must be provided in `records` param.");
                  if (Object.keys(e).length > t.kvActionMaxNum)
                    throw new Error("Too many keys provided. Please only provide up to ".concat(t.kvActionMaxNum, "."));
                  return e;
                };
                r.validateKvRecord = function (e, t) {
                  var r = e.key,
                    n = e.val;
                  if ("string" != typeof r || String(r).length > t.kvKeyMaxStrSz)
                    throw new Error("Key ".concat(r, " too large. Must be <=").concat(t.kvKeyMaxStrSz, " characters."));
                  if ("string" != typeof n || String(n).length > t.kvValMaxStrSz)
                    throw new Error("Value ".concat(n, " too large. Must be <=").concat(t.kvValMaxStrSz, " characters."));
                  if (0 === String(r).length || 0 === String(n).length) throw new Error("Keys and values must be >0 characters.");
                  if (!i.ASCII_REGEX.test(r) || !i.ASCII_REGEX.test(n)) throw new Error("Unicode characters are not supported.");
                  return { key: r, val: n };
                };
                r.isValidBlockExplorerResponse = function (e) {
                  try {
                    var t = JSON.parse(e.result);
                    return !(0, s.default)(t);
                  } catch (e) {
                    return !1;
                  }
                };
                r.isValid4ByteResponse = function (e) {
                  try {
                    return !(0, s.default)(e.results);
                  } catch (e) {
                    return !1;
                  }
                };
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/shared/validators.js" }
    ],
    [
      3625,
      {
        ".": 3616,
        "./constants": 3603,
        "./protocol": 3617,
        "./shared/validators": 3624,
        "@ethereumjs/tx": 3687,
        "aes-js": 2737,
        "bignumber.js": 3750,
        "bn.js": 2851,
        buffer: 2913,
        "crc-32": 3087,
        elliptic: 3153,
        "hash.js/lib/hash/sha": 3814,
        "js-sha3": 3761,
        "lodash/inRange": 4050,
        "lodash/isInteger": 4059,
        rlp: 3762,
        secp256k1: 3763
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    var n =
                        (this && this.__assign) ||
                        function () {
                          return (
                            (n =
                              Object.assign ||
                              function (e) {
                                for (var t, r = 1, n = arguments.length; r < n; r++)
                                  for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                              }),
                            n.apply(this, arguments)
                          );
                        },
                      i =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
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
                              var t;
                              e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                    ? t
                                    : new r(function (e) {
                                        e(t);
                                      })).then(s, a);
                            }
                            c((n = n.apply(e, t || [])).next());
                          });
                        },
                      o =
                        (this && this.__generator) ||
                        function (e, t) {
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
                                        if (!((i = s.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
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
                        },
                      s =
                        (this && this.__asyncValues) ||
                        function (e) {
                          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                          var t,
                            r = e[Symbol.asyncIterator];
                          return r
                            ? r.call(e)
                            : ((e = "function" == typeof __values ? __values(e) : e[Symbol.iterator]()),
                              (t = {}),
                              n("next"),
                              n("throw"),
                              n("return"),
                              (t[Symbol.asyncIterator] = function () {
                                return this;
                              }),
                              t);
                          function n(r) {
                            t[r] =
                              e[r] &&
                              function (t) {
                                return new Promise(function (n, i) {
                                  (function (e, t, r, n) {
                                    Promise.resolve(n).then(function (t) {
                                      e({ value: t, done: r });
                                    }, t);
                                  })(n, i, (t = e[r](t)).done, t.value);
                                });
                              };
                          }
                        },
                      a =
                        (this && this.__importDefault) ||
                        function (e) {
                          return e && e.__esModule ? e : { default: e };
                        };
                    Object.defineProperty(r, "__esModule", { value: !0 }),
                      (r.EXTERNAL =
                        r.getV =
                        r.generateAppSecret =
                        r.fetchCalldataDecoder =
                        r.fetchWithTimeout =
                        r.selectDefFrom4byteABI =
                        r.isUInt4 =
                        r.randomBytes =
                        r.existsIn =
                        r.isAsciiStr =
                        r.buildSignerPathBuf =
                        r.getP256KeyPairFromPub =
                        r.getP256KeyPair =
                        r.parseDER =
                        r.aes256_decrypt =
                        r.aes256_encrypt =
                        r.fixLen =
                        r.ensureHexBuffer =
                        r.splitFrames =
                        r.isValidAssetPath =
                        r.toPaddedDER =
                        r.checksum =
                        r.parseLattice1Response =
                          void 0);
                    var c,
                      u = e("@ethereumjs/tx"),
                      l = a(e("aes-js")),
                      d = a(e("bignumber.js")),
                      f = e("bn.js"),
                      h = a(e("crc-32")),
                      p = a(e("elliptic")),
                      m = e("hash.js/lib/hash/sha"),
                      g = e("js-sha3"),
                      y = a(e("lodash/inRange")),
                      b = a(e("lodash/isInteger")),
                      v = e("rlp"),
                      w = e("secp256k1"),
                      k = e("."),
                      E = e("./constants"),
                      T = e("./protocol"),
                      x = e("./shared/validators"),
                      _ = E.BIP_CONSTANTS.COINS,
                      P = E.BIP_CONSTANTS.PURPOSES,
                      S = p.default.ec;
                    r.parseLattice1Response = function (e) {
                      var n = { errorMessage: null, data: null },
                        i = t.from(e, "hex"),
                        o = 0,
                        s = i.readUInt8(o);
                      if ((o++, s !== E.VERSION_BYTE)) return (n.errorMessage = "Incorrect protocol version. Please update your SDK"), n;
                      var a = i.readUInt8(o);
                      if ((o++, 0 !== a)) return (n.errorMessage = "Incorrect response from Lattice1"), n;
                      i.readUInt32BE(o), (o += 4);
                      var c = i.readUInt16BE(o);
                      o += 2;
                      var u = i.slice(o, o + c);
                      o += c;
                      var l = u.readUInt8(0);
                      if (l !== T.LatticeResponseCode.success) {
                        var d = T.ProtocolConstants.responseMsg[l];
                        return (n.errorMessage = "[Lattice] ".concat(d || "Unknown Error")), (n.responseCode = l), n;
                      }
                      return (
                        (n.data = u.slice(1, u.length)),
                        i.readUInt32BE(o) !== (0, r.checksum)(i.slice(0, i.length - 4))
                          ? ((n.errorMessage = "Invalid checksum from device response"), (n.data = null), n)
                          : n
                      );
                    };
                    r.checksum = function (e) {
                      return h.default.buf(e) >>> 0;
                    };
                    r.toPaddedDER = function (e) {
                      var r = t.alloc(74);
                      return t.from(e.toDER()).copy(r), r;
                    };
                    r.isValidAssetPath = function (e, t) {
                      var r = [P.ETH, P.BTC_LEGACY, P.BTC_WRAPPED_SEGWIT, P.BTC_SEGWIT],
                        n = [_.ETH, _.BTC, _.BTC_TESTNET];
                      return (
                        !((e[1] === _.BTC || e[1] === _.BTC_TESTNET) && e[0] !== P.BTC_WRAPPED_SEGWIT && !t.allowBtcLegacyAndSegwitAddrs) &&
                        r.indexOf(e[0]) >= 0 &&
                        (n.indexOf(e[1]) >= 0 ||
                          [
                            60, 61, 966, 700, 9006, 9e3, 1007, 553, 178, 137, 37310, 108, 40, 889, 1987, 820, 6060, 1620, 1313114, 76,
                            246529, 246785, 1001, 227, 916, 464, 2221, 344, 73799, 246
                          ].indexOf(e[1] - E.HARDENED_OFFSET) > 0)
                      );
                    };
                    r.splitFrames = function (e, t) {
                      for (var r = [], n = Math.ceil(e.length / t), i = 0, o = 0; o < n; o++) r.push(e.slice(i, i + t)), (i += t);
                      return r;
                    };
                    r.ensureHexBuffer = function (e, r) {
                      void 0 === r && (r = !0);
                      try {
                        if (null === e || (0 === e && !0 === r)) return t.alloc(0);
                        var n =
                          "number" == typeof e ||
                          (function (e) {
                            var t = new d.default(e).toFixed().split(".").join(""),
                              r = new String(e);
                            return t.slice(0, 8) === r.slice(0, 8);
                          })(e);
                        return (
                          (e = n
                            ? "".concat(new d.default(e).toString(16))
                            : "string" == typeof e && "0x" === e.slice(0, 2)
                            ? e.slice(2)
                            : e.toString("hex")).length %
                            2 >
                            0 && (e = "0".concat(e)),
                          "00" !== e || n ? t.from(e, "hex") : t.alloc(0)
                        );
                      } catch (t) {
                        throw new Error("Cannot convert ".concat(e.toString(), " to hex buffer (").concat(t.toString(), ")"));
                      }
                    };
                    r.fixLen = function (e, r) {
                      var n = t.alloc(r);
                      return e.length < r ? (e.copy(n, r - e.length), n) : e.slice(-r);
                    };
                    r.aes256_encrypt = function (e, r) {
                      var n = t.from(T.ProtocolConstants.aesIv),
                        i = new l.default.ModeOfOperation.cbc(r, n),
                        o = e.length % 16 == 0 ? e : l.default.padding.pkcs7.pad(e);
                      return t.from(i.encrypt(o));
                    };
                    r.aes256_decrypt = function (e, r) {
                      var n = t.from(T.ProtocolConstants.aesIv),
                        i = new l.default.ModeOfOperation.cbc(r, n);
                      return t.from(i.decrypt(e));
                    };
                    r.parseDER = function (e) {
                      if (48 !== e[0] || 2 !== e[2]) throw new Error("Failed to decode DER signature");
                      var t = 3,
                        r = e[t];
                      t++;
                      var n = e.slice(t, t + r);
                      if (2 !== e[(t += r)]) throw new Error("Failed to decode DER signature");
                      var i = e[++t];
                      return t++, { r: n, s: e.slice(t, t + i) };
                    };
                    r.getP256KeyPair = function (e) {
                      return c === undefined && (c = new S("p256")), c.keyFromPrivate(e, "hex");
                    };
                    r.getP256KeyPairFromPub = function (e) {
                      return c === undefined && (c = new S("p256")), c.keyFromPublic(e, "hex");
                    };
                    r.buildSignerPathBuf = function (e, r) {
                      var n = t.alloc(24),
                        i = 0;
                      if (r && e.length > 5) throw new Error("Signer path must be <=5 indices.");
                      if (!r && 5 !== e.length)
                        throw new Error("Your Lattice firmware only supports 5-index derivation paths. Please upgrade.");
                      n.writeUInt32LE(e.length, i), (i += 4);
                      for (var o = 0; o < 5; o++) o < e.length ? n.writeUInt32LE(e[o], i) : n.writeUInt32LE(0, i), (i += 4);
                      return n;
                    };
                    r.isAsciiStr = function (e, t) {
                      if ((void 0 === t && (t = !1), "string" != typeof e)) return !1;
                      for (var r = t ? [32, 10] : [], n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        if (r.indexOf(i) < 0 && (i < 32 || i > 127)) return !1;
                      }
                      return !0;
                    };
                    r.existsIn = function (e, t) {
                      return Object.keys(t).some(function (r) {
                        return t[r] === e;
                      });
                    };
                    r.randomBytes = function (e) {
                      for (var r = t.alloc(e), n = 0; n < e; n++) r[n] = Math.round(255 * Math.random());
                      return r;
                    };
                    function I(e) {
                      return i(this, void 0, void 0, function () {
                        var t, r;
                        return o(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                n.trys.push([0, 2, , 3]),
                                [
                                  4,
                                  fetch(E.EXTERNAL_NETWORKS_BY_CHAIN_ID_URL).then(function (e) {
                                    return e.json();
                                  })
                                ]
                              );
                            case 1:
                              return (t = n.sent()) ? [2, t[e]] : [2, undefined];
                            case 2:
                              return (r = n.sent()), console.warn("Fetching external networks failed.\n", r), [3, 3];
                            case 3:
                              return [2];
                          }
                        });
                      });
                    }
                    function A(e, t) {
                      var r;
                      if (
                        (e.length > 1 && console.warn("WARNING: There are multiple results. Using the first one."),
                        e
                          .sort(function (e, t) {
                            return new Date(e.created_at).getTime() - new Date(t.created_at).getTime();
                          })
                          .find(function (e) {
                            try {
                              return !!(r = k.Calldata.EVM.parsers.parseCanonicalName(t, e.text_signature));
                            } catch (e) {
                              return !1;
                            }
                          }),
                        r)
                      )
                        return r;
                      throw new Error("Could not find definition for selector");
                    }
                    function B(e, t) {
                      return i(this, void 0, void 0, function () {
                        var r, n, i, s, a, c, u;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              return (
                                o.trys.push([0, 11, , 12]),
                                globalThis.caches && globalThis.Request ? [4, caches.open("gp-calldata")] : [3, 9]
                              );
                            case 1:
                              return (r = o.sent()), (n = new Request(e, t)), [4, r.match(n)];
                            case 2:
                              return (i = o.sent()) ? [2, i] : [3, 3];
                            case 3:
                              return [4, fetch(n, t)];
                            case 4:
                              return (s = o.sent()), (a = s.clone()), [4, s.json()];
                            case 5:
                              return (
                                (c = o.sent()),
                                s.ok && ((0, x.isValidBlockExplorerResponse)(c) || (0, x.isValid4ByteResponse)(c))
                                  ? [4, r.put(n, a)]
                                  : [3, 7]
                              );
                            case 6:
                              return o.sent(), [2, r.match(n, t)];
                            case 7:
                              return [2, s];
                            case 8:
                              return [3, 10];
                            case 9:
                              return [2, fetch(e, t)];
                            case 10:
                              return [3, 12];
                            case 11:
                              throw ((u = o.sent()), console.error(u), u);
                            case 12:
                              return [2];
                          }
                        });
                      });
                    }
                    function C(e, t) {
                      return i(this, void 0, void 0, function () {
                        var r;
                        return o(this, function (n) {
                          return (
                            (r = (function (e) {
                              var t = e.supportedChain,
                                r = e.address,
                                n = t.baseUrl,
                                i = t.apiRoute;
                              return "".concat(n, "/").concat(i, "&address=").concat(r) + "";
                            })({ address: e, supportedChain: t })),
                            [
                              2,
                              B(r)
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  if (e && e.result) return JSON.parse(e.result);
                                  throw new Error("Server response was malformed");
                                })
                                .catch(function () {
                                  throw new Error("Fetching data from external network failed");
                                })
                            ]
                          );
                        });
                      });
                    }
                    function j(e) {
                      return i(this, void 0, void 0, function () {
                        var t;
                        return o(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                (t = "https://www.4byte.directory/api/v1/signatures/?hex_signature=0x".concat(e)),
                                [
                                  4,
                                  fetch(t)
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      if (e && e.results) return e.results;
                                      throw new Error("No results found");
                                    })
                                    .catch(function (e) {
                                      throw new Error("Fetching data from 4byte failed: ".concat(e.message));
                                    })
                                ]
                              );
                            case 1:
                              return [2, r.sent()];
                          }
                        });
                      });
                    }
                    function L(e) {
                      return t.from((0, v.encode)(e));
                    }
                    function O(e, r) {
                      var n, a, c, u;
                      return i(this, void 0, void 0, function () {
                        var i, l, d, f, h, p, m, g, y, b, v, w, E, T;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              return [4, R((i = k.Calldata.EVM.processors.getNestedCalldata(e, r)))];
                            case 1:
                              (l = o.sent()), (o.label = 2);
                            case 2:
                              o.trys.push([2, 22, 23, 28]), (d = s(l.entries())), (o.label = 3);
                            case 3:
                              return [4, d.next()];
                            case 4:
                              if ((f = o.sent()).done) return [3, 21];
                              if (((h = f.value[0]), !Array.isArray(l[h]) || "string" == typeof l[h][0])) return [3, 18];
                              o.label = 5;
                            case 5:
                              o.trys.push([5, 11, 12, 17]), (c = void 0), (p = s(l[h].entries())), (o.label = 6);
                            case 6:
                              return [4, p.next()];
                            case 7:
                              return (m = o.sent()).done
                                ? [3, 10]
                                : ((g = m.value[0]),
                                  null === l[h][g] ? [3, 9] : ((y = l[h]), (b = g), [4, O(l[h][g], t.from(i[h][g].slice(2), "hex"))]));
                            case 8:
                              (y[b] = o.sent()), (o.label = 9);
                            case 9:
                              return [3, 6];
                            case 10:
                              return [3, 17];
                            case 11:
                              return (v = o.sent()), (c = { error: v }), [3, 17];
                            case 12:
                              return o.trys.push([12, , 15, 16]), m && !m.done && (u = p.return) ? [4, u.call(p)] : [3, 14];
                            case 13:
                              o.sent(), (o.label = 14);
                            case 14:
                              return [3, 16];
                            case 15:
                              if (c) throw c.error;
                              return [7];
                            case 16:
                              return [7];
                            case 17:
                              return [3, 20];
                            case 18:
                              return null === l[h] ? [3, 20] : ((w = l), (E = h), [4, O(l[h], t.from(i[h].slice(2), "hex"))]);
                            case 19:
                              (w[E] = o.sent()), (o.label = 20);
                            case 20:
                              return [3, 3];
                            case 21:
                              return [3, 28];
                            case 22:
                              return (T = o.sent()), (n = { error: T }), [3, 28];
                            case 23:
                              return o.trys.push([23, , 26, 27]), f && !f.done && (a = d.return) ? [4, a.call(d)] : [3, 25];
                            case 24:
                              o.sent(), (o.label = 25);
                            case 25:
                              return [3, 27];
                            case 26:
                              if (n) throw n.error;
                              return [7];
                            case 27:
                              return [7];
                            case 28:
                              return [2, k.Calldata.EVM.processors.replaceNestedDefs(e, l)];
                          }
                        });
                      });
                    }
                    function R(e) {
                      var t, r, n, a, c, u;
                      return i(this, void 0, void 0, function () {
                        var i, l, d, f, h, p, m, g, y, b, v, w, k, E, T;
                        return o(this, function (o) {
                          switch (o.label) {
                            case 0:
                              (i = []), (o.label = 1);
                            case 1:
                              o.trys.push([1, 26, 27, 32]), (t = s(e)), (o.label = 2);
                            case 2:
                              return [4, t.next()];
                            case 3:
                              if ((r = o.sent()).done) return [3, 25];
                              if (null === (l = r.value)) return [3, 23];
                              if (!Array.isArray(l)) return [3, 19];
                              (d = []), (f = !0), (o.label = 4);
                            case 4:
                              o.trys.push([4, 12, 13, 18]), (c = void 0), (h = s(l)), (o.label = 5);
                            case 5:
                              return [4, h.next()];
                            case 6:
                              if ((p = o.sent()).done) return [3, 11];
                              (m = p.value), (o.label = 7);
                            case 7:
                              return o.trys.push([7, 9, , 10]), [4, j((g = m.slice(2, 10)))];
                            case 8:
                              return (y = o.sent()), (b = A(y, g)), d.push(b), [3, 10];
                            case 9:
                              return o.sent(), (f = !1), d.push(null), [3, 10];
                            case 10:
                              return [3, 5];
                            case 11:
                              return [3, 18];
                            case 12:
                              return (v = o.sent()), (c = { error: v }), [3, 18];
                            case 13:
                              return o.trys.push([13, , 16, 17]), p && !p.done && (u = h.return) ? [4, u.call(h)] : [3, 15];
                            case 14:
                              o.sent(), (o.label = 15);
                            case 15:
                              return [3, 17];
                            case 16:
                              if (c) throw c.error;
                              return [7];
                            case 17:
                              return [7];
                            case 18:
                              return f ? i.push(d) : i.push(null), [3, 22];
                            case 19:
                              return o.trys.push([19, 21, , 22]), [4, j((w = l.slice(2, 10)))];
                            case 20:
                              return (k = o.sent()), (E = A(k, w)), i.push(E), [3, 22];
                            case 21:
                              return o.sent(), i.push(null), [3, 22];
                            case 22:
                              return [3, 24];
                            case 23:
                              i.push(null), (o.label = 24);
                            case 24:
                              return [3, 2];
                            case 25:
                              return [3, 32];
                            case 26:
                              return (T = o.sent()), (n = { error: T }), [3, 32];
                            case 27:
                              return o.trys.push([27, , 30, 31]), r && !r.done && (a = t.return) ? [4, a.call(t)] : [3, 29];
                            case 28:
                              o.sent(), (o.label = 29);
                            case 29:
                              return [3, 31];
                            case 30:
                              if (n) throw n.error;
                              return [7];
                            case 31:
                              return [7];
                            case 32:
                              return [2, i];
                          }
                        });
                      });
                    }
                    function D(e, r, n, s) {
                      return (
                        void 0 === s && (s = !0),
                        i(this, void 0, void 0, function () {
                          var i, a, c, u, l, d, f, h, p, m, g, y, b, v;
                          return o(this, function (o) {
                            switch (o.label) {
                              case 0:
                                if ((o.trys.push([0, 15, , 16]), !e || e.length < 2))
                                  throw new Error("Data is either undefined or less than two bytes");
                                if (
                                  ((i = "string" == typeof e && "0x" === e.slice(0, 2)),
                                  (a = i ? t.from(e.slice(2), "hex") : t.from(e, "hex")).length < 4)
                                )
                                  throw new Error("Data must contain at least 4 bytes of data to define the selector");
                                return (
                                  (c = t.from(a.slice(0, 4)).toString("hex")),
                                  (u = Number(n)),
                                  (l = E.NETWORKS_BY_CHAIN_ID[u]) ? ((f = l), [3, 3]) : [3, 1]
                                );
                              case 1:
                                return [4, I(u)];
                              case 2:
                                (f = o.sent()), (o.label = 3);
                              case 3:
                                (d = f), (o.label = 4);
                              case 4:
                                return o.trys.push([4, 10, , 11]), d ? [4, C(r, d)] : [3, 8];
                              case 5:
                                return (
                                  (h = o.sent()),
                                  (p = k.Calldata.EVM.parsers.parseSolidityJSONABI(c, h)),
                                  (m = p.def),
                                  s ? [4, O(m, a)] : [3, 7]
                                );
                              case 6:
                                (m = o.sent()), (o.label = 7);
                              case 7:
                                return [2, { abi: h, def: L(m) }];
                              case 8:
                                throw new Error("Chain (id: ".concat(u, ") is not supported"));
                              case 9:
                                return [3, 11];
                              case 10:
                                return (g = o.sent()), console.warn(g.message, "\n", "Falling back to 4byte"), [3, 11];
                              case 11:
                                return [4, j(c)];
                              case 12:
                                return (y = o.sent()), (b = A(y, c)), s ? [4, O(b, a)] : [3, 14];
                              case 13:
                                (b = o.sent()), (o.label = 14);
                              case 14:
                                return [2, { abi: y, def: L(b) }];
                              case 15:
                                return (v = o.sent()), console.warn("Fetching calldata failed: ".concat(v.message)), [3, 16];
                              case 16:
                                return [2, { def: null, abi: null }];
                            }
                          });
                        })
                      );
                    }
                    (r.isUInt4 = function (e) {
                      return (0, b.default)(e) && (0, y.default)(e, 0, 16);
                    }),
                      (r.selectDefFrom4byteABI = A),
                      (r.fetchWithTimeout = function (e, t) {
                        return i(this, void 0, void 0, function () {
                          var r, i, s, a, c;
                          return o(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return (
                                  (r = t.timeout),
                                  (i = void 0 === r ? 8e3 : r),
                                  (s = new AbortController()),
                                  (a = setTimeout(function () {
                                    return s.abort();
                                  }, i)),
                                  [4, fetch(e, n(n({}, t), { signal: s.signal }))]
                                );
                              case 1:
                                return (c = o.sent()), clearTimeout(a), [2, c];
                            }
                          });
                        });
                      }),
                      (r.fetchCalldataDecoder = D);
                    r.generateAppSecret = function (e, r, n) {
                      var i = "string" == typeof e ? t.from(e) : e,
                        o = "string" == typeof r ? t.from(r) : r,
                        s = "string" == typeof n ? t.from(n) : n,
                        a = t.concat([i, o, s]);
                      return t.from((0, m.sha256)().update(a).digest("hex"), "hex");
                    };
                    (r.getV = function (e, r) {
                      var n, i, o;
                      if (t.isBuffer(e)) {
                        i = t.from((0, g.keccak256)(e), "hex");
                        try {
                          var s = (0, v.decode)(e);
                          (n = 6 === s.length ? null : new f.BN(s[6])), (o = 0);
                        } catch (t) {
                          try {
                            o = u.TransactionFactory.fromSerializedData(e)._type;
                          } catch (e) {
                            throw new Error("Could not recover V. Bad transaction data.");
                          }
                        }
                      } else
                        (i = (o = e._type) ? e.getMessageToSign(!0) : (0, v.encode)(e.getMessageToSign(!1))),
                          e.supports(u.Capability.EIP155ReplayProtection) && (n = e.common.chainIdBN().toNumber());
                      var a,
                        c = new Uint8Array(t.concat([r.sig.r, r.sig.s])),
                        l = new Uint8Array(r.pubkey),
                        d = (0, w.ecdsaRecover)(c, 0, i, !1),
                        h = (0, w.ecdsaRecover)(c, 1, i, !1),
                        p = t.from(l).toString("hex"),
                        m = t.from(d).toString("hex"),
                        y = t.from(h).toString("hex");
                      if (p === m) a = 0;
                      else {
                        if (p !== y) throw new Error("Failed to recover V parameter. Bad signature or transaction data.");
                        a = 1;
                      }
                      return o ? new f.BN(a) : n ? n.muln(2).addn(35).addn(a) : new f.BN(a).addn(27);
                    }),
                      (r.EXTERNAL = { fetchCalldataDecoder: D, generateAppSecret: r.generateAppSecret, getV: r.getV });
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "eth-lattice-keyring>gridplus-sdk", file: "node_modules/gridplus-sdk/dist/util.js" }
    ],
    [
      3626,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "goerli",
                  chainId: 5,
                  networkId: 5,
                  defaultHardfork: "merge",
                  consensus: { type: "poa", algorithm: "clique", clique: { period: 15, epoch: 3e4 } },
                  comment: "Cross-client PoA test network",
                  url: "https://github.com/goerli/testnet",
                  genesis: {
                    timestamp: "0x5c51a607",
                    gasLimit: 10485760,
                    difficulty: 1,
                    nonce: "0x0000000000000000",
                    extraData:
                      "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                  },
                  hardforks: [
                    { name: "chainstart", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "homestead", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "tangerineWhistle", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "spuriousDragon", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "byzantium", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "constantinople", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "petersburg", block: 0, forkHash: "0xa3f5ab08" },
                    { name: "istanbul", block: 1561651, forkHash: "0xc25efa5c" },
                    { name: "berlin", block: 4460644, forkHash: "0x757a1c47" },
                    { name: "london", block: 5062605, forkHash: "0xb8c6299d" },
                    {
                      "//_comment":
                        "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818",
                      name: "merge",
                      ttd: "10790000",
                      block: 7382819,
                      forkHash: "0xb8c6299d"
                    },
                    { name: "mergeForkIdTransition", block: null, forkHash: null },
                    { name: "shanghai", block: null, forkHash: null }
                  ],
                  bootstrapNodes: [
                    {
                      ip: "51.141.78.53",
                      port: 30303,
                      id: "011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a",
                      location: "",
                      comment: "Upstream bootnode 1"
                    },
                    {
                      ip: "13.93.54.137",
                      port: 30303,
                      id: "176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b",
                      location: "",
                      comment: "Upstream bootnode 2"
                    },
                    {
                      ip: "94.237.54.114",
                      port: 30313,
                      id: "46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291",
                      location: "",
                      comment: "Upstream bootnode 3"
                    },
                    {
                      ip: "18.218.250.66",
                      port: 30313,
                      id: "b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949",
                      location: "",
                      comment: "Upstream bootnode 4"
                    },
                    {
                      ip: "3.11.147.67",
                      port: 30303,
                      id: "a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91",
                      location: "",
                      comment: "Ethereum Foundation bootnode"
                    },
                    {
                      ip: "51.15.116.226",
                      port: 30303,
                      id: "a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd",
                      location: "",
                      comment: "Goerli Initiative bootnode"
                    },
                    {
                      ip: "51.15.119.157",
                      port: 30303,
                      id: "807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33",
                      location: "",
                      comment: "Goerli Initiative bootnode"
                    },
                    {
                      ip: "51.15.119.157",
                      port: 40303,
                      id: "a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd",
                      location: "",
                      comment: "Goerli Initiative bootnode"
                    }
                  ],
                  dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/chains/goerli.json"
      }
    ],
    [
      3627,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "mainnet",
                  chainId: 1,
                  networkId: 1,
                  defaultHardfork: "merge",
                  consensus: { type: "pow", algorithm: "ethash", ethash: {} },
                  comment: "The Ethereum main chain",
                  url: "https://ethstats.net/",
                  genesis: {
                    gasLimit: 5e3,
                    difficulty: 17179869184,
                    nonce: "0x0000000000000042",
                    extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
                  },
                  hardforks: [
                    { name: "chainstart", block: 0, forkHash: "0xfc64ec04" },
                    { name: "homestead", block: 115e4, forkHash: "0x97c2c34c" },
                    { name: "dao", block: 192e4, forkHash: "0x91d1f948" },
                    { name: "tangerineWhistle", block: 2463e3, forkHash: "0x7a64da13" },
                    { name: "spuriousDragon", block: 2675e3, forkHash: "0x3edd5b10" },
                    { name: "byzantium", block: 437e4, forkHash: "0xa00bc324" },
                    { name: "constantinople", block: 728e4, forkHash: "0x668db0af" },
                    { name: "petersburg", block: 728e4, forkHash: "0x668db0af" },
                    { name: "istanbul", block: 9069e3, forkHash: "0x879d6e30" },
                    { name: "muirGlacier", block: 92e5, forkHash: "0xe029e991" },
                    { name: "berlin", block: 12244e3, forkHash: "0x0eb440f6" },
                    { name: "london", block: 12965e3, forkHash: "0xb715077d" },
                    { name: "arrowGlacier", block: 13773e3, forkHash: "0x20c327fc" },
                    { name: "grayGlacier", block: 1505e4, forkHash: "0xf0afd0e3" },
                    {
                      "//_comment":
                        "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393",
                      name: "merge",
                      ttd: "58750000000000000000000",
                      block: 15537394,
                      forkHash: "0xf0afd0e3"
                    },
                    { name: "mergeForkIdTransition", block: null, forkHash: null },
                    { name: "shanghai", block: null, forkHash: null }
                  ],
                  bootstrapNodes: [
                    {
                      ip: "18.138.108.67",
                      port: 30303,
                      id: "d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666",
                      location: "ap-southeast-1-001",
                      comment: "bootnode-aws-ap-southeast-1-001"
                    },
                    {
                      ip: "3.209.45.79",
                      port: 30303,
                      id: "22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de",
                      location: "us-east-1-001",
                      comment: "bootnode-aws-us-east-1-001"
                    },
                    {
                      ip: "34.255.23.113",
                      port: 30303,
                      id: "ca6de62fce278f96aea6ec5a2daadb877e51651247cb96ee310a318def462913b653963c155a0ef6c7d50048bba6e6cea881130857413d9f50a621546b590758",
                      location: "eu-west-1-001",
                      comment: "bootnode-aws-eu-west-1-001"
                    },
                    {
                      ip: "35.158.244.151",
                      port: 30303,
                      id: "279944d8dcd428dffaa7436f25ca0ca43ae19e7bcf94a8fb7d1641651f92d121e972ac2e8f381414b80cc8e5555811c2ec6e1a99bb009b3f53c4c69923e11bd8",
                      location: "eu-central-1-001",
                      comment: "bootnode-aws-eu-central-1-001"
                    },
                    {
                      ip: "52.187.207.27",
                      port: 30303,
                      id: "8499da03c47d637b20eee24eec3c356c9a2e6148d6fe25ca195c7949ab8ec2c03e3556126b0d7ed644675e78c4318b08691b7b57de10e5f0d40d05b09238fa0a",
                      location: "australiaeast-001",
                      comment: "bootnode-azure-australiaeast-001"
                    },
                    {
                      ip: "191.234.162.198",
                      port: 30303,
                      id: "103858bdb88756c71f15e9b5e09b56dc1be52f0a5021d46301dbbfb7e130029cc9d0d6f73f693bc29b665770fff7da4d34f3c6379fe12721b5d7a0bcb5ca1fc1",
                      location: "brazilsouth-001",
                      comment: "bootnode-azure-brazilsouth-001"
                    },
                    {
                      ip: "52.231.165.108",
                      port: 30303,
                      id: "715171f50508aba88aecd1250af392a45a330af91d7b90701c436b618c86aaa1589c9184561907bebbb56439b8f8787bc01f49a7c77276c58c1b09822d75e8e8",
                      location: "koreasouth-001",
                      comment: "bootnode-azure-koreasouth-001"
                    },
                    {
                      ip: "104.42.217.25",
                      port: 30303,
                      id: "5d6d7cd20d6da4bb83a1d28cadb5d409b64edf314c0335df658c1a54e32c7c4a7ab7823d57c39b6a757556e68ff1df17c748b698544a55cb488b52479a92b60f",
                      location: "westus-001",
                      comment: "bootnode-azure-westus-001"
                    }
                  ],
                  dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/chains/mainnet.json"
      }
    ],
    [
      3628,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "rinkeby",
                  chainId: 4,
                  networkId: 4,
                  defaultHardfork: "london",
                  consensus: { type: "poa", algorithm: "clique", clique: { period: 15, epoch: 3e4 } },
                  comment: "PoA test network",
                  url: "https://www.rinkeby.io",
                  genesis: {
                    timestamp: "0x58ee40ba",
                    gasLimit: 47e5,
                    difficulty: 1,
                    nonce: "0x0000000000000000",
                    extraData:
                      "0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                  },
                  hardforks: [
                    { name: "chainstart", block: 0, forkHash: "0x3b8e0691" },
                    { name: "homestead", block: 1, forkHash: "0x60949295" },
                    { name: "tangerineWhistle", block: 2, forkHash: "0x8bde40dd" },
                    { name: "spuriousDragon", block: 3, forkHash: "0xcb3a64bb" },
                    { name: "byzantium", block: 1035301, forkHash: "0x8d748b57" },
                    { name: "constantinople", block: 3660663, forkHash: "0xe49cab14" },
                    { name: "petersburg", block: 4321234, forkHash: "0xafec6b27" },
                    { name: "istanbul", block: 5435345, forkHash: "0xcbdb8838" },
                    { name: "berlin", block: 8290928, forkHash: "0x6910c8bd" },
                    { name: "london", block: 8897988, forkHash: "0x8e29f2f3" },
                    { name: "merge", block: null, forkHash: null },
                    { name: "shanghai", block: null, forkHash: null }
                  ],
                  bootstrapNodes: [
                    {
                      ip: "52.169.42.101",
                      port: 30303,
                      id: "a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf",
                      location: "",
                      comment: "IE"
                    },
                    {
                      ip: "52.3.158.184",
                      port: 30303,
                      id: "343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8",
                      location: "",
                      comment: "INFURA"
                    },
                    {
                      ip: "159.89.28.211",
                      port: 30303,
                      id: "b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6",
                      location: "",
                      comment: "AKASHA"
                    }
                  ],
                  dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.rinkeby.ethdisco.net"]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/chains/rinkeby.json"
      }
    ],
    [
      3629,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "ropsten",
                  chainId: 3,
                  networkId: 3,
                  defaultHardfork: "merge",
                  consensus: { type: "pow", algorithm: "ethash", ethash: {} },
                  comment: "PoW test network",
                  url: "https://github.com/ethereum/ropsten",
                  genesis: {
                    gasLimit: 16777216,
                    difficulty: 1048576,
                    nonce: "0x0000000000000042",
                    extraData: "0x3535353535353535353535353535353535353535353535353535353535353535"
                  },
                  hardforks: [
                    { name: "chainstart", block: 0, forkHash: "0x30c7ddbc" },
                    { name: "homestead", block: 0, forkHash: "0x30c7ddbc" },
                    { name: "tangerineWhistle", block: 0, forkHash: "0x30c7ddbc" },
                    { name: "spuriousDragon", block: 10, forkHash: "0x63760190" },
                    { name: "byzantium", block: 17e5, forkHash: "0x3ea159c7" },
                    { name: "constantinople", block: 423e4, forkHash: "0x97b544f3" },
                    { name: "petersburg", block: 4939394, forkHash: "0xd6e2149b" },
                    { name: "istanbul", block: 6485846, forkHash: "0x4bc66396" },
                    { name: "muirGlacier", block: 7117117, forkHash: "0x6727ef90" },
                    { name: "berlin", block: 9812189, forkHash: "0xa157d377" },
                    { name: "london", block: 10499401, forkHash: "0x7119b6b3" },
                    {
                      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge",
                      name: "merge",
                      ttd: "50000000000000000",
                      block: null,
                      forkHash: "0x7119b6b3"
                    },
                    { name: "mergeForkIdTransition", block: null, forkHash: null },
                    { name: "shanghai", block: null, forkHash: null }
                  ],
                  bootstrapNodes: [
                    {
                      ip: "52.176.7.10",
                      port: 30303,
                      id: "30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606",
                      location: "",
                      comment: "US-Azure geth"
                    },
                    {
                      ip: "52.176.100.77",
                      port: 30303,
                      id: "865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c",
                      location: "",
                      comment: "US-Azure parity"
                    },
                    {
                      ip: "52.232.243.152",
                      port: 30303,
                      id: "6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f",
                      location: "",
                      comment: "Parity"
                    },
                    {
                      ip: "192.81.208.223",
                      port: 30303,
                      id: "94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09",
                      location: "",
                      comment: "@gpip"
                    }
                  ],
                  dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.ropsten.ethdisco.net"]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/chains/ropsten.json"
      }
    ],
    [
      3630,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "sepolia",
                  chainId: 11155111,
                  networkId: 11155111,
                  defaultHardfork: "merge",
                  consensus: { type: "pow", algorithm: "ethash", ethash: {} },
                  comment: "PoW test network to replace Ropsten",
                  url: "https://github.com/ethereum/go-ethereum/pull/23730",
                  genesis: {
                    timestamp: "0x6159af19",
                    gasLimit: 3e7,
                    difficulty: 131072,
                    nonce: "0x0000000000000000",
                    extraData: "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"
                  },
                  hardforks: [
                    { name: "chainstart", block: 0, forkHash: "0xfe3366e7" },
                    { name: "homestead", block: 0, forkHash: "0xfe3366e7" },
                    { name: "tangerineWhistle", block: 0, forkHash: "0xfe3366e7" },
                    { name: "spuriousDragon", block: 0, forkHash: "0xfe3366e7" },
                    { name: "byzantium", block: 0, forkHash: "0xfe3366e7" },
                    { name: "constantinople", block: 0, forkHash: "0xfe3366e7" },
                    { name: "petersburg", block: 0, forkHash: "0xfe3366e7" },
                    { name: "istanbul", block: 0, forkHash: "0xfe3366e7" },
                    { name: "muirGlacier", block: 0, forkHash: "0xfe3366e7" },
                    { name: "berlin", block: 0, forkHash: "0xfe3366e7" },
                    { name: "london", block: 0, forkHash: "0xfe3366e7" },
                    {
                      "//_comment":
                        "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408",
                      name: "merge",
                      ttd: "17000000000000000",
                      block: 1450409,
                      forkHash: "0xfe3366e7"
                    },
                    { name: "mergeForkIdTransition", block: 1735371, forkHash: "0xb96cbd13" },
                    { name: "shanghai", block: null, timestamp: "1677557088", forkHash: "0xf7f9bc08" }
                  ],
                  bootstrapNodes: [
                    {
                      ip: "18.168.182.86",
                      port: 30303,
                      id: "9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066",
                      location: "",
                      comment: "geth"
                    },
                    {
                      ip: "52.14.151.177",
                      port: 30303,
                      id: "ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7",
                      location: "",
                      comment: "besu"
                    },
                    {
                      ip: "165.22.196.173",
                      port: 30303,
                      id: "ce970ad2e9daa9e14593de84a8b49da3d54ccfdf83cbc4fe519cb8b36b5918ed4eab087dedd4a62479b8d50756b492d5f762367c8d20329a7854ec01547568a6",
                      location: "",
                      comment: "EF"
                    },
                    {
                      ip: "65.108.95.67",
                      port: 30303,
                      id: "075503b13ed736244896efcde2a992ec0b451357d46cb7a8132c0384721742597fc8f0d91bbb40bb52e7d6e66728d36a1fda09176294e4a30cfac55dcce26bc6",
                      location: "",
                      comment: "lodestar"
                    }
                  ],
                  dnsNetworks: ["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/chains/sepolia.json"
      }
    ],
    [
      3631,
      {
        "./chains/goerli.json": 3626,
        "./chains/mainnet.json": 3627,
        "./chains/rinkeby.json": 3628,
        "./chains/ropsten.json": 3629,
        "./chains/sepolia.json": 3630,
        "./eips": 3657,
        "./enums": 3658,
        "./hardforks": 3667,
        "./utils": 3680,
        "@ethereumjs/util": 410,
        buffer: 2913,
        "crc-32": 3087,
        events: 3331
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                (function (t) {
                  (function () {
                    Object.defineProperty(r, "__esModule", { value: !0 }), (r.Common = void 0);
                    const n = e("@ethereumjs/util"),
                      i = e("crc-32"),
                      o = e("events"),
                      s = e("./chains/goerli.json"),
                      a = e("./chains/mainnet.json"),
                      c = e("./chains/rinkeby.json"),
                      u = e("./chains/ropsten.json"),
                      l = e("./chains/sepolia.json"),
                      d = e("./eips"),
                      f = e("./enums"),
                      h = e("./hardforks"),
                      p = e("./utils");
                    class m extends o.EventEmitter {
                      constructor(e) {
                        super(),
                          (this._eips = []),
                          (this._customChains = e.customChains ?? []),
                          (this._chainParams = this.setChain(e.chain)),
                          (this.DEFAULT_HARDFORK = this._chainParams.defaultHardfork ?? f.Hardfork.Merge),
                          (this.HARDFORK_CHANGES = this.hardforks().map((e) => [e.name, h.hardforks[e.name]])),
                          (this._hardfork = this.DEFAULT_HARDFORK),
                          e.hardfork !== undefined && this.setHardfork(e.hardfork),
                          e.eips && this.setEIPs(e.eips);
                      }
                      static custom(e, t = {}) {
                        const r = t.baseChain ?? "mainnet",
                          n = { ...m._getChainParams(r) };
                        if (((n.name = "custom-chain"), "string" != typeof e)) return new m({ chain: { ...n, ...e }, ...t });
                        if (e === f.CustomChain.PolygonMainnet)
                          return m.custom({ name: f.CustomChain.PolygonMainnet, chainId: 137, networkId: 137 }, t);
                        if (e === f.CustomChain.PolygonMumbai)
                          return m.custom({ name: f.CustomChain.PolygonMumbai, chainId: 80001, networkId: 80001 }, t);
                        if (e === f.CustomChain.ArbitrumRinkebyTestnet)
                          return m.custom({ name: f.CustomChain.ArbitrumRinkebyTestnet, chainId: 421611, networkId: 421611 }, t);
                        if (e === f.CustomChain.ArbitrumOne)
                          return m.custom({ name: f.CustomChain.ArbitrumOne, chainId: 42161, networkId: 42161 }, t);
                        if (e === f.CustomChain.xDaiChain)
                          return m.custom({ name: f.CustomChain.xDaiChain, chainId: 100, networkId: 100 }, t);
                        if (e === f.CustomChain.OptimisticKovan)
                          return m.custom(
                            { name: f.CustomChain.OptimisticKovan, chainId: 69, networkId: 69 },
                            { hardfork: f.Hardfork.Berlin, ...t }
                          );
                        if (e === f.CustomChain.OptimisticEthereum)
                          return m.custom(
                            { name: f.CustomChain.OptimisticEthereum, chainId: 10, networkId: 10 },
                            { hardfork: f.Hardfork.Berlin, ...t }
                          );
                        throw new Error(`Custom chain ${e} not supported`);
                      }
                      static fromGethGenesis(e, { chain: t, eips: r, genesisHash: n, hardfork: i, mergeForkIdPostMerge: o }) {
                        const s = (0, p.parseGethGenesis)(e, t, o),
                          a = new m({ chain: s.name ?? "custom", customChains: [s], eips: r, hardfork: i ?? s.hardfork });
                        return n !== undefined && a.setForkHashes(n), a;
                      }
                      static isSupportedChainId(e) {
                        const t = this._getInitializedChains();
                        return Boolean(t.names[e.toString()]);
                      }
                      static _getChainParams(e, t) {
                        const r = this._getInitializedChains(t);
                        if ("number" == typeof e || "bigint" == typeof e) {
                          if (((e = e.toString()), r.names[e])) {
                            return r[r.names[e]];
                          }
                          throw new Error(`Chain with ID ${e} not supported`);
                        }
                        if (r[e] !== undefined) return r[e];
                        throw new Error(`Chain with name ${e} not supported`);
                      }
                      setChain(e) {
                        if ("number" == typeof e || "bigint" == typeof e || "string" == typeof e)
                          this._chainParams = m._getChainParams(e, this._customChains);
                        else {
                          if ("object" != typeof e) throw new Error("Wrong input format");
                          {
                            if (this._customChains.length > 0)
                              throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
                            const t = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
                            for (const r of t) if (!(r in e)) throw new Error(`Missing required chain parameter: ${r}`);
                            this._chainParams = e;
                          }
                        }
                        for (const e of this.hardforks())
                          if (e.block === undefined) throw new Error("Hardfork cannot have undefined block number");
                        return this._chainParams;
                      }
                      setHardfork(e) {
                        let t = !1;
                        for (const r of this.HARDFORK_CHANGES)
                          r[0] === e && (this._hardfork !== e && ((this._hardfork = e), this.emit("hardforkChanged", e)), (t = !0));
                        if (!t) throw new Error(`Hardfork with name ${e} not supported`);
                      }
                      getHardforkByBlockNumber(e, t, r) {
                        (e = (0, n.toType)(e, n.TypeOutput.BigInt)),
                          (t = (0, n.toType)(t, n.TypeOutput.BigInt)),
                          (r = (0, n.toType)(r, n.TypeOutput.Number));
                        const i = this.hardforks().filter(
                            (e) => null !== e.block || (null !== e.ttd && e.ttd !== undefined) || e.timestamp !== undefined
                          ),
                          o = i.findIndex((e) => null !== e.ttd && e.ttd !== undefined);
                        if (i.slice(o + 1).findIndex((e) => null !== e.ttd && e.ttd !== undefined) >= 0)
                          throw Error("More than one merge hardforks found with ttd specified");
                        let s = i.findIndex((t) => (null !== t.block && t.block > e) || (r !== undefined && Number(t.timestamp) > r));
                        if (-1 === s) s = i.length;
                        else if (0 === s) throw Error("Must have at least one hardfork at block 0");
                        if (r === undefined) {
                          s -= i
                            .slice(0, s)
                            .reverse()
                            .findIndex((e) => null !== e.block || e.ttd !== undefined);
                        }
                        if (((s -= 1), null === i[s].block && i[s].timestamp === undefined))
                          (t === undefined || null === t || BigInt(i[s].ttd) > t) && (s -= 1);
                        else if (o >= 0 && t !== undefined && null !== t) {
                          if (s >= o && BigInt(i[o].ttd) > t)
                            throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
                          if (s < o && BigInt(i[o].ttd) <= t)
                            throw Error("HF determined by block number is lower than the minimum total difficulty HF");
                        }
                        const a = s;
                        for (; s < i.length - 1 && i[s].block === i[s + 1].block && i[s].timestamp === i[s + 1].timestamp; s++);
                        if (r) {
                          if (i.slice(0, a).reduce((e, t) => Math.max(Number(t.timestamp ?? "0"), e), 0) > r)
                            throw Error("Maximum HF determined by timestamp is lower than the block number/ttd HF");
                          if (i.slice(s + 1).reduce((e, t) => Math.min(Number(t.timestamp ?? r), e), r) < r)
                            throw Error("Maximum HF determined by block number/ttd is lower than timestamp HF");
                        }
                        return i[s].name;
                      }
                      setHardforkByBlockNumber(e, t, r) {
                        const n = this.getHardforkByBlockNumber(e, t, r);
                        return this.setHardfork(n), n;
                      }
                      _getHardfork(e) {
                        const t = this.hardforks();
                        for (const r of t) if (r.name === e) return r;
                        return null;
                      }
                      setEIPs(e = []) {
                        for (const t of e) {
                          if (!(t in d.EIPs)) throw new Error(`${t} not supported`);
                          const r = this.gteHardfork(d.EIPs[t].minimumHardfork);
                          if (!r) throw new Error(`${t} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${r}`);
                          if (d.EIPs[t].requiredEIPs !== undefined)
                            for (const r of d.EIPs[t].requiredEIPs)
                              if (!e.includes(r) && !this.isActivatedEIP(r))
                                throw new Error(`${t} requires EIP ${r}, but is not included in the EIP list`);
                        }
                        this._eips = e;
                      }
                      param(e, t) {
                        let r;
                        for (const n of this._eips) if (((r = this.paramByEIP(e, t, n)), r !== undefined)) return r;
                        return this.paramByHardfork(e, t, this._hardfork);
                      }
                      paramByHardfork(e, t, r) {
                        let n = null;
                        for (const i of this.HARDFORK_CHANGES) {
                          if ("eips" in i[1]) {
                            const r = i[1].eips;
                            for (const i of r) {
                              const r = this.paramByEIP(e, t, i);
                              n = "bigint" == typeof r ? r : n;
                            }
                          } else {
                            if (i[1][e] === undefined) throw new Error(`Topic ${e} not defined`);
                            i[1][e][t] !== undefined && (n = i[1][e][t].v);
                          }
                          if (i[0] === r) break;
                        }
                        return BigInt(n ?? 0);
                      }
                      paramByEIP(e, t, r) {
                        if (!(r in d.EIPs)) throw new Error(`${r} not supported`);
                        const n = d.EIPs[r];
                        if (!(e in n)) throw new Error(`Topic ${e} not defined`);
                        if (n[e][t] === undefined) return undefined;
                        const i = n[e][t].v;
                        return BigInt(i);
                      }
                      paramByBlock(e, t, r, n, i) {
                        const o = this.getHardforkByBlockNumber(r, n, i);
                        return this.paramByHardfork(e, t, o);
                      }
                      isActivatedEIP(e) {
                        if (this.eips().includes(e)) return !0;
                        for (const t of this.HARDFORK_CHANGES) {
                          const r = t[1];
                          if (this.gteHardfork(r.name) && "eips" in r && r.eips.includes(e)) return !0;
                        }
                        return !1;
                      }
                      hardforkIsActiveOnBlock(e, t) {
                        (t = (0, n.toType)(t, n.TypeOutput.BigInt)), (e = e ?? this._hardfork);
                        const r = this.hardforkBlock(e);
                        return "bigint" == typeof r && r !== BigInt(0) && t >= r;
                      }
                      activeOnBlock(e) {
                        return this.hardforkIsActiveOnBlock(null, e);
                      }
                      hardforkGteHardfork(e, t) {
                        e = e ?? this._hardfork;
                        const r = this.hardforks();
                        let n = -1,
                          i = -1,
                          o = 0;
                        for (const s of r) s.name === e && (n = o), s.name === t && (i = o), (o += 1);
                        return n >= i && -1 !== i;
                      }
                      gteHardfork(e) {
                        return this.hardforkGteHardfork(null, e);
                      }
                      hardforkBlock(e) {
                        e = e ?? this._hardfork;
                        const t = this._getHardfork(e)?.block;
                        return t === undefined || null === t ? null : BigInt(t);
                      }
                      hardforkTimestamp(e) {
                        e = e ?? this._hardfork;
                        const t = this._getHardfork(e)?.timestamp;
                        return t === undefined || null === t ? null : BigInt(t);
                      }
                      eipBlock(e) {
                        for (const t of this.HARDFORK_CHANGES) {
                          const r = t[1];
                          if ("eips" in r && r.eips.includes(e)) return this.hardforkBlock(t[0]);
                        }
                        return null;
                      }
                      hardforkTTD(e) {
                        e = e ?? this._hardfork;
                        const t = this._getHardfork(e)?.ttd;
                        return t === undefined || null === t ? null : BigInt(t);
                      }
                      isHardforkBlock(e, t) {
                        (e = (0, n.toType)(e, n.TypeOutput.BigInt)), (t = t ?? this._hardfork);
                        const r = this.hardforkBlock(t);
                        return "bigint" == typeof r && r !== BigInt(0) && r === e;
                      }
                      nextHardforkBlockOrTimestamp(e) {
                        e = e ?? this._hardfork;
                        const t = this.hardforks();
                        let r = t.findIndex((t) => t.name === e);
                        if ((e === f.Hardfork.Merge && (r -= 1), r < 0)) return null;
                        let n = t[r].timestamp ?? t[r].block;
                        n = null !== n && n !== undefined ? Number(n) : null;
                        const i = t.slice(r + 1).find((e) => {
                          let t = e.timestamp ?? e.block;
                          return (
                            (t = null !== t && t !== undefined ? Number(t) : null),
                            e.name !== f.Hardfork.Merge && null !== t && t !== undefined && t !== n
                          );
                        });
                        if (i === undefined) return null;
                        const o = i.timestamp ?? i.block;
                        return null === o || o === undefined ? null : BigInt(o);
                      }
                      nextHardforkBlock(e) {
                        e = e ?? this._hardfork;
                        let t = this.hardforkBlock(e);
                        if (null === t && e === f.Hardfork.Merge) {
                          const e = this.hardforks(),
                            r = e.findIndex((e) => null !== e.ttd && e.ttd !== undefined);
                          if (r < 0) throw Error("Merge hardfork should have been found");
                          t = this.hardforkBlock(e[r - 1].name);
                        }
                        if (null === t) return null;
                        return this.hardforks().reduce((e, r) => {
                          const n = BigInt(null === r.block || (r.ttd !== undefined && null !== r.ttd) ? 0 : r.block);
                          return n > t && null === e ? n : e;
                        }, null);
                      }
                      isNextHardforkBlock(e, t) {
                        (e = (0, n.toType)(e, n.TypeOutput.BigInt)), (t = t ?? this._hardfork);
                        const r = this.nextHardforkBlock(t);
                        return null !== r && r === e;
                      }
                      _calcForkHash(e, r) {
                        let o = t.alloc(0),
                          s = 0;
                        for (const r of this.hardforks()) {
                          const { block: n, timestamp: i, name: a } = r;
                          let c = i ?? n;
                          if (((c = null !== c ? Number(c) : null), "number" == typeof c && 0 !== c && c !== s && a !== f.Hardfork.Merge)) {
                            const e = t.from(c.toString(16).padStart(16, "0"), "hex");
                            (o = t.concat([o, e])), (s = c);
                          }
                          if (r.name === e) break;
                        }
                        const a = t.concat([r, o]);
                        return `0x${(0, n.intToBuffer)((0, i.buf)(a) >>> 0).toString("hex")}`;
                      }
                      forkHash(e, t) {
                        e = e ?? this._hardfork;
                        const r = this._getHardfork(e);
                        if (null === r || (null === r?.block && r?.timestamp === undefined && r?.ttd === undefined)) {
                          throw new Error("No fork hash calculation possible for future hardfork");
                        }
                        if (null !== r?.forkHash && r?.forkHash !== undefined) return r.forkHash;
                        if (!t) throw new Error("genesisHash required for forkHash calculation");
                        return this._calcForkHash(e, t);
                      }
                      hardforkForForkHash(e) {
                        const t = this.hardforks().filter((t) => t.forkHash === e);
                        return t.length >= 1 ? t[t.length - 1] : null;
                      }
                      setForkHashes(e) {
                        for (const t of this.hardforks()) {
                          const r = t.timestamp ?? t.block;
                          (null !== t.forkHash && t.forkHash !== undefined) ||
                            ((null === r || r === undefined) && void 0 === t.ttd) ||
                            (t.forkHash = this.forkHash(t.name, e));
                        }
                      }
                      genesis() {
                        return this._chainParams.genesis;
                      }
                      hardforks() {
                        return this._chainParams.hardforks;
                      }
                      bootstrapNodes() {
                        return this._chainParams.bootstrapNodes;
                      }
                      dnsNetworks() {
                        return this._chainParams.dnsNetworks;
                      }
                      hardfork() {
                        return this._hardfork;
                      }
                      chainId() {
                        return BigInt(this._chainParams.chainId);
                      }
                      chainName() {
                        return this._chainParams.name;
                      }
                      networkId() {
                        return BigInt(this._chainParams.networkId);
                      }
                      eips() {
                        return this._eips;
                      }
                      consensusType() {
                        const e = this.hardfork();
                        let t;
                        for (const r of this.HARDFORK_CHANGES) if (("consensus" in r[1] && (t = r[1].consensus.type), r[0] === e)) break;
                        return t ?? this._chainParams.consensus.type;
                      }
                      consensusAlgorithm() {
                        const e = this.hardfork();
                        let t;
                        for (const r of this.HARDFORK_CHANGES)
                          if (("consensus" in r[1] && (t = r[1].consensus.algorithm), r[0] === e)) break;
                        return t ?? this._chainParams.consensus.algorithm;
                      }
                      consensusConfig() {
                        const e = this.hardfork();
                        let t;
                        for (const r of this.HARDFORK_CHANGES)
                          if (("consensus" in r[1] && (t = r[1].consensus[r[1].consensus.algorithm]), r[0] === e)) break;
                        return t ?? this._chainParams.consensus[this.consensusAlgorithm()] ?? {};
                      }
                      copy() {
                        const e = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
                        return e.removeAllListeners(), e;
                      }
                      static _getInitializedChains(e) {
                        const t = {};
                        for (const [e, r] of Object.entries(f.Chain)) t[r] = e.toLowerCase();
                        const r = { mainnet: a, ropsten: u, rinkeby: c, goerli: s, sepolia: l };
                        if (e)
                          for (const n of e) {
                            const { name: e } = n;
                            (t[n.chainId.toString()] = e), (r[e] = n);
                          }
                        return (r.names = t), r;
                      }
                    }
                    r.Common = m;
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/common.js"
      }
    ],
    [
      3632,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-1153",
                  number: 1153,
                  comment: "Transient Storage",
                  url: "https://eips.ethereum.org/EIPS/eip-1153",
                  status: "Review",
                  minimumHardfork: "chainstart",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {
                    tstore: { v: 100, d: "Base fee of the TSTORE opcode" },
                    tload: { v: 100, d: "Base fee of the TLOAD opcode" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/1153.json"
      }
    ],
    [
      3633,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-1559",
                  number: 1559,
                  comment: "Fee market change for ETH 1.0 chain",
                  url: "https://eips.ethereum.org/EIPS/eip-1559",
                  status: "Final",
                  minimumHardfork: "berlin",
                  requiredEIPs: [2930],
                  gasConfig: {
                    baseFeeMaxChangeDenominator: { v: 8, d: "Maximum base fee change denominator" },
                    elasticityMultiplier: { v: 2, d: "Maximum block gas target elasticity" },
                    initialBaseFee: { v: 1e9, d: "Initial base fee on first EIP1559 block" }
                  },
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/1559.json"
      }
    ],
    [
      3634,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-2315",
                  number: 2315,
                  comment: "Simple subroutines for the EVM",
                  url: "https://eips.ethereum.org/EIPS/eip-2315",
                  status: "Draft",
                  minimumHardfork: "istanbul",
                  gasConfig: {},
                  gasPrices: {
                    beginsub: { v: 2, d: "Base fee of the BEGINSUB opcode" },
                    returnsub: { v: 5, d: "Base fee of the RETURNSUB opcode" },
                    jumpsub: { v: 10, d: "Base fee of the JUMPSUB opcode" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/2315.json"
      }
    ],
    [
      3635,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-2537",
                  number: 2537,
                  comment: "BLS12-381 precompiles",
                  url: "https://eips.ethereum.org/EIPS/eip-2537",
                  status: "Draft",
                  minimumHardfork: "chainstart",
                  gasConfig: {},
                  gasPrices: {
                    Bls12381G1AddGas: { v: 600, d: "Gas cost of a single BLS12-381 G1 addition precompile-call" },
                    Bls12381G1MulGas: { v: 12e3, d: "Gas cost of a single BLS12-381 G1 multiplication precompile-call" },
                    Bls12381G2AddGas: { v: 4500, d: "Gas cost of a single BLS12-381 G2 addition precompile-call" },
                    Bls12381G2MulGas: { v: 55e3, d: "Gas cost of a single BLS12-381 G2 multiplication precompile-call" },
                    Bls12381PairingBaseGas: { v: 115e3, d: "Base gas cost of BLS12-381 pairing check" },
                    Bls12381PairingPerPairGas: { v: 23e3, d: "Per-pair gas cost of BLS12-381 pairing check" },
                    Bls12381MapG1Gas: { v: 5500, d: "Gas cost of BLS12-381 map field element to G1" },
                    Bls12381MapG2Gas: { v: 11e4, d: "Gas cost of BLS12-381 map field element to G2" },
                    Bls12381MultiExpGasDiscount: {
                      v: [
                        [1, 1200],
                        [2, 888],
                        [3, 764],
                        [4, 641],
                        [5, 594],
                        [6, 547],
                        [7, 500],
                        [8, 453],
                        [9, 438],
                        [10, 423],
                        [11, 408],
                        [12, 394],
                        [13, 379],
                        [14, 364],
                        [15, 349],
                        [16, 334],
                        [17, 330],
                        [18, 326],
                        [19, 322],
                        [20, 318],
                        [21, 314],
                        [22, 310],
                        [23, 306],
                        [24, 302],
                        [25, 298],
                        [26, 294],
                        [27, 289],
                        [28, 285],
                        [29, 281],
                        [30, 277],
                        [31, 273],
                        [32, 269],
                        [33, 268],
                        [34, 266],
                        [35, 265],
                        [36, 263],
                        [37, 262],
                        [38, 260],
                        [39, 259],
                        [40, 257],
                        [41, 256],
                        [42, 254],
                        [43, 253],
                        [44, 251],
                        [45, 250],
                        [46, 248],
                        [47, 247],
                        [48, 245],
                        [49, 244],
                        [50, 242],
                        [51, 241],
                        [52, 239],
                        [53, 238],
                        [54, 236],
                        [55, 235],
                        [56, 233],
                        [57, 232],
                        [58, 231],
                        [59, 229],
                        [60, 228],
                        [61, 226],
                        [62, 225],
                        [63, 223],
                        [64, 222],
                        [65, 221],
                        [66, 220],
                        [67, 219],
                        [68, 219],
                        [69, 218],
                        [70, 217],
                        [71, 216],
                        [72, 216],
                        [73, 215],
                        [74, 214],
                        [75, 213],
                        [76, 213],
                        [77, 212],
                        [78, 211],
                        [79, 211],
                        [80, 210],
                        [81, 209],
                        [82, 208],
                        [83, 208],
                        [84, 207],
                        [85, 206],
                        [86, 205],
                        [87, 205],
                        [88, 204],
                        [89, 203],
                        [90, 202],
                        [91, 202],
                        [92, 201],
                        [93, 200],
                        [94, 199],
                        [95, 199],
                        [96, 198],
                        [97, 197],
                        [98, 196],
                        [99, 196],
                        [100, 195],
                        [101, 194],
                        [102, 193],
                        [103, 193],
                        [104, 192],
                        [105, 191],
                        [106, 191],
                        [107, 190],
                        [108, 189],
                        [109, 188],
                        [110, 188],
                        [111, 187],
                        [112, 186],
                        [113, 185],
                        [114, 185],
                        [115, 184],
                        [116, 183],
                        [117, 182],
                        [118, 182],
                        [119, 181],
                        [120, 180],
                        [121, 179],
                        [122, 179],
                        [123, 178],
                        [124, 177],
                        [125, 176],
                        [126, 176],
                        [127, 175],
                        [128, 174]
                      ],
                      d: "Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"
                    }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/2537.json"
      }
    ],
    [
      3636,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-2565",
                  number: 2565,
                  comment: "ModExp gas cost",
                  url: "https://eips.ethereum.org/EIPS/eip-2565",
                  status: "Final",
                  minimumHardfork: "byzantium",
                  gasConfig: {},
                  gasPrices: { modexpGquaddivisor: { v: 3, d: "Gquaddivisor from modexp precompile for gas calculation" } },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/2565.json"
      }
    ],
    [
      3637,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-2718",
                  comment: "Typed Transaction Envelope",
                  url: "https://eips.ethereum.org/EIPS/eip-2718",
                  status: "Final",
                  minimumHardfork: "chainstart",
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/2718.json"
      }
    ],
    [
      3638,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-2929",
                  comment: "Gas cost increases for state access opcodes",
                  url: "https://eips.ethereum.org/EIPS/eip-2929",
                  status: "Final",
                  minimumHardfork: "chainstart",
                  gasConfig: {},
                  gasPrices: {
                    coldsload: { v: 2100, d: "Gas cost of the first read of storage from a given location (per transaction)" },
                    coldaccountaccess: { v: 2600, d: "Gas cost of the first read of a given address (per transaction)" },
                    warmstorageread: { v: 100, d: "Gas cost of reading storage locations which have already loaded 'cold'" },
                    sstoreCleanGasEIP2200: { v: 2900, d: "Once per SSTORE operation from clean non-zero to something else" },
                    sstoreNoopGasEIP2200: { v: 100, d: "Once per SSTORE operation if the value doesn't change" },
                    sstoreDirtyGasEIP2200: { v: 100, d: "Once per SSTORE operation if a dirty value is changed" },
                    sstoreInitRefundEIP2200: { v: 19900, d: "Once per SSTORE operation for resetting to the original zero value" },
                    sstoreCleanRefundEIP2200: { v: 4900, d: "Once per SSTORE operation for resetting to the original non-zero value" },
                    call: { v: 0, d: "Base fee of the CALL opcode" },
                    callcode: { v: 0, d: "Base fee of the CALLCODE opcode" },
                    delegatecall: { v: 0, d: "Base fee of the DELEGATECALL opcode" },
                    staticcall: { v: 0, d: "Base fee of the STATICCALL opcode" },
                    balance: { v: 0, d: "Base fee of the BALANCE opcode" },
                    extcodesize: { v: 0, d: "Base fee of the EXTCODESIZE opcode" },
                    extcodecopy: { v: 0, d: "Base fee of the EXTCODECOPY opcode" },
                    extcodehash: { v: 0, d: "Base fee of the EXTCODEHASH opcode" },
                    sload: { v: 0, d: "Base fee of the SLOAD opcode" },
                    sstore: { v: 0, d: "Base fee of the SSTORE opcode" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/2929.json"
      }
    ],
    [
      3639,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-2930",
                  comment: "Optional access lists",
                  url: "https://eips.ethereum.org/EIPS/eip-2930",
                  status: "Final",
                  minimumHardfork: "istanbul",
                  requiredEIPs: [2718, 2929],
                  gasConfig: {},
                  gasPrices: {
                    accessListStorageKeyCost: { v: 1900, d: "Gas cost per storage key in an Access List transaction" },
                    accessListAddressCost: { v: 2400, d: "Gas cost per storage key in an Access List transaction" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/2930.json"
      }
    ],
    [
      3640,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3074",
                  number: 3074,
                  comment: "AUTH and AUTHCALL opcodes",
                  url: "https://eips.ethereum.org/EIPS/eip-3074",
                  status: "Review",
                  minimumHardfork: "london",
                  gasConfig: {},
                  gasPrices: {
                    auth: { v: 3100, d: "Gas cost of the AUTH opcode" },
                    authcall: { v: 0, d: "Gas cost of the AUTHCALL opcode" },
                    authcallValueTransfer: { v: 6700, d: "Paid for CALL when the value transfer is non-zero" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3074.json"
      }
    ],
    [
      3641,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3198",
                  number: 3198,
                  comment: "BASEFEE opcode",
                  url: "https://eips.ethereum.org/EIPS/eip-3198",
                  status: "Final",
                  minimumHardfork: "london",
                  gasConfig: {},
                  gasPrices: { basefee: { v: 2, d: "Gas cost of the BASEFEE opcode" } },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3198.json"
      }
    ],
    [
      3642,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3529",
                  comment: "Reduction in refunds",
                  url: "https://eips.ethereum.org/EIPS/eip-3529",
                  status: "Final",
                  minimumHardfork: "berlin",
                  requiredEIPs: [2929],
                  gasConfig: {
                    maxRefundQuotient: {
                      v: 5,
                      d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
                    }
                  },
                  gasPrices: {
                    selfdestructRefund: { v: 0, d: "Refunded following a selfdestruct operation" },
                    sstoreClearRefundEIP2200: { v: 4800, d: "Once per SSTORE operation for clearing an originally existing storage slot" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3529.json"
      }
    ],
    [
      3643,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3540",
                  number: 3540,
                  comment: "EVM Object Format (EOF) v1",
                  url: "https://eips.ethereum.org/EIPS/eip-3540",
                  status: "Review",
                  minimumHardfork: "london",
                  requiredEIPs: [3541],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3540.json"
      }
    ],
    [
      3644,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3541",
                  comment: "Reject new contracts starting with the 0xEF byte",
                  url: "https://eips.ethereum.org/EIPS/eip-3541",
                  status: "Final",
                  minimumHardfork: "berlin",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3541.json"
      }
    ],
    [
      3645,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3554",
                  comment: "Reduction in refunds",
                  url: "Difficulty Bomb Delay to December 1st 2021",
                  status: "Final",
                  minimumHardfork: "muirGlacier",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: { difficultyBombDelay: { v: 95e5, d: "the amount of blocks to delay the difficulty bomb with" } }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3554.json"
      }
    ],
    [
      3646,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3607",
                  number: 3607,
                  comment: "Reject transactions from senders with deployed code",
                  url: "https://eips.ethereum.org/EIPS/eip-3607",
                  status: "Final",
                  minimumHardfork: "chainstart",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3607.json"
      }
    ],
    [
      3647,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3651",
                  number: 3198,
                  comment: "Warm COINBASE",
                  url: "https://eips.ethereum.org/EIPS/eip-3651",
                  status: "Review",
                  minimumHardfork: "london",
                  requiredEIPs: [2929],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3651.json"
      }
    ],
    [
      3648,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3670",
                  number: 3670,
                  comment: "EOF - Code Validation",
                  url: "https://eips.ethereum.org/EIPS/eip-3670",
                  status: "Review",
                  minimumHardfork: "london",
                  requiredEIPs: [3540],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3670.json"
      }
    ],
    [
      3649,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3675",
                  number: 3675,
                  comment: "Upgrade consensus to Proof-of-Stake",
                  url: "https://eips.ethereum.org/EIPS/eip-3675",
                  status: "Final",
                  minimumHardfork: "london",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3675.json"
      }
    ],
    [
      3650,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3855",
                  number: 3855,
                  comment: "PUSH0 instruction",
                  url: "https://eips.ethereum.org/EIPS/eip-3855",
                  status: "Review",
                  minimumHardfork: "chainstart",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: { push0: { v: 2, d: "Base fee of the PUSH0 opcode" } },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3855.json"
      }
    ],
    [
      3651,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-3860",
                  number: 3860,
                  comment: "Limit and meter initcode",
                  url: "https://eips.ethereum.org/EIPS/eip-3860",
                  status: "Review",
                  minimumHardfork: "spuriousDragon",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: { initCodeWordCost: { v: 2, d: "Gas to pay for each word (32 bytes) of initcode when creating a contract" } },
                  vm: { maxInitCodeSize: { v: 49152, d: "Maximum length of initialization code when creating a contract" } },
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/3860.json"
      }
    ],
    [
      3652,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-4345",
                  number: 4345,
                  comment: "Difficulty Bomb Delay to June 2022",
                  url: "https://eips.ethereum.org/EIPS/eip-4345",
                  status: "Final",
                  minimumHardfork: "london",
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: { difficultyBombDelay: { v: 107e5, d: "the amount of blocks to delay the difficulty bomb with" } }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/4345.json"
      }
    ],
    [
      3653,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-4399",
                  number: 4399,
                  comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
                  url: "https://eips.ethereum.org/EIPS/eip-4399",
                  status: "Review",
                  minimumHardfork: "london",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/4399.json"
      }
    ],
    [
      3654,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-4844",
                  number: 4844,
                  comment: "Shard Blob Transactions",
                  url: "https://eips.ethereum.org/EIPS/eip-4844",
                  status: "Draft",
                  minimumHardfork: "merge",
                  requiredEIPs: [1559, 2718, 2930, 4895],
                  gasConfig: {
                    dataGasPerBlob: { v: 131072, d: "The base fee for data gas per blob" },
                    targetDataGasPerBlock: { v: 262144, d: "The target data gas consumed per block" },
                    maxDataGasPerBlock: { v: 524288, d: "The max data gas allowable per block" },
                    dataGasPriceUpdateFraction: {
                      v: 2225652,
                      d: "The denominator used in the exponential when calculating a data gas price"
                    }
                  },
                  gasPrices: {
                    simpleGasPerBlob: { v: 12e3, d: "The basic gas fee for each blob" },
                    minDataGasPrice: { v: 1, d: "The minimum fee per data gas" },
                    kzgPointEvaluationGasPrecompilePrice: { v: 5e4, d: "The fee associated with the point evaluation precompile" },
                    datahash: { v: 3, d: "Base fee of the DATAHASH opcode" }
                  },
                  sharding: {
                    blobCommitmentVersionKzg: { v: 1, d: "The number indicated a versioned hash is a KZG commitment" },
                    fieldElementsPerBlob: { v: 4096, d: "The number of field elements allowed per blob" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/4844.json"
      }
    ],
    [
      3655,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-4895",
                  number: 4895,
                  comment: "Beacon chain push withdrawals as operations",
                  url: "https://eips.ethereum.org/EIPS/eip-4895",
                  status: "Review",
                  minimumHardfork: "merge",
                  requiredEIPs: [],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/4895.json"
      }
    ],
    [
      3656,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "EIP-5133",
                  number: 5133,
                  comment: "Delaying Difficulty Bomb to mid-September 2022",
                  url: "https://eips.ethereum.org/EIPS/eip-5133",
                  status: "Draft",
                  minimumHardfork: "grayGlacier",
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: { difficultyBombDelay: { v: 114e5, d: "the amount of blocks to delay the difficulty bomb with" } }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/5133.json"
      }
    ],
    [
      3657,
      {
        "./1153.json": 3632,
        "./1559.json": 3633,
        "./2315.json": 3634,
        "./2537.json": 3635,
        "./2565.json": 3636,
        "./2718.json": 3637,
        "./2929.json": 3638,
        "./2930.json": 3639,
        "./3074.json": 3640,
        "./3198.json": 3641,
        "./3529.json": 3642,
        "./3540.json": 3643,
        "./3541.json": 3644,
        "./3554.json": 3645,
        "./3607.json": 3646,
        "./3651.json": 3647,
        "./3670.json": 3648,
        "./3675.json": 3649,
        "./3855.json": 3650,
        "./3860.json": 3651,
        "./4345.json": 3652,
        "./4399.json": 3653,
        "./4844.json": 3654,
        "./4895.json": 3655,
        "./5133.json": 3656
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.EIPs = void 0),
                  (r.EIPs = {
                    1153: e("./1153.json"),
                    1559: e("./1559.json"),
                    2315: e("./2315.json"),
                    2537: e("./2537.json"),
                    2565: e("./2565.json"),
                    2718: e("./2718.json"),
                    2929: e("./2929.json"),
                    2930: e("./2930.json"),
                    3074: e("./3074.json"),
                    3198: e("./3198.json"),
                    3529: e("./3529.json"),
                    3540: e("./3540.json"),
                    3541: e("./3541.json"),
                    3554: e("./3554.json"),
                    3607: e("./3607.json"),
                    3651: e("./3651.json"),
                    3670: e("./3670.json"),
                    3675: e("./3675.json"),
                    3855: e("./3855.json"),
                    3860: e("./3860.json"),
                    4345: e("./4345.json"),
                    4399: e("./4399.json"),
                    4844: e("./4844.json"),
                    4895: e("./4895.json"),
                    5133: e("./5133.json")
                  });
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/eips/index.js"
      }
    ],
    [
      3658,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.CustomChain = r.ConsensusAlgorithm = r.ConsensusType = r.Hardfork = r.Chain = void 0),
                  (function (e) {
                    (e[(e.Mainnet = 1)] = "Mainnet"),
                      (e[(e.Ropsten = 3)] = "Ropsten"),
                      (e[(e.Rinkeby = 4)] = "Rinkeby"),
                      (e[(e.Goerli = 5)] = "Goerli"),
                      (e[(e.Sepolia = 11155111)] = "Sepolia");
                  })(r.Chain || (r.Chain = {})),
                  (function (e) {
                    (e.Chainstart = "chainstart"),
                      (e.Homestead = "homestead"),
                      (e.Dao = "dao"),
                      (e.TangerineWhistle = "tangerineWhistle"),
                      (e.SpuriousDragon = "spuriousDragon"),
                      (e.Byzantium = "byzantium"),
                      (e.Constantinople = "constantinople"),
                      (e.Petersburg = "petersburg"),
                      (e.Istanbul = "istanbul"),
                      (e.MuirGlacier = "muirGlacier"),
                      (e.Berlin = "berlin"),
                      (e.London = "london"),
                      (e.ArrowGlacier = "arrowGlacier"),
                      (e.GrayGlacier = "grayGlacier"),
                      (e.MergeForkIdTransition = "mergeForkIdTransition"),
                      (e.Merge = "merge"),
                      (e.Shanghai = "shanghai"),
                      (e.ShardingForkDev = "shardingFork");
                  })(r.Hardfork || (r.Hardfork = {})),
                  (function (e) {
                    (e.ProofOfStake = "pos"), (e.ProofOfWork = "pow"), (e.ProofOfAuthority = "poa");
                  })(r.ConsensusType || (r.ConsensusType = {})),
                  (function (e) {
                    (e.Ethash = "ethash"), (e.Clique = "clique"), (e.Casper = "casper");
                  })(r.ConsensusAlgorithm || (r.ConsensusAlgorithm = {})),
                  (function (e) {
                    (e.PolygonMainnet = "polygon-mainnet"),
                      (e.PolygonMumbai = "polygon-mumbai"),
                      (e.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet"),
                      (e.ArbitrumOne = "arbitrum-one"),
                      (e.xDaiChain = "x-dai-chain"),
                      (e.OptimisticKovan = "optimistic-kovan"),
                      (e.OptimisticEthereum = "optimistic-ethereum");
                  })(r.CustomChain || (r.CustomChain = {}));
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/enums.js"
      }
    ],
    [
      3659,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "arrowGlacier",
                  comment: "HF to delay the difficulty bomb",
                  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
                  status: "Final",
                  eips: [4345],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/arrowGlacier.json"
      }
    ],
    [
      3660,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "berlin",
                  comment: "HF targeted for July 2020 following the Muir Glacier HF",
                  url: "https://eips.ethereum.org/EIPS/eip-2070",
                  status: "Final",
                  eips: [2565, 2929, 2718, 2930]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/berlin.json"
      }
    ],
    [
      3661,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "byzantium",
                  comment: "Hardfork with new precompiles, instructions and other protocol changes",
                  url: "https://eips.ethereum.org/EIPS/eip-609",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {
                    modexpGquaddivisor: { v: 20, d: "Gquaddivisor from modexp precompile for gas calculation" },
                    ecAdd: { v: 500, d: "Gas costs for curve addition precompile" },
                    ecMul: { v: 4e4, d: "Gas costs for curve multiplication precompile" },
                    ecPairing: { v: 1e5, d: "Base gas costs for curve pairing precompile" },
                    ecPairingWord: { v: 8e4, d: "Gas costs regarding curve pairing precompile input length" },
                    revert: { v: 0, d: "Base fee of the REVERT opcode" },
                    staticcall: { v: 700, d: "Base fee of the STATICCALL opcode" },
                    returndatasize: { v: 2, d: "Base fee of the RETURNDATASIZE opcode" },
                    returndatacopy: { v: 3, d: "Base fee of the RETURNDATACOPY opcode" }
                  },
                  vm: {},
                  pow: {
                    minerReward: { v: "3000000000000000000", d: "the amount a miner get rewarded for mining a block" },
                    difficultyBombDelay: { v: 3e6, d: "the amount of blocks to delay the difficulty bomb with" }
                  }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/byzantium.json"
      }
    ],
    [
      3662,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "chainstart",
                  comment: "Start of the Ethereum main chain",
                  url: "",
                  status: "",
                  gasConfig: {
                    minGasLimit: { v: 5e3, d: "Minimum the gas limit may ever be" },
                    gasLimitBoundDivisor: { v: 1024, d: "The bound divisor of the gas limit, used in update calculations" },
                    maxRefundQuotient: {
                      v: 2,
                      d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
                    }
                  },
                  gasPrices: {
                    base: { v: 2, d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)" },
                    tierStep: { v: [0, 2, 3, 5, 8, 10, 20], d: "Once per operation, for a selection of them" },
                    exp: { v: 10, d: "Base fee of the EXP opcode" },
                    expByte: { v: 10, d: "Times ceil(log256(exponent)) for the EXP instruction" },
                    sha3: { v: 30, d: "Base fee of the SHA3 opcode" },
                    sha3Word: { v: 6, d: "Once per word of the SHA3 operation's data" },
                    sload: { v: 50, d: "Base fee of the SLOAD opcode" },
                    sstoreSet: { v: 2e4, d: "Once per SSTORE operation if the zeroness changes from zero" },
                    sstoreReset: { v: 5e3, d: "Once per SSTORE operation if the zeroness does not change from zero" },
                    sstoreRefund: { v: 15e3, d: "Once per SSTORE operation if the zeroness changes to zero" },
                    jumpdest: { v: 1, d: "Base fee of the JUMPDEST opcode" },
                    log: { v: 375, d: "Base fee of the LOG opcode" },
                    logData: { v: 8, d: "Per byte in a LOG* operation's data" },
                    logTopic: {
                      v: 375,
                      d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"
                    },
                    create: { v: 32e3, d: "Base fee of the CREATE opcode" },
                    call: { v: 40, d: "Base fee of the CALL opcode" },
                    callStipend: { v: 2300, d: "Free gas given at beginning of call" },
                    callValueTransfer: { v: 9e3, d: "Paid for CALL when the value transfor is non-zero" },
                    callNewAccount: { v: 25e3, d: "Paid for CALL when the destination address didn't exist prior" },
                    selfdestructRefund: { v: 24e3, d: "Refunded following a selfdestruct operation" },
                    memory: {
                      v: 3,
                      d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"
                    },
                    quadCoeffDiv: { v: 512, d: "Divisor for the quadratic particle of the memory cost equation" },
                    createData: { v: 200, d: "" },
                    tx: { v: 21e3, d: "Per transaction. NOTE: Not payable on data of calls between transactions" },
                    txCreation: { v: 32e3, d: "The cost of creating a contract via tx" },
                    txDataZero: {
                      v: 4,
                      d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"
                    },
                    txDataNonZero: {
                      v: 68,
                      d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
                    },
                    copy: {
                      v: 3,
                      d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"
                    },
                    ecRecover: { v: 3e3, d: "" },
                    sha256: { v: 60, d: "" },
                    sha256Word: { v: 12, d: "" },
                    ripemd160: { v: 600, d: "" },
                    ripemd160Word: { v: 120, d: "" },
                    identity: { v: 15, d: "" },
                    identityWord: { v: 3, d: "" },
                    stop: { v: 0, d: "Base fee of the STOP opcode" },
                    add: { v: 3, d: "Base fee of the ADD opcode" },
                    mul: { v: 5, d: "Base fee of the MUL opcode" },
                    sub: { v: 3, d: "Base fee of the SUB opcode" },
                    div: { v: 5, d: "Base fee of the DIV opcode" },
                    sdiv: { v: 5, d: "Base fee of the SDIV opcode" },
                    mod: { v: 5, d: "Base fee of the MOD opcode" },
                    smod: { v: 5, d: "Base fee of the SMOD opcode" },
                    addmod: { v: 8, d: "Base fee of the ADDMOD opcode" },
                    mulmod: { v: 8, d: "Base fee of the MULMOD opcode" },
                    signextend: { v: 5, d: "Base fee of the SIGNEXTEND opcode" },
                    lt: { v: 3, d: "Base fee of the LT opcode" },
                    gt: { v: 3, d: "Base fee of the GT opcode" },
                    slt: { v: 3, d: "Base fee of the SLT opcode" },
                    sgt: { v: 3, d: "Base fee of the SGT opcode" },
                    eq: { v: 3, d: "Base fee of the EQ opcode" },
                    iszero: { v: 3, d: "Base fee of the ISZERO opcode" },
                    and: { v: 3, d: "Base fee of the AND opcode" },
                    or: { v: 3, d: "Base fee of the OR opcode" },
                    xor: { v: 3, d: "Base fee of the XOR opcode" },
                    not: { v: 3, d: "Base fee of the NOT opcode" },
                    byte: { v: 3, d: "Base fee of the BYTE opcode" },
                    address: { v: 2, d: "Base fee of the ADDRESS opcode" },
                    balance: { v: 20, d: "Base fee of the BALANCE opcode" },
                    origin: { v: 2, d: "Base fee of the ORIGIN opcode" },
                    caller: { v: 2, d: "Base fee of the CALLER opcode" },
                    callvalue: { v: 2, d: "Base fee of the CALLVALUE opcode" },
                    calldataload: { v: 3, d: "Base fee of the CALLDATALOAD opcode" },
                    calldatasize: { v: 2, d: "Base fee of the CALLDATASIZE opcode" },
                    calldatacopy: { v: 3, d: "Base fee of the CALLDATACOPY opcode" },
                    codesize: { v: 2, d: "Base fee of the CODESIZE opcode" },
                    codecopy: { v: 3, d: "Base fee of the CODECOPY opcode" },
                    gasprice: { v: 2, d: "Base fee of the GASPRICE opcode" },
                    extcodesize: { v: 20, d: "Base fee of the EXTCODESIZE opcode" },
                    extcodecopy: { v: 20, d: "Base fee of the EXTCODECOPY opcode" },
                    blockhash: { v: 20, d: "Base fee of the BLOCKHASH opcode" },
                    coinbase: { v: 2, d: "Base fee of the COINBASE opcode" },
                    timestamp: { v: 2, d: "Base fee of the TIMESTAMP opcode" },
                    number: { v: 2, d: "Base fee of the NUMBER opcode" },
                    difficulty: { v: 2, d: "Base fee of the DIFFICULTY opcode" },
                    gaslimit: { v: 2, d: "Base fee of the GASLIMIT opcode" },
                    pop: { v: 2, d: "Base fee of the POP opcode" },
                    mload: { v: 3, d: "Base fee of the MLOAD opcode" },
                    mstore: { v: 3, d: "Base fee of the MSTORE opcode" },
                    mstore8: { v: 3, d: "Base fee of the MSTORE8 opcode" },
                    sstore: { v: 0, d: "Base fee of the SSTORE opcode" },
                    jump: { v: 8, d: "Base fee of the JUMP opcode" },
                    jumpi: { v: 10, d: "Base fee of the JUMPI opcode" },
                    pc: { v: 2, d: "Base fee of the PC opcode" },
                    msize: { v: 2, d: "Base fee of the MSIZE opcode" },
                    gas: { v: 2, d: "Base fee of the GAS opcode" },
                    push: { v: 3, d: "Base fee of the PUSH opcode" },
                    dup: { v: 3, d: "Base fee of the DUP opcode" },
                    swap: { v: 3, d: "Base fee of the SWAP opcode" },
                    callcode: { v: 40, d: "Base fee of the CALLCODE opcode" },
                    return: { v: 0, d: "Base fee of the RETURN opcode" },
                    invalid: { v: 0, d: "Base fee of the INVALID opcode" },
                    selfdestruct: { v: 0, d: "Base fee of the SELFDESTRUCT opcode" }
                  },
                  vm: {
                    stackLimit: { v: 1024, d: "Maximum size of VM stack allowed" },
                    callCreateDepth: { v: 1024, d: "Maximum depth of call/create stack" },
                    maxExtraDataSize: { v: 32, d: "Maximum size extra data may be after Genesis" }
                  },
                  pow: {
                    minimumDifficulty: { v: 131072, d: "The minimum that the difficulty may ever be" },
                    difficultyBoundDivisor: { v: 2048, d: "The bound divisor of the difficulty, used in the update calculations" },
                    durationLimit: {
                      v: 13,
                      d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"
                    },
                    epochDuration: { v: 3e4, d: "Duration between proof-of-work epochs" },
                    timebombPeriod: { v: 1e5, d: "Exponential difficulty timebomb period" },
                    minerReward: { v: "5000000000000000000", d: "the amount a miner get rewarded for mining a block" },
                    difficultyBombDelay: { v: 0, d: "the amount of blocks to delay the difficulty bomb with" }
                  }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/chainstart.json"
      }
    ],
    [
      3663,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "constantinople",
                  comment: "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
                  url: "https://eips.ethereum.org/EIPS/eip-1013",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {
                    netSstoreNoopGas: { v: 200, d: "Once per SSTORE operation if the value doesn't change" },
                    netSstoreInitGas: { v: 2e4, d: "Once per SSTORE operation from clean zero" },
                    netSstoreCleanGas: { v: 5e3, d: "Once per SSTORE operation from clean non-zero" },
                    netSstoreDirtyGas: { v: 200, d: "Once per SSTORE operation from dirty" },
                    netSstoreClearRefund: { v: 15e3, d: "Once per SSTORE operation for clearing an originally existing storage slot" },
                    netSstoreResetRefund: { v: 4800, d: "Once per SSTORE operation for resetting to the original non-zero value" },
                    netSstoreResetClearRefund: { v: 19800, d: "Once per SSTORE operation for resetting to the original zero value" },
                    shl: { v: 3, d: "Base fee of the SHL opcode" },
                    shr: { v: 3, d: "Base fee of the SHR opcode" },
                    sar: { v: 3, d: "Base fee of the SAR opcode" },
                    extcodehash: { v: 400, d: "Base fee of the EXTCODEHASH opcode" },
                    create2: { v: 32e3, d: "Base fee of the CREATE2 opcode" }
                  },
                  vm: {},
                  pow: {
                    minerReward: { v: "2000000000000000000", d: "The amount a miner gets rewarded for mining a block" },
                    difficultyBombDelay: { v: 5e6, d: "the amount of blocks to delay the difficulty bomb with" }
                  }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/constantinople.json"
      }
    ],
    [
      3664,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "dao",
                  comment: "DAO rescue hardfork",
                  url: "https://eips.ethereum.org/EIPS/eip-779",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/dao.json"
      }
    ],
    [
      3665,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "grayGlacier",
                  comment: "Delaying the difficulty bomb to Mid September 2022",
                  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
                  status: "Draft",
                  eips: [5133],
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/grayGlacier.json"
      }
    ],
    [
      3666,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "homestead",
                  comment: "Homestead hardfork with protocol and network changes",
                  url: "https://eips.ethereum.org/EIPS/eip-606",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: { delegatecall: { v: 40, d: "Base fee of the DELEGATECALL opcode" } },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/homestead.json"
      }
    ],
    [
      3667,
      {
        "./arrowGlacier.json": 3659,
        "./berlin.json": 3660,
        "./byzantium.json": 3661,
        "./chainstart.json": 3662,
        "./constantinople.json": 3663,
        "./dao.json": 3664,
        "./grayGlacier.json": 3665,
        "./homestead.json": 3666,
        "./istanbul.json": 3668,
        "./london.json": 3669,
        "./merge.json": 3670,
        "./mergeForkIdTransition.json": 3671,
        "./muirGlacier.json": 3672,
        "./petersburg.json": 3673,
        "./shanghai.json": 3674,
        "./sharding.json": 3675,
        "./spuriousDragon.json": 3676,
        "./tangerineWhistle.json": 3677
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.hardforks = void 0),
                  (r.hardforks = {
                    chainstart: e("./chainstart.json"),
                    homestead: e("./homestead.json"),
                    dao: e("./dao.json"),
                    tangerineWhistle: e("./tangerineWhistle.json"),
                    spuriousDragon: e("./spuriousDragon.json"),
                    byzantium: e("./byzantium.json"),
                    constantinople: e("./constantinople.json"),
                    petersburg: e("./petersburg.json"),
                    istanbul: e("./istanbul.json"),
                    muirGlacier: e("./muirGlacier.json"),
                    berlin: e("./berlin.json"),
                    london: e("./london.json"),
                    shanghai: e("./shanghai.json"),
                    arrowGlacier: e("./arrowGlacier.json"),
                    grayGlacier: e("./grayGlacier.json"),
                    mergeForkIdTransition: e("./mergeForkIdTransition.json"),
                    merge: e("./merge.json"),
                    shardingFork: e("./sharding.json")
                  });
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/index.js"
      }
    ],
    [
      3668,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "istanbul",
                  comment: "HF targeted for December 2019 following the Constantinople/Petersburg HF",
                  url: "https://eips.ethereum.org/EIPS/eip-1679",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {
                    blake2Round: { v: 1, d: "Gas cost per round for the Blake2 F precompile" },
                    ecAdd: { v: 150, d: "Gas costs for curve addition precompile" },
                    ecMul: { v: 6e3, d: "Gas costs for curve multiplication precompile" },
                    ecPairing: { v: 45e3, d: "Base gas costs for curve pairing precompile" },
                    ecPairingWord: { v: 34e3, d: "Gas costs regarding curve pairing precompile input length" },
                    txDataNonZero: {
                      v: 16,
                      d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
                    },
                    sstoreSentryGasEIP2200: { v: 2300, d: "Minimum gas required to be present for an SSTORE call, not consumed" },
                    sstoreNoopGasEIP2200: { v: 800, d: "Once per SSTORE operation if the value doesn't change" },
                    sstoreDirtyGasEIP2200: { v: 800, d: "Once per SSTORE operation if a dirty value is changed" },
                    sstoreInitGasEIP2200: { v: 2e4, d: "Once per SSTORE operation from clean zero to non-zero" },
                    sstoreInitRefundEIP2200: { v: 19200, d: "Once per SSTORE operation for resetting to the original zero value" },
                    sstoreCleanGasEIP2200: { v: 5e3, d: "Once per SSTORE operation from clean non-zero to something else" },
                    sstoreCleanRefundEIP2200: { v: 4200, d: "Once per SSTORE operation for resetting to the original non-zero value" },
                    sstoreClearRefundEIP2200: { v: 15e3, d: "Once per SSTORE operation for clearing an originally existing storage slot" },
                    balance: { v: 700, d: "Base fee of the BALANCE opcode" },
                    extcodehash: { v: 700, d: "Base fee of the EXTCODEHASH opcode" },
                    chainid: { v: 2, d: "Base fee of the CHAINID opcode" },
                    selfbalance: { v: 5, d: "Base fee of the SELFBALANCE opcode" },
                    sload: { v: 800, d: "Base fee of the SLOAD opcode" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/istanbul.json"
      }
    ],
    [
      3669,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "london",
                  comment: "HF targeted for July 2021 following the Berlin fork",
                  url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
                  status: "Final",
                  eips: [1559, 3198, 3529, 3541]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/london.json"
      }
    ],
    [
      3670,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "merge",
                  comment: "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
                  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
                  status: "Final",
                  consensus: { type: "pos", algorithm: "casper", casper: {} },
                  eips: [3675, 4399]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/merge.json"
      }
    ],
    [
      3671,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "mergeForkIdTransition",
                  comment: "Pre-merge hardfork to fork off non-upgraded clients",
                  url: "https://eips.ethereum.org/EIPS/eip-3675",
                  status: "Draft",
                  eips: []
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/mergeForkIdTransition.json"
      }
    ],
    [
      3672,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "muirGlacier",
                  comment: "HF to delay the difficulty bomb",
                  url: "https://eips.ethereum.org/EIPS/eip-2384",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {},
                  vm: {},
                  pow: { difficultyBombDelay: { v: 9e6, d: "the amount of blocks to delay the difficulty bomb with" } }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/muirGlacier.json"
      }
    ],
    [
      3673,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "petersburg",
                  comment: "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
                  url: "https://eips.ethereum.org/EIPS/eip-1716",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {
                    netSstoreNoopGas: { v: null, d: "Removed along EIP-1283" },
                    netSstoreInitGas: { v: null, d: "Removed along EIP-1283" },
                    netSstoreCleanGas: { v: null, d: "Removed along EIP-1283" },
                    netSstoreDirtyGas: { v: null, d: "Removed along EIP-1283" },
                    netSstoreClearRefund: { v: null, d: "Removed along EIP-1283" },
                    netSstoreResetRefund: { v: null, d: "Removed along EIP-1283" },
                    netSstoreResetClearRefund: { v: null, d: "Removed along EIP-1283" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/petersburg.json"
      }
    ],
    [
      3674,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "shanghai",
                  comment: "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
                  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
                  status: "Final",
                  eips: [3651, 3855, 3860, 4895]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/shanghai.json"
      }
    ],
    [
      3675,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "shardingFork",
                  comment: "Internal hardfork to test proto-danksharding (do not use in production)",
                  url: "https://eips.ethereum.org/EIPS/eip-4844",
                  status: "Experimental",
                  eips: [4844]
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/sharding.json"
      }
    ],
    [
      3676,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "spuriousDragon",
                  comment:
                    "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
                  url: "https://eips.ethereum.org/EIPS/eip-607",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: { expByte: { v: 50, d: "Times ceil(log256(exponent)) for the EXP instruction" } },
                  vm: { maxCodeSize: { v: 24576, d: "Maximum length of contract code" } },
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/spuriousDragon.json"
      }
    ],
    [
      3677,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                t.exports = {
                  name: "tangerineWhistle",
                  comment: "Hardfork with gas cost changes for IO-heavy operations",
                  url: "https://eips.ethereum.org/EIPS/eip-608",
                  status: "Final",
                  gasConfig: {},
                  gasPrices: {
                    sload: { v: 200, d: "Once per SLOAD operation" },
                    call: { v: 700, d: "Once per CALL operation & message call transaction" },
                    extcodesize: { v: 700, d: "Base fee of the EXTCODESIZE opcode" },
                    extcodecopy: { v: 700, d: "Base fee of the EXTCODECOPY opcode" },
                    balance: { v: 400, d: "Base fee of the BALANCE opcode" },
                    delegatecall: { v: 700, d: "Base fee of the DELEGATECALL opcode" },
                    callcode: { v: 700, d: "Base fee of the CALLCODE opcode" },
                    selfdestruct: { v: 5e3, d: "Base fee of the SELFDESTRUCT opcode" }
                  },
                  vm: {},
                  pow: {}
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/hardforks/tangerineWhistle.json"
      }
    ],
    [
      3678,
      { "./common": 3631, "./enums": 3658, "./types": 3679, "./utils": 3680 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                var n =
                    (this && this.__createBinding) ||
                    (Object.create
                      ? function (e, t, r, n) {
                          n === undefined && (n = r);
                          var i = Object.getOwnPropertyDescriptor(t, r);
                          (i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                            (i = {
                              enumerable: !0,
                              get: function () {
                                return t[r];
                              }
                            }),
                            Object.defineProperty(e, n, i);
                        }
                      : function (e, t, r, n) {
                          n === undefined && (n = r), (e[n] = t[r]);
                        }),
                  i =
                    (this && this.__exportStar) ||
                    function (e, t) {
                      for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  i(e("./common"), r),
                  i(e("./enums"), r),
                  i(e("./types"), r),
                  i(e("./utils"), r);
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/index.js"
      }
    ],
    [
      3679,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 });
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/types.js"
      }
    ],
    [
      3680,
      { "./enums": 3658, "@ethereumjs/util": 410 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.parseGethGenesis = void 0);
                const n = e("@ethereumjs/util"),
                  i = e("./enums");
                function o(e, t = !0) {
                  const { name: r, config: o, difficulty: s, mixHash: a, gasLimit: c, coinbase: u, baseFeePerGas: l } = e;
                  let { extraData: d, timestamp: f, nonce: h } = e;
                  const p = Number(f),
                    { chainId: m } = o;
                  if (
                    ("" === d && (d = "0x"),
                    (0, n.isHexPrefixed)(f) || (f = (0, n.intToHex)(parseInt(f))),
                    18 !== h.length &&
                      (h = (function (e) {
                        return e && "0x0" !== e
                          ? (0, n.isHexPrefixed)(e)
                            ? "0x" + (0, n.stripHexPrefix)(e).padStart(16, "0")
                            : "0x" + e.padStart(16, "0")
                          : "0x0000000000000000";
                      })(h)),
                    o.eip155Block !== o.eip158Block)
                  )
                    throw new Error(
                      "EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork"
                    );
                  const g = {
                      name: r,
                      chainId: m,
                      networkId: m,
                      genesis: {
                        timestamp: f,
                        gasLimit: parseInt(c),
                        difficulty: parseInt(s),
                        nonce: h,
                        extraData: d,
                        mixHash: a,
                        coinbase: u,
                        baseFeePerGas: l
                      },
                      hardfork: undefined,
                      hardforks: [],
                      bootstrapNodes: [],
                      consensus:
                        o.clique !== undefined
                          ? {
                              type: "poa",
                              algorithm: "clique",
                              clique: {
                                period: o.clique.period ?? o.clique.blockperiodseconds,
                                epoch: o.clique.epoch ?? o.clique.epochlength
                              }
                            }
                          : { type: "pow", algorithm: "ethash", ethash: {} }
                    },
                    y = {
                      [i.Hardfork.Homestead]: { name: "homesteadBlock" },
                      [i.Hardfork.Dao]: { name: "daoForkBlock" },
                      [i.Hardfork.TangerineWhistle]: { name: "eip150Block" },
                      [i.Hardfork.SpuriousDragon]: { name: "eip155Block" },
                      [i.Hardfork.Byzantium]: { name: "byzantiumBlock" },
                      [i.Hardfork.Constantinople]: { name: "constantinopleBlock" },
                      [i.Hardfork.Petersburg]: { name: "petersburgBlock" },
                      [i.Hardfork.Istanbul]: { name: "istanbulBlock" },
                      [i.Hardfork.MuirGlacier]: { name: "muirGlacierBlock" },
                      [i.Hardfork.Berlin]: { name: "berlinBlock" },
                      [i.Hardfork.London]: { name: "londonBlock" },
                      [i.Hardfork.MergeForkIdTransition]: { name: "mergeForkBlock", postMerge: t },
                      [i.Hardfork.Shanghai]: { name: "shanghaiTime", postMerge: !0, isTimestamp: !0 },
                      [i.Hardfork.ShardingForkDev]: { name: "shardingForkTime", postMerge: !0, isTimestamp: !0 }
                    },
                    b = Object.keys(y).reduce((e, t) => ((e[y[t].name] = t), e), {}),
                    v = Object.keys(o).filter((e) => b[e] !== undefined && o[e] !== undefined && null !== o[e]);
                  if (
                    ((g.hardforks = v
                      .map((e) => ({
                        name: b[e],
                        block: !0 === y[b[e]].isTimestamp || "number" != typeof o[e] ? null : o[e],
                        timestamp: !0 === y[b[e]].isTimestamp && "number" == typeof o[e] ? o[e] : undefined
                      }))
                      .filter((e) => null !== e.block || e.timestamp !== undefined)),
                    g.hardforks.sort(function (e, t) {
                      return (e.block ?? Infinity) - (t.block ?? Infinity);
                    }),
                    g.hardforks.sort(function (e, t) {
                      return (e.timestamp ?? p) - (t.timestamp ?? p);
                    }),
                    o.terminalTotalDifficulty !== undefined)
                  ) {
                    const e = { name: i.Hardfork.Merge, ttd: o.terminalTotalDifficulty, block: null },
                      t = g.hardforks.findIndex((e) => !0 === y[e.name]?.postMerge);
                    -1 !== t ? g.hardforks.splice(t, 0, e) : g.hardforks.push(e);
                  }
                  const w = g.hardforks.length > 0 ? g.hardforks.slice(-1)[0] : undefined;
                  return (g.hardfork = w?.name), g.hardforks.unshift({ name: i.Hardfork.Chainstart, block: 0 }), g;
                }
                r.parseGethGenesis = function (e, t, r) {
                  try {
                    if (["config", "difficulty", "gasLimit", "alloc"].some((t) => !(t in e)))
                      throw new Error("Invalid format, expected geth genesis fields missing");
                    return t !== undefined && (e.name = t), o(e, r);
                  } catch (e) {
                    throw new Error(`Error parsing parameters file: ${e.message}`);
                  }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/common",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/common/dist/utils.js"
      }
    ],
    [
      3681,
      { "./types": 3691, "@ethereumjs/common": 3746, "@ethereumjs/util": 410 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.BaseTransaction = void 0);
                const n = e("@ethereumjs/common"),
                  i = e("@ethereumjs/util"),
                  o = e("./types");
                r.BaseTransaction = class {
                  constructor(e, t) {
                    (this.cache = { hash: undefined, dataFee: undefined }),
                      (this.activeCapabilities = []),
                      (this.DEFAULT_CHAIN = n.Chain.Mainnet),
                      (this.DEFAULT_HARDFORK = n.Hardfork.Merge);
                    const { nonce: r, gasLimit: o, to: s, value: a, data: c, v: u, r: l, s: d, type: f } = e;
                    (this._type = Number((0, i.bufferToBigInt)((0, i.toBuffer)(f)))), (this.txOptions = t);
                    const h = (0, i.toBuffer)("" === s ? "0x" : s),
                      p = (0, i.toBuffer)("" === u ? "0x" : u),
                      m = (0, i.toBuffer)("" === l ? "0x" : l),
                      g = (0, i.toBuffer)("" === d ? "0x" : d);
                    (this.nonce = (0, i.bufferToBigInt)((0, i.toBuffer)("" === r ? "0x" : r))),
                      (this.gasLimit = (0, i.bufferToBigInt)((0, i.toBuffer)("" === o ? "0x" : o))),
                      (this.to = h.length > 0 ? new i.Address(h) : undefined),
                      (this.value = (0, i.bufferToBigInt)((0, i.toBuffer)("" === a ? "0x" : a))),
                      (this.data = (0, i.toBuffer)("" === c ? "0x" : c)),
                      (this.v = p.length > 0 ? (0, i.bufferToBigInt)(p) : undefined),
                      (this.r = m.length > 0 ? (0, i.bufferToBigInt)(m) : undefined),
                      (this.s = g.length > 0 ? (0, i.bufferToBigInt)(g) : undefined),
                      this._validateCannotExceedMaxInteger({ value: this.value, r: this.r, s: this.s }),
                      this._validateCannotExceedMaxInteger({ gasLimit: this.gasLimit }, 64),
                      this._validateCannotExceedMaxInteger({ nonce: this.nonce }, 64, !0);
                  }
                  get type() {
                    return this._type;
                  }
                  supports(e) {
                    return this.activeCapabilities.includes(e);
                  }
                  validate(e = !1) {
                    const t = [];
                    return (
                      this.getBaseFee() > this.gasLimit &&
                        t.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`),
                      this.isSigned() && !this.verifySignature() && t.push("Invalid Signature"),
                      e ? t : 0 === t.length
                    );
                  }
                  _validateYParity() {
                    const { v: e } = this;
                    if (e !== undefined && e !== BigInt(0) && e !== BigInt(1)) {
                      const e = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
                      throw new Error(e);
                    }
                  }
                  _validateHighS() {
                    const { s: e } = this;
                    if (this.common.gteHardfork("homestead") && e !== undefined && e > i.SECP256K1_ORDER_DIV_2) {
                      const e = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                      throw new Error(e);
                    }
                  }
                  getBaseFee() {
                    const e = this.common.param("gasPrices", "tx");
                    let t = this.getDataFee();
                    if ((e && (t += e), this.common.gteHardfork("homestead") && this.toCreationAddress())) {
                      const e = this.common.param("gasPrices", "txCreation");
                      e && (t += e);
                    }
                    return t;
                  }
                  getDataFee() {
                    const e = this.common.param("gasPrices", "txDataZero"),
                      t = this.common.param("gasPrices", "txDataNonZero");
                    let r = BigInt(0);
                    for (let n = 0; n < this.data.length; n++) 0 === this.data[n] ? (r += e) : (r += t);
                    if ((this.to === undefined || null === this.to) && this.common.isActivatedEIP(3860)) {
                      const e = BigInt(Math.ceil(this.data.length / 32));
                      r += this.common.param("gasPrices", "initCodeWordCost") * e;
                    }
                    return r;
                  }
                  toCreationAddress() {
                    return this.to === undefined || 0 === this.to.buf.length;
                  }
                  isSigned() {
                    const { v: e, r: t, s: r } = this;
                    return e !== undefined && t !== undefined && r !== undefined;
                  }
                  verifySignature() {
                    try {
                      const e = this.getSenderPublicKey();
                      return 0 !== (0, i.unpadBuffer)(e).length;
                    } catch (e) {
                      return !1;
                    }
                  }
                  getSenderAddress() {
                    return new i.Address((0, i.publicToAddress)(this.getSenderPublicKey()));
                  }
                  sign(e) {
                    if (32 !== e.length) {
                      const e = this._errorMsg("Private key must be 32 bytes in length.");
                      throw new Error(e);
                    }
                    let t = !1;
                    0 === this.type &&
                      this.common.gteHardfork("spuriousDragon") &&
                      !this.supports(o.Capability.EIP155ReplayProtection) &&
                      (this.activeCapabilities.push(o.Capability.EIP155ReplayProtection), (t = !0));
                    const r = this.getMessageToSign(!0),
                      { v: n, r: s, s: a } = (0, i.ecsign)(r, e),
                      c = this._processSignature(n, s, a);
                    if (t) {
                      const e = this.activeCapabilities.indexOf(o.Capability.EIP155ReplayProtection);
                      e > -1 && this.activeCapabilities.splice(e, 1);
                    }
                    return c;
                  }
                  _getCommon(e, t) {
                    if (t !== undefined) {
                      const r = (0, i.bufferToBigInt)((0, i.toBuffer)(t));
                      if (e) {
                        if (e.chainId() !== r) {
                          const e = this._errorMsg("The chain ID does not match the chain ID of Common");
                          throw new Error(e);
                        }
                        return e.copy();
                      }
                      return n.Common.isSupportedChainId(r)
                        ? new n.Common({ chain: r, hardfork: this.DEFAULT_HARDFORK })
                        : n.Common.custom(
                            { name: "custom-chain", networkId: r, chainId: r },
                            { baseChain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK }
                          );
                    }
                    return e?.copy() ?? new n.Common({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
                  }
                  _validateCannotExceedMaxInteger(e, t = 256, r = !1) {
                    for (const [n, o] of Object.entries(e))
                      switch (t) {
                        case 64:
                          if (r) {
                            if (o !== undefined && o >= i.MAX_UINT64) {
                              const e = this._errorMsg(`${n} cannot equal or exceed MAX_UINT64 (2^64-1), given ${o}`);
                              throw new Error(e);
                            }
                          } else if (o !== undefined && o > i.MAX_UINT64) {
                            const e = this._errorMsg(`${n} cannot exceed MAX_UINT64 (2^64-1), given ${o}`);
                            throw new Error(e);
                          }
                          break;
                        case 256:
                          if (r) {
                            if (o !== undefined && o >= i.MAX_INTEGER) {
                              const e = this._errorMsg(`${n} cannot equal or exceed MAX_INTEGER (2^256-1), given ${o}`);
                              throw new Error(e);
                            }
                          } else if (o !== undefined && o > i.MAX_INTEGER) {
                            const e = this._errorMsg(`${n} cannot exceed MAX_INTEGER (2^256-1), given ${o}`);
                            throw new Error(e);
                          }
                          break;
                        default: {
                          const e = this._errorMsg("unimplemented bits value");
                          throw new Error(e);
                        }
                      }
                  }
                  static _validateNotArray(e) {
                    const t = [
                      "nonce",
                      "gasPrice",
                      "gasLimit",
                      "to",
                      "value",
                      "data",
                      "v",
                      "r",
                      "s",
                      "type",
                      "baseFee",
                      "maxFeePerGas",
                      "chainId"
                    ];
                    for (const [r, n] of Object.entries(e))
                      if (t.includes(r) && Array.isArray(n)) throw new Error(`${r} cannot be an array`);
                  }
                  _getSharedErrorPostfix() {
                    let e = "";
                    try {
                      e = this.isSigned() ? (0, i.bufferToHex)(this.hash()) : "not available (unsigned)";
                    } catch (t) {
                      e = "error";
                    }
                    let t = "";
                    try {
                      t = this.isSigned().toString();
                    } catch (t) {
                      e = "error";
                    }
                    let r = "";
                    try {
                      r = this.common.hardfork();
                    } catch (e) {
                      r = "error";
                    }
                    let n = `tx type=${this.type} hash=${e} nonce=${this.nonce} value=${this.value} `;
                    return (n += `signed=${t} hf=${r}`), n;
                  }
                };
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/tx/dist/baseTransaction.js"
      }
    ],
    [
      3682,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, r) {
                Object.defineProperty(r, "__esModule", { value: !0 }),
                  (r.BYTES_PER_FIELD_ELEMENT =
                    r.FIELD_ELEMENTS_PER_BLOB =
                    r.MAX_TX_WRAP_KZG_COMMITMENTS =
                    r.LIMIT_BLOBS_PER_TX =
                    r.MAX_VERSIONED_HASHES_LIST_SIZE =
                    r.MAX_ACCESS_LIST_SIZE =
                    r.MAX_CALLDATA_SIZE =
                      void 0),
                  (r.MAX_CALLDATA_SIZE = 16777216),
                  (r.MAX_ACCESS_LIST_SIZE = 16777216),
                  (r.MAX_VERSIONED_HASHES_LIST_SIZE = 16777216),
                  (r.LIMIT_BLOBS_PER_TX = 16777216),
                  (r.MAX_TX_WRAP_KZG_COMMITMENTS = 16777216),
                  (r.FIELD_ELEMENTS_PER_BLOB = 4096),
                  (r.BYTES_PER_FIELD_ELEMENT = 32);
              };
            };
      },
      {
        package: "eth-lattice-keyring>gridplus-sdk>@ethereumjs/tx",
        file: "node_modules/gridplus-sdk/node_modules/@ethereumjs/tx/dist/constants.js"
      }
    ]
  ],
  [],
  {}
);
