(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7032],
  {
    48837: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => s });
      var n = a(8081),
        r = a.n(n),
        o = a(23645),
        i = a.n(o)()(r());
      i.push([
        e.id,
        "iframe[data-v-7a5d9c30]{width:100%;height:100%;border:none}.load-error[data-v-7a5d9c30]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.load-error p[data-v-7a5d9c30]{user-select:text}",
        ""
      ]);
      const s = i;
    },
    40093: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var n = a(8081),
        r = a.n(n),
        o = a(23645),
        i = a.n(o),
        s = a(61667),
        l = a.n(s),
        p = new URL(a(28020), a.b),
        d = i()(r()),
        c = l()(p);
      d.push([
        e.id,
        `.upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 16px;\n\t--input-bg: #f4f7f7;\n\t--input-border-color: #c0cece;\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--color-icon: var(--color-light-text);\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n}\n.upgrade-flow { padding: 3rem; }\n\n:root {\t--body-background-color: transparent; }\n\nbody .container { background: transparent!important; }\n\n\t.modal .upgrade-flow { padding-bottom: 1rem; }\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Poppins, Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; opacity: 0.7; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-right-fade-enter-active.upgrade-flow .back,\n\t\t.slide-right-fade-leave-active.upgrade-flow .back,\n\t\t.slide-left-fade-enter-active.upgrade-flow .back,\n\t\t.slide-left-fade-leave-active.upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--color-icon); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: calc(100% - 2px); opacity: 0; color: var(--color); font-size: 0.75rem; font-weight: 600; pointer-events: none; text-transform: uppercase; /* color: overrides account site */ }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input:not([type=checkbox]), .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); background-color: var(--input-bg); border: none; border-radius: var(--input-border-radius); box-shadow: inset 0 0 0 1px var(--input-border-color); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -moz-appearance: none; -webkit-appearance: none; appearance: none; background-position-x: calc(100% - 6px); -webkit-border-radius: var(--input-border-radius); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:focus:not([type=checkbox]), .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* box-shadow !important needed for account site */ }\n\n\n\n\n\t\t.upgrade-flow .radio { border-radius: 100%; transition: all var(--transition-medium) ease; /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center; opacity: 0; font-size: 14px; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { opacity: 1; color: white; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url(${c}) no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  { }\n`,
        ""
      ]);
      const u = d;
    },
    61667: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return (
          t || (t = {}),
          e
            ? ((e = String(e.__esModule ? e.default : e)),
              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
              t.hash && (e += t.hash),
              /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            : e
        );
      };
    },
    86940: (e, t, a) => {
      var n = a(40093);
      n && n.__esModule && (n = n.default), (e.exports = "string" == typeof n ? n : n.toString());
    },
    47032: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => c });
      var n = function () {
        var e = this,
          t = e._self._c;
        return e.fallbackLinkActive
          ? t(
              "div",
              { staticClass: "load-error" },
              [
                e._t("default", function () {
                  return [
                    e._m(0),
                    e._v(" "),
                    t(
                      "a",
                      {
                        staticClass: "button",
                        attrs: { href: e.fallbackUrl, "data-test": "fallback-button" },
                        on: { click: e.captureFallbackClick }
                      },
                      [e._v("Continue")]
                    )
                  ];
                })
              ],
              2
            )
          : t("iframe", { ref: "iframe", attrs: { src: e.iframeUrl, "data-test-loaded": e.loaded, "data-test": "upgrade" } });
      };
      n._withStripped = !0;
      var r = a(86940),
        o = a.n(r),
        i = a(81405),
        s = a(64438),
        l = a(92729);
      const p = new s.Z("tab.upgrade", 1),
        d = {
          name: "Upgrade",
          props: {
            transitionActive: { type: Boolean, default: !1 },
            isActiveStep: { type: Boolean, default: !1 },
            plans: { type: Object, default: () => ({}) },
            sales: { type: Object, default: () => ({}) },
            iframeInfo: { type: Object, default: () => ({}) },
            version: { type: Number, default: void 0 },
            selectedPlan: { type: String, default: "" },
            trialLength: { type: Number, default: 0 }
          },
          data() {
            return {
              iframeUrl:
                m.globals.urlRootAccount +
                "ext-upgrade" +
                (this.version ? "-v" + this.version : "") +
                "?parentURL=" +
                encodeURI(window.origin),
              email: "",
              loaded: !1,
              fallbackLinkActive: !1
            };
          },
          unreactive: () => ({ mailingLists: [] }),
          computed: {
            planInfo() {
              const e = this.selectedPlan || Object.keys(this.plans).find((e) => this.plans[e].default),
                t = this.plans[e];
              if (!t) return {};
              const a = this.sales && this.sales[e],
                n = { frequency: t.frequency, price: t.friendlyPrice };
              return a && (n.salePrice = a.friendlyPrice), n;
            },
            fallbackUrl() {
              return `${m.globals.urlRootAccount}upgrade?plan=${this.selectedPlan}&email=${encodeURIComponent(this.email)}`;
            },
            selectedPlanId() {
              var e, t;
              return (
                (null === (e = this.sales[this.selectedPlan]) || void 0 === e ? void 0 : e.id) ||
                (null === (t = this.plans[this.selectedPlan]) || void 0 === t ? void 0 : t.id)
              );
            }
          },
          watch: {
            transitionActive(e) {
              this.loaded &&
                this.$refs.iframe.contentWindow &&
                this.$refs.iframe.contentWindow.postMessage({ transitioning: e }, m.globals.urlRootAccount),
                e || this.focusCardElement();
            },
            isActiveStep(e) {
              e
                ? this.$e.$on("modal:interceptSubStepCompletion", this.triggerSubmitFromManager)
                : this.$e.$off("modal:interceptSubStepCompletion", this.triggerSubmitFromManager);
            }
          },
          created() {
            (this.trimmedUrlRootAccount = m.globals.urlRootAccount.slice(0, -1)),
              this.$e.$on("upgradeDataChanged", this.syncUpgradeData),
              window.addEventListener("message", this.onMessage),
              this.syncUpgradeData(),
              setTimeout(() => {
                this.loaded || ((this.fallbackLinkActive = !0), p.error("Upgrade iframe timeout"));
              }, 5e3),
              m.on("dev:upgrade:activateFallback", this.onIframeException);
          },
          destroyed() {
            window.removeEventListener("message", this.onMessage),
              this.$e.$off("upgradeDataChanged", this.syncUpgradeData),
              m.off("dev:upgrade:activateFallback", this.onIframeException);
          },
          methods: {
            onMessage(e) {
              e.origin &&
                e.origin.startsWith(this.trimmedUrlRootAccount) &&
                ("upgrade:submit" === e.data.type
                  ? this.onStripeToken(e.data)
                  : "upgrade:goBack" === e.data.type
                  ? this.$emit("goBack")
                  : "upgrade:loaded" === e.data.type
                  ? this.onIframeLoaded()
                  : "upgrade:error" === e.data.type
                  ? this.onIframeException(e.data)
                  : "upgrade:3DS:response" === e.data.type && this.confirmPayment(e.data.status));
            },
            onStripeToken(e) {
              this.$emit("processing"),
                (this.mailingLists = e.mailingLists),
                this.subscribe(e.result.token.id, "subscribe-existing", this.email, e.name, e.recaptchaResult, e.mailingLists);
            },
            subscribe(e, t, a, n, r, o) {
              const s = { stripe_token: e, plan_id: this.selectedPlanId, action: t, email: a, name: n, recaptcha: r, mailing_lists: o };
              this.trialLength > 0 && (s.trial_length = this.trialLength),
                this.$xhr
                  .post("account/subscriptions", s)
                  .then(({ data: e }) => {
                    m.conditionalFeatures.updateFeatures(e.features),
                      e.subscribedAccount && localStorage.setItem("subscribedAccount", e.subscribedAccount),
                      this.onSubscriptionSuccess();
                  })
                  .catch((e) => {
                    var t, a;
                    if (null !== (t = e.response) && void 0 !== t && null !== (a = t.data) && void 0 !== a && a.clientSecret)
                      return (
                        this.sendMessage({ type: "upgrade:3DS", clientSecret: e.response.data.clientSecret }),
                        void i.ZP.capture("3DS check prompted", { feature: "upgrade" })
                      );
                    const n = e && e.response && e.response.status;
                    (e = (e && e.response && e.response.data && (e.response.data.message || e.response.data.detail)) || !0),
                      this.sendMessage({ type: "upgrade:submitResponse", error: e, status: n }),
                      this.$emit("processingError");
                  });
            },
            syncUpgradeData() {
              const e = localStorage.getObject("upgrade-data"),
                t = null == e ? void 0 : e.plan;
              (this.email = (null == e ? void 0 : e.email) || localStorage.getItem("email")),
                t && ((this.selectedPlan = t), this.loaded && this.notifyIframePlanChange());
            },
            onIframeLoaded() {
              (this.loaded = !0),
                this.sendMessage({ type: "upgrade:loadedResponse", css: o(), planInfo: this.planInfo, iframeInfo: this.iframeInfo });
            },
            onIframeException({ message: e, component: t, info: a }) {
              (this.fallbackLinkActive = !0), p.error("Upgrade iframe error", { message: e, component: t, info: a });
            },
            captureFallbackClick() {
              i.ZP.capture("upgrade fallback click", { feature: "upgrade" });
            },
            triggerSubmitFromManager() {
              this.sendMessage({ type: "upgrade:submitFromManager" });
            },
            focusCardElement() {
              this.sendMessage({ type: "focus" });
            },
            notifyIframePlanChange() {
              this.sendMessage({ planInfo: this.planInfo });
            },
            sendMessage(e) {
              this.$refs.iframe &&
                this.$refs.iframe.contentWindow &&
                this.$refs.iframe.contentWindow.postMessage(e, m.globals.urlRootAccount);
            },
            onSubscriptionSuccess() {
              var e;
              localStorage.removeItem("unregistered"),
                localStorage.getItem("email") ||
                  localStorage.setItem("email", null === (e = localStorage.getObject("upgrade-data")) || void 0 === e ? void 0 : e.email),
                this.$emit("nextStep", !0),
                this.sendMessage({ type: "upgrade:submitResponse", success: !0 });
            },
            async confirmPayment(e) {
              if ("failed" === e)
                this.sendMessage({ type: "upgrade:submitResponse", error: l.Qj.PAYMENT_3DS_ERROR }),
                  this.$emit("processingError"),
                  i.ZP.capture("3DS check unsuccessful", { feature: "upgrade" });
              else {
                try {
                  await this.$xhr.post("/account/subscriptions/confirm", { mailing_lists: this.mailingLists }),
                    i.ZP.capture("3DS check successful", { feature: "upgrade" });
                } catch (e) {
                  this.$e.$emit("flashMessage", { message: l.Qj.PAYMENT_3DS_CONFIRM_ERROR }),
                    console.error(e),
                    i.ZP.capture("subscription confirm failed", { feature: "upgrade" });
                }
                m.syncCoordinator.syncSettings(() => {
                  this.onSubscriptionSuccess();
                });
              }
            }
          }
        };
      a(15055);
      const c = (0, a(51900).Z)(
        d,
        n,
        [
          function () {
            var e = this,
              t = e._self._c;
            return t("p", [e._v("Oops! Looks like something went wrong."), t("br"), e._v("Please continue on our website.")]);
          }
        ],
        !1,
        null,
        "7a5d9c30",
        null
      ).exports;
    },
    15055: (e, t, a) => {
      var n = a(48837);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("59b0dc77", n, !1, {});
    },
    28020: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcG9pbnRlci1ldmVudHM9Im5vbmUiIGRpc3BsYXk9ImJsb2NrIiBmaWxsPSIjNDQ0Ij48cGF0aCBkPSJNMTYuNiA4LjZMMTIgMTMuMiA3LjQgOC42IDYgMTBsNiA2IDYtNnoiLz48L3N2Zz4=";
    }
  }
]);
