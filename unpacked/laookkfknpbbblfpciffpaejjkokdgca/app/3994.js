(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3994, 5273],
  {
    42223: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => a });
      const a = {
        data: () => ({ componentsMounted: {} }),
        unreactive: () => ({ uid: m.utils.shortId() }),
        beforeCreate() {
          const t = this.$options.components;
          Object.keys(t).forEach((e) => {
            const i = t[e];
            "function" == typeof i &&
              (t[e] = function () {
                this.$set(this.componentsMounted, e, !1);
                const t = `${e}:${this.uid}:mounted`,
                  a = () => (this.componentsMounted[e] = !0);
                return (
                  this.$e.$once(t, a),
                  i(arguments).then((i) => {
                    const s = i.default;
                    return s && s.doNotWaitForMount && (this.$delete(this.componentsMounted, e), this.$e.$off(t, a)), i;
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
    53772: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        ".smooth-reflow[data-v-f6d3e6a8]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-f6d3e6a8]{transition:height var(--46e573ab) ease,width var(--46e573ab) ease}.smooth-reflow.tr-height[data-v-f6d3e6a8]{transition:height var(--46e573ab) ease}.smooth-reflow.tr-width[data-v-f6d3e6a8]{display:flex;justify-content:center;transition:width var(--46e573ab) ease}.smooth-reflow.tr-width>div[data-v-f6d3e6a8]{width:fit-content}.smooth-reflow.hide-overflow[data-v-f6d3e6a8]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-height-fade-enter-active{transition:opacity var(--7c58a88c) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7c58a88c) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-width-fade-enter-active{transition:opacity var(--7c58a88c) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7c58a88c) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-f6d3e6a8]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const r = o;
    },
    61879: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.auth-form[data-v-c9c9fe7e] { padding: 0 20px; align-self: stretch; display: flex; flex-direction: column; align-items: stretch;\n}\n.input-group[data-v-c9c9fe7e] { width: 100%; margin-bottom: 16px; position: relative;\n}\ninput[data-v-c9c9fe7e] { width: 100%; padding: 14px 12px; background-color: #f4f7f7; border: none; border-radius: 3px; box-shadow: inset 0 0 0 1px #c0cece;\n}\n.box .auth-form .button[data-v-c9c9fe7e] { margin-top: 0; margin-bottom: 0;\n}\n.error[data-v-c9c9fe7e] { padding-bottom: 16px; color: var(--color-error); font-weight: 600;\n}\n.error-container[data-v-c9c9fe7e] { width: 100%;\n}\n\n",
        ""
      ]);
      const r = o;
    },
    25408: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.plus-offer[data-v-3bfcbd63] { position: absolute; inset: 0; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; -webkit-backdrop-filter: blur(2px); backdrop-filter: blur(2px); background: hsla(0deg, 0%, 0%, var(--opacity-stop-5));\n}\n.loading-icon[data-v-3bfcbd63] { margin: auto; position: absolute; inset: 0;\n}\n.paywall[data-v-3bfcbd63] { --hue: 181; --color-accent: hsl(var(--hue) 61% 46%); width: min(1500px, 100%); margin: 0 auto; padding: 1rem; display: flex; gap: 100px; align-items: flex-start; justify-content: center;\n}\n.benefits-container[data-v-3bfcbd63], .box-container[data-v-3bfcbd63] { width: max-content; display: flex; flex-direction: column; align-items: center;\n}\n.benefits-container[data-v-3bfcbd63] { margin-top: 0.5rem; align-self: center; gap: 3rem;\n}\n.benefits[data-v-3bfcbd63] { display: flex; flex-direction: column; gap: 1.5em; align-items: center;\n}\n.heading[data-v-3bfcbd63] { font-size: 2.25em; font-weight: 700;\n}\n.benefit-list[data-v-3bfcbd63] { margin-bottom: 4px;\n}\n[data-v-3bfcbd63] .benefit .icon-check { color: var(--color-accent);\n}\n.button-more[data-v-3bfcbd63] { --h-padding: 25px; --v-padding: 7px; align-self: center; background: none; border-width: 1px; font-size: 0.8125rem; text-align: center;\n}\n[data-v-3bfcbd63] .testimonials { width: 50ch; align-self: center;\n}\n[data-v-3bfcbd63] .testimonial .source-photo { border: 2px solid var(--color-accent);\n}\n.box[data-v-3bfcbd63] { width: 560px; padding: 20px 30px; position: relative; display: flex; flex-direction: column; align-items: center; box-shadow: 0 5px 71px rgba(0, 0, 0, 0.05); text-align: center; transition-delay: var(--anim-fade-time);\n}\n.special-offer[data-v-3bfcbd63] { padding: 3px 10px; background: hsl(var(--hue) 41% 92%); border-radius: 4px; color: var(--color-accent); font-size: 0.75em; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;\n}\n.paywall[data-v-3bfcbd63] .box-header { margin-top: 1.5rem; margin-bottom: 10px; font-size: 2rem; font-weight: 600;\n}\n.animation-container[data-v-3bfcbd63] { width: 100%;\n}\n.step-container[data-v-3bfcbd63] { width: 100%; flex-shrink: 0; display: flex; flex-direction: column; align-items: center;\n}\n[data-v-3bfcbd63] .trial-offer,[data-v-3bfcbd63] iframe,[data-v-3bfcbd63] .load-error,[data-v-3bfcbd63] .thanks { flex-grow: 1;\n}\n.offer[data-v-3bfcbd63] { min-height: 470px;\n}\n.login[data-v-3bfcbd63] {\n}\n.login .box-header[data-v-3bfcbd63] { margin-bottom: 26px;\n}\n.auth-form-bottom[data-v-3bfcbd63] { margin-top: 24px; margin-bottom: 10px; color: var(--color-stop-6); font-size: 0.9rem; font-weight: 600;\n}\n.reset-password-container[data-v-3bfcbd63] { position: absolute; right: 10px; top: 0; bottom: 0; display: flex; align-items: center;\n}\n.reset-password-button[data-v-3bfcbd63] { padding: 6px 13px; background: hsl(var(--hue) 41% 92%); border-radius: 99px; color: var(--color-brand); cursor: pointer; font-size: 0.85rem; font-weight: 600;\n}\n.login a[data-v-3bfcbd63] { color: var(--color-brand); cursor: pointer;\n}\n.login a[data-v-3bfcbd63]:hover { text-decoration: underline;\n}\n.disclaimer[data-v-3bfcbd63] { margin-top: 24px; color: var(--color-stop-4); font-size: 0.8rem; line-height: 130%;\n}\n.warning[data-v-3bfcbd63] { color: var(--color-warn); font-weight: 700;\n}\n.checkout[data-v-3bfcbd63] { min-height: 630px;\n}\n.error-state-icon[data-v-3bfcbd63] { --icon-size: 96px; height: var(--icon-size); width: var(--icon-size); margin-bottom: 0.5rem;\n}\n.error-state-heading[data-v-3bfcbd63] { font-size: 1.125rem; line-height: 150%;\n}\n.thank-you[data-v-3bfcbd63] { min-height: 380px; margin-bottom: 25px;\n}\n.box[data-v-3bfcbd63] .button { --v-padding: 11px; min-width: 240px; margin: 30px 0 6px; padding: var(--v-padding) var(--h-padding); align-self: center; background: var(--color-accent) !important; font-size: 1em; font-weight: 500; text-align: center; transition: var(--a-fast);\n}\n.box[data-v-3bfcbd63] .button:hover { opacity: 0.8; transition: 0.05s ease;\n}\n.box[data-v-3bfcbd63] .button:hover:active, .button[data-v-3bfcbd63]:focus { opacity: 0.9; transform: scale(0.96);\n}\n.skip-container[data-v-3bfcbd63] { min-height: 20px;\n}\n[data-v-3bfcbd63] .skip-button { margin-bottom: auto; padding: 2px; align-self: center; color: var(--color-stop-4); cursor: pointer; font-size: 0.8125em; font-weight: 600;\n}\n[data-v-3bfcbd63] .skip-button:hover { opacity: 0.8;\n}\n.error-existing-trial[data-v-3bfcbd63] { min-height: 200px;\n}\n.error-existing-trial p[data-v-3bfcbd63] { margin: auto 0; line-height: 130%;\n}\n.error-existing-trial a.contact-link[data-v-3bfcbd63] { color: var(--color-brand);\n}\n.skip-x[data-v-3bfcbd63] { --position-offset: 19px; --size: 20px; height: var(--size); width: var(--size); padding: 0; position: absolute; right: var(--position-offset); top: var(--position-offset); z-index: 1;\n}\n.icon-wrapper[data-v-3bfcbd63]:hover:after { background: transparent;\n}\n.icon-wrapper .icon[data-v-3bfcbd63] { height: 11px;\n}\n@media only screen and (max-width: 1050px) {\n.paywall[data-v-3bfcbd63] { padding: 5em 2.5em;\n}\n.benefits-container[data-v-3bfcbd63] { display: none;\n}\n}\n",
        ""
      ]);
      const r = o;
    },
    76278: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.trial-offer[data-v-1be7a660] { width: 100%; flex-shrink: 0; display: flex; flex-direction: column;\n}\n.subheading[data-v-1be7a660] { width: 80%; margin: 0 auto 1.5rem; color: var(--color-stop-5); font-weight: 500;\n}\np[data-v-1be7a660] { padding: 0;\n}\n.timeline[data-v-1be7a660] { margin: 0 0 0;\n}\n.timeline-heading[data-v-1be7a660] { margin-bottom: 7px; color: var(--color-accent); font-size: 1.1875rem; font-weight: 600;\n}\n.timeline-description[data-v-1be7a660] { margin-bottom: 6px; opacity: var(--opacity-stop-4); font-size: 0.8125em; font-weight: 500; line-height: 135%;\n}\n.timeline-graph[data-v-1be7a660] { width: 450px; margin: 12px auto 0;\n}\n.timeline-image[data-v-1be7a660] { width: 100%;\n}\n.timeline-steps[data-v-1be7a660] { width: 100%; display: flex; text-align: left;\n}\n.timeline-steps > div[data-v-1be7a660]:nth-child(1) { width: 38%;\n}\n.timeline-steps > div[data-v-1be7a660]:nth-child(2) { width: 38%;\n}\n.timeline-steps > div[data-v-1be7a660]:nth-child(3) { width: 24%;\n}\n.timeline-day[data-v-1be7a660] { margin: 3px 0 2px; color: var(--color-stop-5); font-size: 0.875rem; font-weight: 700;\n}\n.timeline-info[data-v-1be7a660] { color: var(--color-stop-4); font-size: 0.75em; line-height: 130%;\n}\n.fine-print[data-v-1be7a660] { margin: 2px 0 10px; color: var(--color-stop-4); font-size: 0.75em;\n}\n.footer[data-v-1be7a660] {\n}\n.footer-border[data-v-1be7a660] { height: 1px; width: 100%; margin: 16px 0 12px; opacity: var(--opacity-stop-4); background: #C0CECE;\n}\n.footer-body[data-v-1be7a660] { width: 100%; display: flex; justify-content: space-between;\n}\n.featured[data-v-1be7a660] {\n}\n.featured-in[data-v-1be7a660] { margin-bottom: 5px; color: var(--color-stop-5); font-size: 0.6875rem; font-weight: 500;\n}\n.stores[data-v-1be7a660] { display: flex; gap: 16px; align-items: flex-end;\n}\n.store-item[data-v-1be7a660] { display: flex; gap: 4px; align-items: center; font-size: 0.75rem; font-weight: 500;\n}\n.store-item-text[data-v-1be7a660] {\n}\n.store-item .icon-apple[data-v-1be7a660] { --icon-size: 20px;\n}\n.store-item .icon-chrome[data-v-1be7a660] { --icon-size: 18px; margin-right: 1px;\n}\n.footer-right[data-v-1be7a660] { display: flex; gap: 14px; align-items: center;\n}\n.rating[data-v-1be7a660] { margin-bottom: 1px; font-size: 0.875rem; font-weight: 700; letter-spacing: 1px;\n}\n.review-count[data-v-1be7a660] { color: var(--color-stop-4); font-size: 0.75rem; font-weight: 500;\n}\n",
        ""
      ]);
      const r = o;
    },
    82044: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.thanks[data-v-1c7c619d] { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\nh3[data-v-1c7c619d] { font-weight: 400; line-height: 1.8;\n}\n.thanks-icon[data-v-1c7c619d] { --icon-size: 150px; height: var(--icon-size); width: var(--icon-size); margin: 30px auto; fill: currentColor;\n}\n",
        ""
      ]);
      const r = o;
    },
    33994: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => j });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "plus-offer dark" },
          [
            e("transition", { attrs: { name: "fade", duration: t.fadeDuration } }, [
              t.contentShown
                ? e("div", { staticClass: "paywall" }, [
                    e(
                      "div",
                      { key: "1", staticClass: "benefits-container" },
                      [
                        e(
                          "div",
                          { staticClass: "benefits" },
                          [
                            e("div", { staticClass: "heading" }, [t._v("Unlock the best experience")]),
                            t._v(" "),
                            e("benefit-list"),
                            t._v(" "),
                            e(
                              "a",
                              {
                                staticClass: "button dash-button button-more",
                                attrs: { href: "https://momentumdash.com/plus", target: "_blank" }
                              },
                              [t._v("See all Plus has to offer")]
                            )
                          ],
                          1
                        ),
                        t._v(" "),
                        e("testimonials")
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      { key: "2", staticClass: "box app light-full" },
                      [
                        t.skipButtonsShown
                          ? e(
                              "span",
                              { staticClass: "icon-wrapper skip-x", attrs: { "data-test": "skip-icon" }, on: { click: t.skipPaywall } },
                              [e("inline-svg", { staticClass: "icon icon-hide", attrs: { src: i(21794) } })],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        e("smooth-reflow", { staticClass: "animation-container", attrs: { "transition-group": !0, "hide-overflow": !0 } }, [
                          t.activeSubStepIndex === t.subStepsEnum.TRIAL_OFFER
                            ? e(
                                "div",
                                { key: t.subStepsEnum.TRIAL_OFFER, staticClass: "offer step-container", attrs: { "data-test": "offer" } },
                                [
                                  e("div", { staticClass: "special-offer" }, [t._v(t._s(t.headerBadgeText))]),
                                  t._v(" "),
                                  e("h2", { staticClass: "box-header" }, [t._v("Try Momentum Plus for free")]),
                                  t._v(" "),
                                  e("trial-offer", {
                                    attrs: { "trial-length": t.trialLength, "badge-text": t.badgeText, "yearly-price": t.yearlyPrice },
                                    on: { nextStep: t.nextSubStep }
                                  })
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          t.activeSubStepIndex === t.subStepsEnum.AUTH_FORM_REGISTER
                            ? e(
                                "div",
                                {
                                  key: t.subStepsEnum.AUTH_FORM_REGISTER,
                                  staticClass: "login step-container",
                                  attrs: { "data-test": "auth-form-register" }
                                },
                                [
                                  e("h2", { staticClass: "box-header" }, [t._v("Create your account")]),
                                  t._v(" "),
                                  e("auth-form", {
                                    attrs: {
                                      "active-form": t.authFormTypesEnum.REGISTER,
                                      "on-success": t.afterRegister,
                                      "on-error": t.onAuthenticationError
                                    }
                                  }),
                                  t._v(" "),
                                  t.forcedActive
                                    ? e("div", { staticClass: "disclaimer" }, [
                                        t._v("Your current logged out data will be saved to your new account.")
                                      ])
                                    : t._e()
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          t.activeSubStepIndex === t.subStepsEnum.AUTH_FORM_SIGN_IN
                            ? e(
                                "div",
                                {
                                  key: t.subStepsEnum.AUTH_FORM_SIGN_IN,
                                  staticClass: "login step-container",
                                  attrs: { "data-test": "auth-form-sign-in" }
                                },
                                [
                                  e("h2", { staticClass: "box-header" }, [t._v("Sign in")]),
                                  t._v(" "),
                                  e("auth-form", {
                                    attrs: {
                                      "active-form": t.authFormTypesEnum.SIGN_IN,
                                      "on-success": t.afterSignIn,
                                      "on-error": t.onAuthenticationError
                                    },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "password-right",
                                          fn: function () {
                                            return [
                                              e("div", { staticClass: "reset-password-container" }, [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass: "reset-password-button",
                                                    attrs: { "data-test": "reset-password-btn" },
                                                    on: {
                                                      click: function (e) {
                                                        return t.$emit("goToSubStep", t.subStepsEnum.AUTH_FORM_RESET_PASSWORD);
                                                      }
                                                    }
                                                  },
                                                  [t._v("Reset password")]
                                                )
                                              ])
                                            ];
                                          },
                                          proxy: !0
                                        }
                                      ],
                                      null,
                                      !1,
                                      706947599
                                    )
                                  }),
                                  t._v(" "),
                                  t.changePasswordDisclaimerShown
                                    ? e("div", { staticClass: "disclaimer warning" }, [
                                        t._v("Please check your email to confirm your password change, then sign in")
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  t.forcedActive
                                    ? e("div", { staticClass: "disclaimer" }, [
                                        t._v(
                                          "Note: if you have been using Momentum logged out and would like to keep that data, please register first to save the data to an account. If you log into an account, the current logged out data will be lost."
                                        )
                                      ])
                                    : t._e(),
                                  t._v(" "),
                                  e("div", { staticClass: "auth-form-bottom" }, [
                                    e("span", [
                                      t._v("Don't have an account? "),
                                      e(
                                        "a",
                                        {
                                          attrs: { "data-test": "register-btn" },
                                          on: {
                                            click: function (e) {
                                              return t.$emit("goToSubStep", t.subStepsEnum.AUTH_FORM_REGISTER);
                                            }
                                          }
                                        },
                                        [t._v("Register")]
                                      )
                                    ])
                                  ])
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          t.activeSubStepIndex === t.subStepsEnum.AUTH_FORM_RESET_PASSWORD
                            ? e(
                                "div",
                                {
                                  key: t.subStepsEnum.AUTH_FORM_RESET_PASSWORD,
                                  staticClass: "login step-container",
                                  attrs: { "data-test": "auth-form-reset-password" }
                                },
                                [
                                  e("h2", { staticClass: "box-header" }, [t._v("Reset password")]),
                                  t._v(" "),
                                  e("auth-form", {
                                    attrs: {
                                      "active-form": t.authFormTypesEnum.RESET_PASSWORD,
                                      "on-success": t.afterResetPassword,
                                      "on-error": t.onAuthenticationError
                                    }
                                  }),
                                  t._v(" "),
                                  e("div", { staticClass: "auth-form-bottom" }, [
                                    e("span", [
                                      e(
                                        "a",
                                        {
                                          attrs: { "data-test": "sign-in-btn" },
                                          on: {
                                            click: function (e) {
                                              return t.$emit("goToSubStep", t.subStepsEnum.AUTH_FORM_SIGN_IN);
                                            }
                                          }
                                        },
                                        [t._v("← Sign in")]
                                      )
                                    ])
                                  ])
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          e(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.activeSubStepIndex === t.subStepsEnum.PAYMENT_FORM,
                                  expression: "activeSubStepIndex === subStepsEnum.PAYMENT_FORM"
                                }
                              ],
                              key: t.subStepsEnum.PAYMENT_FORM,
                              staticClass: "checkout step-container",
                              attrs: { "data-test": "checkout" }
                            },
                            [
                              e("div", { staticClass: "special-offer" }, [t._v(t._s(t.headerBadgeText))]),
                              t._v(" "),
                              e("h2", { staticClass: "box-header" }, [t._v("Try Momentum Plus for free")]),
                              t._v(" "),
                              e(
                                "upgrade",
                                {
                                  attrs: {
                                    version: 2,
                                    "iframe-info": t.iframeInfo,
                                    plans: t.plans,
                                    sales: t.sales,
                                    "selected-plan": "yearly",
                                    "trial-length": t.trialLength
                                  },
                                  on: { nextStep: t.trialSignupSuccess, processing: t.onProcessing, processingError: t.onProcessingError }
                                },
                                [
                                  e("inline-svg", { staticClass: "error-state-icon", attrs: { src: i(58037) } }),
                                  t._v(" "),
                                  e("p", { staticClass: "error-state-heading" }, [
                                    t._v("Oops! Something didn’t go as expected."),
                                    e("br"),
                                    t._v("\n\t\t\t\t\t\t\t\tPlease try again.")
                                  ]),
                                  t._v(" "),
                                  e("button", { staticClass: "button", on: { click: t.refresh } }, [t._v("Retry")])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          t._v(" "),
                          t.activeSubStepIndex === t.subStepsEnum.THANKS
                            ? e(
                                "div",
                                { key: t.subStepsEnum.THANKS, staticClass: "thank-you step-container" },
                                [
                                  e("h2", { staticClass: "box-header" }, [t._v("Thanks!")]),
                                  t._v(" "),
                                  e("thanks", { attrs: { "show-reload-button": !1 } }, [
                                    e("a", { staticClass: "button", attrs: { "data-test": "proceed" }, on: { click: t.loadUpgradeTour } }, [
                                      t._v("Continue to Momentum plus")
                                    ])
                                  ])
                                ],
                                1
                              )
                            : t._e(),
                          t._v(" "),
                          e(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.activeSubStepIndex === t.subStepsEnum.ERROR_EXISTING_TRIAL,
                                  expression: "activeSubStepIndex === subStepsEnum.ERROR_EXISTING_TRIAL"
                                }
                              ],
                              key: t.subStepsEnum.ERROR_EXISTING_TRIAL,
                              staticClass: "error-existing-trial step-container"
                            },
                            [
                              e("h2", { staticClass: "box-header" }, [t._v("Oops!")]),
                              t._v(" "),
                              e("p", [
                                t._v("You have already completed a trial. If you would like another trial, please "),
                                e(
                                  "a",
                                  { staticClass: "contact-link", attrs: { target: "_blank", href: "https://momentumdash.com/contact" } },
                                  [t._v("get in touch")]
                                ),
                                t._v("!")
                              ])
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ])
                : t._e()
            ]),
            t._v(" "),
            t.loadingIconShown ? e("i", { staticClass: "loading-icon" }) : t._e()
          ],
          1
        );
      };
      a._withStripped = !0;
      var s = i(77471),
        n = i(35323),
        o = i(72425),
        r = i(99726),
        d = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "trial-offer" },
            [
              e("p", { staticClass: "subheading" }, [t._v("Get the tools you need to achieve your highest potential, all in one place")]),
              t._v(" "),
              e("div", { staticClass: "timeline" }, [
                e("div", { staticClass: "timeline-heading" }, [t._v(t._s(t.trialLength) + "-day free trial")]),
                t._v(" "),
                t._m(0),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "timeline-graph" },
                  [
                    e("inline-svg", { staticClass: "timeline-image", attrs: { src: i(89422) } }),
                    t._v(" "),
                    e("div", { staticClass: "timeline-steps" }, [
                      t._m(1),
                      t._v(" "),
                      e("div", [
                        e("div", { staticClass: "timeline-day" }, [t._v(t._s(t.reminderDateString))]),
                        t._v(" "),
                        e("div", { staticClass: "timeline-info" }, [t._v("You get a reminder.")])
                      ]),
                      t._v(" "),
                      e("div", [
                        e("div", { staticClass: "timeline-day" }, [t._v(t._s(t.trialEndDateString))]),
                        t._v(" "),
                        e("div", { staticClass: "timeline-info" }, [t._v("Free trial ends.")])
                      ])
                    ])
                  ],
                  1
                )
              ]),
              t._v(" "),
              e(
                "a",
                {
                  staticClass: "button",
                  attrs: { "data-test": "proceed" },
                  on: {
                    click: function (e) {
                      return t.$emit("nextStep");
                    }
                  }
                },
                [t._v("Try for free")]
              ),
              t._v(" "),
              e("p", { staticClass: "fine-print" }, [
                t._v(t._s(t.trialLength) + "-day free trial, then $" + t._s(t.yearlyPrice) + "/year. " + t._s(t.badgeText))
              ]),
              t._v(" "),
              t._t("default"),
              t._v(" "),
              e("div", { staticClass: "footer" }, [
                e("div", { staticClass: "footer-border" }),
                t._v(" "),
                e("div", { staticClass: "footer-body" }, [
                  e("div", { staticClass: "featured" }, [
                    e("div", { staticClass: "featured-in" }, [t._v("Featured in")]),
                    t._v(" "),
                    e("div", { staticClass: "stores" }, [
                      e(
                        "div",
                        { staticClass: "store-item" },
                        [
                          e("inline-svg", { staticClass: "icon icon-apple", attrs: { src: i(63374) } }),
                          t._v(" "),
                          e("span", { staticClass: "store-item-text" }, [t._v("App Store")])
                        ],
                        1
                      ),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "store-item" },
                        [
                          e("inline-svg", { staticClass: "icon icon-chrome", attrs: { src: i(58757) } }),
                          t._v(" "),
                          e("span", { staticClass: "store-item-text" }, [t._v("Web Store")])
                        ],
                        1
                      )
                    ])
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "footer-right" }, [
                    e("div", { staticClass: "stars" }, [e("inline-svg", { attrs: { width: "86", height: "14", src: i(9694) } })], 1),
                    t._v(" "),
                    t._m(2)
                  ])
                ])
              ])
            ],
            2
          );
        };
      d._withStripped = !0;
      const l = new Date(),
        c = {
          name: "TrialOffer",
          props: {
            trialLength: { type: Number, required: !0 },
            yearlyPrice: { type: String, required: !0 },
            badgeText: { type: String, required: !0 }
          },
          computed: {
            reminderDate() {
              return m.utils.dateAdd(l, "day", this.trialLength - 2);
            },
            trialEndDate() {
              return m.utils.dateAdd(l, "day", this.trialLength);
            },
            reminderDateString() {
              return m.utils.getMonthName(this.reminderDate, !0) + " " + this.reminderDate.getDate();
            },
            trialEndDateString() {
              return m.utils.getMonthName(this.trialEndDate, !0) + " " + this.trialEndDate.getDate();
            }
          }
        };
      i(47983);
      var u = i(51900);
      const h = (0, u.Z)(
        c,
        d,
        [
          function () {
            var t = this,
              e = t._self._c;
            return e("p", { staticClass: "timeline-description" }, [
              t._v("You won’t be charged until after your free trial ends."),
              e("br"),
              t._v("You can cancel anytime.")
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e("div", { staticClass: "timeline-day" }, [t._v("Today")]),
              t._v(" "),
              e("div", { staticClass: "timeline-info" }, [t._v("Start exploring today.")])
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e("div", { staticClass: "rating" }, [t._v("4.4/5")]),
              t._v(" "),
              e("div", { staticClass: "review-count" }, [t._v("13,000+ reviews")])
            ]);
          }
        ],
        !1,
        null,
        "1be7a660",
        null
      ).exports;
      var M = i(55273),
        g = i(81405),
        p = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "auth-form" },
            [
              e("div", { staticClass: "input-group" }, [
                e("input", {
                  directives: [{ name: "model", rawName: "v-model", value: t.email, expression: "email" }],
                  class: { error: "email" === t.error.input },
                  attrs: { "data-test": "email", type: "email", placeholder: "Email" },
                  domProps: { value: t.email },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.email = e.target.value);
                    }
                  }
                })
              ]),
              t._v(" "),
              e(
                "div",
                { staticClass: "input-group" },
                [
                  e("input", {
                    directives: [{ name: "model", rawName: "v-model", value: t.password, expression: "password" }],
                    class: { error: "password" === t.error.input },
                    attrs: { "data-test": "password", type: "password", placeholder: t.formConfig.passwordPlaceholder || "Password" },
                    domProps: { value: t.password },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.password = e.target.value);
                      }
                    }
                  }),
                  t._v(" "),
                  t._t("password-right")
                ],
                2
              ),
              t._v(" "),
              e(
                "smooth-reflow",
                {
                  directives: [{ name: "show", rawName: "v-show", value: t.error, expression: "error" }],
                  staticClass: "error-container",
                  attrs: { nested: !0 }
                },
                [t.error ? e("div", { staticClass: "error", attrs: { "data-test": "error" } }, [t._v(t._s(t.error))]) : t._e()]
              ),
              t._v(" "),
              e("div", { staticClass: "button", attrs: { "data-test": "submit-button" }, on: { click: t.submit } }, [
                t._v(t._s(t.buttonText))
              ])
            ],
            1
          );
        };
      p._withStripped = !0;
      var v = i(40531),
        f = i(92729),
        N = i(89608);
      const D = { REGISTER: "register", SIGN_IN: "sign-in", RESET_PASSWORD: "reset-password" },
        y = {
          name: "AuthForm",
          components: { SmoothReflow: M.default },
          props: {
            activeForm: { type: String, required: !0 },
            onSuccess: { type: [Function, void 0], default: void 0 },
            onError: { type: [Function, void 0], default: void 0 }
          },
          unreactive: () => ({
            formTypes: {
              [D.REGISTER]: { submit: "register", buttonText: "Create account" },
              [D.SIGN_IN]: { submit: "signIn", buttonText: "Sign in" },
              [D.RESET_PASSWORD]: { submit: "resetPassword", buttonText: "Reset password", passwordPlaceholder: "New password" }
            }
          }),
          data: () => ({ email: "", password: "", processing: !1, error: "", errorInput: "" }),
          computed: {
            formConfig() {
              return this.formTypes[this.activeForm];
            },
            buttonText() {
              return this.processing ? "Processing…" : this.formConfig.buttonText;
            }
          },
          created() {
            window.addEventListener("keyup", this.onKeyUp);
          },
          destroyed() {
            window.removeEventListener("keyup", this.onKeyUp);
          },
          methods: {
            async submit() {
              this.clearError();
              try {
                var t, e;
                this.validate(this.email, this.password),
                  (this.processing = !0),
                  await (null === (t = this[this.formConfig.submit]) || void 0 === t ? void 0 : t.call(this)),
                  null === (e = this.onSuccess) || void 0 === e || e.call(this);
              } catch (t) {
                var i, a, s, n;
                429 === (null === (i = t.response) || void 0 === i ? void 0 : i.status)
                  ? this.setError(f.Qj.SERVER_ERROR_429)
                  : null !== (a = t.response) && void 0 !== a && null !== (s = a.data) && void 0 !== s && s.detail
                  ? this.setError(t.response.data.detail)
                  : "string" == typeof t || "string" == typeof t.error || t instanceof N.B
                  ? this.setError(t)
                  : this.setError(f.Qj.SERVER_ERROR_GENERAL),
                  null === (n = this.onError) || void 0 === n || n.call(this, t),
                  console.error(t);
              } finally {
                this.processing = !1;
              }
            },
            validate(t, e) {
              if (!t) throw new N.B({ message: f.Qj.EMAIL_EMPTY, input: "email" });
              if (!m.utils.validateEmail(t)) throw new N.B({ message: f.Qj.EMAIL_INVALID_SHORT, input: "email" });
              if (!e) throw new N.B({ message: f.Qj.PASSWORD_EMPTY, input: "password" });
              if (e.length < 6) throw new N.B({ message: f.Qj.PASSWORD_INVALID, input: "password" });
            },
            onKeyUp(t) {
              "Enter" === t.code && this.submit();
            },
            clearError() {
              (this.error = ""), (this.errorInput = "");
            },
            setError(t) {
              t instanceof N.B
                ? ((this.error = t.message), (this.errorInput = t.input))
                : t.error
                ? ((this.error = t.error), (this.errorInput = t.input))
                : "string" == typeof t && (this.error = t);
            },
            async setNewUserState(t) {
              m.utils.handleAuthResponse(t),
                localStorage.setItem("email", this.email),
                g.ZP.identify(),
                m.syncCoordinator.syncSettings(() => {
                  m.widgetManager.populateWidgets(), m.cmd("user.cleanup", { type: "notifications" }), m.cmd("settings.rerender");
                }),
                m.trigger("user:successfulLogin", () => {
                  localStorage.setItem("loggedIn", m.now()),
                    localStorage.removeItem("onetimeSent"),
                    localStorage.removeItem("doLoginOnNextLoad");
                });
            },
            async register() {
              try {
                const { data: t } = await this.$xhr.post("user/register", {
                  name: v.ax.displayname,
                  email: this.email,
                  password: this.password
                });
                await this.setNewUserState(t);
              } catch (a) {
                var t, e, i;
                if ((console.error(a), 409 === (null === (t = a.response) || void 0 === t ? void 0 : t.status))) throw f.Qj.EXISTING_USER;
                if (
                  "user_already_exists" ===
                  (null === (e = a.response) || void 0 === e || null === (i = e.data) || void 0 === i ? void 0 : i.type)
                )
                  throw f.Qj.EXISTING_USER;
                throw a;
              }
            },
            async signIn() {
              try {
                const { data: t } = await this.$xhr.post("user/authenticate", { username: this.email, password: this.password });
                await m.utils.clearStorage(), await this.setNewUserState(t);
              } catch (e) {
                var t;
                if ((console.error(e), 401 === (null === (t = e.response) || void 0 === t ? void 0 : t.status)))
                  throw f.Qj.INCORRECT_COMBINATION;
                throw e;
              }
            },
            async resetPassword() {
              await this.$xhr.post("user/forgot", { email: this.email, password: this.password });
            }
          }
        };
      i(63910);
      const b = (0, u.Z)(y, p, [], !1, null, "c9c9fe7e", null).exports;
      var I = i(86640),
        z = i(65238),
        x = i(35746),
        w = i(80809);
      const S = new g.ZP({ feature: "paywall" }),
        T = {
          name: "PlusOffer",
          components: {
            Testimonials: n.Z,
            BenefitList: s.Z,
            Upgrade: o.default,
            Thanks: r.default,
            TrialOffer: h,
            SmoothReflow: M.default,
            AuthForm: b
          },
          props: {
            plans: { type: Object, default: () => ({}) },
            sales: { type: Object, default: () => ({}) },
            plansError: { type: Boolean, default: !1 },
            activeSubStepIndex: { type: Number, required: !0 },
            forcedActive: { type: Boolean, default: !1 }
          },
          unreactive: () => ({
            analyticsSubStepNames: [
              "trial offer",
              "auth form - register",
              "auth form - sign in",
              "auth form - reset password",
              "payment form",
              "thanks",
              "error - existing trial"
            ],
            fadeDuration: 500,
            subStepsEnum: {
              TRIAL_OFFER: 0,
              AUTH_FORM_REGISTER: 1,
              AUTH_FORM_SIGN_IN: 2,
              AUTH_FORM_RESET_PASSWORD: 3,
              PAYMENT_FORM: 4,
              THANKS: 5,
              ERROR_EXISTING_TRIAL: 6
            },
            authFormTypesEnum: D
          }),
          data: () => ({
            contentShown: !1,
            loadingIconShown: !1,
            skipButtonsShown: !0,
            changePasswordDisclaimerShown: !1,
            profileDetails: {}
          }),
          computed: {
            prices() {
              const t = this.plans.yearly || {},
                e = this.sales.yearly || {};
              return Object.keys(e).length
                ? {
                    yearly: e.friendlyPrice,
                    monthly: e.friendlyMonthlyPrice,
                    trialLength: e.trialDays || 7,
                    oldYearly: t.friendlyPrice,
                    oldMonthly: t.friendlyMonthlyPrice,
                    isSale: !0
                  }
                : { yearly: t.friendlyPrice, monthly: t.friendlyMonthlyPrice, trialLength: t.trialDays || 7, isSale: !1 };
            },
            yearlyPrice() {
              return this.prices.yearly;
            },
            monthlyPrice() {
              return this.prices.monthly;
            },
            trialLength() {
              return this.prices.trialLength;
            },
            badgeText() {
              var t, e;
              return this.prices.isSale
                ? null === (t = this.sales.yearly) || void 0 === t
                  ? void 0
                  : t.badgeText
                : null === (e = this.plans.yearly) || void 0 === e
                ? void 0
                : e.badgeText;
            },
            headerBadgeText() {
              var t, e;
              return this.prices.isSale
                ? (null === (t = this.sales.yearly) || void 0 === t ? void 0 : t.badgeText) +
                    " – " +
                    (null === (e = this.sales.yearly) || void 0 === e ? void 0 : e.title)
                : "Special offer";
            },
            iframeInfo() {
              return {
                textInfo: {
                  button: `Start my ${this.trialLength}-day free trial`,
                  finePrint: `A 1-year Momentum Plus subscription is $${this.monthlyPrice}/month billed as one payment of $${this.yearlyPrice} USD. Your subscription will automatically renew every 12 months until you cancel it.`
                },
                props: {
                  trialLength: this.trialLength,
                  yearlyPrice: this.yearlyPrice,
                  monthlyPrice: this.monthlyPrice,
                  oldYearlyPrice: this.prices.oldYearly,
                  oldMonthlyPrice: this.prices.oldMonthly
                },
                component: "SummaryV2"
              };
            }
          },
          watch: {
            plans() {
              this.loadingIconShown && this.showContentIfReady();
            },
            profileDetails() {
              this.loadingIconShown && this.showContentIfReady();
            },
            plansError: {
              handler() {
                this.plansError && this.skipPaywall({ autoSkip: "plansError" });
              },
              immediate: !0
            },
            activeSubStepIndex() {
              S.capture("paywall sub-step show", { sub_step: this.analyticsSubStepNames[this.activeSubStepIndex] }),
                this.activeSubStepIndex === this.subStepsEnum.THANKS && (this.skipButtonsShown = !1);
            }
          },
          async mounted() {
            this.$xhr
              .get("/user/profile?details=1")
              .then((t) => (this.profileDetails = t.data))
              .catch((t) => {
                console.error(t), this.skipPaywall({ autoSkip: "profileDetailsError" });
              }),
              await w.Z.delay(this.fadeDuration),
              this.showContentIfReady();
          },
          methods: {
            userIsUnregistered: () => w.Z.getUserState().isUnregistered,
            showContentIfReady() {
              Object.keys(this.plans).length && Object.keys(this.profileDetails).length
                ? ((this.contentShown = !0),
                  (this.loadingIconShown = !1),
                  S.capture("paywall sub-step show", { sub_step: this.analyticsSubStepNames[this.activeSubStepIndex] }))
                : (this.loadingIconShown = !0);
            },
            async skipPaywall({ autoSkip: t } = {}) {
              t
                ? S.capture("paywall load error", { case: t })
                : (S.capture("paywall skip"), (this.contentShown = !1), await w.Z.delay(this.fadeDuration)),
                this.$emit("dismiss");
            },
            nextSubStep() {
              this.$emit("goToSubStep", this.getNextSubStep());
            },
            trialSignupSuccess() {
              m.cmd("user.cleanup", { type: "notifications" }), m.cmd("settings.rerender"), this.nextSubStep();
            },
            async loadUpgradeTour() {
              (this.contentShown = !1), await w.Z.delay(this.fadeDuration), S.capture("paywall trial sign up"), this.$emit("stepComplete");
            },
            refresh() {
              this.forcedActive &&
                localStorage.setObject(I.OPEN_ON_LOAD_KEY, { step: "PLUS_OFFER", subStepIndex: this.subStepsEnum.PAYMENT_FORM }),
                location.reload();
            },
            onProcessing() {
              this.skipButtonsShown = !1;
            },
            onProcessingError() {
              (this.skipButtonsShown = !0), S.capture("paywall trial sign up error");
            },
            afterRegister() {
              S.capture("authentication succeed", { case: this.analyticsSubStepNames[this.activeSubStepIndex] }), this.nextSubStep();
            },
            async afterSignIn() {
              S.capture("authentication succeed", { case: this.analyticsSubStepNames[this.activeSubStepIndex] }),
                await x.default.refresh({ mode: Mode.Server }),
                (this.profileDetails = (await this.$xhr.get("/user/profile?details=1")).data),
                x.default.saveStepProgress(x.default.getStep(z.os.PLUS_OFFER), this.getNextSubStep(), "active");
              const t = x.default.getStep(z.os.FREE_INTRODUCTION);
              t && (await x.default.delete(t)), location.reload();
            },
            afterResetPassword() {
              (this.changePasswordDisclaimerShown = !0), this.nextSubStep();
            },
            onAuthenticationError(t) {
              S.capture("athentication error", {
                case: this.analyticsSubStepNames[this.activeSubStepIndex],
                error: "string" == typeof t ? t : t.message
              });
            },
            getNextSubStep() {
              return this.$plus
                ? this.subStepsEnum.THANKS
                : this.profileDetails.subscriptionSummary.trialEnd
                ? this.subStepsEnum.ERROR_EXISTING_TRIAL
                : this.activeSubStepIndex === this.subStepsEnum.AUTH_FORM_REGISTER ||
                  this.activeSubStepIndex === this.subStepsEnum.AUTH_FORM_SIGN_IN
                ? this.subStepsEnum.PAYMENT_FORM
                : this.activeSubStepIndex === this.subStepsEnum.AUTH_FORM_RESET_PASSWORD
                ? this.subStepsEnum.AUTH_FORM_SIGN_IN
                : this.activeSubStepIndex === this.subStepsEnum.TRIAL_OFFER
                ? this.userIsUnregistered()
                  ? this.subStepsEnum.AUTH_FORM_REGISTER
                  : this.subStepsEnum.PAYMENT_FORM
                : void 0;
            }
          }
        };
      i(34477);
      const j = (0, u.Z)(T, a, [], !1, null, "3bfcbd63", null).exports;
    },
    99726: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => n });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "thanks", attrs: { "data-test": "thanks" } },
          [
            e("inline-svg", { staticClass: "thanks-icon", attrs: { src: i(328) } }),
            t._v(" "),
            t._m(0),
            t._v(" "),
            t.subscribedAccount
              ? e("div", [
                  e("p", [
                    t._v("Please log in to "),
                    e("b", [t._v(t._s(t.subscribedAccount))]),
                    e("br"),
                    t._v(" to enjoy your new Plus features.")
                  ]),
                  t._v(" "),
                  e("button", { staticClass: "button", on: { click: t.login } }, [t._v("Log In")])
                ])
              : t._e(),
            t._v(" "),
            e(
              "div",
              [
                t._t("default", function () {
                  return [
                    e("p", [t._v("Refresh the page to enjoy your new Plus features.")]),
                    t._v(" "),
                    e("button", { staticClass: "button", attrs: { "data-test": "reload-btn" }, on: { click: t.refresh } }, [
                      t._v("Refresh")
                    ])
                  ];
                })
              ],
              2
            )
          ],
          1
        );
      };
      a._withStripped = !0;
      const s = {
        name: "Thanks",
        data: () => ({ subscribedAccount: null }),
        created() {
          (this.subscribedAccount = localStorage.getItem("subscribedAccount")),
            localStorage.removeItem("subscribedAccount"),
            this.$e.$on("modal:interceptSubStepCompletion", this.refresh),
            document.activeElement.blur(),
            localStorage.removeItem("upgrade-data");
        },
        destroyed() {
          this.$e.$off("modal:interceptSubStepCompletion", this.refresh);
        },
        methods: {
          refresh() {
            location.reload();
          },
          login() {
            m.commandManager.execute("account.login");
          }
        }
      };
      i(54702);
      const n = (0, i(51900).Z)(
        s,
        a,
        [
          function () {
            var t = this,
              e = t._self._c;
            return e("h3", [t._v("You are now subscribed to Momentum Plus."), e("br"), t._v("Thank you!")]);
          }
        ],
        !1,
        null,
        "1c7c619d",
        null
      ).exports;
    },
    55273: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => h });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            ref: "wrapper",
            staticClass: "smooth-reflow",
            class: {
              "tr-height": t.height,
              "tr-width": t.width,
              "tr-disabled": t.transitionDisabled,
              "hide-overflow": t.hideOverflow && (t.resizing || t.transitionActive)
            },
            style: { height: t.wrapperHeight, width: t.wrapperWidth },
            attrs: {
              "data-smooth-reflow-id": t.id,
              "data-test": "smooth-reflow",
              "data-test-transitioning": t.resizing || t.transitionActive
            }
          },
          [
            t.transitionGroup
              ? e(
                  "transition-group",
                  t._g(
                    t._b(
                      {
                        directives: [
                          { name: "resize-sensor", rawName: "v-resize-sensor", value: t.handleResize, expression: "handleResize" }
                        ],
                        attrs: { tag: "div" }
                      },
                      "transition-group",
                      t.transitionProps,
                      !1
                    ),
                    t.transitionHooks
                  ),
                  [t._t("default")],
                  2
                )
              : e(
                  "div",
                  {
                    directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: t.handleResize, expression: "handleResize" }]
                  },
                  [e("transition", t._g(t._b({}, "transition", t.transitionProps, !1), t.transitionHooks), [t._t("default")], 2)],
                  1
                )
          ],
          1
        );
      };
      a._withStripped = !0;
      var s = i(61706),
        n = i(42223),
        o = i(96046),
        r = i(20144);
      const d = {
          name: "SmoothReflow",
          directives: { ResizeSensor: s.Z },
          mixins: [n.Z],
          props: {
            height: { type: Boolean, default: !0 },
            width: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            appear: { type: Boolean, default: !1 },
            awaitAppsReady: { type: Boolean, default: !1 },
            duration: { type: Number, default: 500 },
            transitionDuration: { type: Number, default: null },
            nested: { type: Boolean, default: !1 },
            hideOverflow: { type: Boolean, default: !1 },
            transition: { type: String, default: "smooth-height-fade" },
            transitionGroup: { type: Boolean, default: !1 },
            debug: { type: Boolean, default: !1 },
            firstTransitionDisabled: { type: Boolean, default: !1 }
          },
          data: () => ({
            id: Math.random().toString(36).substring(7),
            wrapperHeightPx: null,
            wrapperWidthPx: null,
            auto: !1,
            resizing: !1,
            transitionActive: !1,
            ancestors: [],
            resizedOnce: !1
          }),
          computed: {
            awaitingAppsReady() {
              return this.awaitAppsReady && !o.Z.allowAwaitingAppsReadySmoothReflow;
            },
            transitionDisabled() {
              return this.auto || this.disabled || this.awaitingAppsReady;
            },
            transitionProps() {
              return {
                name: this.transition,
                appear: this.appear,
                duration: this.awaitingAppsReady ? 0 : null === this.transitionDuration ? this.duration : this.transitionDuration
              };
            },
            wrapperHeight() {
              return !this.height || this.transitionDisabled ? "auto" : this.wrapperHeightPx + "px";
            },
            wrapperWidth() {
              return this.width ? (this.transitionDisabled ? "auto" : this.wrapperWidthPx + "px") : "";
            },
            transitionDurationMs() {
              return `${this.transitionDisabled ? 0 : null === this.transitionDuration ? this.duration : this.transitionDuration}ms`;
            },
            resizeDurationMs() {
              return this.resizeDuration + "ms";
            },
            resizeDuration() {
              return (this.firstTransitionDisabled && !this.resizedOnce) || this.awaitingAppsReady
                ? 0
                : null === this.transitionDuration
                ? this.duration
                : this.transitionActive
                ? this.transitionDuration
                : this.duration;
            }
          },
          watch: {
            transitionDisabled(t) {
              t || this.setExplicitDimensions();
            }
          },
          created() {
            (this.transitionHooks = {
              beforeEnter: this.beforeEnter,
              enter: this.enter,
              afterEnter: this.afterEnter,
              enterCancelled: this.enterCancelled,
              beforeLeave: this.beforeLeave,
              leave: this.leave,
              afterLeave: this.afterLeave,
              leaveCancelled: this.leaveCancelled
            }),
              this.appear && (this.height && (this.wrapperHeightPx = 0), this.width && (this.wrapperWidthPx = 0)),
              this.$e.$on("pauseSmoothReflow:" + this.id, this.pauseSmoothReflow),
              this.$e.$on("resumeSmoothReflow:" + this.id, this.resumeSmoothReflow);
          },
          async mounted() {
            this.nested && (await this.$nextTick(), this.findSmoothReflowAncestors()), this.setExplicitDimensions();
          },
          destroyed() {
            this.$e.$off("pauseSmoothReflow:" + this.id, this.pauseSmoothReflow),
              this.$e.$off("resumeSmoothReflow:" + this.id, this.resumeSmoothReflow);
          },
          methods: {
            async handleResize(t) {
              if (
                this.transitionDisabled ||
                (this.height && !this.width && this.wrapperHeightPx === t.height) ||
                (!this.height && this.width && this.wrapperWidthPx === t.width) ||
                (this.height && this.width && this.wrapperHeightPx === t.height && this.wrapperWidthPx === t.width)
              )
                return this.$emit("afterResize");
              (this.resizing = !0),
                clearTimeout(this.timeout),
                this.nested &&
                  this.ancestors.length &&
                  (this.ancestors.forEach((t) => this.$e.$emit("pauseSmoothReflow:" + t)), await this.$nextTick()),
                this.height && (this.wrapperHeightPx = t.height),
                this.width && (this.wrapperWidthPx = t.width),
                (this.timeout = setTimeout(() => {
                  this.nested && this.ancestors.length && this.ancestors.forEach((t) => this.$e.$emit("resumeSmoothReflow:" + t)),
                    (this.resizing = !1),
                    this.afterResize();
                }, this.duration));
            },
            findSmoothReflowAncestors() {
              let t,
                e = !0;
              for (; e; )
                (t = ((t && t.parentElement) || this.$el.parentElement).closest("[data-smooth-reflow-id]")),
                  t ? this.ancestors.push(t.getAttribute("data-smooth-reflow-id")) : (e = !1);
            },
            pauseSmoothReflow() {
              this.auto = !0;
            },
            resumeSmoothReflow() {
              (this.auto = !1), this.setExplicitDimensions();
            },
            setExplicitDimensions() {
              this.$refs.wrapper &&
                (this.height && (this.wrapperHeightPx = this.$refs.wrapper.clientHeight),
                this.width && (this.wrapperWidthPx = this.$refs.wrapper.clientWidth));
            },
            afterResize() {
              (this.resizedOnce = !0), this.$emit("afterResize");
            },
            beforeEnter(t) {
              (this.transitionActive = !0), this.$emit("beforeEnter", t);
            },
            enter(t) {
              this.$emit("enter", t);
            },
            afterEnter(t) {
              (this.transitionActive = !1), this.$emit("afterEnter", t);
            },
            enterCancelled(t) {
              this.$emit("afterEnter", t);
            },
            beforeLeave(t) {
              (this.transitionActive = !0), this.$emit("beforeLeave", t);
            },
            leave(t) {
              this.$emit("leave", t);
            },
            afterLeave(t) {
              (this.transitionActive = !1), this.$emit("afterLeave", t);
            },
            leaveCancelled(t) {
              this.$emit("leaveCancelled", t);
            }
          }
        },
        l = () => {
          (0, r.sj)((t, e) => ({ "46e573ab": t.resizeDurationMs, "7c58a88c": t.transitionDurationMs }));
        },
        c = d.setup;
      d.setup = c ? (t, e) => (l(), c(t, e)) : l;
      const u = d;
      i(65503);
      const h = (0, i(51900).Z)(u, a, [], !1, null, "f6d3e6a8", null).exports;
    },
    65503: (t, e, i) => {
      var a = i(53772);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("c3632014", a, !1, {});
    },
    63910: (t, e, i) => {
      var a = i(61879);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("e17daae0", a, !1, { ssrId: !0 });
    },
    34477: (t, e, i) => {
      var a = i(25408);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("72828380", a, !1, { ssrId: !0 });
    },
    47983: (t, e, i) => {
      var a = i(76278);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("2ada5749", a, !1, { ssrId: !0 });
    },
    54702: (t, e, i) => {
      var a = i(82044);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("834928be", a, !1, { ssrId: !0 });
    },
    63374: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+IDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xOTdfOTI4KSI+IDxwYXRoIGQ9Ik0xMy43NDkxIDBDMTIuNjgyOSAwLjA3Mzc0OTYgMTEuNDM2NyAwLjc1NjI0NSAxMC43MTA0IDEuNjQ0OTlDMTAuMDQ3OSAyLjQ1MTI0IDkuNTAyOTIgMy42NDg3MyA5LjcxNTQyIDQuODEyNDdDMTAuODgwNCA0Ljg0ODcyIDEyLjA4NDEgNC4xNDk5OCAxMi43ODE2IDMuMjQ2MjNDMTMuNDM0MSAyLjQwNDk5IDEzLjkyNzkgMS4yMTQ5OSAxMy43NDkxIDBaIi8+IDxwYXRoIGQ9Ik0xNy45NjI5IDYuNzA5ODlDMTYuOTM5MSA1LjQyNjE1IDE1LjUwMDQgNC42ODExNSAxNC4xNDE2IDQuNjgxMTVDMTIuMzQ3OSA0LjY4MTE1IDExLjU4OTEgNS41Mzk5IDEwLjM0MjkgNS41Mzk5QzkuMDU3OTEgNS41Mzk5IDguMDgxNjcgNC42ODM2NSA2LjUzMDQzIDQuNjgzNjVDNS4wMDY2OSA0LjY4MzY1IDMuMzg0MiA1LjYxNDkgMi4zNTU0NSA3LjIwNzM5QzAuOTA5MjEyIDkuNDQ5ODggMS4xNTY3MSAxMy42NjYxIDMuNTAwNDUgMTcuMjU3M0M0LjMzOTE5IDE4LjU0MjMgNS40NTkxOSAxOS45ODczIDYuOTI0MTggMTkuOTk5OEM4LjIyNzkyIDIwLjAxMjMgOC41OTU0MiAxOS4xNjM2IDEwLjM2MTcgMTkuMTU0OEMxMi4xMjc5IDE5LjE0NDggMTIuNDYyOSAyMC4wMTExIDEzLjc2NDEgMTkuOTk3M0MxNS4yMzA0IDE5Ljk4NjEgMTYuNDExNiAxOC4zODQ4IDE3LjI1MDQgMTcuMDk5OEMxNy44NTE2IDE2LjE3ODYgMTguMDc1NCAxNS43MTQ5IDE4LjU0MTYgMTQuNjc0OUMxNS4xNTA0IDEzLjM4MzYgMTQuNjA2NiA4LjU2MTEzIDE3Ljk2MjkgNi43MDk4OVoiLz4gPC9nPiA8L3N2Zz4=";
    },
    58757: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTcuNDAxIDQ5Ny40MDEiPjxnPjxwYXRoIGQ9Ik00NzguNzQyIDE1NC4zODJIMzIwLjcxNGMyOC4zNjYgMjEuNzY1IDQ3LjExMSA1NS43MTcgNDcuMTExIDk0LjMwNyAwIDMwLjYzLTE0LjM0NSA1Ni4zODYtMzAuOTMzIDc5LjQ0NS0yOC4zMjIgMzkuNDEtOTUuODE3IDE2OC44NzgtOTUuODE3IDE2OC44NzggMi41NjcuMDQzIDUuMDI2LjM4OCA3LjYzNi4zODggMTM3LjM0MSAwIDI0OC42OS0xMTEuMzQ4IDI0OC42OS0yNDguNjktLjAyMi0zMy40MTItNi43MDktNjUuMjI5LTE4LjY1OS05NC4zMjh6Ii8+PHBhdGggZD0iTTI0OC4xNzIgMTI5LjYxOWM1NC40MDItLjM4OCAyMTcuNjI4LTIuMDQ5IDIxNy42MjgtMi4wNDlDNDIzLjI0IDUxLjUxMSAzNDIuMDY5IDAgMjQ4LjY5IDAgMTcwLjgxOSAwIDEwMS4zNjEgMzUuODI5IDU1Ljc4MiA5MS44NDhsNzUuOTcyIDEzNC45MjVjMTAuMjY4LTU1LjExMyA1OC4zNDktOTYuNzQ0IDExNi40MTgtOTcuMTU0eiIvPjxwYXRoIGQ9Ik0yNDguNjY4IDM2Ny44MjVjLTUxLjk2NCAwLTkxLjU2OC0zNS4xMTctMTExLjk3NC03OS44NTUtMjAuNTM1LTQ1LjAxOC05OC4wNjEtMTcxLjk4NC05OC4wNjEtMTcxLjk4NEMxNC4zMDEgMTU0LjQyNSAwIDE5OS44MzIgMCAyNDguNjljMCAxMjQuNzQ0IDkxLjkzNSAyMjcuNzQ0IDIxMS42OTYgMjQ1LjY0OGw3Ny4yODgtMTM0LjAxOWMtMTIuNjQxIDQuNjE1LTI2LjEwMSA3LjUwNi00MC4zMTYgNy41MDZ6Ii8+PGNpcmNsZSBjeD0iMjQ4LjY2OCIgY3k9IjI0OC43MTEiIHI9IjgwLjQxNiIvPjwvZz48L3N2Zz4K";
    },
    58037: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5OS40MzQgODlDMjQzLjA2NiA4OSAyODEuNDIzIDExMS42MjcgMzAzLjM5NyAxNDUuODYzQzMwNi45OCAxNTEuNDQ1IDMxMy4yODMgMTU0LjU0NiAzMTkuNzcgMTU0LjEyMkMzMjEuMDAxIDE1NC4wNDEgMzIyLjI0NCAxNTQgMzIzLjUgMTU0QzM0Ni45MzEgMTU0IDM2Ny4xMzUgMTY4LjQwOCAzNzUuNjggMTg5LjA5QzM3OS4xMTMgMTk3LjQgMzg4LjIwMSAyMDIuMDA1IDM5Ny4wMjQgMTk5LjY1OUM0MDMuNTMzIDE5Ny45MjggNDEwLjM5NCAxOTcgNDE3LjUgMTk3QzQ2MS4wMTUgMTk3IDQ5NiAyMzEuODU4IDQ5NiAyNzQuNUM0OTYgMzE2LjczMSA0NjEuNjg3IDM1MS4zMjcgNDE4Ljc1OCAzNTEuOTlDNDE4LjYzNyAzNTEuOTkyIDQxOC41MTYgMzUxLjk5NSA0MTguMzk1IDM1Mkg0MTcuNUgzNjQuNjk2QzM2MC4zNzggMzUyIDM1NyAzNTUuNjgyIDM1NyAzNjBDMzU3IDM2NC4zMTggMzYwLjM3OCAzNjggMzY0LjY5NiAzNjhINDE3LjVINDE4Ljk5NEM0MTguOTk1IDM2OCA0MTguOTk2IDM2OCA0MTguOTk3IDM2Ny45OTlMNDE4Ljk5OCAzNjcuOTk5TDQxOC45OTkgMzY3Ljk5OEM0MTkgMzY3Ljk5NyA0MTkgMzY3Ljk5NiA0MTkgMzY3Ljk5NEM0MTkgMzY3Ljk5MSA0MTkuMDAzIDM2Ny45ODggNDE5LjAwNiAzNjcuOTg4QzQ3MC41MDIgMzY3LjE5MiA1MTIgMzI1LjY0MSA1MTIgMjc0LjVDNTEyIDIyMi44NjEgNDY5LjY5MSAxODEgNDE3LjUgMTgxQzQwOC45OTUgMTgxIDQwMC43NTIgMTgyLjExMiAzOTIuOTEyIDE4NC4xOTZDMzkxLjkxIDE4NC40NjMgMzkwLjg2MyAxODMuOTM5IDM5MC40NjcgMTgyLjk4MUMzNzkuNTU1IDE1Ni41NyAzNTMuNjgxIDEzOCAzMjMuNSAxMzhDMzIxLjg5NSAxMzggMzIwLjMwMyAxMzguMDUyIDMxOC43MjQgMTM4LjE1NkMzMTcuOTggMTM4LjIwNSAzMTcuMjY1IDEzNy44NDggMzE2Ljg2MiAxMzcuMjJDMjkyLjA3IDk4LjU5MzQgMjQ4Ljc0MSA3MyAxOTkuNDM0IDczQzEzNC4wMzMgNzMgNzkuMTQ5OCAxMTguMDI2IDY0LjA5MDggMTc4Ljc3QzYzLjkyOTMgMTc5LjQyMiA2My40NTQxIDE3OS45NTUgNjIuODI1NyAxODAuMTkxQzI2LjExNTkgMTk0LjAxMyAwIDIyOS40NTcgMCAyNzFDMCAzMjQuNTcyIDQzLjQyODQgMzY4IDk3IDM2OEgxNDcuMzA0QzE1MS42MjIgMzY4IDE1NSAzNjQuMzE4IDE1NSAzNjBDMTU1IDM1NS42ODIgMTUxLjYyMiAzNTIgMTQ3LjMwNCAzNTJIOTdDNTIuMjY0OSAzNTIgMTYgMzE1LjczNSAxNiAyNzFDMTYgMjM2LjMzNCAzNy43ODM3IDIwNi43MTcgNjguNDYzNiAxOTUuMTY1QzczLjk5OTMgMTkzLjA4MSA3OC4xODc2IDE4OC40MDEgNzkuNjIwNyAxODIuNjJDOTIuOTUyIDEyOC44NDUgMTQxLjU2IDg5IDE5OS40MzQgODlaTTI1NiA0MjlDMjk0LjEwOCA0MjkgMzI1IDM5OC4xMDggMzI1IDM2MEMzMjUgMzIxLjg5MiAyOTQuMTA4IDI5MSAyNTYgMjkxQzIxNy44OTIgMjkxIDE4NyAzMjEuODkyIDE4NyAzNjBDMTg3IDM5OC4xMDggMjE3Ljg5MiA0MjkgMjU2IDQyOVpNMjU2IDQ0NUMzMDIuOTQ0IDQ0NSAzNDEgNDA2Ljk0NCAzNDEgMzYwQzM0MSAzMTMuMDU2IDMwMi45NDQgMjc1IDI1NiAyNzVDMjA5LjA1NiAyNzUgMTcxIDMxMy4wNTYgMTcxIDM2MEMxNzEgNDA2Ljk0NCAyMDkuMDU2IDQ0NSAyNTYgNDQ1Wk0yMzEuMzQzIDM4Ni42NTdDMjI4LjIxOSAzODMuNTMzIDIyOC4yMTkgMzc4LjQ2NyAyMzEuMzQzIDM3NS4zNDNMMjQ0LjI3MiAzNjIuNDE0QzI0NS4wNTMgMzYxLjYzMyAyNDUuMDUzIDM2MC4zNjcgMjQ0LjI3MiAzNTkuNTg2TDIzMS4zNDMgMzQ2LjY1N0MyMjguMjE5IDM0My41MzMgMjI4LjIxOSAzMzguNDY3IDIzMS4zNDMgMzM1LjM0M0MyMzQuNDY3IDMzMi4yMTkgMjM5LjUzMyAzMzIuMjE5IDI0Mi42NTcgMzM1LjM0M0wyNTUuNTg2IDM0OC4yNzJDMjU2LjM2NyAzNDkuMDUzIDI1Ny42MzMgMzQ5LjA1MyAyNTguNDE0IDM0OC4yNzJMMjcxLjM0MyAzMzUuMzQzQzI3NC40NjcgMzMyLjIxOSAyNzkuNTMzIDMzMi4yMTkgMjgyLjY1NyAzMzUuMzQzQzI4NS43ODEgMzM4LjQ2NyAyODUuNzgxIDM0My41MzMgMjgyLjY1NyAzNDYuNjU3TDI2OS43MjggMzU5LjU4NkMyNjguOTQ3IDM2MC4zNjcgMjY4Ljk0NyAzNjEuNjMzIDI2OS43MjggMzYyLjQxNEwyODIuNjU3IDM3NS4zNDNDMjg1Ljc4MSAzNzguNDY3IDI4NS43ODEgMzgzLjUzMyAyODIuNjU3IDM4Ni42NTdDMjc5LjUzMyAzODkuNzgxIDI3NC40NjcgMzg5Ljc4MSAyNzEuMzQzIDM4Ni42NTdMMjU4LjQxNCAzNzMuNzI4QzI1Ny42MzMgMzcyLjk0NyAyNTYuMzY3IDM3Mi45NDcgMjU1LjU4NiAzNzMuNzI4TDI0Mi42NTcgMzg2LjY1N0MyMzkuNTMzIDM4OS43ODEgMjM0LjQ2NyAzODkuNzgxIDIzMS4zNDMgMzg2LjY1N1pNMzg3Ljc0MyAzMjEuNzQzQzM5MC4wODYgMzE5LjM5OSAzOTAuMDg2IDMxNS42MDEgMzg3Ljc0MyAzMTMuMjU3QzM4NS40IDMxMC45MTQgMzgxLjYwMSAzMTAuOTE0IDM3OS4yNTcgMzEzLjI1N0wzNjYuNzU3IDMyNS43NTdDMzY0LjQxNCAzMjguMTAxIDM2NC40MTQgMzMxLjkgMzY2Ljc1NyAzMzQuMjQzQzM2OS4xMDEgMzM2LjU4NiAzNzIuOSAzMzYuNTg2IDM3NS4yNDMgMzM0LjI0M0wzODcuNzQzIDMyMS43NDNaTTM3NS4yNDMgMzg1Ljc1N0MzNzIuOSAzODMuNDE0IDM2OS4xMDEgMzgzLjQxNCAzNjYuNzU3IDM4NS43NTdDMzY0LjQxNCAzODguMSAzNjQuNDE0IDM5MS45IDM2Ni43NTcgMzk0LjI0M0wzNzkuMjU3IDQwNi43NDNDMzgxLjYwMSA0MDkuMDg2IDM4NS40IDQwOS4wODYgMzg3Ljc0MyA0MDYuNzQzQzM5MC4wODYgNDA0LjM5OSAzOTAuMDg2IDQwMC42IDM4Ny43NDMgMzk4LjI1N0wzNzUuMjQzIDM4NS43NTdaTTEyNC4yNTcgNDA2Ljc0M0MxMjEuOTE0IDQwNC40IDEyMS45MTQgNDAwLjYgMTI0LjI1NyAzOTguMjU3TDEzNi43NTcgMzg1Ljc1N0MxMzkuMTAxIDM4My40MTQgMTQyLjg5OSAzODMuNDE0IDE0NS4yNDMgMzg1Ljc1N0MxNDcuNTg2IDM4OC4xIDE0Ny41ODYgMzkxLjkgMTQ1LjI0MyAzOTQuMjQzTDEzMi43NDMgNDA2Ljc0M0MxMzAuMzk5IDQwOS4wODYgMTI2LjYwMSA0MDkuMDg2IDEyNC4yNTcgNDA2Ljc0M1pNMTQ1LjI0MyAzMzQuMjQzQzE0Mi45IDMzNi41ODYgMTM5LjEwMSAzMzYuNTg2IDEzNi43NTcgMzM0LjI0M0wxMjQuMjU3IDMyMS43NDNDMTIxLjkxNCAzMTkuMzk5IDEyMS45MTQgMzE1LjYwMSAxMjQuMjU3IDMxMy4yNTdDMTI2LjYwMSAzMTAuOTE0IDEzMC40IDMxMC45MTQgMTMyLjc0MyAzMTMuMjU3TDE0NS4yNDMgMzI1Ljc1N0MxNDcuNTg2IDMyOC4xMDEgMTQ3LjU4NiAzMzEuOSAxNDUuMjQzIDMzNC4yNDNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";
    }
  }
]);
