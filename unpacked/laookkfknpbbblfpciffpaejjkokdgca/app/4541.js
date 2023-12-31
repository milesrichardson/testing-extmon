"use strict";
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4541],
  {
    84541: (t, s, a) => {
      a.r(s), a.d(s, { default: () => e });
      var n = function () {
        var t = this,
          s = t._self._c;
        return s(
          "li",
          { staticClass: "dropdown-list-item", class: { "has-description": t.description }, attrs: { "data-test": "drop-down-wrapper" } },
          [
            s("div", { staticClass: "dropdown-list-label-wrapper", attrs: { "data-test": "drop-down-wrapper" } }, [
              t.icon || t.$slots.icon
                ? s(
                    "span",
                    { staticClass: "dropdown-list-icon-wrapper" },
                    [
                      t._t("icon", function () {
                        return [t._v(t._s(t.icon))];
                      })
                    ],
                    2
                  )
                : t._e(),
              t._v(" "),
              s(
                "span",
                { staticClass: "dropdown-list-label", attrs: { "data-test": "name" } },
                [
                  t._t("default"),
                  t._t("name", function () {
                    return [t._v(t._s(t.name))];
                  })
                ],
                2
              ),
              t.isPlus && !t.$plus ? s("span", { staticClass: "badge badge-plus", attrs: { "data-test": "beta" } }, [t._v("Plus")]) : t._e()
            ]),
            t._v(" "),
            t.description || t.$slots.description
              ? s(
                  "div",
                  { staticClass: "dropdown-list-description", attrs: { "data-test": "description" } },
                  [
                    t._t("description", function () {
                      return [t._v(t._s(t.description))];
                    })
                  ],
                  2
                )
              : t._e()
          ]
        );
      };
      n._withStripped = !0;
      const i = {
          name: "DropdownOption",
          doNotWaitForMount: !0,
          props: {
            icon: { type: String, default: "" },
            name: { type: String, default: "" },
            isPlus: { type: Boolean, default: !1 },
            description: { type: String, default: "" }
          }
        },
        e = (0, a(51900).Z)(i, n, [], !1, null, null, null).exports;
    }
  }
]);
