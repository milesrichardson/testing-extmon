var lpembed, pplastpass_listener;
"undefined" != typeof g_dopplastpass &&
  g_dopplastpass &&
  ((lpembed = document.createElement("embed")).setAttribute("name", "pplastpass"),
  lpembed.setAttribute("id", "pplastpass"),
  lpembed.setAttribute("width", "0"),
  lpembed.setAttribute("height", "0"),
  lpembed.setAttribute("src", "pplastpass.nmf"),
  lpembed.setAttribute("type", "application/x-pnacl"),
  document.getElementById("pplastpass_listener").appendChild(lpembed),
  (pplastpass_listener = document.getElementById("pplastpass_listener"))) &&
  (pplastpass_listener.addEventListener("load", pplastpass_load, !0),
  pplastpass_listener.addEventListener("message", pplastpass_message, !0));
