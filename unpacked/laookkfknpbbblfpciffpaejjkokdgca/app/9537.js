(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9537],
  {
    95204: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => s });
      var o = n(8081),
        a = n.n(o),
        c = n(23645),
        i = n.n(c)()(a());
      i.push([
        t.id,
        "\n/* stylelint-disable */\n.opt-in[data-v-34618874] { margin-top: 1em; display: inline-flex; align-items: center; justify-content: center; border-radius: 10px; cursor: pointer; font-size: 1.1875rem;\n}\n.checkbox[data-v-34618874] { font-size: 120%; margin-top: 3px; margin-right: 0.5rem;\n}\n",
        ""
      ]);
      const s = i;
    },
    84668: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => s });
      var o = n(8081),
        a = n.n(o),
        c = n(23645),
        i = n.n(c)()(a());
      i.push([
        t.id,
        "\n/* stylelint-disable */\n.checkbox[data-v-35209b3f] { position: relative; border: none; line-height: 1; text-shadow: 0 0 15px rgba(0,0,0,0.3);\n}\n.checkbox[data-v-35209b3f]:hover, .touch .checkbox[data-v-35209b3f] { opacity: 1;\n}\n.checkbox .icon[data-v-35209b3f] { height: auto; width: auto;\n}\n.checkbox .icon[data-v-35209b3f]:before { width: auto;\n}\n.icon-checkbox[data-v-35209b3f] { position: absolute; top: 0; left: 0; display: none;\n}\n.icon-checkbox-empty[data-v-35209b3f] { display: block;\n}\n.checked .icon-checkbox[data-v-35209b3f] { display: block;\n}\n.checked .icon-checkbox-empty[data-v-35209b3f] { visibility: hidden;\n}\n",
        ""
      ]);
      const s = i;
    },
    79537: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { default: () => c });
      var o = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "opt-in",
            attrs: { "data-test": "newsletter-opt-in" },
            on: {
              click: function (e) {
                return t.$emit("input", !t.value);
              }
            }
          },
          [e("dash-checkbox", { attrs: { value: t.value } }), t._v(" "), e("div", [t._v("Sign up for the Monday Moment newsletter.")])],
          1
        );
      };
      o._withStripped = !0;
      const a = { name: "NewsletterOptIn", components: { DashCheckbox: n(6916).Z }, props: { value: { type: Boolean, required: !0 } } };
      n(78175);
      const c = (0, n(51900).Z)(a, o, [], !1, null, "34618874", null).exports;
    },
    6916: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => c });
      var o = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "control checkbox",
            class: { checked: t.value },
            attrs: { "data-test": "dash-checkbox" },
            on: {
              click: function (e) {
                return t.$emit("input", !t.value);
              }
            }
          },
          [e("i", { staticClass: "icon icon-checkbox-empty" }), t._v(" "), e("i", { staticClass: "icon icon-checkbox" })]
        );
      };
      o._withStripped = !0;
      const a = { name: "DashCheckbox", props: { value: { type: Boolean, required: !0 } } };
      n(92063);
      const c = (0, n(51900).Z)(a, o, [], !1, null, "35209b3f", null).exports;
    },
    78175: (t, e, n) => {
      var o = n(95204);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals),
        (0, n(45346).Z)("ec4f7d2a", o, !1, { ssrId: !0 });
    },
    92063: (t, e, n) => {
      var o = n(84668);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals),
        (0, n(45346).Z)("49e67720", o, !1, { ssrId: !0 });
    }
  }
]);
