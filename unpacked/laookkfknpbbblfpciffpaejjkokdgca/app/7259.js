(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7259],
  {
    54639: (t, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => n });
      var i = s(8081),
        e = s.n(i),
        l = s(23645),
        r = s.n(l)()(e());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n.column[data-v-6c46b364] { flex-basis: 50% !important;\n}\n.has-2-col[data-v-6c46b364] { display: flex;\n}\n.title-column[data-v-6c46b364] { padding-right: 15px;\n}\n.value-column[data-v-6c46b364] {\n}\n.air-quality-link[data-v-6c46b364] { margin: -1px -5px; padding: 1px 5px; border-radius: var(--border-radius);\n}\n.air-quality-link[data-v-6c46b364]:hover { background: var(--color-stop-2);\n}\n.air-quality-link:hover .icon-external[data-v-6c46b364] { opacity: 1;\n}\n.air-quality-link[data-v-6c46b364]:active { background: var(--color-stop-3);\n}\n.air-quality-color[data-v-6c46b364] { padding-left: 1px; display: inline-flex;\n}\n.air-quality-color .icon-external[data-v-6c46b364] { --icon-size: 10px; margin-right: 0px; margin-left: 5px; align-self: center; opacity: 0;\n}\n.icon-arrow[data-v-6c46b364] { margin-right: 3px; margin-left: -2px;\n}\n",
        ""
      ]);
      const n = r;
    },
    7259: (t, a, s) => {
      "use strict";
      s.r(a), s.d(a, { default: () => l });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a("div", { staticClass: "has-2-col" }, [
          a("div", { staticClass: "column has-2-col" }, [
            t._m(0),
            t._v(" "),
            a("div", { staticClass: "value-column" }, [
              a("div", { staticClass: "value", attrs: { title: "Moon Waxing Crescent" } }, [t._v(t._s(t.forecast.sunrise))]),
              t._v(" "),
              a("div", { staticClass: "value spacer", attrs: { title: "Moon Waxing Crescent" } }, [t._v(t._s(t.forecast.sunset))]),
              t._v(" "),
              a("div", { staticClass: "value" }, [
                a(
                  "a",
                  {
                    staticClass: "air-quality-link",
                    attrs: { href: t.forecast.airQuality.link, title: t.forecast.airQuality.hazardStatement, target: "_blank" }
                  },
                  [
                    t._v("\n\t\t\t\t\t" + t._s(t.airQualityIndex) + "\n\t\t\t\t\t"),
                    a(
                      "span",
                      { staticClass: "air-quality-color", style: { color: t.forecast.airQuality.categoryColor } },
                      [
                        t._v("\n\t\t\t\t\t\t" + t._s(t.forecast.airQuality.category) + "\n\t\t\t\t\t\t"),
                        a("inline-svg", { staticClass: "icon icon-external", attrs: { src: s(58607) } })
                      ],
                      1
                    )
                  ]
                )
              ]),
              t._v(" "),
              a("div", { staticClass: "value", attrs: { title: "Low" } }, [t._v(t._s(t.forecast.uvIndex))])
            ])
          ]),
          t._v(" "),
          a("div", { staticClass: "column has-2-col" }, [
            t._m(1),
            t._v(" "),
            a("div", { staticClass: "value-column" }, [
              a("div", { staticClass: "value", attrs: { title: "Dewpoint 9°" } }, [t._v(t._s(t.forecast.dewPoint) + "%")]),
              t._v(" "),
              a("div", { staticClass: "value spacer", attrs: { title: "In the past 24 hours" } }, [t._v(t._s(t.forecast.precipAmount))]),
              t._v(" "),
              a(
                "div",
                { staticClass: "value" },
                [
                  t.forecast.pressureChanging
                    ? a("inline-svg", {
                        staticClass: "icon icon-arrow",
                        style: `transform: rotate(${t.forecast.pressureRotation}deg)`,
                        attrs: { src: s(12031) }
                      })
                    : t._e(),
                  t._v("\n\t\t\t\t" + t._s(t.forecast.pressure) + "\n\t\t\t")
                ],
                1
              ),
              t._v(" "),
              a("div", { staticClass: "value" }, [t._v(t._s(t.forecast.visibility))])
            ])
          ])
        ]);
      };
      i._withStripped = !0;
      const e = {
        name: "DetailedInfo",
        props: { forecast: { type: Object, required: !0 } },
        computed: {
          airQualityIndex() {
            let t = Math.round(this.forecast.airQuality.overallIndex);
            return "Very Unhealthy" === this.forecast.airQuality.category ? "" : t;
          }
        }
      };
      s(40801);
      const l = (0, s(51900).Z)(
        e,
        i,
        [
          function () {
            var t = this,
              a = t._self._c;
            return a("div", { staticClass: "title-column" }, [
              a("div", { staticClass: "title" }, [t._v("Sunrise")]),
              t._v(" "),
              a("div", { staticClass: "title spacer" }, [t._v("Sunset")]),
              t._v(" "),
              a("div", { staticClass: "title" }, [t._v("Air Quality")]),
              t._v(" "),
              a("div", { staticClass: "title" }, [t._v("UV Index")])
            ]);
          },
          function () {
            var t = this,
              a = t._self._c;
            return a("div", { staticClass: "title-column" }, [
              a("div", { staticClass: "title" }, [t._v("Humidity")]),
              t._v(" "),
              a("div", { staticClass: "title spacer" }, [t._v("Precipitation")]),
              t._v(" "),
              a("div", { staticClass: "title" }, [t._v("Pressure")]),
              t._v(" "),
              a("div", { staticClass: "title" }, [t._v("Visibility")])
            ]);
          }
        ],
        !1,
        null,
        "6c46b364",
        null
      ).exports;
    },
    40801: (t, a, s) => {
      var i = s(54639);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, s(45346).Z)("5b5be06c", i, !1, { ssrId: !0 });
    }
  }
]);
