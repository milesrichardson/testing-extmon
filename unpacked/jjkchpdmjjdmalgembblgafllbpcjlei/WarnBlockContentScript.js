var g_domEvent = new Object();
g_domEvent.originalTarget = document;
var g_paramid = null;
HandleWBPage();

function onResourceReady(response) {
  try {
    var warnblockjs = null;
    var wbpagedata = null;
    var resjson = null;
    var topmost = true;
    warnblockjs = response.warnblockjs;
    wbpagedata = response.wbpagedata;
    resjson = response.resources;
    topmost = response.topmost;

    if (warnblockjs === null || wbpagedata === null || resjson === null) {
      return;
    }

    var logo = document.getElementsByTagName("img")[0];
    if (logo != null) {
      logo.setAttribute("src", chrome.extension.getURL("Resources/mcafee.gif"));
    }

    if (topmost) {
      var declineid = document.getElementById("decline_id");
      if (declineid != null) declineid.value = g_paramid;

      var acceptid = document.getElementById("accept_id");
      if (acceptid != null) acceptid.value = g_paramid;

      var declineform = document.getElementById("declineResultForm");
      var acceptform = document.getElementById("acceptResultForm");
      if (declineform != null) declineform.action = "wbresult.html";
      if (acceptform != null) acceptform.action = "wbresult.html";
    }
    eval(warnblockjs);
    if (topmost) annotate(g_domEvent, wbpagedata, resjson);
    else showWarning(g_domEvent, wbpagedata, resjson);
  } catch (e) {
    alert(e.description);
  }
  return;
}

function HandleWBPage() {
  var url = document.URL;
  if (url.search(/blockpagegc.html|warnpromptpagegc.html|subframeblockpage.html/i) == -1) return;

  var query = null;
  query = window.location.search;
  if (query === null) return;
  g_paramid = getQueryVariableFromQuery(query.substring(1), "id");

  if (window.location === window.parent.location) {
    chrome.extension.sendRequest(
      {
        command: "get warnblock data",
        url: url,
        topmost: url.search(/subframeblockpage.html/i) == -1 ? true : false,
        querystring: g_paramid
      },
      onResourceReady
    );
  }
}

function getQueryVariableFromQuery(query, variable) {
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return unescape(pair[1]);
    }
  }
  return "";
}
