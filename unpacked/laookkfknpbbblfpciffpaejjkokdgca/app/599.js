(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [599],
  {
    8552: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => n });
      const n = {
        inserted: function (e, t) {
          var s;
          if (!1 === (null == t ? void 0 : t.value)) return;
          const n = null == e || null === (s = e.value) || void 0 === s ? void 0 : s.length;
          e.select(), (n || 0 === n) && (e.setSelectionRange(n, n), (e.scrollLeft = e.scrollWidth));
        }
      };
    },
    52078: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      var n = s(8081),
        a = s.n(n),
        l = s(23645),
        o = s.n(l)()(a());
      o.push([
        e.id,
        "\n/* stylelint-disable */\n.typeahead[data-v-4dfbd81a] { width: 100%; background-color: transparent;\n}\n.input-wrapper[data-v-4dfbd81a] { display: flex;\n}\n.input-wrapper input[data-v-4dfbd81a] { flex-grow: 1;\n}\n.typeahead .dropdown-list[data-v-4dfbd81a] { padding: 0; display: block; background: var(--color-accent-highlight); border-radius: 0 0 var(--border-radius) var(--border-radius); box-shadow: none;\n}\n.typeahead ul[data-v-4dfbd81a] { padding: 6px 0;\n}\n.typeahead li[data-v-4dfbd81a] { max-width: none; padding: 4px 9px; opacity: 0.8; font-size: 0.875rem;\n}\n.typeahead .result[data-v-4dfbd81a] { cursor: pointer;\n}\n.typeahead .result.selected[data-v-4dfbd81a] { background: var(--hover-bg);\n}\n.typeahead .no-results[data-v-4dfbd81a], .typeahead .searching[data-v-4dfbd81a] { opacity: 0.6;\n}\n",
        ""
      ]);
      const r = o;
    },
    60599: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => c });
      var n = function () {
        var e = this;
        return (0, e._self._c)(
          "typeahead",
          {
            attrs: {
              value: e.inputValue,
              results: e.results,
              loading: e.loading,
              "no-results": e.noResults,
              type: e.type,
              placeholder: "Type a location"
            },
            on: { input: e.fetchResults, select: e.onSelect }
          },
          [e._t("default")],
          2
        );
      };
      n._withStripped = !0;
      var a = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          { staticClass: "typeahead", class: { searching: e.resultsVisible } },
          [
            t(
              "div",
              { staticClass: "input-wrapper" },
              [
                t("input", {
                  directives: [{ name: "soft-focus", rawName: "v-soft-focus" }],
                  staticClass: "input",
                  attrs: {
                    type: "text",
                    placeholder: e.placeholder,
                    spellcheck: "false",
                    autocomplete: "off",
                    "data-test": e.type + "-input"
                  },
                  domProps: { value: e.value },
                  on: {
                    keydown: [
                      function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"])
                          ? null
                          : (t.preventDefault(), e.onArrowDown.apply(null, arguments));
                      },
                      function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"])
                          ? null
                          : (t.preventDefault(), e.onArrowUp.apply(null, arguments));
                      },
                      function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")
                          ? null
                          : e.onEnter.apply(null, arguments);
                      }
                    ],
                    keyup: [
                      function (t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"])) return null;
                        t.preventDefault();
                      },
                      function (t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"])) return null;
                        t.preventDefault();
                      }
                    ],
                    input: function (t) {
                      return e.$emit("input", t.target.value);
                    },
                    focus: function (e) {
                      return e.target.select();
                    }
                  }
                }),
                e._v(" "),
                e._t("default")
              ],
              2
            ),
            e._v(" "),
            e.resultsVisible
              ? t("smooth-reflow", { staticClass: "dropdown-list", attrs: { nested: !0, "hide-overflow": !0 } }, [
                  t(
                    "ul",
                    { attrs: { "data-test": "typeahead-dropdown" } },
                    [
                      t(
                        "li",
                        {
                          directives: [{ name: "show", rawName: "v-show", value: e.loading, expression: "loading" }],
                          staticClass: "searching"
                        },
                        [e._v("Searching...")]
                      ),
                      e._v(" "),
                      e._l(e.results, function (s, n) {
                        return t(
                          "li",
                          {
                            key: n,
                            staticClass: "result",
                            class: { selected: e.selected === n },
                            attrs: { "data-test": e.type + "-result" },
                            on: {
                              click: function (t) {
                                return e.$emit("select", s);
                              },
                              mouseover: function (t) {
                                e.selected = n;
                              }
                            }
                          },
                          [t("span", { staticClass: "name" }, [e._v(e._s(s.name))])]
                        );
                      }),
                      e._v(" "),
                      t(
                        "li",
                        {
                          directives: [{ name: "show", rawName: "v-show", value: e.noResults, expression: "noResults" }],
                          staticClass: "no-results",
                          attrs: { "data-test": "not-found" }
                        },
                        [e._v("No " + e._s(e.type) + "s found.")]
                      )
                    ],
                    2
                  )
                ])
              : e._e()
          ],
          1
        );
      };
      a._withStripped = !0;
      var l = s(8552);
      const o = {
        name: "Typeahead",
        components: { SmoothReflow: s(36399).default },
        directives: { softFocus: l.Z },
        props: {
          value: { type: String, default: "" },
          type: { type: String, default: "" },
          results: { type: Array, default: () => [] },
          loading: { type: Boolean, default: !1 },
          placeholder: { type: String, required: !0 },
          noResults: { type: Boolean, default: !1 }
        },
        data: () => ({ selected: 0 }),
        computed: {
          resultsVisible() {
            return this.results.length || this.loading || this.noResults;
          }
        },
        methods: {
          onEnter() {
            this.results.length && this.$emit("select", this.results[this.selected]);
          },
          onArrowUp() {
            this.selected = Math.max(this.selected - 1, 0);
          },
          onArrowDown() {
            this.selected = Math.min(this.selected + 1, this.results.length - 1);
          }
        }
      };
      s(15697);
      var r = s(51900);
      const i = (0, r.Z)(o, a, [], !1, null, "4dfbd81a", null).exports;
      var u = s(71257);
      const d = {
          name: "LocationTypeahead",
          components: { Typeahead: i },
          props: {
            value: { type: Object, default: () => ({}) },
            type: { type: String, default: "location" },
            beforeFetchResults: { type: Function, default: null }
          },
          data: () => ({ results: [], inputValue: "", loading: !1, noResults: !1 }),
          created() {
            this.value.name && (this.inputValue = this.value.name);
          },
          methods: {
            clear() {
              (this.inputValue = this.value.name), (this.noResults = !1), (this.results = []);
            },
            async fetchResults(e) {
              if (((this.inputValue = e), e.length > 2)) {
                var t;
                this.noResults = !1;
                const s = null === (t = this.beforeFetchResults) || void 0 === t ? void 0 : t.call(this, e);
                if (s) this.results = s;
                else {
                  (this.loading = !0),
                    this.cancelTokenSource && this.cancelTokenSource.cancel(),
                    (this.cancelTokenSource = u.default.CancelToken.source());
                  try {
                    const { data: t } = await this.$xhr.get("/locations:search?input=" + e, { cancelToken: this.cancelTokenSource.token });
                    (this.loading = !1), (this.results = t), this.results.length || (this.noResults = !0);
                  } catch (e) {
                    if (u.default.isCancel(e)) return;
                    console.error(e), (this.loading = !1);
                  }
                }
              } else
                this.cancelTokenSource && this.cancelTokenSource.cancel(), (this.results = []), (this.noResults = !1), (this.loading = !1);
            },
            onSelect(e) {
              (this.results = []), (this.noResults = !1), this.$emit("input", e), (this.inputValue = e.name);
            }
          }
        },
        c = (0, r.Z)(d, n, [], !1, null, null, null).exports;
    },
    15697: (e, t, s) => {
      var n = s(52078);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, s(45346).Z)("a5023434", n, !1, { ssrId: !0 });
    }
  }
]);
