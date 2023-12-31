(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9600],
  {
    40063: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => s });
      let d = {};
      const s = {
        bind: function (t, e) {
          let o, s;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const i = (t) => {
              (s = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (s = !0) : (o = t.target);
            },
            a = (d) => {
              s ||
                ((e.modifiers.bubble ||
                  (!t.contains(o) &&
                    !t.contains(d.target) &&
                    t !== o &&
                    t !== d.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  e.value(d));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (d[t.dataset.clickOutsideMouseupHandlerId] = a),
            (d[t.dataset.clickOutsideMousedownHandlerId] = i),
            document.addEventListener("mouseup", a),
            document.addEventListener("mousedown", i);
        },
        unbind: function (t) {
          var e, o;
          null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMouseupHandlerId &&
            null !== (o = t.dataset) &&
            void 0 !== o &&
            o.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", d[t.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", d[t.dataset.clickOutsideMousedownHandlerId]),
            delete d[t.dataset.clickOutsideMouseupHandlerId],
            delete d[t.dataset.clickOutsideMousedownHandlerId],
            delete t.dataset.clickOutsideMouseupHandlerId,
            delete t.dataset.clickOutsideMousedownHandlerId,
            delete t.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    95929: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => n });
      var d = o(8081),
        s = o.n(d),
        i = o(23645),
        a = o.n(i)()(s());
      a.push([
        t.id,
        "\n/* stylelint-disable */\n.dropdown[data-v-0a952a33] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-0a952a33] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-0a952a33] { opacity: 0.8;\n}\n.open-enter-active[data-v-0a952a33], .open-leave-active[data-v-0a952a33] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-0a952a33], .open-leave-to[data-v-0a952a33] { opacity: 0;\n}\n\n",
        ""
      ]);
      const n = a;
    },
    59600: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => i });
      var d = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.hideDropdown, expression: "hideDropdown" }],
            staticClass: "more",
            class: { "shift-to-left": t.shiftToLeft, "dropdown-visible": t.active, "more-dash": t.onDash },
            attrs: { "data-test": "more-container" }
          },
          [
            t._t("moreToggle", function () {
              return [
                e(
                  "div",
                  {
                    staticClass: "icon-wrapper more-toggle",
                    class: { "dash-icon-wrapper": t.onDash, "u--touch-hide": t.onDash },
                    attrs: { "data-test": "more-toggle", "data-ob": t.dataOb },
                    on: {
                      click: function (e) {
                        return t.$emit("toggle", !t.active);
                      }
                    }
                  },
                  [
                    e("inline-svg", {
                      staticClass: "icon icon-ellipsis more-icon",
                      class: { "dash-icon": t.onDash },
                      attrs: { src: o(49710) }
                    })
                  ],
                  1
                )
              ];
            }),
            t._v(" "),
            e("transition", { attrs: { name: "open" } }, [
              t.active
                ? e(
                    "div",
                    {
                      ref: "dropdown",
                      staticClass: "dropdown more-dropdown",
                      class: { "app dash-dropdown nipple nipple-top-left": t.onDash },
                      attrs: { "data-test": "dropdown" }
                    },
                    [
                      t._t("header"),
                      t._v(" "),
                      t._t("upsell"),
                      t._v(" "),
                      e(
                        "ul",
                        {
                          staticClass: "dropdown-list",
                          class: { "dropdown-hide": t.$slots.upsell },
                          attrs: { "data-test": "dropdown-options" }
                        },
                        [t._t("default")],
                        2
                      )
                    ],
                    2
                  )
                : t._e()
            ])
          ],
          2
        );
      };
      d._withStripped = !0;
      const s = {
        doNotWaitForMount: !0,
        name: "Dropdown",
        directives: { ClickOutside: o(40063).Z },
        props: { dataOb: { type: String, default: "" }, active: { type: Boolean, default: !1 }, onDash: { type: Boolean, default: !1 } },
        data: () => ({ shiftToLeft: !1 }),
        watch: {
          active(t) {
            t
              ? ((this.shiftToLeft = !1),
                this.$nextTick(this.shiftDropdownLeftIfNeeded),
                window.addEventListener("resize", this.debouncedDropdownShift))
              : window.removeEventListener("resize", this.debouncedDropdownShift);
          }
        },
        created() {
          m.on("globalEvent:esc", this.hideDropdown), m.on("globalEvent:toggle:bottom-right", this.hideDropdown);
        },
        destroyed() {
          m.off("globalEvent:esc", this.hideDropdown),
            m.off("globalEvent:toggle:bottom-right", this.hideDropdown),
            window.removeEventListener("resize", this.shouldDropdownShiftToLeft);
        },
        methods: {
          hideDropdown(t) {
            this.active && (this.$touch && t.stopPropagation(), this.$emit("toggle", !1));
          },
          shiftDropdownLeftIfNeeded() {
            const t = this.$refs.dropdown && this.$refs.dropdown.getBoundingClientRect();
            if (!t) return;
            const e = window.innerWidth - t.right;
            this.shiftToLeft = !(e >= 135);
          },
          debouncedDropdownShift() {
            clearTimeout(this.debounce),
              (this.debounce = setTimeout(() => {
                (this.shiftToLeft = !1), this.$nextTick(this.shiftDropdownLeftIfNeeded);
              }, 200));
          }
        }
      };
      o(34070);
      const i = (0, o(51900).Z)(s, d, [], !1, null, "0a952a33", null).exports;
    },
    34070: (t, e, o) => {
      var d = o(95929);
      d.__esModule && (d = d.default),
        "string" == typeof d && (d = [[t.id, d, ""]]),
        d.locals && (t.exports = d.locals),
        (0, o(45346).Z)("325af400", d, !1, { ssrId: !0 });
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    }
  }
]);
