!(function (n) {
  var o = {};
  function r(e) {
    var t;
    return (
      o[e] ||
      ((t = o[e] =
        {
          i: e,
          l: !1,
          exports: {}
        }),
      n[e].call(t.exports, t, t.exports, r),
      (t.l = !0),
      t)
    ).exports;
  }
  (r.m = n),
    (r.c = o),
    (r.d = function (e, t, n) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
        });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    r((r.s = 395));
})({
  395: function (e, t) {
    let n;
    window.MathJax && window.MathJax.Hub && "function" == typeof window.MathJax.Hub.Queue
      ? window.MathJax.Hub.Queue(() => {
          (n = {
            hasMathJax: !0,
            completed: !0
          }),
            window.postMessage(
              {
                action: "EQUATIO_DISCOVERABILITY_MATHJAX",
                data: n
              },
              window.location.origin
            );
        })
      : ((n = {
          hasMathJax: !1,
          completed: !1
        }),
        window.postMessage(
          {
            action: "EQUATIO_DISCOVERABILITY_MATHJAX",
            data: n
          },
          window.location.origin
        ));
  }
});
