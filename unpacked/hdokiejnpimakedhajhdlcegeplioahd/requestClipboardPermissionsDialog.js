var RequestClipboardPermissionsDialog = function (e) {
    Dialog.call(this, e, {
      additionalHeaderClasses: ["icon", "rightIcon"],
      dynamicHeight: !0,
      title: Strings.translateString("Permission required"),
      closeButtonEnabled: !1,
      buttonsInsideContent: !0,
      buttonAlign: this.CENTER_ALIGN
    });
  },
  requiredPermissions = { permissions: ["clipboardWrite"] };
(RequestClipboardPermissionsDialog.prototype = Object.create(Dialog.prototype)),
  ((RequestClipboardPermissionsDialog.prototype.constructor = RequestClipboardPermissionsDialog).prototype.setupButtons = function () {
    document.querySelector("#requestPermissionButton").onclick = this.createHandler(function () {
      this.requestPermission();
    });
  }),
  (RequestClipboardPermissionsDialog.prototype.requestPermission = function () {
    var i = this;
    browser.permissions
      .request(requiredPermissions)
      .then(function (e) {
        e && bg.LPPlatform.copyLastCopiedString(), i.close(!0);
      })
      .catch(function (e) {
        LPPlatform.logException(e);
      });
  });
