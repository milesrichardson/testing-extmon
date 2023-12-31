(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [8622],
  {
    83891: (t, a, n) => {
      "use strict";
      n.r(a), n.d(a, { default: () => s });
      var i = n(8081),
        e = n.n(i),
        o = n(23645),
        d = n.n(o)()(e());
      d.push([
        t.id,
        "\n/* stylelint-disable */\n.nav[data-v-0876512d] { display: flex;\n}\n.nav-item[data-v-0876512d] { position: relative; display: flex; align-items: center;\n}\n.nav-item .icon[data-v-0876512d] { padding: var(--icon-padding) calc(var(--icon-padding) - 4px); opacity: 0.5; color: var(--color-text);\n}\n.nav-item:first-child .icon[data-v-0876512d] { padding-left: calc(var(--icon-padding) + 2px);\n}\n.nav-item:last-child .icon[data-v-0876512d] { padding-right: calc(var(--icon-padding) + 2px);\n}\n.nav-item:hover .icon[data-v-0876512d] { opacity: 0.8;\n}\n.nav-item:hover:active .icon[data-v-0876512d], .nav-item.active .icon[data-v-0876512d] { opacity: 1 !important;\n}\n.nav-title[data-v-0876512d] { display: none;\n}\n.tooltip[data-v-0876512d] { padding: 3px 5px; position: absolute; top: calc(100% + 2px); left: 50%; z-index: 1; display: none; background: hsla(0deg 0% 15% / 95%); border-radius: 4px; color: white; font-size: 0.8125rem; transform: translateX(-50%); white-space: nowrap;\n}\n.nav-item:hover .tooltip[data-v-0876512d] { display: block;\n}\n.tooltip .badge[data-v-0876512d] { background: rgba(255 255 255 / 20%); color: white;\n}\n\n\t/* Mobile */\n.toast .nav[data-v-0876512d] { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-column-gap: 10px;\n}\n.toast .nav-item[data-v-0876512d] { padding: 7px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 6px; box-shadow: inset 0 0 0 1.5px var(--border-color); font-size: 12px;\n}\n.toast .nav-icon[data-v-0876512d] { --size: 22px; height: var(--size); width: var(--size); margin: 3px 0; opacity: 0.5; border-radius: 4px;\n}\n.toast .nav-title[data-v-0876512d] { margin: 1px 0 -1px; display: block; opacity: 0.7; line-height: 1.2;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.toast .tooltip[data-v-0876512d] { display: none;\n}\n.toast .nav-item.active[data-v-0876512d], .toast .nav-item[data-v-0876512d]:active { background: var(--border-color); box-shadow: none;\n}\n.toast .nav-item.active .nav-icon[data-v-0876512d], .toast .nav-item.active .nav-title[data-v-0876512d] { opacity: 1;\n}\n\n",
        ""
      ]);
      const s = d;
    },
    88622: (t, a, n) => {
      "use strict";
      n.r(a), n.d(a, { default: () => d });
      var i = function () {
        var t = this,
          a = t._self._c;
        return a(
          "nav",
          { staticClass: "nav" },
          t._l(t.options, function (n, i) {
            return a(
              "div",
              {
                key: i,
                staticClass: "nav-item",
                class: { active: t.active === i },
                attrs: { "data-test": i + "-opt" },
                on: {
                  click: function (a) {
                    return t.switchTo(i);
                  }
                }
              },
              [
                a("inline-svg", {
                  class: "nav-icon icon icon-" + i,
                  attrs: { src: n.icon },
                  on: {
                    loaded: function (a) {
                      return t.onLoad(i);
                    }
                  }
                }),
                t._v(" "),
                a("div", { staticClass: "nav-title" }, [t._v(t._s(n.name))]),
                t._v(" "),
                a("span", { staticClass: "tooltip" }, [t._v(t._s(n.name))])
              ],
              1
            );
          }),
          0
        );
      };
      i._withStripped = !0;
      var e = n(81405);
      const o = {
        name: "QuickNavOptionsList",
        unreactive: () => ({ iconsLoaded: 0 }),
        props: {
          options: { type: Object, default: () => {} },
          active: { type: String, default: "" },
          region: { type: String, default: "" }
        },
        methods: {
          switchTo(t) {
            const a = this.options[t].upsell;
            !this.$plus && a && m.cmd("modal.open", a, { eventSource: `${this.region} nav` }), this.$emit("switch-to", t);
            const n = this.options[t].feature || t,
              i = this.options[t].eventName || n;
            e.ZP.capture(i + " activate", { feature: n });
          },
          onLoad() {
            this.iconsLoaded++, this.iconsLoaded === Object.keys(this.options).length && this.$emit("iconsLoaded");
          }
        }
      };
      n(3426);
      const d = (0, n(51900).Z)(o, i, [], !1, null, "0876512d", null).exports;
    },
    3426: (t, a, n) => {
      var i = n(83891);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, n(45346).Z)("8bd6bdaa", i, !1, { ssrId: !0 });
    }
  }
]);
