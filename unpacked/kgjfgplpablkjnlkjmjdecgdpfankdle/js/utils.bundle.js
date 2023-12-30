(self.webpackChunkextension = self.webpackChunkextension || []).push([
  [493],
  {
    915: (e) => {
      let t = "5",
        o = "0",
        a = "chrome";
      try {
        t = parseInt(t);
      } catch (e) {}
      try {
        o = parseInt(o);
      } catch (e) {}
      const i = [
          ["dev-integration.", "dev"],
          ["", "dev"],
          ["devep.", "dev"],
          ["go.", ""],
          ["us04web.", ""],
          ["", ""],
          ["devcolo.", "dev"],
          ["deva.", "dev"],
          ["local.", ""],
          ["ds01.", "dev"],
          ["us03web.", ""],
          ["devb.", "dev"]
        ],
        n = [
          ["zoom", "us"],
          ["zoomgov", "com"]
        ],
        l = {
          extVersion: "1.8.22",
          get runEnv() {
            let e = i[t];
            return void 0 === e ? i[5] : e;
          },
          get envIndex() {
            return t;
          },
          get multiVersion() {
            let e = n[o];
            return void 0 === e ? n[0] : e;
          },
          get multiVersionIndex() {
            return o;
          },
          get browserConfig() {
            return a;
          },
          errors: [
            "No matching domain found.",
            "zoom_data is not an Object:",
            "Invalid email address or password.",
            "Network error, please try again!",
            "Request timeout, please try again!",
            "Schedule meeting failed. Please try again.",
            "Login failed. Please try again.",
            "Update settings failed!",
            "Unknown error, please refresh page and try again.",
            "There was an exception encountered with the Zoom Chrome Extension. Please refresh the page and try again.",
            "Enter valid domains. Separate multiple domains by semicolon",
            "can't parse the event duration correctly",
            "eid_meeting_map is not an Array:",
            "set eidMeetingMap value is not an Object:",
            "get eidMeetingMap value is not an Object or null:",
            "get eidMeetingMap value is not an Object:",
            "this eid is missing in eidMeetingMap:",
            "Please save or cancel the result of the domians edit before continue.",
            "Select at least 1 region",
            "The password does not meet the requirement",
            "You must select at least 1 option",
            "When schedule a meeting, you must select at least 1 option",
            'Users in "<span class="domains"></span>" have been blocked from joining meetings and webinars. To unblock them, please go to <a class="setting-url" href="">Settings</a> page in web portal and update "Block users in specific domains from joining meetings and webinars".',
            "Please enter a valid email address",
            "Please select different language",
            "Please select language",
            "Please enter different email",
            "You have selected the maximum number of custom languages",
            "This field is required."
          ],
          tips: [
            "Enter valid email addresses. Separate multiple domains by semicolon",
            "The setting is locked and cannot be changed. All of your meetings will use this setting.",
            "You are permanently deleting this Zoom meeting. This action cannot be undone.",
            "You have added two Zoom meetings. One of your meetings will be deleted. \n\nA new meeting is automatically created when you add a guest or a room. If you are manually adding a Zoom meeting, you only need to click “Make it a Zoom Meeting” or “Add Conferencing”.",
            "Automatically record meeting ",
            "Record the meeting automatically in the cloud",
            "Please enter a meeting password",
            'If you want to make changes for your personal meeting, <a href="">change PMI settings</a> here.',
            "If you change the settings and schedule this meeting, all previously scheduled PMI meetings will use the latest settings.",
            "If no domains specified, any signed-in users can join",
            "You have signed out from Zoom. Please sign in again to use Zoom service.",
            "You have logged in successfully!",
            "Sign in to Zoom with the following specified domains",
            '"Internal domain restriction" has been removed from the list, after saving this meeting, you cannot select this option again.',
            "Zoom meeting settings synchronization in progress...",
            "Zoom meeting settings synchronization has been done!",
            "Zoom meeting settings synchronization failed. Please try again later!",
            "Your account plan requires that Waiting Room be on to enhance security your meetings",
            "Your account requires that Passcode be on to enhance security for your meetings",
            "Your account plan requires that Waiting Room be on to enhance security your meetings",
            "Your security settings have been synced from your Zoom web portal",
            "The settings you change here will apply only to this meeting",
            "After scheduling this meeting, the settings you change here will apply to all scheduled meetings with the Personal Meeting ID.",
            'Several features will be automatically disabled when using end-to-end encryption, including cloud recording and phone/SIP/H.323 dial-in. <a href="https://support.zoom.us/hc/en-us/articles/360048660871" target="_blank" style="margin-left: 12px;">Learn More</a>',
            "Your encryption key is stored in the cloud.",
            "Your encryption key is stored locally. No one else can obtain the encryption key, not even Zoom.",
            "Only users who have the invite link or passcode can join the meeting",
            "Only users who have the passcode can join the meeting",
            "Only users admitted by the host can join the meeting",
            "The passcode will be embedded in the invite link. Users joining with the invite link will not have to enter the passcode manually.",
            "Waiting Room is selected to enhance security for your meetings",
            "This feature is only available with Zoom client version 5.8.0 or later, and Android client version 5.8.3 or later.",
            "Unable to Schedule a Meeting",
            "Meeting hosting and scheduling capabilities are not allowed for your user account.",
            "You are not signed in. Please sign in to use Zoom service.",
            "Cloud recording has been disabled for your account. Contact your account admin for more information.",
            'To record the meeting locally, go to <a href="" target="_blank">Settings</a> and enable <strong>Local recording</strong>.',
            "Cloud recording has been disabled. Contact the meeting host or their account admin for more information.",
            'Note: Join before host options have been moved to waiting room settings. <a href="">Go to Setting</a>',
            "You must select at least 1 security option. If you only select the waiting room, you must select a sub-option where users are manually admitted.",
            "You can assign interpreters here or during a meeting",
            "You can add max 20 interpreters",
            "Added attendees will have access to the Meeting Group Chat before and after the meeting.",
            "Chat with participants any time and save in-meeting chat in the same place"
          ]
        };
      e.exports = l;
    },
    577: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => u });
      var a = o(467),
        i = o(559),
        n = o(915),
        l = o(812);
      const r = {
        baseUrl: `https://${n.runEnv[0]}${n.multiVersion[0]}${n.runEnv[1]}.${n.multiVersion[1]}/`,
        logUrl: "mimo/log4zm",
        resetZoomOptions: async function (e) {
          r.saveValue("zoom_config_video_host", e.option_video_host),
            r.saveValue("zoom_config_video_participants", e.option_video_participant),
            r.saveValue("zoom_config_audio", e.option_audio_type),
            r.setSecurity(e.security),
            r.saveValue("zoom_config_jbh", e.option_require_jbh),
            r.saveValue("zoom_config_joinurl", !!e.option_joinurl),
            r.saveValue("zoom_config_mute_upon_entry", e.option_mute_upon_entry),
            r.saveValue("zoom_config_public_cal", e.option_public_cal),
            r.saveValue("zoom_config_fte", e.option_fte),
            r.saveValue("zoom_config_schedule_for", e.option_schedulefor_host),
            r.saveValue("zoom_config_pacindex", e.option_pacindex),
            r.saveValue("zoom_config_althost", e.alt_hosts || ""),
            r.saveValue("zoom_config_fixed_popup", !!e.option_fixed_popup),
            r.saveValue("zoom_locale", e._zm_locale),
            r.saveValue("zoom_config_rectype", e.option_record_type),
            r.saveValue("zoom_cluster", e._zm_cluster || ""),
            r.saveValue("zm_haid", e._zm_haid || ""),
            r.saveValue("zm_aid", e._zm_aid || ""),
            r.saveValue("zoom_option_require_reg", Boolean(e.option_require_reg)),
            r.removeValue("zoom_govurl"),
            r.setAuthentication(e.authenticationV2),
            delete e.authenticationV2,
            r.saveValue("meetingPwdSettingsMap", JSON.stringify(e.meetingPwdSettingsMap));
          let t = e.dcOptions.enableDC;
          t && r.setEnableDC(t),
            r.resetZoomConfigPmi(e),
            r.saveValue("enable_unmute_all", e.enable_unmute_all),
            r.setE2ee(e.e2ee),
            r.setAllowDeny(e.allowDeny),
            r.setWatermark(e.watermark),
            r.setAudioWatermark(e.audioWatermark),
            r.setFocusMode(e.focusMode),
            await r.setAllowAlternativeHostEditPoll(e.allowAlternativeHostEditPoll);
        },
        getMeetingFeatures: async function () {
          let e = await r.getZoomData();
          if (e) {
            return i.Z.meetingFeaturesValidity(e.meetingFeatures);
          }
        },
        getPmiFeatures: async function () {
          let e = await r.getZoomData();
          if (e) {
            return i.Z.pmiFeaturesValidity(e.pmiFeatures);
          }
        },
        updateAutoRec: async function (e) {
          if ("string" === l.type(e)) {
            if (!!(await r.getValue("zoom_config_pmi")))
              try {
                let o = await r.getZoomData(),
                  a = !1;
                if (e) {
                  let i = o.pmiFeatures.autoRec.dataOptions;
                  for (var t = 0; t < i.length; t++)
                    if (i[t].id === e) {
                      a = !0;
                      break;
                    }
                } else a = !0;
                a &&
                  ((o.pmiFeatures.autoRec.childParams.autoRecordingSubSelected.value = e),
                  (o.pmiFeatures.autoRec.value = "" !== e),
                  await r.saveValue("zoom_data", JSON.stringify(o)));
              } catch (e) {}
          }
        },
        updateQa: async function (e) {
          if ("boolean" === l.type(e)) {
            if (!!(await r.getValue("zoom_config_pmi")))
              try {
                let t = await r.getZoomData();
                (t.pmiFeatures.qa.value = e), await r.saveValue("zoom_data", JSON.stringify(t));
              } catch (e) {}
          }
        },
        getDataFromFeatures: async function (e) {
          let t;
          return (
            (t = !!(await r.getValue("zoom_config_pmi")) ? (await r.getPmiFeatures())?.[e] : (await r.getMeetingFeatures())?.[e]),
            void 0 === t && (t = {}),
            t
          );
        },
        setAllowAlternativeHostEditPoll: async function (e) {
          (e = e || ""), await r.saveValue("allowAlternativeHostEditPoll", JSON.stringify(e));
        },
        getAllowAlternativeHostEditPoll: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("allowAlternativeHostEditPoll"));
          } catch (e) {}
          return (
            "object" !== l.type(e) &&
              ((e = { support: !1, locked: !1, normal: { defaultVal: !1 }, pmi: { defaultVal: !1 } }),
              r.setAllowAlternativeHostEditPoll(e)),
            e
          );
        },
        updateAllowAlternativeHostEditPoll: async function (e) {
          if ("boolean" === l.type(e)) {
            if (!!(await r.getValue("zoom_config_pmi"))) {
              let t = await r.getAllowAlternativeHostEditPoll();
              t.locked || ((t.pmi.defaultVal = e), r.setAllowAlternativeHostEditPoll(t));
            }
          }
        },
        setFocusMode: function (e) {
          (e = e || ""), r.saveValue("focusMode", JSON.stringify(e));
        },
        getFocusMode: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("focusMode"));
          } catch (e) {}
          return "object" !== l.type(e) && ((e = { support: !1, pmi: { defaultVal: !1 } }), r.setFocusMode(e)), e;
        },
        updateFocusMode: async function (e) {
          if ("boolean" === l.type(e)) {
            if (!!(await r.getValue("zoom_config_pmi"))) {
              let t = await r.getFocusMode();
              (t.pmi.defaultVal = e), r.setFocusMode(t);
            }
          }
        },
        setWatermark: function (e) {
          (e = e || ""), r.saveValue("watermark", JSON.stringify(e));
        },
        getWatermark: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("watermark"));
          } catch (e) {}
          return "object" !== l.type(e) && ((e = { support: !1, defaultVal: !1, locked: !1 }), r.setWatermark(e)), e;
        },
        updateWatermarkDefault: async function (e) {
          if ("boolean" === l.type(e)) {
            let t = await r.getWatermark();
            (t.defaultVal = e), r.setWatermark(t);
          }
        },
        setAudioWatermark: function (e) {
          (e = e || ""), r.saveValue("audioWatermark", JSON.stringify(e));
        },
        getAudioWatermark: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("audioWatermark"));
          } catch (e) {}
          return "object" !== l.type(e) && ((e = { support: !1, defaultVal: !1, locked: !1 }), r.setAudioWatermark(e)), e;
        },
        updateAudioWatermarkDefault: async function (e) {
          if ("boolean" === l.type(e)) {
            let t = await r.getAudioWatermark();
            (t.defaultVal = e), r.setAudioWatermark(t);
          }
        },
        setAllowDeny: function (e) {
          (e = e || ""), r.saveValue("allowDeny", JSON.stringify(e));
        },
        getAllowDeny: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("allowDeny"));
          } catch (e) {}
          return "object" !== l.type(e) && (e = i.Z.getAllowDenyDefault()), e;
        },
        updateAllowDeny: async function (e) {
          if (e) {
            let t = e.defaultVal,
              o = e.selRegion,
              a = e.selType;
            if ("boolean" === l.type(t) && Array.isArray(o) && "string" === l.type(a)) {
              let e = await r.getAllowDeny();
              !!(await r.getValue("zoom_config_pmi")) &&
                e.support &&
                ((e.pmi = { type: a, defaultVal: t, selectRegion: o }), r.setAllowDeny(e));
            }
          }
        },
        setE2ee: function (e) {
          (e = e || ""), r.saveValue("e2ee", JSON.stringify(e));
        },
        getE2ee: async function () {
          let e = {};
          try {
            (e = JSON.parse(await r.getValue("e2ee"))), "object" !== l.type(e) && (e = {});
          } catch (e) {}
          return e;
        },
        resetZoomConfigPmi: function (e) {
          let t,
            o,
            a = e.option_schedulefor_host;
          if (a) {
            let t = e.assistants;
            "array" === l.type(t) &&
              l.each(t, function (e, t) {
                if (t.id === a) return (o = t.roomid), !1;
              });
          } else o = e.PMI;
          (t = "0" !== o && e.option_use_pmi), r.saveValue("zoom_config_pmi", t), r.resetShowDisablePmiMsg(e);
        },
        resetShowDisablePmiMsg: async function (e) {
          if (!e) return;
          let t = await r.getShowDisablePmiMsg();
          (void 0 === t.me || (!1 === t.me && "0" !== e.PMI)) && (t.me = !0);
          let o = e.assistants;
          "array" === l.type(o) &&
            l.each(o, function (e, o) {
              let a = o.id,
                i = o.roomid;
              "000-000-000" === i && (i = "0"), (void 0 === t[a] || (!1 === t[a] && "0" !== i)) && (t[a] = !0);
            }),
            r.setShowDisablePmiMsg(t);
        },
        setShowDisablePmiMsg: function (e) {
          (e = e || ""), r.saveValue("showDisablePmiMsg", JSON.stringify(e));
        },
        getShowDisablePmiMsg: async function () {
          let e = {};
          try {
            (e = JSON.parse(await r.getValue("showDisablePmiMsg"))), "object" !== l.type(e) && (e = {});
          } catch (e) {}
          return e;
        },
        setEnableDC: function (e) {
          (e = e || ""), r.saveValue("enableDC", JSON.stringify(e));
        },
        getEnableDC: async function () {
          let e = "";
          try {
            (e = JSON.parse(await r.getValue("enableDC"))), "object" !== l.type(e) && (e = "");
          } catch (e) {}
          return e;
        },
        setAuthentication: function (e) {
          (e = e || ""), r.saveValue("authentication", JSON.stringify(e));
        },
        getAuthentication: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("authentication"));
          } catch (e) {}
          return (
            "object" !== l.type(e) &&
              (e = { support: !1, locked: !1, normal: { defaultVal: !1 }, pmi: { defaultVal: !1, pmiUpdate: {} }, optionLists: [] }),
            e
          );
        },
        setSecurity: function (e) {
          (e = e || ""), r.saveValue("security", JSON.stringify(e));
        },
        getWrOp: async function () {
          let e = !1;
          try {
            let t = (await r.getZoomData()).meetingFeatures.waitingRoom.childParams.op.value;
            "boolean" === l.type(t) && (e = t);
          } catch (e) {}
          return e;
        },
        updateWaitingRoom2: async function (e) {
          if ("object" !== l.type(e)) return;
          if (!!(await r.getValue("zoom_config_pmi")))
            try {
              let t = await r.getZoomData(),
                o = t.pmiFeatures.waitingRoom2,
                a = o.childParams.auto,
                i = o.childParams.manu,
                n = o.childParams.options,
                u = e.enable;
              "boolean" === l.type(u) && (o.value = u);
              let c = e.type;
              ("manu" !== c && "auto" !== c) || (t.pmiFeatures.waitingRoom2.childParams.options.value = c);
              let d = e.join_time;
              -100 === d && (d = null);
              let p = [];
              "auto" === c ? (p = s(a.dataOptions)) : "manu" === c && (p = i.dataOptions ? s(i.dataOptions) : [null]),
                p.indexOf(d) > -1 && !n.disabled && (t.pmiFeatures.waitingRoom2.childParams[e.type].value = d),
                await r.saveValue("zoom_data", JSON.stringify(t));
            } catch (e) {}
        },
        getSecurity: async function () {
          let e = "";
          try {
            e = JSON.parse(await r.getValue("security"));
          } catch (e) {}
          return (
            "object" !== l.type(e) &&
              (e = {
                security3c1: !1,
                newSecurityEnabled: { defaultVal: !1 },
                normal: { passcode: { locked: !1, defaultVal: !1 }, waitingroom: { locked: !1, defaultVal: !1 } },
                pmi: { passcode: { locked: !1, default_all: !1, default_jbh: !1, value: "" }, waitingroom: { locked: !1, defaultVal: !1 } }
              }),
            e
          );
        },
        updateSecurity: async function (e) {
          if (e) {
            let t = e.pwEnable,
              o = e.wrEnable,
              a = e.authEnable;
            if ("boolean" === l.type(t) && "boolean" === l.type(o) && "boolean" === l.type(a)) {
              let i = await r.getSecurity();
              if (!!(await r.getValue("zoom_config_pmi"))) {
                if (i.newSecurityEnabled.defaultVal) i.pmi.passcode.default_all = t;
                else {
                  let e = i.pmi.passcode;
                  e.default_all || e.default_jbh || !t || (e.default_all = !0);
                }
                void 0 !== e.pwd && (i.pmi.passcode.value = e.pwd), (i.pmi.waitingroom.defaultVal = o), r.setSecurity(i);
                let n = await r.getAuthentication();
                (n.pmi.defaultVal = a), e.updateAuthOptionItem && (n.pmi.pmiUpdate = e.updateAuthOptionItem), r.setAuthentication(n);
              }
            }
          }
        },
        hasZoomRqToken: async function () {
          return !!(await this.getZoomZakRequestToken());
        },
        getZoomZakRequestToken: async function () {
          var e = await this.getZoomDataModifiedDate(),
            t = await this.getExpirationTime();
          if (!e || (e && new Date() - e > t)) return void this.clearAllData();
          if (2 == (await this.getValue("zoom_auth_type"))) {
            if ((await this.getValue("zoom_sso_exp")) < 2592e3) {
              if ((await this.getZoomSSOValidDate()) - new Date() < 0) return void this.clearAllData();
            }
          }
          return await this.getValue("zoom_zak");
        },
        getZoomDataModifiedDate: async function () {
          var e = await this.getValue("zoom_token_modified_date");
          if (e) return new Date(parseInt(e, 10));
        },
        getValue: async function (e) {
          let t = (await chrome.storage.local.get(e))[e];
          return null !== t && (t = this.dataUntrans(t)), "false" !== t && ("true" === t || t);
        },
        dataTrans: function (e) {
          if (5 != n.envIndex) return e;
          let t = "";
          try {
            let o = this.utf8_to_b64(e),
              a = "",
              i = "";
            for (let e = 0, t = o.length; e < t; e++) e % 2 == 0 ? (a += o[e]) : (i += o[e]);
            let n = Math.floor(7 * Math.random()) + 3;
            t = l.generateAlphanumeric(n) + this.utf8_to_b64(a + "=#=#" + i) + n;
          } catch (t) {
            a.Z.sendLog({ msgType: 4, msg: { msg: "dataTrans failed, data: " + e, errorStack: t.stack } });
          }
          return t;
        },
        dataUntrans: function (e) {
          if (5 != n.envIndex) return e;
          let t = e;
          try {
            let o = this.b64_to_utf8(e.substring(parseInt(e[e.length - 1]), e.length - 1)).split("=#=#"),
              a = o[0],
              i = o[1],
              n = "";
            for (let e = 0, t = a.length; e < t; e++) (n += a[e]), i[e] && (n += i[e]);
            t = this.b64_to_utf8(n);
          } catch (t) {
            e && a.Z.sendLog({ msgType: 4, msg: { msg: "dataUntrans failed, data: " + e, errorStack: t.stack } });
          }
          return t;
        },
        utf8_to_b64: function (e) {
          return btoa(unescape(encodeURIComponent(e)));
        },
        b64_to_utf8: function (e) {
          return decodeURIComponent(escape(atob(e)));
        },
        clearAllData: function () {
          this.removeZoomData(),
            this.removeZoomDataModifiedDate(),
            this.removeValue("zoom_zak"),
            this.removeValue("zoom_zak_exp"),
            this.removeValue("zoom_sso_exp"),
            this.removeValue("zoom_govurl"),
            this.removeValue("zoom_cluster"),
            this.removeValue("zm_haid"),
            this.removeValue("zm_aid"),
            this.removeValue("zoom_eid_meeting_map"),
            this.removeValue("zoom_config_one_time_pwd"),
            this.removeValue("zoom_config_jbh_pwd"),
            this.removeValue("zoom_config_all_pmi_pwd"),
            this.removeValue("meetingPwdSettingsMap"),
            this.removeValue("updateAuthOptionItem"),
            this.removeValue("showDisablePmiMsg"),
            this.removeValue("enableDC"),
            this.removeValue("enable_unmute_all"),
            this.removeValue("zoom_auth_type"),
            this.removeValue("security"),
            this.removeValue("extVersion"),
            this.removeValue("e2ee"),
            this.removeValue("showSecurityTip"),
            this.removeValue("authentication"),
            this.removeValue("allowAlternativeHostEditPoll"),
            this.removeValue("allowDeny"),
            this.removeValue("audioWatermark"),
            this.removeValue("focusMode"),
            this.removeValue("watermark"),
            this.removeValue("zoom_config_schedule_for"),
            this.removeValue("zoom_sync_date");
        },
        saveValue: async function (e, t) {
          (t = this.dataTrans(t)), await chrome.storage.local.set({ [e]: t });
        },
        removeValue: function (e) {
          chrome.storage.local.remove(e);
        },
        removeZoomData: function () {
          this.removeValue("zoom_data");
        },
        saveZoomDataModifiedDate: function (e) {
          this.saveValue("zoom_token_modified_date", e.getTime());
        },
        removeZoomDataModifiedDate: function () {
          this.removeValue("zoom_token_modified_date");
        },
        getZoomSSOValidDate: async function () {
          var e = await this.getValue("zoom_sso_login_time");
          if (e) return new Date(parseInt(e, 10));
        },
        saveZoomSSOValidDate: async function (e) {
          var t = await this.getValue("zoom_sso_exp"),
            o = e.getTime();
          (o += t ? 1e3 * t : 2592e6), this.saveValue("zoom_sso_login_time", o);
        },
        removeZoomSSOValidDate: function () {
          this.removeValue("zoom_sso_login_time");
        },
        getExpirationTime: async function () {
          var e = 2592e6,
            t = await this.getValue("zoom_zak_exp");
          return t && (e = 1e3 * parseInt(t, 10)), e;
        },
        getUserBaseUrl: async function () {
          var e = this.baseUrl,
            t = await this.getZoomData();
          return t && t._zm_baseurl && "" != t._zm_baseurl && (e = this.replaceComDomain(t._zm_baseurl + "/")), e;
        },
        getZoomData: async function () {
          let e = "";
          try {
            e = JSON.parse(await this.getValue("zoom_data"));
          } catch (e) {}
          return e || this.clearAllData(), e;
        },
        replaceComDomain: function (e) {
          return e;
        },
        populateZak: async function (e) {
          var t = await this.getZoomZakRequestToken();
          t && Object.assign(e, { zak: t });
        },
        getZoomHeader: async function () {
          return {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest",
            "x-zm-cluster-id": await this.getClusterHeader(),
            "X-Requested-From": "ZOOM-EXTENSION",
            "x-requested-browser": this.getRequestedBrowser(),
            "x-zm-haid": await this.getHaidHeader(),
            "x-zm-aid": await this.getAidHeader()
          };
        },
        getRequestedBrowser: function () {
          return "edge" === n.browserConfig ? "EDGE" : "CHROME";
        },
        getClusterHeader: async function () {
          return (await this.getValue("zoom_cluster")) || "";
        },
        getHaidHeader: async function () {
          return (await this.getValue("zm_haid")) || "";
        },
        getAidHeader: async function () {
          return (await this.getValue("zm_aid")) || "";
        }
      };
      function s(e) {
        if (Array.isArray(e) && e.length) {
          let t = [];
          for (let o = 0; o < e.length; o++) t.push(e[o].id);
          return t;
        }
        return [];
      }
      const u = 998 != o.j ? r : null;
    },
    559: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => _ });
      var a = o(467),
        i = o(812);
      const n = {
        checkData(e) {
          !(function (e) {
            i.inArray(e.option_video_host, ["on", "off"]) < 0 &&
              (n.recordZoomDataError(`option_video_host illegal: ${n.convertToString(e.option_video_host)}`), (e.option_video_host = "on"));
            i.inArray(e.option_video_participant, ["on", "off"]) < 0 &&
              (n.recordZoomDataError(`option_video_participant illegal: ${n.convertToString(e.option_video_participant)}`),
              (e.option_video_participant = "on"));
            i.inArray(e.option_audio_type, ["telephony", "voip", "both", "other"]) < 0 &&
              (n.recordZoomDataError(`option_audio_type illegal: ${n.convertToString(e.option_audio_type)}`),
              (e.option_audio_type = "both"));
            i.inArray(e.option_pmi_jbhpwd, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_pmi_jbhpwd illegal: ${n.convertToString(e.option_pmi_jbhpwd)}`), (e.option_pmi_jbhpwd = !1));
            i.inArray(e.option_require_jbh, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_require_jbh illegal: ${n.convertToString(e.option_require_jbh)}`),
              (e.option_require_jbh = !1));
            i.inArray(e.option_use_pmi, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_use_pmi illegal: ${n.convertToString(e.option_use_pmi)}`), (e.option_use_pmi = !1));
            i.inArray(e.option_require_pwd, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_require_pwd illegal: ${n.convertToString(e.option_require_pwd)}`),
              (e.option_require_pwd = !1));
            i.inArray(e.option_pwd_type, ["1", "2"]) < 0 &&
              (n.recordZoomDataError(`option_pwd_type illegal: ${n.convertToString(e.option_pwd_type)}`), (e.option_pwd_type = "1"));
            i.inArray(e.option_joinurl, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_joinurl illegal: ${n.convertToString(e.option_joinurl)}`), (e.option_joinurl = !1));
            i.inArray(e.option_mute_upon_entry, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_mute_upon_entry illegal: ${n.convertToString(e.option_mute_upon_entry)}`),
              (e.option_mute_upon_entry = !1));
            i.inArray(e.option_public_cal, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_public_cal illegal: ${n.convertToString(e.option_public_cal)}`), (e.option_public_cal = !1));
            "object" !== i.type(e.scheduleDefaultLockOption) &&
              (n.recordZoomDataError(`scheduleDefaultLockOption illegal: ${n.convertToString(e.scheduleDefaultLockOption)}`),
              (e.scheduleDefaultLockOption = {}));
            i.inArray(e.option_fte, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_fte illegal: ${n.convertToString(e.option_fte)}`), (e.option_fte = !1));
            void 0 === e.option_pacindex
              ? (e.option_pacindex = "1")
              : i.inArray(e.option_pacindex, ["1", "2"]) < 0 &&
                (n.recordZoomDataError(`option_pacindex illegal: ${n.convertToString(e.option_pacindex)}`), (e.option_pacindex = "1"));
            i.inArray(e.option_enforce_login, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_enforce_login illegal: ${n.convertToString(e.option_enforce_login)}`),
              (e.option_enforce_login = !1));
            "string" !== i.type(e.option_domain_info) &&
              (n.recordZoomDataError(`option_domain_info illegal: ${n.convertToString(e.option_domain_info)}`),
              (e.option_domain_info = ""));
            void 0 !== e.alt_hosts &&
              "" !== e.alt_hosts &&
              "array" !== i.type(e.alt_hosts) &&
              (n.recordZoomDataError(`alt_hosts illegal: ${n.convertToString(e.alt_hosts)}`), (e.alt_hosts = ""));
            i.inArray(e.option_fixed_popup, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_fixed_popup illegal: ${n.convertToString(e.option_fixed_popup)}`),
              (e.option_fixed_popup = !1));
            null === e._zm_locale
              ? (e._zm_locale = "en_US")
              : "string" !== i.type(e._zm_locale) &&
                (n.recordZoomDataError(`_zm_locale illegal: ${n.convertToString(e._zm_locale)}`), (e._zm_locale = "en_US"));
            i.inArray(e.option_record_type, [-1, 0, 1, 2]) < 0 &&
              (n.recordZoomDataError(`option_record_type illegal: ${n.convertToString(e.option_record_type)}`),
              (e.option_record_type = -1));
            "string" !== i.type(e._zm_cluster) &&
              (n.recordZoomDataError(`_zm_cluster illegal: ${n.convertToString(e._zm_cluster)}`), (e._zm_cluster = ""));
            i.inArray(e.option_require_reg, [!0, !1]) < 0 &&
              (n.recordZoomDataError(`option_require_reg illegal: ${n.convertToString(e.option_require_reg)}`),
              (e.option_require_reg = !1));
            "string" !== i.type(e.option_pmi_savepwd) &&
              (n.recordZoomDataError(`option_pmi_savepwd illegal: ${n.convertToString(e.option_pmi_savepwd)}`),
              (e.option_pmi_savepwd = ""));
            if ("object" !== i.type(e.authenticationV2))
              n.recordZoomDataError(`authenticationV2 illegal: ${n.convertToString(e.authenticationV2)}`),
                (e.authenticationV2 = {
                  support: !1,
                  locked: !1,
                  normal: { defaultVal: !1 },
                  pmi: { defaultVal: !1, pmiUpdate: {} },
                  optionLists: []
                });
            else {
              if ("array" !== i.type(e.authenticationV2.optionLists))
                n.recordZoomDataError(`authenticationV2.optionLists illegal: ${n.convertToString(e.authenticationV2.optionLists)}`),
                  (e.authenticationV2.optionLists = []);
              else {
                let o = e.authenticationV2.optionLists;
                for (var t = o.length - 1; t > -1; t--) {
                  let a = o[t];
                  "object" !== i.type(a) &&
                    (n.recordZoomDataError(`authenticationV2.optionLists's items illegal: ${n.convertToString(a)}`),
                    e.authenticationV2.optionLists.splice(t, 1));
                }
              }
              if ("object" !== i.type(e.authenticationV2.pmi))
                n.recordZoomDataError(`authenticationV2.pmi illegal: ${n.convertToString(e.authenticationV2.pmi)}`),
                  (e.authenticationV2.pmi = { defaultVal: !1, pmiUpdate: {} });
              else {
                let t = e.authenticationV2.pmi;
                "boolean" !== i.type(t.defaultVal) &&
                  (n.recordZoomDataError(
                    `authenticationV2.pmi.defaultVal illegal: ${n.convertToString(e.authenticationV2.pmi.defaultVal)}`
                  ),
                  (e.authenticationV2.pmi.defaultVal = !1)),
                  "object" !== i.type(t.pmiUpdate) &&
                    (n.recordZoomDataError(
                      `authenticationV2.pmi.pmiUpdate illegal: ${n.convertToString(e.authenticationV2.pmi.pmiUpdate)}`
                    ),
                    (e.authenticationV2.pmi.pmiUpdate = {}));
              }
              if ("object" !== i.type(e.authenticationV2.normal))
                n.recordZoomDataError(`authenticationV2.normal illegal: ${n.convertToString(e.authenticationV2.normal)}`),
                  (e.authenticationV2.normal = { defaultVal: !1 });
              else {
                let t = e.authenticationV2.normal;
                "boolean" !== i.type(t.defaultVal) &&
                  (n.recordZoomDataError(
                    `authenticationV2.normal.defaultVal illegal: ${n.convertToString(e.authenticationV2.normal.defaultVal)}`
                  ),
                  (e.authenticationV2.normal.defaultVal = !1));
              }
              "boolean" !== i.type(e.authenticationV2.locked) &&
                (n.recordZoomDataError(`authenticationV2.locked illegal: ${n.convertToString(e.authenticationV2.locked)}`),
                (e.authenticationV2.locked = !1)),
                "boolean" !== i.type(e.authenticationV2.support) &&
                  (n.recordZoomDataError(`authenticationV2.support illegal: ${n.convertToString(e.authenticationV2.support)}`),
                  (e.authenticationV2.support = !1)),
                e.authenticationV2.support ||
                  (e.authenticationV2 = {
                    support: !1,
                    locked: !1,
                    normal: { defaultVal: !1 },
                    pmi: { defaultVal: !1, pmiUpdate: {} },
                    optionLists: []
                  });
            }
            if (null === e.meetingPwdSettingsMap) e.meetingPwdSettingsMap = "";
            else if ("object" !== i.type(e.meetingPwdSettingsMap))
              n.recordZoomDataError(`meetingPwdSettingsMap illegal: ${n.convertToString(e.meetingPwdSettingsMap)}`),
                (e.meetingPwdSettingsMap = "");
            else if (i.isEmptyObject(e.meetingPwdSettingsMap)) e.meetingPwdSettingsMap = "";
            else {
              i.each(e.meetingPwdSettingsMap, function (t, o) {
                "true" === o ? (e.meetingPwdSettingsMap[t] = !0) : ("false" !== o && void 0 !== o) || (e.meetingPwdSettingsMap[t] = !1);
              });
              try {
                let t = parseInt(e.meetingPwdSettingsMap.lengthRule);
                e.meetingPwdSettingsMap.lengthRule = isNaN(t) ? 0 : t;
              } catch (t) {
                e.meetingPwdSettingsMap.lengthRule = 0;
              }
              try {
                let t = parseInt(e.meetingPwdSettingsMap.consecutiveRule);
                e.meetingPwdSettingsMap.consecutiveRule = isNaN(t) ? 0 : t;
              } catch (t) {
                e.meetingPwdSettingsMap.consecutiveRule = 0;
              }
            }
            if ("object" !== i.type(e.dcOptions))
              n.recordZoomDataError(`dcOptions illegal: ${n.convertToString(e.dcOptions)}`),
                (e.dcOptions = { support: !1, locked: !0, options: [] });
            else {
              let t = e.dcOptions;
              if (
                ("boolean" !== i.type(t.support) && (t.support = !1),
                "boolean" !== i.type(t.locked) && (t.locked = !1),
                "string" === i.type(t.enableDC))
              )
                if (t.enableDC)
                  try {
                    (t.enableDC = JSON.parse(t.enableDC)), "object" !== i.type(t.enableDC) && (t.enableDC = void 0);
                  } catch (e) {
                    t.enableDC = void 0;
                  }
                else t.enableDC = void 0;
              else void 0 !== t.enableDC && (t.enableDC = void 0);
              "array" !== i.type(t.options) && (t.options = []);
            }
            "boolean" !== i.type(e.show_unmute_all) && (e.show_unmute_all = !1);
            "boolean" !== i.type(e.enable_unmute_all) && (e.enable_unmute_all = !1);
            let o = !1;
            try {
              let t = e.security,
                a = [
                  t.newSecurityEnabled.defaultVal,
                  t.normal.passcode.locked,
                  t.normal.passcode.defaultVal,
                  t.normal.waitingroom.locked,
                  t.normal.waitingroom.defaultVal,
                  t.pmi.passcode.locked,
                  t.pmi.passcode.default_all,
                  t.pmi.passcode.default_jbh,
                  t.pmi.waitingroom.locked,
                  t.pmi.waitingroom.defaultVal,
                  t.security3c1
                ];
              i.each(a, function (e, t) {
                "boolean" !== i.type(t) && (o = !0);
              }),
                "string" !== i.type(t.pmi.passcode.value) && (o = !0);
            } catch (e) {
              o = !0;
            }
            o &&
              (n.recordZoomDataError(`security illegal: ${n.convertToString(e.security)}`),
              (e.security = {
                security3c1: !1,
                newSecurityEnabled: { defaultVal: !1 },
                normal: { passcode: { locked: !1, defaultVal: !1 }, waitingroom: { locked: !1, defaultVal: !1 } },
                pmi: { passcode: { locked: !1, default_all: !1, default_jbh: !1, value: "" }, waitingroom: { locked: !1, defaultVal: !1 } }
              }));
            if ("object" !== i.type(e.e2ee))
              n.recordZoomDataError(`e2ee illegal: ${n.convertToString(e.e2ee)}`),
                (e.e2ee = { support: !1, locked: !1, normalEnable: !1, pmiEnable: !1 });
            else {
              let t = e.e2ee;
              "boolean" !== i.type(t.support) && (e.e2ee.support = !1),
                "boolean" !== i.type(t.locked) && (e.e2ee.locked = !1),
                "boolean" !== i.type(t.normalEnable) && (e.e2ee.normalEnable = !1),
                "boolean" !== i.type(t.pmiEnable) && (e.e2ee.pmiEnable = !1);
            }
            if ("object" !== i.type(e.allowDeny))
              n.recordZoomDataError(`allowDeny illegal: ${n.convertToString(e.allowDeny)}`), (e.allowDeny = n.getAllowDenyDefault());
            else {
              let t = e.allowDeny;
              if (("boolean" !== i.type(t.support) && (e.allowDeny.support = !1), e.allowDeny.support)) {
                if (
                  ("boolean" !== i.type(t.locked) && (e.allowDeny.locked = !1),
                  Array.isArray(t.regionList) || (e.allowDeny = n.getAllowDenyDefault()),
                  "object" !== i.type(t.defaultRegion) && (e.allowDeny.defaultRegion = {}),
                  "object" !== i.type(t.normal))
                )
                  e.allowDeny.normal = { type: "0", defaultVal: !1, selectRegion: [] };
                else {
                  let t = e.allowDeny.normal;
                  "0" !== t.type && "1" !== t.type && (e.allowDeny.normal.type = "0"),
                    "boolean" !== i.type(t.defaultVal) && (e.allowDeny.normal.defaultVal = !1),
                    Array.isArray(t.selectRegion) || (e.allowDeny.normal.selectRegion = []),
                    e.allowDeny.normal.defaultVal && !e.allowDeny.normal.selectRegion.length && (e.allowDeny.normal.defaultVal = !1);
                }
                if ("object" !== i.type(t.pmi)) e.allowDeny.pmi = { type: "0", defaultVal: !1, selectRegion: [] };
                else {
                  let t = e.allowDeny.pmi;
                  "0" !== t.type && "1" !== t.type && (e.allowDeny.pmi.type = "0"),
                    "boolean" !== i.type(t.defaultVal) && (e.allowDeny.pmi.defaultVal = !1),
                    Array.isArray(t.selectRegion) || (e.allowDeny.pmi.selectRegion = []),
                    e.allowDeny.pmi.defaultVal && !e.allowDeny.pmi.selectRegion.length && (e.allowDeny.pmi.defaultVal = !1);
                }
              } else e.allowDeny = n.getAllowDenyDefault();
            }
            if (Array.isArray(e.adminTemplates)) {
              let o = e.adminTemplates;
              if (o.length)
                for (t = o.length - 1; t > -1; t--) {
                  let a = o[t];
                  ("object" === i.type(a) && a.templateId && a.name) ||
                    (n.recordZoomDataError(`adminTemplates -> tempData illegal: ${n.convertToString(a)}`), e.adminTemplates.splice(t, 1));
                }
            } else e.adminTemplates = [];
            if (Array.isArray(e.blockDomains)) {
              let o = e.blockDomains;
              if (o.length)
                for (t = o.length - 1; t > -1; t--) {
                  let a = o[t];
                  if ("string" !== i.type(a))
                    n.recordZoomDataError(`blockDomains -> domain value illegal: ${n.convertToString(a)}`), e.blockDomains.splice(t, 1);
                  else {
                    let o = a.trim();
                    o ? o !== a && (e.blockDomains[t] = o) : e.blockDomains.splice(t, 1);
                  }
                }
            } else e.blockDomains = [];
            if ("object" !== i.type(e.allowAlternativeHostEditPoll))
              n.recordZoomDataError(`allowAlternativeHostEditPoll illegal: ${n.convertToString(e.allowAlternativeHostEditPoll)}`),
                (e.allowAlternativeHostEditPoll = { support: !1, locked: !1, normal: { defaultVal: !1 }, pmi: { defaultVal: !1 } });
            else {
              let t = e.allowAlternativeHostEditPoll;
              "boolean" !== i.type(t.support) && (e.allowAlternativeHostEditPoll.support = !1),
                "boolean" !== i.type(t.locked) && (e.allowAlternativeHostEditPoll.locked = !1),
                "object" !== i.type(t.normal)
                  ? (e.allowAlternativeHostEditPoll.normal = { defaultVal: !1 })
                  : "boolean" !== i.type(t.normal.defaultVal) && (e.allowAlternativeHostEditPoll.normal.defaultVal = !1),
                "object" !== i.type(t.pmi)
                  ? (e.allowAlternativeHostEditPoll.pmi = { defaultVal: !1 })
                  : "boolean" !== i.type(t.pmi.defaultVal) && (e.allowAlternativeHostEditPoll.pmi.defaultVal = !1);
            }
            if ("object" !== i.type(e.watermark))
              n.recordZoomDataError(`watermark illegal: ${n.convertToString(e.watermark)}`),
                (e.watermark = { support: !1, defaultVal: !1, locked: !1 });
            else {
              let t = e.watermark;
              "boolean" !== i.type(t.support) && (e.watermark.support = !1),
                "boolean" !== i.type(t.defaultVal) && (e.watermark.defaultVal = !1),
                "boolean" !== i.type(t.locked) && (e.watermark.locked = !1);
            }
            if ("object" !== i.type(e.audioWatermark))
              n.recordZoomDataError(`audioWatermark illegal: ${n.convertToString(e.audioWatermark)}`),
                (e.audioWatermark = { support: !1, defaultVal: !1, locked: !1 });
            else {
              let t = e.audioWatermark;
              "boolean" !== i.type(t.support) && (e.audioWatermark.support = !1),
                "boolean" !== i.type(t.defaultVal) && (e.audioWatermark.defaultVal = !1),
                "boolean" !== i.type(t.locked) && (e.audioWatermark.locked = !1);
            }
            let a = null;
            try {
              a = parseInt(e.maxAttendee);
            } catch (e) {}
            "number" !== i.type(a) || isNaN(a) ? (e.maxAttendee = 1e3) : (e.maxAttendee = a);
            if ("object" !== i.type(e.focusMode))
              n.recordZoomDataError(`focusMode illegal: ${n.convertToString(e.focusMode)}`),
                (e.focusMode = { support: !1, pmi: { defaultVal: !1 } });
            else {
              let t = e.focusMode;
              "boolean" !== i.type(t.support) && (e.focusMode.support = !1),
                "object" !== i.type(t.pmi)
                  ? (e.focusMode.pmi = { defaultVal: !1 })
                  : "boolean" !== i.type(t.pmi.defaultVal) && (e.focusMode.pmi.defaultVal = !1);
            }
            "boolean" !== i.type(e.no_meeting_license_user) && (e.no_meeting_license_user = !1);
            if (Array.isArray(e.assistants)) {
              let t = e.assistants;
              if (t.length)
                for (let o = t.length - 1; o > -1; o--) {
                  let a = t[o];
                  "object" !== i.type(a) || "string" !== i.type(a.id) || "string" !== i.type(a.name) || "string" !== i.type(a.roomid)
                    ? e.assistants.splice(o, 1)
                    : d(a);
                }
            } else n.recordZoomDataError(`assistants illegal: ${n.convertToString(e.assistants)}`), (e.assistants = []);
            if ("string" !== i.type(e.option_schedulefor_host))
              n.recordZoomDataError(`option_schedulefor_host illegal: ${n.convertToString(e.option_schedulefor_host)}`),
                (e.option_schedulefor_host = "");
            else {
              let t = e.option_schedulefor_host;
              if (t) {
                let o = e.assistants,
                  a = !1;
                Array.isArray(o) &&
                  o.length &&
                  i.each(o, function (e, o) {
                    if (o.id == t) return (a = !0), !1;
                  }),
                  a || (e.option_schedulefor_host = "");
              }
            }
            "object" !== i.type(e.meetingFeatures) &&
              (n.recordZoomDataError(`meetingFeatures illegal: ${n.convertToString(e.meetingFeatures)}`), (e.meetingFeatures = {}));
            "object" !== i.type(e.pmiFeatures) &&
              (n.recordZoomDataError(`pmiFeatures illegal: ${n.convertToString(e.pmiFeatures)}`), (e.pmiFeatures = {}));
            f(e.meetingFeatures),
              f(e.pmiFeatures),
              l(e.meetingFeatures),
              l(e.pmiFeatures),
              m(e.meetingFeatures),
              m(e.pmiFeatures),
              d(e.meetingFeatures),
              (function (e) {
                if ("object" !== i.type(e.interpretation))
                  n.recordZoomDataError(`interpretation illegal: ${n.convertToString(e.interpretation)}`), (e.interpretation = c());
                else {
                  let t = e.interpretation;
                  if (
                    ("boolean" !== i.type(t.show) && (t.show = !1),
                    "boolean" !== i.type(t.value) && (t.value = !1),
                    "boolean" !== i.type(t.disabled) && (t.disabled = !1),
                    "object" !== i.type(t.childParams))
                  )
                    t.childParams = { firstLanguage: "", fixedLanguageIdsArr: [], maxCustomLanguagesValue: 5 };
                  else {
                    let e = t.childParams;
                    (e.firstLanguage = e?.interpretationUserSelected?.value?.[0]?.firstLanguage || ""),
                      (e.fixedLanguageIdsArr = e?.fixedLanguageIds?.value || []),
                      (e.maxCustomLanguagesValue = e?.maxCustomLanguages?.value || 5);
                  }
                  if (Array.isArray(t.dataOptions)) {
                    let e = t.dataOptions;
                    if (e.length)
                      for (let o = e.length - 1; o > -1; o--) {
                        let a = e[o];
                        ("object" === i.type(a) && a.id && a.label && a.ext) || t.dataOptions.splice(o, 1);
                      }
                  } else t.dataOptions = [];
                  t.dataOptions.length || (t.show = !1);
                }
              })(e.meetingFeatures),
              "boolean" !== i.type(e.isPaidAccount) && (e.isPaidAccount = !1);
          })(e);
        },
        recordZoomDataError: function (e, t) {
          (t = t || "datamanage -- dataValidity"), a.Z.sendLog({ msgType: 1, msg: { tag: "zoom_data error", msg: e, source: t } });
        },
        getAllowDenyDefault: function () {
          return {
            support: !1,
            locked: !1,
            regionList: [],
            defaultRegion: {},
            normal: { type: "0", defaultVal: !1, selectRegion: [] },
            pmi: { type: "0", defaultVal: !1, selectRegion: [] }
          };
        },
        convertToString: function (e) {
          if (Object.is(e, NaN) || void 0 === e) return String(e);
          {
            let t = "";
            try {
              t = JSON.stringify(e);
            } catch (t) {
              a.Z.sendLog({ msgType: 4, msg: { msg: "convertToString failed, data: " + e, errorStack: t.stack } });
            }
            return t;
          }
        },
        meetingFeaturesValidity: function (e) {
          return (
            "object" !== i.type(e) && (e = {}),
            "object" !== i.type(e.autoRec) && (e.autoRec = h()),
            s(e) && "object" !== i.type(e.waitingRoom2) && (e.waitingRoom2 = u()),
            "object" !== i.type(e.qa) && (e.qa = g()),
            "object" !== i.type(e.pmc) && (e.pmc = p()),
            "object" !== i.type(e.interpretation) && (e.interpretation = c()),
            e
          );
        },
        pmiFeaturesValidity: function (e) {
          return (
            "object" !== i.type(e) && (e = {}),
            "object" !== i.type(e.autoRec) && (e.autoRec = h()),
            s(e) && "object" !== i.type(e.waitingRoom2) && (e.waitingRoom2 = u()),
            "object" !== i.type(e.qa) && (e.qa = g()),
            e
          );
        }
      };
      function l(e) {
        if (s(e))
          if ("object" !== i.type(e.waitingRoom2))
            n.recordZoomDataError(`waitingRoom2 illegal: ${n.convertToString(e.waitingRoom2)}`), (e.waitingRoom2 = u());
          else {
            let t = e.waitingRoom2;
            if (
              ("boolean" !== i.type(t.show) && (t.show = !1),
              "boolean" !== i.type(t.value) && (t.value = !1),
              "boolean" !== i.type(t.disabled) && (t.disabled = !1),
              "object" !== i.type(t.childParams))
            )
              (t.show = !1), (t.childParams = { auto: {}, manu: {}, options: {} });
            else {
              let e = t.childParams,
                o = e.auto;
              "object" !== i.type(o) ? ((t.show = !1), (e.auto = {})) : r(o, "auto");
              let a = e.manu;
              "object" !== i.type(a) ? (e.manu = { show: !1, value: null, dataOptions: null }) : r(a, "manu");
              let n = e.options;
              "object" !== i.type(n) ? ((t.show = !1), (e.options = {})) : r(n, "options"),
                (e.auto.show && e.options.show) || (t.show = !1);
            }
          }
      }
      function r(e, t) {
        if (
          ("boolean" !== i.type(e.show) && (e.show = !1),
          "string" !== i.type(e.value) &&
            ("auto" === t
              ? (e.value = "-1")
              : "manu" === t
              ? Array.isArray(e.dataOptions)
                ? (e.value = "-1")
                : (e.value = null)
              : "options" === t && (e.value = "manu")),
          "boolean" !== i.type(e.disabled) && (e.disabled = !1),
          Array.isArray(e.dataOptions))
        ) {
          let o = e.dataOptions,
            a = !1,
            n = "options" === t ? "manu" : "-1",
            l = !1;
          for (let t = o.length - 1; t > -1; t--) {
            let r = o[t];
            "object" !== i.type(r) || "string" !== i.type(r.id) || "string" !== i.type(r.label)
              ? e.dataOptions.splice(t, 1)
              : (r.id === e.value && (a = !0), r.id === n && (l = !0));
          }
          a || (l ? (e.value = n) : (e.show = !1));
        } else e.show && (e.show = !1), null !== e.dataOptions && (e.dataOptions = null);
      }
      function s(e) {
        let t = !1;
        try {
          let o = e.waitingRoom.childParams.op;
          "boolean" !== i.type(o.value) ? (o.value = !1) : (t = o.value);
        } catch (t) {
          e.waitingRoom = (function () {
            let e = { childParams: { op: { value: !1 } } };
            return e;
          })();
        }
        return t;
      }
      function u() {
        return { show: !1, value: !1, disabled: !1, childParams: { auto: {}, manu: {}, options: {} }, dataOptions: null };
      }
      function c() {
        return {
          show: !1,
          value: !1,
          disabled: !1,
          childParams: { firstLanguage: "", fixedLanguageIdsArr: [], maxCustomLanguagesValue: 5 },
          dataOptions: []
        };
      }
      function d(e) {
        if ("object" !== i.type(e.pmc)) n.recordZoomDataError(`pmc illegal: ${n.convertToString(e.pmc)}`), (e.pmc = p());
        else {
          let t = e.pmc;
          if (
            ("boolean" !== i.type(t.show) && (t.show = !1),
            "boolean" !== i.type(t.value) && (t.value = !1),
            "boolean" !== i.type(t.disabled) && (t.disabled = !1),
            "object" !== i.type(t.childParams))
          )
            t.childParams = {
              allowAutoAddInvitedExternalUsers: { show: !1, value: !1, disabled: !1, childParams: null, dataOptions: null }
            };
          else {
            let e = t.childParams;
            if ("object" !== i.type(e.allowAutoAddInvitedExternalUsers))
              e.allowAutoAddInvitedExternalUsers = { show: !1, value: !1, disabled: !1, childParams: null, dataOptions: null };
            else {
              let o = e.allowAutoAddInvitedExternalUsers;
              ("boolean" === i.type(o.show) && t.show) || (o.show = !1),
                "boolean" !== i.type(o.value) && (o.value = !1),
                "boolean" !== i.type(o.disabled) && (o.disabled = !1);
            }
          }
        }
      }
      function p() {
        return {
          show: !1,
          value: !1,
          disabled: !1,
          childParams: { allowAutoAddInvitedExternalUsers: { show: !1, value: !1, disabled: !1, childParams: null, dataOptions: null } },
          dataOptions: null
        };
      }
      function m(e) {
        if ("object" !== i.type(e.qa)) n.recordZoomDataError(`qa illegal: ${n.convertToString(e.qa)}`), (e.qa = g());
        else {
          let t = e.qa;
          "boolean" !== i.type(t.show) && (t.show = !1),
            "boolean" !== i.type(t.value) && (t.value = !1),
            "boolean" !== i.type(t.disabled) && (t.disabled = !1);
        }
      }
      function g() {
        return { show: !1, value: !1, disabled: !1, childParams: null, dataOptions: null };
      }
      function f(e) {
        if ("object" !== i.type(e.autoRec)) n.recordZoomDataError(`autoRec illegal: ${n.convertToString(e.autoRec)}`), (e.autoRec = h());
        else {
          let o = e.autoRec;
          if (
            ("boolean" !== i.type(o.show) && (o.show = !1),
            "boolean" !== i.type(o.disabled) && (o.disabled = !1),
            "object" !== i.type(o.childParams))
          )
            o.childParams = { autoRecordingSubSelected: {}, exceedMaxStorage: {} };
          else {
            let e = o.childParams;
            "object" !== i.type(e.autoRecordingSubSelected) && (e.autoRecordingSubSelected = {}),
              "object" !== i.type(e.exceedMaxStorage) && (e.exceedMaxStorage = {});
          }
          if (Array.isArray(o.dataOptions)) {
            let e = o.dataOptions;
            if (e.length) for (var t = e.length - 1; t > -1; t--) "object" !== i.type(e[t]) && o.dataOptions.splice(t, 1);
          } else o.dataOptions = [];
        }
      }
      function h() {
        return { show: !1, value: !1, disabled: !1, childParams: { autoRecordingSubSelected: {}, exceedMaxStorage: {} }, dataOptions: [] };
      }
      const _ = 998 != o.j ? n : null;
    },
    266: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => h });
      o(133);
      var a = o(755),
        i = o(812);
      let n,
        l = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "!@#$%^&*()", "01234567890"];
      function r(e, t) {
        let o = this,
          l = !0,
          r = "",
          s = "";
        a(e)
          .on("focus", function (r) {
            r.stopPropagation(),
              t &&
                (l &&
                  ((l = !1),
                  (function (e) {
                    let t = e.getBoundingClientRect().width / 2;
                    a(".zoom-pwd-auth-pop .pop-arrow").css({ left: t + "px" });
                  })(e)),
                n.length && i.showDomAnimate(a(".zoom-pwd-auth-pop")),
                o.checkRules(),
                f(this));
          })
          .on("blur", function (e) {
            e.stopPropagation(), t && n.length && i.closeDomAnimate(a(".zoom-pwd-auth-pop")), o.opt.blurCallback();
          })
          .on("input", function (e) {
            if (t) {
              let { res: e, msg: t, errortype: a } = o.checkRules();
              e && o.opt.conformRuleCallback();
            }
            (s = this.value), 1 === s.length && 0 === r.length && o.opt.startInputCallback(), (r = s);
          })
          .on("keyup", function (e) {
            9 != e.keyCode &&
              16 != e.keyCode &&
              ((this.value = this.value.replace(/[^\w~!@#$%^&*()/\|,\.<>?"';:+\-=\[\]{}]/g, "")),
              a("#meetingPwdDescription").text(""),
              40 === e.keyCode && f(this));
          })
          .on("afterpaste", function (e) {
            this.value = this.value.replace(/[^\w~!@#$%^&*()/\|,\.<>?"';:+\-=\[\]{}]/g, "");
          });
      }
      function s() {
        try {
          let e = new Uint32Array(1);
          window.crypto.getRandomValues(e);
          let t = e[0].toString(),
            o = Math.floor((t.length - 1) * parseFloat("0." + t));
          return parseFloat("0." + t.substring(o));
        } catch (e) {}
        return Math.random();
      }
      function u(e, t, o = !0) {
        let a = !0;
        return (
          t.lengthRule > 0 && (e.length >= t.lengthRule ? o && p("length") : ((a = !1), o && m("length"))),
          t.alpabetRule &&
            (!(function (e) {
              return /[A-Za-z]/.test(e);
            })(e)
              ? ((a = !1), o && m("alpabet"))
              : o && p("alpabet")),
          t.numberRule &&
            (!(function (e) {
              return /\d/.test(e);
            })(e)
              ? ((a = !1), o && m("number"))
              : o && p("number")),
          t.specialRule &&
            (!(function (e) {
              return /[~!@#$%^&*()/\|,\.<>?"';:_+\-=\[\]{}]/.test(e);
            })(e)
              ? ((a = !1), o && m("special"))
              : o && p("special")),
          t.onlyNumberRule &&
            (!(function (e) {
              if ("string" === i.type(e) && 0 === e.length) return !0;
              return /\D/.test(e);
            })(e)
              ? o && p("onlyNumber")
              : ((a = !1), o && m("onlyNumber"))),
          t.combineRule &&
            (!(function (e) {
              let t = /[A-Z]/;
              return /[a-z]/.test(e) && t.test(e);
            })(e)
              ? ((a = !1), o && m("upperLowerChar"))
              : o && p("upperLowerChar")),
          t.consecutiveRule > 0 && (c(e, t.consecutiveRule, !0) ? ((a = !1), o && m("consecutive")) : o && p("consecutive")),
          a
        );
      }
      function c(e, t, o) {
        o && (e = e.toLowerCase());
        let a,
          i,
          n,
          l = e.length;
        t = parseInt(t);
        for (let o = 0; o <= l - t; o++) {
          (a = 0), (i = 0), (n = 0);
          for (let l = 0; l < t - 1; l++) {
            if (e.charCodeAt(o + l) == e.charCodeAt(o + l + 1) && (a++, a == t - 1)) return !0;
            if (e.charCodeAt(o + l + 1) - e.charCodeAt(o + l) == 1 && (i++, i == t - 1)) return !0;
            if (e.charCodeAt(o + l) - e.charCodeAt(o + l + 1) == 1 && (n++, n == t - 1)) return !0;
          }
          if (d(e.substring(o, o + t))) return !0;
        }
        return !1;
      }
      function d(e) {
        let t = [...e].reverse().join("");
        for (var o = 0; o < l.length; o++) {
          var a = l[o];
          if (-1 != a.indexOf(e) || -1 != a.indexOf(t)) return !0;
        }
        return !1;
      }
      function p(e) {
        n && n.find("." + e).addClass("tick");
      }
      function m(e) {
        n && n.find("." + e).removeClass("tick");
      }
      function g(e) {
        let t = [...e];
        for (var o = t.length - 1; o > 0; o--) {
          var a = Math.floor(s() * (o + 1)),
            i = t[o];
          (t[o] = t[a]), (t[a] = i);
        }
        return t.join("");
      }
      function f(e) {
        if (n.length) {
          let t = "Password must:";
          n.find("div").each(function () {
            let e = a(this);
            e.hasClass("tick") ? (t += e.text() + ", met, ") : (t += e.text() + ", not met, ");
          }),
            a("#meetingPwdDescription").text(t),
            a(e).attr("aria-describedby", "meetingPwdDescription");
        }
      }
      const h = class {
        constructor(e) {
          (this.opt = Object.assign({}, { blurCallback: () => {}, startInputCallback: () => {}, conformRuleCallback: () => {} }, e)),
            this.init();
        }
        log() {
          console.log(this.opt);
        }
        init() {
          this.opt.jquery && (a = this.opt.jquery);
          let e = this.opt.el,
            t = this.opt.rule;
          e && (this.createMenu(e, t), r.call(this, e, t));
        }
        createMenu(e, t) {
          let o = (function (e) {
            let t = '\n        <div class="zoom-pwd-auth-pop">\n            <div class="pop-arrow"></div>\n            ',
              o = e.lengthRule > 0 || e.alpabetRule || e.numberRule || e.specialRule || e.onlyNumberRule || e.combineRule;
            o && (t += '<div class="pop-title">Password must:</div>\n                    <div class="auth-list">');
            e.lengthRule > 0 && (t += `<div class="length">Have at least ${e.lengthRule} characters</div>`);
            e.alpabetRule && (t += '<div class="alpabet">Have at least 1 letter (a, b, c...)</div>');
            e.numberRule && (t += '<div class="number">Have at least 1 number (1, 2, 3...)</div>');
            e.specialRule && (t += '<div class="special">Have at least 1 special character (!, @, #...)</div>');
            e.onlyNumberRule && (t += '<div class="onlyNumber">Only allow numeric password</div>');
            e.combineRule && (t += '<div class="upperLowerChar">Include both upper case and lower case characters</div>');
            o && (t += "</div>");
            (o = e.consecutiveRule > 0),
              o && (t += '<div class="pop-title">Password must NOT:</div>\n                    <div class="auth-list">');
            e.consecutiveRule > 0 &&
              (t += `<div class="consecutive">Contain ${e.consecutiveRule} consecutive characters (e.g. "11111", "12345", "abcde", or "qwert")</div>`);
            o && (t += "</div>");
            return (t += '\n        </div>\n        <div id="meetingPwdDescription"></div>\n    '), t;
          })(t);
          a(e).after(o), (n = a(".zoom-pwd-auth-pop .auth-list"));
        }
        checkRules() {
          let e = this.opt.el,
            t = this.opt.rule;
          if (e) {
            let o = a(e).val();
            if (((o = o ? o.trim() : ""), o)) {
              if (t) {
                return u(o, t, !0) ? { res: !0, msg: "" } : { res: !1, msg: "The password does not meet the requirement", errortype: 1 };
              }
              return { res: !0, msg: "" };
            }
            return u(o, t, !0), { res: !1, msg: "Please enter a meeting password", errortype: 2 };
          }
          return { res: !1, msg: "Password entry box not found", errortype: 3 };
        }
        getPassword() {
          let e = this.opt.el,
            t = "";
          return e && ((t = a(e).val()), t && (t = t.trim())), t;
        }
        static validityPassword(e, t) {
          return !(!e || !t) && u(e, t, !1);
        }
        static generateMeetingPassword(e, t = 1) {
          if (!e) {
            let e = "";
            return (e = 2 === t ? this.generateNumLetterPassword(6) : this.generateNumberPassword(6)), e;
          }
          let o = Math.max(6, e.lengthRule);
          if (e.onlyNumberRule) return this.generateNumberPassword(o);
          {
            let t = this.genPwdByActionableRule(e, o);
            if (e.consecutiveRule > 0) {
              let a = 20;
              for (; --a > 0 && c(t, e.consecutiveRule, !0); ) t = a % 5 == 0 ? this.genPwdByActionableRule(e, o) : g(t);
            }
            return t;
          }
        }
        static generateNumberPassword(e) {
          let t = [];
          for (let o = 0; o < e; o++) t.push(parseInt(10 * s(), 10));
          return t.join("");
        }
        static generateNumLetterPassword(e) {
          let t = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
            o = [],
            a = Math.floor(s() * (e - 1)) + 1;
          for (let i = 0; i < e; i++) a > 0 ? (o.push(t.charAt(parseInt(48 * s()))), a--) : o.push(parseInt(10 * s()));
          return g(o.join(""));
        }
        static generateComplexPassword(e, t) {
          if (t && e > 0) {
            let o = [];
            for (let a = 0; a < e; a++) o.push(t.charAt(parseInt(s() * t.length)));
            return o.join("");
          }
          return "";
        }
        static genPwdByActionableRule(e, t) {
          let o = [],
            a = "0123456789";
          if ((o.push(parseInt(10 * s(), 10)), t--, e.alpabetRule)) {
            let e = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
            o.push(e.charAt(parseInt(s() * e.length))), t--, (a += e);
          }
          if (e.specialRule) {
            let e = "!@#$%^&*.?+=";
            o.push(e.charAt(parseInt(s() * e.length))), t--, (a += e);
          }
          if (e.combineRule) {
            let i = "ABCDEFGHJKLMNPQRSTUVWXYZ";
            o.push(i.charAt(parseInt(s() * i.length))),
              t--,
              (i = "abcdefghijkmnpqrstuvwxyz"),
              o.push(i.charAt(parseInt(s() * i.length))),
              t--,
              e.alpabetRule || (a += "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
          }
          return g(o.join("") + this.generateComplexPassword(t, a));
        }
      };
    },
    812: (e) => {
      const t = {
        showDomAnimate(e) {
          let t = e.get(0);
          t &&
            (e.css({ display: "block" }),
            t.timeout && (clearTimeout(t.timeout), (t.timeout = null)),
            (t.timeout = setTimeout(function () {
              e.addClass("show"), (t.timeout = null);
            }, 10)));
        },
        closeDomAnimate(e, t = 150) {
          let o = e.get(0);
          o &&
            (e.removeClass("show"),
            o.timeout && (clearTimeout(o.timeout), (o.timeout = null)),
            (o.timeout = setTimeout(function () {
              e.css({ display: "none" }), (o.timeout = null);
            }, 150)));
        },
        type: (e) =>
          Object.prototype.toString
            .call(e)
            .replace(/(?:^\[object\s(.*?)\]$)/, "$1")
            .toLowerCase(),
        endWithStr(e, t) {
          if (e && t && "string" == this.type(e) && "string" == this.type(t)) {
            let o = e.length - t.length;
            return o >= 0 && e.lastIndexOf(t) == o;
          }
          return !1;
        },
        isURLFormat: (e) =>
          /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
            e
          ),
        generateAlphanumeric: function (e) {
          let t = [],
            o = [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z"
            ];
          for (let a = 0; a < e; a++) t.push(o[parseInt(62 * Math.random(), 10)]);
          return t.join("");
        },
        inArray: function (e, t) {
          return t.indexOf(e);
        },
        each: function (e, o) {
          let a = t.type(e);
          if ("array" === a || "nodeList" === a)
            [].every.call(e, function (e, t) {
              return !1 !== o.call(e, t, e);
            });
          else if ("object" === a) for (let t in e) if (!1 === o.call(e[t], t, e[t])) break;
        },
        trim: function (e) {
          return "string" === t.type(e) ? e.trim() : e;
        },
        isEmptyObject: function (e) {
          return e && 0 === Object.keys(e).length && e.constructor === Object;
        },
        debounce: function (e, t) {
          let o = null;
          return function () {
            let a = this,
              i = arguments;
            o && clearTimeout(o),
              (o = setTimeout(function () {
                e.apply(a, i), (o = null);
              }, t));
          };
        }
      };
      e.exports = t;
    },
    467: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => u });
      var a = o(577),
        i = o(559),
        n = o(918),
        l = o(915),
        r = o(812);
      let s = {
        logTimeDelayer: null,
        logDataArr: [],
        sendLogDelayTime: 1e3 * (5 == l.envIndex ? 60 : 3),
        sendLog: function (e) {
          if (e && e.msg) {
            let t = "";
            try {
              (e = JSON.parse(JSON.stringify(e))),
                s.traverseLog("msg", e.msg, e),
                (t = `[${l.browserConfig} extension log] ` + i.Z.convertToString(e.msg));
            } catch (e) {}
            if (!t) return;
            let o = { msgType: e.msgType || 0, msg: t, operaType: e.operaType || 0 };
            s.logDataArr.push(o),
              s.logTimeDelayer ||
                (s.logTimeDelayer = setTimeout(function () {
                  try {
                    s.logSender();
                  } catch (e) {}
                  s.logTimeDelayer = null;
                }, s.sendLogDelayTime || 6e4));
          }
        },
        traverseLog: function (e, t, o) {
          let a = r.type(t);
          "object" === a || "array" === a
            ? r.each(t, function (e, o) {
                s.traverseLog(e, o, t);
              })
            : s.cleanLog(e, o);
        },
        cleanLog: function (e, t) {
          r.inArray(e, ["zak", "topic", "password", "mtg_alternative_host"]) > -1 && (t[e] = "***");
        },
        logSender: async function () {
          if (s.logDataArr.length && (await a.Z.hasZoomRqToken())) {
            let e = (await a.Z.getUserBaseUrl()) + a.Z.logUrl,
              t = { ext_version: l.extVersion, msgType: 0, msg: JSON.stringify(s.logDataArr), operaType: 0 };
            return (
              await a.Z.populateZak(t),
              (s.logDataArr = []),
              await n.Z.webRequest(e, {
                method: "POST",
                mode: "cors",
                timeout: 5e3,
                headers: await a.Z.getZoomHeader(),
                body: n.Z.jsonToUrlParam(t)
              })
            );
          }
        }
      };
      const u = 998 != o.j ? s : null;
    },
    918: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => r });
      var a = o(577),
        i = o(812);
      let n = {
        checkRespStus: function (e) {
          if (e.status >= 200 && e.status < 300) return e;
          const t = new Error(e.statusText);
          throw ((t.response = e), t);
        },
        webRequest: async function (e, t = {}) {
          const { timeout: o = 1e4 } = t,
            a = new AbortController(),
            i = setTimeout(() => a.abort(), o);
          let r = await fetch(e, { ...t, signal: a.signal });
          return clearTimeout(i), (r = n.checkRespStus(r)), (r = r.json()), l(r), r;
        },
        getUrlParam: function (e, t) {
          try {
            if (e && t) {
              let a = e.split("&");
              for (var o = 0; o < a.length; o++) {
                let e = a[o].split("=");
                if (e[0] == t) return e[1];
              }
            }
          } catch (e) {
            console.log(e);
          }
          return "";
        },
        jsonToUrlParam: function (e) {
          return "object" === i.type(e)
            ? (Object.keys(e).forEach((t) => {
                void 0 === e[t] && delete e[t];
              }),
              new URLSearchParams(e).toString())
            : "";
        }
      };
      function l(e) {
        e.status || (201 !== e.errorCode && 212 !== e.errorCode) || !n.getUrlParam(options.data, "zak") || a.Z.clearAllData();
      }
      const r = 998 != o.j ? n : null;
    },
    893: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => _ });
      o(982);
      var a = o(856),
        i = o.n(a),
        n = o(755);
      let l = 0;
      function r(e) {
        let t = this;
        (t.clickOutsideHandler = function (e) {
          if (!t || !t.$selcont) return;
          let o = t.$selcont.get(0);
          if (o) {
            e.target !== o && !o.contains(e.target) && m(t);
          }
        }),
          document.body.addEventListener("click", t.clickOutsideHandler, !0),
          t.$selInput.on("focus", function (e) {
            t.$selcont.addClass("active-state");
          }),
          t.$selcont.on("click", ".zoom-select-input-cont", function (e) {
            e.stopPropagation(), t.$selInput.prop("disabled") || s(t);
          }),
          t.$selcont.on("click", ".zoom-select-option", function (e) {
            e.stopPropagation(), d(n(this), t), c(t);
          }),
          t.$selcont.on("click", ".clear-input-btn", function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              (function (e) {
                e.$selcont.find(".zoom-select-option.selected").removeClass("selected").attr("aria-selected", !1),
                  (e.selectedId = ""),
                  (e.selectedLabel = ""),
                  e.$selcont.removeClass("show-clear-btn"),
                  e.opt.changeCallback(e.selectedId),
                  e.$selInput.val("").trigger("focus");
              })(t),
              c(t);
          }),
          t.$selcont.on("click", function (e) {
            e.stopPropagation();
          }),
          t.$selcont.on("click", ".no-data", function (e) {
            e.stopPropagation(), s(t);
          }),
          t.$selcont.on("input", ".zoom-select-input", function (e) {
            n(this);
            !(function (e, t, o) {
              let a = e.trim();
              if (a === o.oldSearchKey) return;
              o.oldSearchKey = a;
              let i = [],
                n = o.opt.groupRender;
              if (Array.isArray(t) && t.length)
                if ("" === a) i = t;
                else if (a) {
                  let e = [],
                    s = [];
                  for (var l = 0, r = t.length; l < r; l++) {
                    let o = t[l],
                      i = o.label.search(new RegExp(a.replace(/([,.+?:()*\[\]^$|{}\\-])/g, "\\$1"), "i"));
                    0 === i ? e.push(o) : i > 0 && s.push(o);
                  }
                  (i = [...e, ...s]), !o.opt.inputMode || (1 === i.length && i[0].label === a) || i.unshift({ id: a, label: a }), (n = !1);
                }
              let s = g(o, i, n);
              o.$dropdown.find(".zoom-scrollbar-view").html(s),
                (function (e, t) {
                  if (e) {
                    let o = t.$dropdown.find(`.zoom-select-option[value='${e}']`);
                    o.length && o.addClass("selected").attr("aria-selected", !0);
                  }
                })(o.selectedId, o),
                o.$dropdown.hasClass("active-state") || u(o);
            })(this.value, t.opt.dataList, t);
          }),
          t.$selcont.find(".zoom-scrollbar-view").on("mouseover", function (e) {
            let o = n(e.target);
            !o.hasClass("in-hover") &&
              o.hasClass("zoom-select-option") &&
              (t.$dropdown.find(".zoom-select-option.in-hover").removeClass("in-hover"),
              o.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }));
          }),
          t.$selcont.on("keydown", function (e) {
            let o = e.keyCode;
            if (38 === o || 40 === o || 13 === o || 9 === o) {
              if (
                13 === o &&
                (!t.$dropdown.hasClass("active-state") || t.$dropdown.find(".no-data").length) &&
                "clear-input-btn" !== e.target.className
              )
                return void s(t);
              if (9 === o) return void m(t);
              let a = t.$selcont.find(".zoom-select-option.in-hover");
              if (a.length && t.$selInput.is(":focus"))
                if ((e.stopPropagation(), e.preventDefault(), 38 === o)) {
                  let e = p(t, a, !0);
                  e.length &&
                    (a.removeClass("in-hover"),
                    e.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }),
                    t.$selInput.attr("aria-activedescendant", e.attr("id")));
                } else if (40 === o) {
                  let e = p(t, a, !1);
                  e.length &&
                    (a.removeClass("in-hover"),
                    e.addClass("in-hover").get(0).scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }),
                    t.$selInput.attr("aria-activedescendant", e.attr("id")));
                } else 13 === o && (d(a, t), c(t));
            }
          }),
          (function (e) {
            let t = e.dropListFlipDistance,
              o = { root: e.opt.scrollContainer, rootMargin: `60000px 0px -${t}px 0px`, threshold: [0, 1] };
            (e.intersectObserver = new IntersectionObserver((t, o) => {
              !(function (e) {
                let t = e.opt.scrollContainer,
                  o = e.$selcont.get(0);
                if (t && o) {
                  let a = t.getBoundingClientRect()?.bottom,
                    i = o.getBoundingClientRect()?.bottom;
                  a - i < e.dropListFlipDistance ? e.$selcont.addClass("drop-flip") : e.$selcont.removeClass("drop-flip");
                }
              })(e);
            }, o)),
              e.intersectObserver.observe(e.$selcont.get(0));
          })(t);
      }
      function s(e) {
        e.$dropdown.hasClass("active-state")
          ? (c(e), e.$selInput.val(e.selectedLabel))
          : (u(e),
            e.$selInput.val(""),
            setTimeout(function () {
              e.$selInput.trigger("input");
            }, 50)),
          e.$selInput.trigger("focus");
      }
      function u(e) {
        e.$dropdown.addClass("active-state"),
          e.$selInput.attr("aria-activedescendant", e.$dropdown.find(".zoom-select-option.selected").attr("id")).attr("aria-expanded", !0);
      }
      function c(e) {
        e.$dropdown.hasClass("active-state") &&
          (e.$dropdown.removeClass("active-state"), e.$selInput.removeAttr("aria-activedescendant").attr("aria-expanded", !1));
      }
      function d(e, t) {
        e.hasClass("selected") ||
          (t.$selcont.find(".zoom-select-option.selected").removeClass("selected").attr("aria-selected", !1),
          e.addClass("selected").attr("aria-selected", !0),
          (t.selectedId = e.attr("value")),
          (t.selectedLabel = e.attr("data-label")),
          t.opt.allowClearInput && (t.selectedId ? t.$selcont.addClass("show-clear-btn") : t.$selcont.removeClass("show-clear-btn")),
          t.opt.changeCallback(t.selectedId)),
          t.$selInput.val(e.attr("data-label")).trigger("focus");
      }
      function p(e, t, o) {
        let a = t.attr("id");
        if (a) {
          let t = a.split("-"),
            i = e.$dropdown.find(".zoom-select-option").length,
            n = t[4];
          o ? (n--, n < 1 && (n = i)) : (n++, n > i && (n = 1)), (t[4] = n);
          let l = t.join("-");
          return e.$dropdown.find("#" + l);
        }
        return n();
      }
      function m(e) {
        e.$selcont.hasClass("active-state") && (e.$selcont.removeClass("active-state"), c(e), e.$selInput.val(e.selectedLabel));
      }
      function g(e, t, o) {
        let a = "",
          i = e.instantIndex;
        if (Array.isArray(t) && t.length) {
          let n = -10;
          for (let l = 0, r = t.length; l < r; l++) {
            let r = t[l];
            if (o) {
              let o = r.groupTitleIndex;
              o >= 0 &&
                o !== n &&
                (n >= 0 && (a += "</dl></dd>"),
                (a += `\n                            <dd role="group" aria-label="${e.opt.groupTitleArr[o]}" class="zoom-select-group-wrap">\n                                <dl role="listbox">\n                                    <dt class="zoom-select-group-title">${e.opt.groupTitleArr[o]}</dt>\n                        `),
                (n = o)),
                (a += f(i, l, r)),
                o >= 0 && l === t.length - 1 && (a += "</dl></dd>");
            } else a += f(i, l, r);
          }
        }
        return a || (a = '<div class="no-data">No data</div>'), a;
      }
      function f(e, t, o) {
        let a = o.preIcon ? `<span class="pre-icon">${h(o.preIcon)}</span>` : "";
        return `<dd id="zoom-select-option-${e}-${t + 1}" class="zoom-select-option${
          0 === t ? " in-hover" : ""
        }" role="option" aria-selected="false" value="${h(o.id)}" data-label="${h(o.label)}">${a}${h(o.label)}</dd>`;
      }
      function h(e) {
        return i().sanitize(e);
      }
      const _ = /^[79]98$/.test(o.j)
        ? class {
            $selcont;
            $selInput;
            $dropdown;
            selectedId = "";
            selectedLabel = "";
            dropListFlipDistance;
            intersectObserver;
            instantIndex;
            clickOutsideHandler;
            oldSearchKey;
            miniTextInputMode = !1;
            constructor(e) {
              const t = {
                ariaLabel: "",
                groupRender: !1,
                maxDisplayOption: 5,
                placeholder: "Select",
                defaultValue: "",
                scrollContainer: document.body,
                lockState: !1,
                scrollContBottomIndent: 0,
                multiParamResults: !1,
                required: !1,
                inputMode: !1,
                textInputMaxlength: 200,
                allowClearInput: !1,
                dataList: [],
                groupTitleArr: [],
                changeCallback: () => {}
              };
              (this.opt = Object.assign({}, t, e)), (this.instantIndex = ++l), this.init();
            }
            log() {
              console.log(this.opt);
            }
            get isVisible() {
              return this.$selInput.is(":visible");
            }
            init() {
              this.opt.jquery && (n = this.opt.jquery);
              let e = this.opt.el,
                t = this.opt.dataList;
              if (e) {
                if (!t.length && this.opt.inputMode) return (this.miniTextInputMode = !0), void this.createMiniTextInputMenu(e);
                let o = (function (e) {
                  let t = e.opt.maxDisplayOption;
                  if (t > 0) {
                    let o = e.opt.dataList.length;
                    t > o && (t = o);
                    let a = e.opt.scrollContainer;
                    if (a) {
                      let o = Math.floor((n(a).height() - e.opt.scrollContBottomIndent) / 64);
                      if ((o < 1 && (o = 1), t > o)) return o;
                    }
                    return t;
                  }
                  return 1;
                })(this);
                if (
                  (this.opt.groupRender && t.sort((e, t) => e?.groupTitleIndex - t?.groupTitleIndex),
                  this.createMenu(e, t, o),
                  (this.$selcont = n(e).find(".zoom-select-cont")),
                  (this.$selInput = this.$selcont.find(".zoom-select-input")),
                  (this.$dropdown = this.$selcont.find(".zoom-select-dropdown")),
                  (this.dropListFlipDistance = 32 * o + 16 + this.opt.scrollContBottomIndent),
                  r.call(this, e),
                  this.opt.defaultValue)
                ) {
                  let e = this.$selcont.find(".zoom-select-option[value='" + this.opt.defaultValue + "']"),
                    t = this;
                  if (e.length)
                    setTimeout(function () {
                      !(function (e, t) {
                        e.hasClass("selected") ||
                          (e.addClass("selected").attr("aria-selected", !0),
                          (t.selectedId = e.attr("value")),
                          (t.selectedLabel = e.attr("data-label")),
                          t.opt.allowClearInput && t.selectedId && t.$selcont.addClass("show-clear-btn"),
                          t.opt.changeCallback(t.selectedId));
                        t.$selInput.val(e.attr("data-label"));
                      })(e, t);
                    }, 0);
                  else if (this.opt.inputMode) {
                    let e = t.opt.defaultValue;
                    setTimeout(function () {
                      !(function (e, t) {
                        (e = h(e)),
                          (t.selectedId = e),
                          (t.selectedLabel = e),
                          t.opt.allowClearInput && t.selectedId && t.$selcont.addClass("show-clear-btn");
                        t.opt.changeCallback(t.selectedId), t.$selInput.val(e);
                      })(e, t);
                    }, 0);
                  }
                }
                this.opt.lockState && this.changeLockState(!0);
              }
            }
            createMenu(e, t, o) {
              let a = (function (e, t, o) {
                let a = `\n        <div class="zoom-select-cont${
                  e.opt.styleType ? " style" + e.opt.styleType : ""
                }">\n            <div class="zoom-select-input-cont">\n                <input type="text" autocomplete="off" aria-label="${h(
                  e.opt.ariaLabel
                )}" role="combobox" aria-required="${e.opt.required}" aria-controls="zoom-select-listbox-${
                  e.instantIndex
                }" aria-owns="zoom-select-listbox-${e.instantIndex}" aria-haspopup="true" placeholder="${
                  e.opt.placeholder
                }" class="zoom-select-input">\n                ${
                  e.opt.allowClearInput ? '<a class="clear-input-btn" href="#" aria-label="clear input" role="button"></a>' : ""
                }<span class="down-arrow"></span>\n            </div>\n            <div class="zoom-select-dropdown">\n                <div class="zoom-scrollbar" style="max-height: ${
                  32 * o
                }px" tabindex="-1">\n                    <dl class="zoom-scrollbar-view" role="listbox" id="zoom-select-listbox-${
                  e.instantIndex
                }">\n                        ${g(
                  e,
                  t,
                  e.opt.groupRender
                )}\n                    </dl>\n                </div>\n            </div>\n        </div>\n    `;
                return a;
              })(this, t, o);
              n(e).html(a);
            }
            createMiniTextInputMenu(e) {
              let t = `\n            <input type="text" autocomplete="off" aria-required="${this.opt.required}" aria-label="${h(
                this.opt.ariaLabel
              )}" maxlength="${h(this.opt.textInputMaxlength)}" class="zoom-mini-text-input-menu">\n        `;
              n(e).html(t), (this.$selInput = n(e).find(".zoom-mini-text-input-menu"));
              let o = this;
              this.$selInput.on("change", function (e) {
                e.stopPropagation(), o.opt.changeCallback(o.getSelectedResult());
              }),
                this.opt.defaultValue && this.$selInput.val(this.opt.defaultValue);
            }
            getSelectedResult() {
              if (this.miniTextInputMode) {
                let e = this.$selInput.val() || "";
                return e && (e = h(e.trim())), e;
              }
              if (!this.opt.multiParamResults) return this.selectedId;
              let e,
                t = this.selectedId,
                o = this.opt.dataList;
              for (let a = 0; a < o.length; a++) {
                let i = o[a];
                if (i.id === t) {
                  e = i;
                  break;
                }
              }
              return { id: t, extData: e?.extData };
            }
            loseFocus() {
              this.miniTextInputMode || m(this);
            }
            changeLockState(e) {
              this.miniTextInputMode ||
                ((this.opt.lockState = !!e),
                e
                  ? (this.$selcont.addClass("is-disabled"), this.$selInput.prop("disabled", !0))
                  : (this.$selcont.removeClass("is-disabled"), this.$selInput.prop("disabled", !1)));
            }
            destroy() {
              this.miniTextInputMode
                ? (this.$selInput = null)
                : ((this.$selcont = null),
                  (this.$selInput = null),
                  (this.$dropdown = null),
                  this.intersectObserver && (this.intersectObserver.disconnect(), (this.intersectObserver = null)),
                  document.body.removeEventListener("click", this.clickOutsideHandler, !0));
            }
          }
        : null;
    },
    351: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => p });
      var a = o(266),
        i = o(559),
        n = o(467),
        l = o(577),
        r = o(918),
        s = o(915),
        u = o(812),
        c = o(755);
      let d = {
        baseUrl: `https://${s.runEnv[0]}${s.multiVersion[0]}${s.runEnv[1]}.${s.multiVersion[1]}/`,
        loginUrl: "mimo/login",
        logoutUrl: "mimo/logout",
        scheduleMeetingUrl: "mimo/schedule",
        schedulePMIMeetingUrl: "mimo/pmi",
        schedulePACMeetingUrl: "mimo/schedule_pac",
        editMeetingUrl: "mimo/editMeeting",
        deleteMeetingUrl: "mimo/deleteMeeting",
        validateTokenURL: "mimo/validtoken",
        saveSettingURL: "mimo/save_setting",
        validAlternativeHost: "mimo/valid_althost",
        updateTimeAndTimezoneUrl: "mimo/updateScheduleTimeAndTimezone",
        saveInviteeUrl: "mimo/save_invitee",
        logUrl: "mimo/log4zm",
        checkPwdUrl: "mimo/checkMeetingPassword",
        instantMeetingUrl: "mimo/instant",
        ssoCheckUrl: "mimo/ssocheck_v2",
        remoteCheckPwdCache: [],
        getOAuthURL: function () {
          return `https://${s.runEnv[0]}${s.multiVersion[0]}${s.runEnv[1]}.${s.multiVersion[1]}/mimo/google_signin`;
        },
        schedulePACMeeting: async function (e) {
          let t = (await l.Z.getUserBaseUrl()) + d.schedulePACMeetingUrl,
            o = (await l.Z.getValue("zoom_config_pacindex")) || "1";
          isNaN(parseInt(o, 10)) && (o = "1");
          let a = { selectedPAC: o, trackfields: e.trackfields };
          await l.Z.populateZak(a);
          let i = await r.Z.webRequest(t, {
            method: "POST",
            mode: "cors",
            timeout: 1e4,
            headers: await l.Z.getZoomHeader(),
            body: r.Z.jsonToUrlParam(a)
          });
          if (i.status) {
            if (i.result) {
              d.saveZoomZakRequestToken(i.result._zm_zak), l.Z.saveZoomDataModifiedDate(new Date());
              let e = await l.Z.getValue("zoom_config_joinurl");
              i.result.addJoinUrl = null == e || !!e;
            }
          } else d.callbackErrorData(i);
          return i;
        },
        encodeHtml: function (e) {
          return "string" != typeof e
            ? e
            : e.replace(/"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g, function (e) {
                var t = e.charCodeAt(0),
                  o = ["&#"];
                return (t = 32 == t ? 160 : t), o.push(t), o.push(";"), o.join("");
              });
        },
        getAllowAlternativeHostEditPollResult: async function (e) {
          if ("boolean" === u.type(e)) return e;
          let t = await l.Z.getAllowAlternativeHostEditPoll(),
            o = !1;
          if (t.support) {
            let e = !!(await l.Z.getValue("zoom_config_pmi"));
            if (((o = e ? t.pmi.defaultVal : t.normal.defaultVal), o)) {
              let t = await l.Z.getE2ee(),
                a = !1;
              t && t.support && ((a = e ? t.pmiEnable : t.normalEnable), a && (o = !1));
            }
          }
          return o;
        },
        getFocusModeResult: async function (e) {
          if ("boolean" === u.type(e)) return e;
          let t = await l.Z.getFocusMode();
          if (t.support) {
            if (!!(await l.Z.getValue("zoom_config_pmi"))) return t.pmi.defaultVal;
          }
          return !1;
        },
        getAutoRecResult: async function (e) {
          if ("string" === u.type(e)) return e;
          let t = await l.Z.getDataFromFeatures("autoRec");
          return (t.show && t.childParams.autoRecordingSubSelected.value) || "";
        },
        getQaResult: async function (e) {
          if ("boolean" === u.type(e)) return e;
          let t = await l.Z.getDataFromFeatures("qa");
          return !!t.show && t.value;
        },
        getInterpretationResult: async function (e, t) {
          if ("boolean" === u.type(e)) return { enableInterpretation: e, interpretation: t };
          if (!!!(await l.Z.getValue("zoom_config_pmi"))) {
            let e = await l.Z.getDataFromFeatures("interpretation");
            if (e.show) return { enableInterpretation: e.value, interpretation: void 0 };
          }
          return { enableInterpretation: !1, interpretation: void 0 };
        },
        getPmcResult: async function (e) {
          if ("boolean" === u.type(e)) return e;
          let t = await d.getPmcData();
          return !!t?.show && t.value;
        },
        getEnableAutoAddExternalUserResult: async function (e) {
          if ("boolean" === u.type(e)) return e;
          let t = await d.getPmcData(),
            o = t?.childParams?.allowAutoAddInvitedExternalUsers;
          return !!o?.show && o?.value;
        },
        getPmcData: async function () {
          let e = (await l.Z.getValue("zoom_config_schedule_for")) || "";
          if (e) {
            let t = (await l.Z.getZoomData())?.assistants;
            if (Array.isArray(t) && t.length)
              for (let o = 0; o < t.length; o++) {
                let a = t[o];
                if (a?.id == e) return a.pmc;
              }
            return {};
          }
          return await l.Z.getDataFromFeatures("pmc");
        },
        getDefaultTopic: function (e, t) {
          let o = "Zoom Meeting";
          if (e) {
            let a = e.assistants;
            t && a && a.length > 0
              ? u.each(a, function (e, a) {
                  a.id == t && (o = d.resolveUserName(a.name) + " Zoom Meeting");
                })
              : (o = d.resolveUserName(e.displayName) + " Zoom Meeting");
          }
          return o;
        },
        getAllowDenyResult: async function (e) {
          let t = JSON.stringify([]),
            o = JSON.stringify([]),
            a = !1;
          if (e && "boolean" === u.type(e.defaultVal) && Array.isArray(e.selRegion))
            return (
              "0" === e.selType ? (t = JSON.stringify(e.selRegion || [])) : (o = JSON.stringify(e.selRegion || [])),
              (a = e.defaultVal),
              { enable_join_meeting_region: a, white_region_list: t, black_region_list: o }
            );
          let i = await l.Z.getAllowDeny();
          if (i.support) {
            !!(await l.Z.getValue("zoom_config_pmi"))
              ? ((a = i.pmi.defaultVal),
                "0" === i.pmi.type ? (t = JSON.stringify(i.pmi.selectRegion || [])) : (o = JSON.stringify(i.pmi.selectRegion || [])))
              : ((a = i.normal.defaultVal),
                "0" === i.normal.type
                  ? (t = JSON.stringify(i.normal.selectRegion || []))
                  : (o = JSON.stringify(i.normal.selectRegion || [])));
          }
          return { enable_join_meeting_region: a, white_region_list: t, black_region_list: o };
        },
        getWaitingRoom2Result: async function (e, t, o) {
          if ("object" === u.type(e)) return null === e.join_time && (e.join_time = -100), JSON.stringify(e);
          if ("string" === u.type(e)) return "";
          let a = await d.getWaitingRoom2();
          if (!a.show) return "";
          let i = a.value,
            n = a.childParams.options.value;
          if ((await l.Z.getSecurity()).security3c1) {
            let e = "manu" === n,
              l = a.disabled,
              r = a.childParams.options.disabled;
            t || o || (i && e) || l || (r && !e) || (l || (i = !0), r || (n = "manu"));
          }
          let r,
            s = await d.getE2eeEnable();
          s && (i = !0),
            "auto" === n
              ? (r = a.childParams.auto.value)
              : "manu" === n && ((r = a.childParams.manu.value), null === r ? (r = -100) : s && (r = "-1"));
          let c = { enable: i, type: n, join_time: r };
          return JSON.stringify(c);
        },
        getE2eeEnable: async function (e) {
          "boolean" !== u.type(e) && (e = !!(await l.Z.getValue("zoom_config_pmi")));
          let t = await l.Z.getE2ee(),
            o = !1;
          return t && t.support && (o = e ? t.pmiEnable : t.normalEnable), o;
        },
        getWaitingRoom2: async function (e) {
          let t;
          return (
            "boolean" !== u.type(e) && (e = !!(await l.Z.getValue("zoom_config_pmi"))),
            (t = e ? (await l.Z.getPmiFeatures()).waitingRoom2 : (await l.Z.getMeetingFeatures()).waitingRoom2),
            t
          );
        },
        getJBHEnable: async function () {
          if (await l.Z.getWrOp()) {
            let e = await d.getWaitingRoom2();
            if (!e.value) return !0;
            let t = e.childParams.auto.value,
              o = e.childParams.manu.value,
              a = e.childParams.options.value;
            if ("auto" === a) {
              if ("-1" !== t) return !0;
            } else if ("manu" === a && "-1" !== o && null !== o) return !0;
            return !1;
          }
          return !!(await l.Z.getValue("zoom_config_jbh"));
        },
        getSecurityResult: async function (e) {
          if (e && "boolean" === u.type(e.pwEnable))
            return { pwEnable: e.pwEnable, wrEnable: e.wrEnable, authEnable: e.authEnable, updateAuthOptionItem: e.updateAuthOptionItem };
          let t = !!(await l.Z.getValue("zoom_config_pmi")),
            o = await d.getJBHEnable(),
            a = await l.Z.getSecurity(),
            i = await l.Z.getAuthentication();
          if (!a || !i) return { pwEnable: void 0, wrEnable: void 0, authEnable: void 0, updateAuthOptionItem: void 0 };
          let n = !1,
            r = !1,
            s = !1,
            c = !1,
            p = !1,
            m = (i.locked, null);
          if (t) {
            let e = a.pmi.passcode;
            (n = e.default_jbh ? o : e.default_all),
              (r = e.locked),
              (s = a.pmi.waitingroom.defaultVal),
              (c = a.pmi.waitingroom.locked),
              (p = i.pmi.defaultVal),
              p &&
                ((m = i.pmi.pmiUpdate),
                ("object" === u.type(m) && Object.keys(m).length) || (m = await d.getUpdateAuthOptionItemFromData()));
          } else
            (n = a.normal.passcode.defaultVal),
              (r = a.normal.passcode.locked),
              (s = a.normal.waitingroom.defaultVal),
              (c = a.normal.waitingroom.locked),
              (p = i.normal.defaultVal),
              p && (m = await d.getUpdateAuthOptionItemFromData());
          return a.security3c1 && (n || p || s || c || (s = !0)), { pwEnable: n, wrEnable: s, authEnable: p, updateAuthOptionItem: m };
        },
        checkNeedPasswordForPopup: async function () {
          let e = !!(await l.Z.getValue("zoom_config_pmi")),
            t = await d.getJBHEnable(),
            o = await l.Z.getSecurity();
          if (!o) return { inputManualPwd: !1, voidable: !1 };
          let a = !1,
            i = !1,
            n = !1,
            r = !1,
            s = !1;
          if (e) {
            let e = o.pmi.passcode;
            (a = e.default_jbh ? t : e.default_all),
              (i = e.locked),
              (n = o.pmi.waitingroom.defaultVal),
              (r = o.pmi.waitingroom.locked),
              (s = a);
          } else s = !1;
          return { inputManualPwd: s, voidable: !1 };
        },
        editNeedPasswordState: async function (e) {
          e = !!e;
          let t = !!(await l.Z.getValue("zoom_config_pmi")),
            o = !1;
          try {
            o = "true" === (await l.Z.getZoomData()).scheduleDefaultLockOption.password;
          } catch (e) {}
          t
            ? o
              ? l.Z.saveValue("zoom_config_jbh_pwd", e)
              : l.Z.saveValue("zoom_config_all_pmi_pwd", e)
            : l.Z.saveValue("zoom_config_one_time_pwd", e);
        },
        _scheduleMeeting: async function (e) {
          let t = !!(await l.Z.getValue("zoom_config_mute_upon_entry")),
            o = !!(await l.Z.getValue("zoom_config_public_cal")),
            i = (await l.Z.getValue("zoom_config_video_host")) || "off",
            r = (await l.Z.getValue("zoom_config_video_participants")) || "off",
            c = (await l.Z.getValue("zoom_config_audio")) || "both",
            p = (await l.Z.getValue("zoom_config_schedule_for")) || "",
            m = !!(await l.Z.getValue("zoom_config_pmi")),
            g = await l.Z.getZoomData(),
            f = await l.Z.getE2ee(),
            h = !1;
          f && f.support && (h = m ? f.pmiEnable : f.normalEnable);
          let { pwEnable: _, wrEnable: y, authEnable: w, updateAuthOptionItem: b } = await d.getSecurityResult(e.securityRes),
            v = "",
            Z = !1,
            V = {};
          await l.Z.populateZak(V);
          let D = (await l.Z.getUserBaseUrl()) + d.scheduleMeetingUrl;
          if (_) {
            let t = e.securityRes ? e.securityRes.pwd : "";
            if (t && "" != t) v = t;
            else if (!m) {
              let e = g && g.iSFreeAccount ? 2 : 1,
                t = await d.getMeetingPwdSettingsMap();
              t.enhanceDetectionRule ? (Z = !0) : (v = a.Z.generateMeetingPassword(t, e));
            }
          }
          if (await l.Z.getWrOp()) {
            let t = await d.getWaitingRoom2Result(e.waiting_room_new, _, w);
            t && (V.waiting_room_new = t);
          } else {
            let e = !!(await l.Z.getValue("zoom_config_jbh")),
              t = "",
              o = g.enableJBHPriorStartMeeting;
            !m && e && o && (t = await d.getJbhTimeMinutes()), (V.security_wr = y), (V.option_jbh = e), (V.jbhTimeMinutes = t);
          }
          if (((V.enableAuthentication = !!w), w && b && b.id))
            try {
              "object" === u.type(b) &&
                ((V.authOptionsJson = JSON.stringify({
                  selectAuthName: b.name,
                  option_enforce_signed_in: parseInt(b.type),
                  selectAuthId: b.id,
                  authDomain: b.domain
                })),
                (V.option_enforce_signed_in = parseInt(b.type)));
            } catch (e) {
              console.log(e),
                n.Z.sendLog({
                  msgType: 4,
                  msg: { msg: "append authOptionsJson failed", function: "_scheduleMeeting", errorStack: e.stack }
                });
            }
          let S = await d.getAllowDenyResult(e.allowDenyRes);
          (V.enable_join_meeting_region = S.enable_join_meeting_region),
            (V.white_region_list = S.white_region_list),
            (V.black_region_list = S.black_region_list),
            e.templateRes &&
              e.templateRes.templateId &&
              "number" === u.type(e.templateRes.templateType) &&
              e.templateRes.templateType > -1 &&
              ((V.templateId = e.templateRes.templateId), (V.templateType = e.templateRes.templateType));
          let k = e.topic;
          if ((k || (k = d.getDefaultTopic(g, p)), g)) {
            let e = g.dcOptions,
              t = await d.getDcEnableOptions(e);
            t && (V.dcEnableOptions = t);
          }
          let z = await l.Z.getValue("zoom_config_althost");
          z && "string" === u.type(z) && (V.mtg_alternative_host = z.replace(/,/g, ";")),
            (V.enable_alternative_host_edit_poll = await d.getAllowAlternativeHostEditPollResult(e.enable_alternative_host_edit_poll)),
            (V.focusModeValue = await d.getFocusModeResult(e.focusModeValue)),
            (V.option_record_id = await d.getAutoRecResult(e.record_id)),
            (V.qa = await d.getQaResult(e.qa));
          let P = !!(await l.Z.getValue("zoom_option_require_reg"));
          m ||
            h ||
            P ||
            ((V.enablePMC = await d.getPmcResult(e.pmc)),
            (V.enableAutoAddExternalUser = await d.getEnableAutoAddExternalUserResult(e.enableAutoAddExternalUser)));
          let { enableInterpretation: T, interpretation: A } = await d.getInterpretationResult(e.enableInterpretation, e.interpretation);
          return (
            (V.enableInterpretation = T),
            (V.interpretation = A),
            Object.assign(V, {
              ext_version: s.extVersion,
              topic: k,
              scheduleTime: e.scheduleTime,
              mute_upon_entry: t,
              public_cal: o,
              security_pwd: v,
              option_video_host: i,
              option_video_participants: r,
              option_schedule_for: p,
              option_audio_type: c,
              trackfields: e.trackfields,
              timezone: e.timezone || "",
              use_pmi: m,
              enable_unmute_all: !!(await l.Z.getValue("enable_unmute_all")),
              backendGeneratePwd: Z,
              option_e2ee: h
            }),
            await d._ajaxScheduleMtg(D, V)
          );
        },
        _ajaxScheduleMtg: async function (e, t) {
          let o = await r.Z.webRequest(e, {
            method: "POST",
            mode: "cors",
            timeout: 15e3,
            headers: await l.Z.getZoomHeader(),
            body: r.Z.jsonToUrlParam(t)
          });
          if (
            (n.Z.sendLog({
              msgType: 5,
              msg: { msg: "Send a schedule meeting request, method name: _ajaxScheduleMtg", parameters: t },
              operaType: 3
            }),
            o.status)
          ) {
            if (o.result) {
              d.saveZoomZakRequestToken(o.result._zm_zak), l.Z.saveZoomDataModifiedDate(new Date());
              let e = await l.Z.getValue("zoom_config_joinurl");
              o.result.addJoinUrl = null == e || !!e;
            }
          } else
            201 == o.errorCode
              ? (l.Z.clearAllData(), d.callbackErrorData(o))
              : (3068 == o.errorCode && d.editNeedPasswordState(!0), d.callbackErrorData(o));
          return o;
        },
        callbackErrorData: function (e) {
          const t = new Error();
          throw ((t.data = e), t);
        },
        editMeeting: async function (e) {
          let t = {
            ext_version: s.extVersion,
            meetingNumber: e.number,
            duration: e.duration,
            scheduleTime: e.startTime,
            timezone: e.timezone,
            isRepeat: e.isRepeat,
            zoomrooms: e.zoomrooms,
            topic: e.topic,
            isPrivateEvent: e.isPrivateEvent,
            zm_eid: e.zm_eid || "",
            event_baseid: e.event_baseid || ""
          };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.editMeetingUrl,
            a = await r.Z.webRequest(o, { method: "POST", mode: "cors", headers: await l.Z.getZoomHeader(), body: r.Z.jsonToUrlParam(t) });
          return (
            n.Z.sendLog({ msgType: 5, msg: { msg: "Send a editMeeting request, method name: editMeeting", parameters: t }, operaType: 3 }),
            a.status || 201 == a.errorCode || d.callbackErrorData(a),
            a
          );
        },
        createMeetingMp: async function (e) {
          let t = { ext_version: s.extVersion, meeting_number: e.number, calendarId: e.calendarId, event_baseid: e.event_baseid || "" };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + "mimo/crmapping",
            a = await r.Z.webRequest(o, { method: "POST", mode: "cors", headers: await l.Z.getZoomHeader(), body: r.Z.jsonToUrlParam(t) });
          return (
            n.Z.sendLog({
              msgType: 5,
              msg: { msg: "Send a crmapping request, method name: createMeetingMp", parameters: t },
              operaType: 3
            }),
            a.status || d.callbackErrorData(a),
            a
          );
        },
        deleteMeeting: async function (e) {
          let t = { ext_version: s.extVersion, number: e.number || "", zm_eid: e.zm_eid || "", event_baseid: e.event_baseid || "" };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.deleteMeetingUrl,
            a = await r.Z.webRequest(o, {
              method: "POST",
              mode: "cors",
              timeout: 1e4,
              headers: await l.Z.getZoomHeader(),
              body: r.Z.jsonToUrlParam(t)
            });
          return (
            n.Z.sendLog({
              msgType: 5,
              msg: { msg: "Send a delete meeting request, method name: deleteMeeting", parameters: t },
              operaType: 3
            }),
            a.status ||
              3001 == a.errorCode ||
              (9001 == a.errorCode ? d.callbackErrorData({ showMsg: a.errorMessage }) : d.callbackErrorData(a)),
            a
          );
        },
        updateMeetingTimeAndTimezone: async function (e) {
          let t = {
            ext_version: s.extVersion,
            calendarId: e.calendarId,
            event_baseid: e.event_baseid,
            scheduleTime: e.startTime,
            duration: e.duration,
            timezoneid: e.timezone,
            topic: e.topic,
            zoomrooms: e.zoomrooms
          };
          e.number && (t.mn = e.number), await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.updateTimeAndTimezoneUrl,
            a = await r.Z.webRequest(o, { method: "POST", mode: "cors", headers: await l.Z.getZoomHeader(), body: r.Z.jsonToUrlParam(t) });
          return a.status || d.callbackErrorData(a), a;
        },
        saveInvitee: async function (e) {
          let t = {
            ext_version: s.extVersion,
            meetingNumber: e.meetingNumber || "",
            event_baseid: e.event_baseid || "",
            attendeeEmails: e.invitee
          };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.saveInviteeUrl,
            a = await r.Z.webRequest(o, { method: "POST", mode: "cors", headers: await l.Z.getZoomHeader(), body: r.Z.jsonToUrlParam(t) });
          return a.status || d.callbackErrorData(a), a;
        },
        getZoomSetting: async function () {
          var e = {};
          let t = (await l.Z.getZoomData()) || {};
          (e.zoom_config_schedule_for = await l.Z.getValue("zoom_config_schedule_for")),
            (e.zoom_assistants = t.assistants),
            (e.adminTemplates = t.adminTemplates),
            (e.zoom_config_video_host = (await l.Z.getValue("zoom_config_video_host")) || "off"),
            (e.zoom_config_video_participants = (await l.Z.getValue("zoom_config_video_participants")) || "off"),
            (e.zoom_config_audio = (await l.Z.getValue("zoom_config_audio")) || "both"),
            (e.zoom_config_hasOther = !!t.option_has3rd),
            (e.zoom_config_noBoth = !!t.option_noboth),
            (e.zoom_config_jbh = !!(await l.Z.getValue("zoom_config_jbh"))),
            (e.jbhTimeMinutes = await d.getJbhTimeMinutes()),
            (e.enableJBHPriorStartMeeting = !!t.enableJBHPriorStartMeeting),
            (e.JBHPriorStartMeetingList = await d.getJBHPriorStartMeetingList()),
            (e.zoom_config_mute_upon_entry = !!(await l.Z.getValue("zoom_config_mute_upon_entry"))),
            (e.zoom_config_hasPubCal = !!t.option_haspublic_cal),
            (e.zoom_config_public_cal = !!(await l.Z.getValue("zoom_config_public_cal"))),
            (e.zoom_config_pmi = !!(await l.Z.getValue("zoom_config_pmi"))),
            (e.zoom_config_pmiNum = t.PMI),
            (e.security = await l.Z.getSecurity()),
            (e.showSecurityTip = await d.getShowSecurityTip()),
            (e.authentication = await l.Z.getAuthentication()),
            (e.zoom_support_althost = !(void 0 === t.alt_hosts)),
            (e.zoom_config_althost = await l.Z.getValue("zoom_config_althost")),
            (e.zoom_config_fixed_popup = !!(await l.Z.getValue("zoom_config_fixed_popup"))),
            (e.watermark = await l.Z.getWatermark()),
            (e.audioWatermark = await l.Z.getAudioWatermark());
          let o = await l.Z.getValue("zoom_config_joinurl");
          (e.zoom_config_joinurl = null == o || !!o),
            (e.zoom_trackfields = t.trackfields),
            (e.lockOpts = t.lockedoptions),
            (e.host_email = t.email || ""),
            (e.option_enable_reg = Boolean(t.option_enable_reg)),
            (e.zoom_option_require_reg = Boolean(await l.Z.getValue("zoom_option_require_reg")));
          var a = !1;
          return (
            t.scheduleDefaultLockOption && "true" === t.scheduleDefaultLockOption.usePMISchedule_locked && (a = !0),
            (e.schedulePmiLock = a),
            (e.dcOptions = t.dcOptions),
            (e.enableDC = await l.Z.getEnableDC()),
            (e.showDisablePmiMsg = await l.Z.getShowDisablePmiMsg()),
            (e.show_unmute_all = t.show_unmute_all),
            (e.enable_unmute_all = !!(await l.Z.getValue("enable_unmute_all"))),
            (e.e2ee = await l.Z.getE2ee()),
            (e.embedPasscode = !!t.embedPasscode),
            (e.allowDeny = await l.Z.getAllowDeny()),
            (e.blockDomains = t.blockDomains),
            (e.mySettingUrl = await d.getMySettingUrl()),
            (e.allowAlternativeHostEditPoll = await l.Z.getAllowAlternativeHostEditPoll()),
            (e.maxAttendee = t.maxAttendee),
            (e.focusMode = await l.Z.getFocusMode()),
            (e.meetingFeatures = await l.Z.getMeetingFeatures()),
            (e.pmiFeatures = await l.Z.getPmiFeatures()),
            e
          );
        },
        updateZoomSetting: async function (e) {
          if (
            (l.Z.saveValue("zoom_config_schedule_for", e.zoom_config_schedule_for),
            l.Z.saveValue("zoom_config_video_host", e.zoom_config_video_host),
            l.Z.saveValue("zoom_config_video_participants", e.zoom_config_video_participants),
            l.Z.saveValue("zoom_config_audio", e.zoom_config_audio),
            l.Z.saveValue("zoom_config_mute_upon_entry", e.mute_upon_entry),
            l.Z.saveValue("zoom_config_public_cal", e.public_cal),
            l.Z.saveValue("zoom_config_pmi", e.zoom_config_pmi),
            l.Z.updateWatermarkDefault(e.zoom_config_watermark),
            l.Z.updateAudioWatermarkDefault(e.zoom_config_audiomark),
            (e.zoom_config_pacindex = await l.Z.getValue("zoom_config_pacindex")),
            await l.Z.getWrOp())
          ) {
            let t = e.waiting_room_new;
            "object" === u.type(t) && (e.waiting_room_new = JSON.stringify(t));
          } else
            l.Z.saveValue("zoom_config_jbh", e.zoom_config_jbh),
              e.jbhTimeMinutes && (d.setJbhTimeMinutes(e.jbhTimeMinutes), delete e.jbhTimeMinutes);
          return (
            l.Z.saveValue("zoom_config_althost", e.zoom_config_alternativehost),
            l.Z.saveValue("zoom_config_joinurl", e.zoom_config_joinurl),
            l.Z.saveValue("zoom_option_require_reg", e.zoom_option_require_reg),
            (e.zoom_config_fixed_popup = await l.Z.getValue("zoom_config_fixed_popup")),
            (e.require_reg = e.zoom_option_require_reg),
            delete e.zoom_option_require_reg,
            void 0 !== e.enableDC && l.Z.setEnableDC(e.enableDC),
            (e.enableDC = JSON.stringify(await l.Z.getEnableDC())),
            e.showDisablePmiMsg && (l.Z.setShowDisablePmiMsg(e.showDisablePmiMsg), delete e.showDisablePmiMsg),
            e.showSecurityTip && (d.setShowSecurityTip(e.showSecurityTip), delete e.showSecurityTip),
            l.Z.saveValue("enable_unmute_all", e.enable_unmute_all),
            e.e2ee &&
              (l.Z.setE2ee(e.e2ee), (e.option_e2ee_normal = e.e2ee.normalEnable), (e.option_e2ee_pmi = e.e2ee.pmiEnable), delete e.e2ee),
            await d.saveZoomSetting(e)
          );
        },
        updateSettingForQucik: async function (e, t) {
          let o = d.getLocalStorageZoomOptions();
          if ((e.changepwd && (l.Z.saveValue("zoom_config_pmi_saved_pwd", e.password), (o.pmi_saved_pwd = e.password)), e.mandatorypwd)) {
            let e = !1;
            try {
              e = "true" === (await l.Z.getZoomData()).scheduleDefaultLockOption.password;
            } catch (e) {}
            e
              ? (l.Z.saveValue("zoom_config_jbh_pwd", !0), (o.option_password = !0))
              : (l.Z.saveValue("zoom_config_all_pmi_pwd", !0), (o.option_password4PMI = !0));
          }
          return await d.saveZoomSetting(o);
        },
        getLocalStorageZoomOptions: function () {
          let e = l.Z.getE2ee();
          return {
            zoom_config_schedule_for: l.Z.getValue("zoom_config_schedule_for"),
            zoom_config_pmi: !!l.Z.getValue("zoom_config_pmi"),
            zoom_config_jbh: !!l.Z.getValue("zoom_config_jbh"),
            public_cal: !!l.Z.getValue("zoom_config_public_cal"),
            mute_upon_entry: !!l.Z.getValue("zoom_config_mute_upon_entry"),
            waiting_room: !!l.Z.getValue("zoom_config_waiting_room"),
            zoom_config_video_host: l.Z.getValue("zoom_config_video_host") || "off",
            zoom_config_video_participants: l.Z.getValue("zoom_config_video_participants") || "off",
            zoom_config_audio: l.Z.getValue("zoom_config_audio") || "both",
            zoom_config_pacindex: l.Z.getValue("zoom_config_pacindex"),
            zoom_config_alternativehost: l.Z.getValue("zoom_config_althost"),
            zoom_config_fixed_popup: !!l.Z.getValue("zoom_config_fixed_popup"),
            zoom_config_joinurl: null == l.Z.getValue("zoom_config_joinurl") || !!l.Z.getValue("zoom_config_joinurl"),
            require_reg: !!l.Z.getValue("zoom_option_require_reg"),
            enableDC: JSON.stringify(l.Z.getEnableDC()),
            option_e2ee_normal: e.normalEnable,
            option_e2ee_pmi: e.pmiEnable
          };
        },
        validAlternateHost: async function (e) {
          let t = { alternativehost: e };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.validAlternativeHost,
            a = await r.Z.webRequest(o, {
              method: "POST",
              mode: "cors",
              timeout: 6e3,
              headers: await l.Z.getZoomHeader(),
              body: r.Z.jsonToUrlParam(t)
            });
          return 201 == a.errorCode && d.popupLogin(!0), a;
        },
        checkSyncFoVersionOrTime: async function () {
          let e = await l.Z.hasZoomRqToken(),
            t = await l.Z.getValue("extVersion");
          return e && t != s.extVersion ? await d.toSyncImmediate() : await d.toSync();
        },
        saveZoomSetting: async function (e) {
          e.zoom_config_alternativehost = (e.zoom_config_alternativehost || "").replace(/,/g, ";");
          var t = { ext_version: s.extVersion };
          await l.Z.populateZak(t), Object.assign(t, e);
          let o = (await l.Z.getUserBaseUrl()) + d.saveSettingURL,
            a = await r.Z.webRequest(o, {
              method: "POST",
              mode: "cors",
              timeout: 1e4,
              headers: await l.Z.getZoomHeader(),
              body: r.Z.jsonToUrlParam(t)
            }),
            i = a.result;
          return (
            a && a.status
              ? (d.saveZoomZakRequestToken(i._zm_zak), l.Z.saveZoomDataModifiedDate(new Date()), l.Z.saveValue("zoom_config_fte", !1))
              : 1113 == a.errorCode || 1114 == a.errorCode || 1115 == a.errorCode
              ? d.callbackErrorData(a)
              : alert(a.errorMessage),
            a
          );
        },
        _ssologin: async function (e) {
          var t = e + "/" + d.loginUrl;
          return e || (t = (await l.Z.getUserBaseUrl()) + d.loginUrl), await d._login(t);
        },
        _login: async function (e) {
          let t = { ext_version: s.extVersion, snstype: 1, accesstoken: "" },
            o = await r.Z.webRequest(e, {
              method: "POST",
              mode: "cors",
              timeout: 1e4,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "x-requested-browser": l.Z.getRequestedBrowser(),
                "X-Requested-From": "ZOOM-EXTENSION"
              },
              body: r.Z.jsonToUrlParam(t)
            });
          if (o.status) {
            let e = o.result;
            "object" !== u.type(e) &&
              (i.Z.recordZoomDataError(`${s.errors[1]} ${i.Z.convertToString(e)}`, "common.js--_login"), d.callbackErrorData()),
              d.saveSyncData(e);
          } else d.callbackErrorData(o.errorCode);
          return o;
        },
        logout: async function (e, t) {
          var o = await l.Z.getZoomZakRequestToken(),
            a = {};
          await l.Z.populateZak(a),
            o
              ? c.ajax({
                  type: "POST",
                  timeout: 1e4,
                  url: (await l.Z.getUserBaseUrl()) + d.logoutUrl,
                  data: a,
                  headers: await l.Z.getZoomHeader(),
                  dataType: "json",
                  success: function (t) {
                    l.Z.clearAllData(), e();
                  },
                  error: function () {
                    l.Z.clearAllData(), e();
                  }
                })
              : (l.Z.clearAllData(), e());
        },
        resolveZoomUrl: function (e) {
          return e;
        },
        getMeetingWithVideoUrl: async function () {
          return d.resolveZoomUrl((await l.Z.getUserBaseUrl()) + "start/videomeeting");
        },
        getMeetingWithoutVideoUrl: async function () {
          return d.resolveZoomUrl((await l.Z.getUserBaseUrl()) + "start/webmeeting");
        },
        startInstantMeeting: async function (e) {
          let t = { ext_version: s.extVersion };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.instantMeetingUrl,
            a = await r.Z.webRequest(o, {
              method: "POST",
              mode: "cors",
              timeout: 5e3,
              headers: await l.Z.getZoomHeader(),
              body: r.Z.jsonToUrlParam(t)
            });
          return (
            a.status &&
              (e
                ? chrome.tabs.create({ url: await d.getMeetingWithVideoUrl() })
                : chrome.tabs.create({ url: await d.getMeetingWithoutVideoUrl() })),
            a
          );
        },
        getMyMeetingsUrl: async function () {
          return (await l.Z.getUserBaseUrl()) + "profile";
        },
        getMySettingUrl: async function () {
          return (await l.Z.getUserBaseUrl()) + "profile/setting";
        },
        getAdminTemplateDetailUrl: async function (e, t) {
          let o = "";
          return e && (o += (await l.Z.getUserBaseUrl()) + `meeting#/template/list?templateId=${e}`), t && (o += `&userId=${t}`), o;
        },
        getMyPMISettingUrl: async function () {
          let e = await l.Z.getZoomData();
          if (e && e.PMI) {
            let t = "";
            try {
              t = e.PMI.replace(/\D/g, "");
            } catch (e) {}
            if (t) return (await l.Z.getUserBaseUrl()) + "meeting/" + t + "/edit";
          }
          return "";
        },
        getGoogleCalendarUrl: function (e) {
          function t(e) {
            return e.toISOString().replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d+Z/gi, "$1$2$3T$4$5$6Z");
          }
          Date.prototype.addHours = function (e) {
            return this.setHours(this.getHours() + e), this;
          };
          var o,
            a,
            i = new Date();
          return (
            i.setHours(i.getHours() + 1),
            i.setMinutes(0),
            (o = t(i)),
            i.setHours(i.getHours() + 1),
            (a = "https://calendar.google.com/calendar/event?action=TEMPLATE"),
            (a += "&dates="),
            (a += o + "/" + t(i)),
            (a += "&trp=true"),
            e && (a += "&zoompmi=true"),
            l.Z.saveValue("readyToSchedule", !0),
            a
          );
        },
        getReadyToSchedule: async function () {
          let e = !!(await l.Z.getValue("readyToSchedule"));
          return e && l.Z.saveValue("readyToSchedule", !1), e;
        },
        resolveUserName: function (e) {
          return "s" === (e = u.trim(e)).charAt(e.length - 1) ? e + "'" : e + "'s";
        },
        saveSyncData: async function (e) {
          l.Z.saveValue("extVersion", s.extVersion),
            i.Z.checkData(e),
            await l.Z.resetZoomOptions(e),
            await l.Z.saveValue("zoom_data", JSON.stringify(e)),
            l.Z.saveZoomDataModifiedDate(new Date()),
            d.saveZoomZakRequestToken(e._zm_zak),
            l.Z.saveValue("zoom_zak_exp", e._zm_zak_exp || ""),
            l.Z.saveValue("zoom_locale", e._zm_locale),
            l.Z.saveValue("zoom_sso_exp", e._zm_sso_exp || "2592000"),
            d.saveSyncTime(new Date());
        },
        getType0ItemInAuth: function (e) {
          for (var t = 0, o = e.length; t < o; t++) {
            let o = e[t];
            if (o && "0" == o.type) return o;
          }
          return "";
        },
        recordDataError: function (e, t) {
          n.Z.sendLog({ msgType: 1, msg: { tag: "data error", msg: e, source: t } });
        },
        getPmiSavedPwd: async function () {
          try {
            let e = await l.Z.getSecurity();
            return d.pwdDataValidity(e.pmi.passcode.value);
          } catch (e) {}
          return "";
        },
        pwdDataValidity: function (e) {
          return (e = u.trim(e).slice(0, 10));
        },
        setShowSecurityTip: function (e) {
          (e = e || ""), l.Z.saveValue("showSecurityTip2", JSON.stringify(e));
        },
        getShowSecurityTip: async function () {
          let e = "";
          try {
            e = JSON.parse(await l.Z.getValue("showSecurityTip2"));
          } catch (e) {}
          return "object" !== u.type(e) && ((e = { type1: !0, type2: !0, type3: !0 }), d.setShowSecurityTip(e)), e;
        },
        getMeetingPwdSettingsMap: async function () {
          let e = "";
          try {
            (e = JSON.parse(await l.Z.getValue("meetingPwdSettingsMap"))), "object" !== u.type(e) && (e = "");
          } catch (e) {}
          return e;
        },
        getUpdateAuthOptionItemFromData: async function () {
          let e = (await l.Z.getAuthentication()).optionLists;
          if (Array.isArray(e) && e.length)
            for (var t = 0, o = e.length; t < o; t++) {
              let o = e[t];
              if (o.defaultVal) return o;
            }
          return null;
        },
        saveSyncTime: function (e) {
          l.Z.saveValue("zoom_sync_date", e.getTime());
        },
        ssoCheck: async function (e, t, o, a) {
          d._ssoCheck((await l.Z.getUserBaseUrl()) + d.ssoCheckUrl, e, t, o, a);
        },
        _ssoCheck: function (e, t, o, a, i) {
          c.ajax({
            type: "POST",
            timeout: 6e3,
            url: e,
            data: t,
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "x-requested-browser": l.Z.getRequestedBrowser(),
              "X-Requested-From": "ZOOM-EXTENSION"
            },
            dataType: "json",
            success: function (e) {
              e.status && e.result && e.result.ssoVanityUrl ? o(e.result.ssoVanityUrl) : a(e);
            },
            complete: function () {
              i();
            }
          });
        },
        toSync: async function () {
          if (await l.Z.hasZoomRqToken()) {
            let e = new Date(),
              t = null,
              o = await l.Z.getValue("zoom_sync_date");
            if (((t = o ? new Date(parseInt(o, 10)) : new Date(e.getTime() - 1728e5)), e - t >= 18e5)) return await d.toSyncImmediate();
          }
          return null;
        },
        toSyncImmediate: async function () {
          let e = { ext_version: s.extVersion, snstype: 1, accesstoken: "" };
          await l.Z.populateZak(e);
          let t = await l.Z.getUserBaseUrl();
          if (0 === s.multiVersionIndex && t.indexOf(`zoomgov${s.runEnv[1]}.com`) > 0) return void l.Z.clearAllData();
          let o = t + d.loginUrl,
            a = await r.Z.webRequest(o, {
              method: "POST",
              mode: "cors",
              timeout: 5e3,
              headers: await l.Z.getZoomHeader(),
              body: r.Z.jsonToUrlParam(e)
            });
          if (a.status) {
            let e = a.result;
            "object" !== u.type(e) &&
              (i.Z.recordZoomDataError(`${s.errors[1]} ${i.Z.convertToString(e)}`, "common.js--toSyncImmediate"), d.callbackErrorData()),
              d.saveSyncData(e);
          }
          return a;
        },
        remoteCheckPassword: async function (e) {
          let t = new Date().getTime();
          for (var o = d.remoteCheckPwdCache.length - 1; o > -1; o--) {
            let a = d.remoteCheckPwdCache[o];
            if (t - a.time < 3e5) {
              if (a.password == e) return a.data;
            } else d.remoteCheckPwdCache.splice(o, 1);
          }
          return await d.remoteCheckPasswordCall(e);
        },
        remoteCheckPasswordCall: async function (e) {
          let t = { ext_version: s.extVersion, password: e };
          await l.Z.populateZak(t);
          let o = (await l.Z.getUserBaseUrl()) + d.checkPwdUrl,
            a = await r.Z.webRequest(o, {
              method: "POST",
              mode: "cors",
              timeout: 5e3,
              headers: await l.Z.getZoomHeader(),
              body: r.Z.jsonToUrlParam(t)
            });
          return (
            a.status || (-1 == a.errorCode ? (a.status = !0) : 3403 != a.errorCode && (a.errorMessage = s.errors[19])),
            d.remoteCheckPwdCache.push({ password: e, data: a, time: new Date().getTime() }) > 10 && d.remoteCheckPwdCache.shift(),
            a
          );
        },
        getEidMeetingMap: async function () {
          let e = JSON.parse(await l.Z.getValue("zoom_eid_meeting_map"));
          return (
            "object" !== u.type(e) &&
              "null" !== u.type(e) &&
              d.recordDataError(`${s.errors[14]} ${i.Z.convertToString(e)}`, "common.js -- getEidMeetingMap"),
            e
          );
        },
        setEidMeetingMap: function (e) {
          "object" === u.type(e)
            ? l.Z.saveValue("zoom_eid_meeting_map", JSON.stringify(e))
            : d.recordDataError(`${s.errors[13]} ${i.Z.convertToString(e)}`, "common.js -- setEidMeetingMap");
        },
        converEidMeetingMap: function (e, t, o) {
          let a = { synctime: new Date().getTime() };
          u.each(e, function (e, t) {
            t.calendarId && t.meetingNumber && (a[t.calendarId] = t.meetingNumber);
          }),
            t && o && (a[t] = o),
            d.setEidMeetingMap(a);
        },
        saveZoomZakRequestToken: function (e) {
          l.Z.saveValue("zoom_zak", e || "");
        },
        getJBHPriorStartMeetingList: async function () {
          try {
            let e = (await l.Z.getZoomData()).scheduleDefaultLockOption,
              t = JSON.parse(e.JBHPriorStartMeetingList);
            if ("object" === u.type(t)) return t;
          } catch (e) {}
          return { 5: "5 minutes", 10: "10 minutes", 15: "15 minutes", 0: "Anytime" };
        },
        getJbhTimeMinutes: async function () {
          try {
            let e = await l.Z.getZoomData(),
              t = await d.getJBHPriorStartMeetingList();
            if (!e.lockedoptions || !e.lockedoptions.jbh_locked) {
              let e = await l.Z.getValue("jbhTimeMinutes");
              if (t[e]) return e;
            }
            let o = e.scheduleDefaultLockOption.JBHPriorStartMeeting;
            if (t[o]) return o;
          } catch (e) {}
          return "";
        },
        setJbhTimeMinutes: async function (e) {
          (await d.getJBHPriorStartMeetingList())[e]
            ? l.Z.saveValue("jbhTimeMinutes", e)
            : console.log("Illegal value of jbhTimeMinutes to be saved.");
        },
        empty: function () {},
        popupLogin: async function (e = !1) {
          let t = parseInt(await l.Z.getValue("zoom_login_req_option_tabid")),
            o = parseInt(await l.Z.getValue("zoom_popup_tabpage_tabid"));
          isNaN(t) || isNaN(o)
            ? d.createPopupPage(e)
            : chrome.tabs.update(o, { active: !0 }, function () {
                chrome.runtime.lastError && d.createPopupPage(e);
              });
        },
        createPopupPage: function (e) {
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
            let o = t[0].id;
            chrome.tabs.create({ url: chrome.runtime.getURL("popup.html"), active: !0 }, function (t) {
              l.Z.saveValue("zoom_login_req_option_tabid", o),
                l.Z.saveValue("zoom_popup_tabpage_tabid", t.id),
                l.Z.saveValue("zoom_login_req_need_reload", e);
            });
          });
        },
        getLoginUrl: function (e) {
          var t,
            o = /https:\/\/([^\/]+)/gi.exec(e);
          return o && o.length && (t = o[0]), t;
        },
        getDcEnableOptions: async function (e) {
          let t = await l.Z.getEnableDC();
          if (!!(await l.Z.getValue("zoom_config_pmi")) || !e || !e.support || e.locked || !e.options || !e.options.length || !t) return "";
          let o = [];
          return (
            u.each(e.options, function (e, a) {
              t[a.abbr] && o.push(a.abbr);
            }),
            o.length ? JSON.stringify(o) : ""
          );
        }
      };
      addEventListener(
        "error",
        (e) => {
          n.Z.sendLog({
            msgType: 1,
            msg: { msg: e.message, filename: e.filename, lineno: e.lineno, colno: e.colno, stack: e.error ? e.error.stack : "" }
          });
        },
        !0
      );
      const p = 998 != o.j ? d : null;
    }
  }
]);
