LPServer.emergencyAccess = (function () {
  var n = "legacy_helper.php",
    s = "lmiapi/emergency-access",
    a = function (e) {
      var r = new LPServer.ext.RSAKey(),
        r = (LPServer.ext.parsePublicKey(r, e.params.recipient.publickey), r.encrypt(LPServer.ext.bin2hex(LPServer.ext.getLocalKey())));
      LPServer.jsonRequest({
        url: n,
        data: {
          action: "update_sharee",
          semail: e.params.recipient.username,
          enc_key: r,
          prio: 1,
          hours: e.params.recipient.hours_to_override
        },
        userSupplied: e
      });
    },
    e,
    r,
    c,
    i,
    t,
    u,
    l;
  (r = function (e, r) {
    e.errors instanceof Array && 0 < e.errors.length
      ? r.callbacks && r.callbacks.nosharingkeys
        ? r.callbacks.nosharingkeys(e, r)
        : r.error("nosharingkeys")
      : e.noemail instanceof Array && 0 < e.noemail.length
      ? (r.callbacks && r.callbacks.invite && r.callbacks.invite({ emails: e.noemail }), r.error(""))
      : e[r.params.recipient.username]
      ? ((r.params.recipient.publickey = e[r.params.recipient.username]), a(r))
      : r.error();
  }),
    (o = function (e, r) {
      r.callbacks && r.callbacks.successGranted && r.callbacks.successGranted(e, r);
    }),
    (d = function (e, r) {
      r.callbacks && r.callbacks.successLinked && r.callbacks.successLinked(e, r);
    }),
    (m = function (e, r) {
      var a = new LPServer.ext.RSAKey(),
        a = (LPServer.ext.parsePrivateKey(a), a.decrypt(e.enc_key));
      LPServer.xmlRequest({
        url: n,
        data: {
          action: "link",
          name: r.params.sharer.username,
          legacy: 1,
          sharekey: e.enc_key,
          sharename: LPServer.ext.encrypt(r.params.sharer.username, LPServer.ext.hex2bin(a))
        },
        callbacks: { ok: d },
        userSupplied: r
      });
    });
  var p,
    o,
    d,
    m,
    S,
    y,
    f = function (e) {
      if (!e || !e.length || !g_uid) return !1;
      LPServer.lmiapi.jsonRequest({ url: s + "/sharees", method: "POST", data: e });
    },
    v = function (r, a) {
      LPServer.lmiapi.jsonRequest({
        url: s + "/sharees",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (e) {
          r && r(e);
        },
        error: function (e) {
          "undefined" != typeof Raven && Raven.captureException(e, { extra: { uid: g_uid } }), a && a();
        }
      });
    },
    h;
  return {
    updateRecipient: a,
    addRecipient: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "get_pubkey", emails: e.params.recipient.username }, success: r, userSupplied: e });
    },
    removeRecipient: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "revoke_offer", email: e.params.email }, userSupplied: e });
    },
    getRecipientInfo: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "get_sharees", lemail: e.params.email }, userSupplied: e });
    },
    getSharerInfo: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "get_sharers" }, userSupplied: e });
    },
    acceptOffer: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "accept_offer", email: e.params.sharer.username }, userSupplied: e });
    },
    declineOffer: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "decline_offer", email: e.params.email }, userSupplied: e });
    },
    requestAccess: function (e) {
      LPServer.jsonRequest({
        url: n,
        data: { action: "confirm", lemail: e.params.sharer.username },
        callbacks: { success: o, allowed: m },
        userSupplied: e
      });
    },
    denyAccess: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "deny_access", email: e.params.email }, userSupplied: e });
    },
    unlinkAccount: function (e) {
      LPServer.jsonRequest({ url: n, data: { action: "unlink", lemail: e.params.email }, userSupplied: e });
    },
    updateShareeKey: f,
    getEmergencyAccessShareeData: v,
    checkEmergencyAccessHealth: function () {
      v(function (e) {
        var n;
        e &&
          ((n = []),
          e.forEach(function (e) {
            var r = e.publicSharingKey,
              a,
              r;
            r &&
              e.updateRequired &&
              ((a = new RSAKey()), parse_public_key(a, r)) &&
              ((r = a.encrypt(LPServer.ext.bin2hex(LPServer.ext.getLocalKey()))), n.push({ userId: e.userId, encryptedVaultKey: r }));
          }),
          e.length &&
            reduxApp &&
            "function" == typeof reduxApp.completeSecondaryOnboardingSkill &&
            reduxApp.completeSecondaryOnboardingSkill("SetUpEmergencyAccess"),
          n.length) &&
          f(n);
      });
    }
  };
})();
