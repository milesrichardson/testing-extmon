var g_reference_url = null,
  g_rowtypes = null,
  g_rowtypes_initial = null,
  g_inputtype = null,
  g_switchedtabs = !1,
  g_lastinput = null,
  g_lastactive = null,
  g_lastchoose = null,
  g_lastinputid = null,
  g_lastmoreopen = null,
  g_lastshownavbar = null,
  g_initial_searchtext = null,
  verbose,
  g_MAXPWLENID = (void 0 === verbose && (verbose = !1), "maxpwlen"),
  g_ctr_dofilter = 0,
  g_ctr_poll = 0,
  g_ctr_pollresponse = 0,
  times = {},
  g_icon_number_hint = ((times.start = LP_gettime()), !0),
  g_creditcard_profile_annotate = !0,
  g_nomatches_triggers_save = !0,
  g_selected_never_row = null,
  g_selected_more_row = null,
  g_more_submenu_aid = null,
  g_more_submenu_ffid = null,
  g_clickable_input_on_password = !0,
  g_in_lpframe = !0,
  dotrans =
    (document.addEventListener("DOMContentLoaded", function () {
      loadit();
    }),
    !0);
function loadit() {
  (document && document.location && document.location.href && -1 == document.location.href.indexOf("popupfilltab.html")) ||
    (g_ischrome &&
      (L("IF -> BG : cmd=getpopupfilldata"),
      chrome_runtime_sendMessage({ cmd: "getpopupfilldata" }, function (e) {
        L("BG -> IF : response to getpopupfilldata"),
          null == e ? "function" == typeof closePopups && closePopups() : (translationInit(e.reg_obj), doInit(e));
      })),
    (g_pollid = setInterval(function () {
      getInputPoll();
    }, 100)),
    notifybg_create_ack());
}
var KEY_UP = 38,
  KEY_DOWN = 40,
  KEY_ENTER = 13,
  ELEMENT_NODE = 1,
  KEY_ESCAPE = 27;
function LP_frame_keypress_handler(e) {
  var t = e.keyCode,
    n;
  return (
    t == KEY_ESCAPE
      ? closePopups(!1, { option: "close" })
      : t == KEY_TAB &&
        ((n = LP_getEventTarget(e)),
        ("undefined" != typeof g_new_superbar && g_new_superbar && "savesite" != g_currenttab) || LP_stopEventPropagation(e)),
    !1
  );
}
function neverdomain_handler(e, t) {
  sendRequest({ cmd: "neverdomain", url: g_reference_url, neverforall: 1, frompopupiframe: 1 }), closePopups();
}
function neverpage_handler(e, t) {
  sendRequest({ cmd: "neverpage", url: g_reference_url, neverforall: 1, frompopupiframe: 1 }), closePopups();
}
function cr_autofill(e) {
  sendRequest({ cmd: "autofillaid", aid: e, from_iframe: !0, no_manualfill_on_saveall: !0, fromiframe: 1, source: "form" }),
    closePopups(!1, { option: "action" });
}
function autologin(e) {
  sendRequest({ cmd: "autologinaid", aid: e, no_manualfill_on_saveall: !0, fromiframe: 1, source: "form" }),
    closePopups(!1, { option: "action" });
}
function cr_fillform(e) {
  sendRequest({ cmd: "fillformffid", ffid: e, fromiframe: 1, source: "form" }), closePopups(!1, { option: "action" });
}
function cr_copytoclipboard(e) {
  sendRequest({ cmd: "copytoclipboard", g_data: e, action: "generatePassword", source: "form" });
}
function notifybg_create_ack() {
  sendRequest({ cmd: "popupfillscreateack" });
}
function sendRequest(e) {
  if (null != e)
    if ((e.cmd && "popupfillinputget" != e.cmd && "popupfilliconnumber" != e.cmd && L("IF -> BG : cmd=" + e.cmd), g_ischrome))
      try {
        chrome_runtime_sendMessage(e, function () {});
      } catch (e) {}
    else g_iscasper && "function" == typeof t_sendmsg && t_sendmsg(e);
}
function handleMessage(e) {
  "message" == e.name && "gotpopupfillinput" != e.message.cmd && L("BG -> IF : cmd=" + e.message.cmd),
    "gotpopupfilldata" == e.name || "gotpopupfilldata" == e.message.cmd
      ? (translationInit(e.message.reg_obj), doInit(e.message))
      : "gotpopupfillinput" == e.name || "gotpopupfillinput" == e.message.cmd
      ? (null == g_initial_searchtext && (g_initial_searchtext = e.message.inputstr),
        g_ctr_pollresponse++,
        (!g_switchedtabs &&
          e.message.inputstr == g_lastinput &&
          g_lastactive == e.message.active &&
          e.message.inputid == g_lastinputid &&
          e.message.moreopen == g_lastmoreopen &&
          e.message.shownavbar == g_lastshownavbar &&
          e.message.choose == g_lastchoose) ||
          dofilter(
            e.message.inputstr,
            e.message.inputid,
            e.message.active,
            e.message.choose,
            e.message.moreopen,
            SEARCH_SITE_AND_USER,
            e.message.issaveall,
            e.message.inputtype,
            e.message.shownavbar
          ),
        (g_lastinput = e.message.inputstr),
        (g_lastinputid = e.message.inputid),
        (g_lastactive = e.message.active),
        (g_lastchoose = e.message.choose),
        (g_lastmoreopen = e.message.moreopen),
        (g_lastshownavbar = e.message.shownavbar),
        (g_switchedtabs = !1))
      : "gotpopupfillgenerateprefs" == e.name || "gotpopupfillgenerateprefs" == e.message.cmd
      ? null == e.message.prefstr || e.message.prefstr.length <= 0
        ? verbose_log("unable to get prefs from BG")
        : handleGotGeneratePrefs(e.message.prefstr, e.message.genpwstr, e.message.genpwpattern)
      : "gotpopupfillsave" == e.name || "gotpopupfillsave" == e.message.cmd
      ? null != e.message.formdata2
        ? populateSave(e.message)
        : (null != e.message.close ? closePopups : (null != e.message.prompting && (g_pollSave_max_retry = 600), pollSaveSafari))()
      : ("didpwchallenge" != e.name && "didpwchallenge" != e.message.cmd) ||
        (null != typeof e.message &&
          (master_challenge_response_handler(
            e.message.result,
            g_safari_master_challenge_success_callback_fn,
            g_safari_master_challenge_failure_callback_fn
          ),
          (g_safari_master_challenge_failure_callback_fn = g_safari_master_challenge_success_callback_fn = null)));
}
function pollSaveSafari(e) {
  g_pollSaveSafari_ctr < g_pollSave_max_retry
    ? (g_pollSaveSafari_ctr++,
      setTimeout(function () {
        sendRequest({ cmd: "popupfillsaveget", url: g_reference_url });
      }, g_pollSave_retry_timeout))
    : verbose_log("failed to get form information from CS");
}
var g_text_created_popup = !1;
function dofilter(e, t, n, r, o, s, a, l, i) {
  g_ctr_dofilter++;
  var _ = !1;
  function p(e) {}
  if ((null == e && (e = ""), "savesite" != g_currenttab || a)) {
    var c = document.getElementsByTagName("td"),
      d = [],
      u = [];
    if ((g_switchedtabs && ((g_selected_row = -1), (e = "")), g_selected_row < 0 && 0 != n)) {
      if (
        (g_initial_searchtext != e
          ? (g_inputstr_initial_from_kbdnav = "")
          : (!g_text_created_popup && 0 == n) || ((g_inputstr_initial_from_kbdnav = e), (e = "")),
        "none" == document.getElementById("lptabpopupformfills").style.display)
      )
        n = g_selected_row = 0;
      else if ("none" == document.getElementById("lptabpopup").style.display) {
        e = "";
        for (var f = c, g = (n = g_selected_row = 0); g < c.length; g++) 0 == c[g].id.indexOf("tdpopuprow") && g_selected_row++;
        ROW_START = g_selected_row;
      }
    } else
      g_selected_row < 0 && 0 == n
        ? g_initial_searchtext != e
          ? (g_inputstr_initial_from_kbdnav = "")
          : ((g_inputstr_initial_from_kbdnav = e), (g_text_created_popup = !0), (e = ""))
        : g_inputstr_freeze
        ? (e = "")
        : "" !== g_inputstr_initial_from_kbdnav &&
          (e !== g_inputstr_initial_from_kbdnav ? (g_inputstr_initial_from_kbdnav = "") : (e = ""));
    for (var m = 0, h = 0, v, v, w, y, b, x, E, S, R, I, E, n, L; h < c.length; h++) {
      !c[h].id ||
        (0 != c[h].id.indexOf("tdpopuprow") && 0 != c[h].id.indexOf("tdpopupffrow")) ||
        ((v = "tr" + c[h].id.substr(2)),
        (w = (v = document.getElementById(v)).getAttribute("sitename")),
        (y = v.getAttribute("username")),
        (b = v.getAttribute("profilename")),
        null == w && (w = ""),
        null == y && (y = ""),
        e.length <= 0
          ? ("none" == document.getElementById("lptabpopupformfills").style.display && 0 == c[h].id.indexOf("tdpopuprow")) ||
            ("none" == document.getElementById("lptabpopup").style.display && 0 == c[h].id.indexOf("tdpopupffrow"))
            ? (u.push(v), unhighlight_row(v), m++)
            : d.push(v)
          : ((!s && 0 == get_innertext(c[h]).trim().toLowerCase().indexOf(e.toLowerCase())) ||
              (s &&
                0 <= w.trim().toLowerCase().indexOf(e.toLowerCase()) &&
                "none" == document.getElementById("lptabpopupformfills").style.display) ||
              (s &&
                0 <= y.trim().toLowerCase().indexOf(e.toLowerCase()) &&
                "none" == document.getElementById("lptabpopupformfills").style.display) ||
              (s &&
                0 <= get_innertext(c[h]).trim().toLowerCase().indexOf(e.toLowerCase()) &&
                "none" == document.getElementById("lptabpopup").style.display)) &&
            (("none" == document.getElementById("lptabpopupformfills").style.display && 0 == c[h].id.indexOf("tdpopuprow")) ||
              ("none" == document.getElementById("lptabpopup").style.display && 0 == c[h].id.indexOf("tdpopupffrow")))
          ? (highlight_row(v, e), u.push(v), m++)
          : d.push(v));
    }
    for (x in d) {
      (d[x].style.display = "none"),
        g_outline_hover
          ? ((E = d[x].children[0]).className = E.className.replace(/ ?\bshowfocus\b/, ""))
          : (d[x].className = d[x].className.replace(/ ?\bshowfocus\b/, "")),
        unhighlight_row(d[x]),
        g_visual_cue_on_hover &&
          (0 == d[x].id.indexOf("trpopuprow")
            ? ((R = d[x].id.replace("trpopuprow", (S = "expand"))), null != (I = document.getElementById(R)) && (I.style.display = "none"))
            : 0 == d[x].id.indexOf("trpopupffrow") &&
              ((R = d[x].id.replace("trpopupffrow", (S = "expandff"))), null != (I = document.getElementById(R))) &&
              (I.style.display = "none"));
    }
    for (x in u) {
      (u[x].style.display = ""),
        g_outline_hover
          ? ((E = u[x].children[0]).className = E.className.replace(/ ?\bshowfocus\b/, ""))
          : (u[x].className = u[x].className.replace(/ ?\bshowfocus\b/, ""));
    }
    if (0 <= g_selected_row) {
      (g_selected_row += n) >= ROW_START + m
        ? (g_selected_row = ROW_START + m - 1)
        : g_selected_row < ROW_START && (g_selected_row = ROW_START);
      for (var A = ROW_START, h = 0, P, P, E, B, S, R, I, S, R, I; h < u.length; h++)
        if (u[h].id && "none" != u[h].style.display) {
          if (g_selected_row == A) {
            if (r) {
              0 == (P = u[h]).id.indexOf("trpopuprow") && null != P.getAttribute("aid") ? autologin(P.getAttribute("aid")) : P.click();
            } else {
              if (o) return (P = u[h]), (g_currenttab = "more"), doTitleBar(document, g_currenttab), void more_popupaction(document, P);
              g_outline_hover ? ((E = u[h].children[0]).className += " showfocus") : (u[h].className += " showfocus"),
                u[h].scrollIntoView(!1),
                g_visual_cue_on_hover &&
                  (0 == u[h].id.indexOf("trpopuprow")
                    ? ((R = u[h].id.replace("trpopuprow", (S = "expand"))),
                      null != (I = document.getElementById(R)) && (I.style.display = ""))
                    : 0 == u[h].id.indexOf("trpopupffrow") &&
                      ((R = u[h].id.replace("trpopupffrow", (S = "expandff"))), null != (I = document.getElementById(R))) &&
                      (I.style.display = ""));
            }
            if (!g_visual_cue_on_hover) break;
          } else {
            g_visual_cue_on_hover &&
              (0 == u[h].id.indexOf("trpopuprow")
                ? ((R = u[h].id.replace("trpopuprow", (S = "expand"))),
                  null != (I = document.getElementById(R)) && (I.style.display = "none"))
                : 0 == u[h].id.indexOf("trpopupffrow") &&
                  ((R = u[h].id.replace("trpopupffrow", (S = "expandff"))), null != (I = document.getElementById(R))) &&
                  (I.style.display = "none"));
          }
          A++;
        }
    }
    g_icon_number_hint &&
      ("sites" == g_currenttab
        ? ((n = document.getElementById("lptabpopupformfills")),
          sendRequest({
            cmd: "popupfilliconnumber",
            sitenumber: (m =
              (L = document.getElementById("lptabpopup")) && n && "none" == n.style.display && "none" == L.style.display ? 0 : m),
            formfillsnumber: -1
          }))
        : "formfill" == g_currenttab
        ? sendRequest({ cmd: "popupfilliconnumber", formfillsnumber: m, sitenumber: -1 })
        : sendRequest({ cmd: "popupfilliconnumber", sitenumber: -1, formfillsnumbers: -1 })),
      g_nomatches_triggers_save &&
        "sites" == g_currenttab &&
        "sites" == g_rowtypes &&
        0 == m &&
        0 < countInputRows(document).sites &&
        (a || savesite_popupaction_iframe(document, null, null));
  } else
    !l || ("text" != l && "email" != l && "tel" != l)
      ? l && "password" == l && g_did_populate_save && document.getElementById("p") && (document.getElementById("p").value = e)
      : document.getElementById("u") && g_did_populate_save && (document.getElementById("u").value = e);
}
function getInputPoll() {
  return (
    g_ctr_poll++,
    g_ischrome &&
      chrome_runtime_sendMessage({ cmd: "popupfillinputget" }, function (e) {
        g_ctr_pollresponse++,
          null != e &&
            null != e.inputstr &&
            (null == g_initial_searchtext && (g_initial_searchtext = e.inputstr),
            (!g_switchedtabs &&
              e.inputstr == g_lastinput &&
              g_lastactive == e.active &&
              g_lastmoreopen == e.moreopen &&
              g_lastshownavbar == e.shownavbar &&
              e.inputid == g_lastinputid &&
              e.choose == g_lastchoose) ||
              dofilter(e.inputstr, e.inputid, e.active, e.choose, e.moreopen, SEARCH_SITE_AND_USER, e.issaveall, e.inputtype, e.shownavbar),
            (g_lastinput = e.inputstr),
            (g_lastinputid = e.inputid),
            (g_lastactive = e.active),
            (g_lastchoose = e.choose),
            (g_lastmoreopen = e.moreopen),
            (g_lastshownavbar = e.shownavbar),
            (g_switchedtabs = !1));
      }),
    !1
  );
}
function getWindowWidth(e) {
  var e = e.innerWidth,
    t = !0,
    n = document.getElementById("_lpinvis");
  return (
    null == n &&
      (((n = document.createElement("div")).id = "_lpinvis"),
      (n.style.left = "0px"),
      (n.style.right = "0px"),
      (n.style.top = "0px"),
      (n.style.height = "0px"),
      (n.style.visibility = "hidden"),
      document.body.appendChild(n)),
    0 < n.offsetWidth && (e = n.offsetWidth),
    document.body.removeChild(n),
    e
  );
}
function defaultFrameResize() {
  sendRequest({ cmd: "popupfillresize", width: 0, height: 0 });
}
function verbose_log(e) {
  verbose && console_log(e);
}
function LP_getAbsolutePos(e, t) {
  if (!e || !t) return null;
  if ("function" != typeof t.getBoundingClientRect) return null;
  try {
    var n = t.getBoundingClientRect(),
      r,
      o,
      r = void 0 === n.width ? n.right - n.left : n.width,
      o = void 0 === n.height ? n.bottom - n.top : n.height,
      s = e.body.getBoundingClientRect();
    return { left: n.left + e.body.scrollLeft - s.left, top: n.top + e.body.scrollTop - s.top, width: r, height: o };
  } catch (e) {
    return null;
  }
}
function handleGotGeneratePrefs(e, t, n) {
  LPIFRAMEVARS.g_myprefs = LPJSON.parse(e);
  var r = LPJSON.parse(t);
  if (null != r && !isEmptyObject(r))
    for (var o in ((LPIFRAMEVARS.g_genpws = []), r)) r.hasOwnProperty(o) && LPIFRAMEVARS.g_genpws.push(r[o]);
  var e = LPJSON.parse(n);
  LPIFRAMEVARS.g_genpwpattern = e;
}
function doInit(e) {
  var t = document,
    n = (set_iframe_title(t, gs("LastPass")), {});
  if ((-1 !== e[g_MAXPWLENID] && (n[g_MAXPWLENID] = e[g_MAXPWLENID]), dotrans)) {
    LP_decimate_children(t.body);
    var r = t.createElement("div"),
      o = ((r.id = "masterdiv"), t.createElement("div")),
      s =
        ((o.id = "contentdiv"),
        r.appendChild(o),
        ((o = t.createElement("div")).id = "transdiv"),
        r.appendChild(o),
        t.body.appendChild(r),
        t.getElementById("contentdiv")),
      a;
    for (a in ("undefined" != typeof g_new_superbar && g_new_superbar && set_new_superbox_40(t, s), n)) {
      var l = t.createElement("input");
      (l.id = a), l.setAttribute("type", "hidden"), l.setAttribute("value", n[a]), s.appendChild(l);
    }
    if (e.formfills)
      try {
        LPIFRAMEVARS.g_formfills = LPJSON.parse(e.formfills);
      } catch (e) {}
    if (e.favicons)
      try {
        LPIFRAMEVARS.g_favicons = LPJSON.parse(e.favicons);
      } catch (e) {}
    if (e.bigicons)
      try {
        LPIFRAMEVARS.g_bigicons = LPJSON.parse(e.bigicons);
      } catch (e) {}
    if (e.sites)
      try {
        LPIFRAMEVARS.g_sites = LPJSON.parse(e.sites);
      } catch (e) {}
    LPIFRAMEVARS.g_do_40fieldicon = !1;
    var o = { sites: e.sites, favicons: e.favicons, formfills: e.formfills, url: e.url },
      r = LPpop.create_popup_obj(t, o);
    s.appendChild(r);
  }
  if (
    (doInitCommon(t, e),
    getGeneratePrefs(),
    sizeTables(window),
    (g_reference_url = e.url),
    (g_can_copy_clipboard = e.can_copy_clipboard),
    void 0 !== e.ask_generate && (g_ask_generate = 0 == g_ask_generate.length ? 0 : e.ask_generate),
    void 0 !== e.ask_save && (g_ask_save = 0 == g_ask_save.length ? 0 : e.ask_save),
    void 0 !== e.username && (g_username = e.username),
    void 0 !== e.inputtype && (g_inputtype = e.inputtype),
    void 0 !== e.pw_challenge && (g_has_view_pw_challenge = e.pw_challenge),
    void 0 !== e.site_challenge && (g_has_view_site_challenge = e.site_challenge),
    void 0 !== e.sitepwlen && 0 < e.sitepwlen
      ? (g_sitepwlen_override = e.sitepwlen)
      : void 0 !== e.site_pwlen && 0 < e.site_pwlen && (g_sitepwlen_override = e.site_pwlen),
    void 0 !== e.ftd && e.ftd && (g_ftd_match = e.ftd),
    void 0 !== e.enable_exper && e.enable_exper && (g_enable_exper = e.enable_exper),
    void 0 !== e.do_40fieldicon && e.do_40fieldicon)
  ) {
    if (((g_do_40fieldicon = !!e.do_40fieldicon), s)) {
      e: s.style.borderRadius = "2px";
      s.style.boxShadow = "0px 1px 2px 0px rgba(0,0,0,0.20)";
    }
    (g_popupfill_widest = 330), (g_width_generate = 330);
  }
  function i(e) {
    if (null != e) for (var t = ["sites", "formfills", "generate", "save"], n = 0; n < t.length; n++) if (t[n] == e) return 1;
  }
  (g_rowtypes = e.rowtype),
    void 0 !== e.start_type && i(e.start_type) && ((g_start_type_state = e.start_type), (g_rowtypes = e.start_type)),
    (g_rowtypes_initial = e.rowtype),
    (null == g_rowtypes || g_rowtypes.length <= 0) && (g_rowtypes = "sites"),
    (g_initial_searchtext = null),
    setTimeout(function () {
      setup_event_handlers(t, window);
    }, 0),
    "ask_generate" == g_rowtypes || 1 == g_ask_generate
      ? (setTimeout(function () {
          askGenerate();
        }, 0),
        (g_currenttab = "generate"),
        doSuperBox(t),
        doTitleBar(t, g_currenttab))
      : 1 == g_ask_save
      ? ((g_currenttab = "savesite"), doSuperBox(t), savesite_popupaction_iframe(t), doTitleBar(t, g_currenttab))
      : "formfills" == g_rowtypes
      ? ((g_currenttab = "formfill"), doSuperBox(t), doTitleBar(t, g_currenttab), formfillprofile_popupaction())
      : "sites" == g_rowtypes &&
        ((g_currenttab = "sites"),
        hideElement(t, "popupcontainerff"),
        doSuperBox(t),
        0 === countInputRows(t).sites
          ? ((null != e.inputtype && "password" == e.inputtype
              ? (g_empty_in_super || doTitleBar(t, ""), emptyAskSave)
              : (g_empty_in_super || doTitleBar(t, gs("")), emptyAskFill))(t),
            g_do_40fieldicon || siteResize(t, EMPTY_RESIZE))
          : (doTitleBar(t, g_currenttab), siteResize(t))),
    popup_show_menu_expand_visual_cue && do_inject_visual_cues(t),
    setActiveTab(t),
    (g_switchedtabs = !1),
    document.addEventListener(
      "keydown",
      function (e) {
        LP_frame_keypress_handler(e);
      },
      !1
    );
}
function pollSaveChrome(t) {
  chrome_runtime_sendMessage({ cmd: "popupfillsaveget", url: g_reference_url }, function (e) {
    null != e &&
      (null != e.formdata2 && "" != e.formdata2
        ? populateSave(e)
        : null != e.close
        ? closePopups()
        : null != e.prompting
        ? (g_pollSave_max_retry = 600)
        : t < g_pollSave_max_retry &&
          (t++,
          setTimeout(function () {
            pollSaveChrome(t);
          }, g_pollSave_retry_timeout)));
  });
}
function do_never_kbd_event(e, t, n, r, o) {
  var s = 0,
    a = 1;
  0 < (t = null != t && "" !== t ? t : 0) && 0 === g_selected_never_row && (g_selected_never_row = 1),
    0 === (g_selected_never_row = t < 0 && 1 === g_selected_never_row ? 0 : g_selected_never_row) && n && neverpage_handler(),
    1 === g_selected_never_row && n && neverdomain_handler();
}
function do_more_kbd_event(e, t, n, r, o) {
  var s = 0,
    a = 1,
    l = 2,
    i = 3,
    _ = 4,
    p = 4,
    c = -99,
    d = -98;
  if (
    (g_more_close_on_cancel && g_more_enable_return
      ? ((c = 5), (p = d = 6))
      : g_more_close_on_cancel && !g_more_enable_return
      ? (p = c = 5)
      : !g_more_close_on_cancel && g_more_enable_return && (p = d = 5),
    (null == g_more_submenu_ffid && (null == g_more_submenu_aid || g_can_copy_clipboard)) ||
      ((a = -97), (l = -96), (i = -95), (p -= 3), (c -= 3), (d -= 3)),
    -1 == g_selected_more_row && r && (g_selected_more_row = 0),
    (g_selected_more_row += t = null != t && "" !== t ? t : 0) < 0
      ? (g_selected_more_row = 0)
      : p < g_selected_more_row && (g_selected_more_row = p),
    n)
  )
    switch (g_selected_more_row) {
      case 0:
        edit_popupaction(g_more_submenu_aid, g_more_submenu_ffid);
        break;
      case a:
        copyusername_popupaction(g_more_submenu_aid);
        break;
      case l:
        copypassword_popupaction(g_more_submenu_aid);
        break;
      case i:
        copyurl_popupaction(g_more_submenu_aid);
        break;
      case 4:
        delete_popupaction(g_more_submenu_aid, g_more_submenu_ffid);
        break;
      case d:
        g_more_enable_return &&
          (null != g_more_submenu_aid ? sites_popupaction : null != g_more_submenu_ffid ? formfillprofile_popupaction : closePopups)();
        break;
      case c:
        g_more_close_on_cancel && closePopups();
    }
}
function translationInit(e) {
  try {
    null == e ||
      isEmptyObject(e) ||
      (void 0 === (translations = "undefined" == typeof translations ? {} : translations)["en-US"] && (translations["en-US"] = {}),
      (translations["en-US"].ff_username_regexp = e.ff_username_regexp),
      (translations["en-US"].ff_firstname_regexp = e.ff_firstname_regexp),
      (translations["en-US"].ff_middlename_regexp = e.ff_middlename_regexp),
      (translations["en-US"].ff_lastname_regexp = e.ff_lastname_regexp),
      (translations["en-US"].ff_email_regexp = e.ff_email_regexp),
      (translations["en-US"].ff_zip_regexp = e.ff_zip_regexp),
      (translations["en-US"].ff_country_regexp = e.ff_country_regexp),
      (translations["en-US"].ff_city_regexp = e.ff_city_regexp),
      (translations["en-US"].ff_currpass_regexp = e.ff_currpass_regexp),
      (translations["en-US"].ff_search_regexp = e.ff_search_regexp),
      (translations["en-US"].ff_bankacctnum_regexp = e.ff_bankacctnum_regexp),
      (translations["en-US"].ff_captcha_regexp = e.ff_captcha_regexp),
      (translations["en-US"].ff_company_regexp = e.ff_company_regexp),
      (translations["en-US"].ff_password_regexp = e.ff_password_regexp),
      (translations["en-US"].ff_question_answer_regexp = e.ff_question_answer_regexp),
      (translations["en-US"].ff_address1_regexp = e.ff_address1_regexp),
      (translations["en-US"].ff_forgot_regexp = e.ff_forgot_regexp));
  } catch (e) {
    verbose_log("translationInit: " + e.message);
  }
}
function lpgs(e, t, n, r) {
  var o = void 0 === t || null == t ? "" : t,
    e;
  if (void 0 !== lpgscache[o + e]) return lpgscache[o + e];
  if (void 0 === lpgslocales[o] && 0 == e.indexOf("ff_") && (ApplyOverrides(o), void 0 !== lpgscache[o + e])) return lpgscache[o + e];
  if ("undefined" != typeof translations) {
    if (void 0 !== t && t && void 0 !== translations[t] && void 0 !== translations[t][e]) return translations[t][e];
    if (void 0 !== translations["en-US"] && void 0 !== translations["en-US"][e]) return (e = translations["en-US"][e]);
  }
  return void 0 !== lpgscache["en-US" + e] ? lpgscache["en-US" + e] : e;
}
function master_challenge_response_handler(e, t, n) {
  if (e) {
    if (((g_did_pw_challenge = !0), t)) return t();
  } else if (n) return n();
}
var g_ctr_master_challenge = 0,
  MASTER_CHALLENGE_DISABLE = 999999999999;
function pollChallenge(t, n, e) {
  var r = 500;
  if (++g_ctr_master_challenge < (e = e || 600)) {
    try {
      chrome_runtime_sendMessage({ cmd: "getpwchallengeresult" }, function (e) {
        null !== e &&
          (master_challenge_response_handler(e, t, n),
          sendRequest({ cmd: "getpwchallengeresult", reset: 1 }),
          (g_ctr_master_challenge = MASTER_CHALLENGE_DISABLE));
      });
    } catch (e) {
      return n && n(), sendRequest({ cmd: "getpwchallengeresult", reset: 1 }), void (g_ctr_master_challenge = MASTER_CHALLENGE_DISABLE);
    }
    setTimeout(function () {
      pollChallenge(t, n, e);
    }, r);
  } else n && n(), sendRequest({ cmd: "getpwchallengeresult", reset: 1 }), (g_ctr_master_challenge = MASTER_CHALLENGE_DISABLE);
}
var g_safari_master_challenge_success_callback_fn = null,
  g_safari_master_challenge_failure_callback_fn = null;
function do_master_pw_challenge(e, t, n) {
  if (!g_ischrome) return !1;
  r();
  try {
    chrome_runtime_sendMessage({ cmd: "dopwchallenge" }, function (e) {});
  } catch (e) {
    return !!t && t();
  }
  function r() {
    g_ctr_master_challenge = 0;
  }
  pollChallenge(e, t, n);
}
function cr_add_profile(e) {
  return sendRequest({ cmd: "addprofile", fromiframe: 1, source: "form" });
}
function cr_add_cc(e) {
  return sendRequest({ cmd: "addcreditcard", fromiframe: 1, source: "form" });
}
function cr_clearforms(e) {
  return sendRequest({ cmd: "clearforms", fromiframe: 1, source: "form" });
}
function cr_closepopups(e, t) {
  return sendRequest({ cmd: "closepopupfills", fromiframe: 1, option: t });
}
function cr_iframe_resize(e, t) {
  return sendRequest({ cmd: "popupfillresize", width: e, height: t, fromiframe: 1 });
}
function cr_generate(e) {
  return sendRequest({ cmd: "generate", fromiframe: 1 });
}
function cr_delete_formfill_popupaction(e, t) {
  sendRequest({ cmd: "deleteformfill", ffid: t, fromiframe: 1, source: "form" });
}
function cr_delete_site_popupaction(e, t) {
  sendRequest({ cmd: "deleteaid", aid: t, fromiframe: 1 });
}
function cr_save_password(e, t) {
  sendRequest({ cmd: "savePassword", pass: e, url: g_reference_url, fromiframe: 1, saveOptions: t });
}
function cr_copyusername(e) {
  sendRequest({ cmd: "copyusername", aid: e, fromiframe: 1 });
}
function cr_copypassword(e) {
  sendRequest({ cmd: "copypassword", aid: e, fromiframe: 1, source: "form" });
}
function cr_copyurl(e) {
  sendRequest({ cmd: "copyurl", aid: e, fromiframe: 1 });
}
function cr_edit_site_popupaction(e) {
  sendRequest({ cmd: "editaid", aid: e, fromiframe: 1 });
}
function cr_edit_formfill_popupaction(e) {
  sendRequest({ cmd: "editprofile", ffid: e, fromiframe: 1, source: "form" });
}
function cr_choose_profilecc() {
  sendRequest({ cmd: "openchooseprofilecc", fromiframe: 1, source: "form" });
}
function cr_replacepasswordchooser(e, t, n) {
  n || (r = lp_gettld_url(g_reference_url));
  var r = lp_gettld_url(n),
    o;
  sendRequest({ cmd: "changepw", notificationdata: LPJSON.stringify({ sitecount: e, newpw: t, tld: r, fromiframe: 1 }) });
}
function cr_replacepassword(e, t) {
  var n = lp_gettld_url(g_reference_url),
    r;
  sendRequest({ cmd: "changepw", notificationdata: LPJSON.stringify({ sitecount: 1, newpw: e, singleaid: t, tld: n, fromiframe: 1 }) });
}
function cr_set_generate_prefs(e, t) {
  "undefined" != typeof g_ischrome && g_ischrome
    ? chrome_runtime_sendMessage({ cmd: "popupfillsetgenerateprefs", prefstr: e, genpwstr: t, fromiframe: 1 }, function (e) {})
    : sendRequest({ cmd: "popupfillsetgenerateprefs", prefstr: e, genpwstr: t, fromiframe: 1 });
}
function lpConfirmYesNo(e, t) {
  return confirm(e);
}
function cr_moveIframe(e) {
  e && void 0 !== e.delx && void 0 !== e.dely && sendRequest({ cmd: "moveIframe", delx: e.delx, dely: e.dely });
}
function cr_resizeIframe(e) {
  e &&
    (void 0 === e.width && (e.width = 0),
    void 0 === e.height && (e.height = 0),
    void 0 === e.delx && (e.delx = 0),
    void 0 === e.dely && (e.dely = 0),
    sendRequest({ cmd: "resizeIframe", width: e.width, height: e.height, delx: e.delx, dely: e.dely }));
}
function cr_savesite_dialog_changed(e) {
  sendRequest({ cmd: "savesite_dialog_changed", value: e, timestamp: LPPerl.time() });
}
