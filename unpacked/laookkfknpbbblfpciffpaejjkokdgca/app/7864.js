(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7864],
  {
    19866: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => g });
      var a = i(8081),
        u = i.n(a),
        l = i(23645),
        s = i.n(l)()(u());
      s.push([t.id, "\n/* stylelint-disable */\n", ""]);
      const g = s;
    },
    6612: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => s });
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e(
              "collapsible-input",
              { attrs: { label: t.field.label, active: t.active }, on: { toggleInput: t.toggle } },
              [e("edit-field", { attrs: { field: t.fieldInfo, "view-manager": t.viewManager, "field-warnings": t.fieldWarnings } })],
              1
            )
          ],
          1
        );
      };
      a._withStripped = !0;
      var u = i(5084);
      const l = {
        name: "RoundingSelect",
        components: { EditField: i(83554).Z, CollapsibleInput: u.Z },
        props: {
          viewManager: { type: Object, required: !0 },
          field: { type: Object, required: !0 },
          fieldWarnings: { type: Array, default: () => [] }
        },
        data: () => ({ active: !1 }),
        computed: {
          editProps() {
            return this.viewManager.editProps;
          },
          fieldInfo() {
            return { ...this.field, type: "select", label: void 0 };
          }
        },
        watch: {
          active(t) {
            t || (this.editProps.rounding = null);
          }
        },
        created() {
          m.utils.isNumber(this.editProps.rounding) && (this.active = !0);
        },
        methods: {
          toggle() {
            this.active = !this.active;
          }
        }
      };
      i(66141);
      const s = (0, i(51900).Z)(l, a, [], !1, null, "08efc12c", null).exports;
    },
    66141: (t, e, i) => {
      var a = i(19866);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, i(45346).Z)("fd32614a", a, !1, { ssrId: !0 });
    },
    95598: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NCA0NCI+PHBhdGggZD0iTTIyIDBDOS44IDAgMCA5LjggMCAyMnM5LjggMjIgMjIgMjIgMjItOS44IDIyLTIyUzM0LjIgMCAyMiAwem0yIDM0YzAgLjYtLjQgMS0xIDFoLTJjLS42IDAtMS0uNC0xLTF2LTJjMC0uNi40LTEgMS0xaDJjLjYgMCAxIC40IDEgMXYyem0yLjctOC45Yy0xLjQgMS4yLTIuNCAyLTIuNyAzLjEtLjEuNS0uNS44LTEgLjhoLTJjLS42IDAtMS4xLS41LTEtMS4xLjQtMi45IDIuNS00LjUgNC4yLTUuOSAxLjgtMS40IDIuOC0yLjMgMi44LTQgMC0yLjgtMi4yLTUtNS01cy01IDIuMi01IDV2LjZjLjEuNS0uMiAxLS43IDEuMWwtMS45LjZjLS42LjItMS4yLS4yLTEuMy0uOC0uMS0uNS0uMS0xLS4xLTEuNSAwLTUgNC05IDktOXM5IDQgOSA5YzAgMy43LTIuNCA1LjYtNC4zIDcuMXoiIC8+PC9zdmc+Cg==";
    }
  }
]);
