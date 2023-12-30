var StringUtil = {
  format: function (r, t) {
    return r.replace(/\{(\d+)\}/g, function (r, n) {
      return "undefined" != typeof t[n] ? t[n] : r;
    });
  },
  hashCode: function (r) {
    if ("string" != typeof r) return "not string";
    var n = 0;
    if (0 === r.length) return n;
    for (var t = 0; t < r.length; t++) (n = (n << 5) - n + r.charCodeAt(t)), (n &= n);
    return n;
  }
};
