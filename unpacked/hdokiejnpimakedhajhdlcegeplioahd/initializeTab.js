var bg = chrome.extension.getBackgroundPage().LPPlatform.getBackgroundInterface();
document.addEventListener("DOMContentLoaded", function () {
  Topics.get(Topics.INITIALIZED).publish();
}),
  LPRequire.requireJS(["platformRequestFramework", "backgroundRequester", "extensionMessaging", "extensionReflection"], function () {
    new LPBackgroundRequester(LPPlatform.requestFrameworkInitializer, {
      interfaceDefinition: Interfaces.TabDialogInterface,
      interfaceName: "TabDialogInterface",
      mainRequestFramework: !0
    }).initialize(),
      Topics.get(Topics.REQUEST_FRAMEWORK_INITIALIZED).subscribe(function (e) {
        window.tabID = e.tabID;
      });
  });
