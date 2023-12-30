function PWCHANGER() {
  var g = 2,
    m = "",
    h = [],
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
    I = 10,
    u = "",
    R = [],
    K = !1,
    j = !1,
    N = !1,
    H = "";
  function F() {
    return "undefined" != typeof $ ? $.ajax : LPPlatform.doAjax;
  }
  function _(n, t, r, a, o, e, i, s, u, d, c, p, l, f, y) {
    var _ = void 0 !== l ? l : "",
      g,
      h;
    void 0 !== f && f && (I = f),
      "function" != typeof i && (i = function () {}),
      (A = c = void 0 !== c && null != c ? c : ""),
      (O = p),
      (m = s),
      "function" == typeof u && u(0, 0),
      L(
        r,
        t,
        a,
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
                oldemail: r,
                newemail: a,
                newpassword: o,
                callback: i,
                reencrypt: e,
                status: u,
                foundendmarker: !1
              }),
              y && (e.ks = "true"),
              (x = e),
              setTimeout(function () {
                W();
              }, 0));
        },
        function (e, n, t) {
          i(2, !1, !1, "C : " + n + " suberror=" + t);
        },
        d
      );
  }
  function L(r, a, o, i, s, u, d) {
    var e = function () {
      var e = void 0 !== a && null != a && "" != a ? { wxusername: r, wxhash: a } : {},
        n =
          (void 0 !== d && null != d && "" != d && (e.vendor = d),
          m +
            "getaccts.php?changepw=1&changepw2=1&includersaprivatekeyenc=1&changeun=" +
            (r != o ? encodeURIComponent(o) : "") +
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
        else if (((R = []), 0 === n.oneTimePasswords.length)) "function" == typeof y && y();
        else {
          var e = [];
          try {
            for (var r = fix_username(x.newemail), a = 0; a < n.oneTimePasswords.length; a++) {
              var o = n.oneTimePasswords[a],
                i = {},
                s = dec(o.encryptedOneTimePassword, p),
                u = AES.hex2bin(s),
                d = make_lp_hash(r, u),
                c = make_lp_key(r, u);
              (o.oneTimePasswordHash = d),
                (o.randomEncryptedKey = enc(AES.bin2hex(p), c)),
                (i.encryptedOneTimePassword = enc(s, l)),
                (i.randomEncryptedKey = enc(AES.bin2hex(l), c)),
                (i.oneTimePasswordHash = d),
                e.push(i),
                R.push(o);
            }
          } catch (e) {
            return void ("function" == typeof _ && _(n, t, "OTP Encryption failed"));
          }
          G(e, f, y, _);
        }
      },
      error: function (e, n) {
        "function" == typeof _ && _(e, n, "GET one time passwords failed");
      }
    });
  }
  function X(e) {
    0 !== R.length
      ? G(R, x.oldpwhash, e, function () {
          "function" == typeof e && e();
        })
      : "function" == typeof e && e();
  }
  function G(e, n, t, r) {
    "" === n && t();
    var e = JSON.stringify({ oneTimePasswords: e, masterPasswordHash: n }),
      n = A || token,
      a;
    F()({
      url: m + "lmiapi/one-time-password/update",
      type: "POST",
      contentType: "application/json",
      headers: { "X-CSRF-TOKEN": n },
      data: e,
      dataType: "json",
      success: t,
      error: function (e, n) {
        "function" == typeof r && r(e, n, "POST new one time passwords failed");
      }
    });
  }
  function U(a, o, i, s) {
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
          var r = dec(n.userData, a),
            e = enc(r, o);
        } catch (e) {
          return void ("function" == typeof s && s(n, t, "Encryption failed"));
        }
        d(e, i, s);
      },
      error: function (e, n) {
        e.status && 404 == e.status ? "function" == typeof i && i() : "function" == typeof s && s(e, n, "GET new LP cloud backup failed");
      }
    });
  }
  function J(e) {
    u
      ? d(u, e, function () {
          "function" == typeof e && e();
        })
      : "function" == typeof e && e();
  }
  function d(e, n, t) {
    var e = JSON.stringify({ userData: e }),
      r = A || token,
      a;
    F()({
      url: m + "lmiapi/authenticator/backup",
      type: "POST",
      contentType: "application/json",
      headers: { "X-CSRF-TOKEN": r },
      data: e,
      dataType: "json",
      success: n,
      error: function (e, n) {
        "function" == typeof t && t(e, n, "POST new LP cloud backup failed");
      }
    });
  }
  function B() {
    var e,
      n = x.callback;
    "function" == typeof n && n(2, !1, !1, null);
  }
  function W() {
    try {
      var e, n;
      if (
        (2 == g &&
          ((h = x.reencrypt.split("\n")),
          "number" == typeof g_target_key_iterations &&
            ((C = g_target_key_iterations), "undefined" != typeof g_key_iterations) &&
            g_key_iterations != g_target_key_iterations &&
            (x.iterationschange = "1"),
          (T = x.newkey || make_lp_key_iterations(fix_username(x.newemail), x.newpassword, C)),
          (k += h[0] + "\n"),
          "" != (e = h[1])) &&
          ("" == (n = rsa_extract_privatekey(e, x.oldkey)) && "" != x.oldkey1 && (n = rsa_extract_privatekey(e, x.oldkey1)),
          (H = "" == n ? ((w = ""), "failed") : ((w = rsa_encrypt_privatekey(n, T)), (n = null), "success")),
          (v = SHA256(AES.bin2hex(T).toUpperCase())),
          (b = SHA256(w))),
        void 0 === h.length)
      )
        x.callback(2, !1, !1, "F2 : internal error");
      else {
        var t,
          r,
          a = !1,
          o = F();
        try {
          enc(" ", T) ? (a = !0) : logger.error("encrypting space failed", {});
        } catch (e) {
          logger.error("space encryption exception", { error: e });
        }
        for (var i = g + 3, s = 0, u, d; g < h.length && g < i; ++g) {
          var c,
            p = h[g].replace(/\r\n|\r|\n/g, "").split("\t");
          if ("endmarker" == (l = p[0])) x.foundendmarker = !0;
          else {
            var f = void 0 !== p.length && 2 <= p.length && "0" == p[1];
            if (void 0 !== l.length && l.length) {
              var y = null,
                _;
              if (a)
                try {
                  (t = dec(l, x.oldkey)),
                    (r = enc(t, T)),
                    t !== dec(r, T) &&
                      ((S += "enc: " + l + " decrypted value does not match reencryption and decryption with new key"), P++, s++);
                } catch (e) {
                  (y = e), logger.error("reencrypt exception", {});
                }
              (a && null == y && AES.ok(r) && 0 != r.length && null != t && void 0 !== t.length && 0 != t.length) ||
                (f ||
                  (a
                    ? (null != (t = dec(l, T)) && void 0 !== t.length && 0 != t.length) ||
                      (S += "enc: " + l + " decrypted:  reencrypted to: " + r + (null == y ? "" : " : EXCEPTION_A!") + "\n")
                    : ((_ = void 0 === T.length ? "undefined" : T.length),
                      (S += "encrypting <space> using m_newkey (m_newkey.length=" + _ + ") resulted in EXCEPTION_B!\n")),
                  P++),
                (r = a ? l : "")),
                f || E++,
                (k += l + ":" + r + "\n"),
                "function" == typeof x.status && x.status(1, (g - 1) / (h.length - 2));
            }
          }
        }
        s && logger.error("reencrypt error: different output", { reDecyptionIssues: s }),
          g < h.length
            ? setTimeout(function () {
                W();
              }, 0)
            : x.foundendmarker
            ? ((void 0 !== I && (I || 0 === I)) || (I = 10),
              (u = A || token),
              "" !== S && logger.error("m_errors: " + S, { m_errors: S }),
              "" != S && (E / 100) * I <= P
                ? ((d = {
                    from: "passwordChange",
                    errors: S,
                    username: x.oldemail,
                    private_key_status: H,
                    total: h.length - 2,
                    mandatory_total: E,
                    mandatory_failed: P,
                    super_admin_reset: j ? "yes" : "no"
                  }),
                  o({
                    url: m + "debug.php",
                    data: d,
                    type: "POST",
                    timeout: 6e5,
                    headers: { "X-CSRF-TOKEN": u },
                    success: function (e) {},
                    error: function (e, n) {}
                  }),
                  "function" == typeof x.callback && x.callback(3, null, null, "E : " + S))
                : (logger.info("Re encryption finished.", {}),
                  U(
                    x.oldkey,
                    T,
                    function () {
                      x.iterationschange ? D(x.oldkey, T, x.oldpwhash, M, B) : M();
                    },
                    B
                  )))
            : "function" == typeof x.callback && x.callback(2, !1, !1, "D : Data download not complete");
      }
    } catch (e) {
      x.callback(2, !1, !1, "F : " + e.message);
    }
  }
  (this.hashMigration = function (t, r, a, o, i, e, n, s, u, d) {
    var c, p, l;
    void 0 === d && (d = ""),
      (K = N = j = !1),
      (m = e),
      (A = n),
      (C = s),
      (I = 0),
      "function" != typeof u && (u = function () {}),
      t === o
        ? u(!1, "Hash migration already happened? Maybe stale extension data")
        : L(
            a,
            r,
            a,
            !(c = function (e, n, t, r) {
              0 === e ? u(!0) : u(!1, r);
            }),
            function (e) {
              var n;
              "string" != typeof e
                ? u(!1, "Invalid response")
                : "usernametaken" == e
                ? u(!1, "Username taken or deleted during hash migration")
                : ((x = {
                    oldkey: t,
                    oldkey1: d,
                    oldpwhash: r,
                    oldemail: a,
                    newemail: a,
                    newkey: o,
                    newpwhash: i,
                    callback: c,
                    reencrypt: e,
                    foundendmarker: !1,
                    iterationschange: "1",
                    hashmigration: "1"
                  }),
                  setTimeout(function () {
                    W();
                  }, 0));
            },
            function () {
              u(!1, "Error retrieving accounts data during hash migration");
            }
          );
  }),
    (this.recoveryChangePassword = function (e, n, t, r, a, o, i, s) {
      var u = "",
        d,
        c = (N = j = !(K = !0));
      _(e, n, t, t, r, !1, a, "", o, null, i, s);
    }),
    (this.superAdminPasswordReset = function (e, n, t, r, a, o, i, s) {
      var u = "",
        d,
        c = "",
        p = (N = !(j = !(K = !1)));
      _(e, "", n, t, r, !1, a, "", o, null, i, s);
    }),
    (this.setInitialPassword = function (e, n, t, r, a, o, i, s) {
      var u = "",
        d,
        c = "",
        p = !(N = !(j = K = !1));
      _(e, "", n, t, r, !1, a, "", o, null, i, s);
    }),
    (this.changepw = function (e, n, t, r, a, o, i, s, u, d, c, p, l, f, y) {
      (N = j = K = !1), _(e, n, t, r, a, o, i, s, u, d, c, p, l, f, y);
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
              B(), t && t(e, n, "Cannot GET sharing keys");
            }
          });
    },
    t = function (t, r) {
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
              404 === e.status ? t() : (B(), r && r(e, n, "Request for emergency access keys failed"));
            }
          }));
    };
  function M() {
    logger.info("Update data to server.", {});
    var e = x.newpwhash || make_lp_hash_iterations(T, x.newpassword, C),
      r = {
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
      a;
    if (
      (x.iterationschange && (r.iterationschange = x.iterationschange),
      x.hashmigration && ((r.hashmigration = x.hashmigration), (r.ks = !0)),
      K && (r.is_recovery = "1"),
      j && ((r.superAdminReset = "1"), g_converttosftargetuid))
    ) {
      var n = make_lp_key_iterations(x.newemail, x.newpassword, C),
        e = make_lp_hash_iterations(n, x.newpassword, C);
      if (
        ((r.converttosfbythissharename = lpenc("Shared-SF from deleted " + x.newemail + " " + g_recovery_uid, n)),
        (r.converttosfbythispasswordhash = e),
        "undefined" != typeof g_sasf_uids && "undefined" != typeof g_sasf_pubkeys && "undefined" != typeof g_sasf_uids_cnt)
      ) {
        for (var t = 0; t < g_sasf_uids_cnt; t++) {
          var o = new RSAKey(),
            i =
              (parse_public_key(o, g_sasf_pubkeys[t]) ||
                lpmessagebox(gs("An Error Occurred"), gs("We are sorry, an error occurred - Cannot parse public key.")),
              o.encrypt(AES.bin2hex(n)));
          (r["adminsharekey" + t] = i), (r["adminuid" + t] = g_sasf_uids[t]);
        }
        r.adminuidcnt = g_sasf_uids_cnt;
      }
      var e = new RSAKey();
      parse_public_key(e, g_targetuid_pubkey)
        ? ((r.converttosfbythistargetuid = g_converttosftargetuid), (r.converttosfbythistargetuidsharekey = e.encrypt(AES.bin2hex(n))))
        : lpmessagebox(gs("An Error Occurred"), gs("We are sorry, an error occurred - Cannot parse public key."));
    }
    if (
      (N && (r.setInitialPassword = "1"),
      void 0 !== x.oldpwhash && null != x.oldpwhash && "" != x.oldpwhash && ((r.wxusername = x.oldemail), (r.wxhash = x.oldpwhash)),
      void 0 !== x.ks && x.ks && (r.ks = "true"),
      void 0 !== O && null != O && (r.password_hint = O),
      "undefined" != typeof g_su_pubkeys && null != g_su_pubkeys && g_su_pubkeys.length)
    ) {
      for (var s = !1, a = 0, u = 0, o; u < g_su_pubkeys.length; u++) {
        "" != g_su_pubkeys[u] &&
          ((o = new RSAKey()), parse_public_key(o, g_su_pubkeys[u])) &&
          ((r["sukey" + a] = o.encrypt(AES.bin2hex(T))), (r["suuid" + a] = g_su_uids[u]), (s = !0), a++);
      }
      if (((r.sukeycnt = a), 0 == s && "function" == typeof x.callback))
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
      ((a = 0),
      g_lu_pubkeys.forEach(function (e, n) {
        var t;
        e &&
          ((t = new RSAKey()), parse_public_key(t, e)) &&
          ((r["lukey" + a] = t.encrypt(AES.bin2hex(T))), (r["luuid" + a] = g_lu_uids[n]), a++);
      }),
      (r.lukeycnt = a)),
      "undefined" != typeof g_recovery_uid && (r.recovery_uid = g_recovery_uid),
      "undefined" != typeof g_changeiterations && 1 == g_changeiterations && (r.iterationschange = "1"),
      "undefined" == typeof g_sapr_pwd ||
        "undefined" == typeof g_sapr_newpwd ||
        g_converttosftargetuid ||
        ("undefined" != typeof g_defederate && 1 == g_defederate
          ? ((r.to_be_defederated = 1), (r.defed_pwdlastset = g_sapr_lastPwdSet))
          : ((r.to_be_federated = 1),
            (r.fed_keyALP = g_sapr_keyALP),
            (r.fed_keyLP = g_sapr_keyLP),
            (r.fed_keyLPCheckHash = g_sapr_keyLPCheckHash),
            (r.fed_fragmentId = g_sapr_fragmentId),
            (r.fed_pwdlastset = g_sapr_lastPwdSet))),
      document.URL.includes("familiesinvite=1") && (r.familiesinvite = 1),
      "undefined" != typeof fromcid && (r.cid = fromcid),
      "undefined" != typeof g_oid_fragmentId && (r.fedOId_fragmentId = g_oid_fragmentId),
      "undefined" != typeof g_encryptedK2 &&
        "undefined" != typeof g_oidcresponse &&
        void 0 !== g_oidcresponse.id_token &&
        ((r.fedOId_encryptedKC2 = g_encryptedK2), (r.fedOId_idToken = g_oidcresponse.id_token)),
      "undefined" != typeof g_isFederatedEmailChng && (r.fedEmailChange = g_isFederatedEmailChng);
    var d = x.callback,
      c = T,
      p = x.newemail,
      l = x.status,
      f =
        ((x = new Array()),
        (h = new Array()),
        (g = 2),
        (S = T = k = ""),
        (E = P = 0),
        "function" == typeof l && l(2, 0),
        generateOtpData(p, c)),
      y = F(),
      _ =
        ((f.lmiapiData.masterPasswordHash = r.wxhash),
        y({
          url: m + "lmiapi/one-time-password/add",
          type: "POST",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify(f.lmiapiData),
          headers: { "X-CSRF-TOKEN": r.token },
          success: function () {
            localStorage.setItem(SHA256(p) + "_otp", AES.bin2hex(f.OTP)), _(f.lmiapiData.oneTimePasswordHash);
          },
          error: function () {
            _();
          }
        }),
        function (e) {
          e && (r.not_to_be_deleted_otp_hash = e),
            y({
              url: m + "settings.php",
              data: r,
              type: "POST",
              timeout: 6e5,
              success: function (e) {
                "function" == typeof l && l(2, 1),
                  -1 == e.indexOf("pwchangeok")
                    ? 0 <= e.indexOf("reusepass")
                      ? J(function () {
                          X(function () {
                            d(2, !1, !1, "H : " + e.split("\n")[1]);
                          });
                        })
                      : 0 == e.indexOf("error\n")
                      ? J(function () {
                          X(function () {
                            d(2, !1, !1, e.split("\n")[1]);
                          });
                        })
                      : J(function () {
                          X(function () {
                            d(2, !1, !1, "I : An error occured");
                          });
                        })
                    : "function" == typeof d && d(0, c, p);
              },
              error: function (e, n, t) {
                J(function () {
                  X(function () {
                    "function" == typeof d && d(2, !1, !1, "J : " + n + " suberror=" + t);
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
