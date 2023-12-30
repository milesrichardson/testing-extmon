(() => {
  "use strict";
  var e,
    t = {
      133: () => {},
      183: (e, t, a) => {
        var o = a(351),
          i = a(467),
          r = a(577),
          n = a(915),
          s = a(812);
        let l;
        async function p(e) {
          let t = parseInt(await r.Z.getValue("zoom_login_req_option_tabid"));
          if (!isNaN(t))
            if (1 === e) {
              r.Z.removeValue("zoom_login_req_option_tabid");
              let a = parseInt(await r.Z.getValue("zoom_popup_tabpage_tabid"));
              r.Z.removeValue("zoom_popup_tabpage_tabid"),
                chrome.tabs.remove(a, function () {
                  chrome.runtime.lastError;
                });
              let o = await r.Z.getValue("zoom_login_req_need_reload");
              chrome.tabs.update(t, { active: !0 }, function (a) {
                if (!chrome.runtime.lastError)
                  if (o) chrome.tabs.reload(t);
                  else {
                    let a = { type: "authenticationSigninResult", state: e };
                    chrome.tabs.sendMessage(t, a);
                  }
              }),
                r.Z.removeValue("zoom_login_req_need_reload");
            } else {
              let e = parseInt(await r.Z.getValue("zoom_popup_tabpage_tabid"));
              chrome.tabs.update(e, { active: !0 }, function (e) {
                chrome.runtime.lastError || alert(n.errors[6]);
              });
            }
        }
        var c;
        function u(e) {
          e &&
            chrome.tabs.query({}, function (t) {
              t.length > 1
                ? chrome.tabs.remove(e, function () {
                    chrome.runtime.lastError;
                  })
                : chrome.tabs.update(e, { url: "about:blank" }, function () {
                    chrome.runtime.lastError;
                  });
            });
        }
        function d(e, t, a) {
          l && l.postMessage({ error: !0, errorMsg: e, syncState: t, noReviveSchedule: !!a });
        }
        async function g(e, t) {
          if (e && "function" === s.type(t)) {
            if (3105 == e.errorCode || 9002 == e.errorCode || 9011 == e.errorCode) {
              let e = { syncState: 1, errorMessage: n.tips[14] };
              t(e);
              try {
                await o.Z.toSyncImmediate(), t({ syncState: 2, errorMessage: n.tips[15] });
              } catch (e) {
                t({ syncState: 3, errorMessage: n.tips[16] });
              }
              return e;
            }
            if (3113 == e.errorCode) {
              alert(e.errorMessage);
              let a = { syncState: 1, errorMessage: n.tips[14] };
              t(a);
              try {
                await o.Z.toSyncImmediate(), t({ syncState: 2, errorMessage: n.tips[15], noReviveSchedule: !0 });
              } catch (e) {
                t({ syncState: 3, errorMessage: n.tips[16] });
              }
              return a;
            }
            return t(e), e;
          }
        }
        chrome.runtime.onMessage.addListener(
          ((c = async function (e, t) {
            let a,
              i,
              l,
              c = await r.Z.getZoomData(),
              f = !1;
            c &&
              (c.assistants && (a = c.assistants),
              c.forcelogin && (i = c.forcelogin),
              c.trackfields && (l = c.trackfields),
              c.scheduleDefaultLockOption && (f = "true" === c.scheduleDefaultLockOption.usePMISchedule_locked));
            let m,
              h = !1,
              y = !1;
            if (
              (c && c.audiopac && (m = c.audiopac),
              m && m.option_pac_enable && (h = !0),
              c && c.option_freeuser && (y = !!c.option_freeuser && (await r.Z.hasZoomRqToken())),
              "getZoomToken" == e.type)
            ) {
              let e = await r.Z.getZoomZakRequestToken();
              if (e) {
                let { inputManualPwd: t, voidable: n } = await o.Z.checkNeedPasswordForPopup(),
                  s = !!(await r.Z.getValue("zoom_config_fixed_popup"));
                if (!s) {
                  let { pwEnable: e, wrEnable: t, authEnable: a, updateAuthOptionItem: i } = await o.Z.getSecurityResult(),
                    n = await r.Z.getSecurity(),
                    l = !1;
                  if (await r.Z.getWrOp()) {
                    let t = await o.Z.getWaitingRoom2Result(void 0, e, a);
                    try {
                      (t = JSON.parse(t)), t.enable && "manu" === t.type && (l = !0);
                    } catch (e) {}
                  } else l = t;
                  !n.security3c1 || e || l || a || (s = !0);
                }
                return {
                  baseurl: await r.Z.getUserBaseUrl(),
                  token: e,
                  fte: await r.Z.getValue("zoom_config_fte"),
                  showSetting: s,
                  inputManualPwd: t,
                  pwdVoidable: n,
                  showDomainInput: i && i.domain_login,
                  hasAssistants: a && a.length > 0,
                  requireTracking: l && l.length > 0,
                  schedulePmiLock: f,
                  trackfields: l,
                  zoom_config_pmi_saved_pwd: await o.Z.getPmiSavedPwd(),
                  zoom_config_pmi: Boolean(await r.Z.getValue("zoom_config_pmi")),
                  meetingPwdSettingsMap: await o.Z.getMeetingPwdSettingsMap(),
                  iSFreeAccount: c && c.iSFreeAccount,
                  embedPasscode: c && c.embedPasscode
                };
              }
              return o.Z.popupLogin(), {};
            }
            if ("getMeetingTrashUrl" == e.type) {
              try {
                o.Z.checkSyncFoVersionOrTime();
              } catch (e) {}
              if (c) {
                let e = c.meetingTrashUrl,
                  t = "";
                return (
                  e && ("string" === s.type(e) && "/" === e[0] && (e = e.slice(1)), (t = (await r.Z.getUserBaseUrl()) + e)),
                  { meetingTrashUrl: t, email: c.email || "" }
                );
              }
              return "";
            }
            if ("saveValue" == e.type) return e.key && (await r.Z.saveValue(e.key, e.value)), {};
            if ("getReadyToSchedule" == e.type) return { readyToSchedule: await o.Z.getReadyToSchedule() };
            if ("loadAppConfig" == e.type) return { type: "postAppConfig", info: n };
            if ("passZoomExtLoginSession" == e.type) {
              let a = t?.tab?.id;
              try {
                await o.Z._ssologin(e.info.url), u(a), r.Z.saveZoomSSOValidDate(new Date()), r.Z.saveValue("zoom_auth_type", 2), p(1);
              } catch (e) {
                r.Z.clearAllData(), u(a), p(2);
              }
              return {};
            }
            if ("supportPAC" == e.type) return { hasPac: h };
            if ("quickschedule" == e.type) {
              if (!(await r.Z.hasZoomRqToken())) return o.Z.popupLogin(), {};
              {
                var Z = !!(await r.Z.getValue("zoom_config_pmi")),
                  { pwEnable: w, wrEnable: v, authEnable: _, updateAuthOptionItem: b } = await o.Z.getSecurityResult();
                let t = await r.Z.getSecurity(),
                  a = !1;
                if (await r.Z.getWrOp()) {
                  let e = await o.Z.getWaitingRoom2Result(void 0, w, _);
                  try {
                    (e = JSON.parse(e)), e.enable && "manu" === e.type && (a = !0);
                  } catch (e) {}
                } else a = v;
                if (t.security3c1 && !w && !a && !_) return { resetpwd: !0 };
                if (w && Z) {
                  let i = await o.Z.getPmiSavedPwd();
                  if (!i && !a && t.security3c1) return { resetpwd: !0 };
                  e.info.securityRes = { pwd: i };
                }
                try {
                  return await o.Z._scheduleMeeting(e.info);
                } catch (e) {
                  let t = e.data;
                  if ((t || (t = { errorMessage: e.statusText }), 201 == t.errorCode)) return o.Z.popupLogin(), {};
                  {
                    let e = await g(t, function (e) {
                      e.syncState && d(e.errorMessage, e.syncState, e.noReviveSchedule);
                    });
                    return e || {};
                  }
                }
              }
            } else {
              if ("validateAltHost" == e.type) {
                if (await r.Z.hasZoomRqToken())
                  try {
                    return await o.Z.validAlternateHost(e.althosts);
                  } catch (e) {
                    return e;
                  }
                else o.Z.popupLogin();
                return {};
              }
              if ("checkUserType" == e.type) return { freeUser: y };
              if ("checkShowFree40MinsTip" == e.type) return { showFree40MinsTip: c?.showFree40MinsTip, isPaidAccount: c?.isPaidAccount };
              if ("isNoMeetingLicenseUser" == e.type) return { noLicenseUser: c && c.no_meeting_license_user };
              if ("getWhiteboardData" == e.type)
                return (await r.Z.hasZoomRqToken()) ? { hasLogin: !0, whiteboard: c?.whiteboard } : { hasLogin: !1 };
              if ("getWhiteboardUrl" == e.type)
                return (await r.Z.hasZoomRqToken())
                  ? { whiteboardUrl: await o.Z.getWhiteboardUrl(), baseurl: await r.Z.getUserBaseUrl() }
                  : (o.Z.popupLogin(), {});
              if ("checkPreloadWb" == e.type)
                return (await r.Z.hasZoomRqToken()) ? { hasLogin: !0, support: c?.whiteboard?.support } : { hasLogin: !1 };
              if ("getAccountEmail" == e.type) return (await r.Z.hasZoomRqToken()) ? { email: c?.email || "" } : { email: "" };
              if ("openUrl" == e.type) {
                let t = e.url;
                return t && chrome.tabs.create({ url: t }), {};
              }
            }
          }),
          function (e, t, a) {
            return Promise.resolve(c(e, t)).then(a), !0;
          })
        ),
          chrome.runtime.onConnect.addListener(function (e) {
            console.assert("Zoom" == e.name), (l = e);
            async function t(t) {
              try {
                let a = { type: "schedule" };
                0;
                let i = await o.Z._scheduleMeeting(t);
                r.Z.saveValue("zoom_config_fte", !1), (a.meeting = i.result), e.postMessage(a);
              } catch (e) {
                let t = e.data;
                t || (t = { errorMessage: e.statusText }),
                  201 == t.errorCode
                    ? o.Z.popupLogin()
                    : g(t, function (e) {
                        d(e.errorMessage || n.errors[5], e.syncState, e.noReviveSchedule);
                      });
              }
            }
            e.onMessage.addListener(async function (a) {
              if ("schedule" == a.type) (await r.Z.hasZoomRqToken()) ? t(a.info) : o.Z.popupLogin();
              else if ("schedulepac" == a.type) {
                if (await r.Z.hasZoomRqToken())
                  try {
                    let t = await o.Z.schedulePACMeeting(a.info);
                    e.postMessage({ type: "schedule", meeting: t.result });
                  } catch (e) {
                    d(201 == e?.data?.errorCode ? "login###again" : n.errors[5]);
                  }
                else o.Z.popupLogin();
              } else if ("update" == a.type) {
                (await r.Z.hasZoomRqToken()) &&
                  (async function (t) {
                    try {
                      await o.Z.editMeeting(t);
                    } catch (t) {
                      if (t.data) {
                        let a = await r.Z.getZoomData();
                        (a && a.hideError4SpecialUser) || e.postMessage({ type: "editFailed", errorMsg: t.data.errorMessage });
                      }
                    }
                  })(a.info);
              } else if ("delete" == a.type) {
                if (await r.Z.hasZoomRqToken())
                  try {
                    let t = await o.Z.deleteMeeting(a.info);
                    e.postMessage({ type: "delSuccess", meeting: t.result });
                  } catch (e) {}
              } else if ("icon_delete" == a.type) {
                if (await r.Z.hasZoomRqToken())
                  try {
                    let t = await o.Z.deleteMeeting(a.info);
                    e.postMessage({ type: "iconDeleteSuccess", meeting: t.result });
                  } catch (t) {
                    e.postMessage({ type: "iconDeleteFailed", showMsg: t?.data?.showMsg });
                  }
                else o.Z.popupLogin();
              } else if ("deleteonly" == a.type) {
                if (await r.Z.hasZoomRqToken())
                  try {
                    await o.Z.deleteMeeting(a.info);
                  } catch (e) {}
              } else if ("loadZoomOptions" == a.type) e.postMessage({ type: "updateZmOptions", zmOpt: await o.Z.getZoomSetting() });
              else if ("saveOptionsAndSchedule" == a.type)
                if (await r.Z.hasZoomRqToken()) {
                  let {
                    securityRes: e,
                    allowDenyRes: i,
                    templateRes: l,
                    enable_alternative_host_edit_poll: p,
                    focusModeValue: c,
                    record_id: u,
                    qa: g,
                    pmc: f,
                    enableAutoAddExternalUser: m,
                    enableInterpretation: h,
                    interpretation: y,
                    topic: Z,
                    scheduleTime: w,
                    meetingSummary: v,
                    meetingQuery: _,
                    ...b
                  } = a.info;
                  0;
                  let M = (function (e) {
                    if ("object" === s.type(e))
                      try {
                        return JSON.parse(JSON.stringify(e));
                      } catch (e) {}
                    return "";
                  })(a.info.waiting_room_new);
                  try {
                    201 == (await o.Z.updateZoomSetting(b)).errorCode
                      ? o.Z.popupLogin(!0)
                      : (r.Z.updateSecurity(e),
                        r.Z.updateAllowDeny(i),
                        r.Z.updateAllowAlternativeHostEditPoll(p),
                        r.Z.updateFocusMode(c),
                        await r.Z.updateAutoRec(u),
                        await r.Z.updateWaitingRoom2(M),
                        await r.Z.updateQa(g),
                        await r.Z.updateGenericSimpleData(v, "meetingSummary"),
                        await r.Z.updateGenericSimpleData(_, "meetingQuery"),
                        (a.info.waiting_room_new = M),
                        t(a.info));
                  } catch (e) {
                    d(n.errors[5]);
                  }
                } else o.Z.popupLogin();
              else if ("saveOptionsAndQuickSchedule" == a.type)
                if (await r.Z.hasZoomRqToken())
                  if (a.info.changepwd) {
                    let e = await r.Z.getSecurity(),
                      o = a.info.securityRes.pwd;
                    o && "" != o && ((e.pmi.passcode.value = o), r.Z.setSecurity(e)), t(a.info);
                  } else
                    try {
                      await o.Z.updateSettingForQucik(a.info), t(a.info);
                    } catch (e) {}
                else o.Z.popupLogin();
              else if ("sendLog" == a.type) (await r.Z.hasZoomRqToken()) && i.Z.sendLog(a.info, function () {});
              else if ("sync" == a.type)
                try {
                  o.Z.toSync();
                } catch (e) {}
              else if ("saveNewCalendarEvent" == a.type)
                try {
                  await o.Z.createMeetingMp(a.info);
                } catch (e) {}
              else if ("removeCalendarEvent" == a.type) {
                i.Z.sendLog({ msgType: 3, msg: { info: "zm-observer trigger to delete.", baseid: a.info.event_baseid }, operaType: 1 });
                try {
                  let t = await o.Z.deleteMeeting(a.info);
                  e.postMessage({ type: "delSuccess", meeting: t.result });
                } catch (e) {}
              } else if ("updateTimeAndTimezone" == a.type)
                try {
                  await o.Z.updateMeetingTimeAndTimezone(a.info);
                } catch (t) {
                  3161 == t?.data?.errorCode && e.postMessage({ type: "updateTimeAndTimezoneFailed", errorMsg: t.data.errorMessage });
                }
              else if ("saveInvitee" == a.type)
                try {
                  await o.Z.saveInvitee(a.info);
                } catch (e) {}
              else if ("getCalendarEvent" == a.type);
              else if ("signWithGoogleEvent" == a.type);
              else if ("workemailSigninEvent" == a.type);
              else if ("ssoSigninEvent" == a.type);
              else if ("saveStorageData" == a.type) {
                let e = a.key,
                  t = a.val;
                r.Z.saveValue(e, t);
              } else if ("loadAppConfig" == a.type) e.postMessage({ type: "postAppConfig", info: n });
              else if ("callPopupLogin" == a.type) o.Z.popupLogin();
              else if ("remoteCheckPwd" == a.type) {
                if (a.info.pwd)
                  try {
                    let t = await o.Z.remoteCheckPassword(a.info.pwd);
                    201 == t.errorCode
                      ? o.Z.popupLogin(!0)
                      : e.postMessage({
                          type: "remoteCheckPwdResult",
                          exception: !1,
                          info: { res: t.status, msg: t.errorMessage, errortype: 1, channel: a.info.channel }
                        });
                  } catch (t) {
                    e.postMessage({ type: "remoteCheckPwdResult", exception: !0, info: { channel: a.info.channel } });
                  }
              } else if ("viewTemplateDetail" == a.type) {
                let e = a.info.templateId;
                if (e) {
                  let t = await o.Z.getAdminTemplateDetailUrl(e);
                  chrome.tabs.create({ url: t });
                }
              } else if ("getWhiteboardToken" == a.type)
                if (await r.Z.hasZoomRqToken())
                  try {
                    let t = await o.Z.getWhiteboardToken();
                    if (t.status) {
                      let a = 0,
                        o = t?.result;
                      o?.expire_time && o?.create_time && (a = 1e3 * (o?.expire_time - o?.create_time)),
                        e.postMessage({
                          type: "getWhiteboardTokenResult",
                          exception: !1,
                          info: { res: t.status, msg: t.errorMessage, access_token: o?.access_token, token_exp: a }
                        });
                    }
                  } catch (t) {
                    e.postMessage({ type: "getWhiteboardTokenResult", exception: !0, info: { msg: t?.data?.errorMessage || t } });
                  }
                else e.postMessage({ type: "getWhiteboardTokenResult", exception: !0, info: {} }), o.Z.popupLogin(!0);
              else if ("getWhiteboardInfo" == a.type)
                if (await r.Z.hasZoomRqToken())
                  try {
                    let t = await o.Z.getWhiteboardInfo(a.token, a.docId);
                    if (!t?.docId) throw error;
                    e.postMessage({ type: "getWhiteboardInfoResult", exception: !1, info: { data: t } });
                  } catch (t) {
                    e.postMessage({ type: "getWhiteboardInfoResult", exception: !0, info: { data: { docId: a.docId }, msg: t } });
                  }
                else e.postMessage({ type: "getWhiteboardInfoResult", exception: !0, info: { data: { docId: a.docId }, msg: "" } });
              else if ("executeEditWB" == a.type) {
                (await r.Z.hasZoomRqToken()) && (await o.Z.executeEditWB(a.info));
              } else if ("executeDeleteWB" == a.type) {
                (await r.Z.hasZoomRqToken()) && (await o.Z.executeDeleteWB(a.info));
              }
            });
          }),
          chrome.runtime.onMessageExternal.addListener(function (e, t, a) {
            return e && e.message && "version" == e.message && a({ version: 1 }), !0;
          });
      }
    },
    a = {};
  function o(e) {
    var i = a[e];
    if (void 0 !== i) return i.exports;
    var r = (a[e] = { exports: {} });
    return t[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, a, i, r) => {
      if (!a) {
        var n = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [a, i, r] = e[c], s = !0, l = 0; l < a.length; l++)
            (!1 & r || n >= r) && Object.keys(o.O).every((e) => o.O[e](a[l])) ? a.splice(l--, 1) : ((s = !1), r < n && (n = r));
          if (s) {
            e.splice(c--, 1);
            var p = i();
            void 0 !== p && (t = p);
          }
        }
        return t;
      }
      r = r || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
      e[c] = [a, i, r];
    }),
    (o.d = (e, t) => {
      for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.j = 352),
    (() => {
      var e = { 352: 0, 374: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, a) => {
          var i,
            r,
            [n, s, l] = a,
            p = 0;
          if (n.some((t) => 0 !== e[t])) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (l) var c = l(o);
          }
          for (t && t(a); p < n.length; p++) (r = n[p]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(c);
        },
        a = (self.webpackChunkextension = self.webpackChunkextension || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var i = o.O(void 0, [374, 647, 493], () => o(183));
  i = o.O(i);
})();
