function LP_floating_icon_exists(e, i) {
  var t;
  return !!(e = e || LP_derive_doc()) && null != LP_getElementByIdOrName(e, LP_compute_floating_iconcontainer_id(e, i));
}
function do_icon_mouseover(e, i, t) {
  var t, _, _, n, o, i, l, r, r, l, i;
  return (
    !(null == e || null == i || !t) &&
    ((_ = LP_compute_floating_icon_id(e, (t = LP_pickFieldName(e, t)))),
    (_ = e.getElementById(_)),
    is_your_popup_showing(e)
      ? (null != _ && ((_.style.opacity = "1"), (_.style.filter = "alpha(opacity=100)")), !1)
      : (null != _ &&
          ((n = !0),
          null != e.getElementById(i) &&
            ((i = !1),
            "formfills" == (i = (l = getIconState(e, t)) ? l.fillhint : i)
              ? (LP_has_highdef_display(r)
                  ? LP_set_image_src(_, g_40_icons["FormFill_dark@2x"])
                  : LP_set_image_src(_, g_40_icons.FormFill_dark),
                (n = !1))
              : "offersave" == i
              ? (n = !1)
              : "generate" == i &&
                (LP_has_highdef_display(r)
                  ? LP_set_image_src(_, g_40_icons["Generate_dark@2x"])
                  : LP_set_image_src(_, g_40_icons.Generate_dark),
                (n = !1))),
          n &&
            ((r = (r = e.defaultView) || window),
            LP_has_highdef_display(r) ? LP_set_image_src(_, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(_, g_40_icons["16x16"])),
          (_.style.opacity = "1"),
          (_.style.filter = "alpha(opacity=100)")),
        void (
          g_do_icon_number_hint &&
          ((l = LP_compute_floating_number_id(e, t)), null != (i = e.getElementById(l))) &&
          g_icon_shading &&
          (i.style.backgroundColor = "#CCFF99")
        )))
  );
}
function do_icon_mouseout(e, i, t) {
  if (null == e || null == i || !t) return !1;
  var t = LP_pickFieldName(e, t),
    _ = LP_compute_floating_icon_id(e, t),
    _ = e.getElementById(_),
    n,
    o,
    i;
  if (is_your_popup_showing(e)) return null != _ && (_.style.opacity = "0.6"), !1;
  if (null != _) {
    if (null == e.getElementById(i)) return !1;
    var i,
      i = (i = e.defaultView) || window,
      l = !1,
      o = getIconState(e, t);
    "default" ==
      (l = (l = o ? o.fillhint : l) && ("sites" === l || "formfills" === l || "generate" === l || "offersave" === l) ? l : "default") ||
    "sites" == l
      ? (LP_has_highdef_display(i) ? LP_set_image_src(_, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(_, g_40_icons["16x16"]),
        (_.style.opacity = "0.6"),
        (_.style.filter = "alpha(opacity=60)"))
      : "formfills" == l
      ? (LP_has_highdef_display(i) ? LP_set_image_src(_, g_40_icons["FormFill_dark@2x"]) : LP_set_image_src(_, g_40_icons.FormFill_dark),
        (_.style.opacity = "0.6"),
        (_.style.filter = "alpha(opacity=60)"))
      : "generate" == l &&
        (LP_has_highdef_display(i) ? LP_set_image_src(_, g_40_icons["Generate_dark@2x"]) : LP_set_image_src(_, g_40_icons.Generate_dark),
        (_.style.opacity = "0.6"),
        (_.style.filter = "alpha(opacity=60)"));
  }
  g_do_icon_number_hint &&
    ((o = LP_compute_floating_number_id(e, t)), null != (i = e.getElementById(o))) &&
    (g_icon_shading
      ? (i.style.backgroundColor = "#FFFFFF")
      : l && g_icon_numbers && 1 < g_icon_numbers[l]
      ? (i.style.display = "block")
      : (i.style.display = "none"));
}
function change_clickable_icon_to_cancel(e, i, t) {
  if (!e && !(e = LP_derive_doc())) return !1;
  var _,
    _ = (_ = e.defaultView) || window,
    t = LP_compute_floating_icon_id(e, t),
    t = e.getElementById(t),
    n;
  if (null != t) {
    if (null == e.getElementById(i)) return !1;
    LP_has_highdef_display(_) ? LP_set_image_src(t, g_40_icons["IF_Close@2x"]) : LP_set_image_src(t, g_40_icons.IF_Close),
      (t.style.opacity = "0.6"),
      (t.style.filter = "alpha(opacity=60)");
  }
  return !0;
}
function shouldCreateFloatingIcon(e, _, i) {
  var i;
  return (
    !!(e = e || LP_derive_doc()) &&
    !(
      !e ||
      !_ ||
      ("stripe.com" != i &&
        ("dominos.com" == i ||
          (("metlife.com" != i || -1 == e.location.href.indexOf("mybenefits.metlife.com")) &&
            ((i = LP_get_live_style(_)) && i.backgroundImage && "none" != i.backgroundImage && !inputHasLPBackground(_)
              ? 0 <= i.backgroundImage.indexOf("blank")
              : !g_trial_bg_expt || t(_)))))
    )
  );
  function t(e) {
    var i, t;
    if (e)
      return (
        (e.style.backgroundImage =
          "url(" +
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" +
          ")"),
        (t = LP_get_live_style(_)) && "none" != t.backgroundImage && t.backgroundImage
          ? !g_stylesheet_grubbing || !LP_input_has_bg_style_override(e.ownerDocument)
          : void 0
      );
  }
}
function LP_create_floating_icon(i, t, e, _) {
  if (!i && !(i = LP_derive_doc())) return !1;
  if (!t) return !1;
  var n,
    n = (n = i.defaultView) || window,
    o = i.getElementsByTagName("body")[0],
    l,
    r,
    l = LP_pickFieldName(i, t),
    s = !1,
    a = getIconState(i, l),
    a = (a && a.fillhint, LP_compute_floating_iconcontainer_id(i, l));
  if (LP_floating_icon_exists(i, l)) return !1;
  ((r = i.createElement("div")).id = a),
    "undefined" != typeof g_isfirefox && g_isfirefox
      ? (null == i.g_popup_divs && (i.g_popup_divs = {}), (i.g_popup_divs[r.id] = r.id))
      : (g_popup_divs[r.id] = r.id),
    (l = i.createElement("img")),
    t.offsetHeight < LPICON_WIDTH && ((l.height = t.offsetHeight), (l.width = l.height)),
    (l.id = r.id + "_icon");
  var a = !0,
    d;
  return (
    null != e &&
      ("formfills" == e
        ? (LP_has_highdef_display(n) ? LP_set_image_src(l, g_40_icons["FormFill_dark@2x"]) : LP_set_image_src(l, g_40_icons.FormFill_dark),
          (l.style.opacity = "0.6"),
          (a = !(l.style.filter = "alpha(opacity=60)")))
        : "generate" == e &&
          (LP_has_highdef_display(n) ? LP_set_image_src(l, g_40_icons["Generate_dark@2x"]) : LP_set_image_src(l, g_40_icons.Generate_dark),
          (l.style.opacity = "0.6"),
          (a = !(l.style.filter = "alpha(opacity=60)")))),
    a &&
      (LP_has_highdef_display(n) ? LP_set_image_src(l, g_40_icons["16x16_dark@2x"]) : LP_set_image_src(l, g_40_icons["16x16"]),
      (l.style.opacity = "0.6"),
      (l.style.filter = "alpha(opacity=60)")),
    r.appendChild(l),
    "sites" != e || !LP_getloggedin() || g_isfirefox || g_isie || t.setAttribute("autocomplete", "off"),
    g_do_icon_number_hint && LP_create_floating_icon_hint(i, r.id, e, _) && LP_set_floating_icon_hint(i, r.id, e, _),
    o.appendChild(r),
    (r.style.maxHeight = LPICON_WIDTH + "px"),
    (r.style.verticalAlign = "top"),
    (l.style.verticalAlign = "top"),
    "undefined" != typeof g_docnum && verbose_log("[" + g_docnum + "] setting up click listener on icon for " + LP_pickFieldName(i, t)),
    g_icon_hover &&
      (LP_addEventHandler(r, "mouseover", function (e) {
        return do_icon_mouseover(i, r.id, t), LP_stopEventPropagation(e), !1;
      }),
      LP_addEventHandler(r, "mouseout", function (e) {
        return do_icon_mouseout(i, r.id, t), LP_stopEventPropagation(e), !1;
      })),
    g_icon_parent_hover &&
      (LP_addEventHandler(t, "mouseover", function (e) {
        return do_icon_mouseover(i, r.id, t), LP_stopEventPropagation(e), !1;
      }),
      LP_addEventHandler(t, "mouseout", function (e) {
        return do_icon_mouseout(i, r.id, t), LP_stopEventPropagation(e), !1;
      })),
    LP_addEventHandler(
      o,
      "DOMsubtreemodified",
      function () {
        return popupfill_resize(i), !1;
      },
      !1
    ),
    LP_addEventHandler(
      o,
      "resize",
      function () {
        return popupfill_resize(i), !1;
      },
      !1
    ),
    (o.onresize = onresize_handler),
    setprops_floating_icon(i, t, r, e, _),
    !0
  );
}
function move_floating_icon(e, i, t, _) {
  var n, o, l, r, l, l;
  return !(
    !(e = e || LP_derive_doc()) ||
    !i ||
    ((n = e.getElementsByTagName("body")[0]),
    (r = LP_pickFieldName(e, i, LP_GETNAME_FAVOR_ID_OVER_NAME)),
    t || ((l = getIconState(e, r)) && (t = l.fillhint)),
    (l = LP_getElementByIdOrName(e, LP_compute_floating_iconcontainer_id(e, r))) &&
      (g_do_icon_number_hint && (LP_getloggedin() ? LP_set_floating_icon_hint(e, l.id, t, _) : LP_delete_floating_icon_hint(e, l.id)),
      setprops_floating_icon(e, i, l, t, _)),
    0)
  );
}
function setprops_floating_icon(e, i, t, _, n) {
  var o, o, l, r, s, r, r, a, o, l, d, c, r, n, _, r, _, r, o, g, p, u, f, m, h, a, _, l, m, h, P;
  function L(e, i) {
    var t, e, _;
    e &&
      i &&
      ((t = !1), (e = e.getElementsByTagName("body")[0]), (_ = i.parentNode)) &&
      _ != e &&
      e &&
      (_.removeChild(i), e.appendChild(i), (t = !0));
  }
  e &&
    i &&
    t &&
    ((o = LP_pickFieldName(e, i)), (o = getIconState(e, o))) &&
    (L(e, t),
    "absolute" != t.style.position && (t.style.position = "absolute"),
    null != (l = LP_getAbsolutePos(e, i))
      ? (i.offsetHeight > LPICON_WIDTH
          ? ((r = l.top + (i.offsetHeight - LPICON_WIDTH) / 2 + "px"), t.style.top != r && (t.style.top = r))
          : t.style.top != l.top + "px" && (t.style.top = l.top + "px"),
        (s = !1),
        (r = 0 == o.text_direction ? l.left + 2 + "px" : l.left + i.offsetWidth - LPICON_WIDTH - 2 + "px"),
        t.style.left != r && (t.style.left = r),
        g_do_icon_number_hint &&
          (null == P && (P = e.getElementById(t.id + "_icon")),
          (o = parseInt(t.style.left)),
          (l = parseInt(t.style.top)),
          null != (d = e.getElementById(t.id + "_numspan"))) &&
          (L(e, d),
          null != _ &&
          null != n &&
          null != n[_] &&
          1 < n[_] &&
          ((r = n[_]),
          0 < n[_] && n[_] < 9 && (r = " " + n[_]),
          null !=
            (n = LP_measureText(e, r, null, "font-size: 9px;font-family: Helvetica,Arial,sans-serif;font-weight:bold;line-height:11px;")))
            ? ((_ = void 0 === P.width || 0 == P.width ? LPICON_WIDTH : P.width),
              (r = void 0 === P.height || 0 == P.height ? LPICON_HEIGHT : P.height),
              (o = o + _ - n.width + 2 + "px"),
              (m =
                "position:absolute !important; visibility:visible !important; border:0px !important; font-size:9px !important; font-family: Helvetica Neue,Helvetica,Arial,sans-serif; top:" +
                (p = l + r - n.height + 6 + "px") +
                " !important; left:" +
                (u = o) +
                " !important; background-color: " +
                "#808080" +
                "; padding: 1px 2px !important; font-weight: bold !important; color:#ffffff !important; cursor: default; line-height:11px !important; max-width: 10px !important; "),
              (h = "undefined" != typeof window && window ? window : e.defaultView),
              "" !== (_ = (a = LP_getComputedStyle(h, d)).zIndex) && "auto" != _ && (m = m + "z-index:" + _ + " !important;"),
              ("absolute" == a.position &&
                "visible" == a.visibility &&
                "9px" == a.fontSize &&
                "1px 2px" == a.padding &&
                "11px" == a.lineHeight &&
                a.top == p &&
                a.left == u) ||
                (d.style.cssText = m))
            : (d.style.cssText = m = "display:none;")))
      : verbose_log("ERROR: unable to relocate clickable icon"),
    null != (l = getZIndex(e, i, 0, 0)) ? l++ : (l = CLICKABLE_ICON_ZINDEX),
    t.style.zIndex != l && (t.style.zIndex = l),
    g_do_icon_number_hint &&
      null != d &&
      ((m = m + "z-index:" + (l + 1) + " !important;"),
      (h = "undefined" != typeof window && window ? window : e.defaultView),
      ((a = LP_getComputedStyle(h, d)) &&
        "absolute" == a.position &&
        "visible" == a.visibility &&
        "9px" == a.fontSize &&
        "1px 2px" == a.padding &&
        "11px" == a.lineHeight &&
        a.top == p &&
        a.left == u &&
        a.zIndex == l + 1) ||
        (d.style.cssText = m)),
    checkIsDisplayed(e, i, 0) ? (t.style.display = "") : (t.style.display = "none"),
    (P = t.childNodes[0]),
    parseInt(i.offsetHeight) < LPICON_WIDTH
      ? (i.offsetHeight != P.height && (P.height = parseInt(i.offsetHeight)), i.offsetHeight != P.height && (P.width = P.height))
      : (P.height != LPICON_WIDTH && (P.height = LPICON_WIDTH), P.width != LPICON_WIDTH && (P.width = LPICON_WIDTH)));
}
function LP_reset_icon_divs(e) {
  return (
    !!(e = e || LP_derive_doc()) && ("undefined" != typeof g_isfirefox && g_isfirefox ? (e.g_popup_divs = {}) : (g_popup_divs = {}), !0)
  );
}
function LP_store_icon_div(e, i) {
  return (
    !!(e = e || LP_derive_doc()) &&
    ("undefined" != typeof g_isfirefox && g_isfirefox
      ? (null == e.g_popup_divs && (e.g_popup_divs = {}), (e.g_popup_divs[i] = i))
      : (g_popup_divs[i] = i),
    !0)
  );
}
function LP_delete_icon_div(e, i) {
  return "undefined" != typeof g_isfirefox && g_isfirefox ? e && delete e.g_popup_divs[i] : delete g_popup_divs[i], !0;
}
function LP_get_icon_divs(e) {
  return (e = e || LP_derive_doc())
    ? "undefined" != typeof g_isfirefox && g_isfirefox
      ? null == e.g_popup_divs
        ? {}
        : e.g_popup_divs
      : null == g_popup_divs
      ? {}
      : g_popup_divs
    : {};
}
function LP_set_floating_icon_hint(e, i, t, _) {
  var n, o, l;
  return (
    !!(e = e || LP_derive_doc()) &&
    (LP_getloggedin()
      ? (null != (n = e.getElementById(i + "_numspan"))
          ? ((o = ""),
            (l = LP_elt_get_text(n)),
            null != t && null != _ && null != _[t] && 0 < _[t]
              ? ("formfills" != t && "generate" != t) || !1 !== g_show_icon_number_for_formfills
                ? l != (o = !(_[t] < 9) && 9 < _[t] ? "9+" : " " + _[t]) && LP_elt_set_text(n, o)
                : "" != l && LP_elt_set_text(n, "")
              : LP_elt_set_text(n, ""))
          : LP_create_floating_icon_hint(e, i, t, _),
        !0)
      : void 0)
  );
}
function LP_create_floating_icon_hint(e, i, t, _) {
  var n, o, t;
  return !(
    !(e = e || LP_derive_doc()) ||
    !i ||
    ((n = e.getElementsByTagName("body")[0]), e.getElementById(i + "_numspan")) ||
    (("formfills" == t || "generate" == t) && !1 === g_show_icon_number_for_formfills) ||
    (((t = e.createElement("div")).id = i + "_numspan"),
    (t.style.position = "absolute"),
    (t.style.top = "-1000px"),
    (t.style.left = "-1000px"),
    n.appendChild(t),
    g_defensive &&
      LP_addEventHandler(t, "mousedown", function (e) {
        return LP_stopEventPropagation(e), !1;
      }),
    0)
  );
}
function LP_delete_floating_icon_hint(e, i) {
  var e;
  return !!(e = e || LP_derive_doc()) && null != (e = e.getElementById(i + "_numspan")) && (e.parentNode.removeChild(e), !0);
}
function LP_delete_floating_icon(e, i) {
  var e;
  return !!(e = e || LP_derive_doc()) && null != (e = e.getElementById(i)) && (e.parentNode.removeChild(e), !0);
}
function relocate_popupfill_clickables(i) {
  if (!i && !(i = LP_derive_doc())) return null;
  if ("function" == typeof i.getElementsByName) {
    g_isfirefox && verbose_log("relocate_popupfill_clickables doc is " + get_doc_location_href(i));
    var e = LP_get_icon_divs(i),
      t;
    if (isEmptyObject(e)) return null;
    try {
      var _,
        n = 0,
        o,
        l,
        r,
        s,
        a,
        d,
        c;
      for (_ in e) {
        e.hasOwnProperty(_) &&
          null != (o = e[_].substr(LPMAGIC.length)) &&
          0 < o.length &&
          ((l = o),
          null != (r = LP_getElementByIdOrName(i, l)) || g_double_password_hack || g_double_secret_password_hack
            ? g_do_icon_number_hint
              ? null != i.getElementById(e[_]) &&
                ((a = ""),
                null != (a = (d = getIconState(i, l)) ? d.fillhint : a) && "sites" != a && (a = null),
                (c = {}),
                g_isfirefox
                  ? (c[a] = d.fillhintnumber)
                  : (0 < g_icon_number_overrides.sites ? (c.sites = g_icon_number_overrides.sites) : (c.sites = g_icon_numbers.sites),
                    0 < g_icon_number_overrides.formfills
                      ? (c.formfills = g_icon_number_overrides.formfills)
                      : (c.formfills = g_icon_numbers.formfills)),
                move_floating_icon(i, r, a, c))
              : move_floating_icon(i, r)
            : (LP_delete_floating_icon(i, e[_]) && (verbose_log("relocate: deleting orphaned icon container for " + o), n++),
              g_do_icon_number_hint &&
                LP_delete_floating_icon_hint(i, e[_]) &&
                (verbose_log("relocate: deleting orphaned icon number for " + o), n++),
              delete e[_]));
      }
    } catch (e) {
      verbose_log("relocate_popupfill_clickables caught error:" + e.message), g_isfirefox && end_weasel(i);
    }
    0 < n &&
      (g_isfirefox
        ? ((t = lpGetBrowserForDocument(i)),
          setTimeout(function () {
            LP.checkShouldRecheck(t);
          }, 500))
        : setTimeout(function () {
            var e, e;
            g_pending_recheck
              ? verbose_log("skipped 1 recheck, 1 is already queued up, #7")
              : ((e = { href: (e = LP_get_last_url_history(i)).href, href_hash: e.href_hash }), checkShouldRecheck(e));
          }, 500));
  }
}
function reset_floating_icon(e, i, t) {
  var _, _, i, n, n, e;
  return !(
    !(e = e || LP_derive_doc()) ||
    ((_ = (_ = e.defaultView) || window),
    (i = LP_pickFieldName(e, i)),
    (n = getIconState(e, i)),
    !t && n && (t = n.fillhint),
    (n = LP_getElementByIdOrName(e, LP_compute_floating_iconcontainer_id(e, i))),
    (e = LP_getElementByIdOrName(e, LPMAGIC + i + "_icon")),
    !n) ||
    !e ||
    ("formfills" == t
      ? LP_has_highdef_display(_)
        ? LP_set_image_src(e, g_40_icons["FormFill_dark@2x"])
        : LP_set_image_src(e, g_40_icons.FormFill_dark)
      : "generate" == t
      ? LP_has_highdef_display(_)
        ? LP_set_image_src(e, g_40_icons["Generate_dark@2x"])
        : LP_set_image_src(e, g_40_icons.Generate_dark)
      : LP_has_highdef_display(_)
      ? LP_set_image_src(e, g_40_icons["16x16_dark@2x"])
      : LP_set_image_src(e, g_40_icons["16x16"]),
    (e.style.opacity = "0.6"),
    (e.style.filter = "alpha(opacity=60)"),
    0)
  );
}
function getZIndex(e, i, t, _) {
  LPCTR("getzindex");
  var n = 50,
    o,
    l,
    l;
  return null == e ||
    i == e.body ||
    null == i ||
    50 < t ||
    ((o = 0), (l = "undefined" != typeof window && window ? window : e.defaultView), null == (l = LP_getComputedStyle(l, i)))
    ? null
    : "absolute" == l.position || "relative" == l.position || "fixed" == l.position
    ? "auto" == l.zIndex || "" === l.zIndex
      ? null == (o = getZIndex(e, i.parentNode, t + 1, _ + 1))
        ? 0
        : parse_zindex(o)
      : null == (o = getZIndex(e, i.parentNode, t + 1, parse_zindex(l.zIndex)))
      ? parse_zindex(l.zIndex) + 1
      : parse_zindex(o) + 1
    : "auto" == l.zIndex || "" == l.zIndex
    ? null == (o = getZIndex(e, i.parentNode, t + 1, _ + 1))
      ? _ + 1
      : parse_zindex(o) + 1
    : null == (o = getZIndex(e, i.parentNode, t + 1, parse_zindex(l.zIndex)))
    ? parse_zindex(l.zIndex)
    : parse_zindex(o) + 1;
}
function end_weasel(e) {
  var i, i;
  (e = e || document || LP.getBrowser().contentDocument) &&
    (null != (i = e && null != e.g_weasel_id ? e.g_weasel_id : g_weasel_id) && clearTimeout(i),
    g_isfirefox ? e && ((e.g_weasel_id = null), (e.g_weaseled = !1)) : ((g_weasel_id = null), (g_weaseled = !1)));
}
function LP_compute_floating_iconcontainer_id(e, i) {
  return (e = e || LP_derive_doc()) && i ? LPMAGIC + i : "";
}
function LP_compute_floating_icon_id(e, i) {
  return (e = e || LP_derive_doc()) && i ? LP_compute_floating_iconcontainer_id(e, i) + "_icon" : "";
}
function LP_compute_floating_number_id(e, i) {
  return (e = e || LP_derive_doc()) && i ? LP_compute_floating_iconcontainer_id(e, i) + "_numspan" : "";
}
