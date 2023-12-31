function LP_field_set_backgroundPosition(e, t) {
  var e, n, o, i, r, l, i, r, l;
  return !(
    !(e = e || LP_derive_doc()) ||
    !t ||
    ((o = !(n = !(e = !1))),
    LP_get_text_dir(t) === n
      ? ((i = "98% 50%"),
        -1 < document.location.href.indexOf("https://mint.intuit.com/login.event?task=S") &&
          0 < document.getElementById(t.id).nextElementSibling.offsetWidth &&
          (i = "92% 50%"),
        null != typeof t.style.backgroundPosition
          ? t.style.backgroundPosition != i && (e = !0)
          : g_isie &&
            null != typeof t.currentStyle &&
            null != typeof t.currentStyle.backgroundPositionX &&
            null != typeof t.currentStyle.backgroundPositionY &&
            ((r = t.currentStyle.backgroundPositionX),
            (l = t.currentStyle.backgroundPositionY),
            ("98%" == r && lp_in_array(l, ["center", "50%"])) || (e = !0)))
      : ((i = "center left"),
        null != typeof t.style.backgroundPosition
          ? lp_in_array(t.style.backgroundPosition, ["center left", "left center", "0% 50%", "left"]) || (e = !0)
          : g_isie &&
            null != typeof t.currentStyle &&
            null != typeof t.currentStyle.backgroundPositionX &&
            null != typeof t.currentStyle.backgroundPositionY &&
            ((r = t.currentStyle.backgroundPositionX),
            (l = t.currentStyle.backgroundPositionY),
            (lp_in_array(r, ["left", "0%"]) && lp_in_array(l, ["center", "50%"])) || (e = !0))),
    e && (t.style.backgroundPosition = i),
    0)
  );
}
function LP_get_text_dir(e) {
  var t,
    n = !1,
    o = !0,
    i;
  return (o = e && (((i = LP_get_live_style(e)) && "rtl" == i.direction) || "rtl" == e.getAttribute("dir")) ? n : o);
}
function LP_input_has_bg_style_override(e) {
  if (!e) return !1;
  if (!g_stylesheet_grubbing) return !1;
  var t = !1;
  try {
    var n = formcacheget(e, "fakedoc", "input-bg-style");
    if (null != n) return n;
    var o = 32,
      i = 0,
      r = 0,
      l = new RegExp("(background|background-color):[^:].*!important"),
      _ = e.styleSheets;
    if (_ && l)
      for (i = 0; i < _.length && i < o; i++) {
        var a = null;
        if ((void 0 !== _[i].rules ? (a = _[i].rules) : void 0 !== _[i].cssRules && (a = _[i].cssRules), a)) {
          for (r = 0; r < a.length; r++)
            if (a[r] && a[r].selectorText && a[r].cssText && -1 != a[r].selectorText.indexOf("input:focus")) {
              var c = a[r].cssText;
              if (c && l.exec(c)) {
                verbose_log("focus hack:" + c), (t = !0);
                break;
              }
            }
          if (t) break;
        }
      }
  } catch (e) {}
  return formcacheset(e, "fakedoc", "input-bg-style", t), t;
}
function ForceFillOrphanFieldClicked(e, t, n) {
  if (!e && !(e = elt.ownerDocument)) return !1;
  var o = !0,
    i = !1,
    o;
  if ((o = ForceFillFieldClicked(e, t, i, n)))
    for (var r = e.getElementsByTagName("INPUT"), l = 0, l = 0; l < r.length && l < MAX_INPUTS_HARD; l++)
      if (r[l] == t && r[l + 1] && l + 1 < r.length && l + 1 < MAX_INPUTS_HARD) {
        isInputFieldPassword(e, r[l + 1]) && !lpIsFieldCurrentPWField(r[l + 1]) && (o = ForceFillFieldClicked(e, r[l + 1], i, n));
        break;
      }
  return o;
}
function revert_clickable_icon(e, t) {
  var t, n, t, o, i, r;
  verbose_log("entered revert_clickable_icon"),
    null != e &&
      ((t = t),
      (n = LP_getElementByIdOrName(e, t)),
      (i = o = !1),
      (r = "sites"),
      (t = getIconState(e, t)) && void 0 !== t.dofloater && (o = t.dofloater),
      t && void 0 !== t.inframe && (i = t.inframe),
      t && void 0 !== t.fillhint && (r = t.fillhint),
      verbose_log("entered BG image revert"),
      n ? (o ? reset_floating_icon : set_input_icon_image)(e, n, r) : verbose_log("could not find field named " + field_id));
}
function conditional_create_popup(e, t, n) {
  return null != e && null != t && g_clickable_input, !1;
}
function closeclickableicons(e) {
  if (null != (e = e || document)) {
    verbose_log("closeclickableicons called on " + e.location.href);
    for (var t = getAllIconStates(), n, o, n = 0; n < t.length; n++) {
      var i = t[n],
        o;
      if (((o = (o = i.IHTMLElement) || LP_getElementByIdOrName(e, i.idorname)), i.dofloat || !i.inframe || o))
        !i.dofloater && o && inputHasLPBackground(o) ? removeLPBackground(o) : pass;
      else if (g_isfirefox)
        try {
          var r,
            l,
            _ = e.getElementsByTagName("IFRAME");
          for (r = 0; r < _.length; r++)
            (l = _[r].contentDocument), (o = LP_getElementByIdOrName(l, i.idorname)) && "INPUT" == o.tagName && removeLPBackground(o);
        } catch (e) {
          verbose_log("Error frame traverse " + e.message), (l = null);
        }
      else !g_isie && g_create_iframe_in_top && pass;
      resetAllIconStates();
    }
    var a = LP_get_icon_divs(e),
      r,
      c;
    for (r in a) {
      a.hasOwnProperty(r) &&
        null != e.getElementById(a[r]) &&
        (g_do_icon_number_hint && LP_delete_floating_icon_hint(e, a[r]), LP_delete_floating_icon(e, a[r]));
    }
    LP_reset_icon_divs(e);
  }
}
function setup_input_icon(o, i, r, l, _) {
  var e = bg.get("LPContentScriptFeatures");
  if (!(bg && bg.FieldOverrides && e && (e.field_override_global || e.field_override_admin))) return createIcon(o, i, r, l, _);
  bg.FieldOverrides.getSite({ host: o.location.host, pathname: o.location.pathname }, function (e) {
    var t = !1;
    if (e) {
      Element.prototype.matches ||
        (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      for (var n = 0; n < e.length; n++) if (i.matches(e[n].querySelector) && "off" == e[n].override) return !1;
    }
    return createIcon(o, i, r, l, _);
  });
}
function createIcon(t, n, o, e, i) {
  if ("undefined" == typeof bg || !bg.get("LPContentScriptFeatures").web_client_fill) {
    var r = !1;
    if (!LP_explicit_ignored(t, n)) {
      if (
        "undefined" != typeof g_isie &&
        g_isie &&
        "undefined" != typeof LPfn &&
        null != typeof LPfn.isInfieldIconDisabledForFormfills &&
        LPfn.isInfieldIconDisabledForFormfills &&
        "formfills" == o
      )
        return (r = !0);
      if (null == n) verbose_log("setup_input_icon: ERROR passed null field");
      else if (
        !(
          n.form &&
          "sites" == o &&
          is_shopping_form(t, n.form) &&
          g_aspx_hack &&
          ((isASPpage() && 2 < t.getElementsByTagName("form").length) || !isASPpage())
        )
      ) {
        g_isfirefox &&
          LP &&
          "undefined" != typeof g_icon_number_in_toolbar &&
          g_icon_number_in_toolbar &&
          LP.lp_handle_buttons_all("refresh");
        var l = null,
          l =
            "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
              ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
              : g_isfirefox
              ? top.document
              : document,
          _ = ((t = t || l), LP_pickFieldName(t, n));
        if (null != n && l && t) {
          var a = getIconState(t, _);
          if (a && a.IHTMLElement == n && (inputHasLPBackground(n) && removeLPBackground(n), LP_floating_icon_exists(t, _))) return !1;
          var a = null,
            c,
            a = (("generate" == o || (!i && shouldOfferGenerate(t, n))) && (o = "generate"), gettldcached(t.location.href)),
            s = shouldCreateFloatingIcon(t, n, a),
            f = !1,
            u = LP_get_text_dir(n);
          if ((!1 === u && pass, !LP_fieldIsReadOnly(n) && !LP_fieldIsDisabled(n))) {
            var l = t != l,
              l =
                (g_create_iframe_in_top && !g_isie && !g_isfirefox && LP_inIframe(window) && (l = !0),
                {
                  fillhint: o,
                  fillhintnumber: e[o],
                  inframe: l,
                  idorname: _,
                  doctld: a,
                  dofloater: s ? 1 : 0,
                  no_check_generate: i ? 1 : 0,
                  IHTMLElement: n,
                  text_direction: u
                }),
              a;
            if (
              ("function" == typeof is_edge &&
                is_edge() &&
                ("undefined" == typeof g_created_edge_stylesheet &&
                  ((g_created_edge_stylesheet = !0),
                  ((a = t.createElement("style")).type = "text/css"),
                  a.appendChild(t.createTextNode(".lastpassClearHidden::-ms-clear { display:none; }")),
                  document.head ? document.head.appendChild(a) : document.body && document.body.appendChild(a)),
                -1 == n.className.indexOf("lastpassClearHidden")) &&
                (n.className += " lastpassClearHidden"),
              s)
            ) {
              if (
                (g_isfirefox && verbose_log("setup_input_icon step3b"),
                !lpIsVisible(n) || !(null == n.form || (n.form && lpIsVisible(n.form))))
              )
                return !1;
              saveIconState(_, l, n), (r = LP_create_floating_icon(t, n, o, e));
            } else {
              saveIconState(_, l, n);
              var g = !1,
                r = set_input_icon_image(t, n, o, !1);
            }
            set_bg_highlight_effect_handlers(t, n, o),
              LP_didDocumentEscapeEvent(t) ||
                (LP_setDocumentEscapeEvent(t),
                LP_addEventHandler(
                  t,
                  "keydown",
                  function (e) {
                    LP_keypress_handler(e);
                  },
                  !1
                )),
              LP_didFieldKeyEvent(t, n)
                ? verbose_log("skip KEYDOWN HANDLER ON " + LP_pickFieldName(t, n))
                : (verbose_log("SETTING KEYDOWN HANDLER ON " + LP_pickFieldName(t, n)),
                  LP_setFieldKeyEvent(t, n),
                  LP_addEventHandler(
                    n,
                    "keydown",
                    function (e) {
                      LP_field_keypress_handler(e, n, o, t);
                    },
                    !1
                  ),
                  g_isfirefox &&
                    LP_addEventHandler(
                      n,
                      "keyup",
                      function (e) {
                        handle_form_text_change(t, n, n.form, e);
                      },
                      !1
                    ));
          }
        }
      }
    }
    return r;
  }
}
function refresh_input_icon_bg(e, t, n) {
  if (!e && !(e = LP_derive_doc())) return null;
  var o;
  t && set_input_icon_image(e, t, n, (o = !1));
}
function refresh_input_all_icon_bg(e) {
  if (null != (e = null == e ? document : e)) {
    try {
      if (0 < e.location.href.indexOf(".xul")) return;
      verbose_log("refreshing input icons on " + e.location.href);
    } catch (e) {
      return;
    }
    for (var t = getAllIconStates(), n, n = 0; n < t.length; n++) {
      var o = t[n].idorname,
        i = t[n].fillhint,
        r = t[n].dofloater,
        l = t[n].IHTMLElement;
      !(l = (l = element_is_detached(e, l, 0) ? null : l) || LP_getElementByIdOrName(e, o)) || r || refresh_input_icon_bg(e, l, i);
    }
  }
}
function set_input_icon_image(e, t, n, o) {
  if ("undefined" == typeof bg || !bg.get("LPContentScriptFeatures").web_client_fill) {
    if (!(e = e || LP_derive_doc())) return !1;
    var i,
      r,
      l,
      r = (r = e.defaultView) || window,
      _ = 0,
      a = 1,
      c = 2,
      s = 3,
      f = 16,
      u = 17,
      g = 18,
      d = 19,
      p = -1,
      m = -17,
      h = 0,
      b = [];
    if (
      ((b[0] = g_sites_light_ico),
      (b[1] = g_pw_light_ico),
      (b[3] = g_close_light_ico),
      (b[-1] = ""),
      (b[2] = g_ff_light_ico),
      (b[16] = g_sites_ico),
      (b[17] = g_pw_ico),
      (b[19] = g_close_ico),
      (b[m] = ""),
      (b[18] = g_ff_ico),
      LP_has_highdef_display(r) &&
        ((b[0] = g_40_icons["16x16_lite@2x"]),
        (b[16] = g_40_icons["16x16_dark@2x"]),
        (b[3] = g_40_icons["IF_Close@2x"]),
        (b[19] = g_40_icons["IF_Close@2x"]),
        (b[2] = g_40_icons["FormFill@2x"]),
        (b[18] = g_40_icons["FormFill_dark@2x"]),
        (b[1] = g_40_icons["Generate@2x"]),
        (b[17] = g_40_icons["Generate_dark@2x"])),
      null == t)
    )
      return !1;
    if (t.tagName && void 0 !== t.tagName.toUpperCase && "INPUT" != t.tagName.toUpperCase()) return !1;
    void 0 === n || null == n
      ? (l = 0)
      : "formfills" == n
      ? (l = 2)
      : "sites" == n
      ? (l = 0)
      : "generate" == n
      ? (l = 1)
      : "cancel" == n && (l = 3),
      o && (l |= 16);
    var m = LP_fieldGetWidth(t),
      v = !1,
      y,
      n,
      m,
      v,
      L,
      r,
      v;
    return (
      ("sites" != n && !g_is_specialsite) || (v = !0),
      LP_iconFieldWidthOK(t, m, v) &&
        ((y = t.style.border),
        "" == (n = t.style.backgroundImage) && (m = LP_getComputedStyle(r, t)) && ((n = m.backgroundImage), (y = m.border)),
        "none" == n && (n = ""),
        0 <= l) &&
        (void 0 === b[l] && verbose_log("no icon defined for iconval=" + l),
        n != "url(" + (v = LP_getloggedin() && (0 == l || 16 == l) ? getnumbericon(e, t, o) : b[l]) + ")") &&
        ((t.style.backgroundImage = "url(" + v + ")"),
        "no-repeat" != t.style.backgroundRepeat && (t.style.backgroundRepeat = "no-repeat"),
        "scroll" != t.style.backgroundAttachment && (t.style.backgroundAttachment = "scroll"),
        (r = LP_getAbsolutePos(e, t)) && r.height < 18 && 0 < r.height
          ? "contain" != t.style.backgroundSize && (t.style.backgroundSize = "contain")
          : "16px 18px" != t.style.backgroundSize && (t.style.backgroundSize = "16px 18px"),
        LP_field_set_backgroundPosition(e, t)),
      !0
    );
  }
}
function set_bg_highlight_effect_handlers(t, n, o) {
  var e;
  n &&
    ("function" == typeof n.__LpInputIcon_mouseover && n.removeEventListener("mouseover", n.__LpInputIcon_mouseover),
    (n.__LpInputIcon_mouseover = LP_addEventHandler(n, "mouseover", function (e) {
      bg_highlight_effect_mouseover(e, t, n, o);
    })),
    "function" == typeof n.__LpInputIcon_focus && n.removeEventListener("focus", n.__LpInputIcon_focus),
    (n.__LpInputIcon_focus = LP_addEventHandler(n, "focus", function (e) {
      bg_highlight_effect_mouseover(e, t, n, o);
    })),
    "function" == typeof n.__LpInputIcon_mouseout && n.removeEventListener("mouseout", n.__LpInputIcon_mouseout),
    (n.__LpInputIcon_mouseout = LP_addEventHandler(n, "mouseout", function (e) {
      bg_highlight_effect_mouseout(e, t, n, o);
    })),
    "function" == typeof n.__LpInputIcon_blur && n.removeEventListener("blur", n.__LpInputIcon_blur),
    (n.__LpInputIcon_blur = LP_addEventHandler(n, "blur", function (e) {
      bg_highlight_effect_mouseout(e, t, n, o);
    })),
    "function" == typeof n.__LpInputIcon_mousemove && n.removeEventListener("mousemove", n.__LpInputIcon_mousemove),
    (n.__LpInputIcon_mousemove = LP_addEventHandler(n, "mousemove", function (e) {
      bg_highlight_effect_mousemove(e, t, n, o);
    })),
    "sites" != o || !LP_getloggedin() || g_isfirefox || g_isie || n.setAttribute("autocomplete", "off"));
}
function bg_highlight_effect_mousemove(e, t, n, o) {
  var e, t, i, r;
  ("undefined" != typeof bg && bg.get("LPContentScriptFeatures").web_client_fill) ||
    (null == e && (e = window.event), (e = LP_getMousePos(e)).x <= 0 && e.y <= 0) ||
    ((t = LP_getAbsolutePos(t, n)).width <= 0 && t.height <= 0) ||
    ((r = (r = (i = t.left + t.width) - 0.02 * i - 10) < t.left ? t.left : r) < e.x && i > e.x && t.top < e.y && t.top + t.height > e.y
      ? (n.style.cursor = "pointer")
      : (n.style.cursor = "auto"));
}
function bg_highlight_effect_mouseover(e, t, n, o) {
  var i = !0,
    e,
    o,
    r;
  null == e && (e = window.event),
    (is_your_popup_showing(t) && t.g_popupfill_parent == n) ||
      (LP_getEventTarget(e) == n &&
        ((e = o),
        (o = !1),
        (r = getIconState(t, LP_pickFieldName(t, n))),
        e || (r && r.hint && (e = r.hint)),
        r && r.dofloater && (o = r.dofloater),
        e) &&
        !o &&
        set_input_icon_image(t, n, e, !0));
}
function bg_highlight_effect_mouseout(e, t, n, o) {
  var i = !0,
    e,
    o,
    r;
  null == e && (e = window.event),
    (is_your_popup_showing(t) && t.g_popupfill_parent == n) ||
      ((e = o),
      (o = !1),
      (r = getIconState(t, LP_pickFieldName(t, n))),
      e || (r && r.hint && (e = r.hint)),
      r && r.dofloater && (o = r.dofloater),
      !e) ||
      o ||
      set_input_icon_image(t, n, e, !1);
}
function popuptoggle(e, t, n, o, i, r, l, _, a, c) {
  var s, f;
  if (c) s = c;
  else if (t) {
    if (0 < t.location.href.indexOf(".xul")) return !0;
    s = LP_getElementByIdOrName(t, n);
  } else {
    if (0 < e.location.href.indexOf(".xul")) return !0;
    s = LP_getElementByIdOrName(e, n);
  }
  "undefined" != typeof reset_forcefill_without_fillbest && reset_forcefill_without_fillbest();
  var c = "sites",
    l;
  if ((o ? (c = "generate") : r ? (c = "save") : l && (c = "formfills"), is_your_popup_showing(e)))
    closepopupfills(e, "away"),
      g_isfirefox
        ? t
          ? ((t.g_popupfill_parent_last = t.g_popupfill_parent), (t.g_popupfill_parent = null))
          : ((e.g_popupfill_parent_last = e.g_popupfill_parent), (e.g_popupfill_parent = null))
        : ((g_popupfill_parent_last = g_popupfill_parent), (g_popupfill_parent = null));
  else {
    if (!(l = LP_getloggedin())) {
      if ("undefined" != typeof LP && void 0 !== LP.lpOpenLogin) return void LP.lpOpenLogin();
      if (!g_isie) return void sendBG({ cmd: "dologinaction" });
    }
    g_isfirefox ? (t ? (t.g_popupfill_parent = s) : (e.g_popupfill_parent = s)) : (g_popupfill_parent = s);
    var r = !!r,
      u,
      g,
      u =
        (g_isie
          ? "undefined" != typeof init_LPfn && init_LPfn() && LPfn.ie_set_lpifmsg(e, s, o, r, c, _)
          : ((u = LP_pickFormName(s.ownerDocument, s.form)),
            (o = o ? 1 : 0),
            bg.InfieldCommands.setActiveFormData({
              active: u,
              activefieldid: LP_pickFieldName(document, s),
              ask_generate: o,
              opentosave: r,
              activefieldtype: s.type,
              start_type: c
            })),
        g_isfirefox ||
          g_isie ||
          ((g = document.location.href),
          "undefined" != typeof punycode && (g = punycode.URLToASCII(document.location.href)),
          sendBG({ cmd: "popupregister", docnum: g_docnum, url: g })),
        "300px"),
      d,
      p,
      o = 0,
      r = 0,
      n =
        ((p = ("function" == typeof ff_calculate_iframe_pos ? ff_calculate_iframe_pos : calculate_iframe_pos)(
          e,
          s,
          u,
          should_ignore_body_relative(e)
        )) && ((o = p.posx), (r = p.posy)),
        n);
    if (g_isfirefox) ff_popupfill_create_iframe(e, o, r, n, null, null, s, c);
    else {
      var c = chk_form_is_nonlogin_form(document, s.form),
        m = checkDocumentForLoginOrphans(document) || checkDocumentForLoginOrphansFirstStage(document),
        h = checkDocumentForLoginFirstStageForm(document),
        m = m || h || chk_form_has_password(document, s.form),
        h = g_popupfill_rows,
        c = (c && !m && (h = g_popupfill_rows_FF), g_popupfill_widest + 40),
        m = 120;
      if (
        ((c = c < m ? m : c) < g_popupfill_parent.offsetWidth &&
          ((c = g_popupfill_parent.offsetWidth), (c += 2 * Math.abs(POPUP_FIELD_OFFSET))),
        (c = Math.min(c, MAX_DIALOG_WIDTH)),
        1 == h && !create_onerow_iframe)
      ) {
        var m = null;
        if ((g_fillaid && (m = g_fillaid), null != (m = isEmptyObject(g_autofillsites) ? m : g_autofillsites[0].aid)))
          return sendBG({ cmd: "autofillaid", aid: m }), void verbose_log("filling only, not creating 1 row iframe");
        verbose_log("tried to fill form with invalid acct");
      }
      if (0 == h && i == NO_FORCE_NOHITS) verbose_log("not creating empty iframe");
      else {
        var l = LP_getloggedin();
        if (g_dologin_clickable && !l && (!g_isie || (g_isie && i == FORCE_SHOW_NOHITS_NOLOGIN))) {
          if ((verbose_log("login state: checking whether to issue Chrome login prompt"), i == FORCE_SHOW_NOHITS_NOLOGIN)) return;
          if (!g_isie) return void sendBG({ cmd: "dologinaction" });
        }
      }
      if (g_create_iframe_in_top && !g_isie && !g_isfirefox && LP_inIframe(window) && LP_do_toplevel_iframe_hack(window)) {
        var b = !0,
          p,
          r = (p = calculate_iframe_pos(e, s, u, !0)) ? ((o = parseInt(p.posx)), parseInt(p.posy)) : (o = 0),
          m = "",
          l = "";
        try {
          (m = window.name), (l = document.location.href);
        } catch (e) {}
        var g = e.location.href,
          i = ("undefined" != typeof punycode && (g = punycode.URLToASCII(e.location.href)), null);
        s && s.getBoundingClientRect && (i = s.getBoundingClientRect()),
          sendBG({
            cmd: "createpopuptoplevelfromframe",
            posx: o,
            posy: r,
            id: n,
            rows: h,
            width: c,
            minheight: g_minheight_override,
            framename: m,
            framesrc: l,
            url: g,
            fillhint: _,
            fieldBox: { top: i.top, right: i.right, bottom: i.bottom, left: i.left, width: i.width }
          });
      } else
        popupfill_create_iframe(e, o, r, n, h, c, g_minheight_override, null, null, {
          posx: o,
          posy: r,
          id: n,
          width: c,
          fieldEl: s,
          fillhint: _
        });
      g_popupfill_iframe_width_save = c;
    }
    g_isfirefox
      ? t
        ? relocate_popupfill_iframes(t)
        : relocate_popupfill_iframes(e)
      : (g_create_iframe_in_top && LP_inIframe(window) && !g_isie && !g_isfirefox) || relocate_popupfill_iframes(e);
  }
}
function inputHasLPBackground(t) {
  if (null != t) {
    var n = null;
    if (g_isie && void 0 !== t.currentStyle) void 0 !== t.currentStyle && (n = t.currentStyle);
    else
      try {
        n = t.ownerDocument.defaultView.getComputedStyle(t, "");
      } catch (e) {
        void 0 !== t.currentStyle && (n = t.currentStyle);
      }
    if (n && ("INPUT" == t.tagName || "input" == t.tagName) && "" != n.backgroundImage) {
      if (
        -1 != n.backgroundImage.indexOf(g_sites_light_ico) ||
        -1 != n.backgroundImage.indexOf(g_40_icons["16x16_lite@2x"]) ||
        -1 != n.backgroundImage.indexOf(g_pw_light_ico) ||
        -1 != n.backgroundImage.indexOf(g_close_light_ico) ||
        -1 != n.backgroundImage.indexOf(g_ff_light_ico) ||
        -1 != n.backgroundImage.indexOf(g_sites_ico) ||
        -1 != n.backgroundImage.indexOf(g_pw_ico) ||
        -1 != n.backgroundImage.indexOf(g_close_ico) ||
        -1 != n.backgroundImage.indexOf(g_ff_ico) ||
        -1 != n.backgroundImage.indexOf(g_40_icons.IF_Close) ||
        -1 != n.backgroundImage.indexOf(g_40_icons["IF_Close@2x"]) ||
        -1 != n.backgroundImage.indexOf(g_40_icons.FormFill) ||
        -1 != n.backgroundImage.indexOf(g_40_icons["FormFill@2x"]) ||
        -1 != n.backgroundImage.indexOf(g_40_icons.FormFill_dark) ||
        -1 != n.backgroundImage.indexOf(g_40_icons["FormFill_dark@2x"]) ||
        -1 != n.backgroundImage.indexOf(g_40_icons.Generate) ||
        -1 != n.backgroundImage.indexOf(g_40_icons["Generate@2x"]) ||
        -1 != n.backgroundImage.indexOf(g_40_icons.Generate_dark) ||
        -1 != n.backgroundImage.indexOf(g_40_icons["Generate_dark@2x"])
      )
        return verbose_log("icon " + LP_getname(t) + " has icon w/o number"), !0;
      if (
        -1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !0)) ||
        -1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !1))
      )
        return !0;
      for (var e, e = 0; e <= 9; e++)
        if (
          -1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !0, e)) ||
          -1 != n.backgroundImage.indexOf(getnumbericon(t.ownerDocument, t, !1, e))
        )
          return verbose_log("icon " + LP_getname(t) + " has icon with number " + e), !0;
    }
  }
  return !1;
}
function removeLPBackground(e) {
  if (!e) return !1;
  try {
    (e.style.backgroundImage = "none"),
      (e.style.backgroundRepeat = "initial"),
      (e.style.backgroundAttachment = "initial"),
      (e.style.backgroundPosition = "initial"),
      (e.style.backgroundSize = "initial");
  } catch (e) {
    return verbose_log("removeLPBackground error: " + e.message), !1;
  }
  return !0;
}
