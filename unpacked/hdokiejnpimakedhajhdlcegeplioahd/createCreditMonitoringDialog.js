var CreateCreditMonitoringDialog = function (t) {
  Dialog.call(this, t, {
    additionalHeaderClasses: ["icon"],
    dynamicHeight: !0,
    title: Strings.translateString("Create Credit Monitoring Profile"),
    nextButtonText: Strings.translateString("Create New Profile")
  });
};
(CreateCreditMonitoringDialog.prototype = Object.create(Dialog.prototype)),
  ((CreateCreditMonitoringDialog.prototype.constructor = CreateCreditMonitoringDialog).prototype.initialize = function () {
    Dialog.prototype.initialize.apply(this, arguments), this.nextButton.addClass("dynamicWidth");
  }),
  (CreateCreditMonitoringDialog.prototype.setup = function () {
    for (var e = this, t = [], i = LPProxy.getFormFills(), n = 0, o = i.length, r; n < o; ++n) {
      var a = i[n];
      "1" !== a._model._data.profiletype && t.push(a);
    }
    (e.containers.formFill = new Container(t, {
      display: VaultItemBaseDisplay.prototype.DISPLAY_LIST,
      additionalItemClasses: "creditMonitoringItem",
      allowDrag: !1,
      allowDrop: !1,
      excludeActions: [Constants.ACTION_SHARE],
      multiSelect: !1,
      publishSelect: !1,
      selectCallback: function (t) {
        0 === t
          ? e.nextButton.text(Strings.translateString("Create New Profile"))
          : e.nextButton.text(Strings.translateString("Enable Credit Monitoring"));
      }
    })),
      this.containers.formFill.isEmpty()
        ? (document.getElementById("createCreditMonitoringProfile").textContent = Strings.translateString("None available"))
        : ((r = document.getElementById("createCreditMonitoringProfile")),
          LPTools.removeDOMChildren(r),
          this.containers.formFill.initialize(r)),
      this.nextButton.text(Strings.translateString("Create New Profile")),
      Dialog.prototype.setup.apply(this, arguments);
  }),
  (CreateCreditMonitoringDialog.prototype.handleSubmit = function () {
    var t = this.containers.formFill.getSelectedModelItems(),
      t;
    0 < t.length
      ? ((t = t[0]),
        dialogs.formFill.open({
          vaultItem: t,
          show: !1,
          postSetup: function (e) {
            e.inputFields.creditmon.setValue(!0),
              e.performValidate({
                data: e.getData(!1),
                callback: function (t) {
                  t
                    ? e.submit()
                    : (e.setTitle(Strings.translateString("Enable Credit Monitoring")),
                      e.$element.show(),
                      dialogs.alert.open({
                        title: Strings.translateString("An error occurred. Please try again later."),
                        text: Strings.translateString(
                          "Please correct the validation errors and then click Save to enable credit monitoring."
                        )
                      }));
                }
              });
          }
        }))
      : dialogs.formFill.open({ title: this.getTitle(), defaultData: { creditmon: !0 } }),
      this.close(!0);
  });
