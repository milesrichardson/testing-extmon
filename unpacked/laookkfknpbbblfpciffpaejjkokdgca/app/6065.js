(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6065],
  {
    65643: (a, e, t) => {
      "use strict";
      t.r(e), t.d(e, { default: () => l });
      var n = t(8081),
        i = t.n(n),
        s = t(23645),
        d = t.n(s)()(i());
      d.push([
        a.id,
        "\n/* stylelint-disable */\n.sidebar[data-v-5ee9ad6a] { --sidebar-padding: 2em; width: 260px; padding: var(--sidebar-padding); flex: 0 0 auto; display: flex; flex-direction: column; background: hsl(var(--hue-modal) 9% 93%) !important; color: hsl(var(--hue-modal) 12% 25%); overflow-x: hidden; overflow-y: auto; text-align: left;\n}\n.benefits[data-v-5ee9ad6a] { margin-bottom: 2rem;\n}\n.benefits-heading[data-v-5ee9ad6a] { margin: 0 0 0.625rem; font-family: Poppins, Futura, sans-serif; font-size: 18px;\n}\n[data-v-5ee9ad6a] .benefit { font-size: 0.9375rem; font-weight: 500;\n}\n[data-v-5ee9ad6a] .testimonials { margin: calc(var(--sidebar-padding) * -1); margin-top: 0; padding: 0 12px;\n}\n",
        ""
      ]);
      const l = d;
    },
    16065: (a, e, t) => {
      "use strict";
      t.r(e), t.d(e, { default: () => d });
      var n = function () {
        var a = this,
          e = a._self._c;
        return e(
          "aside",
          { staticClass: "sidebar" },
          [
            e(
              "div",
              { staticClass: "benefits" },
              [e("h3", { staticClass: "benefits-heading" }, [a._v("Benefits of Plus")]), a._v(" "), e("benefit-list")],
              1
            ),
            a._v(" "),
            e("testimonials", { attrs: { compact: !0 } })
          ],
          1
        );
      };
      n._withStripped = !0;
      var i = t(35323);
      const s = { name: "Sidebar", components: { BenefitList: t(77471).Z, Testimonials: i.Z } };
      t(17484);
      const d = (0, t(51900).Z)(s, n, [], !1, null, "5ee9ad6a", null).exports;
    },
    17484: (a, e, t) => {
      var n = t(65643);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[a.id, n, ""]]),
        n.locals && (a.exports = n.locals),
        (0, t(45346).Z)("648df972", n, !1, { ssrId: !0 });
    }
  }
]);
