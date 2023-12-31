function hasNever(e, t, a, l) {
  ("undefined" != typeof g_neverurls && null !== g_neverurls) || (g_neverurls = {});
  var i = lpcanonizeUrl(e),
    n = i;
  if ((0 < i.length && "/" == i.charAt(i.length - 1) && (i = i.substring(0, i.length - 1)), g_neverurls[a] && 0 < g_neverurls[a].length)) {
    for (var r = !1, o = 0, s; g_neverurls[a] && o < g_neverurls[a].length; o++) {
      if ((s = g_neverurls[a][o]) == t || s == i) {
        r = !0;
        break;
      }
    }
    if (!r) return !0;
  }
  for (var o = 0; g_neverurls[l] && o < g_neverurls[l].length; o++) {
    var s = g_neverurls[l][o],
      d = LPTools.createUrlPattern(s);
    if ((-1 !== s.indexOf("*") && d && d.test(n)) || s == t || s == i || s == n) return !0;
  }
  return !1;
}
function hasNeverAutologin(e, t) {
  return hasNever(e, t, "onlyautologins", "neverautologins");
}
function hasNeverFormFill(e, t) {
  return hasNever(e, t, "onlyformfills", "neverformfills");
}
function hasNeverSave(e, t) {
  return hasNever(e, t, "onlyaccounts", "neveraccounts");
}
function hasNeverShowIcon(e, t) {
  return hasNever(e, t, "onlyshowicons", "nevershowicons");
}
function hasNeverGenerate(e, t) {
  return hasNever(e, t, "onlygenerates", "nevergenerates");
}
function hasNeverEnableLP(e, t) {
  return hasNever(e, t, "onlyenablelp", "neverenablelp");
}
function hasNeverMPReuse(e, t) {
  return hasNever(e, t, "onlympwreuse", "nevermpwreuse");
}
var g_accessibility_enabled = -1;
function handleFill(e, t) {
  var a = !1,
    l = null,
    i,
    n,
    r,
    o,
    s;
  if (!lploggedin || null != grid_getdata("active")) return !1;
  if (void 0 === t || !t) return !1;
  if (!check_for_frame_mismatch_ok(e, t.fromiframe, gs("Are you sure you want LastPass to fill your information into this site:"), t.cmd))
    return !1;
  if (((g_fillfield_did_fillbest[e.toString()] = !1), "autofillaid" == t.cmd || "autologinaid" == t.cmd))
    return (
      (i = t.aid),
      (g_last_launch[i] = new Date().getTime()),
      void 0 !== g_sites[i] &&
        ((n = "autologinaid" == t.cmd),
        (r = !0),
        (o = get_record(i)),
        t.no_manualfill_on_saveall && o.save_all && (r = !1),
        t.from_iframe && !o.save_all && (r = !0),
        (s = !!t.from_iframe),
        (g_fillfield_confirm_perfield = {}),
        fill({
          tabid: e,
          acct: g_sites[i],
          docid: null,
          submit: n,
          doconfirm: !n,
          docnum: "all",
          allowforce: !0,
          skip_pwprotect: !1,
          manualfill: r,
          automaticallyFill: null,
          skip_basicauth: null,
          from_iframe: s,
          desc: t.cmd,
          source: t.source
        }),
        !0)
    );
  if (void 0 === t.url) return !1;
  void 0 !== t.username_val && (g_username_vals[t.url] = t.username_val);
  var d = t.url,
    n = lp_gettld_url(d),
    c = 0,
    r,
    i,
    o,
    s;
  if (((null !== t.aid && void 0 !== t.aid) || ((r = getcsinfo(e, g_CS_tops[e])) && (c = r.lastfill_aid)), lp_url_is_lastpass(d)))
    return !1;
  (void 0 !== g_launches[e] && g_launches[e]) || (null != g_pending_launch && (g_launches[e] = g_pending_launch)),
    void 0 !== g_launches[e] &&
      g_launches[e] &&
      ((i = g_launches[e]), void 0 !== g_sites[i]) &&
      ((o = get_record(i)), (g_fillfield_confirm_perfield = {}), check_ident_aid(i)) &&
      compare_tlds(n, lp_gettld_url(g_sites[i].url)) &&
      ((s = !!t.from_iframe),
      fill({
        tabid: e,
        acct: o,
        docid: null,
        submit: !0,
        doconfirm: !1,
        docnum: t.docnum,
        allowforce: !1,
        skip_pwprotect: !0,
        manualfill: null,
        automaticallyFill: null,
        skip_basicauth: null,
        from_iframe: s,
        desc: "FILL_F3"
      }),
      (l = i),
      void 0 !== t.numpass && 0 < t.numpass
        ? ((g_launches[e] = null), (g_pending_launch = null))
        : setTimeout(function () {
            (g_launches[e] = null), (g_pending_launch = null);
          }, 1e3));
  var r = t.topurl !== d ? lp_gettld_url(t.topurl) : "",
    u = {},
    o = getsites(d),
    _ = reorderOnURL(o, d, !0);
  if (!(hasNeverAutologin(d, n) || ("" !== r && hasNeverAutologin(t.topurl, r))))
    if (0 < c && Object.keys(o).length < 2) for (var f in _) _[f].aid == c && (u = tryAutoFillWithItem(d, e, t, c, l));
    else
      for (var f in (_ =
        void 0 !== t.username_val && t.username_val && !given_username_in_accts(_, t.username_val, d) ? [] : reorderOnURL(o, d, !0)))
        if ((u = tryAutoFillWithItem(d, e, t, _[f].aid, l)).done && u.filled) break;
  return reduxApp.getPreference("showNotificationsAfterClick") || checkgenpwfillforms(e, d), !0;
}
function tryAutoFillWithItem(e, t, a, l, n) {
  try {
    islastpass &&
      g_ischrome &&
      !g_isedge &&
      1 == arr[i].basic_auth &&
      g_accessibility_enabled <= 0 &&
      !reduxApp.getPreference("basicauthnever") &&
      (g_is_mac && have_binary_function("accessibility_enabled")
        ? call_binary_function("accessibility_enabled", function (e) {
            0 == (g_accessibility_enabled = e ? 1 : 0) &&
              setTimeout(function () {
                get_selected_tab(null, function (e) {
                  sendCS(gettabid(e), {
                    cmd: "showbasicauthnotification",
                    needbinary: 0,
                    text: gs(
                      "In order for LastPass to fill into basic authentication dialogs, you need to enable access for assistive devices."
                    ),
                    do_40notify: g_40notify
                  });
                });
              }, 100);
          })
        : (!g_is_win && !g_is_mac) ||
          have_binary() ||
          ((g_accessibility_enabled = 0),
          setTimeout(function () {
            get_selected_tab(null, function (e) {
              sendCS(gettabid(e), {
                cmd: "showbasicauthnotification",
                needbinary: 1,
                text: gs(
                  "In order for LastPass to fill into basic authentication dialogs, you need to install the binary version of LastPass for Chrome."
                ),
                do_40notify: g_40notify
              });
            });
          }, 100)));
  } catch (e) {}
  var r = { filled: !1, done: !1 },
    l,
    o,
    s,
    s,
    s,
    n,
    d;
  return (
    n && n !== l
      ? verbose_log("launchedAccountId != accountId " + n + "!=" + l)
      : !check_ident_aid(l) ||
        void 0 === g_sites[l] ||
        !(l = get_record(l)) ||
        l.genpw ||
        (0 == l.fields.length && "" == l.username) ||
        ((s = (o = reduxApp.getState().settings.features).web_client_fill),
        (l.never_autofill ||
          l.pwprotect ||
          g_prompts.login_site_prompt ||
          (0 === l.url.indexOf("https://") && 0 !== e.indexOf("https://")) ||
          !reduxApp.getPreference("automaticallyFill")) &&
          (s = !0),
        0 == e.indexOf("http://") && (s = !0),
        (g_fillfield_confirm_perfield = {}),
        s ||
          (n || LegacyFillTracking.track("Password", "Autofill", l.autologin ? reduxApp.sfTracking.SubmissionType.AutoLogin : void 0),
          (s = !o.field_override_global && !o.field_override_admin && !l.save_all) &&
            (void 0 === g_fillfieldsmatches[e] && (g_fillfieldsmatches[e] = []),
            (g_fillfieldsmatches[e][g_fillfieldsmatches[e].length] = l),
            (g_fillfieldsmatchescurridx[e] = 0)),
          (n = reduxApp.getPreference("automaticallyFill")),
          fill({
            tabid: t,
            acct: l,
            docid: a.docid,
            submit: null,
            doconfirm: s,
            docnum: a.docnum,
            allowforce: null,
            skip_pwprotect: !0,
            manualfill: null,
            automaticallyFill: n,
            desc: "FILL_F4",
            source: a.source
          }),
          (r.filled = !0)),
        (r.done = !0)),
    r
  );
}
function checkWeakDuplicateBreached(l, i, n) {
  !g_showweakdupalerts ||
    (!g_ischrome && !g_issafari_appext) ||
    0 != g_disablepwalerts ||
    (void 0 !== l.noalert && "1" == l.noalert) ||
    getWeakAndDuplicateIds(g_username_hash, g_username, function (e) {
      var t = null != l.sharedfromaid && "" != l.sharedfromaid && "0" != l.sharedfromaid && "null" != l.sharedfromaid ? 1 : 0,
        a = issharedfolder(g_shares, l.group),
        a = !checkreadonly(a, !0),
        t = t || a || "1" != l.pwch ? 0 : 1;
      isDuplicateSite(e[0], l.aid)
        ? ((g_notification_type = "alert"),
          (g_notification_data = {
            cmd: "notification",
            type: "alert",
            aid: l.aid,
            name: l.name,
            username: getusernamefromacct(l),
            alerttype: "duplicate",
            tld: n,
            tabid: i,
            pwch: t
          }),
          set_badge(g_notification_data, i),
          drawIconAtRotation(0))
        : isWeakPasswordZXCVBN(getpasswordfromacct(l), getusernamefromacct(l)) &&
          ((g_notification_type = "alert"),
          (g_notification_data = {
            cmd: "notification",
            type: "alert",
            aid: l.aid,
            name: l.name,
            username: getusernamefromacct(l),
            alerttype: "weak",
            tld: n,
            tabid: i,
            pwch: t
          }),
          set_badge(g_notification_data, i),
          drawIconAtRotation(0));
    });
}
function checkgenpwfillforms(e, t, a) {
  for (
    var l = lp_gettld_url(t),
      i = !reduxApp.getPreference("showGenerateNotifications") || hasNeverGenerate(t, l),
      l = !reduxApp.getPreference("showFormFillNotifications") || hasNeverFormFill(t, l),
      n = new Array(),
      r = 0;
    r < g_formfills.length;
    r++
  )
    check_ident_ffid(g_formfills[r].ffid) && (n[n.length] = g_formfills[r]);
  var i = {
    cmd: "checkgenpwfillforms",
    nevergenerate: i,
    neverformfill: (l = 0 == n.length ? !0 : l),
    sites: cache_usernames(reorderOnURL(getsites(t), t, !0, !0)),
    formfills: LPJSON.stringify(n),
    active: g_popupfill_last_active[e],
    activefieldid: g_popupfill_last_active_fieldid[e]
  };
  a || (i.ff = g_cachedffdat), sendCS(e, i, "all");
}
function cache_usernames(e) {
  for (var t in e) e[t].useusername = getusernamefromacct(e[t]);
  return LPJSON.stringify(e);
}
function handleNever(e, t) {
  handleNeverURL(t);
}
function handleNeverURL(e) {
  if ("neverautofill" == e.cmd) {
    var t = e.aid;
    if (void 0 === g_sites[t]) return;
    (g_sites[t].never_autofill = !0), (g_sites[t].autologin = !1);
    var t = "aid=" + en(t);
    lpMakeRequest(base_url + "set_never_autofill.php", t, null, null);
  } else {
    var a, t;
    ("neverdomain" != e.cmd && "neverpage" != e.cmd) ||
      ((a = ("neverdomain" == e.cmd ? lp_gettld_url : lpcanonizeUrl)(e.url)),
      (t = "url=" + en(AES.url2hex(a))),
      void 0 !== e.fromsave && e.fromsave
        ? g_neverurls.neveraccounts.push(a)
        : void 0 !== e.fromgenerate && e.fromgenerate
        ? ((t += "&type=1"), g_neverurls.nevergenerates.push(a))
        : void 0 !== e.fromformfill && e.fromformfill
        ? ((t += "&type=2"), g_neverurls.neverformfills.push(a))
        : void 0 !== e.fromshowicons && e.fromshowicons
        ? ((t += "&type=6"), g_neverurls.nevershowicons.push(a))
        : void 0 !== e.neverforall && e.neverforall
        ? (g_neverurls.neveraccounts.push(a),
          g_neverurls.nevergenerates.push(a),
          g_neverurls.neverformfills.push(a),
          g_neverurls.neverautologins.push(a),
          g_neverurls.nevershowicons.push(a),
          (t += "&type=7"))
        : void 0 !== e.neverenablelp && e.neverenablelp
        ? (g_neverurls.neverenablelp.push(a), (t += "&type=8"))
        : ((t += "&type=3"), g_neverurls.neverautologins.push(a)),
      lpMakeRequest(base_url + "add_never.php", t, null, null));
  }
  g_local_accts_version++, rewritelocalfile();
}
function handleSave(e, t) {
  var a = !1;
  if (g_cpwbot && CPWbot_bg && e == CPWbot_bg.get_pwchangetabid())
    return (
      L("handleSave(tab:" + e + ", state=" + CPWbot_bg.g_pwchangestate + ")"),
      console_log("Skipping save because driving a password change"),
      !1
    );
  var E = get_ff_translation("ff_currpass_regexp");
  if ("undefined" == typeof SAVEALLFORMSUBMITS) {
    if (!lploggedin) return !1;
    if (lp_url_is_lastpass(t.url, !0)) return !1;
    if (lp_url_is_lastpassext(t.url)) return !1;
  }
  for (
    var l = t.formdata.split("\n"),
      i = !1,
      n = !1,
      r = null,
      o = "",
      s = "",
      d = new Array(),
      c = new Array(),
      u = M(l),
      _ = 0,
      f,
      g,
      m,
      p,
      h,
      v,
      y;
    _ < l.length;
    _++
  ) {
    (4 != (g = (f = l[_]).split("\t")).length && 5 != g.length) ||
      ((m = decodeURIComponent(g[2])),
      (p = g[3]),
      (h = !0),
      i && 5 <= g.length && "notseen" == g[4] && (h = !1),
      (!i || !n) && I(p) && 0 < m.length && (h && ((o = m), (i = !0)), 0 == n) && void 0 !== SpecialSites[lpcanonizeUrl(t.url)] && (n = !0),
      "password" == p && 5 <= g.length && "notseen" == g[4] && 1 < u.pwcount && 0 < u.pwseencount) ||
      "password" != p ||
      (!h && 0 != n) ||
      ((v = decodeURIComponent(g[1])),
      (d[c.length] = { name: v, value: m }),
      (c[c.length] = m),
      !n && m.length && ((s = m), (n = !0)),
      null == r && ((y = new RegExp(E, "i")), v) && (v == t.current_pw_field_name || y.exec(v)) && (r = c.length - 1));
  }
  if (n) {
    (t.username = o), (t.password = s), !i && 1 < c.length && c[0] != c[1] && null == r && ((t.username = c[0]), (t.password = c[1]));
    var w = lp_gettld_url(t.url),
      b = ((t.tld = w), null),
      x = !1,
      S = "",
      k = "",
      x =
        (1 < c.length && c[c.length - 1] == c[c.length - 2] && "" != c[c.length - 1] && d[c.length - 1].name != d[c.length - 2].name
          ? ((x = !0), (S = c[c.length - 1]), (b = 1), 3 == c.length && c[0] != c[1] && c[1] == c[2] && (k = c[0]))
          : 1 < c.length && c[0] == c[1] && "" != c[0] && d[0].name != d[1].name
          ? ((x = !0), (S = c[0]), (b = 2))
          : 1 < c.length &&
            c[0] != c[1] &&
            "" != c[0] &&
            null != r &&
            (b = 0 == r && 2 == c.length ? ((S = c[1]), 3) : 1 == r && 2 == c.length ? ((S = c[0]), 4) : ((S = ""), 6)),
        x || (null != r && S)),
      A = new Array();
    if (x) {
      var A = getsites(t.url, !0);
      if (((t.createacct = 2 == c.length || 0 < array_length(A)), t.createacct)) {
        for (var C = "", P = "", j = "", T = "", _ = 0; _ < l.length; _++) {
          var f,
            g = (f = l[_]).split("\t");
          if (4 == g.length || 5 == g.length) {
            var p = g[3],
              v,
              F,
              y,
              v,
              F,
              y;
            if (
              ("" == C &&
                I(p) &&
                "" != g[1] &&
                "" != g[2] &&
                ((v = decodeURIComponent(g[1])), "" != (F = get_ff_translation("ff_username_regexp"))) &&
                (y = new RegExp(F, "i")).exec(v) &&
                ((C = v), (P = decodeURIComponent(g[2]))),
              "" == j &&
                I(p) &&
                "" != g[1] &&
                "" != g[2] &&
                ((v = decodeURIComponent(g[1])), "" != (F = get_ff_translation("ff_email_regexp"))) &&
                (y = new RegExp(F, "i")).exec(v) &&
                ((j = v), (T = decodeURIComponent(g[2]))),
              "" != C && "" != j)
            )
              break;
          }
        }
        "" == C && ((C = j), (P = T)), (t.username_field = C), "" != P && (t.username = P);
      }
    }
    if (x && 0 < array_length(A)) {
      verbose_log("looking for newpw=" + (g_show_pw_in_logs || g_isadmin ? S : "REDACTED") + " tld=" + w + " in g_didchangepw");
      var x = void 0 !== g_didchangepw[SHA256(S + w)] && g_didchangepw[SHA256(S + w)] > new Date().getTime() - 6e5;
      if (
        (verbose_log("already processed pw =" + (g_show_pw_in_logs || g_isadmin ? S : "REDACTED") + " tld=" + w + " is " + x),
        !x &&
          ((g_notification_type = "change"),
          (t.newpw = S),
          (t.oldpw = k),
          (g_notification_data = t),
          (a = !0),
          reduxApp.getPreference("showChangeNotificationBar")))
      ) {
        var x = A,
          q;
        if (((t.sitecount = array_length(x)), 1 == array_length(x)))
          for (var _ in x) {
            (t.singleaid = _), (q = gs("LastPass detected a password change for user:") + " " + of(getusernamefromacct(g_sites[_])));
            break;
          }
        else q = gs("LastPass detected a password change for domain:") + " " + of(w);
        (g_persistent_notifications[e] = { cmd: "showchangenotification", text: q, notificationdata: t, do_40notify: g_40notify }),
          write_history({ cmd: "showchangenotification", aid: t.singleaid, spin: b, tld: t.tld, url: t.url, msg: q });
      }
    } else {
      var S = null,
        O,
        N,
        q,
        k;
      if (hasNeverSave(t.url, w) || (void 0 !== t.topdocurl && hasNeverSave(t.topdocurl), lp_gettld_url(t.topdocurl))) return !1;
      for (N in reorderOnURL(getsites(t.url), t.url))
        if (check_ident_aid(N.aid) && void 0 !== g_sites[N.aid]) {
          var D = get_record(N.aid),
            U = getusernamefromacct(D),
            R = getpasswordfromacct(D);
          if (
            ((!i || o == lpmdec_acct(D.username, !0, D, g_shares) || value_is_masked(o) || o == U) &&
              (s == lpmdec_acct(D.password, !0, D, g_shares) || s == R)) ||
            (D.save_all && isMatch(D, i, o, s)) ||
            (o == lpmdec_acct(D.username, !0, D, g_shares) && "" == s)
          )
            return !1;
          if (
            i &&
            (o == lpmdec_acct(D.username, !0, D, g_shares) || value_is_masked(o) || o == U) &&
            c &&
            2 == c.length &&
            (c[0] == lpmdec_acct(D.password, !0, D, g_shares) || c[1] == lpmdec_acct(D.password, !0, D, g_shares)) &&
            (s === c[0] || s === c[1])
          )
            return !1;
        }
      (g_notification_type = "save"),
        (g_notification_data = t),
        reduxApp.getPreference("showSaveNotificationBar") &&
          lpCheckAddSite(t.username, t.password, w) &&
          ((q = gs("Should LastPass remember this password?")),
          (g_persistent_notifications[e] = {
            cmd: "showaddnotification",
            text: q,
            notificationdata: LPJSON.stringify(t),
            do_40notify: g_40notify,
            tutorialData: IntroTutorial.getState()
          }),
          (k = "streetscape.com" == w ? "all" : null),
          sendCS(
            e,
            {
              cmd: "showaddnotification",
              text: q,
              notificationdata: LPJSON.stringify(t),
              do_40notify: g_40notify,
              tutorialData: IntroTutorial.getState()
            },
            k
          ),
          write_history({ cmd: "showaddnotification", username: t.username, tld: w, url: t.url, msg: q, spin: S }),
          (a = !0));
    }
  }
  return a;
  function I(e) {
    if (e) {
      var t = ["text", "email", "tel", "url"],
        a;
      for (a in t) if (t.hasOwnProperty(a) && e == t[a]) return 1;
    }
  }
  function M(e) {
    for (var t = { pwcount: 0, textcount: 0, pwseencount: 0, textseencount: 0, hiddencount: 0 }, a = 0; a < e.length; a++) {
      var l,
        i = e[a].split("\t"),
        n,
        r;
      (4 != i.length && 5 != i.length) ||
        ((n = decodeURIComponent(i[2])),
        "password" == (r = i[3]) ? t.pwcount++ : "hidden" == r ? t.hiddencount++ : I(r) && t.textcount++,
        "password" == r && (i.length < 5 || (5 <= i.length && "seen" == i[4]))
          ? t.pwseencount++
          : I(r) && (i.length < 5 || (5 <= i.length && "seen" == i[4])) && t.textseencount++);
    }
    return t;
  }
}
function lpCheckAddSite(e, t, a) {
  var l = lp_get_gmt_timestamp(),
    i = new Array(),
    n,
    r;
  for (n in g_rejectedaddsites) {
    l > (r = g_rejectedaddsites[n]).rejectedTime + 600 && (i[i.length] = n);
  }
  for (var n = i.length - 1, n, r; 0 <= n; n--) g_rejectedaddsites.splice(i[n], 1);
  for (n in g_rejectedaddsites) {
    if ((r = g_rejectedaddsites[n]).username == e && lpdec(r.encryptedPassword) == t && compare_tlds(r.tld, a)) return !1;
  }
  return !0;
}
function update_username_from_fields_if(e, t) {
  for (
    var a = get_ff_translation("ff_combineddummy_regexp"), l = new RegExp(a, "i"), i = 0, n = "", r = 0;
    r < t.length &&
    (("text" != t[r].type && "email" != t[r].type && "tel" != t[r].type && "url" != t[r].type) ||
      l.exec(t[r].name) ||
      l.exec(t[r].id) ||
      "answer" == t[r].id ||
      "answer" == t[r].name ||
      ((n = t[r].value), !(2 <= ++i)));
    r++
  );
  if (1 == i && "" != n) {
    for (var o = 0, r = 0; r < e.fields.length; r++)
      if (
        !e.fields[r].otherfield &&
        ("text" == e.fields[r].type || "email" == e.fields[r].type || "tel" == e.fields[r].type || "url" == e.fields[r].type)
      ) {
        o++;
        break;
      }
    0 == o && ((e.username = n), (e.unencryptedUsername = lpdec_acct(crypto_btoa(e.username), e, g_shares)));
  }
}
function handleSaveAll(e, t) {
  (t.save_all = 1), (g_site_data = t), LPPlatform.openTabDialog("site", { saveAllData: t });
}
function isMatch(e, t, a, l) {
  for (var i = !t, n = !1, r = 0, o; r < e.fields.length; r++) {
    ("text" != e.fields[r].type &&
      "password" != e.fields[r].type &&
      "email" != e.fields[r].type &&
      "tel" != e.fields[r].type &&
      "url" != e.fields[r].type) ||
      ((o = lpmdec_acct(e.fields[r].value, !0, e, g_shares)),
      ("text" != e.fields[r].type && "email" != e.fields[r].type && "tel" != e.fields[r].type && "url" != e.fields[r].type) ||
        a != o ||
        (i = !0),
      "password" == e.fields[r].type && l == o && (n = !0));
  }
  return !(!i || !n);
}
var g_reqindex = 0;
function fill(e) {
  if (!reduxApp.getState().settings.isRestricted) {
    var b = e.tabid,
      x = e.acct;
    if (null == b || !x) return !1;
    var S = e.docid,
      k = e.submit,
      A = e.doconfirm,
      L = e.docnum,
      C = e.allowforce,
      P = e.skip_pwprotect,
      j = e.skip_basicauth,
      T = e.from_iframe,
      F = e.desc,
      q = e.source,
      N,
      N = (N = e.manualfill) || !1,
      D = e.automaticallyFill,
      U,
      I,
      E,
      O;
    (void 0 !== D && null != D) || (D = 1),
      write_history({ cmd: F, tabid: b, docnum: L, aid: x.aid, submit: k, doconfirm: A, allowforce: C }),
      verbose_log(
        "tabid=" +
          b +
          "\nacct.aid=" +
          x.aid +
          "\ndocid=" +
          S +
          "\nsubmit=" +
          k +
          "\ndoconfirm=" +
          A +
          "\ndocnum=" +
          L +
          "\nallowforce=" +
          C +
          "\nskip_pwprotect=" +
          P +
          "\nmanualfill=" +
          N +
          "\nautomaticallyFill=" +
          D +
          "\nskip_basicauth=" +
          j +
          "\nfrom_iframe=" +
          T +
          "\ndesc=" +
          F
      ),
      (!N && IntroTutorial.getState().enabled) ||
        ((E = I = U = !1),
        (O = 0),
        P || (!x.pwprotect && !g_prompts.login_site_prompt)
          ? get_selected_tab(null, function (e) {
              if (!j && D && (C || 1 == x.basic_auth) && gettabid(e) == b && g_ischrome && have_binary_function("fill_basicauth")) {
                var e = getusernamefromacct(x),
                  t = getpasswordfromacct(x),
                  a,
                  l,
                  i;
                if ("" != e || "" != t)
                  return (
                    write_history({ cmd: "check_autologin1", tabid: b, aid: x.aid, submit: a }),
                    (a = check_autologin(k, x)),
                    (l = lp_gettld_url(x.url)),
                    (i = lp_gettld_url(g_basicauth_origurl)),
                    compare_tlds(l, i) && (l = i),
                    void call_binary_function("fill_basicauth", e, t, !!C, l, !!a, function (e) {
                      e
                        ? (g_basicauth_found = !1)
                        : fill({
                            tabid: b,
                            acct: x,
                            docid: S,
                            submit: k,
                            doconfirm: A,
                            docnum: L,
                            allowforce: C,
                            skip_pwprotect: P,
                            manualfill: N,
                            automaticallyFill: D,
                            skip_basicauth: !0,
                            desc: "FILLBASIC",
                            source: q
                          });
                    })
                  );
              }
              update_cs_lastfill_aid(b, x.aid);
              var l = x.tld,
                n =
                  (customjs_has_humanize(x.aid) && (U = !0),
                  customjs_has_v2humanize(x.aid) && (I = !0),
                  customjs_has_force_fillbest(x.aid) && (E = !0),
                  x.fields),
                i = n.length || 0,
                r =
                  ((A = 1 == A ? 1 : 0),
                  (C = C ? 1 : 0),
                  (T = T ? 1 : 0),
                  null != x.sharedfromaid && "" != x.sharedfromaid && "0" != x.sharedfromaid && "null" != x.sharedfromaid ? 1 : 0),
                e = !1,
                o,
                s,
                a;
              if ((0 == i && !C && customjs_has_userpass_overrides(x.aid) && (e = C = !0), 0 != i)) {
                for (var d = 0, c = 0, u = 0; u < n.length; u++)
                  n[u] && (("text" != n[u].type && "email" != n[u].type && "tel" != n[u].type) || c++, "password" == n[u].type) && d++;
                for (
                  var _ = !x.save_all && 0 == d,
                    f = (_ || void 0 === SpecialSites[lpcanonizeUrl(x.url)] || x.save_all || (_ = !0), !1),
                    g,
                    m,
                    t =
                      (n &&
                        n.length &&
                        ((m = g = 0),
                        n.forEach(function (e) {
                          "password" === e.type ? g++ : ("email" !== e.type && "text" !== e.type) || m++;
                        }),
                        (f = (2 === n.length && 1 === g) || 1 === m)),
                      0 <
                        n.filter(function (e) {
                          return "username" == e.name;
                        }).length),
                    l = n.filter(function (e) {
                      return "email" == e.name;
                    }),
                    i,
                    p = (!t && 0 < l.length && (((i = Object.assign({}, l[0])).name = "username"), n.push(i)), []),
                    u = 0,
                    h,
                    v,
                    y,
                    w,
                    o,
                    s;
                  u < n.length;
                  u++
                ) {
                  n[u] &&
                    (x.save_all || 1 != A || "password" == n[u].type || C || _
                      ? ((v = (h = n[u]).value),
                        (w = "password" === (y = h.type) ? "password" : f ? "userName" : "other"),
                        (void 0 !== x.captcha_id && "" != x.captcha_id && x.captcha_id == h.name && "text" == y) ||
                          (("text" != y && "password" != y && "email" != y && "tel" != y && "textarea" != y && "url" != y) ||
                            (v = lpmdec_acct(v, !0, x, g_shares)),
                          "" != h.name && void 0 !== p[h.name + v + h.type]) ||
                          ((p[h.name + v + h.type] = 1),
                          ("" != v && null !== v) ||
                            (("text" != y && "email" != y && "tel" != y) || 1 != c
                              ? "password" == y && 1 == d && ((v = getpasswordfromacct(x)), (w = "password"))
                              : ((v = getusernamefromacct(x)), (w = "userName"))),
                          "" == v || null === v
                            ? verbose_log("value is empty, will not fill " + h.name)
                            : (verbose_log("Sending FillRequest: " + u + "\ntype=" + y + "\nname=" + h.name + "\nvalue=<hidden>"),
                              (o = !!(
                                void 0 !== g_launches[b] &&
                                g_launches[b] &&
                                g_launches[b] == x.aid &&
                                "undefined" != typeof g_last_launch &&
                                void 0 !== g_last_launch[x.aid] &&
                                new Date().getTime() - g_last_launch[x.aid] <= 25e3
                              )),
                              (s = {
                                from: "fillfield_A",
                                index: g_reqindex,
                                time: new Date().getTime(),
                                uniqid: Math.floor(1e8 * Math.random())
                              }),
                              ++g_reqindex,
                              U && O++,
                              fillfieldCS(
                                b,
                                L,
                                x.aid,
                                {
                                  reqinfo: s,
                                  docid: S,
                                  sharedsite: r,
                                  automaticallyFill: D,
                                  is_launch: o,
                                  manualfill: N,
                                  name: h.name,
                                  value: v,
                                  type: y,
                                  checked: h.checked,
                                  otherfield: h.otherfield,
                                  doconfirm: A || (x.save_all && "password" == y) ? 1 : 2,
                                  allowforce: C,
                                  from_iframe: T,
                                  humanize: U,
                                  v2humanize: I,
                                  delayquants: O,
                                  force_fillbest: E,
                                  originator: F,
                                  valueType: w
                                },
                                k
                              ))))
                      : verbose_log("initial fill attempt on page, skipping non-password " + n[u].name));
                }
              } else {
                C &&
                  (console_log("no fields. finding best match " + getusernamefromacct(x) + " and <hidden>"),
                  (o = !!(
                    void 0 !== g_launches[b] &&
                    g_launches[b] &&
                    g_launches[b] == x.aid &&
                    "undefined" != typeof g_last_launch &&
                    void 0 !== g_last_launch[x.aid] &&
                    new Date().getTime() - g_last_launch[x.aid] <= 25e3
                  )),
                  console_log("Sending fillbest from A reqindex=" + g_reqindex),
                  (s = { from: "fillbest_A", index: g_reqindex, time: new Date().getTime(), uniqid: Math.floor(1e8 * Math.random()) }),
                  ++g_reqindex,
                  fillbestCS(b, L, x.aid, {
                    reqinfo: s,
                    docid: S,
                    updatefields: 1,
                    addurid: 0,
                    sharedsite: r,
                    automaticallyFill: D,
                    allowforce: C,
                    is_launch: o,
                    humanize: U,
                    valueType: w,
                    usingCustomJS: e
                  }));
              }
              C && logLoginAndCheckWeakPassword(b, x, q),
                1 != A &&
                  ((a = check_autologin(k, x)),
                  "undefined" != typeof AUTOSUBMIT && (a = !0),
                  write_history({ cmd: "check_autologin2", tabid: b, aid: x.aid, submit: a, docnum: L }),
                  "string" == typeof x.custom_js &&
                    "" != x.custom_js &&
                    sendCS(
                      b,
                      {
                        cmd: "run_custom_js",
                        docid: S,
                        custom_js: x.custom_js,
                        username: getusernamefromacct(x),
                        password: lpmdec_acct(x.password, !0, x, g_shares),
                        onlyfill: a ? 0 : 1,
                        loc: 3
                      },
                      L
                    ),
                  "string" != typeof x.custom_js || -1 == x.custom_js.indexOf("lpdontsubmit")) &&
                  a &&
                  submitCS(b, L, x.aid, { docid: S, humanize: U, delayquants: O });
            })
          : (console_log("FILL : Showing Security Prompt"),
            security_prompt(
              function (e) {
                setTimeout(function () {
                  var e = get_record(x.aid);
                  fill({
                    tabid: b,
                    acct: e,
                    docid: S,
                    submit: k,
                    doconfirm: A,
                    docnum: L,
                    allowforce: C,
                    source: q,
                    skip_pwprotect: !0,
                    manualfill: N,
                    automaticallyFill: null,
                    skip_basicauth: null,
                    from_iframe: T,
                    desc: "fill_PW"
                  });
                }, 100);
              },
              null,
              null,
              !0,
              x.aid,
              !0
            )));
  }
}
function logLoginAndCheckWeakPassword(i, n, r) {
  get_all_windows({ populate: !0 }, function (e) {
    for (var t = 0; t < e.length; t++)
      for (var a = 0; a < get_tabs_length(e[t]); a++) {
        var l = get_tabs(e[t])[a];
        gettabid(l) == i &&
          (checkWeakDuplicateBreached(n, i, lp_gettld_url(gettaburl(l))), g_loglogins || LPISLOC) &&
          void 0 === g_loggedLogins[n.aid] &&
          ((g_loggedLogins[n.aid] = "1"), loglogintab(n.aid, l, r, n.autologin ? 1 : 0));
      }
  });
}
function showpageoverlay(e) {
  sendCS(e, { cmd: "showoverlay", urlprefix: getchromeurl("", !0) });
}
function check_autologin(e, t) {
  var a = !1,
    e,
    l,
    i;
  return (
    e
      ? (a = !0)
      : t.autologin &&
        ((e = new Date().getTime()),
        (l = reduxApp.getPreference("autoautoVal")),
        (i = e - 1e3 * (l = isNaN(l) || "" == l || l <= 0 ? 25 : l)),
        void 0 === t.last_auto_login || isNaN(t.last_auto_login) || t.last_auto_login < i
          ? (console_log("Launching autologin"), (t.last_auto_login = e), (a = !0))
          : (write_history({
              cmd: "check_autologin",
              msg: sprintf(
                "last autologin to %s was too soon, %s < %s, pref=%d seconds",
                lp_gettld_url(t.url),
                new Date(t.last_auto_login).toUTCString(),
                new Date(i).toUTCString(),
                l
              )
            }),
            console_log("last autologin too soon!"))),
    a
  );
}
function fillfieldsconfirm(e) {
  if (!e || !lploggedin) return !1;
  var t = e.url,
    a = void 0 !== e.topurl ? e.topurl : "",
    l = lp_gettld_url(t),
    i = e.result,
    n = e.aid,
    r = e.docid,
    o = e.tabid,
    s = e.doconfirm,
    d = !!e.from_iframe,
    c = e.manualfill,
    u = e.allowforce,
    _ = !1,
    f = void 0 !== e.automaticallyFill ? e.automaticallyFill : 1,
    g = e.force_fillbest,
    m = e.source,
    p = e.name,
    h,
    p;
  if (!(h = get_record(n))) return !1;
  if (
    (p && (g_fillfield_confirm_perfield[p] = !!i), (hasNeverAutologin(t, l) || (a && a != t && hasNeverAutologin(a, l))) && (_ = !0), i) &&
    (g_do_totp && "" != (p = getusernamefromacct(h)) && (g_usercache[l] = p), 1 == f && logLoginAndCheckWeakPassword(o, h, m), 2 == s)
  )
    return (
      d &&
        c &&
        !_ &&
        sendCS(
          o,
          {
            cmd: "conditionalforcefill",
            reqinfo: w,
            username: getusernamefromacct(h),
            password: getpasswordfromacct(h),
            aid: h.aid,
            sharedsite: v,
            automaticallyFill: f,
            from_iframe: d
          },
          e.docnum
        ),
      !0
    );
  if (_) return !1;
  var v = null != h.sharedfromaid && "" != h.sharedfromaid && "0" != h.sharedfromaid && "null" != h.sharedfromaid ? 1 : 0,
    y,
    w;
  if (h.save_all) {
    if (!i && sufficient_condition_fill_saveall(h))
      return console.log("sufficient successful fills, ignoring failed fill result on saveall fill"), !0;
    (i && !c) ||
      ((y = !!(
        void 0 !== g_launches[o] &&
        g_launches[o] &&
        g_launches[o] == h.aid &&
        "undefined" != typeof g_last_launch &&
        void 0 !== g_last_launch[h.aid] &&
        new Date().getTime() - g_last_launch[h.aid] <= 25e3
      )),
      console_log("Sending fillbest from B reqindex=" + g_reqindex),
      (w = { from: "fillbest_B", index: g_reqindex, time: new Date().getTime(), uniqid: Math.floor(1e8 * Math.random()) }),
      ++g_reqindex,
      fillbestCS(o, e.docnum, h.aid, {
        reqinfo: w,
        docid: r,
        updatefields: 0,
        addurid: 0,
        sharedsite: v,
        automaticallyFill: f,
        is_launch: y,
        saveall: !!h.saveall
      }));
  } else if (i) {
    var h,
      u,
      u = ((h = get_record(n)) && (u = !0), null),
      c = null,
      b = (d && e.manualfill && (u = c = !0), !1);
    fill({
      tabid: o,
      acct: h,
      docid: r,
      submit: null,
      doconfirm: !1,
      docnum: e.docnum,
      allowforce: u,
      skip_pwprotect: !0,
      manualfill: c,
      automaticallyFill: f,
      skip_basicauth: b,
      from_iframe: d,
      desc: "FILL_F5"
    }),
      delete g_fillfieldsmatches[t],
      delete g_fillfieldsmatchescurridx[t];
  } else if (e.allowforce || (g && !g_fillfield_did_fillbest[o.toString()] && !sufficient_condition_fill_nonsaveall(h))) {
    g && (g_fillfield_did_fillbest[o.toString()] = !0);
    var y = !!(
        void 0 !== g_launches[o] &&
        g_launches[o] &&
        g_launches[o] == h.aid &&
        "undefined" != typeof g_last_launch &&
        void 0 !== g_last_launch[h.aid] &&
        new Date().getTime() - g_last_launch[h.aid] <= 25e3
      ),
      w =
        (console_log("Sending fillbest from C reqindex=" + g_reqindex),
        { from: "fillbest_C", index: g_reqindex, time: new Date().getTime(), uniqid: Math.floor(1e8 * Math.random()) });
    ++g_reqindex,
      fillbestCS(o, e.docnum, n, {
        reqinfo: w,
        docid: r,
        updatefields: 0,
        addurid: c ? 1 : 0,
        sharedsite: v,
        automaticallyFill: f,
        is_launch: y,
        force_fillbest: g
      });
  } else {
    var x = g_fillfieldsmatches[t];
    if (x)
      for (var S = !1, k = 0; k < x.length; k++) {
        var A = x[k].aid,
          h,
          b;
        if (S)
          return void fill({
            tabid: o,
            acct: (h = g_sites[A]),
            docid: r,
            submit: null,
            doconfirm: !0,
            docnum: e.docnum,
            allowforce: null,
            skip_pwprotect: !0,
            manualfill: null,
            automaticallyFill: f,
            skip_basicauth: (b = h ? !1 : b),
            from_iframe: d,
            desc: "FILL_F6"
          });
        k == g_fillfieldsmatchescurridx[t] && (g_fillfieldsmatchescurridx[t]++, (S = !0));
      }
    delete g_fillfieldsmatches[t], delete g_fillfieldsmatchescurridx[t];
  }
  return !0;
}
function web2plug(e) {
  var t;
  "2" == e.rsa
    ? ((g_local_key = AES.hex2bin(e.key)),
      (g_local_key_hex = e.key),
      (g_local_key_hash = SHA256(g_local_key)),
      rsa_userchangedpassword(),
      (t = opendb()),
      createDataTable(t),
      t &&
        !LPISLOC &&
        (g_indexeddb
          ? t
              .transaction("LastPassData", "readwrite")
              .objectStore("LastPassData")
              .delete(g_username_hash + "_accts")
          : t.transaction(function (e) {
              e.executeSql(
                "DELETE FROM LastPassData WHERE username_hash=? AND type=?",
                [db_prepend(g_username_hash), "accts"],
                function (e, t) {},
                function (e, t) {
                  console_log(t);
                }
              );
            })),
      lpWriteKeyFile())
    : "" != g_username && null != g_username && g_username != e.username
    ? loggedOut(!1, "web2plug")
    : ((g_local_key = AES.hex2bin(e.key)), (g_local_key_hex = e.key), (g_local_key_hash = SHA256(g_local_key)), lpWriteKeyFile());
}
function recover(a, e, l, i) {
  var e = lpParseUri(e),
    t = e.directory,
    e = e.file,
    t;
  ("" != (t = t.replace(new RegExp("^/~[^/]*"), "")) && "/" != t && "/sso/" != t) ||
    ("recover.php" == e &&
      LPPlatform.getCurrentTabDetails(function (t) {
        LPPlatform.openTabDialog("confirmation", {
          title: StringUtils.translate("Account Recovery"),
          text: StringUtils.translate(
            "You have requested to use a One Time Password for account recovery. Are you sure you want to continue?"
          ),
          handler: function (e) {
            LPPlatform.activateTab(t), GetOTPHash(null, a, l, i), e();
          }
        });
      }));
}
function loginfromwebsite(i) {
  var n, t, a, e, l;
  "" != i.wxusername && "" != i.keyhex
    ? ((n = opendb()),
      createSavedLoginsTable(n),
      n &&
        (1 == i.rememberemail ? (L("remembering email"), set_default_login_username(i.wxusername)) : L("not remembering email"),
        (t = function (e, a) {
          var t, l;
          0 < a.rows.length &&
            ((t = a.rows.item(0).password),
            (l = function (e) {
              var t = get_key_iterations(i.wxusername);
              make_lp_key_iterations(i.wxusername, e, t, function (e) {
                var e;
                AES.bin2hex(e) != i.keyhex &&
                  (g_indexeddb
                    ? (((e = a.rows.item(0)).password = ""),
                      n.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put(e))
                    : n.transaction(function (e) {
                        e.executeSql(
                          "UPDATE LastPassSavedLogins2 SET password = '' WHERE username = ?",
                          [i.wxusername],
                          function (e, t) {},
                          function (e, t) {
                            console_log(t);
                          }
                        );
                      }));
              });
            }),
            1 == a.rows.item(0).protected
              ? unprotect_data(t, !1, l)
              : 2 == a.rows.item(0).protected && l(lpdec(t, AES.hex2bin(SHA256(i.wxusername)))));
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
            (n
              .transaction("LastPassSavedLogins2", "readonly")
              .objectStore("LastPassSavedLogins2")
              .openCursor(IDBKeyRange.only(i.wxusername)).onsuccess = function (e) {
              e.target.result && "" != e.target.result.value.password && ((a.rows[a.rows.length] = e.target.result.value), a.rows.length++),
                t(null, a);
            }))
          : n.transaction(function (e) {
              e.executeSql(
                "SELECT * FROM LastPassSavedLogins2 WHERE username = ? AND password != ''",
                [i.wxusername],
                t,
                function (e, t) {}
              );
            })),
      "" != i.wxsessid && (lp_phpsessid = i.wxsessid),
      (e = AES.hex2bin(i.keyhex)),
      (l = null != g_local_key ? AES.bin2hex(g_local_key) : ""),
      lploggedin && g_username == i.wxusername
        ? ((g_local_key = e),
          (g_local_key_hex = i.keyhex),
          (g_local_key_hash = SHA256(g_local_key)),
          lpWriteKeyFile(),
          "undefined" !== reduxApp
            ? (console.log("Vault key updated!"),
              reduxApp.loginFromWebsite({ key: i.keyhex, username: i.wxusername, session: lp_phpsessid }))
            : (console.error("Could not update vault key, logging out!"), loggedOut(!1, "cant_update_key")),
          LP.lplogincheck(!0, lp_phpsessid, i.wxusername, i.wxhash))
        : (lploggedin && "" != g_username && loggedOut(!1, "differentuser"),
          (g_local_key = e),
          (g_local_key_hex = i.keyhex),
          (g_local_key_hash = SHA256(g_local_key)),
          lpWriteKeyFile(),
          LP.lplogincheck(!0, null, i.wxusername, i.wxhash)))
    : lploggedin || LP.lplogincheck(!0);
}
function reorderOnURL(e, t, a, l) {
  var i = lpParseUri(t),
    n = lpcanonizeUrl(t, i),
    r = "string" == typeof i.path ? i.path.split("/") : new Array(),
    o = lp_gettld_url(t),
    s = new Array(),
    d;
  for (d in e)
    if (check_ident_aid(d)) {
      var c = Object.assign({}, g_sites[d]);
      if (
        void 0 !== c &&
        void 0 !== c.url &&
        (c.save_all || !a || "" != c.unencryptedUsername || "" != c.password) &&
        (!l || accthaspassword(c))
      ) {
        for (
          var u = lpParseUri(c.url),
            _ =
              ((c.realmmatch =
                (t == g_basicauth_url || t == g_basicauth_origurl) &&
                (lpmdec_acct(c.realm_data, !0, c, g_shares) == g_basicauth_realm ||
                  (g_basicauth_found && "" == g_basicauth_realm && 1 == c.basic_auth))),
              (c.servermatch = i.host == u.host),
              (c.portmatch = compare_ports(i, u)),
              (c.serverportmatch = c.servermatch && c.portmatch ? 1 : 0),
              (c.usernamematch =
                void 0 !== g_username_vals[t] &&
                "" != g_username_vals[t] &&
                (g_username_vals[t] == c.unencryptedUsername || is_equivalent_email(g_username_vals[t], c.unencryptedUsername, t, c.url))),
              (c.urlmatch = lpcanonizeUrl(c.url) == n),
              "string" == typeof u.path ? u.path.split("/") : new Array()),
            f,
            f = 0;
          f < r.length && f < _.length && _[f] == r[f];
          f++
        );
        (c.pathlevelmatch = f), (c.fieldmatchcount = 0), s.push(c);
      }
    }
  s.sort(lp_aids_sort_func);
  var e = "string" == typeof i.path ? i.path : "",
    s;
  return (s = checkurlrules(g_urlrules, s, o, e, i.host, g_sites, get_port(i)));
}
function lp_aids_sort_func(e, t) {
  return e.realmmatch != t.realmmatch
    ? e.realmmatch
      ? -1
      : 1
    : e.usernamematch != t.usernamematch
    ? e.usernamematch
      ? -1
      : 1
    : e.fav != t.fav
    ? "1" == e.fav
      ? -1
      : 1
    : e.urlmatch != t.urlmatch
    ? e.urlmatch
      ? -1
      : 1
    : e.serverportmatch && t.serverportmatch && e.pathlevelmatch != t.pathlevelmatch
    ? e.pathlevelmatch > t.pathlevelmatch
      ? -1
      : 1
    : e.serverportmatch != t.serverportmatch
    ? e.serverportmatch
      ? -1
      : 1
    : e.servermatch != t.servermatch
    ? e.servermatch
      ? -1
      : 1
    : e.fieldmatchcount != t.fieldmatchcount
    ? e.fieldmatchcount > t.fieldmatchcount
      ? -1
      : 1
    : e.last_touch != t.last_touch
    ? e.last_touch > t.last_touch
      ? -1
      : 1
    : e.name != t.name
    ? e.name < t.name
      ? -1
      : 1
    : 0;
}
function lp_sort_case_insensitive_name(e, t) {
  return (e = e.name.toLowerCase()) < (t = t.name.toLowerCase()) ? -1 : 1;
}
function launchautologin(e, t) {
  var a;
  check_ident_aid(e) &&
    (a = g_sites[e]) &&
    (t || (!a.pwprotect && !g_prompts.login_site_prompt)
      ? ((g_last_launch[a.aid] = new Date().getTime()),
        openURL(
          a.url,
          function (e, t) {
            g_launches[gettabid(e)] = t;
          },
          a.aid
        ))
      : a.pwprotect && needs_secure_reprompt(a)
      ? security_prompt(
          function () {
            launchautologin(e, !0);
          },
          null,
          null,
          !0,
          a.aid,
          !1
        )
      : security_prompt(function () {
          launchautologin(e, !0);
        }));
}
function is_max_frames_exceeded(e, t) {
  var a = 10,
    l;
  if (null == t) return !0;
  try {
    var i = g_CS_tops[e],
      l = g_CS[e][i],
      n = "",
      n = g_ischrome && l ? lp_gettld_url(l.sender.tab.url) : lp_gettld_url(gettaburl(l));
    void 0 === i ? L("still waiting for topdoc to register for [tab:" + e + "] tld=" + n) : L("topdoc=" + i + " tld=" + n),
      n && "dailykos.com" == n && (a = 40);
  } catch (e) {
    console.error("is_max_frames_exceeded: " + e);
  }
  return (
    debug &&
      (0 < (l = count_cs_for_tabid(e)) &&
        console.warn("is_max_frames_exceeded: CS table count=" + l + ", global g_CS_count=" + g_CS_count[e]),
      dumpinfo_for_tabid(e)),
    g_skip_ad_frames && (a = 25),
    t[e] > a
  );
}
function fillbestCS(e, t, a, l) {
  "number" == typeof a && (a = a.toString());
  var i = get_record(a),
    n;
  return (
    (!i && null !== a && 0 !== a) || update_cs_lastfill_aid(e, a),
    !(
      void 0 === e ||
      !i ||
      ((n = null),
      ((l = l || { aid: a }).cmd = "fillbest"),
      (l.sessionId = g_fillSessionId),
      void 0 === l.clearfilledfieldsonlogoff && (l.clearfilledfieldsonlogoff = reduxApp.getPreference("clearfilledfieldsonlogoff")),
      void 0 === l.realurl && (l.realurl = i.url),
      i.save_all && (n = get_SAED_username_password_fields(i)),
      void 0 === l.username && (i.save_all && n && 0 < n.length ? (l.username = n[0]) : (l.username = getusernamefromacct(i))),
      void 0 === l.password && (i.save_all && n && 0 < n.length ? (l.password = n[1]) : (l.password = getpasswordfromacct(i))),
      void 0 === l.custom_js && (l.custom_js = i.custom_js),
      void 0 === l.domains && (l.domains = getacceptabletlds(i.url)),
      void 0 === l.strictDomains && (l.strictDomains = getStrictMatchingEquivalentDomains(i.url)),
      void 0 === l.is_launch &&
        (l.is_launch = !!(
          void 0 !== g_launches[e] &&
          g_launches[e] &&
          g_launches[e] == i.aid &&
          "undefined" != typeof g_last_launch &&
          void 0 !== g_last_launch[i.aid] &&
          new Date().getTime() - g_last_launch[i.aid] <= 25e3
        )),
      void 0 === l.automaticallyFill && (l.automaticallyFill = 1),
      void 0 === l.updatefields && (l.updatefields = 0),
      void 0 === l.addurid && (l.addurid = 0),
      void 0 === l.aid && (l.aid = a),
      void 0 === l.sharedsite &&
        (l.sharedsite = null != i.sharedfromaid && "" != i.sharedfromaid && "0" != i.sharedfromaid && "null" != i.sharedfromaid ? 1 : 0),
      void 0 === l.dontfillautocompleteoff && (l.dontfillautocompleteoff = reduxApp.getPreference("dontfillautocompleteoff")),
      void 0 === l.saveall && (l.saveall = !!i.saveall),
      void 0 === l.topurl && (l.topurl = get_top_url(e, t)),
      write_history({
        cmd: "fillbestCS",
        tabid: e,
        docnum: t,
        aid: a,
        username: l.username,
        force_fillbest: l.force_fillbest,
        custom_js: l.custom_js
      }),
      sendCS(e, l, t),
      0)
    )
  );
}
function fillfieldCS(e, t, a, l, i) {
  "number" == typeof a && (a = a.toString());
  var n = get_record(a);
  return !(
    void 0 === e ||
    !n ||
    (((l = l || { aid: a }).cmd = "fillfield"),
    (l.sessionId = g_fillSessionId),
    void 0 === l.clearfilledfieldsonlogoff && (l.clearfilledfieldsonlogoff = reduxApp.getPreference("clearfilledfieldsonlogoff")),
    void 0 === l.dontfillautocompleteoff && (l.dontfillautocompleteoff = reduxApp.getPreference("dontfillautocompleteoff")),
    void 0 === l.realurl && (l.realurl = n.url),
    void 0 === l.aid && (l.aid = a),
    void 0 === l.tabid && (l.tabid = e),
    void 0 === l.custom_js && (l.custom_js = n.custom_js),
    void 0 === l.domains && (l.domains = getacceptabletlds(n.url)),
    void 0 === l.strictDomains && (l.strictDomains = getStrictMatchingEquivalentDomains(n.url)),
    void 0 === l.is_launch &&
      (l.is_launch = !!(
        void 0 !== g_launches[e] &&
        g_launches[e] &&
        g_launches[e] == n.aid &&
        "undefined" != typeof g_last_launch &&
        void 0 !== g_last_launch[n.aid] &&
        new Date().getTime() - g_last_launch[n.aid] <= 25e3
      )),
    void 0 === l.automaticallyFill && (l.automaticallyFill = 1),
    void 0 === l.from_iframe && (l.from_iframe = 0),
    void 0 === l.formname && (l.formname = ""),
    void 0 === l.type && (l.type = "text"),
    void 0 === l.doconfirm && (l.doconfirm = 2),
    (void 0 !== l.delayquants && parseInt(l.delayquants)) || (l.delayquants = 0),
    void 0 === l.topurl && (l.topurl = get_top_url(e, t)),
    "" != n.custom_js && ((l.username = getusernamefromacct(n)), (l.password = getpasswordfromacct(n)), (l.onlyfill = i ? 0 : 1)),
    void 0 === l.name || void 0 === l.value
      ? (console_error("missing required fields!"), 1)
      : (write_history({
          cmd: "fillfieldCS",
          tabid: e,
          docnum: t,
          aid: l.aid,
          name: l.name,
          custom_js: l.custom_js,
          manualfill: l.manualfill,
          is_launch: l.is_launch,
          originator: l.originator,
          delay: l.humanize ? l.delayquants : null
        }),
        l.humanize && l.delayquants
          ? setTimeout(function () {
              sendCS(e, l, t);
            }, l.delayquants * HUMANIZE_DELAY_QUANTUM)
          : sendCS(e, l, t),
        0))
  );
}
function submitCS(e, t, a, l) {
  "number" == typeof a && (a = a.toString());
  var i = get_record(a),
    n,
    r,
    o;
  return !(
    void 0 === e ||
    !i ||
    ((n = void 0 !== i.submit_id ? i.submit_id : ""),
    (r = void 0 !== i.submit_html ? i.submit_html : ""),
    (o = void 0 !== i.submit_js ? i.submit_js : ""),
    ((l = l || { aid: a }).cmd = "submit"),
    void 0 === l.aid && (l.aid = a),
    void 0 === l.custom_js && (l.custom_js = i.custom_js),
    void 0 === l.submit_id && (l.submit_id = n),
    void 0 === l.submit_html && (l.submit_html = r),
    void 0 === l.submit_js && (l.submit_js = o),
    (void 0 !== l.delayquants && parseInt(l.delayquants)) || (l.delayquants = 0),
    "bankofamerica.com" == lp_gettld_url(i.url)
      ? pass
      : (write_history({
          cmd: "submitCS",
          tabid: e,
          docnum: t,
          aid: a,
          submit_id: n,
          submit_js: o,
          delay: l.humanize ? l.delayquants : null
        }),
        l.humanize && l.delayquants
          ? setTimeout(function () {
              sendCS(e, l, t);
            }, l.delayquants * HUMANIZE_DELAY_QUANTUM)
          : sendCS(e, l, t)),
    0)
  );
}
function customjs_has_humanize(e) {
  var e = get_record(e);
  return !!e && "string" == typeof e.custom_js && 0 <= e.custom_js.indexOf("lphumanize");
}
function customjs_has_v2humanize(e) {
  var e = get_record(e);
  return !!e && "string" == typeof e.custom_js && 0 <= e.custom_js.indexOf("lpv2humanize=1");
}
function customjs_has_dontsubmit(e) {
  var e = get_record(e);
  return !!e && "string" == typeof e.custom_js && 0 <= e.custom_js.indexOf("lpdontsubmit");
}
function check_for_frame_mismatch_ok(e, t, a, l) {
  var i;
  return !(
    !a ||
    null == e ||
    ((void 0 !== t && t ? t : 0) &&
      !frame_and_topdoc_has_same_domain(e) &&
      (ftd_report_error(e, l || "unknown"), !lpConfirmYesNo(a + "\n\n" + lp_gettld_url(ftd_get_frameparenturl(e)))))
  );
}
function set_casper_active_tab(e, t) {
  var t;
  return g_iscasper && e && ((t = g_CS[g_CS_tops[t]]), (e.casper_activeTab = t)), !0;
}
function get_casper_active_tab(e) {
  return g_iscasper && e && e.casper_activeTab ? e.casper_activeTab : null;
}
function count_fillfield_confirms() {
  var e = 0,
    t;
  for (t in Object.keys(g_fillfield_confirm_perfield)) !0 === g_fillfield_confirm_perfield[t] && e++;
  return e;
}
function sufficient_condition_fill_saveall(e) {
  if (e) {
    var t,
      a = null,
      l = null;
    if (3 <= count_fillfield_confirms()) {
      for (t in e.fields)
        if (
          e.fields.hasOwnProperty(t) &&
          e.fields[t] &&
          ("text" == e.fields[t].type || "email" == e.fields[t].type || "tel" == e.fields[t].type) &&
          "" != e.fields[t].value
        ) {
          a = e.fields[t].name;
          break;
        }
      for (t in e.fields)
        if (e.fields.hasOwnProperty(t) && e.fields[t] && "password" == e.fields[t].type && "" != e.fields[t].value) {
          l = e.fields[t].name;
          break;
        }
      if (a && l) return !0;
    }
  }
  return !1;
}
function customjs_has_force_fillbest(e) {
  var e = get_record(e);
  return !!e && "string" == typeof e.custom_js && 0 <= e.custom_js.indexOf("__lpforcefillbest");
}
function sufficient_condition_fill_nonsaveall(e) {
  var t, a;
  return (
    !!e && ((a = t = null), !!(2 <= count_fillfield_confirms() && ((t = getusernamefromacct(e)), (a = getpasswordfromacct(e)), t) && a))
  );
}
function customjs_has_userpass_overrides(e) {
  var e = get_record(e);
  return !!e && "string" == typeof e.custom_js && (0 <= e.custom_js.indexOf("lpcurrpass") || 0 <= e.custom_js.indexOf("lpcurruser"));
}
function clearformsCS(e, t) {
  return (
    !!e && (null == t && (t = "all"), write_history({ cmd: "clearformsCS", tabid: e, docnum: t }), sendCS(e, { cmd: "clearforms" }, t), !0)
  );
}
function given_username_in_accts(e, t, a) {
  if (e) {
    if (!t) return !0;
    for (var l = null, i = 0; i < e.length; i++)
      if ((l = e[i])) {
        if (t == l.unencryptedUsername) return !0;
        if (is_equivalent_email(t, l.unencryptedUsername, a, a)) return !0;
      }
  }
  return !1;
}
