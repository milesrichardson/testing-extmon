(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [5962],
  {
    40063: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => i });
      let n = {};
      const i = {
        bind: function (e, t) {
          let a, i;
          (e.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const s = (e) => {
              (i = !1), ((e) => e && e.clientX > window.innerWidth)(e) ? (i = !0) : (a = e.target);
            },
            d = (n) => {
              i ||
                ((t.modifiers.bubble ||
                  (!e.contains(a) &&
                    !e.contains(n.target) &&
                    e !== a &&
                    e !== n.target &&
                    "true" !== e.dataset.justBoundClickOutsideHandler)) &&
                  t.value(n));
            };
          (e.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (e.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (n[e.dataset.clickOutsideMouseupHandlerId] = d),
            (n[e.dataset.clickOutsideMousedownHandlerId] = s),
            document.addEventListener("mouseup", d),
            document.addEventListener("mousedown", s);
        },
        unbind: function (e) {
          var t, a;
          null !== (t = e.dataset) &&
            void 0 !== t &&
            t.clickOutsideMouseupHandlerId &&
            null !== (a = e.dataset) &&
            void 0 !== a &&
            a.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", n[e.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", n[e.dataset.clickOutsideMousedownHandlerId]),
            delete n[e.dataset.clickOutsideMouseupHandlerId],
            delete n[e.dataset.clickOutsideMousedownHandlerId],
            delete e.dataset.clickOutsideMouseupHandlerId,
            delete e.dataset.clickOutsideMousedownHandlerId,
            delete e.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    9077: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var n = a(8081),
        i = a.n(n),
        s = a(23645),
        d = a.n(s)()(i());
      d.push([
        e.id,
        '\n/* stylelint-disable */\n.sale[data-v-26672d34] { --h-padding: 10px; --v-padding: 0; --top-banner-height: 44px; --sale-hue: 187; --gradient-factor: 10; height: var(--top-banner-height); width: var(--banner-width); padding: var(--v-padding) var(--h-padding); position: relative; top: 0; z-index: 100; display: flex; align-items: center; justify-content: center; background: linear-gradient(141deg, hsla(calc(var(--sale-hue) - var(--gradient-factor)) 59% 44% / 1), hsla(calc(var(--sale-hue) + var(--gradient-factor)) 59% 44% / 1)); color: #fff; font-size: 1rem; user-select: none;\n}\n.text[data-v-26672d34] { display: flex; align-items: center;\n}\n.description[data-v-26672d34] { font-weight: 700; white-space: nowrap;\n}\n.divider[data-v-26672d34] { margin: 0 6px;\n}\n.countdown[data-v-26672d34] { padding: 0px 21px; opacity: 0.8; font-family: ui-monospace, Menlo, Monaco, "Courier New", monospace; font-size: 0.8125rem; font-weight: 700; text-transform: uppercase;\n}\n.back-container[data-v-26672d34], .close-container[data-v-26672d34] { position: absolute; top: 0; bottom: 0; display: flex; align-items: center; justify-content: flex-end;\n}\n.icon-back[data-v-26672d34], .icon-close[data-v-26672d34] { fill: #fff;\n}\n.back-container[data-v-26672d34] { padding-left: var(--h-padding); left: 0;\n}\n.close-container[data-v-26672d34] { padding-right: var(--h-padding); right: 0;\n}\n@media screen and (max-width: 450px) {\n.sale[data-v-26672d34] { font-size: 0.8re;\n}\n.countdown[data-v-26672d34] { font-size: 0.65rem;\n}\n}\n\n',
        ""
      ]);
      const o = d;
    },
    13821: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var n = a(8081),
        i = a.n(n),
        s = a(23645),
        d = a.n(s)()(i());
      d.push([
        e.id,
        "\n/* stylelint-disable */\n.slide-fade-enter-active[data-v-8fea4e86], .slide-fade-leave-active[data-v-8fea4e86] { transition: opacity 1s var(--a-curve), transform 1s var(--a-curve);\n}\n.slide-fade-enter[data-v-8fea4e86], .slide-fade-leave-to[data-v-8fea4e86] { opacity: 0; transform: translateY(-100px);\n}\n.app-container[data-v-8fea4e86] { --app-padding: 20px; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; display: flex; align-items: center; background: rgba(0,0,0,0.5);\n}\n.app[data-v-8fea4e86] { width: 800px; padding: 0; position: relative; display: flex; flex-direction: column; background: #fff; color: #222; overflow: visible; transform: none;\n}\n.header[data-v-8fea4e86] { --header-height: 54px; margin: 0; flex: 0 0 auto; display: grid; grid-template-columns: 1fr max-content 1fr;\n}\n.header .icon-wrapper[data-v-8fea4e86] { height: 100%; width: var(--header-height); padding: 0; display: flex; align-items: center;\n}\n.header .icon-wrapper[data-v-8fea4e86]:after { --icon-wrapper-size: 33px;\n}\n.header .icon-wrapper[data-v-8fea4e86]:hover:after { background: var(--icon-wrapper-bg);\n}\n.header .icon[data-v-8fea4e86] { fill: #333;\n}\n.header-left[data-v-8fea4e86] { display: flex;\n}\n.header .back .icon[data-v-8fea4e86] { height: 12px; margin-left: -1px;\n}\n.header-title[data-v-8fea4e86] { display: flex; align-items: center; color: hsla(var(--hue-modal) 50% 50%); font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.15ch; text-align: center; text-transform: uppercase;\n}\n.header-right[data-v-8fea4e86] { height: 100%; display: flex; justify-content: flex-end; text-align: right;\n}\n.header .hide[data-v-8fea4e86] {\n}\n.header .hide .icon[data-v-8fea4e86] { height: 11px; width: 11px;\n}\n.body[data-v-8fea4e86] { min-height: 0; flex: 1 1 auto; display: flex; flex-direction: column; overflow: auto;\n}\n.body-header[data-v-8fea4e86] { margin: 0 10px 24px; text-align: center;\n}\n.title[data-v-8fea4e86] { font-family: Poppins, Futura, sans-serif; font-size: 1.75rem; font-weight: 800;\n}\n.description[data-v-8fea4e86] { margin-top: 5px; color: var(--color-stop-6); font-size: 1.0625rem;\n}\n.body[data-v-8fea4e86] .content { padding: 0 10px; display: flex; align-items: center; justify-content: space-evenly;\n}\n[data-v-8fea4e86] .demo { min-height: 300px; width: 370px; display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n[data-v-8fea4e86] .demo img,[data-v-8fea4e86] .demo video { max-height: 85%; max-width: 100%; border-radius: var(--border-radius); box-shadow: 0 8px 18px hsl(0deg 0% 20% / 24%);\n}\n[data-v-8fea4e86] .fun-fact { margin: 1rem 0.5rem 0 1rem; color: var(--color-stop-5); font-size: 0.8125rem; font-style: italic; line-height: 135%;\n}\n[data-v-8fea4e86] .features { min-height: 310px; margin: 0 1rem; display: flex; flex-direction: column; justify-content: center;\n}\n[data-v-8fea4e86] .features li { --margin-left: 38px; --angle: 0; --angle-factor: 50; --color: hsl(calc(var(--hue-modal) + var(--angle)), 45%, 53%); width: 27ch; margin-bottom: 22px;\n}\n[data-v-8fea4e86] .features li:last-child { margin-bottom: 0;\n}\n[data-v-8fea4e86] .features li:nth-child(1) { --angle: calc(var(--angle-factor) * -1);\n}\n[data-v-8fea4e86] .features li:nth-child(2) {\n}\n[data-v-8fea4e86] .features li:nth-child(3) { --angle: var(--angle-factor);\n}\n[data-v-8fea4e86] .feature-icon { --size: 25px; height: var(--size); width: var(--size); position: relative; top: -1px; fill: var(--color); float: left;\n}\n[data-v-8fea4e86] .feature-title { margin-bottom: 4px; margin-left: var(--margin-left); font-size: 16px; font-weight: 700; line-height: 1.25; /* color: var(--color); */\n}\n[data-v-8fea4e86] .feature-desc { margin-left: var(--margin-left); opacity: 0.85; font-size: 14px; line-height: 1.4;\n}\n.footer[data-v-8fea4e86] { padding: 1.62rem 0 var(--app-padding); flex: 0; display: flex; flex-direction: column; align-items: center;\n}\n\n\t\t\t/* Converge button styling with onboarding styling */\n.footer .button[data-v-8fea4e86] { min-width: 150px; margin-bottom: 7px; padding: 10px 31px 10px 21px; display: inline-flex; align-items: center; gap: 8px; background: hsl(var(--hue-modal), 48%, 58%) !important; box-sizing: border-box; font-size: 0.875rem; font-weight: 600; text-align: center; transition: all 0.1s ease; /* box-shadow: 0 0px 12px hsla(var(--hue-modal), 48%, 58%, 0), 0 2px 4px rgba(0,0,0,0.09); */\n}\n.footer .button .icon[data-v-8fea4e86] { fill: currentColor;\n}\n.footer .button[data-v-8fea4e86]:hover { background: hsl(var(--hue-modal), 58%, 60%) !important; box-shadow: 0 3px 12px hsla(var(--hue-modal), 54%, 63%, 0.2), 0 2px 4px rgba(0,0,0,0.09);\n}\n.footer .button[data-v-8fea4e86]:hover:active { background: hsla(var(--hue-modal), 63%, 64%, 1) !important; transform: translateY(1px); transition: all 0s ease;\n}\n.footer .button-desc[data-v-8fea4e86] { color: var(--color-stop-5); font-size: 0.8125rem;\n}\n.footer .button-desc .strike[data-v-8fea4e86] { opacity: var(--opacity-stop-5);\n}\n@media screen and (max-width: 450px) {\n.header[data-v-8fea4e86] { --header-height: 50px;\n}\n.description[data-v-8fea4e86] { margin-top: 0; line-height: 1.2;\n}\n.body[data-v-8fea4e86] { padding-bottom: 20px;\n}\n.body-header[data-v-8fea4e86] { margin-bottom: 15px;\n}\n.description[data-v-8fea4e86] { padding: 5px;\n}\n[data-v-8fea4e86] .features > li { margin-bottom: 16px;\n}\n[data-v-8fea4e86] .feature-title { margin-bottom: 3px;\n}\n.footer[data-v-8fea4e86] { padding: 10px 0; position: relative;\n}\n.footer[data-v-8fea4e86]:before { height: 20px; position: absolute; right: 0; bottom: calc(100% - 1px); left: 0; background: linear-gradient(rgba(255, 255, 255, 0), #fff); content: '';\n}\n}\n",
        ""
      ]);
      const o = d;
    },
    25311: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => s });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t("div", { staticClass: "sale" }, [
          e.showBack
            ? t("div", { staticClass: "back-container" }, [
                t(
                  "div",
                  {
                    staticClass: "back icon-wrapper",
                    attrs: { "data-test": "back" },
                    on: {
                      click: function (t) {
                        return e.$emit("goBack");
                      }
                    }
                  },
                  [t("inline-svg", { staticClass: "icon icon-back", attrs: { src: a(86043) } })],
                  1
                )
              ])
            : e._e(),
          e._v(" "),
          t("span", { staticClass: "text" }, [
            t("div", { staticClass: "description" }, [
              e._v(e._s(e.saleInfo.title)),
              t("span", { staticClass: "divider" }, [e._v("–")]),
              e._v(e._s(e.saleInfo.percentOff) + "% Off")
            ]),
            e._v(" "),
            t("div", { staticClass: "countdown" }, [e._v(e._s(e.stringCountdown))])
          ]),
          e._v(" "),
          e.showClose
            ? t("div", { staticClass: "close-container" }, [
                t(
                  "div",
                  {
                    staticClass: "icon-wrapper close",
                    attrs: { "data-test": "close" },
                    on: {
                      click: function (t) {
                        return e.$emit("close");
                      }
                    }
                  },
                  [t("inline-svg", { staticClass: "icon icon-close", attrs: { src: a(21794) } })],
                  1
                )
              ])
            : e._e()
        ]);
      };
      n._withStripped = !0;
      const i = {
        name: "ModalBanner",
        props: {
          sales: { type: Object, default: () => ({}) },
          showClose: { type: Boolean, default: !0 },
          showBack: { type: Boolean, default: !1 }
        },
        computed: {
          date: () => m.models.date,
          time() {
            return new Date(this.date.get("seconds"));
          },
          saleInfo() {
            return this.sales && this.sales.yearly;
          },
          saleTimeLeft() {
            return new Date(this.sales.yearly.endDate) - this.time;
          },
          stringCountdown() {
            if (!this.sales || !this.sales.yearly.endDate) return "";
            if (this.saleTimeLeft <= 0) return "Sale Has Ended";
            const e = Math.floor(this.saleTimeLeft / 1e3),
              t = m.utils.twoDigit(e % 60),
              a = Math.floor(e / 60),
              n = m.utils.twoDigit(a % 60),
              i = Math.floor(a / 60),
              s = m.utils.twoDigit(i % 24);
            return "Ends in " + Math.floor(i / 24) + "d " + s + "h " + n + "m " + t + "s";
          }
        }
      };
      a(83665);
      const s = (0, a(51900).Z)(i, n, [], !1, null, "26672d34", null).exports;
    },
    75962: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => l });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          { staticClass: "app-container overlay", attrs: { "data-test": "upsell" } },
          [
            t("transition", { attrs: { name: "slide-fade", appear: "" } }, [
              t(
                "div",
                {
                  directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.close, expression: "close" }],
                  staticClass: "app onboarding new-upsell light light-full",
                  class: `${e.type}-upsell`,
                  attrs: { "data-test": `${e.type}-upsell` }
                },
                [
                  e.saleActive ? t("modal-banner", { attrs: { sales: e.sales }, on: { close: e.close } }) : e._e(),
                  e._v(" "),
                  t("header", { staticClass: "header" }, [
                    t("div", { staticClass: "header-left" }),
                    e._v(" "),
                    t("div", { staticClass: "header-title" }, [e._v(e._s(e.headerTitle))]),
                    e._v(" "),
                    t("div", { staticClass: "header-right" }, [
                      e.saleActive
                        ? e._e()
                        : t(
                            "span",
                            { staticClass: "icon-wrapper hide", attrs: { "data-test": "close" }, on: { click: e.close } },
                            [t("inline-svg", { staticClass: "icon icon-hide", attrs: { src: a(21794) } })],
                            1
                          )
                    ])
                  ]),
                  e._v(" "),
                  t(
                    "main",
                    { staticClass: "body" },
                    [
                      t("div", { staticClass: "body-header" }, [
                        t("div", { staticClass: "title", attrs: { "data-test": "upsell-title" } }, [e._t("title")], 2),
                        e._v(" "),
                        t("div", { staticClass: "description", attrs: { "data-test": "upsell-description" } }, [e._t("description")], 2)
                      ]),
                      e._v(" "),
                      e._t("body"),
                      e._v(" "),
                      e._t("default")
                    ],
                    2
                  ),
                  e._v(" "),
                  t("footer", { staticClass: "footer" }, [
                    t(
                      "a",
                      { staticClass: "button", attrs: { "data-test": "upsell-cta" }, on: { click: e.upgrade } },
                      [t("inline-svg", { staticClass: "icon", attrs: { src: a(28986) } }), e._v("Get Momentum Plus")],
                      1
                    ),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "button-desc" },
                      [
                        e.isSafari
                          ? e._e()
                          : [
                              e._v("\n\t\t\t\t\t\tOnly "),
                              e.saleActive
                                ? [
                                    t("strong", [
                                      t("s", { staticClass: "strike" }, [e._v("$" + e._s(e.plans.yearly.friendlyMonthlyPrice))]),
                                      e._v(" $" + e._s(e.sale.friendlyMonthlyPrice))
                                    ]),
                                    e._v("/month.")
                                  ]
                                : e.plans.yearly
                                ? [e._v("$" + e._s(e.plans.yearly.friendlyMonthlyPrice) + "/month.")]
                                : e._e()
                            ],
                        e._v("\n\t\t\t\t\t30-day money-back guarantee.\n\t\t\t\t\t"),
                        e.isSafari
                          ? e._e()
                          : t("a", { staticClass: "learn-more", attrs: { href: "https://momentumdash.com/plus", target: "_blank" } }, [
                              t("strong", [e._v("Learn more")])
                            ])
                      ],
                      2
                    )
                  ])
                ],
                1
              )
            ])
          ],
          1
        );
      };
      n._withStripped = !0;
      var i = a(40063),
        s = a(25311),
        d = a(81405),
        o = a(80809);
      const r = {
        name: "Upsell",
        components: { ModalBanner: s.Z },
        directives: { ClickOutside: i.Z },
        props: {
          type: { type: String, default: "General" },
          eventSource: { type: String, default: "" },
          eventFeature: { type: String, default: "" },
          eventType: { type: String, default: "" },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) },
          headerTitle: { type: String, default: "Available on Momentum Plus" }
        },
        unreactive: () => ({ isSafari: o.Z.isSafari() }),
        computed: {
          saleActive() {
            return this.sales && Object.keys(this.sales).length;
          },
          sale() {
            return this.sales && this.sales.yearly;
          }
        },
        created() {
          m.on("globalEvent:esc", this.close);
          let e = { feature: this.eventFeature || this.type };
          this.eventType && (e.type = this.eventType), (this.analytics = new d.ZP(e));
        },
        mounted() {
          (m.upsellModalActive = !0),
            this.analytics.capture("upsell show", { location: this.eventSource }),
            m.commandManager.beforeExecute("upsell.upgrade");
        },
        destroyed() {
          (m.upsellModalActive = !1), m.off("globalEvent:esc", this.close);
        },
        methods: {
          close() {
            m.trigger("modal:close");
          },
          upgrade() {
            this.analytics.capture("upsell click"), m.trigger("modal:showUpgrade");
          }
        }
      };
      a(78658);
      const l = (0, a(51900).Z)(r, n, [], !1, null, "8fea4e86", null).exports;
    },
    83665: (e, t, a) => {
      var n = a(9077);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("75eb2ca0", n, !1, { ssrId: !0 });
    },
    78658: (e, t, a) => {
      var n = a(13821);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, a(45346).Z)("f401aebe", n, !1, { ssrId: !0 });
    },
    86043: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkuMDQgNDkyIj48cGF0aCBkPSJNMTk4LjYxLDI0Ni4xLDM4Mi42Niw2MmEyNywyNywwLDAsMCwwLTM4LjA2TDM2Ni41NCw3Ljg2YTI3LDI3LDAsMCwwLTM4LjA2LDBMMTA5LjMzLDIyN2EyNy4xNSwyNy4xNSwwLDAsMCwwLDM4LjE5TDMyOC4yNyw0ODQuMTRhMjcsMjcsMCwwLDAsMzguMDcsMEwzODIuNDYsNDY4YTI3LDI3LDAsMCwwLDAtMzguMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjQ4KSIgLz48L3N2Zz4K";
    },
    21794: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K";
    },
    28986: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDk3IDM1My42NzJjLTMwLjQzOCAwLTU5LjAyMy0xMS43NDItODAuNS0zMy4wNjctMjEuNDY5LTIxLjMxMi0zMy4yOS00OS42OTktMzMuMjktNzkuOTMgMC04LjI4NC02LjcxOC0xNS0xNS0xNS04LjI4NCAwLTE1IDYuNzE2LTE1IDE1IDAgMzAuMjMxLTExLjgyMyA1OC42MTgtMzMuMjkyIDc5LjkzLTIxLjQ3NyAyMS4zMjUtNTAuMDYzIDMzLjA2Ny04MC41IDMzLjA2Ny04LjI4NSAwLTE1IDYuNzE1LTE1IDE1czYuNzE1IDE1IDE1IDE1YzYyLjc0MiAwIDExMy43OTMgNTAuODQgMTEzLjc5MyAxMTMuMzI4IDAgOC4yODUgNi43MTUgMTUgMTUgMTUgOC4yODEgMCAxNS02LjcxNSAxNS0xNSAwLTYyLjQ4OCA1MS4wNDctMTEzLjMyOCAxMTMuNzg5LTExMy4zMjggOC4yODUgMCAxNS02LjcxNSAxNS0xNXMtNi43MTUtMTUtMTUtMTV6bS0xMjguNzkgNzkuNjIxYy0xMy45MjktMjcuODYzLTM2LjY5OC01MC42MDItNjQuNjItNjQuNTQgMTMuNjkxLTYuNzg4IDI2LjMzMi0xNS44MDQgMzcuNDY1LTI2Ljg1OCAxMS4xODMtMTEuMTAyIDIwLjI5Ny0yMy43MiAyNy4xNTItMzcuMzkxIDYuODYgMTMuNjcyIDE1Ljk3MyAyNi4yODkgMjcuMTUyIDM3LjM5IDExLjEzMyAxMS4wNTUgMjMuNzc4IDIwLjA3IDM3LjQ2NSAyNi44Ni0yNy45MTggMTMuOTM3LTUwLjY4NyAzNi42NzYtNjQuNjEzIDY0LjUzOXptMCAwTTIwNS4yMzQgMjM2LjM4N2MtNDQuMTc1IDAtODAuMTE3LTM1LjY3Ni04MC4xMTctNzkuNTMyIDAtOC4yOC02LjcxNS0xNS0xNS0xNXMtMTUgNi43Mi0xNSAxNWMwIDQzLjg1Ni0zNS45NDEgNzkuNTMyLTgwLjExNyA3OS41MzItOC4yODUgMC0xNSA2LjcxOC0xNSAxNSAwIDguMjg1IDYuNzE1IDE1IDE1IDE1IDQ0LjE3NiAwIDgwLjExNyAzNS43ODkgODAuMTE3IDc5Ljc3NyAwIDguMjgxIDYuNzE1IDE1IDE1IDE1czE1LTYuNzE5IDE1LTE1YzAtNDMuOTg4IDM1Ljk0Mi03OS43NzcgODAuMTE3LTc5Ljc3NyA4LjI4NiAwIDE1LTYuNzE1IDE1LTE1IDAtOC4yODItNi43MTQtMTUtMTUtMTV6bS05NS4xMTcgNTQuNTExYTExMC43NzIgMTEwLjc3MiAwIDAgMC0zOS41Ny0zOS40OTJjMTYuMzQtOS41MzUgMzAuMDA0LTIzLjE0IDM5LjU3LTM5LjQwNiA5LjU2NyAxNi4yNjYgMjMuMjMgMjkuODcxIDM5LjU3IDM5LjQwNmExMTAuNzQgMTEwLjc0IDAgMCAwLTM5LjU3IDM5LjQ5MnptMCAwTTIyOS42MzcgMTAzLjY1NmMzMi40ODggMCA1OC45MjIgMjYuMjMgNTguOTIyIDU4LjQ2OSAwIDguMjgxIDYuNzE0IDE1IDE1IDE1czE1LTYuNzE5IDE1LTE1YzAtMzIuMzQ0IDI2LjQzMy01OC42NTYgNTguOTIxLTU4LjY1NiA4LjI4NiAwIDE1LTYuNzE5IDE1LTE1IDAtOC4yODUtNi43MTQtMTUtMTUtMTUtMzIuNDg4IDAtNTguOTIxLTI2LjIzLTU4LjkyMS01OC40NjkgMC04LjI4NS02LjcxNS0xNS0xNS0xNXMtMTUgNi43MTUtMTUgMTVjMCAzMi4zNDQtMjYuNDM0IDU4LjY1Ni01OC45MjIgNTguNjU2LTguMjg1IDAtMTUgNi43MTUtMTUgMTVzNi43MTUgMTUgMTUgMTV6bTczLjk1Ny0zOS40OGE4OS40NTEgODkuNDUxIDAgMCAwIDI0LjQyMiAyNC4zMDggODkuNTE1IDg5LjUxNSAwIDAgMC0yNC40OTMgMjQuNDY1IDg5LjQ1MSA4OS40NTEgMCAwIDAtMjQuNDIxLTI0LjMwOCA4OS40NjIgODkuNDYyIDAgMCAwIDI0LjQ5Mi0yNC40NjV6bTAgMCIgLz48L3N2Zz4K";
    }
  }
]);
