var kami_user,
  autoload = localStorage.getItem("notable.settings.autoload"),
  fileSchemeRequestDisabled = localStorage.getItem("notable.settings.fileSchemeRequestDisabled");
try {
  kami_user = JSON.parse(localStorage.getItem("notable.user"));
} catch {}
function onSettingsUpdated(e) {
  var t = [
    "autoload",
    "fileSchemeRequestDisabled",
    "hideGoogleOpenWithKamiButton",
    "hideOffice365OpenWithKamiButton",
    "hideCanvaOpenWithKamiButton",
    "hideSchoologyExtensionCreateAssignmentButton"
  ];
  for (var a in t) {
    var n = t[a];
    localStorage.setItem("notable.settings." + n, e[n]), (window[n] = e[n].toString());
  }
}
function onUserUpdated(e) {
  kami_user = e;
  var t = JSON.stringify(e);
  localStorage.setItem("notable.user", t);
  var a = chrome.storage;
  null != a && a.sync.set({ "notable.user": e });
}
function onBetaFeaturesUpdated(e) {
  var t = ["enableClassroomAssignmentEditSyncing"],
    a = chrome.storage;
  for (var n in t) {
    var o = t[n],
      s = "notable.betaFeatures." + o;
    if (null != a) {
      var i = a.sync,
        r = {};
      (r[s] = e[o]), i.set(r);
    }
  }
}
chrome.runtime.onMessageExternal.addListener(function (e, t, a) {
  "object" == typeof e &&
    ("settings" in e
      ? onSettingsUpdated(e.settings)
      : "user" in e
      ? onUserUpdated(e.user)
      : "betaFeatures" in e && onBetaFeaturesUpdated(e.betaFeatures));
}),
  chrome.runtime.onMessage.addListener(function (e, t, a) {
    if ("retrieve-setting" !== e.action) return;
    a({ setting: e.setting, value: localStorage.getItem(`notable.settings.${e.setting}`) });
  });
