!(function (e) {
  (e.waxFill_Footlocker_create_input = function () {
    if (null === document.querySelector("#waxDate")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxDate"), e.setAttribute("type", "hidden");
      const t = document.querySelector("#Payment").lastChild;
      t.parentNode.insertBefore(e, t.nextSibling);
    }
  }),
    (e.waxFill_Footlocker = function () {
      const e = document.querySelector("#waxDate");
      if (null !== e && "" !== e.value) {
        const n = parseInt(e.value.substr(0, 2)),
          c = parseInt(e.value.substr(3, 2)) - parseInt(document.querySelector("#select_expiryYear option:nth-child(2)").value) + 2001;
        function t(e, t) {
          const n = document.activeElement;
          e.dispatchEvent(new FocusEvent("focusin", { bubbles: !1, cancelable: !0 })),
            e.dispatchEvent(new FocusEvent("focus", { bubbles: !1, cancelable: !1 })),
            e.onfocus && e.onfocus(),
            (e.selectedIndex = t),
            e.dispatchEvent(new Event("change", { bubbles: !0, cancelable: !0 })),
            e.onchange && e.onchange(),
            e.dispatchEvent(new FocusEvent("focusout", { bubbles: !1, cancelable: !0 })),
            e.dispatchEvent(new FocusEvent("blur", { bubbles: !1, cancelable: !1 })),
            e.onblur && e.onblur(),
            n && n.focus();
        }
        t(document.querySelector("#select_expiryMonth"), n), t(document.querySelector("#select_expiryYear"), c);
      }
    });
})(window);
