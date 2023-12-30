"use strict";
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [3413],
  {
    635595: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(173106),
        n = r(381080),
        i = r(730523),
        a = r(215876),
        s = r(63093),
        c = r(536172);
      t.config = {
        commands: {
          abortDeviceLimitFlow: { handler: c.abortDeviceLimitFlow },
          loginViaSSO: { handler: o.loginViaSSO },
          unlinkPreviousDevice: { handler: i.unlinkPreviousDevice },
          unlinkMultipleDevices: { handler: a.unlinkMultipleDevices }
        },
        queries: { getLoginDeviceLimitFlow: { selector: n.viewedLoginDeviceLimitFlowSelector } },
        liveQueries: { liveLoginDeviceLimitFlow: { operator: s.loginDeviceLimitFlowView$ } }
      };
    },
    34034: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.unlinkMultipleDevicesErrorReached =
          t.multipleDevicesLimitStillReached =
          t.oneDeviceLimitStillReached =
          t.sessionOpenedAfterDeviceLimitRemoval =
          t.refreshDeviceLimitStatusFailed =
          t.deviceLimitRemoved =
          t.deviceLimitStatusUpdated =
          t.unlinkingSucceeded =
          t.unlinkingFailed =
          t.unlinkingMultipleDevicesRequested =
          t.unlinkPreviousDeviceRequested =
          t.multipleDevicesLimitReached =
          t.oneDeviceLimitReached =
          t.UNLINK_MULTIPLE_DEVICES_ERROR =
          t.UNLINKING_SUCCEEDED =
          t.UNLINKING_FAILED =
          t.UNLINK_MULTIPLE_DEVICES_REQUESTED =
          t.UNLINK_PREVIOUS_DEVICE_REQUESTED =
          t.SESSION_OPENED_AFTER_DEVICE_LIMIT_REMOVAL =
          t.REFRESH_DEVICE_LIMIT_STATUS_FAILED =
          t.MULTIPLE_DEVICES_LIMIT_STILL_REACHED =
          t.MULTIPLE_DEVICES_LIMIT_REACHED =
          t.ONE_DEVICE_LIMIT_STILL_REACHED =
          t.ONE_DEVICE_LIMIT_REACHED =
          t.DEVICE_LIMIT_STATUS_UPDATED =
          t.DEVICE_LIMIT_REMOVED =
            void 0),
        (t.DEVICE_LIMIT_REMOVED = "DEVICE_LIMIT_REMOVED"),
        (t.DEVICE_LIMIT_STATUS_UPDATED = "DEVICE_LIMIT_STATUS_UPDATED"),
        (t.ONE_DEVICE_LIMIT_REACHED = "ONE_DEVICE_LIMIT_REACHED"),
        (t.ONE_DEVICE_LIMIT_STILL_REACHED = "ONE_DEVICE_LIMIT_STILL_REACHED"),
        (t.MULTIPLE_DEVICES_LIMIT_REACHED = "MULTIPLE_DEVICES_LIMIT_REACHED"),
        (t.MULTIPLE_DEVICES_LIMIT_STILL_REACHED = "MULTIPLE_DEVICES_LIMIT_STILL_REACHED"),
        (t.REFRESH_DEVICE_LIMIT_STATUS_FAILED = "REFRESH_DEVICE_LIMIT_STATUS_FAILED"),
        (t.SESSION_OPENED_AFTER_DEVICE_LIMIT_REMOVAL = "SESSION_OPENED_AFTER_DEVICE_LIMIT_REMOVAL"),
        (t.UNLINK_PREVIOUS_DEVICE_REQUESTED = "UNLINK_PREVIOUS_DEVICE_REQUESTED"),
        (t.UNLINK_MULTIPLE_DEVICES_REQUESTED = "UNLINK_MULTIPLE_DEVICES_REQUESTED"),
        (t.UNLINKING_FAILED = "UNLINKING_FAILED"),
        (t.UNLINKING_SUCCEEDED = "UNLINKING_SUCCEEDED"),
        (t.UNLINK_MULTIPLE_DEVICES_ERROR = "UNLINK_MULTIPLE_DEVICES_ERROR"),
        (t.oneDeviceLimitReached = (e) => ({
          type: t.ONE_DEVICE_LIMIT_REACHED,
          deviceLimitStatus: e.deviceLimitStatus,
          login: e.login,
          subscriptionCode: e.subscriptionCode
        })),
        (t.multipleDevicesLimitReached = (e) => ({
          type: t.MULTIPLE_DEVICES_LIMIT_REACHED,
          deviceLimitStatus: e.deviceLimitStatus,
          login: e.login,
          subscriptionCode: e.subscriptionCode
        })),
        (t.unlinkPreviousDeviceRequested = () => ({ type: t.UNLINK_PREVIOUS_DEVICE_REQUESTED })),
        (t.unlinkingMultipleDevicesRequested = () => ({ type: t.UNLINK_MULTIPLE_DEVICES_REQUESTED })),
        (t.unlinkingFailed = () => ({ type: t.UNLINKING_FAILED })),
        (t.unlinkingSucceeded = () => ({ type: t.UNLINKING_SUCCEEDED })),
        (t.deviceLimitStatusUpdated = () => ({ type: t.DEVICE_LIMIT_STATUS_UPDATED })),
        (t.deviceLimitRemoved = () => ({ type: t.DEVICE_LIMIT_REMOVED })),
        (t.refreshDeviceLimitStatusFailed = () => ({ type: t.REFRESH_DEVICE_LIMIT_STATUS_FAILED })),
        (t.sessionOpenedAfterDeviceLimitRemoval = () => ({ type: t.SESSION_OPENED_AFTER_DEVICE_LIMIT_REMOVAL })),
        (t.oneDeviceLimitStillReached = (e) => ({
          type: t.ONE_DEVICE_LIMIT_STILL_REACHED,
          updatedDeviceLimitStatus: e.updatedDeviceLimitStatus
        })),
        (t.multipleDevicesLimitStillReached = (e) => ({
          type: t.MULTIPLE_DEVICES_LIMIT_STILL_REACHED,
          updatedDeviceLimitStatus: e.updatedDeviceLimitStatus
        })),
        (t.unlinkMultipleDevicesErrorReached = (e) => ({ type: t.UNLINK_MULTIPLE_DEVICES_ERROR, retryPayload: e.retryPayload }));
    },
    115868: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyLoginDeviceLimitFlowState = void 0);
      const o = r(34034),
        n = r(710984),
        i = r(17825),
        a = r(453576),
        s = (e, t) =>
          t.type === o.ONE_DEVICE_LIMIT_REACHED
            ? (0, n.atOneDeviceLimitReachedStage)({
                login: t.login,
                subscriptionCode: t.subscriptionCode,
                deviceLimitStatus: t.deviceLimitStatus
              })
            : t.type === o.MULTIPLE_DEVICES_LIMIT_REACHED
            ? (0, n.atMultipleDevicesLimitReachedStage)({
                login: t.login,
                subscriptionCode: t.subscriptionCode,
                deviceLimitStatus: t.deviceLimitStatus
              })
            : e,
        c = (e, t) => {
          switch (t.type) {
            case o.UNLINK_PREVIOUS_DEVICE_REQUESTED:
              return (0, n.atUnlinkingAndOpeningSessionStage)(e);
            case o.DEVICE_LIMIT_STATUS_UPDATED:
              return (0, n.atRefreshingDeviceLimitStatusStage)(e);
          }
          return e;
        },
        d = (e, t) => {
          switch (t.type) {
            case o.UNLINK_MULTIPLE_DEVICES_REQUESTED:
              return (0, n.atUnlinkingAndOpeningSessionStage)(e);
            case o.DEVICE_LIMIT_STATUS_UPDATED:
              return (0, n.atRefreshingDeviceLimitStatusStage)(e);
          }
          return e;
        },
        l = (e, t) => {
          switch (t.type) {
            case o.UNLINK_MULTIPLE_DEVICES_ERROR:
              return (0, n.atUnlinkMultipleDevicesErrorStage)({ ...e, retryPayload: t.retryPayload });
            case o.UNLINK_MULTIPLE_DEVICES_REQUESTED:
              return (0, n.atUnlinkingAndOpeningSessionStage)(e);
            case o.UNLINKING_SUCCEEDED:
              return (0, n.atDeviceLimitDoneStage)(e);
          }
          return e;
        },
        u = (e) => {
          const { deviceLimitStatus: t } = e;
          switch (t._tag) {
            case "limitedToOneDevice":
              return (0, n.atOneDeviceLimitReachedStage)({ ...e, deviceLimitStatus: t });
            case "limitedToMultipleDevices":
              return (0, n.atMultipleDevicesLimitReachedStage)({ ...e, deviceLimitStatus: t });
            default:
              (0, i.assertUnreachable)(t);
          }
        },
        S = (e, t) => {
          switch (t.type) {
            case o.ONE_DEVICE_LIMIT_STILL_REACHED:
              return (0, n.atOneDeviceLimitReachedStage)({ ...e, deviceLimitStatus: t.updatedDeviceLimitStatus });
            case o.MULTIPLE_DEVICES_LIMIT_STILL_REACHED:
              return (0, n.atMultipleDevicesLimitReachedStage)({ ...e, deviceLimitStatus: t.updatedDeviceLimitStatus });
            case o.REFRESH_DEVICE_LIMIT_STATUS_FAILED:
              return u(e);
            case o.DEVICE_LIMIT_REMOVED:
              return (0, n.atOpeningSessionAfterDeviceLimitRemovalStage)(e);
          }
          return e;
        },
        p = (e, t) => {
          switch (t.type) {
            case o.UNLINKING_SUCCEEDED:
              return (0, n.atDeviceLimitDoneStage)(e);
            case o.UNLINKING_FAILED:
              return u(e);
            case o.UNLINK_MULTIPLE_DEVICES_ERROR:
              return (0, n.atUnlinkMultipleDevicesErrorStage)({ ...e, retryPayload: t.retryPayload });
          }
          return e;
        };
      (t.default = (e = { flow: null }, t) => {
        if (null === e.flow) return { flow: s(null, t) };
        switch (e.flow.name) {
          case a.LoginDeviceLimitFlowStage.OneDeviceLimitReached:
            return { flow: c(e.flow, t) };
          case a.LoginDeviceLimitFlowStage.UnlinkingMultipleDevicesError:
            return { flow: l(e.flow, t) };
          case a.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached:
            return { flow: d(e.flow, t) };
          case a.LoginDeviceLimitFlowStage.RefreshingDeviceLimitStatus:
            return { flow: S(e.flow, t) };
          case a.LoginDeviceLimitFlowStage.UnlinkingAndOpeningSession:
            return { flow: p(e.flow, t) };
          case a.LoginDeviceLimitFlowStage.OpeningSessionAfterDeviceLimitRemoval:
          case a.LoginDeviceLimitFlowStage.DeviceLimitDone:
            return e;
          default:
            return (0, i.assertUnreachable)(e.flow);
        }
      }),
        (t.getEmptyLoginDeviceLimitFlowState = function () {
          return { flow: null };
        });
    },
    536172: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.abortDeviceLimitFlow = void 0);
      const o = r(453576),
        n = r(720698),
        i = r(670252);
      t.abortDeviceLimitFlow = async function (e) {
        const { sessionService: t } = e;
        try {
          return await t.getInstance().user.closeSession(), { success: !0 };
        } catch (e) {
          const t = (0, n.augmentDeviceLimitError)(e, "abortDeviceLimitFlow");
          return (0, i.sendExceptionLog)({ error: t }), { success: !1, error: { code: o.AbortDeviceLimitFlowError.UnexpectedError } };
        }
      };
    },
    431859: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPairingGroupDevices = t.findMyPairingGroup = t.isDevicePartOfPairingGroup = t.isDesktopPlatform = void 0);
      const o = r(453576);
      (t.isDesktopPlatform = (e) =>
        e === o.Platform.DesktopLegacyWindows || e === o.Platform.DesktopLegacyMacOS || e === o.Platform.DesktopUWP),
        (t.isDevicePartOfPairingGroup = (e, t) => t.devices.includes(e.deviceId)),
        (t.findMyPairingGroup = (e, t) => e.find((e) => e.pairingGroupUUID === t)),
        (t.getPairingGroupDevices = (e, t) => t.filter(({ deviceId: t }) => e.devices.includes(t)));
    },
    932573: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDeviceInfoService = void 0);
      const o = r(401067),
        n = r(46298),
        i = r(453576),
        a = {
          [i.Platform.Android]: "server_android",
          [i.Platform.CarbonTests]: "server_carbon_tests",
          [i.Platform.CarbonUnknown]: "server_carbon_unknown",
          [i.Platform.DesktopLegacyMacOS]: "server_macosx",
          [i.Platform.DesktopLegacyWindows]: "server_win",
          [i.Platform.DesktopUWP]: "desktop_win",
          [i.Platform.IPad]: "server_ipad",
          [i.Platform.IPhone]: "server_iphone",
          [i.Platform.IPod]: "server_ipod",
          [i.Platform.StandaloneExtension]: "server_standalone",
          [i.Platform.TeamAdminConsole]: "server_tac",
          [i.Platform.WebApp]: "server_leeloo",
          [i.Platform.WebAppDev]: "server_leeloo_dev"
        },
        s = (0, o.invertObj)(a),
        c = (e) => {
          return {
            deviceId: e.deviceId,
            deviceName: e.deviceName,
            devicePlatform: ((t = e.devicePlatform), s[t]),
            lastActivityDate: e.lastActivityDateUnix,
            isBucketOwner: e.isBucketOwner,
            temporary: e.temporary
          };
          var t;
        },
        d = (e) => ({ pairingGroupUUID: e.pairingGroupUUID, devices: e.devices, isBucketOwner: e.isBucketOwner });
      t.makeDeviceInfoService = (e) => ({
        getDevicesInfo: (t) =>
          (async (e, t) => {
            const r = await n.listDevices(e, t);
            if (n.isApiError(r)) throw new Error(`Failed to get devices: ${r.message}`);
            return { devices: r.devices.map(c), pairingGroups: r.pairingGroups.map(d) };
          })(e, t)
      });
    },
    289961: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toPlatformView = void 0);
      const o = r(453576),
        n = {
          [o.Platform.Android]: o.PlatformView.Android,
          [o.Platform.CarbonTests]: o.PlatformView.Other,
          [o.Platform.CarbonUnknown]: o.PlatformView.Other,
          [o.Platform.DesktopLegacyMacOS]: o.PlatformView.DesktopMacOS,
          [o.Platform.DesktopLegacyWindows]: o.PlatformView.DesktopWindows,
          [o.Platform.DesktopUWP]: o.PlatformView.DesktopWindows,
          [o.Platform.IPad]: o.PlatformView.IPad,
          [o.Platform.IPhone]: o.PlatformView.IPhone,
          [o.Platform.IPod]: o.PlatformView.IPod,
          [o.Platform.StandaloneExtension]: o.PlatformView.StandaloneExtension,
          [o.Platform.TeamAdminConsole]: o.PlatformView.TeamAdminConsole,
          [o.Platform.WebApp]: o.PlatformView.WebApp,
          [o.Platform.WebAppDev]: o.PlatformView.WebApp
        };
      t.toPlatformView = (e) => n[e];
    },
    549154: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DeviceLimitCapabilityEventBus = void 0),
        (t.DeviceLimitCapabilityEventBus = class {
          constructor(e, t) {
            (this.services = e), (this.connector = t);
          }
          register(e) {
            const t = [];
            return (
              Object.keys(e).forEach((r) => {
                const { handler: o } = e[r],
                  n = this.connector[r].on(() => o(this.services));
                t.push(n);
              }),
              () => {
                t.forEach((e) => e());
              }
            );
          }
        });
    },
    727331: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getDeviceLimitFlowEventsManager = t.DeviceLimitFlowEventsManager = void 0);
      const o = r(235992),
        n = r(63093),
        i = r(903343);
      class a {
        constructor(e) {
          (this.registrations = []),
            e
              .getState$()
              .pipe((0, n.loginDeviceLimitFlow$)(), (0, i.pairwise)())
              .subscribe(this.onTransition.bind(this));
        }
        addEventListener(e, t) {
          const r = (0, o.v4)();
          return this.registrations.push({ id: r, event: e, listener: t }), r;
        }
        removeTransitionEventListener(e) {
          this.registrations = this.registrations.filter((t) => t.id !== e);
        }
        onTransition([e, t]) {
          this.registrations.forEach(({ event: r, listener: o }) => {
            (("exit" === r.type && r.from === e?.name) || ("entry" === r.type && r.to === t?.name)) && o(r);
          });
        }
      }
      let s;
      (t.DeviceLimitFlowEventsManager = a), (t.getDeviceLimitFlowEventsManager = (e) => (s || (s = new a(e)), s));
    },
    710984: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.atUnlinkMultipleDevicesErrorStage =
          t.atDeviceLimitDoneStage =
          t.atRefreshingDeviceLimitStatusStage =
          t.atOpeningSessionAfterDeviceLimitRemovalStage =
          t.atUnlinkingAndOpeningSessionStage =
          t.atMultipleDevicesLimitReachedStage =
          t.atOneDeviceLimitReachedStage =
            void 0);
      const o = r(453576);
      (t.atOneDeviceLimitReachedStage = (e) => ({ ...e, name: o.LoginDeviceLimitFlowStage.OneDeviceLimitReached })),
        (t.atMultipleDevicesLimitReachedStage = (e) => ({ ...e, name: o.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached })),
        (t.atUnlinkingAndOpeningSessionStage = (e) => ({ ...e, name: o.LoginDeviceLimitFlowStage.UnlinkingAndOpeningSession })),
        (t.atOpeningSessionAfterDeviceLimitRemovalStage = (e) => ({
          ...e,
          name: o.LoginDeviceLimitFlowStage.OpeningSessionAfterDeviceLimitRemoval
        })),
        (t.atRefreshingDeviceLimitStatusStage = (e) => ({ ...e, name: o.LoginDeviceLimitFlowStage.RefreshingDeviceLimitStatus })),
        (t.atDeviceLimitDoneStage = (e) => ({ ...e, name: o.LoginDeviceLimitFlowStage.DeviceLimitDone })),
        (t.atUnlinkMultipleDevicesErrorStage = (e) => ({
          ...e,
          deviceLimitStatus: e.deviceLimitStatus,
          name: o.LoginDeviceLimitFlowStage.UnlinkingMultipleDevicesError
        }));
    },
    63093: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loginDeviceLimitFlowView$ = t.loginDeviceLimitFlow$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(381080);
      (t.loginDeviceLimitFlow$ = () =>
        (0, o.pipe)(
          (0, n.map)(i.loginDeviceLimitFlowSelector),
          (0, n.distinctUntilChanged)((e, t) => e?.name === t?.name)
        )),
        (t.loginDeviceLimitFlowView$ = () =>
          (0, o.pipe)(
            (0, n.map)(i.viewedLoginDeviceLimitFlowSelector),
            (0, n.distinctUntilChanged)((e, t) => e?.name === t?.name)
          ));
    },
    381080: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewedLoginDeviceLimitFlowSelector = t.loginDeviceLimitFlowSelector = void 0);
      const o = r(746802);
      (t.loginDeviceLimitFlowSelector = (e) => e.userSession.loginDeviceLimitFlow.flow),
        (t.viewedLoginDeviceLimitFlowSelector = (e) => {
          const r = (0, t.loginDeviceLimitFlowSelector)(e);
          return r ? (0, o.toLoginDeviceLimitFlowView)(r) : null;
        });
    },
    746802: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toLoginDeviceLimitFlowView = t.toMultipleDevicesLimitErrorStageView = t.toMultipleDevicesLimitReachedStageView = void 0);
      const o = r(453576),
        n = r(735520),
        i = r(888068),
        a = r(17825);
      (t.toMultipleDevicesLimitReachedStageView = (e) => ({
        name: o.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached,
        login: e.login,
        devicesToDeactivate: e.deviceLimitStatus.devices.map(i.toDeviceToDeactivateInfoView),
        subscriptionCode: e.subscriptionCode
      })),
        (t.toMultipleDevicesLimitErrorStageView = (e) => ({
          name: o.LoginDeviceLimitFlowStage.UnlinkingMultipleDevicesError,
          login: e.login,
          retryPayload: e.retryPayload,
          subscriptionCode: e.subscriptionCode
        })),
        (t.toLoginDeviceLimitFlowView = (e) => {
          switch (e.name) {
            case o.LoginDeviceLimitFlowStage.OneDeviceLimitReached:
              return (
                (r = e),
                {
                  name: o.LoginDeviceLimitFlowStage.OneDeviceLimitReached,
                  login: r.login,
                  previousDevice: (0, n.toPreviousDeviceInfo)(r.deviceLimitStatus.bucketOwner),
                  subscriptionCode: r.subscriptionCode
                }
              );
            case o.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached:
              return (0, t.toMultipleDevicesLimitReachedStageView)(e);
            case o.LoginDeviceLimitFlowStage.UnlinkingAndOpeningSession:
            case o.LoginDeviceLimitFlowStage.DeviceLimitDone:
            case o.LoginDeviceLimitFlowStage.RefreshingDeviceLimitStatus:
            case o.LoginDeviceLimitFlowStage.OpeningSessionAfterDeviceLimitRemoval:
              return { name: e.name, login: e.login };
            case o.LoginDeviceLimitFlowStage.UnlinkingMultipleDevicesError:
              return (0, t.toMultipleDevicesLimitErrorStageView)(e);
            default:
              return (0, a.assertUnreachable)(e);
          }
          var r;
        });
    },
    85822: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.startDeviceLimitFlow = t.getDeviceLimitStatus = t.attemptGetDeviceLimitStatus = void 0);
      const o = r(416593),
        n = r(415718),
        i = r(182652),
        a = r(922589),
        s = r(932573),
        c = r(36077),
        d = r(34034),
        l = r(290622),
        u = r(656915),
        S = r(538981),
        p = r(392263),
        m = r(314656);
      (t.attemptGetDeviceLimitStatus = async (e) => {
        try {
          return await Promise.race([(0, t.getDeviceLimitStatus)(e), new Promise((e) => setTimeout(() => e((0, c.noDeviceLimit)()), 3e3))]);
        } catch (e) {
          return ((e) => {
            if (
              !(0, p.isCarbonError)(e, m.HttpError, m.HttpErrorCode.NETWORK_ERROR) &&
              !(0, p.isCarbonError)(e, m.HttpError, m.HttpErrorCode.CONNECTION_ABORTED) &&
              !(0, p.isCarbonError)(e, m.HttpError, m.HttpErrorCode.CONNECTION_TIMED_OUT)
            )
              throw e;
            return (0, c.noDeviceLimit)();
          })(e);
        }
      }),
        (t.getDeviceLimitStatus = async (e) => {
          const { storeService: t } = e,
            r = t.getState();
          if ((0, S.isSSOUserSelector)(r)) return (0, c.noDeviceLimit)();
          const d = (0, n.pairingIdSelector)(r),
            p = (0, o.premiumStatusSelector)(r),
            m = (0, o.userLoginSelector)(r),
            g = (0, s.makeDeviceInfoService)(t),
            E = await g.getDevicesInfo(m),
            A = (0, u.getDeviceIdSelector)(r, m),
            I = (0, l.deviceKeysSelector)(t.getState()),
            y = (0, i.isOneDeviceLimitApplicable)(d, E, A, p);
          if ("limitedToOneDevice" === y._tag) return (0, c.limitedToOneDevice)(y.bucketOwner);
          const v = (0, a.isMultipleDevicesLimitApplicable)(E, p, I);
          return "limitedToMultipleDevices" === v._tag ? (0, c.limitedToMultipleDevices)(v.devices) : (0, c.noDeviceLimit)();
        }),
        (t.startDeviceLimitFlow = async (e, t) => {
          const { sessionService: r, storeService: n } = e,
            i = n.getState(),
            a = (0, o.userLoginSelector)(i),
            s = r.getInstance().user,
            c = await s.fetchSubscriptionCode();
          if ("limitedToOneDevice" === t._tag) {
            const e = (0, d.oneDeviceLimitReached)({ deviceLimitStatus: t, subscriptionCode: c, login: a });
            n.dispatch(e);
          } else if ("limitedToMultipleDevices" === t._tag) {
            const e = (0, d.multipleDevicesLimitReached)({ deviceLimitStatus: t, subscriptionCode: c, login: a });
            n.dispatch(e);
          }
        });
    },
    36077: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.noDeviceLimit = t.limitedToMultipleDevices = t.limitedToOneDevice = void 0),
        (t.limitedToOneDevice = (e) => ({ _tag: "limitedToOneDevice", bucketOwner: e })),
        (t.limitedToMultipleDevices = (e) => ({ _tag: "limitedToMultipleDevices", devices: e })),
        (t.noDeviceLimit = () => ({ _tag: "noDeviceLimit" }));
    },
    175903: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshDeviceLimitStatus = void 0);
      const o = r(670252),
        n = r(188610),
        i = r(720698),
        a = r(34034),
        s = r(85822);
      t.refreshDeviceLimitStatus = async (e) => {
        const { sessionService: t, storeService: r } = e;
        try {
          const c = t.getInstance().user;
          await c.refreshSessionData();
          const d = await (0, s.getDeviceLimitStatus)(e);
          if ("noDeviceLimit" === d._tag)
            r.dispatch((0, a.deviceLimitRemoved)()),
              await (async (e) => {
                const { sessionService: t, storeService: r } = e;
                try {
                  await (0, n.sessionDidOpen)(e), r.dispatch((0, a.sessionOpenedAfterDeviceLimitRemoval)());
                } catch (r) {
                  (0, i.notifyDeviceLimitError)(e, r);
                  const n = (0, i.augmentDeviceLimitError)(r, "openSessionAfterDeviceLimitRemoval");
                  (0, o.sendExceptionLog)({ error: n }), t.close();
                }
              })(e);
          else if ("limitedToOneDevice" === d._tag) {
            const e = (0, a.oneDeviceLimitStillReached)({ updatedDeviceLimitStatus: d });
            r.dispatch(e);
          } else if ("limitedToMultipleDevices" === d._tag) {
            const e = (0, a.multipleDevicesLimitStillReached)({ updatedDeviceLimitStatus: d });
            r.dispatch(e);
          }
        } catch (e) {
          r.dispatch((0, a.refreshDeviceLimitStatusFailed)());
          const t = (0, i.augmentDeviceLimitError)(e, "refreshDeviceLimitStatus");
          (0, o.sendExceptionLog)({ error: t });
        }
      };
    },
    720698: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.augmentDeviceLimitError = t.notifyDeviceLimitError = void 0);
      const o = r(453576),
        n = r(16373),
        i = (e) => "object" == typeof e && e instanceof Error,
        a = (e) => (i(e) ? e.message : "No valid error reported");
      (t.notifyDeviceLimitError = async function (e, t) {
        const { storeService: r } = e,
          i = (0, n.addNewLoginNotification)({ type: o.LoginNotificationType.UNKNOWN_ERROR, message: a(t) });
        r.dispatch(i);
      }),
        (t.augmentDeviceLimitError = function (e, t) {
          const r = `[DeviceLimit] - ${t}: ${a(e)}`,
            o = new Error(r);
          return i(e) && (o.stack = e.stack), o;
        });
    },
    922589: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isMultipleDevicesLimitApplicable = void 0);
      const o = r(887314),
        n = (e, t) => t.lastActivityDate - e.lastActivityDate;
      t.isMultipleDevicesLimitApplicable = (e, t, r) => {
        if ((t?.capabilities?.devicesLimit?.info?.limit || 0) <= 1) return (0, o.notLimitedToMultipleDevices)();
        const { nonPairedDevices: i, pairingGroups: a } = (({ pairingGroups: e, devices: t }) => {
          const r = t.filter((t) => !e.find((e) => e.devices.includes(t.deviceId)) && t, []);
          return { pairingGroups: e, nonPairedDevices: r };
        })(e);
        if (t.capabilities.devicesLimit.info.limit < i.length + a.length) {
          const t = (({ pairingGroups: e, devices: t, nonPairedDevices: r, deviceKeys: o }) => {
            const i = [...t].sort(n),
              a = [];
            for (const r of e) {
              let e;
              (e = r.devices.includes(o?.accessKey)
                ? { ...t.find((e) => e.deviceId === o?.accessKey), isCurrentDevice: !0 }
                : i.find((e) => r.devices.includes(e.deviceId))),
                a.push({ ...e, deviceId: r.pairingGroupUUID, isPairingGroup: !0 });
            }
            const s = r.map((e) => (e.deviceId === o?.accessKey ? { ...e, isCurrentDevice: !0 } : e));
            return [...a, ...s].sort(n);
          })({ devices: e.devices, nonPairedDevices: i, pairingGroups: a, deviceKeys: r });
          return (0, o.limitedToMultipleDevices)(t);
        }
        return (0, o.notLimitedToMultipleDevices)();
      };
    },
    887314: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.limitedToMultipleDevices = t.notLimitedToMultipleDevices = void 0),
        (t.notLimitedToMultipleDevices = () => ({ _tag: "notLimitedToMultipleDevices" })),
        (t.limitedToMultipleDevices = (e) => ({ _tag: "limitedToMultipleDevices", devices: e }));
    },
    888068: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toDeviceToDeactivateInfoView = void 0);
      const o = r(453576),
        n = r(289961);
      t.toDeviceToDeactivateInfoView = (e) => ({
        ...e,
        platform: e.devicePlatform ? (0, n.toPlatformView)(e.devicePlatform) : o.PlatformView.Other
      });
    },
    182652: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getMonoBucketOwner = t.isOneDeviceLimitApplicable = void 0);
      const o = r(401067),
        n = r(431859),
        i = r(44179);
      function a(e) {
        const { devices: t, pairingGroups: r } = e;
        let i = null,
          a = t.find((e) => e.isBucketOwner) ?? null;
        if (!a && ((i = r.find((e) => e.isBucketOwner) ?? null), i)) {
          const e = (0, n.getPairingGroupDevices)(i, t),
            r = (e, t) => e.lastActivityDate - t.lastActivityDate;
          e.sort(r);
          const s = (e) => Boolean(e.devicePlatform && (0, n.isDesktopPlatform)(e.devicePlatform)),
            c = (0, o.partition)(s, e);
          a = (0, o.unnest)(c)[0] || null;
        }
        return { bucketOwner: a, bucketOwnerPairingGroup: i };
      }
      (t.isOneDeviceLimitApplicable = function (e, t, r, o) {
        const { bucketOwner: s, bucketOwnerPairingGroup: c } = a(t),
          { pairingGroups: d } = t;
        if (!Boolean(1 === o?.capabilities?.devicesLimit?.info?.limit)) return (0, i.notLimitedToOneDevice)();
        const l = !(!c || !e) && c.pairingGroupUUID === e,
          u = (0, n.findMyPairingGroup)(d, e ?? ""),
          S = !(!s || !u) && (0, n.isDevicePartOfPairingGroup)(s, u);
        return !s || s.deviceId === r || l || S ? (0, i.notLimitedToOneDevice)() : (0, i.limitedToOneDevice)(s);
      }),
        (t.getMonoBucketOwner = a);
    },
    44179: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notLimitedToOneDevice = t.limitedToOneDevice = void 0),
        (t.limitedToOneDevice = (e) => ({ _tag: "limitedToOneDevice", bucketOwner: e })),
        (t.notLimitedToOneDevice = () => ({ _tag: "notLimitedToOneDevice" }));
    },
    735520: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toPreviousDeviceInfo = void 0);
      const o = r(453576),
        n = r(289961);
      t.toPreviousDeviceInfo = ({ deviceName: e, devicePlatform: t, lastActivityDate: r }) => ({
        name: e ?? "",
        platform: t ? (0, n.toPlatformView)(t) : o.PlatformView.Other,
        lastActive: r
      });
    },
    857634: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupDeviceLimitEventBus = void 0);
      const o = r(175903),
        n = r(34034),
        i = r(453576),
        a = {
          deviceLimitCapabilityUpdated: {
            handler: (e) => {
              const t = (0, n.deviceLimitStatusUpdated)();
              e.storeService.dispatch(t), (0, o.refreshDeviceLimitStatus)(e);
            }
          }
        },
        s = { type: "entry", to: i.LoginDeviceLimitFlowStage.OneDeviceLimitReached },
        c = { type: "exit", from: i.LoginDeviceLimitFlowStage.OneDeviceLimitReached },
        d = { type: "entry", to: i.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached },
        l = { type: "exit", from: i.LoginDeviceLimitFlowStage.MultipleDevicesLimitReached };
      t.setupDeviceLimitEventBus = (e, t) => {
        let r;
        const o = () => (r = e.register(a)),
          n = () => r();
        t.addEventListener(s, o), t.addEventListener(c, n), t.addEventListener(d, o), t.addEventListener(l, n);
      };
    },
    215876: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.unlinkMultipleDevices = void 0);
      const o = r(453576),
        n = r(416593),
        i = r(46298),
        a = r(922589),
        s = r(188610),
        c = r(16373),
        d = r(932573),
        l = r(34034),
        u = r(720698),
        S = r(670252),
        p = r(290622);
      t.unlinkMultipleDevices = async (e, t) => {
        const { storeService: r, sessionService: m } = e,
          g = r.getState(),
          E = (0, n.userLoginSelector)(g);
        r.dispatch((0, l.unlinkingMultipleDevicesRequested)());
        const A = await (async (e, t, r) => {
          const { storeService: o } = e,
            n = (e) => {
              const t = (0, l.unlinkMultipleDevicesErrorReached)({ retryPayload: r });
              return o.dispatch(t), { success: !1, error: { code: e.code } };
            };
          try {
            const e = await (0, i.deactivateDevices)(o, t, r);
            if ((0, i.isApiError)(e) && e.code !== i.CLIENT_DEVICES_NOT_FOUND && e.code !== i.PAIRING_GROUPS_NOT_FOUND) return n(e);
          } catch (e) {
            return n(e);
          }
        })(e, E, t);
        if (A) return A;
        const I = await (async (e, t) => {
          const { storeService: r } = e,
            i = r.getState(),
            s = (0, n.premiumStatusSelector)(i),
            u = (0, d.makeDeviceInfoService)(r),
            S = await u.getDevicesInfo(t),
            m = (0, p.deviceKeysSelector)(r.getState()),
            g = (0, a.isMultipleDevicesLimitApplicable)(S, s, m);
          if ("limitedToMultipleDevices" === g._tag) {
            r.dispatch((0, l.deviceLimitStatusUpdated)());
            const e = (0, c.addNewLoginNotification)({
              type: o.LoginNotificationType.UNKNOWN_ERROR,
              message: `${o.USER_STILL_OVERFLOWING}`
            });
            r.dispatch(e);
            const t = (0, l.multipleDevicesLimitStillReached)({
              updatedDeviceLimitStatus: { _tag: "limitedToMultipleDevices", devices: g.devices }
            });
            return r.dispatch(t), { success: !1, error: { code: o.USER_STILL_OVERFLOWING } };
          }
          return !1;
        })(e, E);
        if (I) return I;
        try {
          return await (0, s.sessionDidOpen)(e), r.dispatch((0, l.unlinkingSucceeded)()), { success: !0 };
        } catch (t) {
          return (
            m.close(),
            (0, u.notifyDeviceLimitError)(e, t),
            r.dispatch((0, l.unlinkingFailed)()),
            (0, S.sendExceptionLog)({ error: (0, u.augmentDeviceLimitError)(t, "unlinkMultipleDevices") }),
            { success: !1, error: { code: o.UNEXPECTED_ERROR } }
          );
        }
      };
    },
    730523: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.unlinkPreviousDevice = void 0);
      const o = r(188610),
        n = r(34034),
        i = r(720698),
        a = r(670252),
        s = r(453576);
      t.unlinkPreviousDevice = async function (e) {
        const { storeService: t } = e;
        try {
          return (
            t.dispatch((0, n.unlinkPreviousDeviceRequested)()),
            await (0, o.sessionDidOpen)(e),
            t.dispatch((0, n.unlinkingSucceeded)()),
            { success: !0 }
          );
        } catch (r) {
          t.dispatch((0, n.unlinkingFailed)()), (0, i.notifyDeviceLimitError)(e, r);
          const o = (0, i.augmentDeviceLimitError)(r, "unlinkPreviousDevice");
          return (0, a.sendExceptionLog)({ error: o }), { success: !1, error: { code: s.UnlinkPreviousDeviceError.UnexpectedError } };
        }
      };
    },
    188610: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DifferentLoginAuthorized =
          t.sessionDidOpen =
          t.openSessionWithMasterPassword =
          t.updateSessionUponLoginAction =
          t.makeLoginController =
            void 0);
      const o = r(660765),
        n = r(453576),
        i = r(453576),
        a = r(958639),
        s = r(770414),
        c = r(628287),
        d = r(189160),
        l = r(958639),
        u = r(816356),
        S = r(586797),
        p = r(259489),
        m = r(802246),
        g = r(25576),
        E = r(405464),
        A = r(976089),
        I = r(428445),
        y = r(164910),
        v = r(133769),
        T = r(719399),
        _ = r(656915),
        f = r(862844),
        C = r(552653),
        O = r(275226),
        h = r(471938),
        D = r(963739),
        R = r(200658),
        N = r(515606),
        P = r(416593),
        L = r(538981),
        U = r(429303),
        M = r(727885),
        B = r(361740),
        G = r(807624),
        w = r(17825),
        b = r(769763),
        k = r(415718),
        F = r(85822),
        K = r(861259),
        V = r(235924),
        z = r(46298),
        H = r(798226),
        j = r(25421);
      async function W(e, t, r, o) {
        const { storeService: n, sessionService: a } = e;
        if (ie(n)) throw new Error(i.AuthenticationCode[i.AuthenticationCode.SESSION_ALREADY_OPENED]);
        if ("" === t) throw new Error(i.AuthenticationCode[i.AuthenticationCode.EMPTY_LOGIN]);
        if (!(0, I.isValidLogin)(t)) throw new Error(i.AuthenticationCode[i.AuthenticationCode.INVALID_LOGIN]);
        if ((n.dispatch((0, V.updateLoginStepInfoLogin)(t)), "" === r))
          throw new Error(i.AuthenticationCode[i.AuthenticationCode.EMPTY_MASTER_PASSWORD]);
        let s = ce.FORBIDDEN;
        if (
          (o && void 0 !== o.authorizeDifferentLogin && (s = o.authorizeDifferentLogin),
          n.getUserLogin() && n.getUserLogin() !== t && (n.isAuthenticated() && (await a.close()), s === ce.FORBIDDEN))
        )
          throw new Error(i.AuthenticationCode[i.AuthenticationCode.DIFFERENT_LOGIN_PROVIDED_WITH_TOKEN_OR_OTP]);
        n.hasSessionId() && n.getUserLogin() === t && r && n.dispatch((0, u.updateMasterPassword)(r));
        const c = o && o.serverKey;
        if ((c && n.dispatch((0, u.updateServerKey)(c)), n.getUserLogin() !== t || void 0 === r)) {
          const e = (0, L.ssoSettingsSelector)(n.getState());
          await a.close(), a.setInstance(t, r), e.ssoToken && n.dispatch((0, G.storeSSOSettings)(e));
        }
      }
      async function x(e, t, r, o, a, c, d) {
        try {
          const { storeService: u, sessionService: S } = e,
            p = (0, I.normalizeEmail)(t);
          if ((await W(e, p, r), await ae(o), await S.getInstance().user.accountExistsLocally()))
            throw new Error("Unexpected local account presence during OTP1 step");
          if ((await s.registerDeviceWithToken(u, a, (0, g.makeOTP)(o), d ?? !1, c)) !== i.AuthenticationCode.ASK_MASTER_PASSWORD)
            throw new Error("unexpected status from device registration");
          return r ? Y(e, p, r, { isDataPersisted: a }) : (l.triggerAskMasterPassword(p), n.LoginResultEnum.MasterPasswordMissing);
        } catch (t) {
          throw (re(t) && (0, R.sendOTPForNewDeviceErrorLog)(e, d), l.triggerOpenSessionFailed(t), t);
        }
      }
      async function Y(e, t, r, o, a) {
        try {
          const {
            storeService: c,
            sessionService: l,
            masterPasswordEncryptorService: S,
            localDataEncryptorService: p,
            remoteDataEncryptorService: m,
            localStorageService: E
          } = e;
          let A = o && o.isDataPersisted;
          a?.(`isDataPersisted? ${A}`), void 0 === A && (A = c.getAccountInfo().persistData);
          const T = o && o.serverKey;
          a?.(`serverKey null, undefined, or empty? ${!T}`);
          const _ = Boolean(o && o.rememberMasterPassword);
          a?.(`rememberMasterPassword? ${_}`);
          const f = Boolean(o?.shouldRememberMeForSSO);
          (t = (0, I.normalizeEmail)(t)),
            a?.("updateSessionUponLoginAction START"),
            await W(e, t, r, { authorizeDifferentLogin: ce.AUTHORIZED, serverKey: T }),
            a?.("updateSessionUponLoginAction SUCCESS");
          const C = await l.getInstance().user.accountExistsLocally();
          if ((a?.(`accountExistLocally? ${C}`), C)) {
            const r = E.getInstance(),
              o = await r.doesLocalKeyExist();
            if ((a?.(`doesLocalKeyExist? ${o}`), o))
              try {
                const e = await r.getLocalKey();
                e.length < 64 && (a?.("localKeyMigrationRequired? true"), c.dispatch((0, u.updateIsLocalKeyMigrationRequired)(!0)));
                const t = "";
                a?.("set localDataEncryptorService START");
                const o = (0, y.getNoDerivationCryptoConfig)();
                p.setInstance({ raw: e }, t, o),
                  a?.("set localDataEncryptorService SUCCESS"),
                  a?.("updateLocalKey START"),
                  c.dispatch((0, u.updateLocalKey)(e)),
                  a?.("updateLocalKey SUCCESS");
              } catch (t) {
                throw ((0, R.sendMasterPasswordLoginErrorLog)(e, !1), new Error(i.AuthenticationCode[i.AuthenticationCode.WRONG_PASSWORD]));
              }
            a?.("loadLocalData START"), await d.loadLocalData(l, c, S), a?.("loadLocalData SUCCESS");
          } else {
            const e = c.getState(),
              t = (0, P.isRemoteKeyActivatedSelector)(e) && m ? m : S;
            a?.("validateMasterPassword START"), await s.validateMasterPassword(c, t), a?.("validateMasterPassword SUCCESS");
          }
          return (
            a?.("rememberMasterPasswordUpdated START"),
            o?.rememberMasterPassword && c.dispatch((0, u.rememberMasterPasswordUpdated)(_)),
            a?.("rememberMasterPasswordUpdated SUCCESS"),
            f && c.dispatch((0, u.shouldRememberMeForSSOUpdated)(f)),
            C
              ? (a?.("initLocalSession START"),
                (0, R.sendLoginSuccessEventLog)({
                  services: e,
                  isInitial: !1,
                  isSsoLogin: o?.isSsoLogin,
                  rememberMeType: o?.triggeredByRememberMeType ?? "disabled"
                }),
                await (async function (e, t) {
                  const { sessionService: r, storeService: o, localDataEncryptorService: i } = e,
                    a = r.getInstance().user,
                    s = o.getState();
                  (0, P.isLocalKeyMigrationRequiredSelector)(s) &&
                    (await (0, v.generateLocalkeyAndSetupEncryptorService)(i, o, r, g.PersistData.PERSIST_DATA_YES),
                    await a.persistAllData()),
                    await a.refreshSessionData(),
                    t?.requiredPermissions && (await $(o, r, t.requiredPermissions));
                  const c = await (0, F.attemptGetDeviceLimitStatus)(e);
                  return "noDeviceLimit" !== c._tag
                    ? (await (0, F.startDeviceLimitFlow)(e, c), n.LoginResultEnum.DeviceLimitFlow)
                    : ee(e, t);
                })(e, o))
              : (a?.("initInitialSession START"),
                (0, R.sendLoginSuccessEventLog)({ services: e, isInitial: !0, isSsoLogin: o?.isSsoLogin }),
                await J(e, A, o))
          );
        } catch (t) {
          throw (
            (t.message &&
              t.message === i.AuthenticationCode[i.AuthenticationCode.WRONG_PASSWORD] &&
              (0, R.sendMasterPasswordLoginErrorLog)(e, !0),
            l.triggerOpenSessionFailed(t),
            t)
          );
        }
      }
      (t.makeLoginController = (e) => ({
        openSession: (t, r) =>
          (async function (e, t, r) {
            const { storeService: a, sessionService: s, wsService: c, storageService: d, applicationModulesAccess: u } = e;
            t = (0, I.normalizeEmail)(t);
            try {
              const p = r && r.password;
              await W(e, t, p, { authorizeDifferentLogin: ce.AUTHORIZED });
              let m = await s.getInstance().user.accountExistsLocally();
              const E = await ne(a, d, u, c, m);
              if ("invisibleMasterPassword" === (0, j.accountAuthenticationTypeSelector)(a.getState()))
                return l.triggerOpenSessionMasterPasswordLess(), n.LoginResultEnum.MasterPasswordLess;
              switch (E) {
                case i.AuthenticationCode.SSO_LOGIN_BYPASS:
                  return (
                    (0, R.sendAskSSOAuthenticationEventLog)(e, o.VerificationMode.None),
                    l.triggerOpenSessionSsoRedirectionToIdpRequired(
                      (0, K.triggerServiceProviderUrlRedirect)(a.getState(), t),
                      (0, L.ssoProviderInfoSelector)(a.getState()).isNitroProvider
                    ),
                    n.LoginResultEnum.SSOLogin
                  );
                case i.AuthenticationCode.ASK_MASTER_PASSWORD:
                  if (!m) throw new Error("checkLogin should never return ASK_MASTER_PASSWORD for remote accounts");
                  return p
                    ? Y(e, t, p)
                    : ((0, R.sendAskAuthenticationEventLog)(e, o.VerificationMode.None),
                      a.dispatch((0, V.updateLoginStepInfoStep)(n.LoginStep.Password)),
                      l.triggerAskMasterPassword(t),
                      n.LoginResultEnum.MasterPasswordMissing);
                case i.AuthenticationCode.ASK_OTP:
                  return (
                    (0, R.sendAskAuthenticationEventLog)(e, o.VerificationMode.Otp2),
                    a.dispatch((0, V.updateLoginStepInfoStep)(n.LoginStep.OTP2)),
                    l.triggerOpenSessionOTPSent({ hasU2F: !1 }),
                    n.LoginResultEnum.OTPMissing
                  );
                case i.AuthenticationCode.ASK_OTP_FOR_NEW_DEVICE:
                  const { otpType: r } = a.getAccountInfo();
                  return (
                    (0, R.sendAskAuthenticationEventLog)(
                      e,
                      r === S.OtpType.OTP_NEW_DEVICE ? o.VerificationMode.Otp1 : o.VerificationMode.Otp2
                    ),
                    a.dispatch((0, V.updateLoginStepInfoStep)(n.LoginStep.OTP1)),
                    l.triggerOpenSessionOTPForNewDeviceRequired(),
                    n.LoginResultEnum.OTPMissing
                  );
                case i.AuthenticationCode.ASK_TOKEN:
                  if (((m = await s.getInstance().user.accountExistsLocally()), m))
                    throw new Error("Unexpected local account presence during email token step");
                  return (
                    await (0, z.requestEmailTokenVerification)(a, { login: t }),
                    (0, R.sendAskAuthenticationEventLog)(e, o.VerificationMode.EmailToken),
                    a.dispatch((0, V.updateLoginStepInfoStep)(n.LoginStep.OTPToken)),
                    l.triggerOpenSessionTokenSent({ isResendAction: !1, login: t }),
                    n.LoginResultEnum.TokenMissing
                  );
                case i.AuthenticationCode.USE_LOCAL_UKI:
                  if ((0, _.ukiSelector)(a.getState())) return J(e, g.PersistData.PERSIST_DATA_YES);
                  throw new Error(i.AuthenticationCode[i.AuthenticationCode.UNKNOWN_UKI]);
                case i.AuthenticationCode.ASK_DASHLANE_AUTHENTICATOR:
                  if (((m = await s.getInstance().user.accountExistsLocally()), m))
                    throw new Error("Unexpected local account presence during dashlane authenticator step");
                  return (
                    (0, R.sendAskAuthenticationEventLog)(e, o.VerificationMode.AuthenticatorApp),
                    a.dispatch((0, V.updateLoginStepInfoStep)(n.LoginStep.DashlaneAuthenticator)),
                    l.triggerOpenSessionDashlaneAuthenticator(),
                    n.LoginResultEnum.DashlaneAuthenticatorApprovalMissing
                  );
                default:
                  throw new Error(i.AuthenticationCode[i.AuthenticationCode.UNKNOWN_ERROR]);
              }
            } catch (e) {
              if (l.getAuthenticationCodeFromError(e) === i.AuthenticationCode.USER_DOESNT_EXIST) {
                let r;
                try {
                  r = await (0, z.requestAccountCreation)(a, { login: t });
                } catch {}
                if (void 0 !== r && !(0, z.isApiError)(r) && r.ssoServiceProviderUrl) {
                  const e = new Error(i.AuthenticationCode[i.AuthenticationCode.USER_DOESNT_EXIST_SSO]);
                  l.triggerOpenSessionFailed(e);
                } else l.triggerOpenSessionFailed(e);
              } else l.triggerOpenSessionFailed(e);
              throw e;
            }
          })(e, t, r),
        openSessionWithToken: (t, r, o, a, c) =>
          (async function (e, t, r, o, a, c) {
            try {
              const { storeService: d, sessionService: u } = e;
              if (((t = (0, I.normalizeEmail)(t)), await W(e, t, r), await se(o), await u.getInstance().user.accountExistsLocally()))
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.TOKEN_PROVIDED_FOR_LOCAL_SESSION]);
              if ((await s.registerDeviceWithToken(d, a, (0, g.makeEmailToken)(o), !1, c)) !== i.AuthenticationCode.ASK_MASTER_PASSWORD)
                throw new Error("unexpected status from verifyOtpOrToken");
              return r ? Y(e, t, r, { isDataPersisted: a }) : (l.triggerAskMasterPassword(t), n.LoginResultEnum.MasterPasswordMissing);
            } catch (t) {
              throw (re(t) && (0, R.sendEmailTokenErrorLog)(e), l.triggerOpenSessionFailed(t), t);
            }
          })(e, t, r, o, a, c),
        openSessionWithDashlaneAuthenticator: (t, r, o, a) =>
          (async function (e, t, r, o, a) {
            try {
              const { storeService: c, sessionService: d } = e;
              if (((t = (0, I.normalizeEmail)(t)), await W(e, t, r), await d.getInstance().user.accountExistsLocally()))
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.DASHLANE_AUTHENTICATOR_ASKED_FOR_LOCAL_SESSION]);
              const u = await s.registerDeviceWithDashlaneAuthenticator(c, o, a);
              if (u === i.AuthenticationCode.DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED)
                return (0, R.sendDashlaneAuthenticatorErrorLog)(e), n.LoginResultEnum.DashlaneAuthenticatorApprovalCancelled;
              if (u !== i.AuthenticationCode.ASK_MASTER_PASSWORD) throw new Error("unexpected status from verifyDashlaneAuthenticatorPush");
              return r ? Y(e, t, r, { isDataPersisted: o }) : (l.triggerAskMasterPassword(t), n.LoginResultEnum.MasterPasswordMissing);
            } catch (t) {
              oe(t) && (0, R.sendDashlaneAuthenticatorErrorLog)(e), l.triggerOpenSessionFailed(t);
            }
          })(e, t, r, o, a),
        cancelDashlaneAuthenticatorRegistration: () => s.cancelRegistrationWithDashlaneAuthenticator(),
        openSessionWithOTP: (t, r, o, a, s) =>
          (async function (e, t, r, o, a, s) {
            const { storageService: p, storeService: m, sessionService: E, applicationModulesAccess: A } = e;
            try {
              if (((t = (0, I.normalizeEmail)(t)), await W(e, t, r), await ae(o), !(await E.getInstance().user.accountExistsLocally())))
                return x(e, t, r, o, a, void 0, s);
              if ((m.dispatch((0, u.updateisUsingBackupCode)(s)), m.getAccountInfo().otpType !== S.OtpType.OTP_LOGIN))
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.OTP_PROVIDED_FOR_LOCAL_NON_OTP_SESSION]);
              const y = await (0, c.convertTokenToAuthTicket)(m, (0, g.makeOTP)(o));
              if (!1 === y.success) {
                const {
                  error: { code: e, message: t }
                } = y;
                if (e === i.AuthenticationCode.BUSINESS_ERROR) throw new Error(t);
                throw new Error(i.AuthenticationCode[e]);
              }
              const v = y.authTicket;
              if ((await d.completeLogin(m, p, A, v, s ?? !1)) !== i.AuthenticationCode.ASK_MASTER_PASSWORD)
                throw new Error("unexpected status from verifyOtpOrToken");
              return r ? Y(e, t, r, { isDataPersisted: a }) : (l.triggerAskMasterPassword(t), n.LoginResultEnum.MasterPasswordMissing);
            } catch (t) {
              if (te(t)) {
                const e = await (0, O.getLocalAccounts)(m, p);
                l.sendLocalAccounts(e);
              }
              throw (re(t) && (0, R.sendOTPErrorLog)(e, s), l.triggerOpenSessionFailed(t), t);
            }
          })(e, t, r, o, a, s),
        openSessionWithOTPForNewDevice: (t, r, o, n, i, a) => x(e, t, r, o, n, i, a),
        openSessionWithMasterPassword: (t, r, o) => Y(e, t, r, o),
        openSessionResendToken: (t) =>
          (async function (e, t) {
            await s.askServerToSendToken(e, t), l.triggerOpenSessionTokenSent({ isResendAction: !0, login: t });
          })(e.wsService, t),
        loadAccountCreationInfos: (t, r, o, n, i, a) =>
          (async function (e, t, r, o, n, i, a) {
            const s = (0, T.secureDeviceName)(o);
            await W(e, t, r),
              e.storeService.dispatch((0, C.deviceRegistered)((0, C.makeDeviceRegistrationKeys)(n.accessKey, n.secretKey), a, t)),
              e.storeService.dispatch((0, A.registerDeviceName)(s)),
              e.storeService.dispatch((0, A.registerLastSync)(i));
          })(e, t, r, o, n, i, a),
        openExtraDeviceSession: (t, r) =>
          (async function (e, t, r) {
            try {
              const { sessionService: o } = e;
              t = (0, I.normalizeEmail)(t);
              const a = r && r.password,
                s = r && r.serverKey;
              await W(e, t, a, { authorizeDifferentLogin: ce.AUTHORIZED, serverKey: s });
              const c = await o.getInstance().user.accountExistsLocally(),
                d = de(c);
              switch (d) {
                case i.AuthenticationCode.PROVIDE_EXTRA_DEVICE_TOKEN:
                  return l.triggerOpenSessionExtraDeviceTokenRequired(), n.LoginResultEnum.ExtraDeviceTokenMissing;
                case i.AuthenticationCode.ASK_MASTER_PASSWORD:
                  return a ? Y(e, t, a, { serverKey: s }) : (l.triggerAskMasterPassword(t), n.LoginResultEnum.MasterPasswordMissing);
                default:
                  (0, w.assertUnreachable)(d);
              }
            } catch (e) {
              throw (l.triggerOpenSessionFailed(e), e);
            }
          })(e, t, r),
        openSessionWithExtraDeviceToken: (t, r, o, a) =>
          (async function (e, t, r, o, a) {
            try {
              const { storeService: c, sessionService: d } = e;
              t = (0, I.normalizeEmail)(t);
              const u = a && a.password;
              if (
                (await W(e, t, u, { authorizeDifferentLogin: ce.AUTHORIZED }),
                await se(r),
                await d.getInstance().user.accountExistsLocally())
              )
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.TOKEN_PROVIDED_FOR_LOCAL_SESSION]);
              const S = a && a.deviceName;
              return (
                await s.registerDeviceWithToken(c, o, (0, g.makeExtraDeviceToken)(r), !1, S),
                u ? Y(e, t, u) : (l.triggerAskMasterPassword(t), n.LoginResultEnum.MasterPasswordMissing)
              );
            } catch (e) {
              throw (l.triggerOpenSessionFailed(e), e);
            }
          })(e, t, r, o, a)
      })),
        (t.updateSessionUponLoginAction = W),
        (t.openSessionWithMasterPassword = Y);
      const $ = async (e, t, r) => {
          const o = (0, M.hasTACAccessInCurrentSpace)(e);
          if (n.possibleAdminPermissions.includes(r) && !o)
            throw (e.isAuthenticated() && (await t.close()), new Error(i.AuthenticationCode[i.AuthenticationCode.USER_UNAUTHORIZED]));
        },
        q = async (e, t, r) => {
          const o = e.getState(),
            n = (0, k.pairingIdSelector)(o);
          l.triggerSessionOpened(e, t, r, n);
        },
        Q = (e, t) => {
          const { login: r, persistData: o, sessionStartTime: n } = e.getAccountInfo();
          o === g.PersistData.PERSIST_DATA_YES &&
            ((0, m.storeUserPublicSetting)(r, "lastSuccessfulLoginTime", n),
            (void 0 !== t?.triggeredByRememberMeType && "disabled" !== t?.triggeredByRememberMeType) ||
              (0, m.storeUserPublicSetting)(r, "lastMasterPasswordOpenSessionTimestamp", n));
        },
        Z = async (e) => {
          (await e.accountExistsLocally()) ? await e.attemptSync(o.Trigger.Login) : await e.sync(o.Trigger.InitialLogin);
        },
        X = async (e) => {
          const { sessionService: t, storeService: r } = e,
            o = t.getInstance().user,
            n = r.getState(),
            a = (0, U.recoveryInProgressSelector)(n);
          if (void 0 !== (0, L.ssoMigrationInfoSelector)(n).migration || a) return !0;
          const s = !(await o.accountExistsLocally()),
            c = (0, f.changeMPinProgressSelector)(n);
          if (s || c) {
            try {
              await Z(o);
            } catch (e) {
              throw new Error(i.AuthenticationCode[i.AuthenticationCode.UNKNOWN_SYNC_ERROR]);
            }
            return !0;
          }
          return !1;
        };
      async function J(e, t, r) {
        const { localDataEncryptorService: o, sessionService: i, storageService: a, storeService: s, applicationModulesAccess: c } = e,
          { login: d, otpType: l } = s.getAccountInfo();
        await (0, D.deleteAllLocalUserData)(a, c, d),
          await (0, v.generateLocalkeyAndSetupEncryptorService)(o, s, i, t),
          t === g.PersistData.PERSIST_DATA_YES &&
            (l === S.OtpType.OTP_LOGIN && (0, m.storeUserPublicSetting)(s.getAccountInfo().login, "otp2", !0),
            await (0, b.persistLocalUsersAuthenticationData)(a, s));
        const u = i.getInstance().user;
        await u.refreshSessionData(), r?.requiredPermissions && (await $(s, i, r.requiredPermissions));
        const p = await (0, F.getDeviceLimitStatus)(e);
        return "noDeviceLimit" !== p._tag ? (await (0, F.startDeviceLimitFlow)(e, p), n.LoginResultEnum.DeviceLimitFlow) : ee(e, r);
      }
      async function ee(e, t) {
        try {
          const { autoLoginService: r, eventBusService: o, sessionService: s, storeService: c, storageService: d, wsService: l } = e,
            S = s.getInstance().user,
            m = c.getState(),
            g = (0, P.userLoginSelector)(m);
          c.dispatch((0, p.confirmUserAuthentication)()), Q(c, t);
          const A = (0, U.recoveryInProgressSelector)(m),
            I = await X(e);
          if (!A) {
            const e = await (0, E.getAndTriggerRefreshAccountInfo)(c, s, l);
            q(c, d, e);
          }
          if (!1 === I)
            try {
              await Z(S);
            } catch (e) {
              throw new Error(i.AuthenticationCode[i.AuthenticationCode.UNKNOWN_SYNC_ERROR]);
            }
          const y = await (0, O.getLocalAccounts)(c, d);
          (0, a.sendLocalAccounts)(y);
          const v = "webauthn" !== (0, B.getLocalAccountRememberMeType)(g);
          return (
            c.getUserSession().rememberMasterPassword && v && r.initialize(),
            c.getUserSession().shouldRememberMeForSSO &&
              v &&
              (await (0, B.persistLocalAccountRememberMeType)(c, "sso"), c.dispatch((0, H.setRememberMeTypeAction)("sso"))),
            o.sessionOpened({ login: g }),
            "autologin" !== t?.triggeredByRememberMeType && c.dispatch((0, u.updateLastMasterPasswordCheck)()),
            S.startPeriodic2FAInfoRefresh(),
            (0, h.refreshTwoFactorAuthenticationInfoService)(c, l),
            c.dispatch((0, u.updateSessionDidOpen)(!0)),
            n.LoginResultEnum.LoggedIn
          );
        } catch (t) {
          const { storeService: r } = e;
          throw (r.dispatch((0, p.userAuthenticationFailed)()), r.dispatch((0, u.updateSessionDidOpen)(!1)), t);
        }
      }
      t.sessionDidOpen = ee;
      const te = (e) => e && "object" == typeof e && e.message === i.AuthenticationCode[i.AuthenticationCode.DEVICE_NOT_REGISTERED],
        re = (e) => e?.message && N.TokenOrOTPErrorCode.includes(e.message),
        oe = (e) => e?.message && N.DashlaneAuthenticatorErrorCode.includes(e.message),
        ne = async (e, t, r, o, n) => {
          if (n)
            try {
              return await d.checkLogin(e, t, r);
            } catch (e) {
              if (!te(e)) throw e;
            }
          const i = (0, _.ukiSelector)(e.getState());
          return i ? s.checkLoginWithUki(e, o, i) : s.requestDeviceRegistration(e);
        },
        ie = (e) => e.getAccountInfo().isAuthenticated;
      function ae(e) {
        if (!e || 0 === e.length) throw new Error(i.AuthenticationCode[i.AuthenticationCode.EMPTY_OTP]);
      }
      function se(e) {
        if (!e || 0 === e.length) throw new Error(i.AuthenticationCode[i.AuthenticationCode.EMPTY_TOKEN]);
      }
      var ce;
      !(function (e) {
        (e[(e.AUTHORIZED = 0)] = "AUTHORIZED"), (e[(e.FORBIDDEN = 1)] = "FORBIDDEN");
      })((ce = t.DifferentLoginAuthorized || (t.DifferentLoginAuthorized = {})));
      const de = (e) => (e ? i.AuthenticationCode.ASK_MASTER_PASSWORD : i.AuthenticationCode.PROVIDE_EXTRA_DEVICE_TOKEN);
    },
    173106: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loginViaSSO = void 0);
      const o = r(677876),
        n = r(453576),
        i = r(751),
        a = r(656915),
        s = r(150058),
        c = r(16373),
        d = r(428445),
        l = r(188610),
        u = r(719399),
        S = r(164910),
        p = r(133769),
        m = r(316038),
        g = r(956668),
        E = r(46298),
        A = r(816356),
        I = r(770414),
        y = r(25576),
        v = r(416593),
        T = r(538981),
        _ = r(217387),
        f = r(462712),
        C = r(861259),
        O = r(519083),
        h = r(628287),
        D = r(586797),
        R = r(807624),
        N = r(200658);
      t.loginViaSSO = async function (e, t) {
        const { sessionService: r, storeService: a } = e,
          {
            ssoServiceProviderKey: s,
            exist: l,
            ssoToken: S,
            consents: p,
            currentAuths: m = n.SsoMigrationServerMethod.SSO,
            expectedAuths: g = n.SsoMigrationServerMethod.SSO,
            inStore: E,
            anonymousUserId: A
          } = t,
          I = (0, d.normalizeEmail)(t.login),
          y = (0, u.secureDeviceName)(t.deviceName),
          v = { ...t, login: I, deviceName: y };
        if (!((s && I) || E))
          return (
            a.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.SSO_SETUP_ERROR })),
            (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.EMPTY_LOGIN)
          );
        try {
          if (!l) {
            const t = { ssoServiceProviderKey: s, login: I, deviceName: y, ssoToken: S, consents: p, anonymousUserId: A };
            return await (0, i.createSSOAccount)(e, t);
          }
          if (!(0, C.isSupportedTransitionFlow)(m, g))
            return (
              a.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.SSO_SETUP_ERROR })),
              (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.UNSUPPORTED_TRANSITION)
            );
          if (m === n.SsoMigrationServerMethod.MP && g === n.SsoMigrationServerMethod.SSO) return await P(e, v);
          if (m === n.SsoMigrationServerMethod.SSO && g === n.SsoMigrationServerMethod.MP) {
            const e = { ssoUser: !0, migration: o.AuthenticationFlowContracts.SSOMigrationType.SSO_TO_MP };
            a.dispatch((0, R.storeSSOSettings)(e)), (v.requiredPermissions = null);
          }
          return r.setInstance(I, void 0), (await r.getInstance().user.accountExistsLocally()) ? await L(e, v) : await U(e, v);
        } catch (t) {
          return (
            (0, N.sendSsoLoginErrorLog)(e),
            a.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.UNKNOWN_ERROR, message: t.message })),
            (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.UNKNOWN_ERROR, t.message)
          );
        }
      };
      const P = async (e, t) => {
          const { storeService: r } = e;
          let { ssoServiceProviderKey: i, ssoToken: a } = t;
          const { login: s } = t,
            { isAuthenticated: d, otpType: u } = r.getAccountInfo();
          if (t.inStore) {
            const e = (0, T.ssoSettingsSelector)(r.getState());
            if (((i = e.ssoServiceProviderKey), (a = e.ssoToken), !i || !a))
              return (
                r.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.SSO_SETUP_ERROR })),
                (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.SSO_VERIFICATION_FAILED)
              );
          }
          if (!d) {
            const t = {
              ssoUser: !0,
              serviceProviderUrl: "",
              ssoServiceProviderKey: i,
              ssoToken: a,
              migration: o.AuthenticationFlowContracts.SSOMigrationType.MP_TO_SSO
            };
            return (
              r.dispatch((0, R.storeSSOSettings)(t)),
              (0, l.makeLoginController)(e).openSession(s),
              r.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.RELOGIN_NEEDED })),
              (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.INNACTIVE_SESSION)
            );
          }
          if (u === D.OtpType.NO_OTP) {
            const { success: e } = await (0, h.convertTokenToAuthTicket)(r, (0, _.makeSsoToken)(a));
            if (!e)
              return (
                r.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.SSO_SETUP_ERROR })),
                (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.SSO_VERIFICATION_FAILED)
              );
          }
          const S = { newPassword: i, flow: n.ChangeMPFlowPath.MP_TO_SSO },
            p = await (0, O.changeMasterPassword)(e, S);
          return !1 === p.success
            ? (r.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.UNKNOWN_ERROR, message: p.error.code })), p)
            : (r.dispatch((0, R.resetSSOSettings)()), (0, C.successResponse)());
        },
        L = async (e, { login: t, ssoServiceProviderKey: r, ssoToken: o, requiredPermissions: i, shouldRememberMeForSSO: s }) => {
          const { storeService: d } = e,
            u = (0, a.getDeviceIdSelector)(d.getState(), t);
          if (null === u) throw new Error(n.AuthenticationCode[n.AuthenticationCode.DEVICE_NOT_REGISTERED]);
          const I = await (0, h.convertTokenToAuthTicket)(d, (0, _.makeSsoToken)(o));
          if (!1 === I.success) {
            const {
              error: { message: e }
            } = I;
            return (
              d.dispatch((0, c.addNewLoginNotification)({ type: n.LoginNotificationType.SSO_SETUP_ERROR })),
              (0, C.makeReturnErrorObject)(n.LoginViaSsoCode.SSO_VERIFICATION_FAILED, e)
            );
          }
          const v = I.authTicket,
            T = await (0, f.completeLoginWithAuthTicket)(d, { login: t, deviceAccessKey: u, authTicket: v });
          if ((0, E.isApiError)(T)) return (0, C.formatAPIError)(T);
          const { masterPasswordEncryptorService: O, remoteDataEncryptorService: D } = e,
            { ssoServerKey: R, remoteKeys: N } = T,
            P = (0, m.base64ToBuffer)(R),
            L = N.filter((e) => "sso" === e.type)[0];
          let U;
          try {
            const e = (0, m.base64ToBuffer)(r),
              t = (0, p.getEncryptionKeyBuffer)(e, P, { skipDerivation: !0 });
            U = (0, m.arrayBufferToText)(t);
            const o = (0, S.getNoDerivationCryptoConfig)();
            O.setInstance({ raw: U }, "", o);
            const n = await O.getInstance().decrypt(L.key),
              i = (0, g.deflatedUtf8ToUtf16)(n, { skipUtf8Decoding: !0, skipInflate: !0 });
            D.setInstance({ raw: i }, "", o), d.dispatch((0, A.updateRemoteKey)(i));
          } catch (e) {
            return { success: !1, error: { code: n.LoginViaSsoCode.WRONG_PASSWORD } };
          }
          const M = y.PersistData.PERSIST_DATA_YES;
          return (
            await (0, l.openSessionWithMasterPassword)(e, t, U, {
              isDataPersisted: M,
              serverKey: "",
              requiredPermissions: i,
              isSsoLogin: !0,
              shouldRememberMeForSSO: s
            }),
            (0, C.successResponse)()
          );
        },
        U = async (e, t) => {
          const { storeService: r, masterPasswordEncryptorService: o, remoteDataEncryptorService: n } = e,
            { deviceName: i, ssoToken: a, login: c, ssoServiceProviderKey: d, requiredPermissions: u, shouldRememberMeForSSO: S } = t;
          r.dispatch((0, s.updateLocalUserInfo)(c, { ssoActivatedUser: !0 }));
          const p = y.PersistData.PERSIST_DATA_YES,
            m = { masterPasswordEncryptorService: o, remoteDataEncryptorService: n, ssoServiceProviderKey: d };
          await (0, I.registerDeviceWithToken)(r, p, (0, _.makeSsoToken)(a), !1, i, m);
          const g = e.storeService.getState(),
            E = (0, v.masterPasswordSelector)(g);
          return (
            await (0, l.openSessionWithMasterPassword)(e, c, E, {
              isDataPersisted: p,
              serverKey: "",
              requiredPermissions: u,
              isSsoLogin: !0,
              shouldRememberMeForSSO: S
            }),
            (0, C.successResponse)()
          );
        };
    },
    861259: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.triggerServiceProviderUrlRedirect =
          t.successResponse =
          t.makeReturnErrorObject =
          t.formatAPIError =
          t.isSupportedTransitionFlow =
            void 0);
      const o = r(453576),
        n = r(46298),
        i = r(281228),
        a = r(538981);
      (t.isSupportedTransitionFlow = (e, t) =>
        e === o.SsoMigrationServerMethod.SSO
          ? t === o.SsoMigrationServerMethod.SSO || t === o.SsoMigrationServerMethod.MP
          : e === o.SsoMigrationServerMethod.MP && t === o.SsoMigrationServerMethod.SSO),
        (t.formatAPIError = (e) => {
          switch (e.code) {
            case n.B2bSsoUserNotFound:
            case n.InvalidSsoToken:
            case n.DeviceNotFound:
            case n.InvalidAuthTicket:
              return (0, t.makeReturnErrorObject)(o.LoginViaSsoCode.SSO_VERIFICATION_FAILED, e.message);
            default:
              return (0, t.makeReturnErrorObject)(o.LoginViaSsoCode.UNKNOWN_ERROR, e.message);
          }
        }),
        (t.makeReturnErrorObject = (e, t) => ({ success: !1, error: { code: e, message: t } })),
        (t.successResponse = (e = o.LoginViaSsoCode.SUCCESS) => ({ success: !0, code: e })),
        (t.triggerServiceProviderUrlRedirect = function (e, t) {
          const r = `${(0, a.serviceProviderUrlSelector)(e)}?username=${t}`;
          return (0, i.emitServiceProviderUrl)(r), r;
        });
    },
    930322: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(635595),
        n = r(857634),
        i = r(549154),
        a = r(727331);
      t.bootstrap = (e, t, r) => {
        if ((e.register(o.config), r.connectors.deviceLimit)) {
          const e = new i.DeviceLimitCapabilityEventBus(t, r.connectors.deviceLimit),
            o = (0, a.getDeviceLimitFlowEventsManager)(t.storeService);
          (0, n.setupDeviceLimitEventBus)(e, o);
        }
      };
    },
    200658: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendMasterPasswordLoginErrorLog =
          t.sendSsoLoginErrorLog =
          t.sendBiometricLoginErrorLog =
          t.sendDashlaneAuthenticatorErrorLog =
          t.sendOTPErrorLog =
          t.sendOTPForNewDeviceErrorLog =
          t.sendEmailTokenErrorLog =
          t.sendLoginSuccessEventLog =
          t.sendAskSSOAuthenticationEventLog =
          t.sendAskBiometricAuthenticationEventLog =
          t.sendAskAuthenticationEventLog =
            void 0);
      const o = r(660765),
        n = r(566102),
        i = r(586797);
      var a;
      !(function (e) {
        (e.AUTOLOGIN = "autologin"), (e.WEBAUTHN = "webauthn"), (e.DISABLED = "disabled");
      })(a || (a = {}));
      const s = (e, t, r) => {
          switch (e) {
            case i.OtpType.NO_OTP:
              return t ? (r ? o.VerificationMode.AuthenticatorApp : o.VerificationMode.EmailToken) : o.VerificationMode.None;
            case i.OtpType.OTP_NEW_DEVICE:
              return o.VerificationMode.Otp1;
            case i.OtpType.OTP_LOGIN:
              return o.VerificationMode.Otp2;
            default:
              return o.VerificationMode.None;
          }
        },
        c = async (e, t, r) => {
          await (0, n.logEvent)(t, { event: new o.UserAskAuthenticationEvent({ mode: e, reason: o.Reason.Login, verificationMode: r }) });
        };
      (t.sendAskAuthenticationEventLog = c.bind(null, o.Mode.MasterPassword)),
        (t.sendAskBiometricAuthenticationEventLog = c.bind(null, o.Mode.Biometric)),
        (t.sendAskSSOAuthenticationEventLog = c.bind(null, o.Mode.Sso)),
        (t.sendLoginSuccessEventLog = async ({ services: e, isInitial: t, isSsoLogin: r, rememberMeType: i }) => {
          r
            ? await (async (e, t) => {
                await (0, n.logEvent)(e, {
                  event: new o.UserLoginEvent({
                    mode: o.Mode.Sso,
                    status: o.Status.Success,
                    isFirstLogin: t,
                    isBackupCode: !1,
                    verificationMode: o.VerificationMode.None
                  })
                });
              })(e, t)
            : i && i === a.WEBAUTHN
            ? await (async (e) => {
                await (0, n.logEvent)(e, {
                  event: new o.UserLoginEvent({
                    mode: o.Mode.Biometric,
                    status: o.Status.Success,
                    isFirstLogin: !1,
                    isBackupCode: !1,
                    verificationMode: o.VerificationMode.None
                  })
                });
              })(e)
            : i &&
              i === a.DISABLED &&
              (await (async (e, t) => {
                const { otpType: r } = e.storeService.getAccountInfo(),
                  { isUsingBackupCode: i, isUsingDashlaneAuthenticator: a } = e.storeService.getUserSession(),
                  c = s(r, t, a);
                await (0, n.logEvent)(e, {
                  event: new o.UserLoginEvent({
                    mode: o.Mode.MasterPassword,
                    status: o.Status.Success,
                    isFirstLogin: t,
                    isBackupCode: i,
                    verificationMode: c
                  })
                });
              })(e, t));
        }),
        (t.sendEmailTokenErrorLog = async (e) => {
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.MasterPassword,
              status: o.Status.ErrorWrongOtp,
              isFirstLogin: !0,
              isBackupCode: !1,
              verificationMode: o.VerificationMode.EmailToken
            })
          });
        }),
        (t.sendOTPForNewDeviceErrorLog = async (e, t) => {
          const { otpType: r } = e.storeService.getAccountInfo();
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.MasterPassword,
              status: o.Status.ErrorWrongOtp,
              isFirstLogin: !0,
              isBackupCode: t,
              verificationMode: r === i.OtpType.OTP_LOGIN ? o.VerificationMode.Otp2 : o.VerificationMode.Otp1
            })
          });
        }),
        (t.sendOTPErrorLog = async (e, t) => {
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.MasterPassword,
              status: o.Status.ErrorWrongOtp,
              isFirstLogin: !1,
              isBackupCode: t,
              verificationMode: o.VerificationMode.Otp2
            })
          });
        }),
        (t.sendDashlaneAuthenticatorErrorLog = async (e) => {
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.MasterPassword,
              status: o.Status.ErrorWrongOtp,
              isFirstLogin: !0,
              isBackupCode: !1,
              verificationMode: o.VerificationMode.AuthenticatorApp
            })
          });
        }),
        (t.sendBiometricLoginErrorLog = async (e) => {
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.Biometric,
              status: o.Status.ErrorUnknown,
              isFirstLogin: !1,
              isBackupCode: !1,
              verificationMode: o.VerificationMode.None
            })
          });
        }),
        (t.sendSsoLoginErrorLog = async (e) => {
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.Sso,
              status: o.Status.ErrorInvalidSso,
              isBackupCode: !1,
              verificationMode: o.VerificationMode.None
            })
          });
        }),
        (t.sendMasterPasswordLoginErrorLog = async (e, t) => {
          const { otpType: r } = e.storeService.getAccountInfo(),
            { isUsingBackupCode: i, isUsingDashlaneAuthenticator: a } = e.storeService.getUserSession(),
            c = s(r, t, a);
          await (0, n.logEvent)(e, {
            event: new o.UserLoginEvent({
              mode: o.Mode.MasterPassword,
              status: o.Status.ErrorWrongPassword,
              isFirstLogin: t,
              isBackupCode: i,
              verificationMode: c
            })
          });
        });
    },
    769718: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.addLoginNotification = void 0);
      const o = r(16373);
      t.addLoginNotification = async function (e, t) {
        const { storeService: r } = e;
        r.dispatch((0, o.addNewLoginNotification)(t));
      };
    },
    240588: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(930322);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    724579: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(958639),
        n = r(301965),
        i = r(290622),
        a = r(409344),
        s = r(331937),
        c = r(718216);
      t.setupSubscriptions = function (e, t) {
        e.appInitialized.on(async (e) => {
          if (e.initMode === c.InitMode.FirstInit) {
            const { storageService: e, storeService: r, applicationModulesAccess: c } = t;
            await (0, n.deviceRemoteDeletion)(r, e, c);
            const d = await (0, i.getLocalAccounts)(r, e);
            await (0, s.restoreLastAuthenticatedUser)(t, d),
              (0, o.sendLocalAccounts)(d),
              t.storeService.dispatch((0, a.localAccountsListUpdated)(d));
          }
        });
      };
    },
    515606: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DashlaneAuthenticatorErrorCode = t.TokenOrOTPErrorCode = void 0);
      const o = r(453576);
      (t.TokenOrOTPErrorCode = [
        o.AuthenticationCode.TOKEN_EXPIRED,
        o.AuthenticationCode.TOKEN_NOT_VALID,
        o.AuthenticationCode.TOKEN_TOO_MANY_ATTEMPTS,
        o.AuthenticationCode.EMPTY_TOKEN,
        o.AuthenticationCode.OTP_ALREADY_USED,
        o.AuthenticationCode.OTP_NOT_VALID,
        o.AuthenticationCode.OTP_TOO_MANY_ATTEMPTS,
        o.AuthenticationCode.EMPTY_OTP,
        o.AuthenticationCode.BACKUP_CODE_NOT_VALID
      ]),
        (t.DashlaneAuthenticatorErrorCode = [
          o.AuthenticationCode.DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED,
          o.AuthenticationCode.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED,
          o.AuthenticationCode.FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE
        ]);
    },
    613465: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(390822),
        n = r(196205),
        i = r(385316),
        a = r(769718);
      t.config = {
        commands: {
          addLoginNotification: { handler: a.addLoginNotification },
          clearAllStoredLoginNotification: { handler: n.clearAllStoredLoginNotification }
        },
        queries: { getLoginNotifications: { selector: o.loginNotificationListSelector } },
        liveQueries: { liveLoginNotifications: { operator: i.loginNotificationList$ } }
      };
    },
    197046: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(613465);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    239952: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(197046);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    385316: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loginNotificationList$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(390822);
      t.loginNotificationList$ = () => (0, o.pipe)((0, n.map)(i.loginNotificationListSelector), (0, n.distinctUntilChanged)());
    },
    390822: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loginNotificationListSelector = void 0),
        (t.loginNotificationListSelector = (e) => e.inMemoryInterSessionUnsynced.loginNotification);
    },
    196205: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearAllStoredLoginNotification = void 0);
      const o = r(16373);
      t.clearAllStoredLoginNotification = async (e) => (e.storeService.dispatch((0, o.resetAllLoginNotification)()), { success: !0 });
    },
    290014: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(916088),
        n = r(885493),
        i = r(293069),
        a = r(306737);
      t.config = {
        commands: {
          updateLoginStepInfo: { handler: i.updateLoginStepInfoHandler },
          resetLoginStepInfo: { handler: a.resetLoginStepInfoHandler }
        },
        queries: { getLoginStepInfo: { selector: o.loginStepInfoSelector } },
        liveQueries: { liveLoginStepInfo: { operator: n.liveLoginStepInfo$ } }
      };
    },
    235924: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetLoginStepInfo =
          t.updateLoginStepInfoStep =
          t.updateLoginStepInfoLogin =
          t.RESET_LOGIN_STEP_INFO =
          t.UPDATE_LOGIN_STEP_INFO_STEP =
          t.UPDATE_LOGIN_STEP_INFO_LOGIN =
            void 0),
        (t.UPDATE_LOGIN_STEP_INFO_LOGIN = "UPDATE_LOGIN_STEP_INFO_LOGIN"),
        (t.UPDATE_LOGIN_STEP_INFO_STEP = "UPDATE_LOGIN_STEP_INFO_STEP"),
        (t.RESET_LOGIN_STEP_INFO = "RESET_LOGIN_STEP_INFO"),
        (t.updateLoginStepInfoLogin = (e) => ({ type: t.UPDATE_LOGIN_STEP_INFO_LOGIN, login: e })),
        (t.updateLoginStepInfoStep = (e) => ({ type: t.UPDATE_LOGIN_STEP_INFO_STEP, step: e })),
        (t.resetLoginStepInfo = () => ({ type: t.RESET_LOGIN_STEP_INFO }));
    },
    916088: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loginStepInfoSelector = void 0),
        (t.loginStepInfoSelector = (e) => {
          const t = e.userSession.localSettings.loginStepInfo;
          return t?.step ? t : null;
        });
    },
    224413: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(290014);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    306737: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetLoginStepInfoHandler = void 0);
      const o = r(235924);
      t.resetLoginStepInfoHandler = (e) => (
        e.storeService.dispatch((0, o.resetLoginStepInfo)()), e.sessionService.getInstance().user.persistLocalSettings(), Promise.resolve()
      );
    },
    293069: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateLoginStepInfoHandler = void 0);
      const o = r(235924);
      t.updateLoginStepInfoHandler = (e, t) => (
        void 0 !== t.login && e.storeService.dispatch((0, o.updateLoginStepInfoLogin)(t.login)),
        void 0 !== t.step && e.storeService.dispatch((0, o.updateLoginStepInfoStep)(t.step)),
        e.sessionService.getInstance().user.persistLocalSettings(),
        Promise.resolve()
      );
    },
    637824: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(224413);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    885493: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.liveLoginStepInfo$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(916088);
      t.liveLoginStepInfo$ = () => (0, o.pipe)((0, n.map)(i.loginStepInfoSelector), (0, n.distinctUntilChanged)());
    },
    282413: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Debugger = void 0);
      const o = r(504939),
        n = r(604407),
        i = ([e, ...t]) => {
          let r = "",
            o = [];
          "string" == typeof e ? (r = e) : (o = [e]), (o = [...o, ...t]);
          const n = ((e) =>
            e.reduce((e, t) => {
              const r = Object.keys(e).length;
              return { ...e, [r]: t };
            }, {}))(o);
          return { message: r, details: n };
        },
        a = (function () {
          const e =
            (e) =>
            (...t) => {
              const r = { ...i(t), level: e };
              (0, o.log)(r);
            };
          return { log: e(n.LogLevel.Debug), info: e(n.LogLevel.Info), warn: e(n.LogLevel.Warn), error: e(n.LogLevel.Error) };
        })();
      (t.Debugger = a), (t.default = a);
    },
    504939: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.redirectConsoleLogs = t.logVerbose = t.logDebug = t.logInfo = t.logWarn = t.logError = t.log = void 0);
      const o = r(401067),
        n = r(348749),
        i = r(643051),
        a = r(604407),
        s = r(882569),
        c = r(17825),
        d = r(32588);
      let l = null;
      const u = (e) => (t) => {
          const { level: r = a.LogLevel.Error } = t,
            o = ((e) => {
              switch (e) {
                case a.LogLevel.Error:
                  return console.error;
                case a.LogLevel.Warn:
                  return console.warn;
                case a.LogLevel.Info:
                  return console.info;
                case a.LogLevel.Verbose:
                  return console.log;
                case a.LogLevel.Debug:
                  return console.debug;
                default:
                  return (0, c.assertUnreachable)(e);
              }
            })(r),
            n = e(t);
          o.call(this, n);
        },
        S = (0, s.formatLogEntry)(s.formatLogEntryDetail),
        p = (e, t) => (r) => (o) => t(o[e]) && r(o),
        m = p("tag", (e = []) => {
          const t = n.config.LOG_TAGS || [],
            r = "string" == typeof t ? [t] : [...t],
            o = "string" == typeof e ? [e] : [...e];
          return !r.length || r.some((e) => o.includes(e));
        }),
        g = p("level", (e) => e >= n.config.LOG_LEVEL),
        E = (0, o.pipe)((e) => (t) => (l || u(e))(t), g, m)(S);
      E({ message: "~~~ Logs activated ~~~", level: a.LogLevel.Info, tag: [d.LOGS_LOG_TAG, d.DEBUGGER_LOG_TAG] }),
        (t.log = E),
        (t.logError = (0, i.withErrorLevel)(E)),
        (t.logWarn = (0, i.withWarnLevel)(E)),
        (t.logInfo = (0, i.withInfoLevel)(E)),
        (t.logDebug = (0, i.withDebugLevel)(E)),
        (t.logVerbose = (0, i.withVerboseLevel)(E)),
        (t.redirectConsoleLogs = (e) => (
          (l = e),
          () => {
            l = null;
          }
        ));
    },
    643051: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.withVerboseLevel = t.withDebugLevel = t.withInfoLevel = t.withWarnLevel = t.withErrorLevel = t.withTag = t.withLevel = void 0);
      const o = r(604407),
        n = (e, t) => (r) => (o) => r({ [e]: t, ...o });
      (t.withLevel = (e) => n("level", e)),
        (t.withTag = (e) => n("tag", e)),
        (t.withErrorLevel = (0, t.withLevel)(o.LogLevel.Error)),
        (t.withWarnLevel = (0, t.withLevel)(o.LogLevel.Warn)),
        (t.withInfoLevel = (0, t.withLevel)(o.LogLevel.Info)),
        (t.withDebugLevel = (0, t.withLevel)(o.LogLevel.Debug)),
        (t.withVerboseLevel = (0, t.withLevel)(o.LogLevel.Verbose));
    },
    882569: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.formatLogEntryDetail = t.formatLogEntry = void 0);
      const o = r(392263),
        n = r(604407);
      function i(e) {
        const { stack: t } = e;
        let r = `${e}`;
        return t && "string" == typeof t && t.substr(0, t.indexOf("\n")) === r && (r = ""), `${r}${r ? `\n${t}` : t}`;
      }
      const a = {
        [n.LogLevel.Error]: "(e)",
        [n.LogLevel.Warn]: "(w)",
        [n.LogLevel.Info]: "(i)",
        [n.LogLevel.Debug]: "(d)",
        [n.LogLevel.Verbose]: "(v)"
      };
      (t.formatLogEntry = (e) => (t) => {
        const { details: r = {}, level: o = n.LogLevel.Debug, message: i, tag: s = [] } = t,
          c = (function (e) {
            const t = Array.isArray(e) ? e : [e];
            return t.length ? ` [${t.join("|")}]` : "";
          })(s),
          d = a[o],
          l = Boolean(i),
          u = l ? ` ${i}` : "",
          S = (function (e, t, r) {
            return Object.keys(t).reduce(
              (o, n) => (!Number.isInteger(parseInt(n, 10)) && r ? `${o} ${n}:${e(t[n])}` : `${o} ${e(t[n])}`),
              ""
            );
          })(e, r, l);
        return `${d}${c}${u}${S}`;
      }),
        (t.formatLogEntryDetail = (e) =>
          (0, o.isCarbonError)(e)
            ? (function (e) {
                const t = JSON.stringify(e.getAdditionalInfo()),
                  r = t ? `\n${t}` : "";
                return `${i(e)}${r}`;
              })(e)
            : e instanceof Error
            ? i(e)
            : "object" == typeof e
            ? JSON.stringify(e)
            : String(e));
    },
    795623: function (e, t, r) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, o, n);
              }
            : function (e, t, r, o) {
                void 0 === o && (o = r), (e[o] = t[r]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.withWarnLevel =
          t.withVerboseLevel =
          t.withTag =
          t.withLevel =
          t.withInfoLevel =
          t.withErrorLevel =
          t.withDebugLevel =
          t.Silent =
          t.LogLevel =
          t.redirectConsoleLogs =
          t.logWarn =
          t.logVerbose =
          t.logInfo =
          t.logError =
          t.logDebug =
          t.log =
            void 0);
      const i = r(282413);
      t.default = i.Debugger;
      var a = r(504939);
      Object.defineProperty(t, "log", {
        enumerable: !0,
        get: function () {
          return a.log;
        }
      }),
        Object.defineProperty(t, "logDebug", {
          enumerable: !0,
          get: function () {
            return a.logDebug;
          }
        }),
        Object.defineProperty(t, "logError", {
          enumerable: !0,
          get: function () {
            return a.logError;
          }
        }),
        Object.defineProperty(t, "logInfo", {
          enumerable: !0,
          get: function () {
            return a.logInfo;
          }
        }),
        Object.defineProperty(t, "logVerbose", {
          enumerable: !0,
          get: function () {
            return a.logVerbose;
          }
        }),
        Object.defineProperty(t, "logWarn", {
          enumerable: !0,
          get: function () {
            return a.logWarn;
          }
        }),
        Object.defineProperty(t, "redirectConsoleLogs", {
          enumerable: !0,
          get: function () {
            return a.redirectConsoleLogs;
          }
        }),
        n(r(282413), t);
      var s = r(604407);
      Object.defineProperty(t, "LogLevel", {
        enumerable: !0,
        get: function () {
          return s.LogLevel;
        }
      }),
        Object.defineProperty(t, "Silent", {
          enumerable: !0,
          get: function () {
            return s.Silent;
          }
        });
      var c = r(643051);
      Object.defineProperty(t, "withDebugLevel", {
        enumerable: !0,
        get: function () {
          return c.withDebugLevel;
        }
      }),
        Object.defineProperty(t, "withErrorLevel", {
          enumerable: !0,
          get: function () {
            return c.withErrorLevel;
          }
        }),
        Object.defineProperty(t, "withInfoLevel", {
          enumerable: !0,
          get: function () {
            return c.withInfoLevel;
          }
        }),
        Object.defineProperty(t, "withLevel", {
          enumerable: !0,
          get: function () {
            return c.withLevel;
          }
        }),
        Object.defineProperty(t, "withTag", {
          enumerable: !0,
          get: function () {
            return c.withTag;
          }
        }),
        Object.defineProperty(t, "withVerboseLevel", {
          enumerable: !0,
          get: function () {
            return c.withVerboseLevel;
          }
        }),
        Object.defineProperty(t, "withWarnLevel", {
          enumerable: !0,
          get: function () {
            return c.withWarnLevel;
          }
        });
    },
    604407: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Silent = t.LogLevel = void 0),
        (function (e) {
          (e[(e.Verbose = 0)] = "Verbose"),
            (e[(e.Debug = 10)] = "Debug"),
            (e[(e.Info = 20)] = "Info"),
            (e[(e.Warn = 30)] = "Warn"),
            (e[(e.Error = 40)] = "Error");
        })(t.LogLevel || (t.LogLevel = {})),
        (t.Silent = 100);
    },
    559398: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(566102);
      t.config = {
        commands: { logEvent: { handler: o.logEvent }, logPageView: { handler: o.logPageView }, flushQueue: { handler: o.flushQueue } },
        queries: {},
        liveQueries: {}
      };
    },
    838912: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateEventLoggerVirtualStoreState =
          t.UPDATE_EVENT_LOGGER_STATE =
          t.createEventLoggerVirtualStore =
          t.CREATE_EVENT_LOGGER_VIRTUAL_STORE =
            void 0),
        (t.CREATE_EVENT_LOGGER_VIRTUAL_STORE = "CREATE_EVENT_LOGGER_VIRTUAL_STORE"),
        (t.createEventLoggerVirtualStore = ({ storeName: e, initialState: r }) => ({
          type: t.CREATE_EVENT_LOGGER_VIRTUAL_STORE,
          storeName: e,
          initialState: r
        })),
        (t.UPDATE_EVENT_LOGGER_STATE = "UPDATE_EVENT_LOGGER_STATE"),
        (t.updateEventLoggerVirtualStoreState = ({ storeName: e, updater: r }) => ({
          type: t.UPDATE_EVENT_LOGGER_STATE,
          storeName: e,
          updater: r
        }));
    },
    352895: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(559398);
      t.bootstrap = (e, t) => {
        e.register(o.config), t.eventLoggerService.initRepository();
      };
    },
    287911: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decryptEvents = t.encryptEvents = void 0);
      const o = r(72365),
        n = r(791301),
        i = r(65675),
        a = r(956668);
      (t.encryptEvents = async function (e, t, r) {
        const s = JSON.stringify(t),
          c = (0, a.deflateUtf16)(s);
        return await (async function ({ storeService: e, encryptionKey: t, data: r }) {
          const a = (0, o.makeDataEncryptorService)(e),
            { cryptoConfig: s } = (0, i.parsePayload)(n.CRYPTO_NODERIVATION_HMAC64);
          a.setInstance({ raw: t }, "", s);
          const c = await a.getInstance().encrypt(r);
          return a.close(), c;
        })({ storeService: e, encryptionKey: r, data: c });
      }),
        (t.decryptEvents = async function (e, t, r) {
          const n = await (async function ({ storeService: e, encryptedData: t, encryptionKey: r }) {
              const n = (0, o.makeDataEncryptorService)(e);
              n.setInstance({ raw: r }, "");
              const i = await n.getInstance().decrypt(t);
              return n.close(), i;
            })({ storeService: e, encryptedData: t, encryptionKey: r }),
            i = (0, a.inflateUtf16)(n);
          return JSON.parse(i);
        });
    },
    526415: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.chunkArray =
          t.getOsContext =
          t.getOsVersion =
          t.getOsType =
          t.getBrowserContext =
          t.getAppContext =
          t.applicationBuildTypeToHermesBuildType =
          t.platformStringToAppPlatform =
          t.createLogger =
            void 0);
      const o = r(660765),
        n = r(926625),
        i = r(348749),
        a = r(859600);
      (t.createLogger = (e) => {
        const { eventLoggerService: t } = e,
          r = t.getRepository();
        return { logger: r.createLogger(), logRepository: r };
      }),
        (t.platformStringToAppPlatform = (e) => {
          switch (e) {
            case "server_standalone":
            case "server_carbon_unknown":
            case "server_carbon_tests":
              return o.Platform.Saex;
            case "server_leeloo_dev":
            case "server_leeloo":
            case "server_tac":
              return o.Platform.Web;
            case "desktop_win":
              throw new Error(
                `Hermes Web SDK: Unsupported platform "${e}" detected. This platform is not supported by the Hermes Web SDK or Styx API.`
              );
          }
        }),
        (t.applicationBuildTypeToHermesBuildType = (e) => {
          switch (e) {
            case a.ApplicationBuildType.DEV:
              return o.BuildType.Dev;
            case a.ApplicationBuildType.QA:
              return o.BuildType.Qa;
            case a.ApplicationBuildType.NIGHTLY:
              return o.BuildType.Nightly;
            default:
              return o.BuildType.Production;
          }
        }),
        (t.getAppContext = (e) => {
          const r = e.getPlatformInfo(),
            o = e.getState().device.application.settings.buildType;
          return {
            platform: (0, t.platformStringToAppPlatform)(r.platformName),
            version: ((n = r.appVersion), (a = i.config.MANIFEST_VERSION), a ? n + "-mv" + a : n),
            build_type: (0, t.applicationBuildTypeToHermesBuildType)(o)
          };
          var n, a;
        }),
        (t.getBrowserContext = () => ({
          name: n.browser.getBrowserName(),
          version: n.browser.getBrowserVersion(),
          user_agent: n.navigator.getNavigator().userAgent
        })),
        (t.getOsType = (e) => {
          let t = o.OsType.Other;
          const r = e.os.toLowerCase().replace(/[ -/]+/g, "_");
          return (
            Object.values(o.OsType)
              .map((e) => e.toString())
              .includes(r) && (t = r),
            t
          );
        }),
        (t.getOsVersion = (e) => {
          const t = "Mac OS" === e.os ? e.osVersion.replace("OS_X_", "").replace(/_/g, ".") : e.osVersion,
            r = /([0-9]{1,3}(?:\.[0-9]{0,4}){0,2})/.exec(t);
          return r && r.length >= 2 ? r[1] : "0";
        }),
        (t.getOsContext = (e) => {
          const r = e.getPlatformInfo();
          return { type: (0, t.getOsType)(r), version: (0, t.getOsVersion)(r), locale: r.lang };
        }),
        (t.chunkArray = function e(t, r) {
          return t.length <= r ? [t] : [t.slice(0, r), ...e(t.slice(r), r)];
        });
    },
    774412: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeEventLoggerService = t.bootstrap = void 0);
      const o = r(660765),
        n = r(348749),
        i = r(526415),
        a = r(802246),
        s = r(187564),
        c = r(610460),
        d = r(578671),
        l = r(499921);
      var u = r(352895);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return u.bootstrap;
        }
      }),
        (t.makeEventLoggerService = (e) => {
          let t = null;
          const r = () => {
            if (!t) throw new Error("makeEventLoggerService: You must call initRepository() before getting the repository instance");
            const r = e.storeService.getUserSession();
            return (
              (r.analyticsIds?.userAnalyticsId || r.analyticsIds?.deviceAnalyticsId) &&
                t.setTrackingInfo(r.analyticsIds.userAnalyticsId, r.analyticsIds.deviceAnalyticsId),
              t
            );
          };
          return {
            initRepository: () => {
              const r = e.storeService,
                s = (0, i.getAppContext)(r),
                c = (0, i.getOsContext)(r),
                d = (0, i.getBrowserContext)(),
                u = (0, a.getCommonAppSetting)("installationId"),
                S = new l.EventLoggerStoreFactory(r);
              t = new o.LogRepository(s, c, d, u, void 0, !1, S);
              const p = r.getUserSession();
              (p.analyticsIds?.userAnalyticsId || p.analyticsIds?.deviceAnalyticsId) &&
                t.setTrackingInfo(p.analyticsIds.userAnalyticsId, p.analyticsIds.deviceAnalyticsId),
                3 === n.config.MANIFEST_VERSION && t.setServiceWorkerStartTime(new Date().toISOString());
            },
            getRepository: r,
            logEvent: async (o) => {
              const { interactionDataConsent: n } = await (0, d.getGlobalExtensionSettings)(e);
              if (!1 !== n) return r().createLogger().logEvent(o), (0, c.storeEventsInQueue)(e, t);
            },
            logSync: async (o) => {
              const { interactionDataConsent: n } = await (0, d.getGlobalExtensionSettings)(e);
              if (!1 !== n) return r().createLogger().logEvent(o), (0, c.storeEventsInQueue)(e, t);
            },
            flushEventQueue: () => (0, s.sendEventQueueToStyx)(e)
          };
        });
    },
    4296: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.immediatelySendEvents = t.queueEvents = t.queueLogRepositoryEvents = void 0);
      const o = r(453576),
        n = r(859600),
        i = r(130913),
        a = r(187564),
        s = r(610460);
      async function c(e, t) {
        const r = t.logStorage.containsPriorityEvent();
        try {
          return (
            await (0, s.storeEventsInQueue)(e, t),
            r ? await (0, a.sendEventQueueToStyx)(e) : { success: !0, result: o.StyxApiResult.NoBatchesSent }
          );
        } catch (e) {
          return { success: !1, result: o.StyxApiResult.NoBatchesSent };
        }
      }
      async function d(e, t) {
        try {
          return await (0, a.immediatelySendEventsToStyx)(e, t);
        } catch (e) {
          return { success: !1, result: o.StyxApiResult.NoBatchesSent };
        }
      }
      (t.queueLogRepositoryEvents = async function (e, t) {
        return (0, i.applicationBuildTypeSelector)(e.storeService.getState()) === n.ApplicationBuildType.QA ? d(e, t) : c(e, t);
      }),
        (t.queueEvents = c),
        (t.immediatelySendEvents = d);
    },
    719764: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.eventLoggerReducer = void 0);
      const o = r(838912);
      t.eventLoggerReducer = (e = {}, t) => {
        switch (t.type) {
          case o.CREATE_EVENT_LOGGER_VIRTUAL_STORE:
            return { [t.storeName]: t.initialState };
          case o.UPDATE_EVENT_LOGGER_STATE:
            return { [t.storeName]: t.updater(e[t.storeName]) };
          default:
            return e;
        }
      };
    },
    239261: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.styxKeysSelector = void 0),
        (t.styxKeysSelector = (e) => e.userSession.sdkAuthentication.styxKeys);
    },
    187564: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.immediatelySendEventsToStyx = t.sendEventQueueToStyx = void 0);
      const o = r(453576),
        n = r(802246),
        i = r(145956),
        a = r(676330),
        s = r(287911),
        c = r(526415),
        d = r(610460),
        l = 450;
      let u = !1;
      async function S(e, t, r) {
        let o = [];
        if (!t || 0 === t.length) return o;
        const n = (0, a.getMakeStyxApiRequest)(r, i.ApiAuthType.App, i.ApiRequestMethod.POST),
          s = (0, c.chunkArray)(t, l);
        try {
          for (const t of s) {
            if (!(await n(e, { payload: (0, a.getEventsPayload)(t) })).success) break;
            o = o.concat(t.map(({ id: e }) => e));
          }
        } catch {
          return o;
        }
        return o;
      }
      (t.sendEventQueueToStyx = async function (e) {
        if (!0 === u) return { success: !0, result: o.StyxApiResult.NoBatchesSent };
        u = !0;
        const { storageService: t, storeService: r } = e,
          i = t.getLocalStorage(),
          a = (0, n.getCommonAppSetting)("eventLoggerQueueKey");
        if (!(await i.itemExists(d.EVENT_QUEUE_STORAGE_KEY))) return (u = !1), { success: !0, result: o.StyxApiResult.NoBatchesSent };
        const c = await i.readItem(d.EVENT_QUEUE_STORAGE_KEY);
        if (!c) return (u = !1), { success: !0, result: o.StyxApiResult.NoBatchesSent };
        if ("string" != typeof c) throw new Error("value of EventLogger.eventQueue is expected to be a string");
        const l = await (0, s.decryptEvents)(r, c, a),
          p = l.filter((e) => "anonymous" === e.category),
          m = l.filter((e) => "user" === e.category),
          g = await S(r, p, "/v1/event/anonymous"),
          E = await S(r, m, "/v1/event/user"),
          A = await i.readItem(d.EVENT_QUEUE_STORAGE_KEY);
        if ("string" != typeof A) throw new Error("value of EventLogger.eventQueue is expected to be a string");
        const I = (await (0, s.decryptEvents)(r, A, a)).filter(({ id: e }) => !(g.includes(e) || E.includes(e))),
          y = await (0, s.encryptEvents)(r, I, a);
        await i.writeItem(d.EVENT_QUEUE_STORAGE_KEY, y);
        const v = g.length > 0 || E.length > 0,
          T = 0 === y.length;
        let _ = o.StyxApiResult.NoBatchesSent;
        return T ? (_ = o.StyxApiResult.AllBatchesSent) : v && (_ = o.StyxApiResult.SomeBatchesSent), (u = !1), { success: !0, result: _ };
      }),
        (t.immediatelySendEventsToStyx = async function (e, t) {
          const { storeService: r } = e,
            n = t.logStorage.copy();
          t.logStorage.removeEvents(n.map((e) => e.id));
          const i = n.filter((e) => "anonymous" === e.category),
            a = n.filter((e) => "user" === e.category),
            s = await S(r, i, "/v1/event/anonymous"),
            c = await S(r, a, "/v1/event/user"),
            d = s.length > 0 || c.length > 0,
            l = s.length + c.length === n.length;
          let u = o.StyxApiResult.NoBatchesSent;
          return l ? (u = o.StyxApiResult.AllBatchesSent) : d && (u = o.StyxApiResult.SomeBatchesSent), { success: !0, result: u };
        });
    },
    566102: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.flushQueue = t.logToggleAnalyticsEvent = t.logPageView = t.logEvent = void 0);
      const o = r(660765),
        n = r(453576),
        i = r(578671),
        a = r(526415),
        s = r(4296),
        c = r(187564),
        d = r(610460);
      (t.logEvent = async function (e, t) {
        const { interactionDataConsent: r } = await (0, i.getGlobalExtensionSettings)(e);
        if (!1 === r) return { result: n.StyxApiResult.NoBatchesSent, success: !1 };
        const { logger: o, logRepository: c } = (0, a.createLogger)(e);
        return o.logEvent(t.event), (0, s.queueLogRepositoryEvents)(e, c);
      }),
        (t.logPageView = async function (e, t) {
          const { interactionDataConsent: r } = await (0, i.getGlobalExtensionSettings)(e);
          if (!1 === r) return { result: n.StyxApiResult.NoBatchesSent, success: !1 };
          const { logger: o, logRepository: c } = (0, a.createLogger)(e);
          return o.logView(t.pageView, t.browseComponent), (0, s.queueLogRepositoryEvents)(e, c);
        }),
        (t.logToggleAnalyticsEvent = async function (e) {
          const { interactionDataConsent: t } = await (0, i.getGlobalExtensionSettings)(e),
            { logger: r, logRepository: n } = (0, a.createLogger)(e),
            c = !1 !== t;
          if ((c || (0, d.clearEventQueue)(e, n), r.logEvent(new o.UserToggleAnalyticsEvent({ isAnalyticsEnabled: c })), !t))
            try {
              return (0, s.immediatelySendEvents)(e, n);
            } catch {
              return (0, s.queueLogRepositoryEvents)(e, n);
            }
          return (0, s.queueLogRepositoryEvents)(e, n);
        }),
        (t.flushQueue = function (e) {
          return (0, c.sendEventQueueToStyx)(e);
        });
    },
    610460: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.clearEventQueue = t.storeEventsInQueue = t.EVENT_QUEUE_STORAGE_KEY = void 0);
      const o = r(802246),
        n = r(287911);
      (t.EVENT_QUEUE_STORAGE_KEY = "EventLogger.eventQueue"),
        (t.storeEventsInQueue = async function (e, r) {
          const { storageService: i, storeService: a } = e,
            s = i.getLocalStorage(),
            c = (0, o.getCommonAppSetting)("eventLoggerQueueKey"),
            d = r.logStorage.copy();
          let l = [];
          const u = [];
          if (await s.itemExists(t.EVENT_QUEUE_STORAGE_KEY)) {
            const e = await s.readItem(t.EVENT_QUEUE_STORAGE_KEY);
            if ("string" != typeof e) throw new Error("value of EventLogger.eventQueue is expected to be a string");
            e && (l = await (0, n.decryptEvents)(a, e, c));
          }
          (l = l.concat(d)), l.map((e) => (u.filter((t) => t.id === e.id).length > 0 ? null : u.push(e)));
          const S = await (0, n.encryptEvents)(a, u, c);
          await s.writeItem(t.EVENT_QUEUE_STORAGE_KEY, S);
          const p = d.map((e) => e.id);
          r.logStorage.removeEvents(p);
        }),
        (t.clearEventQueue = async function (e, r) {
          const { storageService: i, storeService: a } = e,
            s = i.getLocalStorage(),
            c = (0, o.getCommonAppSetting)("eventLoggerQueueKey"),
            d = await (0, n.encryptEvents)(a, [], c);
          await s.writeItem(t.EVENT_QUEUE_STORAGE_KEY, d);
          const l = r.logStorage.copy().map((e) => e.id);
          r.logStorage.removeEvents(l);
        });
    },
    499921: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventLoggerStoreFactory = void 0);
      const o = r(838912);
      t.EventLoggerStoreFactory = class {
        constructor(e) {
          this.storeService = e;
        }
        createStore(e, t) {
          const { storeService: r } = this;
          return r.dispatch((0, o.createEventLoggerVirtualStore)({ storeName: e, initialState: t.initialState })), this.makeStore(e);
        }
        getStore(e) {
          if (!this.hasStore(e)) throw new Error(`Store ${e} was not found`);
          return this.makeStore(e);
        }
        hasStore(e) {
          const { storeService: t } = this;
          return e in t.getState().device.eventLogger;
        }
        makeStore(e) {
          const { storeService: t } = this;
          return {
            getState: () => t.getState().device.eventLogger[e],
            updateState: (r) => t.dispatch((0, o.updateEventLoggerVirtualStoreState)({ storeName: e, updater: r }))
          };
        }
      };
    },
    533341: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(714414);
      t.config = { commands: { logException: { handler: o.logException } }, liveQueries: {}, queries: {} };
    },
    555101: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(533341);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    670252: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendTypedExceptionLog = t.sendExceptionLog = t.setAllowedToSendExceptionLog = t.bootstrap = void 0);
      const o = r(74450),
        n = r(212126),
        i = r(795623);
      var a = r(555101);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
      let s = !0;
      (t.setAllowedToSendExceptionLog = (e) => (s = e)),
        (t.sendExceptionLog = async function (e) {
          if (s)
            try {
              await (0, o.default)((0, n.default)("carbonException", e));
            } catch (e) {
              i.Debugger.error(`[Exception] - sendExceptionLog: ${e.message || e}`);
            }
        }),
        (t.sendTypedExceptionLog = async function (e, t) {
          if (s)
            try {
              await (0, o.default)((0, n.default)(e, t));
            } catch (e) {
              i.Debugger.error(`[Exception] - sendTypedExceptionLog: ${e.message || e}`);
            }
        });
    },
    212126: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.anonymousSessionId = void 0);
      const o = r(235992),
        n = r(453576),
        i = r(786056),
        a = r(392263),
        s = r(348749);
      function c(e) {
        const r = (function (e) {
          const t = { ...e, codeName: s.config.CODE_NAME, manifestVersion: s.config.MANIFEST_VERSION };
          return JSON.stringify(t);
        })(e.additionalInfo);
        return {
          action: "logOnline",
          code: e.code === n.ExceptionCriticality.WARNING ? n.ExceptionCriticality.WARNING : n.ExceptionCriticality.ERROR,
          message: e.message || "",
          exceptiontype: e.type,
          functionName: e.funcName,
          file: e.fileName,
          legacy: Boolean(e.legacy),
          line: e.line,
          stack: e.precisions,
          sessionId: t.anonymousSessionId,
          additionalInfo: r,
          errorCount: 1,
          featureFlips: [],
          initialUseCaseModule: e.initialUseCaseModule ?? "carbon",
          initialUseCaseName: e.initialUseCaseName,
          useCaseStacktrace: e.useCaseStacktrace ?? []
        };
      }
      function d(e, t) {
        const r = t;
        if (r.error) {
          const t =
              r.error.precisions && "string" == typeof r.error.precisions ? `${r.error.message}\n${r.error.precisions}` : r.error.message,
            o = (0, a.isCarbonError)(r.error) ? r.error.getAdditionalInfo() : {};
          return c({
            type: e,
            message: t,
            code: r.code || r.error.errorLevel,
            precisions: r.error.stack,
            additionalInfo: o,
            initialUseCaseModule: "carbon",
            initialUseCaseName: ""
          });
        }
        return c(Object.assign({ type: e }, t));
      }
      (t.anonymousSessionId = (0, o.v4)()),
        (t.default = function (e, t) {
          return {
            ...((r = (0, i.getPlatformInfo)()),
            {
              type: r.platformName,
              version: r.appVersion,
              osVersion: r.osVersion,
              browser: r.browser,
              browserVersion: r.browserVersion,
              os: r.os
            }),
            ...d(e, t)
          };
          var r;
        });
    },
    74450: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EXCEPTION_LOG_ENDPOINT = void 0);
      const o = r(428445),
        n = r(795623);
      t.EXCEPTION_LOG_ENDPOINT = "https://kck3hlb9.dashlane.com/1/softwarelog/create";
      t.default = function (e) {
        return (function (e, t, r) {
          const o = e.message || e.functionName || e.file || "UNKNOWN_EXCEPTION";
          return (i[o] = i[o] || 0), i[o]++, i[o] > 10 ? Promise.resolve() : r();
        })(e, 0, () =>
          (0, o.postDataToUrl)(t.EXCEPTION_LOG_ENDPOINT, e)
            .then(() => {})
            .catch((e) => n.default.log(e))
        );
      };
      const i = {};
    },
    714414: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.logException = void 0);
      const o = r(670252);
      t.logException = async function (e, t) {
        return await (0, o.sendTypedExceptionLog)(t.exceptionType, t.log), { success: !0 };
      };
    },
    32588: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EXCEPTION_LOG_TAG = t.DEBUGGER_LOG_TAG = t.LOGS_LOG_TAG = void 0),
        (t.LOGS_LOG_TAG = "Logs"),
        (t.DEBUGGER_LOG_TAG = "Debugger"),
        (t.EXCEPTION_LOG_TAG = "Exception");
    },
    888393: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(424375),
        n = r(255111),
        i = r(790235),
        a = r(926972),
        s = r(356857);
      t.config = {
        commands: {
          markNotificationAsInteracted: { handler: o.markNotificationAsInteracted },
          markNotificationAsSeen: { handler: n.markNotificationAsSeen },
          markNotificationAsUnseen: { handler: i.markNotificationAsUnseen }
        },
        queries: { getNotificationStatus: { selector: s.notificationsStatusSelector } },
        liveQueries: { liveNotificationStatus: { operator: a.notificationsStatus$ } }
      };
    },
    942122: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(888393);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    70530: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(942122);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    424375: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.markNotificationAsInteracted = void 0);
      const o = r(434287),
        n = r(356857);
      t.markNotificationAsInteracted = async (e, t) => {
        const { storeService: r, localStorageService: i } = e;
        r.dispatch((0, o.markAsInteracted)(t));
        const a = (0, n.notificationsStatusSelector)(r.getState());
        i.getInstance().storeNotificationsStatus(a);
      };
    },
    255111: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.markNotificationAsSeen = void 0);
      const o = r(434287),
        n = r(356857);
      t.markNotificationAsSeen = async (e, t) => {
        const { storeService: r, localStorageService: i } = e;
        r.dispatch((0, o.markAsSeen)(t));
        const a = (0, n.notificationsStatusSelector)(r.getState());
        i.getInstance().storeNotificationsStatus(a);
      };
    },
    790235: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.markNotificationAsUnseen = void 0);
      const o = r(434287),
        n = r(356857);
      t.markNotificationAsUnseen = async (e, t) => {
        const { storeService: r, localStorageService: i } = e;
        r.dispatch((0, o.markAsUnseen)(t));
        const a = (0, n.notificationsStatusSelector)(r.getState());
        i.getInstance().storeNotificationsStatus(a);
      };
    },
    462952: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(657470),
        n = r(445709),
        i = r(691880);
      t.config = {
        commands: {
          generatePassword: { handler: o.generatePasswordHandler },
          generateAndSavePassword: { handler: o.generateAndSavePasswordHandler },
          savePasswordGenerationSettings: { handler: n.savePasswordGenerationSettingsHandler }
        },
        queries: { getPasswordGenerationSettings: { selector: i.passwordGenerationSettingsSelector } },
        liveQueries: {}
      };
    },
    664811: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(462952);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    657470: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.generateAndSavePasswordHandler = t.generatePasswordHandler = void 0);
      const o = r(947975),
        n = r(795623),
        i = r(670252),
        a = r(405464);
      (t.generatePasswordHandler = async function (e, t) {
        try {
          const r = (0, a.makeSessionController)(e).generatePassword(t.settings);
          return { success: !0, password: r, strength: await (0, o.evaluatePasswordStrength)(r) };
        } catch (e) {
          return (0, n.logError)(e), (0, i.sendExceptionLog)({ error: e }), { success: !1 };
        }
      }),
        (t.generateAndSavePasswordHandler = async function (e, t) {
          try {
            const r = (0, a.makeSessionController)(e).generateAndSavePassword(t.url);
            return { success: !0, password: r, strength: await (0, o.evaluatePasswordStrength)(r) };
          } catch (e) {
            return (0, n.logError)(e), (0, i.sendExceptionLog)({ error: e }), { success: !1 };
          }
        });
    },
    445709: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.savePasswordGenerationSettingsHandler = void 0);
      const o = r(660765),
        n = r(795623),
        i = r(670252),
        a = r(344908),
        s = r(515868),
        c = r(823136);
      t.savePasswordGenerationSettingsHandler = async function (e, t) {
        try {
          const n = {
            GeneratorDefaultSize: (r = (0, a.fixIncoherentSettings)(t)).length,
            GeneratorDefaultAvoidAmbiguousChars: r.avoidAmbiguous,
            GeneratorDefaultDigits: r.digits,
            GeneratorDefaultLetters: r.letters,
            GeneratorDefaultSymbols: r.symbols
          };
          (0, s.updatePersonalSettings)(e.storeService, e.sessionService, n),
            (0, c.getDebounceSync)(e.storeService, e.sessionService)({ immediateCall: !0 }, o.Trigger.SettingsChange);
        } catch (e) {
          (0, n.logError)(e), (0, i.sendExceptionLog)({ error: e });
        }
        var r;
      };
    },
    691880: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.passwordGenerationSettingsSelector = void 0);
      const o = r(416593),
        n = r(344908);
      t.passwordGenerationSettingsSelector = function (e) {
        const t = (0, o.personalSettingsSelector)(e);
        return (0, n.getDefaultPasswordGenerationSettings)(t);
      };
    },
    576860: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkPasswordLeaked = void 0),
        (t.checkPasswordLeaked = async function (e, t) {
          const { password: r } = t,
            { applicationModulesAccess: o } = e,
            {
              commands: { temporaryCheckMasterPassword: n }
            } = o.createClients().masterPasswordSecurity;
          await n({ password: r });
        });
    },
    314064: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkPasswordWeak = void 0),
        (t.checkPasswordWeak = async function (e, t) {
          const { password: r } = t,
            { applicationModulesAccess: o } = e,
            {
              commands: { temporaryCheckMasterPasswordWeak: n }
            } = o.createClients().masterPasswordSecurity;
          await n({ password: r });
        });
    },
    84264: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shouldTriggerMasterPasswordWeakCheck = t.shouldTriggerMasterPasswordLeakCheck = void 0);
      const o = r(288205),
        n = r(416593);
      (t.shouldTriggerMasterPasswordLeakCheck = function (e) {
        return (0, n.isAuthenticatedSelector)(e);
      }),
        (t.shouldTriggerMasterPasswordWeakCheck = async function (e, t) {
          return (
            !!(0, n.isAuthenticatedSelector)(t) && (await (0, o.makeFeatureFlipsSelectors)(e).featureFlipsSelector()).ims_web_weak_mp_prod
          );
        });
    },
    143057: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(620478);
      t.setupSubscriptions = async function (e, t) {
        e.sessionOpened.on(() => (0, o.triggerMasterPasswordLeakCheck)(t));
      };
    },
    620478: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.triggerMasterPasswordLeakCheck = void 0);
      const o = r(576860),
        n = r(416593),
        i = r(538981),
        a = r(84264),
        s = r(314064);
      t.triggerMasterPasswordLeakCheck = async function (e) {
        const t = e.storeService.getState();
        if ((0, i.isSSOUserSelector)(t)) return;
        const r = (0, n.masterPasswordSelector)(t);
        (0, o.checkPasswordLeaked)(e, { password: r }),
          (await (0, a.shouldTriggerMasterPasswordWeakCheck)(e.applicationModulesAccess, t)) &&
            (0, s.checkPasswordWeak)(e, { password: r });
      };
    },
    834161: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(130467),
        n = r(353264),
        i = r(418693),
        a = r(497475),
        s = r(150893);
      t.config = {
        commands: {
          cancelAutoRenew: { handler: i.cancelAutoRenew },
          downloadCustomerInvoice: { handler: n.downloadCustomerInvoice },
          fetchInvoiceList: { handler: a.fetchInvoiceList },
          requestRefund: { handler: s.requestRefund }
        },
        queries: {
          getInvoicesCount: { selector: o.allInvoicesLengthSelector },
          getInvoiceList: { selector: o.viewedQueriedInvoicesSelector },
          getInvoiceListYears: { selector: o.invoiceListYearsSelector }
        },
        liveQueries: {}
      };
    },
    278025: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(834161);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    418693: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.cancelAutoRenew = void 0);
      const o = r(670252);
      t.cancelAutoRenew = async function (e) {
        const { sessionService: t, storeService: r } = e;
        if (!r.isAuthenticated()) return { success: !1 };
        try {
          return await t.getInstance().payment.cancelPremiumSubscription(), { success: !0 };
        } catch (e) {
          const t = `[SessionController] - cancelPremiumSubscription: ${e}`,
            r = new Error(t);
          return (0, o.sendExceptionLog)({ error: r }), { success: !1, error: { code: t } };
        }
      };
    },
    353264: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.downloadCustomerInvoice = void 0);
      const o = r(46298),
        n = r(448008);
      t.downloadCustomerInvoice = async function (e, t) {
        const { storeService: r } = e,
          i = r.getUserLogin(),
          a = await (0, n.getCustomerInvoice)(r, i, t);
        return (0, o.isApiError)(a)
          ? { success: !1 }
          : { success: !0, data: JSON.stringify({ data: Array.apply(null, new Uint8Array(a.data)) }) };
      };
    },
    497475: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fetchInvoiceList = void 0);
      const o = r(46298),
        n = r(936273),
        i = r(95944);
      t.fetchInvoiceList = async function (e) {
        const { storeService: t } = e,
          r = t.getUserLogin();
        if (!t.isAuthenticated()) return { success: !1 };
        try {
          const e = await (0, n.listInvoices)(t, r);
          return (0, o.isApiError)(e) ? { success: !1 } : (t.dispatch((0, i.receivedInvoiceList)(e.invoices)), { success: !0 });
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    150893: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestRefund = void 0);
      const o = r(46298),
        n = r(848523),
        i = r(405464);
      t.requestRefund = async function (e, t) {
        const { sessionService: r, storeService: a, wsService: s } = e,
          c = a.getUserLogin();
        if (!a.isAuthenticated()) return { success: !1 };
        try {
          const e = await (0, n.grantFullRefundAndCancelSubscription)(a, c, t);
          return (0, o.isApiError)(e) ? { success: !1 } : (t && !t.dryRun && (0, i.refeshAccountInfo)(a, r, s), { success: !0 });
        } catch (e) {
          return { success: !1 };
        }
      };
    },
    707753: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(278025);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    498584: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getInvoiceMappers = void 0);
      const o = r(400251);
      t.getInvoiceMappers = () => ({
        amountPaid: (e) => e.amountPaid,
        invoiceId: (e) => e.invoiceId,
        planName: (e) =>
          ((e) =>
            "advanced" === e.planFeature
              ? "ADVANCED"
              : "essentials" === e.planFeature
              ? "ESSENTIALS"
              : ["family_created", "family_renewed"].includes(e.eventType)
              ? "FAMILY"
              : "sync" === e.planFeature
              ? "PREMIUM"
              : "OTHER")(e),
        startDate: (e) => e.startDate,
        startYear: (e) => ((e) => (0, o.fromUnixTime)(e.startDate).getFullYear().toString())(e)
      });
    },
    973938: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(28903),
        n = r(64331),
        i = r(281846),
        a = r(84547);
      t.config = {
        commands: {
          unlockProtectedItems: { handler: o.unlockProtectedItems },
          disableCredentialProtection: { handler: a.disableCredentialProtectionHandler }
        },
        queries: { areProtectedItemsUnlocked: { selector: i.areProtectedItemsAvailableSelector } },
        liveQueries: { liveAreProtectedItemsUnlocked: { operator: n.areProtectedItemsUnlocked$ } }
      };
    },
    28903: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.unlockProtectedItems = void 0);
      const o = r(453576),
        n = r(628287);
      t.unlockProtectedItems = async function (e, t) {
        const { storeService: r, masterPasswordEncryptorService: i } = e;
        return (await (0, n.validateMasterPassword)(r, i, t))
          ? { status: o.UnlockProtectedItemsStatus.SUCCESS }
          : { status: o.UnlockProtectedItemsStatus.ERROR, error: { code: o.unlockProtectedItemsWrongPasswordError } };
      };
    },
    364710: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(973938);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    84547: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.disableCredentialProtectionHandler = void 0);
      const o = r(453576),
        n = r(18344);
      t.disableCredentialProtectionHandler = async function (e, { credentialId: t }) {
        const { storeService: r, sessionService: i, eventLoggerService: a, applicationModulesAccess: s } = e;
        try {
          return (
            await (0, n.disableCredentialProtection)(
              { storeService: r, sessionService: i, eventLoggerService: a, applicationModulesAccess: s },
              t
            ),
            { status: o.DisableCredentialProtectionStatus.SUCCESS }
          );
        } catch (e) {
          return { status: o.DisableCredentialProtectionStatus.ERROR };
        }
      };
    },
    18344: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.disableCredentialProtection = void 0);
      const o = r(719736),
        n = r(688779),
        i = ({ update: { autoprotected: e } }) => ({ AutoProtected: e });
      t.disableCredentialProtection = async function (
        { storeService: e, sessionService: t, eventLoggerService: r, applicationModulesAccess: a },
        s
      ) {
        const c = e.getState();
        if (!(0, o.credentialSelector)(c, s)) throw new Error("Credential does not exist, cant update");
        (0, n.updateCredential)(
          { storeService: e, sessionService: t, eventLoggerService: r, applicationModulesAccess: a },
          { id: s, update: { autoprotected: !1 } },
          i
        );
      };
    },
    988530: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(364710);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    64331: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.areProtectedItemsUnlocked$ = void 0);
      const o = r(518948),
        n = r(281846),
        i = r(903343);
      t.areProtectedItemsUnlocked$ = () =>
        (0, o.pipe)(
          (0, i.map)((e) => (0, o.interval)(1e3).pipe((0, i.map)(() => e))),
          (0, i.switchMap)((e) => e),
          (0, i.map)(n.areProtectedItemsAvailableSelector),
          (0, i.distinctUntilChanged)()
        );
    },
    281846: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areProtectedItemsAvailableSelector = t.areProtectedItemsUnlockedSelector = void 0);
      const o = r(538981),
        n = r(416593);
      (t.areProtectedItemsUnlockedSelector = (e) =>
        Date.now() - (0, n.lastMasterPasswordCheckSelector)(e) <
        ((e) => (/^kw_test_auto_fmpc_.*/.test((0, n.userLoginSelector)(e)) ? 5e3 : 3e5))(e)),
        (t.areProtectedItemsAvailableSelector = (e) => (0, t.areProtectedItemsUnlockedSelector)(e) || (0, o.isSSOUserSelector)(e));
    },
    920054: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(685423),
        n = r(197810),
        i = r(443591),
        a = r(416593),
        s = r(18191);
      t.config = {
        commands: {
          activateAccountRecovery: { handler: n.activateAccountRecovery },
          setupMasterPasswordForRecovery: { handler: i.setupMasterPasswordForRecovery },
          deactivateAccountRecovery: { handler: n.deactivateAccountRecovery },
          registerDeviceForRecovery: { handler: i.registerDeviceForRecovery },
          startAccountRecovery: { handler: i.startAccountRecovery },
          sendRecoveryRequest: { handler: i.sendRecoveryRequest },
          cancelRecoveryRequest: { handler: i.cancelRecoveryRequest },
          checkRecoveryRequestStatus: { handler: i.checkRecoveryRequestStatus },
          recoverUserData: { handler: i.recoverUserData },
          checkDoesLocalRecoveryKeyExist: { handler: i.checkDoesLocalRecoveryKeyExist },
          isRecoveryRequestPending: { handler: n.isRecoveryRequestPending }
        },
        queries: {
          getRecoveryOptInSetting: { selector: a.accountRecoveryOptInSelector },
          getShouldShowFeatureActivationModal: {
            selectorFactory: async (e) => (await (0, o.makeRecoverySelectors)(e)).shouldShowFeatureActivationModalSelector
          },
          getAccountRecoveryRequestCount: { selector: o.accountRecoveryRequestsCountSelector }
        },
        liveQueries: { liveAccountRecoveryRequestCount: { operator: s.accountRecoveryRequestsCount$ } }
      };
    },
    515444: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeRecoveryController = void 0);
      const o = r(736513),
        n = r(795623),
        i = r(670252),
        a = r(134376),
        s = r(543927);
      function c(e, t, r) {
        return (0, i.sendExceptionLog)({ error: t }), n.Debugger.log(e, t), { error: { message: t.message, action: r } };
      }
      t.makeRecoveryController = (e, t) => ({
        getMasterPasswordResetDemandList: (r) =>
          (function (e, t, r, o) {
            const n = o.teamId;
            return t.recovery
              .getPendingRequests({ login: r.login, uki: r.uki, teamId: n })
              .then((t) => {
                const o = e.getTeamAdminData(),
                  i = Object.assign({}, o),
                  a = t.filter((e) => e.login !== r.login);
                return (
                  i.teams[n] && ((i.teams[n].notifications = { accountRecoveryRequests: a }), (0, s.updateTeamAdminData)(e, i)),
                  { demands: a }
                );
              })
              .catch((e) => ({ demands: [], error: c("Master Password Reset: Error while getPendingRequests", e, o).error }));
          })(e, t, (0, a.getCurrentUserInfo)(e), r),
        acceptMasterPasswordResetDemand: (r) =>
          (function (e, t, r) {
            const n = (0, o.makeAsymmetricEncryption)();
            return n
              .decrypt(t.privateKey, r.recoveryKey)
              .then((e) => n.encrypt(r.userPublicKey, e))
              .then((o) => e.recovery.acceptRequest({ login: t.login, uki: t.uki, sourceLogin: r.login, payload: o }))
              .then(() => ({}))
              .catch((e) => c("Master Password Reset: Error while acceptRequest", e, r));
          })(t, (0, a.getCurrentUserInfo)(e), r),
        declineMasterPasswordResetDemand: (r) =>
          (function (e, t, r) {
            return e.recovery
              .refuseRequest({ login: t.login, uki: t.uki, sourceLogin: r.login })
              .then(() => ({}))
              .catch((e) => c("Master Password Reset: Error while refuseRequest", e, r));
          })(t, (0, a.getCurrentUserInfo)(e), r)
      });
    },
    63395: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(920054);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    976569: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(63395);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    18191: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.accountRecoveryRequestsCount$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(685423);
      t.accountRecoveryRequestsCount$ = function () {
        return (0, o.pipe)(
          (0, n.map)((e) => (0, i.accountRecoveryRequestsCountSelector)(e)),
          (0, n.distinctUntilChanged)()
        );
      };
    },
    685423: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeRecoverySelectors =
          t.accountRecoveryRequestsCountSelector =
          t.selectTeamAdminData =
          t.recoveryHashFromPremiumStatusSelector =
          t.recoveryHashFromPersonalSettingsSelector =
          t.makeShouldShowFeatureActivationModalSelector =
            void 0);
      const o = r(288205),
        n = r(926634),
        i = r(538981),
        a = r(416593),
        s = r(727885);
      (t.makeShouldShowFeatureActivationModalSelector = async (e) => {
        const t = (await (0, o.makeFeatureFlipsSelectors)(e.applicationModulesAccess).featureFlipsSelector())
            .itadmin_SAEX_CryptoMigration_Phase1,
          r = e.storeService.getState(),
          a = (0, n.isRecoveryEnabledSelector)(r),
          s = "boolean" == typeof r.userSession.personalSettings.RecoveryOptIn,
          c = (0, i.isSSOUserSelector)(r),
          d = r.userSession.session.isFirstSessionAfterAccountCreation;
        return () => !c && t && a && !s && !d;
      }),
        (t.recoveryHashFromPersonalSettingsSelector = (e) => (0, a.personalSettingsSelector)(e).RecoveryHash || ""),
        (t.recoveryHashFromPremiumStatusSelector = (e) => (0, a.premiumStatusSelector)(e).recoveryHash || ""),
        (t.selectTeamAdminData = (e) => e.userSession.teamAdminData ?? { teams: {} }),
        (t.accountRecoveryRequestsCountSelector = (e) => {
          const r = (0, s.getCurrentTeamId)(e.userSession.spaceData);
          if (!r) return 0;
          const { teams: o } = (0, t.selectTeamAdminData)(e);
          return Number(o[r]?.notifications?.accountRecoveryRequests?.length ?? 0);
        }),
        (t.makeRecoverySelectors = async (e) => ({
          shouldShowFeatureActivationModalSelector: await (0, t.makeShouldShowFeatureActivationModalSelector)(e)
        }));
    },
    443591: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.recoverUserData =
          t.checkDoesLocalRecoveryKeyExist =
          t.cancelRecoveryRequest =
          t.checkRecoveryRequestStatus =
          t.sendRecoveryRequest =
          t.setupMasterPasswordForRecovery =
          t.registerDeviceForRecovery =
          t.startAccountRecovery =
            void 0);
      const o = r(453576),
        n = r(670252),
        i = r(770414),
        a = r(25576),
        s = r(487855),
        c = r(736513),
        d = r(46298),
        l = r(429303),
        u = r(416593),
        S = r(816356),
        p = r(958639),
        m = r(195363),
        g = r(188610),
        E = r(747820);
      (t.startAccountRecovery = async function (e, t) {
        const { storeService: r } = e,
          { login: n } = t,
          i = await (0, d.getAuthenticationMethodsForDevice)(r, { login: n, methods: a.remoteSupportedAuthenticationMethod });
        return (0, d.isApiError)(i)
          ? {
              success: !1,
              error: { code: o.RecoveryApiErrorType.StartAccountRecoveryFailed, message: `Start account recovery failed: ${i.message}` }
            }
          : (r.dispatch((0, m.saveRecoverySessionData)({ verificationMethod: i.verifications })),
            { success: !0, verification: i.verifications });
      }),
        (t.registerDeviceForRecovery = async function (e, t) {
          try {
            const { token: r, login: n } = t,
              { storeService: c, wsService: u } = e,
              S = c.getState(),
              p = c.getPlatformInfo().platformName,
              g = !0,
              E = await (0, d.getAuthenticationMethodsForDevice)(c, { login: n, methods: a.remoteSupportedAuthenticationMethod });
            if ((0, d.isApiError)(E))
              return {
                success: !1,
                error: { code: o.RecoveryApiErrorType.RegisterDeviceFailed, message: "Recovery Device request registration failed" }
              };
            const A = (0, l.recoveryIsOtpSelector)(S),
              I = await (0, s.ensureDeviceId)(),
              y = (0, i.generateUki)(I),
              v = { uki: y, login: n, platform: p, temporary: a.PersistData.PERSIST_DATA_NO, recovery: g },
              T = A ? { otp: r } : { token: r };
            if ("SUCCESS" !== (await u.authentication.registerUki({ ...v, ...T })))
              return {
                success: !1,
                error: { code: o.RecoveryApiErrorType.RegisterDeviceFailed, message: "Recovery Device registration failed" }
              };
            c.dispatch((0, m.saveRecoverySessionData)({ recoveryUki: y }));
          } catch (e) {
            return (
              (0, n.sendExceptionLog)({ error: e }),
              { success: !1, error: { code: o.RecoveryApiErrorType.RegisterDeviceFailed, message: e.message } }
            );
          }
          return { success: !0 };
        }),
        (t.setupMasterPasswordForRecovery = async function (e, t) {
          let r = "[Account Recovery PI] - Setup Master Password For Recovery ";
          const i = (e) => {
            r += `- ${e} \n`;
          };
          try {
            const { storeService: a, localStorageService: s } = e,
              { masterPassword: d } = t,
              u = a.getState();
            i("recoveryUki select START");
            const p = (0, l.recoveryUkiSelector)(u);
            if (!p) {
              const e = { code: o.RecoveryApiErrorType.SetupMasterPasswordForRecoveryFailed, message: "recoveryUki does not exist" };
              return (
                i(`setupMasterPasswordForRecovery failed with error: ${e.code} ${e.message}`),
                (0, n.sendExceptionLog)({ message: r, funcName: "setupMasterPasswordForRecovery" }),
                { success: !1, error: e }
              );
            }
            i("recoveryUki select SUCCESS"),
              i("dispatch updateMasterPassword START"),
              a.dispatch((0, S.updateMasterPassword)(d)),
              i("dispatch updateMasterPassword SUCCESS"),
              i("makeCyptoService START");
            const g = (0, c.makeCryptoService)();
            i("makeCyptoService SUCCESS"), i("generateRsaKeyPair START");
            const { publicKey: A, privateKey: I } = await g.asymmetricEncryption.generateRsaKeyPair();
            i("generateRsaKeyPair SUCCESS"),
              i("dispatch saveRecoverySessionData START"),
              a.dispatch((0, m.saveRecoverySessionData)({ publicKey: A })),
              i("dispatch saveRecoverySessionData SUCCESS"),
              i("encryptUkiAndPrivateKey START");
            const y = await (0, E.encryptUkiAndPrivateKey)(p, I, d, a);
            return (
              i("encryptUkiAndPrivateKey SUCCESS"),
              i("storeRecoveryData START"),
              await s.getInstance().storeRecoveryData(y),
              i("storeRecoveryData SUCCESS"),
              { success: !0 }
            );
          } catch (e) {
            return (
              i(`setupMasterPasswordForRecovery failed with error: ${e}`),
              (0, n.sendExceptionLog)({ message: r, funcName: "setupMasterPasswordForRecovery", precisions: e.stack }),
              { success: !1, error: { code: o.RecoveryApiErrorType.SetupMasterPasswordForRecoveryFailed, message: e.message } }
            );
          }
        }),
        (t.sendRecoveryRequest = async function (e) {
          try {
            const { storeService: t, wsService: r } = e;
            return await (0, E.sendRecoveryRequestToAdmin)(t, r), { success: !0 };
          } catch (e) {
            return (
              (0, n.sendExceptionLog)({ error: e }),
              { success: !1, error: { code: o.RecoveryApiErrorType.RecoveryRequestFailed, message: e.message } }
            );
          }
        }),
        (t.checkRecoveryRequestStatus = async function (e, t) {
          try {
            const { storeService: r, localStorageService: n, wsService: i } = e,
              { masterPassword: a } = t,
              s = r.getState(),
              c = (0, u.userLoginSelector)(s);
            if (!c) return { success: !1, error: { code: o.RecoveryApiErrorType.CheckRecoveryStatusFailed, message: "Missing login" } };
            r.dispatch((0, S.updateMasterPassword)(a));
            const d = await (0, E.retrieveRecoveryUkiFromStorage)(r, n, a),
              {
                content: { status: l, payload: p, recoveryServerKey: g }
              } = await i.recovery.request({ login: c, uki: d });
            return (
              p && g && r.dispatch((0, m.saveRecoverySessionData)({ userServerProtectedSymmetricalKey: p, recoveryServerKeyBase64: g })),
              { success: !0, response: { status: l } }
            );
          } catch (e) {
            return { success: !1, error: { code: o.RecoveryApiErrorType.CheckRecoveryStatusFailed, message: e.message } };
          }
        }),
        (t.cancelRecoveryRequest = async function (e) {
          try {
            const { storeService: t, localStorageService: r, wsService: o } = e,
              n = t.getState(),
              i = (0, u.userLoginSelector)(n),
              a = (0, u.masterPasswordSelector)(n),
              s = await (0, E.retrieveRecoveryUkiFromStorage)(t, r, a);
            return await o.recovery.cancelRequest({ login: i, uki: s }), await r.getInstance().cleanRecoveryData(), { success: !0 };
          } catch (e) {
            return { success: !1, error: { code: o.RecoveryApiErrorType.CancelRecoveryRequestFailed, message: e.message } };
          }
        }),
        (t.checkDoesLocalRecoveryKeyExist = async function (e) {
          try {
            const { localStorageService: t } = e,
              r = t.getInstance();
            return { success: !0, doesExist: await r.doesRecoveryLocalKeyExist() };
          } catch (e) {
            return { success: !1, error: { code: o.RecoveryApiErrorType.CheckLocalRecoveryKeyFailed, message: e.message } };
          }
        }),
        (t.recoverUserData = async function (e, t) {
          const { localStorageService: r, storeService: i, sessionService: s } = e,
            d = i.getState(),
            S = r.getInstance(),
            A = await (0, E.validateInitialData)(d, S);
          let I = "[Account Recovery PI] - Recover User Data ";
          const y = (e) => {
            I += `- ${e} \n`;
          };
          if (!A.success) return A;
          const { masterPassword: v } = t;
          try {
            y("Extract PrKey START");
            const t = await (0, E.extractPrivateKeyFromRecoveryData)(e, v, y);
            y("Extract PrKey SUCCESS");
            const { userServerProtectedSymmetricalKey: r } = (0, l.recoveryDataSelector)(d),
              s = await (0, c.makeAsymmetricEncryption)();
            y("Decrypt user protected key START");
            const p = await s.decrypt(t, r);
            y("Decrypt user protected key SUCCESS"), y("Decrypt server protected key START");
            const A = await (0, E.extractRecoveryKey)(i, p, y);
            y("Decrypt server protected key SUCCESS"), y("Extract local Key START");
            const T = await (0, E.extractLocalKey)(e, A, y);
            y("Extract local Key SUCCESS"), await (0, E.prepareLocalDataEncryptorService)(e, T), y("Get recovery credentials START");
            const _ = await S.getRecoverySessionCredential();
            y("Get recovery credentials SUCCESS");
            const { masterPassword: f } = JSON.parse(atob(_)),
              C = (0, u.userLoginSelector)(d),
              O = a.PersistData.PERSIST_DATA_YES;
            i.dispatch((0, m.saveRecoverySessionData)({ recoveryInProgress: !0 })), y("Open session START");
            const h = await (0, g.openSessionWithMasterPassword)(
              e,
              C,
              f,
              { isDataPersisted: O, serverKey: (0, u.serverKeySelector)(d) },
              y
            );
            if ((y("Open session SUCCESS"), h !== o.LoginResultEnum.LoggedIn))
              return (
                y("Open session SUCCESS but user not logged in"),
                (0, n.sendExceptionLog)({ message: I, funcName: "recoverUserData" }),
                (0, E.recoveryFlowError)(o.RecoveryApiErrorType.RecoverUserDataFailed, `Unable to login with ${h}`)
              );
            i.dispatch((0, m.saveRecoverySessionData)({ recoveryInProgress: !1, currentPassword: f }));
          } catch (e) {
            return (
              y(`Recovery failed with error: ${e}`),
              (0, n.sendExceptionLog)({ message: I, funcName: "recoverUserData", precisions: e.stack }),
              i.dispatch((0, m.resetRecoverySessionData)()),
              await s.close(),
              (0, p.triggerOpenSessionFailed)(new Error(p.AuthenticationCode[p.AuthenticationCode.WRONG_PASSWORD])),
              (0, E.recoveryFlowError)(o.RecoveryApiErrorType.RecoverUserDataFailed, "Unable to decipher data")
            );
          }
          return { success: !0 };
        });
    },
    747820: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.storeSessionCredentialForRecovery =
          t.prepareLocalDataEncryptorService =
          t.extractLocalKey =
          t.extractRecoveryKey =
          t.extractPrivateKeyFromRecoveryData =
          t.validateInitialData =
          t.recoveryFlowError =
          t.retrieveRecoveryUkiFromStorage =
          t.triggerCleanOrSetupAccountRecovery =
          t.isARFeatureActivatedForUser =
          t.isARAvailableForUser =
          t.sendRecoveryRequestToAdmin =
          t.encryptUkiAndPrivateKey =
          t.resetAdminProtectedSymmetricalKeys =
          t.sendAdminProtectedSymmetricalKeys =
          t.getAdminProtectedSymmetricalKeys =
          t.encryptRecoveryData =
          t.getRecoveryKey =
          t.getSetupRequisitesData =
            void 0);
      const o = r(453576),
        n = r(290622),
        i = r(956668),
        a = r(72365),
        s = r(316038),
        c = r(869530),
        d = r(164910),
        l = r(736513),
        u = r(65675),
        S = r(670252),
        p = r(416593),
        m = r(538981),
        g = r(195363),
        E = r(816356),
        A = r(429303),
        I = r(25576),
        y = r(926634),
        v = r(197810),
        T = r(685423);
      function _(e) {
        const t = e.getState(),
          r = (0, p.activeSpacesSelector)(t)[0],
          o = r?.teamId;
        if (!o) throw new Error("[getSetupRequisitesData] - user should be part of a team to activate Account Recovery");
        const i = Number(o),
          a = (0, p.userLoginSelector)(t),
          s = (0, n.ukiSelector)(t);
        if (!a || !s) throw new Error("[getSetupRequisitesData] - missing login or uki");
        return { teamId: i, login: a, uki: s };
      }
      async function f({ storeService: e, encryptionKey: t, data: r }) {
        const o = (0, a.makeDataEncryptorService)(e),
          n = (0, u.getCryptoConfig)(e);
        o.setInstance({ raw: t }, "", n);
        const i = await o.getInstance().encrypt(r);
        return o.close(), i;
      }
      async function C({ storeService: e, encryptedData: t, encryptionKey: r }) {
        const o = (0, a.makeDataEncryptorService)(e),
          { cryptoConfig: n } = (0, u.parsePayload)(u.ARGON2_DEFAULT_PAYLOAD);
        o.setInstance({ raw: r }, "", n);
        const i = await o.getInstance().decrypt(t, { logging: !0 });
        return o.close(), i;
      }
      function O(e) {
        const t = (0, m.isSSOUserSelector)(e),
          r = (0, y.isRecoveryEnabledSelector)(e);
        return !t && r;
      }
      function h(e) {
        const t = O(e),
          r = (0, p.accountRecoveryOptInSelector)(e);
        return t && r;
      }
      (t.getSetupRequisitesData = async function (e, t) {
        try {
          const { teamId: r, login: o, uki: n } = _(e),
            { content: i } = await t.recovery.getSetupRequisites({ login: o, uki: n, teamId: r });
          return i;
        } catch (e) {
          throw new Error(`[getSetupRequisitesData] - getSetupRequisites failed with error ${e}`);
        }
      }),
        (t.getRecoveryKey = async function (e) {
          const t = e.getState();
          let r,
            o = (0, p.recoveryKeySelector)(t);
          return (
            o ? (r = (0, s.base64ToBuffer)(o)) : ((r = await (0, c.generateAESKey)()), (o = (0, s.bufferToBase64)(r))),
            { recoveryKeyBufferClear: r, recoveryKeyBase64Clear: o, recoveryKeyRawClear: atob(o) }
          );
        }),
        (t.encryptRecoveryData = f),
        (t.getAdminProtectedSymmetricalKeys = async function (e, t) {
          const r = (0, l.makeAsymmetricEncryption)(),
            o = [];
          for (const n of e) {
            const { login: e, publicKey: i } = n,
              a = await r.encrypt(i, t);
            o.push({ login: e, key: a });
          }
          return o;
        }),
        (t.sendAdminProtectedSymmetricalKeys = async function (e, t, r) {
          try {
            const o = JSON.stringify(r),
              { teamId: n, login: i, uki: a } = _(e);
            return void (await t.recovery.setRecoveryClientKeys({ login: i, uki: a, recoveryClientKeys: o, teamId: n }));
          } catch (e) {
            throw new Error(`[sendAdminProtectedSymmetricalKeys] - setRecoveryClientKeys failed with error ${e}`);
          }
        }),
        (t.resetAdminProtectedSymmetricalKeys = async function (e, t) {
          try {
            const { teamId: r, login: o, uki: n } = _(e),
              i = JSON.stringify([]);
            return void (await t.recovery.setRecoveryClientKeys({ login: o, uki: n, recoveryClientKeys: i, teamId: r }));
          } catch (e) {
            throw new Error(`[resetAdminProtectedSymmetricalKeys] - setRecoveryClientKeys failed with error ${e}`);
          }
        }),
        (t.encryptUkiAndPrivateKey = async function (e, t, r, o) {
          const n = JSON.stringify({ recoveryUki: e, privateKey: t }),
            a = (0, i.deflateUtf16)(n);
          return await f({ storeService: o, encryptionKey: r, data: a });
        }),
        (t.sendRecoveryRequestToAdmin = async function (e, t) {
          try {
            const r = e.getState(),
              o = (0, p.userLoginSelector)(r),
              { recoveryUki: n, publicKey: i } = (0, A.recoveryDataSelector)(r);
            if (!o || !n || !i) throw new Error("Missing recoveryUki or publicKey");
            return void (await t.recovery.request({ login: o, uki: n, publicKey: i }));
          } catch (e) {
            throw new Error(`[sendAccountRecoveryRequest] - failed with error ${e}`);
          }
        }),
        (t.isARAvailableForUser = O),
        (t.isARFeatureActivatedForUser = h),
        (t.triggerCleanOrSetupAccountRecovery = async function (e) {
          const { storeService: t, localStorageService: r, wsService: o } = e,
            n = t.getState();
          (0, A.recoveryInProgressSelector)(n) ||
            (await r.getInstance().cleanRecoveryData(),
            (await (async function (e, t) {
              const r = e.getState();
              if (!h(r)) return Promise.resolve(!1);
              const { persistData: o } = e.getAccountInfo();
              if (o === I.PersistData.PERSIST_DATA_NO) return Promise.resolve(!1);
              const n = !!(0, p.recoveryKeySelector)(r),
                i = !!(await t.getInstance().doesRecoveryLocalKeyExist());
              return !n || !i || (0, T.recoveryHashFromPersonalSettingsSelector)(r) !== (0, T.recoveryHashFromPremiumStatusSelector)(r);
            })(t, r))
              ? await (0, v.setupAccountRecoveryForDevice)(t, r, o)
              : (await (async function (e, t) {
                  const r = h(e.getState()),
                    o = t.getInstance(),
                    n = !!(await o.doesRecoveryLocalKeyExist()),
                    i = !!(await o.doesRecoverySessionCredentialExist());
                  return !r && (n || i);
                })(t, r)) && (await r.getInstance().cleanRecoverySetupData()));
        }),
        (t.retrieveRecoveryUkiFromStorage = async function (e, t, r) {
          try {
            const o = await t.getInstance().getRecoveryData(),
              n = await C({ storeService: e, encryptedData: o, encryptionKey: r }),
              a = (0, i.inflateUtf16)(n),
              { recoveryUki: s } = JSON.parse(a);
            return s;
          } catch (e) {
            const t = `retrieveRecoveryUkiFromStorage failed with error ${e.message}`;
            throw new Error(t);
          }
        }),
        (t.recoveryFlowError = (e, t) => {
          const r = new Error(`[AccountRecovery]: ${e} ${t}`);
          return (0, S.sendExceptionLog)({ error: r }), { success: !1, error: { code: e, message: t } };
        }),
        (t.validateInitialData = async function (e, r) {
          if (
            !(await r.doesRecoveryLocalKeyExist()) ||
            !(await r.doesRecoveryDataExist()) ||
            !(await r.doesRecoverySessionCredentialExist())
          )
            return (0, t.recoveryFlowError)(o.RecoveryApiErrorType.RecoverUserDataFailed, "Missing local data");
          const { userServerProtectedSymmetricalKey: n, recoveryServerKeyBase64: i } = (0, A.recoveryDataSelector)(e);
          return n && i ? { success: !0 } : (0, t.recoveryFlowError)(o.RecoveryApiErrorType.RecoveryRequestFailed, "missing payload");
        }),
        (t.extractPrivateKeyFromRecoveryData = async function (e, t, r) {
          const { localStorageService: o, storeService: n } = e,
            a = o.getInstance();
          r("extractPrivateKeyFromRecoveryData - getRecoveryData");
          const c = await a.getRecoveryData(),
            d = n.getPlatformInfo();
          r(`[extra] platform: ${d.platformName}`), r(`[extra] browser: ${d.browser} @ ${d.browserVersion}`);
          const l = (0, s.base64ToBuffer)(c),
            S = (0, u.parseCipheredData)(new Uint8Array(l));
          r(`[extra] cryptoConfig derivation: ${JSON.stringify(S.cryptoConfig)}`),
            r("extractPrivateKeyFromRecoveryData - decryptRecoveryData");
          const p = await C({ storeService: n, encryptedData: c, encryptionKey: t });
          r("extractPrivateKeyFromRecoveryData - inflateUtf16 data");
          const m = (0, i.inflateUtf16)(p);
          r("extractPrivateKeyFromRecoveryData - parse JSON data");
          const { recoveryUki: E, privateKey: A } = JSON.parse(m);
          return n.dispatch((0, g.saveRecoverySessionData)({ recoveryUki: E })), A;
        }),
        (t.extractRecoveryKey = async function (e, t, r) {
          const o = e.getState(),
            { recoveryServerKeyBase64: n } = (0, A.recoveryDataSelector)(o);
          if (!n) throw new Error("Missing payload");
          const i = atob(n),
            a = e.getPlatformInfo();
          r(`[extra] platform: ${a.platformName}`), r(`[extra] browser: ${a.browser} @ ${a.browserVersion}`);
          const c = (0, s.base64ToBuffer)(t),
            d = (0, u.parseCipheredData)(new Uint8Array(c));
          r(`[extra] cryptoConfig derivation: ${JSON.stringify(d.cryptoConfig)}`), r("extractRecoveryKey - decryptRecoveryData");
          const l = await C({ storeService: e, encryptedData: t, encryptionKey: i });
          return r("extractRecoveryKey - arrayBufferToText"), (0, s.arrayBufferToText)(l);
        }),
        (t.extractLocalKey = async function (e, t, r) {
          const { storeService: o, localStorageService: n } = e,
            a = n.getInstance();
          r("extractLocalKey - getRecoveryLocalKey");
          const c = await a.getRecoveryLocalKey(),
            d = e.storeService.getPlatformInfo();
          r(`[extra] platform: ${d.platformName}`), r(`[extra] browser: ${d.browser} @ ${d.browserVersion}`);
          const l = (0, s.base64ToBuffer)(c),
            S = (0, u.parseCipheredData)(new Uint8Array(l));
          r(`[extra] cryptoConfig derivation: ${JSON.stringify(S.cryptoConfig)}`), r("extractLocalKey - decryptRecoveryData");
          const p = await C({ storeService: o, encryptedData: c, encryptionKey: t });
          return r("extractLocalKey - inflateUtf16 localKey"), (0, i.inflateUtf16)(p);
        }),
        (t.prepareLocalDataEncryptorService = async function (e, t) {
          const { localDataEncryptorService: r, storeService: o } = e,
            n = e.storeService.getUserSession().serverKey,
            i = (0, d.getNoDerivationCryptoConfig)();
          r.setInstance({ raw: t }, n, i), await r.getInstance().prepareCrypto(), o.dispatch((0, E.updateLocalKey)(t));
        }),
        (t.storeSessionCredentialForRecovery = async function (e, t) {
          const r = e.getState(),
            o = (0, p.masterPasswordSelector)(r);
          if (h(r) && o) {
            const e = { masterPassword: o, recoveryKey: null },
              r = btoa(JSON.stringify(e));
            await t.getInstance().storeRecoverySessionCredential(r);
          }
        });
    },
    197810: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isRecoveryRequestPending = t.deactivateAccountRecovery = t.setupAccountRecoveryForDevice = t.activateAccountRecovery = void 0);
      const o = r(453576),
        n = r(956668),
        i = r(747820),
        a = r(405464),
        s = r(416593),
        c = r(827517);
      async function d(e, t, r) {
        const { hash: o, recipients: a, recoveryServerKey: s } = await (0, i.getSetupRequisitesData)(e, r),
          { recoveryKeyBufferClear: d, recoveryKeyBase64Clear: l, recoveryKeyRawClear: u } = await (0, i.getRecoveryKey)(e),
          S = t.getInstance(),
          p = await S.getLocalKey(),
          m = (0, n.deflateUtf16)(p),
          g = await (0, i.encryptRecoveryData)({ storeService: e, encryptionKey: u, data: m });
        t.getInstance().storeRecoveryLocalKey(g);
        const E = atob(s),
          A = await (0, i.encryptRecoveryData)({ storeService: e, encryptionKey: E, data: d }),
          I = await (0, i.getAdminProtectedSymmetricalKeys)(a, A);
        await (0, i.sendAdminProtectedSymmetricalKeys)(e, r, I);
        const y = { RecoveryHash: o, RecoveryKey: l };
        e.dispatch((0, c.editPersonalSettings)(y)), await (0, i.storeSessionCredentialForRecovery)(e, t);
      }
      (t.activateAccountRecovery = async function (e) {
        const { sessionService: t, storeService: r, localStorageService: n, wsService: l } = e,
          u = r.getState();
        if (!(0, i.isARAvailableForUser)(u))
          return { success: !1, error: { code: o.RecoveryApiErrorType.AccountRecoveryNotAvailableError } };
        (0, s.accountRecoveryOptInSelector)(u) || r.dispatch((0, c.editPersonalSettings)({ RecoveryOptIn: !0 }));
        try {
          await d(r, n, l), await t.getInstance().user.persistPersonalSettings(), await (0, a.sessionForceSync)(t);
        } catch (e) {
          return { success: !1, error: { code: o.RecoveryApiErrorType.RecoverySetupFailed, message: e.message } };
        }
        return { success: !0 };
      }),
        (t.setupAccountRecoveryForDevice = d),
        (t.deactivateAccountRecovery = async function (e) {
          const { sessionService: t, storeService: r, localStorageService: n, wsService: a } = e,
            s = r.getState();
          if (!(0, i.isARAvailableForUser)(s))
            return { success: !1, error: { code: o.RecoveryApiErrorType.AccountRecoveryNotAvailableError } };
          const d = { RecoveryKey: "", RecoveryHash: "", RecoveryOptIn: !1 };
          try {
            r.dispatch((0, c.editPersonalSettings)(d)),
              await t.getInstance().user.persistPersonalSettings(),
              await n.getInstance().cleanRecoverySetupData(),
              await (0, i.resetAdminProtectedSymmetricalKeys)(r, a);
          } catch (e) {
            return { success: !1, error: { code: o.RecoveryApiErrorType.RecoveryDeactivationFailed, message: e.message } };
          }
          return { success: !0 };
        }),
        (t.isRecoveryRequestPending = async function (e) {
          try {
            return { success: !0, response: await e.localStorageService.getInstance().doesRecoveryDataExist() };
          } catch (e) {
            return { success: !1, error: { code: o.RecoveryApiErrorType.IsRecoveryRequestPendingFailed, message: e } };
          }
        });
    },
    363678: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(747820);
      t.setupSubscriptions = function (e, t) {
        e.sessionOpened.on(() => (0, o.triggerCleanOrSetupAccountRecovery)(t)),
          e.syncSuccess.on(() => (0, o.triggerCleanOrSetupAccountRecovery)(t));
      };
    },
    47390: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(466961),
        n = r(489122),
        i = r(496405);
      t.config = {
        commands: { decipherRemoteFile: { handler: o.decipherRemoteFileHandler } },
        queries: { getFileContent: { selector: i.fileContentStrSelector } },
        liveQueries: { liveFileMeta: { operator: n.fileMetaUpdate$ } }
      };
    },
    264438: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(47390);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    701110: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FILE_SETTINGS = t.REMOTE_FILE_KEY_PROD = t.REMOTE_FILE_KEY_DEV = void 0),
        (t.REMOTE_FILE_KEY_DEV =
          "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzOFwZBlj8livLhzIN8xm\ny/c+gn9FpUNOEIPoiN7kcAlj+oIlWqW5TgRZLqvyA0WxhTcG7icTpC+UwBXvENdV\n3nTzmuB8W6ZnRTjrtAlSxqp0Yfr2eQEGZFTlfBFUneqq4RZ6e/B3nIRHG1sEkVhd\noBbenPWou+WHqaqnah0AZVfxx4bJq1wor1LpH7gxELthvsThBelQz4Lmns4hCjzq\nRCDjQ1PG9HpDwwRHyi9xJYWoLR6C3rHZ1mmldg7TS41cCWkKsPDiIrIzEN+94dGG\nqSAx4kti0ltRcjLcBuJhQ3FHaAU7ksSubEg+l0W8PWAKjNbhUpFXduqXjxZ9nhuS\n2sxETZoadgU6YDEyqk3W7c+dhpTioMZEsJXpBVdC2jbblPHBRXBTmdOdb7xlBrGQ\nzoyPpS0PcI9oa8o9na9J8DSqnEbLwXdOlv4TUoxrswD6nmnR31/W+C4PSC8yEUEx\nESiG6IfAakFICxVESBp1VZA7NUbT6JkrhQaz//AVuGAyMoDuXorRGQPit+9DgF2l\neSr0zLzO2MVfMXXKBnueZmjNLvYy2Q2e8QX1jsuvwFhDBt1QmfisdiGSPC7jp0rO\nXdu5eCQuHVYeApipVKry58So783jimUa+mpA0/NUyiYaON7zndtZlQv/y+dqvseT\na2iA73nMVy4y9F95mwdG8ykCAwEAAQ==\n-----END PUBLIC KEY-----"),
        (t.REMOTE_FILE_KEY_PROD =
          "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvlEdqD2jCU30/OembiWY\nJKxrjiZuRgweXtV2e7yF1T5XyHkqDZ31a9W0rLWrVRbjr1qDdwU94L1iW/8RrUPK\n2ue+2XH/8e8EH44Y9HYBeIUTciBKU6dqyqflaxY/wm3VO5af303ba564BVzv/31S\nJiHa7QkeVqjY/Za1rv1ZOIwsYBC/SPIK+ofU7qSi6eY8PNe8bje0CFPcwfWRRkNB\nZLQwUwIED1w7playTR8boX5iju+TagAjKSphkj6u+fIkYPdFQgFjSTGu8OwTAerC\nxqAWDSVy7fMxLdrDNrdwMTuQvlUIWiK+1CRHm1r6AXGywqCmrndw6q1LvFcwOgI1\n2brPOx1BdDabUwau26lICDgPqA67Sk7GLTCv3hA2bHvJhK7E0c260u96hRwjDk/L\n8tspQAYGzosyIMTmN29fEtBMlPwClZPqSVa7I7b3Csx4lhRkXI76WxAOmxf5dNQI\n2O6dlrxumdfpM8O6ye3iq51D7ZNNegelee/BIrZEcJZzymvkrDDZHJs6oFQ7bERd\np+nJlr4xoiFd9BPCus6z994/8j7lNTvLanNwsdUYRP/tQJZqlhZ7vY+KpyXn+RGw\nMYFeWXuH3cG05NwryH6676tcOrkboxbxMCMBUMvZK1CWS57noH/iztYivKNyItxf\ni8uoqgc+vDOPPsdujlsgOkcCAwEAAQ==\n-----END PUBLIC KEY-----"),
        (t.FILE_SETTINGS = { "overrides.json": {}, "phishing_urls_test.json": { isLoadedWhileLoggedOut: !0 } });
    },
    466961: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.decipherRemoteFileHandler = void 0);
      const o = r(610174),
        n = r(416593);
      t.decipherRemoteFileHandler = async ({ storeService: e }, t) => ({
        decipheredFile: await (0, o.decipherRemoteFileUpdate)(
          t.cipheredFileContent,
          t.fileMetaData,
          (0, n.sharingKeysSelector)(e.getState()).privateKey
        )
      });
    },
    697890: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.downloadRemoteFileHandler = t.fetchFile = void 0);
      const o = r(453576),
        n = r(46298),
        i = r(464272),
        a = r(610174),
        s = r(585845),
        c = r(787993),
        d = r(519601),
        l = r(496405),
        u = r(416593),
        S = r(955539),
        p = r(423201),
        m = r(660765),
        g = r(976905);
      async function E(e) {
        try {
          return (await (0, S.httpGetUsingFetch)(e, { responseType: "arraybuffer" })).data;
        } catch (e) {
          throw new d.RemoteFileError(m.RemoteFileUpdateError.DownloadError, e.message);
        }
      }
      async function A(e, t) {
        const r = await (0, i.getFilesMeta)(e, (0, u.userLoginSelector)(e.getState()), t);
        if ((0, i.isGetFilesMetaSuccess)(r)) {
          const { code: e, data: t, ...n } = r;
          if (
            !(function (e) {
              for (const t of o.FileNamesList) if (!(t in e)) return !1;
              return !0;
            })(n)
          )
            throw new Error("Missing keys in the GetFileMeta response");
          return n;
        }
        if ((0, n.isApiError)(r)) throw new d.RemoteFileError(m.RemoteFileUpdateError.ServerError, r.message);
      }
      function I(e, t, r) {
        const { storeService: o, eventBusService: n } = e;
        o.dispatch((0, s.updateFileContentAction)({ [r.name]: r })),
          o.dispatch((0, s.updateFileMetaAction)({ [r.name]: t })),
          n.remoteFileChanged(r.name);
      }
      async function y(e, [t, r]) {
        const { storeService: n, eventLoggerService: i } = e;
        if (
          !(function (e) {
            switch (e.status) {
              case o.UPDATE_AVAILABLE_HTTP_STATUS:
                return !0;
              case o.NO_CURRENT_UPDATE_HTTP_STATUS:
              case o.FILE_NOT_FOUND_HTTP_STATUS:
              case o.SERVER_ERROR_HTTP_STATUS:
              default:
                return !1;
            }
          })(r)
        )
          return { fileName: t, isUpdated: !1, fileMetaData: r };
        try {
          const o = await (async function (e, t, r) {
            const o = await E(t.url);
            if (!t.key) return new g.DownloadedFile(e, o);
            const n = await (0, a.decipherRemoteFileUpdate)(o, t, (0, u.sharingKeysSelector)(r.getState()).privateKey);
            return new g.DownloadedFile(e, n);
          })(t, r, n);
          I(e, r.revision, o);
        } catch (e) {
          return (0, d.assertRemoteFileError)(i, e), { fileName: t, isUpdated: !1, fileMetaData: r };
        }
        return { fileName: t, isUpdated: !0, fileMetaData: r };
      }
      (t.fetchFile = E),
        (t.downloadRemoteFileHandler = async (e, t) => {
          const { storeService: r } = e,
            o = await (async function (e, t) {
              const r = await (0, c.retrieveFileMetaDataFromCipheredLocalStorage)(e);
              return Object.entries(t).reduce((e, [t, o]) => ((e[t] = null !== r && t in r ? o.revision ?? r[t] : 0), e), {});
            })(e, t);
          try {
            const t = await A(r, o);
            if (0 !== Object.keys(t).length) {
              const a = await ((n = t), (i = e), Promise.all(Object.entries(n).map((e) => y(i, e)))),
                l = await (async function (e, t) {
                  const { eventLoggerService: r } = e;
                  return await Promise.all(
                    t
                      .filter(({ isUpdated: e }) => e)
                      .map(async ({ fileName: t }) => {
                        try {
                          return await (0, c.writeFileInLocalStorage)(e, t), (0, p.logReceiveRemoteFileSuccess)(r), [t, !0];
                        } catch (e) {
                          return (0, d.assertRemoteFileError)(r, e), [t, !1];
                        }
                      })
                  );
                })(e, a),
                u = l.filter(([e, t]) => !t).map(([e, t]) => e);
              r.dispatch((0, s.deleteFileMetaAction)(u)),
                await (function (e, t, r) {
                  const o = e.localStorageService.getInstance();
                  return Promise.all(
                    t
                      .filter(({ isUpdated: e }) => !e)
                      .map(async ({ fileName: t }) => {
                        if (!o.isRemoteFileContentExist(t)) return;
                        const n = await (0, c.readFileFromLocalStorage)(e, t);
                        null !== n && I(e, r[t], n);
                      })
                  );
                })(e, a, o),
                await (0, c.persistFileMetaInCipheredLocalStorage)(e);
            }
          } catch (t) {
            (0, d.assertRemoteFileError)(e.eventLoggerService, t);
          }
          var n, i;
          return (0, l.fileMetaUpdateSelector)(r.getState());
        });
    },
    116179: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.loadFilesAtInit = t.loadFileContentAtInit = void 0);
      const o = r(701110),
        n = r(787993),
        i = r(519601),
        a = r(585845);
      async function s(e, t) {
        const r = await (0, n.readFileFromLocalStorage)(e, t);
        return null !== r && (e.storeService.dispatch((0, a.updateFileContentAction)({ [t]: r })), !0);
      }
      (t.loadFileContentAtInit = s),
        (t.loadFilesAtInit = async function (e) {
          await Object.keys(o.FILE_SETTINGS).map(async (t) => {
            if (o.FILE_SETTINGS[t].isLoadedWhileLoggedOut)
              try {
                (await s(e, t)) && e.eventBusService.remoteFileChanged(t);
              } catch (t) {
                (0, i.assertRemoteFileError)(e.eventLoggerService, t);
              }
          });
        });
    },
    976905: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.DownloadedFile = void 0);
      const o = r(316038);
      class n {
        constructor(e, t) {
          (this._buf = t), (this.name = e);
        }
        static fromBase64Str(e, t) {
          return new n(e, (0, o.base64ToBuffer)(t));
        }
        toBlob() {
          return new Blob([this._buf]);
        }
        toString() {
          return (0, o.ab2str)(this._buf);
        }
        toBase64String() {
          return (0, o.bufferToBase64)(this._buf);
        }
      }
      t.DownloadedFile = n;
    },
    610174: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decipherRemoteFileUpdate =
          t.decipherFileIntoBlob =
          t.verifyRemoteFileSignature =
          t.decipherDecryptionKey =
          t.computePublicKeyForSignature =
            void 0);
      const o = r(956668),
        n = r(383570),
        i = r(316038),
        a = r(656984),
        s = r(736513),
        c = r(701110),
        d = r(519601),
        l = r(660765),
        u = r(493513),
        S = "https://static.dashlane.com/runtime-resources/ci/";
      async function p(e, t) {
        const r = (0, s.makeAsymmetricEncryption)({ hashAlgorithm: a.HashAlgorithm.SHA_1 });
        try {
          return u.decode(await r.decrypt(t, e));
        } catch (e) {
          throw new d.RemoteFileError(l.RemoteFileUpdateError.DecipherError, "Invalid encryption on deciphering key");
        }
      }
      async function m(e, { signature: r, url: o }, n) {
        const i = (0, t.computePublicKeyForSignature)(o);
        return await e.verify(i, r, n);
      }
      async function g(e, t) {
        try {
          return (0, i.str2ab)(
            (0, o.deflatedUtf8ToUtf16)(await (0, o.decipherDashlaneSecureData)(e, t, "", (0, n.makeGetDerivateKeyWithCacheAndQueue)()), {
              skipInflate: !0
            })
          );
        } catch (e) {
          throw new d.RemoteFileError(l.RemoteFileUpdateError.DecipherError, "Invalid encryption on file");
        }
      }
      (t.computePublicKeyForSignature = (e) => {
        if (((e) => e.startsWith(S + "prod/"))(e)) return c.REMOTE_FILE_KEY_PROD;
        if (((e) => e.startsWith(S + "dev/"))(e)) return c.REMOTE_FILE_KEY_DEV;
        throw new d.RemoteFileError(l.RemoteFileUpdateError.DecipherError, "The file URL is not matching production or dev environnement");
      }),
        (t.decipherDecryptionKey = p),
        (t.verifyRemoteFileSignature = m),
        (t.decipherFileIntoBlob = g),
        (t.decipherRemoteFileUpdate = async function (e, t, r) {
          const o = (0, i.bufferToBase64)(e),
            n = await p(t.key, r),
            c = (0, s.makeAsymmetricEncryption)({ hashAlgorithm: a.HashAlgorithm.SHA_256 });
          if (!(await m(c, t, o))) throw new d.RemoteFileError(l.RemoteFileUpdateError.DecipherError, "Invalid signature detected on file");
          return await g(o, n);
        });
    },
    691313: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(264438);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    489122: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fileMetaUpdate$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(496405);
      t.fileMetaUpdate$ = () => (0, o.pipe)((0, n.map)(i.fileMetaUpdateSelector), (0, n.distinctUntilChanged)());
    },
    423201: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.logReceiveRemoteFileError = t.logReceiveRemoteFileSuccess = void 0);
      const o = r(660765),
        n = (e, t, r = undefined) => {
          e.logEvent(
            new o.UserReceiveRemoteFileUpdateEvent({ flowStep: t, remoteFileUpdateError: r, packageSource: o.PackageSource.Carbon })
          );
        };
      (t.logReceiveRemoteFileSuccess = (e) => n(e, o.FlowStep.Complete)),
        (t.logReceiveRemoteFileError = (e, t) => n(e, o.FlowStep.Error, t));
    },
    787993: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.writeFileInLocalStorage =
          t.readFileFromLocalStorage =
          t.retrieveFileContentFromNonCipheredLocalStorage =
          t.retrieveFileContentFromCipheredLocalStorage =
          t.retrieveFileMetaDataFromCipheredLocalStorage =
          t.persistSingleFileInNonCipheredLocalStorage =
          t.persistSingleFileContentInCipheredLocalStorage =
          t.persistFileMetaInCipheredLocalStorage =
            void 0);
      const o = r(25576),
        n = r(496405),
        i = r(701110),
        a = r(519601),
        s = r(660765),
        c = r(976905),
        d = (e) => {
          if (!e) throw new a.RemoteFileError(s.RemoteFileUpdateError.LocalStorageError, "LocalStorageService is not initalized");
        };
      async function l({ localStorageService: e, storeService: t }, r) {
        const { persistData: i, isAuthenticated: c } = t.getAccountInfo(),
          l = e.getInstance();
        if (!c || i === o.PersistData.PERSIST_DATA_NO) return;
        d(l);
        const u = await (0, n.fileSelector)(t.getState(), r);
        try {
          await l.storeRemoteFileContent(r, u.toBase64String());
        } catch (e) {
          throw new a.RemoteFileError(s.RemoteFileUpdateError.LocalStorageError, `Cannot persist ${r} content in local storage`);
        }
      }
      async function u({ storeService: e, storageService: t }, r) {
        const { persistData: i, isAuthenticated: c } = e.getAccountInfo();
        if (!c || i === o.PersistData.PERSIST_DATA_NO) return;
        const l = t.getLocalStorage();
        d(l);
        const u = await (0, n.fileSelector)(e.getState(), r);
        try {
          await l.writeItem(r, u.toBase64String());
        } catch (e) {
          throw new a.RemoteFileError(s.RemoteFileUpdateError.LocalStorageError, `Cannot persist ${r} content in local storage`);
        }
      }
      async function S(e, t) {
        const r = e.getInstance();
        return (
          d(r),
          (await r.isRemoteFileContentExist(t)) ? c.DownloadedFile.fromBase64Str(t, await r.getRemoteFileContent(t)) : Promise.resolve(null)
        );
      }
      async function p(e, t) {
        const r = e.getLocalStorage();
        return d(r), (await r.itemExists(t)) ? c.DownloadedFile.fromBase64Str(t, await r.readItem(t)) : Promise.resolve(null);
      }
      (t.persistFileMetaInCipheredLocalStorage = async function ({ localStorageService: e, storeService: t }) {
        e.getInstance();
        const { persistData: r, isAuthenticated: i } = t.getAccountInfo();
        if (!i || r === o.PersistData.PERSIST_DATA_NO) return;
        d(e);
        const c = e.getInstance();
        try {
          await c.storeRemoteFileMeta((0, n.fileMetaUpdateSelector)(t.getState()));
        } catch {
          throw new a.RemoteFileError(s.RemoteFileUpdateError.LocalStorageError, "Cannot persist file metadata in local storage");
        }
      }),
        (t.persistSingleFileContentInCipheredLocalStorage = l),
        (t.persistSingleFileInNonCipheredLocalStorage = u),
        (t.retrieveFileMetaDataFromCipheredLocalStorage = async function ({ localStorageService: e }) {
          const t = e.getInstance();
          return d(t), (await t.isRemoteFileMetaDataExist()) ? await t.getRemoteFileMeta() : Promise.resolve(null);
        }),
        (t.retrieveFileContentFromCipheredLocalStorage = S),
        (t.retrieveFileContentFromNonCipheredLocalStorage = p),
        (t.readFileFromLocalStorage = function (e, t) {
          return i.FILE_SETTINGS[t].isLoadedWhileLoggedOut ? p(e.storageService, t) : S(e.localStorageService, t);
        }),
        (t.writeFileInLocalStorage = function (e, t) {
          return i.FILE_SETTINGS[t].isLoadedWhileLoggedOut ? u(e, t) : l(e, t);
        });
    },
    519601: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.assertRemoteFileError = t.RemoteFileError = void 0);
      const o = r(423201),
        n = r(670252);
      class i extends Error {
        constructor(e, t) {
          super(t), (this.name = e), (this.name = e);
        }
      }
      (t.RemoteFileError = i),
        (i.errorInstance = "REMOTE_FILE_ERROR"),
        (t.assertRemoteFileError = function (e, t) {
          !(function (e) {
            return e instanceof i;
          })(t)
            ? (0, n.sendExceptionLog)({ error: t })
            : (0, o.logReceiveRemoteFileError)(e, t.name);
        });
    },
    496405: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fileContentStrSelector = t.fileSelector = t.fileMetaUpdateSelector = void 0);
      const r = (e) => e.device.remoteFile;
      (t.fileMetaUpdateSelector = (e) => r(e).fileMetaData),
        (t.fileSelector = (e, t) => r(e).fileContentState[t]),
        (t.fileContentStrSelector = (e, r) => (0, t.fileSelector)(e, r).toString());
    },
    398202: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(836428),
        n = r(718216),
        i = r(416593);
      t.setupSubscriptions = function (e, t) {
        e.sessionOpened.on(() => (0, o.triggerDownloadRemoteFileUpdate)(t, !0)),
          e.sessionClosed.on(() => (0, o.triggerDownloadRemoteFileUpdate)(t, !1)),
          e.coreServicesReady.on((e) => {
            e.initMode === n.InitMode.Resume &&
              ((0, i.isAuthenticatedSelector)(t.storeService.getState())
                ? (0, o.triggerDownloadRemoteFileUpdate)(t, !0)
                : (0, o.triggerLoadFileAtInit)(t));
          }),
          e.appInitialized.on(() => {
            (0, o.triggerLoadFileAtInit)(t);
          });
      };
    },
    836428: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.triggerDownloadRemoteFileUpdate = t.triggerLoadFileAtInit = t.callRemoteFileUpdateHandler = void 0);
      const o = r(697890),
        n = r(701110),
        i = r(116179);
      async function a(e) {
        await (0, o.downloadRemoteFileHandler)(e, n.FILE_SETTINGS);
      }
      (t.callRemoteFileUpdateHandler = a),
        (t.triggerLoadFileAtInit = async function (e) {
          await (0, i.loadFilesAtInit)(e);
        });
      let s = null;
      t.triggerDownloadRemoteFileUpdate = function (e, t) {
        s &&
          (function (e) {
            clearInterval(e);
          })(s),
          t &&
            (s = (function (e) {
              return (
                a(e),
                setInterval(() => {
                  try {
                    a(e);
                  } catch {}
                }, 18e5)
              );
            })(e));
      };
    },
    725661: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(17338),
        n = r(121587),
        i = r(807502),
        a = r(564369),
        s = r(293820),
        c = r(290622),
        d = r(574219),
        l = r(515209),
        u = r(221583),
        S = r(699293),
        p = r(855861),
        m = r(774412),
        g = r(670252),
        E = r(949409),
        A = r(150329),
        I = r(844389),
        y = r(716359),
        v = r(240588),
        T = r(637824),
        _ = r(800061),
        f = r(239952),
        C = r(70530),
        O = r(664811),
        h = r(988530),
        D = r(976569),
        R = r(976592),
        N = r(217387),
        P = r(133719),
        L = r(49183),
        U = r(114581),
        M = r(544095),
        B = r(707753),
        G = r(953156),
        w = r(916667),
        b = r(691313),
        k = r(125560),
        F = [
          n.bootstrap,
          i.bootstrap,
          c.bootstrap,
          d.bootstrap,
          l.bootstrap,
          u.bootstrap,
          S.bootstrap,
          p.bootstrap,
          m.bootstrap,
          g.bootstrap,
          a.bootstrap,
          E.bootstrap,
          A.bootstrap,
          I.bootstrap,
          y.bootstrap,
          _.bootstrap,
          v.bootstrap,
          f.bootstrap,
          C.bootstrap,
          h.bootstrap,
          D.bootstrap,
          R.bootstrap,
          N.bootstrap,
          P.bootstrap,
          L.bootstrap,
          U.bootstrap,
          M.bootstrap,
          O.bootstrap,
          s.bootstrap,
          w.vpnApiBootstrap,
          B.bootstrap,
          G.bootstrap,
          T.bootstrap,
          b.bootstrap,
          k.bootstrap
        ];
      t.bootstrap = (e, t, r) => {
        const n = (0, o.getCoreServices)(e);
        F.forEach((e) => {
          e(t, n, r);
        });
      };
    },
    974318: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fetchCurrentLocation = t.initCarbon = t.setPlatform = void 0);
      const o = r(453576),
        n = r(71796),
        i = r(804798),
        a = r(175391),
        s = r(444242),
        c = r(620849),
        d = r(644273),
        l = r(730855),
        u = r(487855),
        S = r(786056),
        p = r(795623),
        m = r(17338),
        g = r(661384),
        E = r(312995),
        A = r(670252),
        I = r(804673),
        y = r(947975),
        v = r(473011),
        T = r(996637),
        _ = r(725661),
        f = r(502646),
        C = r(118539),
        O = r(718216),
        h = r(128486),
        D = r(688322),
        R = r(545800);
      (t.setPlatform = (e, t, r) => {
        r === O.InitMode.FirstInit &&
          e
            .getInstance(m.CarbonServicesTypeEnum.StoreService)
            .getStore()
            .dispatch((0, E.savePlatformInfo)(t)),
          (0, S.setPlatformInfo)(t);
      }),
        (t.initCarbon = async function (e) {
          if (((0, f.setPublicPath)(e.publicPath), !e.storageLayer))
            throw new Error("Missing Storage layer prevents Carbon initialization");
          e.keys.cloudflareAccess &&
            e.keys.cloudflareSecret &&
            (0, R.setCloudflareHeaders)(e.keys.cloudflareAccess, e.keys.cloudflareSecret);
          const r = (0, m.carbonServices)({
              storageLayer: new C.CarbonLocalStorage(e.storageLayer),
              sessionStorage: e.sessionStorage,
              createClients: e.createClients
            }),
            { storeService: S, storageService: E } = (0, m.getCoreServices)(r);
          await S.completeRehydration(), (0, D.loadAnonymousApplicationId)(E, S);
          const A = (function (e) {
            const t = e.getState(),
              r = (0, h.appSessionIdSelector)(t) ? O.InitMode.Resume : O.InitMode.FirstInit;
            return (0, p.logVerbose)({ message: `Inferred init mode : ${r}` }), r;
          })(S);
          (0, t.setPlatform)(r, e.platformInfo, A);
          const N = await (0, v.setupEventBus)(r);
          await N.coreServicesReady({ initMode: A }),
            (0, y.loadFrequencyLists)(),
            e.workers && (0, g.setWorkersPath)(e.workers),
            e.plugins && (0, I.setPlugins)(e.plugins);
          try {
            await (0, u.initAuthenticatedCarbonApplication)(e, r, A);
          } catch (e) {
            throw (p.Debugger.error(e, "error while initializing SDK"), e);
          }
          const { debug: P, e2e: L } = e.connectors;
          let { leeloo: U, maverick: M, extension: B, diagnostic: G, api: w } = e.connectors;
          (U = U || (0, n.createEventBus)({ events: o.CarbonLeelooConnector })),
            (M = M || (0, n.createEventBus)({ events: o.CarbonMaverickConnector })),
            (B = B || (0, n.createEventBus)({ events: o.ExtensionCarbonConnector })),
            (G = G || (0, n.createEventBus)({ events: o.CarbonDiagnosticConnector })),
            (w = w || (0, n.createEventBus)({ events: o.CarbonApiConnector })),
            P && (0, c.subscribeToDebugEvents)(P),
            L && (0, l.subscribeToE2EEvents)(L, r),
            (0, i.subscribeToExtensionEvents)(B, r),
            (0, a.subscribeToLeelooEvents)(U, r),
            (0, s.subscribeToMaverickEvents)(M, r),
            (0, d.subscribeToDiagnosticEvents)(G);
          const b = new T.TsEventBusCommandQueryBus(r, o.CarbonApiConnector, w);
          return (
            (0, _.bootstrap)(r, b, e?.infrastructure), N.appInitialized({ initMode: A, abTestForcedVersion: e.abTestForcedVersion }), r
          );
        }),
        (t.fetchCurrentLocation = function (e, t) {
          return e.country
            .getCurrentCountry()
            .then((e) => {
              t.dispatch((0, E.saveCurrentLocation)(e));
            })
            .catch((e) => {
              const t = new Error(`[Sdk/Default] - fetchCurrentLocation: ${e}`);
              (0, A.sendExceptionLog)({ error: t, code: o.ExceptionCriticality.WARNING });
            });
        });
    },
    473011: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupEventBus = void 0);
      const o = r(17338),
        n = r(352346),
        i = r(699293),
        a = r(724579),
        s = r(210672),
        c = r(217387),
        d = r(133719),
        l = r(544095),
        u = r(143057),
        S = r(363678),
        p = r(423299),
        m = r(533045),
        g = r(663549),
        E = r(403149),
        A = r(398202),
        I = r(646564),
        y = r(283060);
      t.setupEventBus = async function (e) {
        const t = (0, o.getCoreServices)(e),
          r = t.eventBusService,
          v = [
            n.setupSubscriptions,
            S.setupSubscriptions,
            m.setupSubscriptions,
            g.setupSubscriptions,
            i.setupSubscriptions,
            p.setupSubscriptions,
            a.setupSubscriptions,
            u.setupSubscriptions,
            s.setupSubscriptions,
            c.setupSubscriptions,
            l.setupSubscriptions,
            d.setupSubscriptions,
            E.setupUserSettingsLogSubscriptions,
            A.setupSubscriptions,
            I.setupSubscriptions,
            y.setupSubscriptions
          ].map((e) => e(r, t));
        return await Promise.all(v), r;
      };
    },
    210672: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(974318),
        n = r(718216),
        i = r(958639);
      t.setupSubscriptions = function (e, t) {
        e.appInitialized.on(async (e) => {
          const { wsService: r, storeService: a } = t;
          e.initMode === n.InitMode.FirstInit &&
            (await (0, o.fetchCurrentLocation)(r, a), (0, i.sendLocationInfo)(a.getPlatform().location));
        });
      };
    },
    718216: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InitMode = void 0),
        (function (e) {
          (e.FirstInit = "FirstInit"), (e.Resume = "Resume");
        })(t.InitMode || (t.InitMode = {}));
    },
    463340: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeApplicationModulesAccess = void 0),
        (t.makeApplicationModulesAccess = function (e) {
          return { createClients: () => e() };
        });
    },
    282568: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeApplicationModulesAccess = void 0);
      var o = r(463340);
      Object.defineProperty(t, "makeApplicationModulesAccess", {
        enumerable: !0,
        get: function () {
          return o.makeApplicationModulesAccess;
        }
      });
    },
    17338: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCoreServices = t.carbonServices = t.CarbonServicesTypeEnum = void 0);
      const o = r(380722),
        n = r(72365),
        i = r(498416),
        a = r(118539),
        s = r(577627),
        c = r(889016),
        d = r(501860),
        l = r(674752),
        u = r(893990),
        S = r(873297),
        p = r(774412),
        m = r(282568);
      var g;
      !(function (e) {
        (e.StoreService = "StoreService"),
          (e.StorageService = "StorageService"),
          (e.SessionService = "SessionService"),
          (e.MasterPasswordEncryptorService = "MasterPasswordEncryptorService"),
          (e.LocalDataEncryptorService = "LocalDataEncryptorService"),
          (e.RemoteDataEncryptorService = "RemoteDataEncryptorService"),
          (e.AuthorizationKeysEncryptorService = "AuthorizationKeysEncryptorService"),
          (e.LocalStorageService = "LocalStorageService"),
          (e.WSService = "WSService"),
          (e.AutoLoginService = "AutoLoginService"),
          (e.WebAuthnAuthenticationService = "WebAuthnAuthenticationService"),
          (e.EventBusService = "EventBusService"),
          (e.EventLoggerService = "EventLoggerService"),
          (e.TeamDeviceEncryptedConfigEncryptorService = "TeamDeviceEncryptedConfigEncryptorService"),
          (e.ApplicationModulesAccess = "ApplicationModulesAccess");
      })((g = t.CarbonServicesTypeEnum || (t.CarbonServicesTypeEnum = {}))),
        (t.carbonServices = (e) => {
          const t = (0, o.makeStoreService)({ sessionStorage: e.sessionStorage, store: void 0 }),
            r = (0, S.makeEventBusService)(),
            E = e.masterPasswordEncryptorService ? e.masterPasswordEncryptorService() : (0, n.makeDataEncryptorService)(t),
            A = e.localDataEncryptorService ? e.localDataEncryptorService() : (0, n.makeDataEncryptorService)(t),
            I = e.remoteDataEncryptorService ? e.remoteDataEncryptorService() : (0, n.makeDataEncryptorService)(t),
            y = e.teamDeviceEncryptedConfigEncryptorService
              ? e.teamDeviceEncryptedConfigEncryptorService()
              : (0, n.makeDataEncryptorService)(t),
            v = (0, d.makeKeyDataEncryptorService)(),
            T = (0, n.makeDataEncryptorService)(t),
            _ = Object.assign({}, (0, c.makeWSService)(), e.wsService ? e.wsService(t) : {}),
            f = (0, a.makeStorageService)();
          f.setInstance(e.storageLayer);
          const C = e.authorizationKeysEncryptorService ? e.authorizationKeysEncryptorService() : (0, d.makeKeyDataEncryptorService)();
          (0, n.setObfuscatingKey)(C);
          const O = (0, i.makeLocalStorageService)({
              masterPasswordEncryptorService: E,
              localDataEncryptorService: A,
              authorizationKeysEncryptorService: C,
              autoLoginEncryptorService: v,
              webAuthnAuthenticationEncryptorService: T,
              storageService: f,
              storeService: t
            }),
            h = (0, p.makeEventLoggerService)({ storeService: t, storageService: f }),
            D = (0, m.makeApplicationModulesAccess)(e.createClients),
            R = (0, s.makeSessionService)({
              applicationModulesAccess: D,
              masterPasswordEncryptorService: E,
              localDataEncryptorService: A,
              remoteDataEncryptorService: I,
              storeService: t,
              localStorageService: O,
              storageService: f,
              wsService: _,
              eventBusService: r,
              eventLoggerService: h,
              teamDeviceEncryptedConfigEncryptorService: y
            }),
            N = (0, l.makeAutoLoginService)({
              autoLoginEncryptorService: v,
              localStorageService: O,
              wsService: _,
              authorizationKeysEncryptorService: C,
              storeService: t
            }),
            P = (0, u.makeWebAuthnAuthenticationService)({
              webAuthnAuthenticationEncryptorService: T,
              storeService: t,
              localStorageService: O,
              authorizationKeysEncryptorService: C
            });
          return {
            services: [
              { type: g.WSService, instance: _ },
              { type: g.StoreService, instance: t },
              { type: g.StorageService, instance: f },
              { type: g.LocalStorageService, instance: O },
              { type: g.SessionService, instance: R },
              { type: g.AuthorizationKeysEncryptorService, instance: C },
              { type: g.AutoLoginService, instance: N },
              { type: g.WebAuthnAuthenticationService, instance: P },
              { type: g.EventBusService, instance: r },
              { type: g.MasterPasswordEncryptorService, instance: E },
              { type: g.RemoteDataEncryptorService, instance: I },
              { type: g.LocalDataEncryptorService, instance: A },
              { type: g.EventLoggerService, instance: h },
              { type: g.TeamDeviceEncryptedConfigEncryptorService, instance: y },
              { type: g.ApplicationModulesAccess, instance: D }
            ],
            getInstance: function (e) {
              const t = this.services.find((t) => t.type === e);
              if (void 0 === t) throw new Error("Service " + e + " not defined");
              return t.instance;
            }
          };
        }),
        (t.getCoreServices = (e) => ({
          storeService: e.getInstance(g.StoreService),
          remoteDataEncryptorService: e.getInstance(g.RemoteDataEncryptorService),
          masterPasswordEncryptorService: e.getInstance(g.MasterPasswordEncryptorService),
          localDataEncryptorService: e.getInstance(g.LocalDataEncryptorService),
          authorizationKeysEncryptorService: e.getInstance(g.AuthorizationKeysEncryptorService),
          localStorageService: e.getInstance(g.LocalStorageService),
          storageService: e.getInstance(g.StorageService),
          sessionService: e.getInstance(g.SessionService),
          wsService: e.getInstance(g.WSService),
          autoLoginService: e.getInstance(g.AutoLoginService),
          webAuthnAuthenticationService: e.getInstance(g.WebAuthnAuthenticationService),
          eventBusService: e.getInstance(g.EventBusService),
          eventLoggerService: e.getInstance(g.EventLoggerService),
          teamDeviceEncryptedConfigEncryptorService: e.getInstance(g.TeamDeviceEncryptedConfigEncryptorService),
          applicationModulesAccess: e.getInstance(g.ApplicationModulesAccess)
        }));
    },
    934066: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(416593),
        n = r(538981),
        i = r(25421),
        a = r(6e3),
        s = r(281228),
        c = r(628287),
        d = r(710447),
        l = r(238328),
        u = r(217095),
        S = r(218203),
        p = r(394275),
        m = r(818380);
      t.config = {
        commands: {
          validateToken: { handler: c.validateToken },
          validateMasterPassword: { handler: c.validateMasterPasswordHandler },
          resetProtectedItemAutofillTimer: { handler: c.resetProtectedItemAutofillTimerHandler },
          forceSync: { handler: d.forceSyncHandler },
          updatePremiumChurningDismissDate: { handler: l.updatePremiumChurningDismissDateHandler },
          setCredentialSearchOrder: { handler: u.setCredentialSearchOrderHandler },
          refreshSubscriptionInformation: { handler: S.refreshSubscriptionInformationHandler },
          updateAccountRecoveryKeyPersonalSettings: { handler: p.updateAccountRecoveryKeyPersonalSettingsHandler }
        },
        queries: {
          getActiveSpaces: { selector: o.activeSpacesSelector },
          getMasterPasswordAndServerKey: { selector: o.masterPasswordAndServerKeySelector },
          getIsAuthenticated: { selector: o.isAuthenticatedSelector },
          getSyncInfo: { selector: o.syncSelector },
          getIsSyncInProgress: { selector: o.syncIsInProgressSelector },
          getPremiumStatus: { selector: o.premiumStatusSelector },
          getNodePremiumStatus: { selector: o.nodePremiumStatusSelector },
          getSubscriptionInformation: { selector: o.subscriptionInformationSelector },
          getIsSSOUser: { selector: n.isSSOUserSelector },
          getSSOMigrationInfo: { selector: n.ssoMigrationInfoSelector },
          getSSOProviderInfo: { selector: n.ssoProviderInfoSelector },
          getUserLogin: { selector: o.userLoginSelector },
          getPublicUserId: { selector: o.publicUserIdSelector },
          getAnalyticsInstallationId: { selector: o.analyticsInstallationIdSelector },
          getUserLoginStatus: { selector: a.loginStatusSelector },
          getLoginStatus: { selector: a.loginStatusSelector },
          getWebOnboardingMode: { selector: o.webOnboardingModeSelector },
          getPremiumChurningDismissDate: { selector: o.premiumChurningDismissDateSelector },
          getIsPaymentFailureChurningDismissed: { selector: o.isPaymentFailureChurningDismissedSelector },
          getCredentialSearchOrder: { selector: o.getCredentialSearchOrderSelector },
          getDidOpen: { selector: o.didOpenSelector },
          getPlatformName: { selector: o.platformNameSelector },
          getAccountAuthenticationType: { selector: i.accountAuthenticationTypeSelector },
          getSessionInfo: { selector: o.sessionInfoSelector },
          getUserCryptoSettings: { selector: o.userCryptoSettingsSelector }
        },
        liveQueries: {
          liveSyncInfo: { operator: s.syncInfo$ },
          liveIsSyncInProgress: { operator: s.syncInProgress$ },
          liveLoginStatus: { operator: a.getLoginStatus$ },
          livePremiumStatus: { operator: s.premiumStatus$ },
          liveSubscriptionInformation: { operator: s.subscriptionInformation$ },
          liveServiceProviderUrl: { subject: s.getServiceProviderUrl$ },
          liveWebOnboardingMode: { operator: s.webOnboardingMode$ },
          liveDidOpen: { operator: s.didOpen$ },
          liveIsSSOUser: { operator: m.isSSOUser$ },
          liveSSOMigrationInfo: { operator: m.ssoMigrationInfo$ },
          liveSessionInfo: { operator: s.sessionInfo$ }
        }
      };
    },
    818380: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.ssoMigrationInfo$ = t.isSSOUser$ = void 0);
      const o = r(538981),
        n = r(518948);
      (t.isSSOUser$ = () => (0, n.pipe)((0, n.map)(o.isSSOUserSelector))),
        (t.ssoMigrationInfo$ = () => (0, n.pipe)((0, n.map)(o.ssoMigrationInfoSelector)));
    },
    475199: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshCredentialsDedupView = void 0);
      const o = r(453576),
        n = r(81200),
        i = r(447521),
        a = r(46298),
        s = r(567331),
        c = r(670252);
      t.refreshCredentialsDedupView = async function (e, t) {
        try {
          const r = "web_extension_credentialsDedupView",
            d = await (0, i.getFeatureFlip)(e, t, r);
          return (0, a.isApiError)(d)
            ? ((0, c.sendExceptionLog)({
                error: new Error("Failed to get credentialsDedupView value"),
                code: o.ExceptionCriticality.WARNING
              }),
              e.dispatch((0, s.credentialsDedupViewUpdated)((0, n.getDefaultCredentialsDedupView)())))
            : e.dispatch((0, s.credentialsDedupViewUpdated)({ credentialsDedupView: d.enabledFeatures[0] === r }));
        } catch (t) {
          return (
            (0, c.sendExceptionLog)({
              error: new Error(`Failed to refreshCredentialsDedupView: ${t.message}`),
              code: o.ExceptionCriticality.WARNING
            }),
            e.dispatch((0, s.credentialsDedupViewUpdated)((0, n.getDefaultCredentialsDedupView)()))
          );
        }
      };
    },
    454034: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.triggerSendTransactionDecipheringDiagnosticLog = void 0);
      const o = r(644273),
        n = r(795623);
      t.triggerSendTransactionDecipheringDiagnosticLog = function (e) {
        n.default.log("SendDecipheringLog"), (0, o.default)().decipheringDiagnosticLogEvent(e);
      };
    },
    189160: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUsersSSOInfo = t.loadLocalData = t.completeLogin = t.checkLogin = void 0);
      const o = r(453576),
        n = r(677876),
        i = r(802246),
        a = r(25576),
        s = r(259489),
        c = r(586797),
        d = r(807624),
        l = r(816356),
        u = r(656915),
        S = r(290622),
        p = r(46298),
        m = r(17825),
        g = r(314656),
        E = r(392263),
        A = r(301965),
        I = r(416593);
      (t.checkLogin = async function (e, r, n) {
        const l = e.getState(),
          y = (0, I.userLoginSelector)(l);
        let v, T, _;
        try {
          const t = await (async function (e, t) {
              return (await (0, S.getLocalAccounts)(e, t))
                .map((e) => e.login)
                .map((t) => ({ login: t, deviceAccessKey: (0, u.getDeviceAccessKeySelector)(e.getState(), t) }));
            })(e, r),
            i = (0, u.getDeviceAccessKeySelector)(l, y),
            s = await (0, p.getAuthenticationMethodsForLogin)(e, {
              login: y,
              deviceAccessKey: i,
              methods: a.localSupportedAuthenticationMethod,
              profiles: t
            });
          if ((0, p.isApiError)(s))
            return (async function (e, t, r, n) {
              if (!(0, p.isApiErrorOfType)(p.BusinessError, r)) throw new Error(`Failed to getAuthenticationMethodsForLogin (${r.code})`);
              const i = r.code;
              switch (i) {
                case p.DeviceDeactivated:
                  throw (
                    (await (0, A.wipeOutLocalAccounts)(e, t, [n]),
                    new Error(o.AuthenticationCode[o.AuthenticationCode.DEVICE_NOT_REGISTERED]))
                  );
                case p.ClientVersionDoesNotSupportSSOMigration:
                  throw new Error(o.AuthenticationCode[o.AuthenticationCode.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION]);
                case p.TeamGenericError:
                  throw new Error(o.AuthenticationCode[o.AuthenticationCode.TEAM_GENERIC_ERROR]);
                default:
                  (0, m.assertUnreachable)(i);
              }
            })(r, n, s, y);
          !(async function (e, t, r) {
            const { profilesToDelete: o } = r;
            if ((o || []).length > 0) return;
            const n = o.map((e) => e.login);
            await (0, A.wipeOutLocalAccounts)(e, t, n);
          })(r, n, s),
            (v = s.verifications),
            (T = s.accountType);
        } catch (e) {
          if (!(0, E.isCarbonError)(e, g.HttpError)) throw e;
          v = (function (e) {
            const t = (function (e) {
              return (0, i.getUserPublicSetting)(e, "otp2") ? c.OtpType.OTP_LOGIN : null;
            })(e);
            return t === c.OtpType.OTP_LOGIN ? [{ type: "totp" }] : [];
          })(y);
        }
        const f = v.find((e) => "sso" === e.type);
        return (
          (_ =
            f?.ssoInfo.serviceProviderUrl && "mp_user_to_sso_member" !== f?.ssoInfo.migration
              ? o.AuthenticationCode.SSO_LOGIN_BYPASS
              : (function (e, t = []) {
                  const r = (function (e) {
                    if (e.some((e) => "totp" === e.type)) return c.OtpType.OTP_LOGIN;
                    if (e.filter((e) => "sso" !== e.type).length > 0) throw new Error("Unsupported 2FA method requested");
                    return null;
                  })(t);
                  return (
                    (function (e, t) {
                      (0, i.storeUserPublicSetting)(e, "otp2", t === c.OtpType.OTP_LOGIN);
                    })(e, r),
                    r === c.OtpType.OTP_LOGIN ? o.AuthenticationCode.ASK_OTP : o.AuthenticationCode.ASK_MASTER_PASSWORD
                  );
                })(y, v)),
          (function (e, r, n, i) {
            switch (e) {
              case o.AuthenticationCode.SSO_LOGIN_BYPASS:
                if (!n?.serviceProviderUrl)
                  throw new Error("[LocalAuthentication] - Unable to use SSO verification. Missing SSO information.");
                r.dispatch((0, d.storeSSOSettings)({ ssoUser: !0, ...(0, t.getUsersSSOInfo)(n) }));
                break;
              case o.AuthenticationCode.ASK_OTP:
                r.dispatch((0, s.enableOtp)(c.OtpType.OTP_LOGIN));
            }
            e !== o.AuthenticationCode.SSO_LOGIN_BYPASS &&
              r.dispatch((0, d.storeSSOSettings)({ ssoUser: !1, ...(0, t.getUsersSSOInfo)(n) })),
              r.dispatch((0, s.storeAccountAuthenticationType)(i));
          })(_, e, f ? f.ssoInfo : void 0, T),
          _
        );
      }),
        (t.completeLogin = async function (e, t, r, n, i) {
          const a = e.getUserLogin(),
            s = { login: a, deviceAccessKey: (0, u.getDeviceAccessKeySelector)(e.getState(), a), authTicket: n },
            c = await (0, p.completeLoginWithAuthTicket)(e, s);
          if ((0, p.isApiError)(c))
            return (async function (e, t, r, n) {
              if (!(0, p.isApiErrorOfType)(p.BusinessError, r)) throw new Error(`Failed to complete login (${r.code})`);
              const i = r.code;
              switch (i) {
                case p.DeviceNotFound:
                  throw (
                    (await (0, A.wipeOutLocalAccounts)(e, t, [n]),
                    new Error(o.AuthenticationCode[o.AuthenticationCode.DEVICE_NOT_REGISTERED]))
                  );
                case p.InvalidAuthTicket:
                  throw new Error(o.AuthenticationCode[o.AuthenticationCode.TOKEN_NOT_VALID]);
                default:
                  (0, m.assertUnreachable)(i);
              }
            })(t, r, c, a);
          const { serverKey: d } = c;
          if (!d) throw new Error(o.AuthenticationCode[o.AuthenticationCode.SERVER_KEY_MISSING]);
          return (
            e.dispatch((0, l.updateisUsingDashlaneAuthenticator)(i)),
            e.dispatch((0, l.updateServerKey)(d)),
            o.AuthenticationCode.ASK_MASTER_PASSWORD
          );
        }),
        (t.loadLocalData = async function (e, t, r) {
          return (
            r.getInstance().prepareCrypto(),
            await e.getInstance().user.loadSessionData(),
            t.dispatch((0, s.localDataLoaded)()),
            o.AuthenticationCode.LOGGEDIN
          );
        }),
        (t.getUsersSSOInfo = (e) => {
          if (!e) return { serviceProviderUrl: "" };
          const t = ((e) => {
            if (e.migration)
              switch (e.migration) {
                case "mp_user_to_sso_member":
                  return n.AuthenticationFlowContracts.SSOMigrationType.MP_TO_SSO;
                case "sso_member_to_admin":
                case "sso_member_to_mp_user":
                  return n.AuthenticationFlowContracts.SSOMigrationType.SSO_TO_MP;
              }
          })(e);
          return {
            serviceProviderUrl: e.serviceProviderUrl ? e.serviceProviderUrl : "",
            ...(void 0 !== t ? { migration: t } : {}),
            isNitroProvider: e.isNitroProvider
          };
        });
    },
    6e3: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLoginStatus$ = t.loginStatusSelector = void 0);
      const o = r(432034),
        n = r(401067),
        i = r(518948),
        a = r(903343),
        s = r(127754),
        c = r(538981),
        d = (0, o.createSelector)(
          s.sessionIdSelector,
          (e) => e.userSession.account.isAuthenticated,
          (e, t) => e && t
        );
      (t.loginStatusSelector = (0, o.createSelector)(
        d,
        (e) => e.userSession.account,
        c.ssoMigrationInfoSelector,
        (e, t, r) => {
          if (!e) return { login: null, loggedIn: !1, needsSSOMigration: !1 };
          const { isAuthenticated: o, login: n } = t;
          return { loggedIn: o, login: n, needsSSOMigration: void 0 !== r };
        }
      )),
        (t.getLoginStatus$ = () => (0, i.pipe)((0, a.map)(t.loginStatusSelector), (0, a.distinctUntilChanged)(n.equals)));
    },
    538865: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateWebOnboardingMode = void 0);
      const o = r(976089),
        n = r(958639);
      t.updateWebOnboardingMode = function (e, t, r) {
        if (!e.isAuthenticated()) throw new Error("No session set");
        e.dispatch(o.webOnboardingModeUpdated(r));
        const i = e.getLocalSettings().webOnboardingMode;
        n.sendWebOnboardingModeUpdate(i), t.getInstance().user.persistLocalSettings();
      };
    },
    857789: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isOnboardingNotificationShowing = void 0);
      const o = r(453576);
      t.isOnboardingNotificationShowing = (e) => {
        const { completedSteps: t, flowLoginCredentialOnWeb: r, leelooStep: n, popoverStep: i } = e,
          {
            SHOW_LOGIN_USING_EXTENSION_NOTIFICATION: a,
            SHOW_PASSWORD_SAVE_SUCCESS: s,
            SHOW_WEB_SAVE_AND_AUTOLOGIN_COMPLETED: c
          } = o.WebOnboardingLeelooStep,
          { SHOW_LOGIN_NOTIFICATION: d } = o.WebOnboardingPopoverStep,
          l = r && n === a,
          u = t.saveCredentialOnWeb && n === s,
          S = t.saveCredentialOnWeb && t.loginCredentialOnWeb && n === c;
        return l || u || S || (r && i === d);
      };
    },
    782652: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDashlaneApiPairingService = void 0);
      const o = r(46298),
        n = r(795623);
      t.makeDashlaneApiPairingService = (e) => ({
        requestPairing: (t) =>
          (async (e, t) => {
            try {
              const r = await o.requestPairing(e, t);
              if (o.isApiError(r)) throw r;
              return r;
            } catch (e) {
              return void (0, n.logError)({ message: `Pairing request failed: ${e}` });
            }
          })(e, t)
      });
    },
    415718: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pairingIdSelector = t.isPairingEnabledSelector = void 0),
        (t.isPairingEnabledSelector = (e) => Boolean(e.userSession.session.pairingId)),
        (t.pairingIdSelector = (e) => e.userSession.session.pairingId);
    },
    410824: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.requestPairing = void 0);
      const o = r(415718),
        n = r(802246),
        i = r(816356),
        a = r(782652);
      t.requestPairing = async (e, t) => {
        const r = e.getState();
        if ((0, o.pairingIdSelector)(r)) return;
        if (!(0, n.getSyncAppSetting)("syncWithLocalClients")) return;
        const s = (0, a.makeDashlaneApiPairingService)(e),
          c = await s.requestPairing(t),
          d = c?.pairingId;
        d && e.dispatch((0, i.pairingSucceeded)(d));
      };
    },
    835507: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.transformNodePremiumStatus = t.getFreshPremiumStatus = t.refreshSubscriptionInformation = t.refreshPremiumStatus = void 0);
      const o = r(401067),
        n = r(453576),
        i = r(795623),
        a = r(670252),
        s = r(448313),
        c = r(766833),
        d = r(25576),
        l = r(925011),
        u = r(31375),
        S = r(976089);
      async function p(e, t) {
        const r = e.getLocalSettings().subscriptionInformation;
        try {
          const r = await (0, u.getSubscriptionInformation)(e, t);
          return e.dispatch((0, S.localSettingsSubscriptionInformationStatusUpdated)(r)), r;
        } catch (e) {
          const t = new Error(`[PremiumController] - refreshUserSubscriptionStatus: ${e}`);
          if ((i.default.error(t), (0, a.sendExceptionLog)({ error: t }), r)) return r;
          throw e;
        }
      }
      (t.refreshPremiumStatus = async function (e, t, r, o) {
        const n = e.getLocalSettings().premiumStatus,
          d = e.getLocalSettings().nodePremiumStatus,
          u = !d?.currentTimestampUnix || Date.now() - d.currentTimestampUnix > 1e4;
        if (d && !u) return n;
        try {
          const [n, i] = await Promise.all([E(t, r, o), (0, l.getPremiumStatus)(e, r), p(e, r)]),
            a = n?.spaces || [],
            d = v(i),
            u = { ...n, planName: n?.planName?.toLowerCase() ?? null };
          return (
            e.dispatch((0, s.premiumStatusUpdated)(u)),
            e.dispatch((0, S.localSettingsNodePremiumStatusUpdated)(d)),
            (0, c.refreshSpaceData)(e, a),
            n
          );
        } catch (e) {
          const t = new Error(`[PremiumController] - refreshPremiumStatus: ${e}`);
          if ((i.default.error(t), (0, a.sendExceptionLog)({ error: t }), n)) return n;
          throw e;
        }
      }),
        (t.refreshSubscriptionInformation = p);
      const m = (e) => {
          if (e.capabilities && e.capabilities.length)
            return e.capabilities.reduce((e, t) => {
              const { capability: r, ...o } = t;
              return (e[r] = o), e;
            }, {});
        },
        g = (e) => (e.familyMembership ? e.familyMembership[0] : void 0);
      function E(e, t, r) {
        return e.premium
          .status({
            login: t,
            uki: r,
            billingInformation: !0,
            spaces: !0,
            autoRenewal: !0,
            familyInformation: !0,
            previousPlan: !0,
            needsAutoRenewalFailed: !0
          })
          .then((e) => {
            const t = (0, o.pick)(
              [
                "statusCode",
                "billingInformation",
                "planName",
                "planType",
                "planFeature",
                "endDate",
                "spaces",
                "autoRenewal",
                "previousPlan",
                "autoRenewalFailed",
                "autoRenewInfo",
                "recoveryHash"
              ],
              e
            );
            return (t.capabilities = m(e)), e.hasOwnProperty("familyMembership") && (t.familyMembership = g(e)), t;
          });
      }
      t.getFreshPremiumStatus = E;
      const A = (e) => {
          if (e.capabilities?.length)
            return e.capabilities.reduce((e, t) => {
              const { capability: r, ...o } = t;
              return (e[r] = o), e;
            }, {});
        },
        I = (e) => {
          switch (e.b2cStatus.statusCode) {
            case d.B2CStatusCode.Subscribed:
              return e.b2cStatus.planName.includes("grace")
                ? n.PremiumStatusCode.GRACE_PERIOD
                : e.b2cStatus.isTrial
                ? n.PremiumStatusCode.NEW_USER
                : e.b2cStatus.autoRenewal
                ? n.PremiumStatusCode.PREMIUM_CANCELLED
                : n.PremiumStatusCode.PREMIUM;
            case d.B2CStatusCode.Legacy:
              return n.PremiumStatusCode.OLD_ACCOUNT;
            case d.B2CStatusCode.Free:
            default:
              return n.PremiumStatusCode.NO_PREMIUM;
          }
        };
      function y(e) {
        const t = [];
        return (
          e.currentTeam &&
            t.push({
              associatedEmail: e.currentTeam.associatedEmail,
              billingAdmins: e.currentTeam.teamMembership.billingAdmins,
              color: e.currentTeam.teamInfo.color,
              companyName: e.currentTeam.teamInfo.teamName,
              info: { ...e.currentTeam.teamInfo },
              invitationDate: e.currentTeam.invitationDateUnix,
              isBillingAdmin: e.currentTeam.teamMembership.isBillingAdmin,
              isSSOUser: e.currentTeam.teamMembership.isSSOUser,
              isTeamAdmin: e.currentTeam.teamMembership.isTeamAdmin,
              isGroupManager: e.currentTeam.teamMembership.isGroupManager,
              joinDate: e.currentTeam.joinDateUnix,
              letter: e.currentTeam.teamInfo.letter,
              membersNumber: e.currentTeam.teamInfo.membersNumber,
              planType: e.currentTeam.teamInfo.planType,
              revokeDate: null,
              shouldDelete: !1,
              status: n.SpaceStatus.Accepted,
              teamAdmins: { ...e.currentTeam.teamMembership.teamAdmins },
              teamId: e.currentTeam.teamId.toString(),
              teamName: e.currentTeam.teamName,
              tier: e.currentTeam.planFeature
            }),
          e.pastTeams &&
            e.pastTeams.forEach((e) => {
              t.push({
                associatedEmail: e.associatedEmail,
                billingAdmins: e.teamMembership.billingAdmins,
                color: e.teamInfo.color,
                companyName: e.teamName,
                info: { ...e.info },
                invitationDate: e.invitationDateUnix,
                isBillingAdmin: e.teamMembership.isBillingAdmin,
                isSSOUser: e.teamMembership.isSSOUser,
                isTeamAdmin: e.teamMembership.isTeamAdmin,
                isGroupManager: e.teamMembership.isGroupManager,
                joinDate: e.joinDateUnix,
                letter: e.teamInfo.letter,
                membersNumber: e.teamInfo.membersNumber,
                planType: e.teamInfo.planType,
                revokeDate: e.revokeDateUnix,
                shouldDelete: e.shouldDelete,
                status: e.status,
                teamAdmins: { ...e.teamMembership.teamAdmins },
                teamId: e.teamId.toString(),
                teamName: e.teamName,
                tier: e.planFeature
              });
            }),
          t
        );
      }
      function v(e) {
        return {
          ...e.b2cStatus,
          planName: e.b2cStatus?.planName?.toLowerCase() ?? null,
          currentTimestampUnix: Date.now(),
          isTrial: e.b2cStatus.isTrial,
          statusCode: I(e),
          spaces: e.b2bStatus ? y(e.b2bStatus) : [],
          b2bStatus: { ...e.b2bStatus },
          capabilities: A(e)
        };
      }
      t.transformNodePremiumStatus = v;
    },
    770414: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUsersSSOInfo =
          t.validateMasterPassword =
          t.registerDevice =
          t.registerDeviceWithToken =
          t.registerDeviceWithDashlaneAuthenticator =
          t.cancelRegistrationWithDashlaneAuthenticator =
          t.generateUki =
          t.askServerToSendToken =
          t.checkLoginWithUki =
          t.requestDeviceRegistration =
          t.SendTokenStatus =
            void 0);
      const o = r(235992),
        n = r(401067),
        i = r(453576),
        a = r(677876),
        s = r(25576),
        c = r(172636),
        d = r(795623),
        l = r(976089),
        u = r(586797),
        S = r(259489),
        p = r(525963),
        m = r(463713),
        g = r(448313),
        E = r(316038),
        A = r(164910),
        I = r(133769),
        y = r(956668),
        v = r(816356),
        T = r(926625),
        _ = r(807624),
        f = r(643739);
      var C = r(172636);
      Object.defineProperty(t, "SendTokenStatus", {
        enumerable: !0,
        get: function () {
          return C.SendTokenStatus;
        }
      });
      const O = r(17825),
        h = r(719399),
        D = r(628287),
        R = r(416593),
        N = r(46298),
        P = r(670252),
        L = r(392263);
      let U, M;
      (t.requestDeviceRegistration = async function (e) {
        const r = e.getAccountInfo().login,
          o = await (0, N.getAuthenticationMethodsForDevice)(e, { login: r, methods: s.remoteSupportedAuthenticationMethod });
        if ((0, N.isApiError)(o))
          return (function (e) {
            if (!(0, N.isApiErrorOfType)(N.BusinessError, e)) throw new Error(`Failed to getAuthenticationMethodsForDevice (${e.code})`);
            const t = e.code;
            switch (t) {
              case N.UserNotFound:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.USER_DOESNT_EXIST]);
              case N.SSOBlocked:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.SSO_BLOCKED]);
              case N.ClientVersionDoesNotSupportSSOMigration:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.CLIENT_VERSION_DOES_NOT_SUPPORT_SSO_MIGRATION]);
              case N.TeamGenericError:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.TEAM_GENERIC_ERROR]);
              default:
                (0, O.assertUnreachable)(t);
            }
          })(o);
        const { verifications: n, accountType: a } = o;
        if (!n) throw new Error("[requestDeviceRegistration] - No verification in API response.");
        let c;
        const d = n.find((e) => "sso" === e.type);
        return (
          (c =
            d?.ssoInfo.serviceProviderUrl && "mp_user_to_sso_member" !== d?.ssoInfo.migration
              ? i.AuthenticationCode.SSO_LOGIN_BYPASS
              : (function (e = []) {
                  if (e.some(({ type: e }) => "email_token" === e)) return i.AuthenticationCode.ASK_TOKEN;
                  if (e.some(({ type: e }) => "totp" === e)) return i.AuthenticationCode.ASK_OTP_FOR_NEW_DEVICE;
                  if (e.some(({ type: e }) => "dashlane_authenticator" === e)) return i.AuthenticationCode.ASK_DASHLANE_AUTHENTICATOR;
                  throw new Error("[requestDeviceRegistration - getVerificationType] - Verification not supported!");
                })(n)),
          (function (e, r, o, n) {
            if (e === i.AuthenticationCode.SSO_LOGIN_BYPASS) {
              if (!o?.serviceProviderUrl)
                throw new Error(
                  "[requestDeviceRegistration - processVerification] - Unable to use SSO verification. Missing SSO information."
                );
              r.dispatch((0, _.storeSSOSettings)({ ssoUser: !0, ...(0, t.getUsersSSOInfo)(o) }));
            }
            e !== i.AuthenticationCode.SSO_LOGIN_BYPASS &&
              r.dispatch((0, _.storeSSOSettings)({ ssoUser: !1, ...(0, t.getUsersSSOInfo)(o) })),
              r.dispatch((0, S.storeAccountAuthenticationType)(n));
          })(c, e, d ? d.ssoInfo : void 0, a),
          c
        );
      }),
        (t.checkLoginWithUki = async function (e, t, r) {
          const o = e.getAccountInfo().login;
          if (
            !(await (async function (e, t, r) {
              return "UKI VALID" === (await e.authentication.validity({ login: t, uki: r }));
            })(t, o, r))
          )
            throw new Error(i.AuthenticationCode[i.AuthenticationCode.INVALID_UKI]);
          return e.dispatch((0, S.confirmUserAuthentication)()), Promise.resolve(i.AuthenticationCode.USE_LOCAL_UKI);
        }),
        (t.askServerToSendToken = async function (e, t) {
          const r = await e.authentication.askServerToSendToken({ login: t });
          if (r !== c.SendTokenStatus.SUCCESS)
            throw (
              (d.default.log(`Server failed to send a token with status: ${c.SendTokenStatus[r]}`),
              new Error(i.AuthenticationCode[i.AuthenticationCode.SEND_TOKEN_FAILED]))
            );
        });
      const B = (e, t) => {
        t ? e.dispatch((0, S.enableOtp)(u.OtpType.OTP_LOGIN)) : e.dispatch((0, S.enableOtp)(u.OtpType.OTP_NEW_DEVICE));
      };
      t.generateUki = function (e) {
        return `${e}-${(0, o.v4)()}`;
      };
      const G = (e, t, r, o, n) => {
          const i = n || T.device.getDefaultDeviceName(),
            a = e.getPlatformInfo(),
            c = e.getAccountInfo().login,
            d = (0, h.secureDeviceName)(i);
          if ("server_carbon_unknown" === a.platformName) throw new Error("Unexpected uninitialized platform info");
          const l = {
            deviceName: d,
            appVersion: a.appVersion,
            platform: a.platformName,
            osCountry: (0, N.makeSafeCountry)(e.getLocation().country || a.country),
            osLanguage: (0, N.makeSafeLanguage)(a.lang),
            temporary: r !== s.PersistData.PERSIST_DATA_YES
          };
          switch (t.type) {
            case "extraDeviceToken":
              return (0, N.completeExtraDeviceRegistrationWithToken)(e, {
                device: l,
                login: c,
                verification: { token: (0, s.extractExtraDeviceToken)(t) }
              });
            case "emailToken":
            case "otp":
            case "sso":
              return (0, N.completeDeviceRegistrationWithAuthTicket)(e, { device: l, login: c, authTicket: o });
            default:
              (0, O.assertUnreachable)(t);
          }
        },
        w = (e, t, r, o) => {
          const n = o || T.device.getDefaultDeviceName(),
            i = e.getPlatformInfo(),
            a = e.getAccountInfo().login,
            c = (0, h.secureDeviceName)(n);
          if ("server_carbon_unknown" === i.platformName) throw new Error("Unexpected unitiliazed platform info");
          const d = {
            deviceName: c,
            appVersion: i.appVersion,
            platform: i.platformName,
            osCountry: (0, N.makeSafeCountry)(e.getLocation().country || i.country),
            osLanguage: (0, N.makeSafeLanguage)(i.lang),
            temporary: t !== s.PersistData.PERSIST_DATA_YES
          };
          return (0, N.completeDeviceRegistrationWithAuthTicket)(e, { device: d, login: a, authTicket: r });
        },
        b = async (e, t) => {
          const r = await (0, D.dashlaneAuthenticatorGetAuthTicket)(e, t);
          if (!1 === r.success) {
            const {
              error: { code: e, message: t }
            } = r;
            if (e === i.AuthenticationCode.BUSINESS_ERROR) throw new Error(t);
            throw new Error(i.AuthenticationCode[e]);
          }
          return U?.(s.CancelDashlaneAuthenticatorRegistration.COMPLETED), r.authTicket;
        };
      (t.cancelRegistrationWithDashlaneAuthenticator = async function () {
        M?.(s.CancelDashlaneAuthenticatorRegistration.CANCELLED);
      }),
        (t.registerDeviceWithDashlaneAuthenticator = async function (e, t, r) {
          const o = new Promise((e, t) => {
            (U = e), (M = t);
          });
          let n;
          try {
            n = (await Promise.all([b(e, r), o]))[0];
          } catch (e) {
            if (e === s.CancelDashlaneAuthenticatorRegistration.CANCELLED)
              return i.AuthenticationCode.DASHLANE_AUTHENTICATOR_LOGIN_CANCELLED;
            throw e;
          } finally {
            (M = void 0), (U = void 0);
          }
          if (n) {
            const o = await w(e, t, n, r);
            (0, N.isApiError)(o) &&
              (function (e) {
                if (!(0, N.isApiErrorOfType)(N.BusinessError, e)) throw new Error(`Failed to complete device registration (${e.code})`);
                const t = e.code;
                if (t === N.InvalidAuthTicket)
                  throw new Error(i.AuthenticationCode[i.AuthenticationCode.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED]);
                (0, O.assertUnreachable)(t);
              })(o),
              e.dispatch((0, v.updateisUsingDashlaneAuthenticator)(!0)),
              e.dispatch((0, v.updateisUsingBackupCode)(!1));
            const {
              deviceAccessKey: a,
              deviceSecretKey: s,
              settings: c,
              serverKey: d,
              deviceAnalyticsId: l,
              userAnalyticsId: u,
              publicUserId: S
            } = o;
            return (
              k(e, {
                deviceAccessKey: a,
                deviceSecretKey: s,
                settings: c,
                serverKey: d,
                deviceAnalyticsId: l,
                userAnalyticsId: u,
                publicUserId: S,
                isDataPersisted: t
              }),
              i.AuthenticationCode.ASK_MASTER_PASSWORD
            );
          }
          throw new Error("Authentication Ticket is missing");
        });
      async function k(e, t) {
        const { login: r } = e.getAccountInfo(),
          {
            deviceAccessKey: o,
            deviceSecretKey: n,
            settings: i,
            serverKey: a,
            deviceAnalyticsId: s,
            userAnalyticsId: c,
            publicUserId: d,
            isDataPersisted: l
          } = t;
        e.dispatch((0, f.deviceRegistered)((0, f.makeDeviceRegistrationKeys)(o, n), l, r)),
          a && e.dispatch((0, v.updateServerKey)(a)),
          e.dispatch((0, v.updateSettingsForMPValidation)(i)),
          s && e.dispatch((0, v.updateDeviceAnalyticsId)(s)),
          c && e.dispatch((0, v.updateUserAnalyticsId)(c)),
          d && e.dispatch((0, v.updatePublicUserId)(d));
      }
      (t.registerDeviceWithToken = async function (e, t, r, o, a, s) {
        const c = await (async (e, t) => {
            const r = await (0, D.convertTokenToAuthTicket)(e, t);
            if (!1 === r.success) {
              const {
                error: { code: e, message: t }
              } = r;
              if (e === i.AuthenticationCode.BUSINESS_ERROR) throw new Error(t);
              throw new Error(i.AuthenticationCode[e]);
            }
            return r.authTicket;
          })(e, r),
          d = await G(e, r, t, c, a);
        if ((0, N.isApiError)(d))
          return (function (e, t) {
            if (!(0, N.isApiErrorOfType)(N.BusinessError, e)) throw new Error(`Failed to complete device registration (${e.code})`);
            const r = e.code;
            switch (r) {
              case N.UserNotFound:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.INVALID_LOGIN]);
              case N.VerificationFailed:
              case N.InvalidAuthTicket:
                if ("otp" === t.type) throw new Error(i.AuthenticationCode[i.AuthenticationCode.OTP_NOT_VALID]);
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.TOKEN_NOT_VALID]);
              case N.VerificationMethodDisabled:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.REGISTER_DEVICE_FAILED]);
              case N.TeamGenericError:
                throw new Error(i.AuthenticationCode[i.AuthenticationCode.TEAM_GENERIC_ERROR]);
              default:
                (0, O.assertUnreachable)(r);
            }
          })(d, r);
        const {
          deviceAccessKey: l,
          deviceSecretKey: u,
          settings: S,
          serverKey: p,
          ssoServerKey: m,
          remoteKeys: g,
          deviceAnalyticsId: T,
          userAnalyticsId: _,
          publicUserId: f
        } = d;
        if (m) {
          const { masterPasswordEncryptorService: t, remoteDataEncryptorService: r, ssoServiceProviderKey: o } = s;
          if (!g || (0, n.isEmpty)(g)) throw new Error("registerDevice failed with error: ssoServerKey or remoteKeys is missing");
          const i = (0, E.base64ToBuffer)(m),
            a = g.filter((e) => "sso" === e.type)[0];
          try {
            const n = (0, E.base64ToBuffer)(o),
              s = (0, I.getEncryptionKeyBuffer)(n, i, { skipDerivation: !0 }),
              c = (0, E.arrayBufferToText)(s),
              d = "",
              l = (0, A.getNoDerivationCryptoConfig)();
            e.dispatch((0, v.updateMasterPassword)(c)), await t.setInstance({ raw: c }, d, l);
            const u = await t.getInstance().decrypt(a.key),
              S = (0, y.deflatedUtf8ToUtf16)(u, { skipUtf8Decoding: !0, skipInflate: !0 });
            await r.setInstance({ raw: S }, d, l), e.dispatch((0, v.updateRemoteKey)(S));
          } catch (e) {
            throw new Error(`registerDevice failed deciphering remoteKey with error: ${e}`);
          }
        }
        return (
          e.dispatch((0, v.updateisUsingDashlaneAuthenticator)(!1)),
          e.dispatch((0, v.updateisUsingBackupCode)(o)),
          "otp" === r?.type && B(e, p),
          k(e, {
            deviceAccessKey: l,
            deviceSecretKey: u,
            settings: S,
            serverKey: p,
            deviceAnalyticsId: T,
            userAnalyticsId: _,
            publicUserId: f,
            isDataPersisted: t
          }),
          i.AuthenticationCode.ASK_MASTER_PASSWORD
        );
      }),
        (t.registerDevice = k),
        (t.validateMasterPassword = async function (e, t) {
          try {
            const r = e.getState(),
              o = (0, R.masterPasswordValidationDataSelector)(r),
              n = (e) => {},
              [a] = await m.decrypt(t.getInstance(), n, null, new Map(), [o]);
            return (
              e.dispatch(await (0, g.applyTransaction)(a)),
              e.dispatch(l.registerLastSync(p.MIN_SYNC_TIMESTAMP)),
              i.AuthenticationCode.LOGGEDIN
            );
          } catch (e) {
            const t = L.CarbonError.fromAnyError(e).addContextInfo("REMOTE LOGIN", "validateMasterPassword");
            throw ((0, P.sendExceptionLog)({ error: t }), new Error(i.AuthenticationCode[i.AuthenticationCode.WRONG_PASSWORD]));
          }
        }),
        (t.getUsersSSOInfo = (e) => {
          if (!e) return { serviceProviderUrl: "" };
          const t = ((e) => {
            if (e.migration)
              switch (e.migration) {
                case "mp_user_to_sso_member":
                  return a.AuthenticationFlowContracts.SSOMigrationType.MP_TO_SSO;
                case "sso_member_to_admin":
                case "sso_member_to_mp_user":
                  return a.AuthenticationFlowContracts.SSOMigrationType.SSO_TO_MP;
              }
          })(e);
          return {
            serviceProviderUrl: e.serviceProviderUrl ? e.serviceProviderUrl : "",
            ...(void 0 !== t ? { migration: t } : {}),
            isNitroProvider: e.isNitroProvider
          };
        });
    },
    958639: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendConfirmCreateAccountResult =
          t.sendEncryptSettingsResult =
          t.sendFeatures =
          t.sendWebOnboardingModeUpdate =
          t.sendTeamAdminDataUpdate =
          t.sendAccountInfo =
          t.changeDeviceNameResult =
          t.deactivateDeviceResult =
          t.updatePaymentCardTokenResult =
          t.reportDataUpdate =
          t.getDataUpdates =
          t.sendLocationInfo =
          t.sendLocalAccounts =
          t.triggerSessionSyncStatus =
          t.triggerSessionOpened =
          t.triggerOpenSessionFailed =
          t.getAuthenticationCodeFromError =
          t.triggerServerSidePairingStatusChanged =
          t.triggerLoginStatusChanged =
          t.triggerOpenSessionMasterPasswordLess =
          t.triggerOpenSessionSsoRedirectionToIdpRequired =
          t.triggerOpenSessionExtraDeviceTokenRequired =
          t.triggerOpenSessionDashlaneAuthenticator =
          t.triggerOpenSessionTokenSent =
          t.triggerAskMasterPassword =
          t.triggerOpenSessionOTPForNewDeviceRequired =
          t.triggerOpenSessionOTPSent =
          t.SessionResumingCode =
          t.AuthenticationCode =
            void 0);
      const o = r(401067),
        n = r(453576),
        i = r(453576);
      Object.defineProperty(t, "AuthenticationCode", {
        enumerable: !0,
        get: function () {
          return i.AuthenticationCode;
        }
      });
      const a = r(721726),
        s = r(319697),
        c = r(670252),
        d = r(795623),
        l = r(239373),
        u = r(46083),
        S = r(392263),
        p = r(314656),
        m = r(290622),
        g = r(25576);
      Object.defineProperty(t, "SessionResumingCode", {
        enumerable: !0,
        get: function () {
          return g.SessionResumingCode;
        }
      });
      const E = r(819979),
        A = r(256814),
        I = r(791892),
        y = r(841717),
        v = r(538981),
        T = r(727885);
      function _(e) {
        d.default.log(`Session status updated for ${e.login}`);
        const t = (0, a.default)();
        t && t.loginStatusChanged(e);
        const r = (0, s.default)();
        r && r.loginStatusChanged(e);
      }
      function f(e) {
        if (s.default) {
          const t = (0, s.default)();
          t && t.serverSidePairingStatusChanged(e);
        }
      }
      function C(e) {
        let t =
          e && e.message && void 0 !== i.AuthenticationCode[e.message]
            ? i.AuthenticationCode[e.message]
            : i.AuthenticationCode.UNKNOWN_ERROR;
        return (
          t === i.AuthenticationCode.UNKNOWN_ERROR &&
            ((0, S.isCarbonError)(e, p.HttpError, p.HttpErrorCode.NETWORK_ERROR) && (t = i.AuthenticationCode.NETWORK_ERROR),
            e?.message?.includes("TOKEN_NOT_VALID") && (t = i.AuthenticationCode.TOKEN_NOT_VALID)),
          t
        );
      }
      function O(e) {
        switch (e) {
          case i.AuthenticationCode.INVALID_LOGIN:
          case i.AuthenticationCode.EMPTY_LOGIN:
          case i.AuthenticationCode.EMPTY_MASTER_PASSWORD:
          case i.AuthenticationCode.EMPTY_TOKEN:
          case i.AuthenticationCode.EMPTY_OTP:
          case i.AuthenticationCode.NETWORK_ERROR:
          case i.AuthenticationCode.USER_DOESNT_EXIST:
          case i.AuthenticationCode.OTP_NOT_VALID:
          case i.AuthenticationCode.TOKEN_NOT_VALID:
          case i.AuthenticationCode.TOKEN_TOO_MANY_ATTEMPTS:
          case i.AuthenticationCode.WRONG_PASSWORD:
            return i.ExceptionCriticality.WARNING;
          default:
            return i.ExceptionCriticality.ERROR;
        }
      }
      function h(e) {
        return Promise.resolve({ localAccounts: e }).then((e) => {
          d.default.log("send localAccountsListUpdated to leeloo");
          const t = (0, a.default)();
          t && t.localAccountsListUpdated(e);
          const r = (0, s.default)();
          r && r.localAccountsListUpdated(e);
        });
      }
      function D(e) {
        const t = e.getPersonalData(),
          r = e.getSpaceData(),
          n = e.getSharingData(),
          i = e.getUserLogin(),
          a = (0, o.curry)(l.removeCredentialsWithQuarantinedSpaces)(r),
          s = (0, o.pipe)(a, l.fixCredentialsWithMissingTitles)(t.credentials),
          c = ["changesToUpload", "changeHistories"],
          d = (0, o.omit)(c, { ...t, credentials: s }),
          S = (0, l.handleLimitedSharedCredentialsPassword)(s, n, i),
          p = (0, u.handleLimitedSharedNotes)(t.notes, n, i);
        return { personalDataToSend: d, obfuscatedPersonalDataToSend: (0, o.omit)(c, { ...t, credentials: S, notes: p }) };
      }
      function R(e) {
        const t = e.getState(),
          r = e.getSpaceData(),
          { obfuscatedPersonalDataToSend: o } = D(e),
          n = (0, a.default)(),
          i = (0, s.default)();
        if ((n && n.dataModelUpdated(o), i && i.spaceDataUpdated(r), n)) {
          const e = (0, E.getIconsUrlsForCredentials)(o.credentials),
            r = (0, A.getFormattedDomainsFromUrls)(e),
            i = (0, A.decryptIconsDomains)((0, I.iconsSelector)(t), r),
            a = { ...o, credentials: (0, E.getCredentialsWithWebsiteIcon)(o.credentials, i, y.defaultIconTypes) };
          n.dataModelUpdated(a);
        }
      }
      function N(e, t) {
        const r = (0, a.default)();
        r && r.accountInfoChanged({ accountInfo: e, spaceData: t });
        const o = (0, s.default)();
        o && o.accountInfoChanged({ accountInfo: e, spaceData: t });
      }
      function P(e) {
        const t = (0, a.default)();
        t && t.webOnboardingModeUpdated(e);
        const r = (0, s.default)();
        r && r.webOnboardingModeUpdated(e);
      }
      (t.triggerOpenSessionOTPSent = function (e) {
        d.default.log("Ask for OTP");
        const t = (0, a.default)();
        t && t.openSessionOTPSent(e);
        const r = (0, s.default)();
        r && r.openSessionOTPSent(e);
      }),
        (t.triggerOpenSessionOTPForNewDeviceRequired = function () {
          const e = (0, a.default)();
          e && e.openSessionOTPForNewDeviceRequired();
          const t = (0, s.default)();
          t && t.openSessionOTPForNewDeviceRequired();
        }),
        (t.triggerAskMasterPassword = function (e) {
          d.default.log("Ask for master password");
          const t = (0, a.default)();
          t && t.openSessionAskMasterPassword({ login: e });
          const r = (0, s.default)();
          r && r.openSessionAskMasterPassword({ login: e });
        }),
        (t.triggerOpenSessionTokenSent = function (e) {
          d.default.log("Ask for new device e-mail token");
          const t = (0, a.default)();
          t && t.openSessionTokenSent(e);
          const r = (0, s.default)();
          r && r.openSessionTokenSent(e);
        }),
        (t.triggerOpenSessionDashlaneAuthenticator = function () {
          (0, d.logDebug)({ message: "Ask for new device dashlane authenticator push notification" });
          const e = (0, a.default)();
          e && e.openSessionDashlaneAuthenticator();
          const t = (0, s.default)();
          t && t.openSessionDashlaneAuthenticator();
        }),
        (t.triggerOpenSessionExtraDeviceTokenRequired = function () {
          const e = (0, a.default)();
          e && e.openSessionExtraDeviceTokenRequired();
          const t = (0, s.default)();
          t && t.openSessionExtraDeviceTokenRequired();
        }),
        (t.triggerOpenSessionSsoRedirectionToIdpRequired = function (e, t) {
          const r = (0, a.default)();
          r && r.openSessionSsoRedirectionToIdpRequired({ serviceProviderRedirectUrl: e, isNitroProvider: t });
          const o = (0, s.default)();
          o && o.openSessionSsoRedirectionToIdpRequired({ serviceProviderRedirectUrl: e, isNitroProvider: t });
        }),
        (t.triggerOpenSessionMasterPasswordLess = function () {
          const e = (0, a.default)();
          e && e.openSessionMasterPasswordLess();
          const t = (0, s.default)();
          t && t.openSessionMasterPasswordLess();
        }),
        (t.triggerLoginStatusChanged = _),
        (t.triggerServerSidePairingStatusChanged = f),
        (t.getAuthenticationCodeFromError = C),
        (t.triggerOpenSessionFailed = function (e) {
          d.default.log("Failed to open Session"), d.default.log(`error: ${e}`);
          const t = C(e),
            r = t === i.AuthenticationCode.UNKNOWN_ERROR ? (e && e.message && "string" == typeof e.message ? e.message : "89645128") : "",
            o = new Error(`[SessionCommunication] - triggerOpenSessionFailed: ${e}`);
          (o.stack = e.stack), d.default.error(o), (0, c.sendExceptionLog)({ error: o, code: O(t) });
          const n = { errorCode: i.AuthenticationCode[t], additionalErrorInfo: r, displayErrorCode: !0 },
            l = (0, a.default)();
          l && l.openSessionFailed(n);
          const u = (0, s.default)();
          u && u.openSessionFailed(n);
        }),
        (t.triggerSessionOpened = function (e, t, r, o) {
          const i = void 0 !== (0, v.ssoMigrationInfoSelector)(e.getState()).migration;
          _({ loggedIn: !0, login: e.getAccountInfo().login, needsSSOMigration: i }),
            N(r, (0, T.getNodePremiumStatusSpaceData)(e)),
            R(e),
            P(e.getLocalSettings().webOnboardingMode),
            (0, m.getLocalAccounts)(e, t).then((e) => {
              h(e);
            }),
            void 0 !== o && f({ serverSidePairingStatus: o ? n.ServerSidePairingStatus.PAIRED : n.ServerSidePairingStatus.UNPAIRED });
        }),
        (t.triggerSessionSyncStatus = function (e) {
          const t = (0, a.default)();
          t && t.sessionSyncStatus(e);
          const r = (0, s.default)();
          r && r.sessionSyncStatus(e);
        }),
        (t.sendLocalAccounts = h),
        (t.sendLocationInfo = function (e) {
          const t = (0, s.default)();
          t && t.currentLocationUpdated(e);
        }),
        (t.getDataUpdates = D),
        (t.reportDataUpdate = R),
        (t.updatePaymentCardTokenResult = function (e) {
          const t = (0, s.default)();
          t && t.updatePaymentCardTokenResult(e);
        }),
        (t.deactivateDeviceResult = function (e) {
          const t = (0, a.default)();
          t && t.deactivateDeviceResult(e);
          const r = (0, s.default)();
          r && r.deactivateDeviceResult(e);
        }),
        (t.changeDeviceNameResult = function (e) {
          const t = (0, a.default)();
          t && t.changeDeviceNameResult(e);
          const r = (0, s.default)();
          r && r.changeDeviceNameResult(e);
        }),
        (t.sendAccountInfo = N),
        (t.sendTeamAdminDataUpdate = function (e) {
          const t = (0, s.default)();
          t && t.teamAdminDataUpdated(e);
        }),
        (t.sendWebOnboardingModeUpdate = P),
        (t.sendFeatures = function (e) {
          const t = (0, a.default)();
          t && t.accountFeaturesChanged(e);
          const r = (0, s.default)();
          r && r.accountFeaturesChanged(e);
        }),
        (t.sendEncryptSettingsResult = function (e) {
          const t = (0, s.default)();
          t && t.encryptSettingsResultUpdated(e);
        }),
        (t.sendConfirmCreateAccountResult = function (e) {
          const t = (0, s.default)();
          t && t.confirmCreateAccountResultUpdated(e);
        });
    },
    405464: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.refeshAccountInfo =
          t.AutofillProtectionStatus =
          t.askWebsiteInfo =
          t.saveGeneratedPassword =
          t.generatePassword =
          t.getPasswordGenerationSettings =
          t.generateAndSavePassword =
          t.resumeSession =
          t.sessionForceSync =
          t.getAndTriggerRefreshAccountInfo =
          t.makeSessionController =
            void 0);
      const o = r(660765),
        n = r(50415),
        i = r(795623),
        a = r(958639),
        s = r(895648),
        c = r(18862),
        d = r(670252),
        l = r(344908),
        u = r(835507),
        S = r(515868),
        p = r(509486),
        m = r(719399),
        g = r(656915),
        E = r(416593),
        A = r(628287),
        I = r(134376),
        y = r(727885);
      t.makeSessionController = (e) => ({
        askWebsiteInfo: (t) => P(e.storeService, t),
        cancelPremiumSubscription: () =>
          (async function (e, t, r) {
            if (!e.isAuthenticated()) return { success: !1 };
            try {
              return (
                await t.getInstance().payment.cancelPremiumSubscription(),
                _(e, t, r)
                  .then(f)
                  .catch((e) => {}),
                { success: !0 }
              );
            } catch (e) {
              const t = e.message,
                r = new Error(`[SessionController] - cancelPremiumSubscription: ${e}`);
              return i.default.log(r), d.sendExceptionLog({ error: r }), { success: !1, reason: t };
            }
          })(e.storeService, e.sessionService, e.wsService),
        changeDeviceName: (t, r) =>
          (function (e, t, r, o) {
            if (e.isAuthenticated()) {
              const e = (0, m.secureDeviceName)(o);
              return t
                .getInstance()
                .device.changeDeviceName(r, e)
                .catch((e) => {
                  const t = new Error(`[SessionController] - changeDeviceName: ${e}`);
                  i.default.log(t), d.sendExceptionLog({ error: t });
                });
            }
            return Promise.resolve(null);
          })(e.storeService, e.sessionService, t, r),
        closeSession: () => {
          return (t = e.sessionService), i.default.log("SessionController/closeSession called"), t.close();
          var t;
        },
        lockSession: () => e.sessionService.lock(),
        deactivateDevice: (t) =>
          (function (e, t, r) {
            return e.isAuthenticated()
              ? t
                  .getInstance()
                  .device.deactivateDevice(r)
                  .catch((e) => {
                    const t = new Error(`[SessionController] - deactivateDevice: ${e}`);
                    i.default.log(t), d.sendExceptionLog({ error: t });
                  })
              : Promise.resolve(null);
          })(e.storeService, e.sessionService, t),
        generateAndSavePassword: (t) => h(e.storeService, e.sessionService, t),
        generatePassword: (t) => R(e.storeService, t),
        getAndTriggerRefreshAccountInfo: () => T(e.storeService, e.sessionService, e.wsService),
        getPasswordGenerationSettings: () => D(e.storeService),
        getCurrentUserInfo: () => (0, I.getCurrentUserInfo)(e.storeService),
        getDevicesList: () =>
          (function (e, t) {
            return e.isAuthenticated()
              ? t
                  .getInstance()
                  .device.fetchDevicesList()
                  .catch((e) => (i.default.log("Error while fetching Devices list", e), []))
              : Promise.resolve([]);
          })(e.storeService, e.sessionService),
        getInvoices: () =>
          (function (e, t) {
            return e.isAuthenticated()
              ? t
                  .getInstance()
                  .payment.fetchInvoices()
                  .catch((e) => {
                    const t = new Error(`[SessionController] - getInvoices: ${e}`);
                    return i.default.log(t), d.sendExceptionLog({ error: t }), null;
                  })
              : Promise.resolve(null);
          })(e.storeService, e.sessionService),
        getPersonalData: () => e.storeService.getPersonalData(),
        getPersonalSettings: () => {
          return (t = e.storeService), Promise.resolve(t.getPersonalSettings());
          var t;
        },
        getTemporaryToken: () =>
          (function (e, t) {
            return e.hasSessionId()
              ? t
                  .getInstance()
                  .device.fetchTemporaryToken()
                  .catch((e) => (i.default.log("Error while fetching Temporary token", e), null))
              : Promise.resolve(null);
          })(e.storeService, e.sessionService),
        getUki: () => {
          return (t = e.storeService), { uki: (0, g.ukiSelector)(t.getState()) };
          var t;
        },
        isSaveCredentialDisabled: (t) => (0, S.isSaveCredentialDisabledOnDomain)(e.storeService, t),
        signalSaveCredentialDisabled: (t) => (0, S.signalSaveCredentialDisabled)(e.storeService, e.sessionService, t),
        resumeSession: () => O(e.storeService, e.storageService, e.sessionService, e.wsService),
        saveGeneratedPassword: (t, r) => N(e.storeService, e.sessionService, t, r),
        sessionForceSync: (t = o.Trigger.Manual) => C(e.sessionService, t),
        updateCardToken: (t, r) =>
          (async function (e, t, r, o, n) {
            try {
              if (!e.isAuthenticated()) return;
              const { payment: i } = t.getInstance(),
                s = await i.updatePaymentCard(o, n);
              a.updatePaymentCardTokenResult(s),
                _(e, t, r)
                  .then(f)
                  .catch((e) => {});
            } catch (e) {
              const t = e.message,
                r = new Error(`[SessionController] - updateCardToken: ${e}`);
              i.default.log(r), d.sendExceptionLog({ error: r }), a.updatePaymentCardTokenResult({ success: !1, reason: t });
            }
          })(e.storeService, e.sessionService, e.wsService, t, r),
        validateMasterPassword: (t) => (0, A.validateMasterPassword)(e.storeService, e.masterPasswordEncryptorService, t)
      });
      const v = { devicesCount: 0, premiumStatus: { statusCode: null }, contactInfo: {}, subscriptionCode: null };
      async function T(e, t, r) {
        if (!e.isAuthenticated()) return e.dispatch((0, c.saveAccountContactInfo)(v.contactInfo)), v;
        try {
          const o = await _(e, t, r),
            n = o.accountInfo;
          return e.dispatch((0, c.saveAccountContactInfo)(n.contactInfo)), f(o), n;
        } catch (t) {
          i.default.error("Error during getRefreshedAccountInfo", t);
          const r = (0, E.premiumStatusSelector)(e.getState()),
            o = r ? { premiumStatus: r } : {};
          return { ...v, ...o };
        }
      }
      async function _(e, t, r) {
        const { device: o, user: n } = t.getInstance(),
          a = (0, u.refreshPremiumStatus)(e, r, e.getUserLogin(), (0, g.ukiSelector)(e.getState())).then(() => ({
            premiumStatus: e.getLocalSettings().premiumStatus,
            nodePremiumStatusSpaceData: (0, y.getNodePremiumStatusSpaceData)(e)
          })),
          s = o
            .fetchDevicesList()
            .then((e) => e.length)
            .catch((e) => 1),
          c = n.fetchContactInfo(),
          l = n.fetchSubscriptionCode();
        try {
          await n.fetchAccountInfo();
        } catch (e) {
          (0, i.logError)(e), d.sendExceptionLog({ error: e });
        }
        const [S, p, m, E] = await Promise.all([a, s, c, l]),
          { premiumStatus: A, nodePremiumStatusSpaceData: I } = S;
        if (!A) throw new Error("premium info should exist");
        return { accountInfo: { premiumStatus: A, devicesCount: p, contactInfo: m, subscriptionCode: E }, nodePremiumStatusSpaceData: I };
      }
      function f(e) {
        a.sendAccountInfo(e.accountInfo, e.nodePremiumStatusSpaceData);
      }
      async function C(e, t = o.Trigger.Manual) {
        await e.getInstance().user.attemptSync(t);
      }
      function O(e, t, r, o) {
        return (
          (0, p.triggerABTestingChanged)(e.getABTesting()),
          a.sendLocationInfo(e.getPlatform().location),
          e.isAuthenticated() ? T(e, r, o).then((r) => (a.triggerSessionOpened(e, t, r), !0)) : Promise.resolve(null)
        );
      }
      function h(e, t, r) {
        return l.generateAndSavePassword(e, t, r);
      }
      function D(e) {
        return l.getDefaultPasswordGenerationSettings(e.getPersonalSettings());
      }
      function R(e, t) {
        return l.generatePassword(e.getPersonalSettings(), t);
      }
      function N(e, t, r, o) {
        return l.saveGeneratedPassword(e, t, r, o);
      }
      function P(e, t) {
        return (0, s.getWebsiteInfo)(e, t);
      }
      (t.getAndTriggerRefreshAccountInfo = T),
        (t.sessionForceSync = C),
        (t.resumeSession = O),
        (t.generateAndSavePassword = h),
        (t.getPasswordGenerationSettings = D),
        (t.generatePassword = R),
        (t.saveGeneratedPassword = N),
        (t.askWebsiteInfo = P),
        (t.AutofillProtectionStatus = (0, n.Enum)("UNPROTECTED", "LOCKED", "UNLOCKED")),
        (t.refeshAccountInfo = function (e, t, r) {
          _(e, t, r)
            .then(f)
            .catch((e) => {});
        });
    },
    766833: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFreshSpaceData = t.updateCurrentSpaceWith = t.updateSpaceData = t.refreshSpaceData = void 0);
      const o = r(436738),
        n = r(958639);
      function i(e, t) {
        const r = { spaces: t };
        e.dispatch((0, o.spaceDataUpdated)(r)), (0, n.reportDataUpdate)(e);
      }
      function a(e) {
        return (e || []).map((e) => ({ teamId: e.teamId, details: e }));
      }
      (t.refreshSpaceData = function (e, t) {
        const r = a(t);
        return i(e, r), Promise.resolve(r);
      }),
        (t.updateSpaceData = i),
        (t.updateCurrentSpaceWith = function (e, t) {
          const r = e.getSpaceData().spaces.map((e) => ("accepted" === e.details.status ? t(e) : e));
          i(e, r);
        }),
        (t.getFreshSpaceData = a);
    },
    216661: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IconsCacheLoaded = t.iconsRefreshed = t.iconsUpdated = t.ICONS_CACHE_LOADED = t.ICONS_REFRESHED = t.ICONS_UPDATED = void 0),
        (t.ICONS_UPDATED = "ICONS_UPDATED"),
        (t.ICONS_REFRESHED = "ICONS_REFRESHED"),
        (t.ICONS_CACHE_LOADED = "ICONS_CACHE_LOADED"),
        (t.iconsUpdated = (e) => ({ type: t.ICONS_UPDATED, data: e })),
        (t.iconsRefreshed = (e) => ({ type: t.ICONS_REFRESHED, data: e })),
        (t.IconsCacheLoaded = (e) => ({ type: t.ICONS_CACHE_LOADED, data: e }));
    },
    319695: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.iconsFromStorage = t.iconsToStorage = void 0),
        (t.iconsToStorage = (e) => ({ ...e, domains: Array.from(e.domains.entries()) })),
        (t.iconsFromStorage = (e) => ({ ...e, domains: new Map(e.domains) }));
    },
    258174: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyIconByDomains = void 0);
      const o = r(216661),
        n = r(500053),
        i = r(246445);
      function a() {
        return { domains: new Map(), lastUpdateTimeSeconds: 0 };
      }
      (t.default = (e = a(), t) => {
        switch (t.type) {
          case o.ICONS_UPDATED:
            return { ...e, domains: s(e, t.data) };
          case o.ICONS_REFRESHED:
            return { ...e, domains: s(e, t.data), lastUpdateTimeSeconds: (0, n.getUnixTimestamp)() };
          case o.ICONS_CACHE_LOADED:
            return t.data;
          default:
            return e;
        }
      }),
        (t.getEmptyIconByDomains = a);
      const s = (e, t) =>
        t.reduce((e, t) => {
          const { domain: r, ...o } = t;
          if (!r) return e;
          const n = (0, i.computeHashMD5)(r);
          return e.get(n) || e.set(n, o), e;
        }, new Map(e.domains));
    },
    843416: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadedStoredUserABTests =
          t.refreshedUserABTests =
          t.SENT_AB_TEST_USAGE_LOG =
          t.STORED_USER_AB_TEST_LOADED =
          t.USER_AB_TESTS_UPDATED =
            void 0),
        (t.USER_AB_TESTS_UPDATED = "USER_AB_TEST_UPDATED"),
        (t.STORED_USER_AB_TEST_LOADED = "STORED_USER_AB_TEST_LOADED"),
        (t.SENT_AB_TEST_USAGE_LOG = "SENT_AB_TEST_USAGE_LOG"),
        (t.refreshedUserABTests = (e) => ({ type: t.USER_AB_TESTS_UPDATED, lastUpdateTimestamp: Date.now(), tests: e })),
        (t.loadedStoredUserABTests = (e) => ({ type: t.STORED_USER_AB_TEST_LOADED, userABTests: e }));
    },
    501678: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyTests = void 0);
      const o = r(843416);
      (t.getEmptyTests = function () {
        return { lastUpdateTimestamp: null, tests: {} };
      }),
        (t.default = (e = { lastUpdateTimestamp: null, tests: {} }, t) => {
          switch (t.type) {
            case o.USER_AB_TESTS_UPDATED:
              return { ...e, tests: t.tests, lastUpdateTimestamp: t.lastUpdateTimestamp };
            case o.STORED_USER_AB_TEST_LOADED:
              return { ...e, ...t.userABTests };
            default:
              return e;
          }
        });
    },
    862627: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userABTestVariantSelector = t.userABTestSelector = t.userABTestsSelector = void 0),
        (t.userABTestsSelector = (e) => e.userSession.abTests),
        (t.userABTestSelector = (e, r) => (0, t.userABTestsSelector)(e).tests[r]),
        (t.userABTestVariantSelector = (e, r) => {
          const o = (0, t.userABTestSelector)(e, r);
          return o ? o.variant : void 0;
        });
    },
    18862: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.saveAccountContactInfo = t.SAVE_ACCOUNT_CONTACT_INFO = void 0),
        (t.SAVE_ACCOUNT_CONTACT_INFO = "SAVE_ACCOUNT_CONTACT_INFO"),
        (t.saveAccountContactInfo = (e) => ({ type: t.SAVE_ACCOUNT_CONTACT_INFO, accountContactInfo: e }));
    },
    939727: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = r(18862);
      t.default = (e = {}, t) => (t.type === o.SAVE_ACCOUNT_CONTACT_INFO ? { ...e, ...t.accountContactInfo } : e);
    },
    43461: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.accountCreationStarted =
          t.saveAccountKeys =
          t.saveAccountSettings =
          t.ACCOUNT_CREATION_STARTED =
          t.SAVE_ACCOUNT_KEYS =
          t.SAVE_ACCOUNT_SETTINGS =
            void 0),
        (t.SAVE_ACCOUNT_SETTINGS = "SAVE_ACCOUNT_SETTINGS"),
        (t.SAVE_ACCOUNT_KEYS = "SAVE_ACCOUNT_KEYS"),
        (t.ACCOUNT_CREATION_STARTED = "ACCOUNT_CREATION_STARTED"),
        (t.saveAccountSettings = function (e) {
          return { type: t.SAVE_ACCOUNT_SETTINGS, settings: e };
        }),
        (t.saveAccountKeys = function (e) {
          return { type: t.SAVE_ACCOUNT_KEYS, accountKey: e };
        }),
        (t.accountCreationStarted = function (e) {
          return { type: t.ACCOUNT_CREATION_STARTED, isSSO: e.isSSO };
        });
    },
    812659: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyAccountCreation = void 0);
      const o = r(43461),
        n = r(895648);
      function i() {
        return {
          settings: { personalSettings: (0, n.getEmptyPersonalSettings)(), promise: null },
          accountKey: { promise: null },
          isSSO: !1
        };
      }
      (t.default = (e = i(), t) => {
        switch (t.type) {
          case o.SAVE_ACCOUNT_SETTINGS:
            return {
              ...e,
              settings: {
                ...t.settings,
                personalSettings: (0, n.getUpdatedPersonalSettings)(e.settings.personalSettings, t.settings.personalSettings)
              }
            };
          case o.SAVE_ACCOUNT_KEYS:
            return { ...e, accountKey: t.accountKey };
          case o.ACCOUNT_CREATION_STARTED:
            return { ...i(), isSSO: t.isSSO };
          default:
            return e;
        }
      }),
        (t.getEmptyAccountCreation = i);
    },
    812706: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSSOAccountCreationSelector = void 0),
        (t.isSSOAccountCreationSelector = (e) => e.userSession.accountCreation.isSSO);
    },
    259489: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.storeAccountAuthenticationType =
          t.setPasswordLeaked =
          t.saveSubscriptionCode =
          t.localDataLoaded =
          t.userAuthenticationFailed =
          t.confirmUserAuthentication =
          t.enableOtp =
          t.SET_ACCOUNT_TYPE =
          t.USER_AUTHENTICATION_FAILED =
          t.SET_PASSWORD_LEAKED =
          t.SAVE_SUBSCRIPTION_CODE =
          t.LOCAL_DATA_LOADED =
          t.CONFIRM_USER_AUTHENTICATION =
          t.ENABLE_OTP =
            void 0);
      const o = r(25576);
      (t.ENABLE_OTP = "ENABLE_OTP"),
        (t.CONFIRM_USER_AUTHENTICATION = "CONFIRM_USER_AUTHENTICATION"),
        (t.LOCAL_DATA_LOADED = "LOCAL_DATA_LOADED"),
        (t.SAVE_SUBSCRIPTION_CODE = "SAVE_SUBSCRIPTION_CODE"),
        (t.SET_PASSWORD_LEAKED = "SET_PASSWORD_LEAKED"),
        (t.USER_AUTHENTICATION_FAILED = "USER_AUTHENTICATION_FAILED"),
        (t.SET_ACCOUNT_TYPE = "SET_ACCOUNT_TYPE"),
        (t.enableOtp = (e) => ({ type: t.ENABLE_OTP, otpType: e })),
        (t.confirmUserAuthentication = () => ({ type: t.CONFIRM_USER_AUTHENTICATION, sessionStartTime: Date.now() })),
        (t.userAuthenticationFailed = () => ({ type: t.USER_AUTHENTICATION_FAILED })),
        (t.localDataLoaded = () => ({ type: t.LOCAL_DATA_LOADED, persistData: o.PersistData.PERSIST_DATA_YES })),
        (t.saveSubscriptionCode = (e) => ({ type: t.SAVE_SUBSCRIPTION_CODE, code: e })),
        (t.setPasswordLeaked = (e) => ({ type: t.SET_PASSWORD_LEAKED, isPasswordLeaked: e })),
        (t.storeAccountAuthenticationType = (e) => ({ type: t.SET_ACCOUNT_TYPE, accountAuthenticationType: e }));
    },
    586797: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyAccount = t.OtpType = void 0);
      const o = r(448313),
        n = r(643739),
        i = r(259489);
      var a;
      function s() {
        return {
          login: null,
          isAuthenticated: !1,
          sessionStartTime: null,
          persistData: null,
          otpType: a.NO_OTP,
          subscriptionCode: null,
          isPasswordLeaked: !1,
          accountAuthenticationType: "masterPassword"
        };
      }
      !(function (e) {
        (e[(e.NO_OTP = 0)] = "NO_OTP"), (e[(e.OTP_NEW_DEVICE = 1)] = "OTP_NEW_DEVICE"), (e[(e.OTP_LOGIN = 2)] = "OTP_LOGIN");
      })((a = t.OtpType || (t.OtpType = {}))),
        (t.getEmptyAccount = s),
        (t.default = (e = s(), t) => {
          switch (t.type) {
            case o.OPEN_SESSION:
              return { ...e, login: t.login };
            case n.DEVICE_REGISTERED:
            case i.LOCAL_DATA_LOADED:
              return { ...e, persistData: t.persistData };
            case i.CONFIRM_USER_AUTHENTICATION:
              return { ...e, isAuthenticated: !0, sessionStartTime: t.sessionStartTime };
            case i.USER_AUTHENTICATION_FAILED:
              return { ...e, isAuthenticated: !1, sessionStartTime: null };
            case i.ENABLE_OTP:
              return { ...e, otpType: t.otpType };
            case i.SAVE_SUBSCRIPTION_CODE:
              return { ...e, subscriptionCode: t.code };
            case i.SET_PASSWORD_LEAKED:
              return { ...e, isPasswordLeaked: t.isPasswordLeaked };
            case i.SET_ACCOUNT_TYPE:
              return { ...e, accountAuthenticationType: t.accountAuthenticationType };
            default:
              return e;
          }
        });
    },
    25421: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.accountAuthenticationTypeSelector = void 0),
        (t.accountAuthenticationTypeSelector = (e) => e.userSession.account.accountAuthenticationType);
    },
    448313: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.applyTransaction =
          t.premiumStatusUpdated =
          t.localSettingsUpdated =
          t.closeSession =
          t.openSession =
          t.saveGeneratedPassword =
          t.savePersonalDataItems =
          t.savePersonalDataItem =
          t.SAVE_PERSONAL_ITEMS =
          t.SAVE_PERSONAL_ITEM =
          t.SAVE_GENERATED_PASSWORD =
          t.PREMIUM_STATUS_UPDATED =
          t.LOCAL_SETTINGS_UPDATED =
          t.REMOVE_PERSONAL_ITEM_FROM_TRANSACTION =
          t.ADD_PERSONAL_ITEM_FROM_TRANSACTION =
          t.CLOSE_SESSION =
          t.OPEN_SESSION =
            void 0);
      const o = r(584977),
        n = r(827517);
      (t.OPEN_SESSION = "OPEN_SESSION"),
        (t.CLOSE_SESSION = "CLOSE_SESSION"),
        (t.ADD_PERSONAL_ITEM_FROM_TRANSACTION = "ADD_PERSONAL_ITEM_FROM_TRANSACTION"),
        (t.REMOVE_PERSONAL_ITEM_FROM_TRANSACTION = "REMOVE_PERSONAL_ITEM_FROM_TRANSACTION"),
        (t.LOCAL_SETTINGS_UPDATED = "LOAD_STORED_LOCAL_SETTINGS"),
        (t.PREMIUM_STATUS_UPDATED = "PREMIUM_STATUS_UPDATED"),
        (t.SAVE_GENERATED_PASSWORD = "SAVE_GENERATED_PASSWORD"),
        (t.SAVE_PERSONAL_ITEM = "SAVE_PERSONAL_ITEM"),
        (t.SAVE_PERSONAL_ITEMS = "SAVE_PERSONAL_ITEMS"),
        (t.savePersonalDataItem = function (e, r, n) {
          return { type: t.SAVE_PERSONAL_ITEM, dataType: o.default[r], dataModelObject: e, changeHistory: n };
        }),
        (t.savePersonalDataItems = function (e, r, n) {
          return { type: t.SAVE_PERSONAL_ITEMS, dataType: o.default[r], dataModelObjects: e, changeHistory: n };
        }),
        (t.saveGeneratedPassword = function (e) {
          return { type: t.SAVE_GENERATED_PASSWORD, generatedPassword: e };
        }),
        (t.openSession = (e) => ({ type: t.OPEN_SESSION, login: e })),
        (t.closeSession = () => ({ type: t.CLOSE_SESSION })),
        (t.localSettingsUpdated = (e) => ({ type: t.LOCAL_SETTINGS_UPDATED, data: Object.assign({}, e) })),
        (t.premiumStatusUpdated = (e) => ({ type: t.PREMIUM_STATUS_UPDATED, premiumStatus: e })),
        (t.applyTransaction = async (e) => {
          let r;
          return (
            (r =
              "SETTINGS" === e.type
                ? n.PersonalSettingsActionType.EditFromTransaction
                : "BACKUP_REMOVE" === e.action
                ? t.REMOVE_PERSONAL_ITEM_FROM_TRANSACTION
                : t.ADD_PERSONAL_ITEM_FROM_TRANSACTION),
            "BACKUP_EDIT" === e.action && e.content && (e.content.LastBackupTime = Math.floor(e.backupDate / 1e3)),
            { type: r, itemId: e.identifier, content: e.content }
          );
        });
    },
    342282: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetAuthTicketInfo = t.updateAuthTicketInfo = void 0);
      const o = r(504190);
      (t.updateAuthTicketInfo = (e) => ({ type: o.ADD_AUTH_TICKET_DATA, data: e })),
        (t.resetAuthTicketInfo = () => ({ type: o.RESET_AUTH_TICKET_DATA }));
    },
    778663: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyAuthTicketInfo = void 0);
      const o = r(504190);
      (t.getEmptyAuthTicketInfo = () => ({ login: null, date: 0, authTicket: null })),
        (t.default = (e = (0, t.getEmptyAuthTicketInfo)(), r) => {
          switch (r.type) {
            case o.ADD_AUTH_TICKET_DATA:
              return { ...e, ...r.data };
            case o.RESET_AUTH_TICKET_DATA:
              return { ...e, ...(0, t.getEmptyAuthTicketInfo)() };
            default:
              return e;
          }
        });
    },
    504190: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RESET_AUTH_TICKET_DATA = t.ADD_AUTH_TICKET_DATA = void 0),
        (t.ADD_AUTH_TICKET_DATA = "ADD_AUTH_TICKET_DATA"),
        (t.RESET_AUTH_TICKET_DATA = "RESET_AUTH_TICKET_DATA");
    },
    528417: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.blacklistedUserSessionKeys = void 0),
        (t.blacklistedUserSessionKeys = ["iconsCache", "personalData", "teamAdminData", "sharingSync", "sharingData"]);
    },
    216194: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.changeMPDone = t.changeMPStart = t.SET_CHANGE_MP_DONE = t.SET_CHANGE_MP_START = void 0),
        (t.SET_CHANGE_MP_START = "SET_CHANGE_MP_START"),
        (t.SET_CHANGE_MP_DONE = "SET_CHANGE_MP_DONE"),
        (t.changeMPStart = () => ({ type: t.SET_CHANGE_MP_START })),
        (t.changeMPDone = () => ({ type: t.SET_CHANGE_MP_DONE }));
    },
    966403: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyChangeMPData = void 0);
      const o = r(216194);
      (t.getEmptyChangeMPData = function () {
        return { changeMPinProgress: !1 };
      }),
        (t.default = (e = { changeMPinProgress: !1 }, t) => {
          switch (t.type) {
            case o.SET_CHANGE_MP_START:
              return { ...e, changeMPinProgress: !0 };
            case o.SET_CHANGE_MP_DONE:
              return { ...e, changeMPinProgress: !1 };
            default:
              return e;
          }
        });
    },
    866417: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.credentialOTPUpdatedAction = t.CREDENTIAL_OTP_UPDATED = void 0),
        (t.CREDENTIAL_OTP_UPDATED = "CREDENTIAL_OTP_UPDATED"),
        (t.credentialOTPUpdatedAction = (e, r) => ({ type: t.CREDENTIAL_OTP_UPDATED, credentialId: e, otp: r }));
    },
    411406: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialOTPUpdatedAction = t.credentialOTPs = void 0);
      var o = r(927547);
      Object.defineProperty(t, "credentialOTPs", {
        enumerable: !0,
        get: function () {
          return o.credentialOTPs;
        }
      });
      var n = r(866417);
      Object.defineProperty(t, "credentialOTPUpdatedAction", {
        enumerable: !0,
        get: function () {
          return n.credentialOTPUpdatedAction;
        }
      });
    },
    927547: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.credentialOTPs = void 0),
        (t.credentialOTPs = function (e = {}, t) {
          return "CREDENTIAL_OTP_UPDATED" === t.type ? { ...e, [t.credentialId]: t.otp } : e;
        });
    },
    567331: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsDedupViewUpdated = void 0);
      const o = r(228142);
      t.credentialsDedupViewUpdated = (e) => ({ type: o.CREDENTIAL_DEDUP_VIEW_UPDATED, credentialsDedupView: e });
    },
    81200: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.credentialsDedupViewReducer = t.getDefaultCredentialsDedupView = void 0);
      const o = r(228142);
      (t.getDefaultCredentialsDedupView = function () {
        return { credentialsDedupView: !1 };
      }),
        (t.credentialsDedupViewReducer = function (e = { credentialsDedupView: !1 }, t) {
          return t.type === o.CREDENTIAL_DEDUP_VIEW_UPDATED ? { ...e, ...t.credentialsDedupView } : e;
        });
    },
    228142: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CREDENTIAL_DEDUP_VIEW_UPDATED = void 0),
        (t.CREDENTIAL_DEDUP_VIEW_UPDATED = "CREDENTIAL_DEDUP_VIEW_UPDATED");
    },
    219478: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.teamDirectorySyncNotInProgress =
          t.teamDirectorySyncInProgress =
          t.TEAM_DIRECTORY_SYNC_NOT_IN_PROGRESS =
          t.TEAM_DIRECTORY_SYNC_IN_PROGRESS =
            void 0),
        (t.TEAM_DIRECTORY_SYNC_IN_PROGRESS = "TEAM_DIRECTORY_SYNC_IN_PROGRESS"),
        (t.TEAM_DIRECTORY_SYNC_NOT_IN_PROGRESS = "TEAM_DIRECTORY_SYNC_NOT_IN_PROGRESS"),
        (t.teamDirectorySyncInProgress = (e) => ({ type: t.TEAM_DIRECTORY_SYNC_IN_PROGRESS, teamId: e })),
        (t.teamDirectorySyncNotInProgress = (e) => ({ type: t.TEAM_DIRECTORY_SYNC_NOT_IN_PROGRESS, teamId: e }));
    },
    148005: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isTeamDirectorySyncInProgress = t.getEmptyState = void 0);
      const o = r(219478);
      (t.getEmptyState = function () {
        return { syncsInProgress: {} };
      }),
        (t.isTeamDirectorySyncInProgress = function (e, t) {
          return e.syncsInProgress[t];
        }),
        (t.default = (e = { syncsInProgress: {} }, t) => {
          switch (t.type) {
            case o.TEAM_DIRECTORY_SYNC_IN_PROGRESS:
              const { teamId: r } = t;
              return { ...e, syncsInProgress: { ...e.syncsInProgress, [r]: !0 } };
            case o.TEAM_DIRECTORY_SYNC_NOT_IN_PROGRESS:
              const { teamId: n } = t;
              return { ...e, syncsInProgress: { ...e.syncsInProgress, [n]: !1 } };
            default:
              return e;
          }
        });
    },
    585845: (e, t) => {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deleteFileMetaAction = t.updateFileContentAction = t.updateFileMetaAction = t.FileActionsType = void 0),
        (function (e) {
          (e.UpdateFileMeta = "UPDATE_FILE_META"), (e.UpdateFileContent = "UPDATE_FILE_CONTENT"), (e.DeleteFileMeta = "DELETE_FILE_META");
        })((r = t.FileActionsType || (t.FileActionsType = {}))),
        (t.updateFileMetaAction = (e) => ({ type: r.UpdateFileMeta, filesMeta: e })),
        (t.updateFileContentAction = (e) => ({ type: r.UpdateFileContent, filesContent: e })),
        (t.deleteFileMetaAction = (e) => ({ type: r.DeleteFileMeta, fileNames: e }));
    },
    375417: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.remoteFileReducer = t.defaultRemoteFileState = void 0);
      const o = r(585845);
      function n(e, t) {
        const r = { ...e };
        for (const e of t) e in r && delete r[e];
        return r;
      }
      (t.defaultRemoteFileState = () => ({ fileMetaData: {}, fileContentState: {} })),
        (t.remoteFileReducer = (e = (0, t.defaultRemoteFileState)(), r) => {
          switch (r?.type) {
            case o.FileActionsType.UpdateFileMeta:
              return ((e, t) => ({ ...e, fileMetaData: { ...e.fileMetaData, ...t.filesMeta } }))(e, r);
            case o.FileActionsType.UpdateFileContent:
              return ((e, t) => ({ ...e, fileContentState: { ...e.fileContentState, ...t.filesContent } }))(e, r);
            case o.FileActionsType.DeleteFileMeta:
              return ((e, t) => ({ ...e, fileMetaData: n(e.fileMetaData, t.fileNames) }))(e, r);
          }
          return e;
        });
    },
    606093: (e, t) => {
      function r(e) {
        return "boolean" == typeof e ? e : "string" == typeof e ? "true" === e.toLowerCase() || "yes" === e.toLowerCase() : Boolean(e);
      }
      function o(e, t) {
        return "boolean" === t ? (e ? "true" : "false") : "yes-no" === t ? (e ? "YES" : "NO") : null;
      }
      function n(e) {
        return "object" == typeof e ? e : JSON.parse(e);
      }
      function i(e) {
        return JSON.stringify(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fixProperties = t.fixPropertiesTypes = t.ObjectToJson = t.jsonToObject = t.booleanToString = t.stringToBoolean = void 0),
        (t.stringToBoolean = r),
        (t.booleanToString = o),
        (t.jsonToObject = n),
        (t.ObjectToJson = i),
        (t.fixPropertiesTypes = function (e, t, o, i, a) {
          const s = {};
          return (
            e
              .filter((e) => !!a[e])
              .forEach((e) => {
                s[e] = r(a[e]);
              }),
            t
              .filter((e) => !!a[e])
              .forEach((e) => {
                s[e] = Number(a[e]);
              }),
            o
              .filter((e) => !!a[e])
              .forEach((e) => {
                s[e] = n(a[e]);
              }),
            i
              .filter((e) => a.hasOwnProperty(e))
              .forEach((e) => {
                const t = a[e];
                s[e] = null === t ? "" : String(t);
              }),
            Object.assign({}, a, s)
          );
        }),
        (t.fixProperties = {
          fromStore: function (e, t, r, n) {
            const a = {};
            return (
              Object.keys(e)
                .filter((e) => !!n[e])
                .forEach((t) => {
                  a[t] = o(n[t], e[t]);
                }),
              Object.keys(t)
                .filter((e) => !!n[e])
                .forEach((e) => {
                  a[e] = n[e] && n[e].toString();
                }),
              Object.keys(r)
                .filter((e) => !!n[e])
                .forEach((e) => {
                  a[e] = i(n[e]);
                }),
              Object.assign({}, n, a)
            );
          },
          fromTransaction: function (e, t, o, i) {
            const a = {};
            return (
              Object.keys(e)
                .filter((e) => !!i[e])
                .forEach((e) => {
                  a[e] = r(i[e]);
                }),
              Object.keys(t)
                .filter((e) => !!i[e])
                .forEach((e) => {
                  a[e] = Number(i[e]);
                }),
              Object.keys(o)
                .filter((e) => !!i[e])
                .forEach((e) => {
                  a[e] = n(i[e]);
                }),
              Object.assign({}, i, a)
            );
          }
        });
    },
    976089: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.credentialSearchOrderUpdated =
          t.premiumChurningDismissDateUpdated =
          t.webOnboardingModeUpdated =
          t.webOnboardingModeReset =
          t.localSettingsSubscriptionInformationStatusUpdated =
          t.localSettingsNodePremiumStatusUpdated =
          t.localSettingsPremiumStatusUpdated =
          t.registerDeviceName =
          t.registerLastSync =
          t.loadStoredLocalSettings =
          t.CREDENTIAL_SEARCH_ORDER_UPDATED =
          t.PREMIUM_CHURNING_DISMISS_DATE_UPDATED =
          t.WEB_ONBOARDING_MODE_RESET =
          t.WEB_ONBOARDING_MODE_UPDATED =
          t.SUBSCRIPTION_INFORMATION_UPDATED =
          t.NODE_PREMIUM_STATUS_UPDATED =
          t.PREMIUM_STATUS_UPDATED =
          t.REGISTER_DEVICE_NAME =
          t.REGISTER_LAST_SYNC =
          t.LOAD_STORED_LOCAL_SETTINGS =
            void 0),
        (t.LOAD_STORED_LOCAL_SETTINGS = "LOCAL_SETTINGS/LOAD_STORED_LOCAL_SETTINGS"),
        (t.REGISTER_LAST_SYNC = "LOCAL_SETTINGS/REGISTER_LAST_SYNC"),
        (t.REGISTER_DEVICE_NAME = "LOCAL_SETTINGS/REGISTER_DEVICE_NAME"),
        (t.PREMIUM_STATUS_UPDATED = "LOCAL_SETTINGS/PREMIUM_STATUS_UPDATED"),
        (t.NODE_PREMIUM_STATUS_UPDATED = "LOCAL_SETTINGS/NODE_PREMIUM_STATUS_UPDATED"),
        (t.SUBSCRIPTION_INFORMATION_UPDATED = "LOCAL_SETTINGS/SUBSCRIPTION_INFORMATION_UPDATED"),
        (t.WEB_ONBOARDING_MODE_UPDATED = "LOCAL_SETTINGS/WEB_ONBOARDING_MODE_UPDATED"),
        (t.WEB_ONBOARDING_MODE_RESET = "LOCAL_SETTINGS/WEB_ONBOARDING_MODE_RESET"),
        (t.PREMIUM_CHURNING_DISMISS_DATE_UPDATED = "PREMIUM_CHURNING_DISMISS_DATE_UPDATED"),
        (t.CREDENTIAL_SEARCH_ORDER_UPDATED = "CREDENTIAL_SEARCH_ORDER_UPDATED"),
        (t.loadStoredLocalSettings = (e) => ({ type: t.LOAD_STORED_LOCAL_SETTINGS, data: Object.assign({}, e) })),
        (t.registerLastSync = (e) => ({ type: t.REGISTER_LAST_SYNC, lastSync: e })),
        (t.registerDeviceName = (e) => ({ type: t.REGISTER_DEVICE_NAME, deviceName: e })),
        (t.localSettingsPremiumStatusUpdated = (e) => ({ type: t.PREMIUM_STATUS_UPDATED, premiumStatus: e })),
        (t.localSettingsNodePremiumStatusUpdated = (e) => ({ type: t.NODE_PREMIUM_STATUS_UPDATED, nodePremiumStatus: e })),
        (t.localSettingsSubscriptionInformationStatusUpdated = (e) => ({
          type: t.SUBSCRIPTION_INFORMATION_UPDATED,
          subscriptionInformation: e
        })),
        (t.webOnboardingModeReset = () => ({ type: t.WEB_ONBOARDING_MODE_RESET })),
        (t.webOnboardingModeUpdated = (e) => ({ type: t.WEB_ONBOARDING_MODE_UPDATED, webOnboardingMode: e })),
        (t.premiumChurningDismissDateUpdated = (e) => ({ type: t.PREMIUM_CHURNING_DISMISS_DATE_UPDATED, premiumChurningDismissDate: e })),
        (t.credentialSearchOrderUpdated = (e) => ({ type: t.CREDENTIAL_SEARCH_ORDER_UPDATED, credentialSearchOrder: e }));
    },
    673472: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptyLocalSettings = t.getEmptyOnboardingMode = t.getEmptyLoginStepInfo = void 0);
      const o = r(401067),
        n = r(453576),
        i = r(235924),
        a = r(976089),
        s = r(765210),
        c = r(643739);
      t.getEmptyLoginStepInfo = function () {
        return { step: null, login: "", validated: !1 };
      };
      const d = (e, t) => ([n.LoginStep.Password, n.LoginStep.OTPToken].includes(t) ? t : e.step),
        l = (e, t) => (t === n.LoginStep.OTPToken ? Boolean(e.login) : ![n.LoginStep.OTP1, n.LoginStep.OTP2].includes(t) && e.validated),
        u = (e, t) => Object.entries(t).every(([t, r]) => e?.[t] === r);
      function S() {
        return {
          uki: null,
          lastSync: 0,
          premiumStatus: null,
          nodePremiumStatus: null,
          subscriptionInformation: null,
          deviceName: null,
          webOnboardingMode: (0, t.getEmptyOnboardingMode)(),
          premiumChurningDismissDate: null,
          credentialSearchOrder: null,
          userMessages: [],
          loginStepInfo: { step: null, login: "", validated: !1 }
        };
      }
      (t.default = (e = S(), r) => {
        switch (r.type) {
          case a.LOAD_STORED_LOCAL_SETTINGS: {
            const t = S();
            return {
              ...t,
              ...e,
              ...r.data,
              webOnboardingMode: {
                ...t.webOnboardingMode,
                ...e.webOnboardingMode,
                ...r.data.webOnboardingMode,
                completedSteps: {
                  ...t.webOnboardingMode.completedSteps,
                  ...e.webOnboardingMode.completedSteps,
                  ...r.data.webOnboardingMode.completedSteps
                }
              }
            };
          }
          case c.DEVICE_REGISTERED:
            return "uki" === r.registrationType.type ? { ...e, uki: r.registrationType.uki } : e;
          case a.REGISTER_LAST_SYNC:
            return Object.assign({}, e, { lastSync: r.lastSync });
          case a.REGISTER_DEVICE_NAME:
            return Object.assign({}, e, { deviceName: r.deviceName });
          case a.PREMIUM_STATUS_UPDATED:
            return Object.assign({}, e, { premiumStatus: r.premiumStatus });
          case a.NODE_PREMIUM_STATUS_UPDATED:
            return Object.assign({}, e, { nodePremiumStatus: r.nodePremiumStatus });
          case a.SUBSCRIPTION_INFORMATION_UPDATED:
            return Object.assign({}, e, { subscriptionInformation: r.subscriptionInformation });
          case a.WEB_ONBOARDING_MODE_UPDATED: {
            const t = (0, o.mergeDeepRight)(S(), e);
            return (0, o.mergeDeepRight)(t, { webOnboardingMode: r.webOnboardingMode });
          }
          case a.WEB_ONBOARDING_MODE_RESET:
            return Object.assign({}, e, { webOnboardingMode: (0, t.getEmptyOnboardingMode)() });
          case a.PREMIUM_CHURNING_DISMISS_DATE_UPDATED:
            return Object.assign({}, e, { premiumChurningDismissDate: r.premiumChurningDismissDate });
          case a.CREDENTIAL_SEARCH_ORDER_UPDATED:
            return Object.assign({}, e, { credentialSearchOrder: r.credentialSearchOrder });
          case s.USER_MESSAGE_ADDED:
            return Object.assign({}, e, { userMessages: [...e.userMessages, r.userMessage] });
          case s.USER_MESSAGES_DISMISSED:
            return Object.assign({}, e, {
              userMessages: e.userMessages.some((e) => u(e, r.predicate))
                ? e.userMessages.map((e) => (u(e, r.predicate) ? { ...e, dismissedAt: Date.now() } : e))
                : [...e.userMessages, { ...r.predicate, dismissedAt: Date.now() }]
            });
          case i.UPDATE_LOGIN_STEP_INFO_LOGIN:
            return Object.assign({}, e, { loginStepInfo: { ...e.loginStepInfo, login: r.login } });
          case i.UPDATE_LOGIN_STEP_INFO_STEP:
            return Object.assign({}, e, {
              loginStepInfo: { ...e.loginStepInfo, step: d(e.loginStepInfo, r.step), validated: l(e.loginStepInfo, r.step) }
            });
          case i.RESET_LOGIN_STEP_INFO:
            return Object.assign({}, e, { loginStepInfo: { step: null, login: "", validated: !1 } });
          default:
            return e;
        }
      }),
        (t.getEmptyOnboardingMode = () => ({
          flowCredentialInApp: !1,
          flowLoginCredentialOnWeb: !1,
          flowLoginCredentialOnWebSite: null,
          flowSaveCredentialOnWeb: !1,
          flowImportPasswords: !1,
          flowAddMobileOnWeb: !1,
          flowTryAutofillOnWeb: !1,
          leelooStep: null,
          popoverStep: null,
          completedSteps: {
            saveCredentialInApp: !1,
            loginCredentialOnWeb: !1,
            saveCredentialOnWeb: !1,
            importPasswordsShown: !1,
            onboardingHubShown: !1,
            addMobileOnWeb: !1,
            tryAutofillOnWeb: !1
          }
        })),
        (t.getEmptyLocalSettings = S);
    },
    673299: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deviceNameSelector = void 0),
        (t.deviceNameSelector = (e) => e.userSession.localSettings.deviceName);
    },
    434287: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadNotificationsStatus =
          t.markAsInteracted =
          t.markAsUnseen =
          t.markAsSeen =
          t.LOAD_NOTIFICATIONS_STATE =
          t.MARK_AS_INTERACTED =
          t.MARK_AS_UNSEEN =
          t.MARK_AS_SEEN =
            void 0),
        (t.MARK_AS_SEEN = "MarkAsSeen"),
        (t.MARK_AS_UNSEEN = "MarkAsUnseen"),
        (t.MARK_AS_INTERACTED = "MarkAsInteracted"),
        (t.LOAD_NOTIFICATIONS_STATE = "LoadNotificationsState"),
        (t.markAsSeen = (e) => ({ type: t.MARK_AS_SEEN, notification: e })),
        (t.markAsUnseen = (e) => ({ type: t.MARK_AS_UNSEEN, notification: e })),
        (t.markAsInteracted = (e) => ({ type: t.MARK_AS_INTERACTED, notification: e })),
        (t.loadNotificationsStatus = (e) => ({ type: t.LOAD_NOTIFICATIONS_STATE, state: e }));
    },
    798496: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyNotificationsState = void 0);
      const o = r(453576),
        n = r(434287),
        i = {
          paymentFailureChurned: o.NotificationStatus.Unseen,
          paymentFailureChurning: o.NotificationStatus.Unseen,
          switchToMlAnalysisEngine: o.NotificationStatus.Unseen,
          dWMb2bAutoEnrollTooltip: o.NotificationStatus.Unseen,
          vpnProviderIsNowHotspot: o.NotificationStatus.Unseen,
          vpnHostpotshieldInstalled: o.NotificationStatus.Unseen,
          popupIncomingTabPayments: o.NotificationStatus.Unseen,
          popupIncomingTabPersonalInfo: o.NotificationStatus.Unseen,
          popupIncomingTabIDs: o.NotificationStatus.Unseen,
          popupIncomingTabSecureNotes: o.NotificationStatus.Unseen,
          newAccountMenuTooltip: o.NotificationStatus.Unseen,
          tacGetTheExtensionBanner: o.NotificationStatus.Unseen,
          tacEnableAccountRecoveryBanner: o.NotificationStatus.Unseen,
          tacOnlyOneAdminBanner: o.NotificationStatus.Unseen,
          tacDarkWebInsightsNewBadge: o.NotificationStatus.Unseen,
          passwordHistoryBanner: o.NotificationStatus.Unseen,
          sharingCenterDisabledBanner: o.NotificationStatus.Unseen,
          accountRecoveryAvailableAdminTooltip: o.NotificationStatus.Unseen,
          accountRecoveryAvailableEmployeeDialog: o.NotificationStatus.Unseen,
          activateInviteLink: o.NotificationStatus.Unseen,
          tacGetStartedOpenVault: o.NotificationStatus.Unseen,
          tacGetStartedDismissedPage: o.NotificationStatus.Unseen,
          tacGetStartedSeenPage: o.NotificationStatus.Unseen
        };
      function a() {
        return i;
      }
      (t.getEmptyNotificationsState = a),
        (t.default = (e = a(), t) => {
          switch (t.type) {
            case n.MARK_AS_INTERACTED:
              return { ...e, [t.notification]: o.NotificationStatus.Interacted };
            case n.MARK_AS_SEEN:
              return { ...e, [t.notification]: o.NotificationStatus.Seen };
            case n.MARK_AS_UNSEEN:
              return { ...e, [t.notification]: o.NotificationStatus.Unseen };
            case n.LOAD_NOTIFICATIONS_STATE:
              return { ...e, ...t.state };
            default:
              return e;
          }
        });
    },
    926972: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.notificationsStatus$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(356857);
      t.notificationsStatus$ = function () {
        const e = i.notificationsStatusSelector;
        return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
      };
    },
    356857: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notificationsStatusSelector = void 0),
        (t.notificationsStatusSelector = (e) => e.userSession.notificationsStatus);
    },
    95944: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.receivedInvoiceList = t.RECEIVED_INVOICE_LIST = void 0),
        (t.RECEIVED_INVOICE_LIST = "RECEIVED_USER_LIST"),
        (t.receivedInvoiceList = (e) => ({ type: t.RECEIVED_INVOICE_LIST, invoicesList: e }));
    },
    570325: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyPaymentsState = void 0);
      const o = r(95944);
      (t.getEmptyPaymentsState = function () {
        return { invoicesList: [] };
      }),
        (t.default = (e = { invoicesList: [] }, t) => (t.type === o.RECEIVED_INVOICE_LIST ? { ...e, invoicesList: t.invoicesList } : e));
    },
    130467: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewedQueriedInvoicesSelector =
          t.searchGetters =
          t.invoiceMappersSelector =
          t.invoiceListYearsSelector =
          t.allInvoicesLengthSelector =
          t.allInvoicesSelector =
            void 0);
      const o = r(400251),
        n = r(324589),
        i = r(64455),
        a = r(382234),
        s = r(498584);
      (t.allInvoicesSelector = (e) => e.userSession.paymentsState.invoicesList),
        (t.allInvoicesLengthSelector = (e) => e.userSession.paymentsState.invoicesList.length),
        (t.invoiceListYearsSelector = (e) => {
          const t = e.userSession.paymentsState.invoicesList;
          if (t.length) {
            const e = t.map((e) => (0, o.fromUnixTime)(e.startDate).getFullYear().toString());
            return [...new Set(e)];
          }
          return [];
        }),
        (t.invoiceMappersSelector = (e) => (0, s.getInvoiceMappers)()),
        (t.searchGetters = [
          (0, a.stringProp)("amountPaid"),
          (0, a.stringProp)("planName"),
          (0, a.stringProp)("startDate"),
          (0, a.stringProp)("invoiceId"),
          (0, a.stringProp)("startYear")
        ]);
      const c = (0, i.match)(t.searchGetters),
        d = (0, n.getQuerySelector)(t.allInvoicesSelector, () => c, t.invoiceMappersSelector);
      t.viewedQueriedInvoicesSelector = (e, t) => d(e, t);
    },
    645291: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateBreachesUpdaterStatus =
          t.teamSpaceContentControlApplied =
          t.storeChangesToUpload =
          t.breachesUpdated =
          t.updateLastBackupTime =
          t.removePersonalItem =
          t.saveNoteCategory =
          t.saveGeneratedPassword =
          t.savePaymentCard =
          t.unscheduleRemainingChanges =
          t.clearUploadedChanges =
          t.scheduleChangesForSync =
          t.loadStoredPersonalData =
          t.UNSCHEDULE_REMAINING_CHANGES =
          t.CLEAR_UPLOADED_CHANGES =
          t.SCHEDULE_CHANGES_FOR_SYNC =
          t.UPDATE_BREACHES_UPDATER_STATUS =
          t.TEAMSPACE_CONTENT_CONTROLLED =
          t.STORE_CHANGES_TO_UPLOAD =
          t.BREACHES_UPDATED =
          t.UPDATE_LAST_BACKUP_TIME =
          t.REMOVE_PERSONAL_ITEM =
          t.SAVE_PAYMENT_CARD =
          t.SAVE_NOTE_CATEGORY =
          t.SAVE_PERSONAL_ITEMS =
          t.SAVE_PERSONAL_ITEM =
          t.SAVE_GENERATED_PASSWORD =
          t.LOAD_STORED_PERSONAL_DATA =
            void 0),
        (t.LOAD_STORED_PERSONAL_DATA = "PERSONAL_DATA/LOAD_STORED_PERSONAL_DATA"),
        (t.SAVE_GENERATED_PASSWORD = "PERSONAL_DATA/SAVE_GENERATED_PASSWORD"),
        (t.SAVE_PERSONAL_ITEM = "PERSONAL_DATA/SAVE_PERSONAL_ITEM"),
        (t.SAVE_PERSONAL_ITEMS = "PERSONAL_DATA/SAVE_PERSONAL_ITEMS"),
        (t.SAVE_NOTE_CATEGORY = "SAVE_NOTE_CATEGORY"),
        (t.SAVE_PAYMENT_CARD = "SAVE_PAYMENT_CARD"),
        (t.REMOVE_PERSONAL_ITEM = "REMOVE_PERSONAL_ITEM"),
        (t.UPDATE_LAST_BACKUP_TIME = "UPDATE_LAST_BACKUP_TIME"),
        (t.BREACHES_UPDATED = "BREACHES_UPDATED"),
        (t.STORE_CHANGES_TO_UPLOAD = "STORE_CHANGES_TO_UPLOAD"),
        (t.TEAMSPACE_CONTENT_CONTROLLED = "TEAMSPACE_CONTENT_CONTROLLED"),
        (t.UPDATE_BREACHES_UPDATER_STATUS = "UPDATE_BREACHES_UPDATER_STATUS"),
        (t.SCHEDULE_CHANGES_FOR_SYNC = "SCHEDULE_CHANGES_FOR_SYNC"),
        (t.CLEAR_UPLOADED_CHANGES = "CLEAR_UPLOADED_CHANGES"),
        (t.UNSCHEDULE_REMAINING_CHANGES = "UNSCHEDULE_REMAINING_CHANGES"),
        (t.loadStoredPersonalData = (e) => ({ type: t.LOAD_STORED_PERSONAL_DATA, data: Object.assign({}, e) })),
        (t.scheduleChangesForSync = () => ({ type: t.SCHEDULE_CHANGES_FOR_SYNC })),
        (t.clearUploadedChanges = (e) => ({ type: t.CLEAR_UPLOADED_CHANGES, uploadedItemIds: e })),
        (t.unscheduleRemainingChanges = () => ({ type: t.UNSCHEDULE_REMAINING_CHANGES })),
        (t.savePaymentCard = function (e) {
          return { type: t.SAVE_PAYMENT_CARD, paymentCard: e };
        }),
        (t.saveGeneratedPassword = function (e) {
          return { type: t.SAVE_GENERATED_PASSWORD, generatedPassword: e };
        }),
        (t.saveNoteCategory = function (e) {
          return { type: t.SAVE_NOTE_CATEGORY, noteCategory: e };
        }),
        (t.removePersonalItem = function (e, r, o) {
          return { type: t.REMOVE_PERSONAL_ITEM, kwType: e, itemId: r, changeHistory: o };
        }),
        (t.updateLastBackupTime = function (e, r) {
          return { type: t.UPDATE_LAST_BACKUP_TIME, transactions: e, backupTimeSec: r };
        }),
        (t.breachesUpdated = function (e, r, o) {
          return { type: t.BREACHES_UPDATED, changes: e, revision: r, dataLeaksRefreshDate: o };
        }),
        (t.storeChangesToUpload = function (e) {
          return { type: t.STORE_CHANGES_TO_UPLOAD, changesToUpload: e };
        }),
        (t.teamSpaceContentControlApplied = function (e, r, o) {
          return { type: t.TEAMSPACE_CONTENT_CONTROLLED, updates: e, deletions: r, changeHistories: o };
        }),
        (t.updateBreachesUpdaterStatus = (e) => ({ type: t.UPDATE_BREACHES_UPDATER_STATUS, breachesUpdaterStatus: e }));
    },
    584977: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PERSONAL_DATA_COLLECTIONS_KEYS = t.DATAMODELOBJECT_TYPE_TO_STORE_KEY = void 0),
        (t.DATAMODELOBJECT_TYPE_TO_STORE_KEY = {
          KWAddress: "addresses",
          KWAuthCategory: "credentialCategories",
          KWAuthentifiant: "credentials",
          KWBankStatement: "bankAccounts",
          KWCollection: "collections",
          KWCompany: "companies",
          KWDataChangeHistory: "changeHistories",
          KWDriverLicence: "driverLicenses",
          KWEmail: "emails",
          KWFiscalStatement: "fiscalIds",
          KWGeneratedPassword: "generatedPasswords",
          KWIDCard: "idCards",
          KWIdentity: "identities",
          KWPasskey: "passkeys",
          KWPassport: "passports",
          KWPaymentMean_creditCard: "paymentCards",
          KWPaymentMean_paypal: "paypalAccounts",
          KWPersonalWebsite: "personalWebsites",
          KWPhone: "phones",
          KWSecureNote: "notes",
          KWSecureNoteCategory: "noteCategories",
          KWSecurityBreach: "securityBreaches",
          KWSocialSecurityStatement: "socialSecurityIds",
          KWSecureFileInfo: "secureFileInfo",
          KWSecret: "secrets"
        }),
        (t.default = t.DATAMODELOBJECT_TYPE_TO_STORE_KEY),
        (t.PERSONAL_DATA_COLLECTIONS_KEYS = Object.keys(t.DATAMODELOBJECT_TYPE_TO_STORE_KEY).map(
          (e) => t.DATAMODELOBJECT_TYPE_TO_STORE_KEY[e]
        ));
    },
    501347: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.countPersonalDataItems =
          t.getEmptyBreachesMetadata =
          t.getLegacyEmptyBreaches =
          t.saveChangesToUpload =
          t.breachesUpdated =
          t.updateCredential =
          t.updateCredentials =
          t.updateLastBackupTime =
          t.saveObjects =
          t.saveNoteCategory =
          t.saveGeneratedPassword =
          t.savePersonalDataItems =
          t.savePersonalDataItem =
          t.savePaymentCard =
          t.removePersonalItem =
          t.teamSpaceContentControlApplied =
          t.savePersonalSettings =
          t.removePersonalItemFromTransaction =
          t.addPersonalItemFromTransaction =
          t.getEmptyPersonalDataState =
            void 0);
      const o = r(401067),
        n = r(453576),
        i = r(584977),
        a = r(653628),
        s = r(645291),
        c = r(448313),
        d = r(277163),
        l = r(827517),
        u = r(751064),
        S = r(462210);
      function p() {
        return {
          addresses: [],
          bankAccounts: [],
          changesToUpload: [],
          changeHistories: [],
          collections: [],
          companies: [],
          credentialCategories: [],
          credentials: [],
          driverLicenses: [],
          emails: [],
          fiscalIds: [],
          generatedPasswords: [],
          idCards: [],
          identities: [],
          noteCategories: [],
          notes: [],
          passkeys: [],
          passports: [],
          paymentCards: [],
          paypalAccounts: [],
          personalWebsites: [],
          phones: [],
          secrets: [],
          securityBreaches: [],
          securityBreachesMetadata: (0, t.getEmptyBreachesMetadata)(),
          socialSecurityIds: [],
          breachesUpdaterStatus: n.BreachesUpdaterStatus.UNKNOWN,
          secureFileInfo: []
        };
      }
      (t.default = (e = p(), t, r) => {
        switch (t.type) {
          case s.LOAD_STORED_PERSONAL_DATA:
            return { ...e, ...(0, a.fixPersistedPersonalData)(t.data) };
          case c.ADD_PERSONAL_ITEM_FROM_TRANSACTION:
            return g(e, t);
          case c.REMOVE_PERSONAL_ITEM_FROM_TRANSACTION:
            return E(e, t);
          case s.REMOVE_PERSONAL_ITEM:
            return _(e, t);
          case s.SAVE_PAYMENT_CARD:
            return f(e, t);
          case s.SAVE_PERSONAL_ITEM:
            return C(e, t, r);
          case s.SAVE_PERSONAL_ITEMS:
            return O(e, t, r);
          case s.SAVE_GENERATED_PASSWORD:
            return h(e, t, r);
          case s.SAVE_NOTE_CATEGORY:
            return D(e, t);
          case s.CLEAR_UPLOADED_CHANGES:
            return I(e, t);
          case s.SCHEDULE_CHANGES_FOR_SYNC:
            return A(e, t);
          case s.UNSCHEDULE_REMAINING_CHANGES:
            return y(e, t);
          case l.PersonalSettingsActionType.Edit:
            return v(e);
          case s.UPDATE_LAST_BACKUP_TIME:
            return R(e, t);
          case s.BREACHES_UPDATED:
            return P(e, t);
          case s.STORE_CHANGES_TO_UPLOAD:
            return L(e, t);
          case s.TEAMSPACE_CONTENT_CONTROLLED:
            return T(e, t);
          case s.UPDATE_BREACHES_UPDATER_STATUS:
            return { ...e, breachesUpdaterStatus: t.breachesUpdaterStatus };
          default:
            return e;
        }
      }),
        (t.getEmptyPersonalDataState = p);
      const m = (e, t) => !e || !t || !i.default.hasOwnProperty(t.kwType);
      function g(e, t) {
        if (m(t.itemId, t.content)) return e;
        const r = i.default[t.content.kwType],
          o = (0, a.fixPersonalDataItemFromExternalSource)(t.content, t.itemId);
        return { ...e, [r]: U(e[r], o) };
      }
      function E(e, t) {
        return t.itemId ? (t.content ? w(e, [t.itemId], t.content.kwType) : w(e, [t.itemId])) : e;
      }
      (t.addPersonalItemFromTransaction = g), (t.removePersonalItemFromTransaction = E);
      const A = (e, t) => ({ ...e, changesToUpload: e.changesToUpload.map(S.markChangeAsScheduled) }),
        I = (e, t) => ({ ...e, changesToUpload: (0, S.filterOutUploadedChanges)(e.changesToUpload, t.uploadedItemIds) }),
        y = (e, t) => ({ ...e, changesToUpload: e.changesToUpload.map(S.markChangeAsReadyForNextSync) });
      function v(e) {
        if (e.changesToUpload.find((e) => "KWSettingsManagerApp" === e.kwType)) return e;
        const t = (0, u.createUploadChange)({ itemId: "SETTINGS_userId", kwType: "KWSettingsManagerApp", action: "EDIT" });
        return { ...e, changesToUpload: [...e.changesToUpload, t] };
      }
      function T(e, t) {
        const { updates: r, deletions: o, changeHistories: n } = t,
          a = r.reduce((e, t) => {
            const { kwType: r } = t,
              o = i.default[r];
            return o ? { ...e, [o]: U(e[o] || [], t) } : e;
          }, e),
          s = r.map(u.createUploadChangeForItem),
          c = Object.keys(o).reduce((e, t) => w(e, o[t], t), a),
          d = Object.keys(o).reduce((e, t) => e.concat(o[t].map((0, u.createUploadChangeForDeletion)(t))), []),
          l = M(e.changeHistories, n),
          S = [...s, ...d, ...n.map(u.createUploadChangeForItem)];
        return { ...c, changesToUpload: B(e.changesToUpload, S), changeHistories: l };
      }
      function _(e, t) {
        const { changeHistory: r, kwType: o, itemId: n } = t,
          i = w(e, [n], o),
          a = [(0, u.createUploadChangeForDeletion)(o)(n), ...(r ? [(0, u.createUploadChangeForItem)(r)] : [])],
          s = r ? { changeHistories: U(e.changeHistories, r) } : {};
        return { ...i, changesToUpload: B(i.changesToUpload, a), ...s };
      }
      function f(e, { paymentCard: t }) {
        return { ...e, changesToUpload: B(e.changesToUpload, (0, u.createUploadChangeForItem)(t)), paymentCards: U(e.paymentCards, t) };
      }
      function C(e, { dataType: t, dataModelObject: r, changeHistory: o }, n) {
        const i = (0, d.associateTeamSpaceId)(r, n.spaces, e.credentials),
          a = o ? { changeHistories: U(e.changeHistories, o) } : {},
          s = o ? [(0, u.createUploadChangeForItem)(o)] : [],
          c = [(0, u.createUploadChangeForItem)(r), ...s];
        return { ...e, changesToUpload: B(e.changesToUpload, c), [t]: U(e[t], i), ...a };
      }
      function O(e, { dataType: t, dataModelObjects: r, changeHistory: o }, n) {
        const i = r.map((t) => (0, d.associateTeamSpaceId)(t, n.spaces, e.credentials)),
          a = [...r.map(u.createUploadChangeForItem), ...o.map(u.createUploadChangeForItem)];
        return { ...e, changesToUpload: B(e.changesToUpload, a), [t]: M(e[t], i), changeHistories: M(e.changeHistories, o) };
      }
      function h(e, { generatedPassword: t }, r) {
        const o = (0, d.associateTeamSpaceId)(t, r.spaces, e.credentials);
        return {
          ...e,
          changesToUpload: B(e.changesToUpload, (0, u.createUploadChangeForItem)(t)),
          generatedPasswords: U(e.generatedPasswords, o)
        };
      }
      function D(e, { noteCategory: t }) {
        return { ...e, changesToUpload: B(e.changesToUpload, (0, u.createUploadChangeForItem)(t)), noteCategories: U(e.noteCategories, t) };
      }
      function R(e, { transactions: t, backupTimeSec: r }) {
        return Object.keys(e).reduce(
          (o, n) => (
            Array.isArray(e[n]) &&
              (o[n] = (function (e, t, r) {
                const o = e.filter((e) => t.includes(e.Id)).map((e) => Object.assign(e, { LastBackupTime: r }));
                return e.filter((e) => !t.includes(e.Id)).concat(o);
              })(e[n], t, r)),
            o
          ),
          e
        );
      }
      function N(e, t) {
        const { credentials: r } = e,
          o = U(r, t);
        return { ...e, credentials: o };
      }
      function P(e, t) {
        const {
            changes: { updates: r, deletions: o }
          } = t,
          i = n.DataModelType.KWSecurityBreach,
          a = w(e, o, i),
          s = r.map(u.createUploadChangeForItem),
          c = o.map((0, u.createUploadChangeForDeletion)(i)),
          d = B(a.changesToUpload, [...s, ...c]),
          l = M(a.securityBreaches, r),
          S = void 0 !== t.dataLeaksRefreshDate ? t.dataLeaksRefreshDate : a.securityBreachesMetadata.latestDataLeaksBreachesUpdate;
        return {
          ...a,
          securityBreaches: l,
          securityBreachesMetadata: { latestPublicBreachesRevision: t.revision, latestDataLeaksBreachesUpdate: S },
          changesToUpload: d
        };
      }
      function L(e, { changesToUpload: t }) {
        return { ...e, changesToUpload: B(e.changesToUpload, t) };
      }
      function U(e, t) {
        const r = (function (e, t) {
          return e.filter((e) => e.Id !== t);
        })(e, t.Id);
        return r.concat(t);
      }
      function M(e, t) {
        return [
          ...G(
            e,
            t.map((e) => e.Id)
          ),
          ...t
        ];
      }
      function B(e, t) {
        const r = (t = Array.isArray(t) ? t : [t]).concat(e || []);
        return (0, o.uniqBy)((0, o.prop)("itemId"), r);
      }
      function G(e, t) {
        return e.filter((e) => !t.includes(e.Id));
      }
      function w(e, t, r) {
        if (r && i.default[r]) {
          const o = i.default[r];
          return { ...e, [o]: e[o] && G(e[o], t) };
        }
        return i.PERSONAL_DATA_COLLECTIONS_KEYS.reduce((r, o) => {
          if (!(o in e)) return r;
          const n = G(e[o], t);
          return { ...r, [o]: n };
        }, e);
      }
      (t.savePersonalSettings = v),
        (t.teamSpaceContentControlApplied = T),
        (t.removePersonalItem = _),
        (t.savePaymentCard = f),
        (t.savePersonalDataItem = C),
        (t.savePersonalDataItems = O),
        (t.saveGeneratedPassword = h),
        (t.saveNoteCategory = D),
        (t.saveObjects = function (e, t) {
          return (0, o.reduce)(
            (e, t) => {
              const r = i.default[t.kwType];
              return r && (e[r] = e[r].concat(t)), e;
            },
            { ...e },
            t
          );
        }),
        (t.updateLastBackupTime = R),
        (t.updateCredentials = function (e, t) {
          return t.reduce((e, t) => N(e, t), e);
        }),
        (t.updateCredential = N),
        (t.breachesUpdated = P),
        (t.saveChangesToUpload = L),
        (t.getLegacyEmptyBreaches = () => ({ revision: 0, breaches: [] })),
        (t.getEmptyBreachesMetadata = () => ({ latestPublicBreachesRevision: 0, latestDataLeaksBreachesUpdate: 0 })),
        (t.countPersonalDataItems = (e) => Object.keys(i.default).reduce((t, r) => t + e[i.default[r]].length, 0));
    },
    130641: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = r(401067),
        n = r(453576),
        i = r(249901);
      t.default = function (e) {
        const t = (0, o.isNil)(e.LocaleFormat) ? n.Country.UNIVERSAL : e.LocaleFormat,
          r = (0, o.isNil)(e.SpaceId) ? i.PERSONAL_SPACE_ID : e.SpaceId;
        return { ...e, LocaleFormat: t, SpaceId: r };
      };
    },
    263985: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fixPasskeyTypesFromTransaction =
          t.fixBreachTypesFromStore =
          t.fixBreachTypesFromTransaction =
          t.fixCommonPropertiesTypes =
          t.fixGeneratedPasswordsTypes =
          t.fixCredentialTypesFromStore =
          t.fixNoteTypesFromStore =
          t.fixAttachmentProperties =
          t.fixNoteTypesFromTransaction =
          t.fixAllStringObject =
          t.fixLinkedServicesTypes =
          t.fixDomainIconTypes =
          t.fixTrustedUrlTypes =
          t.fixCredentialTypesFromTransaction =
            void 0);
      const o = r(606093),
        n = ["CreationDatetime", "LastBackupTime", "UserModificationDatetime"],
        i = ["Id", "AnonId", "SpaceId"];
      function a(e) {
        return (0, o.fixPropertiesTypes)([], [], [], ["TrustedUrl", "TrustedUrlExpire"], e);
      }
      function s(e) {
        const { urls: t, ...r } = (0, o.fixPropertiesTypes)([], [], [], ["backgroundColor", "mainColor"], e);
        return { ...r, urls: "object" == typeof t && null !== t ? l(t) : {} };
      }
      function c(e) {
        const t = Array.isArray(e.associated_domains) ? e.associated_domains.map(d) : [];
        return { ...e, associated_domains: t };
      }
      function d(e) {
        return (0, o.fixPropertiesTypes)([], [], [], ["domain", "source"], e);
      }
      function l(e) {
        const t = Object.keys(e);
        return (0, o.fixPropertiesTypes)([], [], [], t, e);
      }
      function u(e) {
        return (0, o.fixPropertiesTypes)(
          [],
          ["version", "localSize", "remoteSize", "creationDatetime", "userModificationDatetime"],
          [],
          ["id", "type", "filename", "downloadKey", "cryptoKey", "owner"],
          e
        );
      }
      (t.fixCredentialTypesFromTransaction = function (e) {
        const t = ["LastUse", "ModificationDatetime", "NumberUse", "Strength"].concat(n),
          r = [
            "Alias",
            "Category",
            "ConnectionOptions",
            "Email",
            "Login",
            "Note",
            "OtpSecret",
            "OtpUrl",
            "Password",
            "Port",
            "SID",
            "SecondaryLogin",
            "Server",
            "Title",
            "Url",
            "UserSelectedUrl"
          ].concat(i),
          {
            TrustedUrlGroup: d,
            Attachments: l,
            LinkedServices: S,
            domainIcon: p,
            ...m
          } = (0, o.fixPropertiesTypes)(
            ["AutoLogin", "AutoProtected", "Checked", "SharedObject", "SubdomainOnly", "UseFixedUrl", "limitedPermissions"],
            t,
            ["Attachments", "LinkedServices"],
            r,
            e
          ),
          g = Array.isArray(l) ? { Attachments: l.map(u) } : {},
          E = "object" == typeof p && null !== p ? { domainIcon: s(p) } : {};
        return { ...m, ...g, ...(S ? { LinkedServices: c(S) } : {}), ...E, TrustedUrlGroup: d && d.length > 0 ? d.map(a) : [] };
      }),
        (t.fixTrustedUrlTypes = a),
        (t.fixDomainIconTypes = s),
        (t.fixLinkedServicesTypes = c),
        (t.fixAllStringObject = l),
        (t.fixNoteTypesFromTransaction = function (e) {
          const t = ["CreationDate", "UpdateDate"].concat(n),
            r = ["Title", "Content", "Category"].concat(i),
            { Attachments: a, Type: s, ...c } = (0, o.fixPropertiesTypes)(["Secured"], t, ["Attachments"], r, e);
          return { ...c, ...(Array.isArray(a) ? { Attachments: a.map(u) } : {}), Type: s || "GRAY" };
        }),
        (t.fixAttachmentProperties = u),
        (t.fixNoteTypesFromStore = function (e) {
          const t = {};
          return (
            ["Attachments"]
              .filter((t) => !!e[t])
              .forEach((r) => {
                t[r] = JSON.stringify(e[r]);
              }),
            Object.assign({}, e, t)
          );
        }),
        (t.fixCredentialTypesFromStore = function (e) {
          const t = {};
          return (
            ["Attachments", "LinkedServices"]
              .filter((t) => !!e[t])
              .forEach((r) => {
                t[r] = JSON.stringify(e[r]);
              }),
            Object.assign({}, e, t)
          );
        }),
        (t.fixGeneratedPasswordsTypes = function (e) {
          const t = ["GeneratedDate"].concat(n);
          return (0, o.fixPropertiesTypes)([], t, [], [], e);
        }),
        (t.fixCommonPropertiesTypes = function (e) {
          return (0, o.fixPropertiesTypes)([], n, [], [], e);
        }),
        (t.fixBreachTypesFromTransaction = function (e) {
          const t = [...n, "ContentRevision"],
            r = [...i, "AnonId", "BreachId", "Status"],
            a = (0, o.fixPropertiesTypes)([], t, ["Content", "LeakedPasswords"], r, e);
          return Array.isArray(a.LeakedPasswords) || (a.LeakedPasswords = []), a;
        }),
        (t.fixBreachTypesFromStore = function (e) {
          const t = {};
          return (
            ["Content", "LeakedPasswords"]
              .filter((t) => !!e[t])
              .forEach((r) => {
                t[r] = JSON.stringify(e[r]);
              }),
            Array.isArray(e.LeakedPasswords) || (t.LeakedPasswords = JSON.stringify([])),
            { ...e, ...t }
          );
        }),
        (t.fixPasskeyTypesFromTransaction = function (e) {
          const t = [...n, "Counter", "KeyAlgorithm"],
            r = [...i, "CredentialId", "RpId", "RpName", "UserDisplayName", "UserHandle"];
          return (0, o.fixPropertiesTypes)([], t, ["PrivateKey"], r, e);
        });
    },
    653628: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fixPersistedPersonalData = t.fixPersonalDataItemFromExternalSource = void 0);
      const o = r(401067),
        n = r(453576),
        i = r(263985),
        a = r(130641),
        s = r(186715),
        c = [
          {
            key: "credentials",
            isData: n.isCredential,
            fixData: (e) => (0, i.fixCredentialTypesFromTransaction)(e),
            addDefaultValues: (e) => (0, a.default)(e)
          },
          {
            key: "notes",
            isData: n.isNote,
            fixData: (e) => (0, i.fixNoteTypesFromTransaction)(e),
            addDefaultValues: (e) => (0, a.default)(e)
          },
          {
            key: "generatedPasswords",
            isData: n.isGeneratedPassword,
            fixData: (e) => (0, i.fixGeneratedPasswordsTypes)(e),
            addDefaultValues: (e) => e
          },
          {
            key: "securityBreaches",
            isData: s.isBreach,
            fixData: (e) => (0, i.fixBreachTypesFromTransaction)(e),
            addDefaultValues: (e) => e
          },
          { key: "passkeys", isData: n.isPasskey, fixData: (e) => (0, i.fixPasskeyTypesFromTransaction)(e), addDefaultValues: (e) => e }
        ];
      t.fixPersonalDataItemFromExternalSource = function (e, t) {
        const r = (function (e, t) {
            return t ? { ...e, Id: t } : e;
          })(e, t),
          o = c.find((e) => e.isData(r));
        return o ? l(o, r) : (0, i.fixCommonPropertiesTypes)(r);
      };
      const d = ["breaches", "versionedBreaches"];
      function l(e, t) {
        return e.addDefaultValues(e.fixData(t));
      }
      t.fixPersistedPersonalData = function (e) {
        const t = {};
        c.forEach((r) => {
          const o = e[r.key];
          if (!o) return;
          const n = o.map((e) => l(r, e));
          t[r.key] = n;
        });
        const r = (t.credentials ?? []).filter((e) => !!e.Id);
        return { ...(0, o.omit)(d, e), ...t, credentials: r };
      };
    },
    827517: (e, t) => {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.editPersonalSettings =
          t.loadStoredPersonalSettings =
          t.PersonalSettingsActionType =
          t.TOGGLE_DASHLANE_ON_SITE =
          t.TOGGLE_DASHLANE_ON_PAGE =
            void 0),
        (t.TOGGLE_DASHLANE_ON_PAGE = "TOGGLE_DASHLANE_ON_PAGE"),
        (t.TOGGLE_DASHLANE_ON_SITE = "TOGGLE_DASHLANE_ON_SITE"),
        (function (e) {
          (e.Edit = "EDIT_PERSONAL_SETTINGS"),
            (e.EditFromTransaction = "EDIT_PERSONAL_SETTINGS_FROM_TRANSACTION"),
            (e.LoadFromStorage = "LOAD_PERSONAL_SETTINGS_FROM_STORAGE");
        })((r = t.PersonalSettingsActionType || (t.PersonalSettingsActionType = {}))),
        (t.loadStoredPersonalSettings = (e) => ({ type: r.LoadFromStorage, data: Object.assign({}, e) })),
        (t.editPersonalSettings = (e) => ({ type: r.Edit, content: Object.assign({}, e) }));
    },
    351104: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.fixPersonalSettingTypes = void 0);
      const o = r(401067),
        n = r(606093),
        i = {
          GeneratorDefaultAvoidAmbiguousChars: "boolean",
          GeneratorDefaultDigits: "boolean",
          GeneratorDefaultLetters: "boolean",
          GeneratorDefaultMixedCase: "boolean",
          GeneratorDefaultPronounceable: "boolean",
          GeneratorDefaultSymbols: "boolean",
          RecoveryOptIn: "boolean",
          ProtectPasswords: "boolean",
          ProtectPayments: "boolean",
          ProtectIDs: "boolean",
          SecuredDataShowScreenshots: "yes-no",
          SecuredDataShowPassword: "yes-no",
          SecuredDataShowIDs: "yes-no",
          SecuredDataShowCreditcard: "yes-no",
          SecuredDataAutofillCreditcard: "yes-no",
          SyncBackup: "yes-no",
          SyncBackupPurchase: "yes-no",
          SyncBackupPersonaldata: "yes-no",
          SyncBackupPasswords: "yes-no",
          SyncBackupCreditCardsNumber: "yes-no",
          SyncBackupCreditCardsCCV: "yes-no"
        },
        a = { GeneratorDefaultSize: "number", accountCreationDatetime: "number" },
        s = { SpaceAnonIds: "json", AutofillSettings: "json" },
        c = (0, o.curry)(n.fixProperties.fromTransaction)(i, a, s),
        d = (0, o.curry)(n.fixProperties.fromStore)(i, a, s);
      t.fixPersonalSettingTypes = { fromTransaction: c, fromStore: d };
    },
    895648: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getWebsiteInfo = t.getUpdatedPersonalSettings = t.getEmptyPersonalSettings = t.makeBasePersonalSettings = void 0);
      const o = r(401067),
        n = r(421178),
        i = r(827517),
        a = r(351104),
        s = r(416593);
      function c() {
        return {
          AccountRecoveryKey: null,
          AccountRecoveryKeyId: null,
          DisabledDomainsList: [],
          DisabledUrlsList: [],
          DisabledDomainsAutologinList: [],
          DisabledUrlsAutologinList: [],
          SyncBackupCreditCardsCCV: null,
          SyncBackupCreditCardsNumber: null,
          SyncBackupPasswords: null,
          SyncBackupPersonaldata: null,
          SyncBackupPurchase: null,
          SecuredDataAutofillCreditcard: !0,
          SecuredDataShowCreditcard: !0,
          SecuredDataShowIDs: !0,
          SecuredDataShowPassword: !1,
          SecuredDataShowScreenshots: !0,
          ProtectPasswords: !1,
          ProtectPayments: !0,
          ProtectIDs: !1,
          CryptoUserPayload: null,
          ...(0, t.makeBasePersonalSettings)()
        };
      }
      (t.makeBasePersonalSettings = () => ({
        RealLogin: null,
        SecurityEmail: null,
        accountCreationDatetime: null,
        Format: null,
        Language: null,
        AnonymousUserId: null,
        UsagelogToken: null,
        SyncBackup: null,
        AutofillSettings: {
          isAutofillDisabled: !1,
          isAutologinDisabled: !1,
          disabledSourceTypes: [],
          disabledDomains: [],
          isFollowUpNotificationEnabled: !0
        },
        SecuredDataAutofillCreditcard: !0,
        SecuredDataShowCreditcard: !0,
        SecuredDataShowIDs: !0,
        SecuredDataShowPassword: !1,
        SecuredDataShowScreenshots: !0,
        ProtectPasswords: !1,
        ProtectPayments: !0,
        ProtectIDs: !1,
        kwType: "KWSettingsManagerApp",
        Id: "SETTINGS_userId",
        LastBackupTime: null
      })),
        (t.getEmptyPersonalSettings = c),
        (t.default = (e = c(), t) => {
          switch (t.type) {
            case i.PersonalSettingsActionType.LoadFromStorage:
              return (0, o.mergeDeepRight)(e, a.fixPersonalSettingTypes.fromTransaction(t.data));
            case i.PersonalSettingsActionType.EditFromTransaction:
              return (0, o.mergeDeepRight)(e, a.fixPersonalSettingTypes.fromTransaction(t.content));
            case i.PersonalSettingsActionType.Edit:
              return (0, o.mergeDeepRight)(e, t.content);
            default:
              return e;
          }
        }),
        (t.getUpdatedPersonalSettings = function (e, t) {
          const r = c(),
            o = Object.keys(r);
          for (const e of o) t[e] || void 0 === t[e] || (t[e] = r[e]);
          return { ...e, ...t };
        }),
        (t.getWebsiteInfo = function (e, t) {
          const r = new n.ParsedURL(t).getRootDomain(),
            i = e.getPersonalSettings(),
            a = (0, s.spaceDisabledDomainsListSelector)(e.getState());
          return {
            disabledAutofillOnDomain: (0, o.contains)(r, i.DisabledDomainsList),
            disabledAutofillOnPage: (0, o.contains)(t, i.DisabledUrlsList),
            disabledAutologinOnDomain: (0, o.contains)(r, [...i.DisabledDomainsAutologinList, ...a]),
            disabledAutologinOnPage: (0, o.contains)(t, i.DisabledUrlsAutologinList),
            disabledFromSpaces: !1
          };
        });
    },
    312995: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadedAnonymousComputerId =
          t.saveCurrentLocation =
          t.savePlatformInfo =
          t.LOAD_ANONYMOUS_APPLICATION_ID =
          t.SAVE_CURRENT_LOCATION =
          t.SAVE_PLATFORM_INFO =
            void 0),
        (t.SAVE_PLATFORM_INFO = "SAVE_PLATFORM_INFO"),
        (t.SAVE_CURRENT_LOCATION = "SAVE_CURRENT_LOCATION"),
        (t.LOAD_ANONYMOUS_APPLICATION_ID = "LOAD_ANONYMOUS_APPLICATION_ID"),
        (t.savePlatformInfo = (e) => ({ type: t.SAVE_PLATFORM_INFO, info: e })),
        (t.saveCurrentLocation = (e) => ({ type: t.SAVE_CURRENT_LOCATION, location: e })),
        (t.loadedAnonymousComputerId = (e) => ({ type: t.LOAD_ANONYMOUS_APPLICATION_ID, anonymousApplicationId: e }));
    },
    509149: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyPlatform = t.defaultPlatformInfo = void 0);
      const o = r(312995);
      t.default = (e = i(), r) => {
        switch (r.type) {
          case o.SAVE_PLATFORM_INFO:
            return {
              ...e,
              info:
                ((n = r.info),
                (a = t.defaultPlatformInfo),
                {
                  anonymousApplicationId: n.anonymousApplicationId || a.anonymousApplicationId,
                  platformName: n.platformName || a.platformName,
                  appVersion: n.appVersion || a.appVersion,
                  browser: n.browser || a.browser,
                  browserVersion: n.browserVersion || a.browserVersion,
                  country: n.country || a.country,
                  os: n.os || a.os,
                  osCountry: n.osCountry || a.osCountry,
                  osVersion: n.osVersion || a.osVersion,
                  lang: n.lang || a.lang,
                  manifestVersion: n.manifestVersion || a.manifestVersion
                })
            };
          case o.SAVE_CURRENT_LOCATION:
            return { ...e, location: r.location };
          case o.LOAD_ANONYMOUS_APPLICATION_ID:
            return { ...e, info: { ...e.info, anonymousApplicationId: r.anonymousApplicationId } };
          default:
            return e;
        }
        var n, a;
      };
      const n = { country: null, isEu: !0 };
      function i() {
        return { info: t.defaultPlatformInfo, location: n };
      }
      (t.defaultPlatformInfo = {
        anonymousApplicationId: "unknown_anonymous_application_id",
        platformName: "server_carbon_unknown",
        appVersion: "unknown_version",
        browser: "browser_carbon_unknown",
        browserVersion: "unknown_browser_version",
        country: "country_carbon_unknown",
        os: "os_carbon_unknown",
        osCountry: "os_country_carbon_unknown",
        osVersion: "unknown_os_version",
        lang: "lang_carbon_unknown"
      }),
        (t.getEmptyPlatform = i);
    },
    195363: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetRecoverySessionData = t.saveRecoverySessionData = t.RESET_RECOVERY_SESSION_DATA = t.SAVE_RECOVERY_SESSION_DATA = void 0),
        (t.SAVE_RECOVERY_SESSION_DATA = "SAVE_RECOVERY_SESSION_DATA"),
        (t.RESET_RECOVERY_SESSION_DATA = "RESET_RECOVERY_SESSION_DATA"),
        (t.saveRecoverySessionData = (e) => ({ type: t.SAVE_RECOVERY_SESSION_DATA, data: e })),
        (t.resetRecoverySessionData = () => ({ type: t.RESET_RECOVERY_SESSION_DATA }));
    },
    313250: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyRecoveryState = void 0);
      const o = r(195363);
      (t.getEmptyRecoveryState = () => ({
        recoveryUki: null,
        publicKey: null,
        userServerProtectedSymmetricalKey: null,
        recoveryServerKeyBase64: null,
        recoveryInProgress: !1,
        currentPassword: null,
        verificationMethod: null
      })),
        (t.default = (e = (0, t.getEmptyRecoveryState)(), r) => {
          switch (r.type) {
            case o.SAVE_RECOVERY_SESSION_DATA:
              return { ...e, ...r.data };
            case o.RESET_RECOVERY_SESSION_DATA:
              return (0, t.getEmptyRecoveryState)();
            default:
              return e;
          }
        });
    },
    904572: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.userSessionReducer = t.userSessionRootReducer = void 0);
      const o = r(182422),
        n = r(401067),
        i = r(501678),
        a = r(570325),
        s = r(586797),
        c = r(812659),
        d = r(778663),
        l = r(411406),
        u = r(966403),
        S = r(148005),
        p = r(673472),
        m = r(976089),
        g = r(501347),
        E = r(895648),
        A = r(644899),
        I = r(704511),
        y = r(279619),
        v = r(258174),
        T = r(436738),
        _ = r(504551),
        f = r(684827),
        C = r(463703),
        O = r(369795),
        h = r(797632),
        D = r(313250),
        R = r(939727),
        N = r(115868),
        P = r(319546),
        L = r(351554),
        U = r(448313),
        M = r(645291),
        B = r(798496),
        G = r(329737),
        w = r(338271),
        b = r(524827),
        k = r(236784),
        F = r(113042),
        K = r(81200);
      t.userSessionRootReducer = (e, t) => {
        switch (t.type) {
          case U.CLOSE_SESSION:
            return;
          case U.LOCAL_SETTINGS_UPDATED:
            const r = t.data;
            return Object.assign({}, e, {
              localSettings: (0, p.default)(e.localSettings, (0, m.loadStoredLocalSettings)(r)),
              spaceData: (0, y.default)(e.spaceData, (0, T.spacesUpdated)(r.premiumStatus.spaces))
            });
          case U.PREMIUM_STATUS_UPDATED:
            const o = t.premiumStatus;
            return Object.assign({}, e, {
              localSettings: (0, p.default)(e.localSettings, (0, m.localSettingsPremiumStatusUpdated)(o)),
              spaceData: (0, y.default)(e.spaceData, (0, T.spacesUpdated)(o.spaces))
            });
          default:
            return e;
        }
      };
      const V = (e, t) => {
        switch (t.type) {
          case U.SAVE_GENERATED_PASSWORD:
            return Object.assign({}, e, {
              personalData: (0, g.default)(
                e.personalData,
                { ...t, type: M.SAVE_GENERATED_PASSWORD },
                { spaces: e.localSettings.premiumStatus?.spaces ?? [] }
              )
            });
          case U.SAVE_PERSONAL_ITEM:
            return Object.assign({}, e, {
              personalData: (0, g.default)(
                e.personalData,
                { ...t, type: M.SAVE_PERSONAL_ITEM },
                { spaces: e.localSettings.premiumStatus?.spaces ?? [] }
              )
            });
          case U.SAVE_PERSONAL_ITEMS:
            return Object.assign({}, e, {
              personalData: (0, g.default)(
                e.personalData,
                { ...t, type: M.SAVE_PERSONAL_ITEMS },
                { spaces: e.localSettings.premiumStatus?.spaces ?? [] }
              )
            });
          default:
            return e;
        }
      };
      t.userSessionReducer = (e, r) => {
        const m = (0, o.combineReducers)({
            abTests: i.default,
            account: s.default,
            accountContactInfo: R.default,
            accountCreation: c.default,
            authTicketInfo: d.default,
            credentialOTPs: l.credentialOTPs,
            changeMPData: u.default,
            directorySync: S.default,
            iconsCache: v.default,
            localSettings: p.default,
            loginDeviceLimitFlow: N.default,
            notificationsStatus: B.default,
            paymentsState: a.default,
            personalData: g.default,
            personalSettings: E.default,
            sdkAuthentication: G.default,
            recoveryData: D.default,
            session: w.default,
            sharingData: A.default,
            sharingSync: f.default,
            spaceData: y.default,
            ssoSettings: C.default,
            sync: _.default,
            teamAdminData: I.default,
            twoFactorAuthenticationEnableFlow: P.twoFactorAuthenticationEnableFlow,
            twoFactorAuthenticationDisableFlow: L.twoFactorAuthenticationDisableFlow,
            userActivity: O.default,
            vaultReport: h.default,
            vpnData: b.VPNReducers,
            importPersonalData: k.ImportDataStateReducer,
            secureFileStorageState: F.SecureFileStorageReducer,
            credentialsDedupViewState: K.credentialsDedupViewReducer
          }),
          T = (0, n.partialRight)(m, [r]),
          U = (0, n.partialRight)(V, [r]);
        return (0, n.pipe)(t.userSessionRootReducer, U, T)(e, r);
      };
    },
    433007: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loadAnonymousPartnerId =
          t.loadSdkAuthentication =
          t.saveStyxKeys =
          t.saveAppKeys =
          t.saveDashlaneServerDeltaTimestamp =
          t.LOAD_ANONYMOUS_PARTNER_ID =
          t.LOAD_CLIENT_AUTHENTICATION_DATA =
          t.SAVE_DASHLANE_SERVER_DELTA_TIMESTAMP =
          t.SAVE_STYX_KEYS =
          t.SAVE_APP_KEYS =
            void 0);
      const o = r(500053);
      (t.SAVE_APP_KEYS = "SAVE_APP_KEYS"),
        (t.SAVE_STYX_KEYS = "SAVE_STYX_KEYS"),
        (t.SAVE_DASHLANE_SERVER_DELTA_TIMESTAMP = "SAVE_DASHLANE_SERVER_DELTA_TIMESTAMP"),
        (t.LOAD_CLIENT_AUTHENTICATION_DATA = "LOAD_CLIENT_AUTHENTICATION_DATA"),
        (t.LOAD_ANONYMOUS_PARTNER_ID = "LOAD_ANONYMOUS_PARTNER_ID"),
        (t.saveDashlaneServerDeltaTimestamp = (e) => ({
          type: t.SAVE_DASHLANE_SERVER_DELTA_TIMESTAMP,
          dashlaneServerDeltaTimestamp: Math.round((0, o.getUnixTimestamp)() - e)
        })),
        (t.saveAppKeys = (e) => ({ type: t.SAVE_APP_KEYS, appKeys: e })),
        (t.saveStyxKeys = (e) => ({ type: t.SAVE_STYX_KEYS, styxKeys: e })),
        (t.loadSdkAuthentication = (e) => ({ type: t.LOAD_CLIENT_AUTHENTICATION_DATA, data: e })),
        (t.loadAnonymousPartnerId = (e) => ({ type: t.LOAD_ANONYMOUS_PARTNER_ID, anonymousPartnerId: e }));
    },
    329737: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptySdkAuthentication = void 0);
      const o = r(433007);
      (t.getEmptySdkAuthentication = function () {
        return { anonymousPartnerId: null, appKeys: null, dashlaneServerDeltaTimestamp: null, styxKeys: null };
      }),
        (t.default = (e = { anonymousPartnerId: null, appKeys: null, dashlaneServerDeltaTimestamp: null, styxKeys: null }, t) => {
          switch (t.type) {
            case o.SAVE_APP_KEYS:
              return { ...e, appKeys: t.appKeys };
            case o.SAVE_STYX_KEYS:
              return { ...e, styxKeys: t.styxKeys };
            case o.SAVE_DASHLANE_SERVER_DELTA_TIMESTAMP:
              return { ...e, dashlaneServerDeltaTimestamp: t.dashlaneServerDeltaTimestamp };
            case o.LOAD_CLIENT_AUTHENTICATION_DATA:
              return { ...e, ...t.data };
            case o.LOAD_ANONYMOUS_PARTNER_ID:
              return { ...e, ...t };
            default:
              return e;
          }
        });
    },
    776556: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secureFileStartCipheringAction =
          t.secureFileUploadErrorAction =
          t.secureFileUploadChunkAction =
          t.secureFileUploadClearAction =
          t.secureFileUploadDoneAction =
          t.secureFileStartUploadAction =
          t.secureFileChunkTransferDoneAction =
          t.secureFileChunkReadyAction =
          t.secureFileStartDecipheringAction =
          t.secureFileDownloadErrorAction =
          t.secureFileDownloadChunkAction =
          t.secureFileStartDownloadAction =
          t.secureFileClearAction =
          t.secureFileSetStorageInfoAction =
          t.SECURE_FILE_START_CIPHERING =
          t.SECURE_FILE_UPLOAD_CHUNK =
          t.SECURE_FILE_UPLOAD_ERROR =
          t.SECURE_FILE_UPLOAD_CLEAR =
          t.SECURE_FILE_UPLOAD_DONE =
          t.SECURE_FILE_START_UPLOAD =
          t.SECURE_FILE_START_DECIPHERING =
          t.SECURE_FILE_DOWNLOAD_CHUNK =
          t.SECURE_FILE_DOWNLOAD_ERROR =
          t.SECURE_FILE_CHUNK_TRANSFER_DONE =
          t.SECURE_FILE_CHUNK_READY =
          t.SECURE_FILE_START_DOWNLOAD =
          t.SECURE_FILE_CLEAR =
          t.SECURE_FILE_SET_STORAGE_INFO =
            void 0),
        (t.SECURE_FILE_SET_STORAGE_INFO = "SECURE_FILE_SET_STORAGE_INFO"),
        (t.SECURE_FILE_CLEAR = "SECURE_FILE_CLEAR"),
        (t.SECURE_FILE_START_DOWNLOAD = "SECURE_FILE_START_DOWNLOAD"),
        (t.SECURE_FILE_CHUNK_READY = "SECURE_FILE_CHUNK_READY"),
        (t.SECURE_FILE_CHUNK_TRANSFER_DONE = "SECURE_FILE_CHUNK_TRANSFER_DONE"),
        (t.SECURE_FILE_DOWNLOAD_ERROR = "SECURE_FILE_DOWNLOAD_ERROR"),
        (t.SECURE_FILE_DOWNLOAD_CHUNK = "SECURE_FILE_DOWNLOAD_CHUNK"),
        (t.SECURE_FILE_START_DECIPHERING = "SECURE_FILE_START_DECIPHERING"),
        (t.SECURE_FILE_START_UPLOAD = "SECURE_FILE_START_UPLOAD"),
        (t.SECURE_FILE_UPLOAD_DONE = "SECURE_FILE_UPLOAD_DONE"),
        (t.SECURE_FILE_UPLOAD_CLEAR = "SECURE_FILE_UPLOAD_CLEAR"),
        (t.SECURE_FILE_UPLOAD_ERROR = "SECURE_FILE_UPLOAD_ERROR"),
        (t.SECURE_FILE_UPLOAD_CHUNK = "SECURE_FILE_UPLOAD_CHUNK"),
        (t.SECURE_FILE_START_CIPHERING = "SECURE_FILE_START_CIPHERING"),
        (t.secureFileSetStorageInfoAction = (e) => ({ type: t.SECURE_FILE_SET_STORAGE_INFO, quota: e })),
        (t.secureFileClearAction = (e) => ({ type: t.SECURE_FILE_CLEAR, downloadKey: e })),
        (t.secureFileStartDownloadAction = (e, r) => ({ type: t.SECURE_FILE_START_DOWNLOAD, downloadKey: e, contentLength: r })),
        (t.secureFileDownloadChunkAction = (e, r) => ({ type: t.SECURE_FILE_DOWNLOAD_CHUNK, bytesReceived: r, downloadKey: e })),
        (t.secureFileDownloadErrorAction = (e) => ({ type: t.SECURE_FILE_DOWNLOAD_ERROR, downloadKey: e })),
        (t.secureFileStartDecipheringAction = (e) => ({ type: t.SECURE_FILE_START_DECIPHERING, downloadKey: e })),
        (t.secureFileChunkReadyAction = (e, r) => ({ type: t.SECURE_FILE_CHUNK_READY, downloadKey: e, chunks: r })),
        (t.secureFileChunkTransferDoneAction = (e) => ({ type: t.SECURE_FILE_CHUNK_TRANSFER_DONE, downloadKey: e })),
        (t.secureFileStartUploadAction = (e) => ({ type: t.SECURE_FILE_START_UPLOAD, contentLength: e })),
        (t.secureFileUploadDoneAction = () => ({ type: t.SECURE_FILE_UPLOAD_DONE })),
        (t.secureFileUploadClearAction = () => ({ type: t.SECURE_FILE_UPLOAD_CLEAR })),
        (t.secureFileUploadChunkAction = (e) => ({ type: t.SECURE_FILE_UPLOAD_CHUNK, bytesSent: e })),
        (t.secureFileUploadErrorAction = () => ({ type: t.SECURE_FILE_UPLOAD_ERROR })),
        (t.secureFileStartCipheringAction = () => ({ type: t.SECURE_FILE_START_CIPHERING }));
    },
    920810: function (e, t, r) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, o, n);
              }
            : function (e, t, r, o) {
                void 0 === o && (o = r), (e[o] = t[r]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(r(910691), t), n(r(776556), t);
    },
    113042: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptySecureFileStorageState = t.SecureFileStorageReducer = void 0);
      const o = r(453576),
        n = r(920810),
        i = r(776556),
        a = (e, t, r) => ({ ...e, downloads: { [t]: { ...r } } }),
        s = { downloads: {}, upload: { status: o.FileUploadStatus.None, bytesSent: 0, contentLength: 0 }, quota: { max: 0, remaining: 0 } };
      (t.SecureFileStorageReducer = (e = s, t) => {
        switch (t.type) {
          case i.SECURE_FILE_SET_STORAGE_INFO:
            return { ...e, quota: t.quota };
          case n.SECURE_FILE_CLEAR: {
            const r = (t.downloadKey ? e.downloads[t.downloadKey] : void 0) ? { ...e.downloads, [t.downloadKey]: void 0 } : s.downloads;
            return { ...e, downloads: r, upload: s.upload };
          }
          case i.SECURE_FILE_START_DOWNLOAD:
            return a(e, t.downloadKey, { status: o.FileDownloadStatus.Initial, contentLength: t.contentLength, bytesReceived: 0 });
          case i.SECURE_FILE_DOWNLOAD_CHUNK: {
            const r = e.downloads[t.downloadKey];
            if (!r) return e;
            const n = r.status === o.FileDownloadStatus.Downloading ? r.bytesReceived : 0,
              i = r.status === o.FileDownloadStatus.Downloading || r.status === o.FileDownloadStatus.Initial ? r.contentLength : 0;
            return a(e, t.downloadKey, { status: o.FileDownloadStatus.Downloading, bytesReceived: n + t.bytesReceived, contentLength: i });
          }
          case i.SECURE_FILE_START_DECIPHERING:
            return e.downloads[t.downloadKey] ? a(e, t.downloadKey, { status: o.FileDownloadStatus.Deciphering }) : e;
          case i.SECURE_FILE_DOWNLOAD_ERROR:
            return a(e, t.downloadKey, { status: o.FileDownloadStatus.Error });
          case n.SECURE_FILE_CHUNK_READY: {
            const r = e.downloads[t.downloadKey];
            if (!r) return e;
            const { chunks: n, currentChunkIndex: i } =
              r?.status === o.FileDownloadStatus.ChunkReady
                ? { chunks: r.chunks, currentChunkIndex: r.currentChunkIndex + 1 }
                : { chunks: t.chunks, currentChunkIndex: 0 };
            return a(
              e,
              t.downloadKey,
              i === n.length
                ? { status: o.FileDownloadStatus.TransferComplete }
                : { status: o.FileDownloadStatus.ChunkReady, currentChunkIndex: i, chunks: n }
            );
          }
          case n.SECURE_FILE_CHUNK_TRANSFER_DONE: {
            const r = e.downloads[t.downloadKey];
            if (!r) return e;
            const n = r?.status === o.FileDownloadStatus.ChunkReady ? r.chunks : void 0;
            return a(e, t.downloadKey, { status: o.FileDownloadStatus.ChunkDownloaded, chunks: n });
          }
          case i.SECURE_FILE_START_UPLOAD:
            return { ...e, upload: { ...e.upload, status: o.FileUploadStatus.Initial, contentLength: t.contentLength, bytesSent: 0 } };
          case i.SECURE_FILE_UPLOAD_CHUNK: {
            const r = e.upload;
            if (0 === r.contentLength) return e;
            const n = r.bytesSent + t.bytesSent;
            return {
              ...e,
              upload: { ...e.upload, status: o.FileUploadStatus.Uploading, bytesSent: n < r.contentLength ? n : r.bytesSent }
            };
          }
          case i.SECURE_FILE_START_CIPHERING:
            return { ...e, upload: { ...e.upload, status: o.FileUploadStatus.Ciphering } };
          case i.SECURE_FILE_UPLOAD_ERROR:
            return { ...e, upload: { ...e.upload, status: o.FileUploadStatus.Error } };
          case i.SECURE_FILE_UPLOAD_DONE:
            return 0 === e.upload.contentLength ? e : { ...e, upload: { bytesSent: 0, contentLength: 0, status: o.FileUploadStatus.Done } };
          case n.SECURE_FILE_UPLOAD_CLEAR:
            return { ...e, upload: { bytesSent: 0, contentLength: 0, status: o.FileUploadStatus.None } };
          default:
            return e;
        }
      }),
        (t.getEmptySecureFileStorageState = () => s);
    },
    910691: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    816356: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.updateIsFirstSessionAfterAccountCreation =
          t.updateisUsingBackupCode =
          t.updateisUsingDashlaneAuthenticator =
          t.updateSessionDidOpen =
          t.pairingSucceeded =
          t.updatePublicUserId =
          t.updateDeviceAnalyticsId =
          t.updateUserAnalyticsId =
          t.updateAnalyticsIds =
          t.loadAnalyticsIds =
          t.updateRemoteKey =
          t.updateIsLocalKeyMigrationRequired =
          t.updateLocalKey =
          t.updateSettingsForMPValidation =
          t.updateCryptoKwc3FixedSalt =
          t.updateLastMasterPasswordCheck =
          t.updateMasterPassword =
          t.updateServerKey =
          t.loadSessionKeys =
          t.updateKeyPair =
          t.shouldRememberMeForSSOUpdated =
          t.rememberMasterPasswordUpdated =
          t.UPDATE_IS_FIRST_SESSION_AFTER_ACCOUNT_CREATION =
          t.UPDATE_IS_USING_BACKUP_CODE =
          t.UPDATE_IS_USING_AUTHENTICATOR =
          t.UPDATE_SESSION_DID_OPEN =
          t.PAIRING_SUCCEEDED =
          t.LOAD_ANALYTICS_IDS =
          t.UPDATE_PUBLIC_USER_ID =
          t.UPDATE_DEVICE_ANALYTICS_ID =
          t.UPDATE_USER_ANALYTICS_ID =
          t.UPDATE_ANALYTICS_IDS =
          t.UPDATE_IS_LOCAL_KEY_MIGRATION_REQUIRED =
          t.UPDATE_REMOTE_KEY =
          t.UPDATE_LOCAL_KEY =
          t.UPDATE_SETTINGS_FOR_MP_VALIDATION =
          t.USE_NEW_AUTH_API =
          t.LOAD_SESSION_KEYS =
          t.UPDATE_CRYPTO_KWC3_FIXED_SALT =
          t.UPDATE_LAST_MASTER_PASSWORD_CHECK =
          t.UPDATE_SERVER_KEY =
          t.UPDATE_MASTER_PASSWORD =
          t.UPDATE_KEY_PAIR =
          t.REMEMBER_ME_FOR_SSO_UPDATED =
          t.REMEMBER_MASTER_PASSWORD_UPDATED =
            void 0),
        (t.REMEMBER_MASTER_PASSWORD_UPDATED = "REMEMBER_MASTER_PASSWORD_UPDATED"),
        (t.REMEMBER_ME_FOR_SSO_UPDATED = "REMEMBER_ME_FOR_SSO_UPDATED"),
        (t.UPDATE_KEY_PAIR = "UPDATE_KEY_PAIR"),
        (t.UPDATE_MASTER_PASSWORD = "UPDATE_MASTER_PASSWORD"),
        (t.UPDATE_SERVER_KEY = "UPDATE_SERVER_KEY"),
        (t.UPDATE_LAST_MASTER_PASSWORD_CHECK = "UPDATE_LAST_MASTER_PASSWORD_CHECK"),
        (t.UPDATE_CRYPTO_KWC3_FIXED_SALT = "UPDATE_CRYPTO_KWC3_FIXED_SALT"),
        (t.LOAD_SESSION_KEYS = "LOAD_SESSION_KEYS"),
        (t.USE_NEW_AUTH_API = "USE_NEW_AUTH_API"),
        (t.UPDATE_SETTINGS_FOR_MP_VALIDATION = "UPDATE_SETTINGS_FOR_MP_VALIDATION"),
        (t.UPDATE_LOCAL_KEY = "UPDATE_LOCAL_KEY"),
        (t.UPDATE_REMOTE_KEY = "UPDATE_REMOTE_KEY"),
        (t.UPDATE_IS_LOCAL_KEY_MIGRATION_REQUIRED = "UPDATE_IS_LOCAL_KEY_MIGRATION_REQUIRED"),
        (t.UPDATE_ANALYTICS_IDS = "UPDATE_ANALYTICS_IDS"),
        (t.UPDATE_USER_ANALYTICS_ID = "UPDATE_USER_ANALYTICS_ID"),
        (t.UPDATE_DEVICE_ANALYTICS_ID = "UPDATE_DEVICE_ANALYTICS_ID"),
        (t.UPDATE_PUBLIC_USER_ID = "UPDATE_PUBLIC_USER_ID"),
        (t.LOAD_ANALYTICS_IDS = "LOAD_ANALYTICS_IDS"),
        (t.PAIRING_SUCCEEDED = "PAIRING_SUCCEEDED"),
        (t.UPDATE_SESSION_DID_OPEN = "UPDATE_SESSION_DID_OPEN"),
        (t.UPDATE_IS_USING_AUTHENTICATOR = "UPDATE_IS_USING_AUTHENTICATOR"),
        (t.UPDATE_IS_USING_BACKUP_CODE = "UPDATE_IS_USING_BACKUP_CODE"),
        (t.UPDATE_IS_FIRST_SESSION_AFTER_ACCOUNT_CREATION = "UPDATE_IS_FIRST_SESSION_AFTER_ACCOUNT_CREATION"),
        (t.rememberMasterPasswordUpdated = (e) => ({ type: t.REMEMBER_MASTER_PASSWORD_UPDATED, rememberMasterPassword: e })),
        (t.shouldRememberMeForSSOUpdated = (e) => ({ type: t.REMEMBER_ME_FOR_SSO_UPDATED, shouldRememberMeForSSO: e })),
        (t.updateKeyPair = (e) => ({ type: t.UPDATE_KEY_PAIR, keyPair: e })),
        (t.loadSessionKeys = (e) => ({ type: t.LOAD_SESSION_KEYS, sessionKeys: e })),
        (t.updateServerKey = (e) => ({ type: t.UPDATE_SERVER_KEY, serverKey: e || "" })),
        (t.updateMasterPassword = (e) => ({ type: t.UPDATE_MASTER_PASSWORD, masterPassword: e })),
        (t.updateLastMasterPasswordCheck = () => ({ type: t.UPDATE_LAST_MASTER_PASSWORD_CHECK })),
        (t.updateCryptoKwc3FixedSalt = (e) => ({ type: t.UPDATE_CRYPTO_KWC3_FIXED_SALT, cryptoKwc3FixedSalt: e })),
        (t.updateSettingsForMPValidation = (e) => ({ type: t.UPDATE_SETTINGS_FOR_MP_VALIDATION, settings: e })),
        (t.updateLocalKey = (e) => ({ type: t.UPDATE_LOCAL_KEY, localKey: e })),
        (t.updateIsLocalKeyMigrationRequired = (e) => ({ type: t.UPDATE_IS_LOCAL_KEY_MIGRATION_REQUIRED, isLocalKeyMigrationRequired: e })),
        (t.updateRemoteKey = (e) => ({ type: t.UPDATE_REMOTE_KEY, remoteKey: e })),
        (t.loadAnalyticsIds = (e) => ({
          type: t.LOAD_ANALYTICS_IDS,
          userAnalyticsId: e.userAnalyticsId,
          deviceAnalyticsId: e.deviceAnalyticsId
        })),
        (t.updateAnalyticsIds = (e, r) => ({ type: t.UPDATE_ANALYTICS_IDS, userAnalyticsId: e, deviceAnalyticsId: r })),
        (t.updateUserAnalyticsId = (e) => ({ type: t.UPDATE_USER_ANALYTICS_ID, userAnalyticsId: e })),
        (t.updateDeviceAnalyticsId = (e) => ({ type: t.UPDATE_DEVICE_ANALYTICS_ID, deviceAnalyticsId: e })),
        (t.updatePublicUserId = (e) => ({ type: t.UPDATE_PUBLIC_USER_ID, publicUserId: e })),
        (t.pairingSucceeded = (e) => ({ type: t.PAIRING_SUCCEEDED, pairingId: e })),
        (t.updateSessionDidOpen = (e) => ({ type: t.UPDATE_SESSION_DID_OPEN, didOpen: e })),
        (t.updateisUsingDashlaneAuthenticator = (e) => ({ type: t.UPDATE_IS_USING_AUTHENTICATOR, withAuthenticator: e })),
        (t.updateisUsingBackupCode = (e) => ({ type: t.UPDATE_IS_USING_BACKUP_CODE, withBackupCode: e })),
        (t.updateIsFirstSessionAfterAccountCreation = () => ({ type: t.UPDATE_IS_FIRST_SESSION_AFTER_ACCOUNT_CREATION }));
    },
    338271: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptySession = void 0);
      const o = r(596997),
        n = r(448313),
        i = r(816356),
        a = r(259489);
      (t.getEmptySession = function () {
        return {
          sessionId: null,
          rememberMasterPassword: null,
          shouldRememberMeForSSO: null,
          masterPassword: null,
          remoteKey: null,
          localKey: null,
          lastMasterPasswordCheck: 0,
          serverKey: "",
          keyPair: null,
          cryptoKwc3FixedSalt: null,
          sessionKeys: null,
          settingsForMPValidation: null,
          isLocalKeyMigrationRequired: !1,
          analyticsIds: { userAnalyticsId: "", deviceAnalyticsId: "" },
          publicUserId: "",
          pairingId: null,
          didOpen: !1,
          isUsingDashlaneAuthenticator: !1,
          isUsingBackupCode: !1,
          isFirstSessionAfterAccountCreation: !1
        };
      }),
        (t.default = (
          e = {
            sessionId: null,
            rememberMasterPassword: null,
            shouldRememberMeForSSO: null,
            masterPassword: null,
            remoteKey: null,
            localKey: null,
            lastMasterPasswordCheck: 0,
            serverKey: "",
            keyPair: null,
            cryptoKwc3FixedSalt: null,
            sessionKeys: null,
            settingsForMPValidation: null,
            isLocalKeyMigrationRequired: !1,
            analyticsIds: { userAnalyticsId: "", deviceAnalyticsId: "" },
            publicUserId: "",
            pairingId: null,
            didOpen: !1,
            isUsingDashlaneAuthenticator: !1,
            isUsingBackupCode: !1,
            isFirstSessionAfterAccountCreation: !1
          },
          t
        ) => {
          switch (t.type) {
            case n.OPEN_SESSION:
              return { ...e, sessionId: (0, o.default)() };
            case i.UPDATE_KEY_PAIR:
              return { ...e, keyPair: t.keyPair };
            case i.REMEMBER_MASTER_PASSWORD_UPDATED:
              return { ...e, rememberMasterPassword: t.rememberMasterPassword };
            case i.REMEMBER_ME_FOR_SSO_UPDATED:
              return { ...e, shouldRememberMeForSSO: t.shouldRememberMeForSSO };
            case i.UPDATE_MASTER_PASSWORD:
              return { ...e, masterPassword: t.masterPassword };
            case i.LOAD_SESSION_KEYS:
              return { ...e, sessionKeys: t.sessionKeys };
            case i.UPDATE_SERVER_KEY:
              return { ...e, serverKey: t.serverKey };
            case i.UPDATE_LAST_MASTER_PASSWORD_CHECK:
              return { ...e, lastMasterPasswordCheck: Date.now() };
            case i.UPDATE_CRYPTO_KWC3_FIXED_SALT:
              return { ...e, cryptoKwc3FixedSalt: t.cryptoKwc3FixedSalt };
            case a.CONFIRM_USER_AUTHENTICATION:
              return { ...e, settingsForMPValidation: null };
            case i.UPDATE_SETTINGS_FOR_MP_VALIDATION:
              return { ...e, settingsForMPValidation: t.settings };
            case i.UPDATE_LOCAL_KEY:
              return e.localKey !== t.localKey ? { ...e, localKey: t.localKey } : e;
            case i.UPDATE_REMOTE_KEY:
              return e.remoteKey !== t.remoteKey ? { ...e, remoteKey: t.remoteKey } : e;
            case i.UPDATE_IS_LOCAL_KEY_MIGRATION_REQUIRED:
              return { ...e, isLocalKeyMigrationRequired: t.isLocalKeyMigrationRequired };
            case i.LOAD_ANALYTICS_IDS:
            case i.UPDATE_ANALYTICS_IDS:
              return { ...e, analyticsIds: { userAnalyticsId: t.userAnalyticsId, deviceAnalyticsId: t.deviceAnalyticsId } };
            case i.UPDATE_USER_ANALYTICS_ID:
              return { ...e, analyticsIds: { ...e.analyticsIds, userAnalyticsId: t.userAnalyticsId } };
            case i.UPDATE_DEVICE_ANALYTICS_ID:
              return { ...e, analyticsIds: { ...e.analyticsIds, deviceAnalyticsId: t.deviceAnalyticsId } };
            case i.UPDATE_PUBLIC_USER_ID:
              return { ...e, publicUserId: t.publicUserId };
            case i.PAIRING_SUCCEEDED:
              return { ...e, pairingId: t.pairingId };
            case i.UPDATE_SESSION_DID_OPEN:
              return { ...e, didOpen: t.didOpen };
            case i.UPDATE_IS_USING_AUTHENTICATOR:
              return { ...e, isUsingDashlaneAuthenticator: t.withAuthenticator };
            case i.UPDATE_IS_USING_BACKUP_CODE:
              return { ...e, isUsingBackupCode: t.withBackupCode };
            case i.UPDATE_IS_FIRST_SESSION_AFTER_ACCOUNT_CREATION:
              return { ...e, isFirstSessionAfterAccountCreation: !0 };
            default:
              return e;
          }
        });
    },
    334433: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userGroupsUpdated = t.sharingDataUpdated = t.USER_GROUPS_UPDATED = t.SHARING_DATA_ITEMS_UPDATED = void 0),
        (t.SHARING_DATA_ITEMS_UPDATED = "SHARING_DATA_ITEMS_UPDATED"),
        (t.USER_GROUPS_UPDATED = "USER_GROUPS_UPDATED"),
        (t.sharingDataUpdated = (e) => ({ type: t.SHARING_DATA_ITEMS_UPDATED, sharingData: e })),
        (t.userGroupsUpdated = (e) => ({ type: t.USER_GROUPS_UPDATED, userGroups: e }));
    },
    644899: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyState = void 0);
      const o = r(334433);
      (t.default = (e = { items: [], itemGroups: [], userGroups: [] }, t) => {
        switch (t.type) {
          case o.SHARING_DATA_ITEMS_UPDATED:
            const { sharingData: r } = t;
            return { ...r };
          case o.USER_GROUPS_UPDATED:
            const { userGroups: n } = t;
            return { ...e, userGroups: n };
          default:
            return e;
        }
      }),
        (t.getEmptyState = function () {
          return { items: [], itemGroups: [], userGroups: [] };
        });
    },
    684827: (e, t) => {
      function r(e, t, r) {
        const o = t.map((e) => e[r]),
          n = e.map((e) => e[r]),
          i = e.filter((e) => o.includes(e[r]));
        return [
          ...t.filter((e) => !((e) => n.includes(e[r]))(e)),
          ...i.map((e) => {
            const o = t.find((t) => t[r] === e[r]);
            return o ? { ...o, seen: e.seen } : e;
          })
        ];
      }
      function o(e, t, r) {
        return e.map((e) => (t.includes(e[r]) ? { ...e, seen: !0 } : e));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptySharingSyncState =
          t.setElementsAsSeenAction =
          t.SET_ELEMENTS_AS_SEEN =
          t.setAllPendingAction =
          t.SET_ALL_PENDING =
          t.updateAllPendingAction =
          t.UPDATE_ALL_PENDING =
            void 0),
        (t.UPDATE_ALL_PENDING = "UPDATE_ALL_PENDING"),
        (t.updateAllPendingAction = (e, r) => ({ type: t.UPDATE_ALL_PENDING, pendingItemGroups: e, pendingUserGroups: r })),
        (t.SET_ALL_PENDING = "SET_ALL_PENDING"),
        (t.setAllPendingAction = (e, r) => ({ type: t.SET_ALL_PENDING, pendingItemGroups: e, pendingUserGroups: r })),
        (t.SET_ELEMENTS_AS_SEEN = "SET_ELEMENTS_AS_SEEN"),
        (t.setElementsAsSeenAction = (e, r) => ({ type: t.SET_ELEMENTS_AS_SEEN, pendingItemGroupIds: e, pendingUserGroupIds: r })),
        (t.default = (e = { pendingItemGroups: [], pendingUserGroups: [] }, n) => {
          switch (n.type) {
            case t.SET_ELEMENTS_AS_SEEN: {
              const { pendingUserGroupIds: t, pendingItemGroupIds: r } = n;
              return {
                pendingUserGroups: o(e.pendingUserGroups, t, "groupId"),
                pendingItemGroups: o(e.pendingItemGroups, r, "itemGroupId")
              };
            }
            case t.UPDATE_ALL_PENDING: {
              const { pendingUserGroups: t, pendingItemGroups: o } = n,
                i = r(e.pendingItemGroups, o, "itemGroupId");
              return { pendingUserGroups: r(e.pendingUserGroups, t, "groupId"), pendingItemGroups: i };
            }
            case t.SET_ALL_PENDING: {
              const { pendingUserGroups: e, pendingItemGroups: t } = n;
              return { pendingItemGroups: t, pendingUserGroups: e };
            }
            default:
              return e;
          }
        }),
        (t.getEmptySharingSyncState = function () {
          return { pendingItemGroups: [], pendingUserGroups: [] };
        });
    },
    436738: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.spaceDataUpdated = t.spacesUpdated = t.SPACE_DATA_UPDATED = t.SPACES_UPDATED = void 0),
        (t.SPACES_UPDATED = "SPACES_UPDATED"),
        (t.SPACE_DATA_UPDATED = "SPACE_DATA_UPDATED"),
        (t.spacesUpdated = (e) => ({ type: t.SPACES_UPDATED, spaces: e })),
        (t.spaceDataUpdated = (e) => ({ type: t.SPACE_DATA_UPDATED, spaceData: e }));
    },
    279619: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptySpaceDataState = void 0);
      const o = r(436738);
      (t.default = (e = { spaces: [] }, t) => {
        switch (t.type) {
          case o.SPACES_UPDATED:
            const r = t;
            return { ...e, spaces: (r.spaces || []).map((e) => ({ teamId: e.teamId, details: e })) };
          case o.SPACE_DATA_UPDATED:
            return { ...t.spaceData };
          default:
            return e;
        }
      }),
        (t.getEmptySpaceDataState = function () {
          return { spaces: [] };
        });
    },
    807624: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.resetSSOSettings = t.storeSSOSettings = void 0);
      const o = r(463703);
      (t.storeSSOSettings = (e) => ({ type: o.SET_SSO_SETTINGS, data: e })),
        (t.resetSSOSettings = () => ({ type: o.SET_SSO_SETTINGS, data: (0, o.getEmptySSOSettings)() }));
    },
    463703: (e, t) => {
      function r() {
        return { ssoUser: !1, serviceProviderUrl: "", ssoServiceProviderKey: "", migration: void 0, ssoToken: "" };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptySSOSettings = t.SET_SSO_SETTINGS = void 0),
        (t.SET_SSO_SETTINGS = "SET_SSO_SETTINGS"),
        (t.default = (e = { ssoUser: !1, serviceProviderUrl: "", ssoServiceProviderKey: "", migration: void 0, ssoToken: "" }, r) =>
          r.type === t.SET_SSO_SETTINGS ? Object.assign({}, e, { ...r.data }) : e),
        (t.getEmptySSOSettings = r);
    },
    582262: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.syncFailure = t.syncSuccess = t.syncStarted = t.SYNC_FAILURE = t.SYNC_SUCCESS = t.SYNC_STARTED = void 0),
        (t.SYNC_STARTED = "SYNC_STARTED"),
        (t.SYNC_SUCCESS = "SYNC_SUCCESS"),
        (t.SYNC_FAILURE = "SYNC_FAILURE"),
        (t.syncStarted = () => ({ type: t.SYNC_STARTED, isInProgress: !0, startTime: Date.now() })),
        (t.syncSuccess = (e) => ({ type: t.SYNC_SUCCESS, isInProgress: !1, isUploadEnabled: e })),
        (t.syncFailure = () => ({ type: t.SYNC_FAILURE, isInProgress: !1 }));
    },
    504551: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptySyncState = void 0);
      const o = r(453576),
        n = r(582262);
      function i() {
        return { isUploadEnabled: !1, syncIntervalTimeMs: 3e5, status: o.SyncStatuses.READY };
      }
      (t.getEmptySyncState = i),
        (t.default = (e = i(), t) => {
          switch (t.type) {
            case n.SYNC_STARTED:
              return { ...e, startTime: t.startTime, status: o.SyncStatuses.IN_PROGRESS };
            case n.SYNC_FAILURE:
              return { ...e, status: o.SyncStatuses.FAILURE };
            case n.SYNC_SUCCESS:
              return { ...e, status: o.SyncStatuses.SUCCESS, isUploadEnabled: t.isUploadEnabled };
            default:
              return e;
          }
        });
    },
    801370: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.specialItemGroupUpdated =
          t.userGroupAdminItemCreated =
          t.teamAdminDataUpdated =
          t.userGroupsDeleted =
          t.userGroupsCreated =
          t.userGroupsUpdated =
          t.SPECIAL_ITEM_GROUP_UPDATED =
          t.GROUP_ADMIN_ITEM_CREATED =
          t.TEAM_ADMIN_DATA_UPDATED =
          t.TEAM_ADMIN_USER_GROUPS_DELETED =
          t.TEAM_ADMIN_USER_GROUPS_CREATED =
          t.TEAM_ADMIN_USER_GROUPS_UPDATED =
            void 0),
        (t.TEAM_ADMIN_USER_GROUPS_UPDATED = "TEAM_ADMIN_USER_GROUPS_UPDATED"),
        (t.TEAM_ADMIN_USER_GROUPS_CREATED = "TEAM_ADMIN_USER_GROUPS_CREATED"),
        (t.TEAM_ADMIN_USER_GROUPS_DELETED = "TEAM_ADMIN_USER_GROUPS_DELETED"),
        (t.TEAM_ADMIN_DATA_UPDATED = "TEAM_ADMIN_DATA_UPDATED"),
        (t.GROUP_ADMIN_ITEM_CREATED = "GROUP_ADMIN_ITEM_CREATED"),
        (t.SPECIAL_ITEM_GROUP_UPDATED = "SPECIAL_ITEM_GROUP_UPDATED"),
        (t.userGroupsUpdated = (e, r) => ({ type: t.TEAM_ADMIN_USER_GROUPS_UPDATED, teamId: e, userGroups: r })),
        (t.userGroupsCreated = (e, r) => ({ type: t.TEAM_ADMIN_USER_GROUPS_CREATED, teamId: e, userGroups: r })),
        (t.userGroupsDeleted = (e, r) => ({ type: t.TEAM_ADMIN_USER_GROUPS_DELETED, teamId: e, userGroups: r })),
        (t.teamAdminDataUpdated = (e) => ({ type: t.TEAM_ADMIN_DATA_UPDATED, teamAdminData: e })),
        (t.userGroupAdminItemCreated = (e, r) => ({ type: t.GROUP_ADMIN_ITEM_CREATED, teamId: e, userGroupAdminItem: r })),
        (t.specialItemGroupUpdated = (e, r) => ({ type: t.SPECIAL_ITEM_GROUP_UPDATED, teamId: e, specialItemGroup: r }));
    },
    704511: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyState = void 0);
      const o = r(801370);
      function n(e, t) {
        const r = {};
        return (
          Object.keys(e).forEach((t) => {
            r[t] = e[t];
          }),
          Object.keys(t).forEach((e) => {
            r[e] = Object.assign({}, r[e], t[e]);
          }),
          r
        );
      }
      (t.default = (e = { teams: {} }, t) => {
        switch (t.type) {
          case o.TEAM_ADMIN_DATA_UPDATED:
            const { teamAdminData: a } = t;
            return { teams: n(e.teams, a.teams) };
          case o.TEAM_ADMIN_USER_GROUPS_UPDATED:
            const s = t;
            return { teams: n(e.teams, { [s.teamId]: { teamId: s.teamId, userGroups: s.userGroups } }) };
          case o.TEAM_ADMIN_USER_GROUPS_CREATED:
            const c = t,
              d = e.teams[c.teamId] ? e.teams[c.teamId].userGroups : [];
            return { teams: n(e.teams, { [c.teamId]: { teamId: c.teamId, userGroups: d.concat(c.userGroups) } }) };
          case o.TEAM_ADMIN_USER_GROUPS_DELETED:
            const l = t,
              u = l.userGroups.map((e) => e.groupId),
              S = e.teams[l.teamId] ? e.teams[l.teamId].userGroups : [];
            return { teams: n(e.teams, { [l.teamId]: { teamId: l.teamId, userGroups: S.filter((e) => !u.includes(e.groupId)) } }) };
          case o.GROUP_ADMIN_ITEM_CREATED:
            const p = t,
              m = ((r = e.teams)[(i = p.teamId)] && r[i].userGroupAdminItems) || [];
            return { teams: n(e.teams, { [p.teamId]: { teamId: p.teamId, userGroupAdminItems: m.concat([p.userGroupAdminItem]) } }) };
          case o.SPECIAL_ITEM_GROUP_UPDATED:
            const g = t;
            return { teams: n(e.teams, { [g.teamId]: { teamId: g.teamId, specialItemGroup: t.specialItemGroup } }) };
          default:
            return e;
        }
        var r, i;
      }),
        (t.getEmptyState = function () {
          return { teams: {} };
        });
    },
    140051: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.userActivityLastSentAtUpdated = void 0);
      const o = r(539958);
      t.userActivityLastSentAtUpdated = (e) => ({ type: o.LAST_SENT_AT_UPDATED, lastSentAt: e });
    },
    369795: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyUserActivityState = void 0);
      const o = r(539958);
      function n() {
        return { lastSentAt: void 0 };
      }
      (t.default = (e = { lastSentAt: void 0 }, t) => (t.type === o.LAST_SENT_AT_UPDATED ? { ...e, lastSentAt: t.lastSentAt } : e)),
        (t.getEmptyUserActivityState = n);
    },
    539958: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LAST_SENT_AT_UPDATED = void 0),
        (t.LAST_SENT_AT_UPDATED = "LAST_SENT_AT_UPDATED");
    },
    872881: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.vaultReportLastSentAtUpdated = void 0);
      const o = r(294846);
      t.vaultReportLastSentAtUpdated = (e) => ({ type: o.LAST_SENT_AT_UPDATED, lastSentAt: e });
    },
    797632: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getEmptyVaultReportState = void 0);
      const o = r(294846);
      function n() {
        return { lastSentAt: void 0 };
      }
      (t.default = (e = { lastSentAt: void 0 }, t) => (t.type === o.LAST_SENT_AT_UPDATED ? { ...e, lastSentAt: t.lastSentAt } : e)),
        (t.getEmptyVaultReportState = n);
    },
    294846: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LAST_SENT_AT_UPDATED = void 0),
        (t.LAST_SENT_AT_UPDATED = "LAST_SENT_AT_UPDATED");
    },
    839610: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(934066);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    710447: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.forceSyncHandler = void 0);
      const o = r(660765);
      t.forceSyncHandler = async function ({ sessionService: e }) {
        await e.getInstance().user.attemptSync(o.Trigger.Manual);
      };
    },
    218203: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.refreshSubscriptionInformationHandler = void 0);
      const o = r(835507);
      t.refreshSubscriptionInformationHandler = async (e) =>
        (0, o.refreshSubscriptionInformation)(e.storeService, e.storeService.getAccountInfo().login);
    },
    217095: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setCredentialSearchOrderHandler = void 0);
      const o = r(976089);
      t.setCredentialSearchOrderHandler = (e, t) => (
        e.storeService.dispatch((0, o.credentialSearchOrderUpdated)(t.order)),
        e.sessionService.getInstance().user.persistLocalSettings(),
        Promise.resolve()
      );
    },
    394275: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updateAccountRecoveryKeyPersonalSettingsHandler = void 0);
      const o = r(827517);
      t.updateAccountRecoveryKeyPersonalSettingsHandler = (e, t) => (
        e.storeService.dispatch((0, o.editPersonalSettings)(t)), Promise.resolve()
      );
    },
    217387: function (e, t, r) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, o, n);
              }
            : function (e, t, r, o) {
                void 0 === o && (o = r), (e[o] = t[r]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = t.setupSubscriptions = void 0), n(r(25576), t);
      var i = r(587881);
      Object.defineProperty(t, "setupSubscriptions", {
        enumerable: !0,
        get: function () {
          return i.setupSubscriptions;
        }
      });
      var a = r(839610);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return a.bootstrap;
        }
      });
    },
    281228: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sessionInfo$ =
          t.getServiceProviderUrl$ =
          t.emitServiceProviderUrl =
          t.webOnboardingMode$ =
          t.subscriptionInformation$ =
          t.premiumStatus$ =
          t.syncInProgress$ =
          t.syncInfo$ =
          t.didOpen$ =
            void 0);
      const o = r(518948),
        n = r(903343),
        i = r(416593);
      (t.didOpen$ = () => (0, o.pipe)((0, n.map)(i.didOpenSelector), (0, n.distinctUntilChanged)())),
        (t.syncInfo$ = () => (0, o.pipe)((0, n.map)(i.syncSelector), (0, n.distinctUntilChanged)())),
        (t.syncInProgress$ = () => (0, o.pipe)((0, n.map)(i.syncIsInProgressSelector), (0, n.distinctUntilChanged)())),
        (t.premiumStatus$ = () => (0, o.pipe)((0, n.map)(i.premiumStatusSelector), (0, n.distinctUntilChanged)())),
        (t.subscriptionInformation$ = () => (0, o.pipe)((0, n.map)(i.subscriptionInformationSelector), (0, n.distinctUntilChanged)())),
        (t.webOnboardingMode$ = () => (0, o.pipe)((0, n.map)(i.webOnboardingModeSelector), (0, n.distinctUntilChanged)()));
      const a = new o.Subject();
      (t.emitServiceProviderUrl = (e) => a.next(e)),
        (t.getServiceProviderUrl$ = () => a),
        (t.sessionInfo$ = () => (0, o.pipe)((0, n.map)(i.sessionInfoSelector), (0, n.distinctUntilChanged)()));
    },
    238328: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.updatePremiumChurningDismissDateHandler = t.SendTokenStatus = void 0);
      var o = r(172636);
      Object.defineProperty(t, "SendTokenStatus", {
        enumerable: !0,
        get: function () {
          return o.SendTokenStatus;
        }
      });
      const n = r(976089);
      t.updatePremiumChurningDismissDateHandler = (e) => {
        const t = new Date();
        return (
          e.storeService.dispatch((0, n.premiumChurningDismissDateUpdated)(t.getTime())),
          e.sessionService.getInstance().user.persistLocalSettings(),
          Promise.resolve()
        );
      };
    },
    628287: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resetProtectedItemAutofillTimerHandler =
          t.validateMasterPasswordHandler =
          t.validateMasterPassword =
          t.validateToken =
          t.convertTokenToAuthTicket =
          t.dashlaneAuthenticatorGetAuthTicket =
          t.handlePerformValidationError =
          t.SendTokenStatus =
            void 0);
      const o = r(453576),
        n = r(46298);
      var i = r(172636);
      Object.defineProperty(t, "SendTokenStatus", {
        enumerable: !0,
        get: function () {
          return i.SendTokenStatus;
        }
      });
      const a = r(17825),
        s = r(342282),
        c = r(816356),
        d = r(287248),
        l = (e, t) => ({ success: !1, error: { code: e, message: t } });
      function u(e, t, r) {
        if (!(0, n.isApiErrorOfType)(n.BusinessError, e)) return l(o.AuthenticationCode.REGISTER_DEVICE_FAILED);
        const i = e.code;
        switch (i) {
          case n.VerificationFailed:
            return l(
              t
                ? o.AuthenticationCode.OTP_NOT_VALID
                : r
                ? o.AuthenticationCode.DASHLANE_AUTHENTICATOR_PUSH_NOTIFICATION_DENIED
                : o.AuthenticationCode.TOKEN_NOT_VALID
            );
          case n.InvalidOTPBlocked:
            return l(o.AuthenticationCode.OTP_TOO_MANY_ATTEMPTS);
          case n.InvalidOTPAlreadyUsed:
            return l(o.AuthenticationCode.OTP_ALREADY_USED);
          case n.AccountBlockedContactSupport:
            return l(o.AuthenticationCode.TOKEN_ACCOUNT_LOCKED);
          case n.VerificationTimeout:
            return l(o.AuthenticationCode.TOKEN_EXPIRED);
          case n.VerificationRequiresRequest:
            return l(o.AuthenticationCode.TOKEN_TOO_MANY_ATTEMPTS);
          case n.VerificationMethodDisabled:
            return l(o.AuthenticationCode.REGISTER_DEVICE_FAILED);
          case n.InvalidSsoToken:
          case n.B2bSsoUserNotFound:
            return l(o.AuthenticationCode.SSO_VERIFICATION_FAILED);
          case n.UserHasNoActiveAuthenticator:
            return l(o.AuthenticationCode.NO_ACTIVE_AUTHENTICATOR);
          case n.FailedToContactAuthenticatorDevice:
            return l(o.AuthenticationCode.FAILED_TO_CONTACT_AUTHENTICATOR_DEVICE);
          default:
            return l(o.AuthenticationCode.BUSINESS_ERROR, `Unexpected business_error: ${i}`);
        }
      }
      (t.handlePerformValidationError = u),
        (t.dashlaneAuthenticatorGetAuthTicket = async (e, t) => {
          const { login: r } = e.getAccountInfo();
          e.dispatch((0, s.resetAuthTicketInfo)());
          try {
            const o = await (0, n.performDashlaneAuthenticatorVerification)(e, { login: r, deviceName: t });
            if ((0, n.isApiError)(o)) return u(o, !1, !0);
            const i = o.authTicket;
            return e.dispatch((0, s.updateAuthTicketInfo)({ login: r, authTicket: i, date: Date.now() })), { success: !0, authTicket: i };
          } catch (e) {
            if (e.getAdditionalInfo()?.response?.status === d.HttpStatusCode.GATEWAY_TIMEOUT) return u(n.verificationTimeoutError, !1, !0);
            throw e;
          }
        }),
        (t.convertTokenToAuthTicket = async (e, t) => {
          const { login: r } = e.getAccountInfo();
          let i, c;
          switch ((e.dispatch((0, s.resetAuthTicketInfo)()), t.type)) {
            case "emailToken":
              if (!(0, n.isEmailTokenValid)(t.value)) return l(o.AuthenticationCode.TOKEN_NOT_VALID);
              if (((c = await (0, n.performEmailTokenVerification)(e, { login: r, token: t.value })), (0, n.isApiError)(c))) return u(c);
              i = c.authTicket;
              break;
            case "extraDeviceToken":
              return (0, n.isExtraDeviceTokenValid)(t.value)
                ? { success: !0, authTicket: void 0 }
                : l(o.AuthenticationCode.TOKEN_NOT_VALID);
            case "sso":
              if (!t.value) return l(o.AuthenticationCode.TOKEN_NOT_VALID);
              if (((c = await (0, n.performSsoVerification)(e, { login: r, ssoToken: t.value })), (0, n.isApiError)(c))) return u(c);
              i = c.authTicket;
              break;
            case "otp":
              if (!t.value) return l(o.AuthenticationCode.TOKEN_NOT_VALID);
              if (((c = await (0, n.performTotpVerification)(e, { login: r, otp: t.value })), (0, n.isApiError)(c))) return u(c, !0);
              i = c.authTicket;
              break;
            default:
              (0, a.assertUnreachable)(t);
          }
          return e.dispatch((0, s.updateAuthTicketInfo)({ login: r, authTicket: i, date: Date.now() })), { success: !0, authTicket: i };
        }),
        (t.validateToken = async (e, r) => {
          const { storeService: o } = e;
          return (0, t.convertTokenToAuthTicket)(o, r);
        }),
        (t.validateMasterPassword = async (e, t, r) => {
          const o = t.getInstance().isKey(e.getUserSession().serverKey, r);
          return o && e.dispatch((0, c.updateLastMasterPasswordCheck)()), o;
        }),
        (t.validateMasterPasswordHandler = async (e, r) => {
          const { storeService: o, masterPasswordEncryptorService: n } = e;
          return await (0, t.validateMasterPassword)(o, n, r);
        }),
        (t.resetProtectedItemAutofillTimerHandler = (e) => (
          e.storeService.dispatch((0, c.updateLastMasterPasswordCheck)()), Promise.resolve()
        ));
    },
    429303: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.recoveryIsOtpSelector = t.recoveryInProgressSelector = t.recoveryDataSelector = t.recoveryUkiSelector = void 0),
        (t.recoveryUkiSelector = (e) => e.userSession.recoveryData.recoveryUki),
        (t.recoveryDataSelector = (e) => e.userSession.recoveryData),
        (t.recoveryInProgressSelector = (e) => e.userSession.recoveryData.recoveryInProgress),
        (t.recoveryIsOtpSelector = (e) => {
          const t = e.userSession.recoveryData.verificationMethod[0]?.type ?? "";
          return ["totp", "duo_push", "u2f"].includes(t);
        });
    },
    416593: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.userCryptoSettingsSelector =
          t.sessionInfoSelector =
          t.sessionEncryptorKeysSelector =
          t.getCredentialSearchOrderSelector =
          t.analyticsInstallationIdSelector =
          t.isPaymentFailureChurningDismissedSelector =
          t.premiumChurningDismissDateSelector =
          t.lastMasterPasswordCheckSelector =
          t.didOpenSelector =
          t.publicUserIdSelector =
          t.analyticsIdsSelector =
          t.platformNameSelector =
          t.appVersionSelector =
          t.isAuthenticatedSelector =
          t.protectPasswordsSettingSelector =
          t.personalSettingsSelector =
          t.authTicketInfoSelector =
          t.sharingKeysSelector =
          t.sharingSyncSelector =
          t.recoveryKeySelector =
          t.accountRecoveryOptInSelector =
          t.userCryptoFixedSalt =
          t.userDefaultCryptoSelector =
          t.anonymousUserIdSelector =
          t.isLocalKeyMigrationRequiredSelector =
          t.remoteKeySelector =
          t.isRemoteKeyActivatedSelector =
          t.serverKeySelector =
          t.spaceDisabledDomainsListSelector =
          t.localKeySelector =
          t.isLocalKeyActivatedSelector =
          t.isOnboardingNotificationShowingSelector =
          t.webOnboardingModeSelector =
          t.masterPasswordValidationDataSelector =
          t.spacesSelector =
          t.userLoginSelector =
          t.masterPasswordSelector =
          t.masterPasswordAndServerKeySelector =
          t.userIdSelector =
          t.activeSpacesSelector =
          t.subscriptionInformationSelector =
          t.nodePremiumStatusSelector =
          t.premiumStatusSelector =
          t.syncIsInProgressSelector =
          t.syncSelector =
            void 0);
      const o = r(432034),
        n = r(453576),
        i = r(857789),
        a = r(656915),
        s = r(802246),
        c = r(859600),
        d = r(130913),
        l = r(441265);
      (t.syncSelector = (e) => e.userSession.sync),
        (t.syncIsInProgressSelector = (e) => e.userSession.sync.status === n.SyncStatuses.IN_PROGRESS),
        (t.premiumStatusSelector = (e) => e.userSession.localSettings.premiumStatus),
        (t.nodePremiumStatusSelector = (e) => e.userSession.localSettings.nodePremiumStatus),
        (t.subscriptionInformationSelector = (e) => e.userSession.localSettings.subscriptionInformation),
        (t.activeSpacesSelector = (e) => {
          const r = (0, t.premiumStatusSelector)(e);
          return ((r && r.spaces) || []).filter((e) => "accepted" === e.status);
        }),
        (t.userIdSelector = (e) => e.userSession.account.login),
        (t.masterPasswordAndServerKeySelector = (e) => {
          const { userSession: t } = e,
            { masterPassword: r, serverKey: o } = t.session;
          return { password: r, serverKey: o };
        }),
        (t.masterPasswordSelector = (e) => e.userSession.session.masterPassword),
        (t.userLoginSelector = (e) => e.userSession.account.login),
        (t.spacesSelector = (e) => e.userSession.spaceData.spaces),
        (t.masterPasswordValidationDataSelector = (e) => e.userSession.session.settingsForMPValidation),
        (t.webOnboardingModeSelector = (e) => e.userSession.localSettings.webOnboardingMode),
        (t.isOnboardingNotificationShowingSelector = (e) => {
          const r = (0, t.webOnboardingModeSelector)(e);
          return (0, i.isOnboardingNotificationShowing)(r);
        }),
        (t.isLocalKeyActivatedSelector = (e) => Boolean(e.userSession.session.localKey)),
        (t.localKeySelector = (e) => e.userSession.session.localKey),
        (t.spaceDisabledDomainsListSelector = (0, o.createSelector)(t.spacesSelector, (e) =>
          e.reduce((e, t) => {
            let r = [];
            return (
              t &&
                t.details &&
                t.details.info &&
                t.details.info.autologinDomainDisabledArray &&
                (r = t.details.info.autologinDomainDisabledArray),
              [...e, ...r]
            );
          }, [])
        )),
        (t.serverKeySelector = (e) => e.userSession.session.serverKey),
        (t.isRemoteKeyActivatedSelector = (e) => Boolean(e.userSession.session.remoteKey)),
        (t.remoteKeySelector = (e) => e.userSession.session.remoteKey),
        (t.isLocalKeyMigrationRequiredSelector = (e) => e.userSession.session.isLocalKeyMigrationRequired),
        (t.anonymousUserIdSelector = (e) => e.userSession.personalSettings.AnonymousUserId),
        (t.userDefaultCryptoSelector = (e) => e.userSession.personalSettings.CryptoUserPayload),
        (t.userCryptoFixedSalt = (e) => e.userSession.personalSettings.CryptoFixedSalt),
        (t.accountRecoveryOptInSelector = (e) => e.userSession.personalSettings.RecoveryOptIn || !1),
        (t.recoveryKeySelector = (e) => e.userSession.personalSettings.RecoveryKey),
        (t.sharingSyncSelector = (e) => e.userSession.sharingSync),
        (t.sharingKeysSelector = (e) => e.userSession.session.keyPair),
        (t.authTicketInfoSelector = (e) => e.userSession.authTicketInfo),
        (t.personalSettingsSelector = (e) => e.userSession.personalSettings),
        (t.protectPasswordsSettingSelector = (e) => {
          const { ProtectPasswords: t } = e.userSession.personalSettings;
          return t;
        }),
        (t.isAuthenticatedSelector = (e) => e.userSession.account.isAuthenticated),
        (t.appVersionSelector = (e) => (0, a.platformInfoSelector)(e).appVersion),
        (t.platformNameSelector = (e) => (0, a.platformInfoSelector)(e).platformName),
        (t.analyticsIdsSelector = (e) => e.userSession.session.analyticsIds),
        (t.publicUserIdSelector = (e) => e.userSession.session.publicUserId),
        (t.didOpenSelector = (e) => e.userSession.session.didOpen),
        (t.lastMasterPasswordCheckSelector = (e) => e.userSession.session.lastMasterPasswordCheck),
        (t.premiumChurningDismissDateSelector = (e) => e.userSession.localSettings.premiumChurningDismissDate),
        (t.isPaymentFailureChurningDismissedSelector = (e) => {
          return (t = e.userSession.localSettings.premiumChurningDismissDate), Date.now() - t > 864e5;
          var t;
        }),
        (t.analyticsInstallationIdSelector = (0, o.createSelector)(
          t.userLoginSelector,
          t.isAuthenticatedSelector,
          d.applicationBuildTypeSelector,
          (e, t, r) => {
            const o = e && (0, l.isInternalTestUser)(e) && t;
            return r === c.ApplicationBuildType.DEV || r === c.ApplicationBuildType.QA || o
              ? (0, s.getCommonAppSetting)("installationId")
              : null;
          }
        )),
        (t.getCredentialSearchOrderSelector = (e) => e.userSession.localSettings.credentialSearchOrder ?? n.CredentialSearchOrder.NAME),
        (t.sessionEncryptorKeysSelector = (e) => ({
          masterPassword: (0, t.masterPasswordSelector)(e),
          serverKey: (0, t.serverKeySelector)(e),
          localKey: (0, t.localKeySelector)(e),
          remoteKey: (0, t.remoteKeySelector)(e)
        })),
        (t.sessionInfoSelector = (e) => ({
          password: (0, t.masterPasswordSelector)(e),
          serverKey: (0, t.serverKeySelector)(e),
          localKey: (0, t.localKeySelector)(e),
          cryptoUserPayload: (0, t.userDefaultCryptoSelector)(e),
          cryptoFixedSalt: (0, t.userCryptoFixedSalt)(e),
          devicesKeys: (0, a.deviceKeysSelector)(e)
        })),
        (t.userCryptoSettingsSelector = (e) => ({
          cryptoUserPayload: e.userSession.personalSettings.CryptoUserPayload,
          cryptoFixedSalt: e.userSession.personalSettings.CryptoFixedSalt
        }));
    },
    127754: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sessionStartTimeSelector = t.sessionIdSelector = void 0),
        (t.sessionIdSelector = (e) => e.userSession.session.sessionId),
        (t.sessionStartTimeSelector = (e) => e.userSession.account.sessionStartTime);
    },
    538981: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSSOUserSelector =
          t.ssoProviderInfoSelector =
          t.ssoMigrationInfoSelector =
          t.serviceProviderUrlSelector =
          t.ssoSettingsSelector =
            void 0);
      const o = r(677876),
        n = r(432034),
        i = r(416593);
      (t.ssoSettingsSelector = (e) => e.userSession.ssoSettings),
        (t.serviceProviderUrlSelector = (e) => (0, t.ssoSettingsSelector)(e).serviceProviderUrl),
        (t.ssoMigrationInfoSelector = (0, n.createSelector)(
          t.ssoSettingsSelector,
          ({ migration: e, serviceProviderUrl: t, ssoToken: r }) => ({
            migration: r ? o.AuthenticationFlowContracts.SSOMigrationType.MP_TO_SSO_WITH_INFO : e,
            serviceProviderUrl: t
          })
        )),
        (t.ssoProviderInfoSelector = (0, n.createSelector)(t.ssoSettingsSelector, ({ serviceProviderUrl: e, isNitroProvider: t }) => ({
          serviceProviderUrl: e,
          isNitroProvider: t
        }))),
        (t.isSSOUserSelector = (e) => {
          const t = (0, i.activeSpacesSelector)(e);
          return (t.length > 0 && t[0].isSSOUser) || !1;
        });
    },
    587881: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(958639),
        n = r(835507),
        i = r(416593),
        a = r(656915),
        s = r(375004),
        c = r(954642),
        d = r(765210),
        l = r(453576),
        u = r(235924),
        S = r(718216);
      t.setupSubscriptions = function (e, t) {
        const { storeService: r, wsService: p, sessionService: m } = t;
        e.coreServicesReady.on(async (e) => {
          if (e.initMode === S.InitMode.Resume && (t.sessionService.tryRestoreInstance(), m.isSessionStarted())) {
            const { user: e } = t.sessionService.getInstance();
            await e.loadNonResumableSessionData();
          }
        }),
          e.sessionOpened.on(() => {
            r.dispatch((0, u.resetLoginStepInfo)());
            const e = r.getState(),
              t = (0, i.premiumStatusSelector)(e);
            1 !== (0, c.getUserMessagesByTypeSelector)(e, l.UserMessageTypes.TRIAL_EXPIRED).length ||
              (0, s.isTrialExpired)({ premiumStatus: t }) ||
              (r.dispatch((0, d.userMessagesDismissed)((0, s.createTrialExpiredUserMessage)())),
              m.getInstance().user.persistLocalSettings());
          }),
          e.sessionClosed.on((e) => {
            (0, o.triggerLoginStatusChanged)({ loggedIn: !1, login: e.login });
          }),
          e.familyMemberLeft.on(async () => {
            const e = (0, i.userLoginSelector)(r.getState()),
              t = (0, a.ukiSelector)(r.getState());
            await (0, n.refreshPremiumStatus)(r, p, e, t);
          });
      };
    },
    25576: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.B2CStatusCode =
          t.CancelDashlaneAuthenticatorRegistration =
          t.PersistData =
          t.SessionResumingCode =
          t.extractExtraDeviceToken =
          t.makeExtraDeviceToken =
          t.extractOTP =
          t.makeSsoToken =
          t.makeOTP =
          t.extractEmailToken =
          t.makeEmailToken =
          t.remoteSupportedAuthenticationMethod =
          t.localSupportedAuthenticationMethod =
            void 0),
        (t.localSupportedAuthenticationMethod = ["totp", "duo_push"]),
        (t.remoteSupportedAuthenticationMethod = ["email_token", "totp", "duo_push", "dashlane_authenticator", "u2f"]),
        (t.makeEmailToken = (e) => ({ type: "emailToken", value: e })),
        (t.extractEmailToken = (e) => e.value),
        (t.makeOTP = (e) => ({ type: "otp", value: e })),
        (t.makeSsoToken = (e) => ({ type: "sso", value: e })),
        (t.extractOTP = (e) => e.value),
        (t.makeExtraDeviceToken = (e) => ({ type: "extraDeviceToken", value: e })),
        (t.extractExtraDeviceToken = (e) => e.value),
        (function (e) {
          e.INVALID_LOGIN_IN_STORE = "invalid_login_in_store";
        })(t.SessionResumingCode || (t.SessionResumingCode = {})),
        (function (e) {
          (e[(e.PERSIST_DATA_YES = 0)] = "PERSIST_DATA_YES"), (e[(e.PERSIST_DATA_NO = 1)] = "PERSIST_DATA_NO");
        })(t.PersistData || (t.PersistData = {})),
        (function (e) {
          (e.CANCELLED = "cancelled"), (e.COMPLETED = "completed");
        })(t.CancelDashlaneAuthenticatorRegistration || (t.CancelDashlaneAuthenticatorRegistration = {})),
        (function (e) {
          (e.Free = "free"), (e.Subscribed = "subscribed"), (e.Legacy = "legacy");
        })(t.B2CStatusCode || (t.B2CStatusCode = {}));
    },
    134376: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCurrentUserInfo = void 0);
      const o = r(656915);
      t.getCurrentUserInfo = function (e) {
        const t = e.getUserSession().keyPair;
        return { login: e.getUserLogin(), uki: (0, o.ukiSelector)(e.getState()), privateKey: t && t.privateKey };
      };
    },
    680687: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.authorizationMiddleware = void 0),
        (t.authorizationMiddleware = (e) => async (t) => {
          const r = await t,
            {
              config: { allowedPlatforms: o },
              services: { storeService: n }
            } = r,
            { platformName: i } = n.getPlatformInfo();
          if (o && !o.includes(i)) throw new Error("You are not allowed to connect to this slot");
          return await e(t);
        });
    },
    718324: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.debugMiddleware = void 0),
        r(504939),
        new Map(),
        (t.debugMiddleware = (e) => async (t) => e(t));
    },
    977686: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.debugMiddleware = t.authorizationMiddleware = void 0);
      var o = r(680687);
      Object.defineProperty(t, "authorizationMiddleware", {
        enumerable: !0,
        get: function () {
          return o.authorizationMiddleware;
        }
      });
      var n = r(718324);
      Object.defineProperty(t, "debugMiddleware", {
        enumerable: !0,
        get: function () {
          return n.debugMiddleware;
        }
      });
    },
    857307: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.CommandQueryBus = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(235992),
        a = r(17338),
        s = r(725566),
        c = r(977686);
      class d {
        constructor(e) {
          this.services = (0, a.getCoreServices)(e);
        }
        register(e) {
          const { commands: t, queries: r, liveQueries: o } = e;
          Object.keys(t).forEach((e) => {
            this._registerCommand(e, t[e]);
          }),
            Object.keys(r).forEach((e) => {
              this._registerQuery(e, r[e]);
            }),
            Object.keys(o).forEach((e) => {
              this._registerLiveQuery(e, o[e]);
            });
        }
        _registerCommand(e, t) {
          const r = (r) =>
              Promise.resolve({
                messageType: "command",
                messageName: e,
                requestId: (0, i.v4)(),
                services: this.services,
                arg: r,
                config: t,
                logTags: [d.API_LOG_TAG, d.COMMAND_LOG_TAG]
              }),
            o = [
              c.authorizationMiddleware,
              c.debugMiddleware,
              () => (e) =>
                e.then(async (e) => {
                  const { arg: t, config: r, services: o } = e,
                    { handler: n } = r,
                    i = await n(o, t);
                  return { ...e, result: i };
                })
            ];
          this.registerCommand(e, (e) => (0, s.buildMiddlewarePipeline)(...o)(r(e)).then((e) => e.result));
        }
        _registerQuery(e, t) {
          const r = (r) =>
              Promise.resolve({
                messageType: "query",
                messageName: e,
                requestId: (0, i.v4)(),
                services: this.services,
                arg: r,
                config: t,
                logTags: [d.API_LOG_TAG, d.QUERY_LOG_TAG]
              }),
            o = [
              c.authorizationMiddleware,
              c.debugMiddleware,
              () => (e) =>
                e.then(async (e) => {
                  const { arg: r, services: o } = e,
                    { selector: n, staticDataHandler: i, selectorFactory: a } = t;
                  if (n) {
                    const { storeService: t } = o,
                      i = await n(t.getState(), r);
                    return { ...e, result: i };
                  }
                  if (a) {
                    const { storeService: t } = o,
                      n = await a(this.services),
                      i = await Promise.resolve(n(t.getState(), r));
                    return { ...e, result: i };
                  }
                  {
                    const t = i(r);
                    return { ...e, result: t };
                  }
                })
            ];
          this.registerQuery(e, (e) => (0, s.buildMiddlewarePipeline)(...o)(r(e)).then((e) => e.result));
        }
        _registerLiveQuery(e, t) {
          this.registerLiveQuery(e, (e) => {
            const { operator: r, subject: i, operatorFactory: a } = t;
            if (r) {
              const { storeService: t } = this.services;
              return t.getState$().pipe(r(e), (0, n.skip)(1));
            }
            if (a) {
              const { storeService: t } = this.services,
                r = t.getState$();
              return (0, o.from)(a(t.getState(), this.services)).pipe((0, o.switchMap)((t) => r.pipe(t(e), (0, n.skip)(1))));
            }
            return i(e);
          });
        }
      }
      (t.CommandQueryBus = d), (d.API_LOG_TAG = "API"), (d.COMMAND_LOG_TAG = "Command"), (d.QUERY_LOG_TAG = "Query");
    },
    888626: function (e, t, r) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, o, n);
              }
            : function (e, t, r, o) {
                void 0 === o && (o = r), (e[o] = t[r]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(r(991069), t), n(r(857307), t);
    },
    991069: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    233968: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.EventStore = void 0);
      const o = r(518948),
        n = r(235992),
        i = r(903343),
        a = r(17825),
        s = r(247746);
      t.EventStore = class {
        constructor() {
          (this._operation$ = new o.Subject()),
            (this.subs = new Set()),
            (this.add = async (e, t) => {
              const r = (0, n.v4)(),
                o = new Promise((e, t) => {
                  const o = this._operationResults$.subscribe((n) => {
                    n.id === r && (!0 === n.success ? e(r) : t(n.error), o.unsubscribe(), this.subs.delete(o));
                  });
                  this.subs.add(o);
                });
              return this.triggerAdd(e, r, t), o;
            }),
            (this.remove = async (e, t) => {
              const r = new Promise((e, r) => {
                const o = this._operationResults$.subscribe((n) => {
                  n.id === t && (!0 === n.success ? e() : r(n.error), o.unsubscribe(), this.subs.delete(o));
                });
                this.subs.add(o);
              });
              return this.triggerRemove(e, t), r;
            }),
            (this.removeAll = async (e) => {
              const t = (0, n.v4)(),
                r = new Promise((e, r) => {
                  const o = this._operationResults$.subscribe((n) => {
                    n.id === t && (!0 === n.success ? e() : r(n.error), o.unsubscribe(), this.subs.delete(o));
                  });
                  this.subs.add(o);
                });
              return this.triggerRemoveAll(e, t), r;
            }),
            (this.onAdd = async (e) => {
              const { id: t, event: r, topic: o, type: n } = e,
                i = { id: t, topic: o, type: n };
              try {
                const e = await this.retrieve(),
                  n = { id: t, event: r },
                  a = { ...e, [o]: [...(e[o] || []), n] };
                return await this.store(a), { ...i, success: !0, event: r };
              } catch (e) {
                return { ...i, success: !1, error: e };
              }
            }),
            (this.onRemove = async (e) => {
              const { id: t, topic: r, type: o } = e,
                n = { id: t, topic: r, type: o };
              try {
                const e = await this.retrieve(),
                  o = { ...e, [r]: (e[r] || []).filter((e) => e.id !== t) };
                return await this.store(o), { ...n, success: !0 };
              } catch (e) {
                return { ...n, success: !1, error: e };
              }
            }),
            (this.onRemoveAll = async (e) => {
              const { id: t, topic: r, type: o } = e,
                n = { id: t, topic: r, type: o };
              try {
                const e = { ...(await this.retrieve()), [r]: [] };
                return await this.store(e), { ...n, success: !0 };
              } catch (e) {
                return { ...n, success: !1, error: e };
              }
            }),
            (this.onOperation = async (e) => {
              switch (e.type) {
                case s.OperationType.Add:
                  return this.onAdd(e);
                case s.OperationType.Remove:
                  return this.onRemove(e);
                case s.OperationType.RemoveAll:
                  return this.onRemoveAll(e);
                default:
                  return (0, a.assertUnreachable)(e);
              }
            }),
            (this.setupOperationsHandling = () => {
              const e = this._operation$.pipe((0, i.concatMap)(this.onOperation), (0, i.share)()),
                t = e.subscribe();
              this.subs.add(t), (this._operationResults$ = e);
            }),
            this.setupOperationsHandling();
        }
        newItems$(e) {
          return this._operationResults$.pipe(
            (0, i.filter)((e) => e.type === s.OperationType.Add && e.success),
            (0, i.filter)((t) => t.topic === e)
          );
        }
        async getItems(e) {
          return (await this.retrieve())[e];
        }
        teardown() {
          this.subs.forEach((e) => e.unsubscribe());
        }
        async triggerAdd(e, t, r) {
          const o = { event: r, id: t, topic: e, type: s.OperationType.Add };
          this._operation$.next(o);
        }
        async triggerRemove(e, t) {
          const r = { id: t, topic: e, type: s.OperationType.Remove };
          this._operation$.next(r);
        }
        async triggerRemoveAll(e, t) {
          const r = { id: t, topic: e, type: s.OperationType.RemoveAll };
          this._operation$.next(r);
        }
      };
    },
    247746: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OperationType = void 0),
        (function (e) {
          (e.Add = "add"), (e.Remove = "remove"), (e.RemoveAll = "removeAll");
        })(t.OperationType || (t.OperationType = {}));
    },
    30137: function (e, t, r) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, o) {
                void 0 === o && (o = r);
                var n = Object.getOwnPropertyDescriptor(t, r);
                (n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    }
                  }),
                  Object.defineProperty(e, o, n);
              }
            : function (e, t, r, o) {
                void 0 === o && (o = r), (e[o] = t[r]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(r(888626), t);
    },
    725566: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.buildMiddlewarePipeline = void 0);
      var o = r(703201);
      Object.defineProperty(t, "buildMiddlewarePipeline", {
        enumerable: !0,
        get: function () {
          return o.buildMiddlewarePipeline;
        }
      });
    },
    703201: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildMiddlewarePipeline = void 0),
        (t.buildMiddlewarePipeline =
          (...e) =>
          (t) =>
            e.reduceRight(
              (e, t) => t(e),
              (e) => e
            )(t));
    },
    236768: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(684511),
        n = r(980993),
        i = r(190021),
        a = r(155721),
        s = r(978987),
        c = r(423944),
        d = r(122652),
        l = r(595326),
        u = r(667312);
      t.config = {
        commands: { convertItemToDashlaneXml: { handler: u.convertItemToDashlaneXml }, shareItem: { handler: l.shareItem } },
        queries: {
          getAllSharedItemIds: { selector: n.sortedSharedItemIdsSelector },
          getGroupRecipients: { selector: o.groupRecipientsSelector },
          getHasNotifications: { selector: o.hasNotificationsSelector },
          getIsShared: { selector: o.isSharedSelector },
          getItemItemGroup: { selector: o.itemItemGroupSelector },
          getMyAcceptedUserGroups: { selector: o.myAcceptedUserGroupsSelector },
          getMyAcceptedItemGroupUserMembers: { selector: o.myAcceptedItemGroupUserMembersSelector },
          getPendingItemGroups: { selector: o.pendingItemGroupsSelector },
          getPendingUserGroups: { selector: o.pendingUserGroupsSelector },
          getRecipientsCount: { selector: o.recipientsCountSelector },
          getUserRecipients: { selector: o.userRecipientsSelector },
          getSharingCapacity: { selector: i.sharingCapacitySelector },
          isAllowedToShare: { selector: a.isAllowedToShareSelector },
          ...c.config.queries,
          ...d.config.queries
        },
        liveQueries: {
          liveAllSharedItemIds: { operator: s.allSharedItemIds$ },
          liveGroupRecipients: { operator: s.groupRecipients$ },
          liveHasNotifications: { operator: s.hasNotifications$ },
          liveIsShared: { operator: s.isShared$ },
          liveMyAcceptedItemGroupUserMembers: { operator: s.myAcceptedItemGroupUserMembers$ },
          liveMyAcceptedUserGroups: { operator: s.myAcceptedUserGroups$ },
          livePendingItemGroups: { operator: s.pendingItemGroups$ },
          livePendingUserGroups: { operator: s.pendingUserGroups$ },
          liveRecipientsCount: { operator: s.recipientsCount$ },
          liveUserRecipients: { operator: s.userRecipients$ },
          liveSharingCapacity: { operator: s.sharingCapacity$ },
          ...c.config.liveQueries,
          ...d.config.liveQueries
        }
      };
    },
    736884: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeItemGroupService =
          t.UPDATE_ITEM_GROUP_MEMBERS =
          t.SHARING_VERSION =
          t.REVOKE_ITEM_GROUP_MEMBERS =
          t.REFUSE_ITEM_GROUP =
          t.INVITE_ITEM_GROUP_MEMBERS =
          t.DELETE_ITEM_GROUP =
          t.CREATE_SPECIAL_ITEM_GROUP =
          t.CREATE_ITEM_GROUP =
          t.ACCEPT_ITEM_GROUP =
            void 0);
      const o = r(278320),
        n = r(836467),
        i = r(882366),
        a = r(736513),
        s = r(658107),
        c = r(493513);
      function d(e, t, r) {
        const o = r && r.users && r.users.find((e) => e.userId === t.login),
          n = o && o.groupKey;
        return e.asymmetricEncryption.decrypt(t.privateKey, n);
      }
      function l(e, r, o, n, i, a) {
        const s = i || void 0;
        return {
          ...(a ? { userGroupId: a } : {}),
          ...(n && n.length ? { itemsForEmailing: n } : {}),
          acceptSignature: e,
          groupId: r,
          revision: o,
          sharingVersion: t.SHARING_VERSION,
          type: t.ACCEPT_ITEM_GROUP,
          auditLogDetails: s
        };
      }
      function u(e, r, o, n, i) {
        const a = i ? { userGroupId: i } : {},
          s = n || void 0;
        return {
          ...(o && o.length ? { itemsForEmailing: o } : {}),
          ...a,
          groupId: e,
          revision: r,
          sharingVersion: t.SHARING_VERSION,
          type: t.REFUSE_ITEM_GROUP,
          auditLogDetails: s
        };
      }
      function S(e, r, o, n, i, a) {
        const s = a || void 0;
        return {
          ...(o && o.length ? { groups: o } : {}),
          ...(i && i.length ? { itemsForEmailing: i } : {}),
          groupId: e,
          items: n,
          sharingVersion: t.SHARING_VERSION,
          type: t.CREATE_ITEM_GROUP,
          users: r,
          auditLogDetails: s
        };
      }
      function p(e, r, o, n, i, a) {
        const s = a || void 0;
        return {
          ...(n && n.length ? { groups: n } : {}),
          ...(o && o.length ? { users: o } : {}),
          ...(i && i.length ? { itemsForEmailing: i } : {}),
          revision: r,
          groupId: e,
          sharingVersion: t.SHARING_VERSION,
          type: t.INVITE_ITEM_GROUP_MEMBERS,
          auditLogDetails: s
        };
      }
      function m(e, r, o, n, i, a = "manual") {
        const s = i || void 0;
        return {
          ...(n && n.length ? { groups: n } : {}),
          ...(o && o.length ? { users: o } : {}),
          groupId: e,
          revision: r,
          sharingVersion: t.SHARING_VERSION,
          type: t.REVOKE_ITEM_GROUP_MEMBERS,
          auditLogDetails: s,
          origin: a
        };
      }
      function g(e, r, o, n) {
        return {
          ...(n && n.length ? { groups: n } : {}),
          ...(o && o.length ? { users: o } : {}),
          groupId: e,
          revision: r,
          sharingVersion: t.SHARING_VERSION,
          type: t.UPDATE_ITEM_GROUP_MEMBERS
        };
      }
      async function E(e, t, r) {
        const o = r
          ? await (async function (e, t, r) {
              const o = await (0, a.makeCryptoService)(),
                n = c.encode(e),
                s = await o.symmetricEncryption.signHmacSHA256(t, n);
              return (
                await (0, i.validateProposeSignature)("[ItemGroupService] - makeUserUpdatePublicKey", o, t, s, n),
                { groupKey: await o.asymmetricEncryption.encrypt(r, t), proposeSignature: s }
              );
            })(e, r.rawItemGroupKey, r.userPublicKey)
          : {};
        return { ...o, permission: t, userId: e };
      }
      function A(e, t) {
        return { permission: t, groupId: e };
      }
      async function I(e, t, r, o, n) {
        const s = await (0, a.makeCryptoService)(),
          d = t && t.login && t.publicKey,
          l = d ? t.login : e,
          u = d ? {} : { proposeSignatureUsingAlias: !0 },
          S = d ? { groupKey: await s.asymmetricEncryption.encrypt(t.publicKey, n) } : {},
          p = c.encode(l),
          m = await s.symmetricEncryption.signHmacSHA256(n, p);
        return (
          await (0, i.validateProposeSignature)("[ItemGroupService] - makeUserUpload", s, n, m, p),
          {
            ...(t.privateKey ? { acceptSignature: await v(r, n, t.privateKey) } : {}),
            ...u,
            ...S,
            alias: e,
            permission: o,
            proposeSignature: m,
            userId: l
          }
        );
      }
      async function y(e, t, r, o, n, d) {
        const { groupId: l } = e,
          u = await (0, a.makeCryptoService)();
        if (!(e.users || []).find((e) => e.userId === n))
          throw new Error("[ItemGroupService] - makeUserGroupInvite: Trying to share an item to a userGroup that I'm not part of.");
        const S = await (0, s.getUserGroupPrivateKey)(e, o, n),
          p = await u.asymmetricEncryption.encrypt(e.publicKey, r),
          m = c.encode(l),
          g = await u.symmetricEncryption.signHmacSHA256(r, m);
        return (
          await (0, i.validateProposeSignature)("[ItemGroupService] - makeUserGroupInvite", u, r, g, m),
          { groupId: l, permission: t, groupKey: p, proposeSignature: g, acceptSignature: await v(d, r, S) }
        );
      }
      async function v(e, t, r) {
        const o = await (0, a.makeCryptoService)(),
          n = c.encode(`${e}-accepted-${t}`);
        return await o.asymmetricEncryption.sign(r, n);
      }
      (t.ACCEPT_ITEM_GROUP = "acceptItemGroup"),
        (t.CREATE_ITEM_GROUP = "createItemGroup"),
        (t.CREATE_SPECIAL_ITEM_GROUP = "createUserGroupsItemGroup"),
        (t.DELETE_ITEM_GROUP = "deleteItemGroup"),
        (t.INVITE_ITEM_GROUP_MEMBERS = "inviteItemGroupMembers"),
        (t.REFUSE_ITEM_GROUP = "refuseItemGroup"),
        (t.REVOKE_ITEM_GROUP_MEMBERS = "revokeItemGroupMembers"),
        (t.SHARING_VERSION = 4),
        (t.UPDATE_ITEM_GROUP_MEMBERS = "updateItemGroupMembers"),
        (t.makeItemGroupService = function (e, r) {
          return {
            makeCreateSpecialItemGroupEvent: (e, a, s) =>
              (async function (e, r, a, s) {
                const c = (0, o.generateItemUuid)(),
                  [l, u] = await Promise.all([e.symmetricEncryption.generateNewAESKey(), d(e, r, a)]),
                  S = await e.symmetricEncryption.decryptAES256(u, a.privateKey),
                  [p, m, g] = await Promise.all([
                    e.asymmetricEncryption.encrypt(a.publicKey, l),
                    (0, i.generateProposeSignature)(e, l, a.groupId),
                    (0, i.generateAcceptSignature)(e, S, c, l)
                  ]),
                  E = {
                    type: t.CREATE_SPECIAL_ITEM_GROUP,
                    sharingVersion: t.SHARING_VERSION,
                    groupId: c,
                    teamId: a.teamId,
                    alias: r.login,
                    groups: [{ groupId: a.groupId, permission: "admin", groupKey: p, proposeSignature: m, acceptSignature: g }]
                  };
                return s.length && (E.items = await (0, n.createItemsForUserGroups)(e, l, s)), E;
              })(r, e, a, s),
            makeCreateItemGroupEvent: S,
            makeInviteItemGroupMembers: p,
            makeUpdateItemGroupMembers: g,
            makeUserUpdate: E,
            makeUserGroupUpdate: A,
            makeUserUpload: I,
            makeUserGroupInvite: y,
            createSpecialItemGroup: ({ login: t, uki: r }, o) => e.itemGroup.createSpecialItemGroup(t, r, o),
            makeDeleteItemGroupEvent: (e, r) =>
              (async function (e, r) {
                return { type: t.DELETE_ITEM_GROUP, sharingVersion: t.SHARING_VERSION, groupId: e, revision: r };
              })(e, r),
            deleteItemGroup: ({ login: t, uki: r }, o) =>
              (function (e, t, r, o) {
                return e.itemGroup
                  .deleteGroup(t, r, o)
                  .then(({ itemGroups: e }) => e)
                  .catch((n) => {
                    if ("Conflict" === n.message)
                      return (function (e, t, r, o) {
                        const n = { type: "getSharing", sharingVersion: 4, userGroupIds: o };
                        return e.sharing.get(t, r, n).then(({ itemGroupErrors: e, itemGroups: t }) => {
                          if (e && e.length) throw new Error(e[0].message);
                          return t;
                        });
                      })(e, t, r, [o.groupId]).then((n) => {
                        const [{ revision: i, teamId: a }] = n;
                        return a ? e.itemGroup.deleteGroup(t, r, { ...o, revision: i }).then(({ itemGroups: e }) => e) : n;
                      });
                    throw n;
                  });
              })(e, t, r, o),
            makeAcceptItemGroupEvent: l,
            makeRefuseItemGroupEvent: u,
            makeRevokeItemGroupMembers: m
          };
        });
    },
    310294: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeItemService = t.SHARING_VERSION = t.UPDATE_ITEM = t.ADD_ITEMS = t.REMOVE_ITEMS = void 0);
      const o = r(453576),
        n = r(736513);
      async function i(e, t, r) {
        return { itemId: e, itemKey: t, content: r };
      }
      function a(e) {
        const t = (0, o.isCredential)(e) ? "password" : "note";
        return { type: t, name: e.Title || `Untitled ${t}` };
      }
      async function s(e, r, o) {
        return { type: t.ADD_ITEMS, sharingVersion: t.SHARING_VERSION, revision: r, groupId: e, items: o };
      }
      async function c(e, r, o) {
        if (!o) throw new Error("Missing payload. See method documentation.");
        const { item: i, itemId: a, itemContent: s } = o;
        if (!(i || (a && s))) throw new Error("insufficient arguments: item or (itemId and content) must be provided.");
        if (i && (a || s)) throw new Error("item and (itemId | content) cannot both be provided");
        const c = (0, n.makeSymmetricEncryption)(),
          d = s ?? (await c.encryptSharingItem(r, i));
        return { type: t.UPDATE_ITEM, sharingVersion: t.SHARING_VERSION, itemId: a ?? i?.Id, content: d, timestamp: e };
      }
      (t.REMOVE_ITEMS = "removeItems"), (t.ADD_ITEMS = "addItems"), (t.UPDATE_ITEM = "updateItem"), (t.SHARING_VERSION = 4);
      const d = (e, t, r, o) => e.itemGroup.updateItem(t, r, o);
      function l(e, t, r, o) {
        return e.itemGroup.addItems(t, r, o);
      }
      const u = (e, r, o) =>
          Promise.resolve({ type: t.REMOVE_ITEMS, sharingVersion: t.SHARING_VERSION, groupId: e, revision: r, items: [...o] }),
        S = (e, t, r, o) => e.itemGroup.removeItems(t, r, o);
      t.makeItemService = function () {
        return {
          makeItemUpload: i,
          makeAddItemsEvent: s,
          makeItemForEmailing: a,
          addItems: l,
          makeUpdateItemEvent: c,
          updateItem: d,
          makeRemoveItemsEvent: u,
          removeItems: S
        };
      };
    },
    658107: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSharingUsersFromItemGroups =
          t.doesItemGroupExistInSpace =
          t.findUserGroupItemGroups =
          t.findUserGroup =
          t.findMyAcceptedUserGroups =
          t.findMyAcceptedItemGroupUserMembers =
          t.getRecipientsCount =
          t.getUserRecipients =
          t.getGroupRecipients =
          t.doesUserReceiveItemGroupViaGroup =
          t.isUserLastAdmin =
          t.getDecipheredItemKey =
          t.isItemWithoutItemGroup =
          t.isItemGroupAccepted =
          t.getItemGroupPendingUserMember =
          t.decryptItemKey =
          t.getSharingUserPermission =
          t.getUserGroupPermission =
          t.getMyItemGroups =
          t.findItem =
          t.isCollectionUserGroupProposeSignatureValid =
          t.isUserGroupUserProposeSignatureValid =
          t.areCollectionUsersProposeSignaturesValid =
          t.areUserGroupUsersProposeSignaturesValid =
          t.getDecryptedUserGroupKey =
          t.isUserGroupPersonalSignatureValid =
          t.isGroupSignatureValid =
          t.decryptUserGroupPrivateKey =
          t.getCollectionPrivateKeyForUser =
          t.getCollectionPrivateKeyForUserGroup =
          t.getUserGroupPrivateKey =
          t.decryptGroupKey =
          t.getDecryptedItemGroupKeyFromCollectionMemberViaUserGroup =
          t.getDecryptedPrivateCollectionKeyFromUserGroup =
          t.getDecryptedItemGroupKeyFromCollectionMemberAsUser =
          t.getDecryptedItemGroupKeyFromUserGroupMember =
          t.getDecryptedItemGroupKeyFromUser =
          t.getItemGroupKey =
          t.findMyItemGroupCollectionMemberAsUser =
          t.findMyItemGroupCollectionMemberViaUserGroup =
          t.findMyItemGroupUserGroupMember =
          t.findMyItemGroupUser =
          t.getItemGroupActiveUserGroupMembers =
          t.isLastActiveUserInItemGroupAndAdmin =
          t.userMemberIsAdmin =
            void 0);
      const o = r(401067),
        n = r(882366),
        i = r(736513),
        a = r(749551),
        s = r(719736),
        c = r(381438),
        d = r(471646),
        l = r(670252),
        u = r(416593),
        S = r(395458),
        p = r(493513),
        m = (e) => ["accepted", "pending"].includes(e.status);
      function g(e, t) {
        const { users: r } = e;
        return (r || []).find((e) => e.userId === t);
      }
      function E(e, t, r) {
        const o = (t || []).filter((e) => (e.users || []).map((e) => e.userId).includes(r)).map((e) => e.groupId);
        return (e.groups || []).filter((e) => "accepted" === e.status).find((e) => o.includes(e.groupId));
      }
      function A(e, t, r, o) {
        if (!o) return null;
        try {
          const n = (e) =>
              (e.userGroups || [])
                .flatMap((e) => t.find((t) => t.groupId === e.uuid)?.users)
                .filter((e) => void 0 !== e)
                .find((e) => "accepted" === e.status && e.userId === r),
            i = o.filter(n);
          if (0 === i.length) return null;
          const a = i.map((e) => e.uuid),
            s = (e.collections || []).filter((e) => "accepted" === e.status).find((e) => a.includes(e.uuid));
          if (!s) return null;
          const c = o.find((e) => e.uuid === s.uuid);
          if (!c) return null;
          const d = c.userGroups.map((e) => e.uuid),
            l = t.find((e) => d.includes(e.groupId));
          return l ? { userGroup: l, member: s } : null;
        } catch (e) {
          const t = new Error(`[SharingSync] - find collection member failed: ${e}`);
          return (0, l.sendExceptionLog)({ error: t }), null;
        }
      }
      function I(e, t, r) {
        if (!r) return null;
        try {
          const o = (e) => (e.users || []).map((e) => e.login).includes(t),
            n = r.filter(o).map((e) => e.uuid);
          return (e.collections || []).filter((e) => "accepted" === e.status).find((e) => n.includes(e.uuid));
        } catch (e) {
          const t = new Error(`[SharingSync] - find collection member failed: ${e}`);
          return (0, l.sendExceptionLog)({ error: t }), null;
        }
      }
      async function y(e, t) {
        try {
          return await C(e.groupKey, t);
        } catch {
          return null;
        }
      }
      async function v(e, t, r, o) {
        const n = (t || []).find((t) => t.groupId === e.groupId);
        if (!n) return null;
        try {
          const t = await O(n, r, o);
          return await C(e.groupKey, t);
        } catch {
          return null;
        }
      }
      async function T(e, t, r, o) {
        if (!o) return null;
        try {
          const n = o.find((t) => t.uuid === e.uuid);
          if (!n) return null;
          const i = await D(n, t, r);
          return await C(e.itemGroupKey, i);
        } catch (e) {
          const t = new Error(`[SharingSync] - decrypt collection member item group key failed: ${e}`);
          return (0, l.sendExceptionLog)({ error: t }), null;
        }
      }
      async function _(e, t, r, o) {
        const n = await O(t, r, o);
        return await h(e, n, t.groupId);
      }
      async function f(e, t, r, o, n) {
        if (!n) return null;
        try {
          const i = n.find((t) => t.uuid === e.uuid);
          if (!i) return null;
          const a = await _(i, t, r, o);
          return await C(e.itemGroupKey, a);
        } catch (e) {
          const t = new Error(`[SharingSync] - decrypt collection member item group key failed: ${e}`);
          return (0, l.sendExceptionLog)({ error: t }), null;
        }
      }
      async function C(e, t) {
        return (0, i.makeCryptoService)().asymmetricEncryption.decrypt(t, e);
      }
      async function O(e, t, r) {
        const o = e.users.find((e) => e.userId === r).groupKey,
          n = await C(o, t);
        return R(e.privateKey, n);
      }
      async function h(e, t, r) {
        const o = e.userGroups.find((e) => e.uuid === r).collectionKey,
          n = await C(o, t);
        return R(e.privateKey, n);
      }
      async function D(e, t, r) {
        const o = e.users.find((e) => e.login === r).collectionKey,
          n = await C(o, t);
        return R(e.privateKey, n);
      }
      async function R(e, t) {
        return (0, i.makeCryptoService)().symmetricEncryption.decryptAES256(t, e);
      }
      async function N(e, t, r, o) {
        const a = p.encode(`${e}-accepted-${r}`);
        return (0, n.isAcceptSignatureValid)((0, i.makeCryptoService)(), t, o, a);
      }
      async function P(e, t) {
        let r = "";
        "userId" in e ? (r = e.userId) : "login" in e && (r = e.login);
        try {
          return await (0, i.makeCryptoService)().symmetricEncryption.verifyHmacSHA256(t, e.proposeSignature, p.encode(r));
        } catch {
          return !1;
        }
      }
      async function L(e, t) {
        try {
          return await (0, i.makeCryptoService)().symmetricEncryption.verifyHmacSHA256(t, e.proposeSignature, p.encode(e.uuid));
        } catch {
          return !1;
        }
      }
      async function U(e, t) {
        return (0, i.makeCryptoService)().symmetricEncryption.decryptAES256(t, e);
      }
      function M(e, t) {
        const { itemGroups: r } = e,
          o = r.find((e) => (e.items || []).some((e) => e.itemId === t));
        return o ? (o.groups || []).filter((e) => !["revoked", "refused"].includes(e.status)) : [];
      }
      function B(e, t) {
        const { itemGroups: r } = e,
          o = r.find((e) => (e.items || []).some((e) => e.itemId === t));
        return o ? (o.users || []).filter((e) => !["revoked", "refused"].includes(e.status)) : [];
      }
      function G(e, t, r) {
        const o = t.items?.some((o) => {
          const n = (0, s.credentialSelector)(e, o.itemId) ?? (0, c.noteSelector)(e, o.itemId);
          return void 0 === n
            ? ((function (e, t, r, o) {
                try {
                  const n = ["[doesItemGroupExistInSpace] Undefined item found", `ItemGroup has ${e.items.length} items`];
                  if (e.items.length > 1) {
                    const i = e.items.filter((e) => e.itemId !== t.itemId),
                      a = i.reduce((e, t) => {
                        const n = (0, s.credentialSelector)(r, t.itemId) ?? (0, c.noteSelector)(r, t.itemId);
                        return n && n.SpaceId === o ? e + 1 : e;
                      }, 0),
                      d = i.length - a;
                    n.push(`${a} other items in itemGroup are in the active space`),
                      n.push(`${d} other items in itemGroup are not in the active space`);
                  }
                  (0, u.activeSpacesSelector)(r).some((e) => e && e.teamId === o && (0, S.isPremiumStatusSpaceQuarantined)(e)) &&
                    n.push("Active space is quarantined"),
                    null === t.itemKey && n.push("Item Key is null"),
                    void 0 === t.itemKey && n.push("Item Key is undefined"),
                    "" === t.itemKey && n.push("Item Key is an empty string"),
                    null === t.itemId && n.push("Item ID is null"),
                    void 0 === t.itemId && n.push("Item ID is undefined"),
                    "" === t.itemId && n.push("Item ID is an empty string"),
                    (0, l.sendExceptionLog)({ error: new Error(n.join("\n")) });
                } catch (e) {
                  (0, l.sendExceptionLog)({ error: e });
                }
              })(t, o, e, r),
              !0)
            : n.SpaceId !== r;
        });
        return !o;
      }
      (t.userMemberIsAdmin = (e) => "accepted" === e.status && "admin" === e.permission),
        (t.isLastActiveUserInItemGroupAndAdmin = function (e, r) {
          const o = e.collections;
          if (o && o.length > 0) return !1;
          const { users: n, groups: i } = e,
            a = !i || 0 === i.filter(m).length,
            s = n && 1 === n.filter(m).length && n[0].userId === r && (0, t.userMemberIsAdmin)(n[0]);
          return a && s;
        }),
        (t.getItemGroupActiveUserGroupMembers = function (e) {
          return (e.groups || []).filter(m);
        }),
        (t.findMyItemGroupUser = g),
        (t.findMyItemGroupUserGroupMember = E),
        (t.findMyItemGroupCollectionMemberViaUserGroup = A),
        (t.findMyItemGroupCollectionMemberAsUser = I),
        (t.getItemGroupKey = async function (e, t, r, o, n) {
          const i = g(e, o),
            a = E(e, t, o),
            s = I(e, o, n),
            c = A(e, t, o, n);
          return i || a || s || c
            ? i
              ? await y(i, r)
              : a
              ? await v(a, t, r, o)
              : s
              ? await T(s, r, o, n)
              : c
              ? await f(c.member, c.userGroup, r, o, n)
              : null
            : null;
        }),
        (t.getDecryptedItemGroupKeyFromUser = y),
        (t.getDecryptedItemGroupKeyFromUserGroupMember = v),
        (t.getDecryptedItemGroupKeyFromCollectionMemberAsUser = T),
        (t.getDecryptedPrivateCollectionKeyFromUserGroup = _),
        (t.getDecryptedItemGroupKeyFromCollectionMemberViaUserGroup = f),
        (t.decryptGroupKey = C),
        (t.getUserGroupPrivateKey = O),
        (t.getCollectionPrivateKeyForUserGroup = h),
        (t.getCollectionPrivateKeyForUser = D),
        (t.decryptUserGroupPrivateKey = R),
        (t.isGroupSignatureValid = N),
        (t.isUserGroupPersonalSignatureValid = async function (e, t, r, o) {
          try {
            return await N(e, t, r, o);
          } catch {
            return !1;
          }
        }),
        (t.getDecryptedUserGroupKey = async function (e, t) {
          try {
            return await C(e, t);
          } catch {
            return null;
          }
        }),
        (t.areUserGroupUsersProposeSignaturesValid = async function (e, t) {
          const r = (e || []).filter(({ status: e }) => ["pending", "accepted"].includes(e)).map((e) => P(e, t));
          return (await Promise.all(r)).every(Boolean);
        }),
        (t.areCollectionUsersProposeSignaturesValid = async function (e, t) {
          const { userGroups: r, users: o } = e,
            n = (o || []).filter(({ status: e }) => ["pending", "accepted"].includes(e)).map((e) => P(e, t)),
            i = (r || []).filter(({ status: e }) => ["pending", "accepted"].includes(e)).map((e) => L(e, t)),
            a = await Promise.all(n),
            s = await Promise.all(i);
          return a.every(Boolean) && s.every(Boolean);
        }),
        (t.isUserGroupUserProposeSignatureValid = P),
        (t.isCollectionUserGroupProposeSignatureValid = L),
        (t.findItem = function (e, t) {
          const { credentials: r, notes: o } = e.getPersonalData(),
            n = [...r, ...o];
          return (0, a.findDataModelObject)(t, n);
        }),
        (t.getMyItemGroups = function (e, t) {
          const r = e.userGroups.filter((e) => e.users.some((e) => e.userId === t && "accepted" === e.status)),
            o = new Set(r.map((e) => e.groupId));
          return e.itemGroups.filter((e) => {
            const r = e.users && e.users.some((e) => e.userId === t),
              n = e.groups && e.groups.some((e) => o.has(e.groupId));
            return r || n;
          });
        }),
        (t.getUserGroupPermission = function (e, t) {
          return (e.groups || []).find((e) => e.groupId === t)?.permission;
        }),
        (t.getSharingUserPermission = function (e, t) {
          return (e.users || []).find((e) => e.userId === t)?.permission;
        }),
        (t.decryptItemKey = U),
        (t.getItemGroupPendingUserMember = function (e, t) {
          return (e.users || []).find((e) => e.userId === t && "pending" === e.status);
        }),
        (t.isItemGroupAccepted = function (e, t, r, o) {
          return (
            !!(function (e, t, r, o) {
              if (!o) return !1;
              try {
                const n = (e.collections || []).filter((e) => "accepted" === e.status && e.acceptSignature).map((e) => e.uuid),
                  i = o.filter((e) => n.includes(e.uuid));
                return (
                  !!i.flatMap((e) => e.users).some((e) => e.acceptSignature && e.login === r) ||
                  i
                    .flatMap((e) => e.userGroups)
                    .map((e) => t.find((t) => t.groupId === e.uuid))
                    .filter((e) => void 0 !== e)
                    .some((e) => (e.users || []).some((e) => e.userId === r && "accepted" === e.status && Boolean(e.acceptSignature)))
                );
              } catch (e) {
                const t = new Error(`[SharingSync] - item group accepted check failed: ${e}`);
                return (0, l.sendExceptionLog)({ error: t }), !1;
              }
            })(e, t, r, o) ||
            !!(function (e, t) {
              return (e.users || []).some((e) => e.userId === t && "accepted" === e.status && Boolean(e.acceptSignature));
            })(e, r) ||
            (function (e, t, r) {
              const o = (e.groups || []).filter((e) => "accepted" === e.status && e.acceptSignature).map((e) => e.groupId),
                n = t.filter((e) => o.includes(e.groupId));
              return n.some((e) => (e.users || []).some((e) => e.userId === r && "accepted" === e.status && Boolean(e.acceptSignature)));
            })(e, t, r)
          );
        }),
        (t.isItemWithoutItemGroup = function (e, t) {
          return !(0, d.findItemItemGroup)(e, t);
        }),
        (t.getDecipheredItemKey = async function (e, t, r) {
          const o = await C(e, r);
          try {
            return await U(t, o);
          } catch (e) {
            return;
          }
        }),
        (t.isUserLastAdmin = function (e, t) {
          const r = (function (e) {
              return (e.users || []).filter(
                ({ permission: e, rsaStatus: t, status: r }) => "admin" === e && "sharingKeys" === t && "accepted" === r
              );
            })(e),
            o = (function (e) {
              return (e.groups || []).filter(({ permission: e, status: t }) => "admin" === e && "accepted" === t);
            })(e),
            n = r.some((e) => e.userId === t),
            i = r.filter(({ userId: e }) => t !== e),
            a = o.length + i.length > 0;
          return n && !a;
        }),
        (t.doesUserReceiveItemGroupViaGroup = function (e, t, r) {
          const o = t.filter(({ users: e }) => (e || []).some((e) => e.userId === r && "accepted" === e.status)).map(({ groupId: e }) => e);
          return (e.groups || []).some(({ groupId: e, status: t }) => o.includes(e) && "accepted" === t);
        }),
        (t.getGroupRecipients = M),
        (t.getUserRecipients = B),
        (t.getRecipientsCount = function (e, t) {
          return B(e, t).length + M(e, t).length;
        }),
        (t.findMyAcceptedItemGroupUserMembers = function (e, t) {
          const r = e.map((e) => e.users || []),
            n = (0, o.unnest)(r);
          return (0, o.uniqBy)((e) => e.userId, n).filter((e) => e.alias !== t);
        }),
        (t.findMyAcceptedUserGroups = function (e, t) {
          return e.filter((e) => "users" === e.type && (e.users || []).some((e) => e.userId === t && "accepted" === e.status));
        }),
        (t.findUserGroup = function (e, t) {
          return e.find((e) => e.groupId === t);
        }),
        (t.findUserGroupItemGroups = function (e, t) {
          return t.filter((t) => (t.groups || []).some((t) => t.groupId === e && "accepted" === t.status));
        }),
        (t.doesItemGroupExistInSpace = G),
        (t.getSharingUsersFromItemGroups = (e, t, r, o) => {
          const n = r.reduce(
            (r, n) =>
              null === o || G(e, n, o)
                ? ((0, d.getItemGroupActiveUsers)(n).forEach((e) => {
                    if (e.userId !== t)
                      if (r.has(e.userId)) {
                        const t = r.get(e.userId);
                        r.set(e.userId, { ...e, itemCount: t.itemCount + n.items.length });
                      } else r.set(e.userId, { ...e, itemCount: n.items.length });
                  }),
                  r)
                : r,
            new Map()
          );
          return Array.from(n.values());
        });
    },
    478096: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.prepareOperations = t.revokeRemoteControlledSharedItems = void 0);
      const o = r(660765),
        n = r(17825),
        i = r(670252),
        a = r(290622),
        s = r(416593),
        c = r(311700),
        d = r(657989),
        l = r(368979),
        u = r(57779),
        S = r(684511),
        p = r(352102),
        m = r(658107),
        g = r(471646),
        E = r(795623),
        A = (0, E.withTag)(["Sharing", "RemoteControl"]),
        I = A(E.logError),
        y = A(E.logInfo),
        v = A(E.logVerbose),
        T = (e) => (t) => t._tag === e,
        _ = (e) => {
          const t = e.filter(T("revoke_all_itemgroup_members")).length,
            r = e.filter(T("refuse_pending_itemgroup")).length,
            o = e.filter(T("revoke_my_itemgroup_membership")).length;
          return {
            operationsCount: { all: e.length, revokeAllItemGroupMembers: t, refusePendingItemGroup: r, revokeMyItemGroupMembership: o }
          };
        };
      function f(e, t, r, o, n, i) {
        const a = (function (e, t, r) {
            return r.reduce((r, o) => {
              const n = (0, m.findMyItemGroupUser)(o, t);
              if (!n) return r;
              const i = (function (e, t, r) {
                return (0, m.isUserLastAdmin)(r, t.userId)
                  ? (function (e, t, r) {
                      const { groupId: o, revision: n } = r,
                        i = (0, g.getItemGroupActiveUsers)(r)
                          .filter((e) => e.userId !== t.userId)
                          .map((e) => e.userId),
                        a = (0, m.getItemGroupActiveUserGroupMembers)(r).map((e) => e.groupId),
                        s = e.makeRevokeItemGroupMembers(o, n, i, a, void 0),
                        c = [...i.map((e) => ({ type: "user", alias: e })), ...a.map((e) => ({ type: "userGroup", groupId: e }))];
                      return { _tag: "revoke_all_itemgroup_members", action: s, recipients: c };
                    })(e, t, r)
                  : (function (e, t, r) {
                      const { groupId: o, revision: n } = r,
                        i = e.makeRefuseItemGroupEvent(o, n, null),
                        a = { type: "user", alias: t.alias },
                        s = (0, m.userMemberIsAdmin)(t) ? r.items.map((e) => e.itemId) : [];
                      return { _tag: "revoke_my_itemgroup_membership", action: i, recipient: a, itemsToDuplicate: s };
                    })(e, t, r);
              })(e, n, o);
              return r.concat(i);
            }, []);
          })(e, o, n.map((e) => (0, g.findItemItemGroup)(e, r)).filter(Boolean)),
          s = (function (e, t) {
            return t.filter((t) =>
              t.items.some((t) => {
                if (!(0, c.isItemForceCategorizable)(t)) return !1;
                const r = e.map((e) => e.details),
                  o = (0, c.pickBestTeamSpaceForForcedCategorization)(r, t, []);
                return Boolean(o) && o.domainsMatchResult === l.TeamDomainsMatchResult.SomeFieldsMatch;
              })
            );
          })(t, i),
          d = (function (e, t, r, o) {
            return o.reduce((o, { itemGroupId: n }) => {
              const i = t.find((e) => e.groupId === n);
              if (!i) return o;
              const a = (0, m.findMyItemGroupUser)(i, r);
              if (!a) return o;
              const s = (function (e, t, r) {
                const { groupId: o, revision: n } = r;
                return {
                  _tag: "refuse_pending_itemgroup",
                  action: e.makeRefuseItemGroupEvent(o, n, null),
                  recipient: { type: "user", alias: t.alias }
                };
              })(e, a, i);
              return o.concat(s);
            }, []);
          })(e, r, o, s);
        return [...a, ...d];
      }
      async function C(e, t, r, o) {
        const { action: n } = o;
        await e.itemGroup.refuseItemGroup(t, r, n);
      }
      (t.revokeRemoteControlledSharedItems = async function (e, t, r, c, l) {
        y({ message: "Starting remote control process" });
        try {
          const { hiddenItemIds: m } = l,
            g = t.getState(),
            E = (0, s.userLoginSelector)(g),
            A = (0, d.spacesWithForcedCategorizationEnabledSelector)(g),
            { itemGroups: I } = (0, p.sharingDataSelector)(g),
            T = f(c, A, I, E, m, (0, S.pendingItemGroupsSelector)(g));
          v({ message: "Remote control operations computed", details: _(T) }),
            await (async function (e, t, r, o) {
              const s = e.getState(),
                c = (0, a.ukiSelector)(s),
                d = o.map((o) =>
                  (async function (e, t, r, o, a) {
                    try {
                      switch (a._tag) {
                        case "refuse_pending_itemgroup":
                          return await C(t, r, o, a);
                        case "revoke_my_itemgroup_membership": {
                          await C(t, r, o, a);
                          const { itemsToDuplicate: n } = a;
                          for (const t of n) await (0, u.duplicateNoteOrCredential)(e, t);
                          return;
                        }
                        case "revoke_all_itemgroup_members":
                          return await (async function (e, t, r, o) {
                            const { action: n } = o;
                            await e.itemGroup.revokeItemGroupMembers(t, r, n);
                          })(t, r, o, a);
                        default:
                          (0, n.assertUnreachable)(a);
                      }
                    } catch (e) {
                      const t = new Error(`[SharingRemoteControl] - sendRequestForOperation: ${e}`);
                      (0, i.sendExceptionLog)({ error: t });
                    }
                  })(e, t, r, c, o)
                );
              await Promise.all(d);
            })(t, r, E, T),
            (async function (e, { deletedItemIds: t, updatedItemIds: r }, n) {
              const i = t.length > 0 || r.length > 0,
                a = n.length > 0;
              (i || a) && e.getInstance().user.requestNewSync(o.Trigger.ChangeTeam);
            })(e, l, T),
            y({ message: "Remote control process done" });
        } catch (e) {
          const t = new Error(`[SharingRemoteControl] - revokeRemoteControlledSharedItems: ${e}`);
          (0, i.sendExceptionLog)({ error: t }), I({ message: "Remote control process failed", details: { error: `${e}` } });
        }
      }),
        (t.prepareOperations = f);
    },
    184163: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deleteSingleUserItemGroup =
          t.resendPublicKeyInvite =
          t.updateSharingData =
          t.getPendingItemGroup =
          t.createOrUpdateItemEffect =
          t.deleteItemEffect =
            void 0);
      const o = r(401067),
        n = r(518948),
        i = r(453576),
        a = r(419562),
        s = r(183769),
        c = r(736513),
        d = r(448313),
        l = r(795623),
        u = r(176496),
        S = r(645291),
        p = r(958639),
        m = r(334433),
        g = r(736884),
        E = r(663698),
        A = r(889016),
        I = r(670252),
        y = r(488542),
        v = r(772079),
        T = r(57779),
        _ = r(176496),
        f = r(250141),
        C = r(658107),
        O = r(749551),
        h = r(239373),
        D = r(656915),
        R = r(412362),
        N = r(986691),
        P = r(673566),
        L = r(656915),
        U = r(885225),
        M = r(882366);
      function B(e, t, r) {
        const n = (0, o.pick)(e, r);
        return (0, o.mergeRight)(t, n);
      }
      (t.deleteItemEffect = async function (e, t) {
        try {
          const { itemToDelete: r } = (0, u.findPersonalDataItemToDelete)(e, t);
          if (!r) return !0;
          const o = (0, S.removePersonalItem)(r.kwType, r.Id, null);
          return e.dispatch(o), !0;
        } catch (e) {
          return l.default.log(`[SharingSync]: deleteItemEffect: ${e}`), !1;
        }
      }),
        (t.createOrUpdateItemEffect = async function (e, t, r) {
          let o = null;
          const n = (0, R.getInstance)(),
            a = (0, N.getInstance)();
          try {
            const s = await (0, c.makeCryptoService)().symmetricEncryption.decryptSharingItem(r, t.content),
              { Id: l } = s,
              u = e.getPersonalData(),
              S = (0, L.platformInfoSelector)(e.getState());
            if ((0, i.isCredential)(s)) {
              o = a.lockTopic("iconsUpdates");
              const t = l ? (0, O.findDataModelObject)(l, u.credentials || []) : null,
                r = t ? B(y.sharedFields, t, s) : s,
                c = { credentialIds: [r.Id], type: "credentialUpdates" };
              await n.add("iconsUpdates", c);
              const p = (0, P.getUpdatedItemChangeHistory)({
                  deviceName: e.getLocalSettings().deviceName,
                  personalData: u,
                  change: (0, U.makeUpdateChange)(r),
                  userLogin: e.getUserLogin(),
                  platformInfo: S
                }),
                m = (0, d.savePersonalDataItem)(r, i.DataModelType.KWAuthentifiant, p);
              e.dispatch(m), a.releaseTopic("iconsUpdates", o);
            } else if ((0, i.isNote)(s)) {
              const t = l ? (0, O.findDataModelObject)(l, u.notes || []) : null,
                r = t ? B(v.sharedFields, t, s) : s,
                o = (0, d.savePersonalDataItem)(r, i.DataModelType.KWSecureNote);
              e.dispatch(o);
            }
            return !0;
          } catch (e) {
            return l.default.log(`[SharingSync] - createOrUpdateItemEffect: ${e}`), o && a.releaseTopic("iconsUpdates", o), !1;
          }
        }),
        (t.getPendingItemGroup = async function (e, t, r, o, n, a) {
          let s;
          if (e.content) {
            const r = (0, c.makeCryptoService)().symmetricEncryption;
            s = await r.decryptSharingItem(t, e.content);
          } else s = a[e.itemId];
          const d = (0, i.isCredential)(s),
            l = (0, i.isNote)(s);
          if (!d && !l) throw new Error("item is neither credential nor note");
          let u = s;
          return d && (u = (0, h.fixCredentialWithMissingTitle)(s)), { itemGroupId: r, items: [u], permission: n, referrer: o, seen: !1 };
        }),
        (t.updateSharingData = function (e, t) {
          const r = (0, m.sharingDataUpdated)(t);
          e.dispatch(r), (0, p.reportDataUpdate)(e);
        }),
        (t.resendPublicKeyInvite = async function (e, t, r) {
          const o = "[SharingEffectsService] - resendPublicKeyInvite";
          try {
            const n = e.getUserLogin(),
              i = (0, D.ukiSelector)(e.getState()),
              { groupId: a, revision: s } = r,
              { privateKey: d } = e.getUserSession().keyPair,
              l = (0, c.makeCryptoService)(),
              u = (0, A.makeWSService)(),
              { findUsersByAliases: S } = (0, f.makeWSUserAlias)(),
              { makeUserUpdate: p, makeUpdateItemGroupMembers: m } = (0, g.makeItemGroupService)(u, l),
              { updateItemGroupMembers: y } = (0, E.makeItemGroupWS)(),
              v = JSON.stringify([t.userId]),
              T = (await S({ login: n, uki: i, aliases: v }))[t.userId];
            if (!T) {
              const e = `${o}: couldn't find the user by alias, aborting.`;
              return void (0, I.sendExceptionLog)({ message: e });
            }
            const _ = (r.users || []).find((e) => e.userId === n);
            if (!_) {
              const e = `${o}: couldn't find myself in "itemGroup.users", aborting.`;
              return void (0, I.sendExceptionLog)({ message: e });
            }
            const C = await l.asymmetricEncryption.decrypt(d, _.groupKey),
              { publicKey: O } = T,
              { permission: h, userId: R } = t,
              N = await p(R, h, { rawItemGroupKey: C, userPublicKey: O }),
              P = m(a, s, [N], null),
              L = await y(n, i, P);
            if (L && L.itemGroups && 1 === L.itemGroups.length) {
              const { userGroups: t } = e.getSharingData();
              await (0, M.validateItemGroupResponse)("[SharingSyncJobsService] - resendPublicKeyInvite", l, L, O, d, C, n, [N], t, !0);
            }
          } catch (e) {
            const t = new Error(`${o}: ${e}`);
            (0, I.sendExceptionLog)({ error: t });
          }
        }),
        (t.deleteSingleUserItemGroup = async function (
          { storeService: e, wsService: t, eventLoggerService: r, applicationModulesAccess: o },
          d
        ) {
          const { login: l } = e.getAccountInfo(),
            u = (0, D.ukiSelector)(e.getState()),
            {
              keyPair: { privateKey: S }
            } = e.getUserSession(),
            { groupId: p, revision: m } = d,
            E = "[SharingEffectsService] - deleteSingleUserItemGroup",
            A = (0, c.makeCryptoService)(),
            { deleteItemGroup: y, makeDeleteItemGroupEvent: v } = (0, g.makeItemGroupService)(t, A);
          if (!(0, C.isLastActiveUserInItemGroupAndAdmin)(d, l)) throw new Error(`${E}: I'm not alone in the group, aborting.`);
          if (!d.items || 0 === d.items.length) return !0;
          const f = (d.items || []).map(({ itemId: e }) => e),
            O = {};
          for (const t of f) {
            const r = await (0, T.duplicateNoteOrCredential)(e, t);
            O[t] = r;
          }
          try {
            const c = { login: l, uki: u, privateKey: S },
              d = await v(p, m);
            if (
              (await y(c, d),
              Object.keys(O)
                .filter((e) => O[e])
                .forEach((o) => {
                  (0, _.deletePersonalDataItem)({ storeService: e, wsService: t, eventLoggerService: r }, o, { ignoreSharing: !0 });
                }),
              o)
            ) {
              const { commands: e, queries: t } = o.createClients().vaultOrganization,
                r = await (0, n.firstValueFrom)(t.queryCollections({}));
              if ((0, a.isSuccess)(r) && r.data.collections?.length > 0) {
                const t = Object.keys(O).filter((e) => O[e]),
                  o = Object.keys(O)
                    .map((e) => O[e])
                    .filter(Boolean),
                  n = r.data.collections.filter((e) => e.vaultItems.some((e) => t.includes(e.id))),
                  a = { vaultItems: t.map((e) => ({ id: e, type: i.DataModelType.KWAuthentifiant })) },
                  c = { vaultItems: o.map((e) => ({ id: e, type: i.DataModelType.KWAuthentifiant })) };
                for (const t of n)
                  await e.updateCollection({ id: t.id, collection: a, operationType: s.OperationType.SUBSTRACT_VAULT_ITEMS }),
                    await e.updateCollection({ id: t.id, collection: c, operationType: s.OperationType.APPEND_VAULT_ITEMS });
              }
            }
            return !0;
          } catch (o) {
            const n = new Error(`${E}: ${o}`);
            return (
              (0, I.sendExceptionLog)({ error: n }),
              Object.keys(O)
                .map((e) => O[e])
                .filter(Boolean)
                .forEach((o) => (0, _.deletePersonalDataItem)({ storeService: e, wsService: t, eventLoggerService: r }, o)),
              !1
            );
          }
        });
    },
    378118: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEmptySharing2Summary =
          t.getEmptySharingData =
          t.getEmptyGetSharingParams =
          t.getEmptyOperations =
          t.initSharingSyncFromStorage =
          t.putSharingSyncBackInStorage =
          t.updateSharingDataFromSync =
          t.updateSharedCollectionsInModule =
          t.applyOperationsToSharingData =
          t.runOperationsEffects =
          t.setMissingItemKeys =
          t.revokeUsersFromInvalidItemGroups =
          t.shouldRunAutoRevoke =
          t.asyncFilterItemGroups =
          t.filterOutInvalidOperations =
          t.getSharing =
          t.setGetSharingParams =
          t.tagConfirmableOperations =
          t.setOperations =
          t.sanitizeData =
          t.OperationType =
          t.syncSharing =
            void 0);
      const o = r(401067),
        n = r(518948),
        i = r(453576),
        a = r(419562),
        s = r(660765),
        c = r(684827),
        d = r(947683),
        l = r(658107),
        u = r(471646),
        S = r(184163),
        p = r(795623),
        m = r(670252),
        g = r(17825),
        E = r(656915),
        A = r(732663),
        I = r(503735),
        y = r(288205),
        v = !1;
      function T(e, t) {
        return v
          ? (...r) => (console.time(e), t(...r).then((t) => (p.default.warn(`Step "${e}" returned:`, t), console.timeEnd(e), t)))
          : t;
      }
      var _;
      async function f(e) {
        const {
          sharingData: { collections: t, items: r, itemGroups: o, userGroups: n },
          sharing2Summary: { collections: i, items: a, itemGroups: s, userGroups: c }
        } = e;
        return {
          ...e,
          sharingData: {
            collections: C(t, "sharingData.collections"),
            items: C(r, "sharingData.items"),
            itemGroups: C(o, "sharingData.itemGroups"),
            userGroups: C(n, "sharingData.userGroups")
          },
          sharing2Summary: {
            collections: C(i, "sharing2Summary.collections"),
            items: C(a, "sharing2Summary.items"),
            itemGroups: C(s, "sharing2Summary.itemGroups"),
            userGroups: C(c, "sharing2Summary.userGroups")
          }
        };
      }
      function C(e, t, r) {
        const o = (function (e, t) {
          return (r) => {
            if (e(r)) return !0;
            const o = `[SharingSync] - sanitizeList: found invalid element "${r}" in "${t}", filtering it out.`;
            return (0, m.sendExceptionLog)({ message: o }), !1;
          };
        })(r || Boolean, t);
        return (e || []).filter(o);
      }
      async function O(e) {
        const { sharingData: t, personalDataItemIds: r } = e,
          o = h(t.items, e.sharing2Summary.items, "itemId", "timestamp").map((e) =>
            e.type === _.Create && r.includes(e.id) ? { ...e, skipPersonalDataItemCreation: !0 } : e
          ),
          n = h(t.itemGroups, e.sharing2Summary.itemGroups, "groupId", "revision"),
          i = h(t.userGroups, e.sharing2Summary.userGroups, "groupId", "revision"),
          a = h(t.collections, e.sharing2Summary.collections, "uuid", "revision");
        return { ...e, operations: { items: o, itemGroups: n, userGroups: i, collections: a } };
      }
      function h(e, t, r, o) {
        const { elementsToCreate: n } = (function (e, t, r) {
            const o = e.map((e) => e[r]),
              n = t.map((e) => e.id),
              i = n.filter((e) => !o.includes(e));
            return { elementsToCreate: i };
          })(e, t, r),
          { elementsToUpdate: i, elementsToDelete: a } = (function (e, t, r, o) {
            const n = t.map((e) => e.id);
            return e.reduce(
              (e, i) => {
                const a = n.indexOf(i[r]);
                return a < 0
                  ? { ...e, elementsToDelete: [...e.elementsToDelete, i[r]] }
                  : t[a][o] > i[o]
                  ? { ...e, elementsToUpdate: [...e.elementsToUpdate, i[r]] }
                  : e;
              },
              { elementsToUpdate: [], elementsToDelete: [] }
            );
          })(e, t, r, o);
        return []
          .concat(n.map((e) => ({ id: e, type: _.Create })))
          .concat(i.map((e) => ({ id: e, type: _.Update })))
          .concat(a.map((e) => ({ id: e, type: _.Delete })));
      }
      async function D(e, t) {
        const {
            operations: { items: r },
            loadedElements: { collections: n, itemGroups: i, userGroups: a },
            sharingData: { collections: s, itemGroups: c, userGroups: d }
          } = e,
          u = (0, o.uniqBy)((e) => e.groupId, i.concat(c)),
          S = (0, o.uniqBy)((e) => e.groupId, a.concat(d)),
          p = (0, o.uniqBy)((e) => e.uuid, n.concat(s)),
          m = r.map((e) =>
            (function (e, t, r, o, n) {
              if (e.type !== _.Create) return e;
              const i = (r || []).find((t) => (t.items || []).map((e) => e.itemId).includes(e.id));
              if (!i) return e;
              const a = (0, l.isItemGroupAccepted)(i, o, t, n),
                s = { ...R(i, o, t), itemGroupId: i.groupId };
              return a ? e : { ...e, userConfirmationRequired: !0, confirmationItemGroup: s };
            })(e, t, u, S, p)
          );
        return { ...e, operations: { ...e.operations, items: m } };
      }
      function R(e, t, r) {
        const o = (0, l.findMyItemGroupUser)(e, r),
          n = (0, l.findMyItemGroupUserGroupMember)(e, t, r);
        if (!o && !n) return { referrer: null, permission: null };
        const { referrer: i, permission: a } = o || n;
        return { referrer: i, permission: a };
      }
      async function N(e) {
        const t = (t) => e.operations[t].filter((e) => [_.Create, _.Update].includes(e.type)).map((e) => e.id);
        return {
          ...e,
          getSharingParams: {
            collectionIds: t("collections"),
            itemIds: t("items"),
            itemGroupIds: t("itemGroups"),
            userGroupIds: t("userGroups")
          }
        };
      }
      async function P(e, t, r, o) {
        const n = Object.assign({}, e.getSharingParams, { type: "getSharing", sharingVersion: 4 });
        if (!(n.collectionIds.length || n.itemIds.length || n.itemGroupIds.length || n.userGroupIds.length)) return e;
        const {
          collections: i,
          itemErrors: a,
          items: s,
          itemGroupErrors: c,
          itemGroups: d,
          userGroupErrors: l,
          userGroups: u
        } = await t.sharing.get(r, o, n);
        if (a && a.length) throw new Error(`[SharingSync] - getSharing itemErrors: ${a[0].message}`);
        if (c && c.length) throw new Error(`[SharingSync] - getSharing itemGroupErrors: ${c[0].message}`);
        if (l && l.length) throw new Error(`[SharingSync] - getSharing userGroupErrors: ${l[0].message}`);
        return {
          ...e,
          loadedElements: {
            collections: C(i, "getSharing loaded collections"),
            items: C(s, "getSharing loaded items"),
            itemGroups: C(d, "getSharing loaded itemGroups"),
            userGroups: C(u, "getSharing loaded userGroups")
          }
        };
      }
      async function L(e, t, r, o, n) {
        const {
            sharingData: { collections: i, userGroups: a },
            loadedElements: { collections: s, itemGroups: c, userGroups: l },
            operations: { collections: u, itemGroups: S, userGroups: p }
          } = e,
          m = await (0, A.asyncFilter)(l, (e) => (0, d.isUserGroupValid)(e, t, r, o)),
          g = m.map((e) => e.groupId),
          E = p.filter((e) => e.type === _.Delete || g.includes(e.id)),
          I = m.concat(a),
          y = await (0, A.asyncFilter)(s, (e) => (0, d.isCollectionValid)(e, t, r, o, I)),
          v = y.map((e) => e.uuid),
          T = u.filter((e) => e.type === _.Delete || v.includes(e.id)),
          f = y.concat(i),
          {
            validItemGroups: C,
            itemKeys: O,
            invalidItemGroups: h
          } = await U(c, (e) =>
            (0, d.validateItemGroup)(
              e,
              I,
              t,
              r,
              o,
              (function (e, t) {
                const r = (e.collections || []).map((e) => e.uuid);
                return t.filter((e) => r.includes(e.uuid));
              })(e, f)
            )
          ),
          D = C.map((e) => e.groupId),
          R = S.filter((e) => e.type === _.Delete || D.includes(e.id));
        return (
          h &&
            h.length > 0 &&
            h.forEach((e) => {
              n?.(e.itemGroupId, e.error);
            }),
          { ...e, itemKeys: O, operations: { ...e.operations, collections: T, userGroups: E, itemGroups: R }, invalidItemGroups: h }
        );
      }
      async function U(e, t) {
        const r = await Promise.all(e.map(t));
        return {
          validItemGroups: e.filter((e, t) => r[t].isValid),
          itemKeys: r.filter((e) => e.isValid).reduce((e, t) => ({ ...e, ...t.itemKeys }), {}),
          invalidItemGroups: r.flatMap((t, r) => (!1 === t.isValid ? [{ itemGroupId: e[r].groupId, error: t.error }] : []))
        };
      }
      async function M(e, t) {
        const r = (await (0, y.makeFeatureFlipsSelectors)(e).featureFlipsSelector()).sharing_web_invalidSignatureAutoRevoke_prod,
          o = t === s.Trigger.InitialLogin || t === s.Trigger.Login;
        return r && o;
      }
      async function B(e, t, r, o, n, i, a, c) {
        if (!(await M(t, c))) return o;
        const {
            sharingData: { userGroups: l },
            loadedElements: { itemGroups: u, userGroups: S },
            invalidItemGroups: p
          } = o,
          m = p.filter((e) => e.error === s.ErrorName.ItemGroupInvalidUserProposeSignature);
        if (0 === m.length) return o;
        const g = (await (0, A.asyncFilter)(S, (e) => (0, d.isUserGroupValid)(e, n, i, a))).concat(l),
          E = m
            .map((e) => u.find(({ groupId: t }) => t === e.itemGroupId))
            .filter((e) => void 0 !== e && (0, I.isUserItemGroupAdmin)(e, l, a));
        if (0 === E.length) return o;
        const y = E.flatMap((e) => e.users.filter((e) => "pending" === e.status && e.userId !== a).map((t) => ({ itemGroup: e, user: t }))),
          v = (
            await Promise.all(
              y.map(async (e) => {
                const t = await (0, d.getDecryptedItemGroupKey)(
                  e.itemGroup,
                  (function (e, t) {
                    const r = (e.groups || []).map((e) => e.groupId);
                    return t.filter((e) => r.includes(e.groupId));
                  })(e.itemGroup, g),
                  n,
                  a
                );
                return (await (0, d.isItemGroupUserProposeSignatureValid)(e.user, t)) ? void 0 : e;
              })
            )
          ).filter((e) => void 0 !== e),
          T = await Promise.all(
            v.map(
              async ({ user: o, itemGroup: n }) => (
                await (0, I.revokeItemGroupMember)(t, e, r, n, { type: "user", alias: o.alias }), { user: o, itemGroup: n }
              )
            )
          );
        return { ...o, autoRevokedUsers: T };
      }
      async function G(e, t, r) {
        const {
            loadedElements: o,
            sharingData: { collections: n, itemGroups: i, userGroups: a },
            itemKeys: s
          } = e,
          c = o.items
            .filter((e) => (0, l.isItemWithoutItemGroup)(e.itemId, o.itemGroups))
            .reduce((e, t) => {
              const r = (0, u.findItemItemGroup)(t.itemId, i);
              return r ? { ...e, [t.itemId]: { itemGroup: r } } : e;
            }, {}),
          d = Object.keys(c),
          S = d.map((e) => {
            const { itemGroup: o } = c[e];
            return (0, l.getItemGroupKey)(o, a, t, r, n).catch(() => null);
          }),
          p = await Promise.all(S),
          m = d.reduce((e, t, r) => ({ ...e, [t]: { ...c[t], itemGroupKey: p[r] } }), {}),
          g = d.map((e) => {
            const { itemGroupKey: t, itemGroup: r } = m[e];
            if (!r) return Promise.resolve(null);
            const o = (r.items || []).find((t) => t.itemId === e);
            return o ? (0, l.decryptItemKey)(o.itemKey, t).catch(() => null) : Promise.resolve(null);
          }),
          E = await Promise.all(g),
          A = d.reduce((e, t, r) => (E[r] ? { ...e, [t]: E[r] } : e), {});
        return { ...e, itemKeys: { ...s, ...A } };
      }
      async function w(e, { storeService: t, wsService: r, eventLoggerService: n, applicationModulesAccess: a }) {
        const s = await (async function (e, t, r) {
            const {
                itemKeys: o,
                loadedElements: n,
                operations: { items: a }
              } = t,
              s = a.map((t) =>
                (async function (e, t, r, o) {
                  switch (r.type) {
                    case _.Delete:
                      return (await (0, S.deleteItemEffect)(e, r.id)) ? r : null;
                    case _.Create:
                    case _.Update: {
                      if (r.skipPersonalDataItemCreation) return r;
                      if (r.userConfirmationRequired) return null;
                      const n = t.items.find((e) => e.itemId === r.id);
                      if (!n) return null;
                      const i = o[n.itemId];
                      return i && (await (0, S.createOrUpdateItemEffect)(e, n, i)) ? r : null;
                    }
                  }
                  return (0, g.assertUnreachable)(r.type);
                })(e, n, t, o)
              ),
              c = (await Promise.all(s)).filter((e) => !!e);
            try {
              if (r && c.length > 0) {
                const { commands: e } = r.createClients().passwordHealth;
                e.recalculatePasswordHealth();
              }
            } catch (e) {
              const t = new Error(`Password Health update - sharing: ${e}`);
              (0, m.sendExceptionLog)({ error: t, code: i.ExceptionCriticality.WARNING });
            }
            return c;
          })(t, e, a),
          c = await (async function ({ storeService: e, wsService: t, eventLoggerService: r, applicationModulesAccess: n }, a) {
            const {
                operations: { itemGroups: s },
                loadedElements: { itemGroups: c, userGroups: d, collections: u },
                sharingData: { userGroups: p, collections: E }
              } = a,
              A = (0, o.uniqBy)((e) => e.groupId, d.concat(p)),
              I = (0, o.uniqBy)((e) => e.uuid, u.concat(E)),
              y = s.map((o) =>
                (async function ({ storeService: e, wsService: t, eventLoggerService: r, applicationModulesAccess: o }, n, i, a, s) {
                  const { type: c, id: d } = a,
                    { login: u } = e.getAccountInfo();
                  switch (c) {
                    case _.Delete:
                      return a;
                    case _.Create:
                    case _.Update: {
                      const c = n.find((e) => e.groupId === d);
                      if (!c) return null;
                      if (
                        ((c.users || []).filter((e) => "publicKey" === e.rsaStatus).forEach((t) => (0, S.resendPublicKeyInvite)(e, t, c)),
                        (0, l.isLastActiveUserInItemGroupAndAdmin)(c, u))
                      )
                        return (await (0, S.deleteSingleUserItemGroup)(
                          { storeService: e, wsService: t, eventLoggerService: r, applicationModulesAccess: o },
                          c
                        ))
                          ? { ...a, type: _.Delete }
                          : null;
                      if (!(0, l.isItemGroupAccepted)(c, i, u, s)) {
                        const t = (c.items || []).map(async ({ itemId: t }) => {
                          try {
                            return await (0, S.deleteItemEffect)(e, t);
                          } catch (e) {
                            return null;
                          }
                        });
                        return await Promise.all(t), { ...a, deleteSharingDataItems: !0 };
                      }
                      return a;
                    }
                  }
                  return (0, g.assertUnreachable)(c);
                })({ storeService: e, wsService: t, eventLoggerService: r, applicationModulesAccess: n }, c, A, o, I)
              ),
              v = (await Promise.all(y)).filter((e) => !!e);
            try {
              if (n && v.length > 0) {
                const { commands: e } = n.createClients().passwordHealth;
                e.recalculatePasswordHealth();
              }
            } catch (e) {
              const t = new Error(`Password Health update - sharing: ${e}`);
              (0, m.sendExceptionLog)({ error: t, code: i.ExceptionCriticality.WARNING });
            }
            return v;
          })({ storeService: t, wsService: r, eventLoggerService: n, applicationModulesAccess: a }, e);
        return { ...e, operations: { ...e.operations, items: s, itemGroups: c } };
      }
      async function b(e) {
        const {
            sharingData: { items: t, itemGroups: r, userGroups: o, collections: n },
            loadedElements: { items: i, itemGroups: a, userGroups: s, collections: c },
            operations: { items: d, itemGroups: l, userGroups: u, collections: S }
          } = e,
          p = k(i, t, d),
          m = k(a, r, l),
          g = k(s, o, u),
          E = k(c, n, S),
          A = l
            .filter(({ deleteSharingDataItems: e }) => e)
            .reduce((e, { id: t }) => {
              const r = a.find((e) => e.groupId === t);
              if (!r) return e;
              const o = (r.items || []).map(({ itemId: e }) => e);
              return [...e, ...o];
            }, []),
          I = p.filter((e) => !A.includes(e.itemId));
        return { ...e, sharingData: { items: I, itemGroups: m, userGroups: g, collections: E } };
      }
      function k(e, t, r) {
        return r.reduce(
          (t, r) =>
            (function (e, t, r) {
              switch (r.type) {
                case _.Delete:
                  return (function (e, { id: t }) {
                    return e.filter((e) => F(e) !== t);
                  })(t, r);
                case _.Create:
                  return (function (e, t, { id: r }) {
                    const o = e.find((e) => F(e) === r);
                    return o ? t.concat(o) : t;
                  })(e, t, r);
                case _.Update:
                  return (function (e, t, { id: r }) {
                    const o = e.find((e) => F(e) === r);
                    return o ? t.map((e) => (F(e) === r ? o : e)) : t;
                  })(e, t, r);
              }
              return (0, g.assertUnreachable)(r.type);
            })(e, t, r),
          t
        );
      }
      function F(e) {
        return "itemId" in e
          ? e.itemId
          : (function (e) {
              return "groupId" in e;
            })(e)
          ? e.groupId
          : (function (e) {
              return "uuid" in e;
            })(e)
          ? e.uuid
          : void 0;
      }
      async function K(e, t, r) {
        try {
          if (r) {
            const {
              sharingData: { collections: o, userGroups: n }
            } = e;
            if (o) {
              const e = o.filter((e) => {
                  const r = (e?.users ?? []).some((e) => e.login === t && "accepted" === e.status),
                    o = e.userGroups.map((e) => e.uuid),
                    i = n.filter((e) => o.includes(e.groupId)).find((e) => (e?.users ?? []).find((e) => e.userId === t)),
                    a = (i?.users ?? []).some((e) => e.userId === t && "accepted" === e.status);
                  return r || a;
                }),
                { commands: i } = r.createClients().sharingCollections;
              i.updateSharedCollections({ collections: e });
            }
          }
        } catch (e) {
          const t = new Error(`[SharingSync] - update shared collections failed: ${e}`);
          (0, m.sendExceptionLog)({ error: t, code: i.ExceptionCriticality.WARNING });
        }
        return e;
      }
      async function V(e, t) {
        const { sharingData: r } = e;
        return (0, S.updateSharingData)(t, r), e;
      }
      async function z(e, t, r) {
        const { sharingSync: o } = t.getState().userSession;
        return r.getInstance().storeSharingSync(o), e;
      }
      async function H(e, t, r) {
        const o = r.getInstance(),
          n = await o.doesSharingSyncExist();
        let i = null;
        const a = () => {
          (i = { pendingUserGroups: [], pendingItemGroups: [] }), o.storeSharingSync(i);
        };
        n || a();
        try {
          i = await o.getSharingSync();
        } catch (e) {
          a();
        }
        const { pendingItemGroups: s, pendingUserGroups: d } = i,
          l = (0, c.setAllPendingAction)(s, d);
        return t.dispatch(l), e;
      }
      (t.syncSharing = async function (
        { storeService: e, wsService: t, localStorageService: r, eventLoggerService: s, applicationModulesAccess: d },
        u,
        g,
        A
      ) {
        try {
          const p = (0, E.ukiSelector)(e.getState()),
            I = e.getUserLogin(),
            { privateKey: y, publicKey: v } = e.getUserSession().keyPair,
            { credentials: _, notes: h } = e.getPersonalData(),
            R = e.getSharingData(),
            { queries: U } = d.createClients().sharingCollections,
            M = await (0, n.firstValueFrom)(U.getSharedCollections({}));
          R.collections = (0, a.isSuccess)(M) && Array.isArray(M.data) ? M.data : [];
          const k = C(_, "PersonalData.credentials", i.isCredential),
            F = C(h, "PersonalData.notes", i.isNote),
            j = [...k, ...F],
            W = j.map((e) => e.Id),
            x = j.reduce((e, t) => ((e[t.Id] = t), e), {}),
            Y = {
              itemKeys: {},
              loadedElements: { collections: [], items: [], itemGroups: [], userGroups: [] },
              sharing2Summary: u,
              sharingData: R,
              operations: { collections: [], items: [], itemGroups: [], userGroups: [] },
              personalDataItemIds: W,
              pendingUserGroups: [],
              pendingItemGroups: [],
              invalidItemGroups: [],
              autoRevokedUsers: []
            },
            $ = await Promise.resolve(Y)
              .then(T("sanitizeData", f))
              .then(T("setOperations", O))
              .then(T("setGetSharingParams", N))
              .then(T("getSharing", (e) => P(e, t, I, p)))
              .then(T("filterOutInvalidOperations", (e) => L(e, y, v, I, g)))
              .then(T("revokeUsersFromInvalidItemGroups", (r) => B(e, d, t, r, y, v, I, A)))
              .then(T("setMissingItemKeys", (e) => G(e, y, I)))
              .then(T("tagConfirmableItemOperation", (e) => D(e, I)))
              .then(
                T("setPendingItemGroupsList", (e) =>
                  (async function (e, t, r, n) {
                    const {
                        loadedElements: { itemGroups: i, items: a },
                        sharingData: { itemGroups: s, items: c },
                        itemKeys: d
                      } = e,
                      u = (0, o.uniqBy)((e) => e.groupId, i.concat(s)),
                      p = (0, o.uniqBy)((e) => e.itemId, a.concat(c)),
                      m = u.reduce((e, o) => {
                        const i = (0, l.getItemGroupPendingUserMember)(o, t);
                        if (!i) return e;
                        const a = (async function (e, t, r, o, n, i) {
                          const { permission: a, referrer: s, groupKey: c } = t,
                            d = (e.items || []).map(async (t) => {
                              try {
                                const { itemId: d } = t,
                                  u = n[d] || (await (0, l.getDecipheredItemKey)(c, t.itemKey, r));
                                if (!u) return null;
                                const p = o.find((e) => e.itemId === d);
                                return p ? await (0, S.getPendingItemGroup)(p, u, e.groupId, s, a, i) : null;
                              } catch (e) {
                                return null;
                              }
                            });
                          return (await Promise.all(d)).filter(Boolean);
                        })(o, i, r, p, d, n);
                        return [a, ...e];
                      }, []),
                      g = (0, o.flatten)(await Promise.all(m));
                    return { ...e, pendingItemGroups: g };
                  })(e, I, y, x)
                )
              )
              .then(
                T("runOperationsEffects", (r) =>
                  w(r, { storeService: e, wsService: t, eventLoggerService: s, applicationModulesAccess: d })
                )
              )
              .then(T("applyOperationsToSharingData", b))
              .then(
                T("setPendingUserGroupsList", (t) =>
                  (async function (e, t, r) {
                    const {
                        sharingData: { userGroups: o }
                      } = e,
                      n = t.getSpaceData().spaces.find((e) => "accepted" === e.details.status);
                    if (!n) return { ...e, pendingUserGroups: [] };
                    const i = String(n.teamId),
                      a = o.reduce((e, t) => {
                        if (String(t.teamId) !== i) return e;
                        const o = (t.users || []).find((e) => e.userId === r && "pending" === e.status);
                        if (!o) return e;
                        const { groupId: n, name: a } = t,
                          { referrer: s, permission: c } = o;
                        return [{ groupId: n, name: a, referrer: s, permission: c, seen: !1 }, ...e];
                      }, []);
                    return { ...e, pendingUserGroups: a };
                  })(t, e, I)
                )
              )
              .then(
                T("setPendingCollectionsList", (e) =>
                  (async function (e, t) {
                    try {
                      if (t) {
                        const {
                            sharingData: { collections: r }
                          } = e,
                          { commands: o } = t.createClients().sharingInvites;
                        o.updatePendingCollections(r);
                      }
                    } catch (e) {
                      const t = new Error(`Set pending collections - sharing sync: ${e}`);
                      (0, m.sendExceptionLog)({ error: t, code: i.ExceptionCriticality.WARNING });
                    }
                    return e;
                  })(e, d)
                )
              )
              .then(T("initSharingSyncFromStorage", (t) => H(t, e, r)))
              .then(
                T("updateStoreSharingSync", (t) =>
                  (async function (e, t) {
                    const { pendingItemGroups: r, pendingUserGroups: o } = e,
                      n = (0, c.updateAllPendingAction)(r, o);
                    return t.dispatch(n), e;
                  })(t, e)
                )
              )
              .then(T("putSharingSyncBackInStorage", (t) => z(t, e, r)))
              .then(T("updateSharingDataFromSync", (t) => V(t, e)))
              .then(T("updateSharedCollectionsInModule", (e) => K(e, I, d)));
          return $.sharingData;
        } catch (t) {
          const r = new Error(`[SharingSync] - syncSharing failed: ${t}`);
          return v && p.default.error(r), (0, m.sendExceptionLog)({ error: r }), e.getSharingData();
        }
      }),
        (function (e) {
          (e[(e.Create = 0)] = "Create"), (e[(e.Update = 1)] = "Update"), (e[(e.Delete = 2)] = "Delete");
        })((_ = t.OperationType || (t.OperationType = {}))),
        (t.sanitizeData = f),
        (t.setOperations = O),
        (t.tagConfirmableOperations = D),
        (t.setGetSharingParams = N),
        (t.getSharing = P),
        (t.filterOutInvalidOperations = L),
        (t.asyncFilterItemGroups = U),
        (t.shouldRunAutoRevoke = M),
        (t.revokeUsersFromInvalidItemGroups = B),
        (t.setMissingItemKeys = G),
        (t.runOperationsEffects = w),
        (t.applyOperationsToSharingData = b),
        (t.updateSharedCollectionsInModule = K),
        (t.updateSharingDataFromSync = V),
        (t.putSharingSyncBackInStorage = z),
        (t.initSharingSyncFromStorage = H),
        (t.getEmptyOperations = function () {
          return { collections: [], items: [], itemGroups: [], userGroups: [] };
        }),
        (t.getEmptyGetSharingParams = function () {
          return { collectionIds: [], itemIds: [], itemGroupIds: [], userGroupIds: [] };
        }),
        (t.getEmptySharingData = function () {
          return { collections: [], items: [], itemGroups: [], userGroups: [] };
        }),
        (t.getEmptySharing2Summary = function () {
          return { collections: [], items: [], itemGroups: [], userGroups: [] };
        });
    },
    503735: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handlePendingItemGroupsResponse =
          t.handlePendingUserGroupsResponse =
          t.sendPendingExceptionLog =
          t.updateSharingPermission =
          t.revokeItemGroupMember =
          t.isUserItemGroupAdmin =
          t.shareUnsharedItem =
          t.shareAlreadySharedItem =
            void 0);
      const o = r(401067),
        n = r(453576),
        i = r(736884),
        a = r(970206),
        s = r(310294),
        c = r(663698),
        d = r(152931),
        l = r(250141),
        u = r(278320),
        S = r(736513),
        p = r(736513),
        m = r(670252),
        g = r(889016),
        E = r(658107),
        A = r(882366),
        I = r(17825),
        y = r(656915),
        v = r(576330),
        T = r(684511),
        { Accept: _, Refuse: f } = n.SharingResponseStatus,
        C = /[<>]/g,
        O = (e) => e.trim().toLowerCase().replace(C, "");
      function h(e, t, r) {
        const o = `${e.toLowerCase()}Pending${t}`,
          n = new Error(`[Sharing] - ${o}: ${r}`);
        (0, m.sendExceptionLog)({ error: n });
      }
      (t.shareAlreadySharedItem = async function (e, t, r, o, a, d) {
        try {
          const u = t.getUserLogin(),
            p = t.getState(),
            m = (0, y.ukiSelector)(p),
            { privateKey: g } = t.getUserSession().keyPair,
            { collections: I, userGroups: v } = t.getSharingData(),
            T = v.filter(Boolean),
            { groupId: _, revision: f } = o,
            { credentials: C, notes: h } = t.getPersonalData(),
            D = [...C, ...h],
            R = await (0, S.makeCryptoService)(),
            { makeInviteItemGroupMembers: N, makeUserGroupInvite: P, makeUserUpload: L } = (0, i.makeItemGroupService)(r, R),
            { findUsersByAliases: U } = (0, l.makeWSUserAlias)(),
            { makeItemForEmailing: M } = (0, s.makeItemService)(),
            { inviteItemGroupMembers: B } = (0, c.makeItemGroupWS)(),
            G = await (0, E.getItemGroupKey)(o, T, g, u, I);
          if (!G) throw new Error("Couldn't get itemGroupKey, aborting.");
          const w = d.filter(n.isUserRecipient).map(({ alias: e }) => O(e)),
            b = JSON.stringify(w),
            k = await U({ login: u, uki: m, aliases: b }),
            F = w.map((e) => L(e, k[e], _, a, G)),
            K = await Promise.all(F),
            V = (o.items || []).map(({ itemId: e }) => e),
            z = D.filter((e) => V.includes(e.Id)),
            H = z.map(M),
            j = d.filter(n.isGroupRecipient).map((e) => e.groupId),
            W = T.filter(({ groupId: e }) => j.includes(e)).map((e) => P(e, a, G, g, u, _)),
            x = await Promise.all(W),
            Y = await (0, A.createAuditLogDetails)(e, p, z[0]),
            $ = N(_, f, K, x, H, Y),
            q = await B(u, m, $, Y);
          if (q && q.itemGroups && 1 === q.itemGroups.length) {
            const { publicKey: e } = t.getUserSession().keyPair;
            await (0, A.validateItemGroupResponse)("[SharingUserActionsService] - shareAlreadySharedItem", R, q, e, g, G, u, K, T);
          }
        } catch (e) {
          throw ((e.message = `[SharingUserActionsService] - shareAlreadySharedItem: ${e.message}`), e);
        }
      }),
        (t.shareUnsharedItem = async function (e, t, r, o, a, d) {
          try {
            const m = t.getUserLogin(),
              g = t.getState(),
              E = (0, y.ukiSelector)(g),
              { privateKey: I, publicKey: v } = t.getUserSession().keyPair,
              { userGroups: T } = t.getSharingData(),
              _ = await (0, S.makeCryptoService)(),
              { makeCreateItemGroupEvent: f, makeUserGroupInvite: C, makeUserUpload: h } = (0, i.makeItemGroupService)(r, _),
              { makeItemUpload: D, makeItemForEmailing: R } = (0, s.makeItemService)(),
              { createItemGroup: N } = (0, c.makeItemGroupWS)(),
              { findUsersByAliases: P } = (0, l.makeWSUserAlias)(),
              L = (0, u.generateItemUuid)(),
              U = await _.symmetricEncryption.generateNewAESKey(),
              M = d.filter(n.isUserRecipient).map(({ alias: e }) => O(e)),
              B = JSON.stringify(M),
              G = await P({ login: m, uki: E, aliases: B }),
              w = h(m, { login: m, publicKey: v, privateKey: I }, L, "admin", U),
              b = M.map((e) => h(e, G[e], L, a, U)).concat(w),
              k = await Promise.all(b),
              F = d.filter(n.isGroupRecipient).map((e) => e.groupId),
              K = T.filter(({ groupId: e }) => F.includes(e)).map((e) => C(e, a, U, I, m, L)),
              V = await Promise.all(K),
              { Id: z } = o,
              H = (0, p.makeSymmetricEncryption)(),
              j = await _.symmetricEncryption.generateNewAESKey(),
              W = await _.symmetricEncryption.encryptAES256(U, j),
              x = await H.encryptSharingItem(j, o),
              Y = await D(z, W, x),
              $ = R(o),
              q = await (0, A.createAuditLogDetails)(e, g, o),
              Q = f(L, k, V, [Y], [$], q),
              Z = await N(m, E, Q);
            Z &&
              Z.itemGroups &&
              1 === Z.itemGroups.length &&
              (await (0, A.validateItemGroupResponse)("[SharingUserActionsService] - shareUnsharedItem", _, Z, v, I, U, m, k, T));
          } catch (e) {
            throw ((e.message = `[SharingUserActionsService] - shareUnsharedItem: ${e.message}`), e);
          }
        }),
        (t.isUserItemGroupAdmin = function (e, t, r) {
          const o = (e.users || []).some(({ userId: e, permission: t }) => e === r && "admin" === t),
            n = (t || []).filter((e) => (e.users || []).map(({ userId: e }) => e).includes(r)).map(({ groupId: e }) => e),
            i = (e.groups || []).filter(({ groupId: e }) => n.includes(e)).some(({ permission: e }) => "admin" === e);
          return o || i;
        }),
        (t.revokeItemGroupMember = async function (e, t, r, o, n, a = "manual") {
          const s = await (0, S.makeCryptoService)(),
            { groupId: c, revision: d } = o,
            l = t.getState(),
            u = (0, y.ukiSelector)(l),
            p = t.getUserLogin(),
            { makeRevokeItemGroupMembers: m } = (0, i.makeItemGroupService)(r, s),
            g = "user" === n.type ? [n.alias] : [],
            E = "userGroup" === n.type ? [n.groupId] : [],
            { credentials: I, notes: T } = (0, v.personalDataSelector)(l),
            _ = [...I, ...T],
            f = (o.items || []).map(({ itemId: e }) => e),
            C = _.filter((e) => f.includes(e.Id)),
            O = m(c, d, g, E, await (0, A.createAuditLogDetails)(e, l, C[0]), a);
          await r.itemGroup.revokeItemGroupMembers(p, u, O);
        }),
        (t.updateSharingPermission = async function (e, t, r, o, n) {
          const a = e.getUserLogin(),
            s = (0, y.ukiSelector)(e.getState()),
            c = await (0, S.makeCryptoService)(),
            { makeUserGroupUpdate: d, makeUserUpdate: l, makeUpdateItemGroupMembers: u } = (0, i.makeItemGroupService)(t, c),
            { groupId: p, revision: m } = r,
            g = u(p, m, "user" === o.type ? [await l(o.alias, n)] : [], "userGroup" === o.type ? [await d(o.groupId, n)] : []);
          await t.itemGroup.updateItemGroupMembers(a, s, g);
        }),
        (t.sendPendingExceptionLog = h),
        (t.handlePendingUserGroupsResponse = async function (e, t, r) {
          const i = (0, S.makeCryptoService)(),
            s = (0, g.makeWSService)(),
            { makeAcceptUserGroupEvent: c, makeRefuseUserGroupEvent: l } = (0, a.makeUserGroupService)(s, i),
            { accept: u, refuse: p } = (0, d.makeUserGroupWS)(),
            m = (0, y.ukiSelector)(e.getState()),
            E = e.getUserLogin(),
            {
              keyPair: { privateKey: A }
            } = e.getUserSession(),
            { userGroups: v } = e.getSharingData(),
            T = t.map(async function (e) {
              try {
                const t = v.find((t) => t.groupId === e);
                if (!t) throw new Error(`could not find userGroup to ${n.SharingResponseStatus[r]} in sharingData`);
                switch (r) {
                  case _:
                    await (async function (e) {
                      const t = await c({ login: E, uki: m, privateKey: A }, e);
                      return await u(E, m, t);
                    })(t);
                    break;
                  case f:
                    await (async function (e) {
                      const { revision: t } = e,
                        r = await l(e.groupId, t);
                      return await p(E, m, r);
                    })(t);
                    break;
                  default:
                    (0, I.assertUnreachable)(r);
                }
                return { userGroupId: e, success: !0 };
              } catch (t) {
                return { userGroupId: e, success: !1, error: t };
              }
            }),
            C = await Promise.all(T),
            [O, D] = (0, o.partition)(({ success: e }) => Boolean(e), C);
          return (
            D.forEach(({ error: e }) => h(n.SharingResponseStatus[r], "UserGroup", e)),
            { successes: O.map((e) => e.userGroupId), failures: D.map((e) => e.userGroupId) }
          );
        }),
        (t.handlePendingItemGroupsResponse = async function (e, t, r, a) {
          const s = (0, S.makeCryptoService)(),
            d = (0, g.makeWSService)(),
            { makeAcceptItemGroupEvent: l, makeRefuseItemGroupEvent: u } = (0, i.makeItemGroupService)(d, s),
            { acceptItemGroup: p, refuseItemGroup: m } = (0, c.makeItemGroupWS)(),
            v = t.getState(),
            C = (0, y.ukiSelector)(v),
            O = (0, T.pendingItemGroupsSharedItemContentsSelector)(v),
            D = t.getUserLogin(),
            {
              keyPair: { privateKey: R }
            } = t.getUserSession(),
            { collections: N, itemGroups: P, userGroups: L } = t.getSharingData(),
            U = r.map(({ itemGroupId: t, itemsForEmailing: r }) =>
              (async function (t, r) {
                try {
                  const o = P.find((e) => e.groupId === t);
                  if (!o) throw new Error(`could not find itemGroup to ${n.SharingResponseStatus[a]} in sharingData`);
                  const i = O.find((e) => e.Id === o.items[0].itemId),
                    c = await (0, A.createAuditLogDetails)(e, v, i);
                  switch (a) {
                    case _:
                      await (async function (e, t, r) {
                        const { groupId: o, revision: n } = e,
                          i = await (0, E.getItemGroupKey)(e, L, R, D, N),
                          a = await (0, A.generateAcceptSignature)(s, R, o, i),
                          c = l(a, o, n, t, r);
                        return await p(D, C, c);
                      })(o, r, c);
                      break;
                    case f:
                      await (async function (e, t, r) {
                        const { groupId: o, revision: n } = e,
                          i = u(o, n, t, r);
                        return await m(D, C, i);
                      })(o, r, c);
                      break;
                    default:
                      (0, I.assertUnreachable)(a);
                  }
                  return { itemGroupId: t, success: !0 };
                } catch (e) {
                  return { itemGroupId: t, success: !1, error: e };
                }
              })(t, r)
            ),
            M = await Promise.all(U),
            [B, G] = (0, o.partition)(({ success: e }) => Boolean(e), M);
          return (
            G.forEach(({ error: e }) => h(n.SharingResponseStatus[a], "ItemGroup", e)),
            { successes: B.map((e) => e.itemGroupId), failures: G.map((e) => e.itemGroupId) }
          );
        });
    },
    947683: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCollectionValid =
          t.isUserGroupValid =
          t.areItemGroupItemKeysValid =
          t.isItemGroupCollectionProposeSignatureValid =
          t.isItemGroupGroupMemberProposeSignatureValid =
          t.areItemGroupCollectionMembersProposeSignaturesValid =
          t.areItemGroupGroupMembersProposeSignaturesValid =
          t.isItemGroupUserProposeSignatureValid =
          t.areItemGroupUsersProposeSignaturesValid =
          t.isItemGroupCollectionMemberValid =
          t.isItemGroupUserGroupMemberValid =
          t.isItemGroupUserValid =
          t.getDecryptedItemGroupKey =
          t.validateItemGroup =
            void 0);
      const o = r(660765),
        n = r(736513),
        i = r(795623),
        a = r(658107),
        s = r(493513),
        c = !1;
      async function d(e, t, r, o) {
        try {
          const { status: i, acceptSignature: s, groupKey: c } = t;
          if ("accepted" !== i) return !0;
          const d = await (0, n.makeCryptoService)().asymmetricEncryption.decrypt(r, c);
          return await (0, a.isGroupSignatureValid)(e, s, d, o);
        } catch (e) {
          return c && i.default.log(`isGroupSignatureValid error: ${e}`), !1;
        }
      }
      async function l(e, t, r, o, s) {
        try {
          const { status: i, acceptSignature: c, groupKey: d, groupId: l } = t;
          if ("accepted" !== i) return !0;
          const u = (r || []).find((e) => e.groupId === l);
          if (!u) return !1;
          const { publicKey: S } = u,
            p = await (0, a.getUserGroupPrivateKey)(u, o, s);
          if (!p) return !1;
          const m = await (0, n.makeCryptoService)().asymmetricEncryption.decrypt(p, d);
          return await (0, a.isGroupSignatureValid)(e, c, m, S);
        } catch (e) {
          return c && i.default.log(`isItemGroupUserGroupMemberValid error: ${e}`), !1;
        }
      }
      async function u(e, t, r, o, n) {
        try {
          const i = (r || []).find((e) => e.uuid === t.member.uuid);
          if (!i) return !1;
          let s = null;
          const { status: c, acceptSignature: d } = t.member,
            { publicKey: l } = i;
          if ("accepted" !== c) return !0;
          if (t.userGroup) {
            if (!i.userGroups.find((e) => e.uuid === t.userGroup.groupId)) return null;
            s = await (0, a.getDecryptedPrivateCollectionKeyFromUserGroup)(i, t.userGroup, o, n);
          } else s = await (0, a.getCollectionPrivateKeyForUser)(i, o, n);
          if (!s) return !1;
          const u = await (0, a.decryptGroupKey)(t.member.itemGroupKey, s);
          return !!u && (await (0, a.isGroupSignatureValid)(e, d, u, l));
        } catch (e) {
          return c && i.default.log(`isItemGroupCollectionMemberValid error: ${e}`), !1;
        }
      }
      async function S(e, t) {
        const r = (e || []).filter(({ status: e }) => ["pending", "accepted"].includes(e)).map((e) => p(e, t));
        return (await Promise.all(r)).every(Boolean);
      }
      async function p(e, t) {
        try {
          return await (0, n.makeCryptoService)().symmetricEncryption.verifyHmacSHA256(t, e.proposeSignature, s.encode(e.userId));
        } catch (e) {
          return c && i.default.warn(`[SharingValidationService] - isItemGroupUserProposeSignatureValid: ${e}`), !1;
        }
      }
      async function m(e, t) {
        const r = (e || []).filter(({ status: e }) => ["pending", "accepted"].includes(e)).map((e) => E(e, t));
        return (await Promise.all(r)).every(Boolean);
      }
      async function g(e, t) {
        const r = (e || []).filter(({ status: e }) => ["pending", "accepted"].includes(e)).map((e) => A(e, t));
        return (await Promise.all(r)).every(Boolean);
      }
      async function E(e, t) {
        try {
          return await (0, n.makeCryptoService)().symmetricEncryption.verifyHmacSHA256(t, e.proposeSignature, s.encode(e.groupId));
        } catch {
          return !1;
        }
      }
      async function A(e, t) {
        try {
          return await (0, n.makeCryptoService)().symmetricEncryption.verifyHmacSHA256(t, e.proposeSignature, s.encode(e.uuid));
        } catch {
          return !1;
        }
      }
      async function I(e, t) {
        const r = (e || []).map((e) =>
            (async function (e, t) {
              try {
                const { itemKey: r } = e;
                return await (0, a.decryptItemKey)(r, t);
              } catch {
                return !1;
              }
            })(e, t)
          ),
          o = await Promise.all(r);
        return !!o.every(Boolean) && o.reduce((t, r, o) => ({ ...t, [e[o].itemId]: r }), {});
      }
      (t.validateItemGroup = async function (e, t, r, n, s, p) {
        const E = e.groupId,
          A = e,
          y = (0, a.findMyItemGroupUser)(e, s),
          v = (0, a.findMyItemGroupUserGroupMember)(e, t, s),
          T = (0, a.findMyItemGroupCollectionMemberViaUserGroup)(A, t, s, p),
          _ = (0, a.findMyItemGroupCollectionMemberAsUser)(A, s, p);
        if (!(y || v || _ || T)) return { isValid: !1, error: o.ErrorName.ItemGroupNoAccess };
        const f = await (0, a.getItemGroupKey)(e, t, r, s, p);
        if ((c && i.default.log("ITEM_GROUP_KEY", !!f), !f)) return { isValid: !1, error: o.ErrorName.ItemGroupInvalidKey };
        const C = !y || (await d(E, y, r, n));
        if ((c && i.default.log("ITEM_GROUP_USER_VALID", C), !C))
          return { isValid: !1, error: o.ErrorName.ItemGroupInvalidUserAcceptSignature };
        const O = !v || (await l(E, v, t, r, s)),
          h = !T || (await u(E, T, p, r, s)),
          D = !_ || (await u(E, { member: _ }, p, r, s));
        if (
          (c &&
            (i.default.log("ITEM_GROUP_USER_GROUP_VALID", O),
            i.default.log("ITEM_GROUP_COLLECTION_VALID", h),
            i.default.log("ITEM_GROUP_COLLECTION_UER_VALID", D)),
          !O || !h || !D)
        )
          return { isValid: !1, error: o.ErrorName.ItemGroupInvalidGroupAcceptSignature };
        const R = await S(e.users, f);
        if ((c && i.default.log("USERS_PROPOSE_SIGNATURES_VALID", R), !R))
          return { isValid: !1, error: o.ErrorName.ItemGroupInvalidUserProposeSignature };
        const N = await m(e.groups, f),
          P = await g(A.collections, f);
        if (
          (c &&
            (i.default.log("GROUP_MEMBERS_PROPOSE_SIGNATURES_VALID", N), i.default.log("COLLECTION_MEMBERS_PROPOSE_SIGNATURES_VALID", P)),
          !N || !P)
        )
          return { isValid: !1, error: o.ErrorName.ItemGroupInvalidGroupProposeSignature };
        const L = await I(e.items || [], f);
        return (
          c && i.default.log("ITEM_GROUP_ITEM_KEYS", !!L),
          L ? { isValid: !0, itemKeys: L } : { isValid: !1, error: o.ErrorName.ItemGroupInvalidKey }
        );
      }),
        (t.getDecryptedItemGroupKey = async function (e, t, r, o) {
          const n = (0, a.findMyItemGroupUser)(e, o),
            i = (0, a.findMyItemGroupUserGroupMember)(e, t, o);
          if (!n && !i) return null;
          return (
            (n
              ? await (0, a.getDecryptedItemGroupKeyFromUser)(n, r)
              : await (0, a.getDecryptedItemGroupKeyFromUserGroupMember)(i, t, r, o)) || null
          );
        }),
        (t.isItemGroupUserValid = d),
        (t.isItemGroupUserGroupMemberValid = l),
        (t.isItemGroupCollectionMemberValid = u),
        (t.areItemGroupUsersProposeSignaturesValid = S),
        (t.isItemGroupUserProposeSignatureValid = p),
        (t.areItemGroupGroupMembersProposeSignaturesValid = m),
        (t.areItemGroupCollectionMembersProposeSignaturesValid = g),
        (t.isItemGroupGroupMemberProposeSignatureValid = E),
        (t.isItemGroupCollectionProposeSignatureValid = A),
        (t.areItemGroupItemKeysValid = I),
        (t.isUserGroupValid = async function (e, t, r, o) {
          const { groupId: n } = e,
            i = (e.users || []).find((e) => e.userId === o);
          if (!i) return null;
          const s = await (0, a.getDecryptedUserGroupKey)(i.groupKey, t);
          return !(
            !s ||
            (i.acceptSignature && !(await (0, a.isGroupSignatureValid)(n, i.acceptSignature, s, r))) ||
            !(await (0, a.areUserGroupUsersProposeSignaturesValid)(e.users, s))
          );
        }),
        (t.isCollectionValid = async function (e, t, r, o, n) {
          const { uuid: i } = e,
            s = (e.users || []).find((e) => e.login === o);
          let c = s?.collectionKey,
            d = s?.acceptSignature,
            l = t,
            u = r;
          if (!s) {
            const r = e.userGroups.map((e) => e.uuid),
              i = n.filter((e) => r.includes(e.groupId)).find((e) => e.users.find((e) => e.userId === o)),
              s = e.userGroups.find((e) => e.uuid === i.groupId);
            if (!s) return !1;
            const S = await (0, a.getUserGroupPrivateKey)(i, t, o);
            (c = s.collectionKey), (d = s.acceptSignature), (l = S), (u = i.publicKey);
          }
          const S = await (0, a.getDecryptedUserGroupKey)(c, l);
          return !(
            !S ||
            (d && !(await (0, a.isGroupSignatureValid)(i, d, S, u))) ||
            !(await (0, a.areCollectionUsersProposeSignaturesValid)(e, S))
          );
        });
    },
    970206: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeUserGroupService =
          t.checkUsersPublicKey =
          t.ConvertUserGroupMemberToUserUpdate =
          t.ConvertUserGroupMemberToUserUpdateWithInvite =
          t.ConvertUserGroupMemberToUserUpload =
          t.createUserUploadEvent =
          t.makeUserGroupAdminItem =
          t.makeGroupKeyItem =
          t.decryptGroupKey =
          t.UPDATE_USER_GROUP_USERS =
          t.REVOKE_USER_GROUP_USERS =
          t.INVITE_USER_GROUP_USERS =
          t.REFUSE_USER_GROUP =
          t.ACCEPT_USER_GROUP =
          t.RENAME_USER_GROUP =
          t.DELETE_USER_GROUP =
          t.CREATE_TEAM_ADMINS_USER_GROUP =
          t.CREATE_USER_GROUP =
          t.SHARING_VERSION =
            void 0);
      const o = r(493513),
        n = r(278320),
        i = r(316038),
        a = r(144197),
        s = r(543927),
        c = r(882366),
        d = r(670252);
      function l(e, t, r, n) {
        return e.asymmetricEncryption.sign(t, o.encode(r + "-accepted-" + n));
      }
      function u(e, t, r) {
        if (!(0, i.isBase64Encoded)(r)) throw new Error("INVALID_GROUP_KEY");
        return e.asymmetricEncryption.decrypt(t.privateKey, r);
      }
      async function S(e, t, r, n, i) {
        const s = (0, a.getAdminDataFromTeamAdminData)(r, n),
          c = (0, a.getSpecialItemGroupFromAdminData)(s).revision,
          d = JSON.stringify(i),
          [l, u] = await Promise.all([e.symmetricEncryption.generateNewAESKey(), (0, a.getSpecialItemGroupKey)(e, t, s)]),
          [S, p] = await Promise.all([
            e.symmetricEncryption.encryptAES256(l, o.encode(d)),
            e.symmetricEncryption.encryptAES256(u, o.encode(l))
          ]);
        return { itemId: i.itemId, itemKey: p, content: S, itemGroupRevision: c };
      }
      async function p(e, r, i, a, s) {
        const [c, d] = await Promise.all([r.asymmetricEncryption.generateRsaKeyPair(), r.symmetricEncryption.generateNewAESKey()]),
          l = (0, n.generateItemUuid)(),
          u = await r.symmetricEncryption.encryptAES256(d, o.encode(c.privateKey));
        return {
          groupId: l,
          name: a.name,
          publicKey: c.publicKey,
          privateKey: u,
          sharingVersion: t.SHARING_VERSION,
          teamId: a.teamId,
          type: e,
          users: await Promise.all(s.map((e) => g(r, e, i, d, l)))
        };
      }
      async function m(e) {
        return {
          itemId: (0, n.generateItemUuid)(),
          groupId: (0, n.generateItemUuid)(),
          groupKey: await e.symmetricEncryption.generateNewAESKey()
        };
      }
      async function g(e, t, r, o, n) {
        const i = await A(e, t, o);
        return t.Login === r.login && (i.acceptSignature = await l(e, r.privateKey, n, o)), i;
      }
      async function E(e, r, o, n, i, a) {
        const s = i.map(async (t) => {
            try {
              return { success: !0, user: await g(e, t, r, a, o) };
            } catch (e) {
              const t = new Error(`[UserGroupService] - makeBaseInviteMembersEvent: ${e}`);
              return (0, d.sendExceptionLog)({ error: t }), { success: !1 };
            }
          }),
          c = (await Promise.all(s)).filter((e) => e.success).map((e) => e.user);
        return { groupId: o, revision: n, sharingVersion: t.SHARING_VERSION, type: t.INVITE_USER_GROUP_USERS, users: c };
      }
      async function A(e, t, r) {
        const n = await y(t);
        if (!t.Login) {
          const i = await (0, c.generateProposeSignature)(e, r, t.Alias);
          return (
            await (0, c.validateProposeSignature)(
              "[ItemGroupService] - ConvertUserGroupMemberToUserUpload (no login)",
              e,
              r,
              i,
              o.encode(t.Alias)
            ),
            { ...n, userId: t.Alias, alias: t.Alias, proposeSignatureUsingAlias: !0, proposeSignature: i }
          );
        }
        const [i, a] = await Promise.all([e.asymmetricEncryption.encrypt(t.PublicKey, r), (0, c.generateProposeSignature)(e, r, t.Login)]);
        return (
          await (0, c.validateProposeSignature)("[ItemGroupService] - ConvertUserGroupMemberToUserUpload", e, r, a, o.encode(t.Login)),
          { ...n, alias: t.Alias, groupKey: i, proposeSignatureUsingAlias: !1, proposeSignature: a }
        );
      }
      async function I(e, t, r) {
        const n = await y(t),
          [i, a] = await Promise.all([e.asymmetricEncryption.encrypt(t.PublicKey, r), (0, c.generateProposeSignature)(e, r, t.Login)]);
        return (
          await (0, c.validateProposeSignature)(
            "[ItemGroupService] - ConvertUserGroupMemberToUserUpdateWithInvite",
            e,
            r,
            a,
            o.encode(t.Login)
          ),
          { ...n, groupKey: i, proposeSignature: a }
        );
      }
      async function y(e) {
        return { permission: e.Permission, userId: e.Login };
      }
      function v(e, t, r, o) {
        return e(t, r, { type: "getSharing", sharingVersion: 4, userGroupIds: o }).then(({ userGroupErrors: e, userGroups: t }) => {
          if (e && e.length) throw new Error(e[0].message);
          return t;
        });
      }
      function T({ teamId: e }) {
        if (!e) throw new Error("USER_GROUP_DELETED");
      }
      (t.SHARING_VERSION = 4),
        (t.CREATE_USER_GROUP = "createUserGroup"),
        (t.CREATE_TEAM_ADMINS_USER_GROUP = "createTeamAdminsUserGroup"),
        (t.DELETE_USER_GROUP = "deleteUserGroup"),
        (t.RENAME_USER_GROUP = "renameUserGroup"),
        (t.ACCEPT_USER_GROUP = "acceptUserGroup"),
        (t.REFUSE_USER_GROUP = "refuseUserGroup"),
        (t.INVITE_USER_GROUP_USERS = "inviteUserGroupUsers"),
        (t.REVOKE_USER_GROUP_USERS = "revokeUserGroupUsers"),
        (t.UPDATE_USER_GROUP_USERS = "updateUserGroupUsers"),
        (t.decryptGroupKey = u),
        (t.makeGroupKeyItem = S),
        (t.makeUserGroupAdminItem = m),
        (t.createUserUploadEvent = g),
        (t.ConvertUserGroupMemberToUserUpload = A),
        (t.ConvertUserGroupMemberToUserUpdateWithInvite = I),
        (t.ConvertUserGroupMemberToUserUpdate = y),
        (t.checkUsersPublicKey = (e) => {
          const t = Object.keys(e).filter((t) => !e[t].publicKey);
          return t.length > 0
            ? Promise.reject(new Error(JSON.stringify({ message: "Users missing public Key: " + t, code: "MISSING_PUBLIC_KEY" })))
            : Promise.resolve(e);
        });
      const _ = (e) => {
          const t = "ITEM_GROUP_UPDATE_CONFLICT";
          return ("getAdditionalInfo" in e && e.getAdditionalInfo().webServiceSubMessage === t) || e.message.includes(t);
        },
        f = (e) => {
          const t = "Conflict";
          return !(!("getAdditionalInfo" in e) || !e.getAdditionalInfo().message.startsWith(t)) || e.message.startsWith(t);
        };
      function C(e, t, r, o, n) {
        return e(r, o, n).catch((i) => {
          if (_(i))
            return v(t, r, o, [n.groupId]).then(([t]) => {
              T(t);
              const { revision: i } = t;
              return e(r, o, { ...n, revision: i });
            });
          throw i;
        });
      }
      t.makeUserGroupService = function (e, r) {
        return {
          makeUserGroupAdminItem: () => m(r),
          makeCreateUserGroupEvent: (e, n, i, a) =>
            (async function (e, r, n, i, a) {
              const s = await e.asymmetricEncryption.generateRsaKeyPair(),
                { teamId: c, externalId: d, name: l } = i;
              return {
                groupId: a.groupId,
                name: l,
                publicKey: s.publicKey,
                privateKey: await e.symmetricEncryption.encryptAES256(a.groupKey, o.encode(s.privateKey)),
                sharingVersion: t.SHARING_VERSION,
                teamId: c,
                type: "createUserGroup",
                users: [],
                groupKeyItem: await S(e, r, n, c.toString(), a),
                externalId: d
              };
            })(r, e, n, i, a),
          makeCreateUserGroupEventWithMembers: (e, t, o) =>
            (async function (e, t, r, o) {
              return p("createUserGroup", e, t, r, o);
            })(r, e, t, o),
          makeCreateSpecialUserGroupEvent: (e, t, o) =>
            (async function (e, t, r, o) {
              return p("createTeamAdminsUserGroup", e, t, r, o);
            })(r, e, t, o),
          createUserGroup: ({ login: t, uki: r }, o, n) =>
            (function (e, t, r, o, n) {
              return e.userGroup.create(t, r, n).catch((i) => {
                if (_(i))
                  return (0, s.loadSpecialItemGroup)(e, t, r, o).then((o) =>
                    e.userGroup.create(t, r, { ...n, groupKeyItem: { ...n.groupKeyItem, itemGroupRevision: o.revision } })
                  );
                throw i;
              });
            })(e, t, r, o, n),
          makeDeleteUserGroupEvent: (e, r, o, n) =>
            (async function (e, r, o, n) {
              const i = { type: t.DELETE_USER_GROUP, sharingVersion: t.SHARING_VERSION, groupId: e, revision: r };
              return o && n && (i.groupKeyItem = { itemId: o, itemGroupRevision: n }), i;
            })(e, r, o, n),
          deleteUserGroup: ({ login: t, uki: r }, o, n) =>
            (function (e, t, r, o, n) {
              return e.userGroup.delete(t, r, n).catch((i) => {
                if (_(i))
                  return (0, s.loadSpecialItemGroup)(e, t, r, o).then((o) =>
                    e.userGroup.delete(t, r, { ...n, groupKeyItem: { ...n.groupKeyItem, itemGroupRevision: o.revision } })
                  );
                if (f(i))
                  return v(e.sharing.get, t, r, [n.groupId]).then((o) => {
                    const [{ revision: i, teamId: a }] = o;
                    return a ? e.userGroup.delete(t, r, { ...n, revision: i }) : { userGroups: o };
                  });
                throw i;
              });
            })(e, t, r, o, n),
          makeRenameUserGroupEvent: (e, r, o) =>
            (async function (e, r, o) {
              return { type: t.RENAME_USER_GROUP, sharingVersion: t.SHARING_VERSION, groupId: e, revision: r, name: o };
            })(e, r, o),
          renameUserGroup: ({ login: t, uki: r }, o) =>
            (function (e, t, r, o) {
              const n = e.userGroup.rename;
              return n(t, r, o).catch((i) => {
                if (f(i))
                  return v(e.sharing.get, t, r, [o.groupId]).then((e) => {
                    T(e[0]);
                    const [{ name: i, revision: a }] = e;
                    return i === o.name ? { userGroups: e } : n(t, r, { ...o, revision: a });
                  });
                throw i;
              });
            })(e, t, r, o),
          makeAcceptUserGroupEvent: (e, o) =>
            (async function (e, r, o) {
              const n = o.users.find((e) => e.userId === r.login).groupKey,
                i = await u(e, r, n),
                a = await l(e, r.privateKey, o.groupId, i);
              return { type: t.ACCEPT_USER_GROUP, sharingVersion: 4, revision: o.revision, groupId: o.groupId, acceptSignature: a };
            })(r, e, o),
          acceptUserGroup: ({ login: t, uki: r }, o) => C(e.userGroup.accept, e.sharing.get, t, r, o),
          makeRefuseUserGroupEvent: (e, r) =>
            (async function (e, r) {
              return { type: t.REFUSE_USER_GROUP, sharingVersion: 4, revision: r, groupId: e };
            })(e, r),
          refuseUserGroup: ({ login: t, uki: r }, o) => C(e.userGroup.refuse, e.sharing.get, t, r, o),
          makeInviteMembersEventAsAdmin: (e, t, o, n) =>
            (function (e, t, r, o, n) {
              return E(e, o, t.groupId, r, n, t.groupKey);
            })(r, e, t, o, n),
          makeInviteMembersEvent: (e, t, o, n, i) =>
            (async function (e, t, r, o, n, i) {
              const a = i.users.find((e) => e.userId === o.login).groupKey,
                s = await u(e, o, a);
              return E(e, o, t, r, n, s);
            })(r, e, t, o, n, i),
          inviteUserGroupMembers: ({ login: t, uki: r }, o) =>
            (function (e, t, r, o) {
              return e.userGroup.invite(t, r, o).catch((n) => {
                if (f(n))
                  return v(e.sharing.get, t, r, [o.groupId]).then((n) => {
                    T(n[0]);
                    const [{ revision: i, users: a }] = n,
                      s = o.users.filter((e) => !a.find((t) => t.userId === e.userId && "accepted" === t.status));
                    return s.length ? e.userGroup.invite(t, r, { ...o, revision: i, users: s }) : { userGroups: n };
                  });
                throw n;
              });
            })(e, t, r, o),
          makeRevokeMembersEvent: (e, r, o) =>
            (async function (e, r, o) {
              return { type: t.REVOKE_USER_GROUP_USERS, sharingVersion: t.SHARING_VERSION, revision: r, groupId: e, users: o };
            })(e, r, o),
          revokeUserGroupMembers: ({ login: t, uki: r }, o) =>
            (function (e, t, r, o) {
              return e.userGroup.revoke(t, r, o).catch((n) => {
                if (f(n))
                  return v(e.sharing.get, t, r, [o.groupId]).then((n) => {
                    T(n[0]);
                    const [{ revision: i, users: a }] = n,
                      s = o.users.filter((e) => a.find((t) => t.userId === e && "accepted" === t.status));
                    return s.length ? e.userGroup.revoke(t, r, { ...o, revision: i, users: s }) : { userGroups: n };
                  });
                throw n;
              });
            })(e, t, r, o),
          makeUpdateMembersEvent: (e, r, o) =>
            (async function (e, r, o) {
              return {
                type: t.UPDATE_USER_GROUP_USERS,
                sharingVersion: t.SHARING_VERSION,
                revision: r,
                groupId: e,
                users: await Promise.all(o.map((e) => y(e)))
              };
            })(e, r, o),
          makeUpdateMembersWithInviteEvent: (e, o, n, i) =>
            (async function (e, r, o, n, i) {
              return {
                type: t.UPDATE_USER_GROUP_USERS,
                sharingVersion: t.SHARING_VERSION,
                revision: n,
                groupId: r,
                users: await Promise.all(i.map((t) => I(e, t, o)))
              };
            })(r, e, o, n, i),
          updateUserGroupMembers: ({ login: t, uki: r }, o) => C(e.userGroup.update, e.sharing.get, t, r, o),
          findExistingUsersByAliases: (r) => e.userAlias.findUsersByAliases(r).then(t.checkUsersPublicKey),
          findUsersByAliases: (t) => e.userAlias.findUsersByAliases(t),
          isCurrentUserProposeSignatureValid: (e, t) =>
            (async function (e, t, r) {
              const o = r.users.find((e) => e.userId === t.login),
                n = await u(e, t, o.groupKey);
              return (0, c.isProposeSignatureValid)(e, o.proposeSignature, o.userId, n);
            })(r, e, t)
        };
      };
    },
    937275: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSharingDataWithCollections =
          t.getSharedItemGroupsById =
          t.toCollectionModel =
          t.toVaultItemModel =
          t.filterUndefinedVaultItems =
            void 0),
        (t.filterUndefinedVaultItems = (e) => void 0 !== e.id),
        (t.toVaultItemModel = (e) => ({ id: e.items?.[0].itemId })),
        (t.toCollectionModel = (e) => (r) => ({
          id: r.uuid,
          name: r.name,
          vaultItems: e
            .filter((e) => e.collections?.find((e) => e.uuid === r.uuid))
            .map(t.toVaultItemModel)
            .filter(t.filterUndefinedVaultItems)
        })),
        (t.getSharedItemGroupsById = (e) => (e && e.length > 0 ? e.reduce((e, t) => ({ ...e, [t.groupId]: t }), {}) : {})),
        (t.getSharingDataWithCollections = (e) => ({ collections: e.collections ?? [], itemGroups: e.itemGroups }));
    },
    97124: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeSharingService = void 0);
      const o = r(736513),
        n = r(970206),
        i = r(736884),
        a = r(310294);
      t.makeSharingService = function (e, t) {
        const r = (0, o.makeCryptoService)();
        return {
          ws: t,
          store: e,
          crypto: r,
          userGroup: (0, n.makeUserGroupService)(t, r),
          itemGroup: (0, i.makeItemGroupService)(t, r),
          item: (0, a.makeItemService)()
        };
      };
    },
    281197: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isShared = void 0);
      const o = r(401067),
        n = r(859890);
      t.isShared = (0, o.curry)((e, t) => (0, n.binaryContains)(e, t.Id));
    },
    471646: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getItemGroupActiveUsers =
          t.findItemItemGroup =
          t.getItemUserIds =
          t.getItemUserGroupIds =
          t.findMyAcceptedItemGroups =
          t.findMyAcceptedItemGroupCollectionMembers =
          t.findMyAcceptedItemGroupUserGroupMembers =
            void 0);
      const o = r(658107);
      function n(e, t, r) {
        const o = (t || []).filter((e) => (e.users || []).map((e) => e.userId).includes(r)).map((e) => e.groupId);
        return (e.groups || []).filter((e) => o.includes(e.groupId) && "accepted" === e.status);
      }
      function i(e, t, r, n) {
        const i = (0, o.findMyItemGroupCollectionMemberAsUser)(e, n, t),
          a = (0, o.findMyItemGroupCollectionMemberViaUserGroup)(e, r, n, t)?.member;
        return (e.collections || []).filter((e) => {
          const t = i?.uuid === e.uuid,
            r = a?.uuid === e.uuid;
          return "accepted" === e.status && (t || r);
        });
      }
      function a(e, t) {
        return t.find((t) => (t.items || []).map((e) => e.itemId).includes(e));
      }
      function s(e) {
        return (e.users || []).filter(c);
      }
      (t.findMyAcceptedItemGroupUserGroupMembers = n),
        (t.findMyAcceptedItemGroupCollectionMembers = i),
        (t.findMyAcceptedItemGroups = function (e, t, r, o) {
          return e.filter((e) => {
            const a = e,
              s = "items" === e.type,
              c = (e.users || []).some((e) => e.userId === o && "accepted" === e.status),
              d = n(a, t, o).length > 0,
              l = i(a, r, t, o).length > 0;
            return s && (c || d || l);
          });
        }),
        (t.getItemUserGroupIds = function (e, t) {
          const r = a(t, e);
          return (r?.groups ?? []).filter((e) => "accepted" === e.status).map((e) => e.groupId);
        }),
        (t.getItemUserIds = function (e, t) {
          const r = a(t, e);
          return r ? s(r).map((e) => e.userId) : [];
        }),
        (t.findItemItemGroup = a),
        (t.getItemGroupActiveUsers = s);
      const c = (e) => ["accepted", "pending"].includes(e.status);
    },
    589489: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLimitedSharedItemIds = void 0);
      const o = r(937275);
      t.getLimitedSharedItemIds = (e, t, r, n) => {
        const i = e.userGroups.filter((e) => e.users.some((e) => e.userId === n && "accepted" === e.status)),
          a = new Set(i.map((e) => e.groupId)),
          s = t ?? [],
          c = (0, o.getSharedItemGroupsById)(r),
          d = s.filter(
            (e) =>
              (e.users ?? []).some((e) => e.login === n && "accepted" === e.status) ||
              (e.userGroups ?? []).some((e) => a.has(e.uuid) && "accepted" === e.status)
          ),
          l = new Set(d.map((e) => e.uuid));
        return e.itemGroups
          .filter((e) => {
            const t = e.users?.some((e) => e.userId === n && "admin" === e.permission && "accepted" === e.status),
              r = e.groups?.some((e) => a.has(e.groupId) && "admin" === e.permission && "accepted" === e.status),
              o = c[e.groupId]?.collections?.some((e) => l.has(e.uuid) && "admin" === e.permission && "accepted" === e.status);
            return !(t || r || o);
          })
          .map((e) => (e.items || []).map((e) => e.itemId))
          .reduce((e, t) => e.concat(t), [])
          .reduce((e, t) => ({ ...e, [t]: !0 }), {});
      };
    },
    978987: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sharingCapacity$ =
          t.myAcceptedItemGroupUserMembers$ =
          t.myAcceptedUserGroups$ =
          t.hasNotifications$ =
          t.pendingUserGroups$ =
          t.pendingItemGroups$ =
          t.allSharedItemIds$ =
          t.userRecipients$ =
          t.groupRecipients$ =
          t.recipientsCount$ =
          t.isShared$ =
            void 0);
      const o = r(518948),
        n = r(903343),
        i = r(684511),
        a = r(980993),
        s = r(190021);
      (t.isShared$ = (e) => {
        const t = (0, i.getIsSharedSelector)(e);
        return (0, o.pipe)((0, n.map)(t), (0, n.distinctUntilChanged)());
      }),
        (t.recipientsCount$ = (e) => {
          const t = (0, i.getRecipientsCountSelector)(e);
          return (0, o.pipe)((0, n.map)(t), (0, n.distinctUntilChanged)());
        }),
        (t.groupRecipients$ = (e) => {
          const t = (0, i.getGroupRecipientsSelector)(e);
          return (0, o.pipe)((0, n.map)(t), (0, n.distinctUntilChanged)());
        }),
        (t.userRecipients$ = (e) => {
          const t = (0, i.getUserRecipientsSelector)(e);
          return (0, o.pipe)((0, n.map)(t), (0, n.distinctUntilChanged)());
        }),
        (t.allSharedItemIds$ = () => {
          const e = a.sortedSharedItemIdsSelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        }),
        (t.pendingItemGroups$ = () => {
          const e = i.pendingItemGroupsSelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        }),
        (t.pendingUserGroups$ = () => {
          const e = i.pendingUserGroupsSelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        }),
        (t.hasNotifications$ = () => {
          const e = i.hasNotificationsSelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        }),
        (t.myAcceptedUserGroups$ = () => {
          const e = i.myAcceptedUserGroupsSelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        }),
        (t.myAcceptedItemGroupUserMembers$ = () => {
          const e = i.myAcceptedItemGroupUserMembersSelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        }),
        (t.sharingCapacity$ = () => {
          const e = s.sharingCapacitySelector;
          return (0, o.pipe)((0, n.map)(e), (0, n.distinctUntilChanged)());
        });
    },
    684511: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUserRecipientsSelector =
          t.getGroupRecipientsSelector =
          t.getRecipientsCountSelector =
          t.getIsSharedSelector =
          t.hasNotificationsSelector =
          t.myAcceptedItemGroupUserMembersSelector =
          t.myAcceptedUserGroupsSelector =
          t.pendingUserGroupsSelector =
          t.pendingItemGroupsSharedItemContentsSelector =
          t.pendingItemGroupsSelector =
          t.itemItemGroupSelector =
          t.userRecipientsSelector =
          t.groupRecipientsSelector =
          t.recipientsCountSelector =
          t.isSharedSelector =
            void 0);
      const o = r(432034),
        n = r(658107),
        i = r(471646),
        a = r(6e3),
        s = r(352102);
      (t.isSharedSelector = (e, t) => {
        const { items: r } = (0, s.sharingDataSelector)(e);
        return r.some((e) => e.itemId === t);
      }),
        (t.recipientsCountSelector = (e, t) => {
          const r = (0, s.sharingDataSelector)(e);
          return (0, n.getRecipientsCount)(r, t);
        }),
        (t.groupRecipientsSelector = (e, t) => {
          const r = (0, s.sharingDataSelector)(e);
          return (0, n.getGroupRecipients)(r, t);
        }),
        (t.userRecipientsSelector = (e, t) => {
          const r = (0, s.sharingDataSelector)(e);
          return (0, n.getUserRecipients)(r, t);
        }),
        (t.itemItemGroupSelector = (e, t) => {
          const { itemGroups: r } = (0, s.sharingDataSelector)(e);
          return (0, i.findItemItemGroup)(t, r);
        }),
        (t.pendingItemGroupsSelector = (e) => e.userSession.sharingSync.pendingItemGroups || []),
        (t.pendingItemGroupsSharedItemContentsSelector = (e) =>
          e.userSession.sharingSync.pendingItemGroups
            ? e.userSession.sharingSync.pendingItemGroups.reduce((e, t) => e.concat(t.items), [])
            : []),
        (t.pendingUserGroupsSelector = (e) => e.userSession.sharingSync.pendingUserGroups || []),
        (t.myAcceptedUserGroupsSelector = (0, o.createSelector)(
          a.loginStatusSelector,
          s.sharingDataSelector,
          ({ login: e }, { userGroups: t }) => (0, n.findMyAcceptedUserGroups)(t, e)
        )),
        (t.myAcceptedItemGroupUserMembersSelector = (0, o.createSelector)(
          a.loginStatusSelector,
          s.sharingDataSelector,
          ({ login: e }, { itemGroups: t }) => (0, n.findMyAcceptedItemGroupUserMembers)(t, e)
        )),
        (t.hasNotificationsSelector = (0, o.createSelector)(t.pendingItemGroupsSelector, t.pendingUserGroupsSelector, (e, t) =>
          [...e, ...t].some((e) => !e.seen)
        )),
        (t.getIsSharedSelector = (e) => (0, o.createSelector)(s.sharingDataSelector, ({ items: t }) => t.some((t) => t.itemId === e))),
        (t.getRecipientsCountSelector = (e) => (0, o.createSelector)(s.sharingDataSelector, (t) => (0, n.getRecipientsCount)(t, e))),
        (t.getGroupRecipientsSelector = (e) => (0, o.createSelector)(s.sharingDataSelector, (t) => (0, n.getGroupRecipients)(t, e))),
        (t.getUserRecipientsSelector = (e) => (0, o.createSelector)(s.sharingDataSelector, (t) => (0, n.getUserRecipients)(t, e)));
    },
    589698: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.acceptedItemGroupsSelector = void 0);
      const o = r(432034),
        n = r(416593),
        i = r(471646),
        a = r(352102);
      t.acceptedItemGroupsSelector = (0, o.createSelector)(
        a.sharingDataSelector,
        n.userIdSelector,
        ({ itemGroups: e, userGroups: t, collections: r }, o) => (0, i.findMyAcceptedItemGroups)(e, t, r, o)
      );
    },
    155721: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.isAllowedToShareSelector = void 0);
      const o = r(432034),
        n = r(190021);
      t.isAllowedToShareSelector = (0, o.createSelector)(n.sharingCapacitySelector, (e) => "unlimited" === e.type || e.remains > 0);
    },
    691210: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.limitedSharingItemsSelector = void 0);
      const o = r(432034),
        n = r(589489),
        i = r(416593),
        a = r(352102),
        s = r(31607);
      t.limitedSharingItemsSelector = (0, o.createSelector)(
        a.sharingDataSelector,
        s.sharedCollectionsSelector,
        s.sharedCollectionItemsSelector,
        i.userIdSelector,
        n.getLimitedSharedItemIds
      );
    },
    31607: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sharedCollectionsWithItemsSelector = t.sharedCollectionItemsSelector = t.sharedCollectionsSelector = void 0);
      const o = r(937275);
      (t.sharedCollectionsSelector = (e) => e.userSession.sharingData.collections),
        (t.sharedCollectionItemsSelector = (e) => e.userSession.sharingData.itemGroups),
        (t.sharedCollectionsWithItemsSelector = (e) => {
          const r = (0, t.sharedCollectionsSelector)(e);
          if (r?.length) {
            const n = (0, t.sharedCollectionItemsSelector)(e);
            return r.map((0, o.toCollectionModel)(n));
          }
          return [];
        });
    },
    667231: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sharedCredentialsCountSelector = void 0);
      const o = r(432034),
        n = r(980993),
        i = r(751319),
        a = r(281197);
      t.sharedCredentialsCountSelector = (0, o.createSelector)(n.sortedSharedItemIdsSelector, i.credentialsSelector, (e, t) => {
        const r = (0, a.isShared)(e);
        return t.filter(r).length;
      });
    },
    630150: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sharedItemsCountSelector = void 0);
      const o = r(432034),
        n = r(667231),
        i = r(541384);
      t.sharedItemsCountSelector = (0, o.createSelector)(n.sharedCredentialsCountSelector, i.sharedNotesCountSelector, (e, t) => e + t);
    },
    541384: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sharedNotesCountSelector = void 0);
      const o = r(432034),
        n = r(980993),
        i = r(675705),
        a = r(281197);
      t.sharedNotesCountSelector = (0, o.createSelector)(n.sortedSharedItemIdsSelector, i.notesSelector, (e, t) => {
        const r = (0, a.isShared)(e);
        return t.filter(r).length;
      });
    },
    190021: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sharingCapacitySelector = void 0);
      const o = r(432034),
        n = r(416593),
        i = r(546617),
        a = r(630150);
      t.sharingCapacitySelector = (0, o.createSelector)(a.sharedItemsCountSelector, n.premiumStatusSelector, i.getSharingCapacity);
    },
    352102: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sharingDataSelector = void 0),
        (t.sharingDataSelector = (e) => e.userSession.sharingData);
    },
    980993: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sortedSharedItemIdsSelector = void 0);
      const o = r(432034),
        n = r(352102);
      t.sortedSharedItemIdsSelector = (0, o.createSelector)(n.sharingDataSelector, ({ items: e }) => e.map((e) => e.itemId).sort());
    },
    546617: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSharingCapacity = void 0),
        (t.getSharingCapacity = (e, t) => {
          const r = t?.capabilities?.sharingLimit?.info?.limit ?? 1 / 0;
          return r === 1 / 0 ? { type: "unlimited" } : { type: "limited", remains: Math.max(0, r - e) };
        });
    },
    882366: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAuditLogDetails =
          t.validateItemGroupResponse =
          t.validateProposeSignature =
          t.isProposeSignatureValid =
          t.generateProposeSignature =
          t.isAcceptSignatureValid =
          t.generateAcceptSignature =
            void 0);
      const o = r(493513),
        n = r(453576),
        i = r(421178),
        a = r(670252),
        s = r(335587),
        c = r(732663),
        d = r(947683),
        l = r(658107),
        u = r(416593),
        S = r(288205);
      function p(e, t, r) {
        return new Promise((n, i) => {
          e.symmetricEncryption.signHmacSHA256(t, o.encode(r)).then(n, i);
        });
      }
      function m(e, t, r, o) {
        return p(e, o, r).then((e) => t === e);
      }
      function g(e) {
        return "validProposeSignature" in e;
      }
      function E(e) {
        const t = g(e) ? e.validProposeSignature : "not-found",
          r = g(e) && void 0 !== e.matchProposeSignature ? e.matchProposeSignature : "not-found";
        return `  Status:${e.status} Permission:${e.permission} ValidProposeSignature:${t} MatchesProposeSignature:${r}`;
      }
      async function A(e, t, r, o) {
        return await (0, s.asyncMap)(e, async (e) => {
          const n = t.find((t) => t.userId === e.userId);
          return {
            ...e,
            validProposeSignature: await m(r, e.proposeSignature, e.userId, o),
            matchProposeSignature: n && e ? n.proposeSignature === e.proposeSignature : void 0
          };
        });
      }
      (t.generateAcceptSignature = function (e, t, r, n) {
        return new Promise((i, a) => {
          e.asymmetricEncryption.sign(t, o.encode(r + "-accepted-" + n)).then(i, a);
        });
      }),
        (t.isAcceptSignatureValid = function (e, t, r, o) {
          return new Promise((n, i) => {
            e.asymmetricEncryption.verify(r, t, o).then(n, i);
          });
        }),
        (t.generateProposeSignature = p),
        (t.isProposeSignatureValid = m),
        (t.validateProposeSignature = async function (e, t, r, o, n) {
          if (!(await t.symmetricEncryption.verifyHmacSHA256(r, o, n))) {
            const t = new Error(`${e}: INVALID_PROPOSE_CREATION Failed to validate newly created propose signature`);
            throw ((0, a.sendExceptionLog)({ error: t }), t);
          }
        }),
        (t.validateItemGroupResponse = async function (e, t, r, o, n, i, u, S, p, g = !1, I) {
          try {
            const y = await (0, c.asyncFilter)(S, async (e) => !(await m(t, e.proposeSignature, e.userId, i))),
              v = await (0, c.asyncFilter)(r.itemGroups, async (e) => !(await (0, d.validateItemGroup)(e, p, n, o, u, I)).isValid);
            if (g ? y.length > 0 : v.length > 0 || y.length > 0) {
              const r = (function (e, t, r) {
                return [
                  `${e}: INVALID_PROPOSE_IN_RESPONSE Invalid item group on share`,
                  t
                    .map(
                      (e) =>
                        `Invalid Uploaded User UsingAlias:${"alias" in e ? !!e.proposeSignatureUsingAlias : "updating"} Permission:${
                          e.permission
                        }`
                    )
                    .join("\n"),
                  r
                    .map((e) =>
                      [
                        `Invalid ItemGroup ID:${e.groupId} Revision:${e.revision} TeamID:${e.teamId} MatchItemGroupKey:${e.matchItemGroupKey}`,
                        "Invalid ItemGroup Users:",
                        e.users.map(E).join("\n")
                      ].join("\n")
                    )
                    .join("\n")
                ].join("\n");
              })(
                e,
                y,
                await (0, s.asyncMap)(v, async (e) => ({
                  ...e,
                  users: await A(e.users, S, t, i),
                  matchItemGroupKey: i === (await (0, l.getItemGroupKey)(e, p, n, u, I))
                }))
              );
              await (0, a.sendExceptionLog)({ error: new Error(r) });
            }
          } catch (e) {
            (e.message = `[validateItemGroupResponse]: ERROR_VALIDATING_PROPOSE_IN_RESPONSE Error validating item group response ${e.message}`),
              await (0, a.sendExceptionLog)({ error: e });
          }
        }),
        (t.createAuditLogDetails = async function (e, t, r) {
          const o = (0, u.activeSpacesSelector)(t)[0],
            a = (await (0, S.makeFeatureFlipsSelectors)(e).featureFlipsSelector()).audit_logs_sharing,
            s = (!!r?.SpaceId && o?.info?.collectSensitiveDataAuditLogsEnabled) ?? !1;
          if (!a || !s) return;
          const c = ((0, n.isCredential)(r) && r?.Url ? new i.ParsedURL(r?.Url).getHostname() : "") || "";
          return {
            captureLog: s,
            domain: (0, n.isCredential)(r) ? c : void 0,
            type: (0, n.isCredential)(r) ? "AUTHENTIFIANT" : "SECURENOTE"
          };
        });
    },
    183687: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getSharingStatusDetail = t.getSharingStatusItem = t.getNotShared = void 0);
      const o = r(401067),
        n = r(859890),
        i = r(658107),
        a = r(471646);
      t.getNotShared = () => ({ isShared: !1 });
      const s = (e, t) => (e[t] ? "limited" : "admin");
      (t.getSharingStatusItem = (0, o.curry)((e, r, o) =>
        (0, n.binaryContains)(e, o) ? { isShared: !0, permission: s(r, o) } : (0, t.getNotShared)()
      )),
        (t.getSharingStatusDetail = (0, o.curry)((e, r, o, n) => {
          const { itemGroups: c, userGroups: d } = r,
            l = (0, a.findItemItemGroup)(n, c);
          if (!l) return (0, t.getNotShared)();
          const u = (0, i.getRecipientsCount)(r, n);
          return {
            groupSharing: (0, i.doesUserReceiveItemGroupViaGroup)(l, d, o),
            isShared: !0,
            lastAdmin: (0, i.isUserLastAdmin)(l, o),
            permission: s(e, n),
            recipientsCount: u
          };
        }));
    },
    263623: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.doesUserReceiveItemViaGroup =
          t.isUserLastAdminOnItem =
          t.setPendingElementsAsSeen =
          t.handleSharingResponse =
          t.handleUpdateSharingPermission =
          t.handleRevokeSharing =
          t.handleShareItemRequest =
          t.emptySessionResponse =
          t.getFreshUserGroups =
          t.updateUserGroupMembers =
          t.getSharedData =
          t.computeUserGroupMember =
          t.extractAliasesFromMembers =
          t.revokeUserGroupMembers =
          t.inviteUserGroupMembers =
          t.renameUserGroup =
          t.deleteUserGroup =
          t.deleteItemGroup =
          t.createSpecialItemGroup =
          t.createSpecialUserGroup =
          t.createUserGroup =
          t.buildSharingData =
          t.mergeSharingData =
          t.getCleanSharingData =
          t.getOutdatedSharingParams =
            void 0);
      const o = r(401067),
        n = r(453576),
        i = r(660765),
        a = r(684827),
        s = r(670252),
        c = r(795623),
        d = r(144197),
        l = r(503735),
        u = r(749551),
        S = r(319697),
        p = r(658107),
        m = r(471646),
        g = r(155721),
        E = r(727885);
      function A(e, { groupId: t, revision: r }) {
        if (!e.privateKey) throw new Error("PRIVATE_KEY_MISSING");
        if (!t) throw new Error("GROUP_ID_MISSING");
        if (!r) throw new Error("GROUP_REVISION_MISSING");
      }
      function I(e, t) {
        return {
          itemIds: e.items.filter(({ id: e, timestamp: r }) => !t.items.find((t) => t.itemId === e && t.timestamp >= r)).map((e) => e.id),
          itemGroupIds: e.itemGroups
            .filter(({ id: e, revision: r }) => !t.itemGroups.find((t) => t.groupId === e && t.revision === r))
            .map((e) => e.id),
          userGroupIds: e.userGroups
            .filter(({ id: e, revision: r }) => !t.userGroups.find((t) => t.groupId === e && t.revision === r))
            .map((e) => e.id)
        };
      }
      function y(e, t) {
        const { items: r, itemGroups: o, userGroups: n } = e;
        return {
          items: t.items.filter((e) => r.find((t) => t.id === e.itemId)),
          itemGroups: t.itemGroups.filter((e) => o.find((t) => t.id === e.groupId)),
          userGroups: t.userGroups.filter((e) => n.find((t) => t.id === e.groupId))
        };
      }
      function v(e, t) {
        const r = (e, t, r) => {
          const o = t.filter((t) => !e.find((e) => r(e) === r(t)));
          return e.map((e) => t.find((t) => r(t) === r(e)) || e).concat(o);
        };
        return {
          items: r(e.items, t.items, o.prop("itemId")),
          itemGroups: r(e.itemGroups, t.itemGroups, o.prop("groupId")),
          userGroups: r(e.userGroups, t.userGroups, o.prop("groupId"))
        };
      }
      (t.getOutdatedSharingParams = I),
        (t.getCleanSharingData = y),
        (t.mergeSharingData = v),
        (t.buildSharingData = async function (e, t, r, n, i) {
          const a = y(n, i),
            s = I(n, a),
            c = o.unnest(o.values(s));
          return o.compose(o.equals(0), o.length)(c) ? a : v(a, await O(e, t, r, s));
        });
      const T = (e, t, r) => {
        const o = (0, E.getNodePremiumStatusSpaceData)(r),
          n = o.spaces.find((t) => Number(t.teamId) === e);
        if (!n) throw new Error("TEAM_NOT_FOUND");
        if (!(0, E.hasSpecialUserGroupAccessInSpace)(n.teamId, o)) throw new Error("USER_DOES_NOT_HAVE_SPECIAL_USER_GROUP_ACCESS_FOR_TEAM");
        if (!t.privateKey) throw new Error("PRIVATE_KEY_MISSING");
      };
      function _(e, t, r) {
        return (
          (0, s.sendExceptionLog)({ error: t }),
          c.Debugger.log(e, t),
          Promise.resolve({ userGroups: [], error: { message: t.message, action: r } })
        );
      }
      function f(e) {
        return JSON.stringify(e.map((e) => e.Alias));
      }
      function C(e, t) {
        return e.map((e) => {
          if (!t[e.Alias]) throw new Error(`User details not found for alias: ${e.Alias}`);
          return { Alias: e.Alias, Login: t[e.Alias].login, PublicKey: t[e.Alias].publicKey, Permission: e.Permission };
        });
      }
      async function O(e, t, r, o) {
        if (!(o.itemIds || o.itemGroupIds || o.userGroupIds)) throw new Error("MISSING_PARAMETERS");
        const n = { ...o, type: "getSharing", sharingVersion: 4 },
          { itemErrors: i, items: a, itemGroupErrors: s, itemGroups: c, userGroupErrors: d, userGroups: l } = await e.sharing.get(t, r, n);
        if (i && i.length) throw new Error(i[0].message);
        if (s && s.length) throw new Error(s[0].message);
        if (d && d.length) throw new Error(d[0].message);
        return { items: a, itemGroups: c, userGroups: l };
      }
      (t.createUserGroup = function (e, t, r, o) {
        return Promise.resolve()
          .then(
            () => (
              T(o.teamId, t, e.store),
              e.userGroup
                .makeUserGroupAdminItem()
                .then((n) => Promise.all([e.userGroup.makeCreateUserGroupEvent(t, r, o, n), Promise.resolve(n)]))
            )
          )
          .then(([n, i]) =>
            e.userGroup
              .createUserGroup(t, r.teams[o.teamId], n)
              .then(({ userGroups: e, itemGroups: t }) => ({ userGroups: e, userGroupAdminItem: i, itemGroups: t }))
          )
          .catch((e) => _("Error while creating userGroup ", e, o));
      }),
        (t.createSpecialUserGroup = function (e, t, r, o) {
          const i = { teamId: o, name: "_team_admin_user_group" };
          return Promise.resolve()
            .then(() => {
              T(o, t, e.store);
              const i = r.spaces
                  .find((e) => Number(e.teamId) === o)
                  .details.teamAdmins.map((e) => ({
                    Alias: e.login,
                    Login: e.login,
                    Permission: "admin",
                    Status: e.login === t.login ? n.SpaceStatus.Accepted : n.SpaceStatus.Pending
                  })),
                a = f(i);
              return e.userGroup
                .findExistingUsersByAliases({ login: t.login, uki: t.uki, aliases: a })
                .then((e) => ({ findUserServiceResponse: e, members: i }));
            })
            .then(({ findUserServiceResponse: r, members: o }) => {
              const n = C(o, r);
              return e.userGroup.makeCreateSpecialUserGroupEvent(t, i, n);
            })
            .then((r) => e.userGroup.createUserGroup(t, { teamId: String(o) }, r))
            .then(({ userGroups: e }) => e && e.length && e[0]);
        }),
        (t.createSpecialItemGroup = function (e, t, r, o) {
          return Promise.resolve()
            .then(() => (T(r.teamId, t, e.store), e.itemGroup.makeCreateSpecialItemGroupEvent(t, r, o)))
            .then((r) => e.itemGroup.createSpecialItemGroup(t, r));
        }),
        (t.deleteItemGroup = function (e, t, { groupId: r, revision: o }) {
          return Promise.resolve()
            .then(
              () => (
                A(t, { groupId: r, revision: o }), e.itemGroup.makeDeleteItemGroupEvent(r, o).then((r) => e.itemGroup.deleteItemGroup(t, r))
              )
            )
            .catch((e) => (_("Error while deleting itemGroup ", e, { groupId: r, revision: o }), []));
        }),
        (t.deleteUserGroup = function (e, t, r, o) {
          const n = (0, d.findTeamForGroup)(r, o.groupId);
          return Promise.resolve()
            .then(() => {
              A(t, o);
              const { groupId: r, revision: i } = o,
                a = ((n && n.userGroupAdminItems) || []).find((e) => e.groupId === o.groupId),
                s = n.specialItemGroup && n.specialItemGroup.revision;
              return e.userGroup.makeDeleteUserGroupEvent(r, i, a.itemId, s);
            })
            .then((r) => e.userGroup.deleteUserGroup(t, n, r))
            .catch((e) => _("Error while deleting userGroup ", e, o));
        }),
        (t.renameUserGroup = function (e, t, r) {
          return Promise.resolve()
            .then(() => {
              A(t, r);
              const { groupId: o, revision: n, name: i } = r;
              return e.userGroup.makeRenameUserGroupEvent(o, n, i).then((r) => e.userGroup.renameUserGroup(t, r));
            })
            .catch((e) => _("Error while renaming userGroup ", e, r));
        }),
        (t.inviteUserGroupMembers = function (e, t, r, o, n) {
          return Promise.resolve()
            .then(() => {
              if ((A(t, o), 0 === o.users.length)) throw new Error("USERS_NOT_SUPPLIED");
              const { login: i, uki: a } = t,
                s = JSON.stringify(o.users.map((e) => e.alias));
              return e.userGroup
                .findUsersByAliases({ login: i, uki: a, aliases: s })
                .then((i) => {
                  const a = o.users.map((e) => {
                      const t = { Alias: e.alias, Permission: e.permission },
                        r = i[e.alias];
                      if (!r) return t;
                      const { login: o, publicKey: n } = r;
                      return o && n ? { ...t, Login: o, PublicKey: n } : t;
                    }),
                    { revision: s } = o,
                    c = (0, d.getUserGroupAdminItem)(r, n.teamId.toString(), n.groupId);
                  if (!c) throw new Error("USER_GROUP_ADMIN_ITEM_NOT_AVAILABLE");
                  return e.userGroup.makeInviteMembersEventAsAdmin(c, s, t, a);
                })
                .then((r) => e.userGroup.inviteUserGroupMembers(t, r));
            })
            .catch((e) => _("Error while inviteUserGroupMembers", new Error(`[SharingController] - inviteUserGroupMembers: ${e}`), o))
            .then((e) => Object.assign({ refusedMembers: {} }, e));
        }),
        (t.revokeUserGroupMembers = async function (e, t, r) {
          try {
            if ((A(t, r), 0 === r.users.length)) throw new Error("USERS_NOT_SUPPLIED");
            const { groupId: o, revision: n, users: i } = r,
              a = await e.userGroup.makeRevokeMembersEvent(o, n, i),
              { userGroups: s } = await e.userGroup.revokeUserGroupMembers(t, a);
            return { userGroups: s };
          } catch (e) {
            return _("Error while revokeUserGroupMembers", e, r);
          }
        }),
        (t.extractAliasesFromMembers = f),
        (t.computeUserGroupMember = C),
        (t.getSharedData = O),
        (t.updateUserGroupMembers = async function (e, t, r) {
          if ((A(t, r), 0 === r.users.length)) throw new Error("USERS_NOT_SUPPLIED");
          const { login: o, uki: n } = t,
            { groupId: i, revision: a, users: s } = r,
            c = JSON.stringify(s.map((e) => e.alias)),
            d = await e.userGroup.findExistingUsersByAliases({ login: o, uki: n, aliases: c }),
            l = s.map((e) => ({ Alias: e.alias, Login: d[e.alias].login, PublicKey: d[e.alias].publicKey, Permission: e.permission })),
            u = await e.userGroup.makeUpdateMembersEvent(i, a, l),
            { userGroups: S } = await e.userGroup.updateUserGroupMembers(t, u);
          return { userGroups: S };
        }),
        (t.getFreshUserGroups = function (e, t, r) {
          const { login: o, uki: n } = t;
          return O(e, o, n, { itemIds: [], itemGroupIds: [], userGroupIds: r.map((e) => e.groupId) }).then((e) => e.userGroups);
        }),
        (t.emptySessionResponse = function (e) {
          return Promise.reject({ error: { message: "SESSION_EMPTY", action: e } });
        }),
        (t.handleShareItemRequest = async function e(t, r, o, a, d = !0) {
          const { storeService: S, applicationModulesAccess: p, sessionService: m, wsService: E } = t,
            { ITEM_DOESNT_EXIST: A, LIMIT_EXCEEDED: I, ITEM_HAS_ATTACHMENTS: y, SHARING_FAILED: v } = n.ShareItemFailureReason;
          await m.getInstance().user.requestNewSync(i.Trigger.Sharing);
          const T = S.getPersonalData(),
            _ = (0, u.findDataModelObject)(r, T.credentials),
            f = T.notes.find((e) => e.Id === r),
            C = _ || f;
          if (!C) return { success: !1, reason: A };
          const O = S.getSharingData().itemGroups.find((e) => e && e.items && !!e.items.find((e) => e.itemId === r)),
            D = S.getState();
          if (!(0, g.isAllowedToShareSelector)(D)) return { success: !1, reason: I };
          if (C.Attachments && C.Attachments.length > 0) return { success: !1, reason: y };
          try {
            O ? await (0, l.shareAlreadySharedItem)(p, S, E, O, o, a) : await (0, l.shareUnsharedItem)(p, S, E, C, o, a);
          } catch (n) {
            if (!d || !h(n)) {
              const e = new Error(`[SharingController] - handleShareItemRequest: ${n}`);
              return c.Debugger.log("ERROR", e), (0, s.sendExceptionLog)({ error: e }), { success: !1, reason: v, message: `${e}` };
            }
            try {
              return await m.getInstance().user.requestNewSync(i.Trigger.Sharing), e(t, r, o, a, !1);
            } catch (e) {
              const t = new Error(`[SharingController] - handleShareItemRequest (syncAndRetryOnConflict): ${e}`);
              return c.Debugger.log("ERROR", t), (0, s.sendExceptionLog)({ error: t }), { success: !1, reason: v, message: `${t}` };
            }
          }
          return m.getInstance().user.requestNewSync(i.Trigger.Sharing), { success: !0 };
        });
      const h = (e) => {
        const t = "INVALID_ITEM_GROUP_REVISION";
        return ("getAdditionalInfo" in e && e.getAdditionalInfo().webServiceSubMessage === t) || e.message.includes(t);
      };
      (t.handleRevokeSharing = async function e(t, r, o, a, c, d, u = !0) {
        const { NOT_FOUND: S, FORBIDDEN: p, REVOKE_FAILED: m } = n.RevokeSharingFailureReason,
          g = "[SharingController] - handleRevokeSharing",
          { itemGroups: E, userGroups: A } = r.getSharingData(),
          I = E.find((e) => e && e.groupId === c);
        if (!I) return { success: !1, reason: S, message: "This itemGroup couldn't be found." };
        const y = r.getUserLogin();
        if (!(0, l.isUserItemGroupAdmin)(I, A, y)) return { success: !1, reason: p, message: "Only an admin can perform this operation." };
        try {
          await (0, l.revokeItemGroupMember)(t, r, a, I, d);
        } catch (n) {
          if (u && h(n))
            try {
              return await o.getInstance().user.requestNewSync(i.Trigger.Sharing), e(t, r, o, a, c, d, !1);
            } catch (e) {
              const t = new Error(`${g} (syncAndRetryOnConflict): ${e}`);
              return (0, s.sendExceptionLog)({ error: t }), { success: !1, reason: m, message: `${t}` };
            }
          const l = new Error(`${g}: ${n}`);
          return (0, s.sendExceptionLog)({ error: l }), { success: !1, reason: m, message: `${l}` };
        }
        return o.getInstance().user.requestNewSync(i.Trigger.Sharing), { success: !0 };
      }),
        (t.handleUpdateSharingPermission = async function e(t, r, o, a, c, d, u = !0) {
          const { NOT_FOUND: S, FORBIDDEN: p, UPDATE_FAILED: m } = n.UpdateSharingPermissionFailureReason,
            g = "[SharingController] - handleUpdateSharingPermission",
            { itemGroups: E, userGroups: A } = t.getSharingData(),
            I = E.find((e) => e && e.groupId === a);
          if (!I) return { success: !1, reason: S, message: "This itemGroup couldn't be found." };
          const y = t.getUserLogin();
          if (!(0, l.isUserItemGroupAdmin)(I, A, y))
            return { success: !1, reason: p, message: "Only an admin can perform this operation." };
          try {
            await (0, l.updateSharingPermission)(t, o, I, c, d);
          } catch (n) {
            if (u && h(n))
              try {
                return await r.getInstance().user.requestNewSync(i.Trigger.Sharing), e(t, r, o, a, c, d, !1);
              } catch (e) {
                const t = new Error(`${g} (syncAndRetryOnConflict): ${e}`);
                return (0, s.sendExceptionLog)({ error: t }), { success: !1, reason: m, message: `${t}` };
              }
            const l = new Error(`${g}: ${n}`);
            return (0, s.sendExceptionLog)({ error: l }), { success: !1, reason: m, message: `${l}` };
          }
          return r.getInstance().user.requestNewSync(i.Trigger.Sharing), { success: !0 };
        }),
        (t.handleSharingResponse = async function (e, t, r, o) {
          const { itemGroups: n, status: a, userGroups: s } = o,
            c = { successes: [], failures: [] },
            d = s.length > 0 ? await (0, l.handlePendingUserGroupsResponse)(t, s, a) : c,
            u = n.length > 0 ? await (0, l.handlePendingItemGroupsResponse)(e, t, n, a) : c;
          (0, S.default)().sendSharingResponseResult({ status: a, itemGroups: u, userGroups: d }),
            r.getInstance().user.requestNewSync(i.Trigger.Sharing);
        }),
        (t.setPendingElementsAsSeen = function (e, t, r) {
          const o = (0, a.setElementsAsSeenAction)(r.pendingItemGroupIds, r.pendingUserGroupIds);
          e.dispatch(o);
          const { sharingSync: n } = e.getState().userSession;
          t.getInstance().storeSharingSync(n);
        }),
        (t.isUserLastAdminOnItem = function (e, t) {
          const r = e.getUserLogin(),
            { itemGroups: o } = e.getSharingData(),
            n = (0, m.findItemItemGroup)(t, o);
          return !!n && (0, p.isUserLastAdmin)(n, r);
        }),
        (t.doesUserReceiveItemViaGroup = function (e, t) {
          const r = e.getUserLogin(),
            { itemGroups: o, userGroups: n } = e.getSharingData(),
            i = (0, m.findItemItemGroup)(t, o);
          return !!i && (0, p.doesUserReceiveItemGroupViaGroup)(i, n, r);
        });
    },
    122652: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(848584),
        n = r(228183);
      t.config = {
        commands: {},
        queries: {
          getSharingUsers: { selector: o.viewedSharingUsersSelector },
          getSharingUserPermissionLevel: { selector: o.sharingUserPermissionLevelSelector }
        },
        liveQueries: {
          liveSharingUsers: { operator: n.sharingUsers$ },
          liveSharingUserPermissionLevel: { operator: n.sharingUserPermissionLevel$ }
        }
      };
    },
    228183: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sharingUserPermissionLevel$ = t.sharingUsers$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(848584),
        a = r(735893),
        s = r(433627);
      (t.sharingUsers$ = (e) => {
        const t = (0, a.parseToken)(e),
          r = (0, i.createLiveSharingUsersSelector)(t.spaceId)(t.dataQuery);
        return (0, o.pipe)(
          (0, n.map)(r),
          (0, n.distinctUntilChanged)((e, t) => (0, s.sameBatch)(e.items, t.items) && e.matchingCount === t.matchingCount)
        );
      }),
        (t.sharingUserPermissionLevel$ = (e) => {
          const t = (0, i.getSharingUserPermissionLevelSelector)((0, a.parseToken)(e));
          return (0, o.pipe)((0, n.map)(t), (0, n.distinctUntilChanged)());
        });
    },
    807261: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSharingUserMappers = void 0),
        (t.getSharingUserMappers = () => ({ id: (e) => e.userId, itemCount: (e) => e.itemCount }));
    },
    570963: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.sharingUserMatch = t.searchGetters = void 0);
      const o = r(382234),
        n = r(64455);
      (t.searchGetters = [(0, o.stringProp)("userId")]), (t.sharingUserMatch = (0, n.match)(t.searchGetters));
    },
    848584: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSharingUserPermissionLevelSelector =
          t.sharingUserPermissionLevelSelector =
          t.createLiveSharingUsersSelector =
          t.viewedSharingUsersSelector =
          t.sharingUserMappersSelector =
            void 0);
      const o = r(401067),
        n = r(432034),
        i = r(563566),
        a = r(324589),
        s = r(497006),
        c = r(416593),
        d = r(807261),
        l = r(963925),
        u = r(570963),
        S = r(658107),
        p = r(589698),
        m = r(684511),
        g = (e) =>
          (0, n.createSelector)(
            p.acceptedItemGroupsSelector,
            c.userIdSelector,
            (e) => e,
            (t, r, o) => (0, S.getSharingUsersFromItemGroups)(o, r, t, e)
          );
      t.sharingUserMappersSelector = () => (0, d.getSharingUserMappers)();
      const E = () => u.sharingUserMatch;
      (t.viewedSharingUsersSelector = (e, r) => {
        const n = ((e) => {
          const r = g(e);
          return (0, a.getQuerySelector)(r, E, t.sharingUserMappersSelector);
        })(r.spaceId);
        return (0, o.compose)((0, i.viewListResults)(l.listView), n)(e, r.dataQuery);
      }),
        (t.createLiveSharingUsersSelector = (e) => {
          const r = g(e);
          return (0, s.makeLiveSelectorGetter)(r, () => l.listView, E, t.sharingUserMappersSelector);
        }),
        (t.sharingUserPermissionLevelSelector = (e, { itemId: t, userId: r }) => {
          const o = (0, m.itemItemGroupSelector)(e, t);
          if (o) return (0, S.getSharingUserPermission)(o, r);
        }),
        (t.getSharingUserPermissionLevelSelector =
          ({ itemId: e, userId: r }) =>
          (o) =>
            (0, t.sharingUserPermissionLevelSelector)(o, { itemId: e, userId: r }));
    },
    963925: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.detailView = void 0);
      const o = (0, r(401067).defaultTo)("");
      (t.detailView = (e) => ({ id: o(e.userId), itemCount: e.itemCount })), (t.listView = (e) => e.map(t.detailView));
    },
    423944: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(496247),
        n = r(279570),
        i = r(701190);
      t.config = {
        commands: {},
        queries: {
          getUserGroups: { selector: o.viewedUserGroupsSelector },
          getUserGroup: { selector: o.viewedUserGroupSelector },
          getUserGroupPermissionLevel: { selector: o.userGroupPermissionLevelSelector },
          getUserGroupMembers: { selector: i.viewedUserGroupMembersSelector }
        },
        liveQueries: {
          liveUserGroups: { operator: n.userGroups$ },
          liveUserGroupPermissionLevel: { operator: n.userGroupPermissionLevel$ }
        }
      };
    },
    400779: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUserDownloadMappers = void 0),
        (t.getUserDownloadMappers = () => ({ id: (e) => e.userId }));
    },
    979850: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.userDownloadMatch = t.searchGetters = void 0);
      const o = r(382234),
        n = r(64455);
      (t.searchGetters = [(0, o.stringProp)("userId")]), (t.userDownloadMatch = (0, n.match)(t.searchGetters));
    },
    701190: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.viewedUserGroupMembersSelector = t.userDownloadMappersSelector = t.getUserGroupSelector = t.activeUserGroupsSelector = void 0);
      const o = r(432034),
        n = r(401067),
        i = r(324589),
        a = r(400779),
        s = r(979850),
        c = r(563566),
        d = r(399729),
        l = r(352102),
        u = r(416593),
        S = r(658107);
      (t.activeUserGroupsSelector = (0, o.createSelector)(l.sharingDataSelector, u.userIdSelector, (e, t) => {
        const { userGroups: r } = e;
        return (0, S.findMyAcceptedUserGroups)(r, t);
      })),
        (t.getUserGroupSelector = (e) => (0, o.createSelector)(t.activeUserGroupsSelector, (t) => (0, S.findUserGroup)(t, e))),
        (t.userDownloadMappersSelector = () => (0, a.getUserDownloadMappers)());
      const p = () => s.userDownloadMatch,
        m = (e) => {
          const r = ((e) => {
            const r = (0, t.getUserGroupSelector)(e);
            return (0, o.createSelector)(r, (e) => e?.users || []);
          })(e);
          return (0, i.getQuerySelector)(r, p, t.userDownloadMappersSelector);
        };
      t.viewedUserGroupMembersSelector = (e, t) => {
        const r = m(t.groupId);
        return (0, n.compose)((0, c.viewListResults)(d.listView), r)(e, t.dataQuery);
      };
    },
    399729: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.detailView = void 0);
      const o = (0, r(401067).defaultTo)("");
      (t.detailView = (e) => ({ id: o(e.userId), permission: e.permission })), (t.listView = (e) => e.map(t.detailView));
    },
    279570: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.userGroupPermissionLevel$ = t.userGroups$ = void 0);
      const o = r(518948),
        n = r(903343),
        i = r(735893),
        a = r(496247),
        s = r(433627);
      (t.userGroups$ = (e) => {
        const t = (0, i.parseToken)(e),
          r = (0, a.createLiveUserGroupsSelector)(t.spaceId)(t.dataQuery);
        return (0, o.pipe)(
          (0, n.map)(r),
          (0, n.distinctUntilChanged)((e, t) => (0, s.sameBatch)(e.items, t.items) && e.matchingCount === t.matchingCount)
        );
      }),
        (t.userGroupPermissionLevel$ = (e) => {
          const t = (0, a.getUserGroupPermissionLevelSelector)((0, i.parseToken)(e));
          return (0, o.pipe)((0, n.map)(t), (0, n.distinctUntilChanged)());
        });
    },
    395414: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUserGroupMappers = void 0),
        (t.getUserGroupMappers = () => ({ name: (e) => e.name, id: (e) => e.groupId, itemCount: (e) => e.itemCount }));
    },
    510547: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.userGroupMatch = t.searchGetters = void 0);
      const o = r(382234),
        n = r(64455);
      (t.searchGetters = [(0, o.stringProp)("name")]), (t.userGroupMatch = (0, n.match)(t.searchGetters));
    },
    496247: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getUserGroupPermissionLevelSelector =
          t.userGroupPermissionLevelSelector =
          t.viewedUserGroupSelector =
          t.createLiveUserGroupsSelector =
          t.viewedUserGroupsSelector =
          t.userGroupMappersSelector =
          t.createActiveUserGroupsSelector =
            void 0);
      const o = r(401067),
        n = r(432034),
        i = r(563566),
        a = r(324589),
        s = r(497006),
        c = r(416593),
        d = r(510547),
        l = r(395414),
        u = r(354719),
        S = r(352102),
        p = r(658107),
        m = r(684511);
      (t.createActiveUserGroupsSelector = (e) =>
        (0, n.createSelector)(
          S.sharingDataSelector,
          c.userIdSelector,
          (e) => e,
          (t, r, o) => {
            const { userGroups: n, itemGroups: i } = t;
            return (0, p.findMyAcceptedUserGroups)(n, r).map((t) => {
              const r = (0, p.findUserGroupItemGroups)(t.groupId, i).reduce(
                (t, r) => (null === e || (0, p.doesItemGroupExistInSpace)(o, r, e) ? t + r.items.length : t),
                0
              );
              return { ...t, itemCount: r };
            });
          }
        )),
        (t.userGroupMappersSelector = () => (0, l.getUserGroupMappers)());
      const g = () => d.userGroupMatch;
      (t.viewedUserGroupsSelector = (e, r) => {
        const n = ((e) => {
          const r = (0, t.createActiveUserGroupsSelector)(e);
          return (0, a.getQuerySelector)(r, g, t.userGroupMappersSelector);
        })(r.spaceId);
        return (0, o.compose)((0, i.viewListResults)(u.listView), n)(e, r.dataQuery);
      }),
        (t.createLiveUserGroupsSelector = (e) => {
          const r = (0, t.createActiveUserGroupsSelector)(e);
          return (0, s.makeLiveSelectorGetter)(r, () => u.listView, g, t.userGroupMappersSelector);
        }),
        (t.viewedUserGroupSelector = (e, r) => {
          const { itemGroups: o } = (0, S.sharingDataSelector)(e),
            n = (0, t.createActiveUserGroupsSelector)(null)(e),
            i = (0, p.findUserGroup)(n, r),
            a = (0, p.findUserGroupItemGroups)(i.groupId, o).length;
          if (i) return (0, u.detailView)({ ...i, itemCount: a });
        }),
        (t.userGroupPermissionLevelSelector = (e, { itemId: t, groupId: r }) => {
          const o = (0, m.itemItemGroupSelector)(e, t);
          return (0, p.getUserGroupPermission)(o, r);
        }),
        (t.getUserGroupPermissionLevelSelector =
          ({ itemId: e, groupId: r }) =>
          (o) =>
            (0, t.userGroupPermissionLevelSelector)(o, { itemId: e, groupId: r }));
    },
    354719: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.listView = t.detailView = void 0);
      const o = r(401067),
        n = r(399729),
        i = (0, o.defaultTo)("");
      (t.detailView = (e) => ({ name: i(e.name), id: i(e.groupId), users: (0, n.listView)(e.users || []), itemCount: e.itemCount })),
        (t.listView = (e) => e.map(t.detailView));
    },
    386833: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(236768);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    667312: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.convertItemToDashlaneXml = t.ConvertItemToDashlaneXmlErrorCode = void 0);
      const o = r(761797);
      var n;
      !(function (e) {
        (e.INVALID_XML = "INVALID_XML"), (e.NOT_AUTHENTICATED = "NOT_AUTHENTICATED");
      })((n = t.ConvertItemToDashlaneXmlErrorCode || (t.ConvertItemToDashlaneXmlErrorCode = {}))),
        (t.convertItemToDashlaneXml = async function (e, t) {
          const { storeService: r } = e;
          if (!r.isAuthenticated()) return { success: !1, error: { code: n.NOT_AUTHENTICATED } };
          const { item: i } = t,
            a = (0, o.getDashlaneXml)(i);
          return a && "" !== a ? { success: !0, xml: a } : { success: !1, error: { code: n.INVALID_XML } };
        });
    },
    595326: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.shareItem = t.ShareItemErrorCode = void 0);
      const o = r(670252),
        n = r(263623);
      var i;
      !(function (e) {
        e.NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
      })((i = t.ShareItemErrorCode || (t.ShareItemErrorCode = {}))),
        (t.shareItem = async function (e, t) {
          const { storeService: r } = e;
          if (!r.isAuthenticated()) return { success: !1, error: { code: i.NOT_AUTHENTICATED } };
          try {
            const { itemId: r, permission: o, recipients: i } = t;
            return await (0, n.handleShareItemRequest)(e, r, o, i);
          } catch (e) {
            const t = `[SessionController] - shareItem: ${e}`,
              r = new Error(t);
            return (0, o.sendExceptionLog)({ error: r }), { success: !1, error: { code: t } };
          }
        });
    },
    133719: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = t.setupSubscriptions = void 0);
      const o = r(253858);
      Object.defineProperty(t, "setupSubscriptions", {
        enumerable: !0,
        get: function () {
          return o.setupSubscriptions;
        }
      });
      var n = r(386833);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return n.bootstrap;
        }
      });
    },
    253858: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.setupSubscriptions = void 0);
      const o = r(736513),
        n = r(736884),
        i = r(478096);
      t.setupSubscriptions = async function (e, t) {
        const { sessionService: r, storeService: a, wsService: s } = t,
          c = (0, o.makeCryptoService)(),
          d = (0, n.makeItemGroupService)(s, c);
        e.teamSpaceContentControlDone.on((e) => {
          (0, i.revokeRemoteControlledSharedItems)(r, a, s, d, e);
        });
      };
    },
    383400: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.config = void 0);
      const o = r(985406),
        n = r(139003),
        i = r(498337);
      t.config = {
        commands: {},
        queries: {
          getBanks: { staticDataHandler: o.getBanks },
          getAllBanks: { staticDataHandler: o.getAllBanks },
          getAllCallingCodes: { staticDataHandler: n.getAllCallingCodes },
          getSecureDocumentsExtensionsList: { staticDataHandler: i.getSecureDocumentsAllowedExtensions }
        },
        liveQueries: {}
      };
    },
    782912: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.banks = void 0);
      const o = r(453576);
      t.banks = {
        [o.Country.AR]: [
          { localizedString: "Banco Credicoop", code: "BANCOCREDICOOP" },
          { localizedString: "Banco de la Nación Argentina", code: "BANCODELANACIONARGEN" },
          { localizedString: "Banco Hipotecario", code: "BANCOHIPOTECARIO" },
          { localizedString: "Banco Itaú Argentina", code: "BANCOITAUARGENTINA" },
          { localizedString: "Banco Macro", code: "BANCOMACRO" },
          { localizedString: "Banco Patagonia", code: "BANCOPATAGONIA" },
          { localizedString: "Banco Santander Río", code: "BANCOSANTANDERRIO" },
          { localizedString: "Bank of the City of Buenos Aires", code: "BANKOFTHECITYOFBUENO" },
          { localizedString: "Bank of the Province of Buenos Aires", code: "BANKOFTHEPROVINCEOFB" },
          { localizedString: "BBVA Banco Francés", code: "BBVABANCOFRANCES" },
          { localizedString: "Central Bank of Argentina", code: "CENTRALBANKOFARGENTI" },
          { localizedString: "Citibank Argentina", code: "CITIBANKARGENTINA" },
          { localizedString: "Grupo Financiero Galicia", code: "GRUPOFINANCIEROGALIC" },
          { localizedString: "HSBC Bank Argentina", code: "HSBCBANKARGENTINA" },
          { localizedString: "Municipal Bank of Rosario", code: "MUNICIPALBANKOFROSAR" },
          { localizedString: "New Bank of Santa Fe", code: "NEWBANKOFSANTAFE" },
          { localizedString: "Other", code: "NO_TYPE" }
        ],
        [o.Country.AT]: [
          { localizedString: "Adria Bank", code: "ADRIABANK" },
          { localizedString: "Allianz Investmentbank", code: "ALLIANZINVESTMENTBAN" },
          { localizedString: "Alpenbank", code: "ALPENBANK" },
          { localizedString: "American Express Bank Ltd", code: "AMERICANEXPRESSBANKL" },
          { localizedString: "Anglo Irish Bank", code: "ANGLOIRISHBANK" },
          { localizedString: "Austria Wirtschaftsservice Gesellschaft", code: "AUSTRIAWIRTSCHAFTSSE" },
          { localizedString: "Banco do Brasil", code: "BANCODOBRASIL" },
          { localizedString: "Bank Austria Creditanstalt", code: "BANKAUSTRIACREDITANS" },
          { localizedString: "Bank für Ärzte und Freie Berufe", code: "BANKFURARZTEUNDFREIE" },
          { localizedString: "Bank für Tirol und Vorarlberg", code: "BANKFURTIROLUNDVORAR" },
          { localizedString: "Bank Gutmann", code: "BANKGUTMANN" },
          { localizedString: "Bankhaus Carl Spängler & Co", code: "BANKHAUSCARLSPANGLER" },
          { localizedString: "Bankhaus Krentschker & Co", code: "BANKHAUSKRENTSCHKERC" },
          { localizedString: "Bankhaus Schelhammer & Schattera", code: "BANKHAUSSCHELHAMMERS" },
          { localizedString: "Bank Sal.Oppenheim jr. & Cie", code: "BANKSALOPPENHEIMJRCI" },
          { localizedString: "Bank Vontobel Österreich", code: "BANKVONTOBELOSTERREI" },
          { localizedString: "Bank Winter & Co", code: "BANKWINTERCO" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Raiffeisen Bank", code: "RAIFFEISENBANK" }
        ],
        [o.Country.AU]: [
          { localizedString: "AMP Bank Limited", code: "AMPBANKLIMITED" },
          { localizedString: "Australia and New Zealand Banking Group", code: "AUSTRALIAANDNEWZEALA" },
          { localizedString: "Auswide Bank", code: "AUSWIDEBANK" },
          { localizedString: "Bank Australia", code: "BANKAUSTRALIA" },
          { localizedString: "Bank of Melbourne", code: "BANKOFMELBOURNE" },
          { localizedString: "Bank of Queensland Limited", code: "BANKOFQUEENSLANDLIMI" },
          { localizedString: "Bank of Sydney", code: "BANKOFSYDNEY" },
          { localizedString: "Bank of Western Australia", code: "BANKOFWESTERNAUSTRAL" },
          { localizedString: "Bank SA", code: "BANKSA" },
          { localizedString: "BankVic", code: "BANKVIC" },
          { localizedString: "Bendigo and Adelaide Bank Limited", code: "BENDIGOANDADELAIDEBA" },
          { localizedString: "Beyond Bank Australia", code: "BEYONDBANKAUSTRALIA" },
          { localizedString: "Commonwealth Bank of Australia", code: "COMMONWEALTHBANKOFAU" },
          { localizedString: "Corporation (Australia) Limited", code: "CORPORATIONAUSTRALIA" },
          { localizedString: "Defence Bank", code: "DEFENCEBANK" },
          { localizedString: "Delphi Bank", code: "DELPHIBANK" },
          { localizedString: "G&C Mutual Bank", code: "GCMUTUALBANK" },
          { localizedString: "Heritage Bank", code: "HERITAGEBANK" },
          { localizedString: "Hume Bank", code: "HUMEBANK" },
          { localizedString: "IMB Bank", code: "IMBBANK" },
          { localizedString: "Macquarie Bank Limited", code: "MACQUARIEBANKLIMITED" },
          { localizedString: "Members Equity Bank Pty Limited", code: "MEMBERSEQUITYBANKPTY" },
          { localizedString: "MyState Bank", code: "MYSTATEBANK" },
          { localizedString: "National Australia Bank Limited", code: "NATIONALAUSTRALIABAN" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "P&N Bank", code: "PNBANK" },
          { localizedString: "Police Bank", code: "POLICEBANK" },
          { localizedString: "Queensland Teachers Mutual Bank (QTMB)", code: "QUEENSLANDTEACHERSMU" },
          { localizedString: "Rural Bank Limited", code: "RURALBANKLIMITED" },
          { localizedString: "St. George Bank Limited,", code: "STGEORGEBANKLIMITED" },
          { localizedString: "Suncorp-Metway Limited", code: "SUNCORPMETWAYLIMITED" },
          { localizedString: "Teachers Mutual Bank Limited", code: "TEACHERSMUTUALBANKLI" },
          { localizedString: "UBank, a division of National Australia Bank", code: "UBANKADIVISIONOFNATI" },
          { localizedString: "Victoria Teachers Mutual Bank", code: "VICTORIATEACHERSMUTU" },
          { localizedString: "Westpac Banking Corporation", code: "WESTPACBANKINGCORPOR" }
        ],
        [o.Country.BE]: [
          { localizedString: "Argenta", code: "ARGENTA" },
          { localizedString: "Attijariwafa Bank Europe Belgium", code: "ATTIJARIWAFABANKEURO" },
          { localizedString: "AXA Bank", code: "AXABANK" },
          { localizedString: "Banca Monte Paschi Belgio", code: "BANCAMONTEPASCHIBELG" },
          { localizedString: "BBVA Bélgica", code: "BBVABELGICA" },
          { localizedString: "Belfius Banque", code: "BELFIUSBANQUE" },
          { localizedString: "Beobank", code: "BEOBANK" },
          { localizedString: "BKCP Banque", code: "BKCPBANQUE" },
          { localizedString: "BNP Paribas Fortis", code: "BNPPARIBASFORTIS" },
          { localizedString: "bpost bank", code: "BPOSTBANK" },
          { localizedString: "Crelan", code: "CRELAN" },
          { localizedString: "Europabank", code: "EUROPABANK" },
          { localizedString: "Hello Bank!", code: "HELLOBANK" },
          { localizedString: "ING Belgium", code: "INGBELGIUM" },
          { localizedString: "KBC Bank", code: "KBCBANK" },
          { localizedString: "Keytrade Bank", code: "KEYTRADEBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Rabobank.be", code: "RABOBANKBE" },
          { localizedString: "Record Bank", code: "RECORDBANK" },
          { localizedString: "Santander Consumer Finance", code: "SANTANDERCONSUMERFIN" },
          { localizedString: "Triodos Bank Banque Triodos", code: "TRIODOSBANKBANQUETRI" },
          { localizedString: "VDK Spaarbank NV", code: "VDKSPAARBANKNV" }
        ],
        [o.Country.BR]: [
          { localizedString: "Banco Bradesco Financiamentos", code: "BANCOBRADESCOFINANCI" },
          { localizedString: "Banco do Brasil", code: "BANCODOBRASIL" },
          { localizedString: "Banco do Estado do Rio Grande do Sul S/A", code: "BANCODOESTADODORIOGR" },
          { localizedString: "Banco Itaú", code: "BANCOITAU" },
          { localizedString: "Banco J Safra S/A", code: "BANCOJSAFRASA" },
          { localizedString: "Banco PanAmericano S/A", code: "BANCOPANAMERICANOSA" },
          { localizedString: "Banco Santander", code: "BANCOSANTANDER" },
          { localizedString: "Caixa Econômica Federal", code: "CAIXAECONOMICAFEDERA" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "HSBC", code: "HSBC" },
          { localizedString: "Other", code: "NO_TYPE" }
        ],
        [o.Country.CA]: [
          { localizedString: "B2B Bank", code: "B2BBANK" },
          { localizedString: "Bank of Montreal", code: "BANKOFMONTREAL" },
          { localizedString: "Bank of Nova Scotia", code: "BANKOFNOVASCOTIA" },
          { localizedString: "Bridgewater Bank", code: "BRIDGEWATERBANK" },
          { localizedString: "Canadian Imperial Bank of Commerce", code: "CANADIANIMPERIALBANK" },
          { localizedString: "Canadian Tire Bank", code: "CANADIANTIREBANK" },
          { localizedString: "Canadian Western Bank", code: "CANADIANWESTERNBANK" },
          { localizedString: "CFF Bank", code: "CFFBANK" },
          { localizedString: "Citizens Bank of Canada", code: "CITIZENSBANKOFCANADA" },
          { localizedString: "Continental Bank of Canada", code: "CONTINENTALBANKOFCAN" },
          { localizedString: "CS Alterna Bank", code: "CSALTERNABANK" },
          { localizedString: "DirectCash Bank", code: "DIRECTCASHBANK" },
          { localizedString: "Equitable Bank", code: "EQUITABLEBANK" },
          { localizedString: "First Nations Bank of Canada", code: "FIRSTNATIONSBANKOFCA" },
          { localizedString: "General Bank of Canada", code: "GENERALBANKOFCANADA" },
          { localizedString: "Hollis Canadian Bank", code: "HOLLISCANADIANBANK" },
          { localizedString: "HomEquity Bank", code: "HOMEQUITYBANK" },
          { localizedString: "Laurentian Bank of Canada", code: "LAURENTIANBANKOFCANA" },
          { localizedString: "Manulife Bank of Canada", code: "MANULIFEBANKOFCANADA" },
          { localizedString: "National Bank of Canada", code: "NATIONALBANKOFCANADA" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Pacific & Western Bank of Canada", code: "PACIFICWESTERNBANKOF" },
          { localizedString: "President's Choice Bank", code: "PRESIDENTSCHOICEBANK" },
          { localizedString: "RedBrick Bank", code: "REDBRICKBANK" },
          { localizedString: "Rogers Bank", code: "ROGERSBANK" },
          { localizedString: "Royal Bank of Canada", code: "ROYALBANKOFCANADA" },
          { localizedString: "Tangerine Bank", code: "TANGERINEBANK" },
          { localizedString: "Toronto-Dominion Bank", code: "TORONTODOMINIONBANK" },
          { localizedString: "Wealth One Bank of Canada", code: "WEALTHONEBANKOFCANAD" },
          { localizedString: "Zag Bank", code: "ZAGBANK" }
        ],
        [o.Country.CH]: [
          { localizedString: "AIG Private Bank", code: "AIGPRIVATEBANK" },
          { localizedString: "Amtsersparniskasse Thun", code: "AMTSERSPARNISKASSETH" },
          { localizedString: "Anker Bank", code: "ANKERBANK" },
          { localizedString: "Arab Bank Switzerland", code: "ARABBANKSWITZERLAND" },
          { localizedString: "Banca dello Stato del Cantone Ticino", code: "BANCADELLOSTATODELCA" },
          { localizedString: "Bank Ehinger", code: "BANKEHINGER" },
          { localizedString: "Bank for International Settlements (BIS)", code: "BANKFORINTERNATIONAL" },
          { localizedString: "Bank Leu", code: "BANKLEU" },
          { localizedString: "Bankredit - Banca di Credito e Commercio", code: "BANKREDITBANCADICRED" },
          { localizedString: "Bank von Ernst", code: "BANKVONERNST" },
          { localizedString: "Banque Cantonale Vaudoise (BCV)", code: "BANQUECANTONALEVAUDO" },
          { localizedString: "Banque Diamantaire Anversoise", code: "BANQUEDIAMANTAIREANV" },
          { localizedString: "Banque Edouard Constant", code: "BANQUEEDOUARDCONSTAN" },
          { localizedString: "Banque Nationale Suisse - Banca Nazionale Svizzera", code: "BANQUENATIONALESUISS" },
          { localizedString: "Banque Piguet & Cie S.A.", code: "BANQUEPIGUETCIESA" },
          { localizedString: "Banque SCS Alliance", code: "BANQUESCSALLIANCE" },
          { localizedString: "BEKBnet/BCBE", code: "BEKBNETBCBE" },
          { localizedString: "BHE - Bank für Handel & Effekten", code: "BHEBANKFURHANDELEFFE" },
          { localizedString: "BNP - Banque Nationale de Paris", code: "BNPBANQUENATIONALEDE" },
          { localizedString: "BSI - Banca della Svizzera Italiana", code: "BSIBANCADELLASVIZZER" },
          { localizedString: "Clariden Bank", code: "CLARIDENBANK" },
          { localizedString: "Crédit Lyonnais Suisse", code: "CREDITLYONNAISSUISSE" },
          { localizedString: "Credit Suisse", code: "CREDITSUISSE" },
          { localizedString: "Discount Bank Group (DBTC/DBSA)", code: "DISCOUNTBANKGROUPDBT" },
          { localizedString: "Habib Bank AG Zürich", code: "HABIBBANKAGZURICH" },
          { localizedString: "Hottinger & Cie", code: "HOTTINGERCIE" },
          { localizedString: "Maerki, Baumann & Co. AG, Privatbank", code: "MAERKIBAUMANNCOAGPRI" },
          { localizedString: "Migrosbank", code: "MIGROSBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Pictet & Cie", code: "PICTETCIE" },
          { localizedString: "Raiffeisen Internet", code: "RAIFFEISENINTERNET" },
          { localizedString: "Royal Bank of Canada", code: "ROYALBANKOFCANADA" },
          { localizedString: "SBC Warburg Dillon Read (WDR)", code: "SBCWARBURGDILLONREAD" },
          { localizedString: "Schwyzer Kantonalbank", code: "SCHWYZERKANTONALBANK" },
          { localizedString: "Skandia Bank", code: "SKANDIABANK" },
          { localizedString: "Solothurner Bank SoBa", code: "SOLOTHURNERBANKSOBA" },
          { localizedString: "Sparkassa Berneck", code: "SPARKASSABERNECK" },
          { localizedString: "St. Gallische Kantonalbank", code: "STGALLISCHEKANTONALB" },
          { localizedString: "Swiss Bank Corporation", code: "SWISSBANKCORPORATION" },
          { localizedString: "Thurgauer Kantonalbank", code: "THURGAUERKANTONALBAN" },
          { localizedString: "Union Bank of Switzerland", code: "UNIONBANKOFSWITZERLA" },
          { localizedString: "Wegelin & Co. Privatbankiers", code: "WEGELINCOPRIVATBANKI" },
          { localizedString: "Zuger Kantonalbank", code: "ZUGERKANTONALBANK" },
          { localizedString: "Zürcher Kantonalbank", code: "ZURCHERKANTONALBANK" }
        ],
        [o.Country.CL]: [
          { localizedString: "Banco BICE", code: "BANCOBICE" },
          { localizedString: "Banco Bilbao Vizcaya Argentaria (BBVA)", code: "BANCOBILBAOVIZCAYAAR" },
          { localizedString: "Banco Consorcio", code: "BANCOCONSORCIO" },
          { localizedString: "Banco de Chile", code: "BANCODECHILE" },
          { localizedString: "Banco de Crédito e Inversiones", code: "BANCODECREDITOEINVER" },
          { localizedString: "Banco del Desarrollo", code: "BANCODELDESARROLLO" },
          { localizedString: "Banco del Estado de Chile", code: "BANCODELESTADODECHIL" },
          { localizedString: "Banco Edwards-Citi", code: "BANCOEDWARDSCITI" },
          { localizedString: "Banco Falabella", code: "BANCOFALABELLA" },
          { localizedString: "Banco Internacional", code: "BANCOINTERNACIONAL" },
          { localizedString: "Banco Itaú-Chile", code: "BANCOITAUCHILE" },
          { localizedString: "Banco Paris", code: "BANCOPARIS" },
          { localizedString: "Banco Penta", code: "BANCOPENTA" },
          { localizedString: "Banco Ripley", code: "BANCORIPLEY" },
          { localizedString: "Banco Santander Chile", code: "BANCOSANTANDERCHILE" },
          { localizedString: "Banco Security", code: "BANCOSECURITY" },
          { localizedString: "Central Bank of Chile", code: "CENTRALBANKOFCHILE" },
          { localizedString: "Corpbanca", code: "CORPBANCA" },
          { localizedString: "Deutsche Bank Chile", code: "DEUTSCHEBANKCHILE" },
          { localizedString: "HSBC Bank Chile", code: "HSBCBANKCHILE" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Rabobank", code: "RABOBANK" },
          { localizedString: "Scotiabank Sud Americano", code: "SCOTIABANKSUDAMERICA" }
        ],
        [o.Country.CO]: [
          { localizedString: "AVVillas", code: "AVVILLAS" },
          { localizedString: "Banagrario", code: "BANAGRARIO" },
          { localizedString: "Bancamía", code: "BANCAMIA" },
          { localizedString: "Banco de Bogotá", code: "BANCODEBOGOTA" },
          { localizedString: "Banco de la República", code: "BANCODELAREPUBLICA" },
          { localizedString: "Banco de Occidente", code: "BANCODEOCCIDENTE" },
          { localizedString: "Bancolombia", code: "BANCOLOMBIA" },
          { localizedString: "Banco Popular", code: "BANCOPOPULAR" },
          { localizedString: "Banco Santander", code: "BANCOSANTANDER" },
          { localizedString: "BBVA Colombia", code: "BBVACOLOMBIA" },
          { localizedString: "Caja Social", code: "CAJASOCIAL" },
          { localizedString: "Citibank Colombia", code: "CITIBANKCOLOMBIA" },
          { localizedString: "Colmena", code: "COLMENA" },
          { localizedString: "Colpatria", code: "COLPATRIA" },
          { localizedString: "Davivienda", code: "DAVIVIENDA" },
          { localizedString: "GBN Sudameris", code: "GBNSUDAMERIS" },
          { localizedString: "Helm", code: "HELM" },
          { localizedString: "HSBC Colombia", code: "HSBCCOLOMBIA" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Procredit", code: "PROCREDIT" },
          { localizedString: "RBS Colombia", code: "RBSCOLOMBIA" }
        ],
        [o.Country.DE]: [
          { localizedString: "BayernLB", code: "BAYERNLB" },
          { localizedString: "Commerzbank", code: "COMMERZBANK" },
          { localizedString: "Deutsche Bank", code: "DEUTSCHEBANK" },
          { localizedString: "DZ Bank", code: "DZBANK" },
          { localizedString: "Eurohypo AG", code: "EUROHYPOAG" },
          { localizedString: "HSH Nordbank", code: "HSHNORDBANK" },
          { localizedString: "HVB Group (HypoVereinsbank)", code: "HVBGROUPHYPOVEREINSB" },
          { localizedString: "Hypo Real Estate Group (HRE Group)", code: "HYPOREALESTATEGROUPH" },
          { localizedString: "Kfw Bankgruppe", code: "KFWBANKGRUPPE" },
          { localizedString: "Landesbank Baden-Württemberg", code: "LANDESBANKBADENWURTT" },
          { localizedString: "Landesbank Berlin (LBB)", code: "LANDESBANKBERLINLBB" },
          { localizedString: "Landesbank Hessen-Thüringen (Helaba)", code: "LANDESBANKHESSENTHUR" },
          { localizedString: "Nord/LB (Norddeutsche Landesbank)", code: "NORDLBNORDDEUTSCHELA" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "N26", code: "NUMBERTWENTYSIX" },
          { localizedString: "Postbank AG", code: "POSTBANKAG" },
          { localizedString: "Sparkasse", code: "SPARKASSE" },
          { localizedString: "WGZ Bank (Westdeutsche Genossenschafts-Zentralbank)", code: "WGZBANKWESTDEUTSCHEG" }
        ],
        [o.Country.DK]: [
          { localizedString: "Alm Brand Bank", code: "ALMBRANDBANK" },
          { localizedString: "Arbejdernes Landsbank", code: "ARBEJERNESLANDSBANK" },
          { localizedString: "Danske Bank", code: "DANSKEBANK" },
          { localizedString: "FIH Erhversbank", code: "FIHERHVERSBANK" },
          { localizedString: "Jyske Bank", code: "JYSKEBANK" },
          { localizedString: "Nordea", code: "NORDEA" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Nykredit Bank", code: "NYKREDITBANK" },
          { localizedString: "Spar Nord Bank", code: "SPARNORDBANK" },
          { localizedString: "Syd Bank", code: "SYDBANK" },
          { localizedString: "Vestjysk Bank", code: "VESTJYSKBANK" }
        ],
        [o.Country.EC]: [
          { localizedString: "Banco Amazonas", code: "BANCOAMAZONAS" },
          { localizedString: "Banco Bolivariano", code: "BANCOBOLIVARIANO" },
          { localizedString: "Banco Capital", code: "BANCOCAPITAL" },
          { localizedString: "Banco Cofiec", code: "BANCOCOFIEC" },
          { localizedString: "Banco Comercial de Manabí", code: "BANCOCOMERCIALDEMANA" },
          { localizedString: "Banco Coopnacional", code: "BANCOCOOPNACIONAL" },
          { localizedString: "Banco de Guayaquil", code: "BANCODEGUAYAQUIL" },
          { localizedString: "Banco del Austro", code: "BANCODELAUSTRO" },
          { localizedString: "Banco Delbank", code: "BANCODELBANK" },
          { localizedString: "Banco del Litoral", code: "BANCODELLITORAL" },
          { localizedString: "Banco de Loja", code: "BANCODELOJA" },
          { localizedString: "Banco del Pacífico", code: "BANCODELPACIFICO" },
          { localizedString: "Banco de Machala", code: "BANCODEMACHALA" },
          { localizedString: "Banco D-Miro", code: "BANCODMIRO" },
          { localizedString: "Banco Finca", code: "BANCOFINCA" },
          { localizedString: "Banco General Rumiñahui", code: "BANCOGENERALRUMINAHU" },
          { localizedString: "Banco Internacional", code: "BANCOINTERNACIONAL" },
          { localizedString: "Banco Pichincha", code: "BANCOPICHINCHA" },
          { localizedString: "Banco Promérica", code: "BANCOPROMERICA" },
          { localizedString: "Banco Solidario", code: "BANCOSOLIDARIO" },
          { localizedString: "Banco Sudamericano", code: "BANCOSUDAMERICANO" },
          { localizedString: "Citibank Ecuador", code: "CITIBANKECUADOR" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "ProCredit Bank", code: "PROCREDITBANK" },
          { localizedString: "Produbanco", code: "PRODUBANCO" }
        ],
        [o.Country.ES]: [
          { localizedString: "Banca March", code: "BANCAMARCH" },
          { localizedString: "Banco Esfinge", code: "BANCOESFINGE" },
          { localizedString: "Banco Espíritu Santo", code: "BANCOESPIRITUSANTO" },
          { localizedString: "Banco Fimestic", code: "BANCOFIMESTIC" },
          { localizedString: "Banco Inversión", code: "BANCOINVERSION" },
          { localizedString: "Banco Popular Español", code: "BANCOPOPULARESPANOL" },
          { localizedString: "Banco Sabadell", code: "BANCOSABADELL" },
          { localizedString: "Banco Santander", code: "BANCOSANTANDER" },
          { localizedString: "Bankia", code: "BANKIA" },
          { localizedString: "Bankinter", code: "BANKINTER" },
          { localizedString: "Bankpyme", code: "BANKPYME" },
          { localizedString: "Barclays Bank", code: "BARCLAYSBANK" },
          { localizedString: "BBVA", code: "BBVA" },
          { localizedString: "BCH Broker", code: "BCHBROKER" },
          { localizedString: "CaixaBank", code: "CAIXABANK" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "Deutsche Bank", code: "DEUTSCHEBANK" },
          { localizedString: "E-Cortal", code: "ECORTAL" },
          { localizedString: "Fiare Banca Ètica página web de Fiare", code: "FIAREBANCAETICAPAGIN" },
          { localizedString: "Fibanc", code: "FIBANC" },
          { localizedString: "Fibane", code: "FIBANE" },
          { localizedString: "Ibercaja", code: "IBERCAJA" },
          { localizedString: "ING Direct", code: "INGDIRECT" },
          { localizedString: "InterCaja Social .ES", code: "INTERCAJASOCIALES" },
          { localizedString: "Merrill Lynch", code: "MERRILLLYNCH" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Openbank", code: "OPENBANK" },
          { localizedString: "Salomon Smith Barney", code: "SALOMONSMITHBARNEY" },
          { localizedString: "Schroders", code: "SCHRODERS" },
          { localizedString: "Triodos Bank", code: "TRIODOSBANK" },
          { localizedString: "UNO-e", code: "UNOE" }
        ],
        [o.Country.FI]: [
          { localizedString: "Aktia Savings Bank", code: "AKTIASAVINGSBANK" },
          { localizedString: "Bank of Åland", code: "BANKOFALAND" },
          { localizedString: "eQ Bank", code: "EQBANK" },
          { localizedString: "Evli Bank", code: "EVLIBANK" },
          { localizedString: "Helsinki OP Bank", code: "HELSINKIOPBANK" },
          { localizedString: "Kaupthing Bank", code: "KAUPTHINGBANK" },
          { localizedString: "Nordea Bank Finland", code: "NORDEABANKFINLAND" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "OP-Kotipankki", code: "OPKOTIPANKKI" },
          { localizedString: "Pohjola Bank", code: "POHJOLABANK" },
          { localizedString: "Sampo Bank", code: "SAMPOBANK" },
          { localizedString: "S-Bank", code: "SBANK" },
          { localizedString: "SEB Gyllenberg Private Bank", code: "SEBGYLLENBERGPRIVATE" },
          { localizedString: "Suomen AsuntoHypoPankki", code: "SUOMENASUNTOHYPOPANK" },
          { localizedString: "Tapiola Bank", code: "TAPIOLABANK" }
        ],
        [o.Country.FR]: [
          { localizedString: "Axa Banque", code: "AXA" },
          { localizedString: "Banque Populaire", code: "BANQPOPUL" },
          { localizedString: "La Banque Postale", code: "BANQPOSTA" },
          { localizedString: "Banque Casino", code: "BANQUECASINO" },
          { localizedString: "Banque de France", code: "BANQUEDEFRANCE" },
          { localizedString: "Barclays", code: "BARCLAYS" },
          { localizedString: "BforBank", code: "BFORBANK" },
          { localizedString: "BNP Paribas", code: "BNP" },
          { localizedString: "Boursorama Banque", code: "BOURSORAMA" },
          { localizedString: "BRED", code: "BRED" },
          { localizedString: "Caisse d'Épargne", code: "CAISSEEPAR" },
          { localizedString: "Carrefour-Banque", code: "CARREFOURBANQUE" },
          { localizedString: "CIC", code: "CIC" },
          { localizedString: "Crédit Mutuel de Bretagne", code: "CMB" },
          { localizedString: "Crédit Mutuel Nord Europe", code: "CMNE" },
          { localizedString: "Crédit Agricole", code: "CREDAGRIC" },
          { localizedString: "Crédit Coopératif", code: "CREDCOOPE" },
          { localizedString: "Crédit Foncier", code: "CREDFONCI" },
          { localizedString: "Crédit Mutuel", code: "CREDMUTUEL" },
          { localizedString: "Crédit du Nord", code: "CREDNORD" },
          { localizedString: "Fortuneo Banque", code: "FORTUNEOBANQUE" },
          { localizedString: "Groupama Banque", code: "GROUPAMA" },
          { localizedString: "HSBC", code: "HSBC" },
          { localizedString: "ING Direct", code: "INGDIRECT" },
          { localizedString: "LCL", code: "LCL" },
          { localizedString: "Autre", code: "NO_TYPE" },
          { localizedString: "Société Générale", code: "SOGE" }
        ],
        [o.Country.GB]: [
          { localizedString: "Barclays Bank", code: "BARCLAYS" },
          { localizedString: "Coutts", code: "COUTTS" },
          { localizedString: "HBOS", code: "HBOS" },
          { localizedString: "HSBC", code: "HSBC" },
          { localizedString: "Lloyds Banking Group", code: "LLOYDS" },
          { localizedString: "NatWest", code: "NATWEST" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Royal Bank of Scotland (RBS)", code: "RBS" },
          { localizedString: "Santander", code: "SANTANDER" },
          { localizedString: "Standard Chartered", code: "STANDCHAR" },
          { localizedString: "Virgin Money", code: "VIRGINMONEY" },
          { localizedString: "Yorkshire Bank", code: "YORKSHIRE" },
          { localizedString: "Yorkshire Building Society", code: "YORKSHIREBS" }
        ],
        [o.Country.GT]: [
          { localizedString: "Agromercantil", code: "AGROMERCANTIL" },
          { localizedString: "Azteca Bank", code: "AZTECABANK" },
          { localizedString: "BAC Bank", code: "BACBANK" },
          { localizedString: "Bank of Antigua", code: "BANKOFANTIGUA" },
          { localizedString: "Bantrab Bank", code: "BANTRABBANK" },
          { localizedString: "Citi Bank", code: "CITIBANK" },
          { localizedString: "Credito Hipotecario Bank", code: "CREDITOHIPOTECARIOBA" },
          { localizedString: "De Credito Bank", code: "DECREDITOBANK" },
          { localizedString: "Ficohsa Bank", code: "FICOHSABANK" },
          { localizedString: "G&T Continental Bank", code: "GTCONTINENTALBANK" },
          { localizedString: "Industrial bank", code: "INDUSTRIALBANK" },
          { localizedString: "Inmobiliario Bank", code: "INMOBILIARIOBANK" },
          { localizedString: "Internacional Bank", code: "INTERNACIONALBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Reformador Bank", code: "REFORMADORBANK" },
          { localizedString: "Vivibanco Bank", code: "VIVIBANCOBANK" }
        ],
        [o.Country.HK]: [
          { localizedString: "Bank of China", code: "BANKOFCHINA" },
          { localizedString: "Bank of East Asia, The", code: "BANKOFEASTASIATHE" },
          { localizedString: "China CITIC Bank International", code: "CHINACITICBANKINTERN" },
          { localizedString: "China Construction Bank", code: "CHINACONSTRUCTIONBAN" },
          { localizedString: "Chiyu Banking Corporation", code: "CHIYUBANKINGCORPORAT" },
          { localizedString: "Chong Hing Bank", code: "CHONGHINGBANK" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "Dah Sing Bank", code: "DAHSINGBANK" },
          { localizedString: "DBS Bank", code: "DBSBANK" },
          { localizedString: "Fubon Bank", code: "FUBONBANK" },
          { localizedString: "Hang Seng Bank", code: "HANGSENGBANK" },
          { localizedString: "Hongkong and Shanghai Banking Corporation, The", code: "HONGKONGANDSHANGHAIB" },
          { localizedString: "Industrial and Commercial Bank of China", code: "INDUSTRIALANDCOMMERC" },
          { localizedString: "Nanyang Commercial Bank", code: "NANYANGCOMMERCIALBAN" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "OCBC Wing Hang Bank", code: "OCBCWINGHANGBANK" },
          { localizedString: "Public Bank", code: "PUBLICBANK" },
          { localizedString: "Shanghai Commercial Bank", code: "SHANGHAICOMMERCIALBA" },
          { localizedString: "Standard Chartered Bank", code: "STANDARDCHARTEREDBAN" },
          { localizedString: "Tai Sang Bank", code: "TAISANGBANK" },
          { localizedString: "Tai Yau Bank", code: "TAIYAUBANK" },
          { localizedString: "Wing Lung Bank", code: "WINGLUNGBANK" }
        ],
        [o.Country.IE]: [
          { localizedString: "ACC Bank", code: "ACCBANK" },
          { localizedString: "Allied Irish Banks", code: "ALLIEDIRISHBANKS" },
          { localizedString: "Anglo Irish Bank", code: "ANGLOIRISHBANK" },
          { localizedString: "Bank of Ireland", code: "BANKOFIRELAND" },
          { localizedString: "Barclays Bank Ireland", code: "BARCLAYSBANKIRELAND" },
          { localizedString: "Bear Stearns Bank", code: "BEARSTEARNSBANK" },
          { localizedString: "Capmark Bank Europe", code: "CAPMARKBANKEUROPE" },
          { localizedString: "Citibank Europe", code: "CITIBANKEUROPE" },
          { localizedString: "Fortis Prime Fund Solutions Bank", code: "FORTISPRIMEFUNDSOLUT" },
          { localizedString: "Goldman Sachs Bank", code: "GOLDMANSACHSBANK" },
          { localizedString: "Goldman Sachs Private Bank", code: "GOLDMANSACHSPRIVATEB" },
          { localizedString: "Helaba Dublin Landesbank Hessen-Thüringen International", code: "HELABADUBLINLANDESBA" },
          { localizedString: "Hewlett-Packard International Bank", code: "HEWLETTPACKARDINTERN" },
          { localizedString: "Hypo Public Finance Bank", code: "HYPOPUBLICFINANCEBAN" },
          { localizedString: "Intesa Sanpaolo Bank Ireland", code: "INTESASANPAOLOBANKIR" },
          { localizedString: "Irish Life & Permanent", code: "IRISHLIFEPERMANENT" },
          { localizedString: "JP Morgan Bank", code: "JPMORGANBANK" },
          { localizedString: "KBC Bank Ireland", code: "KBCBANKIRELAND" },
          { localizedString: "LGT Bank", code: "LGTBANK" },
          { localizedString: "Merrill Lynch International Bank", code: "MERRILLLYNCHINTERNAT" },
          { localizedString: "Naspa Dublin", code: "NASPADUBLIN" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Pfizer International Bank Europe", code: "PFIZERINTERNATIONALB" },
          { localizedString: "PFPC Bank", code: "PFPCBANK" }
        ],
        [o.Country.IN]: [
          { localizedString: "ABN AMRO India", code: "ABNAMROINDIA" },
          { localizedString: "Abu Dhabi Commercial Bank India", code: "ABUDHABICOMMERCIALBA" },
          { localizedString: "Allahabad Bank", code: "ALLAHABADBANK" },
          { localizedString: "Andhra Bank", code: "ANDHRABANK" },
          { localizedString: "Axis Bank Limited", code: "AXISBANKLIMITED" },
          { localizedString: "Canara Bank", code: "CANARABANK" },
          { localizedString: "Central Bank of India", code: "CENTRALBANKOFINDIA" },
          { localizedString: "Centurion Bank of Punjab", code: "CENTURIONBANKOFPUNJA" },
          { localizedString: "Citibank India", code: "CITIBANKINDIA" },
          { localizedString: "Corporation Bank", code: "CORPORATIONBANK" },
          { localizedString: "DCB (Development Credit Bank Ltd)", code: "DCBDEVELOPMENTCREDIT" },
          { localizedString: "Dena Bank", code: "DENABANK" },
          { localizedString: "Deutsche Bank", code: "DEUTSCHEBANK" },
          { localizedString: "Guardian Souharda Sahakari Bank Niyamita", code: "GUARDIANSOUHARDASAHA" },
          { localizedString: "HDFC Bank", code: "HDFCBANK" },
          { localizedString: "IDBI Bank", code: "IDBIBANK" },
          { localizedString: "Indian Bank", code: "INDIANBANK" },
          { localizedString: "Indian Overseas Bank", code: "INDIANOVERSEASBANK" },
          { localizedString: "IndusInd Bank Ltd", code: "INDUSINDBANKLTD" },
          { localizedString: "ING Vysya Bank", code: "INGVYSYABANK" },
          { localizedString: "Maharshtra Bank", code: "MAHARSHTRABANK" },
          { localizedString: "Mandvi Bank", code: "MANDVIBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Oriental Bank of Commerce", code: "ORIENTALBANKOFCOMMER" },
          { localizedString: "Saraswat Bank", code: "SARASWATBANK" },
          { localizedString: "South Indian Bank", code: "SOUTHINDIANBANK" },
          { localizedString: "Standard Chartered Bank", code: "STANDARDCHARTEREDBAN" },
          { localizedString: "State Bank of Hyderabad", code: "STATEBANKOFHYDERABAD" },
          { localizedString: "State Bank of Saurashtra", code: "STATEBANKOFSAURASHTR" },
          { localizedString: "Syndicate Bank", code: "SYNDICATEBANK" },
          { localizedString: "The Federal Bank Ltd", code: "THEFEDERALBANKLTD" },
          { localizedString: "UCO Bank", code: "UCOBANK" },
          { localizedString: "Union Bank of India", code: "UNIONBANKOFINDIA" }
        ],
        [o.Country.IT]: [
          { localizedString: "Banca Carige", code: "BANCACARIGE" },
          { localizedString: "Banca Pop. Milano", code: "BANCAPOPMILANO" },
          { localizedString: "Banco Popolare", code: "BANCOPOPOLARE" },
          { localizedString: "B Monte Paschi Siena", code: "BMONTEPASCHISIENA" },
          { localizedString: "Credito Emiliano", code: "CREDITOEMILIANO" },
          { localizedString: "Intesa Sanpaolo", code: "INTESASANPAOLO" },
          { localizedString: "Mediobanca", code: "MEDIOBANCA" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Ubi Banca", code: "UBIBANCA" },
          { localizedString: "Unicredit - Capitalia", code: "UNICREDITCAPITALIA" }
        ],
        [o.Country.JP]: [
          { localizedString: "Chiba Kōgyō Bank", code: "CHIBAKOGYOBANK" },
          { localizedString: "Mitsubishi UFJ Financial Group", code: "MITSUBISHIUFJFINANCI" },
          { localizedString: "Mitsubishi UFJ Trust and Banking Corporation", code: "MITSUBISHIUFJTRUSTAN" },
          { localizedString: "Mizuho Bank", code: "MIZUHOBANK" },
          { localizedString: "Mizuho Corporate Bank", code: "MIZUHOCORPORATEBANK" },
          { localizedString: "Mizuho Financial Group", code: "MIZUHOFINANCIALGROUP" },
          { localizedString: "Mizuho Trust & Banking Co.", code: "MIZUHOTRUSTBANKINGCO" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Sumitomo Mitsui Banking Corporation", code: "SUMITOMOMITSUIBANKIN" },
          { localizedString: "Sumitomo Mitsui Financial Group", code: "SUMITOMOMITSUIFINANC" },
          { localizedString: "The Bank of Tokyo-Mitsubishi UFJ", code: "THEBANKOFTOKYOMITSUB" },
          { localizedString: "The Master Trust Bank of Japan", code: "THEMASTERTRUSTBANKOF" },
          { localizedString: "The Senshū Bank", code: "THESENSHUBANK" },
          { localizedString: "Trust & Custody Services Bank", code: "TRUSTCUSTODYSERVICES" }
        ],
        [o.Country.LU]: [
          { localizedString: "Banque et Caisse d'Epargne de l'Etat, Luxembourg (BCEE)", code: "BANQUEETCAISSEDEPARG" },
          { localizedString: "Banque Générale du Luxembourg", code: "BANQUEGENERALEDULUXE" },
          { localizedString: "Banque IPPA et Associes Luxembourg", code: "BANQUEIPPAETASSOCIES" },
          { localizedString: "Banque UCL", code: "BANQUEUCL" },
          { localizedString: "Die Sparkasse Bremen", code: "DIESPARKASSEBREMEN" },
          { localizedString: "KBL", code: "KBL" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Robeco Bank", code: "ROBECOBANK" },
          { localizedString: "SGZ-Bank International", code: "SGZBANKINTERNATIONAL" },
          { localizedString: "WestLB International", code: "WESTLBINTERNATIONAL" }
        ],
        [o.Country.MX]: [
          { localizedString: "Banamex", code: "BANAMEX" },
          { localizedString: "Banca Afirme", code: "BANCAAFIRME" },
          { localizedString: "Banco Azteca", code: "BANCOAZTECA" },
          { localizedString: "Banco del Bajio", code: "BANCODELBAJIO" },
          { localizedString: "Banco J.P. Morgan", code: "BANCOJPMORGAN" },
          { localizedString: "Bank of America Mexico", code: "BANKOFAMERICAMEXICO" },
          { localizedString: "Banorte", code: "BANORTE" },
          { localizedString: "BanRegio", code: "BANREGIO" },
          { localizedString: "BBVA Bancomer", code: "BBVABANCOMER" },
          { localizedString: "Deutsche Bank Mexico", code: "DEUTSCHEBANKMEXICO" },
          { localizedString: "HSBC Mexico", code: "HSBCMEXICO" },
          { localizedString: "Inbursa", code: "INBURSA" },
          { localizedString: "ING Bank Mexico", code: "INGBANKMEXICO" },
          { localizedString: "Interacciones", code: "INTERACCIONES" },
          { localizedString: "Invex Controladora", code: "INVEXCONTROLADORA" },
          { localizedString: "Ixe Banco", code: "IXEBANCO" },
          { localizedString: "Mifel", code: "MIFEL" },
          { localizedString: "Monex", code: "MONEX" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Santander Mexico", code: "SANTANDERMEXICO" },
          { localizedString: "Scotiabank Inverlat", code: "SCOTIABANKINVERLAT" }
        ],
        [o.Country.NL]: [
          { localizedString: "ABN Amro", code: "ABNAMRO" },
          { localizedString: "Amsterdam Trade Bank", code: "AMSTERDAMTRADEBANK" },
          { localizedString: "ASN Bank", code: "ASNBANK" },
          { localizedString: "Bank Mendes Gans", code: "BANKMENDESGANS" },
          { localizedString: "Bank Nederlandse Gemeenten", code: "BANKNEDERLANDSEGEMEE" },
          { localizedString: "BinckBank", code: "BINCKBANK" },
          { localizedString: "Bunq", code: "BUNQ" },
          { localizedString: "Credit Europe Bank", code: "CREDITEUROPEBANK" },
          { localizedString: "Demir Halk Bank", code: "DEMIRHALKBANK" },
          { localizedString: "Friesland Bank", code: "FRIESLANDBANK" },
          { localizedString: "GE Artesia Bank", code: "GEARTESIABANK" },
          { localizedString: "ING Group", code: "INGGROUP" },
          { localizedString: "Kempen & Co", code: "KEMPENCO" },
          { localizedString: "Nederlandse Waterschapsbank", code: "NEDERLANDSEWATERSCHA" },
          { localizedString: "Netherlands Development Finance Company", code: "NETHERLANDSDEVELOPME" },
          { localizedString: "NIBC Bank", code: "NIBCBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Rabobank", code: "RABOBANK" },
          { localizedString: "SNS Bank", code: "SNSBANK" },
          { localizedString: "Triodos Bank", code: "TRIODOSBANK" },
          { localizedString: "Van Lanschot", code: "VANLANSCHOT" }
        ],
        [o.Country.NO]: [
          { localizedString: "Bolig- og Næringsbanken", code: "BOLIGOGNAERINGSBANKE" },
          { localizedString: "Cresco", code: "CRESCO" },
          { localizedString: "DnB NOR Bank", code: "DNBNORBANK" },
          { localizedString: "Fokus Bank", code: "FOKUSBANK" },
          { localizedString: "Landkreditt Bank", code: "LANDKREDITTBANK" },
          { localizedString: "Netfonds Bank", code: "NETFONDSBANK" },
          { localizedString: "Nordea Bank Norge", code: "NORDEABANKNORGE" },
          { localizedString: "Nordlandsbanken", code: "NORDLANDSBANKEN" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Pareto Bank", code: "PARETOBANK" },
          { localizedString: "Santander Consumer Bank", code: "SANTANDERCONSUMERBAN" },
          { localizedString: "SEB Privatbanken", code: "SEBPRIVATBANKEN" },
          { localizedString: "Storebrand Bank", code: "STOREBRANDBANK" },
          { localizedString: "Verdibanken", code: "VERDIBANKEN" },
          { localizedString: "Voss Veksel- og Landmandsbank", code: "VOSSVEKSELOGLANDMAND" },
          { localizedString: "yA Bank", code: "YABANK" }
        ],
        [o.Country.NZ]: [
          { localizedString: "ANZ Bank of New Zealand Limited", code: "ANZBANKOFNEWZEALANDL" },
          { localizedString: "ASB Bank Limited", code: "ASBBANKLIMITED" },
          { localizedString: "Australia and New Zealand Banking Group", code: "AUSTRALIAANDNEWZEALA" },
          { localizedString: "Bank of Baroda (New Zealand) Limited", code: "BANKOFBARODANEWZEALA" },
          { localizedString: "Bank of China (New Zealand) Limited", code: "BANKOFCHINANEWZEALAN" },
          { localizedString: "Bank of India (New Zealand) Limited", code: "BANKOFINDIANEWZEALAN" },
          { localizedString: "Bank of New Zealand", code: "BANKOFNEWZEALAND" },
          { localizedString: "China Construction Bank", code: "CHINACONSTRUCTIONBAN" },
          { localizedString: "Citibank N.A.", code: "CITIBANKNA" },
          { localizedString: "Commonwealth Bank of Australia", code: "COMMONWEALTHBANKOFAU" },
          { localizedString: "Deutsche Bank AG", code: "DEUTSCHEBANKAG" },
          { localizedString: "Heartland Bank Limited", code: "HEARTLANDBANKLIMITED" },
          { localizedString: "ICBC", code: "ICBC" },
          { localizedString: "JPMorgan Chase Bank N.A.", code: "JPMORGANCHASEBANKNA" },
          { localizedString: "Kiwibank Limited", code: "KIWIBANKLIMITED" },
          { localizedString: "Kookmin Bank", code: "KOOKMINBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Rabobank Nederland", code: "RABOBANKNEDERLAND" },
          { localizedString: "Rabobank New Zealand Limited", code: "RABOBANKNEWZEALANDLI" },
          { localizedString: "Southland Building Society", code: "SOUTHLANDBUILDINGSOC" },
          { localizedString: "The Bank of Tokyo-Mitsubishi UFJ", code: "THEBANKOFTOKYOMITSUB" },
          { localizedString: "The Co-operative Bank Limited", code: "THECOOPERATIVEBANKLI" },
          { localizedString: "The Hongkong and Shanghai Banking Corp", code: "THEHONGKONGANDSHANGH" },
          { localizedString: "TSB Bank Limited", code: "TSBBANKLIMITED" },
          { localizedString: "Westpac Banking Corporation", code: "WESTPACBANKINGCORPOR" },
          { localizedString: "Westpac New Zealand Limited", code: "WESTPACNEWZEALANDLIM" }
        ],
        [o.Country.PE]: [
          { localizedString: "Agrobanco", code: "AGROBANCO" },
          { localizedString: "Banco Azteca", code: "BANCOAZTECA" },
          { localizedString: "Banco Central de Reserva del Perú", code: "BANCOCENTRALDERESERV" },
          { localizedString: "Banco de Comercio", code: "BANCODECOMERCIO" },
          { localizedString: "Banco del Trabajo", code: "BANCODELTRABAJO" },
          { localizedString: "Banco de Materiales", code: "BANCODEMATERIALES" },
          { localizedString: "Banco Falabella", code: "BANCOFALABELLA" },
          { localizedString: "Banco Financiero", code: "BANCOFINANCIERO" },
          { localizedString: "Banco Interamericano de Finanzas", code: "BANCOINTERAMERICANOD" },
          { localizedString: "Banco Ripley", code: "BANCORIPLEY" },
          { localizedString: "BBVA", code: "BBVA" },
          { localizedString: "BCP", code: "BCP" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "Deutsche Bank", code: "DEUTSCHEBANK" },
          { localizedString: "HSBC", code: "HSBC" },
          { localizedString: "Interbank", code: "INTERBANK" },
          { localizedString: "Mibanco", code: "MIBANCO" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Santander", code: "SANTANDER" },
          { localizedString: "Scotiabank", code: "SCOTIABANK" },
          { localizedString: "Standard Chartered", code: "STANDARDCHARTERED" }
        ],
        [o.Country.PH]: [
          { localizedString: "Al-Amanah Islamic Investment Bank of the Philippines", code: "ALAMANAHISLAMICINVES" },
          { localizedString: "Asia United Bank", code: "ASIAUNITEDBANK" },
          { localizedString: "Australia and New Zealand Banking Group", code: "AUSTRALIAANDNEWZEALA" },
          { localizedString: "Bangkok Bank", code: "BANGKOKBANK" },
          { localizedString: "Bank of America, N.A.", code: "BANKOFAMERICANA" },
          { localizedString: "Bank of China", code: "BANKOFCHINA" },
          { localizedString: "Bank of Commerce", code: "BANKOFCOMMERCE" },
          { localizedString: "Bank of the Philippine Islands", code: "BANKOFTHEPHILIPPINEI" },
          { localizedString: "BDO Private Bank", code: "BDOPRIVATEBANK" },
          { localizedString: "BDO Unibank", code: "BDOUNIBANK" },
          { localizedString: "Chinabank", code: "CHINABANK" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "CTBC Bank", code: "CTBCBANK" },
          { localizedString: "Deutsche Bank", code: "DEUTSCHEBANK" },
          { localizedString: "Development Bank of the Philippines", code: "DEVELOPMENTBANKOFTHE" },
          { localizedString: "EastWest Bank", code: "EASTWESTBANK" },
          { localizedString: "ING Group", code: "INGGROUP" },
          { localizedString: "JPMorgan Chase", code: "JPMORGANCHASE" },
          { localizedString: "Land Bank of the Philippines", code: "LANDBANKOFTHEPHILIPP" },
          { localizedString: "Maybank Philippines, Inc.", code: "MAYBANKPHILIPPINESIN" },
          { localizedString: "Mega International Commercial Bank", code: "MEGAINTERNATIONALCOM" },
          { localizedString: "Metropolitan Bank and Trust Company", code: "METROPOLITANBANKANDT" },
          { localizedString: "Mizuho Bank, Ltd.", code: "MIZUHOBANKLTD" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Philippine Bank of Communications", code: "PHILIPPINEBANKOFCOMM" },
          { localizedString: "Philippine National Bank", code: "PHILIPPINENATIONALBA" },
          { localizedString: "Philippine Veterans Bank", code: "PHILIPPINEVETERANSBA" },
          { localizedString: "Philtrust Bank", code: "PHILTRUSTBANK" },
          { localizedString: "Rizal Commercial Banking Corporation", code: "RIZALCOMMERCIALBANKI" },
          { localizedString: "Robinsons Bank", code: "ROBINSONSBANK" },
          { localizedString: "Security Bank", code: "SECURITYBANK" },
          { localizedString: "Standard Chartered Bank", code: "STANDARDCHARTEREDBAN" },
          { localizedString: "The Bank of Tokyo-Mitsubishi UFJ, Ltd.", code: "THEBANKOFTOKYOMITSUB" },
          { localizedString: "The Hongkong and Shanghai Banking Corporation", code: "THEHONGKONGANDSHANGH" },
          { localizedString: "Union Bank of the Philippines", code: "UNIONBANKOFTHEPHILIP" },
          { localizedString: "United Coconut Planters Bank", code: "UNITEDCOCONUTPLANTER" }
        ],
        [o.Country.PT]: [
          { localizedString: "Atlantico - Banco Português do Atlântico", code: "ATLANTICOBANCOPORTUG" },
          { localizedString: "Banco 7", code: "BANCO7" },
          { localizedString: "Banco BPI", code: "BANCOBPI" },
          { localizedString: "Banco Comercial Português", code: "BANCOCOMERCIALPORTUG" },
          { localizedString: "Banco de Portugal", code: "BANCODEPORTUGAL" },
          { localizedString: "Banco Espirito Santo", code: "BANCOESPIRITOSANTO" },
          { localizedString: "Banco Internacional de Crédito, S.A.", code: "BANCOINTERNACIONALDE" },
          { localizedString: "Banco Mello", code: "BANCOMELLO" },
          { localizedString: "Banif - Banco Internacional do Funchal", code: "BANIFBANCOINTERNACIO" },
          { localizedString: "Barclays Netbanking Portugal", code: "BARCLAYSNETBANKINGPO" },
          { localizedString: "Caixa Geral de Depósitos", code: "CAIXAGERALDEDEPOSITO" },
          { localizedString: "Cisf - Banco de Investimento, S.A.", code: "CISFBANCODEINVESTIME" },
          { localizedString: "Other", code: "NO_TYPE" }
        ],
        [o.Country.SE]: [
          { localizedString: "ABN AMRO Bank Sweden", code: "ABNAMROBANKSWEDEN" },
          { localizedString: "First Baltic Savings", code: "FIRSTBALTICSAVINGS" },
          { localizedString: "FöreningsSparbanken (Swedbank)", code: "FORENINGSSPARBANKENS" },
          { localizedString: "JP Bank", code: "JPBANK" },
          { localizedString: "Nordbanken", code: "NORDBANKEN" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Östgöta Enskilda Bank", code: "OSTGOTAENSKILDABANK" },
          { localizedString: "Skandia Banken", code: "SKANDIABANKEN" },
          { localizedString: "Skandinaviska Enskilda Banken", code: "SKANDINAVISKAENSKILD" },
          { localizedString: "Sparbanken Sverige - Swedbank", code: "SPARBANKENSVERIGESWE" },
          { localizedString: "Stadshypotek", code: "STADSHYPOTEK" },
          { localizedString: "Svenska Handelsbanken-SHB", code: "SVENSKAHANDELSBANKEN" },
          { localizedString: "Sveriges Riksbank", code: "SVERIGESRIKSBANK" },
          { localizedString: "Trygg Hansa", code: "TRYGGHANSA" },
          { localizedString: "Westra Wermlands Sparbank", code: "WESTRAWERMLANDSSPARB" }
        ],
        [o.Country.SG]: [
          { localizedString: "Bank of America", code: "BANKOFAMERICA" },
          { localizedString: "Barclays bank", code: "BARCLAYSBANK" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "Developmental Bank of Singapore", code: "DEVELOPMENTALBANKOFS" },
          { localizedString: "HSBC", code: "HSBC" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "OCBC Bank", code: "OCBCBANK" },
          { localizedString: "Post Office Savings Bank", code: "POSTOFFICESAVINGSBAN" },
          { localizedString: "Standard Chartered Bank", code: "STANDARDCHARTEREDBAN" },
          { localizedString: "State Bank of India", code: "STATEBANKOFINDIA" },
          { localizedString: "United Overseas Bank", code: "UNITEDOVERSEASBANK" }
        ],
        [o.Country.US]: [
          { localizedString: "Ally Bank", code: "ALLY" },
          { localizedString: "American Express", code: "AMERICANEXPRESS" },
          { localizedString: "Associated Bank", code: "ASSOCIATED" },
          { localizedString: "Bank of the West", code: "BANKWEST" },
          { localizedString: "Barclays Bank", code: "BARCLAYS" },
          { localizedString: "BMO Harris Bank", code: "BMO" },
          { localizedString: "Bank of America", code: "BOA" },
          { localizedString: "Branch Banking and Trust Company", code: "BRANCH" },
          { localizedString: "Capital One", code: "CAPITALONE" },
          { localizedString: "Charles Schwab Bank", code: "CHARSCHWA" },
          { localizedString: "Chase Bank USA", code: "CHASE" },
          { localizedString: "Citibank", code: "CITIBANK" },
          { localizedString: "Citizens Bank of Pennsylvania", code: "CITIZENS" },
          { localizedString: "City National Bank", code: "CITYNATIONAL" },
          { localizedString: "Compass Bank", code: "COMPASS" },
          { localizedString: "CU Hawaii", code: "CUHAWAII" },
          { localizedString: "Discover Bank", code: "DISCOVER" },
          { localizedString: "E-Trade Bank", code: "ETRADE" },
          { localizedString: "Fifth Third Bank", code: "FIFTHTHIRD" },
          { localizedString: "First-Citizens Bank and Trust Company", code: "FIRSTCITIZENS" },
          { localizedString: "Fortune Bank", code: "FORTUNEBANK" },
          { localizedString: "Harris National Association", code: "HARRIS" },
          { localizedString: "HSBC Bank USA", code: "HSBC" },
          { localizedString: "Hudson City Savings Bank", code: "HUDSONCITY" },
          { localizedString: "The Huntington National Bank", code: "HUNTINGTON" },
          { localizedString: "ING Bank, fsb", code: "INGBANK" },
          { localizedString: "JPMorgan Chase Bank", code: "JPMORGAN" },
          { localizedString: "Keybank", code: "KEYBANK" },
          { localizedString: "Manufacturers and Traders Trust Company", code: "MANUFACTUR" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "New York Community Bank", code: "NYCOMMUNITY" },
          { localizedString: "The Bank of New York Mellon", code: "NYMELLON" },
          { localizedString: "PNC Bank", code: "PNC" },
          { localizedString: "Banco Popular de Puerto Rico", code: "PUERTORICO" },
          { localizedString: "RBC Bank", code: "RBC" },
          { localizedString: "RBS Citizens", code: "RBS" },
          { localizedString: "Regions Bank", code: "REGIONS" },
          { localizedString: "Sovereign Bank", code: "SOVEREIGN" },
          { localizedString: "State Street Bank and Trust Co.", code: "STATESTREET" },
          { localizedString: "SunTrust Bank", code: "SUNTRUST" },
          { localizedString: "Silicon Valley Bank", code: "SVB" },
          { localizedString: "Synovus Bank", code: "SYNOVUS" },
          { localizedString: "TD Bank", code: "TDBANK" },
          { localizedString: "UBS Bank", code: "UBS" },
          { localizedString: "Union Bank", code: "UNION" },
          { localizedString: "USAA Federal Savings Bank", code: "USAAFEDERAL" },
          { localizedString: "U.S. Bank", code: "USBANK" },
          { localizedString: "Wells Fargo", code: "WELLSFARGO" }
        ],
        [o.Country.VE]: [
          { localizedString: "100% Banco", code: "100BANCO" },
          { localizedString: "Bancaribe", code: "BANCARIBE" },
          { localizedString: "Banco Bicentenario", code: "BANCOBICENTENARIO" },
          { localizedString: "Banco de Venezuela", code: "BANCODEVENEZUELA" },
          { localizedString: "Banco Industrial de Venezuela", code: "BANCOINDUSTRIALDEVEN" },
          { localizedString: "Banco Mercantil", code: "BANCOMERCANTIL" },
          { localizedString: "Banco Nacional de Crédito", code: "BANCONACIONALDECREDI" },
          { localizedString: "Banco Occidental de Descuento", code: "BANCOOCCIDENTALDEDES" },
          { localizedString: "Banco Venezolano de Crédito", code: "BANCOVENEZOLANODECRE" },
          { localizedString: "Bandes", code: "BANDES" },
          { localizedString: "Banesco", code: "BANESCO" },
          { localizedString: "BBVA Provincial", code: "BBVAPROVINCIAL" },
          { localizedString: "Central Bank of Venezuela", code: "CENTRALBANKOFVENEZUE" },
          { localizedString: "Fondo Común", code: "FONDOCOMUN" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Sofitasa", code: "SOFITASA" },
          { localizedString: "Women's Development Bank", code: "WOMENSDEVELOPMENTBAN" }
        ],
        [o.Country.ZA]: [
          { localizedString: "Absa", code: "ABSA" },
          { localizedString: "Capitec Banking Group", code: "CAPITECBANKINGGROUP" },
          { localizedString: "FNB", code: "FNB" },
          { localizedString: "Investec Bank", code: "INVESTECBANK" },
          { localizedString: "Nedbank", code: "NEDBANK" },
          { localizedString: "Other", code: "NO_TYPE" },
          { localizedString: "Standard Bank", code: "STANDARDBANK" }
        ]
      };
    },
    985406: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAllBanks = t.getBanks = void 0);
      const o = r(782912);
      (t.getBanks = function (e) {
        return { banks: o.banks[e.country] };
      }),
        (t.getAllBanks = function () {
          return o.banks;
        });
    },
    443651: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = r(453576);
      t.default = {
        [o.Country.AD]: 376,
        [o.Country.AE]: 971,
        [o.Country.AF]: 93,
        [o.Country.AG]: 1268,
        [o.Country.AI]: 1264,
        [o.Country.AL]: 355,
        [o.Country.AM]: 374,
        [o.Country.AO]: 244,
        [o.Country.AQ]: 672,
        [o.Country.AR]: 54,
        [o.Country.AS]: 1684,
        [o.Country.AT]: 43,
        [o.Country.AU]: 61,
        [o.Country.AW]: 297,
        [o.Country.AX]: 358,
        [o.Country.AZ]: 994,
        [o.Country.BA]: 387,
        [o.Country.BB]: 1246,
        [o.Country.BD]: 880,
        [o.Country.BE]: 32,
        [o.Country.BF]: 226,
        [o.Country.BG]: 359,
        [o.Country.BH]: 973,
        [o.Country.BI]: 257,
        [o.Country.BJ]: 229,
        [o.Country.BL]: 590,
        [o.Country.BM]: 1441,
        [o.Country.BN]: 673,
        [o.Country.BO]: 591,
        [o.Country.BR]: 55,
        [o.Country.BS]: 1242,
        [o.Country.BT]: 975,
        [o.Country.BW]: 267,
        [o.Country.BY]: 375,
        [o.Country.BZ]: 501,
        [o.Country.CA]: 1,
        [o.Country.CC]: 61,
        [o.Country.CD]: 243,
        [o.Country.CF]: 236,
        [o.Country.CG]: 242,
        [o.Country.CH]: 41,
        [o.Country.CI]: 225,
        [o.Country.CK]: 682,
        [o.Country.CL]: 56,
        [o.Country.CM]: 237,
        [o.Country.CN]: 86,
        [o.Country.CO]: 57,
        [o.Country.CR]: 506,
        [o.Country.CU]: 53,
        [o.Country.CV]: 238,
        [o.Country.CX]: 61,
        [o.Country.CY]: 357,
        [o.Country.CZ]: 420,
        [o.Country.DE]: 49,
        [o.Country.DJ]: 253,
        [o.Country.DK]: 45,
        [o.Country.DM]: 1767,
        [o.Country.DO]: 1849,
        [o.Country.DZ]: 213,
        [o.Country.EC]: 593,
        [o.Country.EE]: 372,
        [o.Country.EG]: 20,
        [o.Country.ER]: 291,
        [o.Country.ES]: 34,
        [o.Country.ET]: 251,
        [o.Country.FI]: 358,
        [o.Country.FJ]: 679,
        [o.Country.FK]: 500,
        [o.Country.FM]: 691,
        [o.Country.FO]: 298,
        [o.Country.FR]: 33,
        [o.Country.GA]: 241,
        [o.Country.GB]: 44,
        [o.Country.GD]: 1473,
        [o.Country.GE]: 995,
        [o.Country.GF]: 594,
        [o.Country.GG]: 44,
        [o.Country.GH]: 233,
        [o.Country.GI]: 350,
        [o.Country.GL]: 299,
        [o.Country.GM]: 220,
        [o.Country.GN]: 224,
        [o.Country.GP]: 590,
        [o.Country.GQ]: 240,
        [o.Country.GR]: 30,
        [o.Country.GS]: 500,
        [o.Country.GT]: 502,
        [o.Country.GU]: 1671,
        [o.Country.GW]: 245,
        [o.Country.GY]: 595,
        [o.Country.HK]: 852,
        [o.Country.HN]: 504,
        [o.Country.HR]: 385,
        [o.Country.HT]: 509,
        [o.Country.HU]: 36,
        [o.Country.ID]: 62,
        [o.Country.IE]: 353,
        [o.Country.IL]: 972,
        [o.Country.IM]: 44,
        [o.Country.IN]: 91,
        [o.Country.IO]: 246,
        [o.Country.IQ]: 964,
        [o.Country.IR]: 98,
        [o.Country.IS]: 354,
        [o.Country.IT]: 39,
        [o.Country.JE]: 44,
        [o.Country.JM]: 1876,
        [o.Country.JO]: 962,
        [o.Country.JP]: 81,
        [o.Country.KE]: 254,
        [o.Country.KG]: 996,
        [o.Country.KH]: 855,
        [o.Country.KI]: 686,
        [o.Country.KM]: 269,
        [o.Country.KN]: 1869,
        [o.Country.KP]: 850,
        [o.Country.KR]: 82,
        [o.Country.KW]: 965,
        [o.Country.KY]: 345,
        [o.Country.KZ]: 77,
        [o.Country.LA]: 856,
        [o.Country.LB]: 961,
        [o.Country.LC]: 1758,
        [o.Country.LI]: 423,
        [o.Country.LK]: 94,
        [o.Country.LR]: 231,
        [o.Country.LS]: 266,
        [o.Country.LT]: 370,
        [o.Country.LU]: 352,
        [o.Country.LV]: 371,
        [o.Country.LY]: 218,
        [o.Country.MA]: 212,
        [o.Country.MC]: 377,
        [o.Country.MD]: 373,
        [o.Country.ME]: 382,
        [o.Country.MF]: 590,
        [o.Country.MG]: 261,
        [o.Country.MH]: 692,
        [o.Country.MK]: 389,
        [o.Country.ML]: 223,
        [o.Country.MM]: 95,
        [o.Country.MN]: 976,
        [o.Country.MO]: 853,
        [o.Country.MP]: 1670,
        [o.Country.MQ]: 596,
        [o.Country.MR]: 222,
        [o.Country.MS]: 1664,
        [o.Country.MT]: 356,
        [o.Country.MU]: 230,
        [o.Country.MV]: 960,
        [o.Country.MW]: 265,
        [o.Country.MX]: 52,
        [o.Country.MY]: 60,
        [o.Country.MZ]: 258,
        [o.Country.NA]: 264,
        [o.Country.NC]: 687,
        [o.Country.NE]: 227,
        [o.Country.NF]: 672,
        [o.Country.NG]: 234,
        [o.Country.NI]: 505,
        [o.Country.NL]: 31,
        [o.Country.NO]: 47,
        [o.Country.NP]: 977,
        [o.Country.NR]: 674,
        [o.Country.NU]: 683,
        [o.Country.NZ]: 64,
        [o.Country.OM]: 968,
        [o.Country.PA]: 507,
        [o.Country.PE]: 51,
        [o.Country.PF]: 689,
        [o.Country.PG]: 675,
        [o.Country.PH]: 63,
        [o.Country.PK]: 92,
        [o.Country.PL]: 48,
        [o.Country.PM]: 508,
        [o.Country.PN]: 872,
        [o.Country.PR]: 1939,
        [o.Country.PS]: 970,
        [o.Country.PT]: 351,
        [o.Country.PW]: 680,
        [o.Country.PY]: 595,
        [o.Country.QA]: 974,
        [o.Country.RE]: 262,
        [o.Country.RO]: 40,
        [o.Country.RS]: 381,
        [o.Country.RU]: 7,
        [o.Country.RW]: 250,
        [o.Country.SA]: 966,
        [o.Country.SB]: 677,
        [o.Country.SC]: 248,
        [o.Country.SD]: 249,
        [o.Country.SE]: 46,
        [o.Country.SG]: 65,
        [o.Country.SH]: 290,
        [o.Country.SI]: 386,
        [o.Country.SJ]: 47,
        [o.Country.SK]: 421,
        [o.Country.SL]: 232,
        [o.Country.SM]: 378,
        [o.Country.SN]: 221,
        [o.Country.SO]: 252,
        [o.Country.SR]: 597,
        [o.Country.ST]: 239,
        [o.Country.SV]: 503,
        [o.Country.SY]: 963,
        [o.Country.SZ]: 268,
        [o.Country.TC]: 1649,
        [o.Country.TD]: 235,
        [o.Country.TG]: 228,
        [o.Country.TH]: 66,
        [o.Country.TJ]: 992,
        [o.Country.TK]: 690,
        [o.Country.TL]: 670,
        [o.Country.TM]: 993,
        [o.Country.TN]: 216,
        [o.Country.TO]: 676,
        [o.Country.TR]: 90,
        [o.Country.TT]: 1868,
        [o.Country.TV]: 688,
        [o.Country.TW]: 886,
        [o.Country.TZ]: 255,
        [o.Country.UA]: 380,
        [o.Country.UG]: 256,
        [o.Country.US]: 1,
        [o.Country.UY]: 598,
        [o.Country.UZ]: 998,
        [o.Country.VA]: 379,
        [o.Country.VC]: 1784,
        [o.Country.VE]: 58,
        [o.Country.VG]: 1284,
        [o.Country.VI]: 1340,
        [o.Country.VN]: 84,
        [o.Country.VU]: 678,
        [o.Country.WF]: 681,
        [o.Country.WS]: 685,
        [o.Country.XK]: 383,
        [o.Country.YE]: 967,
        [o.Country.YT]: 262,
        [o.Country.ZA]: 27,
        [o.Country.ZM]: 260,
        [o.Country.ZW]: 263
      };
    },
    139003: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getAllCallingCodes = t.processQuery = void 0);
      const o = r(453576),
        n = r(443651);
      (t.processQuery = function () {
        return { type: o.StaticDataQueryType.CALLING_CODES, collection: n.default };
      }),
        (t.getAllCallingCodes = function () {
          return n.default;
        });
    },
    180814: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.GeographicStatesLevel1 = t.GeographicStatesLevel0 = void 0);
      const o = r(453576);
      (t.GeographicStatesLevel0 = {
        [o.Country.FR]: {
          "FR-0-42": { code: "42", name: "Alsace" },
          "FR-0-72": { code: "72", name: "Aquitaine" },
          "FR-0-83": { code: "83", name: "Auvergne" },
          "FR-0-25": { code: "25", name: "Basse-Normandie" },
          "FR-0-26": { code: "26", name: "Bourgogne" },
          "FR-0-53": { code: "53", name: "Bretagne" },
          "FR-0-24": { code: "24", name: "Centre" },
          "FR-0-21": { code: "21", name: "Champagne-Ardenne" },
          "FR-0-94": { code: "94", name: "Corse" },
          "FR-0-43": { code: "43", name: "Franche-Comte" },
          "FR-0-01": { code: "01", name: "Guadeloupe" },
          "FR-0-03": { code: "03", name: "Guyane" },
          "FR-0-23": { code: "23", name: "Haute-Normandie" },
          "FR-0-11": { code: "11", name: "Ile-de-France" },
          "FR-0-04": { code: "04", name: "La Reunion" },
          "FR-0-91": { code: "91", name: "Languedoc-Roussillon" },
          "FR-0-74": { code: "74", name: "Limousin" },
          "FR-0-41": { code: "41", name: "Lorraine" },
          "FR-0-02": { code: "02", name: "Martinique" },
          "FR-0-73": { code: "73", name: "Midi-Pyrenees" },
          "FR-0-31": { code: "31", name: "Nord-Pas-de-Calais" },
          "FR-0-52": { code: "52", name: "Pays de la Loire" },
          "FR-0-22": { code: "22", name: "Picardie" },
          "FR-0-54": { code: "54", name: "Poitou-Charentes" },
          "FR-0-93": { code: "93", name: "Provence-Alpes-Cote d'Azur" },
          "FR-0-82": { code: "82", name: "Rhone-Alpes" }
        },
        [o.Country.GB]: {
          "GB-0-67": { code: "67", name: "Aberdeenshire" },
          "GB-0-68": { code: "68", name: "Angus" },
          "GB-0-69": { code: "69", name: "Antrim" },
          "GB-0-70": { code: "70", name: "Ards" },
          "GB-0-71": { code: "71", name: "Argyll" },
          "GB-0-72": { code: "72", name: "Armagh" },
          "GB-0-01": { code: "01", name: "Avon" },
          "GB-0-73": { code: "73", name: "Ayrshire" },
          "GB-0-74": { code: "74", name: "Ballymena" },
          "GB-0-75": { code: "75", name: "Ballymoney" },
          "GB-0-76": { code: "76", name: "Banbridge" },
          "GB-0-77": { code: "77", name: "Banffshire" },
          "GB-0-78": { code: "78", name: "Bath & NthEstSomerset" },
          "GB-0-02": { code: "02", name: "Bedfordshire" },
          "GB-0-79": { code: "79", name: "Belfast" },
          "GB-0-03": { code: "03", name: "Berkshire" },
          "GB-0-80": { code: "80", name: "Berwickshire" },
          "GB-0-81": { code: "81", name: "Blackburn" },
          "GB-0-82": { code: "82", name: "Blackpool" },
          "GB-0-04": { code: "04", name: "Borders" },
          "GB-0-83": { code: "83", name: "Bournemouth" },
          "GB-0-84": { code: "84", name: "Bracknell Forest" },
          "GB-0-85": { code: "85", name: "Brighton & Hove" },
          "GB-0-86": { code: "86", name: "Bristol" },
          "GB-0-05": { code: "05", name: "Buckinghamshire" },
          "GB-0-87": { code: "87", name: "Caithness" },
          "GB-0-06": { code: "06", name: "Cambridgeshire" },
          "GB-0-88": { code: "88", name: "Carrickfergus" },
          "GB-0-89": { code: "89", name: "Castlereagh" },
          "GB-0-07": { code: "07", name: "Central" },
          "GB-0-08": { code: "08", name: "Cheshire" },
          "GB-0-91": { code: "91", name: "Clackmannanshire" },
          "GB-0-12": { code: "12", name: "Cleveland" },
          "GB-0-09": { code: "09", name: "Clwyd" },
          "GB-0-92": { code: "92", name: "Coleraine" },
          "GB-0-93": { code: "93", name: "Cookstown" },
          "GB-0-10": { code: "10", name: "Cornwall" },
          "GB-0-94": { code: "94", name: "Craigavon" },
          "GB-0-11": { code: "11", name: "Cumbria" },
          "GB-0-95": { code: "95", name: "Darlington" },
          "GB-0-13": { code: "13", name: "Derbyshire" },
          "GB-0-16": { code: "16", name: "Devon" },
          "GB-0-14": { code: "14", name: "Dorset" },
          "GB-0-96": { code: "96", name: "Down" },
          "GB-0-97": { code: "97", name: "Dumfries a. Galloway" },
          "GB-0-98": { code: "98", name: "Dumfriesshire" },
          "GB-0-99": { code: "99", name: "Dunbartonshire" },
          "GB-0-100": { code: "100", name: "Dungannon" },
          "GB-0-15": { code: "15", name: "Durham" },
          "GB-0-17": { code: "17", name: "Dyfed" },
          "GB-0-101": { code: "101", name: "East Lothian" },
          "GB-0-102": { code: "102", name: "East Riding" },
          "GB-0-103": { code: "103", name: "East Sussex" },
          "GB-0-18": { code: "18", name: "Essex" },
          "GB-0-104": { code: "104", name: "Fermanagh" },
          "GB-0-19": { code: "19", name: "Fife" },
          "GB-0-20": { code: "20", name: "Gloucestershire" },
          "GB-0-22": { code: "22", name: "Grampian" },
          "GB-0-36": { code: "36", name: "Greater London" },
          "GB-0-21": { code: "21", name: "Greater Manchester" },
          "GB-0-23": { code: "23", name: "Gwent" },
          "GB-0-24": { code: "24", name: "Gwynedd" },
          "GB-0-105": { code: "105", name: "Halton" },
          "GB-0-25": { code: "25", name: "Hampshire" },
          "GB-0-106": { code: "106", name: "Hartlepool" },
          "GB-0-29": { code: "29", name: "Hereford and Worcs." },
          "GB-0-107": { code: "107", name: "Herefordshire" },
          "GB-0-27": { code: "27", name: "Hertfordshire" },
          "GB-0-108": { code: "108", name: "Highland" },
          "GB-0-28": { code: "28", name: "Humberside" },
          "GB-0-109": { code: "109", name: "Inverness-Shire" },
          "GB-0-110": { code: "110", name: "Isle Of Arran" },
          "GB-0-111": { code: "111", name: "Isle Of Barra" },
          "GB-0-112": { code: "112", name: "Isle Of Benbecula" },
          "GB-0-113": { code: "113", name: "Isle Of Bute" },
          "GB-0-114": { code: "114", name: "Isle Of Canna" },
          "GB-0-115": { code: "115", name: "Isle Of Coll" },
          "GB-0-116": { code: "116", name: "Isle Of Colonsay" },
          "GB-0-117": { code: "117", name: "Isle Of Cumbrae" },
          "GB-0-118": { code: "118", name: "Isle Of Eigg" },
          "GB-0-119": { code: "119", name: "Isle Of Gigha" },
          "GB-0-120": { code: "120", name: "Isle Of Harris" },
          "GB-0-121": { code: "121", name: "Isle Of Iona" },
          "GB-0-122": { code: "122", name: "Isle Of Islay" },
          "GB-0-123": { code: "123", name: "Isle Of Jura" },
          "GB-0-124": { code: "124", name: "Isle Of Lewis" },
          "GB-0-126": { code: "126", name: "Isle Of Mull" },
          "GB-0-127": { code: "127", name: "Isle Of North Uist" },
          "GB-0-128": { code: "128", name: "Isle Of Rum" },
          "GB-0-129": { code: "129", name: "Isle Of Scalpay" },
          "GB-0-131": { code: "131", name: "Isle Of Skye" },
          "GB-0-132": { code: "132", name: "Isle Of South Uist" },
          "GB-0-133": { code: "133", name: "Isle Of Tiree" },
          "GB-0-31": { code: "31", name: "Isle of Wight" },
          "GB-0-130": { code: "130", name: "Isles Of Scilly" },
          "GB-0-32": { code: "32", name: "Kent" },
          "GB-0-134": { code: "134", name: "Kincardineshire" },
          "GB-0-135": { code: "135", name: "Kingston-Upon-Hull" },
          "GB-0-136": { code: "136", name: "Kirkcudbrightshire" },
          "GB-0-137": { code: "137", name: "Lanarkshire" },
          "GB-0-33": { code: "33", name: "Lancashire" },
          "GB-0-138": { code: "138", name: "Larne" },
          "GB-0-139": { code: "139", name: "Leicester City" },
          "GB-0-34": { code: "34", name: "Leicestershire" },
          "GB-0-140": { code: "140", name: "Limavady" },
          "GB-0-35": { code: "35", name: "Lincolnshire" },
          "GB-0-141": { code: "141", name: "Lisburn" },
          "GB-0-142": { code: "142", name: "London" },
          "GB-0-143": { code: "143", name: "Londonderry" },
          "GB-0-37": { code: "37", name: "Lothian" },
          "GB-0-144": { code: "144", name: "Luton" },
          "GB-0-145": { code: "145", name: "Magherafelt" },
          "GB-0-39": { code: "39", name: "Merseyside" },
          "GB-0-38": { code: "38", name: "Mid Glamorgan" },
          "GB-0-146": { code: "146", name: "Middlesbrough" },
          "GB-0-65": { code: "65", name: "Middlesex" },
          "GB-0-147": { code: "147", name: "Midlothian" },
          "GB-0-148": { code: "148", name: "Milton Keynes" },
          "GB-0-149": { code: "149", name: "Morayshire" },
          "GB-0-150": { code: "150", name: "Moyle" },
          "GB-0-151": { code: "151", name: "Nairn" },
          "GB-0-152": { code: "152", name: "Newbury" },
          "GB-0-153": { code: "153", name: "Newry and Mourne" },
          "GB-0-154": { code: "154", name: "Newtownabbey" },
          "GB-0-41": { code: "41", name: "Norfolk" },
          "GB-0-155": { code: "155", name: "North Down" },
          "GB-0-156": { code: "156", name: "North Humberside" },
          "GB-0-157": { code: "157", name: "North Lincolnshire" },
          "GB-0-158": { code: "158", name: "North Somerset" },
          "GB-0-62": { code: "62", name: "North Yorkshire" },
          "GB-0-40": { code: "40", name: "Northamptonshire" },
          "GB-0-43": { code: "43", name: "Northumberland" },
          "GB-0-159": { code: "159", name: "Nottingham City" },
          "GB-0-42": { code: "42", name: "Nottinghamshire" },
          "GB-0-160": { code: "160", name: "NthEast Lincolnshire" },
          "GB-0-161": { code: "161", name: "Omagh" },
          "GB-0-162": { code: "162", name: "Orkney" },
          "GB-0-44": { code: "44", name: "Oxfordshire" },
          "GB-0-163": { code: "163", name: "Peeblesshire" },
          "GB-0-164": { code: "164", name: "Perthshire" },
          "GB-0-165": { code: "165", name: "Peterborough" },
          "GB-0-166": { code: "166", name: "Plymouth" },
          "GB-0-167": { code: "167", name: "Poole" },
          "GB-0-168": { code: "168", name: "Portsmouth" },
          "GB-0-45": { code: "45", name: "Powys" },
          "GB-0-169": { code: "169", name: "Reading" },
          "GB-0-170": { code: "170", name: "Redcar and Cleveland" },
          "GB-0-171": { code: "171", name: "Renfrewshire" },
          "GB-0-172": { code: "172", name: "Rochester Up. Medway" },
          "GB-0-173": { code: "173", name: "Ross-Shire" },
          "GB-0-175": { code: "175", name: "Roxburghshire" },
          "GB-0-176": { code: "176", name: "Rutland" },
          "GB-0-26": { code: "26", name: "Scotland" },
          "GB-0-177": { code: "177", name: "Shetland" },
          "GB-0-48": { code: "48", name: "Shropshire" },
          "GB-0-178": { code: "178", name: "Slough" },
          "GB-0-50": { code: "50", name: "Somerset" },
          "GB-0-47": { code: "47", name: "South Glamorgan" },
          "GB-0-179": { code: "179", name: "South Humberside" },
          "GB-0-63": { code: "63", name: "South Yorkshire" },
          "GB-0-180": { code: "180", name: "Southampton" },
          "GB-0-181": { code: "181", name: "Southend" },
          "GB-0-51": { code: "51", name: "Staffordshire" },
          "GB-0-182": { code: "182", name: "Sth. Gloucestershire" },
          "GB-0-183": { code: "183", name: "Stirlingshire" },
          "GB-0-184": { code: "184", name: "Stockton-on-Tees" },
          "GB-0-185": { code: "185", name: "Strabane" },
          "GB-0-46": { code: "46", name: "Strathclyde" },
          "GB-0-49": { code: "49", name: "Suffolk" },
          "GB-0-53": { code: "53", name: "Surrey" },
          "GB-0-52": { code: "52", name: "Sussex" },
          "GB-0-186": { code: "186", name: "Sutherland" },
          "GB-0-54": { code: "54", name: "Tayside" },
          "GB-0-187": { code: "187", name: "Thamesdown" },
          "GB-0-188": { code: "188", name: "Thurrock" },
          "GB-0-189": { code: "189", name: "Torbay" },
          "GB-0-55": { code: "55", name: "Tyne and Wear" },
          "GB-0-190": { code: "190", name: "Tyrone" },
          "GB-0-191": { code: "191", name: "Warrington" },
          "GB-0-56": { code: "56", name: "Warwickshire" },
          "GB-0-57": { code: "57", name: "West Glamorgan" },
          "GB-0-192": { code: "192", name: "West Lothian" },
          "GB-0-59": { code: "59", name: "West Midlands" },
          "GB-0-193": { code: "193", name: "West Sussex" },
          "GB-0-64": { code: "64", name: "West Yorkshire" },
          "GB-0-194": { code: "194", name: "Western Isles" },
          "GB-0-195": { code: "195", name: "Wigtownshire" },
          "GB-0-58": { code: "58", name: "Wiltshire" },
          "GB-0-196": { code: "196", name: "Windsor & Maidenhead" },
          "GB-0-197": { code: "197", name: "Wokingham" },
          "GB-0-60": { code: "60", name: "Worcestershire" },
          "GB-0-198": { code: "198", name: "Wrekin" },
          "GB-0-199": { code: "199", name: "York" },
          "GB-0-61": { code: "61", name: "Yorkshire" },
          "GB-0-1001": { code: "1001", name: "Blaenau Gwent" },
          "GB-0-1002": { code: "1002", name: "Bridgend" },
          "GB-0-1003": { code: "1003", name: "Caerphilly" },
          "GB-0-1004": { code: "1004", name: "Cardiff" },
          "GB-0-1005": { code: "1005", name: "Carmarthenshire" },
          "GB-0-1006": { code: "1006", name: "Ceredigion" },
          "GB-0-1007": { code: "1007", name: "Channel Islands" },
          "GB-0-1008": { code: "1008", name: "Conwy" },
          "GB-0-1009": { code: "1009", name: "Denbighshire" },
          "GB-0-1010": { code: "1010", name: "East Ayrshire" },
          "GB-0-1011": { code: "1011", name: "East Dunbartonshire" },
          "GB-0-1012": { code: "1012", name: "East Renfrewshire" },
          "GB-0-1013": { code: "1013", name: "Edinburgh City" },
          "GB-0-1014": { code: "1014", name: "Falkirk" },
          "GB-0-1015": { code: "1015", name: "Flintshire" },
          "GB-0-1016": { code: "1016", name: "Glasgow" },
          "GB-0-1017": { code: "1017", name: "Inverclyde" },
          "GB-0-1018": { code: "1018", name: "Isle of Anglesey" },
          "GB-0-1019": { code: "1019", name: "Isle of Man" },
          "GB-0-1020": { code: "1020", name: "Merthyr Tydfil" },
          "GB-0-1021": { code: "1021", name: "Monmouthshire" },
          "GB-0-1022": { code: "1022", name: "Moray" },
          "GB-0-1023": { code: "1023", name: "Neath Port Talbot" },
          "GB-0-1024": { code: "1024", name: "Newport" },
          "GB-0-1025": { code: "1025", name: "North Ayrshire" },
          "GB-0-1026": { code: "1026", name: "North Lanarkshire" },
          "GB-0-1027": { code: "1027", name: "Pembrokeshire" },
          "GB-0-1028": { code: "1028", name: "Rhondda Cynon Taff" },
          "GB-0-1029": { code: "1029", name: "South Ayrshire" },
          "GB-0-1030": { code: "1030", name: "South Lanarkshire" },
          "GB-0-1031": { code: "1031", name: "Stirling" },
          "GB-0-1032": { code: "1032", name: "Swansea" },
          "GB-0-1033": { code: "1033", name: "The Vale of Glamorgan" },
          "GB-0-1034": { code: "1034", name: "Torfaen" },
          "GB-0-1035": { code: "1035", name: "West Dunbartonshire" },
          "GB-0-1036": { code: "1036", name: "Wrexham" }
        },
        [o.Country.US]: {
          "US-0-AL": { code: "AL", name: "Alabama" },
          "US-0-AK": { code: "AK", name: "Alaska" },
          "US-0-AS": { code: "AS", name: "American Samoa" },
          "US-0-AZ": { code: "AZ", name: "Arizona" },
          "US-0-AR": { code: "AR", name: "Arkansas" },
          "US-0-AA": { code: "AA", name: "Armed Forces America" },
          "US-0-AE": { code: "AE", name: "Armed Forces Europe" },
          "US-0-AP": { code: "AP", name: "Armed Forces Pacific" },
          "US-0-CA": { code: "CA", name: "California" },
          "US-0-CEI": { code: "CEI", name: "Canton & Enderbury Islands" },
          "US-0-CO": { code: "CO", name: "Colorado" },
          "US-0-CT": { code: "CT", name: "Connecticut" },
          "US-0-DC": { code: "DC", name: "District of Columbia" },
          "US-0-DE": { code: "DE", name: "Delaware" },
          "US-0-FL": { code: "FL", name: "Florida" },
          "US-0-GA": { code: "GA", name: "Georgia" },
          "US-0-GU": { code: "GU", name: "Guam" },
          "US-0-HI": { code: "HI", name: "Hawaii" },
          "US-0-IA": { code: "IA", name: "Iowa" },
          "US-0-ID": { code: "ID", name: "Idaho" },
          "US-0-IL": { code: "IL", name: "Illinois" },
          "US-0-IN": { code: "IN", name: "Indiana" },
          "US-0-KS": { code: "KS", name: "Kansas" },
          "US-0-KY": { code: "KY", name: "Kentucky" },
          "US-0-LA": { code: "LA", name: "Louisiana" },
          "US-0-MA": { code: "MA", name: "Massachusetts" },
          "US-0-MD": { code: "MD", name: "Maryland" },
          "US-0-ME": { code: "ME", name: "Maine" },
          "US-0-MP": { code: "MP", name: "Mariana Islands" },
          "US-0-MI": { code: "MI", name: "Michigan" },
          "US-0-MN": { code: "MN", name: "Minnesota" },
          "US-0-MS": { code: "MS", name: "Mississippi" },
          "US-0-MO": { code: "MO", name: "Missouri" },
          "US-0-MT": { code: "MT", name: "Montana" },
          "US-0-NE": { code: "NE", name: "Nebraska" },
          "US-0-NV": { code: "NV", name: "Nevada" },
          "US-0-NH": { code: "NH", name: "New Hampshire" },
          "US-0-NJ": { code: "NJ", name: "New Jersey" },
          "US-0-NM": { code: "NM", name: "New Mexico" },
          "US-0-NY": { code: "NY", name: "New York" },
          "US-0-NC": { code: "NC", name: "North Carolina" },
          "US-0-ND": { code: "ND", name: "North Dakota" },
          "US-0-NMI": { code: "NMI", name: "North Mariana Islands" },
          "US-0-OH": { code: "OH", name: "Ohio" },
          "US-0-OK": { code: "OK", name: "Oklahoma" },
          "US-0-OR": { code: "OR", name: "Oregon" },
          "US-0-PW": { code: "PW", name: "Palau" },
          "US-0-PA": { code: "PA", name: "Pennsylvania" },
          "US-0-PR": { code: "PR", name: "Puerto Rico" },
          "US-0-RI": { code: "RI", name: "Rhode Island" },
          "US-0-SC": { code: "SC", name: "South Carolina" },
          "US-0-SD": { code: "SD", name: "South Dakota" },
          "US-0-TN": { code: "TN", name: "Tennessee" },
          "US-0-TX": { code: "TX", name: "Texas" },
          "US-0-UT": { code: "UT", name: "Utah" },
          "US-0-VT": { code: "VT", name: "Vermont" },
          "US-0-VI": { code: "VI", name: "Virgin Islands, US" },
          "US-0-VA": { code: "VA", name: "Virginia" },
          "US-0-WA": { code: "WA", name: "Washington" },
          "US-0-WV": { code: "WV", name: "West Virginia" },
          "US-0-WI": { code: "WI", name: "Wisconsin" },
          "US-0-WY": { code: "WY", name: "Wyoming" }
        },
        [o.Country.CA]: {
          "CA-0-AB": { code: "AB", name: "Alberta" },
          "CA-0-BC": { code: "BC", name: "British Columbia" },
          "CA-0-MB": { code: "MB", name: "Manitoba" },
          "CA-0-NB": { code: "NB", name: "New Brunswick" },
          "CA-0-NL": { code: "NL", name: "Newfoundland and Labrador" },
          "CA-0-NS": { code: "NS", name: "Nova Scotia" },
          "CA-0-NT": { code: "NT", name: "Northwest Territories" },
          "CA-0-NU": { code: "NU", name: "Nunavut" },
          "CA-0-ON": { code: "ON", name: "Ontario" },
          "CA-0-PE": { code: "PE", name: "Prince Edward Island" },
          "CA-0-QC": { code: "QC", name: "Québec" },
          "CA-0-SK": { code: "SK", name: "Saskatchewan" },
          "CA-0-YT": { code: "YT", name: "Yukon" }
        },
        [o.Country.AU]: {
          "AU-0-SA": { code: "SA", name: "South Australia" },
          "AU-0-WA": { code: "WA", name: "Western Australia" },
          "AU-0-NSW": { code: "NSW", name: "New South Wales" },
          "AU-0-QLD": { code: "QLD", name: "Queensland" },
          "AU-0-TAS": { code: "TAS", name: "Tasmania" },
          "AU-0-VIC": { code: "VIC", name: "Victoria" },
          "AU-0-ACT": { code: "ACT", name: "Australian Capital Territory" },
          "AU-0-JBT": { code: "JBT", name: "Jervis Bay Territory" },
          "AU-0-NT": { code: "NT", name: "Northern Territory" }
        },
        [o.Country.IE]: {
          "IE-0-05": { code: "05", name: "Carlow" },
          "IE-0-04": { code: "04", name: "Clare" },
          "IE-0-03": { code: "03", name: "Cork" },
          "IE-0-07": { code: "07", name: "Donegal" },
          "IE-0-06": { code: "06", name: "Dublin" },
          "IE-0-10": { code: "10", name: "Galway" },
          "IE-0-13": { code: "13", name: "Cavan" },
          "IE-0-14": { code: "14", name: "Kerry" },
          "IE-0-11": { code: "11", name: "Kildare" },
          "IE-0-12": { code: "12", name: "Kilkenny" },
          "IE-0-19": { code: "19", name: "Laois" },
          "IE-0-18": { code: "18", name: "Leitrim" },
          "IE-0-17": { code: "17", name: "Limerick" },
          "IE-0-16": { code: "16", name: "Longford" },
          "IE-0-20": { code: "20", name: "Louth" },
          "IE-0-23": { code: "23", name: "Mayo" },
          "IE-0-22": { code: "22", name: "Meath" },
          "IE-0-21": { code: "21", name: "Monaghan" },
          "IE-0-24": { code: "24", name: "Offaly" },
          "IE-0-25": { code: "25", name: "Roscommon" },
          "IE-0-26": { code: "26", name: "Sligo" },
          "IE-0-27": { code: "27", name: "Tipperary" },
          "IE-0-29": { code: "29", name: "Waterford" },
          "IE-0-31": { code: "31", name: "Westmeath" },
          "IE-0-32": { code: "32", name: "Wexford" },
          "IE-0-30": { code: "30", name: "Wicklow" }
        },
        [o.Country.ES]: {
          "ES-0-AN": { code: "AN", name: "Andalucia" },
          "ES-0-AR": { code: "AR", name: "Aragón" },
          "ES-0-AS": { code: "AS", name: "Asturias, Principado de" },
          "ES-0-CN": { code: "CN", name: "Canarias" },
          "ES-0-CB": { code: "CB", name: "Cantabria" },
          "ES-0-CM": { code: "CM", name: "Castilla-La Mancha" },
          "ES-0-CL": { code: "CL", name: "Castilla y León" },
          "ES-0-CT": { code: "CT", name: "Cataluña" },
          "ES-0-EX": { code: "EX", name: "Extremadura" },
          "ES-0-GA": { code: "GA", name: "Galicia" },
          "ES-0-IB": { code: "IB", name: "Illes Balears" },
          "ES-0-RI": { code: "RI", name: "La Rioja" },
          "ES-0-MD": { code: "MD", name: "Madrid, Comunidad de" },
          "ES-0-MC": { code: "MC", name: "Murcia, Región de" },
          "ES-0-NC": { code: "NC", name: "Navarra, Comunidad Foral de" },
          "ES-0-PV": { code: "PV", name: "País Vasco" },
          "ES-0-VC": { code: "VC", name: "Valenciana, Comunitat" },
          "ES-0-CE": { code: "CE", name: "Ceuta" },
          "ES-0-ML": { code: "ML", name: "Melilla" }
        },
        [o.Country.MX]: {
          "MX-0-DIF": { code: "DIF", name: "Distrito Federal" },
          "MX-0-AGU": { code: "AGU", name: "Aguascalientes" },
          "MX-0-BCN": { code: "BCN", name: "Baja California" },
          "MX-0-BCS": { code: "BCS", name: "Baja California Sur" },
          "MX-0-CAM": { code: "CAM", name: "Campeche" },
          "MX-0-COA": { code: "COA", name: "Coahuila" },
          "MX-0-COL": { code: "COL", name: "Colima" },
          "MX-0-CHP": { code: "CHP", name: "Chiapas" },
          "MX-0-CHH": { code: "CHH", name: "Chihuahua" },
          "MX-0-DUR": { code: "DUR", name: "Durango" },
          "MX-0-GUA": { code: "GUA", name: "Guanajuato" },
          "MX-0-GRO": { code: "GRO", name: "Guerrero" },
          "MX-0-HID": { code: "HID", name: "Hidalgo" },
          "MX-0-JAL": { code: "JAL", name: "Jalisco" },
          "MX-0-MEX": { code: "MEX", name: "México" },
          "MX-0-MIC": { code: "MIC", name: "Michoacán" },
          "MX-0-MOR": { code: "MOR", name: "Morelos" },
          "MX-0-NAY": { code: "NAY", name: "Nayarit" },
          "MX-0-NLE": { code: "NLE", name: "Nuevo León" },
          "MX-0-OAX": { code: "OAX", name: "Oaxaca" },
          "MX-0-PUE": { code: "PUE", name: "Puebla" },
          "MX-0-QUE": { code: "QUE", name: "Querétaro" },
          "MX-0-ROO": { code: "ROO", name: "Quintana Roo" },
          "MX-0-SLP": { code: "SLP", name: "San Luis Potosí" },
          "MX-0-SIN": { code: "SIN", name: "Sinaloa" },
          "MX-0-SON": { code: "SON", name: "Sonora" },
          "MX-0-TAB": { code: "TAB", name: "Tabasco" },
          "MX-0-TAM": { code: "TAM", name: "Tamaulipas" },
          "MX-0-TLA": { code: "TLA", name: "Tlaxcala" },
          "MX-0-VER": { code: "VER", name: "Veracruz" },
          "MX-0-YUC": { code: "YUC", name: "Yucatán" },
          "MX-0-ZAC": { code: "ZAC", name: "Zacatecas" }
        },
        [o.Country.CO]: {
          "CO-0-DC": { code: "DC", name: "Distrito Capital de Bogotá" },
          "CO-0-AMA": { code: "AMA", name: "Amazonas" },
          "CO-0-ANT": { code: "ANT", name: "Antioquia" },
          "CO-0-ARA": { code: "ARA", name: "Arauca" },
          "CO-0-ATL": { code: "ATL", name: "Atlántico" },
          "CO-0-BOL": { code: "BOL", name: "Bolívar" },
          "CO-0-BOY": { code: "BOY", name: "Boyacá" },
          "CO-0-CAL": { code: "CAL", name: "Caldas" },
          "CO-0-CAQ": { code: "CAQ", name: "Caquetá" },
          "CO-0-CAS": { code: "CAS", name: "Casanare" },
          "CO-0-CAU": { code: "CAU", name: "Cauca" },
          "CO-0-CES": { code: "CES", name: "Cesar" },
          "CO-0-COR": { code: "COR", name: "Córdoba" },
          "CO-0-CUN": { code: "CUN", name: "Cundinamarca" },
          "CO-0-CHO": { code: "CHO", name: "Chocó" },
          "CO-0-GUA": { code: "GUA", name: "Guainía" },
          "CO-0-GUV": { code: "GUV", name: "Guaviare" },
          "CO-0-HUI": { code: "HUI", name: "Huila" },
          "CO-0-LAG": { code: "LAG", name: "La Guajira" },
          "CO-0-MAG": { code: "MAG", name: "Magdalena" },
          "CO-0-MET": { code: "MET", name: "Meta" },
          "CO-0-NAR": { code: "NAR", name: "Nariño" },
          "CO-0-NSA": { code: "NSA", name: "Norte de Santander" },
          "CO-0-PUT": { code: "PUT", name: "Putumayo" },
          "CO-0-QUI": { code: "QUI", name: "Quindío" },
          "CO-0-RIS": { code: "RIS", name: "Risaralda" },
          "CO-0-SAP": { code: "SAP", name: "San Andrés, Providencia y Santa Catalina" },
          "CO-0-SAN": { code: "SAN", name: "Santander" },
          "CO-0-SUC": { code: "SUC", name: "Sucre" },
          "CO-0-TOL": { code: "TOL", name: "Tolima" },
          "CO-0-VAC": { code: "VAC", name: "Valle del Cauca" },
          "CO-0-VAU": { code: "VAU", name: "Vaupés" },
          "CO-0-VID": { code: "VID", name: "Vichada" }
        },
        [o.Country.PE]: {
          "PE-0-CAL": { code: "CAL", name: "El Callao" },
          "PE-0-LMA": { code: "LMA", name: "Municipalidad Metropolitana de Lima" },
          "PE-0-AMA": { code: "AMA", name: "Amazonas" },
          "PE-0-ANC": { code: "ANC", name: "Ancash" },
          "PE-0-APU": { code: "APU", name: "Apurímac" },
          "PE-0-ARE": { code: "ARE", name: "Arequipa" },
          "PE-0-AYA": { code: "AYA", name: "Ayacucho" },
          "PE-0-CAJ": { code: "CAJ", name: "Cajamarca" },
          "PE-0-CUS": { code: "CUS", name: "Cusco" },
          "PE-0-HUV": { code: "HUV", name: "Huancavelica" },
          "PE-0-HUC": { code: "HUC", name: "Huánuco" },
          "PE-0-ICA": { code: "ICA", name: "Ica" },
          "PE-0-JUN": { code: "JUN", name: "Junín" },
          "PE-0-LAL": { code: "LAL", name: "La Libertad" },
          "PE-0-LAM": { code: "LAM", name: "Lambayeque" },
          "PE-0-LIM": { code: "LIM", name: "Lima" },
          "PE-0-LOR": { code: "LOR", name: "Loreto" },
          "PE-0-MDD": { code: "MDD", name: "Madre de Dios" },
          "PE-0-MOQ": { code: "MOQ", name: "Moquegua" },
          "PE-0-PAS": { code: "PAS", name: "Pasco" },
          "PE-0-PIU": { code: "PIU", name: "Piura" },
          "PE-0-PUN": { code: "PUN", name: "Puno" },
          "PE-0-SAM": { code: "SAM", name: "San Martín" },
          "PE-0-TAC": { code: "TAC", name: "Tacna" },
          "PE-0-TUM": { code: "TUM", name: "Tumbes" },
          "PE-0-UCA": { code: "UCA", name: "Ucayali" }
        },
        [o.Country.CL]: {
          "CL-0-AI": { code: "AI", name: "Aisén del General Carlos Ibañez del Campo" },
          "CL-0-AN": { code: "AN", name: "Antofagasta" },
          "CL-0-AR": { code: "AR", name: "Araucanía" },
          "CL-0-AP": { code: "AP", name: "Arica y Parinacota" },
          "CL-0-AT": { code: "AT", name: "Atacama" },
          "CL-0-BI": { code: "BI", name: "Biobío" },
          "CL-0-CO": { code: "CO", name: "Coquimbo" },
          "CL-0-LI": { code: "LI", name: "Libertador General Bernardo O'Higgins" },
          "CL-0-LL": { code: "LL", name: "Los Lagos" },
          "CL-0-LR": { code: "LR", name: "Los Ríos" },
          "CL-0-MA": { code: "MA", name: "Magallanes y la Antártica Chilena" },
          "CL-0-ML": { code: "ML", name: "Maule" },
          "CL-0-RM": { code: "RM", name: "Metropolitana de Santiago" },
          "CL-0-TA": { code: "TA", name: "Tarapacá" },
          "CL-0-VS": { code: "VS", name: "Valparaíso" }
        },
        [o.Country.DE]: {
          "DE-0-BW": { code: "BW", name: "Baden-Württemberg" },
          "DE-0-BY": { code: "BY", name: "Bayern" },
          "DE-0-BE": { code: "BE", name: "Berlin" },
          "DE-0-BB": { code: "BB", name: "Brandenburg" },
          "DE-0-HB": { code: "HB", name: "Bremen" },
          "DE-0-HH": { code: "HH", name: "Hamburg" },
          "DE-0-HE": { code: "HE", name: "Hessen" },
          "DE-0-MV": { code: "MV", name: "Mecklenburg-Vorpommern" },
          "DE-0-NI": { code: "NI", name: "Niedersachsen" },
          "DE-0-NW": { code: "NW", name: "Nordrhein-Westfalen" },
          "DE-0-RP": { code: "RP", name: "Rheinland-Pfalz" },
          "DE-0-SL": { code: "SL", name: "Saarland" },
          "DE-0-SN": { code: "SN", name: "Sachsen" },
          "DE-0-ST": { code: "ST", name: "Sachsen-Anhalt" },
          "DE-0-SH": { code: "SH", name: "Schleswig-Holstein" },
          "DE-0-TH": { code: "TH", name: "Thüringen" }
        },
        [o.Country.IT]: {
          "IT-0-65": { code: "65", name: "Abruzzo" },
          "IT-0-77": { code: "77", name: "Basilicata" },
          "IT-0-78": { code: "78", name: "Calabria" },
          "IT-0-72": { code: "72", name: "Campania" },
          "IT-0-45": { code: "45", name: "Emilia-Romagna" },
          "IT-0-36": { code: "36", name: "Friuli-Venezia Giulia" },
          "IT-0-62": { code: "62", name: "Lazio" },
          "IT-0-42": { code: "42", name: "Liguria" },
          "IT-0-25": { code: "25", name: "Lombardia" },
          "IT-0-57": { code: "57", name: "Marche" },
          "IT-0-67": { code: "67", name: "Molise" },
          "IT-0-21": { code: "21", name: "Piemonte" },
          "IT-0-75": { code: "75", name: "Puglia" },
          "IT-0-88": { code: "88", name: "Sardegna" },
          "IT-0-82": { code: "82", name: "Sicilia" },
          "IT-0-52": { code: "52", name: "Toscana" },
          "IT-0-32": { code: "32", name: "Trentino Alto Adige" },
          "IT-0-55": { code: "55", name: "Umbria" },
          "IT-0-23": { code: "23", name: "Valle d'Aosta" },
          "IT-0-34": { code: "34", name: "Veneto" }
        },
        [o.Country.CH]: {
          "CH-0-AG": { code: "AG", name: "Aargau" },
          "CH-0-AR": { code: "AR", name: "Appenzell Ausserrhoden" },
          "CH-0-AI": { code: "AI", name: "Appenzell Innerrhoden" },
          "CH-0-BL": { code: "BL", name: "Basel-Landschaft" },
          "CH-0-BS": { code: "BS", name: "Basel-Stadt" },
          "CH-0-BE": { code: "BE", name: "Berne" },
          "CH-0-FR": { code: "FR", name: "Fribourg" },
          "CH-0-GE": { code: "GE", name: "Genève" },
          "CH-0-GL": { code: "GL", name: "Glarus" },
          "CH-0-GR": { code: "GR", name: "Graubünden" },
          "CH-0-JU": { code: "JU", name: "Jura" },
          "CH-0-LU": { code: "LU", name: "Luzern" },
          "CH-0-NE": { code: "NE", name: "Neuchâtel" },
          "CH-0-NW": { code: "NW", name: "Nidwalden" },
          "CH-0-OW": { code: "OW", name: "Obwalden" },
          "CH-0-SG": { code: "SG", name: "Sankt Gallen" },
          "CH-0-SH": { code: "SH", name: "Schaffhausen" },
          "CH-0-SZ": { code: "SZ", name: "Schwyz" },
          "CH-0-SO": { code: "SO", name: "Solothurn" },
          "CH-0-TG": { code: "TG", name: "Thurgau" },
          "CH-0-TI": { code: "TI", name: "Ticino" },
          "CH-0-UR": { code: "UR", name: "Uri" },
          "CH-0-VS": { code: "VS", name: "Valais" },
          "CH-0-VD": { code: "VD", name: "Vaud" },
          "CH-0-ZG": { code: "ZG", name: "Zug" },
          "CH-0-ZH": { code: "ZH", name: "Zürich" }
        },
        [o.Country.BE]: {
          "BE-0-BRU": { code: "BRU", name: "Bruxelles-Capitale, Région de" },
          "BE-0-VLG": { code: "VLG", name: "Vlaamse Gewest" },
          "BE-0-WAL": { code: "WAL", name: "Région wallonne" }
        },
        [o.Country.SE]: {
          "SE-0-K": { code: "K", name: "Blekinge län" },
          "SE-0-W": { code: "W", name: "Dalarnas län" },
          "SE-0-I": { code: "I", name: "Gotlands län" },
          "SE-0-X": { code: "X", name: "Gävleborgs län" },
          "SE-0-N": { code: "N", name: "Hallands län" },
          "SE-0-Z": { code: "Z", name: "Jämtlands län" },
          "SE-0-F": { code: "F", name: "Jönköpings län" },
          "SE-0-H": { code: "H", name: "Kalmar län" },
          "SE-0-G": { code: "G", name: "Kronobergs län" },
          "SE-0-BD": { code: "BD", name: "Norrbottens län" },
          "SE-0-M": { code: "M", name: "Skåne län" },
          "SE-0-AB": { code: "AB", name: "Stockholms län" },
          "SE-0-D": { code: "D", name: "Södermanlands län" },
          "SE-0-C": { code: "C", name: "Uppsala län" },
          "SE-0-S": { code: "S", name: "Värmlands län" },
          "SE-0-AC": { code: "AC", name: "Västerbottens län" },
          "SE-0-Y": { code: "Y", name: "Västernorrlands län" },
          "SE-0-U": { code: "U", name: "Västmanlands län" },
          "SE-0-O": { code: "O", name: "Västra Götalands län" },
          "SE-0-T": { code: "T", name: "Örebro län" },
          "SE-0-E": { code: "E", name: "Östergötlands län" }
        },
        [o.Country.NO]: {
          "NO-0-2": { code: "2", name: "Akershus" },
          "NO-0-9": { code: "9", name: "Aust-Agder" },
          "NO-0-6": { code: "6", name: "Buskerud" },
          "NO-0-20": { code: "20", name: "Finnmark" },
          "NO-0-4": { code: "4", name: "Hedmark" },
          "NO-0-12": { code: "12", name: "Hordaland" },
          "NO-0-15": { code: "15", name: "Møre og Romsdal" },
          "NO-0-18": { code: "18", name: "Nordland" },
          "NO-0-17": { code: "17", name: "Nord-Trøndelag" },
          "NO-0-5": { code: "5", name: "Oppland" },
          "NO-0-3": { code: "3", name: "Oslo" },
          "NO-0-11": { code: "11", name: "Rogaland" },
          "NO-0-14": { code: "14", name: "Sogn og Fjordane" },
          "NO-0-16": { code: "16", name: "Sør-Trøndelag" },
          "NO-0-8": { code: "8", name: "Telemark" },
          "NO-0-19": { code: "19", name: "Troms" },
          "NO-0-10": { code: "10", name: "Vest-Agder" },
          "NO-0-7": { code: "7", name: "Vestfold" },
          "NO-0-1": { code: "1", name: "Østfold" },
          "NO-0-22": { code: "22", name: "Jan Mayen" },
          "NO-0-21": { code: "21", name: "Svalbard" }
        },
        [o.Country.NL]: {
          "NL-0-DR": { code: "DR", name: "Drenthe" },
          "NL-0-FL": { code: "FL", name: "Flevoland" },
          "NL-0-FR": { code: "FR", name: "Fryslân" },
          "NL-0-GE": { code: "GE", name: "Gelderland" },
          "NL-0-GR": { code: "GR", name: "Groningen" },
          "NL-0-LI": { code: "LI", name: "Limburg" },
          "NL-0-NB": { code: "NB", name: "Noord-Brabant" },
          "NL-0-NH": { code: "NH", name: "Noord-Holland" },
          "NL-0-OV": { code: "OV", name: "Overijssel" },
          "NL-0-UT": { code: "UT", name: "Utrecht" },
          "NL-0-ZE": { code: "ZE", name: "Zeeland" },
          "NL-0-ZH": { code: "ZH", name: "Zuid-Holland" }
        },
        [o.Country.PT]: {
          "PT-0-1": { code: "1", name: "Aveiro" },
          "PT-0-2": { code: "2", name: "Beja" },
          "PT-0-3": { code: "3", name: "Braga" },
          "PT-0-4": { code: "4", name: "Bragança" },
          "PT-0-5": { code: "5", name: "Castelo Branco" },
          "PT-0-6": { code: "6", name: "Coimbra" },
          "PT-0-7": { code: "7", name: "Évora" },
          "PT-0-8": { code: "8", name: "Faro" },
          "PT-0-9": { code: "9", name: "Guarda" },
          "PT-0-10": { code: "10", name: "Leiria" },
          "PT-0-11": { code: "11", name: "Lisboa" },
          "PT-0-12": { code: "12", name: "Portalegre" },
          "PT-0-13": { code: "13", name: "Porto" },
          "PT-0-14": { code: "14", name: "Santarém" },
          "PT-0-15": { code: "15", name: "Setúbal" },
          "PT-0-16": { code: "16", name: "Viana do Castelo" },
          "PT-0-17": { code: "17", name: "Vila Real" },
          "PT-0-18": { code: "18", name: "Viseu" },
          "PT-0-20": { code: "20", name: "Região Autónoma dos Açores" },
          "PT-0-30": { code: "30", name: "Região Autónoma da Madeira" }
        }
      }),
        (t.GeographicStatesLevel1 = {
          [o.Country.AR]: {
            "AR-1-C": { code: "C", name: "Ciudad Autónoma de Buenos Aires" },
            "AR-1-B": { code: "B", name: "Buenos Aires" },
            "AR-1-K": { code: "K", name: "Catamarca" },
            "AR-1-H": { code: "H", name: "Chaco" },
            "AR-1-U": { code: "U", name: "Chubut" },
            "AR-1-X": { code: "X", name: "Córdoba" },
            "AR-1-W": { code: "W", name: "Corrientes" },
            "AR-1-E": { code: "E", name: "Entre Ríos" },
            "AR-1-P": { code: "P", name: "Formosa" },
            "AR-1-Y": { code: "Y", name: "Jujuy" },
            "AR-1-L": { code: "L", name: "La Pampa" },
            "AR-1-F": { code: "F", name: "La Rioja" },
            "AR-1-M": { code: "M", name: "Mendoza" },
            "AR-1-N": { code: "N", name: "Misiones" },
            "AR-1-Q": { code: "Q", name: "Neuquén" },
            "AR-1-R": { code: "R", name: "Río Negro" },
            "AR-1-A": { code: "A", name: "Salta" },
            "AR-1-J": { code: "J", name: "San Juan" },
            "AR-1-D": { code: "D", name: "San Luis" },
            "AR-1-Z": { code: "Z", name: "Santa Cruz" },
            "AR-1-S": { code: "S", name: "Santa Fe" },
            "AR-1-G": { code: "G", name: "Santiago del Estero" },
            "AR-1-V": { code: "V", name: "Tierra del Fuego" },
            "AR-1-T": { code: "T", name: "Tucumán" }
          },
          [o.Country.FR]: {
            "FR-1-01": { code: "01", name: "Ain" },
            "FR-1-02": { code: "02", name: "Aisne" },
            "FR-1-03": { code: "03", name: "Allier" },
            "FR-1-04": { code: "04", name: "Alpes (Hte-Provence)" },
            "FR-1-05": { code: "05", name: "Hautes Alpes" },
            "FR-1-06": { code: "06", name: "Alpes-Maritimes" },
            "FR-1-07": { code: "07", name: "Ardeche" },
            "FR-1-08": { code: "08", name: "Ardennes" },
            "FR-1-09": { code: "09", name: "Ariege" },
            "FR-1-10": { code: "10", name: "Aube" },
            "FR-1-11": { code: "11", name: "Aude" },
            "FR-1-12": { code: "12", name: "Aveyron" },
            "FR-1-67": { code: "67", name: "Bas-Rhin" },
            "FR-1-13": { code: "13", name: "Bouches-du-Rhone" },
            "FR-1-14": { code: "14", name: "Calvados" },
            "FR-1-15": { code: "15", name: "Cantal" },
            "FR-1-16": { code: "16", name: "Charente" },
            "FR-1-17": { code: "17", name: "Charente-Maritime" },
            "FR-1-18": { code: "18", name: "Cher" },
            "FR-1-19": { code: "19", name: "Correze" },
            "FR-1-97": { code: "97", name: "Corse-du-Nord" },
            "FR-1-20": { code: "20", name: "Corse-du-Sud" },
            "FR-1-21": { code: "21", name: "Cote-d'Or" },
            "FR-1-22": { code: "22", name: "Cotes-d'Armor" },
            "FR-1-23": { code: "23", name: "Creuse" },
            "FR-1-96": { code: "96", name: "D.O.M. T.O.M" },
            "FR-1-24": { code: "24", name: "Dordogne" },
            "FR-1-25": { code: "25", name: "Doubs" },
            "FR-1-26": { code: "26", name: "Drome" },
            "FR-1-91": { code: "91", name: "Essonne" },
            "FR-1-27": { code: "27", name: "Eure" },
            "FR-1-28": { code: "28", name: "Eure-et-Loir" },
            "FR-1-29": { code: "29", name: "Finistère" },
            "FR-1-30": { code: "30", name: "Gard" },
            "FR-1-31": { code: "31", name: "Haute Garonne" },
            "FR-1-32": { code: "32", name: "Gers" },
            "FR-1-33": { code: "33", name: "Gironde" },
            "FR-1-99": { code: "99", name: "Guyane" },
            "FR-1-100": { code: "100", name: "Haute-Corse" },
            "FR-1-68": { code: "68", name: "Haut-Rhin" },
            "FR-1-92": { code: "92", name: "Hauts-de-Seine" },
            "FR-1-34": { code: "34", name: "Herault" },
            "FR-1-35": { code: "35", name: "Ille-et-Vilaine" },
            "FR-1-36": { code: "36", name: "Indre" },
            "FR-1-37": { code: "37", name: "Indre-et-Loire" },
            "FR-1-38": { code: "38", name: "Isere" },
            "FR-1-39": { code: "39", name: "Jura" },
            "FR-1-40": { code: "40", name: "Landes" },
            "FR-1-41": { code: "41", name: "Loir-et-Cher" },
            "FR-1-42": { code: "42", name: "Loire" },
            "FR-1-43": { code: "43", name: "Haute Loire" },
            "FR-1-44": { code: "44", name: "Loire-Atlantique" },
            "FR-1-45": { code: "45", name: "Loiret" },
            "FR-1-46": { code: "46", name: "Lot" },
            "FR-1-47": { code: "47", name: "Lot-et-Garonne" },
            "FR-1-48": { code: "48", name: "Lozere" },
            "FR-1-49": { code: "49", name: "Maine-et-Loire" },
            "FR-1-50": { code: "50", name: "Manche" },
            "FR-1-51": { code: "51", name: "Marne" },
            "FR-1-52": { code: "52", name: "Haute Marne" },
            "FR-1-53": { code: "53", name: "Mayenne" },
            "FR-1-54": { code: "54", name: "Meurthe-et-Moselle" },
            "FR-1-55": { code: "55", name: "Meuse" },
            "FR-1-56": { code: "56", name: "Morbihan" },
            "FR-1-57": { code: "57", name: "Moselle" },
            "FR-1-58": { code: "58", name: "Nievre" },
            "FR-1-59": { code: "59", name: "Nord" },
            "FR-1-60": { code: "60", name: "Oise" },
            "FR-1-61": { code: "61", name: "Orne" },
            "FR-1-75": { code: "75", name: "Paris" },
            "FR-1-62": { code: "62", name: "Pas-de-Calais" },
            "FR-1-63": { code: "63", name: "Puy-de-Dôme" },
            "FR-1-65": { code: "65", name: "Hautes Pyrenees" },
            "FR-1-64": { code: "64", name: "Pyrenees-Atlantiques" },
            "FR-1-66": { code: "66", name: "Pyrenees-Orientales" },
            "FR-1-69": { code: "69", name: "Rhone" },
            "FR-1-103": { code: "103", name: "Réunion" },
            "FR-1-70": { code: "70", name: "Haute Saone" },
            "FR-1-71": { code: "71", name: "Saone-et-Loire" },
            "FR-1-72": { code: "72", name: "Sarthe" },
            "FR-1-73": { code: "73", name: "Savoie" },
            "FR-1-74": { code: "74", name: "Haute Savoie" },
            "FR-1-76": { code: "76", name: "Seine-Maritime" },
            "FR-1-93": { code: "93", name: "Seine-Saint-Denis" },
            "FR-1-77": { code: "77", name: "Seine-et-Marne" },
            "FR-1-79": { code: "79", name: "Deux Sevres" },
            "FR-1-80": { code: "80", name: "Somme" },
            "FR-1-81": { code: "81", name: "Tarn" },
            "FR-1-82": { code: "82", name: "Tarn-et-Garonne" },
            "FR-1-90": { code: "90", name: "Territoire-de-Belfort" },
            "FR-1-95": { code: "95", name: "Val-d'Oise" },
            "FR-1-94": { code: "94", name: "Val-de-Marne" },
            "FR-1-83": { code: "83", name: "Var" },
            "FR-1-84": { code: "84", name: "Vaucluse" },
            "FR-1-85": { code: "85", name: "Vendee" },
            "FR-1-86": { code: "86", name: "Vienne" },
            "FR-1-87": { code: "87", name: "Haute Vienne" },
            "FR-1-88": { code: "88", name: "Vosges" },
            "FR-1-89": { code: "89", name: "Yonne" },
            "FR-1-78": { code: "78", name: "Yvelines" }
          },
          [o.Country.ES]: {
            "ES-1-C": { code: "C", name: "A Coruña" },
            "ES-1-VI": { code: "VI", name: "Álava" },
            "ES-1-AB": { code: "AB", name: "Albacete" },
            "ES-1-A": { code: "A", name: "Alicante" },
            "ES-1-AL": { code: "AL", name: "Almería" },
            "ES-1-O": { code: "O", name: "Asturias" },
            "ES-1-AV": { code: "AV", name: "Ávila" },
            "ES-1-BA": { code: "BA", name: "Badajoz" },
            "ES-1-PM": { code: "PM", name: "Illes Balears" },
            "ES-1-B": { code: "B", name: "Barcelona" },
            "ES-1-BU": { code: "BU", name: "Burgos" },
            "ES-1-CC": { code: "CC", name: "Cáceres" },
            "ES-1-CA": { code: "CA", name: "Cádiz" },
            "ES-1-S": { code: "S", name: "Cantabria" },
            "ES-1-CS": { code: "CS", name: "Castellón" },
            "ES-1-CR": { code: "CR", name: "Ciudad Real" },
            "ES-1-CO": { code: "CO", name: "Córdoba" },
            "ES-1-CU": { code: "CU", name: "Cuenca" },
            "ES-1-GI": { code: "GI", name: "Girona" },
            "ES-1-GR": { code: "GR", name: "Granada" },
            "ES-1-GU": { code: "GU", name: "Guadalajara" },
            "ES-1-SS": { code: "SS", name: "Gipuzkoa" },
            "ES-1-H": { code: "H", name: "Huelva" },
            "ES-1-HU": { code: "HU", name: "Huesca" },
            "ES-1-J": { code: "J", name: "Jaén" },
            "ES-1-LO": { code: "LO", name: "La Rioja" },
            "ES-1-GC": { code: "GC", name: "Las Palmas" },
            "ES-1-LE": { code: "LE", name: "León" },
            "ES-1-L": { code: "L", name: "Lleida" },
            "ES-1-LU": { code: "LU", name: "Lugo" },
            "ES-1-M": { code: "M", name: "Madrid" },
            "ES-1-MA": { code: "MA", name: "Málaga" },
            "ES-1-MU": { code: "MU", name: "Murcia" },
            "ES-1-NA": { code: "NA", name: "Navarra" },
            "ES-1-OR": { code: "OR", name: "Ourense" },
            "ES-1-P": { code: "P", name: "Palencia" },
            "ES-1-PO": { code: "PO", name: "Pontevedra" },
            "ES-1-SA": { code: "SA", name: "Salamanca" },
            "ES-1-TF": { code: "TF", name: "Santa Cruz de Tenerife" },
            "ES-1-SG": { code: "SG", name: "Segovia" },
            "ES-1-SE": { code: "SE", name: "Sevilla" },
            "ES-1-SO": { code: "SO", name: "Soria" },
            "ES-1-T": { code: "T", name: "Tarragona" },
            "ES-1-TE": { code: "TE", name: "Teruel" },
            "ES-1-TO": { code: "TO", name: "Toledo" },
            "ES-1-V": { code: "V", name: "Valencia" },
            "ES-1-VA": { code: "VA", name: "Valladolid" },
            "ES-1-BI": { code: "BI", name: "Bizkaia" },
            "ES-1-ZA": { code: "ZA", name: "Zamora" },
            "ES-1-Z": { code: "Z", name: "Zaragoza" }
          },
          [o.Country.IT]: {
            "IT-1-AG": { code: "AG", name: "Agrigento" },
            "IT-1-AL": { code: "AL", name: "Alessandria" },
            "IT-1-AN": { code: "AN", name: "Ancona" },
            "IT-1-AO": { code: "AO", name: "Aosta" },
            "IT-1-AR": { code: "AR", name: "Arezzo" },
            "IT-1-AP": { code: "AP", name: "Ascoli Piceno" },
            "IT-1-AT": { code: "AT", name: "Asti" },
            "IT-1-AV": { code: "AV", name: "Avellino" },
            "IT-1-BA": { code: "BA", name: "Bari" },
            "IT-1-BT": { code: "BT", name: "Barletta-Andria-Trani" },
            "IT-1-BL": { code: "BL", name: "Belluno" },
            "IT-1-BN": { code: "BN", name: "Benevento" },
            "IT-1-BG": { code: "BG", name: "Bergamo" },
            "IT-1-BI": { code: "BI", name: "Biella" },
            "IT-1-BO": { code: "BO", name: "Bologna" },
            "IT-1-BZ": { code: "BZ", name: "Bolzano" },
            "IT-1-BS": { code: "BS", name: "Brescia" },
            "IT-1-BR": { code: "BR", name: "Brindisi" },
            "IT-1-CA": { code: "CA", name: "Cagliari" },
            "IT-1-CL": { code: "CL", name: "Caltanissetta" },
            "IT-1-CB": { code: "CB", name: "Campobasso" },
            "IT-1-CI": { code: "CI", name: "Carbonia-Iglesias" },
            "IT-1-CE": { code: "CE", name: "Caserta" },
            "IT-1-CT": { code: "CT", name: "Catania" },
            "IT-1-CZ": { code: "CZ", name: "Catanzaro" },
            "IT-1-CH": { code: "CH", name: "Chieti" },
            "IT-1-CO": { code: "CO", name: "Como" },
            "IT-1-CS": { code: "CS", name: "Cosenza" },
            "IT-1-CR": { code: "CR", name: "Cremona" },
            "IT-1-KR": { code: "KR", name: "Crotone" },
            "IT-1-CN": { code: "CN", name: "Cuneo" },
            "IT-1-EN": { code: "EN", name: "Enna" },
            "IT-1-FM": { code: "FM", name: "Fermo" },
            "IT-1-FE": { code: "FE", name: "Ferrara" },
            "IT-1-FI": { code: "FI", name: "Firenze" },
            "IT-1-FG": { code: "FG", name: "Foggia" },
            "IT-1-FC": { code: "FC", name: "Forlì-Cesena" },
            "IT-1-FR": { code: "FR", name: "Frosinone" },
            "IT-1-GE": { code: "GE", name: "Genova" },
            "IT-1-GO": { code: "GO", name: "Gorizia" },
            "IT-1-GR": { code: "GR", name: "Grosseto" },
            "IT-1-IM": { code: "IM", name: "Imperia" },
            "IT-1-IS": { code: "IS", name: "Isernia" },
            "IT-1-SP": { code: "SP", name: "La Spezia" },
            "IT-1-AQ": { code: "AQ", name: "L'Aquila" },
            "IT-1-LT": { code: "LT", name: "Latina" },
            "IT-1-LE": { code: "LE", name: "Lecce" },
            "IT-1-LC": { code: "LC", name: "Lecco" },
            "IT-1-LI": { code: "LI", name: "Livorno" },
            "IT-1-LO": { code: "LO", name: "Lodi" },
            "IT-1-LU": { code: "LU", name: "Lucca" },
            "IT-1-MC": { code: "MC", name: "Macerata" },
            "IT-1-MN": { code: "MN", name: "Mantova" },
            "IT-1-MS": { code: "MS", name: "Massa-Carrara" },
            "IT-1-MT": { code: "MT", name: "Matera" },
            "IT-1-VS": { code: "VS", name: "Medio Campidano" },
            "IT-1-ME": { code: "ME", name: "Messina" },
            "IT-1-MI": { code: "MI", name: "Milano" },
            "IT-1-MO": { code: "MO", name: "Modena" },
            "IT-1-MB": { code: "MB", name: "Monza e Brianza" },
            "IT-1-NA": { code: "NA", name: "Napoli" },
            "IT-1-NO": { code: "NO", name: "Novara" },
            "IT-1-NU": { code: "NU", name: "Nuoro" },
            "IT-1-OG": { code: "OG", name: "Ogliastra" },
            "IT-1-OT": { code: "OT", name: "Olbia-Tempio" },
            "IT-1-OR": { code: "OR", name: "Oristano" },
            "IT-1-PD": { code: "PD", name: "Padova" },
            "IT-1-PA": { code: "PA", name: "Palermo" },
            "IT-1-PR": { code: "PR", name: "Parma" },
            "IT-1-PV": { code: "PV", name: "Pavia" },
            "IT-1-PG": { code: "PG", name: "Perugia" },
            "IT-1-PU": { code: "PU", name: "Pesaro e Urbino" },
            "IT-1-PE": { code: "PE", name: "Pescara" },
            "IT-1-PC": { code: "PC", name: "Piacenza" },
            "IT-1-PI": { code: "PI", name: "Pisa" },
            "IT-1-PT": { code: "PT", name: "Pistoia" },
            "IT-1-PN": { code: "PN", name: "Pordenone" },
            "IT-1-PZ": { code: "PZ", name: "Potenza" },
            "IT-1-PO": { code: "PO", name: "Prato" },
            "IT-1-RG": { code: "RG", name: "Ragusa" },
            "IT-1-RA": { code: "RA", name: "Ravenna" },
            "IT-1-RC": { code: "RC", name: "Reggio Calabria" },
            "IT-1-RE": { code: "RE", name: "Reggio Emilia" },
            "IT-1-RI": { code: "RI", name: "Rieti" },
            "IT-1-RN": { code: "RN", name: "Rimini" },
            "IT-1-RM": { code: "RM", name: "Roma" },
            "IT-1-RO": { code: "RO", name: "Rovigo" },
            "IT-1-SA": { code: "SA", name: "Salerno" },
            "IT-1-SS": { code: "SS", name: "Sassari" },
            "IT-1-SV": { code: "SV", name: "Savona" },
            "IT-1-SI": { code: "SI", name: "Siena" },
            "IT-1-SR": { code: "SR", name: "Siracusa" },
            "IT-1-SO": { code: "SO", name: "Sondrio" },
            "IT-1-TA": { code: "TA", name: "Taranto" },
            "IT-1-TE": { code: "TE", name: "Teramo" },
            "IT-1-TR": { code: "TR", name: "Terni" },
            "IT-1-TO": { code: "TO", name: "Torino" },
            "IT-1-TP": { code: "TP", name: "Trapani" },
            "IT-1-TN": { code: "TN", name: "Trento" },
            "IT-1-TV": { code: "TV", name: "Treviso" },
            "IT-1-TS": { code: "TS", name: "Trieste" },
            "IT-1-UD": { code: "UD", name: "Udine" },
            "IT-1-VA": { code: "VA", name: "Varese" },
            "IT-1-VE": { code: "VE", name: "Venezia" },
            "IT-1-VB": { code: "VB", name: "Verbano-Cusio-Ossola" },
            "IT-1-VC": { code: "VC", name: "Vercelli" },
            "IT-1-VR": { code: "VR", name: "Verona" },
            "IT-1-VV": { code: "VV", name: "Vibo Valentia" },
            "IT-1-VI": { code: "VI", name: "Vicenza" },
            "IT-1-VT": { code: "VT", name: "Viterbo" }
          },
          [o.Country.BE]: {
            "BE-1-VAN": { code: "VAN", name: "Antwerpen" },
            "BE-1-WBR": { code: "WBR", name: "Brabant wallon" },
            "BE-1-WHT": { code: "WHT", name: "Hainaut" },
            "BE-1-WLG": { code: "WLG", name: "Liège" },
            "BE-1-VLI": { code: "VLI", name: "Limburg" },
            "BE-1-WLX": { code: "WLX", name: "Luxembourg" },
            "BE-1-WNA": { code: "WNA", name: "Namur" },
            "BE-1-VOV": { code: "VOV", name: "Oost-Vlaanderen" },
            "BE-1-VBR": { code: "VBR", name: "Vlaams-Brabant" },
            "BE-1-VWV": { code: "VWV", name: "West-Vlaanderen" }
          }
        });
    },
    889690: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.processQuery = void 0);
      const o = r(453576),
        n = r(338495);
      t.processQuery = function (e) {
        return { type: o.StaticDataQueryType.GEOGRAPHIC_STATES, collection: (0, n.getStatesForLocaleFormats)(e.level, e.localeFormats) };
      };
    },
    338495: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findStateCode = t.findStateLevel2Name = t.findStateName = t.getStatesForLocaleFormats = t.isStateValid = void 0);
      const o = r(453576),
        n = r(180814);
      (t.isStateValid = function (e, t) {
        return (
          t in
          (function (e) {
            return { ...(n.GeographicStatesLevel0[e] || {}), ...(n.GeographicStatesLevel1[e] || {}) };
          })(e)
        );
      }),
        (t.getStatesForLocaleFormats = function (e, t) {
          const r = e === o.GeographicStateLevel.LEVEL_0 ? n.GeographicStatesLevel0 : n.GeographicStatesLevel1;
          return t ? t.filter((e) => !!r[e]).reduce((e, t) => Object.assign({}, e, { [t]: r[t] }), {}) : r;
        });
      const i = (e, t) => {
        let r = "";
        if (!e) return r;
        const o = Object.keys(t);
        for (let n = 0; n < o.length && !r; n++) r = t[o[n]]?.[e]?.name ?? "";
        return r || e;
      };
      (t.findStateName = (e) => i(e, n.GeographicStatesLevel0)),
        (t.findStateLevel2Name = (e) => i(e, n.GeographicStatesLevel1)),
        (t.findStateCode = (e, t) => n.GeographicStatesLevel0[e]?.[t]?.code ?? "");
    },
    774504: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.allowedExtensions = void 0),
        (t.allowedExtensions = [
          ".docx",
          ".doc",
          ".xlsx",
          ".xls",
          ".ppt",
          ".pptx",
          ".pdf",
          ".txt",
          ".zip",
          ".key",
          ".png",
          ".jpg",
          ".jpeg",
          ".gif",
          ".tiff",
          ".bmp",
          ".heif",
          ".heic",
          ".odt",
          ".avi",
          ".ogg",
          ".m4a",
          ".mov",
          ".mp3",
          ".mp4",
          ".mpg",
          ".wav",
          ".ods",
          ".rar",
          ".7z",
          ".mkv",
          ".raw",
          ".db",
          ".aac",
          ".3gp",
          ".webm",
          ".flac",
          ".csv",
          ".wmv",
          ".tar",
          ".odp",
          ".odg",
          ".gzip"
        ]);
    },
    498337: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSecureDocumentsAllowedMimeTypes = t.getSecureDocumentsAllowedExtensions = void 0);
      const o = r(774504),
        n = r(956196);
      (t.getSecureDocumentsAllowedExtensions = function () {
        return o.allowedExtensions;
      }),
        (t.getSecureDocumentsAllowedMimeTypes = function () {
          return n.allowedMimeTypes;
        });
    },
    956196: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.allowedMimeTypes = void 0),
        (t.allowedMimeTypes = [
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "application/pdf",
          "text/plain",
          "application/zip",
          "application/x-zip-compressed",
          "multipart/x-zip",
          "application/pkcs8",
          "application/x-iwork-keynote-sffkey",
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/tiff",
          "image/bmp",
          "image/heic",
          "image/heif",
          "image/heic-sequence",
          "image/heif-sequence",
          "application/vnd.oasis.opendocument.text",
          "video/avi",
          "video/msvideo",
          "video/x-msvideo",
          "audio/ogg",
          "video/ogg",
          "video/quicktime",
          "audio/mpeg",
          "audio/mp4",
          "video/mp4",
          "video/mpeg",
          "audio/wav",
          "audio/x-wav",
          "video/x-ms-wmv",
          "application/vnd.oasis.opendocument.spreadsheet",
          "application/x-rar-compressed",
          "application/x-rar",
          "application/vnd.rar",
          "application/x-7z-compressed",
          "video/x-matroska",
          "video/raw",
          "application/x-sqlite3",
          "application/x-ole-storage",
          "audio/aac",
          "audio/x-aac",
          "video/3gpp",
          "audio/webm",
          "video/webm",
          "audio/flac",
          "application/gzip",
          "application/tar",
          "application/x-tar",
          "application/tar+gzip",
          "application/x-compressed-tar",
          "application/x-gzip",
          "application/octet-stream",
          "application/vnd.oasis.opendocument.presentation",
          "application/vnd.oasis.opendocument.graphics"
        ]);
    },
    633332: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeStaticDataController = void 0);
      const o = r(453576),
        n = r(139003),
        i = r(889690);
      t.makeStaticDataController = () => ({ query: s });
      class a extends Error {
        constructor(e) {
          super(`Unexpected StaticDataQuery type (${e})`);
        }
      }
      function s(e) {
        try {
          return {
            results:
              ((t = e.queries),
              t.map((e) => {
                switch (e.type) {
                  case o.StaticDataQueryType.CALLING_CODES:
                    return (0, n.processQuery)();
                  case o.StaticDataQueryType.GEOGRAPHIC_STATES:
                    return (0, i.processQuery)(e);
                  default:
                    throw new a(e);
                }
              })),
            error: null
          };
        } catch (e) {
          return { results: [], error: e };
        }
        var t;
      }
    },
    764765: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      const o = r(383400);
      t.bootstrap = (e) => {
        e.register(o.config);
      };
    },
    49183: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.bootstrap = void 0);
      var o = r(764765);
      Object.defineProperty(t, "bootstrap", {
        enumerable: !0,
        get: function () {
          return o.bootstrap;
        }
      });
    },
    492215: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.convertDeviceKeysToUki = t.convertUkiToDeviceKeys = void 0),
        (t.convertUkiToDeviceKeys = (e) => {
          if (e) {
            const t = e.split("-");
            if (t.length > 0) {
              const [r] = t;
              return { accessKey: r, secretKey: e };
            }
          }
          return null;
        }),
        (t.convertDeviceKeysToUki = (e) => `${e.accessKey}-${e.secretKey}`);
    },
    727885: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasSpecialUserGroupAccessInSpace =
          t.hasTACAccessInCurrentSpace =
          t.getNodePremiumStatusSpaceData =
          t.isGroupManagerInCurrentSpace =
          t.isTeamAdminInCurrentSpace =
          t.isBillingAdminInCurrentSpace =
          t.getCurrentTeamId =
          t.getCurrentSpaceId =
          t.getCurrentSpace =
            void 0);
      const o = r(766833),
        n = r(895343);
      (t.getCurrentSpace = (e) => e.spaces.find((e) => "accepted" === e.details.status)),
        (t.getCurrentSpaceId = (e) => {
          const r = (0, t.getCurrentSpace)(e);
          return r ? Number(r.teamId) : void 0;
        }),
        (t.getCurrentTeamId = t.getCurrentSpaceId),
        (t.isBillingAdminInCurrentSpace = (e) => {
          const r = (0, t.getCurrentSpace)(e);
          return !!r && r.details.isBillingAdmin;
        }),
        (t.isTeamAdminInCurrentSpace = (e) => {
          const r = (0, t.getCurrentSpace)(e);
          return !!r && r.details.isTeamAdmin;
        }),
        (t.isGroupManagerInCurrentSpace = (e) => {
          const r = (0, t.getCurrentSpace)(e);
          return !!r && r.details.isGroupManager;
        }),
        (t.getNodePremiumStatusSpaceData = (e) => {
          const t = e.getLocalSettings().nodePremiumStatus.spaces,
            r = (0, o.getFreshSpaceData)(t);
          return (0, n.makeSpaceData)(r);
        }),
        (t.hasTACAccessInCurrentSpace = (e) => {
          const r = (0, t.getNodePremiumStatusSpaceData)(e),
            o = (0, t.getCurrentSpace)(r);
          return !!o && (o.details.isTeamAdmin || o.details.isBillingAdmin || o.details.isGroupManager);
        }),
        (t.hasSpecialUserGroupAccessInSpace = (e, t) => {
          const r = t.spaces.find((t) => t.teamId === e && "accepted" === t.details.status);
          return r?.details.isTeamAdmin || r?.details.isGroupManager;
        });
    },
    380722: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeStoreService = void 0);
      const o = r(897082),
        n = r(518948),
        i = r(684762);
      t.makeStoreService = (e) => {
        const t = e?.sessionStorage,
          r = e?.store || (0, i.createStore)(t),
          a = ((e, t) => {
            if (t) {
              let t = () => {};
              const r = new Promise((e) => {
                  t = e;
                }),
                n = (0, o.persistStore)(e, null, t);
              return { completeRehydration: () => r, flush: () => n.flush() };
            }
            return { completeRehydration: () => Promise.resolve(), flush: () => Promise.resolve() };
          })(r, t),
          s = () => r.getState(),
          c = new n.BehaviorSubject(s());
        return (
          r.subscribe(() => c.next(s())),
          {
            ...a,
            dispatch: (e) => r.dispatch(e),
            getABTesting: () => s().device.abtesting,
            getAccountInfo: () => s().userSession.account,
            getAccountCreation: () => s().userSession.accountCreation,
            getLocation: () => s().device.platform.location,
            getSdkAuthentication: () => s().userSession.sdkAuthentication,
            getLocalSettings: () => s().userSession.localSettings,
            getPersonalData: () => s().userSession.personalData,
            getPersonalSettings: () => s().userSession.personalSettings,
            getNotificationStatus: () => s().userSession.notificationsStatus,
            getPlatform: () => s().device.platform,
            getPlatformInfo: () => s().device.platform.info,
            getIconsCache: () => s().userSession.iconsCache,
            getSharingData: () => s().userSession.sharingData,
            getSpaceData: () => s().userSession.spaceData,
            getState$: () => c,
            getState: () => s(),
            getStore: () => r,
            getSubscriptionCode: () => s().userSession.account.subscriptionCode,
            getSyncStatus: () => s().userSession.sync,
            getTeamAdminData: () => s().userSession.teamAdminData,
            getUserLogin: () => s().userSession.account.login,
            getUserSession: () => s().userSession.session,
            isAuthenticated: () => Boolean(s().userSession.session.sessionId && s().userSession.account.isAuthenticated),
            hasSessionId: () => Boolean(s().userSession.session.sessionId)
          }
        );
      };
    },
    568525: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.getGlobalPersistenceReducer = void 0);
      const o = r(897082),
        n = r(884801),
        i = (e) => (t, r) => ({
          ...t,
          ...Object.keys(e).reduce(
            (o, n) => (
              (o[n] = t[n]),
              e[n].forEach((e) => {
                o[n][e] = r[n][e];
              }),
              o
            ),
            {}
          )
        }),
        a = (e) => Object.keys(e).map((t) => (0, n.createBlacklistFilter)(t, e[t]));
      t.getGlobalPersistenceReducer = (e, t, r) => {
        if (r) {
          const n = { key: "root", stateReconciler: i(t), storage: r, version: 1, serialize: !1, deserialize: !1, transforms: a(t) };
          return (0, o.persistReducer)(n, e);
        }
        return e;
      };
    },
    684762: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.createStore = t.globalReducer = void 0);
      const o = r(182422),
        n = r(696186),
        i = r(509149),
        a = r(634007),
        s = r(510319),
        c = r(552653),
        d = r(904572),
        l = r(528417),
        u = r(353439),
        S = r(375417),
        p = r(45316),
        m = r(869018),
        g = r(568525),
        E = r(719764),
        A = r(273651),
        I = (0, o.combineReducers)({
          platform: i.default,
          abtesting: a.default,
          application: s.applicationReducer,
          remoteFile: S.remoteFileReducer,
          globalExtensionSettings: p.globalExtensionSettingsReducer,
          antiPhishing: m.AntiPhishingReducer,
          eventLogger: E.eventLoggerReducer,
          killswitch: A.default
        });
      (t.globalReducer = (e, t) => {
        const r = e ? e.device : void 0,
          o = e ? e.authentication : void 0,
          i = e ? e.userSession : void 0,
          a = e ? e.inMemoryInterSessionUnsynced : void 0;
        return {
          device: I(r, t),
          authentication: (0, c.authenticationReducer)(o, t),
          userSession: (0, d.userSessionReducer)(i, t),
          inMemoryInterSessionUnsynced: (0, n.inMemoryInterSessionUnsyncedSliceReducer)(a, t)
        };
      }),
        (t.createStore = function (e, r) {
          const n = (0, g.getGlobalPersistenceReducer)(
            t.globalReducer,
            { device: u.blacklistedDeviceKeys, userSession: l.blacklistedUserSessionKeys },
            e
          );
          return (0, o.createStore)(n, r);
        });
    }
  }
]);
