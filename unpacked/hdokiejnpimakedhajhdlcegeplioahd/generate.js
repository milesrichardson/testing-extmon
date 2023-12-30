function oninitgenerate() {}
function onshowgenerate() {}
function onhidegenerate() {}
function fix_length(e, t) {
  var n, n;
  "string" == typeof (g_generate_url = "undefined" != typeof g_isie && g_isie ? ie_gettopurl() : g_generate_url) && "" != g_generate_url
    ? (n =
        "undefined" != typeof g_isie && g_isie
          ? get_sitepwlen(lp_gettld_url(g_generate_url))
          : getBG().get_sitepwlen(lp_gettld_url(g_generate_url))) > e.getElementById("length").value &&
      ((e.getElementById("length").value = n), t || dogenerate())
    : "undefined" != typeof g_sitepwlen_override &&
      (g_sitepwlen_override > e.getElementById("length").value && (e.getElementById("length").value = g_sitepwlen_override),
      t || dogenerate());
}
function dogenerate() {
  fix_length(document, !0);
  var e = document.getElementById("length").value,
    t = (100 < e && (e = document.getElementById("length").value = 100), document.getElementById("upper").checked),
    n = document.getElementById("lower").checked,
    o = document.getElementById("digits").checked,
    d = document.getElementById("special").checked,
    r = document.getElementById("mindigits").value,
    g = document.getElementById("ambig").checked,
    c = document.getElementById("reqevery").checked,
    l = document.getElementById("pronounceable").checked,
    e =
      ((document.getElementById("password").style.fontFamily = "Monaco,Consolas,Courier"),
      (document.getElementById("password").value = lpCreatePass(e, t, n, o, d, r, g, c, l)),
      getBG().g_genpws.unshift(document.getElementById("password").value),
      20 < getBG().g_genpws.length && getBG().g_genpws.splice(20, getBG().g_genpws.length - 20),
      repopulate_combo("password", getBG().g_genpws),
      document.getElementById("page_passwordmeterback") && update_password_meter("", document.getElementById("password").value),
      LP_decimate_children(document.getElementById("copypwbutton")),
      document.createElement("i"));
  set_innertext(e, gs("Copy Password")),
    document.getElementById("copypwbutton").appendChild(e),
    (document.getElementById("copypwbutton").style.color = "#d32d27"),
    getBG().can_copy_to_clipboard() || (document.getElementById("copypwbutton").style.display = "none");
}
function docopypw() {
  var e = getBG(),
    t = document.getElementById("password").value;
  set_innertext(document.getElementById("copypwbutton"), "✓ " + gs("Password Copied")),
    (document.getElementById("copypwbutton").style.color = "#000000"),
    document.getElementById("password").select(),
    (g_generate_found = "undefined" == typeof g_generate_found ? !1 : g_generate_found) ||
      (e && e.sendLpImprove && e.sendLpImprove("genpassword", { action: "copypassword" }, !0),
      "function" == typeof e.copytoclipboard ? e.copytoclipboard(t) : Clipboard.copy(t));
}
function dosave(e) {
  var t = getBG(),
    n = document.getElementById("password").value,
    o = {
      pronounceable: "on" === document.getElementById("pronounceable").checked,
      length: document.getElementById("length").checked,
      uppercase: "on" === document.getElementById("upper").checked,
      lowercase: "on" === document.getElementById("lower").checked,
      numeric: "on" === document.getElementById("digits").checked,
      special: "on" === document.getElementById("special").checked,
      avoidAmbiguous: "on" === document.getElementById("ambig").checked,
      source: "form"
    };
  (g_generate_found = "undefined" == typeof g_generate_found ? !1 : g_generate_found) ||
    ("function" == typeof t.copytoclipboard ? t.copytoclipboard(n) : Clipboard.copy(n)),
    "" == g_generate_url && (g_generate_url = t.getcurrenturl()),
    t.savePassword(n, g_generate_url, g_tabid, !g_generate_found, o),
    e
      ? setTimeout(function () {
          getBG().closePop();
        }, 0)
      : "undefined" != typeof g_ismenu && g_ismenu
      ? setTimeout(function () {
          window.close();
        }, 0)
      : setTimeout(function () {
          getBG().closecurrenttab("");
        }, 0);
}
function ensureuppersinpw(e) {
  for (var t = GPW.pronounceable(e), n = 0; n < e && t[n]; ) {
    var o,
      d,
      r,
      t = t.substr(0, n) + (get_random(0, 1) ? t[n].toUpperCase() : t[n]) + t.substr(n + 1);
    n++;
  }
  return t;
}
function lpCreatePass(e, t, n, o, d, r, g, c, l, a) {
  void 0 === e && (e = 8 + get_random(0, 1)),
    void 0 === o && (o = !0),
    void 0 === r && (r = 0),
    void 0 === g && (g = !1),
    void 0 === c && (c = !0);
  var u = 0,
    s = 0,
    i = 0;
  if (((t = void 0 === t ? !0 : t) && (s = 1), (n = void 0 === n ? !0 : n) && (u = 1), (d = void 0 === d ? !1 : d) && (i = 1), l)) {
    for (var p = ""; p.length < e; ) p = t ? ensureuppersinpw(e) : GPW.pronounceable(e);
    return 0 === u ? p.toUpperCase() : p;
  }
  var m = new Array();
  if (n && 0 < u) for (var y = 0; y < u; y++) m[m.length] = "L";
  if (t && 0 < s) for (var y = 0; y < s; y++) m[m.length] = "U";
  if (o && 0 < r) for (var y = 0; y < r; y++) m[m.length] = "D";
  if (d && 0 < i) for (var y = 0; y < i; y++) m[m.length] = "S";
  for (; m.length < e; ) m[m.length] = "A";
  m.sort(function () {
    return 2 * get_random(0, 1) - 1;
  });
  for (
    var _ = "",
      f = "abcdefghjkmnpqrstuvwxyz",
      v = (g || (f += "ilo"), n && (_ += f), "ABCDEFGHJKMNPQRSTUVWXYZ"),
      B = (g || (v += "ILO"), t && (_ += v), "23456789"),
      h = (g || (B += "10"), o && (_ += B), "!@#$%^&*"),
      w = (d && (_ += h), ""),
      I = 0,
      E;
    I < e;
    I++
  ) {
    switch (m[I]) {
      case "L":
        E = f;
        break;
      case "U":
        E = v;
        break;
      case "D":
        E = B;
        break;
      case "S":
        E = h;
        break;
      case "A":
        E = _;
    }
    var y = get_random(0, E.length - 1);
    w += E.charAt(y);
  }
  return w;
}
function showhideadv() {
  var e = document.getElementById("advancedoptions");
  e.style.display = "none" == e.style.display ? "block" : "none";
}
function resize_generate() {}
