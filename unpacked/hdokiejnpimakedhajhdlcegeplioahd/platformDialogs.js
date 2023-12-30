LPPlatform = {
  getResourcePath: function (e) {
    var n;
    return "undefined" != typeof filemtimes && void 0 !== filemtimes[e]
      ? ((n = filemtimes[e]), "../m.php/newvault_" + (e = e.replace(/[\.\/]/g, "_")) + "?" + encodeURIComponent(n))
      : e;
  },
  getResourceName: function (e) {
    return -1 === document.location.href.indexOf("dev.lastpass.com") && -1 === document.location.href.indexOf("127.0.0.1")
      ? e.replace(/\.js$/, "c.js")
      : e;
  },
  openURL: function (e) {
    window.open(e);
  },
  getBaseURL: function (e) {
    return "";
  },
  logException: function (e) {
    var n = e.message;
    e.stack && (n += "\n" + e.stack), LPPlatform.logError(n);
  },
  logError: function (e) {
    (e = "Page: " + window.location.href + " Error: " + e), console.error(e);
  },
  getHTML: function (e, n) {
    $.ajax({ url: e, success: n, dataType: "text" });
  },
  translate: function (e) {
    return "undefined" != typeof translations && translations[e] ? translations[e] : e;
  },
  addEventListener: function (e) {
    for (var n = [], t = 1; t < arguments.length; ++t) n.push(arguments[t]);
    e.addEventListener.apply(e, n);
  },
  removeEventListener: function (e) {
    for (var n = [], t = 1; t < arguments.length; ++t) n.push(arguments[t]);
    e.removeEventListener.apply(e, n);
  }
};
