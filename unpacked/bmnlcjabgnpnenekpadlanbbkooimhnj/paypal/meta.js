(() => {
  let a = !1,
    o = null;
  window.paypal && window.paypal.version && ((a = !0), (o = { version: window.paypal.version })),
    window.postMessage({ ok: a, messageId: "honey:fetchPayPalMeta", paypal: o }, window.location.origin);
})();
