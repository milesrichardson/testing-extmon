export function addToPage(e, t) {
  if (null !== document.getElementById(t)) return;
  const d = document.createElement("script");
  (d.type = "text/javascript"),
    (d.defer = !0),
    (d.id = t),
    d.appendChild(document.createTextNode(decodeURIComponent(`(${e})();`))),
    (document.head || document.documentElement).appendChild(d);
}
