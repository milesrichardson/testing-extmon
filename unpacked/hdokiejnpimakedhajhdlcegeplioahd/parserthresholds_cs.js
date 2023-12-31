var MAX_INPUTS_HARD = 200,
  MAX_INPUTS_SOFT = 100;
function LP_exceedInputsThreshold(e) {
  if (!e) return !0;
  var r = MAX_INPUTS_HARD,
    t = MAX_INPUTS_SOFT,
    o = e.getElementsByTagName("input"),
    n = o.length;
  if (r < n) return verbose_log("EIT: hard threshold exceed"), !0;
  if (n < t) return !1;
  for (var s = 0, a, a = 0, f; a < n; a++) {
    o[a] && (("text" != (f = o[a].type) && "passwd" != f) || s++);
  }
  return t < s && (verbose_log("EIT: soft threshold exceed"), !0);
}
var MAX_FORMS_HARD = 20,
  MAX_FORMS_SOFT = 10;
function LP_getFormsThreshold(e) {
  if (!e) return 0;
  var r = MAX_FORMS_HARD,
    t = MAX_FORMS_SOFT,
    o = formcacheget(e, "fakedoc", "max-forms-threshold");
  if (null != o) return o;
  var n = e.getElementsByTagName("form"),
    s = n.length;
  if ((Checkpoint.assert(s < r, "page has too many forms"), r < s)) c(n[0]) && c(n[1]) && c(n[r - 1]) && (r *= 2);
  else if (s < t) return formcacheset(e, "fakedoc", "max-forms-threshold", t), t;
  for (var a = 0, f = new RegExp(lpgs("ff_loginform_regexp"), "i"), l, l = 0; l < s && l < r; l++)
    if (n[l]) {
      if ((i(e, n[l]) && a++, t < l && i(e, n[l]))) {
        var h,
          _,
          h = null,
          _ = null,
          d = n[l].name,
          m = n[l].id;
        if (f.exec(d) || f.exec(m) || (h && _)) return formcacheset(e, "fakedoc", "max-forms-threshold", r), r;
      }
      if (r < l) break;
    }
  return t < a
    ? (formcacheset(e, "fakedoc", "max-forms-threshold", t + 2), t + 2)
    : (formcacheset(e, "fakedoc", "max-forms-threshold", t), t);
  function i(e, r) {
    return !(!e || !r || r.disabled);
  }
  function c(e) {
    if (e && void 0 !== e.elements && !(5 <= e.elements.length)) {
      for (var r = 0; r < e.elements.length && r < 5; r++) if ("hidden" != e.elements[r].type) return;
      return 1;
    }
  }
}
var MAX_FORM_ELEMENTS_HARD = 500,
  MAX_FORM_ELEMENTS_SOFT = 100;
function LP_exceedFormElementsThreshold(e, r) {
  if (!e || !r) return !0;
  var t,
    e = MAX_FORM_ELEMENTS_SOFT,
    o = r.elements,
    n = o.length;
  if (MAX_FORM_ELEMENTS_HARD < n) return verbose_log("EFET: hard threshold exceed"), !0;
  if (n < e) return !1;
  for (var s = 0, a, a = 0, f; a < n; a++) {
    !o[a] ||
      !o[a] ||
      o[a].disabled ||
      "FIELDSET" == o[a].tagName ||
      "input" != o[a].tagName ||
      ("text" != (f = o[a].type) && "passwd" != f) ||
      s++;
  }
  return e < s && (verbose_log("EFET: soft threshold exceed"), !0);
}
