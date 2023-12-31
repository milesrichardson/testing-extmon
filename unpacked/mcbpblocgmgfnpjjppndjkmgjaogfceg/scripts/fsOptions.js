/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
document.addEventListener("DOMContentLoaded", () => {
  function g() {
    const c = /(:)|(\.\.(\\|\/))/.test($("#edtDefaultFolder").val());
    document.getElementById("spnComment").style.color = c ? "#f00" : "#666";
  }
  function l() {
    $("#btnLicenseInfo").click(() => {
      d.enterLicense();
    });
    $("#btnCapSettings").click(() => {
      d.openCaptureSettings();
    });
    $("#btnGeneralOptions").click(() => {
      d.openSettings();
    });
    $("#btnApply").click(() => {
      h.saveSettings();
    });
    $("#btnSave").click(() => {
      h.saveSettings(window.close);
    });
    $("#btnTemplateSettings").click(() => {
      $("#btnTemplateSettings").toggle();
      $("#divTemplateSettings").toggle();
    });
    $("#btnPDFSettings").click(() => (document.location = "/fsPDFSettings.html"));
    $("#btnTemplateSettingsHide").click(() => {
      $("#btnTemplateSettings").toggle();
      $("#divTemplateSettings").toggle();
    });
    $("#btnAdvancedFunctions, #lnkActivatePro").click(() => {
      d.installPro();
      window.location.reload();
    });
    $("#btnConfigureHotkeys").click(() => {
      d.openURL(isEdge() ? "edge://extensions/shortcuts" : "chrome://extensions/configureCommands");
    });
    $("#edtDefaultFolder").change(g);
    $("#edtDefaultFolder").keydown(() => {
      setTimeout(g, 100);
    });
  }
  let e, f;
  const d = getBackgroundPage(),
    a = isFirefox() ? getOption : d.getOption,
    b = isFirefox() ? setOption : d.setOption,
    h = {
      loadSettings: function () {
        $("#edtDefaultFolder").val(a(cDefaultFolderPref, cDefaultFolderValue));
        $("#chkOpenFolder").prop("checked", "true" === a(cOpenFolderAterSavingPref, "false"));
        $("#chkDoNotShowSaveAsDialog").prop("checked", "true" === a(cNoFilenamePromptPref, "false"));
        $("#chkCloseTab").prop("checked", "true" === a(cCloseTabAfterSaving, "false"));
        $("#edtFilenameTemplate").val(a(cTemplatePref, cDefaultTemplate));
        $("#edtTemplateNumber").val(a(cTemplateNumberPref, 1));
        $("#chkTemplateNumberPad").prop("checked", "true" === a(cTemplateNumberPadCheckPref, "true"));
        $("#edtTemplateNumberPad").val(a(cTemplateNumberPadValuePref, 3));
        $("#edtPageScrollingSpeed").val(a(cPageScrollingSpeedPref, 100));
        const c = "png" === a(cDefaultImageFormatPref, "png");
        $("#radImagePNG").prop("checked", c);
        $("#radImageJPG").prop("checked", !c);
        $("#edtTemplateFilenameMaxLen").val(a(cTemplateFilenameMaxLen, 100));
        $("#chkContextMenuIntegration").prop("checked", "true" === a(cContextMenuIntegrationPref, "true"));
        $("#chkGoogleAnalytics").prop("checked", "true" === a(cGoogleAnalyticsEnabled, "true"));
        $("#chkAPI").prop("checked", "true" === a(cAPISupport, "false"));
        $("#chkOpenNewNextToSourceTab").prop("checked", "true" === a(cOpenNewTabNextToSource, "false"));
        e &&
          ($("#chkAllowInfiniteScrolling").prop("checked", "true" === a(cAllowInfiniteScrolling, "true")),
          $("#chkCaptureAllTabsVisiblePart").prop("checked", "true" === a(cAllTabsOnlyVisibleModePref, "false")));
      },
      saveSettings: function (c) {
        b(cTemplatePref, $("#edtFilenameTemplate").val());
        b(cTemplateNumberPref, Math.max(1, parseInt($("#edtTemplateNumber").val())));
        b(cTemplateNumberPadCheckPref, $("#chkTemplateNumberPad").prop("checked"));
        b(cTemplateNumberPadValuePref, Math.max(0, parseInt($("#edtTemplateNumberPad").val())));
        b(cDefaultImageFormatPref, $("#radImagePNG").prop("checked") ? "png" : "jpg");
        b(cTemplateFilenameMaxLen, Math.max(10, parseInt($("#edtTemplateFilenameMaxLen").val())));
        b(cPageScrollingSpeedPref, Math.min(100, Math.max(1, parseInt($("#edtPageScrollingSpeed").val()) || 100)));
        b(cDefaultFolderPref, $("#edtDefaultFolder").val());
        b(cNoFilenamePromptPref, $("#chkDoNotShowSaveAsDialog").prop("checked"));
        b(cOpenFolderAterSavingPref, $("#chkOpenFolder").prop("checked"));
        b(cCloseTabAfterSaving, $("#chkCloseTab").prop("checked"));
        b(cContextMenuIntegrationPref, $("#chkContextMenuIntegration").prop("checked"));
        b(cGoogleAnalyticsEnabled, $("#chkGoogleAnalytics").prop("checked"));
        b(cOpenNewTabNextToSource, $("#chkOpenNewNextToSourceTab").prop("checked"));
        e &&
          (b(cAllowInfiniteScrolling, $("#chkAllowInfiniteScrolling").prop("checked")),
          b(cAllTabsOnlyVisibleModePref, $("#chkCaptureAllTabsVisiblePart").prop("checked")));
        d.updateContextMenu();
        $("#chkAPI").prop("checked")
          ? tabsPermissionRequired(
              () => {
                enableAPI(!0);
                c && c();
              },
              () => {
                alert("WARNING: FireShot API is NOT enabled.");
                enableAPI(!1);
                $("#chkAPI").prop("checked", !1);
                c && c();
              },
              !0
            )
          : (enableAPI(!1), c && c());
      }
    };
  fsPreferences.init(async () => {
    try {
      i18nPrepare();
    } catch (m) {
      logError(m.message);
    }
    f = await d.isNativeSupported();
    e = await d.isProMode();
    l();
    const c = isSafari(),
      k = isFirefox();
    $(".native").toggle(f);
    $(".lite").toggle(!f);
    $(".pro").toggle(e);
    $(".shownInNonPro").toggle(!e);
    $("#fsPro").toggle(!f && isWindows());
    $("[rel='hiddenInSafari']").toggle(!c);
    $("[rel='shownInFirefox']").toggle(k);
    $("[rel='hiddenInFirefox']").toggle(!k);
    "true" === a(cRegisteredPref) && $("#trLicensingInfo").hide();
    "hpbicldbpgipcloiojdbchegbbjiobbm" == extensionId && $("#trFSAPI").hide();
    e ||
      ($("#chkAllowInfiniteScrolling").prop("disabled", !0),
      $("#chkCaptureAllTabsVisiblePart").prop("disabled", !0).prop("checked", !0),
      $("#chkAllowInfiniteScrolling").prop("checked", !1));
    h.loadSettings();
    g();
  });
});
