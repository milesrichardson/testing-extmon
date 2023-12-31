(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [4085, 9437],
  {
    99437: (t, o, i) => {
      "use strict";
      i.d(o, { Z: () => v });
      var e = i(20144),
        n = i(88026),
        d = i(51726),
        a = i.n(d),
        r = i(55482),
        p = i(7838),
        s = i(35174);
      let l = {};
      const c = {
        bind: function (t, o) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (l[t.dataset.mobileClickHandlerId] = o.value),
            t.addEventListener("click", o.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", l[t.dataset.mobileClickHandlerId]),
            delete l[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var g = i(63420),
        h = i(64398),
        x = i(77197);
      e.ZP.use(n.Z, { name: "unreactive" }),
        e.ZP.use(a()),
        e.ZP.use(r.qK),
        e.ZP.use(g.og),
        e.ZP.use(x.Z),
        (e.ZP.prototype.$xhr = s.Z),
        (e.ZP.prototype.$e = p.Z),
        e.ZP.directive("mobile-click", c),
        new e.ZP({
          bb: () => ({
            conditionalFeatures: m.conditionalFeatures,
            teamInfo: m.models.teamInfo,
            date: m.models.date,
            balance: m.models.balanceMode,
            bookmarksSettings: m.models.bookmarksSettings
          })
        }),
        e.ZP.mixin({
          unreactive: () => ({ $touch: m.utils.isTouchDevice() }),
          computed: {
            $mobile: () => m.reactive.windowDimensions.width <= 450,
            $plus: () => m.conditionalFeatures.featureEnabled("plus"),
            $team: () => m.conditionalFeatures.featureEnabled("team"),
            $admin: () => m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin
          },
          pinia: h.Z
        });
      const v = e.ZP;
    },
    54085: (t, o, i) => {
      "use strict";
      i.r(o);
      var e = i(99437),
        n = function () {
          var t = this,
            o = t._self._c;
          return o("div", { staticClass: "app-container todo mock-todo show" }, [
            o("div", { staticClass: "app-wrapper nipple nipple-bottom-right" }, [
              o("div", { staticClass: "app todo-app mock-todo-app", attrs: { "data-test": "mock-todo" } }, [
                o("header", { staticClass: "header todo-header" }, [
                  o("div", { staticClass: "todo-header-row" }, [
                    o(
                      "div",
                      { staticClass: "active-list-container has-icon" },
                      [
                        t.providerIcon ? o("inline-svg", { staticClass: "provider-icon", attrs: { src: t.providerIcon } }) : t._e(),
                        t._v(" "),
                        o("span", { staticClass: "list-name active-list-name", attrs: { title: "Inbox" } }, [t._v(t._s(t.title))]),
                        t._v(" "),
                        o(
                          "div",
                          { staticClass: "list-chooser-toggle icon-wrapper", staticStyle: { display: "inline-flex" } },
                          [o("inline-svg", { staticClass: "icon icon-angle-down", attrs: { src: i(75356) } })],
                          1
                        )
                      ],
                      1
                    ),
                    t._v(" "),
                    o("div", { staticClass: "todo-header-controls" }, [
                      o("div", { staticClass: "todo-header-control more" }, [
                        o(
                          "div",
                          { staticClass: "icon-wrapper more-toggle" },
                          [o("inline-svg", { staticClass: "icon icon-ellipsis more-icon", attrs: { src: i(49710) } })],
                          1
                        )
                      ])
                    ])
                  ])
                ]),
                t._v(" "),
                o("div", { staticClass: "todo-list-wrapper" }, [
                  o(
                    "ol",
                    { staticClass: "todo-list" },
                    t._l(t.todos, function (i) {
                      return o("li", { key: i, staticClass: "todo-item visible" }, [
                        o("span", { staticClass: "todo-item-wrapper has-more" }, [
                          t._m(0, !0),
                          t._v(" "),
                          o("span", { staticClass: "todo-item-title" }, [t._v(t._s(i))])
                        ])
                      ]);
                    }),
                    0
                  )
                ]),
                t._v(" "),
                t._m(1)
              ])
            ]),
            t._v(" "),
            o("span", { staticClass: "app-dash toggle" }, [t._v("Todo")])
          ]);
        };
      n._withStripped = !0;
      const d = {
        name: "MockTodo",
        data: () => ({ title: "Long Term Goals", todos: ["Get a dog", "Climb a mountain", "Visit Switzerland"], providerIcon: null }),
        created() {
          m.on("mockTodo:overrideContent", this.overrideContent), m.trigger("mockTodo:created");
        },
        mounted() {
          m.trigger("mockTodo:mounted");
        },
        destroyed() {
          m.off("mockTodo:overrideContent", this.overrideContent);
        },
        methods: {
          overrideContent({ mockListTitle: t, mockTodos: o, mockProviderIcon: i } = {}) {
            t && (this.title = t), o && (this.todos = o), i && (this.providerIcon = i);
          }
        }
      };
      i(13003);
      const a = (0, i(51900).Z)(
        d,
        n,
        [
          function () {
            var t = this._self._c;
            return t("label", [t("input", { staticClass: "todo-item-checkbox", attrs: { type: "checkbox" } })]);
          },
          function () {
            var t = this._self._c;
            return t("footer", { staticClass: "footer-input new-todo-footer" }, [
              t("input", { staticClass: "todo-input todo-new", attrs: { type: "text", placeholder: "New Todo" } })
            ]);
          }
        ],
        !1,
        null,
        "4d7f7902",
        null
      ).exports;
      function r() {
        const t = document.createElement("div");
        document.querySelector(".region.bottom-right").appendChild(t);
        const o = new e.Z({ render: (t) => t(a) }).$mount(t);
        m.once("mockTodo:destroy", () => {
          o.$el.remove(), o.$destroy();
        });
      }
      r(), m.on("mockTodo:mount", r);
    },
    57158: (t, o, i) => {
      "use strict";
      i.r(o), i.d(o, { default: () => s });
      var e = i(8081),
        n = i.n(e),
        d = i(23645),
        a = i.n(d),
        r = i(99900),
        p = a()(n());
      p.i(r.Z),
        p.push([
          t.id,
          "\n/* stylelint-disable */\n.app-wrapper[data-v-4d7f7902] { opacity: 1;\n}\n.todo .list-chooser-toggle .icon[data-v-4d7f7902] { height: 22px; width: 22px;\n}\n.provider-icon[data-v-4d7f7902] { width: 21px;\n}\n\n/* needs to be specific to override */\n.apps.hide-apps .app-container.show-anyway .toggle[data-v-4d7f7902] { opacity: 1;\n}\n",
          ""
        ]);
      const s = p;
    },
    99900: (t, o, i) => {
      "use strict";
      i.d(o, { Z: () => r });
      var e = i(8081),
        n = i.n(e),
        d = i(23645),
        a = i.n(d)()(n());
      a.push([
        t.id,
        "/* Todo */\n\n.todo { text-align: right; text-shadow: none; }\n\n.todo .app-container { position: relative; }\n\n.todo .todo-app { height: auto; width: 330px; padding: 0; position: absolute; display: block; opacity: 1; overflow-y: hidden; text-align: left; }\n\t.todo-app.animating::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0) !important; }\n\n\t.todo .drop-zone { width: 37px; position: absolute; top: 4px; bottom: 4px; z-index: 10000; opacity: 0; font-size: 14px; transition: all 0.3s ease-out; visibility: hidden; writing-mode: vertical-rl; }\n\t\t.todo .drop-left-zone { left: 0; }\n\t\t.todo .drop-right-zone { right: 0; }\n\t\t.todo .has-drop-left .drop-left-zone, .todo .has-drop-right .drop-right-zone { opacity: 1; visibility: visible; }\n\n\t\t.todo .bar { padding-top: 12px; position: absolute; top: 0; bottom: 0; right: 0; left: 0; box-shadow: 0 0 10px rgba(0,0,0,0.125); text-align: left; transition: all 0.2s ease; }\n\t\t\t.todo .bar:before { position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; background: var(--color-stop-4); content: \"\"; }\n\t\t\t\t.todo .hover .bar:before { background: var(--color-stop-3); }\n\n\t\t\t.todo .drop-zone.hover .bar { transform: translateX(0); }\n\n\t\t\t.todo .bar-name { position: relative; font-weight: 500; line-height: 37px; text-transform: capitalize; transform: scale(0); transition: all 0.2s ease; }\n\t\t\t\t.todo .drop-zone.hover .bar-name { transform: scale(1); }\n\n\t\t\t.todo .left-bar { overflow: hidden; transform: translateX(-37px); }\n\t\t\t\t.todo .left-bar, .todo .left-bar:before { border-radius: 0 var(--border-radius) var(--border-radius) 0; }\n\t\t\t\t.todo .has-drop-left .left-bar { transform: translateX(-29px); }\n\n\t\t\t.todo .right-bar { overflow: hidden; transform: translateX(37px); }\n\t\t\t\t.todo .right-bar, .todo .right-bar:before  { border-radius: var(--border-radius) 0 0 var(--border-radius); }\n\t\t\t\t.todo .has-drop-right .right-bar { transform: translateX(29px); }\n\n\n.todo .dropdown-wrapper { position: relative; }\n\t.todo .dropdown { position: absolute; z-index: 10; }\n\t\t.todo .dropdown li { transition-duration: 0s; }\n\n\t\t.todo .dropdown .loading { margin: 2px 0; opacity: 0.7 !important; text-align: center; }\n\t\t\t.todo .dropdown .loading:hover { background: none; }\n\n\t\t/* 'Switch to...' submenu */\n\t\t.todo .dropdown.list-integrations { width: 220px; }\n\t\t\t.todo .list-integrations .dropdown-list-icon { opacity: 1; }\n\n\n.todo .icon-tick { height: 7px; width: 14px; fill: var(--color-icon); vertical-align: 6%; }\n\n\n/* Todo Header */\n.todo-header { --header-padding-top: 5px; min-height: var(--header-height); position: relative; z-index: 2; display: block; cursor: pointer !important; }\n\t.todo-header-row { height: var(--header-height); position: relative; flex-grow: 1; display: flex; }\n\n\t\t.todo .list-color { width: 5px; position: absolute; top: 11px; bottom: 3px; left: 0; display: inline; border-bottom-right-radius: 3px; border-top-right-radius: 3px; }\n\n\t\t.todo .provider-icon { height: 20px; padding-right: 9px; }\n\t\t\t.momentum-todo .provider-icon { display: none; }\n\t\t\t.todo-ClickUp .provider-icon { margin-top: 2px; }\n\t\t\t.todo-GitHub .provider-icon, .todo-Microsoft .provider-icon, .dropdown-list-icon.GitHub, .dropdown-list-icon.icon-GitHub, .provider-list li img.GitHub, .provider-logo.GitHub { filter: var(--filter-dark-brightness); }\n\n\t\t.todo .list-icon { position: relative; top: 2px; }\n\n\t\t/* Project Chooser */\n\t\t.todo .project-chooser { --left-margin: -8px; margin-right: calc(var(--app-padding) * -1); padding-left: var(--app-padding); z-index: 5; flex: 0 0 auto; display: flex; align-items: center; }\n\n\t\t\t.todo .project-chooser-toggle { height: var(--chooser-height); margin: 2px 5px 0 var(--left-margin); padding: 8px 5px 4px 7px; position: relative; display: inline-block; background: rgba(255,255,255,0); border-radius: var(--border-radius); cursor: pointer; }\n\t\t\t\t.todo .active .project-chooser-toggle { background: rgba(255,255,255,0.12); }\n\n\t\t\t\t.todo .project-chooser .icon-wrapper { padding: 0; display: block; }\n\t\t\t\t\t.todo .project-chooser .icon-wrapper:after { height: auto; width: auto; top: 0; right: 0; bottom: 0; left: 0; border-radius: var(--border-radius); }\n\n\t\t\t\t\t.todo .project-chooser .provider-icon { padding-right: 1px; }\n\n\t\t\t\t\t.todo .project-chooser .todo-menu-dropdown-icon { height: 16px; width: 17px; margin-left: 3px; display: inline-block; opacity: 0.5; cursor: pointer; fill: var(--color-icon); /* margin-right: 1px;*/ }\n\n\t\t\t\t\t\t.todo-provider-wrapper:hover .todo-menu-dropdown-icon { opacity: 0.8; }\n\n\t\t\t\t\t\t.project-chooser.active .todo-menu-dropdown-icon { opacity: 0.6; }\n\n\n\t\t\t.todo .project-chooser-dropdown { min-width: 230px; margin-top: 4px; margin-left: var(--left-margin); top: 100%; z-index: 100; transition: transform 0.15s ease; } /* <-- should generalize that transition/use variables */\n\n\t\t\t\t.todo .project-chooser-dropdown .dropdown-list { max-height: 209px; overflow: hidden; overflow-y: auto; }\n\t\t\t\t\t.todo .project-chooser-dropdown.short-list li:last-child { margin-bottom: 20px; }\n\t\t\t\t\t.todo .project-chooser-dropdown li:last-child { margin-bottom: 4px; }\n\n\t\t\t\t\t.todo-header .project-chooser-dropdown .dropdown-list.available-empty { height: 200px; }\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .available-empty li:last-child { margin-bottom: 20px; }\n\n\t\t\t\t\t.todo-header .project-chooser-dropdown li { padding-top: 5px; padding-bottom: 5px; }\n\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .provider-name { margin: 4px 0 -1px; opacity: 0.85; cursor: default; font-weight: 600; }\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .section-title { padding-top: 6px; padding-bottom: 4px; opacity: 0.5; cursor: default; font-size: 71.42857%; font-weight: 500; text-transform: uppercase; }\n\t\t\t\t\t\t\t.project-chooser-dropdown .provider-name:hover, .project-chooser-dropdown .section-title:hover { background: none !important; }\n\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .active-item.highlighted { background: var(--color-stop-1); }\n\n\t\t\t\t\t\t.todo-header .project-chooser-dropdown .loading-dropdown { opacity: 0.5; text-align: center; }\n\n\n\t\t/* Active List */\n\t\t.todo .active-list-container { min-width: 0; padding-top: var(--header-padding-top); padding-left: var(--app-padding); flex: 1 1 auto; display: inline-flex; align-items: center; transition: all 0.2s ease; /* min-width important, see comment below */ }\n\t\t\t/* Ensures todo dropdown ellipsis does not overflow flex container. See link for more info: https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size */\n\t\t\t.todo .active-list-name { font-size: 20px; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; white-space: nowrap; }\n\n\t\t\t\t.todo .active-list-name.no-caps { text-transform: none; }\n\n\t\t\t/* List Chooser w/ Folders */\t\t\t\n\t\t\t.todo-folders .dropdown { top: var(--header-height); left: var(--safe-zone-padding); }\n\t\t\t\t.todo-folders.active .dropdown { display: block; }\n\t\t\t\t\n\t\t\t\t.todo-folders .dropdown.nipple-top-left:after { left: 15px; }\n\t\t\t\t\n\t\t\t\t.todo-folders .dropdown .list-chooser { max-height: 650px; overflow: auto; }\n\t\n\t\t\t/* List Chooser */\n\t\t\t.todo .list-chooser-toggle { margin: 0 6px; padding: 0; }\n\t\t\t\t.todo .list-chooser-toggle:after { --icon-wrapper-size: 22px; }\n\t\t\t\t\t.todo .list-chooser-toggle .icon { --icon-size: 10px; min-width: 0; margin-top: 2px; }\n\n\t\t\t/* Putting the positioning on this element because the JS is a mess. Ideally we'd just have .list-chooser at the same level as .dropdown */\n\t\t\t.todo .active-list-container .dropdown { top: var(--header-height); }\n\n\t\t\t.todo .list-chooser { }\n\t\t\t\t.todo .list-chooser.nipple-top-left:after { left: 28px; }\n\t\t\t\t.todo .list-chooser li { --padding-v: 7px; --padding-h: 16px; min-width: 240px; padding: var(--padding-v) var(--padding-h); position: relative; font-size: 0.9375rem; line-height: normal; white-space: nowrap; }\n\n\t\t\t\t\t.todo .list-chooser li:hover { background: var(--hover-bg); }\n\n\t\t\t\t\t.todo .list-chooser .todo-list-section { padding-left: 38px; }\n\n\t\t\t\t\t.todo .list-chooser .list-color { width: 4px; top: 4px; bottom: 2px; }\n\n\t\t\t\t\t.todo .list-chooser .list-name { opacity: 0.7; line-height: 1.2; white-space: initial; } /* If the vertical alignment breaks, we might need to specify display: inline and vertical-align: baseline. For now, it's inherited from defaults. */\n\t\t\t\t\t\t.todo .todo-list-choice-active .list-name { opacity: 1; font-weight: 500; }\n\n\t\t\t\t\t.todo  .list-chooser .todo-count { margin-left: 3px; opacity: 0.45; font-size: 93.33333%; }\n\n\n\t\t\t\t.todo .list-chooser .todo-list-add-row { max-width: none !important; padding: 0 !important; list-style: none; }\n\t\t\t\t\t.todo .list-chooser .todo-list-add-row li { padding: 0; }\n\n\t\t\t\t\t.todo .todo-list-add-input, .todo-list-add-loading { padding: var(--padding-v) var(--padding-h); line-height: normal; }\n\t\t\t\t\t.todo .todo-list-add-input { width: 100%; opacity: 0.7; border-bottom: none; cursor: pointer; }\n\t\t\t\t\t\t.todo .input-mode .todo-list-add-input { cursor: text; }\n\t\t\t\t\t.todo .todo-list-add-icon { position: absolute; top: var(--padding-v); left: calc(var(--padding-h) - 1px); opacity: 0.7; }\n\t\t\t\t\t\t.todo .todo-list-add-icon .icon-plus { opacity: 0.6375; font-size: 14px; }\n\n\t\t\t\t\t.todo-list-add-row .upsell-row { padding: 5px 16px !important; display: flex; align-items: center; }\n\t\t\t\t\t\t.todo-list-add-row .upsell-row .copy { opacity: 0.5; font-size: 0.875rem; }\n\t\t\t\t\t\t.todo-list-add-row .upsell-row .badge { margin-top: 1px; margin-left: 8px; }\n\n\t\t\t\t\t\t\n\t\t\t\t\t/* Expandable version */\n\t\t\t\t\t.todo-folder { }\t\t\t\t\t\n\t\t\t\t\t\t.todo-folder .icon-folder { --icon-size: 14px; margin-right: 4px; opacity: 0.4; vertical-align: -9%; }\n\n\t\t\t\t\t\t.todo-folder .icon-tick { margin-left: -1px; opacity: 0.5; transform: rotate(-90deg); vertical-align: 8%; }\n\t\t\t\t\t\t\t.todo-folder.active .icon-tick { -webkit-backface-visibility: hidden; transform: rotate(0); }\n\t\t\t\t\t\t\n\t\t\t\t\t\t.todo-folder .todo-list-section { display: none; }\n\t\t\t\t\t\t\t.todo-folder.active .todo-list-section { display: block; }\n\t\t\t\t\t\t\t\n\n\t\t\t/* ••• Dropdown */\n\t\t\t.todo-header-controls { flex: 0 0 auto; display: flex; }\n\n\t\t\t\t.todo-header .more { height: 100%; position: static; }\n\n\t\t\t\t\t.todo-header .more-toggle, .todo-header .mobile-close { padding: var(--header-padding-top) calc(var(--app-padding) - 3px) 0 5px !important; position: relative; }\n\n\t\t\t\t\t.todo-header .mobile-close { margin-left: 0px; }\n\n\t\t\t\t\t.todo-actions-dropdown { min-width: auto; margin-top: -6px; right: calc(var(--app-padding) - 7px); bottom: auto; }\n\t\t\t\t\t\t.todo-header .dropdown .header { border-bottom: 1px solid var(--color-stop-1); }\n\n\t\t\t\t\t\t.todo .icon-external { opacity: 0.35; }\n\t\t\t\t\t\t.todo .icon-autofocus { --icon-size: 9px; }\n\t\t\t\t\t\t.todo .icon-assigned { --icon-size: 14px; }\n\t\t\t\t\t\t.todo .icon-clear { --icon-size: 14px; stroke: var(--color-icon); }\n\t\t\t\t\t\t.todo .icon-move-to-today { --icon-size: 16px; margin-left: -3px; }\n\t\t\t\t\t\t\t.todo .icon-move-to-today #icon-path-one { fill: var(--color-icon); }\n\t\t\t\t\t\t\t.todo .icon-move-to-today #icon-path-two { stroke: var(--color-icon); }\n\n\n\t\t\t.todo-provider-loading.dropdown-detail { bottom: 0; }\n\t\t\t.todo-provider-loading .loading { height: 100%; margin: 0 !important; padding: 0 !important; display: flex; align-items: center; justify-content: center; }\n\n\n/* Todo Body */\n.todo-list-wrapper { height: 100%; width: 100%; position: relative; z-index: 1; overflow: hidden; transition: max-height 0.3s ease, min-height 0.3s ease, padding 0.3s ease; }\n.todo.has-message .todo-list-wrapper { padding-top: 1rem; }\n/* max-height and min-height transition durations must be the same or the transition will cut out ^ */\n\n\t.todo-list { width: 100%; overflow-x: hidden; overflow-y: auto; transition: opacity 0.2s eas; /* min-height: 213px; */ }\n\t\t.todo-list.animating::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0) !important; }\n\t\t.todo-list.dragging { }\n\t\t.todo-list.drop-top-margin { margin-top: -52px; }\n\t\t.todo-list.hide-scroll { overflow-y: hidden; }\n\t\t.todo-list.drop-area { padding: 10px 0; }\n\t\t.todo-list .placeholder { padding: 0; }\n\n\t\t.todo-item { position: relative; display: none; opacity: 0; font-size: 1rem; line-height: 1.1875; visibility: hidden; /* line-height: 19px */ }\n\t\t\t/* Linux incompatibility fix from display: block */\n\t\t\t.todo-item.visible { width: 100%; display: inline-block; opacity: 1; visibility: visible; }\n\t\t\t.todo-item.hidden { display: none; }\n\t\t\t.todo-item.transition { transition: visibility 0s, opacity 0.4s ease, margin-top 0.4s ease; }\n\t\t\t.todo-item.drop-area { padding: 8px 0; }\n\t\t\t.todo-item.active { background-color: var(--color-stop-1); }\n\n\t\t\t.todo-item label { padding-right: 8px; padding-left: var(--app-padding); position: relative; top: 1px; z-index: 10; display: flex; opacity: 1; font-size: 1rem; }\n\t\t\t\t.touch .todo-item label { top: 2px; }\n\t\t\t.todo-item input { width: auto; }\n\n\t\t\t.todo-item-wrapper { padding: 3px 0 2px; display: flex; align-items: baseline; }\n\n\t\t\t\t.todo-item-title { min-width: 0; flex: 1 1 auto; display: block; cursor: default; outline: none; word-wrap: break-word; }\n\t\t\t\t\t.editing > .todo-item-wrapper .todo-item-title { opacity: 0.7; outline: none; -webkit-user-select: text; user-select: text; }\n\t\t\t\t\t.done > .todo-item-wrapper .todo-item-title { opacity: 0.5; text-decoration: line-through; }\n\t\t\t\t\t.done-list .todo-item-title { opacity: 0.6; text-decoration: none; }\n\t\t\t\t\t.todo-item-title:empty:before { content: \"!\"; visibility: hidden; }\n\n\t\t\t.todo-item .more { position: static; }\n\t\t\t\t.todo-item .more-toggle { margin: -3px 0; padding: 0 calc(var(--app-padding) - 1px) 0 8px; z-index: 2; }\n\t\t\t\t\t.todo-item-wrapper:hover .more-toggle { opacity: 0.525; } /* wrapper needed for nested todo hovers */\n\n\t\t\t\t.editing .more { opacity: 0; } /* <-- Check if needed */\n\n\t\t\t\t.todo-item-dropdown { top: 20px; right: calc(var(--app-padding) - 5px); bottom: auto; }\n\t\t\t\t\t.todo-item-dropdown li { }\n\t\t\t\t\t\t.todo-item-dropdown .list-color { width: 4px; margin: 0; top: 3px; bottom: 2px; }\n\n\t\t\t\t\t.todo-item .icon-wrapper:after { --icon-wrapper-size: 23px; }\n\n\t\t\t\t\t.todo-item .icon-ellipsis { padding-top: 1px; }\n\n\t\t\t\t\t.todo-item-wrapper:hover .icon-wrapper, .todo-item .active .icon-wrapper { opacity: 1; }\n\n\t\t\t\t.todo-item-active > .todo-item-wrapper { display: block; background-color: var(--color-stop-1); box-shadow: 0 0 0px 2px var(--color-stop-1); }\n\n\t\t\t\t.todo-item .control { height: 12px; width: 12px; position: absolute; right: 0; border-radius: 100%; cursor: pointer; line-height: 12px; text-align: center; }\n\n\t\t\t\t.todo-item .loading-icon, .todo-item .error-icon { position: absolute; top: 6px; display: none; }\n\t\t\t\t\t.todo-item .loading > .todo-item-wrapper .loading-icon, .todo-item .failed > .todo-item-wrapper .error-icon { display: inline-block; }\n\n\t\t\t\t\t.todo-item .loading .destroy, .todo-item .failed .destroy { display: none; }\t/* retaining .destroy for now while we have the old todo list active too */\n\t\t\t\t\t.todo-item .loading .more, .todo-item .failed .more { display: none; }\n\n\t\t\t\t\t.todo-item .loading-icon { height: 10px; width: 10px; right: 6px; border-width: 1px; }\n\n\t\t\t\t\t.todo-item .error-icon { top: 4px; right: 13px; }\n\n\n\t\t.todo-section { margin: 0; padding: 12px var(--app-padding) 6px; opacity: 0.75; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }\n\t\t\t.todo-list .todo-section:first-child { padding-top: 5px; }\n\n\t\t\t.todo-section-collapsible { cursor: pointer; }\n\t\t\t\t.todo-section-collapsible:hover, .todo-section-collapsible:active { opacity: 1; }\n\n\t\t\t.todo-section .icon-tick { margin-left: 1px; opacity: 0.5; }\n\t\t\t\t.todo-section-collapsed .icon-tick { -webkit-backface-visibility: hidden; transform: rotate(-90deg); }\n\t\t\t\t.todo-section-collapsible:hover .icon-tick { opacity: 0.85; }\n\n\t\t.todo-subsection { cursor: default; }\n\t\t\t.todo-subsection .todo-item-checkbox { display: none; }\n\t\t\t.todo-subsection .todo-item-title { margin-left: 16px; margin-bottom: -2px; opacity: 0.7; font-size: 13px; }\n\n\t\t.todo-load-more { padding: 8px var(--app-padding) 4px; text-align: center; }\n\t\t\t.todo-load-more .todo-load-more-button, .todo-load-more .todo-load-more-button { padding: 7px 21px; border-radius: 100px; font-size: 12px; transition: opacity 0.2s ease !important; }\n\n\t\t\t.todo-load-more .loading { height: 28px; position: relative; display: block; line-height: 25px; }\n\t\t\t\t.todo-load-more .loading .loading-icon { margin-right: 6px; position: relative; top: -2px; right: auto; left: 2px; }\n\t\t\t\t.todo-load-more .loading .loading-title { opacity: 0.9; font-size: 12px; }\n\n\t\t\t.todo-load-more .todo-load-more-done { height: 28px; opacity: 0.9; font-size: 12px; line-height: 25px; transition: opacity 0.2s ease !important; }\n\n\t\t.todo-list .info { margin-bottom: 8px; padding: 5px 15px; position: relative; background: #333; color: #ccc; }\n\t\t\t.todo-list .info-hide { height: 29px; width: 29px; min-width: 0; padding: 0 !important; position: absolute; top: 0; right: 0; opacity: .5; font-size: 70%; line-height: 29px; text-align: center; }\n\t\t\t.todo-list .info-title { margin: 0 0 1px; font-size: 90%; }\n\t\t\t.todo-list .info-description { margin: 0; opacity: 0.5; font-size: 85%; line-height: 120%; }\n\t\t\t.todo-list .info-action { margin: -3px -15px -5px; padding: 5px 15px !important; opacity: 0.8; font-size: 80%; }\n\n\t\t\t.todo .empty .empty-title { padding: 0; opacity: 0.7; cursor: default; }\n\n\t\t\t.todo .empty .empty-link { display: inline-block; cursor: pointer; transition: opacity 0.3s ease; }\n\t\t\t\t.todo .empty-link .icon { margin-left: 3px; font-size: 16px; line-height: 1; vertical-align: -5%; }\n\t\t\t\t.todo-list .empty .empty-link:hover { opacity: 0.8; }\n\t\t\t.todo-list .empty .new-todo-button { transition: opacity 0.3s ease; }\n\n\t\t.todo-item ol { margin-left: 18px; } /* for nested todos */\n\n.todo-upsell { min-height: 180px; }\n\n/* Todo Footer */\n.todo .footer-input { position: static; display: flex; align-items: center; justify-content: space-between; }\n\n.todo .is-empty .todo-app { overflow: hidden; }\n.todo .is-empty .todo-new { position: absolute; bottom: 0; }\n.todo .is-empty .todo-list { visibility: hidden; }\n.todo .is-empty .empty { display: flex; }\n\n@media screen and (max-width: 450px) {\n\t.todo .todo-header { --header-padding-top: 2px; display: flex; }\n\t\t.todo-actions-dropdown { right: 52px; }\n}\n",
        ""
      ]);
      const r = a;
    },
    13003: (t, o, i) => {
      var e = i(57158);
      e.__esModule && (e = e.default),
        "string" == typeof e && (e = [[t.id, e, ""]]),
        e.locals && (t.exports = e.locals),
        (0, i(45346).Z)("6606fa7f", e, !1, { ssrId: !0 });
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
    }
  }
]);
