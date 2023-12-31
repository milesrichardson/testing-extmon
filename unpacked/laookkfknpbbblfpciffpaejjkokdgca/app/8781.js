(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8781, 9437, 3990],
  {
    99437: (t, e, M) => {
      "use strict";
      M.d(e, { Z: () => l });
      var i = M(20144),
        s = M(88026),
        n = M(51726),
        a = M.n(n),
        o = M(34952),
        d = M(7838),
        N = M(35174);
      let g = {};
      const u = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (g[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", g[t.dataset.mobileClickHandlerId]),
            delete g[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var c = M(28692),
        D = M(64398),
        I = M(77197);
      i.ZP.use(s.Z, { name: "unreactive" }),
        i.ZP.use(a()),
        i.ZP.use(o.InlineSvgPlugin),
        i.ZP.use(c.og),
        i.ZP.use(I.Z),
        (i.ZP.prototype.$xhr = N.Z),
        (i.ZP.prototype.$e = d.Z),
        i.ZP.directive("mobile-click", u),
        new i.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        i.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: D.Z
        });
      const l = i.ZP;
    },
    13990: (t, e, M) => {
      "use strict";
      M.d(e, { Z: () => i });
      const i = {
        countdowns: { type: "countdowns", icon: M(77917), upsellId: "UPSELL_COUNTDOWNS" },
        metrics: { type: "metrics", icon: M(80660), upsellId: "UPSELL_METRICS" },
        clocks: { type: "clocks", names: { fullLowerCasePlural: "world clocks" }, icon: M(31584), upsellId: "UPSELL_WORLD_CLOCKS" }
      };
    },
    40063: (t, e, M) => {
      "use strict";
      M.d(e, { Z: () => s });
      let i = {};
      const s = {
        bind: function (t, e) {
          let M, s;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const n = (t) => {
              (s = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (s = !0) : (M = t.target);
            },
            a = (i) => {
              s ||
                ((e.modifiers.bubble ||
                  (!t.contains(M) &&
                    !t.contains(i.target) &&
                    t !== M &&
                    t !== i.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  e.value(i));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (i[t.dataset.clickOutsideMouseupHandlerId] = a),
            (i[t.dataset.clickOutsideMousedownHandlerId] = n),
            document.addEventListener("mouseup", a),
            document.addEventListener("mousedown", n);
        },
        unbind: function (t) {
          var e, M;
          null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMouseupHandlerId &&
            null !== (M = t.dataset) &&
            void 0 !== M &&
            M.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", i[t.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", i[t.dataset.clickOutsideMousedownHandlerId]),
            delete i[t.dataset.clickOutsideMouseupHandlerId],
            delete i[t.dataset.clickOutsideMousedownHandlerId],
            delete t.dataset.clickOutsideMouseupHandlerId,
            delete t.dataset.clickOutsideMousedownHandlerId,
            delete t.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    42223: (t, e, M) => {
      "use strict";
      M.d(e, { Z: () => i });
      const i = {
        data: () => ({ componentsMounted: {} }),
        unreactive: () => ({ uid: m.utils.shortId() }),
        beforeCreate() {
          const t = this.$options.components;
          Object.keys(t).forEach((e) => {
            const M = t[e];
            "function" == typeof M &&
              (t[e] = function () {
                this.$set(this.componentsMounted, e, !1);
                const t = `${e}:${this.uid}:mounted`,
                  i = () => (this.componentsMounted[e] = !0);
                return (
                  this.$e.$once(t, i),
                  M(arguments).then((M) => {
                    const s = M.default;
                    return s && s.doNotWaitForMount && (this.$delete(this.componentsMounted, e), this.$e.$off(t, i)), M;
                  })
                );
              }.bind(this));
          });
        },
        created() {
          this.$e.$on("widgets:timeoutExceeded", this.onWidgetTimeout);
        },
        mounted() {
          if (Object.keys(this.componentsMounted).length) {
            const t = this.$watch(
              "componentsMounted",
              (e) => {
                Object.values(e).every((t) => t) && (this.onAllComponentsMounted(), t());
              },
              { deep: !0, immediate: !0 }
            );
          } else this.onAllComponentsMounted();
        },
        destroyed() {
          this.stopListeningToWidgetTimeout();
        },
        methods: {
          stopListeningToWidgetTimeout() {
            this.$e.$off("widgets:timeoutExceeded", this.onWidgetTimeout);
          },
          getContextUid() {
            return (this.$vnode && this.$vnode.context && this.$vnode.context.uid) || "";
          },
          onAllComponentsMounted() {
            this.onAllComponentsMountedOverride
              ? this.onAllComponentsMountedOverride()
              : this.widgetId
              ? m.widgetManager.appReady(this.widgetId)
              : this.emitComponentMounted(),
              this.stopListeningToWidgetTimeout();
          },
          emitComponentMounted() {
            this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`);
          },
          onWidgetTimeout() {
            const t = Object.keys(this.componentsMounted).filter((t) => !this.componentsMounted[t]);
            t.length && console.warn(`${this.$options.name} is awaiting ${t.join(", ")} to mount.`);
          }
        }
      };
    },
    34023: (t, e, M) => {
      "use strict";
      M.r(e), M.d(e, { default: () => o });
      var i = M(8081),
        s = M.n(i),
        n = M(23645),
        a = M.n(n)()(s());
      a.push([
        t.id,
        "\n/* stylelint-disable */\n.app-container[data-v-35f26472] { order: 100; align-self: flex-start;\n}\n.app-dash[data-v-35f26472] {\n}\n.active .app-dash[data-v-35f26472] { opacity: 1;\n}\n.placeholder[data-v-35f26472] { position: relative; display: inline-block;\n} /* inline-block needed for Firefox */\n.placeholder .hide[data-v-35f26472] { opacity: 0;\n}\n.placeholder .icon-add[data-v-35f26472] { --icon-size: 21px; position: absolute; right: 0; bottom: 4px;\n}\n.Safari .icon-add[data-v-35f26472] { -webkit-transform: translate3d(0, 0, 0);\n} /* fixes subpixel movement when hovering */\n.metric-label[data-v-35f26472] { white-space: nowrap;\n}\n.app[data-v-35f26472] { --app-padding: 27px; text-align: center;\n}\n.title-wrapper[data-v-35f26472] { padding: 0 0 12px;\n}\n.title[data-v-35f26472] { margin: -3px 0 3px; color: var(--color-accent-safe); font-size: 20px; font-weight: 600;\n}\n.description[data-v-35f26472] { margin: 4px 0; opacity: 0.7; font-size: 14px;\n}\n.tiles[data-v-35f26472] { display: flex; justify-content: space-between;\n}\n.tile[data-v-35f26472] { width: 32%; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; border-radius: var(--border-radius); cursor: pointer;\n}\n.tile[data-v-35f26472]:hover { background: var(--color-stop-1);\n}\n.tile[data-v-35f26472]:hover:active { background: var(--color-stop-2);\n}\n[data-v-35f26472] .widget-icon { --size: 24px; height: var(--size); width: var(--size); margin: 5px auto 6px; opacity: 0.9;\n}\n.widget-name[data-v-35f26472] { font-size: 15px;\n}\n.tile .badge[data-v-35f26472] { margin-top: 5px; margin-left: 0;\n}\n.mobile-close[data-v-35f26472] { position: absolute; top: var(--app-padding); right: var(--app-padding);\n}\n@media screen and (max-width: 450px) {\n.app-container[data-v-35f26472] { display: none;\n}\n\t\t/*.app { position: fixed; right: var(--app-offset); }*/\n\t\t/*\t.nipple-top-right:after { right: 104px; }*/\n}\n",
        ""
      ]);
      const o = a;
    },
    31779: (t, e, M) => {
      "use strict";
      M.d(e, { Z: () => g });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.closeApp, expression: "closeApp" }],
            staticClass: "app-container add-metric needs-hover",
            class: { active: t.popupActive }
          },
          [
            e(
              "div",
              {
                staticClass: "app-dash metric-item add-shadow",
                attrs: { "data-ob": "add-metric", "data-test": "add-metric-dash" },
                on: { click: t.toggleApp }
              },
              [
                e("div", { staticClass: "metric-stat" }, [
                  e(
                    "span",
                    { staticClass: "placeholder" },
                    [
                      e("span", { staticClass: "hide" }, [t._v("a")]),
                      t._v(" "),
                      e("inline-svg", { staticClass: "icon icon-add", attrs: { src: M(49146) } })
                    ],
                    1
                  )
                ]),
                t._v(" "),
                t._m(0)
              ]
            ),
            t._v(" "),
            e(
              "transition",
              { attrs: { name: "slide-down-fade" } },
              [
                t.popupActive
                  ? e(
                      "app-popup",
                      {
                        attrs: { position: "bottom-left", width: 420, region: "top-right", focused: t.focused },
                        nativeOn: {
                          click: function (e) {
                            t.focused = !0;
                          }
                        }
                      },
                      [
                        [
                          e("div", { staticClass: "title-wrapper" }, [
                            e("div", { staticClass: "title" }, [t._v("Add metric")]),
                            t._v(" "),
                            e("div", { staticClass: "description" }, [t._v("Keep track of important info.")])
                          ]),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "tiles" },
                            t._l(t.collections, function (M) {
                              return e(
                                "div",
                                {
                                  key: M.nameLCP,
                                  staticClass: "tile",
                                  attrs: { "data-test": "add-" + M.nameLCS },
                                  on: {
                                    click: function (e) {
                                      return t.add(M);
                                    }
                                  }
                                },
                                [
                                  e("inline-svg", { staticClass: "icon widget-icon", class: "icon-" + M.nameLCP, attrs: { src: M.icon } }),
                                  t._v(" "),
                                  e("div", { staticClass: "widget-name" }, [t._v(t._s(M.fullNameCS))]),
                                  t._v(" "),
                                  t.$plus ? t._e() : e("span", { staticClass: "badge badge-plus" }, [t._v("Plus")])
                                ],
                                1
                              );
                            }),
                            0
                          ),
                          t._v(" "),
                          t.$touch
                            ? e("span", { staticClass: "mobile-close", on: { click: t.closeApp } }, [
                                e(
                                  "span",
                                  { staticClass: "icon-wrapper u--mobile-show-bg hide" },
                                  [e("inline-svg", { staticClass: "icon icon-hide", attrs: { src: M(41226) } })],
                                  1
                                )
                              ])
                            : t._e()
                        ]
                      ],
                      2
                    )
                  : t._e()
              ],
              1
            )
          ],
          1
        );
      };
      i._withStripped = !0;
      var s = M(40063),
        n = M(42223),
        a = M(81405),
        o = M(63139);
      const d = new a.ZP({ feature: "meta add" }),
        N = {
          name: "AddMetric",
          components: { AppPopup: () => M.e(6048).then(M.bind(M, 26048)) },
          directives: { ClickOutside: s.Z },
          mixins: [n.Z],
          props: {
            disable: { type: Boolean, default: !1 },
            collections: { type: Object, required: !0 },
            standalone: { type: Boolean, default: !1 }
          },
          data: () => ({ popupActive: !1 }),
          computed: {
            nippleClass() {
              return this.openToRight ? "nipple-top-left" : "nipple-top-right";
            },
            focused: {
              get: () => o.Z.isOnTop("addMetric"),
              set(t) {
                t ? o.Z.add("addMetric") : o.Z.remove("addMetric");
              }
            }
          },
          created() {
            this.standalone && (this.widgetId = "addMetric"), m.on("globalEvent:esc", this.closeApp);
          },
          destroyed() {
            m.off("globalEvent:esc", this.closeApp);
          },
          methods: {
            add(t) {
              this.$plus ? (this.closeApp(), this.$emit("add", t.nameLCP)) : t.upsellId && this.showUpsell(t.upsellId),
                m.trigger("notification:dismiss");
            },
            toggleApp() {
              this.popupActive ? this.closeApp() : this.showApp();
            },
            showApp() {
              if (this.disable) return;
              (this.openToRight = !1), d.capture("meta add click"), (this.popupActive = !0);
              const t = document.querySelector(".popup:not(.app)");
              t && (t.style.display = "none"), (this.focused = !0);
            },
            closeApp() {
              if (!this.popupActive) return;
              this.popupActive = !1;
              const t = document.querySelector(".popup");
              t && (t.style.display = "block"), (this.focused = !1);
            },
            showUpsell(t) {
              m.cmd("modal.open", t, { eventSource: "dash" });
            }
          }
        };
      M(92039);
      const g = (0, M(51900).Z)(
        N,
        i,
        [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "metric-label" }, [t("span", { staticClass: "metric-label-name" }, [this._v("Add")])]);
          }
        ],
        !1,
        null,
        "35f26472",
        null
      ).exports;
    },
    92039: (t, e, M) => {
      var i = M(34023);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, M(45346).Z)("2b0e17f0", i, !1, { ssrId: !0 });
    },
    41226: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiPjxwYXRoIGQ9Ik0zMzYuNTU5IDY4LjYxMUwyMzEuMDE2IDE3NC4xNjVsMTA1LjU0MyAxMDUuNTQ5YzE1LjY5OSAxNS43MDUgMTUuNjk5IDQxLjE0NSAwIDU2Ljg1LTcuODQ0IDcuODQ0LTE4LjEyOCAxMS43NjktMjguNDA3IDExLjc2OS0xMC4yOTYgMC0yMC41ODEtMy45MTktMjguNDE5LTExLjc2OUwxNzQuMTY3IDIzMS4wMDMgNjguNjA5IDMzNi41NjNjLTcuODQzIDcuODQ0LTE4LjEyOCAxMS43NjktMjguNDE2IDExLjc2OS0xMC4yODUgMC0yMC41NjMtMy45MTktMjguNDEzLTExLjc2OS0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzkgMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQgNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUgMC01Ni44NDQgMTUuNjk2LTE1LjY4NyA0MS4xMjctMTUuNjg3IDU2LjgyOSAwbDEwNS41NjMgMTA1LjU1NEwyNzkuNzIxIDExLjc2N2MxNS43MDUtMTUuNjg3IDQxLjEzOS0xNS42ODcgNTYuODMyIDAgMTUuNzA1IDE1LjY5OSAxNS43MDUgNDEuMTQ1LjAwNiA1Ni44NDR6IiAvPjwvc3ZnPgo=";
    },
    49146: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5IDMyQzE5IDMwLjM0MzEgMjAuMzQzMSAyOSAyMiAyOUgyOVYyMkMyOSAyMC4zNDMxIDMwLjM0MzEgMTkgMzIgMTlDMzMuNjU2OSAxOSAzNSAyMC4zNDMxIDM1IDIyVjI5SDQyQzQzLjY1NjkgMjkgNDUgMzAuMzQzMSA0NSAzMkM0NSAzMy42NTY5IDQzLjY1NjkgMzUgNDIgMzVIMzVWNDJDMzUgNDMuNjU2OSAzMy42NTY5IDQ1IDMyIDQ1QzMwLjM0MzEgNDUgMjkgNDMuNjU2OSAyOSA0MlYzNUgyMkMyMC4zNDMxIDM1IDE5IDMzLjY1NjkgMTkgMzJaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiA2NEM0OS42NzMxIDY0IDY0IDQ5LjY3MzEgNjQgMzJDNjQgMTQuMzI2OSA0OS42NzMxIDAgMzIgMEMxNC4zMjY5IDAgMCAxNC4zMjY5IDAgMzJDMCA0OS42NzMxIDE0LjMyNjkgNjQgMzIgNjRaTTMyIDU4QzQ2LjM1OTQgNTggNTggNDYuMzU5NCA1OCAzMkM1OCAxNy42NDA2IDQ2LjM1OTQgNiAzMiA2QzE3LjY0MDYgNiA2IDE3LjY0MDYgNiAzMkM2IDQ2LjM1OTQgMTcuNjQwNiA1OCAzMiA1OFoiLz48L3N2Zz4=";
    },
    31584: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTIyLjU2MyAzMS4zMTNhOC43NSA4Ljc1IDAgMSAxIDguNzUtOC43NSA4Ljc2IDguNzYgMCAwIDEtOC43NSA4Ljc1em0wLTE1YTYuMjUgNi4yNSAwIDEgMCA2LjI1IDYuMjUxIDYuMjU5IDYuMjU5IDAgMCAwLTYuMjUtNi4yNTF6Ii8+PHBhdGggZD0iTTI1Ljg3OCAyMy44MTNoLTMuMzE2YTEuMjUgMS4yNSAwIDAgMS0xLjI1LTEuMjV2LTMuMzE0YTEuMjUgMS4yNSAwIDAgMSAyLjUgMHYyLjA2NGgyLjA2NmExLjI1IDEuMjUgMCAwIDEgMCAyLjV6Ii8+PHBhdGggZD0iTTE0LjExOSAzMS4xODhhMS4yNDQgMS4yNDQgMCAwIDEtLjE2OS0uMDEyQTE1LjMxNCAxNS4zMTQgMCAwIDEgNi43MiAzLjgyYTE1LjMxNCAxNS4zMTQgMCAwIDEgMjQuNDYgMTAuMTQ2IDEuMjUgMS4yNSAwIDAgMS0yLjQ4LjMzNCAxMi44MTMgMTIuODEzIDAgMSAwLTE0LjQxNSAxNC40IDEuMjUgMS4yNSAwIDAgMS0uMTY2IDIuNDg4eiIvPjxwYXRoIGQ9Ik0xMi42MTIgMzAuOWExLjI1IDEuMjUgMCAwIDEtMS4wMzQtLjU0NkExOS4xNzcgMTkuMTc3IDAgMCAxIDkgMjMuODEzSDMuNTZhMS4yNSAxLjI1IDAgMCAxIDAtMi41aDQuOTg3YTM4LjM4MyAzOC4zODMgMCAwIDEtLjM1OS01SDEuOTY5YTEuMjUgMS4yNSAwIDAgMSAwLTIuNWg2LjI3N2EzNS42NSAzNS42NSAwIDAgMSAuNjE4LTVINC43NDlhMS4yNSAxLjI1IDAgMSAxIDAtMi41aDQuNzNhMTYuOTg3IDE2Ljk4NyAwIDAgMSAyLjEtNC42NjcgMS4yNSAxLjI1IDAgMCAxIDIuMDY2IDEuNDA3IDEzLjQ2MSAxMy40NjEgMCAwIDAtMS41NDUgMy4yNmg3Ljc4M2EyMC4wNTcgMjAuMDU3IDAgMCAwLTEuNTcyLTMuMzI3IDEuMjUgMS4yNSAwIDEgMSAyLjE1LTEuMjczIDIyLjQ4MSAyMi40ODEgMCAwIDEgMi4wNjMgNC42aDQuNzI2YTEuMjUgMS4yNSAwIDAgMSAwIDIuNWgtNC4wNzhhMjIuMTQ2IDIyLjE0NiAwIDAgMSAuMzM3IDIuMzQ1IDEuMjUgMS4yNSAwIDEgMS0yLjQ5LjIyMyAxOS44NzUgMTkuODc1IDAgMCAwLS40LTIuNTY3aC05LjJhMzIuODMxIDMyLjgzMSAwIDAgMC0uNjY5IDVoMy4xMjJhMS4yNSAxLjI1IDAgMCAxIDAgMi41aC0zLjE4NGEzNS41NDQgMzUuNTQ0IDAgMCAwIC4zODggNWguMjM1YTEuMjUgMS4yNSAwIDAgMSAuMjQ3IDIuNDc2IDE2LjA1NiAxNi4wNTYgMCAwIDAgMi4wODUgNS4xNTggMS4yNSAxLjI1IDAgMCAxLTEuMDMxIDEuOTUyeiIvPjwvc3ZnPgo=";
    },
    77917: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjEyMTMgNDQuMzY0QzIxLjk0OTcgNDMuMTkyNCAyMS45NDk3IDQxLjI5MjkgMjMuMTIxMyA0MC4xMjEzQzI0LjI5MjkgMzguOTQ5NyAyNi4xOTI0IDM4Ljk0OTcgMjcuMzY0IDQwLjEyMTNMMjkuNjAyIDQyLjM1OTRMMzYuODQwMSAzNS4xMjEzQzM4LjAxMTcgMzMuOTQ5NyAzOS45MTEyIDMzLjk0OTcgNDEuMDgyNyAzNS4xMjEzQzQyLjI1NDMgMzYuMjkyOSA0Mi4yNTQzIDM4LjE5MjQgNDEuMDgyNyAzOS4zNjRMMzEuNzIzNiA0OC43MjMxQzMwLjU1MiA0OS44OTQ3IDI4LjY1MjUgNDkuODk0NyAyNy40ODA5IDQ4LjcyMzFDMjcuNDYyOCA0OC43MDUgMjcuNDQ1IDQ4LjY4NjcgMjcuNDI3NSA0OC42NjgzQzI3LjQwNjEgNDguNjQ4MSAyNy4zODQ5IDQ4LjYyNzUgMjcuMzY0IDQ4LjYwNjZMMjMuMTIxMyA0NC4zNjRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiA2SDQyVjNDNDIgMS4zNDMxNSA0My4zNDMxIDAgNDUgMEM0Ni42NTY5IDAgNDggMS4zNDMxNSA0OCAzVjZINTRDNTkuNTIyOCA2IDY0IDEwLjQ3NzIgNjQgMTZWNTRDNjQgNTkuNTIyOSA1OS41MjI4IDY0IDU0IDY0SDEwQzQuNDc3MTUgNjQgMCA1OS41MjI4IDAgNTRWMTZDMCAxMC40NzcyIDQuNDc3MTUgNiAxMCA2SDE2VjNDMTYgMS4zNDMxNSAxNy4zNDMxIDAgMTkgMEMyMC42NTY5IDAgMjIgMS4zNDMxNSAyMiAzVjZaTTE5IDE4QzIwLjY1NjkgMTggMjIgMTYuNjU2OSAyMiAxNVYxMkg0MlYxNUM0MiAxNi42NTY5IDQzLjM0MzEgMTggNDUgMThDNDYuNjU2OSAxOCA0OCAxNi42NTY5IDQ4IDE1VjEySDU0QzU2LjIwOTEgMTIgNTggMTMuNzkwOSA1OCAxNlYyMEg2VjE2QzYgMTMuNzkwOSA3Ljc5MDg2IDEyIDEwIDEySDE2VjE1QzE2IDE2LjY1NjkgMTcuMzQzMSAxOCAxOSAxOFpNNiAyNlY1NEM2IDU2LjIwOTEgNy43OTA4NiA1OCAxMCA1OEg1NEM1Ni4yMDkxIDU4IDU4IDU2LjIwOTEgNTggNTRWMjZINloiLz48L3N2Zz4=";
    },
    80660: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDFDNjEuNjU2OCAxIDYzIDIuMzQzMTUgNjMgNFY0Ljk3NTcyQzYzLjAwMDEgNC45OTA3OCA2My4wMDAxIDUuMDA1ODMgNjMgNS4wMjA4OFYxM0M2MyAxNC42NTY5IDYxLjY1NjggMTYgNjAgMTZDNTguMzQzMSAxNiA1NyAxNC42NTY5IDU3IDEzVjExLjM1N0w0Ni42NzI2IDE5Ljg2MThDNDQuODc4OCAyMS4zMzkxIDQyLjUzMTMgMjEuOTYzNCA0MC4yNDA2IDIxLjU3MjNMMjMuOTczMiAxOC43OTQ5QzIzLjQ2NTQgMTguNzA4MiAyMi45NDM3IDE4LjgyMDggMjIuNTE2OSAxOS4xMDkyTDUuNjc5NTcgMzAuNDg1OEM0LjMwNjcyIDMxLjQxMzQgMi40NDE4MyAzMS4wNTI0IDEuNTE0MjMgMjkuNjc5NkMwLjU4NjYyOCAyOC4zMDY3IDAuOTQ3NTczIDI2LjQ0MTggMi4zMjA0MiAyNS41MTQyTDE5LjE1NzcgMTQuMTM3N0MyMC44NjUxIDEyLjk4NDEgMjIuOTUxOCAxMi41MzM3IDI0Ljk4MjkgMTIuODgwNUw0MS4yNTA0IDE1LjY1NzlDNDEuODIzIDE1Ljc1NTYgNDIuNDA5OSAxNS41OTk2IDQyLjg1ODQgMTUuMjMwM0w1Mi44NTIzIDdINTFDNDkuMzQzMSA3IDQ4IDUuNjU2ODUgNDggNEM0OCAyLjM0MzE1IDQ5LjM0MzEgMSA1MSAxSDYwWiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkgMjVDMjYuMjM4NiAyNSAyNCAyNy4yMzg2IDI0IDMwVjU4QzI0IDYwLjc2MTQgMjYuMjM4NiA2MyAyOSA2M0gzNUMzNy43NjE0IDYzIDQwIDYwLjc2MTQgNDAgNThWMzBDNDAgMjcuMjM4NiAzNy43NjE0IDI1IDM1IDI1SDI5Wk0zNCA1N0gzMFYzMUgzNFY1N1oiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDM5QzcuMjM4NTcgMzkgNSA0MS4yMzg2IDUgNDRWNThDNSA2MC43NjE0IDcuMjM4NTcgNjMgMTAgNjNIMTZDMTguNzYxNCA2MyAyMSA2MC43NjE0IDIxIDU4VjQ0QzIxIDQxLjIzODYgMTguNzYxNCAzOSAxNiAzOUgxMFpNMTEgNTdWNDVIMTVWNTdIMTFaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAzN0M0MyAzNC4yMzg2IDQ1LjIzODYgMzIgNDggMzJINTRDNTYuNzYxNCAzMiA1OSAzNC4yMzg2IDU5IDM3VjU4QzU5IDYwLjc2MTQgNTYuNzYxNCA2MyA1NCA2M0g0OEM0NS4yMzg2IDYzIDQzIDYwLjc2MTQgNDMgNThWMzdaTTQ5IDM4VjU3SDUzVjM4SDQ5WiIgLz48L3N2Zz4=";
    }
  }
]);
