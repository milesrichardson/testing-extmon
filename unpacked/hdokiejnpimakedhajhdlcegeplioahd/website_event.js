var g_ipctarget = null,
  g_websiteeventtarget = null;
function forward_website_event_response(e) {
  for (var t = 0; t < parent.frames.length; t++)
    if (parent.frames[t].document.getElementById("lpwebsiteeventform") && "function" == typeof parent.frames[t].website_event_callback) {
      parent.frames[t].website_event_callback(e);
      break;
    }
}
(this.website_event = function () {
  var e = document.getElementById("eventtype").value,
    t = ("function" == typeof lpdbg && lpdbg("vault", "new vault got website event: " + e), "undefined" != typeof bg ? bg : getBG()),
    a,
    n = { cmd: e, url: t.get ? t.get("base_url") : t.base_url, callback: website_event_callback };
  switch (e) {
    case "refresh":
      (n.from = document.getElementById("eventdata1").value), (n.type = document.getElementById("eventdata2").value);
      break;
    case "logout":
    case "logoff":
    case "clearcache":
      break;
    case "keyweb2plug":
      (n.cmd = "web2plug"),
        (n.key = document.getElementById("eventdata1").value),
        (n.username = document.getElementById("eventdata2").value),
        (n.rsa = document.getElementById("eventdata3").value);
      break;
    case "checkmultifactorsupport":
      n.type = document.getElementById("eventdata1").value;
      break;
    case "setupsinglefactor":
      (n.type = document.getElementById("eventdata1").value),
        (n.username = document.getElementById("eventdata2").value),
        (n.password = document.getElementById("eventdata3").value),
        (n.silent = document.getElementById("eventdata5").value),
        "1" != document.getElementById("eventdata5").value &&
          g_websiteeventtarget &&
          g_websiteeventtarget.source.postMessage({ cmd: e, result: "working" }, g_websiteeventtarget.origin);
      break;
    case "rsadecrypt":
      (n.sharerpublickeyhex = document.getElementById("eventdata1").value),
        (n.sharekeyenchexsig = document.getElementById("eventdata2").value),
        (n.sharekeyenchex = document.getElementById("eventdata3").value),
        (n.sharekeyhex = document.getElementById("eventdata4").value);
      break;
    case "request_native_messaging":
      break;
    default:
      return void console.error("got unsupported website event on new vault: " + e);
  }
  (n.callback = this.website_event_callback), t.processCS(null, n, null);
}),
  (this.website_event_callback = function (e) {
    "function" == typeof lpdbg && lpdbg("vault", "new vault got website event callback: " + e.cmd),
      "checkmultifactorsupport" == e.cmd
        ? document.getElementById("lpwebsiteeventform")
          ? ((document.getElementById("eventdata4").value = e.type),
            (document.getElementById("eventdata3").value = e.result),
            g_websiteeventtarget && g_websiteeventtarget.source.postMessage(e, g_websiteeventtarget.origin))
          : forward_website_event_response(e)
        : "setupsinglefactor" == e.cmd
        ? document.getElementById("lpwebsiteeventform")
          ? ((document.getElementById("eventdata4").value = e.result),
            g_websiteeventtarget && g_websiteeventtarget.source.postMessage(e, g_websiteeventtarget.origin))
          : forward_website_event_response(e)
        : "ipcgotdata" == e.cmd && g_ipctarget.source.postMessage(e, g_ipctarget.origin);
  });
