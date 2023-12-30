function LP_element_is_MaskedField(e) {
  if (!e) return !1;
  var t = "",
    n = "",
    t,
    a;
  try {
    (t = e.ownerDocument.location.href), (n = gettldcached(t));
  } catch (e) {
    return !1;
  }
  return (
    !!LP_has_textlike_type(e) &&
    ((t = e.getAttribute("onblur")),
    (a = e.getAttribute("onfocus")),
    !!(
      (t && "string" == typeof t && 0 <= t.toLowerCase().indexOf("mask")) ||
      (a && "string" == typeof a && 0 <= a.toLowerCase().indexOf("unmask"))
    ) ||
      !(
        void 0 === e.hasAttribute || !(("fidelity.com" == n && !0 === e.hasAttribute("data-unmasked")) || e.hasAttribute("data-masklength"))
      ) ||
      !(
        ("citi.com" != n && "citibank.com" != n) ||
        (!name_is_MaskedField(LP_getname(e)) && !name_is_MaskedField(LP_getname(e, LP_GETNAME_FAVOR_ID_OVER_NAME)))
      ) ||
      ("stockplanconnect.com" == n && "loginUsername" == e.id && null !== e.ownerDocument.getElementById("unmaskedUsername")) ||
      !(
        "tdbank.com" != n ||
        "txtUser" != e.id ||
        "user" != e.name ||
        !e.form ||
        "details" != e.form.name ||
        1 != e.ownerDocument.getElementsByName("login").length ||
        2 != e.ownerDocument.getElementsByName("user").length
      ))
  );
}
function LP_element_in_MaskedState(e) {
  var t;
  return (
    !!e &&
    !!(
      (t = encodeURIComponent(e.value)) &&
      "string" == typeof t &&
      0 < t.length &&
      "password" != e.type &&
      (0 <= t.indexOf("***") || 0 <= t.indexOf("%E2%80%A2%E2%80%A2%E2%80%A2"))
    )
  );
}
function name_is_MaskedField(e) {
  return !(
    !e ||
    e.length <= 0 ||
    !e.match(/masked/i) ||
    e.match(/unmasked/i) ||
    (g_in_lpframe && "undefined" != typeof score_log && score_log("is masked? " + e + " true"), 0)
  );
}
function name_is_UnmaskedField(e) {
  if (e && !(e.length <= 0)) {
    if (e.match(/unmasked/i)) return g_in_lpframe && "undefined" != typeof score_log && score_log("is unmasked? " + e + " true"), !0;
    var t, t, n;
    g_in_lpframe;
  }
  return !1;
}
function update_preobfuscate_field_value(e) {
  var t, t, n, a;
  return (
    !!e &&
    !!(t = (t = e.ownerDocument) || LP_derive_doc()) &&
    ((n = LP_pickFieldName(t, e)) && null != (a = e.value) && !LP_element_in_MaskedState(e) && fieldcacheset(t, n, "fieldval", a), !0)
  );
}
function should_track_field_onkeyup(e) {
  if (e) {
    var t = e.ownerDocument,
      t;
    if ((t = t || LP_derive_doc())) {
      var n = LP_pickFieldName(t, e);
      if (n) {
        var a = fieldcacheget(t, n, "stfu");
        if (null != a) return a;
      }
      var a = e.id,
        i = e.name,
        e = e.getAttribute("title"),
        r = get_doc_location_href(t),
        _;
      if (
        "fidelity.com" == lp_gettld_url(r) &&
        ("temp_id" == a || "temp_id" == e || "ssnt" == a || "ssn" == i || "userId" == a || "userId-input" == a)
      )
        return n && fieldcacheset(t, n, "stfu", !0), !0;
      n && fieldcacheset(t, n, "stfu", !1);
    }
  }
  return !1;
}
function masked_monitor(e) {
  var e = LP_getEventTarget(e),
    t = e.ownerDocument;
  if (e && t && "string" == typeof e.value)
    if (LP_element_in_MaskedState(e)) {
      var n = e.value,
        a = lp_gettld_url(get_doc_location_href(t)),
        i = e.getAttribute("onblur");
      if ("tdbank.com" == a && n && null !== i && 0 <= i.toLowerCase().indexOf("mask") && LP_element_in_MaskedState(e)) {
        var r = formcacheget(t, LP_pickFieldName(t, e), "unmasked-value");
        null === r && (r = "");
        for (var _ = 0; _ < n.length; _++)
          "%E2%80%A2" == encodeURIComponent(n.charAt(_)) && (n = n.substr(0, _) + r.charAt(_) + n.substr(_ + 1));
      }
      formcacheset(t, LP_pickFieldName(t, e), "unmasked-value", n);
    } else formcacheset(t, LP_pickFieldName(t, e), "unmasked-value", e.value);
}
function LP_element_is_UnmaskedField(e) {
  if (!e) return !1;
  var t = "",
    n = "";
  try {
    (t = e.ownerDocument.location.href), (n = gettldcached(t));
  } catch (e) {
    return !1;
  }
  var t = LP_getname(e),
    e = LP_getname(e, LP_GETNAME_FAVOR_ID_OVER_NAME);
  return !(!name_is_UnmaskedField(t) && !name_is_UnmaskedField(e));
}
function track_masked_fields(e) {
  if (!(e = e || LP_derive_doc())) return !1;
  for (var t = e.getElementsByTagName("input"), n = 0; n < t.length && n < MAX_INPUTS_SOFT; n++)
    lp_in_array(t[n].type, ["text", "url", "email", "tel"]) &&
      (LP_element_is_MaskedField(t[n]) || LP_element_is_UnmaskedField(t[n])) &&
      (LP_addEventHandler(t[n], "input", masked_monitor), LP_addEventHandler(t[n], "focus", masked_monitor), (g_do_masked_humanize = !0));
  return !0;
}
