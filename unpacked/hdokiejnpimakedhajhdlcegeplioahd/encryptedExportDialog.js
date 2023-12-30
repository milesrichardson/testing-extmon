var EncryptedExportDialog = function (t) {
  Dialog.call(this, t, {
    additionalHeaderClasses: ["icon", "leftIcon"],
    dynamicHeight: !0,
    responsive: !1,
    buttonsInsideContent: !0,
    nextButtonText: Strings.translateString("Continue"),
    title: Strings.translateString("Encrypted export"),
    confirmOnClose: !1,
    overlayDialog: !0
  }),
    (this.valid = !1);
};
(EncryptedExportDialog.prototype = Object.create(Dialog.prototype)),
  ((EncryptedExportDialog.prototype.constructor = EncryptedExportDialog).prototype.initialize = function (t) {
    Dialog.prototype.initialize.call(this, t);
    var n = Strings.translateString("Show Password"),
      r = Strings.translateString("Hide Password");
    t.find(".showPassword").on("click", function () {
      var t = $(this),
        e = t.hasClass("selected") ? "password" : "text",
        i = t.hasClass("selected") ? r : n;
      t.parent().find("input").attr("type", e), t.attr("title", i), t.toggleClass("selected");
    }),
      (this.inputFields.encryptionKey.validate = function (t, e, i) {
        return i
          ? !(i.length < 12 || -1 === i.search(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).+$/)) ||
              (t.addError(
                e,
                Strings.translateString(
                  "Your key's not strong enough! Minimum requirements: 12 characters, 1 number, 1 uppercase & 1 lowercase letter."
                )
              ),
              !1)
          : (t.addError(e, Strings.translateString("Required!")), !1);
      }),
      (this.inputFields.confirmKey.validate = function (t, e, i) {
        return (
          i === t.validateOptions.data.encryptionKey || (t.addError(e, Strings.translateString("Key and confirmation don't match!")), !1)
        );
      });
  }),
  (EncryptedExportDialog.prototype.handleSubmit = function () {
    (this.valid = !0), this.close();
  }),
  (EncryptedExportDialog.prototype.close = function (t) {
    var e;
    "function" == typeof this.data.callback && ((e = this.getData()), this.data.callback(this.valid, e.encryptionKey)),
      Dialog.prototype.close.call(this, t);
  });
