!(function (n) {
  if (!"##REPLACE_STRING_FOR_BROWSER##"()) return;
  let e = "",
    t = "";
  (n.waxMain = function () {
    const n = document.querySelector("input[name=USERID]"),
      a = document.querySelector("input[name=PASSWORD]");
    null != n &&
      void 0 !== n &&
      n.addEventListener(
        "change",
        function (e) {
          t = n.value;
        },
        !1
      ),
      null != a &&
        void 0 !== a &&
        a.addEventListener(
          "change",
          function (n) {
            e = a.value;
          },
          !1
        );
  }),
    (n.waxFetchData = function () {
      const n = {};
      return (n[SymWax.constants.loginType.USERNAME] = t), (n[SymWax.constants.loginType.PASSWORD] = e), n;
    }),
    (n.onload = n.waxMain);
})(window);
