var FieldOverrides = (function () {
  var e,
    r = "off",
    t = "username",
    s = "new-password",
    i = "current-password",
    a = {};
  function o() {
    (reduxApp.getState().settings.features.field_override_global || reduxApp.getState().settings.features.field_override_admin) &&
      LPServer.lmiapi.jsonRequest({
        url: "lmiapi/fieldoverrides",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (e) {
          for (var t in e) {
            var t;
            e.hasOwnProperty(t) &&
              ((t = e[t]),
              a[t.host + t.path] || (a[t.host + t.path] = []),
              a[t.host + t.path].push({ querySelector: t.querySelector, override: r }));
          }
        }
      });
  }
  function n(e) {
    e &&
      (reduxApp.getState().settings.features.field_override_global || reduxApp.getState().settings.features.field_override_admin
        ? e(a)
        : e([]));
  }
  function p(e, t) {
    var e, e, r;
    e &&
      t &&
      (reduxApp.getState().settings.features.field_override_global || reduxApp.getState().settings.features.field_override_admin
        ? ((e = (e = 1 < e.pathname.length ? e.host + e.pathname : e.host).toLowerCase()), t(a.hasOwnProperty(e) ? a[e] : []))
        : t([]));
  }
  function d() {
    a = {};
  }
  return Topics.get(Topics.LOGIN_FINISHED).subscribe(o), Topics.get(Topics.CLEAR_DATA).subscribe(d), { getAll: n, getSite: p };
})();
