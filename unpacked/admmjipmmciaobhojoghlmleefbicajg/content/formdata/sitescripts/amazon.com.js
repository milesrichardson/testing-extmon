window.waxFill_Amazon = function () {
  var e = document.getElementById("ccMonth"),
    t = document.getElementById("ccYear"),
    n = document.getElementsByClassName("field-span pay-date-width")[0],
    d = n.getElementsByClassName("a-dropdown-prompt")[0],
    o = n.getElementsByClassName("a-dropdown-prompt")[1];
  return (d.innerText = e.options[e.selectedIndex].text), (o.innerText = t.options[t.selectedIndex].text), !1;
};
