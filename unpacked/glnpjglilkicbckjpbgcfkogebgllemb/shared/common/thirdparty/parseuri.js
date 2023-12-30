!(function () {
  function a(r) {
    for (var t = a.options, e = t.parser[t.strictMode ? "strict" : "loose"].exec(r), s = {}, o = 14; o--; ) s[t.key[o]] = e[o] || "";
    return (
      (s[t.q.name] = {}),
      s[t.key[12]].replace(t.q.parser, function (r, e, o) {
        e && (s[t.q.name][e] = o);
      }),
      s
    );
  }
  (a.options = {
    strictMode: !1,
    key: [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ],
    q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
    parser: {
      strict:
        /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose:
        /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  }),
    (Okta.parseUri = a);
})();
