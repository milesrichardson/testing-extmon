var t;
(self.GR_EXTENSION_ID = (null === (t = document.currentScript) || void 0 === t ? void 0 : t.getAttribute("data-ext-id")) || "unknown"),
  (self.GR_EXTENSION_SEND = function (t, e) {
    if (!t) throw new TypeError("cant be called without message");
    const n = document.createEvent("CustomEvent");
    n.initCustomEvent("external:" + t, !0, !0, e), document.dispatchEvent(n);
  });
