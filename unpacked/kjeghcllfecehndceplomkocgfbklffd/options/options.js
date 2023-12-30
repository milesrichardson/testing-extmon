/****************************************************************************************
  Module:		options
  Description:	- Initializes the strings on the options page
/****************************************************************************************
  Property of:	Webroot Inc.
  Copyright:	Webroot Inc. (c) 2023
/****************************************************************************************
  Creator:		melsaie@webroot.com
  Manager:		pblaimschein@webroot.com
  Created:		08/13/2018 (mm/dd/yyyy)
*****************************************************************************************/

var DialogEnum = {
  STANDALONE: 1,
  INTEGRATED: 2,
  PRIVACY: 3,
  DECLINED: 4
};

var kcExpiryDate = null;
var sKC = null;
var iMode = 0;

function init() {
  if (Webroot_Browser.FIREFOX != Webroot_Browser.identify_browser()) {
    chrome.runtime.sendMessage({ msg: "onOptionsDlgOpen", open: 1 });
  }
  // Initialize the strings
  initLocale();

  // Add onClick event listener to elements
  document.getElementById("allowButton").addEventListener("click", onAllowButtonClick);
  document.getElementById("declineButton").addEventListener("click", onPermissionsDeclineButtonClick);
  document.getElementById("privacyBackButton").addEventListener("click", onPrivacyBackButtonClick);
  document.getElementById("removeButton").addEventListener("click", onRemoveButtonClick);
  document.getElementById("validatebutton").addEventListener("click", onValidateButtonClick);
  document.getElementById("notificationButton").addEventListener("click", onNotificationButtonClick);
  document.getElementById("needhelplink").addEventListener("click", onNeedHelpLinkClick);
  document.getElementById("AutoOpenDisabled1").addEventListener("click", onAutoOpenDisabledChange);
  document.getElementById("AutoOpenDisabled2").addEventListener("click", onAutoOpenDisabledChange);

  chrome.storage.local.get(["AutoOpenDisabled", "PrivacyAccepted", "Auth", "KC", "Mode"], function (result) {
    if (result.AutoOpenDisabled) {
      document.getElementById("AutoOpenDisabledDiv1").style.display = "none";
      document.getElementById("AutoOpenDisabledDiv2").style.display = "none";
    } else {
      document.getElementById("AutoOpenDisabled1").checked = false;
      document.getElementById("AutoOpenDisabled2").checked = false;
    }

    if (result.Auth) kcExpiryDate = result.Auth.KCEXPIRYDATE;
    if (result.KC) sKC = result.KC;
    if (result.Mode) iMode = result.Mode;

    // Check if Standalone mode
    chrome.runtime.sendMessage({ msg: "is_standalone_mode" }, function (response) {
      if (!response) return;

      if (response.INITIALIZED == 0) {
        document.getElementById("integratedmode").innerText = chrome.i18n.getMessage("BA_ERROR_HDR");
        selectDialog(DialogEnum.INTEGRATED);

        // Update BrowserAction (Case: WSA UNREACHABLE)
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "COMPONENT_ERROR" }, function (response) {});
        return;
      }

      if (Webroot_Browser.identify_browser() == Webroot_Browser.FIREFOX) {
        if (result.PrivacyAccepted != 1) {
          chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_EXPIRED" }, function (response) {});
          selectDialog(DialogEnum.PRIVACY);
          return;
        } else selectModeDialog(iMode);
      } else {
        selectModeDialog(iMode);
      }
    });

    // Redirect 'Enter' key in newkeycodeinput to validatebutton
    document.onkeydown = function onKeydown(event) {
      if (event.which == 13) {
        //Enter keycode
        document.getElementById("validatebutton").click();
      }
    };
  });
}

// Sets the strings on the screen in the proper locale
function initLocale() {
  optionsTitle = chrome.i18n.getMessage("OPTIONS_TITLE");
  document.getElementById("optionstitleSA").innerText = optionsTitle;
  document.getElementById("optionstitleIN").innerText = optionsTitle;
  document.getElementById("integratedmode").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_MODE");
  document.getElementById("integratedModeDetails").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_MODE_DETAILS");
  document.getElementById("integratedSettingsHeadline").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_SETTINGS_HEADLINE");
  document.getElementById("subscriptiontext").innerText = chrome.i18n.getMessage("OPTIONS_SUBSCRIPTION_LABEL");

  document.getElementById("labelActive").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_ACTIVE");
  document.getElementById("labelURLBlocking").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_URLBLOCKING");
  document.getElementById("labelPhishBlocking").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_PHISHBLOCKING");
  document.getElementById("labelSearchAnnotation").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_SEARCHANNOTATION");
  document.getElementById("refreshNote").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_REFRESHNOTE");
  document.getElementById("howtoModify").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_HOWTOMODIFY");
  document.getElementById("howtoUninstall").innerText = chrome.i18n.getMessage("OPTIONS_INTEGRATED_HOWTOUNINSTALL");

  addInnerHTMLFromLocale("eulatext", "OPTIONS_STANDALONE_EULATEXT");

  //document.getElementById("notificationoptionlabel").innerText = chrome.i18n.getMessage("OPTIONS_NOTIFICATION_LABEL");
  //document.getElementById("notificationoption1").innerText = chrome.i18n.getMessage("OPTIONS_NOTIFICATION_VALUE_1");
  //document.getElementById("notificationoption2").innerText = chrome.i18n.getMessage("OPTIONS_NOTIFICATION_VALUE_2");
  //document.getElementById("notificationoption3").innerText = chrome.i18n.getMessage("OPTIONS_NOTIFICATION_VALUE_3");

  document.getElementById("keycodelabel").innerText = chrome.i18n.getMessage("OPTIONS_KEYCODE_KC_LABEL");
  document.getElementById("newkeycodelabel").innerText = chrome.i18n.getMessage("OPTIONS_NEW_KEYCODE");

  document.getElementById("validatebutton").value = chrome.i18n.getMessage("OPTIONS_VALIDATE_BUTTON");
  document.getElementById("validatebutton").title = chrome.i18n.getMessage("OPTIONS_VALIDATE_BUTTON");
  document.getElementById("needhelplink").innerText = chrome.i18n.getMessage("OPTIONS_FORGOT_BUTTON");

  document.getElementById("AutoOpenDisabledText1").innerText = chrome.i18n.getMessage("OPTIONS_DONTSHOW");
  document.getElementById("AutoOpenDisabledText2").innerText = chrome.i18n.getMessage("OPTIONS_DONTSHOW");

  document.getElementById("privacyheadline").innerText = chrome.i18n.getMessage("OPTIONS_PRIVACY_HEADLINE1");
  document.getElementById("allowButton").value = chrome.i18n.getMessage("OPTIONS_PRIVACY_ALLOW_BUTTON");
  document.getElementById("allowButton").title = document.getElementById("allowButton").value;
  document.getElementById("declineButton").value = chrome.i18n.getMessage("OPTIONS_PRIVACY_DECLINE_BUTTON");
  document.getElementById("declineButton").title = document.getElementById("declineButton").value;
  document.getElementById("privacyDesciption1").innerText = chrome.i18n.getMessage("OPTIONS_PRIVACY_DESCRIPTION1");
  document.getElementById("privacyDesciption2").innerText = chrome.i18n.getMessage("OPTIONS_PRIVACY_DESCRIPTION2");
  addInnerHTMLFromLocale("privacyDesciption3", "OPTIONS_PRIVACY_DESCRIPTION3");

  document.getElementById("declineheadline").innerText = chrome.i18n.getMessage("OPTIONS_PRIVACY_HEADLINE2");
  document.getElementById("removeButton").value = chrome.i18n.getMessage("OPTIONS_PRIVACY_REMOVE_BUTTON");
  document.getElementById("removeButton").title = document.getElementById("removeButton").value;
  document.getElementById("privacyBackButton").value = chrome.i18n.getMessage("OPTIONS_PRIVACY_BACK_BUTTON");
  document.getElementById("privacyBackButton").title = document.getElementById("privacyBackButton").value;
  document.getElementById("privacyDeclineText1").innerText = chrome.i18n.getMessage("OPTIONS_PRIVACY_DECLINE_TEXT1");
  document.getElementById("privacyDeclineText2").innerText = chrome.i18n.getMessage("OPTIONS_PRIVACY_DECLINE_TEXT2");
}

function selectModeDialog(mode) {
  // If Integrated mode
  if (mode == 1 || Webroot_Browser.SAFARI == Webroot_Browser.identify_browser()) {
    chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "DEFAULT" }, function (response) {});
    selectDialog(DialogEnum.INTEGRATED);
    setIntegratedSettings();
    return;
  }

  selectDialog(DialogEnum.STANDALONE);

  setStandaloneSettings();
}

function addInnerHTMLFromLocale(elementId, localeString) {
  var element = document.getElementById(elementId);
  var translatedStringWithElements = chrome.i18n.getMessage(localeString);

  if (!element || !translatedStringWithElements) return;

  element.innerText = "";
  var range = document.createRange();
  range.selectNode(element);
  var documentFragment = range.createContextualFragment(translatedStringWithElements);
  element.appendChild(documentFragment);
}

function displayExpireDays(expiresInDays) {
  if (expiresInDays == undefined) return;
  if (expiresInDays < 0) expiresInDays = 0;

  var subscriptionValue = document.getElementById("subscriptionvalue");
  if (expiresInDays == 1) subscriptionValue.innerText = expiresInDays + chrome.i18n.getMessage("OPTIONS_SUBSCRIPTION_VALUE_1");
  else subscriptionValue.innerText = expiresInDays + chrome.i18n.getMessage("OPTIONS_SUBSCRIPTION_VALUE");
  if (expiresInDays <= 30) {
    subscriptionValue.style.fontWeight = "bold";
    subscriptionValue.style.color = "red";
  } else {
    subscriptionValue.style.fontWeight = "normal";
    subscriptionValue.style.color = "black";
  }
}

// Formats the Keycode by adding '-' to it for better readability
function formatKeycode(keycode) {
  var formattedKeycode = "";

  if (!keycode) return formatKeycode;

  for (var index = 0; index < keycode.length; index++) {
    if (index != 0 && index % 4 == 0) formattedKeycode += "-";
    formattedKeycode += keycode[index];
  }

  return formattedKeycode;
}

// Triggers when user clicks on the <Privacy->Permissions->Permit> button
function onAllowButtonClick() {
  chrome.storage.local.set({ PrivacyAccepted: 1 }, function () {});

  if (iMode == 1) {
    chrome.runtime.sendMessage({ msg: "CONFIG", skipresponse: 0 }, function (response) {}); // unlock "Enabled"
  }
  selectModeDialog(iMode);
}

// Triggers when user clicks on the <Privacy->Permissions->Decline> button
function onPermissionsDeclineButtonClick() {
  selectDialog(DialogEnum.DECLINED);
}

// Triggers when user clicks on the <PrivacyDeclined->Privacy> button
function onPrivacyBackButtonClick() {
  selectDialog(DialogEnum.PRIVACY);
}

// Triggers when user clicks on the <PrivacyDeclined->Remove> button
function onRemoveButtonClick() {
  chrome.management.uninstallSelf({ showConfirmDialog: true }, function () {
    var err = chrome.runtime.lastError;
  });
}

// Triggers when user clicks on the <Validate Kecode> button
function onValidateButtonClick() {
  // Match input value agains specs
  var kc = validateInputKeycode();
  if (!kc) return;

  // Send validation request to background script
  sendValidationRequest(kc);
}

function onNotificationButtonClick() {
  var Url = document.getElementById("notificationButton").getAttribute("data-Url");
  chrome.runtime.sendMessage({ msg: "open_page", url: Url }, function (response) {});
}

// Triggers when user clicks on the <Purchase Keycode> link
function onPurchaseButtonClick() {
  // Send message to background script to open options page
  chrome.runtime.sendMessage({ msg: "open_purchase_page" }, function (response) {});
}

// Triggers when user clicks on the <Forgot Kecode> button
function onNeedHelpLinkClick() {
  // Send message to background script to open options page
  chrome.runtime.sendMessage({ msg: "open_forgot_page" }, function (response) {});
}

function selectDialog(dialogId) {
  var permissionsDialog = document.getElementById("permissions");
  var permissionDeclineDialog = document.getElementById("permissiondecline");
  var settingsStandaloneDialog = document.getElementById("settingsStandalone");
  var settingsIntegratedDialog = document.getElementById("settingsIntegrated");

  var on = "display:block";
  var off = "display:none";

  settingsStandaloneDialog.setAttribute("style", off);
  settingsIntegratedDialog.setAttribute("style", off);
  permissionsDialog.setAttribute("style", off);
  permissionDeclineDialog.setAttribute("style", off);

  switch (dialogId) {
    case DialogEnum.STANDALONE:
      settingsStandaloneDialog.setAttribute("style", on);
      break;
    case DialogEnum.INTEGRATED:
      settingsIntegratedDialog.setAttribute("style", on);
      break;
    case DialogEnum.PRIVACY:
      permissionsDialog.setAttribute("style", on);
      break;
    case DialogEnum.DECLINED:
      permissionDeclineDialog.setAttribute("style", on);
      break;
    default:
      settingsStandaloneDialog.setAttribute("style", on);
      break;
  }
}

// Triggers when user changes AutoOpenDisabled checkbox
function onAutoOpenDisabledChange(event) {
  var isAutoOpenDisabledChecked = event.target.checked;
  chrome.storage.local.set({ AutoOpenDisabled: isAutoOpenDisabledChecked }, function () {});

  if (event.target.id == "AutoOpenDisabled1") {
    if (isAutoOpenDisabledChecked) document.getElementById("AutoOpenDisabledDiv2").style.display = "none";
    else document.getElementById("AutoOpenDisabledDiv2").style.display = "block";
  }
}

function setStandaloneSettings() {
  // If no Keycode available
  if (!sKC) {
    document.getElementById("keycodelabel").style.visibility = "hidden";
    document.getElementById("subscriptiontext").style.visibility = "hidden";
    // Update BrowserAction (Case: Missing KC)
    chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_MISSING" }, function (response) {});
  } else {
    document.getElementById("AutoOpenDisabledDiv2").style.display = "none";
    removeElement("eulatext");
    // Update <Input> field
    document.getElementById("keycodevalue").innerText = formatKeycode(sKC);

    // Update BrowserAction (Case: Default)
    chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "DEFAULT" }, function (response) {});

    chrome.runtime.sendMessage({ msg: "IPM", data: "DEFAULT" });

    // Check if Keycode about to expire
    if (kcExpiryDate) {
      const ichrKCExpDate = Date.parse(kcExpiryDate);
      const iTNow = Date.now();
      const dTDays = (ichrKCExpDate - iTNow) / (1000 * 3600 * 24);
      const dTiDays = Math.ceil(dTDays);

      displayExpireDays(dTiDays);

      // If Keycode not about to expire
      if (dTiDays != undefined && dTiDays <= 30) {
        // Display <EXPIRESIN> flyout
        var iErr; // expired
        if (dTiDays > 0) iErr = 54;
        else iErr = 53;
        updateKeycodeValidator("warning", iErr, dTiDays);
      }
    }
  }

  // if mode changes -> reload the page
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace == "local" && changes["Mode"]) {
      if (changes["Mode"].oldValue > 1 && changes["Mode"].newValue == 1) {
        location.reload();
      }
    }
  });

  if (Webroot_Browser.identify_os() == OS_INFO.WINDOWS) {
    // trigger check for integrated mode
    chrome.runtime.sendMessage({ msg: "CONFIG", skipresponse: 1, integratedCheck: 1 }, function (response) {});
  }
}

function setIntegratedSettings() {
  chrome.storage.local.get(["Settings"], function (result) {
    if (chrome.runtime.lastError) return;
    if (!result["Settings"]) return;

    setIntegratedValues(result["Settings"]);
  });

  // trigger for settings changes
  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace == "local" && changes["Settings"]) {
      setIntegratedValues(changes["Settings"].newValue);
    }
  });

  var extUrl = "";
  var brwsr = Webroot_Browser.identify_browser();
  switch (brwsr) {
    case Webroot_Browser.CHROME:
      extUrl = "chrome://extensions/";
      break;
    case Webroot_Browser.EDGE_CHROMIUM:
      extUrl = "edge://extensions";
      break;
    case Webroot_Browser.FIREFOX:
      extUrl = "about:addons";
      break;
    case Webroot_Browser.SAFARI:
      extUrl = "";
      console.warn("WTS: Not yet implemented!");
      //TODO special handling
      return;
    default:
      console.warn("WTS: Unsupported Browser!");
      return;
  }

  document.getElementById("howtoUninstall").addEventListener("click", function () {
    onRemoveButtonClick();
    //chrome.tabs.update(null, { active:true, highlighted:true, url: extUrl });
  });
}

function setIntegratedValues(settings) {
  if (!settings) return;
  if (settings["VERSION"] != 1) return;
  if (settings["Mode"] != 1) return;

  var ActiveChkBox = document.getElementById("Active");
  var UrlBlockingChkBox = document.getElementById("URLBlocking");
  var PhishBlockingChkBox = document.getElementById("PhishBlocking");
  var SearchAnnotationChkBox = document.getElementById("SearchAnnotation");

  if (ActiveChkBox)
    ActiveChkBox.checked = settings["URLBlocking"] == 1 || settings["PhishBlocking"] == 1 || settings["SearchAnnotation"] == 1;
  if (UrlBlockingChkBox) UrlBlockingChkBox.checked = settings["URLBlocking"] == 1;
  if (PhishBlockingChkBox) PhishBlockingChkBox.checked = settings["PhishBlocking"] == 1;
  if (SearchAnnotationChkBox) SearchAnnotationChkBox.checked = settings["SearchAnnotation"] == 1;
}

// Send validation message to background script
function sendValidationRequest(kc) {
  // Display page overlay with spinning icon
  enableSpinner(true);

  // Send VALIDATE message to background scripts
  chrome.runtime.sendMessage({ msg: "VALIDATE", data: kc });
}

// Checks if the input keycode matches the required keycode specs.
function validateInputKeycode() {
  // Extract value from input field
  var kc = document.getElementById("newkeycodeinput").value;
  if (!kc) {
    updateKeycodeValidator("warning", 51);
    return;
  }

  // Remove any input '-' & spaces from keycode
  kc = kc.replace(/-/g, "");
  kc = kc.replace(/ /g, "");

  // Check length of keyc ode
  if (kc.length != 20) {
    updateKeycodeValidator("warning", 51);
    return;
  }

  return kc;
}

// Updates the text & icon of the validator
function updateKeycodeValidator(className, responseErr, expiresIn) {
  switch (className) {
    case "success":
      displayExpireDays(expiresIn);
      document.getElementById("validateOk").innerText = chrome.i18n.getMessage("OPTIONS_KEYCODE_VALIDATOR_SUCCESS");

      // Display the validator
      document.getElementById("keycodevalidator").style.visibility = "hidden";
      document.getElementById("newkeycodeinput").style.borderColor = "#E7E8EA";
      break;
    case "warning":
      document.getElementById("newkeycodeinput").style.borderColor = "#DB3030";
      document.getElementById("keycodevalidator").style.visibility = "visible";

      document.getElementById("validateOk").innerText = "";

      if (!responseErr)
        document.getElementById("keycodevalidatortext").innerText = chrome.i18n.getMessage("OPTIONS_KEYCODE_VALIDATOR_WARNING_2");
      else {
        switch (responseErr) {
          // Invalid Keycode
          case 51:
            document.getElementById("keycodevalidatortext").innerText = chrome.i18n.getMessage("OPTIONS_KEYCODE_VALIDATOR_WARNING_1");
            break;

          // Failed to connect to server
          case 52:
            document.getElementById("keycodevalidatortext").innerText = chrome.i18n.getMessage("OPTIONS_KEYCODE_VALIDATOR_WARNING_2");

            chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
            break;

          // Keycode expired
          case 53:
            document.getElementById("keycodevalidatortext").innerText = chrome.i18n.getMessage("OPTIONS_KEYCODE_VALIDATOR_WARNING_3");

            chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_EXPIRED" }, function (response) {});
            break;

          // Keycode expires in {expiresIn} days
          case 54:
            displayExpireDays(expiresIn);

            document.getElementById("newkeycodeinput").style.borderColor = "#E7E8EA";
            document.getElementById("keycodevalidator").style.visibility = "hidden";
            chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_EXPIRED" }, function (response) {});
            break;
          default:
            document.getElementById("keycodevalidatortext").innerText =
              chrome.i18n.getMessage("OPTIONS_KEYCODE_VALIDATOR_WARNING_2") + " {" + responseErr + "}";
            break;
        }
      }

      break;
  }
  return;
}

// Checks the return response of the VALIDATE message
function analyseValidateResponse(response) {
  if (!response) {
    updateKeycodeValidator("warning", 52 /*connction failed*/);
  } else if (response.ERR == 0) {
    // Update the validator
    updateKeycodeValidator("success", 0, response.EXPIRES);

    // Update <Input> field
    var kc = response.KC;
    if (!kc) kc = validateInputKeycode();
    removeElement("eulatext");
    document.getElementById("AutoOpenDisabledDiv2").style.display = "none";
    document.getElementById("keycodelabel").style.visibility = "visible";
    document.getElementById("subscriptiontext").style.visibility = "visible";
    document.getElementById("keycodevalue").innerText = formatKeycode(kc);

    // Update <NewKeycode> field
    document.getElementById("newkeycodeinput").value = "";

    // Update BrowserAction (Case: Default)
    chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "DEFAULT" }, function (response) {});

    chrome.runtime.sendMessage({ msg: "IPM", data: "DEFAULT" });
  } else {
    // Update the validator
    updateKeycodeValidator("warning", response.ERR, response.EXPIRES);

    if (response.ERR == 54) {
      // Update <Input> field
      var kc = response.KC;
      if (!kc) kc = validateInputKeycode();
      removeElement("eulatext");
      document.getElementById("keycodelabel").style.visibility = "visible";
      document.getElementById("subscriptiontext").style.visibility = "visible";
      document.getElementById("keycodevalue").innerText = formatKeycode(kc);

      // Update <NewKeycode> field
      document.getElementById("newkeycodeinput").value = "";

      chrome.runtime.sendMessage({ msg: "IPM", data: "DEFAULT" });
    }
  }

  // Remove the overlay
  enableSpinner(false);
}

function ProcessIPMResponse(request) {
  if (!request || request.msg != "IPM") {
    document.getElementById("notification").style.visibility = "hidden";
    return;
  }
  if (!request.response.IPM) {
    document.getElementById("notification").style.visibility = "hidden";
    return;
  }

  var IPM = request.response.IPM;
  var str = "";
  if (IPM.MessageHeadline) str += IPM.MessageHeadline;
  if (IPM.MessageBody) str = str + "<br >" + IPM.MessageBody;

  var element = document.getElementById("notificationtext");
  element.innerText = "";
  var range = document.createRange();
  range.selectNode(element);
  var documentFragment = range.createContextualFragment(str);
  element.appendChild(documentFragment);

  var notificationButton = document.getElementById("notificationButton");
  notificationButton.title = IPM.ButtonText;
  notificationButton.value = IPM.ButtonText;
  notificationButton.setAttribute("data-Url", IPM.LinkUrl);

  document.getElementById("notification").style.visibility = "visible";
}

function removeElement(id) {
  var elem = document.getElementById(id);
  if (elem) elem.remove();
}

function enableSpinner(enable) {
  if (enable) document.getElementById("spinneroverlay").style.width = "100%";
  else document.getElementById("spinneroverlay").style.width = "0%";
}

// Triggers when background script replies to VALIDATE message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (!request) return;
  if (request.data) return; // request from other options instance or keycode_ui

  if (request.msg == "VALIDATE") analyseValidateResponse(request.response);
  else if (request.msg == "IPM") ProcessIPMResponse(request);
  else if (request.msg == "BKINITIALIZED") location.reload();
});

document.addEventListener("DOMContentLoaded", init);
