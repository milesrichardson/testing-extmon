function lpshowmenudiv(e) {
  closelpmenus(e);
  var t = document.getElementById("lppopup" + e),
    l = document.getElementById("lp" + e),
    n,
    o,
    p,
    u,
    u;
  l &&
    t &&
    ((n = window.getComputedStyle(l, null)),
    (o = window.getComputedStyle(t, null)),
    (p = l.offsetLeft),
    (p -= 80) + (u = parseInt(o.getPropertyValue("width"))) > window.innerWidth - 25 && (p -= p + u - window.innerWidth + 25),
    (t.style.left = p + "px"),
    -1 != document.location.href.indexOf("&bottom=1")
      ? ((document.body.style.marginTop = "181px"),
        (document.body.style.backgroundPosition = "0 173"),
        (t.style.top = l.offsetTop - parseInt(o.getPropertyValue("height")) + "px"))
      : (t.style.top = l.offsetTop + n.getPropertyValue("height") + "px"),
    -1 != document.location.href.indexOf("&totp=1") && ((t.style.left = "10px"), (t.style.top = "60px"), (t.style.height = "139px")),
    "block" == t.style.display ? ((t.style.display = "none"), "function" == typeof slideup && slideup()) : (t.style.display = "block"),
    ("autofill" != e && "autologin" != e) ||
      (null != (u = document.getElementById(e + "tabsearchbox")) && void 0 !== u.focus && u.focus()));
}
function closelpmenus(e) {
  if ("undefined" != typeof lpgblmenus)
    for (var t = 0; t < lpgblmenus.length; t++)
      (null != e && lpgblmenus[t] == "lppopup" + e) ||
        !document.getElementById(lpgblmenus[t]) ||
        (document.getElementById(lpgblmenus[t]).style.display = "none");
}
var lpcustomEvent = document.createEvent("Event");
lpcustomEvent.initEvent("lpCustomEventMenu", !0, !0);
