Okta.fetch = function (r) {
  var o = Okta.Q;
  return function (e) {
    var t = e.url,
      n = { method: e.type, headers: e.headers || {} };
    e.contentType && (n.headers["content-type"] = e.contentType),
      e.data && ("application/json" === n.headers["content-type"] ? (n.body = e.data) : (n.body = new URLSearchParams(e.data)));
    var a = o.defer();
    return (
      r(t, n)
        .then(function (e) {
          return (
            (t = e.ok ? a.resolve : a.reject),
            e.text().then(function (e) {
              t(e ? JSON.parse(e) : {});
            })
          );
          var t;
        })
        ["catch"](a.reject),
      a.promise
    );
  };
};
