var generateSharingKeysFromVault = (function () {
  "use strict";
  function a(a) {
    var e = new RSAKey();
    generate_key(e, function (e) {
      n(e, a);
    });
  }
  function n(e, n) {
    e || n("RSA generation failed."), (g_local_key && g_local_key && base_url && LPServer) || n("Global dependencies missing.");
    var a = null != document.getElementById("newvault"),
      r = encode_public_key(e),
      e = encode_private_key(e),
      t,
      t = (t = rsa_encrypt_privatekey(e, g_local_key)).toUpperCase(),
      e = {},
      r =
        ((e.privatekeyenc = t),
        (e.publickey = r),
        (e.userkeyhexhash = SHA256(AES.bin2hex(g_local_key))),
        (e.privatekeyenchexhash = SHA256(t)),
        (e.token = a ? decodeURIComponent(g_token) : g_token),
        (e.from = a ? "webvault" : "vault"),
        (e.method = get_method()),
        "undefined" != typeof lpversion && (e.lpversion = lpversion),
        a ? base_url + "uploadrsakeys_website.php" : base_url + "uploadrsakeys.php"),
      o,
      l;
    LPServer.ajax({
      type: "POST",
      url: r,
      data: e,
      success: function (e, a) {
        (lp_rsaprivatekeyenchex = t), (lp_rsaprivatekeyhex = rsa_extract_privatekey(lp_rsaprivatekeyenchex, g_local_key)), n(!1);
      },
      error: function (e, a) {
        n(e);
      }
    });
  }
  return function (e) {
    a(e);
  };
})();
