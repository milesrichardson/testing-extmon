!(function (e) {
  (e.waxFill_Marksandspencer_create_input = function () {
    if (null === document.querySelector("#waxYear")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxYear"), e.setAttribute("type", "hidden");
      const t = document.querySelector("#addCardDetailsInPage");
      t.parentNode.insertBefore(e, t.nextSibling);
    }
  }),
    (e.waxFill_Marksandspencer = function () {
      const e = document.querySelector("#waxYear");
      document.querySelector("#expiryYear").value = e.value.substring(2, 4);
    });
})(window);
