(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6588, 9437, 7449, 4541],
  {
    99437: (t, a, e) => {
      "use strict";
      e.d(a, { Z: () => g });
      var s = e(20144),
        o = e(88026),
        i = e(51726),
        n = e.n(i),
        r = e(34952),
        d = e(7838),
        c = e(35174);
      let u = {};
      const l = {
        bind: function (t, a) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (u[t.dataset.mobileClickHandlerId] = a.value),
            t.addEventListener("click", a.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", u[t.dataset.mobileClickHandlerId]),
            delete u[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var p = e(28692),
        M = e(64398),
        L = e(77197);
      s.ZP.use(o.Z, { name: "unreactive" }),
        s.ZP.use(n()),
        s.ZP.use(r.InlineSvgPlugin),
        s.ZP.use(p.og),
        s.ZP.use(L.Z),
        (s.ZP.prototype.$xhr = c.Z),
        (s.ZP.prototype.$e = d.Z),
        s.ZP.directive("mobile-click", l),
        new s.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        s.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: M.Z
        });
      const g = s.ZP;
    },
    16588: (t, a, e) => {
      "use strict";
      e.r(a);
      var s = e(99437),
        o = function () {
          var t = this,
            a = t._self._c;
          return a(
            "div",
            { staticClass: "app-container photo-info", on: { mouseenter: t.admireOnHover, mouseleave: t.stopAdmire } },
            [
              a("transition", { attrs: { name: "fade", mode: "out-in" }, on: { enter: t.onEnter } }, [
                a(
                  "div",
                  {
                    directives: [
                      {
                        name: "mobile-click",
                        rawName: "v-mobile-click",
                        value: t.toggleToastMenu.bind(null, !0),
                        expression: "toggleToastMenu.bind(null, true)"
                      }
                    ],
                    key: t.background.id,
                    staticClass: "app-dash",
                    class: {
                      "show-hover": t.background.unsplash || t.admiring,
                      "add-shadow": t.admiring,
                      "show-anyway": t.admiring,
                      "hotkey-hover": t.admiring
                    }
                  },
                  [
                    a("div", { staticClass: "title" }, [t._v(t._s(t.background.title || "Untitled"))]),
                    t._v(" "),
                    a("div", { staticClass: "source" }, [
                      t.background.source
                        ? a("span", { staticClass: "source-link", attrs: { "data-url": t.background.url }, on: { click: t.clickSource } }, [
                            t._v(t._s(t.background.source))
                          ])
                        : t._e(),
                      t._v(" "),
                      t.$touch
                        ? t._e()
                        : a(
                            "span",
                            { on: { mouseenter: t.stopAdmire } },
                            t._l(t.controls, function (e, s) {
                              return a(
                                "span",
                                {
                                  key: s,
                                  class: t.access(e.class),
                                  attrs: { title: t.access(e.tooltip) || t.access(e.label) },
                                  on: {
                                    mouseenter: function (a) {
                                      return t.access(e.hover);
                                    },
                                    click: e.action
                                  }
                                },
                                [
                                  a("inline-svg", { staticClass: "icon", class: e.iconClass, attrs: { src: t.access(e.icon) } }),
                                  t._v(" "),
                                  t.access(e.showLabel) ? a("span", [t._v(t._s(t.access(e.label)))]) : t._e()
                                ],
                                1
                              );
                            }),
                            0
                          )
                    ])
                  ]
                )
              ]),
              t._v(" "),
              t.$touch
                ? a(
                    "toast-menu",
                    {
                      attrs: { active: t.toastMenuActive, "section-title": "Photo Actions" },
                      on: { toggle: t.toggleToastMenu },
                      scopedSlots: t._u(
                        [
                          t.background.title || t.background.source
                            ? {
                                key: "header",
                                fn: function () {
                                  return [
                                    a("div", { staticClass: "toast-title" }, [t._v(t._s(t.background.title))]),
                                    t._v(" "),
                                    t.background.source
                                      ? a(
                                          "div",
                                          {
                                            staticClass: "toast-source",
                                            attrs: { "data-url": t.background.url },
                                            on: { click: t.clickSource }
                                          },
                                          [t._v(t._s(t.background.source))]
                                        )
                                      : t._e()
                                  ];
                                },
                                proxy: !0
                              }
                            : null
                        ],
                        null,
                        !0
                      )
                    },
                    [
                      t._v(" "),
                      t._l(t.controls, function (e, s) {
                        return a(
                          "dropdown-option",
                          {
                            key: s,
                            class: t.access(e.class),
                            nativeOn: {
                              click: function (t) {
                                return e.action.apply(null, arguments);
                              }
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "icon",
                                  fn: function () {
                                    return [a("inline-svg", { staticClass: "icon", class: t.access(e.iconClass), attrs: { src: e.icon } })];
                                  },
                                  proxy: !0
                                }
                              ],
                              null,
                              !0
                            )
                          },
                          [t._v("\n\t\t\t" + t._s(t.access(e.label)) + "\n\t\t")]
                        );
                      })
                    ],
                    2
                  )
                : t._e()
            ],
            1
          );
        };
      o._withStripped = !0;
      var i = e(97449),
        n = e(84541);
      function r() {
        const t = m.models.backgroundManager.getActiveItem();
        return t
          ? {
              id: t.get("_id") || t.get("id"),
              title: t.get("title"),
              source: t.get("source"),
              fav: t.get("is_favorite"),
              url: t.get("sourceUrl"),
              unsplash: t.get("sourceUrl") && t.get("sourceUrl").includes("unsplash"),
              destination: t.get("destination_name"),
              custom: !!t.get("isCustom")
            }
          : {};
      }
      const d = new (e(81405).ZP)({ feature: "photos" }),
        c = {
          name: "BackgroundInfo",
          components: { DropdownOption: n.default, ToastMenu: i.default },
          data: () => ({ toastMenuActive: !1, background: r(), skipping: !1, admiring: !1 }),
          unreactive: () => ({ admireTimeoutId: null, debounedHover: null }),
          computed: {
            controls() {
              return {
                favorite: {
                  icon: e(57950),
                  label: () => (this.background.fav ? "Unfavorite" : "Favorite"),
                  action: () => this.toggleFavorite(),
                  class: () => ["favorite", { active: this.background.fav, control: !this.$touch }],
                  iconClass: "icon-heart"
                },
                skip: {
                  icon: e(75667),
                  label: "Skip",
                  action: () => this.skipBackground(),
                  class: () => ["skip", { active: this.skipping, control: !this.$touch }],
                  iconClass: "icon-skip"
                }
              };
            }
          },
          created() {
            m.models.activeBackground.on("background:successfullyLoaded", this.setActiveBackground),
              m.on("photoDetailsChanged", this.updatePhotoDetails),
              m.on("backgroundInfo:admire:start", this.admire),
              m.on("backgroundInfo:admire:stop", this.stopAdmire),
              m.on("globalEvent:windowBlur", this.stopAdmire);
          },
          mounted() {
            m.widgetManager.appReady("background-info");
          },
          destroyed() {
            m.models.activeBackground.off("background:successfullyLoaded", this.setActiveBackground),
              m.off("photoDetailsChanged", this.updatePhotoDetails),
              m.off("backgroundInfo:admire:start", this.admire),
              m.off("backgroundInfo:admire:stop", this.stopAdmire),
              m.off("globalEvent:windowBlur", this.stopAdmire);
          },
          methods: {
            setActiveBackground() {
              this.background = r();
            },
            updatePhotoDetails(t) {
              t.id &&
                t.id === this.background.id &&
                (t.title && "" !== t.title && (this.background.title = t.title),
                t.source && "" !== t.source && (this.background.source = t.source));
            },
            toggleFavorite() {
              (this.background.fav = !this.background.fav),
                m.models.backgroundManager.toggleFavorite(this.background.fav),
                d.capture("photo " + (this.background.fav ? "fav" : "unfav"), { custom: this.background.custom });
            },
            skipBackground() {
              if (!this.$plus) return m.cmd("modal.open", "UPSELL_PHOTOS", { eventSource: "dash" }), void this.stopAdmire();
              this.skipping ||
                ((this.skipping = !0),
                m.models.backgroundManager.skipItem().finally(() => {
                  this.skipping = !1;
                }),
                d.capture("photo skip", { is_paid_event: !0, custom: this.background.custom }));
            },
            clickSource() {
              this.background.url && (this.captureAndHandleCustomLocation("photo source click"), window.open(this.background.url));
            },
            admire() {
              if (document.getElementsByClassName("apps")[0].classList.contains("hide-apps")) return;
              (this.admiring = !0), m.widgetManager.hideApps({ exemptionSelectors: ".apps .photo-info" });
              const t = document.getElementsByClassName("background-overlay")[0];
              t.classList.add("slow"), t.classList.remove("show"), d.capture("photo admire", { custom: this.background.custom });
            },
            admireOnHover(t) {
              this.$touch ||
                document.getElementsByClassName("apps")[0].classList.contains("hide-apps") ||
                (this.clearAdmireTimeout(), this.captureDebouncedHover(t), (this.admireTimeoutId = setTimeout(this.admire, 4e3)));
            },
            captureDebouncedHover(t) {
              const a = t.target;
              this.cancelDebouncedHoverCapture(),
                (this.debounedHover = setTimeout(() => {
                  a.matches(":hover") && this.captureAndHandleCustomLocation("photo hover");
                }, 1e3));
            },
            cancelDebouncedHoverCapture() {
              clearTimeout(this.debounedHover);
            },
            stopAdmire() {
              if ((this.clearAdmireTimeout(), this.cancelDebouncedHoverCapture(), !this.admiring)) return;
              (this.admiring = !1), m.widgetManager.showApps();
              const t = document.getElementsByClassName("background-overlay")[0];
              t.classList.remove("slow"), t.classList.add("show");
            },
            clearAdmireTimeout() {
              clearTimeout(this.admireTimeoutId);
            },
            onEnter() {
              m.widgetManager.setBottomSideWidth();
            },
            toggleToastMenu(t = !this.toastMenuActive) {
              this.toastMenuActive = t;
            },
            access: m.utils.access,
            captureAndHandleCustomLocation(t) {
              const a = {
                custom: this.background.custom,
                photo_location: this.background.custom ? "custom" : this.background.title.toLowerCase(),
                location: "dash"
              };
              d.capture(t, a);
            }
          }
        };
      e(83810);
      const u = (0, e(51900).Z)(c, o, [], !1, null, "47ba3f80", null).exports,
        l = document.querySelector(".region.bottom-left"),
        p = document.createElement("div");
      l.appendChild(p), new s.Z({ render: (t) => t(u) }).$mount(p);
    },
    6037: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => r });
      var s = e(8081),
        o = e.n(s),
        i = e(23645),
        n = e.n(i)()(o());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.photo-info[data-v-47ba3f80] { min-width: 0; flex: 0 1 auto;\n}\n.photo-info .app-dash[data-v-47ba3f80] { height: var(--top-and-bottom-row-min-height); display: flex; justify-content: center; transition: all 0s var(--a-curve), opacity 1s var(--a-curve), transform 1s var(--a-curve);\n}\n.photo-info .app-dash[data-v-47ba3f80]:before { opacity: 0; content: ''; transition: opacity 1s var(--a-curve);\n}\n.photo-info.add-shadow[data-v-47ba3f80]:before { left: -40px; opacity: 0.3;\n}\n.title[data-v-47ba3f80], .source[data-v-47ba3f80] { width: max-content; transition: all 0.3s ease;\n}\n.title[data-v-47ba3f80] { --hover-offset: -2px; padding: 5px 0; display: inline;\n}\n.has-button > .title[data-v-47ba3f80] { --hover-offset: -6px !important;\n}\n.app-dash .title[data-v-47ba3f80] { opacity: 0.8; font-size: 0.8125rem;\n}\nbody:not(.touch) .app-dash .title[data-v-47ba3f80] { transform: translateZ(0) translateY(10px);\n}\nbody:not(.touch) .photo-info .app-dash:hover .title[data-v-47ba3f80], .photo-info .app-dash.show-hover .title[data-v-47ba3f80] { transform: none;\n}\n.hotkey-hover .title[data-v-47ba3f80] { transition-duration: 1s;\n}\n.source[data-v-47ba3f80] { --show-hover-transition: opacity 0.1s var(--a-curve); display: flex; align-items: center; font-size: 0.6875rem;\n}\n.app-dash .source[data-v-47ba3f80] { opacity: 0; transform: translateZ(0) translateY(-13px);\n}\n.touch .app-dash:not(.show-hover) .source[data-v-47ba3f80] { display: none;\n}\n.app-dash:hover .source[data-v-47ba3f80], .app-dash.show-hover .source[data-v-47ba3f80], .app-dash.pseudo-hover .source[data-v-47ba3f80] { opacity: 1; transform: translateZ(0) translateY(-2px);\n}\n.hotkey-hover .source[data-v-47ba3f80] { transition-duration: 0.8s;\n}\n.source-link[data-v-47ba3f80] { margin: -3px; margin-right: 0px; padding: 3px; opacity: 0.7; cursor: pointer; line-height: 20px; transition: all 0.2s var(--a-curve); vertical-align: top;\n}\n.source-link[data-v-47ba3f80]:hover { opacity: 0.9 !important;\n}\n.touch .source-link[data-v-47ba3f80] { pointer-events: none;\n}\n.control[data-v-47ba3f80] { --size: 16px; height: var(--size); width: var(--size); margin: -2px 0; padding: 2px 1px; position: relative; display: inline-flex; align-items: center; justify-content: center; opacity: 0.7; box-sizing: content-box; cursor: pointer; transition: var(--show-hover-transition);\n}\n.control[data-v-47ba3f80]:hover, .control.active[data-v-47ba3f80] { opacity: 1;\n}\n.control .icon[data-v-47ba3f80] { --icon-size: 14px; height: var(--icon-size); width: var(--icon-size);\n}\n.app-dash.show-hover .control[data-v-47ba3f80] { opacity: 0;\n}\n.app-dash.show-hover:hover .control[data-v-47ba3f80] { opacity: 0.7;\n}\n.app-dash.show-hover .control[data-v-47ba3f80]:hover { opacity: 1;\n}\n\n\n/* Mobile */\n@media screen and (max-width: 450px) {\n.title[data-v-47ba3f80], .source[data-v-47ba3f80] { width: auto;\n}\n.title[data-v-47ba3f80], .source-link[data-v-47ba3f80] { overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.title[data-v-47ba3f80] { height: auto; font-size: 0.75rem; font-style: italic; line-height: 1.2;\n}\n}\n",
        ""
      ]);
      const r = n;
    },
    78836: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => r });
      var s = e(8081),
        o = e.n(s),
        i = e(23645),
        n = e.n(i)()(o());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.toast-hide[data-v-585a48d3] { opacity: 0;\n}\n.toast-visible .icon[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-container[data-v-585a48d3] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-585a48d3] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast > *[data-v-585a48d3]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-585a48d3] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-585a48d3] .toast-title { line-height: 1.25;\n}\n[data-v-585a48d3] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-585a48d3] li { max-width: 100% !important;\n}\n.header-line[data-v-585a48d3] { margin: 0 -4px 4px !important;\n}\n.section-title[data-v-585a48d3] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-585a48d3] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-585a48d3] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-585a48d3] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-585a48d3]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-overlay[data-v-585a48d3] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-585a48d3], .slide-up-leave-active[data-v-585a48d3] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-585a48d3], .slide-up-leave-to[data-v-585a48d3]  { transform: translateY(100%);\n}\n",
        ""
      ]);
      const r = n;
    },
    84541: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => i });
      var s = function () {
        var t = this,
          a = t._self._c;
        return a(
          "li",
          { staticClass: "dropdown-list-item", class: { "has-description": t.description }, attrs: { "data-test": "drop-down-wrapper" } },
          [
            a("div", { staticClass: "dropdown-list-label-wrapper", attrs: { "data-test": "drop-down-wrapper" } }, [
              t.icon || t.$slots.icon
                ? a(
                    "span",
                    { staticClass: "dropdown-list-icon-wrapper" },
                    [
                      t._t("icon", function () {
                        return [t._v(t._s(t.icon))];
                      })
                    ],
                    2
                  )
                : t._e(),
              t._v(" "),
              a(
                "span",
                { staticClass: "dropdown-list-label", attrs: { "data-test": "name" } },
                [
                  t._t("default"),
                  t._t("name", function () {
                    return [t._v(t._s(t.name))];
                  })
                ],
                2
              ),
              t.isPlus && !t.$plus ? a("span", { staticClass: "badge badge-plus", attrs: { "data-test": "beta" } }, [t._v("Plus")]) : t._e()
            ]),
            t._v(" "),
            t.description || t.$slots.description
              ? a(
                  "div",
                  { staticClass: "dropdown-list-description", attrs: { "data-test": "description" } },
                  [
                    t._t("description", function () {
                      return [t._v(t._s(t.description))];
                    })
                  ],
                  2
                )
              : t._e()
          ]
        );
      };
      s._withStripped = !0;
      const o = {
          name: "DropdownOption",
          doNotWaitForMount: !0,
          props: {
            icon: { type: String, default: "" },
            name: { type: String, default: "" },
            isPlus: { type: Boolean, default: !1 },
            description: { type: String, default: "" }
          }
        },
        i = (0, e(51900).Z)(o, s, [], !1, null, null, null).exports;
    },
    97449: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => i });
      var s = function () {
        var t = this,
          a = t._self._c;
        return a(
          "div",
          {
            on: {
              click: function (t) {
                t.stopPropagation();
              }
            }
          },
          [
            t._t("moreToggle"),
            t._v(" "),
            a(
              "div",
              { staticClass: "toast-container" },
              [
                a("transition", { attrs: { name: "slide-up", appear: "" } }, [
                  t.active
                    ? a("div", { ref: "toast", staticClass: "toast more-toast", attrs: { "data-test": "toast" } }, [
                        t.hasHeader() ? a("div", { staticClass: "toast-header" }, [t._t("header")], 2) : t._e(),
                        t._v(" "),
                        t.hasHeader() ? a("div", { staticClass: "line header-line" }) : t._e(),
                        t._v(" "),
                        t.sectionTitle ? a("div", { staticClass: "section-title" }, [t._v(t._s(t.sectionTitle))]) : t._e(),
                        t._v(" "),
                        a(
                          "ul",
                          { staticClass: "toast-list", class: { "toast-hide": t.$slots.upsell }, attrs: { "data-test": "toast-options" } },
                          [t._t("default")],
                          2
                        ),
                        t._v(" "),
                        a("div", { staticClass: "button button-close", on: { click: t.hide } }, [
                          a("span", { staticClass: "button-label" }, [t._v("Close")])
                        ])
                      ])
                    : t._e()
                ]),
                t._v(" "),
                a("transition", { attrs: { name: "fade", duration: "150" } }, [
                  t.active
                    ? a("div", {
                        staticClass: "toast-overlay",
                        on: {
                          click: function (a) {
                            return a.stopPropagation(), t.hide.apply(null, arguments);
                          }
                        }
                      })
                    : t._e()
                ])
              ],
              1
            )
          ],
          2
        );
      };
      s._withStripped = !0;
      const o = {
        doNotWaitForMount: !0,
        name: "ToastMenu",
        props: {
          dataOb: { type: String, default: "" },
          active: { type: Boolean, default: !0 },
          sectionTitle: { type: String, default: "" }
        },
        methods: {
          hide(t) {
            this.active && (this.$touch && t.stopPropagation(), this.$emit("toggle", !1));
          },
          hasHeader() {
            return !!this.$slots.header;
          }
        }
      };
      e(30562);
      const i = (0, e(51900).Z)(o, s, [], !1, null, "585a48d3", null).exports;
    },
    83810: (t, a, e) => {
      var s = e(6037);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, e(45346).Z)("060aa3b4", s, !1, { ssrId: !0 });
    },
    30562: (t, a, e) => {
      var s = e(78836);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, e(45346).Z)("8544ab60", s, !1, { ssrId: !0 });
    },
    57950: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSIjZmZmIj4KPHBhdGggY2xhc3M9Im91dGxpbmUiIGQ9Ik00Mi45LDMzMi45YzQuNS03My44LDI5LjgtMTM1LjEsNzYtMTgzLjhoMS45bDEuOS0xLjlDMTc5LjIsOTguNCwyNDMuMSw3NCwzMTQuMyw3NHMxMzIuNSwyMi41LDE4My44LDY3LjQKCWMyMC41LTE4LDQyLTMyLjQsNjQuNS00My4zbDEuOS0xLjloMS45QzYwMi40LDgxLjQsNjM5LjksNzQsNjc5LjEsNzRjNTYuNS0xLjMsMTA4LjEsMTIuNSwxNTUsNDEuNAoJYzQ2LjgsMjguOSw4Mi4xLDY4LjcsMTA1LjksMTE5LjN2MS45bDEuOSwzLjhjMTkuMiw2OCwyMi41LDEzMi44LDkuNiwxOTQuNGMtMTIuOCw2MS42LTM4LjUsMTE3LjctNzcsMTY4LjQKCWMtMzkuOCw1Ni41LTkxLjgsMTExLjYtMTU1LjksMTY1LjVjMCwxLjMtMC42LDEuOS0xLjksMS45Yy0zMS40LDI4LjktNjUuOCw1Ny43LTEwMyw4Ni42Yy0yMS44LDE2LTQwLjcsMjkuMi01Ni44LDM5LjUKCWMtMjEuMiwxNC44LTM4LjgsMjIuMS01Mi45LDIyLjFsLTUuOCwxLjlsLTQuOC0xLjljLTE4LTEuOS0zNi45LTExLjItNTYuOC0yNy45Yy02LjQtMy44LTEzLjItOS0yMC4yLTE1LjRzLTEyLjItMTAuNi0xNS40LTEyLjUKCUgzOTlDMjQxLjIsNzQyLjYsMTM1LjksNjMzLjUsODMuMyw1MzZ2LTEuOUM1MS45LDQ3My44LDM4LjQsNDA2LjcsNDIuOSwzMzIuOXogTTEyNC43LDM0Mi42Yy0zLjgsNTUuMiw2LjcsMTA3LjIsMzEuOCwxNTUuOQoJYzQ3LjUsODYuNiwxNDQuNywxODYuMSwyOTEuNiwyOTguNGgxLjljMy44LDMuOCw5LjYsOSwxNy4zLDE1LjRjNy43LDYuNCwxMy44LDEwLjksMTguMywxMy41YzUuMSwzLjgsOS45LDcuMSwxNC40LDkuNgoJYzUuMS0xLjMsOS42LTMuMiwxMy41LTUuOGMxNC4xLTksMzAuNS0yMC45LDQ5LjEtMzUuNmMzNy4yLTI3LjYsNzAuOS01NS44LDEwMS4xLTg0LjdjNjAuMy01MS4zLDEwOC44LTEwMywxNDUuMy0xNTUKCWM2OC43LTkxLjEsODcuMy0xODYuNyw1NS44LTI4Ni44Yy0xNy4zLTM2LjYtNDIuMy02NC44LTc1LjEtODQuN2MtMzIuNy0xOS45LTY5LTI5LjItMTA4LjgtMjcuOWMtMjcuNiwwLTU1LjIsNS41LTgyLjgsMTYuNAoJYy0yNSwxNC4xLTQ2LjgsMzIuNC02NS40LDU0LjlMNTAyLDI2Ny41bC0zMy43LTQxLjRjLTMzLjQtNDEuNy03OC42LTY1LjEtMTM1LjctNzAuM3MtMTA4LjgsMTEuOS0xNTUsNTEKCUMxNDYuMiwyNDIuMiwxMjguNSwyODcuNCwxMjQuNywzNDIuNnoiLz4KPHBhdGggY2xhc3M9ImZpbGwiIGQ9Ik00MS43LDMzMi45YzQuNS03My44LDI5LjktMTM1LjEsNzYtMTgzLjhoMS45bDEuOS0xLjlDMTc4LjEsOTguNCwyNDEuOSw3NCwzMTMuMSw3NAoJYzcxLjIsMCwxMzIuNSwyMi41LDE4My44LDY3LjRjMTkuNC0xNy4zLDQxLjEtMzEuOCw2NC41LTQzLjNsMS45LTEuOWgxLjlDNjAxLDgxLjUsNjM5LjMsNzQsNjc3LjksNzRjNTYuNS0xLjMsMTA4LjEsMTIuNSwxNTUsNDEuNAoJYzQ2LjksMjguOSw4Mi4yLDY4LjcsMTA1LjksMTE5LjN2MS45bDEuOSwzLjhjMTkuMiw2OCwyMi41LDEzMi44LDkuNiwxOTQuNGMtMTIuOCw2MS42LTM4LjUsMTE3LjctNzcsMTY4LjQKCWMtMzkuNyw1Ni41LTkxLjcsMTExLjctMTU1LjksMTY1LjVjMC4xLDEtMC42LDEuOC0xLjUsMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMzEuNSwyOC45LTY1LjgsNTcuNy0xMDMsODYuNgoJYy0yMS44LDE2LjEtNDAuNywyOS4yLTU2LjgsMzkuNWMtMjEuMiwxNC43LTM4LjgsMjIuMS01Mi45LDIyLjFsLTUuOCwxLjlsLTQuOC0xLjljLTE4LTEuOS0zNi45LTExLjMtNTYuOC0yNy45CgljLTcuMi00LjQtMTQtOS42LTIwLjItMTUuNGMtNy02LjQtMTIuMi0xMC42LTE1LjQtMTIuNWgtMS45QzI0MCw3NDIuNywxMzQuNyw2MzMuNiw4Mi4xLDUzNnYtMS45QzUwLjcsNDczLjcsMzcuMiw0MDYuNyw0MS43LDMzMi45Cgl6Ii8+Cjwvc3ZnPgo=";
    },
    75667: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQ5LjA1IDEzMi4xMiI+Cgk8Y2lyY2xlIGN4PSIxMTUuNSIgY3k9IjEwOC42MiIgcj0iMjMiIC8+Cgk8cGF0aCBkPSJNMjkxLjUsMjgxQTIyLjUsMjIuNSwwLDEsMSwyNjksMzAzLjUsMjIuNTIsMjIuNTIsMCwwLDEsMjkxLjUsMjgxbTAtMUEyMy41LDIzLjUsMCwxLDAsMzE1LDMwMy41LDIzLjUsMjMuNSwwLDAsMCwyOTEuNSwyODBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0xOTQuODgpIj48L3BhdGg+Cgk8cGF0aCBjbGFzcz0iYXJyb3ciIGQ9Ik0zOTksMjU3LjVhMTM1LjE4LDEzNS4xOCwwLDAsMC00MS4xNi00Mi4xN2MtMjIuNy0xNC43NC00OS4zOC0yMS45Mi03NS4xNS0yMC4yYTEwOC43MSwxMDguNzEsMCwwLDAtNjUuMTYsMjdjLTE5LjkxLDE3LjUtMzMuNzYsNDEuNzktNDEuMTgsNzIuMTlhMTMuNTIsMTMuNTIsMCwwLDAsOS45MiwxNi4zMiwxMy42NiwxMy42NiwwLDAsMCwzLjIxLjM4LDEzLjUxLDEzLjUxLDAsMCwwLDEzLjExLTEwLjNjNi4wNy0yNC45MiwxNy4xLTQ0LjU0LDMyLjc2LTU4LjMxYTgyLDgyLDAsMCwxLDQ5LjEzLTIwLjMyYzIwLTEuMzMsNDAuODEsNC4zMiw1OC42NSwxNS45QTEwOC4wNywxMDguMDcsMCwwLDEsMzc0LDI2OC41MWwtMzAsMTMuMiw3Mi40Myw0MC4zNiw4LjYtNzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0xOTQuODgpIj48L3BhdGg+Cjwvc3ZnPgo=";
    }
  }
]);
