(() => {
  "use strict";
  const e = [
    { id: "dashlane_webauthn", path: "content/pageScripts/dashlane-webauthn-page-script.js" },
    { id: "dashlane_tiresias", path: "content/pageScripts/dashlane-tiresias-page-script.js" }
  ];
  !(function () {
    const t = e.map((e) => {
      const t = document.createElement("script");
      return (
        (t.src = (function (e) {
          if (
            !(function (e) {
              if ("undefined" == typeof chrome) return !1;
              const t = "runtime.getURL".split(".").reduce((e, t) => e?.[t], chrome);
              return Boolean(t);
            })()
          )
            throw new Error("No runtime.getURL support");
          return chrome.runtime.getURL(e);
        })(e.path)),
        (t.id = e.id),
        t
      );
    });
    let n = null;
    const r = () => {
      var e;
      const r = null !== (e = document.head) && void 0 !== e ? e : document.getElementsByTagName("head")[0];
      r &&
        (t.forEach((e) => {
          var t;
          r.insertBefore(e, null !== (t = r.childNodes[0]) && void 0 !== t ? t : null);
        }),
        null == n || n.disconnect(),
        (n = null));
    };
    (n = new MutationObserver(r)), n.observe(document.documentElement, { childList: !0, subtree: !0 }), r();
  })();
})();
