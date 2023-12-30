function do_save_site_success_msg(t) {
  var i;
  return (
    !!g_show_save_success_msg &&
    popup_notification_msg(t, {
      waitms: 1500,
      loc: "ur",
      id: "__lpsavemsgdiv",
      msg: lpgs("You have saved your password to your LastPass Vault.")
    })
  );
}
function do_iframe_sad_msg(t) {
  var i;
  return (
    !!g_show_safari_csp_msg &&
    popup_notification_msg(t, {
      waitms: 3500,
      loc: "urv",
      id: "__lpsadmsgdiv",
      msg: lpgs("The LastPass popup has been blocked from loading on this site. Please fill using the LastPass Icon.")
    })
  );
}
function popup_notification_msg(t, i) {
  if (!(t = t || LP_derive_doc()) || !i) return !1;
  var e = i.loc,
    o = i.id,
    n = i.waitms,
    r = i.msg,
    a = sprintf,
    p = ("undefined" != typeof g_isie && g_isie && (init_LPfn(), LPfn) && (a = LPfn.sprintf), window),
    s,
    p;
  if ((p || "undefined" == typeof LP || (p = LP.getBrowser().ContentWindow), !(t && i && r && o && e && p))) return !1;
  var d = t.createElement("DIV"),
    i,
    l,
    c,
    m,
    l,
    m,
    l,
    i =
      ((d.id = o),
      g_40notify
        ? (((i = t.createElement("div")).style.height = "12px"),
          (i.style.backgroundColor = g_40colors.header),
          ((l = t.createElement("img")).src = g_40_icons["8x8"]),
          (l.style.cssText = c = "vertical-align:top !important; margin:2px !important;"),
          i.appendChild(l),
          (l =
            "position:absolute !important; border-style:transparent !important; border-width:1px !important; border-color:transparent !important; font-size:9px; font-family: Arial,Helvetica,sans-serif; height:11px !umportant ; width: 11px !important; top:0px !important; right:0px !important; background-color: transparent; margin: 0 !important; ; padding: 0px 2px !important; text-align:center; cursor: pointer; color: white; display:inline-block;"),
          ((m = t.createElement("div")).style.cssText = l),
          LP_elt_set_text(m, "X"),
          i.appendChild(m),
          d.appendChild(i))
        : ((l =
            "position:absolute !important; border-style:transparent !important; border-width:1px !important; border-color:transparent !important; font-size:9px; font-family: Arial,Helvetica,sans-serif; height:11px !umportant ; width: 11px !important; top:0px !important; right:0px !important; background-color: transparent; margin: 0 !important; ; padding: 0px 2px !important; text-align:center; cursor: pointer; "),
          ((m = t.createElement("div")).style.cssText = l),
          LP_elt_set_text(m, "X"),
          d.appendChild(m)),
      t.createElement("div")),
    g =
      ((i.id = o + "_text"),
      d.appendChild(i),
      g_40notify && (i.style.cssText = "padding: 5px 5px 5px 15px !important;"),
      r && LP_elt_set_text(i, r),
      "210px"),
    _ = LP_getWindowWidth(p);
  if (!_) return !1;
  var u = LP_getWindowHeight(p),
    A = 0,
    b = 0;
  switch (e) {
    case "ul":
      b = A = "25px";
      break;
    case "ulv":
      (A = 25 + LP_pos_viewport(p)[0] + "px"), (b = 25 + LP_pos_viewport(p)[1] + "px");
    case "dock":
      break;
    case "urv":
      (A = _ - parseInt(g) - 30 + "px"), (b = 25 + LP_pos_viewport(p)[1] + "px");
      break;
    default:
      (A = _ - parseInt(g) - 30 + "px"), (b = "25px");
  }
  var x,
    y,
    l =
      "position:absolute !important; visibility:visible !important; z-index:" +
      CLICKABLE_ICON_ZINDEX +
      " !important; border-style:transparent !important; border-width:1px !important; border-color:#4c4c4c !important; font-size:14px; font-family: Arial,Helvetica,sans-serif; width: " +
      g +
      " !important; top:" +
      b +
      " !important; left:" +
      A +
      " !important; background-color: #e6e6e6; margin: 4px !important; border-radius: 4px; padding: 5px 5px 5px 15px !important; background-image:" +
      ("url(data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMi1jMDAxIDYzLjEzOTQzOSwgMjAxMC8xMC8xMi0wODo0NTozMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0JFNTgxNzA4MjA2ODExOTJCMEZBNzdDQkU2Qjg4RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1RTA4N0Y4OEZCQUYxMUUyOTAyNEMwRUQyN0ZDRTk1QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1RTA4N0Y4N0ZCQUYxMUUyOTAyNEMwRUQyN0ZDRTk1QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgRWxlbWVudHMgMTEuMCBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMEEzMzFENkUxMjA2ODExOTJCMEZBNzdDQkU2Qjg4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0JFNTgxNzA4MjA2ODExOTJCMEZBNzdDQkU2Qjg4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqEZ7U4AAAAwUExURfL6+uHMzaoWLIoDFKVJJ2oEFsQaK7cCHMtfaNWrEcFJOsg2PsqnqdWGi584RAAAAIK7gZ4AAAAQdFJOU////////////////////wDgI10ZAAAAWUlEQVR42jzMUQ4AMQQEUKpoFnX/2+403exEZN4H1DHsZjQ9/kcOgsN4fVhURXVhxkRsBkxnPmCOg8xEzRyAuAOJEwVk0cIPAbbIriG5D6Zi31Fq/dOvAAMADDMDTO9yI2MAAAAASUVORK5CYII=" +
        ")") +
      "; background-repeat:no-repeat; background-position: left top;background-attachment: scroll;",
    o,
    l;
  return (
    void 0 !== d.style.opacity ? (l += "opacity: 1.0;") : (l += "filter:alpha(opacity=100)"),
    g_40notify &&
      ((o = a("url(%s)", g_40_icons["8x8"])),
      (l =
        "position:absolute !important; visibility:visible !important; z-index:" +
        CLICKABLE_ICON_ZINDEX +
        " !important; border-style:transparent !important; border-width:1px !important; border-color:#4c4c4c !important; font-size:14px; font-family: Arial,Helvetica,sans-serif; width: " +
        g +
        " !important; top:" +
        b +
        " !important; left:" +
        A +
        " !important; background-color: #e6e6e6; margin: 0px !important; padding:0px !important; border-radius: 4px; background-image:" +
        o +
        "; background-repeat:no-repeat; background-position: left top;background-attachment: scroll;"),
      void 0 !== d.style.opacity ? (l += "opacity: 1.0;") : (l += "filter:alpha(opacity=100)")),
    (d.style.cssText = l),
    void 0 !== t.body ? t.body.appendChild(d) : t.getElementById("main") && t.getElementById("main").appendChild(d),
    n &&
      "number" == typeof n &&
      0 < n &&
      setTimeout(function () {
        return close_popup_notification_msg(t, d.id, 0), !1;
      }, n),
    LP_addEventHandler(m, "click", function () {
      return close_popup_notification_msg(t, d.id, null), !1;
    }),
    !0
  );
}
function close_popup_notification_msg(t, i, e) {
  if ((t = t || LP_derive_doc()) && i) {
    var o = t.getElementById(i);
    if (o) {
      if ((void 0 === e ? (e = 0) : "string" == typeof e && (e = parseInt(e)), null === e || isNaN(e)))
        return o.parentNode.removeChild(o), !1;
      e < FADE_MAXSTATES
        ? (void 0 !== o.style.opacity
            ? (o.style.opacity = (100 - (100 / FADE_MAXSTATES) * (e + 1)) / 100)
            : (o.style.filter = "alpha(opacity=" + (100 - 20 * (e + 1)) + ")"),
          e++,
          setTimeout(function () {
            return close_popup_notification_msg(t, o.id, e), !1;
          }, 10))
        : o.parentNode.removeChild(o);
    }
  }
  return !1;
}
function destroy_save_site_success_msg(t, i, e) {
  return close_popup_notification_msg(t, i, e);
}
var MSGDIVID = "__lpsuggestmsgdiv",
  g_tutorial_flags;
function do_save_suggest_msg(t, i) {}
var TUTORIAL_FLAG_LPOV = 1,
  TUTORIAL_FLAG_CONTEXT = 2,
  g_context_tip_shown = 0;
function draw_context_tip(t, i) {}
function destroy_save_suggest_msg(t, i, e) {
  return !1;
}
