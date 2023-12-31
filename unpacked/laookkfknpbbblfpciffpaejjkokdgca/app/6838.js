(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6838, 9437, 7449, 9600, 4541],
  {
    99437: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => D });
      var o = a(20144),
        n = a(88026),
        i = a(51726),
        s = a.n(i),
        d = a(34952),
        M = a(7838),
        l = a(35174);
      let r = {};
      const c = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (r[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", r[t.dataset.mobileClickHandlerId]),
            delete r[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var g = a(28692),
        u = a(64398),
        p = a(77197);
      o.ZP.use(n.Z, { name: "unreactive" }),
        o.ZP.use(s()),
        o.ZP.use(d.InlineSvgPlugin),
        o.ZP.use(g.og),
        o.ZP.use(p.Z),
        (o.ZP.prototype.$xhr = l.Z),
        (o.ZP.prototype.$e = M.Z),
        o.ZP.directive("mobile-click", c),
        new o.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        o.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: u.Z
        });
      const D = o.ZP;
    },
    40063: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => n });
      let o = {};
      const n = {
        bind: function (t, e) {
          let a, n;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const i = (t) => {
              (n = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (n = !0) : (a = t.target);
            },
            s = (o) => {
              n ||
                ((e.modifiers.bubble ||
                  (!t.contains(a) &&
                    !t.contains(o.target) &&
                    t !== a &&
                    t !== o.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  e.value(o));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (o[t.dataset.clickOutsideMouseupHandlerId] = s),
            (o[t.dataset.clickOutsideMousedownHandlerId] = i),
            document.addEventListener("mouseup", s),
            document.addEventListener("mousedown", i);
        },
        unbind: function (t) {
          var e, a;
          null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMouseupHandlerId &&
            null !== (a = t.dataset) &&
            void 0 !== a &&
            a.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", o[t.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", o[t.dataset.clickOutsideMousedownHandlerId]),
            delete o[t.dataset.clickOutsideMouseupHandlerId],
            delete o[t.dataset.clickOutsideMousedownHandlerId],
            delete t.dataset.clickOutsideMouseupHandlerId,
            delete t.dataset.clickOutsideMousedownHandlerId,
            delete t.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    26838: (t, e, a) => {
      "use strict";
      a.r(e);
      var o = a(99437),
        n = function () {
          var t = this,
            e = t._self._c;
          return t.logo || t.$admin
            ? e(
                "div",
                {
                  ref: "wrapper",
                  staticClass: "app-container team-logo",
                  class: { "is-admin": t.$admin, show: t.dropdownActive },
                  style: { "--dropdown-left": t.dropdownLeft + "px" },
                  attrs: { id: "team-logo", "data-test": "team-logo" }
                },
                [
                  e(
                    t.$touch ? "ToastMenu" : "Dropdown",
                    {
                      tag: "component",
                      style: t.nippleDisplacementCss,
                      attrs: { "on-dash": !0, active: t.dropdownActive, "section-title": t.teamInfo.teamName || "" },
                      on: { toggle: t.toggleTeamMenu },
                      scopedSlots: t._u(
                        [
                          {
                            key: "moreToggle",
                            fn: function () {
                              return [
                                e(
                                  "div",
                                  {
                                    staticClass: "app-dash add-shadow",
                                    class: { toggle: t.$admin },
                                    attrs: { "data-test": "app-dash" },
                                    on: { click: t.toggleTeamMenu }
                                  },
                                  [
                                    t.logo
                                      ? [
                                          e("img", {
                                            ref: "logo",
                                            staticClass: "logo",
                                            class: { svg: t.isSVG },
                                            attrs: { src: t.logo, "data-test": "img" }
                                          }),
                                          t._v(" "),
                                          t.$admin
                                            ? e("span", { staticClass: "team-logo-icon-wrapper", attrs: { "data-test": "caret" } }, [
                                                e("i", { staticClass: "icon icon-angle-down" })
                                              ])
                                            : t._e()
                                        ]
                                      : t.$admin
                                      ? [e("span", { ref: "toggle-label" }, [t._v("\n\t\t\t\t\t\tTeam\n\t\t\t\t\t")])]
                                      : t._e()
                                  ],
                                  2
                                )
                              ];
                            },
                            proxy: !0
                          }
                        ],
                        null,
                        !1,
                        2816761235
                      )
                    },
                    [
                      t._v(" "),
                      t.$admin
                        ? [
                            e("dropdown-option", {
                              staticClass: "settings settings-members",
                              attrs: { name: "Invite Team Members", "data-test": "invite-team" },
                              nativeOn: {
                                click: function (e) {
                                  return t.goToTeamMembers.apply(null, arguments);
                                }
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "icon",
                                    fn: function () {
                                      return [
                                        e("inline-svg", {
                                          staticClass: "icon dropdown-list-icon icon-add-members",
                                          attrs: { src: a(86587) }
                                        })
                                      ];
                                    },
                                    proxy: !0
                                  }
                                ],
                                null,
                                !1,
                                1739350381
                              )
                            }),
                            t._v(" "),
                            e("dropdown-option", {
                              staticClass: "settings settings-general",
                              attrs: { name: "Go to Team Admin", "data-test": "team-admin" },
                              nativeOn: {
                                click: function (e) {
                                  return t.goToTeamSite.apply(null, arguments);
                                }
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "icon",
                                    fn: function () {
                                      return [
                                        e("inline-svg", { staticClass: "icon dropdown-list-icon icon-settings", attrs: { src: a(52682) } })
                                      ];
                                    },
                                    proxy: !0
                                  }
                                ],
                                null,
                                !1,
                                2173771038
                              )
                            }),
                            t._v(" "),
                            e("dropdown-option", {
                              staticClass: "settings settings-announcements",
                              attrs: { name: "Send Announcement", "data-test": "send-announcement" },
                              nativeOn: {
                                click: function (e) {
                                  return t.goToTeamSiteAnnouncements.apply(null, arguments);
                                }
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "icon",
                                    fn: function () {
                                      return [
                                        e("inline-svg", { staticClass: "icon dropdown-list-icon icon-settings", attrs: { src: a(79715) } })
                                      ];
                                    },
                                    proxy: !0
                                  }
                                ],
                                null,
                                !1,
                                78219834
                              )
                            })
                          ]
                        : t._e()
                    ],
                    2
                  )
                ],
                1
              )
            : t._e();
        };
      n._withStripped = !0;
      var i = a(59600),
        s = a(84541),
        d = a(97449);
      const M = {
          name: "TeamLogo",
          components: { Dropdown: i.default, DropdownOption: s.default, ToastMenu: d.default },
          unreactive: () => ({ dropdownLeft: 7, nippleDisplacement: 0 }),
          data: () => ({ dropdownActive: !1, nippleDisplacementCss: null }),
          computed: {
            teamInfo: () => m.models.teamInfo.get("team") || {},
            logo() {
              return this.teamInfo.teamLogoUrl || null;
            },
            isSVG() {
              return "SVG" === this.teamInfo.teamLogoFileType;
            }
          },
          watch: { logo: "updateRegionClass", $admin: "updateRegionClass" },
          mounted() {
            this.updateRegionClass(), m.widgetManager.appReady("team-logo");
          },
          methods: {
            toggleTeamMenu() {
              this.$admin &&
                (this.dropdownActive
                  ? (m.widgetManager.refocusOverlap("logo"), document.querySelector(".top-left").classList.remove("team-dropdown-open"))
                  : (this.nippleDisplacementCss ||
                      this.$nextTick(() => {
                        this.nippleDisplacementCss = this.calculateNippleDisplacementCss();
                      }),
                    m.trigger("notification:hide"),
                    m.widgetManager.unfocusOverlap("logo"),
                    document.querySelector(".top-left").classList.add("team-dropdown-open")),
                (this.dropdownActive = !this.dropdownActive));
            },
            goToTeamMembers() {
              m.cmd("window.account.open", "/team/members?add");
            },
            goToTeamSite() {
              m.cmd("window.account.open", "/");
            },
            goToTeamSiteAnnouncements() {
              m.cmd("window.account.open", "/team/announcements");
            },
            calculateNippleDisplacementCss() {
              const t = this.$refs.logo || this.$refs["toggle-label"];
              if (!t || (t.hasOwnProperty("complete") && !t.complete)) return;
              const { left: e, width: a } = t.getBoundingClientRect();
              return { "--nipple-left": e + a / 2 - (this.dropdownLeft + 7) + "px" };
            },
            updateRegionClass() {
              const t = document.querySelector(".top-left");
              t.classList.remove("has-logo", "has-no-logo", "has-logo-placeholder");
              let e = "";
              (e = this.logo ? "has-logo" : this.$admin ? "has-logo-placeholder" : "has-no-logo"), t.classList.add(e);
            }
          }
        },
        l = M;
      a(96742);
      const r = (0, a(51900).Z)(l, n, [], !1, null, "70bbbf7a", null).exports,
        c = document.createElement("div");
      document.querySelector(".top-left").prepend(c), new o.Z({ render: (t) => t(r) }).$mount(c);
    },
    95929: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => d });
      var o = a(8081),
        n = a.n(o),
        i = a(23645),
        s = a.n(i)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.dropdown[data-v-0a952a33] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-0a952a33] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-0a952a33] { opacity: 0.8;\n}\n.open-enter-active[data-v-0a952a33], .open-leave-active[data-v-0a952a33] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-0a952a33], .open-leave-to[data-v-0a952a33] { opacity: 0;\n}\n\n",
        ""
      ]);
      const d = s;
    },
    78836: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => d });
      var o = a(8081),
        n = a.n(o),
        i = a(23645),
        s = a.n(i)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.toast-hide[data-v-585a48d3] { opacity: 0;\n}\n.toast-visible .icon[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-container[data-v-585a48d3] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-585a48d3] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast > *[data-v-585a48d3]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-585a48d3] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-585a48d3] .toast-title { line-height: 1.25;\n}\n[data-v-585a48d3] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-585a48d3] li { max-width: 100% !important;\n}\n.header-line[data-v-585a48d3] { margin: 0 -4px 4px !important;\n}\n.section-title[data-v-585a48d3] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-585a48d3] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-585a48d3] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-585a48d3] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-585a48d3]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-overlay[data-v-585a48d3] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-585a48d3], .slide-up-leave-active[data-v-585a48d3] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-585a48d3], .slide-up-leave-to[data-v-585a48d3]  { transform: translateY(100%);\n}\n",
        ""
      ]);
      const d = s;
    },
    68291: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => d });
      var o = a(8081),
        n = a.n(o),
        i = a(23645),
        s = a.n(i)()(n());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.team-logo[data-v-70bbbf7a] { box-sizing: content-box; order: 1;\n} /* Set the order to 1 to ensure it is placed at the beginning of the top left row */\n.team-logo[data-v-70bbbf7a] .notification { position: relative; inset: unset; height: unset;\n}\n.team-logo[data-v-70bbbf7a] .notification .app-wrapper { z-index: 6; /* must display above team-links */\n}\n.team-logo[data-v-70bbbf7a] .notification .app { min-width: unset; left: 0; bottom: unset;\n}\n\n\t/* App dash styles */\n.has-logo .app-dash[data-v-70bbbf7a] { --logo-top-padding: 15px; --logo-bottom-padding: 8px; --logo-side-padding: 15px; --logo-left-padding: 15px; padding: var(--logo-top-padding) var(--logo-side-padding) var(--logo-bottom-padding);\n}\n.is-admin .app-dash[data-v-70bbbf7a] { cursor: pointer;\n}\n\n\t\t\t/* Angle down icon */\n.is-admin .team-logo-icon-wrapper[data-v-70bbbf7a] { position: absolute; top: var(--logo-top-padding); right: -2px; bottom: var(--logo-bottom-padding); display: flex; align-items: center; opacity: 0;\n}\n.is-admin:not(.show) .app-dash:hover .team-logo-icon-wrapper[data-v-70bbbf7a] { opacity: 0.8;\n}\n.show .team-logo-icon-wrapper[data-v-70bbbf7a] { opacity: 1;\n}\n.team-logo:not(.is-admin) .app-dash:hover .team-logo-icon-wrapper[data-v-70bbbf7a] { opacity: 0;\n}\n.team-dropdown-open .icon-angle-down[data-v-70bbbf7a] { opacity: 1;\n}\n.icon-angle-down[data-v-70bbbf7a] { opacity: inherit; font-size: 0.875rem; line-height: 1;\n}\n\n\t\t/* Logo Image/SVG styles -- Do not put padding on the .logo element, it will break the nipple calculation */\n.logo[data-v-70bbbf7a] { height: auto; width: auto; max-height: var(--top-and-bottom-row-min-height); max-width: 200px; position: relative; z-index: 1; pointer-events: none; vertical-align: top;\n}\n.logo.svg[data-v-70bbbf7a] { height: var(--top-and-bottom-row-min-height);\n} /* Ensure SVGs have height */\n\n\t/* Dropdown styles */\n[data-v-70bbbf7a] .dropdown { margin-top: 5px; left: var(--dropdown-left);\n}\n[data-v-70bbbf7a] .dropdown:after { left: var(--nipple-left);\n}\n\t\t\t/* Dropdown icons */\n.dropdown-list-icon-wrapper[data-v-70bbbf7a] {\n}\n.dropdown-list-icon[data-v-70bbbf7a] {\n}\n.icon-add-members[data-v-70bbbf7a] { --icon-size: 15px;\n}\n@media screen and (max-width: 450px) {\n.has-logo .app-dash[data-v-70bbbf7a] { padding-right: 8px;\n}\n.logo[data-v-70bbbf7a] { max-height: 50px; max-width: 90px;\n}\n.team-logo-icon-wrapper[data-v-70bbbf7a] { display: none !important;\n}\n[data-v-70bbbf7a] .dropdown { right: auto;\n}\n}\n",
        ""
      ]);
      const d = s;
    },
    59600: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => i });
      var o = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.hideDropdown, expression: "hideDropdown" }],
            staticClass: "more",
            class: { "shift-to-left": t.shiftToLeft, "dropdown-visible": t.active, "more-dash": t.onDash },
            attrs: { "data-test": "more-container" }
          },
          [
            t._t("moreToggle", function () {
              return [
                e(
                  "div",
                  {
                    staticClass: "icon-wrapper more-toggle",
                    class: { "dash-icon-wrapper": t.onDash, "u--touch-hide": t.onDash },
                    attrs: { "data-test": "more-toggle", "data-ob": t.dataOb },
                    on: {
                      click: function (e) {
                        return t.$emit("toggle", !t.active);
                      }
                    }
                  },
                  [
                    e("inline-svg", {
                      staticClass: "icon icon-ellipsis more-icon",
                      class: { "dash-icon": t.onDash },
                      attrs: { src: a(49710) }
                    })
                  ],
                  1
                )
              ];
            }),
            t._v(" "),
            e("transition", { attrs: { name: "open" } }, [
              t.active
                ? e(
                    "div",
                    {
                      ref: "dropdown",
                      staticClass: "dropdown more-dropdown",
                      class: { "app dash-dropdown nipple nipple-top-left": t.onDash },
                      attrs: { "data-test": "dropdown" }
                    },
                    [
                      t._t("header"),
                      t._v(" "),
                      t._t("upsell"),
                      t._v(" "),
                      e(
                        "ul",
                        {
                          staticClass: "dropdown-list",
                          class: { "dropdown-hide": t.$slots.upsell },
                          attrs: { "data-test": "dropdown-options" }
                        },
                        [t._t("default")],
                        2
                      )
                    ],
                    2
                  )
                : t._e()
            ])
          ],
          2
        );
      };
      o._withStripped = !0;
      const n = {
        doNotWaitForMount: !0,
        name: "Dropdown",
        directives: { ClickOutside: a(40063).Z },
        props: { dataOb: { type: String, default: "" }, active: { type: Boolean, default: !1 }, onDash: { type: Boolean, default: !1 } },
        data: () => ({ shiftToLeft: !1 }),
        watch: {
          active(t) {
            t
              ? ((this.shiftToLeft = !1),
                this.$nextTick(this.shiftDropdownLeftIfNeeded),
                window.addEventListener("resize", this.debouncedDropdownShift))
              : window.removeEventListener("resize", this.debouncedDropdownShift);
          }
        },
        created() {
          m.on("globalEvent:esc", this.hideDropdown), m.on("globalEvent:toggle:bottom-right", this.hideDropdown);
        },
        destroyed() {
          m.off("globalEvent:esc", this.hideDropdown),
            m.off("globalEvent:toggle:bottom-right", this.hideDropdown),
            window.removeEventListener("resize", this.shouldDropdownShiftToLeft);
        },
        methods: {
          hideDropdown(t) {
            this.active && (this.$touch && t.stopPropagation(), this.$emit("toggle", !1));
          },
          shiftDropdownLeftIfNeeded() {
            const t = this.$refs.dropdown && this.$refs.dropdown.getBoundingClientRect();
            if (!t) return;
            const e = window.innerWidth - t.right;
            this.shiftToLeft = !(e >= 135);
          },
          debouncedDropdownShift() {
            clearTimeout(this.debounce),
              (this.debounce = setTimeout(() => {
                (this.shiftToLeft = !1), this.$nextTick(this.shiftDropdownLeftIfNeeded);
              }, 200));
          }
        }
      };
      a(34070);
      const i = (0, a(51900).Z)(n, o, [], !1, null, "0a952a33", null).exports;
    },
    84541: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => i });
      var o = function () {
        var t = this,
          e = t._self._c;
        return e(
          "li",
          { staticClass: "dropdown-list-item", class: { "has-description": t.description }, attrs: { "data-test": "drop-down-wrapper" } },
          [
            e("div", { staticClass: "dropdown-list-label-wrapper", attrs: { "data-test": "drop-down-wrapper" } }, [
              t.icon || t.$slots.icon
                ? e(
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
              e(
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
              t.isPlus && !t.$plus ? e("span", { staticClass: "badge badge-plus", attrs: { "data-test": "beta" } }, [t._v("Plus")]) : t._e()
            ]),
            t._v(" "),
            t.description || t.$slots.description
              ? e(
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
      o._withStripped = !0;
      const n = {
          name: "DropdownOption",
          doNotWaitForMount: !0,
          props: {
            icon: { type: String, default: "" },
            name: { type: String, default: "" },
            isPlus: { type: Boolean, default: !1 },
            description: { type: String, default: "" }
          }
        },
        i = (0, a(51900).Z)(n, o, [], !1, null, null, null).exports;
    },
    97449: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => i });
      var o = function () {
        var t = this,
          e = t._self._c;
        return e(
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
            e(
              "div",
              { staticClass: "toast-container" },
              [
                e("transition", { attrs: { name: "slide-up", appear: "" } }, [
                  t.active
                    ? e("div", { ref: "toast", staticClass: "toast more-toast", attrs: { "data-test": "toast" } }, [
                        t.hasHeader() ? e("div", { staticClass: "toast-header" }, [t._t("header")], 2) : t._e(),
                        t._v(" "),
                        t.hasHeader() ? e("div", { staticClass: "line header-line" }) : t._e(),
                        t._v(" "),
                        t.sectionTitle ? e("div", { staticClass: "section-title" }, [t._v(t._s(t.sectionTitle))]) : t._e(),
                        t._v(" "),
                        e(
                          "ul",
                          { staticClass: "toast-list", class: { "toast-hide": t.$slots.upsell }, attrs: { "data-test": "toast-options" } },
                          [t._t("default")],
                          2
                        ),
                        t._v(" "),
                        e("div", { staticClass: "button button-close", on: { click: t.hide } }, [
                          e("span", { staticClass: "button-label" }, [t._v("Close")])
                        ])
                      ])
                    : t._e()
                ]),
                t._v(" "),
                e("transition", { attrs: { name: "fade", duration: "150" } }, [
                  t.active
                    ? e("div", {
                        staticClass: "toast-overlay",
                        on: {
                          click: function (e) {
                            return e.stopPropagation(), t.hide.apply(null, arguments);
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
      o._withStripped = !0;
      const n = {
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
      a(30562);
      const i = (0, a(51900).Z)(n, o, [], !1, null, "585a48d3", null).exports;
    },
    34070: (t, e, a) => {
      var o = a(95929);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals),
        (0, a(45346).Z)("325af400", o, !1, { ssrId: !0 });
    },
    30562: (t, e, a) => {
      var o = a(78836);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals),
        (0, a(45346).Z)("8544ab60", o, !1, { ssrId: !0 });
    },
    96742: (t, e, a) => {
      var o = a(68291);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[t.id, o, ""]]),
        o.locals && (t.exports = o.locals),
        (0, a(45346).Z)("5ef0eaa0", o, !1, { ssrId: !0 });
    },
    86587: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjEgMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTE2LjUgMTJ2OC4yNWMwIDEuMzMzLTIgMS4zMzMtMiAwdi04LjI1YzAtMS4zMzMgMi0xLjMzMyAyIDB6Ii8+PHBhdGggZD0ibTExLjI1IDE1LjI1aDguMjVjMS4zMzMgMCAxLjMzMyAyIDAgMmgtOC4yNWMtMS4zMzMgMC0xLjMzMy0yIDAtMnptLTguNSAzYTEgMSAwIDAgMSAtMiAwIDcuNzUyIDcuNzUyIDAgMCAxIDEwLjc5Mi03LjEyOCAxIDEgMCAxIDEgLS43ODQgMS44NCA1Ljc1MiA1Ljc1MiAwIDAgMCAtOC4wMDggNS4yODh6Ii8+PHBhdGggZD0ibTguNSAyLjc1YTMuMTI1IDMuMTI1IDAgMSAwIDAgNi4yNSAzLjEyNSAzLjEyNSAwIDAgMCAwLTYuMjV6bTAtMmE1LjEyNSA1LjEyNSAwIDEgMSAwIDEwLjI1IDUuMTI1IDUuMTI1IDAgMCAxIDAtMTAuMjV6Ii8+PC9nPjwvc3ZnPg==";
    },
    79715: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MzAgNDIwIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik00MjUuMDUwMDQzOTI4NjIzMiwxMDkuODU5MzM5NTc0ODEzODQgVjE1LjgxODMzOTU3NDgxMzg0MSBhMTAuOTczLDEwLjk3MyAwIDAgMCAtNS4yMjQsLTguODgyIGExMy4wNiwxMy4wNiAwIDAgMCAtOS45MjcsLTEuNTY3MDAwMDAwMDAwMDAwMiBsLTIwNy40MTIsODIuNTQ3IGgtMTAyLjQgYTUzLjI5Myw1My4yOTMgMCAwIDAgLTQ1Ljk3NiwyOC4yMTIgbC05LjQwNCwzLjY1NyBDMjAuODk4MDQzOTI4NjIzMiwxMjguMDM2MzM5NTc0ODEzODQgNC45NTAwNDM5Mjg2MjMxOTksMTUwLjQ4OTMzOTU3NDgxMzg0IDUuMDAxMDQzOTI4NjIzMTk5LDE3NS42ODczMzk1NzQ4MTM4NSBjLTAuMTUwMDAwMDAwMDAwMDAwMSwyNS4xMDkgMTUuODc3LDQ3LjQ2MyAzOS43MDYsNTUuMzggbDYuMjY5LDIuNjEyIGE1My44MTIsNTMuODEyIDAgMCAwIDI2LjEyMiwyOC43MzUgbDI3LjY5LDEwMC4zMSBjNy40MjgsMjcuMjg0IDM1LjU2OCw0My4zOCA2Mi44NTIsMzUuOTUyIGE1MS4xOTcsNTEuMTk3IDAgMCAwIDI3LjUzMiwtMTguNzExIGE1My44MSw1My44MSAwIDAgMCA4LjM1OSwtNDUuNDUzIGwtMTguODA4LC02OC45NjMgaDE3Ljc2MyBsMjA3LjQxMiw4NC4xMTQgbDMuNjU3LDEuMDQ1IGExMi41NDMsMTIuNTQzIDAgMCAwIDYuMjY5LC0xLjU2NzAwMDAwMDAwMDAwMDIgYTkuOTI2LDkuOTI2IDAgMCAwIDUuMjI0LC04LjM1OSB2LTk5LjI2NSBjMzYuMzU2LC0wLjAwMTAwMDAwMDAwMDAwMDAwMDkgNjUuODI4LC0yOS40NzQgNjUuODI3LC02NS44MzEgYzAsLTM2LjM1NSAtMjkuNDcsLTY1LjgyNiAtNjUuODI1LC02NS44Mjcgek00OC44ODcwNDM5Mjg2MjMyLDIxMC4xNjkzMzk1NzQ4MTM4NSBhMzUuMDA0LDM1LjAwNCAwIDAgMSAtMjEuOTQzLC0zNC40ODIgQTM1LjAwNCwzNS4wMDQgMCAwIDEgNDguODg3MDQzOTI4NjIzMiwxNDEuMjA1MzM5NTc0ODEzODUgdjY4Ljk2NCB6bTEyOS41NjcsMTU2LjczNSBhMjkuNzc5LDI5Ljc3OSAwIDAgMSAtMjQuNTU1LDEyLjAxNiBhMzEuMzQ2LDMxLjM0NiAwIDAgMSAtMjkuMjU3LC0yMi45ODggbC0yNC41NTUsLTkwLjM4NCBoNjMuMjE2IGwxOS44NTMsNzQuMTg4IGEzMS4zNDcsMzEuMzQ3IDAgMCAxIC00LjcwMiwyNy4xNjggem0xNi43MTksLTEyMi4yNTQgSDEwMC4wODcwNDM5Mjg2MjMyIGMtMTUuODQ2LDAuODY5MDAwMDAwMDAwMDAwNCAtMjkuMzk2LC0xMS4yNzMgLTMwLjI2NSwtMjcuMTE5IGEyOC4yMywyOC4yMyAwIDAgMSAtMC4wMzcwMDAwMDAwMDAwMDAwMSwtMi4xMzggVjE0MS4yMDUzMzk1NzQ4MTM4NSBjLTAuNTg2MDAwMDAwMDAwMDAwNCwtMTcuMzAyIDEyLjk2NSwtMzEuODA0IDMwLjI2NywtMzIuMzkxIGwwLjAzNSwtMC4wMDEwMDAwMDAwMDAwMDAwMDA5IGg5NS4wODYgdjEzNS44Mzcgem0yMDguOTc5LDgwLjQ1OCBMMjE2LjA3MDA0MzkyODYyMzIsMjQ5Ljg3NTMzOTU3NDgxMzg0IFYxMDYuNzI0MzM5NTc0ODEzODUgbDE4OC4wODIsLTc1LjIzMyB2MjkzLjYxNyB6bTIwLjg5OCwtMTA0LjQ5IHYtODkuODYxIGMyNC44MTUsMC4wMDEwMDAwMDAwMDAwMDAwMDA5IDQ0LjkzLDIwLjExOCA0NC45MjksNDQuOTMzIGMtMC4wMDIwMDAwMDAwMDAwMDAwMDE4LDI0LjgxMiAtMjAuMTE2LDQ0LjkyNyAtNDQuOTI5LDQ0LjkyOCB6IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI4IiAvPjwvZz48L3N2Zz4K";
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    },
    52682: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTIuMDgzIDMuNTkxYTEuMiAxLjIgMCAwIDAtMi4wODQuODYybC4wODMgMS43NGEzLjY5NyAzLjY5NyAwIDAgMS0zLjg4NCAzLjg5NWwtMS43NDctLjA5YTEuMTk4IDEuMTk4IDAgMCAwLS44NjEgMi4wODNsMS4yOTcgMS4xNzlhMy43IDMuNyAwIDAgMSAuMDAyIDUuNDkzbC0xLjMgMS4xNzRhMS4xOTcgMS4xOTcgMCAwIDAgLjg2OCAyLjA4M2wxLjc1Ny0uMDg5YTMuNjk3IDMuNjk3IDAgMCAxIDMuODc0IDMuODgzbC0uMDkgMS43NDJhMS4xOTggMS4xOTggMCAwIDAgMi4wODMuODY0bDEuMTc4LTEuMjk2YTMuNjk5IDMuNjk5IDAgMCAxIDUuNDkyLS4wMDNsMS4xNyAxLjI5NWMuMjQuMjYyLjU4NC40MDQuOTM5LjM4OGExLjE5NyAxLjE5NyAwIDAgMCAxLjE0NC0xLjI0M2wtLjA4OS0xLjc1OGEzLjY5NyAzLjY5NyAwIDAgMSAzLjg4Mi0zLjg3NGwxLjc1LjA4OWExLjE5OCAxLjE5OCAwIDAgMCAuODY2LTIuMDg2bC0xLjMwMi0xLjE3NGEzLjcgMy43IDAgMCAxLS4wMDEtNS40OTRsMS4zMDItMS4xNzRhMS4xOTkgMS4xOTkgMCAwIDAtLjg2MS0yLjA4N2wtMS43NTYuMDlhMy42OTggMy42OTggMCAwIDEtMy44Ny0zLjg4bC4wOS0xLjc1YTEuMTk4IDEuMTk4IDAgMCAwLTIuMDkxLS44NjFsLTEuMTc3IDEuMjkyYTMuNjk2IDMuNjk2IDAgMCAxLTUuNDkyLjAwMWwtMS4xNzItMS4yOTR6bTMuMDI2LS4zODNhMS4xOTcgMS4xOTcgMCAwIDAgMS43ODUtLjAwMmwxLjE3OC0xLjI5NGEzLjY5OCAzLjY5OCAwIDAgMSA2LjQzOSAyLjY2OGwtLjA4OSAxLjc0OWExLjE5NyAxLjE5NyAwIDAgMCAxLjI1MiAxLjI1NmwxLjc1Mi0uMDg5YTMuNjk5IDMuNjk5IDAgMCAxIDIuNjYxIDYuNDRsLTEuMzAxIDEuMTc0YTEuMjAxIDEuMjAxIDAgMCAwLS4wMDEgMS43OGwxLjMwMyAxLjE3NmEzLjY5OCAzLjY5OCAwIDAgMS0yLjY2OCA2LjQzOWwtMS43NTEtLjA5YTEuMTk2IDEuMTk2IDAgMCAwLTEuMjU3IDEuMjZsLjA5IDEuNzU3YTMuNjk4IDMuNjk4IDAgMCAxLTYuNDMgMi42NTZsLTEuMTc2LTEuMzAyYTEuMTk3IDEuMTk3IDAgMCAwLTEuNzgyLjAwM2wtMS4xODIgMS4zMDJhMy42OTkgMy42OTkgMCAwIDEtNi40My0yLjY2NWwuMDktMS43NWExLjE5NiAxLjE5NiAwIDAgMC0xLjI1OS0xLjI1OGwtMS43NDguMDlhMy42OTYgMy42OTYgMCAwIDEtMi42NzMtNi40MzZsMS4zLTEuMTc0YTEuMjAxIDEuMjAxIDAgMCAwIDAtMS43ODRsLTEuMzAyLTEuMThhMy42OTkgMy42OTkgMCAwIDEgMi42NjUtNi40MzJsMS43NTIuMDg4YTEuMTk5IDEuMTk5IDAgMCAwIDEuMjU4LTEuMjY3bC0uMDg0LTEuNzUyYTMuNjk5IDMuNjk5IDAgMCAxIDYuNDMzLTIuNjZsMS4xNzUgMS4yOTd6Ii8+PHBhdGggZD0iTTE2IDExLjYyNmE0LjM3NSA0LjM3NSAwIDEgMCAwIDguNzUxIDQuMzc1IDQuMzc1IDAgMCAwIDAtOC43NXptMC0yLjVhNi44NzUgNi44NzUgMCAxIDEgMCAxMy43NTEgNi44NzUgNi44NzUgMCAwIDEgMC0xMy43NXoiLz48L2c+PC9zdmc+Cg==";
    }
  }
]);
