function getScrollbarWidth() {
  const e = document.createElement("div");
  (e.style.visibility = "hidden"), (e.style.overflow = "scroll"), (e.style.msOverflowStyle = "scrollbar"), document.body.appendChild(e);
  const t = document.createElement("div");
  e.appendChild(t);
  const n = e.offsetWidth - t.offsetWidth;
  return e.parentNode.removeChild(e), n;
}
function inject(e) {
  var t = document.createElement("div");
  t.innerHTML = e;
  var n = t.children[0];
  t.removeChild(n),
    document.body.appendChild(n),
    n.addEventListener("click", function () {
      document.body.removeChild(n),
        chrome.runtime.sendMessage({ "open-with-kami": url }, function (e) {
          window.location = e;
        });
    }),
    -1 != navigator.userAgent.indexOf("Edg/")
      ? ((n.style.top = "45px"), (n.style.right = `${getScrollbarWidth() + 20}px`))
      : (n.style = `right: ${getScrollbarWidth() + 140}px;`);
}
var embed = document.getElementsByTagName("embed");
if (embed.length && ("application/pdf" === embed[0].type || "application/x-google-chrome-pdf" === embed[0].type)) {
  var src = embed[0].attributes.src,
    url = document.location.toString();
  null == src ||
    (src.value !== url && "about:blank" != src.value) ||
    chrome.runtime.sendMessage("inject-open-with-kami-button", function (e) {
      inject(e);
    });
}
