var LPRavenTransport = (function () {
  Topics.get(Topics.LOGIN_FINISHED).subscribe(function () {
    Raven.setUserContext({ id: g_uid });
  });
  var e = null,
    t = [],
    i = function (t) {
      var i = function () {
        var n, e;
        0 < t.length &&
          ((n = t.pop()),
          (e = n.onSuccess),
          (n.onSuccess = function () {
            return i(), e.apply(n, arguments);
          }),
          Raven._makeRequest(n));
      };
      i();
    },
    n;
  return (
    LPServer.lmiapi.jsonRequest({
      url: "lmiapi/environment-config",
      type: "GET",
      CSRFToken: !1,
      success: function (n) {
        (e = n.isSentryEnabled) && 0 < t.length && (i(t), (t = []));
      }
    }),
    function (n) {
      !1 !== e
        ? (LPRavenSanitize && "function" == typeof LPRavenSanitize.sanitize && (n.data = LPRavenSanitize.sanitize(n.data)),
          Raven._makeRequest(n))
        : t.push(n);
    }
  );
})();
