function write_to_history(e, r, o, _) {
  if (!(e = e || LP_derive_doc())) return !1;
  if (!o) return console_log("empty history message"), !1;
  var i;
  if (is_user_debug_enabled()) {
    null == r && (r = "");
    var t = {
      cmd: "debug_checkpoint",
      docstate: get_docstate(e),
      url: punycode.URLToASCII(get_doc_location_href(e)),
      msg: LPJSON.stringify(o)
    };
    if (((t.history_cmd = r), _)) for (i in _) _.hasOwnProperty(i) && (t[i] = _[i]);
    sendBG(t), verbose_log("DEBUG:[" + r + "] " + o);
  }
  return !0;
}
function write_error_to_history(e, r, o) {
  var o;
  return (
    !!(e = e || LP_derive_doc()) &&
    (r && o && "object" == typeof o
      ? ((o = lp_deepCopy(o)), is_user_debug_enabled() && write_to_history(e, "errtrapCS", r, o), !0)
      : (console_log("bad Error object"), !1))
  );
}
function decision_log(e, r, o) {
  var _;
  return !!(e = e || LP_derive_doc()) && ((_ = "decision"), !is_user_debug_enabled() || write_to_history(e, _, r, o));
}
function is_user_debug_enabled() {
  return g_isdebug && !g_isie && !g_isfirefox;
}
function info_log(e, r, o) {
  var _;
  return !!(e = e || LP_derive_doc()) && ((_ = "info "), !is_user_debug_enabled() || write_to_history(e, _, r, o));
}
