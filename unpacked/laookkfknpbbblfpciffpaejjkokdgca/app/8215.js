(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8215],
  {
    8552: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => o });
      const o = {
        inserted: function (t, e) {
          var a;
          if (!1 === (null == e ? void 0 : e.value)) return;
          const o = null == t || null === (a = t.value) || void 0 === a ? void 0 : a.length;
          t.select(), (o || 0 === o) && (t.setSelectionRange(o, o), (t.scrollLeft = t.scrollWidth));
        }
      };
    },
    91299: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => p });
      var o = a(8081),
        r = a.n(o),
        n = a(23645),
        i = a.n(n),
        s = a(40093),
        l = i()(r());
      l.i(s.default),
        l.push([
          t.id,
          "\n/* stylelint-disable */\n.form-body[data-v-4134b09f] { margin-bottom: 0;\n}\n.input-row[data-v-4134b09f] { width: var(--form-width-narrow); margin: 0 auto;\n}\n.label-wrapper[data-v-4134b09f] { display: flex;\n}\n.external-upgrade[data-v-4134b09f] { margin-left: 10px; color: hsl(var(--hue-modal), 48%, 58%); font-size: var(--label-font-size); text-decoration: underline;\n}\n.input[data-v-4134b09f] { transition: opacity 0.2s ease;\n}\n.disabled.input[data-v-4134b09f] { opacity: 0.5;\n}\n.form-message[data-v-4134b09f] { margin: 0;\n}\n.form-message[data-v-4134b09f] a { color: hsl(var(--hue-modal), 58%, 60%);\n}\n@media screen and (max-width: 450px) {\n.choose-email .input-row[data-v-4134b09f] { width: auto;\n}\n}\n\n",
          ""
        ]);
      const p = l;
    },
    40093: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => u });
      var o = a(8081),
        r = a.n(o),
        n = a(23645),
        i = a.n(n),
        s = a(61667),
        l = a.n(s),
        p = new URL(a(28020), a.b),
        d = i()(r()),
        c = l()(p);
      d.push([
        t.id,
        ".upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 16px;\n\t--input-bg: #f4f7f7;\n\t--input-border-color: #c0cece;\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--color-icon: var(--color-light-text);\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n}\n.upgrade-flow { padding: 3rem; }\n\n:root {\t--body-background-color: transparent; }\n\nbody .container { background: transparent!important; }\n\n\t.modal .upgrade-flow { padding-bottom: 1rem; }\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Poppins, Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; opacity: 0.7; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-right-fade-enter-active.upgrade-flow .back,\n\t\t.slide-right-fade-leave-active.upgrade-flow .back,\n\t\t.slide-left-fade-enter-active.upgrade-flow .back,\n\t\t.slide-left-fade-leave-active.upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--color-icon); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: calc(100% - 2px); opacity: 0; color: var(--color); font-size: 0.75rem; font-weight: 600; pointer-events: none; text-transform: uppercase; /* color: overrides account site */ }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input:not([type=checkbox]), .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); background-color: var(--input-bg); border: none; border-radius: var(--input-border-radius); box-shadow: inset 0 0 0 1px var(--input-border-color); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -moz-appearance: none; -webkit-appearance: none; appearance: none; background-position-x: calc(100% - 6px); -webkit-border-radius: var(--input-border-radius); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:focus:not([type=checkbox]), .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* box-shadow !important needed for account site */ }\n\n\n\n\n\t\t.upgrade-flow .radio { border-radius: 100%; transition: all var(--transition-medium) ease; /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center; opacity: 0; font-size: 14px; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { opacity: 1; color: white; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url(" +
          c +
          ") no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  { }\n",
        ""
      ]);
      const u = d;
    },
    61667: (t) => {
      "use strict";
      t.exports = function (t, e) {
        return (
          e || (e = {}),
          t
            ? ((t = String(t.__esModule ? t.default : t)),
              /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
              e.hash && (t += e.hash),
              /["'() \t\n]|(%20)/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
            : t
        );
      };
    },
    82537: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => l });
      var o = function () {
        var t = this,
          e = t._self._c;
        return e("section", { staticClass: "upgrade-flow choose-email", attrs: { "data-test": "email" } }, [
          e(
            "header",
            [
              e("transition", { attrs: { name: "fade", mode: "out-in" } }, [e("h2", { key: t.title }, [t._v(t._s(t.title))])]),
              t._v(" "),
              e("div", { staticClass: "description" }, [t._v("Upgrade to Plus")])
            ],
            1
          ),
          t._v(" "),
          e(
            "div",
            { staticClass: "form-body" },
            [
              e("div", { staticClass: "input-row email-row", class: { error: t.error && "email" === t.error.field } }, [
                e("div", { staticClass: "label-wrapper" }, [
                  e("label", [t._v("Email")]),
                  t.isLoggedIn()
                    ? e(
                        "a",
                        {
                          staticClass: "external-upgrade",
                          attrs: { "data-test": "change-email", href: t.$options.externalUpgradeUrl },
                          on: { click: t.captureAccountSwitchClickEvent }
                        },
                        [t._v("Change")]
                      )
                    : t._e()
                ]),
                t._v(" "),
                e("input", {
                  directives: [{ name: "model", rawName: "v-model.trim", value: t.email, expression: "email", modifiers: { trim: !0 } }],
                  ref: "email",
                  staticClass: "input form-field input",
                  class: { disabled: t.disableEmailInput },
                  attrs: { disabled: t.disableEmailInput, "data-test": "email-input", name: "email", type: "email", required: "" },
                  domProps: { value: t.email },
                  on: {
                    focus: t.onEmailFocus,
                    blur: [
                      t.onEmailBlur,
                      function (e) {
                        return t.$forceUpdate();
                      }
                    ],
                    keyup: function (e) {
                      return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                        ? null
                        : t.onEnter.apply(null, arguments);
                    },
                    input: function (e) {
                      e.target.composing || (t.email = e.target.value.trim());
                    }
                  }
                })
              ]),
              t._v(" "),
              e("transition", { attrs: { name: "fade" } }, [
                t.showPasswordInput
                  ? e("div", { staticClass: "input-row password-row", class: { error: t.error && "password" === t.error.field } }, [
                      e("label", [t._v("Password")]),
                      t._v(" "),
                      e("input", {
                        directives: [
                          { name: "model", rawName: "v-model", value: t.password, expression: "password" },
                          { name: "soft-focus", rawName: "v-soft-focus" }
                        ],
                        ref: "password",
                        staticClass: "input form-field password",
                        class: { disabled: t.disablePasswordInput },
                        attrs: { disabled: t.disablePasswordInput || t.processing, name: "password", type: "password" },
                        domProps: { value: t.password },
                        on: {
                          keyup: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                              ? null
                              : t.onEnter.apply(null, arguments);
                          },
                          input: function (e) {
                            e.target.composing || (t.password = e.target.value);
                          }
                        }
                      })
                    ])
                  : t._e()
              ]),
              t._v(" "),
              e("footer", [
                t.error
                  ? e("div", {
                      staticClass: "form-message error",
                      attrs: { "data-test": "form-error" },
                      domProps: { innerHTML: t._s(t.error.message) }
                    })
                  : t._e()
              ])
            ],
            1
          )
        ]);
      };
      o._withStripped = !0;
      var r = a(8552),
        n = a(92729),
        i = a(81405);
      const s = {
        name: "Email",
        externalUpgradeUrl: m.globals.urlRootAccount + "upgrade",
        directives: { SoftFocus: r.Z },
        props: { processing: { type: Boolean, default: !1 } },
        data: () => ({
          email: localStorage.getItem("email") || "",
          password: "",
          accountExists: null,
          showPasswordInput: !1,
          disablePasswordInput: !1,
          error: null
        }),
        computed: {
          disableEmailInput() {
            return this.isLoggedIn() || this.processing;
          },
          title() {
            return this.showPasswordInput
              ? (this.accountExists ? "Enter your" : "Choose a") + " password"
              : (this.isLoggedIn() ? "Confirm" : "Enter") + " your email";
          }
        },
        created() {
          this.$e.$on("modal:interceptSubStepCompletion", this.validateForm);
        },
        mounted() {
          this.isLoggedIn() || this.$refs.email.focus();
        },
        destroyed() {
          this.$e.$off("modal:interceptSubStepCompletion", this.validateForm);
        },
        methods: {
          validateForm() {
            this.processing ||
              ((this.error = null),
              this.email
                ? m.utils.validateEmail(this.email)
                  ? !this.isLoggedIn() && m.utils.useAppleAppPayment()
                    ? !this.showPasswordInput || this.disablePasswordInput
                      ? this.checkEmail()
                      : this.password
                      ? this.password.length < 6
                        ? this.setError(n.Qj.PASSWORD_INVALID, "password")
                        : (this.$emit("update:processing", !0),
                          this[this.accountExists ? "login" : "register"](this.email, this.password)
                            .then((t) => {
                              m.utils.handleAuthResponse(t), localStorage.setItem("openAppleUpgradeOnLoad", !0), location.reload();
                            })
                            .catch((t) => {
                              "string" == typeof t &&
                                (t += ' <a target="_blank" href="https://momentumdash.com/contact">Contact us</a> if you need help.'),
                                this.setError(t);
                            })
                            .finally(() => this.$emit("update:processing", !1)))
                      : this.setError(n.Qj.PASSWORD_EMPTY, "password")
                    : (this.saveEmail(), this.$e.$emit("modal:subStepCompletionIntercepted"))
                  : this.setError(n.Qj.EMAIL_INVALID_SHORT, "email")
                : this.setError(n.Qj.EMAIL_EMPTY, "email"));
          },
          register(t, e) {
            const a = m.models.customization.get("displayname");
            return this.$xhr(m.globals.urlRootLogin + "user/register", {
              method: "post",
              data: { name: a, email: t, password: e, version: m.globals.version }
            })
              .then((t) => t.data)
              .catch((t) => {
                throw (console.error(t), n.Qj.SERVER_ERROR_GENERAL);
              });
          },
          login(t, e) {
            return this.$xhr(m.globals.urlRootLogin + "user/authenticate", { method: "post", data: { username: t, password: e } })
              .then((t) => {
                const e = t.data;
                let a = e.features && JSON.parse(atob(e.features));
                if (a.includes("plus") || a.includes("team")) throw "This account already has an active subscription.";
                return t.data;
              })
              .catch((t) => {
                if ("string" == typeof t) throw t;
                if (400 === t.response.status || 401 === t.status) throw n.Qj.PASSWORD_INCORRECT_SHORT;
                throw 429 === t.response.status ? n.Qj.TOO_MANY_ATTEMPTS : (console.error(t), n.Qj.SERVER_ERROR_GENERAL);
              });
          },
          checkEmail() {
            return (
              this.$emit("update:processing", !0),
              this.$xhr
                .get("user-search?email=" + encodeURIComponent(this.email))
                .then(() => (this.accountExists = !0))
                .catch(() => (this.accountExists = !1))
                .finally(() => {
                  (this.showPasswordInput = !0),
                    (this.disablePasswordInput = !1),
                    this.$emit("update:processing", !1),
                    this.$nextTick(() => {
                      var t;
                      return null === (t = this.$refs.password) || void 0 === t ? void 0 : t.focus();
                    });
                })
            );
          },
          onEmailFocus() {
            m.utils.useAppleAppPayment() && (this.disablePasswordInput = !0);
          },
          onEmailBlur() {
            this.isLoggedIn() ||
              !m.utils.useAppleAppPayment() ||
              (!this.disablePasswordInput && this.showPasswordInput) ||
              this.validateForm();
          },
          setError(t, e = "general") {
            this.error = { message: t, field: e };
          },
          saveEmail() {
            let t = localStorage.getObject("upgrade-data") || {};
            (t.email = this.email), localStorage.setObject("upgrade-data", t);
          },
          onEnter() {
            this.$emit("nextStep");
          },
          captureAccountSwitchClickEvent() {
            i.ZP.capture("account switch click", { feature: "upgrade" });
          },
          isLoggedIn: () => m.isLoggedIn()
        }
      };
      a(87634);
      const l = (0, a(51900).Z)(s, o, [], !1, null, "4134b09f", null).exports;
    },
    87634: (t, e, a) => {
      var o = a(91299);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals),
        (0, a(45346).Z)("f7527600", o, !1, { ssrId: !0 });
    },
    28020: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcG9pbnRlci1ldmVudHM9Im5vbmUiIGRpc3BsYXk9ImJsb2NrIiBmaWxsPSIjNDQ0Ij48cGF0aCBkPSJNMTYuNiA4LjZMMTIgMTMuMiA3LjQgOC42IDYgMTBsNiA2IDYtNnoiLz48L3N2Zz4=";
    }
  }
]);
