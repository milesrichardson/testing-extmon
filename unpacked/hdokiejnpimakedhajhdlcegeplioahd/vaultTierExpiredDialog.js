var TierExpiredDialog = function (e) {
  Dialog.call(this, e, { additionalHeaderClasses: [], dynamicHeight: !0, buttonsInsideContent: !0, closeButtonEnabled: !1 });
};
(TierExpiredDialog.prototype = Object.create(Dialog.prototype)),
  ((TierExpiredDialog.prototype.constructor = TierExpiredDialog).prototype.initialize = function (e) {
    var i, t, n, o;
    Dialog.prototype.initialize.apply(this, arguments),
      (t = (i = this).data.dialogId) &&
        (bg.sendLpImprove("license_expiration_seen"),
        (n = i.data.paymentPage),
        (o = i.data.storageItem),
        e.find("#" + t).addClass("visibleContent"),
        e.find("#" + t + " .try-btn").bind("click", function () {
          n && "function" == typeof n && n(), bg.sendLpImprove("license_expiration_upgrade"), i.close();
        }),
        e.find("#" + t + " .no-thanks-btn").bind("click", function () {
          var e = JSON.parse(localStorage.getItem("expiredData"));
          o && (((e = null === e ? {} : e)[o] = 1), localStorage.setItem("expiredData", JSON.stringify(e))),
            bg.sendLpImprove("license_expiration_dismiss"),
            i.close();
        }),
        e.find(".tierExpiredLearnMore").bind("click", function () {
          bg.sendLpImprove("license_expiration_learn_more"), bg.openPricingPage();
        }));
  });
