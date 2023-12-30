var MigrationPopup = function (o) {
  Dialog.call(this, o, { submitDialog: !1, confirmOnClose: !1, hideButtons: !0, responsive: !1, hideHeader: !0 });
};
(MigrationPopup.prototype = Object.create(Dialog.prototype)),
  ((MigrationPopup.prototype.constructor = MigrationPopup).prototype.initialize = function () {
    Dialog.prototype.initialize.apply(this, arguments);
    var o = bg.get_method() ? bg.get_method() : "web",
      t;
    (t = this),
      ("cr" === o && "ff" === o && "edgecr" === o) ||
        (document.getElementById("migrationDialogText").innerHtml = Strings.translateString(
          "Update to the new LastPass experience. It should only take a minute. You'll be logged out here and taken to LastPass.com to finish. Sorry for the inconvenience, but it only happens once - and it's worth it! Promise."
        )),
      (document.getElementById("openVault").onclick = function () {
        bg.sendLpImprove("migration_formfill_notification_clicked", { action: "update_now", version: "dropdown" }),
          "cr" === o || "ff" === o || "edgecr" === o
            ? (bg.MigrationBackground.setShouldStartMigration(!0), bg.openvault())
            : (bg.openURL("https://lastpass.com/experience-update"), bg.lpevent("m_lo"), bg.loggedOut(!1, "menu")),
          t.close();
      }),
      (document.getElementById("closePopup").onclick = function () {
        var o;
        bg.sendLpImprove("migration_formfill_notification_clicked", { action: "not_now", version: "dropdown" }),
          bg.MigrationBackground.postponeMigration(36e5),
          t.close();
      }),
      bg.sendLpImprove("migration_formfill_notification_shown", { version: "dropdown" });
  });
