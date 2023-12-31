var CS_table = [];
function CS_t() {
  var n = null,
    t = null,
    e = null,
    l = null,
    o = null,
    i = null,
    r = null,
    u = null,
    a = null,
    s = null,
    c = null,
    d = null,
    f = null,
    _ = 0,
    m = 0,
    g = 0;
}
function getcsid(n, t) {
  var e;
  return ("function" == typeof lp_sha256 ? lp_sha256 : SHA256)(n + "" + t);
}
function getcsinfo(n, t) {
  var n, t;
  return null === n ||
    null === t ||
    void 0 === n ||
    void 0 === t ||
    null === (n = getcsid((n = "number" == typeof n ? n.toString() : n), t)) ||
    void 0 === (t = CS_table[n])
    ? null
    : t;
}
function setcsinfo(n, t, e) {
  var n;
  return null === n || null === t || !e || void 0 === n || void 0 === t || null === e.docnum || null === e.tabid || null === e.url
    ? null
    : ((n = getcsid((n = "number" == typeof n ? n.toString() : n), t)),
      e.csid && n && n != e.csid && L("warn: csid!=obj.csid"),
      (null !== e.csid && void 0 !== e.csid) || (e.csid = n),
      (e.last_ts = new Date().getTime()),
      ((CS_table = void 0 === CS_table ? [] : CS_table)[n] = e),
      !0);
}
function register_new_cs(n, t, e, l, o, i) {
  if (null === n || null === t || !e || void 0 === n || void 0 === t) return null;
  write_history({ cmd: "register_new_cs", docnum: t, tabid: n, docstate: o }),
    void 0 === o && (o = null),
    void 0 === i && (i = null),
    "number" == typeof n && (n = n.toString());
  var r = 0,
    u = new CS_t(),
    a,
    r;
  return u
    ? ((u.docnum = t),
      (u.tabid = n),
      (u.url = e),
      (u.lastfill_aid = 0),
      l ? (u.parent_docnum = t) : ((u.parent_docnum = g_CS_tops[n]), u.parent_docnum),
      (u.docstate = o),
      (u.flags = null) !== i &&
        "object" == typeof i &&
        (void 0 !== (u.flags = i).domain && ((u.domain = i.domain), delete u.flags.domain), void 0 !== i.origin) &&
        ((u.origin = i.origin), delete u.flags.origin),
      (u.start_ts = new Date().getTime()),
      g_cpwbot && CPWbot_bg && (r = CPWbot_bg.score_frame(n, { url: e, docnum: t })),
      (u.importance = r),
      setcsinfo(n, t, u))
    : null;
}
function delete_cs_for_docnum(n, t) {
  if (null === n || null === t || void 0 === n || void 0 === t) return null;
  "number" == typeof n && (n = n.toString());
  var e = !1,
    l;
  for (l in CS_table) CS_table.hasOwnProperty(l) && l == getcsid(n, t) && ((e = !0), delete CS_table[l]);
  return e;
}
function delete_cs_for_tab(n) {
  if (null == n) return null;
  "number" == typeof n && (n = n.toString());
  var t = !1,
    e,
    l;
  for (e in CS_table) {
    CS_table.hasOwnProperty(e) && (l = CS_table[e]) && l.tabid == n && ((t = !0), delete CS_table[e]);
  }
  return t;
}
function update_cs_docstate(n, t) {
  if (null === n || null === t || void 0 === n || void 0 === t) return null;
  "number" == typeof n && (n = n.toString());
  var e = t.docnum,
    t,
    l,
    o;
  return null == e || null == (t = t.docstate)
    ? null
    : ((l = !1), (o = getcsinfo(n, e)) && ((o.docstate = t), (l = setcsinfo(n, e, o))), l);
}
function update_cs_timestamp(n, t) {
  if (null === n || null === t || void 0 === n || void 0 === t) return null;
  "number" == typeof n && (n = n.toString());
  var t = t.docnum,
    e;
  return null != t && (e = getcsinfo(n, t)) ? setcsinfo(n, t, e) : null;
}
function count_cs_for_tabid(n) {
  if (null == n) return -1;
  "number" == typeof n && (n = n.toString());
  var t = 0,
    e,
    l;
  for (e in CS_table) CS_table.hasOwnProperty(e) && (l = CS_table[e]).tabid === n && t++;
  return t;
}
function dumpinfo_for_tabid(n) {
  var t, e, l;
  if (null != n)
    for (e in ("number" == typeof n && (n = n.toString()), console.log("dumping info for tabid=" + n), CS_table))
      CS_table.hasOwnProperty(e) &&
        ((l = CS_table[e]), (t = new Date().getTime()), l.tabid === n) &&
        console.log(
          "DUMPINFO [tabid:" +
            n +
            "][docnum:" +
            l.docnum +
            "] url=" +
            l.url +
            " last_ts=" +
            (t - l.last_ts) / 1e3 +
            "secs score=" +
            l.importance +
            " killswitch?=" +
            l.killswitch +
            " isTop?=" +
            (l.parent_docnum == l.docnum ? "true" : "false")
        );
}
function find_docnum_for_tabid_by_url(n, t) {
  if (null === n || null === t || void 0 === n || void 0 === t) return null;
  var e, l, o;
  for (e in ("number" == typeof n && (n = n.toString()), CS_table))
    if (CS_table.hasOwnProperty(e) && (o = CS_table[e]).tabid === n && o.url == t) {
      l = o.docnum;
      break;
    }
  return l;
}
function set_killswitch_value(n, t, e) {
  var l;
  return null === n || null === t || void 0 === n || void 0 === t
    ? null
    : !!(l = getcsinfo((n = "number" == typeof n ? n.toString() : n), t)) && ((l.killswitch = e), setcsinfo(n, t, l));
}
function get_killswitch_value(n, t) {
  var n, e;
  return null === n || null === t || void 0 === n || void 0 === t
    ? null
    : ((e = 0), (n = getcsinfo((n = "number" == typeof n ? n.toString() : n), t)) && ((e = parseInt(n.killswitch)), isNaN(e)) ? 0 : e);
}
function skip_CS_by_score(n, t) {
  var e, l;
  return (
    null === n ||
    null === t ||
    ((e = -25), !(l = getcsinfo(n, t))) ||
    (L("skip? [tabid=" + n + "][docnum=" + t + "] score=" + l.importance), l.importance < e)
  );
}
function get_top_url(n, t) {
  var e = "",
    l = 0,
    o,
    l,
    i = getcsinfo_top(n, t);
  if (i && i.parent_docnum == i.docnum) e = i.url;
  else
    for (var r in CS_table)
      if (CS_table.hasOwnProperty(r) && (i = CS_table[r]).tabid === n && i.parent_docnum == i.docnum) {
        e = i.url;
        break;
      }
  return e;
}
function get_top_docnum(n, t) {
  var e = 0,
    l = (i, getcsinfo_top(n, t));
  if (l && l.parent_docnum == l.docnum) e = l.docnum;
  else
    for (var o in CS_table)
      if (CS_table.hasOwnProperty(o) && (l = CS_table[o]).tabid === n && l.parent_docnum == l.docnum) {
        e = l.docnum;
        break;
      }
  return e;
}
function update_cs_docflags(n, t) {
  if (null === n || null === t || void 0 === n || void 0 === t) return null;
  "number" == typeof n && (n = n.toString());
  var e = t.docnum,
    t,
    l,
    o;
  return null == e
    ? null
    : ((t = t.docflags),
      (l = !1),
      (o = getcsinfo(n, e)) &&
        "object" == typeof t &&
        (void 0 !== (o.flags = t).domain && ((o.domain = t.domain), delete o.flags.domain),
        void 0 !== t.origin && ((o.origin = t.origin), delete o.flags.origin),
        (l = setcsinfo(n, e, o))),
      l);
}
function getcsinfo_top(n, t) {
  for (var e = null, l = -1, o, i = getcsinfo(n, t), r = null, u = 0; u < 10 && i; u++) {
    if ((r = getcsinfo(n, i.parent_docnum)) && i.parent_docnum == r.docnum) {
      l = r.docnum;
      break;
    }
    if (null == i.parent_docnum) break;
    i = r;
  }
  return (e = (r = 0 <= l ? getcsinfo(n, l) : r) && !isEmptyObject(r) ? r : e);
}
function update_cs_lastfill_aid(n, t) {
  var e = !0,
    l,
    o;
  return (
    null != n &&
    void 0 !== t &&
    ((l = get_top_docnum((n = "number" == typeof n ? n.toString() : n))),
    (o = getcsinfo(n, l)) && ((o.lastfill_aid = t), (e = setcsinfo(n, l, o))),
    e)
  );
}
function rebuild_cs_table(c) {
  var n = {},
    t;
  function o(n) {
    if (0 != n.url.indexOf("chrome:") && 0 != n.url.indexOf("safari:")) {
      var t = gettabid(n),
        e;
      for (e in g_CS[t]) {
        var l = e,
          o = g_CS[t][e],
          i = gettaburl(n),
          r = n.status,
          u = 0,
          a = !1,
          s;
        e && g_CS_tops[t] == e && (a = !0),
          c
            ? (s = getcsinfo(t, l))
              ? (i != s.url && console.log(sprintf("[%s][%s] url mismatch %s != %s", t, l, i, s.url)),
                a != (s.parent_docnum == s.docnum) &&
                  console.log(sprintf("[%s][%s] isTop mismatch %s != %s ", t, l, i, a, s.parent_docnum == s.docnum)))
              : console.log(sprintf("[%s][%s] seems like this frame exists but no entry found in CS table for it", t, l))
            : register_new_cs(t, l, i, a, r, 0);
      }
    }
  }
  get_all_windows({}, function (n) {
    for (var t, e, t = 0; t < n.length; t++)
      if (g_ischrome)
        chrome.tabs.query({ windowId: n[t].id }, function (n) {
          if (n && 0 < n.length)
            for (var t = 0, e; t < n.length; t++) {
              o(n[t]);
            }
        });
      else {
        var l = get_tabs(n[t]);
        if (l && void 0 !== l.length) for (e = 0; e < l.length; e++) o(l[e]);
      }
  });
}
