(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4139],
  {
    60063: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => p });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        s = i.n(o)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.modal-component[data-v-3ad16903] { --modal-padding: 40px;\n}\n.fade-slide-down-enter-active[data-v-3ad16903], .fade-slide-down-leave-active[data-v-3ad16903] { transition: all 0.5s ease-out;\n}\n.fade-slide-down-enter[data-v-3ad16903], .fade-slide-down-leave-to[data-v-3ad16903] { opacity: 0; transform: translateY(0px);\n}\n.fade-slide-up-enter-active[data-v-3ad16903], .fade-slide-up-leave-active[data-v-3ad16903] { transition: all 0.5s ease-out;\n}\n.fade-slide-up-enter[data-v-3ad16903], .fade-slide-up-leave-to[data-v-3ad16903] { opacity: 0; transform: translateY(0px);\n}\n[data-v-3ad16903] .opt-out { margin-bottom: 0px; opacity: 0.45; font-size: 0.8125rem; line-height: 1.4;\n}\n[data-v-3ad16903] .opt-out-button { margin-left: -3px; padding: 3px; cursor: pointer; text-decoration: underline; white-space: nowrap;\n}\n[data-v-3ad16903] .opt-out-button:hover { opacity: 0.75;\n}\n",
        ""
      ]);
      const p = s;
    },
    54215: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => p });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        s = i.n(o)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.popup[data-v-dec6d572] { width: 390px; position: fixed; z-index: 100; overflow: visible;\n}\n.popup.popup-pulse[data-v-dec6d572]:before { --size: 26px; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; opacity: 0; animation: 1.8s popup-pulse-dec6d572 infinite forwards; border-radius: 20px; box-shadow: inset 0 0 var(--size) calc(var(--size)*0.5) white, 0 0 var(--size) calc(var(--size)*0.5) white; content: '';\n}\n@keyframes popup-pulse-dec6d572 {\n0% { opacity: 0.6; transform: scale(1);\n}\n\t\t\t/*0.1% { opacity: 0.6; }*/\n100% { opacity: 0; transform: scale(1.15);\n}\n}\n.app[data-v-dec6d572] { --app-padding: 26px; position: relative; padding: 0;\n}\n.popup.popup-notification .app[data-v-dec6d572] { overflow: hidden; box-shadow: 0 4px 175px rgba(0 0 0 / 0.85);\n}\n.popup:not(.popup-notification) .notification-image[data-v-dec6d572] { margin-top: 0;\n}\n.popup-content[data-v-dec6d572] { padding: var(--app-padding); display: flex; flex-direction: column; gap: 0.5rem;\n}\n.popup-header[data-v-dec6d572] { display: flex; flex-direction: column;\n}\n.popup-title[data-v-dec6d572] { padding-right: 20px\n}\n.popup-hide[data-v-dec6d572] { padding: calc(var(--app-padding) + 6px) var(--app-padding) 13px 13px; position: absolute; top: 0; right: 0; z-index: 1; display: flex; align-items: center; justify-content: center;\n}\n.popup-hide .icon[data-v-dec6d572] { fill: var(--color-text);\n}\n.popup-body[data-v-dec6d572] { padding-right: 20px; font-size: 0.9375rem; line-height: 1.5;\n}\n.popup-footer[data-v-dec6d572] { margin: 6px 0 -1px; display: flex; align-items: center; gap: 0.5rem;\n}\n.button-primary[data-v-dec6d572] { margin-right: 15px;\n}\n.button-text[data-v-dec6d572] { padding: 10px; opacity: 0.6; background: none; cursor: pointer; font-size: 0.8125rem; display: flex; align-items: center; align-self: stretch; padding: 0 10px 1px;\n}\n.button-text[data-v-dec6d572]:hover { opacity: 0.8;\n}\n.button-secondary[data-v-dec6d572] { padding: 0 10px; align-self: stretch; display: flex; align-items: center; opacity: 0.7; cursor: pointer; font-size: 14px; font-weight: 500;\n}\n.button-secondary[data-v-dec6d572]:hover { opacity: 0.85;\n}\n.button-secondary[data-v-dec6d572]:hover:active { opacity: 0.7;\n}\n.popup-notification-footer[data-v-dec6d572] { margin: 0.375rem 0 0;\n}\n.popup-notification-footer .button-primary[data-v-dec6d572] { margin-right: 0;\n}\n",
        ""
      ]);
      const p = s;
    },
    84139: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => S });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "modal-container",
            attrs: { "data-test": "modal-container" },
            on: {
              mousedown: function (t) {
                t.stopPropagation();
              },
              mouseup: function (t) {
                t.stopPropagation();
              }
            }
          },
          [
            e(
              "transition",
              { attrs: { name: t.transitionName, css: !t.transitionDisabled, mode: "out-in" }, on: { "after-enter": t.afterEnter } },
              [
                t.stepActive
                  ? e(
                      t.activeStep.component || "Popup",
                      t._b(
                        {
                          key: t.activeStep.id,
                          tag: "component",
                          staticClass: "modal-component",
                          attrs: {
                            plans: t.plans,
                            "plans-error": t.plansError,
                            sales: t.sales,
                            "active-sub-step-index": t.activeSubStepIndex
                          },
                          on: {
                            dismiss: t.dismissModal,
                            stepComplete: t.handleStepCompletion,
                            subStepComplete: t.handleSubStepCompletion,
                            goToSubStep: t.goToSubStep,
                            upgrade: t.showUpgrade,
                            targetElementMissing: t.handleElementMissingError
                          }
                        },
                        "component",
                        t.activeStep,
                        !1
                      )
                    )
                  : t._e()
              ],
              1
            ),
            t._v(" "),
            e("transition-group", { attrs: { duration: 500 } }, [
              t.activeStep && t.activeStep.customCss
                ? e("div", { key: t.activeStep.id, domProps: { innerHTML: t._s("<style>" + t.activeStep.customCss + "</style>") } })
                : t._e(),
              t._v(" "),
              t.activeSubStep && t.activeSubStep.customCss
                ? e("div", { key: t.activeSubStepIndex, domProps: { innerHTML: t._s("<style>" + t.activeSubStep.customCss + "</style>") } })
                : t._e()
            ])
          ],
          1
        );
      };
      a._withStripped = !0;
      var n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "popup nipple",
            class: [
              t.nippleClass,
              t.pulseAnimation ? "popup-pulse" : "",
              { "popup-notification brand-full-override": !!t.notificationStyling }
            ],
            style: t.popupStyles,
            attrs: { "data-test": "popup", "data-test-id": t.id }
          },
          [
            e("div", { staticClass: "app" }, [
              t.notificationStyling ? e("div", { staticClass: "popup-highlight-bar notification-gradient" }) : t._e(),
              t._v(" "),
              t.imageUrl
                ? e("div", { staticClass: "popup-image notification-image" }, [
                    e("img", { attrs: { src: t.imageUrl, alt: `${t.headerText} demonstration` } })
                  ])
                : t._e(),
              t._v(" "),
              e(
                "div",
                {
                  staticClass: "icon-wrapper icon-wrapper-close",
                  class: [
                    t.notificationStyling ? "notification-hide" : "popup-hide",
                    {
                      "u--mobile-show-bg": !t.notificationStyling,
                      dark: t.notificationStyling && t.imageUrl && !t.notificationStyling.image_has_white_background,
                      light: t.notificationStyling && t.imageUrl && t.notificationStyling.image_has_white_background
                    }
                  ],
                  attrs: { "data-test": "close" },
                  on: { click: t.close }
                },
                [e("inline-svg", { staticClass: "icon icon-cancel", attrs: { src: i(21794) } })],
                1
              ),
              t._v(" "),
              e("div", { staticClass: "popup-content" }, [
                t.headerText
                  ? e("header", { staticClass: "popup-header" }, [
                      e("h3", { class: [t.notificationStyling ? "notification-title" : "popup-title"] }, [t._v(t._s(t.headerText))])
                    ])
                  : t._e(),
                t._v(" "),
                e("div", {
                  class: t.notificationStyling ? "notification-description" : "popup-body",
                  domProps: { textContent: t._s(t.bodyText) }
                }),
                t._v(" "),
                t.ctaCallback || t.secondaryCallback || t.ctaTriggersComplete
                  ? e("div", { staticClass: "popup-footer", class: { "popup-notification-footer": !!t.notificationStyling } }, [
                      t.ctaCallback || t.ctaTriggersComplete
                        ? e(
                            "span",
                            {
                              staticClass: "button button-primary",
                              class: [t.ctaClasses, { "notification-button": !!t.notificationStyling }],
                              attrs: { "data-test": "cta" },
                              on: { click: t.clickCta }
                            },
                            [
                              t._v("\n\t\t\t\t\t" + t._s(t.ctaText) + "\n\t\t\t\t\t"),
                              t.notificationStyling
                                ? e("inline-svg", { staticClass: "icon notification-button-chevron", attrs: { src: i(67277) } })
                                : t._e()
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      t.secondaryCallback
                        ? e(
                            "span",
                            {
                              class: [t.notificationStyling ? "button-text" : "button-secondary", t.secondaryClasses],
                              attrs: { "data-test": "secondary" },
                              on: { click: t.clickSecondary }
                            },
                            [t._v(t._s(t.secondaryText))]
                          )
                        : t._e()
                    ])
                  : t._e()
              ])
            ])
          ]
        );
      };
      n._withStripped = !0;
      const o = {
        name: "Popup",
        customNipplePositionId: "customNipplePosition",
        props: {
          id: { type: String, required: !0 },
          targetElementSelector: { type: String, required: !0 },
          elementReadyEvent: { type: String, default: "" },
          position: { type: String, default: "top-right" },
          headerText: { type: String, default: "" },
          bodyText: { type: String, default: "" },
          ctaText: { type: String, default: "Learn more…" },
          ctaCallback: { type: Function, default: null },
          ctaClasses: { type: String, default: "" },
          secondaryText: { type: String, default: "" },
          secondaryCallback: { type: Function, default: null },
          secondaryClasses: { type: String, default: "" },
          hideCallback: { type: Function, default: null },
          nextButtonText: { type: String, default: "Next" },
          windowEdgePadding: { type: Number, default: 7 },
          targetDistance: { type: Number, default: 0 },
          pulseAnimation: { type: Boolean, default: !0 },
          imageUrl: { type: String, default: "" },
          notificationStyling: { type: Object, default: () => {} },
          ctaTriggersComplete: { type: Boolean, default: !1 }
        },
        data: () => ({ nippleClass: "", popupStyles: {} }),
        mounted() {
          m.on("globalEvent:window:resize devPanelToggled", this.handleResize);
          const t = this.getTargetElement();
          t ? this.setPosition(t) : this.elementReadyEvent && m.on(this.elementReadyEvent, this.setPosition);
        },
        destroyed() {
          m.off("globalEvent:window:resize", this.handleResize);
        },
        methods: {
          calculatePosition(t, e) {
            try {
              const i = () => (m > h - l - this.windowEdgePadding ? `${Math.round(h - m - this.windowEdgePadding)}px` : ""),
                a = () => (h - S < l + this.windowEdgePadding ? `${Math.round(h - S - this.windowEdgePadding)}px` : ""),
                n = (t) => (t < this.windowEdgePadding ? this.windowEdgePadding - t : 0),
                o = (t) => `${t}: ${u - c}px`;
              let s = {},
                p = "",
                d = t.getBoundingClientRect(),
                l = 350,
                c = 0,
                r = 6,
                u = 33,
                h = window.innerWidth,
                g = (d.right - d.left) / 2 + d.left,
                m = g - u - r,
                S = h - g - u - r,
                v = d.bottom + this.targetDistance,
                y = window.innerHeight - d.top + this.targetDistance;
              switch (e) {
                case "top-left":
                  (c = n(S)), c && (p = o("right")), (s = { left: "auto", right: `${S + c}px`, bottom: `${y}px`, "max-width": a() });
                  break;
                case "top-right":
                  (c = n(m)), c && (p = o("left")), (s = { left: `${m + c}px`, top: "auto", bottom: `${y}px`, "max-width": i() });
                  break;
                case "bottom-left":
                  (c = n(S)), c && (p = o("right")), (s = { left: "auto", right: `${S + c}px`, top: `${v}px`, "max-width": a() });
                  break;
                case "bottom-right":
                  (c = n(m)), c && (p = o("left")), (s = { left: `${m + c}px`, top: `${v}px`, "max-width": i() });
              }
              return { popupCss: s, nipplePositionOverride: p };
            } catch (t) {
              return this.$emit("targetElementMissing"), {};
            }
          },
          getNippleClass() {
            switch (this.position) {
              case "top-left":
                return "nipple-bottom-right";
              case "top-right":
                return "nipple-bottom-left";
              case "bottom-left":
                return "nipple-top-right";
              case "bottom-right":
                return "nipple-top-left";
            }
          },
          setPosition(t = this.getTargetElement()) {
            let e = this.calculatePosition(t, this.position);
            (this.popupStyles = e.popupCss),
              (this.nippleClass = this.getNippleClass()),
              e.nipplePositionOverride
                ? this.createStyleElement(
                    this.$options.customNipplePositionId,
                    `.popup[class*=nipple]:after { ${e.nipplePositionOverride} !important; }`
                  )
                : this.removeStyleElement(this.$options.customNipplePositionId);
          },
          handleResize(t) {
            !0 === t ? this.$nextTick(this.setPosition) : (clearTimeout(this.timeout), (this.timeout = setTimeout(this.setPosition, 1e3)));
          },
          clickCta() {
            this.ctaCallback ? this.ctaCallback() : this.ctaTriggersComplete && this.completeStep();
          },
          clickSecondary() {
            this.secondaryCallback && this.secondaryCallback();
          },
          completeStep() {
            this.$emit("stepComplete");
          },
          close() {
            this.hideCallback && this.hideCallback(), this.$emit("dismiss");
          },
          createStyleElement(t, e) {
            let i = document.createElement("style"),
              a = document.createTextNode(e);
            i.setAttribute("id", t), i.setAttribute("type", "text/css"), i.appendChild(a), document.head.appendChild(i);
          },
          removeStyleElement(t) {
            let e = document.head.querySelector(`#${t}`);
            e && e.parentNode.removeChild(e);
          },
          getTargetElement() {
            return document.querySelector(this.targetElementSelector);
          }
        }
      };
      i(48782);
      var s = i(51900);
      const p = (0, s.Z)(o, n, [], !1, null, "dec6d572", null).exports;
      var d = i(92729),
        l = i(51089),
        c = i(65238),
        r = i(63420),
        u = i(60617),
        h = i(51740);
      const g = {
        name: "ModalContainer",
        components: { Popup: p },
        data: () => ({ plans: {}, plansError: !1, sales: {}, transitionDisabled: !1 }),
        computed: {
          ...(0, r.Ah)(u.a, ["activeStep", "activeSubStepIndex"]),
          ...(0, r.rn)(u.a, ["stepActive"]),
          transitionName() {
            return (
              this.activeStep.transitionName ||
              (["top-right", "top-left"].includes(this.activeStep.position) ? "fade-slide-up" : "fade-slide-down")
            );
          },
          activeSubStep() {
            return (this.activeStep && this.activeStep.subSteps && this.activeStep.subSteps[this.activeSubStepIndex]) || null;
          }
        },
        watch: {
          async activeStep(t, e) {
            var i;
            t !== e && (t.key && t.key === e.key && (this.transitionDisabled = !0), null === (i = t.onShow) || void 0 === i || i.call(t)),
              null != t &&
                t.getPlanInfo &&
                !Object.keys(this.plans).length &&
                this.getPlanInfo()
                  .then(({ plans: t = {}, sales: e = {} } = {}) => {
                    (this.plans = t), (this.sales = e || {});
                  })
                  .catch((t) => {
                    (this.plansError = !0), console.error(t);
                  });
          },
          "activeStep.hideOtherApps"(t) {
            t ? m.widgetManager.hideApps({ lock: !0 }) : m.widgetManager.showApps({ unlock: !0 });
          }
        },
        created() {
          (m.modals = { stepsEnum: c.os, definitions: l.U }),
            m.on("modal:show", this.showModal),
            m.on("modal:close", this.dismissModal),
            m.on("modal:showUpgrade", this.showUpgrade),
            m.trigger("modalContainer:created:checkForced"),
            m.trigger("modalContainer:created"),
            this.checkModalOnLoad();
        },
        destroyed() {
          m.off("modal:show", this.showModal),
            m.off("modal:close", this.dismissModal),
            m.off("modal:showUpgrade", this.showUpgrade),
            delete m.modals;
        },
        methods: {
          async afterEnter() {
            await this.$nextTick(), (this.transitionDisabled = !1);
          },
          updateStepActiveProperties(t, { deactivate: e, activeSubStepIndex: i } = {}) {
            e
              ? (this.$delete(t, "activeSubStepIndex"), this.$delete(t, "active"))
              : (t.active || this.$set(t, "active", !0), t.subSteps && void 0 !== i && this.$set(t, "activeSubStepIndex", i));
          },
          async showModal(t, e) {
            void 0 === e && (e = "firstSubStep" in t ? t.firstSubStep() : 0),
              "function" == typeof t.component && (await t.component()),
              (this.activeStep = t),
              (this.activeSubStepIndex = e),
              this.updateStepActiveProperties(this.activeStep, { activeSubStepIndex: this.activeSubStepIndex });
          },
          async handleSubStepCompletion(t) {
            var e, i;
            const a = "modal:subStepCompletionIntercepted";
            if ((!0 === t && this.$e.$off(a), this.activeSubStep.interceptNextStep && !0 !== t))
              return (
                this.$e.$off(a),
                this.$e.$on(a, this.handleSubStepCompletion.bind(this, !0)),
                void this.$e.$emit("modal:interceptSubStepCompletion")
              );
            const n = this.activeSubStep,
              o = this.activeSubStepIndex,
              s = this.activeStep.subSteps && this.activeSubStepIndex < this.activeStep.subSteps.length - 1;
            s &&
              (this.activeSubStepIndex++,
              this.updateStepActiveProperties(this.activeStep, { activeSubStepIndex: this.activeSubStepIndex })),
              await (null === (e = (i = this.activeStep).onSubStepComplete) || void 0 === e
                ? void 0
                : e.call(i, {
                    activeSubStep: n,
                    activeSubStepIndex: o,
                    nextSubStepIndex: this.activeSubStepIndex,
                    nextSubStep: this.activeSubStep,
                    hasSubStepsRemaining: s
                  })),
              s || this.handleStepCompletion();
          },
          async handleStepCompletion({ dismissed: t } = {}) {
            var e, i;
            const a = this.activeStep;
            await (null === (e = a[t ? "onDismiss" : "onComplete"]) || void 0 === e
              ? void 0
              : e.call(a, { activeSubStep: this.activeSubStep, activeSubStepIndex: this.activeSubStepIndex })),
              this.updateStepActiveProperties(a, { deactivate: !0 }),
              (this.activeSubStepIndex = 0),
              await (null === (i = a.afterComplete) || void 0 === i ? void 0 : i.call(a)),
              a.id === this.activeStep.id && (this.activeStep = {});
          },
          showUpgrade() {
            var t, e;
            null === (t = (e = this.activeStep).onUpgradeClick) || void 0 === t || t.call(e),
              m.utils.useAppleAppPayment() && m.isLoggedIn()
                ? m.utils.openAppleUpgrade()
                : this.showModal(l.U[c.os.UPGRADE], void 0, { completeCurrentStep: !0 });
          },
          dismissModal() {
            this.handleStepCompletion({ dismissed: !0 });
          },
          goToSubStep(t) {
            (this.activeSubStepIndex = t),
              this.updateStepActiveProperties(this.activeStep, { activeSubStepIndex: this.activeSubStepIndex });
          },
          handleElementMissingError() {
            this.$set(this.activeStep, "error", !0);
          },
          getPlanInfo() {
            return this.$xhr.get("account/plans", { timeout: 8e3 }).then(({ data: t }) => {
              if (!t) throw new Error("no data for plans");
              return localStorage.getItem("sale:force") && m.utils.isDev() && (t.personal.sales = { yearly: d.om }), t.personal;
            });
          },
          checkModalOnLoad() {
            const t = localStorage.getObject(h.RR);
            t && (this.showModal(l.U[c.os[t.step]], t.subStepIndex), localStorage.removeItem(h.RR));
          }
        }
      };
      i(98842);
      const S = (0, s.Z)(g, a, [], !1, null, "3ad16903", null).exports;
    },
    98842: (t, e, i) => {
      var a = i(60063);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("4f207808", a, !1, { ssrId: !0 });
    },
    48782: (t, e, i) => {
      var a = i(54215);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("2c3d34d4", a, !1, { ssrId: !0 });
    },
    21794: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K";
    },
    67277: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUyLjQ2NDUgMTYuNDY0NUM1NC40MTcxIDE0LjUxMTggNTcuNTgyOSAxNC41MTE4IDU5LjUzNTUgMTYuNDY0NUM2MS40ODgyIDE4LjQxNzEgNjEuNDg4MiAyMS41ODI5IDU5LjUzNTUgMjMuNTM1NUwzNS41MzU1IDQ3LjUzNTVDMzUuMjkxNSA0Ny43Nzk2IDM1LjAyODQgNDcuOTkzMiAzNC43NTEyIDQ4LjE3NjJDMzIuODEwNCA0OS40NTc2IDMwLjE3MyA0OS4yNDQxIDI4LjQ2NDUgNDcuNTM1NUw0LjQ2NDQ3IDIzLjUzNTVDMi41MTE4NCAyMS41ODI5IDIuNTExODQgMTguNDE3MSA0LjQ2NDQ3IDE2LjQ2NDVDNi40MTcwOSAxNC41MTE4IDkuNTgyOTEgMTQuNTExOCAxMS41MzU1IDE2LjQ2NDVMMzAuNTg1OCAzNS41MTQ3QzMxLjM2NjggMzYuMjk1OCAzMi42MzMyIDM2LjI5NTggMzMuNDE0MiAzNS41MTQ3TDUyLjQ2NDUgMTYuNDY0NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K";
    }
  }
]);
