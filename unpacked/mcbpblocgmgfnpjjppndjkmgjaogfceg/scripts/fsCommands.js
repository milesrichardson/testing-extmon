/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
function openSettings() {
  pluginCommand("openSettings");
}
function openExtensionPreferences() {
  chrome.tabs.create({ url: "fsOptions.html" });
}
function openExtensionSettings() {
  openURL("chrome://extensions/?id=" + chrome.runtime.id);
}
function doRegister(a) {
  openURL(`https://getfireshot.com/buy.php?browser=${getBrowserId()}${a ? "&SRC=" + a : ""}`);
}
function openDemoPage() {
  openURL("https://getfireshot.com/demo.php");
}
function openSupportPage() {
  openURL("https://getfireshot.com/sup/frm12.htm");
}
function openAPIPage() {
  openURL("https://getfireshot.com/api.php");
}
function resumeEditing() {
  pluginCommand("resumeEditing");
}
function captureLastUsedMode() {
  executeGrabber(getLastAction(), getLastMode());
}
function openCaptureSettings() {
  pluginCommand("ieCaptureOptions");
}
function doUpgrade() {
  pluginCommand("upgradeToPro");
}
function doTrial() {
  gaTrack("UA-1025658-9", "fireshot.com", "DoTrial");
  pluginCommand("upgradeToProTrial");
}
function enterLicense() {
  pluginCommand("enterLicense");
}
function openFile() {
  pluginCommand("openFile");
}
function openClipboard() {
  pluginCommand("openFromClipboard");
}
function showLicenseInfo() {
  pluginCommand("showLicensingInfo");
}
function showAbout() {
  pluginCommand("showAboutWindow");
}
function installPro() {
  isWindows() ? (isFirefox() ? chrome.windows : chrome.tabs).create({ url: "fsNativeInstall.html" }) : activateBetaPreview();
}
function openPermissionsPage(a) {
  fPermissionsPageOpened ||
    ((fPermissionsPageOpened = !0),
    openURL("fsPermissions.html", (b) => {
      a && chrome.tabs.sendMessage(b.id, { topic: "setRequiredPermissions", data: a });
    }));
}
function openGmailPermissionsPage() {
  chrome.tabs.create({ url: "fsGmailPermissions.html" });
}
function openGmailComposer() {
  fInjectGmailScript = !0;
  chrome.tabs.create({ url: "https://gmail.com" });
}
function activateBetaPreview() {
  gaTrack("UA-1025658-9", "fireshot.com", "BetaPreviewStarted");
  (isSafari() ? getExtension() : isFirefox() && "undefined" !== typeof getBackgroundPage ? getBackgroundPage() : self).setOption(
    cPluginProModePref,
    "true"
  );
  isDebug || openBetaPreviewConditionsPage();
}
function openBetaPreviewConditionsPage() {
  window.open("https://getfireshot.com/beta-pro.php?browser=" + getBrowserId());
}
function highlightLastCreatedFileSafari() {
  getExtension().sendNativeMessageSafari({ topic: "highlightLastCreatedFile" });
}
function openLastCreatedFileSafari() {
  getExtension().sendNativeMessageSafari({ topic: "openLastCreatedFile" });
}
var testFirsttime = !0;
function doTest() {
  if (testFirsttime) (testFirsttime = !1), highlightLastCreatedFileSafari();
  else {
    var a = {
      topic: "saveFile",
      data: btoa("X".repeat(734003200)),
      dialog: "false",
      filename: "test1",
      subfolder: "FireShot/",
      openFolder: "true",
      extension: ".txt"
    };
    getConsolePtr()(`b64 encoded data size is: ${a.data.length} bytes`);
    sendNativeMessageSafari(a, async (b) => {});
  }
}
