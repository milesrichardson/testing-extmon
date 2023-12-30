(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [141],
  {
    40063: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => a });
      let n = {};
      const a = {
        bind: function (e, t) {
          let i, a;
          (e.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              e.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const o = (e) => {
              (a = !1), ((e) => e && e.clientX > window.innerWidth)(e) ? (a = !0) : (i = e.target);
            },
            s = (n) => {
              a ||
                ((t.modifiers.bubble ||
                  (!e.contains(i) &&
                    !e.contains(n.target) &&
                    e !== i &&
                    e !== n.target &&
                    "true" !== e.dataset.justBoundClickOutsideHandler)) &&
                  t.value(n));
            };
          (e.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (e.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (n[e.dataset.clickOutsideMouseupHandlerId] = s),
            (n[e.dataset.clickOutsideMousedownHandlerId] = o),
            document.addEventListener("mouseup", s),
            document.addEventListener("mousedown", o);
        },
        unbind: function (e) {
          var t, i;
          null !== (t = e.dataset) &&
            void 0 !== t &&
            t.clickOutsideMouseupHandlerId &&
            null !== (i = e.dataset) &&
            void 0 !== i &&
            i.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", n[e.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", n[e.dataset.clickOutsideMousedownHandlerId]),
            delete n[e.dataset.clickOutsideMouseupHandlerId],
            delete n[e.dataset.clickOutsideMousedownHandlerId],
            delete e.dataset.clickOutsideMouseupHandlerId,
            delete e.dataset.clickOutsideMousedownHandlerId,
            delete e.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    18267: (e, t, i) => {
      "use strict";
      function n({ appKey: e, hideEvents: t, closeFunctionName: i, eventTriggerProperty: n }) {
        return {
          created() {
            e && t && i && n
              ? (this.$watch(n, (i) => {
                  i && t.forEach((t) => m.trigger(t, e));
                }),
                t.forEach((e) => {
                  m.on(e, this.onHideEvent);
                }))
              : console.warn(
                  "Missing hideEventsMixin Arguments: ",
                  e ? "" : "appKey",
                  t ? "" : "hideEvents",
                  i ? "" : "closeFunctionName",
                  n ? "" : "eventTriggerProperty"
                );
          },
          destroyed() {
            t.forEach((e) => {
              m.off(e, this.onHideEvent);
            });
          },
          methods: {
            onHideEvent(t) {
              t !== e && this[i]();
            }
          }
        };
      }
      i.d(t, { Z: () => n });
    },
    30141: (e, t, i) => {
      "use strict";
      i.r(t);
      var n = i(99437),
        a = function () {
          var e = this,
            t = e._self._c;
          return t(
            "app-container",
            {
              directives: [{ name: "click-outside", rawName: "v-click-outside", value: e.closePopup, expression: "closePopup" }],
              attrs: {
                "visible-setting": "weatherVisible",
                "app-name": "weather",
                hotkey: "W",
                "data-test": "weather",
                overlay: e.popupActive
              },
              on: { toggle: e.togglePopupAndCaptureIfOpen }
            },
            [
              t(
                "app-dash",
                {
                  staticClass: "metric-item",
                  on: {
                    click: function (t) {
                      return e.togglePopupAndCaptureIfOpen({ source: "click" });
                    }
                  }
                },
                [
                  t("div", { staticClass: "metric-stat" }, [
                    t("div", { staticClass: "current-icon" }, [t("inline-svg", { staticClass: "icon", attrs: { src: e.svgIcon } })], 1),
                    e._v(" "),
                    e.conditions
                      ? t("div", { staticClass: "current-temp", attrs: { "data-test": "temperature" } }, [
                          e._v("\n\t\t\t\t" + e._s(e.conditions.now.temperature + "°") + "\n\t\t\t")
                        ])
                      : e._e()
                  ]),
                  e._v(" "),
                  t("div", { staticClass: "metric-label" }, [
                    t("span", { staticClass: "metric-label-name", attrs: { "data-test": "location" } }, [e._v(e._s(e.location))])
                  ])
                ]
              ),
              e._v(" "),
              t(
                "transition",
                { attrs: { name: "slide-down-fade" } },
                [e.popupActive ? t("weather-app", { on: { close: e.closePopup } }) : e._e()],
                1
              )
            ],
            1
          );
        };
      a._withStripped = !0;
      var o = i(40063),
        s = i(29505),
        r = i(40531),
        d = i(4623),
        l = i(94828),
        c = i(30827),
        u = i(81405),
        h = i(18267),
        p = i(48494);
      const g = (0, i(95756).v)("weather", { app: { defaultView: !0, order: 1 } });
      var w = i(28692);
      const v = new u.ZP({ feature: "weather" }),
        f = {
          name: "Weather",
          components: {
            WeatherApp: () => Promise.all([i.e(3418), i.e(3068)]).then(i.bind(i, 23068)),
            AppDash: l.Z,
            AppContainer: d.default
          },
          directives: { ClickOutside: o.Z },
          mixins: [
            (0, h.Z)({
              appKey: "weather",
              hideEvents: ["globalEvent:toggle:bottom-left", "globalEvent:toggle:bottom-right", "globalEvent:toggle:top-right"],
              closeFunctionName: "closeApp",
              eventTriggerProperty: "popupActive"
            })
          ],
          mixins: [(0, p.Z)({ useViewStateStore: g, analytics: v })],
          provide() {
            return { viewStateStore: this.weatherViewStateStore };
          },
          computed: {
            conditions: () => s.Z.conditions,
            location: () => s.Z.locationName || "Weather",
            svgIcon() {
              var e, t;
              return (null === (e = this.conditions) || void 0 === e || null === (t = e.now) || void 0 === t ? void 0 : t.icon) || i(64419);
            },
            weatherVisible: () => r.Fl.weatherVisible,
            showAnyway: () => c.Z.includes("weather"),
            ...(0, w.Kc)(g)
          },
          watch: {
            popupActive(e) {
              s.Z.setDetailLevel(this.$plus && e);
            }
          },
          mounted() {
            m.widgetManager.appReady("weather");
          }
        };
      i(93777);
      const y = (0, i(51900).Z)(f, a, [], !1, null, "1ebbfa5f", null).exports,
        b = document.querySelector(".region.top-right"),
        S = document.createElement("div");
      b.prepend(S), new n.Z({ render: (e) => e(y) }).$mount(S);
    },
    29505: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => b });
      var n = i(20144);
      const a = {
          tornado: "wind",
          tropicalStorm: "wind",
          hurricane: "wind",
          severeThunderstorm: "severeStorm",
          thunderstorm: "storm",
          mixedRainAndSnow: "hail",
          drizzle: "drizzle",
          rain: "rain",
          freezingRain: "hail",
          showers: "drizzle",
          sunnyShowers: "drizzle",
          snowFlurries: "lightSnow",
          snow: "snow",
          hail: "hail",
          sleet: "hail",
          dust: "fog",
          foggy: "fog",
          haze: "fog",
          smoky: "fog",
          blustery: "wind",
          windy: "wind",
          cold: "cold",
          cloudy: "cloudy",
          mostlyCloudyNight: "cloudyNight",
          mostlyCloudyDay: "cloudyDay",
          partlyCloudyNight: "cloudyNight",
          partlyCloudyDay: "cloudyDay",
          clearNight: "clearNight",
          clearDay: "clearDay",
          scatteredThunderstorm: "storm",
          scatteredShowers: "drizzle",
          heavySnow: "snow",
          thundershowers: "storm",
          snowShowers: "snow",
          unknown: "unknown"
        },
        o = {
          speed: { metricToImperial: 0.62137, imperialToMetric: 1.60934 },
          pressure: { metricToImperial: 0.02953, imperialToMetric: 33.86309 },
          shortLength: { metricToImperial: 0.03937, imperialToMetric: 25.4 },
          longLength: { metricToImperial: 0.62137, imperialToMetric: 1.60934 }
        };
      var s = i(40531);
      function r(e, t) {
        return t ? Math.round((5 * (e - 32)) / 9) : e;
      }
      function d(e, t, i) {
        const n = i
          ? { pressure: "kPa", speed: "km/h", shortLength: "mm", longLength: "km" }
          : { pressure: "inHg", speed: "mph", shortLength: "in", longLength: "mi" };
        return i ? Math.round(t * o[e].imperialToMetric) + " " + n[e] : Math.round(t) + " " + n[e];
      }
      function l(e) {
        return i(98346)(`./${a[e]}.svg`);
      }
      function c(e) {
        return (
          (e = parseInt(e.substr(e.indexOf("T") + 1, 2))),
          s.ax.hour12clock ? (e > 12 ? e - 12 : 0 === e ? 12 : e) + (e < 12 ? "AM" : "PM") : e + ""
        );
      }
      function u(e) {
        let t = { rain: e.rainProbability, ice: e.iceProbability, snow: e.snowProbability },
          i = "rain",
          n = 0;
        return (
          Object.entries(t).forEach(([e, t]) => {
            t > n && ((i = e), (n = t));
          }),
          { type: m.utils.capitalizeWords(i), chance: n }
        );
      }
      class h {
        constructor(e, t) {
          e &&
            e.now &&
            ((this.metric = "f" !== t),
            (this.location = e.location),
            (this.now = Object.assign({}, e.now, {
              temperature: r(e.now.temperature, this.metric),
              icon: l(e.now.code),
              apparentTemperature: r(e.now.apparentTemperature, this.metric),
              windGust: d("speed", e.now.windGust, this.metric),
              windSpeed: d("speed", e.now.windSpeed, this.metric),
              precipitationType: e.now.hasPrecipitation ? e.now.precipitationType : "Rain",
              precipAmount6Hours: d("shortLength", e.now.precipAmount6Hours, this.metric)
            })));
        }
      }
      class p extends h {
        constructor(e, t) {
          super(e, t),
            e &&
              e.now &&
              ((this.now = Object.assign({}, e.now, this.now, {
                precipAmount: d("shortLength", e.now.precipAmount, this.metric),
                temperature: r(e.now.temperature, this.metric),
                visibility: d("longLength", e.now.visibility, this.metric),
                sunrise: e.now.sunrise ? m.utils.getHoursMinsStr(new Date(e.now.sunrise)) : "AM",
                sunset: e.now.sunset ? m.utils.getHoursMinsStr(new Date(e.now.sunset)) : "PM",
                pressure: d("pressure", parseFloat(e.now.pressure), this.metric),
                pressureChanging: "Steady" !== e.now.pressureTendency,
                pressureRotation: "Falling" === e.now.pressureTendency ? 180 : 0,
                precipitationChance: u(e.now)
              })),
              e.hours &&
                e.days &&
                ((this.hours = e.hours.map((e) =>
                  Object.assign({}, e, {
                    apparentTemperature: r(e.apparentTemperature, this.metric),
                    temperature: r(e.temperature, this.metric),
                    windGust: d("speed", e.windGust, this.metric),
                    windSpeed: d("speed", e.windSpeed, this.metric),
                    icon: l(e.code),
                    hour: c(e.hour)
                  })
                )),
                (this.days = e.days.map((e) =>
                  Object.assign({}, e, {
                    apparentHigh: r(e.apparentHigh, this.metric),
                    apparentLow: r(e.apparentLow, this.metric),
                    high: r(e.high, this.metric),
                    low: r(e.low, this.metric),
                    windGust: d("speed", e.windGust, this.metric),
                    windSpeed: d("speed", e.windSpeed, this.metric),
                    icon: l(e.code),
                    precipitationChance: u(e)
                  })
                ))));
        }
      }
      var g = i(96046);
      const w = "weather:forecast",
        v = "weather:location",
        f = "baseLastUpdated",
        y = "weather:nextUpdate",
        b = new (n.ZP.extend({
          name: "WeatherDataService",
          data: () => ({
            conditionsRaw: localStorage.getObject(w),
            manualLocation: localStorage.getObject(v),
            detailed: !1,
            noConnection: !1,
            loading: !1
          }),
          unreactive: () => ({ refreshTimeoutId: null }),
          computed: {
            conditions() {
              return this.conditionsRaw ? new (this.detailed ? p : h)(this.conditionsRaw, s.ax.temperatureUnit) : null;
            },
            locationName() {
              var e, t;
              return (
                (null === (e = this.manualLocation) || void 0 === e ? void 0 : e.shortName) ||
                (null === (t = this.conditions) || void 0 === t ? void 0 : t.location.locationName)
              );
            },
            tabVisible: () => g.Z.tabVisible
          },
          watch: {
            conditionsRaw(e) {
              e && localStorage.setObject(w, e), this.setRefreshTimeout();
            },
            tabVisible(e) {
              e ? this.setRefreshTimeout() : clearTimeout(this.refreshTimeoutId);
            },
            detailed(e) {
              e && this.refreshIfOutdated();
            }
          },
          created() {
            !(function () {
              const e = localStorage.getObject("weather-manual");
              e &&
                (localStorage.setObject("weather:location", {
                  latitude: e.latitude,
                  longitude: e.longitude,
                  name: e.locationName,
                  shortName: e.locationName
                }),
                localStorage.removeItem("weather-manual")),
                localStorage.removeItem("weather");
            })(),
              window.addEventListener("storage", this.onStorageEvent),
              this.setRefreshTimeout();
          },
          methods: {
            setLocation(e) {
              JSON.stringify(this.manualLocation) !== JSON.stringify(e) &&
                (e ? localStorage.setObject(v, e) : localStorage.removeItem(v), (this.manualLocation = e), this.refreshFromServer());
            },
            setDetailLevel(e) {
              this.detailed = e;
            },
            onStorageEvent(e) {
              const t = (e) => e && JSON.parse(e);
              if ((null == e ? void 0 : e.key) === w && null != e && e.newValue) {
                var i;
                const n = t(e.newValue);
                n[f] > ((null === (i = this.conditionsRaw) || void 0 === i ? void 0 : i[f]) || 0) && (this.conditionsRaw = n);
              } else (null == e ? void 0 : e.key) === v && (this.manualLocation = t(e.newValue));
            },
            getLastUpdated() {
              const e = localStorage.getObject(w);
              return e ? parseInt(e[this.detailed ? "detailLastUpdated" : f] || 0) : 0;
            },
            getTimeToNextUpdate() {
              const e = parseInt(localStorage.getItem(y)),
                t = Date.now(),
                i = 18e5 - (t - this.getLastUpdated());
              return e ? Math.max(e - t, i, 0) : Math.max(i, 0);
            },
            refreshIfOutdated() {
              this.getTimeToNextUpdate() <= 0 && this.tabVisible && this.refreshFromServer();
            },
            setRefreshTimeout() {
              clearTimeout(this.refreshTimeoutId), (this.refreshTimeoutId = setTimeout(this.refreshIfOutdated, this.getTimeToNextUpdate()));
            },
            async refreshFromServer() {
              const e = this.detailed;
              if (this.loading) return;
              this.loading = !0;
              let t = "weather/" + (e ? "forecast" : "current");
              this.manualLocation && (t += `?lat=${this.manualLocation.latitude}&lon=${this.manualLocation.longitude}`);
              try {
                const { data: i } = await this.$xhr.get(t),
                  n = Date.now();
                (i[f] = n),
                  e && (i.detailLastUpdated = n),
                  localStorage.removeItem(y),
                  (this.conditionsRaw = Object.assign({}, this.conditionsRaw || {}, i)),
                  (this.noConnection = !1);
              } catch (e) {
                console.error(e);
                const t = e.response;
                t && 429 === t.status && t.headers["retry-after"]
                  ? (localStorage.setItem(y, Date.now() + 1e3 * parseInt(t.headers["retry-after"])), this.setRefreshTimeout())
                  : (this.noConnection = !0);
              } finally {
                this.loading = !1;
              }
            }
          }
        }))();
    },
    6496: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      var n = i(8081),
        a = i.n(n),
        o = i(23645),
        s = i.n(o)()(a());
      s.push([
        e.id,
        "\n/* stylelint-disable */\n.app-container[data-v-1ebbfa5f] { order: 0; align-self: flex-start;\n}\n.app-dash[data-v-1ebbfa5f] { line-height: normal;\n}\n.metric-label[data-v-1ebbfa5f] { white-space: nowrap;\n}\n.metric-stat[data-v-1ebbfa5f] { display: flex; align-items: baseline; justify-content: flex-end;\n}\n.current-icon[data-v-1ebbfa5f] { margin-right: 6px;\n}\n.icon[data-v-1ebbfa5f] { --icon-size: 25px; display: block;\n}\n",
        ""
      ]);
      const r = s;
    },
    93777: (e, t, i) => {
      var n = i(6496);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, i(45346).Z)("18da8300", n, !1, { ssrId: !0 });
    },
    98346: (e, t, i) => {
      var n = {
        "./clearDay.svg": 92123,
        "./clearNight.svg": 45378,
        "./cloudy.svg": 41917,
        "./cloudyDay.svg": 64419,
        "./cloudyNight.svg": 41614,
        "./cold.svg": 12035,
        "./drizzle.svg": 14504,
        "./fog.svg": 22958,
        "./hail.svg": 74396,
        "./lightSnow.svg": 67312,
        "./rain.svg": 38951,
        "./severeStorm.svg": 55677,
        "./snow.svg": 42798,
        "./storm.svg": 57570,
        "./unknown.svg": 29964,
        "./wind.svg": 36826
      };
      function a(e) {
        var t = o(e);
        return i(t);
      }
      function o(e) {
        if (!i.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (a.keys = function () {
        return Object.keys(n);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 98346);
    }
  }
]);
