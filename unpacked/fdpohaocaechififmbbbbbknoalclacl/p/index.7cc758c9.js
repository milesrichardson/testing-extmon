(() => {
  const e = self !== top;
  e && console.log(`%c[EXTENSION IN IFRAME] ${e}`, "background:#F92;color:#FFF6EE;font-style:italic;");
  window.setTimeout(() => {
    const e = document.getElementsByTagName("h1")[0];
    e && e.classList.add("show");
  }, 2e3);
  const t = (e) => {
    const t = window.location.origin || window.location.protocol + "//" + window.location.host;
    if (e) {
      let o;
      try {
        o = new URL(e, t);
      } catch (e) {
        return void ("ReferenceError" !== e.name && alert(`Unexpected _cleanPath error: ${e.name}`));
      }
      if (o.origin === t) return o.pathname + o.search + o.hash;
    }
  };
  if (e) {
    const e = document.getElementById("content");
    for (; e.firstChild; ) e.removeChild(e.lastChild);
    const t = document.createElement("h1");
    (t.textContent = "This page cannot be accessed inside an iframe"), e.appendChild(t);
  } else
    (() => {
      const e = new URLSearchParams(window.location.search),
        o = t(e.get("p")) || "/capture.html";
      window.location.href = o;
    })();
})();
//# sourceMappingURL=index.7cc758c9.js.map
