!(function (e) {
  (e.waxFill_Uniqlo_create_input = function () {
    if (null === document.querySelector("#waxDate")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxDate"), e.setAttribute("type", "hidden");
      const t = document.querySelector("#dwfrm_billing").lastChild;
      t.parentNode.insertBefore(e, t.nextSibling);
    }
  }),
    (e.waxFill_Uniqlo = function () {
      const e = document.querySelector("#waxDate").value.split("/"),
        t = e[0],
        n = e[1] - document.querySelectorAll(".year li")[1].textContent.substring(2, 4) + 1;
      return document.querySelectorAll(".month li")[parseInt(t)].click(), document.querySelectorAll(".year li")[n].click(), !1;
    });
})(window);
