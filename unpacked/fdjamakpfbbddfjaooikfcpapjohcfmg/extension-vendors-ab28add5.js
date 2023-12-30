/*! For license information please see extension-vendors-ab28add5.js.LICENSE.txt */
(self.webpackChunk_dashlane_amphora = self.webpackChunk_dashlane_amphora || []).push([
  [877],
  {
    98158: (t, e, r) => {
      "use strict";
      var n = r(86653)("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (t) {
          n = null;
        }
      t.exports = n;
    },
    70138: (t, e, r) => {
      "use strict";
      var n = r(86653)("%Object.defineProperty%", !0),
        o = function () {
          if (n)
            try {
              return n({}, "a", { value: 1 }), !0;
            } catch (t) {
              return !1;
            }
          return !1;
        };
      (o.hasArrayLengthDefineBug = function () {
        if (!o()) return null;
        try {
          return 1 !== n([], "length", { value: 1 }).length;
        } catch (t) {
          return !0;
        }
      }),
        (t.exports = o);
    },
    57877: (t) => {
      "use strict";
      var e = { foo: {} },
        r = Object;
      t.exports = function () {
        return { __proto__: e }.foo === e.foo && !({ __proto__: null } instanceof r);
      };
    },
    72770: (t, e, r) => {
      "use strict";
      var n = "undefined" != typeof Symbol && Symbol,
        o = r(69578);
      t.exports = function () {
        return (
          "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
        );
      };
    },
    69578: (t) => {
      "use strict";
      t.exports = function () {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if ("string" == typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    73342: (t, e, r) => {
      "use strict";
      var n = r(69578);
      t.exports = function () {
        return n() && !!Symbol.toStringTag;
      };
    },
    22786: (t, e, r) => {
      "use strict";
      var n = r(22698);
      t.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
    },
    62585: (t, e, r) => {
      "use strict";
      var n = r(21607).Buffer,
        o = r(13114).Transform;
      function i(t) {
        o.call(this),
          (this._block = n.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r(67483)(i, o),
        (i.prototype._transform = function (t, e, r) {
          var n = null;
          try {
            this.update(t, e);
          } catch (t) {
            n = t;
          }
          r(n);
        }),
        (i.prototype._flush = function (t) {
          var e = null;
          try {
            this.push(this.digest());
          } catch (t) {
            e = t;
          }
          t(e);
        }),
        (i.prototype.update = function (t, e) {
          if (
            ((function (t, e) {
              if (!n.isBuffer(t) && "string" != typeof t) throw new TypeError(e + " must be a string or a buffer");
            })(t, "Data"),
            this._finalized)
          )
            throw new Error("Digest already called");
          n.isBuffer(t) || (t = n.from(t, e));
          for (var r = this._block, o = 0; this._blockOffset + t.length - o >= this._blockSize; ) {
            for (var i = this._blockOffset; i < this._blockSize; ) r[i++] = t[o++];
            this._update(), (this._blockOffset = 0);
          }
          for (; o < t.length; ) r[this._blockOffset++] = t[o++];
          for (var s = 0, h = 8 * t.length; h > 0; ++s)
            (this._length[s] += h), (h = (this._length[s] / 4294967296) | 0) > 0 && (this._length[s] -= 4294967296 * h);
          return this;
        }),
        (i.prototype._update = function () {
          throw new Error("_update is not implemented");
        }),
        (i.prototype.digest = function (t) {
          if (this._finalized) throw new Error("Digest already called");
          this._finalized = !0;
          var e = this._digest();
          void 0 !== t && (e = e.toString(t)), this._block.fill(0), (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return e;
        }),
        (i.prototype._digest = function () {
          throw new Error("_digest is not implemented");
        }),
        (t.exports = i);
    },
    45370: (t, e, r) => {
      var n = e;
      (n.utils = r(28634)),
        (n.common = r(65855)),
        (n.sha = r(74745)),
        (n.ripemd = r(49333)),
        (n.hmac = r(11447)),
        (n.sha1 = n.sha.sha1),
        (n.sha256 = n.sha.sha256),
        (n.sha224 = n.sha.sha224),
        (n.sha384 = n.sha.sha384),
        (n.sha512 = n.sha.sha512),
        (n.ripemd160 = n.ripemd.ripemd160);
    },
    65855: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(28694);
      function i() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = i),
        (i.prototype.update = function (t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending ? (this.pending = this.pending.concat(t)) : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian));
            for (var o = 0; o < t.length; o += this._delta32) this._update(t, o, o + this._delta32);
          }
          return this;
        }),
        (i.prototype.digest = function (t) {
          return this.update(this._pad()), o(null === this.pending), this._digest(t);
        }),
        (i.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = new Array(r + this.padLength);
          n[0] = 128;
          for (var o = 1; o < r; o++) n[o] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var i = 8; i < this.padLength; i++) n[o++] = 0;
            (n[o++] = 0),
              (n[o++] = 0),
              (n[o++] = 0),
              (n[o++] = 0),
              (n[o++] = (t >>> 24) & 255),
              (n[o++] = (t >>> 16) & 255),
              (n[o++] = (t >>> 8) & 255),
              (n[o++] = 255 & t);
          } else
            for (
              n[o++] = 255 & t,
                n[o++] = (t >>> 8) & 255,
                n[o++] = (t >>> 16) & 255,
                n[o++] = (t >>> 24) & 255,
                n[o++] = 0,
                n[o++] = 0,
                n[o++] = 0,
                n[o++] = 0,
                i = 8;
              i < this.padLength;
              i++
            )
              n[o++] = 0;
          return n;
        });
    },
    11447: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(28694);
      function i(t, e, r) {
        if (!(this instanceof i)) return new i(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r));
      }
      (t.exports = i),
        (i.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()), o(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (i.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (i.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    49333: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(65855),
        i = n.rotl32,
        s = n.sum32,
        h = n.sum32_3,
        a = n.sum32_4,
        u = o.BlockHash;
      function c() {
        if (!(this instanceof c)) return new c();
        u.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.endian = "little");
      }
      function l(t, e, r, n) {
        return t <= 15 ? e ^ r ^ n : t <= 31 ? (e & r) | (~e & n) : t <= 47 ? (e | ~r) ^ n : t <= 63 ? (e & n) | (r & ~n) : e ^ (r | ~n);
      }
      function f(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
      }
      function p(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
      }
      n.inherits(c, u),
        (e.ripemd160 = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 192),
        (c.padLength = 64),
        (c.prototype._update = function (t, e) {
          for (
            var r = this.h[0], n = this.h[1], o = this.h[2], u = this.h[3], c = this.h[4], m = r, v = n, _ = o, S = u, x = c, w = 0;
            w < 80;
            w++
          ) {
            var E = s(i(a(r, l(w, n, o, u), t[d[w] + e], f(w)), y[w]), c);
            (r = c),
              (c = u),
              (u = i(o, 10)),
              (o = n),
              (n = E),
              (E = s(i(a(m, l(79 - w, v, _, S), t[g[w] + e], p(w)), b[w]), x)),
              (m = x),
              (x = S),
              (S = i(_, 10)),
              (_ = v),
              (v = E);
          }
          (E = h(this.h[1], o, S)),
            (this.h[1] = h(this.h[2], u, x)),
            (this.h[2] = h(this.h[3], c, m)),
            (this.h[3] = h(this.h[4], r, v)),
            (this.h[4] = h(this.h[0], n, _)),
            (this.h[0] = E);
        }),
        (c.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
        });
      var d = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15,
          8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11,
          6, 15, 13
        ],
        g = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6,
          9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0,
          3, 9, 11
        ],
        y = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14,
          9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12,
          13, 14, 11, 8, 5, 6
        ],
        b = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8,
          6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13,
          6, 5, 15, 13, 11, 11
        ];
    },
    74745: (t, e, r) => {
      "use strict";
      (e.sha1 = r(68051)), (e.sha224 = r(78585)), (e.sha256 = r(60066)), (e.sha384 = r(41547)), (e.sha512 = r(40729));
    },
    68051: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(65855),
        i = r(64545),
        s = n.rotl32,
        h = n.sum32,
        a = n.sum32_5,
        u = i.ft_1,
        c = o.BlockHash,
        l = [1518500249, 1859775393, 2400959708, 3395469782];
      function f() {
        if (!(this instanceof f)) return new f();
        c.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = new Array(80));
      }
      n.inherits(f, c),
        (t.exports = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 80),
        (f.padLength = 64),
        (f.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var o = this.h[0],
            i = this.h[1],
            c = this.h[2],
            f = this.h[3],
            p = this.h[4];
          for (n = 0; n < r.length; n++) {
            var d = ~~(n / 20),
              g = a(s(o, 5), u(d, i, c, f), p, r[n], l[d]);
            (p = f), (f = c), (c = s(i, 30)), (i = o), (o = g);
          }
          (this.h[0] = h(this.h[0], o)),
            (this.h[1] = h(this.h[1], i)),
            (this.h[2] = h(this.h[2], c)),
            (this.h[3] = h(this.h[3], f)),
            (this.h[4] = h(this.h[4], p));
        }),
        (f.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        });
    },
    78585: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(60066);
      function i() {
        if (!(this instanceof i)) return new i();
        o.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      }
      n.inherits(i, o),
        (t.exports = i),
        (i.blockSize = 512),
        (i.outSize = 224),
        (i.hmacStrength = 192),
        (i.padLength = 64),
        (i.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big");
        });
    },
    60066: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(65855),
        i = r(64545),
        s = r(28694),
        h = n.sum32,
        a = n.sum32_4,
        u = n.sum32_5,
        c = i.ch32,
        l = i.maj32,
        f = i.s0_256,
        p = i.s1_256,
        d = i.g0_256,
        g = i.g1_256,
        y = o.BlockHash,
        b = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
          1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
          1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
          773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
          1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ];
      function m() {
        if (!(this instanceof m)) return new m();
        y.call(this),
          (this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
          (this.k = b),
          (this.W = new Array(64));
      }
      n.inherits(m, y),
        (t.exports = m),
        (m.blockSize = 512),
        (m.outSize = 256),
        (m.hmacStrength = 192),
        (m.padLength = 64),
        (m.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++) r[n] = a(g(r[n - 2]), r[n - 7], d(r[n - 15]), r[n - 16]);
          var o = this.h[0],
            i = this.h[1],
            y = this.h[2],
            b = this.h[3],
            m = this.h[4],
            v = this.h[5],
            _ = this.h[6],
            S = this.h[7];
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var x = u(S, p(m), c(m, v, _), this.k[n], r[n]),
              w = h(f(o), l(o, i, y));
            (S = _), (_ = v), (v = m), (m = h(b, x)), (b = y), (y = i), (i = o), (o = h(x, w));
          }
          (this.h[0] = h(this.h[0], o)),
            (this.h[1] = h(this.h[1], i)),
            (this.h[2] = h(this.h[2], y)),
            (this.h[3] = h(this.h[3], b)),
            (this.h[4] = h(this.h[4], m)),
            (this.h[5] = h(this.h[5], v)),
            (this.h[6] = h(this.h[6], _)),
            (this.h[7] = h(this.h[7], S));
        }),
        (m.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        });
    },
    41547: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(40729);
      function i() {
        if (!(this instanceof i)) return new i();
        o.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231,
            1750603025, 3675008525, 1694076839, 1203062813, 3204075428
          ]);
      }
      n.inherits(i, o),
        (t.exports = i),
        (i.blockSize = 1024),
        (i.outSize = 384),
        (i.hmacStrength = 192),
        (i.padLength = 128),
        (i.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big");
        });
    },
    40729: (t, e, r) => {
      "use strict";
      var n = r(28634),
        o = r(65855),
        i = r(28694),
        s = n.rotr64_hi,
        h = n.rotr64_lo,
        a = n.shr64_hi,
        u = n.shr64_lo,
        c = n.sum64,
        l = n.sum64_hi,
        f = n.sum64_lo,
        p = n.sum64_4_hi,
        d = n.sum64_4_lo,
        g = n.sum64_5_hi,
        y = n.sum64_5_lo,
        b = o.BlockHash,
        m = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993,
          3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764,
          1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401,
          2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235,
          1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671,
          3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
          773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
          1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
          3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616,
          1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
          1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474,
          593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269,
          320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158,
          1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        b.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209
          ]),
          (this.k = m),
          (this.W = new Array(160));
      }
      function _(t, e, r, n, o) {
        var i = (t & r) ^ (~t & o);
        return i < 0 && (i += 4294967296), i;
      }
      function S(t, e, r, n, o, i) {
        var s = (e & n) ^ (~e & i);
        return s < 0 && (s += 4294967296), s;
      }
      function x(t, e, r, n, o) {
        var i = (t & r) ^ (t & o) ^ (r & o);
        return i < 0 && (i += 4294967296), i;
      }
      function w(t, e, r, n, o, i) {
        var s = (e & n) ^ (e & i) ^ (n & i);
        return s < 0 && (s += 4294967296), s;
      }
      function E(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function N(t, e) {
        var r = h(t, e, 28) ^ h(e, t, 2) ^ h(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function j(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function k(t, e) {
        var r = h(t, e, 14) ^ h(t, e, 18) ^ h(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function A(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ a(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function O(t, e) {
        var r = h(t, e, 1) ^ h(t, e, 8) ^ u(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function I(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ a(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function P(t, e) {
        var r = h(t, e, 19) ^ h(e, t, 29) ^ u(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      n.inherits(v, b),
        (t.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
          for (; n < r.length; n += 2) {
            var o = I(r[n - 4], r[n - 3]),
              i = P(r[n - 4], r[n - 3]),
              s = r[n - 14],
              h = r[n - 13],
              a = A(r[n - 30], r[n - 29]),
              u = O(r[n - 30], r[n - 29]),
              c = r[n - 32],
              l = r[n - 31];
            (r[n] = p(o, i, s, h, a, u, c, l)), (r[n + 1] = d(o, i, s, h, a, u, c, l));
          }
        }),
        (v.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            n = this.h[0],
            o = this.h[1],
            s = this.h[2],
            h = this.h[3],
            a = this.h[4],
            u = this.h[5],
            p = this.h[6],
            d = this.h[7],
            b = this.h[8],
            m = this.h[9],
            v = this.h[10],
            A = this.h[11],
            O = this.h[12],
            I = this.h[13],
            P = this.h[14],
            R = this.h[15];
          i(this.k.length === r.length);
          for (var D = 0; D < r.length; D += 2) {
            var z = P,
              L = R,
              C = j(b, m),
              T = k(b, m),
              B = _(b, m, v, A, O),
              V = S(b, m, v, A, O, I),
              H = this.k[D],
              M = this.k[D + 1],
              W = r[D],
              q = r[D + 1],
              K = g(z, L, C, T, B, V, H, M, W, q),
              F = y(z, L, C, T, B, V, H, M, W, q);
            (z = E(n, o)), (L = N(n, o)), (C = x(n, o, s, h, a)), (T = w(n, o, s, h, a, u));
            var Y = l(z, L, C, T),
              U = f(z, L, C, T);
            (P = O),
              (R = I),
              (O = v),
              (I = A),
              (v = b),
              (A = m),
              (b = l(p, d, K, F)),
              (m = f(d, d, K, F)),
              (p = a),
              (d = u),
              (a = s),
              (u = h),
              (s = n),
              (h = o),
              (n = l(K, F, Y, U)),
              (o = f(K, F, Y, U));
          }
          c(this.h, 0, n, o),
            c(this.h, 2, s, h),
            c(this.h, 4, a, u),
            c(this.h, 6, p, d),
            c(this.h, 8, b, m),
            c(this.h, 10, v, A),
            c(this.h, 12, O, I),
            c(this.h, 14, P, R);
        }),
        (v.prototype._digest = function (t) {
          return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
        });
    },
    64545: (t, e, r) => {
      "use strict";
      var n = r(28634).rotr32;
      function o(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function i(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function s(t, e, r) {
        return t ^ e ^ r;
      }
      (e.ft_1 = function (t, e, r, n) {
        return 0 === t ? o(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? i(e, r, n) : void 0;
      }),
        (e.ch32 = o),
        (e.maj32 = i),
        (e.p32 = s),
        (e.s0_256 = function (t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22);
        }),
        (e.s1_256 = function (t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25);
        }),
        (e.g0_256 = function (t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
        });
    },
    28634: (t, e, r) => {
      "use strict";
      var n = r(28694),
        o = r(67483);
      function i(t, e) {
        return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1));
      }
      function s(t) {
        return ((t >>> 24) | ((t >>> 8) & 65280) | ((t << 8) & 16711680) | ((255 & t) << 24)) >>> 0;
      }
      function h(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function a(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (e.inherits = o),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" == typeof t)
            if (e) {
              if ("hex" === e)
                for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), o = 0; o < t.length; o += 2)
                  r.push(parseInt(t[o] + t[o + 1], 16));
            } else
              for (var n = 0, o = 0; o < t.length; o++) {
                var s = t.charCodeAt(o);
                s < 128
                  ? (r[n++] = s)
                  : s < 2048
                  ? ((r[n++] = (s >> 6) | 192), (r[n++] = (63 & s) | 128))
                  : i(t, o)
                  ? ((s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++o))),
                    (r[n++] = (s >> 18) | 240),
                    (r[n++] = ((s >> 12) & 63) | 128),
                    (r[n++] = ((s >> 6) & 63) | 128),
                    (r[n++] = (63 & s) | 128))
                  : ((r[n++] = (s >> 12) | 224), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (63 & s) | 128));
              }
          else for (o = 0; o < t.length; o++) r[o] = 0 | t[o];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += h(t[r].toString(16));
          return e;
        }),
        (e.htonl = s),
        (e.toHex32 = function (t, e) {
          for (var r = "", n = 0; n < t.length; n++) {
            var o = t[n];
            "little" === e && (o = s(o)), (r += a(o.toString(16)));
          }
          return r;
        }),
        (e.zero2 = h),
        (e.zero8 = a),
        (e.join32 = function (t, e, r, o) {
          var i = r - e;
          n(i % 4 == 0);
          for (var s = new Array(i / 4), h = 0, a = e; h < s.length; h++, a += 4) {
            var u;
            (u =
              "big" === o
                ? (t[a] << 24) | (t[a + 1] << 16) | (t[a + 2] << 8) | t[a + 3]
                : (t[a + 3] << 24) | (t[a + 2] << 16) | (t[a + 1] << 8) | t[a]),
              (s[h] = u >>> 0);
          }
          return s;
        }),
        (e.split32 = function (t, e) {
          for (var r = new Array(4 * t.length), n = 0, o = 0; n < t.length; n++, o += 4) {
            var i = t[n];
            "big" === e
              ? ((r[o] = i >>> 24), (r[o + 1] = (i >>> 16) & 255), (r[o + 2] = (i >>> 8) & 255), (r[o + 3] = 255 & i))
              : ((r[o + 3] = i >>> 24), (r[o + 2] = (i >>> 16) & 255), (r[o + 1] = (i >>> 8) & 255), (r[o] = 255 & i));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, n) {
          return (t + e + r + n) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, n, o) {
          return (t + e + r + n + o) >>> 0;
        }),
        (e.sum64 = function (t, e, r, n) {
          var o = t[e],
            i = (n + t[e + 1]) >>> 0,
            s = (i < n ? 1 : 0) + r + o;
          (t[e] = s >>> 0), (t[e + 1] = i);
        }),
        (e.sum64_hi = function (t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, n) {
          return (e + n) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, n, o, i, s, h) {
          var a = 0,
            u = e;
          return (
            (a += (u = (u + n) >>> 0) < e ? 1 : 0),
            (a += (u = (u + i) >>> 0) < i ? 1 : 0),
            (t + r + o + s + (a += (u = (u + h) >>> 0) < h ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, n, o, i, s, h) {
          return (e + n + i + h) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, n, o, i, s, h, a, u) {
          var c = 0,
            l = e;
          return (
            (c += (l = (l + n) >>> 0) < e ? 1 : 0),
            (c += (l = (l + i) >>> 0) < i ? 1 : 0),
            (c += (l = (l + h) >>> 0) < h ? 1 : 0),
            (t + r + o + s + a + (c += (l = (l + u) >>> 0) < u ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, n, o, i, s, h, a, u) {
          return (e + n + i + h + u) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    53250: (t, e, r) => {
      "use strict";
      var n = r(45370),
        o = r(73721),
        i = r(28694);
      function s(t) {
        if (!(this instanceof s)) return new s(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = o.toArray(t.entropy, t.entropyEnc || "hex"),
          r = o.toArray(t.nonce, t.nonceEnc || "hex"),
          n = o.toArray(t.pers, t.persEnc || "hex");
        i(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n);
      }
      (t.exports = s),
        (s.prototype._init = function (t, e, r) {
          var n = t.concat(e).concat(r);
          (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
          for (var o = 0; o < this.V.length; o++) (this.K[o] = 0), (this.V[o] = 1);
          this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656);
        }),
        (s.prototype._hmac = function () {
          return new n.hmac(this.hash, this.K);
        }),
        (s.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t && ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()), (this.V = this._hmac().update(this.V).digest()));
        }),
        (s.prototype.reseed = function (t, e, r, n) {
          "string" != typeof e && ((n = r), (r = e), (e = null)),
            (t = o.toArray(t, e)),
            (r = o.toArray(r, n)),
            i(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (s.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
          "string" != typeof e && ((n = r), (r = e), (e = null)), r && ((r = o.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < t; ) (this.V = this._hmac().update(this.V).digest()), (i = i.concat(this.V));
          var s = i.slice(0, t);
          return this._update(r), this._reseed++, o.encode(s, e);
        });
    },
    64177: function (t, e, r) {
      var n, o;
      !(function (i, s, h) {
        "use strict";
        (n = function () {
          var t = function (t) {
              throw t;
            },
            e = function () {},
            r = {
              storeName: "Store",
              storePrefix: "IDBWrapper-",
              dbVersion: 1,
              keyPath: "id",
              autoIncrement: !0,
              onStoreReady: function () {},
              onError: t,
              indexes: [],
              implementationPreference: ["indexedDB", "webkitIndexedDB", "mozIndexedDB", "shimIndexedDB"]
            },
            n = function (t, e) {
              for (var n in (void 0 === e && "function" == typeof t && (e = t),
              "[object Object]" != Object.prototype.toString.call(t) && (t = {}),
              r))
                this[n] = void 0 !== t[n] ? t[n] : r[n];
              (this.dbName = this.storePrefix + this.storeName),
                (this.dbVersion = parseInt(this.dbVersion, 10) || 1),
                e && (this.onStoreReady = e);
              var o = "object" == typeof window ? window : self,
                i = this.implementationPreference.filter(function (t) {
                  return t in o;
                });
              (this.implementation = i[0]),
                (this.idb = o[this.implementation]),
                (this.keyRange = o.IDBKeyRange || o.webkitIDBKeyRange || o.mozIDBKeyRange),
                (this.consts = {
                  READ_ONLY: "readonly",
                  READ_WRITE: "readwrite",
                  VERSION_CHANGE: "versionchange",
                  NEXT: "next",
                  NEXT_NO_DUPLICATE: "nextunique",
                  PREV: "prev",
                  PREV_NO_DUPLICATE: "prevunique"
                }),
                this.openDB();
            },
            o = {
              constructor: n,
              version: "1.7.2",
              db: null,
              dbName: null,
              dbVersion: null,
              store: null,
              storeName: null,
              storePrefix: null,
              keyPath: null,
              autoIncrement: null,
              indexes: null,
              implementationPreference: null,
              implementation: "",
              onStoreReady: null,
              onError: null,
              _insertIdCount: 0,
              openDB: function () {
                var t = this.idb.open(this.dbName, this.dbVersion),
                  e = !1;
                (t.onerror = function (t) {
                  if (h(t)) this.onError(new Error("The version number provided is lower than the existing one."));
                  else {
                    var e;
                    if (t.target.error) e = t.target.error;
                    else {
                      var r = "IndexedDB unknown error occurred when opening DB " + this.dbName + " version " + this.dbVersion;
                      "errorCode" in t.target && (r += " with error code " + t.target.errorCode), (e = new Error(r));
                    }
                    this.onError(e);
                  }
                }.bind(this)),
                  (t.onsuccess = function (t) {
                    if (!e)
                      if (this.db) this.onStoreReady();
                      else if (((this.db = t.target.result), "string" != typeof this.db.version))
                        if (this.db.objectStoreNames.contains(this.storeName)) {
                          var r = this.db.transaction([this.storeName], this.consts.READ_ONLY);
                          this.store = r.objectStore(this.storeName);
                          var n = Array.prototype.slice.call(this.getIndexList());
                          this.indexes.forEach(function (t) {
                            var r = t.name;
                            if (!r) return (e = !0), void this.onError(new Error("Cannot create index: No index name given."));
                            if ((this.normalizeIndexData(t), this.hasIndex(r))) {
                              var o = this.store.index(r);
                              this.indexComplies(o, t) ||
                                ((e = !0),
                                this.onError(
                                  new Error(
                                    'Cannot modify index "' +
                                      r +
                                      '" for current version. Please bump version number to ' +
                                      (this.dbVersion + 1) +
                                      "."
                                  )
                                )),
                                n.splice(n.indexOf(r), 1);
                            } else
                              (e = !0),
                                this.onError(
                                  new Error(
                                    'Cannot create new index "' +
                                      r +
                                      '" for current version. Please bump version number to ' +
                                      (this.dbVersion + 1) +
                                      "."
                                  )
                                );
                          }, this),
                            n.length &&
                              ((e = !0),
                              this.onError(
                                new Error(
                                  'Cannot delete index(es) "' +
                                    n.toString() +
                                    '" for current version. Please bump version number to ' +
                                    (this.dbVersion + 1) +
                                    "."
                                )
                              )),
                            e || this.onStoreReady();
                        } else this.onError(new Error("Object store couldn't be created."));
                      else
                        this.onError(new Error("The IndexedDB implementation in this browser is outdated. Please upgrade your browser."));
                  }.bind(this)),
                  (t.onupgradeneeded = function (t) {
                    if (((this.db = t.target.result), this.db.objectStoreNames.contains(this.storeName)))
                      this.store = t.target.transaction.objectStore(this.storeName);
                    else {
                      var r = { autoIncrement: this.autoIncrement };
                      null !== this.keyPath && (r.keyPath = this.keyPath), (this.store = this.db.createObjectStore(this.storeName, r));
                    }
                    var n = Array.prototype.slice.call(this.getIndexList());
                    this.indexes.forEach(function (t) {
                      var r = t.name;
                      if (
                        (r || ((e = !0), this.onError(new Error("Cannot create index: No index name given."))),
                        this.normalizeIndexData(t),
                        this.hasIndex(r))
                      ) {
                        var o = this.store.index(r);
                        this.indexComplies(o, t) ||
                          (this.store.deleteIndex(r), this.store.createIndex(r, t.keyPath, { unique: t.unique, multiEntry: t.multiEntry })),
                          n.splice(n.indexOf(r), 1);
                      } else this.store.createIndex(r, t.keyPath, { unique: t.unique, multiEntry: t.multiEntry });
                    }, this),
                      n.length &&
                        n.forEach(function (t) {
                          this.store.deleteIndex(t);
                        }, this);
                  }.bind(this));
              },
              deleteDatabase: function (t, e) {
                if (this.idb.deleteDatabase) {
                  this.db.close();
                  var r = this.idb.deleteDatabase(this.dbName);
                  (r.onsuccess = t), (r.onerror = e);
                } else e(new Error("Browser does not support IndexedDB deleteDatabase!"));
              },
              put: function (r, n, o, i) {
                null !== this.keyPath && ((i = o), (o = n), (n = r)), i || (i = t), o || (o = e);
                var s,
                  h = !1,
                  a = null,
                  u = this.db.transaction([this.storeName], this.consts.READ_WRITE);
                return (
                  (u.oncomplete = function () {
                    (h ? o : i)(a);
                  }),
                  (u.onabort = i),
                  (u.onerror = i),
                  null !== this.keyPath
                    ? (this._addIdPropertyIfNeeded(n), (s = u.objectStore(this.storeName).put(n)))
                    : (s = u.objectStore(this.storeName).put(n, r)),
                  (s.onsuccess = function (t) {
                    (h = !0), (a = t.target.result);
                  }),
                  (s.onerror = i),
                  u
                );
              },
              get: function (r, n, o) {
                o || (o = t), n || (n = e);
                var i = !1,
                  s = null,
                  h = this.db.transaction([this.storeName], this.consts.READ_ONLY);
                (h.oncomplete = function () {
                  (i ? n : o)(s);
                }),
                  (h.onabort = o),
                  (h.onerror = o);
                var a = h.objectStore(this.storeName).get(r);
                return (
                  (a.onsuccess = function (t) {
                    (i = !0), (s = t.target.result);
                  }),
                  (a.onerror = o),
                  h
                );
              },
              remove: function (r, n, o) {
                o || (o = t), n || (n = e);
                var i = !1,
                  s = null,
                  h = this.db.transaction([this.storeName], this.consts.READ_WRITE);
                (h.oncomplete = function () {
                  (i ? n : o)(s);
                }),
                  (h.onabort = o),
                  (h.onerror = o);
                var a = h.objectStore(this.storeName).delete(r);
                return (
                  (a.onsuccess = function (t) {
                    (i = !0), (s = t.target.result);
                  }),
                  (a.onerror = o),
                  h
                );
              },
              batch: function (r, n, o) {
                if ((o || (o = t), n || (n = e), "[object Array]" != Object.prototype.toString.call(r)))
                  o(new Error("dataArray argument must be of type Array."));
                else if (0 === r.length) return n(!0);
                var i = r.length,
                  s = !1,
                  h = !1,
                  a = this.db.transaction([this.storeName], this.consts.READ_WRITE);
                (a.oncomplete = function () {
                  (h ? n : o)(h);
                }),
                  (a.onabort = o),
                  (a.onerror = o);
                var u = function () {
                  0 !== --i || s || ((s = !0), (h = !0));
                };
                return (
                  r.forEach(function (t) {
                    var e = t.type,
                      r = t.key,
                      n = t.value,
                      i = function (t) {
                        a.abort(), s || ((s = !0), o(t, e, r));
                      };
                    if ("remove" == e) {
                      var h = a.objectStore(this.storeName).delete(r);
                      (h.onsuccess = u), (h.onerror = i);
                    } else if ("put" == e) {
                      var c;
                      null !== this.keyPath
                        ? (this._addIdPropertyIfNeeded(n), (c = a.objectStore(this.storeName).put(n)))
                        : (c = a.objectStore(this.storeName).put(n, r)),
                        (c.onsuccess = u),
                        (c.onerror = i);
                    }
                  }, this),
                  a
                );
              },
              putBatch: function (t, e, r) {
                var n = t.map(function (t) {
                  return { type: "put", value: t };
                });
                return this.batch(n, e, r);
              },
              upsertBatch: function (r, n, o, i) {
                "function" == typeof n && ((i = o = n), (n = {})),
                  i || (i = t),
                  o || (o = e),
                  n || (n = {}),
                  "[object Array]" != Object.prototype.toString.call(r) && i(new Error("dataArray argument must be of type Array."));
                var s = n.keyField || this.keyPath,
                  h = r.length,
                  a = !1,
                  u = !1,
                  c = 0,
                  l = this.db.transaction([this.storeName], this.consts.READ_WRITE);
                (l.oncomplete = function () {
                  u ? o(r) : i(!1);
                }),
                  (l.onabort = i),
                  (l.onerror = i);
                var f = function (t) {
                  (r[c++][s] = t.target.result), 0 !== --h || a || ((a = !0), (u = !0));
                };
                return (
                  r.forEach(function (t) {
                    var e,
                      r = t.key,
                      n = function (t) {
                        l.abort(), a || ((a = !0), i(t));
                      };
                    null !== this.keyPath
                      ? (this._addIdPropertyIfNeeded(t), (e = l.objectStore(this.storeName).put(t)))
                      : (e = l.objectStore(this.storeName).put(t, r)),
                      (e.onsuccess = f),
                      (e.onerror = n);
                  }, this),
                  l
                );
              },
              removeBatch: function (t, e, r) {
                var n = t.map(function (t) {
                  return { type: "remove", key: t };
                });
                return this.batch(n, e, r);
              },
              getBatch: function (r, n, o, i) {
                if ((o || (o = t), n || (n = e), i || (i = "sparse"), "[object Array]" != Object.prototype.toString.call(r)))
                  o(new Error("keyArray argument must be of type Array."));
                else if (0 === r.length) return n([]);
                var s = [],
                  h = r.length,
                  a = !1,
                  u = null,
                  c = this.db.transaction([this.storeName], this.consts.READ_ONLY);
                (c.oncomplete = function () {
                  (a ? n : o)(u);
                }),
                  (c.onabort = o),
                  (c.onerror = o);
                var l = function (t) {
                  t.target.result || "dense" == i ? s.push(t.target.result) : "sparse" == i && s.length++,
                    0 === --h && (!0, (a = !0), (u = s));
                };
                return (
                  r.forEach(function (t) {
                    var e = function (t) {
                        !0, (u = t), o(t), c.abort();
                      },
                      r = c.objectStore(this.storeName).get(t);
                    (r.onsuccess = l), (r.onerror = e);
                  }, this),
                  c
                );
              },
              getAll: function (r, n) {
                n || (n = t), r || (r = e);
                var o = this.db.transaction([this.storeName], this.consts.READ_ONLY),
                  i = o.objectStore(this.storeName);
                return i.getAll ? this._getAllNative(o, i, r, n) : this._getAllCursor(o, i, r, n), o;
              },
              _getAllNative: function (t, e, r, n) {
                var o = !1,
                  i = null;
                (t.oncomplete = function () {
                  (o ? r : n)(i);
                }),
                  (t.onabort = n),
                  (t.onerror = n);
                var s = e.getAll();
                (s.onsuccess = function (t) {
                  (o = !0), (i = t.target.result);
                }),
                  (s.onerror = n);
              },
              _getAllCursor: function (t, e, r, n) {
                var o = [],
                  i = !1,
                  s = null;
                (t.oncomplete = function () {
                  (i ? r : n)(s);
                }),
                  (t.onabort = n),
                  (t.onerror = n);
                var h = e.openCursor();
                (h.onsuccess = function (t) {
                  var e = t.target.result;
                  e ? (o.push(e.value), e.continue()) : ((i = !0), (s = o));
                }),
                  (h.onError = n);
              },
              clear: function (r, n) {
                n || (n = t), r || (r = e);
                var o = !1,
                  i = null,
                  s = this.db.transaction([this.storeName], this.consts.READ_WRITE);
                (s.oncomplete = function () {
                  (o ? r : n)(i);
                }),
                  (s.onabort = n),
                  (s.onerror = n);
                var h = s.objectStore(this.storeName).clear();
                return (
                  (h.onsuccess = function (t) {
                    (o = !0), (i = t.target.result);
                  }),
                  (h.onerror = n),
                  s
                );
              },
              _addIdPropertyIfNeeded: function (t) {
                void 0 === t[this.keyPath] && (t[this.keyPath] = this._insertIdCount++ + Date.now());
              },
              getIndexList: function () {
                return this.store.indexNames;
              },
              hasIndex: function (t) {
                return this.store.indexNames.contains(t);
              },
              normalizeIndexData: function (t) {
                (t.keyPath = t.keyPath || t.name), (t.unique = !!t.unique), (t.multiEntry = !!t.multiEntry);
              },
              indexComplies: function (t, e) {
                return ["keyPath", "unique", "multiEntry"].every(function (r) {
                  if ("multiEntry" == r && void 0 === t[r] && !1 === e[r]) return !0;
                  if ("keyPath" == r && "[object Array]" == Object.prototype.toString.call(e[r])) {
                    var n = e.keyPath,
                      o = t.keyPath;
                    if ("string" == typeof o) return n.toString() == o;
                    if ("function" != typeof o.contains && "function" != typeof o.indexOf) return !1;
                    if (o.length !== n.length) return !1;
                    for (var i = 0, s = n.length; i < s; i++) if (!((o.contains && o.contains(n[i])) || o.indexOf(-1 !== n[i]))) return !1;
                    return !0;
                  }
                  return e[r] == t[r];
                });
              },
              iterate: function (e, r) {
                var n =
                  "desc" ==
                  (r = s(
                    {
                      index: null,
                      order: "ASC",
                      autoContinue: !0,
                      filterDuplicates: !1,
                      keyRange: null,
                      writeAccess: !1,
                      onEnd: null,
                      onError: t,
                      limit: 1 / 0,
                      offset: 0,
                      allowItemRejection: !1
                    },
                    r || {}
                  )).order.toLowerCase()
                    ? "PREV"
                    : "NEXT";
                r.filterDuplicates && (n += "_NO_DUPLICATE");
                var o = !1,
                  i = this.db.transaction([this.storeName], this.consts[r.writeAccess ? "READ_WRITE" : "READ_ONLY"]),
                  h = i.objectStore(this.storeName);
                r.index && (h = h.index(r.index));
                var a = 0;
                (i.oncomplete = function () {
                  o ? (r.onEnd ? r.onEnd() : e(null)) : r.onError(null);
                }),
                  (i.onabort = r.onError),
                  (i.onerror = r.onError);
                var u = h.openCursor(r.keyRange, this.consts[n]);
                return (
                  (u.onerror = r.onError),
                  (u.onsuccess = function (t) {
                    var n = t.target.result;
                    if (n)
                      if (r.offset) n.advance(r.offset), (r.offset = 0);
                      else {
                        var s = e(n.value, n, i);
                        (r.allowItemRejection && !1 === s) || a++, r.autoContinue && (a + r.offset < r.limit ? n.continue() : (o = !0));
                      }
                    else o = !0;
                  }),
                  i
                );
              },
              query: function (t, e) {
                var r = [],
                  n = 0;
                return (
                  ((e = e || {}).autoContinue = !0),
                  (e.writeAccess = !1),
                  (e.allowItemRejection = !!e.filter),
                  (e.onEnd = function () {
                    t(r, n);
                  }),
                  this.iterate(function (t) {
                    n++;
                    var o = !e.filter || e.filter(t);
                    return !1 !== o && r.push(t), o;
                  }, e)
                );
              },
              count: function (e, r) {
                var n = (r = s({ index: null, keyRange: null }, r || {})).onError || t,
                  o = !1,
                  i = null,
                  h = this.db.transaction([this.storeName], this.consts.READ_ONLY);
                (h.oncomplete = function () {
                  (o ? e : n)(i);
                }),
                  (h.onabort = n),
                  (h.onerror = n);
                var a = h.objectStore(this.storeName);
                r.index && (a = a.index(r.index));
                var u = a.count(r.keyRange);
                return (
                  (u.onsuccess = function (t) {
                    (o = !0), (i = t.target.result);
                  }),
                  (u.onError = n),
                  h
                );
              },
              makeKeyRange: function (t) {
                var e,
                  r = void 0 !== t.lower,
                  n = void 0 !== t.upper;
                switch (!0) {
                  case void 0 !== t.only:
                    e = this.keyRange.only(t.only);
                    break;
                  case r && n:
                    e = this.keyRange.bound(t.lower, t.upper, t.excludeLower, t.excludeUpper);
                    break;
                  case r:
                    e = this.keyRange.lowerBound(t.lower, t.excludeLower);
                    break;
                  case n:
                    e = this.keyRange.upperBound(t.upper, t.excludeUpper);
                    break;
                  default:
                    throw new Error('Cannot create KeyRange. Provide one or both of "lower" or "upper" value, or an "only" value.');
                }
                return e;
              }
            },
            i = {};
          function s(t, e) {
            var r, n;
            for (r in e) (n = e[r]) !== i[r] && n !== t[r] && (t[r] = n);
            return t;
          }
          function h(t) {
            return "error" in t.target ? "VersionError" == t.target.error.name : "errorCode" in t.target && 12 == t.target.errorCode;
          }
          return (n.prototype = o), (n.version = o.version), n;
        }),
          void 0 === (o = "function" == typeof n ? n.call(e, r, e, t) : n) || (t.exports = o);
      })();
    },
    47164: (t, e) => {
      (e.read = function (t, e, r, n, o) {
        var i,
          s,
          h = 8 * o - n - 1,
          a = (1 << h) - 1,
          u = a >> 1,
          c = -7,
          l = r ? o - 1 : 0,
          f = r ? -1 : 1,
          p = t[e + l];
        for (l += f, i = p & ((1 << -c) - 1), p >>= -c, c += h; c > 0; i = 256 * i + t[e + l], l += f, c -= 8);
        for (s = i & ((1 << -c) - 1), i >>= -c, c += n; c > 0; s = 256 * s + t[e + l], l += f, c -= 8);
        if (0 === i) i = 1 - u;
        else {
          if (i === a) return s ? NaN : (1 / 0) * (p ? -1 : 1);
          (s += Math.pow(2, n)), (i -= u);
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - n);
      }),
        (e.write = function (t, e, r, n, o, i) {
          var s,
            h,
            a,
            u = 8 * i - o - 1,
            c = (1 << u) - 1,
            l = c >> 1,
            f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : i - 1,
            d = n ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((h = isNaN(e) ? 1 : 0), (s = c))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (a = Math.pow(2, -s)) < 1 && (s--, (a *= 2)),
                  (e += s + l >= 1 ? f / a : f * Math.pow(2, 1 - l)) * a >= 2 && (s++, (a /= 2)),
                  s + l >= c
                    ? ((h = 0), (s = c))
                    : s + l >= 1
                    ? ((h = (e * a - 1) * Math.pow(2, o)), (s += l))
                    : ((h = e * Math.pow(2, l - 1) * Math.pow(2, o)), (s = 0)));
            o >= 8;
            t[r + p] = 255 & h, p += d, h /= 256, o -= 8
          );
          for (s = (s << o) | h, u += o; u > 0; t[r + p] = 255 & s, p += d, s /= 256, u -= 8);
          t[r + p - d] |= 128 * g;
        });
    },
    47442: (t) => {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var r = function () {};
            (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
          });
    },
    67483: (t) => {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
            }
          });
    },
    59462: (t, e, r) => {
      "use strict";
      var n = r(73342)(),
        o = r(2864)("Object.prototype.toString"),
        i = function (t) {
          return !(n && t && "object" == typeof t && Symbol.toStringTag in t) && "[object Arguments]" === o(t);
        },
        s = function (t) {
          return (
            !!i(t) ||
            (null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Array]" !== o(t) &&
              "[object Function]" === o(t.callee))
          );
        },
        h = (function () {
          return i(arguments);
        })();
      (i.isLegacyArguments = s), (t.exports = h ? i : s);
    },
    49861: (t) => {
      "use strict";
      var e,
        r,
        n = Function.prototype.toString,
        o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof o && "function" == typeof Object.defineProperty)
        try {
          (e = Object.defineProperty({}, "length", {
            get: function () {
              throw r;
            }
          })),
            (r = {}),
            o(
              function () {
                throw 42;
              },
              null,
              e
            );
        } catch (t) {
          t !== r && (o = null);
        }
      else o = null;
      var i = /^\s*class\b/,
        s = function (t) {
          try {
            var e = n.call(t);
            return i.test(e);
          } catch (t) {
            return !1;
          }
        },
        h = function (t) {
          try {
            return !s(t) && (n.call(t), !0);
          } catch (t) {
            return !1;
          }
        },
        a = Object.prototype.toString,
        u = "function" == typeof Symbol && !!Symbol.toStringTag,
        c = !(0 in [,]),
        l = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var f = document.all;
        a.call(f) === a.call(document.all) &&
          (l = function (t) {
            if ((c || !t) && (void 0 === t || "object" == typeof t))
              try {
                var e = a.call(t);
                return (
                  ("[object HTMLAllCollection]" === e ||
                    "[object HTML document.all class]" === e ||
                    "[object HTMLCollection]" === e ||
                    "[object Object]" === e) &&
                  null == t("")
                );
              } catch (t) {}
            return !1;
          });
      }
      t.exports = o
        ? function (t) {
            if (l(t)) return !0;
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            try {
              o(t, null, e);
            } catch (t) {
              if (t !== r) return !1;
            }
            return !s(t) && h(t);
          }
        : function (t) {
            if (l(t)) return !0;
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (u) return h(t);
            if (s(t)) return !1;
            var e = a.call(t);
            return !("[object Function]" !== e && "[object GeneratorFunction]" !== e && !/^\[object HTML/.test(e)) && h(t);
          };
    },
    37136: (t, e, r) => {
      "use strict";
      var n,
        o = Object.prototype.toString,
        i = Function.prototype.toString,
        s = /^\s*(?:function)?\*/,
        h = r(73342)(),
        a = Object.getPrototypeOf;
      t.exports = function (t) {
        if ("function" != typeof t) return !1;
        if (s.test(i.call(t))) return !0;
        if (!h) return "[object GeneratorFunction]" === o.call(t);
        if (!a) return !1;
        if (void 0 === n) {
          var e = (function () {
            if (!h) return !1;
            try {
              return Function("return function*() {}")();
            } catch (t) {}
          })();
          n = !!e && a(e);
        }
        return a(t) === n;
      };
    },
    49029: (t) => {
      "use strict";
      t.exports = function (t) {
        return t != t;
      };
    },
    29736: (t, e, r) => {
      "use strict";
      var n = r(25592),
        o = r(6648),
        i = r(49029),
        s = r(46240),
        h = r(24645),
        a = n(s(), Number);
      o(a, { getPolyfill: s, implementation: i, shim: h }), (t.exports = a);
    },
    46240: (t, e, r) => {
      "use strict";
      var n = r(49029);
      t.exports = function () {
        return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n;
      };
    },
    24645: (t, e, r) => {
      "use strict";
      var n = r(6648),
        o = r(46240);
      t.exports = function () {
        var t = o();
        return (
          n(
            Number,
            { isNaN: t },
            {
              isNaN: function () {
                return Number.isNaN !== t;
              }
            }
          ),
          t
        );
      };
    },
    91407: (t, e, r) => {
      "use strict";
      var n = r(98),
        o = r(13719),
        i = r(2864),
        s = i("Object.prototype.toString"),
        h = r(73342)(),
        a = r(98158),
        u = "undefined" == typeof globalThis ? r.g : globalThis,
        c = o(),
        l =
          i("Array.prototype.indexOf", !0) ||
          function (t, e) {
            for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
            return -1;
          },
        f = i("String.prototype.slice"),
        p = {},
        d = Object.getPrototypeOf;
      h &&
        a &&
        d &&
        n(c, function (t) {
          var e = new u[t]();
          if (Symbol.toStringTag in e) {
            var r = d(e),
              n = a(r, Symbol.toStringTag);
            if (!n) {
              var o = d(r);
              n = a(o, Symbol.toStringTag);
            }
            p[t] = n.get;
          }
        });
      t.exports = function (t) {
        if (!t || "object" != typeof t) return !1;
        if (!h || !(Symbol.toStringTag in t)) {
          var e = f(s(t), 8, -1);
          return l(c, e) > -1;
        }
        return (
          !!a &&
          (function (t) {
            var e = !1;
            return (
              n(p, function (r, n) {
                if (!e)
                  try {
                    e = r.call(t) === n;
                  } catch (t) {}
              }),
              e
            );
          })(t)
        );
      };
    }
  }
]);
