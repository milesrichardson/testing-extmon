(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [9152],
  {
    18023: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      const a = {
        props: { viewManager: { type: Object, required: !0 } },
        created() {
          var e, t, i;
          this.viewManager.setActiveBodyComponentInstance(this),
            (this._viewId = this.viewManager.activeViewId),
            this.viewManager.$on(`viewOpened:${this._viewId}`, this._afterEnterWrapper),
            this.viewManager.$on(`viewClosed:${this._viewId}`, this._afterLeaveWrapper),
            null === (e = this.viewManager) ||
              void 0 === e ||
              null === (t = e.views[this._viewId]) ||
              void 0 === t ||
              null === (i = t.beforeEnter) ||
              void 0 === i ||
              i.call(t),
            this.beforeEnter();
        },
        destroyed() {
          this.viewManager.$emit("resolveShowView:" + this._viewId);
        },
        methods: {
          beforeEnter() {},
          afterEnter() {},
          beforeLeave() {},
          afterLeave() {},
          _afterLeaveWrapper() {
            var e, t;
            null === (e = this.viewManager.views[this._viewId]) || void 0 === e || null === (t = e.afterLeave) || void 0 === t || t.call(e),
              this.afterLeave(),
              this._removeListeners();
          },
          _afterEnterWrapper() {
            var e, t;
            null === (e = this.viewManager.views[this._viewId]) || void 0 === e || null === (t = e.afterEnter) || void 0 === t || t.call(e),
              this.afterEnter();
          },
          _removeListeners() {
            this.viewManager.$off(`viewClosed:${this._viewId}`, this._afterLeaveWrapper),
              this.viewManager.$off(`viewOpened:${this._viewId}`, this._afterEnterWrapper);
          }
        }
      };
    },
    62296: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => o });
      var a = i(8081),
        s = i.n(a),
        r = i(23645),
        n = i.n(r)()(s());
      n.push([
        e.id,
        "\n/* stylelint-disable */\n.guide[data-v-ae2008b2] { margin-bottom: 16px; font-weight: 600; line-height: 1.2;\n}\n.types[data-v-ae2008b2] { margin-bottom: 16px;\n}\n.type[data-v-ae2008b2] { --padding: 6px; margin: calc(var(--padding) * -1); margin-bottom: 6px; padding: var(--padding); display: flex; align-items: baseline; cursor: pointer;\n}\n.radio[data-v-ae2008b2] { --size: 16px; height: var(--size); width: var(--size); margin-right: 8px; position: relative; flex-shrink: 0; display: flex; align-items: center; justify-content: center;\n}\n.radio-circle[data-v-ae2008b2] { height: 100%; width: 100%; position: absolute; opacity: 0.45; border-radius: 100%; box-shadow: inset 0 0 0 1.5px var(--color-text);\n}\n.type:hover .radio-circle[data-v-ae2008b2] { opacity: 0.8;\n}\n.radio-dot[data-v-ae2008b2] { --size: 10px; height: var(--size); width: var(--size); opacity: 0; background: var(--color-text); border-radius: var(--size);\n}\n.active .radio-dot[data-v-ae2008b2] { opacity: 1;\n}\n.title[data-v-ae2008b2] { display: block; font-weight: 400;\n}\n.description[data-v-ae2008b2] { opacity: 0.7; font-size: 0.8125rem;\n}\n",
        ""
      ]);
      const o = n;
    },
    99152: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => n });
      var a = function () {
        var e = this,
          t = e._self._c;
        return t("div", [
          t("div", { staticClass: "guide" }, [e._v("Choose a type")]),
          e._v(" "),
          t(
            "ul",
            { staticClass: "types" },
            e._l(e.metricTypesInfo, function (i, a) {
              return t(
                "li",
                {
                  key: a,
                  staticClass: "type",
                  class: { active: e.selectedType === i.id },
                  attrs: { "data-test": i.title.toLowerCase() + "-type" },
                  on: {
                    click: function (t) {
                      return e.selectType(i.id);
                    }
                  }
                },
                [
                  e._m(0, !0),
                  e._v(" "),
                  t("div", [
                    t("span", { staticClass: "title" }, [e._v(e._s(i.label))]),
                    e._v(" "),
                    t("span", { staticClass: "description" }, [e._v(e._s(i.description))])
                  ])
                ]
              );
            }),
            0
          ),
          e._v(" "),
          t(
            "button",
            {
              staticClass: "button",
              attrs: { "data-test": "next" },
              on: {
                click: function (t) {
                  return e.next();
                }
              }
            },
            [e._v("Next")]
          )
        ]);
      };
      a._withStripped = !0;
      var s = i(92729);
      const r = {
        name: "MetricTypes",
        mixins: [i(18023).Z],
        unreactive: () => ({ metricTypesInfo: s.bD }),
        data: () => ({ selectedType: 0 }),
        created() {
          this.selectedType = this.viewManager.editProps.type || 0;
        },
        methods: {
          selectType(e) {
            this.selectedType = e;
          },
          next() {
            this.viewManager.showView("edit"),
              this.$set(this.viewManager.editProps, "type", this.selectedType),
              this.$nextTick(this.focusInput);
          }
        }
      };
      i(24346);
      const n = (0, i(51900).Z)(
        r,
        a,
        [
          function () {
            var e = this._self._c;
            return e("span", { staticClass: "radio" }, [
              e("span", { staticClass: "radio-circle" }),
              this._v(" "),
              e("span", { staticClass: "radio-dot" })
            ]);
          }
        ],
        !1,
        null,
        "ae2008b2",
        null
      ).exports;
    },
    24346: (e, t, i) => {
      var a = i(62296);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.id, a, ""]]),
        a.locals && (e.exports = a.locals),
        (0, i(45346).Z)("ba56d53e", a, !1, { ssrId: !0 });
    }
  }
]);
