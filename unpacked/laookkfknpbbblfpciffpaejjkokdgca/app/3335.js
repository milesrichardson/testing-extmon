(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3335],
  {
    94611: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => p });
      var n = a(8081),
        o = a.n(n),
        r = a(23645),
        i = a.n(r),
        s = a(40093),
        l = i()(o());
      l.i(s.default),
        l.push([
          e.id,
          "\n/* stylelint-disable */\n.choose-plan[data-v-44422550] {\n}\n.plan-list[data-v-44422550] { width: var(--form-width-narrow); margin: 0 auto; display: grid; grid-gap: 10px; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n}\n.plan-list-item[data-v-44422550] { --choose-plan-padding: 14px; padding: var(--choose-plan-padding); flex: 1 0 49%; display: inline-flex; flex-direction: row; align-items: center; background: hsl(0, 0%, 98%); border-radius: var(--border-radius); box-shadow: inset 0 0 0 1px var(--input-border-color); cursor: pointer; outline: none; text-align: left; transition: var(--a-medium);\n}\n.plan-list-item[data-v-44422550]:hover { /*background: hsl(var(--hue-modal), 6%, 92%) linear-gradient(178deg, rgba(255,255,255,0.25), rgba(0,0,0,0.1));*/\n}\n.plan-list-radio-wrapper[data-v-44422550] { display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n.choose-plan .radio[data-v-44422550] { --size: 20px; height: var(--size); width: var(--size); display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.12); box-shadow: none;\n}\n.choose-plan .radio .icon-check[data-v-44422550] { --size: 12px; height: var(--size); width: var(--size); display: none;\n}\n.choose-plan-text-wrapper[data-v-44422550] { margin-left: var(--choose-plan-padding);\n}\n.plan-list-title[data-v-44422550] { margin: -1px 0 3px; display: inline-block; font-size: 1.125rem; font-weight: 500;\n}\n.choose-plan-term .period[data-v-44422550] { margin-right: 6px; margin-bottom: 4px; white-space: nowrap;\n}\n.choose-plan-badge[data-v-44422550] { padding: 3px 5px; display: inline; background: white; border: 1px solid hsla(var(--hue), 60%, 45%, 0.5); border-radius: var(--border-radius); color: var(--color-active); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; vertical-align: 17%; white-space: nowrap;\n}\n.choose-plan-badge[data-v-44422550]:last-child { margin-right: 0;\n}\n.choose-plan-price[data-v-44422550] { opacity: 0.7; font-size: 0.875rem;\n}\n.choose-plan-description[data-v-44422550] { margin-left: 5px; opacity: 0.5; font-size: 0.8125rem;\n}\n.choose-plan .active[data-v-44422550] { opacity: 1 !important; background: hsl(var(--hue-modal), 60%, 95%); box-shadow: inset 0 0 0 2px hsl(var(--hue), 50%, 50%); color: #444 !important; transform: translateY(-1px);\n}\n.choose-plan .active .radio[data-v-44422550] { background: var(--color-active);\n}\n.choose-plan .active .radio .icon-check[data-v-44422550] { display: block; fill: #fff;\n}\n\n\n\t/* Sale updates */\n.has-sale[data-v-44422550] { --sale-color: var(--color-active);\n}\n.has-sale .choose-plan-price-sale[data-v-44422550] { opacity: 1; color: hsl(122, 39%, 49%); font-weight: 500;\n}\n.has-sale .choose-plan-badge[data-v-44422550] { background-color: var(--sale-color); border-color: var(--sale-color); color: white;\n}\n.has-sale .choose-plan-description[data-v-44422550] { margin-top: 3px; margin-left: 0; display: block;\n}\n.has-sale .choose-plan-description .u--strikeout[data-v-44422550] { opacity: 0.7;\n}\n",
          ""
        ]);
      const p = l;
    },
    40093: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => g });
      var n = a(8081),
        o = a.n(n),
        r = a(23645),
        i = a.n(r),
        s = a(61667),
        l = a.n(s),
        p = new URL(a(28020), a.b),
        c = i()(o()),
        d = l()(p);
      c.push([
        e.id,
        ".upgrade-flow {\n\t--hue: 187;\n\t--color: rgb(30,30,30);\n\t--color-active: hsl(var(--hue), 50%, 50%);\n\t--color-warning: hsl(7, 100%, 57%);\n\n\t--form-width: 400px;\n\t--form-width-narrow: 340px;\n\t--input-padding: 12px;\n\t--input-margin-bottom: 16px;\n\t--input-bg: #f4f7f7;\n\t--input-border-color: #c0cece;\n\t--input-border-radius: 3px;\n\t--label-font-size: 0.875rem;\n\n\t--color-icon: var(--color-light-text);\n\t--icon-wrapper-bg: rgba(0,0,0,0.05);\n\n\t--a-fast: all 0.1s ease;\n\t--a-medium: all 0.2s ease;\n}\n.upgrade-flow { padding: 3rem; }\n\n:root {\t--body-background-color: transparent; }\n\nbody .container { background: transparent!important; }\n\n\t.modal .upgrade-flow { padding-bottom: 1rem; }\n\n/* General */\n.u--no-margin-bottom { margin-bottom: 0 !important; }\n\n/* General icon styling from style.css with .upgrade-flow prepended */\n.upgrade-flow .icon-wrapper { padding: 5px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }\n\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 25px; height: var(--icon-wrapper-size); width: var(--icon-wrapper-size); position: absolute; z-index: 0; display: block; border-radius: 50px; content: ''; }\n\t.upgrade-flow .icon-wrapper .icon { opacity: 0.5; }\n\t\t.upgrade-flow .icon-wrapper:hover .icon { opacity: 0.8; }\n\t\t.upgrade-flow .icon-wrapper:hover:active .icon { opacity: 1; }\n/* — */\n\n\t/* Form Header */\n\t.upgrade-flow header { position: relative; }\n\t\t.upgrade-flow header h2 { margin: 0 0 0.4rem; color: var(--color); font-family: Poppins, Futura, sans-serif; font-size: 1.5rem; }\n\t\t.upgrade-flow header .description { margin-bottom: 2rem; opacity: 0.7; font-size: 17px; }\n\n\t.upgrade-flow .back { height: 50px; width: 50px; padding: 0; position: absolute; top: 8px; left: 6px; transition: opacity 0.5s ease; }\n\t/* Account site overrides --\x3e */ .upgrade-flow .back { margin: 0; opacity: 1; }\n\t\t.slide-right-fade-enter-active.upgrade-flow .back,\n\t\t.slide-right-fade-leave-active.upgrade-flow .back,\n\t\t.slide-left-fade-enter-active.upgrade-flow .back,\n\t\t.slide-left-fade-leave-active.upgrade-flow .back { opacity: 0; pointer-events: none; }\n\n\t\t.upgrade-flow .back .icon { height: 13px; margin-left: -1px; fill: var(--color-icon); }\n\t\t.upgrade-flow .back .icon-label { position: absolute; left: calc(100% - 2px); opacity: 0; color: var(--color); font-size: 0.75rem; font-weight: 600; pointer-events: none; text-transform: uppercase; /* color: overrides account site */ }\n\t\t\t.upgrade-flow .back:hover .icon-label { opacity: 0.65; }\n\t\t\t.upgrade-flow .back:hover:active .icon-label { opacity: 0.85; }\n\t\t.upgrade-flow .icon-wrapper:after { --icon-wrapper-size: 33px; }\n\t\t\t.upgrade-flow .icon-wrapper:hover:after { background: var(--icon-wrapper-bg); }\n\n\n\t/* Form Body */\n\t.upgrade-flow .form-body { margin: 0 auto 2.75rem; }\n\n\t\t.upgrade-flow label { margin-bottom: 6px; display: block; opacity: 0.9; color: var(--color); font-size: var(--label-font-size); font-weight: 500; text-align: left; text-transform: unset; }\n\t\t\t.upgrade-flow label .optional { margin-left: 5px; opacity: 0.45; font-size: 0.9375rem; }\n\t\t\t.upgrade-flow .input-group:first-child label { margin-top: -4px; }\n\t\t.upgrade-flow input:not([type=checkbox]), .upgrade-flow select, .upgrade-flow .StripeElement { width: 100%; margin-bottom: var(--input-margin-bottom); padding: var(--input-padding); background-color: var(--input-bg); border: none; border-radius: var(--input-border-radius); box-shadow: inset 0 0 0 1px var(--input-border-color); color: rgb(30,30,30); font-size: 17px; outline: none; transition: background 0.1s ease, box-shadow 0s ease; } /* <-- .input needed for stripe card input */\n\t\t.upgrade-flow select { margin-right: 8px; margin-bottom: 0; padding-right: 30px !important; -moz-appearance: none; -webkit-appearance: none; appearance: none; background-position-x: calc(100% - 6px); -webkit-border-radius: var(--input-border-radius); }\n\t\t\t.Firefox .upgrade-flow select { padding-top: 13px; padding-bottom: 13px; color: rgba(0,0,0,0); text-shadow: 0 0 0 #000; }\n\n\t\t\t.upgrade-flow input:focus:not([type=checkbox]), .upgrade-flow select:focus, .upgrade-flow .radio:focus, .upgrade-flow .StripeElement--focus { --input-border-color: hsl(var(--hue), 47%, 50%) !important; box-shadow: inset 0 0 0 2px var(--input-border-color) !important; /* box-shadow !important needed for account site */ }\n\n\n\n\n\t\t.upgrade-flow .radio { border-radius: 100%; transition: all var(--transition-medium) ease; /*height: 22px; width: 22px; margin: 0; padding: 0; display: inline-block; position: relative; background: hsla(var(--hue), 1%, 93%, 0.4);*/ }\n\t\t\t.upgrade-flow .active .radio { background: var(--color-active); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.075); }\n\n\t\t\t.upgrade-flow .radio-icon { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center; opacity: 0; font-size: 14px; transition: all var(--transition-medium) ease; }\n\t\t\t\t.upgrade-flow .active .radio-icon { opacity: 1; color: white; }\n\n\t\t/* Select helpers for custom dropdown icon */\n\t\t.upgrade-flow .select-wrapper { margin-bottom: 1.25rem; margin-right: 0; position: relative; display: inline-block; }\n\t\t\t.upgrade-flow .select-wrapper:before { height: 100%; width: 20px; position: absolute; top: 0; right: 5px; z-index: 1; opacity: 0.8; background: url(" +
          d +
          ") no-repeat 50% 50%; background-size: 20px; content: ''; pointer-events: none; }\n\n\t\t/* Error states */\n\t\t.upgrade-flow .error > input, .upgrade-flow .error > select, .upgrade-flow .error > textarea { box-shadow: inset 0 0 0 2px var(--color-warning) !important; }\n\n\t\t/* Helper message below input */\n\t\t.upgrade-flow .input-message { margin: 5px 0 0; color: hsl(0, 0%, 46%); font-size: 13px; text-align: left; }\n\n\n\t/* Form Footer */\n\n\t.upgrade-flow form footer { /* margin-top: 34px;*/ }\n\n\t\t.upgrade-flow .form-message { margin: -18px 0 20px; color: rgba(0,0,0,0.7); font-size: var(--label-font-size); font-weight: 500; }\n\t\t\t.upgrade-flow .form-message.error, .upgrade-flow .form-message.warning { color: var(--color-form-warning); }\n\n\t\t\t.upgrade-flow .form-message-label { justify-content: center; } /* Override for Account site */\n\t\t\t.upgrade-flow .form-message-label img { margin-bottom: -3px; margin-right: 7px; } /* Override for Account site */\n\n\t\t.upgrade-flow .button { width: auto; min-width: 240px; padding: 13px 34px; background: hsl(var(--hue), 48%, 58%); box-shadow: 0 0px 12px hsla(var(--hue), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0); font-family: var(--font-san-fran); font-size: 1rem; font-weight: 500; letter-spacing: 0.3px; line-height: normal; transition: var(--a-fast); }\n\t\t\t.upgrade-flow .button:hover { opacity: 1; background: hsl(var(--hue), 53%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09); }\n\t\t\t.upgrade-flow .button:hover:active { opacity: 1; background: hsla(var(--hue), 59%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease; }\n\n\t\t.upgrade-flow .thank-you { margin: 18px 0 0; padding: 0; opacity: 0.6; font-size: 12px; line-height: 1.5; text-align: left; }\n\n\n/* Responsive */\n\n.u--fullscreen-hide { display: none; }\n\n@media handheld and (max-width: 959px), screen and (max-device-width: 959px), screen and (max-width: 959px)  {\n\t.u--fullscreen-only { display: none; }\n\t.u--fullscreen-hide { display: inline; }\n}\n\n@media handheld and (max-width: 740px), screen and (max-device-width: 740px), screen and (max-width: 740px)  { }\n",
        ""
      ]);
      const g = c;
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
    93335: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => i });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t("section", { staticClass: "upgrade-flow choose-plan", attrs: { "data-test": "choose-plan" } }, [
          e.showBack
            ? t(
                "div",
                { staticClass: "back icon-wrapper", attrs: { "data-test": "back" }, on: { click: e.goBack } },
                [
                  t("inline-svg", { staticClass: "icon icon-back", attrs: { src: a(86043) } }),
                  e._v(" "),
                  t("span", { staticClass: "icon-label" }, [e._v("Email")])
                ],
                1
              )
            : e._e(),
          e._v(" "),
          e._m(0),
          e._v(" "),
          t("div", { staticClass: "form-body" }, [
            t(
              "ul",
              { staticClass: "plan-list" },
              e._l(e.plans, function (n, o) {
                return t(
                  "li",
                  {
                    key: o,
                    staticClass: "plan-list-item",
                    class: { active: e.selectedPlanKey === o, "has-sale": e.getSale(o) },
                    attrs: { tabindex: "0", "data-test": n.frequency.toLowerCase() + "-plan" },
                    on: {
                      click: function (t) {
                        e.selectedPlanKey = o;
                      }
                    }
                  },
                  [
                    t("div", { staticClass: "plan-list-radio-wrapper" }, [
                      t("i", { staticClass: "radio" }, [t("inline-svg", { staticClass: "icon-check", attrs: { src: a(32913) } })], 1)
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "choose-plan-text-wrapper" }, [
                      t("div", { staticClass: "choose-plan-term" }, [
                        t("span", { staticClass: "period" }, [e._v(e._s(n.overrideName || `Billed ${n.frequency}`))]),
                        e._v(" "),
                        e.getSale(o)
                          ? t("span", { staticClass: "choose-plan-badge" }, [e._v(e._s(e.getSale(o).badgeText))])
                          : n.badgeText
                          ? t("span", { staticClass: "choose-plan-badge" }, [e._v(e._s(n.badgeText))])
                          : e._e()
                      ]),
                      e._v(" "),
                      t("span", { staticClass: "choose-plan-price", class: { "u--strikeout": e.getSale(o) } }, [
                        e._v("$" + e._s(n.friendlyPrice) + "/" + e._s(n.interval))
                      ]),
                      e._v(" "),
                      e.getSale(o)
                        ? t("span", { staticClass: "choose-plan-price choose-plan-price-sale" }, [
                            e._v(" $" + e._s(e.getSale(o).friendlyPrice) + "/" + e._s(n.interval))
                          ])
                        : e._e(),
                      e._v(" "),
                      n.friendlyMonthlyPrice
                        ? t("span", { staticClass: "choose-plan-description" }, [
                            t("span", [e._v("Equal to ")]),
                            e._v(" "),
                            t("span", { staticClass: "monthly-price", class: { "u--strikeout": e.getSale(o) } }, [
                              e._v("$" + e._s(n.friendlyMonthlyPrice))
                            ]),
                            e._v(" "),
                            e.getSale(o)
                              ? t("span", { staticClass: "monthly-price" }, [e._v(" $" + e._s(e.getSale(o).friendlyMonthlyPrice))])
                              : e._e(),
                            t("span", [e._v("/month")])
                          ])
                        : e._e()
                    ])
                  ]
                );
              }),
              0
            )
          ])
        ]);
      };
      n._withStripped = !0;
      var o = a(81405);
      const r = {
        name: "ChoosePlan",
        props: {
          showBack: { type: Boolean, default: !0 },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) }
        },
        data: () => ({ selectedPlanKey: "" }),
        watch: {
          plans: {
            handler() {
              const e = localStorage.getObject("upgrade-data") || {};
              e.plan ? (this.selectedPlanKey = e.plan) : this.selectDefaultPlan();
            },
            immediate: !0
          },
          selectedPlanKey(e) {
            o.ZP.capture("plan select", { feature: "upgrade", term: e });
          }
        },
        created() {
          this.$e.$on("modal:interceptSubStepCompletion", this.savePlan);
        },
        destroyed() {
          this.$e.$off("modal:interceptSubStepCompletion", this.savePlan);
        },
        methods: {
          savePlan() {
            let e = localStorage.getObject("upgrade-data") || {};
            (e.plan = this.selectedPlanKey),
              localStorage.setObject("upgrade-data", e),
              this.$e.$emit("upgradeDataChanged"),
              this.$e.$emit("modal:subStepCompletionIntercepted");
          },
          goBack() {
            this.$emit("goBack");
          },
          selectDefaultPlan() {
            const e = Object.keys(this.plans).find((e) => this.plans[e].default);
            e && (this.selectedPlanKey = e), this.savePlan();
          },
          getSale(e) {
            return this.sales[e];
          }
        }
      };
      a(33602);
      const i = (0, a(51900).Z)(
        r,
        n,
        [
          function () {
            var e = this,
              t = e._self._c;
            return t("header", [
              t("h2", [e._v("Choose a Plan")]),
              e._v(" "),
              t("div", { staticClass: "description" }, [e._v("Upgrade to Plus")])
            ]);
          }
        ],
        !1,
        null,
        "44422550",
        null
      ).exports;
    },
    33602: (e, t, a) => {
      var n = a(94611);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("dfb8a08e", n, !1, { ssrId: !0 });
    },
    86043: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K";
    },
    32913: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS43MDEgNDUuNyI+PHBhdGggZD0iTTIwLjY4NyAzOC4zMzJhNS4zMDggNS4zMDggMCAwMS03LjUwNSAwTDEuNTU0IDI2LjcwNEE1LjMwNiA1LjMwNiAwIDExOS4wNTkgMTkuMmw2LjkyOCA2LjkyN2ExLjM0NCAxLjM0NCAwIDAwMS44OTYgMEwzNi42NDIgNy4zNjhhNS4zMDggNS4zMDggMCAwMTcuNTA1IDcuNTA0bC0yMy40NiAyMy40NnoiIC8+PC9zdmc+Cg==";
    },
    28020: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgcG9pbnRlci1ldmVudHM9Im5vbmUiIGRpc3BsYXk9ImJsb2NrIiBmaWxsPSIjNDQ0Ij48cGF0aCBkPSJNMTYuNiA4LjZMMTIgMTMuMiA3LjQgOC42IDYgMTBsNiA2IDYtNnoiLz48L3N2Zz4=";
    }
  }
]);
