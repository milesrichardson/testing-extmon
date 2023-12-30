var data = null,
  existing = null,
  origusername = null,
  origpassword = null,
  g_start_time = null,
  POLL_MAXTIME = 3e5,
  g_pwlen = 0,
  pass = !0;
function onLoad(e) {
  if (e) {
    var t = getBG(),
      a,
      n;
    if (void 0 === (a = t.g_site_data ? t.g_site_data.aid : a)) data = t.g_site_data;
    else {
      data = t.g_site_data;
      var s = !1,
        d = (void 0 !== t.g_site_data.save_all && t.g_site_data.save_all, get_record(a)),
        n;
      for (n in d) data[n] = d[n];
    }
    for (n in ((my_aid = get_record_id(data)), show_cpw_dialog("new"), (data = t.g_site_data), t.g_site_data)) data[n] = t.g_site_data[n];
    t.g_site_data = null;
  } else
    get_data("site", function () {
      onLoad(!0);
    });
}
var CPW_WAKETIME = 97,
  my_aid = null;
function docpwbtn(e) {
  var t = getBG(),
    a = document,
    n,
    s,
    d;
  return (
    a &&
      t &&
      data &&
      (t.sendLpImprove("change_password_now_click"), (n = !1), (s = data.aid), (d = data.url), g_cpwbot) &&
      d &&
      void 0 !== t.dopwchange &&
      ((g_start_time = new Date().getTime()),
      t.cpwbot_preinit(),
      (g_cpw_progress_ctr = 20),
      show_cpw_dialog("progress"),
      setTimeout(function () {
        insert_cpw_placeholder_msg(a, gs("LastPass is loading..."));
      }, 5003),
      setTimeout(function () {
        cpw_status_check();
      }, CPW_WAKETIME),
      g_ischrome
        ? get_selected_tab(null, function (e) {
            t.dopwchange(s, n, e);
          })
        : t.dopwchange(s, n)),
    !1
  );
}
var g_cpw_progress_ctr = 0,
  g_lastmsg = "";
function cpw_status_check() {
  var e = getBG(),
    t = document;
  if (!t || !e || !data) return !1;
  var a = !1,
    n = !1,
    s = !1,
    d = !1,
    l = !1,
    r = !1,
    t = t.getElementById("cpwmsgdiv"),
    i,
    t =
      (t && (g_ischrome ? set_innertext(t, e.cpwbot_get_user_debug_messages()) : e.cpwbot_get_user_debug_messages()),
      g_ischrome ? cpw_progress_update(e.cpwbot_get_dialog_msg()) : e.cpwbot_get_dialog_msg(),
      get_current_state(!0)),
    e;
  switch ((lpdbg("site", "BG.current_state is " + t), t)) {
    case "FAIL":
      n = a = !0;
      break;
    case "CAPTCHA":
      s = n = a = !0;
      break;
    case "DOCAPTCHA":
      d = !0;
      break;
    case "TIMEOUT":
      r = n = a = !0;
      break;
    case "FAIL_PW_SAVED":
      l = n = a = !0;
      break;
    case "DONE":
    case "OK":
      a = !0;
      break;
    case 0:
    case null:
      a = !1;
  }
  d
    ? (g_start_time = new Date().getTime())
    : ((e = new Date().getTime()), g_start_time + POLL_MAXTIME < e && ((n = a = !0), lpdbg("site", "max timeout"))),
    a
      ? show_cpw_dialog(n ? (s ? "captcha" : r ? "timeout" : l ? "fail_pw_saved" : "fail") : "dismiss")
      : setTimeout(function () {
          cpw_status_check();
        }, CPW_WAKETIME);
}
function docpwdebug(e) {
  var t = getBG(),
    a = document;
  if (a && t && data && g_cpwbot) {
    if (document.getElementById("cpwmsgdiv")) return !1;
    var t = a.createElement("div"),
      n =
        ((t.style.height = "200px"),
        (t.style.width = "100%"),
        (t.style.overflow = "auto"),
        (t.style.backgroundColor = "blue"),
        (t.style.color = "yellow"),
        (t.style.padding = "3px"),
        (t.id = "cpwmsgdiv"),
        a.getElementById("sitebody"));
    (n || a.body).appendChild(t);
  }
  return !1;
}
function show_cpw_button(e) {
  var t = getBG(),
    a;
  if (!document || !t || !e) return !1;
  var n = !1;
  !g_cpwbot && void 0 !== t.g_cpwbot && t.g_cpwbot && (g_cpwbot = t.g_cpwbot);
}
function hide_cpw_dialog() {
  var e = getBG(),
    t = document;
  if (!t || !e || !data) return !1;
  var a = t.getElementById("cpwdialog"),
    a = (a && (a.style.display = "none"), t.getElementById("modalbg")),
    t;
  a && (a.style.display = "none"),
    void 0 !== e.cpwbot_halt &&
      "FAIL" != (t = get_current_state()) &&
      "CAPTCHA" != t &&
      "DONE" != t &&
      "OK" != t &&
      "TIMEOUT" != t &&
      0 != t &&
      null !== t &&
      e.cpwbot_halt(),
    data && data.openchpw && e.close_cpw_tabs(),
    this.close();
}
var event_flags = 0,
  EV_CX = 1,
  EV_OK = 2,
  g_cpw_heard_from_bg = !1;
function append_text_with_b(e, t) {
  var a = t.indexOf("<b>"),
    n = t.indexOf("</b>"),
    s = (e.appendChild(e.ownerDocument.createTextNode(t.substring(0, a))), e.ownerDocument.createElement("b"));
  set_innertext(s, t.substring(a + 3, n)), e.appendChild(s), e.appendChild(e.ownerDocument.createTextNode(t.substring(n + 4)));
}
function show_cpw_dialog(e, t, a, n, s) {
  var d = getBG(),
    l = document;
  if (!l || !d || !data) return !1;
  var d = l.getElementById("modalbg"),
    d =
      ((d.style.width = l.body.clientWidth),
      (d.style.height = l.body.clientHeight),
      (d.style.display = "block"),
      l.getElementById("dlghdg")),
    r = l.getElementById("dlghtml"),
    i = ((r.style.fontSize = "12px"), l.getElementById("bcnd")),
    o = l.getElementById("bokd"),
    p = l.getElementById("bdis"),
    c = null,
    _,
    g,
    _,
    g,
    m,
    _,
    g,
    m,
    m,
    m;
  switch (
    (i &&
      0 == (event_flags & EV_CX) &&
      (i.addEventListener("click", function (e) {
        hide_cpw_dialog();
      }),
      l.getElementById("dlgclose").addEventListener("click", function (e) {
        hide_cpw_dialog();
      }),
      p.addEventListener("click", function (e) {
        hide_cpw_dialog();
      }),
      (event_flags |= EV_CX)),
    o &&
      0 == (event_flags & EV_OK) &&
      (o.addEventListener("click", function (e) {
        return docpwbtn(e), !1;
      }),
      (event_flags |= EV_OK)),
    set_innertext(i, gs("No, Thanks")),
    set_innertext(o, gs("Change Password Now")),
    set_innertext(p, gs("Dismiss")),
    set_innertext(d, sprintf(gs("%s Password One-Click Change"), "LastPass")),
    e)
  ) {
    case "new":
      (g_cpw_heard_from_bg = !1), LP_decimate_children(r);
      var m = l.createElement("p");
      set_innertext(
        m,
        sprintf(
          gs(
            "%s will now attempt to change your password to a strong, generated password that will be saved in your vault and known only to you."
          ),
          "LastPass"
        )
      ),
        r.appendChild(m),
        r.appendChild(l.createElement("br")),
        append_text_with_b(
          (m = l.createElement("p")),
          sprintf(
            gs(
              "In order to complete the process, %s will have to log in to %s and navigate through a number of windows quickly. It is normal to see windows flashing and changing quickly, and may take several moments. We'll let you know when you're all set!"
            ),
            "LastPass",
            "<b>" + of(data.name) + "</b>"
          )
        ),
        r.appendChild(m),
        (i.style.display = "block"),
        (o.style.display = "block"),
        (p.style.display = "none");
      break;
    case "progress":
      LP_decimate_children(r);
      var w = l.createElement("b"),
        w = (set_innertext(w, gs("Overall Progress:")), r.appendChild(w), r.appendChild(l.createElement("br")), l.createElement("div")),
        h = ((w.className = "progress_container"), l.createElement("div"));
      (h.className = "progress_bar"),
        (h.id = "progress_bar"),
        w.appendChild(h),
        r.appendChild(w),
        ((w = l.createElement("div")).id = "stepbystep"),
        r.appendChild(w),
        ((w = l.createElement("div")).id = "advanced"),
        r.appendChild(w),
        (l.getElementById("progress_bar").style.width = "10%"),
        (i.style.display = "none"),
        (o.style.display = "none"),
        (p.style.display = "none");
      break;
    case "update":
      (l.getElementById("progress_bar").style.width = t + "%"),
        a &&
          ((_ = l.createElement("p")),
          "DOCAPTCHA" == get_current_state() && (_.className = "boldred"),
          (g = l.createTextNode(a)),
          _.appendChild(g),
          l.getElementById("stepbystep").appendChild(_),
          !g_cpw_heard_from_bg) &&
          ((g_cpw_heard_from_bg = !0), (c = l.getElementById("cpw_placeholder_msg"))) &&
          c.parentNode.removeChild(c),
        n &&
          ((_ = l.createElement("i")),
          (g = l.createTextNode(gs("Complete!"))),
          _.appendChild(g),
          (m = l.getElementById("stepbystep").lastChild)) &&
          m.appendChild(_),
        s && ((_ = l.createElement("p")), (g = l.createTextNode(s)), _.appendChild(g), l.getElementById("advanced").appendChild(_));
      break;
    case "dismiss":
      LP_decimate_children(r),
        r.appendChild(l.createElement("br")),
        r.appendChild(l.createElement("br")),
        append_text_with_b(
          (m = l.createElement("p")),
          sprintf(
            gs(
              "Congratulations! Your password for %s was updated, and is now saved in your LastPass vault. Your change will sync on every device."
            ),
            "<b>" + of(data.name) + "</b>"
          )
        ),
        r.appendChild(m),
        (i.style.display = "none"),
        (o.style.display = "none"),
        (p.style.display = "block"),
        set_innertext(p, gs("OK"));
      break;
    case "fail":
      LP_decimate_children(r),
        r.appendChild(l.createElement("br")),
        r.appendChild(l.createElement("br")),
        append_text_with_b(
          (m = l.createElement("p")),
          sprintf(
            gs("We're sorry. We were not able to change your password automatically for %s. Your password was not changed."),
            "<b>" + of(data.name) + "</b>"
          )
        ),
        r.appendChild(m),
        (i.style.display = "none"),
        (o.style.display = "none"),
        (p.style.display = "block");
      break;
    case "captcha":
      LP_decimate_children(r), r.appendChild(l.createElement("br")), r.appendChild(l.createElement("br"));
      var m = l.createElement("p");
      set_innertext(m, gs("Unable to proceed, the website does not allow automated password change.")),
        r.appendChild(m),
        (i.style.display = "none"),
        (o.style.display = "none"),
        (p.style.display = "block");
      break;
    case "timeout":
      LP_decimate_children(r), r.appendChild(l.createElement("br")), r.appendChild(l.createElement("br"));
      var m = l.createElement("p");
      set_innertext(m, gs("Timed out waiting for the page to load.  Retry?")),
        r.appendChild(m),
        (i.style.display = "none"),
        (o.style.display = "none"),
        (p.style.display = "block");
      break;
    case "fail_pw_saved":
      LP_decimate_children(r),
        r.appendChild(l.createElement("br")),
        r.appendChild(l.createElement("br")),
        append_text_with_b(
          (m = l.createElement("p")),
          sprintf(
            gs("We're sorry. We were not able to change your password automatically for %s. Your password was not changed."),
            "<b>" + of(data.name) + "</b>"
          ) + gs("The random password that was generated has been saved to your vault.")
        ),
        r.appendChild(m),
        (i.style.display = "none"),
        (o.style.display = "none"),
        (p.style.display = "block");
  }
  var d = l.getElementById("cpwdialog");
  (d.style.display = "block"),
    (d.style.height = "250px"),
    (d.style.width = "470px"),
    (d.style.left = (parseInt(l.body.clientWidth) - 470) / 2 + "px"),
    g_ischrome || (g_cpwbot_pwchangestate = "init_state_dingbats");
}
var g_cpwbot_pwchangestate = null;
function cpw_progress_update(e) {
  e &&
    e != g_lastmsg &&
    show_cpw_dialog("update", (g_cpw_progress_ctr = 90 < (g_cpw_progress_ctr += 20) ? 95 : g_cpw_progress_ctr), (g_lastmsg = e), !1, "");
}
function get_current_state(e) {
  var t;
  return g_ischrome ? getBG().cpwbot_getpwchangestate() : ((t = g_cpwbot_pwchangestate), e && getBG().cpwbot_getpwchangestate(), t);
}
function insert_cpw_placeholder_msg(e, t) {
  var a = (e = e || document).getElementById("cpw_placeholder_msg"),
    a,
    t;
  t &&
    !g_cpw_heard_from_bg &&
    null === a &&
    ((a = e.createElement("p")),
    (t = e.createTextNode(t)),
    (a.id = "cpw_placeholder_msg"),
    a.appendChild(t),
    e.getElementById("stepbystep").appendChild(a));
}
