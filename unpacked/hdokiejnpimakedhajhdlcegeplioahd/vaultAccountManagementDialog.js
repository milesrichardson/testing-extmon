var VaultAccountManagementDialog = function (t) {
  Dialog.call(this, t, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0,
    overlayDialog: !0,
    blurOverlay: !0
  });
};
(VaultAccountManagementDialog.prototype = Object.create(Dialog.prototype)),
  ((VaultAccountManagementDialog.prototype.constructor = VaultAccountManagementDialog).prototype.initialize = function (t, e) {
    var o, n, a;
    Dialog.prototype.initialize.apply(this, arguments),
      (o = this),
      (document.getElementById("AM_userEmail").innerText = bg.get("g_username")),
      (n = function () {
        o.close();
      }),
      (a = function () {
        o.close(), dialogs.vaultDeleteAccountDialog.open();
      }),
      document.getElementById("AM_closeDialog").addEventListener("click", n),
      document.getElementById("AM_deleteAccountButton").addEventListener("click", a);
  });
