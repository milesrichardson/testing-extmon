ExtensionDropdownMessagingDialog = (function (e) {
  var n = $(e.body),
    t,
    o = function (e) {
      e.dialogClasses && (document.getElementById("extensionDropdownMessagingDialog").className = e.dialogClasses),
        (document.getElementById("extensionDropdownMessagingDialogHeader").innerHTML = e.headerText
          ? Strings.translateString(e.headerText)
          : "");
      var n = "";
      if (
        (e.linkText && e.linkUrl
          ? (document.getElementById("extensionDropdownMessagingDialogLink").addEventListener("click", function () {
              bg.openURL(e.linkUrl), bg.sendLpImprove(e.buttonEvent, e.linkEventProps || {});
            }),
            (document.getElementById("extensionDropdownMessagingDialogLink").innerHTML = Strings.translateString(e.linkText)))
          : (document.getElementById("extensionDropdownMessagingDialogLink").style.display = "none"),
        e.subHeaderText
          ? (document.getElementById("extensionDropdownMessagingDialogSubHeader").innerHTML =
              (e.subHeaderText ? Strings.translateString(e.subHeaderText) : "") + n)
          : (document.getElementById("extensionDropdownMessagingDialogSubHeader").style.display = "none"),
        (document.getElementById("extensionDropdownMessagingDialogText1").innerHTML = e.text1 ? Strings.translateString(e.text1) : ""),
        (document.getElementById("extensionDropdownMessagingDialogText2").innerHTML = e.text2 ? Strings.translateString(e.text2) : ""),
        e.text3
          ? (document.getElementById("extensionDropdownMessagingDialogText3").innerHTML = Strings.translateString(e.text3))
          : (document.getElementById("extensionDropdownMessagingDialogText3").style.display = "none"),
        e.text4
          ? (document.getElementById("extensionDropdownMessagingDialogText4").innerHTML = Strings.translateString(e.text4))
          : (document.getElementById("extensionDropdownMessagingDialogText4").style.display = "none"),
        (document.getElementById("extensionDropdownMessagingDialogButton").innerHTML = e.buttonText
          ? Strings.translateString(e.buttonText)
          : ""),
        e.imageCenter
          ? (document.getElementById("imageCenter").src = "images/" + e.imageCenter)
          : (document.getElementById("imageCenter").style.display = "none"),
        e.imageTop
          ? (document.getElementById("imageTop").src = "images/" + e.imageTop)
          : (document.getElementById("imageTop").style.display = "none"),
        e.lowerText
          ? (document.getElementById("extensionDropdownMessagingDialogLowerText").innerHTML = Strings.translateString(e.lowerText))
          : (document.getElementById("extensionDropdownMessagingDialogLowerText").style.display = "none"),
        e.centerImages)
      )
        for (var t = document.querySelectorAll(".imagesCenter"), o = 0; o < e.centerImages.length; o++)
          t[o].src = "images/" + e.centerImages[o] + ".png";
      else document.getElementById("flexContainerImages").style.display = "none";
      if (e.centerLabels)
        for (var s = document.querySelectorAll(".labelText"), i = 0; i < e.centerLabels.length; i++)
          s[i].innerHTML = Strings.translateString(e.centerLabels[i]);
      else document.getElementById("flexContainerLabels").style.display = "none";
      $("#extensionDropdownMessagingDialogButton").click(function () {
        e.buttonEvent && bg.sendLpImprove(e.buttonEvent, e.buttonEventProps || {}),
          e.buttonAction && "function" == typeof e.buttonAction && e.buttonAction(),
          LPPlatform.closePopup(!0);
      }),
        e.closePanelButton
          ? ((document.getElementById("extensionDropdownMessagingDialogDismiss").innerHTML = Strings.translateString("Dismiss")),
            document.getElementById("extensionDropdownMessagingDialogDismiss").addEventListener("click", function () {
              e.buttonEvent && bg.sendLpImprove(e.buttonEvent, e.closePanelEventProps || {}),
                e.closePanelButtonAction && "function" == typeof e.closePanelButtonAction && e.closePanelButtonAction(),
                e.key && !localStorage.getItem(e.key) && localStorage.setItem(e.key, 1),
                g();
            }))
          : (document.getElementById("extensionDropdownMessagingDialogDismiss").style.display = "none");
    };
  function g() {
    $("#panelContainer").css("display", "none"), $("#extensionDropdownMessagingDialog").remove(), ExtensionDropdown.setSize();
  }
  return {
    initialize: function (e) {
      e.class
        ? n.addClass("extensionDropdownMessagingDialog panelIsActive " + e.class)
        : n.addClass("extensionDropdownMessagingDialog panelIsActive"),
        o(e),
        e.openEvent && bg.sendLpImprove(e.openEvent, e.openEventProps || {});
    }
  };
})(document);
