function PWCHANGER() {
  var h = 2,
    m = "",
    g = [],
    k = "",
    w = "",
    v = "",
    b = "",
    T = "",
    S = "",
    P = 0,
    E = 0,
    A = "",
    O = "",
    x = [],
    C = 6e5,
    R = 10,
    u = "",
    I = [],
    j = !1,
    K = !1,
    N = !1,
    H = "";
  function F() {
    return "undefined" != typeof $ ? $.ajax : LPPlatform.doAjax;
  }
  function L(e, n) {
    n({ type: "POST", url: m + "error.php", data: { msg: e }, dataType: "text", success: function () {}, failure: function () {} });
  }
  function _(n, t, a, r, o, e, i, s, u, c, d, p, l, f, y) {
    var _ = void 0 !== l ? l : "",
      h,
      g;
    void 0 !== f && f && (R = f),
      "function" != typeof i && (i = function () {}),
      (A = d = void 0 !== d && null != d ? d : ""),
      (O = p),
      (m = s),
      "function" == typeof u && u(0, 0),
      X(
        a,
        t,
        r,
        e,
        function (e) {
          var e;
          "string" != typeof e
            ? i(4, !1, !1, "A : Invalid Response")
            : "usernametaken" == e
            ? i(1, !1, !1, "B : Username Taken")
            : ("function" == typeof u && u(0, 1),
              (e = {
                oldkey: n,
                oldkey1: _,
                oldpwhash: t,
                oldemail: a,
                newemail: r,
                newpassword: o,
                callback: i,
                reencrypt: e,
                status: u,
                foundendmarker: !1
              }),
              y && (e.ks = "true"),
              (x = e),
              setTimeout(function () {
                M();
              }, 0));
        },
        function (e, n, t) {
          i(2, !1, !1, "C : " + n + " suberror=" + t);
        },
        c
      );
  }
  function X(a, r, o, i, s, u, c) {
    var e = function () {
      var e = void 0 !== r && null != r && "" != r ? { wxusername: a, wxhash: r } : {},
        n =
          (void 0 !== c && null != c && "" != c && (e.vendor = c),
          m +
            "getaccts.php?changepw=1&changepw2=1&includersaprivatekeyenc=1&changeun=" +
            (a != o ? encodeURIComponent(o) : "") +
            "&resetrsakeys=" +
            (i ? "1" : "0") +
            "&includeendmarker=1"),
        t;
      "undefined" != typeof g_recovery_uid && (n += "&recovery_uid=" + encodeURIComponent(g_recovery_uid)),
        F()({
          url: n,
          type: "POST",
          data: e,
          timeout: 3e5,
          success: "function" == typeof s ? s : null,
          error: "function" == typeof u ? u : null
        });
    };
    n(function () {
      t(function () {
        e();
      }, u);
    }, u);
  }
  function D(p, l, f, y, _) {
    "" === f && y();
    var e = A || token,
      n;
    F()({
      url: m + "lmiapi/one-time-password",
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ masterPasswordHash: f }),
      headers: { "X-CSRF-TOKEN": e },
      success: function (n, t) {
        if ("object" != typeof n.oneTimePasswords) "function" == typeof _ && _(n, t, "Invalid one time password response");
        else if (((I = []), 0 === n.oneTimePasswords.length)) "function" == typeof y && y();
        else {
          var e = [];
          try {
            for (var a = fix_username(x.newemail), r = 0; r < n.oneTimePasswords.length; r++) {
              var o = n.oneTimePasswords[r],
                i = {},
                s = dec(o.encryptedOneTimePassword, p),
                u = AES.hex2bin(s),
                c = make_lp_hash(a, u),
                d = make_lp_key(a, u);
              (o.oneTimePasswordHash = c),
                (o.randomEncryptedKey = enc(AES.bin2hex(p), d)),
                (i.encryptedOneTimePassword = enc(s, l)),
                (i.randomEncryptedKey = enc(AES.bin2hex(l), d)),
                (i.oneTimePasswordHash = c),
                e.push(i),
                I.push(o);
            }
          } catch (e) {
            return void ("function" == typeof _ && _(n, t, "OTP Encryption failed"));
          }
          U(e, f, y, _);
        }
      },
      error: function (e, n) {
        "function" == typeof _ && _(e, n, "GET one time passwords failed");
      }
    });
  }
  function G(e) {
    0 !== I.length
      ? U(I, x.oldpwhash, e, function () {
          "function" == typeof e && e();
        })
      : "function" == typeof e && e();
  }
  function U(e, n, t, a) {
    "" === n && t();
    var e = JSON.stringify({ oneTimePasswords: e, masterPasswordHash: n }),
      n = A || token,
      r;
    F()({
      url: m + "lmiapi/one-time-password/update",
      type: "POST",
      contentType: "application/json",
      headers: { "X-CSRF-TOKEN": n },
      data: e,
      dataType: "json",
      success: t,
      error: function (e, n) {
        "function" == typeof a && a(e, n, "POST new one time passwords failed");
      }
    });
  }
  function J(r, o, i, s) {
    var e = A || token,
      n;
    F()({
      url: m + "lmiapi/authenticator/backup",
      type: "GET",
      contentType: "application/json",
      dataType: "json",
      headers: { "X-CSRF-TOKEN": e },
      success: function (n, t) {
        var e;
        try {
          u = n.userData;
          var a = dec(n.userData, r),
            e = enc(a, o);
        } catch (e) {
          return void ("function" == typeof s && s(n, t, "Encryption failed"));
        }
        c(e, i, s);
      },
      error: function (e, n) {
        e.status && 404 == e.status ? "function" == typeof i && i() : "function" == typeof s && s(e, n, "GET new LP cloud backup failed");
      }
    });
  }
  function B(e) {
    u
      ? c(u, e, function () {
          "function" == typeof e && e();
        })
      : "function" == typeof e && e();
  }
  function c(e, n, t) {
    var e = JSON.stringify({ userData: e }),
      a = A || token,
      r;
    F()({
      url: m + "lmiapi/authenticator/backup",
      type: "POST",
      contentType: "application/json",
      headers: { "X-CSRF-TOKEN": a },
      data: e,
      dataType: "json",
      success: n,
      error: function (e, n) {
        "function" == typeof t && t(e, n, "POST new LP cloud backup failed");
      }
    });
  }
  function W() {
    var e,
      n = x.callback;
    "function" == typeof n && n(2, !1, !1, null);
  }
  function M() {
    try {
      var e, n;
      if (
        (2 == h &&
          ((g = x.reencrypt.split("\n")),
          "number" == typeof g_target_key_iterations &&
            ((C = g_target_key_iterations), "undefined" != typeof g_key_iterations) &&
            g_key_iterations != g_target_key_iterations &&
            (x.iterationschange = "1"),
          (T = x.newkey || make_lp_key_iterations(fix_username(x.newemail), x.newpassword, C)),
          (k += g[0] + "\n"),
          "" != (e = g[1])) &&
          ("" == (n = rsa_extract_privatekey(e, x.oldkey)) && "" != x.oldkey1 && (n = rsa_extract_privatekey(e, x.oldkey1)),
          (H = "" == n ? ((w = ""), "failed") : ((w = rsa_encrypt_privatekey(n, T)), (n = null), "success")),
          (v = SHA256(AES.bin2hex(T).toUpperCase())),
          (b = SHA256(w))),
        void 0 === g.length)
      )
        x.callback(2, !1, !1, "F2 : internal error");
      else {
        var t,
          a,
          r = !1,
          o = F();
        try {
          enc(" ", T) ? (r = !0) : L("encrypting space failed", o);
        } catch (e) {
          L("space encryption exception: " + e.message, o);
        }
        for (var i = h + 3, s = 0, u, c; h < g.length && h < i; ++h) {
          var d,
            p = g[h].replace(/\r\n|\r|\n/g, "").split("\t");
          if ("endmarker" == (l = p[0])) x.foundendmarker = !0;
          else {
            var f = void 0 !== p.length && 2 <= p.length && "0" == p[1];
            if (void 0 !== l.length && l.length) {
              var y = null,
                _;
              if (r)
                try {
                  (t = dec(l, x.oldkey)),
                    (a = enc(t, T)),
                    t !== dec(a, T) &&
                      ((S += "enc: " + l + " decrypted value does not match reencryption and decryption with new key"), P++, s++);
                } catch (e) {
                  L("reencrypt exception: " + (y = e).message, o);
                }
              (r && null == y && AES.ok(a) && 0 != a.length && null != t && void 0 !== t.length && 0 != t.length) ||
                (f ||
                  (r
                    ? (null != (t = dec(l, T)) && void 0 !== t.length && 0 != t.length) ||
                      (S += "enc: " + l + " decrypted:  reencrypted to: " + a + (null == y ? "" : " : EXCEPTION_A!") + "\n")
                    : ((_ = void 0 === T.length ? "undefined" : T.length),
                      (S += "encrypting <space> using m_newkey (m_newkey.length=" + _ + ") resulted in EXCEPTION_B!\n")),
                  P++),
                (a = r ? l : "")),
                f || E++,
                (k += l + ":" + a + "\n"),
                "function" == typeof x.status && x.status(1, (h - 1) / (g.length - 2));
            }
          }
        }
        s && L("reencryption error: different output", o),
          h < g.length
            ? setTimeout(function () {
                M();
              }, 0)
            : x.foundendmarker
            ? ((void 0 !== R && (R || 0 === R)) || (R = 10),
              (u = A || token),
              "" !== S && L("m_errors: " + S, o),
              "" != S && (E / 100) * R <= P
                ? ((c = {
                    from: "passwordChange",
                    errors: S,
                    username: x.oldemail,
                    private_key_status: H,
                    total: g.length - 2,
                    mandatory_total: E,
                    mandatory_failed: P,
                    super_admin_reset: K ? "yes" : "no"
                  }),
                  o({
                    url: m + "debug.php",
                    data: c,
                    type: "POST",
                    timeout: 6e5,
                    headers: { "X-CSRF-TOKEN": u },
                    success: function (e) {},
                    error: function (e, n) {}
                  }),
                  "function" == typeof x.callback && x.callback(3, null, null, "E : " + S))
                : ("function" == typeof tracelog && tracelog("Re encryption finished."),
                  J(
                    x.oldkey,
                    T,
                    function () {
                      x.iterationschange ? D(x.oldkey, T, x.oldpwhash, q, W) : q();
                    },
                    W
                  )))
            : "function" == typeof x.callback && x.callback(2, !1, !1, "D : Data download not complete");
      }
    } catch (e) {
      x.callback(2, !1, !1, "F : " + e.message);
    }
  }
  (this.hashMigration = function (t, a, r, o, i, e, n, s, u, c) {
    var d, p, l;
    void 0 === c && (c = ""),
      (j = N = K = !1),
      (m = e),
      (A = n),
      (C = s),
      (R = 0),
      "function" != typeof u && (u = function () {}),
      t === o
        ? u(!1, "Hash migration already happened? Maybe stale extension data")
        : X(
            r,
            a,
            r,
            !(d = function (e, n, t, a) {
              0 === e ? u(!0) : u(!1, a);
            }),
            function (e) {
              var n;
              "string" != typeof e
                ? u(!1, "Invalid response")
                : "usernametaken" == e
                ? u(!1, "Username taken or deleted during hash migration")
                : ((x = {
                    oldkey: t,
                    oldkey1: c,
                    oldpwhash: a,
                    oldemail: r,
                    newemail: r,
                    newkey: o,
                    newpwhash: i,
                    callback: d,
                    reencrypt: e,
                    foundendmarker: !1,
                    iterationschange: "1",
                    hashmigration: "1"
                  }),
                  setTimeout(function () {
                    M();
                  }, 0));
            },
            function () {
              u(!1, "Error retrieving accounts data during hash migration");
            }
          );
  }),
    (this.recoveryChangePassword = function (e, n, t, a, r, o, i, s) {
      var u = "",
        c,
        d = (N = K = !(j = !0));
      _(e, n, t, t, a, !1, r, "", o, null, i, s);
    }),
    (this.superAdminPasswordReset = function (e, n, t, a, r, o, i, s) {
      var u = "",
        c,
        d = "",
        p = (N = !(K = !(j = !1)));
      _(e, "", n, t, a, !1, r, "", o, null, i, s);
    }),
    (this.setInitialPassword = function (e, n, t, a, r, o, i, s) {
      var u = "",
        c,
        d = "",
        p = !(N = !(K = j = !1));
      _(e, "", n, t, a, !1, r, "", o, null, i, s);
    }),
    (this.changepw = function (e, n, t, a, r, o, i, s, u, c, d, p, l, f, y) {
      (N = K = j = !1), _(e, n, t, a, r, o, i, s, u, c, d, p, l, f, y);
    });
  var n = function (n, t) {
      var e;
      Array.isArray(window.g_su_pubkeys) && Array.isArray(window.g_su_uids)
        ? n()
        : F()({
            url: m + "lmiapi/users/me/publicsharingkeys",
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            headers: { "X-CSRF-TOKEN": A },
            success: function (e) {
              (window.g_su_pubkeys = e.map(function (e) {
                return e.publicSharingKey;
              })),
                (window.g_su_uids = e.map(function (e) {
                  return e.userId;
                })),
                n && n();
            },
            error: function (e, n) {
              W(), t && t(e, n, "Cannot GET sharing keys");
            }
          });
    },
    t = function (t, a) {
      var e;
      Array.isArray(window.g_lu_pubkeys) && Array.isArray(window.g_lu_uids)
        ? t()
        : ((window.g_lu_pubkeys = []),
          (window.g_lu_uids = []),
          F()({
            url: m + "lmiapi/emergency-access/sharees",
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            headers: { "X-CSRF-TOKEN": A },
            success: function (e) {
              e.forEach(function (e) {
                window.g_lu_pubkeys.push(e.publicSharingKey), window.g_lu_uids.push(e.userId);
              }),
                t && t();
            },
            error: function (e, n) {
              404 === e.status ? t() : (W(), a && a(e, n, "Request for emergency access keys failed"));
            }
          }));
    };
  function q() {
    "function" == typeof tracelog && tracelog("Update data to server.");
    var e = x.newpwhash || make_lp_hash_iterations(T, x.newpassword, C),
      a = {
        reencrypt: k,
        newprivatekeyenc: w,
        newuserkeyhexhash: v,
        newprivatekeyenchexhash: b,
        newpasswordhash: e,
        pwupdate: "1",
        email: x.newemail,
        token: A,
        encrypted_username: encecb(x.newemail, T),
        origusername: x.oldemail,
        key_iterations: C
      },
      r;
    if (
      (x.iterationschange && (a.iterationschange = x.iterationschange),
      x.hashmigration && ((a.hashmigration = x.hashmigration), (a.ks = !0)),
      j && (a.is_recovery = "1"),
      K && ((a.superAdminReset = "1"), g_converttosftargetuid))
    ) {
      var n = make_lp_key_iterations(x.newemail, x.newpassword, C),
        e = make_lp_hash_iterations(n, x.newpassword, C);
      if (
        ((a.converttosfbythissharename = lpenc("Shared-SF from deleted " + x.newemail + " " + g_recovery_uid, n)),
        (a.converttosfbythispasswordhash = e),
        "undefined" != typeof g_sasf_uids && "undefined" != typeof g_sasf_pubkeys && "undefined" != typeof g_sasf_uids_cnt)
      ) {
        for (var t = 0; t < g_sasf_uids_cnt; t++) {
          var o = new RSAKey(),
            i =
              (parse_public_key(o, g_sasf_pubkeys[t]) ||
                lpmessagebox(gs("An Error Occurred"), gs("We are sorry, an error occurred - Cannot parse public key.")),
              o.encrypt(AES.bin2hex(n)));
          (a["adminsharekey" + t] = i), (a["adminuid" + t] = g_sasf_uids[t]);
        }
        a.adminuidcnt = g_sasf_uids_cnt;
      }
      var e = new RSAKey();
      parse_public_key(e, g_targetuid_pubkey)
        ? ((a.converttosfbythistargetuid = g_converttosftargetuid), (a.converttosfbythistargetuidsharekey = e.encrypt(AES.bin2hex(n))))
        : lpmessagebox(gs("An Error Occurred"), gs("We are sorry, an error occurred - Cannot parse public key."));
    }
    if (
      (N && (a.setInitialPassword = "1"),
      void 0 !== x.oldpwhash && null != x.oldpwhash && "" != x.oldpwhash && ((a.wxusername = x.oldemail), (a.wxhash = x.oldpwhash)),
      void 0 !== x.ks && x.ks && (a.ks = "true"),
      void 0 !== O && null != O && (a.password_hint = O),
      "undefined" != typeof g_su_pubkeys && null != g_su_pubkeys && g_su_pubkeys.length)
    ) {
      for (var s = !1, r = 0, u = 0, o; u < g_su_pubkeys.length; u++) {
        "" != g_su_pubkeys[u] &&
          ((o = new RSAKey()), parse_public_key(o, g_su_pubkeys[u])) &&
          ((a["sukey" + r] = o.encrypt(AES.bin2hex(T))), (a["suuid" + r] = g_su_uids[u]), (s = !0), r++);
      }
      if (((a.sukeycnt = r), 0 == s && "function" == typeof x.callback))
        return void x.callback(
          2,
          !1,
          !1,
          gs(
            "Before your LastPass administrator can set up account recovery, all users who are Administrators must log in to a browser extension at least once."
          )
        );
    }
    "undefined" != typeof g_lu_pubkeys &&
      null != g_lu_pubkeys &&
      ((r = 0),
      g_lu_pubkeys.forEach(function (e, n) {
        var t;
        e &&
          ((t = new RSAKey()), parse_public_key(t, e)) &&
          ((a["lukey" + r] = t.encrypt(AES.bin2hex(T))), (a["luuid" + r] = g_lu_uids[n]), r++);
      }),
      (a.lukeycnt = r)),
      "undefined" != typeof g_recovery_uid && (a.recovery_uid = g_recovery_uid),
      "undefined" != typeof g_changeiterations && 1 == g_changeiterations && (a.iterationschange = "1"),
      "undefined" == typeof g_sapr_pwd ||
        "undefined" == typeof g_sapr_newpwd ||
        g_converttosftargetuid ||
        ("undefined" != typeof g_defederate && 1 == g_defederate
          ? ((a.to_be_defederated = 1), (a.defed_pwdlastset = g_sapr_lastPwdSet))
          : ((a.to_be_federated = 1),
            (a.fed_keyALP = g_sapr_keyALP),
            (a.fed_keyLP = g_sapr_keyLP),
            (a.fed_keyLPCheckHash = g_sapr_keyLPCheckHash),
            (a.fed_fragmentId = g_sapr_fragmentId),
            (a.fed_pwdlastset = g_sapr_lastPwdSet))),
      document.URL.includes("familiesinvite=1") && (a.familiesinvite = 1),
      "undefined" != typeof fromcid && (a.cid = fromcid),
      "undefined" != typeof g_oid_fragmentId && (a.fedOId_fragmentId = g_oid_fragmentId),
      "undefined" != typeof g_isFederatedEmailChng && (a.fedEmailChange = g_isFederatedEmailChng);
    var c = x.callback,
      d = T,
      p = x.newemail,
      l = x.status,
      f =
        ((x = new Array()),
        (g = new Array()),
        (h = 2),
        (S = T = k = ""),
        (E = P = 0),
        "function" == typeof l && l(2, 0),
        generateOtpData(p, d)),
      y = F(),
      _ =
        ((f.lmiapiData.masterPasswordHash = a.wxhash),
        y({
          url: m + "lmiapi/one-time-password/add",
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify(f.lmiapiData),
          headers: { "X-CSRF-TOKEN": a.token },
          success: function () {
            localStorage.setItem(SHA256(p) + "_otp", AES.bin2hex(f.OTP)), _(f.lmiapiData.oneTimePasswordHash);
          },
          error: function () {
            _();
          }
        }),
        function (e) {
          e && (a.not_to_be_deleted_otp_hash = e),
            y({
              url: m + "settings.php",
              data: a,
              type: "POST",
              timeout: 6e5,
              success: function (e) {
                "function" == typeof l && l(2, 1),
                  -1 == e.indexOf("pwchangeok")
                    ? 0 <= e.indexOf("reusepass")
                      ? B(function () {
                          G(function () {
                            c(2, !1, !1, "H : " + e.split("\n")[1]);
                          });
                        })
                      : 0 == e.indexOf("error\n")
                      ? B(function () {
                          G(function () {
                            c(2, !1, !1, e.split("\n")[1]);
                          });
                        })
                      : B(function () {
                          G(function () {
                            c(2, !1, !1, "I : An error occured");
                          });
                        })
                    : "function" == typeof c && c(0, d, p);
              },
              error: function (e, n, t) {
                B(function () {
                  G(function () {
                    "function" == typeof c && c(2, !1, !1, "J : " + n + " suberror=" + t);
                  });
                });
              }
            });
        });
  }
}
String.prototype.includes ||
  (String.prototype.includes = function (e, n) {
    "use strict";
    return !((n = "number" != typeof n ? 0 : n) + e.length > this.length) && -1 !== this.indexOf(e, n);
  });