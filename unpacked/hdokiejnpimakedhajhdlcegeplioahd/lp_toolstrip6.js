sr(document, "notifyyesbtn", "value", "Yes"),
  sr(document, "notifynobtn", "value", "No"),
  set_innertext(document.getElementById("sitelabel"), gs("Name:")),
  set_innertext(document.getElementById("usernamelabel"), gs("Username:")),
  set_innertext(document.getElementById("notifyseccheck"), gs("Open Security Challenge")),
  (document.getElementById("disables").style.display = "block"),
  document.getElementById("notifyseccheck").addEventListener("click", function (e) {
    return (
      "hacked" == g_notifydata.alerttype
        ? getBG().dopwchange(g_notifydata.aid)
        : 1 == g_notifydata.pwch
        ? getBG().editAid(g_notifydata.aid, null, null, 1)
        : getBG().openseccheck(),
      closemole(),
      e.preventDefault(),
      !1
    );
  }),
  set_innertext(document.getElementById("disablealertsite"), gs("Disable alert for this site")),
  set_innertext(document.getElementById("disablealertall"), gs("Disable for all sites")),
  document.getElementById("disablealertsite").addEventListener("click", function () {
    return getBG().disablesitealert(g_notifydata.aid), closemole(), !1;
  }),
  document.getElementById("disablealertall").addEventListener("click", function () {
    return getBG().disableallalerts(), closemole(), !1;
  });
