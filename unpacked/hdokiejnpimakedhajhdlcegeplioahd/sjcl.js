"use strict";
var sjcl = {
  cipher: {},
  hash: {},
  keyexchange: {},
  mode: {},
  misc: {},
  codec: {},
  exception: {
    corrupt: function (t) {
      (this.toString = function () {
        return "CORRUPT: " + this.message;
      }),
        (this.message = t);
    },
    invalid: function (t) {
      (this.toString = function () {
        return "INVALID: " + this.message;
      }),
        (this.message = t);
    },
    bug: function (t) {
      (this.toString = function () {
        return "BUG: " + this.message;
      }),
        (this.message = t);
    },
    notReady: function (t) {
      (this.toString = function () {
        return "NOT READY: " + this.message;
      }),
        (this.message = t);
    }
  }
};
"undefined" != typeof module && module.exports && (module.exports = sjcl),
  "function" == typeof define &&
    define([], function () {
      return sjcl;
    }),
  (sjcl.bitArray = {
    bitSlice: function (t, i, s) {
      return (t = sjcl.bitArray._shiftRight(t.slice(i / 32), 32 - (31 & i)).slice(1)), void 0 === s ? t : sjcl.bitArray.clamp(t, s - i);
    },
    extract: function (t, i, s) {
      var t,
        e = Math.floor((-i - s) & 31),
        t = -32 & ((i + s - 1) ^ i) ? (t[(i / 32) | 0] << (32 - e)) ^ (t[(i / 32 + 1) | 0] >>> e) : t[(i / 32) | 0] >>> e;
      return t & ((1 << s) - 1);
    },
    concat: function (t, i) {
      var s, e;
      return 0 === t.length || 0 === i.length || ((s = t[t.length - 1]), 32 === (e = sjcl.bitArray.getPartial(s)))
        ? t.concat(i)
        : sjcl.bitArray._shiftRight(i, e, 0 | s, t.slice(0, t.length - 1));
    },
    bitLength: function (t) {
      var i = t.length,
        t;
      return 0 === i ? 0 : ((t = t[i - 1]), 32 * (i - 1) + sjcl.bitArray.getPartial(t));
    },
    clamp: function (t, i) {
      var s;
      return (
        32 * t.length < i ||
          ((s = (t = t.slice(0, Math.ceil(i / 32))).length),
          (i &= 31),
          0 < s && i && (t[s - 1] = sjcl.bitArray.partial(i, t[s - 1] & (2147483648 >> (i - 1)), 1))),
        t
      );
    },
    partial: function (t, i, s) {
      return 32 === t ? i : (s ? 0 | i : i << (32 - t)) + 1099511627776 * t;
    },
    getPartial: function (t) {
      return Math.round(t / 1099511627776) || 32;
    },
    equal: function (t, i) {
      if (sjcl.bitArray.bitLength(t) !== sjcl.bitArray.bitLength(i)) return !1;
      for (var s = 0, e, e = 0; e < t.length; e++) s |= t[e] ^ i[e];
      return 0 === s;
    },
    _shiftRight: function (t, i, s, e) {
      var r,
        n = 0,
        n;
      for (void 0 === e && (e = []); 32 <= i; i -= 32) e.push(s), (s = 0);
      if (0 === i) return e.concat(t);
      for (r = 0; r < t.length; r++) e.push(s | (t[r] >>> i)), (s = t[r] << (32 - i));
      return (
        (n = t.length ? t[t.length - 1] : 0),
        (n = sjcl.bitArray.getPartial(n)),
        e.push(sjcl.bitArray.partial((i + n) & 31, 32 < i + n ? s : e.pop(), 1)),
        e
      );
    },
    _xor4: function (t, i) {
      return [t[0] ^ i[0], t[1] ^ i[1], t[2] ^ i[2], t[3] ^ i[3]];
    },
    byteswapM: function (t) {
      for (var i, s, e = 65280, i = 0; i < t.length; ++i) (s = t[i]), (t[i] = (s >>> 24) | ((s >>> 8) & e) | ((s & e) << 8) | (s << 24));
      return t;
    }
  }),
  (sjcl.codec.utf8String = {
    fromBits: function (t) {
      for (var i = "", s = sjcl.bitArray.bitLength(t), e, r, e = 0; e < s / 8; e++)
        0 == (3 & e) && (r = t[e / 4]), (i += String.fromCharCode(r >>> 24)), (r <<= 8);
      return decodeURIComponent(escape(i));
    },
    toBits: function (t) {
      t = unescape(encodeURIComponent(t));
      for (var i = [], s, e = 0, s = 0; s < t.length; s++) (e = (e << 8) | t.charCodeAt(s)), 3 == (3 & s) && (i.push(e), (e = 0));
      return 3 & s && i.push(sjcl.bitArray.partial(8 * (3 & s), e)), i;
    }
  }),
  (sjcl.codec.hex = {
    fromBits: function (t) {
      for (var i = "", s, s = 0; s < t.length; s++) i += (0xf00000000000 + (0 | t[s])).toString(16).substr(4);
      return i.substr(0, sjcl.bitArray.bitLength(t) / 4);
    },
    toBits: function (t) {
      var i,
        s = [],
        e,
        e = (t = t.replace(/\s|0x/g, "")).length;
      for (t += "00000000", i = 0; i < t.length; i += 8) s.push(0 ^ parseInt(t.substr(i, 8), 16));
      return sjcl.bitArray.clamp(s, 4 * e);
    }
  }),
  (sjcl.codec.base64 = {
    _chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromBits: function (t, i, s) {
      var e = "",
        r,
        n = 0,
        h = sjcl.codec.base64._chars,
        c = 0,
        o = sjcl.bitArray.bitLength(t);
      for (s && (h = h.substr(0, 62) + "-_"), r = 0; 6 * e.length < o; )
        (e += h.charAt((c ^ (t[r] >>> n)) >>> 26)), n < 6 ? ((c = t[r] << (6 - n)), (n += 26), r++) : ((c <<= 6), (n -= 6));
      for (; 3 & e.length && !i; ) e += "=";
      return e;
    },
    toBits: function (t, i) {
      t = t.replace(/\s|=/g, "");
      var s = [],
        e,
        r = 0,
        n = sjcl.codec.base64._chars,
        h = 0,
        c;
      for (i && (n = n.substr(0, 62) + "-_"), e = 0; e < t.length; e++) {
        if ((c = n.indexOf(t.charAt(e))) < 0) throw new sjcl.exception.invalid("this isn't base64!");
        26 < r ? (s.push(h ^ (c >>> (r -= 26))), (h = c << (32 - r))) : (h ^= c << (32 - (r += 6)));
      }
      return 56 & r && s.push(sjcl.bitArray.partial(56 & r, h, 1)), s;
    }
  }),
  (sjcl.codec.base64url = {
    fromBits: function (t) {
      return sjcl.codec.base64.fromBits(t, 1, 1);
    },
    toBits: function (t) {
      return sjcl.codec.base64.toBits(t, 1);
    }
  }),
  (sjcl.codec.bytes = {
    fromBits: function (t) {
      for (var i = [], s = sjcl.bitArray.bitLength(t), e, r, e = 0; e < s / 8; e++)
        0 == (3 & e) && (r = t[e / 4]), i.push(r >>> 24), (r <<= 8);
      return i;
    },
    toBits: function (t) {
      for (var i = [], s, e = 0, s = 0; s < t.length; s++) (e = (e << 8) | t[s]), 3 == (3 & s) && (i.push(e), (e = 0));
      return 3 & s && i.push(sjcl.bitArray.partial(8 * (3 & s), e)), i;
    }
  }),
  (sjcl.hash.sha256 = function (t) {
    this._key[0] || this._precompute(),
      t ? ((this._h = t._h.slice(0)), (this._buffer = t._buffer.slice(0)), (this._length = t._length)) : this.reset();
  }),
  (sjcl.hash.sha256.hash = function (t) {
    return new sjcl.hash.sha256().update(t).finalize();
  }),
  (sjcl.hash.sha256.prototype = {
    blockSize: 512,
    reset: function () {
      return (this._h = this._init.slice(0)), (this._buffer = []), (this._length = 0), this;
    },
    update: function (t) {
      "string" == typeof t && (t = sjcl.codec.utf8String.toBits(t));
      for (
        var i,
          s = (this._buffer = sjcl.bitArray.concat(this._buffer, t)),
          e = this._length,
          r = (this._length = e + sjcl.bitArray.bitLength(t)),
          i = (512 + e) & -512;
        i <= r;
        i += 512
      )
        this._block(s.splice(0, 16));
      return this;
    },
    finalize: function () {
      for (
        var t, i = this._buffer, s = this._h, i, t = (i = sjcl.bitArray.concat(i, [sjcl.bitArray.partial(1, 1)])).length + 2;
        15 & t;
        t++
      )
        i.push(0);
      for (i.push(Math.floor(this._length / 4294967296)), i.push(0 | this._length); i.length; ) this._block(i.splice(0, 16));
      return this.reset(), s;
    },
    _init: [],
    _key: [],
    _precompute: function () {
      var t = 0,
        i = 2,
        s;
      function e(t) {
        return (4294967296 * (t - Math.floor(t))) | 0;
      }
      t: for (; t < 64; i++) {
        for (s = 2; s * s <= i; s++) if (i % s == 0) continue t;
        t < 8 && (this._init[t] = e(Math.pow(i, 0.5))), (this._key[t] = e(Math.pow(i, 1 / 3))), t++;
      }
    },
    _block: function (t) {
      for (
        var i,
          s,
          s,
          e,
          r = t.slice(0),
          t = this._h,
          n = this._key,
          h = t[0],
          c = t[1],
          o = t[2],
          a = t[3],
          l = t[4],
          u = t[5],
          f = t[6],
          p = t[7],
          i = 0;
        i < 64;
        i++
      )
        (s =
          (s =
            i < 16
              ? r[i]
              : ((s = r[(i + 1) & 15]),
                (e = r[(i + 14) & 15]),
                (r[15 & i] =
                  (((s >>> 7) ^ (s >>> 18) ^ (s >>> 3) ^ (s << 25) ^ (s << 14)) +
                    ((e >>> 17) ^ (e >>> 19) ^ (e >>> 10) ^ (e << 15) ^ (e << 13)) +
                    r[15 & i] +
                    r[(i + 9) & 15]) |
                  0))) +
          p +
          ((l >>> 6) ^ (l >>> 11) ^ (l >>> 25) ^ (l << 26) ^ (l << 21) ^ (l << 7)) +
          (f ^ (l & (u ^ f))) +
          n[i]),
          (p = f),
          (f = u),
          (u = l),
          (l = (a + s) | 0),
          (a = o),
          (o = c),
          (h = (s + (((c = h) & o) ^ (a & (c ^ o))) + ((c >>> 2) ^ (c >>> 13) ^ (c >>> 22) ^ (c << 30) ^ (c << 19) ^ (c << 10))) | 0);
      (t[0] = (t[0] + h) | 0),
        (t[1] = (t[1] + c) | 0),
        (t[2] = (t[2] + o) | 0),
        (t[3] = (t[3] + a) | 0),
        (t[4] = (t[4] + l) | 0),
        (t[5] = (t[5] + u) | 0),
        (t[6] = (t[6] + f) | 0),
        (t[7] = (t[7] + p) | 0);
    }
  }),
  (sjcl.hash.sha512 = function (t) {
    this._key[0] || this._precompute(),
      t ? ((this._h = t._h.slice(0)), (this._buffer = t._buffer.slice(0)), (this._length = t._length)) : this.reset();
  }),
  (sjcl.hash.sha512.hash = function (t) {
    return new sjcl.hash.sha512().update(t).finalize();
  }),
  (sjcl.hash.sha512.prototype = {
    blockSize: 1024,
    reset: function () {
      return (this._h = this._init.slice(0)), (this._buffer = []), (this._length = 0), this;
    },
    update: function (t) {
      "string" == typeof t && (t = sjcl.codec.utf8String.toBits(t));
      for (
        var i,
          s = (this._buffer = sjcl.bitArray.concat(this._buffer, t)),
          e = this._length,
          r = (this._length = e + sjcl.bitArray.bitLength(t)),
          i = (1024 + e) & -1024;
        i <= r;
        i += 1024
      )
        this._block(s.splice(0, 32));
      return this;
    },
    finalize: function () {
      for (
        var t, i = this._buffer, s = this._h, i, t = (i = sjcl.bitArray.concat(i, [sjcl.bitArray.partial(1, 1)])).length + 4;
        31 & t;
        t++
      )
        i.push(0);
      for (i.push(0), i.push(0), i.push(Math.floor(this._length / 4294967296)), i.push(0 | this._length); i.length; )
        this._block(i.splice(0, 32));
      return this.reset(), s;
    },
    _init: [],
    _initr: [12372232, 13281083, 9762859, 1914609, 15106769, 4090911, 4308331, 8266105],
    _key: [],
    _keyr: [
      2666018, 15689165, 5061423, 9034684, 4764984, 380953, 1658779, 7176472, 197186, 7368638, 14987916, 16757986, 8096111, 1480369,
      13046325, 6891156, 15813330, 5187043, 9229749, 11312229, 2818677, 10937475, 4324308, 1135541, 6741931, 11809296, 16458047, 15666916,
      11046850, 698149, 229999, 945776, 13774844, 2541862, 12856045, 9810911, 11494366, 7844520, 15576806, 8533307, 15795044, 4337665,
      16291729, 5553712, 15684120, 6662416, 7413802, 12308920, 13816008, 4303699, 9366425, 10176680, 13195875, 4295371, 6546291, 11712675,
      15708924, 1519456, 15772530, 6568428, 6495784, 8568297, 13007125, 7492395, 2515356, 12632583, 14740254, 7262584, 1535930, 13146278,
      16321966, 1853211, 294276, 13051027, 13221564, 1051980, 4080310, 6651434, 14088940, 4675607
    ],
    _precompute: function () {
      var t = 0,
        i = 2,
        s;
      function e(t) {
        return (4294967296 * (t - Math.floor(t))) | 0;
      }
      function r(t) {
        return (1099511627776 * (t - Math.floor(t))) & 255;
      }
      t: for (; t < 80; i++) {
        for (s = 2; s * s <= i; s++) if (i % s == 0) continue t;
        t < 8 && ((this._init[2 * t] = e(Math.pow(i, 0.5))), (this._init[2 * t + 1] = (r(Math.pow(i, 0.5)) << 24) | this._initr[t])),
          (this._key[2 * t] = e(Math.pow(i, 1 / 3))),
          (this._key[2 * t + 1] = (r(Math.pow(i, 1 / 3)) << 24) | this._keyr[t]),
          t++;
      }
    },
    _block: function (t) {
      for (
        var i,
          s,
          e,
          r = t.slice(0),
          t = this._h,
          n = this._key,
          h = t[0],
          c = t[1],
          o = t[2],
          a = t[3],
          U = t[4],
          l = t[5],
          O = t[6],
          u = t[7],
          T = t[8],
          f = t[9],
          D = t[10],
          p = t[11],
          E = t[12],
          _ = t[13],
          N = t[14],
          g = t[15],
          b = h,
          j = c,
          d = o,
          y = a,
          m = U,
          v = l,
          q = O,
          A = u,
          k = T,
          w = f,
          B = D,
          S = p,
          x = E,
          M = _,
          G = N,
          H = g,
          i = 0;
        i < 80;
        i++
      )
        var L,
          z,
          V,
          L,
          R,
          C,
          Y,
          z,
          F,
          J,
          K,
          L,
          e,
          s,
          R =
            (i < 16
              ? ((s = r[2 * i]), (e = r[2 * i + 1]))
              : ((L = r[2 * (i - 15)]),
                (z = r[2 * (i - 15) + 1]),
                (R = r[2 * (i - 2)]),
                (C = r[2 * (i - 2) + 1]),
                (s =
                  (s =
                    (((z << 31) | (L >>> 1)) ^ ((z << 24) | (L >>> 8)) ^ (L >>> 7)) +
                    (F = r[2 * (i - 7)]) +
                    ((e = (L = ((L << 31) | (z >>> 1)) ^ ((L << 24) | (z >>> 8)) ^ ((L << 25) | (z >>> 7))) + (J = r[2 * (i - 7) + 1])) >>>
                      0 <
                    L >>> 0
                      ? 1
                      : 0)) +
                  ((((C << 13) | (R >>> 19)) ^ ((R << 3) | (C >>> 29)) ^ (R >>> 6)) +
                    ((e += z = ((R << 13) | (C >>> 19)) ^ ((C << 3) | (R >>> 29)) ^ ((R << 26) | (C >>> 6))) >>> 0 < z >>> 0 ? 1 : 0)) +
                  ((K = r[2 * (i - 16)]) + ((e += L = r[2 * (i - 16) + 1]) >>> 0 < L >>> 0 ? 1 : 0)))),
            (r[2 * i] = s |= 0),
            (r[2 * i + 1] = e |= 0),
            (k & B) ^ (~k & x)),
          C = (w & S) ^ (~w & M),
          z = (b & d) ^ (b & m) ^ (d & m),
          Q,
          W,
          L = ((b << 4) | (j >>> 28)) ^ ((j << 30) | (b >>> 2)) ^ ((j << 25) | (b >>> 7)),
          X,
          Z,
          $ = n[2 * i],
          tt = n[2 * i + 1],
          I = H + (((k << 18) | (w >>> 14)) ^ ((k << 14) | (w >>> 18)) ^ ((w << 23) | (k >>> 9))),
          P = G + (((w << 18) | (k >>> 14)) ^ ((w << 14) | (k >>> 18)) ^ ((k << 23) | (w >>> 9))) + (I >>> 0 < H >>> 0 ? 1 : 0),
          it = L + ((j & y) ^ (j & v) ^ (y & v)),
          st,
          G = x,
          H = M,
          x = B,
          M = S,
          B = k,
          S = w,
          w,
          k =
            (q +
              (P =
                (P += R + ((I += C) >>> 0 < C >>> 0 ? 1 : 0)) +
                ($ + ((I += tt) >>> 0 < tt >>> 0 ? 1 : 0)) +
                (s + ((I += e) >>> 0 < e >>> 0 ? 1 : 0))) +
              ((w = (A + I) | 0) >>> 0 < A >>> 0 ? 1 : 0)) |
            0,
          q = m,
          A = v,
          m = d,
          v = y,
          d = b,
          y = j,
          j,
          b =
            (P +
              ((((j << 4) | (b >>> 28)) ^ ((b << 30) | (j >>> 2)) ^ ((b << 25) | (j >>> 7))) + z + (it >>> 0 < L >>> 0 ? 1 : 0)) +
              ((j = (I + it) | 0) >>> 0 < I >>> 0 ? 1 : 0)) |
            0;
      (c = t[1] = (c + j) | 0),
        (t[0] = (h + b + (c >>> 0 < j >>> 0 ? 1 : 0)) | 0),
        (a = t[3] = (a + y) | 0),
        (t[2] = (o + d + (a >>> 0 < y >>> 0 ? 1 : 0)) | 0),
        (l = t[5] = (l + v) | 0),
        (t[4] = (U + m + (l >>> 0 < v >>> 0 ? 1 : 0)) | 0),
        (u = t[7] = (u + A) | 0),
        (t[6] = (O + q + (u >>> 0 < A >>> 0 ? 1 : 0)) | 0),
        (f = t[9] = (f + w) | 0),
        (t[8] = (T + k + (f >>> 0 < w >>> 0 ? 1 : 0)) | 0),
        (p = t[11] = (p + S) | 0),
        (t[10] = (D + B + (p >>> 0 < S >>> 0 ? 1 : 0)) | 0),
        (_ = t[13] = (_ + M) | 0),
        (t[12] = (E + x + (_ >>> 0 < M >>> 0 ? 1 : 0)) | 0),
        (g = t[15] = (g + H) | 0),
        (t[14] = (N + G + (g >>> 0 < H >>> 0 ? 1 : 0)) | 0);
    }
  }),
  (sjcl.misc.hmac = function (t, i) {
    this._hash = i = i || sjcl.hash.sha256;
    var s = [[], []],
      e,
      r = i.prototype.blockSize / 32;
    for (this._baseHash = [new i(), new i()], t.length > r && (t = i.hash(t)), e = 0; e < r; e++)
      (s[0][e] = 909522486 ^ t[e]), (s[1][e] = 1549556828 ^ t[e]);
    this._baseHash[0].update(s[0]), this._baseHash[1].update(s[1]), (this._resultHash = new i(this._baseHash[0]));
  }),
  (sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac =
    function (t) {
      if (this._updated) throw new sjcl.exception.invalid("encrypt on already updated hmac called!");
      return this.update(t), this.digest(t);
    }),
  (sjcl.misc.hmac.prototype.reset = function () {
    (this._resultHash = new this._hash(this._baseHash[0])), (this._updated = !1);
  }),
  (sjcl.misc.hmac.prototype.update = function (t) {
    (this._updated = !0), this._resultHash.update(t);
  }),
  (sjcl.misc.hmac.prototype.digest = function () {
    var t = this._resultHash.finalize(),
      t = new this._hash(this._baseHash[1]).update(t).finalize();
    return this.reset(), t;
  }),
  (sjcl.misc.pbkdf2 = function (t, i, s, e, r, n, h) {
    if (((s = s || 1e3), e < 0 || s < 0)) throw sjcl.exception.invalid("invalid params to pbkdf2");
    var c,
      o,
      a,
      l,
      u,
      f,
      p,
      _,
      g =
        ("string" == typeof t && (t = sjcl.codec.utf8String.toBits(t)),
        "string" == typeof i && (i = sjcl.codec.utf8String.toBits(i)),
        (r = r || sjcl.misc.hmac),
        !1);
    for (
      null != h
        ? ((f = h.k), (l = h.i), (a = h.ui), (o = h.u), (c = h.prf), (_ = h.b), (p = h.out), (g = !0))
        : ((h = {}), (c = new r(t)), (f = 1), (p = []), (_ = sjcl.bitArray));
      32 * p.length < (e || 1);
      f++
    ) {
      for (g || ((o = a = c.encrypt(_.concat(i, [f]))), (l = 1)), g = !1; l < s; l++) {
        for (a = c.encrypt(a), u = 0; u < a.length; u++) o[u] ^= a[u];
        if (l < s && l % 200 == 0 && "function" == typeof n)
          return (
            (h.k = f),
            (h.i = l + 1),
            (h.u = o),
            (h.ui = a),
            (h.prf = c),
            (h.b = _),
            (h.out = p),
            setTimeout(function () {
              sjcl.misc.pbkdf2(t, i, s, e, r, n, h);
            }, 0),
            null
          );
      }
      p = p.concat(o);
    }
    if ((e && (p = _.clamp(p, e)), "function" == typeof n)) {
      for (var b = sjcl.codec.hex.fromBits(p), b = AES.hex2bin(b), j = sjcl.codec.bytes.fromBits(t), d = "", l = 0; l < j.length; l++)
        d += String.fromCharCode(j[l]);
      n(b, d, s);
    }
    return p;
  });
