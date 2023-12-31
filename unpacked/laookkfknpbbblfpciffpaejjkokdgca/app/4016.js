(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4016],
  {
    48688: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      var n = i(20144),
        s = i(65550);
      const a = n.ZP.extend({
        name: "ViewData",
        unreactive: () => ({ $_handlerKeyCodes: { keyup: { onEnter: 13, onEsc: 27 } }, collection: null, views: null }),
        data: () => ({
          activeViewId: "",
          activeItem: null,
          adding: !1,
          confirmationOverlayProps: null,
          forcedAppBodyHeight: null,
          $_activeBodyComponentInstance: null
        }),
        computed: {
          activeItemId() {
            return (this.activeItem && this.activeItem.id) || "";
          },
          activeView() {
            return this.views[this.activeViewId];
          },
          editProps() {
            return this.activeItem && this.activeItem.editProps;
          },
          confirmationOverlayActive() {
            return !!this.confirmationOverlayProps;
          },
          loaded() {
            return !this.collection || this.collection.data.loaded;
          }
        },
        watch: { loaded: { handler: "$_fallbackToDefaultView", immediate: !0 } },
        created() {
          this.$on("container:created", this.$_fallbackToDefaultView);
        },
        methods: {
          async showView(e, { doNotBlock: t, afterLeave: i } = {}) {
            "default" === e
              ? (e = this.$_getViewByProperty("defaultView"))
              : "add" === e && (this.createItem(), (e = this.$_getViewByProperty("addView")));
            const n = this.activeViewId;
            var s, a, o, r;
            n &&
              (t
                ? (null == this ||
                    null === (s = this.$_activeBodyComponentInstance) ||
                    void 0 === s ||
                    null === (a = s.beforeLeave) ||
                    void 0 === a ||
                    a.call(s, !0),
                  null === (o = this.views[n]) || void 0 === o || null === (r = o.beforeLeave) || void 0 === r || r.call(o, !0))
                : (await this.awaitCloseConfirmationIfNeeded(),
                  this.$_removeGlobalEventListeners(n),
                  this.setActiveBodyComponentInstance(null))),
              this.$emit("viewClosing:" + this.activeViewId),
              this.$_addGlobalEventListeners(e),
              (this.activeViewId = e),
              n && i && this.$once("resolveShowView:" + n, i);
          },
          closeApp() {
            this.awaitCloseConfirmationIfNeeded().then(() => this.$emit("close"));
          },
          resetView() {
            (this.activeViewId = ""),
              this.clearConfirmationOverlay(),
              this.clearItem(),
              (this.forcedAppBodyHeight = {}),
              (this.$_activeBodyComponentInstance = null);
          },
          setItem(e) {
            if ("string" == typeof e) this.activeItem = this.collection.data.items[e];
            else {
              if ("object" != typeof e) throw "setItem must be called with an item model or item id";
              this.activeItem = e;
            }
          },
          createItem() {
            (this.activeItem = new this.collection.Model()), this.activeItem.copyProperties(), (this.adding = !0);
          },
          clearItem() {
            this.activeItem && this.activeItem.revertChanges(), (this.adding = !1), (this.activeItem = null);
          },
          showDeleteConf() {
            this.$emit("showDeleteConf");
          },
          showConfirmationOverlay(e) {
            this.confirmationOverlayProps = e;
          },
          clearConfirmationOverlay() {
            this.confirmationOverlayProps = null;
          },
          setForcedAppBodyHeight(e) {
            this.forcedAppBodyHeight = e;
          },
          resetForcedAppBodyHeight() {
            this.forcedAppBodyHeight = null;
          },
          awaitCloseConfirmationIfNeeded() {
            var e, t, i;
            return this.activeViewId
              ? Promise.all([
                  null == this || null === (e = this.$_activeBodyComponentInstance) || void 0 === e ? void 0 : e.beforeLeave(),
                  null === (t = this.views[this.activeViewId]) || void 0 === t || null === (i = t.beforeLeave) || void 0 === i
                    ? void 0
                    : i.call(t)
                ]).then((e) => {
                  if (e.some((e) => !1 === e)) return new Promise(function () {});
                })
              : Promise.resolve();
          },
          setActiveBodyComponentInstance(e) {
            this.$_activeBodyComponentInstance = e;
          },
          $_getViewByProperty(e) {
            const t = Object.keys(this.views).find((t) => this.views[t][e]);
            if (t) return t;
            throw `No view with property: "${e}" was found. Please define a "${e}" property if you wish to access a view this way`;
          },
          $_addGlobalEventListeners(e) {
            const t = this.views[e];
            Object.entries(this.$_handlerKeyCodes).forEach(([i, n]) => {
              Object.entries(n).forEach(([n, a]) => {
                const o = t[n];
                o &&
                  s.Z.registerEventListener(`${e}:${n}`, i, a, () => {
                    "string" == typeof o ? this.showView(o) : "function" == typeof o && o();
                  });
              });
            });
          },
          $_removeGlobalEventListeners(e) {
            const t = this.views[e];
            Object.entries(this.$_handlerKeyCodes).forEach(([i, n]) => {
              Object.entries(n).forEach(([n, a]) => {
                t[n] && s.Z.removeEventListener(`${e}:${n}`, i, a);
              });
            });
          },
          $_fallbackToDefaultView() {
            this.loaded && !this.activeViewId && this.showView("default");
          }
        }
      });
    },
    71554: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => u });
      var n = i(99437),
        s = i(31624);
      const a = new (n.Z.extend({
        unreactive: () => ({ type: "clocks" }),
        defaultPath: "clocks",
        mixins: [s.X],
        methods: {
          findTimezone(e) {
            return this.$xhr.get("timezones/search?name=" + e.toLowerCase()).then((e) => e.data);
          }
        }
      }))();
      var o = i(2770),
        r = i(40531);
      const c = n.Z.extend({
        mixins: [o.Z, o.H],
        data: () => ({
          id: null,
          timezone: { timeZoneId: "", shortName: "", timeZoneName: "", offset: 0 },
          name: "",
          pinned: !1,
          random: !1,
          isTeam: null,
          readOnly: !1,
          props: ["pinned", "timezone", "name"]
        }),
        computed: {
          date: () => m.models.date,
          offset() {
            return this.timezone.offset;
          },
          offsetDate() {
            let e = new Date(this.date.get("date"));
            return this.offset && e.setUTCSeconds(e.getUTCSeconds() + this.offset), e;
          },
          time() {
            let e = this.offsetDate.getUTCHours(),
              t = m.utils.twoDigit(this.offsetDate.getUTCMinutes());
            return r.ax.hour12clock ? `${e > 12 ? e - 12 : 0 === e ? 12 : e}:${t}${e >= 12 ? "p" : "a"}` : `${e < 10 ? 0 : ""}${e}:${t}`;
          },
          difference: function () {
            const e = this.date.get("date"),
              t = this.offsetDate,
              i = e.getDate() == t.getUTCDate() ? "Today" : e.getDate() + 1 == t.getUTCDate() ? "Tomorrow" : "Yesterday",
              n = e.getTime(),
              s = t.getTime() + 60 * t.getTimezoneOffset() * 1e3,
              a = s > n ? (s - n) / m.utils.mConst("msPerHour") : (n - s) / m.utils.mConst("msPerHour");
            return i + ", " + (n > s ? "-" : "+") + (a % 1 != 0 ? Math.round(10 * a) / 10 : Math.round(a)) + " hrs";
          },
          value() {
            return this.time;
          },
          tooltip() {
            return this.difference;
          }
        },
        watch: {
          "editProps.timezone.shortName"(e) {
            e && !this.editProps.name && (this.editProps.name = e);
          }
        },
        methods: {
          updateData(e) {
            (this.timezone.timeZoneId = e.timeZoneId),
              (this.timezone.timeZoneName = e.timeZoneName),
              (this.timezone.offset = parseInt(e.currentOffset)),
              (this.name = e.name),
              (this.archived = e.archived),
              (this.isTeam = e.isTeam || !1),
              (this.id = e.id),
              (this.pinned = e.pinned),
              (this.readOnly = e.readOnly);
          }
        }
      });
      var d = i(94234),
        l = i(13990),
        h = i(61250);
      const p = () => i.e(7490).then(i.bind(i, 97490)),
        u = new (n.Z.extend({
          mixins: [d.FZ, d.cl, d.TF, d.Ox, d.mX, (0, h.Z)(() => ({ is_paid_event: !0 }))],
          unreactive() {
            return {
              ...l.Z.clocks,
              Model: c,
              dataService: a,
              visibleSetting: "multiClockVisible",
              sort: (e, t) => this.sortPinned(e, t, this.dashSort),
              dashSort: (e, t) => e.offset - t.offset,
              fields: [
                { property: "timezone", type: p, label: "Timezone", required: !0, requiredComponentFields: ["timeZoneId"] },
                { property: "name", label: "Name", required: !0, type: "input", dataTest: "name" },
                { property: "pinned", type: "toggle", label: "Pin to Dashboard", dataTest: "pinned" }
              ]
            };
          },
          methods: {
            getAddRequestBody: ({ editProps: e }) => ({
              pinned: e.pinned,
              timeZoneId: e.timezone.timeZoneId,
              name: e.name,
              timeZoneName: e.timezone.timeZoneName
            })
          }
        }))();
    },
    55535: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => p });
      var n = i(99437),
        s = i(2770);
      const a = n.Z.extend({
        mixins: [s.Z, s.H],
        data: () => ({
          id: null,
          dateEdit: { date: null, hasHours: !1, utcDate: null },
          name: "",
          isTeam: null,
          pinned: !1,
          random: !1,
          readOnly: !1,
          props: ["pinned", "name", "dateEdit"]
        }),
        unreactive: () => ({
          months: m.constants.monthNamesShort,
          daysOfWeek: m.constants.dayNamesShort,
          timeOptions: { hour: "numeric", minute: "2-digit" }
        }),
        computed: {
          date: () => m.models.date,
          currentTime() {
            return this.date.get("date").getTime();
          },
          tooltip() {
            let e = new Date(this.dateEdit.utcDate);
            return `${this.daysOfWeek[e.getDay()]} ${this.months[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
          },
          time() {
            return new Date(this.dateEdit.utcDate).toLocaleTimeString("en-US", this.timeOptions) + " ";
          },
          value() {
            let e,
              t = this.dateEdit.utcDate,
              i = this.calcTimeLeft(this.currentTime, t),
              n = this.dateEdit.hasHours,
              s = "";
            return (
              n && i.minsTot < 60
                ? ((e = 0 === i.minsTot ? "Now" : i.minsTot), (s = "m"))
                : n && i.hoursTot < 24
                ? ((e = i.hoursTot), (s = "h"))
                : ((e = n || 0 !== i.nights ? i.nights : "Today"), (s = "d")),
              i.past && (s += " ago"),
              ("Now" !== e && "Today" !== e) || (s = ""),
              e + s
            );
          }
        },
        watch: {
          "editProps.dateEdit.date"(e) {
            this.editProps.dateEdit && e && e.getTime && (this.editProps.dateEdit.utcDate = e.getTime());
          },
          "dateEdit.date"(e) {
            this.dateEdit && e && e.getTime && (this.dateEdit.utcDate = e.getTime());
          }
        },
        methods: {
          updateData: function (e) {
            (this.dateEdit.utcDate = Number.parseInt(e.utcDate)),
              (this.dateEdit.hasHours = e.hasHours),
              (this.dateEdit.date = new Date(this.dateEdit.utcDate)),
              (this.archived = e.archived),
              (this.isTeam = e.isTeam || !1),
              (this.name = e.name),
              (this.pinned = e.pinned),
              (this.id = e.id),
              (this.readOnly = e.readOnly);
          },
          setDefaultDate: function () {
            if (!this.dateEdit.utcDate) {
              let e = new Date(new Date().getTime() + 6048e5);
              this.dateEdit.utcDate = e.getTime();
            }
            return this.dateEdit.utcDate;
          },
          nightsBetween(e, t, i) {
            let n = e,
              s = t;
            e >= t && ((n = t), (s = e));
            let a = s - n,
              o = this.calcDayMs(n, i) + a,
              r = Math.floor(o / 864e5);
            return 0 !== r && e >= t && (r *= -1), r;
          },
          calcDayMs(e, t) {
            let i = e - new Date(e).setHours(0, 0, 0, 0) - 36e5 * t;
            return i < 0 && (i += 864e5), i;
          },
          calcTimeLeft(e, t) {
            let i = (t - e) / 6e4,
              n = i / 60,
              s = this.nightsBetween(e, t, 4),
              a = i < 0;
            return { minsTot: Math.abs(Math.round(i)), hoursTot: Math.abs(Math.round(n)), nights: Math.abs(s), past: a };
          }
        }
      });
      var o = i(31624);
      const r = new (n.Z.extend({ unreactive: () => ({ type: "countdowns" }), mixins: [o.X] }))();
      var c = i(94234),
        d = i(13990),
        l = i(61250);
      const h = () => Promise.all([i.e(4427), i.e(338)]).then(i.bind(i, 60338)),
        p = new (n.Z.extend({
          mixins: [c.FZ, c.cl, c.TF, c.Ox, c.mX, (0, l.Z)(() => ({ is_paid_event: !0 }))],
          unreactive() {
            return {
              ...d.Z.countdowns,
              Model: a,
              dataService: r,
              visibleSetting: "countdownVisible",
              sort: (e, t) => this.sortPinned(e, t, this.dashSort),
              dashSort: (e, t) => e.dateEdit.date - t.dateEdit.date,
              fields: [
                { property: "name", class: "item-body", type: "input", label: "Name", required: !0, dataTest: "name", autoCapitalize: !0 },
                { property: "dateEdit", type: h },
                { property: "pinned", type: "toggle", label: "Pin to dashboard", dataTest: "pinned" }
              ]
            };
          },
          methods: {
            getAddRequestBody: (e) => (
              e.editProps.dateEdit.utcDate || (e.editProps.dateEdit.utcDate = e.setDefaultDate()),
              {
                name: m.utils.capitalizeFirstLetter(e.editProps.name),
                utcDate: e.editProps.dateEdit.utcDate,
                hasHours: e.editProps.dateEdit.hasHours,
                pinned: e.editProps.pinned
              }
            )
          }
        }))();
    },
    84016: (e, t, i) => {
      "use strict";
      i.r(t);
      var n = i(99437),
        s = function () {
          var e = this,
            t = e._self._c;
          return e.allMetricsHidden
            ? e._e()
            : t(
                "div",
                {
                  directives: [
                    { name: "resize-sensor", rawName: "v-resize-sensor", value: e.onAppContainerResize, expression: "onAppContainerResize" }
                  ],
                  ref: "base-metric",
                  staticClass: "base-metric app-container",
                  class: { "app-hover": e.popupHovered, "show-anyway": e.showAnyway.includes("baseMetric"), "icons-only": e.iconsOnly },
                  style: { "--bottom-clearance": e.bottomClearance + "px" },
                  attrs: { "data-test": "base-metric", "data-show-anyway": "baseMetric" }
                },
                [
                  e.iconsOnly
                    ? t(
                        "transition-group",
                        { staticClass: "dash-items", attrs: { tag: "div", name: "fade", duration: e.enableFadeTransitions ? 200 : 0 } },
                        e._l(e.enabledCollections, function (i, n) {
                          return t(
                            "div",
                            { key: i.type, ref: n, refInFor: !0, staticClass: "metric-type", attrs: { "data-type": n, "data-test": n } },
                            [
                              t(
                                "div",
                                {
                                  staticClass: "app-dash app-dash-icon",
                                  on: {
                                    click: function (t) {
                                      return e.toggleApp(n);
                                    }
                                  }
                                },
                                [t("inline-svg", { class: "icon icon-" + i.type, attrs: { src: i.icon } })],
                                1
                              )
                            ]
                          );
                        }),
                        0
                      )
                    : e._e(),
                  e._v(" "),
                  t(
                    "transition-group",
                    {
                      directives: [
                        { name: "resize-sensor", rawName: "v-resize-sensor", value: e.onDashItemsResize, expression: "onDashItemsResize" }
                      ],
                      ref: "dash-items",
                      staticClass: "dash-items pinned-items",
                      attrs: { tag: "div", name: "fade", duration: e.enableFadeTransitions ? 200 : 0 }
                    },
                    [
                      t("add-metric", {
                        key: "add",
                        ref: "add",
                        class: { active: e.keepAddMetricVisible },
                        attrs: { disable: e.disableAddMetric, collections: e.collections },
                        on: { add: e.add }
                      }),
                      e._v(" "),
                      e._l(e.sortedCollections, function (i, n) {
                        return t(
                          "div",
                          {
                            key: i.type,
                            ref: n,
                            refInFor: !0,
                            staticClass: "metric-type",
                            style: {
                              "max-width": e.metricTypeWidths[n],
                              "min-width": "none" === e.metricTypeWidths[n] ? "min-content" : e.metricTypeWidths[n]
                            },
                            attrs: { "data-type": n, "data-test": n }
                          },
                          e._l(i.dashItems, function (s) {
                            return t("metric-dash", {
                              key: s.id,
                              ref: n + ":app-dash",
                              refInFor: !0,
                              attrs: { item: s, collection: i, "data-type": n },
                              nativeOn: {
                                click: function (t) {
                                  return e.toggleApp(n, t, s);
                                }
                              }
                            });
                          }),
                          1
                        );
                      })
                    ],
                    2
                  ),
                  e._v(" "),
                  t("transition", { attrs: { name: "fade", duration: "150" } }, [
                    e.popupActive ? t("div", { staticClass: "touch-overlay" }) : e._e()
                  ]),
                  e._v(" "),
                  t(
                    "transition",
                    {
                      attrs: { name: "slide-down-fade" },
                      on: {
                        "after-leave": function (t) {
                          e.popupHovered = !1;
                        }
                      }
                    },
                    [
                      e.popupActive
                        ? t(
                            "app-popup",
                            {
                              attrs: {
                                width: e.appWidth,
                                "nipple-displacement": e.nippleDisplacement,
                                "detailed-position": { top: e.top, right: e.right },
                                position: "bottom-left",
                                region: e.region,
                                focused: e.focused,
                                "view-manager": e.activeViewManager
                              },
                              on: { clickOutside: e.onClickOutside, close: e.closeApp },
                              nativeOn: {
                                mouseenter: function (t) {
                                  e.popupHovered = !0;
                                },
                                mouseleave: function (t) {
                                  e.popupHovered = !1;
                                },
                                click: function (t) {
                                  e.focused = !0;
                                }
                              }
                            },
                            [t("view-container", { attrs: { "view-manager": e.activeViewManager, loaded: e.activeCollection.loaded } })],
                            1
                          )
                        : e._e()
                    ],
                    1
                  )
                ],
                1
              );
        };
      s._withStripped = !0;
      var a = i(40531),
        o = i(71554),
        r = i(55535),
        c = i(71103),
        d = i(48688),
        l = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "app-dash metric-item add-shadow", attrs: { title: e.tooltip, "data-test": "app-dash" } },
            [
              t("div", { staticClass: "metric-stat" }, [e._v(e._s(e.displayValue))]),
              e._v(" "),
              t(
                "div",
                { staticClass: "metric-label" },
                [
                  e.item.authNeeded ? t("inline-svg", { staticClass: "icon icon-alert", attrs: { src: i(63741) } }) : e._e(),
                  e._v(" "),
                  t("span", { staticClass: "metric-label-name", domProps: { innerHTML: e._s(e.item.brokenName) } })
                ],
                1
              ),
              e._v(" "),
              e.item.shouldDisplayQuickAdjust
                ? t("metric-adjust", { attrs: { item: e.item, collection: e.collection, location: "dash" } })
                : e._e()
            ],
            1
          );
        };
      l._withStripped = !0;
      var h = i(42223);
      const p = {
        name: "MetricDash",
        components: { MetricAdjust: i(2445).Z },
        mixins: [h.Z],
        props: { item: { type: Object, required: !0 }, collection: { type: Object, required: !0 } },
        computed: {
          tooltip() {
            return (this.item.tooltip || "") + (this.item.random ? ` (Random ${this.collection.nameCS})` : "");
          },
          displayValue() {
            return this.item.displayValue ?? this.item.value;
          }
        }
      };
      i(33663);
      var u = i(51900);
      const v = (0, u.Z)(p, l, [], !1, null, "021c0a18", null).exports;
      var g = i(28277),
        y = i(61706),
        f = i(30827),
        w = i(96046),
        b = i(63139);
      const C = () => i.e(7896).then(i.bind(i, 97896)),
        M = () => i.e(2726).then(i.bind(i, 12726)),
        I = () => Promise.all([i.e(9965), i.e(9150)]).then(i.bind(i, 49150)),
        A = { countdowns: r.default, metrics: c.default, clocks: o.default },
        D = {
          name: "BaseMetric",
          components: {
            ViewContainer: () => Promise.all([i.e(7695), i.e(2938)]).then(i.bind(i, 17695)),
            AddMetric: g.Z,
            AppPopup: () => i.e(9718).then(i.bind(i, 35926)),
            MetricDash: v
          },
          directives: { ResizeSensor: y.Z },
          mixins: [h.Z],
          data: () => ({
            activeAppType: "",
            popupActive: !1,
            popupHovered: !1,
            right: 0,
            top: 0,
            enableFadeTransitions: !1,
            metricTypeWidths: {},
            appContainerWidth: 0,
            dashItemsWidth: 0
          }),
          unreactive: () => ({
            bottomClearance: m.constants.mobileTopOrBottomClearance,
            nippleDisplacement: m.constants.nippleDisplacementPx,
            viewManagers: T(A),
            collections: A,
            widgetId: "baseMetric",
            showAnyway: f.Z
          }),
          computed: {
            focused: {
              get() {
                return b.Z.isOnTop(this.activeAppType);
              },
              set(e) {
                e ? b.Z.add(this.activeAppType) : b.Z.remove(this.activeAppType);
              }
            },
            appWidth() {
              return this.$touch ? 300 : 230;
            },
            iconsOnly() {
              return this.appContainerWidth < this.dashItemsWidth || this.$mobile;
            },
            disableAddMetric() {
              return Object.values(this.viewManagers).some((e) => e.confirmationOverlayActive);
            },
            allLoaded() {
              return !!Object.keys(this.enabledCollections).length && Object.values(this.enabledCollections).every((e) => e.data.loaded);
            },
            selectedItem() {
              var e;
              return null === (e = this.activeCollection) || void 0 === e ? void 0 : e.selectedItem;
            },
            allMetricsHidden() {
              return Object.values(this.collections).every((e) => !e.visible);
            },
            enabledCollections() {
              const e = Object.entries(this.collections).filter((e) => e[1].visible);
              return e.length ? e.reduce((e, [t, i]) => ((e[t] = i), e), {}) : {};
            },
            visibleCollections() {
              const e = Object.entries(this.enabledCollections).filter((e) => e[1].dashItems.length);
              return e.length ? e.reduce((e, [t, i]) => ((e[t] = i), e), {}) : {};
            },
            activeViewManager() {
              return this.viewManagers[this.activeAppType];
            },
            activeCollection() {
              return this.collections[this.activeAppType];
            },
            pinnedCounts() {
              return Object.entries(this.visibleCollections)
                .map(([e, t]) => [e, t.dashItems])
                .reduce((e, [t, i]) => ((e[t] = i.length), e), {});
            },
            totalPinned() {
              return Object.values(this.pinnedCounts).reduce((e, t) => t + e);
            },
            sortedCollectionIds() {
              return Object.keys(this.pinnedCounts).sort((e, t) => this.pinnedCounts[e] - this.pinnedCounts[t]);
            },
            sortedCollections() {
              const e = {};
              return this.sortedCollectionIds.forEach((t) => (e[t] = this.visibleCollections[t])), e;
            },
            keepAddMetricVisible() {
              return this.popupActive && !this.selectedItem;
            },
            region() {
              return this.right + this.appWidth > window.innerWidth / 2 ? "top-left" : "top-right";
            }
          },
          watch: {
            allLoaded: {
              handler(e) {
                e &&
                  this.$nextTick(() => {
                    this.enableFadeTransitions = !0;
                  });
              },
              immediate: !0
            },
            "activeViewManager.confirmationOverlayProps.dashboardOverlay"(e) {
              e && b.Z.add(this.activeAppType, !0), (w.Z.dashboardOverlayActive = e);
            },
            popupActive(e) {
              e ? b.Z.add(this.activeAppType) : Object.keys(this.collections).forEach((e) => b.Z.remove(e));
            }
          },
          created() {
            Object.values(this.viewManagers).forEach((e) => e.$on("close", this.closeApp));
          },
          async mounted() {
            this.visibleCollections.length && (this.onAppContainerResize(), this.onDashItemsResize()),
              await this.$nextTick(),
              m.trigger("baseMetric:updated");
          },
          updated() {
            m.trigger("baseMetric:updated");
          },
          destroyed() {
            Object.values(this.viewManagers).forEach((e) => e.$off("close", this.closeApp));
          },
          methods: {
            onAppContainerResize({ width: e = this.$refs["base-metric"].clientWidth } = {}) {
              this.appContainerWidth = e;
            },
            onDashItemsResize({ width: e = this.$refs["dash-items"].clientWidth } = {}) {
              this.dashItemsWidth = e;
            },
            add(e) {
              if (this.activeViewManager && this.activeViewManager.confirmationOverlayActive) return;
              (this.activeAppType = e), (this.popupActive = !0), this.activeViewManager.showView("add");
              const t = this.collections[e];
              a.ax[t.visibleSetting] || (a.ax[t.visibleSetting] = !0),
                this.$nextTick(() => this.positionApp(this.$refs.add.$el.querySelector(".app-dash")));
            },
            toggleApp(e, t, i) {
              if (!this.activeViewManager || !this.activeViewManager.confirmationOverlayActive) {
                if (((this.activeAppType = e), this.popupActive)) {
                  if (i === this.selectedItem) return void this.closeApp();
                } else this.popupActive = !0;
                this.activeCollection.capture("app show"),
                  this.clearAllSelectedItems(),
                  i && (i.selected = !0),
                  t && this.positionApp(t.currentTarget);
              }
            },
            closeApp() {
              var e;
              this.clearAllSelectedItems(),
                null === (e = this.activeCollection) || void 0 === e || e.clearRecentlyChangedItems(),
                (this.popupActive = !1),
                (this.activeAppType = ""),
                (this.top = 0),
                (this.left = 0);
            },
            positionApp(e) {
              const t = e.getBoundingClientRect(),
                i = e.querySelector(".adjust"),
                n = this.$refs["base-metric"].getBoundingClientRect();
              (this.top = Math.round(t.bottom - (i ? i.clientHeight : 0) - n.top)),
                (this.right = Math.round(n.right - t.right + t.width / 2 - this.nippleDisplacement));
            },
            onClickOutside(e) {
              (e && e.target.closest(`[data-type=${this.activeCollection.nameLCP}]`)) || this.closeApp();
            },
            clearAllSelectedItems() {
              Object.values(this.collections).forEach((e) => e.clearSelectedItem());
            }
          }
        };
      function T(e) {
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            const s = e[n];
            t[n] = new d.Z({
              unreactive: () => ({ collection: s }),
              created() {
                let e = {
                  archive: {
                    order: 0,
                    onEsc: "list",
                    header: { title: "Archive", centerTitle: !0, buttonsRight: { back: "list" } },
                    body: {
                      name: "Archive",
                      component: M,
                      itemComponent: C,
                      filter: { id: "expired", emptyMessage: "No archived " + this.collection.nameLCP, func: (e) => e.archived }
                    },
                    beforeEnter: () => {
                      this.collection.refresh({ queryParams: { includeArchived: !0 } });
                    }
                  },
                  list: {
                    defaultView: !0,
                    order: 2,
                    header: {
                      title: s.nameCP,
                      icon: s.icon,
                      buttonsRight: {
                        add: { class: "add", dataTest: "add", action: "add", icon: i(76450), iconClass: "icon-plus" },
                        more: () => {
                          const e = [
                            {
                              label: "Show Archived",
                              icon: i(21552),
                              iconClass: "icon-archive",
                              dataTest: "show-archived",
                              action: () => this.showView("archive")
                            },
                            {
                              label: "Show Random",
                              toggle: !0,
                              object: a.ax,
                              property: "showRandomMetric-" + this.collection.nameCS,
                              capture: (e) => s.capture("show random toggle", { properties: { new_value: e } })
                            }
                          ];
                          return (
                            this.$admin &&
                              e.splice(1, 0, {
                                class: "team-admin",
                                dataTest: "go-to-team-admin",
                                label: this.collection.nameCP + " Admin",
                                icon: i(52682),
                                iconClass: "icon-settings",
                                action: () => {
                                  m.commandManager.execute("window.account.open", "/team/" + this.collection.type);
                                }
                              }),
                            e
                          );
                        }
                      }
                    },
                    body: {
                      component: M,
                      itemComponent: C,
                      name: s.nameCP,
                      filter: { id: "active", hasAddButton: !0, alwaysShow: !0, func: (e) => !e.archived }
                    }
                  },
                  edit: {
                    order: 4,
                    addView: !0,
                    onEsc: "list",
                    header: {
                      title: () => `${this.adding ? "Add " : "Edit "} ${s.nameLCS}`,
                      centerTitle: !0,
                      buttonsLeft: { back: "list" },
                      buttonsRight: () => {
                        if (this.adding) return null;
                        const e = this.activeItem.archived ? "unarchive" : "archive";
                        return {
                          more: [
                            {
                              label: () => m.utils.capitalizeFirstLetter(e),
                              dataTest: () => e,
                              icon: () => i(60604)(`./icon-${e}.svg`),
                              iconClass: () => "icon-" + e,
                              action: () => {
                                s[e](this.activeItem), this.showView("default");
                              }
                            },
                            { label: "Delete", icon: i(9241), iconClass: "icon-trash", dataTest: "delete", action: this.showDeleteConf }
                          ]
                        };
                      }
                    },
                    body: { component: I },
                    afterLeave: this.clearItem
                  }
                };
                s.modifyViewsObject && (e = s.modifyViewsObject(e, this)), (this.views = e);
              }
            });
          }),
          t
        );
      }
      const O = D;
      i(66020);
      const j = (0, u.Z)(O, s, [], !1, null, "69a409b2", null).exports,
        x = document.querySelector(".region.top-right"),
        E = document.createElement("div");
      x.appendChild(E), new n.Z({ render: (e) => e(j) }).$mount(E);
    },
    40531: (e, t, i) => {
      "use strict";
      i.d(t, { Fl: () => a, Jr: () => c, ax: () => r });
      var n = i(99437);
      const s = new n.Z.observable({}),
        a = new Proxy(s, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || n.Z.set(e, t, m.models.customization.getComputedSetting(t)), e[t]),
          set: () => (
            console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'), !1
          )
        }),
        o = new n.Z.observable({}),
        r = new Proxy(o, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || n.Z.set(e, t, m.models.customization.get(t)), e[t]),
          set: (e, t, i) => (m.models.customization.save(t, i), n.Z.set(e, t, i), !0)
        });
      function c(e = {}) {
        Object.entries(e).forEach(([e, t]) => n.Z.set(o, e, t)), m.models.customization.save(e);
      }
      m.models.customization.on("change", (e) => {
        e &&
          ("balanceModeStr" in e.changed && Object.entries(m.models.customization.attributes).forEach(([e, t]) => n.Z.set(s, e, t)),
          Object.entries(e.changed).forEach(([e, t]) => {
            (s[e] = m.models.customization.getComputedSetting(e)), n.Z.set(o, e, t);
          }));
      }),
        m.on("customization:update", (e) => {
          e.forEach((e) => {
            const t = m.models.customization.getComputedSetting(e);
            n.Z.set(s, e, t), n.Z.set(o, e, t);
          });
        });
    },
    30827: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => s });
      var n = i(99437);
      const s = (m.showAnyway = new (n.Z.extend({
        name: "ShowAnyway",
        data: () => ({ widgets: [] }),
        methods: {
          show(e) {
            this.includes(e) || this.widgets.push(e);
          },
          hide(e) {
            const t = this.widgets.indexOf(e);
            ~t && this.widgets.splice(t, 1);
          },
          includes(e) {
            return this.widgets.includes(e);
          }
        }
      }))());
    },
    65550: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      const n = new (i(20144).ZP.extend({
        name: "GlobalKeyEventManager",
        data: () => ({ events: {} }),
        methods: {
          registerEventListener(e, t, i, n) {
            Object.prototype.hasOwnProperty.call(this.events, t)
              ? Object.prototype.hasOwnProperty.call(this.events[t], i) || (this.events[t][i] = [])
              : ((this.events[t] = {}), (this.events[t][i] = []), this._addListener(t)),
              this.events[t][i].push({ id: e, handler: n });
          },
          removeEventListener(e, t, i) {
            if (!Object.prototype.hasOwnProperty.call(this.events, t))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with event type: ${t} to remove`));
            if (!Object.prototype.hasOwnProperty.call(this.events[t], i))
              return void (m.utils.isDev() && console.warn(`No event listeners registered with keyCode: ${i} to remove`));
            let n = this.events[t][i].findIndex((t) => t.id === e);
            -1 !== n
              ? (this.events[t][i].splice(n, 1), this._cleanupIfEmpty(t, i))
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
    22744: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var n = i(8081),
        s = i.n(n),
        a = i(23645),
        o = i.n(a)()(s());
      o.push([
        e.id,
        '\n/* stylelint-disable */\n/* ## Base Metric Flex Layout\n\n\tTESTING CHANGES:\n\n\tSetup\n\t- Ensure you are logged into a team account with topics, apps, and a team logo.\n\t- Ensure you have search and both dashlinks enabled (Chrome tab and Apps).\n\t- Ensure you have several pinned links in tile mode\n\t- Ensure you have quite a few pinned metrics, at least 2 of each type and aim for around 20 or so total\n\t- Make at least 1 of each type of metric pinned with a long enough name that it wraps.\n\n\tTest Cases\n\t- "add-metric" and "search" should never overlap\n\t- Weather should never be pushed offscreen or overlap with metrics\n\n\t- When screen is wide enough to fit all of the metrics in one row:\n\t\t- The metrics should not wrap\n\t\t- All metrics and "add metric" should be right aligned\n\t\t- There should be no excess space between any metrics\n\n\t- As the screen narrows and there is not enough room for everything in the top row\n\t\t- Metrics will start wrapping and the links carousel should start shrinkin\n\t\t- Which one happens first will depend on how many pinned links vs pinned metrics you have\n\n\t- Once metrics have wrapped to their fullest extent, they should be converted into icons\n\t\t- If you expand the screen again, the icons will stick around a bit longer than necessary since they won\'t\n\t\tcompete for as much space, but if you reload the tab with enough room for the pinned metrics to fit on screen,\n\t\tthen the icons should not render.\n*/\n.base-metric[data-v-69a409b2] { min-width: 0; flex: 0 1 100%; display: flex; justify-content: flex-end;\n}\n.dash-items[data-v-69a409b2] { min-width: min-content; flex: 0 1 auto; display: flex; align-items: flex-start; justify-content: flex-end;\n}\n.icons-only .pinned-items[data-v-69a409b2] { position: absolute; visibility: hidden; pointer-events: none; width: min-content;\n}\n.add-metric[data-v-69a409b2] { min-width: max-content; flex: 0 0 auto; order: 0;\n}\n.metric-type[data-v-69a409b2] { flex: 0 1 auto; display: inline-flex; align-items: flex-start; justify-content: flex-end; flex-wrap: wrap;\n}\n[data-v-69a409b2] .metric-item { padding: 11px var(--dash-metric-side-padding) 10px;\n}\n\n\n\t/* Items Overrides */\n.app[data-v-69a409b2] .add-button-wrapper { margin-bottom: calc((var(--app-padding) * -1) + 6px); padding-bottom: var(--app-padding); position: absolute;\n}\n.app[data-v-69a409b2] .items { overflow: hidden;\n}\n.app[data-v-69a409b2] .inline-modal-wrapper { border-radius: 0;\n}\n.app[data-v-69a409b2] .save-button-container .button-save { min-width: auto;\n}\n.app[data-v-69a409b2] .confirmation-wrapper { flex-direction: row; justify-content: flex-end;\n}\n.app[data-v-69a409b2] .confirm .button { min-width: 0; padding-right: 18px; padding-left: 18px;\n}\n.app[data-v-69a409b2] .metric-section h2 { font-size: 20px;\n}\n.app[data-v-69a409b2] .form-row.path { margin-bottom: 0;\n}\n[data-v-69a409b2] .dropdown { margin-top: 3px;\n}\n@media screen and (max-width: 450px) {\n.base-metric .app-dash-icon[data-v-69a409b2] { margin-top: 1px; padding-right: 9px !important; padding-left: 9px !important;\n}\n.base-metric[data-v-69a409b2] .pin { display: none;\n}\n}\n',
        ""
      ]);
      const r = o;
    },
    84416: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var n = i(8081),
        s = i.n(n),
        a = i(23645),
        o = i.n(a)()(s());
      o.push([
        e.id,
        "\n/* stylelint-disable */\n.adjust[data-v-54f09554] { display: flex; align-items: center; justify-content: flex-end; opacity: 0;\n}\n.app-dash .adjust[data-v-54f09554] { margin: 0 -5px;\n}\n.app-dash:hover .adjust[data-v-54f09554], .list-row:hover .adjust[data-v-54f09554] { opacity: 1;\n}\n.app-dash .icon-wrapper .icon[data-v-54f09554] { opacity: 1;\n}\n.icon-add[data-v-54f09554] { height: 17px;\n}\n.icon-subtract[data-v-54f09554] { height: 2px; width: 17px;\n}\n",
        ""
      ]);
      const r = o;
    },
    57510: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var n = i(8081),
        s = i.n(n),
        a = i(23645),
        o = i.n(a)()(s());
      o.push([
        e.id,
        "\n/* stylelint-disable */\n/* .app-dash z-index: should display above center region but under metrics app */\n.app-dash[data-v-021c0a18] { position: relative; z-index: 1; cursor: pointer;\n}\n.metric-label .icon[data-v-021c0a18] { height: 12px; margin-right: 4px;\n}\n.adjust[data-v-021c0a18] { transition: opacity 0.2s ease;\n}\n",
        ""
      ]);
      const r = o;
    },
    2445: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          {
            staticClass: "adjust",
            on: {
              click: function (e) {
                e.stopPropagation();
              }
            }
          },
          [
            t(
              "div",
              {
                staticClass: "icon-wrapper",
                on: {
                  click: function (t) {
                    return e.adjust(t, -1);
                  }
                }
              },
              [t("inline-svg", { staticClass: "icon icon-subtract", attrs: { src: i(59328) } })],
              1
            ),
            e._v(" "),
            t(
              "div",
              {
                staticClass: "icon-wrapper",
                on: {
                  click: function (t) {
                    return e.adjust(t, 1);
                  }
                }
              },
              [t("inline-svg", { staticClass: "icon icon-add", attrs: { src: i(80768) } })],
              1
            )
          ]
        );
      };
      n._withStripped = !0;
      const s = {
        name: "MetricAdjust",
        mixins: [i(42223).Z],
        props: {
          item: { type: Object, required: !0 },
          collection: { type: Object, required: !0 },
          location: { type: String, required: !0 }
        },
        methods: {
          adjust(e, t) {
            e.metaKey && (t *= 100),
              e.shiftKey && (t *= 10),
              this.collection.adjust(this.item, t).then(() => {
                this.collection.capture(`metric ${t > 0 ? "in" : "de"}crement`, { properties: { location: this.location } });
              });
          }
        }
      };
      i(74615);
      const a = (0, i(51900).Z)(s, n, [], !1, null, "54f09554", null).exports;
    },
    66020: (e, t, i) => {
      var n = i(22744);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, i(45346).Z)("6c55a4ba", n, !1, { ssrId: !0 });
    },
    74615: (e, t, i) => {
      var n = i(84416);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, i(45346).Z)("9a243c96", n, !1, { ssrId: !0 });
    },
    33663: (e, t, i) => {
      var n = i(57510);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, i(45346).Z)("050c8973", n, !1, { ssrId: !0 });
    },
    60604: (e, t, i) => {
      var n = {
        "./icon-add-circle-clear.svg": 44561,
        "./icon-add-circle.svg": 80768,
        "./icon-add-member.svg": 86587,
        "./icon-alert.svg": 63741,
        "./icon-announcement.svg": 79715,
        "./icon-apple.svg": 63374,
        "./icon-apps.svg": 32652,
        "./icon-archive.svg": 21552,
        "./icon-arrow.svg": 12031,
        "./icon-back-arrow.svg": 97510,
        "./icon-back.svg": 86043,
        "./icon-bottom-link.svg": 33254,
        "./icon-check-green.svg": 70354,
        "./icon-check.svg": 32913,
        "./icon-chrome.svg": 58757,
        "./icon-circle.svg": 35966,
        "./icon-clocks.svg": 25980,
        "./icon-close.svg": 21794,
        "./icon-cog.svg": 66262,
        "./icon-countdowns.svg": 16647,
        "./icon-dislike-light.svg": 38033,
        "./icon-dislike.svg": 40738,
        "./icon-down-light.svg": 65733,
        "./icon-down.svg": 75356,
        "./icon-edge.svg": 82749,
        "./icon-edit.svg": 13228,
        "./icon-ellipsis.svg": 49710,
        "./icon-error-state.svg": 58037,
        "./icon-external-link.svg": 58607,
        "./icon-heart-empty.svg": 18514,
        "./icon-heart.svg": 57950,
        "./icon-help.svg": 16963,
        "./icon-hide.svg": 41226,
        "./icon-key.svg": 18089,
        "./icon-lock.svg": 94784,
        "./icon-log-in.svg": 45818,
        "./icon-menu.svg": 21121,
        "./icon-metrics.svg": 6869,
        "./icon-next.svg": 67200,
        "./icon-pause.svg": 22673,
        "./icon-percent.svg": 94411,
        "./icon-pin-empty-light.svg": 99024,
        "./icon-pin-empty.svg": 57905,
        "./icon-pin-light.svg": 64651,
        "./icon-pin.svg": 25301,
        "./icon-play.svg": 60786,
        "./icon-plus.svg": 76450,
        "./icon-pointer.svg": 27331,
        "./icon-pomodoro.svg": 38801,
        "./icon-profile.svg": 10575,
        "./icon-refresh.svg": 6056,
        "./icon-restore.svg": 78075,
        "./icon-settings.svg": 52682,
        "./icon-skip-intro.svg": 73555,
        "./icon-skip.svg": 75667,
        "./icon-subtract.svg": 59328,
        "./icon-tooltip.svg": 95598,
        "./icon-topics.svg": 50162,
        "./icon-trash.svg": 9241,
        "./icon-twitter.svg": 24405,
        "./icon-unarchive.svg": 84595,
        "./icon-visible-off.svg": 17952,
        "./icon-visible-on.svg": 38589,
        "./icon-weather-reset.svg": 38988,
        "./icon-x-caret-half.svg": 5724
      };
      function s(e) {
        var t = a(e);
        return i(t);
      }
      function a(e) {
        if (!i.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (s.keys = function () {
        return Object.keys(n);
      }),
        (s.resolve = a),
        (e.exports = s),
        (s.id = 60604);
    },
    63741: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgPjxwYXRoIGQ9Ik0xMiAwQzUuMzczIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDB6bTAgMTkuNjZjLS45MzggMC0xLjU4LS43MjMtMS41OC0xLjY2IDAtLjk2NC42NjktMS42NiAxLjU4LTEuNjYuOTYzIDAgMS41OC42OTYgMS41OCAxLjY2IDAgLjkzOC0uNjE3IDEuNjYtMS41OCAxLjY2em0uNjIyLTYuMzM5Yy0uMjM5LjgxNS0uOTkyLjgyOS0xLjI0MyAwLS4yODktLjk1Ni0xLjMxNi00LjU4NS0xLjMxNi02Ljk0MiAwLTMuMTEgMy44OTEtMy4xMjUgMy44OTEgMC0uMDAxIDIuMzcxLTEuMDgzIDYuMDk0LTEuMzMyIDYuOTQyeiIvPjwvc3ZnPgo=";
    },
    49710: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    },
    9241: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyNCI+PHBhdGggZD0iTTE5LjE1IDcuNUgyLjgzOGEuNS41IDAgMCAwLS41LjVsMS44MSAxNGEyIDIgMCAwIDAgMiAyaDkuOTU0YTIgMiAwIDAgMCAyLTJMMTkuNjUgOGEuNS41IDAgMCAwLS41LS41em0tOS45IDEzYS43NS43NSAwIDAgMS0xLjUgMHYtOWEuNzUuNzUgMCAwIDEgMS41IDB2OXptNSAwYS43NS43NSAwIDAgMS0xLjUgMHYtOWEuNzUuNzUgMCAwIDEgMS41IDB2OXpNMjAuNDMgNGgtNC4xOGEuMjUuMjUgMCAwIDEtLjI1LS4yNVYyLjVBMi41IDIuNSAwIDAgMCAxMy41IDBoLTVBMi41IDIuNSAwIDAgMCA2IDIuNXYxLjI1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTQuNWExIDEgMCAwIDAgMCAyaDE5LjE4YTEgMSAwIDAgMCAwLTJ6TTggMy43NVYyLjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXYxLjI1YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTUuNUEuMjUuMjUgMCAwIDEgOCAzLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+Cg==";
    }
  }
]);
