window.waxFill_Qvc = function () {
  const e = document.querySelector("#waxDate");
  if (null === e) {
    const e = document.createElement("input");
    e.setAttribute("id", "waxDate"),
      e.setAttribute("type", "hidden"),
      document.querySelector("#divCreditCardLogos").insertBefore(e, document.querySelector("#divCreditCardLogos img"));
  } else if ("" !== e.value) {
    const t = e.value.substr(0, 3) + 20 + e.value.substr(3, 2);
    document.querySelector("#selNewCard [selected]").removeAttribute("selected"),
      document.querySelector("[value='" + t + "']").setAttribute("selected", "selected"),
      (document.querySelector("#selNewCard").value = t);
  }
  return !1;
};
