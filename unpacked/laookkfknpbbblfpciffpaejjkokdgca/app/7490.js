(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7490, 6399, 599],
  {
    8552: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = {
        inserted: function (e, t) {
          var i;
          if (!1 === (null == t ? void 0 : t.value)) return;
          const s = null == e || null === (i = e.value) || void 0 === i ? void 0 : i.length;
          e.select(), (s || 0 === s) && (e.setSelectionRange(s, s), (e.scrollLeft = e.scrollWidth));
        }
      };
    },
    42223: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = {
        data: () => ({ componentsMounted: {} }),
        unreactive: () => ({ uid: m.utils.shortId() }),
        beforeCreate() {
          const e = this.$options.components;
          Object.keys(e).forEach((t) => {
            const i = e[t];
            "function" == typeof i &&
              (e[t] = function () {
                this.$set(this.componentsMounted, t, !1);
                const e = `${t}:${this.uid}:mounted`,
                  s = () => (this.componentsMounted[t] = !0);
                return (
                  this.$e.$once(e, s),
                  i(arguments).then((i) => {
                    const n = i.default;
                    return n && n.doNotWaitForMount && (this.$delete(this.componentsMounted, t), this.$e.$off(e, s)), i;
                  })
                );
              }.bind(this));
          });
        },
        created() {
          this.$e.$on("widgets:timeoutExceeded", this.onWidgetTimeout);
        },
        mounted() {
          if (Object.keys(this.componentsMounted).length) {
            const e = this.$watch(
              "componentsMounted",
              (t) => {
                Object.values(t).every((e) => e) && (this.onAllComponentsMounted(), e());
              },
              { deep: !0, immediate: !0 }
            );
          } else this.onAllComponentsMounted();
        },
        destroyed() {
          this.stopListeningToWidgetTimeout();
        },
        methods: {
          stopListeningToWidgetTimeout() {
            this.$e.$off("widgets:timeoutExceeded", this.onWidgetTimeout);
          },
          getContextUid() {
            return (this.$vnode && this.$vnode.context && this.$vnode.context.uid) || "";
          },
          onAllComponentsMounted() {
            this.onAllComponentsMountedOverride
              ? this.onAllComponentsMountedOverride()
              : this.widgetId
              ? m.widgetManager.appReady(this.widgetId)
              : this.emitComponentMounted(),
              this.stopListeningToWidgetTimeout();
          },
          emitComponentMounted() {
            this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`);
          },
          onWidgetTimeout() {
            const e = Object.keys(this.componentsMounted).filter((e) => !this.componentsMounted[e]);
            e.length && console.warn(`${this.$options.name} is awaiting ${e.join(", ")} to mount.`);
          }
        }
      };
    },
    65550: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      const s = new (i(20144).ZP.extend({
        name: "GlobalKeyEventManager",
        data: () => ({ events: {} }),
        methods: {
          registerEventListener(e, t, i, s) {
            Object.prototype.hasOwnProperty.call(this.events, t)
              ? Object.prototype.hasOwnProperty.call(this.events[t], i) || (this.events[t][i] = [])
              : ((this.events[t] = {}), (this.events[t][i] = []), this._addListener(t)),
              this.events[t][i].push({ id: e, handler: s });
          },
          removeEventListener(e, t, i) {
            if (!Object.prototype.hasOwnProperty.call(this.events, t))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with event type: ${t} to remove`));
            if (!Object.prototype.hasOwnProperty.call(this.events[t], i))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with keyCode: ${i} to remove`));
            let s = this.events[t][i].findIndex((t) => t.id === e);
            -1 !== s
              ? (this.events[t][i].splice(s, 1), this._cleanupIfEmpty(t, i))
              : m.utils.isDev() && console.warn(`No event listeners registered with id: ${e} to remove`);
          },
          _cleanupIfEmpty(e, t) {
            this.events[e][t].length || delete this.events[e][t],
              Object.keys(this.events[e]).length || (delete this.events[e], this._removeListener(e));
          },
          _addListener(e) {
            window.addEventListener(e, this._eventRouter);
          },
          _removeListener(e) {
            window.removeEventListener(e, this._eventRouter);
          },
          _eventRouter(e) {
            if (m.tourActive) return;
            if (!Object.prototype.hasOwnProperty.call(this.events, e.type)) return;
            if (!Object.prototype.hasOwnProperty.call(this.events[e.type], e.keyCode)) return;
            let t = this.events[e.type][e.keyCode];
            t[t.length - 1].handler(e);
          }
        }
      }))();
    },
    68657: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var s = i(8081),
        n = i.n(s),
        o = i(23645),
        a = i.n(o)()(n());
      a.push([
        e.id,
        ".smooth-reflow[data-v-256e142c]{position:relative}.smooth-reflow.tr-height.tr-width[data-v-256e142c]{transition:height var(--3872912c) ease,width var(--3872912c) ease}.smooth-reflow.tr-height[data-v-256e142c]{transition:height var(--3872912c) ease}.smooth-reflow.tr-width[data-v-256e142c]{display:flex;justify-content:center;transition:width var(--3872912c) ease}.smooth-reflow.tr-width>div[data-v-256e142c]{width:fit-content}.smooth-reflow.hide-overflow[data-v-256e142c]{overflow:hidden}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-height-fade-leave-active{position:absolute !important;top:0;right:0;left:0;transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-fade-enter, .smooth-height-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-enter-active{transition:opacity var(--7b63f4cb) cubic-bezier(0.85, -0.18, 0.66, 0.66)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> .smooth-width-fade-leave-active{position:absolute;top:0;left:50%;transform:translateX(-50%);transition:opacity var(--7b63f4cb) cubic-bezier(0.33, 0.13, 0.33, 1.26)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-width-fade-enter, .smooth-width-fade-leave-to){opacity:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter-active, .smooth-height-slide-left-leave-active,\n .smooth-height-slide-right-enter-active, .smooth-height-slide-right-leave-active){transition:transform 300ms ease}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-active, .smooth-height-slide-right-leave-active){position:absolute;top:0;right:0;left:0}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-leave-to, .smooth-height-slide-right-enter){transform:translateX(-100%)}.smooth-reflow:not(.tr-disabled)>div[data-v-256e142c]> :is(.smooth-height-slide-left-enter, .smooth-height-slide-right-leave-to){transform:translateX(100%)}",
        ""
      ]);
      const r = a;
    },
    74121: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var s = i(8081),
        n = i.n(s),
        o = i(23645),
        a = i.n(o)()(n());
      a.push([
        e.id,
        "\n/* stylelint-disable */\n.label-wrapper[data-v-16cf348b] { display: flex; gap: 10px; align-items: center;\n}\n.loading-icon[data-v-16cf348b] { height: 10px; width: 10px;\n}\n",
        ""
      ]);
      const r = a;
    },
    52078: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var s = i(8081),
        n = i.n(s),
        o = i(23645),
        a = i.n(o)()(n());
      a.push([
        e.id,
        "\n/* stylelint-disable */\n.typeahead[data-v-4dfbd81a] { width: 100%; background-color: transparent;\n}\n.input-wrapper[data-v-4dfbd81a] { display: flex;\n}\n.input-wrapper input[data-v-4dfbd81a] { flex-grow: 1;\n}\n.typeahead .dropdown-list[data-v-4dfbd81a] { padding: 0; display: block; background: var(--color-accent-highlight); border-radius: 0 0 var(--border-radius) var(--border-radius); box-shadow: none;\n}\n.typeahead ul[data-v-4dfbd81a] { padding: 6px 0;\n}\n.typeahead li[data-v-4dfbd81a] { max-width: none; padding: 4px 9px; opacity: 0.8; font-size: 0.875rem;\n}\n.typeahead .result[data-v-4dfbd81a] { cursor: pointer;\n}\n.typeahead .result.selected[data-v-4dfbd81a] { background: var(--hover-bg);\n}\n.typeahead .no-results[data-v-4dfbd81a], .typeahead .searching[data-v-4dfbd81a] { opacity: 0.6;\n}\n",
        ""
      ]);
      const r = a;
    },
    97490: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => h });
      var s = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          [
            t("div", { staticClass: "label-wrapper" }, [
              t("label", [e._v("Location")]),
              e._v(" "),
              e.loadingTimezone ? t("div", { staticClass: "loading-icon", attrs: { "data-test": "loading-timezone" } }) : e._e()
            ]),
            e._v(" "),
            t("location-typeahead", {
              ref: "typeahead",
              class: { pulse: e.warning },
              attrs: { "before-fetch-results": e.interceptUtcSearch, value: e.transformedValue, type: "timezone" },
              on: { input: e.getTimezone }
            })
          ],
          1
        );
      };
      s._withStripped = !0;
      var n = i(60599),
        o = i(92729),
        a = i(65550);
      const r = o.$x.map(({ name: e, id: t }) => {
          const i = e.includes("-"),
            s = e.substring(3),
            n = s.replace(":", ""),
            [o, a] = s.substring(1).split(":");
          return { name: e, shortName: e, offset: (60 * o + a) * (i ? -1 : 1), searchable: n, timeZoneId: t };
        }),
        l = {
          name: "TimezoneTypeahead",
          components: { LocationTypeahead: n.default },
          props: { value: { type: Object, required: !0 }, componentFieldWarnings: { type: Array, default: () => [] } },
          data: () => ({ warning: !1, loadingTimezone: !1 }),
          computed: {
            transformedValue() {
              return { name: this.value.timeZoneName, ...this.value };
            }
          },
          watch: {
            componentFieldWarnings(e) {
              e.includes("timeZoneId") && (this.warning = !0), setTimeout(() => (this.warning = !1), 1e3);
            }
          },
          created() {
            a.Z.registerEventListener("closeResults", "keyup", 27, () => {
              this.$refs.typeahead.clear();
            });
          },
          destroyed() {
            a.Z.removeEventListener("closeResults", "keyup", 27);
          },
          methods: {
            async getTimezone({ shortName: e, name: t, latitude: i, longitude: s, offset: n = 0, timeZoneId: o = "" } = {}) {
              if ((this.$emit("input", { shortName: e, timeZoneName: t, offset: n, timeZoneId: o }), void 0 === arguments[0].timeZoneId)) {
                this.loadingTimezone = !0;
                try {
                  const {
                    data: { name: n, offset: o }
                  } = await this.$xhr.get(`/timezones:search?latitude=${i}&longitude=${s}`);
                  this.$emit("input", { shortName: e, name, offset: o, timeZoneId: n, timeZoneName: t });
                } catch (e) {
                  console.error(e);
                } finally {
                  this.loadingTimezone = !1;
                }
              }
            },
            interceptUtcSearch(e) {
              const t = e.toLowerCase().trim();
              if (t.includes("utc") || t.includes("gmt")) {
                var i;
                const e = (null === (i = t.replace(":", "").match(/(\d|-|\+)+/)) || void 0 === i ? void 0 : i[0]) || "",
                  s = m.utils.fuzzyFilter(e, r, "searchable");
                if (s.length) return s;
              }
            }
          }
        };
      i(32838);
      const h = (0, i(51900).Z)(l, s, [], !1, null, "16cf348b", null).exports;
    },
    60599: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => u });
      var s = function () {
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
      s._withStripped = !0;
      var n = function () {
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
                      e._l(e.results, function (i, s) {
                        return t(
                          "li",
                          {
                            key: s,
                            staticClass: "result",
                            class: { selected: e.selected === s },
                            attrs: { "data-test": e.type + "-result" },
                            on: {
                              click: function (t) {
                                return e.$emit("select", i);
                              },
                              mouseover: function (t) {
                                e.selected = s;
                              }
                            }
                          },
                          [t("span", { staticClass: "name" }, [e._v(e._s(i.name))])]
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
      n._withStripped = !0;
      var o = i(8552);
      const a = {
        name: "Typeahead",
        components: { SmoothReflow: i(36399).default },
        directives: { softFocus: o.Z },
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
      i(15697);
      var r = i(51900);
      const l = (0, r.Z)(a, n, [], !1, null, "4dfbd81a", null).exports;
      var h = i(71257);
      const d = {
          name: "LocationTypeahead",
          components: { Typeahead: l },
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
                const i = null === (t = this.beforeFetchResults) || void 0 === t ? void 0 : t.call(this, e);
                if (i) this.results = i;
                else {
                  (this.loading = !0),
                    this.cancelTokenSource && this.cancelTokenSource.cancel(),
                    (this.cancelTokenSource = h.default.CancelToken.source());
                  try {
                    const { data: t } = await this.$xhr.get("/locations:search?input=" + e, { cancelToken: this.cancelTokenSource.token });
                    (this.loading = !1), (this.results = t), this.results.length || (this.noResults = !0);
                  } catch (e) {
                    if (h.default.isCancel(e)) return;
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
        u = (0, r.Z)(d, s, [], !1, null, null, null).exports;
    },
    36399: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => c });
      var s = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          {
            ref: "wrapper",
            staticClass: "smooth-reflow",
            class: {
              "tr-height": e.height,
              "tr-width": e.width,
              "tr-disabled": e.transitionDisabled,
              "hide-overflow": e.hideOverflow && (e.resizing || e.transitionActive)
            },
            style: { height: e.wrapperHeight, width: e.wrapperWidth },
            attrs: {
              "data-smooth-reflow-id": e.id,
              "data-test": "smooth-reflow",
              "data-test-transitioning": e.resizing || e.transitionActive
            }
          },
          [
            e.transitionGroup
              ? t(
                  "transition-group",
                  e._g(
                    e._b(
                      {
                        directives: [
                          { name: "resize-sensor", rawName: "v-resize-sensor", value: e.handleResize, expression: "handleResize" }
                        ],
                        attrs: { tag: "div" }
                      },
                      "transition-group",
                      e.transitionProps,
                      !1
                    ),
                    e.transitionHooks
                  ),
                  [e._t("default")],
                  2
                )
              : t(
                  "div",
                  {
                    directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: e.handleResize, expression: "handleResize" }]
                  },
                  [t("transition", e._g(e._b({}, "transition", e.transitionProps, !1), e.transitionHooks), [e._t("default")], 2)],
                  1
                )
          ],
          1
        );
      };
      s._withStripped = !0;
      var n = i(61706),
        o = i(42223),
        a = i(96046),
        r = i(20144);
      const l = {
          name: "SmoothReflow",
          directives: { ResizeSensor: n.Z },
          mixins: [o.Z],
          props: {
            height: { type: Boolean, default: !0 },
            width: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            appear: { type: Boolean, default: !1 },
            awaitAppsReady: { type: Boolean, default: !1 },
            duration: { type: Number, default: 500 },
            transitionDuration: { type: Number, default: null },
            nested: { type: Boolean, default: !1 },
            hideOverflow: { type: Boolean, default: !1 },
            transition: { type: String, default: "smooth-height-fade" },
            transitionGroup: { type: Boolean, default: !1 },
            debug: { type: Boolean, default: !1 },
            firstTransitionDisabled: { type: Boolean, default: !1 }
          },
          data: () => ({
            id: Math.random().toString(36).substring(7),
            wrapperHeightPx: null,
            wrapperWidthPx: null,
            auto: !1,
            resizing: !1,
            transitionActive: !1,
            ancestors: [],
            resizedOnce: !1
          }),
          computed: {
            awaitingAppsReady() {
              return this.awaitAppsReady && !a.Z.allowAwaitingAppsReadySmoothReflow;
            },
            transitionDisabled() {
              return this.auto || this.disabled || this.awaitingAppsReady;
            },
            transitionProps() {
              return {
                name: this.transition,
                appear: this.appear,
                duration: this.awaitingAppsReady ? 0 : null === this.transitionDuration ? this.duration : this.transitionDuration
              };
            },
            wrapperHeight() {
              return !this.height || this.transitionDisabled ? "auto" : this.wrapperHeightPx + "px";
            },
            wrapperWidth() {
              return this.width ? (this.transitionDisabled ? "auto" : this.wrapperWidthPx + "px") : "";
            },
            transitionDurationMs() {
              return `${this.transitionDisabled ? 0 : null === this.transitionDuration ? this.duration : this.transitionDuration}ms`;
            },
            resizeDurationMs() {
              return this.resizeDuration + "ms";
            },
            resizeDuration() {
              return (this.firstTransitionDisabled && !this.resizedOnce) || this.awaitingAppsReady
                ? 0
                : null === this.transitionDuration
                ? this.duration
                : this.transitionActive
                ? this.transitionDuration
                : this.duration;
            }
          },
          watch: {
            transitionDisabled(e) {
              e || this.setExplicitDimensions();
            }
          },
          created() {
            (this.transitionHooks = {
              beforeEnter: this.beforeEnter,
              enter: this.enter,
              afterEnter: this.afterEnter,
              enterCancelled: this.enterCancelled,
              beforeLeave: this.beforeLeave,
              leave: this.leave,
              afterLeave: this.afterLeave,
              leaveCancelled: this.leaveCancelled
            }),
              this.appear && (this.height && (this.wrapperHeightPx = 0), this.width && (this.wrapperWidthPx = 0)),
              this.$e.$on("pauseSmoothReflow:" + this.id, this.pauseSmoothReflow),
              this.$e.$on("resumeSmoothReflow:" + this.id, this.resumeSmoothReflow);
          },
          async mounted() {
            this.nested && (await this.$nextTick(), this.findSmoothReflowAncestors()), this.setExplicitDimensions();
          },
          destroyed() {
            this.$e.$off("pauseSmoothReflow:" + this.id, this.pauseSmoothReflow),
              this.$e.$off("resumeSmoothReflow:" + this.id, this.resumeSmoothReflow);
          },
          methods: {
            async handleResize(e) {
              if (
                this.transitionDisabled ||
                (this.height && !this.width && this.wrapperHeightPx === e.height) ||
                (!this.height && this.width && this.wrapperWidthPx === e.width) ||
                (this.height && this.width && this.wrapperHeightPx === e.height && this.wrapperWidthPx === e.width)
              )
                return this.$emit("afterResize");
              (this.resizing = !0),
                clearTimeout(this.timeout),
                this.nested &&
                  this.ancestors.length &&
                  (this.ancestors.forEach((e) => this.$e.$emit("pauseSmoothReflow:" + e)), await this.$nextTick()),
                this.height && (this.wrapperHeightPx = e.height),
                this.width && (this.wrapperWidthPx = e.width),
                (this.timeout = setTimeout(() => {
                  this.nested && this.ancestors.length && this.ancestors.forEach((e) => this.$e.$emit("resumeSmoothReflow:" + e)),
                    (this.resizing = !1),
                    this.afterResize();
                }, this.duration));
            },
            findSmoothReflowAncestors() {
              let e,
                t = !0;
              for (; t; )
                (e = ((e && e.parentElement) || this.$el.parentElement).closest("[data-smooth-reflow-id]")),
                  e ? this.ancestors.push(e.getAttribute("data-smooth-reflow-id")) : (t = !1);
            },
            pauseSmoothReflow() {
              this.auto = !0;
            },
            resumeSmoothReflow() {
              (this.auto = !1), this.setExplicitDimensions();
            },
            setExplicitDimensions() {
              this.$refs.wrapper &&
                (this.height && (this.wrapperHeightPx = this.$refs.wrapper.clientHeight),
                this.width && (this.wrapperWidthPx = this.$refs.wrapper.clientWidth));
            },
            afterResize() {
              (this.resizedOnce = !0), this.$emit("afterResize");
            },
            beforeEnter(e) {
              (this.transitionActive = !0), this.$emit("beforeEnter", e);
            },
            enter(e) {
              this.$emit("enter", e);
            },
            afterEnter(e) {
              (this.transitionActive = !1), this.$emit("afterEnter", e);
            },
            enterCancelled(e) {
              this.$emit("afterEnter", e);
            },
            beforeLeave(e) {
              (this.transitionActive = !0), this.$emit("beforeLeave", e);
            },
            leave(e) {
              this.$emit("leave", e);
            },
            afterLeave(e) {
              (this.transitionActive = !1), this.$emit("afterLeave", e);
            },
            leaveCancelled(e) {
              this.$emit("leaveCancelled", e);
            }
          }
        },
        h = () => {
          (0, r.sj)((e, t) => ({ "3872912c": e.resizeDurationMs, "7b63f4cb": e.transitionDurationMs }));
        },
        d = l.setup;
      l.setup = d ? (e, t) => (h(), d(e, t)) : h;
      const u = l;
      i(67135);
      const c = (0, i(51900).Z)(u, s, [], !1, null, "256e142c", null).exports;
    },
    67135: (e, t, i) => {
      var s = i(68657);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("1ea382bd", s, !1, {});
    },
    32838: (e, t, i) => {
      var s = i(74121);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("25fd939a", s, !1, { ssrId: !0 });
    },
    15697: (e, t, i) => {
      var s = i(52078);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[e.id, s, ""]]),
        s.locals && (e.exports = s.locals),
        (0, i(45346).Z)("a5023434", s, !1, { ssrId: !0 });
    }
  }
]);
