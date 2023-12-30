function LP_humanizeClick(e, _, t) {
  if (!(e = (e = !e && _ ? _.ownerDocument : e) || LP_derive_doc())) return !1;
  (t = t || {}), (_ = _ || e.body);
  var o = 0,
    i = (g_isie && init_LPfn() && LPfn && (o = LPfn.getDocumentMode(e)), void 0 !== t.dofocus && t.dofocus),
    n,
    r,
    l = 0,
    l = void 0 !== t.button ? t.button : g_isie && o <= 8 ? 1 : 0,
    e;
  if (void 0 !== t.posx && void 0 !== t.posy) (n = t.posx), (r = t.posy);
  else {
    var o = LP_getAbsolutePos(e, _);
    if (!o) return !1;
    (r = (o.top + o.height) / 2), (n = (o.left + o.width) / 2);
  }
  return (
    !isNaN(n) &&
    !isNaN(r) &&
    ((e = { evt_class: "MouseEvent", button: l, posx: n, posy: r }),
    void 0 !== t.dofocus && t.dofocus && _.focus(),
    LP_fireEvent(_, "mousedown", "MouseEvent", e),
    LP_fireEvent(_, "mouseup", "MouseEvent", e),
    LP_fireEvent(_, "click", "MouseEvent", e),
    !0)
  );
}
function LP_humanizeMoveTo(e, _, t) {}
var g_draggable = !0,
  g_is_dragging = !1,
  g_drag_lastX = null,
  g_drag_lastY = null,
  g_pos_delx = 0,
  g_pos_dely = 0,
  LP_DRAG_NODRAG = 0,
  LP_DRAG_MOVE = 1,
  LP_DRAG_RESIZE = 2,
  g_drag_type = LP_DRAG_NODRAG,
  KeyEvent;
function LP_dropHandler(e) {}
function LP_dragoverHandler(e) {}
function LP_dragHandler(e) {}
function LP_mousemoveHandler(e) {
  var _;
  (e = e || window.event), g_draggable && g_is_dragging && g_in_lpframe;
}
function LP_mousedownHandler(e) {
  if (((e = e || window.event), g_draggable && g_in_lpframe)) {
    var _ = LP_getEventTarget(e),
      t = LP_getMousePos(e);
    if (_ && t)
      switch (_.id) {
        case "superbox":
        case "superbox_savesite_txt":
        case "superbox_emptymsg_txt_span":
        case "superbox_savesite_txt_span":
        case "SB_iconbox":
        case "SB_titlebox":
          (g_is_dragging = !0), (g_drag_type = LP_DRAG_MOVE), t && ((g_drag_lastX = t.x), (g_drag_lastY = t.y));
          break;
        case "resize_button":
          (g_is_dragging = !0), (g_drag_type = LP_DRAG_RESIZE), t && ((g_drag_lastX = t.x), (g_drag_lastY = t.y));
      }
  }
}
function LP_mouseupHandler(e) {
  e = e || window.event;
  var _ = 0,
    t = 0;
  if (g_draggable && g_is_dragging && g_in_lpframe) {
    var e = LP_getMousePos(e);
    switch (
      (e &&
        null !== g_drag_lastX &&
        null !== g_drag_lastY &&
        ((_ = e.x - g_drag_lastX), (t = e.y - g_drag_lastY), (g_drag_lastX = e.x), (g_drag_lastY = e.y)),
      g_drag_type)
    ) {
      case LP_DRAG_MOVE:
        g_isie ? ie_moveIframe({ delx: _, dely: t }) : g_isfirefox || cr_moveIframe({ delx: _, dely: t });
        break;
      case LP_DRAG_RESIZE:
        g_isie ? ie_resizeIframe({ delx: _, dely: t }) : g_isfirefox || (0 != _ && 0 != t && cr_resizeIframe({ delx: _, dely: t }));
        break;
      default:
        verbose && alert("UNEXPECTED DRAG" + g_drag_type);
    }
    (g_is_dragging = !1), (g_drag_type = LP_DRAG_NODRAG);
  }
}
function LP_mouseleaveHandler(e) {
  var _, e;
  g_in_lpframe &&
    LP_getEventTarget(e) == doc.body &&
    ((e = LP_getMousePos(e)) &&
      null !== g_drag_lastX &&
      null !== g_drag_lastY &&
      ((delx = e.x - g_drag_lastX), (dely = e.y - g_drag_lastY), (g_drag_lastX = e.x), (g_drag_lastY = e.y)),
    g_isie ? ie_moveIframe({ delx: delx, dely: dely }) : g_isfirefox || cr_moveIframe({ delx: delx, dely: dely }),
    (g_is_dragging = !1));
}
function LP_addEventHandler(e, _, t) {
  try {
    var o;
    return null == e || null == _ || null == t || _.length <= 0
      ? null
      : (("click" != _ && "mousedown" != _ && "mouseup" != _ && "focus" != _) ||
          ((o = t),
          (t = function (e) {
            try {
              if (void 0 !== e.isTrusted && !e.isTrusted) return !0;
            } catch (e) {}
            return o(e);
          })),
        void 0 !== e.addEventListener ? (e.addEventListener(_, t, !1), t) : void 0 !== e.attachEvent ? e.attachEvent("on" + _, t) : null);
  } catch (e) {
    return verbose_log("LP_addEventHandler failed, " + e.message), null;
  }
}
function LP_stopEventPropagation(e) {
  try {
    void 0 !== e.preventDefault ? e.preventDefault() : (window.event, (window.event.returnValue = !1)),
      void 0 !== e.stopPropagation ? e.stopPropagation() : (window.event, (window.event.cancelBubble = !0));
  } catch (e) {
    verbose_log("LP_stopEventPropagation failed, " + e.message);
  }
}
function LP_getEventTarget(e) {
  var _ = 3,
    e,
    e,
    e = e || window.event;
  return void 0 === e
    ? null
    : (e = void 0 !== e.target ? e.target : e.srcElement) && void 0 !== e.nodeType && 3 == e.nodeType
    ? e.parentNode
    : e;
}
function LP_getMousePos(e) {
  var _,
    t,
    _ = LP_getEventTarget((e = e || window.event)).ownerDocument,
    o,
    i,
    o,
    n,
    r,
    t,
    l,
    t,
    l,
    i,
    o;
  return !_ || null == _.location || 0 < _.location.href.indexOf(".xul")
    ? { x: 0, y: 0 }
    : ((o = _.documentElement).scrollLeft,
      (i = o.scrollLeft),
      o.scrollTop,
      (o = o.scrollTop),
      (r = n = 0),
      g_bodystyle_relative &&
        !g_in_lpframe &&
        ((t = LP_get_cached_body_rect(_)), (l = LP_get_cached_body_style(_)), t) &&
        l &&
        "relative" == l.position &&
        ((r = t.left), (n = t.top)),
      g_isie &&
        (g_in_lpframe ? verbose && alert("TODO") : ((i = (l = a(_, (t = LP_get_cached_body_rect(_)))).scrollLeft), (o = l.scrollTop))),
      (_ = e.pageX || e.clientX + i),
      (t = e.pageY || e.clientY + o),
      (_ = parseInt(_)),
      (t = parseInt(t)),
      g_bodystyle_relative && ((_ -= r), (t -= n)),
      { x: _, y: t });
  function s(e, _) {
    var t = 1,
      o,
      _,
      e,
      t;
    return "undefined" != typeof g_isie && g_isie && void 0 !== e.querySelector && void 0 === e.addEventListener
      ? 1
      : (_ && ((_ = _.right - _.left), (e = e.body.offsetWidth), (t = Math.round((_ / e) * 100) / 100)), t);
  }
  function a(e, _) {
    var t = "undefined" != typeof window && window ? window : e.defaultView,
      o,
      _,
      t,
      o,
      _;
    return (
      (_ =
        "pageXOffset" in t
          ? ((o = t.pageXOffset), t.pageYOffset)
          : ((t = s(e, _)), (o = Math.round(e.documentElement.scrollLeft / t)), Math.round(e.documentElement.scrollTop / t))),
      { scrollLeft: o, scrollTop: _ }
    );
  }
}
function is_modifier_key(e) {
  if (void 0 !== KeyEvent) {
    if (
      e == KeyEvent.DOM_VK_ALT ||
      e == KeyEvent.DOM_VK_SHIFT ||
      e == KeyEvent.DOM_VK_CONTROL ||
      e == KeyEvent.DOM_VK_WIN ||
      e == KeyEvent.DOM_VK_META
    )
      return !0;
  } else if (16 == e || 17 == e || 18 == e || 91 == e || 92 == e || 224 == e) return !0;
  return !1;
}
void 0 === KeyEvent &&
  (KeyEvent = {
    DOM_VK_CANCEL: 3,
    DOM_VK_HELP: 6,
    DOM_VK_BACK_SPACE: 8,
    DOM_VK_TAB: 9,
    DOM_VK_CLEAR: 12,
    DOM_VK_RETURN: 13,
    DOM_VK_ENTER: 14,
    DOM_VK_SHIFT: 16,
    DOM_VK_CONTROL: 17,
    DOM_VK_ALT: 18,
    DOM_VK_PAUSE: 19,
    DOM_VK_CAPS_LOCK: 20,
    DOM_VK_ESCAPE: 27,
    DOM_VK_SPACE: 32,
    DOM_VK_PAGE_UP: 33,
    DOM_VK_PAGE_DOWN: 34,
    DOM_VK_END: 35,
    DOM_VK_HOME: 36,
    DOM_VK_LEFT: 37,
    DOM_VK_UP: 38,
    DOM_VK_RIGHT: 39,
    DOM_VK_DOWN: 40,
    DOM_VK_PRINTSCREEN: 44,
    DOM_VK_INSERT: 45,
    DOM_VK_DELETE: 46,
    DOM_VK_0: 48,
    DOM_VK_1: 49,
    DOM_VK_2: 50,
    DOM_VK_3: 51,
    DOM_VK_4: 52,
    DOM_VK_5: 53,
    DOM_VK_6: 54,
    DOM_VK_7: 55,
    DOM_VK_8: 56,
    DOM_VK_9: 57,
    DOM_VK_SEMICOLON: 59,
    DOM_VK_EQUALS: 61,
    DOM_VK_A: 65,
    DOM_VK_B: 66,
    DOM_VK_C: 67,
    DOM_VK_D: 68,
    DOM_VK_E: 69,
    DOM_VK_F: 70,
    DOM_VK_G: 71,
    DOM_VK_H: 72,
    DOM_VK_I: 73,
    DOM_VK_J: 74,
    DOM_VK_K: 75,
    DOM_VK_L: 76,
    DOM_VK_M: 77,
    DOM_VK_N: 78,
    DOM_VK_O: 79,
    DOM_VK_P: 80,
    DOM_VK_Q: 81,
    DOM_VK_R: 82,
    DOM_VK_S: 83,
    DOM_VK_T: 84,
    DOM_VK_U: 85,
    DOM_VK_V: 86,
    DOM_VK_W: 87,
    DOM_VK_X: 88,
    DOM_VK_Y: 89,
    DOM_VK_Z: 90,
    DOM_VK_WIN: 91,
    DOM_VK_CONTEXT_MENU: 93,
    DOM_VK_NUMPAD0: 96,
    DOM_VK_NUMPAD1: 97,
    DOM_VK_NUMPAD2: 98,
    DOM_VK_NUMPAD3: 99,
    DOM_VK_NUMPAD4: 100,
    DOM_VK_NUMPAD5: 101,
    DOM_VK_NUMPAD6: 102,
    DOM_VK_NUMPAD7: 103,
    DOM_VK_NUMPAD8: 104,
    DOM_VK_NUMPAD9: 105,
    DOM_VK_MULTIPLY: 106,
    DOM_VK_ADD: 107,
    DOM_VK_SEPARATOR: 108,
    DOM_VK_SUBTRACT: 109,
    DOM_VK_DECIMAL: 110,
    DOM_VK_DIVIDE: 111,
    DOM_VK_F1: 112,
    DOM_VK_F2: 113,
    DOM_VK_F3: 114,
    DOM_VK_F4: 115,
    DOM_VK_F5: 116,
    DOM_VK_F6: 117,
    DOM_VK_F7: 118,
    DOM_VK_F8: 119,
    DOM_VK_F9: 120,
    DOM_VK_F10: 121,
    DOM_VK_F11: 122,
    DOM_VK_F12: 123,
    DOM_VK_F13: 124,
    DOM_VK_F14: 125,
    DOM_VK_F15: 126,
    DOM_VK_F16: 127,
    DOM_VK_F17: 128,
    DOM_VK_F18: 129,
    DOM_VK_F19: 130,
    DOM_VK_F20: 131,
    DOM_VK_F21: 132,
    DOM_VK_F22: 133,
    DOM_VK_F23: 134,
    DOM_VK_F24: 135,
    DOM_VK_NUM_LOCK: 144,
    DOM_VK_SCROLL_LOCK: 145,
    DOM_VK_COMMA: 188,
    DOM_VK_PERIOD: 190,
    DOM_VK_SLASH: 191,
    DOM_VK_BACK_QUOTE: 192,
    DOM_VK_OPEN_BRACKET: 219,
    DOM_VK_BACK_SLASH: 220,
    DOM_VK_CLOSE_BRACKET: 221,
    DOM_VK_QUOTE: 222,
    DOM_VK_META: 224
  });
var KEY_ESCAPE = 27;
function LP_keypress_handler(e) {
  e = e || window.event;
  var _ = "undefined" != typeof document ? document : e && e.target ? e.target.ownerDocument : null,
    e;
  return (
    _ &&
      _.location &&
      e &&
      ((e = e.keyCode), verbose_log("received key " + e), e == KEY_ESCAPE) &&
      is_your_popup_showing(_) &&
      closepopupfills(_, "close"),
    !1
  );
}
var KEY_TAB = 9,
  KEY_UP = 38,
  KEY_DOWN = 40,
  KEY_ENTER = 13,
  KEY_SHIFT = 16,
  KEY_RIGHT = 39,
  KEY_LEFT = 37,
  KEY_PAGEDOWN = 34,
  KEY_PAGEUP = 33,
  KEY_END = 35,
  KEY_HOME = 36;
function LP_field_keypress_handler(e, _, t, o) {
  e = e || window.event;
  var i = LP_getloggedin(),
    i;
  if (
    i &&
    (o =
      ((o = o || ("undefined" != typeof document ? document : e && e.target ? e.target.ownerDocument : null)) && null != o.location) ||
      ((o = _.ownerDocument), !g_isfirefox) ||
      null == typeof LP ||
      (o && null != o.location)
        ? o
        : (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument)
  ) {
    if (null == o.location)
      verbose_log("LP_field_keypress_handler given a firefox zombie document?"),
        (i = (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument),
        closepopupfills(i);
    else {
      reset_lpsaveforminfo_vars(o);
      var i = e.keyCode,
        n,
        n,
        r,
        l,
        s,
        a,
        d,
        r,
        a,
        u;
      if (i == KEY_ESCAPE) is_your_popup_showing(o) && closepopupfills(o, "close");
      else if (i == KEY_TAB) e.shiftKey || (is_your_popup_showing(o) && closepopupfills(o, "away"));
      else if (i == KEY_DOWN) {
        is_your_popup_showing(o) ||
          (set_active_username_password(o, _.form),
          "undefined" != typeof g_isie && g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn && LPfn.ie_set_kbdnav(!0),
          (n = LP_pickFieldName(o, _)),
          (n = getIconState(o, n))
            ? ((s = l = r = !1),
              "generate" == n.fillhint && (r = !0),
              "formfills" == n.fillhint && (l = !0),
              popuptoggle(o, null, n.idorname, r, FORCE_SHOW_NOHITS, !1, l, n.fillhint, n.fillhintnumber))
            : ((a = LPMAGIC + LP_pickFieldName(o, _)), popuptoggle(o, null, LP_pickFieldName(o, _), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS)));
      } else if (i != KEY_UP && i != KEY_SHIFT && 0 != i && !((i == KEY_RIGHT && e.altKey) || is_modifier_key(i) || i == KEY_ENTER)) {
        if (g_ischrome && g_setup_hotkey_handler) {
          if (is_hotkey_event(e)) return;
        } else if (g_isie) {
          var f = "";
          if (
            ((f =
              (f = (f = (f += e.ctrlKey ? "control " : "") + (e.metaKey ? "meta " : "")) + (e.altKey ? "alt " : "")) +
              (e.shiftKey ? "shift " : "")),
            verbose_log("keycode == " + i + " " + f),
            (void 0 !== e.metaKey && e.metaKey) || (void 0 !== e.altKey && e.altKey) || (void 0 !== e.ctrlKey && e.ctrlKey))
          )
            return;
        } else if (g_isfirefox) {
          var f = "";
          if (
            ((f =
              (f = (f = (f += e.ctrlKey ? "control " : "") + (e.metaKey ? "meta " : "")) + (e.altKey ? "alt " : "")) +
              (e.shiftKey ? "shift " : "")),
            verbose_log("keycode == " + i + " " + f),
            is_hotkey_event(o, e))
          )
            return;
        }
        if ("password" == _.type && formHasUsernameField(_)) {
          if (!g_clickable_input_on_password) return;
          is_your_popup_showing(o) || chk_form_ask_generate(o, _.form) || conditional_create_popup(o, _, FORCE_SHOW_NOHITS_NOLOGIN);
        }
        if (!chk_form_has_password(o, _.form)) return;
        is_your_popup_showing(o) ||
          (g_clickable_input_on_password
            ? (r = getIconState(o, LP_pickFieldName(o, _))) &&
              r.fillhint &&
              "sites" == r.fillhint &&
              conditional_create_popup(o, _, FORCE_SHOW_NOHITS_NOLOGIN)
            : ((a = LPMAGIC + LP_pickFieldName(o, _)), popuptoggle(o, null, LP_pickFieldName(o, _), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS)),
          (g_keyboardNav = !0));
      }
      is_your_popup_showing(o) &&
        (i == KEY_UP &&
          (g_isfirefox ? ff_do_popupfocusdecrement(1) : g_isie || sendBG({ cmd: "popupfillinputfocusdecrement", count: 1 }),
          (g_keyboardNav = !0),
          g_ischrome && g_setup_hotkey_handler && handle_hotkey(e),
          LP_stopEventPropagation(e)),
        i == KEY_DOWN &&
          (g_extended_kbd_nav && e.altKey
            ? !is_your_popup_showing(o) || g_isfirefox || g_isie || sendBG({ cmd: "popupfillinputshownavbar" })
            : (g_isfirefox ? ff_do_popupfocusincrement(1) : g_isie || sendBG({ cmd: "popupfillinputfocusincrement", count: 1 }),
              (g_keyboardNav = !0)),
          g_ischrome && g_setup_hotkey_handler && handle_hotkey(e),
          LP_stopEventPropagation(e)),
        i == KEY_ENTER &&
          (verbose_log("Enter Received, checking field"), (u = g_isfirefox ? o.g_popupfill_parent : g_popupfill_parent) == _) &&
          g_keyboardNav &&
          (g_isfirefox
            ? (verbose_log("Enter Received, Choose Action"), ff_do_popupfocuschoose(!0))
            : g_isie || sendBG({ cmd: "popupfillinputfocuschoose" }),
          g_ischrome && g_setup_hotkey_handler && handle_hotkey(e),
          g_isfirefox && is_hotkey_event(o, e),
          LP_stopEventPropagation(e)),
        i == KEY_PAGEUP &&
          (g_isfirefox ? ff_do_popupfocusdecrement(12) : g_isie || sendBG({ cmd: "popupfillinputfocusdecrement", count: 12 }),
          (g_keyboardNav = !0),
          g_ischrome && g_setup_hotkey_handler && handle_hotkey(e),
          LP_stopEventPropagation(e)),
        i == KEY_PAGEDOWN &&
          (g_isfirefox ? ff_do_popupfocusincrement(12) : sendBG({ cmd: "popupfillinputfocusincrement", count: 12 }),
          (g_keyboardNav = !0),
          g_ischrome && g_setup_hotkey_handler && handle_hotkey(e),
          LP_stopEventPropagation(e)),
        i == KEY_END &&
          (g_isfirefox ? ff_do_popupfocusincrement(1073741824) : sendBG({ cmd: "popupfillinputfocusincrement", count: 1073741824 }),
          (g_keyboardNav = !0)),
        i == KEY_HOME) &&
        (g_isfirefox ? ff_do_popupfocusdecrement(1073741824) : sendBG({ cmd: "popupfillinputfocusdecrement", count: 1073741824 }),
        (g_keyboardNav = !0));
    }
    return !1;
  }
}
function LP_didFieldClickEvent(e, _) {
  var t;
  return !(!e || !_) && 1 == (1 & LP_getBits(e, _));
}
function LP_didFieldMouseEvent(e, _) {
  var t;
  return !(!e || !_) && 2 == (2 & LP_getBits(e, _));
}
function LP_didFieldKeyEvent(e, _) {
  var t;
  return !(!e || !_) && 4 == (4 & LP_getBits(e, _));
}
function LP_didDocumentEscapeEvent(e) {
  var _, t;
  return !!e && 8 == (8 & LP_getBits(e, (_ = null == (_ = e.body) ? e.documentElement : _)));
}
function LP_setFieldClickEvent(e, _) {
  var t;
  return !(!e || !_ || ((t = LP_getBits(e, _)), LP_setBits(e, _, (t |= 1)), 0));
}
function LP_setFieldMouseEvent(e, _) {
  var t;
  return !(!e || !_ || ((t = LP_getBits(e, _)), LP_setBits(e, _, (t |= 2)), 0));
}
function LP_setFieldKeyEvent(e, _) {
  var t;
  return !(!e || !_ || ((t = LP_getBits(e, _)), LP_setBits(e, _, (t |= 4)), 0));
}
function LP_setBits(e, _, t) {
  if (!e || !_) return !1;
  if ((null == t && (t = 0), g_isie)) {
    if (init_LPfn() && LPfn) return LPfn.ie_set_lpstates(_, t);
  } else {
    var _ = LP_pickFieldName(e, _);
    verbose_log("lpsetbits " + _ + " = " + t), (e.lpstates[_] = t);
  }
  return !0;
}
function LP_getBits(e, _) {
  var t, o, e;
  return e && _
    ? ((t = 0),
      g_isie
        ? init_LPfn() && LPfn && (t = LPfn.ie_get_lpstates(_))
        : (e.lpstates || (e.lpstates = {}),
          (o = e.lpstates),
          (e = LP_pickFieldName(e, _)),
          verbose_log("lpstates for " + e + " == " + o[e]),
          (t = void 0 !== o[e] ? o[e] : 0)),
      t)
    : 0;
}
function LP_setDocumentEscapeEvent(e) {
  var _, t;
  return !!e && ((t = LP_setBits(e, (_ = null == (_ = e.body) ? e.documentElement : _))), LP_setBits(e, _, (t |= 8)));
}
function LP_resetAllBits(e) {
  return !!e && (g_isie ? !(!init_LPfn() || !LPfn) && LPfn.ie_reset_lpstates() : ((e.lpstates = {}), !0));
}
function lp_docinfoFromEvent(e) {
  var _ = null,
    _ =
      "undefined" != typeof LP && "function" == typeof LP.lpGetCurrentWindow
        ? (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument
        : g_isfirefox
        ? top.document
        : document,
    t = null,
    o = LP_getEventTarget(e).ownerDocument;
  if (o != _) {
    t = o;
    try {
      verbose && t && t.location && verbose_log("click inside iframe " + t.location.href);
    } catch (e) {
      pass;
    }
  }
  var e = LP_getEventTarget(e),
    i;
  return { topdoc: _, framedoc: t, eventdoc: o, target: e, targetname: LP_pickFieldName(o, e) };
}
function icon_click_handler(e) {
  var _ = lp_docinfoFromEvent(e),
    t = _.topdoc,
    o = _.framedoc,
    i = _.eventdoc,
    n = _.target,
    r = _.targetname,
    l = !1,
    s = LP_getMousePos(e),
    a;
  if (s.x <= 0 && s.y <= 0) return !!(i && i.location && i.location.href && 0 < i.location.href.indexOf(".xul")) || void 0;
  try {
    t &&
      t.body &&
      t.body.getAttribute("data-fouc-class-names") &&
      0 <= t.body.getAttribute("data-fouc-class-names").indexOf("swift-loading") &&
      (0 < getAllIconStates().length
        ? refresh_input_all_icon_bg(t)
        : window &&
          window.setTimeout(function () {
            (g_input_cnt = -1), doc_create_clickable_icons(t, "", SHOULD_DO_ALWAYS, g_is_specialsite);
          }, 50));
  } catch (e) {}
  for (var d = getAllIconStates(), u, f, p, g, u = 0; u < d.length; u++) {
    var c = "",
      g = null,
      p = d[u],
      v,
      v;
    if (g_isfirefox && p.inframe)
      o
        ? (g = (g = d[u].IHTMLElement) || LP_getElementByIdOrName(o, p.idorname)) && (c = p.idorname)
        : (g = d[u].IHTMLElement) && (o = g.ownerDocument);
    else if ("" != r && r == p.idorname) {
      if (n != d[u].IHTMLElement) {
        for (var m = !1, f = u; f < d.length; f++)
          if (n == d[f].IHTMLElement) {
            m = !0;
            break;
          }
        if (m) continue;
        if (n && d[u].IHTMLElement && (n.tagName != d[u].IHTMLElement.tagName || n.type != d[u].IHTMLElement.type)) {
          verbose_log("page click name/id collision");
          continue;
        }
      }
      g = n;
    } else
      (g = d[u].IHTMLElement)
        ? d[u].dofloater
          ? r == LPMAGIC + p.idorname || r == LPMAGIC + p.idorname + "_icon" || r == LPMAGIC + p.idorname + "_numspan"
            ? (g = (g = d[u].IHTMLElement) || LP_getElementByIdOrName(t, p.idorname)) && (c = p.idorname)
            : pass
          : g !== n && (g = null)
        : (g = LP_getElementByIdOrName(t, p.idorname)) && !popupfill_shoulddofield(t, g, SHOULD_DO_ALWAYS) && (g = null),
        g && (c = p.idorname);
    if (o) {
      if (g && checkIsDisplayed(o, g, 0))
        if (!(v = LP_getAbsolutePos(o, g)) || (v.width <= 0 && v.height <= 0))
          verbose_log("skipping field " + p.idorname + " : no valid position");
        else {
          var O = !1,
            K = v.left + v.width,
            E,
            D,
            E,
            D;
          if (
            (p.text_direction == O ? ((E = v.left), (D = v.left + 0.02 * K + 10)) : (E = (D = K) - 0.02 * K - 10) < v.left && (E = v.left),
            E < s.x && D > s.x && v.top < s.y && v.top + v.height > s.y)
          ) {
            var P = !1,
              M = !0,
              L = !1,
              y = !1;
            verbose_log("icon_click_handler calling popuptoggle() [iframe]"),
              "generate" == p.fillhint ? (P = !0) : p.no_check_generate || (P = shouldOfferGenerate(o, g)),
              "formfills" == p.fillhint && (y = !0),
              (t.g_popupfill_parent = g),
              popuptoggle(t, o, p.idorname, P, M, L, y, p.fillhint, p.fillhintnumber),
              (l = !0),
              LP_stopEventPropagation(e);
            break;
          }
        }
    } else if (g && checkIsDisplayed(t, g, 0))
      if ("INPUT" != g.nodeName || ("checkbox" != g.type && "radio" != g.type))
        if (!(v = LP_getAbsolutePos(t, g)) || (v.width <= 0 && v.height <= 0))
          verbose_log("skipping field " + p.idorname + " : no valid position");
        else {
          var O = !1,
            K = v.left + v.width,
            E,
            D,
            E,
            D,
            h =
              (p.text_direction == O
                ? ((E = v.left), (D = v.left + 0.02 * K + 10))
                : (E = (D = K) - 0.02 * K - 10) < v.left && (E = v.left),
              0),
            V;
          if (
            E - (h = -1 < document.location.href.indexOf("https://mint.intuit.com/login.event?task=S") ? 30 : h) < s.x &&
            D > s.x &&
            v.top < s.y &&
            v.top + v.height > s.y
          ) {
            var P = !1,
              M = !0,
              L = !1,
              y = !1;
            "generate" == p.fillhint
              ? ((P = !0), p.fillhintnumber || (p.fillhintnumber = 1))
              : p.no_check_generate || (P = shouldOfferGenerate(t, g)),
              "formfills" == p.fillhint && (y = !0),
              (t.g_popupfill_parent = g),
              popuptoggle(t, o, p.idorname, P, M, L, y, p.fillhint, p.fillhintnumber, g),
              (l = !0),
              LP_stopEventPropagation(e);
            break;
          }
        }
      else verbose_log("skipping field " + p.idorname + " : is not text-like");
    else verbose_log("skipping field " + p.idorname + " : not found/visible");
  }
  return l;
}
function onresize_handler(e) {
  var e = "undefined" != typeof document ? document : e.target.document,
    _ = e.getElementsByTagName("body")[0],
    t = ((e.g_posbodyrect_cache = _.getBoundingClientRect()), "undefined" != typeof window && window ? window : e.defaultView);
  return (
    t && void 0 !== t.getComputedStyle ? (e.g_posbodystyle_cache = t.getComputedStyle(_, null)) : (e.g_posbodystyle_cache = _.currentStyle),
    popupfill_resize(e),
    !1
  );
}
function handle_form_text_change(e, _, t, o) {
  if (!e && !(e = LP_derive_doc())) return null;
  if (
    (e && _ && popupfill_shoulddofield(e, _, SHOULD_DO_ALWAYS) && should_track_field_onkeyup(_) && update_preobfuscate_field_value(_),
    !(null == t || null == _ || null == o || null == o.keyCode || (0 == o.keyCode) | (16 == o.keyCode)) &&
      (!t || popupfill_shoulddoform(e, t)) &&
      popupfill_shoulddofield(e, _, SHOULD_DO_ALWAYS))
  ) {
    var i = _.value,
      n = LP_pickFieldName(e, _),
      r,
      l,
      s,
      a,
      s,
      a,
      d;
    if (g_clickable_input_on_password)
      return (
        (r = g_popup_active_username),
        (l = g_popup_active_password),
        null == r && (r = void 0 === _.form || null == _.form ? doc_get_orphan_username(e) : form_get_username(e, _.form)),
        null == l && (l = void 0 === _.form || null == _.form ? doc_get_orphan_password(e) : form_get_password(e, _.form)),
        (s = checkDocumentForLoginOrphans(e) || checkDocumentForLoginOrphansFirstStage(e)),
        (a = checkDocumentForCPWOrphans(e)),
        (s = s || chk_form_has_password(e, t)),
        (a = a || chk_form_is_nonlogin_form(e, t)),
        (d = chk_form_ask_generate(e, t)),
        r && l && (s || d) && !a
          ? _ == l
            ? (g_isie ||
                ((i = r.value), g_isfirefox) ||
                sendBG({ cmd: "popupfillinputsave", inputstr: i, inputid: n, inputtype: "password" }),
              void verbose_log("KEYPASS4 username=" + i))
            : (g_isie ||
                (g_isfirefox
                  ? o &&
                    o.keyCode &&
                    o.keyCode != KEY_TAB &&
                    o.keyCode != KEY_UP &&
                    o.keyCode != KEY_DOWN &&
                    o.keyCode != KEY_SHIFT &&
                    o.keyCode != KEY_LEFT &&
                    o.keyCode != KEY_RIGHT &&
                    ff_do_popupinputupdate("")
                  : sendBG({ cmd: "popupfillinputsave", inputstr: "", inputid: n })),
              void verbose_log('KEYPASS5 username=""'))
          : void (
              g_isie ||
              (verbose_log('KEYPASS6 formfill? username=""'),
              g_isfirefox ? ff_do_popupinputupdate("") : sendBG({ cmd: "popupfillinputsave", inputstr: "", inputid: n }))
            )
      );
    if (null == i || 0 == i.length)
      g_isie || (g_isfirefox ? ff_do_popupinputupdate("") : sendBG({ cmd: "popupfillinputsave", inputstr: "", inputid: n })),
        verbose_log("KEYPASS7 empty username");
    else if (!(K(g_autofillsites) <= 0) || g_change_icon_on_input) {
      var u = 0,
        f = null,
        p;
      for (p in g_autofillsites)
        void 0 !== g_autofillsites[p].useusername && 0 == g_autofillsites[p].useusername.indexOf(i) && (u++, (f = g_autofillsites[p]));
      if (1 == u)
        do_autofill_if_matched
          ? g_isie || (g_isfirefox ? ff_autofill(e, f.aid) : sendBG({ cmd: "autofillaid", aid: f.aid }))
          : (g_isie ||
              (g_isfirefox
                ? ff_do_popupinputupdate(i)
                : sendBG({ cmd: "popupfillinputsave", inputstr: i, inputid: n, inputtype: _.type, issaveall: issaveall(t) })),
            verbose_log("KEYPASS8 match>0 username=" + i));
      else {
        g_isie ||
          (g_isfirefox
            ? ff_do_popupinputupdate(i)
            : sendBG({ cmd: "popupfillinputsave", inputstr: i, inputid: n, inputtype: _.type, issaveall: issaveall(t) })),
          verbose_log("KEYPASS9 match>1 username=" + i);
        var s = chk_form_has_password(e, t),
          g = !1;
        if (g_change_icon_on_input) {
          var c = t.elements;
          if ("undefined" == typeof Math) return;
          var v = Math.floor(1e4 * Math.random());
          if (null != c)
            for (var m = 0; m < c.length; m++) {
              var O = c[m];
              if (checkIsDisplayed(e, O, 0, null, v) && isInputFieldPassword(e, O) && null != O.value && 0 < O.value.length) break;
            }
        }
      }
    }
  }
  function K(e) {
    var _ = 0,
      t;
    for (t in e) _++;
    return _;
  }
}
