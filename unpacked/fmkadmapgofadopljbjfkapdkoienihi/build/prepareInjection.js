(() => {
  "use strict";
  var e = {
      4069: (e) => {
        function nullthrows(e, r) {
          if (null != e) return e;
          var o = new Error(void 0 !== r ? r : "Got unexpected " + e);
          throw ((o.framesToPop = 1), o);
        }
        (e.exports = nullthrows), (e.exports.default = nullthrows), Object.defineProperty(e.exports, "__esModule", { value: !0 });
      }
    },
    r = {};
  function __webpack_require__(o) {
    var _ = r[o];
    if (void 0 !== _) return _.exports;
    var t = (r[o] = { exports: {} });
    return e[o](t, t.exports, __webpack_require__), t.exports;
  }
  (__webpack_require__.n = (e) => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(r, { a: r }), r;
  }),
    (__webpack_require__.d = (e, r) => {
      for (var o in r)
        __webpack_require__.o(r, o) && !__webpack_require__.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (__webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      __webpack_require__(4069);
      let e;
      window.addEventListener("message", function ({ data: r, source: o }) {
        if (o === window && r && "react-devtools-hook" === r.source) {
          const { source: o, payload: _ } = r,
            t = { source: o, payload: _ };
          (e = t), chrome.runtime.sendMessage(t);
        }
      }),
        window.addEventListener("pageshow", function ({ target: r }) {
          e && r === window.document && chrome.runtime.sendMessage(e);
        });
    })();
})();
