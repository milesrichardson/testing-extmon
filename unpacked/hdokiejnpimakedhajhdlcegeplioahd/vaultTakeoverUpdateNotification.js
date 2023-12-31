var VaultTakeoverUpdateNotificationDialog = function (o) {
  Dialog.call(this, o, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0
  });
};
(VaultTakeoverUpdateNotificationDialog.prototype = Object.create(Dialog.prototype)),
  ((VaultTakeoverUpdateNotificationDialog.prototype.constructor = VaultTakeoverUpdateNotificationDialog).prototype.initialize = function (
    o
  ) {
    var i, t;
    Dialog.prototype.initialize.apply(this, arguments),
      (i = this),
      (t = void 0 === bg.get_method ? "undefined" : bg.get_method()),
      o.find("#vault-takeover-update-notification-row-update").bind("click", function () {
        bg.sendLpImprove("migration_formfill_notification_clicked", {
          action: "migrate",
          version: "vault_takeover",
          vault_version: "omar"
        }),
          LPVault.startFormFillMigration(t),
          i.close(!0);
      }),
      o.find("#vault-takeover-update-notification-row-skip").bind("click", function () {
        bg.sendLpImprove("migration_formfill_notification_clicked", {
          action: "not_now",
          version: "vault_takeover",
          vault_version: "omar"
        }),
          i.close(!0),
          LPVault.showWelcomeUpdateDialog(t);
      }),
      bg.sendLpImprove("migration_formfill_notification_shown", { version: "vault_takeover", vault_version: "omar" });
  });
