(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9253],
  {
    74675: (a, e, t) => {
      "use strict";
      t.r(e), t.d(e, { default: () => i });
      var n = t(8081),
        s = t.n(n),
        d = t(23645),
        o = t.n(d)()(s());
      o.push([
        a.id,
        "\n/* stylelint-disable */\n.slide-fade-enter-active[data-v-c40c3e80], .slide-fade-leave-active[data-v-c40c3e80] { transition: opacity .5s var(--a-curve), transform .5s var(--a-curve);\n}\n.slide-fade-enter[data-v-c40c3e80], .slide-fade-leave-to[data-v-c40c3e80] { opacity: 0; transform: translateY(-50px);\n}\n.app-container[data-v-c40c3e80] { --app-padding: 20px; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; display: flex; align-items: center; background: rgba(0,0,0,0.5);\n}\n.button[data-v-c40c3e80] { margin-left: 20px;\n}\n",
        ""
      ]);
      const i = o;
    },
    49253: (a, e, t) => {
      "use strict";
      t.r(e), t.d(e, { default: () => d });
      var n = function () {
        var a = this,
          e = a._self._c;
        return e(
          "div",
          { staticClass: "app-container overlay" },
          [
            e("transition", { attrs: { name: "slide-fade", appear: "" } }, [
              e("div", { staticClass: "app" }, [
                e("span", [a._v("Momentum has updated and needs to be reloaded in order function properly.")]),
                a._v(" "),
                e("button", { staticClass: "button", on: { click: a.reload } }, [a._v("Reload")])
              ])
            ])
          ],
          1
        );
      };
      n._withStripped = !0;
      const s = {
        name: "RefreshModal",
        methods: {
          reload() {
            window.location.reload();
          }
        }
      };
      t(84513);
      const d = (0, t(51900).Z)(s, n, [], !1, null, "c40c3e80", null).exports;
    },
    84513: (a, e, t) => {
      var n = t(74675);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[a.id, n, ""]]),
        n.locals && (a.exports = n.locals),
        (0, t(45346).Z)("59c8f778", n, !1, { ssrId: !0 });
    }
  }
]);
