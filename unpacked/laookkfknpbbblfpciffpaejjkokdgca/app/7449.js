(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7449],
  {
    78836: (t, a, o) => {
      "use strict";
      o.r(a), o.d(a, { default: () => s });
      var i = o(8081),
        e = o.n(i),
        n = o(23645),
        d = o.n(n)()(e());
      d.push([
        t.id,
        "\n/* stylelint-disable */\n.toast-hide[data-v-585a48d3] { opacity: 0;\n}\n.toast-visible .icon[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-container[data-v-585a48d3] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-585a48d3] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast > *[data-v-585a48d3]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-585a48d3] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-585a48d3] .toast-title { line-height: 1.25;\n}\n[data-v-585a48d3] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-585a48d3] li { max-width: 100% !important;\n}\n.header-line[data-v-585a48d3] { margin: 0 -4px 4px !important;\n}\n.section-title[data-v-585a48d3] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-585a48d3] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-585a48d3] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-585a48d3] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-585a48d3]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-overlay[data-v-585a48d3] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-585a48d3], .slide-up-leave-active[data-v-585a48d3] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-585a48d3], .slide-up-leave-to[data-v-585a48d3]  { transform: translateY(100%);\n}\n",
        ""
      ]);
      const s = d;
    },
    97449: (t, a, o) => {
      "use strict";
      o.r(a), o.d(a, { default: () => n });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          "div",
          {
            on: {
              click: function (t) {
                t.stopPropagation();
              }
            }
          },
          [
            t._t("moreToggle"),
            t._v(" "),
            a(
              "div",
              { staticClass: "toast-container" },
              [
                a("transition", { attrs: { name: "slide-up", appear: "" } }, [
                  t.active
                    ? a("div", { ref: "toast", staticClass: "toast more-toast", attrs: { "data-test": "toast" } }, [
                        t.hasHeader() ? a("div", { staticClass: "toast-header" }, [t._t("header")], 2) : t._e(),
                        t._v(" "),
                        t.hasHeader() ? a("div", { staticClass: "line header-line" }) : t._e(),
                        t._v(" "),
                        t.sectionTitle ? a("div", { staticClass: "section-title" }, [t._v(t._s(t.sectionTitle))]) : t._e(),
                        t._v(" "),
                        a(
                          "ul",
                          { staticClass: "toast-list", class: { "toast-hide": t.$slots.upsell }, attrs: { "data-test": "toast-options" } },
                          [t._t("default")],
                          2
                        ),
                        t._v(" "),
                        a("div", { staticClass: "button button-close", on: { click: t.hide } }, [
                          a("span", { staticClass: "button-label" }, [t._v("Close")])
                        ])
                      ])
                    : t._e()
                ]),
                t._v(" "),
                a("transition", { attrs: { name: "fade", duration: "150" } }, [
                  t.active
                    ? a("div", {
                        staticClass: "toast-overlay",
                        on: {
                          click: function (a) {
                            return a.stopPropagation(), t.hide.apply(null, arguments);
                          }
                        }
                      })
                    : t._e()
                ])
              ],
              1
            )
          ],
          2
        );
      };
      i._withStripped = !0;
      const e = {
        doNotWaitForMount: !0,
        name: "ToastMenu",
        props: {
          dataOb: { type: String, default: "" },
          active: { type: Boolean, default: !0 },
          sectionTitle: { type: String, default: "" }
        },
        methods: {
          hide(t) {
            this.active && (this.$touch && t.stopPropagation(), this.$emit("toggle", !1));
          },
          hasHeader() {
            return !!this.$slots.header;
          }
        }
      };
      o(30562);
      const n = (0, o(51900).Z)(e, i, [], !1, null, "585a48d3", null).exports;
    },
    30562: (t, a, o) => {
      var i = o(78836);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, o(45346).Z)("8544ab60", i, !1, { ssrId: !0 });
    }
  }
]);
