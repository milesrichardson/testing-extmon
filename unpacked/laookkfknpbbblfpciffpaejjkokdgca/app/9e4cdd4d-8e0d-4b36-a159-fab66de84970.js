var fn_addin = function (s, e, t) {
  var i = {};
  return (
    (i.styles = i.styles || {}),
    (i.commands = i.commands || {}),
    (i.dependencies = t || i.dependencies || {}),
    (i.styles.style = function () {}),
    (i.views = i.views || {}),
    (i.collect = i.collect || {}),
    (i.models = i.models || {}),
    (i.templates = i.templates || {}),
    (i.info = { addin: "9e4cdd4d-8e0d-4b36-a159-fab66de84970", id: "settings_common" }),
    s.console.log(s.elapsed() + ": " + i.info.id + " started"),
    (i.models.SettingsManager = Backbone.Model.extend({
      initialize: function () {
        this.listenTo(s, "settings:register:nav", this.registerNavItem),
          this.listenTo(s, "settings:register:subnav", this.registerSubNavItem),
          this.listenTo(s, "settings:register:panel", this.registerPanel),
          window.addEventListener("storage", function (e) {
            ("loggedOut" != e.key && "loggedIn" != e.key) || window.location.reload();
          }),
          this.registerStockCommandSources();
      },
      stockNavItems: null,
      navItems: [],
      secondaryNavItems: [],
      panelItems: [],
      registerNavItem: function (e) {
        return (
          this.stockNavItems || this.populateStockNavItems(),
          !this.addOrReplaceIfOverride(this.navItems, e) &&
            !this.addOrReplaceIfOverride(this.stockNavItems.navItems, e) &&
            (this.navItems.push(e), !0)
        );
      },
      registerPanel: function (e) {
        return !this.addOrReplaceIfOverride(this.panelItems, e) && (this.panelItems.push(e), !0);
      },
      registerSubNavItem: function (e) {
        return (
          this.stockNavItems || this.populateStockNavItems(),
          !this.addOrReplaceIfOverride(this.secondaryNavItems, e) &&
            !this.addOrReplaceIfOverride(this.stockNavItems.secondaryNavItems, e) &&
            (this.secondaryNavItems.push(e), !0)
        );
      },
      addOrReplaceIfOverride: function (e, t, s) {
        (s = s || { id: t.id }), (s = _.findWhere(e, s));
        return !!s && (t.override && (e.splice(e.indexOf(s), 1), e.push(t)), !0);
      },
      registerNavItems: function (e) {
        var t = this,
          s = !1;
        e &&
          (e.nav &&
            _.each(e.nav, function (e) {
              t.registerNavItem(e) && (s = !0);
            }),
          e.subNav &&
            _.each(e.subNav, function (e) {
              t.registerSubNavItem(e) && (s = !0);
            }),
          e.panels &&
            _.each(e.panels, function (e) {
              t.registerPanel(e);
            }),
          s) &&
          this.trigger("navItemsChanged");
      },
      getNavItems: function () {
        return (
          this.populateStockNavItems(),
          {
            navItems: _.chain(this.stockNavItems.navItems).union(this.navItems).sortBy("position").value(),
            secondaryNavItems: _.chain(this.stockNavItems.secondaryNavItems).union(this.secondaryNavItems).sortBy("position").value()
          }
        );
      },
      getNavItem: function (e) {
        var t = this.getNavItems();
        return _.findWhere(t.navItems, { id: e }) || _.findWhere(t.secondaryNavItems, { id: e });
      },
      getPanelItems: function () {
        return this.panelItems;
      },
      registerStockCommandSources: function () {
        this.registerPanel({ id: "trello", section: "todo", cmd: "settings.panels.trello.config" }),
          this.registerPanel({ id: "clickup", section: "todo", cmd: "settings.panels.clickup.config" });
      },
      populateStockNavItems: function () {
        var e, t;
        this.stockNavItems ||
          ((e = [
            { id: "general", title: "General", cmd: "settings.panels.general", position: 10 },
            { id: "todo", title: "Todo", cmd: "settings.panels.todo", position: 20 },
            { id: "mantra-settings", title: "Mantras", cmd: "settings.panels.mantras", position: 30 },
            { id: "background-settings", title: "Photos", cmd: "settings.panels.backgrounds", position: 40 },
            { id: "quote-settings", title: "Quotes", cmd: "settings.panels.quotes", position: 50 }
          ]),
          s.utils.isTouchDevice() ||
            e.push({
              id: "bookmark-settings",
              title: s.utils.bookmarksNotSupported() ? "Links" : "Links & Bookmarks",
              cmd: "settings.panels.bookmarks",
              position: 70
            }),
          e.push({ id: "balance", title: "Balance", cmd: "settings.panels.balance", position: 80 }),
          (t = [
            { id: "help", title: "Help", cmd: "settings.panels.help", position: 20 },
            { id: "release-notes", title: "Release Notes", cmd: "settings.panels.releaseNotes", position: 21 },
            { id: "about", title: "About", cmd: "settings.panels.about", position: 30 }
          ]),
          s.conditionalFeatures.featureEnabled("plus") ||
            s.conditionalFeatures.featureEnabled("team") ||
            t.push({
              id: "upgrade",
              title: "Upgrade to Plus",
              cmd: "upsell.upgrade",
              cmdOnly: !0,
              options: { source: "nav-upgrade-plus" },
              position: 40
            }),
          s.conditionalFeatures.featureEnabled("team") ||
            s.utils.isTouchDevice() ||
            t.push({ id: "take-a-tour", title: "Take a Tour", cmd: "settings.takeATour", cmdOnly: !0, position: 10 }),
          t.push({ id: "join-workshop", title: "Join a Live Workshop", cmd: "settings.joinWorkshop", cmdOnly: !0, position: 11 }),
          (this.stockNavItems = { navItems: e, secondaryNavItems: t }));
      },
      infinispin: function () {
        var e = localStorage.getItem("infinispin");
        return !!e && JSON.parse(e);
      },
      toggleInfinispin: function () {
        var e = !this.infinispin();
        return localStorage.setItem("infinispin", e), e;
      }
    })),
    (s.settingsManager = new i.models.SettingsManager()),
    i
  );
};
m.addinManager && m.addinManager.registerAddinFn("9e4cdd4d-8e0d-4b36-a159-fab66de84970", fn_addin);
