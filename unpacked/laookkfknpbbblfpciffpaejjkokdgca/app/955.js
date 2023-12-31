(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [955],
  {
    52559: (e, a, t) => {
      "use strict";
      t.d(a, { Z: () => r });
      const r = {
        props: {
          orderKey: { type: Number, default: null },
          transition: { type: [String, Array], default: () => ["slide-left", "slide-right"] }
        },
        data: () => ({ reverseTransition: !1, transitionActive: !1 }),
        computed: {
          transitionType() {
            let e, a;
            return (
              Array.isArray(this.transition) ? ([e, a] = this.transition) : "string" == typeof this.transition && (e = a = this.transition),
              this.reverseTransition ? a : e
            );
          }
        },
        watch: {
          orderKey(e, a) {
            a && (this.reverseTransition = a > e);
          }
        },
        methods: {
          beforeTransition() {
            this.transitionActive = !0;
          },
          afterTransition() {
            this.transitionActive = !1;
          }
        }
      };
    },
    61757: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => d });
      var r = t(8081),
        n = t.n(r),
        i = t(23645),
        o = t.n(i)()(n());
      o.push([
        e.id,
        ".app-header-control[data-v-7baa4cc7]{height:100%}.app-header-control.disabled[data-v-7baa4cc7]{opacity:var(--opacity-stop-4);pointer-events:none}.app-header-control .icon-wrapper[data-v-7baa4cc7]{height:100%;display:flex;align-items:center;align-self:stretch;justify-content:center;padding:0 8px;cursor:pointer}.app-header-control .icon[data-v-7baa4cc7]{opacity:var(--opacity-stop-5)}",
        ""
      ]);
      const d = o;
    },
    57134: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => d });
      var r = t(8081),
        n = t.n(r),
        i = t(23645),
        o = t.n(i)()(n());
      o.push([
        e.id,
        ".app-view[data-v-25f9c1d4]{--overlay-min-height: 15rem;width:100%;max-height:var(--content-max-height, none);display:flex;position:relative;flex-direction:column}.app-view--overlay-min-height[data-v-25f9c1d4]{min-height:var(--overlay-min-height)}.app-body[data-v-25f9c1d4]{min-height:0;position:relative;flex-grow:1;overflow-y:auto}.smooth-height-slide-enter-active .app-body[data-v-25f9c1d4],.smooth-height-slide-leave-active .app-body[data-v-25f9c1d4]{overflow-y:hidden}.app-view:not(.has-footer) .app-body[data-v-25f9c1d4]{padding-bottom:var(--app-padding)}.app-footer[data-v-25f9c1d4]{max-height:var(--content-max-height, none);padding-bottom:var(--app-padding)}.overlay[data-v-25f9c1d4]{position:absolute;background-color:rgba(0,0,0,.5);inset:0}",
        ""
      ]);
      const d = o;
    },
    48235: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => d });
      var r = t(8081),
        n = t.n(r),
        i = t(23645),
        o = t.n(i)()(n());
      o.push([
        e.id,
        "\n/* stylelint-disable */\n.app-header[data-v-6f988da6] { height: var(--header-height); width: 100%; display: flex; gap: 8px; align-items: center;\n}\n.header-left[data-v-6f988da6], .header-right[data-v-6f988da6], .header-center[data-v-6f988da6] { align-self: stretch; display: flex; align-items: center;\n}\n.header-left[data-v-6f988da6], .header-right[data-v-6f988da6] { width: 0; flex-grow: var(--sides-grow); flex-shrink: 0;\n}\n.header-left[data-v-6f988da6] { padding-left: var(--app-padding);\n}\n\t\t\t/* Targets the first app header left elements icon-wrapper classes that are not within base-dropdown classes */\n\t\t\t/* For base-dropdown overrides, we need to target the base-dropdown class itself and not the icon-wrapper class */\n.header-left[data-v-6f988da6] > *:first-child:not(.base-dropdown) .icon-wrapper, .header-left[data-v-6f988da6] > .base-dropdown:first-child { margin-left: calc(-1 * var(--app-padding)); padding-left: var(--app-padding);\n}\n.header-center[data-v-6f988da6] { width: auto; flex-grow: var(--center-grow);\n}\n.header-right[data-v-6f988da6] { justify-content: flex-end; padding-right: var(--app-padding)\n}\n\t\t\t/* Targets the last app header right elements icon-wrapper classes that are not within base-dropdown classes */\n\t\t\t/* For base-dropdown overrides, we need to target the base-dropdown class itself and not the icon-wrapper class */\n.header-right[data-v-6f988da6] > *:last-child:not(.base-dropdown) .icon-wrapper, .header-right[data-v-6f988da6] > .base-dropdown:last-child { margin-right: calc(-1 * var(--app-padding)); padding-right: var(--app-padding);\n}\n\t\t\t/* Override style in style.css */\n.mobile-close[data-v-6f988da6] { margin-left: 0 !important; display: unset !important;\n}\n.mobile-close[data-v-6f988da6] .icon-wrapper { margin-left: 0; padding-left: 16px; padding-right: calc(var(--app-padding) + 6px) !important;\n}\n.icon-close[data-v-6f988da6] { --icon-size: 9px;\n}\n\n\t/* Set the icon size for all icons in the header */\n.app-header[data-v-6f988da6] .icon-ellipsis { --icon-size: 15px;\n}\n.app-header[data-v-6f988da6] .app-header-icon { --icon-size: 16px; opacity: var(--opacity-stop-6); margin-right: 10px;\n}\n.app-header[data-v-6f988da6] .app-header-name { font-size: 17px; font-weight: 500;\n}\n\n\t/* Overrides for base-dropdown that is added to the header so that it matches the header control styling */\n\t/* We need to ensure that the icon-wrapper gets its hover state when we're hovering over the base-dropdown wrapper */\n.app-header .base-dropdown[data-v-6f988da6] { height: 100%; display: flex; align-items: center; padding: 0 8px; cursor: pointer;\n}\n.app-header .base-dropdown.disabled[data-v-6f988da6] { opacity: var(--opacity-stop-4); pointer-events: none;\n}\n.app-header .base-dropdown[data-v-6f988da6] .icon-wrapper { padding-left: 0; padding-right: 0; width: unset;\n}\n.app-header .base-dropdown[data-v-6f988da6]:hover .icon-wrapper:after { background: var(--hover-bg);\n}\n.app-header .base-dropdown[data-v-6f988da6]:hover:active .icon-wrapper:after { background: var(--active-bg);\n}\n.app-header .base-dropdown[data-v-6f988da6]:hover .icon-wrapper .icon { opacity: 0.8;\n}\n.app-header .base-dropdown[data-v-6f988da6]:hover:active .icon-wrapper .icon { opacity: 1;\n}\n",
        ""
      ]);
      const d = o;
    },
    5842: (e, a, t) => {
      "use strict";
      var r;
      t.d(a, { j: () => r }),
        (function (e) {
          (e.Mobile = "mobile"), (e.All = "all"), (e.None = "none");
        })(r || (r = {}));
    },
    14582: (e, a, t) => {
      "use strict";
      t.d(a, { Z: () => d });
      var r = function () {
        var e = this,
          a = e._self._c;
        return a(
          "div",
          { staticClass: "app-header", style: { "--sides-grow": e.growSides, "--center-grow": e.growCenter } },
          [
            e._t("default", function () {
              return [
                a("div", { staticClass: "header-left" }, [e._t("left")], 2),
                e._v(" "),
                a("div", { staticClass: "header-center" }, [e._t("center")], 2),
                e._v(" "),
                a(
                  "div",
                  { staticClass: "header-right" },
                  [
                    e._t("right"),
                    e._v(" "),
                    e.showCloseButton
                      ? a(
                          "app-header-control",
                          {
                            staticClass: "mobile-close",
                            attrs: { "show-mobile-background": !0 },
                            on: {
                              click: function (a) {
                                return e.$emit("close", a);
                              }
                            }
                          },
                          [a("inline-svg", { staticClass: "icon icon-close", attrs: { src: t(41226) } })],
                          1
                        )
                      : e._e()
                  ],
                  2
                )
              ];
            })
          ],
          2
        );
      };
      r._withStripped = !0;
      var n = t(16618),
        i = t(5842);
      const o = {
        name: "AppHeader",
        components: { AppHeaderControl: n.Z },
        props: { showCloseButtonOn: { type: String, default: i.j.Mobile } },
        emits: ["close"],
        computed: {
          growSides() {
            return void 0 !== this.$slots.center ? 1 : 0;
          },
          growCenter() {
            return Math.abs(this.growSides - 1);
          },
          showCloseButton() {
            return this.showCloseButtonOn === i.j.All || (this.$touch && this.showCloseButtonOn === i.j.Mobile);
          }
        }
      };
      t(32965);
      const d = (0, t(51900).Z)(o, r, [], !1, null, "6f988da6", null).exports;
    },
    16618: (e, a, t) => {
      "use strict";
      t.d(a, { Z: () => i });
      var r = function () {
        var e = this,
          a = e._self._c;
        return a(
          "div",
          {
            staticClass: "app-header-control",
            class: { disabled: e.disabled },
            on: {
              click: function (a) {
                return e.$emit("click", a);
              }
            }
          },
          [a("div", { class: ["icon-wrapper", { "u--mobile-show-bg": e.showMobileBackground }] }, [e._t("default")], 2)]
        );
      };
      r._withStripped = !0;
      const n = {
        name: "AppHeaderControl",
        props: { showMobileBackground: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 } }
      };
      t(20861);
      const i = (0, t(51900).Z)(n, r, [], !1, null, "7baa4cc7", null).exports;
    },
    24871: (e, a, t) => {
      "use strict";
      t.d(a, { Z: () => i });
      var r = function () {
        var e = this,
          a = e._self._c;
        return a(
          "div",
          {
            class: ["app-view", { "app-view--overlay-min-height": e.hasConfirmation, "has-footer": e.hasFooter }],
            attrs: { "data-test": "view" }
          },
          [
            e.hasHeader ? a("div", { staticClass: "header-container" }, [e._t("header")], 2) : e._e(),
            e._v(" "),
            a("div", { staticClass: "app-body" }, [e._t("body")], 2),
            e._v(" "),
            e.hasFooter ? a("div", { staticClass: "app-footer" }, [e._t("footer")], 2) : e._e(),
            e._v(" "),
            a(
              "transition",
              { attrs: { name: "fade" } },
              [
                e.overlay
                  ? a("div", {
                      staticClass: "overlay",
                      on: {
                        click: function (a) {
                          return e.$emit("overlayClick");
                        }
                      }
                    })
                  : e._e(),
                e._v(" "),
                e._t("confirm")
              ],
              2
            )
          ],
          1
        );
      };
      r._withStripped = !0;
      const n = {
        name: "AppView",
        props: { overlay: { type: Boolean, default: !1 } },
        computed: {
          hasConfirmation() {
            var e, a;
            return !(null === (e = (a = this.$scopedSlots).confirm) || void 0 === e || !e.call(a));
          },
          hasHeader() {
            var e, a;
            return !(null === (e = (a = this.$scopedSlots).header) || void 0 === e || !e.call(a));
          },
          hasFooter() {
            var e, a;
            return !(null === (e = (a = this.$scopedSlots).footer) || void 0 === e || !e.call(a));
          }
        }
      };
      t(66908);
      const i = (0, t(51900).Z)(n, r, [], !1, null, "25f9c1d4", null).exports;
    },
    20861: (e, a, t) => {
      var r = t(61757);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.id, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, t(45346).Z)("2dabab0a", r, !1, {});
    },
    66908: (e, a, t) => {
      var r = t(57134);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.id, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, t(45346).Z)("31fe0a49", r, !1, {});
    },
    32965: (e, a, t) => {
      var r = t(48235);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.id, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, t(45346).Z)("56dbb2ba", r, !1, { ssrId: !0 });
    },
    41226: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiPjxwYXRoIGQ9Ik0zMzYuNTU5IDY4LjYxMUwyMzEuMDE2IDE3NC4xNjVsMTA1LjU0MyAxMDUuNTQ5YzE1LjY5OSAxNS43MDUgMTUuNjk5IDQxLjE0NSAwIDU2Ljg1LTcuODQ0IDcuODQ0LTE4LjEyOCAxMS43NjktMjguNDA3IDExLjc2OS0xMC4yOTYgMC0yMC41ODEtMy45MTktMjguNDE5LTExLjc2OUwxNzQuMTY3IDIzMS4wMDMgNjguNjA5IDMzNi41NjNjLTcuODQzIDcuODQ0LTE4LjEyOCAxMS43NjktMjguNDE2IDExLjc2OS0xMC4yODUgMC0yMC41NjMtMy45MTktMjguNDEzLTExLjc2OS0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzkgMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQgNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUgMC01Ni44NDQgMTUuNjk2LTE1LjY4NyA0MS4xMjctMTUuNjg3IDU2LjgyOSAwbDEwNS41NjMgMTA1LjU1NEwyNzkuNzIxIDExLjc2N2MxNS43MDUtMTUuNjg3IDQxLjEzOS0xNS42ODcgNTYuODMyIDAgMTUuNzA1IDE1LjY5OSAxNS43MDUgNDEuMTQ1LjAwNiA1Ni44NDR6IiAvPjwvc3ZnPgo=";
    }
  }
]);
