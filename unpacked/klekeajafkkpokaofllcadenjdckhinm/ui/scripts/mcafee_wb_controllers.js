/*!
 * MCAFEE RESTRICTED CONFIDENTIAL
 *             Copyright (c) 2022 McAfee, LLC
 *
 *             The source code contained or described herein and all documents related
 *             to the source code ("Material") are owned by McAfee or its
 *             suppliers or licensors. Title to the Material remains with McAfee
 *             or its suppliers and licensors. The Material contains trade
 *             secrets and proprietary and confidential information of McAfee or its
 *             suppliers and licensors. The Material is protected by worldwide copyright
 *             and trade secret laws and treaty provisions. No part of the Material may
 *             be used, copied, reproduced, modified, published, uploaded, posted,
 *             transmitted, distributed, or disclosed in any way without McAfee's prior
 *             express written permission.
 *
 *             No license under any patent, copyright, trade secret or other intellectual
 *             property right is granted to or conferred upon you by disclosure or
 *             delivery of the Materials, either expressly, by implication, inducement,
 *             estoppel or otherwise. Any license under such intellectual property rights
 *             must be expressed and approved by McAfee in writing.
 *
 */ !(function (e) {
  var t = {};
  function s(a) {
    if (t[a]) return t[a].exports;
    var i = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
  }
  (s.m = e),
    (s.c = t),
    (s.d = function (e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if ((s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var i in e)
          s.d(
            a,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = ""),
    s((s.s = 84));
})({
  0: function (e, t, s) {
    "use strict";
    const a = chrome;
    t.a = a;
  },
  14: function (e, t, s) {
    "use strict";
    t.a = function () {
      (this.elements = {}),
        (this.elements.name = "WebBoostScreenShown"),
        (this.elements.interaction_type = "Main"),
        (this.elements.browser = "UNKNOWN"),
        (this.elements.browser_action_count = "default"),
        (this.elements._event_name = "WebBoost_Screen_Shown"),
        (this.name = function (e) {
          return (this.elements.name = e.toString()), this;
        }),
        (this.interaction_type = function (e) {
          return (this.elements.interaction_type = e.toString()), this;
        }),
        (this.browser = function (e) {
          return (this.elements.browser = e.toString()), this;
        }),
        (this.browser_action_count = function (e) {
          return (this.elements.browser_action_count = e.toString()), this;
        }),
        (this.serialize = function () {
          return JSON.stringify(this.elements);
        });
    };
  },
  56: function (e, t, s) {
    "use strict";
    s.r(t);
    var a = {
      TabDataList: new Map(),
      logger: null,
      useNativeLogger: !1,
      MEDIA_PATTERN: new RegExp("\\.(mp3|MP3|mpeg|MPEG|mp4|MP4|mp2t|MP2T|ogv|OGV|ogx|OGX|ogg|OGG|webm|WEBM)", "i"),
      EXTERNAL_EXTNS: new (class {
        constructor() {
          (this._extnMap = new Map()), this._extnMap.set("WebAdvisor", "fheoggkfdfchfphceeifdbepaooicaho");
        }
        isWhiteListed(e) {
          for (const t of this._extnMap.values()) if (t === e) return !0;
          return !1;
        }
        get(e) {
          return this._extnMap.get(e);
        }
      })(),
      wssClient: null
    };
    class i {
      static async getAutoPauseData(e) {
        const t = [
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "youtube.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "netflix.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "microsoft.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "webex.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "bluejeans.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "zoom.us", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "zoho.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "gotomeeting.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "clickmeeting.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "vonage.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "adobe.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "intermedia.net", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "ringcentral.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "evoice.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "u.cyberlink.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "digium.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "slack.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "skype.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "twitch.tv", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "sharepoint.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "mixer.com", VideosPaused: 0, UserModified: !1 },
            { BandWidthSaved: 0, IsWhiteListed: !0, Url: "pluralsight.com", VideosPaused: 0, UserModified: !1 }
          ],
          s = (await fetch("https://www.siteadvisor.com/webboost/defaultwhitelist.json", { method: "GET" })).json();
        if (4 === s.readyState && 200 === s.status)
          try {
            e(!1, null !== s.response ? s.response : t);
          } catch (s) {
            e(!0, t);
          }
        else e(!0, t);
      }
    }
    var o = s(0);
    class n {
      static getDomainName(e) {
        let t = e;
        /^(https?:|chrome:|about:)/.test(e) || (t = `https://${e}`);
        const s = new URL(t);
        return s.hostname.startsWith("www.") ? s.hostname.substr(4) : s.hostname;
      }
    }
    const d = {
      LastFetchedTime: "LastFetchedTime",
      AutoPausedUrls: "AutoPausedUrls",
      AutoPauseEnabled: "AutoPauseEnabled",
      ShowWelcomePopup: "ShowWelcomePopup",
      ClientId: "ClientId",
      WhitelistFetchInterval: 864e5
    };
    class l {
      static _initfromlocalstorage(e) {
        o.a.storage.local.get(d.AutoPausedUrls, (t) => {
          (this._autopausedata = void 0 === t.AutoPausedUrls ? [] : t.AutoPausedUrls),
            o.a.storage.local.get(d.AutoPauseEnabled, (t) => {
              (this._autopauseenabled = void 0 === t.AutoPauseEnabled || !0 === t.AutoPauseEnabled),
                o.a.storage.local.get(d.ShowWelcomePopup, (t) => {
                  (this._showWelcomePopup = t.ShowWelcomePopup), void 0 !== e && e();
                });
            });
        }),
          o.a.storage.local.get(d.ClientId, (e) => {
            this._clientId = e.ClientId;
          }),
          o.a.storage.local.get("InstalledTime", (e) => {
            if (void 0 === e.InstalledTime) {
              const e = Date.now();
              l.setInstalledTime(e), (this._installedTime = e);
            } else this._installedTime = e.InstalledTime;
          });
      }
      static _hasDomain(e, t) {
        for (let s = 0; s < t.length; ++s) if (void 0 !== t[s].Url && e === t[s].Url) return t[s];
        return null;
      }
      static _verifiedPauseData(e) {
        const t = { BandWidthSaved: 0, IsWhiteListed: !0, Url: "", VideosPaused: 0, UserModified: !1 };
        return (t.Url = e.Url), t;
      }
      static _mergeAutoPauseData(e) {
        if (void 0 !== e && void 0 !== e.length) {
          for (let t = this._autopausedata.length - 1; t >= 0; --t)
            if (!0 !== this._autopausedata[t].UserModified) {
              if (null === l._hasDomain(this._autopausedata[t].Url, e)) {
                const { bandWidthSaved: e, videosPaused: s } = this._autopausedata[t];
                e > 0 || s > 0 ? (this._autopausedata[t].IsWhiteListed = !1) : this._autopausedata.splice(t, 1);
              }
            }
          for (let t = 0; t < e.length; ++t)
            if (void 0 !== e[t].Url) {
              if (null === l._hasDomain(e[t].Url, this._autopausedata)) {
                const s = l._verifiedPauseData(e[t]);
                this._autopausedata.push(s);
              }
            }
          o.a.storage.local.set({ AutoPausedUrls: e });
        }
      }
      static _fetchData(e) {
        o.a.storage.local.set({ LastFetchedTime: Date.now() }),
          i.getAutoPauseData((t, s) => {
            (t && !e) ||
              (l._initfromlocalstorage(() => {
                l._mergeAutoPauseData(s), o.a.storage.local.set({ AutoPausedUrls: this._autopausedata });
              }),
              e &&
                (o.a.storage.local.set({ AutoPauseEnabled: !0 }),
                (this._autopauseenabled = !0),
                o.a.storage.local.set({ ShowWelcomePopup: !0 }),
                (this._showWelcomePopup = !0)));
          });
      }
      static _fetchPeriodically(e) {
        const t = "localStorageFetchPeriodically";
        chrome.alarms.create(t, { delayInMinutes: 0, periodInMinutes: e }),
          chrome.alarms.onAlarm.addListener((e) => {
            e.name === t && l._fetchData(!1);
          });
      }
      static init() {
        o.a.storage.local.get(d.LastFetchedTime, (e) => {
          const t = Date.now();
          if (void 0 === e.LastFetchedTime || e.LastFetchedTime + d.WhitelistFetchInterval < t)
            l._fetchData(void 0 === e.LastFetchedTime), l._fetchPeriodically(d.WhitelistFetchInterval);
          else {
            l._initfromlocalstorage();
            const s = d.WhitelistFetchInterval - (t - e.LastFetchedTime);
            setTimeout(() => {
              l._fetchData(!1), l._fetchPeriodically(d.WhitelistFetchInterval);
            }, s);
          }
        });
      }
      static setClientId(e) {
        (this._clientId = e), o.a.storage.local.set({ ClientId: e });
      }
      static getClientId() {
        return this._clientId;
      }
      static setInstalledTime(e) {
        (this._installedTime = e), o.a.storage.local.set({ InstalledTime: e });
      }
      static getInstalledTime() {
        return this._installedTime;
      }
      static getShowWelcomePopup() {
        return this._showWelcomePopup;
      }
      static setShowWelcomePopup() {
        (this._showWelcomePopup = !1), o.a.storage.local.set({ ShowWelcomePopup: !1 });
      }
      static setAutoPauseEnabled(e) {
        (this._autopauseenabled = e), o.a.storage.local.set({ AutoPauseEnabled: this._autopauseenabled });
      }
      static getAutoPauseEnabled() {
        return this._autopauseenabled;
      }
      static getAllAutoPauseData() {
        return this._autopausedata;
      }
      static getAutoPauseData(e) {
        const t = n.getDomainName(e);
        if (!t) return null;
        for (let e = 0; e < this._autopausedata.length; ++e) {
          if (t.endsWith(this._autopausedata[e].Url)) return this._autopausedata[e];
          if (this._autopausedata[e].Url.endsWith(t))
            return (this._autopausedata[e].Url = t), o.a.storage.local.set({ AutoPausedUrls: this._autopausedata }), this._autopausedata[e];
        }
        return null;
      }
      static setAutoPauseData(e, t, s, a) {
        const i = n.getDomainName(e);
        if (null === i || void 0 === i) return;
        const d = l.getAutoPauseData(e);
        if (null === d) {
          const e = { BandWidthSaved: s, IsWhiteListed: void 0 !== a && a, Url: i, VideosPaused: t, UserModified: !1 };
          this._autopausedata.push(e);
        } else (d.BandWidthSaved += s), (d.VideosPaused += t), void 0 !== a && ((d.IsWhiteListed = a), (d.UserModified = !0));
        o.a.storage.local.set({ AutoPausedUrls: this._autopausedata });
      }
      static getTotalVideosPaused() {
        let e = 0;
        for (let t = 0; t < this._autopausedata.length; ++t) e += this._autopausedata[t].VideosPaused;
        return e;
      }
      static getTotalBandwidthSaved() {
        let e = 0;
        for (let t = 0; t < this._autopausedata.length; ++t) e += this._autopausedata[t].BandWidthSaved;
        return e;
      }
      static get(e, t) {
        o.a.storage.local.get(e, (s) => {
          t(s[e]);
        });
      }
    }
    class u {
      constructor() {
        (this._blockedUrls = []),
          (this._lastClickTime = 0),
          (this._lastClickCoordinates = { x: 0, y: 0 }),
          (this._videosPaused = 0),
          (this._m3u8MasterFileList = []),
          (this._liveVideoNotified = !1),
          (this._whitelistedFrameIds = []),
          (this._hlsUserClickedPlay = []),
          (this._responses = new Map()),
          (this._responseCacheVideos = new Set()),
          (this._claimData = new Map());
      }
      addResponse(e, t, s) {
        this._responses.set(e, { initiator: t, responseHeaders: s });
      }
      getResponse(e) {
        return this._responses.get(e);
      }
      deleteResponse(e) {
        this._responses.delete(e);
      }
      incrementVideosPaused() {
        this._videosPaused += 1;
      }
      decreaseVideosPaused() {
        this._videosPaused -= 1;
      }
      getTotalVideosPaused() {
        return this._videosPaused;
      }
      addBlockedUrl(e) {
        this._blockedUrls.push(e);
      }
      containsBlockedUrl(e) {
        return void 0 !== this._blockedUrls.find((t) => t._blockedUrl === e);
      }
      addWhitelistedFrameId(e) {
        this._whitelistedFrameIds.push(e);
      }
      containsWhitelistedFrameId(e) {
        return void 0 !== this._whitelistedFrameIds.find((t) => t === e);
      }
      setUserLastClickDetails(e, t) {
        (this._lastClickTime = e), (this._lastClickCoordinates = t);
      }
      getUserLastClickDetails() {
        return { lastClickTime: this._lastClickTime, lastClickCoordinates: this._lastClickCoordinates };
      }
      removeBlockedUrl(e) {
        for (let t = 0; t < this._blockedUrls.length; ++t) if (this._blockedUrls[t] === e) return this._blockedUrls.splice(t, 1), !0;
        return !1;
      }
      addVideoForResponseCaching(e) {
        this._responseCacheVideos.add(e);
      }
      hasVideoForResponseCaching(e) {
        return this._responseCacheVideos.has(e);
      }
      addClaimData(e, t) {
        0 !== t && this._claimData.set(e, t);
      }
      getClaimData(e) {
        const t = this._claimData.get(e);
        return this._claimData.delete(e), t > 0 ? t : 0;
      }
    }
    const r = { LogMsg: 6, AggregateData: 11, Telemetry: 14 };
    class c {
      static isInArray(e, t) {
        for (let s = 0; s < e.length; ++s) if (e[s] === t) return !0;
        return !1;
      }
      static resetTabData(e) {
        a.TabDataList.set(e, new u()), this.updateBadge(e);
      }
      static updateBadge(e) {
        let t = "";
        const s = a.TabDataList.get(e);
        s._videosPaused > 0 && (t = s._videosPaused.toString()), o.a.action.setBadgeText({ text: t, tabId: e });
      }
      static getDomainName(e) {
        return n.getDomainName(e);
      }
      static setAutoPauseData(e, t, s, i) {
        l.setAutoPauseData(e, t, s, i);
        const n = c.getDomainName(e);
        if ("" === n || void 0 === n || null === n) return;
        const d = [{ UniqueIdentifier: "WebBoost.Video.Pause" }, { "Event.Value": t }, { "Event.Label": n }, { Metric1: s }],
          u = { extension_id: o.a.runtime.id, payload: d };
        a.waClient.postMessage({ id: 0, request_type: r.AggregateData, payload: u });
      }
      static isWhitelisted(e) {
        a.logger.log(`Checking whether url ${e} is whitelisted`);
        const t = l.getAutoPauseData(e);
        return null !== t && t.IsWhiteListed;
      }
    }
    var h = function () {
      (this.elements = {}),
        (this.elements.name = "WebBoostWhitelist"),
        (this.elements.interaction_type = "Add"),
        (this.elements.browser = "Unknown"),
        (this.elements.domain = "default"),
        (this.elements._event_name = "WebBoost_Whitelist"),
        (this.name = function (e) {
          return (this.elements.name = e.toString()), this;
        }),
        (this.interaction_type = function (e) {
          return (this.elements.interaction_type = e.toString()), this;
        }),
        (this.browser = function (e) {
          return (this.elements.browser = e.toString()), this;
        }),
        (this.domain = function (e) {
          return (this.elements.domain = e.toString()), this;
        }),
        (this.serialize = function () {
          return JSON.stringify(this.elements);
        });
    };
    angular.module("webboost-extension").controller("autoPauseController", [
      "$scope",
      "$stateParams",
      "$timeout",
      (e, t, s) => {
        const a = function (e) {
          return o.a.i18n.getMessage(e);
        };
        (e.pageContent = {
          titleInitial: a("autoPause_Initial_Title"),
          subTitleInitial: a("autoPause_Initial_SubTitle"),
          initialNoListTextFirst: a("autoPause_Initial_Nolist_FirstLine"),
          initialNoListTextSecond: a("autoPause_Initial_Nolist_SecondLine"),
          titleActive: a("autoPause_Active_Title"),
          subTitleActive: a("autoPause_Active_SubTitle"),
          titleDeactive: a("autoPause_Deactive_Title"),
          subTitleDeactive: a("autoPause_Deactive_SubTitle"),
          subTitleDeactiveLink: a("autoPause_Deactive_SubTitle_Link"),
          titleWhitelisted: a("autoPause_Whitelisted_Title"),
          buttonAllowAutoPlay: a("autoPause_Whitelist_Button_AllowAutoPlay"),
          buttonStopAutoPlay: a("autoPause_Whitelist_Button_StopAutoPlay"),
          tableTotal: a("autoPause_Table_Data_Total"),
          tableVideosStopped: a("autoPause_Table_Data_TotalVideosStopped"),
          tableSavedData: a("autoPause_Table_Data_TotalVideosSaved"),
          tableHeaderWebsite: a("autoPause_Table_Header_Website"),
          tableHeaderVideosStopped: a("autoPause_Table_Header_VideosStopped"),
          tableHeaderDataSaved: a("autoPause_Table_Header_DataSaved"),
          tableHoverAllowAutoPlay: a("autoPause_Whitelist_Button_AllowAutoPlay"),
          tableHoverStopAutoPlay: a("autoPause_Whitelist_Button_StopAutoPlay"),
          tableDataSavedSubMessage: a("autoPause_Table_Header_DataSaved_Message"),
          noInfo: a("autoPause_Unit_No_Info")
        }),
          (e.isListingVisible = !1),
          (e.isToggled = !1),
          (e.isThisDisable = !0),
          (e.loadingData = !0);
        const i = function (e, t) {
            if (!t) return;
            const s = c.getDomainName(e),
              a = new h().interaction_type("Add").browser("CH").domain(s).serialize();
            o.a.runtime.sendMessage({ action: "SendTelemetry", telemetry: a });
          },
          n = function (e, t) {
            o.a.runtime.sendMessage({ action: "UpdateWhitelist", whiteListedUrl: e, whiteListedStatus: t }, () => {});
          },
          d = function (t) {
            (e.totalVideosPaused = t.totalVideosPaused),
              (e.pausedInThisSession = t.pausedInThisSession ? t.pausedInThisSession : 0),
              (e.autoPausedDataList = t.autoPausedDataList),
              (e.totalBandwidthSaved = t.totalBandwidthSaved),
              (e.isCurrentWhiteListed = t.isHostWhiteListed),
              (e.showWelcomePopup = t.showWelcomePopup),
              (e.globalAutoPauseEnabled = t.globalAutoPauseEnabled),
              "" !== t.currentUrl &&
                void 0 !== t.currentUrl &&
                null !== t.currentUrl &&
                ((e.currentUrl = t.currentUrl), (e.isThisDisable = !1)),
              e.$$phase || e.$digest(),
              s(() => {
                e.loadingData = !1;
              }, 200);
          },
          l = function () {
            o.a.runtime.sendMessage({ action: "GetAllAutoPauseData" }, (e) => {
              d(e);
            });
          },
          u = function () {
            o.a.tabs.query({ active: !0, currentWindow: !0 }, (e) => {
              o.a.tabs.reload(e[0].id);
            });
          };
        (e.toggleListing = function () {
          (e.isListingVisible = !e.isListingVisible), (e.isToggled = !e.isToggled);
        }),
          (e.toggleWhitelist = function (t) {
            (e.isCurrentWhiteListed = !e.isCurrentWhiteListed), n(t, e.isCurrentWhiteListed), l(), i(t, e.isCurrentWhiteListed), u();
          }),
          (e.whitelistThis = function (t, s) {
            (t.IsWhiteListed = !t.IsWhiteListed),
              (e.isCurrentWhiteListed = t.IsWhiteListed),
              n(s, t.IsWhiteListed),
              i(s, t.IsWhiteListed),
              l(),
              e.currentUrl.includes(s) && u();
          }),
          (e.enableGlobalAutoPause = function () {
            (e.globalAutoPauseEnabled = !0),
              o.a.runtime.sendMessage({ action: "UpdateGlobalAutoPause", enabled: e.globalAutoPauseEnabled }, () => {});
          }),
          (e.propertyName = "BandWidthSaved"),
          (e.videosPausedAscending = !1),
          (e.dataSavedAscending = !0),
          (e.ascending = !0),
          (e.sortBy = function (t) {
            if (e.globalAutoPauseEnabled) {
              if (((e.propertyName = t), "VideosPaused" === t))
                return (e.videosPausedAscending = !e.videosPausedAscending), void (e.ascending = e.videosPausedAscending);
              (e.dataSavedAscending = !e.dataSavedAscending), (e.ascending = e.dataSavedAscending);
            }
          }),
          null !== t.myParam && (d(t.myParam), e.showWelcomePopup && o.a.runtime.sendMessage({ action: "TurnOffWelcomePopup" }, () => {}));
      }
    ]);
  },
  80: function (e, t, s) {
    "use strict";
    s.r(t);
    var a = s(14),
      i = s(0);
    angular.module("webboost-extension").controller("WindowController", [
      "$scope",
      "$transitions",
      (e, t) => {
        const s = function (e) {
          return i.a.i18n.getMessage(e);
        };
        (e.pageContent = {
          whitelistText: s("navigation_header_whitelist"),
          aboutText: s("navigation_header_about"),
          faqText: s("navigation_header_faq")
        }),
          (e.isMenuVisible = !1),
          (e.showMenu = function () {
            e.isMenuVisible = !e.isMenuVisible;
          }),
          (e.closePopup = function () {
            window.close();
          }),
          t.onStart({}, (t) => {
            !(function (e) {
              const t = { auto_pause_setting: "Settings", faq: "FAQ", about: "About" }[e];
              if (void 0 === t) return;
              const s = new a.a().interaction_type(t).browser("CH").serialize();
              i.a.runtime.sendMessage({ action: "SendTelemetry", telemetry: s });
            })(t.to().name),
              (e.isMenuVisible = !1);
          });
      }
    ]);
  },
  81: function (e, t, s) {
    "use strict";
    s.r(t);
    var a = s(0);
    angular.module("webboost-extension").controller("whiteListController", [
      "$scope",
      "$timeout",
      (e, t) => {
        const s = function (e) {
          return a.a.i18n.getMessage(e);
        };
        (e.pageContent = {
          toggleTitle: s("navigation_header_whitelist"),
          toggleText: s("whitelist_Toggle_Text"),
          removeSuccessMessage: s("whiteList_Remove_Success_Message"),
          listingTitle: s("whiteList_Url_Listing_title"),
          emptyListMessage: s("whiteList_Empty_List_Message")
        }),
          (e.showNotification = !1),
          (e.isListEmpty = !0);
        const i = function () {
          a.a.runtime.sendMessage({ action: "GetAllAutoPauseData" }, (t) => {
            !(function (t) {
              (e.autoPausedDataList = t.autoPausedDataList), (e.globalAutoPauseEnabled = t.globalAutoPauseEnabled);
              let s = 0;
              for (const t of e.autoPausedDataList)
                t.IsWhiteListed ? (e.isListEmpty = !1) : (s += 1) === e.autoPausedDataList.length && (e.isListEmpty = !0);
              e.$digest();
            })(t);
          });
        };
        (e.autoPlayToggle = function () {
          (e.globalAutoPauseEnabled = !e.globalAutoPauseEnabled),
            a.a.runtime.sendMessage({ action: "UpdateGlobalAutoPause", enabled: e.globalAutoPauseEnabled }, () => {});
        }),
          (e.removeFromWhitelist = function (s) {
            var o, n;
            a.a.runtime.sendMessage({ action: "UpdateWhitelist", whiteListedUrl: s, whiteListedStatus: !1 }, () => {}),
              (o = s),
              (n = !1),
              (e.showNotification = !0),
              t(() => {
                e.showNotification = !1;
              }, 5e3),
              n || (e.notifyMessage = o),
              i();
          }),
          (e.submitThis = function (e) {
            a.a.runtime.sendMessage({ action: "UpdateWhitelist", whiteListedUrl: e, whiteListedStatus: !0 }, () => {
              i();
            });
          }),
          i();
      }
    ]);
  },
  82: function (e, t, s) {
    "use strict";
    s.r(t);
    var a = s(0);
    angular.module("webboost-extension").controller("faqController", [
      "$scope",
      (e) => {
        const t = function (e) {
          return a.a.i18n.getMessage(e);
        };
        e.faqContent = { QA: [], faqText: t("navigation_header_faq") };
        for (let s = 1; s <= 4; s++) {
          const a = t(`faq_Question_${s}`),
            i = t(`faq_Answer_${s}`);
          e.faqContent.QA.push({ question: a, answer: i });
        }
        e.$$phase || e.$digest();
      }
    ]);
  },
  83: function (e, t, s) {
    "use strict";
    s.r(t);
    var a = s(0);
    angular.module("webboost-extension").controller("aboutController", [
      "$scope",
      (e) => {
        const t = function (e) {
          return a.a.i18n.getMessage(e);
        };
        e.aboutData = {
          pageTitle: t("navigation_header_about"),
          privacyTitle: t("about_Privacy_Title"),
          privacyLink: t("about_Privacy_Link"),
          licenseTitle: t("about_License_Title"),
          licenseLink: t("about_License_Link"),
          brandName: t("brand_Name"),
          extName: t("ext_Name"),
          copyRight: t("about_Brand_Copy_rights")
        };
      }
    ]);
  },
  84: function (e, t, s) {
    s(83), s(56), s(82), s(81), (e.exports = s(80));
  }
});
//# sourceMappingURL=../../../sourceMap/chrome/mcafee_wb_controllers.map
