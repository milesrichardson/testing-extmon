(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [7896],
  {
    54285: (t, i, e) => {
      "use strict";
      e.r(i), e.d(i, { default: () => o });
      var a = e(8081),
        n = e.n(a),
        r = e(23645),
        c = e.n(r)()(n());
      c.push([
        t.id,
        "\n/* stylelint-disable */\n.list-row[data-v-bb4049c2] { margin: 0 -8px 2px; padding: 4px 8px 5px; display: flex; flex-direction: column; border-radius: var(--border-radius);\n}\n.list-row[data-v-bb4049c2]:hover { background-color: var(--color-stop-1);\n}\n.list-row.active[data-v-bb4049c2] { background-color: var(--color-stop-2);\n}\n.list-row.clickable[data-v-bb4049c2] { cursor: pointer;\n}\n.list-row[data-v-bb4049c2]:last-child { margin-bottom: 0;\n}\n.title-container[data-v-bb4049c2] { display: flex; justify-content: space-between;\n}\n.metric-stat[data-v-bb4049c2] { min-width: 0; padding-top: 1px; flex: 0 1 auto; font-size: 1.4375rem; line-height: 1.2; word-break: break-word;\n}\n.list-icons[data-v-bb4049c2] { position: static; flex: 0 0 auto; display: flex; align-items: center;\n}\n.icon-wrapper[data-v-bb4049c2] { padding: 0 3px; opacity: 0;\n}\n.icon-wrapper.active[data-v-bb4049c2] { opacity: 1;\n}\n.list-row:hover .icon-wrapper[data-v-bb4049c2], .touch .icon-wrapper[data-v-bb4049c2] { opacity: 1;\n}\n.icon-wrapper[data-v-bb4049c2]:hover:after { background: none !important;\n}\n.active .icon-wrapper .icon[data-v-bb4049c2] { opacity: 0.5 !important;\n} /* Override general active icon setting */\n.icon-wrapper:hover .icon[data-v-bb4049c2] { opacity: 0.8 !important;\n}\n.icon-wrapper:hover:active .icon[data-v-bb4049c2], .icon-wrapper.active .icon[data-v-bb4049c2] { opacity: 1 !important;\n}\n.icon-lock-wrapper[data-v-bb4049c2] { cursor: default;\n}\n.icon-lock-wrapper[data-v-bb4049c2]:hover:after { background: transparent !important;\n}\n.label-container[data-v-bb4049c2] {\n}\n.metric-label[data-v-bb4049c2] { justify-content: flex-start;\n}\n.metric-label-name[data-v-bb4049c2] { word-break: break-word;\n}\n.metric-label .icon-alert[data-v-bb4049c2] { height: 12px; margin-right: 4px; fill: red;\n}\n",
        ""
      ]);
      const o = c;
    },
    97896: (t, i, e) => {
      "use strict";
      e.r(i), e.d(i, { default: () => o });
      var a = function () {
        var t = this,
          i = t._self._c;
        return i(
          "li",
          {
            key: t.item.id,
            staticClass: "list-row",
            class: { active: t.item.active, clickable: t.item.externalUrl },
            attrs: { "data-test": "list-row", title: t.item.tooltip },
            on: { click: t.onRowClick }
          },
          [
            i("div", { staticClass: "title-container" }, [
              i("div", { staticClass: "metric-stat" }, [t._v(t._s(t.displayValue))]),
              t._v(" "),
              i(
                "div",
                { staticClass: "list-icons", attrs: { "data-test": "list-icon" } },
                [
                  t.item.readOnly
                    ? i(
                        "div",
                        { staticClass: "icon-wrapper icon-lock-wrapper", attrs: { title: "Admin Locked" } },
                        [i("inline-svg", { staticClass: "icon icon-lock", attrs: { src: e(94784) } })],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.item.archived
                    ? i(
                        "div",
                        {
                          staticClass: "icon-wrapper unarchive",
                          attrs: { title: "Unarchive", "data-test": "list-row-unarchive" },
                          on: {
                            click: function (i) {
                              return i.stopPropagation(), t.unarchive.apply(null, arguments);
                            }
                          }
                        },
                        [i("inline-svg", { staticClass: "icon icon-unarchive", attrs: { src: e(84595) } })],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.item.shouldDisplayQuickAdjust
                    ? i("metric-adjust", { attrs: { item: t.item, collection: t.viewManager.collection, location: "app" } })
                    : t._e(),
                  t._v(" "),
                  t.item.readOnly
                    ? t._e()
                    : i(
                        "div",
                        {
                          staticClass: "icon-wrapper edit",
                          attrs: { title: "Edit", "data-test": "edit" },
                          on: {
                            click: function (i) {
                              return i.stopPropagation(), t.edit.apply(null, arguments);
                            }
                          }
                        },
                        [i("inline-svg", { staticClass: "icon icon-gear toggle-icon", attrs: { src: e(66262) } })],
                        1
                      ),
                  t._v(" "),
                  !t.item.readOnly || t.item.pinned
                    ? i(
                        "div",
                        {
                          staticClass: "icon-wrapper pin",
                          class: { active: t.item.pinned, "u--no-pointer-events": t.item.readOnly },
                          attrs: { title: t.item.pinned ? "Unpin" : "Pin" },
                          on: {
                            click: function (i) {
                              return i.stopPropagation(), t.togglePinned.apply(null, arguments);
                            }
                          }
                        },
                        [i("inline-svg", { staticClass: "icon icon-pin", attrs: { src: e(25301) } })],
                        1
                      )
                    : t._e()
                ],
                1
              )
            ]),
            t._v(" "),
            i(
              "div",
              {
                staticClass: "metric-label",
                class: { "u--pointer": t.item.authNeeded },
                on: {
                  click: function (i) {
                    return i.stopPropagation(), t.onLabelClick.apply(null, arguments);
                  }
                }
              },
              [
                t.item.authNeeded ? i("inline-svg", { staticClass: "icon icon-alert", attrs: { src: e(63741) } }) : t._e(),
                t._v(" "),
                i("div", { staticClass: "metric-label-name" }, [t._v(t._s(t.item.name))])
              ],
              1
            )
          ]
        );
      };
      a._withStripped = !0;
      var n = e(2445),
        r = e(24960);
      const c = {
        name: "MetricRow",
        components: { MetricAdjust: n.Z },
        props: { viewManager: { type: Object, required: !0 }, item: { type: Object, required: !0 } },
        computed: {
          displayValue() {
            return this.item.displayValue ?? this.item.value;
          }
        },
        methods: {
          edit() {
            this.item.isTeam && !this.item.readOnly
              ? this.openItemOnTeamSite()
              : (this.viewManager.setItem(this.item.id), this.viewManager.showView("edit"));
          },
          unarchive() {
            this.viewManager.collection.unarchive(this.item);
          },
          togglePinned() {
            this.item.isTeam ? this.openItemOnTeamSite() : this.viewManager.collection.togglePinned(this.item);
          },
          onLabelClick() {
            this.item.authNeeded &&
              (this.item.isTeam ? this.openItemOnTeamSite() : this.viewManager.collection.connectProvider(this.item.providerId));
          },
          onRowClick() {
            this.item.externalUrl && window.open(this.item.externalUrl);
          },
          openItemOnTeamSite() {
            r.Z.sendMessage({ handler: "getSid", args: [this.item.id] }).then((t) => {
              t.toUpperCase().startsWith("T") && (t = t.substr(1)),
                m.commandManager.execute("window.account.open", `/team/${this.viewManager.collection.type}?id=${t}`);
            });
          }
        }
      };
      e(66885);
      const o = (0, e(51900).Z)(c, a, [], !1, null, "bb4049c2", null).exports;
    },
    66885: (t, i, e) => {
      var a = e(54285);
      a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[t.id, a, ""]]),
        a.locals && (t.exports = a.locals),
        (0, e(45346).Z)("0de8b012", a, !1, { ssrId: !0 });
    }
  }
]);
