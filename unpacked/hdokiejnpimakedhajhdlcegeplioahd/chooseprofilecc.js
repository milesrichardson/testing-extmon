function oninitchooseprofilecc() {}
function onshowchooseprofilecc() {
  var e = getBG();
  document.getElementById("alwayschooseprofilecc").checked = e.reduxApp.getPreference("alwayschooseprofilecc");
  for (var t = 1, c, i; t <= 2; t++) {
    switch (t) {
      case 1:
        c = "profile";
        break;
      case 2:
        c = "cc";
    }
    var i = 1 === t ? e.reduxApp.getPreference("profileffid") : e.reduxApp.getPreference("ccffid"),
      r = !1,
      l = document.getElementById(c).contentWindow.document,
      o = (LP_decimate_children(l.body), l.createElement("link")),
      o =
        (o.setAttribute("rel", "stylesheet"),
        o.setAttribute("type", "text/css"),
        o.setAttribute("href", "general.css"),
        l.body.appendChild(o),
        l.createElement("form")),
      f = ((o.id = "radioform"), l.createElement("table")),
      n,
      d,
      a,
      s,
      m,
      m;
    for (n in (f.setAttribute("cellspacing", "2"), e.g_formfills)) {
      e.check_ident_ffid(e.g_formfills[n].ffid) &&
        ((1 == t && 0 == e.g_formfills[n].profiletype) || (2 == t && "" != e.g_formfills[n].ccnum)) &&
        (e.g_formfills[n].ffid == i ? (r = d = !0) : (d = !1),
        (a = l.createElement("tr")),
        (s = l.createElement("td")).setAttribute("valign", "middle"),
        (m = l.createElement("input")).setAttribute("type", "radio"),
        (m.id = c + e.g_formfills[n].ffid),
        m.setAttribute("name", c),
        m.setAttribute("value", e.g_formfills[n].ffid),
        d && m.setAttribute("checked", "checked"),
        s.appendChild(m),
        a.appendChild(s),
        (s = l.createElement("td")),
        (m = l.createElement("label")).setAttribute("for", c + e.g_formfills[n].ffid),
        set_innertext(m, e.g_formfills[n].decprofilename),
        s.appendChild(m),
        a.appendChild(s),
        f.appendChild(a));
    }
    o.appendChild(f),
      (l.body.style.paddingLeft = 0),
      (l.body.style.marginLeft = 0),
      l.body.appendChild(o),
      r || (l.getElementsByName(c)[0].checked = !0);
    for (var p = l.getElementsByName(c), n = 0; n < p.length; n++)
      if (p[n].checked) {
        p[n].focus();
        break;
      }
  }
  resize_panel();
}
function onhidechooseprofilecc() {}
function dochooseprofilecc() {
  for (var e = getBG(), t = new Array(), c = 1, i; c <= 2; c++) {
    switch (c) {
      case 1:
        i = "profile";
        break;
      case 2:
        i = "cc";
    }
    for (var r, l = document.getElementById(i).contentWindow.document.getElementsByName(i), o = 0; o < l.length; o++)
      if (l[o].checked) {
        t[i] = l[o].value;
        break;
      }
  }
  e.fillform(t.profile, !1, g_tabid, t.cc), closemole();
}
