(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4719],
  {
    46644: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var n = a(8081),
        i = a.n(n),
        s = a(23645),
        r = a.n(s)()(i());
      r.push([
        e.id,
        "\n/* stylelint-disable */\n.cutout[data-v-7f41b092] { fill: black;\n}\n.mask-fade-enter-active[data-v-7f41b092], .mask-fade-leave-active[data-v-7f41b092] { transition: fill var(--sub-step-transition-duration) ease;\n}\n.mask-fade-enter[data-v-7f41b092], .mask-fade-leave-to[data-v-7f41b092] { fill: white;\n}\n",
        ""
      ]);
      const o = r;
    },
    16173: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var n = a(8081),
        i = a.n(n),
        s = a(23645),
        r = a.n(s)()(i());
      r.push([
        e.id,
        "\n/* stylelint-disable */\n.tour[data-v-8977ef26] { --sub-step-transition-duration: 0.5s; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 100; display: flex; flex-direction: column; align-items: stretch; justify-content: center;\n}\n\n\t/* Progress Bar — Move to component library */\n.progress[data-v-8977ef26] { padding: 10px; position: absolute; top: 0; right: 0; left: 0; display: flex; align-items: center; justify-content: center;\n}\n.progress-item-wrapper[data-v-8977ef26] { --size: 10px; padding: 5px; opacity: 0.5; cursor: pointer; transition: opacity 0.05s ease; /* padding: clickable area */\n}\n.progress-item-wrapper[data-v-8977ef26]:hover { opacity: 0.7;\n}\n.progress-item-wrapper[data-v-8977ef26]:hover:active { opacity: 0.9;\n}\n.progress-item-wrapper.active[data-v-8977ef26] { opacity: 1;\n}\n.progress-item-wrapper.disabled[data-v-8977ef26] { pointer-events: none;\n}\n.progress-item[data-v-8977ef26] { --size: 10px; height: var(--size); min-width: var(--size); display: flex; align-items: center; justify-content: center; background-color: white; border-radius: 300px; color: black; font-size: 11px; font-weight: 700; line-height: 1.1; text-transform: uppercase;\n}\n.active > .progress-item[data-v-8977ef26] { padding: 8px 24px; opacity: 1;\n}\n.skip[data-v-8977ef26] { width: 20px; position: absolute; right: 20px; top: 20px; opacity: 0.7; cursor: pointer; fill: white;\n}\n.skip[data-v-8977ef26]:hover { opacity: 1;\n}\n[data-v-8977ef26] .heading { font-size: 2.25em; font-weight: 700;\n}\n[data-v-8977ef26] .subheading { margin: 18px 0; padding-bottom: 4px; font-size: 20px; line-height: 1.4;\n}\n[data-v-8977ef26] .subheading p:first-child { margin-top: 0;\n}\n[data-v-8977ef26] .subheading p:last-child { margin-bottom: 0;\n}\n[data-v-8977ef26] .small { margin-top: -7px; padding-bottom: 3px; font-size: 1rem;\n}\n[data-v-8977ef26] .button { --h-padding: 34px; --v-padding: 9px; min-width: 130px; align-self: flex-start; align-items: baseline; justify-content: center; background: rgba(255,255,255,0.05); font-weight: 700; transition: 0.1s ease;\n}\n[data-v-8977ef26] .button:hover { background: rgba(255,255,255,0.1);\n}\n[data-v-8977ef26] .button:hover:active { background: rgba(255,255,255,0.15);\n}\n[data-v-8977ef26] .button .icon { height: 10px; margin-right: -7px; margin-left: 6px; fill: white;\n}\n[data-v-8977ef26] .button-cancel-container { display: flex; justify-content: center;\n}\n[data-v-8977ef26] .button-cancel { --padding: 9px; margin: 7px calc(var(--padding) * -1) 0; padding: var(--padding); align-self: flex-start; opacity: 0.85; cursor: pointer; font-size: 12px; font-weight: 800; text-transform: uppercase;\n}\n[data-v-8977ef26] .button-cancel:hover { opacity: 1;\n}\n[data-v-8977ef26] .button-cancel:hover:active { opacity: 0.7;\n}\n\n\t\t/* Fullscreen */\n[data-v-8977ef26] .tour-fullscreen { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n[data-v-8977ef26] .tour-fullscreen .cta { width: 100%; max-width: 62ch; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center;\n}\n[data-v-8977ef26] .tour-fullscreen .subheading { margin: 1.5em 0; text-align: left;\n}\n[data-v-8977ef26] .tour-fullscreen .button,[data-v-8977ef26] .tour-fullscreen .button-cancel { align-self: unset;\n}\n.overlay[data-v-8977ef26] { z-index: -1;\n}\n.overlay[data-v-8977ef26] svg { align-self: stretch; flex: 1 1 100%;\n}\n.fade-enter-active[data-v-8977ef26], .fade-leave-active[data-v-8977ef26] { transition: opacity var(--sub-step-transition-duration) ease;\n}\n.fade-enter[data-v-8977ef26], .fade-leave-to[data-v-8977ef26] { opacity: 0;\n}\n",
        ""
      ]);
      const o = r;
    },
    24719: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => c });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          {
            staticClass: "tour dark dark-full",
            attrs: { "data-test": "tour" },
            on: {
              mousedown: function (e) {
                e.stopPropagation();
              },
              mouseup: function (e) {
                e.stopPropagation();
              },
              click: function (e) {
                e.stopPropagation();
              }
            }
          },
          [
            e.progressVisible
              ? t(
                  "div",
                  { staticClass: "progress" },
                  e._l(e.subSteps, function (a, n) {
                    return t(
                      "div",
                      {
                        key: n,
                        staticClass: "progress-item-wrapper",
                        class: { active: e.activeSubStepIndex === n, disabled: e.activeSubStep.lockProgressBar || a.lockProgressBar },
                        attrs: { "data-test": "progress-btn" },
                        on: {
                          click: function (t) {
                            return e.$emit("goToSubStep", n);
                          }
                        }
                      },
                      [
                        t("div", { staticClass: "progress-item" }, [
                          e._v(e._s(e.activeSubStepIndex === n ? e.activeSubStepProgressText : ""))
                        ])
                      ]
                    );
                  }),
                  0
                )
              : e._e(),
            e._v(" "),
            t(
              "transition",
              {
                attrs: { appear: "", name: "fade", mode: "out-in" },
                on: {
                  "before-enter": function (t) {
                    return e.$emit("beforeSubStepEnter");
                  },
                  leave: function (t) {
                    e.maskActive = !1;
                  },
                  "after-leave": function (t) {
                    return e.$emit("afterSubStepLeave");
                  }
                }
              },
              [
                t(
                  e.activeSubComponent,
                  e._b(
                    {
                      key: e.activeSubStepIndex,
                      tag: "component",
                      class: e.activeSubStepClass,
                      attrs: {
                        plans: e.plans,
                        sales: e.sales,
                        "plans-error": e.plansError,
                        "parent-modal-name": e.name,
                        name: e.activeSubStep.name
                      },
                      on: {
                        dismiss: function (t) {
                          return e.$emit("stepComplete", { dismissed: !0 });
                        },
                        next: function (t) {
                          return e.$emit("subStepComplete");
                        },
                        updateMaskDimensions: e.updateMaskDimensions,
                        maskReady: function (t) {
                          e.maskActive = !0;
                        }
                      }
                    },
                    "component",
                    e.activeSubStep.subStepProps,
                    !1
                  )
                )
              ],
              1
            ),
            e._v(" "),
            t("masked-overlay", {
              key: e.maskKey,
              staticClass: "overlay tour-overlay",
              attrs: { "mask-dimensions": e.maskDimensions, "mask-active": e.maskActive }
            })
          ],
          1
        );
      };
      n._withStripped = !0;
      var i = function () {
        var e = this,
          t = e._self._c;
        return t(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: `0 0 ${e.overlayDimensions.width} ${e.overlayDimensions.height}`,
              fill: "rgba(0,0,0,0.7)"
            }
          },
          [
            e.maskActive
              ? t(
                  "mask",
                  { attrs: { id: "mask" } },
                  [
                    t("rect", { attrs: { x: "0", y: "0", width: "100%", height: "100%", fill: "white" } }),
                    e._v(" "),
                    e._l(e.maskDimensions, function (e) {
                      return t("transition", { key: e.x, attrs: { name: "mask-fade", mode: "out-in" } }, [
                        t("rect", {
                          staticClass: "cutout",
                          attrs: { x: e.x, y: e.y, rx: e.borderRadius, ry: e.borderRadius, height: e.height, width: e.width, fill: "black" }
                        })
                      ]);
                    })
                  ],
                  2
                )
              : e._e(),
            e._v(" "),
            t("rect", { attrs: { x: "0", y: "0", width: "100%", height: "100%", mask: "url(#mask)" } })
          ]
        );
      };
      function s() {
        const e = document.querySelector(".region.full");
        return { width: (null == e ? void 0 : e.clientWidth) || 0, height: (null == e ? void 0 : e.clientHeight) || 0 };
      }
      i._withStripped = !0;
      const r = {
        name: "MaskedOverlay",
        props: { maskDimensions: { type: Array, required: !0 }, maskActive: { type: Boolean, default: !0 } },
        data: () => ({ overlayDimensions: s() }),
        created() {
          m.on("devPanelToggled", this.onDevPanelToggle), window.addEventListener("resize", this.onResize);
        },
        destroyed() {
          m.off("devPanelToggled", this.onDevPanelToggle), window.removeEventListener("resize", this.onResize);
        },
        methods: {
          onResize() {
            this.overlayDimensions = s();
          },
          onDevPanelToggle() {
            this.$nextTick(this.onResize);
          }
        }
      };
      a(4335);
      var o = a(51900);
      const l = (0, o.Z)(r, i, [], !1, null, "7f41b092", null).exports;
      var d = a(81405);
      const p = {
        name: "Tour",
        components: { MaskedOverlay: l },
        props: {
          id: { type: String, required: !0 },
          name: { type: String, default: "" },
          subSteps: { type: Array, default: null },
          activeSubStepIndex: { type: Number, default: 0 },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) },
          plansError: { type: Boolean, default: !1 },
          onCreated: { type: Function, default: () => {} },
          onDestroyed: { type: Function, default: () => {} },
          progressVisible: { type: Boolean, default: !0 }
        },
        data: () => ({ maskDimensions: [], maskKey: 0, maskActive: !1 }),
        computed: {
          activeSubStepProgressText() {
            return this.activeSubStep.hasOwnProperty("progressBarText")
              ? this.activeSubStep.progressBarText
              : this.activeSubStep.subStepProps.heading;
          },
          activeSubStepClass() {
            var e;
            return (
              this.activeSubStep.class ||
              "sub-step-" + (null === (e = this.activeSubStep.name) || void 0 === e ? void 0 : e.toLowerCase().replaceAll(" ", "-"))
            );
          },
          activeSubStep() {
            var e;
            return (null === (e = this.subSteps) || void 0 === e ? void 0 : e[this.activeSubStepIndex]) || null;
          },
          activeSubComponent() {
            var e;
            return (null === (e = this.activeSubStep) || void 0 === e ? void 0 : e.component) || "";
          }
        },
        created() {
          d.ZP.disableCaptureExceptFeatures(["onboarding", "paywall", "upgrade", "notifications"]), (m.tourActive = !0), this.onCreated();
        },
        destroyed() {
          (m.tourActive = !1), this.onDestroyed(), d.ZP.enableCaptureForAllFeatures();
        },
        methods: {
          updateMaskDimensions(e) {
            (this.maskDimensions = e), (this.maskKey += 1);
          }
        }
      };
      a(12586);
      const c = (0, o.Z)(p, n, [], !1, null, "8977ef26", null).exports;
    },
    4335: (e, t, a) => {
      var n = a(46644);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("613c1f3b", n, !1, { ssrId: !0 });
    },
    12586: (e, t, a) => {
      var n = a(16173);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("23e7e778", n, !1, { ssrId: !0 });
    }
  }
]);
