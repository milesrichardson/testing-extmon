(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3313, 12, 8117],
  {
    8552: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => i });
      const i = {
        inserted: function (t, e) {
          var a;
          if (!1 === (null == e ? void 0 : e.value)) return;
          const i = null == t || null === (a = t.value) || void 0 === a ? void 0 : a.length;
          t.select(), (i || 0 === i) && (t.setSelectionRange(i, i), (t.scrollLeft = t.scrollWidth));
        }
      };
    },
    197: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        o = a.n(i),
        n = a(23645),
        s = a.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.more-dropdown[data-v-6d452fd6] { display: block;\n} /* TODO. remove this once we remove the use of 'active' class on more icons */\n.search-form[data-v-6d452fd6] { position: relative; margin: 1.0625rem 0.625rem; display: flex;\n}\n.search .search-input[data-v-6d452fd6] { height: calc(24px + 2 * 1.0625rem); width: 100%; max-width: var(--width); margin: -1.0625rem 0; z-index: 2; background: none; border: none; cursor: pointer; line-height: 20px; outline: none;\n}\n.app-dash .search-input[data-v-6d452fd6] { color: #fff;\n}\n.search-underline[data-v-6d452fd6] { margin-top: 17px; position: absolute; top: 50%; right: 0; left: 0; z-index: 1; opacity: 0; border-bottom: 2px solid white; transition: opacity var(--a-fast) var(--a-curve);\n}\n.search:hover .search-underline[data-v-6d452fd6] { opacity: 0.4;\n}\n.search:focus-within .search-underline[data-v-6d452fd6] { opacity: 1;\n}\n.search .search-icon-container[data-v-6d452fd6] { padding: 0 0.25rem 0 0; display: flex; align-items: center; transition: opacity var(--a-fast) var(--a-curve);\n}\n.search .search-icon-container .icon-search[data-v-6d452fd6] { --icon-size: 16px; opacity: 0.85;\n}\n.search:hover .search-icon-container .icon-search[data-v-6d452fd6], .search:focus-within .search-icon-container .icon-search[data-v-6d452fd6] { opacity: 1;\n}\n.search .right-wrapper[data-v-6d452fd6] { display: flex;\n}\n.search .right-wrapper .icon[data-v-6d452fd6] { --icon-size: 16px; height: var(--icon-size); width: var(--icon-size);\n}\n.search .source[data-v-6d452fd6] { display: flex; opacity: 0; transition: var(--a-fast) var(--a-curve);\n}\n.search:hover .source[data-v-6d452fd6] { opacity: 0.65;\n}\n.search:focus-within .source[data-v-6d452fd6] { opacity: 1;\n}\n.search .source-toggle[data-v-6d452fd6] { position: relative; align-self: center; display: flex; align-items: center; justify-content: center; cursor: pointer; outline: none;\n}\n\n\t\t\t\t/* Icons */\n.search .source-toggle .icon-dropdown[data-v-6d452fd6] { --icon-size: 14px; display: block; opacity: 0.5; fill: #fff; transition: 0.1s var(--a-curve);\n}\n.source.active .source-toggle .icon-dropdown[data-v-6d452fd6] { opacity: 1; transition-duration: 0s;\n}\n.search .source[data-v-6d452fd6] .dropdown { margin-top: 29px; top: 50%; right: -100px; left: auto;\n}\n.search[data-v-6d452fd6] .dropdown.nipple-top-right:after { right: 14px;\n}\n.search .dropdown .search-provider[data-v-6d452fd6] { outline: none;\n}\n.search .dropdown .icon[data-v-6d452fd6] { max-height: 15px;\n}\n\n\t\t\t\t\t/* TODO: Generalize the padding here to match dropdown li headings (might need to just move this direct to general dropdown styling */\n.search .dropdown .heading[data-v-6d452fd6] { padding: 4px 14px 6px; opacity: 0.75; cursor: default; font-size: 0.625rem; font-weight: 500; text-transform: uppercase;\n}\n.search .dropdown[data-v-6d452fd6] .dropdown-list-icon { --icon-size: 15px;\n}\n.search .dropdown .icon.active[data-v-6d452fd6] { opacity: 1;\n}\n\n\n/* Search in focus */\n.big .search-form[data-v-6d452fd6] { --action-width: 50px; margin: 0; height: 100%;\n}\n.big .search-icon-container[data-v-6d452fd6] { padding: 0 0.8125rem 0 1.5rem; display: flex; align-items: center;\n}\n.big .icon-search[data-v-6d452fd6] { --size: 26px; height: var(--size); width: var(--size); margin: 0; position: relative; top: auto; left: auto; text-shadow: none;\n}\n.big .search-input[data-v-6d452fd6] { height: var(--height); max-width: none; padding: 0 0 1px; font-size: 28px; margin: 0;\n}\n.big .search-input[data-v-6d452fd6]::placeholder { opacity: 0.5; color: #fff;\n}\n.big:focus-within .more[data-v-6d452fd6] { pointer-events: auto;\n}\n.big .right-wrapper .icon[data-v-6d452fd6] { --icon-size: 18px;\n}\n.big .right-wrapper .ask-ai[data-v-6d452fd6] { display: flex; align-items: center; padding: 0 0.625rem; cursor: pointer;\n}\n.big .source.dropdown-visible[data-v-6d452fd6]  { opacity: 1;\n}\n.big .source[data-v-6d452fd6] { opacity: 1;\n}\n.big:hover .source[data-v-6d452fd6] { opacity: 1;\n}\n.big .source-toggle[data-v-6d452fd6] { width: var(--action-width); margin-right: 0; padding-right: 10px; align-self: stretch;\n}\n.big .source-selected[data-v-6d452fd6] { display: flex;\n}\n.big .source-selected .icon-ecosia[data-v-6d452fd6] { --icon-size: 16px; margin-right: -1px;\n}\n\n\t\t/* Review if this specificity/redundancy is necessary */\n.big .source-toggle .icon-dropdown[data-v-6d452fd6], .big .source-toggle .icon-source[data-v-6d452fd6] { transition: var(--a-fast) var(--a-curve);\n}\n.big .source-toggle:hover .icon-dropdown[data-v-6d452fd6], .big .source-toggle:hover .icon-source[data-v-6d452fd6] { opacity: 1;\n}\n.big .dropdown-visible .source-toggle .icon-source[data-v-6d452fd6] { opacity: 1;\n}\n.big:focus-within .source-toggle .icon-source[data-v-6d452fd6] { opacity: 1;\n}\n.big .source-toggle .icon-dropdown[data-v-6d452fd6] { --icon-size: 16px; margin: 0; margin-left: -1px; opacity: 0;\n}\n.big .dropdown-visible .source-toggle .icon-dropdown[data-v-6d452fd6] { opacity: 0.6;\n}\n.big .source[data-v-6d452fd6] .dropdown { margin-top: -2px; top: 100%; right: auto; left: -5px;\n}\n.big .search-underline[data-v-6d452fd6] { display: none;\n}\n\n\n\t/* Mobile */\n@media screen and (max-width: 450px) {\n.big .search-form[data-v-6d452fd6] { width: auto;\n}\n.big .search-icon-container[data-v-6d452fd6] { margin-left: -2px;\n}\n.big .icon-search[data-v-6d452fd6] { --size: 20px;\n}\n.big .search-input[data-v-6d452fd6] { font-size: 21px;\n}\n.big .source-toggle .icon-dropdown[data-v-6d452fd6] { opacity: 0.5;\n}\n}\n",
        ""
      ]);
      const r = s;
    },
    34842: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        o = a.n(i),
        n = a(23645),
        s = a.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.dropdown[data-v-0a952a33] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-0a952a33] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-0a952a33] { opacity: 0.8;\n}\n.open-enter-active[data-v-0a952a33], .open-leave-active[data-v-0a952a33] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-0a952a33], .open-leave-to[data-v-0a952a33] { opacity: 0;\n}\n\n",
        ""
      ]);
      const r = s;
    },
    91398: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => r });
      var i = a(8081),
        o = a.n(i),
        n = a(23645),
        s = a.n(n)()(o());
      s.push([
        t.id,
        "\n/* stylelint-disable */\n.toast-hide[data-v-585a48d3] { opacity: 0;\n}\n.toast-visible .icon[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-container[data-v-585a48d3] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-585a48d3] { --toast-padding: calc(var(--app-padding) - 3px); --dropdown-padding: var(--toast-padding); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast > *[data-v-585a48d3]:not(.toast-header):first-child { padding-top: calc(var(--app-padding) / 2);\n}\n.toast-header[data-v-585a48d3] { padding: var(--toast-padding); text-align: left;\n}\n[data-v-585a48d3] .toast-title { line-height: 1.25;\n}\n[data-v-585a48d3] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-585a48d3] li { max-width: 100% !important;\n}\n.header-line[data-v-585a48d3] { margin: 0 -4px 4px !important;\n}\n.section-title[data-v-585a48d3] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-585a48d3] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-585a48d3] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-585a48d3] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-585a48d3]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-585a48d3] { opacity: 0.8;\n}\n.toast-overlay[data-v-585a48d3] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-585a48d3], .slide-up-leave-active[data-v-585a48d3] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-585a48d3], .slide-up-leave-to[data-v-585a48d3]  { transform: translateY(100%);\n}\n",
        ""
      ]);
      const r = s;
    },
    76333: (t, e, a) => {
      "use strict";
      a.d(e, { Z: () => v });
      var i = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "search-form" }, [
          e("div", { staticClass: "search-underline" }),
          t._v(" "),
          e(
            "div",
            { staticClass: "search-icon-container" },
            [
              e("inline-svg", {
                staticClass: "icon dash-icon icon-search",
                attrs: { src: (t.bigSearch, a(42527)), "data-test": "icon-search" }
              })
            ],
            1
          ),
          t._v(" "),
          e("input", {
            directives: [
              { name: "model", rawName: "v-model.trim", value: t.searchInput, expression: "searchInput", modifiers: { trim: !0 } },
              { name: "soft-focus", rawName: "v-soft-focus", value: t.$touch, expression: "$touch" }
            ],
            ref: "input",
            staticClass: "search-input",
            attrs: {
              id: "search-input",
              "search-url": t.searchUrl,
              type: "text",
              autocomplete: "off",
              "data-test": "search-input",
              placeholder: t.placeholder
            },
            domProps: { value: t.searchInput },
            on: {
              click: t.focusSearchOnUserAction,
              blur: [
                function (e) {
                  t.inputHasFocus = !1;
                },
                function (e) {
                  return t.$forceUpdate();
                }
              ],
              input: [
                function (e) {
                  e.target.composing || (t.searchInput = e.target.value.trim());
                },
                t.sendStartTypingEvent
              ],
              keydown: function (e) {
                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit.apply(null, arguments);
              }
            }
          }),
          t._v(" "),
          e(
            "div",
            { staticClass: "right-wrapper" },
            [
              e("transition", { attrs: { name: "fade-fast" } }, [
                t.bigSearch && t.searchInput
                  ? e(
                      "div",
                      {
                        staticClass: "ask-ai",
                        attrs: { title: t.aiToolTipText },
                        on: {
                          click: function (e) {
                            return t.submit(e, !0);
                          }
                        }
                      },
                      [e("inline-svg", { staticClass: "icon icon-ai", attrs: { src: a(98944) } })],
                      1
                    )
                  : t._e()
              ]),
              t._v(" "),
              e(
                t.$touch ? "ToastMenu" : "Dropdown",
                {
                  directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.hideDropdown, expression: "hideDropdown" }],
                  tag: "component",
                  staticClass: "more source",
                  attrs: { active: t.dropdownActive, "on-dash": !t.$touch, "section-title": "Search with" },
                  on: { toggle: t.toggleMore },
                  scopedSlots: t._u([
                    {
                      key: "moreToggle",
                      fn: function () {
                        return [
                          e(
                            "div",
                            {
                              staticClass: "source-toggle",
                              attrs: { tabindex: "0", "data-test": "provider-toggle" },
                              on: {
                                click: function (e) {
                                  return t.toggleMore(!t.dropdownActive);
                                }
                              }
                            },
                            [
                              e("div", { staticClass: "source-selected" }, [
                                e("img", {
                                  key: t.selectedProvider.id,
                                  class: [`icon-${t.selectedProvider.id} icon icon-source`, "active"],
                                  attrs: { src: t.selectedProviderIcon }
                                })
                              ]),
                              t._v(" "),
                              e("inline-svg", { staticClass: "icon icon-dropdown", attrs: { src: a(75356) } })
                            ],
                            1
                          )
                        ];
                      },
                      proxy: !0
                    }
                  ])
                },
                [
                  t._v(" "),
                  e(
                    "div",
                    { on: { click: t.focusSearch } },
                    [
                      t.$touch ? t._e() : e("div", { staticClass: "heading" }, [t._v("Search with")]),
                      t._v(" "),
                      t._l(t.$options.searchProviders, function (a, i) {
                        return e("dropdown-option", {
                          key: i,
                          staticClass: "search-provider",
                          class: { active: t.selectedProviderId === t.selectedProvider.id },
                          attrs: { "data-test": `select-${a.id}`, "data-provider": a.id, icon: a.iconSrc, name: a.name },
                          nativeOn: {
                            click: function (e) {
                              return t.selectProvider(a.id);
                            }
                          },
                          scopedSlots: t._u(
                            [
                              {
                                key: "icon",
                                fn: function () {
                                  return [e("inline-svg", { staticClass: "icon", attrs: { src: a.iconSrc } })];
                                },
                                proxy: !0
                              }
                            ],
                            null,
                            !0
                          )
                        });
                      })
                    ],
                    2
                  )
                ]
              )
            ],
            1
          )
        ]);
      };
      i._withStripped = !0;
      var o = a(30012),
        n = a(6207),
        s = a(88117),
        r = a(8552),
        d = a(40063),
        c = a(42223),
        l = a(81405),
        p = a(80809);
      const h = new l.ZP({ feature: "search" }),
        u = {
          name: "SearchInput",
          components: { DropdownOption: s.default, Dropdown: n.default, ToastMenu: o.default },
          directives: { SoftFocus: r.Z, ClickOutside: d.Z },
          mixins: [c.Z],
          searchProviders: {
            google: {
              id: "google",
              name: "Google",
              iconSrc: a(41751),
              iconWhiteSrc: a(88364),
              searchId: "google-generic",
              prefix: "https://www.google.com/search?q="
            },
            bing: {
              id: "bing",
              name: "Bing",
              iconSrc: a(48013),
              iconWhiteSrc: a(21399),
              searchId: "bing-app-1",
              prefix: "https://www.bing.com/search?q=",
              suffix: "&PC=ATMM&FORM=MMXT01"
            },
            duckduckgo: {
              id: "duckduckgo",
              name: "DuckDuckGo",
              iconSrc: a(45960),
              iconWhiteSrc: a(1e3),
              searchId: "duckduckgo",
              prefix: "https://duckduckgo.com/?q="
            },
            ecosia: {
              id: "ecosia",
              name: "Ecosia",
              iconSrc: a(38570),
              iconWhiteSrc: a(22111),
              searchId: "ecosia",
              prefix: "https://www.ecosia.org/search?q=",
              suffix: "&tt=c4ccf3a1"
            }
          },
          props: { bigSearch: { type: Boolean, default: !1 }, placeholder: { type: String, default: "" } },
          unreactive: () => ({ aiToolTipText: `Ask AI (${p.Z.getMetaKeyName()} + Enter)` }),
          data: () => ({
            dropdownActive: !1,
            selectedProviderId: m.models.customization.get("searchProvider"),
            searchInput: "",
            inputHasFocus: !1
          }),
          computed: {
            selectedProviderIcon() {
              return this.$touch && !this.bigSearch ? this.selectedProvider.iconSrc : this.selectedProvider.iconWhiteSrc;
            },
            selectedProvider() {
              return this.$options.searchProviders[this.selectedProviderId];
            },
            searchUrl() {
              return `${this.selectedProvider.prefix}${encodeURIComponent(this.searchInput)}${this.selectedProvider.suffix || ""}`;
            },
            location() {
              return this.bigSearch ? "center" : "top left";
            },
            hasInputLength() {
              return !!this.searchInput.length;
            }
          },
          watch: {
            selectedProvider() {
              h.capture("search provider switch", { location: this.location, new_value: this.selectedProvider.name.toLowerCase() });
            }
          },
          created() {
            m.on("globalEvent:esc", this.blurSearch),
              m.on("globalEvent:toggleSearch", this.focusSearchOnUserAction),
              m.models.customization.on("change:searchProvider", this.setSearchProvider);
          },
          destroyed() {
            m.off("globalEvent:esc", this.blurSearch),
              m.off("globalEvent:toggleSearch", this.focusSearchOnUserAction),
              m.models.customization.off("change:searchProvider", this.setSearchProvider);
          },
          methods: {
            selectProvider(t) {
              m.models.customization.save("searchProvider", t), (this.selectedProviderId = t), this.hideDropdown();
            },
            setSearchProvider() {
              this.selectedProviderId = m.models.customization.get("searchProvider");
            },
            focusSearch() {
              this.$refs.input.focus();
            },
            focusSearchOnUserAction(t) {
              this.inputHasFocus ||
                (this.focusSearch(),
                h.capture("search focus", {
                  location: this.location,
                  provider: this.selectedProvider.name.toLowerCase(),
                  method: t instanceof PointerEvent ? "click" : "hotkey"
                })),
                (this.inputHasFocus = !0);
            },
            toggleMore(t = !this.dropdownActive) {
              this.dropdownActive = t;
            },
            blurSearch() {
              this.$refs.input.blur();
            },
            hideDropdown() {
              this.dropdownActive = !1;
            },
            submit(t, e = t.metaKey) {
              this.hasInputLength &&
                (e && this.bigSearch
                  ? (this.$emit("showChatPopup", this.searchInput), (this.searchInput = ""))
                  : this.selectedProvider &&
                    this.selectedProvider.prefix &&
                    ((window.location.href = this.searchUrl),
                    h.capture("search submit", { location: this.location, provider: this.selectedProvider.name.toLowerCase() })));
            },
            sendStartTypingEvent({ inputType: t }) {
              1 === this.searchInput.length &&
                "insertText" === t &&
                h.capture("search start typing", { location: this.location, provider: this.selectedProvider.name.toLowerCase() });
            }
          }
        };
      a(93401);
      const v = (0, a(51900).Z)(u, i, [], !1, null, "6d452fd6", null).exports;
    },
    6207: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => n });
      var i = function () {
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
      i._withStripped = !0;
      const o = {
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
      a(58239);
      const n = (0, a(51900).Z)(o, i, [], !1, null, "0a952a33", null).exports;
    },
    88117: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => n });
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
        n = (0, a(51900).Z)(o, i, [], !1, null, null, null).exports;
    },
    30012: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { default: () => n });
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
      a(218);
      const n = (0, a(51900).Z)(o, i, [], !1, null, "585a48d3", null).exports;
    },
    93401: (t, e, a) => {
      var i = a(197);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("7232dc43", i, !1, { ssrId: !0 });
    },
    58239: (t, e, a) => {
      var i = a(34842);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("69751410", i, !1, { ssrId: !0 });
    },
    218: (t, e, a) => {
      var i = a(91398);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.id, i, ""]]),
        i.locals && (t.exports = i.locals),
        (0, a(45346).Z)("317a9898", i, !1, { ssrId: !0 });
    },
    75356: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTE2LjYgOC42TDEyIDEzLjIgNy40IDguNiA2IDEwbDYgNiA2LTZ6Ii8+PC9zdmc+";
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    },
    6800: (t) => {
      "use strict";
      t.exports = JSON.parse(
        '{"widget":true,"webpack":true,"waitFor":true,"autoLoad":true,"id":"search","class":"app-container search","region":"top-left","addin":"162b82d0-f285-427c-8209-924f44ef4d21","visibleSetting":"searchVisible"}'
      );
    }
  }
]);
