var ExtensionFirefoxAccept = function (t) {
  Dialog.call(this, t, { closeButtonEnabled: !1, hideHeader: !0, hideButtons: !0, confirmOnClose: !1 });
};
(ExtensionFirefoxAccept.prototype = Object.create(Dialog.prototype)),
  ((ExtensionFirefoxAccept.prototype.constructor = ExtensionFirefoxAccept).prototype.initialize = function (t) {
    var o, e, i;
    Dialog.prototype.initialize.apply(this, arguments),
      (o = this),
      (e = t.find("#button-accept")),
      (i = t.find("#button-decline")),
      e.bind("click", function () {
        window.localStorage.setItem("opt-in", !0), bg.LPPlatform.openTabDialog("createAccountSimple"), o.close(!0);
      }),
      i.bind("click", function () {
        window.localStorage.setItem("opt-in", !1), o.close(!0);
      }),
      i.focus();
  });
