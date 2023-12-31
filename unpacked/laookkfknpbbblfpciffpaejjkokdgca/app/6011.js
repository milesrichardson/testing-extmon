(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [6011, 9437],
  {
    99437: (t, a, e) => {
      "use strict";
      e.d(a, { Z: () => v });
      var i = e(20144),
        s = e(88026),
        o = e(51726),
        n = e.n(o),
        r = e(34952),
        c = e(7838),
        l = e(35174);
      let d = {};
      const p = {
        bind: function (t, a) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (d[t.dataset.mobileClickHandlerId] = a.value),
            t.addEventListener("click", a.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", d[t.dataset.mobileClickHandlerId]),
            delete d[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var g = e(28692),
        u = e(64398),
        h = e(77197);
      i.ZP.use(s.Z, { name: "unreactive" }),
        i.ZP.use(n()),
        i.ZP.use(r.InlineSvgPlugin),
        i.ZP.use(g.og),
        i.ZP.use(h.Z),
        (i.ZP.prototype.$xhr = l.Z),
        (i.ZP.prototype.$e = c.Z),
        i.ZP.directive("mobile-click", p),
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
      const v = i.ZP;
    },
    30827: (t, a, e) => {
      "use strict";
      e.d(a, { Z: () => s });
      var i = e(99437);
      const s = (m.showAnyway = new (i.Z.extend({
        name: "ShowAnyway",
        data: () => ({ widgets: [] }),
        methods: {
          show(t) {
            this.includes(t) || this.widgets.push(t);
          },
          hide(t) {
            const a = this.widgets.indexOf(t);
            ~a && this.widgets.splice(a, 1);
          },
          includes(t) {
            return this.widgets.includes(t);
          }
        }
      }))());
    },
    46011: (t, a, e) => {
      "use strict";
      e.r(a);
      var i = e(99437),
        s = function () {
          var t = this,
            a = t._self._c;
          return a(
            "div",
            {
              ref: "topics",
              staticClass: "topics app-container hide-apps-fade",
              class: { "show-anyway": t.showAnyway },
              attrs: { id: "topics", "data-test": "topics", "data-show-anyway": "topics" }
            },
            [
              a("transition", { attrs: { name: "fade" } }, [
                t.containerOpen
                  ? t._e()
                  : a(
                      "div",
                      {
                        staticClass: "app-dash app-dash-icon add-shadow toggle topics-toggle",
                        attrs: { "data-test": "app-dash" },
                        on: { click: t.toggleApp }
                      },
                      [
                        a("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 64 64" } }, [
                          a("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d: "M26.5 7h3a6.5 6.5 0 0 1 6.5 6.5v37a6.5 6.5 0 0 1-6.5 6.5h-3a6.5 6.5 0 0 1-6.5-6.5v-37A6.5 6.5 0 0 1 26.5 7Zm0 5a1.5 1.5 0 0 0-1.5 1.5v37a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-37a1.5 1.5 0 0 0-1.5-1.5h-3Zm18.257-4.03 2.935-.623a6.5 6.5 0 0 1 7.709 5.007l7.693 36.191a6.5 6.5 0 0 1-5.007 7.71l-2.934.623a6.5 6.5 0 0 1-7.71-5.006L39.751 15.68a6.5 6.5 0 0 1 5.006-7.71Zm1.04 4.891a1.5 1.5 0 0 0-1.156 1.78l7.693 36.191a1.5 1.5 0 0 0 1.78 1.155l2.934-.623a1.5 1.5 0 0 0 1.155-1.78l-7.693-36.19a1.5 1.5 0 0 0-1.779-1.156l-2.934.623ZM9.5 7h-3A6.5 6.5 0 0 0 0 13.5v37A6.5 6.5 0 0 0 6.5 57h3a6.5 6.5 0 0 0 6.5-6.5v-37A6.5 6.5 0 0 0 9.5 7ZM5 13.5A1.5 1.5 0 0 1 6.5 12h3a1.5 1.5 0 0 1 1.5 1.5v37A1.5 1.5 0 0 1 9.5 52h-3A1.5 1.5 0 0 1 5 50.5v-37Z"
                            }
                          })
                        ]),
                        t._v(" "),
                        a("span", { staticClass: "app-dash-icon-label" }, [t._v("Topics")])
                      ]
                    )
              ]),
              t._v(" "),
              a("transition", { attrs: { name: "swipe-left" } }, [
                t.containerOpen
                  ? a("div", { staticClass: "app app-topics", attrs: { id: "topics-app", "data-test": "topics-container" } }, [
                      a("header", [
                        a("h2", [t._v("Topics")]),
                        t._v(" "),
                        t.isAdmin
                          ? a(
                              "a",
                              {
                                staticClass: "button button-edit",
                                attrs: { target: "_blank" },
                                on: {
                                  click: function (a) {
                                    return t.editInAccountSite();
                                  }
                                }
                              },
                              [
                                a("inline-svg", { staticClass: "icon edit-icon", attrs: { src: e(13228) } }),
                                t._v(" "),
                                a("span", { staticClass: "edit-label" }, [t._v("Edit")])
                              ],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        a("div", { staticClass: "spacer" }),
                        t._v(" "),
                        a(
                          "div",
                          {
                            staticClass: "icon-wrapper back",
                            attrs: { "data-test": "close" },
                            on: {
                              click: function (a) {
                                return a.stopPropagation(), t.toggleApp.apply(null, arguments);
                              }
                            }
                          },
                          [a("inline-svg", { staticClass: "icon icon-hide", attrs: { src: e(21794) } })],
                          1
                        )
                      ]),
                      t._v(" "),
                      a("section", { staticClass: "topics-main" }, [
                        a("div", { staticClass: "spacer spacer-top" }),
                        t._v(" "),
                        t.isEmpty
                          ? t._e()
                          : a(
                              "ul",
                              { staticClass: "categories", class: t.categoryCount, attrs: { "data-test": "categories" } },
                              t._l(t.topicData, function (e, i) {
                                return a("li", { key: i, staticClass: "category" }, [
                                  a("div", { staticClass: "category-header" }, [
                                    e.iconUrl ? a("img", { staticClass: "category-icon", attrs: { src: e.iconUrl } }) : t._e(),
                                    t._v(" "),
                                    a("div", { staticClass: "category-title" }, [t._v(t._s(e.title))])
                                  ]),
                                  t._v(" "),
                                  a(
                                    "ul",
                                    { staticClass: "topics", attrs: { "data-test": "topics-list" } },
                                    t._l(e.topics, function (e, i) {
                                      return a("li", { key: i, staticClass: "topic", attrs: { "data-test": "topic" } }, [
                                        t.isUrlLocalFileLink(e.url)
                                          ? a(
                                              "a",
                                              {
                                                key: "i",
                                                staticClass: "u--pointer",
                                                attrs: { title: e.url },
                                                on: {
                                                  click: function (a) {
                                                    return t.newTabForFileLink(e.url);
                                                  }
                                                }
                                              },
                                              [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.title) + "\n\t\t\t\t\t\t\t\t")]
                                            )
                                          : a("a", { key: "i", attrs: { href: e.url } }, [t._v(t._s(e.title))])
                                      ]);
                                    }),
                                    0
                                  )
                                ]);
                              }),
                              0
                            ),
                        t._v(" "),
                        t.isLoading
                          ? a("section", { staticClass: "empty-state" }, [
                              a("span", { staticClass: "empty-message" }, [t._v("Loading...")])
                            ])
                          : t._e(),
                        t._v(" "),
                        t.isEmpty
                          ? a("section", { staticClass: "empty-state" }, [
                              a("span", { staticClass: "empty-message" }, [t._v("Your team hasn't added any topics yet.")])
                            ])
                          : t._e(),
                        t._v(" "),
                        a("div", { staticClass: "spacer spacer-bot" })
                      ])
                    ])
                  : t._e()
              ])
            ],
            1
          );
        };
      s._withStripped = !0;
      const o = new (e(20144).ZP.extend({
        name: "TopicDataManager",
        data: () => ({ rawData: {}, topicData: [], loaded: !1 }),
        localStorageKey: "topic_data",
        created() {
          (this.rawData = localStorage.getObject("topics")),
            this.rawData && (this.$set(this, "topicData", this.buildHierarchy(this.rawData)), (this.loaded = !0)),
            this.getData().then((t) => {
              (this.rawData = t),
                localStorage.setObject("topics", this.rawData),
                this.$set(this, "topicData", this.buildHierarchy(this.rawData)),
                (this.loaded = !0);
            });
        },
        methods: {
          getData: () =>
            new Promise((t, a) => {
              $.ajax({
                url: m.globals.urlRootApi + "team/topics",
                success: (a) => {
                  t(a);
                },
                error: (t) => {
                  a(t);
                }
              });
            }),
          sort: (t, a) => t.order - a.order,
          buildHierarchy(t) {
            let a = [];
            return (
              t &&
                t.categories &&
                t.categories.forEach((t) => {
                  (t.topics = []), a.push(t);
                }),
              t &&
                t.topics &&
                t.topics.forEach((t) => {
                  a.filter((a) => a.id === t.categoryId).forEach((a) => {
                    a.topics.push(t);
                  });
                }),
              a.sort(this.sort).forEach((t) => t.topics.sort(this.sort)),
              a
            );
          }
        }
      }))();
      var n = e(30827);
      const r = {
        name: "Topics",
        data: () => ({ containerOpen: !1 }),
        computed: {
          showAnyway: () => n.Z.includes("topics"),
          isLoading: () => !o.loaded,
          isEmpty() {
            return !(this.isLoading || (this.topicData && this.topicData.length));
          },
          topicData: () => o.topicData,
          isAdmin: () => m.models.teamInfo.get("team").userIsAdmin,
          categoryCount() {
            return "category-num-" + this.topicData.length;
          }
        },
        mounted() {
          setTimeout(() => this.toggleApp(), 1), m.on("globalEvent:key:P", this.toggleApp);
        },
        destroyed() {
          m.off("globalEvent:key:P", this.toggleApp);
        },
        methods: {
          toggleApp() {
            (this.containerOpen = !this.containerOpen),
              this.containerOpen
                ? (m.trigger("notification:hide"),
                  this.addListeners(),
                  m.widgetManager.hideApps({ exemptionSelectors: "#topics, #team-logo" }),
                  m.trigger("topics:open"))
                : (m.widgetManager.showApps(), m.trigger("topics:closed"), this.removeListeners());
          },
          editInAccountSite() {
            m.commandManager.execute("window.account.open", "/team/topics");
          },
          handleGlobalClick(t) {
            this.$refs.topics && !this.$refs.topics.contains(t.target) && this.toggleApp();
          },
          addListeners() {
            m.on("globalEvent:esc", this.toggleApp), m.on("globalEvent:click", this.handleGlobalClick);
          },
          removeListeners() {
            m.off("globalEvent:esc", this.toggleApp), m.off("globalEvent:click", this.handleGlobalClick);
          },
          newTabForFileLink(t) {
            m.utils.newTabForFileLink(t);
          },
          isUrlLocalFileLink: (t) => m.utils.isUrlLocalFileLink(t)
        }
      };
      e(97677);
      const c = (0, e(51900).Z)(r, s, [], !1, null, "5e82a1a2", null).exports;
      m.widgetManager.handover("topics", null, {
        region: "top-center",
        order: "append",
        bootstrap: function (t) {
          new i.Z({ render: (t) => t(c) }).$mount(t);
        }
      });
    },
    19738: (t, a, e) => {
      "use strict";
      e.r(a), e.d(a, { default: () => r });
      var i = e(8081),
        s = e.n(i),
        o = e(23645),
        n = e.n(o)()(s());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.app-container[data-v-5e82a1a2] { order: 6;\n}\n.app[data-v-5e82a1a2] { min-height: 100%; position: fixed; top: 0; right: 0; bottom: 0; left: 250px; z-index: 5; display: flex; flex-direction: column; border-radius: 0;\n}\n.app header[data-v-5e82a1a2] { margin: var(--app-padding); margin-bottom: calc(var(--app-padding) * 1.5); display: flex; align-items: center;\n}\n.back[data-v-5e82a1a2] {\n}\n.back[data-v-5e82a1a2]:after { --size: 36px; height: var(--size); width: var(--size);\n}\n.back .icon[data-v-5e82a1a2] { --size: 12px; height: var(--size); width: var(--size);\n}\n.app header h2[data-v-5e82a1a2] { margin: 0; padding: 0; display: inline-block; font-size: 1.9375rem; font-weight: 500;\n}\n.button-edit[data-v-5e82a1a2] { height: 40px; margin-bottom: -4px; margin-left: 1rem; padding: 0 19px 1px; display: inline-flex; align-items: center; opacity: 0.8; background: none !important; transition: all 0.1s ease;\n}\n.button-edit[data-v-5e82a1a2]:hover { opacity: 1; background: var(--color-stop-1) !important;\n}\n.button-edit[data-v-5e82a1a2]:hover:active { background: var(--color-stop-2) !important; transition-duration: 0s;\n}\n.edit-icon[data-v-5e82a1a2] { --icon-size: 11px; margin-right: 7px; margin-left: -5px; margin-bottom: -1px; opacity: 0.45;\n}\n.edit-label[data-v-5e82a1a2] { opacity: 0.8; color: var(--color-text); font-size: 0.8125rem;\n}\nheader .spacer[data-v-5e82a1a2] { flex-grow: 1;\n}\n\n\t\t/* Old close method */\n\t\t/*\n\t\t.close { padding: 15px 20px; position: absolute; top: 0; right: 0; opacity: 0.6; cursor: pointer; transition: opacity 0.15s ease; }\n\t\t\t.close:hover { opacity: 1; }\n\t\t*/\n.spacer[data-v-5e82a1a2] {\n}\n.spacer-top[data-v-5e82a1a2] { flex-grow: 1;\n}\n.spacer-bot[data-v-5e82a1a2] { flex-grow: 3.2;\n}\n.topics-main[data-v-5e82a1a2] { flex-grow: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;\n}\n.categories[data-v-5e82a1a2] { --icon-height: 25px; --icon-width: 25px; width: 100%; padding: var(--app-padding); display: grid; grid-template-columns: repeat(3, minmax(150px, 1fr)); grid-auto-rows: max-content; grid-column-gap: 3rem; grid-row-gap: 3rem;\n}\n.category[data-v-5e82a1a2] { margin-bottom: 1rem; flex-grow: 0;\n}\n.category-header[data-v-5e82a1a2] { margin-bottom: 1rem; display: flex; align-items: center;\n}\n.category-icon[data-v-5e82a1a2] { max-height: var(--icon-height); width: var(--icon-width); margin-right: 0.75rem; opacity: 0.85; filter: var(--filter-dark-invert);\n}\n.category-title[data-v-5e82a1a2] { min-height: var(--icon-height); opacity: 0.9; font-size: 1.3125rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.topic a[data-v-5e82a1a2] { margin: 0 -12px; padding: 7px 12px; display: block; color: var(--color-stop-6); overflow: hidden; text-overflow: ellipsis; transition: 0.1s ease; white-space: nowrap;\n}\n.topic a[data-v-5e82a1a2]:hover { color: var(--color-text); text-decoration: underline;\n}\n.topic a[data-v-5e82a1a2]:active { color: var(--color-stop-5);\n}\n.category-num-1[data-v-5e82a1a2] { grid-template-columns: repeat(1, 50%);\n}\n.category-num-2[data-v-5e82a1a2] { grid-template-columns: repeat(2, 1fr);\n}\n.category-num-4[data-v-5e82a1a2] { grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, max-content);\n}\n.empty-state[data-v-5e82a1a2] { opacity: 0.45;\n}\n\n\n/* Animations */\n.swipe-left-enter-active[data-v-5e82a1a2], .swipe-left-leave-active[data-v-5e82a1a2] { transition: transform var(--a-show-full-duration) var(--a-show-full-curve), opacity var(--a-show-full-duration) var(--a-show-full-curve);\n}\n.swipe-left-enter[data-v-5e82a1a2], .swipe-left-leave-to[data-v-5e82a1a2] { opacity: 0; transform: translateX(1rem);\n}\n\n",
        ""
      ]);
      const r = n;
    },
    97677: (t, a, e) => {
      var i = e(19738);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, e(45346).Z)("4198e553", i, !1, { ssrId: !0 });
    },
    21794: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K";
    },
    13228: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjA2NyAzLjk4NmEuNS41IDAgMCAwLS43MDgtLjAwMUwzLjQzNyAxNC45MWEuNS41IDAgMCAwIDAgLjcwN2w0Ljk0OCA0Ljk0OGEuNS41IDAgMCAwIC43MDcgMEwyMC4wMDkgOS42NDhhLjUuNSAwIDAgMCAwLS43MDZsLTQuOTQyLTQuOTU2ek0yLjQzIDE2LjhhLjUuNSAwIDAgMC0uODQuMjM3TC4wODQgMjMuMzE0YS41MDEuNTAxIDAgMCAwIC42MDMuNjAybDYuMjcyLTEuNWEuNS41IDAgMCAwIC4yMzctLjg0TDIuNDMgMTYuOHpNMjMuMiAyLjkyNEwyMS4wNzcuOGEyLjUgMi41IDAgMCAwLTMuNTMyIDBsLTEuNDE4IDEuNDE3YS41LjUgMCAwIDAgMCAuNzA3bDQuOTUgNC45NDlhLjUuNSAwIDAgMCAuNzA3IDBMMjMuMiA2LjQ1NGEyLjUgMi41IDAgMCAwIDAtMy41M3oiIC8+PC9zdmc+Cg==";
    }
  }
]);
