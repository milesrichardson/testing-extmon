window.waxFill_Zappos = function () {
  var e = document.querySelectorAll("select#ccMonth"),
    t = document.querySelectorAll("select#ccYear"),
    l = document.querySelectorAll("span#ccMonth"),
    n = document.querySelectorAll("span#ccYear");
  return (
    l.length > 0 &&
      e &&
      n.length > 0 &&
      t &&
      ((l = l[0].querySelectorAll(".a-dropdown-prompt")),
      (n = n[0].querySelectorAll(".a-dropdown-prompt")),
      (l.length > 0 || n.length > 0) &&
        ((l[0].innerText = e[0].options[e[0].selectedIndex].text), (n[0].innerText = t[0].options[t[0].selectedIndex].text))),
    !1
  );
};
