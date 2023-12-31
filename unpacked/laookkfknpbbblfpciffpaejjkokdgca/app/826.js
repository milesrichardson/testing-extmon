(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [826, 9437],
  {
    99437: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => f });
      var i = a(20144),
        s = a(88026),
        n = a(51726),
        o = a.n(n),
        r = a(55482),
        l = a(7838),
        d = a(35174);
      let h = {};
      const c = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (h[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", h[t.dataset.mobileClickHandlerId]),
            delete h[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var p = a(63420),
        u = a(64398),
        g = a(77197);
      i.ZP.use(s.Z, { name: "unreactive" }),
        i.ZP.use(o()),
        i.ZP.use(r.qK),
        i.ZP.use(p.og),
        i.ZP.use(g.Z),
        (i.ZP.prototype.$xhr = d.Z),
        (i.ZP.prototype.$e = l.Z),
        i.ZP.directive("mobile-click", c),
        new i.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        i.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: u.Z
        });
      const f = i.ZP;
    },
    60826: (t, e, a) => {
      "use strict";
      a.r(e);
      var i = a(99437),
        s = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              ref: "app-launcher",
              staticClass: "launcher app-container",
              class: { "launcher-loading": t.isLoading, active: t.containerOpen, "launcher-empty": t.isEmpty },
              style: {
                "--launcher-width": t.launcherWidth + "px",
                "--launcher-item-height": t.$options.dimensions.itemHeight + "px",
                "--launcher-item-width": t.$options.dimensions.itemWidth + "px",
                "--launcher-item-margin": t.$options.dimensions.itemMargin + "px",
                "--launcher-tab-side-padding": t.$options.dimensions.tabSidePadding + "px",
                "--launcher-nipple-x-shift": t.shiftNipple + "px",
                "--launcher-max-rows": 2,
                "--loading-animation-delay": t.$options.loadingAnimationDelay + "ms",
                "--loading-animation-duration": t.$options.loadingAnimationDuration + "ms"
              },
              attrs: { "data-test": "apps" }
            },
            [
              e(
                "div",
                {
                  ref: "app-dash",
                  staticClass: "app-dash app-dash-icon add-shadow toggle apps-toggle",
                  attrs: { "data-ob": "app-dash", "data-test": "app-dash" },
                  on: { click: t.toggleApp }
                },
                [
                  e("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64" } }, [
                    e("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        d: "M21 4h-9a8 8 0 0 0-8 8v9a8 8 0 0 0 8 8h9a8 8 0 0 0 8-8v-9a8 8 0 0 0-8-8ZM9 12a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Zm12 23h-9a8 8 0 0 0-8 8v9a8 8 0 0 0 8 8h9a8 8 0 0 0 8-8v-9a8 8 0 0 0-8-8ZM9 43a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9ZM43 4h9a8 8 0 0 1 8 8v9a8 8 0 0 1-8 8h-9a8 8 0 0 1-8-8v-9a8 8 0 0 1 8-8Zm0 5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm9 26h-9a8 8 0 0 0-8 8v9a8 8 0 0 0 8 8h9a8 8 0 0 0 8-8v-9a8 8 0 0 0-8-8Zm-12 8a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                      }
                    })
                  ]),
                  t._v(" "),
                  e("span", { staticClass: "app-dash-icon-label" }, [t._v("Apps")])
                ]
              ),
              t._v(" "),
              e(
                "transition",
                { attrs: { name: "slide-down-fade" } },
                [
                  t.containerOpen
                    ? e(
                        "app-popup",
                        {
                          attrs: {
                            tabs: t.$options.tabs,
                            position: "bottom-right",
                            region: "top-left",
                            "data-test": "apps-container",
                            width: t.launcherWidth
                          }
                        },
                        [
                          e("header", { staticClass: "header" }, [
                            t.isLoading || t.isEmpty
                              ? e(
                                  "nav",
                                  { ref: "tabs-loading", staticClass: "tabs-loading" },
                                  t._l(t.$options.dimensions.loadingStateTabCount, function (a) {
                                    return e("span", { key: a, staticClass: "tab" }, [
                                      e("span", { staticClass: "tab-text-placeholder" }, [t._v("setsHeight"), e("span")]),
                                      t._v(" "),
                                      e("div", { domProps: { innerHTML: t._s(t.tabListSvg) } })
                                    ]);
                                  }),
                                  0
                                )
                              : e(
                                  "nav",
                                  { ref: "tab-nav", class: { "no-shrink": t.tabsBounced }, attrs: { "data-test": "categories" } },
                                  t._l(t.navTabs.length ? t.navTabs : t.appData, function (a, i) {
                                    return e(
                                      "span",
                                      {
                                        key: i,
                                        ref: "tab",
                                        refInFor: !0,
                                        staticClass: "tab",
                                        class: { active: i === t.activeTab },
                                        attrs: { tabindex: "0" },
                                        on: {
                                          keydown: function (e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                              ? null
                                              : t.switchToTab(i);
                                          },
                                          click: function (e) {
                                            return t.switchToTab(i);
                                          }
                                        }
                                      },
                                      [t._v("\n\t\t\t\t\t\t" + t._s(a.title) + "\n\t\t\t\t\t")]
                                    );
                                  }),
                                  0
                                ),
                            t._v(" "),
                            t.showMoreIcon
                              ? e(
                                  "div",
                                  {
                                    ref: "more-wrapper",
                                    staticClass: "more-wrapper",
                                    class: { active: t.activeTabIsInDropdown },
                                    attrs: { tabindex: "0" },
                                    on: {
                                      keyup: function (e) {
                                        if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                                        t.showMore = !t.showMore;
                                      }
                                    }
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass: "more",
                                        on: {
                                          click: function (e) {
                                            t.showMore = !t.showMore;
                                          }
                                        }
                                      },
                                      [e("inline-svg", { staticClass: "icon icon-ellipsis", attrs: { src: a(49710) } })],
                                      1
                                    ),
                                    t._v(" "),
                                    t.showMore
                                      ? e("div", { staticClass: "dropdown more-dropdown nipple-top-right" }, [
                                          e(
                                            "ul",
                                            { ref: "more-dropdown", staticClass: "dropdown-list" },
                                            t._l(t.moreTabs, function (a, i) {
                                              return e(
                                                "li",
                                                {
                                                  key: i,
                                                  ref: "dropdown-tabs",
                                                  refInFor: !0,
                                                  staticClass: "dropdown-tabs",
                                                  class: { active: i === t.activeTab - t.navTabs.length },
                                                  attrs: { tabindex: "0" },
                                                  on: {
                                                    keyup: function (e) {
                                                      return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                                        ? null
                                                        : (e.stopPropagation(), t.switchToTab(i, !0));
                                                    },
                                                    click: function (e) {
                                                      return e.stopPropagation(), t.switchToTab(i, !0);
                                                    }
                                                  }
                                                },
                                                [e("span", [t._v(t._s(a.title))])]
                                              );
                                            }),
                                            0
                                          )
                                        ])
                                      : t._e()
                                  ]
                                )
                              : t._e(),
                            t._v(" "),
                            e("span", { ref: "search-wrapper", staticClass: "search-wrapper", class: { active: t.searchFocused } }, [
                              e("span", { staticClass: "input-wrapper" }, [
                                e("i", { staticClass: "icon-search" }),
                                t._v(" "),
                                t.searchInput
                                  ? e(
                                      "span",
                                      {
                                        staticClass: "icon-clear-wrapper",
                                        on: {
                                          click: function (e) {
                                            return e.stopPropagation(), t.clearSearch(!0);
                                          }
                                        }
                                      },
                                      [e("inline-svg", { staticClass: "icon icon-clear clear", attrs: { src: a(21794) } })],
                                      1
                                    )
                                  : t._e(),
                                t._v(" "),
                                e("input", {
                                  directives: [{ name: "model", rawName: "v-model", value: t.searchInput, expression: "searchInput" }],
                                  ref: "search",
                                  staticClass: "search-input apps-search",
                                  attrs: { placeholder: "Search", "data-test": "search-input" },
                                  domProps: { value: t.searchInput },
                                  on: {
                                    focus: function (e) {
                                      t.searchFocused = !0;
                                    },
                                    blur: function (e) {
                                      t.searchFocused = !1;
                                    },
                                    keydown: function (e) {
                                      return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                        ? null
                                        : (e.preventDefault(), t.onSearchEnter.apply(null, arguments));
                                    },
                                    input: function (e) {
                                      e.target.composing || (t.searchInput = e.target.value);
                                    }
                                  }
                                })
                              ])
                            ]),
                            t._v(" "),
                            e("span", {
                              staticClass: "underline",
                              class: { "u--no-transition": t.blockUnderlineTransition },
                              style: { left: t.underlineLeft, width: t.underlineWidth }
                            })
                          ]),
                          t._v(" "),
                          e(
                            "section",
                            { ref: "body", staticClass: "body" },
                            [
                              e(
                                "transition",
                                {
                                  attrs: { name: "fade", mode: "out-in", duration: t.listTransitionDuration },
                                  on: { "after-enter": t.afterTabSelectedTransition }
                                },
                                [
                                  t.isLoading
                                    ? e("ul", { key: "empty", ref: "apps-loading", staticClass: "app-list app-list-loading" }, [
                                        e("div", { domProps: { innerHTML: t._s(t.appListSvg) } })
                                      ])
                                    : e(
                                        "ul",
                                        {
                                          key: t.activeTab,
                                          ref: "app-list",
                                          staticClass: "app-list",
                                          class: { "no-matches-found": 0 === t.filteredItems.length, "active-tab-empty": t.activeTabEmpty },
                                          attrs: { "data-test": "apps-list" }
                                        },
                                        t._l(t.filteredItems, function (a, i) {
                                          return e("li", { key: i, staticClass: "item", class: { "bottom-row": t.isInBottomRow(i) } }, [
                                            e(
                                              "a",
                                              {
                                                ref: "items",
                                                refInFor: !0,
                                                staticClass: "u--pointer",
                                                attrs: { title: a.url, tabindex: "0" },
                                                on: {
                                                  click: function (e) {
                                                    return t.newTabForFileLink(a.url);
                                                  }
                                                }
                                              },
                                              [
                                                e("div", { staticClass: "logo" }, [e("img", { attrs: { src: a.iconUrl } })]),
                                                t._v(" "),
                                                e("div", { staticClass: "name" }, [t._v(t._s(a.title))])
                                              ]
                                            )
                                          ]);
                                        }),
                                        0
                                      )
                                ]
                              )
                            ],
                            1
                          ),
                          t._v(" "),
                          t.isEmpty
                            ? e("section", { staticClass: "empty-state" }, [
                                e("span", { staticClass: "empty-message" }, [t._v("Your team hasn't connected any apps yet.")])
                              ])
                            : t._e()
                        ]
                      )
                    : t._e()
                ],
                1
              )
            ],
            1
          );
        };
      s._withStripped = !0;
      const n = new (a(20144).ZP.extend({
          name: "AppDataManager",
          data: () => ({ rawData: {}, appData: [], loaded: !1 }),
          localStorageKey: "app_data",
          created() {
            (this.rawData = localStorage.getObject("apps")),
              this.rawData && (this.$set(this, "appData", this.buildHierarchy(this.rawData)), (this.loaded = !0)),
              this.getData().then((t) => {
                (this.rawData = t),
                  localStorage.setObject("apps", this.rawData),
                  this.$set(this, "appData", this.buildHierarchy(this.rawData)),
                  (this.loaded = !0);
              });
          },
          methods: {
            getData: () =>
              new Promise((t, e) => {
                $.ajax({
                  url: m.globals.urlRootApi + "team/apps",
                  success: (e) => {
                    t(e);
                  },
                  error: (t) => {
                    e(t);
                  }
                });
              }),
            sort: (t, e) => t.order - e.order,
            buildHierarchy(t) {
              let e = [];
              return (
                t &&
                  t.categories &&
                  t.categories.forEach((t) => {
                    (t.apps = []), e.push(t);
                  }),
                t &&
                  t.apps &&
                  t.apps.forEach((t) => {
                    e.filter((e) => e.id === t.categoryId).forEach((e) => {
                      e.apps.push(t);
                    });
                  }),
                e.sort(this.sort).forEach((t) => t.apps.sort(this.sort)),
                e
              );
            }
          }
        }))(),
        o = {
          name: "AppLauncher",
          components: { AppPopup: a(56179).Z },
          dimensions: {
            rowLength: 4,
            maxRows: 2,
            itemMargin: 10,
            itemHeight: 114,
            itemWidth: 144,
            appPadding: 21,
            tabSidePadding: 11,
            loadingStateItemCount: 8,
            loadingStateTabCount: 2
          },
          loadingAnimationDuration: 1500,
          loadingAnimationDelay: 200,
          data: () => ({
            containerOpen: !1,
            navTabs: [],
            moreTabs: [],
            tabsBounced: !1,
            showMore: !1,
            showMoreIcon: !1,
            activeTab: 0,
            searchInput: "",
            underlineLeft: 0,
            underlineWidth: 0,
            blockUnderlineTransition: !0,
            blockListTransition: !0,
            shiftNipple: 0,
            appListSvg: "",
            tabListSvg: "",
            searchFocused: !1
          }),
          computed: {
            isLoading: () => !n.loaded,
            isEmpty() {
              return !(this.isLoading || (this.appData && this.appData.length));
            },
            appData: () => n.appData,
            activeTabEmpty() {
              return !this.isLoading && !this.isEmpty && 0 === this.appData[this.activeTab].apps.length;
            },
            navOverflow() {
              return this.moreTabs.length;
            },
            activeTabIsInDropdown() {
              return this.moreTabs.length && this.activeTab >= this.navTabs.length;
            },
            launcherWidth() {
              let t = this.$options.dimensions;
              return (t.itemWidth + t.itemMargin) * t.rowLength - t.itemMargin + 2 * t.appPadding;
            },
            bottomRowItemCount() {
              let t = this.filteredItems.length,
                e = this.$options.dimensions.rowLength,
                a = t % e;
              return 0 === a && 0 !== t && (a = e), a;
            },
            listTransitionDuration() {
              return this.blockListTransition ? 0 : 100;
            },
            filteredItems() {
              return this.appData.length
                ? this.searchInput
                  ? m.utils.fuzzyFilter(this.searchInput, n.rawData.apps, "title")
                  : this.appData[this.activeTab].apps
                : [];
            }
          },
          watch: {
            searchInput(t, e) {
              ((t && !e) || (e && !t)) && this.setUnderlinePosition();
            }
          },
          created() {
            m.on("globalEvent:key:A", this.toggleApp);
          },
          mounted() {
            this.toggleApp(),
              setTimeout(() => {
                this.blockListTransition = !1;
              }, 300);
          },
          destroyed() {
            m.off("globalEvent:key:A", this.toggleApp);
          },
          methods: {
            switchToTab(t, e) {
              e
                ? ((this.activeTab = this.navTabs.length + t), (this.focusFirstItem = !0), this.$nextTick(this.closeDropdown))
                : (this.activeTab = t),
                this.$nextTick(() => {
                  this.setUnderlinePosition();
                });
            },
            toggleApp() {
              (this.containerOpen = !this.containerOpen),
                this.$nextTick(() => {
                  if (this.containerOpen) {
                    if ((m.trigger("notification:hide"), this.updatePositioning(!0), this.addListeners(), this.isLoading)) {
                      (this.tabListSvg && this.appListSvg) || this.$nextTick(() => this.getLoadingStateSVG());
                      let t = this.$watch("isLoading", (e) => {
                        !1 === e &&
                          ((this.blockUnderlineTransition = !0),
                          this.$nextTick(() => {
                            this.bounceTabsToDropdown(), this.setUnderlinePosition(!0), t();
                          }));
                      });
                    } else
                      this.$nextTick(() => {
                        this.bounceTabsToDropdown(), this.setUnderlinePosition(!0);
                      });
                    this.$nextTick(() => {
                      this.$refs.search && this.$refs.search.focus();
                    });
                  } else this.removeListeners();
                });
            },
            setUnderlinePosition(t) {
              let e;
              this.searchInput
                ? ((e = this.$refs["search-wrapper"]),
                  (this.underlineLeft = `${e.offsetLeft}px`),
                  (this.underlineWidth = `${e.clientWidth}px`))
                : ((e = this.activeTabIsInDropdown
                    ? this.$refs["more-wrapper"]
                    : this.$refs.tab && this.$refs.tab.length && this.$refs.tab[this.activeTab]),
                  e && 0 === this.activeTab
                    ? ((this.underlineLeft = e.offsetLeft + this.$options.dimensions.appPadding - 1 + "px"),
                      (this.underlineWidth =
                        e.clientWidth - (this.$options.dimensions.tabSidePadding + this.$options.dimensions.appPadding) + 2 + "px"))
                    : e &&
                      ((this.underlineLeft = e.offsetLeft + this.$options.dimensions.tabSidePadding - 1 + "px"),
                      (this.underlineWidth =
                        e.clientWidth - 2 * this.$options.dimensions.tabSidePadding + (this.activeTabIsInDropdown ? 1 : 2) + "px"))),
                t &&
                  setTimeout(() => {
                    this.blockUnderlineTransition = !1;
                  }, 50);
            },
            newTabForFileLink(t) {
              m.utils.newTabForFileLink(t), this.onLinkClick();
            },
            closeDropdown() {
              this.showMore = !1;
            },
            updatePositioning() {
              let t = this.$refs["app-dash"].getBoundingClientRect(),
                e = Math.round(t.width),
                a = Math.round(t.left);
              this.shiftNipple = Math.round(a + e / 2 - window.innerWidth / 2);
            },
            isInBottomRow(t) {
              return this.filteredItems.length - (t + 1) < this.bottomRowItemCount;
            },
            bounceTabsToDropdown() {
              if (this.tabsBounced) return;
              const t = this.$refs["tab-nav"];
              if (!t) return;
              const e = t.clientWidth,
                a = this.$refs.tab,
                i = a[a.length - 1];
              this.tabIsOverflowing(i, e) &&
                ((this.showMoreIcon = !0),
                this.$nextTick(() => {
                  let t,
                    i = [...this.appData];
                  for (let i = a.length - 1; i >= 0 && this.tabIsOverflowing(a[i], e); i--) t = i;
                  (this.moreTabs = i.splice(t, a.length - t)), (this.navTabs = i), (this.tabsBounced = !0);
                }));
            },
            getTabOffsetRight: (t) => t.offsetLeft + t.clientWidth,
            tabIsOverflowing(t, e) {
              return this.getTabOffsetRight(t) > e;
            },
            getLoadingStateSVG() {
              let t,
                e,
                a = this.$refs["apps-loading"],
                i = this.$refs["tabs-loading"],
                s = "app-launcher-cached-loading-svg",
                n = localStorage.getObject(s),
                o = this.$options.dimensions,
                r = `${this.launcherWidth}-${o.itemWidth}-${o.itemHeight}-${o.itemMargin}`;
              n && n.params === r
                ? ((this.appListSvg = n.appsSVG), (this.tabListSvg = n.tabsSVG))
                : ((t = this.createSVG(a, "apps-clip-path", "apps")),
                  (e = this.createSVG(i, "tabs-clip-path", "tabs")),
                  setTimeout(() => {
                    localStorage.setObject(s, { params: r, tabsSVG: e.outerHTML, appsSVG: t.outerHTML });
                  }, 1e3),
                  (this.appListSvg = t.outerHTML),
                  (this.tabListSvg = e.outerHTML));
            },
            createSVG(t, e, a) {
              function i(t, e, a, i, s) {
                let n = document.createElementNS(s, "rect");
                return (
                  n.setAttribute("width", e),
                  n.setAttribute("height", t),
                  n.setAttribute("rx", 3),
                  n.setAttribute("ry", 3),
                  n.setAttribute("x", a),
                  n.setAttribute("y", i),
                  n.setAttribute("fill", "#000"),
                  n
                );
              }
              if (t) {
                let s = t.clientHeight,
                  n = t.clientWidth,
                  o = "http://www.w3.org/2000/svg",
                  r = document.createElementNS(o, "svg"),
                  l = document.createElementNS(o, "defs"),
                  d = document.createElementNS(o, "clipPath");
                if (
                  (r.setAttribute("height", s),
                  r.setAttribute("width", n),
                  r.setAttribute("viewbox", `0 0 ${s} ${n}`),
                  d.setAttribute("id", e),
                  r.appendChild(l),
                  l.appendChild(d),
                  "apps" === a)
                ) {
                  let t = this.$options.dimensions,
                    e = t.itemWidth,
                    a = t.itemHeight,
                    s = t.itemMargin,
                    n = t.appPadding,
                    r = t.rowLength;
                  for (let l = 0; l < t.loadingStateItemCount; l++) {
                    let t, h;
                    l < r ? ((t = n + l * (e + s)), (h = n)) : ((t = n + (l - r) * (e + s)), (h = n + a + s)),
                      d.appendChild(i(a, e, t, h, o));
                  }
                } else if ("tabs" === a)
                  for (let e of t.children) {
                    let t = e.children[0],
                      a = t.offsetLeft,
                      s = t.offsetTop,
                      n = t.clientHeight,
                      r = t.clientWidth;
                    d.appendChild(i(n, r, a, s, o));
                  }
                return r;
              }
            },
            onSearchEnter() {
              this.filteredItems.length && this.filteredItems[0] && this.filteredItems[0].url && window.open(this.filteredItems[0].url);
            },
            onGlobalEsc(t) {
              document.activeElement === this.$refs.search
                ? (t.preventDefault(), t.stopPropagation(), this.$refs.search.blur(), this.clearSearch())
                : this.toggleApp();
            },
            onGlobalClick(t) {
              this.$refs["app-launcher"] && !this.$refs["app-launcher"].contains(t.target)
                ? this.toggleApp()
                : this.$refs["more-wrapper"] && !this.$refs["more-wrapper"].contains(t.target) && this.closeDropdown();
            },
            onKeyDown(t) {
              37 === t.keyCode
                ? ("INPUT" == t.target.tagName && t.target.value) || this.onArrowLeft(t)
                : 38 === t.keyCode
                ? this.onArrowUp(t)
                : 39 === t.keyCode
                ? ("INPUT" == t.target.tagName && t.target.value) || this.onArrowRight(t)
                : 40 === t.keyCode && this.onArrowDown(t);
            },
            onLinkClick() {
              this.toggleApp();
            },
            afterTabSelectedTransition() {
              this.focusFirstItem && (this.$refs.items[0] && this.$refs.items[0].focus(), (this.focusFirstItem = !1));
            },
            onArrowLeft(t) {
              let e;
              if (this.targetIsTab(t.target)) {
                if ((t.preventDefault(), (e = this.$refs.tab.indexOf(t.target)), 0 === e)) return;
                this.$refs.tab[e - 1].focus(), this.switchToTab(e - 1);
              } else if (this.targetIsSearch(t.target))
                if (this.navOverflow) (this.showMore = !0), this.$refs["more-wrapper"] && this.$refs["more-wrapper"].focus();
                else {
                  t.preventDefault();
                  let e = this.$refs.tab.length - 1;
                  this.$refs.tab[e].focus(), this.switchToTab(e);
                }
              else if ((this.navOverflow && this.targetIsMoreIcon(t.target)) || this.targetIsInDropdown(t.target)) {
                (this.showMore = !1), t.preventDefault();
                let e = this.$refs.tab.length - 1;
                this.$refs.tab[e].focus(), this.switchToTab(e);
              } else if (this.targetIsItem(t.target)) {
                if ((t.preventDefault(), (e = this.$refs.items.indexOf(t.target)), 0 === e || !(e % this.$options.dimensions.rowLength)))
                  return;
                this.$refs.items[e - 1].focus();
              }
            },
            onArrowUp(t) {
              if (this.targetIsItem(t.target)) {
                t.preventDefault();
                let e = this.$refs.items.indexOf(t.target);
                if (e < this.$options.dimensions.rowLength) this.$refs.search.focus();
                else {
                  let t = e - this.$options.dimensions.rowLength;
                  this.scrollToElement(this.$refs.items[t]), this.$refs.items[t].focus({ preventScroll: !0 });
                }
              } else if (this.targetIsInDropdown(t.target)) {
                const e = this.$refs["dropdown-tabs"].indexOf(t.target);
                if (e) {
                  const t = this.$refs["dropdown-tabs"][e - 1];
                  t && t.focus();
                } else this.$refs["more-wrapper"].focus();
              }
            },
            onArrowRight(t) {
              let e;
              if (this.targetIsTab(t.target))
                t.preventDefault(),
                  (e = this.$refs.tab.indexOf(t.target)),
                  e === this.$refs.tab.length - 1
                    ? this.navOverflow
                      ? ((this.showMore = !0), this.$refs["more-wrapper"] && this.$refs["more-wrapper"].focus())
                      : this.$refs.search.focus()
                    : (this.$refs.tab[e + 1].focus(), this.switchToTab(e + 1));
              else if ((this.navOverflow && this.targetIsMoreIcon(t.target)) || this.targetIsInDropdown(t.target))
                (this.showMore = !1), this.$refs.search.focus();
              else if (this.targetIsItem(t.target)) {
                if ((t.preventDefault(), (e = this.$refs.items.indexOf(t.target)), !((e + 1) % this.$options.dimensions.rowLength))) return;
                if (e === this.filteredItems.length - 1) return;
                this.$refs.items[e + 1].focus();
              }
            },
            onArrowDown(t) {
              if ((this.targetIsTab(t.target) || this.targetIsSearch(t.target)) && this.filteredItems.length)
                t.preventDefault(), this.scrollToElement(this.$refs.items[0]), this.$refs.items[0].focus({ preventScroll: !0 });
              else if (this.targetIsMoreIcon(t.target)) this.$refs["dropdown-tabs"][0].focus();
              else if (this.targetIsInDropdown(t.target)) {
                const e = this.$refs["dropdown-tabs"].indexOf(t.target) + 1,
                  a = this.$refs["dropdown-tabs"][e];
                a && a.focus();
              } else if (this.targetIsItem(t.target)) {
                t.preventDefault();
                const e = this.$refs.items.indexOf(t.target) + this.$options.dimensions.rowLength;
                if (e > this.$refs.items.length - 1) return;
                this.scrollToElement(this.$refs.items[e]), this.$refs.items[e].focus({ preventScroll: !0 });
              }
            },
            scrollToElement(t) {
              this.$refs.body.scrollTo({ top: t.offsetTop - this.$options.dimensions.appPadding, behavior: "smooth" });
            },
            targetIsTab(t) {
              return -1 !== this.$refs.tab.indexOf(t);
            },
            targetIsSearch(t) {
              return this.$refs.search === t;
            },
            targetIsItem(t) {
              const e = this.$refs.items;
              return e && -1 !== e.indexOf(t);
            },
            targetIsMoreIcon(t) {
              return this.$refs["more-wrapper"] === t;
            },
            targetIsInDropdown(t) {
              const e = this.$refs["more-dropdown"];
              return e && e.contains(t);
            },
            addListeners() {
              m.on("globalEvent:esc", this.onGlobalEsc),
                m.on("globalEvent:click", this.onGlobalClick),
                window.addEventListener("keydown", this.onKeyDown);
            },
            removeListeners() {
              m.off("globalEvent:esc", this.onGlobalEsc),
                m.off("globalEvent:click", this.onGlobalClick),
                window.removeEventListener("keydown", this.onKeyDown);
            },
            clearSearch(t) {
              (this.searchInput = ""), t && this.$refs.search.focus();
            },
            isUrlLocalFileLink: (t) => m.utils.isUrlLocalFileLink(t)
          }
        };
      a(72711);
      const r = (0, a(51900).Z)(o, s, [], !1, null, "2e62b280", null).exports;
      m.widgetManager.handover("apps", null, {
        region: "top-center",
        order: "append",
        bootstrap: function (t) {
          new i.Z({ render: (t) => t(r) }).$mount(t);
        }
      });
    },
    77176: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        s = a.n(i),
        n = a(23645),
        o = a.n(n)()(s());
      o.push([
        t.id,
        "\n/* stylelint-disable */\n.launcher[data-v-2e62b280] { --launcher-item-bg: var(--color-stop-1); order: 5;\n}\n[data-v-2e62b280] .app {  padding: 0;\n}\n.header[data-v-2e62b280] { --header-font-size: 0.875rem; height: auto; padding: 0; position: relative; display: flex; align-items: stretch; justify-content: flex-start;\n}\n.header[data-v-2e62b280]:after { height: 1px; position: absolute; right: 0; bottom: -1px; left: 0; background-color: var(--border-color); content: '';\n}\n.header nav[data-v-2e62b280] { min-width: 0; flex: 1 1 auto; display: flex; align-items: center; justify-content: flex-start; overflow: hidden;\n}\n\t\t\t\t/* ^ flex: 1 1 auto; is necessary for tab overflow calculation */\n.header nav.no-shrink[data-v-2e62b280] { flex-shrink: 0;\n} /* applied after nav items have been bounced */\n.tab[data-v-2e62b280] { padding: calc(var(--app-padding) - 5px) var(--launcher-tab-side-padding) calc(var(--app-padding) - 6px); color: var(--color-stop-4); cursor: pointer; font-size: var(--header-font-size); font-weight: 600; outline: none; transition: color 0.1s ease; white-space: nowrap;\n}\n.tab[data-v-2e62b280]:first-child { padding-left: var(--app-padding);\n}\n.tab[data-v-2e62b280]:hover, .tab[data-v-2e62b280]:focus { color: var(--color-stop-5);\n}\n.tab[data-v-2e62b280]:active { color: hsl(var(--color-base)); transition-duration: 0s;\n}\n.tab.active[data-v-2e62b280] { color: hsl(var(--color-base));\n}\n.header .more-wrapper[data-v-2e62b280] { position: relative; align-self: stretch; display: flex; align-items: stretch; justify-content: center;\n}\n.header .more-wrapper[data-v-2e62b280]:focus { outline: none;\n}\n.header .more[data-v-2e62b280] { padding: var(--launcher-tab-side-padding); display: flex; align-items: center; justify-content: center; opacity: 0.6; cursor: pointer;\n}\n.header .more[data-v-2e62b280]:hover { opacity: 0.8;\n}\n.header .more-wrapper.active .more[data-v-2e62b280], .header .more-wrapper:focus .more[data-v-2e62b280] { opacity: 1;\n}\n.more-dropdown[data-v-2e62b280] { margin-top: 0; position: absolute; right: calc(50% - 33px - 7px); display: flex;\n}\n.dropdown-list > li[data-v-2e62b280] { max-width: 450px;\n}\n.dropdown-list > li.active[data-v-2e62b280] { background-color: var(--border-color); font-weight: 500;\n}\n.dropdown-list > li[data-v-2e62b280]:focus { background-color: var(--hover-bg); outline: none;\n}\n.dropdown-list > li > span[data-v-2e62b280] { width: max-content; line-height: 1.5; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.search-wrapper[data-v-2e62b280] { max-width: 170px; min-width: 100px; flex: 0 1000 auto;\n} /* flex: 0 1000 auto is a bit hacky, but it works well. The nav needs to be able to shrink so the tab overflow calculation can work, but we really want the search to absorb most of overflow */\n.header .underline[data-v-2e62b280] { height: 2px; position: absolute; bottom: -1px; z-index: 1; background-color: hsl(var(--color-base)); content: ''; transition: left 0.2s ease, width 0.2s ease;\n}\n.body[data-v-2e62b280] { height: calc(var(--launcher-item-height) * var(--launcher-max-rows) + (var(--app-padding) * 2 ) + var(--launcher-item-margin)); overflow-x: hidden; overflow-y: auto;\n}\n.app-list[data-v-2e62b280] { padding: var(--app-padding); position: relative; display: grid; grid-gap: var(--launcher-item-margin); grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n.app-list.no-matches-found[data-v-2e62b280]:before { position: absolute; right: 0; bottom: 50%; left: 0; opacity: 0.45; content: 'No matches found.'; text-align: center;\n}\n.app-list.active-tab-empty[data-v-2e62b280]:before { content: \"This category is empty.\";\n}\n.app-list .item[data-v-2e62b280] { height: var(--launcher-item-height); width: var(--launcher-item-width); border-radius: var(--border-radius);\n}\n.app-list .item.bottom-row[data-v-2e62b280] { margin-bottom: 0;\n}\n.app-list .item a[data-v-2e62b280] { height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 3px; cursor: pointer; transition: background-color 0.1s ease;\n}\n.app-list .item a[data-v-2e62b280]:hover, .app-list .item a[data-v-2e62b280]:focus { background-color: var(--launcher-item-bg); outline: none;\n}\n.app-list .item .logo[data-v-2e62b280] { padding-top: 0; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 600;\n}\n.app-list .item .logo img[data-v-2e62b280] { height: 48px; padding-top: 5px; opacity: 0.8; filter: var(--filter-dark-invert);\n}\n.app-list .item .name[data-v-2e62b280] { padding-top: 10px; opacity: 0.7; font-size: 0.875rem; text-align: center;\n}\n.top-center .app.slide-down-fade-enter[data-v-2e62b280], .top-center .app.slide-down-fade-leave-to[data-v-2e62b280]  { transform: translateY(-5px) translateX(-50%);\n}\n\n\t/* LOADING STATE */\n.launcher-loading[data-v-2e62b280] { --gradient-background: linear-gradient(90deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%); --gradient-background-size: calc(var(--launcher-width) * 2);\n}\n.launcher-loading .app-list-loading[data-v-2e62b280], .launcher-loading .tabs-loading[data-v-2e62b280] { animation: glisten-2e62b280 var(--loading-animation-duration) linear infinite; background: var(--gradient-background); background-color: var(--launcher-item-bg); background-position: calc(var(--launcher-width) / 4) 0; background-size: var(--gradient-background-size);\n}\n.launcher-loading .app-list-loading[data-v-2e62b280] { height: 100%; animation-delay: var(--loading-animation-delay); clip-path: url(#apps-clip-path); overflow: hidden;\n}\n.launcher-loading .tabs-loading[data-v-2e62b280] { animation-delay: var(--loading-animation-delay); clip-path: url(#tabs-clip-path);\n}\n.tabs-loading[data-v-2e62b280] svg, .apps-list-loading[data-v-2e62b280] svg { position: absolute;\n}\n.launcher-loading .tab .tab-text-placeholder[data-v-2e62b280] { width: 120px; position: relative; display: inline-block; color: transparent;\n}\n.tab .tab-text-placeholder > span[data-v-2e62b280] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: var(--border-radius);\n}\n@keyframes glisten-2e62b280 {\n0% { background-position: calc((var(--launcher-width) * -1) - (var(--launcher-width) / 4)) 0;\n}\n20% { background-position: calc(var(--launcher-width) / 4) 0;\n}\n100% { background-position: calc(var(--launcher-width) / 4) 0;\n}\n}\n\n\t/* EMPTY STATE */\n.launcher-empty .tab[data-v-2e62b280], .launcher-empty .body[data-v-2e62b280], .launcher-empty .search-wrapper[data-v-2e62b280], .launcher-empty .header[data-v-2e62b280]:after, .launcher-empty .no-matches-found[data-v-2e62b280] { visibility: hidden;\n}\n.no-matches-found[data-v-2e62b280] { height: 100%;\n}\n.empty-state[data-v-2e62b280] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center;\n}\n.empty-message[data-v-2e62b280] { opacity: 0.8;\n}\n",
        ""
      ]);
      const r = o;
    },
    72711: (t, e, a) => {
      var i = a(77176);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("4ae5e591", i, !1, { ssrId: !0 });
    },
    21794: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K";
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    }
  }
]);
