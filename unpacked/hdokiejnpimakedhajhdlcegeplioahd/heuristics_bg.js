function get_SAED_username_password_fields(e, n) {
  var s;
  if (!e) return [];
  n = n || {};
  var n = [],
    a = getBG(),
    l = null,
    r = null,
    t = !1;
  if (!e.save_all || !e.fields || 0 === e.fields.length) return [getusernamefromacct(e), getpasswordfromacct(e)];
  for (
    var f = 0,
      i = 1,
      d = 2,
      E = 3,
      _ = 4,
      D = 5,
      H = 6,
      L = 7,
      k = 8,
      b = 9,
      p = 10,
      o = 11,
      X = 0,
      G = 1,
      R = [
        [50, 50],
        [-50, -50],
        [-5, 25],
        [5, -25],
        [10, -10],
        [-5, 10],
        [5, -10],
        [-30, -30],
        [7, 7],
        [1, -10],
        [-20, -20],
        [-20, -20]
      ],
      m = null,
      u = null,
      O = new RegExp(get_ff_translation("ff_username_regexp")),
      S = new RegExp(get_ff_translation("ff_password_regexp")),
      C = new RegExp(get_ff_translation("ff_email_regexp")),
      g = new RegExp(get_ff_translation("ff_captcha_regexp")),
      c = new RegExp(get_ff_translation("ff_combineddummy_regexp")),
      P = new RegExp(get_ff_translation("ff_search_regexp")),
      U = [],
      v,
      x = e.fields.length,
      v = 0;
    v < x;
    v++
  )
    U[v] = { USCORE: 0, PSCORE: 0 };
  for (v = 0; v < x; v++) {
    var T = e.fields[v].type,
      w = e.fields[v].value,
      h = e.fields[v].name;
    (null !== w && "" !== w) ||
      (Y(sprintf("[%d] %s VALUE:EMPTY", v, e.fields[v].name)), (U[v].USCORE += R[1][0]), (U[v].PSCORE += R[1][1])),
      O.exec(h) && (Y(sprintf("[%d] %s NAME:USERNAME", v, e.fields[v].name)), (U[v].USCORE += R[4][0]), (U[v].PSCORE += R[4][1])),
      S.exec(h) && (Y(sprintf("[%d] %s NAME:PASSWORD", v, e.fields[v].name)), (U[v].USCORE += R[5][0]), (U[v].PSCORE += R[5][1])),
      C.exec(h) && (Y(sprintf("[%d] %s NAME:EMAIL", v, e.fields[v].name)), (U[v].USCORE += R[6][0]), (U[v].PSCORE += R[6][1])),
      (g.exec(h) || c.exec(h) || P.exec(h)) &&
        (Y(sprintf("[%d] %s NAME:IGNORE", v, e.fields[v].name)), (U[v].USCORE += R[7][0]), (U[v].PSCORE += R[7][1])),
      "password" == T
        ? (Y(sprintf("[%d] %s TYPE:PW_TYPE", v, e.fields[v].name)),
          null === r && ((U[v].PSCORE += R[8][1]), (r = v)),
          (U[v].USCORE += R[2][0]),
          (U[v].PSCORE += R[2][1]))
        : lp_in_array(T, ["text", "tel", "email", "url"])
        ? (Y(sprintf("[%d] %s TYPE:TEXT_TYPE", v, e.fields[v].name)),
          null === l && ((U[v].USCORE += R[8][0]), (l = v)),
          (U[v].USCORE += R[3][0]),
          (U[v].PSCORE += R[3][1]))
        : lp_in_array(T, ["number"])
        ? (Y(sprintf("[%d] %s TYPE:HTML5TEXTISH", v, e.fields[v].name)), (U[v].USCORE += R[9][0]), (U[v].PSCORE += R[9][1]))
        : lp_in_array(T, ["date", "month", "color", "datetime", "search", "range", "time", "datetime-local", "week"])
        ? (Y(sprintf("[%d] %s TYPE:HTML5NONTEXTISH", v, e.fields[v].name)), (U[v].USCORE += R[p][0]), (U[v].PSCORE += R[p][1]))
        : lp_in_array(T, ["reset", "button", "image", "file", "submit"]) &&
          (Y(sprintf("[%d] %s TYPE:HTML4NONTEXTISH", v, e.fields[v].name)), (U[v].USCORE += R[o][0]), (U[v].PSCORE += R[o][1])),
      "j_username" === h ? (m = v) : "j_password" === h && "password" == T && (u = v);
  }
  null !== m && null !== u && ((U[m].USCORE += R[0][0]), (U[u].PSCORE += R[0][1]));
  var A = 0,
    y = -1 / 0,
    I = 0,
    M = -1 / 0;
  for (v = 0; v < x; v++)
    Y(sprintf("FIELD %d name=%s U=%d/P=%d", v, e.fields[v].name, U[v].USCORE, U[v].PSCORE)),
      U[v].USCORE > y && ((y = U[v].USCORE), (A = v)),
      U[v].PSCORE > M && ((M = U[v].PSCORE), (I = v));
  A === I && 1 < x && Y("EDGE CASE TODO");
  var n = [],
    N = "",
    N;
  return (
    null === (N = is_encrypted_field(e.fields[A].type) ? a.lpmdec_acct(e.fields[A].value, !0, e, a.g_shares) : e.fields[A].value) &&
      (N = ""),
    Y(sprintf("username: guessed %s/%s", e.fields[A].name, N)),
    n.push(N),
    null === (N = is_encrypted_field(e.fields[I].type) ? a.lpmdec_acct(e.fields[I].value, !0, e, a.g_shares) : e.fields[I].value) &&
      (N = ""),
    Y(sprintf("password: guessed %s/%s", e.fields[I].name, g_show_pw_in_logs ? N : "<REDACTED>")),
    n.push(N),
    n
  );
  function Y(e) {}
}
function value_is_masked(e, n) {
  var s;
  return (
    !(!e || "string" != typeof e) && ((s = encodeURIComponent(e)), 0 <= e.indexOf("***") || 0 <= s.indexOf("%E2%80%A2%E2%80%A2%E2%80%A2"))
  );
}
function formdata_has_masked_values(e) {
  if (e)
    for (var n = void 0 !== e ? e.split("\n") : new Array(), s = 0; s < n.length; s++) {
      var a,
        l = n[s].split("\t");
      if (4 == l.length || 5 == l.length) {
        var r = decodeURIComponent(l[1]),
          t = decodeURIComponent(l[2]),
          l = decodeURIComponent(l[4]);
        if (value_is_masked(t) && "notseen" != l) return console_warn("detected masked field value: " + t), !0;
      }
    }
  return !1;
}
