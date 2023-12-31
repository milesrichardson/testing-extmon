(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [2769],
  {
    19189: (s, t, e) => {
      "use strict";
      e.r(t), e.d(t, { default: () => c });
      var i = e(8081),
        n = e.n(i),
        o = e(23645),
        a = e.n(o)()(n());
      a.push([
        s.id,
        "\n/* stylelint-disable */\n.icon-list[data-v-b4a00f26] { display: grid; gap: 1rem; grid-template-columns: 1fr 1fr 1fr;\n}\n.item[data-v-b4a00f26] { display: flex; flex-direction: column; align-items: center; transition: 0.2s ease;\n}\n.item[data-v-b4a00f26]:hover { transform: scale(1.1);\n}\n.item .icon[data-v-b4a00f26] { --icon-size: 40px;\n}\n.icon-name[data-v-b4a00f26] { margin: 8px 0 0; color: var(--color-stop-6); font-size: 13px; font-weight: 500; line-height: 1.35; text-align: center;\n}\n",
        ""
      ]);
      const c = a;
    },
    52769: (s, t, e) => {
      "use strict";
      e.r(t), e.d(t, { default: () => o });
      var i = function () {
        var s = this,
          t = s._self._c;
        return t(
          "upsell",
          s._b(
            {
              attrs: { type: "todointegrations", "event-feature": "todo", "event-type": "todo integrations" },
              scopedSlots: s._u([
                {
                  key: "title",
                  fn: function () {
                    return [s._v("To-do Integrations")];
                  },
                  proxy: !0
                },
                {
                  key: "description",
                  fn: function () {
                    return [s._v("Bring all of your tasks into one simple view in Momentum.")];
                  },
                  proxy: !0
                },
                {
                  key: "body",
                  fn: function () {
                    return [
                      t("div", { staticClass: "content" }, [
                        t("div", { staticClass: "demo" }, [
                          t(
                            "div",
                            { staticClass: "icon-list" },
                            s._l(s.$options.listItems, function (i, n) {
                              return t(
                                "div",
                                { key: n, staticClass: "item" },
                                [
                                  t("inline-svg", { staticClass: "icon", attrs: { src: e(94647)("./" + i.path) } }),
                                  s._v(" "),
                                  t("div", { staticClass: "icon-name" }, [s._v(s._s(i.name) + "\n\t\t\t\t\t\t")])
                                ],
                                1
                              );
                            }),
                            0
                          ),
                          s._v(" "),
                          t("div", { staticClass: "fun-fact" }, [
                            t("strong", [s._v("Fun fact:")]),
                            s._v("\n\t\t\t\t\tIn a recent study, 98% of our daily users report being more focused.\n\t\t\t\t")
                          ])
                        ]),
                        s._v(" "),
                        t("ul", { staticClass: "features" }, [
                          t(
                            "li",
                            [
                              t("inline-svg", { staticClass: "feature-icon", attrs: { src: e(444) } }),
                              s._v(" "),
                              t("div", { staticClass: "feature-title" }, [s._v("Simplify workflow")]),
                              s._v(" "),
                              t("div", { staticClass: "feature-desc" }, [
                                s._v(
                                  "Avoid the chaotic view of your full task management system to keep only the top priorities visible every day."
                                )
                              ])
                            ],
                            1
                          ),
                          s._v(" "),
                          t(
                            "li",
                            [
                              t("inline-svg", { staticClass: "feature-icon", attrs: { src: e(75228) } }),
                              s._v(" "),
                              t("div", { staticClass: "feature-title" }, [s._v("Two-way sync")]),
                              s._v(" "),
                              t("div", { staticClass: "feature-desc" }, [
                                s._v("Tasks updated in Momentum sync with 3rd-party apps and vice versa.")
                              ])
                            ],
                            1
                          ),
                          s._v(" "),
                          t(
                            "li",
                            [
                              t("inline-svg", { staticClass: "feature-icon", attrs: { src: e(8593) } }),
                              s._v(" "),
                              t("div", { staticClass: "feature-title" }, [s._v("To-do list hub")]),
                              s._v(" "),
                              t("div", { staticClass: "feature-desc" }, [s._v("Access multiple task providers all in one place.")])
                            ],
                            1
                          )
                        ])
                      ])
                    ];
                  },
                  proxy: !0
                }
              ])
            },
            "upsell",
            s.$props,
            !1
          )
        );
      };
      i._withStripped = !0;
      const n = {
        name: "TodoIntegrationsUpsell",
        components: { Upsell: e(75962).Z },
        listItems: [
          { name: "Asana", path: "icon-asana.svg" },
          { name: "Basecamp 3", path: "icon-basecamp.svg" },
          { name: "Bitbucket", path: "icon-bitbucket.svg" },
          { name: "ClickUp", path: "icon-clickup.svg" },
          { name: "Github", path: "icon-github.svg" },
          { name: "Google Tasks", path: "icon-google-tasks.svg" },
          { name: "Microsoft To Do", path: "icon-microsoft-todo.svg" },
          { name: "Todoist", path: "icon-todoist.svg" },
          { name: "Trello", path: "icon-trello.svg" }
        ],
        props: {
          eventSource: { type: String, default: "" },
          plans: { type: Object, default: () => ({}) },
          sales: { type: Object, default: () => ({}) }
        },
        data: () => ({ itemIsActive: !1, iconNameIsActive: !1 })
      };
      e(33933);
      const o = (0, e(51900).Z)(n, i, [], !1, null, "b4a00f26", null).exports;
    },
    33933: (s, t, e) => {
      var i = e(19189);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[s.id, i, ""]]),
        i.locals && (s.exports = i.locals),
        (0, e(45346).Z)("c9a0c6de", i, !1, { ssrId: !0 });
    },
    94647: (s, t, e) => {
      var i = {
        "./brain.svg": 10499,
        "./easy.svg": 35200,
        "./icon-asana.svg": 37336,
        "./icon-balance.svg": 59147,
        "./icon-basecamp.svg": 74816,
        "./icon-bitbucket.svg": 78444,
        "./icon-clean.svg": 28986,
        "./icon-clickup.svg": 32638,
        "./icon-color.svg": 29052,
        "./icon-custom-soundscapes.svg": 96254,
        "./icon-custom-theme.svg": 31507,
        "./icon-customize-timers.svg": 53748,
        "./icon-easy-access.svg": 444,
        "./icon-fitness.svg": 54130,
        "./icon-flow.svg": 43366,
        "./icon-focus-stats.svg": 78110,
        "./icon-focused.svg": 27025,
        "./icon-fullscreen.svg": 72346,
        "./icon-github.svg": 3075,
        "./icon-global-weather.svg": 81477,
        "./icon-google-tasks.svg": 5241,
        "./icon-happy-place.svg": 66485,
        "./icon-history.svg": 53921,
        "./icon-hourly.svg": 49969,
        "./icon-hub.svg": 8593,
        "./icon-infinity.svg": 43994,
        "./icon-integrations.svg": 64397,
        "./icon-kanban.svg": 5092,
        "./icon-microsoft-todo.svg": 13587,
        "./icon-more-fonts.svg": 65175,
        "./icon-more-lists.svg": 74829,
        "./icon-multiple-types.svg": 75477,
        "./icon-note-search.svg": 15489,
        "./icon-percent-schedule.svg": 27942,
        "./icon-personalize-photos.svg": 30940,
        "./icon-personalize.svg": 94288,
        "./icon-photo-match.svg": 58161,
        "./icon-random.svg": 18486,
        "./icon-search-loc.svg": 31102,
        "./icon-simple-notes.svg": 65869,
        "./icon-simplify.svg": 17787,
        "./icon-skip.svg": 48290,
        "./icon-sync.svg": 75228,
        "./icon-time-sensitive.svg": 90754,
        "./icon-timezones.svg": 92308,
        "./icon-todoist.svg": 18329,
        "./icon-top-of-mind.svg": 76463,
        "./icon-trello.svg": 83569,
        "./icon-weather-extra.svg": 33213,
        "./secure.svg": 96451,
        "./sparks.svg": 2963
      };
      function n(s) {
        var t = o(s);
        return e(t);
      }
      function o(s) {
        if (!e.o(i, s)) {
          var t = new Error("Cannot find module '" + s + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[s];
      }
      (n.keys = function () {
        return Object.keys(i);
      }),
        (n.resolve = o),
        (s.exports = n),
        (n.id = 94647);
    }
  }
]);
