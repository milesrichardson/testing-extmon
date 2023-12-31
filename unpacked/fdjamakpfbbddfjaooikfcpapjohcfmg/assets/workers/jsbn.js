var dbits,
  forge = require("./forge");
module.exports = forge.jsbn = forge.jsbn || {};
var canary = 0xdeadbeefcafe,
  j_lm = 15715070 == (16777215 & canary);
function BigInteger(t, i, r) {
  (this.data = []),
    null != t &&
      ("number" == typeof t
        ? this.fromNumber(t, i, r)
        : null == i && "string" != typeof t
        ? this.fromString(t, 256)
        : this.fromString(t, i));
}
function nbi() {
  return new BigInteger(null);
}
function am1(t, i, r, e, n, o) {
  for (; --o >= 0; ) {
    var s = i * this.data[t++] + r.data[e] + n;
    (n = Math.floor(s / 67108864)), (r.data[e++] = 67108863 & s);
  }
  return n;
}
function am2(t, i, r, e, n, o) {
  for (var s = 32767 & i, a = i >> 15; --o >= 0; ) {
    var h = 32767 & this.data[t],
      p = this.data[t++] >> 15,
      u = a * h + p * s;
    (n = ((h = s * h + ((32767 & u) << 15) + r.data[e] + (1073741823 & n)) >>> 30) + (u >>> 15) + a * p + (n >>> 30)),
      (r.data[e++] = 1073741823 & h);
  }
  return n;
}
function am3(t, i, r, e, n, o) {
  for (var s = 16383 & i, a = i >> 14; --o >= 0; ) {
    var h = 16383 & this.data[t],
      p = this.data[t++] >> 14,
      u = a * h + p * s;
    (n = ((h = s * h + ((16383 & u) << 14) + r.data[e] + n) >> 28) + (u >> 14) + a * p), (r.data[e++] = 268435455 & h);
  }
  return n;
}
(forge.jsbn.BigInteger = BigInteger),
  "undefined" == typeof navigator
    ? ((BigInteger.prototype.am = am3), (dbits = 28))
    : j_lm && "Microsoft Internet Explorer" == navigator.appName
    ? ((BigInteger.prototype.am = am2), (dbits = 30))
    : j_lm && "Netscape" != navigator.appName
    ? ((BigInteger.prototype.am = am1), (dbits = 26))
    : ((BigInteger.prototype.am = am3), (dbits = 28)),
  (BigInteger.prototype.DB = dbits),
  (BigInteger.prototype.DM = (1 << dbits) - 1),
  (BigInteger.prototype.DV = 1 << dbits);
var BI_FP = 52;
(BigInteger.prototype.FV = Math.pow(2, BI_FP)), (BigInteger.prototype.F1 = BI_FP - dbits), (BigInteger.prototype.F2 = 2 * dbits - BI_FP);
var rr,
  vv,
  BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
  BI_RC = new Array();
for (rr = "0".charCodeAt(0), vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
for (rr = "a".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
for (rr = "A".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(t) {
  return BI_RM.charAt(t);
}
function intAt(t, i) {
  return BI_RC[t.charCodeAt(i)] ?? -1;
}
function bnpCopyTo(t) {
  for (var i = this.t - 1; i >= 0; --i) t.data[i] = this.data[i];
  (t.t = this.t), (t.s = this.s);
}
function bnpFromInt(t) {
  (this.t = 1), (this.s = t < 0 ? -1 : 0), t > 0 ? (this.data[0] = t) : t < -1 ? (this.data[0] = t + this.DV) : (this.t = 0);
}
function nbv(t) {
  var i = nbi();
  return i.fromInt(t), i;
}
function bnpFromString(t, i) {
  var r;
  if (16 == i) r = 4;
  else if (8 == i) r = 3;
  else if (256 == i) r = 8;
  else if (2 == i) r = 1;
  else if (32 == i) r = 5;
  else {
    if (4 != i) return void this.fromRadix(t, i);
    r = 2;
  }
  (this.t = 0), (this.s = 0);
  for (var e = t.length, n = !1, o = 0; --e >= 0; ) {
    var s = 8 == r ? 255 & t[e] : intAt(t, e);
    s < 0
      ? "-" == t.charAt(e) && (n = !0)
      : ((n = !1),
        0 == o
          ? (this.data[this.t++] = s)
          : o + r > this.DB
          ? ((this.data[this.t - 1] |= (s & ((1 << (this.DB - o)) - 1)) << o), (this.data[this.t++] = s >> (this.DB - o)))
          : (this.data[this.t - 1] |= s << o),
        (o += r) >= this.DB && (o -= this.DB));
  }
  8 == r && 0 != (128 & t[0]) && ((this.s = -1), o > 0 && (this.data[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
    this.clamp(),
    n && BigInteger.ZERO.subTo(this, this);
}
function bnpClamp() {
  for (var t = this.s & this.DM; this.t > 0 && this.data[this.t - 1] == t; ) --this.t;
}
function bnToString(t) {
  if (this.s < 0) return "-" + this.negate().toString(t);
  var i;
  if (16 == t) i = 4;
  else if (8 == t) i = 3;
  else if (2 == t) i = 1;
  else if (32 == t) i = 5;
  else {
    if (4 != t) return this.toRadix(t);
    i = 2;
  }
  var r,
    e = (1 << i) - 1,
    n = !1,
    o = "",
    s = this.t,
    a = this.DB - ((s * this.DB) % i);
  if (s-- > 0)
    for (a < this.DB && (r = this.data[s] >> a) > 0 && ((n = !0), (o = int2char(r))); s >= 0; )
      a < i
        ? ((r = (this.data[s] & ((1 << a) - 1)) << (i - a)), (r |= this.data[--s] >> (a += this.DB - i)))
        : ((r = (this.data[s] >> (a -= i)) & e), a <= 0 && ((a += this.DB), --s)),
        r > 0 && (n = !0),
        n && (o += int2char(r));
  return n ? o : "0";
}
function bnNegate() {
  var t = nbi();
  return BigInteger.ZERO.subTo(this, t), t;
}
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
function bnCompareTo(t) {
  var i = this.s - t.s;
  if (0 != i) return i;
  var r = this.t;
  if (0 != (i = r - t.t)) return this.s < 0 ? -i : i;
  for (; --r >= 0; ) if (0 != (i = this.data[r] - t.data[r])) return i;
  return 0;
}
function nbits(t) {
  var i,
    r = 1;
  return (
    0 != (i = t >>> 16) && ((t = i), (r += 16)),
    0 != (i = t >> 8) && ((t = i), (r += 8)),
    0 != (i = t >> 4) && ((t = i), (r += 4)),
    0 != (i = t >> 2) && ((t = i), (r += 2)),
    0 != (i = t >> 1) && ((t = i), (r += 1)),
    r
  );
}
function bnBitLength() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this.data[this.t - 1] ^ (this.s & this.DM));
}
function bnpDLShiftTo(t, i) {
  var r;
  for (r = this.t - 1; r >= 0; --r) i.data[r + t] = this.data[r];
  for (r = t - 1; r >= 0; --r) i.data[r] = 0;
  (i.t = this.t + t), (i.s = this.s);
}
function bnpDRShiftTo(t, i) {
  for (var r = t; r < this.t; ++r) i.data[r - t] = this.data[r];
  (i.t = Math.max(this.t - t, 0)), (i.s = this.s);
}
function bnpLShiftTo(t, i) {
  var r,
    e = t % this.DB,
    n = this.DB - e,
    o = (1 << n) - 1,
    s = Math.floor(t / this.DB),
    a = (this.s << e) & this.DM;
  for (r = this.t - 1; r >= 0; --r) (i.data[r + s + 1] = (this.data[r] >> n) | a), (a = (this.data[r] & o) << e);
  for (r = s - 1; r >= 0; --r) i.data[r] = 0;
  (i.data[s] = a), (i.t = this.t + s + 1), (i.s = this.s), i.clamp();
}
function bnpRShiftTo(t, i) {
  i.s = this.s;
  var r = Math.floor(t / this.DB);
  if (r >= this.t) i.t = 0;
  else {
    var e = t % this.DB,
      n = this.DB - e,
      o = (1 << e) - 1;
    i.data[0] = this.data[r] >> e;
    for (var s = r + 1; s < this.t; ++s) (i.data[s - r - 1] |= (this.data[s] & o) << n), (i.data[s - r] = this.data[s] >> e);
    e > 0 && (i.data[this.t - r - 1] |= (this.s & o) << n), (i.t = this.t - r), i.clamp();
  }
}
function bnpSubTo(t, i) {
  for (var r = 0, e = 0, n = Math.min(t.t, this.t); r < n; ) (e += this.data[r] - t.data[r]), (i.data[r++] = e & this.DM), (e >>= this.DB);
  if (t.t < this.t) {
    for (e -= t.s; r < this.t; ) (e += this.data[r]), (i.data[r++] = e & this.DM), (e >>= this.DB);
    e += this.s;
  } else {
    for (e += this.s; r < t.t; ) (e -= t.data[r]), (i.data[r++] = e & this.DM), (e >>= this.DB);
    e -= t.s;
  }
  (i.s = e < 0 ? -1 : 0), e < -1 ? (i.data[r++] = this.DV + e) : e > 0 && (i.data[r++] = e), (i.t = r), i.clamp();
}
function bnpMultiplyTo(t, i) {
  var r = this.abs(),
    e = t.abs(),
    n = r.t;
  for (i.t = n + e.t; --n >= 0; ) i.data[n] = 0;
  for (n = 0; n < e.t; ++n) i.data[n + r.t] = r.am(0, e.data[n], i, n, 0, r.t);
  (i.s = 0), i.clamp(), this.s != t.s && BigInteger.ZERO.subTo(i, i);
}
function bnpSquareTo(t) {
  for (var i = this.abs(), r = (t.t = 2 * i.t); --r >= 0; ) t.data[r] = 0;
  for (r = 0; r < i.t - 1; ++r) {
    var e = i.am(r, i.data[r], t, 2 * r, 0, 1);
    (t.data[r + i.t] += i.am(r + 1, 2 * i.data[r], t, 2 * r + 1, e, i.t - r - 1)) >= i.DV &&
      ((t.data[r + i.t] -= i.DV), (t.data[r + i.t + 1] = 1));
  }
  t.t > 0 && (t.data[t.t - 1] += i.am(r, i.data[r], t, 2 * r, 0, 1)), (t.s = 0), t.clamp();
}
function bnpDivRemTo(t, i, r) {
  var e = t.abs();
  if (!(e.t <= 0)) {
    var n = this.abs();
    if (n.t < e.t) return null != i && i.fromInt(0), void (null != r && this.copyTo(r));
    null == r && (r = nbi());
    var o = nbi(),
      s = this.s,
      a = t.s,
      h = this.DB - nbits(e.data[e.t - 1]);
    h > 0 ? (e.lShiftTo(h, o), n.lShiftTo(h, r)) : (e.copyTo(o), n.copyTo(r));
    var p = o.t,
      u = o.data[p - 1];
    if (0 != u) {
      var f = u * (1 << this.F1) + (p > 1 ? o.data[p - 2] >> this.F2 : 0),
        d = this.FV / f,
        g = (1 << this.F1) / f,
        b = 1 << this.F2,
        m = r.t,
        l = m - p,
        c = i ?? nbi();
      for (
        o.dlShiftTo(l, c), r.compareTo(c) >= 0 && ((r.data[r.t++] = 1), r.subTo(c, r)), BigInteger.ONE.dlShiftTo(p, c), c.subTo(o, o);
        o.t < p;

      )
        o.data[o.t++] = 0;
      for (; --l >= 0; ) {
        var B = r.data[--m] == u ? this.DM : Math.floor(r.data[m] * d + (r.data[m - 1] + b) * g);
        if ((r.data[m] += o.am(0, B, r, l, 0, p)) < B) for (o.dlShiftTo(l, c), r.subTo(c, r); r.data[m] < --B; ) r.subTo(c, r);
      }
      null != i && (r.drShiftTo(p, i), s != a && BigInteger.ZERO.subTo(i, i)),
        (r.t = p),
        r.clamp(),
        h > 0 && r.rShiftTo(h, r),
        s < 0 && BigInteger.ZERO.subTo(r, r);
    }
  }
}
function bnMod(t) {
  var i = nbi();
  return this.abs().divRemTo(t, null, i), this.s < 0 && i.compareTo(BigInteger.ZERO) > 0 && t.subTo(i, i), i;
}
function Classic(t) {
  this.m = t;
}
function cConvert(t) {
  return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
}
function cRevert(t) {
  return t;
}
function cReduce(t) {
  t.divRemTo(this.m, null, t);
}
function cMulTo(t, i, r) {
  t.multiplyTo(i, r), this.reduce(r);
}
function cSqrTo(t, i) {
  t.squareTo(i), this.reduce(i);
}
function bnpInvDigit() {
  if (this.t < 1) return 0;
  var t = this.data[0];
  if (0 == (1 & t)) return 0;
  var i = 3 & t;
  return (i =
    ((i = ((i = ((i = (i * (2 - (15 & t) * i)) & 15) * (2 - (255 & t) * i)) & 255) * (2 - (((65535 & t) * i) & 65535))) & 65535) *
      (2 - ((t * i) % this.DV))) %
    this.DV) > 0
    ? this.DV - i
    : -i;
}
function Montgomery(t) {
  (this.m = t),
    (this.mp = t.invDigit()),
    (this.mpl = 32767 & this.mp),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (t.DB - 15)) - 1),
    (this.mt2 = 2 * t.t);
}
function montConvert(t) {
  var i = nbi();
  return t.abs().dlShiftTo(this.m.t, i), i.divRemTo(this.m, null, i), t.s < 0 && i.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(i, i), i;
}
function montRevert(t) {
  var i = nbi();
  return t.copyTo(i), this.reduce(i), i;
}
function montReduce(t) {
  for (; t.t <= this.mt2; ) t.data[t.t++] = 0;
  for (var i = 0; i < this.m.t; ++i) {
    var r = 32767 & t.data[i],
      e = (r * this.mpl + (((r * this.mph + (t.data[i] >> 15) * this.mpl) & this.um) << 15)) & t.DM;
    for (r = i + this.m.t, t.data[r] += this.m.am(0, e, t, i, 0, this.m.t); t.data[r] >= t.DV; ) (t.data[r] -= t.DV), t.data[++r]++;
  }
  t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
}
function montSqrTo(t, i) {
  t.squareTo(i), this.reduce(i);
}
function montMulTo(t, i, r) {
  t.multiplyTo(i, r), this.reduce(r);
}
function bnpIsEven() {
  return 0 == (this.t > 0 ? 1 & this.data[0] : this.s);
}
function bnpExp(t, i) {
  if (t > 4294967295 || t < 1) return BigInteger.ONE;
  var r = nbi(),
    e = nbi(),
    n = i.convert(this),
    o = nbits(t) - 1;
  for (n.copyTo(r); --o >= 0; )
    if ((i.sqrTo(r, e), (t & (1 << o)) > 0)) i.mulTo(e, n, r);
    else {
      var s = r;
      (r = e), (e = s);
    }
  return i.revert(r);
}
function bnModPowInt(t, i) {
  var r;
  return (r = t < 256 || i.isEven() ? new Classic(i) : new Montgomery(i)), this.exp(t, r);
}
function bnClone() {
  var t = nbi();
  return this.copyTo(t), t;
}
function bnIntValue() {
  if (this.s < 0) {
    if (1 == this.t) return this.data[0] - this.DV;
    if (0 == this.t) return -1;
  } else {
    if (1 == this.t) return this.data[0];
    if (0 == this.t) return 0;
  }
  return ((this.data[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this.data[0];
}
function bnByteValue() {
  return 0 == this.t ? this.s : (this.data[0] << 24) >> 24;
}
function bnShortValue() {
  return 0 == this.t ? this.s : (this.data[0] << 16) >> 16;
}
function bnpChunkSize(t) {
  return Math.floor((Math.LN2 * this.DB) / Math.log(t));
}
function bnSigNum() {
  return this.s < 0 ? -1 : this.t <= 0 || (1 == this.t && this.data[0] <= 0) ? 0 : 1;
}
function bnpToRadix(t) {
  if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36)) return "0";
  var i = this.chunkSize(t),
    r = Math.pow(t, i),
    e = nbv(r),
    n = nbi(),
    o = nbi(),
    s = "";
  for (this.divRemTo(e, n, o); n.signum() > 0; ) (s = (r + o.intValue()).toString(t).substr(1) + s), n.divRemTo(e, n, o);
  return o.intValue().toString(t) + s;
}
function bnpFromRadix(t, i) {
  this.fromInt(0), null == i && (i = 10);
  for (var r = this.chunkSize(i), e = Math.pow(i, r), n = !1, o = 0, s = 0, a = 0; a < t.length; ++a) {
    var h = intAt(t, a);
    h < 0
      ? "-" == t.charAt(a) && 0 == this.signum() && (n = !0)
      : ((s = i * s + h), ++o >= r && (this.dMultiply(e), this.dAddOffset(s, 0), (o = 0), (s = 0)));
  }
  o > 0 && (this.dMultiply(Math.pow(i, o)), this.dAddOffset(s, 0)), n && BigInteger.ZERO.subTo(this, this);
}
function bnpFromNumber(t, i, r) {
  if ("number" == typeof i)
    if (t < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(t, r),
          this.testBit(t - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), op_or, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(i);

      )
        this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(BigInteger.ONE.shiftLeft(t - 1), this);
  else {
    var e = new Array(),
      n = 7 & t;
    (e.length = 1 + (t >> 3)), i.nextBytes(e), n > 0 ? (e[0] &= (1 << n) - 1) : (e[0] = 0), this.fromString(e, 256);
  }
}
function bnToByteArray() {
  var t = this.t,
    i = new Array();
  i[0] = this.s;
  var r,
    e = this.DB - ((t * this.DB) % 8),
    n = 0;
  if (t-- > 0)
    for (e < this.DB && (r = this.data[t] >> e) != (this.s & this.DM) >> e && (i[n++] = r | (this.s << (this.DB - e))); t >= 0; )
      e < 8
        ? ((r = (this.data[t] & ((1 << e) - 1)) << (8 - e)), (r |= this.data[--t] >> (e += this.DB - 8)))
        : ((r = (this.data[t] >> (e -= 8)) & 255), e <= 0 && ((e += this.DB), --t)),
        0 != (128 & r) && (r |= -256),
        0 == n && (128 & this.s) != (128 & r) && ++n,
        (n > 0 || r != this.s) && (i[n++] = r);
  return i;
}
function bnEquals(t) {
  return 0 == this.compareTo(t);
}
function bnMin(t) {
  return this.compareTo(t) < 0 ? this : t;
}
function bnMax(t) {
  return this.compareTo(t) > 0 ? this : t;
}
function bnpBitwiseTo(t, i, r) {
  var e,
    n,
    o = Math.min(t.t, this.t);
  for (e = 0; e < o; ++e) r.data[e] = i(this.data[e], t.data[e]);
  if (t.t < this.t) {
    for (n = t.s & this.DM, e = o; e < this.t; ++e) r.data[e] = i(this.data[e], n);
    r.t = this.t;
  } else {
    for (n = this.s & this.DM, e = o; e < t.t; ++e) r.data[e] = i(n, t.data[e]);
    r.t = t.t;
  }
  (r.s = i(this.s, t.s)), r.clamp();
}
function op_and(t, i) {
  return t & i;
}
function bnAnd(t) {
  var i = nbi();
  return this.bitwiseTo(t, op_and, i), i;
}
function op_or(t, i) {
  return t | i;
}
function bnOr(t) {
  var i = nbi();
  return this.bitwiseTo(t, op_or, i), i;
}
function op_xor(t, i) {
  return t ^ i;
}
function bnXor(t) {
  var i = nbi();
  return this.bitwiseTo(t, op_xor, i), i;
}
function op_andnot(t, i) {
  return t & ~i;
}
function bnAndNot(t) {
  var i = nbi();
  return this.bitwiseTo(t, op_andnot, i), i;
}
function bnNot() {
  for (var t = nbi(), i = 0; i < this.t; ++i) t.data[i] = this.DM & ~this.data[i];
  return (t.t = this.t), (t.s = ~this.s), t;
}
function bnShiftLeft(t) {
  var i = nbi();
  return t < 0 ? this.rShiftTo(-t, i) : this.lShiftTo(t, i), i;
}
function bnShiftRight(t) {
  var i = nbi();
  return t < 0 ? this.lShiftTo(-t, i) : this.rShiftTo(t, i), i;
}
function lbit(t) {
  if (0 == t) return -1;
  var i = 0;
  return (
    0 == (65535 & t) && ((t >>= 16), (i += 16)),
    0 == (255 & t) && ((t >>= 8), (i += 8)),
    0 == (15 & t) && ((t >>= 4), (i += 4)),
    0 == (3 & t) && ((t >>= 2), (i += 2)),
    0 == (1 & t) && ++i,
    i
  );
}
function bnGetLowestSetBit() {
  for (var t = 0; t < this.t; ++t) if (0 != this.data[t]) return t * this.DB + lbit(this.data[t]);
  return this.s < 0 ? this.t * this.DB : -1;
}
function cbit(t) {
  for (var i = 0; 0 != t; ) (t &= t - 1), ++i;
  return i;
}
function bnBitCount() {
  for (var t = 0, i = this.s & this.DM, r = 0; r < this.t; ++r) t += cbit(this.data[r] ^ i);
  return t;
}
function bnTestBit(t) {
  var i = Math.floor(t / this.DB);
  return i >= this.t ? 0 != this.s : 0 != (this.data[i] & (1 << t % this.DB));
}
function bnpChangeBit(t, i) {
  var r = BigInteger.ONE.shiftLeft(t);
  return this.bitwiseTo(r, i, r), r;
}
function bnSetBit(t) {
  return this.changeBit(t, op_or);
}
function bnClearBit(t) {
  return this.changeBit(t, op_andnot);
}
function bnFlipBit(t) {
  return this.changeBit(t, op_xor);
}
function bnpAddTo(t, i) {
  for (var r = 0, e = 0, n = Math.min(t.t, this.t); r < n; ) (e += this.data[r] + t.data[r]), (i.data[r++] = e & this.DM), (e >>= this.DB);
  if (t.t < this.t) {
    for (e += t.s; r < this.t; ) (e += this.data[r]), (i.data[r++] = e & this.DM), (e >>= this.DB);
    e += this.s;
  } else {
    for (e += this.s; r < t.t; ) (e += t.data[r]), (i.data[r++] = e & this.DM), (e >>= this.DB);
    e += t.s;
  }
  (i.s = e < 0 ? -1 : 0), e > 0 ? (i.data[r++] = e) : e < -1 && (i.data[r++] = this.DV + e), (i.t = r), i.clamp();
}
function bnAdd(t) {
  var i = nbi();
  return this.addTo(t, i), i;
}
function bnSubtract(t) {
  var i = nbi();
  return this.subTo(t, i), i;
}
function bnMultiply(t) {
  var i = nbi();
  return this.multiplyTo(t, i), i;
}
function bnDivide(t) {
  var i = nbi();
  return this.divRemTo(t, i, null), i;
}
function bnRemainder(t) {
  var i = nbi();
  return this.divRemTo(t, null, i), i;
}
function bnDivideAndRemainder(t) {
  var i = nbi(),
    r = nbi();
  return this.divRemTo(t, i, r), new Array(i, r);
}
function bnpDMultiply(t) {
  (this.data[this.t] = this.am(0, t - 1, this, 0, 0, this.t)), ++this.t, this.clamp();
}
function bnpDAddOffset(t, i) {
  if (0 != t) {
    for (; this.t <= i; ) this.data[this.t++] = 0;
    for (this.data[i] += t; this.data[i] >= this.DV; )
      (this.data[i] -= this.DV), ++i >= this.t && (this.data[this.t++] = 0), ++this.data[i];
  }
}
function NullExp() {}
function nNop(t) {
  return t;
}
function nMulTo(t, i, r) {
  t.multiplyTo(i, r);
}
function nSqrTo(t, i) {
  t.squareTo(i);
}
function bnPow(t) {
  return this.exp(t, new NullExp());
}
function bnpMultiplyLowerTo(t, i, r) {
  var e,
    n = Math.min(this.t + t.t, i);
  for (r.s = 0, r.t = n; n > 0; ) r.data[--n] = 0;
  for (e = r.t - this.t; n < e; ++n) r.data[n + this.t] = this.am(0, t.data[n], r, n, 0, this.t);
  for (e = Math.min(t.t, i); n < e; ++n) this.am(0, t.data[n], r, n, 0, i - n);
  r.clamp();
}
function bnpMultiplyUpperTo(t, i, r) {
  --i;
  var e = (r.t = this.t + t.t - i);
  for (r.s = 0; --e >= 0; ) r.data[e] = 0;
  for (e = Math.max(i - this.t, 0); e < t.t; ++e) r.data[this.t + e - i] = this.am(i - e, t.data[e], r, 0, 0, this.t + e - i);
  r.clamp(), r.drShiftTo(1, r);
}
function Barrett(t) {
  (this.r2 = nbi()), (this.q3 = nbi()), BigInteger.ONE.dlShiftTo(2 * t.t, this.r2), (this.mu = this.r2.divide(t)), (this.m = t);
}
function barrettConvert(t) {
  if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
  if (t.compareTo(this.m) < 0) return t;
  var i = nbi();
  return t.copyTo(i), this.reduce(i), i;
}
function barrettRevert(t) {
  return t;
}
function barrettReduce(t) {
  for (
    t.drShiftTo(this.m.t - 1, this.r2),
      t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    t.compareTo(this.r2) < 0;

  )
    t.dAddOffset(1, this.m.t + 1);
  for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
}
function barrettSqrTo(t, i) {
  t.squareTo(i), this.reduce(i);
}
function barrettMulTo(t, i, r) {
  t.multiplyTo(i, r), this.reduce(r);
}
function bnModPow(t, i) {
  var r,
    e,
    n = t.bitLength(),
    o = nbv(1);
  if (n <= 0) return o;
  (r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
    (e = n < 8 ? new Classic(i) : i.isEven() ? new Barrett(i) : new Montgomery(i));
  var s = new Array(),
    a = 3,
    h = r - 1,
    p = (1 << r) - 1;
  if (((s[1] = e.convert(this)), r > 1)) {
    var u = nbi();
    for (e.sqrTo(s[1], u); a <= p; ) (s[a] = nbi()), e.mulTo(u, s[a - 2], s[a]), (a += 2);
  }
  var f,
    d,
    g = t.t - 1,
    b = !0,
    m = nbi();
  for (n = nbits(t.data[g]) - 1; g >= 0; ) {
    for (
      n >= h
        ? (f = (t.data[g] >> (n - h)) & p)
        : ((f = (t.data[g] & ((1 << (n + 1)) - 1)) << (h - n)), g > 0 && (f |= t.data[g - 1] >> (this.DB + n - h))),
        a = r;
      0 == (1 & f);

    )
      (f >>= 1), --a;
    if (((n -= a) < 0 && ((n += this.DB), --g), b)) s[f].copyTo(o), (b = !1);
    else {
      for (; a > 1; ) e.sqrTo(o, m), e.sqrTo(m, o), (a -= 2);
      a > 0 ? e.sqrTo(o, m) : ((d = o), (o = m), (m = d)), e.mulTo(m, s[f], o);
    }
    for (; g >= 0 && 0 == (t.data[g] & (1 << n)); ) e.sqrTo(o, m), (d = o), (o = m), (m = d), --n < 0 && ((n = this.DB - 1), --g);
  }
  return e.revert(o);
}
function bnGCD(t) {
  var i = this.s < 0 ? this.negate() : this.clone(),
    r = t.s < 0 ? t.negate() : t.clone();
  if (i.compareTo(r) < 0) {
    var e = i;
    (i = r), (r = e);
  }
  var n = i.getLowestSetBit(),
    o = r.getLowestSetBit();
  if (o < 0) return i;
  for (n < o && (o = n), o > 0 && (i.rShiftTo(o, i), r.rShiftTo(o, r)); i.signum() > 0; )
    (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i),
      (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
      i.compareTo(r) >= 0 ? (i.subTo(r, i), i.rShiftTo(1, i)) : (r.subTo(i, r), r.rShiftTo(1, r));
  return o > 0 && r.lShiftTo(o, r), r;
}
function bnpModInt(t) {
  if (t <= 0) return 0;
  var i = this.DV % t,
    r = this.s < 0 ? t - 1 : 0;
  if (this.t > 0)
    if (0 == i) r = this.data[0] % t;
    else for (var e = this.t - 1; e >= 0; --e) r = (i * r + this.data[e]) % t;
  return r;
}
function bnModInverse(t) {
  var i = t.isEven();
  if ((this.isEven() && i) || 0 == t.signum()) return BigInteger.ZERO;
  for (var r = t.clone(), e = this.clone(), n = nbv(1), o = nbv(0), s = nbv(0), a = nbv(1); 0 != r.signum(); ) {
    for (; r.isEven(); )
      r.rShiftTo(1, r),
        i ? ((n.isEven() && o.isEven()) || (n.addTo(this, n), o.subTo(t, o)), n.rShiftTo(1, n)) : o.isEven() || o.subTo(t, o),
        o.rShiftTo(1, o);
    for (; e.isEven(); )
      e.rShiftTo(1, e),
        i ? ((s.isEven() && a.isEven()) || (s.addTo(this, s), a.subTo(t, a)), s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a),
        a.rShiftTo(1, a);
    r.compareTo(e) >= 0 ? (r.subTo(e, r), i && n.subTo(s, n), o.subTo(a, o)) : (e.subTo(r, e), i && s.subTo(n, s), a.subTo(o, a));
  }
  return 0 != e.compareTo(BigInteger.ONE)
    ? BigInteger.ZERO
    : a.compareTo(t) >= 0
    ? a.subtract(t)
    : a.signum() < 0
    ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a)
    : a;
}
(Classic.prototype.convert = cConvert),
  (Classic.prototype.revert = cRevert),
  (Classic.prototype.reduce = cReduce),
  (Classic.prototype.mulTo = cMulTo),
  (Classic.prototype.sqrTo = cSqrTo),
  (Montgomery.prototype.convert = montConvert),
  (Montgomery.prototype.revert = montRevert),
  (Montgomery.prototype.reduce = montReduce),
  (Montgomery.prototype.mulTo = montMulTo),
  (Montgomery.prototype.sqrTo = montSqrTo),
  (BigInteger.prototype.copyTo = bnpCopyTo),
  (BigInteger.prototype.fromInt = bnpFromInt),
  (BigInteger.prototype.fromString = bnpFromString),
  (BigInteger.prototype.clamp = bnpClamp),
  (BigInteger.prototype.dlShiftTo = bnpDLShiftTo),
  (BigInteger.prototype.drShiftTo = bnpDRShiftTo),
  (BigInteger.prototype.lShiftTo = bnpLShiftTo),
  (BigInteger.prototype.rShiftTo = bnpRShiftTo),
  (BigInteger.prototype.subTo = bnpSubTo),
  (BigInteger.prototype.multiplyTo = bnpMultiplyTo),
  (BigInteger.prototype.squareTo = bnpSquareTo),
  (BigInteger.prototype.divRemTo = bnpDivRemTo),
  (BigInteger.prototype.invDigit = bnpInvDigit),
  (BigInteger.prototype.isEven = bnpIsEven),
  (BigInteger.prototype.exp = bnpExp),
  (BigInteger.prototype.toString = bnToString),
  (BigInteger.prototype.negate = bnNegate),
  (BigInteger.prototype.abs = bnAbs),
  (BigInteger.prototype.compareTo = bnCompareTo),
  (BigInteger.prototype.bitLength = bnBitLength),
  (BigInteger.prototype.mod = bnMod),
  (BigInteger.prototype.modPowInt = bnModPowInt),
  (BigInteger.ZERO = nbv(0)),
  (BigInteger.ONE = nbv(1)),
  (NullExp.prototype.convert = nNop),
  (NullExp.prototype.revert = nNop),
  (NullExp.prototype.mulTo = nMulTo),
  (NullExp.prototype.sqrTo = nSqrTo),
  (Barrett.prototype.convert = barrettConvert),
  (Barrett.prototype.revert = barrettRevert),
  (Barrett.prototype.reduce = barrettReduce),
  (Barrett.prototype.mulTo = barrettMulTo),
  (Barrett.prototype.sqrTo = barrettSqrTo);
var lowprimes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
    139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449,
    457, 461, 463, 467, 479, 487, 491, 499, 503, 509
  ],
  lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
function bnIsProbablePrime(t) {
  var i,
    r = this.abs();
  if (1 == r.t && r.data[0] <= lowprimes[lowprimes.length - 1]) {
    for (i = 0; i < lowprimes.length; ++i) if (r.data[0] == lowprimes[i]) return !0;
    return !1;
  }
  if (r.isEven()) return !1;
  for (i = 1; i < lowprimes.length; ) {
    for (var e = lowprimes[i], n = i + 1; n < lowprimes.length && e < lplim; ) e *= lowprimes[n++];
    for (e = r.modInt(e); i < n; ) if (e % lowprimes[i++] == 0) return !1;
  }
  return r.millerRabin(t);
}
function bnpMillerRabin(t) {
  var i = this.subtract(BigInteger.ONE),
    r = i.getLowestSetBit();
  if (r <= 0) return !1;
  for (var e, n = i.shiftRight(r), o = bnGetPrng(), s = 0; s < t; ++s) {
    do {
      e = new BigInteger(this.bitLength(), o);
    } while (e.compareTo(BigInteger.ONE) <= 0 || e.compareTo(i) >= 0);
    var a = e.modPow(n, this);
    if (0 != a.compareTo(BigInteger.ONE) && 0 != a.compareTo(i)) {
      for (var h = 1; h++ < r && 0 != a.compareTo(i); ) if (0 == (a = a.modPowInt(2, this)).compareTo(BigInteger.ONE)) return !1;
      if (0 != a.compareTo(i)) return !1;
    }
  }
  return !0;
}
function bnGetPrng() {
  return {
    nextBytes: function (t) {
      for (var i = 0; i < t.length; ++i) t[i] = Math.floor(256 * Math.random());
    }
  };
}
(BigInteger.prototype.chunkSize = bnpChunkSize),
  (BigInteger.prototype.toRadix = bnpToRadix),
  (BigInteger.prototype.fromRadix = bnpFromRadix),
  (BigInteger.prototype.fromNumber = bnpFromNumber),
  (BigInteger.prototype.bitwiseTo = bnpBitwiseTo),
  (BigInteger.prototype.changeBit = bnpChangeBit),
  (BigInteger.prototype.addTo = bnpAddTo),
  (BigInteger.prototype.dMultiply = bnpDMultiply),
  (BigInteger.prototype.dAddOffset = bnpDAddOffset),
  (BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo),
  (BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo),
  (BigInteger.prototype.modInt = bnpModInt),
  (BigInteger.prototype.millerRabin = bnpMillerRabin),
  (BigInteger.prototype.clone = bnClone),
  (BigInteger.prototype.intValue = bnIntValue),
  (BigInteger.prototype.byteValue = bnByteValue),
  (BigInteger.prototype.shortValue = bnShortValue),
  (BigInteger.prototype.signum = bnSigNum),
  (BigInteger.prototype.toByteArray = bnToByteArray),
  (BigInteger.prototype.equals = bnEquals),
  (BigInteger.prototype.min = bnMin),
  (BigInteger.prototype.max = bnMax),
  (BigInteger.prototype.and = bnAnd),
  (BigInteger.prototype.or = bnOr),
  (BigInteger.prototype.xor = bnXor),
  (BigInteger.prototype.andNot = bnAndNot),
  (BigInteger.prototype.not = bnNot),
  (BigInteger.prototype.shiftLeft = bnShiftLeft),
  (BigInteger.prototype.shiftRight = bnShiftRight),
  (BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit),
  (BigInteger.prototype.bitCount = bnBitCount),
  (BigInteger.prototype.testBit = bnTestBit),
  (BigInteger.prototype.setBit = bnSetBit),
  (BigInteger.prototype.clearBit = bnClearBit),
  (BigInteger.prototype.flipBit = bnFlipBit),
  (BigInteger.prototype.add = bnAdd),
  (BigInteger.prototype.subtract = bnSubtract),
  (BigInteger.prototype.multiply = bnMultiply),
  (BigInteger.prototype.divide = bnDivide),
  (BigInteger.prototype.remainder = bnRemainder),
  (BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder),
  (BigInteger.prototype.modPow = bnModPow),
  (BigInteger.prototype.modInverse = bnModInverse),
  (BigInteger.prototype.pow = bnPow),
  (BigInteger.prototype.gcd = bnGCD),
  (BigInteger.prototype.isProbablePrime = bnIsProbablePrime);
