!(function (e) {
  (e.waxFill_Hautelook_create_input = function () {
    if (null === document.querySelector("#waxDate")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxDate"), e.setAttribute("type", "hidden");
      const t = document.querySelector(".checkout-page__edit-credit-card form").lastChild;
      t.parentNode.insertBefore(e, t.nextSibling);
    }
  }),
    (e.waxFill_Hautelook = function () {
      const e = document.querySelector("#waxDate").value.split("/"),
        t = e[0];
      let l = e[1];
      (l = `20${l}`), (document.querySelectorAll(".form-select__text")[1].textContent = l);
      const n = document.querySelectorAll(".form-select__select")[0].children;
      let o = null;
      for (let e = 0; e < n.length; e++)
        if (n[e].value === t) {
          o = n[e].textContent;
          break;
        }
      return (document.querySelectorAll(".form-select__text")[0].textContent = o), !1;
    });
})(window);
