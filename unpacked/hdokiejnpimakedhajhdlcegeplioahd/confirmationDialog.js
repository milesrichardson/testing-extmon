var ConfirmationDialog = function (t) {
    Dialog.call(this, t, { dynamicHeight: !0, closeButtonEnabled: !0, buttonAlign: this.CENTER_ALIGN, overlayDialog: !0 });
  },
  AlertDialog =
    ((ConfirmationDialog.prototype = Object.create(Dialog.prototype)),
    ((ConfirmationDialog.prototype.constructor = ConfirmationDialog).prototype.initialize = function (t) {
      Dialog.prototype.initialize.apply(this, arguments), t.attr("role", "alertdialog"), t.attr("aria-labelledby", "confirmationText");
    }),
    (ConfirmationDialog.prototype.setup = function (t, o) {
      LPTools.setContent($("#confirmationText"), o.text),
        this.nextButton.text(o.nextButtonText || Strings.Vault.YES),
        this.backButton.text(o.backButtonText || Strings.Vault.NO),
        Dialog.prototype.setup.apply(this, arguments);
    }),
    (ConfirmationDialog.prototype.handleSubmit = function (t, o) {
      delete o.closeHandler;
      var i = this;
      "function" == typeof o.handler
        ? 1 === o.handler.length
          ? o.handler(function () {
              i.close();
            })
          : (i.close(), o.handler())
        : i.close();
    }),
    (ConfirmationDialog.prototype.close = function () {
      var t = Dialog.prototype.close.apply(this, arguments);
      return t && "function" == typeof this.data.closeHandler && this.data.closeHandler(), t;
    }),
    function (t) {
      ConfirmationDialog.call(this, t);
    });
(AlertDialog.prototype = Object.create(ConfirmationDialog.prototype)),
  ((AlertDialog.prototype.constructor = AlertDialog).prototype.initialize = function () {
    ConfirmationDialog.prototype.initialize.apply(this, arguments),
      this.nextButton.text(Strings.translateString("OK")),
      this.backButton.remove();
  }),
  (AlertDialog.prototype.setup = function (t, o) {
    (o.closeHandler = o.handler), LPTools.setContent($("#alertText"), o.text), Dialog.prototype.setup.apply(this, arguments);
  });
