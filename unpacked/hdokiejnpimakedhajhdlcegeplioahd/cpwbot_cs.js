var CPWbot_cs;
function CPWbot_cs_lib() {
  var C = this,
    e = ((this.JSON = JSON) || (this.JSON = LPJSON), LPJSON, !0),
    h = ((this.alert = alert), 10),
    t = "id",
    i = "name",
    n = "xpath";
  function a(e, t, i) {
    (e = e || LP_derive_doc()) && this.getElementByType(e, { id_type: t, id_value: i });
  }
  (this.fill_field = function (e, t) {
    var i, n, a;
    return (
      (e = e || LP_derive_doc()),
      !(
        !t ||
        !e ||
        ((i = 0),
        (n = this.getElementByType(e, t))
          ? (info_log(e, "CA23", { param1: t.id_type, param2: t.id_value, param3: t.should_click, param4: t.should_fill_via_keys }),
            n.focus(),
            t.should_click &&
              ((a = t.flavor), CPWbot_cs.do_click(e, n, a), "function" == typeof sendKey && sendKey("Z", n), fire_onchange(n, !0, !0)),
            t.should_fill_via_keys && g_isfirefox ? fill_field_via_keys(n, t.field_value) : (n.value = t.field_value),
            fire_onchange(n),
            (i = 1))
          : info_log(e, "CA24", { param1: t.id_type, param2: t.id_value }),
        sendBG(
          {
            cmd: "cpwbot_fill_ack",
            url: get_doc_location_href(e),
            docstate: e.readyState,
            req_id: t.req_id,
            id_type: t.id_type,
            id_value: t.id_value,
            found: i ? 1 : 0,
            should_click: t.should_click,
            should_fill_via_keys: t.should_fill_via_keys
          },
          e
        ),
        0)
      )
    );
  }),
    (this.click_field = function (e, t) {
      var i, n, a, r, o, l, _, s;
      return (
        (e = e || LP_derive_doc()),
        !(
          !t ||
          !e ||
          ((i = C.CLICK_NOMINAL),
          (n = C.CLICK_NO_FOCUS),
          (a = C.CLICK_MOUSEDOWN),
          (r = C.CLICK_STRANGE),
          (o = this.getElementByType(e, t)),
          (l = 0),
          (_ = i),
          t.flavor && (lp_in_array(t.flavor, [i, n, a, r]) ? (_ = t.flavor) : info_log(e, "CA3")),
          o
            ? (info_log(e, "CA4", { param1: getmydocnum(e), param2: t.pwchangestate, param3: t.id_type, param4: t.id_value }),
              this.do_click(e, o, _),
              (l = 1))
            : (info_log(e, "CA5", { param1: getmydocnum(e), param2: t.pwchangestate, param3: t.id_type, param4: t.id_value }), g_isdebug),
          sendBG(
            {
              cmd: "cpwbot_click_ack",
              url: get_doc_location_href(e),
              docstate: e.readyState,
              pwchangestate: t.pwchangestate,
              msgid: t.msgid,
              id_type: t.id_type,
              id_value: t.id_value,
              found: l ? 1 : 0,
              flavor: _
            },
            e
          ),
          0)
        )
      );
    }),
    (this.execute_script = function (e, t) {
      if (((e = e || LP_derive_doc()), !t || !e || !Math)) return !1;
      if (!g_isfirefox || !e || e.defaultView) {
        var i = !0,
          n = !0,
          a = t.js,
          r = t.hash,
          o = null;
        if (a) {
          var l = a,
            _,
            _ =
              "function" == typeof fasthash
                ? fasthash
                : "function" == typeof crc32
                ? crc32
                : "function(j) { if (j) { return j.length; } return 0; }";
          if ((info_log(e, "CA6", { param1: r, param2: _(l) }), r != _(l))) return info_log(e, "CA7"), !1;
          var s,
            r = "__lpresult" + Math.floor(Math.random() * Math.pow(2, 31)),
            _ =
              (info_log(e, "CA8", { param1: getmydocnum(e), param2: a }),
              run_custom_js(
                e,
                (a =
                  null === e.body
                    ? "try{" + a + "}catch(e) { }"
                    : "try {" +
                      sprintf(
                        "var _res = document.getElementById('%s');  if (!_res) { _res = document.createElement('div');  _res.id='%s'; _res.style.display='none'; _res.style.left='-1000px'; document.body.appendChild(_res); } { ",
                        r,
                        r
                      ) +
                      a +
                      "} if (_res) { if (typeof(_res.innerText) != 'undefined') { _res.innerText = document._g_result; } else { _res.textContent = document._g_result; } document._g_result = null; }} catch(e) { }")
              ),
              e.getElementById(r));
          _ && (void 0 === (o = LP_elt_get_text(_)) && (o = null), _.parentElement.removeChild(_)), (a = null);
        }
        return (
          sendBG(
            {
              cmd: "cpwbot_js_ack",
              url: get_doc_location_href(e),
              docstate: e.readyState,
              req_id: t.req_id,
              result: CPWbot_cs.JSON.stringify(o)
            },
            e
          ),
          n
        );
      }
    }),
    (this.getElementByType = function (e, t) {
      if (((e = e || LP_derive_doc()), !t || !e)) return null;
      if (g_isfirefox && e && !e.defaultView) return null;
      var i = null,
        n = null,
        a = t.id_type,
        r = t.id_value,
        o = 666;
      if (a && r)
        switch (a) {
          case "id":
            i = e.getElementById(r);
            break;
          case "name":
            (n = e.getElementsByName(r)) && 0 < n.length && (i = n[0]);
            break;
          case "xpath":
            (o = g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn ? LPfn.getDocumentMode(e) : o) < 8
              ? alert("old IE - does not bundle in XPATH support. TODO ")
              : (i = LP_getElementByXPath(e, r));
        }
      return i;
    }),
    (this.getElementsByType = function (e, t) {
      if (((e = e || LP_derive_doc()), !t || !e)) return null;
      var i = null,
        n = [],
        a = t.id_type,
        r = t.id_value,
        o = 666;
      if (a && r)
        switch (a) {
          case "id":
            (i = e.getElementById(r)) && n.push(i);
            break;
          case "name":
            n = e.getElementsByName(r);
            break;
          case "xpath":
            (o = g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn ? LPfn.getDocumentMode(e) : o) < 8
              ? this.alert("old IE - does not bundle in XPATH support. TODO ")
              : (n = LP_getElementsByXPath(e, r));
        }
      return n;
    }),
    (this.field_is_displayed = function (e, t) {
      return (e = e || LP_derive_doc()), !(!t || !e || !lpIsVisible(t));
    }),
    (this.CLICK_NOMINAL = 0),
    (this.CLICK_NO_FOCUS = 1),
    (this.CLICK_MOUSEDOWN = 2),
    (this.CLICK_STRANGE = 3),
    (this.do_click = function (e, t, i) {
      if (((e = e || LP_derive_doc()), !t || !e)) return !1;
      var n = null,
        a = ((n = (n = "undefined" != typeof window ? window : n) || e.defaultView), C.CLICK_NOMINAL),
        r = C.CLICK_NO_FOCUS,
        o = C.CLICK_MOUSEDOWN,
        l = C.CLICK_STRANGE;
      switch (((void 0 !== i && i) || (i = a), void 0 !== t.disabled && t.disabled && (t.disabled = !1), i !== r && t.focus(), i)) {
        case l:
          break;
        case o:
          var _ = LP_getAbsolutePos(e, t),
            s,
            d,
            d,
            d,
            d,
            d;
          _ &&
            t &&
            ((s = t),
            ((d = document.createEvent("MouseEvent")).target = s),
            d.initMouseEvent("mouseenter", !0, !1, n, 0, _.left, _.top, _.left, _.top, !1, !1, !1, !1, 0, n.document.documentElement),
            s.dispatchEvent(d),
            ((d = document.createEvent("MouseEvent")).target = s),
            d.initMouseEvent("mousemove", !0, !1, n, 0, _.left + 2, _.top + 2, _.left + 2, _.top + 2, !1, !1, !1, !1, 0, null),
            s.dispatchEvent(d),
            ((d = document.createEvent("MouseEvent")).target = s),
            d.initMouseEvent("mousedown", !0, !1, n, 0, _.left + 2, _.top + 2, _.left + 2, _.top + 2, !1, !1, !1, !1, 0, null),
            s.dispatchEvent(d),
            ((d = document.createEvent("MouseEvent")).target = s),
            d.initMouseEvent("mouseup", !0, !1, n, 0, _.left + 2, _.top + 2, _.left + 2, _.top + 2, !1, !1, !1, !1, 0, null),
            s.dispatchEvent(d),
            ((d = document.createEvent("MouseEvent")).target = s),
            d.initMouseEvent("click", !0, !1, n, 0, _.left + 2, _.top + 2, _.left + 2, _.top + 2, !1, !1, !1, !1, 0, null),
            s.dispatchEvent(d));
          break;
        default:
          c(e, t, "click", "MouseEvents");
      }
      function c(e, t, i, n) {
        e && t && i && n && (g_isfirefox ? fireEvent(e, t, i, n) : LP_fireEvent(t, i, n));
      }
      function u(e, t) {
        if (e && t) {
          var i = t.element,
            n = t.evt,
            a,
            a = (a = t.evt_class) || "MouseEvent",
            r = null,
            e =
              ((r = (r = "undefined" != typeof window ? window : r) || e.defaultView),
              i && "string" == typeof n && "string" == typeof a ? LP_fireEvent(i, n, a, t) : debug_checkpoint(e, "FAIL " + n),
              t.posx),
            o = t.posy,
            t = t.relatedTarget,
            n;
          if (i && "string" == typeof n && "string" == typeof a)
            return (
              void 0 === t && (t = null),
              ((n = document.createEvent(a)).target = i),
              n.initMouseEvent(n, !0, !1, r, 0, e, o, e, o, !1, !1, !1, !1, 0, t),
              void i.dispatchEvent(n)
            );
        }
      }
      return !0;
    }),
    (this.decode_fields_metainfo = function (e) {
      var t = "";
      return (t = e ? this.JSON.parse(e) : t);
    }),
    (this.validate_page_fields = function (e, t, i, n, a, r, o, l) {
      if (!e) return null;
      var _ = !0,
        s,
        d = {},
        c = (info_log(e, "CA9", { param1: getmydocnum(e), param2: t }), !1),
        u = 0,
        m = 0,
        p = 0,
        f = 0,
        g = (i = i || []),
        y = (n = n || []),
        v = (l = l || []),
        h;
      if (r) {
        var h = new RegExp(r, "i"),
          E = punycode.URLToASCII(e.location.href);
        if (h.exec(E))
          return (
            (d.num_ok_matches = null),
            (d.num_okfields = null),
            (d.found_bad_match = null),
            (d.num_badfields = null),
            (d.url_success_match = !0),
            (d.url_failure_match = !1),
            (d.do_retry = !1),
            (d.retval = !0),
            (d.found_interactive = !1),
            info_log(e, "CA10", { param1: getmydocnum(e), param2: r }),
            g_isdebug && (set_innertext(d, LP_elt_get_text(e.body)), (d.innerhtml = e.body.innerHTML)),
            d
          );
      }
      if (o) {
        h = new RegExp(o, "i");
        var E = punycode.URLToASCII(e.location.href);
        if (h.exec(E))
          return (
            (d.num_ok_matches = null),
            (d.num_okfields = null),
            (d.found_bad_match = null),
            (d.num_badfields = null),
            (d.url_failure_match = !0),
            (d.url_success_match = !1),
            (d.do_retry = !1),
            (d.retval = !1),
            (d.found_interactive = !1),
            info_log(e, "CA11", { param1: getmydocnum(e), param2: o }),
            g_isdebug && (set_innertext(d, LP_elt_get_text(e.body)), (d.innerhtml = e.body.innerHTML)),
            d
          );
      }
      for (s = 0; s < g.length; s++) {
        var b = g[s].id_type,
          A = g[s].id_value,
          S;
        if (!(S = C.getElementByType(e, { id_type: b, id_value: A }))) {
          info_log(e, "CA12", { param1: getmydocnum(e), param2: b, param3: A });
          break;
        }
        u++, m++;
      }
      if ((m < g.length && ((c = !0), (_ = null)), _))
        for (s = 0; s < y.length; s++) {
          var b = y[s].id_type,
            A = y[s].id_value,
            S;
          if ((S = this.getElementByType(e, { id_type: b, id_value: A }))) {
            u++, (p = 1), info_log(e, "CA13", { param1: getmydocnum(e), param2: A }), (c = _ = !1);
            break;
          }
          c = !0;
        }
      for (s = 0; s < v.length; s++) {
        var b = v[s].id_type,
          A = v[s].id_value,
          S;
        if ((S = this.getElementByType(e, { id_type: b, id_value: A }))) {
          u++, (f = 1), info_log(e, "CA14", { param1: getmydocnum(e), param2: A }), (c = !1);
          break;
        }
      }
      return (
        0 === u && (0 < g.length || 0 < y.length) && (_ = null),
        d &&
          ((d.num_ok_matches = m),
          (d.num_okfields = g.length),
          (d.found_bad_match = p),
          (d.num_badfields = y.length),
          (d.do_retry = c),
          (d.retval = _),
          (d.url_success_match = !1),
          (d.url_failure_match = !1),
          (d.found_interactive = f),
          g_isdebug) &&
          (set_innertext(d, LP_elt_get_text(e.body)), (d.innerhtml = e.body.innerHTML)),
        d
      );
    }),
    (this.interrogate = function (e, t, i) {
      var n = 500,
        a,
        r,
        o,
        l,
        _;
      function s(e) {
        return l ? "complete" == e || "interactive" == e : "complete" == e;
      }
      !t ||
        h < i ||
        ((a = t.desc),
        (r = t.required_fields),
        (o = t.rejected_fields),
        (l = t.proceed_on_interactive),
        void 0 === i && (i = 1),
        (_ = t.interactive_fields),
        s(e.readyState)
          ? g_cpwbot && CPWbot_cs && CPWbot_cs.interrogate_validate(e, t)
          : (info_log(e, "CA15", { param1: getmydocnum(e), param2: a, param3: n, param4: e.readyState }),
            setTimeout(function () {
              CPWbot_cs.interrogate(e, t, i + 1);
            }, n)));
    }),
    (this.interrogate_validate = function (t, i, n) {
      if (!i || h < n) return !1;
      null == n && (n = 1);
      var e = 1e3,
        a = i.desc,
        r = i.required_fields,
        o = i.rejected_fields,
        l = i.required_url,
        _ = i.rejected_url,
        s = i.interactive_fields,
        d = i.id,
        c = i.validate_timeout,
        u = i.timestamp,
        m,
        u = (new Date().getTime() - u) / 1e3;
      if (0 < (c = null == c ? 0 : c) && c / 2e3 <= n)
        return info_log(t, "CA16", { param1: getmydocnum(t), param2: c, param3: e, param4: n, param5: u }), !1;
      info_log(t, "CA17", { param1: getmydocnum(t), param2: c, param3: e, param4: n, param5: u });
      var p = CPWbot_cs.decode_fields_metainfo(r),
        f = CPWbot_cs.decode_fields_metainfo(o),
        s = CPWbot_cs.decode_fields_metainfo(s),
        g,
        y,
        v;
      return 0 !== p.length || 0 !== f.length || _ || l
        ? null === (g = CPWbot_cs.validate_page_fields(t, a, p, f, c, l, _, s))
          ? null
          : ((y = g.retval),
            g.do_retry && null === y
              ? (p.length,
                info_log(t, "CA19", { param1: getmydocnum(t), param2: n, param3: u, param4: a, param5: 1 }),
                setTimeout(function () {
                  var e = CPWbot_cs.interrogate_validate(t, i, n + 1);
                  e ||
                    ((e = (0 === p.length && 0 < f.length) || (0 < p.length && 0 < f.length && 0 < g.num_ok_matches)),
                    sendBG(
                      {
                        cmd: "cpwbot_validate_state_result",
                        state: "STATE_TIMEDOUT",
                        url: get_doc_location_href(t),
                        docstate: t.readyState,
                        desc: a,
                        id: d,
                        required_fields: r,
                        rejected_fields: o,
                        required_url: l,
                        rejected_url: _,
                        result_obj: CPWbot_cs.JSON.stringify(g),
                        result: CPWbot_cs.JSON.stringify(e)
                      },
                      t
                    ));
                }, e))
              : (null === y && (info_log(t, "CA20", { param1: getmydocnum(t) }), (y = !1)),
                sendBG(
                  {
                    cmd: "cpwbot_validate_state_result",
                    state: "STATE" + n,
                    url: get_doc_location_href(t),
                    docstate: t.readyState,
                    desc: a,
                    id: d,
                    required_fields: r,
                    rejected_fields: o,
                    required_url: l,
                    rejected_url: _,
                    result_obj: CPWbot_cs.JSON.stringify(g),
                    result: CPWbot_cs.JSON.stringify(y)
                  },
                  t
                )),
            !0)
        : (s.length,
          info_log(t, "CA18", { param1: getmydocnum(t) }),
          (y = !0),
          sendBG(
            {
              cmd: "cpwbot_validate_state_result",
              state: "STATE" + n,
              url: get_doc_location_href(t),
              docstate: t.readyState,
              desc: a,
              id: d,
              required_fields: r,
              rejected_fields: o,
              required_url: l,
              rejected_url: _,
              result_obj: CPWbot_cs.JSON.stringify(g),
              result: CPWbot_cs.JSON.stringify(y)
            },
            t
          ),
          !0);
    });
  var r = "__lpresultdiv";
  return (
    (this.do_result_div = function (e, t) {
      if (!e) return !1;
      if (!g_isdebug) return !1;
      g_isdebug && check_for_selenium_bits(e);
      var i = e.getElementById(r);
      return (
        !i &&
          e.body &&
          (i = e.createElement("div")) &&
          ((i.id = r), (i.style.left = "-999px"), (i.style.position = "absolute"), e.body.appendChild(i)),
        LP_elt_set_text(i, t)
      );
    }),
    (this.hide_result_div = function (e) {
      var e;
      return !!e && ((e = e.getElementById(r)) && e.parentElement.removeChild(e), !0);
    }),
    !0
  );
}
function display_cpw_message_loop(t, e, i) {
  if (t) {
    if (null === e) {
      if (null === t.getElementById("cpwmsg")) return;
      g_ischrome &&
        chrome_runtime_sendMessage({ cmd: "getcpwmsg" }, function (e) {
          e && e.msg && display_cpw_message(t, e.msg), 1 === e.minimize_state && minimize_cpw_dialog(t);
        });
    } else display_cpw_message(t, e, i);
    g_isdebug && check_for_selenium_bits(t),
      setTimeout(function () {
        display_cpw_message_loop(t, null, null);
      }, 51);
  }
}
function update_msgdiv_css(e, t, i, n, a) {
  var r, t;
  return (
    !!e &&
    ((r =
      (r =
        "position:absolute !important; z-index: 200; visibility:visible !important;  border-style:transparent!important; border-width:0px !important;") +
      'font-size:14px; font-family: "Open Sans",sans-serifheight: ' +
      t +
      " !important ; width: " +
      i +
      " !important; top:" +
      a +
      " !important; left:" +
      n +
      ' !important; background-color: #ffffff;margin: 4px !important; padding: 0px !important; overflow:auto;font-family: "open_sansregular",helvetica neue,helvetica,arial,sans-serif;'),
    !!(t = e.getElementById("cpwmsg"))) &&
    ((t.style.cssText = r), !0)
  );
}
var CPWbot_cs = CPWbot_cs || new CPWbot_cs_lib(),
  OVERLAY_MESSAGE_WIDTH = "500px",
  OVERLAY_MESSAGE_HEIGHT = "200px",
  OVERLAY_MESSAGE_HEIGHT_MINIMIZED = "70px",
  OVERLAY_MESSAGE_TOP = "50px",
  OVERLAY_MESSAGE_LEFT = "50px";
function display_cpw_message(e, t, i) {
  var n, a, r, n, o, a, l, _, s, d, a, c, r, a, u, m, m, u;
  e &&
    ((n = e.getElementById("cpwmsg"))
      ? pass
      : (((a = e.createElement("div")).style.width = "100%"),
        (a.style.height = window.innerHeight + "px"),
        (a.style.opacity = "0.7"),
        (a.style.backgroundColor = "#666666"),
        (a.id = "cpwbg"),
        (a.style.position = "absolute"),
        (a.style.top = "0px"),
        (a.style.left = "0px"),
        e.body.appendChild(a),
        (n = e.createElement("div")) &&
          ((n.id = "cpwmsg"),
          e.body.appendChild(n),
          (a =
            "url(data:image/png;base64," +
            "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" +
            ")"),
          update_msgdiv_css(e, OVERLAY_MESSAGE_HEIGHT, OVERLAY_MESSAGE_WIDTH, OVERLAY_MESSAGE_TOP, OVERLAY_MESSAGE_LEFT),
          n.setAttribute("role", "status"),
          (a =
            "color: #ffffff; padding: 18px 10px 18px 174px; background-color: #D22D27 !important; background-image:" +
            a +
            "; background-repeat:no-repeat; background-position: 12px 14px; background-attachment: scroll;"),
          (c = e.createElement("div")),
          LP_set_style_attr(c, a),
          (c.id = "cpwtitle"),
          c.addEventListener(
            "click",
            function () {
              return toggle_cpw_dialog(e), !1;
            },
            !1
          ),
          ((r = e.createElement("div")).id = "msgbody"),
          (r.style.fontSize = "18px"),
          (r.style.padding = "10px 0px"),
          (a = e.createElement("div")),
          ((u = e.createElement("div")).style.width = "100%"),
          (u.style.textAlign = "right"),
          (m = gs("Automatic Password Change")),
          LP_elt_set_text(u, m),
          c.appendChild(u),
          n.appendChild(c),
          ((m = e.createElement("div")).style.padding = "10px"),
          n.appendChild(m),
          (a.style.marginTop = "5px"),
          (a.style.marginBottom = "5px"),
          (a.style.fontSize = "14px"),
          (a.style.color = "#F09C0E"),
          (u = gs("Please do not close this tab until LastPass is done updating your password.")),
          LP_elt_set_text(a, u),
          m.appendChild(r),
          m.appendChild(a))),
    (r = r || e.getElementById("msgbody"))) &&
    LP_elt_set_text(r, t);
}
function cpw_hide_overlay(e, t) {
  var e;
  return !!e && (g_isfirefox || ((e = e.getElementById("lpiframeoverlaycpwmsg")) && e.parentNode.removeChild(e)), !0);
}
function toggle_cpw_dialog(e) {
  var t, i;
  return !(
    !e ||
    ((t = e.getElementById("msgbody")), !e.getElementById("cpwmsg")) ||
    !t ||
    (("none" == t.style.display ? (maximize_cpw_dialog(e), maximize_cpw_bg) : (minimize_cpw_dialog(e), minimize_cpw_bg))(), 0)
  );
}
function maximize_cpw_dialog(e) {
  var t, i, n, a, r, o;
  return !(
    !e ||
    ((t = OVERLAY_MESSAGE_TOP),
    (i = OVERLAY_MESSAGE_LEFT),
    (n = OVERLAY_MESSAGE_WIDTH),
    (a = OVERLAY_MESSAGE_HEIGHT),
    (r = e.getElementById("msgbody")),
    !e.getElementById("cpwmsg")) ||
    !r ||
    ("block" != r.style.display && (update_msgdiv_css(e, a, n, t, i), (r.style.display = "block")), 0)
  );
}
function minimize_cpw_dialog(e) {
  var t, i, n, a, r, o;
  return !(
    !e ||
    ((t = OVERLAY_MESSAGE_TOP),
    (i = OVERLAY_MESSAGE_LEFT),
    (n = OVERLAY_MESSAGE_WIDTH),
    (a = OVERLAY_MESSAGE_HEIGHT),
    (r = e.getElementById("msgbody")),
    !e.getElementById("cpwmsg")) ||
    !r ||
    ("none" != r.style.display && (update_msgdiv_css(e, OVERLAY_MESSAGE_HEIGHT_MINIMIZED, n, t, i), (r.style.display = "none")), 0)
  );
}
function do_cpw_overlay_handler(e, t) {
  var i, n, i;
  CPWbot_cs &&
    CPWbot_cs.JSON &&
    e &&
    e.msg &&
    ((i = CPWbot_cs.JSON.parse(e.msg))
      ? ((n = encodeURIComponent(i.symbolic)),
        g_isfirefox
          ? (lpShowOverlay(t, 0, i.msg), lpSetOverlayStatus(t, ""), lpisadmin && do_cpw_debug(t))
          : ((i = encodeURIComponent(i.msg)), info_log(t, "CA21", { param1: i }), showoverlay(e, "&cpwbot=" + i + "&symbolic=" + n)))
      : info_log(t, "CA22"));
}
function ping_req_handler(e, t) {
  var i = new Date().getTime(),
    n = 0,
    a = (void 0 !== t.timestamp && t.timestamp && (n = i - t.timestamp), "");
  try {
    a = punycode.URLToASCII(e.location.href);
  } catch (e) {}
  sendBG({ cmd: "ping_ack", timestamp: i, delta: n, id: t.id, url: a, docstate: get_docstate(e), flags: assemble_docflags_object(e) }, e);
}
function get_docstate(e) {
  return e ? (void 0 !== e.readyState && e.readyState ? e.readyState : "undef") : null;
}
function assemble_docflags_object(e) {
  var t, i;
  return e && e.location
    ? ((t = e.location.origin || null),
      {
        is_special_site: g_is_specialsite,
        in_cpwbot: g_in_cpwbot,
        tutorial_flags: g_tutorial_flags,
        need_dynamic_delay: g_need_dynamic_delay,
        has_frameset: 0 < e.getElementsByTagName("FRAMESET").length,
        domain: e.domain,
        origin: t
      })
    : null;
}
function run_custom_js(e, t, i) {
  if (e) {
    "undefined" != typeof g_iscasper &&
      g_iscasper &&
      ((this.stash_script = o), (this.get_script = l), (this.delete_script = _), (this.prep_and_delete_priors = s));
    var i = s(e, i),
      n,
      a,
      r;
    try {
      "" != t &&
        (!e.g_content_check_result || is_page_JSON(e)
          ? (e.g_content_check_result = !1)
          : (("facebook.com" != (n = lp_gettld_url(e.location.href)) && "live.com" != n && "outlook.com" != n) ||
              0 != e.getElementsByTagName("form").length) &&
            ((t = "try{" + (t = t.replace(/lpcurrpage./g, "")) + "}catch(e){}"),
            (a = e.createElement("script")),
            (r = e.createTextNode(t)),
            a.appendChild(r),
            e.body && e.body.appendChild(a),
            o(e, i, a)));
    } catch (e) {}
  }
  function l(e, t) {
    var i = null;
    return (e = e || LP_derive_doc()) && t
      ? (e.script_stash ? void 0 === (i = e.script_stash[t]) && (i = null) : (e.script_stash = {}), i)
      : null;
  }
  function o(e, t, i) {
    return !(!(e = e || LP_derive_doc()) || (e.script_stash || (e.script_stash = {}), !i) || !t || ((e.script_stash[t] = i), 0));
  }
  function _(e, t) {
    var i, i;
    return !(
      !t ||
      !e ||
      ((i = null),
      e.script_stash &&
        ((i = e.script_stash[t]) && i.parentNode && (verbose_log("cleanup: " + t), i.parentNode.removeChild(i)), delete e.script_stash[t]),
      0)
    );
  }
  function s(e, t) {
    if (!(e = e || LP_derive_doc())) return "";
    var i = "_lastpass_",
      n = "";
    if (t && "string" == typeof t) {
      var n,
        a = l(e, (n = i + t));
      if ((_(e, n), "3" === t))
        for (var r = 1; r < 3; r++) {
          var o = i + r.toString(),
            a = l(e, o);
          _(e, o);
        }
    }
    return (a = null), n;
  }
}
function do_result_div_handler(e, t) {
  return g_isdebug && CPWbot_cs && CPWbot_cs.do_result_div(e, t.msg), !0;
}
function hide_result_div_handler(e, t) {
  return g_isdebug && CPWbot_cs && CPWbot_cs.hide_result_div(e), !0;
}
function need_dynamic_delay(e) {
  var t, i;
  return (
    !!e &&
    ((t = LP_elt_get_text(e.head)),
    0 <= LP_elt_get_text(e.body).indexOf("\x3c!-- ko") || 0 <= t.indexOf("require") || 0 <= t.indexOf("lazyload"))
  );
}
function minimize_cpw_bg() {
  g_ischrome &&
    chrome_runtime_sendMessage({ cmd: "minimize_cpw_dialog" }, function (e) {
      pass;
    });
}
function maximize_cpw_bg() {
  g_ischrome &&
    chrome_runtime_sendMessage({ cmd: "maximize_cpw_dialog" }, function (e) {
      pass;
    });
}
function get_doc_location_href(e) {
  try {
    return e.location ? e.location.href : "";
  } catch (e) {
    return "";
  }
}
function getmydocnum(e) {
  if (g_isfirefox) {
    if (!(e = e || LP_derive_doc())) return 0;
    if (void 0 === e.g_docnum) {
      var t = lpGetBrowserForDocument(e),
        i = get_tabid_from_browser(t);
      if (null == i) return console_error("did not found matching tab for given tabid, bail"), 0;
      ff_setdocnum_conditional(e, i);
      var n = g_CS_tops[i],
        a;
      t.contentDocument == e && (g_CS_tops[i] = e.g_docnum);
    }
    return e.g_docnum;
  }
  return g_docnum;
}
var g_is_selenium = !1,
  g_selenium_bits = -1,
  LPSELENIUMBITSDIV = "__lpseleniumbitsdiv";
function check_for_selenium_bits(e) {
  var t, i, i;
  return e && g_isdebug
    ? ((t = -1),
      (i = e.getElementById(LPSELENIUMBITSDIV))
        ? ((i = parseInt(LP_elt_get_text(i))),
          isNaN(i) || (g_selenium_bits = t = i),
          (g_is_selenium = !0),
          sendBG({ cmd: "from_selenium", bits: t, url: get_doc_location_href(e), docstate: e.readyState }))
        : -1 != g_selenium_bits && (t = g_selenium_bits),
      t)
    : -1;
}
