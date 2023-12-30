function LP_objectSize(e) {
  var t,
    n = 0;
  if (null == e || void 0 === e) return 0;
  if ("function" != typeof e.hasOwnProperty && void 0 !== e.length) return e.length;
  for (t in e) e.hasOwnProperty(t) && n++;
  return n;
}
function LP_getComputedStyle(e, t) {
  var n = null;
  return t && e
    ? void 0 !== e.getComputedStyle
      ? g_isfirefox
        ? e.getComputedStyle(t, null)
        : e.getComputedStyle(t)
      : t.currentStyle
    : null;
}
function LP_getloggedin() {
  return g_isie ? !(!init_LPfn() || !LPfn) && LPfn.get_loginstate() : "undefined" != typeof g_isloggedin ? g_isloggedin : lploggedin;
}
function LP_setloggedin(e) {
  if (("string" == typeof e && "0" === e && (e = !1), g_isie)) return !(!init_LPfn() || !LPfn) && LPfn.set_loginstate(e);
  if ("undefined" != typeof g_isloggedin) g_isloggedin = !!e;
  else {
    if ("undefined" == typeof lploggedin) return !1;
    lploggedin = !!e;
  }
  return !0;
}
function get_win_self(e) {
  return e.self;
}
function LP_get_live_style(t) {
  if (!t || !t.ownerDocument) return null;
  if (!g_isie && !t.ownerDocument.defaultView) return null;
  var n;
  if (g_isie && t.currentStyle) n = t.currentStyle;
  else
    try {
      n = t.ownerDocument.defaultView.getComputedStyle(t, "");
    } catch (e) {
      void 0 !== t.currentStyle && (n = t.currentStyle);
    }
  return n;
}
function LP_elt_get_text(e) {
  var t = "";
  return e
    ? "undefined" != typeof g_isfirefox && g_isfirefox
      ? null == e.textContent
        ? ""
        : e.textContent
      : void 0 !== e.textContent && null != e.textContent
      ? e.textContent
      : get_innertext(e)
    : t;
}
function LP_elt_set_text(e, t) {
  return !!e && ("undefined" != typeof g_isfirefox && g_isfirefox ? (e.textContent = t) : set_innertext(e, t), !0);
}
function parse_zindex(e) {
  if ("string" == typeof e && -1 != e.indexOf("e")) {
    for (var t = "", n = (e = "" + parseFloat(e)).length - 1; 0 <= n && "0" == e.charAt(n); n--) t += "9";
    e = e.substring(0, n + 1) + t;
  }
  return parseInt(e);
}
function LP_getAbsolutePos(t, e, n, i) {
  if ((LPCTR("getAbsolutePos"), !t || !e)) return null;
  null == n && (n = !1), null == i && (i = !1);
  var o = null;
  try {
    o = typeof e.getBoundingClientRect;
  } catch (e) {
    o = null;
  }
  if (!o || "undefined" == o) return null;
  try {
    var r = e.getBoundingClientRect(),
      u,
      l,
      u = void 0 === r.width ? r.right - r.left : r.width,
      l = void 0 === r.height ? r.bottom - r.top : r.height,
      d = LP_get_cached_body_rect(t),
      f = 0,
      s = 0,
      a = LP_get_cached_body_style(t),
      _ =
        (g_bodystyle_relative && d && a && "relative" == a.position && (i || ((f = d.left), (s = d.top))), { scrollLeft: 0, scrollTop: 0 });
    return n || (_ = p(t, d)), { left: r.left + _.scrollLeft - f, top: r.top + _.scrollTop - s, width: u, height: l };
  } catch (e) {
    return "undefined" != typeof write_error_to_history && write_error_to_history(t, "getAbsolutePos", e), null;
  }
  function c(e, t) {
    var n = 1,
      i,
      t,
      e,
      n;
    return "undefined" != typeof g_isie && g_isie && void 0 !== e.querySelector && void 0 === e.addEventListener
      ? 1
      : (t && ((t = t.right - t.left), (e = e.body.offsetWidth), (n = Math.round((t / e) * 100) / 100)), n);
  }
  function p(e, t) {
    var n = "undefined" != typeof window && window ? window : e.defaultView,
      i,
      t,
      n,
      i,
      t;
    return (
      (t =
        "pageXOffset" in n
          ? ((i = n.pageXOffset), n.pageYOffset)
          : ((n = c(e, t)), (i = Math.round(e.documentElement.scrollLeft / n)), Math.round(e.documentElement.scrollTop / n))),
      { scrollLeft: i, scrollTop: t }
    );
  }
}
function LP_measureText(e, t, n, i, o) {
  var r = LP_measureTextCacheGet(e, t, i),
    r,
    u;
  return null != r
    ? r
    : ((r = e.createElement("span")),
      ((u = null) == i && null == n) ||
        ((o = null == (o = null == o ? e.body : o) ? e.getElementById("hiddenel") : o) &&
          (o.appendChild(r),
          null != i && (r.style.cssText = i),
          null != n && (r.style.fontSize = n + "px"),
          (r.style.position = "absolute"),
          (r.style.left = "-1000px"),
          (r.style.top = "-1000px"),
          LP_elt_set_text(r, t),
          (u = { width: r.clientWidth, height: r.clientHeight }),
          LP_measureTextCacheSet(e, t, i, u),
          o.removeChild(r),
          (r = null))),
      u);
}
function lp_url_is_lastpass(e) {
  var t, n, n;
  return (
    null != e &&
    ((t = /^https:\/\/([a-z0-9-]+\.)?lastpass\.(eu|com)\//i),
    (n = "https://lastpass.com/"),
    "undefined" != typeof base_url && (n = base_url),
    0 == e.indexOf(n) ||
      0 == e.indexOf("https://lastpass.com/") ||
      0 == e.indexOf("https://lastpass.eu/") ||
      ("undefined" != typeof g_loosebasematching ? ((n = lp_gettld_url(e)), new RegExp(n + "/$").test(base_url)) : t.test(e)))
  );
}
function lp_url_is_lastpass_whitelisted(e) {
  var t, n;
  return new RegExp(["/premium/payment", "/enterprisepayment.php", "/teamspayment.php"].join("|")).test(e);
}
function LP_getElementByIdOrName(e, t, n, i) {
  if (
    null == (e = (e = "document" == e ? document : e) || LP_derive_doc()) ||
    null == t ||
    0 == t.length ||
    void 0 === e.getElementsByTagName
  )
    return null;
  for (
    var o = (n = n ? n.toUpperCase() : "INPUT").toLowerCase(),
      r = !0,
      u = [],
      u =
        n && "INPUT" != n && !g_isie
          ? LP_getElementsByXPath(e, sprintf("*[@id='%s' or @name='%s']", t, t))
          : LP_getAllInputsByIdOrName(e, t, !0),
      l = [],
      d = 0;
    d < u.length;
    d++
  )
    l[l.length] = u[d];
  var f = l.length,
    s = e.getElementById(t);
  if (null != s) {
    if (0 == f || (1 == f && (u[0] == s || null == u[0]))) return s;
    l[l.length] = s;
  }
  if (LP_name_is_inputidx(e, t)) {
    var t = LP_getinputidx_from_name(e, t);
    if (null !== t && null != (s = LP_getElementByIdx(e, t))) return s;
  }
  if (1 == f) return l[0];
  if (0 == f) return null;
  var a = [],
    _ = 0,
    c = -1;
  if ("undefined" == typeof Math) return null;
  for (var p = Math.floor(1e4 * Math.random()), g = 0; g < l.length; g++)
    (a[g] = 0),
      l[g].tagName.toUpperCase() == n && ((a[g] += 20), y(l[g])) && "hidden" != l[g].type && (a[g] += 10),
      null != l[g].style && "none" != l[g].style.display && checkIsDisplayed(e, l[g], 0, null, p, !0) && (a[g] += 5),
      y(l[g]) && inputHasLPBackground(l[g]) && (a[g] += 7),
      null != l[g].style && "hidden" != l[g].style.visibility && (a[g] += 3),
      ((l[g] == g_popupfill_parent && null != g_popupfill_parent) || (l[g] == e.g_popupfill_parent && null != e.g_popupfill_parent)) &&
        (a[g] += 5),
      i && l[g].form && LP_getname(l[g].form) == i && (a[g] += 20),
      _ < a[g] && ((_ = a[g]), (c = g));
  return 0 <= c ? l[c] : null;
  function y(e) {
    return !(!e || !e.tagName || "INPUT" != e.tagName.toUpperCase());
  }
}
function LP_getAllInputsByIdOrName(e, t, n) {
  if (null == e || null == t || 0 == t.length || void 0 === e.getElementsByTagName) return null;
  for (var i = !0, o = (null !== n && (i = n), e.getElementsByName(t)), r = [], u = 0; u < o.length; u++) r[r.length] = o[u];
  if (i) {
    var l = e.getElementsByTagName("input"),
      d,
      f = l.length;
    for (f > MAX_INPUTS_SOFT && (f = MAX_INPUTS_SOFT), d = 0; d < f; d++) l[d].id == t && r.push(l[d]);
  } else {
    var n = LP_getElementByIdOrName(e, t);
    n && r.push(n);
  }
  return r;
}
function isEmptyObject(e) {
  return (
    void 0 === Object.keys &&
      (Object.keys = (function () {
        "use strict";
        var o = Object.prototype.hasOwnProperty,
          r = !{ toString: null }.propertyIsEnumerable("toString"),
          u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          l = u.length;
        return function (e) {
          if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
          var t = [],
            n,
            i;
          for (n in e) o.call(e, n) && t.push(n);
          if (r) for (i = 0; i < l; i++) o.call(e, u[i]) && t.push(u[i]);
          return t;
        };
      })()),
    0 === Object.keys(e).length
  );
}
function LP_getname(e, t) {
  if (void 0 !== e && null != e) {
    if (t && "string" == typeof e.id && "" != e.id) return e.id;
    if ("string" == typeof e.name && "" != e.name) return e.name;
    if ("string" == typeof e.id) return e.id;
  }
  return "";
}
function LP_getWindowWidth(e, t) {
  if ((LPCTR("windowWidth"), !e)) return 0;
  if (e === LP_derive_doc()) return console_warn("ERROR: expected win, got doc"), 0;
  var n = e.innerWidth;
  if (null == n || isNaN(n))
    try {
      var i = e.document.documentElement;
      (i = i && i.clientWidth ? i : e.document.body).clientWidth && ((n = parseInt(i.clientWidth)), isNaN(n)) && (n = 0);
    } catch (e) {
      n = 0;
    }
  var i = n,
    o = !0,
    e = e.document;
  if (!e) return 0;
  var r = LP_get_body_reference(e),
    u = LP_get_cached_body_style(e),
    u = (g_bodystyle_relative && u && "relative" == u.position && (r = e.documentElement), e.getElementById("_lpinvis"));
  null == u &&
    (((u = e.createElement("div")).id = "_lpinvis"),
    (u.style.left = "0px"),
    (u.style.right = "0px"),
    (u.style.top = "0px"),
    (u.style.height = "0px"),
    (u.style.visibility = "hidden"),
    (u.style.position = "absolute"),
    u.setAttribute("aria-hidden", "true"),
    r.appendChild(u));
  var l,
    e = LP_getComputedStyle("undefined" != typeof window && window ? window : e.defaultView, r),
    d,
    e;
  return e
    ? ((d = parseInt(e.marginLeft)),
      (e = parseInt(e.marginRight)),
      0 < u.offsetWidth && 4 * u.offsetWidth < n && (i = !(0 < d || 0 < e) || isNaN(d) || isNaN(e) ? u.offsetWidth : u.offsetWidth + e + d),
      t || r.removeChild(u),
      i)
    : 0;
}
function LP_getWindowHeight(e, t) {
  var n = 0;
  if ((null == t && (t = LP_derive_doc()), !e)) return 0;
  try {
    var i = parseInt(e.innerHeight),
      o;
    if (null == i || isNaN(i) || i <= 0)
      return void 0 !== e.jQuery
        ? $(e).height()
        : (o = (o = e.document.documentElement) && o.clientHeight ? o : e.document.body).clientHeight
        ? ((i = parseInt(o.clientHeight)), (i = isNaN(i) ? 0 : i))
        : 0;
  } catch (e) {
    return verbose_log("getWindowHeight failed, " + e.message), 0;
  }
  return (i = i < 0 ? 0 : i);
}
function LP_pos_viewport(e) {
  var t, n, i;
  return e
    ? ((n = t = 0),
      (i = null),
      e.document && (i = (i = e.document.documentElement) || e.document.body),
      (n = e.pageYOffset ? parseInt(e.pageYOffset) : i && i.scrollTop ? parseInt(i.scrollTop) : 0),
      e.pageXOffset ? (t = parseInt(e.pageXOffset)) : i && i.scrollLeft && (t = parseInt(i.scrollLeft)),
      [(t = isNaN(t) ? 0 : t), (n = isNaN(n) ? 0 : n)])
    : [0, 0];
}
function LP_getname_or_idx(e, t, n) {
  var n;
  return (e = e || document)
    ? ("" !== (n = LP_getname(t, n)) && null !== n) || ("INPUT" != t.tagName && "input" != t.tagName)
      ? n
      : LP_inputidx_to_name(e, LP_getinputidx(e, t))
    : "";
}
function LP_getinputidx(e, t) {
  if (e || (e = document)) for (var n = e.getElementsByTagName("INPUT"), i = 0, i = 0; i < n.length; i++) if (n[i] == t) return i;
  return "";
}
var LPMAGICINPUTIDX = "input_idx_";
function LP_inputidx_to_name(e, t) {
  if (null !== t && is_valid_input_indexes(e)) return LPMAGICINPUTIDX + t;
}
function LP_name_is_inputidx(e, t) {
  return !!(t && 0 == t.indexOf(LPMAGICINPUTIDX) && t.length > LPMAGICINPUTIDX.length);
}
function LP_getinputidx_from_name(e, t) {
  return is_valid_input_indexes(e) && 0 == t.indexOf(LPMAGICINPUTIDX) ? t.substr(LPMAGICINPUTIDX.length) : null;
}
function LP_getElementByIdx(e, t) {
  var n = null,
    i,
    n;
  return (n = is_valid_input_indexes(e) ? e.getElementsByTagName("INPUT")[t] : n);
}
function invalidate_input_indexes(e) {
  (e = e || document) && (e.g_need_to_recompute_input_index = !0);
}
function validate_input_indexes(e) {
  (e = e || document) && (e.g_need_to_recompute_input_index = !1);
}
function is_valid_input_indexes(e) {
  return e || (e = document), !0;
}
function LP_get_body_reference(e) {
  var t, t;
  return e ? ((t = null), void 0 !== e.body ? e.body : e.getElementById("main") ? e.getElementById("main") : e.documentElement) : null;
}
function LP_get_cached_body_style(e) {
  var t, n, i, n;
  return e
    ? ((t = LP_get_body_reference(e)),
      (n = null),
      void 0 === e.g_posbodystyle_cache
        ? t &&
          ((n =
            (i = "undefined" != typeof window && window ? window : e.defaultView) && void 0 !== i.getComputedStyle
              ? i.getComputedStyle(t, null)
              : t.currentStyle),
          (e.g_posbodystyle_cache = n))
        : (n = e.g_posbodystyle_cache),
      n)
    : null;
}
function LP_get_cached_body_rect(e) {
  var t, n;
  return e
    ? ((n = LP_get_body_reference(e)),
      void 0 === e.g_posbodyrect_cache && n ? ((t = n.getBoundingClientRect()), (e.g_posbodyrect_cache = t)) : (t = e.g_posbodyrect_cache),
      t)
    : null;
}
function LP_derive_doc() {
  var e = null,
    e;
  return (e = "undefined" != typeof g_isfirefox && g_isfirefox && LP ? LP.getBrowser().contentDocument : document) || null;
}
function LP_is_inframe(e) {
  if (!e) return !1;
  try {
    var t = "undefined" != typeof window && window ? window : e.defaultView;
    return get_win_self(t) !== t.top;
  } catch (e) {
    return !1;
  }
}
function LP_pickFieldName(e, t) {
  var n;
  return e && t ? LP_getname_or_idx(e, t, LP_GETNAME_FAVOR_ID_OVER_NAME) : null;
}
function LP_fieldGetWidth(t) {
  if (!t) return 0;
  var n = {},
    i = 0;
  if ("undefined" != typeof g_isie && g_isie) {
    if (!(i = void 0 !== t.offsetWidth ? parseInt(t.offsetWidth) : i)) {
      if (void 0 === t.currentStyle) return 0;
      (n = t.currentStyle) && (i = parseInt(n.width));
    }
  } else if ("" == (i = 0 < (i = t.style.width.replace(/px/, "")).indexOf("%") ? i.replace(/%/, "") : i))
    try {
      i = (n = t.ownerDocument.defaultView.getComputedStyle(t, "")).width.replace(/px/, "");
    } catch (e) {
      void 0 !== t.currentStyle && (i = (n = t.currentStyle).width.replace(/px/, ""));
    }
  return (i = "NaN" != i && "" !== i ? i : 0);
}
function LP_getActiveElement(e) {
  return e ? e.activeElement : null;
}
function LP_docHasFocus(e) {
  return !!e || null;
}
function is_page_JSON(e) {
  if (!e) return null;
  if (void 0 !== e.lp_is_page_json) return e.lp_is_page_json;
  var t = e.body;
  if (t) {
    var t = t.innerHTML,
      t;
    if ((t = void 0 !== t.trim ? t.trim() : t.replace(/^\s*/, "")) && 2 < t.length && ("{" == t.charAt(0) || "(" == t.charAt(0)))
      return (e.lp_is_page_json = !0);
  }
  return (e.lp_is_page_json = !1);
}
function normalize_opacity(e) {
  var t;
  return null == e || "undefined" == typeof Math
    ? 0
    : ((t = 0) < e && e <= 1 ? (t = Math.floor(100 * e)) : 1 < e && e <= 100 && (t = e), t);
}
function set_can_xref(e, t, n) {
  return !(!e || !t || (g_isfirefox ? e.setAttribute("can_xref_" + t, n) : (g_can_xref[t] = n), 0));
}
function get_can_xref(e, t) {
  var n, n;
  return (
    !(!e || !t) &&
    (g_isfirefox ? null == (n = e.getAttribute("can_xref_" + t)) || n : null == (n = g_can_xref[t]) ? (g_can_xref[t] = !0) : n)
  );
}
function compare_puny_urls(e, t) {
  return (
    "undefined" != typeof punycode &&
      ("string" == typeof e && -1 == e.indexOf("xn--") && (e = punycode.URLToASCII(e)), "string" == typeof t) &&
      -1 == t.indexOf("xn--") &&
      (t = punycode.URLToASCII(t)),
    "undefined" != typeof g_iscasper &&
      g_iscasper &&
      ("string" == typeof e && (e = e.replace(/\\/g, "%5C")), "string" == typeof t) &&
      (t = t.replace(/\\/g, "%5C")),
    (e = "string" == typeof e && 0 <= (e = void 0 !== e.trim ? e.trim() : e.replace(/^\s*/, "")).indexOf("#") ? e.replace(/#$/, "") : e) ===
      (t = "string" == typeof t && 0 <= (t = void 0 !== t.trim ? t.trim() : t.replace(/^\s*/, "")).indexOf("#") ? t.replace(/#$/, "") : t)
  );
}
function LP_getFormSubmit(e) {
  if (!e || "FORM" != e.tagName.toUpperCase()) return null;
  var t = null;
  if ("function" == typeof e.lpsubmitorig2) return e.lpsubmitorig2;
  try {
    t = (Object && void 0 !== Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.constructor.prototype).submit;
  } catch (e) {
    verbose && alert(e.message), (t = null);
  }
  return t;
}
function LP_set_float(e, t) {
  var n, n, i;
  return !(
    !e ||
    null == t ||
    ((n = (n = e.ownerDocument) || document),
    (i = 0),
    "undefined" != typeof g_isie &&
      g_isie &&
      ("undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode
        ? (i = LPfn.getDocumentMode(n))
        : void 0 !== LP_getDocumentMode
        ? (i = LP_getDocumentMode(n))
        : "undefined" != typeof getDocumentMode && (i = getDocumentMode(n))),
    "undefined" != typeof g_isie && g_isie && i <= 8 ? (e.style.styleFloat = t) : (e.style.cssFloat = t),
    0)
  );
}
function LP_get_float(e) {
  var t, t, n, t;
  return e
    ? ((t = (t = e.ownerDocument) || document),
      (n = 0),
      "undefined" != typeof g_isie &&
        g_isie &&
        ("undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode
          ? (n = LPfn.getDocumentMode(t))
          : void 0 !== LP_getDocumentMode
          ? (n = LP_getDocumentMode(t))
          : "undefined" != typeof getDocumentMode && (n = getDocumentMode(t))),
      (t = LP_get_live_style(e)),
      "undefined" != typeof g_isie && g_isie && n <= 8 ? t.styleFloat : t.cssFloat)
    : "";
}
function LP_set_style_attr(e, t) {
  var n, i, n;
  return !(
    !e ||
    null == t ||
    ((n = "undefined" != typeof document ? document : e.ownerDocument),
    (i = 0),
    "undefined" != typeof g_isie &&
      g_isie &&
      ("undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode
        ? (i = LPfn.getDocumentMode(n))
        : void 0 !== i && (i = getDocumentMode(n))),
    "undefined" != typeof g_isie && g_isie && i <= 8 ? ((n = e.ownerDocument), (e.style.cssText = t)) : e.setAttribute("style", t),
    0)
  );
}
function LP_capitalize(e) {
  return !e || "string" != typeof (e = "number" == typeof e && void 0 !== e.toString ? e.toString() : e)
    ? ""
    : e.charAt(0).toUpperCase() + e.slice(1);
}
function LP_gettime() {
  return "undefined" != typeof Date ? new Date().getTime() : 0;
}
function LP_set_image_src(e, t) {
  return !(!e || void 0 === t || (g_isie ? (e.src = t) : e.setAttribute("src", t), 0));
}
function LP_has_highdef_display(e) {
  var t, t;
  return (
    (("undefined" != typeof document && e === document) || null === e) &&
      ("undefined" != typeof window ? (e = window) : (t = LP_derive_doc()) && (e = t.defaultView)),
    !!e && void 0 !== (t = e.devicePixelRatio) && 1.5 <= t
  );
}
function LP_is_browser_url(e) {
  return !(
    !e ||
    "string" != typeof e ||
    !e.toLowerCase().match(/^(about|chrome|safari|chrome-extension|safari-extension|moz-extension|resource|opera|vivaldi):/)
  );
}
function LP_getDocumentMode(e) {
  return (e = e || LP_derive_doc())
    ? "undefined" != typeof LPfn && LPfn && init_LPfn() && LPfn.getDocumentMode
      ? LPfn.getDocumentMode(e)
      : void 0 !== e.documentMode && null !== e.documentMode
      ? e.documentMode
      : "undefined" != typeof g_isie && g_isie
      ? void 0 !== e.compatMode && null !== e.compatMode && "CSS1Compat" == e.compatMode
        ? 7
        : 5
      : 0
    : 0;
}
function LP_getQuirksMode(e) {
  var t;
  return (
    !(e = e || LP_derive_doc()) ||
    (!!g_isie && !(6 < LP_getDocumentMode(e) || (void 0 !== e.compatMode && null != e.compatMode && "CSS1Compat" == e.compatMode)))
  );
}
