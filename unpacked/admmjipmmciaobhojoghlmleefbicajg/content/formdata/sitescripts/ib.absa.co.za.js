!(function (n) {
  let e, t;
  (n.waxMain = function () {
    const n = document.getElementById("j_username"),
      a = document.getElementById("j_pin");
    null != n &&
      void 0 !== n &&
      ((t = "" !== n.value ? n.value : ""),
      n.addEventListener(
        "change",
        function (e) {
          1 == e.isTrusted && (t = n.value);
        },
        !1
      )),
      null != a &&
        void 0 !== a &&
        ((e = "" !== a.value ? a.value : ""),
        a.addEventListener(
          "change",
          function (n) {
            1 == n.isTrusted && (e = a.value);
          },
          !1
        ));
  }),
    (n.waxFetchData = function () {
      const n = {};
      return (n[SymWax.constants.loginType.USERNAME] = t), (n[SymWax.constants.loginType.PASSWORD] = e), n;
    }),
    n.addEventListener("load", n.waxMain);
})(window);
