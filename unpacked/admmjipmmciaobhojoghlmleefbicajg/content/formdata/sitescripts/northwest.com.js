!(function (e) {
  setTimeout(function () {
    e.calculateStyle();
  }, 1e3),
    (e.calculateStyle = () => {
      const e = document.querySelectorAll("#norton-idsafe-field-styling-divId"),
        t = document.getElementById("symc-in-page-popup"),
        l = document.getElementById("user_id"),
        n = document.getElementsByClassName("online-banking-login")[0];
      if (
        null != e &&
        void 0 !== e &&
        0 != e.length &&
        null != t &&
        void 0 !== t &&
        null != l &&
        void 0 !== l &&
        null != n &&
        void 0 !== n
      ) {
        let e = window.getComputedStyle(n).zoom;
        if (null != e && void 0 !== e) {
          let n = l.getBoundingClientRect(),
            o = n.x * e - n.width / 2,
            i = n.y * e + n.height / 2;
          t.setAttribute("style", "left:" + o + "px;top:" + i + "px;");
        }
      }
    }),
    (e.setDecorator = () => {
      window.setInterval(calculateStyle, 200);
    });
})(window);
