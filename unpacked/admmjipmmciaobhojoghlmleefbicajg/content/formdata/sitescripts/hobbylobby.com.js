!(function (e) {
  (e.waxFill_Hobbylobby_create_input = function () {
    if (null === document.querySelector("#waxDate")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxDate"), e.setAttribute("type", "hidden");
      const t = document.querySelector("#checkout-billing-form").lastChild;
      t.parentNode.insertBefore(e, t.nextSibling);
    }
  }),
    (e.waxFill_Hobbylobby = function () {
      var e = document.querySelector("#waxDate").value.split("/"),
        t = e[0],
        l = document.querySelectorAll(".year ul li")[0].querySelector("a").text,
        r = e[1] - l.substring(2, 4);
      return (
        document.querySelectorAll(".month ul li")[parseInt(t)].querySelector("a").click(),
        document.querySelectorAll(".year ul li")[r].querySelector("a").click(),
        !1
      );
    });
})(window);
