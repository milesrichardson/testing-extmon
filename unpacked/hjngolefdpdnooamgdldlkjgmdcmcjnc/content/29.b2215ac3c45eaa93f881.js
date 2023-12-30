(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [29],
  {
    416: function (i, e, t) {
      "use strict";
      t.r(e);
      var r = t(14);
      t(99), t(136), t(13), t(2), t(18), t(42), t(164), t(100), t(101), t(62), t(137), t(138), t(139), t(140);
      /*!
       * @license Mathematical and Scientific Expression Editor for Computer Systems - United States Patent No. 11,501,055 - Texthelp Ltd
       */
      let o, n;
      r = Object(r.L)(function* () {
        if (o && n)
          return Promise.resolve({
            Prismic: o,
            api: n
          });
        const i = (yield t.e(28).then(t.bind(null, 729)))["default"];
        if (n)
          return Promise.resolve({
            Prismic: i,
            api: n
          });
        const e = yield i.getApi("https://equatio-academy.prismic.io/api/v2");
        return (
          (n = e),
          {
            Prismic: i,
            api: e
          }
        );
      });
      e.default = r;
    }
  }
]);
