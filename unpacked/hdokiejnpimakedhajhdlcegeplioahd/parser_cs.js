var SHOULD_DO_LOGIN_ONLY = !0,
  SHOULD_DO_ALWAYS = !1;
function popupfill_shoulddofield(e, t, r) {
  var n = ["lpcurrpasselt", "lpcurruserelt"];
  if (
    null != t &&
    void 0 !== t.type &&
    "hidden" != t.type &&
    ("text" == t.type ||
      "password" == t.type ||
      "email" == t.type ||
      (!r && "tel" == t.type) ||
      (!r && "url" == t.type) ||
      (!r && "textarea" == t.type))
  ) {
    var a = LP_pickFieldName(e, t),
      n;
    if (lp_in_array(a, n)) return decision_log(e, "DE28", { param1: a }), !1;
    if (is_search_field(e, t, !r)) return !1;
    if (is_date_field(t)) return !1;
    if (LP_looksLikeOTPField(e, t)) return !1;
    if (LP_explicit_ignored(e, t)) return !1;
    if (LP_implicit_ignored(e, t)) return !1;
    if (LP_isCaptchaField(t)) return !1;
    if (r) {
      if (!chk_form_has_password(e, t.form) && !checkDocumentForLoginOrphans(e))
        return verbose && ((n = LP_pickFormName(e, t.form)), decision_log(e, "DE29", { param1: n })), !1;
      if (
        t.form &&
        is_shopping_form(e, t.form) &&
        g_aspx_hack &&
        ((isASPpage() && 2 < e.getElementsByTagName("form").length) || !isASPpage())
      )
        return !1;
    }
    return !0;
  }
  return !1;
}
function chk_form_ask_generate(e, t, r) {
  var n = null;
  if (null == e || null == t || !S(t)) return !1;
  var a = LP_pickFormName(e, t),
    i,
    o,
    o;
  if (!r && null != (i = formcacheget(e, a, "ask_generate"))) return i;
  if (
    ((o = void 0 !== t.elements ? t.elements : t.getElementsByTagName("input")),
    Checkpoint.assert(o.length < MAX_FORM_ELEMENTS_HARD, "form " + a + " has too many inputs"),
    o.length > MAX_FORM_ELEMENTS_HARD)
  )
    return formcacheset(e, a, "is_login", !1), !1;
  var l = "";
  try {
    var l = e.location.href,
      s = gettldcached(e.location.href);
  } catch (e) {
    return !1;
  }
  var c = 0,
    d = 0,
    _ = r ? 2 : 3,
    f = (g_aspx_hack && isASPpage() && (_ = 7), 1),
    u = 100,
    p = 2,
    m = 4;
  if ("tumblr.com" == s && null != (tumblr_action_btn = e.getElementById("signup_forms_submit")))
    for (var g = tumblr_action_btn.getElementsByTagName("SPAN"), h, h = 0; h < g.length; h++)
      if (0 <= g[h].className.indexOf("login_btn") && checkIsDisplayed(e, g[h], 0, s)) return !1;
  if (!checkIsDisplayed(e, t, 0, s)) return decision_log(e, "DE30"), !1;
  var i = LP_getname(t, LP_GETNAME_FAVOR_ID_OVER_NAME);
  if (
    null != i &&
    (0 <= i.toLowerCase().indexOf("signup") || 0 <= i.toLowerCase().indexOf("register")) &&
    -1 == i.toLowerCase().indexOf("login")
  )
    return decision_log(e, "DE31", { param1: a }), formcacheset(e, a, "ask_generate", !0), !0;
  var y = !1,
    v = !1;
  if ("undefined" != typeof Math) {
    var L = Math.floor(1e4 * Math.random()),
      P = 0,
      E = 0,
      x = 0,
      k = null,
      b = t.elements.length;
    Checkpoint.assert(b < MAX_FORM_ELEMENTS_SOFT, "form " + a + " too big 1"), b > MAX_FORM_ELEMENTS_SOFT && (b = MAX_FORM_ELEMENTS_SOFT);
    for (var N = 0; N < b; N++) {
      var w = t.elements[N];
      if (
        ("INPUT" == w.tagName && ("password" == w.type ? P++ : ("text" != w.type && "email" != w.type) || E++),
        (("INPUT" == w.tagName && "submit" == w.type) || "BUTTON" == w.tagName) &&
          ((k = w), 10 < ++x) &&
          t.elements.length > MAX_FORM_ELEMENTS_SOFT)
      )
        return !1;
    }
    if (1 == x && E <= 2 && 0 < P && checkButtonHint(k)) decision_log(e, "DE32");
    else {
      for (var o = t.elements, N = 0; N < MAX_FORM_ELEMENTS_SOFT && N < o.length; N++) {
        var w = o[N],
          v = !1;
        if (
          "FIELDSET" != w.tagName &&
          valid_by_role(e, w) &&
          !LP_fieldIsDisabled(w) &&
          !LP_treat_as_hidden(w) &&
          ("expedia.com" == s || checkIsDisplayed(e, w, 0, s, L)) &&
          (!g_use_wacky_disp || is_wacky_disp(e, w))
        ) {
          if ("text" == w.type && is_watermark(w.className) && is_watermark_password(w))
            try {
              w.type = "password";
            } catch (e) {
              v = !0;
            }
          var F = LP_elt_get_text(w);
          if (
            ((("BUTTON" == w.tagName && "submit" == w.type && null != F && 0 <= F.indexOf("Create")) ||
              ("BUTTON" == w.tagName && "submit" == w.type && null != F && 0 <= F.indexOf("Register")) ||
              ("INPUT" == w.tagName && "submit" == w.type && null != w.value && 0 <= w.value.indexOf("Create")) ||
              ("INPUT" == w.tagName && "submit" == w.type && null != w.value && 0 <= w.value.indexOf("Register")) ||
              ("INPUT" == w.tagName && "submit" == w.type && null != w.value && 0 <= w.value.indexOf("Sign me up")) ||
              ("INPUT" == w.tagName && "image" == w.type && null != w.value && "create" == w.value)) &&
              ((_ = 2), decision_log(e, "DE33", { param1: a })),
            1 < P && LP_passwordAlt(e, w))
          )
            d++;
          else {
            var F = fieldIsDoublePassword(e, w),
              T,
              F;
            if (
              !(
                (t &&
                  "form1" == t.id &&
                  t.action &&
                  "string" == typeof t.action &&
                  t.action.indexOf(".aspx") &&
                  "text" == w.type &&
                  (F === DOUBLE_PW_VISIBLE || F === DOUBLE_SECRET_PW_VISIBLE)) ||
                (do_bgiconinput && "text" == w.type && (F === DOUBLE_TEXT_VISIBLE || F === DOUBLE_SECRET_TEXT_VISIBLE))
              )
            ) {
              if (
                "password" == w.type ||
                v ||
                ("text" == w.type && F === DOUBLE_TEXT_VISIBLE) ||
                ("text" == w.type && F === DOUBLE_SECRET_TEXT_VISIBLE)
              ) {
                var F = w.getAttribute("placeholder"),
                  I;
                if (
                  (null != F && 0 <= F.indexOf("Create your") && (_ = 2),
                  "facebook.com" == s && "string" == typeof w.id && w.id.match(/^[a-z0-9]{6}_\d{1,2}_ci_password$/))
                )
                  continue;
                if ("tdbank.com" == s && "string" == typeof w.name && "user" == w.name) {
                  d++;
                  continue;
                }
                if (0 == c && 1 < P && passwordIsFake(w)) {
                  d++;
                  continue;
                }
                if (0 < c && 1 < P && LP_looksLikeOTPField(e, w)) {
                  d++;
                  continue;
                }
                LP_get_input_pattern(e, w) && !n && (n = w), c++;
              } else if ("email" == w.type || "text" == w.type || "textarea" == w.type || "tel" == w.type || "url" == w.type)
                if (treat_text_as_password(w)) c++;
                else {
                  if (LP_isForgetField(w)) continue;
                  lpIsVisible(w, !0) &&
                    ((F = LP_pickFieldName(e, w)), LP_looksLikeOTPField(e, w) ? decision_log(e, "DE35", { param1: F }) : d++);
                }
              if (4 <= c || u <= d)
                return (
                  4 <= c && decision_log(e, "DE37", { param1: a, param2: c, param3: d }),
                  u <= d && decision_log(e, "DE38", { param1: a, param2: c, param3: d }),
                  formcacheset(e, a, "ask_generate", !1),
                  !1
                );
              if (2 <= c || (1 <= c && _ <= d))
                return (
                  2 <= c && decision_log(e, "DE39", { param1: a, param2: c, param3: d }),
                  1 <= c && _ <= d && decision_log(e, "DE40", { param1: a, param2: c, param3: d }),
                  formcacheset(e, a, "ask_generate", !0),
                  !n || g_isie || g_isfirefox || sendBG_generate_pattern(e, n),
                  !0
                );
            }
          }
        }
      }
      decision_log(e, "DE41", { param1: a, param2: c, param3: d }), formcacheset(e, a, "ask_generate", !1);
    }
    return !1;
  }
  function S(e) {
    return e && e.tagName && "FORM" == e.tagName.toUpperCase();
  }
}
function passwordIsFake(e) {
  var t,
    r = new RegExp("(?:Account)|(?:Member)|(?:IUO_NAME)", "i"),
    n = e.id,
    e = e.name;
  return !(!r.exec(n) && !r.exec(e));
}
function checkButtonHint(e) {
  var t, e, r, n;
  return !(
    !e ||
    ((t = e.id),
    (e = "INPUT" == e.tagName ? e.value : e.innerHTML),
    !(n = new RegExp("(?:Login)|(?:Log.In)|(?:Logon)|(?:Log.on)", "i")).exec(t) && !n.exec(e))
  );
}
function LP_isForgetField(e) {
  var t, e, r;
  return !(!e || ((t = e.id), (e = e.name), !(r = new RegExp(lpgs("ff_forgot_regexp"), "i")).exec(t) && !r.exec(e)));
}
function LP_isCaptchaField(e) {
  var t, e, r;
  return !(!e || ((t = e.id), (e = e.name), !(r = new RegExp(lpgs("ff_captcha_regexp"), "i")).exec(t) && !r.exec(e)));
}
function element_is_detached(e, t, r) {
  if (!t) return !1;
  if (!e && !(e = t.ownerDocument)) return !1;
  void 0 === r && (r = 0);
  var n = 15,
    a = null;
  try {
    15 < r && (a = !1),
      null == t.parentNode && (a = !0),
      (t.parentNode !== e.documentElement && t.parentNode !== t.ownerDocument.documentElement) || (a = !1);
  } catch (e) {
    a = !0;
  }
  return null == a ? element_is_detached(e, t.parentNode, r + 1) : a;
}
function get_javaservlet_fields(e, t) {
  if (!e) return [];
  null == t && (t = !1);
  var r = [],
    n = e.getElementsByName("j_username"),
    a = e.getElementsByName("j_password");
  if (1 === n.length && 1 === a.length) Checkpoint.assert(n[0].form === a[0].form, "javaservlet form mismatch"), (r = [n[0], a[0]]);
  else if (!t || (1 !== n.length && 1 !== a.length)) {
    var i = e.getElementsByTagName("FORM"),
      o = LP_getFormsThreshold(e);
    Checkpoint.assert(i.length < o, "too many forms on page");
    for (var l = 0; l < o && l < i.length; l++)
      if (i[l].action && void 0 !== i[l].action.indexOf && 0 <= i[l].action.indexOf("j_security_check")) {
        var s = form_get_username(e, i[l]),
          c = form_get_password(e, i[l]);
        s && c && (r = [s, c]);
        break;
      }
  } else
    var s = null,
      c = null,
      r = [(s = 1 === n.length ? n[0] : s), (c = 1 === a.length ? a[0] : c)];
  return r;
}
function is_random_hashstr(e) {
  return !(
    !e ||
    (((16 != e.length && 32 != e.length) ||
      !e.match(/^[a-zA-Z0-9]+$/) ||
      e == e.toLowerCase() ||
      !e.match(/[0-9]/) ||
      e == e.toUpperCase()) &&
      !(
        (32 == e.length && e.match(/^[a-f0-9]+$/)) ||
        e.match(/_\d{18}[A-Z]{4}_/) ||
        (17 == e.length &&
          "a" == e.charAt(0) &&
          e.match(/^[a-zA-Z0-9_]+$/) &&
          e != e.toLowerCase() &&
          e.match(/[0-9]/) &&
          e != e.toUpperCase()) ||
        (20 == e.length && e.match(/^[A-Z]0[A-F]\d{16}[A-Z]$/)) ||
        (21 == e.length && e.match(/^[A-Z]0[A-F]\d{17}[A-Z]$/)) ||
        (18 == e.length && e.match(/^el[0-9a-f]{16}$/)) ||
        (24 < e.length && e.match(/^yui_[0-9_a-z]+$/)) ||
        (14 <= e.length && e.match(/^[a-zA-Z_]{8}[a-zA-Z_]+\[[0-9]{2}[0-9]+\]$/))
      ))
  );
}
function chk_form_changepw_new() {
  return !0;
}
function shouldOfferGenerate(e, t) {
  if (null == e || null == t) return null;
  var r = !1,
    n = t.form,
    a = !1,
    i = (n || (a = checkDocumentForCPWOrphans(e)), getNeverUrlRules(e, e.location.href)),
    o = i.generateEnabled,
    l,
    s,
    c;
  if (i.isAllowed && o && chk_form_ask_generate(e, n) && isInputFieldPassword(e, t)) {
    if (chk_form_has_password(e, n)) {
      var i = LP_pickFormName(e, n),
        d;
      if (new RegExp(lpgs("ff_loginform_regexp"), "i").exec(i)) return !1;
    }
    (currentpw = lpCheckCurrentPWField(n)) || ((c = !0), (currentpw = lpCheckCurrentPWField(n, !0))),
      chk_form_changepw(e, n) && t == lpCheckCurrentPWField(n)
        ? ((r = !1),
          "undefined" != typeof g_docnum &&
            decision_log(e, "DE42", { param1: g_docnum, param2: LP_pickFormName(e, n), param3: LP_pickFieldName(e, t) }))
        : chk_form_changepw_new(e, n) && t == currentpw
        ? ((r = !1),
          "undefined" != typeof g_docnum &&
            decision_log(e, "DE43", { param1: g_docnum, param2: LP_pickFormName(e, n), param3: LP_pickFieldName(e, t) }))
        : ((r = !0),
          "undefined" != typeof g_docnum &&
            decision_log(e, "DE44", { param1: g_docnum, param2: LP_pickFormName(e, n), param3: LP_pickFieldName(e, t) }));
  } else
    !n &&
      o &&
      a &&
      isInputFieldPassword(e, elt) &&
      !lpIsFieldCurrentPWField(t) &&
      ((r = !0), "undefined" != typeof g_docnum) &&
      decision_log(e, "DE45", { param1: g_docnum, param2: LP_pickFieldName(e, t) });
  return r;
}
function popupfill_shoulddoform(e, t) {
  var e, t, r;
  return (
    !!(e = e || LP_derive_doc()) &&
    !(!t || ((e = t.name), (t = t.id), (r = ["lpmanualform", "lpwebsiteeventform"]), e && lp_in_array(e, r)) || (t && lp_in_array(t, r)))
  );
}
function LP_isRememberCheckbox(e) {
  var t, e, r;
  return !(
    !e ||
    "checkbox" != e.type ||
    ((t = e.id), (e = e.name), !(r = new RegExp(lpgs("ff_remember_regexp"), "i")).exec(t) && !r.exec(e))
  );
}
function chk_form_is_nonlogin_form(e, t) {
  if (null != e && null != t && f(t)) {
    var r = 3;
    try {
      var n = gettldcached(e.location.href);
    } catch (e) {
      return !1;
    }
    var a = LP_pickFormName(e, t),
      i = formcacheget(e, a, "is_nonlogin"),
      o,
      o;
    if (null != i) return i;
    if (
      ((o = void 0 !== t.elements ? t.elements : t.getElementsByTagName("input")),
      Checkpoint.assert(o.length < MAX_FORM_ELEMENTS_HARD, "form " + a + " has too many inputs"),
      o.length > MAX_FORM_ELEMENTS_HARD)
    )
      return formcacheset(e, a, "is_nonlogin", !0), !0;
    if (is_search_form(e, t)) decision_log(e, "DE46", { param1: a }), formcacheset(e, a, "is_nonlogin", !1);
    else if (checkIsDisplayed(e, t, 0, n)) {
      var l = 0,
        s = 0,
        o,
        c = (o = t.elements).length;
      Checkpoint.assert(c < MAX_INPUTS_HARD, "form " + a + " too big 2"), c > MAX_INPUTS_HARD && (c = MAX_INPUTS_HARD);
      for (var d = 0; d < c; d++) {
        var _ = o[d];
        if (
          "FIELDSET" != _.tagName &&
          ("email" == _.type || "text" == _.type || "password" == _.type || "tel" == _.type) &&
          !LP_fieldIsDisabled(_)
        ) {
          if (100 < ++s) return formcacheset(e, a, "is_nonlogin", !1), !1;
          if (1 != _.disabled && valid_by_role(e, _) && lpIsVisible(_) && !LP_treat_as_hidden(_)) {
            if (is_search_field(e, _, !0) && o.length < 8)
              return decision_log(e, "DE48", { param1: a }), formcacheset(e, a, "is_nonlogin", !1), !1;
            if (3 <= ++l || (1 <= l && 0 === e.location.href.indexOf("https://js.stripe.com")))
              return decision_log(e, "DE49", { param1: a }), formcacheset(e, a, "is_nonlogin", !0), !0;
          }
        }
      }
      formcacheset(e, a, "is_nonlogin", !1);
    } else decision_log(e, "DE47", { param1: a });
  }
  return !1;
  function f(e) {
    return e && e.tagName && "FORM" == e.tagName.toUpperCase();
  }
}
function treat_text_as_password(e) {
  var t;
  return (
    !!e &&
    "TEXTAREA" != e.tagName &&
    "text" == e.type &&
    (0 == e.name.indexOf("pass") || 0 <= e.name.toLowerCase().indexOf(lpgs("Password").toLowerCase())) &&
    -1 == e.name.toLowerCase().indexOf("hint") &&
    -1 == e.name.toLowerCase().indexOf("placeholder") &&
    !(new RegExp(lpgs("ff_username_regexp"), "i").exec(e.name) && e.form && e.form.action && 0 <= e.form.action.indexOf("login"))
  );
}
function ASP_treat_text_as_password(e) {
  return treat_text_as_password(e);
}
function valid_by_role(e, t) {
  if (!t) return !1;
  if (!(e = e || t.ownerDocument)) return !1;
  var e = t.getAttribute("role");
  if (!(e = e || "INPUT" == t.tagName ? e : t.parentNode.getAttribute("role"))) return !0;
  switch (e) {
    case "navigation":
    case "banner":
    case "contentinfo":
    case "note":
    case "search":
    case "seealso":
      return !1;
    case "columnheader":
    case "presentation":
    case "toolbar":
    case "directory":
      return !1;
    default:
      return !0;
  }
}
var should_do_lastpass_here = function (t) {
  var e = null;
  if (!t) return !1;
  if (null != t.g_content_check_result) return t.g_content_check_result;
  try {
    var r = t.location.href,
      n,
      a,
      i,
      o,
      l,
      s;
    null ===
      (e =
        0 < r.indexOf(".xul") ||
        0 < r.indexOf("libsyn.com/embed") ||
        0 < r.indexOf("platform.twitter.com/tweet_button") ||
        0 <= r.indexOf("facebook.com/plugins/")
          ? (t.g_content_check_result = !1)
          : e) &&
      "complete" != t.readyState &&
      "interactive" != t.readyState &&
      (verbose_log("answer hazy, try again later"), (e = !0)),
      null ===
        (e =
          null === e && ((n = t.body), (a = t.head), (i = LP_elt_get_text(n).length), null === e) && 2 < i && is_page_JSON(t)
            ? (t.g_content_check_result = !1)
            : e) &&
        n &&
        ((o = n.getAttribute("contentEditable")),
        (l = n.getAttribute("preview")),
        (s = null !== n.getAttribute("data-silex-id") || null !== n.getAttribute("data-silex-type")),
        "edit" == l || o || s) &&
        (e = !1);
  } catch (e) {
    return (t.g_content_check_result = !1);
  }
  return (e = null === e ? (t.g_content_check_result = !0) : e);
};
function is_shopping_form(e, t) {
  if (!(e = e || LP_derive_doc()) || !t) return !1;
  var r,
    r = (r = LP_createXPathFromElement(e, t)) || LP_pickFormName(e, t),
    n = formcacheget(e, r, "is-shopping");
  if (null != n) return n;
  var a = !1,
    i = 0,
    o = 0,
    l = 0,
    s = 0,
    c = 0,
    d = 0,
    _ = new RegExp("qty|quantity", "i"),
    f = new RegExp("[Ss]hipping"),
    u = new RegExp("[Ss]hopping|[CcK]art"),
    p = new RegExp("gift|Gift|GIFT"),
    m = new RegExp("[Cc]heck[Oo]ut"),
    g = t.getElementsByTagName("input"),
    h = (Checkpoint.assert(g.length < MAX_INPUTS_SOFT, "form " + LP_getname(t) + " has too many inputs"), g.length);
  for (h > MAX_INPUTS_SOFT && (h = MAX_INPUTS_SOFT), d = 0; d < h; d++) {
    var y = g[d].id,
      v = g[d].name,
      L = g[d].className;
    if (_.exec(y) || _.exec(v) || _.exec(L)) i++;
    else if (f.exec(y) || f.exec(v) || f.exec(L)) l++;
    else if (u.exec(y) || u.exec(v) || u.exec(L)) o++;
    else if (p.exec(y) || p.exec(v) || p.exec(L)) s++;
    else if (m.exec(y) || m.exec(v) || m.exec(L)) c++;
    else if (P(i, o, l, s, c)) {
      a = !0;
      break;
    }
  }
  return formcacheset(e, r, "is-shopping", a), a;
  function P(e, t, r, n, a) {
    for (var i, o = 0, l = [e, t, r, n, a], i = 0; i < l.length; i++) 0 < l[i] && o++;
    return 2 <= o;
  }
}
function is_wacky_disp(t, e) {
  if (!(t = t || LP_derive_doc()) || !e) return !1;
  var r = !1,
    n = !0;
  if (e == t.body) return !0;
  var a = "undefined" != typeof window && window ? window : t.defaultView,
    t = !0;
  try {
    var i = LP_get_live_style(e),
      o,
      l;
    i &&
      1 ==
        (t =
          1 ==
            (t =
              1 ==
                (t =
                  1 ==
                    (t =
                      1 ==
                        (t =
                          1 ==
                            (t =
                              1 ==
                                (t =
                                  1 !=
                                    (t =
                                      1 != (t = "none" != i.display && "hidden" != i.visibility ? t : !1) ||
                                      (e.offsetHeight && e.offsetHeight)
                                        ? t
                                        : !1) ||
                                  (0 != i.height && 0 != i.width)
                                    ? t
                                    : !1) &&
                              (parseInt(i.height) < 2 || parseInt(i.width) < 2)
                                ? !1
                                : t) &&
                          ((parseInt(i.left) < 0 && "auto" != i.left) || (parseInt(i.top) < 0 && "auto" != i.top))
                            ? !1
                            : t) &&
                      "-1px" == i.marginTop &&
                      1 == e.offsetHeight
                        ? !1
                        : t) &&
                  (e.offsetHeight < 3 || e.offsetWidth < 3)
                    ? !1
                    : t) &&
              (("transparent" == i.backgroundColor && "transparent" == i.color) ||
                (g_isie && "transparent" == i.backgroundColor && "" == i.color) ||
                ("rgba(0, 0, 0, 0)" == i.backgroundColor && "rgba(0, 0, 0, 0)" == i.color))
                ? !1
                : t) &&
          i.opacity &&
          parseFloat(i.opacity) < 0.02
            ? !1
            : t) &&
      g_isie &&
      i.filter &&
      (l = new RegExp("alpha\\(opacity=(\\d+)\\)").exec(i.filter)) &&
      l[1] &&
      parseInt(l[1]) < 2 &&
      (t = !1);
  } catch (e) {
    t = !0;
  }
  if (t)
    try {
      var s = e.parentNode,
        c = (s || (t = !1), LP_get_live_style(s));
      !c ||
        1 !=
          (t =
            1 == (t = 1 != t || ("none" != c.display && "hidden" != c.visibility) ? t : !1) &&
            ((parseInt(c.left) < 0 && "auto" != c.left) || (parseInt(c.top) < 0 && "auto" != c.top))
              ? !1
              : t) ||
        !((parseInt(c.height) < 3 && "auto" != c.height) || (parseInt(c.width) < 3 && "auto" != c.width)) ||
        ("hidden" != c.overflowY && "hidden" != c.overflow) ||
        (t = !1);
    } catch (e) {
      t = !0;
    }
  return t;
}
function LP_treat_as_hidden(e) {
  var t, e;
  return (
    !e ||
    "hidden" == e.type ||
    !e.parentNode ||
    (0 == e.id.indexOf("hidden") && ("none" == e.style.display || "none" == e.parentNode.style.display)) ||
    "true" === e.getAttribute("aria-hidden") ||
    !(!(e = e.getAttribute("hidden")) || "false" === e)
  );
}
function LP_has_textlike_type(e) {
  if (!e) return !1;
  var t = e.tagName.toUpperCase();
  if ("INPUT" != t && "TEXTAREA" != t) return !1;
  if ("TEXTAREA" == t) return !0;
  var r = ["text", "number", "email", "tel", "url", "textarea"],
    n;
  for (n in r) if (r.hasOwnProperty(n) && e.type == r[n]) return True;
  return False;
}
function computeFingerprint(e) {
  if (!e) return "";
  for (var t = 20, r = "", n = e.getElementsByTagName("INPUT"), a, a = 0, i; a < n.length && a < 20; a++) {
    r += n[a].id || n[a].name;
  }
  try {
    "undefined" != typeof crc32 && (r = crc32(r).toString());
  } catch (e) {}
  return r;
}
function LP_firstVisibleOrphan(e) {
  if (e)
    for (var t = 50, r = e.getElementsByTagName("INPUT"), n, a = null, n = 0; n < r.length && n < 50; n++)
      if (!(a = r[n]).form && ("text" == a.type || "password" == a.type || "url" == a.type || "email" == a.type) && lpIsVisible(a))
        return a;
  return null;
}
function checkFormForLoginFirstStage(e, t) {
  var r = 20,
    n = 3,
    a = 2,
    i = 2;
  if (null == e || null == t || "FORM" != t.tagName) return !1;
  var o = LP_pickFormName(e, t),
    l = (verbose_log("checking " + o + " for first stage of multi-stage login"), formcacheget(e, o, "multi-first"));
  if (null != l) return l;
  if ("undefined" == typeof Math) return False;
  for (var s = 0, c = !1, d, _ = Math.floor(1e4 * Math.random()), f = 0, u = 0; u < 20 && u < t.elements.length; u++) {
    var d = t.elements[u];
    if ("INPUT" == d.tagName && checkIsDisplayed(e, d, 0, null, _, !0)) {
      if (
        (looksLikeUsername(d) && s++, "text" == d.type || "tel" == d.type || "url" == d.type || "email" == d.type || "textarea" == d.type)
      ) {
        if ("string" == typeof d.id && "identifier-captcha-input" == d.id)
          try {
            if ("google.com" == gettldcached(e.location.href)) continue;
          } catch (e) {}
        f++;
      }
      if (isInputFieldPassword(e, d)) {
        c = !0;
        break;
      }
      if (2 <= s) break;
      if (2 <= f) break;
    }
  }
  return 0 < s && s <= 3 && 0 == c && f < 2
    ? (verbose_log("isolated login field/initial stage of multi-stage found"), formcacheset(e, o, "multi-first", !0), !0)
    : (formcacheset(e, o, "multi-first", !1), !1);
}
function checkDocumentForLoginFirstStageForm(e) {
  if (e)
    for (
      var t = LP_getFormsThreshold(e),
        r = e.getElementsByTagName("form"),
        n = (Checkpoint.assert(r.length < t, "too many forms on page"), !1),
        a = 0;
      a < r.length && a < t;
      a++
    )
      if ((n = checkFormForLoginFirstStage(e, r[a]))) return n;
  return !1;
}
function checkDocumentForNonLoginOrphans(e) {
  if (null != e) {
    var t = 20,
      r = 4,
      n = formcacheget(e, "fakedoc", "orphan-signup"),
      a = formcacheget(e, "fakedoc", "orphan-registration"),
      i = formcacheget(e, "fakedoc", "orphan-cc"),
      n = n || a || i;
    if (null != n) return n;
    var o = new RegExp(lpgs("ff_firstname_regexp"), "i"),
      l = new RegExp(lpgs("ff_lastname_regexp"), "i"),
      s = new RegExp(lpgs("ff_cctype_regexp"), "i"),
      c = new RegExp(lpgs("ff_address1_regexp"), "i"),
      d = new RegExp(lpgs("ff_forgot_regexp"), "i"),
      _ = new RegExp(lpgs("ff_remember_regexp"), "i"),
      f = !1,
      u = !1,
      p = !1,
      m = !1,
      g = !1,
      h = !1,
      y = !1,
      v = 3;
    try {
      var L = gettldcached(e.location.href);
    } catch (e) {
      return !1;
    }
    for (var P = 0, E = 0, x = e.getElementsByTagName("INPUT"), k = 0; k < x.length && k < 20; k++) {
      var b = x[k];
      if ("INPUT" == b.tagName) {
        if (
          (LP_isRememberCheckbox(b) && lpIsVisible(b) && !LP_fieldIsDisabled(b) && P++,
          "email" == b.type || "text" == b.type || "password" == b.type)
        ) {
          if (LP_fieldIsDisabled(b)) continue;
          if (LP_fieldIsDisabled(b)) continue;
          if (!valid_by_role(e, b)) continue;
          if (!lpIsVisible(b)) continue;
          if (is_search_field(e, b, !0)) continue;
          var N = b.name,
            w = b.id || "",
            F = lpGetTextBeforeFormField(b);
          looksLikeUsername(b)
            ? (f = !0)
            : isInputFieldPassword(e, b)
            ? (u = !0)
            : o.exec(w) || o.exec(N) || o.exec(F)
            ? (p = !0)
            : l.exec(w) || l.exec(N) || l.exec(F)
            ? (m = !0)
            : s.exec(w) || s.exec(N) || s.exec(F)
            ? (g = !0)
            : regexp_address1.exec(w) || regexp_address1.exec(N) || regexp_address1.exec(F),
            P++;
        }
        if (3 <= P) {
          if (f && u && !g)
            return (
              verbose_log("document appears to be have orphan signup fields"),
              formcacheset(e, "fakedoc", "orphan-signup", !0),
              formcacheset(e, "fakedoc", "orphan-cc", !1),
              formcacheset(e, "fakedoc", "orphan-registration", !1),
              !0
            );
          if (g && !f && !u)
            return (
              verbose_log("document appears to be have orphan credit card fields"),
              formcacheset(e, "fakedoc", "orphan-cc", !0),
              formcacheset(e, "fakedoc", "orphan-signup", !1),
              formcacheset(e, "fakedoc", "orphan-registration", !1),
              !0
            );
          if ((p || m) && f)
            return (
              verbose_log("document appears to be have orphan registration fields"),
              formcacheset(e, "fakedoc", "orphan-registration", !0),
              formcacheset(e, "fakedoc", "orphan-signup", !1),
              formcacheset(e, "fakedoc", "orphan-cc", !1),
              !0
            );
        }
      }
    }
    formcacheset(e, "fakedoc", "orphan-signup", !1),
      formcacheset(e, "fakedoc", "orphan-cc", !1),
      formcacheset(e, "fakedoc", "orphan-registration", !1);
  }
  return !1;
  function T(e) {
    e && e.tagName && e.tagName.toUpperCase();
  }
}
function checkDocumentHasOrphanSignup(e) {
  var t;
  return (
    !!e &&
    (null != (t = formcacheget(e, "fakedoc", "orphan-signup"))
      ? t
      : (checkDocumentForNonLoginOrphans(e), formcacheget(e, "fakedoc", "orphan-signup")))
  );
}
function checkDocumentHasOrphanCC(e) {
  var t;
  return (
    !!e &&
    (null != (t = formcacheget(e, "fakedoc", "orphan-cc"))
      ? t
      : (checkDocumentForNonLoginOrphans(e), formcacheget(e, "fakedoc", "orphan-cc")))
  );
}
function checkDocumentHasOrphanRegistration(e) {
  var t;
  return (
    !!e &&
    (null != (t = formcacheget(e, "fakedoc", "orphan-registration"))
      ? t
      : (checkDocumentForNonLoginOrphans(e), formcacheget(e, "fakedoc", "orphan-registration")))
  );
}
function LP_should_ignore_this_doc(e, t) {
  var r;
  return (
    !e ||
    !e.location ||
    ((r = e.location.href), !(!LP_is_browser_url(r) && 0 != r.indexOf("javascript:"))) ||
    0 < r.indexOf(".xul") ||
    !(!t || "www.irccloud.com" != e.location.hostname)
  );
}
function countInputs(e, t, r) {
  var n = 0,
    a = 0,
    i = e.getElementsByTagName("INPUT");
  if ("undefined" != typeof Math) {
    for (var o = 0; o < i.length; o++) {
      if (100 < o) {
        t || (n += i.length - o);
        break;
      }
      var l = "password" == i[o].type;
      (t && !l) || ("checkbox" != i[o].type && "hidden" != i[o].type && (l && a++, n++));
    }
    return r && (e.g_password_cnt = a), n;
  }
}
function checkForLoginForm(e) {
  if ((e = e || LP_derive_doc())) {
    try {
      var t = gettldcached(e.location.href);
    } catch (e) {
      return !1;
    }
    for (
      var r = LP_getFormsThreshold(e),
        n = e.getElementsByTagName("form"),
        a = (Checkpoint.assert(n.length < r, "too many forms on page"), !1),
        i = 0;
      i < n.length && i < r;
      i++
    ) {
      if (null == (a = chk_form_has_password(e, n[i], !0))) return !1;
      if (a) return a;
    }
  }
  return !1;
}
function checkForNonLoginForm(e) {
  if ((e = e || LP_derive_doc())) {
    try {
      var t = gettldcached(e.location.href);
    } catch (e) {
      return !1;
    }
    for (
      var r = LP_getFormsThreshold(e),
        n = e.getElementsByTagName("form"),
        a = (Checkpoint.assert(n.length < r, "too many forms on page"), !1),
        i = 0;
      i < n.length && i < r;
      i++
    )
      if ((a = chk_form_is_nonlogin_form(e, n[i]))) return a;
  }
  return !1;
}
function checkForSignupForm(e) {
  if ((e = e || LP_derive_doc()))
    for (
      var t = LP_getFormsThreshold(e),
        r = e.getElementsByTagName("form"),
        n = (Checkpoint.assert(r.length < t, "too many forms on page"), !1),
        a = 0;
      a < r.length && a < t;
      a++
    )
      if ((n = chk_form_ask_generate(e, r[a]))) return n;
  return !1;
}
function usercacheset(e, t) {
  var e;
  return (
    null != e &&
    null != t &&
    0 !== t.length &&
    ((e = gettldcached(e.location.href)),
    "function" == typeof sendBG && sendBG({ cmd: "usercacheset", tld: e, username: t }),
    verbose_log("USERCACHE-SAVED  domain: " + e + " user: " + t),
    !0)
  );
}
function checkForTotpForm(e, t) {
  if ("undefined" != typeof g_do_totp && g_do_totp && !g_totp_elt && (e = e || LP_derive_doc())) {
    try {
      var r = gettldcached(e.location.href);
    } catch (e) {
      return !1;
    }
    verbose_log("checkForTotpForm called from " + t);
    for (
      var n = LP_getFormsThreshold(e),
        a = e.getElementsByTagName("form"),
        i = (Checkpoint.assert(a.length < n, "too many forms on page"), !1),
        o = 0;
      o < a.length && o < n;
      o++
    ) {
      if (null == (i = chk_form_has_totp(e, a[o], !0))) return !1;
      if (i) return verbose_log("checkForTotpForm FOUND totp form - called from " + t), i;
    }
  }
  return !1;
}
function chk_form_has_totp(t, e, r) {
  if ("undefined" == typeof g_do_totp || !g_do_totp || g_totp_elt) return !1;
  function n(e) {
    return e && e.tagName && "FORM" == e.tagName.toUpperCase();
  }
  function a(e) {
    return null === e.offsetParent;
  }
  if (null == t || null == e || !n(e)) return !1;
  var i = LP_pickFormName(t, e),
    o,
    o;
  if ((o = void 0 !== e.elements ? e.elements : e.getElementsByTagName("input")).length >= MAX_FORM_ELEMENTS_HARD) return !1;
  for (
    var l = 0,
      s =
        (verbose_log("checking form: id-> " + e.id + "  class-> " + e.className + " name-> " + e.name),
        (l =
          (l = (l = (l += textFieldScore(e, "totp")) + textFieldScore(e, "2fa")) + textFieldScore(e, "twofactor")) +
          textFieldScore(e, "tfa")),
        verbose_log("form score: ( id-> " + e.id + "  class-> " + e.className + " name-> " + e.name + " )   " + l),
        0),
      c = 0,
      d = 0,
      _;
    d < MAX_FORM_ELEMENTS_SOFT && d < e.elements.length;
    d++
  ) {
    "INPUT" != (_ = e.elements[d]).tagName || ("text" != _.type && "tel" != _.type && "number" != _.type) || s++,
      (("INPUT" == _.tagName && "submit" == _.type) || "BUTTON" == _.tagName) && c++;
  }
  if ((verbose_log("check for totp form: txtfieldcount=" + s + " submitcnt=" + c), 0 == c || 0 == s)) return !1;
  for (var d = 0; d < MAX_FORM_ELEMENTS_SOFT && d < o.length; d++) {
    var _ = o[d],
      f,
      u,
      p,
      f;
    isInputFieldTotpCode(t, _) &&
      ((l += 2),
      a(_)
        ? (verbose_log("HIDDEN totp element found: id-> " + _.id + "  class-> " + _.className + "  name-> " + _.name),
          (u = function (e) {
            verbose_log("checking visibility for: id-> " + e.id + "  class-> " + e.className + "  name-> " + e.name),
              a(e)
                ? verbose_log("element is STILL HIDDEN: id-> " + e.id + "  class-> " + e.className + "  name-> " + e.name)
                : (clearInterval(f),
                  verbose_log(
                    "element become VISIBLE - totp code field revealed!!!!!: id-> " +
                      e.id +
                      "  class-> " +
                      e.className +
                      "  name-> " +
                      e.name
                  ),
                  found_totp_elt(e, t));
          }),
          (p = _),
          (f = setInterval(function () {
            u(p);
          }, 5e3)))
        : (found_totp_elt(_, t),
          verbose_log("VISIBLE totp element found!!!!!: id-> " + _.id + "  class-> " + _.className + "  name-> " + _.name)));
  }
  return verbose_log("form totp score: " + l + "+id-> " + e.id + "  class-> " + e.className + " name-> " + e.name), 2 <= l;
}
var g_totp_elt = null,
  g_totp_form = null;
function found_totp_elt(e, t) {
  verbose_log("found totp elt"),
    g_totp_elt
      ? verbose_log("already found totp elt, returning")
      : ((g_totp_elt = e),
        "undefined" != typeof g_can_get_totp && g_can_get_totp
          ? ("undefined" != typeof bg && bg.get("LPContentScriptFeatures").web_client_fill) ||
            ("function" == typeof sendBG &&
              (verbose_log("attempting to get totp from server"),
              sendBG({ cmd: "get_totp", tld: gettldcached(t.location.href), name: e.name, id: e.id, className: e.className })))
          : (verbose_log("set totp form"), (g_totp_form = e.form)));
}
function chk_form_has_password(e, t, r) {
  if (null != e && null != t && k(t)) {
    var n = LP_pickFormName(e, t),
      a = formcacheget(e, n, "is_login"),
      i,
      i;
    if (null != a) return a;
    if (
      ((i = void 0 !== t.elements ? t.elements : t.getElementsByTagName("input")),
      Checkpoint.assert(i.length < MAX_FORM_ELEMENTS_HARD, "form " + n + " has too many inputs"),
      i.length > MAX_FORM_ELEMENTS_HARD)
    )
      formcacheset(e, n, "is_login", !1);
    else {
      try {
        var o = gettldcached(e.location.href),
          l;
        if (
          ("bankofamerica.com" == o && null !== (l = e.getElementById("tlpvt-passcode-input")) && l.removeAttr("disabled"),
          "google.com" == o && is_google_signin_v2(e, i))
        )
          return !0;
      } catch (e) {
        return !1;
      }
      for (var s = !1, c = 0, d = 0, _ = 0, f = null, u = 0, p; u < MAX_FORM_ELEMENTS_SOFT && u < t.elements.length; u++) {
        "INPUT" == (p = t.elements[u]).tagName && ("password" == p.type ? c++ : ("text" != p.type && "email" != p.type) || d++),
          (("INPUT" == p.tagName && "submit" == p.type) || "BUTTON" == p.tagName) && (_++, (f = p));
      }
      if ((verbose_log("check for login form: prelimtxt=" + d + " prelimpw=" + c), 1 == _ && d <= 2 && 0 < c && checkButtonHint(f)))
        return !0;
      for (
        var m = 0, g = 0, h = 2, y = 5, v = !lpIsVisible(t), L = !1, i = t.elements, u = 0;
        u < MAX_FORM_ELEMENTS_SOFT && u < i.length;
        u++
      ) {
        var p = i[u],
          s = !1;
        if ("FIELDSET" != p.tagName && (check_for_ASP(e, p), valid_by_role(e, p) && !LP_fieldIsDisabled(p) && !LP_treat_as_hidden(p))) {
          if ("text" == p.type && is_watermark(p.className) && is_watermark_password(p))
            try {
              (p.type = "password"), decision_log(e, "DE11");
            } catch (e) {
              s = !0;
            }
          if (
            ((!(s = ASP_treat_text_as_password(p) ? !0 : s) && "password" != p.type) || LP_get_input_pattern(e, p),
            1 < c && LP_passwordAlt(e, p))
          )
            g++;
          else {
            var P = fieldIsDoublePassword(e, p);
            if ("text" != p.type || (P !== DOUBLE_PW_VISIBLE && P !== DOUBLE_SECRET_PW_VISIBLE))
              if (
                "password" == p.type ||
                s ||
                ("text" == p.type && P === DOUBLE_TEXT_VISIBLE) ||
                ("text" == p.type && P === DOUBLE_SECRET_TEXT_VISIBLE)
              ) {
                if ("facebook.com" != o || "string" != typeof p.id || !p.id.match(/^[a-z0-9]{6}_\d{1,2}_ci_password$/))
                  if ("tdbank.com" == o && "string" == typeof p.name && "user" == p.name) g++;
                  else {
                    if (g_fillaid && r) return !0;
                    if (g_aspx_hack && isASPpage() && do_bgiconinput) decision_log(e, "DE12");
                    else if (!lpIsVisible(p) || (g_use_wacky_disp && !is_wacky_disp(e, p))) {
                      if (((L = !0), !v)) continue;
                      decision_log(e, "DE13", { param1: LP_pickFormName(e, p) });
                    }
                    if (0 == m && 1 < c && passwordIsFake(p)) g++;
                    else if (0 < m && 1 < c && LP_looksLikeOTPField(e, p)) g++;
                    else {
                      var P = 2,
                        E = "",
                        x;
                      if ((g_aspx_hack && isASPpage() && do_bgiconinput && ((P = 4), (E = " [ASP]")), ++m >= P)) {
                        if (2 == c && 0 === d && 1 === _)
                          if (new RegExp(lpgs("ff_loginform_regexp"), "i").exec(n)) return formcacheset(e, n, "is_login", !0), !0;
                        return (
                          formcacheset(e, n, "is_login", !1),
                          verbose_log(
                            "Password Form detection: " +
                              n +
                              E +
                              " has too many password fields; do not treat as login form [PW:" +
                              m +
                              "/NON:" +
                              g +
                              "]"
                          ),
                          null
                        );
                      }
                    }
                  }
              } else if ("email" == p.type || "text" == p.type || "textarea" == p.type || "tel" == p.type || "url" == p.type) {
                if (!lpIsVisible(p) || (g_use_wacky_disp && !is_wacky_disp(e, p))) {
                  if (!v) continue;
                  verbose_log("EVALUATING HIDDEN FORM, NOT IGNORING HIDDEN FIELD ANYMORE " + LP_pickFormName(e, p));
                }
                if ((g++, (g_aspx_hack && 5 < g) || (!g_aspx_hack && 2 < g)))
                  return (
                    formcacheset(e, n, "is_login", !1),
                    verbose_log(
                      "Password Form detection: " +
                        n +
                        " has too many non-password fields; do not treat as login form [PW:" +
                        m +
                        "/NON:" +
                        g +
                        "]"
                    ),
                    null
                  );
              }
          }
        }
      }
      if (1 == m)
        return (
          verbose_log("Password Form detection: " + n + " is a login form, has only one passwd field"),
          formcacheset(e, n, "is_login", !0),
          !0
        );
      if (g_aspx_hack && isASPpage() && do_bgiconinput && 1 < m)
        return (
          verbose_log("Password Form detection: " + n + " is an ASP form, treat as login form"), formcacheset(e, n, "is_login", !0), !0
        );
      L || formcacheset(e, n, "is_login", !1);
    }
  }
  return !1;
  function k(e) {
    return e && e.tagName && "FORM" == e.tagName.toUpperCase();
  }
}
function is_google_signin_v2(e, t) {
  var e = e.location.href;
  return (
    (e.includes("https://accounts.google.com/signin/v2/identifier") || e.includes("https://accounts.google.com/ServiceLogin/identifier")) &&
    "email" == t[0].type
  );
}
function looksLikePassword(e, t) {
  return isInputFieldPassword(e, t);
}
function isInputFieldPassword(t, e) {
  if (null == t || null == e || "INPUT" != e.tagName || "hidden" == e.type) return !1;
  try {
    var r = gettldcached(t.location.href);
  } catch (e) {
    return !1;
  }
  if (!valid_by_role(t, e)) return !1;
  var t = !1,
    n;
  if ("text" == e.type && is_watermark(e.className) && is_watermark_password(e))
    try {
      e.type = "password";
    } catch (e) {
      t = !0;
    }
  return "text" != e.type || (0 != e.name.indexOf("pass") && 0 != e.name.toLowerCase().indexOf(lpgs("Password").toLowerCase()))
    ? (g_aspx_hack &&
        isASPpage() &&
        do_bgiconinput &&
        "text" == e.type &&
        0 <= e.value.toLowerCase().indexOf(lpgs("Password").toLowerCase()) &&
        (t = !0),
      !(
        ("password" != e.type && !t) ||
        ("facebook.com" == r && "string" == typeof e.id && e.id.match(/^[a-z0-9]{6}_\d{1,2}_ci_password$/)) ||
        ("tdbank.com" == r && "string" == typeof e.name && "user" == e.name) ||
        ("google.com" == r && "string" == typeof e.id && "Passwd-hidden" == e.id) ||
        ("live.com" == r && "true" == e.getAttribute("aria-hidden")) ||
        ("amazon.com" == r && e.className.includes("hide"))
      ))
    : !(new RegExp(lpgs("ff_username_regexp"), "i").exec(e.name) && e.form && e.form.action && 0 <= e.form.action.indexOf("login"));
}
function checkDocumentForLoginOrphans(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = formcacheget(e, "fakedoc", "orphan");
  if (null != t) return t;
  var r = [],
    n = [],
    a = [],
    i = 0,
    o,
    l = 0;
  if ("undefined" != typeof Math) {
    for (var s = Math.floor(1e4 * Math.random()), c = ["input"], d = 0; d < c.length; d++) {
      var _ = e.getElementsByTagName(c[d]),
        f = _.length;
      Checkpoint.assert(f < MAX_INPUTS_SOFT, "page has too many inputs"), f > MAX_INPUTS_SOFT && (f = MAX_INPUTS_SOFT);
      for (var u = 0, p, p; u < f; u++)
        if (checkIsDisplayed(e, _[u], 0, null, s)) {
          if (null != (o = _[u]).id && "" != o.id) {
            if (null != (p = a[o.id])) continue;
            a[o.id] = !0;
          }
          if (null != o.name && "" != o.name) {
            if (null != (p = n[o.name])) continue;
            n[o.name] = !0;
          }
          if (lp_in_array(LP_pickFieldName(e, o), r)) verbose_log("fieldname " + r[p] + " is blacklisted, skipping");
          else {
            var m = fieldIsDoublePassword(e, o);
            if (
              null == o.form &&
              ("password" == o.type ||
                ("text" == o.type && m === DOUBLE_TEXT_VISIBLE) ||
                ("text" == o.type && m === DOUBLE_SECRET_TEXT_VISIBLE))
            ) {
              i++;
              var g = [],
                h,
                y,
                m = LP_pickFieldName(e, o),
                o = LP_getname(o);
              for (m && g.push(m), o && m != o && g.push(o), y = 0; y < g.length; y++)
                if ((h = g[y]) && 0 <= h.toLowerCase().indexOf(lpgs("Password").toLowerCase()) && 0 < u) {
                  var h = _[u - 1],
                    v = LP_pickFieldName(e, h),
                    h = LP_getname(h),
                    L = new RegExp(lpgs("ff_username_regexp"), "i");
                  if (L.exec(v) || L.exec(h)) {
                    l++;
                    break;
                  }
                }
            }
            if (2 <= i && 2 <= l) break;
          }
        }
    }
    return 1 <= i || 1 == l ? (formcacheset(e, "fakedoc", "orphan", !0), !0) : (formcacheset(e, "fakedoc", "orphan", !1), !1);
  }
}
function chk_form_changepw(e, t) {
  if (null == e || null == t) return !1;
  for (var r = !0, n = lpCheckCurrentPWField(t), a = !1, i = null, o = null, l = 1; l <= 2; l++) {
    var a = !1,
      i = (o = null),
      s = -1;
    if (1 == l) {
      if (n)
        for (var c = 0; c < t.elements.length; c++)
          if (t.elements[c] == n) {
            s = c + 1;
            break;
          }
    } else s = 0;
    if (-1 != s) {
      for (var c = s; c < t.elements.length; c++) {
        var d = t.elements[c];
        if ("FIELDSET" != d.tagName)
          if (isInputFieldPassword(e, d)) {
            if ((a || !i || !o) && ((o = i), (i = d), a) && i && o) break;
            a = !0;
          } else a = !1;
      }
      if (i && o) break;
    }
  }
  return null != i && null != o && null != n;
}
function containsSubString(e, t) {
  return e && -1 < e.replace(/\s/g, "").toLowerCase().indexOf(t.toLowerCase());
}
function textFieldScore(e, t) {
  var r = 0;
  return containsSubString(e.name, t) && r++, containsSubString(e.id, t) && r++, containsSubString(e.className, t) && r++, r;
}
function isInputFieldTotpCode(e, t) {
  if (null == e || null == t || "INPUT" != t.tagName || "hidden" == t.type) return !1;
  try {
    var r = gettldcached(e.location.href);
  } catch (e) {
    return !1;
  }
  var e, e;
  return (
    !!valid_by_role(e, t) &&
    ("text" == t.type || "tel" == t.type || "number" == t.type) &&
    (0 < textFieldScore(t, "totp") ||
      ("salesforce.com" == r && "tc" == t.id && 6 == t.maxLength && "tc" == t.name && -1 != t.form.action.indexOf("Totp")) ||
      ("github.com" == r && "otp" == t.id && "otp" == t.name && -1 != t.form.action.indexOf("two-factor")) ||
      ("live.com" == r && "idTxtBx_SAOTCC_OTC" == t.id && "otc" == t.name && 8 == t.maxLength) ||
      (("google.com" != r || -1 == t.id.indexOf("PhonePin")) &&
        ((e = 0),
        (e =
          (e =
            (e =
              (e = (e = (e += textFieldScore(t, "code")) + textFieldScore(t, "pin")) + textFieldScore(t, "verification")) +
              textFieldScore(t, "2fa")) + textFieldScore(t, "twofactor")) + textFieldScore(t, "tfa")),
        t.pattern && containsSubString(t.pattern, "0-9") && e++,
        t.placeholder &&
          (containsSubString(t.placeholder, "6") || containsSubString(t.placeholder, "six") || containsSubString(t.placeholder, "hat")) &&
          e++,
        0 < e)))
  );
}
function form_get_password(e, t) {
  if (!(e = e || LP_derive_doc()) || !t) return null;
  var r = LP_pickFormName(e, t),
    n = formcacheget(e, r, "password_field");
  if (null !== n) return n;
  if (!0 === formcacheget(e, r, "nopasswords")) return null;
  var a = null,
    i,
    o = [],
    o = "FORM" == t.tagName.toUpperCase() ? t.elements : t.getElementsByTagName("INPUT");
  if ((Checkpoint.assert(null !== o && 0 < o.length, "empty form?"), "undefined" == typeof Math)) return null;
  for (
    var l = o.length,
      s =
        (Checkpoint.assert(l < MAX_FORM_ELEMENTS_HARD, "form " + r + " too big 3"),
        l > MAX_FORM_ELEMENTS_HARD && (l = MAX_FORM_ELEMENTS_HARD),
        0),
      i = 0;
    i < l;
    i++
  )
    isInputFieldPassword(e, o[i]) && s++;
  for (var c = Math.floor(1e4 * Math.random()), d = 0; d < l; d++) {
    var _ = o[d];
    if (
      "FIELDSET" != _.tagName &&
      checkIsDisplayed(e, _, 0, null, c) &&
      isInputFieldPassword(e, _) &&
      !(
        1 < s &&
        (passwordIsFake(_) ||
          LP_looksLikeOTPField(e, _) ||
          !valid_by_role(e, _) ||
          LP_fieldIsDisabled(_) ||
          LP_treat_as_hidden(_) ||
          is_search_field(e, _, !0))
      )
    ) {
      a = _;
      break;
    }
  }
  return null === a && 0 === s && formcacheset(e, r, "nopasswords", !0), formcacheset(e, r, "password_field", a), a;
}
function form_get_username(e, t) {
  if (!(e = e || LP_derive_doc()) || !t) return null;
  var r = [],
    r = "FORM" == t.tagName.toUpperCase() ? t.elements : t.getElementsByTagName("INPUT"),
    n = (Checkpoint.assert(null !== r), null),
    t = LP_pickFormName(e, t),
    a = formcacheget(e, t, "username_field");
  if (null !== a) return a;
  if ("undefined" == typeof Math) return null;
  for (
    var i = r.length,
      o =
        (Checkpoint.assert(i < MAX_FORM_ELEMENTS_HARD, "form " + t + " too big 4 "),
        i > MAX_FORM_ELEMENTS_HARD && (i = MAX_FORM_ELEMENTS_HARD),
        Math.floor(1e4 * Math.random())),
      l = 0;
    l < i;
    l++
  ) {
    var s = r[l];
    if ("FIELDSET" != s.tagName && "hidden" != s.type && valid_by_role(e, s) && !LP_fieldIsDisabled(s) && !is_search_field(e, s, !0)) {
      var c = bg.get("LPContentScriptFeatures").icon_expanded_looks_like_username
        ? "email" == s.type || looksLikeUsername(s)
        : "text" == s.type || "email" == s.type || looksLikeUsername(s);
      if (checkIsDisplayed(e, s, 0, null, o) && c) {
        if (isFirstFieldNonLoginSubForm(e, s)) return null;
        n = s;
        break;
      }
    }
  }
  return formcacheset(e, t, "username_field", n), n;
}
function doc_get_orphan_username(e) {
  if (!e && !(e = LP_derive_doc())) return null;
  var t,
    r = ["input"];
  if ("undefined" != typeof Math) {
    var n = formcacheget(e, "orphans", "username_field");
    if ("none" != n) {
      if (null !== n) return n;
      var n = get_javaservlet_fields(e, g_is_specialsite);
      if (n && 2 == n.length && n[0]) return formcacheset(e, "orphans", "username_field", n[0]), n[0];
      if (LP_has_youama(e)) {
        var n = LP_get_youama_fields(e);
        if (n && n.login_username) return formcacheset(e, "orphans", "username_field", n.login_username), n.login_username;
      }
      var a = doc_get_form_equivalents(e);
      if (a && 0 < a.length)
        for (t = 0; t < a.length; t++)
          if ("FORM" != a[t].tagName.toUpperCase()) {
            var i = form_get_username(e, a[t]);
            if (i) return formcacheset(e, "orphans", "username_field", i), i;
          }
      formcacheset(e, "orphans", "username_field", "none");
    }
    return null;
  }
}
function doc_get_orphan_password(e) {
  if (null == e) return null;
  var t = ["input"];
  if ("undefined" != typeof Math) {
    var r = formcacheget(e, "orphans", "password_field");
    if ("none" != r) {
      if (null !== r) return r;
      var r = get_javaservlet_fields(e, g_is_specialsite);
      if (r && 2 == r.length && r[1]) return formcacheset(e, "orphans", "password_field", r[1]), r[1];
      if (LP_has_youama(e)) {
        var r = LP_get_youama_fields(e);
        if (r && r.login_password) return formcacheset(e, "orphans", "password_field", r.login_password), r.login_password;
      }
      var n = doc_get_form_equivalents(e);
      if (n && 0 < n.length)
        for (var a = 0; a < n.length; a++)
          if ("FORM" != n[a].tagName.toUpperCase()) {
            var i = form_get_password(e, n[a]);
            if (i) return formcacheset(e, "orphans", "password_field", i), i;
          }
      formcacheset(e, "orphans", "password_field", "none");
    }
    return null;
  }
}
function set_active_username_password(e, t) {
  var r, n;
  g_popup_active_password =
    null == e
      ? ((g_popup_active_username = null), null)
      : ((n = r = null) == t
          ? checkDocumentForLoginOrphans(e) && ((r = doc_get_orphan_username(e)), (n = doc_get_orphan_password(e)))
          : ((r = form_get_username(e, t)), (n = form_get_password(e, t))),
        (g_popup_active_username = r),
        n);
}
function looksLikeEmail(e, t) {
  var r;
  return !(
    null == e ||
    null == t ||
    ("text" != t.type && "email" != t.type) ||
    ("email" != t.type && !new RegExp(lpgs("ff_email_regexp"), "i").exec(t.name))
  );
}
function is_search_field(e, t, r) {
  if (null != e && null != t && ("INPUT" == t.tagName.toUpperCase() || t.getAttribute("contentEditable"))) {
    var n = null;
    switch (t.type) {
      case "search":
        n = !0;
        break;
      case "text":
        break;
      default:
        "INPUT" == t.tagName.toUpperCase() && (n = !1);
    }
    if (null !== n) return n;
    null === r && (r = !1);
    var a = LP_pickFieldName(e, t),
      i = fieldcacheget(e, a, "search");
    if (null != i) return i;
    var i = t.form,
      o = [];
    if (
      (null != i && (o = i.elements),
      !(
        t.parentNode &&
        "FORM" != t.parentNode.tagName &&
        t.parentNode.className &&
        0 <= t.parentNode.className.toLowerCase().indexOf("login") &&
        t.className &&
        0 <= t.className.toLowerCase().indexOf("search")
      ))
    ) {
      if (
        ((null != t.className && 0 <= t.className.toLowerCase().indexOf("search")) ||
          0 <= t.className.toLowerCase().indexOf("srch") ||
          0 <= t.id.toLowerCase().indexOf("search") ||
          0 <= t.id.toLowerCase().indexOf("srch") ||
          0 <= t.name.toLowerCase().indexOf("search") ||
          0 <= t.name.toLowerCase().indexOf("srch")) &&
        t.name.toLowerCase().indexOf("user") < 0 &&
        t.name.toLowerCase().indexOf("login") < 0 &&
        t.id.toLowerCase().indexOf("user") < 0 &&
        t.id.toLowerCase().indexOf("login") < 0 &&
        (r || o.length < 5)
      )
        return fieldcacheset(e, a, "search", !0), !0;
      var i = new RegExp(lpgs("ff_search_regexp"), "i");
      if (i.exec(t.name) || i.exec(t.id)) {
        var r = (t.name && t.name.match(/[qQ]/)) || (t.id && t.id.match(/[qQ]/)),
          o = new RegExp(lpgs("ff_email_regexp"), "i"),
          i = new RegExp(lpgs("ff_username_regexp"), "i");
        if (
          (!r || !t.name || t.name.match(/^[qQ]/) || (t.id && (!t.id || t.id.match(/^[qQ]/)))) &&
          (!r || !t.id || t.id.match(/^[qQ]/) || (t.name && (!t.name || t.name.match(/^[qQ]/)))) &&
          (!r || !(i.exec(t.name) || i.exec(t.id) || o.exec(t.name) || o.exec(t.id)))
        )
          return verbose_log("field " + a + " appears to be a search field based on regexp"), fieldcacheset(e, a, "search", !0), !0;
        pass;
      }
      var r = t.getAttribute("placeholder"),
        l;
      if (null != r && 0 <= r.toLowerCase().indexOf("search"))
        return (
          verbose_log("field " + a + " appears to be a search field based on placeholder text"), fieldcacheset(e, a, "search", !0), True
        );
      if ("rds-instances-filter-txtbx" == t.id)
        return (
          verbose_log("field " + a + " appears to be a search field based on manually added searchtext"),
          fieldcacheset(e, a, "search", !0),
          !0
        );
      if (
        t.parentNode &&
        "FORM" != t.parentNode.tagName &&
        t.parentNode.className &&
        (0 <= t.parentNode.className.toLowerCase().indexOf("search") || 0 <= t.parentNode.className.toLowerCase().indexOf("srch"))
      )
        return fieldcacheset(e, a, "search", !0), !0;
      if ("search" == t.getAttribute("role")) return fieldcacheset(e, a, "search", !0), !0;
      var i = t.getAttribute("spellcheck");
      if (t.className && 0 <= t.className.indexOf("tt-input") && i && "false" === i) return fieldcacheset(e, a, "search", !0), !0;
      fieldcacheset(e, a, "search", !1);
    }
  }
  return !1;
}
function is_date_field(e) {
  var t, r, n, a, n, t, i, o, a;
  return !(
    !e ||
    ((t = e.name),
    (n = "(?:validate)"),
    (a = new RegExp("(?:date)|(?:calendar)", "i")),
    (n = new RegExp(n, "i")),
    (t = e.name),
    (i = e.id),
    (o = e.className),
    a.exec(t) || a.exec(i) || a.exec(o)
      ? n.exec(t) || n.exec(i) || n.exec(o)
      : !(a = e.getAttribute("placeholder")) ||
        (-1 == (a = a.toLowerCase()).indexOf("yyyy") && -1 == a.indexOf("/yy") && -1 == a.indexOf("mm/")))
  );
}
function is_search_form(e, t) {
  if (null != e && null != t && "FORM" == t.tagName) {
    var r = LP_pickFormName(e, t),
      n = formcacheget(e, r, "search"),
      a;
    if (null != n) return n;
    if (
      (null != t.id &&
        0 < t.id.length &&
        void 0 !== t.id.toLowerCase &&
        (0 <= t.id.toLowerCase().indexOf("search") || 0 <= t.id.toLowerCase().indexOf("srch"))) ||
      (null != t.name &&
        0 < t.name.length &&
        void 0 !== t.name.toLowerCase &&
        (0 <= t.name.toLowerCase().indexOf("search") || 0 <= t.name.toLowerCase().indexOf("srch")))
    )
      return verbose_log("form " + r + " appears to be a search form based on name/id "), formcacheset(e, r, "search", !0), !0;
    if ("search" == t.getAttribute("role")) return formcacheset(e, r, "search", !0), !0;
    formcacheset(e, r, "search", !1);
  }
  return !1;
}
function looksLikeUsername(e, t) {
  if (!bg.get("LPContentScriptFeatures") || !bg.get("LPContentScriptFeatures").icon_expanded_looks_like_username)
    return matchesUsernameHeuristics(e, t);
  if (!e) return !1;
  if (!t && "text" !== e.type && "email" !== e.type && "url" !== e.type) return !1;
  var t = e.ownerDocument,
    r = new RegExp(lpgs("ff_username_regexp"), "i");
  if (LP_hasAngular(t)) {
    var t = LP_getAngularAttributes(e);
    if (t && t["ng-model"] && r.test(t["ng-model"])) return !0;
  }
  for (
    var t = new RegExp(lpgs("ff_email_regexp"), "i"),
      n = new RegExp("^id$|.*-id|online.*id$|.*Id$|onlineId\\d?$", "i"),
      a = new RegExp(lpgs("ff_bankacctnum_regexp"), "i"),
      i = new RegExp(lpgs("ff_company_regexp"), "i"),
      o = new RegExp(lpgs("ff_loginform_regexp"), "i"),
      l = [r, t, n],
      s = (g_is_specialsite && l.push(a, i), [e.name, e.id, e.getAttribute("placeholder"), e.getAttribute("label")]),
      c = !1,
      d = 0;
    d < s.length && !c;
    d++
  )
    for (var _ = 0; _ < l.length && !c; _++) l[_].test(s[d]) && !c && (c = !0);
  if (e.form && !c)
    for (var f = e.form.elements, d = 0; d < f.length && !c; d++)
      "submit" == f[d].type && ((f[d].name && r.test(f[d].name)) || o.test(f[d].name)) && (c = !0);
  return c;
}
function matchesUsernameHeuristics(e, t) {
  if (e) {
    var r,
      n = LP_hasAngular(e.ownerDocument);
    if ((t = null == t ? !1 : t) || "text" == e.type || "email" == e.type || "url" == e.type) {
      var a = new RegExp(lpgs("ff_username_regexp"), "i");
      if (a.exec(e.name)) return !0;
      if (e.id && a.exec(e.id)) return !0;
      var t = e.getAttribute("placeholder");
      if (null != t && 0 <= t.indexOf("Login")) return !0;
      if (n) {
        var t = LP_getAngularAttributes(e);
        if (t && t["ng-model"] && a.exec(t["ng-model"])) return !0;
      }
      var i = new RegExp(lpgs("ff_loginform_regexp"), "i");
      if (e.form)
        for (var o = e.form.elements, l = 0; l < o.length; l++)
          if ("submit" == o[l].type && ((o[l].name && a.exec(o[l].name)) || i.exec(o[l].name))) return !0;
      if ((a = new RegExp("^id$|.*-id|online.*id$|.*Id$|onlineId\\d?$", "i")).exec(e.name)) return !0;
      if (g_is_specialsite) {
        if ((a = new RegExp(lpgs("ff_bankacctnum_regexp"), "i")).exec(e.name)) return !0;
        if ((a = new RegExp(lpgs("ff_company_regexp"), "i")).exec(e.name)) return !0;
        if ((a = new RegExp(lpgs("ff_email_regexp"), "i")).exec(e.name)) return !0;
      }
    }
  }
  return !1;
}
function formHasUsernameField(e) {
  var e = e.form;
  if (e)
    for (var t = e.elements, r = 0; r < t.length; r++) {
      var n = t[r];
      if ("text" == n.type || "email" == n.type) return !0;
    }
  return !1;
}
var DOUBLE_TEXT_VISIBLE = 1,
  DOUBLE_PW_VISIBLE = 2,
  DOUBLE_SECRET_TEXT_VISIBLE = 3,
  DOUBLE_SECRET_PW_VISIBLE = 4,
  NOT_DOUBLE_PW = 0;
function fieldIsDoublePassword(e, t) {
  "document" == e && ((e = document), (t = LP_getElementByIdOrName(e, t)));
  var r = 3,
    n,
    a,
    i,
    o,
    l,
    s,
    o,
    i,
    l,
    c,
    d,
    _;
  return (
    !(null == e && !(e = document)) &&
    (null == t || "checkbox" == t.type || "button" == t.type || "submit" == t.type || "select-one" == t.type
      ? NOT_DOUBLE_PW
      : ((o = i = a = n = null),
        void 0 !== t.previousElementSibling
          ? (n = t.previousElementSibling)
          : (n = t.previousSibling) && null != n.nodeType && 3 == n.nodeType && (n = n.previousSibling),
        void 0 !== t.nextElementSibling
          ? (a = t.nextElementSibling)
          : (a = t.nextSibling) && null != a.nodeType && 3 == a.nodeType && (a = a.nextSibling),
        n && "INPUT" != n.tagName && (n = null),
        a && "INPUT" != a.tagName && (a = null),
        n &&
          (void 0 !== n.previousElementSibling
            ? (i = n.previousElementSibling)
            : (i = n.previousSibling) && null != i.nodeType && 3 == i.nodeType && (i = i.previousSibling),
          i) &&
          "INPUT" != i.tagName &&
          (i = null),
        a &&
          (void 0 !== a.nextElementSibling
            ? (o = a.nextElementSibling)
            : (o = a.nextSibling) && null != o.nodeType && 3 == o.nodeType && (o = o.nextSibling),
          o) &&
          "INPUT" != o.tagName &&
          (o = null),
        "undefined" != typeof Math
          ? ((l = Math.floor(1e4 * Math.random())),
            ("password" == t.type &&
              !checkIsDisplayed(e, t, -1, null, l) &&
              n &&
              "text" == n.type &&
              !checkIsDisplayed(e, n, -1, null, l) &&
              a &&
              "text" == a.type &&
              checkIsDisplayed(e, a, -1, null, l) &&
              o &&
              "text" == o.type &&
              checkIsDisplayed(e, o, -1, null, l)) ||
            ("text" == t.type &&
              checkIsDisplayed(e, t, -1, null, l) &&
              n &&
              "text" == n.type &&
              checkIsDisplayed(e, n, -1, null, l) &&
              i &&
              "password" == i.type &&
              !checkIsDisplayed(e, i, -1, null, l))
              ? (verbose_log("field " + LP_pickFieldName(e, t) + " needs double secret password hack"),
                (g_double_secret_password_hack = !0),
                DOUBLE_SECRET_TEXT_VISIBLE)
              : ("password" == t.type &&
                  checkIsDisplayed(e, t, -1, null, l) &&
                  n &&
                  "text" == n.type &&
                  !checkIsDisplayed(e, n, -1, null, l)) ||
                ("text" == t.type &&
                  !checkIsDisplayed(e, t, -1, null, l) &&
                  a &&
                  "password" == a.type &&
                  checkIsDisplayed(e, a, -1, null, l))
              ? (verbose_log("field " + LP_pickFieldName(e, t) + " needs double password hack"),
                (g_double_password_hack = !0),
                DOUBLE_PW_VISIBLE)
              : ((s = !0),
                (o = null != t && lpIsVisible(t, !0)),
                (i = null != n && lpIsVisible(n, !0)),
                (l = null != a && lpIsVisible(a, !0)),
                (c = null != t && looksLikeUsername(t)),
                (d = null != n && looksLikeUsername(n)),
                (_ = null != a && looksLikeUsername(a)),
                ("password" == t.type && !o && n && "text" == n.type && i && !d) ||
                ("text" == t.type && o && !c && a && "password" == a.type && !l) ||
                ("password" == t.type && !o && a && "text" == a.type && l && !_) ||
                ("text" == t.type && o && !c && n && "password" == n.type && !i)
                  ? (verbose_log("field " + LP_pickFieldName(e, t) + " needs double password hack"),
                    (g_double_password_hack = !0),
                    DOUBLE_TEXT_VISIBLE)
                  : ("password" == t.type && o && n && "text" == n.type && !i && !d) ||
                    ("text" == t.type && !o && a && "password" == a.type && l) ||
                    ("password" == t.type && o && a && "text" == a.type && !l && !_) ||
                    ("text" == t.type && !o && n && "password" == n.type && i)
                  ? (verbose_log("field " + LP_pickFieldName(e, t) + " needs double password hack"),
                    (g_double_password_hack = !0),
                    DOUBLE_PW_VISIBLE)
                  : NOT_DOUBLE_PW))
          : void 0))
  );
}
function ContigPWHack(e, t, r) {
  if (null === (e = null === e ? document : e)) return !1;
  if (void 0 === e.getElementsByTagName) return !1;
  var t = lpCountInputFields(t);
  if ("undefined" != typeof Math) {
    var n = Math.floor(1e4 * Math.random());
    if ((3 == t.passwordvisible || 4 == t.passwordvisible) && !0 === t.passwordsContiguous)
      for (var a, i = e.getElementsByTagName("input"), a = 0; a < i.length && !(100 < a); a++)
        if (i[a] == r) {
          if (
            void 0 !== i[a + 1] &&
            "password" == i[a + 1].type &&
            void 0 !== i[a + 2] &&
            "password" == i[a + 2].type &&
            checkIsDisplayed(e, i[a], -1, null, n) &&
            checkIsDisplayed(e, i[a + 1], -1, null, n) &&
            checkIsDisplayed(e, i[a + 2], -1, null, n)
          )
            return !0;
          break;
        }
    return !1;
  }
}
function isContigPW(e, t, r) {
  var n = null,
    a = null,
    i,
    o = (t = null == t ? e : t).getElementsByTagName("input");
  if ("undefined" != typeof Math) {
    for (var l = Math.floor(1e4 * Math.random()), i = 0; i < o.length; i++)
      if (o[i] == r && "password" == o[i].type) {
        if (
          (void 0 !== o[i + 1] &&
            "password" == o[i + 1].type &&
            checkIsDisplayed(e, o[i], -1, null, l) &&
            checkIsDisplayed(e, o[i + 1], -1, null, l)) ||
          (void 0 !== o[i - 1] &&
            "password" == o[i - 1].type &&
            checkIsDisplayed(e, o[i], -1, null, l) &&
            checkIsDisplayed(e, o[i - 1], -1, null, l))
        )
          return !0;
        break;
      }
    return !1;
  }
}
function get_prev_field(e, t) {
  void 0 !== t.previousElementSibling
    ? (prev_field = t.previousElementSibling)
    : (prev_field = t.previousSibling) &&
      null != prev_field.nodeType &&
      prev_field.nodeType == TEXT_NODE &&
      (prev_field = prev_field.previousSibling);
}
function get_next_field(e, t) {
  void 0 !== t.nextElementSibling
    ? (next_field = t.nextElementSibling)
    : (next_field = t.nextSibling) &&
      null != next_field.nodeType &&
      next_field.nodeType == TEXT_NODE &&
      (next_field = next_field.nextSibling);
}
function isFirstFieldNonLoginSubForm(e, t) {
  if (null != e && null != t && "INPUT" == t.tagName && "password" != t.type && "hidden" != t.type && "text" == t.type) {
    var e = new RegExp(lpgs("ff_firstname_regexp"), "i");
    if (e.exec(t.name) || e.exec(t.id)) return !0;
    if (((e = new RegExp("register|signup|enroll|create", "i")), (t.parentNode && e.exec(t.parentNode.name)) || e.exec(t.parentNode.id)))
      return !0;
    if (t.parentNode && t.parentNode.parentNode && (e.exec(t.parentNode.parentNode.name) || e.exec(t.parentNode.parentNode.id))) return !0;
  }
  return !1;
}
function isUsernameFieldLoginSubForm(e, t) {
  return (
    null != e &&
    null != t &&
    "INPUT" == t.tagName &&
    "password" != t.type &&
    "hidden" != t.type &&
    (FoundNonLoginSubForm(e) ? False : !!looksLikeUsername(t))
  );
}
function FoundNonLoginSubForm(e) {
  if (null == e) return !1;
  if (isASPpage())
    for (var t = getAllIconStates(), r, n, r = 0, a; r < t.length; r++) {
      if ("formfills" == t[r].fillhint) return True;
    }
  return False;
}
function isPasswordFieldLoginSubForm(e, t) {
  if (null != e && null != t && "INPUT" == t.tagName && "hidden" != t.type) {
    if (FoundNonLoginSubForm(e)) return False;
    if ("password" == t.type) {
      for (var r = e.getElementsByTagName("INPUT"), n, n = 0; n < r.length && n < MAX_INPUTS_HARD && t != r[n]; n++);
      if (t == r[n] && 0 < n) {
        var a = LP_pickFieldName(e, t);
        if (a && a.toLowerCase().indexOf(0 <= lpgs("Password"))) {
          var a = r[n - 1],
            e = LP_pickFieldName(e, a),
            i;
          if (new RegExp(lpgs("ff_username_regexp"), "i").exec(e)) return !0;
        }
      }
    }
  }
  return !1;
}
function isASPpage() {
  var e = !1,
    t,
    t;
  return (
    g_isfirefox
      ? (t = (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument)
        ? (e = t.g_found_aspx)
        : verbose_log(t.location.href)
      : (e = g_found_aspx),
    (e = e || !1)
  );
}
function setASPpage(e) {
  var t = !1,
    r,
    r;
  return (
    null == e && (e = !0),
    g_isfirefox
      ? (r = (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument)
        ? (t = r.g_found_aspx = e)
        : verbose_log(r.location.href)
      : ((g_found_aspx = e), (t = !0)),
    (t = t || !1)
  );
}
function checkDocumentForLoginOrphansFirstStage(e) {
  if (!e) return !1;
  var t = 20,
    r = 4,
    n = formcacheget(e, "fakedoc", "orphan-first");
  if (null != n) return n;
  if ("undefined" != typeof Math) {
    for (var a = [], i = [], o = 0, l = !1, s = Math.floor(1e4 * Math.random()), c = ["input"], d = 0; d < c.length; d++)
      for (var _ = e.getElementsByTagName(c[d]), f = 0; f < _.length; f++) {
        var u = _[f],
          p,
          p;
        if (20 < f) break;
        if (!_[f].form && checkIsDisplayed(e, _[f], 0, null, s)) {
          if ((verbose_log("checking " + LP_pickFieldName(e, u)), null != u.id && "" != u.id)) {
            if (null != (p = i[u.id])) continue;
            i[u.id] = !0;
          }
          if (null != u.name && "" != u.name) {
            if (null != (p = a[u.name])) continue;
            a[u.name] = !0;
          }
          if ((looksLikeUsername(u) && o++, isInputFieldPassword(e, u))) {
            l = !0;
            break;
          }
          if (2 < o) break;
        }
      }
    return 0 < o && o <= 4 && 0 == l
      ? (decision_log(e, "DE27"), formcacheset(e, "fakedoc", "orphan-first", !0), !0)
      : (formcacheset(e, "fakedoc", "orphan-first", !1), !1);
  }
}
function LP_looksLikeOTPField(e, t) {
  var r, n, a, e, e, e;
  return !!(
    e &&
    t &&
    "INPUT" == t.tagName &&
    ((r =
      /^(otp|token|tokencode|mfacode)[_\W]|[_\W](otp|token|tokencode|mfacode)$|^(otp|token|tokencode|totpPin|mfacode):?$|[_\W](otp|token|tokencode|mfacode)[_\W]|(validation|verification|challenge).*code:?$/i),
    (n = get_doc_location_href(e)),
    (a = gettldcached(n)),
    (e = LP_pickFieldName(e, t)),
    r.exec(e) ||
      ((e = t.getAttribute("aria-label")) && 0 < e.indexOf("O-Key")) ||
      ((e = lpGetTextBeforeFormField(t, !1).toLowerCase()), r.exec(e)) ||
      (n && 0 < n.toLowerCase().indexOf("challenge") && e && e.match(/([_\W]code:?$|^code[_\W])/)))
  );
}
function LP_fieldIsDisabled(e) {
  var t;
  return !(!e || ((void 0 === e.disabled || !e.disabled) && "true" !== e.getAttribute("aria-disabled")));
}
function LP_fieldIsReadOnly(e) {
  var t;
  return !(!e || ((void 0 === e.readOnly || !e.readOnly) && "true" !== e.getAttribute("aria-readonly")));
}
function LP_fieldIsDecorative(e) {
  var t;
  return !!e && "presentation" === e.getAttribute("role");
}
function checkDocumentForCPWOrphans(e) {
  if (!e && !(e = LP_derive_doc())) return null;
  var t = formcacheget(e, "fakedoc", "cpw");
  if (null != t) return t;
  var r = null,
    n = 0,
    a = 4,
    i = e.getElementsByTagName("INPUT");
  Checkpoint.assert(i.length <= MAX_INPUTS_HARD, "page has too many inputs");
  for (var o = 0; o < i.length; o++) {
    var l = i[o];
    if (o > MAX_INPUTS_HARD) break;
    if (null == l.form) {
      if (isInputFieldPassword(e, l) && lpIsVisible(l)) {
        n++;
        var l = lpIsFieldCurrentPWField(l);
        if (l) {
          if (r) return !1;
          r = l;
        }
      }
      if (4 <= n) return formcacheset(e, "fakedoc", "cpw", !1), !1;
    }
  }
  return 2 <= n && r ? (formcacheset(e, "fakedoc", "cpw", !0), !0) : (formcacheset(e, "fakedoc", "cpw", !1), !1);
}
function ForceFillFieldClicked(e, t, r, n) {
  var t = t,
    r,
    a;
  return (
    !(!t || !n) &&
    ((r = t.form && !r ? LP_getname(t.form) : ""),
    "password" == (a = t.type || "")
      ? LP_getname(t)
        ? LP_setval(
            e,
            LP_getname(t),
            n.p,
            0,
            n.a,
            r,
            a,
            n.sharedsite,
            null,
            n.automaticallyFill,
            n.reqinfo,
            null,
            !0,
            n.humanize,
            n.reqinfo,
            n.realurl,
            "password"
          )
        : LP_fill_given_field(e, t, n.p, a, n.sharedsite, n.automaticallyFill, n.a, !0, !0, n.humanize, n.reqinfo, n.realurl, "password")
      : "" == n.u ||
        (LP_getname(t)
          ? LP_setval(
              e,
              LP_getname(t),
              n.u,
              0,
              n.a,
              r,
              a,
              n.sharedsite,
              null,
              n.automaticallyFill,
              n.reqinfo,
              null,
              !0,
              n.humanize,
              n.reqinfo,
              n.realurl,
              "userName"
            )
          : LP_fill_given_field(
              e,
              t,
              n.u,
              a,
              n.sharedsite,
              n.automaticallyFill,
              n.a,
              !0,
              !0,
              n.humanize,
              n.reqinfo,
              n.realurl,
              "userName"
            )))
  );
}
function ForceFillFormClicked(e, t, r, n) {
  var a, i, t, o, l, s, a;
  return (
    !!t &&
    ((a = null), (i = !1), !!(t = t.getElementsByTagName("INPUT"))) &&
    ((a = GuessUserPassFields(t, (s = l = o = !0), !0, !0)) &&
      (a.text && ForceFillFieldClicked(e, a.text, !1, n), a.password) &&
      ForceFillFieldClicked(e, a.password, !1, n),
    !0)
  );
}
function GuessUserPassFields(e, t, r, n) {
  if (!e || e.length <= 0) return null;
  for (var a = document, i, o = e.length, l = null, s = null, c = !1, i = 0; i < o; i++) {
    var d = e[i];
    if (d)
      if (r && (LP_fieldIsReadOnly(d) || LP_fieldIsDisabled(d))) decision_log(a, "DE24");
      else {
        var _ = !0,
          f,
          u,
          f,
          f;
        if (n && !lpIsVisible(d, !0)) decision_log(a, "DE25");
        else {
          if (t)
            if ((f = new RegExp(lpgs("ff_search_regexp"), "i")).exec(d.name) || f.exec(d.id)) {
              var p = (d.name && d.name.match(/[qQ]/)) || (d.id && d.id.match(/[qQ]/)),
                m = new RegExp(lpgs("ff_username_regexp"), "i"),
                g = new RegExp(lpgs("ff_email_regexp"), "i");
              if (
                (!p || !d.name || d.name.match(/^[qQ]/) || (d.id && (!d.id || d.id.match(/^[qQ]/)))) &&
                (!p || !d.id || d.id.match(/^[qQ]/) || (d.name && (!d.name || d.name.match(/^[qQ]/)))) &&
                (!p || !(m.exec(d.name) || m.exec(d.id) || g.exec(d.name) || g.exec(d.id)))
              ) {
                decision_log(a, "DE23");
                continue;
              }
              pass;
            }
          popupfill_shoulddofield(a, d, !1) ||
            ((u = !1),
            ("text" != d.type && "tel" != d.type && "email" != d.type) ||
              s ||
              (t
                ? (f = new RegExp(lpgs("ff_username_regexp"), "i")).exec(d.name) || f.exec(d.id)
                  ? ((l = d), (c = !0))
                  : c || (l = d)
                : (l = d)),
            "password" != d.type) ||
            s ||
            (!t || ((f = new RegExp(lpgs("ff_username_regexp"), "i")), c) || (!f.exec(d.name) && !f.exec(d.id)) ? (s = d) : (l = d));
        }
      }
  }
  var h = {};
  return l && (h.text = l), s && (h.password = s), isEmptyObject(h) ? null : h;
}
function ForceFillClicked(e, t, r) {
  var n,
    a,
    n = (n = g_popupfill_parent) || g_popupfill_parent_last,
    a,
    i;
  if (
    !n &&
    (g_force_fill_active_element &&
      (a = LP_getActiveElement(e)) &&
      "INPUT" == a.tagName &&
      LP_docHasFocus(e) &&
      hasIconState(e, LP_pickFieldName(e, a)) &&
      ((n = a), info_log("CV21")),
    !n)
  )
    return !1;
  return (
    !!(e = e || n.ownerDocument) &&
    ((a = chk_form_has_password(e, n.form)),
    (i = chk_form_ask_generate(e, n.form)),
    n.form && a && !i
      ? !(!ForceFillFormClicked(e, n.form, t, r) || "" === n.value) || ForceFillFieldClicked(e, n, t, r)
      : null == n.form
      ? ForceFillOrphanFieldClicked(e, n, r)
      : ForceFillFieldClicked(e, n, t, r))
  );
}
function isMultiStageLoginForm(e) {}
function LP_passwordAlt(e, t) {
  var r;
  return !(!e || !t || "INPUT" != t.tagName) && "nyckel" == LP_pickFieldName(e, t).toLowerCase() && "password" == t.type;
}
var LP_explicit_ignored = function (e, t) {
  var r;
  return (
    !e ||
    !t ||
    void 0 === t.getAttribute ||
    "true" === (r = t.getAttribute("data-lpignore")) ||
    "true" === (r = !!t.dataset && t.dataset.lpignore) ||
    "true" === (r = t.getAttribute("lpignore")) ||
    "true" === t.lpignore
  );
};
function countFormEquivalents(e) {
  for (var t = 0, r = e.getElementsByTagName("FORM"), n = LP_getFormsThreshold(e), a = 0; a < r.length && a < n; a++) {
    var i = !0;
    lpIsVisible(r[a]), t++;
  }
  return t;
}
function LP_implicit_ignored(e, t) {
  var r, n, a, i, a, o;
  return (
    !!t &&
    !(
      !(e = e || LP_derive_doc()) ||
      ((r = t.id),
      (n = t.name),
      (a = e.body),
      (i = t.form),
      !(n && "post_title" == n && a && a.className && 0 <= a.className.indexOf("wp-admin")) &&
        (!n || ("symbols" != n && "symbol" != n)) &&
        ("text" != t.type || !r || !(0 < r.indexOf("_note") || 0 < r.indexOf("-note"))) &&
        ((a = new RegExp(lpgs("ff_combineddummy_regexp"), "i")),
        (o = new RegExp("member.*number", "i")),
        (!a.exec(r) && !a.exec(n)) || o.exec(r) || o.exec(n)
          ? !LP_field_is_xsrf(e, t) && (!i || popupfill_shoulddoform(e, i))
          : (decision_log(e, "DE22", { param1: r, param2: n }), 0)))
    )
  );
}
function LP_read_website_hint(e, t) {}
function should_ignore_body_relative(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = formcacheget(e, "fakedoc", "ignore-relative-style");
  if (!0 === t || !1 === t) return t;
  var r = 0,
    n = null,
    a = 100,
    i = LP_get_cached_body_rect(e),
    t = LP_get_body_reference(e),
    o = LP_get_cached_body_style(e);
  if (!o || "relative" == o.position) {
    var l = [];
    if ((l = t ? t.children : l) && 0 < l.length)
      for (Checkpoint.assert(l.length < a, "too many body.children"), r = 0; r < l.length && r < a; r++)
        if (!lp_in_array(l[r].tagName.toUpperCase(), ["SCRIPT"]) && lp_in_array(l[r].tagName.toUpperCase(), ["DIV", "SECTION", "FORM"])) {
          if ((n = LP_get_live_style(l[r])) && "relative" == n.position) return formcacheset(e, "fakedoc", "ignore-relative-style", !1), !1;
          break;
        }
  }
  return formcacheset(e, "fakedoc", "ignore-relative-style", !0), !0;
}
function LP_iconFieldWidthOK(e, t, r) {
  var n = 40,
    a = 100,
    i = 2,
    o = 3,
    l,
    s,
    c;
  return !(
    !e ||
    null === t ||
    ((l = e.ownerDocument)
      ? (r = !(null != r || !(isInputFieldPassword(l, e) || ((s = e.form) && chk_form_has_password(l, s)))) || r)
        ? (0 < t && t < 40) || !d(e)
        : 0 < t && t < a
      : (verbose_log("iconFieldWidthOK: no doc???"), 1))
  );
  function d(e) {
    var t, r;
    if (e)
      return (
        (t = e.getAttribute("size")),
        (r = e.getAttribute("maxlength")),
        null == t && (t = e.size),
        null == r && (r = e.maxLength),
        "" == e.style.width && t && t < 2 && 0 <= t ? void 0 : !(r && r < 3 && 0 <= r)
      );
  }
}
function create_icons_on_ASP(a, e) {
  if (do_experimental_popupfill) {
    if (!(a = a || LP_derive_doc())) return !1;
    decision_log(a, "DE21", { param1: a.location.href });
    for (
      var t = [],
        r,
        r,
        n =
          (g_do_icon_number_hint &&
            (g_isfirefox
              ? ((r = (r = LP.getMatchingSites(a.location.href, SKIP_GENPWS)) && r.length ? r.length : 0), (t.sites = r))
              : (t = g_icon_numbers)),
          a.getElementsByTagName("FORM")),
        i,
        o,
        l = {},
        s = SHOULD_DO_ALWAYS,
        c = LP_getFormsThreshold(a),
        d = 0,
        o = 0;
      o < n.length && o < c;
      o++
    ) {
      var _ = n[o].elements,
        f = chk_form_has_password(a, n[o]),
        u = chk_form_is_nonlogin_form(a, n[o]),
        p = chk_form_ask_generate(a, n[o]),
        m = form_get_username(a, n[o]),
        g = form_get_password(a, n[o]),
        h = MAX_INPUTS_SOFT;
      for (LP_exceedInputsThreshold(a) || (h = MAX_INPUTS_HARD), i = 0; i < _.length && i < h; i++) {
        var y = !1,
          v = _[i],
          L = "sites",
          P,
          E,
          x,
          k,
          L,
          y,
          P;
        "INPUT" == v.tagName &&
          ((P = !1),
          popupfill_shoulddofield(a, v, s) &&
            ((E = LP_fieldGetWidth(v)),
            (x = !0),
            e
              ? (looksLikeUsername(v) || isInputFieldPassword(a, v)) && ((L = "sites"), (y = !0))
              : m == v
              ? ((L = "sites"), (y = !0))
              : isInputFieldPassword(a, v)
              ? ((L = "sites"), (P = y = k = !0), (isContigPW(a, v.form, v) || isRegistrationUrl()) && (P = !(L = "generate")))
              : isFirstFieldNonLoginSubForm(a, v)
              ? ((L = "formfills"), sendBG({ cmd: "setformfillsactivetab" }), (x = !(y = !0)))
              : (isUsernameFieldLoginSubForm(a, v) || isPasswordFieldLoginSubForm(a, v)) && ((L = "sites"), (P = y = !0)),
            y) &&
            LP_iconFieldWidthOK(v, E, x)) &&
          (d++,
          setup_input_icon(a, v, L, t, P),
          !g_clickable_input ||
            ("password" == v.type && formHasUsernameField(v) && !g_clickable_input_on_password) ||
            (!LP_didFieldClickEvent(a, v) &&
              L &&
              "sites" == L &&
              (LP_setFieldClickEvent(a, v),
              LP_addEventHandler(
                v,
                "click",
                function (e) {
                  var t = e.target,
                    r = LPMAGIC + LP_getname_or_idx(a, t, LP_GETNAME_FAVOR_ID_OVER_NAME),
                    n;
                  if (null != document.getElementById(r))
                    g_clickable_input_on_password
                      ? is_your_popup_showing(a) || conditional_create_popup(a, t, FORCE_SHOW_NOHITS_NOLOGIN)
                      : (set_active_username_password(a, v.form),
                        popuptoggle(a, null, LP_getname_or_idx(a, v, LP_GETNAME_FAVOR_ID_OVER_NAME), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS));
                  else if (g_input_click_intercept)
                    try {
                      info_log(a, "FF12"), icon_click_handler(e);
                    } catch (e) {}
                  return !1;
                },
                !1
              ))));
      }
    }
    decision_log(a, "DE1", { param1: d });
  }
}
function check_for_ASP(t, e) {
  if (e) {
    var r = !1;
    if (!isASPpage() && g_aspx_hack) {
      (0 !== e.name.indexOf("ctl00$") &&
        (null == e.form ||
          ("ctl00" != e.form.name &&
            "landingform" != e.form.name &&
            "landingForm" != e.form.name &&
            "aspnetForm" != e.form.name &&
            "aspnetForm" != e.form.id)) &&
        0 !== e.name.indexOf("ctl00_")) ||
        isASPpage() ||
        (setASPpage(!0), decision_log("DE20"));
      try {
        t.location &&
          t.location.href &&
          0 < t.location.href.indexOf(".aspx") &&
          e.form &&
          e.form.elements &&
          e.form.elements.length &&
          6 < e.form.elements.length &&
          (isASPpage() || (setASPpage(!0), decision_log("DE19")));
      } catch (e) {
        write_error_to_history(t, "check_for_ASP", e);
      }
    }
  }
}
function create_icons_generic(a, e) {
  if (do_experimental_popupfill) {
    if (!a && !(a = LP_derive_doc())) return null;
    decision_log(a, "DE16", { param1: a.location.href });
    for (
      var t = [],
        r,
        r,
        n =
          (g_do_icon_number_hint &&
            (g_isfirefox
              ? ((r = (r = LP.getMatchingSites(a.location.href, SKIP_GENPWS)) && r.length ? r.length : 0), (t.sites = r))
              : (t = g_icon_numbers)),
          a.getElementsByTagName("INPUT")),
        i,
        o,
        l = n.length,
        r = MAX_INPUTS_SOFT,
        s =
          (LP_exceedInputsThreshold(a) || (r = MAX_INPUTS_HARD),
          Checkpoint.assert(l <= r, "page has too many inputs"),
          r < l && (l = r),
          SHOULD_DO_ALWAYS),
        c = checkDocumentForLoginOrphans(a),
        d = 0,
        i = 0;
      i < l;
      i++
    ) {
      var _ = n[i].form,
        f = null,
        u = null,
        u = _ ? ((f = form_get_username(a, _)), form_get_password(a, _)) : ((f = doc_get_orphan_username(a)), doc_get_orphan_password(a)),
        p = n[i],
        _ = !1,
        m = "sites",
        g = !1,
        h,
        y,
        v;
      popupfill_shoulddofield(a, p, s) &&
        ((h = LP_fieldGetWidth(p)),
        (y = !0),
        e
          ? (looksLikeUsername(p) || isInputFieldPassword(a, p)) && ((m = "sites"), (_ = !0))
          : f == p
          ? ((m = "sites"), (_ = !0))
          : isInputFieldPassword(a, p)
          ? ((m = "sites"), (g = _ = !0), (isContigPW(a, p.form, p) || isRegistrationUrl()) && (g = !(m = "generate")))
          : isFirstFieldNonLoginSubForm(a, p)
          ? ((m = "formfills"), sendBG({ cmd: "setformfillsactivetab" }), (y = !(_ = !0)))
          : isUsernameFieldLoginSubForm(a, p) || isPasswordFieldLoginSubForm(a, p)
          ? ((m = "sites"), (g = _ = !0))
          : null == p.form && c && (looksLikeUsername(p) || isInputFieldPassword(a, p)) && ((m = "sites"), (_ = !0)),
        _) &&
        LP_iconFieldWidthOK(p, h, y) &&
        (d++,
        (v = setup_input_icon(a, p, m, t, g)),
        !g_clickable_input ||
          ("password" == p.type && formHasUsernameField(p) && !g_clickable_input_on_password) ||
          (!LP_didFieldClickEvent(a, p) &&
            m &&
            "sites" == m &&
            (LP_setFieldClickEvent(a, p),
            LP_addEventHandler(
              p,
              "click",
              function (e) {
                var t = e.target,
                  r = LPMAGIC + LP_getname_or_idx(a, t, LP_GETNAME_FAVOR_ID_OVER_NAME),
                  n;
                if (null != document.getElementById(r))
                  g_clickable_input_on_password
                    ? is_your_popup_showing(a) || conditional_create_popup(a, t, FORCE_SHOW_NOHITS_NOLOGIN)
                    : (set_active_username_password(a, p.form),
                      popuptoggle(a, null, LP_getname_or_idx(a, p, LP_GETNAME_FAVOR_ID_OVER_NAME), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS));
                else if (g_input_click_intercept)
                  try {
                    info_log(a, "FF12"), icon_click_handler(e);
                  } catch (e) {}
                return !1;
              },
              !1
            ))));
    }
    return decision_log(a, "DE2", { param1: d }), !0;
  }
  function L(e) {}
  function P(e) {}
  function E(e, t) {}
  function x(e, t, r) {}
}
function LP_getAngularAttributes(e, t) {
  if (((e = e || LP_derive_doc()), !t || !e)) return null;
  for (
    var r = {},
      n = [
        "ng-model",
        "ng-controller",
        "ng-repeat",
        "ng-include",
        "ng-switch",
        "ng-view",
        "ng-minlength",
        "ng-maxlength",
        "ng-pattern",
        "ng-click",
        "ng-submit",
        "ng-required"
      ],
      a = 0;
    a < n.length;
    a++
  ) {
    var i = t.getAttribute(n[a]);
    null !== i && (r[n[a]] = i);
  }
  for (
    var o = ["ng-valid", "ng-invalid", "ng-pristine", "ng-dirty", "ng-touched", "ng-untouched", "ng-pending", "ng-empty", "ng-not-empty"],
      a = 0;
    a < o.length;
    a++
  ) {
    var l = sprintf("[\\w]*%s[\\w]*", o[a]);
    t.className.match(l) && (r[o[a]] = !0);
  }
  return r;
}
function LP_hasAngular(e) {
  var t, r, r, n;
  return (
    !!(e = e || LP_derive_doc()) &&
    ((t = !1),
    null != (r = formcacheget(e, "fakedoc", "has-angular"))
      ? r
      : ((r = e.documentElement),
        (((n = e.body) && n.getAttribute("ng-app")) ||
          (r && r.getAttribute("ng-app")) ||
          (n && null !== n.getAttribute("ng-strict-di")) ||
          (r && null !== r.getAttribute("ng-strict-di")) ||
          LP_getElementByXPath(e, "//*[@ng-app!='']")) &&
          (t = !0),
        formcacheset(e, "fakedoc", "has-angular", t),
        t))
  );
}
function LP_hasKnockout(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = !1,
    r = formcacheget(e, "fakedoc", "has-knockout");
  if (null != r) return r;
  if (g_isie) {
    for (var n = e.getElementsByTagName("input"), a = 0; a < n.length && a < MAX_INPUTS_HARD; a++)
      if (n[a].getAttribute("data-bind")) {
        t = !0;
        break;
      }
  } else {
    var r = LP_getElementsByXPath(e, "//*[@data-bind != '']");
    r && 0 < r.length && (t = !0);
  }
  return formcacheset(e, "fakedoc", "has-knockout", t), t;
}
function LP_has_yui(e) {
  if ((e = e || LP_derive_doc())) {
    var t = !1,
      r = formcacheget(e, "fakedoc", "has-yui");
    if (null != r) return r;
    if (e.documentElement && 0 <= e.documentElement.className.indexOf("yui3-js-enabled"))
      return formcacheset(e, "fakedoc", "has-yui", !0), !0;
    if (e.documentElement && 0 == e.documentElement.id.indexOf("yui_3")) return formcacheset(e, "fakedoc", "has-yui", !0), !0;
    if (e.getElementById("yui3-css-stamp")) return formcacheset(e, "fakedoc", "has-yui", !0), !0;
    formcacheset(e, "fakedoc", "has-yui", !1);
  }
  return !1;
}
function LP_field_is_xsrf(e, t) {
  var e;
  return (
    !(!(e = e || LP_derive_doc()) || !t) &&
    ((e = !1),
    !(
      !t.tagName ||
      "INPUT" != t.tagName.toUpperCase() ||
      "string" != typeof t.name ||
      !(
        0 <= t.name.toUpperCase().indexOf("CSRF") ||
        0 <= t.name.toUpperCase().indexOf("XSRF") ||
        0 <= t.id.toUpperCase().indexOf("CSRF") ||
        0 <= t.id.toUpperCase().indexOf("XSRF")
      )
    ) || e)
  );
}
function LP_get_youama_fields(e) {
  var t, r, n, a, i, o, l, s, c, d, _, f, u, t, r;
  return (e = e || LP_derive_doc())
    ? ((t = {}),
      null != (r = formcacheget(e, "orphans", "youama-fields"))
        ? r
        : ((n = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]//input[@id='youama-email']")),
          (a = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]//input[@id='youama-password']")),
          (i = LP_getElementByXPath(
            e,
            "//div[contains(@class,'youama-login-window')]//button[contains(@class,'youama-ajaxlogin-button')]"
          )),
          (o = LP_getElementByXPath(e, "//div[contains(@class,'youama-login-window')]")),
          (l = LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]//input[@id='youama-email']")),
          (s = LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]//input[@id='youama-password']")),
          (c = LP_getElementByIdOrName(e, "youama-firstname")),
          (d = LP_getElementByIdOrName(e, "youama-lastname")),
          (t = {
            login_username: n,
            login_password: a,
            login_button: i,
            login_form_container: o,
            regis_username: l,
            regis_password: s,
            regis_password_confirm: LP_getElementByIdOrName(e, "youama-passwordsecond"),
            regis_firstname: c,
            regis_lastname: d,
            regis_button: LP_getElementByXPath(
              e,
              "//div[contains(@class,'youama-register-window')]//button[contains(@class,'youama-ajaxlogin-button')]"
            ),
            regis_form_container: LP_getElementByXPath(e, "//div[contains(@class,'youama-register-window')]")
          }),
          (r = formcacheset(e, "orphans", "youama-fields", t)),
          t))
    : null;
}
function LP_has_youama(e) {
  var t;
  return (e = e || LP_derive_doc())
    ? null != (t = formcacheget(e, "fakedoc", "has-youama"))
      ? t
      : 0 < e.getElementsByClassName("youama-login-window").length || 0 < e.getElementsByClassName("youama-register-window").length
      ? (formcacheset(e, "fakedoc", "has-youama", !0), !0)
      : (formcacheset(e, "fakedoc", "has-youama", !1), !1)
    : [];
}
function LP_has_dijit(e) {
  if (!(e = e || LP_derive_doc()) || !e.documentElement) return [];
  var t = 0,
    r = e.getElementsByClassName("dijitContentPane"),
    n;
  if (r && 0 < r.length) return !0;
  if (e.documentElement.className.match(/^dj_[a-z]+|\sdj_[a-z]+/)) return !0;
  for (r = e.getElementsByTagName("SCRIPT"), t = 0; t < r.length; t++)
    if ("dojo/connect" == r[t].getAttribute("type") || "dojo/method" == r[t].getAttribute("type")) return !0;
  for (r = e.getElementsByTagName("FORM"), t = 0; t < r.length; t++) if (r[t].getAttribute("data-dojo-attach-point")) return !0;
  return !1;
}
var LP_milestone_flags = 0;
function LP_parser_milestone(e) {
  return void 0 !== e && ((LP_milestone_flags |= e), !0);
}
function page_is_nemid(t) {
  if (!(t = t || LP_derive_doc())) return !1;
  var e = lp_gettld_url(punycode.URLToASCII(get_doc_location_href(document))),
    r = "",
    n = "",
    a = !1,
    i = formcacheget(t, "fakedoc", "is-nemid");
  if (null != i) return i;
  try {
    if (!get_can_xref(t, "top")) throw "xref";
    (r = window.name), (n = window.top.name);
  } catch (e) {
    set_can_xref(t, "top", !1);
  }
  return (
    ("danid.dk" != e && "nemid.nu" != e) || (!t.getElementById("appArea") && "nemid_iframe" != r && "loginWindow" != n) || (a = !0),
    formcacheset(t, "fakedoc", "is-nemid", a),
    a
  );
}
function LP_element_is_honeypot(e, t) {
  if ((e = e || LP_derive_doc()) && t) {
    var r = gettldcached(get_doc_location_href(e)),
      n = [],
      a = [],
      i = 0,
      o,
      l = ["lpcurrpasselt", "lpcurruserelt"];
    if (!lp_in_array(t.id, l)) {
      if (has_same_tld(r, "citi.com", LPVARS.g_passedequivdomains)) {
        if (e.getElementById("loginForm") || e.getElementById("logon") || e.getElementById("password") || e.getElementById("PASSWORD")) {
          for (i = (a = e.getElementsByTagName("input")).length, o = 0; o < MAX_INPUTS_SOFT && o < i; o++)
            !a[o] || "password" != a[o].type || lp_in_array(a[o].id, l) || n.push(a[o]);
          if (
            5 == n.length &&
            "a" == n[0].defaultValue &&
            "b" == n[1].defaultValue &&
            "c" == n[2].defaultValue &&
            "d" == n[3].defaultValue &&
            lp_in_array(t, [n[0], n[1], n[2], n[3]])
          )
            return !0;
        }
      } else if (compare_equiv_domains(r, "ebay.com")) {
        var e = e.getElementsByName("runId2");
        if (1 === e.length && ("userid" == t.id || "userid" == t.name || "pass" == t.id || "pass" == t.name || "runId2" == t.name))
          return !0;
      }
      if (compare_equiv_domains(r, "nordnet.no") && "fake_password" == t.name) return !0;
      a = n = null;
    }
  }
  return !1;
}
function LP_page_is_lazyloader(e, t) {
  if (!(e = e || LP_derive_doc())) return !1;
  var r = !1,
    n = formcacheget(e, "fakedoc", "is-lazyloader");
  if (null != n) return n;
  if (LP_hasAngular(e) || LP_hasKnockout(e) || LP_has_emberjs(e)) return formcacheset(e, "fakedoc", "is-lazyloader", !0), !0;
  if (e.body) {
    var n = e.body.getAttribute("onload");
    if ("string" == typeof n && 0 <= n.toLowerCase().indexOf("lazyload")) return !0;
  }
  var a = "",
    i = "",
    o = "",
    l = new RegExp("requirejs|lazyload|LAB\\.?js|LAB\\.min\\.js", "i"),
    s = new RegExp("dojo");
  if (!l || !s) return !1;
  for (var c = e.getElementsByTagName("script"), d = 0; d < c.length; d++)
    if ((a = c[d].getAttribute("src"))) {
      var _ = c[d].id,
        f;
      if (l.exec(a) || l.exec(_)) {
        r = !0;
        break;
      }
      if ("module" == (i = c[d].getAttribute("type"))) {
        r = !0;
        break;
      }
      if (s.exec(a) && "async: true" == (o = c[d].getAttribute("data-dojo-config"))) {
        r = !0;
        break;
      }
      if ("microloader" == _)
        if (c[d].getAttribute("data-app")) {
          r = !0;
          break;
        }
      var _ = c[d].getAttribute("data-requirecontext"),
        u = c[d].getAttribute("data-requiremodule");
      if (_ && u) {
        r = !0;
        break;
      }
    } else {
      var _ = c[d].innerHTML;
      if (_ && _.length < 512 && 0 < _.indexOf("function SRSRetry")) return !0;
    }
  if (!r)
    for (var p = e.getElementsByTagName("meta"), m = "", d = 0; d < p.length; d++)
      if ("string" == typeof (m = p[d].name) && m.match(/config\/environment$/)) {
        r = !0;
        break;
      }
  return formcacheset(e, "fakedoc", "is-lazyloader", r), r;
}
function LP_isSinglePageApp(e) {
  var t, r;
  return (
    !!(e = e || LP_derive_doc()) &&
    ((t = !1),
    null != (r = formcacheget(e, "fakedoc", "SPA"))
      ? r
      : (LP_hasAngular(e) ||
          LP_hasKnockout(e) ||
          LP_has_emberjs(e) ||
          0 < g_probablySinglePageApp ||
          !!LP_url_is_single_page_app(get_doc_location_href(e))) &&
        (formcacheset(e, "fakedoc", "SPA", !0), !0))
  );
}
var g_probablySinglePageApp = 0;
function LP_has_jquery(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = !1,
    r = formcacheget(e, "fakedoc", "has-jquery");
  if (null != r) return r;
  for (var n = "", a = new RegExp("jquery", "i"), i = e.getElementsByTagName("script"), o = 0; o < i.length; o++)
    if (((n = i[o].getAttribute("src")), a.exec(n))) {
      t = !0;
      break;
    }
  return formcacheset(e, "fakedoc", "has-jquery", t), t;
}
function LP_init_url_history(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  if ("undefined" == typeof LPUH || null === LPUH || null === LPUH.url_history) {
    if (null === (LPUH = {})) return !1;
    LPUH.url_history = [];
  }
  return !0;
}
function LP_get_last_url_history(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  if ((LP_init_url_history(e), LPUH)) {
    var e = LPUH.url_history.length;
    if (0 < e) return LPUH.url_history[e - 1];
  }
  return {};
}
function LP_reset_url_history(e) {
  return LP_init_url_history(e), !!LPUH && ((LPUH.url_history = []), !0);
}
function LP_put_last_url_history(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  LP_init_url_history(e);
  var e = get_doc_location_href(e),
    t = crc32(LP_gettime() + "%" + e);
  return LPUH.url_history.push({ href: e, href_hash: t }), verbose_log("computed new hash " + t + " for " + e), !0;
}
function LP_is_buttonlike(e, t) {
  return !(
    !(e = e || LP_derive_doc()) ||
    !t ||
    ("BUTTON" != t.tagName && ("INPUT" != t.tagName || ("submit" != t.type && "image" != t.type && "button" != t.type)))
  );
}
var BEEPID = "_lpbeep";
function LP_putBeeper(e, t, r) {
  if (!(e = e || LP_derive_doc())) return !1;
  if (!e.getElementById(BEEPID)) {
    if (!r && !e.body) return !1;
    var n = e.createElement("div");
    n.setAttribute("aria-hidden", "true"),
      (n.style.display = "none"),
      (n.style.left = "-1000px"),
      (n.style.height = "0"),
      n.setAttribute("data-lpbeep", t),
      (n.id = BEEPID),
      (r || e.body).appendChild(n);
  }
  return !0;
}
function LP_pickBeeper(e) {
  var e;
  return !!(e = e || LP_derive_doc()) && ((e = e.getElementById(BEEPID)) && e.parentNode.removeChild(e), !0);
}
function LP_readBeeper(e) {
  var e, t;
  return (e = (e = e || LP_derive_doc()) && e.getElementById(BEEPID))
    ? { display: (t = getComputedStyle(e)).display, visibility: t.visibility, val: e.getAttribute("data-lpbeep") }
    : null;
}
function should_fill_on_click(e, t) {
  var r, n, a, i, o, e, a;
  return !(
    !(e = e || LP_derive_doc()) ||
    !t ||
    ((r = !1),
    (n = t.tagName.toUpperCase()),
    (a = t.form),
    (i = !1),
    (o = t.getAttribute("role")),
    (i =
      LP_is_buttonlike(e, t) &&
      a &&
      ((e = a.action), (a = a.method), e) &&
      0 == e.toLowerCase().indexOf("https://") &&
      a &&
      "POST" == a.toUpperCase()
        ? (r = !0)
        : i) ||
      (("A" == n || "NAV" == n || "navigation" == o || ("INPUT" == n && "submit" == t.type)) && (i = !(r = !1))),
    i ||
      (lp_in_array(n, [
        "INPUT",
        "LABEL",
        "SELECT",
        "FIELDSET",
        "OPTION",
        "TEXTAREA",
        "TBODY",
        "THEAD",
        "ADDRESS",
        "BLOCKQUOTE",
        "Q",
        "PRE",
        "ABBR",
        "CITE",
        "BODY",
        "HEAD",
        "META",
        "SCRIPT",
        "STYLE",
        "MAIN",
        "ARTICLE",
        "HEADER",
        "FOOTER",
        "ASIDE",
        "DETAILS",
        "FIGURE",
        "FIGCAPTION",
        "MARK",
        "SECTION",
        "SUMMARY",
        "TIME",
        "IFRAME",
        "FRAME",
        "FRAMESET"
      ]) &&
        (i = r = !0)),
    r)
  );
}
function should_simulate_submit_on_click(e, t) {
  return (e = e || LP_derive_doc()), !1;
}
function LP_url_is_single_page_app(e) {
  var t;
  return !(!e || "string" != typeof e || !new RegExp("https?://.*#\\/[a-z]", "i").exec(e));
}
function LP_has_bootstrapJS(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = !1,
    r = formcacheget(e, "fakedoc", "has-bootstrap");
  if (null != r) return r;
  for (var n = "", a = new RegExp("bootstrap.min.js$", "i"), i = e.getElementsByTagName("script"), o = 0; o < i.length; o++)
    if (((n = i[o].getAttribute("src")), a.exec(n))) {
      t = !0;
      break;
    }
  return formcacheset(e, "fakedoc", "has-bootstrap", t), t;
}
function LP_has_joomla(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = !1,
    r = formcacheget(e, "fakedoc", "has-joomla");
  if (null != r) return r;
  for (var n = "", a = new RegExp("(/media/jui/js|/templates/joomla)", "i"), i = e.getElementsByTagName("script"), o = 0; o < i.length; o++)
    if (((n = i[o].getAttribute("src")), a.exec(n))) {
      t = !0;
      break;
    }
  return formcacheset(e, "fakedoc", "has-joomla", t), t;
}
function LP_has_emberjs(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  var t = !1,
    r = formcacheget(e, "fakedoc", "has-emberjs");
  if (null != r) return r;
  var r = e.body;
  if (
    !(t =
      !(t = r && (0 <= r.className.indexOf("ember-application") || "1" == r.getAttribute("data-ember-extension")) ? !0 : t) &&
      e.documentElement &&
      "1" == e.documentElement.getAttribute("data-ember-extension")
        ? !0
        : t)
  )
    for (var n = e.getElementsByTagName("meta"), a = "", i = 0; i < n.length; i++)
      if ("string" == typeof (a = n[i].name) && a.match(/config\/environment$/)) {
        t = !0;
        break;
      }
  return formcacheset(e, "fakedoc", "has-emberjs", t), t;
}
var SPA_INDETERMINATE = 0,
  SPA_LOADED = 1,
  SPA_LOGIN = 2,
  SPA_LOGINFAILED = 4,
  SPA_ACCTMGMT = 8,
  SPA_REGISTER = 16,
  SPA_APP = 32,
  SPA_INDETERMINATE_STATE = "A",
  SPA_LOGIN_STATE = "B",
  SPA_IN_APP_STATE = "C",
  SPA_LOGIN_WITHIN_APP_STATE = "D";
