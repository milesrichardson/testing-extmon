!(function (n) {
  if (!"##REPLACE_STRING_FOR_BROWSER##"()) return;
  let t = "";
  (n.waxMain = function () {
    let n = document.getElementById("MainContent_LabelUserName").innerText.trim();
    "" != n && (t = n);
  }),
    (n.waxFetchData = function () {
      const n = {};
      return (n[SymWax.constants.loginType.USERNAME] = t), n;
    }),
    (n.onload = n.waxMain);
})(window);
