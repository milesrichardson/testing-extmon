window.waxFill_Zara = function () {
  const e = document.querySelector("#waxMonth"),
    t = document.querySelector("#waxYear");
  if (null === e && null === t) {
    const e = document.createElement("input");
    e.setAttribute("id", "waxMonth"),
      e.setAttribute("type", "hidden"),
      document.querySelector("#paymentOthers li").insertBefore(e, document.querySelector("#numCard"));
    const t = document.createElement("input");
    t.setAttribute("id", "waxYear"),
      t.setAttribute("type", "hidden"),
      document.querySelector("#paymentOthers li").insertBefore(t, document.querySelector("#numCard"));
  } else if ("" !== e.value && "" !== t) {
    const l = e.value - 1,
      n = t.value - document.querySelectorAll("#year .selectChildCont li input")[0].value;
    document.querySelectorAll("#month span.text")[0].click(),
      document.querySelectorAll("#month .selectChildCont li")[l].click(),
      document.querySelectorAll("#year span.text")[0].click(),
      document.querySelectorAll("#year .selectChildCont li")[n].click();
  }
  return !1;
};
