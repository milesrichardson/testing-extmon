!(function (e) {
  var r = {};
  function o(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, r, n) {
      o.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, r) {
      if ((1 & r && (e = o(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e))
        for (var t in e)
          o.d(
            n,
            t,
            function (r) {
              return e[r];
            }.bind(null, t)
          );
      return n;
    }),
    (o.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(r, "a", r), r;
    }),
    (o.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (o.p = ""),
    o((o.s = 205));
})({
  10: function (e, r) {
    window.chrome ? window.browser || (window.browser = window.chrome) : (window.chrome = window.browser ? window.browser : {});
  },
  205: function (e, r, o) {
    "use strict";
    o.r(r);
    o(10);
    var n = class {
      static send(e, r, o, n) {
        browser.runtime.sendMessage({ from: e, method: r, message: o }, (e) => {
          n && n(e);
        });
      }
    };
    var t = class {
      constructor() {
        n.send("AdBlocker", "domRules", {}, (e) => {
          if (!e) return;
          const r = document.querySelectorAll(e);
          for (const e of r) e.parentElement.removeChild(e);
        });
      }
    };
    class c {
      constructor() {
        new t();
      }
    }
    try {
      new c();
    } catch (e) {
      console.log("CRITICAL ERROR"), console.log(e);
    }
  }
});
