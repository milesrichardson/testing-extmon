Topics.get(Topics.INITIALIZED).subscribe(function () {
  var o;
  function e() {
    var n;
    window.bg.get("g_pendo_jwt_token") &&
      ((n = LPPlatform.getResourcePath("pendo.js")),
      ((o = document.createElement("iframe")).style.display = "none"),
      o.addEventListener("load", function () {
        var e = document.createElement("script");
        (e.src = n),
          e.addEventListener("load", function () {
            pendo.initialize({ jwt: window.bg.get("g_pendo_jwt_token"), signingKeyName: window.bg.get("g_pendo_signing_key_name") });
          }),
          o.contentDocument.body.appendChild(e);
      }),
      document.body.appendChild(o));
  }
  e(),
    Topics.get(Topics.REFRESH_DATA).subscribe(function () {
      o || e();
    }),
    Topics.get(Topics.CLEAR_DATA).subscribe(function () {
      "undefined" != typeof pendo && (pendo.removeLauncher(), pendo.stopGuides(), pendo.clearSession()),
        o && (document.body.removeChild(o), (o = void 0));
    });
});
