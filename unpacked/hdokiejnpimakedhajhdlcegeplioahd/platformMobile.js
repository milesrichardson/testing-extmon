LPPlatform = (function () {
  var s = "",
    t =
      ((window.lp_setmethod = function (t) {
        s = t;
      }),
      function () {
        return s;
      }),
    f = "0.0.0",
    n =
      ((window.lp_setversion = function (t) {
        f = t;
      }),
      function () {
        return f;
      });
  (r = function (t) {
    return host.translate(t);
  }),
    (o = function (t) {
      return t;
    });
  var e,
    r,
    o,
    u =
      ((i = function (t, n, e) {
        host.status(t, n, e ? JSON.stringify(e) : null);
      }),
      (c = function (t, n, e) {
        console.log(t + " " + n);
      }),
      function (t, n, e) {
        ("undefined" != typeof host && "function" == typeof host.status ? (LPPlatform.returnResult = i) : (LPPlatform.returnResult = c))(
          t,
          n,
          e
        );
      }),
    i,
    c,
    l = function (t, n) {
      u(!0, t, n);
    },
    a = function (t, n) {
      u(!1, t, n);
    },
    d;
  return {
    translate: function (t) {
      return "undefined" != typeof host && "function" == typeof host.translate
        ? (LPPlatform.translate = r)(t)
        : ((LPPlatform.translate = o), t);
    },
    returnResult: u,
    returnSuccess: l,
    returnError: a,
    makeRequest: function (t, n, e, r, o) {
      var u = l;
      "function" == typeof r
        ? (u = function (t, n) {
            r(!0, t, n ? JSON.stringify(n) : null);
          })
        : void 0 === o && (o = r),
        (o.requestArgs = { token: n, wxsessid: e, method: s, lpversion: f }),
        (o.success = o.success || u),
        (o.error = o.error || a),
        t(o);
    },
    getMethod: t,
    getVersion: n
  };
})();
