var CreditMonitoringContainer = function (t, e) {
    Container.call(this, t, e), (this.alerts = []);
    for (var r = 0, i = t.length; r < i; ++r) this.alerts = this.alerts.concat(t[r].getAlerts());
    for (var o = 0; o < this.alerts.length; ++o) this.alerts[o].setParent(this);
  },
  CreditMonitoringProfile =
    ((CreditMonitoringContainer.prototype = Object.create(Container.prototype)),
    ((CreditMonitoringContainer.prototype.constructor = CreditMonitoringContainer).prototype.initialize = function (t) {
      (t = $(t)),
        this.buildItems(this._items, t.find(".profiles").get(0), this._buildOptions),
        this.buildItems(
          this.alerts,
          t.find(".alerts").get(0),
          $.extend({}, this._buildOptions, { sortFunction: CreditMonitoringAlert.prototype.sortByDateDesc })
        );
    }),
    (CreditMonitoringContainer.prototype.buildItems = function (t, e) {
      0 < t.length && (LPTools.removeDOMChildren(e), Container.prototype.buildItems.apply(this, arguments));
    }),
    (CreditMonitoringContainer.prototype.getChildren = function () {
      var t;
      return Container.prototype.getChildren.apply(this, arguments).concat(this.alerts);
    }),
    function (t) {
      VaultItemBase.call(this, t), VaultItemBaseDisplay.call(this, this);
      for (var e = 0, r = this._data.alerts.length; e < r; ++e) this._data.alerts[e] = new CreditMonitoringAlert(this._data.alerts[e]);
    }),
  CreditMonitoringAlert =
    ((CreditMonitoringProfile.prototype = Object.create(VaultItemBase.prototype)),
    $.extend(CreditMonitoringProfile.prototype, VaultItemBaseDisplay.prototype),
    ((CreditMonitoringProfile.prototype.constructor = CreditMonitoringProfile).prototype.getID = function () {
      return this._data.subscriberid;
    }),
    (CreditMonitoringProfile.prototype.getName = function () {
      return "";
    }),
    (CreditMonitoringProfile.prototype.getEnabledDate = function () {
      return this._data.date;
    }),
    (CreditMonitoringProfile.prototype.getStatus = function () {
      return this._data.state;
    }),
    (CreditMonitoringProfile.prototype.getAlerts = function () {
      return this._data.alerts;
    }),
    (CreditMonitoringProfile.prototype.isPremium = function () {
      return "1" === this._data.premium;
    }),
    (CreditMonitoringProfile.prototype.build = function (t) {
      var e = LPTools.createElement("tr"),
        r =
          (e.appendChild(this.createTextElement("td", this.getID)),
          e.appendChild(this.createTextElement("td", this.getEnabledDate)),
          e.appendChild(this.createTextElement("td", this.getStatus)),
          LPTools.createElement("td"));
      return (
        e.appendChild(r),
        this.isPremium()
          ? r.appendChild(
              LPTools.createElement("a", { class: "creditProfileAction", vaultaction: Constants.ACTION_DASHBOARD }, "Dashboard")
            )
          : r.appendChild(LPTools.createElement("a", { class: "creditProfileAction", vaultaction: Constants.ACTION_UPGRADE }, "Upgrade")),
        e
      );
    }),
    (CreditMonitoringProfile.prototype.getContextMenuItems = function (t) {
      return this.isPremium()
        ? [new LPTools.ContextMenuItem(Constants.ACTION_DASHBOARD)]
        : [new LPTools.ContextMenuItem(Constants.ACTION_UPGRADE)];
    }),
    (CreditMonitoringProfile.prototype.handleClickEvent = function (t, e) {
      switch (t) {
        case Constants.ACTION_UPGRADE:
          this.upgrade();
          break;
        case Constants.ACTION_DASHBOARD:
          this.openDashboard();
          break;
        default:
          VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments);
      }
    }),
    (CreditMonitoringProfile.prototype.openDashboard = function () {
      var t =
          "undefined" != typeof chrome &&
          (void 0 !== chrome.runtime || void 0 !== chrome.extension) &&
          -1 != navigator.userAgent.indexOf(" Firefox/"),
        e = "undefined" != typeof safari && void 0 !== safari.self,
        t;
      t || e
        ? ((t = { subscriberid: this.getID(), cmd: "getdashboardurl" }),
          $.ajax({
            global: !1,
            type: "POST",
            cache: !1,
            dataType: "json",
            url: LPProxy.getBaseURL() + "creditmon.php",
            data: t,
            timeout: 2e4,
            success: function (t) {
              "" !== t
                ? bg.openURL(t)
                : dialogs.alert.open({
                    title: Strings.translateString("An error occurred. Please try again later."),
                    text: ["Unexpected error happened."]
                  });
            },
            error: function (t, e) {
              var r = [],
                r =
                  404 === t.status
                    ? [
                        "We couldn't find this user in the credit monitoring database",
                        "Please register at least one Credit Monitoring Form Fill"
                      ]
                    : 400 === t.status
                    ? [
                        "You don't have LastPass Premium Credit Monitoring.",
                        "Please upgrade to LastPass Premium Credit Monitoring to use the Credit Monitoring Dashboard."
                      ]
                    : ["Unexpected error happen, please contact LastPass Support"];
              dialogs.alert.open({ title: Strings.translateString("An error occurred. Please try again later."), text: r });
            }
          }))
        : LPProxy.callAcctsIFrameCommand("opencreditmondashnoalert", this.getID());
    }),
    (CreditMonitoringProfile.prototype.upgrade = function () {
      bg.openURL(LPProxy.getBaseURL() + "features_joinpremium_creditmon.php");
    }),
    function (t) {
      VaultItemBase.call(this, t), VaultItemBaseDisplay.call(this, this);
    });
(CreditMonitoringAlert.prototype = Object.create(VaultItemBase.prototype)),
  $.extend(CreditMonitoringAlert.prototype, VaultItemBaseDisplay.prototype),
  ((CreditMonitoringAlert.prototype.constructor = CreditMonitoringAlert).prototype.getID = function () {
    return this._data.id;
  }),
  (CreditMonitoringAlert.prototype.getDate = function () {
    return this._data.date;
  }),
  (CreditMonitoringAlert.prototype.getMessage = function () {
    return this._data.message;
  }),
  (CreditMonitoringAlert.prototype.getProfileID = function () {
    return this._data.subscriberid;
  }),
  (CreditMonitoringAlert.prototype.getDateMillis = function () {
    return Date.parse(this._data.date);
  }),
  (CreditMonitoringAlert.prototype.sortByDateDesc = function (t, e) {
    return VaultItemBase.prototype.sortByFunction(t, e, "getDateMillis", !1);
  }),
  (CreditMonitoringAlert.prototype.build = function (t) {
    var e = LPTools.createElement("tr"),
      r =
        (e.appendChild(this.createTextElement("td", this.getDate)),
        e.appendChild(this.createTextElement("td", this.getProfileID)),
        e.appendChild(this.createTextElement("td", this.getMessage)),
        LPTools.createElement("td"));
    return (
      r.appendChild(LPTools.createElement("a", { class: "creditProfileAction", vaultaction: Constants.ACTION_DELETE }, "Delete")),
      e.appendChild(r),
      e
    );
  }),
  (CreditMonitoringAlert.prototype.toString = function () {
    return Strings.translateString("Alert") + ": " + this.getMessage();
  }),
  (CreditMonitoringAlert.prototype.getContextMenuItems = function (t) {
    return [new LPTools.ContextMenuItem(Constants.ACTION_DELETE)];
  }),
  (CreditMonitoringAlert.prototype.handleClickEvent = function (t, e) {
    t === Constants.ACTION_DELETE ? this.deleteItem() : VaultItemBaseDisplay.prototype.handleClickEvent.apply(this, arguments);
  }),
  (CreditMonitoringAlert.prototype.deleteItem = function () {
    var t;
    (t = this),
      LPRequest.makeRequest(LPProxy.deleteCreditMonitoringAlert, {
        parameters: t.getID(),
        success: function () {
          t.deleteUpdates();
        },
        confirm: t.confirmDelete()
      });
  });
