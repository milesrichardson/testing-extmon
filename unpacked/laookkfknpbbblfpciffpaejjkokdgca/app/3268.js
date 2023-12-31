(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3268],
  {
    99672: (t, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => o });
      var e = a(8081),
        i = a.n(e),
        n = a(23645),
        d = a.n(n)()(i());
      d.push([
        t.id,
        "\n/* stylelint-disable */\n.time[data-v-64a02232] { --width: 1.9ch; display: grid; grid-template-columns: var(--width) min-content var(--width);\n}\n.time.has-hours[data-v-64a02232] { grid-template-columns: auto auto auto auto var(--width);\n}\n.time.hide-seconds[data-v-64a02232] { min-width: 3.4ch; grid-template-columns: auto;\n}\n.time.has-single-digit[data-v-64a02232] { min-width: 2.4ch;\n}\n.time .minutes[data-v-64a02232] { overflow-wrap: initial; text-align: right;\n}\n.time .seconds[data-v-64a02232] { overflow-wrap: initial; text-align: left;\n}\n",
        ""
      ]);
      const o = d;
    },
    93268: (t, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => n });
      var e = function () {
        var t = this,
          s = t._self._c;
        return s(
          "div",
          {
            staticClass: "time",
            class: { "has-hours": t.hours > 0, "hide-seconds": t.hideSeconds, "has-single-digit": t.hours < 1 && t.minutes < 10 },
            attrs: { "data-test": "timer" }
          },
          [
            t.hideSeconds
              ? [t.hours > 0 ? [t._v(t._s(t.hours) + "h ")] : t._e(), t._v(t._s(t.minutes) + "m\n\t")]
              : [
                  t.hours > 0 ? s("div", { staticClass: "hours", attrs: { "data-test": "hours" } }, [t._v(t._s(t.hours))]) : t._e(),
                  t._v(" "),
                  t.hours > 0 ? s("div", { staticClass: "colon" }, [t._v(":")]) : t._e(),
                  t._v(" "),
                  s("div", { staticClass: "minutes", attrs: { "data-test": "minutes" } }, [t._v(t._s(t.minutes))]),
                  t._v(" "),
                  s("div", { staticClass: "colon" }, [t._v(":")]),
                  t._v(" "),
                  s("div", { staticClass: "seconds", attrs: { "data-test": "seconds" } }, [t._v(t._s(t.seconds))])
                ]
          ],
          2
        );
      };
      e._withStripped = !0;
      const i = {
        name: "PomodoroTime",
        mixins: [a(42223).Z],
        props: {
          hideSeconds: { type: Boolean, default: !1 },
          hours: { type: String, default: "00" },
          minutes: { type: String, default: "00" },
          seconds: { type: String, default: "00" }
        }
      };
      a(11363);
      const n = (0, a(51900).Z)(i, e, [], !1, null, "64a02232", null).exports;
    },
    11363: (t, s, a) => {
      var e = a(99672);
      e.__esModule && (e = e.default),
        "string" == typeof e && (e = [[t.id, e, ""]]),
        e.locals && (t.exports = e.locals),
        (0, a(45346).Z)("c9974c9e", e, !1, { ssrId: !0 });
    }
  }
]);
