Topics.get(Topics.INITIALIZED).subscribe(function () {
  var n = !1;
  function e() {
    var e;
    window.bg.get("g_pendo_jwt_token") &&
      (((e = document.createElement("script")).src = LPPlatform.getResourcePath("pendo.js")),
      e.addEventListener("load", function () {
        pendo.initialize({ jwt: window.bg.get("g_pendo_jwt_token"), signingKeyName: window.bg.get("g_pendo_signing_key_name") }), (n = !0);
      }),
      document.body.appendChild(e));
  }
  e(),
    Topics.get(Topics.REFRESH_DATA).subscribe(function () {
      n || e();
    }),
    Topics.get(Topics.CLEAR_DATA).subscribe(function () {
      n && ((n = !1), pendo) && (pendo.removeLauncher(), pendo.stopGuides());
    });
});
