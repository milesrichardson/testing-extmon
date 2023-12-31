(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [851],
  {
    4041: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => i });
      var s = a(8081),
        o = a.n(s),
        n = a(23645),
        r = a.n(n)()(o());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n/* The full transition is in here rather than overridden because such a quick transition seems to create jank if inherited then overridden here. Also because normal fade is used inside this component as well. */\n.fade-very-fast-enter-active[data-v-51aa67c6], .fade-very-fast-leave-active[data-v-51aa67c6] { transition: opacity 0.1s var(--a-curve);\n}\n.fade-very-fast-enter[data-v-51aa67c6], .fade-very-fast-leave-to[data-v-51aa67c6] { opacity: 0;\n}\n.add[data-v-51aa67c6] { cursor: pointer;\n}\n",
        ""
      ]);
      const i = r;
    },
    60851: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var s = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "focus-content" },
          [
            e(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [
                e("three-col-layout", {
                  staticClass: "focus-row",
                  scopedSlots: t._u([
                    {
                      key: "center",
                      fn: function () {
                        return [
                          e(
                            "div",
                            {
                              staticClass: "todays-focus",
                              attrs: { "data-test": "focus-empty" },
                              on: { mouseover: t.hoverOn, mouseleave: t.hoverOff }
                            },
                            [
                              e("transition", { attrs: { name: "fade-very-fast", mode: "out-in" } }, [
                                t.showAdd
                                  ? e(
                                      "span",
                                      {
                                        key: "1",
                                        staticClass: "add",
                                        attrs: { "data-test": "add-focus" },
                                        on: {
                                          click: function (e) {
                                            return t.$emit("add-focus");
                                          }
                                        }
                                      },
                                      [t._v("+ Add a focus")]
                                    )
                                  : e(
                                      "span",
                                      { key: "2" },
                                      [
                                        e("transition", { attrs: { name: "fade-fast", mode: "out-in" } }, [
                                          e("span", { key: t.message, staticClass: "default", attrs: { "data-test": "message" } }, [
                                            t._v(t._s(t.message))
                                          ])
                                        ])
                                      ],
                                      1
                                    )
                              ])
                            ],
                            1
                          )
                        ];
                      },
                      proxy: !0
                    }
                  ])
                })
              ],
              1
            )
          ],
          1
        );
      };
      s._withStripped = !0;
      var o = a(42223);
      const n = {
        name: "PomodoroEmptyFocus",
        components: { ThreeColLayout: a(3728).Z },
        mixins: [o.Z],
        props: { message: { type: String, default: "Focus" } },
        data: () => ({ showAdd: !1 }),
        methods: {
          hoverOn() {
            this.$touch ||
              (clearTimeout(this.timer),
              (this.timer = setTimeout(() => {
                this.showAdd = !0;
              }, 200)));
          },
          hoverOff() {
            this.$touch || (clearTimeout(this.timer), (this.showAdd = !1));
          }
        }
      };
      a(89811);
      const r = (0, a(51900).Z)(n, s, [], !1, null, "51aa67c6", null).exports;
    },
    89811: (t, e, a) => {
      var s = a(4041);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, a(45346).Z)("302d425f", s, !1, { ssrId: !0 });
    }
  }
]);
