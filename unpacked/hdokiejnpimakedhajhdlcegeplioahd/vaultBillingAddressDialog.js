var VaultBillingAddressDialog = function (i) {
  Dialog.call(this, i, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0
  });
};
(VaultBillingAddressDialog.prototype = Object.create(Dialog.prototype)),
  ((VaultBillingAddressDialog.prototype.constructor = VaultBillingAddressDialog).prototype.initialize = function (i) {
    var t, e, o;
    Dialog.prototype.initialize.apply(this, arguments),
      (t = this),
      (e = LPProxy.getAccountClass()),
      (o = e === Constants.USER_ENTERPRISE_ADMIN || e === Constants.USER_TEAMS_ADMIN),
      ((e = document.getElementById("vault-billing-address-dialog-description")).textContent = o
        ? Strings.translateString(
            "To ensure continued service, update the billing information associated with your business's payment method."
          )
        : Strings.translateString("To ensure continued service, update the billing information associated with your payment method.")),
      (document.getElementById("vault-billing-address-dialog-row-update").onclick = function () {
        bg.sendLpImprove("billing_address_callout_clicked", { source: "webvault" }),
          o
            ? bg.openURL("https://lastpass.com/company/#!settings/company-profile")
            : bg.openURL("https://lastpass.com/my.php?lpnorefresh=1&billing-info-message=true"),
          bg.hideBillingAddressNotification(),
          t.close(!0);
      }),
      (document.getElementById("vault-billing-address-dialog-row-skip").onclick = function () {
        bg.hideBillingAddressNotification(), t.close(!0);
      }),
      (document.getElementById("vault-billing-address-dialog-close-image").onclick = function () {
        bg.hideBillingAddressNotification(), t.close(!0);
      });
  });
