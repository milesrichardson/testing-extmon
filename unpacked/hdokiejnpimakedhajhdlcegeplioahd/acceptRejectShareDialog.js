var AcceptShareDialog = function (t) {
  DialogWithGroupInput.call(this, t, { dynamicHeight: !0, responsive: !1, title: Strings.translateString("Accept Share") });
};
(AcceptShareDialog.prototype = Object.create(DialogWithGroupInput.prototype)),
  ((AcceptShareDialog.prototype.constructor = AcceptShareDialog).prototype.open = function (t) {
    (t.sourceFunction = LPProxy.getPendingRecievedShare), DialogWithGroupInput.prototype.open.call(this, t);
  }),
  (AcceptShareDialog.prototype.buildActionButtons = function () {}),
  (AcceptShareDialog.prototype.validate = function (t) {
    var e = DialogWithGroupInput.prototype.validate.apply(this, arguments),
      o = this.getGroup(t);
    return (
      o &&
        o.getSharedGroup() &&
        (this.addError(
          "group",
          Strings.translateString("An individual share cannot be saved to a Shared Folder or Personal Linked Account.")
        ),
        (e = !1)),
      e
    );
  }),
  (AcceptShareDialog.prototype.handleSubmit = function (t, e) {
    e.vaultItem.accept(t, this.getGroup(t));
  });
