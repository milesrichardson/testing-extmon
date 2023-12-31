var pidCryptUtil = {
  encodeBase64: function (r, e) {
    r || (r = "");
    var t,
      n,
      o,
      a,
      f,
      c,
      i,
      u,
      d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      h = [],
      C = "";
    if ((c = (i = (e = void 0 !== e && e) ? pidCryptUtil.encodeUTF8(r) : r).length % 3) > 0) for (; c++ < 3; ) (C += "="), (i += "\0");
    for (c = 0; c < i.length; c += 3)
      (n = ((t = (i.charCodeAt(c) << 16) | (i.charCodeAt(c + 1) << 8) | i.charCodeAt(c + 2)) >> 18) & 63),
        (o = (t >> 12) & 63),
        (a = (t >> 6) & 63),
        (f = 63 & t),
        (h[c / 3] = d.charAt(n) + d.charAt(o) + d.charAt(a) + d.charAt(f));
    return (u = h.join("")).slice(0, u.length - C.length) + C;
  },
  decodeBase64: function (r, e) {
    r || (r = "");
    var t,
      n,
      o,
      a,
      f,
      c,
      i,
      u,
      d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      h = [];
    u = (e = void 0 !== e && e) ? pidCryptUtil.decodeUTF8(r) : r;
    for (var C = 0; C < u.length; C += 4)
      (t =
        ((c =
          (d.indexOf(u.charAt(C)) << 18) |
          (d.indexOf(u.charAt(C + 1)) << 12) |
          ((a = d.indexOf(u.charAt(C + 2))) << 6) |
          (f = d.indexOf(u.charAt(C + 3)))) >>>
          16) &
        255),
        (n = (c >>> 8) & 255),
        (o = 255 & c),
        (h[C / 4] = String.fromCharCode(t, n, o)),
        64 == f && (h[C / 4] = String.fromCharCode(t, n)),
        64 == a && (h[C / 4] = String.fromCharCode(t));
    return (i = h.join("")), e ? pidCryptUtil.decodeUTF8(i) : i;
  },
  encodeUTF8: function (r) {
    return (
      r || (r = ""),
      (r = r.replace(/[\u0080-\u07ff]/g, function (r) {
        var e = r.charCodeAt(0);
        return String.fromCharCode(192 | (e >> 6), 128 | (63 & e));
      })).replace(/[\u0800-\uffff]/g, function (r) {
        var e = r.charCodeAt(0);
        return String.fromCharCode(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (63 & e));
      })
    );
  },
  decodeUTF8: function (r) {
    return (
      r || (r = ""),
      (r = r.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (r) {
        var e = ((31 & r.charCodeAt(0)) << 6) | (63 & r.charCodeAt(1));
        return String.fromCharCode(e);
      })).replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (r) {
        var e = ((15 & r.charCodeAt(0)) << 12) | ((63 & r.charCodeAt(1)) << 6) | (63 & r.charCodeAt(2));
        return String.fromCharCode(e);
      })
    );
  },
  convertToHex: function (r) {
    r || (r = "");
    for (var e = "", t = "", n = 0; n < r.length; n++) e += 1 == (t = r.charCodeAt(n).toString(16)).length ? "0" + t : t;
    return e;
  },
  convertFromHex: function (r) {
    r || (r = "");
    for (var e = "", t = 0; t < r.length; t += 2) e += String.fromCharCode(parseInt(r.substring(t, t + 2), 16));
    return e;
  },
  stripLineFeeds: function (r) {
    return r || (r = ""), r.replace(/\n/g, "").replace(/\r/g, "");
  },
  toByteArray: function (r) {
    r || (r = "");
    for (var e = [], t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
    return e;
  },
  fragment: function (r, e, t) {
    if ((r || (r = ""), !e || e >= r.length)) return r;
    t || (t = "\n");
    for (var n = "", o = 0; o < r.length; o += e) n += r.substr(o, e) + t;
    return n;
  },
  formatHex: function (r, e) {
    r || (r = ""), e || (e = 45);
    for (var t = "", n = r.toLowerCase(), o = 0; o < n.length; o += 2) t += n.substr(o, 2) + ":";
    return this.fragment(t, e);
  },
  byteArray2String: function (r) {
    for (var e = "", t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
    return e;
  }
};
module.exports = pidCryptUtil;
