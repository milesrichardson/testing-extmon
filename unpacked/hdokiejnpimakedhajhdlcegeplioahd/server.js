var g_iterpw = null,
  jj = "",
  allowmultifactortrust = !0,
  hidemultifactordisable = !1,
  g_authSessionId = null,
  g_fragmentIdFromAlp = null,
  g_calculatedFragmentId = null,
  g_2fa_inprocess = !1,
  autoLogin_inProgress = !1,
  loginCheckFinished = !1;
function getIconCallback() {
  "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA() && checkBigIconsVersion && checkBigIconsVersion();
}
function lplogincheck2(n, i, l, g) {
  console_log("server.js : lplogincheck fromwebsite=" + n + " sessionid=" + i),
    yubikey_cleardata(),
    googleauth_cleardata(),
    outofband_cleardata(),
    securityquestion_cleardata(),
    sesame_cleardata(),
    grid_cleardata(),
    multifactor_cleardata(),
    "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()
      ? g_local_key && loginoffline(!1, "logincheck")
      : loginoffline(!0, "logincheck"),
    console_log("logincheck getting uuid"),
    getuuid(function (e) {
      console_log("logincheck got uuid");
      var t = "canexpire=1&cansetuuid=1&method=" + encodeURIComponent(get_method()) + "&version=" + lpversion,
        a =
          ((t += get_devicetype_param()),
          i && (t += "&sessionid=" + LP.en(i)),
          l && (t += "&wxusername=" + LP.en(l)),
          g && (t += "&wxhash=" + LP.en(g)),
          isDogfood() && (t += "&dogfood=1"),
          (g_lastpoll = lastlogin = new Date().getTime()),
          reduxApp.getPreference("logoffWhenCloseBrowser") && 0 === reduxApp.getPreference("logoffWhenCloseBrowserVal") ? "1" : "0"),
        a = ((t += "&sessonly=" + en(a)), localStorage_getItem("measure_logoffWhenCloseBrowser")),
        a = a ? JSON.parse(a) : null,
        r = {
          enabled: reduxApp.getState().settings.extensionPreferences.logoffWhenCloseBrowser,
          timeout: reduxApp.getPreference("logoffWhenCloseBrowserVal")
        };
      if (
        ((a && a.enabled === r.enabled && a.timeout === r.timeout) ||
          (sendLpImprove("ExtensionLogoffWhenCloseBrowser", r), localStorage_setItem("measure_logoffWhenCloseBrowser", JSON.stringify(r))),
        console_log("logincheck getting uuid"),
        console_log("logincheck got uuid"),
        "object" == typeof e)
      ) {
        var s = 0,
          o;
        for (o in e) (t += "&uuid" + s + "=" + en(e[o])), ++s;
      } else t += "&uuid=" + en(e);
      sesame_setdata("logincheckpostdata", t),
        lpdbg("login", "Making login check request"),
        localStorage &&
          localStorage.getItem("login_serverHostOverride") &&
          (console_log("server.js : using server host override: " + localStorage.getItem("login_serverHostOverride")),
          (base_url = "https://" + localStorage.getItem("login_serverHostOverride") + "/")),
        lpMakeRequest(base_url + "login_check.php", t, lpLoginCheckResponse, lpLoginCheckError, n);
    }, g_username_hash);
}
function lplogincheck(e, t, a, r) {
  "undefined" != typeof g_is_new_install && g_is_new_install
    ? ((g_is_new_install = !1),
      (autoLogin_inProgress = !0),
      reduxApp.autoLogin([e, t, a, r]),
      sendLpEvent("lastpass_extension_installed", { dataSource: "Ext" }))
    : lplogincheck2(e, t, a, r);
}
function setFragmentId(e, t) {
  (g_fragmentIdFromAlp = e), (g_calculatedFragmentId = t);
}
function LP_do_login(s, a, o, t, r, n, e, i, l, g) {
  (g_2fa_inprocess = !1), (g_authSessionId = g);
  var u = (s = fix_username(s)),
    d,
    c,
    _,
    p,
    e;
  function f() {
    Topics.get(Topics.MANUAL_LOGIN_FINISHED).unsubscribe(f), l && l();
  }
  function m() {
    Topics.get(Topics.LOGIN_FINISHED).unsubscribe(m), (c = a = s = null);
  }
  function h(e) {
    getBG().make_lp_key_hash_iterations(e, a, get_key_iterations(s), function (e, t) {
      localStorage_setItem("LPMPU", p),
        protect_data(t, !0, null, function (e) {
          localStorage_setItem(p + "LPMPH", e);
        });
    });
  }
  e
    ? (l && Topics.get(Topics.MANUAL_LOGIN_FINISHED).subscribe(f),
      Topics.get(Topics.LOGIN_FINISHED).subscribe(m),
      lppassusernamehash && !lploggedin && lpnp_notify("login", { data0: s, data1: a }),
      r ||
        ((d = opendb()),
        createSavedLoginsTable(d),
        d &&
          void 0 !== o &&
          null != o &&
          ((c = t ? a : ""),
          protect_data(c, !1, u, function (t) {
            var a, r;
            o && check_email(u)
              ? ((a = t != c ? 1 : 0) || "" == c || ((t = enc(t, AES.hex2bin(SHA256(s)))), (a = 2)),
                console_log("server.js : saving login credentials"),
                (r = new Date().getTime()),
                g_indexeddb
                  ? d
                      .transaction("LastPassSavedLogins2", "readwrite")
                      .objectStore("LastPassSavedLogins2")
                      .put({ username: u, password: t, last_login: r, protected: a })
                  : d.transaction(function (e) {
                      e.executeSql(
                        "REPLACE INTO LastPassSavedLogins2 (username, password, last_login, protected) VALUES(?, ?, ?, ?)",
                        [u, t, r, a],
                        function (e, t) {},
                        function (e, t) {
                          console_log(t);
                        }
                      );
                    }))
              : g_indexeddb
              ? d.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").delete(s)
              : d.transaction(function (e) {
                  e.executeSql(
                    "DELETE FROM LastPassSavedLogins2 WHERE username=?",
                    [s],
                    function (e, t) {},
                    function (e, t) {
                      console_log(t);
                    }
                  );
                });
          })),
        void 0 !== o && null != o && reduxApp.setExtensionPreferences({ rememberemail: !!o, rememberpassword: !!t }),
        void 0 !== n && reduxApp.setExtensionPreferences({ showvault: !!n }),
        startIdleChecker()),
      yubikey_cleardata(),
      googleauth_cleardata(),
      outofband_cleardata(),
      securityquestion_cleardata(),
      sesame_cleardata(),
      grid_cleardata(),
      r || multifactor_cleardata(),
      (_ = get_key_iterations(s)),
      (g_local_key = e || make_lp_key_iterations(s, a, _)),
      "string" == typeof a &&
        a.length &&
        (reduxApp.getState().settings.features.password_strength_hardening
          ? zxcvbnts.calculatePasswordStrength(s, a, !1)
          : calculateMasterStrength(s, a)),
      i ? ((g_local_hash = lphash = i), (i = null)) : (g_local_hash = lphash = make_lp_hash_iterations(g_local_key, a, _)),
      (g_local_key_hex = AES.bin2hex(g_local_key)),
      (g_local_key_hash = SHA256(g_local_key)),
      (g_username = lpusername = s),
      (g_username_hash = lpusername_hash = SHA256(g_username)),
      (g_retryusername = g_username),
      (p = SHA256(s)),
      null == (e = localStorage_getItem(p + "LPMPS"))
        ? (h((e = get_random(1e4, 9999999).toString(36) + get_random(1e4, 9999999).toString(36))),
          protect_data(e, !0, null, function (e) {
            localStorage_setItem(p + "LPMPS", e);
          }))
        : unprotect_data(e, !0, h),
      "true" != localStorage_getItem(g_username_hash + "_mfaEnabled")
        ? loginoffline(!0, "pluginlogin")
        : setTimeout(function () {
            loginoffline(!1, "pluginlogin");
          }, 5e3),
      console_log("login getting uuid"),
      getuuid(function (e) {
        console_log("login got uuid");
        var t =
            "canexpire=1&cansetuuid=1&xml=2&username=" +
            en(s) +
            "&method=" +
            encodeURIComponent(get_method()) +
            "&hash=" +
            en(g_local_hash) +
            "&version=" +
            lpversion,
          e =
            ((t =
              (t = (t = (t += get_devicetype_param()) + ("&encrypted_username=" + en(encecb(g_username)))) + ("&uuid=" + en(e))) +
              ("&lang=" + en(reduxApp.getPreference("language")))),
            get_key_iterations(s)),
          e,
          e =
            ((t += "&iterations=" + en(e)),
            "" != e &&
              1 < parseInt(e) &&
              ((t += e = checkNeedsPBKDF2v2(s, a)), "" != e) &&
              "undefined" != typeof g_oldpbkdf2 &&
              1 == g_oldpbkdf2 &&
              (t += "&fallback=1"),
            reduxApp.getPreference("logoffWhenCloseBrowser") && 0 === reduxApp.getPreference("logoffWhenCloseBrowserVal") ? "1" : "0");
        (t += "&sessonly=" + en(e)),
          sesame_cleardata(),
          sesame_setdata("postdata", t),
          sesame_setdata("from", "login"),
          yubikey_cleardata(),
          yubikey_setdata("postdata", t),
          yubikey_setdata("from", "login"),
          (g_iterpw = enc(a, AES.hex2bin(SHA256(s)))),
          googleauth_cleardata(),
          googleauth_setdata("postdata", t),
          googleauth_setdata("from", "login"),
          outofband_cleardata(),
          outofband_setdata("postdata", t),
          outofband_setdata("from", "login"),
          securityquestion_cleardata(),
          securityquestion_setdata("postdata", t),
          securityquestion_setdata("from", "login"),
          grid_cleardata(),
          grid_setdata("postdata", t),
          grid_setdata("from", "login"),
          r || multifactor_cleardata(),
          multifactor_setdata("postdata", t),
          multifactor_setdata("from", "login"),
          (t = (t += "&otp=&sesameotp=") + "&multifactorresponse=&authsessionid=" + g),
          g_fragmentIdFromAlp && (t += "&alpfragmentid=" + encodeURIComponent(g_fragmentIdFromAlp)),
          g_calculatedFragmentId && (t += "&calculatedfragmentid=" + encodeURIComponent(g_calculatedFragmentId)),
          GetOTPHash(t);
      }, g_username_hash))
    : make_lp_key_iterations(s, a, get_key_iterations(s), function (e) {
        LP_do_login(s, a, o, t, r, n, e, i, l, g);
      });
}
function loginoffline(s, o, n) {
  g_2fa_inprocess ||
    (console_log("server.js : loginoffline from=" + o + " offline_before_online=" + s),
    null == g_local_key || null == g_username || null == g_username_hash
      ? "frompipes" != o &&
        get_saved_logins(function (e) {
          var r = "",
            t = "",
            a = function (t) {
              var a;
              (!LPISLOC || !LPISUPEK) &&
                0 < r.length &&
                0 < t.length &&
                ((g_username = lpusername = r.toLowerCase().replace(/\s*/g, "")),
                (g_username_hash = lpusername_hash = SHA256(r)),
                (a = get_key_iterations(g_username)),
                make_lp_key_iterations(g_username, t, a, function (e) {
                  (g_local_key = e),
                    (g_local_hash = lphash = make_lp_hash_iterations(g_local_key, t, a)),
                    (g_local_key_hex = AES.bin2hex(g_local_key)),
                    (g_local_key_hash = SHA256(g_local_key)),
                    loginoffline1(s, o, !1, n);
                }));
            };
          if (0 < e.length) {
            if (((r = e[0].username), (t = e[0].password), 1 == e[0].protected)) return void unprotect_data(t, !1, a);
            if (2 == e[0].protected) return void a(dec(t, AES.hex2bin(SHA256(r))));
            a(t);
          }
          lpdbg("login", "Trying to log in offline1: skipping because we dont have the user's key");
        })
      : loginoffline1(s, o, !1, n));
}
function read_key_from_file(t) {
  have_binary_function("read_file")
    ? call_binary_function("read_file", db_prepend(g_username_hash + "_lpall.slps"), function (e) {
        "string" != typeof e ? t("") : unprotect_data(e, !0, t);
      })
    : t("");
}
function read_accts_from_file(t) {
  have_binary_function("read_file")
    ? call_binary_function("read_file", db_prepend(g_username_hash + "_lps.act.sxml"), function (e) {
        "string" != typeof e
          ? t("")
          : unprotect_data(e, !0, function (e) {
              "iterationserror" == (e = checkIterationsInDataFile(e))
                ? (lpdbg("login", "Key iterations mismatch"), t(""))
                : ((e = dec(e)), t(e));
            });
      })
    : t("");
}
function loginoffline1(i, l, g, u) {
  var e, r, t, a, e, r, a;
  console_log("server.js : loginoffline1 offline_before_online=" + i + " from=" + l),
    i
      ? g_loggedinoffline ||
        (console_log("server.js : DB:opening database"),
        (e = opendb()),
        console_log("server.js : DB:opened database db=" + e),
        createDataTable(e),
        e
          ? (console_log("server.js : DB:created database"),
            (r = function (e, t) {
              var a, r, s, o, n;
              console_log("server.js : DB:inside transaction A"),
                2 != t.rows.length
                  ? (console_log("server.js : DB:inside transaction B"),
                    LPISLOC &&
                      (!LPISUPEK || g || "" == g_username || AES.hex2bin(SHA256(g_username + "")) == g_local_key
                        ? lpshowError("LoginError", !1, !0)
                        : ((g_pwdeckey = g_local_key),
                          lpWriteKeyFile(),
                          (g_local_accts_version = 0),
                          LPISUPEK &&
                            ((g_prompts.login_site_prompt = !0),
                            (g_prompts.edit_site_prompt = !0),
                            (g_prompts.edit_sn_prompt = !0),
                            (g_prompts.view_pw_prompt = !0),
                            (g_prompts.view_ff_prompt = !0),
                            (g_prompts.switch_identity_prompt = !0),
                            (g_prompts.switch_f_prompt = !0),
                            (g_prompts.multifactor_reprompt = !0)),
                          rewritelocalfile(),
                          loginoffline1(i, l, !0, u))),
                    console_log("server.js : DB:inside transaction C"),
                    lpdbg("login", "Trying to log in offline : offline before online failed : could not read keyfile or accts"))
                  : (console_log("server.js : DB:inside transaction D"),
                    (a = "key" == t.rows.item(0).type ? 0 : 1),
                    (s = !1),
                    2 == (o = (r = t.rows.item(a).data).split("\n")).length &&
                      "lastpass rocks" == dec(o[1], g_local_key) &&
                      (console_log("server.js : DB:inside transaction E"), (s = !0)),
                    s
                      ? (console_log("server.js : DB:inside transaction G"),
                        (a = "accts" == t.rows.item(0).type ? 0 : 1),
                        "iterationserror" == (r = checkIterationsInDataFile((r = (r = t.rows.item(a).data).substring(0, 220))))
                          ? lpdbg("login", "Key iterations mismatch, bailing on loginoffline")
                          : 0 <= r.indexOf("type=sesameoffline\ndata=") ||
                            0 <= r.indexOf("type=yubikeyoffline\ndata=") ||
                            0 <= r.indexOf("type=trueapioffline\ndata=") ||
                            0 <= r.indexOf("type=omnikeyoffline\ndata=")
                          ? (console_log("server.js : DB:inside transaction H"),
                            lpdbg("login", "Data is encoded with multifactor key, bailing on loginoffline"))
                          : (console_log("server.js : DB:inside transaction I"),
                            offlineloginsuccessful(l, !0, u),
                            lpdbg("login", "Trying to log in offline : offline before online successful")))
                      : (console_log("server.js : DB:inside transaction F"),
                        LPISLOC && lpshowError("LoginError", !1, !0),
                        lpdbg("login", "Trying to log in offline: skipping because we have an incorrect user's key")));
            }),
            (t = function (e, t) {
              lpdbg("login", "Trying to log in offline3: skipping because we dont have the user's key");
            }),
            LPISLOC
              ? read_key_from_file(function (a) {
                  read_accts_from_file(function (t) {
                    r(
                      tx,
                      "" != a || "" != t
                        ? {
                            rows: {
                              length: 2,
                              item: function (e) {
                                return 0 == e ? { type: "key", data: a } : { type: "accts", data: t };
                              }
                            }
                          }
                        : { rows: { length: 0 } }
                    );
                  });
                })
              : g_indexeddb
              ? ((a = {
                  rows: {
                    item: function (e) {
                      return this[e];
                    },
                    length: 0
                  }
                }),
                (e
                  .transaction("LastPassData", "readonly")
                  .objectStore("LastPassData")
                  .index("username_hash")
                  .openCursor(IDBKeyRange.only(db_prepend(g_username_hash))).onsuccess = function (e) {
                  var e = e.target.result;
                  e
                    ? (("key" != e.value.type && "accts" != e.value.type) || ((a.rows[a.rows.length] = e.value), a.rows.length++),
                      e.continue())
                    : r(null, a);
                }))
              : e.transaction(function (e) {
                  e.executeSql(
                    "SELECT * FROM LastPassData WHERE username_hash=? AND (type=? OR type=?)",
                    [db_prepend(g_username_hash), "key", "accts"],
                    r,
                    t
                  );
                }))
          : console_log("server.js : DB:failed to create database db=" + e))
      : g_loggedinoffline ||
        ((e = opendb()),
        createDataTable(e),
        e &&
          ((r = function (e, t) {
            var t, t, a;
            g_loggedinonline
              ? lpdbg("login", "User is already logged in during online when logging in offline")
              : 1 != t.rows.length
              ? lpdbg("login", "Trying to log in offline : offline before online failed : could not read accts")
              : 0 <= (t = (t = t.rows.item(0).data).substring(0, 220)).indexOf("type=sesameoffline\ndata=")
              ? (lpdbg("sesame", "Logging in offline and existing file is protected by sesameoffline => asking user for offline password"),
                sesame_setdata("offline", 1),
                sesame_getotp(null))
              : 0 <= t.indexOf("type=trueapioffline\ndata=") || 0 <= t.indexOf("type=omnikeyoffline\ndata=")
              ? (lpdbg(
                  "multifactor",
                  "Logging in offline and existing file is protected by trueapioffline => asking user for offline password"
                ),
                (a = 0 <= t.indexOf("type=trueapioffline\ndata=") ? "trueapi" : "omnikey"),
                multifactor_setdata("offline", 1),
                multifactor_setdata("type", a),
                multifactor_getresponse(g_username))
              : 0 <= t.indexOf("type=yubikeyoffline\ndata=")
              ? (yubikey_setdata("offline", 1), yubikey_getotp(null))
              : (offlineloginsuccessful(l, !1, u), lpdbg("login", "Trying to log in offline : offline after online successful"));
          }),
          g_indexeddb
            ? ((a = {
                rows: {
                  item: function (e) {
                    return this[e];
                  },
                  length: 0
                }
              }),
              (e
                .transaction("LastPassData", "readonly")
                .objectStore("LastPassData")
                .index("username_hash")
                .openCursor(IDBKeyRange.only(db_prepend(g_username_hash))).onsuccess = function (e) {
                var e = e.target.result;
                e ? ("accts" == e.value.type && ((a.rows[a.rows.length] = e.value), a.rows.length++), e.continue()) : r(null, a);
              }))
            : e.transaction(function (e) {
                e.executeSql('SELECT * FROM LastPassData WHERE username_hash=? AND type="accts"', [db_prepend(g_username_hash)], r);
              })));
}
function offlineloginsuccessful(e, t, a) {
  var r;
  console_log("server.js : offlineloginsuccessful beforeonlineattempt=" + t + " from=" + e),
    LPISLOC &&
      "pluginlogin" == e &&
      g_manual_login &&
      (reduxApp.getPreference("showvault") || g_showvaultalways) &&
      (console_log("server.js : offlineloginsuccessful openvault offline version!"), openvault(1)),
    console_log("server.js : offlineloginsuccessful!"),
    handleLanguageOffline(getLanguage()),
    g_loggedinonline || (g_loggedinoffline = !0),
    (lploggedin = !0),
    lpReadAllPrefs(function () {
      drawIconAtRotation(0);
    }),
    loggedIn("pluginlogin" == e, !0),
    a && a(),
    console_log("RSA : offlineloginsuccessful : calling readrsaprivatekeyhexfromdb()"),
    readrsaprivatekeyhexfromdb(),
    "offline" != e && (console_log("server.js : offlineloginsuccessful : from " + e + " so calling get_accts_local!"), get_accts_local(!0)),
    g_notifytimerid && (clearTimeout(g_notifytimerid), (g_notifytimerid = null));
  var s,
    o =
      ((g_notifytimerid = setTimeout(
        function () {
          console_log("server.js : notifyoffline from=" + e);
        },
        t ? 3e4 : 0
      )),
      g_retryonlinetimerid && (clearTimeout(g_retryonlinetimerid), (g_retryonlinetimerid = null)),
      3e4);
  g_retryonlinetimerid = setTimeout(function () {
    retryonlinelogin(o);
  }, o);
}
function retryonlinelogin(e) {
  var t, a;
  console_log("server.js : retryonlinelogin delayms=" + e),
    lploggedin &&
      g_loggedinoffline &&
      (lpdbg("login", "We're still logged in offline => retrying to login online.  retryinterval=" + e / 6e4 + " minutes"),
      lplogincheck("retryonline"),
      12e5 < (a = 2 * e) && (a = 12e5),
      setTimeout(function () {
        retryonlinelogin(a);
      }, a));
}
function lpTurnOffIcon() {
  (lploggedin = !1), set_badge_text(""), drawIconAtRotation(0);
}
function lpLoginCheckResponse(e, t, a) {
  console_log("server.js : lpLoginCheckResponse fromwebsite=" + a);
  try {
    if (
      !e ||
      4 != e.readyState ||
      "function" != typeof t ||
      (200 == e.status && null != e.responseXML && null != e.responseXML.documentElement)
    ) {
      if (4 == e.readyState && 200 == e.status && null != e.responseXML && null != e.responseXML.documentElement) {
        var r,
          s = e.responseXML.documentElement.getElementsByTagName("ok");
        if (0 < s.length) {
          var o = s[0].getAttribute("lpusername");
          if (((g_username = lpusername = o), (g_username_hash = SHA256(g_username)), "retryonline" != a && 1 != a))
            return void lpReadAllPrefs(function () {
              lpLoginCheckResponseStep2(e, o, a), drawIconAtRotation(0);
            });
        }
      }
      lpLoginResponse_win(e, a, !0);
    } else t();
  } catch (e) {
    L("logincheckresponse: " + e);
  }
}
function lpLoginCheckResponseStep2(e, t, a) {
  console_log("server.js : lpLoginCheckResponseStep2 fromwebsite=" + a);
  try {
    var r,
      s = e.responseXML.documentElement.getElementsByTagName("ok"),
      o = (1 == s[0].getAttribute("trustexpired") && clearuuid(t), s[0].hasAttribute("trustuuid") ? s[0].getAttribute("trustuuid") : ""),
      n =
        (o && "" != o && setuuid(o, g_username_hash),
        lpdbg("login", "lpLoginCheckResponseStep2"),
        null != s[0].getAttribute("sesamepassword") && "" != s[0].getAttribute("sesamepassword")),
      i = null != s[0].getAttribute("yubikeyhash") && "" != s[0].getAttribute("yubikeyhash"),
      l = null != s[0].getAttribute("googleauthenabled") && "1" == s[0].getAttribute("googleauthenabled"),
      g = null != s[0].getAttribute("gridenabled") && "" != s[0].getAttribute("gridenabled"),
      u = null != s[0].getAttribute("multifactorenabled") && "" != s[0].getAttribute("multifactorenabled"),
      d = null != s[0].getAttribute("sesameotpok") && "" != s[0].getAttribute("sesameotpok"),
      c = null != s[0].getAttribute("yubikeyotpok") && "" != s[0].getAttribute("yubikeyotpok"),
      _ = null != s[0].getAttribute("googleauthotpok") && "" != s[0].getAttribute("googleauthotpok"),
      p = null != s[0].getAttribute("gridresponseok") && "" != s[0].getAttribute("gridresponseok"),
      f = null != s[0].getAttribute("multifactorresponseok") && "" != s[0].getAttribute("multifactorresponseok"),
      m = null != s[0].getAttribute("disableoffline") && 1 == s[0].getAttribute("disableoffline"),
      h = s[0].getAttribute("session_valid_for"),
      b = (setUpSessionLifetimeOverrideCheck(h), "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()),
      y;
    if (
      ((g_premium_trial_exp_days = s[0].getAttribute("premium_trial_days_left")),
      (g_accountVersionTracking = 1 === parseInt(s[0].getAttribute("account_version_tracking"))),
      s[0].getAttribute("model") && (g_lp_model = s[0].getAttribute("model")),
      s[0].getAttribute("do_totp") && (g_do_totp = "1" == s[0].getAttribute("do_totp")),
      console_log("server.js : ***** disableoffline=" + m),
      !(
        "websitelogin" == a ||
        "webrootwebsitelogin" == a ||
        "websiterefresh" == a ||
        "websiterefreshrsa" == a ||
        "2ndfactorok" == a ||
        "frompipes" == a
      ) &&
        (null == g_local_key || "" == g_local_key) &&
        reduxApp.getPreference("logoffWhenCloseBrowser"))
    ) {
      var v = reduxApp.getPreference("lastpollcheck"),
        A = reduxApp.getPreference("logoffWhenCloseBrowserVal"),
        w = 1e3 * lp_get_gmt_timestamp() - v;
      if ((console_log("server.js : " + v + " " + A + " " + w), 6e4 * A <= w))
        return (
          loggedOut(!1, "logoffWhenCloseBrowser lastpollcheck=" + v + " logoffWhenCloseBrowserVal=" + A + " timesincelastpollcheck=" + w),
          void (
            reduxApp.getPreference("openloginstart") && ((g_reprompt_callback = null), (g_reprompt_error_callback = null), open_login())
          )
        );
    }
    if ("httptest" == a && !b) {
      if (n) {
        if ((localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !d))
          return (
            lpdbg("login", "LoginCheck : Asking for sesame OTP and reissuing request to login_check.php"),
            lpdbg("sesame", "LOGIN CHECK RESPONSE: sesameenabled => Asking user for OTP and then reissuing the login_check request"),
            sesame_setdata("fromwebsite", a),
            void lpCheckForKey(function () {
              sesame_getotp(t, s[0]);
            })
          );
        (a = "2ndfactorok"), lpdbg("login", "LoginCheck : sesame reprompt-rerequest succeeded!");
      }
      if (i) {
        if ((localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !c))
          return (
            lpdbg("login", "LoginCheck : Asking for yubikey OTP and reissuing request to login_check.php"),
            lpdbg("yubikey", "LOGIN CHECK RESPONSE: yubikeyenabled => Asking user for OTP and then reissuing the login_check request"),
            yubikey_setdata("fromwebsite", a),
            void lpCheckForKey(function () {
              yubikey_getotp(t, s[0]);
            })
          );
        (a = "2ndfactorok"), lpdbg("login", "LoginCheck : yubikey reprompt-rerequest succeeded!");
      }
      if (l) {
        if ((localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !_))
          return (
            lpdbg("login", "LoginCheck : Asking for googleauth OTP and reissuing request to login_check.php"),
            lpdbg(
              "googleauth",
              "LOGIN CHECK RESPONSE: googleauthenabled => Asking user for OTP and then reissuing the login_check request"
            ),
            googleauth_setdata("fromwebsite", a),
            void lpCheckForKey(function () {
              googleauth_getotp(t, s[0]);
            })
          );
        (a = "2ndfactorok"), lpdbg("login", "LoginCheck : googleauth reprompt-rerequest succeeded!");
      }
      if (g) {
        if ((localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !p))
          return (
            lpdbg("login", "LoginCheck : Asking for grid response and reissuing request to login_check.php"),
            lpdbg("grid", "LOGIN CHECK RESPONSE: gridenabled => Asking user for coordinates and then reissuing the login_check request"),
            grid_setdata("fromwebsite", a),
            grid_setdata("wxsessid", s[0].getAttribute("wxsessid")),
            void grid_getvalues(t, s[0].getAttribute("challenge"), s[0])
          );
        (a = "2ndfactorok"), lpdbg("login", "LoginCheck : grid reprompt-rerequest succeeded!");
      }
      if (u) {
        if ((localStorage_setItem(g_username_hash + "_mfaEnabled", "true"), !f))
          return (
            lpdbg("login", "LoginCheck : Asking for multifactor response and reissuing request to login_check.php"),
            lpdbg(
              "multifactor",
              "LOGIN CHECK RESPONSE: multifactorenabled => Asking user for coordinates and then reissuing the login_check request"
            ),
            multifactor_setdata("fromwebsite", a),
            multifactor_setdata("wxsessid", s[0].getAttribute("wxsessid")),
            multifactor_setdata("type", s[0].getAttribute("type")),
            void multifactor_getresponse(t, s[0].getAttribute("challenge"))
          );
        (a = "2ndfactorok"),
          lpdbg("login", "LoginCheck : multifactor reprompt-rerequest succeeded!"),
          "omnikey" == multifactor_getdata("type") &&
            multifactor_setdata("password_offline", s[0].getAttribute("multifactorofflinepassword"));
      }
    }
    u || g || l || i || n || localStorage_setItem(g_username_hash + "_mfaEnabled", "false"),
      b && reduxApp.migrateSPALoginData(t),
      lpLoginResponse_win(e, a, !0);
  } catch (e) {
    console_log(e.message);
  }
}
function lpLoginResponse2(e, t, a) {
  console_log("server.js : lpLoginResponse fromwebsite=" + a);
  try {
    console_log("server.js : Got login response"),
      !e ||
      4 != e.readyState ||
      "function" != typeof t ||
      (200 == e.status && null != e.responseXML && null != e.responseXML.documentElement)
        ? (console_log("server.js : Processing login response"), lpLoginResponse_win(e, a, !1))
        : t();
  } catch (e) {
    console.error(e);
  }
}
function lpLoginResponse(e, t, a) {
  lpLoginResponse2(e, t, a);
}
function lp_login_from_saved() {
  console_log("server.js : lp_login_from_saved");
  try {
    get_saved_logins(function (e) {
      if (0 < e.length) {
        var t = e[0].username,
          a = e[0].password,
          r;
        if ("" != a)
          return (
            (r = function (e) {
              (LPISLOC && LPISUPEK) || "" == e || (console_log("server.js : Logging in from saved"), LP_do_login(t, e, !0, !0));
            }),
            void (1 == e[0].protected ? unprotect_data(a, !1, r) : 2 == e[0].protected && r(dec(a, AES.hex2bin(SHA256(e[0].username)))))
          );
      }
      "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA() && loggedOut(!1, "logging in from saved failed"),
        reduxApp.getPreference("openloginstart") && ((g_reprompt_callback = null), (g_reprompt_error_callback = null), open_login());
    });
  } catch (e) {
    console_log(e.message);
  }
}
function lpLoginCommon(e) {
  console_log("server.js : lpLoginCommon bIsLoginCheck=" + e),
    (g_loggedinonline = !0),
    (g_loggedinoffline = !1),
    g_notifytimerid && (clearTimeout(g_notifytimerid), (g_notifytimerid = null)),
    g_retryonlinetimerid && (clearTimeout(g_retryonlinetimerid), (g_retryonlinetimerid = null));
}
var lploginerrorhandlercalled = 0;
function lpLoginError() {
  console_log("server.js : lpLoginError"), console_log("server.js : Got Login Error");
  var e = new Date().getTime();
  e - lploginerrorhandlercalled < 1e3 ||
    ((lploginerrorhandlercalled = e),
    lpdbg("login", "Login via login.php failed => try logging in offline using saved credentials -- if not already logged in offline --"),
    loginoffline(!1, "ErrorHandler"));
}
function lpLoginCheckError() {
  console_log("server.js : lpLoginCheckError"),
    lpdbg("login", "Got lpLoginCheckError"),
    g_loggedinoffline || (lpshowError("ErrorLoginMsg"), loggedOut(!1, "lpLoginCheckError"), lp_login_from_saved());
}
function getCompanyLicenseData() {
  (g_company_trial_exp_days = null),
    (g_company_license_exp_days = null),
    getCompanyLicensing(function (e) {
      !1 === e.success && "TrialExpired" === e.code
        ? ((g_company_trial_exp_days = 0), reduxApp.saveSettingsState("companyTrialDaysLeft", 0))
        : !1 === e.success && "Expired" === e.code
        ? (g_company_license_exp_days = 0)
        : e.hasOwnProperty("daysleft") && e.hasOwnProperty("renewalstatus")
        ? ((g_company_license_exp_days = e.daysleft), (g_company_renewalstatus = e.renewalstatus))
        : e.hasOwnProperty("daysleft") && !e.hasOwnProperty("renewalstatus")
        ? (g_company_license_exp_days = e.daysleft)
        : e.hasOwnProperty("trialdaysleft") &&
          ((g_company_trial_exp_days = e.trialdaysleft), reduxApp.saveSettingsState("companyTrialDaysLeft", e.trialdaysleft));
    });
}
function handleLanguageFromServer(e) {
  var t = JSON.parse(localStorage_getItem("language_" + g_username_hash));
  t
    ? t.shouldUpdateOnNextLogin
      ? saveUserLanguage(t.language)
      : (e && t.language !== e) || !t
      ? switchLanguage(e)
      : g_issafari_appext && !t
      ? Preferences.set("language", transformLocaleCode(e))
      : g_issafari_appext && t
      ? Preferences.set("language", transformLocaleCode(t.language))
      : (include_language(transformLocaleCode(t.language)), setLanguagePreference(g_username_hash, transformLocaleCode(e)))
    : switchLanguage(e);
}
function handleLanguageOffline(e) {
  g_issafari_appext && Preferences.set("language", transformLocaleCode(e)), include_language(transformLocaleCode(e));
}
function lpLoginResponse_win(i, l, g) {
  if ((console_log("server.js : lpLoginResponse_win fromwebsite=" + l + " bIsLoginCheck=" + g), i)) {
    if (4 == i.readyState && 200 == i.status && null != i.responseXML && null != i.responseXML.documentElement) {
      var e = i.responseXML.documentElement,
        u = e.getElementsByTagName("ok"),
        t = !0,
        a = !1,
        r,
        s,
        o,
        n,
        d,
        n;
      if ((lpdbg("login", "lpLoginResponse_win"), 0 < u.length)) {
        lpdbg("login", "got login ok"),
          reduxApp.saveFeatureSwitches(i.responseText),
          "frompipes" === l && sendLpImprove("login_with_session_sharing");
        var n = u[0].hasAttribute("trustuuid") ? u[0].getAttribute("trustuuid") : "",
          n,
          c,
          r,
          d,
          _ =
            (n && "" != n && setuuid(n, g_username_hash),
            (g_username = u[(server_tries = 0)].getAttribute("lpusername")),
            (g_username_hash = SHA256(g_username)),
            localStorage_setItem("lastusernamehash", g_username_hash),
            (g_migrate_expired_shared_folders =
              !!u[0].hasAttribute("migrate_expired_shared_folders") && !!u[0].getAttribute("migrate_expired_shared_folders")),
            (sendchallengescore = "1" === u[0].getAttribute("sendchallengescore")),
            (g_display_premium_retrial_offer = "1" === u[0].getAttribute("display_premium_retrial_offer")),
            (g_is_restricted = !!u[0].hasAttribute("is_free_restricted") && !!u[0].getAttribute("is_free_restricted")) &&
              ((g_primary_device_switches_left = u[0].hasAttribute("primary_device_switches_left")
                ? u[0].getAttribute("primary_device_switches_left")
                : null),
              0 < Object.keys(g_sites).length && (console.log("Removing vault loaded from offline login"), clearCache(), refreshsites()),
              (n = opendb()),
              createDataTable(n),
              n) &&
              ((c = function (e, t) {
                console.log("Removing local blob because of restricted session");
              }),
              (r = function (e, t) {
                console.log("Restricted Session Error: Cannot remove local blob");
              }),
              g_indexeddb
                ? (((d = n
                    .transaction("LastPassData", "readwrite")
                    .objectStore("LastPassData")
                    .delete(db_prepend(g_username_hash) + "_accts")).onsuccess = c),
                  (d.onerror = r))
                : n.transaction(function (e) {
                    e.executeSql(
                      'UPDATE LastPassData SET data="" WHERE username_hash=? and type=?',
                      [db_prepend(g_username_hash), "accts"],
                      c,
                      r
                    );
                  })),
            (g_has_credit_monitoring_premium =
              !!u[0].hasAttribute("has_credit_monitoring_premium") && !!u[0].getAttribute("has_credit_monitoring_premium")),
            (g_is_company_owner = !!u[0].hasAttribute("is_company_owner") && !!u[0].getAttribute("is_company_owner")),
            !1),
          d = ((g_is_recovery_login = g_is_recovery_login && !1), parseInt(u[0].getAttribute("autologout_secs"))),
          s;
        function p() {
          (g_iterpw = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
            (g_pwdeckey = AES.hex2bin(SHA256(u[0].getAttribute("pwdeckey")))),
            (g_uid = lpuid = u[0].getAttribute("uid")),
            localStorage_setItem(g_username_hash + "LPMPD", g_uid),
            (g_account_type = u[0].getAttribute("account_type")),
            (g_enterprise_version = u[0].getAttribute("enterprise_type")),
            (g_logoff_other_ses = "1" == u[0].getAttribute("logoff_other_ses")),
            (g_generatedpw = "1" == u[0].getAttribute("generatedpw")),
            (countryfromip = u[0].getAttribute("country")),
            (g_lastpollcheck = g_lastpoll = lastlogin = new Date().getTime()),
            (g_token = lptoken = u[0].getAttribute("token"));
          var e = u[0].getAttribute("noshare"),
            t = u[0].getAttribute("noshareexceptfolders"),
            t =
              ((g_sharing_enabled = "1" != e && "1" != t),
              (g_folder_sharing_enabled = "1" != e),
              (g_is_legacy_premium = "1" === u[0].getAttribute("is_legacy_premium")),
              (g_is_premium_trial = "1" === u[0].getAttribute("is_premium_trial")),
              (g_premium_trial_exp_days = u[0].getAttribute("premium_trial_days_left")),
              (g_is_company_subscription_expired = "1" === u[0].getAttribute("is_company_subscription_expired")),
              (g_predates_families = "1" === u[0].getAttribute("predates_families")),
              (g_seen_vault_post_families = "1" === u[0].getAttribute("seen_vault_post_families")),
              (g_is_families_trial_started = "1" === u[0].getAttribute("is_families_trial_started")),
              (g_is_premium_as_a_perk = "1" === u[0].getAttribute("is_premium_as_a_perk")),
              (g_partner_type = u[0].getAttribute("partner_type")),
              (g_first_time_login = "1" === u[0].getAttribute("first_time_login")),
              (g_original_language = u[0].getAttribute("original_language") ? u[0].getAttribute("original_language") : null),
              (g_show_original_language_changed_notification =
                !(
                  !u[0].getAttribute("show_original_language_changed_notification") &&
                  JSON.parse(localStorage_getItem("language_" + g_username_hash)) &&
                  JSON.parse(localStorage_getItem("language_" + g_username_hash)).shouldUpdateOnNextLogin
                ) && "1" === u[0].getAttribute("show_original_language_changed_notification")),
              (g_show_billing_address_notification = "1" === u[0].getAttribute("showBillingAddressNotification")),
              u[0].getAttribute("session_valid_for")),
            a;
          setUpSessionLifetimeOverrideCheck(t);
          try {
            a = JSON.parse(localStorage_getItem(g_username_hash + ".lpfeatureOverrides")) || {};
          } catch (e) {
            a = {};
          }
          (g_infield_multidevice_paywall_tracking =
            a.infield_multidevice_paywall_tracking || "1" === u[0].getAttribute("infield_multidevice_paywall_tracking")),
            (g_pendo_jwt_token = u[0].getAttribute("pendo_jwt_token")),
            (g_pendo_signing_key_name = u[0].getAttribute("pendo_signing_key_name")),
            (g_cid = u[0].getAttribute("cid")),
            init_countries();
          var r = "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA(),
            e;
          if ((e = u[0].getAttribute("prefdata"))) {
            var e = atob(e),
              s = {},
              o;
            for (o in (parsemobile(
              e,
              e.length,
              100,
              0,
              null,
              [],
              null,
              null,
              null,
              null,
              null,
              null,
              !0,
              !1,
              null,
              null,
              null,
              null,
              null,
              null,
              s,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              !1,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              getIconCallback
            ),
            0 === Object.keys(g_prefoverrides).length && r && (g_prefoverrides = reduxApp.getSPAPrefOverrides(g_username)),
            s))
              if (void 0 === g_prefoverrides || JSON.stringify(g_prefoverrides[o]) !== JSON.stringify(s[o])) {
                (g_prefoverrides = s), r && reduxApp.setSPAPrefOverrides(g_username, g_prefoverrides), rewritelocalfile();
                break;
              }
          }
          var t = u[0].getAttribute("pollinterval"),
            a =
              (t &&
                -1 != t &&
                !isNaN(parseInt(t)) &&
                isFinite(t) &&
                (reduxApp.setExtensionPreferences({ pollServerVal: t }), (g_flags.pollIntervalSetByPolicy = 1)),
              getsinglefactortype(function (e) {
                "1" == u[0].getAttribute("multifactor_singlefactor")
                  ? ("" == e &&
                      ("trueapi" == multifactor_getdata("type")
                        ? have_binary_function("trueapi_default_login_exists") &&
                          call_binary_function("trueapi_default_login_exists", g_username, function (e) {
                            e && setsinglefactortype(multifactor_getdata("type"));
                          })
                        : "vtapi" == u[0].getAttribute("singlefactortype")
                        ? have_binary_function("lpvt_has_data") &&
                          call_binary_function("lpvt_has_data", function (e) {
                            e && setsinglefactortype(u[0].getAttribute("singlefactortype"));
                          })
                        : "validity" == u[0].getAttribute("singlefactortype")
                        ? have_binary_function("validity_has_data") &&
                          call_binary_function("validity_has_data", function (e) {
                            e && setsinglefactortype(u[0].getAttribute("singlefactortype"));
                          })
                        : "winbio" == u[0].getAttribute("singlefactortype")
                        ? have_binary_function("winbio_has_data") &&
                          call_binary_function("winbio_has_data", function (e) {
                            e && setsinglefactortype(u[0].getAttribute("singlefactortype"));
                          })
                        : "nymi" == u[0].getAttribute("singlefactortype") &&
                          have_binary_function("nymi_has_data") &&
                          call_binary_function("nymi_has_data", function (e) {
                            e && setsinglefactortype(u[0].getAttribute("singlefactortype"));
                          })),
                    "nymi" == u[0].getAttribute("singlefactortype") &&
                      have_binary_function("nymi_get_version") &&
                      call_binary_function("nymi_get_version", function (e) {
                        parseInt(u[0].getAttribute("nymi_version")) > e &&
                          lpMakeRequest(
                            base_url + "nymi_data.php",
                            "token=" + en(u[0].getAttribute("token")) + "&action=read&b64=1",
                            function (e) {
                              var e;
                              4 == e.readyState &&
                                200 == e.status &&
                                e.responseXML &&
                                e.responseXML.documentElement &&
                                0 < (e = e.responseXML.documentElement.getElementsByTagName("ok")).length &&
                                (call_binary_function("nymi_write_data", lpatob(e[0].getAttribute("data"))), setsinglefactortype("nymi"));
                            }
                          );
                      }))
                  : "" != e && disable_single_factor();
              }),
              sesame_setdata("password_offline", u[0].getAttribute("sesamepassword")),
              yubikey_setdata("password_offline", u[0].getAttribute("yubikeyhash")),
              u[0].getAttribute("note_title")),
            e,
            n;
          a &&
            a.length &&
            ((e = u[0].getAttribute("note_text")),
            (n = u[0].hasAttribute("note_url") ? u[0].getAttribute("note_url") : null),
            LPNotifications.createNotification({
              title: a,
              message: e,
              callback: function () {
                openURL(n);
              }
            })),
            lpLoginResponse_win1_5(i, l, g),
            lpLoginCommon(g),
            (lpdisableoffline = 1 == u[0].getAttribute("disableoffline") ? 1 : 0) &&
              (lpdbg("disableoffline", "server.js : enabled => clearing sensitive files"), clearCache(!0, !1, !1, !0)),
            u[0].getAttribute("model") && (g_lp_model = u[0].getAttribute("model")),
            u[0].getAttribute("do_totp") && (g_do_totp = "1" == u[0].getAttribute("do_totp")),
            g_manual_login
              ? Topics.get(Topics.MANUAL_LOGIN_FINISHED).publish()
              : autoLogin_inProgress && ((autoLogin_inProgress = !1), reduxApp.updateAutomaticLoginTab()),
            (loginCheckFinished = !0),
            Topics.get(Topics.LOGIN_FINISHED).publish(),
            handleLanguageFromServer(u[0].getAttribute("language")),
            g_show_original_language_changed_notification && set_badge_text("i");
        }
        "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA() && d && reduxApp.startAutoLogoutTimer(d),
          g &&
            reduxApp.setSecondaryOnboardingSkills &&
            reduxApp.setSecondaryOnboardingSkills(u[0].getAttribute("secondary_onboarding_skill_list")),
          u[0].getAttribute("password_strength_hardening") &&
            reduxApp.setFeatures &&
            reduxApp.setFeatures({ password_strength_hardening: "1" === u[0].getAttribute("password_strength_hardening") }),
          u[0].getAttribute("is_mfa_enrollment_completed") &&
            reduxApp &&
            reduxApp.setMfaEnrollmentCompleted &&
            reduxApp.setMfaEnrollmentCompleted("1" === u[0].getAttribute("is_mfa_enrollment_completed")),
          !u[0].getAttribute("iterations") ||
            (localStorage_getItem(g_username_hash + "_key_iter") && !g) ||
            ((s = parseInt(u[0].getAttribute("iterations"))),
            console.info("Updating iterations", { iterations: s }),
            localStorage_setItem(g_username_hash + "_key_iter", s),
            reduxApp.updateIterations && reduxApp.updateIterations(g_username, s)),
          p(),
          1 === parseInt(u[0].getAttribute("companyadmin")) &&
            1 === parseInt(u[0].getAttribute("license_expiration")) &&
            (reduxApp.saveSettingsState("companyAdmin", !0), getCompanyLicenseData()),
          "0" == u[0].getAttribute("multifactorscore")
            ? localStorage_setItem(g_username_hash + "_mfaEnabled", "false")
            : localStorage_setItem(g_username_hash + "_mfaEnabled", "true");
      } else {
        if ((console_log(i.responseText), 0 < (r = e.getElementsByTagName("error")).length)) {
          if (
            (lpdbg("login", "got login error"), "deactivated" == r[0].getAttribute("cause") || "deleteduser" == r[0].getAttribute("cause"))
          )
            return (
              clearCache(!0, !0, !0),
              lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
              void loggedOut(!1, "deactivated")
            );
          if ((1 == r[0].getAttribute("trustexpired") && clearuuid(g_username), r[0].getAttribute("iterations")))
            return (
              (s = parseInt(r[0].getAttribute("iterations"))),
              localStorage_setItem(SHA256(g_username) + "_key_iter", s) || (DEFAULT_KEY_ITERATIONS = s),
              void LP_do_login(g_username, dec(g_iterpw, AES.hex2bin(SHA256(g_username))))
            );
          if (r[0].getAttribute("pbkdf2fallback") && ("undefined" == typeof g_oldpbkdf2 || 1 != g_oldpbkdf2))
            return (
              (g_oldpbkdf2 = 1),
              (o = yubikey_getdata("p")),
              LP_do_login(g_username, dec(g_iterpw, AES.hex2bin(SHA256(g_username)))),
              void (g_iterpw = null)
            );
          if (("undefined" != typeof g_oldpbkdf2 && (g_oldpbkdf2 = 0), r[0].getAttribute("server")))
            return (
              ("lastpass.com" != (n = r[0].getAttribute("server")) && "lastpass.eu" != n) ||
                ((base_url = "https://" + n + "/"),
                reduxApp.setExtensionPreferences({ server: n }),
                LP_do_login(
                  g_username,
                  dec(g_iterpw, AES.hex2bin(SHA256(g_username))),
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  g_authSessionId
                )),
              void (g_iterpw = null)
            );
          if (
            (reduxApp.setFeatures &&
              r[0].getAttribute("password_strength_hardening") &&
              reduxApp.setFeatures({ password_strength_hardening: "1" === r[0].getAttribute("password_strength_hardening") }),
            r[0].getAttribute("openurl") && ((d = r[0].getAttribute("openurl")), openURL(d)),
            r[0].hasAttribute("invalidsession"))
          )
            return (
              openURL(base_url + "invalidsession.php"),
              lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
              loggedOut(!1, "invalidsession"),
              void (g_iterpw = null)
            );
          if (
            ((a = 1 == parseInt(r[0].getAttribute("silent"))),
            (allowmultifactortrust = !0),
            0 < i.responseText.indexOf("allowmultifactortrust=") &&
              ((allowtrust_str = i.responseXML.childNodes[0].childNodes[0].getAttribute("allowmultifactortrust")),
              (allowmultifactortrust = "false" != allowtrust_str)),
            (hidemultifactordisable = !1),
            0 < i.responseText.indexOf("hidedisable=") &&
              ((hidedisable_str = i.responseXML.childNodes[0].childNodes[0].getAttribute("hidedisable")),
              (hidemultifactordisable = "false" != hidedisable_str)),
            r[0].hasAttribute("cause") && "sesameotprequired" === r[0].getAttribute("cause"))
          )
            return (
              lpdbg("sesame", "LOGIN RESPONSE: sesameenabled => Asking user for OTP and then reissuing the login request"),
              sesame_setdata("fromwebsite", l),
              sesame_getotp(g_username, r[0]),
              (g_2fa_inprocess = !0),
              (g_iterpw = null),
              void (g_multifactorProvider = "sesame")
            );
          if (r[0].hasAttribute("cause") && "sesameotpfailed" === r[0].getAttribute("cause"))
            return (
              lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
              loggedOut(!1, "sesameotpfailed"),
              void (g_iterpw = null)
            );
          if (r[0].hasAttribute("cause") && "otprequired" === r[0].getAttribute("cause"))
            return (
              lpdbg("yubikey", "LOGIN RESPONSE: yubikeyenabled => Asking user for OTP and then reissuing the login request"),
              yubikey_setdata("fromwebsite", l),
              yubikey_getotp(g_username, r[0]),
              (g_2fa_inprocess = !0),
              (g_iterpw = null),
              void (g_multifactorProvider = "yubikey")
            );
          if (r[0].hasAttribute("cause") && "otpfailed" === r[0].getAttribute("cause"))
            return (
              lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
              loggedOut(!1, "otpfailed"),
              void (g_iterpw = null)
            );
          var s = !1,
            f;
          if (r[0].hasAttribute("cause") && "googleauthfailed" === r[0].getAttribute("cause")) {
            if ((null == (f = googleauth_getdata("fail_count")) && (f = 0), googleauth_setdata("fail_count", ++f), !(f < 5)))
              return (
                googleauth_setdata("fail_count", 0),
                lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
                loggedOut(!1, "otpfailed"),
                void (g_iterpw = null)
              );
            s = !0;
          }
          var n = !1,
            f;
          if (r[0].hasAttribute("cause") && "microsoftauthfailed" === r[0].getAttribute("cause")) {
            if ((null == (f = googleauth_getdata("fail_count")) && (f = 0), googleauth_setdata("fail_count", ++f), !(f < 5)))
              return (
                googleauth_setdata("fail_count", 0),
                lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
                loggedOut(!1, "otpfailed"),
                void (g_iterpw = null)
              );
            n = !0;
          }
          var m = !1,
            d = !1,
            r,
            f;
          if (r[0].hasAttribute("cause") && "securityquestionfailed" === r[0].getAttribute("cause")) {
            var f = securityquestion_getdata("fail_count");
            if ((null == f && (f = 0), securityquestion_setdata("fail_count", ++f), !(f < 5)))
              return (
                securityquestion_setdata("fail_count", 0),
                lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
                loggedOut(!1, "otpfailed"),
                void (g_iterpw = null)
              );
            0 < r.length && r[0].getAttribute("message") && alert(r[0].getAttribute("message")), (d = !0);
          }
          if ((r[0].hasAttribute("cause") && "microsoftauthrequired" === r[0].getAttribute("cause")) || n)
            return (
              lpdbg("microsoftauth", "LOGIN RESPONSE: microsoftauthenabled => Asking user for OTP and then reissuing the login request"),
              googleauth_setdata("fromwebsite", l),
              microsoftauth_getotp(g_username, r[0]),
              (g_2fa_inprocess = !0),
              (g_iterpw = null),
              void (g_multifactorProvider = "microsoftauth")
            );
          if ((r[0].hasAttribute("cause") && "googleauthrequired" === r[0].getAttribute("cause")) || s)
            return (
              lpdbg("googleauth", "LOGIN RESPONSE: googleauthenabled => Asking user for OTP and then reissuing the login request"),
              googleauth_setdata("fromwebsite", l),
              googleauth_getotp(g_username, r[0]),
              (g_2fa_inprocess = !0),
              (g_iterpw = null),
              void (g_multifactorProvider = "googleauth")
            );
          if (r[0].hasAttribute("cause") && "outofbandrequired" === r[0].getAttribute("cause"))
            return (
              lpdbg("outofband", "LOGIN RESPONSE: outofbandenabled => Asking user for OTP and then reissuing the login request"),
              outofband_setdata("fromwebsite", l),
              outofband_getotp(g_username, r[0]),
              (g_2fa_inprocess = !0),
              (g_iterpw = null),
              void (r[0].hasAttribute("outofbandtype") && (g_multifactorProvider = r[0].getAttribute("outofbandtype")))
            );
          if ((r[0].hasAttribute("cause") && "securityquestionrequired" === r[0].getAttribute("cause")) || d)
            return (
              lpdbg(
                "securityquestion",
                "LOGIN RESPONSE: securityquestionenabled => Asking user for answer and then reissuing the login request"
              ),
              securityquestion_setdata("fromwebsite", l),
              securityquestion_getotp(g_username, r[0]),
              (g_2fa_inprocess = !0),
              void (g_iterpw = null)
            );
          if (r[0].hasAttribute("cause") && "gridresponserequired" === r[0].getAttribute("cause"))
            return (
              lpdbg("grid", "LOGIN RESPONSE: gridenabled => Asking user for grid response and then reissuing the login request"),
              grid_setdata("fromwebsite", l),
              grid_setdata("wxsessid", r[0].getAttribute("wxsessid")),
              grid_getvalues(g_username, r[0].getAttribute("challenge"), r[0]),
              void (g_2fa_inprocess = !0)
            );
          if (r[0].hasAttribute("cause") && "gridresponsefailed" === r[0].getAttribute("cause"))
            return (
              lpshowError(0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError", !1, !0),
              loggedOut(!1, "gridresponsefailed"),
              void (g_iterpw = null)
            );
          if (r[0].hasAttribute("cause") && "multifactorresponserequired" === r[0].getAttribute("cause"))
            return (
              lpdbg(
                "multifactor",
                "LOGIN RESPONSE: multifactorenabled => Asking user for multifactor response and then reissuing the login request"
              ),
              multifactor_setdata("fromwebsite", l),
              multifactor_setdata("wxsessid", r[0].getAttribute("wxsessid")),
              multifactor_setdata("type", r[0].getAttribute("type")),
              multifactor_getresponse(g_username, r[0].getAttribute("challenge")),
              (g_2fa_inprocess = !0),
              void (g_iterpw = null)
            );
          if (r[0].hasAttribute("cause") && "multifactorresponsefailed" === r[0].getAttribute("cause"))
            return (
              (f =
                (r = e.getElementsByTagName("error")) && 0 < r.length && r[0].getAttribute("type")
                  ? r[0].getAttribute("type")
                  : multifactor_getdata("type")),
              lpshowError(
                0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError",
                !1,
                !0,
                !1,
                get_multifactor_disable_url(g_username, f)
              ),
              loggedOut(!1, "multifactorresponsefailed"),
              void (g_iterpw = null)
            );
        }
        a
          ? lp_login_from_saved()
          : 0 < i.responseText.indexOf("blacklist")
          ? (clearCache(!0, !1, !1),
            lpshowError(
              0 < r.length && r[0].getAttribute("message")
                ? r[0].getAttribute("message")
                : "Your account has been temporarily suspended because of too many login attempt failures.",
              !1,
              !0,
              !1,
              null,
              !1,
              r[0].getAttribute("custombutton"),
              r[0].getAttribute("customaction")
            ))
          : ((n = 0 < r.length && r[0].getAttribute("cause") && "unknownemail" == r[0].getAttribute("cause")),
            try_alternativeServer()
              ? LP_do_login(g_retryusername, dec(g_iterpw, AES.hex2bin(SHA256(g_username))))
              : lpshowError(
                  0 < r.length && r[0].getAttribute("message") ? r[0].getAttribute("message") : "LoginError",
                  !1,
                  !0,
                  n,
                  null,
                  !1,
                  r[0].getAttribute("custombutton"),
                  r[0].getAttribute("customaction"),
                  1 == r[0].getAttribute("trialavailable"),
                  "context" === reduxApp.getState().user.introTutorialVersion
                ));
      }
    } else lpshowError("ErrorLoginMsg");
    g_iterpw = null;
  }
}
var server_tries = 0;
function try_alternativeServer() {
  return !(
    ("undefined" != typeof g_disable_alternative_server && g_disable_alternative_server) ||
    "https://lastpass.com/" == original_base ||
    "https://lastpass.eu/" == original_base ||
    ((base_url =
      3 == ++server_tries || "https://lastpass.com/" == base_url || "https://lastpass.eu/" == base_url
        ? original_base
        : "https://lastpass.com/"),
    reduxApp.setExtensionPreferences({ server: base_url.substr(8, base_url.length - 1) }),
    3 == server_tries && ((server_tries = 0), 1))
  );
}
function disable_single_factor() {
  getsinglefactortype(function (e) {
    "trueapi" == e && have_binary_function("trueapi_delete_default_login") && call_binary_function("trueapi_delete_default_login"),
      setsinglefactortype("");
  });
}
function lpLoginResponse_win1_5(e, t, a) {
  console_log("server.js : lpLoginResponse_win1_5 fromwebsite=" + t + " bIsLoginCheck=" + a);
  var r,
    s = e.responseXML.documentElement.getElementsByTagName("ok"),
    o;
  null == g_local_key || "" == g_local_key
    ? "websitelogin" == t ||
      "webrootwebsitelogin" == t ||
      "websiterefresh" == t ||
      "websiterefreshrsa" == t ||
      "2ndfactorok" == t ||
      "frompipes" == t ||
      !reduxApp.getPreference("logoffWhenCloseBrowser")
      ? lpReadKeyFile(e, t, !1, a)
      : lpReadAllPrefs(function () {
          lpLoginResponse_win1_75(e, t, a), drawIconAtRotation(0);
        })
    : (lpWriteKeyFile(),
      lpReadAllPrefs(function () {
        lpLoginResponse_win2(e, t, a), drawIconAtRotation(0);
      }));
}
function lpLoginResponse_win1_75(e, t, a) {
  console_log("server.js : lpLoginResponse_win1_75 fromwebsite=" + t + " bIsLoginCheck=" + a);
  var r = reduxApp.getPreference("lastpollcheck"),
    s = pref_numeric_validate(reduxApp.getPreference("logoffWhenCloseBrowserVal"), 0),
    o = 1e3 * lp_get_gmt_timestamp() - r;
  6e4 * s <= o
    ? loggedOut(!1, "lpLoginResponse_win1_75 lastpollcheck=" + r + " logoffWhenCloseBrowserVal=" + s + " timesincelastpollcheck=" + o)
    : lpReadKeyFile(e, t, !1, a);
}
function lpLoginResponse_win2(e, t, a) {
  console_log("server.js : lpLoginResponse_win2 fromwebsite=" + t + " bIsLoginCheck=" + a);
  var r,
    s = (r = e.responseXML.documentElement).getElementsByTagName("ok"),
    o =
      (closeallnotifications(!0, !0),
      (lp_phpsessid = s[0].getAttribute("sessionid")),
      (iconsversion = parseInt(s[0].getAttribute("iconsversion"))),
      (secondary_onboarding_skill_list = s[0].getAttribute("secondary_onboarding_skill_list")),
      loggedIn(void 0, void 0, e.responseText),
      (g_server_accts_version = parseInt(s[0].getAttribute("accts_version"))),
      reduxApp.sendAccountVersionNumber(g_server_accts_version),
      g_server_accts_version != g_local_accts_version && (g_local_accts_version = -1),
      (g_loglogins = parseInt(s[0].getAttribute("loglogins"))),
      (g_isadmin = 1 == parseInt(s[0].getAttribute("isadmin"))),
      (g_iscompanyadmin = 1 == parseInt(s[0].getAttribute("companyadmin"))),
      (g_showcredmon = 1 == parseInt(s[0].getAttribute("showcredmon"))),
      (g_disablepwalerts = 1 == parseInt(s[0].getAttribute("disablepwalerts"))),
      (g_accountVersionTracking = 1 === parseInt(s[0].getAttribute("account_version_tracking"))),
      (pwndlistscan = null != s[0].getAttribute("pwndlistscan") && 1 == s[0].getAttribute("pwndlistscan")),
      (loglogin_url = null != s[0].getAttribute("logloginsvr") ? "https://" + s[0].getAttribute("logloginsvr") + "/" : base_url),
      (pollserver_url = null != s[0].getAttribute("pollserver") ? "https://" + s[0].getAttribute("pollserver") + "/" : base_url),
      (lpsendmpstrength = "1" === s[0].getAttribute("sendmpstrength")),
      !1),
    n = s[0].getAttribute("pushserver");
  null != n && n.length && setup_push_listener(n),
    lpCheckDownloadNewDataFile(s[0].getAttribute("formfillver"), "ff.dat", ffver, "ff", "ff.dat"),
    lpCheckDownloadNewDataFile(s[0].getAttribute("sitesver"), "sites.dat", -1, "sites", "sites.dat"),
    lpCheckDownloadNewDataFile(s[0].getAttribute("bigicon"), "bigicons.dat", -1, "bigicon", "bigicons.dat"),
    "" == s[0].getAttribute("privatekeyenchash")
      ? (console_log("RSA : login response : server returned blank privatekeyenchash : calling generateSharingKeys()"),
        generateSharingKeys())
      : (console_log(
          "RSA : login response : server returned privatekeyenchash : calling readrsaprivatekeyhexfromdb() to make sure it matches the local value"
        ),
        readrsaprivatekeyhexfromdb(!1, !0, s[0].getAttribute("privatekeyenchash"))),
    (!a || ("boolean" == typeof t && t)) && lpnp_send_internal_logincheck_ack();
  var r,
    s = (r = e.responseXML.documentElement).getElementsByTagName("ok");
  if (
    (reduxApp.getPreference("storeLostOTP") &&
      s[0].hasAttribute("lostpwotpresult") &&
      "ok" != s[0].getAttribute("lostpwotpresult") &&
      0 == g_norecovery &&
      (DeleteOTP(), MakeOTP()),
    (hassites() && g_server_accts_version == g_local_accts_version) ||
      (console_log(
        "server.js : !hassites() or server_ver:" +
          g_server_accts_version +
          " != local_ver:" +
          g_local_accts_version +
          " so calling get_accts_local!"
      ),
      get_accts_local()),
    lpretryrequests(),
    s[0].getAttribute("sauid0"))
  ) {
    for (var i = 0, l = ""; s[0].getAttribute("sauid" + i); ) {
      var g = lprsa_encryptdata(s[0].getAttribute("sakey" + i), AES.bin2hex(g_local_key));
      g && (l += "&sauid" + i + "=" + en(s[0].getAttribute("sauid" + i)) + "&sakey" + i + "=" + en(g)), i++;
    }
    l.length && lpMakeRequest(base_url + "uploadsuperkeys.php", "cmd=uploadsuperadmin&" + l, null, null);
  }
}
function lpCheckDownloadNewDataFile(e, t, a, r, s) {
  var a, o, n, i, a, o;
  "" != e &&
    0 != e &&
    ((a = a),
    (n = !1),
    null != (o = localStorage_getItem(s)) && "" != o && "\n" != o
      ? ((i = -1 == o.indexOf("\n") ? o.length : o.indexOf("\n")), (a = o.substr(0, i)))
      : (n = !0),
    (n = (null != a && "" != a && -1 != a && 0 < CompareLastPassVersions(e, a)) || n)) &&
    ((o = base_url + "getappdata.php"), lpMakeRequest(o, "type=" + en(r), lpDownloadDataResponse, null, s));
}
generateSharingKeys = (function () {
  var a = !1;
  return function (e) {
    var t, t, t;
    console_log("RSA : generateSharingKeys : generating=" + a),
      a ||
        (have_binary_function("xGenerateKeys")
          ? (console_log("RSA : generateSharingKeys : using xGenerateKeys"),
            (a = !0),
            (t = AES.bin2hex(g_local_key).toUpperCase()),
            call_binary_function("xGenerateKeys", t, function (e) {
              console_log("RSA : generateSharingKeys : xGenerateKeys completed");
              var e = e.split("|");
              2 == e.length
                ? (console_log("RSA : generateSharingKeys : xGenerateKeys was successful -- calling upload_rsa_keys()"),
                  upload_rsa_keys("xGenerateKeys", { privatekey: atob(e[0]), publickey: atob(e[1]) }))
                : console_log("RSA : generateSharingKeys : xGenerateKeys failed"),
                (a = !1);
            }))
          : have_pplastpass()
          ? ((a = !0),
            (t = AES.bin2hex(g_local_key).toUpperCase()),
            console_log("RSA : generateSharingKeys : using xGenerateKeys via pplastpass"),
            pplastpass_send_message({ cmd: "xGenerateKeys", userkeyhex: t }, function (e) {
              console_log("RSA : generateSharingKeys : xGenerateKeys via pplastpass completed");
              var e = e.split("|");
              2 == e.length
                ? (console_log("RSA : generateSharingKeys : xGenerateKeys via pplastpass was successful -- calling upload_rsa_keys()"),
                  upload_rsa_keys("xGenerateKeys", { privatekey: atob(e[0]), publickey: atob(e[1]) }))
                : console_log("RSA : generateSharingKeys : xGenerateKeys via pplastpass failed"),
                (a = !1);
            }))
          : g_ischrome || ("function" == typeof LPPlatform.isSPA && LPPlatform.isSPA())
          ? (console_log("RSA : generateSharingKeys : using Javascript RSAKey() to create sharing keys"),
            (a = !0),
            (t = new RSAKey()),
            generate_key(t, function (e) {
              console_log("RSA : generateSharingKeys : Javascript RSAKey() was successful -- calling upload_rsa_keys()"),
                upload_rsa_keys("RSAKey", e),
                (a = !1);
            }))
          : console_log("RSA : generateSharingKeys : Not generating keys since unsupported OS")),
      e && e(a);
  };
})();
var adminoverride = "",
  lplastgetaccounts = 0;
function get_accts(e) {
  var t = localStorage_getItem(g_username_hash + "_personalaccountlinktoken"),
    a = "",
    t = (t && (a = "&personalaccountlinktoken=" + encodeURIComponent(t)), new Date().getTime()),
    t,
    t;
  t - lplastgetaccounts < 1e3 ||
    ((lplastgetaccounts = t),
    (t =
      base_url +
      "getaccts.php?mobile=1&b64=1&shap=1&u=" +
      g_username_hash +
      "&includesharedfolderformfillprofiles=1&includeemergencyaccess=1&includependingsharedfolders=1&includelinkedsharedfolders=1"),
    "" != adminoverride && (t += "&adminoverride=" + en(adminoverride)),
    (t += a),
    lpMakeRequest(t, "", e || lpAcctsResponse, lpAcctsError));
}
function get_accts_to_export(e, t, a) {
  var r = base_url + "exporthelp.php?src=website&show_pass=1&csvdownload=1&type=table&headers=1";
  lpMakeRequest(r, "pwhash=" + e, t, a);
}
function get_accts_local(e, t) {
  lpReadAcctsData(e, t);
}
function lpAcctsResponse(e) {
  var t, a, r, s, o, n, i, l, g, u, d, c, _, p, f, m, h, b, y, v;
  e && 4 == e.readyState
    ? ((t = atob(e.responseText)),
      write_history({
        cmd: "get_accts_success",
        sz: t.length,
        ready_state: e.readyState,
        status: e.status,
        lver: g_local_accts_version,
        sver: g_server_accts_version
      }),
      (a = []),
      (r = []),
      (s = {}),
      (o = []),
      (n = []),
      (i = {}),
      (l = []),
      (g = []),
      (u = []),
      (d = []),
      (c = []),
      (_ = []),
      (p = {}),
      (f = []),
      (m = []),
      (h = []),
      (b = []),
      (y = []),
      (v = get_ff_translation("ff_captcha_regexp")),
      (lp_captcha_regexp = "" != v ? new RegExp(v, "i") : null),
      (g_emer_sharers = []),
      (g_emer_sharees = []),
      (g_totp = {}),
      (g_note_templates = []),
      (g_reminders = []),
      (g_server_accts_version = get_version(t)),
      parsemobile(
        t,
        t.length,
        100,
        0,
        postacctsload,
        a,
        r,
        s,
        o,
        n,
        i,
        l,
        !0,
        !1,
        null,
        g,
        u,
        d,
        c,
        _,
        p,
        lp_rsaprivatekeyhex,
        f,
        null,
        null,
        null,
        m,
        h,
        b,
        y,
        void 0,
        void 0,
        g_emer_sharers,
        g_emer_sharees,
        g_totp,
        g_note_templates,
        g_pending_shares,
        g_reminders,
        null,
        null,
        null,
        getIconCallback
      ))
    : write_history({
        cmd: "get_accts_fail",
        sz: e && "string" == typeof e.responseXML ? e.responseXML.length : -1,
        ready_state: e ? e.readyState : -1,
        status: e ? e.status : -1,
        lver: g_local_accts_version,
        sver: -1
      });
}
function get_ff_translation(e) {
  var t = reduxApp.getPreference("language"),
    a = (t = "" == t ? navigator.language : t),
    t;
  if (
    (("es_419" != (t = t.replace("-", "_")) && "es_419" != a && "es-419" != a && "es_xl" != t && "es_xl" != a && "es-xl" != a) ||
      ((t = "es_MX"), (a = "es-MX")),
    void 0 === translations[t] && void 0 === translations[a] && (a = t = t.substring(0, 2)),
    void 0 === translations[t] && void 0 === translations[a])
  )
    for (var r in translations)
      if (r.substring(0, 2) == t) {
        a = t = r;
        break;
      }
  if (
    (void 0 === translations[t] && void 0 === translations[a] && ((t = "en_US"), (a = "en-US")),
    void 0 === translations[t] && void 0 === translations[a])
  )
    for (var r in ((a = t = "en"), translations))
      if (r.substring(0, 2) == t) {
        a = t = r;
        break;
      }
  return void 0 !== translations[t] && void 0 !== translations[t][e] && "" != translations[t][e]
    ? translations[t][e]
    : void 0 !== translations[a] && void 0 !== translations[a][e] && "" != translations[a][e]
    ? translations[a][e]
    : void 0 !== translations.en_US && void 0 !== translations.en_US[e] && "" != translations.en_US[e]
    ? translations.en_US[e]
    : void 0 !== translations["en-US"] && void 0 !== translations["en-US"][e] && "" != translations["en-US"][e]
    ? translations["en-US"][e]
    : "";
}
function rewritelocalfile(a, r, s) {
  s = void 0 === s ? null : s;
  var e = flattendata(
      g_local_accts_version,
      g_sites,
      g_securenotes,
      g_prompts,
      g_formfills,
      g_identities,
      g_equivalentdomains,
      g_neverurls,
      reduxApp.getState().encryptedVaultDataSource.premiumExp,
      enc(g_username),
      g_pendings,
      g_shareeautopushes,
      lpmaxid,
      g_urlrules,
      g_prefoverrides,
      g_shares,
      g_applications,
      reduxApp.getState().encryptedVaultDataSource.isEnterpriseUser,
      reduxApp.getState().encryptedVaultDataSource.attachments,
      g_emer_sharers,
      g_emer_sharees,
      g_totp,
      g_note_templates,
      g_pending_shares
    ),
    e = btoa(e);
  if (((e = prependIterations((e = prependOTPAndEncrypt((e = LPISLOC || s ? "LPB64" + e : e))))), lpSaveData(e, "accts"), LPISLOC || s)) {
    if (((e = prependIterations((e = enc(e)))), s || lpdisableoffline)) return e;
    protect_data(e, !0, null, function (e) {
      var t, t;
      have_binary_function("write_file") &&
        ((t = ""),
        a && (t = "_" + new Date().toString().replace(" ", "_")),
        (t = db_prepend(g_username_hash + t + "_lps.act.sxml")),
        s && (t = "lpexport.xml"),
        call_binary_function("write_file", t, e)),
        a || r || lpnp_notify("refresh_local", { data0: g_username_hash });
    });
  }
  update_menus(!0);
}
function prependOTPAndEncrypt(e) {
  var t = null,
    a = "";
  if (
    (sesame_getdata("password_offline") && "" != sesame_getdata("password_offline")
      ? (lpdbg("sesame", "encrypting accounts file before writing"),
        (t = sesame_getdata("password_offline")),
        (a = "type=sesameoffline\ndata="))
      : multifactor_getdata("password_offline") && "" != multifactor_getdata("password_offline")
      ? (lpdbg("multifactor", "encrypting accounts file before writing"),
        (t = multifactor_getdata("password_offline")),
        (a = "type=" + multifactor_getdata("type") + "offline\ndata="))
      : yubikey_getdata("password_offline") &&
        "" != yubikey_getdata("password_offline") &&
        (lpdbg("yubikey", "encrypting accounts file before writing"),
        (t = yubikey_getdata("password_offline")),
        (a = "type=yubikeyoffline\ndata=")),
    t)
  ) {
    if (!(e = enc(e, hex2bin(t))) || "" == e) return lpdbg("error", "Failed to encrypt data in save_accounts_fileraw"), !1;
    e = a + e;
  }
  return e;
}
function clearSavedPassword(t) {
  var a = opendb();
  createSavedLoginsTable(a),
    a &&
      (console_log("server.js : clearing saved credentials"),
      g_indexeddb
        ? (a.transaction("LastPassSavedLogins2", "readonly").objectStore("LastPassSavedLogins2").openCursor(IDBKeyRange.only(t)).onsuccess =
            function (e) {
              e.target.result &&
                "" != e.target.result.value.password &&
                ((e.target.result.value.password = ""),
                a.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put(e.target.result.value));
            })
        : a.transaction(function (e) {
            e.executeSql("UPDATE LastPassSavedLogins2 SET password = '' WHERE username = ?", [t]);
          }));
}
function checkforknownhackedsites() {}
function setSingleFactor(e) {
  0 < e &&
    e < parseInt(new Date().getTime() / 1e3) &&
    (getsinglefactortype(function (e) {
      "trueapi" == e && setsinglefactortype("");
    }),
    "trueapi" == multifactor_getdata("type")) &&
    multifactor_setdata("type", "");
}
function postacctsload(e, t, a, r, s, o, n, i, l, g, u, d, c, _, p, M, f, m, h, q, N, b) {
  var y;
  if (lploggedin)
    if (i || (g && 0 != e.length)) {
      if (0 < e.length && void 0 !== u && null != u && "" == adminoverride) {
        var i = dec(u);
        if ("" != u && null != u && "null" != u && g_username != i)
          return (
            logger.error("Encrypted username check failed: " + g_username + " vs " + i + " for " + u + " local " + g, {
              username: g_username,
              decrypted_username: i,
              encrypted_username: u,
              local: g
            }),
            lpshowError("A consistency check failed while loading your sites. Please relogin."),
            clearSavedPassword(g_username),
            clearAllData(),
            loggedOut(!1, "encryptedusername_check_failed"),
            !1
          );
      }
      for (
        var i,
          i,
          v =
            (verify_accts_integrity(u, g_username, e, t, h, s, m, g_uid),
            (lpmaxid = _.maxid),
            g || ((i = prependIterations((i = prependOTPAndEncrypt((i = btoa(l)))))), lpSaveData(i, "accts")),
            {}),
          A = ((g_tlds = {}), AES.bin2hex(g_local_key)),
          w = 0;
        w < e.length;
        w++
      ) {
        if (((e[w].url = AES.hex2url(e[w].url)), (e[w].tld = lp_gettld_url(e[w].url)), LPISLOC && e[w].tld))
          try {
            var k = function () {
              rfdefaults &&
                void 0 !== rfdefaults[e[w].tld] &&
                ((e[w].submit_id = rfdefaults[e[w].tld].submit_id),
                (e[w].captcha_id = rfdefaults[e[w].tld].captcha_id),
                (e[w].custom_js = rfdefaults[e[w].tld].custom_js));
            };
            rfdefaults
              ? k()
              : lpReadFile("rfdefaults", function (e) {
                  (rfdefaults = JSON.parse(lp_hex2bin(e))), k();
                });
          } catch (e) {}
        var x = void 0 === e[w].sharefolderid ? g_local_key : getsharekey(m, e[w].sharefolderid),
          S;
        null != x &&
          ((S = void 0 === e[w].sharefolderid ? A : AES.bin2hex(x)), (e[w].unencryptedUsername = lpmdec(e[w].username, !0, x, S))),
          void 0 === g_tlds[e[w].tld] && (g_tlds[e[w].tld] = {}),
          (g_tlds[e[w].tld][e[w].aid] = !0),
          (v[e[w].aid] = e[w]);
      }
      for (var L = {}, w = 0; w < t.length; w++) (t[w].url = AES.hex2url(t[w].url)), (L[t[w].aid] = t[w]);
      for (var P = {}, w = 0; w < h.length; w++) (h[w].appname = AES.hex2url(h[w].appname)), (P[h[w].appaid] = h[w]);
      (g_sites = v),
        (g_securenotes = L),
        (g_applications = P),
        (g_prompts = a),
        (g_formfills = r),
        (g_identities = s),
        (g_equivalentdomains = filterNormalEquivalentDomains(o)),
        (g_strictequivalentdomains = filterExactEquivalentDomains(o)),
        (g_urlrules = p),
        (g_neverurls = n),
        (g_pendings = d),
        (g_prefoverrides = f),
        0 < (g_shares = m).length &&
          ("undefined" == typeof lp_rsaprivatekeyhex || null == lp_rsaprivatekeyhex || "" == lp_rsaprivatekeyhex) &&
          "undefined" == typeof g_keyloopprotection &&
          setTimeout(function () {
            lp_rsaprivatekeyhex && "" != lp_rsaprivatekeyhex
              ? ((g_keyloopprotection = !0), get_accts_local())
              : ((g_keyloopprotection = !0),
                console_log("RSA : post accounts load : calling readrsaprivatekeyhexfromdb()"),
                readrsaprivatekeyhexfromdb(!0, !0, null, function () {
                  lp_rsaprivatekeyhex && "" != lp_rsaprivatekeyhex && get_accts();
                }));
          }, 5e3),
        overrideprefs(g_prefoverrides),
        setcachedffdat(),
        (g_shareeautopushes = new Array()),
        parseAutoPushMobile(c, g_shareeautopushes);
      for (var w = 0; w < g_formfills.length; w++)
        g_formfills[w].decprofilename = lpmdec_acct(g_formfills[w].profilename, !0, g_formfills[w], g_shares);
      g_formfills.sort(function (e, t) {
        return e.decprofilename.toLowerCase() < t.decprofilename.toLowerCase() ? -1 : 1;
      }),
        ("undefined" != typeof g_identity && null != g_identity) || (g_identity = "");
      for (var E = !1, w = 0; w < g_identities.length; w++)
        (g_identities[w].deciname = dec(g_identities[w].iname)), g_identities[w].iid == g_identity && (E = !0);
      if (
        (g_identities.sort(function (e, t) {
          return e.deciname.toLowerCase() < t.deciname.toLowerCase() ? -1 : 1;
        }),
        !E && "" != g_identity)
      )
        return (
          (identityFilter = ""),
          switch_identity("", !0),
          clearCache(!0, !1, !1),
          setTimeout(function () {
            loggedOut(!1, "wrongidentity");
          }, 500),
          console_log("Identity: " + g_identity),
          alertfrombg(gs("Your selected Identity no longer exists. Defaulting to 'All' and logging off.")),
          !1
        );
      rsa_acceptpendingshares(), rsa_acceptshareeautopushes();
      var k = function (e) {
          for (var t = (e = null == e ? "" : e).split("\n"), a = 0; a < t.length; a++) {
            var r = t[a].split(" "),
              s,
              r;
            2 == r.length &&
              "" != r[0] &&
              "" != r[1] &&
              ((s = r[0]), (r = r[1]), g_sites[s]) &&
              r > g_sites[s].last_touch &&
              (g_sites[s].last_touch = r);
          }
        },
        u = "";
      if (
        ((g_is_win || (g_is_mac && LPISLOC)) && have_binary_function("read_file")
          ? call_binary_function("read_file", db_prepend(g_username_hash + "_lt.cac"), k)
          : ("undefined" != typeof localStorage && (u = localStorage_getItem(db_prepend(g_username_hash + "_lt.cac"))), k(u)),
        "undefined" != typeof foundmsfi && 0 == g)
      ) {
        var R = "",
          C = 0,
          w;
        for (w in msfids) {
          for (var F = msfids[w].shareid, I = "", O = null, T = 0, D, D, U, R; T < g_shares.length; T++)
            if (g_shares[T].id == F) {
              (I = AES.bin2hex(g_shares[T].key)), (O = g_shares[T].decsharename);
              break;
            }
          null !== O &&
            ((D = new RSAKey()), parse_public_key(D, msfids[w].key)) &&
            ((D = D.encrypt(I)),
            (U = enc(O, g_shares[T].key)),
            (R =
              (R =
                (R =
                  (R += "&sharekey" + C + "=" + encodeURIComponent(D) + "&uid" + C + "=" + encodeURIComponent(msfids[w].uid)) +
                  "&shareid" +
                  C +
                  "=" +
                  encodeURIComponent(msfids[w].shareid)) +
                "&decsharename" +
                C +
                "=" +
                encodeURIComponent(O)) +
              "&encsharename" +
              C +
              "=" +
              encodeURIComponent(U)),
            C++);
        }
        (C = 0), lpMakeRequest(base_url + "process_msf.php", R, null, null);
      }
      if (
        (console_log(
          "server.js : num sites: " +
            e.length +
            " num sn: " +
            t.length +
            " num ff: " +
            g_formfills.length +
            " num identities: " +
            g_identities.length +
            " pendings: " +
            g_pendings.length +
            " num applications: " +
            g_applications.length
        ),
        recheckall(),
        update_menus(!0),
        g_runchallenge
          ? setTimeout(function () {
              runChallenge();
            }, 1e4)
          : fix_sites_secure_reprompt(),
        void 0 !== b &&
          "function" == typeof handle_pending_pushed_sites &&
          handle_pending_pushed_sites(
            b,
            function () {
              get_accts();
            },
            g_shares
          ),
        checkIconsVersion(iconsversion),
        checkBigIconsVersion(),
        checkBigIconsVersion(null, null, null, "sq"),
        checkforknownhackedsites(),
        "undefined" != typeof share_folder_group &&
          "" != share_folder_group &&
          "undefined" != typeof share_folder_id &&
          "" != share_folder_id)
      )
        for (var w = 0; w < m.length; w++)
          if (m[w].id == share_folder_id) {
            var j = share_folder_group;
            set_share_folder_group(""), set_share_folder_id(""), renameGroup(j, m[w].decsharename);
            break;
          }
      "undefined" != typeof reduxApp && reduxApp.syncVault && (reduxApp.syncVault(l, g), proxyLegacyGlobals());
    } else
      console_log("server.js : ERROR: Could not parse accts data!!!"),
        gPulledInvalidAccts
          ? lpshowError("ErrorGetAcctsMsg")
          : ((gPulledInvalidAccts = !0),
            g_loggedinonline
              ? get_accts()
              : ((y = function () {
                  get_accts(), Topics.get(Topics.MANUAL_LOGIN_FINISHED).unsubscribe(y);
                }),
                Topics.get(Topics.MANUAL_LOGIN_FINISHED).subscribe(y)));
}
function setcachedffdat() {
  for (var e, e = null == (e = localStorage_getItem("ff.dat")) ? translations : LPJSON.parse(e), t = [], a = 0; a < g_formfills.length; a++)
    t[lpmdec_acct(g_formfills[a].profilelanguage, !0, g_formfills[a], g_shares)] = 1;
  var r = [],
    a;
  for (a in e) ("en-US" != a && void 0 === t[a]) || (r[a] = e[a]);
  g_cachedffdat = LPJSON.stringify(r);
}
function overrideprefs(e) {
  var t;
  void 0 !== e.allowmasterpasswordsave && "0" == e.allowmasterpasswordsave
    ? (reduxApp.setExtensionPreferences({ rememberpassword: !1 }),
      (g_master_password_saved = !1),
      deletesavedpw(),
      localStorage_setItem(g_username_hash + ".noremember", 1))
    : localStorage_removeItem(g_username_hash + ".noremember"),
    void 0 !== e.logoffclosebrowser &&
      "-1" != e.logoffclosebrowser &&
      ((g_prefoverrides.logoffclosebrowser = e.logoffclosebrowser),
      (t = "1" === e.logoffclosebrowser),
      reduxApp.setExtensionPreferences({ logoffWhenCloseBrowser: t }),
      reduxApp.setExtensionPreferences({ logoffWhenCloseBrowserVal: 0 })),
    void 0 !== e.logoffidle &&
      "-1" != e.logoffidle &&
      (lpdbg("idle", "overriding idleLogoffVal with value from server: " + e.logoffidle),
      reduxApp.setExtensionPreferences({ idleLogoffVal: e.logoffidle })),
    void 0 !== e.noexport && "-1" != e.noexport && reduxApp.setExtensionPreferences({ noexport: e.noexport }),
    startIdleChecker(),
    "string" == typeof e.sitepwlen && "" != e.sitepwlen ? (LP.sitepwlen = JSON.parse(e.sitepwlen)) : (LP.sitepwlen = new Array()),
    void 0 !== e.hideidentities && "-1" != e.hideidentities && (g_hideidentities = "1" == e.hideidentities),
    (g_savesitestopersonal =
      "string" == typeof e.savesitestopersonal && "" != e.savesitestopersonal ? e.savesitestopersonal.split(",") : new Array());
}
function lpAcctsError() {
  L("Error xhr_accts");
}
function loglogin(t, a, r, s) {
  "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()
    ? logloginurl(t, "", a, r, s)
    : get_selected_tab(null, function (e) {
        logloginurl(t, e, a, r, s);
      });
}
function tab_is_private(e) {
  return void 0 !== e.incognito && e.incognito;
}
function loglogintab(e, t, a, r) {
  tab_is_private(t) || logloginurl(e, gettaburl(t), a, r);
}
function logloginurl(e, t, a, r, s) {
  var o = lp_get_gmt_timestamp();
  if (g_sites[e] && !reduxApp.getState().settings.features.web_client_fill) {
    if (parseFloat(o) < 5 + parseFloat(g_sites[e].last_touch)) return;
    writenewts(e, (g_sites[e].last_touch = o));
  } else if (g_securenotes[e]) {
    if (o == g_securenotes[e].last_touch) return;
    if (
      ((g_securenotes[e].last_touch = lp_get_gmt_timestamp()),
      rewritelocalfile(),
      !Policies.logNameEnabled() && !Policies.logUserNameEnabled() && !Policies.logUrlEnabled())
    )
      return;
  }
  var o = getacct(e),
    n = new PostParams().add("id", e).add("method", get_method());
  if (o) {
    var i = issharedfolder(g_shares, o.group);
    if (i && i.id === get_personal_linked()) return;
    n.add("shareType", getShareType(e));
  }
  a && n.add("source", a),
    void 0 !== r && n.add("autologin", r),
    o &&
      ((void 0 !== LPPlatform.isSPA && LPPlatform.isSPA()) ||
        !Policies.logUrlEnabled() ||
        "http://sn" == o.url ||
        n.add("u", AES.url2hex(t)),
      Policies.logNameEnabled() && n.add("n", AES.url2hex(o.name)),
      Policies.logUserNameEnabled()) &&
      n.add("un", AES.url2hex(getusernamefromacct(o))),
    i && n.add("sharedfolderid", i.id),
    s && n.add("type", s),
    lpMakeRequest(loglogin_url + "loglogin.php", n.toString(), null, null);
}
function logmpwreuse(e) {
  var e;
  (requirechangereuse() || g_loglogins) &&
    ((e = "plog=1&u=" + encodeURIComponent(e)), lpMakeRequest(loglogin_url + "loglogin.php", e, null, null));
}
function writenewts(s, o) {
  var e = function (e) {
      for (var t = (e = null == e ? "" : e).split("\n"), a = "", r = 0; r < t.length; r++)
        0 != t[r].indexOf(s + " ") && "" != t[r] && (a += t[r] + "\n");
      (a += s + " " + o + "\n"),
        (g_is_win || (g_is_mac && LPISLOC)) &&
          have_binary_function("write_file") &&
          call_binary_function("write_file", db_prepend(g_username_hash + "_lt.cac"), a),
        "undefined" != typeof localStorage && localStorage_setItem(db_prepend(g_username_hash + "_lt.cac"), a);
    },
    t = "";
  (g_is_win || (g_is_mac && LPISLOC)) && have_binary_function("read_file")
    ? call_binary_function("read_file", db_prepend(g_username_hash + "_lt.cac"), e)
    : e((t = "undefined" != typeof localStorage ? localStorage_getItem(db_prepend(g_username_hash + "_lt.cac")) : t));
}
function logformfill(s, o, n, i, l, g) {
  get_selected_tab(null, function (e) {
    if (!tab_is_private(e) && g_loglogins) {
      for (var t = new PostParams().add("ffid", s).add("method", get_method()), a = 0; a < g_formfills.length; a++)
        if (g_formfills[a].ffid == s) {
          var r = issharedfolder(g_shares, void 0 !== g_formfills[a].group ? g_formfills[a].group : "");
          r && t.add("sharedfolderid", r.id);
          break;
        }
      o && t.add("u", bin2hex(o)), n && t.add("source", n), g && t.add("approach", g), (i = i || "en-US"), t.add("lang", i);
      var e,
        e = "" === (e = get_lplanguage()) ? "en-US" : e.replace("_", "-");
      t.add("difflang", e === i ? 0 : 1),
        l && t.add("type", l),
        lpMakeRequest(base_url + "logformfill.php?" + t.toString(), "", null, null);
    }
  });
}
var PostParams = function (e) {
  for (var t in ((this.params = {}), e)) this.add(t, e[t]);
};
function logclearform(t, a) {
  get_selected_tab(null, function (e) {
    var e;
    tab_is_private(e) ||
      (g_loglogins &&
        ((e = new PostParams().add("ffclear", 1).add("method", get_method())),
        a && e.add("source", a),
        t && e.add("u", bin2hex(t)),
        lpMakeRequest(base_url + "logformfill.php?" + e.toString(), "", null, null)));
  });
}
function lpCreateKeyFileData() {
  var e, t, a, r;
  return "undefined" != typeof g_pwdeckey && null != g_pwdeckey && "undefined" != typeof g_local_key && null != g_local_key
    ? ((e = AES.bin2hex(g_local_key)),
      AES.Encrypt({ pass: g_pwdeckey, data: e, b64: !0, mode: "ecb", bits: 256 }) +
        "\n" +
        AES.Encrypt({ pass: g_local_key, data: "lastpass rocks", b64: !0, mode: "ecb", bits: 256 }))
    : "";
}
function lpWriteKeyFile() {
  console_log("server.js : lpWriteKeyFile : start");
  var e = lpCreateKeyFileData(),
    t;
  "" != e
    ? (reduxApp.getPreference("logoffWhenCloseBrowser") ||
        (console_log("server.js : lpWriteKeyFile : calling lpSaveData"), lpSaveData(e, "key")),
      (g_is_win || g_is_mac || g_is_linux) && have_binary_function("write_file")
        ? (console_log("server.js : lpWriteKeyFile : calling protect_data"),
          protect_data(e, !0, null, function (e) {
            console_log("server.js : lpWriteKeyFile : protect_data callback"),
              console_log("server.js : lpWriteKeyFile : calling binary function to write keyfile"),
              call_binary_function("write_file", db_prepend(g_username_hash + "_lpall.slps"), e);
          }))
        : console_log("server.js : lpWriteKeyFile : did not have binary function, so not writing"))
    : console_log("server.js : lpWriteKeyFile : not writing A");
}
function lpReadKeyFile(s, o, e, n) {
  console_log("server.js : lpReadKeyFile fromwebsite=" + o + " silent=" + e + " bIsLoginCheck=" + n);
  var e = opendb(),
    a =
      (createDataTable(e),
      function (e, t) {
        if ((console_log("server.js : lpReadKeyFile : reading numrows=" + t.rows.length), 0 < t.rows.length)) {
          var t = t.rows.item(0).data;
          if (t) {
            var t = t.split("\n");
            if (2 == t.length) {
              var a = null,
                a = s ? AES.hex2bin(dec(t[0], g_pwdeckey)) : g_local_key,
                r;
              if ("lastpass rocks" == dec(t[1], a)) {
                if (((g_local_key = a), (g_local_key_hex = AES.bin2hex(a)), (g_local_key_hash = SHA256(g_local_key)), s))
                  return (
                    console_log("server.js : lpReadKeyFile : worked -- calling lpLoginResponse_win2"), void lpLoginResponse_win2(s, o, n)
                  );
                loggedIn(), console_log("server.js : lpReadKeyFile worked -- calling get_accts_local"), get_accts_local(!0);
              } else console_log("server.js : lpReadKeyFile : data was corrupt A");
            } else console_log("server.js : lpReadKeyFile : data was corrupt B");
          } else console_log("server.js : lpReadKeyFile : did not find any data");
        } else console_log("server.js : lpReadKeyFile : failed to read -- calling lp_login_from_saved"), lp_login_from_saved();
        s && loggedOut(!1, "keyfailed");
      }),
    t,
    r,
    i,
    l;
  !("function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()) && e
    ? (console_log("server.js : lpReadKeyFile : reading db"),
      console_log("server.js : lpReadKeyFile : starting db transaction"),
      (r = function (e, t) {
        console_log("server.js : lpReadKeyFile failed error=" + t);
      }),
      LPISLOC
        ? (console_log("server.js : lpReadKeyFile calling read_key_from_file"),
          read_key_from_file(function (t) {
            console_log("server.js : lpReadKeyFile read_key_from_file callback"),
              a(
                tx,
                "" != t
                  ? {
                      rows: {
                        length: 1,
                        item: function (e) {
                          return { data: t };
                        }
                      }
                    }
                  : { rows: { length: 0 } }
              );
          }))
        : (console_log("server.js : lpReadKeyFile calling executeSql"),
          g_indexeddb
            ? ((i = {
                rows: {
                  item: function (e) {
                    return this[e];
                  },
                  length: 0
                }
              }),
              (e
                .transaction("LastPassData", "readonly")
                .objectStore("LastPassData")
                .openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_key")).onsuccess = function (e) {
                var e = e.target.result;
                e ? ((i.rows[i.rows.length] = e.value), i.rows.length++, e.continue()) : a(null, i);
              }))
            : e.transaction(function (e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "key"], a, r);
              })))
    : (console_log("server.js : lpReadKeyFile : failed to open database"),
      console_log("server.js : lpReadKeyFile : fallback to local storage"),
      (l = reduxApp.readKeyFromSingleUseRepository(g_username)),
      a(
        null,
        l
          ? {
              rows: {
                item: function (e) {
                  return { data: l };
                },
                length: 1
              }
            }
          : { rows: { length: 0 } }
      ));
}
function lpCheckForKey(a) {
  var e = opendb(),
    r,
    t,
    s;
  createDataTable(e),
    e &&
      ((r = function (e, t) {
        0 < t.rows.length ? a() : console_log("no key");
      }),
      (t = function (e, t) {
        console_log(t);
      }),
      LPISLOC
        ? read_key_from_file(function (t) {
            r(
              tx,
              "" != t
                ? {
                    rows: {
                      length: 1,
                      item: function (e) {
                        return { data: t };
                      }
                    }
                  }
                : { rows: { length: 0 } }
            );
          })
        : g_indexeddb
        ? ((s = {
            rows: {
              item: function (e) {
                return this[e];
              },
              length: 0
            }
          }),
          (e
            .transaction("LastPassData", "readonly")
            .objectStore("LastPassData")
            .openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_key")).onsuccess = function (e) {
            var e = e.target.result;
            e ? ((s.rows[s.rows.length] = e.value), s.rows.length++, e.continue()) : r(null, s);
          }))
        : e.transaction(function (e) {
            e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? AND type=?", [db_prepend(g_username_hash), "key"], r, t);
          }));
}
function lpReadAcctsData(v, A, w, k) {
  var x, a, e, r, t, s;
  function S(e) {
    "string" == typeof e && (a = e),
      write_history({ cmd: "get_accts_local", status_s: a, sz: x, lver: g_local_accts_version, sver: g_server_accts_version });
  }
  null == g_username || "" == g_username
    ? S("error")
    : ((x = -1),
      (a = "ok"),
      (e = opendb()),
      createDataTable(e),
      e
        ? ((r = function (e, t) {
            if (0 < t.rows.length) {
              if ((data = t.rows.item(0).data) && "" != data) {
                if ("iterationserror" == (data = checkIterationsInDataFile(data)))
                  return console_log("server.js : local accts data corrupt - key mismatch. redownloading"), S("error"), void get_accts();
                if (
                  v &&
                  (!sesame_getdata("password_offline") ||
                    "" == sesame_getdata("password_offline") ||
                    !yubikey_getdata("password_offline") ||
                    "" == yubikey_getdata("password_offline") ||
                    !multifactor_getdata("password_offline") ||
                    "" == multifactor_getdata("password_offline"))
                ) {
                  if (0 == data.substring(0, 30).indexOf("type=sesameoffline\ndata="))
                    return sesame_setdata("offline", "1"), void sesame_getotp(g_username);
                  if (
                    0 == data.substring(0, 30).indexOf("type=trueapioffline\ndata=") ||
                    0 == data.substring(0, 30).indexOf("type=omnikeyoffline\ndata=")
                  )
                    return (
                      multifactor_setdata("offline", "1"),
                      multifactor_setdata("type", 0 == data.substring(0, 30).indexOf("type=trueapioffline\ndata=") ? "trueapi" : "omnikey"),
                      void multifactor_getresponse(g_username)
                    );
                  if (0 == data.substring(0, 30).indexOf("type=yubikeyoffline\ndata="))
                    return yubikey_setdata("offline", "1"), void yubikey_getotp(g_username);
                }
                var t = null;
                sesame_getdata("password_offline") &&
                "" != sesame_getdata("password_offline") &&
                0 == data.substring(0, 30).indexOf("type=sesameoffline\ndata=")
                  ? (lpdbg("sesame", "decrypting accounts file after reading"),
                    (data = data.substring(24)),
                    (t = sesame_getdata("password_offline")))
                  : !multifactor_getdata("password_offline") ||
                    "" == multifactor_getdata("password_offline") ||
                    (0 != data.substring(0, 30).indexOf("type=trueapioffline\ndata=") &&
                      0 != data.substring(0, 30).indexOf("type=omnikeyoffline\ndata="))
                  ? yubikey_getdata("password_offline") &&
                    "" != yubikey_getdata("password_offline") &&
                    0 == data.substring(0, 30).indexOf("type=yubikeyoffline\ndata=") &&
                    (lpdbg("yubikey", "decrypting accounts file after reading"),
                    (data = data.substring(25)),
                    (t = yubikey_getdata("password_offline")))
                  : (lpdbg("multifactor", "decrypting accounts file after reading"),
                    (data = data.substring(25)),
                    (t = multifactor_getdata("password_offline"))),
                  t && (data = dec(data, hex2bin(t)));
              }
              LPISLOC && 5 <= data.length && "LPB64" == data.substring(0, 5) && (data = data.substring(5));
              try {
                (data = atob(data)), (x = data.length), w && k(data);
              } catch (e) {
                return console_log("server.js : local accts data corrupt. redownloading"), S("error"), void get_accts();
              }
              var t = get_version(data);
              if (t != g_server_accts_version && -1 != g_server_accts_version)
                console_log(
                  "server.js : local accts version is outdated: local:" + t + " server:" + g_server_accts_version + " redownloading"
                ),
                  get_accts();
              else {
                if ((L("using cached accts data"), hassites() && (!A || "refetchsharing" != A)))
                  return L("Cached data already in place, ABORT, to avoid reparse."), void S("abort");
                var t = [],
                  a = [],
                  r = {},
                  s = [],
                  o = [],
                  n = {},
                  i = [],
                  l = [],
                  g = [],
                  u = [],
                  d = [],
                  c = [],
                  _ = {},
                  p = [],
                  f = [],
                  m = [],
                  h = [],
                  b = [],
                  y = get_ff_translation("ff_captcha_regexp");
                (lp_captcha_regexp = "" != y ? new RegExp(y, "i") : null),
                  parsemobile(
                    data,
                    data.length,
                    100,
                    0,
                    postacctsload,
                    t,
                    a,
                    r,
                    s,
                    o,
                    n,
                    i,
                    !0,
                    !0,
                    null,
                    l,
                    g,
                    u,
                    d,
                    c,
                    _,
                    lp_rsaprivatekeyhex,
                    p,
                    null,
                    null,
                    null,
                    f,
                    m,
                    h,
                    b,
                    void 0,
                    void 0,
                    g_emer_sharers,
                    g_emer_sharees,
                    g_totp,
                    g_note_templates,
                    g_pending_shares,
                    g_reminders,
                    null,
                    null
                  );
              }
            } else g_username_hash && get_accts();
            S();
          }),
          (t = function (e, t) {
            console_log(t), (a = "error");
          }),
          LPISLOC
            ? read_accts_from_file(function (t) {
                r(
                  tx,
                  "" != t
                    ? {
                        rows: {
                          length: 1,
                          item: function (e) {
                            return { data: t };
                          }
                        }
                      }
                    : { rows: { length: 0 } }
                );
              })
            : g_indexeddb
            ? ((s = {
                rows: {
                  item: function (e) {
                    return this[e];
                  },
                  length: 0
                }
              }),
              (e
                .transaction("LastPassData", "readonly")
                .objectStore("LastPassData")
                .openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_accts")).onsuccess = function (e) {
                var e = e.target.result;
                e ? ((s.rows[s.rows.length] = e.value), s.rows.length++, e.continue()) : r(null, s);
              }))
            : e.transaction(function (e) {
                e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(g_username_hash), "accts"], r, t);
              }))
        : get_accts());
}
function MakeOTP() {
  var e;
  null != g_username &&
    0 != g_username.length &&
    null != g_local_key &&
    0 != g_local_key.length &&
    ((e = generateOtpData(g_username)), LP.lpMakeRequest(base_url + "otp.php", e.postData, lpOTPUploadResponse, function () {}, e.OTP));
}
function DeleteOTP() {
  DeleteFromDB("otp");
}
function DeleteFromDB(t) {
  var e;
  null != g_username &&
    "" != g_username &&
    (!LPISLOC || ("key" != t && "accts" != t)) &&
    ((e = opendb()), createDataTable(e), e) &&
    (g_indexeddb
      ? e
          .transaction("LastPassData", "readwrite")
          .objectStore("LastPassData")
          .delete(db_prepend(g_username_hash) + "_" + t)
      : e.transaction(function (e) {
          e.executeSql(
            "DELETE FROM LastPassData WHERE username_hash=? and type=?",
            [db_prepend(g_username_hash), t],
            function (e, t) {},
            function (e, t) {
              console_log(t);
            }
          );
        }));
}
function GetOTPHash(r, s, e, o) {
  r && ((r += "&outofbandsupported=1"), isDogfood()) && (r += "&dogfood=1");
  var t = opendb(),
    a,
    n,
    i,
    l;
  createDataTable(t),
    t
      ? ((a = e ? SHA256(e) : g_username_hash),
        (n = e || g_username),
        (i = function (e, t) {
          var a = "";
          0 < t.rows.length && (a = t.rows.item(0).data),
            r
              ? ((lostotphash = "" != a ? ((a = AES.hex2bin(a)), SHA256(SHA256(fix_username(n) + a) + a)) : ""),
                reduxApp.getPreference("storeLostOTP") && (r += "&lostpwotphash=" + en(lostotphash)),
                sesame_setdata("postdata", r),
                yubikey_setdata("postdata", r),
                googleauth_setdata("postdata", r),
                outofband_setdata("postdata", r),
                securityquestion_setdata("postdata", r),
                grid_setdata("postdata", r),
                multifactor_setdata("postdata", r),
                (g_lastpoll = lastlogin = new Date().getTime()),
                console_log("server.js : Requesting login.php A"),
                lpMakeRequest(base_url + "login.php", r, lpLoginResponse, lpLoginError))
              : null != s && ((lostotphash = "" == a ? "nouser" : a), sendCS(s, { cmd: "recover", otp: lostotphash }, o));
        }),
        g_indexeddb
          ? ((l = {
              rows: {
                item: function (e) {
                  return this[e];
                },
                length: 0
              }
            }),
            (t
              .transaction("LastPassData", "readonly")
              .objectStore("LastPassData")
              .openCursor(IDBKeyRange.only(db_prepend(a) + "_otp")).onsuccess = function (e) {
              var e = e.target.result;
              e ? ((l.rows[l.rows.length] = e.value), l.rows.length++, e.continue()) : i(null, l);
            }))
          : t.transaction(function (e) {
              e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(a), "otp"], i, function (e, t) {
                console_log(t);
              });
            }))
      : ((g_lastpoll = lastlogin = new Date().getTime()),
        console_log("server.js : Requesting login.php B"),
        lpMakeRequest(base_url + "login.php", r, lpLoginResponse, lpLoginError));
}
function lpOTPUploadResponse(e, t, a) {
  var e, r;
  4 == e.readyState &&
    200 == e.status &&
    e.responseXML &&
    e.responseXML.documentElement &&
    ((e = opendb()), createDataTable(e), e) &&
    (g_indexeddb
      ? (e
          .transaction("LastPassData", "readwrite")
          .objectStore("LastPassData")
          .put({
            username_hash: db_prepend(g_username_hash),
            type: "otp",
            data: AES.bin2hex(a),
            usertype: db_prepend(g_username_hash) + "_otp"
          }).onsuccess = function () {
          sendLpEvent("acc_rec_enabled", { dataSource: "Ext" });
        })
      : e.transaction(function (e) {
          e.executeSql(
            "REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, ?, ?)",
            [db_prepend(g_username_hash), "otp", AES.bin2hex(a)],
            function (e, t) {
              console_log("server.js : inserted"), sendLpEvent("acc_rec_enabled", { dataSource: "Ext" });
            },
            function (e, t) {
              console_log(t);
            }
          );
        }));
}
function savePassword(e, t, a, r, s) {
  var o = lp_gettld_url(t),
    o =
      ((0 != t.indexOf("chrome://") && 0 != t.indexOf("chrome-extension://")) || (o = t = "Browser"),
      gs("Generated Password for") + " " + o),
    n = new PostParams()
      .add("url", AES.url2hex(t))
      .add("password", enc(e))
      .add("name", enc(o))
      .add("iid", g_identity)
      .add("method", get_method())
      .add("token", g_token);
  for (prop in (r && n.add("nofill", 1), s)) n.add(prop, s[prop]);
  lpMakeRequest(base_url + "save_gen_pw.php", n.toString(), lpPopulateGeneratedPassword, null, a);
}
function lpPopulateGeneratedPassword(e, t, a) {
  if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
    var e = e.responseXML.documentElement,
      r = e.getElementsByTagName("error");
    if (0 < r.length) {
      var r = r[0].getAttribute("notloggedin");
      if (!g_loggedinoffline && r && "1" == r) return void loggedOut(!1, "lpPopulateGeneratedPassword");
    }
    var r = e.getElementsByTagName("ok"),
      e,
      s,
      o,
      a,
      o,
      e;
    0 < r.length &&
      ((e = AES.hex2url(r[0].getAttribute("url"))),
      (s = crypto_atob(r[0].getAttribute("password"))),
      (o = {
        cmd: "populategeneratedpassword",
        url: e,
        password: lpmdec(s, !0),
        nofill: r[0].getAttribute("nofill"),
        ff_currpass_regexp: get_ff_translation("ff_currpass_regexp")
      }),
      sendCS(a, o, "all"),
      ((a = createNewAcct()).tld = lp_gettld_url(e)),
      (o = gs("Generated Password for") + " " + a.tld),
      (a.aid = r[0].getAttribute("aid")),
      void 0 === g_tlds[a.tld] && (g_tlds[a.tld] = {}),
      (g_tlds[a.tld][a.aid] = !0),
      add_ident_aid(a.aid),
      (a.url = e),
      (a.name = o),
      (a.password = s),
      (a.genpw = 1),
      (g_sites[a.aid] = a),
      g_local_accts_version++,
      rewritelocalfile(),
      (e = r[0].getAttribute("accts_version")),
      compare_accounts_versions(e, g_local_accts_version) || get_accts(),
      refresh_windows());
  }
}
function addeditformfill(e, t, a, r) {
  var s = new PostParams(),
    o;
  for (o in (s.add("method", get_method()), g_token && s.add("token", g_token), g_identity && s.add("iid", g_identity), e)) s.add(o, e[o]);
  var n = !1;
  return (
    (n = void 0 !== t.group && "" != t.group ? issharedfolder(g_shares, t.group) : n) && s.add("sharedfolderid", n.id),
    lpMakeRequest(base_url + "formfill.php", s.toString(), lpAddEditFormFillResponse, r, { site: t, successCallback: a, errorCallback: r }),
    !0
  );
}
function deleteformfill(e, t, a, r, s, o, n) {
  if (
    a &&
    !frame_and_topdoc_has_same_domain(r) &&
    (ftd_report_error(r, "deleteformfill"),
    !lpConfirmYesNo(gs("Are you sure you would like to delete this Form Fill from your LastPass vault?")))
  )
    return !1;
  var i;
  if (!t)
    for (i = 0; i < g_formfills.length; i++)
      if (g_formfills[i].ffid == e) {
        if (g_formfills[i].pwprotect || g_prompts.view_ff_prompt)
          return (
            security_prompt(function () {
              deleteformfill(e, !0, a, r, s, o, n);
            }),
            !1
          );
        break;
      }
  for (var l = !1, i = 0; i < g_formfills.length; i++)
    if (g_formfills[i].ffid == e) {
      (l = issharedfolder(g_shares, void 0 !== g_formfills[i].group ? g_formfills[i].group : "")), g_formfills.splice(i, 1);
      break;
    }
  g_local_accts_version++, rewritelocalfile();
  var t = new PostParams().add("deleteext", 1).add("ffid", e).add("method", get_method()).add("iid", g_identity);
  return (
    n && t.add("source", n),
    l && t.add("sharedfolderid", l.id),
    lpMakeRequest(base_url + "formfill.php", t.toString(), lpDeleteFormFillResponse, o, { ffid: e, successCallback: s, errorCallback: o }),
    !0
  );
}
function lpAddEditFormFillResponse(e, t, a) {
  var r = a.site;
  if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
    var e = e.responseXML.documentElement,
      s = e.getElementsByTagName("error");
    if (0 < s.length) {
      var o = s[0].getAttribute("notloggedin");
      if (!g_loggedinoffline && o && "1" == o) return void loggedOut(!1, "lpAddEditFormFillResponse");
      var o = s[0].getAttribute("response");
      o && (a.errorCallback ? a.errorCallback(o) : alertfrombg(o));
    }
    var s = e.getElementsByTagName("result");
    if (0 < s.length) {
      for (
        var n = s[0].getAttribute("msg"),
          i = s[0].getAttribute("ffid"),
          o = s[0].getAttribute("cfids"),
          e = s[0].getAttribute("accts_version"),
          l,
          g = [],
          u = "" == o ? [] : o.split(","),
          d = 0,
          l = 1;
        void 0 !== r["customfield" + l + "cfid"];
        ++l
      ) {
        var c = {};
        (c.cfid = 0 != r["customfield" + l + "cfid"] ? r["customfield" + l + "cfid"] : d < u.length ? u[d++] : 0),
          (c.text = r["customfield" + l + "text"]),
          (c.value = r["customfield" + l + "value"]),
          (c.alttext = r["customfield" + l + "alttext"]),
          ("" == c.text && "" == c.value && "" == c.alttext) || g.push(c);
      }
      var s = r.cmd;
      for (delete r.cmd, delete r.deleteext, l = 1; void 0 !== r["customfield" + l + "cfid"]; ++l)
        delete r["customfield" + l + "cfid"],
          delete r["customfield" + l + "text"],
          delete r["customfield" + l + "value"],
          delete r["customfield" + l + "alttext"];
      if (((r.custom_fields = g), "add" == s)) (r.ffid = i), add_ident_ffid(i), g_formfills.push(r);
      else
        for (l = 0; l < g_formfills.length; ++l)
          if (i == g_formfills[l].ffid) {
            g_formfills[l] = r;
            break;
          }
      g_formfills.sort(function (e, t) {
        return e.decprofilename.toLowerCase() < t.decprofilename.toLowerCase() ? -1 : 1;
      }),
        g_local_accts_version++,
        rewritelocalfile(),
        compare_accounts_versions(e, g_local_accts_version) || get_accts(),
        refresh_windows(),
        reduxApp.sendAccountVersionNumber(parseInt(e)),
        a.successCallback && a.successCallback(r),
        setTimeout(function () {
          recheckpage();
        }, 50);
    }
  }
}
function lpDeleteFormFillResponse(e, t, a) {
  if (4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement) {
    var e = e.responseXML.documentElement,
      r = e.getElementsByTagName("error");
    if (0 < r.length) {
      var r = r[0].getAttribute("notloggedin");
      if (!g_loggedinoffline && r && "1" == r) return void loggedOut(!1, "lpDeleteFormFillResponse");
    }
    var r = e.getElementsByTagName("result"),
      e;
    0 < r.length &&
      ((e = r[0].getAttribute("accts_version")),
      compare_accounts_versions(e, g_local_accts_version) || get_accts(),
      refresh_windows(),
      reduxApp.sendAccountVersionNumber(parseInt(e)),
      a.successCallback && a.successCallback(),
      setTimeout(function () {
        recheckpage();
      }, 50));
  }
}
function saveSiteFromSubmit(e, t, a, r) {
  var s = new PostParams().add("auto", 1).add("method", get_method()).add("iid", g_identity),
    o = IntroTutorial.getState();
  o && o.enabled && (s.add("intour", "1"), s.add("tile", o.tile));
  try {
    for (var n in g_sites)
      if (
        g_sites[n].genpw &&
        g_sites[n].tld == t.tld &&
        lpmdec_acct(g_sites[n].password, !0, g_sites[n], g_shares) == lpmdec_acct(t.password, !0, t, g_shares)
      ) {
        s.add("delgenpwaid", n), s.add("generated", "true");
        break;
      }
  } catch (e) {}
  e += "&" + s.toString();
  var o = { url: base_url + "deliver_and_add.php", postdata: e, successCallback: a, errorCallback: r, acct: t };
  handleOfflineAccountUpdate(o, g_sites, "aid"), lpMakeRequest(o.url, e, lpSaveSiteResponse, r, o);
}
function updateFieldsFromSubmit(e, t, a, r) {
  e += "&auto=1" + get_identity_param();
  var t = { url: base_url + "gm_deliver.php", postdata: e, acct: t, successCallback: a, errorCallback: r };
  lpMakeRequest(t.url, e, lpUpdateFieldsResponse, null, t);
}
function handleOfflineAccountUpdate(e, t, a) {
  var r;
  e.successCallback &&
    isOffline() &&
    ("0" === e.acct[a] && ((r = Preferences.get("tempID") + 1), (e.acct[a] = r.toString()), Preferences.set("tempID", r)),
    (t[e.acct[a]] = e.acct),
    e.successCallback(e.acct),
    increment_local_accts_version(),
    rewritelocalfile(),
    delete e.successCallback,
    delete e.errorCallback);
}
function saveAllSite(e, t, a, r) {
  var s,
    a =
      ((e += "&" + new PostParams().add("auto", 1).add("method", get_method()).add("iid", g_identity).toString()),
      { url: base_url + "show.php", postdata: e, successCallback: a, errorCallback: r, acct: t });
  handleOfflineAccountUpdate(a, g_sites, "aid"), lpMakeRequest(a.url, e, lpSaveSiteResponse, a.errorCallback, a);
}
function saveSite(e, t, a, r) {
  var s = new PostParams().add("auto", 1).add("method", get_method()).add("iid", g_identity);
  try {
    for (var o in g_sites)
      if (
        g_sites[o].genpw &&
        g_sites[o].tld == t.tld &&
        lpmdec_acct(g_sites[o].password, !0, g_sites[o], g_shares) == lpmdec_acct(t.password, !0, t, g_shares)
      ) {
        s.add("delgenpwaid", o), s.add("generated", "true");
        break;
      }
  } catch (e) {}
  e += "&" + s.toString();
  var n = is_application(t),
    i = n ? t.appaid : t.aid,
    a = { url: base_url + (n ? "addapp.php" : "show.php"), postdata: e, successCallback: a, errorCallback: r, acct: t };
  handleOfflineAccountUpdate(a, t.sn ? g_securenotes : n ? g_applications : g_sites, n ? "appaid" : "aid"),
    lpMakeRequest(a.url, e, lpSaveSiteResponse, a.errorCallback, a);
}
function openLinkedSites(e, t, a) {
  setTimeout(function () {
    openchangepw(e, t, a);
  }, 700);
}
function lpSaveSiteResponse(e, t, a) {
  if (
    ((a.aid = a.acct.aid),
    (a.newvalues = a.acct.newvalues),
    (a.handler = lpSaveSiteResponse),
    !rsa_shareeautopushesresponse(e, a) && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement)
  ) {
    var r = a.acct,
      e = e.responseXML.documentElement,
      s = e.getElementsByTagName("error");
    if (0 < s.length) {
      var o = s[0].getAttribute("notloggedin");
      if (!g_loggedinoffline && o && "1" == o) return void loggedOut(!1, "lpSaveSiteResponse");
      var o = s[0].getAttribute("response");
      o && (a.errorCallback ? a.errorCallback(o) : alertfrombg(o));
    }
    var n = e.getElementsByTagName("result");
    if (0 < n.length) {
      var i,
        o = 0,
        l =
          (("accountreplaced" != n[0].getAttribute("msg") && !a.successCallback) || o++,
          (r.submit_id = n[0].getAttribute("submit_id")),
          (r.captcha_id = n[0].getAttribute("captcha_id")),
          (r.custom_js = n[0].getAttribute("custom_js")),
          n[0].getAttribute("attacherror"));
      for (
        l && "" != l && (alertfrombg(l), reduxApp.openAttachmentLimitDialog()),
          checkIconsVersion(),
          checkBigIconsVersion(r.posturl),
          checkBigIconsVersion(r.posturl, null, null, "sq"),
          inc = 0,
          newattach = Array();
        null != n[0].getAttribute("att_" + inc);

      )
        (newattach[n[0].getAttribute("att_" + inc)] = Array()),
          (newattach[n[0].getAttribute("att_" + inc)].storagekey = n[0].getAttribute("attstorekey_" + inc)),
          (newattach[n[0].getAttribute("att_" + inc)].size = n[0].getAttribute("attsize_" + inc)),
          inc++;
      var g = AES.hex2url(n[0].getAttribute("url")),
        u = ("!" === g[0] && (r.encryptedUrl = g), is_application(r) ? "0" === r.appaid : "0" === r.aid),
        d;
      if (u) {
        var g = n[0].getAttribute("aid"),
          c = n[0].getAttribute("urid"),
          _;
        if (((r.aid = r.fiid = g), (r.urid = c), r.fields))
          for (var g = get_ff_translation("ff_captcha_regexp"), p, p = "" != g ? new RegExp(g, "i") : null, _ = 0; _ < r.fields.length; _++)
            r.fields[_].otherfield || "1" == r.fields[_].otherlogin || (r.fields[_].urid = c),
              p &&
                (void 0 === r.captcha_id || "" == r.captcha_id) &&
                "text" == r.fields[_].type &&
                p.exec(r.fields[_].name) &&
                (r.captcha_id = r.fields[_].name);
        for (_ in (add_ident_aid(r.aid),
        r.sn
          ? (g_securenotes[r.aid] = r)
          : ((void 0 !== r.tld && "" != r.tld) || (r.tld = lp_gettld_url(r.url)),
            void 0 === g_tlds[r.tld] && (g_tlds[r.tld] = {}),
            (g_tlds[r.tld][r.aid] = !0),
            (g_sites[r.aid] = r)),
        g_sites))
          g_sites[_].genpw &&
            g_sites[_].tld == r.tld &&
            lpmdec_acct(g_sites[_].password, !0, g_sites[_], g_shares) == lpmdec_acct(r.password, !0, r, g_shares) &&
            (void 0 !== g_tlds[g_sites[_].tld] && void 0 !== g_tlds[g_sites[_].tld][_] && delete g_tlds[g_sites[_].tld][_],
            delete g_sites[_]);
        var f = e.getElementsByTagName("field");
        if (f && 0 < f.length) {
          r.fields = new Array();
          for (var _ = 0; _ < f.length; _++) {
            var m = f[_],
              h = {},
              m;
            (h.name = m.getAttribute("name")),
              (h.type = m.getAttribute("type")),
              (h.value = m.getAttribute("value")),
              is_encrypted_field(h.type)
                ? (h.value = crypto_atob(h.value))
                : ("checkbox" == h.type || "radio" == h.type) &&
                  ((h.checked = !1), (m = h.value.match(/-([0-1])$/))) &&
                  ("1" == m[1] && (h.checked = !0), (h.value = h.value.substring(0, h.value.length - 2))),
              (h.formname = ""),
              (r.fields[_] = h);
          }
          o++;
        }
      }
      if (!l && r.attacharraychanges && r.attacharraychanges.add) {
        for (var _ in r.attacharraychanges.add) {
          r.attacharraychanges.add.hasOwnProperty(_) &&
            ((r.attachpresent = "1"),
            (d = r.attacharraychanges.add[_]),
            u && ((d.parent = r.aid), (d.id = r.aid + "-" + d.id)),
            (d.size = newattach[d.id].size),
            (d.storagekey = newattach[d.id].storagekey));
        }
        reduxApp.updateAttachments({ add: r.attacharraychanges.add, remove: r.attacharraychanges.remove });
      } else l && "" != l && void 0 !== r.attacharraychanges && rollbackattacharrayadds(r.attacharraychanges);
      a.successCallback && (r.sn ? (g_securenotes[r.aid] = r) : is_application(r) ? (g_applications[r.appaid] = r) : (g_sites[r.aid] = r));
      try {
        var b = parseInt(n[0].getAttribute("accts_version"));
        reduxApp.sendAccountVersionNumber(b),
          (compare_accounts_versions(b, g_local_accts_version + 1)
            ? ((g_local_accts_version = b),
              (g_server_accts_version = b),
              rewritelocalfile(),
              lpdbgchallenge("running update because of item saved."),
              runChallenge)
            : get_accts)(),
          refresh_windows(),
          a.successCallback && (r.sn || is_application(r) || Topics.get(Topics.SITE_ADDED).publish(r), a.successCallback(r));
      } catch (s) {
        a.errorCallback && a.errorCallback(s), t && t(s);
      }
      setTimeout(function () {
        recheckpage();
      }, 50);
    }
  }
}
function lpUpdateFieldsResponse(e, t, a) {
  if (
    ((a.aid = a.acct.aid),
    (a.newvalues = a.acct.newvalues),
    (a.handler = lpUpdateFieldsResponse),
    !rsa_shareeautopushesresponse(e, a) && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement)
  ) {
    var r = a.acct,
      e = e.responseXML.documentElement,
      s = e.getElementsByTagName("error");
    if (0 < s.length) {
      var s = s[0].getAttribute("notloggedin");
      if (!g_loggedinoffline && s && "1" == s) return void loggedOut(!1, "lpUpdateFieldsResponse");
    }
    var s = e.getElementsByTagName("ok");
    if (0 < s.length) {
      var e = s[0].getAttribute("accts_version");
      if (compare_accounts_versions(e, g_local_accts_version)) {
        var o = s[0].getAttribute("urid"),
          n = "0" == r.urid,
          i = !n;
        if ((n && (r.urid = o), r.fields))
          for (var l = 0; l < r.fields.length; l++)
            ((n && !r.fields[l].otherfield && "1" != r.fields[l].otherlogin) ||
              (i && !r.fields[l].otherfield && "1" == r.fields[l].otherlogin && "0" == r.fields[l].urid)) &&
              (r.fields[l].urid = o);
      } else get_accts();
      refresh_windows(), a.successCallback && a.successCallback(a.acct);
    } else a.errorCallback && a.errorCallback();
  }
}
function addNever(e) {
  g_neverurls.neveraccounts.push(e), g_local_accts_version++, rewritelocalfile();
  var e = "url=" + en(url2hex(e));
  lpMakeRequest(base_url + "add_never.php", e, null, null);
}
function deleteGroup(e, t, a, r, s, o, n) {
  var i = void 0 === o ? null : o,
    l = ((n = n || !1), issharedfolder(g_shares, e)),
    g = "",
    u,
    u,
    u;
  for (u in g_sites) g_sites[u].group == e && (g += ("" == g ? "" : ",") + u);
  for (u in g_securenotes) g_securenotes[u].group == e && (g += ("" == g ? "" : ",") + u);
  for (u in g_applications) g_applications[u].group == e && (g += ("" == g ? "" : ",") + "app" + u);
  if ("" == g && !s) return deleteGroup("\\" + e, t, a, "deleteGroup", 1, i);
  if ("" == g && 1 == s) {
    if (null == i) return void console_log("server.js : Failed to find group and groupid is null");
    var d = null,
      g = "",
      u;
    for (u in g_sites)
      if (g_sites[u].id == i) {
        d = g_sites[u].group;
        break;
      }
    if (null == d)
      for (var u in g_securenotes)
        if (g_securenotes[u].id == i) {
          d = g_securenotes[u].group;
          break;
        }
    if (null == d)
      for (var u in g_applications)
        if (g_applications[u].id == i) {
          d = g_applications[u].group;
          break;
        }
    if (null != d) {
      for (var u in g_sites) g_sites[u].group == e && (g += ("" == g ? "" : ",") + u);
      for (var u in g_securenotes) g_securenotes[u].group == e && (g += ("" == g ? "" : ",") + u);
      for (var u in g_applications) g_applications[u].group == e && (g += ("" == g ? "" : ",") + "app" + u);
    }
    "" == g && ((g = i), console_log("server.js : Still couldn't find stuff -- just using the passed groupid : aids=" + g));
  }
  return deleteAid(g, t, !1, n, a, e);
}
function checkmultiplefolders(e) {
  for (var t = !1, a = null, r = !0, s = 0; s < e.length; s++) {
    var o = e[s],
      o = get_record(o);
    if (o) {
      var o = issharedfolder(g_shares, o.group);
      if (o) {
        if (t) {
          r = !1;
          break;
        }
        if (null == a) a = o.decsharename;
        else if (a != o.decsharename) {
          r = !1;
          break;
        }
      } else {
        if (null != a) {
          r = !1;
          break;
        }
        t = !0;
      }
    }
  }
  return (
    r ||
      alertfrombg(
        gs("Sorry, you cannot perform this operation on a mix of shared and non-shared folders, or multiple shared folders at once.")
      ),
    r
  );
}
function deleteAid(e, t, a, r, i, l, s, o) {
  if (s && !frame_and_topdoc_has_same_domain(o)) {
    var s = get_record(e),
      n = "";
    if (
      (s && ((n = s.useusername) || s.unencryptedUsername, n || s.sitename, n || s.name),
      ftd_report_error(o, "deleteaid"),
      !lpConfirmYesNo(gs("Are you sure you would like to delete this site from your LastPass vault?") + "\n\n" + n))
    )
      return !1;
  }
  var g = e.split(",");
  if (!checkmultiplefolders(g)) return !1;
  for (var u = "", d = 0, c = {}, _ = 0; _ < g.length; _++) {
    var p = g[_],
      f,
      m;
    if (is_application(p)) {
      if (!check_ident_appaid(p)) continue;
    } else if (!check_ident_aid(p)) continue;
    if (
      (is_application(p)
        ? ((f = get_record(p)), (m = !1))
        : ((f = g_sites[p]), (m = g_prompts.edit_site_prompt), f || ((m = g_prompts.edit_sn_prompt), (f = g_securenotes[p]))),
      f)
    ) {
      if (((u += ("" == u ? "" : ",") + p), void 0 !== f.sharefolderid)) {
        var d = f.sharefolderid,
          h = issharedfolder(g_shares, f.group);
        if (!checkreadonly(h)) return !1;
      }
      if (!a && (f.pwprotect || m))
        return (
          security_prompt(function () {
            deleteAid(e, t, !0, r, i);
          }),
          !1
        );
      Policies.logNameEnabled() && "http://sn" == f.url && (c[p] = f.name);
    }
  }
  if ("" == u) return !1;
  for (
    var s = gs("Are you sure you would like to delete this site?"),
      b =
        (f.genpw
          ? (s = gs("Are you sure you would like to delete this generated password?"))
          : f.sn
          ? (s = gs("Are you sure you would like to delete this secure note?"))
          : is_application(f) && (s = gs("Are you sure you would like to delete this application?")),
        f.name && f.name.length && (s += " (" + f.name + ")"),
        1 < g.length && (s = gs("Are you sure you would like to delete the selected items?")),
        f.group && "http://group" == f.url && (s = gs("Are you sure you would like to delete this folder?") + " (" + f.group + ")"),
        u.split(",")),
      y = "",
      _ = 0;
    _ < b.length;
    _++
  ) {
    var p = b[_];
    is_application(p) ||
      f.sn ||
      "http://group" == f.url ||
      (8 == (8 & g_loglogins) && (y += ("" == y ? "" : ",") + getusernamefromacct(g_sites[p])));
  }
  var o = "ajax=1&extjs=1&delete=1&aid=" + en(u);
  return (
    Policies.logNameEnabled() && "http://sn" == f.url && (o += "&deletedobjects=" + AES.url2hex(JSON.stringify(c))),
    (o += get_identity_param()),
    d && 0 != d && (o += "&sharedfolderid=" + en(d)),
    y && "" != y && (o += "&un=" + en(AES.url2hex(y))),
    lpMakeRequest(base_url + "show.php", o, function (e) {
      var t,
        a = e.responseXML.documentElement.getElementsByTagName("error"),
        r,
        a;
      if (!(0 === a.length)) return (a = a[0].getAttribute("response")), "function" == typeof l && l(a), !1;
      for (var s = 0; s < b.length; s++) {
        var o = b[s],
          n;
        is_application(o)
          ? ((n = get_appaid(o)), delete g_applications[n], reduxApp && reduxApp.removeApplication(n))
          : (f.sn || "http://group" == f.url || "object" != typeof g_tlds[f.tld] || delete g_tlds[f.tld][o],
            delete g_sites[o],
            delete g_securenotes[o]);
      }
      g_local_accts_version++, rewritelocalfile(), lpDeleteResponse(e), i && i();
    }),
    !0
  );
}
function lpDeleteResponse(e) {
  var t, e, e;
  e &&
    4 == e.readyState &&
    200 == e.status &&
    null != e.responseXML &&
    null != e.responseXML.documentElement &&
    0 < (e = e.responseXML.documentElement.getElementsByTagName("result")).length &&
    ((e = parseInt(e[0].getAttribute("accts_version"))),
    reduxApp.sendAccountVersionNumber(e),
    (compare_accounts_versions(e, g_local_accts_version) ? runChallenge : get_accts)(),
    refresh_windows());
}
function editAid(e, t, a, r) {
  var s, o;
  if (check_ident_aid(e))
    if (r) {
      if (
        (is_application(e)
          ? ((s = get_record(e)), (o = !1))
          : ((s = g_sites[e]), (o = g_prompts.edit_site_prompt), s || ((o = g_prompts.edit_sn_prompt), (s = g_securenotes[e]))),
        s)
      )
        if (a || (!s.pwprotect && !o)) {
          for (var n in ((g_site_data = new Array()), s)) g_site_data[n] = s[n];
          (g_site_data.openchpw = "1" == r && "1" == g_site_data.pwch ? 1 : 0), openURL(getchromeurl("site.html"));
        } else
          s.pwprotect
            ? security_prompt(
                function () {
                  editAid(e, t, !0, r);
                },
                null,
                null,
                !0,
                e
              )
            : security_prompt(function () {
                editAid(e, t, !0, r);
              });
    } else
      g_sites[e]
        ? LPPlatform.openTabDialog("site", { vaultItem: e })
        : is_application(e)
        ? LPPlatform.openTabDialog("application", { vaultItem: 0 === e.indexOf("app") ? e.substring(3) : e })
        : LPPlatform.openTabDialog("note", { vaultItem: e });
}
function saveFields(e, t, a, r, s) {
  if (a && a.newvalues && void 0 === a.newvalues.length) {
    var o = [],
      n;
    for (n in a.newvalues) o.push(a.newvalues[n]);
    a.newvalues = o;
  }
  ((a = a || {}).successCallback = r),
    (a.errorCallback = s),
    (a.url = base_url + "fields.php?" + e),
    (a.postdata = t),
    lpMakeRequest(a.url, t, lpSaveFieldsResponse, s, a);
}
function lpSaveFieldsResponse(e, t, a) {
  if (
    ((a.handler = lpSaveFieldsResponse),
    !rsa_shareeautopushesresponse(e, a) && 4 === e.readyState && 200 === e.status && e.responseXML && e.responseXML.documentElement)
  ) {
    var e = e.responseXML.documentElement,
      r = e.getElementsByTagName("response"),
      r,
      r =
        (0 < r.length && ((r = r[0].getAttribute("message")), console_log("server.js : Save Fields failed: " + r)),
        e.getElementsByTagName("error"));
    if (0 < r.length) {
      var r = r[0].getAttribute("notloggedin");
      if (!g_loggedinoffline && r && "1" === r) return void loggedOut(!1, "lpSaveFieldsResponse");
    }
    var r = e.getElementsByTagName("result"),
      e;
    0 < r.length &&
      ((e = r[0].getAttribute("accts_version")),
      reduxApp.sendAccountVersionNumber(parseInt(e)),
      compare_accounts_versions(e, g_local_accts_version) || get_accts(),
      refresh_windows(),
      a) &&
      a.successCallback &&
      a.successCallback();
  }
}
(PostParams.prototype.add = function (e, t, a) {
  return (
    !e ||
      "string" != typeof e ||
      ("boolean" != typeof t && "number" != typeof t && "string" != typeof t) ||
      (!a && this.params.hasOwnProperty(e)) ||
      (this.params[e] = String(t)),
    this
  );
}),
  (PostParams.prototype.remove = function (e) {
    return e && "string" == typeof e && this.params.hasOwnProperty(e) && delete this.params[e], this;
  }),
  (PostParams.prototype.clear = function () {
    return (this.params = {}), this;
  }),
  (PostParams.prototype.toString = function () {
    var e = "",
      t;
    for (t in this.params)
      this.params.hasOwnProperty(t) && ("" != e && (e += "&"), (e += encodeURIComponent(t) + "=" + encodeURIComponent(this.params[t])));
    return e;
  }),
  (fillGeneratedPassword = (function () {
    var s = function (e, t, a, r) {
      var s;
      sendCS(e, { cmd: "populategeneratedpassword", url: t, password: a }), (r.action = "formfill"), sendLpImprove("genpassword", r, !0);
    };
    return function (e, t, a, r) {
      e
        ? s(e, t, a, r)
        : get_selected_tab_data(null, function (e) {
            s(e.id, e.url, a, r);
          });
    };
  })());
var g_lastpoll = null;
function poll_server_request() {
  if (
    !(null != g_lastpoll && g_lastpoll > new Date().getTime() - 2) &&
    ((g_lastpoll = new Date().getTime()), lploggedin) &&
    null == grid_getdata("active")
  ) {
    var e = pollserver_url + "poll_server.php",
      t = "";
    if (!0 === g_prompts.improve) for (var a in g_events) g_events.hasOwnProperty(a) && (t += "&" + LP.en(a) + "=" + LP.en(g_events[a]));
    (g_events = []), lpMakeRequest(e, t, poll_server_response, null), (g_lastpoll = new Date().getTime());
  }
}
function poll_server() {
  if (!g_nopoll) {
    if (lploggedin && null == grid_getdata("active")) {
      var t = new Date().getTime(),
        e = reduxApp.getPreference("logOffAfterLoggedInVal");
      if (0 < e && t - lastlogin > 60 * e)
        return (
          lplogoff(!1, "logoffafterloggedin"),
          void setTimeout(function () {
            poll_server();
          }, 6e4)
        );
      (g_lastpollcheck = t),
        reduxApp.getPreference("logoffWhenCloseBrowser") &&
          0 < reduxApp.getPreference("logoffWhenCloseBrowserVal") &&
          reduxApp.setExtensionPreferences({ lastpollcheck: g_lastpollcheck });
      var e = 60 * reduxApp.getPreference("pollServerVal"),
        a = 1e3 * e,
        r = function (e) {
          ("locked" !== e && "idle" !== e) || (a *= g_logoff_other_ses ? 12 : 60), t - g_lastpoll < a || poll_server_request();
        };
      "undefined" != typeof chrome && void 0 !== chrome.idle ? chrome.idle.queryState(e, r) : r("active");
    }
    setTimeout(function () {
      poll_server();
    }, 6e4);
  }
}
function poll_server_response(e) {
  var t, a, r, s, o, n, o, r, i;
  4 === e.readyState &&
    (200 === e.status && null != e.responseXML && null != e.responseXML.documentElement
      ? 0 < (a = e.responseXML.documentElement.getElementsByTagName("ok")).length &&
        ((g_logoff_other_ses = "1" === a[0].getAttribute("logoff_other_ses")),
        (r = parseInt(a[0].getAttribute("accts_version"))),
        (s = a[0].getAttribute("newbreach")),
        (o = a[0].getAttribute("newalert")),
        (n = a[0].getAttribute("newbreach_msg")),
        "true" === o && handle_new_alerts(a[0]),
        (g_server_accts_version = r),
        reduxApp.sendAccountVersionNumber(g_server_accts_version),
        r > g_local_accts_version
          ? (lplog("challenge: Poll server triggered a security challenge score update via version"),
            g_accountVersionTracking && sendLpImprove("poll_server_response", { diff: r - g_local_accts_version }),
            get_accts(),
            ((g_iscompanyadmin &&
              reduxApp.getState().settings.features.license_expiration &&
              null !== g_company_license_exp_days &&
              g_company_license_exp_days <= 7) ||
              (null !== g_company_trial_exp_days && g_company_trial_exp_days <= 7)) &&
              getCompanyLicenseData())
          : lplog("poll_server: Accts (blob) was not updated because local account version: " + g_local_accts_version + " >= " + r),
        (lpsendmpstrength = null !== a[0].getAttribute("sendmpstrength")),
        (o = a[0].getAttribute("note_title"))) &&
        o.length &&
        ((r = a[0].getAttribute("note_text")),
        (i = a[0].hasAttribute("note_url") ? a[0].getAttribute("note_url") : null),
        LPNotifications.createNotification({
          title: o,
          message: r,
          callback: function () {
            openURL(i);
          }
        }))
      : logger.error("Problem in poll_server_response. status=" + e.status, { "req.status": e.status }));
}
function upgrade_response(e) {
  var t, a;
  4 == e.readyState &&
    (200 == e.status && null != e.responseXML && null != e.responseXML.documentElement
      ? ((a = e.responseXML.documentElement.getElementsByTagName("updatecheck")),
        (upgradeurl =
          0 < a.length ? ((upgrade = "1" == a[0].getAttribute("upgrade")), a[0].getAttribute("codebase")) : ((upgrade = !1), "")),
        g_ischrome &&
          ((g_notification_type = "upgrade"),
          (g_notification_data = { upgrade: upgrade, upgradeurl: upgradeurl }),
          sendTS({ cmd: "notification", type: "upgrade" })))
      : logger.error("Problem in upgrade_response. status=" + e.status, { "req.status": e.status }));
}
function changePassword(e, t, a, r, s) {
  debug && console_log("changePassword called");
  for (var o = [], n = (o.push(e), new Array()), i = 0, l = 0; l < t.length; l++)
    g_sites[t[l]]
      ? (lpmdec_acct(g_sites[t[l]].password, !0, g_sites[t[l]], g_shares) != e && (n[n.length] = t[l]),
        void 0 !== g_sites[t[l]].sharefolderid && (i = g_sites[t[l]].sharefolderid))
      : debug && console_error("skipping bad aid in changePassword " + t[l]);
  if (0 != (t = n).length) {
    g_pending_pw_change = {};
    for (var g = "xml=1", u = new Array(), d = "", l = 0; l < t.length; l++) {
      var c = 0 < l ? l : "",
        g =
          (g = (g += "&username" + c + "=dummy") + ("&password" + c + "=" + LP.en(lpenc_acct(e, g_sites[t[l]], g_shares)))) +
          ("&id" + c + "=" + LP.en(t[l]));
      8 == (8 & g_loglogins) && (d += ("" == d ? "" : ",") + getusernamefromacct(g_sites[t[l]])),
        o.push(e),
        (g_pending_pw_change[t[l]] = lpenc_acct(e, g_sites[t[l]], g_shares));
      try {
        lp_in_array(g_sites[t[l]].tld, u) || (u[u.length] = g_sites[t[l]].tld);
      } catch (e) {}
    }
    try {
      for (var l in g_sites)
        if (g_sites[l].genpw && lp_in_array(g_sites[l].tld, u) && lpmdec_acct(g_sites[l].password, !0, g_sites[l], g_shares) == e) {
          g += "&delgenpwaid=" + LP.en(l);
          break;
        }
    } catch (e) {}
    0 != i && (g += "&sharedfolderid=" + en(i)), "" != d && (g += "&un=" + en(AES.url2hex(d))), void 0 !== a && a && (g += "&autochange=1");
    var a = { aid: 0, postdata: g, url: base_url + "change_pw.php", newvalues: o, successCallback: r, errorCallback: s };
    lpMakeRequest(a.url, g, lpChangePasswordResponse, s, a);
  }
}
function lpChangePasswordResponse(e, t, a) {
  if (
    ((a.handler = lpChangePasswordResponse),
    !rsa_shareeautopushesresponse(e, a) && 4 == e.readyState && 200 == e.status && e.responseXML && e.responseXML.documentElement)
  ) {
    var r,
      s = e.responseXML.documentElement.getElementsByTagName("ok");
    if (0 < s.length) {
      for (
        var e,
          o =
            (debug && ((e = new Date().getTime()), console_log("received ok response from Password Change at " + e)),
            crypto_atob(s[0].getAttribute("newpassword"))),
          n = new Array(),
          i = "",
          l;
        s[0].hasAttribute("oldpassword" + i);

      ) {
        var g = s[0].getAttribute("id" + i),
          u = crypto_atob(s[0].getAttribute("oldpassword" + i)),
          d = g_sites[g];
        if (
          (lp_in_array(d.tld, n) || (n[n.length] = d.tld),
          debug && L("acct.password=" + d.password + " oldpassword=" + u + " newpassword=" + o),
          (d.password != u && lpmdec_acct(d.password, !0, d, g_shares) != lpmdec_acct(u, !0, d, g_shares)) || (d.password = o),
          d.fields)
        )
          for (var l = 0; l < d.fields.length; l++)
            "password" != d.fields[l].type ||
              (d.fields[l].value != u && lpmdec_acct(d.fields[l].value, !0, d, g_shares) != lpmdec_acct(u, !0, d, g_shares)) ||
              (d.fields[l].value = o);
        delete g_pending_pw_change[d.aid], (d.last_pwchange_gmt = parseInt(new Date().getTime() / 1e3)), "" == i ? (i = 1) : i++;
      }
      for (l in g_sites)
        g_sites[l].genpw &&
          lp_in_array(g_sites[l].tld, n) &&
          lpmdec_acct(g_sites[l].password, !0, g_sites[l], g_shares) == lpmdec(o, !0) &&
          (verbose_log(
            sprintf(
              "CHG: deleting generated password entry id=%s for password=%s",
              l,
              g_show_pw_in_logs || g_isadmin ? lpmdec(o, !0) : "REDACTED"
            )
          ),
          void 0 !== g_tlds[g_sites[l].tld] && void 0 !== g_tlds[g_sites[l].tld][l] && delete g_tlds[g_sites[l].tld][l],
          delete g_sites[l]);
      g_local_accts_version++, rewritelocalfile(), a.successCallback && a.successCallback();
      var e = parseInt(s[0].getAttribute("accts_version"));
      compare_accounts_versions(e, g_local_accts_version) || get_accts();
    } else a.errorCallback && a.errorCallback();
  }
}
var lpyubidata = {};
function yubikey_getotp(e, t) {
  grid_setdata("active", "1"), lpdbg("yubikey", "Asking user for fresh otp");
  var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
    t = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
    r = getBG(),
    r = void 0 !== r && r && (r.g_language, 1) ? r.g_language : "en_US",
    r = encodeURIComponent(r),
    s,
    o = "",
    n = e;
  return (
    openURL(
      getchromeurl(
        "lp_toolstrip.html?browseraction=1&yubikey=1&trustexpired=" +
          encodeURIComponent(a) +
          "&trustlabel=" +
          encodeURIComponent(t) +
          "&lplanguage=" +
          r
      ),
      function () {},
      null,
      !1,
      !1,
      !1,
      !1,
      !0
    ),
    o
  );
}
function yubikey_setdata(e, t) {
  lpyubidata[e] = t;
}
function yubikey_getdata(e) {
  return void 0 === lpyubidata[e] ? null : lpyubidata[e];
}
function yubikey_cleardata() {
  lpdbg("yubikey", "clearing data"), (lpyubidata = {});
}
function yubikey_auth(e, t, a) {
  var r, r, a, s, o, o, e;
  grid_setdata("active", null),
    "" != e
      ? "1" == yubikey_getdata("offline")
        ? ((r = e.substring(0, 12)),
          yubikey_setdata("password_offline", (e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + r) + r)))),
          offlineloginsuccessful("offline", 0, a),
          lpReadAcctsData(),
          yubikey_setdata("offline", "0"))
        : ((o = s = a = r = null),
          (o = yubikey_getdata("postdata")
            ? ((r = yubikey_getdata("postdata") + "&otp=" + encodeURIComponent(e)), (a = "login.php"), (s = lpLoginResponse), lpLoginError)
            : ((r = sesame_getdata("logincheckpostdata") + "&otp=" + encodeURIComponent(e)),
              (a = "login_check.php"),
              (s = lpLoginCheckResponse),
              lpLoginCheckError)),
          "" != t && (r += "&trustlabel=" + encodeURIComponent(t)),
          (e = yubikey_getdata("fromwebsite")),
          console_log("server.js : Requesting " + a + " C"),
          lpMakeRequest(base_url + a, r, s, o, e))
      : (g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "yubikey_auth_error"));
}
var lpgoogleauthdata = {};
function googleauth_getotp(e, t) {
  grid_setdata("active", "1"), lpdbg("googleauth", "Asking user for fresh otp");
  var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
    t = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
    r = getBG(),
    r = void 0 !== r && r && (r.g_language, 1) ? r.g_language : "en_US",
    r = encodeURIComponent(r),
    s,
    o = "",
    n = e;
  return (
    openURL(
      getchromeurl(
        "lp_toolstrip.html?browseraction=1&googleauth=1&trustexpired=" +
          encodeURIComponent(a) +
          "&trustlabel=" +
          encodeURIComponent(t) +
          "&lplanguage=" +
          r
      ),
      function () {},
      null,
      !1,
      !1,
      !1,
      !1,
      !0
    ),
    o
  );
}
function microsoftauth_getotp(e, t) {
  grid_setdata("active", "1"), lpdbg("microsoftauth", "Asking user for fresh otp");
  var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
    t = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
    r = getBG(),
    r = void 0 !== r && r && (r.g_language, 1) ? r.g_language : "en_US",
    r = encodeURIComponent(r),
    s,
    o = "",
    n = e;
  return (
    openURL(
      getchromeurl(
        "lp_toolstrip.html?browseraction=1&googleauth=1&microsoftauth=1&trustexpired=" +
          encodeURIComponent(a) +
          "&trustlabel=" +
          encodeURIComponent(t) +
          "&lplanguage=" +
          r
      ),
      function () {},
      null,
      !1,
      !1,
      !1,
      !1,
      !0
    ),
    o
  );
}
function googleauth_setdata(e, t) {
  lpgoogleauthdata[e] = t;
}
function googleauth_getdata(e) {
  return void 0 === lpgoogleauthdata[e] ? null : lpgoogleauthdata[e];
}
function googleauth_cleardata() {
  lpdbg("googleauth", "clearing data"), (lpgoogleauthdata = {});
}
function googleauth_auth(e, t) {
  var a, a, r, s, o, o, e;
  grid_setdata("active", null),
    "" != e
      ? "1" == googleauth_getdata("offline")
        ? ((a = e.substring(0, 12)),
          googleauth_setdata("password_offline", (e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + a) + a)))),
          offlineloginsuccessful("offline", 0),
          lpReadAcctsData(),
          googleauth_setdata("offline", "0"))
        : ((o = s = r = a = null),
          (o = googleauth_getdata("postdata")
            ? ((a = googleauth_getdata("postdata") + "&otp=" + encodeURIComponent(e)),
              (r = "login.php"),
              (s = lpLoginResponse),
              lpLoginError)
            : ((a = sesame_getdata("logincheckpostdata") + "&otp=" + encodeURIComponent(e)),
              (r = "login_check.php"),
              (s = lpLoginCheckResponse),
              lpLoginCheckError)),
          "" != t && (a += "&trustlabel=" + encodeURIComponent(t)),
          (e = googleauth_getdata("fromwebsite")),
          console_log("server.js : Requesting " + r + " C"),
          lpMakeRequest(base_url + r, a, s, o, e))
      : (g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "googleauth_auth_error"));
}
var lpoutofbanddata = {},
  g_last_otpcheck;
function outofband_getotp(e, t) {
  grid_setdata("active", "1"), lpdbg("outofband", "Asking user for fresh otp");
  var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
    r = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
    s = getBG(),
    s = void 0 !== s && s && (s.g_language, 1) ? s.g_language : "en_US",
    s = encodeURIComponent(s),
    o,
    n = "",
    i = e;
  return (
    (g_trustlabel = ""),
    "1" == t.getAttribute("preferduowebsdk")
      ? (lpTurnOffIcon(),
        openbaseurl(
          "duo.php?canexpire=1&cansetuuid=1&username=" +
            encodeURIComponent(g_username) +
            "&trustexpired=" +
            encodeURIComponent(a) +
            "&trustlabel=" +
            encodeURIComponent(r)
        ))
      : openURL(
          getchromeurl(
            "lp_toolstrip.html?browseraction=1&outofband=1&trustexpired=" +
              encodeURIComponent(t.getAttribute("trustexpired")) +
              "&trustlabel=" +
              encodeURIComponent(t.getAttribute("trustlabel")) +
              "&capabilities=" +
              encodeURIComponent(t.getAttribute("capabilities")) +
              "&allowtrust=" +
              encodeURIComponent(t.getAttribute("allowtrust")) +
              "&smshash=" +
              encodeURIComponent(t.getAttribute("smshash")) +
              "&smstime=" +
              encodeURIComponent(t.getAttribute("smstime")) +
              "&smsuid=" +
              encodeURIComponent(t.getAttribute("smsuid")) +
              "&outofbandimage=" +
              encodeURIComponent(AES.bin2hex(t.getAttribute("outofbandimage"))) +
              "&sms_nextcode=" +
              encodeURIComponent(t.getAttribute("sms_nextcode")) +
              "&textoverride=" +
              encodeURIComponent(t.getAttribute("textoverride")) +
              "&lplanguage=" +
              s
          ),
          function () {},
          null,
          !1,
          !1,
          !1,
          !1,
          !0
        ),
    n
  );
}
function outofband_setdata(e, t) {
  lpoutofbanddata[e] = t;
}
function outofband_getdata(e) {
  return void 0 === lpoutofbanddata[e] ? null : lpoutofbanddata[e];
}
function outofband_cleardata() {
  lpdbg("outofband", "clearing data"), (lpoutofbanddata = {});
}
var g_otpcheck_complete = !1,
  g_otpwin_closed = !1,
  g_trustlabel = "";
function outofband_handler(e, t, a) {
  var r, r, s, r;
  g_otpwin_closed ||
    (e && 4 == e.readyState && 200 == e.status && 0 < e.responseText.indexOf("outofbandrequired")
      ? null != e.responseXML &&
        null != e.responseXML.documentElement &&
        0 < (r = e.responseXML.documentElement.getElementsByTagName("error")).length &&
        (r = r[0].getAttribute("retryid")) &&
        "" != r &&
        5e3 <= new Date().getTime() - g_last_otpcheck &&
        ((r = outofband_getdata("postdata") + "&outofbandrequest=1&outofbandretry=1&outofbandretryid=" + encodeURIComponent(r)),
        (g_last_otpcheck = new Date().getTime()),
        lpMakeRequest(base_url + "login.php", r, outofband_handler, t, a))
      : ((g_otpcheck_complete = !0),
        closecurrenttab("lp_toolstrip.html?browseraction=1&outofband=1"),
        lpLoginResponse(e, t, a),
        "" != g_trustlabel &&
          null != e.responseXML &&
          null != e.responseXML.documentElement &&
          0 < e.responseXML.documentElement.getElementsByTagName("ok").length &&
          getuuid(function (e) {
            lpMakeRequest(
              base_url + "trust.php",
              "canexpire=1&cansetuuid=1&uuid=" + encodeURIComponent(e) + "&trustlabel=" + encodeURIComponent(g_trustlabel),
              function (e) {
                var e, e;
                e &&
                  4 == e.readyState &&
                  200 == e.status &&
                  e.responseXML &&
                  e.responseXML.documentElement &&
                  (e = e.responseXML.documentElement.getElementsByTagName("ok")) &&
                  0 < e.length &&
                  e[0].hasAttribute("trustuuid") &&
                  (e = e[0].getAttribute("trustuuid")) &&
                  "" != e &&
                  setuuid(e, g_username_hash);
              }
            ),
              (g_trustlabel = "");
          }, g_username_hash)));
}
function outofband_auth(e, t) {
  var a, a, r, s, o, o, t;
  grid_setdata("active", null),
    "" != e
      ? ((g_otpwin_closed = g_otpcheck_complete = "dummy" != e),
        "1" == outofband_getdata("offline")
          ? ((a = e.substring(0, 12)),
            outofband_setdata("password_offline", (e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + a) + a)))),
            offlineloginsuccessful("offline", 0),
            lpReadAcctsData(),
            outofband_setdata("offline", "0"))
          : ((o = s = r = a = null),
            (o = outofband_getdata("postdata")
              ? ((a = outofband_getdata("postdata")), (r = "login.php"), (s = lpLoginResponse), lpLoginError)
              : ((a = sesame_getdata("logincheckpostdata")), (r = "login_check.php"), (s = lpLoginCheckResponse), lpLoginCheckError)),
            "dummy" != e && (a += "&otp=" + encodeURIComponent(e)),
            "" != t && (a += "&trustlabel=" + encodeURIComponent(t)),
            (a += "&outofbandrequest=1"),
            (t = outofband_getdata("fromwebsite")),
            console_log("server.js : Requesting " + r + " C"),
            (g_last_otpcheck = new Date().getTime()),
            lpMakeRequest(base_url + r, a, "dummy" == e ? outofband_handler : lpLoginResponse, o, t)))
      : g_otpcheck_complete ||
        ((g_otpwin_closed = !0), g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "outofband_auth_error"));
}
var lpsecurityquestiondata = {};
function securityquestion_getotp(e, t) {
  var a, r, r, s, a, o;
  if (!t.getAttribute("redirecturl"))
    return (
      (a = getBG()),
      (r = void 0 !== a && a && (a.g_language, 1) ? a.g_language : "en_US"),
      (r = encodeURIComponent(r)),
      grid_setdata("active", "1"),
      lpdbg("securityquestion", "Asking user for fresh otp"),
      (a = ""),
      (o = e),
      getuuid(function (e) {
        openURL(
          getchromeurl(
            "lp_toolstrip.html?browseraction=1&securityquestion=1&trustexpired=" +
              encodeURIComponent(t.getAttribute("trustexpired")) +
              "&trustlabel=" +
              encodeURIComponent(t.getAttribute("trustlabel")) +
              "&uuid=" +
              encodeURIComponent(e) +
              "&question=" +
              encodeURIComponent(t.getAttribute("question")) +
              "&autotrust=" +
              encodeURIComponent(t.getAttribute("autotrust")) +
              "&hidedisable=" +
              encodeURIComponent(t.getAttribute("hidedisable")) +
              "&reseturl=" +
              encodeURIComponent(t.getAttribute("reseturl")) +
              "&lplanguage=" +
              r
          ),
          function () {},
          null,
          !1,
          !1,
          !1,
          !1,
          !0
        ),
          securityquestion_setdata("reseturl", t.getAttribute("reseturl"));
      }, g_username_hash),
      a
    );
  openURL(t.getAttribute("redirecturl"));
}
function securityquestion_setdata(e, t) {
  lpsecurityquestiondata[e] = t;
}
function securityquestion_getdata(e) {
  return void 0 === lpsecurityquestiondata[e] ? null : lpsecurityquestiondata[e];
}
function securityquestion_cleardata() {
  lpdbg("securityquestion", "clearing data"), (lpsecurityquestiondata = {});
}
function securityquestion_auth(e, t) {
  var a, a, r, s, o, o, e;
  grid_setdata("active", null),
    "" != e
      ? "1" == securityquestion_getdata("offline")
        ? ((a = e.substring(0, 12)),
          securityquestion_setdata("password_offline", (e = SHA256(SHA256(SHA256(fix_username("LastPassIsGreat") + a) + a)))),
          offlineloginsuccessful("offline", 0),
          lpReadAcctsData(),
          securityquestion_setdata("offline", "0"))
        : ((o = s = r = a = null),
          (o = securityquestion_getdata("postdata")
            ? ((a = securityquestion_getdata("postdata") + "&otp=" + encodeURIComponent(e)),
              (r = "login.php"),
              (s = lpLoginResponse),
              lpLoginError)
            : ((a = sesame_getdata("logincheckpostdata") + "&otp=" + encodeURIComponent(e)),
              (r = "login_check.php"),
              (s = lpLoginCheckResponse),
              lpLoginCheckError)),
          "" != t && (a += "&trustlabel=" + encodeURIComponent(t)),
          (e = securityquestion_getdata("fromwebsite")),
          console_log("server.js : Requesting " + r + " C"),
          lpMakeRequest(base_url + r, a, s, o, e))
      : (g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "securityquestion_auth_error"));
}
var lpsesamedata = {},
  lpsesameotp = null;
function sesame_setotp(e) {
  lpdbg("sesame", "browser forwarded OTP => sesame_setotp called"), (lpsesameotp = e);
}
function sesame_getotp(e, t) {
  var a;
  if ((grid_setdata("active", "1"), e && lpsesameotp))
    return (
      lpdbg("sesame", "Not requesting OTP - using value passed to browser"), (a = lpsesameotp), (lpsesameotp = null), sesame_auth(a, ""), a
    );
  lpdbg("sesame", "Asking user for fresh otp");
  var a = t && t.getAttribute("trustexpired") ? t.getAttribute("trustexpired") : 0,
    t = t && t.getAttribute("trustlabel") ? t.getAttribute("trustlabel") : "",
    r = getBG(),
    r = void 0 !== r && r && (r.g_language, 1) ? r.g_language : "en_US",
    r = encodeURIComponent(r),
    s,
    o = "",
    n = e;
  return (
    openURL(
      getchromeurl(
        "lp_toolstrip.html?browseraction=1&sesame=1&trustexpired=" +
          encodeURIComponent(a) +
          "&trustlabel=" +
          encodeURIComponent(t) +
          "&lplanguage=" +
          r
      ),
      function () {},
      null,
      !1,
      !1,
      !1,
      !1,
      !0
    ),
    o
  );
}
function sesame_setdata(e, t) {
  lpsesamedata[e] = t;
}
function sesame_getdata(e) {
  return void 0 === lpsesamedata[e] ? null : lpsesamedata[e];
}
function sesame_cleardata() {
  lpdbg("sesame", "clearing data"), (lpsesamedata = {});
}
function sesame_auth(e, t) {
  var a, r, s, o, o, e;
  grid_setdata("active", null),
    "" != e
      ? "1" == sesame_getdata("offline")
        ? (sesame_setdata("password_offline", e), offlineloginsuccessful("offline", 0), lpReadAcctsData(), sesame_setdata("offline", "0"))
        : ((o = s = r = a = null),
          (o = sesame_getdata("postdata")
            ? ((a = sesame_getdata("postdata") + "&sesameotp=" + encodeURIComponent(e)),
              (r = "login.php"),
              (s = lpLoginResponse),
              lpLoginError)
            : ((a = sesame_getdata("logincheckpostdata") + "&sesameotp=" + encodeURIComponent(e)),
              (r = "login_check.php"),
              (s = lpLoginCheckResponse),
              lpLoginCheckError)),
          "" != t && (a += "&trustlabel=" + encodeURIComponent(t)),
          (e = sesame_getdata("fromwebsite")),
          console_log("server.js : Requesting " + r + " D"),
          lpMakeRequest(base_url + r, a, s, o, e))
      : (g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "sesame_auth_error"));
}
var lpgriddata = {},
  lpgridvalues = null;
function grid_getvalues(e, t, a) {
  var r = getBG(),
    r = void 0 !== r && r && (r.g_language, 1) ? r.g_language : "en_US",
    r = encodeURIComponent(r);
  grid_setdata("active", "1"),
    openURL(
      getchromeurl(
        "lp_toolstrip.html?browseraction=1&grid=1&trustexpired=" +
          encodeURIComponent(a.getAttribute("trustexpired")) +
          "&trustlabel=" +
          encodeURIComponent(a.getAttribute("trustlabel")) +
          "&challenge=" +
          encodeURIComponent(t)
      ) +
        "&lplanguage=" +
        r
    );
}
function grid_setdata(e, t) {
  lpgriddata[e] = t;
}
function grid_getdata(e) {
  return void 0 === lpgriddata[e] ? null : lpgriddata[e];
}
function grid_cleardata() {
  lpdbg("grid", "clearing data"), (lpgriddata = {});
}
function grid_auth(e, t) {
  var a, r, s, o, o, e;
  grid_setdata("active", null),
    "" != e
      ? ((o = s = r = a = null),
        (o = grid_getdata("postdata")
          ? ((a = grid_getdata("postdata") + "&gridresponse=" + encodeURIComponent(e)),
            (r = "login.php"),
            (s = lpLoginResponse),
            lpLoginError)
          : ((a = sesame_getdata("logincheckpostdata") + "&gridresponse=" + encodeURIComponent(e)),
            (r = "login_check.php"),
            (s = lpLoginCheckResponse),
            lpLoginCheckError)),
        "" != t && (a += "&trustlabel=" + encodeURIComponent(t)),
        grid_getdata("wxsessid") && (a += "&wxsessid=" + encodeURIComponent(grid_getdata("wxsessid"))),
        (e = grid_getdata("fromwebsite")),
        console_log("server.js : Requesting " + r + " E"),
        lpMakeRequest(base_url + r, a, s, o, e))
      : (g_local_key && lpshowError("LoginError", !1, !0), loggedOut(!1, "grid_auth_error"));
}
var lpmultifactordata = {},
  lpmultifactorresponse = null;
function multifactor_getresponse(e, t) {
  var a = "",
    r = "",
    s = (multifactor_setdata("active", "1"), multifactor_getdata("type")),
    o = "",
    n =
      (((o = multifactor_getdata("type") == s ? multifactor_getdata("password_offline") : o) && 64 == o.length) ||
        (o = SHA256(SHA256(fix_username(e) + s))),
      function () {
        if ((multifactor_setdata("password_offline", o), multifactor_setdata("type", s), t)) {
          if ("omnikey" == s)
            return void omnikey_get_pin(function (e) {
              have_binary_function("omnikey_decrypt")
                ? call_binary_function("omnikey_decrypt", t, e, function (e) {
                    multifactor_auth((a = e), "");
                  })
                : multifactor_auth(a, "");
            });
          a = "" != o ? SHA256(o + t) : "";
        } else a = o;
        multifactor_auth(a, "");
      });
  (o && 64 == o.length) || "trueapi" != s || !have_binary_function("trueapi_get_hash")
    ? n()
    : call_binary_function("trueapi_get_hash", e, function (e) {
        (o = e), n();
      });
}
function multifactor_setdata(e, t) {
  lpmultifactordata[e] = t;
}
function multifactor_getdata(e) {
  return void 0 === lpmultifactordata[e] ? null : lpmultifactordata[e];
}
function multifactor_cleardata() {
  lpdbg("multifactor", "clearing data"), (lpmultifactordata = {});
}
function multifactor_auth(e, t) {
  var a, r, s, o, o, e;
  multifactor_setdata("active", null),
    "" != e
      ? "1" == multifactor_getdata("offline")
        ? (multifactor_setdata("password_offline", e),
          "omnikey" != multifactor_getdata("type") && multifactor_setdata("type", "trueapi"),
          offlineloginsuccessful("offline", 0),
          lpReadAcctsData(),
          multifactor_setdata("offline", "0"))
        : ((o = s = r = a = null),
          (o = multifactor_getdata("postdata")
            ? ((a = multifactor_getdata("postdata") + "&multifactorresponse=" + encodeURIComponent(e)),
              (r = "login.php"),
              (s = lpLoginResponse),
              lpLoginError)
            : ((a = sesame_getdata("logincheckpostdata") + "&multifactorresponse=" + encodeURIComponent(e)),
              (r = "login_check.php"),
              (s = lpLoginCheckResponse),
              lpLoginCheckError)),
          "" != t && (a += "&trustlabel=" + encodeURIComponent(t)),
          multifactor_getdata("wxsessid") && (a += "&wxsessid=" + encodeURIComponent(multifactor_getdata("wxsessid"))),
          multifactor_getdata("type") && (a += "&type=" + encodeURIComponent(multifactor_getdata("type"))),
          (e = multifactor_getdata("fromwebsite")),
          console_log("server.js : Requesting " + r + " F"),
          lpMakeRequest(base_url + r, a, s, o, e))
      : (g_local_key && lpshowError("LoginError", !1, !0, !1, get_multifactor_disable_url(g_username, multifactor_getdata("type"))),
        loggedOut(!1, "multifactor_auth_error"));
}
function multifactor_response(e, t) {
  lpdbg("multifactor", "in multifactor_response"),
    void 0 !== e.callback ? (lpdbg("multifactor", "calling callback"), e.callback(t)) : sendCS(e.tabid, t, e.docnum);
}
function lpSetupMultifactorResponse(e, t, a) {
  if ((lpdbg("multifactor", "setupmultifactorresponse: " + e.readyState), 4 == e.readyState)) {
    if (
      (lpdbg("multifactor", "setupmultifactorresponse: " + e.status),
      200 == e.status && null != e.responseXML && null != e.responseXML.documentElement)
    ) {
      var r,
        e = e.responseXML.documentElement.getElementsByTagName("ok");
      if (0 < e.length) {
        var s = e[0].getAttribute("type"),
          o = (lpdbg("multifactor", "setupmultifactorresponse: " + s), e[0].getAttribute("hash"));
        if ("trueapi" == s) {
          if (void 0 !== a.password) {
            if (have_binary_function("trueapi_store_default_login"))
              return void call_binary_function("trueapi_store_hash", g_username, o, function (e) {
                var t;
                e
                  ? ((t = function (e) {
                      e == o
                        ? call_binary_function("trueapi_store_default_login", g_username, a.password, o, function (e) {
                            e
                              ? (setsinglefactortype(s),
                                "1" != a.silent && multifactor_response(a, { cmd: "setupsinglefactor", result: "done" }))
                              : lpSetupMultifactorError(a);
                          })
                        : lpSetupMultifactorError(a);
                    }),
                    "1" == a.silent
                      ? t(o)
                      : call_binary_function("trueapi_get_hash", g_username, function (e) {
                          t(e);
                        }))
                  : lpSetupMultifactorError(a);
              });
          } else if ("1" != a.silent && have_binary_function("trueapi_store_hash"))
            return void call_binary_function("trueapi_store_hash", g_username, o, function (e) {
              e
                ? call_binary_function("trueapi_get_hash", g_username, function (e) {
                    e == o ? multifactor_response(a, { cmd: "setupmultifactor", result: "done" }) : lpSetupMultifactorError(a);
                  })
                : lpSetupMultifactorError(a);
            });
        } else if ("vtapi" == s) {
          if (have_binary_function("lpvt_store_data"))
            return void call_binary_function(
              "lpvt_store_data",
              encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password),
              gs("Swipe finger"),
              gs("Swipe your finger on the fingerprint sensor"),
              gs("Cancel"),
              gs("Swipe current user's finger"),
              function (e) {
                e
                  ? (setsinglefactortype(s), "1" != a.silent && multifactor_response(a, { cmd: "setupsinglefactor", result: "done" }))
                  : lpSetupMultifactorError(a);
              }
            );
        } else if ("validity" == s) {
          if (have_binary_function("validity_store_data"))
            return void call_binary_function(
              "validity_store_data",
              encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password),
              gs("Swipe finger"),
              gs("Swipe your finger on the fingerprint sensor"),
              gs("Cancel"),
              function (e) {
                e
                  ? (setsinglefactortype(s), "1" != a.silent && multifactor_response(a, { cmd: "setupsinglefactor", result: "done" }))
                  : lpSetupMultifactorError(a);
              }
            );
        } else if ("winbio" == s) {
          if (have_binary_function("winbio_store_data"))
            return void call_binary_function("winbio_has_fingerprints", function (e) {
              lpdbg("multifactor", "winbio_has_fingerprints: " + e),
                e
                  ? call_binary_function(
                      "winbio_store_data",
                      encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password),
                      gs("Swipe finger"),
                      gs("Swipe your finger on the fingerprint sensor"),
                      gs("Cancel"),
                      function (e) {
                        lpdbg("multifactor", "winbio_store_data: " + e),
                          e
                            ? (setsinglefactortype(s),
                              "1" != a.silent &&
                                (lpdbg("multifactor", "calling multifactor_response"),
                                multifactor_response(a, { cmd: "setupsinglefactor", result: "done" })))
                            : lpSetupMultifactorError(a);
                      }
                    )
                  : (have_binary_function("winbio_launch_enrollment") && call_binary_function("winbio_launch_enrollment"),
                    "1" != a.silent && multifactor_response(a, { cmd: "setupsinglefactor", result: "notenrolled" }));
            });
        } else {
          if ("nymi" == s)
            return void (
              have_binary_function("nymi_provision") &&
              call_binary_function("nymi_provision", encodeURIComponent(g_username) + "|" + encodeURIComponent(a.password), function (e) {
                lpdbg("multifactor", "nymi_provision: " + e),
                  e
                    ? (setsinglefactortype(s),
                      "1" != a.silent &&
                        (lpdbg("multifactor", "calling multifactor_response"),
                        call_binary_function("nymi_read_data", function (e) {
                          multifactor_response(a, { cmd: "setupsinglefactor", result: "done_" + e });
                        })))
                    : lpSetupMultifactorError(a);
              })
            );
          if ("omnikey" == s) return void multifactor_response(a, { cmd: "setupsinglefactor", result: "done" });
        }
      }
    }
    lpSetupMultifactorError(a);
  }
}
function lpSetupMultifactorError(e) {
  1 != e.silent && multifactor_response(e, { cmd: void 0 !== e.password ? "setupsinglefactor" : "setupmultifactor", result: "error" });
}
function get_multifactor_disable_url(e, t) {
  return "multifactordisable.php?cmd=sendemail&username=" + en(e) + "&type=" + en(t);
}
function lp_StartLogin(e, t) {
  console_log("server.js : lp_StartLogin fromlogincheckack=" + e),
    g_loginstarted || ((g_loginstarted = !0), e ? (rsa_setpendingsharests(), lplogincheck("frompipes", t)) : httptest());
}
function lpDownloadDataResponse(e, t, a) {
  if (e && 200 == e.status && 4 == e.readyState) {
    for (var r, s = "", o = e.responseText.split("\n"), n = 0, i, l, i, i; n < o.length; n++) {
      0 == o[n].indexOf("ff_")
        ? -1 != (i = o[n].indexOf("=")) &&
          ((l = o[n].substr(0, i)), (i = o[n].substr(i + 1)), (s += l + "=" + (i = CheckStringForObfuscation(l, "", i)) + "\n"))
        : (s += o[n] + "\n");
    }
    localStorage_setItem(a, s),
      "ff.dat" == a ? ApplyAllOverrides() : "sites.dat" == a ? LoadSpecialSites() : "bigicon.dat" == a && LoadBigIconList();
  }
}
function checkIterationsInDataFile(e) {
  var t = get_key_iterations(g_username),
    a = e.substring(0, 20),
    r,
    a;
  return 0 == a.indexOf("iterations=")
    ? 1 < (a = /iterations=(\d*);/.exec(a)).length && t == a[1]
      ? e.substring(e.indexOf(";") + 1)
      : "iterationserror"
    : 1 != t
    ? "iterationserror"
    : e;
}
function prependIterations(e) {
  var t = get_key_iterations(g_username);
  return (e = 1 < t ? "iterations=" + t + ";" + e : e);
}
function pref_numeric_validate(e, t) {
  var e = parseInt(e);
  return e < 0 || isNaN(e) ? t : e;
}
function sendLpEvent(e, t, a) {
  (lploggedin && !g_prompts.improve && !a) ||
    LPServer.ajax({
      type: "POST",
      url: base_url + "lmiapi/segment/send-event",
      contentType: "application/json",
      data: { platform: get_method ? get_method() : "cr", event: e, properties: t || [] }
    });
}
var sendLpImprove = (function () {
    function s(r, s) {
      var e;
      s &&
        (Object.keys(s).forEach(function (e) {
          var t = s[e],
            a;
          ("domain" !== e && "url" !== e) || "string" != typeof t ? r.add(e, t) : (a = o(t)) !== t && r.add(e, AES.url2hex(a));
        }),
        (e = window && window.navigator ? window.navigator.language : void 0) && r.add("browser-language", e),
        (e = LPPlatform && "function" == typeof LPPlatform.getUILanguage ? LPPlatform.getUILanguage() : void 0) && r.add("ui-language", e),
        isDogfood() && r.add("dogfood", 1),
        r.add("vaultversion", 4),
        r.add("binary", "function" == typeof have_binary && have_binary() ? "true" : "false"));
    }
    var r = /^(?:(https?|ftp):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(?:[\/\w \.-]*)/i;
    function o(e) {
      var e = r.exec(e),
        t,
        a;
      return e && e.length ? ((t = e.pop()), e.pop() + "." + t) : "";
    }
    return function (e, t, a) {
      var a, r;
      (!lploggedin || g_prompts.improve || a) &&
        e &&
        ((a = get_method ? get_method() : ""),
        s((r = new PostParams().add("cmd", "lpimprove").add("event", e).add("method", a)), t),
        LPPlatform.extendSendImproveParams(r, function () {
          lpMakeRequest(base_url + "lastpass/api.php", r.toString(), null, null);
        }));
    };
  })(),
  isDogfood = (function () {
    var e =
      g_ischrome &&
      chrome.runtime.getManifest() &&
      chrome.runtime.getManifest().short_name &&
      (-1 < chrome.runtime.getManifest().short_name.toLowerCase().indexOf("dog") ||
        -1 < chrome.runtime.getManifest().short_name.toLowerCase().indexOf("nightly"));
    return function () {
      return e;
    };
  })();
