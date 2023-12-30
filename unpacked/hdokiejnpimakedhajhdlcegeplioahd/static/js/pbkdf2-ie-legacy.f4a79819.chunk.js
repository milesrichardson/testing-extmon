"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [956],
  {
    76442: function (t) {
      var i = {
        hash: {},
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
      (i.bitArray = {
        bitSlice: function (t, r, e) {
          return (t = i.bitArray._shiftRight(t.slice(r / 32), 32 - (31 & r)).slice(1)), void 0 === e ? t : i.bitArray.clamp(t, e - r);
        },
        extract: function (t, i, r) {
          var e = Math.floor((-i - r) & 31);
          return (
            (-32 & ((i + r - 1) ^ i) ? (t[(i / 32) | 0] << (32 - e)) ^ (t[(i / 32 + 1) | 0] >>> e) : t[(i / 32) | 0] >>> e) & ((1 << r) - 1)
          );
        },
        concat: function (t, r) {
          if (0 === t.length || 0 === r.length) return t.concat(r);
          var e = t[t.length - 1],
            n = i.bitArray.getPartial(e);
          return 32 === n ? t.concat(r) : i.bitArray._shiftRight(r, n, 0 | e, t.slice(0, t.length - 1));
        },
        bitLength: function (t) {
          var r,
            e = t.length;
          return 0 === e ? 0 : ((r = t[e - 1]), 32 * (e - 1) + i.bitArray.getPartial(r));
        },
        clamp: function (t, r) {
          if (32 * t.length < r) return t;
          var e = (t = t.slice(0, Math.ceil(r / 32))).length;
          return (r &= 31), e > 0 && r && (t[e - 1] = i.bitArray.partial(r, t[e - 1] & (2147483648 >> (r - 1)), 1)), t;
        },
        partial: function (t, i, r) {
          return 32 === t ? i : (r ? 0 | i : i << (32 - t)) + 1099511627776 * t;
        },
        getPartial: function (t) {
          return Math.round(t / 1099511627776) || 32;
        },
        equal: function (t, r) {
          if (i.bitArray.bitLength(t) !== i.bitArray.bitLength(r)) return !1;
          var e,
            n = 0;
          for (e = 0; e < t.length; e++) n |= t[e] ^ r[e];
          return 0 === n;
        },
        _shiftRight: function (t, r, e, n) {
          var s, h, a;
          for (void 0 === n && (n = []); r >= 32; r -= 32) n.push(e), (e = 0);
          if (0 === r) return n.concat(t);
          for (s = 0; s < t.length; s++) n.push(e | (t[s] >>> r)), (e = t[s] << (32 - r));
          return (
            (h = t.length ? t[t.length - 1] : 0),
            (a = i.bitArray.getPartial(h)),
            n.push(i.bitArray.partial((r + a) & 31, r + a > 32 ? e : n.pop(), 1)),
            n
          );
        },
        _xor4: function (t, i) {
          return [t[0] ^ i[0], t[1] ^ i[1], t[2] ^ i[2], t[3] ^ i[3]];
        },
        byteswapM: function (t) {
          var i, r;
          for (i = 0; i < t.length; ++i) (r = t[i]), (t[i] = (r >>> 24) | ((r >>> 8) & 65280) | ((65280 & r) << 8) | (r << 24));
          return t;
        }
      }),
        (i.codec.utf8String = {
          fromBits: function (t) {
            var r,
              e,
              n = "",
              s = i.bitArray.bitLength(t);
            for (r = 0; r < s / 8; r++) 0 === (3 & r) && (e = t[r / 4]), (n += String.fromCharCode(e >>> 24)), (e <<= 8);
            return decodeURIComponent(escape(n));
          },
          toBits: function (t) {
            t = unescape(encodeURIComponent(t));
            var r,
              e = [],
              n = 0;
            for (r = 0; r < t.length; r++) (n = (n << 8) | t.charCodeAt(r)), 3 === (3 & r) && (e.push(n), (n = 0));
            return 3 & r && e.push(i.bitArray.partial(8 * (3 & r), n)), e;
          }
        }),
        (i.codec.hex = {
          fromBits: function (t) {
            var r,
              e = "";
            for (r = 0; r < t.length; r++) e += (0xf00000000000 + (0 | t[r])).toString(16).substr(4);
            return e.substr(0, i.bitArray.bitLength(t) / 4);
          },
          toBits: function (t) {
            var r,
              e,
              n = [];
            for (e = (t = t.replace(/\s|0x/g, "")).length, t += "00000000", r = 0; r < t.length; r += 8)
              n.push(0 ^ parseInt(t.substr(r, 8), 16));
            return i.bitArray.clamp(n, 4 * e);
          }
        }),
        (i.codec.bytes = {
          fromBits: function (t) {
            var r,
              e,
              n = [],
              s = i.bitArray.bitLength(t);
            for (r = 0; r < s / 8; r++) 0 === (3 & r) && (e = t[r / 4]), n.push(e >>> 24), (e <<= 8);
            return n;
          },
          toBits: function (t) {
            var r,
              e = [],
              n = 0;
            for (r = 0; r < t.length; r++) (n = (n << 8) | t[r]), 3 === (3 & r) && (e.push(n), (n = 0));
            return 3 & r && e.push(i.bitArray.partial(8 * (3 & r), n)), e;
          }
        }),
        (i.hash.sha256 = function (t) {
          this._key[0] || this._precompute(),
            t ? ((this._h = t._h.slice(0)), (this._buffer = t._buffer.slice(0)), (this._length = t._length)) : this.reset();
        }),
        (i.hash.sha256.hash = function (t) {
          return new i.hash.sha256().update(t).finalize();
        }),
        (i.hash.sha256.prototype = {
          blockSize: 512,
          reset: function () {
            return (this._h = this._init.slice(0)), (this._buffer = []), (this._length = 0), this;
          },
          update: function (t) {
            "string" === typeof t && (t = i.codec.utf8String.toBits(t));
            var r,
              e = (this._buffer = i.bitArray.concat(this._buffer, t)),
              n = this._length,
              s = (this._length = n + i.bitArray.bitLength(t));
            for (r = (512 + n) & -512; r <= s; r += 512) this._block(e.splice(0, 16));
            return this;
          },
          finalize: function () {
            var t,
              r = this._buffer,
              e = this._h;
            for (t = (r = i.bitArray.concat(r, [i.bitArray.partial(1, 1)])).length + 2; 15 & t; t++) r.push(0);
            for (r.push(Math.floor(this._length / 4294967296)), r.push(0 | this._length); r.length; ) this._block(r.splice(0, 16));
            return this.reset(), e;
          },
          _init: [],
          _key: [],
          _precompute: function () {
            var t,
              i = 0,
              r = 2;
            function e(t) {
              return (4294967296 * (t - Math.floor(t))) | 0;
            }
            t: for (; i < 64; r++) {
              for (t = 2; t * t <= r; t++) if (r % t === 0) continue t;
              i < 8 && (this._init[i] = e(Math.pow(r, 0.5))), (this._key[i] = e(Math.pow(r, 1 / 3))), i++;
            }
          },
          _block: function (t) {
            var i,
              r,
              e,
              n,
              s = t.slice(0),
              h = this._h,
              a = this._key,
              o = h[0],
              u = h[1],
              c = h[2],
              f = h[3],
              l = h[4],
              p = h[5],
              g = h[6],
              b = h[7];
            for (i = 0; i < 64; i++)
              i < 16
                ? (r = s[i])
                : ((e = s[(i + 1) & 15]),
                  (n = s[(i + 14) & 15]),
                  (r = s[15 & i] =
                    (((e >>> 7) ^ (e >>> 18) ^ (e >>> 3) ^ (e << 25) ^ (e << 14)) +
                      ((n >>> 17) ^ (n >>> 19) ^ (n >>> 10) ^ (n << 15) ^ (n << 13)) +
                      s[15 & i] +
                      s[(i + 9) & 15]) |
                    0)),
                (r = r + b + ((l >>> 6) ^ (l >>> 11) ^ (l >>> 25) ^ (l << 26) ^ (l << 21) ^ (l << 7)) + (g ^ (l & (p ^ g))) + a[i]),
                (b = g),
                (g = p),
                (p = l),
                (l = (f + r) | 0),
                (f = c),
                (c = u),
                (o = (r + (((u = o) & c) ^ (f & (u ^ c))) + ((u >>> 2) ^ (u >>> 13) ^ (u >>> 22) ^ (u << 30) ^ (u << 19) ^ (u << 10))) | 0);
            (h[0] = (h[0] + o) | 0),
              (h[1] = (h[1] + u) | 0),
              (h[2] = (h[2] + c) | 0),
              (h[3] = (h[3] + f) | 0),
              (h[4] = (h[4] + l) | 0),
              (h[5] = (h[5] + p) | 0),
              (h[6] = (h[6] + g) | 0),
              (h[7] = (h[7] + b) | 0);
          }
        }),
        (i.misc.hmac = function (t, r) {
          this._hash = r = r || i.hash.sha256;
          var e,
            n = [[], []],
            s = r.prototype.blockSize / 32;
          for (this._baseHash = [new r(), new r()], t.length > s && (t = r.hash(t)), e = 0; e < s; e++)
            (n[0][e] = 909522486 ^ t[e]), (n[1][e] = 1549556828 ^ t[e]);
          this._baseHash[0].update(n[0]), this._baseHash[1].update(n[1]), (this._resultHash = new r(this._baseHash[0]));
        }),
        (i.misc.hmac.prototype.encrypt = i.misc.hmac.prototype.mac =
          function (t) {
            if (this._updated) throw new i.exception.invalid("encrypt on already updated hmac called!");
            return this.update(t), this.digest(t);
          }),
        (i.misc.hmac.prototype.reset = function () {
          (this._resultHash = new this._hash(this._baseHash[0])), (this._updated = !1);
        }),
        (i.misc.hmac.prototype.update = function (t) {
          (this._updated = !0), this._resultHash.update(t);
        }),
        (i.misc.hmac.prototype.digest = function () {
          var t = this._resultHash.finalize(),
            i = new this._hash(this._baseHash[1]).update(t).finalize();
          return this.reset(), i;
        }),
        (i.misc.pbkdf2 = function (t, r, e, n, s, h, a) {
          if (((e = e || 1e3), n < 0 || e < 0)) throw i.exception.invalid("invalid params to pbkdf2");
          var o, u, c, f, l, p, g, b;
          "string" === typeof t && (t = i.codec.utf8String.toBits(t)),
            "string" === typeof r && (r = i.codec.utf8String.toBits(r)),
            (s = s || i.misc.hmac);
          var _ = !1;
          for (
            null != a
              ? ((p = a.k), (f = a.i), (c = a.ui), (u = a.u), (o = a.prf), (b = a.b), (g = a.out), (_ = !0))
              : ((a = {}), (o = new s(t)), (p = 1), (g = []), (b = i.bitArray));
            32 * g.length < (n || 1);
            p++
          ) {
            for (_ || ((u = c = o.encrypt(b.concat(r, [p]))), (f = 1)), _ = !1; f < e; f++) {
              for (c = o.encrypt(c), l = 0; l < c.length; l++) u[l] ^= c[l];
              if (f < e && f % 200 == 0 && "function" === typeof h)
                return (
                  (a.k = p),
                  (a.i = f + 1),
                  (a.u = u),
                  (a.ui = c),
                  (a.prf = o),
                  (a.b = b),
                  (a.out = g),
                  setTimeout(function () {
                    i.misc.pbkdf2(t, r, e, n, s, h, a);
                  }, 0),
                  null
                );
            }
            g = g.concat(u);
          }
          return n && (g = b.clamp(g, n)), "function" === typeof h && h(g), g;
        }),
        (t.exports = { sjcl: i });
    }
  }
]);
