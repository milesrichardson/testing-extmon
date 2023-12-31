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
  function s(i) {
    if (t[i]) return t[i].exports;
    var a = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = t),
    (s.d = function (e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((s.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var a in e)
          s.d(
            i,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
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
    s((s.s = 12));
})([
  function (e, t, s) {
    "use strict";
    const i = chrome;
    t.a = i;
  },
  function (e, t, s) {
    "use strict";
    const i = {
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
    t.a = i;
  },
  function (e, t, s) {
    "use strict";
    t.a = {
      Block: "Block",
      Clear: "Clear",
      SetUserLastClickDetails: "SetUserLastClickDetails",
      GetUserLastClickDetails: "GetUserLastClickDetails",
      GetVersionDetails: "GetVersionDetails",
      IsWhitelisted: "IsWhitelisted",
      GetAllAutoPauseData: "GetAllAutoPauseData",
      UpdateWhitelist: "UpdateWhitelist",
      LiveVideoFound: "LiveVideoFound",
      TurnOffWelcomePopup: "TurnOffWelcomePopup",
      UpdateGlobalAutoPause: "UpdateGlobalAutoPause",
      IsAutoPauseEnabled: "IsAutoPauseEnabled",
      HasResponseStarted: "HasResponseStarted",
      AddResponseCaching: "AddResponseCaching",
      SendTelemetry: "SendTelemetry",
      GetId: "GetId",
      LogMsg: "LogMsg",
      GetBackgroundGlobals: "GetBackgroundGlobals"
    };
  },
  function (e, t, s) {
    "use strict";
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
    var a = s(0),
      n = s(9);
    s.d(t, "a", function () {
      return r;
    });
    const o = {
      LastFetchedTime: "LastFetchedTime",
      AutoPausedUrls: "AutoPausedUrls",
      AutoPauseEnabled: "AutoPauseEnabled",
      ShowWelcomePopup: "ShowWelcomePopup",
      ClientId: "ClientId",
      WhitelistFetchInterval: 864e5
    };
    class r {
      static _initfromlocalstorage(e) {
        a.a.storage.local.get(o.AutoPausedUrls, (t) => {
          (this._autopausedata = void 0 === t.AutoPausedUrls ? [] : t.AutoPausedUrls),
            a.a.storage.local.get(o.AutoPauseEnabled, (t) => {
              (this._autopauseenabled = void 0 === t.AutoPauseEnabled || !0 === t.AutoPauseEnabled),
                a.a.storage.local.get(o.ShowWelcomePopup, (t) => {
                  (this._showWelcomePopup = t.ShowWelcomePopup), void 0 !== e && e();
                });
            });
        }),
          a.a.storage.local.get(o.ClientId, (e) => {
            this._clientId = e.ClientId;
          }),
          a.a.storage.local.get("InstalledTime", (e) => {
            if (void 0 === e.InstalledTime) {
              const e = Date.now();
              r.setInstalledTime(e), (this._installedTime = e);
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
              if (null === r._hasDomain(this._autopausedata[t].Url, e)) {
                const { bandWidthSaved: e, videosPaused: s } = this._autopausedata[t];
                e > 0 || s > 0 ? (this._autopausedata[t].IsWhiteListed = !1) : this._autopausedata.splice(t, 1);
              }
            }
          for (let t = 0; t < e.length; ++t)
            if (void 0 !== e[t].Url) {
              if (null === r._hasDomain(e[t].Url, this._autopausedata)) {
                const s = r._verifiedPauseData(e[t]);
                this._autopausedata.push(s);
              }
            }
          a.a.storage.local.set({ AutoPausedUrls: e });
        }
      }
      static _fetchData(e) {
        a.a.storage.local.set({ LastFetchedTime: Date.now() }),
          i.getAutoPauseData((t, s) => {
            (t && !e) ||
              (r._initfromlocalstorage(() => {
                r._mergeAutoPauseData(s), a.a.storage.local.set({ AutoPausedUrls: this._autopausedata });
              }),
              e &&
                (a.a.storage.local.set({ AutoPauseEnabled: !0 }),
                (this._autopauseenabled = !0),
                a.a.storage.local.set({ ShowWelcomePopup: !0 }),
                (this._showWelcomePopup = !0)));
          });
      }
      static _fetchPeriodically(e) {
        const t = "localStorageFetchPeriodically";
        chrome.alarms.create(t, { delayInMinutes: 0, periodInMinutes: e }),
          chrome.alarms.onAlarm.addListener((e) => {
            e.name === t && r._fetchData(!1);
          });
      }
      static init() {
        a.a.storage.local.get(o.LastFetchedTime, (e) => {
          const t = Date.now();
          if (void 0 === e.LastFetchedTime || e.LastFetchedTime + o.WhitelistFetchInterval < t)
            r._fetchData(void 0 === e.LastFetchedTime), r._fetchPeriodically(o.WhitelistFetchInterval);
          else {
            r._initfromlocalstorage();
            const s = o.WhitelistFetchInterval - (t - e.LastFetchedTime);
            setTimeout(() => {
              r._fetchData(!1), r._fetchPeriodically(o.WhitelistFetchInterval);
            }, s);
          }
        });
      }
      static setClientId(e) {
        (this._clientId = e), a.a.storage.local.set({ ClientId: e });
      }
      static getClientId() {
        return this._clientId;
      }
      static setInstalledTime(e) {
        (this._installedTime = e), a.a.storage.local.set({ InstalledTime: e });
      }
      static getInstalledTime() {
        return this._installedTime;
      }
      static getShowWelcomePopup() {
        return this._showWelcomePopup;
      }
      static setShowWelcomePopup() {
        (this._showWelcomePopup = !1), a.a.storage.local.set({ ShowWelcomePopup: !1 });
      }
      static setAutoPauseEnabled(e) {
        (this._autopauseenabled = e), a.a.storage.local.set({ AutoPauseEnabled: this._autopauseenabled });
      }
      static getAutoPauseEnabled() {
        return this._autopauseenabled;
      }
      static getAllAutoPauseData() {
        return this._autopausedata;
      }
      static getAutoPauseData(e) {
        const t = n.a.getDomainName(e);
        if (!t) return null;
        for (let e = 0; e < this._autopausedata.length; ++e) {
          if (t.endsWith(this._autopausedata[e].Url)) return this._autopausedata[e];
          if (this._autopausedata[e].Url.endsWith(t))
            return (this._autopausedata[e].Url = t), a.a.storage.local.set({ AutoPausedUrls: this._autopausedata }), this._autopausedata[e];
        }
        return null;
      }
      static setAutoPauseData(e, t, s, i) {
        const o = n.a.getDomainName(e);
        if (null === o || void 0 === o) return;
        const l = r.getAutoPauseData(e);
        if (null === l) {
          const e = { BandWidthSaved: s, IsWhiteListed: void 0 !== i && i, Url: o, VideosPaused: t, UserModified: !1 };
          this._autopausedata.push(e);
        } else (l.BandWidthSaved += s), (l.VideosPaused += t), void 0 !== i && ((l.IsWhiteListed = i), (l.UserModified = !0));
        a.a.storage.local.set({ AutoPausedUrls: this._autopausedata });
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
        a.a.storage.local.get(e, (s) => {
          t(s[e]);
        });
      }
    }
  },
  function (e, t, s) {
    "use strict";
    s.d(t, "a", function () {
      return i;
    }),
      s.d(t, "b", function () {
        return a;
      });
    const i = {
        UseNativeLogger: "UseNativeLogger",
        ClickPlayInterval: 4e3,
        BannerId: "webboost_bannerid",
        VideoId: "webboost_videoid",
        UserPlayed: "webboost_userplayed",
        ProcessedVideo: "webboost_processed",
        FoundPaused: "webboost_found_paused"
      },
      a = { LogMsg: 6, AggregateData: 11, Telemetry: 14 };
  },
  function (e, t, s) {
    "use strict";
    t.a = { logger: null, isLive: !1 };
  },
  function (e, t, s) {
    "use strict";
    var i = s(1),
      a = s(3),
      n = s(9);
    class o {
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
    var r = s(0),
      l = s(4);
    s.d(t, "a", function () {
      return d;
    }),
      s.d(t, "b", function () {
        return c;
      });
    class d {
      static isInArray(e, t) {
        for (let s = 0; s < e.length; ++s) if (e[s] === t) return !0;
        return !1;
      }
      static resetTabData(e) {
        i.a.TabDataList.set(e, new o()), this.updateBadge(e);
      }
      static updateBadge(e) {
        let t = "";
        const s = i.a.TabDataList.get(e);
        s._videosPaused > 0 && (t = s._videosPaused.toString()), r.a.action.setBadgeText({ text: t, tabId: e });
      }
      static getDomainName(e) {
        return n.a.getDomainName(e);
      }
      static setAutoPauseData(e, t, s, n) {
        a.a.setAutoPauseData(e, t, s, n);
        const o = d.getDomainName(e);
        if ("" === o || void 0 === o || null === o) return;
        const c = [{ UniqueIdentifier: "WebBoost.Video.Pause" }, { "Event.Value": t }, { "Event.Label": o }, { Metric1: s }],
          u = { extension_id: r.a.runtime.id, payload: c };
        i.a.waClient.postMessage({ id: 0, request_type: l.b.AggregateData, payload: u });
      }
      static isWhitelisted(e) {
        i.a.logger.log(`Checking whether url ${e} is whitelisted`);
        const t = a.a.getAutoPauseData(e);
        return null !== t && t.IsWhiteListed;
      }
    }
    const c = function (e) {
      const t = e.getBoundingClientRect(),
        s = window.pageYOffset,
        i = window.pageXOffset;
      return { top: Math.round(t.top + s), left: Math.round(t.left + i), bottom: Math.round(t.bottom + s), right: Math.round(t.right + i) };
    };
  },
  function (e, t, s) {
    "use strict";
    s.d(t, "a", function () {
      return o;
    });
    var i = s(2),
      a = s(5),
      n = s(0);
    class o {
      static addVideoForResponseCaching(e) {
        n.a.runtime.sendMessage({ action: i.a.AddResponseCaching, src: e });
      }
      static blockVideo(e, t) {
        n.a.runtime.sendMessage({ action: i.a.Block, src: e }, t);
      }
      static unblockVideo(e, t) {
        n.a.runtime.sendMessage({ action: i.a.Clear, src: e }, t);
      }
      static setUserLastClickDetails(e, t) {
        n.a.runtime.sendMessage({ action: i.a.SetUserLastClickDetails, time: e, coordinates: t });
      }
      static getUserLastClickDetails(e) {
        n.a.runtime.sendMessage({ action: i.a.GetUserLastClickDetails }, e);
      }
      static isWhitelisted(e, t) {
        n.a.runtime.sendMessage({ action: i.a.IsWhitelisted, src: e }, t);
      }
      static isAutoPauseEnabled(e) {
        n.a.runtime.sendMessage({ action: i.a.IsAutoPauseEnabled }, e);
      }
      static sendTelemetry(e) {
        n.a.runtime.sendMessage({ action: i.a.SendTelemetry, telemetry: e });
      }
      static logMsg(e) {
        n.a.runtime.sendMessage({ action: i.a.LogMsg, logDetails: e });
      }
      static getBackgroundGlobals(e) {
        n.a.runtime.sendMessage({ action: i.a.GetBackgroundGlobals }, e);
      }
      static init() {
        n.a.runtime.onMessage.addListener((e, t, s) => {
          switch (e.request_type) {
            case i.a.LiveVideoFound:
              a.a.logger.log("Found live video"), (a.a.isLive = !0);
          }
        });
      }
    }
  },
  function (e, t, s) {
    "use strict";
    t.a = { None: 0, Info: 1, Err: 2, All: 3 };
  },
  function (e, t, s) {
    "use strict";
    s.d(t, "a", function () {
      return i;
    });
    class i {
      static getDomainName(e) {
        let t = e;
        /^(https?:|chrome:|about:)/.test(e) || (t = `https://${e}`);
        const s = new URL(t);
        return s.hostname.startsWith("www.") ? s.hostname.substr(4) : s.hostname;
      }
    }
  },
  function (e, t, s) {
    "use strict";
    var i = s(8),
      a = s(7);
    class n {
      static getBrowserTypes() {
        return { unknown: -1, firefox: 1, chrome: 2, ironSource: 3, edge: 4 };
      }
      static toBrowserTypeInt(e) {
        return this.getBrowserTypes()[e];
      }
    }
    var o = s(3),
      r = s(1),
      l = s(4);
    s.d(t, "a", function () {
      return d;
    });
    class d {
      constructor(e) {
        (this.logLevel = e),
          (this.nativeLoggingEnabled = !1),
          (this.processType = -1),
          (this.browserType = n.toBrowserTypeInt("chrome")),
          (this.extensionType = "wb"),
          o.a.get("ExtensionLogging", (e) => {
            void 0 !== e && Number.isInteger(e) && e >= 0 && e <= 3 && (this.logLevel = e);
          });
      }
      setNativeLoggingEnabled(e, t) {
        void 0 !== t && (this.processType = t), (this.nativeLoggingEnabled = e);
      }
      log(e) {
        if (this.nativeLoggingEnabled) {
          const t = {
            processType: this.processType,
            browserType: this.browserType,
            extensionType: this.extensionType,
            logLevel: i.a.Info,
            msg: e
          };
          0 === this.processType
            ? a.a.logMsg(t)
            : r.a.waClient.postMessage({
                id: 0,
                request_type: l.b.LogMsg,
                payload: {
                  process_type: 0 === this.processType ? "ct" : "bg",
                  browser_tpe: this.browserType,
                  extension_type: this.extensionType,
                  logLevel: i.a.Info,
                  msg: e
                }
              });
        }
        if (i.a.Info && this.logLevel) {
          const t = new Date();
          console.log(`${t.toLocaleString()} ${e}`);
        }
      }
      error(e) {
        if (this.nativeLoggingEnabled) {
          const t = {
            processType: this.processType,
            browserType: this.browserType,
            extensionType: this.extensionType,
            logLevel: i.a.Err,
            msg: e
          };
          0 === this.processType
            ? a.a.logMsg(t)
            : r.a.waClient.postMessage({
                id: 0,
                request_type: l.b.LogMsg,
                payload: {
                  process_type: 0 === this.processType ? "ct" : "bg",
                  browser_tpe: this.browserType,
                  extension_type: this.extensionType,
                  logLevel: i.a.Info,
                  msg: e
                }
              });
        }
        if (i.a.Err && this.logLevel) {
          const t = new Date();
          console.error(`${t.toLocaleString()} ${e}`);
        }
      }
      logLocal(e) {
        if (i.a.Info && this.logLevel) {
          const t = new Date();
          console.log(`${t.toLocaleString()} ${e}`);
        }
      }
    }
  },
  ,
  function (e, t, s) {
    "use strict";
    s.r(t);
    var i = s(1),
      a = s(2),
      n = s(6),
      o = s(3);
    class r {
      static calculateSavings(e, t, s, i) {
        const a = s.find((e) => "content-type" === e.name.toLowerCase()),
          n = new RegExp("^(video)/(?:x-)?([^; ]+)"),
          o = new RegExp("^(application)/(vnd.apple.mpegurl|octet-stream)");
        a && (n.exec(a.value) || o.exec(a.value)) && -1 === e.indexOf("m3u8") && this._bandwidthSaved(e, t, s, i);
      }
      static _bandwidthSaved(e, t, s, a) {
        const o = s.find((e) => "content-length" === e.name.toLowerCase()),
          r = new RegExp("^bytes [0-9]+-[0-9]+/([0-9]+)$");
        if (i.a.MEDIA_PATTERN.test(e)) {
          let e = null;
          const l = s.find((e) => "content-range" === e.name.toLowerCase());
          if (l) {
            const t = r.exec(l.value);
            t && ([, e] = t);
          }
          e || (e = o.value),
            (e = parseInt(e, 10)),
            i.a.logger.log(`TabID: ${a}, MainURL: ${t}, SavedData: ${e}`),
            n.a.setAutoPauseData(t, 0, e);
        }
      }
      static _claimHLSDataSaved(e, t) {
        const s = i.a.TabDataList.get(t).getClaimData(e);
        n.a.setAutoPauseData(e, 0, s);
      }
    }
    var l = s(0),
      d = s(8),
      c = s(4);
    class u {
      init() {
        l.a.runtime.onMessage.addListener(this._messageRequestListener.bind(this));
      }
      _setUserLastClickDetails(e, t, s) {
        return i.a.TabDataList.get(e).setUserLastClickDetails(t, s), !1;
      }
      _getUserLastClickDetails(e, t) {
        return t(i.a.TabDataList.get(e).getUserLastClickDetails()), !1;
      }
      _blockStreaming(e, t) {
        i.a.logger.log(`Blocking video : ${t}  from tab ${e}`);
        const s = i.a.TabDataList.get(e);
        return (
          !s.containsBlockedUrl(t) &&
          void 0 !== s &&
          (l.a.tabs.get(e, (a) => {
            s.incrementVideosPaused(), s.addBlockedUrl(t), n.a.updateBadge(e), n.a.setAutoPauseData(a.url, 1, 0);
            const o = s.getResponse(t);
            void 0 !== o
              ? (i.a.logger.log(`Calculating bandwidth from block streaming for video ${t}`),
                r.calculateSavings(t, a.url, o.responseHeaders, e))
              : r._claimHLSDataSaved(a.url, e);
          }),
          !1)
        );
      }
      _unblockStreaming(e, t, s, a) {
        i.a.logger.log(`Unblocking video ${s} from tab id ${e} from frameid ${t}`);
        const o = i.a.TabDataList.get(e);
        return (
          void 0 !== o &&
          (t > 0 && o.addWhitelistedFrameId(t),
          i.a.MEDIA_PATTERN.test(s) || o._hlsUserClickedPlay.push(s),
          !!o.removeBlockedUrl(s) && (o.decreaseVideosPaused(), n.a.updateBadge(e), void 0 !== a && a(), !0))
        );
      }
      _getVersionDetails(e) {
        return e({ extVersion: l.a.runtime.getManifest().version }), !1;
      }
      _toUrlForOptionsUI(e) {
        return e.startsWith("http") ? e : "";
      }
      _getAllAutoPauseData(e, t) {
        return (
          l.a.tabs.get(e, (s) => {
            const a = i.a.TabDataList.get(e).getTotalVideosPaused();
            this._isWhitelisted(s.url, (e) => {
              const i = {
                totalVideosPaused: o.a.getTotalVideosPaused(),
                pausedInThisSession: a,
                autoPausedDataList: o.a.getAllAutoPauseData(),
                totalBandwidthSaved: o.a.getTotalBandwidthSaved(),
                globalAutoPauseEnabled: o.a.getAutoPauseEnabled(),
                isHostWhiteListed: e,
                currentUrl: void 0 === s || void 0 === s.url ? "" : this._toUrlForOptionsUI(s.url),
                showWelcomePopup: o.a.getShowWelcomePopup()
              };
              t(i);
            });
          }),
          !0
        );
      }
      _isWhitelistedFrame(e, t) {
        const s = i.a.TabDataList.get(e);
        return void 0 === s
          ? (i.a.logger.log(`Frame ${t} of tab ${e} is not whitelisted`), !1)
          : s.containsWhitelistedFrameId(t)
          ? (i.a.logger.log(`Frame ${t} of tab ${e} is whitelisted`), !0)
          : (i.a.logger.log(`Frame ${t} of tab ${e} is not whitelisted`), !1);
      }
      _isWhitelisted(e, t) {
        t(n.a.isWhitelisted(e));
      }
      _isAutoPauseEnabled(e) {
        return e(o.a.getAutoPauseEnabled()), !1;
      }
      _getActiveTabId(e) {
        l.a.tabs.query({ active: !0, currentWindow: !0 }, (t) => {
          void 0 !== t && t.length > 0 && e(t[0].id);
        });
      }
      _updateWhitelist(e, t) {
        n.a.setAutoPauseData(e, 0, 0, t);
      }
      _updateGlobalAutoPause(e) {
        o.a.setAutoPauseEnabled(e);
      }
      _turnOffWelcomePopup() {
        o.a.setShowWelcomePopup();
      }
      _addResponseCaching(e, t) {
        const s = i.a.TabDataList.get(e);
        void 0 !== s && s.addVideoForResponseCaching(t);
      }
      _sendTelemetry(e) {
        i.a.waClient.postMessage({ id: 0, request_type: c.b.Telemetry, payload: { telemetry_data: e } });
      }
      _logMsg(e) {
        e.logLevel === d.a.Info ? i.a.logger.log(e) : i.a.logger.err(e);
      }
      _messageRequestListener(e, t, s) {
        let n = !1;
        const r = t.tab && t.tab.id;
        switch (e.action) {
          case a.a.AddResponseCaching:
            this._addResponseCaching(r, e.src);
            break;
          case a.a.SetUserLastClickDetails:
            n = this._setUserLastClickDetails(r, e.time, e.coordinates);
            break;
          case a.a.GetUserLastClickDetails:
            n = this._getUserLastClickDetails(r, s);
            break;
          case a.a.Block:
            (n = this._blockStreaming(r, e.src)), s(!0);
            break;
          case a.a.Clear:
            n = this._unblockStreaming(r, t.frameId, e.src, s);
            break;
          case a.a.GetVersionDetails:
            n = this._getVersionDetails(s);
            break;
          case a.a.IsWhitelisted:
            this._isWhitelisted(e.src, (e) => {
              if (e) s(e);
              else {
                const e = this._isWhitelistedFrame(r, t.frameId);
                s(e);
              }
            });
            break;
          case a.a.IsAutoPauseEnabled:
            n = this._isAutoPauseEnabled(s);
            break;
          case a.a.GetAllAutoPauseData:
            this._getActiveTabId((e) => {
              this._getAllAutoPauseData(e, s);
            }),
              (n = !0);
            break;
          case a.a.UpdateWhitelist:
            this._updateWhitelist(e.whiteListedUrl, e.whiteListedStatus);
            break;
          case a.a.UpdateGlobalAutoPause:
            this._updateGlobalAutoPause(e.enabled);
            break;
          case a.a.TurnOffWelcomePopup:
            this._turnOffWelcomePopup();
            break;
          case a.a.SendTelemetry:
            this._sendTelemetry(e.telemetry);
            break;
          case a.a.GetId:
            s(o.a.getClientId());
            break;
          case a.a.LogMsg:
            this._logMsg(e.logDetails);
            break;
          case a.a.GetBackgroundGlobals:
            s(i.a);
        }
        return n;
      }
    }
    class h {
      constructor() {
        (this.EXTENDED_FILE_STRING = "#EXTINF:"),
          (this.EXTENDED_FILE_ENDLIST_STRING = "#EXT-X-ENDLIST"),
          (this.isLive = !0),
          (this.totalDuration = 0);
      }
      parse(e, t) {
        try {
          for (let s = e; s < t.length; s++) {
            if (t[s].includes(this.EXTENDED_FILE_ENDLIST_STRING)) {
              this.isLive = !1;
              continue;
            }
            if (!t[s].includes(this.EXTENDED_FILE_STRING)) continue;
            const e = t[s].indexOf(","),
              i = t[s].substring(t[s].indexOf(":") + 1, -1 !== e ? e : t[s].length - 1);
            let a = parseFloat(i);
            (a = Number.isNaN(a) ? 0 : a), (this.totalDuration = this.totalDuration + a);
          }
          return !0;
        } catch (e) {
          return i.a.logger.error(`Failed to parse Extended M3U8 file: ${e.message}`), !1;
        }
      }
    }
    class g {
      constructor() {
        (this._streamList = []), (this.MASTER_FILE_STRING = "#EXT-X-STREAM-INF:");
      }
      parse(e, t) {
        try {
          for (let s = e; s < t.length; s++)
            if (t[s].includes(this.MASTER_FILE_STRING)) {
              const e = { URL: t[s + 1], details: t[s].substring(this.MASTER_FILE_STRING.length) };
              this._streamList.push(e);
            }
          return !0;
        } catch (e) {
          return i.a.logger.error(`Failed to parse Master M3U8 file: ${e.message}`), !1;
        }
      }
      getSpecificDetail(e, t) {
        const s = this._streamList[e].details.split(",").find((e) => e.includes(t));
        return void 0 === s ? null : s.substring(s.indexOf("=") + 1);
      }
    }
    class p {
      static createM3U8(e, t, s, n) {
        const o = s.split("\n");
        let r = !1;
        const d = o.findIndex((e) =>
          e.includes("#EXT-X-STREAM-INF:")
            ? (i.a.logger.log(`Master: ${t}`), (r = !0), !0)
            : !!e.includes("#EXTINF:") && (i.a.logger.log(`Extended: ${t}`), (r = !1), !0)
        );
        if (-1 === d) return !1;
        const c = r ? new g() : new h();
        if (!c.parse(d, o)) return !1;
        const u = i.a.TabDataList.get(e);
        return (
          r
            ? u._m3u8MasterFileList.push(c)
            : (u._liveVideoNotified ||
                ((u._liveVideoNotified = !0), c.isLive && l.a.tabs.sendMessage(e, { request_type: a.a.LiveVideoFound })),
              this.startProcessingM3U8Savings(e, t, n, c.totalDuration)),
          !0
        );
      }
      static startProcessingM3U8Savings(e, t, s, a) {
        const n = t.substring(t.lastIndexOf("/") + 1),
          o = i.a.TabDataList.get(e);
        let r = -1;
        const l = o._m3u8MasterFileList.find((e) => -1 !== (r = e._streamList.findIndex((e) => e.URL.includes(n))));
        let d = 0;
        if (void 0 === l && 1 === o._m3u8MasterFileList.length) {
          const e = Math.floor(o._m3u8MasterFileList[0]._streamList.length / 2);
          d = o._m3u8MasterFileList[0].getSpecificDetail(e, "BANDWIDTH");
        } else void 0 !== l && (d = l.getSpecificDetail(r, "BANDWIDTH"));
        const c = Math.floor((d * a) / 8);
        o.addClaimData(s, c), (o._m3u8MasterFileList = []);
      }
    }
    class f {
      init() {
        l.a.webRequest.onHeadersReceived.addListener(
          (e) => {
            if (e.tabId < 0 || !o.a.getAutoPauseEnabled()) return;
            e.url.includes("m3u8") && this._hlsVideoStartProcess(e.tabId, e.url);
            const t = this._shouldBlock(e.tabId, e.url);
            l.a.tabs.get(e.tabId, (s) => {
              if (t) r.calculateSavings(e.url, s.url, e.responseHeaders, e.tabId);
              else {
                const t = i.a.TabDataList.get(e.tabId);
                void 0 !== t && t.hasVideoForResponseCaching(e.url) && t.addResponse(e.url, s.url, e.responseHeaders);
              }
            }),
              t && this._blockURL(e.url);
          },
          { urls: ["<all_urls>"] },
          ["responseHeaders"]
        );
      }
      _blockURL(e) {
        chrome.declarativeNetRequest.getDynamicRules((t) => {
          0 === t.filter((t) => t.condition.urlFilter === e).length &&
            chrome.declarativeNetRequest.updateDynamicRules(
              {
                addRules: [
                  {
                    id: t.length + 1,
                    condition: { domains: ["<all_urls>"], urlFilter: e, resourceTypes: ["main_frame"] },
                    action: { type: "block" }
                  }
                ]
              },
              () => {
                i.a.logger.log(`DeclarativeNetRequest blocking was successful for url ${e}`);
              }
            );
        });
      }
      _shouldBlock(e, t) {
        if (-1 === e) return !1;
        const s = i.a.TabDataList.get(e);
        return void 0 !== s && s.containsBlockedUrl(t);
      }
      async getM3U8(e, t, s) {
        const i = await fetch(t, { method: "GET" });
        4 === i.readyState && 200 === i.status && p.createM3U8(e, t, i.responseText, s.url);
      }
      _hlsVideoStartProcess(e, t) {
        l.a.tabs.get(e, (s) => {
          const a = o.a.getAutoPauseData(s.url);
          (null !== a && a.IsWhiteListed) ||
            i.a.TabDataList.get(e)._hlsUserClickedPlay.some((e) => e.includes(s.url)) ||
            this.getM3U8(e, t, s);
        });
      }
    }
    class _ {
      init() {
        l.a.tabs.query({}, (e) => {
          e.forEach((e) => {
            n.a.resetTabData(e.id);
          });
        }),
          l.a.tabs.onRemoved.addListener(this._onRemovedListener),
          l.a.tabs.onCreated.addListener(this._onCreatedListener);
      }
      _onRemovedListener(e, t) {
        i.a.TabDataList.has(e) && i.a.TabDataList.delete(e);
      }
      _onCreatedListener(e) {
        n.a.resetTabData(e.id);
      }
    }
    class m {
      init() {
        l.a.webNavigation.onCommitted.addListener(
          (e) => {
            !1 !== o.a.getAutoPauseEnabled() &&
              l.a.tabs.get(e.tabId, (t) => {
                if (void 0 === t) return;
                n.a.isWhitelisted(t.url) ||
                  (0 === e.frameId && n.a.resetTabData(e.tabId),
                  i.a.logger.log(`Attempting to inject content script to url ${t.url} for tabid ${e.tabId} and frame id ${e.frameId}`),
                  l.a.scripting.executeScript({ target: { tabId: e.tabId, allFrames: !1 }, files: ["content.js"] }, () => {
                    l.a.runtime.lastError &&
                      i.a.logger.log(
                        `Failed to inject content script to frame ${e.frameId} for top level url: ${t.url}, error: ${l.a.runtime.lastError.message}`
                      );
                  }));
              });
          },
          { url: [{ schemes: ["http", "https", "about"] }] }
        );
      }
    }
    class b {
      static getListeners() {
        const e = [];
        return e.push(new u()), e.push(new f()), e.push(new _()), e.push(new m()), e;
      }
    }
    const v = { AccountId: "AccountId", ClientId: "ClientId" },
      I = { Accepted: "Accepted", Rejected: "Rejected" },
      y = { Implicit: "Implicit", Explicit: "Explicit" },
      L = { Inline: "Inline", Popup: "Popup" },
      E = {
        Registration: "Registration",
        ProductDownload: "ProductDownload",
        Purchase: "Purchase",
        ProductInstallation: "ProductInstallation",
        ProductActivation: "ProductActivation"
      },
      P = {
        Salt: "4157A795-1451-4fe3-BA59-0C4C98676668",
        EULAService: "https://home.mcafee.com/webservices/eulaservice.asmx",
        EULASoapAction: "http://home.mcafee.com/SaveEulaTrackingDetails"
      };
    class T {
      static get(e, t) {
        const s = new TextEncoder("utf-8").encode(e);
        return crypto.subtle.digest("SHA-256", s).then((e) => {
          t(T._hex(e));
        });
      }
      static _hex(e) {
        const t = [],
          s = new DataView(e);
        for (let e = 0; e < s.byteLength; e += 4) {
          const i = "00000000",
            a = (i + s.getUint32(e).toString(16)).slice(-i.length);
          t.push(a);
        }
        return t.join("");
      }
    }
    class M {
      setContextType(e) {
        this.ContextType = e;
      }
      setContext(e) {
        this.ContextTypeValue = e;
      }
      setEULAVersion(e) {
        this.EulaVersion = e;
      }
      setActionType(e) {
        this.ActionType = e;
      }
      setAcceptanceType(e) {
        this.AcceptanceType = e;
      }
      setViewType(e) {
        this.ViewType = e;
      }
      setCulture(e) {
        this.Culture = e;
      }
      setApplication(e) {
        this.Application = e;
      }
      setAffId(e) {
        this.AffiliateId = e;
      }
      setPackageId(e) {
        this.PackageId = e;
      }
      setFunctionality(e) {
        this.Functionality = e;
      }
      setContextAdditionalInfo(e) {
        this.ContextAdditionalInfo = e;
      }
      _toHash(e) {
        const t = this.AffiliateId + this.ContextTypeValue + P.Salt;
        T.get(t, e);
      }
      toXml(e) {
        let t = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">';
        (t += "<s:Body>"),
          (t += '<SaveEulaTrackingDetails xmlns="http://home.mcafee.com/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">'),
          (t += "<eulaTrackingRequestInfo>");
        const s = Object.getOwnPropertyNames(this);
        for (let e = 0; e < s.length; ++e) (t += "<"), (t += s[e]), (t += ">"), (t += this[s[e]]), (t += "</"), (t += s[e]), (t += ">");
        (t += "<HashedInput>"),
          this._toHash((s) => {
            (t += s),
              (t += "</HashedInput>"),
              (t += "</eulaTrackingRequestInfo >"),
              (t += "</SaveEulaTrackingDetails >"),
              (t += "</s:Body >"),
              e((t += "</s:Envelope >"));
          });
      }
    }
    class x {
      static _isResponseValid(e) {
        const t = "SaveEulaTrackingDetailsResult";
        return new RegExp(`(?<=<${t}>)(.*)(?=</${t}>)`).test(e);
      }
      static submit(e, t) {
        e.toXml((s) => {
          fetch(P.EULAService, {
            method: "POST",
            headers: { "Content-Type": "text/xml; charset=utf-8", SOAPAction: P.EULASoapAction },
            body: s
          })
            .then((e) => {
              if (200 !== e.status) throw new Error("EULA request returned an error");
              return e.text();
            })
            .then((s) => {
              if (!x._isResponseValid(s)) throw new Error("EULA Acceptance response denotes that the acceptance request failed");
              i.a.logger.log("EULA Acceptance sent to server successfully"), t(!0, e.ContextTypeValue);
            })
            .catch((e) => {
              i.a.logger.error(`Failed to send EULA Acceptance: ${e}`), t(!1);
            });
        });
      }
    }
    class w {
      static newGuid() {
        const e = new Uint8Array(24);
        crypto.getRandomValues(e);
        let t = Date.now().toString() + Math.random().toString().substring(2);
        for (let s = 0; s < 24; ++s) t += e[s].toString();
        let s = "{";
        for (let e = 0; e < 36; ++e)
          if (8 === e || 13 === e || 18 === e || 23 === e) s += "-";
          else {
            s += t[Math.floor(Math.random() * t.length)];
          }
        return (s += "}");
      }
    }
    class D {
      static submit(e, t, s, i) {
        const a = new Date(s),
          n = `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`,
          o = new M();
        o.setAcceptanceType(y.Implicit),
          o.setActionType(I.Accepted),
          o.setAffId(e),
          o.setApplication("McAfee WebBoost"),
          o.setContextType(v.ClientId);
        const r = void 0 !== t ? t : w.newGuid();
        o.setContext(r),
          o.setCulture("Default"),
          o.setEULAVersion("EULA"),
          o.setFunctionality(E.ProductInstallation),
          o.setPackageId(0),
          o.setViewType(L.Inline),
          o.setContextAdditionalInfo(`AcceptanceDate : ${n}; Affid :${e}`),
          x.submit(o, i);
      }
    }
    var k = s(10);
    const U = { Unknown: -1, Firefox: 1, Chrome: 2, Edge: 3 },
      A = { Ping: 110, Handshake: 9, HighPriorityAlive: 111, Disconnected: 106 },
      S = { Info: 0, Err: 1 };
    class C {
      constructor(e, t = null, s = null, i = null, a = null) {
        (this.onExternalMessage = t),
          (this.onNativeMessage = s),
          (this.onDisconnectEvent = i),
          (this.nativeConnectionString = e),
          (this._connectedToExtension = !1),
          (this._extensionId = chrome.runtime.id),
          (this._callbackMap = new Map()),
          (this._callbackId = 5),
          (this._nativeCallbackMap = new Map()),
          (this._forwardExtensionId = null),
          (this._port = null),
          (this._logger = a),
          (this._onConnectExternal = this._onConnectExternal.bind(this)),
          (this._onMessageExternal = this._onMessageExternal.bind(this)),
          (this._onMessage = this._onMessage.bind(this)),
          (this._onDisconnect = this._onDisconnect.bind(this)),
          (this._connectedExtensions = []),
          (this._connectedToNative = !1),
          this._initExtensionList();
      }
      init(e) {
        chrome.runtime.onConnectExternal.addListener(this._onConnectExternal),
          chrome.runtime.onMessageExternal.addListener(this._onMessageExternal),
          this._connect(0, e);
      }
      _isSupported(e) {
        return this.extensions.includes(e);
      }
      _isHigherPriority(e) {
        for (let t = 0; t < this.extensions.length; ++t) {
          if (e === this.extensions[t]) return !0;
          if (this._extensionId === this.extensions[t]) break;
        }
        return !1;
      }
      _addConnectedExtension(e) {
        this._connectedExtensions.push(e);
      }
      _removeConnectedExtension(e) {
        const t = this._connectedExtensions.indexOf(e);
        -1 !== t && this._connectedExtensions.splice(t, 1);
      }
      _onConnectExternal(e) {
        if ((this._log(S.Info, `External entity ${e.sender.id} connected`), !this._isSupported(e.sender.id)))
          return this._log(S.Info, `Unsupported external entity ${e.sender.id} is forcefully disconnected`), void e.disconnect();
        if (!this._isHigherPriority(e.sender.id)) {
          this._addConnectedExtension(e.sender.id);
          const t = chrome.runtime.connect(e.sender.id);
          null !== t &&
            t.onDisconnect.addListener(() => {
              chrome.runtime.lastError && this._log(`Error connecting to native host ${extension.runtime.lastError.message}`),
                this._removeConnectedExtension(e.sender.id),
                this._sendDisconnect(e.sender.id);
            });
        }
      }
      _incrementCallbackId() {
        return this._callbackId < 0 || this._callbackId >= 2147483647 ? (this._callbackId = 5) : (this._callbackId += 1), this._callbackId;
      }
      _onMessageExternal(e, t, s) {
        let i = !1;
        try {
          if (!this._isSupported(t.id))
            return void this._log(S.Info, `Message received from unsupported entity ${t.id}. Message is ${JSON.stringify(e)}`);
          if (null === e || !("request_type" in e))
            return void this._log(S.Err, `Message received does not have request_type field : ${JSON.stringify(e)}`);
          if ((this._log(S.Info, `Message received from external extension ${t.id} ${JSON.stringify(e)}`), e.request_type === A.Ping))
            return (
              s({ forwardingsupported: !0, connectedToNative: this._connectedToNative }),
              void this._log(S.Info, `Ping message from low priority extension ${t.id}`)
            );
          e.request_type === A.HighPriorityAlive &&
            (this._log(S.Info, `Message from high priority extension ${t.id} broadcasting its presence`),
            null !== this._port &&
              (this._log(S.Info, "Disconnection the direct native connection"), this._port.disconnect(), (this._port = null)),
            this._log(S.Info, `Attempting reconnection to the high priority extension  ${t.id} which broadcasted its presence`),
            this._connect(0, null));
          let a = !0;
          if (null !== this.onExternalMessage) {
            this._log(S.Info, `Passing the message ${JSON.stringify(e)} from ${t.id} to external message listener of this extension`);
            const n = this.onExternalMessage(e, t, s);
            null !== n && void 0 !== n && !0 !== (a = n.forwardMessage || !0) && (i = n.ret);
          }
          if (a && null !== this._port && this._connectedToNative) {
            if ("id" in e) {
              const a = this._incrementCallbackId();
              this._callbackMap.set(a, { extensionId: t.id, id: e.id, callback: s }), (e.id = a), (i = !0);
            }
            this._log(S.Info, `Message ${JSON.stringify(e)} is forwarded to native`), this._nativePostMessage(e);
          }
        } catch (e) {
          this._logException(e);
        }
        return i;
      }
      _onMessage(e) {
        if (null === e || !("request_type" in e))
          return void this._log(
            S.Err,
            `Message received from native does not have request_type. Hence skipping the message. ${JSON.stringify(e)}`
          );
        if (e.id) {
          const t = this._nativeCallbackMap.get(e.id);
          if (null !== t && void 0 !== t)
            return (
              this._log(
                S.Info,
                `Callback exists for message in this extension itself, hence firing that for message : ${JSON.stringify(e)}`
              ),
              t(e),
              void this._nativeCallbackMap.delete(e.id)
            );
        }
        let t = !0;
        if (
          (null !== this.onNativeMessage &&
            (this._log(S.Info, `Calling native generic callback for message received from native ${JSON.stringify(e)}`),
            (t = this.onNativeMessage(e))),
          t)
        )
          if ("id" in e) {
            const t = this._callbackMap.get(e.id);
            void 0 !== t &&
              (this._log(S.Info, `Forwarding message ${JSON.stringify(e)} to callback extension ${t.extensionId}`),
              (e.id = t.id),
              t.callback(e),
              this._callbackMap.delete(e.id));
          } else "forwardid" in e && chrome.runtime.sendMessage(e.forwardid, e, null, null);
      }
      _onDisconnect(e) {
        chrome.runtime.lastError &&
          this._log(S.Info, `Connection to native/extension failed Error is: ${chrome.runtime.lastError.message}`),
          this._log(S.Info, "Disconnected from native. Trying to connect loop again"),
          (this._port = null),
          null !== this.onDisconnectEvent && this.onDisconnectEvent(e),
          this._connectedToNative ? (this._connectedToNative = !1) : this._connect(0, null);
      }
      _initExtensionList() {
        switch (this._toBrowserType()) {
          case U.Chrome:
            this.extensions = [
              "cpaibbcbodhimfnjnakiidgbpiehfgci",
              "fheoggkfdfchfphceeifdbepaooicaho",
              "klekeajafkkpokaofllcadenjdckhinm",
              "kanjcmmieblbpbihaafnedamppkhfadn",
              "ciahhpibjeonlihjdefecmhminjpmfkk",
              "nbeldjopgciegccabfohnefghfpinncn"
            ];
            break;
          case U.Edge:
            this.extensions = ["gnnbmcifkkjgjdbkilfglpdpmidkgefn", "fdhgeoginicibhagdmblfikbgbkahibd", "lamehkegphbbfdailghaeeleoajilfho"];
            break;
          case U.Firefox:
            this.extensions = ["@true-key", "{4ED1F68A-5463-4931-9384-8FFF5ED91D92}"];
        }
      }
      _toBrowserType() {
        return navigator.userAgent.indexOf("Edg") >= 0
          ? U.Edge
          : navigator.userAgent.indexOf("Chrome") >= 0
          ? U.Chrome
          : navigator.userAgent.indexOf("Gecko") >= 0
          ? U.Firefox
          : U.Unknown;
      }
      _log(e, t) {
        null !== this._logger && this._logger.log(e, t);
      }
      _logException(e) {
        let t = e.message;
        chrome.runtime.lastError && chrome.runtime.lastError.message && (t += `LastError :${chrome.runtime.lastError.message}`),
          this._log(S.Err, t);
      }
      _toDisconnectMessage(e) {
        const t = {};
        return (
          (t.request_type = A.Disconnected), (t.payload = {}), (t.payload.browser_type = this._toBrowserType()), (t.payload.extn_id = e), t
        );
      }
      _sendDisconnect(e) {
        try {
          const t = this._toDisconnectMessage(e);
          this._nativePostMessage(t), this._log(S.Info, `Sent disconnect message directly to native ${JSON.stringify(handshake)}`);
        } catch (e) {
          this._logException(e);
        }
      }
      _toHandshakeMessage() {
        return {
          request_type: A.Handshake,
          id: this._incrementCallbackId(),
          payload: {
            extn_id: this._extensionId,
            extn_version: chrome.runtime.getManifest().version,
            browser_type: this._toBrowserType(),
            user_agent: navigator.userAgent
          }
        };
      }
      _sendhandshake() {
        try {
          const e = this._toHandshakeMessage();
          if (this._nativePostMessage(e)) return this._log(S.Info, `Sent handshake message directly to native ${JSON.stringify(e)}`), !0;
        } catch (e) {
          this._logException(e);
        }
        return !1;
      }
      _connect(e, t = null) {
        if (e >= this.extensions.length) return void (t && t({ connected: !1 }));
        if (this.extensions[e] === this._extensionId) {
          if (
            (this._log(S.Info, "No other high priority extension available, hence connecting directly to native"),
            (this._port = chrome.runtime.connectNative(this.nativeConnectionString)),
            (this._connectedToExtension = !1),
            this._port.onMessage.addListener(this._onMessage),
            this._port.onDisconnect.addListener(this._onDisconnect),
            (this._forwardExtensionId = null),
            this._sendhandshake())
          ) {
            this._connectedToNative = !0;
            const s = {};
            (s.request_type = A.HighPriorityAlive), (s.payload = {});
            for (let t = e + 1; t < this.extensions.length; ++t)
              chrome.runtime.sendMessage(this.extensions[t], s, () => {
                chrome.runtime.lastError && this._log(S.Info, `Message failed to send: ${chrome.runtime.lastError.message}`);
              });
            return void (t && t({ connected: !0 }));
          }
          return void (t && t({ connected: !1 }));
        }
        const s = {};
        (s.request_type = A.Ping),
          (s.payload = {}),
          chrome.runtime.sendMessage(this.extensions[e], s, (s) => {
            if (chrome.runtime.lastError)
              return this._log(S.Info, `Message failed to send: ${chrome.runtime.lastError.message}`), void this._connect(e + 1, t);
            if (null === s || void 0 === s)
              return (
                this._log(
                  S.Info,
                  `High priority extension ${this.extensions[e]} did not respond with appropriate response. Hence trying the next high priority available extension`
                ),
                void this._connect(e + 1, t)
              );
            if (!s.forwardingsupported)
              return (
                this._log(
                  S.Info,
                  `High priority extension ${this.extensions[e]} responded but it does not support forwarding. Hence trying next priority extension`
                ),
                void this._connect(e + 1, t)
              );
            if (
              (this._log(S.Info, `High priority extension ${this.extensions[e]} responded and supports forwarding.`), s.connectedToNative)
            ) {
              this._log(S.Info, `High priority extension ${this.extensions[e]} is connected to native, hence we are forwarding to it`),
                (this._port = chrome.runtime.connect(this.extensions[e])),
                (this._connectedToExtension = !0),
                this._port.onMessage.addListener(this._onMessage),
                this._port.onDisconnect.addListener(this._onDisconnect),
                (this._forwardExtensionId = this.extensions[e]);
              const s = this._toHandshakeMessage();
              this._postMessageInternal(s), t && t({ connected: !0 });
            } else
              this._log(S.Info, `High priority extension ${this.extensions[e]} supports forwarding, but is not connected to native`),
                t && t({ connected: !1 });
          });
      }
      _nativePostMessage(e) {
        try {
          return this._port.postMessage(e), !0;
        } catch (e) {
          return (
            chrome.runtime.lastError && this._log(S.Err, `Post message failed with last Error ${chrome.runtime.lastError.message}`),
            this._logException(e),
            !1
          );
        }
      }
      _postMessageInternal(e, t = null) {
        if ((null !== t && (e.id = this._incrementCallbackId()), null !== this._forwardExtensionId))
          this._log(S.Info, `Message ${JSON.stringify(e)} is being forwarded to ${this._forwardExtensionId}`),
            chrome.runtime.sendMessage(this._forwardExtensionId, e, (e) => {
              chrome.runtime.lastError
                ? this._log(S.Info, `Message failed to send: ${chrome.runtime.lastError.message}`)
                : null !== t && (null !== e && this._log(S.Info, `Response for message forwarded is ${JSON.stringify(e)}`), t(e));
            });
        else {
          if (null === this._port) return;
          null !== t && this._nativeCallbackMap.set(e.id, t),
            this._log(S.Info, `Message is sent directly to native ${JSON.stringify(e)}`),
            this._nativePostMessage(e);
        }
      }
      getConnectedExtensions() {
        return this._connectedExtensions;
      }
      isConnected() {
        return this._connectedToExtension || this._connectedToNative;
      }
      postMessage(e, t = null) {
        try {
          return (
            null !== e &&
            null !== e.request_type &&
            e.request_type !== A.Handshake &&
            e.request_type !== A.HighPriorityAlive &&
            e.request_type !== A.Ping &&
            (this._postMessageInternal(e, t), !0)
          );
        } catch (e) {
          return this._logException(e), !1;
        }
      }
    }
    new (class {
      init() {
        (i.a.logger = new k.a(0)), o.a.init();
        const e = b.getListeners();
        for (let t = 0; t < e.length; ++t) e[t].init();
        (i.a.waClient = new C("webadvisor.mcafee.chrome.extension", null, null, null, null)),
          i.a.waClient.init(null),
          setTimeout(() => {
            if (void 0 === o.a.getClientId()) {
              const e = o.a.getInstalledTime();
              void 0 !== e &&
                D.submit(0, void 0, e, (e, t) => {
                  e && o.a.setClientId(t);
                });
            }
          }, 5e3);
      }
    })().init();
  }
]);
//# sourceMappingURL=../sourceMap/chrome/background.map
