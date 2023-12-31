(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7651, 7652],
  {
    51740: (e, t, o) => {
      "use strict";
      o.d(t, { MA: () => n, RR: () => i, _R: () => a });
      const n = "2022-01-01T00:00:00.000Z",
        a = "2000-01-01T00:00:00.000Z",
        i = "modal:showOnNextPageLoad";
    },
    25343: (e, t, o) => {
      "use strict";
      o.d(t, { CW: () => r, DV: () => l });
      var n = o(51089),
        a = o(79216),
        i = o(96046);
      function s(e = m.utils.getUserState().state) {
        var t;
        let o = {};
        return (
          null === (t = n.C[e]) ||
            void 0 === t ||
            t.forEach((e) => {
              var t;
              d(null === (t = n.U[e]) || void 0 === t ? void 0 : t.disabledBrowsers) || (o[e] = n.U[e]);
            }),
          o
        );
      }
      function r() {
        var e;
        return Object.keys(a.V).length && null !== (e = i.Z.experiments) && void 0 !== e && e.length
          ? (function () {
              var e;
              const t = (function (e = m.utils.getUserState().state) {
                  var t;
                  let o = {};
                  return (
                    null === (t = a.$[e]) ||
                      void 0 === t ||
                      t.forEach((e) => {
                        var t;
                        d(null === (t = a.V[e]) || void 0 === t ? void 0 : t.disabledBrowsers) || (o[e] = a.V[e]);
                      }),
                    o
                  );
                })(),
                o = s();
              if (!t) return o;
              let r = {};
              return (
                null === (e = i.Z.experiments) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    let a = t[e.experimentName];
                    if (!a) return;
                    const i = a.variants[e.variantName];
                    i &&
                      i.steps.forEach(function (e) {
                        var t;
                        (r[e] = { ...n.U[e] }),
                          null !== (t = i.overrides) && void 0 !== t && t[e] && (r[e] = Object.assign(r[e], i.overrides[e])),
                          i.deleteSteps &&
                            i.deleteSteps.forEach((e) => {
                              delete o[e];
                            });
                      });
                  }),
                Object.assign(o, r)
              );
            })()
          : s();
      }
      function d(e) {
        return (
          (null == e ? void 0 : e.includes(m.utils.getBrowserName())) ||
          ((null == e ? void 0 : e.includes("Mobile")) && m.utils.isTouchDevice())
        );
      }
      function l() {
        if (!Object.keys(a.V).length) return {};
        const e = a.$.all;
        let t = {};
        return (
          e.forEach((e) => {
            let o = a.V[e],
              i = { variants: {}, name: o.name };
            Object.keys(o.variants).forEach((e) => {
              let t = o.variants[e];
              (i.variants[e] = { steps: {}, name: t.name }),
                t.steps.forEach((o) => {
                  i.variants[e].steps[o] = Object.assign({}, n.U[o], t.overrides ? t.overrides[o] : {});
                });
            }),
              (t[e] = i);
          }),
          t
        );
      }
    },
    79216: (e, t, o) => {
      "use strict";
      o.d(t, { $: () => d, V: () => r });
      var n = o(65238),
        a = o(38465),
        i = o(97340),
        s = o(71262);
      const r = {
          [n.fC.SEARCH_IN_CENTER]: {
            name: "Search in center intro",
            variants: {
              [n.HX.SEARCH_IN_CENTER_ENABLED]: {
                steps: [n.os.FREE_INTRODUCTION],
                overrides: {
                  [n.os.FREE_INTRODUCTION]: {
                    subSteps: [
                      (0, i.p7)(),
                      {
                        name: "Focus",
                        progressBarText: "Focus",
                        component: s.default,
                        subStepProps: {
                          heading: "Get Focused",
                          subheading:
                            "Get more done daily with the power of our to-do list and the search bar. Use the conveniently located search bar to speed up how fast you can turn your to-do list into your done list.",
                          arrow: "right-below",
                          maskDefinitions: [{ padding: [60, 2, 50, 60], targetElements: ".mock-todo-app, .search" }],
                          elementReadyEvent: "mockTodo:mounted bigSearch:mounted",
                          elementReadyCheck: () => document.querySelector(".mock-todo") && document.querySelector(".search"),
                          showAppSelector: ".mock-todo, .search",
                          onCreated: () => {
                            m.once("mockTodo:created", () => {
                              m.trigger("mockTodo:overrideContent", {
                                mockListTitle: "Today",
                                mockTodos: ["Research travel industry", "Book concert tickets", "Write blog"]
                              });
                            }),
                              m.trigger("mockTodo:mount"),
                              m.widgetManager.loadWidget("mockTodo");
                          },
                          onDestroyed: () => {
                            m.trigger("mockTodo:destroy");
                          }
                        }
                      },
                      {
                        name: "Motivation",
                        progressBarText: "Motivation",
                        component: s.default,
                        subStepProps: {
                          heading: "Get Motivated",
                          subheading: "Refresh your mind with a daily photo, quote, and mantra that recenter racing thoughts.",
                          arrow: "left-below",
                          maskDefinitions: [
                            {
                              padding: [60, 60, 5],
                              targetElements:
                                ".clock .three-col-layout--center, .search, .quote .app-dash, .greeting .three-col-layout--center, .mantra .three-col-layout--center"
                            }
                          ],
                          elementReadyEvent: "centerBelow:show bigSearch:mounted",
                          elementReadyCheck: () =>
                            document.querySelector(".clock") &&
                            document.querySelector(".quote") &&
                            document.querySelector(".greeting") &&
                            document.querySelector(".search"),
                          showAppSelector: ".clock, .greeting, .search, .quote",
                          maskEvents: "center:updated",
                          onCreated: () => {
                            m.trigger("pomodoro:show", !1), localStorage.setItem("mantra:force", "true");
                          },
                          onDestroyed: () => {
                            localStorage.removeItem("mantra:force");
                          }
                        }
                      },
                      (0, i.tt)(),
                      (0, i.v_)()
                    ]
                  }
                }
              }
            }
          },
          [n.fC.PLUS_TRIAL_TOUR]: {
            name: "Plus trial",
            disabledBrowsers: ["Safari"],
            variants: {
              [n.HX.PLUS_TRIAL_TOUR_VARIANT_A]: {
                steps: [n.os.TOUR],
                overrides: {
                  [n.os.TOUR]: {
                    subSteps: [
                      (0, a.AZ)({
                        subheading:
                          "<p>We’ve unlocked our premium dashboard features for 30 days to help you get more organized, motivated, and focused to beat distractions!</p>"
                      }),
                      (0, a.zS)({
                        subheading: "<p>Keep your most important goals in view with To-do lists.</p>",
                        mockTitle: "Long Term Goals",
                        mockTodos: ["Run a 5k", "Get the promotion", "Get a dog", "Visit Greece", "Give a TEDx talk"]
                      }),
                      (0, a.qB)({
                        subheading: "<p>Track your habits to stay consistent.</p>",
                        mockData: {
                          metrics: [
                            { label: "Glasses of water", value: "7" },
                            { label: "Pages read", value: "145" },
                            { label: "Meditations this week", value: "5" },
                            { label: "Fitbit steps today", value: "11859" }
                          ]
                        }
                      }),
                      (0, a.Vk)({ subheading: "<p>Click the clock to start a Pomodoro timer. Play nature soundscapes for deep work.</p>" }),
                      (0, a.tj)({
                        subheading: "<p>Welcome to your 1-stop dashboard to overcome distractions and achieve all your goals.</p>"
                      })
                    ]
                  }
                },
                deleteSteps: [n.os.FREE_INTRODUCTION]
              },
              [n.HX.PLUS_TRIAL_TOUR_VARIANT_B]: {
                steps: [n.os.TOUR],
                overrides: {
                  [n.os.TOUR]: {
                    subSteps: [
                      (0, a.AZ)({
                        subheading:
                          "<p>We’ve unlocked our premium dashboard features for 30 days to help you get more organized, motivated, and focused to beat distractions!</p>"
                      }),
                      (0, a.zS)({
                        subheading: "<p>Set your goals with multiple to-do lists and keep what’s important in front of you.</p>",
                        mockTitle: "Long Term Goals",
                        mockTodos: ["Run a 5k", "Get the promotion", "Visit Greece", "Join nonprofit board", "Learn guitar"]
                      }),
                      (0, a.qB)({
                        subheading:
                          "<p>Consistent action is key to becoming the person you want to be.</p><p>You can track a habit manually or use our integrations to sync your fitness and work apps.</p>",
                        mockData: {
                          metrics: [
                            { label: "Fitbit steps today", value: "11859" },
                            { label: "Glasses of water today", value: "7" },
                            { label: "Sales calls", value: "34" }
                          ]
                        }
                      }),
                      (0, a.Vk)({
                        subheading:
                          "<p>Turn every day into a productive day with our unstoppable combo of the Pomodoro Timer and Soundscapes to get more done in less time.</p>"
                      }),
                      (0, a.tj)({
                        subheading: "<p>We’re excited to help you get momentum towards your goals.</p>",
                        buttonText: "Let’s go!"
                      })
                    ]
                  }
                },
                deleteSteps: [n.os.FREE_INTRODUCTION]
              }
            }
          }
        },
        d = {
          all: Object.keys(r),
          unregistered: [n.fC.SEARCH_IN_CENTER],
          free: [n.fC.PLUS_TRIAL_TOUR, n.fC.SEARCH_IN_CENTER],
          plus: [n.fC.PLUS_TRIAL_TOUR, n.fC.SEARCH_IN_CENTER]
        };
    },
    97340: (e, t, o) => {
      "use strict";
      o.d(t, { p7: () => d, tt: () => l, v_: () => c, y3: () => u });
      var n = o(15106),
        a = o(95220),
        i = o(68122),
        s = o(80809);
      const r = () => Promise.resolve().then(o.bind(o, 71262));
      function d() {
        return {
          name: "Welcome",
          progressBarText: "Welcome",
          component: () => o.e(9586).then(o.bind(o, 89586)),
          subStepProps: {
            heading: "Welcome to Momentum",
            subheading:
              "<span>This is your space to find focus, calm, and inspiration with every new tab you open.<br><br>Rule out distraction with simple tools that will help you achieve your goals consistently – even when life gets busy.</span>",
            buttonText: "Get the tour!",
            cancelText: "Skip"
          }
        };
      }
      function l({
        linksData: e = [
          { title: "Gmail", url: "https://mail.google.com" },
          { title: "Zoom", url: "https://www.zoom.us" },
          { title: "Clickup", url: "https://www.clickup.com" }
        ]
      } = {}) {
        let t = {},
          o = [];
        const a = { deleted: !1, draft: !1, pinned: !1 };
        e.forEach((e) => {
          const n = s.Z.uuidv4(),
            i = s.Z.uuidv4();
          o.push(i), (t[n] = { id: n, type: 2, url: e.url, ...a }), (t[i] = { id: i, type: 1, title: e.title, linksOrderIds: [n], ...a });
        });
        const d = s.Z.uuidv4();
        return (
          (t[d] = { type: 1, isRoot: !0, id: d, linksOrder: o, linksOrderIds: o, ...a }),
          {
            name: "Organization",
            progressBarText: "Organization",
            component: r,
            subStepProps: {
              heading: "Get Organized",
              subheading: "Keep all of the links you use the most in a drop-down tab.",
              arrow: "above-left",
              maskDefinitions: [{ padding: [0, 10, 10, 0], targetElements: ".links, .links .app" }],
              elementReadyEvent: "links:updated",
              elementReadyCheck: () =>
                document.querySelector(".links") &&
                document.querySelectorAll(".links .link-list-item").length ===
                  e.length + (m.utils.isChromium() && "links" === m.models.bookmarksSettings.get("chromeTabLocation") ? 1 : 0),
              showAppSelector: ".links",
              onCreated: async () => {
                (0, n.z)({ linksVisible: !0 }),
                  i.Z.linksViewStateStore().then((e) => e().togglePopup(!0)),
                  i.Z.linksStore().then((e) => e().addMockData(t));
              },
              onDestroyed: () => {
                (0, n.z)({ linksVisible: null }),
                  i.Z.linksViewStateStore().then((e) => e().togglePopup(!1)),
                  i.Z.linksStore().then((e) => e().clearMockData());
              }
            }
          }
        );
      }
      function c() {
        return {
          name: "Ready",
          component: () => o.e(6691).then(o.bind(o, 26691)),
          progressBarText: "Ready",
          customCss: " .tour .tour-fullscreen .cta { max-width: 100ch; }",
          subStepProps: {
            heading: "Build Momentum Towards Your Goals",
            subheading: "Customize your home base to help you accomplish your goals every day.",
            buttonText: "Let's go!",
            bannerHeading: "Join a Live Workshop",
            bannerSubheading:
              "Want to improve your productivity, reduce procrastination, and maximize your Momentum? Sign up for a free live workshop this week.",
            bannerButtonText: "Learn more",
            bannerButtonLink: "https://lu.ma/momentum"
          }
        };
      }
      const u = {
        legacyId: "29195944-06AE-4067-9CE1-96014D80B27F",
        name: "Introduction",
        component: () => o.e(3283).then(o.bind(o, 13283)),
        disabledBrowsers: ["Mobile"],
        transitionName: "fade",
        hideOtherApps: !0,
        subSteps: [
          d(),
          (function ({
            mockListTitle: e = "Today",
            mockTodos: t = ["Book hotel", "Call Erica", "Log hours"],
            mockData: o = {
              focus: [
                {
                  completed: !1,
                  archived: !1,
                  createdDate: Date.now(),
                  focus: "Publish Blog Post",
                  forDate: s.Z.getDateString(),
                  id: s.Z.uuidv4(),
                  todoId: null
                }
              ]
            }
          } = {}) {
            return {
              name: "Focus",
              progressBarText: "Focus",
              component: r,
              subStepProps: {
                heading: "Get Focused",
                subheading:
                  "The secret to productivity is deep work. Go deep on your #1 task with our Focus area. Add additional tasks to a backup to-do list.",
                arrow: "right-below",
                maskDefinitions: [{ padding: [60, 2, 50, 60], targetElements: ".mock-todo-app, .focuses .three-col-layout--center" }],
                elementReadyEvent: "mockTodo:mounted focus-content:updated",
                elementReadyCheck: () => {
                  var e;
                  return (
                    document.querySelector(".mock-todo") &&
                    (null === (e = document.querySelector(".todays-focus")) || void 0 === e ? void 0 : e.innerText) === o.focus[0].focus
                  );
                },
                showAppSelector: ".mock-todo, .focuses",
                onCreated: () => {
                  (0, n.z)({ focusVisible: !0, searchVisible: !1 }),
                    a.Z.add(o),
                    (e || t) &&
                      m.once("mockTodo:created", () => {
                        m.trigger("mockTodo:overrideContent", { mockListTitle: e, mockTodos: t });
                      }),
                    m.trigger("mockTodo:mount"),
                    m.widgetManager.loadWidget("mockTodo");
                },
                onDestroyed: () => {
                  a.Z.clear(Object.keys(o)), m.trigger("mockTodo:destroy"), (0, n.z)({ focusVisible: null, searchVisible: null });
                }
              }
            };
          })(),
          (function ({
            mockData: e = {
              focus: [
                {
                  completed: !1,
                  archived: !1,
                  createdDate: Date.now(),
                  focus: "Publish Blog Post",
                  forDate: s.Z.getDateString(),
                  id: s.Z.uuidv4(),
                  todoId: null
                }
              ]
            },
            mockQuote: t = "Build things you believe in and fall in love with the process",
            mockMantra: o = "Strive for greatness."
          } = {}) {
            return {
              name: "Motivation",
              progressBarText: "Motivation",
              component: r,
              subStepProps: {
                heading: "Get Motivated",
                subheading: "Refresh your mind with a daily photo, quote, and mantra that recenter racing thoughts.",
                arrow: "left-below",
                maskDefinitions: [
                  {
                    padding: [60, 60, 5],
                    targetElements:
                      ".clock .three-col-layout--center, .focuses .three-col-layout--center, .quote .body-text, .greeting .three-col-layout--center, .mantra .three-col-layout--center"
                  }
                ],
                elementReadyEvent: "center:updated mantra:mounted quote:updated focus-content:updated",
                elementReadyCheck: () => {
                  var t;
                  const o = document.querySelector(".clock");
                  return (
                    o &&
                    !o.parentElement.classList.contains("smooth-height-fade-enter-active") &&
                    document.querySelector(".quote") &&
                    document.querySelector(".greeting") &&
                    (null === (t = document.querySelector(".todays-focus")) || void 0 === t ? void 0 : t.innerText) === e.focus[0].focus
                  );
                },
                showAppSelector: ".clock, .greeting, .focuses, .quote",
                maskEvents: "center:updated quote:updated",
                onCreated: () => {
                  a.Z.add(e),
                    m.trigger("pomodoro:show", !1),
                    (0, n.z)({
                      focusVisible: !0,
                      clockVisible: !0,
                      quoteVisible: !0,
                      greetingVisible: !0,
                      mantraVisible: !0,
                      searchVisible: !1
                    }),
                    m.once("greetingMantraContainer:created", () => {
                      m.trigger("mantra:override", o);
                    }),
                    m.trigger("mantra:override", o),
                    document.querySelector(".quote")
                      ? m.trigger("quote:override", t)
                      : m.once("quote:created", () => {
                          m.trigger("quote:override", t);
                        });
                },
                onDestroyed: () => {
                  a.Z.clear(Object.keys(e)),
                    localStorage.removeItem("mantra:force"),
                    (0, n.z)({
                      focusVisible: null,
                      clockVisible: null,
                      quoteVisible: null,
                      greetingVisible: null,
                      mantraVisible: null,
                      searchVisible: null
                    }),
                    m.trigger("quote:override", null),
                    m.trigger("mantra:override", "");
                }
              }
            };
          })(),
          l(),
          c()
        ],
        key: "overlay"
      };
    },
    51089: (e, t, o) => {
      "use strict";
      o.d(t, { C: () => A, U: () => C });
      var n = o(65238),
        a = o(97340),
        i = o(95220),
        s = o(40531),
        r = o(15106),
        d = o(35746),
        l = o(16730),
        c = o(96046);
      const u = () => Promise.resolve().then(o.bind(o, 71262));
      let p = !1;
      const g = {
        legacyId: "C6D78F5E-470F-4F12-A139-4A80FDF3EC13",
        name: "Plus Introduction",
        plusSubscriptionTimeGate: "2022-06-05T00:00:00.000Z",
        component: () => o.e(3283).then(o.bind(o, 13283)),
        onCreated: () => {
          (p = "true" === localStorage.getItem("pomodoro-showing")),
            (window.onbeforeunload = () => {
              m.trigger("pomodoro:show", p);
            });
        },
        onDestroyed: () => {
          m.trigger("pomodoro:show", p);
        },
        customCss: ` .top-row { padding-top: ${s.ax.bookmarksVisible ? 10 : 46}px; `,
        hideOtherApps: !0,
        getPlanInfo: !0,
        shouldActivate: () => {
          const e = d.default.getStep("tour");
          return !e || "dismissed" === e.status;
        },
        transitionName: "fade",
        alsoCompletesSteps: [n.os.FREE_INTRODUCTION],
        subSteps: [
          {
            name: "Welcome",
            progressBarText: "Welcome",
            component: () => o.e(9586).then(o.bind(o, 89586)),
            subStepProps: {
              subheading:
                "Welcome to Momentum Plus, your all-in-one command center to help you beat distractions and achieve your goals more consistently.",
              buttonText: "Take a tour!",
              cancelText: "Skip"
            }
          },
          (function ({
            mockListTitle: e = "Asana To-Dos",
            mockTodos: t = ["Submit proposal", "Schedule meeting", "Update documentation"],
            mockProviderIcon: n = o(37336),
            mockData: a = {
              clocks: [],
              metrics: [
                { label: "Glasses of Water per Day", value: 5 },
                { label: "Meditations per Week", value: 3 },
                { label: "Blogs Written", value: 13 },
                { label: "Fitbit Steps", value: 11840 }
              ],
              countdowns: [{ utcDate: Date.now() + 72576e5, hasHours: !1, name: "Fiji Trip" }]
            }
          } = {}) {
            return (
              Object.values(a).forEach((e) => {
                e.forEach((e) => {
                  (e.pinned = !0), (e.id = m.utils.uuidv4());
                });
              }),
              {
                name: "Organization",
                progressBarText: "Organization",
                component: u,
                customCss: ` .top-row { padding-top: ${s.ax.bookmarksVisible ? 10 : 46}px; `,
                subStepProps: {
                  heading: "Get Organized",
                  subheading:
                    "Keep all of your goals, habits, to-dos, and notes in the center of your workflow to keep the important things in life top of mind. Be sure to integrate your favorite project management system and health apps.",
                  arrow: "above-right",
                  maskDefinitions: [
                    { padding: [0, 0, -10, -40], targetElements: ".base-metric .metric-type, .base-metric .add-metric" },
                    { padding: [50, 2, 50, 50], targetElements: ".mock-todo-app" }
                  ],
                  elementReadyEvent: "baseMetric:updated mockTodo:mounted",
                  elementReadyCheck: () => {
                    const e = (e) => e.replace(/\s/g, "");
                    return (
                      document.querySelector(".mock-todo") &&
                      (c.Z.windowDimensions.width < 600 || !document.querySelector(".metric-type .app-dash-icon")) &&
                      Object.entries(a).every(([t, o]) => {
                        const n = `.base-metric .metric-item.app-dash[data-type=${t}] .metric-label-name`,
                          a = o.map((e) => e.name || e.label || e.title);
                        return (
                          a.length === document.querySelectorAll(n).length &&
                          (!a.length ||
                            ((t, o) => {
                              const n = document.querySelectorAll(t);
                              return n.length && Array.from(n).every((t) => o.map(e).includes(e(t.textContent)));
                            })(n, a))
                        );
                      })
                    );
                  },
                  showAppSelector: ".base-metric, .mock-todo",
                  alignCta: "start",
                  onCreated: () => {
                    (0, r.z)({ metricVisible: !0, countdownVisible: !0, multiClockVisible: !1, linksVisible: !1 }),
                      (e || t) &&
                        m.once("mockTodo:created", () => {
                          m.trigger("mockTodo:overrideContent", { mockListTitle: e, mockTodos: t, mockProviderIcon: n });
                        }),
                      m.trigger("mockTodo:mount"),
                      m.widgetManager.loadWidget("mockTodo"),
                      i.Z.add(a);
                  },
                  onDestroyed: () => {
                    (0, r.z)({ metricVisible: null, countdownVisible: null, multiClockVisible: null, linksVisible: null }),
                      m.trigger("mockTodo:destroy"),
                      i.Z.clear(Object.keys(a));
                  }
                }
              }
            );
          })(),
          (function ({
            mockData: e = {
              focus: [
                {
                  completed: !1,
                  archived: !1,
                  createdDate: Date.now(),
                  focus: "Submit proposal",
                  forDate: m.utils.getDateString(),
                  id: m.utils.uuidv4(),
                  todoId: null
                }
              ]
            },
            mockSoundscape: t = "Forest"
          } = {}) {
            return {
              name: "Focus",
              progressBarText: "Focus",
              component: u,
              customCss: "\n\t\t\t.soundscapes .toggle { opacity: 1; } .top-left { padding-left: 10px; }\n\t\t",
              subStepProps: {
                heading: "Get Focused",
                subheading:
                  "Turn every day into a productive day with our unstoppable combo of the Pomodoro Timer and customizable Soundscapes to get more done in less time.",
                arrow: "above-left",
                maskDefinitions: [
                  {
                    padding: [0, 20, 150, 5],
                    targetElements:
                      ".soundscapes, .soundscapes .app.popup, .scenes, .pomodoro .three-col-layout--center, .focuses .three-col-layout--center"
                  }
                ],
                elementReadyEvent: "soundscapes:opened center:updated focus-content:updated",
                elementReadyCheck: () => {
                  var t, o;
                  const n = document.querySelector(".soundscapes .app");
                  return (
                    n &&
                    !n.classList.contains("slide-down-fade-enter-active") &&
                    document.querySelector(".pomodoro") &&
                    ((null === (t = document.querySelector(".todays-focus")) || void 0 === t
                      ? void 0
                      : t.innerText.includes(e.focus[0].focus)) ||
                      (null === (o = document.querySelector(".pomodoro .mode.active")) || void 0 === o
                        ? void 0
                        : o.innerText.includes("BREAK")))
                  );
                },
                showAppSelector: ".soundscapes, .pomodoro, .focuses",
                onCreated() {
                  (0, r.z)({ clockVisible: !0, focusVisible: !0, soundscapesVisible: !0 }),
                    (l.Z.globalVolume = 5),
                    m.trigger("soundscapes:togglePopup", !0),
                    m.trigger("soundscapes:play", t),
                    i.Z.add(e),
                    "true" !== localStorage.getItem("pomodoro-showing") && m.trigger("pomodoro:show", !0);
                },
                onDestroyed: () => {
                  m.trigger("soundscapes:togglePopup", !1),
                    m.trigger("soundscapes:stop"),
                    (0, r.z)({ clockVisible: null, focusVisible: null, soundscapesVisible: null }),
                    i.Z.clear(Object.keys(e)),
                    m.trigger("pomodoro:show", !1);
                }
              }
            };
          })(),
          (function ({
            mockQuote: e = "Build things you believe in and fall in love with the process",
            mockMantra: t = "Action = Progress"
          } = {}) {
            return {
              name: "Motivation",
              progressBarText: "Motivation",
              component: u,
              subStepProps: {
                heading: "Get Motivated",
                subheading: "Center yourself with calming custom photos, quotes, and your favorite mantras.",
                arrow: "left-below",
                maskDefinitions: [
                  { padding: [40], targetElements: ".center-clock .three-col-layout--center, .greeting .three-col-layout--center" },
                  { padding: [15], targetElements: ".quote .body-text" }
                ],
                elementReadyEvent: "center:updated mantra:mounted quote:updated",
                elementReadyCheck: () => {
                  var e, o, n;
                  return (
                    document.querySelector(".center-clock") &&
                    !(
                      null !== (e = document.querySelector(".center-container")) &&
                      void 0 !== e &&
                      e.classList.contains("fade-enter-active")
                    ) &&
                    (null === (o = document.querySelector(".greeting .content")) || void 0 === o ? void 0 : o.innerText.includes(t)) &&
                    (null === (n = document.querySelector(".quote .body-text")) || void 0 === n
                      ? void 0
                      : n.getBoundingClientRect().height) > 0
                  );
                },
                showAppSelector: ".clock, .greeting, .quote",
                onCreated: async () => {
                  m.trigger("pomodoro:show", !1),
                    (0, r.z)({ clockVisible: !0, greetingVisible: !0, mantraVisible: !0, quoteVisible: !0 }),
                    document.querySelector(".quote")
                      ? m.trigger("quote:override", e)
                      : m.once("quote:created", () => {
                          m.trigger("quote:override", e);
                        }),
                    m.once("greetingMantraContainer:created", () => {
                      m.trigger("mantra:override", t);
                    }),
                    m.trigger("mantra:override", t);
                },
                onDestroyed: () => {
                  (0, r.z)({ clockVisible: null, greetingVisible: null, mantraVisible: null, quoteVisible: null }),
                    m.trigger("quote:override", null),
                    m.trigger("mantra:override", "");
                }
              }
            };
          })(),
          {
            name: "Ready",
            progressBarText: "Ready",
            component: () => o.e(6691).then(o.bind(o, 26691)),
            subStepProps: {
              heading: "Build Momentum",
              subheading: "Ready to get more Momentum towards your biggest goals?",
              buttonText: "Customize your dashboard now",
              bannerHeading: "Join a Live Workshop",
              bannerSubheading:
                "Want to improve your productivity, reduce procrastination, and maximize your Momentum? Sign up for a free live workshop this week.",
              bannerButtonText: "Learn more",
              bannerButtonLink: "https://lu.ma/momentum"
            }
          }
        ],
        key: "overlay"
      };
      var h = o(81405);
      function b() {
        var e, t;
        return {
          feature: "notifications",
          notification_id:
            (null === (e = m.models.notificationManager.displayed[0]) || void 0 === e ? void 0 : e.get("notification_id")) + "-2",
          group_id: null === (t = m.models.notificationManager.displayed[0]) || void 0 === t ? void 0 : t.get("group_id")
        };
      }
      const y = {
        name: "Search In Center Notification",
        id: "searchInCenterNotification",
        targetElementSelector: "[data-ob=center-below-nav]",
        elementReadyEvent: "belowNav:loaded",
        shouldActivate: () => d.default.getStep("plusIntroduction"),
        onShow() {
          h.ZP.capture("notification show", b());
        },
        onDismiss() {
          h.ZP.capture("notification dismiss", b());
        },
        onComplete() {
          h.ZP.capture("primary cta click", b());
        },
        targetDistance: 15,
        customCss:
          "\n\t\t\t\t[data-ob=center-below-nav] > .dash-icon { opacity: 1; }\n\t\t\t\t[data-ob=center-below-nav]:after { background: rgba(255,255,255,0.2); }\n\t\t\t",
        headerText: "Choose what to see",
        bodyText: "We’re trying out a central search bar! If you prefer to see your daily focus here, switch back using this button.",
        nextButtonText: "Got it"
      };
      var S = o(38465);
      const f = new h.ZP({ feature: "upgrade" }),
        v = {
          name: "Upgrade",
          getPlanInfo: !0,
          hasSaleBanner: !0,
          onShow() {
            f.capture("upgrade show", { has_email: !!localStorage.getItem("email") });
          },
          onDismiss({ activeSubStep: e }) {
            var t;
            f.capture("upgrade dismiss", { step: null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase() });
          },
          onSubStepComplete({ activeSubStep: e }) {
            f.capture("upgrade step complete", { name: e.name.toLowerCase(), is_paid_event: !!e.completionIsPaidEvent });
          },
          firstSubStep: () => (m.isLoggedIn() ? 1 : 0),
          component: () => o.e(102).then(o.bind(o, 10102)),
          hideOtherApps: !0,
          customCss: ".progress { visibility: hidden; }",
          transition: "slide-left-fade",
          reverseTransition: "slide-right-fade",
          customWidth: 800,
          customHeight: 650,
          sidebar: () => Promise.all([o.e(229), o.e(1603)]).then(o.bind(o, 11603)),
          subSteps: [
            {
              component: () => o.e(1994).then(o.bind(o, 11994)),
              name: "Email",
              interceptNextStep: !0,
              hasSaleBanner: !0,
              customCss: ".modal { background: white !important; }"
            },
            {
              component: () => o.e(13).then(o.bind(o, 80013)),
              name: "Plan",
              interceptNextStep: !0,
              hasSaleBanner: !0,
              showBackBtn: !0,
              belowButtonMsg: "Join 50,000+ people who’ve upgraded to Plus!",
              customCss: ".modal { background: white !important; }"
            },
            {
              component: () => o.e(7032).then(o.bind(o, 47032)),
              completionIsPaidEvent: !0,
              name: "Payment",
              hideFooter: !0,
              interceptNextStep: !0,
              hasSaleBanner: !0,
              showBackBtn: !0,
              preRender: !0,
              customCss: ".modal { max-height: 95vh; overflow: auto !important; background: white !important; }"
            },
            {
              component: () => o.e(2092).then(o.bind(o, 72092)),
              completionIsPaidEvent: !0,
              interceptNextStep: !0,
              name: "Thanks",
              hideFooter: !0,
              hideClose: !0
            }
          ]
        },
        M = {
          [n.os.UPSELL_AI_CHAT]: { name: "AiChat", component: () => Promise.all([o.e(5195), o.e(4296)]).then(o.bind(o, 44296)) },
          [n.os.UPSELL_AUTOFOCUS]: { name: "Autofocus", component: () => Promise.all([o.e(5195), o.e(3946)]).then(o.bind(o, 93946)) },
          [n.os.UPSELL_BALANCE_MODE]: { name: "Balance Mode", component: () => Promise.all([o.e(5195), o.e(604)]).then(o.bind(o, 10604)) },
          [n.os.UPSELL_COUNTDOWNS]: { name: "Countdown", component: () => Promise.all([o.e(5195), o.e(1396)]).then(o.bind(o, 31396)) },
          [n.os.UPSELL_MANTRAS]: { name: "Mantra", component: () => Promise.all([o.e(5195), o.e(827)]).then(o.bind(o, 60827)) },
          [n.os.UPSELL_METRICS]: { name: "Metrics", component: () => Promise.all([o.e(5195), o.e(7424)]).then(o.bind(o, 7424)) },
          [n.os.UPSELL_MULTI_TODO]: { name: "MultiTodo", component: () => Promise.all([o.e(5195), o.e(6700)]).then(o.bind(o, 96700)) },
          [n.os.UPSELL_NOTES]: { name: "Notes", component: () => Promise.all([o.e(5195), o.e(438)]).then(o.bind(o, 90438)) },
          [n.os.UPSELL_PHOTOS]: { name: "Photos", component: () => Promise.all([o.e(5195), o.e(8071)]).then(o.bind(o, 28071)) },
          [n.os.UPSELL_POMODORO]: { name: "Pomodoro", component: () => Promise.all([o.e(5195), o.e(3491)]).then(o.bind(o, 3491)) },
          [n.os.UPSELL_QUOTES]: { name: "Quotes", component: () => Promise.all([o.e(5195), o.e(1011)]).then(o.bind(o, 31011)) },
          [n.os.UPSELL_SOUNDSCAPES]: { name: "Soundscapes", component: () => Promise.all([o.e(5195), o.e(1976)]).then(o.bind(o, 41976)) },
          [n.os.UPSELL_TAB_GROUPS]: { name: "Tab Groups", component: () => Promise.all([o.e(5195), o.e(2578)]).then(o.bind(o, 92578)) },
          [n.os.UPSELL_TAB_STASH]: { name: "Tab Stash", component: () => Promise.all([o.e(5195), o.e(6498)]).then(o.bind(o, 76498)) },
          [n.os.UPSELL_THEMES]: { name: "Themes", component: () => Promise.all([o.e(5195), o.e(7154)]).then(o.bind(o, 57154)) },
          [n.os.UPSELL_TODO_INTEGRATIONS]: {
            name: "Todo Integrations",
            component: () => Promise.all([o.e(5195), o.e(4817), o.e(962)]).then(o.bind(o, 50962))
          },
          [n.os.UPSELL_WEATHER]: { name: "Weather", component: () => Promise.all([o.e(5195), o.e(4566)]).then(o.bind(o, 74566)) },
          [n.os.UPSELL_WORLD_CLOCKS]: { name: "World Clocks", component: () => Promise.all([o.e(5195), o.e(1567)]).then(o.bind(o, 61567)) },
          [n.os.PLUS_GATE]: { name: "Plus Features", component: () => Promise.all([o.e(5195), o.e(254)]).then(o.bind(o, 50254)) }
        };
      Object.values(M).forEach((e) => {
        (e.name = "Upsell: " + e.name), (e.getPlanInfo = !0);
      });
      const k = M;
      var w = o(68122);
      const T = {
        name: "Tab Stash Onboarding",
        component: () => o.e(3283).then(o.bind(o, 13283)),
        event: "tabStash:opened",
        userCreatedTimeGate: o(51740)._R,
        transitionName: "fade",
        hideOtherApps: !0,
        progressVisible: !1,
        onCreated: async () => {
          const e = (await w.Z.tabsViewStateStore())();
          e.popupActive || e.togglePopup(!0);
        },
        customCss:
          ".tour-feature { max-width: 700px!important; right: 0!important; } .cta { max-width: 800px !important; margin-top: 90px; margin-left: -275px; } .arrow { transform: translate(-100px, -20px) rotate(-135deg)!important;}",
        subSteps: [
          {
            name: "Tab Stash",
            component: () => Promise.resolve().then(o.bind(o, 71262)),
            subStepProps: {
              heading: "",
              component: () => o.e(1074).then(o.bind(o, 11074)),
              arrow: "left-above",
              maskDefinitions: [{ padding: [10], targetElements: ".tabs .app" }],
              elementReadyCheck: () => document.querySelector(".tabs .app-popup:not(.slide-down-fade-enter-active)"),
              elementReadyEvent: "tabStash:opened",
              showAppSelector: ".tabs",
              buttonText: ""
            }
          }
        ]
      };
      var D = o(14333);
      const N = {
          name: "Plus Offer",
          component: () => Promise.all([o.e(229), o.e(4139), o.e(7032), o.e(4442), o.e(8298)]).then(o.bind(o, 8298)),
          getPlanInfo: !0,
          hideOtherApps: !0,
          subSteps: [
            { name: "Trial Offer" },
            { name: "AuthForm - Register" },
            { name: "AuthForm - Sign in" },
            { name: "AuthForm - Reset password" },
            { name: "Payment Form" },
            { name: "Thanks" },
            { name: "Error - Existing trial" }
          ],
          transitionName: "fade",
          key: "overlay",
          onComplete: () =>
            new Promise((e) =>
              m.syncCoordinator.syncSettings(() => {
                m.widgetManager.populateWidgets(), m.models.themeManager.initializeThemes(), e();
              })
            ),
          async afterComplete() {
            D.Z.allocateDefinitions(), await D.Z.initiateNextStep();
          }
        },
        C = {
          [n.os.TOUR]: S.ZP,
          [n.os.FREE_INTRODUCTION]: a.y3,
          [n.os.PLUS_INTRODUCTION]: g,
          [n.os.UPGRADE]: v,
          [n.os.SEARCH_IN_CENTER_NOTIFICATION]: y,
          [n.os.PLUS_OFFER]: N,
          [n.os.REFRESH_MODAL]: { name: "Refresh Modal", component: () => o.e(9253).then(o.bind(o, 49253)) },
          [n.os.SAFARI_VERSION]: {
            name: "Safari Version Notification",
            headerText: "Want Momentum as your start page?",
            bodyText: "Update to Safari 14.1 or later to get the full experience.",
            position: "top-right",
            nextButtonText: "Close",
            targetElementSelector: "[data-ob=settings-toggle]",
            targetDistance: 5
          },
          [n.os.SAFARI_ACCOUNT]: {
            name: "Safari account modal",
            component: () => o.e(3105).then(o.bind(o, 73105)),
            customCss: ".step-container { background: white; } .modal { --modal-height: auto!important; }",
            transitionName: "fade"
          },
          [n.os.PERMISSION_REQUEST]: {
            name: "Permission request",
            component: () => o.e(8971).then(o.bind(o, 68971)),
            transitionName: "fade"
          },
          [n.os.TAB_STASH_ONBOARDING]: T,
          ...k
        };
      Object.entries(C).forEach(([e, t]) => (t.id = e));
      const I = [n.os.TAB_STASH_ONBOARDING],
        A = {
          all: Object.keys(C),
          upsells: Object.keys(k),
          unregistered: [n.os.FREE_INTRODUCTION],
          free: [n.os.FREE_INTRODUCTION],
          plus: [n.os.PLUS_INTRODUCTION, ...I],
          teamMember: [...I],
          teamAdmin: [...I]
        };
    },
    38465: (e, t, o) => {
      "use strict";
      o.d(t, { AZ: () => d, Vk: () => u, ZP: () => g, qB: () => c, tj: () => p, zS: () => l });
      var n = o(65238),
        a = o(40531),
        i = o(95220),
        s = o(15106);
      const r = () => Promise.resolve().then(o.bind(o, 71262));
      function d({
        subheading:
          e = "We’ve unlocked our premium dashboard features for 30 days to help you get more organized, motivated, and focused to beat distractions!"
      } = {}) {
        return {
          name: "Intro",
          progressBarText: "Intro",
          lockProgressBar: !0,
          component: () => o.e(9586).then(o.bind(o, 89586)),
          subStepProps: { subheading: e, component: () => o.e(6856).then(o.bind(o, 46856)) }
        };
      }
      function l({
        mockListTitle: e,
        mockTodos: t,
        subheading: o = "Keep your most important goals in view with Custom To-do lists."
      } = {}) {
        return {
          name: "Goals",
          component: r,
          subStepProps: {
            heading: "Goals",
            subheading: o,
            arrow: "right-below",
            maskDefinitions: [{ padding: [30, 30, 100], targetElements: ".mock-todo-app" }],
            elementReadyEvent: "mockTodo:mounted",
            elementReadyCheck: () => document.querySelector(".mock-todo"),
            showAppSelector: ".mock-todo",
            onCreated: () => {
              (e || t) &&
                m.once("mockTodo:created", () => {
                  m.trigger("mockTodo:overrideContent", { mockListTitle: e, mockTodos: t });
                }),
                m.trigger("mockTodo:mount"),
                m.widgetManager.loadWidget("mockTodo");
            },
            onDestroyed: () => {
              m.trigger("mockTodo:destroy");
            }
          }
        };
      }
      function c({
        mockData: e = {
          clocks: [],
          countdowns: [{ utcDate: Date.now() + 828e5, hasHours: !0, name: "Board Meeting" }],
          metrics: [
            { label: "Sales Closed", value: "5" },
            { label: "Fitbit Steps", value: "1250" }
          ]
        },
        subheading: t = "Track your habits to stay consistent."
      } = {}) {
        return (
          Object.values(e).forEach((e) => {
            e.forEach((e) => {
              (e.pinned = !0), (e.id = m.utils.uuidv4());
            });
          }),
          {
            name: "Habits",
            component: r,
            customCss:
              "\n\t\t\t.base-metric { justify-content: flex-end; align-items: flex-start; }\n\t\t\t.base-metric .dash-items { flex: 0 1 auto; }\n\t\t",
            subStepProps: {
              heading: "Habits",
              subheading: t,
              arrow: "right-above",
              maskDefinitions: [{ padding: [0, 0, -10, -40], targetElements: ".base-metric .dash-items" }],
              elementReadyEvent: "baseMetric:updated",
              elementReadyCheck: () => {
                const t = (e) => e.replace(/\s/g, "");
                return Object.entries(e).every(
                  ([e, o]) =>
                    0 === o.length ||
                    ((e, o) => {
                      const n = document.querySelectorAll(e);
                      return n.length && Array.from(n).every((e) => o.map(t).includes(t(e.textContent)));
                    })(
                      `.base-metric .metric-item.app-dash[data-type=${e}] .metric-label-name`,
                      o.map((e) => e.name || e.label || e.title)
                    )
                );
              },
              showAppSelector: ".base-metric",
              onCreated: () => {
                (0, s.z)({ metricVisible: !0, countdownVisible: !0, multiClockVisible: !1 }), i.Z.add(e);
              },
              onDestroyed: () => {
                (0, s.z)({ metricVisible: null, countdownVisible: null, multiClockVisible: null }), i.Z.clear(Object.keys(e));
              }
            }
          }
        );
      }
      function u({ subheading: e = "Click the clock to start a Pomodoro timer. Play nature soundscapes for deep work." } = {}) {
        return {
          name: "Focus",
          component: r,
          customCss:
            "\n\t\t\t.pomodoro { width: auto !important; align-self: center; }\n\t\t\t.pomodoro .focuses { whitespace: nowrap; }\n\t\t",
          subStepProps: {
            heading: "Focus",
            subheading: e,
            arrow: "above-left",
            maskDefinitions: [{ padding: [30, 10], targetElements: ".pomodoro" }],
            elementReadyEvent: "center:updated",
            elementReadyCheck: () => document.querySelector(".pomodoro"),
            showAppSelector: ".pomodoro, .focuses",
            onCreated: () => {
              m.trigger("pomodoro:show");
            },
            onDestroyed: () => {
              m.trigger("pomodoro:show", !1);
            }
          }
        };
      }
      function p({
        subheading: e = "Welcome to your 1-stop dashboard to overcome distractions and achieve all your goals.",
        buttonText: t = "Customize now",
        bannerHeading: n = "Want assistance getting started?",
        bannerSubheading: a = "Talk to one of our productivity experts to get Momentum set up for you.",
        bannerButtonText: i = "Schedule a call",
        bannerButtonLink: s = "https://calendly.com/d/cqh-237-ms8/momentum-plus-onboarding"
      } = {}) {
        return {
          name: "Ready",
          component: () => o.e(6691).then(o.bind(o, 26691)),
          progressBarText: "Ready",
          subStepProps: { subheading: e, buttonText: t, bannerHeading: n, bannerSubheading: a, bannerButtonText: i, bannerButtonLink: s }
        };
      }
      const g = {
        name: "Tour",
        component: () => o.e(3283).then(o.bind(o, 13283)),
        customCss: ` .top-row { padding-top: ${a.ax.bookmarksVisible ? 10 : 46}px; `,
        getPlanInfo: !0,
        transitionName: "fade-overlay",
        userCreatedTimeGate: "2000-01-01T00:00:00.000Z",
        alsoCompletesSteps: [n.os.FREE_INTRODUCTION],
        hideOtherApps: !0,
        subSteps: [d(), l(), c(), u(), p()]
      };
    },
    95220: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => a });
      var n = o(68122);
      const a = new (class {
        add(e = {}) {
          Object.entries(e).forEach(([e, t]) => {
            n.Z[e]().then((e) => e.addMockData(t));
          });
        }
        clear(e = []) {
          e.forEach((e) => {
            n.Z[e]().then((e) => e.clearMockData());
          });
        }
      })();
    },
    14333: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => p });
      var n = o(25343),
        a = o(35746),
        i = o(81405),
        s = o(35174),
        r = o(80809),
        d = o(51740),
        l = o(60617),
        c = o(67652);
      const u = new i.ZP({ feature: "onboarding" }),
        p = new (class {
          constructor() {
            (this.allocatedDefinitions = {}), m.once("onboarding:load", this._loadOnboarding.bind(this));
          }
          allocateDefinitions() {
            this.allocatedDefinitions = (0, n.CW)();
          }
          async _loadOnboarding() {
            const e = () => m.trigger("onboarding:stepsAnalyzed", { onboardingSkipped: !0 });
            try {
              if (localStorage.getItem("onboarding:skip")) return e();
              this.allocateDefinitions(), await a.default.refresh({ mode: c.Z.Cache });
              let [t, o] = await this._getNextStep(),
                n = await this._getUncompletedEventTriggeredModals();
              if (!t && !n.length) return e();
              if (
                (await a.default.refresh({ mode: c.Z.Server }),
                ([t, o] = await this._getNextStep()),
                (n = await this._getUncompletedEventTriggeredModals()),
                !t && !n.length)
              )
                return e();
              n.length && this._addEventListeners(n),
                m.introductionActive
                  ? (m.once("onboarding:initiate", this._initiateOnboardingStep.bind(this, t, o)),
                    m.trigger("onboarding:stepsAnalyzed", { keepAppsHidden: t.hideOtherApps }))
                  : (0, l.a)().stepActive || this._initiateOnboardingStep(t, o);
            } catch (t) {
              console.error(t), e();
            }
          }
          async initiateNextStep() {
            if (localStorage.getItem("onboarding:skip")) return !1;
            const [e, t] = await this._getNextStep();
            return !!e && (this._initiateOnboardingStep(e, t), !0);
          }
          _getUncompletedEventTriggeredModals() {
            return r.Z.asyncFilter(
              Object.values(this.allocatedDefinitions),
              async (e) => e.event && (await this._stepCanBeShown(e, { now: !1 }))
            );
          }
          _addEventListeners(e) {
            e.forEach((e) => {
              const t = async () => {
                (await this._stepCanBeShown(e)) && (this._initiateOnboardingStep(this._addHooksToDefinitions(e)), m.off(e.event, t));
              };
              e.event && m.on(e.event, t);
            });
          }
          _initiateOnboardingStep(e, t) {
            e && m.trigger("modal:show", e, t);
          }
          async _getNextStep() {
            for (let t in this.allocatedDefinitions) {
              if (!Object.prototype.hasOwnProperty.call(this.allocatedDefinitions, t)) continue;
              let o = this.allocatedDefinitions[t];
              if (!o.event && (await this._stepCanBeShown(o))) {
                var e;
                let t = a.default.getStep(o);
                return [
                  this._addHooksToDefinitions(o),
                  (null == t || null === (e = t.data) || void 0 === e ? void 0 : e.activeSubStepIndex) || 0
                ];
              }
            }
            return [];
          }
          async _onStepShow(e) {
            var t;
            await (null === (t = e.onShow) || void 0 === t ? void 0 : t.call(e)),
              u.capture("onboarding step show", { name: e.name.toLowerCase() });
          }
          async _onStepComplete(e, t, o) {
            var n;
            await (null === (n = e[o ? "onDismiss" : "onComplete"]) || void 0 === n ? void 0 : n.call(e, t)),
              u.capture("onboarding step " + (o ? "dismiss" : "complete"), { name: e.name.toLowerCase() }),
              await a.default.saveStepProgress(e, t.activeSubStepIndex, o ? "dismissed" : "complete");
          }
          async _onSubStepComplete(e, t) {
            var o;
            const { activeSubStep: n, nextSubStepIndex: i, hasSubStepsRemaining: s } = t;
            await (null === (o = e._onSubStepComplete) || void 0 === o ? void 0 : o.call(e, t)),
              u.capture("onboarding sub-step complete", { step: e.name.toLowerCase(), sub_step: n.name.toLowerCase() }),
              s && (await a.default.saveStepProgress(e, i));
          }
          async _afterStepComplete() {
            (await this.initiateNextStep()) || m.models.notificationManager.displayPendingMessages();
          }
          _addHooksToDefinitions(e) {
            const t = {
              ...e,
              onShow: () => this._onStepShow(e),
              onComplete: (t) => this._onStepComplete(e, t, !1),
              onDismiss: (t) => this._onStepComplete(e, t, !0),
              afterComplete: this._afterStepComplete.bind(this)
            };
            return e.subSteps.length && (t.onSubStepComplete = (t) => this._onSubStepComplete(e, t)), t;
          }
          async _stepCanBeShown(e, { now: t = !0 } = {}) {
            let o = a.default.getStep(e);
            return (
              !(o && ["complete", "dismissed", "legacy"].includes(o.status)) &&
              (await this._userMeetsDateRestrictions(e)) &&
              (!t || this._checkShouldActivate(e))
            );
          }
          async _userMeetsDateRestrictions(e) {
            let t = localStorage.getItem("user:createTime");
            if (!t) return !1;
            let o = !0;
            if (e.plusSubscriptionTimeGate) {
              let t = localStorage.getItem("user:firstSubscriptionStart");
              if (!t)
                try {
                  const e = await s.Z.get("user/profile?details=1");
                  (t = null == e ? void 0 : e.data.subscriptionSummary.firstSubscriptionStart),
                    t && localStorage.setItem("user:firstSubscriptionStart", t);
                } catch (e) {
                  console.error(e);
                }
              o = new Date(t) > new Date(e.plusSubscriptionTimeGate);
            }
            return o && new Date(t) > new Date(e.userCreatedTimeGate || d.MA);
          }
          _checkShouldActivate(e) {
            return !e.shouldActivate || e.shouldActivate();
          }
        })();
    },
    35746: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => c });
      var n = o(99437),
        a = o(94234),
        i = o(31624);
      const s = new (n.Z.extend({
        name: "OnboardingStepDataService",
        mixins: [i.X],
        unreactive: () => ({ type: "onboardingSteps", path: "onboarding_steps", queryParams: { update: { update_mask: "*" } } })
      }))();
      var r = o(2770);
      const d = n.Z.extend({
        name: "OnboardingStepModel",
        mixins: [r.Z],
        data: () => ({ id: "", name: "", status: "", data: {} }),
        unreactive: () => ({ props: ["name", "data", "status"] })
      });
      var l = o(51089);
      const c = new (n.Z.extend({
        name: "OnboardingStepCollection",
        mixins: [a.FZ],
        unreactive: () => ({ type: "onboardingSteps", Model: d, dataService: s }),
        methods: {
          async saveStepProgress(e, t, o = "active") {
            let n = this.getStep(e);
            if (n) {
              n.copyProperties(),
                (n.editProps.status = o),
                n.editProps.data || (n.editProps.data = {}),
                (n.editProps.data.activeSubStepIndex = t);
              try {
                await this.update(n), n.commitChanges();
              } catch (e) {
                console.error(e), n.revertChanges();
              }
            } else {
              (n = new this.Model()), n.updateData({ name: e.id, status: o, data: { activeSubStepIndex: t } });
              try {
                await this.add(n);
              } catch (e) {
                console.error(e);
              }
            }
            e.alsoCompletesSteps &&
              ["complete", "dismissed"].includes(o) &&
              (await Promise.all(
                e.alsoCompletesSteps.map((e) => {
                  const t = l.U[e],
                    n = this.getStep(t);
                  return n && ["complete", "dismissed"].includes(n.status) ? Promise.resolve() : this.saveStepProgress(t, void 0, o);
                })
              ));
          },
          getAddRequestBody(e) {
            let t = {};
            return e.props.forEach((o) => (t[o] = e[o])), t;
          },
          getUpdateRequestBody(e) {
            let t = {};
            return e.props.forEach((o) => (t[o] = e.editProps[o])), t;
          },
          getStep(e) {
            return (
              "string" == typeof e && (e = l.U[e]),
              Object.values(this.data.items).find(
                (t) => !(!e.legacyId || "legacy" !== t.status || t.name !== e.legacyId) || t.name === e.id
              )
            );
          }
        }
      }))();
    },
    60617: (e, t, o) => {
      "use strict";
      o.d(t, { a: () => n });
      const n = (0, o(63420).Q_)("modal", {
        state: () => ({ activeStep: {}, activeSubStepIndex: 0 }),
        getters: { stepActive: (e) => !!Object.keys(e.activeStep).length }
      });
    },
    40531: (e, t, o) => {
      "use strict";
      o.d(t, { Fl: () => i, Jr: () => d, ax: () => r });
      var n = o(99437);
      const a = new n.Z.observable({}),
        i = new Proxy(a, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || n.Z.set(e, t, m.models.customization.getComputedSetting(t)), e[t]),
          set: () => (
            console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'), !1
          )
        }),
        s = new n.Z.observable({}),
        r = new Proxy(s, {
          get: (e, t) => (Object.prototype.hasOwnProperty.call(e, t) || n.Z.set(e, t, m.models.customization.get(t)), e[t]),
          set: (e, t, o) => (m.models.customization.save(t, o), n.Z.set(e, t, o), !0)
        });
      function d(e = {}) {
        Object.entries(e).forEach(([e, t]) => n.Z.set(s, e, t)), m.models.customization.save(e);
      }
      m.models.customization.on("change", (e) => {
        e &&
          ("balanceModeStr" in e.changed && Object.entries(m.models.customization.attributes).forEach(([e, t]) => n.Z.set(a, e, t)),
          Object.entries(e.changed).forEach(([e, t]) => {
            (a[e] = m.models.customization.getComputedSetting(e)), n.Z.set(s, e, t);
          }));
      }),
        m.on("customization:update", (e) => {
          e.forEach((e) => {
            const t = m.models.customization.getComputedSetting(e);
            n.Z.set(a, e, t), n.Z.set(s, e, t);
          });
        });
    },
    16730: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => n });
      const n = o(99437).Z.observable({ globalPlaying: !1, globalVolume: 50, tracks: {}, fadeDuration: 500, random: !1 });
    },
    75474: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => r });
      var n = o(8081),
        a = o.n(n),
        i = o(23645),
        s = o.n(i)()(a());
      s.push([
        e.id,
        "\n/* stylelint-disable */\n.tour-feature[data-v-674d557f] { max-width: 550px; position: absolute; display: flex; align-items: center;\n}\n.cta[data-v-674d557f] { max-width: 400px; padding: 1rem; flex-grow: 1; display: flex; flex-direction: column;\n}\n.arrow[data-v-674d557f] { padding: 15px; order: 1; font-size: 14px;\n}\n.arrow.right-below[data-v-674d557f] { align-self: flex-end;\n}\n.arrow.right-above[data-v-674d557f] { align-self: flex-start; transform: rotateX(180deg);\n}\n.arrow.below-left[data-v-674d557f] { align-self: flex-start; transform: rotate(90deg);\n}\n.arrow.below-right[data-v-674d557f] { align-self: flex-end; transform: rotateY(180deg) rotate(90deg);\n}\n.arrow.left-above[data-v-674d557f] { order: -1; align-self: flex-start; transform: rotate(180deg);\n}\n.arrow.left-below[data-v-674d557f] { order: -1; align-self: flex-end; transform: rotateX(180deg) rotate(180deg);\n}\n.arrow.above-right[data-v-674d557f] { order: -1; align-self: flex-end; transform: rotate(-90deg);\n}\n.arrow.above-left[data-v-674d557f] { order: -1; align-self: flex-start; transform: rotateY(180deg) rotate(-90deg);\n}\n.icon-arrow[data-v-674d557f] { height: 60px; width: 60px;\n}\n.sub-step-transition-enter-active .feature[data-v-674d557f], .sub-step-transition-leave-active .feature[data-v-674d557f] { transition: opacity 0.5s ease;\n}\n.sub-step-transition-enter .feature[data-v-674d557f], .sub-step-transition-leave-to .feature[data-v-674d557f] { opacity: 0;\n}\n",
        ""
      ]);
      const r = s;
    },
    68122: (e, t, o) => {
      "use strict";
      async function n(e) {
        return (await e).default;
      }
      o.d(t, { Z: () => a });
      const a = {
        countdowns: () => n(o.e(5535).then(o.bind(o, 55535))),
        metrics: () => n(Promise.all([o.e(1103), o.e(3990)]).then(o.bind(o, 71103))),
        clocks: () => n(o.e(1554).then(o.bind(o, 71554))),
        focus: () => n(o.e(5711).then(o.bind(o, 85711))),
        linksViewStateStore: () => n(o.e(9968).then(o.bind(o, 89968))),
        linksStore: () => n(o.e(1886).then(o.bind(o, 71886))),
        tabsViewStateStore: () => n(o.e(5140).then(o.bind(o, 85140))),
        tabsStore: () => n(o.e(3943).then(o.bind(o, 63943)))
      };
    },
    67652: (e, t, o) => {
      "use strict";
      var n;
      o.d(t, { Z: () => a }),
        (function (e) {
          (e.Sync = "sync"), (e.Cache = "cache"), (e.Server = "server"), (e.Timestamp = "timestamp");
        })(n || (n = {}));
      const a = n;
    },
    71262: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { default: () => i });
      var n = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          [
            t("transition", { attrs: { name: "fade" } }, [
              e.maskReady
                ? t("div", { staticClass: "tour-feature", style: e.containerStyle, attrs: { "data-test": "feature" } }, [
                    t(
                      "div",
                      { staticClass: "cta", style: e.ctaStyle },
                      [
                        e.heading ? t("div", { staticClass: "heading" }, [e._v(e._s(e.heading))]) : e._e(),
                        e._v(" "),
                        e.subheading ? t("div", { staticClass: "subheading", domProps: { innerHTML: e._s(e.subheading) } }) : e._e(),
                        e._v(" "),
                        e.component
                          ? t(e.component, {
                              tag: "component",
                              on: {
                                next: function (t) {
                                  return e.$emit("next");
                                }
                              }
                            })
                          : e._e(),
                        e._v(" "),
                        e.buttonText
                          ? t(
                              "div",
                              {
                                staticClass: "button dash-button",
                                attrs: { "data-test": "next" },
                                on: {
                                  click: function (t) {
                                    return e.$emit("next");
                                  }
                                }
                              },
                              [
                                e._v(e._s(e.buttonText) + "\n\t\t\t\t\t"),
                                t("inline-svg", { staticClass: "icon icon-next", attrs: { src: o(67200) } })
                              ],
                              1
                            )
                          : e._e()
                      ],
                      1
                    ),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "arrow", class: e.arrow },
                      [t("inline-svg", { staticClass: "icon-arrow", attrs: { src: o(13377) } })],
                      1
                    )
                  ])
                : e._e()
            ])
          ],
          1
        );
      };
      n._withStripped = !0;
      const a = {
        name: "TourFeature",
        props: {
          onCreated: { type: Function, default: () => {} },
          onDestroyed: { type: Function, default: () => {} },
          maskDefinitions: { type: Array, default: () => [] },
          elementReadyEvent: { type: String, default: "" },
          elementReadyCheck: { type: Function, default: () => !0 },
          heading: { type: String, default: "" },
          subheading: { type: String, default: "" },
          component: { type: Function, default: () => {} },
          buttonText: { type: String, default: "Next" },
          showAppSelector: { type: String, default: "" },
          maskBorderRadius: { type: Number, default: 7 },
          alignCta: { type: String, default: "" },
          updateMaskEvents: { type: String, default: "" },
          arrow: { type: String, default: "" }
        },
        data: () => ({ masksDimensions: [], maskWrapperDimensions: {}, maskReady: !1 }),
        computed: {
          maskPadding() {
            return this.maskDefinitions.map((e) => e.padding);
          },
          maskTargetElements() {
            return this.maskDefinitions.map((e) => e.targetElements);
          },
          directions() {
            return this.arrow.split("-");
          },
          ctaStyle() {
            return { "justify-content": "below" === this.directions[0] ? "flex-end" : "flex-start" };
          },
          containerStyle() {
            if (!Object.keys(this.maskWrapperDimensions).length) return {};
            const { height: e, width: t, x: o, y: n, overlayOffsetX: a } = this.maskWrapperDimensions;
            let i = "auto",
              s = "auto",
              r = "auto",
              d = "auto";
            const l = ["right", "left"].includes(this.directions[0]),
              c = ["above", "below"].includes(this.directions[0]);
            let u = l ? t / 2 : 0;
            return (
              this.directions.includes("right")
                ? (s = Math.max(window.innerWidth - (o + u) - a, 50) + "px")
                : this.directions.includes("left") && (d = Math.max(o + t - u, 50) + "px"),
              (u = c ? e / 2 : 0),
              this.directions.includes("above")
                ? ((i = Math.max(n + e - u, 50) + "px"), "above" === this.directions[0] && (r = 0))
                : this.directions.includes("below") &&
                  ((r = Math.max(window.innerHeight - (n + u), 50) + "px"), "below" === this.directions[0] && (i = 0)),
              "start" === this.alignCta
                ? ((i = c ? "90px" : i), (s = l ? "auto" : s), (r = c ? "auto" : r), (d = l ? "90px" : d))
                : "end" === this.alignCta && ((i = c ? "auto" : i), (s = l ? "90px" : s), (r = c ? "90px" : r), (d = l ? "auto" : d)),
              {
                "justify-content": "above" === this.directions[0] ? "flex-end" : "flex-start",
                "flex-direction": ["above", "below"].includes(this.directions[0]) ? "column" : "row",
                top: i,
                right: s,
                bottom: r,
                left: d
              }
            );
          },
          paddingList() {
            return this.maskPadding.map((e) => this.parsePadding(e));
          }
        },
        mounted() {
          this.elementReadyCheck()
            ? this.onElementReady()
            : this.elementReadyEvent
            ? m.on(this.elementReadyEvent, this.onElementReadyEvent)
            : this.onElementReady(),
            window.addEventListener("keyup", this.handleKey);
        },
        created() {
          this.onCreated();
        },
        destroyed() {
          this.toggleAppsVisibility(!1),
            this.elementReadyEvent && m.off(this.elementReadyEvent, this.onElementReadyEvent),
            this.updateMaskEvents && m.on(this.updateMaskEvents, this.updateContainers),
            m.off("globalEvent:window:resize devPanelToggled metrics:resize", this.updateContainers),
            window.removeEventListener("keyup", this.handleKey),
            this.onDestroyed();
        },
        methods: {
          handleKey(e) {
            "Enter" === e.code && this.$emit("next");
          },
          onElementReadyEvent() {
            this.elementReadyCheck() && (m.off(this.elementReadyEvent, this.onElementReadyEvent), this.onElementReady());
          },
          onElementReady() {
            this.updateMaskEvents && m.on(this.updateMaskEvents, this.updateContainers),
              m.on("globalEvent:window:resize devPanelToggled baseMetric:updated", this.updateContainers),
              this.toggleAppsVisibility(!0),
              this.updateContainers(),
              this.$emit("maskReady");
          },
          updateContainers() {
            this.$nextTick(() => {
              this.getMaskWrapperDimensions(), this.applyMask();
            });
          },
          toggleAppsVisibility(e) {
            m.widgetManager[e ? "addAppExemption" : "removeAppExemption"](this.showAppSelector || this.maskTargetElements.join(","));
          },
          getShowAppTargetElements() {
            return document.querySelectorAll(this.showAppSelector || this.maskTargetElements.join(","));
          },
          getMaskWrapperDimensions() {
            const e = document.querySelectorAll(this.maskTargetElements.join(","));
            e.length && (this.maskWrapperDimensions = this.getContainerDimensions(e, this.parsePadding([60])));
          },
          applyMask() {
            const e = this.maskTargetElements;
            for (let [t, o] of e.entries()) {
              const e = document.querySelectorAll(o);
              if (!e.length) return;
              this.masksDimensions[t] = this.getContainerDimensions(e, this.paddingList[t]);
            }
            this.$emit("updateMaskDimensions", this.masksDimensions), (this.maskReady = !0);
          },
          parsePadding(e) {
            switch ((e.length || e.push(0), e.length)) {
              case 1:
                return { top: e[0], right: e[0], bottom: e[0], left: e[0] };
              case 2:
                return { top: e[0], right: e[1], bottom: e[0], left: e[1] };
              case 3:
                return { top: e[0], right: e[1], bottom: e[2], left: e[1] };
              case 4:
                return { top: e[0], right: e[1], bottom: e[2], left: e[3] };
            }
          },
          getContainerDimensions(e, t) {
            var o;
            const n = null === (o = document.querySelector(".tour")) || void 0 === o ? void 0 : o.getBoundingClientRect().x;
            let a = Number.MAX_SAFE_INTEGER,
              i = Number.MAX_SAFE_INTEGER,
              s = 0,
              r = 0;
            for (const t of e) {
              const { left: e, top: o, right: n, bottom: d } = t.getBoundingClientRect();
              e < a && (a = e), o < i && (i = o), n > s && (s = n), d > r && (r = d);
            }
            return {
              x: a - n - t.left,
              y: i - t.top,
              width: s - a + t.left + t.right,
              height: r - i + t.top + t.bottom,
              borderRadius: this.maskBorderRadius,
              overlayOffsetX: n
            };
          }
        }
      };
      o(19381);
      const i = (0, o(51900).Z)(a, n, [], !1, null, "674d557f", null).exports;
    },
    19381: (e, t, o) => {
      var n = o(75474);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[e.id, n, ""]]),
        n.locals && (e.exports = n.locals),
        (0, o(45346).Z)("28589230", n, !1, { ssrId: !0 });
    },
    13377: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjEgNjEiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01Ny44NTEyIDQxLjk4OEw0NS43Mzg3IDU0LjEwMDVDNDUuNTY0NSA1NC4yNzQ4IDQ1LjM1NzcgNTQuNDEzMSA0NS4xMzAxIDU0LjUwNzVDNDQuOTAyNSA1NC42MDE4IDQ0LjY1ODUgNTQuNjUwNCA0NC40MTIxIDU0LjY1MDRDNDQuMTY1NyA1NC42NTA0IDQzLjkyMTcgNTQuNjAxOCA0My42OTQxIDU0LjUwNzVDNDMuNDY2NSA1NC40MTMxIDQzLjI1OTcgNTQuMjc0OCA0My4wODU1IDU0LjEwMDVMMzAuOTczIDQxLjk4OEMzMC42MjEyIDQxLjYzNjIgMzAuNDIzNiA0MS4xNTkgMzAuNDIzNiA0MC42NjE0QzMwLjQyMzYgNDAuMTYzOSAzMC42MjEyIDM5LjY4NjcgMzAuOTczIDM5LjMzNDlDMzEuMzI0OSAzOC45ODMgMzEuODAyIDM4Ljc4NTQgMzIuMjk5NiAzOC43ODU0QzMyLjc5NzIgMzguNzg1NCAzMy4yNzQzIDM4Ljk4MyAzMy42MjYyIDM5LjMzNDlMNDIuNTQxOCA0OC4yNTA1QzQyLjU1MTcgMzguMDI1NSAzOC41MDAxIDI4LjIxNTMgMzEuMjc3OSAyMC45NzcyQzI0LjA1NTYgMTMuNzM5MiAxNC4yNTQzIDkuNjY2MDMgNC4wMjkzIDkuNjUzNkMzLjUzMjAyIDkuNjUzNiAzLjA1NTEgOS40NTYwNiAyLjcwMzQ3IDkuMTA0NDNDMi4zNTE4NCA4Ljc1MjggMi4xNTQzIDguMjc1ODggMi4xNTQzIDcuNzc4NkMyLjE1NDMgNy4yODEzMiAyLjM1MTg0IDYuODA0NDEgMi43MDM0NyA2LjQ1Mjc4QzMuMDU1MSA2LjEwMTE0IDMuNTMyMDIgNS45MDM2IDQuMDI5MyA1LjkwMzZDMTUuMjQ4OCA1LjkxNjAzIDI2LjAwNCAxMC4zODQyIDMzLjkyOTUgMTguMzI1NkM0MS44NTUgMjYuMjY2OSA0Ni4zMDE3IDM3LjAzMSA0Ni4yOTE4IDQ4LjI1MDVMNTUuMjA3NCAzOS4zMzQ5QzU1LjU1OSAzOC45ODYyIDU2LjAzNDIgMzguNzkwNyA1Ni41MjkzIDM4Ljc5MTFDNTYuODk5IDM4Ljc5MjcgNTcuMjYgMzguOTAzNSA1Ny41NjY5IDM5LjEwOTZDNTcuODczOCAzOS4zMTU3IDU4LjExMjkgMzkuNjA4IDU4LjI1NDEgMzkuOTQ5NkM1OC4zOTU0IDQwLjI5MTMgNTguNDMyNSA0MC42NjcgNTguMzYwOCA0MS4wMjk3QzU4LjI4OTEgNDEuMzkyNCA1OC4xMTE4IDQxLjcyNTggNTcuODUxMiA0MS45ODhWNDEuOTg4WiIvPjwvc3ZnPgo=";
    },
    67200: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiAxMCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLjg4ODUwNyAxMEMwLjY4OTY5OCAxMCAwLjQ5MDcyNiA5LjkyNDEzIDAuMzM5MTkzIDkuNzcyMzdDMC4wMzU2OTg5IDkuNDY5MSAwLjAzNTY5ODkgOC45NzcxIDAuMzM5MTkzIDguNjczNzlMNC4wMTI4IDVMMC4zMzkxOTMgMS4zMjYxOUMwLjAzNTY5ODkgMS4wMjI5IDAuMDM1Njk4OSAwLjUzMDg5NiAwLjMzOTE5MyAwLjIyNzYwNUMwLjY0MjMgLTAuMDc1ODY4MyAxLjEzNDY3IC0wLjA3NTg2ODMgMS40Mzc3OCAwLjIyNzYwNUw1LjY2MDkgNC40NTA2OUM1Ljk2NDM1IDQuNzUzOTggNS45NjQzNSA1LjI0NiA1LjY2MDkgNS41NDkzMUwxLjQzNzc4IDkuNzcyMzdDMS4yODYyNSA5LjkyNDE1IDEuMDg3MjggMTAgMC44ODg1MDcgMTBWMTBaIiAvPjwvc3ZnPgo=";
    },
    37336: (e) => {
      "use strict";
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI3ODEuMzYxIDAgOTQ0Ljg5MyA4NzMuMzc3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciID48cmFkaWFsR3JhZGllbnQgaWQ9ImFzYW5hIiBjeD0iOTQzLjk5MiIgY3k9IjEyMjEuNDE2IiByPSIuNjYzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDk0NC44OTM0IDAgMCAtODczLjM3NzIgLTg5MDcxNy44NzUgMTA2NzIzNC43NSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmI5MDAiLz48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZjk1ZDhmIi8+PHN0b3Agb2Zmc2V0PSIuOTk5IiBzdG9wLWNvbG9yPSIjZjk1MzUzIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2FzYW5hKSIgZD0iTTE1MjAuNzY2IDQ2Mi4zNzFjLTExMy41MDggMC0yMDUuNTA4IDkyLTIwNS41MDggMjA1LjQ4OCAwIDExMy40OTkgOTIgMjA1LjUxOCAyMDUuNTA4IDIwNS41MTggMTEzLjQ4OSAwIDIwNS40ODgtOTIuMDE5IDIwNS40ODgtMjA1LjUxOCAwLTExMy40ODgtOTEuOTk5LTIwNS40ODgtMjA1LjQ4OC0yMDUuNDg4em0tNTMzLjkwNy4wMWMtMTEzLjQ4OS4wMS0yMDUuNDk4IDkxLjk5LTIwNS40OTggMjA1LjQ4OCAwIDExMy40ODkgOTIuMDA5IDIwNS40OTggMjA1LjQ5OCAyMDUuNDk4IDExMy40OTggMCAyMDUuNTA4LTkyLjAwOSAyMDUuNTA4LTIwNS40OTggMC0xMTMuNDk5LTkyLjAxLTIwNS40ODgtMjA1LjUxOC0yMDUuNDg4aC4wMXptNDcyLjQ0Ny0yNTYuODgzYzAgMTEzLjQ4OS05MS45OTkgMjA1LjUxOC0yMDUuNDg4IDIwNS41MTgtMTEzLjUwOCAwLTIwNS41MDgtOTIuMDI5LTIwNS41MDgtMjA1LjUxOFMxMTQwLjMxIDAgMTI1My44MTcgMGMxMTMuNDg5IDAgMjA1LjQ3OSA5Mi4wMDkgMjA1LjQ3OSAyMDUuNDk4aC4wMXoiLz48L3N2Zz4K";
    }
  }
]);
