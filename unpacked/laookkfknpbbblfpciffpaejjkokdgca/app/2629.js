(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [2629, 9437, 12, 8117],
  {
    99437: (t, e, s) => {
      "use strict";
      s.d(e, { Z: () => w });
      var i = s(20144),
        a = s(88026),
        o = s(51726),
        n = s.n(o),
        r = s(55482),
        u = s(7838),
        c = s(35174);
      let d = {};
      const l = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (d[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", d[t.dataset.mobileClickHandlerId]),
            delete d[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var M = s(63420),
        L = s(64398),
        p = s(77197);
      i.ZP.use(a.Z, { name: "unreactive" }),
        i.ZP.use(n()),
        i.ZP.use(r.qK),
        i.ZP.use(M.og),
        i.ZP.use(p.Z),
        (i.ZP.prototype.$xhr = c.Z),
        (i.ZP.prototype.$e = u.Z),
        i.ZP.directive("mobile-click", l),
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
          pinia: L.Z
        });
      const w = i.ZP;
    },
    62629: (t, e, s) => {
      "use strict";
      s.r(e);
      var i = s(99437),
        a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "app-container quote", attrs: { "data-test": "quote" } },
            [
              e("transition", { attrs: { name: "fade", mode: "out-in" } }, [
                t.quoteVisible && t.activeQuote
                  ? e(
                      "div",
                      {
                        directives: [
                          { name: "resize-sensor", rawName: "v-resize-sensor", value: t.wrapQuote, expression: "wrapQuote" },
                          {
                            name: "mobile-click",
                            rawName: "v-mobile-click",
                            value: t.toggleToastMenu.bind(null, !0),
                            expression: "toggleToastMenu.bind(null, true)"
                          }
                        ],
                        key: t.quoteUuid,
                        staticClass: "app-dash",
                        attrs: { "data-test": "app-dash" },
                        on: {
                          mouseenter: t.captureDebouncedHover,
                          mouseleave: t.cancelDebouncedHoverCapture,
                          click: function (e) {
                            return e.preventDefault(), t.handleClick(e);
                          }
                        }
                      },
                      [
                        e("p", { staticClass: "body" }, [
                          e(
                            "span",
                            { ref: "body-text", staticClass: "body-text", attrs: { "data-test": "body-text" } },
                            t._l(t.wrappedBodyArray, function (s, i) {
                              return e("<br>" === s ? "br" : "span", { key: i + s, tag: "component" }, [
                                t._v("\n\t\t\t\t\t\t" + t._s(s + (i < t.wrappedBodyArray.length ? " " : "")) + "\n\t\t\t\t\t")
                              ]);
                            }),
                            1
                          )
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "below" }, [
                          e(
                            "div",
                            { staticClass: "below-actions u--touch-hide", attrs: { "data-test": "below" } },
                            [
                              t.source
                                ? e("span", { staticClass: "source", attrs: { "data-test": "source" } }, [t._v(t._s(t.source))])
                                : t._e(),
                              t._v(" "),
                              t._l(t.controls, function (s, i) {
                                return e(
                                  "div",
                                  {
                                    key: i,
                                    staticClass: "control",
                                    class: t.access(s.class),
                                    attrs: { title: t.access(s.label), "data-test": s.dataTest },
                                    on: { click: s.action }
                                  },
                                  [e("inline-svg", { staticClass: "icon", class: s.iconClass, attrs: { src: t.access(s.icon) } })],
                                  1
                                );
                              })
                            ],
                            2
                          )
                        ])
                      ]
                    )
                  : t._e()
              ]),
              t._v(" "),
              t.$touch
                ? e(
                    "toast-menu",
                    {
                      attrs: { active: t.toastMenuActive, "section-title": "Quote Actions" },
                      on: { toggle: t.toggleToastMenu },
                      scopedSlots: t._u(
                        [
                          {
                            key: "header",
                            fn: function () {
                              return [
                                e("div", { ref: "body-text", staticClass: "toast-title", attrs: { "data-test": "body-text" } }, [
                                  t._v(t._s(t.body))
                                ]),
                                t._v(" "),
                                t.source
                                  ? e("div", { staticClass: "toast-source", attrs: { "data-test": "source" } }, [
                                      t._v("– " + t._s(t.source))
                                    ])
                                  : t._e()
                              ];
                            },
                            proxy: !0
                          }
                        ],
                        null,
                        !1,
                        3091593074
                      )
                    },
                    [
                      t._v(" "),
                      t._l(t.controls, function (s, i) {
                        return e(
                          "dropdown-option",
                          {
                            key: i,
                            class: t.access(s.class),
                            nativeOn: {
                              click: function (t) {
                                return s.action.apply(null, arguments);
                              }
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "icon",
                                  fn: function () {
                                    return [e("inline-svg", { staticClass: "icon", class: t.access(s.iconClass), attrs: { src: s.icon } })];
                                  },
                                  proxy: !0
                                }
                              ],
                              null,
                              !0
                            )
                          },
                          [t._v("\n\t\t\t" + t._s(t.access(s.label)) + "\n\t\t")]
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
      a._withStripped = !0;
      var o = s(61706),
        n = s(30012),
        r = s(88117),
        u = s(40531);
      const c = new (s(81405).ZP)({ feature: "quotes" }),
        d = {
          name: "Quote",
          components: { DropdownOption: r.default, ToastMenu: n.default },
          bb: () => ({ collection: m.collect.quotes }),
          directives: { ResizeSensor: o.Z },
          unreactive() {
            return {
              controls: {
                favorite: {
                  icon: s(57950),
                  label: () => (this.isFavorite ? "Unfavorite" : "Favorite"),
                  action: () => this.toggleFavorite(),
                  class: () => ["favorite", { active: this.isFavorite }],
                  dataTest: "favorite",
                  iconClass: "icon-heart"
                },
                skip: {
                  icon: s(75667),
                  label: "Skip",
                  action: () => this.skipQuote(),
                  dataTest: "skip",
                  class: () => ["skip", { active: this.skipping }],
                  iconClass: "icon-skip"
                },
                twitter: {
                  icon: s(24405),
                  label: "Share",
                  action: () => this.shareTwitter(),
                  class: () => "control-twitter",
                  dataTest: "share",
                  iconClass: "icon-twitter"
                }
              },
              debounedHover: null
            };
          },
          data: () => ({ wrappedBodyArray: "", activeQuoteId: "", skipping: !1, toastMenuActive: !1, quoteOverride: "" }),
          computed: {
            quoteVisible: () => u.Fl.quoteVisible,
            activeQuote() {
              return this.quoteOverride || this.collection.get(this.activeQuoteId);
            },
            quoteUuid() {
              return this.activeQuote ? this.activeQuote.get("_id") : "";
            },
            isCustom() {
              return !!this.activeQuote && this.activeQuote.get("is_custom");
            },
            body() {
              return this.activeQuote ? `“${this.activeQuote.get("body")}”` : "";
            },
            bodyArray() {
              return this.body.split(" ");
            },
            source() {
              return this.activeQuote ? this.activeQuote.get("source") : "";
            },
            detailUrl() {
              return this.activeQuote ? this.activeQuote.get("detail_url") : "";
            },
            twitter() {
              return this.activeQuote ? this.activeQuote.get("twitter") : "";
            },
            twitterIntentUrl() {
              if (!this.activeQuote) return "";
              const t = this.activeQuote.get("twitterIntentUrl");
              if (t) return t;
              const e = this.twitter ? `"${this.body}" -@${this.twitter} #motivation` : `"${this.body}" -${this.source} #motivation`;
              return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(e) + "&via=momentumdash&related=momentumdash,levibucsis";
            },
            isFavorite() {
              return !!this.activeQuote && this.activeQuote.get("is_favorite");
            }
          },
          created() {
            m.models.quoteManager.firstFetch(),
              this.setQuote(),
              m.on("newDay", this.setQuote),
              m.collect.quotes.on("reset add change sync refresh", this.setQuote),
              m.on("appsReady", this.wrapQuoteAndWatch),
              m.on("quote:override", this.overrideQuote),
              m.trigger("quote:created");
          },
          mounted() {
            m.widgetManager.appReady("quote");
          },
          destroyed() {
            m.off("newDay", this.setQuote),
              m.collect.quotes.off("reset add change sync refresh", this.setQuote),
              m.off("appsReady", this.wrapQuoteAndWatch),
              m.off("quote:override", this.overrideQuote);
          },
          methods: {
            overrideQuote(t) {
              this.quoteOverride = t
                ? {
                    body: t,
                    forDate: m.utils.getDateString(),
                    _id: m.utils.uuidv4(),
                    get(t) {
                      return this[t];
                    }
                  }
                : null;
            },
            handleClick() {
              this.detailUrl && this.detailUrl.length > 0 && window.open(this.detailUrl, "_blank");
            },
            captureDebouncedHover(t) {
              const e = t.target;
              this.cancelDebouncedHoverCapture(),
                (this.debounedHover = setTimeout(() => {
                  e.matches(":hover") && c.capture("quote hover", { custom: this.isCustom });
                }, 1e3));
            },
            cancelDebouncedHoverCapture() {
              clearTimeout(this.debounedHover);
            },
            shareTwitter() {
              let t = screen.width / 2 - 272.5,
                e = screen.height / 2 - 210;
              window.open(this.twitterIntentUrl, "share", "left=" + t + ",top=" + e + ",width=545,height=420,resizeable=0"),
                c.capture("quote tweet click", { custom: this.isCustom });
            },
            toggleFavorite() {
              let t = (this.activeQuote.is_favorite = !this.isFavorite);
              m.models.quoteManager.toggleFavorite(t).catch(() => (this.activeQuote.is_favorite = !t)),
                c.capture("quote " + (t ? "fav" : "unfav"), { custom: this.isCustom, location: "dash" });
            },
            skipQuote() {
              this.$plus
                ? this.skipping ||
                  ((this.skipping = !0),
                  setTimeout(() => {
                    m.models.quoteManager.skipItem().finally(() => {
                      this.skipping = !1;
                    }),
                      c.capture("quote skip", { is_paid_event: !0, custom: this.isCustom });
                  }, 450))
                : m.cmd("modal.open", "UPSELL_QUOTES", { eventSource: "dash" });
            },
            wrapQuoteAndWatch() {
              this.wrapQuote(), this.watcher || (this.watcher = this.$watch("body", this.wrapQuote));
            },
            wrapQuote() {
              (this.wrappedBodyArray = this.bodyArray),
                this.$nextTick(() => {
                  this.$nextTick(() => {
                    m.trigger("quote:updated");
                  });
                  const t = this.$refs["body-text"];
                  if (!t) return;
                  const e = [];
                  let s = null;
                  if (
                    (Array.from(t.children).forEach((t, i) => {
                      let a = t.offsetTop;
                      null === s && (s = a), a > s && (e.push(i - 1), (s = a));
                    }),
                    !e.length)
                  )
                    return;
                  const i = this.body.replaceAll(" ", "").length;
                  let a = e.map((t, s) => {
                      let a = 0,
                        o = Math.ceil(i / (e.length + 1)),
                        n =
                          this.bodyArray.findIndex((t) => {
                            if (((a += t.length), a > o * (s + 1))) return !0;
                          }) + 1;
                      return Math.min(n, t);
                    }),
                    o = 0,
                    n = [];
                  this.bodyArray.forEach((t, e) => {
                    e === a[o] + 1 && (n.push("<br>"), o++), n.push(t);
                  }),
                    (this.wrappedBodyArray = n);
                });
            },
            setQuote() {
              this.activeQuoteId = this.getActiveQuote();
            },
            getActiveQuote() {
              let t;
              return (
                this.collection.length > 0 && (t = this.collection.getActiveItem()),
                t ? (m.trigger("quote:downloaded"), t.id) : (m.trigger("sync:download", "quote"), "")
              );
            },
            toggleToastMenu(t = !this.toastMenuActive) {
              this.toastMenuActive = t;
            },
            access: m.utils.access
          }
        };
      s(69693);
      const l = (0, s(51900).Z)(d, a, [], !1, null, "7268b4e1", null).exports,
        M = Backbone.Model.extend({
          defaults: { _id: "", body: "", source: "", is_custom: !1, detail_url: "", twitter: "" },
          idAttribute: "forDate"
        }),
        L = m.models.FeedManager.extend({
          initialize: function () {
            m.models.FeedManager.prototype.initialize.call(this, m.models.Quote, "quote");
          }
        }),
        p = Backbone.Collection.extend({
          localStorage: new Backbone.LocalStorage("momentum-quote"),
          model: m.models.Quote,
          getActiveItem: function () {
            if (this.length > 0) {
              let t = m.utils.getDateString();
              return this.get(t);
            }
          }
        });
      (m.models.Quote = M),
        (m.collect.Quotes = p),
        (m.collect.quotes = new p()),
        (m.models.QuoteManager = L),
        (m.models.quoteManager = new L());
      const w = document.createElement("div");
      document.querySelector(".region.bottom-center").appendChild(w), new i.Z({ render: (t) => t(l) }).$mount(w);
    },
    40531: (t, e, s) => {
      "use strict";
      s.d(e, { Fl: () => o, Jr: () => u, ax: () => r });
      var i = s(99437);
      const a = new i.Z.observable({}),
        o = new Proxy(a, {
          get: (t, e) => (Object.prototype.hasOwnProperty.call(t, e) || i.Z.set(t, e, m.models.customization.getComputedSetting(e)), t[e]),
          set: () => (
            console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'), !1
          )
        }),
        n = new i.Z.observable({}),
        r = new Proxy(n, {
          get: (t, e) => (Object.prototype.hasOwnProperty.call(t, e) || i.Z.set(t, e, m.models.customization.get(e)), t[e]),
          set: (t, e, s) => (m.models.customization.save(e, s), i.Z.set(t, e, s), !0)
        });
      function u(t = {}) {
        Object.entries(t).forEach(([t, e]) => i.Z.set(n, t, e)), m.models.customization.save(t);
      }
      m.models.customization.on("change", (t) => {
        t &&
          ("balanceModeStr" in t.changed && Object.entries(m.models.customization.attributes).forEach(([t, e]) => i.Z.set(a, t, e)),
          Object.entries(t.changed).forEach(([t, e]) => {
            (a[t] = m.models.customization.getComputedSetting(t)), i.Z.set(n, t, e);
          }));
      }),
        m.on("customization:update", (t) => {
          t.forEach((t) => {
            const e = m.models.customization.getComputedSetting(t);
            i.Z.set(a, t, e), i.Z.set(n, t, e);
          });
        });
    },
    12660: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { default: () => r });
      var i = s(8081),
        a = s.n(i),
        o = s(23645),
        n = s.n(o)()(a());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n\n/*\n\tQuote vertical positioning rules:\n\t- If the quote is one line: vertically aligned with background info and Notes/To-do app dashes\n\t- If the quote is two lines: vertically aligned with background info and Notes/To-do app dashes so that space between two lines is centered\n\t- If the quote is more than two lines: respect the dash vertical margin and move the quote up as lines increase\n\tWhen hovered:\n\t- Source should translate down to edge of screen, it does not need to respect the dash vertical padding\n\t- Body must translate up only as much as necessary, this means it will need to translate more if it is 2+ lines.\n\n\tQuote horizontal positioning rules:\n\t- Quote body element must extend the entire width of the bottom (middle) region even if the quote is wrapping\n\t  to ensure that if the region expands it will trigger the resize observer.\n*/\n.quote[data-v-7268b4e1] { --below-height: 30px; --max-translate-y: calc((var(--below-height) - var(--dash-vertical-margin)) * -1); min-height: var(--top-and-bottom-row-min-height); width: 100%; margin-top: calc(var(--max-translate-y) * -1); padding: 0; display: flex; align-items: center; text-align: center;\n}\n.app-dash[data-v-7268b4e1] { padding: var(--dash-vertical-margin) 5px; flex-basis: 100%;\n}\n.body[data-v-7268b4e1], .below[data-v-7268b4e1] { margin: 0; color: rgba(255,255,255,0.9); line-height: 1.2; transition: all 0.35s 0.1s var(--a-curve);\n}\n.body[data-v-7268b4e1] { --relative-translate-y: calc(50% * -1); display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 1.125rem; -moz-user-select: text; -webkit-user-select: text; user-select: text;\n}\n.quote .app-dash:hover .body[data-v-7268b4e1] { transform: translateY(max(var(--relative-translate-y), var(--max-translate-y)));\n}\n.touch .quote .app-dash:hover .body[data-v-7268b4e1] { transform: translateY(0);\n}\n.below[data-v-7268b4e1] { height: var(--below-height); position: absolute; inset: auto 0 0; opacity: 0; font-size: 0.875rem; transform: translateY(-50%);\n}\n.quote .app-dash:hover .below[data-v-7268b4e1], .quote.pseudo-hover .below[data-v-7268b4e1] { opacity: 1; transform: translateY(0);\n}\n.below-actions[data-v-7268b4e1] { display: flex; align-items: center; justify-content: center;\n}\n.source[data-v-7268b4e1] { margin-right: 4px; opacity: 0.75;\n}\n.below-actions .control[data-v-7268b4e1] { padding: 6px 3px; position: relative; display: inline-flex; align-items: center; justify-content: center; opacity: 0.75; cursor: pointer; line-height: 100%; vertical-align: middle;\n}\n.below-actions .control[data-v-7268b4e1]:hover, .below .control.active[data-v-7268b4e1] { opacity: 1;\n}\n.below-actions .control.skip[data-v-7268b4e1] { padding-left: 2px;\n}\n.below-actions .icon[data-v-7268b4e1] { --icon-size: 16px; display: block;\n}\n\n\n/* Tablet */\n@media screen and (max-width: 768px) {\n.quote[data-v-7268b4e1] { margin-top: 0; padding: 0 10px;\n}\n.quote .body .body-text[data-v-7268b4e1] { font-size: 1rem !important; font-style: italic;\n}\n}\n",
        ""
      ]);
      const r = n;
    },
    91398: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { default: () => r });
      var i = s(8081),
        a = s.n(i),
        o = s(23645),
        n = s.n(o)()(a());
      n.push([
        t.id,
        "\n/* stylelint-disable */\n.toast-hide[data-v-585a48d3] { opacity: 0;\n}\n.toast-visible .icon[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-container[data-v-585a48d3] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-585a48d3] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast > *[data-v-585a48d3]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-585a48d3] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-585a48d3] .toast-title { line-height: 1.25;\n}\n[data-v-585a48d3] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-585a48d3] li { max-width: 100% !important;\n}\n.header-line[data-v-585a48d3] { margin: 0 -4px 4px !important;\n}\n.section-title[data-v-585a48d3] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-585a48d3] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-585a48d3] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-585a48d3] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-585a48d3]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-overlay[data-v-585a48d3] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-585a48d3], .slide-up-leave-active[data-v-585a48d3] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-585a48d3], .slide-up-leave-to[data-v-585a48d3]  { transform: translateY(100%);\n}\n",
        ""
      ]);
      const r = n;
    },
    88117: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { default: () => o });
      var i = function () {
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
      i._withStripped = !0;
      const a = {
          name: "DropdownOption",
          doNotWaitForMount: !0,
          props: {
            icon: { type: String, default: "" },
            name: { type: String, default: "" },
            isPlus: { type: Boolean, default: !1 },
            description: { type: String, default: "" }
          }
        },
        o = (0, s(51900).Z)(a, i, [], !1, null, null, null).exports;
    },
    30012: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { default: () => o });
      var i = function () {
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
      i._withStripped = !0;
      const a = {
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
      s(218);
      const o = (0, s(51900).Z)(a, i, [], !1, null, "585a48d3", null).exports;
    },
    69693: (t, e, s) => {
      var i = s(12660);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, s(45346).Z)("f63b8746", i, !1, { ssrId: !0 });
    },
    218: (t, e, s) => {
      var i = s(91398);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, s(45346).Z)("317a9898", i, !1, { ssrId: !0 });
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
    },
    24405: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuMDA0IDQxOS4wNDIiPjxwYXRoIGQ9Ik0xOTEuMDEyLDQ2Ni4wNDNhNDM5LjMsNDM5LjMsMCwwLDEtNjcuODU2LTUuMzg3QzgyLjc3Nyw0NTQuMzIsNDEuOSw0MzMuMiwzMC4zMzYsNDI2Ljg3NUwwLDQxMC4yODlsMzIuODQ0LTEwLjhjMzUuOS0xMS44LDU3Ljc0Mi0xOS4xMjksODQuNzc3LTMwLjYtMjcuMDctMTMuMTEtNDcuOTMzLTM2LjY5Mi01Ny45NzYtNjcuMTc2TDUyLDI3OC41Mmw2LjI2Ni45NTdBMTEzLjk3NywxMTMuOTc3LDAsMCwxLDQ0LDI2MS44ODNjLTEyLjkzNC0xOS42NDUtMTkuNzgxLTQzLjY0OS0xOC4zMjQtNjQuMjE5bDEuNDM3LTIwLjI0NiwxMi4xMjEsNC42OTVhMTEzLjMxOSwxMTMuMzE5LDAsMCwxLTEwLjk4LTMwLjc3N2MtNS4yOTMtMjYuMzU5LS44NjMtNTQuMzYzLDEyLjQ3Ni03OC44NTJMNTEuMjg5LDUzLjEsNjUuNDEsNzAuMDYyYzQ0LjY2LDUzLjY0OSwxMDEuMjI3LDg1LjQ3MywxNjguMzYzLDk0Ljc5LTIuNzQyLTE4LjktLjY4Ny0zNy4xNDUsNi4xMTQtNTMuNSw3LjkxOC0xOS4wMzksMjItMzUuMTgzLDQwLjcyMi00Ni42OTFBMTIyLjMyMiwxMjIuMzIyLDAsMCwxLDM1MS42LDQ3LjIzYzI2LjUxMSwxLjYyOSw1MC41ODIsMTEuNTYzLDY5LjcsMjguNzQ3LDkuMzM2LTIuNDI2LDE2LjIxNS01LjAxNiwyNS41MTItOC41MTYsNS41OTMtMi4xMDYsMTEuOTM3LTQuNSwxOS44NzUtNy4yMzFsMjkuMjUtMTAuMDc4LTE5LjA3NSw1NC40NzdjMS4yNTgtLjEwNiwyLjU1NS0uMiwzLjkxMS0uMjU0TDUxMiwxMDIuOTYxbC0xOC40NjEsMjUuMjNjLTEuMDU5LDEuNDQ2LTEuMzI4LDEuODU2LTEuNywyLjQyMi0xLjQ4OCwyLjI0Mi0zLjM0LDUuMDMyLTI4LjY4LDM4Ljg2Ny02LjM0NCw4LjQ3My05LjUxMiwxOS41MDgtOC45MjIsMzEuMDc5LDIuMjQ2LDQzLjk2OC0zLjE0OCw4My43NS0xNi4wNDMsMTE4LjIzNEM0MjYsMzUxLjQxOCw0MDcuMSwzNzkuNDEsMzgyLjAzMSw0MDEuOTkyYy0zMS4wMjMsMjcuOTM4LTcwLjU4Miw0Ny4wNjctMTE3LjU4Miw1Ni44NDhBMzYxLjk2MSwzNjEuOTYxLDAsMCwxLDE5MS4wMTIsNDY2LjA0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ3LjAwMSkiLz48L3N2Zz4K";
    }
  }
]);
