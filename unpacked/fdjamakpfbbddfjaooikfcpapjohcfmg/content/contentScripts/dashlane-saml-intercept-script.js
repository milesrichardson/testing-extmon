(() => {
  "use strict";
  (() => {
    const e = (e) => {
      var t;
      const o = document.querySelector(
        'form[action="http://localhost:4000/saml/callback"], form[action="https://sso.nitrostaging.dashlane.com/saml/callback"], form[action="https://sso.nitro.dashlane.com/saml/callback"]'
      );
      if (o) {
        const n = null === (t = o.children.SAMLResponse) || void 0 === t ? void 0 : t.value;
        if (!n) return;
        o.remove(),
          null == e || e.disconnect(),
          (function (e, t) {
            if (
              !(function (e) {
                if ("undefined" == typeof chrome) return !1;
                const t = "runtime.sendMessage".split(".").reduce((e, t) => e?.[t], chrome);
                return Boolean(t);
              })()
            )
              throw new Error("No runtime.sendMessage support");
            chrome.runtime.sendMessage(e, (e) => {
              if (chrome.runtime.lastError) {
                const e = chrome.runtime.lastError.message ?? "Unknown chrome.runtime.lastError";
                throw new Error(`runtime/sendMessage: ${e}`);
              }
            });
          })({ type: "SamlAssertionIntercepted", saml: n });
      }
    };
    e();
    const t = new MutationObserver((t, o) => {
      for (const n of t) "childList" === n.type && e(o);
    });
    t.observe(window.document, { childList: !0, subtree: !0 }),
      setTimeout(() => {
        t.disconnect();
      }, 1e3);
  })();
})();
