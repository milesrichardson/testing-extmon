try {
  !(function (e, t, r, n = document, a = !1, c = !1, o, i) {
    const s = e,
      l = n.documentElement;
    if (a) {
      const e = n.createElement("link");
      (e.href = s),
        (e.rel = "preload"),
        (e.as = "script"),
        (e.onload = () => {
          e.remove();
        }),
        l.prepend(e);
    }
    const m = n.createElement("script");
    (m.async = !1),
      (m.defer = !1),
      (m.src = s),
      (m.type = "text/javascript"),
      t && m.setAttribute("data-ext-id", t),
      r && m.setAttribute("data-ext-version", r),
      c && m.setAttribute("data-ext-minimal", "true"),
      (m.onload = () => {
        null == o || o(), m.remove();
      }),
      (m.onerror = () => {
        null == i || i();
      }),
      l.prepend(m);
  })(chrome.runtime.getURL("src/js/Grammarly-overleafInjectedScript.js"), chrome.runtime.id);
} catch (e) {}
