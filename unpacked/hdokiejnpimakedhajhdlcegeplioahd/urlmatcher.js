var LPTools = LPTools || {};
!(function (e) {
  (e.createUrlPattern = l), (e.allUrls = o);
  var r,
    t,
    n = new RegExp("^" + "(\\*|(?:\\*\\.)?(?:[^/*]+))?" + "(/.*)" + "$");
  function l(e) {
    var e = n.exec(e),
      r,
      e;
    return e && ((r = e[1]), (e = e[2]), r) ? a(r, e) : null;
  }
  function a(e, r) {
    var t = "^";
    return (
      e && ("*" === e ? (t += ".+?") : (e.match(/^\*\./) && ((t += "(.+?\\.)?"), (e = e.substring(2))), (t += e.replace(/\./g, "\\.")))),
      r && (t = t + r.replace(/\*/g, ".*?") + "/?"),
      (t += "$"),
      new RegExp(t)
    );
  }
  function o() {
    return /(http|https|file|ftp):\/\/.+/;
  }
})(LPTools);
