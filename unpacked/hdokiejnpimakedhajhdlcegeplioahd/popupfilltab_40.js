var g_new_superbar = !0,
  SB_icons =
    ("undefined" != typeof g_isfirefox && g_isfirefox && (g_new_superbar = !1),
    {
      savesite: {
        id: "SB_addico",
        alt: gs("Save Site"),
        src: g_40_icons.Add,
        dock: "left",
        tooltiptext: gs("Save Password to Vault"),
        clickfn: function (e) {
          savesite_popupaction_iframe(LP_derive_doc(), e, null);
        }
      },
      sites: {
        id: "SB_siteico",
        alt: gs("Sites"),
        src: g_40_icons.Sites,
        dock: "left",
        tooltiptext: gs("Saved Passwords"),
        clickfn: function (e) {
          sites_popupaction(e, LP_derive_doc());
        }
      },
      formfill: {
        id: "SB_ffico",
        alt: gs("Form Fills"),
        src: g_40_icons.FormFill,
        dock: "left",
        tooltiptext: gs("Form Fill Profiles"),
        clickfn: function (e) {
          formfillprofile_popupaction(e, LP_derive_doc());
        }
      },
      generate: {
        id: "SB_genico",
        alt: gs("Generate"),
        src: g_40_icons.Generate,
        dock: "left",
        tooltiptext: gs("Generate"),
        clickfn: function (e) {
          generate_popupaction(e);
        }
      },
      never: {
        id: "SB_nevico",
        alt: gs("Never"),
        src: g_40_icons.Disable,
        dock: "left",
        tooltiptext: gs("Disable"),
        clickfn: function (e) {
          never_popupaction(e, LP_derive_doc(), "close");
        }
      },
      close: {
        id: "SB_closeico",
        alt: gs("Close"),
        src: g_40_icons.Close,
        dock: "right",
        tooltiptext: gs("Close"),
        clickfn: function (e) {
          close_popupaction(LP_derive_doc(), "close");
        }
      }
    });
function set_new_superbox_40(e, t) {
  var a, i, s;
  return e &&
    ((a = "undefined" != typeof g_isfirefox && g_isfirefox ? "html:" : ""),
    (i = null),
    verbose && times && (times.createbox = LP_gettime()),
    (i = o(e, t)))
    ? ((s = 0), l(e, i), n(e, i), void _(e))
    : null;
  function o(e, t) {
    var e;
    return e && t
      ? (((e = e.createElement(a + "div")).id = "headerdiv"),
        (e.className = "bg40dialog"),
        t.appendChild(e),
        verbose && times && (times.createheader = LP_gettime()),
        LP_addEventHandler(e, "selectstart", function () {
          return !1;
        }),
        e)
      : null;
  }
  function n(e, t) {
    var i, s;
    e &&
      t &&
      (((i = e.createElement(a + "div")).id = "SB_titlebox"),
      (i.className = "super40height bg40title super40title unselectable"),
      g_isie && LP_getDocumentMode(e) < 10 && i.setAttribute("unselectable", "on"),
      ((s = e.createElement(a + "span")).id = "SB_titlebox_txt"),
      s.setAttribute("draggable", "false"),
      (s.className = "super40title"),
      LP_elt_set_text(s, gs("What would you like to do?")),
      i.appendChild(s),
      verbose &&
        (((s = e.createElement(a + "span")).id = "debug_txt"),
        (s.style.display = "inline"),
        (s.style.fontSize = "10px"),
        (s.style.marginLeft = "5px"),
        i.appendChild(s)),
      t.appendChild(i),
      verbose) &&
      times &&
      (times.createtitle = LP_gettime());
  }
  function l(e, t) {
    var i,
      s = (verbose && times && (times.doiconsstart = LP_gettime()), e.createElement(a + "div"));
    for (i in ((s.id = "SB_iconbox"),
    (s.className = "super40height bg40header"),
    s.setAttribute("role", "navigation"),
    t.appendChild(s),
    SB_icons))
      SB_icons.hasOwnProperty(i) && r(e, s, SB_icons[i]);
    verbose && times && (times.doiconsdone = LP_gettime());
  }
  function r(e, t, i, s) {
    var o, n, o, t, o;
    e &&
      t &&
      ((o = ""),
      ((n = e.createElement(a + "a")).id = i.id + "_a"),
      (o = "super40icon"),
      "right" == i.dock
        ? ((o += " floatright"), i.tooltiptext && (o += " tooltip40super"))
        : ((o += " floatleft"), i.tooltiptext && (o += " tooltip40superlong")),
      n.setAttribute("draggable", "false"),
      (n.className = o),
      t.appendChild(n),
      (o = c(e, i)),
      n.appendChild(o),
      g_isie && ((o.style.display = "none"), (t = d(e, i)), n.appendChild(t)),
      i.tooltiptext) &&
      ((o = e.createElement(a + "span")), LP_elt_set_text(o, i.tooltiptext), n.appendChild(o));
  }
  function c(e, t) {
    var e;
    return e && t && (e = e.createElement(a + "input"))
      ? ((e.id = t.id + "_img"),
        (e.type = "button"),
        t.tooltiptext || e.setAttribute("title", t.alt),
        e.setAttribute("aria-label", t.alt),
        (e.className = sprintf("bg40header super40icon_icon %s", e.id)),
        e)
      : null;
  }
  function d(e, t) {
    var e;
    return e && t
      ? (((e = e.createElement("INPUT")).id = t.id + "_img_ie"),
        (e.type = "image"),
        g_isie ? (e.src = t.src) : e.setAttribute("src", t.src),
        e.setAttribute("alt", t.alt),
        t.tooltiptext || e.setAttribute("title", t.alt),
        (e.width = 16),
        (e.height = 16),
        (e.className = "super40icon_icon_ie"),
        e)
      : null;
  }
  function _(e) {
    var t, i;
    if (e)
      for (t in SB_icons) {
        SB_icons.hasOwnProperty(t) &&
          (i = e.getElementById(SB_icons[t].id + "_img")) &&
          LP_addEventHandler(i, "click", SB_icons[t].clickfn);
      }
  }
  function p() {
    verbose && times;
  }
}
function update_title40(e, t) {
  if (!e) return !1;
  var e = e.getElementById("SB_titlebox_txt"),
    i = "";
  switch (t) {
    case "sites":
    case "never":
    case "formfill":
    case "generate":
    case "savesite":
      i = SB_icons[t].alt;
      break;
    case "zerostate":
      i = gs("What would you like to do?");
      break;
    case "delete":
      i = gs("Delete Site");
      break;
    case "deleteff":
      i = gs("Delete Formfill Profile");
      break;
    case "more":
      i = gs("More");
  }
  return i && LP_elt_set_text(e, i), !0;
}
function set_active_img40(e, t) {
  if (!e) return !1;
  var i,
    s,
    o,
    n = SB_icons[t],
    a,
    a,
    s,
    o,
    a;
  switch (t) {
    case "sites":
    case "never":
    case "formfill":
    case "generate":
    case "savesite":
      for (i in SB_icons) {
        SB_icons.hasOwnProperty(i) &&
          ((s = SB_icons[i].id + "_img"),
          (o = SB_icons[i].id + "_active"),
          i == t
            ? (a = e.getElementById(n.id + "_img")) && 0 <= a.className.indexOf(s) && (a.className = a.className.replace(s, o))
            : (a = e.getElementById(SB_icons[i].id + "_img")) && 0 <= a.className.indexOf(o) && (a.className = a.className.replace(o, s)));
      }
      break;
    default:
      for (i in SB_icons) {
        SB_icons.hasOwnProperty(i) &&
          ((s = SB_icons[i].id + "_img"), (o = SB_icons[i].id + "_active"), (a = e.getElementById(s))) &&
          (a.className = a.className.replace(o, s));
      }
  }
  return !0;
}
function reveal_real_icons(e) {
  for (var t in SB_icons) {
    var i = e.getElementById(SB_icons[t].id + "_img_ie"),
      t = e.getElementById(SB_icons[t].id + "_img");
    i && t && ((i.style.display = "none"), (t.style.display = "block"));
  }
  return !0;
}
"undefined" != typeof g_isie &&
  g_isie &&
  "undefined" != typeof reduxApp &&
  reduxApp.getState().settings.features.omar_ia &&
  delete SB_icons.formfill,
  "undefined" != typeof g_isie &&
    g_isie &&
    LP_addEventHandler(window, "load", function () {
      reveal_real_icons(document);
    });
