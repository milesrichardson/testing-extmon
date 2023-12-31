(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1587, 9437],
  {
    99437: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => h });
      var r = o(20144),
        i = o(88026),
        s = o(51726),
        a = o.n(s),
        n = o(55482),
        l = o(7838),
        c = o(35174);
      let d = {};
      const u = {
        bind: function (e, t) {
          m.utils.isTouchDevice() &&
            ((e.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (e.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (d[e.dataset.mobileClickHandlerId] = t.value),
            e.addEventListener("click", t.value));
        },
        unbind: function (e) {
          m.utils.isTouchDevice() &&
            (e.removeEventListener("click", d[e.dataset.mobileClickHandlerId]),
            delete d[e.dataset.mobileClickHandlerId],
            delete e.dataset.mobileClickHandlerId,
            delete e.dataset.justBoundMobileClickHandler);
        }
      };
      var v = o(63420),
        p = o(64398),
        g = o(77197);
      r.ZP.use(i.Z, { name: "unreactive" }),
        r.ZP.use(a()),
        r.ZP.use(n.qK),
        r.ZP.use(v.og),
        r.ZP.use(g.Z),
        (r.ZP.prototype.$xhr = c.Z),
        (r.ZP.prototype.$e = l.Z),
        r.ZP.directive("mobile-click", u),
        new r.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        r.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: p.Z
        });
      const h = r.ZP;
    },
    71587: (e, t, o) => {
      "use strict";
      o.r(t);
      var r = o(99437),
        i = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.closePicker, expression: "closePicker" }],
              staticClass: "color-picker-wrapper sub-view"
            },
            [
              e.pickerActive
                ? t("verte", {
                    attrs: {
                      picker: "square",
                      "color-history": e.colorHistory,
                      "menu-position": "left",
                      display: "widget",
                      draggable: !1,
                      model: "rgb"
                    },
                    on: {
                      "update:colorHistory": function (t) {
                        e.colorHistory = t;
                      },
                      "update:color-history": function (t) {
                        e.colorHistory = t;
                      }
                    },
                    nativeOn: {
                      mouseup: function (t) {
                        return e.saveColor.apply(null, arguments);
                      }
                    },
                    model: {
                      value: e.color,
                      callback: function (t) {
                        e.color = t;
                      },
                      expression: "color"
                    }
                  })
                : e._e(),
              e._v(" "),
              t(
                "span",
                {
                  staticClass: "toggle-label",
                  attrs: { "data-related-widget": "themeColour", "data-option-value": "custom" },
                  on: { click: e.togglePicker }
                },
                [t("span", { staticClass: "preview", style: { "background-color": e.color } }), e._v(" "), t("span", [e._v("Custom")])]
              )
            ],
            1
          );
        };
      (i._withStripped = !0), o(79467);
      var s = o(94927),
        a = o(40063);
      const n = {
        name: "ColorPicker",
        components: { Verte: s.Z },
        directives: { ClickOutside: a.Z },
        plusUser: m.conditionalFeatures.featureEnabled("plus"),
        data() {
          return {
            color: m.models.customization.get("themeColourCustom") || "00f",
            colorHistory: localStorage.getObject("colorPicker:history") || this.getEmptyColorHistory(),
            pickerActive: !1
          };
        },
        computed: {
          colorObject() {
            return new Colors({ color: this.color }).colors;
          },
          notContainedInHistory() {
            return !this.colorHistory.includes(this.color);
          }
        },
        watch: {
          color() {
            m.models.themeManager.setColorValues("themeColor", this.colorObject);
          },
          colorHistory(e) {
            localStorage.setObject("colorPicker:history", e);
          }
        },
        methods: {
          closePicker() {
            this.pickerActive = !1;
          },
          togglePicker() {
            this.$options.plusUser &&
              ((this.pickerActive = !this.pickerActive),
              this.pickerActive &&
                this.$nextTick(() => {
                  const e = this.$el.closest(".slide-toggle"),
                    t = this.$el.closest(".settings-view-container"),
                    o = e.offsetTop + e.offsetHeight / 2 - t.offsetHeight / 2;
                  t.scrollTo({ top: o, behavior: "smooth" });
                }));
          },
          saveColor() {
            this.notContainedInHistory && this.saveToHistory(this.color), m.models.themeManager.saveThemeColor();
          },
          getEmptyColorHistory: () => Array.apply(null, new Array(12)).map(() => "transparent"),
          saveToHistory(e) {
            this.colorHistory.unshift(e);
            const t = this.colorHistory.length - 1;
            ("transparent" === this.colorHistory[t] || this.colorHistory.length > 12) && this.colorHistory.splice(t);
          }
        }
      };
      o(37475);
      const l = (0, o(51900).Z)(n, i, [], !1, null, "228549c3", null).exports;
      m.on("colorPicker:mount", function (e) {
        m.colorPicker = new r.Z({ render: (e) => e(l) });
        const t = e.querySelector('.toggle-option.themeColour[data-option-value="custom"] .sub-view');
        m.colorPicker.$mount(t);
      }),
        m.on("colorPicker:destroy", function () {
          m.colorPicker && m.colorPicker.$destroy();
        });
    },
    40063: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => i });
      let r = {};
      const i = {
        bind: function (e, t) {
          let o, i;
          (e.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const s = (e) => {
              (i = !1), ((e) => e && e.clientX > window.innerWidth)(e) ? (i = !0) : (o = e.target);
            },
            a = (r) => {
              i ||
                ((t.modifiers.bubble ||
                  (!e.contains(o) &&
                    !e.contains(r.target) &&
                    e !== o &&
                    e !== r.target &&
                    "true" !== e.dataset.justBoundClickOutsideHandler)) &&
                  t.value(r));
            };
          (e.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (e.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (r[e.dataset.clickOutsideMouseupHandlerId] = a),
            (r[e.dataset.clickOutsideMousedownHandlerId] = s),
            document.addEventListener("mouseup", a),
            document.addEventListener("mousedown", s);
        },
        unbind: function (e) {
          var t, o;
          null !== (t = e.dataset) &&
            void 0 !== t &&
            t.clickOutsideMouseupHandlerId &&
            null !== (o = e.dataset) &&
            void 0 !== o &&
            o.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", r[e.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", r[e.dataset.clickOutsideMousedownHandlerId]),
            delete r[e.dataset.clickOutsideMouseupHandlerId],
            delete r[e.dataset.clickOutsideMousedownHandlerId],
            delete e.dataset.clickOutsideMouseupHandlerId,
            delete e.dataset.clickOutsideMousedownHandlerId,
            delete e.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    87267: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => n });
      var r = o(8081),
        i = o.n(r),
        s = o(23645),
        a = o.n(s)()(i());
      a.push([
        e.id,
        "\n/* stylelint-disable */\n.color-picker-wrapper[data-v-228549c3] { position: relative; display: inline-block;\n}\n.verte[data-v-228549c3] { --margin: 5px; position: absolute; left: -10px; display: block; cursor: default;\n}\n.verte[data-v-228549c3] .verte__guide { height: auto; width: auto;\n}\n.verte[data-v-228549c3] .verte__menu { position: absolute; right: 100%; left: auto; z-index: 2; background-color: #282828; transform: translateY(-50%) !important;\n}\n.verte[data-v-228549c3] .verte-picker__origin { border-top-left-radius: var(--border-radius); border-top-right-radius: var(--border-radius);\n}\n.verte[data-v-228549c3] .verte-picker { margin-bottom: 0;\n}\n.verte[data-v-228549c3] .verte-picker__slider { margin: var(--margin); margin-bottom: 0;\n}\n.verte[data-v-228549c3] .verte__controller { padding: 2px var(--margin) 8px;\n}\n.verte[data-v-228549c3] .verte__controller .slider { margin-bottom: 0;\n}\n.verte[data-v-228549c3] .verte__inputs { display: none;\n}\n.verte[data-v-228549c3] .verte__recent { margin-top: 6px; padding: 0 3px; justify-content: space-between;\n}\n.verte[data-v-228549c3] .verte__recent-color { --size: 16px; height: var(--size); width: var(--size); margin: 0;\n}\n.verte[data-v-228549c3] .verte__recent-color:last-child { margin-right: 0;\n}\n.toggle-label[data-v-228549c3] { padding: 0; color: var(--color-text); cursor: pointer; font-size: 0.8125rem; font-weight: 600;\n}\n.toggle-label .preview[data-v-228549c3] { height: 8px; width: 8px; margin-right: 2px; display: inline-block; border: var(--color-text) 1px solid; border-radius: 2px;\n}\n",
        ""
      ]);
      const n = a;
    },
    37475: (e, t, o) => {
      var r = o(87267);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.id, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, o(45346).Z)("d44f95ae", r, !1, { ssrId: !0 });
    }
  }
]);
