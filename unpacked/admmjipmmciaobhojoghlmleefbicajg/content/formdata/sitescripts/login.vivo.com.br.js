window.waxFill = function () {
  let e = document.getElementById("passwordId_we_text"),
    n = new Event("focus", { view: window, bubbles: !0, cancelable: !0 });
  null !== e && e.dispatchEvent(n);
};
