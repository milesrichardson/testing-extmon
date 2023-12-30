var LPIF = {},
  g_popupfill_hint = {},
  g_popupfill_hint_generate = {},
  g_popupfill_hint_save = {},
  g_popupfill_hint_type = {},
  g_popupfill_last_active = {},
  g_popupfill_last_active_fieldid = {},
  g_popupfill_last_active_fieldtype = {},
  g_popupfill_save_data = {},
  g_popupfill_pw_challenge = null,
  g_popupforminput = [],
  g_popupform_active = [],
  g_popupform_active_choose = [],
  g_popupform_more_open = [],
  g_popupform_shownavbar = [],
  g_show_save_success_msg = !0,
  g_popup_tabid_save = null,
  g_popup_tab_docnum = [],
  g_popup_url_by_tabid = [],
  g_iframe_hack_src = [];
function savesiteicon_real(e, p) {
  void 0 !== g_popup_tab_docnum[e] ? sendCS(e, { cmd: "savesiteiframe" }, g_popup_tab_docnum[e]) : sendCS(e, { cmd: "savesiteiframe" }),
    (g_popup_tabid_save = e);
}
function toplevelpopupsetstate(e, p) {
  var t = p ? 1 : 0;
  null != e
    ? sendCS(e, { cmd: "toplevelpopupsetstate", toplevel_exists: t }, "all")
    : get_selected_tab(null, function (e) {
        var e = gettabid(e);
        sendCS(e, { cmd: "toplevelpopupsetstate", toplevel_exists: t }, "all");
      });
}
function closepopuptoplevel_handler(e, p) {
  var t;
  null != e
    ? (closeclickables(e, !1), toplevelpopupsetstate(e, !1), clear_popup_heartbeat(e), delete g_iframe_hack_src[e])
    : (get_selected_tab(null, function (e) {
        var p = !1,
          e = gettabid(e);
        closeclickables(e, p), toplevelpopupsetstate(e, !1), clear_popup_heartbeat(e);
      }),
      (g_iframe_hack_src = []));
}
function createpopuptoplevel_handler(e, p) {
  var t = g_CS_tops[e];
  sendCS(e, { cmd: "createpopuptoplevel", from_iframe: p }, t),
    toplevelpopupsetstate(e, !0),
    (g_iframe_hack_src[e] = p.url),
    has_popup_heartbeat(e) || (do_popup_heartbeat(e), popup_heartbeat_fn(e));
}
function do_searchvault(e, p, t) {
  switch (((e = e && e.toLowerCase().trim()), p)) {
    case "sites":
      var _ = {},
        o = {},
        r = "",
        a = g_popup_url_by_tabid[t],
        i;
      for (i in (a && (r = lp_gettld_url(a)), g_sites))
        !check_ident_aid(g_sites[i].aid) ||
          g_sites[i].tld !== r ||
          (e && -1 === g_sites[i].name.toLowerCase().indexOf(e) && -1 === g_sites[i].unencryptedUsername.toLowerCase().indexOf(e)) ||
          ((_[i] = g_sites[i]),
          g_sites[i].tld && g_bigsquareicons[g_sites[i].tld] && (o[i] = "data:image/png;base64," + g_bigsquareicons[g_sites[i].tld]));
      return JSON.stringify({ sites: _, bigicons: o });
    case "formfills":
      for (var n = new Array(), i = 0; i < g_formfills.length; i++)
        check_ident_ffid(g_formfills[i].ffid) &&
          -1 !== g_formfills[i].decprofilename.toLowerCase().indexOf(e) &&
          (n[n.length] = g_formfills[i]);
      return JSON.stringify({ formfills: n });
  }
}
function do_getpopupfilldata(e) {
  return e ? (g_datacache[e].popuphtml, (g_iframe_safe_to_close[e] = !0), cobble_popup_iframe_data(e)) : {};
}
function do_getpopupfillsites(e, p) {
  var t, _, p, p, o, r, _;
  return !(
    !e ||
    !p ||
    ((t = p.tld),
    (_ = p.url),
    (p = p.docnum),
    verbose_log("get ste & form fill data for tld=" + t + " url=" + _ + " docnum=" + p),
    (r = o = p = ""),
    (_ = assemble_popup_data_payload(_, t)) && _.sites && (p = _.sites),
    _ && _.favicons && (o = _.favicons),
    _ && _.formfills && (r = _.formfills),
    sendCS(e, { cmd: "gotpopupfillsites", sites: p, formfills: r, favicons: o }, "all"),
    0)
  );
}
function do_setpopupfilllastactive(e, p) {
  return !(
    !e ||
    !p ||
    ((g_popupfill_last_active[e] = p.active),
    (g_popupfill_last_active_fieldid[e] = p.activefieldid),
    (g_popupfill_last_active_fieldtype[e] = p.activefieldtype),
    void 0 !== p.ask_generate && (g_popupfill_hint_generate[e] = p.ask_generate),
    void 0 !== p.opentosave && (g_popupfill_hint_save[e] = p.opentosave),
    void 0 !== p.start_type && (g_popupfill_hint_type[e] = p.start_type),
    0)
  );
}
function assemble_popup_data_payload(e, p) {
  var t = [],
    _ = {},
    o = {},
    r = "",
    a = "",
    i = "",
    n = "",
    l = new Array(),
    s = {};
  (p = p || lp_gettld_url(e)), (t = getsites(e));
  for (var t = reorderOnURL(t, e, !0), f = 0; f < t.length; f++)
    (_[t[f].aid] = geticonurlfromrecord(t[f])), (s[t[f].aid] = getbigsquareiconurlfromrecord(t[f]));
  for (var u = 0, g, g; u < g_formfills.length; u++) {
    check_ident_ffid(g_formfills[u].ffid) &&
      ((l[l.length] = g_formfills[u]),
      (g = lpmdec_acct(g_formfills[u].ccnum, !0, g_formfills[u], g_shares)),
      (_[g_formfills[u].ffid] = geticonCCnum(g)),
      (s[g_formfills[u].ffid] = geticonCCnum(g, !0)),
      "" !== g_formfills[u].ccnum) &&
      ((g = lpmdec(g_formfills[u].ccnum)),
      (l[l.length - 1].formattedCCNum = LPCC.getFormattedNumber(g)),
      (l[l.length - 1].ccType = LPCC.getCCType(g)));
  }
  var p = LPJSON.stringify("");
  return (
    l && 0 < l.length && (p = LPJSON.stringify(l)),
    (n = cache_usernames(t)),
    (r = p),
    (a = LPJSON.stringify(_)),
    g_40fieldicon && (i = LPJSON.stringify(s)),
    n && (o.sites = n),
    r && (o.formfills = r),
    a && (o.favicons = a),
    i && (o.bigicons = i),
    o
  );
}
function cobble_popup_iframe_data(e) {
  var p = LPJSON.stringify({}),
    t = LPJSON.stringify({}),
    _ = LPJSON.stringify({}),
    o = LPJSON.stringify({}),
    r = "",
    a = 0,
    i = 0,
    n = "",
    l = "",
    s,
    f,
    f =
      (null != e &&
        (null != g_popupfill_hint[e] &&
          null != g_popupfill_last_active[e] &&
          null != g_popupfill_hint[e][g_popupfill_last_active[e]] &&
          (r = g_popupfill_hint[e][g_popupfill_last_active[e]]),
        g_popupfill_hint_generate[e] && (a = g_popupfill_hint_generate[e]),
        g_popupfill_hint_save[e] && (i = g_popupfill_hint_save[e]),
        g_popupfill_hint_type[e] && (l = g_popupfill_hint_type[e]),
        void 0 !== g_popupfill_last_active_fieldtype[e] && (n = g_popupfill_last_active_fieldtype[e]),
        (f = assemble_popup_data_payload((s = g_popup_url_by_tabid[e]))) && f.sites && (p = f.sites),
        f && f.favicons && (t = f.favicons),
        f && f.formfills && (o = f.formfills),
        f) &&
        f.bigicons &&
        (_ = f.bigicons),
      (a = a ? 1 : 0),
      (i = i ? 1 : 0),
      can_copy_to_clipboard() ? 1 : 0),
    u = {
      ff_firstname_regexp: get_ff_translation("ff_firstname_regexp"),
      ff_middlename_regexp: get_ff_translation("ff_middlename_regexp"),
      ff_lastname_regexp: get_ff_translation("ff_lastname_regexp"),
      ff_username_regexp: get_ff_translation("ff_username_regexp"),
      ff_email_regexp: get_ff_translation("ff_email_regexp"),
      ff_zip_regexp: get_ff_translation("ff_zip_regexp"),
      ff_currpass_regexp: get_ff_translation("ff_currpass_regexp"),
      ff_search_regexp: get_ff_translation("ff_search_regexp"),
      ff_captcha_regexp: get_ff_translation("ff_captcha_regexp"),
      ff_bankacctnum_regexp: get_ff_translation("ff_bankacctnum_regexp"),
      ff_company_regexp: get_ff_translation("ff_company_regexp"),
      ff_password_regexp: get_ff_translation("ff_password_regexp"),
      ff_question_answer_regexp: get_ff_translation("ff_question_answer_regexp"),
      ff_address1_regexp: get_ff_translation("ff_address1_regexp"),
      ff_city_regexp: get_ff_translation("ff_city_regexp"),
      ff_forgot_regexp: get_ff_translation("ff_forgot_regexp"),
      ff_country_regexp: get_ff_translation("ff_country_regexp")
    },
    g = get_sitepwlen(lp_gettld_url(s)),
    c = ((null !== g && "string" != typeof g) || (g = 0), -1),
    d;
  return (
    g_possiblemax_tuple !== [] && g_possiblemax_tuple[0] == e && ((c = g_possiblemax_tuple[1]), (g_possiblemax_tuple = [])),
    {
      cmd: "gotpopupfilldata",
      sites: p,
      favicons: t,
      formfills: o,
      popuphtml: g_datacache[e].popuphtml,
      url: s,
      rowtype: r,
      ask_generate: a,
      can_copy_clipboard: f,
      username: g_username,
      inputtype: n,
      ask_save: i,
      maxpwlen: c,
      start_type: l,
      has_view_pw_challenge: g_prompts.view_pw_prompt ? 1 : 0,
      has_view_site_challenge: g_prompts.edit_site_prompt || g_prompts.company_copyview_site_prompt ? 1 : 0,
      has_view_ff_challenge: g_prompts.view_ff_prompt || g_prompts.company_copyview_site_prompt ? 1 : 0,
      site_pwlen: g,
      reg_obj: u,
      do_40fieldicon: g_40fieldicon,
      bigicons: _,
      ftd: frame_and_topdoc_has_same_domain(e),
      enable_exper: g_isadmin || ("undefined" != typeof verbose && verbose)
    }
  );
}
function doPopupIconHint(e, p, t) {
  return !!e && (sendCS(e, { cmd: "popupfilliconnumber", sitenumber: p, formfillsnumber: t }, "all"), !0);
}
function savesite_from_iframe(e, p) {
  var t, _, o, r, a, i, n, l, s, f, u, g, c, d, d, r, m, _, l, l;
  return lploggedin &&
    ((t = punycode.URLToASCII(e.url)),
    g_popup_url_by_tabid[p] && (t = g_popup_url_by_tabid[p]),
    check_for_frame_mismatch_ok(p, !0, gs("Are you sure you would like to save a new site to your LastPass vault?"), "savesite"))
    ? ((_ = e.formdata2),
      (o = e.name),
      (r = e.group),
      (a = e.username),
      (i = e.password),
      (n = ""),
      (l = e.orig_username),
      (s = e.orig_password),
      (f = null != _ && 0 < _.length),
      (u = issharedfolder(g_shares, r)),
      checkreadonly(u)
        ? ((g = 0 == u ? g_local_key : u.sharekey),
          (c = createNewAcct()),
          (d = lp_gettld_url(AES._utf8_encode(t))),
          (c.genpw = !1),
          (c.name = o),
          (c.group = r),
          (c.url = AES._utf8_encode(t)),
          (c.tld = d),
          (c.unencryptedUsername = a),
          (c.username = lpmenc(a, !0, g)),
          (c.password = lpmenc(i, !0, g)),
          (c.extra = ""),
          (c.fav = 0),
          (c.autologin = 0),
          (c.never_autofill = 0),
          (c.pwprotect = 0),
          (c.aid = "0"),
          0 != u && ((c.sharefolderid = u.id), 0 == u.give) && (c.sharedfromaid = 1),
          (d = r),
          u && (d = r.substr(u.decsharename.length + 1)),
          (c.fields = new Array()),
          (c.save_all = e.save_all ? 1 : 0),
          (r = []),
          (_ = updateAndEncryptData(_, c.fields, r, c, g, {
            save_all: 0,
            username: l,
            password: s,
            new_username: a,
            new_password: i,
            fromiframe: 1
          })),
          (l = "name=" + en(lpenc(o, g)) + "&grouping=" + en(lpenc(d, g)) + "&data=" + en(bin2hex(_)) + "&extra=" + en(lpenc("", g))),
          (l = (l += "&extjs=1&localupdate=1") + (0 == u ? "" : "&sharedfolderid=" + en(u.id))),
          e.source && (l += "&source=" + e.source),
          (c.newvalues = r),
          (f
            ? ((l += "&ref=" + en(AES.url2hex(t))), saveSiteFromSubmit)
            : ((l =
                (l = (l = (l += "&aid=0") + "&url=" + en(AES.url2hex(t)) + "&openid_url=") + "&username=" + en(crypto_btoa(c.username))) +
                "&password=" +
                en(crypto_btoa(c.password))),
              saveSite))(l, c),
          "fidelity.com" == c.tld ? refreshsites() : fill({ tabid: p, acct: c, desc: "fill_A4" }),
          {})
        : { error: gs("Sorry, this shared folder is read-only.") })
    : null;
}
var g_iframe_safe_to_close = {};
function savesite_dialog_changed_handler(e, p) {
  void 0 !== p.value && (g_iframe_safe_to_close[e] = !p.value);
}
function iframe_close_request_handler(e, p) {
  var t = 0,
    _ = 1,
    o = 2,
    r = 4,
    a = 5,
    i = 6,
    n = 7,
    p = p.initiate_timestamp,
    l = 0,
    l =
      g_iframe_safe_to_close && g_iframe_safe_to_close[e]
        ? 4
        : g_iframe_safe_to_close && !1 === g_iframe_safe_to_close[e] && lploggedin
        ? 1
        : 7;
  return sendCS(e, { cmd: "iframe_close_ack", value: l, initiate_timestamp: p, ack_timestamp: LPPerl.time() }, "all"), l;
}
function do_popupfillscreateack(e) {
  return !(
    !e ||
    !lploggedin ||
    (void 0 !== g_popup_tab_docnum[e]
      ? sendCS(e, { cmd: "popupfillscreateack" }, g_popup_tab_docnum[e])
      : sendCS(e, { cmd: "popupfillscreateack" }, "all"),
    has_popup_heartbeat(e) || (do_popup_heartbeat(e), popup_heartbeat_fn(e)),
    sendLpImprove("infieldopen", { source: "form" }),
    0)
  );
}
function do_iframescrollenable(e) {
  return (
    !!e &&
    (sendCS(e, { cmd: "iframescrollenable", href: data.href }, g_CS_tops[e]),
    verbose_log("set scrolling=auto for iframe on tabid " + e),
    sendCS(e, { cmd: "iframebodyscrollenable", href: data.href }, "all"),
    !0)
  );
}
function do_popupregister(e, p) {
  return !(
    !e ||
    !p ||
    ((g_popup_tab_docnum[e] = p.docnum),
    null !== e && void 0 !== g_iframe_hack_src[e] ? (g_popup_url_by_tabid[e] = g_iframe_hack_src[e]) : (g_popup_url_by_tabid[e] = p.url),
    0)
  );
}
function do_setpopupfillhint(e, p) {
  return !(
    !e ||
    !p ||
    ((null != p.formid && "" != p.formid) || (p.formid = "none"),
    (null != p.rowtype && "" != p.rowtype) || (p.rowtype = "sites"),
    null == g_popupfill_hint[e] && (g_popupfill_hint[e] = {}),
    p.ask_generate ? (g_popupfill_hint_generate[e] = p.ask_generate) : (g_popupfill_hint_generate[e] = !1),
    (g_popupfill_hint[e][p.formid] = p.rowtype),
    verbose_log("[" + e + "] set hint on " + p.formid + " to " + p.rowtype),
    0)
  );
}
function do_popupfillinputsave(e, p) {
  return !(
    !e ||
    !p ||
    (null == (g_popupforminput = null == g_popupforminput ? {} : g_popupforminput)[e] && (g_popupforminput[e] = {}),
    null == p.inputstr || 0 == p.inputstr.length ? (g_popupforminput[e].value = "") : (g_popupforminput[e].value = p.inputstr),
    null == p.inputid || 0 == p.inputid.length ? (g_popupforminput[e].id = "") : (g_popupforminput[e].id = p.inputid),
    null == p.issaveall || 0 == p.issaveall.length ? (g_popupforminput[e].issaveall = "") : (g_popupforminput[e].issaveall = p.issaveall),
    null == p.inputtype || 0 == p.inputtype.length ? (g_popupforminput[e].inputtype = "") : (g_popupforminput[e].inputtype = p.inputtype),
    0)
  );
}
var g_popup_heartbeat = {};
function do_popup_heartbeat(e) {
  return (g_popup_heartbeat = g_popup_heartbeat || {}), !!e && (g_popup_heartbeat[e.toString()] = !0);
}
function has_popup_heartbeat(e) {
  return g_popup_heartbeat ? !!e && !0 === g_popup_heartbeat[e.toString()] : !(g_popup_heartbeat = {});
}
function popup_heartbeat_fn(e, p) {
  return (
    !!e &&
    ((p = p || 1), doPopupResize(e, -1, -1), !!has_popup_heartbeat(e)) &&
    (setTimeout(function () {
      popup_heartbeat_fn(e, p + 1);
    }, 1099),
    !0)
  );
}
function clear_popup_heartbeat(e) {
  return !!e && !((g_popup_heartbeat = g_popup_heartbeat || {})[e.toString()] = !1);
}
function closeclickables(e, p) {
  var t = p ? "true" : "false";
  null != e
    ? sendCS(e, { cmd: "closeclickables", force: t, lploggedin: lploggedin }, "all")
    : get_selected_tab(null, function (e) {
        var e = gettabid(e);
        sendCS(e, { cmd: "closeclickables", force: t, lploggedin: lploggedin }, "all");
      }),
    do_popupkbdnavreset(e);
}
function closeallclickables(e) {
  var _ = e ? "true" : "false";
  get_all_windows({ populate: !0 }, function (e) {
    for (var p = 0; p < e.length; p++)
      for (var t = 0; t < get_tabs_length(e[p]); t++)
        sendCS(gettabid(get_tabs(e[p])[t]), { cmd: "closeclickables", force: _, lploggedin: lploggedin }, "all");
  }),
    clearpopupkbdcounters();
}
function doPopupResize(e, p, t) {
  sendCS(e, { cmd: "popupfillresize", width: p, height: t }, "all");
}
function do_popupfillinputfocusdecrement(e, p) {
  var t, p;
  p &&
    ((t = 1),
    void 0 === g_popupform_active[e] && (g_popupform_active[e] = 0),
    void 0 !== p.count && ((p = parseInt(p.count)), isNaN(p) || (t = p)),
    (g_popupform_active[e] -= t));
}
function do_popupfillinputfocusincrement(e, p) {
  var t, p;
  p &&
    ((t = 1),
    void 0 === g_popupform_active[e] && (g_popupform_active[e] = 0),
    void 0 !== p.count && ((p = parseInt(p.count)), isNaN(p) || (t = p)),
    (g_popupform_active[e] += t));
}
function do_popupfillinputfocuschoose(e, p) {
  p && (g_popupform_active_choose[e] = 1);
}
function do_popupfillinputmoreopen(e, p) {
  p && (g_popupform_more_open[e] = 1);
}
function do_popupfillinputshownavbar(e, p) {
  p && (g_popupform_shownavbar[e] = 1);
}
function do_popupkbdnavreset(e) {
  return !(
    !e || ((g_popupform_active[e] = 0), (g_popupform_active_choose[e] = 0), (g_popupform_more_open[e] = 0), (g_popupform_shownavbar[e] = 0))
  );
}
function initpopupkbdcounters(e) {
  return (
    !!e &&
    (void 0 === g_popupform_active[e] && (g_popupform_active[e] = 0),
    void 0 === g_popupform_active_choose[e] && (g_popupform_active_choose[e] = 0),
    void 0 === g_popupform_more_open[e] && (g_popupform_more_open[e] = 0),
    void 0 === g_popupform_shownavbar[e] && (g_popupform_shownavbar[e] = 0),
    !0)
  );
}
function do_popupfillinputget(e) {
  var p;
  return e && lploggedin
    ? ((p = {}),
      initpopupkbdcounters(e),
      void 0 === g_popupforminput[e] && (g_popupforminput[e] = { value: "", id: "", issaveall: 0, inputtype: "" }),
      void 0 !== g_popupforminput[e] &&
        ((p = {
          cmd: "gotpopupfillinput",
          inputstr: g_popupforminput[e].value,
          inputid: g_popupforminput[e].id,
          active: g_popupform_active[e],
          choose: g_popupform_active_choose[e],
          moreopen: g_popupform_more_open[e],
          issaveall: g_popupforminput[e].issaveall,
          inputtype: g_popupforminput[e].inputtype,
          shownavbar: g_popupform_shownavbar[e]
        }),
        do_popupkbdnavreset(e)),
      p)
    : {};
}
function clearpopupkbdcounters() {
  return (g_popupform_active = []), (g_popupform_active_choose = []), (g_popupform_more_open = []), (g_popupform_shownavbar = []), !0;
}
function do_popupfillsetgenerateprefs(e, p) {
  return !0;
}
function do_popupfillgetgenerateprefs(e, p) {
  var t, _, o, r, a;
  return void 0 === e
    ? {}
    : ((t = LPJSON.stringify({
        generate_advanced: reduxApp.getPreference("generate_advanced"),
        generate_length: reduxApp.getPreference("generate_length"),
        generate_upper: reduxApp.getPreference("generate_upper"),
        generate_lower: reduxApp.getPreference("generate_lower"),
        generate_digits: reduxApp.getPreference("generate_digits"),
        generate_special: reduxApp.getPreference("generate_special"),
        generate_mindigits: reduxApp.getPreference("generate_mindigits"),
        generate_ambig: reduxApp.getPreference("generate_ambig"),
        generate_reqevery: reduxApp.getPreference("generate_reqevery"),
        generate_pronounceable: reduxApp.getPreference("generate_pronounceable")
      })),
      (_ = LPJSON.stringify(g_genpws)),
      (o = ""),
      g_generate_pw_pattern_hints && (o = (o = g_generate_pw_pattern_hints[e]) || ""),
      { prefstr: t, genpwstr: _, genpwpattern: LPJSON.stringify(o) });
}
