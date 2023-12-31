(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4736],
  {
    40692: (t, n, a) => {
      "use strict";
      a.r(n), a.d(n, { default: () => l });
      var e = a(8081),
        i = a.n(e),
        s = a(23645),
        r = a.n(s)()(i());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n.call[data-v-51684186] { width: 100%; max-width: 840px; margin: 2rem 1rem 0; padding: 30px; display: flex; background: var(--color-bg); border-radius: 4px; color: var(--color-text);\n}\n.call-content[data-v-51684186] { margin-right: 1rem; flex: 1 0 auto; text-align: left;\n}\n.call .heading[data-v-51684186] { margin-bottom: 0.38em; font-size: 1.1875rem; font-weight: bold;\n}\n.call .description[data-v-51684186] { width: 600px; opacity: 0.8; line-height: 1.3;\n}\n.call-cta[data-v-51684186] { display: flex; align-items: center;\n}\n.call .button[data-v-51684186] { padding: 10px 30px; opacity: 0.8; background: var(--color-button); box-shadow: none; font-size: 14px;\n}\n.call .button[data-v-51684186]:hover { opacity: 1;\n}\n.call .button[data-v-51684186]:active { background: var(--color-button);\n}\n",
        ""
      ]);
      const l = r;
    },
    14736: (t, n, a) => {
      "use strict";
      a.r(n), a.d(n, { default: () => l });
      var e = function () {
        var t = this,
          n = t._self._c;
        return n("div", { staticClass: "tour-fullscreen", attrs: { "data-test": "tour-end" } }, [
          n("div", { staticClass: "cta" }, [
            n("div", { staticClass: "heading" }, [t._v(t._s(t.heading))]),
            t._v(" "),
            n("div", { staticClass: "subheading", domProps: { innerHTML: t._s(t.subheading) } }),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "button dash-button",
                attrs: { "data-test": "end" },
                on: {
                  click: function (n) {
                    return t.$emit("next");
                  }
                }
              },
              [t._v(t._s(t.buttonText)), n("inline-svg", { staticClass: "icon icon-next", attrs: { src: a(67200) } })],
              1
            )
          ]),
          t._v(" "),
          t.bannerActive
            ? n("div", { staticClass: "call light-full" }, [
                n("div", { staticClass: "call-content" }, [
                  n("div", { staticClass: "heading" }, [t._v(t._s(t.bannerHeading))]),
                  t._v(" "),
                  n("div", { staticClass: "description" }, [t._v(t._s(t.bannerSubheading))])
                ]),
                t._v(" "),
                n("div", { staticClass: "call-cta" }, [
                  n(
                    "a",
                    {
                      staticClass: "button call-button",
                      attrs: { target: "_blank", href: t.bannerButtonLink },
                      on: { click: t.onBannerCtaClick }
                    },
                    [t._v(t._s(t.bannerButtonText))]
                  )
                ])
              ])
            : t._e()
        ]);
      };
      e._withStripped = !0;
      var i = a(81405),
        s = a(40531);
      const r = {
        name: "TourEnd",
        props: {
          parentModalName: { type: String, default: "" },
          name: { type: String, default: "" },
          heading: { type: String, default: `Let's go, ${s.ax.displayname}!` },
          subheading: { type: String, default: "" },
          buttonText: { type: String, default: "" },
          bannerHeading: { type: String, default: "" },
          bannerSubheading: { type: String, default: "" },
          bannerButtonText: { type: String, default: "" },
          bannerButtonLink: { type: String, default: "" },
          bannerCta: { type: Function, default: () => {} }
        },
        computed: {
          bannerActive() {
            return this.bannerHeading || this.bannerSubheading || this.bannerButtonText || this.bannerButtonLink;
          }
        },
        mounted() {
          window.addEventListener("keyup", this.handleKey);
        },
        destroyed() {
          window.removeEventListener("keyup", this.handleKey);
        },
        methods: {
          handleKey(t) {
            "Enter" === t.code && this.$emit("next");
          },
          onBannerCtaClick() {
            this.bannerCta(),
              i.ZP.capture("banner cta click", {
                feature: "onboarding",
                step: this.parentModalName.toLowerCase(),
                sub_step: this.name.toLowerCase()
              });
          }
        }
      };
      a(88123);
      const l = (0, a(51900).Z)(r, e, [], !1, null, "51684186", null).exports;
    },
    88123: (t, n, a) => {
      var e = a(40692);
      e.__esModule && (e = e.default),
        "string" == typeof e && (e = [[t.id, e, ""]]),
        e.locals && (t.exports = e.locals),
        (0, a(45346).Z)("64a86c3e", e, !1, { ssrId: !0 });
    }
  }
]);
