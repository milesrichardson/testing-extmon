var fn_addin = function (c, u, e) {
  var t = {},
    n =
      ((t.styles = t.styles || {}),
      (t.commands = t.commands || {}),
      (t.dependencies = e || t.dependencies || {}),
      (t.styles.style = function () {}),
      (t.views = t.views || {}),
      (t.collect = t.collect || {}),
      (t.models = t.models || {}),
      (t.templates = t.templates || {}),
      (t.info = {
        addin: "9b62165c-8b05-4f9b-82b3-b093f4e77dc9",
        dependencies: ["settings"],
        commands: ["settings.panels.general"],
        id: "settings_general"
      }),
      c.console.log(c.elapsed() + ": " + t.info.id + " started"),
      (t.templates = t.templates || {}),
      (t.templates.general = Handlebars.template({
        compiler: [8, ">= 4.3.0"],
        main: function (e, t, s, i, n) {
          return '<header class="settings-header">\n\t<h3 data-test="general-header">General</h3>\n\t<p class="description">Customize your dashboard</p>\n</header>\n\n\n<h4 class="first">Show</h4>\n<ul id="apps-list" class="settings-list options-list"></ul>\n\n<h4>Labs</h4>\n<ul id="labs-list" class="settings-list options-list"></ul>\n\n<h4>Appearance</h4>\n<ul id="customize-list" class="settings-list options-list"></ul>\n\n\n<section class="u--touch-hide">\n\t<h5>Tip</h5>\n\t<p class="tip">Many items in Momentum can be edited by double-clicking on them, including <strong>your name</strong> and your <strong>to-dos</strong>.\n</section>\n';
        },
        useData: !0
      })),
      t.dependencies.settings);
  return (
    (t.views.General = n.views.SettingsPanel.extend({
      attributes: { id: "settings-general", class: "settings-view settings-general", "data-test": "settings-general" },
      template: t.templates.general,
      panelid: "general",
      panelTitle: "General",
      events: {
        "click .config-button": "configWidget",
        "click .toggle-option": "toggleOption",
        "click .slide-toggle": "toggleSlider",
        "dblclick .slide-toggle": "eatDblClick",
        "click .balanced-message": "switchToBalanceSettings",
        webkitAnimationEnd: "onAnimationEnd"
      },
      initialize: function () {
        (this.model = c.models.customization),
          this.initializeCustomizeItems(),
          this.listenTo(this.model, "change", this.customizationModelChanged),
          c.Analytics.capture("settings panel show", { feature: "settings", name: "general" });
      },
      initializeCustomizeItems: function () {
        var e = c.models.themeManager.getAvailableFonts(),
          s = this;
        this.customizeItems = [
          {
            name: "Theme",
            dataId: "settings-general-theme",
            field: "themeColour",
            options: [
              { label: "Dark", value: "dark" },
              { label: "Light", value: "light" },
              { label: "System", value: "system", breakafter: !0 },
              { label: "Photo Match", value: "photo", plusOnly: !0 },
              {
                label: "",
                value: "custom",
                view_opt: { settingName: "themeColour", ignoreClick: !0 },
                plusOnly: !0,
                show_always: !0,
                dataTest: "custom"
              }
            ],
            default: "system",
            section: "customize"
          },
          {
            name: "Font",
            dataId: "settings-general-font",
            field: "themeFont",
            options: e,
            default: "default",
            plusOnly: !0,
            requiredFeature: "plus",
            section: "customize"
          },
          { name: "Links", dataId: "settings-general-links", field: "linksVisible", section: "widgets" },
          {
            name: "Bookmarks Bar",
            dataId: "settings-general-bookmarks-bar",
            field: {
              name: "bookmarksVisible",
              get: function () {
                return c.models.customization.get("bookmarksVisible");
              },
              set: function (e) {
                function t(e) {
                  e || (c.models.bookmarksSettings.set("defaultMostVisited", !1), c.models.bookmarksSettings.optionsChanged()),
                    s.model.save({ bookmarksVisible: e });
                }
                if (!e) return t(!1);
                (e = c.models.bookmarksSettings), (e = { permissions: e.permissions.permissions, origins: e.permissions.origins });
                s.ensurePermissions(e, t, "Momentum", "To display your bookmarks");
              }
            },
            section: "widgets",
            unsupported: c.utils.bookmarksNotSupported() || c.utils.isTouchDevice()
          },
          {
            name: "Top Sites",
            dataId: "settings-general-most-visited",
            field: {
              name: "mostVisited",
              get: function () {
                return c.models.bookmarksSettings.get("defaultMostVisited");
              },
              set: function (e) {
                function t(e) {
                  e && s.model.save({ bookmarksVisible: !0 }),
                    c.models.bookmarksSettings.set("defaultMostVisited", e),
                    c.models.bookmarksSettings.optionsChanged(),
                    c.Analytics.capture("start in top sites toggle", { feature: "bookmarks", new_value: e, location: "settings general" });
                }
                if (!e) return t(!1);
                (e = c.models.bookmarksSettings), (e = { permissions: e.permissions.permissions, origins: e.permissions.origins });
                s.ensurePermissions(e, t, "Momentum", "To display your bookmarks");
              }
            },
            skipAnalyticsOnChange: !0,
            section: "widgets",
            message: "Show most visited websites by default in Bookmarks Bar",
            unsupported: c.utils.bookmarksNotSupported() || c.utils.isTouchDevice()
          },
          {
            name: "Search",
            dataId: "settings-general-search",
            field: {
              name: "searchVisible",
              get: function () {
                return s.model.get("searchVisible");
              },
              set: function (e) {
                var t = { searchVisible: e };
                e && s.model.get("centerBelowNavVisible") && (t.focusVisible = !1), e || (t.launchpadVisible = !1), s.model.save(t);
              }
            },
            section: "widgets"
          },
          { name: "Weather", dataId: "settings-general-weather", field: "weatherVisible", section: "widgets" },
          { name: "Clock", eventFeatureName: "default clock", dataId: "settings-general-clock", field: "clockVisible", section: "widgets" },
          {
            name: "Greeting",
            dataId: "settings-general-greeting",
            field: {
              name: "greetingVisible",
              get: function () {
                return s.model.get("greetingVisible");
              },
              set: function (e) {
                var t = { greetingVisible: e };
                !e && s.model.get("mantraVisible") && (t.mantraVisible = !1), s.model.set(t);
              }
            },
            section: "widgets"
          },
          {
            name: "Mantras",
            dataId: "settings-general-mantras",
            field: {
              name: "mantraVisible",
              get: function () {
                return c.models.customization.get("mantraVisible");
              },
              set: function (e) {
                var t = { mantraVisible: e };
                e && !c.models.customization.get("greetingVisible") && (t.greetingVisible = !0), c.models.customization.set(t);
              }
            },
            message: "Simple phrases to build positive mental habits",
            section: "widgets",
            beta: !1
          },
          {
            name: "Focus",
            dataId: "settings-general-focus",
            field: {
              name: "focusVisible",
              get: function () {
                return s.model.get("focusVisible");
              },
              set: function (e) {
                var t = { focusVisible: e };
                e && s.model.get("centerBelowNavVisible") && (t.searchVisible = !1), s.model.save(t);
              }
            },
            section: "widgets"
          },
          { name: "Todo", dataId: "settings-general-todo", field: "todoVisible", section: "widgets" },
          { name: "Quotes", dataId: "settings-general-quote", field: "quoteVisible", section: "widgets" },
          {
            name: "Countdowns",
            dataId: "settings-general-countdown",
            field: "countdownVisible",
            plusOnly: !0,
            requiredFeature: "countdown",
            message: "Count down to important dates and deadlines",
            section: "widgets"
          },
          {
            name: "Metrics",
            dataId: "settings-general-metric",
            field: "metricVisible",
            plusOnly: !0,
            requiredFeature: "plus",
            message: "Keep your important metrics at a glance",
            section: "widgets"
          },
          {
            name: "Notes",
            dataId: "settings-general-notes",
            field: "notesVisible",
            plusOnly: !0,
            requiredFeature: "notes",
            message: "Take quick notes and store wisdom to review",
            section: "widgets"
          },
          {
            name: "World Clocks",
            dataId: "settings-general-world-clocks",
            field: "multiClockVisible",
            plusOnly: !0,
            requiredFeature: "plus",
            message: "Keep track of time anywhere on Earth",
            section: "widgets",
            beta: !1
          },
          {
            name: "Tab Stash",
            dataId: "settings-general-tabs",
            field: "tabsVisible",
            plusOnly: !0,
            unsupported: c.utils.isSafari() || c.utils.isTouchDevice(),
            requiredFeature: "tab-stash",
            message: "Stash open tabs for later so you can focus",
            section: "widgets"
          },
          {
            name: "Soundscapes",
            dataId: "settings-general-soundscapes",
            field: "soundscapesVisible",
            plusOnly: !0,
            unsupported: c.utils.isTouchDevice(),
            requiredFeature: "plus",
            message: "Sounds to help you focus and relax",
            section: "widgets"
          },
          {
            name: "Search in Center",
            dataId: "settings-general-center-below-nav",
            field: {
              name: "centerBelowNavVisible",
              get: function () {
                return c.models.customization.get("centerBelowNavVisible");
              },
              set: function (e) {
                var t = { centerBelowNavVisible: e, focusVisible: !e };
                e && (t.searchVisible = !0), e || (t.launchpadVisible = !1), s.model.save(t);
              }
            },
            section: "labs",
            message: "Enable toggling between Search and Focus in the center"
          },
          {
            name: "Launchpad",
            dataId: "settings-general-launchpad",
            field: {
              name: "launchpadVisible",
              get: function () {
                return c.models.customization.get("launchpadVisible");
              },
              set: function (e) {
                function t(e) {
                  var t = {};
                  e
                    ? ((t.centerBelowNavVisible = !0), (t.launchpadVisible = !0), (t.searchVisible = !0), (t.focusVisible = !1))
                    : (t.launchpadVisible = !1),
                    s.model.save(t);
                }
                if (!e) return t(!1);
                e = { permissions: ["topSites"] };
                c.utils.isChrome() && (e.origins = ["chrome://favicon/"]),
                  s.ensurePermissions(e, t, "Launchpad", "To display your top sites");
              }
            },
            section: "labs",
            message: "Show your top sites under the clock",
            unsupported: c.utils.bookmarksNotSupported() || c.utils.isTouchDevice()
          },
          {
            name: "Ask AI",
            dataId: "settings-general-ai",
            field: "askAiVisible",
            plusOnly: !0,
            requiredFeature: "plus",
            message: "Create, learn and problem-solve directly from your dashboard",
            section: "labs"
          }
        ];
      },
      render: function () {
        var e = c.isLoggedIn(),
          s =
            (this.$el.html(this.template({ loggedIn: e })),
            (this.$popBody = this.$(".pop-body")),
            {
              customize: this.$el.find("#customize-list"),
              widgets: this.$el.find("#apps-list"),
              misc: this.$el.find("#misc-list"),
              labs: this.$el.find("#labs-list")
            }),
          i =
            (_.each(s, function (e) {
              e.empty();
            }),
            this);
        return (
          _.each(this.customizeItems, function (e) {
            var t = Object.assign({}, e);
            i.fieldHasOwnControl(e.field) && (t.field = e.field.name),
              t.options
                ? s[t.section].append(n.templates["general-toggle-options"](t))
                : s[t.section].append(n.templates["general-toggle-slider"](t));
          }),
          this.updateControlStates(_.pluck(this.customizeItems, "field")),
          c.commandManager.execute("settings.color.picker", this.$el[0]),
          this
        );
      },
      onAnimationEnd: function (e) {
        c.utils.removePulseClass(e);
      },
      customizationModelChanged: function (e) {
        e && ((e = e.changedAttributes()), (e = _.keys(e)), this.updateControlStates(e));
      },
      fieldHasOwnControl: function (e) {
        return !("object" != typeof e || null === e || !e.get || !e.set);
      },
      updateControlStates: function (e) {
        var a = this;
        _.each(e, function (e) {
          var t,
            s,
            i,
            n = a.findMatchingItem(e);
          n &&
            ((s = (t = a.fieldHasOwnControl(e)) ? e.get() : a.model.get(e)),
            (i = a.getFieldName(e)),
            n.options
              ? (n.plusOnly && !a.featureAvailable(n.requiredFeature) && (s = n.default),
                a.$el.find("." + i).removeClass("active"),
                a.$el
                  .find("." + i + "[data-option-value='" + s + "']")
                  .first()
                  .addClass("active"))
              : ((t = t ? s : a.model.getComputedSetting(e)),
                (s = !((n.plusOnly && !a.featureAvailable(n.requiredFeature)) || !s)),
                (n = a.$el.find("[data-related-widget='" + i + "']")) &&
                  1 === n.length &&
                  ((i = n.first()).toggleClass("on", s), s !== t) &&
                  ((n = a.model.overrides[e]) === a.model.settingOverriders.TEAM
                    ? (i.toggleClass("on", t),
                      i.append('<span class="option-message"> &nbsp; &nbsp;Currently managed by team</span>'),
                      i.addClass("balanced"))
                    : n === a.model.settingOverriders.BALANCE &&
                      (i.append(
                        '<span class="option-message balanced-message"> &nbsp; &nbsp;Currently hidden by Balance mode (Customize here)</span>'
                      ),
                      i.addClass("balanced")))));
        });
      },
      setOption: function (e) {
        var t,
          s = e.attr("data-related-widget"),
          i = e.attr("data-option-value"),
          n = this.findMatchingItem(s);
        return n
          ? ((t = _.findWhere(n.options, { value: i })),
            (n.plusOnly && !this.featureAvailable(n.requiredFeature)) || (t && t.plusOnly && !this.isPlus())
              ? void c.cmd("modal.open", "UPSELL_THEMES", { eventSource: "settings" })
              : (c.models.activeBackground.isCustom() && t && "photo" === t.value && t.plusOnly && this.isPlus(),
                this.$el.find("." + s).removeClass("active"),
                e.addClass("active"),
                (s = {}),
                n.boolean ? (s[n.field] = JSON.parse(i)) : (s[n.field] = i),
                this.model.save(s),
                c.Analytics.capture(n.name.toLowerCase() + " select", {
                  feature: "themes",
                  is_paid_event: n.plusOnly || (t && t.plusOnly) || !1,
                  new_value: i
                }),
                n))
          : null;
      },
      findMatchingItem: function (t) {
        var s = this;
        return (
          "object" == typeof t && (t = t.name),
          this.customizeItems.find(function (e) {
            return (s.fieldHasOwnControl(e.field) ? e.field.name : e.field) === t;
          })
        );
      },
      getFieldName: function (e) {
        return this.fieldHasOwnControl(e) ? e.name : e;
      },
      toggleOption: function (e) {
        var t = u(e.delegatedTarget),
          s = t.attr("data-option-value"),
          t = this.setOption(t);
        if (!0 === t) e.stopImmediatePropagation();
        else {
          if (t) {
            t = _.findWhere(t.options, { value: s });
            if (t && t.view && t.view.handleClick) {
              var s = u(e.target).closest(".sub-view");
              if (0 < s.length && t.view.ignoreClickEvent && t.view.ignoreClickEvent(e.target)) return;
              t.view.handleClick(e, !0), t.view.scrollIntoViewElement && (s = t.view.scrollIntoViewElement()) && this.scrollIntoView(s);
            }
          }
          c.trigger("globalEvent:settingsclick", e);
        }
      },
      scrollIntoView: function (e) {
        var e = u(e),
          t = e.closest(".settings-view-container"),
          e = e.offset().top,
          s = t.offset().top;
        e - s - 12 < 0 && t.animate({ scrollTop: t[0].scrollTop + e - s - 12 });
      },
      configWidget: function (e) {
        e.stopImmediatePropagation();
        var e = u(e.delegatedTarget).closest(".slide-toggle").attr("data-related-widget");
        e && ((e = this.findMatchingItem(e)), c.commandManager.execute(e.configCommand, null, e.configOptions));
      },
      featureAvailable: function (e) {
        return c.conditionalFeatures.featureEnabled(e) || c.conditionalFeatures.featureEnabled(e + "-degraded");
      },
      toggleSlider: function (e) {
        if (!this.eatClicks) {
          this.eatClicks = !0;
          var t = this,
            s =
              (setTimeout(function () {
                t.eatClicks = !1;
              }, 250),
              u(".verte"));
          if (
            !(
              u(e.target).closest("[data-option-value]").length ||
              (0 < s.length && u.contains(s[0], e.target)) ||
              u(e.delegatedTarget).hasClass("balanced")
            )
          ) {
            var s = u(e.delegatedTarget).attr("data-related-widget"),
              i = this.findMatchingItem(s);
            if (i.plusOnly && !this.featureAvailable(i.requiredFeature))
              "Ask AI" === i.name
                ? c.cmd("modal.open", "UPSELL_AI_CHAT", { eventSource: "settings" })
                : "Countdowns" === i.name
                ? c.cmd("modal.open", "UPSELL_COUNTDOWNS", { eventSource: "settings" })
                : "Metrics" === i.name
                ? c.cmd("modal.open", "UPSELL_METRICS", { eventSource: "settings" })
                : "Notes" === i.name
                ? c.cmd("modal.open", "UPSELL_NOTES", { eventSource: "settings" })
                : "World Clocks" === i.name
                ? c.cmd("modal.open", "UPSELL_WORLD_CLOCKS", { eventSource: "settings" })
                : "Soundscapes" === i.name
                ? c.cmd("modal.open", "UPSELL_SOUNDSCAPES", { eventSource: "settings" })
                : "Tab Stash" === i.name
                ? c.cmd("modal.open", "UPSELL_TAB_STASH", { eventSource: "settings" })
                : c.cmd("modal.open", "PLUS_GATE", { eventSource: "settings" });
            else if (!i.unsupported)
              if (this.fieldHasOwnControl(i.field))
                (n = !i.field.get()), i.field.set(n, e), u(e.delegatedTarget).toggleClass("on", n), r(i);
              else {
                if (s) {
                  var n,
                    a = this.model.get(i.field);
                  if (i.options) {
                    for (
                      var o = c.conditionalFeatures.featureEnabled("plus")
                          ? i.options
                          : i.options.filter(function (e) {
                              return !e.plusOnly;
                            }),
                        l = 0;
                      l < o.length;
                      l++
                    )
                      if (o[l].value === a) {
                        l === o.length - 1 && (l = -1), (n = o[l + 1].value);
                        break;
                      }
                    var d = u(e.delegatedTarget)
                      .find("." + s + "[data-option-value='" + n + "']")
                      .first();
                    this.setOption(d) && e.stopPropagation();
                  } else {
                    if ("mantraVisible" === s && !c.models.mantraSettings.get("firstMantraActivated"))
                      return c.commandManager.executeAsync("settings.display", null, { section: "mantra-settings" }), void r(i);
                    n = !this.model.get(s);
                    d = {};
                    (d[s] = n), this.model.save(d), r(i);
                  }
                }
                c.trigger("globalEvent:settingsclick", e);
              }
          }
        }
        function r(e) {
          e.skipAnalyticsOnChange ||
            c.Analytics.capture("feature " + (n ? "enable" : "disable"), {
              is_paid_event: !!e.plusOnly,
              feature: e.eventFeatureName || e.name.toLowerCase(),
              location: "settings general"
            });
        }
      },
      loginClicked: function (e) {
        e.preventDefault(), e.stopPropagation(), c.commandManager.execute("settings.hide"), c.commandManager.execute("account.login");
      },
      logoutClicked: function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          u(".action-logout").addClass("action-logout-disabled").text("Logging out..."),
          c.commandManager.execute("logout");
      },
      accountClicked: function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          u(e.delegatedTarget).html("Launching..."),
          u
            .ajax({ type: "POST", data: JSON.stringify({ medium: "account" }), url: c.globals.urlRootApi + "login/onetime" })
            .done(function (e) {
              e &&
                e.otp &&
                e.email &&
                (window.location.href =
                  "http://localhost:8995/onetime?email=" + encodeURIComponent(e.email) + "&otp=" + encodeURIComponent(e.otp));
            });
      },
      switchToBalanceSettings: function (e) {
        e && (e.stopPropagation(), e.preventDefault()),
          c.commandManager.execute("settings.display", null, { section: "balance", showAdvanced: !0 });
      },
      enableBookmarks: function (s) {
        var i = this;
        s && (s.stopPropagation(), s.preventDefault()),
          c.commandManager.executeAsync("settings.enableBookmarks", {
            callback: function () {
              var e = c.models.customization.get("bookmarksVisible"),
                t = c.models.bookmarksSettings.get("defaultMostVisited");
              u(s ? s.delegatedTarget : '[data-related-widget="bookmarksVisible"]').toggleClass("on", e),
                i.$('[data-related-widget="mostVisited"]').toggleClass("on", t && e);
            }
          });
      },
      isPlus: function () {
        return c.conditionalFeatures.featureEnabled("plus");
      },
      ensurePermissions: function (t, s, i, n) {
        c.promisifiedChrome.permissions.contains(t).then(function (e) {
          e ? s(!0) : c.cmd("modal.open", "PERMISSION_REQUEST", { resolve: s, permissions: t, widgetName: i, permissionExplanation: n });
        });
      }
    })),
    (t.commands.SettingsPanelGeneral = c.models.Command.extend({
      defaults: { id: "settings.panels.general" },
      execute: function () {
        return t.styleLoaded || ((t.styleLoaded = !0), t.styles.style()), new t.views.General();
      }
    })),
    t
  );
};
m.addinManager && m.addinManager.registerAddinFn("9b62165c-8b05-4f9b-82b3-b093f4e77dc9", fn_addin);
