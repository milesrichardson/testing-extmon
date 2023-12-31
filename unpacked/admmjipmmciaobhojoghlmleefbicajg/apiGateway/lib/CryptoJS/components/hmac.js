!(function () {
  var e = CryptoJS,
    i = e.lib.Base,
    t = e.enc.Utf8;
  e.algo.HMAC = i.extend({
    init: function (e, i) {
      (e = this._hasher = new e.init()), "string" == typeof i && (i = t.parse(i));
      var s = e.blockSize,
        n = 4 * s;
      i.sigBytes > n && (i = e.finalize(i)), i.clamp();
      for (var r = (this._oKey = i.clone()), a = (this._iKey = i.clone()), h = r.words, o = a.words, c = 0; c < s; c++)
        (h[c] ^= 1549556828), (o[c] ^= 909522486);
      (r.sigBytes = a.sigBytes = n), this.reset();
    },
    reset: function () {
      var e = this._hasher;
      e.reset(), e.update(this._iKey);
    },
    update: function (e) {
      return this._hasher.update(e), this;
    },
    finalize: function (e) {
      var i = this._hasher,
        t = i.finalize(e);
      return i.reset(), i.finalize(this._oKey.clone().concat(t));
    }
  });
})();
