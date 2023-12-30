function LPNG_humanize_fill(e, t) {
  var o;
  return !(
    !(e = e || LP_derive_doc()) ||
    !t ||
    ((o = 101), n(e, t)) ||
    (void 0 !== t.beforeJS && t.beforeJS && LPNG_javascript_beforefield(e, t),
    "number" == typeof t.quant && 50 < t.quant && (o = t.quant),
    void 0 === t.send_keyevents && (t.send_keyevents = !0),
    setTimeout(function () {
      LPNG_moveto_field(e, t),
        setTimeout(function () {
          LPNG_setval(e, t),
            setTimeout(function () {
              LPNG_moveout_field(e, t), void 0 !== t.afterJS && t.afterJS && LPNG_javascript_afterfield(e, t);
            }, o);
        }, o);
    }, o),
    0)
  );
  function n(e, t) {
    var o, n, r, s, u, i, a, _, t;
    return (
      !(e = e || LP_derive_doc()) ||
      !t ||
      !(o = t.field) ||
      ((n = t.type),
      (r = t.value),
      (s = t.allowforce),
      (u = t.reqinfo),
      (i = t.realurl),
      (a = gettldcached(get_doc_location_href(e))),
      skip_filling_field(o, a)) ||
      (!t.is_launch && should_ignore_autocompleteoff_bypref(e, o)) ||
      (o.form && !lpCheckWarnInsecure(o.form, o.form.ownerDocument, !1, s)) ||
      ("calldelayed" == (t = LP_iscrossdomainok(e, a, o, n, r, u, i)) ? (console_warn("you lose"), 1) : !t || !chkoriginok(e, i))
    );
  }
}
function LPNG_moveto_field(e, t) {
  var o, n, r, r, s, s;
  return (
    !!((e = e || LP_derive_doc()) && t && t.field) &&
    ((o = t.field), (n = {}), !!(r = LP_getAbsolutePos(e, o))) &&
    ((n.target = o),
    (n.posx = r.left),
    (n.posy = r.top),
    LPNG_mouse_moveto(e, n),
    (n.bubble = !1),
    LP_fireEvent(o, "mouseenter", "MouseEvent", n),
    (n.bubble = !0),
    LP_fireEvent(o, "mouseenter", "MouseEvent", n),
    LPNG_do_focus(e, n),
    void (lp_in_array(o.type, ["select", "select-one"])
      ? ((r = o.selectedIndex), (s = o.options).length >= r && ((s = s[r]) && s.value === t.value ? pass : LP_humanizeClick(e, o, n)))
      : lp_in_array(o.type, ["radio", "checkbox"]) || LP_humanizeClick(e, o, n)))
  );
}
function LPNG_javascript_beforefield(e, t) {
  return !!((e = e || LP_derive_doc()) && t && t.beforeJS);
}
function LPNG_setval(e, t) {
  if (!(e = e || LP_derive_doc()) || !t) return !1;
  var o = t.field,
    n = t.type,
    r = t.value,
    s = t.checked,
    u = t.sharedsite,
    i = t.keyevents;
  if (!o || !n) return !1;
  var a = {};
  if (d(e, t)) return !1;
  var _ = !1,
    l,
    c;
  switch (t.type) {
    case "tel":
    case "number":
    case "url":
    case "text":
      o.value != t.value &&
        ("function" == typeof sendkey &&
          i &&
          (sendKey(KeyEvent.DOM_VK_SHIFT, o), sendKey(KeyEvent.DOM_VK_SPACE, o), sendKey(KeyEvent.DOM_VK_BACKSPACE, o)),
        (o.value = t.value),
        (_ = !0)),
        LP_getform_for_input(e, o);
      break;
    case "password":
      o.value != t.value && ((o.value = t.value), (_ = !0)),
        LP_getform_for_input(e, o),
        !u || ("undefined" != typeof g_isie && g_isie) || (lpsharedpasswordfills[lpsharedpasswordfills.length] = o);
      break;
    case "checkbox":
    case "radio":
      ((o.checked && !s) || (!o.checked && s)) &&
        (((l = {}).target = o),
        (c = LP_getAbsolutePos(e, o)) && ((l.posx = c.left), (l.posy = c.top)),
        LP_humanizeClick(e, o, l),
        (_ = !0));
      break;
    case "select":
    case "select-one":
      if (o.value != t.value) {
        var v = o.options;
        if (v)
          for (var f = 0, l, c; f < v.length; f++)
            if (v[f].value === t.value) {
              ((l = {}).target = v[f]),
                (c = LP_getAbsolutePos(e, v[f])) && ((l.posx = c.left), (l.posy = c.top)),
                LP_humanizeClick(e, v[f], l);
              break;
            }
        (_ = !0), (o.value = t.value);
      }
      break;
    case "textarea":
      o.value != t.value && ((o.value = t.value), (_ = !0)), LP_getform_for_input(e, o);
      break;
    default:
      console_warn("unsupported type " + t.type);
  }
  return _ && LPNG_do_input(e, t), !0;
  function d(e, t) {
    var e;
    return !((e = e || LP_derive_doc()) && t && ((e = t.field), !LP_fieldIsDisabled(e)) && !LP_fieldIsReadOnly(e));
  }
}
function LPNG_do_input(e, t) {
  var t, e, o, e, n;
  return !(
    !(e = e || LP_derive_doc()) ||
    !t ||
    ((t = t.field),
    (e = LP_getAbsolutePos(e, t)) &&
      ((o = e.posx), (e = e.posy), LP_fireEvent(t, "input", "Event", { evt_class: "Event", posx: o, posy: e })),
    0)
  );
}
function LPNG_moveout_field(e, t) {
  var t, o, n;
  return (
    !!((e = e || LP_derive_doc()) && (t = t && t.field) && ((o = {}), (n = LP_getAbsolutePos(e, t)))) &&
    ((o.target = t),
    (o.posx = n.left),
    (o.posy = n.top),
    LPNG_mouse_moveto(e, o),
    LPNG_do_unfocus(e, o),
    (o.target = null),
    (o.posx = n.left + 2),
    (o.posy = n.top + 2),
    LPNG_mouse_moveto(e, o),
    (o.bubble = !1),
    LP_fireEvent(t, "mouseleave", "MouseEvent", o),
    (o.bubble = !0),
    void LP_fireEvent(t, "mouseout", "MouseEvent", o))
  );
}
function LPNG_javascript_afterfield(e, t) {
  return !!((e = e || LP_derive_doc()) && t && t.afterJS);
}
function LPNG_customjs(e, t) {}
function LPNG_mouse_moveto(e, t) {
  var o, o, e, t, n;
  return !(
    !(e = e || LP_derive_doc()) ||
    !t ||
    ((o = (o = t.target) || e.documentElement),
    (e = t.posx),
    (t = t.posy),
    LP_fireEvent(o, "mousemove", "MouseEvent", { evt_class: "MouseEvent", posx: e, posy: t }),
    0)
  );
}
function LPNG_do_focus(e, t) {
  if (!(e = e || LP_derive_doc()) || !t) return !1;
  var o,
    o = (o = t.target) || e.documentElement;
  try {
    var n = t.posx,
      r = t.posy,
      s = { evt_class: g_isie ? "FocusEvent" : "UIEvent", posx: n, posy: r };
    LP_fireEvent(o, "focus", g_isie ? "FocusEvent" : "UIEvent", s),
      (s.bubble = !1),
      LP_fireEvent(o, "focusin", g_isie ? "FocusEvent" : "UIEvent", s);
  } catch (e) {
    o.focus();
  }
  return !0;
}
function LPNG_do_unfocus(e, t) {
  if (!(e = e || LP_derive_doc()) || !t) return !1;
  var o,
    o = (o = t.target) || e.documentElement;
  try {
    var n = t.posx,
      r = t.posy,
      s = { evt_class: g_isie ? "FocusEvent" : "UIEvent", posx: n, posy: r };
    LP_fireEvent(o, "blur", g_isie ? "FocusEvent" : "UIEvent", s),
      (s.bubble = !1),
      LP_fireEvent(o, "focusout", g_isie ? "FocusEvent" : "UIEvent", s);
  } catch (e) {
    o.blur();
  }
  return !0;
}
function fillfield_handler(e) {}
function LPNG_pick_field(e, t) {
  var o, n, r, s, t, u, u, s, t, o;
  return (e = e || LP_derive_doc()) && t
    ? ((o = null),
      (n = t.name),
      (r = t.type),
      (s = t.formname),
      (t = t.otherfield),
      s &&
        ((u = "INPUT"),
        r && ("select-one" == r.toLowerCase() ? (u = "SELECT") : "textarea" == r.toLowerCase() && (u = "TEXTAREA")),
        (o = LP_getElementByIdOrName(e, n, u, s))),
      (o = o || LP_getElementByIdOrName(e, n)) ||
        (t &&
          ((u = e.getElementsByTagName("select-one" == r ? "select" : "textarea" == r ? "textarea" : "input")),
          (s = n.match(/^(input|select|textarea)(\d+)$/))) &&
          (o = u[(t = (t = parseInt(s[2])) > u.length ? u.length - 1 : t)])),
      o)
    : null;
}
