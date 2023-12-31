var g_toolstripid = get_random(0, 999999999),
  g_moles = {},
  g_curmole = null,
  g_newmole = null,
  g_changepwnewpw = "",
  g_changepwtld = "",
  g_changepwexcludeid = 0,
  g_browseraction = -1 != document.location.href.indexOf("?browseraction=1"),
  g_yubikey = -1 != document.location.href.indexOf("&yubikey=1"),
  g_googleauth = -1 != document.location.href.indexOf("&googleauth=1"),
  g_microsoftauth = -1 != document.location.href.indexOf("&microsoftauth=1"),
  g_outofband = -1 != document.location.href.indexOf("&outofband=1"),
  g_securityquestion = -1 != document.location.href.indexOf("&securityquestion=1"),
  g_sesame = -1 != document.location.href.indexOf("&sesame=1"),
  g_grid = -1 != document.location.href.indexOf("&grid=1"),
  g_generate = -1 != document.location.href.indexOf("&generate=1"),
  g_chooseprofilecc = -1 != document.location.href.indexOf("&chooseprofilecc=1"),
  g_changepw = -1 != document.location.href.indexOf("&changepw=1"),
  g_alert = -1 != document.location.href.indexOf("&alert=1"),
  g_generate_url = "",
  g_generate_found = !1,
  g_tabid = null,
  matches = document.location.href.match(/&tabid=(\d+)/),
  g_ismenu = (matches && (g_tabid = matches[1]), !1);
function onLoad(e) {
  if ((lpdbg("toolstrip", "loading toolstrip"), e || g_alert || ("undefined" != typeof safari && void 0 !== safari.extension.globalPage))) {
    var t;
    for (t in (g_generate &&
      ((g_generate_url = getBG().g_generate_url),
      "" != getBG().g_generate_url && (getBG().g_generate_url_prev = getBG().g_generate_url),
      (getBG().g_generate_url = "")),
    g_changepw &&
      ((g_changepwnewpw = getBG().g_changepwnewpw),
      (g_changepwtld = getBG().g_changepwtld),
      (g_changepwexcludeid = void 0 !== getBG().g_changepwexcludeid ? getBG().g_changepwexcludeid : 0)),
    L("TS[" + g_toolstripid + "] : loaded"),
    g_ischrome && sendBG({ cmd: "getloginstate" }),
    addmole((g_curmole = "lpbutton")),
    addmole("lpnotify", 80, oninitnotify, onshownotify),
    addmole("lpgeneratecont", 300, oninitgenerate, onshowgenerate, onhidegenerate),
    addmole("lpchooseprofilecc", 300, oninitchooseprofilecc, onshowchooseprofilecc, onhidechooseprofilecc),
    addmole("lpchangepw", 300, oninitchangepw, onshowchangepw, onhidechangepw),
    addmole("lpyubikey", 350, oninityubikey, onshowyubikey, onhideyubikey),
    addmole("lpgoogleauth", 350, oninitgoogleauth, onshowgoogleauth, onhidegoogleauth),
    addmole("lpoutofband", 350, oninitoutofband, onshowoutofband, onhideoutofband),
    addmole("lpsecurityquestion", 350, oninitsecurityquestion, onshowsecurityquestion, onhidesecurityquestion),
    addmole("lpsesame", 350, oninitsesame, onshowsesame, onhidesesame),
    addmole("lpgrid", 350, oninitgrid, onshowgrid, onhidegrid),
    g_moles))
      ("lpbutton" == t && !g_browseraction) || $("#" + t).hide(), "function" == typeof g_moles[t].initfunc && g_moles[t].initfunc();
    g_browseraction &&
      (lpdbg("toolstrip", "detected browser action"),
      g_yubikey
        ? ((document.title = gs("YubiKey Multifactor Authentication")), openmole("lpyubikey"))
        : g_googleauth
        ? ((document.title = gs("Google Authenticator Multifactor Authentication")),
          g_microsoftauth && (document.title = gs("Microsoft Authenticator Multifactor Authentication")),
          openmole("lpgoogleauth"))
        : g_outofband
        ? ((document.title = gs("Multifactor Authentication")), openmole("lpoutofband"))
        : g_securityquestion
        ? ((document.title = gs("Security Question Multifactor Authentication")), openmole("lpsecurityquestion"))
        : g_sesame
        ? ((document.title = gs("Sesame Multifactor Authentication")), openmole("lpsesame"))
        : g_grid
        ? ((document.title = gs("LastPass Grid Multifactor Authentication")), openmole("lpgrid"))
        : g_generate
        ? ((document.title = gs("Generate Secure Password")), openmole("lpgeneratecont"))
        : g_chooseprofilecc
        ? ((document.title = gs("Choose Profile and Credit Card")), openmole("lpchooseprofilecc"))
        : g_changepw
        ? ((document.title = gs("Change Password")), openmole("lpchangepw"))
        : null != getBG() &&
          null != getBG().g_badgedata &&
          (lpdbg("toolstrip", "have badge data"),
          receiveBG(getBG().g_badgedata),
          setTimeout(function () {
            getBG().clear_badge();
          }, 100))),
      toolstrip_loaded();
  } else
    get_data(g_changepw ? "toolstripchangepw" : "toolstrip", function () {
      onLoad(!0);
    });
}
var g_closed = !1;
function onUnload() {
  (g_closed = !0), g_curmole && "function" == typeof g_moles[g_curmole].hidefunc && g_moles[g_curmole].hidefunc();
}
function sendBG(e) {
  try {
    var t = getBG();
    if (t) return L("TS -> BG : cmd=" + e.cmd), t.receiveTS(g_toolstripid, e);
    L("TS -> BG : FAILED");
  } catch (e) {
    L("TS -> BG : FAILED error=" + e);
  }
  return null;
}
function receiveBG(e) {
  if ((lpdbg("toolstrip", "received from bg"), void 0 === e.cmd)) L("BG -> TS : INVALIDMSG");
  else
    switch ((L("BG -> TS : " + e.cmd), e.cmd)) {
      case "login":
        $("#lploggedin").show(), $("#lplogin").hide();
        break;
      case "logout":
      case "logoff":
        $("#lploggedin").hide(), $("#lplogin").show();
        break;
      case "genpw":
        (document.title = gs("Generate Secure Password")), openmole("lpgeneratecont");
        break;
      case "chooseprofilecc":
        (document.title = gs("Choose Profile and Credit Card")), openmole("lpchooseprofilecc");
        break;
      case "changepw":
        (g_changepwnewpw = e.newpw),
          (g_changepwtld = e.tld),
          (g_changepwexcludeid = void 0 !== e.excludeid ? e.excludeid : 0),
          (document.title = gs("Change Password")),
          openmole("lpchangepw");
        break;
      case "yubikey":
        (document.title = gs("YubiKey Multifactor Authentication")), openmole("lpyubikey");
        break;
      case "googleauth":
        (document.title = gs("Google Authenticator Multifactor Authentication")), openmole("lpgoogleauth");
        break;
      case "outofband":
        (document.title = gs("Multifactor Authentication")), openmole("lpoutofband");
        break;
      case "securityquestion":
        (document.title = gs("Security Question Multifactor Authentication")), openmole("lpsecurityquestion");
        break;
      case "sesame":
        (document.title = gs("Sesame Multifactor Authentication")), openmole("lpsesame");
        break;
      case "notification":
        lpdbg("toolstrip", "got notification");
        var t = e.type;
        (0 == getBG().lpGetPref("showNotifications", 1) && "error" != t && "upgrade" != t && "alert" != t) ||
          (lpdbg("toolstrip", "opening lpnotify mole"), openmole("lpnotify"));
        break;
      default:
        return void L("BG -> TS : INVALIDMSG");
    }
}
function addmole(e, t, o, n, l) {
  g_moles[e] = { height: t, initfunc: o, showfunc: n, hidefunc: l };
}
function hidemenu() {
  $("#menucontainer").hide();
}
function hidemoles() {
  var e;
  for (e in g_moles) ("lpbutton" == e && !g_browseraction) || $("#" + e).hide();
}
function closemole() {
  g_browseraction
    ? g_ismenu || "lpnotify" == g_curmole || "lpchangepw" == g_curmole
      ? (setTimeout(function () {
          window.close();
        }, 0),
        setTimeout(function () {
          window.close();
        }, 1e3),
        setTimeout(function () {
          window.close();
        }, 1e4))
      : g_yubikey || g_googleauth || g_outofband || g_securityquestion
      ? setTimeout(function () {
          getBG().closecurrenttab("lp_toolstrip.html");
        }, 0)
      : g_closed ||
        ((g_closed = !0),
        setTimeout(function () {
          getBG().closecurrenttab(-1 != document.location.href.indexOf("mpwchange.html") ? "mpwchange.html" : "");
        }, 0))
    : ($("#body").css("background", ""), (g_newmole = null));
}
function openmole(e) {
  var t, o, o;
  lpdbg("toolstrip", "opening mole " + e),
    (g_browseraction ? hidemoles : closemole)(),
    $("#content").show(),
    "lpbutton" == (g_newmole = e)
      ? ($("#lpbutton").show(), "function" == typeof g_moles.lpbutton.showfunc && g_moles.lpbutton.showfunc())
      : ("lpgeneratecont" == e &&
          (LP_decimate_children(document.getElementById("lpgeneratecont")),
          ((t = document.createElement("div")).id = "genheader"),
          ((o = document.createElement("div")).id = "gentitle"),
          set_innertext(o, gs("Generate")),
          t.appendChild(o),
          document.getElementById("lpgeneratecont").appendChild(t),
          g_generate ||
            (((t = document.createElement("div")).id = "backrow"),
            (t.className = "backgen"),
            t.appendChild(document.createElement("span")),
            t.appendChild(document.createTextNode(gs("BACK"))),
            document.getElementById("lpgeneratecont").appendChild(t)),
          document.getElementById("lpgeneratecont").appendChild(createGenerateHtml(document, !0, !0, !0)),
          stylize_generate_html(document),
          stylize_ghetto_meter(document, METER_WIDTH),
          ((o = document.createElement("link")).rel = "stylesheet"),
          (o.type = "text/css"),
          (o.href = "popupfilltab.css"),
          (o.id = "popupfilltab_css"),
          document.body.appendChild(o),
          setup_generate_handlers(),
          populate_usernames(),
          g_pointer_stack.push(g_pointer),
          g_ids.push(e),
          (g_pointer = null),
          $("#backrow").click(function (e) {
            $("#popupfilltab_css").remove(),
              $("#lpgeneratecont").hide(),
              $("#menucontainer").show(),
              (document.getElementById("lpgenerate").style.margin = "8px"),
              goback();
          }),
          setTimeout(function () {
            create_combo("password", new Array(), !0, document),
              repopulate_combo("password", getBG().g_genpws),
              (document.getElementById("password_button").style.left = "200px"),
              (document.getElementById("password_button").style.padding = "0px"),
              (document.getElementById("password_button").style.top = "75px");
          }, 100),
          resize_generate()),
        lpdbg("toolstrip", "not lpbutton"),
        "lpbutton" == g_curmole
          ? ($("#lpbutton").hide(),
            "function" == typeof g_moles.lpbutton.hidefunc && g_moles.lpbutton.hidefunc(),
            g_ischrome && !g_isfirefoxwebext
              ? getBG().get_selected_tab(null, function (e) {
                  getBG().setcurrenttabid(e.id), getBG().setcurrenturl(getBG().gettaburl(e)), g_browseraction && toolstrip_expanded();
                })
              : toolstrip_expanded())
          : (lpdbg("toolstrip", "curr is not not lpbutton"),
            g_browseraction && (lpdbg("toolstrip", "is browser action"), toolstrip_expanded())));
}
function toolstrip_expanded() {
  lpdbg("toolstrip", "toolstrip expanded"),
    (g_curmole = g_newmole),
    (g_newmole = null),
    "function" == typeof g_moles[g_curmole].showfunc && (lpdbg("toolstrip", "calling showfunc"), g_moles[g_curmole].showfunc()),
    $("#" + g_curmole).show();
}
function toolstrip_loaded() {
  getBG().allowmultifactortrust ||
    ((document.getElementById("lptrustyubi").style.display = "none"),
    (document.getElementById("lp_docwrite_lp_toolstrip30").style.display = "none"),
    (document.getElementById("lptrustgoogleauth").style.display = "none"),
    (document.getElementById("lp_docwrite_lp_toolstrip37").style.display = "none"),
    (document.getElementById("lptrustoutofband").style.display = "none"),
    (document.getElementById("lp_docwrite_lp_toolstrip62").style.display = "none"),
    (document.getElementById("lptrustsecurityquestion").style.display = "none"),
    (document.getElementById("lp_docwrite_lp_toolstrip56").style.display = "none"),
    (document.getElementById("lptrustsesame").style.display = "none"),
    (document.getElementById("lp_docwrite_lp_toolstrip43").style.display = "none"),
    (document.getElementById("lptrustgrid").style.display = "none"),
    (document.getElementById("lp_docwrite_lp_toolstrip49").style.display = "none")),
    getBG().hidemultifactordisable &&
      ((document.getElementById("lostkey").style.display = "none"),
      (document.getElementById("googleauthlostkey").style.display = "none"),
      (document.getElementById("sesamelostkey").style.display = "none"),
      (document.getElementById("lostgrid").style.display = "none")),
    g_googleauth && g_microsoftauth
      ? ($("#googdesc").hide(),
        $("#lp_docwrite_lp_toolstrip39").hide(),
        $("#microsoftdesc").show(),
        $("#lp_docwrite_lp_toolstrip40").show(),
        $("#googtitle").hide(),
        $("#googleauthlogo").hide())
      : g_googleauth &&
        ($("#microsoftdesc").hide(), $("#lp_docwrite_lp_toolstrip40").hide(), $("#microsofttitle").hide(), $("#microsoftauthlogo").hide());
}
