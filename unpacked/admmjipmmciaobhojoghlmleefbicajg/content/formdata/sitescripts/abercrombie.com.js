!(function (e) {
  (e.waxFill_Abercrombie_Create_Input = function () {
    if (null === document.querySelector("#waxDate")) {
      const e = document.createElement("input");
      e.setAttribute("id", "waxDate"),
        e.setAttribute("type", "hidden"),
        document.querySelector(".billing-info").insertBefore(e, document.querySelector("payment-section"));
    }
  }),
    (e.waxFill_Abercrombie = function () {
      const e = document.querySelector("#waxDate"),
        t = document.querySelector("#expdate-0"),
        n = e.value;
      "" !== n && (t.value = n.slice(0, 2) + " / " + n.slice(-2));
    });
})(window);
