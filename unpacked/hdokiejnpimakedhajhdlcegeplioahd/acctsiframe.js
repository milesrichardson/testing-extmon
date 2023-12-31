var processAcctsIframeMessage = function (t) {
  "getdata" === t.data.msg
    ? bg.processCS(
        null,
        {
          cmd: "ipcgetdata",
          url: t.data.url,
          callback: function (e) {
            "ipcgotdata" === e.cmd && t.source.postMessage(e, t.origin);
          }
        },
        null
      )
    : "closeiframe" === t.data.msg
    ? bg.closeSettingsIframe()
    : "refreshsites" === t.data.msg
    ? bg.refreshsites()
    : "storeaccountlinktoken" === t.data.msg
    ? "function" == typeof bg.storeAccountLinkToken && bg.storeAccountLinkToken(t.data.payload)
    : "websiteevent" == t.data.msg
    ? ((g_websiteeventtarget = t),
      (document.getElementById("eventtype").value = t.data.eventtype),
      (document.getElementById("eventdata1").value = t.data.eventdata1),
      (document.getElementById("eventdata2").value = t.data.eventdata2),
      (document.getElementById("eventdata3").value = t.data.eventdata3),
      (document.getElementById("eventdata4").value = t.data.eventdata4),
      (document.getElementById("eventdata5").value = t.data.eventdata5),
      website_event())
    : "singlefactor_winbio_set" === t.data.msg
    ? bg.singlefactorWinbioSet(t.data.payload)
    : "setpasswordlessdata" === t.data.msg
    ? bg.setPasswordlessData(t.data.payload)
    : "removepasswordlessdata" === t.data.msg
    ? bg.removePasswordlessData()
    : "trigger_security_score_calculation" === t.data.msg && bg.reduxApp && "function" == typeof bg.reduxApp.setMultifactorEnabledState
    ? bg.reduxApp.setMultifactorEnabledState(t.data.payload.mfaEnabled)
    : "trusted_device_label_edit" === t.data.msg && bg.reduxApp && "function" == typeof bg.reduxApp.trustedDeviceUpdated
    ? bg.reduxApp.trustedDeviceUpdated()
    : "set_disable_password_alerts" === t.data.msg && bg.reduxApp && "function" == typeof bg.reduxApp.setDisablePasswordAlerts
    ? bg.reduxApp.setDisablePasswordAlerts()
    : "update_trusted_device_list" === t.data.msg && bg.reduxApp && "function" == typeof bg.reduxApp.updateTrustedDeviceList
    ? bg.reduxApp.updateTrustedDeviceList()
    : "start_passwordless_enrollment_setup" === t.data.msg && bg.startPasswordlessEnrollmentSetup();
};
