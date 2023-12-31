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
    s((s.s = 11));
})([
  function (e, t, s) {
    "use strict";
    const a = chrome;
    t.a = a;
  },
  function (e, t, s) {
    "use strict";
    const a = {
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
    t.a = a;
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
    class a {
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
    var i = s(0),
      o = s(9);
    s.d(t, "a", function () {
      return r;
    });
    const n = {
      LastFetchedTime: "LastFetchedTime",
      AutoPausedUrls: "AutoPausedUrls",
      AutoPauseEnabled: "AutoPauseEnabled",
      ShowWelcomePopup: "ShowWelcomePopup",
      ClientId: "ClientId",
      WhitelistFetchInterval: 864e5
    };
    class r {
      static _initfromlocalstorage(e) {
        i.a.storage.local.get(n.AutoPausedUrls, (t) => {
          (this._autopausedata = void 0 === t.AutoPausedUrls ? [] : t.AutoPausedUrls),
            i.a.storage.local.get(n.AutoPauseEnabled, (t) => {
              (this._autopauseenabled = void 0 === t.AutoPauseEnabled || !0 === t.AutoPauseEnabled),
                i.a.storage.local.get(n.ShowWelcomePopup, (t) => {
                  (this._showWelcomePopup = t.ShowWelcomePopup), void 0 !== e && e();
                });
            });
        }),
          i.a.storage.local.get(n.ClientId, (e) => {
            this._clientId = e.ClientId;
          }),
          i.a.storage.local.get("InstalledTime", (e) => {
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
          i.a.storage.local.set({ AutoPausedUrls: e });
        }
      }
      static _fetchData(e) {
        i.a.storage.local.set({ LastFetchedTime: Date.now() }),
          a.getAutoPauseData((t, s) => {
            (t && !e) ||
              (r._initfromlocalstorage(() => {
                r._mergeAutoPauseData(s), i.a.storage.local.set({ AutoPausedUrls: this._autopausedata });
              }),
              e &&
                (i.a.storage.local.set({ AutoPauseEnabled: !0 }),
                (this._autopauseenabled = !0),
                i.a.storage.local.set({ ShowWelcomePopup: !0 }),
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
        i.a.storage.local.get(n.LastFetchedTime, (e) => {
          const t = Date.now();
          if (void 0 === e.LastFetchedTime || e.LastFetchedTime + n.WhitelistFetchInterval < t)
            r._fetchData(void 0 === e.LastFetchedTime), r._fetchPeriodically(n.WhitelistFetchInterval);
          else {
            r._initfromlocalstorage();
            const s = n.WhitelistFetchInterval - (t - e.LastFetchedTime);
            setTimeout(() => {
              r._fetchData(!1), r._fetchPeriodically(n.WhitelistFetchInterval);
            }, s);
          }
        });
      }
      static setClientId(e) {
        (this._clientId = e), i.a.storage.local.set({ ClientId: e });
      }
      static getClientId() {
        return this._clientId;
      }
      static setInstalledTime(e) {
        (this._installedTime = e), i.a.storage.local.set({ InstalledTime: e });
      }
      static getInstalledTime() {
        return this._installedTime;
      }
      static getShowWelcomePopup() {
        return this._showWelcomePopup;
      }
      static setShowWelcomePopup() {
        (this._showWelcomePopup = !1), i.a.storage.local.set({ ShowWelcomePopup: !1 });
      }
      static setAutoPauseEnabled(e) {
        (this._autopauseenabled = e), i.a.storage.local.set({ AutoPauseEnabled: this._autopauseenabled });
      }
      static getAutoPauseEnabled() {
        return this._autopauseenabled;
      }
      static getAllAutoPauseData() {
        return this._autopausedata;
      }
      static getAutoPauseData(e) {
        const t = o.a.getDomainName(e);
        if (!t) return null;
        for (let e = 0; e < this._autopausedata.length; ++e) {
          if (t.endsWith(this._autopausedata[e].Url)) return this._autopausedata[e];
          if (this._autopausedata[e].Url.endsWith(t))
            return (this._autopausedata[e].Url = t), i.a.storage.local.set({ AutoPausedUrls: this._autopausedata }), this._autopausedata[e];
        }
        return null;
      }
      static setAutoPauseData(e, t, s, a) {
        const n = o.a.getDomainName(e);
        if (null === n || void 0 === n) return;
        const d = r.getAutoPauseData(e);
        if (null === d) {
          const e = { BandWidthSaved: s, IsWhiteListed: void 0 !== a && a, Url: n, VideosPaused: t, UserModified: !1 };
          this._autopausedata.push(e);
        } else (d.BandWidthSaved += s), (d.VideosPaused += t), void 0 !== a && ((d.IsWhiteListed = a), (d.UserModified = !0));
        i.a.storage.local.set({ AutoPausedUrls: this._autopausedata });
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
        i.a.storage.local.get(e, (s) => {
          t(s[e]);
        });
      }
    }
  },
  function (e, t, s) {
    "use strict";
    s.d(t, "a", function () {
      return a;
    }),
      s.d(t, "b", function () {
        return i;
      });
    const a = {
        UseNativeLogger: "UseNativeLogger",
        ClickPlayInterval: 4e3,
        BannerId: "webboost_bannerid",
        VideoId: "webboost_videoid",
        UserPlayed: "webboost_userplayed",
        ProcessedVideo: "webboost_processed",
        FoundPaused: "webboost_found_paused"
      },
      i = { LogMsg: 6, AggregateData: 11, Telemetry: 14 };
  },
  function (e, t, s) {
    "use strict";
    t.a = { logger: null, isLive: !1 };
  },
  function (e, t, s) {
    "use strict";
    var a = s(1),
      i = s(3),
      o = s(9);
    class n {
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
      d = s(4);
    s.d(t, "a", function () {
      return l;
    }),
      s.d(t, "b", function () {
        return c;
      });
    class l {
      static isInArray(e, t) {
        for (let s = 0; s < e.length; ++s) if (e[s] === t) return !0;
        return !1;
      }
      static resetTabData(e) {
        a.a.TabDataList.set(e, new n()), this.updateBadge(e);
      }
      static updateBadge(e) {
        let t = "";
        const s = a.a.TabDataList.get(e);
        s._videosPaused > 0 && (t = s._videosPaused.toString()), r.a.action.setBadgeText({ text: t, tabId: e });
      }
      static getDomainName(e) {
        return o.a.getDomainName(e);
      }
      static setAutoPauseData(e, t, s, o) {
        i.a.setAutoPauseData(e, t, s, o);
        const n = l.getDomainName(e);
        if ("" === n || void 0 === n || null === n) return;
        const c = [{ UniqueIdentifier: "WebBoost.Video.Pause" }, { "Event.Value": t }, { "Event.Label": n }, { Metric1: s }],
          u = { extension_id: r.a.runtime.id, payload: c };
        a.a.waClient.postMessage({ id: 0, request_type: d.b.AggregateData, payload: u });
      }
      static isWhitelisted(e) {
        a.a.logger.log(`Checking whether url ${e} is whitelisted`);
        const t = i.a.getAutoPauseData(e);
        return null !== t && t.IsWhiteListed;
      }
    }
    const c = function (e) {
      const t = e.getBoundingClientRect(),
        s = window.pageYOffset,
        a = window.pageXOffset;
      return { top: Math.round(t.top + s), left: Math.round(t.left + a), bottom: Math.round(t.bottom + s), right: Math.round(t.right + a) };
    };
  },
  function (e, t, s) {
    "use strict";
    s.d(t, "a", function () {
      return n;
    });
    var a = s(2),
      i = s(5),
      o = s(0);
    class n {
      static addVideoForResponseCaching(e) {
        o.a.runtime.sendMessage({ action: a.a.AddResponseCaching, src: e });
      }
      static blockVideo(e, t) {
        o.a.runtime.sendMessage({ action: a.a.Block, src: e }, t);
      }
      static unblockVideo(e, t) {
        o.a.runtime.sendMessage({ action: a.a.Clear, src: e }, t);
      }
      static setUserLastClickDetails(e, t) {
        o.a.runtime.sendMessage({ action: a.a.SetUserLastClickDetails, time: e, coordinates: t });
      }
      static getUserLastClickDetails(e) {
        o.a.runtime.sendMessage({ action: a.a.GetUserLastClickDetails }, e);
      }
      static isWhitelisted(e, t) {
        o.a.runtime.sendMessage({ action: a.a.IsWhitelisted, src: e }, t);
      }
      static isAutoPauseEnabled(e) {
        o.a.runtime.sendMessage({ action: a.a.IsAutoPauseEnabled }, e);
      }
      static sendTelemetry(e) {
        o.a.runtime.sendMessage({ action: a.a.SendTelemetry, telemetry: e });
      }
      static logMsg(e) {
        o.a.runtime.sendMessage({ action: a.a.LogMsg, logDetails: e });
      }
      static getBackgroundGlobals(e) {
        o.a.runtime.sendMessage({ action: a.a.GetBackgroundGlobals }, e);
      }
      static init() {
        o.a.runtime.onMessage.addListener((e, t, s) => {
          switch (e.request_type) {
            case a.a.LiveVideoFound:
              i.a.logger.log("Found live video"), (i.a.isLive = !0);
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
      return a;
    });
    class a {
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
    var a = s(8),
      i = s(7);
    class o {
      static getBrowserTypes() {
        return { unknown: -1, firefox: 1, chrome: 2, ironSource: 3, edge: 4 };
      }
      static toBrowserTypeInt(e) {
        return this.getBrowserTypes()[e];
      }
    }
    var n = s(3),
      r = s(1),
      d = s(4);
    s.d(t, "a", function () {
      return l;
    });
    class l {
      constructor(e) {
        (this.logLevel = e),
          (this.nativeLoggingEnabled = !1),
          (this.processType = -1),
          (this.browserType = o.toBrowserTypeInt("chrome")),
          (this.extensionType = "wb"),
          n.a.get("ExtensionLogging", (e) => {
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
            logLevel: a.a.Info,
            msg: e
          };
          0 === this.processType
            ? i.a.logMsg(t)
            : r.a.waClient.postMessage({
                id: 0,
                request_type: d.b.LogMsg,
                payload: {
                  process_type: 0 === this.processType ? "ct" : "bg",
                  browser_tpe: this.browserType,
                  extension_type: this.extensionType,
                  logLevel: a.a.Info,
                  msg: e
                }
              });
        }
        if (a.a.Info && this.logLevel) {
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
            logLevel: a.a.Err,
            msg: e
          };
          0 === this.processType
            ? i.a.logMsg(t)
            : r.a.waClient.postMessage({
                id: 0,
                request_type: d.b.LogMsg,
                payload: {
                  process_type: 0 === this.processType ? "ct" : "bg",
                  browser_tpe: this.browserType,
                  extension_type: this.extensionType,
                  logLevel: a.a.Info,
                  msg: e
                }
              });
        }
        if (a.a.Err && this.logLevel) {
          const t = new Date();
          console.error(`${t.toLocaleString()} ${e}`);
        }
      }
      logLocal(e) {
        if (a.a.Info && this.logLevel) {
          const t = new Date();
          console.log(`${t.toLocaleString()} ${e}`);
        }
      }
    }
  },
  function (e, t, s) {
    "use strict";
    s.r(t);
    var a = s(7),
      i = s(5),
      o = s(4);
    var n = function () {
      (this.elements = {}),
        (this.elements._event_name = "WebBoost_Banner_Clicked"),
        (this.serialize = function () {
          return JSON.stringify(this.elements);
        });
    };
    class r {
      static playVideo(e, t) {
        if ("true" === e.getAttribute(o.a.UserPlayed)) return;
        e.setAttribute(o.a.UserPlayed, "true");
        const s = new n().serialize();
        a.a.sendTelemetry(s);
        const r = e.src.length > 0 ? e.src : e.currentSrc;
        a.a.unblockVideo(r, () => {
          e.play()
            .then(() => {
              void 0 !== t && t();
            })
            .catch((s) => {
              i.a.logger.error(`Failed to play video${s}`),
                e.load(),
                (e.oncanplay = function () {
                  e.play(), void 0 !== t && t();
                });
            });
        });
      }
    }
    var d = s(6),
      l = s(0);
    class c {
      constructor() {
        this.bannerIdCount = 0;
      }
      showBanner(e) {
        if (null !== e.getAttribute(o.a.VideoId)) return;
        if (0 === e.offsetWidth || 0 === e.offsetHeight) return;
        const t = this.bannerIdCount;
        (this.bannerIdCount += 1), this.bannerIdCount >= 1e3 && (this.bannerIdCount = 0);
        const s = l.a.runtime.getURL("images/video-notification-banner.png"),
          a = e.offsetWidth < 300 ? e.offsetWidth - 20 : 280,
          n = Math.floor(a / 6.4),
          d = document.createElement("div"),
          c = document.createElement("div");
        (c.style = `height: 100%; background-image: url(${s}); background-repeat: no-repeat; background-size: contain; display: flex; align-items: center; padding-right: 10px; padding-left: ${
          n + 3
        }px; font-family: Arial, Helvetica, sans-serif; font-size: ${0.05 * a}px; color: #fff`),
          (c.innerHTML = l.a.i18n.getMessage("banner_Text")),
          d.setAttribute("class", "Pc_Booster_Auto_Play_Tab_Banner"),
          d.setAttribute(o.a.BannerId, t),
          d.append(c),
          this._setBannerStyles(d, a, n, e),
          d.addEventListener("click", () => {
            i.a.logger.log("User clicked on banner to play video"), r.playVideo(e), d.remove();
          }),
          document.querySelector("body").appendChild(d),
          window.addEventListener(
            "resize",
            () => {
              this._updateBannerPosition(d, e);
            },
            !1
          ),
          window.addEventListener(
            "scroll",
            () => {
              this._updateBannerPosition(d, e);
            },
            !1
          ),
          e.setAttribute(o.a.VideoId, t);
      }
      _setBannerStyles(e, t, s, a) {
        const { top: i, left: o } = this._getTopLeftCoordinates(a);
        e.style = `width: ${t}px; height: ${s}px; margin:10px; position: absolute; top:${i}px; left:${o}px; z-index:2147483647; cursor:pointer; opacity: 0.85;`;
      }
      _updateBannerPosition(e, t) {
        const { top: s, left: a } = this._getTopLeftCoordinates(t);
        t.offsetWidth < 300
          ? ((e.style.width = `${t.offsetWidth - 20}px`), (e.style.top = `${s}px`), (e.style.left = `${a}px`))
          : ((e.style.width = "280px"), (e.style.top = `${s}px`), (e.style.left = `${a}px`));
      }
      _getTopLeftCoordinates(e) {
        let { top: t, left: s } = Object(d.b)(e);
        return t < 0 && (t = 0), s < 0 && (s = 0), { top: t, left: s };
      }
    }
    var u = function () {
      (this.elements = {}),
        (this.elements._event_name = "WebBoost_Video_Paused"),
        (this.serialize = function () {
          return JSON.stringify(this.elements);
        });
    };
    const h = { HAVE_NOTHING: 0, HAVE_METADATA: 1, HAVE_CURRENT_DATA: 2, HAVE_FUTURE_DATA: 3, HAVE_ENOUGH_DATA: 4 };
    class g {
      _onplay(e) {
        const t = e.src.length > 0 ? e.src : e.currentSrc;
        "true" !== e.getAttribute(o.a.UserPlayed)
          ? (t.length > 0 && a.a.addVideoForResponseCaching(t),
            a.a.getUserLastClickDetails((s) => {
              const a = void 0 === s.lastClickTime ? 0 : s.lastClickTime,
                n = Date.now() - a;
              if (
                (i.a.logger.log(`time passed since user last clicked = ${n}ms`),
                n <= o.a.ClickPlayInterval || "true" === e.getAttribute(o.a.FoundPaused))
              ) {
                const { top: a, left: n, bottom: r, right: l } = Object(d.b)(e);
                if (
                  s.lastClickCoordinates.x > n &&
                  s.lastClickCoordinates.x < l &&
                  s.lastClickCoordinates.y > a &&
                  s.lastClickCoordinates.y < r + 60
                )
                  return (
                    i.a.logger.log(`onPlay: within 4 secs of click and click is inside video, user initiated to play video - ${t}`),
                    e.setAttribute(o.a.UserPlayed, "true"),
                    void this._removeVideoElement(e)
                  );
              }
              null === e.getAttribute(o.a.VideoId) ? this._pauseVideo(e) : e.pause();
            }))
          : i.a.logger.log(`onPlay: user initiated to play video - ${t}`);
      }
      _handlePlay(e) {
        e.addEventListener("play", () => {
          this._onplay(e);
        });
      }
      _pauseVideo(e) {
        const t = i.a.isLive ? 5e3 : 1e3;
        setTimeout(() => {
          if (e.paused) return;
          (e.autoplay = !1), e.pause(), this.bannerHandler.showBanner(e);
          const t = e.src.length > 0 ? e.src : e.currentSrc;
          a.a.blockVideo(t);
          const s = new u().serialize();
          a.a.sendTelemetry(s);
        }, t);
      }
      _listenToClickEvents(e) {
        let t;
        (t = e.parentNode ? e.parentNode : e).addEventListener("click", () => {
          i.a.logger.log("User clicked on video to play video"),
            r.playVideo(e, () => {
              this._removeVideoElement(e);
            });
        });
      }
      _processVideoElement(e) {
        "true" !== e.getAttribute(o.a.ProcessedVideo) &&
          (e.paused && (i.a.logger.log("Video is originally paused"), e.setAttribute(o.a.FoundPaused, "true")),
          this._listenToClickEvents(e),
          e.setAttribute(o.a.ProcessedVideo, "true"),
          e.currentTime > 0 && !1 === e.paused && !1 === e.ended && e.readyState > h.HAVE_CURRENT_DATA && this._onplay(e),
          this._handlePlay(e));
      }
      _removeVideoElement(e) {
        const t = this._queryBannerNode(e);
        if (null !== t) {
          t.remove();
          const s = e.src.length > 0 ? e.src : e.currentSrc;
          a.a.unblockVideo(s);
        }
      }
      _queryBannerNode(e) {
        const t = e.getAttribute(o.a.VideoId);
        return document.querySelector(`div[${o.a.BannerId}="${t}"]`);
      }
      _recursiveProcess(e) {
        e instanceof HTMLVideoElement && this._processVideoElement(e);
        for (let t = 0; t < e.childNodes.length; ++t) this._recursiveProcess(e.childNodes[t]);
      }
      _recursiveRemove(e) {
        e instanceof HTMLVideoElement && this._removeVideoElement(e);
        for (let t = 0; t < e.childNodes.length; ++t) this._recursiveRemove(e.childNodes[t]);
      }
      processLoadedElements() {
        const e = document.querySelectorAll("video");
        for (let t = 0; t < e.length; ++t) this._processVideoElement(e[t]);
      }
      init() {
        (this.bannerHandler = new c()),
          new MutationObserver((e) => {
            for (const t of e) {
              for (const e of t.addedNodes) this._recursiveProcess(e);
              for (const e of t.removedNodes) this._recursiveRemove(e);
            }
          }).observe(document.body, { childList: !0, subtree: !0 });
      }
    }
    var p = s(10);
    new (class {
      start() {
        (i.a.logger = new p.a(0)),
          a.a.getBackgroundGlobals((e) => {
            e.useNativeLogger && i.a.logger.setNativeLoggingEnabled(!0, 0);
          }),
          a.a.init(),
          window.addEventListener("click", this._setUserLastClickDetails, !0),
          (this._mutationobserver = new g()),
          this._mutationobserver.init(),
          this._mutationobserver.processLoadedElements();
      }
      _setUserLastClickDetails(e) {
        const t = Date.now(),
          s = { x: e.pageX, y: e.pageY };
        a.a.setUserLastClickDetails(t, s);
      }
    })().start();
  }
]);
//# sourceMappingURL=../sourceMap/chrome/content.map
