!(function (e) {
  (e.waxFill_Ifixit_Create_Input = function () {
    if (null === document.querySelector("#waxDate")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxDate"), e.setAttribute("type", "hidden");
      const t = document.querySelector("#credit-card-form").lastChild;
      t.parentNode.insertBefore(e, t.nextSibling);
    }
  }),
    (e.waxFill_Ifixit = function () {
      const e = document.querySelector("#waxDate").value;
      "" !== e &&
        (document.querySelector("#card-exp-month [title='" + e.substr(0, 2) + "']").click(),
        document.querySelector("#card-exp-year [title='20" + e.substr(3, 2) + "']").click());
    });
})(window);
