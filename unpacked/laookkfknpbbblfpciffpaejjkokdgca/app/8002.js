(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8002, 9437, 6399],
  {
    99437: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => v });
      var a = i(20144),
        s = i(88026),
        n = i(51726),
        o = i.n(n),
        r = i(55482),
        l = i(7838),
        d = i(35174);
      let u = {};
      const c = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (u[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", u[t.dataset.mobileClickHandlerId]),
            delete u[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var p = i(63420),
        h = i(64398),
        g = i(77197);
      a.ZP.use(s.Z, { name: "unreactive" }),
        a.ZP.use(o()),
        a.ZP.use(r.qK),
        a.ZP.use(p.og),
        a.ZP.use(g.Z),
        (a.ZP.prototype.$xhr = d.Z),
        (a.ZP.prototype.$e = l.Z),
        a.ZP.directive("mobile-click", c),
        new a.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        a.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: h.Z
        });
      const v = a.ZP;
    },
    58964: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      let a = {};
      const s = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileBlurHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileBlurHandler = !1;
            }, 100),
            (t.dataset.mobileBlurHandlerId = Math.random().toString(36).substring(7)),
            (a[t.dataset.mobileBlurHandlerId] = e.value),
            t.addEventListener("focusout", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", a[t.dataset.mobileBlurHandlerId]),
            delete a[t.dataset.mobileBlurHandlerId],
            delete t.dataset.mobileBlurHandlerId,
            delete t.dataset.justBoundMobileBlurHandler);
        }
      };
    },
    48002: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => w });
      var a = i(99437),
        s = function () {
          var t = this,
            e = t._self._c;
          return e("transition", { attrs: { name: "fade" }, on: { "after-leave": t.afterLeave } }, [
            t.showIntro
              ? e(
                  "div",
                  {
                    staticClass: "intro dark-full",
                    attrs: { id: "introduction", "data-test": "introduction" },
                    on: { click: t.focusInput }
                  },
                  [
                    e("div", { staticClass: "intro-top" }, [e("img", { staticClass: "logo", attrs: { src: "img/logo-white.svg" } })]),
                    t._v(" "),
                    e(
                      "div",
                      { staticClass: "intro-middle u--scrim" },
                      [
                        e("transition", { attrs: { name: "fade", mode: "out-in" }, on: { enter: t.focusInput } }, [
                          t.activeStep
                            ? e("div", { key: t.activeStepId, staticClass: "intro-middle-wrapper" }, [
                                e("div", { staticClass: "above" }),
                                t._v(" "),
                                t.isThirdPartyEmail
                                  ? e("div", { staticClass: "question" }, [t._v(t._s(t.thirdPartyMsg))])
                                  : e("div", { staticClass: "prompt" }, [
                                      e(
                                        "span",
                                        { staticClass: "question", class: t.activeStep.stepClass, attrs: { "data-test": "question" } },
                                        [t._v("\n\t\t\t\t\t\t\t" + t._s(t.message) + "\n\t\t\t\t\t\t")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass: "input-wrapper",
                                          class: { "has-text-input": "password" !== t.activeStep.inputType },
                                          attrs: { "data-value": t.inputValue }
                                        },
                                        [
                                          "password" === t.activeStep.valueType
                                            ? e("span", { staticClass: "input-left-column", attrs: { "data-test": "input-left-column" } })
                                            : t._e(),
                                          t._v(" "),
                                          e("span", { staticClass: "input-center-column", attrs: { "data-test": "input-center-column" } }, [
                                            "checkbox" !== t.inputType || t.activeStep.hideInput
                                              ? "radio" !== t.inputType || t.activeStep.hideInput
                                                ? t.activeStep.hideInput
                                                  ? t._e()
                                                  : e("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: t.inputValue,
                                                          expression: "inputValue"
                                                        },
                                                        {
                                                          name: "mobile-blur",
                                                          rawName: "v-mobile-blur",
                                                          value: t.setValue,
                                                          expression: "setValue"
                                                        }
                                                      ],
                                                      ref: "input",
                                                      staticClass: "input",
                                                      class: t.activeStep.inputClass,
                                                      attrs: {
                                                        id: "introduction-input",
                                                        spellcheck: "false",
                                                        autocomplete: "off",
                                                        name: "notASearchFieldSafari",
                                                        "data-test": t.activeStep.dataTest,
                                                        type: t.inputType
                                                      },
                                                      domProps: { value: t.inputValue },
                                                      on: {
                                                        keydown: [
                                                          t.onKeydown,
                                                          function (e) {
                                                            return !e.type.indexOf("key") &&
                                                              t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"])
                                                              ? null
                                                              : t.handleSpaceInput.apply(null, arguments);
                                                          }
                                                        ],
                                                        input: [
                                                          function (e) {
                                                            e.target.composing || (t.inputValue = e.target.value);
                                                          },
                                                          t.onInput
                                                        ],
                                                        click: function (t) {
                                                          t.stopPropagation();
                                                        }
                                                      }
                                                    })
                                                : e("input", {
                                                    directives: [
                                                      { name: "model", rawName: "v-model", value: t.inputValue, expression: "inputValue" },
                                                      {
                                                        name: "mobile-blur",
                                                        rawName: "v-mobile-blur",
                                                        value: t.setValue,
                                                        expression: "setValue"
                                                      }
                                                    ],
                                                    ref: "input",
                                                    staticClass: "input",
                                                    class: t.activeStep.inputClass,
                                                    attrs: {
                                                      id: "introduction-input",
                                                      spellcheck: "false",
                                                      autocomplete: "off",
                                                      name: "notASearchFieldSafari",
                                                      "data-test": t.activeStep.dataTest,
                                                      type: "radio"
                                                    },
                                                    domProps: { checked: t._q(t.inputValue, null) },
                                                    on: {
                                                      keydown: [
                                                        t.onKeydown,
                                                        function (e) {
                                                          return !e.type.indexOf("key") &&
                                                            t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"])
                                                            ? null
                                                            : t.handleSpaceInput.apply(null, arguments);
                                                        }
                                                      ],
                                                      input: t.onInput,
                                                      click: function (t) {
                                                        t.stopPropagation();
                                                      },
                                                      change: function (e) {
                                                        t.inputValue = null;
                                                      }
                                                    }
                                                  })
                                              : e("input", {
                                                  directives: [
                                                    { name: "model", rawName: "v-model", value: t.inputValue, expression: "inputValue" },
                                                    {
                                                      name: "mobile-blur",
                                                      rawName: "v-mobile-blur",
                                                      value: t.setValue,
                                                      expression: "setValue"
                                                    }
                                                  ],
                                                  ref: "input",
                                                  staticClass: "input",
                                                  class: t.activeStep.inputClass,
                                                  attrs: {
                                                    id: "introduction-input",
                                                    spellcheck: "false",
                                                    autocomplete: "off",
                                                    name: "notASearchFieldSafari",
                                                    "data-test": t.activeStep.dataTest,
                                                    type: "checkbox"
                                                  },
                                                  domProps: {
                                                    checked: Array.isArray(t.inputValue) ? t._i(t.inputValue, null) > -1 : t.inputValue
                                                  },
                                                  on: {
                                                    keydown: [
                                                      t.onKeydown,
                                                      function (e) {
                                                        return !e.type.indexOf("key") &&
                                                          t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"])
                                                          ? null
                                                          : t.handleSpaceInput.apply(null, arguments);
                                                      }
                                                    ],
                                                    input: t.onInput,
                                                    click: function (t) {
                                                      t.stopPropagation();
                                                    },
                                                    change: function (e) {
                                                      var i = t.inputValue,
                                                        a = e.target,
                                                        s = !!a.checked;
                                                      if (Array.isArray(i)) {
                                                        var n = t._i(i, null);
                                                        a.checked
                                                          ? n < 0 && (t.inputValue = i.concat([null]))
                                                          : n > -1 && (t.inputValue = i.slice(0, n).concat(i.slice(n + 1)));
                                                      } else t.inputValue = s;
                                                    }
                                                  }
                                                }),
                                            t._v(" "),
                                            e("span", { staticClass: "hidden-span" }, [t._v(t._s(t.hiddenSpanValue))])
                                          ]),
                                          t._v(" "),
                                          "password" === t.activeStep.valueType
                                            ? e(
                                                "button",
                                                {
                                                  staticClass: "input-right-column",
                                                  attrs: { title: t.passwordVisibilityTitle, "data-test": "input-right-column" },
                                                  on: { click: t.togglePasswordVisibility }
                                                },
                                                [
                                                  t.showInputText
                                                    ? e("inline-svg", { staticClass: "password-visibility-icon", attrs: { src: i(38589) } })
                                                    : e("inline-svg", { staticClass: "password-visibility-icon", attrs: { src: i(17952) } })
                                                ],
                                                1
                                              )
                                            : t._e()
                                        ]
                                      )
                                    ]),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "below" },
                                  [
                                    e("transition", { attrs: { name: "fade-fast", mode: "out-in" } }, [
                                      t.loading
                                        ? e(
                                            "div",
                                            { key: "1", staticClass: "below-input-msg loading", attrs: { "data-test": "loading-state" } },
                                            [e("span", { staticClass: "loading-icon" }), t._v(" Loading...\n\t\t\t\t\t\t\t")]
                                          )
                                        : e(
                                            "div",
                                            { key: "2" },
                                            [
                                              e("smooth-reflow", { attrs: { duration: 200 } }, [
                                                t.errorMsg
                                                  ? e("div", {
                                                      key: t.errorMsg,
                                                      staticClass: "below-input-msg error-message",
                                                      attrs: { "data-test": "error-msg" },
                                                      domProps: { innerHTML: t._s(t.errorMsg) }
                                                    })
                                                  : t.currentTip
                                                  ? e("div", {
                                                      key: t.currentTip,
                                                      staticClass: "below-input-msg tip",
                                                      attrs: { "data-test": "introduction-tip" },
                                                      domProps: { innerHTML: t._s(t.currentTip) },
                                                      on: { click: t.onTipClick }
                                                    })
                                                  : t._e()
                                              ]),
                                              t._v(" "),
                                              t.activeStep.belowInputComponent && t.activeStep.belowInputComponentVisible
                                                ? e(
                                                    t.activeStep.belowInputComponent,
                                                    t._g(
                                                      t._b({ tag: "component" }, "component", t.activeStep.componentProps || {}, !1),
                                                      t.activeStep.componentEvents || {}
                                                    )
                                                  )
                                                : t._e(),
                                              t._v(" "),
                                              e("transition", { attrs: { name: "fade-fast", mode: "out-in" } }, [
                                                t.showContinueBtn
                                                  ? e("div", { staticClass: "continue-button-wrapper" }, [
                                                      e(
                                                        "button",
                                                        {
                                                          staticClass: "button dash-button button-continue",
                                                          attrs: { "data-test": "continue-button" },
                                                          on: {
                                                            click: function (e) {
                                                              return e.stopPropagation(), t.setValue.apply(null, arguments);
                                                            }
                                                          }
                                                        },
                                                        [
                                                          t._v("\n\t\t\t\t\t\t\t\t\t\t\tContinue\n\t\t\t\t\t\t\t\t\t\t\t"),
                                                          e("inline-svg", { staticClass: "icon icon-next", attrs: { src: i(86043) } })
                                                        ],
                                                        1
                                                      )
                                                    ])
                                                  : t._e()
                                              ])
                                            ],
                                            1
                                          )
                                    ])
                                  ],
                                  1
                                )
                              ])
                            : t._e()
                        ])
                      ],
                      1
                    ),
                    t._v(" "),
                    e("div", { staticClass: "intro-bottom" }, [
                      e(
                        "div",
                        { staticClass: "intro-bottom-wrapper" },
                        [
                          e("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                            t.activeStep
                              ? e(
                                  "div",
                                  { key: t.activeStepId, staticClass: "intro-buttons", class: { "has-one-button": t.hasOneButton } },
                                  t._l(t.bottomButtons, function (i) {
                                    return e(
                                      "button",
                                      {
                                        key: i.text,
                                        staticClass: "button dash-button",
                                        attrs: { "data-test": i.dataTest },
                                        on: {
                                          click: function (t) {
                                            return t.stopPropagation(), i.action();
                                          }
                                        }
                                      },
                                      [
                                        e("inline-svg", { staticClass: "icon", class: i.iconClass, attrs: { src: i.icon } }),
                                        t._v("\n\t\t\t\t\t\t\t" + t._s(i.text) + "\n\t\t\t\t\t\t")
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                )
                              : t._e()
                          ])
                        ],
                        1
                      ),
                      t._v(" "),
                      e("div", { staticClass: "scrim" })
                    ])
                  ]
                )
              : t._e()
          ]);
        };
      s._withStripped = !0;
      var n = i(92729),
        o = i(36399),
        r = i(58964),
        l = i(81405),
        d = i(96046),
        u = i(72918);
      const c = new l.ZP({ feature: "login" }),
        p = "0",
        h = "1",
        g = "2",
        v = {
          name: "Introduction",
          components: { SmoothReflow: o.default },
          directives: { MobileBlur: r.Z },
          unreactive() {
            return {
              brandingInfoBase: {
                messageTemplate: "Logging in to {{ companyName }}...",
                subMessageTemplate: "Redirecting to {{ idProviderName }} to verify your account."
              },
              steps: {
                [p]: {
                  message: "Hello, what's your name?",
                  dataTest: "introduction-name",
                  valueType: "name",
                  validation: () =>
                    this.inputValue.trim().length
                      ? (m.models.customization.save({ displayname: this.inputValue }), localStorage.setItem("tokenNeeded", !0), !0)
                      : (this.setError(n.Qj.NAME_EMPTY), !1),
                  nextStep: h
                },
                [h]: {
                  message: "What's your email, {name}?",
                  dataTest: "introduction-email",
                  valueType: "email",
                  inputType: "email",
                  onEsc: () => {
                    const t = this.$refs.input;
                    t && t.blur(), c.capture("email-step dismiss", { method: "hotkey" }), this.stayLoggedOut();
                  },
                  validation: () =>
                    this.inputValue.trim().length
                      ? !!m.utils.validateEmail(this.inputValue) ||
                        (this.setError(n.Qj.EMAIL_INVALID.replace("{email}", this.inputValue)), !1)
                      : (this.setError(n.Qj.EMAIL_EMPTY), !1),
                  beforeNextStep: () =>
                    new Promise((t, e) =>
                      this.checkEmail()
                        .then((e) => {
                          if (e && e.managedDomain) {
                            this.isThirdPartyEmail = !0;
                            let t = Object.assign({}, this.brandingInfoBase, e.brandingInfo);
                            (this.thirdPartyMsg =
                              t.message ||
                              t.messageTemplate
                                .replace("{{ companyName }}", t.companyName)
                                .replace("{{ idProviderName }}", t.idProviderName)),
                              (this.currentTip =
                                t.subMessage ||
                                t.subMessageTemplate
                                  .replace("{{ companyName }}", t.companyName)
                                  .replace("{{ idProviderName }}", t.idProviderName)),
                              m.commandManager.execute("auth.thirdparty", email);
                          } else
                            e.emailExists
                              ? (this.nextStep = e.invitePending ? "6" : "3")
                              : e.emailExists ||
                                ((this.nextStep = g),
                                e.newsletterOptIn ||
                                  ((this.steps[g].belowInputComponentVisible = !1), (this.steps[g].componentProps.value = null)));
                          t(e);
                        })
                        .catch((t) => {
                          this.setError(this.getErrorMessage(t)), e(t);
                        })
                    ),
                  buttons: [
                    {
                      icon: i(86043),
                      iconClass: "icon-back",
                      text: "Change name",
                      action: () => {
                        c.capture("change name click"), this.goToStep(p);
                      },
                      dataTest: "use-different-name-button"
                    },
                    {
                      icon: i(73555),
                      iconClass: "icon-skip",
                      text: "Stay logged out",
                      action: () => {
                        c.capture("email-step dismiss", { method: "click" }), this.stayLoggedOut();
                      },
                      dataTest: "stay-logged-out-button"
                    }
                  ]
                },
                [g]: (() => {
                  const t = new a.Z.observable({ value: !1, visible: !0 });
                  return {
                    message: "Please choose a password.",
                    eventMessage: "Password For Login",
                    dataTest: "introduction-create-password",
                    valueType: "password",
                    inputType: "password",
                    inputClass: "password-input",
                    eventCase: "create",
                    belowInputComponent: () => i.e(9537).then(i.bind(i, 79537)),
                    get belowInputComponentVisible() {
                      return t.visible;
                    },
                    set belowInputComponentVisible(e) {
                      t.visible = e;
                    },
                    componentProps: t,
                    componentEvents: { input: (e) => (t.value = e) },
                    onShow: () =>
                      (this.currentTip =
                        'Momentum respects your privacy. Learn more in our <a href="https://momentumdash.com/legal" target="_blank" data-capture="privacy click">Terms & Privacy Policy</a>.'),
                    validation: () => this.validatePassword(this.inputValue),
                    beforeNextStep: () =>
                      this.register(t.value).catch((t) => {
                        throw (t.message ? this.setError(t.message) : this.setError(n.Qj.SERVER_ERROR_GENERAL), t);
                      }),
                    afterSuccess: () => {
                      c.capture("password-step complete", { case: "create", newsletter_opt_in: t.visible ? t.value : "hidden" }),
                        (0, u.Z)(),
                        this.loginComplete();
                    },
                    prevStep: h,
                    buttons: [
                      {
                        icon: i(86043),
                        iconClass: "icon-back",
                        text: "Email",
                        action: () => {
                          c.capture("change email click"), this.goToStep(h);
                        },
                        dataTest: "use-different-email-button"
                      }
                    ]
                  };
                })(),
                3: {
                  message: "What's your password?",
                  eventMessage: "Password For Login",
                  dataTest: "introduction-prompt-password",
                  valueType: "password",
                  inputType: "password",
                  inputClass: "password-input",
                  eventCase: "login",
                  validation: () => this.validatePassword(this.inputValue),
                  beforeNextStep: () =>
                    new Promise((t, e) =>
                      this.login()
                        .then(t)
                        .catch(({ response: t }) => {
                          let i = "";
                          400 === (null == t ? void 0 : t.status) || 401 === (null == t ? void 0 : t.status)
                            ? ((i = n.Qj.PASSWORD_INCORRECT), this.setError(i.replace("{email}", this.email)))
                            : 429 === (null == t ? void 0 : t.status)
                            ? this.setError(n.Qj.TOO_MANY_ATTEMPTS)
                            : this.setError(n.Qj.SERVER_ERROR_GENERAL),
                            e(t);
                        })
                    ),
                  prevStep: h,
                  afterSuccess: (t) => {
                    c.capture("password-step complete", { case: "login" }), this.successfulLogin(t);
                  },
                  buttons: [
                    {
                      icon: i(86043),
                      iconClass: "icon-back",
                      text: "Email",
                      action: () => {
                        c.capture("change email click"), this.goToStep(h);
                      },
                      dataTest: "use-different-email-button"
                    },
                    {
                      icon: i(18089),
                      iconClass: "icon-password",
                      text: "Change password",
                      action: () => {
                        this.goToStep("4");
                      },
                      dataTest: "reset-password-button"
                    }
                  ]
                },
                4: {
                  message: "What would you like your new password to be?",
                  eventMessage: "Password For Reset",
                  dataTest: "introduction-reset-password",
                  valueType: "password",
                  inputType: "password",
                  inputClass: "password-input",
                  prevStep: h,
                  eventCase: "reset",
                  onShow: () => {
                    this.currentTip = `Changing password for ${this.email}.`;
                  },
                  validation: () => this.validatePassword(this.inputValue),
                  beforeNextStep: () =>
                    this.resetPassword()
                      .then(() => {
                        c.capture("password-step complete", { case: "reset" }),
                          (this.afterFadeOutCallback = function () {
                            m.commandManager.execute("notification.show.enhanced", {
                              priority: 1,
                              title: "Confirm new password",
                              message:
                                "A verification email will be sent to you shortly. To finish changing your password, click the link in the email."
                            });
                          }),
                          this.clearIntroduction();
                      })
                      .catch((t) => {
                        throw (this.setError(n.Qj.SERVER_ERROR_GENERAL), t);
                      }),
                  buttons: [
                    {
                      icon: i(86043),
                      iconClass: "icon-back",
                      text: "Email",
                      action: () => {
                        c.capture("change email click"), this.goToStep(h);
                      },
                      dataTest: "use-different-email-button"
                    }
                  ]
                },
                5: {
                  prevStep: h,
                  hideInput: !0,
                  buttons: [
                    {
                      icon: i(86043),
                      iconClass: "icon-back",
                      text: "Email",
                      action: () => {
                        localStorage.removeItem("onetimeSent"), this.name ? this.goToStep(h) : this.goToStep(p);
                      },
                      dataTest: "use-different-email-button"
                    }
                  ]
                },
                6: {
                  hideInput: !0,
                  stepClass: "message",
                  message: "Please check your email for an invitation to your Momentum team account."
                }
              }
            };
          },
          data: () => ({
            showIntro: !0,
            nextStep: null,
            activeStepId: "",
            name: m.models.customization.get("displayname") || "",
            email: "",
            isThirdPartyEmail: !1,
            thirdPartyMsg: "",
            password: "",
            loading: !1,
            currentTip: "",
            errorMsg: "",
            showContinueBtn: !1,
            inputValue: "",
            overrideButtons: null,
            showInputText: !1
          }),
          computed: {
            bottomButtons() {
              return this.overrideButtons || this.activeStep.buttons;
            },
            hasOneButton() {
              return !!this.bottomButtons && 1 === this.bottomButtons.length;
            },
            activeStep() {
              return this.steps[this.activeStepId];
            },
            passwordVisibilityTitle() {
              return this.showInputText ? "Hide password" : "Reveal password";
            },
            message() {
              return this.activeStep.message.replace("{name}", this.name);
            },
            hiddenSpanValue() {
              return this.inputValue
                ? "password" !== this.activeStep.inputType || this.showInputText
                  ? this.inputValue.replace(/ /g, " ") || " "
                  : new Array(this.inputValue.length + 1).join("•")
                : " ";
            },
            inputType() {
              return "password" === this.activeStep.inputType && this.showInputText ? "text" : this.activeStep.inputType || "text";
            }
          },
          created() {
            m.widgetManager.hideApps({ immediate: !0, lock: !0 }),
              m.on("globalEvent:esc", this.handleEsc),
              window.addEventListener("keyup", this.onEnterOrTab),
              localStorage.removeItem("doLoginOnNextLoad");
            const t = localStorage.getItem("loginParams");
            t ? (this.goToStep("3"), this.processPendingLogin(t)) : this.name ? this.goToStep(h) : this.goToStep(p);
          },
          mounted() {
            document.body.classList.add("hide-overlay"),
              "none" === document.getElementById("main-view").style.display ? m.once("appsReady", this.focusInput) : this.focusInput();
          },
          destroyed() {
            window.removeEventListener("keyup", this.onEnterOrTab),
              m.off("globalEvent:esc", this.handleEsc),
              document.body.classList.remove("hide-overlay"),
              (m.introductionActive = !1),
              this.onboardingSkipped && m.models.notificationManager.displayPendingMessages();
          },
          methods: {
            onTipClick(t) {
              let e = t.target.getAttribute("data-capture");
              e && c.capture(e);
            },
            handleSpaceInput(t) {
              "email" == this.activeStep.inputType && (t.preventDefault(), this.setError(n.Qj.EMAIL_NO_SPACES));
            },
            onKeydown() {
              this.errorMsg = "";
            },
            onEnterOrTab(t) {
              ("Enter" !== t.key && "Tab" !== t.key) || this.setValue();
            },
            focusInput() {
              const t = this.$refs.input;
              t &&
                setTimeout(() => {
                  t.focus(),
                    "email" !== this.activeStep.inputType && (t.selectionStart = t.selectionEnd = t.value.length),
                    (t.scrollLeft = t.scrollWidth);
                }, 0);
            },
            processPendingLogin(t) {
              let e = {},
                i = localStorage.getItem("pendingLoginState");
              i && (e.pendingState = i),
                t && (e.loginParams = t),
                this.setLoadingState(),
                this.$xhr
                  .post("user/authenticate", e)
                  .then((t) => {
                    (t = t.data), (this.loading = !1), localStorage.removeItem("loginParams"), this.successfulLogin(t, !0);
                  })
                  .catch((t) => {
                    var e;
                    if (
                      ((this.loading = !1),
                      localStorage.removeItem("onetimeSent"),
                      localStorage.removeItem("loginParams"),
                      401 === (null === (e = t.response) || void 0 === e ? void 0 : e.status))
                    ) {
                      this.email = localStorage.getItem("email");
                      let t = `The one-time link ${this.email && " for " + this.email} has expired. ${
                        this.email && " Try sending a new one-time login link to the same email, or use a different email address."
                      }`;
                      this.setError(t),
                        (this.name = m.models.customization.get("displayname")),
                        this.name
                          ? this.overrideButtons.push({
                              text: "Use a different email",
                              action: () => this.goToStep(h),
                              dataTest: "use-different-email-button"
                            })
                          : this.overrideButtons.push({
                              text: "Enter your name",
                              action: () => {
                                this.goToStep(p);
                              },
                              dataTest: "enter-your-name-button"
                            });
                    } else this.setError(n.Qj.SERVER_ERROR_GENERAL);
                  }),
                localStorage.removeItem("pendingLoginState");
            },
            successfulLogin(t = {}, e) {
              const i = localStorage.getItem("user_uuid");
              !e || (i && i === t.user_uuid) || m.commandManager.execute("user.cleanup", { type: "all" }),
                m.utils.handleAuthResponse(t),
                m.commandManager.execute("notification.dismiss"),
                this.loginComplete();
            },
            loginComplete() {
              localStorage.setItem("email", this.email),
                m.trigger("user:successfulLogin", () => {
                  localStorage.setItem("loggedIn", m.now()), localStorage.removeItem("onetimeSent"), this.clearIntroduction();
                });
            },
            clearIntroduction() {
              const t = ({ onboardingSkipped: t, keepAppsHidden: e } = {}) => {
                const i = () => {
                  this.clearMessages(), (this.showIntro = !1);
                };
                clearTimeout(this.onboardingTimeout),
                  (this.onboardingSkipped = !!t),
                  (this.keepAppsHidden = !!e),
                  d.Z.appsReady ? i() : m.once("appsReady", i);
              };
              l.ZP.identify(),
                m.utils.loadOnboarding(),
                localStorage.removeItem("doLoginOnNextLoad"),
                (m.readyForWidgets = !0),
                m.conditionalFeatures.featureEnabled("team") && document.getElementsByTagName("body")[0].classList.add("has-team"),
                (d.Z.appsReady = !1),
                (this.onboardingTimeout = setTimeout(() => {
                  m.off("onboarding:stepsAnalyzed", t), t({ onboardingSkipped: !0 });
                }, 5e3)),
                m.once("onboarding:stepsAnalyzed", t),
                m.trigger("readyForWidgets");
            },
            stayLoggedOut() {
              localStorage.removeItem("onetimeSent"),
                localStorage.removeItem("pendingLoginState"),
                localStorage.removeItem("loginParams"),
                localStorage.getItem("unregistered") && localStorage.getItem("token")
                  ? this.clearIntroduction()
                  : (this.setLoadingState(),
                    this.$xhr
                      .post("user/register?canceled=true", { name: m.models.customization.get("displayname"), version: m.globals.version })
                      .then((t) => {
                        (t = t.data).token &&
                          (m.utils.setToken(t.token, t.token_uuid),
                          t.settings && m.syncCoordinator.loadSettings(t.settings),
                          localStorage.setItem("unregistered", !0),
                          localStorage.removeItem("registrationStatePending")),
                          (t.successfulRegister = !0),
                          t.settings && m.syncCoordinator.loadSettings(t.settings),
                          this.loginComplete();
                      })
                      .catch((t) => this.setError(this.getErrorMessage(t))));
            },
            async checkEmail() {
              const t = this.email,
                { data: e } = await this.$xhr.post("/user:preregister", { email: t });
              return e;
            },
            validatePassword(t) {
              return !(t.length < 6 && (this.setError(n.Qj.PASSWORD_INVALID), 1));
            },
            async register(t) {
              const e = this.email,
                i = this.password,
                a = { name: this.name, email: e, password: i, version: m.globals.version };
              null !== t && (a.newsletterOptIn = t);
              const { data: s } = await this.$xhr.post("user/register", a).catch((t) => {
                var e;
                throw (
                  ((t.message =
                    (null === (e = t.response) || void 0 === e ? void 0 : e.msg) ||
                    "An error occurred during registration. Please try again shortly."),
                  t)
                );
              });
              return m.utils.handleAuthResponse(s), (s.successfulRegister = !0), s;
            },
            async login() {
              const t = this.email,
                e = this.password,
                { data: i } = await this.$xhr.post("user/authenticate", { username: t, password: e });
              return (i.successfulLogin = !0), i;
            },
            async resetPassword() {
              const t = this.email,
                e = this.password,
                i = this.name,
                { data: a } = await this.$xhr.post("user/forgot", { name: i, email: t, password: e });
              return a;
            },
            getErrorMessage(t, e) {
              var i;
              return null != t && null !== (i = t.response) && void 0 !== i && i.msg
                ? t.response.msg
                : navigator.onLine
                ? "Network Error" === t.message
                  ? n.Qj.NETWORK_ERROR_WHILE_ONLINE
                  : e || n.Qj.SERVER_ERROR_GENERAL
                : n.Qj.NETWORK_ERROR_WHILE_OFFLINE;
            },
            togglePasswordVisibility() {
              (this.showInputText = !this.showInputText), this.focusInput();
            },
            setError(t) {
              (this.loading = !1), (this.errorMsg = t);
            },
            clearMessages() {
              (this.currentTip = ""), (this.loading = !1), (this.errorMsg = ""), (this.showContinueBtn = !1);
            },
            setLoadingState() {
              (this.showContinueBtn = !1), (this.loading = !0), (this.errorMsg = "");
            },
            setValue() {
              (this[this.activeStep.valueType] = this.inputValue),
                ((this.activeStep.validation && this.activeStep.validation()) || !this.activeStep.validation) &&
                  (this.activeStep.beforeNextStep
                    ? (this.setLoadingState(),
                      Promise.resolve(this.activeStep.beforeNextStep())
                        .then((t) => {
                          this.activeStep.afterSuccess && this.activeStep.afterSuccess(t),
                            (this.activeStep.nextStep || this.nextStep) && this.goToStep(this.activeStep.nextStep || this.nextStep);
                        })
                        .catch(console.error))
                    : (this.activeStep.nextStep || this.nextStep) && this.goToStep(this.activeStep.nextStep || this.nextStep));
            },
            goToStep(t) {
              (this.inputValue = ""),
                (this.overrideButtons = null),
                (this.nextStep = null),
                clearTimeout(this.timeout),
                this.clearMessages(),
                (this.activeStepId = t),
                this.activeStep.valueType &&
                  c.capture(this.activeStep.valueType + "-step show", this.activeStep.eventCase ? { case: this.activeStep.eventCase } : {}),
                this.activeStep.onShow && this.activeStep.onShow();
            },
            handleEsc() {
              this.activeStep.onEsc ? this.activeStep.onEsc() : this.activeStep.prevStep && this.goToStep(this.activeStep.prevStep);
            },
            onInput() {
              clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => {
                  this.showContinueBtn = !0;
                }, 5e3));
            },
            destroy() {
              this.$parent.$el.remove(), this.$parent.$destroy();
            },
            afterLeave() {
              m.appView.render(),
                this.keepAppsHidden || m.widgetManager.showApps({ unlock: !0 }),
                this.onboardingSkipped || m.trigger("onboarding:initiate"),
                "function" == typeof this.afterFadeOutCallback && this.afterFadeOutCallback(),
                this.destroy();
            }
          }
        };
      i(31504);
      const f = (0, i(51900).Z)(v, s, [], !1, null, "721352f6", null).exports;
      i(20144).ZP.directive("focus", {
        inserted: function (t, e) {
          !1 !== e.value && t.focus();
        }
      });
      const M = document.createElement("div");
      document.querySelector(".region.full").appendChild(M), new a.Z({ render: (t) => t(f) }).$mount(M);
      const w = {};
    },
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
    68657: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        ".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const r = o;
    },
    45517: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => r });
      var a = i(8081),
        s = i.n(a),
        n = i(23645),
        o = i.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n/* Putting this here for now before generalizing */\n/* TODO: Remove when generalized; */\n.scrim[data-v-721352f6]:before, .u--scrim[data-v-721352f6]:before { --size: -90px; --h-factor: 1.25; --v-factor: 0.75; position: absolute; top: calc(var(--size) * var(--v-factor)); right: calc(var(--size) * var(--h-factor)); bottom: calc(var(--size) * var(--v-factor)); left: calc(var(--size) * var(--h-factor)); z-index: -1; opacity: 0.3; background: radial-gradient(closest-side, hsl(0, 0%, 0%), hsla(0, 0%, 0%, 0.98032) 13.81%, hsla(0, 0%, 0%, 0.92593) 25.46%, hsla(0, 0%, 0%, 0.84375) 35.31%, hsla(0, 0%, 0%, 0.74074) 43.7%, hsla(0, 0%, 0%, 0.62384) 50.98%, hsla(0, 0%, 0%, 0.5) 57.5%, hsla(0, 0%, 0%, 0.37616) 63.6%, hsla(0, 0%, 0%, 0.25926) 69.63%, hsla(0, 0%, 0%, 0.15625) 75.94%, hsla(0, 0%, 0%, 0.07407) 82.87%, hsla(0, 0%, 0%, 0.01968) 90.78%, hsla(0, 0%, 0%, 0)); content: ''; filter: none; /* filter needed to cancel out existing general filter */\n}\n.fade-fast-enter-active[data-v-721352f6], .fade-fast-leave-active[data-v-721352f6] { transition: opacity 0.25s var(--a-curve);\n}\n.fade-fast-enter[data-v-721352f6], .fade-fast-leave-to[data-v-721352f6] { opacity: 0;\n}\n.intro[data-v-721352f6] { --margin: 20px; height: 100%; display: flex; flex-direction: column; line-height: normal;\n}\n.intro .button[data-v-721352f6] { margin-right: 18px;\n}\n.intro .button[data-v-721352f6]:last-child { margin-right: 0;\n}\n.button .icon[data-v-721352f6] { height: 11px; margin-right: 10px; margin-top: 4px; margin-left: -5px; opacity: 0.7; fill: white;\n}\n.intro-top[data-v-721352f6], .intro-bottom[data-v-721352f6] { padding: var(--margin) 0; flex: 0 0 120px;\n}\n.intro-top[data-v-721352f6] {\n}\n.logo[data-v-721352f6] { --size: 80px; height: var(--size); width: var(--size); border-radius: 100%; box-shadow: 0 0 50px rgba(0,0,0,0.1);\n}\n.intro-middle[data-v-721352f6] { flex: 1; display: flex; flex-direction: column; justify-content: center;\n}\n.intro-middle .u--scrim[data-v-721352f6]:before { opacity: 0.35;\n}\n.intro-middle-wrapper[data-v-721352f6] { max-width: 100%; padding: 0 40px; position: relative; top: -8px; flex-grow: 1; display: flex; flex-direction: column; align-items: center; /* top: vertical center to make up for gap above heading text */\n}\n.above[data-v-721352f6], .below[data-v-721352f6] { flex: 1 1 100%;\n}\n.prompt[data-v-721352f6] { max-width: 100%;\n}\n.question[data-v-721352f6] { padding-bottom: 15px; display: inline-block; line-height: 1.2; white-space: normal;\n}\n.input-wrapper[data-v-721352f6] { --pass-vis-icon-width: 21px; --pass-vis-icon-side-padding: 8px; --pass-vis-width: calc(var(--pass-vis-icon-width) + var(--pass-vis-icon-side-padding)); max-width: 100%; position: relative; align-self: stretch; display: flex; justify-content: space-between; border-bottom: 3px solid #fff; font-weight: 500;\n}\n.input-wrapper.has-text-input[data-v-721352f6] { padding: 0;\n}\n\n\t\t\t\t/*\n\t\t\t\tWhen right and left columns are present (password):\n\t\t\t\t- Right column should never shrink at all or be pushed outside the input.\n\t\t\t\t- Left column should give way to text as soon as text reaches that column so that the text can fill the entire input.\n\t\t\t\t- There should be no extra padding on the left once the input is expanding.\n\t\t\t\t- The bullets or text should not be clipped unless the input is a max width.\n\t\t\t\t- Text should be centred relative to the underline until it reaches the left column.\n\t\t\t \t- Once it expands into the left column should be centred relative to the left and center columns\n\t\t\t\t*/\n.input-left-column[data-v-721352f6] { flex: 0 9999999 var(--pass-vis-width);\n} /* 9999999 ensures this column shrinks immediately */\n.input-center-column[data-v-721352f6] { min-width: 0; position: relative; flex: 1 1 auto; overflow: hidden;\n} /* flex-shrink: 1; min-width: 0; so that this column does not push the right outside of the input */\n.input[data-v-721352f6] { width: 100%; padding: 0; position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: none; caret-color: white; font-weight: 500; line-height: normal; outline: none; text-align: center;\n}\n.Safari input[data-v-721352f6]::-webkit-contacts-auto-fill-button, .Safari input[data-v-721352f6]::-webkit-credentials-auto-fill-button { position: absolute; right: 0; pointer-events: none; visibility: hidden;\n} /* hide key icon & dropdown in password input */\n.input[data-v-721352f6]::-ms-reveal { display: none;\n}\n.hidden-span[data-v-721352f6] { overflow-wrap: normal; visibility: hidden;\n}\n.input-right-column[data-v-721352f6] { padding: 0 0 0 var(--pass-vis-icon-side-padding); flex: 0 0 auto; background: transparent; border: none; cursor: pointer;\n}\n.input-right-column[data-v-721352f6]:focus { outline: none;\n}\n.password-visibility-icon[data-v-721352f6] { width: var(--pass-vis-icon-width);\n}\n.below[data-v-721352f6] { margin-top: 2em; align-self: stretch; font-size: 1rem; /* font-size: reset giant font set on .intro class */\n}\n.below-input-msg[data-v-721352f6] { position: relative; z-index: 2; font-size: 1.1875rem; line-height: 150%; text-align: center; -moz-user-select: text; -webkit-user-select: text; user-select: text; white-space: normal;\n}\n\t\t\t\t\t/* ^ z-index 2 prevents bottom buttons covering the terms & privacy link on mobile */\n.tip[data-v-721352f6] {\n}\n.tip[data-v-721352f6] a, .error-message[data-v-721352f6] a { text-decoration: underline !important; white-space: nowrap;\n}\n.loading-icon[data-v-721352f6] { vertical-align: baseline;\n}\n.continue-button-wrapper[data-v-721352f6] { margin-top: 2em;\n}\n.intro .button.button-continue .icon-next[data-v-721352f6] { margin-right: -5px; margin-left: 10px; transform: rotate(180deg); vertical-align: -5%;\n}\n.intro-bottom[data-v-721352f6] { position: relative; display: flex; align-items: flex-end; justify-content: center;\n}\n.intro-bottom .scrim[data-v-721352f6] { position: absolute; bottom: 0;\n}\n.intro-bottom .scrim[data-v-721352f6]:before { --size: -600px; --h-factor: 1; --v-factor: 0.38;\n}\n@media screen and (max-height: 500px) {\n.intro[data-v-721352f6] { --margin: 1rem;\n}\n.intro-top[data-v-721352f6], .intro-bottom[data-v-721352f6] { flex-basis: auto;\n}\n.logo[data-v-721352f6] { --size: 60px;\n}\n}\n@media screen and (max-width: 450px) {\n.intro[data-v-721352f6] { font-size: 225%;\n}\n.intro-top[data-v-721352f6], .intro-bottom[data-v-721352f6] { padding: var(--page-margin) 0;\n}\n.intro-top[data-v-721352f6] {\n}\n.intro-top .logo[data-v-721352f6] { --size: 50px;\n}\n.intro-middle[data-v-721352f6] {\n}\n.intro-middle[data-v-721352f6]:after {\n}\n.intro-middle-wrapper[data-v-721352f6] { padding: 0 var(--page-margin); top: auto;\n}\n.question[data-v-721352f6], .input[data-v-721352f6] { font-size: 28px;\n}\n.question[data-v-721352f6] { padding-bottom: 10px;\n}\n.below-input-msg[data-v-721352f6] { margin-top: 1rem; font-size: 1rem; line-height: 1.3;\n}\n.below .opt-in[data-v-721352f6] { text-align: left;\n}\n.continue-button-wrapper[data-v-721352f6] { margin-top: 1rem;\n}\n.button-continue[data-v-721352f6] { --h-padding: 20px; --v-padding: 6px;\n}\n.intro-bottom[data-v-721352f6] { padding: var(--page-margin);\n}\n.intro-bottom-wrapper[data-v-721352f6] { width: 100%;\n}\n.intro-buttons[data-v-721352f6] { display: flex; justify-content: space-between;\n}\n.intro-buttons.has-one-button[data-v-721352f6] { justify-content: center;\n}\n.intro-bottom .button[data-v-721352f6] { --h-padding: 6px; --v-padding: 6px; width: 48%; margin-right: 0; align-items: center; justify-content: center;\n}\n.intro-bottom .button .icon[data-v-721352f6] { display: none;\n}\n}\n",
        ""
      ]);
      const r = o;
    },
    36399: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => p });
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
      const l = {
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
        d = () => {
          (0, r.sj)((t, e) => ({ "3872912c": t.resizeDurationMs, "7b63f4cb": t.transitionDurationMs }));
        },
        u = l.setup;
      l.setup = u ? (t, e) => (d(), u(t, e)) : d;
      const c = l;
      i(67135);
      const p = (0, i(51900).Z)(c, a, [], !1, null, "256e142c", null).exports;
    },
    67135: (t, e, i) => {
      var a = i(68657);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("1ea382bd", a, !1, {});
    },
    31504: (t, e, i) => {
      var a = i(45517);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("b2226448", a, !1, { ssrId: !0 });
    },
    86043: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K";
    },
    18089: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTA2LjM0IDUwNi4zNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDgxLjE2MiAzOTUuMDUyTDI4My40NjUgMTk3LjM1NGM5LjkzOS0yMy45NzggMTMuMjQzLTUwLjcyIDkuMzAxLTc2LjQ5OUMyNzUuMTc2IDUuODY5IDEzMi40MTktNDEuMzA5IDUwLjAzIDQyLjc1N2MtNTQuNjk4IDU1LjgxLTU0LjMxNyAxNDUuMjE5IDEuMDI4IDIwMC41NjQgNDIuNDk5IDQyLjQ5OCAxMDQuNTU2IDUyLjE3NCAxNTUuNjUyIDMwLjgxOGwxMTEuMDc3IDExMS4wNzctMTkuNDY3IDE5LjQ2N2MtMTUuMSAxNS4wOTktMTUuMSAzOS42NjggMCA1NC43NjhsMzUuNTM3IDM1LjUzN2MxNS4xMzQgMTUuMTM0IDM5LjYzMiAxNS4xMzcgNTQuNzY4IDBsMTkuNjQyLTE5LjY0MmM5LjY5NyA4LjAxNSAyMS43NjkgMTIuMzc1IDM0LjUxIDEyLjM3NSA0OC43MzcgMCA3Mi4xNjEtNTguODk0IDM4LjM4NS05Mi42Njl6TTE4MC4zNzQgMTcxLjAzM2MtMTUuNzQ4IDE1Ljc0OC00MS4yOCAxNS43NDgtNTcuMDI4IDBzLTE1Ljc0OC00MS4yOCAwLTU3LjAyOCA0MS4yOC0xNS43NDggNTcuMDI4IDAgMTUuNzQ4IDQxLjI4MSAwIDU3LjAyOHoiLz48L3N2Zz4K";
    },
    73555: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbi1za2lwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTEuODA3IDQ5MS44MDciPjxwYXRoIGQ9Ik00ODUuODAyIDIyMS4xODRsLTE4NC4zMi0xODQuMzJhMjAuNTA2IDIwLjUwNiAwIDAgMC0yMi4zMjMtNC40NDRjLTcuNjU5IDMuMTU0LTEyLjYzNiAxMC42NS0xMi42MzYgMTguOTI0djgyLjAwMmMtMTE3Ljg0MiA0LjgzMy0yMjAuNjUxIDg0LjM5OC0yNTMuNTgzIDE5OC40MUMtMS4zMTQgMzgxLjE5NS0uMjA4IDQyMS4zNTYuMjAxIDQzNi40OTFsLjA4MiAzLjk3M2MwIDkuMjE2IDYuMTY0IDE3LjMwNiAxNS4wMzIgMTkuNzQzIDEuODIzLjQ5MiAzLjY0NS43MzcgNS40NDguNzM3YTIwLjUxIDIwLjUxIDAgMCAwIDE3LjU5Mi05Ljk5NGM4MS4xMjEtMTM2LjM1NiAxODguNi0xNDAuMjI3IDIyOC4xNjgtMTM2LjM3NnYxMDUuNDExYzAgOC4yNzQgNC45NzcgMTUuNzcgMTIuNjM2IDE4LjkyNCA3LjY4IDMuMTk1IDE2LjQ2NiAxLjQxMyAyMi4zMjMtNC40NDRsMTg0LjMyLTE4NC4zMmM4LjAwNy04LjAxIDguMDA3LTIwLjk1NCAwLTI4Ljk2MXoiLz48L3N2Zz4K";
    },
    17952: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODcuNTUgNDg3LjU1IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTQ4MS4zMjUgMjI3LjUxNWMtMjI0LjgtMjU4LjYtNDI4LTUzLjktNDc2LjQgMi44LTYuNSA3LjYtNi42IDE4LjgtLjEgMjYuNCAyMjEuOSAyNTkgNDIzLjQgNjQuNiA0NzYuNSAzLjcgOC4zLTkuNCA4LjMtMjMuNCAwLTMyLjl6bS0xNTEuNSAyMy4yYy0zLjMgNDEuNC0zNi44IDc1LTc4LjMgNzguMy01Mi43IDQuMi05Ni4zLTM5LjUtOTIuMS05Mi4xIDMuMy00MS40IDM2LjgtNzUgNzguMy03OC4zIDUyLjYtNC4yIDk2LjIgMzkuNSA5Mi4xIDkyLjF6IiAvPjxwYXRoIGQ9Ik0yNDQuNjI1IDE4OC42MTVjLTMwLjQgMC01NS4yIDI0LjgtNTUuMiA1NS4yIDAgNy4zIDUuOSAxMy4yIDEzLjIgMTMuMnMxMy4yLTUuOSAxMy4yLTEzLjJjMC0xNS45IDEyLjktMjguOCAyOC44LTI4LjggNy4zIDAgMTMuMi01LjkgMTMuMi0xMy4ycy02LTEzLjItMTMuMi0xMy4yeiIgLz48L3N2Zz4K";
    },
    38589: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODcuNTUgNDg3LjU1IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTQ4MS4zMjUgMjI3LjUxNWMtMjcuODE4LTMyLTU1LjMwNS01Ni45LTgyLjIwOS03NS44NjhsLTcxLjU0NyA3MS41NDdhODYuMTk0IDg2LjE5NCAwIDAgMSAyLjI1NiAyNy41MjFjLTMuMyA0MS40LTM2LjggNzUtNzguMyA3OC4zYTg2LjA1MyA4Ni4wNTMgMCAwIDEtMjcuNTU3LTIuMjJsLTUwLjggNTAuOGMxNDkuMTg2IDQ1LjE3OCAyNjkuMDA2LTcyLjI3OSAzMDguMTU2LTExNy4xNzlhMjQuODQ4IDI0Ljg0OCAwIDAgMCAuMDAxLTMyLjkwMXpNNDA5LjM4MiA3OC4xNjhhMTUgMTUgMCAwIDAtMjEuMjEzIDBMMzQ1LjQgMTIwLjk0M0MxNzguODc4IDQ3LjQ5MSA0My4yODQgMTg1LjM3OCA0LjkyNSAyMzAuMzE1YTIwLjMwOSAyMC4zMDkgMCAwIDAtLjEgMjYuNGMzNy4zNjUgNDMuNjEyIDc0LjE0OSA3NC4zNTEgMTA5Ljc0NiA5NS4wNTJsLTM2LjQgMzYuNGExNSAxNSAwIDAgMCAyMS4yMTMgMjEuMjEzbDMxMC0zMTBhMTUgMTUgMCAwIDAtLjAwMi0yMS4yMTJ6TTE1OS40MjUgMjM2LjkxNWMzLjMtNDEuNCAzNi44LTc1IDc4LjMtNzguM0E4NC45NjggODQuOTY4IDAgMCAxIDI5MyAxNzMuMzQzbC0xMTguODcgMTE4Ljg3YTg1LjEyMiA4NS4xMjIgMCAwIDEtMTQuNzA1LTU1LjI5OHoiIC8+PC9zdmc+Cg==";
    }
  }
]);
