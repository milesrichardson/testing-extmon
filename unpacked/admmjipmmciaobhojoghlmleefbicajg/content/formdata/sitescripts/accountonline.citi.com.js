!(function (n) {
  let t, e;
  (n.waxMain = function () {
    const n = document.getElementById("USERNAME-citiTextBlur"),
      o = document.getElementById("USERNAME"),
      a = document.getElementById("PASSWORD");
    null != n &&
      void 0 !== n &&
      (null != o && void 0 !== o && (e = o.value),
      n.addEventListener(
        "change",
        function (n) {
          e = o.value;
        },
        !1
      )),
      null != a &&
        void 0 !== a &&
        a.addEventListener(
          "change",
          function (n) {
            t = a.value;
          },
          !1
        );
  }),
    (n.waxFetchData = function () {
      const n = {};
      return (n[SymWax.constants.loginType.USERNAME] = e), (n[SymWax.constants.loginType.PASSWORD] = t), n;
    }),
    (n.onload = n.waxMain);
})(window);
