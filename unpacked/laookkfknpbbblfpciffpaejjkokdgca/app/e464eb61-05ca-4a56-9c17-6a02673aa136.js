var fn_addin = function (o, l, t) {
  var e = e || {};
  (e.styles = e.styles || {}),
    (e.commands = e.commands || {}),
    (e.dependencies = t || e.dependencies || {}),
    (e.styles.style = function () {}),
    (e.views = e.views || {}),
    (e.collect = e.collect || {}),
    (e.models = e.models || {}),
    (e.templates = e.templates || {}),
    (e.info = {
      addin: "e464eb61-05ca-4a56-9c17-6a02673aa136",
      id: "settings_bookmarks",
      dependencies: ["settings"],
      commands: ["settings.panels.bookmarks"]
    }),
    o.console.log(o.elapsed() + ": " + e.info.id + " started"),
    (e.templates = e.templates || {}),
    (e.templates.main = Handlebars.template({
      1: function (t, e, s, n, a) {
        return "<h3>Links & Bookmarks Bar</h3>\n";
      },
      3: function (t, e, s, n, a) {
        return "<h3>Links</h3>\n";
      },
      5: function (t, e, s, n, a) {
        var o,
          l =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
        return (
          '\t\t<li class="has-toggle has-toggle-options bookmark-option on" data-option="">\n\t\t\t<span class="setting-name">Show ' +
          t.escapeExpression(
            "function" ==
              typeof (o = null != (o = l(s, "browserName") || (null != e ? l(e, "browserName") : e)) ? o : t.hooks.helperMissing)
              ? o.call(null != e ? e : t.nullContext || {}, {
                  name: "browserName",
                  hash: {},
                  data: a,
                  loc: { start: { line: 21, column: 35 }, end: { line: 21, column: 50 } }
                })
              : o
          ) +
          ' Tab in</span>\n\t\t\t<span class="toggle-options">\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="links" data-test="show-tab-links"><span class="toggle-label">Links</span></span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="bookmarks" data-test="show-tab-bookmarks"><span class="toggle-label">Bookmarks</span></span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="dash"><span class="toggle-label">Dash</span></span>\n\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option special-link-option" data-link="chromeTabLocation" data-place="none"><span class="toggle-label">None</span></span>\n\t\t\t</span>\n\t\t</li>\n'
        );
      },
      7: function (t, e, s, n, a) {
        var o,
          l,
          i,
          r =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            },
          c =
            '\t<div class="section section-bookmarks">\n\t\t<h4>Bookmarks Bar</h4>\n\t\t<ul class="settings-list options-list" data-test="bookmarks-options">\n\t\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="iconsOnly" data-test="toggle-icons-only">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Icons only</span>\n\t\t\t\t<span class="option-message">Hide titles for a clean and compact look</span>\n\t\t\t</li>\n\t\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="defaultMostVisited" data-test="toggle-start-most-visited">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Start in Top Sites</span>\n\t\t\t\t<span class="option-message">Show most visited websites by default in Bookmarks Bar</span>\n\t\t\t</li>\n\t\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="includeMostVisited" data-test="toggle-show-most-visited">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Show Top Sites</span>\n\t\t\t\t<span class="option-message">Add a folder with most visited websites to Bookmarks Bar</span>\n\t\t\t</li>\n';
        return (
          (l = null != (l = r(s, "isChrome") || (null != e ? r(e, "isChrome") : e)) ? l : t.hooks.helperMissing),
          (i = {
            name: "isChrome",
            hash: {},
            fn: t.program(8, a, 0),
            inverse: t.noop,
            data: a,
            loc: { start: { line: 70, column: 3 }, end: { line: 75, column: 16 } }
          }),
          (o = "function" == typeof l ? l.call(null != e ? e : t.nullContext || {}, i) : l),
          r(s, "isChrome") || (o = t.hooks.blockHelperMissing.call(e, o, i)),
          null != o && (c += o),
          c +
            '\t\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="includeOtherBookmarks" data-test="toggle-show-other">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Show Other Bookmarks</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n'
        );
      },
      8: function (t, e, s, n, a) {
        return '\t\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="includeBookmarks" data-test="toggle-show-manager">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Show Bookmarks Manager</span>\n\t\t\t</li>\n';
      },
      compiler: [8, ">= 4.3.0"],
      main: function (t, e, s, n, a) {
        var o,
          l,
          i,
          r = null != e ? e : t.nullContext || {},
          c =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            },
          g =
            (null !=
            (o = c(s, "unless").call(r, null != e ? c(e, "hideBookmarks") : e, {
              name: "unless",
              hash: {},
              fn: t.program(1, a, 0),
              inverse: t.program(3, a, 0),
              data: a,
              loc: { start: { line: 1, column: 0 }, end: { line: 5, column: 11 } }
            }))
              ? o
              : "") +
            '\n<p class="description">Quick access to your favorite links</p>\n\n<div data-test="settings-links">\n\t<ul class="settings-list options-list">\n';
        return (
          (l = null != (l = c(s, "isChromium") || (null != e ? c(e, "isChromium") : e)) ? l : t.hooks.helperMissing),
          (i = {
            name: "isChromium",
            hash: {},
            fn: t.program(5, a, 0),
            inverse: t.noop,
            data: a,
            loc: { start: { line: 19, column: 1 }, end: { line: 32, column: 16 } }
          }),
          (o = "function" == typeof l ? l.call(r, i) : l),
          c(s, "isChromium") || (o = t.hooks.blockHelperMissing.call(e, o, i)),
          null != o && (g += o),
          g +
            '\t\t<li class="slide-toggle has-toggle bookmark-option on" data-option="openInNewTab" data-test="open-link-new-tab-toggle">\n\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t<span class="setting-name">Open links in new tab</span>\n\t\t</li>\n\t</ul>\n\n\t<div class="section section-links">\n\t\t<h4>Links</h4>\n\t\t<ul class="settings-list options-list">\n\t\t\t<li class="slide-toggle has-toggle on stay-open" data-option="linksKeepOpen">\n\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t<span class="setting-name">Stay open</span>\n\t\t\t\t<span class="option-message">Stay open on new tab and other usage</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\n' +
            (null !=
            (o = c(s, "unless").call(r, null != e ? c(e, "hideBookmarks") : e, {
              name: "unless",
              hash: {},
              fn: t.program(7, a, 0),
              inverse: t.noop,
              data: a,
              loc: { start: { line: 51, column: 1 }, end: { line: 82, column: 12 } }
            }))
              ? o
              : "") +
            "</div>\n\n"
        );
      },
      useData: !0
    })),
    (e.styles = e.styles || {}),
    (e.styles.style = function () {
      var t = document.createElement("style");
      (t.type = "text/css"), (t.innerHTML = ""), document.getElementsByTagName("head")[0].appendChild(t);
    });
  var s = e.dependencies.settings;
  return (
    (e.views.Main = s.views.SettingsPanel.extend({
      analytics: new o.Analytics({ feature: "links" }),
      attributes: { id: "settings-bookmarks", class: "settings-view settings-bookmarks" },
      instrumentMapping: {
        chromeTabLocation: { event: "show browser tab change", feature: "links" },
        openInNewTab: { event: "open in new tab toggle", feature: "links" },
        iconsOnly: { event: "icons only toggle", feature: "bookmarks" },
        defaultMostVisited: { event: "start in top sites toggle", sendEventLocation: !0, feature: "bookmarks" },
        includeMostVisited: { event: "show top sites toggle", feature: "bookmarks" },
        includeBookmarks: { event: "show bookmarks manager toggle", feature: "bookmarks" },
        includeOtherBookmarks: { event: "show other bookmarks toggle", feature: "bookmarks" }
      },
      template: e.templates.main,
      panelid: "bookmarks-panel",
      panelTitle: "Link Settings",
      events: {
        "click .special-link-option": "toggleSpecialLinks",
        "click .bookmark-option": "toggleOption",
        "click .bookmarks-enable": "enableBookmarks",
        "click .links-enable": "enableLinks",
        "click .stay-open": "toggleStayOpen"
      },
      initialize: function () {
        this.analytics.capture("settings panel show");
      },
      render: function () {
        (this.chrome = o.utils.isChrome()), (this.hideBookmarks = o.utils.bookmarksNotSupported()), this.$el.html(this.template(this));
        var t = this;
        return (
          this.$el.css("opacity", 0),
          setTimeout(function () {
            t.updateView();
          }, 5),
          setTimeout(function () {
            t.$el.css("opacity", 1);
          }, 100),
          this
        );
      },
      updateView: function () {
        var e = o.models.bookmarksSettings;
        this.$(".bookmark-option").each(function () {
          var t = l(this);
          t.toggleClass("on", e.get([t.attr("data-option")]));
        }),
          this.$el.find('[data-link="chromeTabLocation"]').each(function () {
            var t = l(this);
            t.toggleClass("active", e.get("chromeTabLocation") == t.attr("data-place"));
          }),
          this.$el.find(".bookmarks-enable").toggleClass("on", o.models.customization.get("bookmarksVisible")),
          this.$el.find(".links-enable").toggleClass("on", o.models.customization.get("linksVisible")),
          this.$el.find(".stay-open").toggleClass("on", o.models.customization.get("linksKeepOpen")),
          this.$el.find(".bookmarks-settings").toggleClass("active", e.get("enabled"));
      },
      toggleOption: function (t) {
        t && (t.stopPropagation(), t.preventDefault());
        var e = l(t.delegatedTarget).attr("data-option"),
          s = o.models.bookmarksSettings,
          n = !s.get(e);
        if (
          (s.set(e, n),
          l(t.delegatedTarget).toggleClass("on", n),
          "defaultMostVisited" === e ? s.optionsChanged("mostVisitedVisible", n) : s.optionsChanged(),
          e)
        ) {
          var a = { feature: this.instrumentMapping[e].feature, new_value: n };
          this.instrumentMapping[e].sendEventLocation && (a.location = "settings bookmarks"),
            this.analytics.capture(this.instrumentMapping[e].event, a);
        }
      },
      toggleSpecialLinks: function (t) {
        t && (t.stopPropagation(), t.preventDefault());
        var e = l(t.delegatedTarget).attr("data-link"),
          s = l(t.delegatedTarget).attr("data-place"),
          n = o.models.bookmarksSettings;
        n.set(e, s),
          this.$el.find('[data-link="' + e + '"]').removeClass("active"),
          l(t.delegatedTarget).addClass("active"),
          n.optionsChanged(),
          this.analytics.capture(this.instrumentMapping[e].event, { feature: this.instrumentMapping[e].feature, new_value: s });
      },
      enableBookmarks: function (t) {
        t && (t.stopPropagation(), t.preventDefault()),
          o.commandManager.execute("settings.enableBookmarks", {
            callback: function () {
              l(t.delegatedTarget).toggleClass("on", o.models.customization.get("bookmarksVisible"));
            }
          }),
          this.analytics.capture(o.models.customization.get("bookmarksVisible") ? "feature enable" : "feature disable", {
            feature: "bookmarks"
          });
      },
      enableLinks: function (t) {
        t && (t.stopPropagation(), t.preventDefault()),
          o.models.customization.save("linksVisible", !o.models.customization.get("linksVisible")),
          l(t.delegatedTarget).toggleClass("on", o.models.customization.get("linksVisible")),
          this.analytics.capture(o.models.customization.get("linksVisible") ? "feature enable" : "feature disable");
      },
      toggleStayOpen: function (t) {
        t && (t.stopPropagation(), t.preventDefault()),
          o.models.customization.save("linksKeepOpen", !o.models.customization.get("linksKeepOpen")),
          l(t.delegatedTarget).toggleClass("on", o.models.customization.get("linksKeepOpen")),
          this.analytics.capture("stay open toggle", { new_value: o.models.customization.get("linksKeepOpen") });
      }
    })),
    o.commandManager &&
      o.commandManager.registerCommand("settings.panels.bookmarks", function () {
        return e.styleLoaded || ((e.styleLoaded = !0), e.styles.style()), new e.views.Main();
      }),
    e
  );
};
m.addinManager && m.addinManager.registerAddinFn("e464eb61-05ca-4a56-9c17-6a02673aa136", fn_addin);
