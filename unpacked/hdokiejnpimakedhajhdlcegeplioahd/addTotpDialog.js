var AddTotpDialog = function (t) {
  Dialog.call(this, t, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !0,
    title: Strings.translateString("Activate one-time passcodes")
  });
};
(AddTotpDialog.prototype = Object.create(Dialog.prototype)),
  ((AddTotpDialog.prototype.constructor = AddTotpDialog).prototype.initialize = function (a) {
    function i(t) {
      return t.toUpperCase().replace(/-/g, "").replace(/\s/g, "");
    }
    function r(t) {
      try {
        var e;
        if (!new RegExp("^[A-Z2-7=]*$").test(t)) return "Use only these characters: A-Z, 2-7, =";
        var o = new jsOTP.totp().getOtp(t),
          n;
        if (!new RegExp("^\\d{6}$").test(o)) return "That key doesn't seem valid. Check it and try again.";
      } catch (t) {
        return console.log(t), "That key doesn't seem valid. Check it and try again.";
      }
      return "";
    }
    var d;
    Dialog.prototype.initialize.apply(this, arguments),
      (d = this),
      a.find(".wbtn").bind("click", function () {
        (document.getElementById("totpSecret").value = ""), a.find("#totpError").text(""), d.close();
      }),
      a.find(".rbtn").bind("click", function () {
        var t,
          e = i(a.find("#totpSecret").val()),
          o = r(e),
          n =
            "undefined" != typeof reduxApp &&
            reduxApp.getState().settings.features.react_save_site_dialog &&
            reduxApp.getState().dialogs &&
            reduxApp.getState().dialogs.saveSiteDialogData,
          o;
        o
          ? ((o = Strings.translateString(o)), a.find("#totpError").text(o))
          : (n
              ? reduxApp.setTotpData(e)
              : ((document.getElementById("siteDialogTotp").value = e),
                (document.getElementById("siteDialogTotpCode").value = "******"),
                (document.getElementById("siteDialogDeleteTotpSecret").style.display = "block"),
                (document.getElementById("siteDialogAddTotpSecret").style.display = "none"),
                (document.getElementById("totpSecret").value = ""),
                a.find("#totpError").text("")),
            bg.sendLpImprove("totp_secret_added"),
            d.close());
      }),
      (a.find("#totpSecret")[0].value = "");
  });
