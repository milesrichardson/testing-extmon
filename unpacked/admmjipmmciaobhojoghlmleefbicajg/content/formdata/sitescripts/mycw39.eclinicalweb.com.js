!(function (e) {
  var t = "";
  function n() {
    (document.querySelector("#txtPlainPassword").style.display = "none"),
      (document.querySelector("#pwdDiv").style.display = "none"),
      (document.querySelector("#pwdStore").style.display = "block"),
      (document.querySelector("#pwdStoreDiv").style.display = "block");
  }
  (e.waxFetchData = function () {
    var e = {};
    return (e[SymWax.constants.loginType.PASSWORD] = t), e;
  }),
    document.addEventListener("readystatechange", function (e) {
      if ("complete" === e.target.readyState)
        n(),
          (o = document.querySelector("#pwdStore")).addEventListener("change", function (e) {
            e.isTrusted && (t = o.value);
          }),
          o.addEventListener("blur", function (e) {
            "" == e.target.value.trim() && n();
          });
      var o;
    });
})(window);
