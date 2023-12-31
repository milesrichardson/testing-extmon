ExtensionBillingAddressNotification = (function (e) {
  var n = $(e.body),
    t,
    i;
  return {
    initialize: function () {
      var t = bg.get("g_uid") + "_billingInfoNotificationData",
        e = LPProxy.getAccountClass(),
        i = new Date().getTime(),
        n = 144e5,
        o,
        n;
      try {
        o = JSON.parse(bg.localStorage_getItem(t));
      } catch (e) {
        console.error("Cannot parse json", bg.localStorage_getItem(t)), bg.localStorage_setItem(t, "");
      }
      o &&
      o.hasOwnProperty("shouldCheckFlagAndShowNotification") &&
      o.hasOwnProperty("lastCheck") &&
      o.hasOwnProperty("userAccountType") &&
      (o.shouldCheckFlagAndShowNotification || !bg.get("g_show_billing_address_notification"))
        ? ((n = o.lastCheck + n < i),
          ((o.shouldCheckFlagAndShowNotification && n && !bg.get("g_show_billing_address_notification")) || o.userAccountType !== e) &&
            bg.checkShouldShowBillingAddressNotification(function () {
              bg.localStorage_setItem(
                t,
                JSON.stringify({
                  shouldCheckFlagAndShowNotification: bg.get("g_show_billing_address_notification"),
                  lastCheck: i,
                  userAccountType: e
                })
              );
            }))
        : bg.localStorage_setItem(
            t,
            JSON.stringify({
              shouldCheckFlagAndShowNotification: bg.get("g_show_billing_address_notification"),
              lastCheck: i,
              userAccountType: e
            })
          );
    },
    showBillingAddressNotification: function () {
      n.addClass("billingAddressNotification panelIsActive"), bg.sendLpImprove("billing_address_callout_shown", { source: "extension" });
      var e = "Enterprise Admin" === (userAccountType = LPProxy.getAccountClass()) || "Teams Admin" === userAccountType,
        t = document.getElementById("billing-address-notification-description"),
        i;
      (t.textContent = e
        ? Strings.translateString(
            "To ensure continued service, update the billing information associated with your business's payment method."
          )
        : Strings.translateString("To ensure continued service, update the billing information associated with your payment method.")),
        $("#addBillingInfoButton").click(function () {
          bg.hideBillingAddressNotification(),
            bg.sendLpImprove("billing_address_callout_clicked", { source: "extension" }),
            e
              ? bg.openURL(bg.get("base_url") + "company/#!settings/company-profile")
              : bg.openURL(bg.get("base_url") + "my.php?lpnorefresh=1&billing-info-message=true");
        });
    }
  };
})(document);
