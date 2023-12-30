var fn_addin = function (g, m, e) {
  var t = t || {};
  (t.styles = t.styles || {}),
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
    g.console.log(g.elapsed() + ": " + t.info.id + " started"),
    (t.templates = t.templates || {}),
    (t.templates.general = Handlebars.template({
      compiler: [8, ">= 4.3.0"],
      main: function (e, t, s, i, n) {
        return '<header class="settings-header">\n\t<h3 data-test="general-header">General</h3>\n\t<p class="description">Customize your dashboard</p>\n</header>\n\n\n<h4 class="first">Show</h4>\n<ul id="apps-list" class="settings-list options-list"></ul>\n\n<h4>Labs</h4>\n<ul id="labs-list" class="settings-list options-list"></ul>\n\n<h4>Appearance</h4>\n<ul id="customize-list" class="settings-list options-list"></ul>\n\n\n<section class="u--touch-hide">\n\t<h5>Tip</h5>\n\t<p class="tip">Many items in Momentum can be edited by double-clicking on them, including <strong>your name</strong> and your <strong>to-dos</strong>.\n</section>\n';
      },
      useData: !0
    }));
  var n = t.dependencies.settings;
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
        (this.model = g.models.customization),
          this.initializeCustomizeItems(),
          this.listenTo(this.model, "change", this.customizationModelChanged),
          g.Analytics.capture("settings panel show", { feature: "settings", name: "general" });
      },
      initializeCustomizeItems: function () {
        var e = g.models.themeManager.getAvailableFonts(),
          i = this;
        function t() {
          return g.models.bookmarksSettings.get("defaultMostVisited") && i.model.get("bookmarksVisible");
        }
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
            field: "bookmarksVisible",
            section: "widgets",
            unsupported: g.utils.bookmarksNotSupported() || g.utils.isTouchDevice()
          },
          {
            name: "Top Sites",
            dataId: "settings-general-most-visited",
            field: {
              name: "mostVisited",
              set: function (e, t) {
                var s = g.models.bookmarksSettings;
                e && !i.model.get("bookmarksVisible") && i.enableBookmarks(t), s.set("defaultMostVisited", e), s.optionsChanged();
              },
              get: t
            },
            customEvent: function () {
              g.Analytics.capture("start in top sites toggle", { feature: "bookmarks", new_value: t(), location: "settings general" });
            },
            section: "widgets",
            message: "Show most visited websites by default in Bookmarks Bar",
            unsupported: g.utils.bookmarksNotSupported() || g.utils.isTouchDevice()
          },
          {
            name: "Search",
            dataId: "settings-general-search",
            field: {
              name: "searchVisible",
              get: function () {
                return i.model.get("searchVisible");
              },
              set: function (e) {
                var t = { searchVisible: e };
                e && i.model.get("centerBelowNavVisible") && (t.focusVisible = !1), e || (t.launchpadVisible = !1), i.model.save(t);
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
                return i.model.get("greetingVisible");
              },
              set: function (e) {
                var t = { greetingVisible: e };
                !e && i.model.get("mantraVisible") && (t.mantraVisible = !1), i.model.set(t);
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
                return g.models.customization.get("mantraVisible");
              },
              set: function (e) {
                var t = { mantraVisible: e };
                e && !g.models.customization.get("greetingVisible") && (t.greetingVisible = !0), g.models.customization.set(t);
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
                return i.model.get("focusVisible");
              },
              set: function (e) {
                var t = { focusVisible: e };
                e && i.model.get("centerBelowNavVisible") && (t.searchVisible = !1), i.model.save(t);
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
            unsupported: g.utils.isSafari() || g.utils.isTouchDevice(),
            requiredFeature: "tab-stash",
            message: "Stash open tabs for later so you can focus",
            section: "widgets"
          },
          {
            name: "Soundscapes",
            dataId: "settings-general-soundscapes",
            field: "soundscapesVisible",
            plusOnly: !0,
            unsupported: g.utils.isTouchDevice(),
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
                return g.models.customization.get("centerBelowNavVisible");
              },
              set: function (e) {
                var t = { centerBelowNavVisible: e, focusVisible: !e };
                e && (t.searchVisible = !0), e || (t.launchpadVisible = !1), i.model.save(t);
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
                return g.models.customization.get("launchpadVisible");
              },
              set: function (s) {
                function e(e) {
                  var t = {};
                  s && e
                    ? ((t.centerBelowNavVisible = !0), (t.launchpadVisible = !0), (t.searchVisible = !0), (t.focusVisible = !1))
                    : (t.launchpadVisible = !1),
                    i.model.save(t);
                }
                if (!s) return e(!1);
                var t = { permissions: ["topSites"] };
                g.utils.isChrome() && (t.origins = ["chrome://favicon/"]),
                  i.ensurePermissions(t, e, "Launchpad", "To display your top sites");
              }
            },
            section: "labs",
            message: "Show your top sites under the clock",
            unsupported: g.utils.bookmarksNotSupported() || g.utils.isTouchDevice()
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
        var e = g.isLoggedIn();
        this.$el.html(this.template({ loggedIn: e })), (this.$popBody = this.$(".pop-body"));
        var s = {
          customize: this.$el.find("#customize-list"),
          widgets: this.$el.find("#apps-list"),
          misc: this.$el.find("#misc-list"),
          labs: this.$el.find("#labs-list")
        };
        _.each(s, function (e) {
          e.empty();
        });
        var i = this;
        return (
          _.each(this.customizeItems, function (e) {
            var t = Object.assign({}, e);
            i.fieldHasOwnControl(e.field) && (t.field = e.field.name),
              t.options
                ? s[t.section].append(n.templates["general-toggle-options"](t))
                : s[t.section].append(n.templates["general-toggle-slider"](t));
          }),
          this.updateControlStates(_.pluck(this.customizeItems, "field")),
          g.commandManager.execute("settings.color.picker", this.$el[0]),
          this
        );
      },
      onAnimationEnd: function (e) {
        g.utils.removePulseClass(e);
      },
      customizationModelChanged: function (e) {
        if (e) {
          var t = e.changedAttributes(),
            s = _.keys(t);
          this.updateControlStates(s);
        }
      },
      fieldHasOwnControl: function (e) {
        return !("object" != typeof e || null === e || !e.get || !e.set);
      },
      updateControlStates: function (e) {
        var r = this;
        _.each(e, function (e) {
          var t = r.findMatchingItem(e);
          if (t) {
            var s = r.fieldHasOwnControl(e),
              i = s ? e.get() : r.model.get(e),
              n = r.getFieldName(e);
            if (t.options) {
              t.plusOnly && !r.featureAvailable(t.requiredFeature) && (i = t.default),
                r.$el.find("." + n).removeClass("active"),
                r.$el
                  .find("." + n + "[data-option-value='" + i + "']")
                  .first()
                  .addClass("active");
            } else {
              var a = s ? i : r.model.getComputedSetting(e);
              i = !(t.plusOnly && !r.featureAvailable(t.requiredFeature)) && !!i;
              var o = r.$el.find("[data-related-widget='" + n + "']");
              if (o && 1 === o.length) {
                var l = o.first();
                if ((l.toggleClass("on", i), i !== a)) {
                  var d = r.model.overrides[e];
                  d === r.model.settingOverriders.TEAM
                    ? (l.toggleClass("on", a),
                      l.append('<span class="option-message"> &nbsp; &nbsp;Currently managed by team</span>'),
                      l.addClass("balanced"))
                    : d === r.model.settingOverriders.BALANCE &&
                      (l.append(
                        '<span class="option-message balanced-message"> &nbsp; &nbsp;Currently hidden by Balance mode (Customize here)</span>'
                      ),
                      l.addClass("balanced"));
                }
              }
            }
          }
        });
      },
      setOption: function (e) {
        var t = e.attr("data-related-widget"),
          s = e.attr("data-option-value"),
          i = this.findMatchingItem(t);
        if (!i) return null;
        var n = _.findWhere(i.options, { value: s });
        if (!((i.plusOnly && !this.featureAvailable(i.requiredFeature)) || (n && n.plusOnly && !this.isPlus()))) {
          g.models.activeBackground.isCustom() && n && "photo" === n.value && n.plusOnly && this.isPlus(),
            this.$el.find("." + t).removeClass("active"),
            e.addClass("active");
          var a = {};
          return (
            i.boolean ? (a[i.field] = JSON.parse(s)) : (a[i.field] = s),
            this.model.save(a),
            g.Analytics.capture(i.name.toLowerCase() + " select", {
              feature: "themes",
              is_paid_event: i.plusOnly || (n && n.plusOnly) || !1,
              new_value: s
            }),
            i
          );
        }
        g.cmd("modal.open", "UPSELL_THEMES", { eventSource: "settings" });
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
        var t = m(e.delegatedTarget),
          s = t.attr("data-option-value"),
          i = this.setOption(t);
        if (!0 !== i) {
          if (i) {
            var n = _.findWhere(i.options, { value: s });
            if (n && n.view && n.view.handleClick) {
              if (0 < m(e.target).closest(".sub-view").length && n.view.ignoreClickEvent && n.view.ignoreClickEvent(e.target)) return;
              if ((n.view.handleClick(e, !0), n.view.scrollIntoViewElement)) {
                var a = n.view.scrollIntoViewElement();
                a && this.scrollIntoView(a);
              }
            }
          }
          g.trigger("globalEvent:settingsclick", e);
        } else e.stopImmediatePropagation();
      },
      scrollIntoView: function (e) {
        var t = m(e),
          s = t.closest(".settings-view-container"),
          i = t.offset().top,
          n = s.offset().top;
        i - n - 12 < 0 && s.animate({ scrollTop: s[0].scrollTop + i - n - 12 });
      },
      configWidget: function (e) {
        e.stopImmediatePropagation();
        var t = m(e.delegatedTarget).closest(".slide-toggle").attr("data-related-widget");
        if (t) {
          var s = this.findMatchingItem(t);
          g.commandManager.execute(s.configCommand, null, s.configOptions);
        }
      },
      featureAvailable: function (e) {
        return g.conditionalFeatures.featureEnabled(e) || g.conditionalFeatures.featureEnabled(e + "-degraded");
      },
      toggleSlider: function (e) {
        if (!this.eatClicks) {
          this.eatClicks = !0;
          var t,
            s = this;
          setTimeout(function () {
            s.eatClicks = !1;
          }, 250);
          var i = m(".verte");
          if (
            !(
              m(e.target).closest("[data-option-value]").length ||
              (0 < i.length && m.contains(i[0], e.target)) ||
              m(e.delegatedTarget).hasClass("balanced")
            )
          ) {
            var n = m(e.delegatedTarget).attr("data-related-widget"),
              a = this.findMatchingItem(n);
            if (!a.plusOnly || this.featureAvailable(a.requiredFeature)) {
              if (!a.unsupported)
                if ("bookmarksVisible" !== n) {
                  if (this.fieldHasOwnControl(a.field)) {
                    c = !a.field.get();
                    return a.field.set(c, e), m(e.delegatedTarget).toggleClass("on", c), void u(a);
                  }
                  if (n) {
                    var o = this.model.get(a.field);
                    if (a.options) {
                      var l;
                      for (
                        l = g.conditionalFeatures.featureEnabled("plus")
                          ? a.options
                          : a.options.filter(function (e) {
                              return !e.plusOnly;
                            }),
                          t = 0;
                        t < l.length;
                        t++
                      )
                        if (l[t].value === o) {
                          t === l.length - 1 && (t = -1), (c = l[t + 1].value);
                          break;
                        }
                      var d = m(e.delegatedTarget)
                        .find("." + n + "[data-option-value='" + c + "']")
                        .first();
                      this.setOption(d) && e.stopPropagation();
                    } else {
                      if ("mantraVisible" === n && !g.models.mantraSettings.get("firstMantraActivated"))
                        return g.commandManager.executeAsync("settings.display", null, { section: "mantra-settings" }), void u(a);
                      c = !this.model.get(n);
                      var r = {};
                      (r[n] = c), this.model.save(r), u(a);
                    }
                  }
                  g.trigger("globalEvent:settingsclick", e);
                } else {
                  this.enableBookmarks(e);
                  var c = g.models.customization.get("bookmarksVisible");
                  u(a);
                }
            } else
              "Ask AI" === a.name
                ? g.cmd("modal.open", "UPSELL_AI_CHAT", { eventSource: "settings" })
                : "Countdowns" === a.name
                ? g.cmd("modal.open", "UPSELL_COUNTDOWNS", { eventSource: "settings" })
                : "Metrics" === a.name
                ? g.cmd("modal.open", "UPSELL_METRICS", { eventSource: "settings" })
                : "Notes" === a.name
                ? g.cmd("modal.open", "UPSELL_NOTES", { eventSource: "settings" })
                : "World Clocks" === a.name
                ? g.cmd("modal.open", "UPSELL_WORLD_CLOCKS", { eventSource: "settings" })
                : "Soundscapes" === a.name
                ? g.cmd("modal.open", "UPSELL_SOUNDSCAPES", { eventSource: "settings" })
                : "Tab Stash" === a.name
                ? g.cmd("modal.open", "UPSELL_TAB_STASH", { eventSource: "settings" })
                : g.cmd("modal.open", "PLUS_GATE", { eventSource: "settings" });
          }
        }
        function u(e) {
          e.customEvent
            ? e.customEvent()
            : g.Analytics.capture("feature " + (c ? "enable" : "disable"), {
                is_paid_event: !!e.plusOnly,
                feature: e.eventFeatureName || e.name.toLowerCase(),
                location: "settings general"
              });
        }
      },
      loginClicked: function (e) {
        e.preventDefault(), e.stopPropagation(), g.commandManager.execute("settings.hide"), g.commandManager.execute("account.login");
      },
      logoutClicked: function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          m(".action-logout").addClass("action-logout-disabled").text("Logging out..."),
          g.commandManager.execute("logout");
      },
      accountClicked: function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          m(e.delegatedTarget).html("Launching..."),
          m
            .ajax({ type: "POST", data: JSON.stringify({ medium: "account" }), url: g.globals.urlRootApi + "login/onetime" })
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
          g.commandManager.execute("settings.display", null, { section: "balance", showAdvanced: !0 });
      },
      enableBookmarks: function (s) {
        var i = this;
        s && (s.stopPropagation(), s.preventDefault()),
          g.commandManager.executeAsync("settings.enableBookmarks", {
            callback: function () {
              var e = g.models.customization.get("bookmarksVisible"),
                t = g.models.bookmarksSettings.get("defaultMostVisited");
              m(s ? s.delegatedTarget : '[data-related-widget="bookmarksVisible"]').toggleClass("on", e),
                i.$('[data-related-widget="mostVisited"]').toggleClass("on", t && e);
            }
          });
      },
      isPlus: function () {
        return g.conditionalFeatures.featureEnabled("plus");
      },
      ensurePermissions: function (t, s, i, n) {
        g.promisifiedChrome.permissions.contains(t).then(function (e) {
          e ? s(!0) : g.cmd("modal.open", "PERMISSION_REQUEST", { resolve: s, permissions: t, widgetName: i, permissionExplanation: n });
        });
      }
    })),
    (t.commands.SettingsPanelGeneral = g.models.Command.extend({
      defaults: { id: "settings.panels.general" },
      execute: function () {
        return t.styleLoaded || ((t.styleLoaded = !0), t.styles.style()), new t.views.General();
      }
    })),
    t
  );
};
m.addinManager && m.addinManager.registerAddinFn("9b62165c-8b05-4f9b-82b3-b093f4e77dc9", fn_addin);