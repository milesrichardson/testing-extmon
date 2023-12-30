ExtensionDeviceLimitNotification = (function (e) {
  var g = $(e.body),
    l = 864e5,
    d = 14 * l,
    m = 28 * l,
    p = new Date(),
    i,
    t;
  return {
    initialize: function () {
      var e = bg.get("g_device_limit_releaseTS");
      if (
        bg.get("g_show_device_limit_notification") &&
        LPProxy.isExpiredFamilyUser() &&
        parent.reduxApp.getState().settings.features.expiredFamiliesPurchaseFlow
      ) {
        var i = bg.get("g_uid") + "_deviceLimitNotificationData",
          t = p,
          o;
        try {
          t = (o = JSON.parse(bg.localStorage_getItem(i))).lastShown;
        } catch (e) {
          console.error("Cannot parse deviceLimitNotification json", bg.localStorage_getItem(i));
        }
        e <= p
          ? bg.setDeviceLimitNotification(!1)
          : p === t
          ? bg.setDeviceLimitNotification(!0)
          : ((t < e - m && p < e - m) ||
              (e - m <= t && t < e - d && e - m <= p && p < e - d) ||
              (e - d <= t && t < e - l && e - d <= p && p < e - l) ||
              (e - l <= t && t < e && e - l <= p && p < e)) &&
            bg.setDeviceLimitNotification(!1);
      }
    },
    setupUI: function () {
      var e = bg.get("g_device_limit_releaseTS"),
        i = $("#dialogTitle"),
        t = document.getElementById("dialogText"),
        o = $("#dialogImg"),
        a = bg.get("g_uid") + "_deviceLimitNotificationData",
        n = $("#deviceLimitDismissBtn"),
        s = $("#deviceLimitUpgradeBtn");
      function r(e) {
        bg.localStorage_setItem(a, JSON.stringify({ lastShown: new Date().getTime() })),
          bg.setDeviceLimitNotification(!1),
          bg.sendLpImprove("ipm_engage", {
            messageId: "30 Day Notice",
            title: e,
            campaignId: "Multi-Device Paywall",
            target: "Extension Dropdown"
          }),
          bg.get("g_issafari_appext")
            ? (bg.openvault(1),
              parent.reduxApp && parent.reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Extension Dropdown"))
            : bg.openvault(!1, "showfamilyexpiredpurchase"),
          g.removeClass("deviceLimitNotification panelIsActive"),
          LPPlatform.closePopup();
      }
      function c(e) {
        bg.localStorage_setItem(a, JSON.stringify({ lastShown: new Date().getTime() })),
          bg.setDeviceLimitNotification(!1),
          bg.sendLpImprove("ipm_dismissed", {
            messageId: "30 Day Notice",
            title: e,
            campaignId: "Multi-Device Paywall",
            target: "Extension Dropdown"
          }),
          g.removeClass("deviceLimitNotification panelIsActive"),
          ExtensionDropdown.setSize();
      }
      p < e - m || (e - m <= p && p < e - d)
        ? (i.text(Strings.translateString("Important changes to LastPass Free")),
          o.attr("src", "images/deviceLimitNotification/device_types.svg"),
          (t.innerHTML = Strings.translateString(
            "Your Families subscription has expired. Starting %sAugust 16, 2021%s, you'll only be able to use LastPass for free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.",
            "<b>",
            "</b>",
            "<b>",
            "</b>"
          )),
          bg.setDeviceLimitNotification(!0),
          n.click(function () {
            c("First Notice");
          }),
          s.click(function () {
            r("First Notice");
          }),
          bg.sendLpImprove("ipm_shown", {
            messageId: "30 Day Notice",
            title: "First Notice",
            campaignId: "Multi-Device Paywall",
            target: "Extension Dropdown"
          }))
        : e - d <= p && p < e - l
        ? (i.text(Strings.translateString("Grab your 25% discount today!")),
          o.attr("src", "images/deviceLimitNotification/illustration_yellow.svg"),
          (t.innerHTML = Strings.translateString(
            "Your Families subscription has expired. Starting %sAugust 16, 2021%s, you'll only be able to use LastPass for free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.",
            "<b>",
            "</b>",
            "<b>",
            "</b>"
          )),
          bg.setDeviceLimitNotification(!0),
          n.click(function () {
            c("Second Notice");
          }),
          s.click(function () {
            r("Second Notice");
          }),
          bg.sendLpImprove("ipm_shown", {
            messageId: "30 Day Notice",
            title: "Second Notice",
            campaignId: "Multi-Device Paywall",
            target: "Extension Dropdown"
          }))
        : e - l <= p &&
          p < e &&
          (i.text(Strings.translateString("Grab your 25% discount today!")),
          o.attr("src", "images/deviceLimitNotification/illustration_red.svg"),
          (t.innerHTML = Strings.translateString(
            "Your Families subscription has expired. Starting %stomorrow%s you'll only be able to use LastPass for free on %sone device type%s (either computers or mobile devices). To continue using LastPass everywhere, upgrade now at a 25%% discount.",
            "<b>",
            "</b>",
            "<b>",
            "</b>"
          )),
          bg.setDeviceLimitNotification(!0),
          n.click(function () {
            c("Final Notice");
          }),
          s.click(function () {
            r("Final Notice");
          }),
          bg.sendLpImprove("ipm_shown", {
            messageId: "30 Day Notice",
            title: "Final Notice",
            campaignId: "Multi-Device Paywall",
            target: "Extension Dropdown"
          })),
        g.addClass("deviceLimitNotification panelIsActive");
    }
  };
})(document);
