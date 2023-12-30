(() => {
  "use strict";
  const e = "checkout:action:background",
    n = "checkoutGetSetting",
    t = "iFrameOriginUrl";
  function s(e, n, t) {
    const s = t && t.ignoreResponse;
    return new Promise((o, r) => {
      const c = { content: JSON.stringify(n), dest: t, service: "messages:cs", type: e };
      s
        ? (window.chrome.runtime.sendMessage(c), o())
        : window.chrome.runtime.sendMessage(c, null, (n) => {
            if (window.chrome.runtime.lastError) {
              const e = new Error(
                `Honey Checkout Content: Chrome messaging error in content.send(): ${window.chrome.runtime.lastError.message}`
              );
              (e.sentMessage = c), r(e);
            } else if (!n || n.noListeners) {
              const n = new Error(`Honey Checkout Content: No listeners for message of type ${e} in content.send()`);
              (n.sentMessage = c), r(n);
            } else if (n.success) o(n.data);
            else {
              const e = n && n.error,
                t = new Error(e && e.message);
              (t.sentMessage = c), e && ((t.data = e.data), (t.stack = `${t.stack || ""}${e.stack || ""}`)), r(t);
            }
          });
    }).catch((e) => {
      if (!s) throw e;
    });
  }
  var o = function (e, n, t, s) {
    return new (t || (t = Promise))(function (o, r) {
      function c(e) {
        try {
          a(s.next(e));
        } catch (e) {
          r(e);
        }
      }
      function i(e) {
        try {
          a(s.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        var n;
        e.done
          ? o(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(c, i);
      }
      a((s = s.apply(e, n || [])).next());
    });
  };
  !(function () {
    o(this, void 0, void 0, function* () {
      const o = yield (function (n, t = {}, o = {}) {
          return s(e, { action: n, data: t }, Object.assign(Object.assign({}, o), { background: !0 }));
        })(n, { checkoutSettingKey: t }),
        r = document.createElement("script");
      (r.src = window.chrome.runtime.getURL("/checkoutPaypal/merchantSPBResponders.js")),
        r.setAttribute("data-iframeurl", o),
        (document.head || document.documentElement).appendChild(r);
    });
  })();
})();
