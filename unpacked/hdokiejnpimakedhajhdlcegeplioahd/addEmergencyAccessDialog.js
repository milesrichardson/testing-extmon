var AddEmergencyAccessDialog = function (e) {
  VaultItemDialog.call(this, e, {
    additionalHeaderClasses: ["icon"],
    dynamicHeight: !0,
    title: Strings.translateString("Setup Emergency Access"),
    nextButtonText: Strings.translateString("Send Invite"),
    buttonAlign: this.RIGHT_ALIGN,
    excludedActions: [Constants.ACTION_EDIT, Constants.ACTION_EMAIL]
  });
};
(AddEmergencyAccessDialog.prototype = Object.create(VaultItemDialog.prototype)),
  ((AddEmergencyAccessDialog.prototype.constructor = AddEmergencyAccessDialog).prototype.open = function (e) {
    VaultItemDialog.prototype.open.call(
      this,
      $.extend(e, { sourceFunction: LPProxy.getEmergencyAccessRecipientModel, defaultData: { hours_to_override: 48 } })
    );
  }),
  (AddEmergencyAccessDialog.prototype.add = function (e) {
    var t;
    new EmergencyAccessRecipient().addFromDialog(e),
      reduxApp &&
        "function" == typeof reduxApp.completeSecondaryOnboardingSkill &&
        reduxApp.completeSecondaryOnboardingSkill("SetUpEmergencyAccess"),
      bg.sendLpImprove("added_emergency_contact");
  }),
  (AddEmergencyAccessDialog.prototype.setup = function () {
    VaultItemDialog.prototype.setup.apply(this, arguments),
      this.vaultItem
        ? (this.inputFields.username.disable(), this.nextButton.text(Strings.translateString("Save")))
        : (this.inputFields.username.enable(), this.nextButton.text(Strings.translateString("Send Invite")));
  });
