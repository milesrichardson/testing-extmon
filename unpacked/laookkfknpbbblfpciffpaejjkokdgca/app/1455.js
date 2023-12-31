(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1455, 9437],
  {
    99437: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => p });
      var s = o(20144),
        i = o(88026),
        a = o(51726),
        r = o.n(a),
        n = o(34952),
        d = o(7838),
        l = o(35174);
      let c = {};
      const k = {
        bind: function (t, e) {
          m.utils.isTouchDevice() &&
            ((t.dataset.justBoundMobileClickHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundMobileClickHandler = !1;
            }, 100),
            (t.dataset.mobileClickHandlerId = Math.random().toString(36).substring(7)),
            (c[t.dataset.mobileClickHandlerId] = e.value),
            t.addEventListener("click", e.value));
        },
        unbind: function (t) {
          m.utils.isTouchDevice() &&
            (t.removeEventListener("click", c[t.dataset.mobileClickHandlerId]),
            delete c[t.dataset.mobileClickHandlerId],
            delete t.dataset.mobileClickHandlerId,
            delete t.dataset.justBoundMobileClickHandler);
        }
      };
      var h = o(28692),
        b = o(64398),
        u = o(77197);
      s.ZP.use(i.Z, { name: "unreactive" }),
        s.ZP.use(r()),
        s.ZP.use(n.InlineSvgPlugin),
        s.ZP.use(h.og),
        s.ZP.use(u.Z),
        (s.ZP.prototype.$xhr = l.Z),
        (s.ZP.prototype.$e = d.Z),
        s.ZP.directive("mobile-click", k),
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
          pinia: b.Z
        });
      const p = s.ZP;
    },
    81735: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => s });
      const s = {
        favicon: (t) => (m.utils.isChrome() ? `chrome://favicon/size/16@2x/${t}` : m.utils.getFavIcon(t)),
        open(t) {
          m.models.bookmarksSettings.get("openInNewTab") && m.utils.getBrowser().tabs
            ? m.utils.getBrowser().tabs.create({ url: t, active: !1 })
            : m.utils.getBrowser().tabs.update({ url: t }),
            m.utils.getBrowser().tabs ||
              (m.models.bookmarksSettings.get("openInNewTab") ? window.open(t, "_blank") : window.open(t, "_self"));
        },
        openInNewTab(t) {
          m.utils.getBrowser().tabs ? m.utils.getBrowser().tabs.create({ url: t, active: !1 }) : window.open(t, "_blank");
        }
      };
    },
    41455: (t, e, o) => {
      "use strict";
      o.r(e);
      var s = o(99437),
        i = function () {
          var t = this,
            e = t._self._c;
          return e("transition", { attrs: { name: "slide", appear: t.$options.enabling }, on: { enter: t.isWithinView } }, [
            t.showBookmarks
              ? e("div", { staticClass: "app-container bookmarks", attrs: { id: "bookmarks-vue", "data-test": "bookmarks" } }, [
                  e(
                    "ul",
                    {
                      staticClass: "bookmarks-list",
                      class: { "most-visited": t.currentTabDefaultMostVisited, "icons-only": t.settings.iconsOnly }
                    },
                    t._l(t.bookmarks, function (o, s) {
                      return e(
                        "li",
                        {
                          key: o.id,
                          ref: "bookmark",
                          refInFor: !0,
                          staticClass: "bookmarks-item",
                          class: { overflow: "overflow________" === o.id, back: o.back },
                          attrs: { id: o.id, "data-test": "bookmark" }
                        },
                        [
                          o.children
                            ? e("bookmark-folder", {
                                ref: "overflow________" === o.id ? "overflow" : "",
                                refInFor: !0,
                                attrs: { bookmark: o, "show-icons-only": t.settings.iconsOnly, index: s }
                              })
                            : e("bookmark", {
                                attrs: { bookmark: o, "show-icons-only": t.settings.iconsOnly },
                                on: { closeMostVisited: t.closeMostVisited }
                              })
                        ],
                        1
                      );
                    }),
                    0
                  )
                ])
              : t._e()
          ]);
        };
      i._withStripped = !0;
      var a = function () {
        var t = this,
          e = t._self._c;
        return e(
          "a",
          {
            staticClass: "bookmark",
            class: { local: t.bookmark.local },
            attrs: { draggable: "false", title: t.bookmark.title },
            on: {
              click: [
                function (e) {
                  return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.open.apply(null, arguments);
                },
                function (e) {
                  return e.metaKey ? t.openInNewTab.apply(null, arguments) : null;
                }
              ],
              mouseup: function (e) {
                return ("button" in e && 1 !== e.button) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
                  ? null
                  : t.openInNewTab.apply(null, arguments);
              }
            }
          },
          [
            e("span", { staticClass: "bookmark-icon-wrapper" }, [
              t.bookmark.back
                ? e(
                    "span",
                    { staticClass: "icon-back-wrapper" },
                    [e("inline-svg", { staticClass: "bookmark-icon icon-back bookmark-child-icon", attrs: { src: o(97510) } })],
                    1
                  )
                : t.bookmark.img
                ? e("img", { staticClass: "bookmark-icon bookmark-img", attrs: { draggable: "false", src: t.bookmark.img } })
                : e("img", { staticClass: "bookmark-icon", attrs: { draggable: "false", src: t.favicon(t.bookmark.url) } })
            ]),
            t._v(" "),
            t.bookmark.title && !t.showIconsOnly ? e("span", { staticClass: "bookmark-label" }, [t._v(t._s(t.bookmark.title))]) : t._e()
          ]
        );
      };
      a._withStripped = !0;
      var r = o(81735);
      const n = new (o(81405).ZP)({ feature: "bookmarks" }),
        d = {
          name: "Bookmark",
          props: { bookmark: { type: Object, default: () => ({}) }, showIconsOnly: Boolean },
          methods: {
            favicon: (t) => r.Z.favicon(t),
            open() {
              if (this.bookmark.back) return this.$emit("closeMostVisited");
              this.captureEvent(), r.Z.open(this.bookmark.url);
            },
            openInNewTab() {
              this.bookmark.back || (this.captureEvent(), r.Z.openInNewTab(this.bookmark.url));
            },
            captureEvent() {
              this.bookmark.analyticsId ? n.capture(`${this.bookmark.analyticsId} click`) : n.batchCapture("bookmark click");
            }
          }
        };
      o(44068);
      var l = o(51900);
      const c = (0, l.Z)(d, a, [], !1, null, "29a4e658", null).exports;
      var k = function () {
        var t = this,
          e = t._self._c;
        return e(
          "span",
          {
            directives: [{ name: "click-outside", rawName: "v-click-outside", value: t.closeFolder, expression: "closeFolder" }],
            staticClass: "bookmark folder",
            class: { "shift-to-left": t.shiftToLeft || t.isOverflow, "icon-only": t.showIconsOnly, active: t.showChildren },
            attrs: { draggable: "false", title: t.bookmark.title, "data-test": "folder" },
            on: {
              click: function (e) {
                return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.toggleFolder.apply(null, arguments);
              }
            }
          },
          [
            e(
              "div",
              {
                staticClass: "folder-wrapper",
                on: {
                  click: function (e) {
                    return e.metaKey ? t.openInNewTab(t.bookmark) : null;
                  },
                  mouseup: function (e) {
                    return ("button" in e && 1 !== e.button) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
                      ? null
                      : t.openInNewTab(t.bookmark);
                  }
                }
              },
              [
                t.isOverflow
                  ? [e("inline-svg", { staticClass: "icon icon-ellipsis more-icon", attrs: { draggable: "false", src: o(49710) } })]
                  : [
                      t.showIconsOnly && t.bookmark.title
                        ? e("span", { staticClass: "folder-icon-label bookmark-child-icon", attrs: { "data-test": "folder-icon-label" } }, [
                            t._v(t._s(t.bookmark.title[0]))
                          ])
                        : t._e(),
                      t._v(" "),
                      e("inline-svg", {
                        staticClass: "bookmark-icon icon-folder bookmark-child-icon",
                        attrs: { draggable: "false", src: o(9021) }
                      }),
                      t._v(" "),
                      t.showIconsOnly ? t._e() : e("span", { staticClass: "bookmark-label" }, [t._v(t._s(t.bookmark.title))])
                    ]
              ],
              2
            ),
            t._v(" "),
            t.showChildren
              ? e(
                  "div",
                  {
                    ref: "folderDropdown",
                    staticClass: "app dropdown more-dropdown dash-dropdown folder-dropdown nipple nipple-top-left",
                    attrs: { "data-test": "folder-dropdown" }
                  },
                  [
                    e("div", { staticClass: "dropdown-wrapper" }, [
                      e(
                        "ul",
                        { staticClass: "dropdown-list" },
                        [
                          t.showBack
                            ? e("li", { staticClass: "dropdown-item back-item", attrs: { "data-test": "folder-back" } }, [
                                e("a", { staticClass: "bookmark bookmark-child", on: { click: t.goBack } }, [
                                  e(
                                    "span",
                                    { staticClass: "icon-back-wrapper" },
                                    [
                                      e("inline-svg", {
                                        staticClass: "bookmark-icon icon-back bookmark-child-icon",
                                        attrs: { src: o(97510) }
                                      })
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e("span", { staticClass: "bookmark-label" }, [t._v("Back")])
                                ])
                              ])
                            : t._e(),
                          t._v(" "),
                          t._l(t.children, function (s) {
                            return e(
                              "li",
                              {
                                key: s.id,
                                staticClass: "dropdown-item",
                                attrs: { "data-test": "folder-bookmark" },
                                on: {
                                  click: [
                                    function (e) {
                                      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return null;
                                      s.children ? t.openSubFolder(e, s.id) : t.open(s);
                                    },
                                    function (e) {
                                      return e.metaKey ? t.openInNewTab(s) : null;
                                    }
                                  ],
                                  mouseup: function (e) {
                                    return ("button" in e && 1 !== e.button) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
                                      ? null
                                      : t.openInNewTab(s);
                                  }
                                }
                              },
                              [
                                e(
                                  "a",
                                  {
                                    staticClass: "bookmark bookmark-child",
                                    class: { local: s.local },
                                    attrs: { draggable: "false", title: s.title }
                                  },
                                  [
                                    s.children
                                      ? e(
                                          "div",
                                          { staticClass: "folder-wrapper bookmark-child" },
                                          [
                                            e("inline-svg", {
                                              staticClass: "bookmark-icon icon-folder bookmark-child-icon",
                                              attrs: { draggable: "false", src: o(9021) }
                                            })
                                          ],
                                          1
                                        )
                                      : e("span", { staticClass: "bookmark-icon-wrapper" }, [
                                          e("img", {
                                            staticClass: "bookmark-icon bookmark-child-icon",
                                            attrs: { draggable: "false", src: t.favicon(s.url) }
                                          })
                                        ]),
                                    t._v(" "),
                                    e("span", { staticClass: "bookmark-label", attrs: { "data-test": "nested-folder-label" } }, [
                                      t._v(t._s(s.title))
                                    ])
                                  ]
                                )
                              ]
                            );
                          }),
                          t._v(" "),
                          t.children.length
                            ? t._e()
                            : e("li", { staticClass: "dropdown-item folder-empty", attrs: { "data-test": "folder-bookmark" } }, [t._m(0)])
                        ],
                        2
                      )
                    ])
                  ]
                )
              : t._e()
          ]
        );
      };
      k._withStripped = !0;
      const h = {
        name: "BookmarkFolder",
        directives: { ClickOutside: o(40063).Z },
        props: { bookmark: { type: Object, default: () => ({}) }, showIconsOnly: Boolean, index: { type: Number, default: 0 } },
        data: () => ({ showChildren: !1, shiftToLeft: !1, path: [] }),
        computed: {
          children() {
            let t = this.bookmark;
            return (
              this.path.forEach((e) => {
                t = t.children.find((t) => t.id === e);
              }),
              t.children
            );
          },
          showBack() {
            return !!this.path.length;
          },
          isOverflow() {
            return "overflow________" === this.bookmark.id;
          }
        },
        created() {
          m.on("globalEvent:esc", this.handleEsc);
        },
        destroyed() {
          m.off("globalEvent:esc", this.handleEsc);
        },
        methods: {
          handleEsc() {
            this.showBack ? this.goBack() : this.closeFolder();
          },
          closeFolder() {
            (this.path = []), (this.showChildren = !1);
          },
          toggleFolder(t) {
            (this.$refs.folderDropdown && this.$refs.folderDropdown.contains(t.target)) ||
              ((this.showChildren = !this.showChildren),
              (this.shiftToLeft = !1),
              this.showChildren ? this.$nextTick(this.checkFolderIsNotOutsideOfView) : (this.path = []));
          },
          openSubFolder(t, e) {
            t.preventDefault(), t.stopPropagation(), this.path.push(e);
          },
          goBack(t) {
            t && (t.preventDefault(), t.stopPropagation()), this.path.splice(-1, 1);
          },
          checkFolderIsNotOutsideOfView() {
            const t = this.$refs.folderDropdown;
            if (!t) return;
            const e = t.getBoundingClientRect();
            this.shiftToLeft = !(e.top >= 0 && e.left >= 0 && e.right <= window.innerWidth);
          },
          favicon: (t) => r.Z.favicon(t),
          open(t) {
            r.Z.open(t.url);
          },
          openInNewTab(t) {
            this.isOverflow ||
              (t.children
                ? t.children.forEach((t) => {
                    t.children || r.Z.openInNewTab(t.url);
                  })
                : r.Z.openInNewTab(t.url));
          }
        }
      };
      o(15342);
      const b = (0, l.Z)(
          h,
          k,
          [
            function () {
              var t = this._self._c;
              return t("a", { staticClass: "bookmark bookmark-child", attrs: { title: "This folder is empty." } }, [
                t("span", { staticClass: "bookmark-label" }, [this._v("(empty)")])
              ]);
            }
          ],
          !1,
          null,
          "09382cdd",
          null
        ).exports,
        u = {
          name: "Bookmarks",
          enabling: o(96046).Z.appsReady,
          components: { Bookmark: c, BookmarkFolder: b },
          bb: () => ({ settings: m.models.bookmarksSettings }),
          data: () => ({
            showBookmarks: m.models.customization.get("bookmarksVisible"),
            bookmarksMenu: [],
            bookmarksFetched: !1,
            originalbookmarks: [],
            bookmarks: [],
            topSites: [],
            originalTopSites: [],
            otherBookmarks: [],
            overflowBookmarks: [],
            currentTabDefaultMostVisited: !1
          }),
          computed: {
            isChromiumAndNotTopSites() {
              return m.utils.isChromium() && !this.currentTabDefaultMostVisited;
            },
            showChromeTab() {
              return this.settings && "bookmarks" === this.settings.chromeTabLocation;
            },
            containsMostVisited() {
              return this.bookmarks && -1 !== this.bookmarks.findIndex((t) => t.id === this.mostVisitedId);
            },
            containsOthers() {
              return this.bookmarks && -1 !== this.bookmarks.findIndex((t) => t.id === this.otherId);
            },
            containsOverflow() {
              return this.bookmarks && -1 !== this.bookmarks.findIndex((t) => t.id === this.overflowId);
            },
            containChromeTab() {
              return this.bookmarks && -1 !== this.bookmarks.findIndex((t) => t.url === this.chromeTabUrl);
            },
            containsChromeBookmarksManager() {
              return this.bookmarks && -1 !== this.bookmarks.findIndex((t) => t.url === this.chromeBookmarksUrl);
            }
          },
          watch: {
            "settings.iconsOnly"() {
              this.removeOverflowAndCheckWithinView();
            },
            "settings.includeMostVisited"(t) {
              this.bookmarksFetched && (t ? this.addMostVisitedToBookmarks() : this.removeMostVisited());
            },
            "settings.defaultMostVisited"(t) {
              this.bookmarksFetched &&
                ((this.currentTabDefaultMostVisited = t),
                t && this.currentTabDefaultMostVisited && this.bookmarksFetched ? this.showMostVisited() : this.closeMostVisited());
            },
            "settings.includeBookmarks"(t) {
              this.bookmarksFetched && (t ? this.showChromeBookmarksManager() : this.removeChromeBookmarksManager());
            },
            "settings.includeOtherBookmarks"(t) {
              this.bookmarksFetched && (t ? this.addOtherBookmarks() : this.removeOtherBookmarks());
            },
            showChromeTab(t) {
              this.bookmarksFetched && (t ? this.showChromeTabItem() : this.removeChromeTabItem());
            }
          },
          created() {
            (this.chromeTabUrl = "chrome-search://local-ntp/local-ntp.html"),
              (this.chromeBookmarksUrl = "chrome://bookmarks"),
              (this.isFirefox = "Firefox" === m.utils.getBrowserName()),
              (this.firefoxBookmarksMenu = "Bookmarks Menu"),
              (this.mostVisitedId = "mostVisited________"),
              (this.otherId = "other________"),
              (this.overflowId = "overflow________"),
              this.getBookmarks(),
              m.on("appsReady", this.isWithinView),
              m.models.customization.on("m.customization: change:bookmarksVisible", this.bookmarksVisibleChanged),
              window.addEventListener("resize", this.debouncedRemoveOverflowAndCheckWithinView);
          },
          destroyed() {
            m.off("appsReady", this.isWithinView),
              m.models.customization.off("m.customization: change:bookmarksVisible", this.bookmarksVisibleChanged),
              window.removeEventListener("resize", this.debouncedRemoveOverflowAndCheckWithinView);
          },
          methods: {
            getBookmarks() {
              m.utils.getBrowser().bookmarks
                ? m.utils.getBrowser().bookmarks.getTree((t) => {
                    (this.isChrome = m.utils.isChrome()), (this.isEdge = m.utils.isEdge());
                    let e = "BOOKMARKS BAR";
                    this.isFirefox ? (e = "BOOKMARKS TOOLBAR") : this.isEdge && (e = "FAVORITES BAR");
                    let o = t && t.length && t[0].children.find((t) => t.title.toUpperCase() === e);
                    o || (o = t && t.length && t[0].children[0]),
                      m.utils.getBrowser().topSites.get((e) => {
                        (this.bookmarks = o.children),
                          (this.originalbookmarks = [...o.children]),
                          (this.topSites = e),
                          (this.originalTopSites = [...e]),
                          this.settings.includeMostVisited && this.addMostVisitedToBookmarks(),
                          this.settings.defaultMostVisited && ((this.currentTabDefaultMostVisited = !0), this.showMostVisited()),
                          this.showChromeSpecificItems();
                        const s = this.isEdge ? "OTHER FAVORITES" : "OTHER BOOKMARKS";
                        let i = t[0].children.find((t) => t.title.toUpperCase() === s);
                        i || (i = t && t.length && t[0].children[1]),
                          (this.otherBookmarks = i.children),
                          this.settings.includeOtherBookmarks && this.addOtherBookmarks(),
                          this.addFirefoxBookmarksMenu(t),
                          (this.bookmarksFetched = !0),
                          this.bookmarksReadyListener(),
                          this.isWithinView();
                      });
                  })
                : new addin.views.BookmarksPrimer({
                    callback: () => {
                      m.models.customization.save("bookmarksVisible", !0), this.getBookmarks();
                    }
                  }).render();
            },
            resetBookmarks() {
              this.removeOverflow(),
                (this.bookmarks = [...this.originalbookmarks]),
                this.settings.includeMostVisited && this.addMostVisitedToBookmarks(),
                this.settings.includeOtherBookmarks && this.addOtherBookmarks(),
                this.showChromeSpecificItems(),
                this.addFirefoxBookmarksMenu();
            },
            bookmarksReadyListener() {
              "photo" === m.models.customization.persistentSettings.get("themeColour")
                ? m.on("theme:set", this.bookmarksReady)
                : this.bookmarksReady();
            },
            bookmarksReady() {
              m.widgetManager.appReady("bookmarks");
            },
            removeOverflowAndCheckWithinView() {
              this.removeOverflow(), this.isWithinView();
            },
            debouncedRemoveOverflowAndCheckWithinView() {
              clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => {
                  this.removeOverflowAndCheckWithinView();
                }, 50));
            },
            bookmarksVisibleChanged() {
              const t = m.models.customization.get("bookmarksVisible");
              t && 0 === this.bookmarks.length && this.getBookmarks(),
                (this.showBookmarks = t),
                localStorage.setItem("bookmarksEnabled", t);
            },
            addMostVisitedToBookmarks() {
              if (!this.containsMostVisited && !this.currentTabDefaultMostVisited) {
                let t = this.bookmarks.findIndex((t) => t.url === this.chromeBookmarksUrl);
                -1 === t && (t = this.bookmarks.findIndex((t) => t.url === this.chromeTabUrl)),
                  -1 === t ? (t = 0) : t++,
                  this.bookmarks.splice(t, 0, {
                    children: [...this.originalTopSites],
                    id: this.mostVisitedId,
                    index: t,
                    title: "Top Sites"
                  });
              }
              this.removeOverflowAndCheckWithinView();
            },
            showMostVisited() {
              this.removeOverflow(),
                this.addMostVisitedToBookmarks(),
                (this.bookmarks = [...this.originalTopSites]),
                this.containsMostVisited || this.bookmarks.unshift({ title: "Bookmarks", id: "mostVisitedBack________", back: !0 });
            },
            removeMostVisited() {
              const t = this.bookmarks.findIndex((t) => t.id === this.mostVisitedId);
              -1 !== t && (this.bookmarks.splice(t, 1), this.removeOverflowAndCheckWithinView());
            },
            closeMostVisited() {
              (this.currentTabDefaultMostVisited = !1), this.resetBookmarks(), this.isWithinView();
            },
            addOtherBookmarks() {
              if (!this.settings.includeOtherBookmarks || this.currentTabDefaultMostVisited) return;
              const t = { children: this.otherBookmarks, id: this.otherId, title: "Other" };
              this.containsOverflow && -1 === this.overflowBookmarks.findIndex((t) => t.id === this.otherId)
                ? this.overflowBookmarks.push(t)
                : this.containsOverflow || this.containsOthers || (this.bookmarks.push(t), this.removeOverflowAndCheckWithinView());
            },
            removeOtherBookmarks() {
              let t = this.bookmarks.findIndex((t) => t.id === this.otherId);
              if (-1 === t) {
                if (((t = this.overflowBookmarks.findIndex((t) => t.id === this.otherId)), -1 === t)) return;
                this.overflowBookmarks.splice(t, 1), this.overflowBookmarks.length || this.removeOverflow();
              } else this.bookmarks.splice(t, 1);
            },
            reorderOtherBookmarksToBeAtEnd() {
              let t = this.bookmarks.findIndex((t) => t.id === this.otherId);
              if (-1 === t) {
                if (((t = this.overflowBookmarks.findIndex((t) => t.id === this.otherId)), -1 === t)) return;
                const e = this.overflowBookmarks[this.overflowBookmarks.length - 1];
                (this.overflowBookmarks[t] = e), (this.overflowBookmarks[this.overflowBookmarks.length - 1] = this.otherBookmarks);
              } else this.bookmarks.splice(t, 1);
            },
            addToOverflow(t) {
              if (!t || t.id === this.overflowId) return;
              const e = this.bookmarks.findIndex((e) => e === t);
              this.bookmarks.splice(e, 1),
                this.overflowBookmarks.includes(t) || this.overflowBookmarks.unshift(t),
                -1 === this.bookmarks.findIndex((t) => t.id === this.overflowId) &&
                  this.bookmarks.push({ children: this.overflowBookmarks, id: this.overflowId, index: -1 });
            },
            removeOverflow() {
              this.overflowBookmarks.forEach((t) => {
                this.bookmarks.includes(t) || this.bookmarks.push(t);
              });
              const t = this.bookmarks.findIndex((t) => t.id === this.overflowId);
              -1 !== t && (this.bookmarks.splice(t, 1), (this.overflowBookmarks = []));
            },
            showChromeSpecificItems() {
              this.showChromeTabItem(), this.showChromeBookmarksManager();
            },
            showChromeTabItem() {
              this.isChromiumAndNotTopSites &&
                this.showChromeTab &&
                !this.containChromeTab &&
                (this.bookmarks.unshift({
                  url: this.chromeTabUrl,
                  local: !0,
                  title: m.utils.getBrowserName() + " Tab",
                  id: "chromeTab________",
                  img: "img/icon-" + m.utils.getBrowserName().toLowerCase() + ".svg",
                  analyticsId: "browser tab"
                }),
                this.removeOverflowAndCheckWithinView());
            },
            removeChromeTabItem() {
              this.bookmarks.splice(0, 1), this.removeOverflowAndCheckWithinView();
            },
            showChromeBookmarksManager() {
              if (this.isChromiumAndNotTopSites && this.settings.includeBookmarks && !this.containsChromeBookmarksManager) {
                let t = this.bookmarks.findIndex((t) => t.url === this.chromeTabUrl);
                -1 === t ? (t = 0) : t++,
                  this.bookmarks.splice(t, 0, {
                    url: this.chromeBookmarksUrl,
                    local: !0,
                    title: "Bookmarks",
                    id: "chromeBookmarksManager________"
                  }),
                  this.removeOverflowAndCheckWithinView();
              }
            },
            removeChromeBookmarksManager() {
              if (this.isChromiumAndNotTopSites) {
                const t = this.bookmarks.findIndex((t) => t.url === this.chromeBookmarksUrl);
                this.bookmarks.splice(t, 1), this.removeOverflowAndCheckWithinView();
              }
            },
            addFirefoxBookmarksMenu(t) {
              this.isFirefox &&
                (t && (this.bookmarksMenu = t[0].children[0].children),
                this.currentTabDefaultMostVisited ||
                  this.bookmarks.push({
                    children: this.bookmarksMenu,
                    id: "menu________",
                    parentId: "root________",
                    title: this.firefoxBookmarksMenu
                  }));
            },
            isWithinView() {
              this.$nextTick(() => {
                const t = document.documentElement.clientWidth;
                for (let e = this.bookmarks.length - 1; e > 0; e--) {
                  const o = this.$refs.bookmark.find((t) => t.id === this.bookmarks[e].id);
                  if (!(o && o.offsetLeft + o.clientWidth > t)) {
                    this.isOverflowWithinView();
                    break;
                  }
                  this.addToOverflow(this.bookmarks[e]);
                }
              });
            },
            isOverflowWithinView() {
              this.$nextTick(() => {
                const t = document.documentElement.clientWidth,
                  e = this.$refs.overflow && this.$refs.overflow[0] && this.$refs.overflow[0].$el;
                if (e && e.offsetLeft + e.clientWidth > t) {
                  const t = this.bookmarks[this.bookmarks.length - 2];
                  this.addToOverflow(t);
                }
              });
            }
          }
        },
        p = u;
      o(92139);
      const f = (0, l.Z)(p, i, [], !1, null, "495b0cb6", null).exports,
        g = document.createElement("div");
      document.querySelector(".top-bar").appendChild(g), new s.Z({ render: (t) => t(f) }).$mount(g);
    },
    40063: (t, e, o) => {
      "use strict";
      o.d(e, { Z: () => i });
      let s = {};
      const i = {
        bind: function (t, e) {
          let o, i;
          (t.dataset.justBoundClickOutsideHandler = !0),
            setTimeout(() => {
              t.dataset.justBoundClickOutsideHandler = !1;
            }, 100);
          const a = (t) => {
              (i = !1), ((t) => t && t.clientX > window.innerWidth)(t) ? (i = !0) : (o = t.target);
            },
            r = (s) => {
              i ||
                ((e.modifiers.bubble ||
                  (!t.contains(o) &&
                    !t.contains(s.target) &&
                    t !== o &&
                    t !== s.target &&
                    "true" !== t.dataset.justBoundClickOutsideHandler)) &&
                  e.value(s));
            };
          (t.dataset.clickOutsideMouseupHandlerId = Math.random().toString(36).substring(7)),
            (t.dataset.clickOutsideMousedownHandlerId = Math.random().toString(36).substring(7)),
            (s[t.dataset.clickOutsideMouseupHandlerId] = r),
            (s[t.dataset.clickOutsideMousedownHandlerId] = a),
            document.addEventListener("mouseup", r),
            document.addEventListener("mousedown", a);
        },
        unbind: function (t) {
          var e, o;
          null !== (e = t.dataset) &&
            void 0 !== e &&
            e.clickOutsideMouseupHandlerId &&
            null !== (o = t.dataset) &&
            void 0 !== o &&
            o.clickOutsideMousedownHandlerId &&
            (document.removeEventListener("mouseup", s[t.dataset.clickOutsideMouseupHandlerId]),
            document.removeEventListener("mousedown", s[t.dataset.clickOutsideMousedownHandlerId]),
            delete s[t.dataset.clickOutsideMouseupHandlerId],
            delete s[t.dataset.clickOutsideMousedownHandlerId],
            delete t.dataset.clickOutsideMouseupHandlerId,
            delete t.dataset.clickOutsideMousedownHandlerId,
            delete t.dataset.justBoundClickOutsideHandler);
        }
      };
    },
    29: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => n });
      var s = o(8081),
        i = o.n(s),
        a = o(23645),
        r = o.n(a)()(i());
      r.push([t.id, "\n/* stylelint-disable */\n\n", ""]);
      const n = r;
    },
    40364: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => n });
      var s = o(8081),
        i = o.n(s),
        a = o(23645),
        r = o.n(a)()(i());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n.folder[data-v-09382cdd] {\n}\n.folder-wrapper[data-v-09382cdd] { display: flex; align-items: center;\n}\n.icon-folder[data-v-09382cdd] { opacity: 0.5;\n}\n\n\t\t\t/* Show icons only folder label */\n.folder-icon-label[data-v-09382cdd] { position: absolute; top: 2px; right: 0; bottom: 0; left: 0; z-index: 2; display: flex; align-items: center; justify-content: center; color: var(--color-text); font-size: 0.5625rem; font-weight: 500;\n}\n\n\t/* More */\n.overflow .folder-wrapper[data-v-09382cdd] { height: 16px; width: 16px; display: flex; align-items: center; justify-content: center;\n}\n.overflow .folder-wrapper .icon-ellipsis[data-v-09382cdd] { height: 12px;\n}\n.overflow .folder-wrapper .bookmark-label[data-v-09382cdd] { display: none;\n}\n.dropdown[data-v-09382cdd] { margin-top: 3px; top: 100%; display: block;\n}\n.dropdown-wrapper[data-v-09382cdd] { max-height: calc(100vh - 45px); overflow-y: auto;\n}\n.dropdown-list[data-v-09382cdd] { cursor: auto;\n}\n.dropdown-item[data-v-09382cdd] { min-width: 150px; max-width: 400px; display: inherit;\n}\n.dropdown[data-v-09382cdd] .bookmark { max-width: 500px; margin: 0; padding: 4px 14px; border-radius: 0px;\n}\n.dropdown[data-v-09382cdd] .bookmark-label { margin-left: 10px;\n}\n\n\t/* Subfolder back */\n.back-item .bookmark-label[data-v-09382cdd] { padding-top: 1px; opacity: 0.75; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;\n}\n\n\t/* Folder dropdown empty state */\n.folder-empty .bookmark[data-v-09382cdd] { opacity: 0.7;\n}\n.folder-empty .bookmark[data-v-09382cdd]:hover { background: none;\n}\n.folder-empty .bookmark-label[data-v-09382cdd] { margin-left: 0;\n}\n\n\t/* Show icons only mode */\n.icon-only .dropdown-item[data-v-09382cdd]:not(.folder-empty) { min-width: 16px;\n}\n.icon-only .icon-folder[data-v-09382cdd] { opacity: var(--opacity-stop-4);\n}\n",
        ""
      ]);
      const n = r;
    },
    61091: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => n });
      var s = o(8081),
        i = o.n(s),
        a = o(23645),
        r = o.n(a)()(i());
      r.push([
        t.id,
        "\n/* stylelint-disable */\n.bookmarks[data-v-495b0cb6] { height: 36px; display: block; background-color: var(--color-bg); text-shadow: none;\n}\n.animating.bookmarks[data-v-495b0cb6] { transition: all 0.5s ease;\n}\n.bookmarks-list[data-v-495b0cb6] { height: 100%; padding: 0 4px; display: flex; align-items: flex-end; transition: transform 0.25s ease, opacity 0.25s ease; white-space: nowrap;\n}\n.bookmarks-item[data-v-495b0cb6] { color: var(--color-text);\n}\n[data-v-495b0cb6] .bookmark { max-width: 150px; margin: 4px 1px; padding: 6px; position: relative; display: flex; align-items: center; border-radius: 30px; color: var(--color-text); cursor: pointer; line-height: 1.25; transition: background 0s ease;\n}\n[data-v-495b0cb6] .bookmark:hover { background: var(--hover-bg);\n}\n[data-v-495b0cb6] .bookmark-icon-wrapper { --size: 16px; height: var(--size); width: var(--size);\n}\n[data-v-495b0cb6] .bookmark-icon { --size: 16px; height: var(--size); width: var(--size); fill: var(--color-text);\n}\n[data-v-495b0cb6] .bookmark-img { filter: var(--filter-dark-invert);\n}\n[data-v-495b0cb6] .bookmark-label { margin-left: 6px; display: inline-block; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n\n\t\t\t\t/* Back icon appears in Most Visited and in subfolders */\n[data-v-495b0cb6] .icon-back-wrapper { --size: 16px; height: var(--size); width: var(--size); display: flex; align-items: center; justify-content: center; opacity: 0.6;\n}\n[data-v-495b0cb6] .icon-back-wrapper .icon-back { --size: 14px;\n}\n\n\t\t/* Most visited */\n.most-visited[data-v-495b0cb6] {\n}\n.most-visited:not(.icons-only) .bookmarks-item[data-v-495b0cb6]:not(.back) { width: 1%; flex-grow: 1;\n}\n.most-visited .bookmark[data-v-495b0cb6] { max-width: none;\n}\n\n\t\t/* Overflow dropdown button */\n.overflow[data-v-495b0cb6] { flex-grow: 1; display: flex; justify-content: flex-end;\n}\n.slide-enter-active[data-v-495b0cb6], .slide-leave-active[data-v-495b0cb6] { transition: height .2s ease;\n}\n.slide-enter[data-v-495b0cb6], .slide-leave-to[data-v-495b0cb6] { height: 0;\n}\n",
        ""
      ]);
      const n = r;
    },
    44068: (t, e, o) => {
      var s = o(29);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, o(45346).Z)("72cfaca5", s, !1, { ssrId: !0 });
    },
    15342: (t, e, o) => {
      var s = o(40364);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, o(45346).Z)("b4d76994", s, !1, { ssrId: !0 });
    },
    92139: (t, e, o) => {
      var s = o(61091);
      s.__esModule && (s = s.default),
        "string" == typeof s && (s = [[t.id, s, ""]]),
        s.locals && (t.exports = s.locals),
        (0, o(45346).Z)("2c590882", s, !1, { ssrId: !0 });
    },
    97510: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDEwSDcuODI4bDMuNTg2LTMuNTg2YTIgMiAwIDAgMC0yLjgyOC0yLjgyOGwtNyA3YTIgMiAwIDAgMCAwIDIuODI4bDcgN2EyIDIgMCAxIDAgMi44MjgtMi44MjhMNy44MjggMTRIMjFhMiAyIDAgMCAwIDAtNHoiIC8+PC9zdmc+Cg==";
    },
    49710: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K";
    },
    9021: (t) => {
      "use strict";
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MSA1M1YxOEM2MSAxNi4zNDMxIDU5LjY1NjkgMTUgNTggMTVIMzIuNjE2NEMzMC4xMTM4IDE1IDI3LjcyNDIgMTMuOTU4IDI2LjAyMTMgMTIuMTI0MUwyMy4wODIgOC45NTg2NUMyMi41MTQzIDguMzQ3MzUgMjEuNzE3OCA4IDIwLjg4MzYgOEg2QzQuMzQzMTUgOCAzIDkuMzQzMTUgMyAxMVY1M0MzIDU0LjY1NjkgNC4zNDMxNSA1NiA2IDU2SDU4QzU5LjY1NjkgNTYgNjEgNTQuNjU2OSA2MSA1M1pNNiA1QzIuNjg2MjkgNSAwIDcuNjg2MjkgMCAxMVY1M0MwIDU2LjMxMzcgMi42ODYyOSA1OSA2IDU5SDU4QzYxLjMxMzcgNTkgNjQgNTYuMzEzNyA2NCA1M1YxOEM2NCAxNC42ODYzIDYxLjMxMzcgMTIgNTggMTJIMzIuNjE2NEMzMC45NDggMTIgMjkuMzU0OSAxMS4zMDUzIDI4LjIxOTcgMTAuMDgyN0wyNS4yODAzIDYuOTE3MjlDMjQuMTQ1MSA1LjY5NDY5IDIyLjU1MiA1IDIwLjg4MzYgNUg2WiIvPgo8L3N2Zz4K";
    }
  }
]);
