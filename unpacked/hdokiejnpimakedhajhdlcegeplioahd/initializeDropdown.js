(bg = chrome.extension.getBackgroundPage().LPPlatform.getBackgroundInterface()) &&
  document.addEventListener("DOMContentLoaded", function () {
    Topics.get(Topics.INITIALIZED).publish();
    var t = function () {
      LPProxy.isPremiumTrialUser() && LPPlatform.setDropdownPopoverSize(365, 700), ExtensionDropdown.open();
    };
    bg.get("LPContentScriptFeatures").web_client_fill
      ? t()
      : bg.get_selected_tab(null, function (e) {
          bg.setcurrenttabid(e.id), bg.setcurrenturl(bg.gettaburl(e)), t();
        });
  });
