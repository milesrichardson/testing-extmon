function oninitchangepw() {}
function onshowchangepw() {
  var e = getBG(),
    t =
      (set_innertext(document.getElementById("changepwtld"), g_changepwtld),
      document.getElementById("changepwsites").contentWindow.document),
    n = (LP_decimate_children(t.body), t.createElement("link")),
    i =
      (n.setAttribute("rel", "stylesheet"),
      n.setAttribute("type", "text/css"),
      n.setAttribute("href", "general.css"),
      t.body.appendChild(n),
      t.createElement("table")),
    n = (i.setAttribute("cellspacing", "2"), (i.className = "stdtext"), e.getsites(g_changepwtld, !0, g_changepwexcludeid)),
    a = new Array(),
    d;
  for (d in n) a[a.length] = e.g_sites[d];
  a.sort(e.lp_sort_case_insensitive_name);
  for (var c = 0; c < a.length; c++) {
    var d = a[c].aid,
      s = "",
      l = (e.g_sites[d].group && 0 == e.g_sites[d].group.indexOf("Shared-") && (s = e.gs("(Shared Folder)")), e.g_sites[d].name),
      r = e.getusernamefromacct(e.g_sites[d]),
      r = ("" != r && (l += " (" + r + ")"), t.createElement("tr")),
      g = t.createElement("td"),
      o = (g.setAttribute("valign", "middle"), t.createElement("input")),
      o =
        (o.setAttribute("type", "checkbox"),
        (o.id = "aid" + d),
        o.setAttribute("name", "aid" + d),
        g.appendChild(o),
        r.appendChild(g),
        (g = t.createElement("td")),
        t.createElement("label"));
    o.setAttribute("for", "aid" + d), set_innertext(o, l + s), g.appendChild(o), r.appendChild(g), i.appendChild(r);
  }
  t.body.appendChild(i);
}
function onhidechangepw() {}
function dochangepw() {
  for (
    var e = getBG(),
      t = new Array(),
      n = document.getElementById("changepwsites").contentWindow.document.getElementsByTagName("input"),
      i = 0;
    i < n.length;
    i++
  )
    "checkbox" == n[i].type && n[i].checked && 0 == n[i].name.indexOf("aid") && (t[t.length] = n[i].name.substring(3));
  ("function" == typeof e.checkmultiplefolders && !e.checkmultiplefolders(t)) || (e.changePassword(g_changepwnewpw, t), closemole());
}
