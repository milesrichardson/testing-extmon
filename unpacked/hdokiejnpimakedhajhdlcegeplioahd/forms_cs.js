function doc_get_form_equivalents(e) {
  if (!(e = e || LP_derive_doc())) return [];
  if (!e.body) return [];
  var p = sprintf,
    n =
      (g_isie && init_LPfn() && LPfn && (p = LPfn.sprintf),
      new RegExp("container|form|box|wrapper|youama-login-window|youama-register-window", "i")),
    t,
    o,
    r = 100,
    i = !1,
    l = [],
    a = 0,
    _ = e.body.children,
    s = _.length;
  if ((Checkpoint.assert(s < r, "document too complex, " + get_doc_location_href(e)), r < s && (s = r), LP_has_youama(e))) {
    var r = LP_get_youama_fields(e);
    if (r.login_form_container && r.regis_form_container) return [r.login_form_container, r.regis_form_container];
  }
  for (t = 0; t < s; t++) {
    var m = _[t].tagName.toUpperCase();
    if (lp_in_array(m, ["DIV", "FORM", "SECTION", "HEADER"])) {
      if (elt_is_formlike_container(_[t])) {
        var f = h(_[t], n);
        for (a += f.length, o = 0; o < f.length; o++) l.push(f[o]);
      }
    } else "INPUT" == m && (i = !0);
  }
  return i && 0 == l.length && l.push(e.body), verbose_log(p("Found %d form equivalents on this page", a)), l;
  function h(e, n, t) {
    if (!e) return [];
    var o = e.ownerDocument,
      r,
      i,
      l = !0,
      a = ((t = t || 0), []),
      _ = [],
      s = 0,
      m = [],
      f = e.children,
      g = 0;
    if (!f || 0 == f.length) return [];
    for (r = 0; r < f.length; r++)
      if (lp_in_array(f[r].tagName.toUpperCase(), ["DIV", "SECTION", "HEADER"]) && lpIsVisible(f[r], l)) {
        for (var u = h(f[r], n, t + 1), i = 0; i < u.length; i++) _.push(u[i]);
        verbose_log(p("child div %s has %d forms ", LP_getname(f[r]), u.length));
      } else
        "FORM" == f[r].tagName.toUpperCase()
          ? !is_search_form(o, f[r]) && popupfill_shoulddoform(o, f[r]) && _.push(f[r])
          : "INPUT" == f[r].tagName.toUpperCase() &&
            popupfill_shoulddofield(o, f[r]) &&
            (verbose_log(p("child input %s found in %s", LP_getname(f[r]), LP_getname(e))), m.push(f[r]));
    return (
      ("DIV" == e.tagName || "FORM" == e.tagName) && 0 < m.length
        ? popupfill_shoulddoform(o, e)
          ? (a.push(e),
            verbose_log(p("FOUND %d child forms and found inputs in this div %s, treating all together as one", _.length, LP_getname(e))))
          : verbose_log(p("FOUND child forms in this div %s but intentionally skipping it", 0, LP_getname(e)))
        : ((a = _), verbose_log(p("FOUND %d child forms in this div %s", a.length, LP_getname(e)))),
      a
    );
  }
}
function elt_is_formlike_container(e, n) {
  if (!e) return !1;
  var t = e.ownerDocument,
    o,
    r,
    i = !0,
    l,
    l = LP_createXPathFromElement(t, e) || LP_pickFormName(t, e);
  if (!lpIsVisible(e, i)) return !1;
  if (e.children.length <= 0) return !1;
  var a = e.getElementsByTagName("input"),
    _ = [],
    s,
    m,
    f;
  if (a) {
    if (a.length <= 0) return !1;
    var g = a.length;
    for (
      Checkpoint.assert(g < MAX_INPUTS_SOFT, "formlike container " + LP_getname(e) + " is too complex"),
        g > MAX_INPUTS_SOFT && (g = MAX_INPUTS_SOFT),
        o = 0;
      o < g;
      o++
    )
      if (popupfill_shoulddofield(t, a[o])) {
        _.push(a[o]);
        break;
      }
  }
  return !(_.length <= 0) && 0 < _.length && (verbose_log("detected mammaliaforme " + LP_getname(e)), !0);
}
var g_lp_form_num = 1;
function LP_pickFormName(e, n) {
  var t = "none",
    o,
    t,
    o;
  return (
    null == n ||
      !(null == (t = LP_getname(n, LP_GETNAME_FAVOR_ID_OVER_NAME)) || t.length <= 0) ||
      ("FF" !=
        (t =
          (null != n.action && "string" == typeof n.action && 0 <= n.action.length) || (null != n.className && 0 <= n.className.length)
            ? "FF" + (o = "string" != typeof (o = n.action) ? n.getAttribute("action") : o) + n.className
            : "none") &&
        "none" != t) ||
      ((o = n.getAttribute("lpformnum")) || ((o = g_lp_form_num++), n.setAttribute("lpformnum", o)), (t += "lpformnum" + o)),
    t
  );
}
function LP_getFormEquivalent(e, n) {
  return (n && (e = e || n.ownerDocument) && n.form) || null;
}
