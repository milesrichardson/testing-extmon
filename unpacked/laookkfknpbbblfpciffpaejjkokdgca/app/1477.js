(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1477],
  {
    11477: (t, e, i) => {
      "use strict";
      i.r(e);
      var n = i(24749);
      const s = Backbone.Model.extend({
          idAttribute: "csid",
          defaults: function () {
            return { url: "", local: !1, order: 0, type: 0, deleted: !1, draft: !1, summaryText: "" };
          },
          initialize: function () {
            (this.idAttribute = (this.collection && this.collection.idAttribute) || "csid"),
              (this.serverIdAttribute = (this.collection && this.collection.serverIdAttribute) || "id");
          },
          saveHandler: function (t) {
            if (this.sublinks)
              this.sublinks.map(function (e) {
                e.save({ parentLinkId: t.id, unsyncable: !1 });
              });
            else {
              let e = this.collection.findWhere({ id: this.get("parentLinkId") });
              if (e) {
                let i = e.get("linksOrder").slice(0),
                  n = i.indexOf(this.get("csid"));
                n >= 0 && (i.splice(n, 1, t.id), e.save({ linksOrder: i }));
              }
            }
          },
          mainContent: function () {
            let t = {};
            return (t.title = this.get("title")), (t.url = this.get("url")), t;
          },
          getFriendlyUrl: function () {
            let t = this.get("url");
            return t.substr(Math.max(t.indexOf("://") + 3, 0));
          },
          saveOptions: function () {
            return this.collection && this.collection.saveOptions;
          },
          getActiveSublinks: function () {
            let t = [];
            return this.sublinks
              ? (this.sublinks.map(function (e) {
                  e.get("deleted") || t.push(e);
                }),
                t)
              : t;
          },
          delete: function () {
            this.group && this.group.removeChild(this), this.save("deleted", !0);
          },
          removeChild: function (t) {
            this.sublinks.splice(this.sublinks.indexOf(t), 1);
          },
          isTeamLink: function () {
            let t = this.get("id");
            return t && "T" === t[0];
          },
          comparator: "order"
        }),
        l = m.collect.SyncedCollection.extend({
          LinkType: n.Un,
          initialize: function (t, e) {
            ((e = e || {}).name = e.name || "quicklinks"),
              (e.model = e.model || s),
              (e.localProps = ["unsyncable", "order"]),
              (e.transientProps = ["draftDeleted"]),
              (e.apiUrl = m.globals.urlRoot + "links"),
              m.collect.SyncedCollection.prototype.initialize.call(this, t, e),
              this.listenTo(this, "reorder", this.reorderItem),
              this.listenTo(this, "reset", this.removeDrafts);
          },
          saveOptions: { patch: !0 },
          comparator: "order",
          isValidModel: function (t) {
            return !(t.get("type") !== this.LinkType.Link && !t.get("title"));
          },
          removeDrafts: function () {
            this.resetOnce ||
              ((this.resetOnce = !0),
              this.models.map(function (t) {
                t.get("draft") && t.destroy({ silent: !0 });
              }));
          },
          reorderItem: function (t) {
            let e,
              i,
              n = this.findWhere({ id: t.moveId }) || this.findWhere({ csid: t.moveId }),
              s = this.findWhere({ id: t.moveTargetId }) || this.findWhere({ csid: t.moveTargetId });
            if (!n || !s) return;
            (i = n.get("parentLinkId")), (e = i ? this.findWhere({ id: i }) || this.findWhere({ csid: i }) : this.getRootLink());
            let l = e.get("linksOrder").slice(0),
              o = Math.max(l.indexOf(n.get("id")), l.indexOf(n.get("csid")));
            l.splice(o, 1);
            let a = Math.max(l.indexOf(s.get("id")), l.indexOf(s.get("csid")));
            l.splice(a + t.moveOffset, 0, t.moveId), e.save({ linksOrder: l });
          },
          confirmCreate: function (t) {
            if (!t.sublinks) return;
            t.save("draft", !1),
              t.sublinks.map(function (t) {
                t.get("draft") && !t.get("deleted") && t.save({ draft: !1 });
              });
            let e = this.getRootLink(),
              i = e.get("linksOrder").slice(0);
            i.push(t.get("id") || t.get("csid")), e.save({ linksOrder: i });
          },
          getHierarchy: function () {
            let t,
              e = [],
              i = this;
            this.where({ type: this.LinkType.LinkGroup, deleted: !1 }).map(function (n) {
              n.get("isRoot") ||
                ((n.sublinks = i.where({ deleted: !1, parentLinkId: n.get("id") || n.get("csid") })),
                (t = n.get("linksOrder") || []),
                n.sublinks.map(function (e) {
                  e.set({ order: Math.max(t.indexOf(e.get("id")), t.indexOf(e.get("csid")), 0) });
                }),
                n.sublinks.sort(o),
                e.push(n));
            }),
              (e = e.concat(this.where({ type: this.LinkType.Legacy, deleted: !1 })));
            let n = this.findWhere({ isRoot: !0 }),
              s = this.findWhere({ isTeamRoot: !0 });
            return (
              l(n, 1e3, function (t) {
                return !t.isTeamLink();
              }),
              l(s, 0, function (t) {
                return t.isTeamLink();
              }),
              e.sort(o),
              e
            );
            function l(i, n, s) {
              i &&
                ((t = i.get("linksOrder") || []),
                e.map(function (e) {
                  if (s && !s(e)) return;
                  let i = t.indexOf(e.get("id"));
                  i < 0 && (i = t.indexOf(e.get("csid"))),
                    i < 0 && e.get("id") && (t.push(e.get("id")), (i = t.length - 1)),
                    e.set({ order: n + i });
                }));
            }
            function o(t, e) {
              return t.get("order") + (t.get("pinned") ? 0 : 1e5) - (e.get("order") + (e.get("pinned") ? 0 : 1e5));
            }
          },
          getRootLink: function () {
            let t = this.findWhere({ isRoot: !0 });
            return (
              !t &&
                this.offlineOnly &&
                ((t = { isRoot: !0, linksOrder: [], type: this.LinkType.LinkGroup }),
                this.getHierarchy().map(function (e) {
                  t.linksOrder.push(e.get("id") || e.get("csid"));
                }),
                this.create(t),
                (t = this.findWhere({ isRoot: !0 }))),
              t
            );
          },
          handleOrdering: function (t) {
            let e = [],
              i = this.serverIdAttribute;
            t.map(function (t) {
              t.root && (e = t.linksOrder);
            }),
              this.models.map(function (t) {
                let n = e.indexOf(t.get(i));
                n >= 0 && t.save({ order: n }, { ignoreRender: !0, silent: !0 });
              });
          }
        });
      var o = i(31410),
        a = i.n(o);
      const r = Backbone.View.extend({
        tagName: "li",
        template: a(),
        analytics: new m.Analytics({ feature: "links" }),
        events: {
          "keypress .todo-input": "updateOnEnter",
          "click .destroy": "delete",
          "click .draft-destroy": "draftDelete",
          dragstart: "dragstart",
          dragenter: "dragenter",
          "click a": "handleClick",
          "click .more": "toggleDropdown",
          "click .detail": "showDetail",
          "click .link-pin": "togglePin"
        },
        initialize: function (t) {
          (this.dropdownOpen = !1),
            _.bindAll(this, "dragstart", "dragenter"),
            (this.parent = t.parent),
            (this.noIcon = t.noIcon),
            this.listenTo(this.model, "change", this.onChange),
            this.listenTo(this.model, "change:archive destroy", this.remove),
            this.listenTo(m, "globalEvent:click globalEvent:esc globalEvent:closeDropdowns", this.hideDropdown);
        },
        onChange: function () {
          this.model.get("deleted") ? this.destroy() : this.render();
        },
        render: function () {
          let t = this,
            e = this.model.sublinks,
            i = this.model.get("url") || (e && 1 === e.length && e[0].get("url"));
          this.moreIsSet = !1;
          let n = i && m.utils.getFavIcon(i);
          if (this.noIcon) this.loadLink(!1);
          else {
            let e = new Image();
            if ((this.loadLink(!1), m.utils.isChromiumExtension() && m.utils.isChrome())) {
              let s = {
                permissions: m.models.bookmarksSettings.permissions.permissions,
                origins: m.models.bookmarksSettings.permissions.origins
              };
              m.utils.getBrowser().permissions.contains(s, function (s) {
                if (s) {
                  let s = "chrome://favicon/size/16@2x/" + i;
                  $.ajax({ url: s }).done(function (i) {
                    i === t.parent.notFoundIcon ? (e.src = n) : t.loadLink(s);
                  });
                } else e.src = n;
              });
            } else e.src = n;
            e.onload = function () {
              t.loadLink(n);
            };
          }
          return t;
        },
        hideDropdown: function (t) {
          this.keepOpen ? (this.keepOpen = !1) : !this.dropdownOpen || (t && $.contains(this.$el[0], t.target)) || this.toggleDropdown();
        },
        showDetail: function (t) {
          t.stopPropagation(), this.toggleDropdown(t), this.parent.showDetail(this.model, t);
        },
        toggleDropdown: function (t) {
          t && t.stopPropagation(),
            (this.dropdownOpen = !this.dropdownOpen),
            this.dropdownOpen && ((this.keepOpen = !0), m.trigger("globalEvent:closeDropdowns"));
          let e = (t && $(t.delegatedTarget).closest("li")) || this.$el;
          e.toggleClass("active", this.dropdownOpen), e.find(".more").toggleClass("active", this.dropdownOpen);
          let i = this.$el.find(".dropdown");
          if (0 === i.length) return;
          let n = i.closest(".links-list");
          if (this.dropdownOpen) {
            this.model.get("pinned") && this.parent.isOpen && this.parent.forceHidePopup(!0);
            let t = i[0].getBoundingClientRect().bottom;
            if (
              (n.height() < i.height() + 10 && n.css({ height: i.height() + 10 }),
              0 === n.length && (n = i.closest(".more-links-list")),
              0 === n.length)
            )
              return;
            let e = n[0].getBoundingClientRect().bottom - t - 5,
              s = i.css("margin-top");
            (s = Number.parseFloat(s.substring(0, s.length - 2))), this.baseMargin || (this.baseMargin = s);
            let l = e < 0 ? s + e : s;
            i.css({ "margin-top": l }), 8 !== l ? i.css({ right: "calc(100% + 5px)" }) : i.css({ right: "calc(var(--app-padding)" });
          } else n.css({ height: "auto" }), i.css({ "margin-top": this.baseMargin });
        },
        loadLink: function (t) {
          let e = m.utils.captionFormatter(this.model.get("title") || this.model.getFriendlyUrl()),
            i = this.model.sublinks,
            n = this.model.get("url") || (i && 1 === i.length && i[0].get("url")),
            s = this.model.get("local"),
            l = this.model.get("readOnly"),
            o = !!this.model.get("pinned"),
            a = {
              showControls: this.parent.showPinnedInPopup || !this.model.get("isTeam"),
              title: e,
              iconLabel: e[0],
              draggable: !this.model.isTeamLink(),
              url: n,
              showPinOption: !!this.parent.team,
              noMenu: !!this.model.get("parentLinkId") || (!this.parent.team && !this.model.sublinks),
              noIcon: this.noIcon,
              hasUrls: this.model.sublinks && this.model.sublinks.length > 1,
              isGroup: this.model.get("type") === this.parent.LinkType.LinkGroup,
              local: s,
              readOnly: l,
              favicon_url: t,
              pinned: o,
              ellipsisIconClass: o ? "dash-icon" : "",
              pinnedClass: o ? "active" : "",
              team: this.parent.team,
              summaryText: this.getSummaryText(),
              editing:
                this.model.get("type") === this.parent.LinkType.Link && this.parent.activeModel && !this.parent.activeModel.get("draft")
            };
          this.$el.html(this.template(a)), this.model.isTeamLink() || this.$el.attr("draggable", "true");
        },
        getSummaryText: function () {
          let t = this.model.sublinks,
            e = this.model.get("type");
          return e === n.Un.LinkGroup && t
            ? 1 === t.length
              ? t[0].get("url")
              : t
                  .map(function (t) {
                    try {
                      let e = new URL(t.get("url"));
                      return e && e.host;
                    } catch (t) {
                      return console.warn(t), "";
                    }
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .join(", ")
            : e === n.Un.LINK
            ? this.model.get("url")
            : "";
        },
        destroy: function () {
          this.remove(), this.unbind();
        },
        delete: function (t) {
          t.stopPropagation(), this.toggleDropdown();
          let e = this.getModelType(this.model);
          this.analytics.capture(e + " delete", { is_paid_event: "tab group" === e }), this.model.delete();
        },
        draftDelete: function (t) {
          t.stopPropagation(), this.model.set({ draftDeleted: !0 }, { silent: !0 }), this.$el.remove();
          let e = this.parent.$el.find(".new-group-url");
          (this.parent.activeModel.sublinks.length &&
            !this.parent.activeModel.sublinks.every(function (t) {
              return t.get("draftDeleted");
            })) ||
            e.addClass("active"),
            e.trigger("focus");
        },
        dragstart: function (t) {
          if ((m.trigger("globalEvent:closeDropdowns"), this.dropdownOpen && this.toggleDropdown(), this.model.isTeamLink()))
            return (t.originalEvent.dataTransfer.effectAllowed = "none"), void t.stopPropagation();
          (t.originalEvent.dataTransfer.effectAllowed = "move"),
            t.originalEvent.dataTransfer.setData("text", "dummy"),
            this.parent.handleDragStart(this);
        },
        dragenter: function (t) {
          if (this.model.isTeamLink()) t.stopPropagation();
          else if ("quicklink" === this.parent.dragmode) {
            let t = this.model.collection;
            this.parent.dragging.$el.hide(), this.parent.$placeholder || this.parent.addPlaceholder();
            let e = t.serverIdAttribute,
              i = t.idAttribute,
              n = t.offlineOnly ? i : e,
              s = this.model.get(n) || this.model.get(i);
            this.parent.li_index(this.parent.$placeholder) < this.parent.li_index(this.$el)
              ? (this.$el.after(this.parent.$placeholder), (this.parent.moveTargetId = s), (this.parent.moveOffset = 1))
              : (this.$el.before(this.parent.$placeholder), (this.parent.moveTargetId = s), (this.parent.moveOffset = 0));
            let l = this.parent.$placeholder;
            this.parent.$placeholder.css("display", "list-item"), l.after(this.parent.dragging.$el);
          }
        },
        handleClick: function (t) {
          t.stopPropagation(), t.preventDefault();
          let e = m.utils.isTouchDevice(),
            i = this,
            n = this.getModelType(this.model),
            s = this.model.sublinks,
            l = m.utils.getBrowser();
          if ((m.Analytics.batchCapture(n + " click", { is_paid_event: "tab group" === n }), s)) {
            if (1 === s.length) return void o(s[0].get("url"), t);
            i.$el.addClass("opening"),
              setTimeout(function () {
                i.$el.removeClass("opening");
              }, 1e3),
              l
                ? t.metaKey
                  ? l.windows.create({
                      focused: !0,
                      url: s.map(function (t) {
                        return t.get("url");
                      })
                    })
                  : s.forEach(function (t, i) {
                      t.get("deleted") ||
                        (e && 0 === i
                          ? setTimeout(function () {
                              m.utils.getBrowser().tabs.update({ url: t.get("url") });
                            }, 0)
                          : l.tabs.create({ url: t.get("url"), active: !1 }));
                    })
                : s.forEach(function (t) {
                    window.open(t.get("url"));
                  });
          } else o(this.model.get("url"), t);
          function o(t, n) {
            let s = m.utils.getBrowser(),
              l = !e && (m.models.bookmarksSettings.get("openInNewTab") || n.metaKey || i.model.get("type") === i.parent.LinkType.Link);
            s
              ? l
                ? m.utils.getBrowser().tabs.create({ url: t, active: !1 })
                : m.utils.getBrowser().tabs.update({ url: t })
              : l
              ? (window.open(t), window.focus())
              : (window.location = t);
          }
        },
        togglePin: function (t) {
          t.stopPropagation(),
            this.model.save("pinned", !this.model.get("pinned")),
            this.toggleDropdown(),
            this.model.collection.trigger("refresh"),
            this.parent.setAppPosition();
        },
        updateOnEnter: function (t) {
          13 === t.keyCode && this.close($(t.delegatedTarget).data("field"));
        },
        getModelType: (t) => (t.sublinks && t.sublinks.length > 1 ? "tab group" : "link")
      });
      var d = i(22579),
        p = i.n(d),
        c = i(56730),
        h = i.n(c),
        u = i(66254),
        g = i.n(u);
      const f = Backbone.View.extend({
          attributes: { id: "quicklinks", class: "app-container" },
          offline: !0,
          initialFetchStarted: !1,
          analytics: new m.Analytics({ feature: "links" }),
          events: {
            "click .app-dash.toggle": "toggleShow",
            "click .more-links-wrapper": "toggleHandler",
            "click a": "handleClick",
            "blur .new-group-title": "saveTitle",
            "keyup .new-group-title": "handleNameKeyUp",
            "keyup .new-group-url": "saveUrl",
            "click .add-tab": "saveUrlByClick",
            "click .back": "handleBack",
            "click .new-toggle": "showAddGroup",
            "click .delete": "deleteGroup",
            "click .new-group-toggle": "showAddGroup",
            "click .save-link": "saveLink",
            "click .header .more-toggle": "toggleDropdown",
            "click .create": "confirmCreate",
            "click .update": "confirmUpdate",
            "click .mobile-close": "forceHidePopup",
            "click .mobile-edit": "toggleLinkEllipsis",
            "click .mobile-add": "showAddGroup",
            "click .touch-overlay": "forceHidePopup",
            dragover: "dragover",
            dragend: "dragend",
            drop: "drop"
          },
          LinkType: n.Un,
          initialize: function () {
            this.DropdownTitles = { EMPTY_STATE: "Add Link", NO_PINNED: "Links", HAS_PINNED: "Links" };
            const t = this;
            (this.showPinnedInPopup = Math.min(m.reactive.windowDimensions.width, m.reactive.windowDimensions.height) <= 450),
              (this.subViews = []),
              _.bindAll(this, "addOne", "addAll", "dragover", "dragend", "li_index"),
              (this.isPlusUser = m.conditionalFeatures.featureEnabled("plus")),
              (this.renderedOnce = !1),
              (this.name = this.options.name),
              (this.metadata = this.options.metadata),
              (this.linksOpenKey = this.name + "Open"),
              (this.team = this.options.team),
              (this.template = this.team ? h() : p()),
              (this.attributes.id = this.options.id),
              (this.isOpen = !this.team),
              this.$el.addClass(this.options.class),
              this.listenTo(m, "globalEvent:esc", this.hidePopup),
              this.listenTo(m, "globalEvent:toggleQuicklinks", this.toggleShow),
              this.listenTo(this.collection, "remove", this.checkOptionalLinks),
              this.listenTo(this.collection, "change", this.handleDelete),
              this.listenTo(this.collection, "add", this.added),
              this.listenTo(this.collection, "reset refresh", this.collectionReset),
              this.listenTo(this.collection, "error", this.collectionError),
              this.listenTo(m.models.customization, "change:linksVisible", this.visibleChanged),
              this.listenTo(m.models.customization, "change:linksKeepOpen", this.keepOpenChanged),
              this.listenTo(m.models.bookmarksSettings, "change:appsLocation", this.checkOptionalLinks),
              this.listenTo(m.models.bookmarksSettings, "change:chromeTabLocation", this.checkOptionalLinks),
              this.listenTo(m, "globalEvent:window:resize", this.handleResize),
              this.listenTo(m, "appsReady", this.appsLoaded),
              this.listenTo(m, "destroyWidget:quicklinks", this.destroy),
              this.$el.clickOutside(this, this.hidePopup),
              this.render(),
              this.setHeightLimit(),
              this.doFetchIfNeeded(),
              (this.notFoundIcon = ""),
              m.utils.isChrome() &&
                void 0 !== m.utils.getBrowser().topSites &&
                $.ajax({ url: "chrome://favicon/size/16@2x/http://notfoundurl.com" }).done(function (e) {
                  t.notFoundIcon = e;
                });
          },
          initializeResizeSensor: function () {
            this.resizeSensor && this.resizeSensor.detach(),
              (this.resizeSensor = new ResizeSensor(
                this.$linkUrls,
                function () {
                  this.$linkUrlsWrapper.css("height", this.$linkUrls[0].clientHeight);
                }.bind(this)
              ));
          },
          deleteGroup: function () {
            this.activeModel && this.activeModel.delete(), this.showMain(), this.toggleDropdown();
          },
          handleDelete: function (t) {
            if (t && this.activeModel && t.get("parentLinkId") === this.activeModel.id && (t.changed.deleted || t.get("deleted"))) {
              this.clearUrl();
              let t = this.$el.find(".new-group-url");
              t.addClass("active"), t.focus();
            }
            t && t.changed.deleted && (this.checkOptionalLinks(), this.team && this.isOpen && this.setAppPosition());
          },
          toggleDropdown: function (t) {
            let e;
            t ? ((e = $(t.delegatedTarget).parent()), e.toggleClass("active", !this.dropdownOpen)) : (e = this.$el),
              e.find(".more").toggleClass("active", !this.dropdownOpen),
              (this.dropdownOpen = !this.dropdownOpen);
          },
          checkOptionalLinks: function () {
            let t = this;
            this.$el.find(".optional-link").each(function (e, i) {
              t.checkInclusion(i);
            }),
              this.updateFirstLink(),
              this.toggleEmptyState(this.checkEmpty()),
              this.team && this.$app.toggleClass("no-extra", !this.checkLinksInMoreDropdown());
          },
          updateFirstLink: function () {
            this.$el.find("li").removeClass("first-link"),
              this.$el.find(".optional-link.show").first().addClass("first-link"),
              0 === this.$el.find(".first-link").length &&
                this.$el.find(".links-app li").not(".optional-link").first().addClass("first-link");
          },
          checkEmpty: function () {
            let t = this;
            return (
              !this.$el.find(".optional-link.show").length &&
              (0 === this.collection.size() ||
                this.collection.every(function (e) {
                  return e.get("isRoot") || e.get("deleted") || e.get("draft") || e.get("type") === t.LinkType.Link;
                }))
            );
          },
          checkLinksInMoreDropdown: function () {
            return this.collection.some(function (t) {
              return !t.get("parentLinkId") && !t.get("pinned") && !t.get("deleted");
            });
          },
          toggleEmptyState: function (t) {
            if (!this.collection.everLoaded()) return;
            this.$el.toggleClass("is-empty", t),
              this.$el.find(".links-lists").mToggle("block", !t),
              this.$el
                .find(".links-lists")
                .toggleClass("is-empty-has-pinned", "" === this.$el.find(".links-list").val() && this.hasPinned()),
              this.$el.find(".footer-input").mToggle("flex", !t);
            let e = this.getLinkDropdownText();
            this.$moreLinksDropdownIcon.mToggle("unset", e === this.DropdownTitles.HAS_PINNED),
              this.$moreLinksButton.text(e),
              this.$el.toggleClass("no-pinned", !this.hasPinned()),
              this.$el.closest(".top-left").toggleClass("links-empty", t);
          },
          checkInclusion: function (t) {
            let e = m.models.bookmarksSettings,
              i = $(t);
            i.toggleClass("show", e.get(i.attr("data-momo-id") + "Location") === i.attr("data-place"));
          },
          addPlaceholder: function () {
            "second" === this.currentSubview
              ? (this.$placeholder = $("<li><a>&nbsp;</a></li>").addClass("placeholder"))
              : (this.$placeholder = $('<li><div class="link-wrapper"><a>&nbsp;</a></li>').addClass("placeholder")),
              this.$placeholder.appendTo(this.el);
          },
          removePlaceholder: function () {
            this.$placeholder && (this.$placeholder.remove(), (this.$placeholder = void 0));
          },
          getLinkDropdownText: function () {
            return this.checkEmpty()
              ? this.DropdownTitles.EMPTY_STATE
              : this.hasPinned()
              ? this.DropdownTitles.HAS_PINNED
              : this.DropdownTitles.NO_PINNED;
          },
          hasPinned: function () {
            return this.collection.some(function (t) {
              return !t.get("parentLinkId") && t.get("pinned");
            });
          },
          render: function () {
            let t = this.getLinkDropdownText(),
              e = { isPlus: this.isPlusUser, isChrome: m.utils.isChrome(), moreDropdownText: t, addGroup: g() };
            return (
              this.$el.hasClass("app") && ((this.$el[0].style.width = ""), (this.$el = this.$el.closest(".links"))),
              (this.$app = this.$el.find(".app")),
              this.$el.hasClass("app") ? (this.$app = this.$el) : this.team || (this.$app = this.$el.find(".app")),
              this.team ? (this.$el.html(this.template(e)), (this.$app = this.$el.find(".app"))) : this.$app.html(this.template(e)),
              (this.$baseLinks = this.$(".team-dash-links").first()),
              (this.$popupPinnedLinks = this.$(".pinned-links-list")),
              (this.$appWrapper = this.$el.find(".app-wrapper")),
              (this.$subviews = this.$(".subviews")),
              (this.$linkUrls = this.$(".link-urls")),
              (this.$linkUrlsWrapper = this.$(".link-urls-wrapper")),
              this.$app.css("height", "auto"),
              (this.$otherLinks = this.$app.find(".links-main ol").not(".pinned-links-list")),
              (this.renderedOnce = !0),
              this.keepOpenEnabled() && "true" === localStorage.getItem(this.linksOpenKey) && this.showPopup(),
              (this.$moreLinksButton = this.$(".more-links")),
              (this.$moreLinksDropdownIcon = this.$(".more-links-wrapper .icon")),
              this.$app.toggleClass("no-extra", !this.checkLinksInMoreDropdown()),
              this.$el.toggleClass("no-pinned", !this.hasPinned()),
              this.team && !this.loadTriggered && (m.widgetManager.appReady(this.metadata.id), (this.loadTriggered = !0)),
              m.reactive.appsReady && this.$el.find(".subviews").removeClass("no-transition"),
              this.initializeResizeSensor(),
              this
            );
          },
          destroy: function () {
            this.$el.unbindClickOutside(), this.remove(), this.unbind();
          },
          keepOpenChanged: function () {
            this.hidePopup();
          },
          visibleChanged: function () {
            if (m.models.customization.get("linksVisible"))
              this.renderedOnce ? (this.$el.mFadeIn(), this.$el.addClass("app-container")) : this.render();
            else {
              let t = this;
              this.$el.mFadeOut(null, null, function () {
                t.$el.removeClass("app-container");
              });
            }
          },
          doFetch: function () {
            (this.initialFetchStarted = !0), this.collection.fetch({ reset: !0 });
          },
          doFetchIfNeeded: function () {
            this.initialFetchStarted || this.doFetch();
          },
          switchTo: function (t) {
            let e = this;
            switch (
              ((this.switching = this.isOpen && this.currentSubview !== t),
              this.switching &&
                (this.$el.addClass("disable-smooth-height"),
                this.$subviews.css("height", Math.min(this.$subviews[0].clientHeight, this.heightLimit)),
                this.$el.addClass("hide-scroll")),
              this.$subviews.removeClass("first second").addClass(t),
              (this.currentSubview = t),
              t)
            ) {
              case "first":
                this.activeViewElement = this.$subviews.children()[0];
                break;
              case "second":
                this.activeViewElement = this.$subviews.children()[1];
            }
            this.switching &&
              (this.$subviews.css("height", Math.min(this.activeViewElement.scrollHeight, this.heightLimit)),
              setTimeout(function () {
                (e.switching = !1), e.$subviews.css("height", ""), e.$el.removeClass("hide-scroll disable-smooth-height");
              }, 300));
          },
          addUrl: function (t) {
            let e = new r({ model: t, parent: this, noIcon: !0, draft: !0 });
            this.$el.find(".urls").append(e.render().$el);
          },
          handleBack: function (t) {
            t && (t.preventDefault(), t.stopPropagation()), this.dashDetail ? this.toggleShow() : this.showMain();
          },
          showMain: function (t) {
            t && (t.preventDefault(), t.stopPropagation()), this.dropdownOpen && this.toggleDropdown(), this.switchTo("first");
          },
          clearUrl: function () {
            this.$el.find(".new-url").val("");
          },
          clearAdd: function () {
            this.$el.find(".new-title").val(""), this.$el.find(".links-add .urls").html(""), this.clearUrl();
          },
          showAddGroup: function () {
            (this.activeModel = null),
              this.$el.find(".new-group-url").addClass("active"),
              this.clearAdd(),
              this.$el.find(".links-add").removeClass("editing");
            let t = this;
            return (
              this.switchTo("second"),
              setTimeout(function () {
                t.$el.find(".new-group-title").trigger("focus");
              }, 300),
              !0
            );
          },
          collectionReset: function () {
            this.addAll();
          },
          added: function (t) {
            t.get("type") === this.LinkType.Link ||
              t.get("draft") ||
              t.get("isRoot") ||
              (this.addOne(t), this.checkOptionalLinks(), this.team && this.setAppPosition());
          },
          addOne: function (t) {
            if (t.get("draft") && t.get("type") === this.LinkType.LinkGroup) return;
            let e;
            this.team && t.get("pinned") && !this.showPinnedInPopup
              ? (e = this.$baseLinks)
              : ((e = this.showPinnedInPopup && t.get("pinned") ? this.$popupPinnedLinks : this.$otherLinks),
                this.team &&
                  !this.moreIsSet &&
                  (this.$moreLinksButton.addClass("active"),
                  this.$moreLinksButton.css("top", 30 + this.$el.height() - this.$moreLinksButton.height() / 2 + "px")));
            let i = new r({ model: t, parent: this, noIcon: e === this.$baseLinks });
            this.subViews.push(i), e.append(i.render().$el);
          },
          addAll: function () {
            (this.offline = !1),
              _.each(this.subViews, function (t) {
                t && t.destroy && t.destroy();
              }),
              (this.subViews = []);
            let t = this,
              e = this.collection.getHierarchy(),
              i = 0;
            e.map(function (t) {
              if (!t.get("title")) return;
              let e = t.get("title").length;
              e > i && (i = e);
            });
            let n = i < 22 ? "" : i < 29 ? "wide" : i < 35 ? "wider" : "widest";
            this.$el.addClass(n),
              e.map(function (e) {
                t.addOne(e);
              }),
              this.hasPinned() || this.$el.addClass("no-pinned"),
              this.checkOptionalLinks(),
              this.team && !this.isOpen && this.setAppPosition(),
              this.loadTriggered || (m.trigger(this.metadata.id + ":loadedComplete"), (this.loadTriggered = !0)),
              this.$el.find(".loading-message").mToggle("block", !this.collection.everLoaded()),
              this.$el.find(".app").first().css("height", "auto");
          },
          setAppPosition: function () {
            let t = this,
              e = this.$el.find(".team-dash-links-wrapper"),
              i = e.height() + e.offset().top - this.$appWrapper.parent().offset().top;
            i > 20
              ? this.$appWrapper.css({ top: i + 8 + "px", left: 0 })
              : setTimeout(function () {
                  t.setAppPosition();
                }, 100);
          },
          confirmCreate: function () {
            let t = this.$el.find(".new-group-title").val().trim();
            if (!t || 0 === t.length) return void this.pulse(".new-group-title");
            let e = this.$el.find(".new-group-url").val();
            this.validateAndEnsureUrlScheme(e)
              ? (e && e.length && this.saveUrl(),
                this.activeModel && 0 !== this.activeModel.sublinks.length
                  ? (this.collection.confirmCreate(this.activeModel),
                    this.addAll(),
                    this.showMain(),
                    this.analytics.capture(this.getModelType(this.activeModel) + " add", {
                      is_paid_event: "tab group" === this.getModelType(this.activeModel)
                    }))
                  : this.pulse(".new-group-url"))
              : this.pulse(".new-group-url");
          },
          confirmUpdate: function () {
            let t = this.$el.find(".new-group-url").val();
            (0 === t.length &&
              this.activeModel.sublinks.every(function (t) {
                return t.get("draftDeleted");
              })) ||
            !this.validateAndEnsureUrlScheme(t)
              ? this.pulse(".new-group-url")
              : (t && t.length && this.saveUrl(),
                this.activeModel.sublinks.slice(0).map(function (t) {
                  t.get("draftDeleted") ? t.delete() : t.get("draft") && t.save("draft", !1);
                }),
                this.addAll(),
                this.showMain(),
                this.analytics.capture(this.getModelType(this.activeModel) + " edit", {
                  is_paid_event: "tab group" === this.getModelType(this.activeModel)
                }));
          },
          setHeightLimit: function () {
            const t =
              m.reactive.windowDimensions.width >= m.constants.mobileMaxWidth
                ? $(".top-left").height() + $(".bottom-center").height()
                : m.constants.mobileTopOrBottomClearance;
            let e = $(".team-dash-links-wrapper").height(),
              i = $(".bookmarks-wrapper"),
              n = 0;
            i.css("transform") && (n = parseInt(i.css("height")) - parseInt(i.css("transform").split(",")[5] || 0)),
              (this.heightLimit = document.body.getBoundingClientRect().height - (t + n + (e || 0) + 4)),
              this.$subviews.css("max-height", this.heightLimit);
          },
          handleNameKeyUp: function (t) {
            if (t && 27 === t.keyCode) return t.stopPropagation(), (this.escPressed = !0), void $(t.delegatedTarget).trigger("blur");
            (t && 13 !== t.keyCode) || (this.saveTitle(t), $(t.delegatedTarget).trigger("blur"));
          },
          saveTitle: function (t) {
            if (this.escPressed) return void (this.escPressed = !1);
            let e = this.$el.find(".new-group-title").val();
            if ((e && (e = e.trim()), !e || 0 === e.length)) return;
            t.stopPropagation(), t.preventDefault();
            let i = this.activeModel,
              n = this.$(".new-group-url"),
              s = n.val();
            i ? i.save("title", e) : s && 0 !== s.length && this.isPlusUser ? this.saveLinkGroup(t) : n.trigger("focus");
          },
          saveUrlByClick: function (t) {
            t.stopPropagation();
            let e = this.$el.find(".new-group-url");
            this.isPlusUser
              ? e.is(":visible")
                ? this.saveUrl()
                : (e.addClass("active"), e.trigger("focus"))
              : m.cmd("modal.open", "UPSELL_TAB_GROUPS", { eventSource: "dash" });
          },
          saveUrl: function (t) {
            if (t && 27 === t.keyCode) return t.stopPropagation(), void $(t.delegatedTarget).trigger("blur");
            if (t && 13 !== t.keyCode) return;
            let e = this.activeModel;
            if (!e) return void this.saveLinkGroup(t);
            let i = this.$el.find(".new-group-url"),
              n = i.val(),
              s = this;
            0 !== n.length && this.validateAndEnsureUrlScheme(n)
              ? (this.collection.create(s.createUrl(n, this.activeModel), {
                  success: function (t) {
                    e.sublinks.push(t), e.get("linksOrder").push(t.get("id") || t.get("csid")), (t.group = e), s.addUrl(t);
                  }
                }),
                this.clearUrl(),
                i.focus(),
                this.$el.find(".urls li").filter(":visible").length && !this.isPlusUser && i.removeClass("active"))
              : this.pulse(".new-group-url");
          },
          createUrl: function (t, e) {
            let i,
              n = 0;
            return (
              e && e.sublinks && e.sublinks.length > 0 && (i = e.sublinks[e.sublinks.length - 1]),
              i && (n = i.get("order") + 10),
              {
                title: null,
                url: m.utils.ensureUrlScheme(t),
                local: /^chrome|chrome-extension|chrome-search:\/\//i.test(t),
                csid: m.utils.uuidv4(),
                parentLinkId: e ? e.get("id") || e.get("csid") : null,
                unsyncable: !!e && !e.get("id"),
                position: e && e.sublinks ? e.sublinks.length - 1 : 0,
                type: e ? this.LinkType.Link : this.LinkType.LinkGroup,
                order: n,
                draft: !0
              }
            );
          },
          saveLinkGroup: function (t) {
            t && t.preventDefault && (t.stopImmediatePropagation(), t.preventDefault()), (this.activeModel = null);
            let e = this.$el.find(".new-group-url"),
              i = this.$el.find(".new-group-title").val();
            i && (i = i.trim());
            let n = e.val(),
              s = this;
            if (0 === n.length || !this.validateAndEnsureUrlScheme(n)) return void this.pulse(".new-group-url");
            let l = 0;
            this.collection.length > 0 &&
              (l =
                this.collection
                  .max(function (t) {
                    return t.get("order");
                  })
                  .get("order") + 100),
              this.collection.create(
                { title: i, linksOrder: [], order: l, type: this.LinkType.LinkGroup, draft: !0 },
                {
                  success: function (i) {
                    i
                      ? ((s.activeModel = i),
                        s.collection.create(s.createUrl(n, i), {
                          success: function (n) {
                            (i.sublinks = [n]),
                              (i.group = i),
                              s.addUrl(n),
                              i.get("linksOrder").push(n.get("id") || n.get("csid")),
                              s.clearUrl(),
                              1 === i.getActiveSublinks().length && t && "keyup" === t.type ? e.removeClass("active") : e.focus();
                          }
                        }))
                      : s.pulse(".new-group-url");
                  }
                }
              );
          },
          pulse: function (t) {
            let e = this;
            this.$el.find(t).trigger("focus"),
              this.$el.find(t).addClass("pulse"),
              _.delay(function () {
                e.$el.find(t).removeClass("pulse");
              }, 1e3);
          },
          showDetail: function (t, e) {
            if (e)
              if (this.isOpen) $.contains(this.$el.find(".links-app")[0], e.target) || this.toggleShow();
              else {
                $(e.delegatedTarget).closest("li").addClass("active");
                let t = this.$el.find(".subviews");
                t.addClass("no-transition"),
                  setTimeout(function () {
                    t.removeClass("no-transition");
                  }, 10),
                  this.showPopup(!0);
              }
            this.activeModel = t;
            let i = this;
            this.clearAdd();
            let n = this.$el.find(".links-add .new-group-title");
            n.val(t.get("title")),
              t.getActiveSublinks().map(function (t) {
                i.addUrl(t);
              }),
              this.$el.find(".links-add").addClass("editing"),
              this.$el.find(".new-group-url").removeClass("active"),
              this.switchTo("second"),
              setTimeout(function () {
                n.trigger("focus");
              }, 300);
          },
          handleDragStart: function (t) {
            (this.dragmode = "quicklink"), (this.dragging = t), this.updateFirstLink();
          },
          dragover: function (t) {
            return t.preventDefault(), t.stopPropagation(), (t.originalEvent.dataTransfer.dropEffect = "move"), this.updateFirstLink(), !1;
          },
          drop: function (t) {
            t.preventDefault(), t.stopPropagation(), this.checkOptionalLinks();
          },
          dragend: function (t) {
            if (
              ((t.originalEvent.dataTransfer.dropEffect = "move"), t.preventDefault(), t.stopPropagation(), "quicklink" === this.dragmode)
            ) {
              let e = this.dragging.model,
                i = t.target.closest("ol").classList.contains("more-links-list") && e.get("pinned"),
                n = t.target.closest("ol").classList.contains("team-dash-links") && !e.get("pinned");
              (n || i) && e.save("pinned", n), this.dragging.$el.css("display", "list-item"), this.removePlaceholder();
              let s = e.collection.serverIdAttribute,
                l = e.collection.idAttribute,
                o = this.collection.offlineOnly ? l : s;
              this.collection.trigger("reorder", {
                moveId: e.get(o) || e.get(l),
                moveTargetId: this.moveTargetId,
                moveOffset: this.moveOffset,
                inEdit: $(t.target).closest(".links-add").length > 0
              });
            }
            return this.checkOptionalLinks(), !1;
          },
          toggleHandler: function (t) {
            return this.toggleShow(t, !0);
          },
          toggleShow: function (t, e) {
            return (
              this.isOpen
                ? this.hidePopup(t, e)
                : (this.analytics.capture("app show", { feature: "links", method: t instanceof MouseEvent ? "click" : "hotkey" }),
                  this.showPopup()),
              this.doFetchIfNeeded(),
              this.isOpen
            );
          },
          showPopup: function (t) {
            if (
              (this.setHeightLimit(),
              (this.dashDetail = !!t),
              (this.isOpen = !0),
              localStorage.setItem(this.linksOpenKey, "true"),
              this.$el.addClass("show").width(),
              this.$el.addClass("show-fade-in"),
              !t)
            ) {
              this.team && this.setAppPosition();
              let t = this.$el.find(".subviews");
              t.addClass("no-transition"),
                setTimeout(function () {
                  t.removeClass("no-transition");
                }, 10),
                this.showMain();
            }
          },
          forceHidePopup: function (t) {
            this.dashDetail = !1;
            let e = this;
            (this.isOpen = !1),
              t || this.$el.find(".team-dash-links > li").removeClass("active"),
              localStorage.setItem(this.linksOpenKey, "false"),
              this.$el.removeClass("show-fade-in").on("transitionend webkitTransitionEnd", function t() {
                $(this).off("transitionend webkitTransitionEnd", t), e.$el.hasClass("show-fade-in") || e.$el.removeClass("show");
              });
          },
          hidePopup: function (t, e) {
            if (t === this || (t && t.target && $.contains(this.$el[0], t.target) && !e)) return;
            this.$el.removeClass("active");
            let i = this;
            setTimeout(function () {
              i.showMain();
            }, 50),
              ((this.isOpen && !this.keepOpenEnabled()) || e) && this.forceHidePopup(),
              this.toggleLinkEllipsis(null, !0);
          },
          keepOpenEnabled: function () {
            return !m.utils.isTouchDevice() && m.models.customization.get("linksKeepOpen");
          },
          handleClick: function (t) {
            t.stopPropagation(), t.preventDefault();
            let e = t.delegatedTarget.href;
            const i = t.delegatedTarget.getAttribute("data-analytics-id");
            i && this.analytics.capture(i + " click"),
              m.models.bookmarksSettings.get("openInNewTab") || t.metaKey
                ? m.utils.getBrowser().tabs.create({ url: e, active: !1 })
                : m.utils.getBrowser().tabs.update({ url: e });
          },
          li_index: function (t) {
            return this.$("li").index(t);
          },
          appsLoaded: function () {
            this.handleResize();
            let t = this.$el.find(".subviews");
            setTimeout(function () {
              t.removeClass("no-transition");
            }, 10);
          },
          handleResize: function () {
            this.isOpen && this.setHeightLimit();
          },
          toggleLinkEllipsis: function (t, e) {
            m.utils.isTouchDevice() &&
              (e ? this.$el.find(".links-list").removeClass("show-more") : this.$el.find(".links-list").toggleClass("show-more"));
          },
          validateAndEnsureUrlScheme: (t) => !t || m.utils.isValidUrl(m.utils.ensureUrlScheme(t)),
          getModelType: (t) => (t.sublinks && t.sublinks.length > 1 ? "tab group" : "link")
        }),
        k = JSON.parse(
          '{"widget":true,"webpack":true,"id":"quicklinks","feature":"links","class":"links","label":"Links","appClass":"links-app calculates-own-max-height","region":"top-left","order":"prepend","width":260,"openState":"LinksOpen","keepOpenSetting":"linksKeepOpen","placeholderType":"pane","requiredFeature":"legacy","addin":"ad54d482-248b-4abf-b5b0-a8eaf3e89132","storedHeight":"links-height","toggleEvent":"globalEvent:key:L","closeOnEsc":"true","visibleSetting":"linksVisible"}'
        );
      i(91743),
        m.widgetManager.handover("quicklinks", null, {
          region: "top-left",
          order: "prepend",
          bootstrap: function (t, e) {
            function i(i) {
              m.models.customization.get("linksVisible") &&
                (e(
                  new f({
                    collection: i,
                    region: "top-left",
                    order: "prepend",
                    name: "Links",
                    team: !1,
                    id: "quicklinks",
                    el: t,
                    metadata: k
                  })
                ),
                m.stopListening(m.models.customization, "change:linksVisible"));
            }
            m.conditionalFeatures.checkFeatureAndMigrateData(
              "serverlinks",
              "linksVisible",
              "momentum-quicklinks",
              function () {
                i(new l(null, { model: s }));
              },
              function () {
                !(function () {
                  let t = localStorage.getItem("momentum-quicklinks");
                  if (!t) return;
                  localStorage.setItem("quicklinks", t);
                  let e = Object.keys(localStorage);
                  for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    if (0 === i.indexOf("momentum-quicklinks") && i.length > 20) {
                      let t = JSON.parse(localStorage.getItem(i));
                      t.csid || ((t.csid = t.id), delete t.id),
                        localStorage.setItem("quicklinks-" + t.csid, JSON.stringify(t)),
                        localStorage.removeItem(i);
                    }
                  }
                  localStorage.removeItem("momentum-quicklinks");
                })(),
                  i(new l(null, { model: s, offlineOnly: !0 }));
              },
              function (t) {
                m.listenTo(m.models.customization, "change:linksVisible", t);
              }
            ),
              m.once("destroyWidget:quicklinks", () => {
                m.views.quicklinks.destroy();
              });
          }
        });
    },
    62706: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => a });
      var n = i(8081),
        s = i.n(n),
        l = i(23645),
        o = i.n(l)()(s());
      o.push([
        t.id,
        ".links { --app-width: 250px; --link-v-padding: 5px; }\n\t.touch .links { --link-v-padding: 10px; }\n\t.soundscapes-popup-active links.show { pointer-events: none; }\n\t/* ^ ensures that clicking the links app dash while soundscapes and links are active closes soundscapes, but not links (which was active, but hidden by soundscapes)\n\tOne side effect of this is that links loses cursor: pointer and I would like to find a way to fix this too, but for now this seems to be the best trade-off */\n\t.links.wide { --app-width: 310px; }\n\t.links.wider { --app-width: 360px; }\n\t.links.widest { --app-width: 410px; }\n\t.links-wrapper { position: absolute; top: 100%; left: 7px; display: none; }\n\t\t.soundscapes-popup-active .links .app-wrapper { display: none !important; }\n\t\t.links-app { width: var(--app-width); min-width: 200px; padding: 0; overflow-y: hidden; transition-property: opacity, height; }\n\t\t\t.links .mobile-close { height: var(--header-height); width: 40px; position: absolute; top: -1px; right: 7px; z-index: 2; align-items: center; justify-content: center; }\n\t\t\t.links .links-lists { display: none; overflow-y: auto; }\n\t\t\t\t.links.is-empty .links-lists { display: none; }\n\t\t\t\t.links .pinned-links-list { display: none; }\n\t\t\t\t.links .pinned-divider { margin: calc(var(--app-padding) - 3px); margin-bottom: 0; margin-right: calc(var(--app-padding) - (var(--app-width) - 100%)); display: none; opacity: 0.5; }\n\t\t\t\t.links .links-list .optional-link { display: none; }\n\t\t\t\t.links .links-list .optional-link.show { display: flex; }\n\n\t\t/* Header -> currently only shows in touch */\n\t\t.links .app-header { height: var(--header-height); padding: 0 var(--app-padding); justify-content: space-between; font-weight: 500; }\n\t\t\t.touch .links .more-toggle { height: 100%; padding-right: 4px !important; }\n\t\t\t.links .mobile-close { margin: 0; margin-right: calc((var(--app-padding) - 7px) * -1); position: static; }\n\n\t\t\t.touch .links .header-right { height: 100%; display: flex; }\n\n\t\t\t\t.touch .links .mobile-add { margin-right: 4px; }\n\n\t\t\t\t.touch .links .mobile-close { align-items: center; }\n\t\t\t\t\t.touch .links .mobile-close .icon-wrapper { --size: 40px; height: var(--size); width: var(--size); margin-right: -13px; margin-left: -10px; display: flex; align-items: center; justify-content: center; }\n\n\t\t\t\t.touch .links .header .icon-wrapper { height: 100%; padding: 13px; }\n\n\t\t\t.links input:hover { opacity: 1; }\n\n\t\t\t.links li { position: relative; }\n\t\t\t\t.links li .link-wrapper { display: flex; justify-content: space-between; }\n\n\t\t\t\t.links li a { min-width: 125px; padding: var(--link-v-padding) calc(var(--app-padding) - 3px); flex: 1 1 auto; display: flex; align-items: center; gap: 5px; opacity: var(--opacity-stop-5); cursor: pointer; font-size: 1rem; line-height: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\t\t\t\t\t.links li a:hover { opacity: 1; }\n\n\t\t\t\t\t.links li .icon-wrapper { padding-right: calc(var(--app-padding) - 2px); opacity: 0; }\n\t\t\t\t\t\t.links li:hover .icon-wrapper { opacity: 1; }\n\t\t\t\t\t\t.touch .links li .icon-wrapper { padding-right: 5px; opacity: 1; }\n\n\t\t\t\t\t.links li.placeholder a { display: inherit; }\n\n\t\t\t\t\tbody:not(.touch) .links .app li:first-child a, body:not(.touch) .links .first-link a, body:not(.touch) .links .first-link .link-wrapper .icon-wrapper { padding-top: calc(var(--app-padding) - 1px); }\n\n\t\t\t\t\t.links .icon-chrome-tab, .links .icon-apps { height: 15px; width: 15px; fill: currentColor; }\n\n\t\t\t\t\t.links .icon-folder-label { width: 16px; padding-right: 4px; position: absolute; z-index: 2; font-size: 8px; font-weight: 700; line-height: 17px; text-align: center; text-transform: uppercase; }\n\n\t\t\t\t\t.links .icon-folder.icon-svg #icon-folder-single { fill: var(--color-icon); }\n\t\t\t\t\t.links .icon-folder.icon-svg #icon-folder-multiple { stroke: var(--color-icon); }\n\t\t\t\t\t\t.links .team-dash-links .icon-folder.icon-svg #icon-folder-single { fill: #fff; }\n\t\t\t\t\t\t.links .team-dash-links .icon-folder.icon-svg #icon-folder-multiple { stroke: #fff; }\n\n\t\t\t\t\t.links .icon-favicon { width: 15px; }\n\n\t\t\t\t\t\t.links.show-message .first-link a { margin-top: -20px; }\n\t\t\t\t\t\t.links .first-link .destroy { top: auto; bottom: 2px; }\n\n\n\t\t\t\t/* Right side ••• area */\n\t\t\t\t.links .more { display: flex; align-items: center; }\n\t\t\t\t\t.touch .links .more { margin-right: calc((var(--app-padding) - 7px)); padding-right: 13px; padding-left: 13px; }\n\t\t\t\t\t\t.touch .links .more .icon-wrapper { display: none; }\n\t\t\t\t\t\t\t.touch .show-more .more .icon-wrapper { display: flex; }\n\n\t\t\t\t\t\t.links li.opening .dropdown-wrapper { opacity: 0; }\n\n\t\t\t\t\t.links .more-toggle { padding: 4px; }\n\t\t\t\t\t\t.touch .links .more-toggle { height: 100%; }\n\t\t\t\t\t\t\t.links .icon-wrapper:after { --icon-wrapper-size: 23px; }\n\n\t\t\t\t\t\t.links .more-dropdown { margin-top: -7px; right: calc(var(--app-padding) - 6px); }\n\t\t\t\t\t\t\t.links li.active .more-dropdown { display: block; }\n\n\t\t\t\t\t/* Read only / Lock icon */\n\t\t\t\t\t.links .has-read-only { pointer-events: none; }\n\t\t\t\t\t\t.links .has-read-only .icon-lock { margin-top: -1px; margin-right: 1px; }\n\n\n\t\t\t\t/* Footer */\n\t\t\t\t.links .footer-input { flex-shrink: 0; display: none; }\n\t\t\t\t\t.touch .links .footer-input { padding-bottom: var(--app-padding); }\n\t\t\t\t\t\t.links .footer-input .new-toggle { padding: 3px calc(var(--app-padding) - 3px) calc(var(--app-padding) - 3px); flex-grow: 1; opacity: 0.4; color: var(--color-text); cursor: pointer; font-size: 1rem; font-weight: 400; line-height: normal; }\n\t\t\t\t\t\t\t.touch .links .footer-input .new-toggle { display: none; }\n\t\t\t\t\t\t\t\t.links .footer-input .new-toggle:hover { opacity: 0.8; }\n\t\t\t\t\t\t\t\t.links .footer-input .new-toggle .icon { opacity: 1; }\n\n\n\n\t\t\t\t.links .new-group-url { display: none; }\n\t\t\t\t\t.links .new-group-url.active { display: block; }\n\n\t\t\t\t.links .button-small .icon { opacity: 1; }\n\n\t\t\t\t.links .new-group-toggle { margin-left: var(--app-padding); margin-bottom: calc(var(--app-padding) - 2px); display: none; }\n\t\t\t\t\t.links .open .new-group-toggle { display: inline-block; }\n\n\t\t\t.links .body > .empty { height: 195px; padding-top: 29px; }\n\t\t\t\t.touch .links .body > .empty { padding-top: 0; }\n\n\t\t\t.links .message { margin: 15px 0 15px; display: none; }\n\t\t\t\t.links.show-message .message { display: block; }\n\t\t\t\t.links.show-message .empty { margin-top: -25px; }\n\n\t\t\t.links .header { flex-shrink: 0; }\n\t\t\t\t.links .header .icon-wrapper { opacity: inherit; }\n\t\t\t\t.links .header .filler { width: 20px; }\n\n\t\t\t.links .unpin, .links .link-pin.active .pin { display: none; }\n\t\t\t.links .link-pin.active .unpin { display: inline-block; }\n\n\t\t\t.links .upsell .hide .icon { opacity: 0.6; }\n\n\n.links .subviews { width: calc(var(--app-width) * 4); }\n\t.links .subviews.no-transition { transition: none; }\n\t.links .subview { width: var(--app-width); display: flex; flex-direction: column; transition: none; }\n\n\t.links .links-main .body { padding: 0; position: relative; display: flex; flex-direction: column; overflow: hidden; }\n\n\t.links-add input { padding-right: 0; padding-left: 0; }\n\t\t.links-add input::placeholder { opacity: 0.4; }\n\n\t.links-add .body { max-height: calc(100% - var(--header-height) - var(--app-padding)); padding: 0 var(--app-padding) var(--app-padding); overflow-y: auto; }\n\n\t\t.links-add .link-urls-wrapper { transition: height 0.3s ease; }\n\t\t.links.disable-smooth-height .links-add .link-urls-wrapper { height: auto !important; }\n\n\t\t\t.links-add .urls { margin: 6px 0 2px; padding: 4px 0; border: 1px solid var(--border-color-low); border-width: 1px 0; }\n\t\t\t\t.links-add .urls:empty { display: none; }\n\t\t\t\t.links-add .urls li a { padding: 4px 0 !important; opacity: 1; }\n\t\t\t\t.links-add .urls li:first-child a { padding-top: 2px; }\n\t\t\t\t.links-add .urls li .destroy, .links-add .urls li .draft-destroy { padding-right: 5px; }\n\t\t\t\t.links-add .urls li .destroy .icon-hide, .links-add .urls li .draft-destroy .icon-hide { --size: 8px; height: var(--size); width: var(--size); }\n\t\t\t\t\t\t.touch .links-add .urls li .destroy .icon-hide, .touch .links-add .urls li .draft-destroy .icon-hide { --size: 11px; height: var(--size); width: var(--size); }\n\t\t\t\t\t.links-add .urls img, .links-add .urls .link-icon-placeholder { display: none; }\n\t\t\t\t\t.links-add .urls .destroy { opacity: 1; font-size: 11px; line-height: 12px; }\n\n\t\t.links-add .add-tab { margin-top: 2px; margin-left: -2px; padding: 5px !important; --color-text: hsl(var(--color-base))!important; }\n\t\t\t.links-add .add-tab .badge { vertical-align: 24%; }\n\n\t\t.links-add .edit-mode { visibility: hidden; }\n\t\t\t.links-add.editing .edit-mode { visibility: visible; }\n\t\t\t.links-add.editing .create { display: none; }\n\t\t\t.links-add.editing .add-mode { visibility: hidden; }\n\n\t\t.links-add .update { display: none; }\n\t\t\t.links-add.editing .update { display: inline-block; }\n\n\n/* Team Links */\n.teamlinks { position: absolute; top: 91px; left: 0; z-index: 4; /* top: Hardcode the position for now just below logo/top left widgets */ /* z-index: Above Apps */ }\n\t.has-no-logo .teamlinks { position: static; }\n\t.teamlinks .app-dash.add-shadow:before { top: 5px; right: 5px; left: 10px; }\n\t.links-add .button.update, .links-add .button.create { margin-top: 18px; }\n\n\t/* On dash links */\n   .teamlinks .more-links-list { overflow: auto; }\n\n\t.teamlinks .pinned { }\n\t\t.teamlinks .pinned .active .icon-wrapper { opacity: 1; }\n\t\t\t.teamlinks .pinned .icon-wrapper { padding-left: 0; }\n\n\t\t.teamlinks .pinned .more-dropdown { padding-left: 0; }\n\t\t\t.teamlinks .pinned .more-dropdown.nipple:after { top: -7px; }\n\n\t/* Dash links */\n\t\t.team-dash-links-wrapper { position: absolute; top: 100%; left: 0; z-index: 1; }\n\t\t\t.has-no-logo .team-dash-links-wrapper { padding-top: 17px; position: static; }\n\t\t\t.has-logo-placeholder .team-dash-links-wrapper { top: calc(100% - 7px); }\n\n\n\t\t/* Link */\n\t\t.team-dash-links li .link-wrapper { justify-content: initial; }\n\t\t\t.team-dash-links li a { min-width: 0; padding: var(--link-v-padding) calc(var(--app-padding) - 10px) var(--link-v-padding) 20px; flex-grow: 0; opacity: 0.85; color: white; font-size: 0.9375rem; font-weight: 400; }\n\t\t\t\t.team-dash-links li a:hover { opacity: 1; }\n\n\t\t\t.team-dash-links li .icon-wrapper { /* display: none; */ }\n\t\t\t\t\t.show .team-dash-links li:hover .icon-wrapper { opacity: 1; }\n\n\t\t\t\t.team-dash-links li a img { display: none; }\n\n\t\t/* ••• */\n\t\t.team-dash-links .icon-wrapper:hover:after { background: rgba(255,255,255,0.12); }\n\n\t\t.team-dash-links .more-dropdown { margin-top: 8px; right: auto; left: -14px; color: var(--color-text); }\n\t\t\t.team-dash-links .dropdown-wrapper .icon-wrapper { padding-top: 0; padding-bottom: 0; }\n\t\t\t\t.team-dash-links .icon-hide { fill: #fff; }\n\n\n\t\t/* MORE LINKS */\n\t\t.teamlinks .more-links-wrapper { display: flex; align-items: baseline; opacity: 0; cursor: pointer; }\n\t\t\t.team-dropdown-open .teamlinks:hover .more-links-wrapper { display: none; }\n\n\t\t\t.top-left:hover .more-links-wrapper, .touch .more-links-wrapper { opacity: 0.8; }\n\t\t\t.teamlinks .more-links-wrapper:hover { opacity: 1; }\n\t\t\t.teamlinks.show-fade-in .more-links-wrapper { opacity: 0.9; } /* active */\n\n\t\t\t.teamlinks .more-links-wrapper .more-links { padding: var(--link-v-padding) 2px 10px var(--dash-side-margin); display: block; font-size: 0.9375rem; line-height: 1; white-space: nowrap; }\n\t\t\t.teamlinks .more-links-wrapper .icon-angle-down\t{ display: none; font-size: 0.875rem; }\n\n\n\t/* Team Links Popup */\n\t.teamlinks .app-wrapper { position: absolute; z-index: 5; transition-property: opacity, height, transform; }\n\n\t\t.teamlinks .app { }\n\t\t\t.teamlinks .app li a { }\n\t\t\t\t.teamlinks .links-main li:first-child a, .teamlinks .links-main li:first-child .icon-wrapper { padding-top: calc(var(--app-padding) - 3px); } /* Fix first link in Links dropdown */\n\n\t\t\t\t.team-dash-links li a img { display: none; }\n\n\n@media screen and (max-width: 450px) {\n\t.links { --app-width: 300px !important; }\n\t\t.links-app { left: var(--app-offset) !important; }\n\n\t.teamlinks { top: 75px; z-index: 1; /* top: We shrunk logo max-height by 10px so shrinking this correspondingly */ /* z-index: Ensure that Links doesn't overlay Notes or other popups */ }\n\t\t.team-dash-links { display: none; }\n\n\t.teamlinks:not(.no-pinned) .pinned-links-list, .teamlinks:not(.no-pinned) .pinned-divider { display: block; }\n}\n",
        ""
      ]);
      const a = o;
    },
    66254: (t, e, i) => {
      var n = i(40202);
      t.exports = (n.default || n).template({
        1: function (t, e, i, n, s) {
          return '<span class="badge badge-plus">PLUS</span>';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, n, s, l) {
          var o,
            a,
            r = null != e ? e : t.nullContext || {},
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="subview links-add">\n\t<header class="header">\n\t\t<span class="control icon-wrapper back"><i class="icon icon-left"></i></span>\n\n\t\t<div class="edit-mode controls">\n\t\t\t<div class="control more">\n\t\t\t\t<div class="icon-wrapper more-toggle">\n\t\t\t\t\t' +
            (null !=
            (o = ((a = i(69023)), a && (a.__esModule ? a.default : a)).call(r, {
              name: "iconEllipsis",
              hash: {},
              data: l,
              loc: { start: { line: 8, column: 5 }, end: { line: 8, column: 25 } }
            }))
              ? o
              : "") +
            '</div>\n\n\t\t\t\t<div class="dropdown more-dropdown">\n\t\t\t\t\t<ul class="dropdown-list">\n\t\t\t\t\t\t<li class="dropdown-list-item delete">Delete</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<div class="body">\n\t\t<div class="input-group">\n\t\t\t<label>Name</label>\n\t\t\t<input type="text" id="new-title" class="new-title new-group-title" autocomplete="off">\n\t\t</div>\n\t\t<div class="link-urls-wrapper">\n\t\t\t<div class="link-urls">\n\t\t\t\t<label>Links</label>\n\t\t\t\t<ol class="urls"></ol>\n\n\t\t\t\t<input type="text" id="new-url" class="new-url new-group-url" placeholder="example.com" autocapitalize="off" autocomplete="off" autocorrect="off">\n\n\t\t\t\t<div class="button button-small button-clear add-tab">\n\t\t\t\t\t<span class="button-label">\n\t\t\t\t\t\t<svg class="icon icon-plus" viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>\n\t\t\t\t\t\tAdd another tab\n\t\t\t\t\t</span>\n\t\t\t\t\t' +
            (null !=
            (o = d(n, "unless").call(r, null != e ? d(e, "isPlus") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, l, 0),
              inverse: t.noop,
              data: l,
              loc: { start: { line: 36, column: 5 }, end: { line: 36, column: 76 } }
            }))
              ? o
              : "") +
            '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<span class="button create" data-test="link-save">Create</span>\n\t\t\t<span class="button update" data-test="link-update">Save</span>\n\t\t</div>\n\t</div>\n</div>\n'
          );
        },
        useData: !0
      });
    },
    31410: (t, e, i) => {
      var n = i(40202);
      t.exports = (n.default || n).template({
        1: function (t, e, i, n, s) {
          return " has-dash-icon pinned";
        },
        3: function (t, e, i, n, s) {
          return " has-more";
        },
        5: function (t, e, i, n, s) {
          var l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return 'title="' + t.escapeExpression(t.lambda(null != e ? l(e, "summaryText") : e, e)) + '"';
        },
        7: function (t, e, i, n, s) {
          return ' class="local"';
        },
        9: function (t, e, i, n, s) {
          var l,
            o =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return null !=
            (l = o(i, "if").call(null != e ? e : t.nullContext || {}, null != e ? o(e, "hasUrls") : e, {
              name: "if",
              hash: {},
              fn: t.program(10, s, 0),
              inverse: t.program(12, s, 0),
              data: s,
              loc: { start: { line: 5, column: 3 }, end: { line: 13, column: 10 } }
            }))
            ? l
            : "";
        },
        10: function (t, e, i, n, s) {
          var l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return (
            '\t\t\t\t<span class="icon-folder-label">' +
            t.escapeExpression(t.lambda(null != e ? l(e, "iconLabel") : e, e)) +
            '</span><svg class="icon-svg icon-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 23"><g fill="none" fill-rule="evenodd"><path id="icon-folder-single" d="M22 20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6.5a2 2 0 0 1 1.787 1.1l.81 1.62a.5.5 0 0 0 .448.28H22a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2zM8.191 2H2.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H11.236a2 2 0 0 1-1.788-1.1l-.81-1.619A.5.5 0 0 0 8.191 2z"; fill-rule="nonzero"/><path id="icon-folder-multiple" d="M26.24 9.2v11.591c0 .63-.512 1.143-1.142 1.143H9.3" stroke-linecap="round" stroke-linejoin="round"/></g></svg>\n'
          );
        },
        12: function (t, e, i, n, s) {
          var l,
            o =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return null !=
            (l = o(i, "if").call(null != e ? e : t.nullContext || {}, null != e ? o(e, "favicon_url") : e, {
              name: "if",
              hash: {},
              fn: t.program(13, s, 0),
              inverse: t.program(15, s, 0),
              data: s,
              loc: { start: { line: 8, column: 4 }, end: { line: 12, column: 11 } }
            }))
            ? l
            : "";
        },
        13: function (t, e, i, n, s) {
          var l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return (
            '\t\t\t\t\t<img class="icon-favicon" src="' + t.escapeExpression(t.lambda(null != e ? l(e, "favicon_url") : e, e)) + '">\n'
          );
        },
        15: function (t, e, i, n, s) {
          return '\t\t\t\t\t<span class="link-icon-placeholder">&nbsp;</span>\n';
        },
        17: function (t, e, i, n, s) {
          var l,
            o = null != e ? e : t.nullContext || {},
            a =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            (null !=
            (l = a(i, "unless").call(o, null != e ? a(e, "readOnly") : e, {
              name: "unless",
              hash: {},
              fn: t.program(18, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 18, column: 2 }, end: { line: 46, column: 13 } }
            }))
              ? l
              : "") +
            (null !=
            (l = a(i, "if").call(o, null != e ? a(e, "readOnly") : e, {
              name: "if",
              hash: {},
              fn: t.program(35, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 47, column: 2 }, end: { line: 53, column: 9 } }
            }))
              ? l
              : "")
          );
        },
        18: function (t, e, i, n, s) {
          var l,
            o =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return null !=
            (l = o(i, "if").call(null != e ? e : t.nullContext || {}, null != e ? o(e, "noMenu") : e, {
              name: "if",
              hash: {},
              fn: t.program(19, s, 0),
              inverse: t.program(24, s, 0),
              data: s,
              loc: { start: { line: 19, column: 3 }, end: { line: 45, column: 10 } }
            }))
            ? l
            : "";
        },
        19: function (t, e, i, n, s) {
          var l,
            o =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t\t\t\t<div class="icon-wrapper ' +
            (null !=
            (l = o(i, "if").call(null != e ? e : t.nullContext || {}, null != e ? o(e, "editing") : e, {
              name: "if",
              hash: {},
              fn: t.program(20, s, 0),
              inverse: t.program(22, s, 0),
              data: s,
              loc: { start: { line: 20, column: 29 }, end: { line: 20, column: 79 } }
            }))
              ? l
              : "") +
            '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" class="icon icon-hide"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg></div>\n'
          );
        },
        20: function (t, e, i, n, s) {
          return "draft-destroy";
        },
        22: function (t, e, i, n, s) {
          return "destroy";
        },
        24: function (t, e, n, s, l) {
          var o,
            a,
            r = null != e ? e : t.nullContext || {},
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\t\t\t\t<div class="more' +
            (null !=
            (o = d(n, "if").call(r, null != e ? d(e, "pinned") : e, {
              name: "if",
              hash: {},
              fn: t.program(25, l, 0),
              inverse: t.noop,
              data: l,
              loc: { start: { line: 22, column: 20 }, end: { line: 22, column: 51 } }
            }))
              ? o
              : "") +
            '">\n\t\t\t\t\t<div class="icon-wrapper more-toggle' +
            (null !=
            (o = d(n, "if").call(r, null != e ? d(e, "pinned") : e, {
              name: "if",
              hash: {},
              fn: t.program(27, l, 0),
              inverse: t.noop,
              data: l,
              loc: { start: { line: 23, column: 41 }, end: { line: 23, column: 80 } }
            }))
              ? o
              : "") +
            '">\n\t\t\t\t\t\t' +
            (null !=
            (o = ((a = i(69023)), a && (a.__esModule ? a.default : a)).call(r, null != e ? d(e, "ellipsisIconClass") : e, {
              name: "iconEllipsis",
              hash: {},
              data: l,
              loc: { start: { line: 24, column: 6 }, end: { line: 24, column: 44 } }
            }))
              ? o
              : "") +
            '\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="dropdown more-dropdown ' +
            (null !=
            (o = d(n, "if").call(r, null != e ? d(e, "pinned") : e, {
              name: "if",
              hash: {},
              fn: t.program(29, l, 0),
              inverse: t.noop,
              data: l,
              loc: { start: { line: 26, column: 40 }, end: { line: 26, column: 101 } }
            }))
              ? o
              : "") +
            '">\n\t\t\t\t\t\t<ul class="dropdown-list">\n' +
            (null !=
            (o = d(n, "if").call(r, null != e ? d(e, "showPinOption") : e, {
              name: "if",
              hash: {},
              fn: t.program(31, l, 0),
              inverse: t.noop,
              data: l,
              loc: { start: { line: 28, column: 7 }, end: { line: 33, column: 14 } }
            }))
              ? o
              : "") +
            (null !=
            (o = d(n, "if").call(r, null != e ? d(e, "isGroup") : e, {
              name: "if",
              hash: {},
              fn: t.program(33, l, 0),
              inverse: t.noop,
              data: l,
              loc: { start: { line: 34, column: 7 }, end: { line: 38, column: 14 } }
            }))
              ? o
              : "") +
            '\t\t\t\t\t\t\t<li class="dropdown-list-item destroy">\n\t\t\t\t\t\t\t\t<span class="item-label">Delete</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n'
          );
        },
        25: function (t, e, i, n, s) {
          return " more-dash";
        },
        27: function (t, e, i, n, s) {
          return " dash-icon-wrapper";
        },
        29: function (t, e, i, n, s) {
          return "app dash-dropdown nipple nipple-top-left";
        },
        31: function (t, e, i, n, s) {
          var l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return (
            '\t\t\t\t\t\t\t<li class="dropdown-list-item link-pin toggleable ' +
            t.escapeExpression(t.lambda(null != e ? l(e, "pinnedClass") : e, e)) +
            '">\n\t\t\t\t\t\t\t\t<span class="item-label pin">Pin</span>\n\t\t\t\t\t\t\t\t<span class="item-label unpin">Unpin</span>\n\t\t\t\t\t\t\t</li>\n'
          );
        },
        33: function (t, e, i, n, s) {
          return '\t\t\t\t\t\t\t<li class="dropdown-list-item detail">\n\t\t\t\t\t\t\t\t<span class="item-label">Edit</span>\n\t\t\t\t\t\t\t</li>\n';
        },
        35: function (t, e, i, n, s) {
          return '\t\t\t<div class="more has-read-only">\n\t\t\t\t<div class="icon-wrapper">\n\t\t\t\t\t<svg class="icon icon-lock read-only" title="Admin Locked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.9 402"><path d="M357.45,190.72a26.43,26.43,0,0,0-19.42-8H328.9V127.91q0-52.54-37.68-90.22T201,0q-52.55,0-90.22,37.69T73.09,127.91v54.82H64a27.28,27.28,0,0,0-27.41,27.41V374.59A27.28,27.28,0,0,0,64,402H338a27.28,27.28,0,0,0,27.41-27.41V210.13A26.43,26.43,0,0,0,357.45,190.72Zm-83.36-8H127.91V127.91q0-30.27,21.41-51.68T201,54.82q30.27,0,51.68,21.41t21.41,51.68Z" transform="translate(-36.55)"/></svg>\n\t\t\t\t</div>\n\t\t\t</div>\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, i, n, s) {
          var l,
            o = t.lambda,
            a = t.escapeExpression,
            r = null != e ? e : t.nullContext || {},
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '\x3c!-- This template is used for both new and legacy links If things are refactored, for testing try manually setting the noMenu property to true--\x3e\n<div draggable="' +
            a(o(null != e ? d(e, "draggable") : e, e)) +
            '" class="link-wrapper ' +
            a(o(null != e ? d(e, "classes") : e, e)) +
            (null !=
            (l = d(i, "if").call(r, null != e ? d(e, "pinned") : e, {
              name: "if",
              hash: {},
              fn: t.program(1, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 2, column: 62 }, end: { line: 2, column: 104 } }
            }))
              ? l
              : "") +
            (null !=
            (l = d(i, "unless").call(r, null != e ? d(e, "noMenu") : e, {
              name: "unless",
              hash: {},
              fn: t.program(3, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 2, column: 104 }, end: { line: 2, column: 142 } }
            }))
              ? l
              : "") +
            '">\n\t<a data-test="link-item" draggable="false" href="' +
            a(o(null != e ? d(e, "url") : e, e)) +
            '" ' +
            (null !=
            (l = d(i, "if").call(r, null != e ? d(e, "summaryText") : e, {
              name: "if",
              hash: {},
              fn: t.program(5, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 3, column: 59 }, end: { line: 3, column: 108 } }
            }))
              ? l
              : "") +
            " " +
            (null !=
            (l = d(i, "if").call(r, null != e ? d(e, "local") : e, {
              name: "if",
              hash: {},
              fn: t.program(7, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 3, column: 109 }, end: { line: 3, column: 143 } }
            }))
              ? l
              : "") +
            ">\n" +
            (null !=
            (l = d(i, "unless").call(r, null != e ? d(e, "noIcon") : e, {
              name: "unless",
              hash: {},
              fn: t.program(9, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 4, column: 2 }, end: { line: 14, column: 13 } }
            }))
              ? l
              : "") +
            '\t\t<span class="link-text">' +
            a(o(null != e ? d(e, "title") : e, e)) +
            "</span>\n\t</a>\n" +
            (null !=
            (l = d(i, "if").call(r, null != e ? d(e, "showControls") : e, {
              name: "if",
              hash: {},
              fn: t.program(17, s, 0),
              inverse: t.noop,
              data: s,
              loc: { start: { line: 17, column: 1 }, end: { line: 54, column: 8 } }
            }))
              ? l
              : "") +
            "</div>\n"
          );
        },
        useData: !0
      });
    },
    22579: (t, e, i) => {
      var n = i(40202);
      function s(t) {
        return t && (t.__esModule ? t.default : t);
      }
      t.exports = (n.default || n).template({
        1: function (t, e, n, l, o) {
          var a,
            r = null != e ? e : t.nullContext || {};
          return (
            '\t\t\t\t\t\t\t<li data-momo-id="chromeTab" data-place="links" class="optional-link"><a\n\t\t\t\t\t\t\t\thref="chrome-search://local-ntp/local-ntp.html" data-analytics-id="browser tab" class="local">\n\t\t\t\t\t\t\t\t' +
            (null !=
            (a = s(i(57337)).call(r, "icon-favicon icon-svg", {
              name: "browserIcon",
              hash: {},
              data: o,
              loc: { start: { line: 44, column: 8 }, end: { line: 44, column: 50 } }
            }))
              ? a
              : "") +
            "\n\t\t\t\t\t\t\t\t" +
            t.escapeExpression(
              s(i(13458)).call(r, {
                name: "browserName",
                hash: {},
                data: o,
                loc: { start: { line: 45, column: 8 }, end: { line: 45, column: 25 } }
              })
            ) +
            " Tab</a></li>\n"
          );
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, n, l, o) {
          var a,
            r = null != e ? e : t.nullContext || {},
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<header class="header app-header u--touch-only-flex">\n\t<div class="header-center">\n\t\t<div class="title-wrapper">\n\t\t\t<div class="title">Links</div>\n\t\t</div>\n\t</div>\n\n\t<div class="header-right">\n\t\t<div class="mobile-add" title="Add New Link" data-test="links-add">\n\t\t\t<span class="icon-wrapper hide">\n\t\t\t\t<svg class="icon icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path xmlns="http://www.w3.org/2000/svg" d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"></path></svg>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="mobile-edit" title="Edit Links" data-test="links-edit">\n\t\t\t<span class="icon-wrapper hide">\n\t\t\t\t<svg class="icon icon-ellipsis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="mobile-close" title="Close Links" data-test="links-close">\n\t\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</header>\n\n<div class="subviews-wrapper">\n\t<div class="subviews first no-transition">\x3c!--\n\n\t--\x3e<div class="subview links-main">\n\t\t\t\x3c!-- <header class="header">\n\t\t\t\t<span class="title">Links</span>\n\t\t\t\t<div class="controls">\n\t\t\t\t</div>\n\t\t\t</header> --\x3e\n\t\t\t<div class="body">\n\n\t\t\t\t<div class="loading-message message"><i class="loading-icon"></i><span class="loading-label">Loading...</span></div>\n\t\t\t\t<div class="links-lists"> \x3c!-- Not very useful in regular links, but important for consistency with teamlinks --\x3e\n\t\t\t\t\t<ol class="links-list">\n' +
            (null !=
            (a = s(i(957)).call(r, {
              name: "isChromium",
              hash: {},
              fn: t.program(1, o, 0),
              inverse: t.noop,
              data: o,
              loc: { start: { line: 41, column: 6 }, end: { line: 46, column: 21 } }
            }))
              ? a
              : "") +
            '\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="empty">\n\t\t\t\t\t<div class="title">No links yet</div>\n\t\t\t\t\t<div class="description">Add your favorite links</div>\n\t\t\t\t\t<span class="button new-toggle empty-toggle">New Link</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="footer-input">\n\t\t\t\t\t<span class="new-toggle"><span class="icon icon-favicon icon-plus"></span> New Link</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\x3c!--\n\n\t\t--\x3e' +
            (null !=
            (a = t.invokePartial(
              d(n, "lookup").call(r, e, "addGroup", {
                name: "lookup",
                hash: {},
                data: o,
                loc: { start: { line: 62, column: 9 }, end: { line: 62, column: 30 } }
              }),
              e,
              { data: o, helpers: n, partials: l, decorators: t.decorators }
            ))
              ? a
              : "") +
            "\n\n\t</div>\n</div>\n"
          );
        },
        usePartial: !0,
        useData: !0
      });
    },
    56730: (t, e, i) => {
      var n = i(40202);
      function s(t) {
        return t && (t.__esModule ? t.default : t);
      }
      t.exports = (n.default || n).template({
        1: function (t, e, n, l, o) {
          var a,
            r = null != e ? e : t.nullContext || {};
          return (
            '\t\t\t\t\t\t\t\t\t<li data-momo-id="chromeTab" data-place="links" class="optional-link"><a\n\t\t\t\t\t\t\t\t\t\t\thref="chrome-search://local-ntp/local-ntp.html" data-analytics-id="browser tab" class="local">\n\t\t\t\t\t\t\t\t\t\t' +
            (null !=
            (a = s(i(57337)).call(r, "icon-favicon icon-svg", {
              name: "browserIcon",
              hash: {},
              data: o,
              loc: { start: { line: 50, column: 10 }, end: { line: 50, column: 52 } }
            }))
              ? a
              : "") +
            "\n\t\t\t\t\t\t\t\t\t\t" +
            t.escapeExpression(
              s(i(13458)).call(r, {
                name: "browserName",
                hash: {},
                data: o,
                loc: { start: { line: 51, column: 10 }, end: { line: 51, column: 27 } }
              })
            ) +
            " Tab</a></li>\n" +
            (null !=
            (a = s(i(12581)).call(r, {
              name: "isChrome",
              hash: {},
              fn: t.program(2, o, 0),
              inverse: t.noop,
              data: o,
              loc: { start: { line: 52, column: 9 }, end: { line: 59, column: 22 } }
            }))
              ? a
              : "")
          );
        },
        2: function (t, e, i, n, s) {
          return '\t\t\t\t\t\t\t\t\t\t<li data-momo-id="apps" class="optional-link" data-place="links"><a href="chrome://apps" data-analytics-id="chrome apps" id="app-return" class="local">\n\t\t\t\t\t\t\t\t\t\t\t<svg class="icon-favicon icon-svg icon-apps" xmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\t\t\t\t\t\t\t\t viewBox="0 0 32 32">\n\t\t\t\t\t\t\t\t\t\t\t\t<path d="M3 3h6v6H3V3zm10 0h6v6h-6V3zm10 0h6v6h-6V3zM3 13h6v6H3v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6zM3 23h6v6H3v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6z"></path>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\tApps</a></li>\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, n, l, o) {
          var a,
            r = null != e ? e : t.nullContext || {},
            d =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '<div class="app-dash">\n\t<div class="team-dash-links-wrapper" data-ob="links-dash">\n\t\t<ol class="team-dash-links add-shadow"></ol>\n\t\t<span class="more-links-wrapper">\n\t\t\t<span class="more-links">' +
            t.escapeExpression(t.lambda(null != e ? d(e, "moreDropdownText") : e, e)) +
            '</span>\n\t\t\t<i class="icon icon-angle-down"></i>\n\t\t</span>\n\t</div>\n</div>\n\n<div class="app-wrapper nipple nipple-top-left">\n\t<div class="app links-app">\n\t\t<header class="header app-header u--touch-only-flex">\n\t\t\t<div class="header-center">\n\t\t\t\t<div class="title-wrapper">\n\t\t\t\t\t<div class="title">Links</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="header-right">\n\t\t\t\t<div class="mobile-add" title="Add New Link" data-test="links-add">\n\t\t\t\t\t<span class="icon-wrapper hide">\n\t\t\t\t\t\t<svg class="icon icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path xmlns="http://www.w3.org/2000/svg" d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"></path></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="mobile-edit" title="Edit Links" data-test="links-edit">\n\t\t\t\t\t<span class="icon-wrapper hide">\n\t\t\t\t\t\t<svg class="icon icon-ellipsis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="mobile-close" title="Close Links" data-test="links-close">\n\t\t\t\t\t<span class="icon-wrapper u--mobile-show-bg hide">\n\t\t\t\t\t\t<svg class="icon icon-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"/></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div class="subviews-wrapper">\n\t\t\t<div class="subviews no-transition">\x3c!--\n\t\t\t--\x3e<div class="subview links-main">\n\t\t\t\t\t<div class="body">\n\t\t\t\t\t\t<div class="links-lists">\n\t\t\t\t\t\t\t<ol class="more-links-list pinned-links-list links-list"></ol>\n\t\t\t\t\t\t\t<hr class="pinned-divider">\n\t\t\t\t\t\t\t<ol class="more-links-list links-list">\n' +
            (null !=
            (a = s(i(957)).call(r, {
              name: "isChromium",
              hash: {},
              fn: t.program(1, o, 0),
              inverse: t.noop,
              data: o,
              loc: { start: { line: 47, column: 8 }, end: { line: 60, column: 23 } }
            }))
              ? a
              : "") +
            '\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="add-error-message message">Connection required to add link. <span\n\t\t\t\t\t\t\t\tclass="message-action retry-add">Retry</span></div>\n\t\t\t\t\t\t<div class="message-empty"><i class="loading-icon"></i>Loading...</div>\n\t\t\t\t\t\t<div class="empty">\n\t\t\t\t\t\t\t<div class="title">No links yet</div>\n\t\t\t\t\t\t\t<div class="description">Add your favorite links</div>\n\t\t\t\t\t\t\t<span class="button new-toggle empty-toggle">New Link</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="footer-input">\n\t\t\t\t\t\t\t<span class="new-toggle"><span class="icon icon-favicon icon-plus"></span> New Link</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\x3c!--\n\n\t\t\t--\x3e' +
            (null !=
            (a = t.invokePartial(
              d(n, "lookup").call(r, e, "addGroup", {
                name: "lookup",
                hash: {},
                data: o,
                loc: { start: { line: 77, column: 10 }, end: { line: 77, column: 31 } }
              }),
              e,
              { data: o, helpers: n, partials: l, decorators: t.decorators }
            ))
              ? a
              : "") +
            '\n\n\t\t\t</div>\x3c!--\n\t --\x3e</div>\n\t</div>\n\t<div class="touch-overlay"></div>\n</div>\n'
          );
        },
        usePartial: !0,
        useData: !0
      });
    },
    91743: (t, e, i) => {
      var n = i(62706);
      n.__esModule && (n = n.default),
        "string" == typeof n && (n = [[t.id, n, ""]]),
        n.locals && (t.exports = n.locals),
        (0, i(45346).Z)("22abb4b7", n, !1, { ssrId: !0 });
    }
  }
]);
