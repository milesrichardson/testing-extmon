!(function (n) {
  let e, t;
  (n.waxMain = function () {
    const n = document.getElementById("id"),
      a = document.getElementById("pw");
    null != n &&
      void 0 !== n &&
      ((t = "" !== n.value ? n.value : ""),
      n.addEventListener(
        "change",
        function (e) {
          t = n.value;
        },
        !1
      )),
      null != a &&
        void 0 !== a &&
        ((e = "" !== a.value ? a.value : ""),
        a.addEventListener(
          "change",
          function (n) {
            e = a.value;
          },
          !1
        ));
  }),
    (n.waxFetchData = function () {
      const n = {};
      return (n[SymWax.constants.loginType.USERNAME] = t), (n[SymWax.constants.loginType.PASSWORD] = e), n;
    }),
    (n.onload = n.waxMain);
})(window);
