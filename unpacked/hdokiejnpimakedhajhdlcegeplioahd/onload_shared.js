var do_bgiconinput = !0,
  g_CSPCHECKER = 0;
function popupfill_create_iframe(e, t, r, n, a, i, o, s, _, l) {
  if (e) {
    for (var p = -1, m = e.getElementsByTagName("input"), c = 0; c < m.length && c < MAX_INPUTS_HARD; c++) {
      var f = m[c];
      void 0 === f.maxLength || "password" != f.type || g_isie || sendBG({ cmd: "set_possiblemax", max: f.maxLength });
    }
    g_isie && init_LPfn() && LPfn && LPfn.resetSafeCloseIframe(),
      (g_iframeclose_starttime = null),
      (t = parseInt(t) + "px"),
      (r = parseInt(r) + "px");
    var d = e.body;
    if (d && !e.getElementById(LPMAGICIFRAME + n)) {
      var g = e.createElement("iframe"),
        u,
        h,
        v;
      if (((g.id = LPMAGICIFRAME + n), (g.name = LPMAGICIFRAME + n), (g_iframe_docked = !0), g_isie)) {
        (g.src = "https://lastpass.com/fake/fake.php" + "#framesrc=LPMAGIC"),
          init_LPfn() &&
            LPfn &&
            LPfn.getDocumentMode(e) < 9 &&
            (g.setAttribute("allowTransparency", !0), g.setAttribute("frameBorder", 0), (g.allowTransparency = !0), (g.frameBorder = 0)),
          parseInt(t) < 0 && (t = "0px"),
          parseInt(r) < 0 && (r = "0px"),
          dotrans
            ? ((g_frame_css_str =
                "display:block !important; position:absolute !important; visibility:visible !important; z-index:" +
                CLICKABLE_ICON_ZINDEX +
                " !important; border-style:none !important; opacity: 1.0 !important; margin:0 !important; padding:0 !important;"),
              "undefined" != typeof g_isie &&
                g_isie &&
                (g_frame_css_str +=
                  "background-color:transparent !important;background-image:none !important;filter:alpha(opacity=100) !important ; "))
            : (g_frame_css_str =
                "display:block; position:absolute !important; visibility:visible !important; opacity: 1.0 !important ; z-index:" +
                CLICKABLE_ICON_ZINDEX +
                " !important; border-style:solid !important; border-color: #4c4c4c !important; border-width:1px !important; border-radius: 4px 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; box-shadow: 1px rgba(200, 200, 200, 0.5); -webkit-box-shadow: 1px 1px rgba(200, 200, 200, 0.5); -moz-box-shadow: 1px 1px rgba(200, 200, 200, 0.5); filter:alpha(opacity=100) !important; "),
          (g.style.cssText = g_frame_css_str);
        try {
          if (0 == (framesetarr = document.getElementsByTagName("frameset")).length) d.appendChild(g);
          else if (g_create_iframe_in_top && !g_isie && !g_isfirefox && _ && 1 == framesetarr.length) {
            var y = LPJSON.stringify(g_frame_css_str + " border: none;"),
              b = (_.body.setAttribute("data-lp-gcss", y), _.getElementsByTagName("FRAMESET")),
              w,
              I;
            b &&
              b[0] &&
              ((w = b[0].getElementsByTagName("FRAME"))
                ? ((I = w[0].contentWindow.document).body.setAttribute("data-lp-gcss", y), I)
                : _
              ).body.appendChild(g);
          } else
            for (var P = !1, c = 0; c < framesetarr.length; c++) {
              for (var x = 0; x < framesetarr[c].children.length; x++)
                if ("FRAME" == framesetarr[c].children[x].tagName)
                  if (null != (cf = framesetarr[c].children[x].contentWindow.document).getElementById(n)) {
                    if (((P = !0), (toappendTo = cf.getElementById(n)), l && l.framesrc && l.framesrc == get_doc_location_href(cf))) break;
                  } else if (
                    null != cf.getElementsByName(n) &&
                    0 != cf.getElementsByName(n).length &&
                    ((P = !0), (toappendTo = cf.getElementsByName(n)[0]), l) &&
                    l.framesrc &&
                    l.framesrc == get_doc_location_href(cf)
                  )
                    break;
              if (P) {
                try {
                  toappendTo.ownerDocument.body.setAttribute("data-lp-gcss", LPJSON.stringify(g_frame_css_str)),
                    toappendTo.parentNode.appendChild(g);
                } catch (e) {
                  framesetarr[c].children[x].contentWindow.document.body.appendChild(g);
                }
                break;
              }
            }
        } catch (e) {
          return void verbose_log("append failed! " + e);
        }
        g_isie && !LP_getloggedin() && g.parentNode.removeChild(g),
          (g.width = parseInt(i) + "px"),
          g_isie ? ((g.height = "38px"), (g.height = "173px")) : (g.height = "26px"),
          void 0 !== a && 0 < a && (g.height = a * 24 + 15 + 8 + "px"),
          0 < parseInt(o) ? (g.height = parseInt(o) + "px") : (g.height = parseInt(g.height) + "px");
        var d = parseInt(g.width) + "px",
          b = parseInt(g.height) + "px",
          E;
        (g.style.cssText =
          g_frame_css_str +
          ("width: " + d + " !important; height: " + b + " !important; top:" + r + " !important; left:" + t + " !important; ")),
          setTimeout(function () {
            0 == g_CSPCHECKER && "undefined" == typeof chrome && "object" == typeof safari && do_iframe_sad_msg(e);
          }, 5e3);
      } else
        "undefined" != typeof event && event && event.type ? (l.eventType = event.type) : (l.eventType = "click"),
          csTop.LPInfieldFrame.openFrame(l);
    }
  }
}
function weasel(e, t) {
  var r, n, n;
  LPCTR("weasel"),
    (void 0 === e || 0 == e || 1 == e || e < 5) && (e = 200),
    (g_weaseled = !0),
    g_isdebug &&
      ((r = new Date().getTime()), 2 * e < (n = r - g_last_weasel)) &&
      verbose_log("last weasel cycle took too long" + n + " ms"),
    popupfill_resize(),
    g_isdebug &&
      ((n = new Date().getTime() - r),
      e < n && verbose_log("last resize took too long " + n + " ms"),
      (g_last_weasel = new Date().getTime())),
    (g_weasel_id = setTimeout(function () {
      weasel(e);
    }, e));
}
var g_last_weasel = 0;
function issaveall(e) {
  for (var t = e.elements, r = 0, n = 0, a = 0, i = 0; i < t.length; i++) {
    var o = t[i].type;
    "password" == o ? n++ : "text" == o || "tel" == o || "email" == o ? r++ : "textarea" == o && a++;
  }
  return 1 != r || 1 != n || 0 != a;
}
var POPUP_FIELD_OFFSET = -4;
function calculate_iframe_pos(e, t, r, n) {
  if ((void 0 === n && (n = !1), !e)) return null;
  if (null == t) return null;
  var a = t.style.left,
    i = t.style.top,
    o;
  if (
    (g_double_password_hack || g_double_secret_password_hack || parseInt(a) < 0 || parseInt(i) < 0) &&
    null != (o = e.getElementById(LPMAGICIFRAME + LP_pickFieldName(e, t)))
  ) {
    var s = LP_getAbsolutePos(e, o, null, n);
    if (s) return (i = parseInt(s.top)), (a = parseInt(s.left)), isNaN(i) || isNaN(a) ? null : { posx: (a += "px"), posy: (i += "px") };
  }
  var _,
    _ = LP_pickFieldName(e, t),
    l,
    e,
    o;
  if (null != t) {
    var s = LP_getAbsolutePos(e, t, null, n),
      o,
      s;
    if (
      (null != s &&
        ((a = parseInt(s.left) + POPUP_FIELD_OFFSET + "px"), (i = parseInt(s.top) + parseInt(s.height) + "px"), g_do_icon_number_hint) &&
        (i = parseInt(s.top) + parseInt(s.height) + 4 + "px"),
      (null != r && 0 != r && "" != r) ||
        (r =
          null != (o = LP_getElementByIdOrName(e, LPMAGICIFRAME + LP_pickFieldName(e, t))) && (s = LP_getAbsolutePos(e, o, null, !0))
            ? s.width
            : 0),
      !n)
    ) {
      var t = LP_getWindowWidth(window, !0);
      if (!t) return { posx: 0, posy: 0 };
      parseInt(r) + parseInt(a) > t && (a = t - parseInt(r) - 20 + "px");
    }
  }
  return (
    g_isie,
    "" == a || "auto" == a || "" == i || "auto" == i || ((e = parseInt(a)), (o = parseInt(i)), "NaN" == e) || "NaN" == o
      ? null
      : { posx: (a = e + "px"), posy: (i = o + "px") }
  );
}
function verbose_log(e) {
  verbose &&
    ("undefined" != typeof Date
      ? console_log("[" + g_docnum + "] " + (new Date().getTime() - g_tsstart) + " : " + e)
      : console_log("[" + g_docnum + "] " + e));
}
function is_watermark(e) {
  return !1;
}
function checkAskGenerate() {}
function sendKey(e, t) {
  try {
    return (keyName = "DOM_VK_" + e.toUpperCase()), send_simulated_key(t, 0, KeyEvent[keyName], !1);
  } catch (e) {
    lpdbg("error", e);
  }
  return null;
}
function send_simulated_key(e, t, r, n) {
  var a, i, a;
  return void 0 === e || void 0 === e.ownerDocument
    ? (lpdbg("error", "No key target!"), !1)
    : ((a = e.ownerDocument.createEvent("KeyboardEvent")).initKeyboardEvent("keydown", !0, !0, document.defaultView, !1, !1, n, !1, r, r),
      (i = e.dispatchEvent(a)),
      (a = e.ownerDocument.createEvent("KeyboardEvent")).initKeyboardEvent("keyup", !0, !0, null, !1, !1, n, !1, r, r),
      e.dispatchEvent(a),
      i);
}
var g_formmutations = 0;
function checkShouldRecheck(a) {
  var e = 20,
    t = !1,
    i = document,
    o = window,
    r = !1,
    s = !1,
    _ = !1,
    e,
    r,
    n;
  return (
    void 0 !== (a = a && "object" == typeof a ? a : {}).fromclick && (r = a.fromclick),
    void 0 !== a.frommuto && (s = a.frommuto),
    void 0 !== a.skipfill && (_ = a.skipfill),
    (g_pending_recheck = !1),
    debug_checkpoint("entered checkShouldRecheck, clear pending state"),
    (e = LP_isSinglePageApp(i) ? 100 : e) < g_formmutations
      ? (verbose_log("Abort"), !1)
      : !LP_should_ignore_this_doc(i, r) &&
        (0 <= g_input_cnt &&
          0 <= g_form_cnt &&
          ((e = countInputs(document)),
          (r = countFormEquivalents(document)),
          (n = computeFingerprint(document)),
          verbose_log(
            "checkShouldRecheck() : # inputs was " +
              g_input_cnt +
              ", now " +
              e +
              " #forms was " +
              g_form_cnt +
              " now " +
              r +
              ", fingerprint was " +
              g_input_fingerprint +
              " now " +
              n
          ),
          (g_input_cnt == e && g_form_cnt == r && g_input_fingerprint == n) ||
            (g_formmutations++,
            formcachereset(document),
            fieldcachereset(document),
            g_isie
              ? setTimeout(function () {
                  ie_recheck_page(document, g_is_specialsite);
                }, 1e3)
              : setTimeout(function () {
                  LPCTR("recheck");
                  var e = LP_get_last_url_history(i),
                    t = (e || (LP_put_last_url_history(i), (e = LP_get_last_url_history(i))), e.href),
                    r = e.href_hash,
                    n = get_doc_location_href(i);
                  s || (n === t && a.href === n && r === a.href_hash)
                    ? g_pending_eval || evalScriptsInFrame(o, i, !0, { skipfill: _ || !l(i), href: t, href_hash: r, frommuto: s })
                    : (formcachereset(i),
                      fieldcachereset(i),
                      (g_input_cnt = 0),
                      (g_form_cnt = 0),
                      delete i.body._lpcrdone,
                      LP_put_last_url_history(i),
                      (e = LP_get_last_url_history(i)),
                      (a.href = e.href),
                      (a.href_hash = e.href_hash),
                      g_pending_recheck || checkShouldRecheck(a));
                }, 200),
            (g_input_cnt = e),
            (g_form_cnt = r),
            (g_input_fingerprint = n),
            (t = !0))),
        t)
  );
  function l(e) {
    return (e = e || LP_derive_doc()) && (LP_isSinglePageApp(e) || isASPpage() || (g_did_muto && ((g_did_muto = !1), 1)));
  }
}
function is_watermark_password(e) {
  return !1;
}
function createpopuptoplevel_handler(e) {
  var t, r, n, a, i, o, s, _, l, p, m, c, f, d, g;
  return (
    !!e &&
    ((t = LP_derive_doc()),
    g_iscasper && e.override_doc && (t = e.override_doc),
    (r = parseInt(e.from_iframe.posx)),
    (n = parseInt(e.from_iframe.posy)),
    (a = e.from_iframe.id),
    (i = e.from_iframe.rows),
    (o = e.from_iframe.width),
    (s = e.from_iframe.minheight),
    (_ = e.from_iframe.framename),
    (l = e.from_iframe.framesrc),
    (p = null),
    !is_your_popup_showing(t)) &&
    ((c = find_iframe_pos(t, _, l, !(m = !0))) ||
      (null !== (c = find_iframe_pos(t, _, l, !0)) && void 0 !== c.cframedoc ? (p = c.cframedoc) : pass),
    (d = f = 0),
    c
      ? ((f = parseInt(c.left) + r + "px"),
        (d = parseInt(c.top) + n + "px"),
        (g_toplevel_initial_abs_x = f),
        (g_toplevel_initial_abs_y = d))
      : (d = f = "10px"),
    (g = !(s = "90px")),
    (e.from_iframe.iframe = find_iframe(t, _, l, !1)),
    popupfill_create_iframe(t, f, d, a, i, o, s, !1, p, e.from_iframe),
    (g_popupfill_iframe_width_save = o),
    !0)
  );
}
var g_toplevel_initial_abs_x = null,
  g_toplevel_initial_abs_y = null;
function popupfillresize_handler(e) {
  0 < e.width && (g_minwidth_override = parseInt(e.width)),
    0 < e.height && (g_minheight_override = parseInt(e.height)),
    !g_create_iframe_in_top ||
      g_isie ||
      g_isfirefox ||
      (!LP_inIframe(window) && toplevel_iframe_state_get() && (g_draggable && g_iframe_docked, relocate_popupfill_iframes(document)));
}
function find_iframe_pos(e, t, r, n) {
  if (e) {
    var a,
      i,
      o = !0,
      s = !1,
      _ = !0,
      l = !0;
    try {
      var p = e.getElementsByTagName("IFRAME");
      if ((n && (p = e.getElementsByTagName("FRAME")), !t && 1 == p.length)) return LP_getAbsolutePos(e, p[0], !0, !0);
      for (var m = 50, c = [], a = 0; a < p.length && a < 50; a++) c[a] = p[a];
      for (a = 0; a < c.length; a++)
        if ((c[a].name && "" != t && c[a].name == t) || (c[a].src && "" != r && compare_puny_urls(c[a].src, r)))
          return LP_getAbsolutePos(e, c[a], !0, !0);
      if (n)
        for (a = 0; a < c.length; a++)
          for (var f = c[a].contentWindow.document, d = f.getElementsByTagName("FRAME"), i = 0, g; i < d.length && i < 50; i++) {
            if ((d[i].name && "" != t && d[i].name == t) || (d[i].src && "" != r && d[i].src == r))
              return ((g = LP_getAbsolutePos(f, d[i], !0, !0)).cframedoc = f), g;
          }
    } catch (e) {}
  }
  return null;
}
function find_iframe(e, t, r, n) {
  var a, i;
  if (e)
    try {
      var o = e.getElementsByTagName("IFRAME");
      if ((n && (o = e.getElementsByTagName("FRAME")), !t && 1 == o.length)) return o[0];
      for (var s = 50, _ = [], a = 0; a < o.length && a < 50; a++) _[a] = o[a];
      for (a = 0; a < _.length; a++)
        if ((_[a].name && "" != t && _[a].name == t) || (_[a].src && "" != r && compare_puny_urls(_[a].src, r))) return _[a];
      if (n)
        for (a = 0; a < _.length; a++)
          for (var l, p = _[a].contentWindow.document.getElementsByTagName("FRAME"), i = 0; i < p.length && i < 50; i++)
            if ((p[i].name && "" != t && p[i].name == t) || (p[i].src && "" != r && p[i].src == r)) return p[i];
    } catch (e) {}
  return null;
}
