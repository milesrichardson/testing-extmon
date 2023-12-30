!(function (h) {
  var e = ["protocol", "host", "port", "path", "queryKey", "anchor"];
  (Okta.Url = function (r) {
    var t;
    h.isString(r)
      ? ((t = Okta.parseUri(r)).href = t.source)
      : (t = {
          protocol: r.protocol.replace(":", ""),
          host: r.hostname,
          port: r.port,
          path: r.pathname,
          query: r.search.replace("?", ""),
          queryKey: Okta.parseUri(r.search).queryKey,
          anchor: r.hash.replace("#", ""),
          href: r.href
        }),
      h.extend(this, t);
  }),
    h.extend(Okta.Url.prototype, {
      matches: function (r, t) {
        var o;
        return t
          ? new RegExp(r).test(this.href)
          : ((o = Okta.parseUri(r)),
            h(e).every(function (r) {
              switch (r) {
                case "protocol":
                case "port":
                case "host":
                  return this[r] === o[r];
                case "path":
                  return (t = this[r]), (a = o[r]), t.length >= a.length && t.substr(0, a.length) === a;
                case "queryKey":
                  return (
                    (e = this[r]),
                    (a = o[r]),
                    h(a).every(function (r, t) {
                      return e[t] === r;
                    })
                  );
                case "anchor":
                  return "" === o[r] || this[r] === o[r];
                default:
                  throw "Invalid url part: " + r;
              }
              var e, t, a;
            }, this));
      }
    });
})(Okta._okta);
