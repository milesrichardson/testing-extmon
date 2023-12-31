!(function () {
  var r = CryptoJS,
    a = r.lib.WordArray;
  r.enc.Base64 = {
    stringify: function (r) {
      var a = r.words,
        t = r.sigBytes,
        i = this._map;
      r.clamp();
      for (var n = [], f = 0; f < t; f += 3)
        for (
          var e =
              (((a[f >>> 2] >>> (24 - (f % 4) * 8)) & 255) << 16) |
              (((a[(f + 1) >>> 2] >>> (24 - ((f + 1) % 4) * 8)) & 255) << 8) |
              ((a[(f + 2) >>> 2] >>> (24 - ((f + 2) % 4) * 8)) & 255),
            c = 0;
          c < 4 && f + 0.75 * c < t;
          c++
        )
          n.push(i.charAt((e >>> (6 * (3 - c))) & 63));
      var h = i.charAt(64);
      if (h) for (; n.length % 4; ) n.push(h);
      return n.join("");
    },
    parse: function (r) {
      var t = r.length,
        i = this._map,
        n = i.charAt(64);
      if (n) {
        var f = r.indexOf(n);
        -1 != f && (t = f);
      }
      for (var e = [], c = 0, h = 0; h < t; h++)
        if (h % 4) {
          var o = i.indexOf(r.charAt(h - 1)) << ((h % 4) * 2),
            s = i.indexOf(r.charAt(h)) >>> (6 - (h % 4) * 2);
          (e[c >>> 2] |= (o | s) << (24 - (c % 4) * 8)), c++;
        }
      return a.create(e, c);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
})();
